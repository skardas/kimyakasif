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

export function polish(text: string, _kind: PolishKind): string {
  return text;
}
