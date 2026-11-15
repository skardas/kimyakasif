import { useEffect, useState } from 'react';
import type { LanguageCode } from '../types/chemistry';
import { ensureUnitLanguage, hasUnitLanguage } from '../data/units/loader';

/**
 * The language the app renders in: `requested` once its unit pack is loaded, the previous
 * language until then. Rendering a new language before its texts arrive would show Turkish
 * fallbacks and let per-language memos cache them.
 */
export function useUnitLanguage(requested: LanguageCode): LanguageCode {
  const [ready, setReady] = useState<LanguageCode>(() => (hasUnitLanguage(requested) ? requested : 'tr'));

  useEffect(() => {
    if (hasUnitLanguage(requested)) {
      setReady(requested);
      return;
    }
    let alive = true;
    ensureUnitLanguage(requested)
      .catch(() => {})
      .finally(() => {
        if (alive) setReady(requested);
      });
    return () => {
      alive = false;
    };
  }, [requested]);

  return hasUnitLanguage(requested) ? requested : ready;
}
