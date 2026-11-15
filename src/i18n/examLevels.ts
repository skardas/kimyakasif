import type { LanguageCode } from '../types/chemistry';

/**
 * Display names for the two curriculum levels.
 *
 * Internally the levels are keyed 'TYT' / 'AYT' (Turkish exam names). Those
 * names mean nothing outside Turkey, so every language except Turkish shows a
 * plain level name instead. Turkish keeps TYT / AYT unchanged.
 *
 * - short: chips, tabs, badges, compact counters ("Basic", "الأساسي")
 * - long:  headings and running text where the word "level" helps
 *          ("Basic level", "المستوى الأساسي", «Базовый уровень»)
 */
export type ExamLevel = 'TYT' | 'AYT';
export type ExamLevelForm = 'short' | 'long';

const LEVEL_LABELS: Record<LanguageCode, Record<ExamLevel, Record<ExamLevelForm, string>>> = {
  tr: { TYT: { short: 'TYT', long: 'TYT' }, AYT: { short: 'AYT', long: 'AYT' } },
  en: { TYT: { short: 'Basic', long: 'Basic level' }, AYT: { short: 'Advanced', long: 'Advanced level' } },
  de: { TYT: { short: 'Grundlagen', long: 'Grundlagen' }, AYT: { short: 'Vertiefung', long: 'Vertiefung' } },
  fr: { TYT: { short: 'Bases', long: 'Fondamentaux' }, AYT: { short: 'Approfondi', long: 'Approfondissement' } },
  ru: { TYT: { short: 'Базовый', long: 'Базовый уровень' }, AYT: { short: 'Углублённый', long: 'Углублённый уровень' } },
  ar: { TYT: { short: 'الأساسي', long: 'المستوى الأساسي' }, AYT: { short: 'المتقدم', long: 'المستوى المتقدم' } },
  zh: { TYT: { short: '基础', long: '基础' }, AYT: { short: '进阶', long: '进阶' } },
  ku: { TYT: { short: 'Bingehîn', long: 'Bingehîn' }, AYT: { short: 'Pêşketî', long: 'Pêşketî' } },
};

export const levelLabel = (exam: ExamLevel, lang: LanguageCode, form: ExamLevelForm = 'short'): string =>
  (LEVEL_LABELS[lang] ?? LEVEL_LABELS.tr)[exam][form];

/** "TYT → AYT" style progression label (exam preference "TYT first"); the arrow points left in Arabic (RTL). */
export const levelProgressLabel = (lang: LanguageCode): string =>
  `${levelLabel('TYT', lang)} ${lang === 'ar' ? '←' : '→'} ${levelLabel('AYT', lang)}`;

/** The three exam-preference choices (Settings, new-profile form), keyed by targetTrack. */
export const trackOptions = (lang: LanguageCode): [ 'TYT_ONLY' | 'AYT_FOCUS' | 'TYT_FIRST', string ][] => [
  ['TYT_ONLY', levelLabel('TYT', lang)],
  ['AYT_FOCUS', levelLabel('AYT', lang)],
  ['TYT_FIRST', levelProgressLabel(lang)],
];
