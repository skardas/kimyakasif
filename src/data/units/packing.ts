/**
 * Per-language unit packs.
 *
 * The 24 unit files carry every text in all eight languages, about 5 MB of JavaScript that a
 * learner reading one language never needs. The production build (see `unitLanguagePacks` in
 * vite.config.ts) splits them into
 *   - a base pack: the full unit data in which every LocalizedText keeps only `tr`, the fallback
 *     every reader uses, and
 *   - one string list per other language: that language's text of each LocalizedText, in the
 *     order forEachLocalizedText() visits them.
 * The app loads the base pack plus the active language at launch and applies further languages
 * to the same objects when the language is changed, so anything holding a reference to unit data
 * sees the new language too.
 *
 * Pure functions only: this module runs in the Vite build (Node) and in the app.
 */

export const UNIT_PACK_LANGS = ['tr', 'en', 'de', 'fr', 'ru', 'ar', 'zh', 'ku'] as const;
export type UnitPackLang = (typeof UNIT_PACK_LANGS)[number];

const LANG_SET: ReadonlySet<string> = new Set(UNIT_PACK_LANGS);

/** A `{ tr, en, … }` object: has `tr` and no key that is not a language code. */
export function isLocalizedText(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const keys = Object.keys(value);
  return keys.length > 0 && keys.includes('tr') && keys.every((k) => LANG_SET.has(k));
}

/**
 * Twin-question explanations also keep English: questionGenerator's twinIsRotatable() checks the
 * Turkish and the English worked solution for option-letter references.
 */
function keepsEnglish(path: readonly string[]): boolean {
  return path[path.length - 1] === 'explanation' && path.includes('osymTwins');
}

/** Deep copy of `node` in which every LocalizedText keeps only `tr` (plus English where kept). */
export function buildBasePack(node: unknown, path: readonly string[] = []): unknown {
  if (Array.isArray(node)) return node.map((item, i) => buildBasePack(item, [...path, String(i)]));
  if (!node || typeof node !== 'object') return node;
  if (isLocalizedText(node)) {
    const out: Record<string, unknown> = { tr: node.tr };
    if (keepsEnglish(path) && node.en !== undefined) out.en = node.en;
    return out;
  }
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(node)) out[key] = buildBasePack(value, [...path, key]);
  return out;
}

/** Visits every LocalizedText in document order; the base pack and the full data visit alike. */
export function forEachLocalizedText(node: unknown, visit: (text: Record<string, unknown>) => void): void {
  if (Array.isArray(node)) {
    for (const item of node) forEachLocalizedText(item, visit);
    return;
  }
  if (!node || typeof node !== 'object') return;
  if (isLocalizedText(node)) {
    visit(node);
    return;
  }
  for (const value of Object.values(node)) forEachLocalizedText(value, visit);
}

/** `lang`'s text of every LocalizedText (null where it has none). */
export function buildLanguageStrings(units: unknown, lang: UnitPackLang): unknown[] {
  const out: unknown[] = [];
  forEachLocalizedText(units, (text) => out.push(text[lang] ?? null));
  return out;
}

/**
 * Writes a language's string list into the loaded base data, in place. Throws, leaving the data
 * untouched, when the list does not belong to this data.
 */
export function applyLanguageStrings(units: unknown, lang: UnitPackLang, strings: readonly unknown[]): void {
  const targets: Array<Record<string, unknown>> = [];
  forEachLocalizedText(units, (text) => targets.push(text));
  if (targets.length !== strings.length) {
    throw new Error(`unit pack "${lang}" has ${strings.length} texts, expected ${targets.length}`);
  }
  targets.forEach((text, i) => {
    if (strings[i] !== null && text[lang] === undefined) text[lang] = strings[i];
  });
}
