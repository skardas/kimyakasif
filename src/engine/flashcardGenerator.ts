import type { LanguageCode } from '../types/chemistry';
import { polishText } from './langPolish';
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

export interface FlashcardTemplate {
  tipLabel: string;
  factPrompt: (title: string, snippet: string) => string;
  trapPrompt: (title: string, trapText: string) => string;
  compPrompt: (title: string, a: string, b: string) => string;
  factAnswerPrefix: string;
  trapAnswerPrefix: string;
  /** Opening verdict on the back of a misconception card ("No — this statement is false."). */
  trapVerdict: string;
  compAnswerPrefix: string;
  defaultTip: string;
  compTip: string;
  fallbackPrompt: (title: string, n: number) => string;
  fallbackAnswer: (subtitle: string) => string;
}

export const FLASHCARD_TEMPLATES: Record<LanguageCode, FlashcardTemplate> = {
  tr: {
    tipLabel: 'ÖSYM İpucu',
    factPrompt: (title, snippet) => `${title} — Temel Kavram: "${snippet} …" ifadesini bilimsel olarak doğru biçimde tamamlayınız.`,
    trapPrompt: (title, trap) => `${title} — Kavram Yanılgısı: "${trap}" yargısı bilimsel olarak doğru mudur?`,
    compPrompt: (title, a, b) => `${title} — Karşılaştırma: ${a} ile ${b} arasındaki temel ayrım nedir?`,
    factAnswerPrefix: 'Doğru Bilgi',
    trapAnswerPrefix: 'Doğru Açıklama',
    trapVerdict: 'Hayır, bu yargı yanlıştır.',
    compAnswerPrefix: 'Ayırıcı Özellik',
    defaultTip: 'ÖSYM sınavlarında bu kavrama ve soru kökündeki ifadelere dikkat ediniz.',
    compTip: 'ÖSYM iki benzer kavramın ayırıcı özelliklerini öncüllü sorularda sıkça test eder.',
    fallbackPrompt: (title, n) => `${title} — Kavram Analizi #${n}`,
    fallbackAnswer: (subtitle) => `Kavram Özeti: ${subtitle}`,
  },
  en: {
    tipLabel: 'Exam Tip',
    factPrompt: (title, snippet) => `${title} — Core Concept: Complete the statement correctly: "${snippet} …"`,
    trapPrompt: (title, trap) => `${title} — Misconception Check: Is the statement "${trap}" scientifically accurate?`,
    compPrompt: (title, a, b) => `${title} — Comparison: What is the fundamental difference between ${a} and ${b}?`,
    factAnswerPrefix: 'Scientific Fact',
    trapAnswerPrefix: 'Scientific Correction',
    trapVerdict: 'No — this statement is false.',
    compAnswerPrefix: 'Distinguishing Trait',
    defaultTip: 'Pay close attention to this concept and the specific phrasing in examination questions.',
    compTip: 'Examiners frequently test the distinguishing traits of similar concepts in multi-statement items.',
    fallbackPrompt: (title, n) => `${title} — Concept Analysis #${n}`,
    fallbackAnswer: (subtitle) => `Concept Summary: ${subtitle}`,
  },
  de: {
    tipLabel: 'Prüfungshinweis',
    factPrompt: (title, snippet) => `${title} — Kernkonzept: Vervollständigen Sie die Aussage fachlich korrekt: "${snippet} …"`,
    trapPrompt: (title, trap) => `${title} — Fehlvorstellungs-Check: Ist die Aussage "${trap}" wissenschaftlich zutreffend?`,
    compPrompt: (title, a, b) => `${title} — Vergleich: Was ist der wesentliche Unterschied zwischen ${a} und ${b}?`,
    factAnswerPrefix: 'Wissenschaftliches Faktum',
    trapAnswerPrefix: 'Richtigstellung',
    trapVerdict: 'Nein — diese Aussage ist falsch.',
    compAnswerPrefix: 'Unterscheidungsmerkmal',
    defaultTip: 'Achten Sie in Prüfungsfragen besonders auf dieses Konzept und die genaue Fragestellung.',
    compTip: 'Prüfungen testen häufig die Unterscheidungsmerkmale ähnlicher chemischer Begriffe.',
    fallbackPrompt: (title, n) => `${title} — Konzeptanalyse #${n}`,
    fallbackAnswer: (subtitle) => `Konzeptübersicht: ${subtitle}`,
  },
  fr: {
    tipLabel: "Conseil d'examen",
    factPrompt: (title, snippet) => `${title} — Notion clé : Complétez correctement l'affirmation : « ${snippet} … »`,
    trapPrompt: (title, trap) => `${title} — Piège classique : L'affirmation "${trap}" est-elle scientifiquement exacte ?`,
    compPrompt: (title, a, b) => `${title} — Comparaison : Quelle est la distinction fondamentale entre ${a} et ${b} ?`,
    factAnswerPrefix: 'Fait scientifique',
    trapAnswerPrefix: 'Explication exacte',
    trapVerdict: 'Non — cette affirmation est fausse.',
    compAnswerPrefix: 'Caractéristique distinctive',
    defaultTip: "Prêtez attention à cette notion et aux termes exacts du sujet d'examen.",
    compTip: 'Les épreuves testent fréquemment les critères distinctifs entre notions chimiques similaires.',
    fallbackPrompt: (title, n) => `${title} — Analyse de notion #${n}`,
    fallbackAnswer: (subtitle) => `Résumé de notion : ${subtitle}`,
  },
  ru: {
    tipLabel: 'Экзаменационная подсказка',
    factPrompt: (title, snippet) => `${title} — Базовое понятие: Закончите утверждение научно верно: «${snippet} …»`,
    trapPrompt: (title, trap) => `${title} — Проверка заблуждения: Верно ли утверждение «${trap}»?`,
    compPrompt: (title, a, b) => `${title} — Сравнение: В чем ключевое различие между «${a}» и «${b}»?`,
    factAnswerPrefix: 'Научный факт',
    trapAnswerPrefix: 'Правильное положение',
    trapVerdict: 'Нет — это утверждение неверно.',
    compAnswerPrefix: 'Отличительное свойство',
    defaultTip: 'Обратите особое внимание на это понятие и формулировки в экзаменационных вопросах.',
    compTip: 'Экзаменаторы часто проверяют отличительные свойства похожих понятий в комплексных вопросах.',
    fallbackPrompt: (title, n) => `${title} — Анализ понятия #${n}`,
    fallbackAnswer: (subtitle) => `Краткий обзор: ${subtitle}`,
  },
  ar: {
    tipLabel: 'إرشادات الاختبار',
    factPrompt: (title, snippet) => `${title} — المفهوم الأساسي: أكمل العبارة بشكل علمي صحيح: "${snippet} …"`,
    trapPrompt: (title, trap) => `${title} — فحص المغالطة: هل العبارة "${trap}" صحيحة علمياً؟`,
    compPrompt: (title, a, b) => `${title} — مقارنة: ما هو الفرق الكيميائي الجوهري بين ${a} و ${b}؟`,
    factAnswerPrefix: 'الحقيقة العلمية',
    trapAnswerPrefix: 'التصحيح العلمي',
    trapVerdict: 'لا، هذه العبارة خاطئة.',
    compAnswerPrefix: 'السمة المميزة',
    defaultTip: 'انتبه جيداً لهذا المفهوم وصياغة السؤال في الامتحانات.',
    compTip: 'غالباً ما تركز أسئلة الامتحانات على السمات المميزة بين المفاهيم المتقاربة.',
    fallbackPrompt: (title, n) => `${title} — تحليل المفهوم #${n}`,
    fallbackAnswer: (subtitle) => `ملخص المفهوم: ${subtitle}`,
  },
  zh: {
    tipLabel: '高考备考建议',
    factPrompt: (title, snippet) => `${title} — 核心考点设问：请科学准确地补全下列说法：“${snippet}……”`,
    trapPrompt: (title, trap) => `${title} — 概念陷阱辨析：“${trap}”这一说法在科学上是否正确？`,
    compPrompt: (title, a, b) => `${title} — 概念对比：“${a}”与“${b}”之间的核心本质区别是什么？`,
    factAnswerPrefix: '科学客观真理',
    trapAnswerPrefix: '科学规范解析',
    trapVerdict: '不正确，这一说法是错误的。',
    compAnswerPrefix: '核心特征区别',
    defaultTip: '在高考备考复习中需特别注意该核心概念及题干设问的具体限定词。',
    compTip: '高考命题常在多重组合选择题中重点考查易混淆概念的区别与联系。',
    fallbackPrompt: (title, n) => `${title} — 概念辨析 #${n}`,
    fallbackAnswer: (subtitle) => `知识点概述：${subtitle}`,
  },
  ku: {
    tipLabel: 'Serşîreta Ezmûnê',
    factPrompt: (title, snippet) => `${title} — Têgeha Bingehîn: Gotinê bi awayekî zanistî rast temam bikin: "${snippet} …"`,
    trapPrompt: (title, trap) => `${title} — Kontrola Xefikê: Gelo îfadeya "${trap}" ji aliyê zanistî ve rast e?`,
    compPrompt: (title, a, b) => `${title} — Berhevdan: Ciyawaziya sereke di navbera ${a} û ${b} de çi ye?`,
    factAnswerPrefix: 'Rastiya Zanistî',
    trapAnswerPrefix: 'Şîroveya Rast',
    trapVerdict: 'Na, ev gotin şaş e.',
    compAnswerPrefix: 'Taybetmendiya Cihêker',
    defaultTip: 'Di ezmûnan de bala xwe bidin vê têgehê û vegotinên koka pirsê.',
    compTip: 'Ezmûn bi gelemperî taybetmendiyên cihêker ên têgehên nêzîkî hev diceribîne.',
    fallbackPrompt: (title, n) => `${title} — Analîza Têgehê #${n}`,
    fallbackAnswer: (subtitle) => `Kurteya Têgehê: ${subtitle}`,
  },
};

