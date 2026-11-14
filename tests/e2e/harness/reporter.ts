/**
 * Terminal Reporter for Kimya YKS E2E Test Runner
 * Provides colorized ANSI formatting, tier summary tables,
 * feature coverage matrix, and final pass/fail verdict.
 */

import { GlobalSummary, TestCaseResult } from './testFramework';

const ANSI = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  gray: '\x1b[90m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  boldRed: '\x1b[1;31m',
  boldGreen: '\x1b[1;32m',
  boldYellow: '\x1b[1;33m',
  boldCyan: '\x1b[1;36m',
  boldWhite: '\x1b[1;37m',
};

export function printBanner(): void {
  const line = '='.repeat(80);
  console.log(`${ANSI.boldCyan}${line}`);
  console.log(`  🧪  KIMYA YKS (TYT & AYT Chemistry) — END-TO-END VERIFICATION RUNNER`);
  console.log(`${line}${ANSI.reset}`);
  console.log(
    `${ANSI.gray}Platform: ${process.platform} (${process.arch}) | Node: ${process.version} | Runner: tsx | Mode: strict e2e`
  );
  console.log(`Timestamp: ${new Date().toISOString()}${ANSI.reset}\n`);
}

export function printTierHeader(tier: number, name: string): void {
  console.log(
    `\n${ANSI.boldCyan}--- Tier ${tier}: ${name} ---${ANSI.reset}`
  );
}

export function printTestResult(result: TestCaseResult): void {
  const statusStr =
    result.status === 'PASS'
      ? `${ANSI.boldGreen}✔ [PASS]${ANSI.reset}`
      : `${ANSI.boldRed}✖ [FAIL]${ANSI.reset}`;
  const idStr = `${ANSI.cyan}${result.id.padEnd(10)}${ANSI.reset}`;
  const codeStr = `${ANSI.yellow}[${result.featureCode}]${ANSI.reset}`;
  const durStr = `${ANSI.gray}(${result.durationMs.toFixed(2)}ms)${ANSI.reset}`;

  console.log(`  ${statusStr} ${idStr} ${codeStr} ${result.title} ${durStr}`);

  if (result.status === 'FAIL' && result.error) {
    console.log(`     ${ANSI.boldRed}Error: ${result.error.message}${ANSI.reset}`);
    if (result.error.stack) {
      const filteredStack = result.error.stack
        .split('\n')
        .slice(1, 4)
        .map((l) => `     ${ANSI.dim}${l.trim()}${ANSI.reset}`)
        .join('\n');
      console.log(filteredStack);
    }
  }
}

export function printSummaryTable(summary: GlobalSummary): void {
  const line = '='.repeat(80);
  const div = '-'.repeat(80);

  console.log(`\n${ANSI.boldCyan}${line}`);
  console.log(`  TIER SUMMARY`);
  console.log(`${line}${ANSI.reset}`);
  console.log(
    `  ${'Tier'.padEnd(8)} ${'Description'.padEnd(35)} ${'Target'.padStart(8)} ${'Passed'.padStart(
      8
    )} ${'Failed'.padStart(8)} ${'Duration'.padStart(10)}`
  );
  console.log(`  ${div}`);

  for (const t of summary.tiers) {
    const passedStr =
      t.passCount >= t.targetCount
        ? `${ANSI.boldGreen}${String(t.passCount).padStart(8)}${ANSI.reset}`
        : `${ANSI.boldYellow}${String(t.passCount).padStart(8)}${ANSI.reset}`;
    const failedStr =
      t.failCount === 0
        ? `${ANSI.gray}${'0'.padStart(8)}${ANSI.reset}`
        : `${ANSI.boldRed}${String(t.failCount).padStart(8)}${ANSI.reset}`;

    console.log(
      `  ${(`Tier ${t.tier}`).padEnd(8)} ${t.name.padEnd(35)} ${(`>= ${t.targetCount}`).padStart(
        8
      )} ${passedStr} ${failedStr} ${(t.totalDurationMs.toFixed(1) + 'ms').padStart(10)}`
    );
  }

  console.log(`  ${div}`);
  const totalPassedStr =
    summary.failedTests === 0
      ? `${ANSI.boldGreen}${String(summary.passedTests).padStart(8)}${ANSI.reset}`
      : `${ANSI.boldYellow}${String(summary.passedTests).padStart(8)}${ANSI.reset}`;
  const totalFailedStr =
    summary.failedTests === 0
      ? `${ANSI.gray}${'0'.padStart(8)}${ANSI.reset}`
      : `${ANSI.boldRed}${String(summary.failedTests).padStart(8)}${ANSI.reset}`;

  console.log(
    `  ${'TOTAL'.padEnd(8)} ${'Complete E2E Verification Suite'.padEnd(35)} ${'>= 152'.padStart(
      8
    )} ${totalPassedStr} ${totalFailedStr} ${(summary.totalDurationMs.toFixed(1) + 'ms').padStart(10)}`
  );
  console.log(`${ANSI.boldCyan}${line}${ANSI.reset}`);
}

export function printFeatureMatrix(summary: GlobalSummary): void {
  const line = '='.repeat(80);
  const div = '-'.repeat(80);

  console.log(`\n${ANSI.boldCyan}${line}`);
  console.log(`  FEATURE VERIFICATION MATRIX (F01 - F13)`);
  console.log(`${line}${ANSI.reset}`);
  console.log(
    `  ${'Code'.padEnd(12)} ${'Feature Name'.padEnd(28)} ${'T1'.padStart(4)} ${'T2'.padStart(
      4
    )} ${'T3'.padStart(4)} ${'T4'.padStart(4)} ${'Total'.padStart(6)}   ${'Status'.padEnd(6)}`
  );
  console.log(`  ${div}`);

  for (const item of summary.featureMatrix) {
    const statusStr =
      item.status === 'PASS'
        ? `${ANSI.boldGreen}PASS${ANSI.reset}`
        : `${ANSI.boldRed}FAIL${ANSI.reset}`;

    console.log(
      `  ${ANSI.yellow}${item.code.padEnd(12)}${ANSI.reset} ${item.name.padEnd(28)} ${String(
        item.t1
      ).padStart(4)} ${String(item.t2).padStart(4)} ${String(item.t3).padStart(4)} ${String(
        item.t4
      ).padStart(4)} ${ANSI.bold}${String(item.total).padStart(6)}${ANSI.reset}   ${statusStr}`
    );
  }

  console.log(`${ANSI.boldCyan}${line}${ANSI.reset}`);
}

export function printFinalVerdict(summary: GlobalSummary): boolean {
  const line = '='.repeat(80);
  const isAllPass = summary.failedTests === 0 && summary.totalTests >= 152;

  console.log(`\n${ANSI.boldCyan}${line}`);
  if (isAllPass) {
    console.log(
      `  ${ANSI.boldGreen}🏆  VERDICT: 100% PASS (${summary.passedTests}/${summary.totalTests} tests, ${summary.totalAssertions} assertions) — EXIT 0${ANSI.reset}`
    );
  } else {
    console.log(
      `  ${ANSI.boldRed}❌  VERDICT: FAILED (${summary.failedTests} failed, ${summary.passedTests} passed out of ${summary.totalTests}) — EXIT 1${ANSI.reset}`
    );
  }
  console.log(`${ANSI.boldCyan}${line}${ANSI.reset}\n`);

  return isAllPass;
}
