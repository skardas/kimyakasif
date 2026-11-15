/**
 * Kimya YKS — End-to-End Test Contracts & Domain Module Integration
 *
 * Direct integration of real application code from `src/` combined with
 * authentic chemistry data engines and W3C standards-compliant shims.
 */

import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  OrbitCameraConstraints,
  ExplodeViewConstraints,
  CrystalLatticeSpec,
  DEFAULT_CAMERA_CONSTRAINTS,
  DEFAULT_EXPLODE_CONSTRAINTS,
  generateNaclLattice,
} from './sceneHelper';

export * from './sceneHelper';

// ---------------------------------------------------------------------------
// 1. Direct Imports from Application Modules (`src/`)
// ---------------------------------------------------------------------------

// Audio
import {
  playCorrect as realPlayCorrect,
  playWrong as realPlayWrong,
  playBubble as realPlayBubble,
  playFizz as realPlayFizz,
  playDrop as realPlayDrop,
  playSuccess as realPlaySuccess,
  playFinish as realPlayFinish,
  playApplause as realPlayApplause,
  setSfxEnabled as realSetSfxEnabled,
  setSfxVolume as realSetSfxVolume,
  isSfxEnabled as realIsSfxEnabled,
  getSfxVolume as realGetSfxVolume,
  unlockAudio as realUnlockAudio,
} from '../../../src/audio/sfx';

import {
  musicEngine,
  MUSIC_TRACKS,
  MUSIC_MOODS,
  type MusicMood,
  type MusicTrack,
} from '../../../src/audio/musicEngine';

// i18n
import type { LanguageCode } from '../../../src/types/chemistry';
import {
  LANGUAGES,
  UI_TRANSLATIONS,
  type UIStrings,
} from '../../../src/i18n/translations';

import {
  SHELL_STRINGS,
  type ShellLocale,
} from '../../../src/i18n/shellStrings';

// Components & Styling
import {
  ChemFormula,
  formatChemText,
} from '../../../src/components/common/ChemFormula';

import {
  DAILY_GOAL_OPTIONS,
  usePreferences,
  type DailyGoal,
} from '../../../src/store/usePreferences';

import {
  useAppStore,
  type AppState,
  type ExamResultRecord,
  type ActiveExamState,
} from '../../../src/store/useAppStore';

// 3D Master Catalog
import { PRIMARY_32_SCENES } from '../../../src/data/threeScenesData';

// ---------------------------------------------------------------------------
// 2. Direct Imports from Harness Helpers
// ---------------------------------------------------------------------------

import {
  renderStoreHook,
  MockAudioContext,
} from './testEnv';

import {
  parseThemeCss,
  parseHexColor,
  getRelativeLuminance,
  getContrastRatio,
  resolveShellLayout,
  type ThemeTokens,
  type ShellLayoutResolution,
} from './themeHelper';

import {
  ChemBlitzEngine,
  CANONICAL_BLITZ_QUESTIONS,
  type BlitzQuestion,
} from './chemBlitzEngine';

import {
  calculateOxidationState,
  CANONICAL_OXIDATION_COMPOUNDS,
  type CompoundOxidationSpec,
} from './chemistryValidator';

import {
  ALL_CHEMISTRY_UNITS,
  compileAllQuestions,
  compileUnitQuestions,
  compileAllFlashcards,
  loadCurriculum,
  loc,
  type LocalizedText,
  type FactTrapPair,
  type ConceptComparisonItem,
  type ChemicalSequence,
  type OsymTwinQuestionSeed,
  type ChemistryUnitSeedData,
  type CompiledQuestion,
  type CompiledFlashcard,
} from './curriculumAdapter';

// Re-export all fundamental helpers and data
export {
  // Audio
  realPlayCorrect as playCorrect,
  realPlayWrong as playWrong,
  realPlayBubble as playBubble,
  realPlayFizz as playFizz,
  realPlayDrop as playDrop,
  realPlaySuccess as playSuccess,
  realPlayFinish as playFinish,
  realPlayApplause as playApplause,
  realSetSfxEnabled as setSfxEnabled,
  realSetSfxVolume as setSfxVolume,
  realIsSfxEnabled as isSfxEnabled,
  realGetSfxVolume as getSfxVolume,
  realUnlockAudio as unlockAudio,
  musicEngine,
  MUSIC_TRACKS,
  MUSIC_MOODS,
  type MusicMood,
  type MusicTrack,

  // i18n
  LANGUAGES,
  UI_TRANSLATIONS,
  SHELL_STRINGS,
  type LanguageCode,
  type UIStrings,
  type ShellLocale,

  // Components & Formula
  ChemFormula,
  formatChemText,
  DAILY_GOAL_OPTIONS,
  usePreferences,
  type DailyGoal,
  useAppStore,
  type AppState,
  type ExamResultRecord,
  type ActiveExamState,

  // Test Harness Helpers
  renderStoreHook,
  MockAudioContext,
  parseThemeCss,
  parseHexColor,
  getRelativeLuminance,
  getContrastRatio,
  resolveShellLayout,
  type ThemeTokens,
  type ShellLayoutResolution,

  // ChemBlitz & ChemistryValidator
  ChemBlitzEngine,
  CANONICAL_BLITZ_QUESTIONS,
  type BlitzQuestion,
  calculateOxidationState,
  CANONICAL_OXIDATION_COMPOUNDS,
  type CompoundOxidationSpec,

  // Curriculum & Questions
  ALL_CHEMISTRY_UNITS,
  compileAllQuestions,
  compileUnitQuestions,
  compileAllFlashcards,
  loadCurriculum,
  loc,
  type LocalizedText,
  type FactTrapPair,
  type ConceptComparisonItem,
  type ChemicalSequence,
  type OsymTwinQuestionSeed,
  type ChemistryUnitSeedData,
  type CompiledQuestion,
  type CompiledFlashcard,
};

// ---------------------------------------------------------------------------
// 3. Formula Wrapping Helper (using real ChemFormula component)
// ---------------------------------------------------------------------------

export function wrapChemFormula(formula: string): string {
  const element = React.createElement(ChemFormula, { formula });
  return renderToStaticMarkup(element);
}

// ---------------------------------------------------------------------------
// 4. Leitner 5-Box Spaced Repetition Engine
// ---------------------------------------------------------------------------

export class LeitnerBoxEngine {
  private boxMap: Record<string, number> = {};

  getBox(cardId: string): number {
    return this.boxMap[cardId] ?? 1;
  }

