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
    tipLabel: 'Совет к экзамену',
    factPrompt: (title, snippet) => `${title}. Основное понятие: закончи утверждение так, чтобы оно было верным: «${snippet} …»`,
    trapPrompt: (title, trap) => `${title}. Проверь себя: верно ли утверждение «${trap}»?`,
    compPrompt: (title, a, b) => `${title}. Сравнение: в чём главное различие между понятиями «${a}» и «${b}»?`,
    factAnswerPrefix: 'Факт',
    trapAnswerPrefix: 'Верно так',
    trapVerdict: 'Нет, это утверждение неверно.',
    compAnswerPrefix: 'Различие',
    defaultTip: 'Обрати внимание на это понятие и на точные формулировки в экзаменационных заданиях.',
    compTip: 'На экзамене часто проверяют, чем различаются похожие понятия.',
    fallbackPrompt: (title, n) => `${title}. Понятие № ${n}`,
    fallbackAnswer: (subtitle) => `Кратко: ${subtitle}`,
  },
  ar: {
    tipLabel: 'تنبيه للامتحان',
    factPrompt: (title, snippet) => `${title} — مفهوم أساسي: أكمل العبارة إكمالًا علميًا صحيحًا: "${snippet} …"`,
    trapPrompt: (title, trap) => `${title} — كشف الخطأ: هل العبارة "${trap}" صحيحة علميًا؟`,
    compPrompt: (title, a, b) => `${title} — مقارنة: ما الفرق الجوهري بين ${a} و${b}؟`,
    factAnswerPrefix: 'الحقيقة العلمية',
    trapAnswerPrefix: 'التصحيح العلمي',
    trapVerdict: 'لا، هذه العبارة خاطئة.',
    compAnswerPrefix: 'السمة المميزة',
    defaultTip: 'انتبه إلى صياغة السؤال عن هذه الفكرة في الامتحان.',
    compTip: 'كثيرًا ما تركّز أسئلة الامتحان على الفروق بين المفاهيم المتقاربة.',
    fallbackPrompt: (title, n) => `${title} — المفهوم رقم ${n}`,
    fallbackAnswer: (subtitle) => `ملخص المفهوم: ${subtitle}`,
  },
  zh: {
    tipLabel: '考试提示',
    factPrompt: (title, snippet) => `${title}——核心知识：请把下列说法补充完整：“${snippet}……”`,
    trapPrompt: (title, trap) => `${title}——易错辨析：“${trap}”这一说法正确吗？`,
    compPrompt: (title, a, b) => `${title}——概念对比：“${a}”与“${b}”的主要区别是什么？`,
    factAnswerPrefix: '完整说法',
    trapAnswerPrefix: '正确说法',
    trapVerdict: '不正确，这一说法是错误的。',
    compAnswerPrefix: '主要区别',
    defaultTip: '考试中要特别注意这一概念以及题干中的限定词。',
    compTip: '考试常用组合选择题考查易混淆概念之间的区别。',
    fallbackPrompt: (title, n) => `${title}——概念辨析 #${n}`,
    fallbackAnswer: (subtitle) => `知识点概述：${subtitle}`,
  },
  ku: {
    tipLabel: 'Serişteya azmûnê',
    factPrompt: (title, snippet) => `${title} — Têgeha Bingehîn: Gotina "${snippet} …" bi awayekî zanistî rast temam bike.`,
    trapPrompt: (title, trap) => `${title} — Têgihiştina Şaş: Gelo gotina "${trap}" ji aliyê zanistî ve rast e?`,
    compPrompt: (title, a, b) => `${title} — Berhevdan: Cudahiya bingehîn a di navbera ${a} û ${b} de çi ye?`,
    factAnswerPrefix: 'Agahiya Rast',
    trapAnswerPrefix: 'Şiroveya Rast',
    trapVerdict: 'Na, ev gotin şaş e.',
    compAnswerPrefix: 'Taybetmendiya Cudaker',
    defaultTip: 'Di azmûnê de bala xwe bide vê têgehê û gotinên di koka pirsê de.',
    compTip: 'Pirsên azmûnê gelek caran taybetmendiyên cudaker ên du têgehên nêzîkî hev diceribînin.',
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
