import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
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
          // Kimya YKS: Units u01 to u10 are TYT (Grades 9 & 10)
          if (/src\/data\/units\/u(0[1-9]|10)/.test(id)) return 'units-tyt';
          // Kimya YKS: Units u11 to u24 are AYT (Grades 11 & 12)
          if (/src\/data\/units\/u(1[1-9]|2[0-4])/.test(id)) return 'units-ayt';
        },
      },
    },
  },
});