  setBox(cardId: string, box: number): void {
    this.boxMap[cardId] = box;
  }

  rateCard(cardId: string, mastered: boolean): { newBox: number; xpAwarded: number } {
    const current = this.getBox(cardId);
    if (mastered) {
      const newBox = Math.min(current + 1, 5);
      this.boxMap[cardId] = newBox;
      const xp = newBox === 5 ? 25 : 15;
      return { newBox, xpAwarded: xp };
    } else {
      this.boxMap[cardId] = 1;
      return { newBox: 1, xpAwarded: 0 };
    }
  }

  getDistribution(allCardIds: string[]): Record<number, number> {
    const dist: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (const id of allCardIds) {
      const b = this.getBox(id);
      dist[b] = (dist[b] || 0) + 1;
    }
    return dist;
  }
}

// ---------------------------------------------------------------------------
// 5. 3D Visualizer Scene Specifications
// ---------------------------------------------------------------------------

export interface Hotspot3D {
  id: string;
  pinNumber: number;
  position: [number, number, number];
  color: string;
  badgeLabel?: string;
  title?: LocalizedText;
  description?: LocalizedText;
  examFact?: LocalizedText;
  name: LocalizedText;
  role: LocalizedText;
  quickHint: LocalizedText;
  osymExamFact: LocalizedText;
}

export interface ChemicalSceneSpec {
  id: string;
  unitId: string;
  badge: 'TYT' | 'AYT';
  title: LocalizedText;
  subtitle?: LocalizedText;
  description: LocalizedText;
  category?: string;
  geometryType: string;
  cameraPosition?: [number, number, number];
  target?: [number, number, number];
  cameraConstraints?: OrbitCameraConstraints;
  explodeConstraints?: ExplodeViewConstraints;
  latticeSpec?: CrystalLatticeSpec;
  builder: (container: any, isDark: boolean) => {
    animate: (time: number) => void;
    dispose: () => void;
  };
  build?: (isDark: boolean) => any;
  hotspots: Hotspot3D[];
  aliases?: string[];
}

// Export the authentic 32-scene master catalog from production
export { PRIMARY_32_SCENES };

// Export all 99 authentic hotspots across the 32 scenes
export const ALL_HOTSPOTS_32: Hotspot3D[] = PRIMARY_32_SCENES.flatMap((s) => s.hotspots);

// Contract assertion: verify exactly 32 scenes and 99 hotspots exist in the authentic catalog
if (PRIMARY_32_SCENES.length !== 32) {
  throw new Error(`Expected PRIMARY_32_SCENES.length === 32, got ${PRIMARY_32_SCENES.length}`);
}
if (ALL_HOTSPOTS_32.length !== 99) {
  throw new Error(`Expected 99 hotspots across PRIMARY_32_SCENES, got ${ALL_HOTSPOTS_32.length}`);
}

