/**
 * E2E Test Framework DSL & Assertion Matchers
 * Provides expect(), test(), describe(), and summary tracking
 * for Kimya YKS automated test runner.
 */

export interface TestCaseResult {
  id: string; // e.g. "T1.F01.01"
  tier: 1 | 2 | 3 | 4;
  featureCode: string; // e.g. "F01-TYT"
  title: string;
  status: 'PASS' | 'FAIL';
  durationMs: number;
  assertionCount: number;
  error?: Error;
}

export interface TierSummary {
  tier: 1 | 2 | 3 | 4;
  name: string;
  targetCount: number;
  passCount: number;
  failCount: number;
  totalDurationMs: number;
}

export interface FeatureMatrixItem {
  code: string;
  name: string;
  t1: number;
  t2: number;
  t3: number;
  t4: number;
  total: number;
  status: 'PASS' | 'FAIL';
}

export interface GlobalSummary {
  totalTests: number;
  passedTests: number;
  failedTests: number;
  totalAssertions: number;
  totalDurationMs: number;
  tiers: TierSummary[];
  results: TestCaseResult[];
  featureMatrix: FeatureMatrixItem[];
}

let currentAssertionsInTest = 0;
let totalGlobalAssertions = 0;
const testResults: TestCaseResult[] = [];

export function recordAssertion(): void {
  currentAssertionsInTest++;
  totalGlobalAssertions++;
}

