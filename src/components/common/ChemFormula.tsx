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

/**
 * Automatically detects chemical formula tags like {{chem:H2SO4}} or standard
 * reaction patterns and wraps them in <bdi dir="ltr">.
 */
export function formatChemText(rawText: string): React.ReactNode {
  if (!rawText || !rawText.includes('{{chem:')) {
    return rawText;
  }

  const parts = rawText.split(/({{chem:[^}]+}})/g);
  return parts.map((part, index) => {
    if (part.startsWith('{{chem:') && part.endsWith('}}')) {
      const formula = part.slice(7, -2);
      return <ChemFormula key={index} formula={formula} />;
    }
    return part;
  });
}
