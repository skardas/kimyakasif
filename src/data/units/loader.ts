import type { LanguageCode } from './types';

/**
 * Unit-language loading, development/test flavour: `./index` already holds every language, so
 * there is nothing to load. The production build swaps this module (and `./index`) for
 * `./packed.ts`, which loads one language pack at a time — see packing.ts.
 */
export function hasUnitLanguage(_lang: LanguageCode): boolean {
  return true;
}

export function ensureUnitLanguage(_lang: LanguageCode): Promise<void> {
  return Promise.resolve();
}
