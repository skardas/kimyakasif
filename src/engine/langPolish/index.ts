import type { LanguageCode } from '../../types/chemistry';
import { polish as ar, type PolishKind } from './ar';
import { polish as zh } from './zh';
import { polish as ru } from './ru';
import { polish as ku } from './ku';

export type { PolishKind };

const POLISHERS: Partial<Record<LanguageCode, (text: string, kind: PolishKind) => string>> = { ar, zh, ru, ku };

/** Language-specific final wording pass; identity for languages without a polisher. */
export function polishText(text: string, lang: LanguageCode, kind: PolishKind): string {
  const fn = POLISHERS[lang];
  return fn && typeof text === 'string' ? fn(text, kind) : text;
}

/** Applies polishText to a compiled question without touching ids, keys or option order. */
export function polishQuestion<Q extends { stem: string; options: string[]; explanation: string }>(q: Q, lang: LanguageCode): Q {
  if (!POLISHERS[lang]) return q;
  return {
    ...q,
    stem: polishText(q.stem, lang, 'stem'),
    options: q.options.map((o) => polishText(o, lang, 'option')),
    explanation: polishText(q.explanation, lang, 'explanation'),
  };
}
