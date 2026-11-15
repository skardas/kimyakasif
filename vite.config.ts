import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const UNIT_PACK_PREFIX = 'virtual:unit-pack/';

/**
 * Production builds ship the unit texts as one pack per language (src/data/units/packing.ts)
 * instead of the all-language source files, which cuts the JavaScript loaded at launch by ~4 MB.
 * Imports of `data/units` and `data/units/loader` resolve to `packed.ts`, which loads
 * the JSON pack files behind `virtual:unit-pack/<name>` on demand; each pack is generated here from the audited source files.
 * Dev server, tests and scripts keep using the full source.
 */
function unitLanguagePacks(): Plugin {
  const unitsDir = fileURLToPath(new URL('./src/data/units/', import.meta.url));
  const indexFile = path.join(unitsDir, 'index.ts');
  const loaderFile = path.join(unitsDir, 'loader.ts');
  const packedFile = path.join(unitsDir, 'packed.ts');

  type Packing = {
    buildBasePack: (units: unknown) => unknown;
    buildLanguageStrings: (units: unknown, lang: string) => unknown[];
    UNIT_PACK_LANGS: readonly string[];
  };
  let source: Promise<{ units: unknown; packing: Packing }> | null = null;
  const loadSource = () =>
    (source ??= (async () => {
      const { tsImport } = await import('tsx/esm/api');
      const index = await tsImport(pathToFileURL(indexFile).href, import.meta.url);
      const packing = await tsImport(pathToFileURL(path.join(unitsDir, 'packing.ts')).href, import.meta.url);
      return { units: index.ALL_CHEMISTRY_UNITS, packing: packing as Packing };
    })());

  return {
    name: 'unit-language-packs',
    apply: 'build',
    enforce: 'pre',
    async resolveId(id, importer, options) {
      if (id.startsWith(UNIT_PACK_PREFIX)) return '\0' + id;
      if (!importer || importer === packedFile || !/(?:units(?:\/index)?|\/loader)(?:\.ts)?$/.test(id)) return null;
      const resolved = await this.resolve(id, importer, { ...options, skipSelf: true });
      return resolved && (resolved.id === indexFile || resolved.id === loaderFile) ? packedFile : null;
    },
    async load(id) {
      if (!id.startsWith('\0' + UNIT_PACK_PREFIX)) return null;
      const name = id.slice(1 + UNIT_PACK_PREFIX.length);
      const { units, packing } = await loadSource();
      let pack: unknown;
      if (name === 'base') pack = packing.buildBasePack(units);
      else if (name !== 'tr' && packing.UNIT_PACK_LANGS.includes(name)) pack = packing.buildLanguageStrings(units, name);
      else this.error(`unknown unit pack: ${name}`);
      // Emitted as a JSON file and fetched at run time rather than inlined in a module: V8 keeps a
      // module's source text alive as long as the module, so inlined data would sit in memory twice
      // (source + parsed objects). A fetched body is garbage once parsed.
      const ref = this.emitFile({ type: 'asset', name: `units-${name}.json`, source: JSON.stringify(pack) });
      return `export default import.meta.ROLLUP_FILE_URL_${ref};`;
    },
  };
}

export default defineConfig({
  plugins: [
    unitLanguagePacks(),
    react(),
    {
      // KaTeX lists woff2, woff and ttf for every face; every WebView this app targets reads woff2,
      // so the two legacy formats are dropped before Vite copies them into the bundle.
      name: 'katex-woff2-only',
      enforce: 'pre',
      transform(code: string, id: string) {
        if (!/katex[\\/]dist[\\/]katex(?:\.min)?\.css/.test(id)) return null;
        return code.replace(/,\s*url\([^)]*\.(?:woff|ttf)\)\s*format\("(?:woff|truetype)"\)/g, '');
      },
    },
  ],
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three';
          if (id.includes('node_modules')) return 'vendor';
          // The unit source files (src/data/units/u*.ts) never reach the bundle: unitLanguagePacks
          // ships them as JSON packs.
        },
      },
    },
  },
});