/**
 * Opening part of a fact for a cloze-style front ("Lavoisier, Kütlenin Korunumu …"). Always a
 * strict, word-aligned prefix (never cut mid-word) that leaves the essential remainder for the back,
 * so the front no longer contains — or truncates — the whole answer.
 */
function extractSnippet(factText: string, lang: LanguageCode): string {
  const text = factText.trim().replace(/[.。!！]$/u, '');
  if (lang === 'zh') {
    const chars = Array.from(text);
    const take = Math.max(4, Math.min(chars.length - 4, Math.round(chars.length * 0.4)));
    return chars.slice(0, Math.max(1, take)).join('').replace(/[，、：；,:;\s]+$/u, '');
  }
  const words = text.split(/\s+/);
  if (words.length <= 3) return words.slice(0, 1).join(' ');
  const take = Math.max(2, Math.min(words.length - 2, Math.round(words.length * 0.45)));
  return words.slice(0, take).join(' ').replace(/[,:;–—-]+$/u, '');
}

/** Ends a reason with one sentence terminator so it does not run into the next sentence. */
function endSentence(text: string, lang: LanguageCode): string {
  const t = text.trim();
  if (/[.。!！?？؟]$/u.test(t)) return t;
  return lang === 'zh' ? `${t}。` : `${t}.`;
}