export function expect<T>(actual: T) {
  const matchers = {
    toBe(expected: T) {
      recordAssertion();
      if (actual !== expected) {
        throw new Error(
          `Expected ${JSON.stringify(expected)} (${typeof expected}), received ${JSON.stringify(
            actual
          )} (${typeof actual})`
        );
      }
    },
    toEqual(expected: any) {
      recordAssertion();
      const a = JSON.stringify(actual);
      const b = JSON.stringify(expected);
      if (a !== b) {
        throw new Error(`Expected deep equal:\n  Expected: ${b}\n  Received: ${a}`);
      }
    },
    toBeGreaterThan(expected: number) {
      recordAssertion();
      if (typeof actual !== 'number' || actual <= expected) {
        throw new Error(`Expected ${actual} > ${expected}`);
      }
    },
    toBeGreaterThanOrEqual(expected: number) {
      recordAssertion();
      if (typeof actual !== 'number' || actual < expected) {
        throw new Error(`Expected ${actual} >= ${expected}`);
      }
    },
    toBeLessThan(expected: number) {
      recordAssertion();
      if (typeof actual !== 'number' || actual >= expected) {
        throw new Error(`Expected ${actual} < ${expected}`);
      }
    },
    toBeLessThanOrEqual(expected: number) {
      recordAssertion();
      if (typeof actual !== 'number' || actual > expected) {
        throw new Error(`Expected ${actual} <= ${expected}`);
      }
    },
    toBeCloseTo(expected: number, delta = 0.01) {
      recordAssertion();
      if (typeof actual !== 'number' || Math.abs(actual - expected) > delta) {
        throw new Error(`Expected ${actual} to be close to ${expected} (within ${delta})`);
      }
    },
    toHaveLength(expected: number) {
      recordAssertion();
      const len = (actual as any)?.length ?? (actual as any)?.size;
      if (len !== expected) {
        throw new Error(`Expected length ${expected}, received ${len}`);
      }
    },
    toContain(item: any) {
      recordAssertion();
      let has = false;
      if (Array.isArray(actual)) {
        has = actual.includes(item);
      } else if (typeof actual === 'string') {
        has = actual.includes(String(item));
      } else if (actual instanceof Set) {
        has = actual.has(item);
      } else {
        throw new Error(`Cannot call toContain on ${typeof actual}`);
      }
      if (!has) {
        throw new Error(`Expected collection to contain ${JSON.stringify(item)}`);
      }
    },
    toBeTruthy() {
      recordAssertion();
      if (!actual) {
        throw new Error(`Expected truthy, received ${JSON.stringify(actual)}`);
      }
    },
    toBeFalsy() {
      recordAssertion();
      if (actual) {
        throw new Error(`Expected falsy, received ${JSON.stringify(actual)}`);
      }
    },
    toBeDefined() {
      recordAssertion();
      if (typeof actual === 'undefined') {
        throw new Error(`Expected defined, received undefined`);
      }
    },
    toBeUndefined() {
      recordAssertion();
      if (typeof actual !== 'undefined') {
        throw new Error(`Expected undefined, received ${JSON.stringify(actual)}`);
      }
    },
    toBeNull() {
      recordAssertion();
      if (actual !== null) {
        throw new Error(`Expected null, received ${JSON.stringify(actual)}`);
      }
    },
    toThrow(expectedMessageSubstr?: string) {
      recordAssertion();
      if (typeof actual !== 'function') {
        throw new Error(`Expected function to test toThrow, received ${typeof actual}`);
      }
      let threw = false;
      let caughtError: any;
      try {
        (actual as any)();
      } catch (err) {
        threw = true;
        caughtError = err;
      }
      if (!threw) {
        throw new Error(`Expected function to throw, but it succeeded without error`);
      }
      if (expectedMessageSubstr) {
        const msg = String(caughtError?.message || caughtError);
        if (!msg.includes(expectedMessageSubstr)) {
          throw new Error(
            `Expected thrown message to contain "${expectedMessageSubstr}", but caught: "${msg}"`
          );
        }
      }
    },
    toMatch(regex: RegExp) {
      recordAssertion();
      if (typeof actual !== 'string' || !regex.test(actual)) {
        throw new Error(`String "${actual}" does not match pattern ${regex}`);
      }
    },
  };

  const notMatchers = {
    toBe(expected: T) {
      recordAssertion();
      if (actual === expected) {
        throw new Error(`Expected not ${JSON.stringify(expected)}, but received equal`);
      }
    },
    toEqual(expected: any) {
      recordAssertion();
      const a = JSON.stringify(actual);
      const b = JSON.stringify(expected);
      if (a === b) {
        throw new Error(`Expected not deep equal to ${b}`);
      }
    },
    toContain(item: any) {
      recordAssertion();
      let has = false;
      if (Array.isArray(actual)) {
        has = actual.includes(item);
      } else if (typeof actual === 'string') {
        has = actual.includes(String(item));
      } else if (actual instanceof Set) {
        has = actual.has(item);
      }
      if (has) {
        throw new Error(`Expected collection NOT to contain ${JSON.stringify(item)}`);
      }
    },
    toMatch(regex: RegExp) {
      recordAssertion();
      if (typeof actual === 'string' && regex.test(actual)) {
        throw new Error(`String "${actual}" was expected NOT to match pattern ${regex}`);
      }
    },
    toThrow() {
      recordAssertion();
      if (typeof actual !== 'function') {
        throw new Error(`Expected function to test not.toThrow`);
      }
      try {
        (actual as any)();
      } catch (err) {
        throw new Error(`Expected function not to throw, but it threw: ${err}`);
      }
    },
    toBeDefined() {
      recordAssertion();
      if (typeof actual !== 'undefined') {
        throw new Error(`Expected undefined, received defined`);
      }
    },
    toBeNull() {
      recordAssertion();
      if (actual === null) {
        throw new Error(`Expected not null, received null`);
      }
    },
  };

  return {
    ...matchers,
    not: notMatchers,
  };
}

export async function test(
  id: string,
  tier: 1 | 2 | 3 | 4,
  featureCode: string,
  title: string,
  fn: () => void | Promise<void>
): Promise<TestCaseResult> {
  currentAssertionsInTest = 0;
  const t0 = performance.now();
  let status: 'PASS' | 'FAIL' = 'PASS';
  let testError: Error | undefined;

  try {
    await fn();
  } catch (err: any) {
    status = 'FAIL';
    testError = err instanceof Error ? err : new Error(String(err));
  }

  const durationMs = performance.now() - t0;
  const result: TestCaseResult = {
    id,
    tier,
    featureCode,
    title,
    status,
    durationMs,
    assertionCount: currentAssertionsInTest,
    error: testError,
  };

  testResults.push(result);
  return result;
}

export function describe(_name: string, fn: () => void): void {
  fn();
}

