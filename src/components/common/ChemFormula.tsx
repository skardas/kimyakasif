import React from 'react';
import { tokenizeChemText, hasRtlScript, splitLtrNumberRuns, type ChemPart } from './chemNotation';
import { typesetMath, isWholeEquation } from './mathTypeset';

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
 * Chemical notation only (no equation typesetting): formulas get real subscripts/superscripts
 * (H<sub>2</sub>SO<sub>4</sub>, Fe<sup>3+</sup>, 10<sup>−3</sup>, 1s<sup>2</sup>, sp<sup>3</sup>),
 * ASCII arrows become → / ⇌, and every formula or reaction is wrapped in a <bdi dir="ltr"> isolate
 * so it keeps its left-to-right order inside Arabic text. See chemNotation.ts for the rules.
 */
/**
 * Plain prose. In right-to-left text, signed numbers and degree values ("−0.76", "25 °C", "(°C)")
 * become left-to-right isolates so the sign / degree sign stays on the correct side.
 */
function renderPlain(text: string, rtl: boolean, key: string): React.ReactNode {
  if (!rtl) return <React.Fragment key={key}>{text}</React.Fragment>;
  const pieces = splitLtrNumberRuns(text);
  if (!pieces.some((p) => p.ltr)) return <React.Fragment key={key}>{text}</React.Fragment>;
  return (
    <React.Fragment key={key}>
      {pieces.map((p, i) =>
        p.ltr ? (
          <bdi key={i} dir="ltr">
            {p.text}
          </bdi>
        ) : (
          <React.Fragment key={i}>{p.text}</React.Fragment>
        )
      )}
    </React.Fragment>
  );
}

function renderChemNotation(rawText: string, keyPrefix = '', rtl = false): React.ReactNode {
  const segments = tokenizeChemText(rawText);
  if (segments.length === 1 && segments[0].type === 'text') {
    return rtl ? renderPlain(segments[0].text, true, `${keyPrefix}p`) : segments[0].text;
  }
  return segments.map((seg, idx) => {
    const si = `${keyPrefix}${idx}`;
    if (seg.type === 'text') {
      return renderPlain(seg.text, rtl, si);
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

export interface FormatChemOptions {
  /**
   * true   — the string is a stand-alone formula field: parts separated by " | " are stacked on
   *          separate lines and equations use display style (stacked fractions).
   * 'auto' — display style only when the whole string is one equation (an option such as
   *          "r = k[A]^2" or "1,0x10^-4 M"); otherwise inline.
   * false  — inline (default): equations inside running text.
   */
  display?: boolean | 'auto';
}

/** One line of text: equation runs typeset with KaTeX, the rest with chemical notation. */
function renderMixed(text: string, display: boolean, keyPrefix = '', rtl = false): React.ReactNode {
  const segments = typesetMath(text, { display }).map((seg) => ({ ...seg }));
  if (!segments.some((seg) => seg.type === 'math')) return renderChemNotation(text, keyPrefix, rtl);
  // "CH4 (MA = 16)": a math run wrapped in parentheses takes them into its LTR isolate, so in
  // Arabic the brackets are not mirrored to the far end of the line or left behind at a wrap.
  const wrapped = new Set<number>();
  segments.forEach((seg, i) => {
    const before = segments[i - 1];
    const after = segments[i + 1];
    if (seg.type !== 'math' || before?.type !== 'text' || after?.type !== 'text') return;
    if (/\($/.test(before.text) && /^\)/.test(after.text)) {
      before.text = before.text.slice(0, -1);
      after.text = after.text.slice(1);
      wrapped.add(i);
    }
  });
  return segments.map((seg, i) => {
    const key = `${keyPrefix}m${i}`;
    if (seg.type === 'text') {
      return <React.Fragment key={key}>{renderChemNotation(seg.text, `${key}-`, rtl)}</React.Fragment>;
    }
    // KaTeX output only (labels are HTML-escaped by mathTypeset); the original notation stays
    // available to assistive technology through aria-label.
    return (
      <bdi
        key={key}
        dir="ltr"
        role="math"
        aria-label={seg.raw}
        className={`chem-math${display ? ' chem-math--display' : ''}${seg.wide ? ' chem-math--wide' : ''}`}
        dangerouslySetInnerHTML={{ __html: wrapped.has(i) ? `(${seg.html})` : seg.html }}
      />
    );
  });
}

/**
 * Formats bank text for display.
 *  - Equation runs ("Ka = [H+]^2 / Ca", "sqrt(64/16) = 2", "1,0x10^-10") are converted to LaTeX and
 *    rendered with KaTeX (see mathTypeset.ts). Anything the converter is not sure about keeps the
 *    chemical-notation rendering below, so no text is ever lost.
 *  - Chemical formulas get real subscripts/superscripts, ASCII arrows become → / ⇌, and every
 *    formula or equation is a <bdi dir="ltr"> isolate (left-to-right inside Arabic text).
 * The stored text is never changed; only the rendering.
 */
export function formatChemText(rawText: string, options: FormatChemOptions = {}): React.ReactNode {
  if (!rawText) {
    return rawText;
  }
  const rtl = hasRtlScript(rawText);
  if (options.display === true) {
    const parts = rawText.split(/\s+\|\s+/).filter((p) => p.trim());
    if (parts.length > 1) {
      return parts.map((part, i) => (
        <span key={i} className="chem-eq-line">
          {renderMixed(part.trim(), true, `l${i}-`, rtl)}
        </span>
      ));
    }
    return renderMixed(rawText, true, '', rtl);
  }
  if (options.display === 'auto' && isWholeEquation(rawText)) {
    return renderMixed(rawText.trim(), true, '', rtl);
  }
  return renderMixed(rawText, false, '', rtl);
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
