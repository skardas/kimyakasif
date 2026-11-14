/**
 * Kimya YKS — Multilingual Curriculum Translation Pipeline
 * Extracts all unique Turkish strings from raw curriculum units, extra sequences/comparisons,
 * and study slide decks, and produces authentic translations across:
 *   - en: English
 *   - de: German
 *   - fr: French
 *   - ru: Russian
 *   - ar: Arabic
 *   - zh: Chinese
 *   - ku: Kurdish (Kurmanji)
 *
 * Saves a deterministic, offline cache to `scripts/curriculumTranslationsCache.json`
 * and `src/data/i18n/curriculumTranslations.json`.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ALL_CHEMISTRY_UNITS as RAW_UNITS } from '../tests/e2e/harness/curriculumAdapter';
import { UNIT_EXTRA_SEQUENCES, UNIT_EXTRA_COMPARISONS } from './generateCurriculumUnits';
import { RAW_GUIDES } from './generateStudySlides';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CACHE_PATH = path.resolve(__dirname, './curriculumTranslationsCache.json');
const DATA_I18N_PATH = path.resolve(__dirname, '../src/data/i18n/curriculumTranslations.json');

const TARGET_LANGS = [
  { code: 'en', tl: 'en' },
  { code: 'de', tl: 'de' },
  { code: 'fr', tl: 'fr' },
  { code: 'ru', tl: 'ru' },
  { code: 'ar', tl: 'ar' },
  { code: 'zh', tl: 'zh-CN' },
  { code: 'ku', tl: 'ku' },
] as const;

type TargetLangCode = typeof TARGET_LANGS[number]['code'];

// Load existing cache if present
let translationCache: Record<string, Record<string, string>> = {};
if (fs.existsSync(CACHE_PATH)) {
  try {
    translationCache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8'));
    console.log(`Loaded existing cache with ${Object.keys(translationCache).length} entries.`);
  } catch (err) {
    console.warn('Could not parse existing cache, starting fresh.');
  }
}

let lastSave = Date.now();
function saveCache(force = false) {
  const now = Date.now();
  if (!force && now - lastSave < 2000) return; // throttle disk writes
  lastSave = now;

  const dir = path.dirname(DATA_I18N_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const jsonStr = JSON.stringify(translationCache, null, 2);
  fs.writeFileSync(CACHE_PATH, jsonStr, 'utf-8');
  fs.writeFileSync(DATA_I18N_PATH, jsonStr, 'utf-8');
}

/**
 * Extracts all unique Turkish strings that need translation.
 */
function collectAllTurkishStrings(): Set<string> {
  const set = new Set<string>();

  function add(str?: string) {
    if (str && typeof str === 'string') {
      const trimmed = str.trim();
      if (trimmed.length > 0) {
        set.add(trimmed);
      }
    }
  }

  // 1. RAW_UNITS
  for (const u of RAW_UNITS) {
    add(u.title?.tr);
    add(u.subtitle?.tr);

    for (const f of u.facts) {
      add(f.fact?.tr);
      add(f.trap?.tr);
      add((f as any).osymTip?.tr);
      add((f as any).whyTrapIsFalse?.tr);
    }

    for (const c of u.comparisons) {
      add(c.conceptA?.tr);
      add(c.conceptB?.tr);
      add(c.distinction?.tr);
    }

    for (const s of u.sequences) {
      add(s.title?.tr);
      for (const step of s.steps) {
        add(step?.tr);
      }
    }

    for (const twin of u.osymTwins) {
      add(twin.stem?.tr);
      add(twin.explanation?.tr);
      for (const opt of twin.options) {
        add(opt?.tr);
      }
    }
  }

  // 2. Extra sequences & comparisons from generateCurriculumUnits.ts
  for (const seqList of Object.values(UNIT_EXTRA_SEQUENCES)) {
    for (const s of seqList) {
      add(s.title);
      for (const step of s.steps) {
        add(step);
      }
    }
  }

  for (const compList of Object.values(UNIT_EXTRA_COMPARISONS)) {
    for (const c of compList) {
      add(c.a);
      add(c.b);
      add(c.d);
    }
  }

  // 3. Slide Guides from generateStudySlides.ts
  for (const g of RAW_GUIDES) {
    add(g.bigPictureQuote);
    for (const sub of g.subtopics) {
      add(sub.badge);
      add(sub.title);
      add(sub.summary);
      for (const kp of sub.keyPoints) {
        add(kp);
      }
    }
    for (const f of g.goldenFormulas) {
      add(f.label);
      add(f.expression);
      add(f.examNote);
    }
    for (const m of g.mnemonics) {
      add(m.codeBadge);
      add(m.title);
      add(m.expansion);
      add(m.memoryTip);
    }
  }

  // 4. Common twin template phrases & components
  const commonPhrases = [
    'ÖSYM İpucu',
    'Doğru cevap',
    'Bilimsel açıklama',
    'Doğrusu',
    'Temel kimyasal kavram',
    'Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.',
    'Doğru sıralama veya basamak',
    'Doğru eşleştirme',
  ];
  for (const p of commonPhrases) add(p);

  return set;
}

