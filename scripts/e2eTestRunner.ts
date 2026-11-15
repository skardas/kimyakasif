/**
 * Kimya YKS (TYT & AYT Chemistry)
 * Unified End-to-End Test Runner across Tiers 1-4
 *
 * Usage:
 *   npx tsx scripts/e2eTestRunner.ts
 *   npm run test:e2e
 *   npm test
 */

import { setupTestEnvironment } from '../tests/e2e/harness/testEnv';
import { getGlobalSummary, resetFramework } from '../tests/e2e/harness/testFramework';
import {
  printBanner,
  printTierHeader,
  printSummaryTable,
  printFeatureMatrix,
  printFinalVerdict,
} from '../tests/e2e/harness/reporter';

// 1. Initialize DOM, AudioContext, Canvas, LocalStorage shims
setupTestEnvironment();
resetFramework();

async function main(): Promise<void> {
  const startTime = Date.now();
  printBanner();

  // 2. Tier 1: Feature Coverage (Category-Partition Equivalence)
  printTierHeader(1, 'Feature Coverage (Category-Partition Equivalence)');
  const tier1 = await import('../tests/e2e/tier1-feature-coverage.test');
  await tier1.runTier1Tests();
  const m6 = await import('../tests/e2e/milestone6-ai-coach-profiles.test');
  await m6.runMilestone6Tests();

  // 3. Tier 2: Boundary & Corner Cases (Boundary Value Analysis)
  printTierHeader(2, 'Boundary & Corner Cases (Boundary Value Analysis)');
  const tier2 = await import('../tests/e2e/tier2-boundary-corner.test');
  await tier2.runTier2Tests();

  // 4. Tier 3: Cross-Feature Combinations (Pairwise Interaction)
  printTierHeader(3, 'Cross-Feature Combinations (Pairwise Interaction)');
  const tier3 = await import('../tests/e2e/tier3-cross-feature.test');
  await tier3.runTier3Tests();

  // 5. Tier 4: Real-World Application Scenarios (End-to-End User Journeys)
  printTierHeader(4, 'Real-World Application Scenarios (End-to-End User Journeys)');
  const tier4 = await import('../tests/e2e/tier4-user-journeys.test');
  await tier4.runTier4Tests();

  // 6. Generate Summary & Matrix
  const summary = getGlobalSummary();
  summary.totalDurationMs = Date.now() - startTime;

  printSummaryTable(summary);
  printFeatureMatrix(summary);

  const isSuccess = printFinalVerdict(summary);

  if (isSuccess) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('\x1b[31mFATAL E2E RUNNER ERROR:\x1b[0m', err);
  process.exit(1);
});
