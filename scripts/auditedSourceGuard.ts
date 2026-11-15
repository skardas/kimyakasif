/**
 * Safety guard for the legacy content generators.
 *
 * src/data/units/u01..u24.ts and src/data/studySlides/* are now the HAND-AUDITED source of truth
 * for the question bank and the study slides. The generators below were used to bootstrap them from
 * tests/e2e/harness/curriculumAdapter.ts and the machine-translation caches
 * (scripts/curriculumTranslationsCache.json, src/data/i18n/curriculumTranslations.json), which still
 * hold the PRE-AUDIT texts. Running them would silently overwrite every audited correction.
 *
 * They therefore refuse to run unless the explicit flag --force-overwrite-audited is passed.
 */
export const FORCE_FLAG = '--force-overwrite-audited';

export function refuseUnlessForced(scriptName: string, overwrites: string[]): void {
  if (process.argv.includes(FORCE_FLAG)) {
    console.warn(`⚠️  ${scriptName}: ${FORCE_FLAG} given — overwriting hand-audited content in: ${overwrites.join(', ')}`);
    return;
  }
  console.error(
    [
      '',
      `⛔ ${scriptName} refused to run.`,
      '',
      'src/data/units/*.ts and src/data/studySlides/* are the hand-audited source of truth.',
      `This script would overwrite: ${overwrites.join(', ')}`,
      'with PRE-AUDIT text from tests/e2e/harness/curriculumAdapter.ts and the translation caches,',
      'undoing every chemistry / translation correction made by hand.',
      '',
      'Edit the unit and slide files directly instead. If you really mean to regenerate them, run:',
      `  npx tsx scripts/${scriptName} ${FORCE_FLAG}`,
      '',
    ].join('\n')
  );
  process.exit(1);
}
