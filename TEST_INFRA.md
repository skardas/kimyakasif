# E2E Test Infra: Kimya YKS Chemistry Learning Platform

## 1. Test Philosophy & Architecture
- **Opaque-Box & Requirement-Driven**: Tests are designed strictly from user acceptance criteria (`ORIGINAL_REQUEST.md`) and project specifications (`PROJECT.md § Feature Inventory`), independent of internal component design.
- **Hermetic & In-Process**: Operates 100% in-process within Node.js via TypeScript Execution (`tsx`) using deterministic in-memory environment shims (`tests/e2e/harness/testEnv.ts`: DOM, Storage, Web Audio API, Canvas 2D) without browser process spawning, dev-server requirements, or open network port dependencies.
- **Dual-Layer Testing Structure**:
  1. **Layer A — Baseline Application Subsystem Verification (13 Functional Modules, F01–F13)**: Operational tests covering core curriculum data compilation, Leitner spaced-repetition mathematics, 6 mini-games, multi-mode exams, responsive layout, theme tokens, and 8-language localization.
  2. **Layer B — Release Defect Remediation & Verification (22 Features, Features 1–22)**: Opaque-box verification of all 3D Three.js scenes, 2D chemical diagrams, WebGL fallback canvas, chemical formula bidirectional isolation, and mobile touch interactions.
- **Systematic Multi-Tier Methodology**:
  - **Tier 1 (Category-Partition Testing)**: Functional equivalence classes across all features, verifying nominal happy paths and core functionality.
  - **Tier 2 (Boundary Value Analysis - BVA)**: Boundary, extreme, zero-length, and error-prone inputs (extremes of coordinates, WebGL context loss, DPR=1 vs DPR=2, rapid theme toggles, Arabic RTL text flows).
  - **Tier 3 (Pairwise Combinatorial Testing)**: Multi-feature interactions exercising shared state and data flow (e.g., 3D Scene + Quiz Session + Arabic RTL + Dark Theme; Flashcard Drag + Flip + Mobile Touch).
  - **Tier 4 (Real-World Student Workload Testing)**: Holistic end-user application scenarios traversing real student journeys (diagnostic exams with figures, slide deck traversal, mini-games, Leitner review, full offline recovery).
  - **Tier 5 (Adversarial Stress & Chaos Verification)**: 31 hostile probes attacking persistence stores, numerical boundaries, audio resources, and malformed formulas.

---

## 2. Test Runner Architecture & Directory Layout

### 2.1 Invocation Commands & Pass/Fail Semantics
- **Canonical E2E Command**: `npm test` (`tsx scripts/e2eTestRunner.ts`)
- **Curriculum & Data Bank Command**: `npm run verify-bank` (`npx tsx scripts/verifyBank.ts`)
- **Adversarial Stress Command**: `npx tsx scripts/tier5AdversarialStress.ts`
- **Static Analysis & Build Commands**: `npx tsc --noEmit` and `npm run build`
- **Pass/Fail Semantics**: Strict POSIX exit codes:
  - Exit `0`: 100% of tests passed, 0 failures, all target thresholds met.
  - Exit `1`: Any assertion failure, uncaught exception, or unmet threshold.

### 2.2 Directory Layout
```
kimya/
├── scripts/
│   ├── e2eTestRunner.ts               # Primary 4-tier E2E runner entry point
│   ├── verifyBank.ts                  # 6-stage question bank & curriculum audit
│   └── tier5AdversarialStress.ts      # 31 Tier 5 adversarial stress probes
├── tests/
│   └── e2e/
│       ├── tier1-feature-coverage.test.ts     # Tier 1 tests (Category-Partition)
│       ├── tier2-boundary-corner.test.ts      # Tier 2 tests (Boundary Value Analysis)
│       ├── tier3-cross-feature.test.ts        # Tier 3 tests (Pairwise Combinations)
│       ├── tier4-user-journeys.test.ts        # Tier 4 tests (Real-World Journeys)
│       └── harness/
│           ├── testEnv.ts             # Shims (Storage, Canvas 2D, Web Audio, DOM)
│           ├── testFramework.ts       # Fluent DSL (expect, test, describe, runner)
│           ├── reporter.ts            # ANSI terminal formatter & summary tables
│           ├── contracts.ts           # Domain bridge & application model adapters
│           ├── sceneHelper.ts         # 3D math & procedural lattice generators
│           ├── curriculumAdapter.ts   # 24-unit curriculum compiler
│           ├── chemistryValidator.ts  # Chemical oxidation & formula validators
│           └── themeHelper.ts         # WCAG contrast calculator & theme tokens
```

