/**
 * Final wording pass for generated zh text (question stems, options, explanations and
 * flashcards), applied after the engine has assembled and masked the text.
 *
 * Owned by the zh language reviewer. Use it only for grammar the seed data cannot fix on its
 * own, e.g. agreement after the masked placeholder or template joins. Rules must be deterministic,
 * must not change meaning, numbers or formulas, and must keep the five options of a question
 * distinct. Identity by default.
 */
export type PolishKind = 'stem' | 'option' | 'explanation' | 'flashcard';

const CJK = '\\u4e00-\\u9fa5';

const RULES: Array<[RegExp, string]> = [
  // Templates join sentences with an ASCII space ("。 其余选项均错误： A) …"); Chinese text has no
  // spaces after full-width punctuation. Newlines (Roman-numeral layout) are kept.
  [/([。；：！？，、]) +(?=\S)/g, '$1'],
  // Template labels followed by a ":" in the ASCII style ("完整说法: …", "主要区别: …").
  [new RegExp(`(^|[。\\n])([${CJK}]{2,6}): +`, 'g'), '$1$2：'],
  // A seed tip that already carries its own label inside the template's "解题要点：" label.
  [/解题要点：考试陷阱：/g, '易错提醒：'],
  [/解题要点：考试要点：/g, '解题要点：'],
  // The masked placeholder followed by a space that belonged to a formula-final concept name
  // ("该概念 表示…" from "Qi > Ksp 表示…").
  [new RegExp(`该概念 +(?=[${CJK}])`, 'g'), '该概念'],
];

export function polish(text: string, _kind: PolishKind): string {
  let out = text;
  for (const [re, rep] of RULES) out = out.replace(re, rep);
  return out;
}
