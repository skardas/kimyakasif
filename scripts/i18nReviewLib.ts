/**
 * Shared helpers for the ar/ku translation review tooling
 * (scripts/extractChangedTranslations.ts, scripts/applyTranslationFixes.ts).
 *
 * Unit modules are loaded from source text (a git revision or the working tree) with esbuild,
 * so several versions can live in one process and a freshly written file is never served from
 * the module cache. The typescript API is deliberately not used (the repo is on TS 7).
 */
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { transformSync } from 'esbuild';
import { L } from '../src/data/units/L';

export const REPO_ROOT = resolve(import.meta.dirname, '..');
export const UNIT_IDS = Array.from({ length: 24 }, (_, i) => `u${String(i + 1).padStart(2, '0')}`);
export const LANGS = ['tr', 'en', 'de', 'fr', 'ru', 'ar', 'zh', 'ku'] as const;
export type Lang = (typeof LANGS)[number];
export type LText = Record<Lang, string>;
export type Unit = Record<string, unknown> & { id: string };

export const unitRelPath = (unitId: string) => `src/data/units/${unitId}.ts`;

export function gitShow(rev: string, relPath: string): string {
  return execFileSync('git', ['show', `${rev}:${relPath}`], {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    maxBuffer: 256 * 1024 * 1024,
  });
}

/** Evaluate a unit module's TS source in memory and return its exported unit object. */
export function loadUnitFromSource(source: string, unitId: string): Unit {
  const { code } = transformSync(source, { loader: 'ts', format: 'cjs', target: 'es2022' });
  const module = { exports: {} as Record<string, unknown> };
  const requireStub = (spec: string) => {
    if (spec === './L' || spec === './L.ts') return { L };
    throw new Error(`${unitId}: unexpected import '${spec}' in unit module`);
  };
  new Function('require', 'module', 'exports', code)(requireStub, module, module.exports);
  const unit = Object.values(module.exports).find(
    (v): v is Unit => !!v && typeof v === 'object' && (v as Unit).id === unitId,
  );
  if (!unit) throw new Error(`${unitId}: no exported unit object with id '${unitId}'`);
  return unit;
}

export const loadUnitAtRev = (rev: string, unitId: string) =>
  loadUnitFromSource(gitShow(rev, unitRelPath(unitId)), unitId);

export const loadUnitFromDisk = (unitId: string) =>
  loadUnitFromSource(readFileSync(resolve(REPO_ROOT, unitRelPath(unitId)), 'utf8'), unitId);

export function isLText(v: unknown): v is LText {
  if (!v || typeof v !== 'object' || Array.isArray(v)) return false;
  const o = v as Record<string, unknown>;
  return typeof o.tr === 'string' && typeof o.ar === 'string' && typeof o.ku === 'string';
}

/** Path segment for an array element: its `id` when it has one, else the index. */
const elemSeg = (el: unknown, i: number) =>
  el && typeof el === 'object' && typeof (el as { id?: unknown }).id === 'string'
    ? `[${(el as { id: string }).id}]`
    : `[${i}]`;

export interface Flat {
  /** every LocalizedText leaf */
  texts: Map<string, LText>;
  /** plain (language-neutral) strings inside a `figure`, except kind/markup */
  figurePlain: Map<string, string>;
}

export function flattenUnit(unit: Unit): Flat {
  const texts = new Map<string, LText>();
  const figurePlain = new Map<string, string>();
  const walk = (v: unknown, path: string, inFigure: boolean, key: string) => {
    if (isLText(v)) {
      if (texts.has(path)) throw new Error(`duplicate path ${path}`);
      texts.set(path, v);
      return;
    }
    if (typeof v === 'string') {
      if (inFigure && key !== 'kind' && key !== 'markup') figurePlain.set(path, v);
      return;
    }
    if (Array.isArray(v)) {
      v.forEach((el, i) => walk(el, `${path}${elemSeg(el, i)}`, inFigure, key));
      return;
    }
    if (v && typeof v === 'object') {
      for (const [k, child] of Object.entries(v)) walk(child, `${path}.${k}`, inFigure || k === 'figure', k);
    }
  };
  walk(unit, unit.id, false, '');
  return { texts, figurePlain };
}

/**
 * Deep copy of a unit in which every LocalizedText has the listed languages removed.
 * Used to check that a fix run touched nothing but those languages.
 */
export function maskLangs(v: unknown, langs: readonly string[]): unknown {
  if (isLText(v)) {
    const o: Record<string, unknown> = { ...v };
    for (const l of langs) delete o[l];
    return o;
  }
  if (Array.isArray(v)) return v.map((x) => maskLangs(x, langs));
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, maskLangs(x, langs)]));
  }
  return v;
}

/** First differing location between two JSON-like values, or null when deep-equal. */
export function firstDiff(a: unknown, b: unknown, path = ''): string | null {
  if (Object.is(a, b)) return null;
  if (typeof a !== typeof b || a === null || b === null || typeof a !== 'object') {
    return `${path || '<root>'}: ${JSON.stringify(a)?.slice(0, 80)} != ${JSON.stringify(b)?.slice(0, 80)}`;
  }
  if (Array.isArray(a) !== Array.isArray(b)) return `${path}: array/object mismatch`;
  const ka = Object.keys(a as object);
  const kb = Object.keys(b as object);
  if (ka.length !== kb.length || ka.some((k, i) => k !== kb[i])) {
    return `${path}: keys [${ka.join(',')}] != [${kb.join(',')}]`;
  }
  for (const k of ka) {
    const d = firstDiff((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k], `${path}.${k}`);
    if (d) return d;
  }
  return null;
}

/** Default output directory of the review tooling (override with --out / --dir). */
export const DEFAULT_WORK_DIR =
  '/private/tmp/claude-502/-Users-suleymankardas--claude-spares-spare-I4E8Xf/2a82d00e-127c-48a9-b774-2d678127acd2/scratchpad/i18n_review';

export function argValue(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
}
