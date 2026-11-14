import React, { useEffect, useState } from 'react';
import {
  BookOpen,
  Box,
  Layers,
  Gamepad2,
  FileCheck2,
  User,
  Flame,
  Sun,
  Moon,
  WifiOff,
  Download,
} from 'lucide-react';
import { UI_TRANSLATIONS } from './i18n/translations';
import { useBackgroundMusic } from './audio/useBackgroundMusic';
import { useAppStore } from './store/useAppStore';
import { usePreferences } from './store/usePreferences';
import { Onboarding, type ExamPreference } from './components/onboarding/Onboarding';
import { FlaskMark } from './components/common/FlaskMark';
import { Confetti } from './components/common/Confetti';

import { CurriculumView } from './components/study/CurriculumView';
import { Kimya3DLab } from './components/three/Kimya3DLab';
import { FlashcardsView } from './components/cards/FlashcardsView';
import { GamesHub } from './components/games/GamesHub';
import { ExamCenter } from './components/exams/ExamCenter';
import { ProfileView } from './components/profile/ProfileView';

export type NavTab = 'curriculum' | 'lab3d' | 'cards' | 'games' | 'exams' | 'profile';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
}

export const App: React.FC = () => {
  const store = useAppStore();
  const { musicOn, musicTrackId, musicVolume, setMusicOn, setMusicTrack, setMusicVolume } =
    useBackgroundMusic();
  const { dailyGoal, reduceMotion, sfxOn, setSfxOn, todayCount, setDailyGoal, setReduceMotion, bumpToday } =
    usePreferences();

  const lang = store.language;
  const t = UI_TRANSLATIONS[lang];

  const [activeTab, setActiveTab] = useState<NavTab>('curriculum');
  const [targetSceneId, setTargetSceneId] = useState<string>('water-vsepr');
  const [targetCardUnitId, setTargetCardUnitId] = useState<string | null>(null);
  const [targetExamUnitId, setTargetExamUnitId] = useState<string | null>(null);
  const [celebrationKey, setCelebrationKey] = useState<number>(0);

  const [isOffline, setIsOffline] = useState<boolean>(
    typeof navigator !== 'undefined' ? !navigator.onLine : false
  );
  const [showSplash, setShowSplash] = useState(true);
  const [examPref, setExamPref] = useState<ExamPreference>(() => {
    try {
      const v = localStorage.getItem('kimya-exam-pref');
      return v === 'TYT' || v === 'AYT' ? v : 'ALL';
    } catch {
      return 'ALL';
    }
  });

  const [showOnboarding, setShowOnboarding] = useState<boolean>(() => {
    try {
      if (localStorage.getItem('kimya-onboarded')) return false;
      if (localStorage.getItem('kimya-onboarding-pending')) return true;
      if (!localStorage.getItem('kimya-yks-progress-v1')) {
        localStorage.setItem('kimya-onboarding-pending', '1');
        return true;
      }
      return false;
    } catch {
      return false;
    }
  });
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const id = window.setTimeout(() => setShowSplash(false), 1500);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const onOnline = () => setIsOffline(false);
    const onOffline = () => setIsOffline(true);
    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
    };
  }, []);

  const navItems: { id: NavTab; label: string; icon: React.ComponentType<{ size?: number; 'aria-hidden'?: boolean }> }[] = [
    { id: 'curriculum', label: t.nav.curriculum, icon: BookOpen },
    { id: 'lab3d', label: t.nav.lab3d, icon: Box },
    { id: 'cards', label: t.nav.cards, icon: Layers },
    { id: 'games', label: t.nav.games, icon: Gamepad2 },
    { id: 'exams', label: t.nav.exams, icon: FileCheck2 },
    { id: 'profile', label: t.nav.profile, icon: User },
  ];

  return (
    <div className="app-shell">
      <Confetti burstKey={celebrationKey} />

      {showOnboarding && !showSplash && (
        <Onboarding
          lang={lang}
          onSetLanguage={store.setLanguage}
          onFinish={(pref, goal) => {
            setExamPref(pref);
            setDailyGoal(goal);
            setShowOnboarding(false);
            try {
              localStorage.setItem('kimya-onboarded', '1');
              localStorage.removeItem('kimya-onboarding-pending');
              localStorage.setItem('kimya-exam-pref', pref);
            } catch {
              // Ignore storage errors
            }
          }}
        />
      )}

      {showSplash && (
        <div className="app-splash" role="status" aria-label={t.appName}>
          <FlaskMark width={140} height={140} />
          <strong className="splash-word">{t.appName}</strong>
          <span className="splash-subtitle">TYT & AYT Kimya Laboratuvarı</span>
        </div>
      )}

      {/* Desktop & iPad Sidebar */}
      <aside className="app-sidebar">
        <div className="sidebar-brand-head">
          <div className="brand-logo-mark" aria-hidden="true">
            <FlaskMark width={36} height={36} />
          </div>
          <div>
            <strong>{t.appName}</strong>
            <span>TYT & AYT Kimya</span>
          </div>
        </div>

        <nav className="sidebar-nav-list" aria-label="Main Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                className={`sidebar-nav-btn ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon size={19} aria-hidden={true} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-xp-box">
          <div className="progress-meta-row">
            <strong>
              {t.stats.level} {store.level}
            </strong>
            <span>{store.xp} XP</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ inlineSize: `${store.levelProgressPct}%` }} />
          </div>
        </div>
      </aside>

      {/* Glassmorphic Top Telemetry Bar */}
      <header className="app-topbar">
        <div className="brand-mobile-cluster">
          <div className="brand-logo-mark" aria-hidden="true">
            <FlaskMark width={32} height={32} />
          </div>
          <strong className="mobile-only-title">{t.appName}</strong>
        </div>

        <div className="topbar-stats-strip">
          {isOffline && (
            <span className="telemetry-pill offline">
              <WifiOff size={14} aria-hidden="true" />
              <span>{t.offlineModeActive}</span>
            </span>
          )}

          {installPrompt && (
            <button
              type="button"
              className="telemetry-pill gems"
              onClick={async () => {
                await installPrompt.prompt();
                setInstallPrompt(null);
              }}
            >
              <Download size={14} aria-hidden="true" />
              <span>{t.installApp}</span>
            </button>
          )}

          <span className="telemetry-pill streak" title={t.stats.streak}>
            <Flame size={15} aria-hidden="true" />
            <span>
              {store.streakDays} {t.stats.days}
            </span>
          </span>

          <button
            type="button"
            className="theme-toggle-icon-btn"
            aria-label={t.profile.themeLabel}
            onClick={store.quickToggleTheme}
          >
            {store.theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>

          <button
            type="button"
            className={`topbar-profile-btn ${activeTab === 'profile' ? 'active' : ''}`}
            aria-label={t.nav.profile}
            aria-current={activeTab === 'profile' ? 'page' : undefined}
            onClick={() => setActiveTab('profile')}
          >
            <User size={18} aria-hidden="true" />
            <span>Lv.{store.level}</span>
          </button>
        </div>
      </header>

      {/* Main Responsive Stage */}
      <main className="app-main-stage">
        {activeTab === 'curriculum' && (
          <CurriculumView
            key={examPref}
            initialExamFilter={examPref}
            todayCount={todayCount}
            dailyGoal={dailyGoal}
            lang={lang}
            solvedQuestions={store.solvedQuestionIds}
            completedSlideUnits={store.completedSlideUnits}
            onMarkUnitSlidesCompleted={store.markUnitSlidesCompleted}
            onOpenUnitQuiz={(uId) => {
              setTargetExamUnitId(uId);
              setActiveTab('exams');
            }}
            onOpenUnitCards={(uId) => {
              setTargetCardUnitId(uId);
              setActiveTab('cards');
            }}
            onOpen3DScene={(scId) => {
              setTargetSceneId(scId);
              setActiveTab('lab3d');
            }}
          />
        )}

        {activeTab === 'lab3d' && (
          <Kimya3DLab
            lang={lang}
            initialSceneId={targetSceneId}
            resolvedDark={store.theme === 'dark'}
            onEarnXp={(amt) => store.earnXp(amt)}
            onOpenUnitExam={(uId) => {
              setTargetExamUnitId(uId);
              setActiveTab('exams');
            }}
            onNavigateTab={(tab) => setActiveTab(tab as NavTab)}
          />
        )}

        {activeTab === 'cards' && (
          <FlashcardsView
            lang={lang}
            initialUnitId={targetCardUnitId}
            masteredCardIds={store.masteredCardIds}
            onRateCard={store.markCardMastered}
          />
        )}

        {activeTab === 'games' && (
          <GamesHub
            lang={lang}
            highScores={store.gameHighScores}
            onFinishGame={store.recordGameScore}
          />
        )}

        {activeTab === 'exams' && (
          <ExamCenter
            lang={lang}
            preselectedUnitId={targetExamUnitId}
            solvedQuestions={store.solvedQuestionIds}
            wrongQuestionIds={store.mistakeQuestionIds}
            bookmarkedQuestionIds={store.bookmarkedQuestionIds}
            mockBestScores={store.mockBestScores}
            onRecordQuestion={(qId, isCorrect) => {
              store.recordQuestionResult(qId, isCorrect);
              bumpToday();
            }}
            onToggleBookmark={store.toggleBookmark}
            onSaveAttempt={(attempt) => {
              store.recordExamAttempt(attempt);
              setCelebrationKey((k) => k + 1);
            }}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileView
            lang={lang}
            store={store}
            dailyGoal={dailyGoal}
            reduceMotion={reduceMotion}
            sfxOn={sfxOn}
            musicOn={musicOn}
            musicTrackId={musicTrackId}
            musicVolume={musicVolume}
            onSetSfxOn={setSfxOn}
            onSetMusicOn={setMusicOn}
            onSetMusicTrack={setMusicTrack}
            onSetMusicVolume={setMusicVolume}
            onSetDailyGoal={setDailyGoal}
            onSetReduceMotion={setReduceMotion}
            onRelaunchOnboarding={() => setShowOnboarding(true)}
          />
        )}
      </main>

      {/* Mobile Safe-Area Bottom Navigation */}
      <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
        {navItems
          .filter((item) => item.id !== 'profile')
          .map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                className={`mobile-tab-btn ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon size={20} aria-hidden={true} />
                <span>{item.label}</span>
              </button>
            );
          })}
      </nav>
    </div>
  );
};
