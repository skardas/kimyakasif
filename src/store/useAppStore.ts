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

export interface UserStats {
  xp: number;
  streakDays: number;
  lastActiveDate: string;
  completedSlideUnits: string[];
  gameHighScores: Record<string, number>;
  mockBestScores: Record<string, MockBestScore>;
  examResults: ExamResultRecord[];
}

export interface DailyActivityRecord {
  date: string;
  questionsSolved: number;
  studyMinutes: number;
  xpEarned: number;
}

/** What the learner picked when a question was last answered wrong. */
export interface MistakeDetail {
  /** Chosen option index (0-4). Missing when the wrong answer came from a source that did not report it. */
  picked?: number;
  /** ISO timestamp of the wrong answer. */
  at: string;
}

export interface LearnerProfile {
  id: string;
  name: string;
  avatar: string; // emoji or avatar id
  createdAt: string;
  targetTrack: 'TYT_FIRST' | 'TYT_ONLY' | 'AYT_FOCUS';
  dailyQuestionGoal: number; // default 30
  dailyStudyMinutesGoal: number; // default 30
  notificationsEnabled: boolean; // default true
  reminderTime: string; // e.g. "20:00"
  stats: UserStats;
  solvedQuestionIds: string[];
  mistakeQuestionIds: string[];
  bookmarkedQuestionIds: string[];
  masteredCardIds: string[];
  dailyHistory: DailyActivityRecord[];
  solvedMap?: Record<string, boolean>; // qId -> isCorrect
  /** qId -> last wrong pick. Optional: records saved before this existed have none. */
  mistakeDetails?: Record<string, MistakeDetail>;
}

/**
 * Satisfies PROJECT.md § Interface Contracts: AppState & Milestone 6 Multi-Profile
 */
export interface AppState {
  theme: 'dark' | 'light';
  themeSetting: ThemeSetting;
  language: LanguageCode;
  soundEnabled: boolean;
  musicEnabled: boolean;
  musicVolume: number;
  sfxVolume: number;

  // Active profile telemetry (isolated per profile)
  xp: number;
  streakDays: number;
  solvedQuestionIds: Record<string, boolean>; // qId -> isCorrect
  mistakeQuestionIds: string[];
  mistakeDetails: Record<string, MistakeDetail>;
  bookmarkedQuestionIds: string[];
  masteredCardIds: string[];
  completedSlideUnits: string[];
  gameHighScores: Record<string, number>;
  mockBestScores: Record<string, MockBestScore>;
  examResults: ExamResultRecord[];
  activeExam: ActiveExamState | null;

  // Multi-profile state
  profiles: LearnerProfile[];
  activeProfileId: string;
  activeProfile: LearnerProfile;

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
  recordQuestionResult: (qId: string, isCorrect: boolean, pickedIndex?: number) => void;
  toggleBookmark: (qId: string) => void;
  markCardMastered: (cardId: string, mastered: boolean, xpReward: number) => void;
  markUnitSlidesCompleted: (unitId: string) => void;
  recordGameScore: (gameKey: string, score: number) => void;
  recordExamAttempt: (attempt: Omit<ExamResultRecord, 'id' | 'dateIso'>) => void;
  setActiveExam: (exam: ActiveExamState | null) => void;
  resetAllProgress: () => void;

  // Multi-profile actions
  createProfile: (name: string, avatar: string, targetTrack?: 'TYT_FIRST' | 'TYT_ONLY' | 'AYT_FOCUS') => string;
  switchProfile: (profileId: string) => void;
  updateProfile: (profileId: string, updates: Partial<Omit<LearnerProfile, 'id' | 'createdAt'>>) => void;
  deleteProfile: (profileId: string) => void;
  recordStudyMinutes: (minutes: number) => void;

  // Computed
  level: number;
  levelProgressPct: number;
  totalSolvedCount: number;
}

const STORAGE_KEY = 'kimya-yks-progress-v1';
const THEME_KEY = 'kimya-color-scheme';

