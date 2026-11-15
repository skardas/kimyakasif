import React from 'react';
import { tokenizeChemText, type ChemPart } from './chemNotation';

export { tokenizeChemText, renderChemDebug, chemPlainText } from './chemNotation';

export interface ChemFormulaProps {
  formula: string;
  className?: string;
}

/**
 * Wraps chemical formulas, reaction equations, and math notation
 * in a bidirectional isolate (<bdi dir="ltr">) so that Arabic RTL text
 * does not invert subscripts, superscripts, reaction arrows, or bracketed complexes.
 */
export const ChemFormula: React.FC<ChemFormulaProps> = ({ formula, className = '' }) => {
  return (
    <bdi dir="ltr" className={`chem-formula ${className}`}>
      {formula}
    </bdi>
  );
};

const P_TAG = '{{chem:[^}]+}}';
const P_REACTION =
  '(?:\\b\\d*\\s*[A-Z][a-zA-Z0-9\\(\\)\\[\\]⁺⁻\\^²³\\+-]*(?:\\([a-z]+\\))?\\s*(?:\\+\\s*\\d*\\s*[A-Z][a-zA-Z0-9\\(\\)\\[\\]⁺⁻\\^²³\\+-]*(?:\\([a-z]+\\))?\\s*)*[→⇌⇄]\\s*\\d*\\s*[A-Z][a-zA-Z0-9\\(\\)\\[\\]⁺⁻\\^²³\\+-]*(?:\\([a-z]+\\))?(?:\\s*\\+\\s*\\d*\\s*[A-Z][a-zA-Z0-9\\(\\)\\[\\]⁺⁻\\^²³\\+-]*(?:\\([a-z]+\\))?)*)';
const P_COMPLEX = '\\[[A-Z][a-zA-Z0-9\\(\\)]*\\](?:\\d*[⁺⁻\\+-]|\\^[\\d\\+-]+|[²³⁺⁻]+)?';
const P_PAREN_FORMULA =
  '(?:\\([A-Z][a-zA-Z0-9]*\\)\\d*(?:[A-Z][a-z]?\\d*)+|(?:[A-Z][a-z]?\\d*)+\\([A-Z][a-zA-Z0-9]*\\)\\d*(?:[A-Z][a-z]?\\d*)*(?:\\^[\\d\\+-]+|[²³⁺⁻]+|[\\d]*[⁺⁻\\+-])?)';
const P_STANDARD =
  '\\b(?:[A-Z][a-z]?\\d+(?:[A-Z][a-z]?\\d*)*(?:\\^[\\d\\+-]+|[²³⁺⁻]+|\\d*[⁺⁻\\+-])?|[A-Z][a-z]?(?:[A-Z][a-z]?\\d*)+(?:\\^[\\d\\+-]+|[²³⁺⁻]+|\\d*[⁺⁻\\+-])?|[A-Z][a-z]?(?:\\^[\\d\\+-]+|[²³⁺⁻]+|\\d*[⁺⁻\\+-]))(?:\\([a-z]+\\))?';

/**
 * Legacy detection regex, kept as an export for older callers/tests. Rendering now goes through
 * tokenizeChemText (chemNotation.ts), which validates element symbols before formatting.
 */
export const CHEM_FORMULA_REGEX = new RegExp(
  `(${P_TAG})|(${P_REACTION})|(${P_COMPLEX})|(${P_PAREN_FORMULA})|(${P_STANDARD})`,
  'g'
);

/** Renders the parts of one formatted token (plain text, <sub>, <sup>). */
function renderParts(parts: ChemPart[], keyPrefix: string): React.ReactNode[] {
  return parts.map((p, i) =>
    p.k === 'sub' ? (
      <sub key={`${keyPrefix}-${i}`}>{p.s}</sub>
    ) : p.k === 'sup' ? (
      <sup key={`${keyPrefix}-${i}`}>{p.s}</sup>
    ) : (
      <React.Fragment key={`${keyPrefix}-${i}`}>{p.s}</React.Fragment>
    )
  );
}

