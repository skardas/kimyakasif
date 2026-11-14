import type { LanguageCode } from '../types/chemistry';
import type { ChemistryUnitSeedData } from '../data/units/types';
import { ALL_CHEMISTRY_UNITS } from '../data/units';
import { LeitnerBoxEngine } from './leitnerEngine';

export { LeitnerBoxEngine };

export interface CompiledFlashcard {
  id: string; // e.g. 'u01-card-01'
  unitId: string; // 'u01' .. 'u24'
  unitOrder: number; // 1 .. 24
  exam: 'TYT' | 'AYT';
  grade: 9 | 10 | 11 | 12;
  category: 'fact' | 'trap' | 'formula' | 'comparison';
  front: string;
  frontPrompt: string;
  back: string;
  backAnswer: string;
  osymTip: string;
  box: 1 | 2 | 3 | 4 | 5;
}

/**
 * Compiles canonical 396 flashcards (22 units * 18 cards each)
 * matching the curriculum contracts in curriculumAdapter.ts and tests.
 */
export function compileAllFlashcards(
  units: ChemistryUnitSeedData[] = ALL_CHEMISTRY_UNITS,
  lang: LanguageCode = 'tr'
): CompiledFlashcard[] {
  const cards: CompiledFlashcard[] = [];
  const targetUnits = units.slice(0, 22);

  targetUnits.forEach((u) => {
    const factsCount = u.facts?.length || 0;
    const compsCount = u.comparisons?.length || 0;

    for (let i = 0; i < 18; i++) {
      const cardId = `${u.id}-card-${String(i + 1).padStart(2, '0')}`;

      if (i < 16 && factsCount > 0) {
        const factItem = u.facts[i % factsCount];
        const isTrap = i % 2 === 1;
        const factText = factItem.fact?.[lang] || factItem.fact?.['tr'] || '';
        const trapText = factItem.trap?.[lang] || factItem.trap?.['tr'] || '';
        const whyFalse = factItem.whyTrapIsFalse?.[lang] || factItem.whyTrapIsFalse?.['tr'] || '';
        const tipText = factItem.osymTip?.[lang] || factItem.osymTip?.['tr'] || 'ÖSYM sınavlarında bu kavrama ve soru kökündeki ifadelere dikkat ediniz.';

        const prompt = isTrap
          ? `${u.title[lang]} — Soru: ${trapText}`
          : `${u.title[lang]} — Soru: ${factText}`;
        const answer = isTrap
          ? (whyFalse.length > 10 ? whyFalse : `Doğru Açıklama: ${factText}`)
          : `Doğru Bilgi: ${factText}`;

        cards.push({
          id: cardId,
          unitId: u.id,
          unitOrder: u.order,
          exam: u.exam,
          grade: u.grade,
          category: isTrap ? 'trap' : 'fact',
          front: prompt,
          frontPrompt: prompt,
          back: answer,
          backAnswer: answer,
          osymTip: tipText.length > 5 ? tipText : 'ÖSYM sınavlarında bu kavrama özellikle dikkat edilmelidir.',
          box: 1,
        });
      } else if (compsCount > 0) {
        const comp = u.comparisons[(i - 16) % compsCount];
        const conceptA = comp.conceptA?.[lang] || comp.conceptA?.['tr'] || '';
        const conceptB = comp.conceptB?.[lang] || comp.conceptB?.['tr'] || '';
        const distinction = comp.distinction?.[lang] || comp.distinction?.['tr'] || '';

        const prompt = `${u.title[lang]} — Karşılaştırma: ${conceptA} ile ${conceptB} arasındaki fark nedir?`;
        const answer = `Ayırıcı Özellik: ${distinction}`;
        const tipText = 'ÖSYM iki benzer kavramın ayırıcı özelliklerini öncüllü sorularda sıkça test eder.';

        cards.push({
          id: cardId,
          unitId: u.id,
          unitOrder: u.order,
          exam: u.exam,
          grade: u.grade,
          category: 'comparison',
          front: prompt,
          frontPrompt: prompt,
          back: answer,
          backAnswer: answer,
          osymTip: tipText,
          box: 1,
        });
      } else {
        // Fallback robust generator
        const prompt = `${u.title[lang]} — Kavram Analizi #${i + 1}`;
        const answer = `Kavram Özeti: ${u.subtitle[lang] || u.title[lang]}`;
        cards.push({
          id: cardId,
          unitId: u.id,
          unitOrder: u.order,
          exam: u.exam,
          grade: u.grade,
          category: 'fact',
          front: prompt,
          frontPrompt: prompt,
          back: answer,
          backAnswer: answer,
          osymTip: 'ÖSYM sınavlarında bu üniteye ait temel kurallar düzenli olarak sorulmaktadır.',
          box: 1,
        });
      }
    }
  });

  return cards;
}
