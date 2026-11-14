import { useCallback, useEffect, useState } from 'react';
import { setSfxEnabled } from '../audio/sfx';

const KEY = 'kimya-prefs';
const DAILY_KEY = 'kimya-daily';

export const DAILY_GOAL_OPTIONS = [10, 20, 40] as const;
export type DailyGoal = (typeof DAILY_GOAL_OPTIONS)[number];

interface Prefs {
  dailyGoal: DailyGoal;
  reduceMotion: boolean;
  sfxOn: boolean;
}

interface DailyCount {
  date: string;
  count: number;
}

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
        };
      }
    }
  } catch {
    // Default fallback
  }
  return { dailyGoal: 20, reduceMotion: false, sfxOn: true };
}

function loadDaily(): DailyCount {
  const today = todayStamp();
  try {
    const raw = localStorage.getItem(DAILY_KEY);
    if (raw) {
      const d = JSON.parse(raw);
      if (d && typeof d === 'object' && !Array.isArray(d)) {
        if (d.date === today && typeof d.count === 'number' && Number.isFinite(d.count) && d.count >= 0) {
          return { date: today, count: Math.round(d.count) };
        }
      }
    }
  } catch {
    // Default fallback
  }
  return { date: today, count: 0 };
}

/** Günlük hedef, bugün çözülen soru sayısı ve "hareketi azalt" tercihi. */
export function usePreferences() {
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
  const bumpToday = useCallback(() => {
    setDaily((d) => {
      const today = todayStamp();
      return d.date === today ? { date: today, count: d.count + 1 } : { date: today, count: 1 };
    });
  }, []);

  return {
    dailyGoal: prefs.dailyGoal,
    reduceMotion: prefs.reduceMotion,
    sfxOn: prefs.sfxOn,
    setSfxOn,
    todayCount: daily.date === todayStamp() ? daily.count : 0,
    setDailyGoal,
    setReduceMotion,
    bumpToday,
  };
}
