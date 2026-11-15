import type {
  CompiledQuestion,
  LanguageCode,
  ChemistryDifficulty,
  ChemistryArchetype,
} from '../types/chemistry';
import type { ChemistryUnitSeedData } from '../data/units/types';
import { enrichQuestionsWithDiagrams } from './diagramQuestionEnricher';

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
    only1: 'فقط I',
    only2: 'فقط II',
    only3: 'فقط III',
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

const ENTITY_SPECIES_REPLACEMENT: Record<LanguageCode, string> = {
  tr: 'bu kimyasal tür',
  en: 'this chemical species',
  de: 'diese chemische Spezies',
  fr: 'cette espèce chimique',
  ru: 'данная химическая частица',
  ar: 'هذا النوع الكيميائي',
  zh: '该化学微粒',
  ku: 'ev cûreyê kîmyewî',
};

export interface ExplanationTemplates {
  romanTrue: (combo: string) => string;
  romanFalse: (combo: string) => string;
  negativeTrapWhy: (correctOption: string, whyFalse: string, correctFact: string) => string;
  negativeTrapDefault: (correctOption: string, correctFact: string) => string;
  positiveConceptTip: (correctOption: string, tip: string) => string;
  positiveConceptDefault: (correctOption: string) => string;
  structureMatch: (correctOption: string, conceptA: string, conceptB: string, distinction: string) => string;
  reactionOrder: (correctOption: string, seqTitle: string, fullProgression?: string) => string;
}

