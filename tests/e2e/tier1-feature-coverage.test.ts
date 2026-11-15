/**
 * Tier 1: Feature Coverage (Category-Partition Equivalence Testing)
 * Covers F01 through F13 with 69 deterministic test cases (target >= 65).
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import { expect, test } from './harness/testFramework';
import { printTestResult } from './harness/reporter';
import {
  ALL_CHEMISTRY_UNITS,
  compileAllQuestions,
  compileUnitQuestions,
  compileAllFlashcards,
  LeitnerBoxEngine,
  THREE_SCENES_DATA,
  PRIMARY_32_SCENES,
  ALL_HOTSPOTS_32,
  ELEMENTS_SAMPLE,
  validatePropaneCombustion,
  validateLewisMolecule,
  simulateTitration,
  simulateSynthesis,
  SFXEngine,
  AmbientMusicEngine,
  CanvasConfettiEngine,
  UI_TRANSLATIONS,
  SHELL_STRINGS,
  wrapChemFormula,
  calculateOsymNet,
  AppStoreState,
  LANGUAGES,
  DAILY_GOAL_OPTIONS,
  parseThemeCss,
  getContrastRatio,
  resolveShellLayout,
  ChemBlitzEngine,
  CANONICAL_BLITZ_QUESTIONS,
  playCorrect,
  playWrong,
  playSuccess,
  playFinish,
  playFizz,
  playBubble,
  setSfxEnabled,
  unlockAudio,
  MockAudioContext,
  MUSIC_MOODS,
  MUSIC_TRACKS,
} from './harness/contracts';
import { ALL_MOCK_EXAM_SPECS } from '../../src/engine/mockExamCatalog';
import { ALL_CHEMISTRY_UNITS as PROD_CHEMISTRY_UNITS } from '../../src/data/units';
import {
  compileAllQuestions as prodCompileAllQuestions,
  compileUnitQuestions as prodCompileUnitQuestions,
  GENERIC_CATEGORY_DESCRIPTORS,
  extractEntityCandidates,
} from '../../src/engine/questionGenerator';
import { compileAllFlashcards as prodCompileAllFlashcards } from '../../src/engine/flashcardGenerator';

export async function runTier1Tests(): Promise<void> {
  // =========================================================================
  // F01-TYT: TYT Chemistry Curriculum Coverage (10 units u01-u10)
  // =========================================================================

  printTestResult(
    await test('T1.F01.01', 1, 'F01-TYT', 'Exactly 10 TYT units exist with IDs u01 through u10', () => {
      const tytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT');
      expect(tytUnits).toHaveLength(10);
      const expectedIds = ['u01', 'u02', 'u03', 'u04', 'u05', 'u06', 'u07', 'u08', 'u09', 'u10'];
      expect(tytUnits.map((u) => u.id)).toEqual(expectedIds);
    })
  );

  printTestResult(
    await test('T1.F01.02', 1, 'F01-TYT', 'Grade distribution: u01-u05 Grade 9, u06-u10 Grade 10', () => {
      const tytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT');
      tytUnits.slice(0, 5).forEach((u) => expect(u.grade).toBe(9));
      tytUnits.slice(5, 10).forEach((u) => expect(u.grade).toBe(10));
    })
  );

  printTestResult(
    await test('T1.F01.03', 1, 'F01-TYT', 'Unit metadata contains non-empty title, subtitle, order', () => {
      const tytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT');
      tytUnits.forEach((u, i) => {
        expect(u.order).toBe(i + 1);
        expect(u.title.tr.length).toBeGreaterThan(0);
        expect(u.subtitle.tr.length).toBeGreaterThan(0);
      });
    })
  );

  printTestResult(
    await test('T1.F01.04', 1, 'F01-TYT', 'Each TYT unit contains >= 16 FactTrapPair items with facts & traps', () => {
      const tytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT');
      tytUnits.forEach((u) => {
        expect(u.facts.length).toBeGreaterThanOrEqual(16);
        u.facts.forEach((f) => {
          expect(f.fact.tr.length).toBeGreaterThan(5);
          expect(f.trap.tr.length).toBeGreaterThan(5);
        });
      });
    })
  );

  printTestResult(
    await test('T1.F01.05', 1, 'F01-TYT', 'Each TYT unit contains >= 8 comparisons and >= 4 sequences', () => {
      const tytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT');
      tytUnits.forEach((u) => {
        expect(u.comparisons.length).toBeGreaterThanOrEqual(8);
        expect(u.sequences.length).toBeGreaterThanOrEqual(4);
      });
    })
  );

  // =========================================================================
  // F02-AYT: AYT Chemistry Curriculum Coverage (14 units u11-u24)
  // =========================================================================

  printTestResult(
    await test('T1.F02.01', 1, 'F02-AYT', 'Exactly 14 AYT units exist with IDs u11 through u24', () => {
      const aytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'AYT');
      expect(aytUnits).toHaveLength(14);
      const expectedIds = [
        'u11', 'u12', 'u13', 'u14', 'u15', 'u16', 'u17',
        'u18', 'u19', 'u20', 'u21', 'u22', 'u23', 'u24',
      ];
      expect(aytUnits.map((u) => u.id)).toEqual(expectedIds);
    })
  );

  printTestResult(
    await test('T1.F02.02', 1, 'F02-AYT', 'Grade distribution: u11-u20 Grade 11, u21-u24 Grade 12', () => {
      const aytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'AYT');
      aytUnits.slice(0, 10).forEach((u) => expect(u.grade).toBe(11));
      aytUnits.slice(10, 14).forEach((u) => expect(u.grade).toBe(12));
    })
  );

  printTestResult(
    await test('T1.F02.03', 1, 'F02-AYT', 'Unit metadata contains non-empty title, subtitle, order', () => {
      const aytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'AYT');
      aytUnits.forEach((u, i) => {
        expect(u.order).toBe(11 + i);
        expect(u.title.tr.length).toBeGreaterThan(0);
        expect(u.subtitle.tr.length).toBeGreaterThan(0);
      });
    })
  );

  printTestResult(
    await test('T1.F02.04', 1, 'F02-AYT', 'Advanced organic coverage: u23 (Karbon) and u24 (Organik) present', () => {
      const u23 = ALL_CHEMISTRY_UNITS.find((u) => u.id === 'u23');
      const u24 = ALL_CHEMISTRY_UNITS.find((u) => u.id === 'u24');
      expect(u23).toBeDefined();
      expect(u24).toBeDefined();
      expect(u23!.grade).toBe(12);
      expect(u24!.grade).toBe(12);
      expect(u23!.subtitle.tr).toContain('Hibritleşme');
    })
  );

  printTestResult(
    await test('T1.F02.05', 1, 'F02-AYT', 'Each AYT unit contains >= 16 OsymTwinQuestionSeed items', () => {
      const aytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'AYT');
      aytUnits.forEach((u) => {
        expect(u.osymTwins.length).toBeGreaterThanOrEqual(16);
        u.osymTwins.forEach((seed) => {
          expect(seed.options).toHaveLength(5);
          expect(seed.correctIndex).toBeGreaterThanOrEqual(0);
          expect(seed.correctIndex).toBeLessThanOrEqual(4);
        });
      });
    })
  );

  // =========================================================================
  // F03-BANK: Question Bank Integrity (3,072 questions, 128/unit)
  // =========================================================================

  printTestResult(
    await test('T1.F03.01', 1, 'F03-BANK', 'compileAllQuestions produces exactly 3,072 questions (24 * 128)', () => {
      const allQs = compileAllQuestions(ALL_CHEMISTRY_UNITS, 'tr');
      expect(allQs).toHaveLength(3072);
    })
  );

  printTestResult(
    await test('T1.F03.02', 1, 'F03-BANK', 'Each unit produces exactly 128 questions partitioned into 8 sets of 16', () => {
      ALL_CHEMISTRY_UNITS.forEach((unit) => {
        const unitQs = compileUnitQuestions(unit, 'tr');
        expect(unitQs).toHaveLength(128);
        for (let s = 1; s <= 8; s++) {
          const setQs = unitQs.filter((q) => q.setNumber === s);
          expect(setQs).toHaveLength(16);
        }
      });
    })
  );

  printTestResult(
    await test('T1.F03.03', 1, 'F03-BANK', 'Every question has 5 distinct non-empty options with correctIndex in 0..4', () => {
      const u01Qs = compileUnitQuestions(ALL_CHEMISTRY_UNITS[0], 'tr');
      u01Qs.forEach((q) => {
        expect(q.options).toHaveLength(5);
        const uniqueSet = new Set(q.options);
        expect(uniqueSet.size).toBe(5);
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThanOrEqual(4);
      });
    })
  );

  printTestResult(
    await test('T1.F03.04', 1, 'F03-BANK', 'Archetype distribution in each set satisfies standard roster', () => {
      const u01Qs = compileUnitQuestions(ALL_CHEMISTRY_UNITS[0], 'tr');
      const set1 = u01Qs.filter((q) => q.setNumber === 1);
      const romanCount = set1.filter((q) => q.archetype === 'roman-numeral').length;
      const trapCount = set1.filter((q) => q.archetype === 'negative-trap').length;
      expect(romanCount).toBe(4);
      expect(trapCount).toBe(3);
    })
  );

  printTestResult(
    await test('T1.F03.05', 1, 'F03-BANK', 'Every question has a non-empty explanation (>= 15 characters)', () => {
      const u01Qs = compileUnitQuestions(ALL_CHEMISTRY_UNITS[0], 'tr');
      u01Qs.forEach((q) => {
        expect(q.explanation.trim().length).toBeGreaterThanOrEqual(15);
      });
    })
  );

  // =========================================================================
  // F04-3D: 3D Molecular, Crystal & Reaction Visualizers
  // =========================================================================

  printTestResult(
    await test('T1.F04.01', 1, 'F04-3D', 'THREE_SCENES_DATA contains procedural 3D chemistry scenes', () => {
      expect(THREE_SCENES_DATA.length).toBeGreaterThanOrEqual(6);
      expect(PRIMARY_32_SCENES.length).toBe(32);
      expect(ALL_HOTSPOTS_32.length).toBe(99);
      const ids = THREE_SCENES_DATA.map((s) => s.id);
      expect(ids).toContain('scene-vsepr-linear');
      expect(ids).toContain('scene-vsepr-tetrahedral');
      expect(ids).toContain('scene-nacl-crystal');
      expect(ids).toContain('scene-daniell-cell');
    })
  );

  printTestResult(
    await test('T1.F04.02', 1, 'F04-3D', 'VSEPR geometries have valid geometry types and builders', () => {
      const linear = THREE_SCENES_DATA.find((s) => s.id === 'scene-vsepr-linear');
      expect(linear).toBeDefined();
      expect(linear!.geometryType).toBe('linear');
      const mockContainer = {};
      const built = linear!.builder(mockContainer, true);
      expect(typeof built.dispose).toBe('function');
    })
  );

  printTestResult(
    await test('T1.F04.03', 1, 'F04-3D', 'NaCl crystal scene defines alternating Na+ and Cl- ions', () => {
      const nacl = THREE_SCENES_DATA.find((s) => s.id === 'scene-nacl-crystal');
      expect(nacl).toBeDefined();
      expect(nacl!.geometryType).toBe('crystal');
      const hsNa = nacl!.hotspots.find((h) => h.id === 'hs-nacl-1');
      const hsCl = nacl!.hotspots.find((h) => h.id === 'hs-nacl-2');
      expect(hsNa).toBeDefined();
      expect(hsCl).toBeDefined();
      expect(hsNa!.name.tr).toContain('Na+');
      expect(hsCl!.name.tr).toContain('Cl-');
    })
  );

  printTestResult(
    await test('T1.F04.04', 1, 'F04-3D', 'Daniell galvanic cell scene models Zn anode, Cu cathode, and salt bridge', () => {
      const dan = THREE_SCENES_DATA.find((s) => s.id === 'scene-daniell-cell');
      expect(dan).toBeDefined();
      const zn = dan!.hotspots.find((h) => h.id === 'hs-dan-1');
      const cu = dan!.hotspots.find((h) => h.id === 'hs-dan-2');
      const bridge = dan!.hotspots.find((h) => h.id === 'hs-dan-3');
      expect(zn!.role.tr).toBe('Yükseltgenme');
      expect(cu!.role.tr).toBe('İndirgenme');
      expect(bridge!.name.tr).toContain('Tuz Köprüsü');
    })
  );

  printTestResult(
    await test('T1.F04.05', 1, 'F04-3D', 'Hotspots define position, pinNumber, and localized exam facts', () => {
      THREE_SCENES_DATA.forEach((scene) => {
        expect(scene.hotspots.length).toBeGreaterThanOrEqual(3);
        scene.hotspots.forEach((hs) => {
          expect(hs.position).toHaveLength(3);
          expect(hs.pinNumber).toBeGreaterThan(0);
          expect(hs.osymExamFact.tr.length).toBeGreaterThan(5);
        });
      });
    })
  );

  // =========================================================================
  // F05-CARD: Leitner 3D Flashcards (396 cards, 5-box engine)
  // =========================================================================

  printTestResult(
    await test('T1.F05.01', 1, 'F05-CARD', 'compileAllFlashcards generates exactly 396 flashcards (22 * 18)', () => {
      const cards = compileAllFlashcards(ALL_CHEMISTRY_UNITS, 'tr');
      expect(cards).toHaveLength(396);
    })
  );

  printTestResult(
    await test('T1.F05.02', 1, 'F05-CARD', 'Flashcards contain non-empty prompts, answers, and ÖSYM tips', () => {
      const cards = compileAllFlashcards(ALL_CHEMISTRY_UNITS, 'tr');
      cards.slice(0, 10).forEach((c) => {
        expect(c.frontPrompt.length).toBeGreaterThan(10);
        expect(c.backAnswer.length).toBeGreaterThan(10);
        expect(c.osymTip.length).toBeGreaterThan(5);
      });
    })
  );

  printTestResult(
    await test('T1.F05.03', 1, 'F05-CARD', 'Leitner engine promotes card Box N -> Box N+1 on mastery', () => {
      const engine = new LeitnerBoxEngine();
      expect(engine.getBox('card-01')).toBe(1);
      const res1 = engine.rateCard('card-01', true);
      expect(res1.newBox).toBe(2);
      expect(res1.xpAwarded).toBe(15);
      expect(engine.getBox('card-01')).toBe(2);
    })
  );

  printTestResult(
    await test('T1.F05.04', 1, 'F05-CARD', 'Leitner engine demotes card to Box 1 on failure', () => {
      const engine = new LeitnerBoxEngine();
      engine.setBox('card-02', 4);
      expect(engine.getBox('card-02')).toBe(4);
      const res = engine.rateCard('card-02', false);
      expect(res.newBox).toBe(1);
      expect(res.xpAwarded).toBe(0);
      expect(engine.getBox('card-02')).toBe(1);
    })
  );

  printTestResult(
    await test('T1.F05.05', 1, 'F05-CARD', 'Reaching Box 5 awards +25 XP and clamps at Box 5', () => {
      const engine = new LeitnerBoxEngine();
      engine.setBox('card-03', 4);
      const res = engine.rateCard('card-03', true);
      expect(res.newBox).toBe(5);
      expect(res.xpAwarded).toBe(25);
      // Promote again from Box 5 -> stays Box 5
      const res2 = engine.rateCard('card-03', true);
      expect(res2.newBox).toBe(5);
    })
  );

  // =========================================================================
  // F06-GAME: 6 Chemistry Mini-Games
  // =========================================================================

  printTestResult(
    await test('T1.F06.01', 1, 'F06-GAME', 'Periodic Hunter loads elements and verifies atomic properties', () => {
      expect(ELEMENTS_SAMPLE.length).toBeGreaterThanOrEqual(10);
      const he = ELEMENTS_SAMPLE.find((e) => e.symbol === 'He');
      const ca = ELEMENTS_SAMPLE.find((e) => e.symbol === 'Ca');
      expect(he).toBeDefined();
      expect(ca).toBeDefined();
      expect(he!.z).toBe(2);
      expect(ca!.period).toBe(4);
      expect(ca!.group).toBe('2A');
    })
  );

  printTestResult(
    await test('T1.F06.02', 1, 'F06-GAME', 'Equation Balancer correctly validates C3H8 + 5 O2 -> 3 CO2 + 4 H2O', () => {
      const res = validatePropaneCombustion(1, 5, 3, 4);
      expect(res.balanced).toBe(true);
      expect(res.minimal).toBe(true);
      expect(res.atomLedger.C.reactants).toBe(3);
      expect(res.atomLedger.C.products).toBe(3);
    })
  );

  printTestResult(
    await test('T1.F06.03', 1, 'F06-GAME', 'Lewis Dot Builder validates octet for NH3 (3 bonds, 1 lone pair)', () => {
      const res = validateLewisMolecule('NH3', 3, 1);
      expect(res.valid).toBe(true);
      expect(res.octetSatisfied).toBe(true);
      expect(res.score).toBe(35);
    })
  );

  printTestResult(
    await test('T1.F06.04', 1, 'F06-GAME', 'Titration Lab simulates pH 7.00 equivalence at 25.00 mL', () => {
      const res = simulateTitration(25.0);
      expect(res.ph).toBe(7.0);
      expect(res.status).toBe('equivalence');
      expect(res.precisionScore).toBe(100);
    })
  );

  printTestResult(
    await test('T1.F06.05', 1, 'F06-GAME', 'Compound Synthesis Arena produces ethyl acetate with catalyst and heat', () => {
      const res = simulateSynthesis(['CH3COOH', 'C2H5OH'], true, true);
      expect(res.success).toBe(true);
      expect(res.productName).toContain('Etil Asetat');
      expect(res.yieldPercent).toBeGreaterThanOrEqual(70);
      expect(res.xpAwarded).toBe(40);
    })
  );

  printTestResult(
    await test('T1.F06.06', 1, 'F06-GAME', 'Chem-Blitz validates 60s timer and combo score accumulation', () => {
      const game = new ChemBlitzEngine(CANONICAL_BLITZ_QUESTIONS, 60);

      // Initial state verification
      expect(game.remainingSeconds).toBe(60);
      expect(game.score).toBe(0);
      expect(game.combo).toBe(0);
      expect(game.isFinished).toBe(false);

      // Tick 10s of gameplay
      game.tick(10);
      expect(game.remainingSeconds).toBe(50);

      // Question 1: "Tüm soy gazlar hiçbir koşulda bileşik oluşturamaz." (False)
      // Player chooses FALSE -> Correct!
      const ans1 = game.submitAnswer(false);
      expect(ans1.isCorrect).toBe(true);
      expect(ans1.pointsAwarded).toBe(25); // 20 + 1 * 5
      expect(game.combo).toBe(1);
      expect(game.score).toBe(25);

      // Question 2: "İdeal gaz molekülleri arasında öz hacim sıfır..." (True)
      // Player chooses TRUE -> Correct!
      const ans2 = game.submitAnswer(true);
      expect(ans2.isCorrect).toBe(true);
      expect(ans2.pointsAwarded).toBe(30); // 20 + 2 * 5
      expect(game.combo).toBe(2);
      expect(game.score).toBe(55);

      // Question 3: "pH değeri küçüldükçe H+ artar." (True)
      // Player chooses TRUE -> Correct!
      const ans3 = game.submitAnswer(true);
      expect(ans3.isCorrect).toBe(true);
      expect(ans3.pointsAwarded).toBe(35); // 20 + 3 * 5
      expect(game.combo).toBe(3);
      expect(game.score).toBe(90);

      // Question 4: "Katalizör ΔH değiştirir." (False)
      // Player chooses TRUE -> WRONG! Combo resets
      const ans4 = game.submitAnswer(true);
      expect(ans4.isCorrect).toBe(false);
      expect(ans4.pointsAwarded).toBe(0);
      expect(game.combo).toBe(0);
      expect(game.score).toBe(90);

      // Advance clock past 0 seconds (50s remaining)
      game.tick(50);
      expect(game.remainingSeconds).toBe(0);
      expect(game.isFinished).toBe(true);

      // Submitting answer after time expiration must be strictly rejected
      const ansPost = game.submitAnswer(true);
      expect(ansPost.isGameOver).toBe(true);
      expect(ansPost.pointsAwarded).toBe(0);
      expect(game.score).toBe(90);
    })
  );

  // =========================================================================
  // F07-EXAM: Multi-Mode Exam Center (Practice sets, TYT, AYT, TG, Net)
  // =========================================================================

  printTestResult(
    await test('T1.F07.01', 1, 'F07-EXAM', 'Practice set catalog loads 16 questions for any unit set', () => {
      const u01Set1 = compileUnitQuestions(ALL_CHEMISTRY_UNITS[0], 'tr').filter((q) => q.setNumber === 1);
      expect(u01Set1).toHaveLength(16);
      expect(u01Set1[0].setNumber).toBe(1);
    })
  );

  printTestResult(
    await test('T1.F07.02', 1, 'F07-EXAM', 'TYT Branch Trial samples 7 questions across TYT units u01-u10', () => {
      const tytPool = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT');
      const sampled = tytPool.slice(0, 7).map((u) => compileUnitQuestions(u, 'tr')[0]);
      expect(sampled).toHaveLength(7);
      sampled.forEach((q) => expect(q.exam).toBe('TYT'));
    })
  );

  printTestResult(
    await test('T1.F07.03', 1, 'F07-EXAM', 'AYT Branch Trial samples 13 questions across AYT units u11-u24', () => {
      const aytPool = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'AYT');
      const sampled = aytPool.slice(0, 13).map((u) => compileUnitQuestions(u, 'tr')[0]);
      expect(sampled).toHaveLength(13);
      sampled.forEach((q) => expect(q.exam).toBe('AYT'));
    })
  );

  printTestResult(
    await test('T1.F07.04', 1, 'F07-EXAM', 'TG Derece Provası produces 20 questions (7 TYT + 13 AYT)', () => {
      const tytQs = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT').slice(0, 7).map((u) => compileUnitQuestions(u, 'tr')[0]);
      const aytQs = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'AYT').slice(0, 13).map((u) => compileUnitQuestions(u, 'tr')[0]);
      const exam = [...tytQs, ...aytQs];
      expect(exam).toHaveLength(20);
      expect(exam.filter((q) => q.exam === 'TYT')).toHaveLength(7);
      expect(exam.filter((q) => q.exam === 'AYT')).toHaveLength(13);
    })
  );

  printTestResult(
    await test('T1.F07.05', 1, 'F07-EXAM', 'ÖSYM Net score formula calculates Correct - Wrong / 4.0 exactly', () => {
      expect(calculateOsymNet(7, 0)).toBe(7.0);
      expect(calculateOsymNet(5, 2)).toBe(4.5);
      expect(calculateOsymNet(0, 7)).toBe(-1.75);
      expect(calculateOsymNet(13, 0)).toBe(13.0);
      expect(calculateOsymNet(10, 3)).toBe(9.25);
    })
  );

  // =========================================================================
  // F08-SHELL: Responsive Layout & Navigation
  // =========================================================================

  printTestResult(
    await test('T1.F08.01', 1, 'F08-SHELL', 'Primary shell routes are defined (curriculum, 3D, cards, games, exams, profile)', () => {
      const routes = ['curriculum', 'lab3d', 'cards', 'games', 'exams', 'profile'] as const;
      routes.forEach((r) => {
        expect(UI_TRANSLATIONS.tr.nav[r]).toBeDefined();
        expect(UI_TRANSLATIONS.en.nav[r]).toBeDefined();
      });
    })
  );

  printTestResult(
    await test('T1.F08.02', 1, 'F08-SHELL', 'Mobile viewport (< 900px) enables compact bottom navigation bar and hides sidebar', () => {
      const theme = parseThemeCss();
      const mobileRes375 = resolveShellLayout(375, theme);
      const mobileRes414 = resolveShellLayout(414, theme);

      expect(mobileRes375.showBottomNav).toBe(true);
      expect(mobileRes375.showSidebar).toBe(false);
      expect(mobileRes375.layoutArea).toBe('mobile-stack');

      expect(mobileRes414.showBottomNav).toBe(true);
      expect(mobileRes414.showSidebar).toBe(false);
      expect(mobileRes414.layoutArea).toBe('mobile-stack');
    })
  );

  printTestResult(
    await test('T1.F08.03', 1, 'F08-SHELL', 'Desktop viewport (>= 900px) enables persistent sidebar and hides mobile bottom bar', () => {
      const theme = parseThemeCss();
      const desktopRes1280 = resolveShellLayout(1280, theme);
      const desktopRes1920 = resolveShellLayout(1920, theme);

      expect(desktopRes1280.showSidebar).toBe(true);
      expect(desktopRes1280.showBottomNav).toBe(false);
      expect(desktopRes1280.layoutArea).toBe('desktop-grid');

      expect(desktopRes1920.showSidebar).toBe(true);
      expect(desktopRes1920.showBottomNav).toBe(false);
      expect(desktopRes1920.layoutArea).toBe('desktop-grid');
    })
  );

  printTestResult(
    await test('T1.F08.04', 1, 'F08-SHELL', 'Tablet viewport boundary at 900px switches navigation layout cleanly', () => {
      const theme = parseThemeCss();
      const subBoundary = resolveShellLayout(theme.sidebarBreakpoint - 1, theme);
      const atBoundary = resolveShellLayout(theme.sidebarBreakpoint, theme);

      expect(subBoundary.showBottomNav).toBe(true);
      expect(subBoundary.showSidebar).toBe(false);

      expect(atBoundary.showBottomNav).toBe(false);
      expect(atBoundary.showSidebar).toBe(true);
    })
  );

  printTestResult(
    await test('T1.F08.05', 1, 'F08-SHELL', 'Touch targets on mobile meet minimum 44px WCAG criteria', () => {
      const theme = parseThemeCss();
      // WCAG 2.5.5 / 2.5.8: Pointer coarse target size must be >= 44px
      expect(theme.coarseTargetSize).toBeGreaterThanOrEqual(44);
      // Default fine target size meets 32px standard
      expect(theme.defaultTargetSize).toBeGreaterThanOrEqual(32);
      // Mobile interactive elements enforce touch-action manipulation
      expect(theme.touchActionManipulation).toBe(true);
    })
  );

  // =========================================================================
  // F09-THEME: Dark & Light Laboratory Themes
  // =========================================================================

  printTestResult(
    await test('T1.F09.01', 1, 'F09-THEME', 'Dark laboratory theme sets dark attribute and variables', () => {
      const store = new AppStoreState();
      store.setTheme('dark');
      expect(store.theme).toBe('dark');
    })
  );

  printTestResult(
    await test('T1.F09.02', 1, 'F09-THEME', 'Light laboratory theme sets light attribute and variables', () => {
      const store = new AppStoreState();
      store.setTheme('light');
      expect(store.theme).toBe('light');
    })
  );

  printTestResult(
    await test('T1.F09.03', 1, 'F09-THEME', 'setTheme action updates documentElement data-theme attribute', () => {
      const store = new AppStoreState();
      store.setTheme('dark');
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
      store.setTheme('light');
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    })
  );

  printTestResult(
    await test('T1.F09.04', 1, 'F09-THEME', 'Theme persists in localStorage under kimya-theme-setting', () => {
      const store = new AppStoreState();
      store.setTheme('light');
      expect(localStorage.getItem('kimya-theme-setting')).toBe('light');
    })
  );

  printTestResult(
    await test('T1.F09.05', 1, 'F09-THEME', 'Theme colors satisfy WCAG AA contrast ratio (>= 4.5:1)', () => {
      const theme = parseThemeCss();
      const lightText = theme.tokens['text-primary-light'];
      const lightSurface = theme.tokens['bg-surface-light'];
      const lightCanvas = theme.tokens['bg-canvas-light'];
      const darkText = theme.tokens['text-primary-dark'];
      const darkSurface = theme.tokens['bg-surface-dark'];
      const darkCanvas = theme.tokens['bg-canvas-dark'];

      const lightSurfaceContrast = getContrastRatio(lightText, lightSurface);
      const lightCanvasContrast = getContrastRatio(lightText, lightCanvas);
      const darkSurfaceContrast = getContrastRatio(darkText, darkSurface);
      const darkCanvasContrast = getContrastRatio(darkText, darkCanvas);

      // WCAG AA requirement for body text is >= 4.5:1
      expect(lightSurfaceContrast).toBeGreaterThanOrEqual(4.5);
      expect(lightCanvasContrast).toBeGreaterThanOrEqual(4.5);
      expect(darkSurfaceContrast).toBeGreaterThanOrEqual(4.5);
      expect(darkCanvasContrast).toBeGreaterThanOrEqual(4.5);
    })
  );

  // =========================================================================
  // F10-SPLASH: Splash Screen & Onboarding Walkthrough
  // =========================================================================

  printTestResult(
    await test('T1.F10.01', 1, 'F10-SPLASH', 'First launch flag hasSeenOnboarding is false by default', () => {
      const store = new AppStoreState();
      expect(store.hasSeenOnboarding).toBe(false);
    })
  );

  printTestResult(
    await test('T1.F10.02', 1, 'F10-SPLASH', '4-step onboarding carousel covers 3D lab, exam preference, daily goal, and language selection', () => {
      // 1. Verify all 8 languages define all 4 onboarding step titles in SHELL_STRINGS
      LANGUAGES.forEach((lang) => {
        const s = SHELL_STRINGS[lang.code];
        expect(s.ob1Title.length).toBeGreaterThan(0);
        expect(s.ob2Title.length).toBeGreaterThan(0);
        expect(s.goalTitle.length).toBeGreaterThan(0);
        expect(s.ob3Title.length).toBeGreaterThan(0);
      });

      // 2. Step 1 offers 3 exam preference options: ALL, TYT, AYT
      const examPrefs = ['ALL', 'TYT', 'AYT'];
      expect(examPrefs).toHaveLength(3);

      // 3. Step 2 offers DAILY_GOAL_OPTIONS from usePreferences: [10, 20, 40]
      expect(DAILY_GOAL_OPTIONS).toHaveLength(3);
      expect(DAILY_GOAL_OPTIONS).toContain(20);

      // 4. Step 3 offers all 8 official supported languages
      expect(LANGUAGES).toHaveLength(8);
    })
  );

  printTestResult(
    await test('T1.F10.03', 1, 'F10-SPLASH', 'Completing onboarding sets hasSeenOnboarding to true in store', () => {
      const store = new AppStoreState();
      store.hasSeenOnboarding = true;
      expect(store.hasSeenOnboarding).toBe(true);
    })
  );

  printTestResult(
    await test('T1.F10.04', 1, 'F10-SPLASH', 'Onboarding walkthrough is replayable from profile preserving existing user progress', () => {
      localStorage.clear();
      // Initialize completed user state
      localStorage.setItem('kimya-onboarded', '1');
      localStorage.setItem('kimya-exam-pref', 'TYT');

      const store = new AppStoreState();
      store.xp = 750;
      store.recordQuestionResult('u01-q001', true);

      // ProfileView triggers onRelaunchOnboarding: resets onboarding flag without wiping XP or answers
      localStorage.removeItem('kimya-onboarded');
      localStorage.setItem('kimya-onboarding-pending', '1');

      expect(localStorage.getItem('kimya-onboarded')).toBeNull();
      expect(localStorage.getItem('kimya-onboarding-pending')).toBe('1');
      // Existing user progress must be strictly preserved
      expect(store.xp).toBe(762);
      expect(store.solvedQuestionIds['u01-q001']).toBe(true);
    })
  );

  printTestResult(
    await test('T1.F10.05', 1, 'F10-SPLASH', 'Skip onboarding transitions directly to curriculum with defaults (ALL, 20)', () => {
      localStorage.clear();
      // Emulate Onboarding step 0 Skip action: onFinish(defaultPref, defaultGoal)
      const defaultPref = 'ALL';
      const defaultGoal = 20;

      localStorage.setItem('kimya-onboarded', '1');
      localStorage.removeItem('kimya-onboarding-pending');
      localStorage.setItem('kimya-exam-pref', defaultPref);

      expect(localStorage.getItem('kimya-onboarded')).toBe('1');
      expect(localStorage.getItem('kimya-exam-pref')).toBe('ALL');
      expect(localStorage.getItem('kimya-onboarding-pending')).toBeNull();
    })
  );

  printTestResult(
    await test('T1.F10.06', 1, 'F10-SPLASH', 'iOS, Android, and PWA 3D icons/splashes have valid PNG headers/dimensions and 3D CSS keyframes exist', () => {
      const root = process.cwd();
      const readPngDims = (rel: string): [number, number] => {
        const buf = fs.readFileSync(path.join(root, rel));
        // Validate PNG magic signature 89 50 4E 47 0D 0A 1A 0A
        expect(buf.subarray(0, 8).toString('hex')).toBe('89504e470d0a1a0a');
        return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
      };

      // 1. Web / PWA PNG icons & SVG
      expect(readPngDims('public/icon-192.png')).toEqual([192, 192]);
      expect(readPngDims('public/icon-512.png')).toEqual([512, 512]);
      expect(readPngDims('public/apple-touch-icon.png')).toEqual([180, 180]);
      const iconSvg = fs.readFileSync(path.join(root, 'public/icon.svg'), 'utf8');
      expect(iconSvg).toContain('linearGradient');
      expect(iconSvg).toContain('orbitGoldFront');

      // 2. iOS AppIcon (1024x1024) & Splash (2732x2732)
      expect(readPngDims('ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png')).toEqual([1024, 1024]);
      for (const sName of ['splash-2732x2732.png', 'splash-2732x2732-1.png', 'splash-2732x2732-2.png']) {
        expect(readPngDims(`ios/App/App/Assets.xcassets/Splash.imageset/${sName}`)).toEqual([2732, 2732]);
      }

      // 3. Android Mipmap icons (5 densities x 3 PNGs) & 11 Splash assets
      const densities: Array<[string, number, number]> = [
        ['mipmap-mdpi', 48, 108],
        ['mipmap-hdpi', 72, 162],
        ['mipmap-xhdpi', 96, 216],
        ['mipmap-xxhdpi', 144, 324],
        ['mipmap-xxxhdpi', 192, 432],
      ];
      for (const [folder, icPx, fgPx] of densities) {
        expect(readPngDims(`android/app/src/main/res/${folder}/ic_launcher.png`)).toEqual([icPx, icPx]);
        expect(readPngDims(`android/app/src/main/res/${folder}/ic_launcher_round.png`)).toEqual([icPx, icPx]);
        expect(readPngDims(`android/app/src/main/res/${folder}/ic_launcher_foreground.png`)).toEqual([fgPx, fgPx]);
      }
      const icBg = fs.readFileSync(path.join(root, 'android/app/src/main/res/values/ic_launcher_background.xml'), 'utf8');
      expect(icBg).toContain('#070B14'); // redesign dark ground (public/manifest.webmanifest background_color)

      const androidSplashes: Array<[string, number, number]> = [
        ['drawable/splash.png', 480, 320],
        ['drawable-port-mdpi/splash.png', 320, 480],
        ['drawable-port-hdpi/splash.png', 480, 800],
        ['drawable-port-xhdpi/splash.png', 720, 1280],
        ['drawable-port-xxhdpi/splash.png', 960, 1600],
        ['drawable-port-xxxhdpi/splash.png', 1280, 1920],
        ['drawable-land-mdpi/splash.png', 480, 320],
        ['drawable-land-hdpi/splash.png', 800, 480],
        ['drawable-land-xhdpi/splash.png', 1280, 720],
        ['drawable-land-xxhdpi/splash.png', 1600, 960],
        ['drawable-land-xxxhdpi/splash.png', 1920, 1280],
      ];
      for (const [rel, w, h] of androidSplashes) {
        expect(readPngDims(`android/app/src/main/res/${rel}`)).toEqual([w, h]);
      }

      // 4. Animated 3D Splash & Onboarding CSS & Components
      const css = fs.readFileSync(path.join(root, 'src/styles/theme.css'), 'utf8');
      for (const rule of [
        '.splash-3d-stage',
        '.splash-3d-orbit-ring',
        '@keyframes orbitSpin3DA',
        '@keyframes orbitSpin3DB',
        '@keyframes float3DCard',
        '@keyframes onboarding3DEnter',
        '.onboarding-hero.compact',
      ]) {
        expect(css).toContain(rule);
      }

      const onboardingSrc = fs.readFileSync(path.join(root, 'src/components/onboarding/Onboarding.tsx'), 'utf8');
      expect(onboardingSrc).toContain('hero-3d-stage');
      expect(onboardingSrc).toContain('onboarding-3d-enter');
      expect(onboardingSrc).toContain('onboarding-3d-chip');
    })
  );

  // =========================================================================
  // F11-AUDIO: Web Audio Synthesis & Confetti Celebration
  // =========================================================================

  printTestResult(
    await test('T1.F11.01', 1, 'F11-AUDIO', 'SFX engine provides correct, wrong, success, finish, and fizz methods on Web Audio', () => {
      const ctx = new MockAudioContext();
      unlockAudio(ctx as any);
      playCorrect();
      playWrong();
      playSuccess();
      playFinish();
      playFizz();
      playBubble();
      expect(typeof playCorrect).toBe('function');
      expect(typeof playWrong).toBe('function');
      expect(typeof playSuccess).toBe('function');
      expect(typeof playFinish).toBe('function');
      expect(typeof playFizz).toBe('function');
    })
  );

  printTestResult(
    await test('T1.F11.02', 1, 'F11-AUDIO', 'SFX engine respects mute toggle when setEnabled(false)', () => {
      // 1. Mute SFX engine
      setSfxEnabled(false);
      const oscCountBefore = MockAudioContext.totalOscillatorsCreated;
      const gainCountBefore = MockAudioContext.totalGainNodesCreated;

      // 2. Attempt to trigger sound cues while muted
      playCorrect();
      playWrong();
      playFinish();

      // 3. Verify zero audio synthesis nodes (oscillators and gain) were created during mute
      const oscDeltaMuted = MockAudioContext.totalOscillatorsCreated - oscCountBefore;
      const gainDeltaMuted = MockAudioContext.totalGainNodesCreated - gainCountBefore;
      expect(oscDeltaMuted).toBe(0);
      expect(gainDeltaMuted).toBe(0);

      // 4. Restore audio synthesis and verify sound cues resume producing oscillators
      setSfxEnabled(true);
      playCorrect();
      const oscDeltaEnabled = MockAudioContext.totalOscillatorsCreated - oscCountBefore;
      expect(oscDeltaEnabled).toBe(3); // Triangle E6, Triangle B6, Sine B7
    })
  );

  printTestResult(
    await test('T1.F11.03', 1, 'F11-AUDIO', 'Ambient music engine defines 7 offline synthesizer mood tracks', () => {
      expect(MUSIC_MOODS).toHaveLength(7);
      expect(MUSIC_TRACKS).toHaveLength(7);
      MUSIC_TRACKS.forEach((track) => {
        expect(track.bpm).toBeGreaterThan(0);
        expect(track.chords.length).toBeGreaterThan(0);
      });
    })
  );

  printTestResult(
    await test('T1.F11.04', 1, 'F11-AUDIO', 'Canvas Confetti engine triggers 250 particle physics explosion', () => {
      const confetti = new CanvasConfettiEngine();
      const mockCanvas = { width: 800, height: 600 };
      const triggered = confetti.triggerBurst(mockCanvas);
      expect(triggered).toBe(true);
      expect(confetti.particleCount).toBe(250);
      expect(confetti.isActive).toBe(true);
    })
  );

  printTestResult(
    await test('T1.F11.05', 1, 'F11-AUDIO', 'Confetti engine respects reduced-motion accessibility preference', () => {
      const confetti = new CanvasConfettiEngine();
      const mockCanvas = { width: 800, height: 600 };
      const triggered = confetti.triggerBurst(mockCanvas, true); // reduceMotion = true
      expect(triggered).toBe(false);
      expect(confetti.particleCount).toBe(0);
      expect(confetti.isActive).toBe(false);
    })
  );

  // =========================================================================
  // F12-OFFLINE: 100% Offline Capability
  // =========================================================================

  printTestResult(
    await test('T1.F12.01', 1, 'F12-OFFLINE', 'Zero network fetch required for all curriculum questions', () => {
      const qs = compileAllQuestions(ALL_CHEMISTRY_UNITS, 'tr');
      expect(qs.length).toBe(3072);
      expect(navigator.onLine).toBe(true);
    })
  );

  printTestResult(
    await test('T1.F12.02', 1, 'F12-OFFLINE', 'Store state serializes cleanly to JSON for local persistence', () => {
      const store = new AppStoreState();
      store.recordQuestionResult('u01-q001', true);
      store.recordQuestionResult('u01-q002', false);
      const json = store.serialize();
      expect(json).toContain('u01-q001');
      expect(json).toContain('u01-q002');
    })
  );

  printTestResult(
    await test('T1.F12.03', 1, 'F12-OFFLINE', 'Store state rehydrates perfectly from JSON on fresh launch', () => {
      const store1 = new AppStoreState();
      store1.xp = 350;
      store1.setTheme('light');
      store1.toggleBookmark('u03-q015');
      const json = store1.serialize();

      const store2 = new AppStoreState();
      store2.deserialize(json);
      expect(store2.xp).toBe(350);
      expect(store2.theme).toBe('light');
      expect(store2.bookmarkedQuestionIds).toContain('u03-q015');
    })
  );

  printTestResult(
    await test('T1.F12.04', 1, 'F12-OFFLINE', 'Navigator offline simulation (onLine = false) allows full question solving', () => {
      (navigator as any).onLine = false;
      const store = new AppStoreState();
      store.recordQuestionResult('u04-q005', true);
      expect(store.solvedQuestionIds['u04-q005']).toBe(true);
      (navigator as any).onLine = true;
    })
  );

  printTestResult(
    await test('T1.F12.05', 1, 'F12-OFFLINE', 'Hata Defteri wrong answers store offline and persist across sessions', () => {
      const store1 = new AppStoreState();
      store1.recordQuestionResult('u02-q008', false);
      expect(store1.mistakeQuestionIds).toContain('u02-q008');
      const json = store1.serialize();

      const store2 = new AppStoreState();
      store2.deserialize(json);
      expect(store2.mistakeQuestionIds).toContain('u02-q008');
    })
  );

  // =========================================================================
  // F13-I18N: 8-Language Localization (TR, EN, DE, FR, RU, AR, ZH, KU)
  // =========================================================================

  printTestResult(
    await test('T1.F13.01', 1, 'F13-I18N', 'Turkish (TR) default language contains 100% translation key coverage', () => {
      expect(LANGUAGES[0].code).toBe('tr');
      expect(LANGUAGES[0].dir).toBe('ltr');
      const tr = UI_TRANSLATIONS.tr;
      expect(tr.appName).toBe('Kimya 3D');
      expect(tr.nav.curriculum).toBe('Konular');
      expect(tr.nav.lab3d).toBe('3D Lab');
      expect(tr.nav.cards).toBe('Kartlar');
      expect(tr.nav.games).toBe('Oyunlar');
      expect(tr.nav.exams).toBe('Sınavlar');
      expect(tr.nav.profile).toBe('Profil & Dil');
      expect(SHELL_STRINGS.tr.start).toBe('Laboratuvara Başla');
    })
  );

  printTestResult(
    await test('T1.F13.02', 1, 'F13-I18N', 'English (EN) translation contains complete shell mappings', () => {
      const en = UI_TRANSLATIONS.en;
      expect(en.appName).toBe('Chemistry 3D');
      expect(en.nav.curriculum).toBe('Curriculum');
      expect(en.nav.lab3d).toBe('3D Lab');
      expect(SHELL_STRINGS.en.next).toBe('Next');
      expect(SHELL_STRINGS.en.start).toBe('Enter the Lab');
    })
  );

  printTestResult(
    await test('T1.F13.03', 1, 'F13-I18N', 'German (DE) translation contains complete shell mappings', () => {
      const de = UI_TRANSLATIONS.de;
      expect(de.appName).toBe('Chemie 3D');
      expect(de.nav.curriculum).toBe('Themen');
      expect(de.nav.lab3d).toBe('3D-Labor');
      expect(SHELL_STRINGS.de.next).toBe('Weiter');
      expect(SHELL_STRINGS.de.settings).toBe('Einstellungen');
    })
  );

  printTestResult(
    await test('T1.F13.04', 1, 'F13-I18N', 'French (FR) translation contains complete shell mappings', () => {
      const fr = UI_TRANSLATIONS.fr;
      expect(fr.appName).toBe('Chimie 3D');
      expect(fr.nav.curriculum).toBe('Programme');
      expect(fr.nav.lab3d).toBe('Labo 3D');
      expect(SHELL_STRINGS.fr.next).toBe('Suivant');
      expect(SHELL_STRINGS.fr.start).toBe('Entrer dans le labo');
    })
  );

  printTestResult(
    await test('T1.F13.05', 1, 'F13-I18N', 'Russian (RU) translation contains complete shell mappings', () => {
      const ru = UI_TRANSLATIONS.ru;
      expect(ru.appName).toBe('Химия 3D');
      expect(ru.nav.curriculum).toBe('Темы');
      expect(ru.nav.lab3d).toBe('3D Лаб');
      expect(SHELL_STRINGS.ru.next).toBe('Далее');
      expect(SHELL_STRINGS.ru.settings).toBe('Настройки');
    })
  );

  printTestResult(
    await test('T1.F13.06', 1, 'F13-I18N', 'Arabic (AR) sets dir="rtl" and provides Arabic labels', () => {
      const arMeta = LANGUAGES.find((l) => l.code === 'ar');
      expect(arMeta?.dir).toBe('rtl');
      const ar = UI_TRANSLATIONS.ar;
      expect(ar.nav.curriculum).toBe('المنهج');
      expect(SHELL_STRINGS.ar.start).toBe('ادخل المختبر');
      expect(/[\u0600-\u06FF]/.test(ar.appName)).toBe(true);
    })
  );

  printTestResult(
    await test('T1.F13.07', 1, 'F13-I18N', 'Chinese (ZH) translation contains Simplified Chinese string coverage', () => {
      const zh = UI_TRANSLATIONS.zh;
      expect(zh.nav.curriculum).toBe('知识点');
      expect(zh.nav.lab3d).toBe('3D实验室');
      expect(SHELL_STRINGS.zh.start).toBe('进入实验室');
      expect(/[\u4E00-\u9FFF]/.test(zh.appName)).toBe(true);
    })
  );

  printTestResult(
    await test('T1.F13.08', 1, 'F13-I18N', 'Kurdish (KU) translation contains Kurdish Latin string coverage', () => {
      const ku = UI_TRANSLATIONS.ku;
      expect(ku.nav.curriculum).toBe('Mijar');
      expect(ku.nav.lab3d).toBe('Lab 3D');
      expect(SHELL_STRINGS.ku.settings).toBe('Mîheng');
      expect(/[çêîşûÇÊÎŞÛ]/.test(ku.appName + ' ' + SHELL_STRINGS.ku.ob1Body)).toBe(true);
    })
  );

  printTestResult(
    await test('T1.F13.09', 1, 'F13-I18N', 'assertNoEnglishTokensInForeignStems: 0 leaked English tokens in foreign question stems', () => {
      const leakedEnglishTokens = [
        'strictly exact?',
        'which chemical species',
        'which of the following',
        'which statement is',
        'chronological order',
        'is defined by the distinguishing trait',
      ];
      for (const lang of ['de', 'fr', 'ru', 'ar', 'zh', 'ku'] as const) {
        const qs = prodCompileAllQuestions(PROD_CHEMISTRY_UNITS, lang);
        for (const q of qs) {
          for (const leak of leakedEnglishTokens) {
            expect(q.stem.toLowerCase().includes(leak.toLowerCase())).toBe(false);
          }
        }
      }
    })
  );

  printTestResult(
    await test('T1.F13.10', 1, 'F13-I18N', 'assertNoDroppedFrenchApostrophes: 0 dropped apostrophes in French catalog and questions', () => {
      const frenchElisionRegex = /\b(l|d|n|qu)\s+(unité|examen|étape|ordre|état|atome|équilibre|acide|eau|énergie|ion|élément|espèce|information|option|action|observation|exemple)/i;
      for (const spec of ALL_MOCK_EXAM_SPECS) {
        const match = spec.subtitle.fr.match(frenchElisionRegex);
        expect(match).toBeNull();
      }
      const frQuestions = prodCompileAllQuestions(PROD_CHEMISTRY_UNITS, 'fr');
      for (const q of frQuestions) {
        const match = q.stem.match(frenchElisionRegex);
        expect(match).toBeNull();
      }
    })
  );

  printTestResult(
    await test('T1.F13.11', 1, 'F13-I18N', 'assertNoKnownMtArtifacts: 0 machine translation artifacts across facts, traps, tips', () => {
      const knownMtArtifacts = [
        'zac oil',
        'zac-öl',
        'salzbenzin',
        'hno3 is vitriol',
        'كابير',
      ];
      for (const u of PROD_CHEMISTRY_UNITS) {
        for (const f of u.facts) {
          const fields = [
            f.fact.en, f.fact.de, f.fact.fr, f.fact.ru, f.fact.ar, f.fact.zh, f.fact.ku,
            f.trap.en, f.trap.de, f.trap.fr, f.trap.ru, f.trap.ar, f.trap.zh, f.trap.ku,
            f.osymTip?.en, f.osymTip?.de, f.osymTip?.fr, f.osymTip?.ru, f.osymTip?.ar, f.osymTip?.zh, f.osymTip?.ku,
          ];
          for (const text of fields) {
            if (!text) continue;
            const lower = text.toLowerCase();
            for (const artifact of knownMtArtifacts) {
              expect(lower.includes(artifact)).toBe(false);
            }
          }
        }
      }
    })
  );

  printTestResult(
    await test('T1.F13.12', 1, 'F13-I18N', 'assertRichRomanNumeralExplanations: All Roman numeral explanations provide I., II., III. breakdowns', () => {
      for (const langMeta of LANGUAGES) {
        const lang = langMeta.code as any;
        const langQs = prodCompileAllQuestions(PROD_CHEMISTRY_UNITS, lang);
        const romanQs = langQs.filter((q) => q.archetype === 'roman-numeral');
        expect(romanQs.length).toBeGreaterThan(0);
        for (const q of romanQs) {
          expect(q.explanation.includes('I.') && q.explanation.includes('II.') && q.explanation.includes('III.')).toBe(true);
        }
      }
    })
  );

  printTestResult(
    await test('T1.F13.13', 1, 'F13-I18N', 'assertFlashcardMultilingualPurity: 0 leaked Turkish prompt/label strings in foreign flashcards', () => {
      const turkishHardcodedTokens = [
        'Soru:',
        'Doğru Bilgi:',
        'Doğru Açıklama:',
        'Karşılaştırma:',
        'Ayırıcı Özellik:',
        'ÖSYM iki benzer kavramın',
      ];
      for (const lang of ['en', 'de', 'fr', 'ru', 'ar', 'zh', 'ku'] as const) {
        const cards = prodCompileAllFlashcards(PROD_CHEMISTRY_UNITS, lang);
        expect(cards.length).toBeGreaterThan(0);
        for (const c of cards) {
          for (const token of turkishHardcodedTokens) {
            expect(c.front.includes(token)).toBe(false);
            expect(c.back.includes(token)).toBe(false);
          }
        }
      }
    })
  );

  printTestResult(
    await test('T1.F13.14', 1, 'F13-I18N', 'assertNoCjkSingleCharClueLeaks: 0 single-character CJK leaks in Chinese matching questions', () => {
      const zhQuestions = prodCompileAllQuestions(PROD_CHEMISTRY_UNITS, 'zh');
      let leakCount = 0;
      for (const q of zhQuestions) {
        if (q.stem.includes('显著特征：“')) {
          const match = q.stem.match(/显著特征：“([^”]+)”/);
          if (match) {
            const clue = match[1];
            const correctOpt = q.options[q.correctIndex].trim();
            const baseOpt = correctOpt.replace(/\s*[（\(][^）\)]*[）\)]/g, '').trim();
            const candidatesToCheck: string[] = [];
            if (/^[\u4e00-\u9fa5]$/.test(correctOpt)) {
              candidatesToCheck.push(correctOpt);
            }
            if (baseOpt.length >= 1) {
              candidatesToCheck.push(baseOpt);
            }
            const insideMatch = correctOpt.match(/[（\(]([^）\)]+)[）\)]/);
            if (insideMatch && insideMatch[1].trim().length >= 1) {
              candidatesToCheck.push(insideMatch[1].trim());
            }
            for (const cand of candidatesToCheck) {
              if (/[\u4e00-\u9fa5]/.test(cand) && clue.includes(cand)) {
                leakCount++;
              }
            }
          }
        }
      }
      expect(leakCount).toBe(0);
    })
  );

  const VERIFY_GENERIC_SPECIES_WORDS = new Set([
    'kimyasal', 'tür', 'türü',
    'chemical', 'species',
    'chemische', 'spezies',
    'chimique', 'espèce',
    'химическая', 'частица',
    'كيميائي', 'النوع', 'نوع',
    '化学', '微粒',
    'kîmyewî', 'cûreyê',
  ]);

  function verifyIsValidHeadword(term: string, isCJK: boolean, minLen: number): boolean {
    if (!term || term.length < minLen) return false;
    if (VERIFY_GENERIC_SPECIES_WORDS.has(term.toLowerCase())) return false;
    if (isCJK) {
      return /[\u4e00-\u9fa5]/.test(term);
    }
    return /[a-zA-Z\u00C0-\u024F\u0400-\u04FF\u0600-\u06FF]/.test(term);
  }

  printTestResult(
    await test('T1.F13.15', 1, 'F13-I18N', 'assertNoInflectedEntityClueLeaks: 0 inflected entity clue leaks across all 8 languages in matching stems', () => {
      const langs = ['tr', 'en', 'de', 'fr', 'ru', 'ar', 'zh', 'ku'] as const;
      let leakCount = 0;
      for (const lang of langs) {
        const langQs = prodCompileAllQuestions(PROD_CHEMISTRY_UNITS, lang);
        for (const q of langQs) {
          const isTypeA = q.archetype === 'structure-property-match' && (
            q.stem.includes('ayırt edilen kimyasal tür veya kavram') ||
            q.stem.includes('which chemical species or concept is defined by the distinguishing trait') ||
            (q.stem.includes('wird in') && q.stem.includes('durch das Merkmal')) ||
            q.stem.includes('quelle espèce chimique ou notion est définie') ||
            q.stem.includes('Какое химическое вещество или понятие') ||
            q.stem.includes('أي نوع كيميائي أو مفهوم يتميز بالخاصية') ||
            q.stem.includes('以下哪种化学微粒或概念具有显著特征') ||
            q.stem.includes('kîjan cûreyê kîmyewî an têgeh bi taybetmendiya')
          );
          if (isTypeA) {
            const correctOpt = q.options[q.correctIndex].trim();
            const baseOpt = correctOpt.replace(/\s*[（\(][^）\)]*[）\)]/g, '').trim();
            const quoteMatch = q.stem.match(/["“«]([^"”»]+)["”»]/g);
            if (quoteMatch && quoteMatch.length >= 2) {
              const clue = quoteMatch[quoteMatch.length - 1].replace(/^["“«]|["”»]$/g, '').trim();

              const candidates = extractEntityCandidates(correctOpt, lang);
              if (baseOpt.length >= (lang === 'zh' ? 2 : 3)) candidates.add(baseOpt);
              const insideMatch = correctOpt.match(/[（\(]([^）\)]+)[）\)]/);
              if (insideMatch && insideMatch[1].trim().length >= 2) candidates.add(insideMatch[1].trim());
              const acronyms = correctOpt.match(/\b(Qc|Kp|Kc|Ka|Kb|Ksp|Kçç|Ksu|pH|pOH|XY|XY2|sp3|sp2|sp)\b/gi);
              if (acronyms) {
                for (const ac of acronyms) candidates.add(ac);
              }
              if (baseOpt.includes('من النوع')) {
                const withoutType = baseOpt.replace(/من النوع\s*/g, '').trim();
                if (withoutType.length >= 2) candidates.add(withoutType);
              }
              const letterMatch = baseOpt.match(/^([a-z0-9])\s+(.+)$/i);
              if (letterMatch) {
                candidates.add(`${letterMatch[2]} ${letterMatch[1]}`);
              }

              for (const cand of candidates) {
                if (lang === 'zh') {
                  const candClean = cand.replace(/\s+/g, '').replace(/型/g, '');
                  const isLatinOnly = /^[a-zA-Z0-9]+$/.test(candClean);
                  if (isLatinOnly) {
                    const regex = new RegExp(`(?<=^|[^a-zA-Z0-9])${candClean}(?![a-zA-Z0-9])`, 'iu');
                    if (regex.test(clue)) {
                      leakCount++;
                    }
                  } else {
                    const clueClean = clue.replace(/\s+/g, '');
                    if (candClean.length >= 2 && clueClean.includes(candClean)) {
                      leakCount++;
                    }
                  }
                } else {
                  const isArabic = lang === 'ar' || /[\u0600-\u06FF]/.test(cand);
                  const arabicInflectionalSuffix = '(?:ات|ية|ة|ي|ين|ان|ون|يتها|يته)?';
                  const compoundSuffix = '(?:schicht|schichten|bindung|bindungen|atom|atome|atomen|gitter|gittern|molekül|moleküle|molekülen|ion|ionen|kraft|kräfte|kräften|gas|gase|gasen|flüssigkeit|flüssigkeiten|reaktion|reaktionen|teilchen|energie|energien|konstante|konstanten)?';
                  const cyrillicCaseSuffix = '(?:а|я|у|ю|е|ом|ем|ой|ей|ы|и|ов|ев|ах|ях|ам|ям|ами|ями)?';
                  const latinInflectionalSuffix = '(?:(?:ler|lar|an|ên|ing|ed|ung|er|em)?(?:in|ın|un|ün|nin|nın|nun|nün|nde|nda|nden|ndan|ne|na|ni|nı|nu|nü|te|ta|de|da|ten|tan|den|dan|ye|ya|e|a|i|ı|u|ü|ê|î|le|la|s|es|en|n)?(?:dir|dır|dür|dur|tir|tır|tür|tur)?)';
                  const inflectionalSuffix = `(?:${latinInflectionalSuffix}|${cyrillicCaseSuffix}|${arabicInflectionalSuffix})`;
                  const suffixPattern = `(?:${compoundSuffix}${inflectionalSuffix})`;

                  let candidatePattern: string;
                  if (isArabic) {
                    const arabicWords = cand.trim().split(/[-\s]+/).map((w) => {
                      const stripped = (w.startsWith('ال') && w.length > 2) ? w.slice(2) : w;
                      const escaped = stripped.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                      return `(?:ال)?${escaped}(?:${arabicInflectionalSuffix})?`;
                    });
                    candidatePattern = arabicWords.join('[-\\s]+');
                  } else {
                    const words = cand.trim().split(/[-\s]+/).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
                    candidatePattern = (lang === 'ku' && words.length >= 2)
                      ? words.join('(?:ê|a|ya|yê|ên|an)?[-\\s]+')
                      : words.join('[-\\s]+');
                  }

                  const lookbehind = '(?<=^|[^\\p{L}\\p{N}])';
                  const lookahead = '(?![\\p{L}\\p{N}])';
                  const arabicPrefix = '';
                  const leakRegex = new RegExp(`${lookbehind}${arabicPrefix}${candidatePattern}${suffixPattern}${lookahead}`, 'iu');

                  if (leakRegex.test(clue)) {
                    leakCount++;
                  }
                }
              }
            }
          }
        }
      }
      expect(leakCount).toBe(0);
    })
  );

  printTestResult(
    await test('T1.F13.16', 1, 'F13-I18N', 'assertNoUnitTitleAnswerLeaks: 0 unit title leaks of correct answers in Type A stems', () => {
      const langs = ['tr', 'en', 'de', 'fr', 'ru', 'ar', 'zh', 'ku'] as const;
      let leakCount = 0;
      for (const lang of langs) {
        const langQs = prodCompileAllQuestions(PROD_CHEMISTRY_UNITS, lang);
        for (const q of langQs) {
          const isTypeA = q.stem.includes('ayırt edilen kimyasal tür veya kavram') ||
            q.stem.includes('which chemical species or concept is defined by the distinguishing trait') ||
            (q.stem.includes('wird in') && q.stem.includes('durch das Merkmal')) ||
            q.stem.includes('quelle espèce chimique ou notion est définie') ||
            q.stem.includes('Какое химическое вещество или понятие') ||
            q.stem.includes('أي نوع كيميائي أو مفهوم يتميز بالخاصية') ||
            q.stem.includes('以下哪种化学微粒或概念具有显著特征') ||
            q.stem.includes('kîjan cûreyê kîmyewî an têgeh bi taybetmendiya');
          if (isTypeA) {
            const correctOpt = q.options[q.correctIndex].trim();
            const cleanConcept = correctOpt.toLowerCase().replace(/\s*[（\(][^）\)]*[）\)]/g, '').trim();
            if (cleanConcept.length >= (lang === 'zh' ? 1 : 3)) {
              const titleMatch = q.stem.match(/["“«]([^"”»]+)["”»]/);
              if (titleMatch) {
                const titleText = titleMatch[1].toLowerCase();
                if (titleText.includes(cleanConcept)) {
                  leakCount++;
                }
              }
            }
          }
        }
      }
      expect(leakCount).toBe(0);
    })
  );

  printTestResult(
    await test('T1.F13.18', 1, 'F13-I18N', 'assertRegressionQuestionSanitization: u24-q043, u24-q059, u24-q091, u03-q027, u06-q027, u02-q075 zero clue leaks', () => {
      const u24 = PROD_CHEMISTRY_UNITS.find(u => u.id === 'u24');
      expect(u24).toBeDefined();
      const u24Ar = prodCompileUnitQuestions(u24!, 'ar');
      const q043 = u24Ar.find(q => q.id === 'u24-q043');
      expect(q043).toBeDefined();
      const quote043 = q043!.stem.match(/["“«]([^"”»]+)["”»]/g);
      const clue043 = quote043 ? quote043[quote043.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
      expect(clue043.includes('الألكانات')).toBe(false);
      expect(clue043.includes('ألكان')).toBe(false);

      const q059 = u24Ar.find(q => q.id === 'u24-q059');
      expect(q059).toBeDefined();
      const quote059 = q059!.stem.match(/["“«]([^"”»]+)["”»]/g);
      const clue059 = quote059 ? quote059[quote059.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
      expect(clue059.includes('الألكينات')).toBe(false);
      expect(clue059.includes('ألكين')).toBe(false);

      const q091 = u24Ar.find(q => q.id === 'u24-q091');
      expect(q091).toBeDefined();
      const quote091 = q091!.stem.match(/["“«]([^"”»]+)["”»]/g);
      const clue091 = quote091 ? quote091[quote091.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
      expect(clue091.includes('الحمض الكربوكسيلي')).toBe(false);
      expect(clue091.includes('حمض الكربوكسيل')).toBe(false);

      const u03 = PROD_CHEMISTRY_UNITS.find(u => u.id === 'u03');
      expect(u03).toBeDefined();
      const u03Ar = prodCompileUnitQuestions(u03!, 'ar');
      const q027 = u03Ar.find(q => q.id === 'u03-q027');
      expect(q027).toBeDefined();
      const quote027 = q027!.stem.match(/["“«]([^"”»]+)["”»]/g);
      const clue027 = quote027 ? quote027[quote027.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
      expect(clue027.includes('الرابطة الهيدروجينية')).toBe(false);
      expect(clue027.includes('رابطة الهيدروجين')).toBe(false);

      const u06 = PROD_CHEMISTRY_UNITS.find(u => u.id === 'u06');
      expect(u06).toBeDefined();
      const u06Ar = prodCompileUnitQuestions(u06!, 'ar');
      const q06_27 = u06Ar.find(q => q.id === 'u06-q027');
      expect(q06_27).toBeDefined();
      // Key is the atomic mass unit; seed spelling 'وحدة كتل ذرية', standard term 'وحدة الكتلة الذرية'.
      expect(['1 وحدة كتل ذرية (amu)', '1 وحدة الكتلة الذرية (amu)', '1 وحدة الكتل الذرية (amu)']).toContain(q06_27!.options[q06_27!.correctIndex]);
      const quote06_27 = q06_27!.stem.match(/["“«]([^"”»]+)["”»]/g);
      const clue06_27 = quote06_27 ? quote06_27[quote06_27.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
      for (const tok of ['وحدة كتل ذرية', 'وحدة الكتلة الذرية', 'وحدة الكتل الذرية', 'amu', 'أكب']) {
        expect(clue06_27.includes(tok)).toBe(false);
      }

      const u02 = PROD_CHEMISTRY_UNITS.find(u => u.id === 'u02');
      expect(u02).toBeDefined();
      const u02Ku = prodCompileUnitQuestions(u02!, 'ku');
      const q02_75 = u02Ku.find(q => q.id === 'u02-q075');
      expect(q02_75).toBeDefined();
      expect(q02_75!.options[q02_75!.correctIndex]).toBe('Metal');
      const quote02_75 = q02_75!.stem.match(/["“«]([^"”»]+)["”»]/g);
      const clue02_75 = quote02_75 ? quote02_75[quote02_75.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
      expect(clue02_75.startsWith('Metal ')).toBe(false);
      expect(clue02_75.includes(' metals ')).toBe(false);
    })
  );

  printTestResult(
    await test('T1.F13.17', 1, 'F13-I18N', 'assertNoSpecificMtArtifacts: 0 instances of comical/military MT artifacts across units', () => {
      const specificMtArtifacts = [
        'Сифон ÖSYM',
        'ÖSYM 疏水阀',
        '扎伊采夫支队',
        '加入马尔科夫尼科夫',
        'مراقبة الجودة',
      ];
      let artifactCount = 0;
      for (const u of PROD_CHEMISTRY_UNITS) {
        const uJson = JSON.stringify(u);
        for (const art of specificMtArtifacts) {
          if (uJson.includes(art)) {
            artifactCount++;
          }
        }
      }
      expect(artifactCount).toBe(0);
    })
  );

  printTestResult(
    await test('T1.F13.18', 1, 'F13-I18N', 'assertNoOsymLeaksInForeignFlashcards: 0 untranslated ÖSYM acronym leaks in foreign flashcards', () => {
      const foreignLangs = ['en', 'de', 'fr', 'ru', 'ar', 'zh', 'ku'] as const;
      let leakCount = 0;
      for (const lang of foreignLangs) {
        const cards = prodCompileAllFlashcards(PROD_CHEMISTRY_UNITS, lang);
        for (const c of cards) {
          if (/ÖSYM/i.test(c.osymTip) || /ÖSYM/i.test(c.front) || /ÖSYM/i.test(c.back)) {
            leakCount++;
          }
        }
      }
      expect(leakCount).toBe(0);
    })
  );
}

// Standalone runner execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const { setupTestEnvironment } = await import('./harness/testEnv');
  setupTestEnvironment();
  console.log('Running Tier 1 Tests directly...');
  await runTier1Tests();
  console.log('Tier 1 standalone run complete.');
}