export function getGlobalSummary(): GlobalSummary {
  const passed = testResults.filter((r) => r.status === 'PASS').length;
  const failed = testResults.filter((r) => r.status === 'FAIL').length;
  const totalDuration = testResults.reduce((acc, r) => acc + r.durationMs, 0);

  const tierMeta: Record<1 | 2 | 3 | 4, { name: string; target: number }> = {
    1: { name: 'Feature Coverage (F01-F13)', target: 65 },
    2: { name: 'Boundary & Corner Cases (F01-F13)', target: 65 },
    3: { name: 'Cross-Feature Combinations', target: 15 },
    4: { name: 'Real-World User Journeys (S1-S7)', target: 7 },
  };

  const tiers: TierSummary[] = ([1, 2, 3, 4] as const).map((t) => {
    const subset = testResults.filter((r) => r.tier === t);
    return {
      tier: t,
      name: tierMeta[t].name,
      targetCount: tierMeta[t].target,
      passCount: subset.filter((r) => r.status === 'PASS').length,
      failCount: subset.filter((r) => r.status === 'FAIL').length,
      totalDurationMs: subset.reduce((acc, r) => acc + r.durationMs, 0),
    };
  });

  const featureNames: Record<string, string> = {
    'F01-TYT': 'TYT Chemistry Curriculum',
    'F02-AYT': 'AYT Chemistry Curriculum',
    'F03-BANK': 'Question Bank Integrity',
    'F04-3D': '3D Visualizers & Lab',
    'F05-CARD': 'Leitner 3D Flashcards',
    'F06-GAME': '6 Chemistry Mini-Games',
    'F07-EXAM': 'Multi-Mode Exam Center',
    'F08-SHELL': 'Responsive Layout & Nav',
    'F09-THEME': 'Dark & Light Lab Themes',
    'F10-SPLASH': 'Splash & Onboarding',
    'F11-AUDIO': 'Web Audio & Confetti',
    'F12-OFFLINE': '100% Offline Capability',
    'F13-I18N': '8-Language Localization',
    'F14-M6': 'AI Coach, Profiles & Stages',
  };

  const featureMatrix: FeatureMatrixItem[] = Object.keys(featureNames).map((code) => {
    // Tests can have code like "F01-TYT" or composite like "F01 x F03" or journey S1
    const matchT = (tier: number) =>
      testResults.filter((r) => {
        if (r.tier !== tier) return false;
        if (r.featureCode.includes(code)) return true;
        // In Tier 4 scenarios, map scenarios to features
        if (r.tier === 4) {
          if (r.featureCode === 'S1' && ['F08-SHELL', 'F10-SPLASH', 'F09-THEME', 'F01-TYT', 'F03-BANK', 'F07-EXAM', 'F11-AUDIO'].includes(code)) return true;
          if (r.featureCode === 'S2' && ['F01-TYT', 'F03-BANK', 'F07-EXAM', 'F11-AUDIO', 'F12-OFFLINE'].includes(code)) return true;
          if (r.featureCode === 'S3' && ['F02-AYT', 'F03-BANK', 'F04-3D', 'F07-EXAM', 'F11-AUDIO'].includes(code)) return true;
          if (r.featureCode === 'S4' && ['F05-CARD', 'F08-SHELL', 'F12-OFFLINE'].includes(code)) return true;
          if (r.featureCode === 'S5' && ['F06-GAME', 'F11-AUDIO', 'F12-OFFLINE'].includes(code)) return true;
          if (r.featureCode === 'S6' && ['F13-I18N', 'F08-SHELL', 'F01-TYT', 'F03-BANK'].includes(code)) return true;
          if (r.featureCode === 'S7' && ['F12-OFFLINE', 'F08-SHELL', 'F07-EXAM', 'F09-THEME', 'F11-AUDIO'].includes(code)) return true;
        }
        return false;
      }).length;

    const t1 = matchT(1);
    const t2 = matchT(2);
    const t3 = matchT(3);
    const t4 = matchT(4);
    const total = t1 + t2 + t3 + t4;

    const hasFailure = testResults
      .filter((r) => r.featureCode.includes(code))
      .some((r) => r.status === 'FAIL');

    return {
      code,
      name: featureNames[code],
      t1,
      t2,
      t3,
      t4,
      total,
      status: hasFailure ? 'FAIL' : 'PASS',
    };
  });

  return {
    totalTests: testResults.length,
    passedTests: passed,
    failedTests: failed,
    totalAssertions: totalGlobalAssertions,
    totalDurationMs: totalDuration,
    tiers,
    results: [...testResults],
    featureMatrix,
  };
}

export function resetFramework(): void {
  testResults.length = 0;
  currentAssertionsInTest = 0;
  totalGlobalAssertions = 0;
}
