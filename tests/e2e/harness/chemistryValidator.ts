export interface CompoundOxidationSpec {
  formula: string;
  totalCharge: number;
  known: Record<string, { count: number; state: number }>;
  target: { symbol: string; count: number };
  expectedState: number;
}

export const CANONICAL_OXIDATION_COMPOUNDS: CompoundOxidationSpec[] = [
  { formula: 'NaCl', totalCharge: 0, known: { Cl: { count: 1, state: -1 } }, target: { symbol: 'Na', count: 1 }, expectedState: 1 },
  { formula: 'MgCl2', totalCharge: 0, known: { Cl: { count: 2, state: -1 } }, target: { symbol: 'Mg', count: 1 }, expectedState: 2 },
  { formula: 'Al2O3', totalCharge: 0, known: { O: { count: 3, state: -2 } }, target: { symbol: 'Al', count: 2 }, expectedState: 3 },
  { formula: 'CO2', totalCharge: 0, known: { O: { count: 2, state: -2 } }, target: { symbol: 'C', count: 1 }, expectedState: 4 },
  { formula: 'HNO3', totalCharge: 0, known: { H: { count: 1, state: 1 }, O: { count: 3, state: -2 } }, target: { symbol: 'N', count: 1 }, expectedState: 5 },
  { formula: 'H2SO4', totalCharge: 0, known: { H: { count: 2, state: 1 }, O: { count: 4, state: -2 } }, target: { symbol: 'S', count: 1 }, expectedState: 6 },
  { formula: 'KMnO4', totalCharge: 0, known: { K: { count: 1, state: 1 }, O: { count: 4, state: -2 } }, target: { symbol: 'Mn', count: 1 }, expectedState: 7 },
  { formula: 'HCl', totalCharge: 0, known: { H: { count: 1, state: 1 } }, target: { symbol: 'Cl', count: 1 }, expectedState: -1 },
  { formula: 'H2O', totalCharge: 0, known: { H: { count: 2, state: 1 } }, target: { symbol: 'O', count: 1 }, expectedState: -2 },
  { formula: 'NH3', totalCharge: 0, known: { H: { count: 3, state: 1 } }, target: { symbol: 'N', count: 1 }, expectedState: -3 },
  { formula: 'SO4^2-', totalCharge: -2, known: { O: { count: 4, state: -2 } }, target: { symbol: 'S', count: 1 }, expectedState: 6 },
  { formula: 'K2Cr2O7', totalCharge: 0, known: { K: { count: 2, state: 1 }, O: { count: 7, state: -2 } }, target: { symbol: 'Cr', count: 2 }, expectedState: 6 },
];

export function calculateOxidationState(compound: CompoundOxidationSpec): { calculatedState: number; formattedState: string } {
  const sumKnown = Object.values(compound.known).reduce((sum, item) => sum + item.count * item.state, 0);
  const calculatedState = (compound.totalCharge - sumKnown) / compound.target.count;
  const formattedState = calculatedState > 0 ? `+${calculatedState}` : `${calculatedState}`;
  return { calculatedState, formattedState };
}
