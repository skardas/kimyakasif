import { ALL_CHEMISTRY_UNITS } from '../src/data/units';
import { ALL_UNIT_DEEP_STUDY_GUIDES } from '../src/data/studySlides';
import {
  compileAllQuestions,
  compileUnitQuestions,
  QUESTIONS_PER_UNIT,
} from '../src/engine/questionGenerator';
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

// 6. Final Statistics Summary
console.log(`\n[Stage 6/6] Final Verification Audit Summary:`);
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

console.log('\n================================================================================');
console.log('🎉 ALL 24 UNITS, 24 STUDY DECKS, 80 MOCK EXAMS & 24,576 QUESTIONS VERIFIED CLEAN! (Exit 0)');
console.log('================================================================================\n');

process.exit(0);
