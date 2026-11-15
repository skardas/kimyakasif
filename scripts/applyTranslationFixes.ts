/**
 * Apply reviewed ar/ku translation fixes to src/data/units/uNN.ts.
 *
 *   npx tsx scripts/applyTranslationFixes.ts [--dir <workdir>] [--only <substring>] [--dry-run]
 *
 * Input: every `fixes.<lang>.uNN.json` in --dir (default DEFAULT_WORK_DIR), each an array of
 *   { "path": "u13.osymTwins[u13-twin01].figure.labels.meet", "lang": "ar", "old": "…", "new": "…", "reason": "…" }
 * `old` is the exact current value, `new` the replacement. --only restricts which fix files are
 * applied in this run (substring of the file name, e.g. `--only u13` or `--only fixes.ku.`); all fix
 * files in the directory still count as "allowed" paths for the post-condition, so earlier
 * (uncommitted) runs do not trip it.
 *
 * Replacement: the unit files are JSON-style literals, so the script replaces the exact text
 * `"<lang>": ${JSON.stringify(old)}` inside the block of the nearest `[id]` of the path (from the
 * `"id": "<id>"` line to the closing brace of that element). Exactly one match is required, else the
 * whole run aborts before writing. A fix whose path already holds `new` is reported and skipped.
 *
 * Post-condition (on the in-memory result for --dry-run, on the reloaded files otherwise), against
 * `git show HEAD:` for all 24 units:
 *   - every LocalizedText value other than ar/ku, and every non-text field (ids, correctIndex, figure
 *     geometry, markup, plain figure strings), is deep-equal to HEAD;
 *   - the ar/ku paths that differ from HEAD are a subset of the paths in the fix files;
 *   - every fix applied in this run now holds its `new` value.
 * On failure after writing, the original files are restored and the script exits 1.
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import {
  DEFAULT_WORK_DIR,
  REPO_ROOT,
  UNIT_IDS,
  argValue,
  firstDiff,
  flattenUnit,
  loadUnitAtRev,
  loadUnitFromSource,
  maskLangs,
  unitRelPath,
  type Unit,
} from './i18nReviewLib';

const DIR = argValue('--dir') ?? DEFAULT_WORK_DIR;
const ONLY = argValue('--only');
const DRY = process.argv.includes('--dry-run');
const FIX_LANGS = ['ar', 'ku'] as const;
type FixLang = (typeof FIX_LANGS)[number];

interface Fix {
  path: string;
  lang: FixLang;
  old: string;
  new: string;
  reason: string;
  file: string;
}

function die(msg: string): never {
  console.error(`ABORT: ${msg}`);
  process.exit(1);
}

// ---------- read and validate fix lists ----------
const FILE_RE = /^fixes\.(ar|ku)\.(u\d\d)\.json$/;
const allFiles = readdirSync(DIR).filter((f) => FILE_RE.test(f)).sort();
const runFiles = allFiles.filter((f) => !ONLY || f.includes(ONLY));
if (!runFiles.length) die(`no fixes.<lang>.uNN.json files${ONLY ? ` matching '${ONLY}'` : ''} in ${DIR}`);

const allowed = new Set<string>(); // `${lang} ${path}` over ALL fix files
const runFixes: Fix[] = [];
const errors: string[] = [];
for (const file of allFiles) {
  const [, fileLang, fileUnit] = file.match(FILE_RE)!;
  let list: unknown;
  try {
    list = JSON.parse(readFileSync(join(DIR, file), 'utf8'));
  } catch (e) {
    errors.push(`${file}: invalid JSON (${(e as Error).message})`);
    continue;
  }
  if (!Array.isArray(list)) {
    errors.push(`${file}: top level must be an array`);
    continue;
  }
  list.forEach((raw, i) => {
    const f = raw as Partial<Fix>;
    const where = `${file}[${i}]`;
    if (typeof f.path !== 'string' || typeof f.old !== 'string' || typeof f.new !== 'string') {
      errors.push(`${where}: path/old/new must be strings`);
      return;
    }
    if (f.lang !== fileLang) errors.push(`${where}: lang '${f.lang}' != file language '${fileLang}'`);
    if (!f.path.startsWith(`${fileUnit}.`)) errors.push(`${where}: path '${f.path}' not in ${fileUnit}`);
    if (f.old === f.new) errors.push(`${where}: old === new`);
    if (typeof f.reason !== 'string' || !f.reason.trim()) errors.push(`${where}: reason missing`);
    const key = `${fileLang} ${f.path}`;
    if (allowed.has(key)) errors.push(`${where}: duplicate fix for ${key}`);
    allowed.add(key);
    if (runFiles.includes(file)) runFixes.push({ ...(f as Fix), lang: fileLang as FixLang, file });
  });
}
if (errors.length) die(`invalid fix lists:\n  ${errors.join('\n  ')}`);

// ---------- locate and replace ----------
const lineStart = (s: string, i: number) => s.lastIndexOf('\n', i - 1) + 1;

/** [start, end) of the element block that carries `"id": "<id>"`. */
function idBlock(src: string, id: string): [number, number] {
  const needle = `"id": ${JSON.stringify(id)}`;
  const first = src.indexOf(needle);
  if (first < 0) throw new Error(`id '${id}' not found`);
  if (src.indexOf(needle, first + 1) >= 0) throw new Error(`id '${id}' occurs more than once`);
  const ls = lineStart(src, first);
  const indent = first - ls;
  // The element's closing brace sits two spaces left of its properties.
  const close = new RegExp(`\\n {${Math.max(indent - 2, 0)}}[}\\]]`, 'g');
  close.lastIndex = first;
  const m = close.exec(src);
  return [ls, m ? m.index + 1 : src.length];
}