/**
 * Localizes and cleans flashcard tips in foreign languages so Turkish institutional acronyms ('ÖSYM')
 * are replaced with localized exam descriptors.
 */
export function sanitizeFlashcardTip(tip: string, lang: LanguageCode, tmpl: FlashcardTemplate): string {
  if (lang === 'tr') return tip;
  if (!/ÖSYM/i.test(tip)) return tip;

  const colon = lang === 'zh' ? '：' : (lang === 'fr' ? ' : ' : ': ');
  if (/^[^:：]*ÖSYM[^:：]*[:：]\s*/i.test(tip)) {
    const stripped = tip.replace(/^[^:：]*ÖSYM[^:：]*[:：]\s*/i, '').trim();
    return `${tmpl.tipLabel}${colon}${stripped}`;
  }
  return tip.replace(/\bÖSYM\b/gi, tmpl.tipLabel);
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
  const tmpl = FLASHCARD_TEMPLATES[lang] || FLASHCARD_TEMPLATES.tr;

  targetUnits.forEach((u) => {
    const factsCount = u.facts?.length || 0;
    const compsCount = u.comparisons?.length || 0;
    const unitTitle = u.title[lang] || u.title.tr;

    for (let i = 0; i < 18; i++) {
      const cardId = `${u.id}-card-${String(i + 1).padStart(2, '0')}`;

      if (i < 16 && factsCount > 0) {
        const factItem = u.facts[i % factsCount];
        const isTrap = i % 2 === 1;
        const factText = factItem.fact?.[lang] || factItem.fact?.['tr'] || '';
        const trapText = factItem.trap?.[lang] || factItem.trap?.['tr'] || '';
        // The reason is only shown in the language it was written in (a Turkish reason on a German
        // card would mix languages); without it the card still gives the verdict and the correct fact.
        const whyFalse = factItem.whyTrapIsFalse?.[lang] || '';
        const rawTip = factItem.osymTip?.[lang] || (lang === 'tr' ? factItem.osymTip?.['tr'] : undefined) || tmpl.defaultTip;
        const tipText = sanitizeFlashcardTip(rawTip, lang, tmpl);

        const snippet = extractSnippet(factText, lang);
        const prompt = isTrap
          ? tmpl.trapPrompt(unitTitle, trapText)
          : tmpl.factPrompt(unitTitle, snippet);

        // Misconception cards now always state the verdict and the correct fact (plus the reason, if any).
        const answer = isTrap
          ? [tmpl.trapVerdict, whyFalse.trim().length > 10 ? endSentence(whyFalse, lang) : '', `${tmpl.trapAnswerPrefix}${lang === 'zh' ? '：' : ': '}${factText}`]
            .filter(Boolean)
            .join(lang === 'zh' ? '' : ' ')
          : `${tmpl.factAnswerPrefix}: ${factText}`;

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
          osymTip: tipText.length > 5 ? tipText : tmpl.defaultTip,
          box: 1,
        });
      } else if (compsCount > 0) {
        const comp = u.comparisons[(i - 16) % compsCount];
        const conceptA = comp.conceptA?.[lang] || comp.conceptA?.['tr'] || '';
        const conceptB = comp.conceptB?.[lang] || comp.conceptB?.['tr'] || '';
        const distinction = comp.distinction?.[lang] || comp.distinction?.['tr'] || '';

        const prompt = tmpl.compPrompt(unitTitle, conceptA, conceptB);
        const answer = `${tmpl.compAnswerPrefix}: ${distinction}`;
        const tipText = tmpl.compTip;

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
        const prompt = tmpl.fallbackPrompt(unitTitle, i + 1);
        const answer = tmpl.fallbackAnswer(u.subtitle[lang] || u.title[lang]);
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
          osymTip: tmpl.defaultTip,
          box: 1,
        });
      }
    }
  });

  return cards.map((c) => ({
    ...c,
    front: polishText(c.front, lang, 'flashcard'),
    frontPrompt: polishText(c.frontPrompt, lang, 'flashcard'),
    back: polishText(c.back, lang, 'flashcard'),
    backAnswer: polishText(c.backAnswer, lang, 'flashcard'),
    osymTip: polishText(c.osymTip, lang, 'flashcard'),
  }));
}