export function todayStamp(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function createDefaultProfile(id = 'profile-default', name = 'Öğrenci 1', avatar = '👨‍🎓'): LearnerProfile {
  const today = todayStamp();
  return {
    id,
    name,
    avatar,
    createdAt: new Date().toISOString(),
    targetTrack: 'TYT_FIRST',
    dailyQuestionGoal: 30,
    dailyStudyMinutesGoal: 30,
    notificationsEnabled: true,
    reminderTime: '20:00',
    stats: {
      xp: 150,
      streakDays: 1,
      lastActiveDate: today,
      completedSlideUnits: [],
      gameHighScores: {},
      mockBestScores: {},
      examResults: [],
    },
    solvedQuestionIds: [],
    mistakeQuestionIds: [],
    bookmarkedQuestionIds: [],
    masteredCardIds: [],
    dailyHistory: [{ date: today, questionsSolved: 0, studyMinutes: 0, xpEarned: 150 }],
    solvedMap: {},
  };
}

interface PersistedData {
  language: LanguageCode;
  soundEnabled: boolean;
  musicEnabled: boolean;
  musicVolume: number;
  sfxVolume: number;
  profiles: LearnerProfile[];
  activeProfileId: string;
}

const DEFAULT_DATA: PersistedData = {
  language: 'tr',
  soundEnabled: true,
  musicEnabled: false,
  musicVolume: 0.7,
  sfxVolume: 0.8,
  profiles: [createDefaultProfile()],
  activeProfileId: 'profile-default',
};

function calculateStreak(lastActive: string, currentStreak: number, today: string): number {
  // 0 = progress was reset and nothing has been done since; the next activity starts a new streak.
  if (currentStreak === 0 && typeof lastActive === 'string' && lastActive) {
    return lastActive === today ? 0 : 1;
  }
  let streak = typeof currentStreak === 'number' && Number.isFinite(currentStreak) && currentStreak > 0 ? currentStreak : 1;
  if (!lastActive || typeof lastActive !== 'string') return streak;
  if (lastActive === today) return streak;

  try {
    const prevDate = new Date(lastActive);
    const currDate = new Date(today);
    const diffDays = Math.round((currDate.getTime() - prevDate.getTime()) / 86400000);
    if (diffDays === 1) {
      streak += 1;
    } else if (diffDays > 1) {
      streak = 1;
    }
  } catch {
    streak = 1;
  }
  return streak;
}

function sanitizeProfile(rawProf: any, defaultId: string): LearnerProfile {
  const today = todayStamp();
  const id = typeof rawProf?.id === 'string' && rawProf.id.trim() ? rawProf.id : defaultId;
  const name = typeof rawProf?.name === 'string' && rawProf.name.trim() ? rawProf.name : 'Öğrenci';
  const avatar = typeof rawProf?.avatar === 'string' && rawProf.avatar ? rawProf.avatar : '👨‍🎓';
  const targetTrack =
    rawProf?.targetTrack === 'TYT_ONLY' || rawProf?.targetTrack === 'AYT_FOCUS'
      ? rawProf.targetTrack
      : 'TYT_FIRST';
  const dailyQuestionGoal =
    typeof rawProf?.dailyQuestionGoal === 'number' && rawProf.dailyQuestionGoal > 0
      ? rawProf.dailyQuestionGoal
      : 30;
  const dailyStudyMinutesGoal =
    typeof rawProf?.dailyStudyMinutesGoal === 'number' && rawProf.dailyStudyMinutesGoal > 0
      ? rawProf.dailyStudyMinutesGoal
      : 30;
  const notificationsEnabled =
    typeof rawProf?.notificationsEnabled === 'boolean' ? rawProf.notificationsEnabled : true;
  const reminderTime =
    typeof rawProf?.reminderTime === 'string' && rawProf.reminderTime ? rawProf.reminderTime : '20:00';

  const rawStats = rawProf?.stats ?? {};
  const safeXp =
    typeof rawStats?.xp === 'number' && Number.isFinite(rawStats.xp) && rawStats.xp >= 0
      ? rawStats.xp
      : 0;
  const streakDays = calculateStreak(rawStats?.lastActiveDate, rawStats?.streakDays, today);

  const solvedMap =
    rawProf?.solvedMap && typeof rawProf.solvedMap === 'object' && !Array.isArray(rawProf.solvedMap)
      ? rawProf.solvedMap
      : typeof rawProf?.solvedQuestionIds === 'object' && !Array.isArray(rawProf.solvedQuestionIds)
      ? rawProf.solvedQuestionIds
      : {};

  const solvedQuestionIds = Array.isArray(rawProf?.solvedQuestionIds)
    ? rawProf.solvedQuestionIds
    : Object.keys(solvedMap);

  // Synchronize solvedMap with array if needed
  solvedQuestionIds.forEach((qId: string) => {
    if (!(qId in solvedMap)) {
      solvedMap[qId] = true;
    }
  });

  const mistakeQuestionIds = Array.isArray(rawProf?.mistakeQuestionIds)
    ? rawProf.mistakeQuestionIds
    : [];
  const mistakeDetails: Record<string, MistakeDetail> = {};
  if (rawProf?.mistakeDetails && typeof rawProf.mistakeDetails === 'object' && !Array.isArray(rawProf.mistakeDetails)) {
    Object.entries(rawProf.mistakeDetails as Record<string, any>).forEach(([qId, d]) => {
      if (!mistakeQuestionIds.includes(qId) || !d || typeof d !== 'object') return;
      const picked = Number.isInteger(d.picked) && d.picked >= 0 && d.picked <= 9 ? d.picked : undefined;
      mistakeDetails[qId] = { at: typeof d.at === 'string' ? d.at : '', ...(picked !== undefined ? { picked } : {}) };
    });
  }
  const bookmarkedQuestionIds = Array.isArray(rawProf?.bookmarkedQuestionIds)
    ? rawProf.bookmarkedQuestionIds
    : [];
  const masteredCardIds = Array.isArray(rawProf?.masteredCardIds) ? rawProf.masteredCardIds : [];
  const completedSlideUnits = Array.isArray(rawStats?.completedSlideUnits)
    ? rawStats.completedSlideUnits
    : [];
  const gameHighScores =
    rawStats?.gameHighScores && typeof rawStats.gameHighScores === 'object'
      ? rawStats.gameHighScores
      : {};
  const mockBestScores =
    rawStats?.mockBestScores && typeof rawStats.mockBestScores === 'object'
      ? rawStats.mockBestScores
      : {};
  const examResults = Array.isArray(rawStats?.examResults) ? rawStats.examResults : [];

  const rawHistory = Array.isArray(rawProf?.dailyHistory) ? rawProf.dailyHistory : [];
  const dailyHistory: DailyActivityRecord[] = rawHistory.map((h: any) => ({
    date: typeof h?.date === 'string' ? h.date : today,
    questionsSolved: typeof h?.questionsSolved === 'number' ? h.questionsSolved : 0,
    studyMinutes: typeof h?.studyMinutes === 'number' ? h.studyMinutes : 0,
    xpEarned: typeof h?.xpEarned === 'number' ? h.xpEarned : 0,
  }));

  if (!dailyHistory.some((h) => h.date === today)) {
    dailyHistory.push({ date: today, questionsSolved: 0, studyMinutes: 0, xpEarned: 0 });
  }

  return {
    id,
    name,
    avatar,
    createdAt: typeof rawProf?.createdAt === 'string' ? rawProf.createdAt : new Date().toISOString(),
    targetTrack,
    dailyQuestionGoal,
    dailyStudyMinutesGoal,
    notificationsEnabled,
    reminderTime,
    stats: {
      xp: safeXp,
      streakDays,
      lastActiveDate: today,
      completedSlideUnits,
      gameHighScores,
      mockBestScores,
      examResults,
    },
    solvedQuestionIds,
    mistakeQuestionIds,
    bookmarkedQuestionIds,
    masteredCardIds,
    dailyHistory: dailyHistory.slice(-30),
    solvedMap,
    mistakeDetails,
  };
}

function loadStoredData(): PersistedData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_DATA;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return DEFAULT_DATA;

    const today = todayStamp();

    // Case 1: Multi-profile format already present
    if (Array.isArray(parsed.profiles) && parsed.profiles.length > 0) {
      const sanitizedProfiles = parsed.profiles.map((p: any, idx: number) =>
        sanitizeProfile(p, `prof-${idx + 1}`)
      );
      const activeId =
        typeof parsed.activeProfileId === 'string' &&
        sanitizedProfiles.some((p: LearnerProfile) => p.id === parsed.activeProfileId)
          ? parsed.activeProfileId
          : sanitizedProfiles[0].id;

      return {
        language: parsed.language && typeof parsed.language === 'string' ? parsed.language : 'tr',
        soundEnabled: typeof parsed.soundEnabled === 'boolean' ? parsed.soundEnabled : true,
        musicEnabled: typeof parsed.musicEnabled === 'boolean' ? parsed.musicEnabled : false,
        musicVolume: typeof parsed.musicVolume === 'number' ? parsed.musicVolume : 0.7,
        sfxVolume: typeof parsed.sfxVolume === 'number' ? parsed.sfxVolume : 0.8,
        profiles: sanitizedProfiles,
        activeProfileId: activeId,
      };
    }

    // Case 2: Legacy un-profiled store data migration
    const legacySolvedMap =
      parsed.solvedQuestionIds && typeof parsed.solvedQuestionIds === 'object' && !Array.isArray(parsed.solvedQuestionIds)
        ? parsed.solvedQuestionIds
        : {};
    const legacySolvedIds = Object.keys(legacySolvedMap);
    const legacyMistakes = Array.isArray(parsed.mistakeQuestionIds) ? parsed.mistakeQuestionIds : [];
    const legacyBookmarks = Array.isArray(parsed.bookmarkedQuestionIds) ? parsed.bookmarkedQuestionIds : [];
    const legacyMastered = Array.isArray(parsed.masteredCardIds) ? parsed.masteredCardIds : [];
    const legacyCompletedSlides = Array.isArray(parsed.completedSlideUnits) ? parsed.completedSlideUnits : [];
    const legacyGameHighScores = parsed.gameHighScores && typeof parsed.gameHighScores === 'object' ? parsed.gameHighScores : {};
    const legacyMockBestScores = parsed.mockBestScores && typeof parsed.mockBestScores === 'object' ? parsed.mockBestScores : {};
    const legacyExamResults = Array.isArray(parsed.examResults) ? parsed.examResults : [];

    const legacyStreak = calculateStreak(parsed.lastActiveDate, parsed.streakDays, today);
    const legacyXp = typeof parsed.xp === 'number' && Number.isFinite(parsed.xp) && parsed.xp >= 0 ? parsed.xp : 150;

    const defaultProfile: LearnerProfile = {
      id: 'profile-default',
      name: 'Öğrenci 1',
      avatar: '👨‍🎓',
      createdAt: new Date().toISOString(),
      targetTrack: 'TYT_FIRST',
      dailyQuestionGoal: 30,
      dailyStudyMinutesGoal: 30,
      notificationsEnabled: true,
      reminderTime: '20:00',
      stats: {
        xp: legacyXp,
        streakDays: legacyStreak,
        lastActiveDate: today,
        completedSlideUnits: legacyCompletedSlides,
        gameHighScores: legacyGameHighScores,
        mockBestScores: legacyMockBestScores,
        examResults: legacyExamResults,
      },
      solvedQuestionIds: legacySolvedIds,
      mistakeQuestionIds: legacyMistakes,
      bookmarkedQuestionIds: legacyBookmarks,
      masteredCardIds: legacyMastered,
      dailyHistory: [
        {
          date: today,
          questionsSolved: legacySolvedIds.length,
          studyMinutes: 15,
          xpEarned: legacyXp,
        },
      ],
      solvedMap: legacySolvedMap,
    };

    return {
      language: parsed.language && typeof parsed.language === 'string' ? parsed.language : 'tr',
      soundEnabled: typeof parsed.soundEnabled === 'boolean' ? parsed.soundEnabled : true,
      musicEnabled: typeof parsed.musicEnabled === 'boolean' ? parsed.musicEnabled : false,
      musicVolume: typeof parsed.musicVolume === 'number' ? parsed.musicVolume : 0.7,
      sfxVolume: typeof parsed.sfxVolume === 'number' ? parsed.sfxVolume : 0.8,
      profiles: [defaultProfile],
      activeProfileId: 'profile-default',
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

  // Derive active profile with robust fallback
  const activeProfile = useMemo(() => {
    return (
      data.profiles.find((p) => p.id === data.activeProfileId) ??
      data.profiles[0] ??
      createDefaultProfile()
    );
  }, [data.profiles, data.activeProfileId]);

  // Persist progress & sync <html lang dir> for Arabic RTL & 8 languages
  // Also serialize legacy top-level mirror for 100% backward compatibility
  useEffect(() => {
    try {
      const payload = {
        ...data,
        // Legacy top-level mirror:
        xp: activeProfile.stats.xp,
        streakDays: activeProfile.stats.streakDays,
        lastActiveDate: activeProfile.stats.lastActiveDate,
        solvedQuestionIds: activeProfile.solvedMap ?? {},
        mistakeQuestionIds: activeProfile.mistakeQuestionIds,
        bookmarkedQuestionIds: activeProfile.bookmarkedQuestionIds,
        masteredCardIds: activeProfile.masteredCardIds,
        completedSlideUnits: activeProfile.stats.completedSlideUnits,
        gameHighScores: activeProfile.stats.gameHighScores,
        mockBestScores: activeProfile.stats.mockBestScores,
        examResults: activeProfile.stats.examResults,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Storage quota or restricted environment
    }
    const metaLang = LANGUAGES.find((l) => l.code === data.language) ?? LANGUAGES[0];
    document.documentElement.lang = metaLang.code;
    document.documentElement.dir = metaLang.dir;
  }, [data, activeProfile]);

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

  // Multi-Profile Actions
  const createProfile = useCallback(
    (
      name: string,
      avatar: string,
      targetTrack: 'TYT_FIRST' | 'TYT_ONLY' | 'AYT_FOCUS' = 'TYT_FIRST'
    ): string => {
      const newId = `prof-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const today = todayStamp();
      const newProfile: LearnerProfile = {
        id: newId,
        name: name.trim() || 'Yeni Öğrenci',
        avatar: avatar || '👨‍🎓',
        createdAt: new Date().toISOString(),
        targetTrack,
        dailyQuestionGoal: 30,
        dailyStudyMinutesGoal: 30,
        notificationsEnabled: true,
        reminderTime: '20:00',
        stats: {
          xp: 0,
          streakDays: 1,
          lastActiveDate: today,
          completedSlideUnits: [],
          gameHighScores: {},
          mockBestScores: {},
          examResults: [],
        },
        solvedQuestionIds: [],
        mistakeQuestionIds: [],
        bookmarkedQuestionIds: [],
        masteredCardIds: [],
        dailyHistory: [{ date: today, questionsSolved: 0, studyMinutes: 0, xpEarned: 0 }],
        solvedMap: {},
      };

      setData((prev) => ({
        ...prev,
        profiles: [...prev.profiles, newProfile],
        activeProfileId: newId,
      }));

      return newId;
    },
    []
  );

  const switchProfile = useCallback((profileId: string) => {
    setData((prev) => {
      const target = prev.profiles.find((p) => p.id === profileId);
      if (!target) return prev;
      return {
        ...prev,
        activeProfileId: profileId,
      };
    });
  }, []);

  const updateProfile = useCallback(
    (profileId: string, updates: Partial<Omit<LearnerProfile, 'id' | 'createdAt'>>) => {
      setData((prev) => ({
        ...prev,
        profiles: prev.profiles.map((p) => {
          if (p.id !== profileId) return p;
          return {
            ...p,
            ...updates,
            stats: updates.stats ? { ...p.stats, ...updates.stats } : p.stats,
          };
        }),
      }));
    },
    []
  );

  const deleteProfile = useCallback((profileId: string) => {
    setData((prev) => {
      if (prev.profiles.length <= 1) return prev; // Preserve at least one profile
      const remaining = prev.profiles.filter((p) => p.id !== profileId);
      const nextActiveId =
        prev.activeProfileId === profileId ? remaining[0].id : prev.activeProfileId;
      return {
        ...prev,
        profiles: remaining,
        activeProfileId: nextActiveId,
      };
    });
  }, []);

  const recordStudyMinutes = useCallback((minutes: number) => {
    if (!Number.isFinite(minutes) || minutes <= 0) return;
    const today = todayStamp();
    setData((prev) => {
      const targetProf = prev.profiles.find((p) => p.id === prev.activeProfileId) ?? prev.profiles[0];
      const history = [...targetProf.dailyHistory];
      const todayIdx = history.findIndex((h) => h.date === today);
      if (todayIdx >= 0) {
        history[todayIdx] = {
          ...history[todayIdx],
          studyMinutes: history[todayIdx].studyMinutes + minutes,
        };
      } else {
        history.push({
          date: today,
          questionsSolved: 0,
          studyMinutes: minutes,
          xpEarned: 0,
        });
      }
      const updatedProfile: LearnerProfile = {
        ...targetProf,
        dailyHistory: history.slice(-30),
      };
      return {
        ...prev,
        profiles: prev.profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p)),
      };
    });
  }, []);

  const earnXp = useCallback((delta: number) => {
    if (!Number.isFinite(delta)) return;
    const today = todayStamp();
    setData((prev) => {
      const targetProf = prev.profiles.find((p) => p.id === prev.activeProfileId) ?? prev.profiles[0];
      const currentXp = targetProf.stats.xp;
      const nextXp = Math.max(0, Math.round(currentXp + delta));
      const actualDelta = nextXp - currentXp;

      const history = [...targetProf.dailyHistory];
      const todayIdx = history.findIndex((h) => h.date === today);
      if (todayIdx >= 0) {
        history[todayIdx] = {
          ...history[todayIdx],
          xpEarned: Math.max(0, history[todayIdx].xpEarned + actualDelta),
        };
      } else {
        history.push({
          date: today,
          questionsSolved: 0,
          studyMinutes: 0,
          xpEarned: Math.max(0, actualDelta),
        });
      }

      const updatedProfile: LearnerProfile = {
        ...targetProf,
        stats: {
          ...targetProf.stats,
          xp: nextXp,
          streakDays: Math.max(1, targetProf.stats.streakDays),
          lastActiveDate: today,
        },
        dailyHistory: history.slice(-30),
      };

      return {
        ...prev,
        profiles: prev.profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p)),
      };
    });
  }, []);

  const recordQuestionResult = useCallback((questionId: string, isCorrect: boolean, pickedIndex?: number) => {
    const today = todayStamp();
    setData((prev) => {
      const targetProf = prev.profiles.find((p) => p.id === prev.activeProfileId) ?? prev.profiles[0];
      const prevSolvedMap = targetProf.solvedMap ?? {};
      const wasAlreadySolved = questionId in prevSolvedMap;
      const nextSolvedMap = { ...prevSolvedMap, [questionId]: isCorrect };

      const solvedSet = new Set(targetProf.solvedQuestionIds);
      solvedSet.add(questionId);

      const mistakeSet = new Set(targetProf.mistakeQuestionIds);
      const nextDetails = { ...(targetProf.mistakeDetails ?? {}) };
      if (isCorrect) {
        mistakeSet.delete(questionId);
        delete nextDetails[questionId];
      } else {
        mistakeSet.add(questionId);
        nextDetails[questionId] = {
          at: new Date().toISOString(),
          ...(Number.isInteger(pickedIndex) && (pickedIndex as number) >= 0 ? { picked: pickedIndex } : {}),
        };
      }

      const xpDelta = isCorrect ? 15 : 3;
      const nextXp = Math.max(0, Math.round(targetProf.stats.xp + xpDelta));

      const history = [...targetProf.dailyHistory];
      const todayIdx = history.findIndex((h) => h.date === today);
      if (todayIdx >= 0) {
        history[todayIdx] = {
          ...history[todayIdx],
          questionsSolved: history[todayIdx].questionsSolved + (wasAlreadySolved ? 0 : 1),
          xpEarned: history[todayIdx].xpEarned + xpDelta,
        };
      } else {
        history.push({
          date: today,
          questionsSolved: 1,
          studyMinutes: 1,
          xpEarned: xpDelta,
        });
      }

      const updatedProfile: LearnerProfile = {
        ...targetProf,
        stats: {
          ...targetProf.stats,
          xp: nextXp,
          streakDays: Math.max(1, targetProf.stats.streakDays),
          lastActiveDate: today,
        },
        solvedQuestionIds: Array.from(solvedSet),
        solvedMap: nextSolvedMap,
        mistakeQuestionIds: Array.from(mistakeSet),
        mistakeDetails: nextDetails,
        dailyHistory: history.slice(-30),
      };

      return {
        ...prev,
        profiles: prev.profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p)),
      };
    });
  }, []);

  const toggleBookmark = useCallback((questionId: string) => {
    setData((prev) => {
      const targetProf = prev.profiles.find((p) => p.id === prev.activeProfileId) ?? prev.profiles[0];
      const set = new Set(targetProf.bookmarkedQuestionIds);
      if (set.has(questionId)) set.delete(questionId);
      else set.add(questionId);

      const updatedProfile: LearnerProfile = {
        ...targetProf,
        bookmarkedQuestionIds: Array.from(set),
      };
      return {
        ...prev,
        profiles: prev.profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p)),
      };
    });
  }, []);

  const markCardMastered = useCallback((cardId: string, mastered: boolean, xpReward: number) => {
    const today = todayStamp();
    setData((prev) => {
      const targetProf = prev.profiles.find((p) => p.id === prev.activeProfileId) ?? prev.profiles[0];
      const set = new Set(targetProf.masteredCardIds);
      if (mastered) set.add(cardId);
      else set.delete(cardId);

      const nextXp = Math.max(0, Math.round(targetProf.stats.xp + xpReward));
      const updatedProfile: LearnerProfile = {
        ...targetProf,
        stats: {
          ...targetProf.stats,
          xp: nextXp,
          streakDays: Math.max(1, targetProf.stats.streakDays),
          lastActiveDate: today,
        },
        masteredCardIds: Array.from(set),
      };
      return {
        ...prev,
        profiles: prev.profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p)),
      };
    });
  }, []);

  const markUnitSlidesCompleted = useCallback((unitId: string) => {
    const today = todayStamp();
    setData((prev) => {
      const targetProf = prev.profiles.find((p) => p.id === prev.activeProfileId) ?? prev.profiles[0];
      if (targetProf.stats.completedSlideUnits.includes(unitId)) return prev;

      const nextXp = Math.max(0, Math.round(targetProf.stats.xp + 40));
      const updatedProfile: LearnerProfile = {
        ...targetProf,
        stats: {
          ...targetProf.stats,
          xp: nextXp,
          streakDays: Math.max(1, targetProf.stats.streakDays),
          lastActiveDate: today,
          completedSlideUnits: [...targetProf.stats.completedSlideUnits, unitId],
        },
      };
      return {
        ...prev,
        profiles: prev.profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p)),
      };
    });
  }, []);

  const recordGameScore = useCallback((gameKey: string, score: number) => {
    const today = todayStamp();
    setData((prev) => {
      const targetProf = prev.profiles.find((p) => p.id === prev.activeProfileId) ?? prev.profiles[0];
      const prevBest = targetProf.stats.gameHighScores[gameKey] ?? 0;
      const xpDelta = Math.max(20, Math.round(score / 3));
      const nextXp = Math.max(0, Math.round(targetProf.stats.xp + xpDelta));

      const updatedProfile: LearnerProfile = {
        ...targetProf,
        stats: {
          ...targetProf.stats,
          xp: nextXp,
          streakDays: Math.max(1, targetProf.stats.streakDays),
          lastActiveDate: today,
          gameHighScores: {
            ...targetProf.stats.gameHighScores,
            [gameKey]: Math.max(prevBest, score),
          },
        },
      };
      return {
        ...prev,
        profiles: prev.profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p)),
      };
    });
  }, []);

  const recordExamAttempt = useCallback((attempt: Omit<ExamResultRecord, 'id' | 'dateIso'>) => {
    const today = todayStamp();
    setData((prev) => {
      const targetProf = prev.profiles.find((p) => p.id === prev.activeProfileId) ?? prev.profiles[0];
      const entry: ExamResultRecord = {
        ...attempt,
        id: `kimya-ex-${Date.now()}`,
        dateIso: new Date().toISOString(),
      };
      const nextMockBest = { ...targetProf.stats.mockBestScores };
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

      const xpDelta = Math.max(30, Math.round(attempt.netScore * 20));
      const nextXp = Math.max(0, Math.round(targetProf.stats.xp + xpDelta));

      const updatedProfile: LearnerProfile = {
        ...targetProf,
        stats: {
          ...targetProf.stats,
          xp: nextXp,
          streakDays: Math.max(1, targetProf.stats.streakDays),
          lastActiveDate: today,
          mockBestScores: nextMockBest,
          examResults: [entry, ...targetProf.stats.examResults].slice(0, 50),
        },
      };

      return {
        ...prev,
        profiles: prev.profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p)),
      };
    });
  }, []);

  const resetAllProgress = useCallback(() => {
    const today = todayStamp();
    setData((prev) => {
      const targetProf = prev.profiles.find((p) => p.id === prev.activeProfileId) ?? prev.profiles[0];
      const resetProf: LearnerProfile = {
        ...targetProf,
        stats: {
          xp: 0,
          streakDays: 0,
          lastActiveDate: today,
          completedSlideUnits: [],
          gameHighScores: {},
          mockBestScores: {},
          examResults: [],
        },
        solvedQuestionIds: [],
        solvedMap: {},
        mistakeQuestionIds: [],
        mistakeDetails: {},
        bookmarkedQuestionIds: [],
        masteredCardIds: [],
        dailyHistory: [{ date: today, questionsSolved: 0, studyMinutes: 0, xpEarned: 0 }],
      };
      return {
        ...prev,
        profiles: prev.profiles.map((p) => (p.id === resetProf.id ? resetProf : p)),
      };
    });
  }, []);

  const safeXp = Math.max(0, Number.isFinite(activeProfile.stats.xp) ? activeProfile.stats.xp : 0);
  const level = Math.max(1, Math.floor(safeXp / 250) + 1);
  const levelProgressPct = Math.max(0, Math.min(100, Math.round(((safeXp % 250) / 250) * 100)));
  const totalSolvedCount = activeProfile.solvedQuestionIds.length;
  const solvedQuestionMap =
    activeProfile.solvedMap ??
    Object.fromEntries(activeProfile.solvedQuestionIds.map((id) => [id, true]));

  return {
    theme: resolvedDark ? 'dark' : 'light',
    themeSetting,
    language: data.language,
    soundEnabled: data.soundEnabled,
    musicEnabled: data.musicEnabled,
    musicVolume: data.musicVolume,
    sfxVolume: data.sfxVolume,

    // Active profile telemetry
    xp: activeProfile.stats.xp,
    streakDays: activeProfile.stats.streakDays,
    solvedQuestionIds: solvedQuestionMap,
    mistakeQuestionIds: activeProfile.mistakeQuestionIds,
    mistakeDetails: activeProfile.mistakeDetails ?? {},
    bookmarkedQuestionIds: activeProfile.bookmarkedQuestionIds,
    masteredCardIds: activeProfile.masteredCardIds,
    completedSlideUnits: activeProfile.stats.completedSlideUnits,
    gameHighScores: activeProfile.stats.gameHighScores,
    mockBestScores: activeProfile.stats.mockBestScores,
    examResults: activeProfile.stats.examResults,
    activeExam,

    // Multi-profile state
    profiles: data.profiles,
    activeProfileId: data.activeProfileId,
    activeProfile,

    // Actions
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

    // Multi-profile actions
    createProfile,
    switchProfile,
    updateProfile,
    deleteProfile,
    recordStudyMinutes,

    // Computed
    level,
    levelProgressPct,
    totalSolvedCount,
  };
}
