import type { ChemistryUnitSeedData, LanguageCode } from './types';
import { applyLanguageStrings, UNIT_PACK_LANGS, type UnitPackLang } from './packing';

/**
 * Production replacement for both `./index` and `./loader` (wired by `unitLanguagePacks` in
 * vite.config.ts). `ALL_CHEMISTRY_UNITS` starts empty; ensureUnitLanguage() fills it with the
 * Turkish base pack and writes the requested language into the same objects (both fetched as JSON). main.tsx awaits it
 * before the first render. Never import this module directly.
 */

import baseUrl from 'virtual:unit-pack/base';
import enUrl from 'virtual:unit-pack/en';
import deUrl from 'virtual:unit-pack/de';
import frUrl from 'virtual:unit-pack/fr';
import ruUrl from 'virtual:unit-pack/ru';
import arUrl from 'virtual:unit-pack/ar';
import zhUrl from 'virtual:unit-pack/zh';
import kuUrl from 'virtual:unit-pack/ku';

type LanguageStrings = Exclude<UnitPackLang, 'tr'>;

const STRINGS_URL: Record<LanguageStrings, string> = {
  en: enUrl,
  de: deUrl,
  fr: frUrl,
  ru: ruUrl,
  ar: arUrl,
  zh: zhUrl,
  ku: kuUrl,
};

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`unit pack ${url}: HTTP ${res.status}`);
  return (await res.json()) as T;
}

export const ALL_CHEMISTRY_UNITS: ChemistryUnitSeedData[] = [];

const loaded = new Set<UnitPackLang>();
const pending = new Map<UnitPackLang, Promise<void>>();
let base: Promise<void> | null = null;

function packLang(lang: LanguageCode): UnitPackLang {
  return (UNIT_PACK_LANGS as readonly string[]).includes(lang) ? (lang as UnitPackLang) : 'tr';
}

function ensureBase(): Promise<void> {
  base ??= fetchJson<ChemistryUnitSeedData[]>(baseUrl).then(
    (units) => {
      ALL_CHEMISTRY_UNITS.push(...units);
      loaded.add('tr');
    },
    (err) => {
      base = null; // allow a retry
      throw err;
    }
  );
  return base;
}

export function hasUnitLanguage(lang: LanguageCode): boolean {
  return loaded.has(packLang(lang));
}

export function ensureUnitLanguage(lang: LanguageCode): Promise<void> {
  const code = packLang(lang);
  if (loaded.has(code)) return Promise.resolve();
  if (code === 'tr') return ensureBase();
  let job = pending.get(code);
  if (!job) {
    job = Promise.all([ensureBase(), fetchJson<unknown[]>(STRINGS_URL[code])])
      .then(([, strings]) => {
        applyLanguageStrings(ALL_CHEMISTRY_UNITS, code, strings);
        loaded.add(code);
      })
      .finally(() => pending.delete(code));
    pending.set(code, job);
  }
  return job;
}