---

## 3. Subsystem Baseline Verification Matrix (13 Modules: F01–F13)

The baseline automated test suite in `scripts/e2eTestRunner.ts` verifies the 13 core application subsystems across Tiers 1–4:

| Code | Subsystem Name | Scope Description | Tier 1 | Tier 2 | Tier 3 | Tier 4 | Total | Status |
|:---|:---|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| **F01-TYT** | TYT Chemistry Curriculum | Units u01–u10 facts, traps, and atomic data | 5 | 5 | 2 | 3 | 15 | PASS |
| **F02-AYT** | AYT Chemistry Curriculum | Units u11–u24 advanced physical & organic chemistry | 5 | 5 | 2 | 1 | 13 | PASS |
| **F03-BANK** | Question Bank Integrity | 3,072 questions, distractor balance, answer keys | 5 | 5 | 4 | 4 | 18 | PASS |
| **F04-3D** | 3D Visualizers & Lab | 3D scene catalog, camera boundaries, hotspots | 5 | 5 | 2 | 1 | 13 | PASS |
| **F05-CARD** | Leitner 3D Flashcards | 396 cards, Leitner 5-box spaced repetition algorithm | 5 | 5 | 1 | 1 | 12 | PASS |
| **F06-GAME** | 6 Chemistry Mini-Games | Math engines for Hunter, Titration, Lewis, Balancer | 6 | 6 | 2 | 1 | 15 | PASS |
| **F07-EXAM** | Multi-Mode Exam Center | 80 mock trial exams, net scoring (R - W/4) | 5 | 5 | 5 | 4 | 19 | PASS |
| **F08-SHELL** | Responsive Layout & Nav | Shell header, tabs, drawer, viewport breakpoints | 5 | 5 | 2 | 4 | 16 | PASS |
| **F09-THEME** | Dark & Light Lab Themes | WCAG AA contrast compliance (>= 4.5:1 ratio) | 5 | 5 | 3 | 2 | 15 | PASS |
| **F10-SPLASH**| Splash & Onboarding | 4-step interactive onboarding flow | 5 | 5 | 1 | 1 | 12 | PASS |
| **F11-AUDIO** | Web Audio & Confetti | Procedural audio synthesis, volume clamping, confetti | 5 | 5 | 2 | 5 | 17 | PASS |
| **F12-OFFLINE**| 100% Offline Capability | LocalStorage persistence, rehydration, state recovery | 5 | 5 | 3 | 4 | 17 | PASS |
| **F13-I18N** | 8-Language Localization | Complete UI translations across TR, EN, DE, FR, RU, AR, ZH, KU | 8 | 8 | 3 | 1 | 20 | PASS |
| **TOTAL** | **Baseline E2E Suite** | **Target $\ge 152$ tests** | **69** | **69** | **16** | **7** | **161** | **PASS** |

---

## 4. Release Defect Remediation & Feature Inventory (22 Features from PROJECT.md)

Cross-reference mapping of all 22 release features from `PROJECT.md § Feature Inventory` to their target verification channels and implementation milestones:

