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

/**
 * Question-specific figure (ÖSYM "şekilli soru"): the figure carries data the student needs to
 * answer, unlike QuestionDiagramSpec which is a generic topic illustration.
 * Text may be language-neutral (string: formulas, numbers, X/Y/Z, I/II/III) or localized.
 */
export type FigureText = string | LocalizedText;

export interface FigureGraphSeries {
  points: Array<[number, number]>;
  label?: FigureText;
  dashed?: boolean;
  /** 0..4 picks a theme accent; default 0 */
  tone?: number;
}

export interface FigureGraphMarker {
  x: number;
  y: number;
  label: FigureText;
  /** draw dotted guide lines to both axes */
  guides?: boolean;
}

export type QuestionFigureSeed =
  | {
      kind: 'graph';
      xLabel: FigureText;
      yLabel: FigureText;
      xMax: number;
      yMax: number;
      xMin?: number;
      yMin?: number;
      /** tick values; omitted -> no numeric ticks (qualitative graph) */
      xTicks?: Array<number | { v: number; label: FigureText }>;
      yTicks?: Array<number | { v: number; label: FigureText }>;
      series: FigureGraphSeries[];
      markers?: FigureGraphMarker[];
      /** vertical/horizontal labelled bands, e.g. time intervals I, II, III */
      xBands?: Array<{ from: number; to: number; label: FigureText }>;
      caption?: FigureText;
    }
  | {
      kind: 'table';
      header: FigureText[];
      rows: FigureText[][];
      caption?: FigureText;
    }
  | {
      kind: 'svg';
      /** viewBox width/height */
      width: number;
      height: number;
      /**
       * Inner SVG markup. Use currentColor / the classes qf-line, qf-fill, qf-accent, qf-accent2,
       * qf-muted, qf-water, qf-gas for theme-aware colors. Text placeholders {{key}} are replaced
       * with labels[key] in the active language.
       */
      markup: string;
      labels?: Record<string, FigureText>;
      caption?: FigureText;
    };

/** Same shape as QuestionFigureSeed, with every FigureText resolved to a string. */
export type QuestionFigure =
  | {
      kind: 'graph';
      xLabel: string;
      yLabel: string;
      xMax: number;
      yMax: number;
      xMin?: number;
      yMin?: number;
      xTicks?: Array<number | { v: number; label: string }>;
      yTicks?: Array<number | { v: number; label: string }>;
      series: Array<{ points: Array<[number, number]>; label?: string; dashed?: boolean; tone?: number }>;
      markers?: Array<{ x: number; y: number; label: string; guides?: boolean }>;
      xBands?: Array<{ from: number; to: number; label: string }>;
      caption?: string;
    }
  | { kind: 'table'; header: string[]; rows: string[][]; caption?: string }
  | { kind: 'svg'; width: number; height: number; markup: string; caption?: string };

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
  /** question-specific figure the answer depends on (şekilli soru) */
  figure?: QuestionFigure;
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