export const EXPLANATION_TEMPLATES: Record<LanguageCode, ExplanationTemplates> = {
  tr: {
    romanTrue: (combo) => `Doğru cevap ${combo} seçeneğidir. Öncüller incelendiğinde bilimsel gerçeklerle tam uyumlu olanlar doğrulanmıştır.`,
    romanFalse: (combo) => `Doğru cevap ${combo} seçeneğidir. Belirtilen öncüller kimyasal kavram yanılgıları ve hatalı yargılar içermektedir.`,
    negativeTrapWhy: (opt, why, fact) => `Yanlış olan ifade "${opt}" ifadesidir. Bilimsel açıklama: ${why}. Doğrusu: ${fact}`,
    negativeTrapDefault: (opt, fact) => `Yanlış olan ifade "${opt}" ifadesidir. Bu bir ÖSYM kavram tuzağıdır. Bilimsel doğrusu: ${fact}`,
    positiveConceptTip: (opt, tip) => `Kesinlikle doğru olan ifade "${opt}" seçeneğidir. ÖSYM İpucu: ${tip}`,
    positiveConceptDefault: (opt) => `Kesinlikle doğru olan ifade "${opt}" seçeneğidir. Diğer seçenekler yaygın sınav yanılgılarını içermektedir.`,
    structureMatch: (opt, a, b, dist) => `Doğru eşleştirme "${opt}" seçeneğidir. ${a} ve ${b} arasındaki temel kimyasal ayrım: ${dist}`,
    reactionOrder: (opt, title, fullProgression) => fullProgression
      ? `Doğru sıralama veya basamak "${opt}" seçeneğidir. "${title}" sürecinin tam basamakları: ${fullProgression}`
      : `Doğru sıralama veya basamak "${opt}" seçeneğidir. "${title}" sürecinin tüm aşamaları MEB müfredatında belirtilen deneysel ve kimyasal sıraya göre gerçekleşir.`,
  },
  en: {
    romanTrue: (combo) => `The correct answer is ${combo}. An analysis of the propositions confirms those fully aligned with established scientific facts.`,
    romanFalse: (combo) => `The correct answer is ${combo}. The specified propositions contain chemical misconceptions and incorrect assertions.`,
    negativeTrapWhy: (opt, why, fact) => `The incorrect statement is "${opt}". Scientific explanation: ${why}. Correct fact: ${fact}`,
    negativeTrapDefault: (opt, fact) => `The incorrect statement is "${opt}". This is a common exam trap. Scientific fact: ${fact}`,
    positiveConceptTip: (opt, tip) => `The strictly correct statement is "${opt}". Exam Tip: ${tip}`,
    positiveConceptDefault: (opt) => `The strictly correct statement is "${opt}". The other options represent common misconceptions.`,
    structureMatch: (opt, a, b, dist) => `The correct match is "${opt}". Key distinction between ${a} and ${b}: ${dist}`,
    reactionOrder: (opt, title, fullProgression) => fullProgression
      ? `The correct sequence or step is "${opt}". Full steps of "${title}": ${fullProgression}`
      : `The correct sequence or step is "${opt}". All stages of "${title}" follow the curriculum-defined experimental and chemical order.`,
  },
  de: {
    romanTrue: (combo) => `Die richtige Antwort ist ${combo}. Die Überprüfung der Aussagen bestätigt die Übereinstimmung mit gesicherten wissenschaftlichen Fakten.`,
    romanFalse: (combo) => `Die richtige Antwort ist ${combo}. Die genannten Aussagen enthalten typische chemische Fehlvorstellungen.`,
    negativeTrapWhy: (opt, why, fact) => `Die falsche Aussage lautet "${opt}". Wissenschaftliche Erklärung: ${why}. Richtigstellung: ${fact}`,
    negativeTrapDefault: (opt, fact) => `Die falsche Aussage lautet "${opt}". Dies ist eine Prüfungsfalle. Wissenschaftlich korrekt: ${fact}`,
    positiveConceptTip: (opt, tip) => `Die eindeutig zutreffende Aussage ist "${opt}". Prüfungshinweis: ${tip}`,
    positiveConceptDefault: (opt) => `Die eindeutig zutreffende Aussage ist "${opt}". Die übrigen Antwortmöglichkeiten enthalten verbreitete Fehlannahmen.`,
    structureMatch: (opt, a, b, dist) => `Die richtige Zuordnung ist "${opt}". Grundlegende Unterscheidung zwischen ${a} und ${b}: ${dist}`,
    reactionOrder: (opt, title, fullProgression) => fullProgression
      ? `Die richtige Reihenfolge bzw. der korrekte Schritt lautet: "${opt}". Vollständiger Ablauf von "${title}": ${fullProgression}`
      : `Die richtige Reihenfolge bzw. der korrekte Schritt lautet: "${opt}". Der Ablauf von "${title}" folgt der experimentellen chemischen Logik.`,
  },
  fr: {
    romanTrue: (combo) => `La bonne réponse est ${combo}. L'analyse des propositions confirme celles qui sont en parfait accord avec les faits scientifiques.`,
    romanFalse: (combo) => `La bonne réponse est ${combo}. Les propositions indiquées comportent des erreurs conceptuelles en chimie.`,
    negativeTrapWhy: (opt, why, fact) => `L'affirmation incorrecte est "${opt}". Explication scientifique : ${why}. Fait exact : ${fact}`,
    negativeTrapDefault: (opt, fact) => `L'affirmation incorrecte est "${opt}". C'est un piège classique d'examen. Fait scientifique : ${fact}`,
    positiveConceptTip: (opt, tip) => `L'affirmation rigoureusement exacte est "${opt}". Conseil d'examen : ${tip}`,
    positiveConceptDefault: (opt) => `L'affirmation rigoureusement exacte est "${opt}". Les autres options comportent des erreurs fréquentes.`,
    structureMatch: (opt, a, b, dist) => `L'association correcte est "${opt}". Distinction fondamentale entre ${a} et ${b} : ${dist}`,
    reactionOrder: (opt, title, fullProgression) => fullProgression
      ? `L'ordre ou l'étape correcte est : "${opt}". Toutes les étapes du processus "${title}" : ${fullProgression}`
      : `L'ordre ou l'étape correcte est : "${opt}". Toutes les étapes du processus "${title}" suivent la chronologie expérimentale requise.`,
  },
  ru: {
    romanTrue: (combo) => `Правильный ответ — вариант ${combo}. Анализ утверждений подтверждает их полное соответствие установленным научным фактам.`,
    romanFalse: (combo) => `Правильный ответ — вариант ${combo}. Указанные утверждения содержат химические заблуждения и ошибки.`,
    negativeTrapWhy: (opt, why, fact) => `Ошибочным утверждением является «${opt}». Научное объяснение: ${why}. Правильное положение: ${fact}`,
    negativeTrapDefault: (opt, fact) => `Ошибочным утверждением является «${opt}». Это типичная экзаменационная ловушка. Научный факт: ${fact}`,
    positiveConceptTip: (opt, tip) => `Абсолютно верным утверждением является «${opt}». Экзаменационная подсказка: ${tip}`,
    positiveConceptDefault: (opt) => `Абсолютно верным утверждением является «${opt}». Остальные варианты содержат распространенные ошибки.`,
    structureMatch: (opt, a, b, dist) => `Правильное соответствие — «${opt}». Ключевое различие между «${a}» и «${b}»: ${dist}`,
    reactionOrder: (opt, title, fullProgression) => fullProgression
      ? `Правильная последовательность или этап: «${opt}». Полная последовательность процесса «${title}»: ${fullProgression}`
      : `Правильная последовательность или этап: «${opt}». Все стадии процесса «${title}» соответствуют экспериментальному химическому порядку.`,
  },
  ar: {
    romanTrue: (combo) => `الإجابة الصحيحة هي الخيار ${combo}. يؤكد تحليل العبارات توافقها التام مع الحقائق العلمية المثبتة.`,
    romanFalse: (combo) => `الإجابة الصحيحة هي الخيار ${combo}. تتضمن العبارات المذكورة مغالطات مفهومية كيميائية وأحكاماً خاطئة.`,
    negativeTrapWhy: (opt, why, fact) => `العبارة غير الصحيحة هي "${opt}". التفسير العلمي: ${why}. الصواب العلمي: ${fact}`,
    negativeTrapDefault: (opt, fact) => `العبارة غير الصحيحة هي "${opt}". هذا فخ امتحاني شائع. الحقيقة العلمية: ${fact}`,
    positiveConceptTip: (opt, tip) => `العبارة الصحيحة تماماً هي "${opt}". نصيحة امتحانية: ${tip}`,
    positiveConceptDefault: (opt) => `العبارة الصحيحة تماماً هي "${opt}". تحتوي بقية الخيارات على مغالطات شائعة.`,
    structureMatch: (opt, a, b, dist) => `المطابقة الصحيحة هي "${opt}". الفرق الكيميائي الجوهري بين ${a} و ${b}: ${dist}`,
    reactionOrder: (opt, title, fullProgression) => fullProgression
      ? `الترتيب أو الخطوة الصحيحة هي: "${opt}". المسار الكامل لخطوات "${title}": ${fullProgression}`
      : `الترتيب أو الخطوة الصحيحة هي: "${opt}". جميع مراحل مسار "${title}" تتبع الترتيب الكيميائي والتجريبي المعتمد.`,
  },
  zh: {
    romanTrue: (combo) => `正确答案是 ${combo} 选项。对各命题进行辨析，确认其完全符合化学客观事实。`,
    romanFalse: (combo) => `正确答案是 ${combo} 选项。所给命题中包含常见的化学概念误区与错误判断。`,
    negativeTrapWhy: (opt, why, fact) => `不正确的说法是“${opt}”。科学解析：${why}。正确事实：${fact}`,
    negativeTrapDefault: (opt, fact) => `不正确的说法是“${opt}”。这是常见的高考概念陷阱。科学事实：${fact}`,
    positiveConceptTip: (opt, tip) => `完全正确无误的表述是“${opt}”选项。高考解题锦囊：${tip}`,
    positiveConceptDefault: (opt) => `完全正确无误的表述是“${opt}”选项。其余选项均包含典型学科认知偏差。`,
    structureMatch: (opt, a, b, dist) => `正确对应项为“${opt}”。“${a}”与“${b}”之间的核心本质区别为：${dist}`,
    reactionOrder: (opt, title, fullProgression) => fullProgression
      ? `正确顺序或对应步骤是：“${opt}”。“${title}”过程的完整步骤历程为：${fullProgression}`
      : `正确顺序或对应步骤是：“${opt}”。“${title}”过程的全部阶段严格符合考纲规定的实验与反应历程顺序。`,
  },
  ku: {
    romanTrue: (combo) => `Bersiva rast vebijarka ${combo} ye. Dema ku pêşniyar tên lêkolîn, yên ku bi rastiyên zanistî re li hev dikin hatine piştrast kirin.`,
    romanFalse: (combo) => `Bersiva rast vebijarka ${combo} ye. Pêşniyarên diyarkirî têgihîştinên şaş ên kîmyewî û darazên çewt dihewînin.`,
    negativeTrapWhy: (opt, why, fact) => `Gotina şaş "${opt}" e. Şîroveya zanistî: ${why}. Ya rast: ${fact}`,
    negativeTrapDefault: (opt, fact) => `Gotina şaş "${opt}" e. Ev xefikek ezmûnê ya berbelav e. Rastiya zanistî: ${fact}`,
    positiveConceptTip: (opt, tip) => `Gotina ku bi temamî rast e vebijarka "${opt}" e. Serişteya Ezmûnê: ${tip}`,
    positiveConceptDefault: (opt) => `Gotina ku bi temamî rast e vebijarka "${opt}" e. Vebijarkên din şaşiyên berbelav dihewînin.`,
    structureMatch: (opt, a, b, dist) => `Hevberdana rast "${opt}" e. Ciyawaziya sereke ya kîmyewî di navbera ${a} û ${b} de: ${dist}`,
    reactionOrder: (opt, title, fullProgression) => fullProgression
      ? `Rêzkirina an qonaxa rast: "${opt}" e. Hemû qonaxên pêvajoya "${title}": ${fullProgression}`
      : `Rêzkirina an qonaxa rast: "${opt}" e. Hemû qonaxên pêvajoya "${title}" li gorî rêza ezmûnî û kîmyewî pêk tên.`,
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
  zh: ['定律', '原理', '原则', '同素异形体', '反应', '规则', '模型', '假说', '溶液', '电池', '原子', '键', '固体', '效应', '杂交', '常数', '数'],
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
        const regex = new RegExp(`${cjkLookbehind}${cjkPattern}${cjkLookahead}`, 'gu');
        cleaned = cleaned.replace(regex, replacement);
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
          const words = cand.trim().split(/[-\s]+/).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
          candidatePattern = (lang === 'ku' && words.length >= 2)
            ? words.join('(?:ê|a|ya|yê|ên|an)?[-\\s]+')
            : words.join('[-\\s]+');
        }

        const lookbehind = (lang === 'zh') ? '(?<=^|[^a-zA-Z0-9])' : '(?<=^|[^\\p{L}\\p{N}])';
        const lookahead = (lang === 'zh') ? '(?![a-zA-Z0-9])' : '(?![\\p{L}\\p{N}])';
        const arabicPrefix = '';
        const regex = new RegExp(`${lookbehind}${arabicPrefix}${candidatePattern}${suffixPattern}${lookahead}`, 'giu');
        cleaned = cleaned.replace(regex, replacement);
      }
    }
  return normalizeProseOption(cleaned.trim(), lang);
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