| # | Feature Name | Description | Milestone | Verification Channel & Target Assertions | Implementation Status |
|---|--------------|-------------|:---------:|-----------------------------------------|:---------------------:|
| 1 | 3D Scene 30 VSEPR Completeness | SF6, BF3 (trigonal planar), PCl5 (trigonal bipyramidal) in `buildVseprExpandedOctets` | M1 | Scene 30 mesh geometry, ligand counts (3, 5, 6), bond angles | IN_PROGRESS (M1) |
| 2 | 3D Scene 27 Concentration Cell Correctness | Dual Zn electrodes (`0x94a3b8`) & clear ZnSO4 beakers (`0xf1f5f9`) | M1 | Scene 27 mesh inspection, electrode material, ion distribution | IN_PROGRESS (M1) |
| 3 | 3D Scene 32 Hydrocarbon Atoms | Comparative ethane, ethene, ethyne with full H atom geometries | M1 | Scene 32 mesh inspection, C-H bond cylinders & H sphere meshes | IN_PROGRESS (M1) |
| 4 | 3D Hotspot Spatial Alignment | Spatial alignment for 99 hotspots across 32 scenes to mesh coordinates | M1 | Bounding box & coordinate assertions for Scenes 1, 13, 15, 19, 29, 32 | IN_PROGRESS (M1) |
| 5 | Three.js Animation Loop Optimization | Decouple 60-120 FPS hotspot screen projection from React state | M1 | Profiling / assertion that render loop does not invoke state updaters | IN_PROGRESS (M1) |
| 6 | WebGL Context & Lifecycle Management | Persist renderer on toggle; handle `webglcontextlost`/restored & unmount disposal | M1 | Context loss event simulation & disposal verification on unmount | IN_PROGRESS (M1) |
| 7 | 2D Canvas WebGL Fallback Hit-Testing | DPR scaling, client-to-canvas coordinate normalization, touch support | M1 | Canvas hit-testing coordinate math with variable DPR (1x, 2x, 3x) | IN_PROGRESS (M1) |
| 8 | 3D Dark Mode Neutral Lighting | Daylight neutral directional lighting (`0xffffff`) in dark mode | M1 | Directional light color assertion in dark theme | IN_PROGRESS (M1) |
| 9 | 3D RTL & Viewport Adaptation | Hotspot badge `<bdi dir="ltr">` and container `ResizeObserver` | M1 | DOM overlay inspection under Arabic RTL, ResizeObserver dispatch | IN_PROGRESS (M1) |
| 10 | 2D Diagram Dynamic Localization | Dynamic `spec.labels` lookups in 8 languages across all 11 SVG archetypes | M2 | SVG text element textContent matching localized string lookups | IN_PROGRESS (M2) |
| 11 | 2D Diagram Boundary & Collision Fixes | Periodic trend arrow bounds (`0 0 540 300`) & manometer label clearance | M2 | SVG viewBox boundary checks & label distance from U-tube path | IN_PROGRESS (M2) |
| 12 | 2D Diagram Scientific Accuracy | H2O 2nd lone pair ellipse (AX2E2), centered salt bridge label baseline | M2 | SVG element counts for H2O lone pairs, salt bridge text `y` anchor | IN_PROGRESS (M2) |
| 13 | 2D Light Theme Bubble & Contrast Fixes | Themed cyan bubbles with border, contrast-compliant NH3 labels | M2 | SVG element fill/stroke contrast ratios in Light theme | IN_PROGRESS (M2) |
| 14 | Automatic Chemical Formula Isolation | Regex auto-detection in `formatChemText` & `<bdi dir="ltr">` wrapping | M2 | String parsing tests on unadorned formulas ("H2SO4", "Ca(OH)2") | IN_PROGRESS (M2) |
| 15 | Multilingual Slide Translation Fixes | Authentic chemical terminology in Kurdish, French, Russian, Arabic, Chinese | M2 | Content verification in `slides_u*.ts` and `u*.ts` | IN_PROGRESS (M2) |
| 16 | Flashcard 3D Drag Physics Correction | Screen space transform order: `translate3d(...)` before `rotateY(180deg)` | M3 | CSS transform string order assertion when `isFlipped = true` | IN_PROGRESS (M3) |
| 17 | Flashcard Mobile Double-Flip & Z-Fighting | Synthetic click suppression on mobile & translateZ(1px) preserve-3d | M3 | Touch event simulation followed by synthetic click event | IN_PROGRESS (M3) |
| 18 | SVG Unique IDs & Reduced-Motion | `useId()` for `FlaskMark.tsx` gradients/filters, prefers-reduced-motion CSS | M3 | Multi-instance gradient ID uniqueness assertions, CSS media query checks | IN_PROGRESS (M3) |
| 19 | Mini-Game Lifecycle & State Updaters | Unmount timer disposal (`clearInterval`) & pure React state updaters | M3 | Component unmount lifecycle tests, side-effect isolation | IN_PROGRESS (M3) |
| 20 | Mini-Game Visual & RTL Fixes | Titration duplicate 50mL fix, dynamic Lewis dots, EquationBalancer `dir="ltr"` | M3 | Titration curve history array uniqueness, equation stage `dir` attribute | IN_PROGRESS (M3) |
| 21 | Test Harness Gaps & Hardening | `MockCanvasRenderingContext2D.scale(x,y)` & real 32-scene catalog bridge | M3 | Harness method existence tests, contracts bridge assertions | IN_PROGRESS (M3) |
| 22 | Full Verification Suite Pass | Pass `tsc`, `build`, `npm test` (161+), `verify-bank` (24,576 Qs), and `tier5` | M4 | 100% clean exit code 0 across all verification pipeline runners | PLANNED (M4) |

