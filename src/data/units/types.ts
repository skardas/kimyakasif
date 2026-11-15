import type {
  LanguageCode,
  LocalizedText,
  ExamCategory,
  ChemistryDifficulty,
  ChemistryArchetype,
  DiagramArchetypeId,
  QuestionDiagramSpec,
  CompiledQuestion,
  DeepSubtopicCard,
  GoldenFormulaRule,
  MemoryMnemonicItem,
  UnitDeepStudyGuide,
  QuestionFigureSeed,
} from '../../types/chemistry';

export type {
  LanguageCode,
  LocalizedText,
  ExamCategory,
  ChemistryDifficulty,
  ChemistryArchetype,
  DiagramArchetypeId,
  QuestionDiagramSpec,
  CompiledQuestion,
  DeepSubtopicCard,
  GoldenFormulaRule,
  MemoryMnemonicItem,
  UnitDeepStudyGuide,
  QuestionFigureSeed,
};

export interface FactTrapPair {
  id: string;
  fact: LocalizedText;
  trap: LocalizedText;
  whyTrapIsFalse?: LocalizedText;
  osymTip?: LocalizedText;
}

export interface ConceptComparisonItem {
  id: string;
  conceptA: LocalizedText;
  conceptB: LocalizedText;
  distinction: LocalizedText;
}

export interface ChemicalSequence {
  id: string;
  title: LocalizedText;
  steps: LocalizedText[];
}

export interface OsymTwinQuestionSeed {
  id: string;
  stem: LocalizedText;
  options: [LocalizedText, LocalizedText, LocalizedText, LocalizedText, LocalizedText];
  correctIndex: 0 | 1 | 2 | 3 | 4;
  explanation: LocalizedText;
  /** figure the question depends on (şekilli soru); shown above the stem */
  figure?: QuestionFigureSeed;
}

export interface ChemistryUnitSeedData {
  id: string; // 'u01' .. 'u24'
  order: number;
  exam: ExamCategory;
  grade: 9 | 10 | 11 | 12;
  title: LocalizedText;
  subtitle: LocalizedText;
  facts: FactTrapPair[]; // min 16
  comparisons: ConceptComparisonItem[]; // min 8
  sequences: ChemicalSequence[]; // min 4
  osymTwins: OsymTwinQuestionSeed[]; // min 16
}
