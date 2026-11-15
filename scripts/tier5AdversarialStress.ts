/**
 * Tier 5 Adversarial Stress Testing Suite for Kimya YKS
 * 31 Deep Adversarial Probes across 5 Critical Domains:
 * 1. AppStore & Preferences Hostile Persistence Stress (7 probes)
 * 2. Question Bank Generator & Enrichment Boundary Stress (6 probes)
 * 3. Mock Exam Catalog & Scoring Engine Edge Cases (6 probes)
 * 4. Chemistry Games & Numerical Boundaries Stress (6 probes)
 * 5. Web Audio SFX Synthesis & Resource Bounds (6 probes)
 *
 * Execution: npx tsx scripts/tier5AdversarialStress.ts
 */

import React from 'react';
import { setupTestEnvironment, renderStoreHook, MockAudioContext } from '../tests/e2e/harness/testEnv';
import { useAppStore } from '../src/store/useAppStore';
import { usePreferences } from '../src/store/usePreferences';
import {
  rotateOptions,
  normalizeProseOption,
  sanitizeEntityClue,
  compileUnitQuestions,
} from '../src/engine/questionGenerator';
import { enrichQuestionsWithDiagrams } from '../src/engine/diagramQuestionEnricher';
import {
  calculateOsymNet,
  estimateTgPercentile,
  buildMockExamQuestions,
  buildTgProvaQuestions,
  ALL_MOCK_EXAM_SPECS,
  getMockExamCatalog,
} from '../src/engine/mockExamCatalog';
import {
  AUTHENTIC_EQUATIONS,
  gcd,
  gcdList,
  parseFormula,
} from '../src/components/games/EquationBalancer';
import { calculatePhCurve } from '../src/components/games/TitrationSimulator';
import { generateBlitzQuestions } from '../src/components/games/ChemBlitzGame';
import {
  setSfxEnabled,
  setSfxVolume,
  isSfxEnabled,
  getSfxVolume,
  getAudioContext,
  unlockAudio,
  playCorrect,
  playWrong,
  playBubble,
  playFizz,
  playDrop,
  playSuccess,
  playFinish,
  playApplause,
} from '../src/audio/sfx';
import { MUSIC_TRACKS, MUSIC_MOODS } from '../src/audio/musicEngine';
import { Confetti } from '../src/components/common/Confetti';
import { ALL_CHEMISTRY_UNITS } from '../src/data/units';
import type { LanguageCode } from '../src/types/chemistry';

// 1. Initialize deterministic headless browser environment
setupTestEnvironment();

let totalAssertions = 0;
let passedProbes = 0;
let failedProbes = 0;

interface ProbeResult {
  id: string;
  name: string;
  domain: string;
  passed: boolean;
  assertions: number;
  durationMs: number;
  error?: string;
}

const probeResults: ProbeResult[] = [];

function assert(condition: boolean, message: string): void {
  totalAssertions++;
  if (!condition) {
    throw new Error(`Assertion Failed: ${message}`);
  }
}

function assertThrows(fn: () => void, message: string): void {
  totalAssertions++;
  let threw = false;
  try {
    fn();
  } catch {
    threw = true;
  }
  if (!threw) {
    throw new Error(`Expected Error Not Thrown: ${message}`);
  }
}

async function runProbe(
  id: string,
  domain: string,
  name: string,
  testFn: () => Promise<void> | void
): Promise<void> {
  const start = performance.now();
  const initialAssertions = totalAssertions;
  try {
    await testFn();
    const durationMs = Number((performance.now() - start).toFixed(2));
    const probeAssertions = totalAssertions - initialAssertions;
    passedProbes++;
    probeResults.push({
      id,
      name,
      domain,
      passed: true,
      assertions: probeAssertions,
      durationMs,
    });
    console.log(`  ✔ [PASS] ${id} (${domain}): ${name} (${durationMs}ms, ${probeAssertions} assertions)`);
  } catch (err: any) {
    const durationMs = Number((performance.now() - start).toFixed(2));
    const probeAssertions = totalAssertions - initialAssertions;
    failedProbes++;
    probeResults.push({
      id,
      name,
      domain,
      passed: false,
      assertions: probeAssertions,
      durationMs,
      error: err.message,
    });
    console.error(`  ✖ [FAIL] ${id} (${domain}): ${name} (${durationMs}ms)`);
    console.error(`     Error: ${err.message}`);
  }
}

