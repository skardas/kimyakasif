/**
 * Final wording pass for generated ar text (question stems, options, explanations and
 * flashcards), applied after the engine has assembled and masked the text.
 *
 * Owned by the ar language reviewer. Use it only for grammar the seed data cannot fix on its
 * own, e.g. agreement after the masked placeholder or template joins. Rules must be deterministic,
 * must not change meaning, numbers or formulas, and must keep the five options of a question
 * distinct. Identity by default.
 */
export type PolishKind = 'stem' | 'option' | 'explanation' | 'flashcard';

// The concept-match stems replace a concept name with the masculine placeholder «هذا المفهوم».
// Many concept names are feminine (المولارية، الرابطة التساهمية، الخلية الجلفانية ...), so the verb or
// pronoun that agreed with the original name is now feminine next to a masculine subject.
const PH = 'هذا المفهوم';

// Present-tense verbs (3rd person) that occur next to the placeholder in the bank. Only these are
// switched from the feminine prefix ت to the masculine ي, so nouns that start with ت (تفاعل، تركيز،
// تآثر ...) are never touched.
const VERBS = [
  'تكون', 'تكوّن', 'تتكون', 'تتكوّن', 'تتأين', 'تربط', 'تزيح', 'تساوي', 'تعتمد', 'تنشأ', 'تهاجر',
  'تزداد', 'تقل', 'تقلّ', 'تحتوي', 'تتغير', 'تتغيّر', 'تتفاعل', 'تُحسب', 'تحسب', 'تشكل', 'تشكّل', 'توضح',
  'توضّح', 'تبين', 'تبيّن', 'تُستخدم', 'تستخدم', 'تعمل', 'تمثل', 'تمثّل', 'تنتج', 'تحدث',
  'تتحول', 'تتحوّل', 'تنص', 'تنصّ', 'تصف', 'تحدد', 'تحدّد', 'تفصل', 'تمتص', 'تمتصّ', 'تطلق', 'تُطلق',
  'تتأكسد', 'تُختزل', 'تختزل', 'تكتسب', 'تفقد', 'تتطلب', 'تتطلّب', 'تسمح', 'تتجه', 'تتّجه', 'تنتقل',
  'تحافظ', 'تقاوم', 'تبقى', 'تظل', 'تظلّ', 'تتميز', 'تتميّز', 'تُعرّف', 'تعرف', 'تُعرف', 'تُقاس', 'تقاس',
  'تتناسب', 'تُعطي', 'تعطي', 'تزيد', 'تخفض', 'تُخفض', 'ترفع', 'تتم', 'تتمّ', 'تحتاج', 'تؤدي', 'تتضمن',
  'تتضمّن', 'تحمل', 'تملك', 'تمتلك', 'تذوب', 'تتفكك', 'تتفكّك', 'تُكتب', 'تكتب', 'تُستعمل', 'تجمع', 'تجمّع',
  'تُعدّ', 'تعد', 'تُعد', 'تتجمع', 'تتجمّع', 'تُحضَّر', 'تحضر', 'تُنتج', 'تنفصل', 'تتحد', 'تتّحد', 'تتبع',
  'تحرر', 'تحرّر', 'تتبخر', 'تتبخّر', 'تنصهر', 'تتجمد', 'تتجمّد', 'تتسامى', 'تغلي', 'تُشير', 'تشير',
];
// Spelled like a noun as well (تحوّل = "transformation"), so only switched in verb-first position.
const VERBS_BEFORE_ONLY = ['تحوّل', 'تحول'];
// Alternation of the verbs without their leading ت (the ت itself is matched and replaced).
const stems = (list: string[]) =>
  list.map((v) => v.slice(1)).sort((a, b) => b.length - a.length).join('|');
const AR_LETTER = '\\u0621-\\u064A\\u064B-\\u0652';

// "هذا المفهوم تتكون" / "هذا المفهوم لا تزيح" / "أما هذا المفهوم فتستخدم" -> masculine verb. Not after a
// preposition: in "في هذا المفهوم تتحد المواد" the placeholder is not the subject.
const VERB_AFTER = new RegExp(`(?<!(?:في|عند|من|على|إلى|عن|مع|بين|خارج|داخل|حول) )${PH} (ف?(?:لا |لم |قد |لن )?)ت(?=(?:${stems(VERBS)})(?![${AR_LETTER}]))`, 'g');
// "تتكون هذا المفهوم" -> "يتكون هذا المفهوم" (verb-subject order), only where a clause starts.
const VERB_BEFORE = new RegExp(
  `(^|["«(]|[:؛،.] )(لا |لم |قد |لن )?ت(?=(?:${stems([...VERBS, ...VERBS_BEFORE_ONLY])}) ${PH}(?![${AR_LETTER}]))`,
  'g',
);

const RULES: Array<[RegExp, string]> = [
  [VERB_AFTER, `${PH} $1ي`],
  [VERB_BEFORE, '$1$2ي'],
  // Pronoun copula: "هذا المفهوم هي ..." -> "هذا المفهوم هو ...".
  [new RegExp(`${PH} هي(?![${AR_LETTER}])`, 'g'), `${PH} هو`],
  // "أما هذا المفهوم فهي" -> "فهو".
  [new RegExp(`${PH} فهي(?![${AR_LETTER}])`, 'g'), `${PH} فهو`],
  // Feminine adjectives / relative words directly after the placeholder.
  [new RegExp(`${PH} ذات(?![${AR_LETTER}])`, 'g'), `${PH} ذو`],
  [new RegExp(`${PH} التي(?![${AR_LETTER}])`, 'g'), `${PH} الذي`],
  [new RegExp(`${PH} مزودة(?![${AR_LETTER}])`, 'g'), `${PH} مزوَّد`],
  // The missing-step marker of the sequence questions is written "[ ? ]" by the engine.
  [/\[ \? \]/g, '[ ؟ ]'],
];

export function polish(text: string, _kind: PolishKind): string {
  if (!text) return text;
  let out = text;
  for (const [re, rep] of RULES) out = out.replace(re, rep);
  return out;
}