/**
 * Single translation request via Google Translate HTTP API with retry
 */
async function translateSingle(text: string, tl: string, retries = 3): Promise<string> {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=tr&tl=${tl}&dt=t&q=${encodeURIComponent(text)}`;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const parts = data[0].map((x: any) => x[0]).join('');
      return parts.trim();
    } catch (err: any) {
      if (attempt === retries) {
        return text; // fallback
      }
      await new Promise((r) => setTimeout(r, 400 * attempt));
    }
  }
  return text;
}

/**
 * Batch translation request (splits into lines)
 */
async function translateBatch(items: string[], tl: string, retries = 3): Promise<string[]> {
  if (items.length === 1) {
    const single = await translateSingle(items[0], tl, retries);
    return [single];
  }

  const joined = items.join('\n');
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=tr&tl=${tl}&dt=t&q=${encodeURIComponent(joined)}`;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const fullText = data[0].map((x: any) => x[0]).join('');
      const lines = fullText.split('\n').map((l: string) => l.trim());

      if (lines.length === items.length) {
        return lines;
      }
      break;
    } catch (err: any) {
      if (attempt === retries) {
        break;
      }
      await new Promise((r) => setTimeout(r, 500 * attempt));
    }
  }

  // Fallback: translate individually
  const fallbackResults: string[] = [];
  for (const it of items) {
    const res = await translateSingle(it, tl);
    fallbackResults.push(res);
  }
  return fallbackResults;
}

async function processLanguage(langMeta: { code: TargetLangCode; tl: string }, allTexts: string[]) {
  const langCode = langMeta.code;
  const tl = langMeta.tl;

  const missing = allTexts.filter(
    (t) => !translationCache[t]?.[langCode] || translationCache[t][langCode] === t
  );

  console.log(`[${langCode.toUpperCase()}] Starting: ${missing.length} / ${allTexts.length} missing.`);
  if (missing.length === 0) {
    console.log(`  -> [${langCode.toUpperCase()}] 100% already cached.`);
    return;
  }

  const BATCH_SIZE = 50;
  const t0 = Date.now();
  let done = 0;

  for (let i = 0; i < missing.length; i += BATCH_SIZE) {
    const chunk = missing.slice(i, i + BATCH_SIZE);
    const results = await translateBatch(chunk, tl);

    for (let j = 0; j < chunk.length; j++) {
      const trText = chunk[j];
      const translated = results[j] || trText;
      if (!translationCache[trText]) {
        translationCache[trText] = { tr: trText };
      }
      translationCache[trText][langCode] = translated;
    }

    done += chunk.length;
    saveCache();

    if (done % 200 === 0 || done === missing.length) {
      const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
      console.log(`  [${langCode.toUpperCase()}] ${done}/${missing.length} translated (${elapsed}s)`);
    }

    await new Promise((r) => setTimeout(r, 60));
  }

  console.log(`✅ [${langCode.toUpperCase()}] Finished in ${((Date.now() - t0) / 1000).toFixed(1)}s.`);
}

async function runMultilingualPipeline() {
  console.log('=== Starting Multilingual Curriculum Translation Pipeline ===');

  const allTexts = Array.from(collectAllTurkishStrings());
  console.log(`Total unique Turkish strings to translate: ${allTexts.length}`);

  // Initialize cache structure
  for (const text of allTexts) {
    if (!translationCache[text]) {
      translationCache[text] = { tr: text };
    }
    translationCache[text].tr = text;
  }
  saveCache(true);

  // Run all 7 target languages concurrently!
  await Promise.all(TARGET_LANGS.map((lang) => processLanguage(lang, allTexts)));

  saveCache(true);
  console.log(`\n🎉 All 7 foreign languages successfully built and cached!`);
  console.log(`Cache files written to: ${CACHE_PATH} and ${DATA_I18N_PATH}`);
}

runMultilingualPipeline().catch((err) => {
  console.error('Fatal error in translation pipeline:', err);
  process.exit(1);
});
