/**
 * Audits where the units' generic animated diagrams are attached (Turkish bank).
 *
 *   npx tsx scripts/auditDiagramPlacement.ts [--stems u13,u17]
 *
 * Prints, per unit, how many questions carry each figure variant split by topic tier, the full list
 * of attached-but-weak questions (tier < 2, off-topic or giving the answer away), how many eligible
 * questions stayed without a figure, the number of distinct visual questions (diagram or authored
 * figure), and checks that the English bank carries the diagrams on the same question ids.
 * `--stems` additionally prints every attached stem of the listed units for a manual read.
 */
import { ALL_CHEMISTRY_UNITS } from '../src/data/units';
import { compileUnitQuestions } from '../src/engine/questionGenerator';
import { explainDiagramPlacement } from '../src/engine/diagramQuestionEnricher';

const VISUAL_TARGET = 6;
const stemsArg = process.argv.indexOf('--stems');
const stemUnits = new Set(stemsArg >= 0 ? (process.argv[stemsArg + 1] || '').split(',') : []);

const pad = (v: string | number, n: number) => String(v).padStart(n);
const weak: string[] = [];
const lowVisual: string[] = [];
const mismatches: string[] = [];
const stemDump: string[] = [];
let total = 0;
let minVariant = Infinity;

console.log('unit |  V1 t3 t2 t0 |  V2 t3 t2 t0 | total | elig-unattached V1 V2 | visual | en-ids');
for (const unit of ALL_CHEMISTRY_UNITS) {
  const tr = compileUnitQuestions(unit, 'tr');
  const en = compileUnitQuestions(unit, 'en');
  const rows = explainDiagramPlacement(unit, tr);
  const rowOf = new Map(rows.map((r) => [`${r.id}:${r.variant}`, r]));

  const counts = { 1: { all: 0, 3: 0, 2: 0, 0: 0 }, 2: { all: 0, 3: 0, 2: 0, 0: 0 } } as Record<1 | 2, Record<string, number>>;
  for (const q of tr) {
    if (!q.diagram) continue;
    const v = q.diagram.variant as 1 | 2;
    const r = rowOf.get(`${q.id}:${v}`);
    counts[v].all++;
    if (!r) {
      weak.push(`${unit.id} ${q.id} V${v} NO-ROW (twin/figure question carries a diagram) | ${q.stem.slice(0, 90)}`);
      counts[v][0]++;
      continue;
    }
    counts[v][r.topicTier]++;
    if (r.topicTier < 2 || r.offTopic || !r.safe) {
      weak.push(`${unit.id} ${q.id} V${v} tier=${r.topicTier} off=${r.offTopic} safe=${r.safe} rel=${r.legacyRel} | ${r.stem} | key: ${r.key.slice(0, 50)}`);
    }
    if (stemUnits.has(unit.id)) stemDump.push(`${unit.id} V${v} t${r.topicTier} h${r.hits} ${q.id} | ${r.stem} | key: ${r.key.slice(0, 60)}`);
  }
  // explain must agree with what the generator attached
  for (const r of rows) {
    const actual = tr.find((q) => q.id === r.id)?.diagram?.variant === r.variant;
    if (actual !== r.attached) mismatches.push(`${unit.id} ${r.id} V${r.variant}: explain=${r.attached} actual=${actual}`);
  }
  const eligUnattached = (v: 1 | 2) =>
    rows.filter((r) => r.variant === v && !r.attached && r.topicTier >= 2 && r.safe && !r.offTopic && !tr.find((q) => q.id === r.id)?.diagram).length;
  const visual = tr.filter((q) => q.diagram !== undefined || q.figure !== undefined).length;
  if (visual < VISUAL_TARGET) lowVisual.push(`${unit.id}: ${visual}`);
  const trIds = tr.filter((q) => q.diagram).map((q) => `${q.id}:${q.diagram!.variant}`).join(',');
  const enIds = en.filter((q) => q.diagram).map((q) => `${q.id}:${q.diagram!.variant}`).join(',');
  const enOk = trIds === enIds;
  if (!enOk) mismatches.push(`${unit.id}: en diagram ids differ from tr`);
  const unitTotal = counts[1].all + counts[2].all;
  total += unitTotal;
  minVariant = Math.min(minVariant, counts[1].all, counts[2].all);
  console.log(
    `${unit.id}  | ${pad(counts[1].all, 3)} ${pad(counts[1][3], 2)} ${pad(counts[1][2], 2)} ${pad(counts[1][0], 2)} | ` +
      `${pad(counts[2].all, 3)} ${pad(counts[2][3], 2)} ${pad(counts[2][2], 2)} ${pad(counts[2][0], 2)} | ${pad(unitTotal, 5)} | ` +
      `${pad(eligUnattached(1), 18)} ${pad(eligUnattached(2), 2)} | ${pad(visual, 6)} | ${enOk ? 'ok' : 'DIFF'}`
  );
}

console.log(`\nTotal diagrammed (tr): ${total} · smallest per-variant count: ${minVariant}`);
console.log(`\nAttached but weak (${weak.length}):`);
for (const w of weak) console.log(`  ${w}`);
console.log(`\nUnits below ${VISUAL_TARGET} distinct visual questions: ${lowVisual.length ? lowVisual.join(', ') : 'none'}`);
console.log(`Explain/actual or tr/en mismatches: ${mismatches.length ? '\n  ' + mismatches.join('\n  ') : 'none'}`);
if (stemDump.length) {
  console.log('\nAttached stems:');
  for (const s of stemDump) console.log(`  ${s}`);
}