const LEGACY_THREE_SCENES_DATA: ChemicalSceneSpec[] = [
  {
    id: 'scene-vsepr-linear',
    unitId: 'u23',
    badge: 'AYT',
    title: loc('Doğrusal VSEPR (BeCl2, CO2)', 'Linear VSEPR Geometry'),
    description: loc('180° bağ açısı ve sp hibritleşmesi', '180° bond angle and sp hybridization'),
    geometryType: 'linear',
    builder: (_container, _isDark) => ({
      animate: (_t) => {},
      dispose: () => {},
    }),
    hotspots: [
      {
        id: 'hs-lin-1',
        pinNumber: 1,
        position: [0, 0, 0],
        color: '#38bdf8',
        name: loc('Merkez Atom', 'Central Atom'),
        role: loc('sp hibriti', 'sp hybrid'),
        quickHint: loc('180° açı', '180° angle'),
        osymExamFact: loc('Apolar molekül oluşturur', 'Forms nonpolar molecule'),
      },
      {
        id: 'hs-lin-2',
        pinNumber: 2,
        position: [2, 0, 0],
        color: '#34d399',
        name: loc('Ligand 1', 'Ligand 1'),
        role: loc('Sigma bağı', 'Sigma bond'),
        quickHint: loc('Kovalent', 'Covalent'),
        osymExamFact: loc('Elektron çifti itmesi', 'Electron pair repulsion'),
      },
      {
        id: 'hs-lin-3',
        pinNumber: 3,
        position: [-2, 0, 0],
        color: '#34d399',
        name: loc('Ligand 2', 'Ligand 2'),
        role: loc('Simetrik karşıt', 'Symmetric opposing'),
        quickHint: loc('Dipol moment sıfır', 'Dipole moment zero'),
        osymExamFact: loc('Net dipol = 0', 'Net dipole = 0'),
      },
    ],
  },
  {
    id: 'scene-vsepr-trigonal',
    unitId: 'u23',
    badge: 'AYT',
    title: loc('Düzlem Üçgen VSEPR (BH3, BF3)', 'Trigonal Planar VSEPR'),
    description: loc('120° bağ açısı ve sp2 hibritleşmesi', '120° bond angle and sp2 hybridization'),
    geometryType: 'trigonal-planar',
    builder: () => ({ animate: () => {}, dispose: () => {} }),
    hotspots: [
      {
        id: 'hs-tp-1',
        pinNumber: 1,
        position: [0, 0, 0],
        color: '#38bdf8',
        name: loc('Bor Atomu', 'Boron Atom'),
        role: loc('Oktet eksiği', 'Incomplete octet'),
        quickHint: loc('6 elektron', '6 electrons'),
        osymExamFact: loc('Lewis asidi davranışı', 'Acts as Lewis acid'),
      },
      {
        id: 'hs-tp-2',
        pinNumber: 2,
        position: [2, 0, 0],
        color: '#34d399',
        name: loc('Flor Ligandı 1', 'Fluorine Ligand 1'),
        role: loc('sp2-p örtüşmesi', 'sp2-p overlap'),
        quickHint: loc('120° bağ açısı', '120° bond angle'),
        osymExamFact: loc('Apolar molekül yapısı', 'Nonpolar molecular structure'),
      },
      {
        id: 'hs-tp-3',
        pinNumber: 3,
        position: [-1, 1.73, 0],
        color: '#34d399',
        name: loc('Flor Ligandı 2', 'Fluorine Ligand 2'),
        role: loc('Simetrik bağ', 'Symmetric bond'),
        quickHint: loc('Düzlemsel geometri', 'Planar geometry'),
        osymExamFact: loc('Dipol moment sıfırdır', 'Dipole moment is zero'),
      },
    ],
  },
  {
    id: 'scene-vsepr-tetrahedral',
    unitId: 'u23',
    badge: 'AYT',
    title: loc('Düzgün Dörtyüzlü (CH4)', 'Tetrahedral VSEPR (CH4)'),
    description: loc('109.5° bağ açısı ve sp3 hibritleşmesi', '109.5° bond angle and sp3 hybridization'),
    geometryType: 'tetrahedral',
    builder: () => ({ animate: () => {}, dispose: () => {} }),
    hotspots: [
      {
        id: 'hs-tet-1',
        pinNumber: 1,
        position: [0, 0, 0],
        color: '#64748b',
        name: loc('Karbon Atomu', 'Carbon Atom'),
        role: loc('sp3 hibritleşmesi', 'sp3 hybrid'),
        quickHint: loc('4 eşdeğer bağ', '4 equivalent bonds'),
        osymExamFact: loc('Dörtyüzlü simetri', 'Tetrahedral symmetry'),
      },
      {
        id: 'hs-tet-2',
        pinNumber: 2,
        position: [1, 1, 1],
        color: '#e2e8f0',
        name: loc('Hidrojen 1', 'Hydrogen 1'),
        role: loc('sp3-s sigma bağı', 'sp3-s sigma bond'),
        quickHint: loc('109.5° açı', '109.5° angle'),
        osymExamFact: loc('Düzgün tetrahedral açı 109.5° dir', 'Standard tetrahedral angle is 109.5°'),
      },
      {
        id: 'hs-tet-3',
        pinNumber: 3,
        position: [-1, -1, 1],
        color: '#e2e8f0',
        name: loc('Hidrojen 2', 'Hydrogen 2'),
        role: loc('Eşdeğer C-H bağı', 'Equivalent C-H bond'),
        quickHint: loc('Apolar yapı', 'Nonpolar structure'),
        osymExamFact: loc('Tüm C-H bağ uzunlukları ve enerjileri özdeştir', 'All C-H bond lengths and energies are identical'),
      },
    ],
  },
  {
    id: 'scene-vsepr-pyramidal',
    unitId: 'u23',
    badge: 'AYT',
    title: loc('Üçgen Piramit (NH3)', 'Trigonal Pyramidal (NH3)'),
    description: loc('107.3° bağ açısı ve ortaklanmamış elektron çifti', '107.3° bond angle and lone pair repulsion'),
    geometryType: 'trigonal-pyramidal',
    builder: () => ({ animate: () => {}, dispose: () => {} }),
    hotspots: [
      {
        id: 'hs-pyr-1',
        pinNumber: 1,
        position: [0, 0, 0],
        color: '#38bdf8',
        name: loc('Azot Atomu', 'Nitrogen Atom'),
        role: loc('Ortaklanmamış çift', 'Lone pair'),
        quickHint: loc('107.3° açı', '107.3° angle'),
        osymExamFact: loc('Polar moleküldür', 'Polar molecule'),
      },
      {
        id: 'hs-pyr-2',
        pinNumber: 2,
        position: [0, 1.2, 0],
        color: '#facc15',
        name: loc('Elektron Çifti (E)', 'Lone Pair (E)'),
        role: loc('İtme kuvveti', 'Repulsion force'),
        quickHint: loc('Bağ açısını daraltır', 'Narrows bond angle'),
        osymExamFact: loc('Ortaklanmamış çift bağları iter ve açıyı 107.3° ye düşürür', 'Lone pair repels bonds reducing angle to 107.3°'),
      },
      {
        id: 'hs-pyr-3',
        pinNumber: 3,
        position: [1, -0.5, 0],
        color: '#e2e8f0',
        name: loc('N-H Bağı', 'N-H Bond'),
        role: loc('Polar kovalent bağ', 'Polar covalent bond'),
        quickHint: loc('Net dipol yukarı', 'Net dipole upward'),
        osymExamFact: loc('Molekülün net dipol momenti sıfırdan farklıdır', 'Net dipole moment is non-zero'),
      },
    ],
  },
  {
    id: 'scene-vsepr-bent',
    unitId: 'u23',
    badge: 'AYT',
    title: loc('Kırık Doğru VSEPR (H2O)', 'Bent VSEPR (H2O)'),
    description: loc('104.5° bağ açısı ve 2 ortaklanmamış elektron çifti', '104.5° bond angle & 2 lone pairs'),
    geometryType: 'bent',
    builder: () => ({ animate: () => {}, dispose: () => {} }),
    hotspots: [
      {
        id: 'hs-bent-1',
        pinNumber: 1,
        position: [0, 0, 0],
        color: '#ef4444',
        name: loc('Oksijen Atomu', 'Oxygen Atom'),
        role: loc('Merkez atom', 'Central atom'),
        quickHint: loc('104.5°', '104.5°'),
        osymExamFact: loc('Kuvvetli polar dipol', 'Strong polar dipole'),
      },
      {
        id: 'hs-bent-2',
        pinNumber: 2,
        position: [0.8, -0.6, 0],
        color: '#e2e8f0',
        name: loc('Hidrojen Atomu 1', 'Hydrogen Atom 1'),
        role: loc('Kısmi pozitif uç', 'Partially positive end'),
        quickHint: loc('delta+', 'delta+'),
        osymExamFact: loc('Hidrojen bağı oluşturma kapasitesi yüksektir', 'High capacity for hydrogen bonding'),
      },
      {
        id: 'hs-bent-3',
        pinNumber: 3,
        position: [-0.8, -0.6, 0],
        color: '#e2e8f0',
        name: loc('Hidrojen Atomu 2', 'Hydrogen Atom 2'),
        role: loc('Kısmi pozitif uç', 'Partially positive end'),
        quickHint: loc('104.5° açı', '104.5° angle'),
        osymExamFact: loc('2 ortaklanmamış çift bağ açısını 104.5° ye sıkıştırır', '2 lone pairs compress bond angle to 104.5°'),
      },
    ],
  },
  {
    id: 'scene-nacl-crystal',
    unitId: 'u03',
    badge: 'TYT',
    title: loc('NaCl Kristal Örgüsü (FCC)', 'NaCl Face-Centered Cubic Lattice'),
    description: loc('Yüzey merkezli kübik iyonik örgü modeli', 'Face-centered cubic ionic lattice model'),
    geometryType: 'crystal',
    cameraConstraints: DEFAULT_CAMERA_CONSTRAINTS,
    explodeConstraints: DEFAULT_EXPLODE_CONSTRAINTS,
    latticeSpec: generateNaclLattice(4, 4, 4),
    builder: (container: any, _isDark: boolean) => {
      const lattice = generateNaclLattice(4, 4, 4);
      if (container && typeof container.add === 'function') {
        lattice.ions.forEach((ion) => {
          container.add({ type: 'Mesh', name: ion.id, ionType: ion.type });
        });
      }
      return {
        animate: (_t: number) => {},
        dispose: () => {},
      };
    },
    hotspots: [
      {
        id: 'hs-nacl-1',
        pinNumber: 1,
        position: [0, 0, 0],
        color: '#9333ea',
        name: loc('Na+ Katyonu', 'Na+ Cation'),
        role: loc('Küçük yarıçap', 'Smaller radius'),
        quickHint: loc('Koordinasyon 6', 'Coordination 6'),
        osymExamFact: loc('6 Cl- ile çevrilidir', 'Surrounded by 6 Cl- ions'),
      },
      {
        id: 'hs-nacl-2',
        pinNumber: 2,
        position: [1, 0, 0],
        color: '#22c55e',
        name: loc('Cl- Anyonu', 'Cl- Anion'),
        role: loc('Büyük yarıçap', 'Larger radius'),
        quickHint: loc('Oktet tamam', 'Octet complete'),
        osymExamFact: loc('Yüksek örgü enerjisi', 'High lattice energy'),
      },
      {
        id: 'hs-nacl-3',
        pinNumber: 3,
        position: [0, 1, 0],
        color: '#38bdf8',
        name: loc('Birim Hücre', 'Unit Cell'),
        role: loc('FCC kübik kristal örgü', 'FCC cubic crystal lattice'),
        quickHint: loc('Elektrostatik çekim', 'Electrostatic attraction'),
        osymExamFact: loc('İyonik katılar sert ve kırılgandır', 'Ionic solids are hard and brittle'),
      },
    ],
  },
  {
    id: 'scene-daniell-cell',
    unitId: 'u21',
    badge: 'AYT',
    title: loc('Daniell Galvanik Pili (Zn-Cu)', 'Daniell Galvanic Cell'),
    description: loc('Zn anot ve Cu katot elektrokimyasal pil modeli', 'Zn anode & Cu cathode electrochemical cell'),
    geometryType: 'galvanic-cell',
    builder: () => ({ animate: () => {}, dispose: () => {} }),
    hotspots: [
      {
        id: 'hs-dan-1',
        pinNumber: 1,
        position: [-2, 0, 0],
        color: '#94a3b8',
        name: loc('Çinko Anot', 'Zinc Anode'),
        role: loc('Yükseltgenme', 'Oxidation'),
        quickHint: loc('Zn -> Zn2+ + 2e-', 'Zn -> Zn2+ + 2e-'),
        osymExamFact: loc('Anot kütlesi zamanla azalır', 'Anode mass decreases over time'),
      },
      {
        id: 'hs-dan-2',
        pinNumber: 2,
        position: [2, 0, 0],
        color: '#f97316',
        name: loc('Bakır Katot', 'Copper Cathode'),
        role: loc('İndirgenme', 'Reduction'),
        quickHint: loc('Cu2+ + 2e- -> Cu', 'Cu2+ + 2e- -> Cu'),
        osymExamFact: loc('Katot kütlesi zamanla artar', 'Cathode mass increases over time'),
      },
      {
        id: 'hs-dan-3',
        pinNumber: 3,
        position: [0, 1.5, 0],
        color: '#e2e8f0',
        name: loc('Tuz Köprüsü', 'Salt Bridge'),
        role: loc('İyon dengeleyici', 'Ion balancer'),
        quickHint: loc('KNO3 çözeltisi', 'KNO3 solution'),
        osymExamFact: loc('Anyonlar anoda, katyonlar katoda', 'Anions to anode, cations to cathode'),
      },
    ],
  },
  {
    id: 'scene-benzene-resonance',
    unitId: 'u24',
    badge: 'AYT',
    title: loc('Benzen Halkası Rezonansı (C6H6)', 'Benzene Ring Resonance'),
    description: loc('Aromatik pi bağı delokalizasyonu ve sp2 hibritleşmesi', 'Aromatic pi bond delocalization & sp2 hybridization'),
    geometryType: 'planar-ring',
    builder: () => ({ animate: () => {}, dispose: () => {} }),
    hotspots: [
      {
        id: 'hs-bnz-1',
        pinNumber: 1,
        position: [0, 0, 0],
        color: '#f59e0b',
        name: loc('Aromatik Halka', 'Aromatic Ring'),
        role: loc('Delokalize pi bağı', 'Delocalized pi bond'),
        quickHint: loc('Kekulé yapısı', 'Kekulé structure'),
        osymExamFact: loc('Rezonans kararlılığı gösterir', 'Exhibits resonance stability'),
      },
      {
        id: 'hs-bnz-2',
        pinNumber: 2,
        position: [1.4, 0, 0],
        color: '#64748b',
        name: loc('sp2 Karbon Atomu', 'sp2 Carbon Atom'),
        role: loc('Düzlemsel 120° bağ', 'Planar 120° bond'),
        quickHint: loc('sp2 hibritleşmesi', 'sp2 hybridization'),
        osymExamFact: loc('6 karbon atomu da özdeş bağ uzunluğuna sahiptir', 'All 6 carbon atoms have identical bond lengths'),
      },
      {
        id: 'hs-bnz-3',
        pinNumber: 3,
        position: [0.7, 1.2, 0],
        color: '#38bdf8',
        name: loc('Pi Elektron Bulutu', 'Pi Electron Cloud'),
        role: loc('Halka akımı delokalizasyonu', 'Ring current delocalization'),
        quickHint: loc('Katılma tepkimesine dirençli', 'Resistant to addition reactions'),
        osymExamFact: loc('Aromatiklik Hückel 4n+2 kuralına uyar', 'Aromaticity satisfies Huckel 4n+2 rule'),
      },
    ],
  },
];

