/**
 * Extract the ar/ku strings that changed between a base revision (default origin/main) and the
 * working tree, for a native-speaker review. Read-only on src/.
 *
 *   npx tsx scripts/extractChangedTranslations.ts [--base origin/main] [--out <dir>] [--langs ar,ku]
 *
 * Output (in --out, default DEFAULT_WORK_DIR):
 *   records/uNN.<lang>.json   [{path, status, tr, en, old, cur, oldTr?}]
 *       status 'new'     path (or its <lang> value) did not exist in the base
 *              'changed' the <lang> value differs from the base
 *              'stale'   tr changed but the <lang> value did not (translation may lag)
 *       oldTr is the base tr whenever tr changed.
 *   figurePlain/uNN.json      language-neutral figure strings (table cells, tick/series labels,
 *                             plain captions): [{path, status:'new'|'changed'|'same', value, old?}]
 *   batches/batch_N.json      unit groups u01-u04, u05-u08, ... with record counts per language
 *   batches.md, summary.json
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  DEFAULT_WORK_DIR,
  UNIT_IDS,
  argValue,
  flattenUnit,
  loadUnitAtRev,
  type Lang,
  type Unit,
} from './i18nReviewLib';

const BASE = argValue('--base') ?? 'origin/main';
const OUT = argValue('--out') ?? DEFAULT_WORK_DIR;
const REVIEW_LANGS = (argValue('--langs') ?? 'ar,ku').split(',') as Lang[];

type Status = 'new' | 'changed' | 'stale';
interface Rec {
  path: string;
  status: Status;
  tr: string;
  en: string;
  old: string | null;
  cur: string;
  oldTr?: string;
}

async function loadCurrent(unitId: string): Promise<Unit> {
  const mod = (await import(`../src/data/units/${unitId}.ts`)) as Record<string, unknown>;
  const unit = Object.values(mod).find((v) => !!v && typeof v === 'object' && (v as Unit).id === unitId);
  if (!unit) throw new Error(`${unitId}: no exported unit`);
  return unit as Unit;
}

for (const d of ['records', 'figurePlain', 'batches']) mkdirSync(join(OUT, d), { recursive: true });

const totals: Record<string, Record<Status, number> & { chars: number }> = {};
for (const l of REVIEW_LANGS) totals[l] = { new: 0, changed: 0, stale: 0, chars: 0 };
const perUnit: Record<string, Record<string, Record<Status, number>>> = {};
let newPaths = 0;
let figurePlainNewOrChanged = 0;

for (const unitId of UNIT_IDS) {
  const oldFlat = flattenUnit(loadUnitAtRev(BASE, unitId));
  const curFlat = flattenUnit(await loadCurrent(unitId));
  perUnit[unitId] = {};

  for (const [path] of curFlat.texts) if (!oldFlat.texts.has(path)) newPaths++;

  for (const lang of REVIEW_LANGS) {
    const recs: Rec[] = [];
    for (const [path, cur] of curFlat.texts) {
      const old = oldFlat.texts.get(path);
      const oldVal = old && typeof old[lang] === 'string' ? old[lang] : null;
      let status: Status | null = null;
      if (oldVal === null) status = 'new';
      else if (oldVal !== cur[lang]) status = 'changed';
      else if (old!.tr !== cur.tr) status = 'stale';
      if (!status) continue;
      const rec: Rec = { path, status, tr: cur.tr, en: cur.en, old: oldVal, cur: cur[lang] };
      if (old && old.tr !== cur.tr) rec.oldTr = old.tr;
      recs.push(rec);
      totals[lang][status]++;
      if (status !== 'stale') totals[lang].chars += cur[lang].length;
    }
    const counts = { new: 0, changed: 0, stale: 0 };
    for (const r of recs) counts[r.status]++;
    perUnit[unitId][lang] = counts;
    writeFileSync(join(OUT, 'records', `${unitId}.${lang}.json`), JSON.stringify(recs, null, 2) + '\n');
  }

  const plain = [...curFlat.figurePlain].map(([path, value]) => {
    const old = oldFlat.figurePlain.get(path);
    const status = old === undefined ? 'new' : old === value ? 'same' : 'changed';
    if (status !== 'same') figurePlainNewOrChanged++;
    return old !== undefined && old !== value ? { path, status, value, old } : { path, status, value };
  });
  writeFileSync(join(OUT, 'figurePlain', `${unitId}.json`), JSON.stringify(plain, null, 2) + '\n');
}

// Batches of four units.
const batchLines: string[] = ['# Review batches', '', `Base: ${BASE}. Counts are records (new+changed+stale).`, ''];
const batchesIndex: unknown[] = [];
for (let b = 0; b < UNIT_IDS.length / 4; b++) {
  const units = UNIT_IDS.slice(b * 4, b * 4 + 4);
  const perLang: Record<string, { new: number; changed: number; stale: number; total: number }> = {};
  for (const lang of REVIEW_LANGS) {
    const c = { new: 0, changed: 0, stale: 0, total: 0 };
    for (const u of units) {
      const x = perUnit[u][lang];
      c.new += x.new;
      c.changed += x.changed;
      c.stale += x.stale;
    }
    c.total = c.new + c.changed + c.stale;
    perLang[lang] = c;
  }
  const batch = {
    name: `batch_${b + 1}`,
    units,
    perLang,
    perUnit: Object.fromEntries(units.map((u) => [u, perUnit[u]])),
    files: units.flatMap((u) => [...REVIEW_LANGS.map((l) => `records/${u}.${l}.json`), `figurePlain/${u}.json`]),
  };
  batchesIndex.push(batch);
  writeFileSync(join(OUT, 'batches', `${batch.name}.json`), JSON.stringify(batch, null, 2) + '\n');
  batchLines.push(`## ${batch.name}: ${units[0]}–${units[units.length - 1]}`, '');
  batchLines.push(`| unit | ${REVIEW_LANGS.map((l) => `${l} new/changed/stale`).join(' | ')} |`);
  batchLines.push(`|---|${REVIEW_LANGS.map(() => '---').join('|')}|`);
  for (const u of units) {
    batchLines.push(
      `| ${u} | ${REVIEW_LANGS.map((l) => `${perUnit[u][l].new}/${perUnit[u][l].changed}/${perUnit[u][l].stale}`).join(' | ')} |`,
    );
  }
  batchLines.push(
    `| **total** | ${REVIEW_LANGS.map((l) => `${perLang[l].new}/${perLang[l].changed}/${perLang[l].stale} (= ${perLang[l].total})`).join(' | ')} |`,
    '',
  );
}
writeFileSync(join(OUT, 'batches.md'), batchLines.join('\n'));
writeFileSync(join(OUT, 'batches.json'), JSON.stringify(batchesIndex, null, 2) + '\n');

const summary = { base: BASE, newPaths, figurePlainNewOrChanged, totals, perUnit };
writeFileSync(join(OUT, 'summary.json'), JSON.stringify(summary, null, 2) + '\n');

console.log(`base ${BASE} -> working tree; output ${OUT}`);
console.log(`brand-new LocalizedText paths: ${newPaths}; new/changed plain figure strings: ${figurePlainNewOrChanged}`);
for (const l of REVIEW_LANGS) {
  const t = totals[l];
  console.log(
    `${l}: new ${t.new} + changed ${t.changed} = ${t.new + t.changed} (${t.chars} chars); stale ${t.stale}`,
  );
}
