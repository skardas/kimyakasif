import { ALL_CHEMISTRY_UNITS } from '../src/data/units';
import { ALL_UNIT_DEEP_STUDY_GUIDES } from '../src/data/studySlides';
import {
  compileAllQuestions,
  compileUnitQuestions,
  QUESTIONS_PER_UNIT,
  GENERIC_CATEGORY_DESCRIPTORS,
  extractEntityCandidates,
} from '../src/engine/questionGenerator';
import { compileAllFlashcards } from '../src/engine/flashcardGenerator';
import { getUnitDiagramSpecs } from '../src/engine/diagramQuestionEnricher';
import {
  getMockExamCatalog,
  buildMockExamQuestions,
  ALL_MOCK_EXAM_SPECS,
} from '../src/engine/mockExamCatalog';
import { LANGUAGES } from '../src/i18n/translations';
import { SLIDE_DECK_STRINGS } from '../src/i18n/slideDeckStrings';
import type { CompiledQuestion } from '../src/data/units/types';
import type { LanguageCode, DiagramArchetypeId } from '../src/types/chemistry';

function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    console.error(`❌ VERIFICATION FAILURE: ${message}`);
    throw new Error(message);
  }
}

const ALL_11_DIAGRAM_ARCHETYPES: DiagramArchetypeId[] = [
  'bohr-orbital-atom',
  'periodic-table-trends',
  'gas-piston-manometer',
  'phase-heating-curve',
  'potential-energy-reaction',
  'titration-burette-curve',
  'galvanic-daniell-cell',
  'electrolysis-hoffman-cell',
  'vsepr-molecular-geometry',
  'equilibrium-le-chatelier',
  'lab-glassware-setup',
];

const FOREIGN_LANGUAGES: LanguageCode[] = ['en', 'de', 'fr', 'ru', 'ar', 'zh', 'ku'];

console.log('================================================================================');
console.log('🔬 Kimya YKS — Comprehensive Question Bank, 9-Slide Deep Study Decks,');
console.log('   80 Mock Exams (40 TYT + 40 AYT) & Multilingual Verification Suite');
console.log('================================================================================\n');

// 1. Exactly 24 Units & Curriculum Structure
console.log(`[Stage 1/6] Auditing Curriculum Units & Raw Seed Data...`);
assert(ALL_CHEMISTRY_UNITS.length === 24, `Expected exactly 24 units, got ${ALL_CHEMISTRY_UNITS.length}`);

const tytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT');
const aytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'AYT');
assert(tytUnits.length === 10, `Expected 10 TYT units (u01..u10), got ${tytUnits.length}`);
assert(aytUnits.length === 14, `Expected 14 AYT units (u11..u24), got ${aytUnits.length}`);