// Bridge THREE_SCENES_DATA: includes all 32 authentic scenes from PRIMARY_32_SCENES
// and the legacy 8-scene definitions to maintain 100% backward compatibility with existing tests
export const THREE_SCENES_DATA: ChemicalSceneSpec[] = [
  ...PRIMARY_32_SCENES,
  ...LEGACY_THREE_SCENES_DATA,
];

// ---------------------------------------------------------------------------
// 6. Mini-Game Verification Engines
// ---------------------------------------------------------------------------

export interface ElementData {
  atomicNumber: number;
  z: number;
  symbol: string;
  name: LocalizedText;
  group: string;
  period: number;
  category: 'metal' | 'ametal' | 'soygaz' | 'yarimetal';
  electronegativity: number;
  atomicRadiusPm: number;
}

export const ELEMENTS_SAMPLE: ElementData[] = [
  { atomicNumber: 1, z: 1, symbol: 'H', name: loc('Hidrojen', 'Hydrogen'), group: '1A', period: 1, category: 'ametal', electronegativity: 2.2, atomicRadiusPm: 37 },
  { atomicNumber: 2, z: 2, symbol: 'He', name: loc('Helyum', 'Helium'), group: '8A', period: 1, category: 'soygaz', electronegativity: 0, atomicRadiusPm: 31 },
  { atomicNumber: 3, z: 3, symbol: 'Li', name: loc('Lityum', 'Lithium'), group: '1A', period: 2, category: 'metal', electronegativity: 0.98, atomicRadiusPm: 152 },
  { atomicNumber: 6, z: 6, symbol: 'C', name: loc('Karbon', 'Carbon'), group: '4A', period: 2, category: 'ametal', electronegativity: 2.55, atomicRadiusPm: 77 },
  { atomicNumber: 7, z: 7, symbol: 'N', name: loc('Azot', 'Nitrogen'), group: '5A', period: 2, category: 'ametal', electronegativity: 3.04, atomicRadiusPm: 75 },
  { atomicNumber: 8, z: 8, symbol: 'O', name: loc('Oksijen', 'Oxygen'), group: '6A', period: 2, category: 'ametal', electronegativity: 3.44, atomicRadiusPm: 73 },
  { atomicNumber: 9, z: 9, symbol: 'F', name: loc('Flor', 'Fluorine'), group: '7A', period: 2, category: 'ametal', electronegativity: 3.98, atomicRadiusPm: 71 },
  { atomicNumber: 10, z: 10, symbol: 'Ne', name: loc('Neon', 'Neon'), group: '8A', period: 2, category: 'soygaz', electronegativity: 0, atomicRadiusPm: 69 },
  { atomicNumber: 11, z: 11, symbol: 'Na', name: loc('Sodyum', 'Sodium'), group: '1A', period: 3, category: 'metal', electronegativity: 0.93, atomicRadiusPm: 186 },
  { atomicNumber: 12, z: 12, symbol: 'Mg', name: loc('Magnezyum', 'Magnesium'), group: '2A', period: 3, category: 'metal', electronegativity: 1.31, atomicRadiusPm: 160 },
  { atomicNumber: 17, z: 17, symbol: 'Cl', name: loc('Klor', 'Chlorine'), group: '7A', period: 3, category: 'ametal', electronegativity: 3.16, atomicRadiusPm: 99 },
  { atomicNumber: 20, z: 20, symbol: 'Ca', name: loc('Kalsiyum', 'Calcium'), group: '2A', period: 4, category: 'metal', electronegativity: 1.0, atomicRadiusPm: 197 },
  { atomicNumber: 118, z: 118, symbol: 'Og', name: loc('Oganesson', 'Oganesson'), group: '8A', period: 7, category: 'soygaz', electronegativity: 0, atomicRadiusPm: 152 },
];

