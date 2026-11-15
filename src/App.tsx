import React, { useEffect, useState, useMemo } from 'react';
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
  Check,
  AlertCircle,
  X,
  ChevronDown,
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

  const [showProfileSwitcher, setShowProfileSwitcher] = useState<boolean>(false);
  const [warningDismissed, setWarningDismissed] = useState<boolean>(false);

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

  // Active study time tracking: 1 minute interval
  useEffect(() => {
    const timer = window.setInterval(() => {
      if (typeof document !== 'undefined' && !document.hidden) {
        store.recordStudyMinutes(1);
      }
    }, 60000);
    return () => window.clearInterval(timer);
  }, [store]);

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

  // Goal-miss detection
  const todayRecord = store.activeProfile.dailyHistory[store.activeProfile.dailyHistory.length - 1];
  const questionsToday = todayRecord?.questionsSolved ?? 0;
  const studyMinToday = todayRecord?.studyMinutes ?? 0;
  const qGoal = store.activeProfile.dailyQuestionGoal || 30;
  const minGoal = store.activeProfile.dailyStudyMinutesGoal || 30;
  const isGoalMissed = questionsToday < qGoal || studyMinToday < minGoal;

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
          <div className="splash-3d-stage" aria-hidden="true">
            <div className="splash-3d-orbit-ring ring-a" />
            <div className="splash-3d-orbit-ring ring-b" />
            <div className="splash-3d-orbit-ring ring-c" />
            <div className="splash-3d-core">
              <FlaskMark width={144} height={144} />
            </div>
          </div>
          <strong className="splash-word">{t.appName}</strong>
          <span className="splash-subtitle">TYT & AYT Kimya Laboratuvarı</span>
          <div className="splash-3d-pills" aria-hidden="true">
            <span className="splash-pill">1. TYT</span>
            <span className="splash-pill">2. AYT</span>
            <span className="splash-pill">3D Lab</span>
            <span className="splash-pill">AI Koç</span>
          </div>
          <div className="splash-3d-progress" aria-hidden="true">
            <div className="splash-3d-progress-fill" />
          </div>
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

        {/* Sidebar Active Profile Widget */}
        <div
          className="sidebar-profile-widget"
          onClick={() => setActiveTab('profile')}
          role="button"
          tabIndex={0}
          title="Profili Görüntüle"
        >
          <div className="sidebar-profile-avatar">{store.activeProfile.avatar || '👨‍🎓'}</div>
          <div className="sidebar-profile-details">
            <strong className="sidebar-profile-name">{store.activeProfile.name}</strong>
            <span className="sidebar-profile-track">
              {store.activeProfile.targetTrack === 'TYT_ONLY'
                ? 'TYT Odaklı'
                : store.activeProfile.targetTrack === 'AYT_FOCUS'
                ? 'AYT Odaklı'
                : '1. TYT → 2. AYT'}
            </span>
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

      {/* Glassmorphic Top Telemetry Bar with Profile Switcher */}
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

          {/* Quick Profile Switcher Dropdown */}
          <div className="topbar-profile-container">
            <button
              type="button"
              className={`topbar-profile-btn ${activeTab === 'profile' ? 'active' : ''}`}
              aria-label={t.nav.profile}
              onClick={() => setShowProfileSwitcher((prev) => !prev)}
            >
              <span className="topbar-avatar-emoji">{store.activeProfile.avatar || '👨‍🎓'}</span>
              <span className="topbar-name-text">{store.activeProfile.name}</span>
              <span className="topbar-level-tag">Lv.{store.level}</span>
              <ChevronDown size={14} className="topbar-caret" />
            </button>

            {showProfileSwitcher && (
              <div className="topbar-profile-dropdown" role="menu">
                <div className="dropdown-header">
                  <strong>Öğrenci Profilleri ({store.profiles.length})</strong>
                </div>
                <div className="dropdown-profile-list">
                  {store.profiles.map((p) => {
                    const isCur = p.id === store.activeProfileId;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        className={`dropdown-profile-item ${isCur ? 'active' : ''}`}
                        onClick={() => {
                          store.switchProfile(p.id);
                          setShowProfileSwitcher(false);
                        }}
                      >
                        <span className="dropdown-item-avatar">{p.avatar || '👨‍🎓'}</span>
                        <div className="dropdown-item-meta">
                          <strong className="dropdown-item-name">{p.name}</strong>
                          <span className="dropdown-item-sub">
                            {p.stats.xp} XP • {p.targetTrack === 'TYT_ONLY' ? 'TYT' : p.targetTrack === 'AYT_FOCUS' ? 'AYT' : 'TYT→AYT'}
                          </span>
                        </div>
                        {isCur && <Check size={14} className="dropdown-check-icon" />}
                      </button>
                    );
                  })}
                </div>
                <div className="dropdown-footer">
                  <button
                    type="button"
                    className="dropdown-manage-link"
                    onClick={() => {
                      setShowProfileSwitcher(false);
                      setActiveTab('profile');
                    }}
                  >
                    Profil Ekle & Yönet →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Responsive Stage */}
      <main className="app-main-stage">
        {/* Dismissible AI Coach Goal-Miss Warning Banner */}
        {isGoalMissed && !warningDismissed && (
          <div className="goal-miss-top-banner" role="status">
            <div className="banner-content-cluster">
              <span className="banner-robot-icon">🤖</span>
              <div className="banner-text-block">
                <strong>AI Koç Hedef Hatırlatması ({store.activeProfile.name}):</strong>
                <span>
                  Bugünkü hedefine henüz ulaşmadın: {questionsToday}/{qGoal} Soru • {studyMinToday}/{minGoal} Dakika.
                  Günlük hedefini tutturmak için 1 test çöz veya flashcard tekrarı yap!
                </span>
              </div>
            </div>
            <div className="banner-btns-cluster">
              <button
                type="button"
                className="banner-solve-btn"
                onClick={() => setActiveTab('exams')}
              >
                Hemen Soru Çöz
              </button>
              <button
                type="button"
                className="banner-close-btn"
                onClick={() => setWarningDismissed(true)}
                title="Uyarıyı Kapat"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'curriculum' && (
          <CurriculumView
            key={examPref}
            initialExamFilter={examPref}
            todayCount={todayCount}
            dailyGoal={dailyGoal}
            lang={lang}
            solvedQuestions={store.solvedQuestionIds}
            completedSlideUnits={store.completedSlideUnits}
            targetTrack={store.activeProfile.targetTrack}
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
