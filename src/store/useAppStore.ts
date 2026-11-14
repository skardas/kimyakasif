import { useCallback, useEffect, useMemo, useState } from 'react';
import { LANGUAGES } from '../i18n/translations';
import type { LanguageCode } from '../types/chemistry';

export type { LanguageCode };
export type ThemeSetting = 'system' | 'light' | 'dark';

export interface ExamResultRecord {
  id: string;
  mockId?: string;
  unitId?: string;
  dateIso: string;
  modeTitle: string;
  examType: 'TYT' | 'AYT' | 'UNIT' | 'TG';
  total: number;
  correct: number;
  wrong: number;
  empty: number;
  netScore: number;
}

export interface ActiveExamState {
  examId: string;
  startTime: number;
  remainingSeconds: number;
  currentQuestionIndex: number;
  answers: Record<string, number | null>; // questionId -> optionIndex (0-4 or null)
}

export interface MockBestScore {
  bestNet: number;
  correct: number;
  wrong: number;
  total: number;
  attempts: number;
}

/**
 * Satisfies PROJECT.md § Interface Contracts: AppState
 */
export interface AppState {
  theme: 'dark' | 'light';
  themeSetting: ThemeSetting;
  language: LanguageCode;
  soundEnabled: boolean;
  musicEnabled: boolean;
  musicVolume: number;
  sfxVolume: number;
  xp: number;
  streakDays: number;
  solvedQuestionIds: Record<string, boolean>; // qId -> isCorrect
  mistakeQuestionIds: string[];
  bookmarkedQuestionIds: string[];
  masteredCardIds: string[];
  completedSlideUnits: string[];
  gameHighScores: Record<string, number>;
  mockBestScores: Record<string, MockBestScore>;
  examResults: ExamResultRecord[];
  activeExam: ActiveExamState | null;

  // Actions
  setTheme: (t: 'dark' | 'light') => void;
  setThemeSetting: (t: ThemeSetting) => void;
  quickToggleTheme: () => void;
  setLanguage: (l: LanguageCode) => void;
  setSoundEnabled: (v: boolean) => void;
  setMusicEnabled: (v: boolean) => void;
  setMusicVolume: (v: number) => void;
  setSfxVolume: (v: number) => void;
  earnXp: (delta: number) => void;
  recordQuestionResult: (qId: string, isCorrect: boolean) => void;
  toggleBookmark: (qId: string) => void;
  markCardMastered: (cardId: string, mastered: boolean, xpReward: number) => void;
  markUnitSlidesCompleted: (unitId: string) => void;
  recordGameScore: (gameKey: string, score: number) => void;
  recordExamAttempt: (attempt: Omit<ExamResultRecord, 'id' | 'dateIso'>) => void;
  setActiveExam: (exam: ActiveExamState | null) => void;
  resetAllProgress: () => void;

  // Computed
  level: number;
  levelProgressPct: number;
  totalSolvedCount: number;
}

const STORAGE_KEY = 'kimya-yks-progress-v1';
const THEME_KEY = 'kimya-color-scheme';

function todayStamp(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

interface PersistedData {
  language: LanguageCode;
  xp: number;
  streakDays: number;
  lastActiveDate: string;
  soundEnabled: boolean;
  musicEnabled: boolean;
  musicVolume: number;
  sfxVolume: number;
  solvedQuestionIds: Record<string, boolean>;
  mistakeQuestionIds: string[];
  bookmarkedQuestionIds: string[];
  masteredCardIds: string[];
  completedSlideUnits: string[];
  gameHighScores: Record<string, number>;
  mockBestScores: Record<string, MockBestScore>;
  examResults: ExamResultRecord[];
}

const DEFAULT_DATA: PersistedData = {
  language: 'tr', // Turkish default
  xp: 150,
  streakDays: 1,
  lastActiveDate: todayStamp(),
  soundEnabled: true,
  musicEnabled: false,
  musicVolume: 0.7,
  sfxVolume: 0.8,
  solvedQuestionIds: {},
  mistakeQuestionIds: [],
  bookmarkedQuestionIds: [],
  masteredCardIds: [],
  completedSlideUnits: [],
  gameHighScores: {},
  mockBestScores: {},
  examResults: [],
};

function loadStoredData(): PersistedData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_DATA;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return DEFAULT_DATA;
    const today = todayStamp();
    let streak = typeof parsed.streakDays === 'number' && parsed.streakDays > 0 ? parsed.streakDays : 1;
    const last = typeof parsed.lastActiveDate === 'string' ? parsed.lastActiveDate : today;
    if (last !== today) {
      const prevDate = new Date(last);
      const currDate = new Date(today);
      const diffDays = Math.round((currDate.getTime() - prevDate.getTime()) / 86400000);
      streak = diffDays === 1 ? streak + 1 : 1;
    }
    const safeXp = typeof parsed.xp === 'number' && Number.isFinite(parsed.xp) && parsed.xp >= 0 ? parsed.xp : DEFAULT_DATA.xp;
    return {
      ...DEFAULT_DATA,
      ...parsed,
      xp: safeXp,
      streakDays: streak,
      lastActiveDate: today,
      solvedQuestionIds: parsed.solvedQuestionIds && typeof parsed.solvedQuestionIds === 'object' && !Array.isArray(parsed.solvedQuestionIds) ? parsed.solvedQuestionIds : {},
      mistakeQuestionIds: Array.isArray(parsed.mistakeQuestionIds) ? parsed.mistakeQuestionIds : [],
      bookmarkedQuestionIds: Array.isArray(parsed.bookmarkedQuestionIds) ? parsed.bookmarkedQuestionIds : [],
    };
  } catch {
    return DEFAULT_DATA;
  }
}

