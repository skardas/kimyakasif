import type {
  CompiledQuestion,
  LanguageCode,
  ChemistryDifficulty,
  ChemistryArchetype,
  FigureText,
  QuestionFigure,
  QuestionFigureSeed,
} from '../types/chemistry';
import type { ChemistryUnitSeedData } from '../data/units/types';
import { polishQuestion } from './langPolish';
import { enrichQuestionsWithDiagrams, planDiagramPlacement, type DiagramPlacement } from './diagramQuestionEnricher';

/** Resolves a figure seed's texts to one language (language-neutral strings pass through). */
export function resolveFigure(seed: QuestionFigureSeed, lang: LanguageCode): QuestionFigure {
  // In Arabic (RTL) the neutral "°" of "(°C)" joins the Arabic run and renders as "(C°)"; an LRM keeps "°C" together.
  const t = (x: FigureText): string => {
    const s = typeof x === 'string' ? x : x[lang] || x.tr;
    return lang === 'ar' ? s.replace(/°C/g, '‎°C') : s;
  };
  // Numeric ticks get a language-appropriate decimal separator (32,4 in tr/de/fr/ru/ku; 32.4 in en/zh/ar).
  const pointLangs = ['en', 'zh', 'ar'].includes(lang);
  const minus = (s: string) => s.replace(/^-(?=\d)/, '−');
  const dec = (n: number) => minus(pointLangs ? String(n) : String(n).replace('.', ','));
  // Authored numeric tick labels ("1,10", "-150") follow the same separator and minus sign.
  const numLabel = (s: string) => (/^[-−]?\d+(?:[.,]\d+)?$/.test(s) ? minus(pointLangs ? s.replace(',', '.') : s.replace('.', ',')) : s);
  const tick = (v: number | { v: number; label: FigureText }) => (typeof v === 'number' ? { v, label: dec(v) } : { v: v.v, label: numLabel(t(v.label)) });
  const cap = seed.caption !== undefined ? { caption: t(seed.caption) } : {};
  switch (seed.kind) {
    case 'graph': {
      const { caption: _c, ...g } = seed;
      return {
        ...g,
        ...cap,
        xLabel: t(seed.xLabel),
        yLabel: t(seed.yLabel),
        xTicks: seed.xTicks?.map(tick),
        yTicks: seed.yTicks?.map(tick),
        series: seed.series.map((sr) => ({ ...sr, label: sr.label !== undefined ? t(sr.label) : undefined })),
        markers: seed.markers?.map((m) => ({ ...m, label: t(m.label) })),
        xBands: seed.xBands?.map((b) => ({ ...b, label: t(b.label) })),
      };
    }
    case 'table': {
      // Purely numeric cells ("+2,87", "0,1", "2,0x10^-4") follow the language's decimal separator.
      const cell = (x: FigureText) => {
        const v = t(x);
        return pointLangs && /^[\s+\-−–]*\d[\d,]*(?:\s*[x×]\s*10\^?[-−–]?\d+)?\s*$/.test(v) ? v.replace(/(\d),(\d)/g, '$1.$2') : v;
      };
      return { kind: 'table', header: seed.header.map(t), rows: seed.rows.map((r) => r.map(cell)), ...cap };
    }
    case 'svg': {
      const esc = (x: string) => x.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const markup = seed.markup.replace(/\{\{(\w+)\}\}/g, (_m, k: string) => esc(seed.labels?.[k] !== undefined ? t(seed.labels[k]) : k));
      return { kind: 'svg', width: seed.width, height: seed.height, markup, ...cap };
    }
  }
}

// Diagram placement is decided once on the Turkish bank so every language shows the figure on the same question ids.
const TR_DIAGRAM_PLACEMENT = new WeakMap<ChemistryUnitSeedData, DiagramPlacement>();

export const QUESTION_SETS_PER_UNIT = 8;
export const QUESTIONS_PER_SET = 16;
export const QUESTIONS_PER_UNIT = 128;

// Localized Roman numeral answer combinations across all 8 languages
const ROMAN_COMBINATIONS: Record<
  LanguageCode,
  {
    only1: string;
    only2: string;
    only3: string;
    oneTwo: string;
    oneThree: string;
    twoThree: string;
    all: string;
  }
> = {
  tr: {
    only1: 'Yalnız I',
    only2: 'Yalnız II',
    only3: 'Yalnız III',
    oneTwo: 'I ve II',
    oneThree: 'I ve III',
    twoThree: 'II ve III',
    all: 'I, II ve III',
  },
  en: {
    only1: 'Only I',
    only2: 'Only II',
    only3: 'Only III',
    oneTwo: 'I and II',
    oneThree: 'I and III',
    twoThree: 'II and III',
    all: 'I, II and III',
  },
  de: {
    only1: 'Nur I',
    only2: 'Nur II',
    only3: 'Nur III',
    oneTwo: 'I und II',
    oneThree: 'I und III',
    twoThree: 'II und III',
    all: 'I, II und III',
  },
  fr: {
    only1: 'Seulement I',
    only2: 'Seulement II',
    only3: 'Seulement III',
    oneTwo: 'I et II',
    oneThree: 'I et III',
    twoThree: 'II et III',
    all: 'I, II et III',
  },
  ru: {
    only1: 'Только I',
    only2: 'Только II',
    only3: 'Только III',
    oneTwo: 'I и II',
    oneThree: 'I и III',
    twoThree: 'II и III',
    all: 'I, II и III',
  },
  ar: {
    only1: 'I فقط',
    only2: 'II فقط',
    only3: 'III فقط',
    oneTwo: 'I و II',
    oneThree: 'I و III',
    twoThree: 'II و III',
    all: 'I و II و III',
  },
  zh: {
    only1: '仅 I',
    only2: '仅 II',
    only3: '仅 III',
    oneTwo: 'I 和 II',
    oneThree: 'I 和 III',
    twoThree: 'II 和 III',
    all: 'I、II 和 III',
  },
  ku: {
    only1: 'Tenê I',
    only2: 'Tenê II',
    only3: 'Tenê III',
    oneTwo: 'I û II',
    oneThree: 'I û III',
    twoThree: 'II û III',
    all: 'I, II û III',
  },
};

// Neutral placeholder that replaces the target concept's name inside a matching clue.
// "bu kavram" (not "bu kimyasal tür") because many targets are laws, processes or properties
// (e.g. "Geçici Sertlik", "Raoult Yasası", "Korozyon"), not chemical species.
const ENTITY_SPECIES_REPLACEMENT: Record<LanguageCode, string> = {
  tr: 'bu kavram',
  en: 'this concept',
  de: 'dieser Begriff',
  fr: 'cette notion',
  ru: 'это понятие',
  ar: 'هذا المفهوم',
  zh: '该概念',
  ku: 'ev têgeh',
};

export interface ExplanationTemplates {
  /** Closing sentence of a Roman-numeral explanation when the stem asks for the TRUE statements. */
  romanTrue: (combo: string) => string;
  /** Closing sentence of a Roman-numeral explanation when the stem asks for the FALSE statements. */
  romanFalse: (combo: string) => string;
  romanValid: (numeral: string, fact: string, tip?: string) => string;
  romanInvalid: (numeral: string, fact: string, whyFalse?: string) => string;
  negativeTrapWhy: (correctOption: string, whyFalse: string, correctFact: string) => string;
  negativeTrapDefault: (correctOption: string, correctFact: string) => string;
  positiveConceptTip: (correctOption: string, tip: string) => string;
  positiveConceptDefault: (correctOption: string) => string;
  /** Intro for the list that corrects every wrong option, e.g. "Diğer seçeneklerin doğrusu:". */
  otherOptionsIntro: string;
  /** Intro used instead when at least one wrong option comes with its reason (whyTrapIsFalse). */
  otherOptionsWhyIntro: string;
  /** One corrected wrong option: "B) <neden>. Doğrusu: <fact>." (reason optional). */
  optionCorrection: (letter: string, fact: string, whyFalse?: string) => string;
  structureMatch: (correctOption: string, conceptA: string, conceptB: string, distinction: string) => string;
  structureTrait: (conceptB: string, conceptA: string, distinction: string) => string;
  reactionOrder: (correctOption: string, seqTitle: string, fullProgression?: string) => string;
  missingStep: (correctOption: string, seqTitle: string, fullProgression: string) => string;
}

const bare = (s: string) => stripTerminalPunctuation(s);
// Seed tips often start with their own label ("ÖSYM tuzağı: ..."); drop it so the template's
// "ÖSYM notu:" is not followed by a second label.
const bareTip = (s: string) => {
  const t = bare(s).replace(/^ÖSYM\s+(?:tuzağı|kuralı|notu|ipucu|uyarısı)\s*:\s*/iu, '');
  return t.charAt(0).toLocaleUpperCase('tr') + t.slice(1);
};