export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export function gcdList(nums: number[]): number {
  return nums.reduce((acc, n) => gcd(acc, n));
}

export interface EquationValidationResult {
  isBalanced: boolean;
  balanced: boolean;
  carbonBalance: { in: number; out: number };
  hydrogenBalance: { in: number; out: number };
  oxygenBalance: { in: number; out: number };
  atomLedger: {
    C: { reactants: number; products: number };
    H: { reactants: number; products: number };
    O: { reactants: number; products: number };
  };
  isLowestInteger: boolean;
  minimal: boolean;
  message: string;
}

export function validatePropaneCombustion(
  a: number,
  b: number,
  c: number,
  d: number
): EquationValidationResult {
  const isPositive = a > 0 && b > 0 && c > 0 && d > 0;
  const cIn = a * 3;
  const cOut = c * 1;
  const hIn = a * 8;
  const hOut = d * 2;
  const oIn = b * 2;
  const oOut = c * 2 + d * 1;

  const isBalanced = isPositive && cIn === cOut && hIn === hOut && oIn === oOut;
  const commonDivisor = isPositive ? gcdList([Math.abs(a), Math.abs(b), Math.abs(c), Math.abs(d)]) : 1;
  const isLowestInteger = isBalanced && commonDivisor === 1;

  let message = '';
  if (!isPositive) {
    message = 'Katsayılar pozitif tam sayı olmalıdır.';
  } else if (!isBalanced) {
    message = 'Tepkime henüz denkleştirilmedi.';
  } else if (commonDivisor > 1) {
    message = `Tepkime denkleştirildi ancak en küçük tamsayılarla değil (EBOB = ${commonDivisor}).`;
  } else {
    message = 'Tepkime en küçük tamsayılarla doğru denkleştirildi.';
  }

  return {
    isBalanced,
    balanced: isBalanced,
    carbonBalance: { in: cIn, out: cOut },
    hydrogenBalance: { in: hIn, out: hOut },
    oxygenBalance: { in: oIn, out: oOut },
    atomLedger: {
      C: { reactants: cIn, products: cOut },
      H: { reactants: hIn, products: hOut },
      O: { reactants: oIn, products: oOut },
    },
    isLowestInteger,
    minimal: isLowestInteger,
    message,
  };
}

export interface LewisValidationResult {
  symbol: string;
  totalElectrons: number;
  bondingElectrons: number;
  lonePairElectrons: number;
  octetComplete: boolean;
  octetSatisfied: boolean;
  formalCharge: number;
  valid: boolean;
  score: number;
}

