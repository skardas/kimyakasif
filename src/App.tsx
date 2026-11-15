import React, { useEffect, useRef, useState } from 'react';
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
  X,
  Sparkles,
  Settings2,
} from 'lucide-react';
import { UI_TRANSLATIONS } from './i18n/translations';
import { APP_SHELL_STRINGS } from './i18n/appShellStrings';
import { playClick, playStart, feedbackPlayedWithin } from './audio/sfx';
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

/** Profile avatar as a lit gradient tile: the chosen emoji (user data) or the name's initial. */
const AvatarTile: React.FC<{ avatar?: string; name: string; className?: string }> = ({ avatar, name, className }) => {
  const initial = (name.trim()[0] ?? '?').toLocaleUpperCase();
  return (
    <span className={`ky-tile ky-tile--violet ${avatar ? 'is-emoji' : ''} ${className ?? ''}`} aria-hidden="true">
      {avatar || initial}
    </span>
  );
};

export const App: React.FC = () => {
  const store = useAppStore();
  const { musicOn, musicTrackId, musicVolume, setMusicOn, setMusicTrack, setMusicVolume } =
    useBackgroundMusic();
  const { dailyGoal, reduceMotion, sfxOn, setSfxOn, todayCount, setDailyGoal, setReduceMotion, bumpToday } =
    usePreferences();

  const lang = store.language;
  const t = UI_TRANSLATIONS[lang];
  const sh = APP_SHELL_STRINGS[lang] ?? APP_SHELL_STRINGS.tr;

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
  const switcherRef = useRef<HTMLDivElement>(null);

  // Close the profile switcher on outside press or Escape
  useEffect(() => {
    if (!showProfileSwitcher) return;
    const onDown = (e: PointerEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(e.target as Node)) setShowProfileSwitcher(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowProfileSwitcher(false);
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [showProfileSwitcher]);

  // App-wide tactile UI click. Runs in the bubble phase on window, i.e. after React's
  // handlers, so it stays silent when a handler already played feedback (correct, wrong,
  // start…). data-sfx="start" plays the start sound instead; data-sfx="none" mutes.
  useEffect(() => {
    let lastClickAt = 0;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const el = target?.closest?.(
        'button, [role="button"], [role="tab"], [role="switch"], [role="radio"], [role="option"], [role="menuitem"], [role="menuitemradio"], a[href], summary, input[type="checkbox"], input[type="radio"]'
      );
      if (!el) return;
      if ((el as HTMLButtonElement).disabled || el.getAttribute('aria-disabled') === 'true') return;
      const mode = el.getAttribute('data-sfx') ?? el.closest('[data-sfx]')?.getAttribute('data-sfx');
      if (mode === 'none') return;
      if (feedbackPlayedWithin(150)) return;
      const now = performance.now();
      if (now - lastClickAt < 60) return; // label + input double click events
      lastClickAt = now;
      if (mode === 'start') playStart();
      else playClick();
    };
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

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

  const profile = store.activeProfile;
  const trackLabel = (track: string) =>
    track === 'TYT_ONLY' ? sh.trackTytOnly : track === 'AYT_FOCUS' ? sh.trackAytFocus : sh.trackSequential;
  const pageTitle = navItems.find((n) => n.id === activeTab)?.label ?? t.appName;

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
        <div className="app-splash" role="status" aria-label={sh.splashLoading}>
          <div className="ky-floor" aria-hidden="true" />
          <div className="splash-3d-stage" aria-hidden="true">
            <div className="splash-3d-glow" />
            <div className="splash-3d-orbit-ring ring-a" />
            <div className="splash-3d-orbit-ring ring-b" />
            <div className="splash-3d-core">
              <FlaskMark width={260} height={260} />
            </div>
          </div>
          <strong className="splash-word">
            Kimya <em>3D</em>
          </strong>
          <span className="splash-subtitle">{sh.splashSubtitle}</span>
          <div className="splash-footer" aria-hidden="true">
            <div className="splash-3d-progress">
              <div className="splash-3d-progress-fill" />
            </div>
            <span className="splash-loading">{sh.splashLoading}</span>
          </div>
        </div>
      )}

      {/* Desktop & iPad Sidebar */}
      <aside className="app-sidebar">
        <div className="sidebar-brand-head">
          <div className="brand-logo-mark" aria-hidden="true">
            <FlaskMark width={34} height={34} variant="mark" />
          </div>
          <div className="sidebar-brand-text">
            <strong>
              Kimya <em>3D</em>
            </strong>
            <span>{sh.brandTagline}</span>
          </div>
        </div>

        <nav className="sidebar-nav-list" aria-label={t.appName}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                className={`sidebar-nav-btn ${activeTab === item.id ? 'active' : ''}`}
                aria-current={activeTab === item.id ? 'page' : undefined}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon size={20} aria-hidden={true} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-xp-box">
          <button
            type="button"
            className="sidebar-profile-widget"
            onClick={() => setActiveTab('profile')}
            aria-label={sh.viewProfile}
          >
            <AvatarTile avatar={profile.avatar} name={profile.name} className="sidebar-profile-avatar" />
            <span className="sidebar-profile-details">
              <strong className="sidebar-profile-name">{profile.name}</strong>
              <span className="sidebar-profile-track">{trackLabel(profile.targetTrack)}</span>
            </span>
          </button>
          <div className="progress-meta-row">
            <strong>
              {t.stats.level} {store.level}
            </strong>
            <span className="ky-mono">{store.xp} XP</span>
          </div>
          <div className="ky-track">
            <div className="ky-fill ky-fill--gold" style={{ inlineSize: `${Math.max(3, store.levelProgressPct)}%` }} />
          </div>
        </div>
      </aside>

      {/* Top bar: identity on phones, page title on tablet/desktop */}
      <header className="app-topbar">
        <button
          type="button"
          className="topbar-identity"
          onClick={() => setActiveTab('profile')}
          aria-label={sh.viewProfile}
        >
          <AvatarTile avatar={profile.avatar} name={profile.name} className="topbar-avatar" />
          <span className="topbar-identity-text">
            <span className="topbar-greeting">{sh.greeting}</span>
            <span className="topbar-name-row">
              <span className="topbar-name">{profile.name}</span>
              <span className="ky-chip ky-chip--accent topbar-level">Lv.{store.level}</span>
            </span>
          </span>
        </button>

        <h1 className="topbar-page-title">{pageTitle}</h1>

        <div className="topbar-actions">
          {isOffline && (
            <span className="ky-chip ky-chip--ok topbar-offline" title={t.offlineModeActive}>
              <WifiOff size={14} aria-hidden="true" />
              <span className="topbar-offline-label">{t.offlineModeActive}</span>
            </span>
          )}

          {installPrompt && (
            <button
              type="button"
              className="ky-icon-btn topbar-install"
              aria-label={t.installApp}
              title={t.installApp}
              onClick={async () => {
                await installPrompt.prompt();
                setInstallPrompt(null);
              }}
            >
              <Download size={18} aria-hidden="true" />
            </button>
          )}

          <span className="ky-chip ky-chip--gold topbar-streak" title={t.stats.streak}>
            <Flame size={17} aria-hidden="true" />
            <span>
              {store.streakDays}
              <span className="topbar-streak-label"> {sh.streakDays(store.streakDays).replace(/^\d+\s*/, '')}</span>
            </span>
          </span>

          <button
            type="button"
            className="ky-icon-btn"
            aria-label={sh.toggleTheme}
            title={t.profile.themeLabel}
            onClick={store.quickToggleTheme}
          >
            {store.theme === 'dark' ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
          </button>

          {/* Quick Profile Switcher Dropdown */}
          <div className="topbar-profile-container" ref={switcherRef}>
            <button
              type="button"
              className={`ky-icon-btn ${activeTab === 'profile' ? 'is-on' : ''}`}
              aria-label={sh.profileSettings}
              aria-haspopup="menu"
              aria-expanded={showProfileSwitcher}
              onClick={() => setShowProfileSwitcher((prev) => !prev)}
            >
              <User size={20} aria-hidden="true" />
            </button>

            {showProfileSwitcher && (
              <div className="topbar-profile-dropdown" role="menu">
                <div className="dropdown-header">
                  <span className="ky-eyebrow">{sh.profilesTitle(store.profiles.length)}</span>
                </div>
                <div className="dropdown-profile-list">
                  {store.profiles.map((p) => {
                    const isCur = p.id === store.activeProfileId;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        role="menuitemradio"
                        aria-checked={isCur}
                        className={`dropdown-profile-item ${isCur ? 'active' : ''}`}
                        onClick={() => {
                          store.switchProfile(p.id);
                          setShowProfileSwitcher(false);
                        }}
                      >
                        <AvatarTile avatar={p.avatar} name={p.name} className="dropdown-item-avatar" />
                        <span className="dropdown-item-meta">
                          <strong className="dropdown-item-name">{p.name}</strong>
                          <span className="dropdown-item-sub">
                            {p.stats.xp} XP · {trackLabel(p.targetTrack)}
                          </span>
                        </span>
                        {isCur && <Check size={18} className="dropdown-check-icon" aria-hidden="true" />}
                      </button>
                    );
                  })}
                </div>
                <div className="dropdown-footer">
                  <button
                    type="button"
                    role="menuitem"
                    className="ky-btn ky-btn--quiet ky-btn--sm ky-btn--block"
                    onClick={() => {
                      setShowProfileSwitcher(false);
                      setActiveTab('profile');
                    }}
                  >
                    <Settings2 size={18} aria-hidden="true" />
                    {sh.manageProfiles}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Responsive Stage */}
      <main className="app-main-stage">
        {/* Dismissible AI Coach goal reminder */}
        {isGoalMissed && !warningDismissed && (
          <div className="goal-miss-top-banner ky-card" role="status">
            <span className="ky-tile ky-tile--violet ky-tile--sm" aria-hidden="true">
              <Sparkles size={20} />
            </span>
            <div className="banner-text-block">
              <strong>{sh.coachTitle}</strong>
              <span>{sh.coachBody}</span>
              <span className="banner-stats">
                {questionsToday}/{qGoal} {sh.questionsUnit} · {studyMinToday}/{minGoal} {sh.minutesUnit}
              </span>
            </div>
            <div className="banner-btns-cluster">
              <button
                type="button"
                className="ky-btn ky-btn--primary ky-btn--sm"
                onClick={() => setActiveTab('exams')}
              >
                {sh.solveNow}
              </button>
              <button
                type="button"
                className="ky-icon-btn"
                onClick={() => setWarningDismissed(true)}
                aria-label={sh.dismiss}
                title={sh.dismiss}
              >
                <X size={18} aria-hidden="true" />
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
            resolvedDark={true}
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

      {/* Floating bottom tab bar (phones & tablet portrait) */}
      <nav className="mobile-bottom-nav" aria-label={t.appName}>
        <div className="tabbar">
          {navItems
            .filter((item) => item.id !== 'profile')
            .map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`mobile-tab-btn ${activeTab === item.id ? 'active' : ''}`}
                  aria-current={activeTab === item.id ? 'page' : undefined}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon size={22} aria-hidden={true} />
                  <span>{item.label}</span>
                </button>
              );
            })}
        </div>
      </nav>
    </div>
  );
};