// Stems for Roman True / False questions
function getRomanTrueStem(title: string, lang: LanguageCode): string {
  switch (lang) {
    case 'tr': return `"${title}" konusu kapsamında yukarıda verilen kimyasal öncüllerden hangileri bilimsel olarak doğrudur?`;
    case 'en': return `In the context of "${title}", which of the propositions given above are scientifically correct?`;
    case 'de': return `Welche der oben genannten Aussagen zu "${title}" sind wissenschaftlich zutreffend?`;
    case 'fr': return `Dans le cadre de "${title}", lesquelles des propositions ci-dessus sont scientifiquement exactes ?`;
    case 'ru': return `В контексте темы «${title}», какие из вышеприведённых химических утверждений верны?`;
    case 'ar': return `في سياق موضوع "${title}"، أي من العبارات الكيميائية الواردة أعلاه صحيحة علمياً؟`;
    case 'zh': return `在“${title}”主题背景下，上述给出的化学命题中哪些在科学上是正确的？`;
    case 'ku': return `Di çarçoveya mijara "${title}" de, kîjan ji pêşniyarên kîmyewî yên jorîn ji aliyê zanistî ve rast in?`;
  }
}

function getRomanFalseStem(title: string, lang: LanguageCode): string {
  switch (lang) {
    case 'tr': return `"${title}" ünitesi dikkate alındığında, yukarıdaki yargılardan hangileri kavram yanılgısı içerir (yanlıştır)?`;
    case 'en': return `Considering the unit "${title}", which of the propositions above contain misconceptions (are incorrect)?`;
    case 'de': return `Welche der obigen Aussagen zur Einheit "${title}" enthalten Fehlvorstellungen (sind falsch)?`;
    case 'fr': return `En considérant l'unité "${title}", lesquelles des affirmations ci-dessus contiennent des erreurs (sont fausses) ?`;
    case 'ru': return `Учитывая материал раздела «${title}», какие из вышеперечисленных суждений содержат ошибки (неверны)?`;
    case 'ar': return `بالنظر إلى وحدة "${title}"، أي من الأحكام الواردة أعلاه تتضمن مغالطات مفهومية (غير صحيحة)؟`;
    case 'zh': return `结合“${title}”单元核心概念，上述判断中哪些包含概念误区（属于错误命题）？`;
    case 'ku': return `Gava ku beşa "${title}" li ber çavan bê girtin, kîjan ji darazên jorîn şaşiyên têgehî dihewîne (şaş in)?`;
  }
}

function getNegativeTrapStem(title: string, lang: LanguageCode, variant = 0): string {
  const v = variant % 6;
  switch (lang) {
    case 'tr': {
      if (v === 0) return `"${title}" konusu ile ilgili olarak aşağıda verilen ifadelerden hangisi yanlıştır (doğru değildir)?`;
      if (v === 1) return `"${title}" kazanımları dikkate alındığında aşağıdaki yargılardan hangisi bilimsel bir yanılgı içerir?`;
      if (v === 2) return `"${title}" kapsamında ileri sürülen aşağıdaki önermelerden hangisi doğru değildir?`;
      if (v === 3) return `"${title}" ile ilgili kimyasal ilkeler incelendiğinde hangisinin hatalı bir açıklama olduğu görülür?`;
      if (v === 4) return `"${title}" konusuna dair hazırlanan aşağıdaki yargılardan hangisi bilimsel gerçeklerle çelişir?`;
      return `Aşağıdaki ifadelerden hangisi "${title}" konusundaki temel kimya ilkelerine göre hatalıdır?`;
    }
    case 'en': {
      if (v === 0) return `Regarding the topic of "${title}", which of the following statements is incorrect (false)?`;
      if (v === 1) return `Considering "${title}", which of the following assertions contains a scientific misconception?`;
      if (v === 2) return `Which statement proposed under "${title}" is scientifically false?`;
      if (v === 3) return `When examining the principles of "${title}", which statement is flawed?`;
      if (v === 4) return `Which of the following assertions regarding "${title}" contradicts established scientific facts?`;
      return `Which statement is erroneous according to the fundamental principles of "${title}"?`;
    }
    case 'de': {
      if (v === 0) return `Welche der folgenden Aussagen zum Thema "${title}" ist sachlich falsch?`;
      if (v === 1) return `Unter Berücksichtigung von "${title}": Welche Aussage enthält ein wissenschaftliches Missverständnis?`;
      if (v === 2) return `Welche Aussage im Rahmen von "${title}" ist unzutreffend?`;
      if (v === 3) return `Bei der Analyse von "${title}": Welche Behauptung ist fehlerhaft?`;
      if (v === 4) return `Welche der folgenden Darstellungen zu "${title}" widerspricht gesicherten chemischen Fakten?`;
      return `Welche Aussage steht im Widerspruch zu den grundlegenden chemischen Prinzipien von "${title}"?`;
    }
    case 'fr': {
      if (v === 0) return `Concernant le sujet "${title}", laquelle des affirmations suivantes est fausse (incorrecte) ?`;
      if (v === 1) return `Dans le cadre de "${title}", laquelle des assertions suivantes contient une erreur conceptuelle ?`;
      if (v === 2) return `Laquelle des propositions suivantes sur "${title}" n'est pas exacte ?`;
      if (v === 3) return `En examinant les principes de "${title}", quelle affirmation est erronée ?`;
      if (v === 4) return `Laquelle des affirmations suivantes contredit les données scientifiques de "${title}" ?`;
      return `Quelle proposition est incorrecte au regard des lois fondamentales de "${title}" ?`;
    }
    case 'ru': {
      if (v === 0) return `Какое из следующих утверждений относительно темы «${title}» является неверным (ложным)?`;
      if (v === 1) return `С учетом темы «${title}», какое суждение содержит научную ошибку?`;
      if (v === 2) return `Какое из положений по теме «${title}» не соответствует действительности?`;
      if (v === 3) return `При анализе темы «${title}», какое из утверждений является ошибочным?`;
      if (v === 4) return `Какое из приведенных высказываний по теме «${title}» противоречит научным фактам?`;
      return `Какое утверждение ошибочно с точки зрения основных законов химии в теме «${title}»?`;
    }
    case 'ar': {
      if (v === 0) return `فيما يتعلق بموضوع "${title}"، أي من العبارات التالية غير صحيحة (خاطئة)؟`;
      if (v === 1) return `بالنظر إلى "${title}"، أي من الأحكام التالية يتضمن مغالطة علمية؟`;
      if (v === 2) return `أي افتراض مقدم في سياq "${title}" يعتبر غير صحيح؟`;
      if (v === 3) return `عند دراسة مبادئ "${title}"، أي تفسير يعتبر خاطئاً؟`;
      if (v === 4) return `أي من العبارات التالية يتعارض مع الحقائق العلمية المثبتة في "${title}"؟`;
      return `أي عبارة تعتبر خاطئة وفقاً للمبادئ الكيميائية الأساسية لوحدة "${title}"؟`;
    }
    case 'zh': {
      if (v === 0) return `关于“${title}”的化学内容，下列叙述中哪一项是错误的（不符合化学事实）？`;
      if (v === 1) return `结合“${title}”核心考点，下列判断中哪一项包含科学认知误区？`;
      if (v === 2) return `在“${title}”范畴内，下列关于物质性质的陈述哪一项不正确？`;
      if (v === 3) return `分析“${title}”相关化学机理，下列结论中存在错误的是哪一项？`;
      if (v === 4) return `下列关于“${title}”的命题中，与客观化学事实相违背的是？`;
      return `依照“${title}”的基本化学原理，下列哪一说法属于错误陈述？`;
    }
    case 'ku': {
      if (v === 0) return `Derbarê mijara "${title}" de, kîjan ji van gotinên jêrîn şaş e (ne rast e)?`;
      if (v === 1) return `Gava mijara "${title}" bê nirxandin, kîjan ji van darazên jêrîn şaşiyek zanistî dihewîne?`;
      if (v === 2) return `Di çarçoveya "${title}" de, kîjan îdîa ne rast e?`;
      if (v === 3) return `Dema prensîbên "${title}" tên lêkolîn, kîjan gotin şaş e?`;
      if (v === 4) return `Kîjan ji gotinên jêrîn bi rastiyên zanistî yên "${title}" re nakok e?`;
      return `Li gorî prensîbên bingehîn ên kîmyayê di "${title}" de, kîjan daraz çewt e?`;
    }
  }
}