function nearestId(path: string, unitId: string): string {
  const ids = [...path.matchAll(/\[([^\]]+)\]/g)].map((m) => m[1]).filter((s) => !/^\d+$/.test(s));
  return ids.length ? ids[ids.length - 1] : unitId;
}

/**
 * Tie-break for an ambiguous match (e.g. two identical table cells in one figure): offset of the
 * `"<lang>": ` key of the LocalizedText at `path`, found by a position-tracking scan of the JSON
 * literal. Paths use the same naming as flattenUnit (array elements by `id`, else index).
 */
function exactOffset(src: string, unitId: string, path: string, lang: string): number | undefined {
  let i = src.indexOf('= {') + 2;
  const found = new Map<string, number>();
  const ws = () => {
    while (/\s/.test(src[i])) i++;
  };
  const str = (): string => {
    const start = i;
    i++;
    while (src[i] !== '"') i += src[i] === '\\' ? 2 : 1;
    i++;
    return JSON.parse(src.slice(start, i)) as string;
  };
  const val = (p: string): unknown => {
    ws();
    if (src[i] === '{') {
      i++;
      const o: Record<string, unknown> = {};
      ws();
      if (src[i] === '}') return i++, o;
      for (;;) {
        ws();
        const keyAt = i;
        const k = str();
        ws();
        i++; // ':'
        o[k] = val(`${p}.${k}`);
        if (k === lang) found.set(p, keyAt);
        ws();
        if (src[i++] === '}') return o;
      }
    }
    if (src[i] === '[') {
      i++;
      const a: unknown[] = [];
      ws();
      if (src[i] === ']') return i++, a;
      for (;;) {
        // provisional index path; renamed to the id path below once the element is parsed
        const prov = `${p}[#${a.length}]`;
        const before = new Set(found.keys());
        const el = val(prov);
        const id = el && typeof el === 'object' && typeof (el as { id?: unknown }).id === 'string' ? (el as { id: string }).id : String(a.length);
        for (const [k, v] of [...found]) {
          if (!before.has(k) && k.startsWith(prov)) {
            found.delete(k);
            found.set(`${p}[${id}]${k.slice(prov.length)}`, v);
          }
        }
        a.push(el);
        ws();
        if (src[i++] === ']') return a;
      }
    }
    if (src[i] === '"') return str();
    const m = /^-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|^true|^false|^null/.exec(src.slice(i, i + 40));
    if (!m) throw new Error(`unexpected token at ${i}`);
    i += m[0].length;
    return JSON.parse(m[0]);
  };
  val(unitId);
  return found.get(path);
}

const getAt = (unit: Unit, path: string, lang: FixLang) => flattenUnit(unit).texts.get(path)?.[lang];

const original = new Map<string, string>(); // unitId -> source on disk now
const updated = new Map<string, string>(); // unitId -> source after this run
const byUnit = new Map<string, Fix[]>();
for (const f of runFixes) {
  const u = f.path.slice(0, 3);
  if (!byUnit.has(u)) byUnit.set(u, []);
  byUnit.get(u)!.push(f);
}