---

## 5. Dual Track Coverage Thresholds

Per the Dual Track Test Case Design Methodology for $N$ user-requirement features:
- **Tier 1 (Feature Coverage)**: $\ge 5 \times N$ tests
- **Tier 2 (Boundary & Corner Cases)**: $\ge 5 \times N$ tests
- **Tier 3 (Cross-Feature Combinations)**: $\ge N$ pairwise tests
- **Tier 4 (Real-World Application Scenarios)**: $\ge \max(5, \lceil N / 2 \rceil)$ scenarios
- **Total Minimum Threshold**: $\ge 11 \times N + \max(5, \lceil N / 2 \rceil)$ tests

### A. Subsystem Baseline Standards ($N = 13$ Subsystems)
- Tier 1: $5 \times 13 = 65$ tests (Current: 69 passed — **MET**)
- Tier 2: $5 \times 13 = 65$ tests (Current: 69 passed — **MET**)
- Tier 3: $\ge 15$ tests (Current: 16 passed — **MET**)
- Tier 4: $\ge 7$ scenarios (Current: 7 passed — **MET**)
- Total: $\ge 152$ tests (Current: 161 passed — **MET, 106%**)

### B. Release Scope Standards ($N = 22$ Features from PROJECT.md)
When all 22 release features are fully integrated in Milestone 4, the test suite targets the full $N=22$ threshold:
- Tier 1: $5 \times 22 = 110$ tests
- Tier 2: $5 \times 22 = 110$ tests
- Tier 3: $\ge 22$ pairwise tests
- Tier 4: $\ge 11$ application scenarios ($\max(5, 11) = 11$)
- Total: $\ge 253$ tests across the full suite for final release certification.

---

## 6. Real-World Student Workload Scenarios (Tier 4: S1–S11)

To meet the Dual Track requirement of $\ge \max(5, \lceil 22 / 2 \rceil) = 11$ realistic application scenarios, Tier 4 is specified with 11 distinct student journeys covering all 22 features:

| # | Scenario Name | Features Exercised | Problem Domain / Journey Description | Complexity |
|---|---------------|--------------------|--------------------------------------|:----------:|
| S1 | Onboarding & First Diagnostic Walkthrough | F07, F08, F10, F11, F12, F18 | Student completes 4-step onboarding, views unique FlaskMark branding, selects TYT track, takes 7-question diagnostic, reviews score and saves missed questions to Hata Defteri. | Medium |
| S2 | TYT Trial Exam with Diagram Analysis | F01, F03, F07, F09, F10, F11, F12, F13 | Full 7-question TYT trial exam in Dark Mode with 11 diagram archetypes, audio SFX feedback, score calculation with net penalty ($R - W/4$), and result rehydration. | High |
| S3 | AYT Organic Chemistry & 3D Lab Exploration | F02, F04, F01, F03, F04, F08 | Student navigates to Unit 23 (Organic Chemistry), opens Scene 30 (VSEPR expanded octets) and Scene 32 (Hydrocarbons), explores 3D hotspots, activates explode view, and verifies chemical formulas in 3D. | High |
| S4 | Leitner Spaced Repetition Mastery & 3D Flip | F05, F08, F11, F12, F16, F17 | Traversal of 396 Leitner flashcards across Boxes 1–5, 3D card flip animation, gesture-based dragging with correct screen translation, and persistent daily study queue progression. | Medium |
| S5 | Mini-Games Mastery Tournament & Lifecycle Stability | F06, F08, F11, F19, F20 | Sequential completion of all 6 mini-games (Periodic Hunter, Titration Simulator, Lewis Dot Builder, Equation Balancer, Compound Synthesis, ChemBlitz) with unmount cleanup and zero memory leaks. | High |
| S6 | Multilingual Switching & Formula Isolation | F08, F13, F14, F15 | Dynamic switching across all 8 supported languages (TR, EN, DE, FR, RU, AR, ZH, KU), verifying `<bdi dir="ltr">` chemical formula isolation and correct RTL layout in Arabic mode. | High |
| S7 | Full Offline State Persistence & Rehydration | F07, F08, F12 | Complete user session offline simulation: local storage state save, app restart, cache rehydration, and zero data loss for exam records, flashcard boxes, and unlocked achievements. | Medium |
| S8 | 2D Chemical Diagram SVG Multi-Theme & Localization Inspection | F10, F11, F12, F13, F09 | Comprehensive traversal of all 11 SVG diagram archetypes in both Light and Dark themes, verifying dynamic label localization in 8 languages, high-contrast bubbles, and lone-pair geometry. | High |
| S9 | WebGL Fallback 2D Canvas Interactive Exploration | F04, F07, F21 | Complete simulation of 3D Lab on devices without WebGL (or with context loss), verifying that 2D Canvas fallback renders schematics, handles Retina DPR scaling (2x/3x), and registers touch hotspot clicks. | High |
| S10 | Complete Electrochemical Cell & Concentration Cell Lab | F02, F04, F02, F04, F08 | Student traverses Unit 21 (Electrochemistry), inspecting Scene 26 (Daniell Cell) and Scene 27 (Zinc Concentration Cell), verifying dual Zn electrodes, clear ZnSO4 beakers, and differential ion distributions. | Medium |
| S11 | Mobile Touch Flashcard Drag & Reduced Motion Accessibility Journey | F05, F16, F17, F18, F08 | Student uses a mobile touch device with `prefers-reduced-motion` enabled: verifies synthetic click suppression (no double-flip), intuitive flipped drag physics, and WCAG AA contrast compliance. | Medium |