function getPositiveConceptStem(title: string, lang: LanguageCode, variant = 0): string {
  const v = variant % 6;
  switch (lang) {
    case 'tr': {
      if (v === 0) return `"${title}" ünitesindeki temel kimyasal ilkeler doğrultusunda, aşağıdaki ifadelerden hangisi kesinlikle doğrudur?`;
      if (v === 1) return `"${title}" konusu incelendiğinde aşağıdaki yargılardan hangisinin bilimsel bir gerçek olduğu görülür?`;
      if (v === 2) return `"${title}" kazanımları çerçevesinde verilen aşağıdaki açıklamalardan hangisi tam olarak doğrudur?`;
      if (v === 3) return `Kimyasal yasalar doğrultusunda "${title}" ile ilgili ileri sürülen hangi ifade kesin olarak doğrudur?`;
      if (v === 4) return `"${title}" konusunda bilimsel olarak kanıtlanmış doğru ifade aşağıdakilerden hangisidir?`;
      return `Aşağıdaki seçeneklerden hangisi "${title}" ünitesinin temel kurallarına göre eksiksiz ve doğrudur?`;
    }
    case 'en': {
      if (v === 0) return `In accordance with the fundamental chemical principles of "${title}", which of the following statements is strictly correct?`;
      if (v === 1) return `When studying "${title}", which of the following statements represents an established scientific fact?`;
      if (v === 2) return `Within the scope of "${title}", which explanation is completely accurate?`;
      if (v === 3) return `According to chemical laws, which assertion regarding "${title}" is unambiguously true?`;
      if (v === 4) return `Which of the following represents an indisputable scientific truth regarding "${title}"?`;
      return `Which statement is entirely accurate according to the core principles of "${title}"?`;
    }
    case 'de': {
      if (v === 0) return `Welche der folgenden Aussagen zu "${title}" ist nach den chemischen Grundprinzipien uneingeschränkt zutreffend?`;
      if (v === 1) return `Welche der folgenden Feststellungen zu "${title}" entspricht einer wissenschaftlichen Tatsache?`;
      if (v === 2) return `Welche Erklärung im Rahmen von "${title}" ist vollkommen korrekt?`;
      if (v === 3) return `Welche Behauptung bezüglich "${title}" ist gemäß den chemischen Gesetzen zweifelsfrei richtig?`;
      if (v === 4) return `Welche der folgenden Aussagen stellt eine gesicherte wissenschaftliche Erkenntnis zu "${title}" dar?`;
      return `Welche Option ist im Hinblick auf "${title}" sachlich vollkommen richtig?`;
    }
    case 'fr': {
      if (v === 0) return `Conformément aux principes chimiques fondamentaux de "${title}", laquelle des affirmations suivantes est rigoureusement exacte ?`;
      if (v === 1) return `En étudiant "${title}", laquelle des propositions suivantes constitue un fait scientifique avéré ?`;
      if (v === 2) return `Dans le cadre de "${title}", quelle explication est parfaitement correcte ?`;
      if (v === 3) return `Selon les lois de la chimie, quelle affirmation concernant "${title}" est indubitablement vraie ?`;
      if (v === 4) return `Laquelle des propositions suivantes exprime une vérité scientifique établie sur "${title}" ?`;
      return `Quelle affirmation est parfaitement exacte au regard des lois de "${title}" ?`;
    }
    case 'ru': {
      if (v === 0) return `В соответствии с фундаментальными принципами темы «${title}», какое из следующих утверждений абсолютно верно?`;
      if (v === 1) return `При изучении темы «${title}», какое из суждений представляет собой установленный научный факт?`;
      if (v === 2) return `В рамках темы «${title}», какое объяснение является безупречно правильным?`;
      if (v === 3) return `Какое утверждение о теме «${title}» является несомненно истинным?`;
      if (v === 4) return `Какое из следующих положений темы «${title}» научно доказано и абсолютно точно?`;
      return `Какое из суждений полностью соответствует базовым химическим принципам темы «${title}»?`;
    }
    case 'ar': {
      if (v === 0) return `وفقاً للمبادئ الكيميائية الأساسية لوحدة "${title}"، أي من العبارات التالية صحيحة تماماً؟`;
      if (v === 1) return `عند دراسة "${title}"، أي من الأحكام التالية يمثل حقيقة علمية مثبتة؟`;
      if (v === 2) return `في سياق وحدة "${title}"، أي من التفسيرات التالية دقيق تماماً؟`;
      if (v === 3) return `بناءً على القوانين الكيميائية، أي عبارة متعلقة بـ "${title}" صحيحة بلا شك؟`;
      if (v === 4) return `أي من العبارات التالية يمثل حقيقة علمية مؤكدة حول موضوع "${title}"؟`;
      return `أي من الخيارات التالية دقيق وصحيح تماماً وفقاً لقواعد "${title}"؟`;
    }
    case 'zh': {
      if (v === 0) return `根据“${title}”单元的核心化学规律与基本原理，下列叙述中哪一项是完全正确的？`;
      if (v === 1) return `在探究“${title}”的过程中，下列哪项判断属于被科学实验证实的客观事实？`;
      if (v === 2) return `在“${title}”考点要求内，下列哪项阐述完全准确无误？`;
      if (v === 3) return `遵循化学基本规律，关于“${title}”的下列说法中确凿无误的是？`;
      if (v === 4) return `关于“${title}”的下列判断中，属于被充分证实的科学真理的是？`;
      return `下列哪个选项完全符合“${title}”单元的基础化学公理与规律？`;
    }
    case 'ku': {
      if (v === 0) return `Li gorî prensîbên bingehîn ên kîmyayê di beşa "${title}" de, kîjan ji van gotinan bê guman rast e?`;
      if (v === 1) return `Dema ku beşa "${title}" tê lêkolîn, kîjan ji van gotinên jêrîn rastiyek zanistî ye?`;
      if (v === 2) return `Di çarçoveya zanistiya "${title}" de, kîjan şîrove bi temamî rast e?`;
      if (v === 3) return `Li gorî zagonên kîmyewî, kîjan îfadeya li ser "${title}" bê şik rast e?`;
      if (v === 4) return `Kîjan ji vebijarkên jêrîn rastiyeke zanistî ya piştrastkirî li ser "${title}" nîşan dide?`;
      return `Kîjan îfade li gorî prensîbên bingehîn ên "${title}" bi tevahî bê kêmasî û rast e?`;
    }
  }
}