// Some non-Turkish seed tips still carry a Turkish exam label ("ÖSYM trap: ...", "ÖSYM-Regel: ...",
// "Xefika ÖSYM-ê: ..."). The template already supplies a localized "Exam note" label, so drop the seed
// label; tips without one are returned unchanged.
const bareForeignTip = (s: string, lang: LanguageCode) => {
  const b = bare(s);
  // Leading tip labels ("ÖSYM trap:", or the neutral "Exam trap:" / "Prüfungsfalle:" /
  // "Piège d’examen :" / "Xefika azmûnê:" used in unit seeds) duplicate the template's own "Exam note".
  const t = b.replace(/^(?:[^:：]*ÖSYM[^:：]*|Exam (?:trap|rule)|Prüfungs(?:falle|regel)|(?:Piège|Règle) d[’']examen|(?:Xefika|Qaîdeya) azmûnê)\s*[:：]\s*/u, '');
  return t === b ? b : t.charAt(0).toLocaleUpperCase(lang) + t.slice(1);
};

export const EXPLANATION_TEMPLATES: Record<LanguageCode, ExplanationTemplates> = {
  tr: {
    romanTrue: (combo) => `Buna göre doğru olan yargıları içeren seçenek "${combo}" seçeneğidir.`,
    romanFalse: (combo) => `Buna göre yanlış olan yargıları içeren seçenek "${combo}" seçeneğidir.`,
    romanValid: (n, fact, tip) => `${n}. Doğrudur: ${bare(fact)}.${tip ? ` (ÖSYM notu: ${bareTip(tip)}.)` : ''}`,
    romanInvalid: (n, fact, why) => `${n}. Yanlıştır: ${why ? `${bare(why)}. ` : ''}Doğrusu: ${bare(fact)}.`,
    negativeTrapWhy: (opt, why, fact) => `Yanlış olan ifade "${bare(opt)}" ifadesidir. ${bare(why)}. Doğrusu: ${bare(fact)}. Diğer seçeneklerdeki ifadelerin tamamı doğrudur.`,
    negativeTrapDefault: (opt, fact) => `Yanlış olan ifade "${bare(opt)}" ifadesidir. Doğrusu: ${bare(fact)}. Diğer seçeneklerdeki ifadelerin tamamı doğrudur.`,
    positiveConceptTip: (opt, tip) => `Doğru olan ifade "${bare(opt)}" ifadesidir. ÖSYM notu: ${bareTip(tip)}.`,
    positiveConceptDefault: (opt) => `Doğru olan ifade "${bare(opt)}" ifadesidir.`,
    otherOptionsIntro: 'Diğer seçeneklerdeki ifadeler yanlıştır; doğruları şöyledir:',
    otherOptionsWhyIntro: 'Diğer seçeneklerdeki ifadeler yanlıştır:',
    optionCorrection: (l, fact, why) => `${l}) ${why ? `${bare(why)}. Doğrusu: ` : ''}${bare(fact)}.`,
    structureMatch: (opt, a, b, dist) => `Doğru cevap "${bare(opt)}" seçeneğidir. ${a} ile ${b} arasındaki temel ayrım: ${bare(dist)}.`,
    structureTrait: (b, a, dist) => `"${b}" ile ilgili doğru ifade, ${a} ile ${b} arasındaki temel ayrımı veren ifadedir: ${bare(dist)}.`,
    reactionOrder: (opt, title, full) => full
      ? `Doğru sıralama "${opt}" seçeneğidir. "${title}" basamaklarının doğru sırası: ${full}.`
      : `Doğru sıralama "${opt}" seçeneğidir.`,
    missingStep: (opt, title, full) => `Eksik basamak "${bare(opt)}" basamağıdır. "${title}" basamaklarının doğru sırası: ${full}.`,
  },
  en: {
    romanTrue: (combo) => `Therefore, the option containing exactly the correct statements is "${combo}".`,
    romanFalse: (combo) => `Therefore, the option containing exactly the incorrect statements is "${combo}".`,
    romanValid: (n, fact, tip) => `${n}. Correct: ${bare(fact)}.${tip ? ` (Exam note: ${bareForeignTip(tip, 'en')}.)` : ''}`,
    romanInvalid: (n, fact, why) => `${n}. Incorrect: ${why ? `${bare(why)}. ` : ''}Correct version: ${bare(fact)}.`,
    negativeTrapWhy: (opt, why, fact) => `The incorrect statement is "${bare(opt)}". ${bare(why)}. Correct version: ${bare(fact)}. All the other options are correct.`,
    negativeTrapDefault: (opt, fact) => `The incorrect statement is "${bare(opt)}". Correct version: ${bare(fact)}. All the other options are correct.`,
    positiveConceptTip: (opt, tip) => `The correct statement is "${bare(opt)}". Exam note: ${bareForeignTip(tip, 'en')}.`,
    positiveConceptDefault: (opt) => `The correct statement is "${bare(opt)}".`,
    otherOptionsIntro: 'The other options are incorrect; the correct versions are:',
    otherOptionsWhyIntro: 'The other options are incorrect:',
    optionCorrection: (l, fact, why) => `${l}) ${why ? `${bare(why)}. Correct version: ` : ''}${bare(fact)}.`,
    structureMatch: (opt, a, b, dist) => `The correct answer is "${bare(opt)}". Key distinction between ${a} and ${b}: ${bare(dist)}.`,
    structureTrait: (b, a, dist) => `The correct statement about "${b}" is the one giving the key distinction between ${a} and ${b}: ${bare(dist)}.`,
    reactionOrder: (opt, title, full) => full
      ? `The correct order is "${opt}". Correct sequence of "${title}": ${full}.`
      : `The correct order is "${opt}".`,
    missingStep: (opt, title, full) => `The missing step is "${bare(opt)}". Correct sequence of "${title}": ${full}.`,
  },
  de: {
    romanTrue: (combo) => `Die Antwort, die genau die richtigen Aussagen enthält, ist daher "${combo}".`,
    romanFalse: (combo) => `Die Antwort, die genau die falschen Aussagen enthält, ist daher "${combo}".`,
    romanValid: (n, fact, tip) => `${n}. Richtig: ${bare(fact)}.${tip ? ` (Prüfungshinweis: ${bareForeignTip(tip, 'de')}.)` : ''}`,
    romanInvalid: (n, fact, why) => `${n}. Falsch: ${why ? `${bare(why)}. ` : ''}Richtig ist: ${bare(fact)}.`,
    negativeTrapWhy: (opt, why, fact) => `Die falsche Aussage lautet "${bare(opt)}". ${bare(why)}. Richtig ist: ${bare(fact)}. Alle übrigen Aussagen sind zutreffend.`,
    negativeTrapDefault: (opt, fact) => `Die falsche Aussage lautet "${bare(opt)}". Richtig ist: ${bare(fact)}. Alle übrigen Aussagen sind zutreffend.`,
    positiveConceptTip: (opt, tip) => `Die zutreffende Aussage ist "${bare(opt)}". Prüfungshinweis: ${bareForeignTip(tip, 'de')}.`,
    positiveConceptDefault: (opt) => `Die zutreffende Aussage ist "${bare(opt)}".`,
    otherOptionsIntro: 'Die übrigen Antworten sind falsch; richtig wäre:',
    otherOptionsWhyIntro: 'Die übrigen Antworten sind falsch:',
    optionCorrection: (l, fact, why) => `${l}) ${why ? `${bare(why)}. Richtig ist: ` : ''}${bare(fact)}.`,
    structureMatch: (opt, a, b, dist) => `Die richtige Antwort ist "${bare(opt)}". Grundlegende Unterscheidung zwischen ${a} und ${b}: ${bare(dist)}.`,
    structureTrait: (b, a, dist) => `Zutreffend für "${b}" ist die Aussage, die den Unterschied zwischen ${a} und ${b} beschreibt: ${bare(dist)}.`,
    reactionOrder: (opt, title, full) => full
      ? `Die richtige Reihenfolge ist "${opt}". Korrekter Ablauf von "${title}": ${full}.`
      : `Die richtige Reihenfolge ist "${opt}".`,
    missingStep: (opt, title, full) => `Der fehlende Schritt ist "${bare(opt)}". Korrekter Ablauf von "${title}": ${full}.`,
  },
  fr: {
    romanTrue: (combo) => `La réponse qui contient exactement les affirmations exactes est donc « ${combo} ».`,
    romanFalse: (combo) => `La réponse qui contient exactement les affirmations fausses est donc « ${combo} ».`,
    romanValid: (n, fact, tip) => `${n}. Exact : ${bare(fact)}.${tip ? ` (Conseil : ${bareForeignTip(tip, 'fr')}.)` : ''}`,
    romanInvalid: (n, fact, why) => `${n}. Faux : ${why ? `${bare(why)}. ` : ''}Version exacte : ${bare(fact)}.`,
    negativeTrapWhy: (opt, why, fact) => `L'affirmation incorrecte est « ${bare(opt)} ». ${bare(why)}. Version exacte : ${bare(fact)}. Toutes les autres propositions sont exactes.`,
    negativeTrapDefault: (opt, fact) => `L'affirmation incorrecte est « ${bare(opt)} ». Version exacte : ${bare(fact)}. Toutes les autres propositions sont exactes.`,
    positiveConceptTip: (opt, tip) => `L'affirmation exacte est « ${bare(opt)} ». Conseil d'examen : ${bareForeignTip(tip, 'fr')}.`,
    positiveConceptDefault: (opt) => `L'affirmation exacte est « ${bare(opt)} ».`,
    otherOptionsIntro: 'Les autres propositions sont fausses ; les versions exactes sont :',
    otherOptionsWhyIntro: 'Les autres propositions sont fausses :',
    optionCorrection: (l, fact, why) => `${l}) ${why ? `${bare(why)}. Version exacte : ` : ''}${bare(fact)}.`,
    structureMatch: (opt, a, b, dist) => `La bonne réponse est « ${bare(opt)} ». Distinction fondamentale entre ${a} et ${b} : ${bare(dist)}.`,
    structureTrait: (b, a, dist) => `L'affirmation exacte sur « ${b} » est celle qui donne la distinction entre ${a} et ${b} : ${bare(dist)}.`,
    reactionOrder: (opt, title, full) => full
      ? `L'ordre correct est « ${opt} ». Déroulement correct de « ${title} » : ${full}.`
      : `L'ordre correct est « ${opt} ».`,
    missingStep: (opt, title, full) => `L'étape manquante est « ${bare(opt)} ». Déroulement correct de « ${title} » : ${full}.`,
  },
  ru: {
    romanTrue: (combo) => `Следовательно, верны именно утверждения варианта «${combo}».`,
    romanFalse: (combo) => `Следовательно, неверны именно утверждения варианта «${combo}».`,
    romanValid: (n, fact, tip) => `${n}. Верно. ${bare(fact)}.${tip ? ` (Подсказка: ${bareForeignTip(tip, 'ru')}.)` : ''}`,
    romanInvalid: (n, fact, why) => `${n}. Неверно. ${why ? `${bare(why)}. ` : ''}Верная формулировка: «${bare(fact)}».`,
    negativeTrapWhy: (opt, why, fact) => `Неверное утверждение — «${bare(opt)}». ${bare(why)}. Верная формулировка: «${bare(fact)}». Остальные утверждения верны.`,
    negativeTrapDefault: (opt, fact) => `Неверное утверждение — «${bare(opt)}». Верная формулировка: «${bare(fact)}». Остальные утверждения верны.`,
    positiveConceptTip: (opt, tip) => `Верное утверждение — «${bare(opt)}». Совет к экзамену: ${bareForeignTip(tip, 'ru')}.`,
    positiveConceptDefault: (opt) => `Верное утверждение — «${bare(opt)}».`,
    otherOptionsIntro: 'Остальные варианты неверны; верные формулировки:',
    otherOptionsWhyIntro: 'Остальные варианты неверны:',
    optionCorrection: (l, fact, why) => `${l}) ${why ? `${bare(why)}. Верно так: ` : ''}«${bare(fact)}».`,
    structureMatch: (opt, a, b, dist) => `Правильный ответ — «${bare(opt)}». Различие между понятиями «${a}» и «${b}»: ${bare(dist)}.`,
    structureTrait: (b, a, dist) => `Верное утверждение о понятии «${b}» — то, которое описывает его отличие от понятия «${a}»: ${bare(dist)}.`,
    reactionOrder: (opt, title, full) => full
      ? `Правильный порядок — «${opt}». Полная последовательность («${title}»): ${full}.`
      : `Правильный порядок — «${opt}».`,
    missingStep: (opt, title, full) => `Пропущенный этап — «${bare(opt)}». Полная последовательность («${title}»): ${full}.`,
  },
  ar: {
    romanTrue: (combo) => `وعليه فالخيار الذي يضم العبارات الصحيحة كلها ولا يضم غيرها هو "${combo}".`,
    romanFalse: (combo) => `وعليه فالخيار الذي يضم العبارات الخاطئة كلها ولا يضم غيرها هو "${combo}".`,
    romanValid: (n, fact, tip) => `${n}. صحيحة: ${bare(fact)}.${tip ? ` (ملاحظة: ${bareForeignTip(tip, 'ar')}.)` : ''}`,
    romanInvalid: (n, fact, why) => `${n}. خاطئة: ${why ? `${bare(why)}. ` : ''}الصواب: ${bare(fact)}.`,
    negativeTrapWhy: (opt, why, fact) => `العبارة غير الصحيحة هي "${bare(opt)}". ${bare(why)}. الصواب: ${bare(fact)}. جميع العبارات الأخرى صحيحة.`,
    negativeTrapDefault: (opt, fact) => `العبارة غير الصحيحة هي "${bare(opt)}". الصواب: ${bare(fact)}. جميع العبارات الأخرى صحيحة.`,
    positiveConceptTip: (opt, tip) => `العبارة الصحيحة هي "${bare(opt)}". تنبيه للامتحان: ${bareForeignTip(tip, 'ar')}.`,
    positiveConceptDefault: (opt) => `العبارة الصحيحة هي "${bare(opt)}".`,
    otherOptionsIntro: 'الخيارات الأخرى خاطئة، والصواب فيها:',
    otherOptionsWhyIntro: 'الخيارات الأخرى خاطئة:',
    optionCorrection: (l, fact, why) => `${l}) ${why ? `${bare(why)}. الصواب: ` : ''}${bare(fact)}.`,
    structureMatch: (opt, a, b, dist) => `الإجابة الصحيحة هي "${bare(opt)}". الفرق الجوهري بين ${a} و${b}: ${bare(dist)}.`,
    structureTrait: (b, a, dist) => `العبارة الصحيحة حول "${b}" هي التي تبيّن الفرق بين ${a} و${b}: ${bare(dist)}.`,
    reactionOrder: (opt, title, full) => full
      ? `الترتيب الصحيح هو "${opt}". التسلسل الصحيح لخطوات "${title}": ${full}.`
      : `الترتيب الصحيح هو "${opt}".`,
    missingStep: (opt, title, full) => `الخطوة المفقودة هي "${bare(opt)}". التسلسل الصحيح لخطوات "${title}": ${full}.`,
  },
  zh: {
    romanTrue: (combo) => `因此，恰好包含全部正确说法的选项是“${combo}”。`,
    romanFalse: (combo) => `因此，恰好包含全部错误说法的选项是“${combo}”。`,
    romanValid: (n, fact, tip) => `${n}. 正确：${bare(fact)}。${tip ? `解题要点：${bareForeignTip(tip, 'zh')}。` : ''}`,
    romanInvalid: (n, fact, why) => `${n}. 错误：${why ? `${bare(why)}。` : ''}正确说法：${bare(fact)}。`,
    negativeTrapWhy: (opt, why, fact) => `不正确的说法是“${bare(opt)}”。${bare(why)}。正确说法：${bare(fact)}。其余选项均正确。`,
    negativeTrapDefault: (opt, fact) => `不正确的说法是“${bare(opt)}”。正确说法：${bare(fact)}。其余选项均正确。`,
    positiveConceptTip: (opt, tip) => `正确的说法是“${bare(opt)}”。解题要点：${bareForeignTip(tip, 'zh')}。`,
    positiveConceptDefault: (opt) => `正确的说法是“${bare(opt)}”。`,
    otherOptionsIntro: '其余选项均错误，正确说法分别为：',
    otherOptionsWhyIntro: '其余选项均错误：',
    optionCorrection: (l, fact, why) => `${l}) ${why ? `${bare(why)}。正确说法：` : ''}${bare(fact)}。`,
    structureMatch: (opt, a, b, dist) => `正确答案是“${bare(opt)}”。“${a}”与“${b}”的核心区别：${bare(dist)}。`,
    structureTrait: (b, a, dist) => `关于“${b}”，正确的说法是指出“${a}”与“${b}”区别的那一项：${bare(dist)}。`,
    reactionOrder: (opt, title, full) => full
      ? `正确顺序是“${opt}”。“${title}”的正确步骤顺序：${full}。`
      : `正确顺序是“${opt}”。`,
    missingStep: (opt, title, full) => `缺失的步骤是“${bare(opt)}”。“${title}”的正确步骤顺序：${full}。`,
  },
  ku: {
    romanTrue: (combo) => `Ji ber vê yekê vebijarka ku tenê gotinên rast dihewîne "${combo}" e.`,
    romanFalse: (combo) => `Ji ber vê yekê vebijarka ku tenê gotinên şaş dihewîne "${combo}" e.`,
    romanValid: (n, fact, tip) => `${n}. Rast e: ${bare(fact)}.${tip ? ` (Nîşe: ${bareForeignTip(tip, 'ku')}.)` : ''}`,
    romanInvalid: (n, fact, why) => `${n}. Şaş e: ${why ? `${bare(why)}. ` : ''}Ya rast: ${bare(fact)}.`,
    negativeTrapWhy: (opt, why, fact) => `Gotina şaş "${bare(opt)}" e. ${bare(why)}. Ya rast: ${bare(fact)}. Hemû gotinên din rast in.`,
    negativeTrapDefault: (opt, fact) => `Gotina şaş "${bare(opt)}" e. Ya rast: ${bare(fact)}. Hemû gotinên din rast in.`,
    positiveConceptTip: (opt, tip) => `Gotina rast "${bare(opt)}" e. Serişteya azmûnê: ${bareForeignTip(tip, 'ku')}.`,
    positiveConceptDefault: (opt) => `Gotina rast "${bare(opt)}" e.`,
    otherOptionsIntro: 'Vebijarkên din şaş in; rastiyên wan ev in:',
    otherOptionsWhyIntro: 'Vebijarkên din şaş in:',
    optionCorrection: (l, fact, why) => `${l}) ${why ? `${bare(why)}. Ya rast: ` : ''}${bare(fact)}.`,
    structureMatch: (opt, a, b, dist) => `Bersiva rast "${bare(opt)}" e. Cudahiya sereke ya di navbera "${a}" û "${b}" de: ${bare(dist)}.`,
    structureTrait: (b, a, dist) => `Gotina rast a derbarê "${b}" de ew e ku cudahiya "${a}" û "${b}" diyar dike: ${bare(dist)}.`,
    reactionOrder: (opt, title, full) => full
      ? `Rêza rast "${opt}" e. Rêza rast a gavên "${title}": ${full}.`
      : `Rêza rast "${opt}" e.`,
    missingStep: (opt, title, full) => `Gava kêm "${bare(opt)}" e. Rêza rast a gavên "${title}": ${full}.`,
  },
};

/**
 * Normalizes entity and formula options by trimming whitespace and removing terminal dots.
 * Bare chemical species, formulas, and single nominal concepts should not have terminal periods.
 */
export function normalizeEntityOption(text: string): string {
  return text.trim().replace(/[.。]$/, '');
}

/**
 * Ensures uniform sentence-ending punctuation across all 5 options of a prose question.
 * Guards against appending terminal periods to bare chemical formulas or symbols.
 */
export function normalizeProseOption(text: string, lang: LanguageCode): string {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;

  // Guard: do not append terminal dot to bare chemical formulas or symbols (e.g. CH4, H2O, Kc, Kp, etc.)
  if (/^[A-Z][a-zA-Z0-9()[\]+\-^/·_]*$/.test(trimmed)) {
    return trimmed.replace(/[.。]$/, '');
  }

  if (lang === 'zh') {
    const withoutBang = trimmed.replace(/[！!]$/, '。');
    return /[。？！]$/.test(withoutBang) ? withoutBang : `${withoutBang}。`;
  }
  const withoutBang = trimmed.replace(/!$/, '.');
  return /[.؟?]$/.test(withoutBang) ? withoutBang : `${withoutBang}.`;
}

/**
 * Removes trailing sentence punctuation (".", "。", "!", "！") so a seed sentence can be embedded
 * inside a larger template sentence without producing "..", ".)." or ".。" artefacts.
 */
export function stripTerminalPunctuation(text: string): string {
  return (text || '').trim().replace(/[\s.。!！]+$/u, '').trim();
}

/** Ensures a fragment ends with exactly one sentence terminator appropriate for the language. */
function asSentence(text: string, lang: LanguageCode): string {
  const core = stripTerminalPunctuation(text);
  if (!core) return core;
  if (/[?？؟]$/u.test(core)) return core;
  return lang === 'zh' ? `${core}。` : `${core}.`;
}

/**
 * Generates a canonical comparison key for an option by removing parentheses,
 * isolated symbols/acronyms, spaces, hyphens and punctuation.
 * Used to prevent near-duplicate distractors (e.g. "Denge Kesri (Qc)" and "Denge Kesri Qc").
 */
export function canonicalOptionKey(opt: string): string {
  return (opt || '')
    .toLowerCase()
    .replace(/[（\(][^）\)]*[）\)]/g, '')
    .replace(/\b(qc|kp|kc|ka|kb|ksp|kçç|ksu|ph|poh|xy)\b/gi, '')
    .replace(/[^a-zA-Z0-9\u00C0-\u024F\u0400-\u04FF\u0600-\u06FF\u4e00-\u9fa5]/g, '')
    .trim();
}

export const GENERIC_CATEGORY_DESCRIPTORS: Record<LanguageCode, string[]> = {
  tr: ['Yasası', 'Yasa', 'İlkesi', 'İlke', 'Allotropu', 'Allotrop', 'Olayı', 'Olay', 'Etkisi', 'Etki', 'Tepkimesi', 'Tepkime', 'Katılması', 'Katılma', 'Modeli', 'Kuralı', 'Hipotezi', 'Çözeltisi', 'Pili', 'Atomlar', 'Bağı', 'Bağ', 'Katısı', 'Katıları', 'Hibritleşmesi', 'Hibritleşme', 'Sayısı', 'Sayı'],
  en: ['Law', 'Principle', 'Allotrope', 'Reaction', 'Rule', 'Model', 'Hypothesis', 'Solution', 'Cell', 'Atoms', 'Bond', 'Solid', 'Solids', 'Addition', 'Joining', 'Effect', 'Hybridization', 'Number', 'Constant'],
  de: ['Gesetz', 'Prinzip', 'Allotrop', 'Reaktion', 'Regel', 'Modell', 'Hypothese', 'Lösung', 'Zelle', 'Atome', 'Bindung', 'Feststoff', 'Feststoffe', 'Effekt', 'Hybridisierung', 'Beitritt', 'Zahl', 'Konstante'],
  fr: ['Loi', 'Principe', 'Allotrope', 'Réaction', 'Règle', 'Modèle', 'Hypothèse', 'Solution', 'Pile', 'Atomes', 'Liaison', 'Solide', 'Solides', 'Rejoindre', 'Effet', 'Hybridation', 'Numéro', 'Nombre', 'Constante'],
  ru: ['Закон', 'Принцип', 'Аллотроп', 'Реакция', 'Правило', 'Модель', 'Гипотеза', 'Раствор', 'Элемент', 'Атомы', 'Связь', 'Твердое вещество', 'Твердые вещества', 'Присоединение', 'Эффект', 'Гибридизация', 'Число', 'Константа'],
  ar: ['قانون', 'مبدأ', 'متآصل', 'تآصل', 'تفاعل', 'قاعدة', 'نموذج', 'فرضية', 'محلول', 'خلية', 'ذرات', 'رابطة', 'صلب', 'المواد الصلبة', 'مواد صلبة', 'الانضمام', 'تأثير', 'تهجين', 'رقم', 'عدد', 'ثابت'],
  zh: ['定律', '原理', '原则', '同素异形体', '反应', '规则', '模型', '假说', '溶液', '电池', '原子', '键', '固体', '效应', '杂化', '常数', '数'],
  ku: ['Qanûna', 'Qanûn', 'Zagona', 'Zagon', 'Prensîba', 'Prensîb', 'Allotropa', 'Allotrop', 'Allotrope', 'Reaksiyona', 'Reaksiyon', 'Rêzika', 'Rêzik', 'Modela', 'Model', 'Hîpoteza', 'Çareseriya', 'Pîla', 'Pîl', 'Atomên', 'Benda', 'Hişk', 'Bandora', 'Bandor', 'hîbrîdîzasyon', 'Hîbrîdîzasyon', 'Tevlî', 'Hejmara', 'Hejmar', 'Girêdana', 'Girêdan', 'Asîda', 'Asîd'],
};

const GENERIC_SPECIES_WORDS = new Set([
  'kimyasal', 'tür', 'türü',
  'chemical', 'species',
  'chemische', 'spezies',
  'chimique', 'espèce',
  'химическая', 'частица',
  'كيميائي', 'النوع', 'نوع', 'إلى', 'الى',
  '化学', '微粒',
  'kîmyewî', 'cûreyê',
  'kavram', 'concept', 'begriff', 'dieser', 'notion', 'cette', 'понятие', 'это',
  'المفهوم', 'مفهوم', 'هذا', '概念', '该概念', 'têgeh',
  // Generic constituent words of multi-word concept names. Masking them on their own garbled clues
  // ("Thomson modelinde pozitif yük atom içinde" -> "bu kavram modelinde ... bu kavram içinde").
  'atom', 'atomu', 'atomlar', 'molekül', 'moleküler', 'moleküller', 'kovalent', 'kuantum', 'madde',
  'maddenin', 'model', 'modeli', 'baş', 'temel', 'standart', 'molecule', 'molecular', 'covalent', 'quantum',
]);

function isValidHeadword(term: string, isCJK: boolean, minLen: number): boolean {
  if (!term || term.length < minLen) return false;
  if (GENERIC_SPECIES_WORDS.has(term.toLowerCase())) return false;
  if (isCJK) {
    return /[\u4e00-\u9fa5]/.test(term);
  }
  return /[a-zA-Z\u00C0-\u024F\u0400-\u04FF\u0600-\u06FF]/.test(term);
}

/**
 * Extracts headwords, base concept names, symbols, and morphological variants of an entity name
 * to sanitize question clues and verify question bank purity across all 8 languages.
 */
export function extractEntityCandidates(entityName: string, lang: LanguageCode): Set<string> {
  const rawCandidates = new Set<string>();
  const trimmedName = entityName?.trim();
  if (!trimmedName || trimmedName.length < 1) return rawCandidates;

  rawCandidates.add(trimmedName);

  // Strip parentheses to extract base concept name: e.g. "Zaç Yağı (H2SO4)" -> "Zaç Yağı" or Chinese "温室气体（CO2、CH4）" -> "温室气体"
  const withoutParens = trimmedName.replace(/\s*[（\(][^）\)]*[）\)]/g, '').trim();
  if (withoutParens.length >= 1) {
    rawCandidates.add(withoutParens);
  }
  // And extract inside parens if it's an alternate name: e.g. "Alkan (Parafin)" -> "Parafin"
  const insideMatch = trimmedName.match(/[（\(]([^）\)]+)[）\)]/);
  if (insideMatch && insideMatch[1].trim().length >= 1) {
    rawCandidates.add(insideMatch[1].trim());
  }

  // Extract chemical symbols / acronyms: Qc, Kp, Kc, Ka, Kb, Ksp, Kçç, Ksu, pH, pOH, XY, XY2, sp3, sp2, sp
  const symbolMatches = trimmedName.match(/\b(Qc|Kp|Kc|Ka|Kb|Ksp|Kçç|Ksu|pH|pOH|XY|XY2|sp3|sp2|sp)\b/gi);
  if (symbolMatches) {
    for (const s of symbolMatches) {
      rawCandidates.add(s);
    }
  }

  const isCJKLang = lang === 'zh' || /[\u4e00-\u9fa5]/.test(trimmedName);
  const minHeadwordLen = isCJKLang ? 2 : 3;

  // Arabic broken plurals & descriptive adjective stripping (e.g. "رابطة قوية داخل الجزيئات"):
  if (lang === 'ar' || /[\u0600-\u06FF]/.test(trimmedName)) {
    for (const c of Array.from(rawCandidates)) {
      if (c.includes('رابطة')) {
        rawCandidates.add(c.replace(/رابطة/g, 'روابط'));
        rawCandidates.add(c.replace(/رابطة/g, 'الروابط'));
      }
      if (c.includes('الرابطة')) {
        rawCandidates.add(c.replace(/الرابطة/g, 'الروابط'));
      }
      if (/\s*(?:قوية|ضعيفة|قوي|ضعيف)\s*/.test(c)) {
        const withoutAdj = c.replace(/\s*(?:قوية|ضعيفة|قوي|ضعيف)\s*/g, ' ').replace(/\s+/g, ' ').trim();
        if (isValidHeadword(withoutAdj, isCJKLang, minHeadwordLen)) {
          rawCandidates.add(withoutAdj);
          if (withoutAdj.includes('رابطة')) {
            rawCandidates.add(withoutAdj.replace(/رابطة/g, 'روابط'));
            rawCandidates.add(withoutAdj.replace(/رابطة/g, 'الروابط'));
          }
          const corePhrase = withoutAdj.replace(/^(?:ال)?(?:رابطة|روابط)\s*/, '').trim();
          if (isValidHeadword(corePhrase, isCJKLang, minHeadwordLen)) {
            rawCandidates.add(corePhrase);
          }
        }
      }
    }
  }

  // German weak adjective inflections (-er -> -e, -en): e.g. "Primärer Alkohol" -> "Primäre Alkohol", "primäre Alkohol", "primäre"
  if (lang === 'de' || /[a-zäöüß]+er\s+[a-zäöüß]+/i.test(trimmedName)) {
    for (const c of Array.from(rawCandidates)) {
      if (/\b[a-zA-ZäöüßÄÖÜ]+er\b/i.test(c)) {
        const weakE = c.replace(/\b([a-zA-ZäöüßÄÖÜ]+)er\b/gi, '$1e');
        if (isValidHeadword(weakE, isCJKLang, minHeadwordLen)) {
          rawCandidates.add(weakE);
        }
        const weakEn = c.replace(/\b([a-zA-ZäöüßÄÖÜ]+)er\b/gi, '$1en');
        if (isValidHeadword(weakEn, isCJKLang, minHeadwordLen)) {
          rawCandidates.add(weakEn);
        }
        const adjWords = c.match(/\b([a-zA-ZäöüßÄÖÜ]+)er\b/gi);
        if (adjWords) {
          for (const w of adjWords) {
            const baseAdj = w.slice(0, -2);
            if (isValidHeadword(baseAdj, isCJKLang, minHeadwordLen)) {
              rawCandidates.add(baseAdj);
              rawCandidates.add(`${baseAdj}e`);
              rawCandidates.add(`${baseAdj}en`);
            }
          }
        }
      }
    }
  }

  // Chinese transliteration variants & chemical synonyms (e.g. 阿伏伽德罗 <-> 阿伏加德罗, 金刚石 <-> 钻石, 马氏 <-> 马尔可夫尼科夫)
  if (isCJKLang) {
    for (const c of Array.from(rawCandidates)) {
      if (c.includes('阿伏伽德罗')) {
        rawCandidates.add(c.replace(/阿伏伽德罗/g, '阿伏加德罗'));
      }
      if (c.includes('阿伏加德罗')) {
        rawCandidates.add(c.replace(/阿伏加德罗/g, '阿伏伽德罗'));
      }
      if (c.includes('金刚石')) {
        rawCandidates.add(c.replace(/金刚石/g, '钻石'));
      }
      if (c.includes('钻石')) {
        rawCandidates.add(c.replace(/钻石/g, '金刚石'));
      }
      if (c.includes('马氏')) {
        rawCandidates.add(c.replace(/马氏/g, '马尔可夫尼科夫'));
      }
      if (c.includes('马尔可夫尼科夫')) {
        rawCandidates.add(c.replace(/马尔可夫尼科夫/g, '马氏'));
      }
    }
  }

  // Extract multi-word headword candidates across all 8 languages
  const descs = GENERIC_CATEGORY_DESCRIPTORS[lang] || GENERIC_CATEGORY_DESCRIPTORS.tr;
  const sortedDescs = [...descs].sort((a, b) => b.length - a.length);

  for (const cand of Array.from(rawCandidates)) {
    if (!cand || cand.length < minHeadwordLen) continue;

    // English "X's Law of Y" pattern: e.g. "Graham's Law of Diffusion" -> "Graham", "Graham's"
    const lawOfMatch = cand.match(/^(.+?)(?:['’]s)?\s+Law\s+of\s+.+$/i);
    if (lawOfMatch) {
      const baseScientist = lawOfMatch[1].replace(/['’]s?$/, '').trim();
      if (isValidHeadword(baseScientist, isCJKLang, minHeadwordLen)) {
        rawCandidates.add(baseScientist);
        rawCandidates.add(`${baseScientist}'s`);
      }
    }

    for (const desc of sortedDescs) {
      if (cand.toLowerCase() === desc.toLowerCase()) continue;

      // Trailing descriptor: e.g. "Boyle Yasası", "Graham Difüzyon Yasası", "Aufbauprinzip", "Verbrennungsreaktion", "Boyles Gesetz", "马氏加成规则"
      const trailingRegex = isCJKLang
        ? new RegExp(`(${desc})$`, 'iu')
        : (lang === 'de')
          ? new RegExp(`(?:[-\\s]+|s?)(${desc})$`, 'iu')
          : new RegExp(`[-\\s]+(${desc})$`, 'iu');
      if (trailingRegex.test(cand)) {
        const prefix = cand.replace(trailingRegex, '').trim();
        if (isValidHeadword(prefix, isCJKLang, minHeadwordLen) && prefix.toLowerCase() !== desc.toLowerCase()) {
          rawCandidates.add(prefix);
          // Strip genitive apostrophe-s or German/English bare -s (e.g. "Boyles" -> "Boyle", "Gay-Lussacs" -> "Gay-Lussac")
          const bareGenitive = prefix.replace(/(?:['’]s?|s)$/, '').trim();
          if (isValidHeadword(bareGenitive, isCJKLang, minHeadwordLen) && bareGenitive !== prefix) {
            rawCandidates.add(bareGenitive);
          }
          // Russian adjective stem: e.g. "Изобарные" -> "Изобар"
          if (lang === 'ru' || /[\u0400-\u04FF]/.test(prefix)) {
            const ruAdjStem = prefix.replace(/(?:ные|ный|ная|ное|ных|ным|ными|ном|нем|ний|няя|нее|ние)$/i, '').trim();
            if (isValidHeadword(ruAdjStem, isCJKLang, minHeadwordLen) && ruAdjStem !== prefix) {
              rawCandidates.add(ruAdjStem);
            }
          }
          if (isCJKLang) {
            const zhSecondary = prefix.replace(/(?:扩散|消去|加成|不相容|分压)$/, '').trim();
            if (isValidHeadword(zhSecondary, isCJKLang, minHeadwordLen) && zhSecondary !== prefix) {
              rawCandidates.add(zhSecondary);
            }
          } else {
            const words = prefix.split(/[-\s]+/).map((w) => w.replace(/(?:['’]s?|s)$/, '').trim()).filter((w) => isValidHeadword(w, isCJKLang, minHeadwordLen));
            for (const w of words) {
              if (w !== prefix) {
                rawCandidates.add(w);
              }
            }
          }
        }
        break;
      }

      // Leading descriptor: e.g. "Loi de Boyle", "Principe d'exclusion de Pauli", "قانون بويل", "Qanûna Boyle", "Закон Бойля", "Присоединение к Марковникову", "الانضمام إلى ماركوفنيكوف", "Beitritt zu Markownikow"
      const leadingRegex = isCJKLang
        ? new RegExp(`^(${desc})`, 'iu')
        : new RegExp(`^(${desc})(?:[-\\s]+(?:(?:de|du|des|ya|yê|ên|ji|к|إلى|الى|zu)\\s+|d['’]|لـ|ل)?\\s*)`, 'iu');
      if (leadingRegex.test(cand)) {
        let suffix = cand.replace(leadingRegex, '').trim();
        // Kurdish: strip trailing "dibe" (e.g. "Tevlî Markovnikov dibe" -> "Markovnikov")
        if (lang === 'ku') {
          suffix = suffix.replace(/\s+dibe$/i, '').trim();
        }
        if (isValidHeadword(suffix, isCJKLang, minHeadwordLen) && suffix.toLowerCase() !== desc.toLowerCase()) {
          rawCandidates.add(suffix);
          // Russian case endings stripping (genitive -а/-я, dative -у/-ю):
          if (lang === 'ru' || /[\u0400-\u04FF]/.test(suffix)) {
            const ruBase = suffix.replace(/[аяую]$/i, '').trim();
            if (isValidHeadword(ruBase, isCJKLang, minHeadwordLen) && ruBase !== suffix) {
              rawCandidates.add(ruBase);
            }
            if (suffix.endsWith('я')) {
              const ruE = suffix.replace(/я$/i, 'е').trim();
              if (isValidHeadword(ruE, isCJKLang, minHeadwordLen)) {
                rawCandidates.add(ruE);
              }
            }
          }
          // Kurdish ezafe/case suffix: e.g. "şewitandinê" -> "şewitandin"
          if (lang === 'ku') {
            const kuBase = suffix.replace(/[êea]$/i, '').trim();
            if (isValidHeadword(kuBase, isCJKLang, minHeadwordLen) && kuBase !== suffix) {
              rawCandidates.add(kuBase);
            }
          }
          if (lang === 'ar' || /[\u0600-\u06FF]/.test(suffix)) {
            const noAl = suffix.replace(/^ال/, '').trim();
            if (isValidHeadword(noAl, isCJKLang, minHeadwordLen)) rawCandidates.add(noAl);
            const arWords = noAl.split(/\s+/).map((w) => w.replace(/^ال/, '').trim()).filter((w) => isValidHeadword(w, isCJKLang, minHeadwordLen));
            if (arWords.length > 0) {
              for (const w of arWords) {
                rawCandidates.add(w);
              }
            }
          } else if (!isCJKLang) {
            const words = suffix.split(/\s+/).map((w) => w.replace(/^(?:(?:de|du|des|ya|yê|ên|ji|к|إلى|الى|zu)\s+|d['’])/i, '').trim()).filter((w) => isValidHeadword(w, isCJKLang, minHeadwordLen));
            if (words.length > 0) {
              for (const w of words) {
                rawCandidates.add(w);
              }
            }
          }
        }
        break;
      }
    }
  }

  // Expand candidate variants (hyphens, spaces, CJK type patterns):
  const candidates = new Set<string>();
  for (const c of rawCandidates) {
    if (!c || c.trim().length === 0) continue;
    const t = c.trim();
    candidates.add(t);

    // Hyphen & whitespace variants:
    if (t.includes('-')) {
      candidates.add(t.replace(/-/g, ' '));
      candidates.add(t.replace(/-/g, ''));
    }
    if (/\s/.test(t)) {
      candidates.add(t.replace(/\s+/g, '-'));
      candidates.add(t.replace(/\s+/g, ''));
    }
    // Chinese type pattern: e.g. "XY型盐" -> "XY盐", "XY 盐"
    if (t.includes('型')) {
      const withoutType = t.replace(/型/g, '').trim();
      if (withoutType.length >= 1) candidates.add(withoutType);
    }
    // Arabic type pattern: e.g. "ملح من النوع XY" -> "ملح XY"
    if (t.includes('من النوع')) {
      const withoutType = t.replace(/من النوع\s*/g, '').trim();
      if (withoutType.length >= 1) candidates.add(withoutType);
    }
    // Inverted word order for lettered concepts (especially French): e.g. "s orbitale" -> "orbitale s", "l'orbitale s"
    const letterMatch = t.match(/^([a-z0-9])\s+(.+)$/i);
    if (letterMatch) {
      const inverted = `${letterMatch[2]} ${letterMatch[1]}`;
      candidates.add(inverted);
      candidates.add(`l'${inverted}`);
      candidates.add(`d'${inverted}`);
    }
    // Arabic definite article variants: if starts with "ال" and longer than 2 chars
    if (lang === 'ar' || /[\u0600-\u06FF]/.test(t)) {
      if (t.startsWith('ال') && t.length > 2) {
        candidates.add(t.slice(2));
      }
    }
  }

  return candidates;
}

/**
 * Keeps the grammatical case of a masked Turkish noun: "Ozmozda ... geçer" becomes
 * "bu kavramda ... geçer" rather than the ungrammatical "bu kavram ... geçer".
 */
function inflectTurkishPlaceholder(placeholder: string, matched: string, candidate: string): string {
  if (matched.length <= candidate.length) return placeholder;
  const tail = matched.slice(candidate.length).toLocaleLowerCase('tr');
  if (/(d|t)(ı|i|u|ü)r$/.test(tail)) return `${placeholder}dır`;
  if (/(d|t)(a|e)n$/.test(tail)) return `${placeholder}dan`;
  if (/(d|t)(a|e)$/.test(tail)) return `${placeholder}da`;
  if (/(ın|in|un|ün)$/.test(tail)) return `${placeholder}ın`;
  if (/l(a|e)$/.test(tail)) return `${placeholder}la`;
  if (/(ı|i|u|ü)$/.test(tail)) return `${placeholder}ı`;
  if (/(a|e)$/.test(tail)) return `${placeholder}a`;
  return placeholder;
}

/**
 * Sanitizes entity clues to prevent answer leakage in matching questions.
 * Handles single-character entities (e.g. Chinese CJK: 醛, 酮, 醇, 酸, 酯, 苯 >= 1 char),
 * Turkish/Kurdish agglutinative/inflectional suffixes (e.g. -ler, -lar, -nin, -ta, -den, etc.),
 * English inflections (e.g. -ing, -s, -es, -ed),
 * German inflections (-n, -en, -ung, -er) and compound nouns (-schicht, -bindung, etc.),
 * and Chinese spacing variants (e.g. "s 轨道" <-> "s轨道", "西格玛 键" <-> "西格玛键", "XY 盐" <-> "XY型盐").
 */
export function sanitizeEntityClue(clueText: string, entityName: string, lang: LanguageCode): string {
  let cleaned = clueText;
  const candidates = extractEntityCandidates(entityName, lang);
  if (candidates.size === 0) return normalizeProseOption(cleaned.trim(), lang);

  const replacement = ENTITY_SPECIES_REPLACEMENT[lang] || ENTITY_SPECIES_REPLACEMENT.tr;

  // Sort by length descending so longer compound phrases match before shorter constituents
  const sortedCandidates = Array.from(candidates).sort((a, b) => b.length - a.length);

    for (const cand of sortedCandidates) {
      if (!cand || cand.length === 0) continue;
      const isCJK = /[\u4e00-\u9fa5]/.test(cand);

      if (isCJK) {
        // Strip existing whitespace then allow optional whitespace between characters:
        // Handles "s 轨道" <-> "s轨道", "西格玛 键" <-> "西格玛键", "XY 盐" <-> "XY盐"
        const chars = Array.from(cand.trim().replace(/\s+/g, '')).map((ch) => ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        const cjkPattern = chars.join('\\s*');
        const cjkLookbehind = /^[a-zA-Z0-9]/.test(cand.trim()) ? '(?<=^|[^a-zA-Z0-9])' : '';
        const cjkLookahead = /[a-zA-Z0-9]$/.test(cand.trim()) ? '(?![a-zA-Z0-9])' : '';
        // "非极性分子" (nonpolar molecule) contains "极性分子" (polar molecule): masking it would give the
        // garbled "非该概念", so a negated mention of the contrast partner becomes "另一类" (the other type).
        const regex = new RegExp(`${cjkLookbehind}(非)?${cjkPattern}${cjkLookahead}`, 'gu');
        cleaned = cleaned.replace(regex, (_m: string, neg?: string) => (neg ? '另一类' : replacement));
      } else {
        const isArabic = lang === 'ar' || /[\u0600-\u06FF]/.test(cand);
        // Arabic suffixes: feminine sound plural (-at), masculine sound plural (-in/-un), relative adjective nisba (-iyya, -i, -iyyatiha, -iyyatihi), ta marbuta (-a), dual (-an/-ayn)
        const arabicInflectionalSuffix = '(?:ات|ية|ة|ي|ين|ان|ون|يتها|يته)?';
        // German compound word stems (e.g. Graphenschicht, Sigma-Bindung)
        const compoundSuffix = '(?:schicht|schichten|bindung|bindungen|atom|atome|atomen|gitter|gittern|molekül|moleküle|molekülen|ion|ionen|kraft|kräfte|kräften|gas|gase|gasen|flüssigkeit|flüssigkeiten|reaktion|reaktionen|teilchen|energie|energien|konstante|konstanten)?';
        // Russian Cyrillic case declension endings (e.g. Эрленмайер -> Эрленмайеру, изотоп -> изотопе)
        const cyrillicCaseSuffix = '(?:а|я|у|ю|е|ом|ем|ой|ей|ы|и|ов|ев|ах|ях|ам|ям|ами|ями)?';
        // Inflectional affixes: Turkish (-ler, -nin, -den, etc.), Kurdish (-an, -ên, -ê, -yê, -yên), English (-ing, -s, -es, -ed), German (-n, -en, -ung, -er, -em, -es, -e)
        const latinInflectionalSuffix = '(?:(?:ler|lar|an|ên|ing|ed|ung|er|em)?(?:in|ın|un|ün|nin|nın|nun|nün|nde|nda|nden|ndan|ne|na|ni|nı|nu|nü|te|ta|de|da|ten|tan|den|dan|ye|ya|yê|yên|e|a|i|ı|u|ü|ê|î|le|la|s|es|en|n)?(?:dir|dır|dür|dur|tir|tır|tür|tur)?)';
        const inflectionalSuffix = `(?:${latinInflectionalSuffix}|${cyrillicCaseSuffix}|${arabicInflectionalSuffix})`;
        const suffixPattern = `(?:${compoundSuffix}${inflectionalSuffix})`;

        let candidatePattern: string;
        if (isArabic) {
          const arabicWords = cand.trim().split(/[-\s]+/).map((w) => {
            const stripped = (w.startsWith('ال') && w.length > 2) ? w.slice(2) : w;
            const escaped = stripped.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            return `(?:ال)?${escaped}(?:${arabicInflectionalSuffix})?`;
          });
          candidatePattern = arabicWords.join('[-\\s]+');
        } else {
          // The /iu flags do not fold Turkish İ/i and I/ı, so "Net İyon Denklemi" would not match
          // "Net iyon denklemi" in the clue; spell the pairs out as character classes.
          const foldTr = (w: string) => (lang === 'tr' ? w.replace(/[iİ]/g, '[iİ]').replace(/[ıI]/g, '[ıI]') : w);
          const words = cand.trim().split(/[-\s]+/).map((w) => foldTr(w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
          candidatePattern = (lang === 'ku' && words.length >= 2)
            ? words.join('(?:ê|a|ya|yê|ên|an)?[-\\s]+')
            : words.join('[-\\s]+');
        }

        const lookbehind = (lang === 'zh') ? '(?<=^|[^a-zA-Z0-9])' : '(?<=^|[^\\p{L}\\p{N}])';
        const lookahead = (lang === 'zh') ? '(?![a-zA-Z0-9])' : '(?![\\p{L}\\p{N}])';
        const arabicPrefix = '';
        const regex = new RegExp(`${lookbehind}${arabicPrefix}${candidatePattern}${suffixPattern}${lookahead}`, 'giu');
        cleaned = cleaned.replace(regex, (m: string) => {
          if (lang === 'tr') return inflectTurkishPlaceholder(replacement, m, cand);
          // English plural mention ("Alkynes contain ...") keeps verb agreement: "these concepts contain".
          if (lang === 'en' && /s$/i.test(m) && !/s$/i.test(cand.trim())) return 'these concepts';
          return replacement;
        });
      }
    }
  cleaned = cleaned.trim();
  if (lang === 'en') {
    // "In the cis isomer ..." -> "In this concept ...", not "In the this concept".
    cleaned = cleaned.replace(/\b(?:the|a|an)\s+(this concept|these concepts)\b/gi, '$1');
  }
  if (lang === 'de') {
    // "Beim cis-Isomer ..." -> "Bei diesem Begriff ...", not "Beim dieser Begriff"; "Ein Alkan ..." -> "Dieser Begriff ...".
    const dePrep: Record<string, string> = { beim: 'bei', im: 'in', am: 'an', vom: 'von', zum: 'zu', zur: 'zu' };
    cleaned = cleaned.replace(
      /(^|[^\p{L}])(beim|im|am|vom|zum|zur|bei|in|an|von|zu|mit|aus|nach)(?:\s+(?:der|dem|den|die|das|einer|einem|einen|eine|ein))?\s+dieser Begriff(?![\p{L}])/giu,
      (_m: string, pre: string, prep: string) => {
        const base = dePrep[prep.toLowerCase()] || prep.toLowerCase();
        const cased = /^\p{Lu}/u.test(prep) ? base.charAt(0).toUpperCase() + base.slice(1) : base;
        return `${pre}${cased} diesem Begriff`;
      },
    );
    cleaned = cleaned.replace(/(^|[^\p{L}])(?:der|die|das|den|dem|des|einer|einem|einen|eine|ein)\s+dieser Begriff(?![\p{L}])/giu, '$1dieser Begriff');
  }
  if (lang === 'fr') {
    // "L'alcane ..." -> "Cette notion ...", not "L'cette notion"; "Dans une molécule polaire" -> "Dans cette notion".
    cleaned = cleaned.replace(/(^|[^\p{L}])du\s+cette notion(?![\p{L}])/giu, '$1de cette notion');
    cleaned = cleaned.replace(/(^|[^\p{L}])au\s+cette notion(?![\p{L}])/giu, '$1à cette notion');
    cleaned = cleaned.replace(/(^|[^\p{L}])(?:l['’]\s*|(?:le|la|les|un|une|des)\s+)cette notion(?![\p{L}])/giu, '$1cette notion');
  }
  if (lang === 'ru') {
    // Prepositional case after в / на / при / о: "В этом понятии ...", not "В это понятие ...".
    cleaned = cleaned.replace(/(^|[^\p{L}])(в|во|на|при|о)\s+это понятие(?![\p{L}])/giu, (_m: string, pre: string, prep: string) => `${pre}${prep} этом понятии`);
  }
  if (lang === 'ku') {
    // Kurmanji oblique case after a preposition: "di vê têgehê de", not "di ev têgeh de".
    cleaned = cleaned.replace(/(^|[^\p{L}])(di|li|ji|bi|ji bo)\s+ev têgeh(?![\p{L}])/giu, '$1$2 vê têgehê');
  }
  // Collapse runs created when several words of one name were masked ("bu kavram bu kavram ...").
  const escRep = replacement.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  cleaned = cleaned.replace(new RegExp(`(${escRep})(?:[\\s-]+${escRep})+`, 'giu'), '$1');
  if (lang === 'tr') {
    // Detached Turkish case endings after the placeholder ("bu kavram'ye", "bu kavram yi").
    cleaned = cleaned.replace(new RegExp(`(${escRep})(?:['’]|\\s+)(y[ıiuü]|n[ıiuü]n|y[ae]|d[ae]n|t[ae]n|d[ae]|t[ae]|[ıiuü]n)(?![\\p{L}])`, 'gu'),
      (_m: string, rep: string, suf: string) => inflectTurkishPlaceholder(rep, `${rep}${suf}`, rep));
  }
  // Sentence-initial placeholder must be capitalised ("Bu kavram ...", "This concept ...").
  if (cleaned.startsWith(replacement) || cleaned.startsWith('these concepts') || /^(dieser|cette|это)\s/u.test(cleaned)) {
    cleaned = cleaned.charAt(0).toLocaleUpperCase(lang) + cleaned.slice(1);
  }
  return normalizeProseOption(cleaned, lang);
}

/**
 * Sanitizes unit titles in question stems to prevent answer leakage when the title contains the target concept.
 */
export function sanitizeUnitTitleForStem(unitTitle: string, conceptName: string, lang: LanguageCode): string {
  let title = unitTitle;
  const cleanConcept = (conceptName || '').trim().toLowerCase().replace(/\s*[（\(][^）\)]*[）\)]/g, '');
  if (!cleanConcept || !title.toLowerCase().includes(cleanConcept)) return title;

  // 1. Try taking the broad topic before ':' or '：'
  const colonMatch = title.match(/^([^:：]+)[:：]/);
  if (colonMatch) {
    const broad = colonMatch[1].trim();
    if (!broad.toLowerCase().includes(cleanConcept)) return broad;
  }

  // 2. Try splitting by conjunctions (&, ve, und, et, и, و, 与, û, etc.)
  const conjParts = title.split(/(?:^|\s+)(?:&|ve|und|et|и|و|û)(?:\s+|$)|与|[,:：]/i);
  for (const part of conjParts) {
    const cleanPart = part.replace(/^[:：]\s*/, '').trim();
    if (cleanPart.length >= 2 && !cleanPart.toLowerCase().includes(cleanConcept)) {
      return cleanPart;
    }
  }

  // 3. Fallback domain term
  const DOMAIN_FALLBACK: Record<LanguageCode, string> = {
    tr: 'Kimya',
    en: 'Chemistry',
    de: 'Chemie',
    fr: 'Chimie',
    ru: 'Химия',
    ar: 'الكيمياء',
    zh: '化学',
    ku: 'Kîmya',
  };
  return DOMAIN_FALLBACK[lang] || 'Chemistry';
}

/**
 * Places the correct target item at desiredIndex (0..4) and fills remaining slots with distinct distractors.
 * Deduplicates distractors using canonicalOptionKey to ensure near-duplicate options
 * (e.g. "Denge Kesri (Qc)" and "Denge Kesri Qc") never appear together.
 * Throws an explicit error if distinct distractors are fewer than 4 to prevent placeholder leaks.
 */
export function rotateOptions(correctItem: string, distractors: string[], desiredIndex: number): [string, string, string, string, string] {
  const correctKey = canonicalOptionKey(correctItem);
  const seenKeys = new Set<string>();
  if (correctKey.length > 0) {
    seenKeys.add(correctKey);
  }
  const distinctDistractors: string[] = [];
  for (const d of distractors) {
    if (d === correctItem) continue;
    const dKey = canonicalOptionKey(d);
    if (dKey.length > 0) {
      if (seenKeys.has(dKey)) continue;
      seenKeys.add(dKey);
    } else {
      if (distinctDistractors.includes(d)) continue;
    }
    distinctDistractors.push(d);
  }

  // If near-duplicate filtering reduced count below 4, fallback to distinct raw string distractors
  if (distinctDistractors.length < 4) {
    for (const d of distractors) {
      if (d !== correctItem && !distinctDistractors.includes(d)) {
        distinctDistractors.push(d);
        if (distinctDistractors.length >= 4) break;
      }
    }
  }

  if (distinctDistractors.length < 4) {
    throw new Error(
      `CRITICAL: Insufficient distinct distractors (got ${distinctDistractors.length}, expected at least 4) for target: "${correctItem}"`
    );
  }

  const result: string[] = [];
  let dIdx = 0;
  for (let i = 0; i < 5; i++) {
    if (i === desiredIndex) {
      result.push(correctItem);
    } else {
      result.push(distinctDistractors[dIdx++]);
    }
  }

  return [result[0], result[1], result[2], result[3], result[4]];
}

// Stems are direct scientific questions: they never refer to the unit, the book, the curriculum
// ("kazanım") or "according to ...". The topic is carried by the statements themselves.
// (title parameters are kept for call-site compatibility but intentionally unused.)

// Roman-numeral (I / II / III) stems in ÖSYM layout: statements, then the question.
function buildRomanStem(_title: string, statements: [string, string, string], askTrue: boolean, lang: LanguageCode): string {
  const body = `I. ${statements[0]}\nII. ${statements[1]}\nIII. ${statements[2]}`;
  switch (lang) {
    case 'tr': return `${body}\n\nYukarıdaki ifadelerden hangileri ${askTrue ? 'doğrudur' : 'yanlıştır'}?`;
    case 'en': return `${body}\n\nWhich of the statements above are ${askTrue ? 'correct' : 'incorrect'}?`;
    case 'de': return `${body}\n\nWelche der obigen Aussagen sind ${askTrue ? 'richtig' : 'falsch'}?`;
    case 'fr': return `${body}\n\nLesquelles des affirmations ci-dessus sont ${askTrue ? 'exactes' : 'fausses'} ?`;
    case 'ru': return `${body}\n\nКакие из приведённых утверждений ${askTrue ? 'верны' : 'неверны'}?`;
    case 'ar': return `${body}\n\nأيّ العبارات السابقة ${askTrue ? 'صحيحة' : 'خاطئة'}؟`;
    case 'zh': return `${body}\n\n以上说法中${askTrue ? '正确' : '错误'}的是哪些？`;
    case 'ku': return `${body}\n\nKîjan ji gotinên li jor ${askTrue ? 'rast' : 'şaş'} in?`;
  }
}

function getNegativeTrapStem(_title: string, lang: LanguageCode, variant = 0): string {
  const v = variant % 3;
  switch (lang) {
    case 'tr': return ['Aşağıdaki ifadelerden hangisi yanlıştır?', 'Aşağıdaki yargılardan hangisi bilimsel olarak hatalıdır?', 'Aşağıdakilerden hangisi doğru değildir?'][v];
    case 'en': return ['Which of the following statements is incorrect?', 'Which of the following statements is scientifically wrong?', 'Which of the following is not true?'][v];
    case 'de': return ['Welche der folgenden Aussagen ist falsch?', 'Welche der folgenden Aussagen ist fachlich nicht korrekt?', 'Welche der folgenden Aussagen trifft nicht zu?'][v];
    case 'fr': return ['Laquelle des affirmations suivantes est fausse ?', 'Laquelle des affirmations suivantes est scientifiquement erronée ?', 'Laquelle des propositions suivantes est inexacte ?'][v];
    case 'ru': return ['Какое из следующих утверждений неверно?', 'Какое из следующих утверждений содержит научную ошибку?', 'Какое из следующих утверждений не соответствует действительности?'][v];
    case 'ar': return ['أيّ العبارات الآتية خاطئة؟', 'أيّ العبارات الآتية غير صحيحة علميًا؟', 'أيّ مما يأتي ليس صحيحًا؟'][v];
    case 'zh': return ['下列说法中，错误的是哪一项？', '下列说法中，存在科学性错误的是哪一项？', '下列叙述中，不正确的是哪一项？'][v];
    case 'ku': return ['Kîjan ji gotinên jêrîn şaş e?', 'Kîjan ji gotinên jêrîn ji aliyê zanistî ve şaş e?', 'Kîjan ji yên jêrîn ne rast e?'][v];
  }
}

function getPositiveConceptStem(_title: string, lang: LanguageCode, variant = 0): string {
  const v = variant % 3;
  switch (lang) {
    case 'tr': return ['Aşağıdaki ifadelerden hangisi doğrudur?', 'Aşağıdaki yargılardan hangisi bilimsel olarak doğrudur?', 'Aşağıdakilerden hangisi doğrudur?'][v];
    case 'en': return ['Which of the following statements is correct?', 'Which of the following statements is scientifically correct?', 'Which of the following is true?'][v];
    case 'de': return ['Welche der folgenden Aussagen ist richtig?', 'Welche der folgenden Aussagen ist fachlich korrekt?', 'Welche der folgenden Aussagen trifft zu?'][v];
    case 'fr': return ['Laquelle des affirmations suivantes est exacte ?', 'Laquelle des affirmations suivantes est scientifiquement correcte ?', 'Laquelle des propositions suivantes est vraie ?'][v];
    case 'ru': return ['Какое из следующих утверждений верно?', 'Какое из следующих утверждений научно верно?', 'Какое из следующих утверждений соответствует действительности?'][v];
    case 'ar': return ['أيّ العبارات الآتية صحيحة؟', 'أيّ العبارات الآتية صحيحة علميًا؟', 'أيّ مما يأتي صحيح؟'][v];
    case 'zh': return ['下列说法中，正确的是哪一项？', '下列说法中，符合科学事实的是哪一项？', '下列叙述中，正确的是哪一项？'][v];
    case 'ku': return ['Kîjan ji gotinên jêrîn rast e?', 'Kîjan ji gotinên jêrîn ji aliyê zanistî ve rast e?', 'Kîjan ji yên jêrîn rast e?'][v];
  }
}

function getMatchStemA(_title: string, clue: string, lang: LanguageCode): string {
  switch (lang) {
    case 'tr': return `"${clue}"\n\nYukarıdaki açıklamada "bu kavram" ile belirtilen aşağıdakilerden hangisidir?`;
    case 'en': return `"${clue}"\n\nIn the description above, what does "this concept" refer to?`;
    case 'de': return `"${clue}"\n\nWorauf bezieht sich „dieser Begriff" in der obigen Beschreibung?`;
    case 'fr': return `« ${clue} »\n\nDans la description ci-dessus, que désigne « cette notion » ?`;
    case 'ru': return `«${clue}»\n\nЧто обозначено словами «это понятие» в приведённом описании?`;
    case 'ar': return `"${clue}"\n\nإلامَ تشير عبارة "هذا المفهوم" في الوصف السابق؟`;
    case 'zh': return `“${clue}”\n\n上述描述中的“该概念”指的是下列哪一项？`;
    case 'ku': return `"${clue}"\n\nDi şiroveya li jor de "ev têgeh" kîjan e?`;
  }
}

function getMatchStemB(_title: string, conceptName: string, lang: LanguageCode): string {
  switch (lang) {
    case 'tr': return `${conceptName} ile ilgili aşağıdaki ifadelerden hangisi doğrudur?`;
    case 'en': return `Which of the following statements about ${conceptName} is correct?`;
    case 'de': return `Welche der folgenden Aussagen über ${conceptName} ist richtig?`;
    case 'fr': return `Laquelle des affirmations suivantes concernant ${conceptName} est exacte ?`;
    case 'ru': return `Какое из следующих утверждений о понятии «${conceptName}» верно?`;
    case 'ar': return `أيّ العبارات الآتية عن ${conceptName} صحيحة؟`;
    case 'zh': return `下列关于“${conceptName}”的说法中，正确的是哪一项？`;
    case 'ku': return `Derbarê ${conceptName} de kîjan ji gotinên jêrîn rast e?`;
  }
}

function getSequenceOrderStem(_title: string, seqTitle: string, lang: LanguageCode): string {
  switch (lang) {
    case 'tr': return `${seqTitle} sürecinin basamakları aşağıda karışık olarak verilmiştir. Basamakların doğru sıralaması hangisidir?`;
    case 'en': return `The steps of "${seqTitle}" are listed below in random order. Which option gives the correct order?`;
    case 'de': return `Die Schritte von "${seqTitle}" sind unten ungeordnet aufgeführt. Welche Option gibt die richtige Reihenfolge an?`;
    case 'fr': return `Les étapes de « ${seqTitle} » sont données ci-dessous dans le désordre. Quelle option donne l'ordre correct ?`;
    case 'ru': return `Этапы процесса «${seqTitle}» перечислены ниже вразброс. В каком варианте указан правильный порядок?`;
    case 'ar': return `خطوات "${seqTitle}" مذكورة أدناه بترتيب عشوائي. أيّ الخيارات يبيّن الترتيب الصحيح؟`;
    case 'zh': return `下面打乱列出了“${seqTitle}”的各个步骤。正确的先后顺序是哪一项？`;
    case 'ku': return `Gavên "${seqTitle}" li jêr bi rêzeke tevlihev hatine dayîn. Rêza rast kîjan e?`;
  }
}

function getSequenceMissingStepStem(_title: string, seqTitle: string, lang: LanguageCode): string {
  switch (lang) {
    case 'tr': return `${seqTitle} sürecinde [ ? ] ile gösterilen basamak aşağıdakilerden hangisidir?`;
    case 'en': return `In "${seqTitle}", which step is shown by [ ? ]?`;
    case 'de': return `Welcher Schritt ist im Ablauf "${seqTitle}" mit [ ? ] markiert?`;
    case 'fr': return `Dans « ${seqTitle} », quelle étape est indiquée par [ ? ] ?`;
    case 'ru': return `Какой этап процесса «${seqTitle}» обозначен знаком [ ? ]?`;
    case 'ar': return `في "${seqTitle}"، ما الخطوة المشار إليها بالرمز [ ؟ ]؟`;
    case 'zh': return `在“${seqTitle}”中，用 [ ? ] 表示的步骤是哪一项？`;
    case 'ku': return `Di "${seqTitle}" de, gava ku bi [ ? ] hatiye nîşankirin kîjan e?`;
  }
}

interface PropositionDetail {
  numeral: 'I' | 'II' | 'III';
  isValid: boolean;
  fact: string;
  whyTrap?: string;
  tip?: string;
}

function buildRomanEvaluationExplanation(
  combo: string,
  askTrue: boolean,
  props: [PropositionDetail, PropositionDetail, PropositionDetail],
  lang: LanguageCode
): string {
  const t = EXPLANATION_TEMPLATES[lang] || EXPLANATION_TEMPLATES.tr;
  const evalParts = props.map((p) => (p.isValid ? t.romanValid(p.numeral, p.fact, p.tip) : t.romanInvalid(p.numeral, p.fact, p.whyTrap)));
  const synthesis = askTrue ? t.romanTrue(combo) : t.romanFalse(combo);
  return `${evalParts.join(' ')} ${synthesis}`;
}

/** Roman-numeral answer combinations in the canonical ÖSYM option order. */
type RomanComboKey = 'only1' | 'only2' | 'only3' | 'oneTwo' | 'oneThree' | 'twoThree' | 'all';
const ROMAN_CANONICAL_ORDER: RomanComboKey[] = ['only1', 'only2', 'only3', 'oneTwo', 'oneThree', 'twoThree', 'all'];
const ROMAN_COMBO_SELECTION: Record<RomanComboKey, [boolean, boolean, boolean]> = {
  only1: [true, false, false],
  only2: [false, true, false],
  only3: [false, false, true],
  oneTwo: [true, true, false],
  oneThree: [true, false, true],
  twoThree: [false, true, true],
  all: [true, true, true],
};

/**
 * Chooses the 5 visible Roman options: the keyed combination plus 4 of the remaining 6, listed in
 * canonical ÖSYM order. The distractor set is chosen independently of which combination is keyed
 * (so e.g. "Yalnız III" or "II ve III" are no longer only present when they are the answer) and so
 * that the key lands on `position` (0..4).
 */
function buildRomanOptionSet(key: RomanComboKey, position: number, rotation: number): RomanComboKey[] {
  const rank = ROMAN_CANONICAL_ORDER.indexOf(key);
  const lower = ROMAN_CANONICAL_ORDER.slice(0, rank);
  const upper = ROMAN_CANONICAL_ORDER.slice(rank + 1);
  const takeLower = position;
  const takeUpper = 4 - position;
  const pick = (pool: RomanComboKey[], n: number): RomanComboKey[] => {
    if (n >= pool.length) return [...pool];
    // Drop (pool.length - n) items, rotating which ones are dropped.
    const drop = pool.length - n;
    const dropped = new Set<number>();
    for (let k = 0; k < drop; k++) dropped.add((rotation + k * 2) % pool.length);
    let extra = 0;
    while (dropped.size < drop) dropped.add((rotation + drop * 2 + extra++) % pool.length);
    return pool.filter((_, i) => !dropped.has(i));
  };
  const chosen = [...pick(lower, takeLower), key, ...pick(upper, takeUpper)];
  return ROMAN_CANONICAL_ORDER.filter((k) => chosen.includes(k));
}

/** Positions (0..4) the keyed combination can occupy in a canonical 5-option list. */
function romanFeasiblePositions(key: RomanComboKey): number[] {
  const rank = ROMAN_CANONICAL_ORDER.indexOf(key);
  const out: number[] = [];
  for (let p = Math.max(0, rank - 2); p <= Math.min(4, rank); p++) out.push(p);
  return out;
}

/**
 * Splits the unit's fact/trap pairs for one 16-question set so that no pair is shown as a TRUE
 * statement in one question and as its FALSE twin in another question of the same set, and so
 * that the keyed statement of a negative-trap / positive-concept question never re-appears
 * elsewhere in that set (which would let a student infer the key from another question).
 */
function partitionFactsForSet(
  factCount: number,
  setNum: number,
  twinKeyItems: Set<number> = new Set(),
  twinTrapItems: Set<number> = new Set()
) {
  const base = ((setNum - 1) * 3) % factCount;
  const half = Math.floor(factCount / 2);
  const taken = new Set<number>();
  // Keys of negative-trap / positive-concept questions must not also be visible inside the set's
  // ÖSYM twins (many twins reuse the fact/trap texts verbatim), else one question answers the other.
  const pickKeys = (start: number): number[] => {
    const out: number[] = [];
    for (const allowTwinTraps of [false, true]) {
      for (let i = 0; i < factCount && out.length < 3; i++) {
        const idx = (start + i) % factCount;
        if (taken.has(idx) || twinKeyItems.has(idx)) continue;
        if (!allowTwinTraps && twinTrapItems.has(idx)) continue;
        out.push(idx);
        taken.add(idx);
      }
    }
    return out;
  };
  const negKeys = pickKeys(base);
  const posKeys = pickKeys(base + half);
  // The fact behind a twin's correct option is never shown elsewhere in the set.
  const rest: number[] = [];
  for (let i = 0; i < factCount; i++) if (!taken.has(i) && !twinKeyItems.has(i)) rest.push(i);
  const shownTrue: number[] = [];
  const shownFalse: number[] = [];
  // Items whose trap appears in a twin are shown as traps too (never as the contradicting fact).
  let k = 0;
  for (const idx of rest) {
    if (twinTrapItems.has(idx)) shownFalse.push(idx);
    else ((k++ + setNum) % 2 === 0 ? shownTrue : shownFalse).push(idx);
  }
  const MIN = 4;
  const moveToTrue = (preferNonTwin: boolean) => {
    const i = shownFalse.findIndex((idx) => !preferNonTwin || !twinTrapItems.has(idx));
    if (i >= 0) shownTrue.push(...shownFalse.splice(i, 1));
    return i >= 0;
  };
  while (shownTrue.length < MIN && shownFalse.length > MIN && moveToTrue(true));
  while (shownFalse.length < MIN && shownTrue.length > MIN) shownFalse.push(shownTrue.pop()!);
  return { negKeys, posKeys, shownTrue, shownFalse };
}

/**
 * Deterministically rotates an ÖSYM-twin's options so its key lands on `desired`, unless the
 * options must keep their authored order (Roman-numeral combos, ascending numeric answers,
 * "hepsi/hiçbiri" style options, or an explanation that names option letters).
 */
/**
 * Reads a numeric answer option ("2,5 atm", "-0,76 V", "1/6", "6,0x10^21", "1,22·10^-3", "10^-5 M").
 * Returns null for anything that is not a single number with an optional short unit.
 */
export function parseNumericOption(option: string): number | null {
  const o = (option || '').trim().replace(/[−–]/g, '-').replace(/\s+/g, ' ');
  const m = /^([+-]?)(?:(\d+(?:[.,]\d+)?)(?:\s?\/\s?(\d+(?:[.,]\d+)?))?)?(?:\s?(?:[x×·*]\s?)?10\s?\^\s?\(?([+-]?\d+)\)?)?(?:\s?%|\s?[%°]?[A-Za-zÇĞİÖŞÜçğıöşüμΩ][A-Za-zÇĞİÖŞÜçğıöşüμΩ0-9³²/·.]{0,9}(?:\s?\/\s?[A-Za-z]{1,4})?)?$/.exec(o);
  if (!m || (m[2] === undefined && m[4] === undefined)) return null;
  const num = (t: string) => parseFloat(t.replace(',', '.'));
  let v = m[2] !== undefined ? num(m[2]) : 1;
  if (m[3] !== undefined) v /= num(m[3]);
  if (m[4] !== undefined) v *= Math.pow(10, parseInt(m[4], 10));
  if (m[1] === '-') v = -v;
  return Number.isFinite(v) ? v : null;
}

/** Roman-numeral combination options ("Yalnız I", "I ve II", "I, II ve III") in any language. */
const ROMAN_COMBO_OPTION = /^(?:Yalnız|Only|Nur|Seulement|Только|فقط|仅|Tenê)\s*I{1,3}\b|^I{1,3}\s*(?:,|ve|and|und|et|и|و|和|、|û)\s*I/;

function twinIsRotatable(twin: ChemistryUnitSeedData['osymTwins'][number]): boolean {
  const opts = twin.options.map((o) => (o.tr || '').trim());
  // "Yalnız I / I ve II / I, II ve III" combinations keep the canonical ÖSYM order.
  if (opts.some((o) => ROMAN_COMBO_OPTION.test(o))) return false;
  if (opts.some((o) => /^(hepsi|hiçbiri|tümü|i̇kisi de|ikisi de)\b/i.test(o))) return false;
  // Numeric answers stay in their authored order when that order is ascending (ÖSYM convention) or
  // descending; scientific notation and fractions are compared by value ("6,0x10^21" < "7,2x10^22").
  const nums = opts.map(parseNumericOption);
  if (nums.every((n): n is number => n !== null)) {
    const asc = nums.every((n, i) => i === 0 || n >= nums[i - 1]);
    const desc = nums.every((n, i) => i === 0 || n <= nums[i - 1]);
    if (asc || desc) return false;
  }
  // Worked solutions that name an option letter would point at the wrong option after rotation.
  const letterRef = /\b[A-E]\)|\([A-E]\)|\b[A-E]\s+seçene|seçene(ği|k)\s+[A-E]\b|\b[A-E]\s+şıkkı|\b(?:cevap|yanıt)\s*:?\s*[A-E]\b|\b[A-E]['’](?:dir|dır|dur|dür|tir|tır|tur|tür)\b|\b(?:option|answer|choice)\s+[A-E]\b/i;
  if (letterRef.test(twin.explanation.tr || '') || letterRef.test(twin.explanation.en || '')) return false;
  return true;
}

/** Normalised Turkish seed text used to recognise fact/trap sentences reused inside a twin. */
function seedKey(text: string): string {
  return stripTerminalPunctuation(text || '')
    .toLocaleLowerCase('tr')
    .replace(/[“”„"'’‘]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Fact items a twin reproduces verbatim, in its options and (for I/II/III twins) in the numbered
 * statements of its stem. Free-form twins simply return no hits. `optionIndex` is -1 for a stem line.
 */
function twinSeedHits(
  twin: ChemistryUnitSeedData['osymTwins'][number],
  index: Map<string, { idx: number; kind: 'fact' | 'trap' }>
): Array<{ idx: number; kind: 'fact' | 'trap'; optionIndex: number }> {
  const hits: Array<{ idx: number; kind: 'fact' | 'trap'; optionIndex: number }> = [];
  twin.options.forEach((o, oi) => {
    const hit = index.get(seedKey(o.tr));
    if (hit) hits.push({ ...hit, optionIndex: oi });
  });
  for (const line of (twin.stem.tr || '').split('\n')) {
    const m = /^\s*(?:I{1,3}|IV|V)[.)]\s+(.+)$/.exec(line);
    if (!m) continue;
    const hit = index.get(seedKey(m[1]));
    if (hit) hits.push({ ...hit, optionIndex: -1 });
  }
  return hits;
}

/**
 * Compiles exactly 128 verified chemistry questions for a single unit in the specified language.
 */
export function compileUnitQuestions(
  unit: ChemistryUnitSeedData,
  lang: LanguageCode = 'tr'
): CompiledQuestion[] {
  const unitTitle = unit.title[lang] || unit.title.tr;
  const questions: CompiledQuestion[] = [];
  const romanCombos = ROMAN_COMBINATIONS[lang] || ROMAN_COMBINATIONS.tr;
  const explTemplates = EXPLANATION_TEMPLATES[lang] || EXPLANATION_TEMPLATES.tr;
  const L = (t: { tr: string } & Partial<Record<LanguageCode, string>>) => t[lang] || t.tr;
  const fCount = unit.facts.length;

  // Answer-key balancing: every key position A..E ends at 25 or 26 per unit, and no key is
  // repeated three times in a row. All archetypes (including ÖSYM twins, whose options are
  // rotated when safe) take part, so authored twin keys no longer skew the distribution.
  const keyCounts = [0, 0, 0, 0, 0];
  const recentKeys: number[] = [];

  function pickBestKey(qNum: number, setNum: number, allowed: number[] = [0, 1, 2, 3, 4]): 0 | 1 | 2 | 3 | 4 {
    const notRun = allowed.filter((k) => !(recentKeys.length >= 2 && recentKeys[recentKeys.length - 1] === k && recentKeys[recentKeys.length - 2] === k));
    const pool = notRun.length > 0 ? notRun : allowed;
    const minVal = Math.min(...pool.map((k) => keyCounts[k]));
    const candidates = pool.filter((k) => keyCounts[k] === minVal);
    const rot = (qNum * 2 + setNum * 3 + unit.order) % candidates.length;
    return candidates[rot] as 0 | 1 | 2 | 3 | 4;
  }
  function commitKey(k: number) {
    keyCounts[k]++;
    recentKeys.push(k);
  }

  /**
   * Corrections for wrong (trap) options, listed by letter, for explanations. When the seed has a
   * whyTrapIsFalse for that trap, the reason is given before the correct fact
   * ("B) <neden>. Doğrusu: <fact>."); otherwise only the correct fact is listed.
   */
  function trapCorrections(options: string[], correctIndex: number, trapToFact: Map<string, { fact: string; why?: string }>): string {
    const parts: string[] = [];
    let anyWhy = false;
    options.forEach((opt, i) => {
      if (i === correctIndex) return;
      const hit = trapToFact.get(opt);
      if (!hit) return;
      if (hit.why) anyWhy = true;
      parts.push(hit.why ? explTemplates.optionCorrection('ABCDE'[i], hit.fact, hit.why) : `${'ABCDE'[i]}) ${asSentence(hit.fact, lang)}`);
    });
    if (parts.length === 0) return '';
    return ` ${anyWhy ? explTemplates.otherOptionsWhyIntro : explTemplates.otherOptionsIntro} ${parts.join(' ')}`;
  }

  const factText = (i: number) => L(unit.facts[i].fact);
  const trapText = (i: number) => L(unit.facts[i].trap);
  // whyTrapIsFalse is only used in the language it was written in: falling back to the Turkish
  // reason inside e.g. a German explanation would mix languages, so a missing translation drops it.
  const whyText = (f: ChemistryUnitSeedData['facts'][number]): string | undefined => {
    const w = f.whyTrapIsFalse?.[lang];
    return w && stripTerminalPunctuation(w).length > 3 ? w : undefined;
  };
  const trapToFact = new Map<string, { fact: string; why?: string }>();
  for (const f of unit.facts) trapToFact.set(normalizeProseOption(L(f.trap), lang), { fact: L(f.fact), why: whyText(f) });

  const factIndexByTrText = new Map<string, { idx: number; kind: 'fact' | 'trap' }>();
  unit.facts.forEach((f, idx) => {
    factIndexByTrText.set(seedKey(f.fact.tr), { idx, kind: 'fact' });
    factIndexByTrText.set(seedKey(f.trap.tr), { idx, kind: 'trap' });
  });
  const twinHits = unit.osymTwins.map((twin) => twinSeedHits(twin, factIndexByTrText));

  // Some twins reproduce fact/trap texts verbatim (as options or as I/II/III statements). Pair twins
  // that share fact items (so the two twins of a set touch as few items as possible), never pairing
  // a twin with one that shows the partner's key item, then deal the pairs out set by set. Free-form
  // twins have no hits and are simply paired in authored order.
  const twinItems = unit.osymTwins.map((twin, ti) => {
    const all = new Set<number>();
    let keyItem = -1;
    for (const hit of twinHits[ti]) {
      all.add(hit.idx);
      if (hit.optionIndex === twin.correctIndex) keyItem = hit.idx;
    }
    return { all, keyItem };
  });
  const twinOrder: number[] = [];
  {
    const used = new Set<number>();
    for (let i = 0; i < unit.osymTwins.length; i++) {
      if (used.has(i)) continue;
      used.add(i);
      twinOrder.push(i);
      let best = -1;
      let bestCost = Infinity;
      for (let j = i + 1; j < unit.osymTwins.length; j++) {
        if (used.has(j)) continue;
        const a = twinItems[i];
        const b = twinItems[j];
        const leak = (a.keyItem >= 0 && b.all.has(a.keyItem)) || (b.keyItem >= 0 && a.all.has(b.keyItem));
        const cost = (leak ? 100 : 0) + new Set([...a.all, ...b.all]).size;
        if (cost < bestCost) { bestCost = cost; best = j; }
      }
      if (best >= 0) { used.add(best); twinOrder.push(best); }
    }
  }
  const twinAt = (slot: number) => unit.osymTwins[twinOrder[slot % twinOrder.length]];

  let romanCounter = 0;
  let matchCounter = 0;
  let orderCounter = 0;
  let twinCounter = 0;

  for (let s = 1; s <= QUESTION_SETS_PER_UNIT; s++) {
    const setNum = s as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    let difficulty: ChemistryDifficulty = 'easy';
    if (setNum <= 2) difficulty = 'easy';
    else if (setNum <= 4) difficulty = 'medium';
    else if (setNum <= 6) difficulty = 'hard';
    else difficulty = 'osym';

    // Fact items that this set's ÖSYM twins reproduce verbatim (matched on the Turkish seed text,
    // so every language gets the same partition).
    const twinKeyItems = new Set<number>();
    const twinTrapItems = new Set<number>();
    for (let t = 0; t < 2; t++) {
      const slot = (twinCounter + t) % twinOrder.length;
      const twin = unit.osymTwins[twinOrder[slot]];
      for (const hit of twinHits[twinOrder[slot]]) {
        if (hit.optionIndex === twin.correctIndex || hit.kind === 'fact') twinKeyItems.add(hit.idx);
        else twinTrapItems.add(hit.idx);
      }
    }
    for (const idx of twinKeyItems) twinTrapItems.delete(idx);
    const part = partitionFactsForSet(fCount, setNum, twinKeyItems, twinTrapItems);
    // TRUE statements available to this set: the facts assigned to the "shown true" side, topped
    // up (when the set's twins reserve many fact items) with comparison distinctions, which are
    // also true statements. Distinctions of the two comparisons this set's matching questions use
    // are excluded, since seeing them elsewhere would reveal those answers.
    const cCountAll = unit.comparisons.length;
    const setCompA = (setNum - 1) % cCountAll;
    const setCompB = (setNum - 1 + Math.floor(cCountAll / 2)) % cCountAll;
    const truePool: Array<{ text: string; tip?: string }> = part.shownTrue.map((idx) => ({
      text: factText(idx),
      tip: unit.facts[idx].osymTip ? L(unit.facts[idx].osymTip!) : undefined,
    }));
    for (let c = 0; c < cCountAll && truePool.length < 6; c++) {
      const ci = (setNum + c) % cCountAll;
      if (ci === setCompA || ci === setCompB) continue;
      const text = L(unit.comparisons[ci].distinction);
      if (!truePool.some((t) => t.text === text)) truePool.push({ text });
    }
    let truePtr = setNum;
    let falsePtr = setNum * 2;
    const nextTrue = () => truePtr++ % truePool.length;
    const nextFalse = () => part.shownFalse[falsePtr++ % part.shownFalse.length];

    for (let qInSet = 1; qInSet <= QUESTIONS_PER_SET; qInSet++) {
      const qNum = (s - 1) * QUESTIONS_PER_SET + qInSet;
      const qId = `${unit.id}-q${String(qNum).padStart(3, '0')}`;

      if (qInSet <= 4) {
        // --- 1. Roman Numeral (4 per set = 32 per unit) ---
        const archetype: ChemistryArchetype = 'roman-numeral';
        const r = romanCounter++;
        const askTrue = setNum <= 6; // sets 1-6 ask for the true statements, sets 7-8 for the false ones

        // Cycle through all 7 combinations (r * 3 visits every residue mod 7); skip a combination
        // whose only feasible key positions would create a run of three identical keys.
        let comboKey: RomanComboKey = ROMAN_CANONICAL_ORDER[(r * 3 + unit.order) % 7];
        for (let tries = 0; tries < 7; tries++) {
          const candidate = ROMAN_CANONICAL_ORDER[(r * 3 + unit.order + tries) % 7];
          const feasible = romanFeasiblePositions(candidate);
          const runKey = recentKeys.length >= 2 && recentKeys[recentKeys.length - 1] === recentKeys[recentKeys.length - 2]
            ? recentKeys[recentKeys.length - 1] : -1;
          if (feasible.some((p) => p !== runKey)) { comboKey = candidate; break; }
        }
        const selection = ROMAN_COMBO_SELECTION[comboKey];
        // The selection names the statements the stem asks for (true ones, or false ones).
        const truth = selection.map((sel) => (askTrue ? sel : !sel)) as [boolean, boolean, boolean];
        const items: number[] = [];
        truth.forEach((isTrue, k) => {
          // Never print the same statement twice inside one question.
          let idx = isTrue ? nextTrue() : nextFalse();
          for (let guard = 0; guard < 8 && items.some((prev, pk) => truth[pk] === isTrue && prev === idx); guard++) {
            idx = isTrue ? nextTrue() : nextFalse();
          }
          items[k] = idx;
        });
        const statements = items.map((idx, k) => (truth[k] ? truePool[idx].text : trapText(idx))) as [string, string, string];

        const correctIndex = pickBestKey(qNum, s, romanFeasiblePositions(comboKey));
        commitKey(correctIndex);
        const optionKeys = buildRomanOptionSet(comboKey, correctIndex, r + unit.order);
        const options = optionKeys.map((k) => romanCombos[k]) as [string, string, string, string, string];

        const stem = buildRomanStem(unitTitle, statements, askTrue, lang);
        const numerals: Array<'I' | 'II' | 'III'> = ['I', 'II', 'III'];
        const explanation = buildRomanEvaluationExplanation(
          romanCombos[comboKey],
          askTrue,
          items.map((idx, k) => (truth[k]
            ? { numeral: numerals[k], isValid: true, fact: truePool[idx].text, tip: truePool[idx].tip }
            : {
              numeral: numerals[k],
              isValid: false,
              fact: factText(idx),
              whyTrap: whyText(unit.facts[idx]),
            })) as [PropositionDetail, PropositionDetail, PropositionDetail],
          lang
        );

        questions.push({
          id: qId,
          unitId: unit.id,
          setNumber: setNum,
          questionNumberInUnit: qNum,
          exam: unit.exam,
          difficulty,
          archetype,
          stem,
          options,
          correctIndex,
          explanation,
        });
      } else if (qInSet <= 7) {
        // --- 2. Negative Trap (3 per set = 24 per unit) ---
        const archetype: ChemistryArchetype = 'negative-trap';
        const j = qInSet - 5;
        const targetFactIdx = part.negKeys[j];
        const targetPair = unit.facts[targetFactIdx];
        const correctOption = normalizeProseOption(L(targetPair.trap), lang);

        const distractors: string[] = [];
        for (let d = 0; d < truePool.length && distractors.length < 4; d++) {
          const text = normalizeProseOption(truePool[(j * 2 + setNum + d) % truePool.length].text, lang);
          if (!distractors.includes(text)) distractors.push(text);
        }

        const desiredIndex = pickBestKey(qNum, s);
        commitKey(desiredIndex);
        const options = rotateOptions(correctOption, distractors, desiredIndex);
        const stemVariant = (setNum - 1) * 3 + j;
        const stem = getNegativeTrapStem(unitTitle, lang, stemVariant);

        const whyFalse = whyText(targetPair);
        const correctFact = L(targetPair.fact);
        const explanation = whyFalse
          ? explTemplates.negativeTrapWhy(correctOption, whyFalse, correctFact)
          : explTemplates.negativeTrapDefault(correctOption, correctFact);

        questions.push({
          id: qId,
          unitId: unit.id,
          setNumber: setNum,
          questionNumberInUnit: qNum,
          exam: unit.exam,
          difficulty,
          archetype,
          stem,
          options,
          correctIndex: desiredIndex,
          explanation,
        });
      } else if (qInSet <= 10) {
        // --- 3. Positive Concept (3 per set = 24 per unit) ---
        const archetype: ChemistryArchetype = 'positive-concept';
        const j = qInSet - 8;
        const targetFactIdx = part.posKeys[j];
        const targetPair = unit.facts[targetFactIdx];
        const correctOption = normalizeProseOption(L(targetPair.fact), lang);

        const distractors: string[] = [];
        for (let d = 0; d < part.shownFalse.length && distractors.length < 4; d++) {
          const idx = part.shownFalse[(j * 2 + setNum + d) % part.shownFalse.length];
          const text = normalizeProseOption(trapText(idx), lang);
          if (!distractors.includes(text)) distractors.push(text);
        }

        const desiredIndex = pickBestKey(qNum, s);
        commitKey(desiredIndex);
        const options = rotateOptions(correctOption, distractors, desiredIndex);
        const stemVariant = (setNum - 1) * 3 + j;
        const stem = getPositiveConceptStem(unitTitle, lang, stemVariant);

        const tip = targetPair.osymTip ? L(targetPair.osymTip) : undefined;
        const explanation = (tip
          ? explTemplates.positiveConceptTip(correctOption, tip)
          : explTemplates.positiveConceptDefault(correctOption)) + trapCorrections(options, desiredIndex, trapToFact);

        questions.push({
          id: qId,
          unitId: unit.id,
          setNumber: setNum,
          questionNumberInUnit: qNum,
          exam: unit.exam,
          difficulty,
          archetype,
          stem,
          options,
          correctIndex: desiredIndex,
          explanation,
        });
      } else if (qInSet <= 12) {
        // --- 4. Structure-Property Match (2 per set = 16 per unit) ---
        const archetype: ChemistryArchetype = 'structure-property-match';
        matchCounter++;
        const cCount = unit.comparisons.length;
        const isTypeA = (qInSet === 11);
        const cIdx = isTypeA
          ? ((setNum - 1) % cCount)
          : ((setNum - 1 + Math.floor(cCount / 2)) % cCount);
        const comp = unit.comparisons[cIdx];
        const conceptAStr = L(comp.conceptA);
        const conceptBStr = L(comp.conceptB);
        const distinctionStr = L(comp.distinction);

        let correctOption = '';
        const distractors: string[] = [];
        let stem = '';
        let explanation = '';
        let desiredIndex: 0 | 1 | 2 | 3 | 4;
        let options: [string, string, string, string, string];

        if (isTypeA) {
          // Given the distinguishing trait (with concept A's name masked) -> identify concept A.
          // Inner double quotes would break the quoted clue in the stem; use single quotes instead.
          const sanitizedClue = stripTerminalPunctuation(sanitizeEntityClue(distinctionStr, conceptAStr, lang)).replace(/"/g, "'");
          const matchTitle = sanitizeUnitTitleForStem(unitTitle, conceptAStr, lang);
          stem = getMatchStemA(matchTitle, sanitizedClue, lang);
          correctOption = normalizeEntityOption(conceptAStr);

          // Candidate concepts from the unit, excluding concept A and its own contrast partner B:
          // the distinction text describes BOTH members of the pair, so offering B as a
          // distractor made the item ambiguous (e.g. kaynama noktası yükselmesi / donma noktası alçalması).
          const allUnitConcepts: string[] = [];
          const seenKeys = new Set<string>([canonicalOptionKey(correctOption), canonicalOptionKey(normalizeEntityOption(conceptBStr))]);
          for (let i = 0; i < cCount; i++) {
            const c = unit.comparisons[(cIdx + 1 + i) % cCount];
            for (const item of [c.conceptB, c.conceptA]) {
              const name = normalizeEntityOption(L(item));
              const key = canonicalOptionKey(name);
              if (key.length > 0 && !seenKeys.has(key)) {
                seenKeys.add(key);
                allUnitConcepts.push(name);
              }
            }
          }
          for (let d = 0; d < 4; d++) {
            const pickIdx = ((setNum - 1) * 3 + d) % allUnitConcepts.length;
            distractors.push(allUnitConcepts[pickIdx]);
          }
          desiredIndex = pickBestKey(qNum, s);
          commitKey(desiredIndex);
          options = rotateOptions(correctOption, distractors, desiredIndex);
          explanation = explTemplates.structureMatch(correctOption, conceptAStr, conceptBStr, distinctionStr);
        } else {
          // Given concept B -> pick the one TRUE statement about it. Distractors are the unit's
          // false (trap) statements, preferring traps that mention the same concepts, so that
          // exactly one option is correct (previously other comparisons' distinctions were used,
          // which are themselves true and could describe the same concept).
          stem = getMatchStemB(unitTitle, conceptBStr, lang);
          correctOption = normalizeProseOption(distinctionStr, lang);
          const heads = new Set<string>();
          for (const name of [conceptBStr, conceptAStr]) {
            for (const c of extractEntityCandidates(name, lang)) {
              if (c.length >= (lang === 'zh' ? 2 : 4)) heads.add(c.toLocaleLowerCase(lang));
            }
          }
          const mentions = (text: string) => {
            const low = text.toLocaleLowerCase(lang);
            for (const h of heads) if (low.includes(h)) return true;
            return false;
          };
          const pool = [...part.shownFalse].map((idx) => normalizeProseOption(trapText(idx), lang));
          const rotated = pool.map((_, i) => pool[(i + setNum) % pool.length]);
          const ordered = [...rotated.filter(mentions), ...rotated.filter((t) => !mentions(t))];
          for (const t of ordered) {
            if (distractors.length >= 4) break;
            if (t !== correctOption && !distractors.includes(t)) distractors.push(t);
          }
          desiredIndex = pickBestKey(qNum, s);
          commitKey(desiredIndex);
          options = rotateOptions(correctOption, distractors, desiredIndex);
          explanation = explTemplates.structureTrait(conceptBStr, conceptAStr, distinctionStr) + trapCorrections(options, desiredIndex, trapToFact);
        }

        questions.push({
          id: qId,
          unitId: unit.id,
          setNumber: setNum,
          questionNumberInUnit: qNum,
          exam: unit.exam,
          difficulty,
          archetype,
          stem,
          options,
          correctIndex: desiredIndex,
          explanation,
        });
      } else if (qInSet <= 14) {
        // --- 5. Reaction / Calculation Order (2 per set = 16 per unit) ---
        const archetype: ChemistryArchetype = 'reaction-calculation-order';
        const sCount = unit.sequences.length;
        const seqIdx = orderCounter++ % sCount;
        const seq = unit.sequences[seqIdx];
        const seqTitle = L(seq.title);

        const isTypeA = (qInSet % 2 === 1);
        let stem = '';
        let correctOption = '';
        const distractors: string[] = [];

        const SCRAMBLE_PATTERNS = [
          { order: [1, 0, 3, 2], correct: 'II → I → IV → III', dists: ['I → II → III → IV', 'III → I → II → IV', 'IV → III → II → I', 'II → IV → I → III'] },
          { order: [2, 0, 1, 3], correct: 'II → III → I → IV', dists: ['I → II → III → IV', 'II → I → IV → III', 'III → II → I → IV', 'IV → I → II → III'] },
          { order: [3, 1, 0, 2], correct: 'III → II → IV → I', dists: ['I → IV → II → III', 'II → I → III → IV', 'IV → III → II → I', 'III → I → IV → II'] },
          { order: [1, 3, 0, 2], correct: 'III → I → IV → II', dists: ['I → II → III → IV', 'II → III → I → IV', 'IV → II → I → III', 'I → III → II → IV'] },
          { order: [0, 2, 1, 3], correct: 'I → III → II → IV', dists: ['II → I → IV → III', 'I → II → III → IV', 'III → IV → I → II', 'IV → II → III → I'] },
          { order: [3, 2, 1, 0], correct: 'IV → III → II → I', dists: ['I → II → III → IV', 'II → III → IV → I', 'III → II → I → IV', 'IV → I → II → III'] },
          { order: [2, 3, 0, 1], correct: 'III → IV → I → II', dists: ['I → II → III → IV', 'IV → III → II → I', 'II → I → III → IV', 'III → I → IV → II'] },
          { order: [1, 2, 3, 0], correct: 'IV → I → II → III', dists: ['I → II → III → IV', 'II → IV → I → III', 'III → II → IV → I', 'IV → III → II → I'] },
        ];

        const fullProgression = seq.steps
          .map((st, i) => `${i + 1}. ${stripTerminalPunctuation(L(st))}`)
          .join(' → ');
        let explanation = '';

        if (isTypeA && seq.steps.length >= 4) {
          const pat = SCRAMBLE_PATTERNS[(setNum - 1) % SCRAMBLE_PATTERNS.length];
          const st = pat.order.map((o) => L(seq.steps[o]));
          stem = `${getSequenceOrderStem(unitTitle, seqTitle, lang)}\n\nI. ${st[0]}\nII. ${st[1]}\nIII. ${st[2]}\nIV. ${st[3]}`;
          correctOption = pat.correct;
          distractors.push(...pat.dists);
        } else {
          // Missing step [ ? ]
          const stepIdx = (setNum - 1) % (seq.steps.length || 4);
          const safeIdx = Math.min(stepIdx, seq.steps.length - 1);
          const missingStep = L(seq.steps[safeIdx]);

          const stepsView = seq.steps.map((st, i) => {
            const text = (i === safeIdx) ? '[ ? ]' : L(st);
            return `${i + 1}. ${text}`;
          }).join('\n');

          stem = `${getSequenceMissingStepStem(unitTitle, seqTitle, lang)}\n\n${stepsView}`;
          correctOption = normalizeProseOption(missingStep, lang);

          // Distractors come from the unit's OTHER sequences; steps of this sequence are already
          // printed in the stem, so offering them as options was a give-away.
          const allStepCandidates: string[] = [];
          const seenSteps = new Set<string>([correctOption]);
          for (const st of seq.steps) seenSteps.add(normalizeProseOption(L(st), lang));
          for (let i = 1; i < sCount; i++) {
            const otherSeq = unit.sequences[(seqIdx + i) % sCount];
            for (const st of otherSeq.steps) {
              const text = normalizeProseOption(L(st), lang);
              if (!seenSteps.has(text)) {
                seenSteps.add(text);
                allStepCandidates.push(text);
              }
            }
          }
          // Fallback only for very small seeds: visible steps of the same sequence.
          if (allStepCandidates.length < 4) {
            for (const st of seq.steps) {
              const text = normalizeProseOption(L(st), lang);
              if (text !== correctOption && !allStepCandidates.includes(text)) allStepCandidates.push(text);
            }
          }

          for (let d = 0; d < 4; d++) {
            const pickIdx = ((setNum - 1) * 2 + d) % allStepCandidates.length;
            distractors.push(allStepCandidates[pickIdx]);
          }
        }

        const desiredIndex = pickBestKey(qNum, s);
        commitKey(desiredIndex);
        const options = rotateOptions(correctOption, distractors, desiredIndex);
        explanation = (isTypeA && seq.steps.length >= 4)
          ? explTemplates.reactionOrder(correctOption, seqTitle, fullProgression)
          : explTemplates.missingStep(correctOption, seqTitle, fullProgression);

        questions.push({
          id: qId,
          unitId: unit.id,
          setNumber: setNum,
          questionNumberInUnit: qNum,
          exam: unit.exam,
          difficulty,
          archetype,
          stem,
          options,
          correctIndex: desiredIndex,
          explanation,
        });
      } else {
        // --- 6. Handcrafted ÖSYM Exam Twin (2 per set = 16 per unit) ---
        const archetype: ChemistryArchetype = 'osym-twin';
        const twin = twinAt(twinCounter++);

        const stem = L(twin.stem);
        const authored = twin.options.map((o) => L(o));
        let correctIndex: 0 | 1 | 2 | 3 | 4 = twin.correctIndex;
        let options = authored as [string, string, string, string, string];
        if (twinIsRotatable(twin)) {
          // Rotation is language-independent (decided on the seed), so every language keeps the same key.
          const desired = pickBestKey(qNum, s);
          const shift = (desired - twin.correctIndex + 5) % 5;
          options = [0, 1, 2, 3, 4].map((i) => authored[(i - shift + 5) % 5]) as [string, string, string, string, string];
          correctIndex = desired;
        }
        commitKey(correctIndex);
        const explanation = L(twin.explanation);

        questions.push({
          id: qId,
          unitId: unit.id,
          setNumber: setNum,
          questionNumberInUnit: qNum,
          exam: unit.exam,
          difficulty: 'osym',
          archetype,
          stem,
          options,
          correctIndex,
          explanation,
          ...(twin.figure ? { figure: resolveFigure(twin.figure, lang) } : {}),
        });
      }
    }
  }

  // Enrich with animated diagram figures. The placement is planned on the polished Turkish bank
  // (the same text the audit scripts see) and reused for every language.
  const polished = questions.map((q) => polishQuestion(q, lang));
  let placement: DiagramPlacement | undefined;
  if (lang === 'tr') {
    placement = planDiagramPlacement(unit, polished);
    TR_DIAGRAM_PLACEMENT.set(unit, placement);
  } else {
    if (!TR_DIAGRAM_PLACEMENT.has(unit)) compileUnitQuestions(unit, 'tr');
    placement = TR_DIAGRAM_PLACEMENT.get(unit);
  }
  return enrichQuestionsWithDiagrams(unit, polished, lang, placement);
}

/**
 * Compiles all questions for all units in the specified language (3,072 questions total).
 */
export function compileAllQuestions(
  units: ChemistryUnitSeedData[],
  lang: LanguageCode = 'tr'
): CompiledQuestion[] {
  return units.flatMap((u) => compileUnitQuestions(u, lang));
}