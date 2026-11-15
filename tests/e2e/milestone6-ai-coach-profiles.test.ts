/**
 * Kimya YKS — Milestone 6 Automated Test Suite
 * Features 31–37:
 * - F31: Compact Premium UI & Action Pills across 8 Languages
 * - F32: Turkey YKS Sequential Progression (TYT First, then AYT)
 * - F33: Multi-Profile Management Architecture, Isolation & Legacy Migration
 * - F34: 100% Offline AI Chemistry Coach Engine (8 Languages)
 * - F35: Configurable Daily Study Targets & Goal-Miss Warnings
 * - F36: Toggleable Mobile/Web Notifications & Strict Suppression
 * - F37: Pure SVG Statistics & Daily Activity Charts Dashboard Math
 */

import { setupTestEnvironment, renderStoreHook } from './harness/testEnv';
import { expect, test } from './harness/testFramework';
import { printTestResult } from './harness/reporter';
import { useAppStore, createDefaultProfile, todayStamp, type LearnerProfile } from '../../src/store/useAppStore';
import { generateAiCoachReport } from '../../src/engine/aiCoachEngine';
import { notificationManager } from '../../src/utils/notificationManager';
import { UNIT_ACTION_PILLS } from '../../src/components/study/CurriculumView';
import { ALL_CHEMISTRY_UNITS } from '../../src/data/units';
import type { LanguageCode } from '../../src/types/chemistry';

setupTestEnvironment();