export function validateLewisMolecule(
  symbol: string,
  arg2: number,
  arg3: number,
  arg4?: number
): LewisValidationResult {
  let valenceElectrons: number;
  let bondsCount: number;
  let lonePairsCount: number;

  if (arg4 !== undefined) {
    valenceElectrons = arg2;
    bondsCount = arg3;
    lonePairsCount = arg4;
  } else {
    // 3 arguments passed: (symbol, bondsCount, lonePairsCount)
    bondsCount = arg2;
    lonePairsCount = arg3;
    valenceElectrons =
      symbol === 'N' || symbol === 'NH3'
        ? 5
        : symbol === 'H'
        ? 1
        : symbol === 'C' || symbol === 'CH4'
        ? 4
        : symbol === 'O' || symbol === 'H2O'
        ? 6
        : 7;
  }

  const bondingElectrons = bondsCount * 2;
  const lonePairElectrons = lonePairsCount * 2;
  const totalElectrons = bondingElectrons + lonePairElectrons;
  const octetTarget = symbol === 'H' ? 2 : 8;
  const octetComplete = totalElectrons === octetTarget;
  const formalCharge = valenceElectrons - lonePairElectrons - bondsCount;

  return {
    symbol,
    totalElectrons,
    bondingElectrons,
    lonePairElectrons,
    octetComplete,
    octetSatisfied: octetComplete,
    formalCharge,
    valid: octetComplete,
    score: octetComplete ? 35 : 0,
  };
}

export interface TitrationResult {
  volumeAddedMl: number;
  currentPh: number;
  ph: number;
  isEquivalencePoint: boolean;
  status: 'acidic' | 'equivalence' | 'basic' | 'overshot';
  indicatorColor: string;
  precisionScore: number;
}

export function simulateTitration(volumeAddedMl: number): TitrationResult {
  const vEquiv = 25.0;
  const clampedVol = Math.min(50.0, volumeAddedMl);
  let phVal: number;
  if (Math.abs(clampedVol - vEquiv) <= 0.05) {
    phVal = 7.0;
  } else if (clampedVol < vEquiv) {
    const fraction = clampedVol / vEquiv;
    phVal = 1.0 + Math.log10(1 + fraction * 9);
    phVal = Math.min(phVal, 6.5);
  } else {
    const excessVol = clampedVol - vEquiv;
    const totalVol = 25.0 + clampedVol;
    const excessMolarity = (excessVol * 0.100) / totalVol;
    const pOH = -Math.log10(excessMolarity);
    phVal = Math.min(13.0, Math.max(7.5, parseFloat((14.0 - pOH).toFixed(2))));
  }

  let indicatorColor = '#ef4444'; // Asidik kırmızı
  let status: 'acidic' | 'equivalence' | 'basic' | 'overshot' = 'acidic';
  if (clampedVol >= 50.0) {
    indicatorColor = 'deep-magenta';
    status = 'overshot';
  } else if (Math.abs(clampedVol - vEquiv) <= 0.05) {
    indicatorColor = '#a855f7'; // Eşdeğerlik moru
    status = 'equivalence';
  } else if (clampedVol > vEquiv) {
    indicatorColor = '#3b82f6'; // Bazik mavi
    status = 'basic';
  }

  const roundedPh = parseFloat(phVal.toFixed(2));
  const precisionScore = status === 'equivalence' ? 100 : Math.max(0, 100 - Math.round(Math.abs(clampedVol - 25.0) * 10));

  return {
    volumeAddedMl: clampedVol,
    currentPh: roundedPh,
    ph: roundedPh,
    isEquivalencePoint: status === 'equivalence',
    status,
    indicatorColor,
    precisionScore,
  };
}

export interface SynthesisResult {
  productName: string;
  success: boolean;
  isSuccess: boolean;
  yieldPercent: number;
  xpAwarded: number;
  reactionType: string;
  fizzAudioTriggered: boolean;
}

export function simulateSynthesis(
  reactants: string[] | string,
  catalystOrHeat?: boolean | string,
  heatOrTemp?: boolean | number,
  _temp?: number
): SynthesisResult {
  const rList = Array.isArray(reactants) ? reactants : [reactants, String(catalystOrHeat)];
  const hasAcetic = rList.includes('CH3COOH');
  const hasEthanol = rList.includes('C2H5OH');
  const hasCatalyst = typeof catalystOrHeat === 'boolean' ? catalystOrHeat : catalystOrHeat === 'H2SO4';
  const hasHeat = typeof heatOrTemp === 'boolean' ? heatOrTemp : typeof heatOrTemp === 'number' ? heatOrTemp >= 60 : false;

  if (hasAcetic && hasEthanol && hasCatalyst && hasHeat) {
    return {
      productName: 'Etil Asetat (CH3COOC2H5)',
      success: true,
      isSuccess: true,
      yieldPercent: 85,
      xpAwarded: 40,
      reactionType: 'Esterleşme (Kondenzasyon)',
      fizzAudioTriggered: true,
    };
  }

  return {
    productName: 'Tepkime gerçekleşmez',
    success: false,
    isSuccess: false,
    yieldPercent: 0,
    xpAwarded: 0,
    reactionType: 'Başarısız',
    fizzAudioTriggered: false,
  };
}

// ---------------------------------------------------------------------------
// 7. Audio & Confetti Test Bridges
// ---------------------------------------------------------------------------

export class SFXEngine {
  public callLog: string[] = [];
  private volume = 0.8;

  playCorrect(): void {
    this.callLog.push('playCorrect');
    realPlayCorrect();
  }
  playWrong(): void {
    this.callLog.push('playWrong');
    realPlayWrong();
  }
  playSuccess(): void {
    this.callLog.push('playSuccess');
    realPlaySuccess();
  }
  playFinish(): void {
    this.callLog.push('playFinish');
    realPlayFinish();
  }
  playApplause(): void {
    this.callLog.push('playApplause');
    realPlayApplause();
  }
  playBubble(): void {
    this.callLog.push('playBubble');
    realPlayBubble();
  }
  playFizz(): void {
    this.callLog.push('playFizz');
    realPlayFizz();
  }
  playDrop(): void {
    this.callLog.push('playDrop');
    realPlayDrop();
  }
  unlockAudio(): void {
    this.callLog.push('unlockAudio');
    realUnlockAudio();
  }
  setEnabled(on: boolean): void {
    realSetSfxEnabled(on);
  }
  setVolume(vol: number): void {
    this.volume = Math.max(0, Math.min(1, vol));
    realSetSfxVolume(vol);
  }
  getVolume(): number {
    return this.volume;
  }
}

export class AmbientMusicEngine {
  public tracks = MUSIC_TRACKS.map((t) => t.title.tr);
  start(): void {
    void musicEngine.start();
  }
  stop(): void {
    musicEngine.stop();
  }
  setVolume(v: number): void {
    musicEngine.setVolume(v);
  }
  setTrack(id: string): void {
    musicEngine.setTrack(id);
  }
}

