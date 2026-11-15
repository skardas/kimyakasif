import React from 'react';

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

export const CHEM_FORMULA_REGEX = new RegExp(
  `(${P_TAG})|(${P_REACTION})|(${P_COMPLEX})|(${P_PAREN_FORMULA})|(${P_STANDARD})`,
  'g'
);

/**
 * Automatically detects chemical formula tags like {{chem:H2SO4}} or standard
 * reaction patterns and chemical formulas, wrapping them in <bdi dir="ltr">.
 */
export function formatChemText(rawText: string): React.ReactNode {
  if (!rawText) {
    return rawText;
  }

  const regex = new RegExp(CHEM_FORMULA_REGEX.source, 'g');
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(rawText)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(rawText.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('{{chem:') && token.endsWith('}}')) {
      const formula = token.slice(7, -2);
      nodes.push(<ChemFormula key={key++} formula={formula} />);
    } else {
      nodes.push(<ChemFormula key={key++} formula={token} />);
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex === 0) {
    return rawText;
  }

  if (lastIndex < rawText.length) {
    nodes.push(rawText.slice(lastIndex));
  }

  return nodes;
}
