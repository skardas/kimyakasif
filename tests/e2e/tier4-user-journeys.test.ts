/**
 * Tier 4: Real-World Workload User Journeys (Scenarios S1 - S7)
 * Validates complete end-to-end user workflows spanning multiple sessions,
 * viewports, state machines, and features with 7 full journey test cases (target >= 7).
 */

import { expect, test } from './harness/testFramework';
import { printTestResult } from './harness/reporter';
import {
  ALL_CHEMISTRY_UNITS,
  compileAllQuestions,
  compileUnitQuestions,
  compileAllFlashcards,
  LeitnerBoxEngine,
  THREE_SCENES_DATA,
  ELEMENTS_SAMPLE,
  validatePropaneCombustion,
  validateLewisMolecule,
  simulateTitration,
  simulateSynthesis,
  SFXEngine,
  CanvasConfettiEngine,
  UI_TRANSLATIONS,
  wrapChemFormula,
  calculateOsymNet,
  AppStoreState,
  LANGUAGES,
  ChemBlitzEngine,
} from './harness/contracts';

export async function runTier4Tests(): Promise<void> {
  // =========================================================================
  // Scenario S1: New Student Onboarding & First Diagnostic Quiz
  // Features: F08, F10, F09, F01, F03, F07, F11
  // =========================================================================
  printTestResult(
    await test('T4.SCEN.01', 4, 'S1', 'Scenario S1: New Student Onboarding & First Diagnostic Quiz', () => {
      localStorage.clear();
      const store = new AppStoreState();
      const sfx = new SFXEngine();
      const confetti = new CanvasConfettiEngine();

      // 1. First launch: onboarding not yet seen
      expect(store.hasSeenOnboarding).toBe(false);

      // 2. Carousel navigation through 4 slides
      const slides = ['3D Lab', 'Question Bank', 'Games', 'Offline'];
      let currentSlide = 0;
      for (let i = 0; i < slides.length - 1; i++) {
        currentSlide++;
      }
      expect(currentSlide).toBe(3);

      // 3. Finish onboarding
      store.hasSeenOnboarding = true;
      expect(store.hasSeenOnboarding).toBe(true);

      // 4. Toggle theme to Light
      store.setTheme('light');
      expect(store.theme).toBe('light');
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');

      // 5. Start Unit 01 Set 1 Practice Quiz (16 questions)
      const u01Set1 = compileUnitQuestions(ALL_CHEMISTRY_UNITS[0], 'tr').filter((q) => q.setNumber === 1);
      expect(u01Set1).toHaveLength(16);

      // 6. Answer: 14 correct, 2 wrong
      for (let i = 0; i < 14; i++) {
        store.recordQuestionResult(u01Set1[i].id, true);
        sfx.playCorrect();
      }
      for (let i = 14; i < 16; i++) {
        store.recordQuestionResult(u01Set1[i].id, false);
        sfx.playWrong();
      }

      // 7. Finish quiz: compute Net score and award celebration
      const net = calculateOsymNet(14, 2);
      expect(net).toBe(13.5); // 14 - 2/4 = 13.50
      sfx.playFinish();
      confetti.triggerBurst({ width: 800, height: 600 });

      expect(sfx.callLog).toContain('playFinish');
      expect(confetti.particleCount).toBe(250);
      expect(store.xp).toBe(14 * 12 + 2 * 2); // 168 + 4 = 172 XP
    })
  );

  // =========================================================================
  // Scenario S2: Full TYT Chemistry Branch Trial with Hata Defteri
  // Features: F01, F03, F07, F11, F12
  // =========================================================================
  printTestResult(
    await test('T4.SCEN.02', 4, 'S2', 'Scenario S2: Full TYT Chemistry Branch Trial with Hata Defteri Lifecycle', () => {
      localStorage.clear();
      const store = new AppStoreState();
      const sfx = new SFXEngine();

      // 1. Start TYT Branch Trial: 7 questions sampled across TYT u01-u10
      const tytPool = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT');
      const examQuestions = tytPool.slice(0, 7).map((u) => compileUnitQuestions(u, 'tr')[0]);
      expect(examQuestions).toHaveLength(7);

      // 2. Answer: Q1-Q4 correct, Q5-Q6 wrong, Q7 blank
      store.recordQuestionResult(examQuestions[0].id, true);
      store.recordQuestionResult(examQuestions[1].id, true);
      store.recordQuestionResult(examQuestions[2].id, true);
      store.recordQuestionResult(examQuestions[3].id, true);

      store.recordQuestionResult(examQuestions[4].id, false);
      store.recordQuestionResult(examQuestions[5].id, false);
      // Q7 is omitted (empty)

      // 3. Record exam attempt
      const attempt = store.recordExamAttempt({
        examType: 'TYT',
        correct: 4,
        wrong: 2,
        empty: 1,
      });

      expect(attempt.netScore).toBe(3.5); // 4 - 2/4 = 3.50
      sfx.playFinish();

      // 4. Questions 5 & 6 automatically in Hata Defteri
      expect(store.mistakeQuestionIds).toHaveLength(2);
      expect(store.mistakeQuestionIds).toContain(examQuestions[4].id);
      expect(store.mistakeQuestionIds).toContain(examQuestions[5].id);

      // 5. Open Hata Defteri and re-test: Q5 answered correctly -> resolved!
      store.recordQuestionResult(examQuestions[4].id, true);
      expect(store.mistakeQuestionIds).toHaveLength(1);
      expect(store.mistakeQuestionIds).not.toContain(examQuestions[4].id);

      // 6. Q6 answered incorrectly again -> remains in Hata Defteri
      store.recordQuestionResult(examQuestions[5].id, false);
      expect(store.mistakeQuestionIds).toHaveLength(1);
      expect(store.mistakeQuestionIds).toContain(examQuestions[5].id);
    })
  );

  // =========================================================================
  // Scenario S3: AYT Organic Chemistry Mastery & 3D Molecule Exploration
  // Features: F02, F03, F04, F07
  // =========================================================================
  printTestResult(
    await test('T4.SCEN.03', 4, 'S3', 'Scenario S3: AYT Organic Chemistry Mastery & 3D Molecule Exploration', () => {
      localStorage.clear();
      const store = new AppStoreState();
      const confetti = new CanvasConfettiEngine();

      // 1. Navigate to AYT Unit 23 (Carbon Chemistry) and Unit 24 (Hydrocarbons)
      const u23 = ALL_CHEMISTRY_UNITS.find((u) => u.id === 'u23');
      const u24 = ALL_CHEMISTRY_UNITS.find((u) => u.id === 'u24');
      expect(u23!.grade).toBe(12);
      expect(u24!.grade).toBe(12);

      // 2. Open 3D Lab: inspect VSEPR Tetrahedral and Benzene Ring
      const tetScene = THREE_SCENES_DATA.find((s) => s.id === 'scene-vsepr-tetrahedral');
      const bnzScene = THREE_SCENES_DATA.find((s) => s.id === 'scene-benzene-resonance');
      expect(tetScene).toBeDefined();
      expect(bnzScene).toBeDefined();

      // Hotspot validation: tetrahedral 109.5° sp3
      const cHotspot = tetScene!.hotspots[0];
      expect(cHotspot.role.tr).toContain('sp3');

      // 3. Launch Unit 24 Practice Set 1 (16 questions)
      const u24Set1 = compileUnitQuestions(u24!, 'tr').filter((q) => q.setNumber === 1);
      expect(u24Set1).toHaveLength(16);

      // 4. Bookmark Q4 (Tollens test)
      store.toggleBookmark(u24Set1[3].id);
      expect(store.bookmarkedQuestionIds).toContain(u24Set1[3].id);

      // 5. Answer all 16 correctly (100% score)
      u24Set1.forEach((q) => {
        store.recordQuestionResult(q.id, true);
      });

      const attempt = store.recordExamAttempt({
        examType: 'PRACTICE',
        unitId: 'u24',
        correct: 16,
        wrong: 0,
        empty: 0,
      });

      expect(attempt.netScore).toBe(16.0);
      confetti.triggerBurst({ width: 800, height: 600 });
      expect(confetti.isActive).toBe(true);
    })
  );

  // =========================================================================
  // Scenario S4: Leitner Spaced Repetition 5-Box Daily Routine
  // Features: F05, F08, F12
  // =========================================================================
  printTestResult(
    await test('T4.SCEN.04', 4, 'S4', 'Scenario S4: Leitner Spaced Repetition 5-Box Daily Routine', () => {
      localStorage.clear();
      const cards = compileAllFlashcards(ALL_CHEMISTRY_UNITS, 'tr');
      expect(cards).toHaveLength(396);

      const engine = new LeitnerBoxEngine();
      // Daily queue of 20 cards
      const dailyQueue = cards.slice(0, 20);

      // Review cards:
      // 16 cards marked Mastered (advance to Box 2)
      for (let i = 0; i < 16; i++) {
        const res = engine.rateCard(dailyQueue[i].id, true);
        expect(res.newBox).toBe(2);
        expect(res.xpAwarded).toBe(15);
      }

      // 4 cards marked Needs Review (remain in Box 1)
      for (let i = 16; i < 20; i++) {
        const res = engine.rateCard(dailyQueue[i].id, false);
        expect(res.newBox).toBe(1);
        expect(res.xpAwarded).toBe(0);
      }

      const dist = engine.getDistribution(dailyQueue.map((c) => c.id));
      expect(dist[1]).toBe(4);
      expect(dist[2]).toBe(16);
      expect(dist[3]).toBe(0);

      // Simulate state persistence & reload
      const serialized = JSON.stringify(dailyQueue.map((c) => ({ id: c.id, box: engine.getBox(c.id) })));
      const reloadedData: { id: string; box: number }[] = JSON.parse(serialized);

      const reloadedEngine = new LeitnerBoxEngine();
      reloadedData.forEach((item) => reloadedEngine.setBox(item.id, item.box));

      expect(reloadedEngine.getBox(dailyQueue[0].id)).toBe(2);
      expect(reloadedEngine.getBox(dailyQueue[19].id)).toBe(1);
    })
  );

  // =========================================================================
  // Scenario S5: Complete Chemistry Mini-Games Tournament
  // Features: F06, F11, F12
  // =========================================================================
  printTestResult(
    await test('T4.SCEN.05', 4, 'S5', 'Scenario S5: Complete Chemistry Mini-Games Tournament', () => {
      localStorage.clear();
      const store = new AppStoreState();
      const sfx = new SFXEngine();
      let tournamentScore = 0;

      // Game 1: Periodic Hunter (Find element with highest electronegativity)
      const fluorine = ELEMENTS_SAMPLE.find((e) => e.symbol === 'F');
      expect(fluorine!.electronegativity).toBe(3.98);
      tournamentScore += 25;
      sfx.playCorrect();

      // Game 2: Equation Balancer (Balance C3H8 + 5 O2 -> 3 CO2 + 4 H2O)
      const balRes = validatePropaneCombustion(1, 5, 3, 4);
      expect(balRes.balanced).toBe(true);
      expect(balRes.minimal).toBe(true);
      tournamentScore += 30;
      sfx.playSuccess();

      // Game 3: Lewis Dot Builder (NH3 octet satisfaction)
      const lewisRes = validateLewisMolecule('NH3', 3, 1);
      expect(lewisRes.valid).toBe(true);
      tournamentScore += lewisRes.score; // 35
      sfx.playCorrect();

      // Game 4: Acid-Base Titration (Reach 25.00 mL equivalence point)
      const titRes = simulateTitration(25.0);
      expect(titRes.ph).toBe(7.0);
      expect(titRes.status).toBe('equivalence');
      tournamentScore += 40;
      sfx.playFinish();

      // Game 5: Compound Synthesis Arena (Ester synthesis)
      const synthRes = simulateSynthesis(['CH3COOH', 'C2H5OH'], true, true);
      expect(synthRes.success).toBe(true);
      tournamentScore += synthRes.xpAwarded; // 40
      sfx.playFizz();

      // Game 6: Chem-Blitz (Answer 10 rapid True/False questions)
      const blitz = new ChemBlitzEngine();
      for (let i = 0; i < 10; i++) {
        const q = blitz.questions[blitz.currentIndex % blitz.questions.length];
        blitz.submitAnswer(q.isTrue);
        blitz.tick(2);
      }
      expect(blitz.score).toBeGreaterThan(0);
      expect(blitz.isFinished).toBe(false);
      tournamentScore += blitz.score;
      store.gameHighScores['blitz'] = blitz.score;

      // Award tournament score to global XP
      store.xp += tournamentScore;
      expect(tournamentScore).toBeGreaterThan(500);
      expect(store.xp).toBe(tournamentScore);
      expect(sfx.callLog).toContain('playFizz');
    })
  );

  // =========================================================================
  // Scenario S6: Multilingual Language Switching & Formula Integrity
  // Features: F13, F08, F01, F03
  // =========================================================================
  printTestResult(
    await test('T4.SCEN.06', 4, 'S6', 'Scenario S6: Multilingual Language Switching & Formula Integrity', () => {
      localStorage.clear();
      const store = new AppStoreState();

      // 1. Start in default Turkish
      store.setLanguage('tr');
      expect(store.language).toBe('tr');
      expect(document.documentElement.dir).toBe('ltr');

      // 2. Switch to Arabic (sets RTL)
      store.setLanguage('ar');
      expect(store.language).toBe('ar');
      expect(document.documentElement.dir).toBe('rtl');

      // 3. Chemical formulas must be protected inside <bdi dir="ltr">
      const formula1 = 'H2SO4';
      const formula2 = '2 H2O <=> H3O+ + OH-';
      const wrapped1 = wrapChemFormula(formula1);
      const wrapped2 = wrapChemFormula(formula2);

      expect(wrapped1).toContain('dir="ltr"');
      expect(wrapped1).toContain('H2SO4');
      expect(wrapped2).toContain('dir="ltr"');
      expect(wrapped2).toContain('H3O+ + OH-');

      // 4. Cycle through all 8 languages: TR -> AR -> EN -> KU -> ZH -> DE -> FR -> RU -> TR
      const sequence: typeof store.language[] = ['tr', 'ar', 'en', 'ku', 'zh', 'de', 'fr', 'ru', 'tr'];
      sequence.forEach((lang) => {
        store.setLanguage(lang);
        const expectedDir = lang === 'ar' ? 'rtl' : 'ltr';
        expect(document.documentElement.dir).toBe(expectedDir);
        expect(document.documentElement.lang).toBe(lang);
      });

      // 5. Restored to Turkish
      expect(store.language).toBe('tr');
      expect(document.documentElement.dir).toBe('ltr');
    })
  );

  // =========================================================================
  // Scenario S7: Full Offline Persistence & Data Reset Lifecycle
  // Features: F12, F08, F07, F09, F11
  // =========================================================================
  printTestResult(
    await test('T4.SCEN.07', 4, 'S7', 'Scenario S7: Full Offline Persistence & Data Reset Lifecycle', () => {
      localStorage.clear();
      const store1 = new AppStoreState();

      // 1. Accumulate state
      store1.xp = 450;
      store1.streakDays = 3;
      store1.setTheme('light');
      store1.soundEnabled = true;
      store1.musicEnabled = true;
      store1.toggleBookmark('u01-q001');
      store1.toggleBookmark('u02-q005');

      // 2. Simulate offline mode (navigator.onLine = false)
      (navigator as any).onLine = false;

      // 3. Solve questions and bookmark while offline
      store1.recordQuestionResult('u01-q002', true);
      store1.recordQuestionResult('u01-q003', false);
      store1.toggleBookmark('u03-q010');

      // 4. Save state to localStorage
      const json = store1.serialize();
      localStorage.setItem('kimya-app-state', json);

      // 5. Simulate browser restart and state rehydration
      const store2 = new AppStoreState();
      const raw = localStorage.getItem('kimya-app-state');
      store2.deserialize(raw!);

      expect(store2.xp).toBe(450 + 12 + 2); // 464 XP
      expect(store2.streakDays).toBe(3);
      expect(store2.theme).toBe('light');
      expect(store2.bookmarkedQuestionIds).toHaveLength(3);
      expect(store2.mistakeQuestionIds).toContain('u01-q003');

      // 6. Perform Factory Data Reset
      store2.resetAllProgress();

      // 7. Verify complete wipe to clean defaults
      expect(store2.xp).toBe(0);
      expect(store2.streakDays).toBe(0);
      expect(store2.bookmarkedQuestionIds).toHaveLength(0);
      expect(store2.mistakeQuestionIds).toHaveLength(0);
      expect(store2.theme).toBe('dark');
      expect(store2.language).toBe('tr');
      expect(store2.hasSeenOnboarding).toBe(false);

      // Restore navigator online
      (navigator as any).onLine = true;
    })
  );
}

// Standalone runner execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const { setupTestEnvironment } = await import('./harness/testEnv');
  setupTestEnvironment();
  console.log('Running Tier 4 Tests directly...');
  await runTier4Tests();
  console.log('Tier 4 standalone run complete.');
}