let applied = 0;
let already = 0;
const problems: string[] = [];
for (const [unitId, fixes] of byUnit) {
  const src = readFileSync(resolve(REPO_ROOT, unitRelPath(unitId)), 'utf8');
  original.set(unitId, src);
  const current = loadUnitFromSource(src, unitId);
  const edits: Array<{ at: number; len: number; text: string; fix: Fix }> = [];
  for (const f of fixes) {
    const tag = `${f.file} ${f.lang} ${f.path}`;
    const curVal = getAt(current, f.path, f.lang);
    if (curVal === undefined) {
      problems.push(`${tag}: path does not exist`);
      continue;
    }
    if (curVal === f.new) {
      already++;
      console.log(`skip (already applied): ${tag}`);
      continue;
    }
    if (curVal !== f.old) {
      problems.push(`${tag}: 'old' does not match the current value ${JSON.stringify(curVal).slice(0, 120)}`);
      continue;
    }
    let block: [number, number];
    try {
      block = idBlock(src, nearestId(f.path, unitId));
    } catch (e) {
      problems.push(`${tag}: ${(e as Error).message}`);
      continue;
    }
    const needle = `"${f.lang}": ${JSON.stringify(f.old)}`;
    const hits: number[] = [];
    for (let i = src.indexOf(needle, block[0]); i >= 0 && i < block[1]; i = src.indexOf(needle, i + 1)) hits.push(i);
    let at = hits.length === 1 ? hits[0] : -1;
    if (hits.length > 1) {
      // Identical values in one block (e.g. repeated table cells): pick the one at the exact path.
      const exact = exactOffset(src, unitId, f.path, f.lang);
      if (exact !== undefined && hits.includes(exact)) {
        at = exact;
        console.log(`note: ${hits.length} identical values in the id block, resolved by exact path: ${tag}`);
      }
    }
    if (at < 0) {
      problems.push(`${tag}: ${hits.length} matches of the old value in the id block (need exactly 1)`);
      continue;
    }
    edits.push({ at, len: needle.length, text: `"${f.lang}": ${JSON.stringify(f.new)}`, fix: f });
  }
  edits.sort((a, b) => b.at - a.at);
  for (let i = 1; i < edits.length; i++) {
    if (edits[i].at + edits[i].len > edits[i - 1].at) problems.push(`${unitId}: overlapping edits ${edits[i].fix.path} / ${edits[i - 1].fix.path}`);
  }
  let out = src;
  for (const e of edits) out = out.slice(0, e.at) + e.text + out.slice(e.at + e.len);
  applied += edits.length;
  if (out !== src) updated.set(unitId, out);
}
if (problems.length) die(`nothing written:\n  ${problems.join('\n  ')}`);

// ---------- post-condition ----------
function postCondition(sourceOf: (unitId: string) => string): string[] {
  const fails: string[] = [];
  const nowUnits = new Map<string, Unit>();
  for (const unitId of UNIT_IDS) {
    const head = loadUnitAtRev('HEAD', unitId);
    const now = loadUnitFromSource(sourceOf(unitId), unitId);
    nowUnits.set(unitId, now);
    const d = firstDiff(maskLangs(head, FIX_LANGS), maskLangs(now, FIX_LANGS), unitId);
    if (d) fails.push(`non-ar/ku content differs from HEAD: ${d}`);
    const h = flattenUnit(head).texts;
    for (const [path, t] of flattenUnit(now).texts) {
      for (const lang of FIX_LANGS) {
        if (h.get(path)?.[lang] !== t[lang] && !allowed.has(`${lang} ${path}`)) {
          fails.push(`${lang} ${path} differs from HEAD but is in no fix list`);
        }
      }
    }
  }
  for (const f of runFixes) {
    if (getAt(nowUnits.get(f.path.slice(0, 3))!, f.path, f.lang) !== f.new) {
      fails.push(`${f.lang} ${f.path} does not hold its new value`);
    }
  }
  return fails;
}

const diskSource = (u: string) => readFileSync(resolve(REPO_ROOT, unitRelPath(u)), 'utf8');
console.log(
  `${DRY ? '[dry-run] ' : ''}fix files: ${runFiles.length} of ${allFiles.length}; fixes to apply ${applied}, already applied ${already}; units touched ${updated.size}`,
);

if (DRY) {
  const fails = postCondition((u) => updated.get(u) ?? diskSource(u));
  if (fails.length) die(`post-condition would fail:\n  ${fails.slice(0, 50).join('\n  ')}`);
  console.log('[dry-run] post-condition OK; no files written');
  process.exit(0);
}

for (const [u, text] of updated) writeFileSync(resolve(REPO_ROOT, unitRelPath(u)), text);
const fails = postCondition(diskSource);
if (fails.length) {
  for (const [u, text] of original) writeFileSync(resolve(REPO_ROOT, unitRelPath(u)), text);
  die(`post-condition failed, original files restored:\n  ${fails.slice(0, 50).join('\n  ')}`);
}
console.log(`written: ${[...updated.keys()].join(', ') || '(none)'}; post-condition OK`);