---

## 7. Concrete Interface Contracts

### 7.1 3D Subsystem (`Kimya3DLab.tsx` & `proceduralBuilders.ts`)
```typescript
export interface Kimya3DLabProps {
  currentScene: Scene3D;
  isDark: boolean;
  lang: LanguageCode;
  mode?: 'interactive' | 'exam' | 'mini';
}

export interface ProceduralSceneObject {
  group: THREE.Group;
  animate?: (delta: number) => void;
  dispose: () => void;
  updateTheme?: (isDark: boolean) => void;
}
```
- **Contract**: `Kimya3DLab` must not recreate `WebGLRenderer` on auto-rotate/play toggles. Must cleanly dispose geometries, materials, and textures on unmount. Key and fill lights must use `0xffffff` in dark mode.

### 7.2 2D Canvas WebGL Fallback (`Kimya3DFallbackCanvas.tsx`)
```typescript
export interface Kimya3DFallbackCanvasProps {
  scene: Scene3D;
  selectedHotspotId?: string;
  onSelectHotspot: (hs: Hotspot3D) => void;
}
```
- **Contract**: Canvas click/touch hit-testing must normalize coordinates using `(e.clientX - rect.left) * (canvas.width / rect.width)`.

### 7.3 2D Chemical Diagrams (`ChemicalDiagram.tsx`)
```typescript
export interface ChemicalDiagramProps {
  spec: ChemicalDiagramSpec;
}
```
- **Contract**: The outer container div must carry `className="diagram-svg-wrapper" dir="ltr"`. SVG text elements must derive from `spec.labels[key][lang]` without hardcoded Turkish fallbacks.

### 7.4 Chemical Formula Isolation (`ChemFormula.tsx`)
```typescript
export function formatChemText(rawText: string): React.ReactNode;
export function wrapChemFormula(formula: string): string;
```
- **Contract**: `formatChemText` must automatically detect unadorned chemical formulas (e.g. `H2SO4`, `Ca(OH)2`) using regex and wrap them in `<bdi dir="ltr">`.

---

## 8. Verification Pipeline Execution Protocol

```bash
# Step 1: Static TypeScript Type Checking (Exit 0)
npx tsc --noEmit

# Step 2: Production Bundle Compilation (Exit 0)
npm run build

# Step 3: 4-Tier End-to-End Verification Suite (Exit 0, >= 152 tests)
npm test

# Step 4: Question Bank & Curriculum Verification (Exit 0, 24,576 Qs)
npm run verify-bank

# Step 5: Tier 5 Adversarial Stress Suite (Exit 0, 31 probes)
npx tsx scripts/tier5AdversarialStress.ts
```

All 5 commands must execute cleanly with exit code `0` for any quality gate to pass.
