# Kimolab — 3D Chemistry for TYT & AYT

Kimolab (working name *Kimya YKS 3D*) is an offline chemistry study app for students preparing for the Turkish university entrance exam (YKS: TYT and AYT), and for anyone studying high-school chemistry in one of eight languages. It is a React + TypeScript web app, packaged for iOS and Android with Capacitor and also installable as a PWA.

Everything runs on the device. There is no backend, no account, no analytics, no ads and no network calls. All progress lives in `localStorage`.

| | |
|---|---|
| Bundle / app id | `com.kimyager.ykskimya` |
| Display name | Kimolab (store names: `Kimolab: <localized subtitle>`, see [store/STORE_LISTING.md](store/STORE_LISTING.md)) |
| Platforms | Web/PWA, iOS 15+ (iPhone + iPad), Android minSdk 24 (phone + tablet) |
| Languages | Türkçe, English, Deutsch, Français, Русский, العربية (RTL), 中文, Kurdî (Kurmanji) |

---

## Contents

1. [Features](#features)
2. [Curriculum](#curriculum)
3. [Tech stack](#tech-stack)
4. [Getting started](#getting-started)
5. [Building for iOS and Android](#building-for-ios-and-android)
6. [Project layout](#project-layout)
7. [Architecture](#architecture)
8. [Content pipeline](#content-pipeline)
9. [Internationalization](#internationalization)
10. [Local storage](#local-storage)
11. [Testing](#testing)
12. [Store release](#store-release)
13. [Conventions and gotchas](#conventions-and-gotchas)

---

## Features

The app has six bottom-navigation tabs (a sidebar on tablets).

| Tab | What it does | Main code |
|---|---|---|
| **Curriculum** (home) | 24 units with progress bars, daily goal ring, 9-slide study deck per unit (216 slides) with zoomable diagrams, and 8 quiz sets of 16 questions per unit | `components/study/` |
| **3D Lab** | 32 interactive Three.js scenes (molecules, crystal lattices, cells, apparatus) with 99 tappable hotspots; a 2D canvas fallback when WebGL is unavailable | `components/three/`, `data/threeScenesData.ts` |
| **Flashcards** | 396 cards with 3D flip/drag and a 5-box Leitner spaced-repetition schedule (1 / 2 / 5 / 9 / 14 days) | `components/cards/`, `engine/leitnerEngine.ts`, `engine/flashcardGenerator.ts` |
| **Games** | 6 mini-games: Periodic Table Hunter, Equation Balancer, Compound Synthesis, Lewis Dot Builder, Titration Simulator, Chem Blitz | `components/games/` |
| **Exams** | 80 mock exams (40 TYT: 7 questions / 10 min, 40 AYT: 13 questions / 20 min), unit tests, review after submit, mistake notebook and starred questions; net score = correct − wrong / 4 (ÖSYM rule) | `components/exams/`, `engine/mockExamCatalog.ts` |
| **Profile & Settings** | Multiple local learner profiles, dashboard, per-unit mastery, rule-based study coach, exam history, bookmarks; settings for language, theme (system/light/dark), 4 text sizes, reduced motion, sound effects, 7 procedural music tracks | `components/profile/`, `components/settings/`, `engine/aiCoachEngine.ts` |

Also: splash screen, 4-step onboarding (language, exam preference TYT / AYT / all, daily goal 10 / 20 / 40), XP and streaks, confetti, synthesized UI sound effects, offline indicator, PWA install prompt, Android back-button handling (`hooks/useBackDismiss.ts`).

Outside Turkish, exam names are replaced by level names (TYT → Basic, AYT → Advanced) via `i18n/examLevels.ts`.

> Note: the "AI Coach" is rule-based and runs locally; no AI model is called. Reminder notifications (`utils/notificationManager.ts`) exist in code but no native notification plugin is installed.

---

## Curriculum

24 units following the Turkish MEB high-school chemistry curriculum. Units 1–10 are TYT (grades 9–10), units 11–24 are AYT (grades 11–12).

| Unit | Exam | Grade | Title (TR) | Title (EN) |
|---|---|---|---|---|
| u01 | TYT | 9 | Kimya Bilimi | Chemistry as a Science |
| u02 | TYT | 9 | Atom ve Periyodik Sistem | Atom & Periodic System |
| u03 | TYT | 9 | Kimyasal Türler Arası Etkileşimler | Intermolecular Interactions |
| u04 | TYT | 9 | Maddenin Halleri | States of Matter |
| u05 | TYT | 9 | Doğa ve Kimya | Nature & Chemistry |
| u06 | TYT | 10 | Kimyanın Temel Kanunları ve Mol Kavramı | Basic Chemical Laws & The Mole |
| u07 | TYT | 10 | Kimyasal Tepkimeler ve Hesaplamalar | Chemical Reactions & Stoichiometry |
| u08 | TYT | 10 | Karışımlar ve Ayırma Teknikleri | Mixtures & Separation Techniques |
| u09 | TYT | 10 | Asitler, Bazlar ve Tuzlar | Acids, Bases & Salts |
| u10 | TYT | 10 | Kimya Her Yerde | Chemistry Everywhere |
| u11 | AYT | 11 | Modern Atom Teorisi | Modern Atomic Theory |
| u12 | AYT | 11 | Gazlar: Yasalar ve İdeal Gaz | Gases: Laws & Ideal Gas |
| u13 | AYT | 11 | Gazlar: Kinetik Teori ve Gerçek Gazlar | Gases: Kinetic Theory & Real Gases |
| u14 | AYT | 11 | Sıvı Çözeltiler ve Derişim Birimleri | Liquid Solutions & Concentrations |
| u15 | AYT | 11 | Koligatif Özellikler ve Çözünürlük | Colligative Properties & Solubility |
| u16 | AYT | 11 | Kimyasal Tepkimelerde Enerji | Energy in Chemical Reactions |
| u17 | AYT | 11 | Kimyasal Tepkimelerde Hız | Reaction Rates |
| u18 | AYT | 11 | Kimyasal Denge | Chemical Equilibrium |
| u19 | AYT | 11 | Asit-Baz Dengesi ve Titrasyon | Acid-Base Equilibrium & Titration |
| u20 | AYT | 11 | Çözünürlük Dengesi (Kçç) | Solubility Product (Ksp) |
| u21 | AYT | 12 | Kimya ve Elektrik: Redoks ve Galvanik Piller | Electrochemistry: Redox & Galvanic |
| u22 | AYT | 12 | Kimya ve Elektrik: Elektroliz ve Korozyon | Electrochemistry: Electrolysis & Corrosion |
| u23 | AYT | 12 | Karbon Kimyasına Giriş | Introduction to Carbon Chemistry |
| u24 | AYT | 12 | Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar | Organic Compounds: Hydrocarbons |

Content totals:

| Item | Count |
|---|---|
| Questions | 128 per unit × 24 = **3,072 per language** (5 options + worked explanation each), 24,576 across 8 languages |
| Study slides | 9 per unit = **216** |
| Diagrams | 2 per unit = 48, from 27 diagram archetypes |
| 3D scenes / hotspots | **32 / 99** |
| Flashcards | **396** (built from units 1–22) |
| Mock exams | **80** + a TG trial paper |

---

## Tech stack

- **React 19** + **TypeScript** (strict), bundled with **Vite**
- **Three.js** for the 3D lab (scenes built procedurally, no model files)
- **KaTeX** for typeset formulas and fractions; custom chemistry notation in `components/common/chemNotation.ts`
- **lucide-react** icons; fonts **Bricolage Grotesque** and **Figtree** bundled via Fontsource (no Google Fonts requests)
- **Web Audio API** for all sound: SFX and music are synthesized at runtime, no audio files
- **Capacitor 8** (`@capacitor/ios`, `@capacitor/android`, `@capacitor/app`) for the native shells
- **tsx** to run TypeScript scripts and the test suite
- No state library: state lives in custom hooks backed by `localStorage`

---

## Getting started

Requirements: Node.js 20+ and npm.

```bash
npm install
```

```bash
npm run dev
```

Vite prints the local URL (default http://localhost:5173).

| Script | Command | Purpose |
|---|---|---|
| `npm run dev` | `vite` | Dev server with HMR |
| `npm run build` | `tsc -b && vite build` | Type-check and build to `dist/` |
| `npm run preview` | `vite preview` | Serve the built `dist/` |
| `npm test` / `npm run test:e2e` | `tsx scripts/e2eTestRunner.ts` | Run the Tier 1–4 test suite |
| `npm run verify-bank` | `tsx scripts/verifyBank.ts` | Audit the question bank and curriculum |

Build output is split into chunks (`vite.config.ts`): `three`, `vendor`, `units-tyt` (u01–u10) and `units-ayt` (u11–u24). A small Vite plugin strips KaTeX's woff/ttf font fallbacks so only woff2 ships.

---

## Building for iOS and Android

The `ios/` and `android/` folders are **git-ignored** and generated by Capacitor. To recreate them on a fresh clone:

```bash
npm run build
```

```bash
npx cap add ios
```

```bash
npx cap add android
```

After adding iOS, apply the audio-session patch so music and SFX play even with the silent switch on and mix with other apps:

```bash
python3 scripts/patchIosAudioSession.py
```

Regenerate icons and splash screens for web, iOS and Android (needs Pillow):

```bash
python3 scripts/generateAppAssets.py
```

After every web change, rebuild and sync to the native projects:

```bash
npm run build && npx cap sync
```

Then open the native IDE:

```bash
npx cap open ios
```

```bash
npx cap open android
```

Capacitor config (`capacitor.config.json`): `webDir` is `dist`, background `#070b14`, Android scheme `https`, iOS `contentInset: never`.

Signing keys (`*.jks`, `*.keystore`) and `.env` files are git-ignored and must never be committed.

---

## Project layout

```
kimya/
├── index.html                 App entry HTML
├── public/                    PWA manifest, service worker (sw.js), icons
├── src/
│   ├── main.tsx               React root, service worker registration
│   ├── App.tsx                App shell: tabs, splash, onboarding, nav, global click SFX, study-time tracking
│   ├── components/
│   │   ├── study/             Curriculum view, unit slide deck modal
│   │   ├── three/             3D lab, procedural scene builders, 2D fallback canvas
│   │   ├── cards/             Flashcards view
│   │   ├── games/             Games hub, 6 mini-games, shared HUD
│   │   ├── exams/             Exam center, active exam, quiz session modal
│   │   ├── diagrams/          SVG chemical diagrams (27 archetypes)
│   │   ├── profile/           Profile, dashboard, coach, history
│   │   ├── settings/          Settings
│   │   ├── onboarding/        First-run onboarding
│   │   └── common/            ChemFormula, KaTeX typesetting, chem notation, confetti, dialogs, logo
│   ├── data/
│   │   ├── units/             u01.ts … u24.ts — hand-audited unit seed data (source of truth)
│   │   ├── studySlides/       9-slide decks per unit — hand-audited
│   │   ├── i18n/              Curriculum translation cache (legacy generator input)
│   │   └── threeScenesData.ts 3D scene catalog + hotspots
│   ├── engine/
│   │   ├── questionGenerator.ts       Compiles 128 questions/unit from seed data
│   │   ├── diagramQuestionEnricher.ts Attaches diagrams to questions
│   │   ├── flashcardGenerator.ts      Builds flashcards
│   │   ├── leitnerEngine.ts           Leitner 5-box scheduler (per profile)
│   │   ├── mockExamCatalog.ts         80 mock exams, TG paper, ÖSYM net scoring
│   │   ├── aiCoachEngine.ts           Rule-based mastery & study suggestions
│   │   └── langPolish/                Final wording passes for ar, zh, ru, ku
│   ├── store/
│   │   ├── useAppStore.ts     Profiles, stats, XP, streaks, exam results, mistakes, bookmarks, language, theme
│   │   └── usePreferences.ts  Daily goal, text size, reduced motion, SFX, today's count
│   ├── audio/                 SFX synth, procedural music engine, background-music hook
│   ├── i18n/                  UI strings for all 8 languages, split by area
│   ├── hooks/                 useBackDismiss (Android/browser back)
│   ├── styles/                theme.css (tokens, light/dark) + per-screen CSS
│   ├── types/chemistry.ts     Shared domain types
│   ├── utils/                 Notification manager, legacy sfx helpers
│   └── views/                 Legacy views, only imported by tests
├── scripts/                   Test runners, bank verifier, content generators, asset/native helpers
├── tests/e2e/                 Tier 1–4 tests + in-process harness
├── store/                     Store listing, privacy policy, store graphics
├── TEST_INFRA.md              Detailed test design
├── TEST_READY.md              Test coverage summary
├── capacitor.config.json
└── vite.config.ts
```

---

## Architecture

**App shell.** `App.tsx` holds the active tab (`curriculum | lab3d | cards | games | exams | profile | settings`) and cross-tab targets (e.g. "open this unit's flashcards" or "open the 3D scene for this unit"). There is no router; system back on a non-home tab returns home.

**State.** Two hooks, no external library:
- `useAppStore` — learner profiles (several per device), active profile, language, theme, XP, streaks, daily activity, completed slides, game high scores, mock best scores, exam results, mistake notebook (with the last wrong pick), bookmarks, active exam state. Persisted to `localStorage` and rehydrated defensively.
- `usePreferences(profileId)` — daily goal, text size (`--fs` CSS multiplier: 0.9 / 1 / 1.15 / 1.3), reduced motion, SFX on/off, today's answer count per profile.

**Content compilation.** Unit seed data (`data/units/uXX.ts`) holds facts with matching traps, concept comparisons, ordered sequences and ÖSYM-style twin questions, all as `LocalizedText` (one string per language). `engine/questionGenerator.ts` turns these into 8 sets × 16 questions with five rotated options and explanations; `diagramQuestionEnricher.ts` adds diagram specs; `langPolish/` applies language-specific wording fixes. Compilation is deterministic, so the same question has the same id and answer key in every session.

**3D lab.** `threeScenesData.ts` describes each scene (title, unit, hotspots in all languages); `proceduralBuilders.ts` builds the geometry with Three.js. `Kimya3DLab.tsx` manages renderer lifecycle, WebGL context loss, DPR scaling and theme lighting; `Kimya3DFallbackCanvas.tsx` renders a 2D version with hit-testing when WebGL fails.

**Audio.** `audio/sfx.ts` synthesizes clicks, correct/wrong and start sounds. A global click listener in `App.tsx` plays a click for any button unless a handler already played feedback; `data-sfx="start"` or `data-sfx="none"` on an element changes this. `audio/musicEngine.ts` generates 7 ambient tracks procedurally.

**Theming.** `styles/theme.css` defines color tokens for light and dark; the user picks system / light / dark. Each screen has its own CSS file in `styles/screens/`.

**Offline.** `public/sw.js` caches same-origin assets (`kimya-yks-v1` cache). Inside the native apps the bundle is local anyway.

---

## Content pipeline

> **The unit files `src/data/units/u01–u24.ts` and `src/data/studySlides/*` are hand-audited and are the source of truth.** Edit them directly.

The scripts below were used to bootstrap that content from machine translations. They still read the *pre-audit* texts, so running them would overwrite every correction. `scripts/auditedSourceGuard.ts` makes them refuse to run unless `--force-overwrite-audited` is passed. Do not pass it.

| Script | Purpose |
|---|---|
| `generateCurriculumUnits.ts` | (Guarded) Generated `data/units/u01–u24.ts` |
| `generateStudySlides.ts` | (Guarded) Generated `data/studySlides/*` |
| `buildMultilingualCurriculum.ts` | Built the translation caches (`scripts/curriculumTranslationsCache.json`, `src/data/i18n/curriculumTranslations.json`) |
| `patchChemicalTranslations.ts` | (Guarded) Patched chemical terms in those caches |
| `verifyBank.ts` | Audits all units, slides, mock exams and compiled questions in 8 languages — run this after any content edit |

Content conventions decided by the project owner:
- Bleaching powder (kireç kaymağı) is written **CaOCl₂**, not Ca(ClO)₂.

---

## Internationalization

- Languages and text direction are listed in `src/i18n/translations.ts` (`LANGUAGES`). Arabic is RTL.
- UI strings are split by area: `translations.ts`, `appShellStrings.ts`, `shellStrings.ts`, `redesignStrings.ts`, `curriculumStrings.ts`, `examStrings.ts`, `examLevels.ts`, `gamesStrings.ts`, `diagramStrings.ts`, `slideDeckStrings.ts`.
- Curriculum content is stored inline as `LocalizedText` objects in the unit, slide and scene data.
- Chemical formulas inside RTL text are isolated so they read left-to-right (`ChemFormula`, `chemNotation.ts`).
- When adding a string, add it for **all 8 languages**; the tests check completeness.

---

## Local storage

All data stays on the device. Keys used:

| Key | Contents |
|---|---|
| `kimya-yks-progress-v1` | Main app store (profiles, stats, results, mistakes, bookmarks, language, theme) |
| `kimya-yks-leitner-v1` (+ per-profile suffix) | Flashcard Leitner boxes |
| `kimya-prefs` | Daily goal, text size, reduced motion, SFX |
| `kimya-daily` | Today's answer count per profile |
| `kimya-music` | Music on/off, track, volume |
| `kimya-color-scheme` | Theme |
| `kimya-exam-pref` | TYT / AYT / ALL from onboarding |
| `kimya-onboarded`, `kimya-onboarding-pending` | Onboarding state |
| `kimya-daily-reminder` | Reminder settings (not active natively) |

Bump the version suffix and add a migration if you change a stored shape.

---

## Testing

The suite runs fully in-process in Node via `tsx` with shims for DOM, Storage, Canvas 2D and Web Audio (`tests/e2e/harness/testEnv.ts`). No browser or dev server is needed.

```bash
npm test
```

```bash
npm run verify-bank
```

```bash
npx tsx scripts/tier5AdversarialStress.ts
```

```bash
npx tsc --noEmit
```

| Tier | File | Focus |
|---|---|---|
| 1 | `tier1-feature-coverage.test.ts` | Feature coverage (category partition) |
| 2 | `tier2-boundary-corner.test.ts` | Boundaries, WebGL loss, DPR, RTL |
| 3 | `tier3-cross-feature.test.ts` | Feature combinations |
| 4 | `tier4-user-journeys.test.ts` | Full student journeys |
| — | `milestone6-ai-coach-profiles.test.ts` | Coach and profiles |
| 5 | `scripts/tier5AdversarialStress.ts` | 31 hostile probes (storage, generator, scoring, games, audio) |

Exit code 0 means everything passed. See [TEST_INFRA.md](TEST_INFRA.md) and [TEST_READY.md](TEST_READY.md) for the full design and coverage matrix.

---

## Store release

Everything for the App Store and Google Play is under `store/`:

- [store/STORE_LISTING.md](store/STORE_LISTING.md) — name research, verified feature claims, store copy for all 8 languages, App Store and Play settings, open items
- [store/privacy-policy.md](store/privacy-policy.md) — privacy policy (no data collected)
- `store/assets/` — icons, feature graphics, screenshots for iPhone, iPad, Android phone/tablets and Chromebook in 7 languages, plus promo banners; see `store/assets/README.md` and `overview.html`. Kurdish assets are in `ku_later-website-only/` because neither store supports Kurmanji as a listing locale.

Before release, check the on-device name in `ios/App/App/Info.plist` (`CFBundleDisplayName`) and Android `res/values/strings.xml` (`app_name`) matches **Kimolab**, since the native folders are regenerated.

---

## Conventions and gotchas

- **Do not run the content generators** with `--force-overwrite-audited`; edit `data/units` and `data/studySlides` by hand, then run `npm run verify-bank`.
- **`ios/` and `android/` are not in git.** Any native change (audio session, display name, icons) must be re-applied after `npx cap add` — that is what `patchIosAudioSession.py` and `generateAppAssets.py` are for.
- **No network.** Do not add fetches, analytics, ads or remote fonts; the privacy policy and store data-safety answers depend on it.
- **Every UI string in 8 languages**, and check Arabic RTL.
- **Do not claim "AI"** for the coach, or notifications, in user-facing copy (see the "not claimed" list in `STORE_LISTING.md`).
- `src/views/` is legacy and only referenced by tests; the live UI is in `src/components/`.