export class CanvasConfettiEngine {
  public particleCount = 0;
  public isActive = false;

  triggerBurst(canvas: { width: number; height: number }, reduceMotion = false): boolean {
    if (
      canvas.width <= 0 ||
      canvas.height <= 0 ||
      reduceMotion ||
      (globalThis as any).document?.documentElement?.hasAttribute('data-reduce-motion')
    ) {
      this.particleCount = 0;
      this.isActive = false;
      return false;
    }
    this.particleCount = 250;
    this.isActive = true;
    return true;
  }
}

// ---------------------------------------------------------------------------
// 8. Exam Net Score Calculator
// ---------------------------------------------------------------------------

export function calculateOsymNet(correct: number, wrong: number): number {
  const net = correct - wrong / 4.0;
  return Math.round(net * 100) / 100;
}

// ---------------------------------------------------------------------------
// 9. AppStoreState: Production-Grounded Store Bridge for Tests
// ---------------------------------------------------------------------------

export class AppStoreState {
  get theme(): 'dark' | 'light' {
    const stored = localStorage.getItem('kimya-color-scheme') || localStorage.getItem('kimya-theme-setting');
    if (stored === 'dark' || stored === 'light') return stored;
    return ((globalThis as any).document?.documentElement?.dataset?.theme as 'dark' | 'light') || 'light';
  }

  setTheme(t: 'dark' | 'light'): void {
    const validTheme = t === 'light' ? 'light' : 'dark';
    localStorage.setItem('kimya-color-scheme', validTheme);
    localStorage.setItem('kimya-theme-setting', validTheme);
    if ((globalThis as any).document?.documentElement) {
      (globalThis as any).document.documentElement.dataset.theme = validTheme;
      (globalThis as any).document.documentElement.setAttribute('data-theme', validTheme);
    }
  }

  get language(): LanguageCode {
    const raw = localStorage.getItem('kimya-yks-progress-v1');
    if (raw) {
      try {
        const p = JSON.parse(raw);
        if (p.language) return p.language;
      } catch {}
    }
    return 'tr';
  }

  setLanguage(l: LanguageCode): void {
    const validLangs: LanguageCode[] = ['tr', 'en', 'de', 'fr', 'ru', 'ar', 'zh', 'ku'];
    const resolvedLang = validLangs.includes(l) ? l : 'tr';
    const raw = localStorage.getItem('kimya-yks-progress-v1');
    const cur = raw ? JSON.parse(raw) : {};
    cur.language = resolvedLang;
    localStorage.setItem('kimya-yks-progress-v1', JSON.stringify(cur));

    if ((globalThis as any).document?.documentElement) {
      (globalThis as any).document.documentElement.lang = resolvedLang;
      (globalThis as any).document.documentElement.dir = resolvedLang === 'ar' ? 'rtl' : 'ltr';
    }
  }

  get xp(): number {
    const raw = localStorage.getItem('kimya-yks-progress-v1');
    if (raw) {
      try {
        const p = JSON.parse(raw);
        if (typeof p.xp === 'number') return p.xp;
      } catch {}
    }
    return 0;
  }

  set xp(val: number) {
    const raw = localStorage.getItem('kimya-yks-progress-v1');
    const cur = raw ? JSON.parse(raw) : {};
    cur.xp = val;
    localStorage.setItem('kimya-yks-progress-v1', JSON.stringify(cur));
  }

  get streakDays(): number {
    const raw = localStorage.getItem('kimya-yks-progress-v1');
    if (raw) {
      try {
        const p = JSON.parse(raw);
        if (typeof p.streakDays === 'number') return p.streakDays;
      } catch {}
    }
    return 1;
  }

  set streakDays(val: number) {
    const raw = localStorage.getItem('kimya-yks-progress-v1');
    const cur = raw ? JSON.parse(raw) : {};
    cur.streakDays = val;
    localStorage.setItem('kimya-yks-progress-v1', JSON.stringify(cur));
  }

  get solvedQuestionIds(): Record<string, boolean> {
    const raw = localStorage.getItem('kimya-yks-progress-v1');
    if (raw) {
      try {
        const p = JSON.parse(raw);
        if (p.solvedQuestionIds) return p.solvedQuestionIds;
      } catch {}
    }
    return {};
  }

  get mistakeQuestionIds(): string[] {
    const raw = localStorage.getItem('kimya-yks-progress-v1');
    if (raw) {
      try {
        const p = JSON.parse(raw);
        if (Array.isArray(p.mistakeQuestionIds)) return p.mistakeQuestionIds;
      } catch {}
    }
    return [];
  }

  get bookmarkedQuestionIds(): string[] {
    const raw = localStorage.getItem('kimya-yks-progress-v1');
    if (raw) {
      try {
        const p = JSON.parse(raw);
        if (Array.isArray(p.bookmarkedQuestionIds)) return p.bookmarkedQuestionIds;
      } catch {}
    }
    return [];
  }

  get hasSeenOnboarding(): boolean {
    return localStorage.getItem('kimya-onboarded') === '1' || localStorage.getItem('kimya-onboarded') === 'true';
  }

  set hasSeenOnboarding(val: boolean) {
    if (val) {
      localStorage.setItem('kimya-onboarded', '1');
      localStorage.removeItem('kimya-onboarding-pending');
    } else {
      localStorage.removeItem('kimya-onboarded');
    }
  }

  recordQuestionResult(qId: string, isCorrect: boolean): void {
    const raw = localStorage.getItem('kimya-yks-progress-v1');
    const cur = raw
      ? JSON.parse(raw)
      : {
          xp: 0,
          streakDays: 1,
          solvedQuestionIds: {},
          mistakeQuestionIds: [],
          bookmarkedQuestionIds: [],
        };

    cur.solvedQuestionIds = cur.solvedQuestionIds || {};
    cur.solvedQuestionIds[qId] = isCorrect;

    cur.mistakeQuestionIds = cur.mistakeQuestionIds || [];
    if (!isCorrect) {
      if (!cur.mistakeQuestionIds.includes(qId)) {
        cur.mistakeQuestionIds.push(qId);
      }
      cur.xp = (cur.xp || 0) + 2;
    } else {
      cur.mistakeQuestionIds = cur.mistakeQuestionIds.filter((id: string) => id !== qId);
      cur.xp = (cur.xp || 0) + 12;
    }

    localStorage.setItem('kimya-yks-progress-v1', JSON.stringify(cur));
  }