function getMatchStemA(title: string, clue: string, lang: LanguageCode): string {
  switch (lang) {
    case 'tr': return `"${title}" konusunda "${clue}" özelliği ile ayırt edilen kimyasal tür veya kavram aşağıdakilerden hangisidir?`;
    case 'en': return `In "${title}", which chemical species or concept is defined by the distinguishing trait: "${clue}"?`;
    case 'de': return `Welche chemische Spezies oder welches Konzept wird in "${title}" durch das Merkmal "${clue}" charakterisiert?`;
    case 'fr': return `Dans "${title}", quelle espèce chimique ou notion est définie par le trait distinctif : "${clue}" ?`;
    case 'ru': return `Какое химическое вещество или понятие в теме «${title}» характеризуется признаком: «${clue}»?`;
    case 'ar': return `في موضوع "${title}"، أي نوع كيميائي أو مفهوم يتميز بالخاصية: "${clue}"؟`;
    case 'zh': return `在“${title}”体系中，以下哪种化学微粒或概念具有显著特征：“${clue}”？`;
    case 'ku': return `Di mijara "${title}" de, kîjan cûreyê kîmyewî an têgeh bi taybetmendiya "${clue}" tê veqetandin?`;
  }
}

function getMatchStemB(title: string, conceptName: string, lang: LanguageCode): string {
  switch (lang) {
    case 'tr': return `"${title}" kapsamında incelenen "${conceptName}" ile ilgili aşağıdaki niteliklerden hangisi doğrudur?`;
    case 'en': return `Which of the following characteristics accurately describes "${conceptName}" within "${title}"?`;
    case 'de': return `Welche der folgenden Eigenschaften beschreibt "${conceptName}" im Rahmen von "${title}" zutreffend?`;
    case 'fr': return `Laquelle des caractéristiques suivantes décrit correctement "${conceptName}" dans le cadre de "${title}" ?`;
    case 'ru': return `Какая из следующих характеристик верно описывает «${conceptName}» в контексте «${title}»?`;
    case 'ar': return `أي من الخصائص التالية تصف بدقة "${conceptName}" ضمن دراسة "${title}"؟`;
    case 'zh': return `在“${title}”研究范畴内，下列关于“${conceptName}”的属性特征描述正确的是？`;
    case 'ku': return `Derbarê "${conceptName}" ya ku di çarçoveya "${title}" de tê lêkolînkirin de kîjan taybetmendî rast e?`;
  }
}

function getSequenceOrderStem(title: string, seqTitle: string, lang: LanguageCode): string {
  switch (lang) {
    case 'tr': return `"${title}" ünitesinde ele alınan "${seqTitle}" basamaklarının mantıksal ve kronolojik sırası aşağıdakilerden hangisinde doğru verilmiştir?`;
    case 'en': return `In the unit "${title}", which option gives the correct logical and chronological order of the steps for "${seqTitle}"?`;
    case 'de': return `Welche Option gibt die korrekte Reihenfolge der Schritte für "${seqTitle}" in "${title}" wieder?`;
    case 'fr': return `Quelle option présente l'ordre logique et chronologique correct des étapes pour "${seqTitle}" dans "${title}" ?`;
    case 'ru': return `В каком из вариантов указана правильная последовательность этапов процесса «${seqTitle}» в теме «${title}»?`;
    case 'ar': return `أي الخيارات يعبر عن الترتيب المنطقي والزمني الصحيح لخطوات "${seqTitle}" في وحدة "${title}"؟`;
    case 'zh': return `在“${title}”单元中，下列哪个选项正确给出了“${seqTitle}”各阶段步骤的逻辑发生顺序？`;
    case 'ku': return `Rêza mantiqî û kronolojîk a qonaxên "${seqTitle}" di beşa "${title}" de di kîjan vebijarkê de rast hatiye dayîn?`;
  }
}

function getSequenceMissingStepStem(title: string, seqTitle: string, lang: LanguageCode): string {
  switch (lang) {
    case 'tr': return `"${title}" kapsamında gerçekleşen "${seqTitle}" sürecinde [ ? ] ile belirtilen eksik basamak aşağıdakilerden hangisidir?`;
    case 'en': return `In the process "${seqTitle}" under "${title}", which option represents the missing step denoted by [ ? ]?`;
    case 'de': return `Welcher Schritt gehört an die mit [ ? ] markierte Stelle im Ablauf von "${seqTitle}" in "${title}"?`;
    case 'fr': return `Dans le processus "${seqTitle}" de "${title}", quelle est l'étape manquante indiquée par [ ? ] ?`;
    case 'ru': return `Какой этап соответствует пропуску [ ? ] в схеме процесса «${seqTitle}» темы «${title}»?`;
    case 'ar': return `في سياق مسار "${seqTitle}" ضمن "${title}"، ما هي الخطوة المفقودة المشار إليها بالرمز [ ؟ ]؟`;
    case 'zh': return `在“${title}”的“${seqTitle}”反应历程体系中，用 [ ? ] 标识出的缺失阶段步骤应当是？`;
    case 'ku': return `Di pêvajoya "${seqTitle}" ya di nav "${title}" de, qonaxa kêm a ku bi [ ? ] hatiye nîşankirin kîjan e?`;
  }
}

