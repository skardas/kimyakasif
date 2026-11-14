export type LanguageCode = 'tr' | 'en' | 'de' | 'fr' | 'ru' | 'ar' | 'zh' | 'ku';

export type LocalizedText = Record<LanguageCode, string>;

export type ExamCategory = 'TYT' | 'AYT';

export type ChemistryDifficulty = 'easy' | 'medium' | 'hard' | 'osym';

export type ChemistryArchetype =
  | 'roman-numeral'
  | 'negative-trap'
  | 'positive-concept'
  | 'structure-property-match'
  | 'reaction-calculation-order'
  | 'osym-twin';

export type DiagramArchetypeId =
  | 'bohr-orbital-atom'
  | 'bohr-orbital-levels'
  | 'periodic-table-trends'
  | 'periodic-trends-spiral'
  | 'gas-piston-manometer'
  | 'gas-law-piston-manometer'
  | 'phase-heating-curve'
  | 'heating-cooling-phase-diagram'
  | 'potential-energy-reaction'
  | 'potential-energy-reaction-coordinate'
  | 'titration-burette-curve'
  | 'titration-curve-burette'
  | 'galvanic-daniell-cell'
  | 'electrolysis-hoffman-cell'
  | 'vsepr-molecular-geometry'
  | 'equilibrium-le-chatelier'
  | 'equilibrium-le-chatelier-graph'
  | 'lab-glassware-setup'
  | 'solution-solvation-sphere'
  | 'organic-functional-groups'
  | 'lewis-dot-bonding'
  | 'crystal-lattice'
  | 'stoichiometry-chamber'
  | 'distillation-column'
  | 'acid-base-metal'
  | 'polymer-micelle'
  | 'quantum-orbitals';

export interface QuestionDiagramSpec {
  archetype: DiagramArchetypeId;
  title: string;
  caption: string;
  labels: Record<string, string>;
  variant?: number;
  animated?: boolean;
}

export interface CompiledQuestion {
  id: string; // e.g. 'u01-q001' .. 'u24-q128'
  unitId: string;
  setNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  questionNumberInUnit: number; // 1 .. 128
  exam: ExamCategory;
  difficulty: ChemistryDifficulty;
  archetype: ChemistryArchetype;
  stem: string;
  options: [string, string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3 | 4;
  explanation: string;
  diagram?: QuestionDiagramSpec;
}

export interface DeepSubtopicCard {
  id: string;
  badge: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  keyPoints: [LocalizedText, LocalizedText, LocalizedText];
  accentHex?: string;
}

export interface GoldenFormulaRule {
  id: string;
  label: LocalizedText;
  expression: LocalizedText;
  examNote: LocalizedText;
}

export interface MemoryMnemonicItem {
  id: string;
  codeBadge: LocalizedText;
  title: LocalizedText;
  expansion: LocalizedText;
  memoryTip: LocalizedText;
}

export interface UnitDeepStudyGuide {
  unitId: string;
  bigPictureQuote: LocalizedText;
  deepSubtopics: [DeepSubtopicCard, DeepSubtopicCard, DeepSubtopicCard];
  goldenFormulas: [GoldenFormulaRule, GoldenFormulaRule, GoldenFormulaRule];
  memoryMnemonics: [MemoryMnemonicItem, MemoryMnemonicItem];
}

export type MockExamCategory = 'TYT_BRANCH' | 'AYT_BRANCH' | 'YKS_FULL' | 'VISUAL_SPECIAL';

export type MockExamDifficultyTier = 'temel' | 'standart' | 'ileri' | 'osym-prova';

export interface MockExamDefinition {
  id: string;
  category: MockExamCategory;
  examNumber: number;
  title: string;
  subtitle: string;
  badgeText: string;
  difficultyTier: MockExamDifficultyTier;
  questionCount: number;
  durationMinutes: number;
  accentColor: string;
  visualFocus?: boolean;
}