for (const u of ALL_CHEMISTRY_UNITS) {
  assert(u.facts.length >= 16, `Unit ${u.id} has ${u.facts.length} facts (min 16 required)`);
  assert(u.comparisons.length >= 8, `Unit ${u.id} has ${u.comparisons.length} comparisons (min 8 required)`);
  assert(u.sequences.length >= 4, `Unit ${u.id} has ${u.sequences.length} sequences (min 4 required)`);
  assert(u.osymTwins.length >= 16, `Unit ${u.id} has ${u.osymTwins.length} osymTwins (min 16 required)`);

  for (const langMeta of LANGUAGES) {
    const l = langMeta.code as LanguageCode;
    assert(!!u.title[l] && u.title[l].trim().length > 0, `Missing title[${l}] in unit ${u.id}`);
    assert(!!u.subtitle[l] && u.subtitle[l].trim().length > 0, `Missing subtitle[${l}] in unit ${u.id}`);
  }

  // Assert foreign languages have non-identical prose strings compared to Turkish
  for (const foreignLang of FOREIGN_LANGUAGES) {
    for (const f of u.facts) {
      assert(
        f.fact[foreignLang] !== f.fact.tr,
        `[${foreignLang}] Fact in unit ${u.id} (${f.id}) is untranslated (identical to TR): "${f.fact.tr.substring(0, 40)}..."`
      );
      assert(
        f.trap[foreignLang] !== f.trap.tr,
        `[${foreignLang}] Trap in unit ${u.id} (${f.id}) is untranslated (identical to TR): "${f.trap.tr.substring(0, 40)}..."`
      );
    }

    for (const c of u.comparisons) {
      assert(
        c.distinction[foreignLang] !== c.distinction.tr,
        `[${foreignLang}] Comparison distinction in unit ${u.id} (${c.id}) is untranslated: "${c.distinction.tr.substring(0, 40)}..."`
      );
    }

    for (const s of u.sequences) {
      assert(
        s.title[foreignLang] !== s.title.tr,
        `[${foreignLang}] Sequence title in unit ${u.id} (${s.id}) is untranslated: "${s.title.tr}"`
      );
      for (let stIdx = 0; stIdx < s.steps.length; stIdx++) {
        const step = s.steps[stIdx];
        // Universal formulas like "1s < 2s < 2p" are legitimately identical across languages
        const isFormula = /^[0-9a-zA-Z\s<>=+^._()°/:-]+$/.test(step.tr) && !/[ğüşıöçĞÜŞİÖÇ]/.test(step.tr) && !/\b(ve|ile|den|dan|olan|için|kadar)\b/i.test(step.tr);
        if (!isFormula) {
          assert(
            step[foreignLang] !== step.tr,
            `[${foreignLang}] Sequence step ${stIdx + 1} in unit ${u.id} (${s.id}) is untranslated: "${step.tr}"`
          );
        }
      }
    }

    for (const twin of u.osymTwins) {
      assert(
        twin.stem[foreignLang] !== twin.stem.tr,
        `[${foreignLang}] ÖSYM twin stem in unit ${u.id} (${twin.id}) is untranslated: "${twin.stem.tr.substring(0, 40)}..."`
      );
      // Pure mathematical derivations (e.g. "P * V = n * R * T -> P = 2.5 atm") are universal equations
      const isMathEquation = /^[0-9a-zA-Z\s<>=+^._()°/*:,\[\]%-]+$/.test(twin.explanation.tr) && !/[ğüşıöçĞÜŞİÖÇ]/.test(twin.explanation.tr) && !/\b(ve|ile|den|dan|olan|için|kadar|ifadesidir|doğrudur|yanlıştır)\b/i.test(twin.explanation.tr);
      if (!isMathEquation) {
        assert(
          twin.explanation[foreignLang] !== twin.explanation.tr,
          `[${foreignLang}] ÖSYM twin explanation in unit ${u.id} (${twin.id}) is untranslated: "${twin.explanation.tr.substring(0, 40)}..."`
        );
      }
    }
  }
}
console.log(`✅ 24 Units verified: 10 TYT + 14 AYT with min 16 facts, 8 comparisons, 4 sequences, 16 ÖSYM twins each with authentic multilingual content.\n`);

// 2. Exactly 24 Deep Study Decks (9 Slides Each = 216 Slides Total)
console.log(`[Stage 2/6] Auditing 24 Visual Deep Study Decks & Multilingual Guide Content...`);
const guideKeys = Object.keys(ALL_UNIT_DEEP_STUDY_GUIDES);
assert(guideKeys.length === 24, `Expected 24 deep study slide decks, got ${guideKeys.length}`);

for (const u of ALL_CHEMISTRY_UNITS) {
  const guide = ALL_UNIT_DEEP_STUDY_GUIDES[u.id];
  assert(!!guide, `Missing study guide for unit ${u.id}`);

  for (const langMeta of LANGUAGES) {
    const l = langMeta.code as LanguageCode;

    // Big Picture Quote
    assert(
      !!guide.bigPictureQuote[l] && !guide.bigPictureQuote[l].includes('undefined'),
      `[${l}] Missing/invalid bigPictureQuote in ${u.id}`
    );

    // Deep Subtopics (3 items with 3 key points each)
    assert(guide.deepSubtopics.length === 3, `Expected 3 subtopics in ${u.id}, got ${guide.deepSubtopics.length}`);
    for (const sub of guide.deepSubtopics) {
      assert(!!sub.badge[l] && !sub.badge[l].includes('undefined'), `[${l}] Missing subtopic badge in ${u.id} (${sub.id})`);
      assert(!!sub.title[l] && !sub.title[l].includes('undefined'), `[${l}] Missing subtopic title in ${u.id} (${sub.id})`);
      assert(!!sub.summary[l] && !sub.summary[l].includes('undefined'), `[${l}] Missing subtopic summary in ${u.id} (${sub.id})`);
      assert(sub.keyPoints.length === 3, `Expected 3 key points in subtopic ${sub.id}`);
      for (const kp of sub.keyPoints) {
        assert(!!kp[l] && !kp[l].includes('undefined'), `[${l}] Missing subtopic keypoint in ${u.id} (${sub.id})`);
      }
    }

    // Golden Formulas (3 items)
    assert(guide.goldenFormulas.length === 3, `Expected 3 golden formulas in ${u.id}, got ${guide.goldenFormulas.length}`);
    for (const gf of guide.goldenFormulas) {
      assert(!!gf.label[l] && !gf.label[l].includes('undefined'), `[${l}] Missing formula label in ${u.id} (${gf.id})`);
      assert(!!gf.expression[l] && !gf.expression[l].includes('undefined'), `[${l}] Missing formula expression in ${u.id} (${gf.id})`);
      assert(!!gf.examNote[l] && !gf.examNote[l].includes('undefined'), `[${l}] Missing formula examNote in ${u.id} (${gf.id})`);
    }

    // Memory Mnemonics (2 items)
    assert(guide.memoryMnemonics.length === 2, `Expected 2 memory mnemonics in ${u.id}, got ${guide.memoryMnemonics.length}`);
    for (const mm of guide.memoryMnemonics) {
      assert(!!mm.codeBadge[l] && !mm.codeBadge[l].includes('undefined'), `[${l}] Missing mnemonic codeBadge in ${u.id} (${mm.id})`);
      assert(!!mm.title[l] && !mm.title[l].includes('undefined'), `[${l}] Missing mnemonic title in ${u.id} (${mm.id})`);
      assert(!!mm.expansion[l] && !mm.expansion[l].includes('undefined'), `[${l}] Missing mnemonic expansion in ${u.id} (${mm.id})`);
      assert(!!mm.memoryTip[l] && !mm.memoryTip[l].includes('undefined'), `[${l}] Missing mnemonic memoryTip in ${u.id} (${mm.id})`);
    }

    // Unit Slide Diagram Specs (Dual diagrams for Slide 1 & Slide 3)
    const [diagA, diagB] = getUnitDiagramSpecs(u.id, l);
    assert(!!diagA.archetype && !!diagA.title && !diagA.title.includes('undefined'), `[${l}] Missing Slide 1 diagram in ${u.id}`);
    assert(!!diagB.archetype && !!diagB.title && !diagB.title.includes('undefined'), `[${l}] Missing Slide 3 diagram in ${u.id}`);
  }
}
console.log(`✅ 24 Study Decks (216 slides) verified with complete 8-language content & dual diagram pairs.\n`);

// 3. Slide Deck UI Locale Strings
console.log(`[Stage 3/6] Auditing Slide Deck UI Localization Strings...`);
for (const langMeta of LANGUAGES) {
  const l = langMeta.code as LanguageCode;
  const s = SLIDE_DECK_STRINGS[l];
  assert(!!s, `Missing slide deck strings for language ${l}`);
  assert(s.slideTitles.length === 9, `[${l}] Expected 9 slide titles, got ${s.slideTitles.length}`);
  assert(s.tabLabels.length === 9, `[${l}] Expected 9 tab labels, got ${s.tabLabels.length}`);
  assert(!!s.prevSlide && !!s.nextSlide && !!s.markCompleteBtn && !!s.completedEarnedLabel, `[${l}] Missing button labels in slide strings`);
}
console.log(`✅ Slide Deck UI localized across all 8 languages.\n`);

// 4. Multilingual Question Bank Compilation & Zero-Defect Assertions
console.log(`[Stage 4/6] Compiling and Validating 24,576 Question Instances (8 Languages × 3,072)...`);
let grandTotalQuestions = 0;
let grandTotalDiagrammedQuestions = 0;
const trQuestionsMap = new Map<string, CompiledQuestion>();

for (const langMeta of LANGUAGES) {
  const lang = langMeta.code as LanguageCode;
  const allQs = compileAllQuestions(ALL_CHEMISTRY_UNITS, lang);

  if (lang === 'tr') {
    for (const q of allQs) {
      trQuestionsMap.set(q.id, q);
    }
  }

  assert(
    allQs.length === 24 * QUESTIONS_PER_UNIT,
    `[${lang}] Expected ${24 * QUESTIONS_PER_UNIT} questions, got ${allQs.length}`
  );
  grandTotalQuestions += allQs.length;

  let langDiagramCount = 0;
  let langVariant1Count = 0;
  let langVariant2Count = 0;
  const encounteredArchetypes = new Set<string>();

  for (const u of ALL_CHEMISTRY_UNITS) {
    const uQs = compileUnitQuestions(u, lang);
    assert(
      uQs.length === QUESTIONS_PER_UNIT,
      `[${lang}] Unit ${u.id} produced ${uQs.length} questions instead of ${QUESTIONS_PER_UNIT}`
    );

    const keyCounts = [0, 0, 0, 0, 0];
    const unitSignatures = new Set<string>();
    let unitDiagCount = 0;
    let unitVariant1Count = 0;
    let unitVariant2Count = 0;

    for (const q of uQs) {
      // 1. Stem integrity
      assert(!!q.stem && q.stem.trim().length >= 10, `[${lang}] Stem too short or empty in question ${q.id}`);
      assert(!q.stem.includes('undefined'), `[${lang}] 'undefined' leaked in stem of question ${q.id}`);

      // Foreign language non-identical check against Turkish
      if (lang !== 'tr') {
        const trQ = trQuestionsMap.get(q.id);
        if (trQ) {
          assert(
            q.stem !== trQ.stem,
            `[${lang}] Question ${q.id} stem is untranslated (identical to TR): "${q.stem.substring(0, 40)}..."`
          );
          const isMathExplanation = /^[0-9a-zA-Z\s<>=+^._()°/*:,\[\]%-]+$/.test(q.explanation) && !/[ğüşıöçĞÜŞİÖÇ]/.test(q.explanation) && !/\b(ve|ile|den|dan|olan|için|kadar|ifadesidir|doğrudur|yanlıştır)\b/i.test(q.explanation);
          if (!isMathExplanation) {
            assert(
              q.explanation !== trQ.explanation,
              `[${lang}] Question ${q.id} explanation is untranslated (identical to TR): "${q.explanation.substring(0, 40)}..."`
            );
          }
        }
      }

      // 2. Options integrity (exactly 5 options)
      assert(q.options.length === 5, `[${lang}] Question ${q.id} has ${q.options.length} options (expected 5)`);
      for (const opt of q.options) {
        assert(!!opt && opt.trim().length > 0, `[${lang}] Empty option string in question ${q.id}`);
        assert(!opt.includes('undefined'), `[${lang}] 'undefined' leaked in option of question ${q.id}`);
        // Strict assertion: zero placeholder dummy options
        assert(
          !opt.includes('Alternatif Seçenek') && !opt.includes('Seçenek'),
          `[${lang}] Dummy placeholder option leaked in question ${q.id}: "${opt}"`
        );
      }

      // 3. Option uniqueness
      const uniqueOpts = new Set(q.options.map((o) => o.trim().toLowerCase()));
      assert(
        uniqueOpts.size === 5,
        `[${lang}] Duplicate options detected in ${q.id}: ${JSON.stringify(q.options)}`
      );

      // 4. Correct index bounds
      assert(
        q.correctIndex >= 0 && q.correctIndex <= 4,
        `[${lang}] Out-of-bounds correctIndex (${q.correctIndex}) in question ${q.id}`
      );
      keyCounts[q.correctIndex]++;

      // 5. Explanation integrity
      assert(
        !!q.explanation && q.explanation.trim().length >= 10,
        `[${lang}] Explanation too short or missing in question ${q.id}`
      );
      assert(!q.explanation.includes('undefined'), `[${lang}] 'undefined' leaked in explanation of question ${q.id}`);

      // 6. Anti-leak assertion (correct option must not leak verbatim in question stem)
      const correctText = q.options[q.correctIndex].trim().toLowerCase();
      const genericWords = [
        'yalnız', 'only', 'nur', 'seul', 'только', 'فقط', '仅', 'tenê',
        've', 'and', 'und', 'et', 'и', 'و', '和', 'û',
        'mol', 'gaz', 'sıvı', 'katı', 'artar', 'azalır', 'değişmez'
      ];
      const isGeneric = genericWords.some((w) => correctText === w);
      if (correctText.length >= 8 && !isGeneric) {
        const strippedStem = q.stem.toLowerCase();
        if (strippedStem.includes(`"${correctText}"`) || strippedStem.includes(`'${correctText}'`)) {
          throw new Error(`[${lang}] Quoted answer leak in ${q.id}: stem contains quote '${correctText}'`);
        }
      }

      // 7. Signature uniqueness within unit
      const qSig = `${q.stem}||${q.options.join('|')}`;
      assert(!unitSignatures.has(qSig), `[${lang}] Duplicate question signature in ${u.id}: ${q.id}`);
      unitSignatures.add(qSig);

      // 8. Diagram attachment check
      if (q.diagram) {
        unitDiagCount++;
        langDiagramCount++;
        grandTotalDiagrammedQuestions++;
        if (q.diagram.variant === 1) {
          unitVariant1Count++;
          langVariant1Count++;
        }
        if (q.diagram.variant === 2) {
          unitVariant2Count++;
          langVariant2Count++;
        }
        encounteredArchetypes.add(q.diagram.archetype);

        assert(!!q.diagram.archetype, `[${lang}] Missing diagram archetype in ${q.id}`);
        assert(!!q.diagram.title && !q.diagram.title.includes('undefined'), `[${lang}] Incomplete diagram title in ${q.id}`);
        assert(!!q.diagram.caption && !q.diagram.caption.includes('undefined'), `[${lang}] Incomplete diagram caption in ${q.id}`);
      }
    }

    // Key balance check per unit (tolerance [22, 30] for ideal 25.6)
    for (let k = 0; k < 5; k++) {
      const keyLetter = String.fromCharCode(65 + k);
      assert(
        keyCounts[k] >= 22 && keyCounts[k] <= 30,
        `[${lang}] Key ${keyLetter} unbalanced in unit ${u.id}: count=${keyCounts[k]} (expected 22-30)`
      );
    }

    // Strict diagram variant count check: exactly 16 variant 1 and 16 variant 2 per unit
    assert(
      unitVariant1Count === 16,
      `[${lang}] Unit ${u.id} has ${unitVariant1Count} variant 1 diagrams (expected exactly 16)`
    );
    assert(
      unitVariant2Count === 16,
      `[${lang}] Unit ${u.id} has ${unitVariant2Count} variant 2 diagrams (expected exactly 16)`
    );
    assert(
      unitDiagCount === 32,
      `[${lang}] Unit ${u.id} has ${unitDiagCount} diagram questions (expected exactly 32)`
    );
  }

  // Strict diagram archetype check: ALL 11 scientific archetypes must exist in compiled questions
  for (const arch of ALL_11_DIAGRAM_ARCHETYPES) {
    assert(
      encounteredArchetypes.has(arch),
      `[${lang}] Missing scientific diagram archetype in question bank: '${arch}'`
    );
  }
  assert(
    encounteredArchetypes.size === ALL_11_DIAGRAM_ARCHETYPES.length,
    `[${lang}] Expected exactly ${ALL_11_DIAGRAM_ARCHETYPES.length} distinct diagram archetypes in question bank, found ${encounteredArchetypes.size}`
  );

  console.log(
    `  ✅ [${lang.toUpperCase()} - ${langMeta.nativeName}] 3,072 Qs verified (32 diagrams/unit: 16 V1 + 16 V2, all 11 archetypes present) | Keys A-E strictly balanced across all 24 units`
  );
}

// 5. 80 Mock Exams (40 TYT + 40 AYT Trials) Audit
console.log(`\n[Stage 5/6] Auditing ALL 80 Mock Practice Exams (40 TYT + 40 AYT Trials) across 8 Languages...`);
assert(ALL_MOCK_EXAM_SPECS.length === 80, `Expected 80 mock exam specs, got ${ALL_MOCK_EXAM_SPECS.length}`);

for (const langMeta of LANGUAGES) {
  const lang = langMeta.code as LanguageCode;
  const catalog = getMockExamCatalog(lang);
  assert(catalog.length === 80, `[${lang}] Expected catalog length 80, got ${catalog.length}`);

  const tytMocks = catalog.filter((m) => m.category === 'TYT_BRANCH');
  const aytMocks = catalog.filter((m) => m.category === 'AYT_BRANCH');
  assert(tytMocks.length === 40, `[${lang}] Expected 40 TYT trials, got ${tytMocks.length}`);
  assert(aytMocks.length === 40, `[${lang}] Expected 40 AYT trials, got ${aytMocks.length}`);

  // Audit ALL 80 mock exams across all 8 languages (80 specs * 8 languages = 640 exams, 6,400 questions)
  for (const spec of ALL_MOCK_EXAM_SPECS) {
    const trialQuestions = buildMockExamQuestions(spec.id, ALL_CHEMISTRY_UNITS, lang);
    const isTyt = spec.category === 'TYT_BRANCH';
    const expectedCount = isTyt ? 7 : 13;

    assert(
      trialQuestions.length === expectedCount,
      `[${lang}] Trial ${spec.id} produced ${trialQuestions.length} questions (expected ${expectedCount})`
    );

    const questionIds = new Set<string>();
    for (const q of trialQuestions) {
      assert(!!q.stem && q.stem.trim().length >= 10, `[${lang}] Empty stem in ${spec.id} -> ${q.id}`);
      assert(q.options.length === 5, `[${lang}] Invalid option count in ${spec.id} -> ${q.id}`);
      assert(q.correctIndex >= 0 && q.correctIndex <= 4, `[${lang}] Bad correctIndex in ${spec.id} -> ${q.id}`);
      assert(!!q.explanation && q.explanation.trim().length >= 10, `[${lang}] Missing explanation in ${spec.id} -> ${q.id}`);
      assert(!questionIds.has(q.id), `[${lang}] Duplicate question in trial ${spec.id}: ${q.id}`);
      questionIds.add(q.id);

      // Strict check: zero dummy options in mock exams
      for (const opt of q.options) {
        assert(
          !opt.includes('Alternatif Seçenek') && !opt.includes('Seçenek'),
          `[${lang}] Dummy placeholder option leaked in mock exam ${spec.id} question ${q.id}: "${opt}"`
        );
      }

      if (isTyt) {
        assert(q.exam === 'TYT', `[${lang}] Non-TYT question in TYT trial ${spec.id}: ${q.id}`);
      } else {
        assert(q.exam === 'AYT', `[${lang}] Non-AYT question in AYT trial ${spec.id}: ${q.id}`);
      }
    }
  }

  console.log(`  ✅ [${lang.toUpperCase()}] Verified ALL 80 Mock Exams (40 TYT 7-Q + 40 AYT 13-Q) with zero placeholder options`);
}

// 6. Linguistic Purity, French Elision, MT Artifacts, Roman Numerals & Flashcard Quality
console.log(`\n[Stage 6/7] Auditing Linguistic Purity, French Elision, MT Artifacts, Roman Numerals & Flashcards...`);

// 6.1 Assert 0 dropped French apostrophes in titles, subtitles, stems, and mock exam catalog
let droppedApostropheCount = 0;
const frenchElisionRegex = /\b(l|d|n|qu)\s+(unité|examen|étape|ordre|état|atome|équilibre|acide|eau|énergie|ion|élément|espèce|information|option|action|observation|exemple)/i;
const frCatalog = getMockExamCatalog('fr');
for (const mock of frCatalog) {
  if (frenchElisionRegex.test(mock.title)) {
    droppedApostropheCount++;
    console.error(`Dropped French apostrophe in mock title: "${mock.title}"`);
  }
  if (frenchElisionRegex.test(mock.subtitle)) {
    droppedApostropheCount++;
    console.error(`Dropped French apostrophe in mock subtitle: "${mock.subtitle}"`);
  }
}
for (const u of ALL_CHEMISTRY_UNITS) {
  if (frenchElisionRegex.test(u.title.fr)) {
    droppedApostropheCount++;
    console.error(`Dropped French apostrophe in unit title: "${u.title.fr}"`);
  }
  if (frenchElisionRegex.test(u.subtitle.fr)) {
    droppedApostropheCount++;
    console.error(`Dropped French apostrophe in unit subtitle: "${u.subtitle.fr}"`);
  }
}
const frQuestions = compileAllQuestions(ALL_CHEMISTRY_UNITS, 'fr');
for (const q of frQuestions) {
  const droppedMatch = q.stem.match(frenchElisionRegex);
  if (droppedMatch) {
    droppedApostropheCount++;
    console.error(`Dropped French apostrophe in question ${q.id} stem: "${droppedMatch[0]}"`);
  }
}
assert(droppedApostropheCount === 0, `Expected 0 dropped French apostrophes, found ${droppedApostropheCount}`);
console.log(`  ✅ assertNoDroppedFrenchApostrophes: 0 dropped apostrophes detected in French catalog and questions`);

// 6.2 Assert 0 leaked English tokens in foreign stems
let leakedEnglishTokensCount = 0;
const forbiddenEnglishInForeignStems = [
  'strictly exact',
  'which of the following',
  'is false?',
  'is true?',
  'according to the',
];
for (const foreignLang of FOREIGN_LANGUAGES.filter((l) => l !== 'en')) {
  const foreignQs = compileAllQuestions(ALL_CHEMISTRY_UNITS, foreignLang);
  for (const q of foreignQs) {
    const lowerStem = q.stem.toLowerCase();
    for (const token of forbiddenEnglishInForeignStems) {
      if (lowerStem.includes(token)) {
        leakedEnglishTokensCount++;
        console.error(`[${foreignLang}] Leaked English token "${token}" in question ${q.id}: "${q.stem}"`);
      }
    }
  }
}
assert(leakedEnglishTokensCount === 0, `Expected 0 leaked English tokens in foreign stems, found ${leakedEnglishTokensCount}`);
console.log(`  ✅ assertNoEnglishTokensInForeignStems: 0 leaked English tokens detected in foreign stems`);

// 6.3 Assert 0 known MT artifacts across all units, slides, and questions
let knownMtArtifactCount = 0;
const forbiddenMtArtifacts = ['Zac oil', 'Salzbenzin', 'HNO3 is vitriol', 'كابير', 'مراقبة الجودة'];
for (const u of ALL_CHEMISTRY_UNITS) {
  const uStr = JSON.stringify(u);
  for (const art of forbiddenMtArtifacts) {
    if (uStr.includes(art)) {
      knownMtArtifactCount++;
      console.error(`Known MT artifact "${art}" found in unit ${u.id}`);
    }
  }
}
for (const [guideId, guide] of Object.entries(ALL_UNIT_DEEP_STUDY_GUIDES)) {
  const gStr = JSON.stringify(guide);
  for (const art of forbiddenMtArtifacts) {
    if (gStr.includes(art)) {
      knownMtArtifactCount++;
      console.error(`Known MT artifact "${art}" found in study guide ${guideId}`);
    }
  }
}
for (const langMeta of LANGUAGES) {
  const lang = langMeta.code as LanguageCode;
  const langQs = compileAllQuestions(ALL_CHEMISTRY_UNITS, lang);
  for (const q of langQs) {
    const qStr = JSON.stringify(q);
    for (const art of forbiddenMtArtifacts) {
      if (qStr.includes(art)) {
        knownMtArtifactCount++;
        console.error(`[${lang}] Known MT artifact "${art}" found in question ${q.id}`);
      }
    }
  }
}
assert(knownMtArtifactCount === 0, `Expected 0 known MT artifacts, found ${knownMtArtifactCount}`);
console.log(`  ✅ assertNoKnownMtArtifacts: 0 MT artifacts ("Zac oil", "Salzbenzin", "HNO3 is vitriol", "كابير", "مراقبة الجودة") detected`);

// 6.4 Assert rich Roman numeral explanations (I., II., III. breakdown)
let romanQuestionsEvaluated = 0;
for (const langMeta of LANGUAGES) {
  const lang = langMeta.code as LanguageCode;
  const langQs = compileAllQuestions(ALL_CHEMISTRY_UNITS, lang);
  const romanQs = langQs.filter((q) => q.archetype === 'roman-numeral');
  for (const q of romanQs) {
    assert(
      q.explanation.includes('I.') && q.explanation.includes('II.') && q.explanation.includes('III.'),
      `[${lang}] Roman numeral question ${q.id} lacks complete proposition-level evaluation (I, II, III): "${q.explanation}"`
    );
    romanQuestionsEvaluated++;
  }
}
assert(romanQuestionsEvaluated > 0, `Expected roman questions to be evaluated, got 0`);
console.log(`  ✅ assertRichRomanNumeralExplanations: ${romanQuestionsEvaluated} Roman numeral questions verified with proposition breakdowns (I, II, III) across 8 languages`);

// 6.5 Assert flashcard multilingual purity (0 Turkish strings in foreign flashcards)
let turkishLeakInForeignFlashcards = 0;
const turkishHardcodedTokens = [
  'Soru:',
  'Doğru Bilgi:',
  'Doğru Açıklama:',
  'Karşılaştırma:',
  'Ayırıcı Özellik:',
  'ÖSYM iki benzer kavramın',
];
for (const foreignLang of FOREIGN_LANGUAGES) {
  const cards = compileAllFlashcards(ALL_CHEMISTRY_UNITS, foreignLang);
  assert(cards.length === 396, `[${foreignLang}] Expected 396 flashcards, got ${cards.length}`);
  for (const card of cards) {
    const combined = `${card.front} ${card.back} ${card.frontPrompt} ${card.backAnswer} ${card.osymTip}`;
    for (const tok of turkishHardcodedTokens) {
      if (combined.includes(tok)) {
        turkishLeakInForeignFlashcards++;
        console.error(`[${foreignLang}] Hardcoded Turkish token "${tok}" found in card ${card.id}`);
      }
    }
  }
}
assert(turkishLeakInForeignFlashcards === 0, `Expected 0 Turkish string leaks in foreign flashcards, found ${turkishLeakInForeignFlashcards}`);
console.log(`  ✅ assertFlashcardMultilingualPurity: 0 Turkish strings detected across 2,772 foreign flashcards (7 languages × 396)`);

// 6.6 Assert 0 single-character CJK clue leaks in Chinese questions
let cjkSingleCharLeakCount = 0;
const zhQuestions = compileAllQuestions(ALL_CHEMISTRY_UNITS, 'zh');
for (const q of zhQuestions) {
  if (q.stem.includes('显著特征：“')) {
    const quoteMatch = q.stem.match(/显著特征：“([^”]+)”/);
    if (quoteMatch) {
      const clue = quoteMatch[1];
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
          cjkSingleCharLeakCount++;
          console.error(`[zh] Leaked single-char/base CJK concept "${cand}" in question ${q.id} clue: "${clue}"`);
        }
      }
    }
  }
}
assert(cjkSingleCharLeakCount === 0, `Expected 0 single-char CJK clue leaks, found ${cjkSingleCharLeakCount}`);
console.log(`  ✅ assertNoCjkSingleCharClueLeaks: 0 single-char CJK leaks detected across Chinese questions`);

// 6.7 Assert 0 inflected entity clue leaks across all 8 languages in matching stems
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

let inflectedEntityLeakCount = 0;
for (const langMeta of LANGUAGES) {
  const lang = langMeta.code as LanguageCode;
  const langQs = compileAllQuestions(ALL_CHEMISTRY_UNITS, lang);
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
                inflectedEntityLeakCount++;
                console.error(`[${lang}] Acronym "${candClean}" leaked in question ${q.id}: "${clue}"`);
              }
            } else {
              const clueClean = clue.replace(/\s+/g, '');
              if (candClean.length >= 2 && clueClean.includes(candClean)) {
                inflectedEntityLeakCount++;
                console.error(`[${lang}] CJK entity "${candClean}" leaked in question ${q.id}: "${clue}"`);
              }
            }
          } else {
            const isArabic = lang === 'ar' || /[\u0600-\u06FF]/.test(cand);
            const arabicInflectionalSuffix = '(?:ات|ية|ة|ي|ين|ان|ون|يتها|يته)?';
            const compoundSuffix = '(?:schicht|schichten|bindung|bindungen|atom|atome|atomen|gitter|gittern|molekül|moleküle|molekülen|ion|ionen|kraft|kräfte|kräften|gas|gase|gasen|flüssigkeit|flüssigkeiten|reaktion|reaktionen|teilchen|energie|energien|konstante|konstanten)?';
            const cyrillicCaseSuffix = '(?:а|я|у|ю|е|ом|ем|ой|ей|ы|и|ов|ев|ах|ях|ам|ям|ами|ями)?';
            const latinInflectionalSuffix = '(?:(?:ler|lar|an|ên|ing|ed|ung|er|em)?(?:in|ın|un|ün|nin|nın|nun|nün|nde|nda|nden|ndan|ne|na|ni|nı|nu|nü|te|ta|de|da|ten|tan|den|dan|ye|ya|yê|yên|e|a|i|ı|u|ü|ê|î|le|la|s|es|en|n)?(?:dir|dır|dür|dur|tir|tır|tür|tur)?)';
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
              inflectedEntityLeakCount++;
              console.error(`[${lang}] Inflected entity "${cand}" leaked in question ${q.id}: "${clue}"`);
            }
          }
        }
      }
    }
  }
}
assert(inflectedEntityLeakCount === 0, `Expected 0 inflected entity clue leaks across all 8 languages, found ${inflectedEntityLeakCount}`);
console.log(`  ✅ assertNoInflectedEntityClueLeaks: 0 inflected entity leaks detected in matching stems across all 8 languages`);

// 6.7b Assert u11-q027 has zero clue leaks across Arabic, Russian, and French
for (const l of ['ar', 'ru', 'fr'] as const) {
  const u11 = ALL_CHEMISTRY_UNITS.find(u => u.id === 'u11');
  assert(!!u11, 'u11 unit found');
  const u11Qs = compileUnitQuestions(u11, l);
  const q27 = u11Qs.find(q => q.id === 'u11-q027');
  assert(!!q27, `Missing u11-q027 in language ${l}`);
  const forbiddenTokens = l === 'ar' ? ['المدار s', 'المداري'] : l === 'ru' ? ['s-орбиталь', 'орбитальный'] : ['s orbitale', 'orbitale s'];
  for (const token of forbiddenTokens) {
    const quoteMatch = q27.stem.match(/["“«]([^"”»]+)["”»]/g);
    const clue = quoteMatch ? quoteMatch[quoteMatch.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
    assert(!clue.includes(token), `[${l}] u11-q027 clue leaked "${token}": "${clue}"`);
  }
}
console.log(`  ✅ assertNoU11OrbitalLeaks: 0 clue leaks in u11-q027 across ar, ru, fr`);

// 6.7c Assert specific Arabic & Kurdish questions have zero clue leaks in their stems
{
  const u24 = ALL_CHEMISTRY_UNITS.find(u => u.id === 'u24');
  assert(!!u24, 'u24 unit found');
  const u24Ar = compileUnitQuestions(u24, 'ar');
  const q043 = u24Ar.find(q => q.id === 'u24-q043');
  assert(!!q043, 'u24-q043 found in ar');
  const quote043 = q043.stem.match(/["“«]([^"”»]+)["”»]/g);
  const clue043 = quote043 ? quote043[quote043.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
  assert(!clue043.includes('الألكانات') && !clue043.includes('ألكان'), `u24-q043 leaked in Arabic: "${clue043}"`);

  const q059 = u24Ar.find(q => q.id === 'u24-q059');
  assert(!!q059, 'u24-q059 found in ar');
  const quote059 = q059.stem.match(/["“«]([^"”»]+)["”»]/g);
  const clue059 = quote059 ? quote059[quote059.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
  assert(!clue059.includes('الألكينات') && !clue059.includes('ألكين'), `u24-q059 leaked in Arabic: "${clue059}"`);

  const q091 = u24Ar.find(q => q.id === 'u24-q091');
  assert(!!q091, 'u24-q091 found in ar');
  const quote091 = q091.stem.match(/["“«]([^"”»]+)["”»]/g);
  const clue091 = quote091 ? quote091[quote091.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
  assert(!clue091.includes('الحمض الكربوكسيلي') && !clue091.includes('حمض الكربوكسيل'), `u24-q091 leaked in Arabic: "${clue091}"`);

  const u03 = ALL_CHEMISTRY_UNITS.find(u => u.id === 'u03');
  assert(!!u03, 'u03 unit found');
  const u03Ar = compileUnitQuestions(u03, 'ar');
  const q027 = u03Ar.find(q => q.id === 'u03-q027');
  assert(!!q027, 'u03-q027 found in ar');
  const quote027 = q027.stem.match(/["“«]([^"”»]+)["”»]/g);
  const clue027 = quote027 ? quote027[quote027.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
  assert(!clue027.includes('الرابطة الهيدروجينية') && !clue027.includes('رابطة الهيدروجين'), `u03-q027 leaked in Arabic: "${clue027}"`);

  const u06 = ALL_CHEMISTRY_UNITS.find(u => u.id === 'u06');
  assert(!!u06, 'u06 unit found');
  const u06Ar = compileUnitQuestions(u06, 'ar');
  const q06_27 = u06Ar.find(q => q.id === 'u06-q027');
  assert(!!q06_27, 'u06-q027 found in ar');
  assert(q06_27.options[q06_27.correctIndex] === '1 وحدة كتل ذرية (amu)', `u06-q027 correct option should be '1 وحدة كتل ذرية (amu)', got '${q06_27.options[q06_27.correctIndex]}'`);
  const quote06_27 = q06_27.stem.match(/["“«]([^"”»]+)["”»]/g);
  const clue06_27 = quote06_27 ? quote06_27[quote06_27.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
  assert(!clue06_27.includes('1 وحدة كتل ذرية (amu)'), `u06-q027 leaked '1 وحدة كتل ذرية (amu)' in Arabic stem: "${clue06_27}"`);

  const u02 = ALL_CHEMISTRY_UNITS.find(u => u.id === 'u02');
  assert(!!u02, 'u02 unit found');
  const u02Ku = compileUnitQuestions(u02, 'ku');
  const q02_75 = u02Ku.find(q => q.id === 'u02-q075');
  assert(!!q02_75, 'u02-q075 found in ku');
  assert(q02_75.options[q02_75.correctIndex] === 'Metal', `u02-q075 correct option should be 'Metal', got '${q02_75.options[q02_75.correctIndex]}'`);
  const quote02_75 = q02_75.stem.match(/["“«]([^"”»]+)["”»]/g);
  const clue02_75 = quote02_75 ? quote02_75[quote02_75.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
  assert(!clue02_75.startsWith('Metal ') && !clue02_75.includes(' metals '), `u02-q075 leaked Metal in Kurdish stem: "${clue02_75}"`);
}
console.log(`  ✅ assertRegressionQuestionSanitization: u24-q043, u24-q059, u24-q091, u03-q027, u06-q027, u02-q075 verified zero leaks`);

// 6.7d Assert target Iteration 8/9 defect questions have zero clue leaks across all evaluated languages
{
  // 1. u23-q043 (Diamond Allotrope) in Arabic, Kurdish, German, French, Russian, Chinese
  const u23 = ALL_CHEMISTRY_UNITS.find(u => u.id === 'u23');
  assert(!!u23, 'u23 unit found');
  const checkU23_43 = [
    { lang: 'ar', forbidden: ['الماس'] },
    { lang: 'ku', forbidden: ['Elmas'] },
    { lang: 'de', forbidden: ['Diamant'] },
    { lang: 'fr', forbidden: ['diamant', 'Diamant'] },
    { lang: 'ru', forbidden: ['Алмаз'] },
    { lang: 'zh', forbidden: ['钻石', '金刚石'] },
  ];
  for (const item of checkU23_43) {
    const qs = compileUnitQuestions(u23, item.lang as LanguageCode);
    const q = qs.find(x => x.id === 'u23-q043');
    assert(!!q, `u23-q043 found in ${item.lang}`);
    const quote = q.stem.match(/["“«]([^"”»]+)["”»]/g);
    const clue = quote ? quote[quote.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
    for (const token of item.forbidden) {
      assert(!clue.includes(token), `[${item.lang}] u23-q043 leaked "${token}" in clue: "${clue}"`);
    }
  }

  // 2. u24-q107 (Markovnikov Addition) in German, Arabic, Kurdish, Chinese
  const u24 = ALL_CHEMISTRY_UNITS.find(u => u.id === 'u24');
  assert(!!u24, 'u24 unit found');
  const checkU24_107 = [
    { lang: 'de', forbidden: ['Markownikow'] },
    { lang: 'ar', forbidden: ['ماركوفنيكوف'] },
    { lang: 'ku', forbidden: ['Markovnikov'] },
    { lang: 'zh', forbidden: ['马尔可夫尼科夫', '马氏'] },
  ];
  for (const item of checkU24_107) {
    const qs = compileUnitQuestions(u24, item.lang as LanguageCode);
    const q = qs.find(x => x.id === 'u24-q107');
    assert(!!q, `u24-q107 found in ${item.lang}`);
    const quote = q.stem.match(/["“«]([^"”»]+)["”»]/g);
    const clue = quote ? quote[quote.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
    for (const token of item.forbidden) {
      assert(!clue.includes(token), `[${item.lang}] u24-q107 leaked "${token}" in clue: "${clue}"`);
    }
  }

  // 3. u24-q075 (Primary Alcohol) in German
  const u24De = compileUnitQuestions(u24, 'de');
  const q24_075 = u24De.find(x => x.id === 'u24-q075');
  assert(!!q24_075, 'u24-q075 found in de');
  const quote24_075 = q24_075.stem.match(/["“«]([^"”»]+)["”»]/g);
  const clue24_075 = quote24_075 ? quote24_075[quote24_075.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
  assert(!clue24_075.includes('primäre Alkohol') && !clue24_075.includes('Primärer Alkohol'), `[de] u24-q075 leaked in clue: "${clue24_075}"`);

  // 4. u23-q011 (Diamond sp3) in French and Chinese
  const u23Fr = compileUnitQuestions(u23, 'fr');
  const q23_011 = u23Fr.find(x => x.id === 'u23-q011');
  assert(!!q23_011, 'u23-q011 found in fr');
  const quote23_011 = q23_011.stem.match(/["“«]([^"”»]+)["”»]/g);
  const clue23_011 = quote23_011 ? quote23_011[quote23_011.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
  assert(!clue23_011.includes('Diamond') && !clue23_011.includes('diamant est hybridé'), `[fr] u23-q011 leaked in clue: "${clue23_011}"`);

  const u23Zh = compileUnitQuestions(u23, 'zh');
  const q23_011_zh = u23Zh.find(x => x.id === 'u23-q011');
  assert(!!q23_011_zh, 'u23-q011 found in zh');
  assert(q23_011_zh.options[q23_011_zh.correctIndex] === '金刚石', `u23-q011 correct option should be '金刚石', got '${q23_011_zh.options[q23_011_zh.correctIndex]}'`);
  const quote23_011_zh = q23_011_zh.stem.match(/["“«]([^"”»]+)["”»]/g);
  const clue23_011_zh = quote23_011_zh ? quote23_011_zh[quote23_011_zh.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
  assert(!clue23_011_zh.includes('金刚石') && !clue23_011_zh.includes('钻石'), `[zh] u23-q011 leaked in clue: "${clue23_011_zh}"`);

  // 5. u06-q075 (Avogadro's Number) across all 8 languages
  const u06 = ALL_CHEMISTRY_UNITS.find(u => u.id === 'u06');
  assert(!!u06, 'u06 unit found');
  const checkU06_75 = [
    { lang: 'tr', forbidden: ['Avogadro'] },
    { lang: 'en', forbidden: ['Avogadro'] },
    { lang: 'de', forbidden: ['Avogadro'] },
    { lang: 'fr', forbidden: ['Avogadro'] },
    { lang: 'ru', forbidden: ['Авогадро'] },
    { lang: 'ar', forbidden: ['أفوجادرو'] },
    { lang: 'zh', forbidden: ['阿伏伽德罗', '阿伏加德罗'] },
    { lang: 'ku', forbidden: ['Avogadro'] },
  ];
  for (const item of checkU06_75) {
    const qs = compileUnitQuestions(u06, item.lang as LanguageCode);
    const q = qs.find(x => x.id === 'u06-q075');
    assert(!!q, `u06-q075 found in ${item.lang}`);
    const quote = q.stem.match(/["“«]([^"”»]+)["”»]/g);
    const clue = quote ? quote[quote.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
    for (const token of item.forbidden) {
      assert(!clue.includes(token), `[${item.lang}] u06-q075 leaked "${token}" in clue: "${clue}"`);
    }
  }

  // 6. u12-q107 (Gas Diffusion) across all 8 languages
  const u12 = ALL_CHEMISTRY_UNITS.find(u => u.id === 'u12');
  assert(!!u12, 'u12 unit found');
  const checkU12_107 = [
    { lang: 'tr', forbidden: ['Gaz difüzyonu', 'Gaz Difüzyonu', 'Difüzyon bir gazın'] },
    { lang: 'en', forbidden: ['Gas diffusion', 'Gas Diffusion', 'Diffusion is the'] },
    { lang: 'de', forbidden: ['Gasdiffusion', 'Diffusion ist die'] },
    { lang: 'fr', forbidden: ['diffusion de gaz', 'Diffusion de gaz', 'La diffusion est la'] },
    { lang: 'ru', forbidden: ['Газовая диффузия', 'Диффузия — это'] },
    { lang: 'ar', forbidden: ['انتشار الغاز', 'الانتشار هو'] },
    { lang: 'zh', forbidden: ['气体扩散', '扩散是一种'] },
    { lang: 'ku', forbidden: ['Belavbûna gazê', 'Belavbûna Gazê', 'Difûzyon belavbûna'] },
  ];
  for (const item of checkU12_107) {
    const qs = compileUnitQuestions(u12, item.lang as LanguageCode);
    const q = qs.find(x => x.id === 'u12-q107');
    assert(!!q, `u12-q107 found in ${item.lang}`);
    const quote = q.stem.match(/["“«]([^"”»]+)["”»]/g);
    const clue = quote ? quote[quote.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
    for (const token of item.forbidden) {
      assert(!clue.includes(token), `[${item.lang}] u12-q107 leaked "${token}" in clue: "${clue}"`);
    }
  }

  // 7. Kurdish u24 concepts (Aldehîd, Alkan, Alken, Asîda Karboksîlîk)
  const u24Ku = compileUnitQuestions(u24, 'ku');
  const kuConceptChecks = [
    { id: 'u24-q011', expectedOpt: 'Aldehîd', forbidden: ['Aldehîd', 'Aldehid', 'aldehyde'] },
    { id: 'u24-q027', expectedOpt: 'Alkan', forbidden: ['Alkan', 'alkane'] },
    { id: 'u24-q059', expectedOpt: 'Alkîn', forbidden: ['Alkîn', 'Alkyne'] },
    { id: 'u24-q091', expectedOpt: 'Asîda Karboksîlîk', forbidden: ['Karboksîlîk', 'Carboxylic'] },
    { id: 'u24-q123', expectedOpt: 'Îzomera Cis', forbidden: ['Îzomera Cis'] },
  ];
  for (const check of kuConceptChecks) {
    const q = u24Ku.find(x => x.id === check.id);
    assert(!!q, `${check.id} found in ku`);
    assert(q.options[q.correctIndex] === check.expectedOpt, `${check.id} correct option should be '${check.expectedOpt}', got '${q.options[q.correctIndex]}'`);
    const quote = q.stem.match(/["“«]([^"”»]+)["”»]/g);
    const clue = quote ? quote[quote.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
    for (const tok of check.forbidden) {
      assert(!clue.includes(tok), `[ku] ${check.id} leaked "${tok}" in clue: "${clue}"`);
    }
  }

  // 8. Kurdish u23 graphene (Grafen)
  const u23Ku = compileUnitQuestions(u23, 'ku');
  const q23_059_ku = u23Ku.find(x => x.id === 'u23-q059');
  assert(!!q23_059_ku, 'u23-q059 found in ku');
  assert(q23_059_ku.options[q23_059_ku.correctIndex] === 'Grafen', `u23-q059 correct option should be 'Grafen', got '${q23_059_ku.options[q23_059_ku.correctIndex]}'`);
  const quote23_059_ku = q23_059_ku.stem.match(/["“«]([^"”»]+)["”»]/g);
  const clue23_059_ku = quote23_059_ku ? quote23_059_ku[quote23_059_ku.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
  assert(!clue23_059_ku.includes('Grafen') && !clue23_059_ku.includes('Grafene') && !clue23_059_ku.includes('graphene'), `[ku] u23-q059 leaked in clue: "${clue23_059_ku}"`);

  // 9. Sigma bond localized terms in Russian, Arabic, Kurdish, Chinese
  const sigmaChecks = [
    { lang: 'ru', qId: 'u23-q027', expectedOpt: 'Сигма (σ) связь', forbidden: ['Сигма'] },
    { lang: 'ar', qId: 'u23-q027', expectedOpt: 'رابطة سيجما (σ)', forbidden: ['سيجما'] },
    { lang: 'ku', qId: 'u23-q027', expectedOpt: 'Girêdana Sigma (σ)', forbidden: ['Sigma', 'sigmayê'] },
    { lang: 'zh', qId: 'u23-q075', expectedOpt: '极性分子', forbidden: ['极性分子'] },
  ];
  for (const check of sigmaChecks) {
    const qs = compileUnitQuestions(u23, check.lang as LanguageCode);
    const q = qs.find(x => x.id === check.qId);
    assert(!!q, `${check.qId} found in ${check.lang}`);
    assert(q.options[q.correctIndex] === check.expectedOpt, `${check.qId} in ${check.lang} correct option should be '${check.expectedOpt}', got '${q.options[q.correctIndex]}'`);
    const quote = q.stem.match(/["“«]([^"”»]+)["”»]/g);
    const clue = quote ? quote[quote.length - 1].replace(/^["“«]|["”»]$/g, '').trim() : '';
    for (const tok of check.forbidden) {
      assert(!clue.includes(tok), `[${check.lang}] ${check.qId} leaked "${tok}" in clue: "${clue}"`);
    }
  }
}
console.log(`  ✅ assertIteration10DefectRemediations: u23-q043, u24-q107, u24-q075, u23-q011, u06-q075, u12-q107, Kurdish concepts, and Sigma bond terminology verified 100% clean across all evaluated languages`);

// 6.8 Assert 0 unit title leaks of the correct answer in Type A stems
let unitTitleAnswerLeakCount = 0;
for (const langMeta of LANGUAGES) {
  const lang = langMeta.code as LanguageCode;
  const langQs = compileAllQuestions(ALL_CHEMISTRY_UNITS, lang);
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
            unitTitleAnswerLeakCount++;
            console.error(`[${lang}] Unit title "${titleMatch[1]}" leaks correct answer "${correctOpt}" in question ${q.id}`);
          }
        }
      }
    }
  }
}
assert(unitTitleAnswerLeakCount === 0, `Expected 0 unit title answer leaks in Type A stems, found ${unitTitleAnswerLeakCount}`);
console.log(`  ✅ assertNoUnitTitleAnswerLeaks: 0 unit title leaks of correct answers detected in Type A matching questions`);

// 6.9 Assert 0 instances of MT artifacts ("Сифон ÖSYM", "ÖSYM 疏水阀", "扎伊采夫支队", "加入马尔科夫尼科夫")
let mtSpecificArtifactCount = 0;
const specificMtArtifacts = [
  'Сифон ÖSYM',
  'ÖSYM 疏水阀',
  '扎伊采夫支队',
  '加入马尔科夫尼科夫',
];
for (const u of ALL_CHEMISTRY_UNITS) {
  const uJson = JSON.stringify(u);
  for (const art of specificMtArtifacts) {
    if (uJson.includes(art)) {
      mtSpecificArtifactCount++;
      console.error(`Specific MT artifact "${art}" found in unit ${u.id}`);
    }
  }
}
assert(mtSpecificArtifactCount === 0, `Expected 0 specific MT artifacts across units, found ${mtSpecificArtifactCount}`);
console.log(`  ✅ assertNoSpecificMtArtifacts: 0 instances of "Сифон ÖSYM", "ÖSYM 疏水阀", "扎伊采夫支队", "加入马尔科夫尼科夫" detected`);

// 6.10 Assert 0 untranslated "ÖSYM" acronym leaks in foreign flashcards
let osymForeignFlashcardLeaks = 0;
for (const foreignLang of FOREIGN_LANGUAGES) {
  const cards = compileAllFlashcards(ALL_CHEMISTRY_UNITS, foreignLang);
  for (const c of cards) {
    if (/ÖSYM/i.test(c.osymTip) || /ÖSYM/i.test(c.front) || /ÖSYM/i.test(c.back)) {
      osymForeignFlashcardLeaks++;
      console.error(`[${foreignLang}] Untranslated "ÖSYM" acronym found in flashcard ${c.id}: "${c.osymTip}"`);
    }
  }
}
assert(osymForeignFlashcardLeaks === 0, `Expected 0 untranslated "ÖSYM" leaks in foreign flashcards, found ${osymForeignFlashcardLeaks}`);
console.log(`  ✅ assertNoOsymLeaksInForeignFlashcards: 0 untranslated "ÖSYM" acronym leaks detected across all foreign flashcards`);

// 7. Final Statistics Summary
console.log(`\n[Stage 7/7] Final Verification Audit Summary:`);
console.log(`  - Total Units: ${ALL_CHEMISTRY_UNITS.length} (10 TYT, 14 AYT)`);
console.log(`  - Total Visual Deep Study Decks: ${Object.keys(ALL_UNIT_DEEP_STUDY_GUIDES).length} (216 Slides Total)`);
console.log(`  - Total Questions per Language: 3,072 questions (128 per unit)`);
console.log(`  - Grand Total Compiled Question Instances: ${grandTotalQuestions.toLocaleString()} across 8 languages`);
console.log(`  - Grand Total Diagrammed Question Instances: ${grandTotalDiagrammedQuestions.toLocaleString()}`);
console.log(`  - Diagram Variant Distribution: Exactly 16 V1 and 16 V2 per unit (384 each per language)`);
console.log(`  - Diagram Archetypes: All 11 scientific archetypes present on student question cards`);
console.log(`  - Answer Key Balance: A, B, C, D, E each strictly between 22 and 30 per 128 questions`);
console.log(`  - Total Mock Trials Catalog: 80 Distinct Exams (40 TYT @ 7 Qs + 40 AYT @ 13 Qs)`);
console.log(`  - Anti-Leak Scanner: 100% CLEAN (Zero answer leaks in stems)`);
console.log(`  - Undefined Values Scanner: 100% CLEAN (Zero 'undefined' tokens)`);
console.log(`  - Placeholder Options Scanner: 100% CLEAN (Zero 'Alternatif Seçenek' across 24,576 Qs + 80 Trials)`);
console.log(`  - French Elision Apostrophes: 100% CLEAN (0 dropped apostrophes)`);
console.log(`  - English Leak in Foreign Stems: 100% CLEAN (0 leaked English tokens)`);
console.log(`  - MT Artifacts Scanner: 100% CLEAN (0 instances of Zac oil, Salzbenzin, HNO3 is vitriol, كابير)`);
console.log(`  - Roman Numeral Proposition Evaluations: 100% CLEAN (${romanQuestionsEvaluated} items verified with I, II, III breakdowns)`);
console.log(`  - Multilingual Flashcards Purity: 100% CLEAN (2,772 foreign flashcards free of Turkish hardcoded text)`);

console.log('\n================================================================================');
console.log('🎉 ALL 24 UNITS, 24 STUDY DECKS, 80 MOCK EXAMS & 24,576 QUESTIONS VERIFIED CLEAN! (Exit 0)');
console.log('================================================================================\n');

process.exit(0);
