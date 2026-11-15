/**
 * Final wording pass for generated ku text (question stems, options, explanations and
 * flashcards), applied after the engine has assembled and masked the text.
 *
 * Owned by the ku language reviewer. Use it only for grammar the seed data cannot fix on its
 * own, e.g. agreement after the masked placeholder or template joins. Rules must be deterministic,
 * must not change meaning, numbers or formulas, and must keep the five options of a question
 * distinct.
 */
export type PolishKind = 'stem' | 'option' | 'explanation' | 'flashcard';

const RULES: Array<[RegExp, string]> = [
  // The masked placeholder after an ezafe particle is a possessor and takes the oblique case:
  // "çavkaniyên sereke yên ev têgeh" -> "çavkaniyên sereke yên vê têgehê".
  [/(^|[^\p{L}])(yên|ên|ya|yê|a|ê)\s+ev têgeh(?![\p{L}])/gu, '$1$2 vê têgehê'],
  // Placeholder after the postposition-governed "bi … re / ji … re / li gorî" family is oblique too.
  [/(^|[^\p{L}])(li gorî|derbarê|ji ber|li ser|di navbera)\s+ev têgeh(?![\p{L}])/gu, '$1$2 vê têgehê'],
  // A doubled oblique ending produced by a masked inflected name: "vê têgehêê" / "vê têgehêyê".
  [/vê têgehê(?:ê|yê|ya|a)(?![\p{L}])/gu, 'vê têgehê'],
  // Ezafe-inflected placeholder ("ev têgeha", "ev têgehê") -> plain or oblique form.
  [/(^|[^\p{L}])ev têgeh(?:a|ê)(?![\p{L}])/gu, '$1vê têgehê'],
  // Template joins: a full stop added after a text that already ends in "?" or "!" ("...e?." -> "...e?").
  [/([?!])\.(?=\s|$)/g, '$1'],
];

export function polish(text: string, _kind: PolishKind): string {
  let out = text;
  for (const [re, rep] of RULES) out = out.replace(re, rep);
  return out;
}
