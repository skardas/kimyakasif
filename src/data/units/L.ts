import type { LocalizedText } from '../../types/chemistry';

/**
 * Compact, strictly-typed 8-language LocalizedText builder.
 * Order:
 * 1. tr (Türkçe - Default)
 * 2. en (English)
 * 3. de (Deutsch)
 * 4. fr (Français)
 * 5. ru (Русский)
 * 6. ar (العربية - RTL)
 * 7. zh (中文 - Simplified Chinese)
 * 8. ku (Kurdî - Kurmanji)
 */
export function L(
  tr: string,
  en: string,
  de: string,
  fr: string,
  ru: string,
  ar: string,
  zh: string,
  ku: string
): LocalizedText {
  return { tr, en, de, fr, ru, ar, zh, ku };
}