interface PropositionDetail {
  numeral: 'I' | 'II' | 'III';
  isValid: boolean;
  fact: string;
  whyTrap?: string;
  tip?: string;
}

function getRomanSynthesis(combo: string, askTrue: boolean, lang: LanguageCode): string {
  const t = EXPLANATION_TEMPLATES[lang] || EXPLANATION_TEMPLATES.tr;
  return askTrue ? t.romanTrue(combo) : t.romanFalse(combo);
}

function buildRomanEvaluationExplanation(
  combo: string,
  askTrue: boolean,
  props: [PropositionDetail, PropositionDetail, PropositionDetail],
  lang: LanguageCode
): string {
  const evalParts = props.map((p) => {
    switch (lang) {
      case 'tr':
        return p.isValid
          ? `${p.numeral}. Doğrudur: ${p.fact}${p.tip ? ` (ÖSYM Notu: ${p.tip})` : ''}.`
          : `${p.numeral}. Yanlıştır: ${p.whyTrap ? `${p.whyTrap} ` : ''}(Doğrusu: ${p.fact}).`;
      case 'en':
        return p.isValid
          ? `${p.numeral}. Correct: ${p.fact}${p.tip ? ` (Exam Note: ${p.tip})` : ''}.`
          : `${p.numeral}. Incorrect: ${p.whyTrap ? `${p.whyTrap} ` : ''}(Scientific fact: ${p.fact}).`;
      case 'de':
        return p.isValid
          ? `${p.numeral}. Richtig: ${p.fact}${p.tip ? ` (Prüfungshinweis: ${p.tip})` : ''}.`
          : `${p.numeral}. Falsch: ${p.whyTrap ? `${p.whyTrap} ` : ''}(Wissenschaftlich korrekt: ${p.fact}).`;
      case 'fr':
        return p.isValid
          ? `${p.numeral}. Exact : ${p.fact}${p.tip ? ` (Conseil : ${p.tip})` : ''}.`
          : `${p.numeral}. Faux : ${p.whyTrap ? `${p.whyTrap} ` : ''}(Fait exact : ${p.fact}).`;
      case 'ru':
        return p.isValid
          ? `${p.numeral}. Верно: ${p.fact}${p.tip ? ` (Подсказка: ${p.tip})` : ''}.`
          : `${p.numeral}. Неверно: ${p.whyTrap ? `${p.whyTrap} ` : ''}(Правильное положение: ${p.fact}).`;
      case 'ar':
        return p.isValid
          ? `${p.numeral}. صحيح: ${p.fact}${p.tip ? ` (ملاحظة: ${p.tip})` : ''}.`
          : `${p.numeral}. خاطئ: ${p.whyTrap ? `${p.whyTrap} ` : ''}(الصواب العلمي: ${p.fact}).`;
      case 'zh':
        return p.isValid
          ? `${p.numeral}. 正确：${p.fact}${p.tip ? `（解题要点：${p.tip}）` : ''}。`
          : `${p.numeral}. 错误：${p.whyTrap ? `${p.whyTrap} ` : ''}（客观事实：${p.fact}）。`;
      case 'ku':
        return p.isValid
          ? `${p.numeral}. Rast e: ${p.fact}${p.tip ? ` (Nîşe: ${p.tip})` : ''}.`
          : `${p.numeral}. Şaş e: ${p.whyTrap ? `${p.whyTrap} ` : ''}(Ya rast: ${p.fact}).`;
    }
  });

  const synthesis = getRomanSynthesis(combo, askTrue, lang);
  return `${evalParts.join(' ')} ${synthesis}`;
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

  // Key tracking to achieve exact [25, 26, 26, 25, 26] distribution across A, B, C, D, E
  const keyCounts = [0, 0, 0, 0, 0];

  function pickBestKey(qNum: number, setNum: number): 0 | 1 | 2 | 3 | 4 {
    const minVal = Math.min(...keyCounts);
    const candidates: number[] = [];
    for (let k = 0; k < 5; k++) {
      if (keyCounts[k] === minVal) candidates.push(k);
    }
    const rot = (qNum * 2 + setNum * 3 + unit.order) % candidates.length;
    return candidates[rot] as 0 | 1 | 2 | 3 | 4;
  }

  // Pre-authored Roman numeral combinations roster (32 unique patterns)
  const ROMAN_TARGETS: Array<{
    t1: boolean;
    t2: boolean;
    t3: boolean;
    askTrue: boolean;
    ansIdx: 0 | 1 | 2 | 3 | 4;
    correctCombo: string;
    options: [string, string, string, string, string];
  }> = [];

  for (let r = 0; r < 32; r++) {
    const askTrue = r < 24; // sets 1-6 ask True, sets 7-8 ask False
    const pattern = r % 8;
    let t1 = true;
    let t2 = true;
    let t3 = true;
    let ansIdx: 0 | 1 | 2 | 3 | 4 = 4;
    let correctCombo = romanCombos.all;

    if (pattern === 0) {
      t1 = askTrue; t2 = !askTrue; t3 = !askTrue;
      ansIdx = 0; correctCombo = romanCombos.only1;
    } else if (pattern === 1) {
      t1 = !askTrue; t2 = askTrue; t3 = !askTrue;
      ansIdx = 1; correctCombo = romanCombos.only2;
    } else if (pattern === 2) {
      t1 = !askTrue; t2 = !askTrue; t3 = askTrue;
      ansIdx = 2; correctCombo = romanCombos.only3;
    } else if (pattern === 3) {
      t1 = askTrue; t2 = askTrue; t3 = !askTrue;
      ansIdx = 2; correctCombo = romanCombos.oneTwo;
    } else if (pattern === 4) {
      t1 = askTrue; t2 = !askTrue; t3 = askTrue;
      ansIdx = 3; correctCombo = romanCombos.oneThree;
    } else if (pattern === 5) {
      t1 = !askTrue; t2 = askTrue; t3 = askTrue;
      ansIdx = 3; correctCombo = romanCombos.twoThree;
    } else if (pattern === 6) {
      t1 = askTrue; t2 = askTrue; t3 = askTrue;
      ansIdx = 4; correctCombo = romanCombos.all;
    } else {
      t1 = !askTrue; t2 = askTrue; t3 = !askTrue;
      ansIdx = 1; correctCombo = romanCombos.only2;
    }

    const optTemplates = [
      romanCombos.only1,
      romanCombos.only2,
      romanCombos.oneTwo,
      romanCombos.oneThree,
      romanCombos.all,
    ];
    if (correctCombo === romanCombos.only3) optTemplates[2] = romanCombos.only3;
    if (correctCombo === romanCombos.twoThree) optTemplates[3] = romanCombos.twoThree;

    const curIdx = optTemplates.indexOf(correctCombo);
    if (curIdx !== -1 && curIdx !== ansIdx) {
      const temp = optTemplates[ansIdx];
      optTemplates[ansIdx] = optTemplates[curIdx];
      optTemplates[curIdx] = temp;
    }

    ROMAN_TARGETS.push({
      t1,
      t2,
      t3,
      askTrue,
      ansIdx,
      correctCombo,
      options: [optTemplates[0], optTemplates[1], optTemplates[2], optTemplates[3], optTemplates[4]],
    });
  }

  // 8 Sets of 16 Questions = 128 Questions
  let romanCounter = 0;
  let trapCounter = 0;
  let posCounter = 0;
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

    for (let qInSet = 1; qInSet <= QUESTIONS_PER_SET; qInSet++) {
      const qNum = (s - 1) * QUESTIONS_PER_SET + qInSet;
      const qId = `${unit.id}-q${String(qNum).padStart(3, '0')}`;

      if (qInSet <= 4) {
        // --- 1. Roman Numeral (4 per set = 32 per unit) ---
        const archetype: ChemistryArchetype = 'roman-numeral';
        const rConfig = ROMAN_TARGETS[romanCounter++];
        const fCount = unit.facts.length;

        const i1 = (qInSet * 3 + (setNum - 1) * 7 + unit.order) % fCount;
        const i2 = (qInSet * 3 + (setNum - 1) * 7 + unit.order + 5) % fCount;
        const i3 = (qInSet * 3 + (setNum - 1) * 7 + unit.order + 11) % fCount;

        const f1 = unit.facts[i1];
        const f2 = unit.facts[i2];
        const f3 = unit.facts[i3];

        const stmt1 = rConfig.t1 ? f1.fact[lang] || f1.fact.tr : f1.trap[lang] || f1.trap.tr;
        const stmt2 = rConfig.t2 ? f2.fact[lang] || f2.fact.tr : f2.trap[lang] || f2.trap.tr;
        const stmt3 = rConfig.t3 ? f3.fact[lang] || f3.fact.tr : f3.trap[lang] || f3.trap.tr;

        const stemQuestion = rConfig.askTrue
          ? getRomanTrueStem(unitTitle, lang)
          : getRomanFalseStem(unitTitle, lang);

        const stem = `${unitTitle}:\nI. ${stmt1}\nII. ${stmt2}\nIII. ${stmt3}\n\n${stemQuestion}`;
        const correctIndex = rConfig.ansIdx;
        keyCounts[correctIndex]++;

        const explanation = buildRomanEvaluationExplanation(
          rConfig.correctCombo,
          rConfig.askTrue,
          [
            {
              numeral: 'I',
              isValid: rConfig.t1,
              fact: f1.fact[lang] || f1.fact.tr,
              whyTrap: f1.whyTrapIsFalse?.[lang] || f1.whyTrapIsFalse?.tr,
              tip: f1.osymTip?.[lang] || f1.osymTip?.tr,
            },
            {
              numeral: 'II',
              isValid: rConfig.t2,
              fact: f2.fact[lang] || f2.fact.tr,
              whyTrap: f2.whyTrapIsFalse?.[lang] || f2.whyTrapIsFalse?.tr,
              tip: f2.osymTip?.[lang] || f2.osymTip?.tr,
            },
            {
              numeral: 'III',
              isValid: rConfig.t3,
              fact: f3.fact[lang] || f3.fact.tr,
              whyTrap: f3.whyTrapIsFalse?.[lang] || f3.whyTrapIsFalse?.tr,
              tip: f3.osymTip?.[lang] || f3.osymTip?.tr,
            },
          ],
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
          options: rConfig.options,
          correctIndex,
          explanation,
        });
      } else if (qInSet <= 7) {
        // --- 2. Negative Trap (3 per set = 24 per unit) ---
        const archetype: ChemistryArchetype = 'negative-trap';
        const fCount = unit.facts.length;
        const targetFactIdx = trapCounter++ % fCount;
        const targetPair = unit.facts[targetFactIdx];

        const correctOption = normalizeProseOption(targetPair.trap[lang] || targetPair.trap.tr, lang);

        const stride = setNum % 2 === 1 ? 3 : 5;
        const distractors: string[] = [];
        for (let d = 1; d <= 4; d++) {
          const dPair = unit.facts[(targetFactIdx + d * stride) % fCount];
          distractors.push(normalizeProseOption(dPair.fact[lang] || dPair.fact.tr, lang));
        }

        const desiredIndex = pickBestKey(qNum, s);
        keyCounts[desiredIndex]++;
        const options = rotateOptions(correctOption, distractors, desiredIndex);
        const stemVariant = (setNum - 1) * 3 + (qInSet - 5);
        const stem = getNegativeTrapStem(unitTitle, lang, stemVariant);

        const whyFalse = targetPair.whyTrapIsFalse?.[lang] || targetPair.whyTrapIsFalse?.tr;
        const correctFact = targetPair.fact[lang] || targetPair.fact.tr;
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
        const fCount = unit.facts.length;
        const targetFactIdx = posCounter++ % fCount;
        const targetPair = unit.facts[targetFactIdx];

        const correctOption = normalizeProseOption(targetPair.fact[lang] || targetPair.fact.tr, lang);

        const stride = setNum % 2 === 1 ? 3 : 5;
        const distractors: string[] = [];
        for (let d = 1; d <= 4; d++) {
          const dPair = unit.facts[(targetFactIdx + d * stride) % fCount];
          distractors.push(normalizeProseOption(dPair.trap[lang] || dPair.trap.tr, lang));
        }

        const desiredIndex = pickBestKey(qNum, s);
        keyCounts[desiredIndex]++;
        const options = rotateOptions(correctOption, distractors, desiredIndex);
        const stemVariant = (setNum - 1) * 3 + (qInSet - 8);
        const stem = getPositiveConceptStem(unitTitle, lang, stemVariant);

        const tip = targetPair.osymTip?.[lang] || targetPair.osymTip?.tr;
        const explanation = tip
          ? explTemplates.positiveConceptTip(correctOption, tip)
          : explTemplates.positiveConceptDefault(correctOption);

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
        const cCount = unit.comparisons.length;
        const isTypeA = (qInSet === 11);
        const cIdx = isTypeA
          ? ((setNum - 1) % cCount)
          : ((setNum - 1 + Math.floor(cCount / 2)) % cCount);
        const comp = unit.comparisons[cIdx];

        let correctOption = '';
        const distractors: string[] = [];
        let stem = '';

        if (isTypeA) {
          // Given distinction trait -> identify Concept A
          const rawClue = comp.distinction[lang] || comp.distinction.tr;
          const conceptAName = comp.conceptA[lang] || comp.conceptA.tr;
          const sanitizedClue = sanitizeEntityClue(rawClue, conceptAName, lang);
          const matchTitle = sanitizeUnitTitleForStem(unitTitle, conceptAName, lang);
          stem = getMatchStemA(matchTitle, sanitizedClue, lang);
          correctOption = normalizeEntityOption(conceptAName);

          // Collect all unique concept names across unit comparisons, excluding correctOption and near-duplicates
          const allUnitConcepts: string[] = [];
          const seenKeys = new Set<string>();
          seenKeys.add(canonicalOptionKey(correctOption));
          for (let i = 0; i < cCount; i++) {
            const c = unit.comparisons[(cIdx + 1 + i) % cCount];
            for (const item of [c.conceptB, c.conceptA]) {
              const name = normalizeEntityOption(item[lang] || item.tr);
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
        } else {
          // Given Concept B in stem -> identify its distinction property
          const conceptBName = comp.conceptB[lang] || comp.conceptB.tr;
          stem = getMatchStemB(unitTitle, conceptBName, lang);
          correctOption = normalizeProseOption(comp.distinction[lang] || comp.distinction.tr, lang);

          // Collect all unique distinctions across unit comparisons, excluding correctOption
          const allUnitDistinctions: string[] = [];
          const seenDists = new Set<string>();
          for (let i = 0; i < cCount; i++) {
            const c = unit.comparisons[(cIdx + 1 + i) % cCount];
            const dist = normalizeProseOption(c.distinction[lang] || c.distinction.tr, lang);
            if (dist !== correctOption && !seenDists.has(dist)) {
              seenDists.add(dist);
              allUnitDistinctions.push(dist);
            }
          }
          // Supplementary facts from unit.facts if fewer than 4 unique distinctions
          if (allUnitDistinctions.length < 4) {
            for (const f of unit.facts) {
              const text = normalizeProseOption(f.fact[lang] || f.fact.tr, lang);
              if (text !== correctOption && !seenDists.has(text)) {
                seenDists.add(text);
                allUnitDistinctions.push(text);
              }
            }
          }
          for (let d = 0; d < 4; d++) {
            const pickIdx = ((setNum - 1) * 2 + d) % allUnitDistinctions.length;
            distractors.push(allUnitDistinctions[pickIdx]);
          }
        }

        const desiredIndex = pickBestKey(qNum, s);
        keyCounts[desiredIndex]++;
        const options = rotateOptions(correctOption, distractors, desiredIndex);
        const conceptAStr = comp.conceptA[lang] || comp.conceptA.tr;
        const conceptBStr = comp.conceptB[lang] || comp.conceptB.tr;
        const distinctionStr = comp.distinction[lang] || comp.distinction.tr;
        const explanation = explTemplates.structureMatch(correctOption, conceptAStr, conceptBStr, distinctionStr);

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
        const seqTitle = seq.title[lang] || seq.title.tr;

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

        if (isTypeA && seq.steps.length >= 4) {
          const pat = SCRAMBLE_PATTERNS[(setNum - 1) % SCRAMBLE_PATTERNS.length];
          const st1 = seq.steps[pat.order[0]][lang] || seq.steps[pat.order[0]].tr;
          const st2 = seq.steps[pat.order[1]][lang] || seq.steps[pat.order[1]].tr;
          const st3 = seq.steps[pat.order[2]][lang] || seq.steps[pat.order[2]].tr;
          const st4 = seq.steps[pat.order[3]][lang] || seq.steps[pat.order[3]].tr;

          stem = `${getSequenceOrderStem(unitTitle, seqTitle, lang)}\n\nI. ${st1}\nII. ${st2}\nIII. ${st3}\nIV. ${st4}`;
          correctOption = pat.correct;
          distractors.push(...pat.dists);
        } else {
          // Missing step [ ? ]
          const stepIdx = (setNum - 1) % (seq.steps.length || 4);
          const safeIdx = Math.min(stepIdx, seq.steps.length - 1);
          const missingStep = seq.steps[safeIdx][lang] || seq.steps[safeIdx].tr;

          const stepsView = seq.steps.map((st, i) => {
            const text = (i === safeIdx) ? '[ ? ]' : (st[lang] || st.tr);
            return `${i + 1}. ${text}`;
          }).join('\n');

          stem = `${getSequenceMissingStepStem(unitTitle, seqTitle, lang)}\n\n${stepsView}`;
          correctOption = normalizeProseOption(missingStep, lang);

          // Build a robust, deduplicated candidate pool of steps from other sequences first
          const allStepCandidates: string[] = [];
          const seenSteps = new Set<string>();

          for (let i = 1; i < sCount; i++) {
            const otherSeq = unit.sequences[(seqIdx + i) % sCount];
            for (const st of otherSeq.steps) {
              const text = normalizeProseOption(st[lang] || st.tr, lang);
              if (text !== correctOption && !seenSteps.has(text)) {
                seenSteps.add(text);
                allStepCandidates.push(text);
              }
            }
          }
          // If needed, steps from the current sequence (excluding missingStep)
          for (const st of seq.steps) {
            const text = normalizeProseOption(st[lang] || st.tr, lang);
            if (text !== correctOption && !seenSteps.has(text)) {
              seenSteps.add(text);
              allStepCandidates.push(text);
            }
          }
          // Supplementary action facts if still needed
          if (allStepCandidates.length < 4) {
            for (const f of unit.facts) {
              const text = normalizeProseOption(f.fact[lang] || f.fact.tr, lang);
              if (text !== correctOption && !seenSteps.has(text)) {
                seenSteps.add(text);
                allStepCandidates.push(text);
              }
            }
          }

          for (let d = 0; d < 4; d++) {
            const pickIdx = ((setNum - 1) * 2 + d) % allStepCandidates.length;
            distractors.push(allStepCandidates[pickIdx]);
          }
        }

        const desiredIndex = pickBestKey(qNum, s);
        keyCounts[desiredIndex]++;
        const options = rotateOptions(correctOption, distractors, desiredIndex);
        const fullProgression = seq.steps
          .map((st, i) => `${i + 1}. ${st[lang] || st.tr}`)
          .join(' → ');
        const explanation = explTemplates.reactionOrder(correctOption, seqTitle, fullProgression);

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
        const twinIdx = twinCounter++ % unit.osymTwins.length;
        const twin = unit.osymTwins[twinIdx];

        const stem = twin.stem[lang] || twin.stem.tr;
        const options: [string, string, string, string, string] = [
          twin.options[0][lang] || twin.options[0].tr,
          twin.options[1][lang] || twin.options[1].tr,
          twin.options[2][lang] || twin.options[2].tr,
          twin.options[3][lang] || twin.options[3].tr,
          twin.options[4][lang] || twin.options[4].tr,
        ];
        const correctIndex = twin.correctIndex;
        keyCounts[correctIndex]++;
        const explanation = twin.explanation[lang] || twin.explanation.tr;

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
        });
      }
    }
  }

  // Enrich with animated diagram figures
  return enrichQuestionsWithDiagrams(unit, questions, lang);
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