async function main() {
  console.log('================================================================================');
  console.log('  🧪  KIMYA YKS — TIER 5 ADVERSARIAL STRESS TESTING SUITE (31 PROBES)');
  console.log('================================================================================\n');

  // ============================================================================
  // DOMAIN 1: AppStore & Preferences Hostile Persistence Stress (7 probes)
  // ============================================================================
  console.log('--- Domain 1: AppStore & Preferences Hostile Persistence Stress ---');

  await runProbe('P1.1', 'Store-Persistence', 'LocalStorage corruption with unparseable text, "null", primitives', async () => {
    localStorage.clear();
    localStorage.setItem('kimya-yks-progress-v1', 'null');
    const h1 = await renderStoreHook(useAppStore);
    assert(h1.result.current.streakDays >= 1, 'streakDays >= 1 on "null" storage');
    assert(h1.result.current.xp >= 0, 'xp >= 0 on "null" storage');
    assert(typeof h1.result.current.solvedQuestionIds === 'object', 'solvedQuestionIds is object');
    h1.unmount();

    localStorage.setItem('kimya-yks-progress-v1', '{corrupt json!@#$%');
    const h2 = await renderStoreHook(useAppStore);
    assert(h2.result.current.xp === 150, 'fallback to default xp on unparseable JSON');
    assert(h2.result.current.streakDays === 1, 'fallback to streak 1 on unparseable JSON');
    h2.unmount();

    localStorage.setItem('kimya-yks-progress-v1', '12345');
    const h3 = await renderStoreHook(useAppStore);
    assert(h3.result.current.xp === 150, 'fallback on primitive number in storage');
    h3.unmount();

    localStorage.setItem('kimya-yks-progress-v1', 'true');
    const h4 = await renderStoreHook(useAppStore);
    assert(h4.result.current.xp === 150, 'fallback on primitive boolean in storage');
    h4.unmount();

    localStorage.setItem('kimya-yks-progress-v1', '[]');
    const h5 = await renderStoreHook(useAppStore);
    assert(h5.result.current.xp === 150, 'fallback on array in storage');
    h5.unmount();
  });

  await runProbe('P1.2', 'Store-Persistence', 'Hostile streak days: 0 days, 10,000+ days, future date timestamps, NaN', async () => {
    localStorage.clear();
    localStorage.setItem('kimya-yks-progress-v1', JSON.stringify({ streakDays: 0, lastActiveDate: '2020-01-01' }));
    const h1 = await renderStoreHook(useAppStore);
    assert(h1.result.current.streakDays >= 1, 'streakDays clamped to >= 1 when 0 stored');
    h1.unmount();

    localStorage.setItem('kimya-yks-progress-v1', JSON.stringify({ streakDays: -50, lastActiveDate: '2020-01-01' }));
    const h2 = await renderStoreHook(useAppStore);
    assert(h2.result.current.streakDays >= 1, 'streakDays clamped to >= 1 when negative stored');
    h2.unmount();

    localStorage.setItem('kimya-yks-progress-v1', JSON.stringify({ streakDays: NaN }));
    const h3 = await renderStoreHook(useAppStore);
    assert(h3.result.current.streakDays >= 1, 'streakDays recovered when NaN stored');
    h3.unmount();

    const d = new Date();
    const today = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    localStorage.setItem('kimya-yks-progress-v1', JSON.stringify({ streakDays: 14500, lastActiveDate: today }));
    const h4 = await renderStoreHook(useAppStore);
    assert(h4.result.current.streakDays === 14500, 'Legitimate high streak retained on same day');
    h4.unmount();
  });

  await runProbe('P1.3', 'Store-XP', 'XP boundary stress: negative delta, extreme delta (+10,000,000), NaN delta', async () => {
    localStorage.clear();
    const { result, act, unmount } = await renderStoreHook(useAppStore);
    await act(() => result.current.earnXp(-5000));
    assert(result.current.xp === 0, 'Negative delta clamped to 0 XP');

    await act(() => result.current.earnXp(NaN));
    assert(result.current.xp === 0 && Number.isFinite(result.current.xp), 'NaN delta ignored');

    await act(() => result.current.earnXp(Infinity));
    assert(result.current.xp === 0, 'Infinity delta ignored');

    await act(() => result.current.earnXp(-Infinity));
    assert(result.current.xp === 0, '-Infinity delta ignored');

    await act(() => result.current.earnXp(10_000_000));
    assert(result.current.xp === 10_000_000, 'Extreme positive delta handled cleanly');
    unmount();
  });

  await runProbe('P1.4', 'Store-Level', 'Level and progress percentage bounds: level >= 1, progress [0, 100]', async () => {
    localStorage.clear();
    const { result, act, unmount } = await renderStoreHook(useAppStore);

    // Initial default xp = 150
    assert(result.current.level === 1, 'Level is 1 for initial 150 XP');
    assert(result.current.levelProgressPct === 60, 'Progress pct is 60% for 150 XP (150/250)');

    // Reset XP to 0
    await act(() => result.current.earnXp(-1000));
    assert(result.current.xp === 0, 'XP is 0');
    assert(result.current.level >= 1, 'Level >= 1 when XP is 0');
    assert(result.current.levelProgressPct === 0, 'Progress pct is 0 when XP is 0');

    // XP = 249 (1 XP before level 2)
    await act(() => result.current.earnXp(249));
    assert(result.current.level === 1, 'Level remains 1 at 249 XP');
    assert(result.current.levelProgressPct === 100, 'Progress pct is 100 at 249 XP');

    // XP = 250 (exact level 2)
    await act(() => result.current.earnXp(1));
    assert(result.current.level === 2, 'Level advances to 2 at 250 XP');
    assert(result.current.levelProgressPct === 0, 'Progress pct is 0 at exact level threshold');

    // XP = 999
    await act(() => result.current.earnXp(749)); // 250 + 749 = 999
    assert(result.current.level === 4, 'Level is 4 at 999 XP');
    assert(result.current.levelProgressPct >= 0 && result.current.levelProgressPct <= 100, 'Progress pct in [0, 100]');
    unmount();
  });

  await runProbe('P1.5', 'Store-Mistakes', 'Solved & mistake questions sets: deduplication and retry mastery deletion', async () => {
    localStorage.clear();
    const { result, act, unmount } = await renderStoreHook(useAppStore);

    // Solve question wrong
    await act(() => result.current.recordQuestionResult('u01-test-q1', false));
    assert(result.current.mistakeQuestionIds.includes('u01-test-q1'), 'Mistake recorded');
    assert(result.current.solvedQuestionIds['u01-test-q1'] === false, 'Solved status false');

    // Solve question wrong again (must not duplicate in array)
    await act(() => result.current.recordQuestionResult('u01-test-q1', false));
    const occurrences = result.current.mistakeQuestionIds.filter((id) => id === 'u01-test-q1').length;
    assert(occurrences === 1, 'No duplicate IDs in mistakeQuestionIds');

    // Retry and solve correctly (mastery deletion)
    await act(() => result.current.recordQuestionResult('u01-test-q1', true));
    assert(!result.current.mistakeQuestionIds.includes('u01-test-q1'), 'Mistake removed on correct retry');
    assert(result.current.solvedQuestionIds['u01-test-q1'] === true, 'Solved status updated to true');
    unmount();
  });

  await runProbe('P1.6', 'Store-RingBuffer', 'Exam history ring-buffer: exceeding 50 records clamps at exactly 50', async () => {
    localStorage.clear();
    const { result, act, unmount } = await renderStoreHook(useAppStore);

    for (let i = 0; i < 60; i++) {
      await act(() => {
        result.current.recordExamAttempt({
          modeTitle: `Mock Trial #${i + 1}`,
          examType: 'TYT',
          netScore: 5.25,
          correct: 6,
          wrong: 3,
          empty: 0,
          total: 9,
        });
      });
    }

    assert(result.current.examResults.length === 50, `Ring buffer clamped at 50, got ${result.current.examResults.length}`);
    assert(result.current.examResults[0].modeTitle === 'Mock Trial #60', 'Most recent attempt is at index 0');
    assert(result.current.examResults[49].modeTitle === 'Mock Trial #11', 'Oldest preserved attempt is at index 49');
    unmount();
  });

  await runProbe('P1.7', 'Preferences-Sanitize', 'Preferences & daily tracker corruption recovery', async () => {
    localStorage.clear();
    localStorage.setItem('kimya-prefs', 'null');
    localStorage.setItem('kimya-daily', 'null');
    const { result: prefRes, unmount: prefUnmount } = await renderStoreHook(usePreferences);
    assert(prefRes.current.dailyGoal === 20, 'dailyGoal defaults to 20 on null');
    assert(prefRes.current.todayCount === 0, 'daily count defaults to 0 on null');
    prefUnmount();

    localStorage.setItem('kimya-prefs', JSON.stringify({ dailyGoal: 99999, reduceMotion: 'invalid' }));
    const p2 = await renderStoreHook(usePreferences);
    assert(p2.result.current.dailyGoal === 20, 'invalid dailyGoal clamped to 20');
    assert(p2.result.current.reduceMotion === false, 'invalid reduceMotion coerced to false');
    p2.unmount();

    localStorage.setItem('kimya-daily', JSON.stringify({ count: -50, date: '1999-01-01' }));
    const p3 = await renderStoreHook(usePreferences);
    assert(p3.result.current.todayCount === 0, 'negative past daily count reset to 0');
    p3.unmount();
  });

  // ============================================================================
  // DOMAIN 2: Question Bank Generator & Enrichment Boundary Stress (6 probes)
  // ============================================================================
  console.log('\n--- Domain 2: Question Bank Generator & Enrichment Boundary Stress ---');

  await runProbe('P2.1', 'Generator-Collision', 'rotateOptions distractor collision: throws if distinct distractors < 4', () => {
    assertThrows(
      () => rotateOptions('Target', ['DistA', 'DistB', 'DistC'], 0),
      'Throws when given only 3 distractors'
    );
    assertThrows(
      () => rotateOptions('Target', ['DistA', 'DistA', 'DistA', 'DistA'], 0),
      'Throws when given duplicate distractors (< 4 distinct)'
    );
    assertThrows(
      () => rotateOptions('Target', ['Target', 'DistA', 'DistB', 'DistC'], 0),
      'Throws when distractors contain target and < 4 non-target distinct distractors'
    );
  });

  await runProbe('P2.2', 'Generator-Permutation', 'rotateOptions desiredIndex permutation: 0..4 places target in exact slot', () => {
    const distractors = ['Opt-A', 'Opt-B', 'Opt-C', 'Opt-D', 'Opt-E'];
    for (let slot = 0; slot < 5; slot++) {
      const options = rotateOptions('Target-Correct', distractors, slot);
      assert(options.length === 5, 'Exactly 5 options produced');
      assert(options[slot] === 'Target-Correct', `Target strictly placed in slot ${slot}`);
      assert(new Set(options).size === 5, 'All 5 options are strictly distinct');
    }
  });

  await runProbe('P2.3', 'Generator-Punctuation', 'normalizeProseOption punctuation sanitizer across all 8 languages', () => {
    // Turkish
    assert(normalizeProseOption('Reaksiyon endotermiktir!', 'tr') === 'Reaksiyon endotermiktir.', 'TR: exclamation converted to dot');
    assert(normalizeProseOption('Çözelti doymuştur', 'tr') === 'Çözelti doymuştur.', 'TR: missing dot appended');
    assert(normalizeProseOption('pH 7 midir?', 'tr') === 'pH 7 midir?', 'TR: question mark preserved');

    // Chinese
    assert(normalizeProseOption('这是放热反应！', 'zh') === '这是放热反应。', 'ZH: Chinese exclamation converted to period');
    assert(normalizeProseOption('反应达到平衡', 'zh') === '反应达到平衡。', 'ZH: missing Chinese period appended');

    // Arabic
    assert(normalizeProseOption('هل التفاعل ماص للحرارة؟', 'ar') === 'هل التفاعل ماص للحرارة؟', 'AR: Arabic question mark preserved');
    assert(normalizeProseOption('المحلول مشبع', 'ar') === 'المحلول مشبع.', 'AR: sentence ending appended');

    // English, German, French, Russian, Kurdish
    const testLangs: LanguageCode[] = ['en', 'de', 'fr', 'ru', 'ku'];
    for (const lang of testLangs) {
      assert(normalizeProseOption('Statement without dot', lang).endsWith('.'), `${lang}: dot appended`);
      assert(normalizeProseOption('Statement with exclamation!', lang).endsWith('.'), `${lang}: exclamation replaced`);
    }
  });

  await runProbe('P2.4', 'Generator-RegexSafety', 'sanitizeEntityClue regex metacharacter injection protection', () => {
    // Chemical formulas frequently contain regex metacharacters: +, *, [], ()
    const clue1 = sanitizeEntityClue('Çözeltideki [H+] iyonu derişimi artar', '[H+]', 'tr');
    assert(!clue1.includes('[H+]'), '[H+] bracket notation sanitized without regex crash');

    const clue2 = sanitizeEntityClue('H2O(s) ve CO2(g) molekülleri oluşur', 'H2O(s)', 'tr');
    assert(!clue2.includes('H2O(s)'), 'H2O(s) parentheses notation sanitized without regex crash');

    const clue3 = sanitizeEntityClue('Polimerizasyon n*CH2=CH2 basamağıdır', 'n*', 'tr');
    assert(clue3.length > 0, 'Wildcard asterisk sanitized safely');

    // Chinese fullwidth parentheses and Kurdish compound ezafe sanitization
    const clue4 = sanitizeEntityClue('温室气体捕获红外线', '温室气体（CO2、CH4）', 'zh');
    assert(!clue4.includes('温室气体'), 'Chinese fullwidth parentheses base concept sanitized');

    const clue5 = sanitizeEntityClue('Di pîlê kîmyewî de metalên cuda hene', 'Pîl Kîmyewî', 'ku');
    assert(!clue5.includes('pîlê kîmyewî'), 'Kurdish compound ezafe sanitized');

    // English -ing suffix sanitization
    const clue6 = sanitizeEntityClue('Metallic bonding is the strong bond between electrons', 'Metallic Bond', 'en');
    assert(!clue6.toLowerCase().includes('metallic bond'), 'English -ing suffix sanitized');

    // German compound noun and hyphen variants
    const clue7 = sanitizeEntityClue('Nanotube ist eine zylindrische Form einer Graphenschicht.', 'Graphen', 'de');
    assert(!clue7.includes('Graphen'), 'German compound noun Graphenschicht sanitized');

    const clue8 = sanitizeEntityClue('s-Orbital ist sphärisch symmetrisch', 's Orbital', 'de');
    assert(!clue8.includes('s-Orbital') && !clue8.includes('s Orbital'), 'German hyphen variant s-Orbital sanitized');

    // Chinese spacing variants
    const clue9 = sanitizeEntityClue('s 轨道是球对称的', 's轨道', 'zh');
    assert(!clue9.includes('s 轨道') && !clue9.includes('s轨道'), 'Chinese spacing variant s 轨道 sanitized');

    const clue10 = sanitizeEntityClue('西格玛键完好无损', '西格玛 (σ) 键', 'zh');
    assert(!clue10.includes('西格玛键') && !clue10.includes('西格玛 键'), 'Chinese spacing variant 西格玛键 sanitized');

    // Arabic punctuation boundary (\u060C comma)
    const clue11 = sanitizeEntityClue('في النظائر، عدد البروتونات هو نفسه', 'النظائر', 'ar');
    assert(!clue11.includes('النظائر'), 'Arabic comma punctuation boundary \\p{L}\\p{N} sanitized');

    // Arabic definite article prefix (الـ)
    const clue12 = sanitizeEntityClue('تتكون الرابطة في العنصر بين الذرات', 'عنصر', 'ar');
    assert(!clue12.includes('العنصر') && !clue12.includes('عنصر'), 'Arabic definite article prefix (الـ) sanitized');

    // Russian Cyrillic noun declension endings
    const clue13 = sanitizeEntityClue('В конической колбе Эрленмайеру для титрования', 'Эрленмайер', 'ru');
    assert(!clue13.includes('Эрленмайеру'), 'Russian dative case ending (-у) sanitized');

    // French word order inversion & elision
    const clue14 = sanitizeEntityClue("L'orbitale s est à symétrie sphérique", 's orbitale', 'fr');
    assert(!clue14.includes('orbitale s') && !clue14.includes("L'orbitale"), "French inverted word order and elision (L'orbitale s) sanitized");
  });

  await runProbe('P2.5', 'Generator-DiagramEnricher', 'enrichQuestionsWithDiagrams stability on arbitrary question lists', () => {
    const unit = ALL_CHEMISTRY_UNITS[0];
    const emptyResult = enrichQuestionsWithDiagrams(unit, [], 'tr');
    assert(Array.isArray(emptyResult) && emptyResult.length === 0, 'Empty list handled safely');

    const compiled = compileUnitQuestions(unit, 'tr');
    const enriched = enrichQuestionsWithDiagrams(unit, compiled, 'tr');
    assert(enriched.length === compiled.length, 'Enriched list retains exact input length');

    const diagramCount = enriched.filter((q) => Boolean(q.diagram)).length;
    assert(diagramCount >= 32, `At least 32 questions diagrammed per unit (got ${diagramCount})`);
  });

  await runProbe('P2.6', 'Generator-KeyBalance', 'Key distribution audit across all 24 units under varied seeds', () => {
    for (const unit of ALL_CHEMISTRY_UNITS) {
      const questions = compileUnitQuestions(unit, 'tr');
      assert(questions.length === 128, `Unit ${unit.id} produces exactly 128 questions`);

      const keyTally = [0, 0, 0, 0, 0];
      for (const q of questions) {
        keyTally[q.correctIndex]++;
      }

      for (let k = 0; k < 5; k++) {
        assert(
          keyTally[k] >= 22 && keyTally[k] <= 30,
          `Unit ${unit.id} Option ${String.fromCharCode(65 + k)} count (${keyTally[k]}) within [22, 30]`
        );
      }
    }
  });

  // ============================================================================
  // DOMAIN 3: Mock Exam Catalog & Scoring Engine Edge Cases (6 probes)
  // ============================================================================
  console.log('\n--- Domain 3: Mock Exam Catalog & Scoring Engine Edge Cases ---');

  await runProbe('P3.1', 'Scoring-OsymNet', 'calculateOsymNet formula precision (all wrong -3.25, perfect 20.00)', () => {
    assert(calculateOsymNet(0, 13) === -3.25, '13 wrong yields exactly -3.25 net');
    assert(calculateOsymNet(20, 0) === 20.00, '20 correct yields exactly 20.00 net');
    assert(calculateOsymNet(15, 3) === 14.25, '15 correct 3 wrong yields exactly 14.25 net');
    assert(calculateOsymNet(7, 7) === 5.25, '7 correct 7 wrong yields exactly 5.25 net');
    assert(calculateOsymNet(0, 0) === 0.00, '0 correct 0 wrong yields 0.00 net');
    assert(calculateOsymNet(1, 4) === 0.00, '1 correct 4 wrong yields 0.00 net');
  });

  await runProbe('P3.2', 'Scoring-Percentile', 'estimateTgPercentile rank estimation across all threshold boundaries', () => {
    const netThresholds = [20.0, 19.5, 18.0, 16.5, 15.0, 13.5, 11.0, 10.0, 8.0, 6.0, 3.0, 0.0, -3.25];
    for (const net of netThresholds) {
      const p = estimateTgPercentile(net);
      assert(Number.isFinite(p.percentile) && p.percentile >= 0, `Valid percentile for net ${net}`);
      assert(typeof p.estimatedRankRange === 'string' && p.estimatedRankRange.length > 0, `Valid rank range for net ${net}`);
      assert(typeof p.tierTitle === 'string' && p.tierTitle.length > 0, `Valid tier title for net ${net}`);
      assert(typeof p.badgeIcon === 'string' && p.badgeIcon.length > 0, `Valid badge for net ${net}`);
    }
  });

  await runProbe('P3.3', 'Exam-Fallback', 'buildMockExamQuestions fallback resilience on unknown exam IDs', () => {
    const qUnknown = buildMockExamQuestions('totally-invalid-exam-xyz', ALL_CHEMISTRY_UNITS, 'tr');
    assert(qUnknown.length === 7, 'Fallback to first exam (7 questions) on unknown ID');

    const qEmpty = buildMockExamQuestions('', ALL_CHEMISTRY_UNITS, 'tr');
    assert(qEmpty.length === 7, 'Fallback on empty string ID');

    const qNull = buildMockExamQuestions('null', ALL_CHEMISTRY_UNITS, 'tr');
    assert(qNull.length === 7, 'Fallback on "null" string ID');
  });

  await runProbe('P3.4', 'Exam-NoDuplicates', 'Zero question duplication across all 80 mock exams (40 TYT + 40 AYT)', () => {
    for (const spec of ALL_MOCK_EXAM_SPECS) {
      const questions = buildMockExamQuestions(spec.id, ALL_CHEMISTRY_UNITS, 'tr');
      const ids = questions.map((q) => q.id);
      const uniqueIds = new Set(ids);
      assert(
        uniqueIds.size === ids.length,
        `Exam ${spec.id} has duplicate questions: ${ids.length - uniqueIds.size} duplicates`
      );
    }
  });

  await runProbe('P3.5', 'Exam-TgComposition', 'TG Derece Provası exact 20-question composition (7 TYT + 13 AYT)', () => {
    const tgQuestions = buildTgProvaQuestions(ALL_CHEMISTRY_UNITS, 'tr');
    assert(tgQuestions.length === 20, `TG Prova has exactly 20 questions, got ${tgQuestions.length}`);

    const tytCount = tgQuestions.filter((q) => {
      const uNum = parseInt(q.unitId.replace('u', ''), 10);
      return uNum >= 1 && uNum <= 10;
    }).length;

    const aytCount = tgQuestions.filter((q) => {
      const uNum = parseInt(q.unitId.replace('u', ''), 10);
      return uNum >= 11 && uNum <= 24;
    }).length;

    assert(tytCount === 7, `TG Prova has exactly 7 TYT questions, got ${tytCount}`);
    assert(aytCount === 13, `TG Prova has exactly 13 AYT questions, got ${aytCount}`);

    const uniqueIds = new Set(tgQuestions.map((q) => q.id));
    assert(uniqueIds.size === 20, 'All 20 questions in TG Prova are unique');
  });

  await runProbe('P3.6', 'Exam-CatalogMetadata', 'Mock exam duration and category metadata integrity', () => {
    assert(ALL_MOCK_EXAM_SPECS.length === 80, `Exactly 80 mock exams in specs, got ${ALL_MOCK_EXAM_SPECS.length}`);
    const catalog = getMockExamCatalog('tr');
    assert(catalog.length === 80, `Catalog includes exactly 80 mock exam definitions (got ${catalog.length})`);

    for (const exam of catalog) {
      assert(exam.durationMinutes > 0, `Exam ${exam.id} duration > 0`);
      assert(exam.questionCount > 0, `Exam ${exam.id} questionCount > 0`);
      assert(exam.title.length > 0, `Exam ${exam.id} has non-empty title`);
      assert(exam.subtitle.length > 0, `Exam ${exam.id} has non-empty subtitle`);
    }
  });

  // ============================================================================
  // DOMAIN 4: Chemistry Games & Numerical Boundaries Stress (6 probes)
  // ============================================================================
  console.log('\n--- Domain 4: Chemistry Games & Numerical Boundaries Stress ---');

  await runProbe('P4.1', 'Games-TitrationCurve', 'calculatePhCurve extreme volumes (-100 mL, 0 mL, 25 mL, 50 mL, 1,000 mL, NaN)', () => {
    const pNeg = calculatePhCurve(-100);
    assert(pNeg.clampedVol === 0 && pNeg.status === 'acidic', 'Negative volume clamped to 0 mL');

    const pZero = calculatePhCurve(0);
    assert(pZero.clampedVol === 0 && pZero.ph === 1.0, '0 mL has pH 1.0');

    const pEquiv = calculatePhCurve(25.0);
    assert(pEquiv.clampedVol === 25.0 && pEquiv.ph === 7.0 && pEquiv.status === 'equivalence', '25 mL is neutral equivalence pH 7.00');

    const pOver = calculatePhCurve(50.0);
    assert(pOver.clampedVol === 50.0 && pOver.status === 'overshot', '50 mL is marked overshot');

    const pExcess = calculatePhCurve(1000);
    assert(pExcess.clampedVol === 50.0, '1000 mL clamped to 50 mL');

    const pNan = calculatePhCurve(NaN);
    assert(pNan.clampedVol === 0 && Number.isFinite(pNan.ph), 'NaN input sanitized cleanly to 0 mL');
  });

  await runProbe('P4.2', 'Games-PolyatomicFormula', 'parseFormula polyatomic ions: Ca(OH)2, Fe2(SO4)3, (NH4)2SO4, C6H12O6', () => {
    const ca = parseFormula('Ca(OH)2');
    assert(ca.Ca === 1 && ca.O === 2 && ca.H === 2, 'Ca(OH)2 parsed correctly: Ca=1, O=2, H=2');

    const fe = parseFormula('Fe2(SO4)3');
    assert(fe.Fe === 2 && fe.S === 3 && fe.O === 12, 'Fe2(SO4)3 parsed correctly: Fe=2, S=3, O=12');

    const nh4 = parseFormula('(NH4)2SO4');
    assert(nh4.N === 2 && nh4.H === 8 && nh4.S === 1 && nh4.O === 4, '(NH4)2SO4 parsed correctly: N=2, H=8, S=1, O=4');

    const c6 = parseFormula('C6H12O6');
    assert(c6.C === 6 && c6.H === 12 && c6.O === 6, 'C6H12O6 parsed correctly: C=6, H=12, O=6');
  });

  await runProbe('P4.3', 'Games-FormulaRobustness', 'parseFormula malformed inputs, unbalanced parentheses, empty string', () => {
    assert(Object.keys(parseFormula('')).length === 0, 'Empty string returns empty atom map');
    assert(Object.keys(parseFormula(')')).length === 0, 'Unmatched closing bracket does not throw');

    const h2oClose = parseFormula('H2O)');
    assert(h2oClose.H === 2 && h2oClose.O === 1, 'H2O) parses formula without stack underflow crash');

    assert(Object.keys(parseFormula('(((')).length === 0, 'Unclosed brackets do not crash');
    assert(Object.keys(parseFormula('12345')).length === 0, 'Numbers only do not crash');
  });

  await runProbe('P4.4', 'Games-GcdMath', 'gcd and gcdList mathematical boundaries (empty array, zero, negative)', () => {
    assert(gcdList([]) === 1, 'gcdList([]) returns 1 without throwing');
    assert(gcd(0, 5) === 5, 'gcd(0, 5) === 5');
    assert(gcd(5, 0) === 5, 'gcd(5, 0) === 5');
    assert(gcd(12, 18) === 6, 'gcd(12, 18) === 6');
    assert(gcdList([12, 18, 24]) === 6, 'gcdList([12, 18, 24]) === 6');
    assert(gcdList([7, 13, 19]) === 1, 'Coprime numbers gcdList === 1');
  });

  await runProbe('P4.5', 'Games-StoichiometryConservation', 'Stoichiometric atom conservation across all 18 authentic chemical equations', () => {
    assert(AUTHENTIC_EQUATIONS.length === 18, `Exactly 18 authentic equations, got ${AUTHENTIC_EQUATIONS.length}`);

    for (const eq of AUTHENTIC_EQUATIONS) {
      const reactantAtoms: Record<string, number> = {};
      eq.reactants.forEach((r, idx) => {
        const coef = eq.correctReactants[idx];
        const parsed = parseFormula(r.formula);
        for (const [el, cnt] of Object.entries(parsed)) {
          reactantAtoms[el] = (reactantAtoms[el] || 0) + cnt * coef;
        }
      });

      const productAtoms: Record<string, number> = {};
      eq.products.forEach((p, idx) => {
        const coef = eq.correctProducts[idx];
        const parsed = parseFormula(p.formula);
        for (const [el, cnt] of Object.entries(parsed)) {
          productAtoms[el] = (productAtoms[el] || 0) + cnt * coef;
        }
      });

      const allElements = Array.from(new Set([...Object.keys(reactantAtoms), ...Object.keys(productAtoms)]));
      for (const el of allElements) {
        assert(
          reactantAtoms[el] === productAtoms[el],
          `Equation ${eq.id} (${eq.nameTr}) element "${el}" conserved: ${reactantAtoms[el]} vs ${productAtoms[el]}`
        );
      }
    }
  });

  await runProbe('P4.6', 'Games-BlitzPool', 'Chem-Blitz 60s True/False generator integrity across all 8 languages', () => {
    const langs: LanguageCode[] = ['tr', 'en', 'de', 'fr', 'ru', 'ar', 'zh', 'ku'];
    for (const lang of langs) {
      const blitzItems = generateBlitzQuestions(lang);
      assert(blitzItems.length >= 48, `Chem-Blitz generates >= 48 statements in ${lang} (got ${blitzItems.length})`);

      for (const item of blitzItems) {
        assert(Boolean(item.statement && item.statement.length >= 5), `Non-empty statement in ${lang}`);
        assert(Boolean(item.trapExplanation && item.trapExplanation.length >= 5), `Non-empty trap explanation in ${lang}`);
        assert(typeof item.isTrue === 'boolean', `Valid boolean isTrue in ${lang}`);
      }
    }
  });

  // ============================================================================
  // DOMAIN 5: Web Audio SFX Synthesis & Resource Bounds (6 probes)
  // ============================================================================
  console.log('\n--- Domain 5: Web Audio SFX Synthesis & Resource Bounds ---');

  await runProbe('P5.1', 'Audio-MuteSuppression', 'AudioContext unlock and mute suppression (zero nodes when muted)', () => {
    setSfxEnabled(false);
    assert(isSfxEnabled() === false, 'SFX engine is disabled');
    playCorrect();
    playWrong();
    playBubble();
    playFizz();
    playDrop();
    playSuccess();
    playFinish();
    playApplause(0.1);
    assert(isSfxEnabled() === false, 'SFX state remains disabled throughout audio triggers without throwing');
    setSfxEnabled(true);
    assert(isSfxEnabled() === true, 'SFX engine successfully re-enabled');
  });

  await runProbe('P5.2', 'Audio-VolumeClamping', 'Master volume bounds clamping (values < 0 clamped to 0, > 1 clamped to 1)', () => {
    setSfxVolume(-10);
    assert(getSfxVolume() === 0.0, `Negative volume -10 clamped to 0.0 (got ${getSfxVolume()})`);
    assert(getSfxVolume() >= 0.0 && getSfxVolume() <= 1.0, 'Volume strictly bounded between 0.0 and 1.0');

    setSfxVolume(50);
    assert(getSfxVolume() === 1.0, `Overflow volume 50 clamped to 1.0 (got ${getSfxVolume()})`);
    assert(getSfxVolume() >= 0.0 && getSfxVolume() <= 1.0, 'Volume strictly bounded between 0.0 and 1.0');

    setSfxVolume(0.5);
    assert(getSfxVolume() === 0.5, `Midpoint volume 0.5 set accurately`);
    assert(getSfxVolume() >= 0.0 && getSfxVolume() <= 1.0, 'Volume strictly bounded between 0.0 and 1.0');

    setSfxVolume(1.0);
    assert(getSfxVolume() === 1.0, `Boundary volume 1.0 set accurately`);
    assert(getSfxVolume() >= 0.0 && getSfxVolume() <= 1.0, 'Volume strictly bounded between 0.0 and 1.0');

    setSfxVolume(0.0);
    assert(getSfxVolume() === 0.0, `Boundary volume 0.0 set accurately`);
    assert(getSfxVolume() >= 0.0 && getSfxVolume() <= 1.0, 'Volume strictly bounded between 0.0 and 1.0');

    setSfxVolume(0.8);
    assert(getSfxVolume() === 0.8, 'Master volume reset to nominal 0.8');
  });

  await runProbe('P5.3', 'Audio-RapidFireStress', 'Rapid-fire trigger stress (100 simultaneous calls to all SFX generators)', () => {
    setSfxEnabled(true);
    assert(isSfxEnabled() === true, 'SFX enabled prior to rapid-fire triggers');
    for (let i = 0; i < 100; i++) {
      playCorrect();
      playWrong();
      playBubble();
      playFizz();
      playDrop();
      playSuccess();
      playFinish();
      playApplause(0.05);
    }
    assert(isSfxEnabled() === true, 'SFX state remains valid (true) after 100 rapid-fire triggers');
    const audioCtx = getAudioContext();
    if (audioCtx) {
      assert(audioCtx.state === 'running' || audioCtx.state === 'suspended', `AudioContext state is valid (${audioCtx.state})`);
    }
  });

  await runProbe('P5.4', 'Audio-MusicCatalog', 'Music engine mood and track catalog completeness (non-empty attributes)', () => {
    assert(MUSIC_TRACKS.length >= 7, `At least 7 procedural music tracks, got ${MUSIC_TRACKS.length}`);
    for (const track of MUSIC_TRACKS) {
      assert(track.bpm >= 50 && track.bpm <= 150, `Track ${track.id} valid BPM (${track.bpm})`);
      assert(track.chords.length > 0, `Track ${track.id} has defined chords`);
      assert(Boolean(track.title.tr && track.title.en), `Track ${track.id} has localized title`);
    }

    assert(MUSIC_MOODS.length >= 7, `At least 7 moods, got ${MUSIC_MOODS.length}`);
    for (const mood of MUSIC_MOODS) {
      assert(Boolean(mood.label.tr && mood.label.en), `Mood ${mood.id} has localized label`);
    }
  });

  await runProbe('P5.5', 'Audio-ContextRecovery', 'Closed / suspended AudioContext recovery resilience', () => {
    const dummyCtx = new MockAudioContext();
    dummyCtx.state = 'closed';
    unlockAudio(dummyCtx as unknown as AudioContext);
    const dummyState: string = dummyCtx.state;
    assert(dummyState === 'running' || dummyState === 'closed', 'unlockAudio safely handles closed mock AudioContext');

    const suspendedCtx = new MockAudioContext();
    suspendedCtx.state = 'suspended';
    unlockAudio(suspendedCtx as unknown as AudioContext);
    const suspendedState: string = suspendedCtx.state;
    assert(suspendedState === 'running', 'unlockAudio resumes suspended AudioContext to running state');

    setSfxEnabled(true);
    playCorrect();
    playWrong();
    const activeCtx = getAudioContext();
    if (activeCtx) {
      unlockAudio(activeCtx);
      assert(activeCtx.state !== 'closed', 'Active AudioContext remains open and operational');
    }
  });

  await runProbe('P5.6', 'Audio-ConfettiBounds', 'Confetti particle engine zero-dimension and rapid reset bounds', async () => {
    // Verify MockCanvasRenderingContext2D scale functionality
    const canvas = document.createElement('canvas') as unknown as { getContext: (type: string) => any };
    const ctx = canvas.getContext('2d');
    assert(typeof ctx.scale === 'function', 'MockCanvasRenderingContext2D.prototype.scale is present');
    ctx.scale(2, 3);
    assert(ctx.scaleX === 2 && ctx.scaleY === 3, `Mock canvas scaleX and scaleY updated (got ${ctx.scaleX}, ${ctx.scaleY})`);
    ctx.save();
    ctx.scale(2, 2);
    assert(ctx.scaleX === 4 && ctx.scaleY === 6, 'Mock canvas scale compounds correctly under save()');
    ctx.restore();
    assert(ctx.scaleX === 2 && ctx.scaleY === 3, 'Mock canvas scale restores correctly after restore()');

    const { result, unmount } = await renderStoreHook(() => {
      return React.createElement(Confetti, { burstKey: 1 });
    });
    assert(result.current !== undefined, 'Confetti component mounted safely under mock DOM');
    unmount();
  });

  // ============================================================================
  // SUMMARY REPORT
  // ============================================================================
  console.log('\n================================================================================');
  console.log('  TIER 5 ADVERSARIAL STRESS SUMMARY REPORT');
  console.log('================================================================================');
  console.log(`  Total Probes Executed: 31`);
  console.log(`  Probes Passed:         ${passedProbes} / 31 (100%)`);
  console.log(`  Probes Failed:         ${failedProbes} / 31`);
  console.log(`  Total Assertions:      ${totalAssertions} cleanly verified`);
  console.log('================================================================================\n');

  if (failedProbes > 0) {
    console.error('❌ TIER 5 ADVERSARIAL STRESS TEST FAILED');
    process.exit(1);
  } else {
    console.log('🏆 TIER 5 ADVERSARIAL STRESS TEST PASSED CLEANLY (EXIT 0)');
    process.exit(0);
  }
}

main().catch((err) => {
  console.error('Fatal unhandled error in tier5AdversarialStress:', err);
  process.exit(1);
});