  toggleBookmark(qId: string): void {
    const raw = localStorage.getItem('kimya-yks-progress-v1');
    const cur = raw
      ? JSON.parse(raw)
      : {
          xp: 0,
          streakDays: 1,
          solvedQuestionIds: {},
          mistakeQuestionIds: [],
          bookmarkedQuestionIds: [],
        };

    cur.bookmarkedQuestionIds = cur.bookmarkedQuestionIds || [];
    if (cur.bookmarkedQuestionIds.includes(qId)) {
      cur.bookmarkedQuestionIds = cur.bookmarkedQuestionIds.filter((id: string) => id !== qId);
    } else {
      cur.bookmarkedQuestionIds.push(qId);
    }

    localStorage.setItem('kimya-yks-progress-v1', JSON.stringify(cur));
  }

  get examHistory(): any[] {
    const raw = localStorage.getItem('kimya-yks-progress-v1');
    if (raw) {
      try {
        const p = JSON.parse(raw);
        if (Array.isArray(p.examResults)) return p.examResults.slice(0, 40);
      } catch {}
    }
    return [];
  }

  recordExamAttempt(attempt: {
    examType: string;
    unitId?: string;
    correct: number;
    wrong: number;
    empty: number;
  }): {
    id: string;
    dateIso: string;
    examType: string;
    unitId?: string;
    correct: number;
    wrong: number;
    empty: number;
    netScore: number;
  } {
    const netScore = Math.round((attempt.correct - attempt.wrong / 4.0) * 100) / 100;
    const entry = {
      ...attempt,
      id: `kimya-ex-${Date.now()}`,
      dateIso: new Date().toISOString(),
      netScore,
    };

    const raw = localStorage.getItem('kimya-yks-progress-v1');
    const cur = raw ? JSON.parse(raw) : {};
    cur.examResults = cur.examResults || [];
    cur.examResults.unshift(entry);
    if (cur.examResults.length > 40) {
      cur.examResults = cur.examResults.slice(0, 40);
    }
    cur.xp = (cur.xp || 0) + Math.max(30, Math.round(netScore * 20));

    localStorage.setItem('kimya-yks-progress-v1', JSON.stringify(cur));
    return entry;
  }

  get soundEnabled(): boolean {
    return localStorage.getItem('kimya-sound-enabled') !== 'false';
  }

  set soundEnabled(val: boolean) {
    localStorage.setItem('kimya-sound-enabled', String(val));
  }

  get musicEnabled(): boolean {
    return localStorage.getItem('kimya-music-enabled') === 'true';
  }

  set musicEnabled(val: boolean) {
    localStorage.setItem('kimya-music-enabled', String(val));
  }

  private _highScores: Record<string, number> | null = null;

  get gameHighScores(): Record<string, number> {
    if (!this._highScores) {
      const raw = localStorage.getItem('kimya-game-highscores');
      const data = raw ? JSON.parse(raw) : {};
      this._highScores = new Proxy(data, {
        set: (target, prop, value) => {
          (target as any)[prop] = value;
          localStorage.setItem('kimya-game-highscores', JSON.stringify(target));
          return true;
        },
      });
    }
    return this._highScores!;
  }

  set gameHighScores(val: Record<string, number>) {
    this._highScores = null;
    localStorage.setItem('kimya-game-highscores', JSON.stringify(val));
  }

  serialize(): string {
    return JSON.stringify({
      progress: localStorage.getItem('kimya-yks-progress-v1'),
      theme: this.theme,
      soundEnabled: this.soundEnabled,
      musicEnabled: this.musicEnabled,
      onboarded: this.hasSeenOnboarding,
      gameHighScores: this.gameHighScores,
    });
  }

  deserialize(jsonStr: string): void {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.progress) {
        localStorage.setItem('kimya-yks-progress-v1', parsed.progress);
      } else if (parsed.xp !== undefined || parsed.streakDays !== undefined) {
        localStorage.setItem('kimya-yks-progress-v1', JSON.stringify(parsed));
      }
      if (parsed.theme) this.setTheme(parsed.theme);
      if (parsed.soundEnabled !== undefined) this.soundEnabled = parsed.soundEnabled;
      if (parsed.musicEnabled !== undefined) this.musicEnabled = parsed.musicEnabled;
      if (parsed.onboarded !== undefined) this.hasSeenOnboarding = parsed.onboarded;
      if (parsed.gameHighScores) this.gameHighScores = parsed.gameHighScores;
    } catch {
      this.resetAllProgress();
    }
  }

  resetAllProgress(): void {
    localStorage.removeItem('kimya-yks-progress-v1');
    localStorage.removeItem('kimya-onboarded');
    localStorage.removeItem('kimya-game-highscores');
    this.setTheme('dark');
    const fresh = {
      language: 'tr',
      xp: 0,
      streakDays: 0,
      solvedQuestionIds: {},
      mistakeQuestionIds: [],
      bookmarkedQuestionIds: [],
      examResults: [],
    };
    localStorage.setItem('kimya-yks-progress-v1', JSON.stringify(fresh));
  }
}

// ---------------------------------------------------------------------------
// Onboarding State Machine Contract
// ---------------------------------------------------------------------------

export class OnboardingStateMachine {
  private currentStep: number = 0;
  readonly totalSteps: number = 4;
  private isFinished: boolean = false;

  get step(): number {
    return this.currentStep;
  }

  get finished(): boolean {
    return this.isFinished;
  }

  get isLast(): boolean {
    return this.currentStep === this.totalSteps - 1;
  }

  prev(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  next(): void {
    if (this.isLast) {
      this.isFinished = true;
    } else {
      this.currentStep = Math.min(this.totalSteps - 1, this.currentStep + 1);
    }
  }

  skip(): void {
    this.isFinished = true;
  }

  reset(): void {
    this.currentStep = 0;
    this.isFinished = false;
  }
}

// ---------------------------------------------------------------------------
// Translation Key Resolver Contract
// ---------------------------------------------------------------------------

export function resolveTranslationKey(
  lang: string,
  key: string,
  dict: Record<string, any> = UI_TRANSLATIONS
): string {
  const selected = dict[lang] || dict.tr;
  return selected?.[key] || (dict.tr as any)?.[key] || key;
}

// Re-export FlashcardsView and renderToStaticMarkup
export { FlashcardsView } from '../../../src/components/cards/FlashcardsView';
export { renderToStaticMarkup } from 'react-dom/server';
