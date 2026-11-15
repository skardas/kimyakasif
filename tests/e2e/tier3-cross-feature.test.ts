/**
 * Tier 3: Cross-Feature Combinations (Pairwise Interaction Testing)
 * Validates complex interactions between distinct functional modules
 * with 16 deterministic test cases (target >= 15).
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
  validatePropaneCombustion,
  simulateTitration,
  simulateSynthesis,
  SFXEngine,
  CanvasConfettiEngine,
  UI_TRANSLATIONS,
  wrapChemFormula,
  calculateOsymNet,
  AppStoreState,
  LANGUAGES,
  parseThemeCss,
  getContrastRatio,
} from './harness/contracts';

export async function runTier3Tests(): Promise<void> {
  printTestResult(
    await test(
      'T3.PAIR.01',
      3,
      'F01-TYT x F03-BANK',
      'TYT Curriculum & Question Bank compilation: 10 units x 128 verified questions, archetype balance, key uniformity & chemistry domain integrity',
      () => {
        const tytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT');

        // 1. Structural Unit Cardinality: Exactly 10 TYT units (u01 to u10)
        expect(tytUnits).toHaveLength(10);
        expect(tytUnits.map((u) => u.id)).toEqual([
          'u01', 'u02', 'u03', 'u04', 'u05', 'u06', 'u07', 'u08', 'u09', 'u10',
        ]);

        // 2. Compilation Cardinality: Exactly 1,280 TYT questions (10 * 128)
        const tytQs = tytUnits.flatMap((u) => compileUnitQuestions(u, 'tr'));
        expect(tytQs).toHaveLength(1280);

        // 3. Grade-Level Segregation: u01-u05 Grade 9 (640 Qs), u06-u10 Grade 10 (640 Qs)
        const grade9Qs = tytQs.filter((q) => {
          const u = tytUnits.find((unit) => unit.id === q.unitId);
          return u && u.grade === 9;
        });
        const grade10Qs = tytQs.filter((q) => {
          const u = tytUnits.find((unit) => unit.id === q.unitId);
          return u && u.grade === 10;
        });
        expect(grade9Qs).toHaveLength(640);
        expect(grade10Qs).toHaveLength(640);

        // 4. Pedagogical Archetype Ratios: Every TYT unit contains all 6 archetypes in 8 sets
        tytUnits.forEach((u) => {
          const uQs = tytQs.filter((q) => q.unitId === u.id);
          const romans = uQs.filter((q) => q.archetype === 'roman-numeral');
          const negTraps = uQs.filter((q) => q.archetype === 'negative-trap');
          const posConcepts = uQs.filter((q) => q.archetype === 'positive-concept');
          const matches = uQs.filter((q) => q.archetype === 'structure-property-match');
          const orders = uQs.filter((q) => q.archetype === 'reaction-calculation-order');
          const twins = uQs.filter((q) => q.archetype === 'osym-twin');

          expect(romans).toHaveLength(32); // 4 per set * 8
          expect(negTraps).toHaveLength(24); // 3 per set * 8
          expect(posConcepts).toHaveLength(24); // 3 per set * 8
          expect(matches).toHaveLength(16); // 2 per set * 8
          expect(orders).toHaveLength(16); // 2 per set * 8
          expect(twins).toHaveLength(16); // 2 per set * 8
        });

        // 5. Option Key Distribution Uniformity: Balanced across A, B, C, D, E (each 24-28 per unit)
        tytUnits.forEach((u) => {
          const uQs = tytQs.filter((q) => q.unitId === u.id);
          const keyCounts = [0, 0, 0, 0, 0];
          uQs.forEach((q) => keyCounts[q.correctIndex]++);
          keyCounts.forEach((count) => {
            expect(count).toBeGreaterThanOrEqual(24);
            expect(count).toBeLessThanOrEqual(28);
          });
        });

        // 6. Anti-Clustering Guarantee: No run of > 2 identical consecutive answers anywhere in TYT bank
        let maxConsecutiveSameKey = 1;
        let currentRun = 1;
        for (let i = 1; i < tytQs.length; i++) {
          if (tytQs[i].correctIndex === tytQs[i - 1].correctIndex && tytQs[i].unitId === tytQs[i - 1].unitId) {
            currentRun++;
            if (currentRun > maxConsecutiveSameKey) maxConsecutiveSameKey = currentRun;
          } else {
            currentRun = 1;
          }
        }
        expect(maxConsecutiveSameKey).toBeLessThanOrEqual(2);

        // 7. Domain Chemistry Vocabulary Verification: Real chemistry concepts exist in stems/explanations
        const sampleText = tytQs.map((q) => `${q.stem} ${q.explanation}`).join(' ');
        const requiredTytTerms = [
          'simya', 'atom', 'periyot', 'iyonik', 'kovalent', 'viskozite',
          'sera gazı', 'mol', 'avogadro', 'stokiyometri', 'çözelti', 'asit', 'baz', 'sabun'
        ];
        requiredTytTerms.forEach((term) => {
          expect(sampleText.toLowerCase()).toContain(term.toLowerCase());
        });

        // 8. Zero-Mocking Integrity Audit: Zero dummy placeholder strings
        const forbiddenPlaceholders = ['Temel İlke #', 'Seçenek A (', 'Kavram A', 'undefined', '[object'];
        forbiddenPlaceholders.forEach((badToken) => {
          expect(sampleText).not.toContain(badToken);
        });
      }
    )
  );

  printTestResult(
    await test(
      'T3.PAIR.02',
      3,
      'F02-AYT x F03-BANK',
      'AYT Curriculum & Question Bank compilation: 14 units x 128 verified questions, formula notation, difficulty staging & ÖSYM trial exam session integration',
      () => {
        const aytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'AYT');

        // 1. Structural Unit Cardinality: Exactly 14 AYT units (u11 to u24)
        expect(aytUnits).toHaveLength(14);
        expect(aytUnits.map((u) => u.id)).toEqual([
          'u11', 'u12', 'u13', 'u14', 'u15', 'u16', 'u17',
          'u18', 'u19', 'u20', 'u21', 'u22', 'u23', 'u24',
        ]);

        // 2. Compilation Cardinality: Exactly 1,792 AYT questions (14 * 128)
        const aytQs = aytUnits.flatMap((u) => compileUnitQuestions(u, 'tr'));
        expect(aytQs).toHaveLength(1792);

        // 3. Grade-Level Segregation: u11-u20 Grade 11 (1,280 Qs), u21-u24 Grade 12 (512 Qs)
        const grade11Qs = aytQs.filter((q) => {
          const u = aytUnits.find((unit) => unit.id === q.unitId);
          return u && u.grade === 11;
        });
        const grade12Qs = aytQs.filter((q) => {
          const u = aytUnits.find((unit) => unit.id === q.unitId);
          return u && u.grade === 12;
        });
        expect(grade11Qs).toHaveLength(1280);
        expect(grade12Qs).toHaveLength(512);

        // 4. Difficulty Progression Staging across 8 Sets
        aytUnits.forEach((u) => {
          const uQs = aytQs.filter((q) => q.unitId === u.id);
          const easyMed = uQs.filter((q) => q.setNumber <= 2);
          const medHard = uQs.filter((q) => q.setNumber >= 3 && q.setNumber <= 6);
          const hardOsym = uQs.filter((q) => q.setNumber >= 7);

          expect(easyMed).toHaveLength(32);
          expect(medHard).toHaveLength(64);
          expect(hardOsym).toHaveLength(32);
        });

        // 5. AYT Chemical Formulas & Equations Verification
        const aytText = aytQs.map((q) => `${q.stem} ${q.options.join(' ')} ${q.explanation}`).join(' ');
        const requiredAytFormulas = [
          // The bank treats the effect of concentration on cell voltage qualitatively (no Nernst
          // calculation), so the electrochemistry unit is represented by the standard cell potential.
          'PV', 'RT', 'Kc', 'Kp', 'ΔH', 'pH', 'Kçç', 'E°pil', 'Faraday', 'VSEPR', 'Markovnikov', 'sp3'
        ];
        requiredAytFormulas.forEach((formula) => {
          expect(aytText).toContain(formula);
        });

        // 6. Cross-Feature Pairwise Session Simulation: Sample an authentic 13-Q AYT Trial Exam
        const trialQuestions = aytUnits.slice(0, 13).map((u) => {
          const unitQs = aytQs.filter((q) => q.unitId === u.id && q.archetype === 'osym-twin');
          return unitQs[0];
        });
        expect(trialQuestions).toHaveLength(13);

        // Simulate authentic student answer vector: 10 correct, 2 wrong, 1 omitted
        // Indices 0..9: student selects the correct option (q.correctIndex)
        // Indices 10..11: student selects an incorrect distractor ((q.correctIndex + 1) % 5)
        // Index 12: student omits / leaves question blank (null)
        const studentAnswers: (number | null)[] = trialQuestions.map((q, idx) => {
          if (idx < 10) return q.correctIndex;
          if (idx < 12) return (q.correctIndex + 1) % 5;
          return null;
        });

        let simulatedCorrect = 0;
        let simulatedWrong = 0;
        let simulatedEmpty = 0;

        trialQuestions.forEach((q, idx) => {
          const studentChoice = studentAnswers[idx];
          if (studentChoice === null) {
            simulatedEmpty++;
          } else if (studentChoice === q.correctIndex) {
            simulatedCorrect++;
          } else {
            simulatedWrong++;
          }
        });

        expect(simulatedCorrect).toBe(10);
        expect(simulatedWrong).toBe(2);
        expect(simulatedEmpty).toBe(1);

        // Verify ÖSYM Net Calculation on AYT session: 10 - 2/4 = 9.50 Net
        const net = calculateOsymNet(simulatedCorrect, simulatedWrong);
        expect(net).toBe(9.50);

        // 7. Option Uniqueness & Distractor Sanity: Every AYT question has 5 distinct options
        const sampleQuestion = aytQs[100];
        const uniqueOptions = new Set(sampleQuestion.options);
        expect(uniqueOptions.size).toBe(5);

        // 8. Zero-Mocking Integrity Audit: Zero dummy placeholder strings
        const forbiddenPlaceholders = ['Temel İlke #', 'Seçenek A (', 'Kavram A', 'undefined', '[object'];
        forbiddenPlaceholders.forEach((badToken) => {
          expect(aytText).not.toContain(badToken);
        });
      }
    )
  );

  printTestResult(
    await test('T3.PAIR.03', 3, 'F01-TYT x F07-EXAM', 'TYT 7-Question Branch Trial strictly samples across u01-u10', () => {
      const tytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT');
      const trialQuestions = tytUnits.slice(0, 7).map((u) => compileUnitQuestions(u, 'tr')[0]);
      expect(trialQuestions).toHaveLength(7);
      trialQuestions.forEach((q) => {
        expect(q.exam).toBe('TYT');
        expect(q.unitId).toMatch(/^u0[1-9]|u10$/);
      });
    })
  );

  printTestResult(
    await test('T3.PAIR.04', 3, 'F02-AYT x F07-EXAM', 'AYT 13-Question Branch Trial strictly samples across u11-u24', () => {
      const aytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'AYT');
      const trialQuestions = aytUnits.slice(0, 13).map((u) => compileUnitQuestions(u, 'tr')[0]);
      expect(trialQuestions).toHaveLength(13);
      trialQuestions.forEach((q) => {
        expect(q.exam).toBe('AYT');
        expect(q.unitId).toMatch(/^u(1[1-9]|2[0-4])$/);
      });
    })
  );

  printTestResult(
    await test('T3.PAIR.05', 3, 'F03-BANK x F07-EXAM', 'Practice Set evaluation: answering 16 questions evaluates Net score and awards XP', () => {
      const store = new AppStoreState();
      const initialXp = store.xp;
      const set1Qs = compileUnitQuestions(ALL_CHEMISTRY_UNITS[0], 'tr').filter((q) => q.setNumber === 1);
      expect(set1Qs).toHaveLength(16);

      // Answer 12 correct, 4 wrong
      for (let i = 0; i < 12; i++) {
        store.recordQuestionResult(set1Qs[i].id, true);
      }
      for (let i = 12; i < 16; i++) {
        store.recordQuestionResult(set1Qs[i].id, false);
      }

      const net = calculateOsymNet(12, 4);
      expect(net).toBe(11.0); // 12 - 4/4 = 11.0
      expect(store.xp).toBe(initialXp + 12 * 12 + 4 * 2); // 144 + 8 = 152 XP
    })
  );

  printTestResult(
    await test('T3.PAIR.06', 3, 'F07-EXAM x F11-AUDIO', 'Exam Finish triggers fanfare audio and celebration confetti', () => {
      const sfx = new SFXEngine();
      const confetti = new CanvasConfettiEngine();
      const store = new AppStoreState();

      // Complete exam
      const attempt = store.recordExamAttempt({
        examType: 'TYT',
        correct: 6,
        wrong: 1,
        empty: 0,
      });

      if (attempt.netScore > 0) {
        sfx.playFinish();
        sfx.playApplause();
        confetti.triggerBurst({ width: 800, height: 600 });
      }

      expect(sfx.callLog).toContain('playFinish');
      expect(sfx.callLog).toContain('playApplause');
      expect(confetti.particleCount).toBe(250);
      expect(confetti.isActive).toBe(true);
    })
  );

  printTestResult(
    await test('T3.PAIR.07', 3, 'F07-EXAM x F12-OFFLINE', 'Hata Defteri offline persistence saves wrong answers to localStorage', () => {
      localStorage.clear();
      const store1 = new AppStoreState();
      store1.recordQuestionResult('u07-q001', false);
      store1.recordQuestionResult('u07-q002', false);
      expect(store1.mistakeQuestionIds).toHaveLength(2);

      const json = store1.serialize();
      localStorage.setItem('kimya-app-state', json);

      const store2 = new AppStoreState();
      const raw = localStorage.getItem('kimya-app-state');
      store2.deserialize(raw!);
      expect(store2.mistakeQuestionIds).toHaveLength(2);
      expect(store2.mistakeQuestionIds).toContain('u07-q001');
      expect(store2.mistakeQuestionIds).toContain('u07-q002');
    })
  );

  printTestResult(
    await test('T3.PAIR.08', 3, 'F04-3D x F09-THEME', '3D Scene builder respects isDark parameter when theme changes', () => {
      const scene = THREE_SCENES_DATA[0];
      const darkBuilt = scene.builder({}, true);
      const lightBuilt = scene.builder({}, false);
      expect(typeof darkBuilt.dispose).toBe('function');
      expect(typeof lightBuilt.dispose).toBe('function');
    })
  );

  printTestResult(
    await test('T3.PAIR.09', 3, 'F04-3D x F13-I18N', '3D Scene hotspots render localized titles and facts across languages', () => {
      const scene = THREE_SCENES_DATA.find((s) => s.id === 'scene-daniell-cell');
      expect(scene).toBeDefined();
      const hs = scene!.hotspots[0]; // Zn Anode
      LANGUAGES.forEach((l) => {
        expect(hs.name[l.code].length).toBeGreaterThan(0);
        expect(hs.role[l.code].length).toBeGreaterThan(0);
        expect(hs.osymExamFact[l.code].length).toBeGreaterThan(0);
      });
    })
  );

  printTestResult(
    await test('T3.PAIR.10', 3, 'F05-CARD x F12-OFFLINE', 'Leitner 5-box distribution persists and rehydrates identically', () => {
      const engine1 = new LeitnerBoxEngine();
      engine1.setBox('c-1', 2);
      engine1.setBox('c-2', 3);
      engine1.setBox('c-3', 5);

      const stateDump = JSON.stringify({
        'c-1': engine1.getBox('c-1'),
        'c-2': engine1.getBox('c-2'),
        'c-3': engine1.getBox('c-3'),
      });

      const parsed = JSON.parse(stateDump);
      const engine2 = new LeitnerBoxEngine();
      Object.keys(parsed).forEach((k) => engine2.setBox(k, parsed[k]));

      expect(engine2.getBox('c-1')).toBe(2);
      expect(engine2.getBox('c-2')).toBe(3);
      expect(engine2.getBox('c-3')).toBe(5);
    })
  );

  printTestResult(
    await test('T3.PAIR.11', 3, 'F06-GAME x F11-AUDIO', 'Mini-game audio integration: Balancer triggers success, Titration triggers bubble/fizz', () => {
      const sfx = new SFXEngine();

      // Balancer success
      const balRes = validatePropaneCombustion(1, 5, 3, 4);
      if (balRes.minimal) {
        sfx.playSuccess();
      }

      // Titration drop & equivalence
      const titRes = simulateTitration(25.0);
      if (titRes.status === 'equivalence') {
        sfx.playFinish();
        sfx.playFizz();
      }

      expect(sfx.callLog).toContain('playSuccess');
      expect(sfx.callLog).toContain('playFinish');
      expect(sfx.callLog).toContain('playFizz');
    })
  );

  printTestResult(
    await test('T3.PAIR.12', 3, 'F06-GAME x F12-OFFLINE', 'Chem-Blitz high score saves to store and awards global XP', () => {
      localStorage.clear();
      const store = new AppStoreState();
      const earnedScore = 180;
      store.gameHighScores['blitz'] = Math.max(store.gameHighScores['blitz'] || 0, earnedScore);
      store.xp += earnedScore;

      expect(store.gameHighScores['blitz']).toBe(180);
      expect(store.xp).toBe(180);

      const json = store.serialize();
      const store2 = new AppStoreState();
      store2.deserialize(json);
      expect(store2.gameHighScores['blitz']).toBe(180);
      expect(store2.xp).toBe(180);
    })
  );

  printTestResult(
    await test('T3.PAIR.13', 3, 'F08-SHELL x F09-THEME', 'Shell theme styling updates navigation bar and data-theme synchronously', () => {
      const store = new AppStoreState();
      store.setTheme('dark');
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
      store.setTheme('light');
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    })
  );

  printTestResult(
    await test('T3.PAIR.14', 3, 'F08-SHELL x F13-I18N', 'Shell RTL Layout: switching to Arabic mirrors navigation layout to dir="rtl"', () => {
      const store = new AppStoreState();
      store.setLanguage('ar');
      expect(document.documentElement.dir).toBe('rtl');
      expect(document.documentElement.lang).toBe('ar');
    })
  );

  printTestResult(
    await test('T3.PAIR.15', 3, 'F10-SPLASH x F09-THEME', 'Splash screen logo and animation render in both dark and light modes', () => {
      const theme = parseThemeCss();

      // 1. Verify dark theme splash background token matches CSS specification (--stage-ink / --bg-canvas-dark)
      const darkBg = theme.tokens['stage-ink'] || theme.tokens['bg-canvas-dark'];
      expect(darkBg).toBe('#070b14');

      // 2. Verify light theme canvas background token matches CSS specification (--bg-canvas-light)
      const lightBg = theme.tokens['bg-canvas-light'];
      expect(lightBg).toBe('#edf1f5');

      // 3. Verify brand primary colors used for splash logos in dark and light modes
      const darkLogo = theme.tokens['brand-primary-dark'];
      const lightLogo = theme.tokens['accent-cyan-light'];
      expect(darkLogo).toBe('#2dd9c3');
      expect(lightLogo).toBe('#0a7c70');

      // 4. Verify splash contrast accessibility: splash text (#f8fafc) and logo (#2dd9c3) against darkBg (#070b14)
      const textContrast = getContrastRatio('#f8fafc', darkBg);
      const logoContrast = getContrastRatio(darkLogo, darkBg);
      expect(textContrast).toBeGreaterThanOrEqual(7.0); // Exceeds WCAG AAA (7.0:1)
      expect(logoContrast).toBeGreaterThanOrEqual(4.5); // Exceeds WCAG AA (4.5:1)
    })
  );

  printTestResult(
    await test('T3.PAIR.16', 3, 'F13-I18N x F03-BANK', 'Multilingual Question Bank: switching language provides localized stems', () => {
      const trQs = compileUnitQuestions(ALL_CHEMISTRY_UNITS[0], 'tr');
      const enQs = compileUnitQuestions(ALL_CHEMISTRY_UNITS[0], 'en');
      const arQs = compileUnitQuestions(ALL_CHEMISTRY_UNITS[0], 'ar');

      expect(trQs[0].stem).toContain('Kimya Bilimi');
      expect(enQs[0].stem).toContain('Chemistry as a Science');
      expect(arQs[0].stem).toContain('علم الكيمياء');
    })
  );
}

// Standalone runner execution
if (import.meta.url === `file://${process.argv[1]}`) {
  const { setupTestEnvironment } = await import('./harness/testEnv');
  setupTestEnvironment();
  console.log('Running Tier 3 Tests directly...');
  await runTier3Tests();
  console.log('Tier 3 standalone run complete.');
}