/**
 * Formats bank text for display: chemical formulas get real subscripts/superscripts
 * (H<sub>2</sub>SO<sub>4</sub>, Fe<sup>3+</sup>, 10<sup>−3</sup>, 1s<sup>2</sup>, sp<sup>3</sup>),
 * ASCII arrows become → / ⇌, and every formula or equation is wrapped in a
 * <bdi dir="ltr"> isolate so it keeps its left-to-right order inside Arabic text.
 * The stored text is never changed; only the rendering. See chemNotation.ts for the rules.
 */
export function formatChemText(rawText: string): React.ReactNode {
  if (!rawText) {
    return rawText;
  }
  const segments = tokenizeChemText(rawText);
  if (segments.length === 1 && segments[0].type === 'text') {
    return segments[0].text;
  }
  return segments.map((seg, si) => {
    if (seg.type === 'text') {
      return <React.Fragment key={si}>{seg.text}</React.Fragment>;
    }
    const tokens = seg.tokens.filter((t) => 'parts' in t);
    if (tokens.length === 1 && seg.tokens.length === 1) {
      return (
        <bdi key={si} dir="ltr" className="chem-formula">
          {renderParts((seg.tokens[0] as { parts: ChemPart[] }).parts, `${si}`)}
        </bdi>
      );
    }
    // A reaction / ion pair / electron configuration: one isolate for the whole equation (so it
    // reads left to right in RTL), but it may wrap between terms; each formula stays unbroken.
    return (
      <bdi key={si} dir="ltr" className="chem-formula chem-eq">
        {seg.tokens.map((t, ti) =>
          'gap' in t ? (
            <React.Fragment key={`${si}-g${ti}`}>{t.gap}</React.Fragment>
          ) : (
            <span key={`${si}-t${ti}`} className="chem-f">
              {renderParts(t.parts, `${si}-${ti}`)}
            </span>
          )
        )}
      </bdi>
    );
  });
}

/**
 * Splits a long explanation / worked solution into readable blocks:
 *  - explicit line breaks in the text,
 *  - I. / II. / III. statement evaluations ("I. Doğrudur: … II. Yanlıştır: …"),
 *  - the "Diğer seçenekler…" list of corrected options (A) … B) …),
 *  - numbered steps ("1) …", "Adım 1: …", "Step 2: …").
 * Returns plain strings; the caller renders each with formatChemText.
 */
export function splitExplanationBlocks(text: string): string[] {
  if (!text) return [];
  const out: string[] = [];
  for (const para of text.split(/\n+/)) {
    const p = para.trim();
    if (!p) continue;
    let marked = p;
    if (/^I\.\s/.test(p)) {
      // statement evaluations: "I. Doğrudur: … II. Yanlıştır: … III. …  Buna göre …"
      marked = marked
        .replace(/([.。:：)）])\s*(?=(?:II|III|IV|V)\.\s)/gu, '$1\u2028')
        .replace(/([.。)）])\s*(?=(?:Buna göre|Therefore|Die Antwort|La réponse|Следовательно|وعليه|因此|Ji ber vê))/gu, '$1\u2028');
    }
    if (/[:：]\s*1\.\s.+?\s→\s2\.\s/su.test(marked)) {
      // sequence progressions: "…doğru sırası: 1. … → 2. … → 3. …" — one step per line
      marked = marked
        .replace(/([:：])\s*(?=1\.\s)/u, '$1 ')
        .replace(/\s→\s(?=\d{1,2}\.\s)/gu, ' → ');
    }
    const pieces = marked
      // corrected options list: "…: A) … B) …"
      .replace(/([.。:：])\s+(?=[A-E]\)\s)/gu, '$1\u2028')
      // numbered steps
      .replace(/([.。:：;])\s+(?=(?:\d{1,2}\)|(?:Adım|Step|Schritt|Étape|Шаг|الخطوة|步骤|Gav)\s?\d{1,2}\s?[:.)]))/gu, '$1\u2028')
      .split('\u2028')
      .map((x) => x.trim())
      .filter(Boolean);
    out.push(...pieces);
  }
  return out;
}

/** Renders an explanation as separate lines/paragraphs, each with chemical notation. */
export function formatChemBlock(text: string, className = 'chem-block__p'): React.ReactNode {
  const blocks = splitExplanationBlocks(text);
  if (blocks.length <= 1) return formatChemText(text);
  return blocks.map((b, i) => (
    <span key={i} className={className}>
      {formatChemText(b)}
    </span>
  ));
}
