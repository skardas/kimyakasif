/**
 * Final wording pass for generated ru text (question stems, options, explanations and
 * flashcards), applied after the engine has assembled and masked the text.
 *
 * Owned by the ru language reviewer. Use it only for grammar the seed data cannot fix on its
 * own, e.g. agreement after the masked placeholder or template joins. Rules must be deterministic,
 * must not change meaning, numbers or formulas, and must keep the five options of a question
 * distinct. Identity by default.
 */
export type PolishKind = 'stem' | 'option' | 'explanation' | 'flashcard';

/**
 * Quotes inside quotes: Russian typography uses «ёлочки» outside and „лапки“ inside.
 * Templates wrap seed texts in «…», and seed texts may already contain «…», which would give
 * «… «…» …». Opening/closing marks at depth ≥ 1 become „ and “.
 */
function nestQuotes(text: string): string {
  if (!text.includes('«')) return text;
  let depth = 0;
  let out = '';
  for (const ch of text) {
    if (ch === '«') {
      out += depth > 0 ? '„' : '«';
      depth += 1;
    } else if (ch === '»' && depth > 0) {
      depth -= 1;
      out += depth > 0 ? '“' : '»';
    } else {
      out += ch;
    }
  }
  // Unbalanced input: leave it as it was rather than guess.
  return depth === 0 ? out : text;
}

const RULES: Array<[RegExp, string]> = [
  // Masked definition "X — это …" → "Это понятие — это …": drop the doubled "это".
  [/(^|[^\p{L}])([Ээ]то понятие) — это (?=\p{L})/gu, '$1$2 — '],
  // "Это понятие является …" is stiff; "Это понятие — …" is not needed, keep verb but avoid "это понятие это".
  [/(^|[^\p{L}])([Ээ]то понятие),? это понятие(?![\p{L}])/gu, '$1$2'],
  // Template joins: a doubled full stop / stray space before punctuation after bare() + ".".
  [/([^.])\.\.(?!\.)/g, '$1.'],
  // Two terminal marks produced by a template "." after a seed text ending in "!" or "?".
  [/([!?])\./g, '$1'],
];

export function polish(text: string, _kind: PolishKind): string {
  if (typeof text !== 'string' || text.length === 0) return text;
  let out = text;
  for (const [re, rep] of RULES) out = out.replace(re, rep);
  out = nestQuotes(out);
  return out;
}