function loadStoredTheme(): ThemeSetting {
  try {
    const v = localStorage.getItem(THEME_KEY);
    if (v === 'light' || v === 'dark') return v;
    return 'system';
  } catch {
    return 'system';
  }
}

export function useAppStore(): AppState {
  const [data, setData] = useState<PersistedData>(loadStoredData);
  const [themeSetting, setThemeSettingState] = useState<ThemeSetting>(loadStoredTheme);
  const [activeExam, setActiveExam] = useState<ActiveExamState | null>(null);

  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean>(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false
  );

  const applyThemeSetting = useCallback((next: ThemeSetting) => {
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute('content', next === 'system' ? 'light dark' : next);
    }
    try {
      if (next === 'system') {
        localStorage.removeItem(THEME_KEY);
      } else {
        localStorage.setItem(THEME_KEY, next);
      }
    } catch {
      // Storage unavailable
    }
    setThemeSettingState(next);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => setSystemPrefersDark(e.matches);
    mql.addEventListener('change', onChange);

    const onStorage = (e: StorageEvent) => {
      if (e.key === THEME_KEY) {
        const next: ThemeSetting =
          e.newValue === 'light' || e.newValue === 'dark' ? e.newValue : 'system';
        const meta = document.querySelector('meta[name="color-scheme"]');
        if (meta) meta.setAttribute('content', next === 'system' ? 'light dark' : next);
        setThemeSettingState(next);
      }
    };
    window.addEventListener('storage', onStorage);

    return () => {
      mql.removeEventListener('change', onChange);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const resolvedDark = useMemo(() => {
    if (themeSetting === 'dark') return true;
    if (themeSetting === 'light') return false;
    return systemPrefersDark;
  }, [themeSetting, systemPrefersDark]);

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedDark ? 'dark' : 'light';
  }, [resolvedDark]);

  const quickToggleTheme = useCallback(() => {
    const targetLiteral: 'light' | 'dark' = resolvedDark ? 'light' : 'dark';
    const sysLiteral: 'light' | 'dark' = systemPrefersDark ? 'dark' : 'light';
    if (targetLiteral === sysLiteral) {
      applyThemeSetting('system');
    } else {
      applyThemeSetting(targetLiteral);
    }
  }, [resolvedDark, systemPrefersDark, applyThemeSetting]);

  const setTheme = useCallback(
    (t: 'dark' | 'light') => {
      applyThemeSetting(t);
    },
    [applyThemeSetting]
  );

  // Persist progress & sync <html lang dir> for Arabic RTL & 8 languages
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Storage quota or restricted environment
    }
    const metaLang = LANGUAGES.find((l) => l.code === data.language) ?? LANGUAGES[0];
    document.documentElement.lang = metaLang.code;
    document.documentElement.dir = metaLang.dir;
  }, [data]);

  const setLanguage = useCallback((language: LanguageCode) => {
    setData((prev) => ({ ...prev, language }));
  }, []);

  const setSoundEnabled = useCallback((soundEnabled: boolean) => {
    setData((prev) => ({ ...prev, soundEnabled }));
  }, []);

  const setMusicEnabled = useCallback((musicEnabled: boolean) => {
    setData((prev) => ({ ...prev, musicEnabled }));
  }, []);

  const setMusicVolume = useCallback((musicVolume: number) => {
    setData((prev) => ({ ...prev, musicVolume }));
  }, []);

  const setSfxVolume = useCallback((sfxVolume: number) => {
    setData((prev) => ({ ...prev, sfxVolume }));
  }, []);

  const earnXp = useCallback((delta: number) => {
    if (!Number.isFinite(delta)) return;
    setData((prev) => ({ ...prev, xp: Math.max(0, Math.round(prev.xp + delta)) }));
  }, []);

  const recordQuestionResult = useCallback((questionId: string, isCorrect: boolean) => {
    setData((prev) => {
      const nextSolved = { ...prev.solvedQuestionIds, [questionId]: isCorrect };
      const mistakeSet = new Set(prev.mistakeQuestionIds);
      if (isCorrect) {
        mistakeSet.delete(questionId);
      } else {
        mistakeSet.add(questionId);
      }
      return {
        ...prev,
        xp: prev.xp + (isCorrect ? 15 : 3),
        solvedQuestionIds: nextSolved,
        mistakeQuestionIds: Array.from(mistakeSet),
      };
    });
  }, []);

  const toggleBookmark = useCallback((questionId: string) => {
    setData((prev) => {
      const set = new Set(prev.bookmarkedQuestionIds);
      if (set.has(questionId)) set.delete(questionId);
      else set.add(questionId);
      return { ...prev, bookmarkedQuestionIds: Array.from(set) };
    });
  }, []);

  const markCardMastered = useCallback((cardId: string, mastered: boolean, xpReward: number) => {
    setData((prev) => {
      const set = new Set(prev.masteredCardIds);
      if (mastered) set.add(cardId);
      else set.delete(cardId);
      return {
        ...prev,
        xp: prev.xp + xpReward,
        masteredCardIds: Array.from(set),
      };
    });
  }, []);

  const markUnitSlidesCompleted = useCallback((unitId: string) => {
    setData((prev) => {
      if (prev.completedSlideUnits.includes(unitId)) return prev;
      return {
        ...prev,
        xp: prev.xp + 40,
        completedSlideUnits: [...prev.completedSlideUnits, unitId],
      };
    });
  }, []);

  const recordGameScore = useCallback((gameKey: string, score: number) => {
    setData((prev) => {
      const prevBest = prev.gameHighScores[gameKey] ?? 0;
      return {
        ...prev,
        xp: prev.xp + Math.max(20, Math.round(score / 3)),
        gameHighScores: {
          ...prev.gameHighScores,
          [gameKey]: Math.max(prevBest, score),
        },
      };
    });
  }, []);

  const recordExamAttempt = useCallback((attempt: Omit<ExamResultRecord, 'id' | 'dateIso'>) => {
    setData((prev) => {
      const entry: ExamResultRecord = {
        ...attempt,
        id: `kimya-ex-${Date.now()}`,
        dateIso: new Date().toISOString(),
      };
      const nextMockBest = { ...prev.mockBestScores };
      if (attempt.mockId) {
        const prevMock = nextMockBest[attempt.mockId];
        if (!prevMock || attempt.netScore >= prevMock.bestNet) {
          nextMockBest[attempt.mockId] = {
            bestNet: attempt.netScore,
            correct: attempt.correct,
            wrong: attempt.wrong,
            total: attempt.total,
            attempts: (prevMock?.attempts ?? 0) + 1,
          };
        } else {
          nextMockBest[attempt.mockId] = {
            ...prevMock,
            attempts: prevMock.attempts + 1,
          };
        }
      }
      return {
        ...prev,
        xp: prev.xp + Math.max(30, Math.round(attempt.netScore * 20)),
        mockBestScores: nextMockBest,
        examResults: [entry, ...prev.examResults].slice(0, 50),
      };
    });
  }, []);

  const resetAllProgress = useCallback(() => {
    setData({ ...DEFAULT_DATA, language: data.language });
  }, [data.language]);

  const safeXp = Math.max(0, Number.isFinite(data.xp) ? data.xp : 0);
  const level = Math.max(1, Math.floor(safeXp / 250) + 1);
  const levelProgressPct = Math.max(0, Math.min(100, Math.round(((safeXp % 250) / 250) * 100)));
  const totalSolvedCount = Object.keys(data.solvedQuestionIds).length;

  return {
    theme: resolvedDark ? 'dark' : 'light',
    themeSetting,
    language: data.language,
    soundEnabled: data.soundEnabled,
    musicEnabled: data.musicEnabled,
    musicVolume: data.musicVolume,
    sfxVolume: data.sfxVolume,
    xp: data.xp,
    streakDays: data.streakDays,
    solvedQuestionIds: data.solvedQuestionIds,
    mistakeQuestionIds: data.mistakeQuestionIds,
    bookmarkedQuestionIds: data.bookmarkedQuestionIds,
    masteredCardIds: data.masteredCardIds,
    completedSlideUnits: data.completedSlideUnits,
    gameHighScores: data.gameHighScores,
    mockBestScores: data.mockBestScores,
    examResults: data.examResults,
    activeExam,

    setTheme,
    setThemeSetting: applyThemeSetting,
    quickToggleTheme,
    setLanguage,
    setSoundEnabled,
    setMusicEnabled,
    setMusicVolume,
    setSfxVolume,
    earnXp,
    recordQuestionResult,
    toggleBookmark,
    markCardMastered,
    markUnitSlidesCompleted,
    recordGameScore,
    recordExamAttempt,
    setActiveExam,
    resetAllProgress,

    level,
    levelProgressPct,
    totalSolvedCount,
  };
}
