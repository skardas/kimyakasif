import { useCallback, useEffect, useState } from 'react';
import { setSfxEnabled } from '../audio/sfx';

const KEY = 'kimya-prefs';
const DAILY_KEY = 'kimya-daily';

export const DAILY_GOAL_OPTIONS = [10, 20, 40] as const;
export type DailyGoal = (typeof DAILY_GOAL_OPTIONS)[number];

/** Reading text size: 4 steps mapped to the --fs multiplier on the app root. */
export const TEXT_SIZE_SCALES = [0.9, 1, 1.15, 1.3] as const;
export type TextSizeStep = 0 | 1 | 2 | 3;

interface Prefs {
  dailyGoal: DailyGoal;
  reduceMotion: boolean;
  sfxOn: boolean;
  textSize: TextSizeStep;
}

/** Answers given today, per learner profile (the daily-goal ring belongs to the active profile). */
interface DailyCount {
  date: string;
  counts: Record<string, number>;
}

/** Count saved by older builds as a single `{date, count}`; adopted by the first profile that reads it. */
const LEGACY_SLOT = '__legacy';

function todayStamp(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function loadPrefs(): Prefs {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (p && typeof p === 'object' && !Array.isArray(p)) {
        return {
          dailyGoal: DAILY_GOAL_OPTIONS.includes(p.dailyGoal as DailyGoal) ? (p.dailyGoal as DailyGoal) : 20,
          reduceMotion: p.reduceMotion === true,
          sfxOn: p.sfxOn !== false,
          textSize: [0, 1, 2, 3].includes(p.textSize) ? (p.textSize as TextSizeStep) : 1,
        };
      }
    }
  } catch {
    // Default fallback
  }
  return { dailyGoal: 20, reduceMotion: false, sfxOn: true, textSize: 1 };
}

function loadDaily(): DailyCount {
  const today = todayStamp();
  try {
    const raw = localStorage.getItem(DAILY_KEY);
    if (raw) {
      const d = JSON.parse(raw);
      if (d && typeof d === 'object' && !Array.isArray(d)) {
        if (d.date === today) {
          const counts: Record<string, number> = {};
          if (d.counts && typeof d.counts === 'object' && !Array.isArray(d.counts)) {
            Object.entries(d.counts as Record<string, unknown>).forEach(([k, v]) => {
              if (typeof v === 'number' && Number.isFinite(v) && v >= 0) counts[k] = Math.round(v);
            });
          } else if (typeof d.count === 'number' && Number.isFinite(d.count) && d.count > 0) {
            counts[LEGACY_SLOT] = Math.round(d.count);
          }
          return { date: today, counts };
        }
      }
    }
  } catch {
    // Default fallback
  }
  return { date: today, counts: {} };
}

function countFor(daily: DailyCount, profileId: string): number {
  if (daily.date !== todayStamp()) return 0;
  return daily.counts[profileId] ?? daily.counts[LEGACY_SLOT] ?? 0;
}

/** Günlük hedef, bugün çözülen soru sayısı, "hareketi azalt" ve yazı boyutu tercihleri. */
export function usePreferences(profileId = 'profile-default') {
  const [prefs, setPrefs] = useState<Prefs>(loadPrefs);
  const [daily, setDaily] = useState<DailyCount>(loadDaily);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(prefs));
    } catch {
      // Storage unavailable
    }
    document.documentElement.toggleAttribute('data-reduce-motion', prefs.reduceMotion);
    setSfxEnabled(prefs.sfxOn);
    document.documentElement.style?.setProperty?.('--fs', String(TEXT_SIZE_SCALES[prefs.textSize]));
  }, [prefs]);

  useEffect(() => {
    try {
      localStorage.setItem(DAILY_KEY, JSON.stringify(daily));
    } catch {
      // Storage unavailable
    }
  }, [daily]);

  const setDailyGoal = useCallback((dailyGoal: DailyGoal) => setPrefs((p) => ({ ...p, dailyGoal })), []);
  const setReduceMotion = useCallback((reduceMotion: boolean) => setPrefs((p) => ({ ...p, reduceMotion })), []);
  const setSfxOn = useCallback((sfxOn: boolean) => setPrefs((p) => ({ ...p, sfxOn })), []);
  const setTextSize = useCallback((textSize: TextSizeStep) => setPrefs((p) => ({ ...p, textSize })), []);
  const bumpToday = useCallback(() => {
    setDaily((d) => {
      const today = todayStamp();
      if (d.date !== today) return { date: today, counts: { [profileId]: 1 } };
      const { [LEGACY_SLOT]: _legacy, ...rest } = d.counts;
      return { date: today, counts: { ...rest, [profileId]: countFor(d, profileId) + 1 } };
    });
  }, [profileId]);
  /** Clears today's answer count of the active profile (used by "reset progress"). */
  const resetToday = useCallback(() => {
    setDaily((d) => {
      const { [LEGACY_SLOT]: _legacy, ...rest } = d.date === todayStamp() ? d.counts : {};
      return { date: todayStamp(), counts: { ...rest, [profileId]: 0 } };
    });
  }, [profileId]);

  return {
    dailyGoal: prefs.dailyGoal,
    reduceMotion: prefs.reduceMotion,
    sfxOn: prefs.sfxOn,
    setSfxOn,
    textSize: prefs.textSize,
    textScale: TEXT_SIZE_SCALES[prefs.textSize],
    setTextSize,
    todayCount: countFor(daily, profileId),
    setDailyGoal,
    setReduceMotion,
    bumpToday,
    resetToday,
  };
}