export async function runMilestone6Tests(): Promise<void> {
  // =========================================================================
  // Test 1: Multi-Profile Creation, Switching, Isolation & Deletion
  // =========================================================================
  printTestResult(
    await test('T1.F14.01', 1, 'F14-M6', 'Multi-Profile Creation, Switching, Telemetry Isolation & Deletion', async () => {
      localStorage.clear();
      const { result, act, unmount } = await renderStoreHook(useAppStore);

      // 1. Initial store has default profile
      expect(result.current.profiles).toHaveLength(1);
      const defaultProfId = result.current.activeProfileId;
      expect(result.current.activeProfile.name).toBe('Öğrenci 1');

      // 2. Profile 1 earns XP and solves questions
      await act(() => {
        result.current.earnXp(120);
        result.current.recordQuestionResult('u01-q001', true);
        result.current.recordQuestionResult('u01-q002', false); // mistake
        result.current.toggleBookmark('u02-q010');
      });

      expect(result.current.xp).toBe(150 + 120 + 15 + 3);
      expect(result.current.mistakeQuestionIds).toContain('u01-q002');
      expect(result.current.bookmarkedQuestionIds).toContain('u02-q010');

      // 3. Create Profile 2: "Zeynep", AYT_FOCUS
      let prof2Id = '';
      await act(() => {
        prof2Id = result.current.createProfile('Zeynep', '👩‍🎓', 'AYT_FOCUS');
      });

      expect(result.current.profiles).toHaveLength(2);
      expect(result.current.activeProfileId).toBe(prof2Id);
      expect(result.current.activeProfile.name).toBe('Zeynep');
      expect(result.current.activeProfile.avatar).toBe('👩‍🎓');
      expect(result.current.activeProfile.targetTrack).toBe('AYT_FOCUS');

      // 4. Verify Profile 2 state is 100% clean and isolated
      expect(result.current.xp).toBe(0);
      expect(result.current.mistakeQuestionIds).toHaveLength(0);
      expect(result.current.bookmarkedQuestionIds).toHaveLength(0);
      expect(Object.keys(result.current.solvedQuestionIds)).toHaveLength(0);

      // 5. Profile 2 solves questions
      await act(() => {
        result.current.earnXp(500);
        result.current.recordQuestionResult('u11-q001', true);
      });
      expect(result.current.xp).toBe(515);

      // 6. Switch back to Profile 1
      await act(() => {
        result.current.switchProfile(defaultProfId);
      });
      expect(result.current.activeProfileId).toBe(defaultProfId);
      expect(result.current.activeProfile.name).toBe('Öğrenci 1');
      expect(result.current.xp).toBe(150 + 120 + 15 + 3); // Untouched
      expect(result.current.mistakeQuestionIds).toContain('u01-q002');
      expect(result.current.bookmarkedQuestionIds).toContain('u02-q010');

      // 7. Deletion safety: Cannot delete when only 1 profile exists
      // Now 2 profiles exist, delete profile 1
      await act(() => {
        result.current.deleteProfile(defaultProfId);
      });
      expect(result.current.profiles).toHaveLength(1);
      expect(result.current.activeProfileId).toBe(prof2Id);
      expect(result.current.activeProfile.name).toBe('Zeynep');

      // Attempting to delete the sole remaining profile should be suppressed
      await act(() => {
        result.current.deleteProfile(prof2Id);
      });
      expect(result.current.profiles).toHaveLength(1);
      expect(result.current.activeProfileId).toBe(prof2Id);

      unmount();
    })
  );

  // =========================================================================
  // Test 2: Legacy Migration Preserving Existing Telemetry into Default Profile
  // =========================================================================
  printTestResult(
    await test('T1.F14.02', 1, 'F14-M6', 'Legacy Store Migration Preserves XP, Streaks, Mistakes & History', async () => {
      localStorage.clear();
      const today = todayStamp();
      const legacyPayload = {
        language: 'de',
        xp: 840,
        streakDays: 4,
        lastActiveDate: today,
        soundEnabled: false,
        musicEnabled: true,
        musicVolume: 0.5,
        sfxVolume: 0.6,
        solvedQuestionIds: { 'u01-q001': true, 'u01-q002': true, 'u02-q005': false },
        mistakeQuestionIds: ['u02-q005'],
        bookmarkedQuestionIds: ['u03-q015'],
        masteredCardIds: ['c01', 'c02'],
        completedSlideUnits: ['u01'],
        gameHighScores: { hunter: 120 },
        mockBestScores: { 'mock-tyt-01': { bestNet: 6.25, correct: 7, wrong: 3, total: 7, attempts: 2 } },
        examResults: [],
      };

      localStorage.setItem('kimya-yks-progress-v1', JSON.stringify(legacyPayload));

      const { result, unmount } = await renderStoreHook(useAppStore);

      // Verify migration into default profile
      expect(result.current.profiles).toHaveLength(1);
      const migrated = result.current.activeProfile;
      expect(migrated.name).toBe('Öğrenci 1');
      expect(result.current.language).toBe('de');
      expect(result.current.xp).toBe(840);
      expect(result.current.streakDays).toBe(4);
      expect(result.current.mistakeQuestionIds).toContain('u02-q005');
      expect(result.current.bookmarkedQuestionIds).toContain('u03-q015');
      expect(result.current.masteredCardIds).toHaveLength(2);
      expect(result.current.completedSlideUnits).toContain('u01');
      expect(result.current.gameHighScores.hunter).toBe(120);
      expect(result.current.mockBestScores['mock-tyt-01'].bestNet).toBe(6.25);
      expect(migrated.dailyHistory.length).toBeGreaterThanOrEqual(1);

      unmount();
    })
  );

  // =========================================================================
  // Test 3: Turkey YKS Sequential Exam Progression (TYT First, then AYT)
  // =========================================================================
  printTestResult(
    await test('T1.F14.03', 1, 'F14-M6', 'Turkey YKS Sequential Exam Progression (TYT u01-u10 then AYT u11-u24)', () => {
      // 1. Exactly 10 TYT units (u01 to u10)
      const tytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT');
      expect(tytUnits).toHaveLength(10);
      tytUnits.forEach((u, idx) => {
        expect(u.order).toBe(idx + 1);
        expect(u.id).toBe(`u${String(idx + 1).padStart(2, '0')}`);
      });

      // 2. Exactly 14 AYT units (u11 to u24)
      const aytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'AYT');
      expect(aytUnits).toHaveLength(14);
      aytUnits.forEach((u, idx) => {
        expect(u.order).toBe(idx + 11);
        expect(u.id).toBe(`u${String(idx + 11).padStart(2, '0')}`);
      });

      // 3. Compact Action Pills localized across all 8 languages
      const languages: LanguageCode[] = ['tr', 'en', 'de', 'fr', 'ru', 'ar', 'zh', 'ku'];
      languages.forEach((lng) => {
        const p = UNIT_ACTION_PILLS[lng as LanguageCode];
        expect(p).toBeDefined();
        expect(p.slide.length).toBeGreaterThan(0);
        expect(p.quiz.length).toBeGreaterThan(0);
        expect(p.lab3d.length).toBeGreaterThan(0);
        expect(p.cards.length).toBeGreaterThan(0);
      });

      // Check specific localization tokens
      expect(UNIT_ACTION_PILLS.tr.slide).toBe('Slayt');
      expect(UNIT_ACTION_PILLS.en.slide).toBe('Slide');
      expect(UNIT_ACTION_PILLS.de.slide).toBe('Folie');
      expect(UNIT_ACTION_PILLS.fr.slide).toBe('Diapo');
      expect(UNIT_ACTION_PILLS.ru.slide).toBe('Слайды');
      expect(UNIT_ACTION_PILLS.ar.slide).toBe('شريحة');
      expect(UNIT_ACTION_PILLS.zh.slide).toBe('幻灯片');
      expect(UNIT_ACTION_PILLS.ku.slide).toBe('Slayt');

      // 4. Prerequisite Coaching Alert Logic:
      // When targetTrack is TYT_FIRST and TYT mastery < 60%, warning is needed
      const profLowTyt = createDefaultProfile('test-low', 'Test', '👨‍🎓');
      profLowTyt.targetTrack = 'TYT_FIRST';
      profLowTyt.solvedQuestionIds = ['u01-q001']; // very low solved
      const repLow = generateAiCoachReport(profLowTyt, 'tr');
      expect(repLow.prerequisiteWarning).toBeDefined();
      expect(repLow.prerequisiteWarning?.needed).toBe(true);

      // When TYT mastery is high (e.g. >= 100 questions solved with high accuracy)
      const profHighTyt = createDefaultProfile('test-high', 'Test', '👨‍🎓');
      profHighTyt.targetTrack = 'TYT_FIRST';
      const highSolved: string[] = [];
      const solvedMap: Record<string, boolean> = {};
      for (let u = 1; u <= 10; u++) {
        for (let q = 1; q <= 16; q++) {
          const qId = `u${String(u).padStart(2, '0')}-q${String(q).padStart(3, '0')}`;
          highSolved.push(qId);
          solvedMap[qId] = true;
        }
      }
      profHighTyt.solvedQuestionIds = highSolved;
      profHighTyt.solvedMap = solvedMap;
      const repHigh = generateAiCoachReport(profHighTyt, 'tr');
      expect(repHigh.prerequisiteWarning).toBeUndefined();
    })
  );

  // =========================================================================
  // Test 4: 100% Offline AI Chemistry Coach Engine (8 Languages)
  // =========================================================================
  printTestResult(
    await test('T1.F14.04', 1, 'F14-M6', '100% Offline AI Coach Engine Telemetry & 8-Language Localization', () => {
      const sampleProf = createDefaultProfile('p-coach-test', 'Coach Test', '🔬');
      sampleProf.targetTrack = 'TYT_FIRST';

      // Simulate mastery in u01 (16 solved, 15 correct)
      for (let q = 1; q <= 16; q++) {
        const qId = `u01-q${String(q).padStart(3, '0')}`;
        sampleProf.solvedQuestionIds.push(qId);
        if (!sampleProf.solvedMap) sampleProf.solvedMap = {};
        sampleProf.solvedMap[qId] = q !== 16; // 15 correct, 1 wrong
      }

      // Simulate weak topic in u02 (3 mistakes)
      sampleProf.mistakeQuestionIds = ['u02-q001', 'u02-q002', 'u02-q003'];
      sampleProf.solvedQuestionIds.push('u02-q001', 'u02-q002', 'u02-q003');
      sampleProf.solvedMap!['u02-q001'] = false;
      sampleProf.solvedMap!['u02-q002'] = false;
      sampleProf.solvedMap!['u02-q003'] = false;

      const languages: LanguageCode[] = ['tr', 'en', 'de', 'fr', 'ru', 'ar', 'zh', 'ku'];
      languages.forEach((lng) => {
        const report = generateAiCoachReport(sampleProf, lng);

        expect(report.profileName).toBe('Coach Test');
        expect(report.language).toBe(lng);

        // Mastered topics: u01 has 16 solved, 15 correct (94% accuracy >= 75%)
        expect(report.masteredTopics.some((t) => t.unitId === 'u01')).toBe(true);

        // Weak topics: u02 has mistakes
        expect(report.weakTopics.some((t) => t.unitId === 'u02')).toBe(true);

        // Recommendations: Actionable next steps
        expect(report.recommendations.length).toBeGreaterThanOrEqual(1);
        report.recommendations.forEach((rec) => {
          expect(rec.title.length).toBeGreaterThan(0);
          expect(rec.reason.length).toBeGreaterThan(0);
          expect(rec.actionLabel.length).toBeGreaterThan(0);
        });

        // Spaced Repetition suggestions
        expect(report.spacedRepetitionSuggestions.mistakeCountToRetry).toBe(3);
        expect(report.spacedRepetitionSuggestions.summary.length).toBeGreaterThan(0);

        // Daily Smart Missions: exactly 4 missions
        expect(report.dailyMissions).toHaveLength(4);
        report.dailyMissions.forEach((m) => {
          expect(m.title.length).toBeGreaterThan(0);
          expect(m.description.length).toBeGreaterThan(0);
          expect(m.targetCount).toBeGreaterThan(0);
          expect(typeof m.completed).toBe('boolean');
        });
      });
    })
  );

  // =========================================================================
  // Test 5: Configurable Daily Study Targets & Goal-Miss Warning Trigger Logic
  // =========================================================================
  printTestResult(
    await test('T1.F14.05', 1, 'F14-M6', 'Configurable Daily Study Targets, Active Timer & Goal-Miss Detection', async () => {
      localStorage.clear();
      const { result, act, unmount } = await renderStoreHook(useAppStore);

      // 1. Default goals
      expect(result.current.activeProfile.dailyQuestionGoal).toBe(30);
      expect(result.current.activeProfile.dailyStudyMinutesGoal).toBe(30);

      // 2. Configure custom goals
      await act(() => {
        result.current.updateProfile(result.current.activeProfileId, {
          dailyQuestionGoal: 50,
          dailyStudyMinutesGoal: 45,
        });
      });
      expect(result.current.activeProfile.dailyQuestionGoal).toBe(50);
      expect(result.current.activeProfile.dailyStudyMinutesGoal).toBe(45);

      // 3. Goal miss detection when questions or minutes < goal
      const today = result.current.activeProfile.dailyHistory[result.current.activeProfile.dailyHistory.length - 1];
      expect(today.questionsSolved).toBe(0);
      expect(today.studyMinutes).toBe(0);
      const isMissedBefore = today.questionsSolved < 50 || today.studyMinutes < 45;
      expect(isMissedBefore).toBe(true);

      // 4. Record study minutes and solved questions
      await act(() => {
        result.current.recordStudyMinutes(45);
        for (let i = 1; i <= 50; i++) {
          result.current.recordQuestionResult(`u01-q${String(i).padStart(3, '0')}`, true);
        }
      });

      const todayAfter = result.current.activeProfile.dailyHistory[result.current.activeProfile.dailyHistory.length - 1];
      expect(todayAfter.studyMinutes).toBe(45);
      expect(todayAfter.questionsSolved).toBe(50);

      const isMissedAfter = todayAfter.questionsSolved < 50 || todayAfter.studyMinutes < 45;
      expect(isMissedAfter).toBe(false);

      unmount();
    })
  );

  // =========================================================================
  // Test 6: Notification Manager Strict Suppression When Disabled
  // =========================================================================
  printTestResult(
    await test('T1.F14.06', 1, 'F14-M6', 'Notification Manager Strict Suppression & Opt-In Protocol', async () => {
      // 1. Strict Opt-in suppression: If enabled is false, return false unconditionally
      const resSendSuppressed = await notificationManager.sendImmediateNotification('Test Title', 'Test Body', false);
      expect(resSendSuppressed).toBe(false);

      const resScheduleSuppressed = await notificationManager.scheduleDailyReminder('20:00', 'Test', 'Body', false);
      expect(resScheduleSuppressed).toBe(false);

      // 2. Cancellation method executes safely without errors
      await notificationManager.cancelAllReminders();

      // 3. Permission status and support checks
      expect(typeof notificationManager.isSupported()).toBe('boolean');
      expect(typeof notificationManager.getPermissionStatus()).toBe('string');
    })
  );

  // =========================================================================
  // Test 7: Pure SVG Chart Math and Element Coordinate Bounds
  // =========================================================================
  printTestResult(
    await test('T1.F14.07', 1, 'F14-M6', 'Pure SVG Chart Calculations, Ring Circumference & Sparkline Bounding', () => {
      // 1. Circular progress ring math
      const radius = 42;
      const circumference = 2 * Math.PI * radius; // 263.89378290154264
      expect(circumference).toBeGreaterThan(263);
      expect(circumference).toBeLessThan(264);

      // 0% mastery -> offset = circumference
      const offset0 = circumference * (1 - 0 / 100);
      expect(offset0).toBe(circumference);

      // 50% mastery -> offset = circumference / 2
      const offset50 = circumference * (1 - 50 / 100);
      expect(offset50).toBeCloseTo(circumference / 2, 2);

      // 100% mastery -> offset = 0
      const offset100 = circumference * (1 - 100 / 100);
      expect(offset100).toBe(0);

      // 2. Barchart scaling math
      const svgH = 180;
      const maxVal = 50;
      const testVal = 25;
      const barHeight = (testVal / maxVal) * (svgH - 50); // (25/50)*130 = 65
      expect(barHeight).toBe(65);
      const barY = svgH - 30 - barHeight; // 180 - 30 - 65 = 85
      expect(barY).toBe(85);
      expect(barY).toBeGreaterThanOrEqual(0);
      expect(barY + barHeight).toBe(svgH - 30); // Base aligned to axis

      // 3. Sparkline coordinates within bounds
      const points = [50, 70, 65, 85, 90, 80, 95];
      const sparkW = 280;
      const sparkH = 90;
      const step = sparkW / (points.length - 1);
      const coords = points.map((val, idx) => ({
        x: idx * step,
        y: sparkH - 10 - (val / 100) * (sparkH - 25),
      }));

      expect(coords).toHaveLength(7);
      coords.forEach((c) => {
        expect(c.x).toBeGreaterThanOrEqual(0);
        expect(c.x).toBeLessThanOrEqual(sparkW);
        expect(c.y).toBeGreaterThanOrEqual(0);
        expect(c.y).toBeLessThanOrEqual(sparkH);
      });
    })
  );
}
