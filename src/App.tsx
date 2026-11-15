import React, { useEffect, useState } from 'react';
import { BookOpen, Box, Layers, Gamepad2, FileCheck2, User } from 'lucide-react';
import { UI_TRANSLATIONS } from './i18n/translations';
import { APP_SHELL_STRINGS } from './i18n/appShellStrings';
import { redesignStrings } from './i18n/redesignStrings';
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
import { ProfileView, type ProfileTab } from './components/profile/ProfileView';
import { SettingsView } from './components/settings/SettingsView';

export type NavTab = 'curriculum' | 'lab3d' | 'cards' | 'games' | 'exams' | 'profile' | 'settings';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
}

export const App: React.FC = () => {
  const store = useAppStore();
  const { musicOn, musicTrackId, musicVolume, setMusicOn, setMusicTrack, setMusicVolume } =
    useBackgroundMusic();
  const {
    dailyGoal,
    reduceMotion,
    sfxOn,
    setSfxOn,
    textSize,
    textScale,
    setTextSize,
    todayCount,
    setDailyGoal,
    setReduceMotion,
    bumpToday,
  } = usePreferences();

  const lang = store.language;
  const t = UI_TRANSLATIONS[lang];
  const sh = APP_SHELL_STRINGS[lang] ?? APP_SHELL_STRINGS.tr;
  const r = redesignStrings(lang);

  const [activeTab, setActiveTab] = useState<NavTab>('curriculum');
  const [profileTab, setProfileTab] = useState<ProfileTab>('dashboard');
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

  const navItems: { id: NavTab; label: string; icon: React.ComponentType<{ size?: number; 'aria-hidden'?: boolean }> }[] = [
    { id: 'curriculum', label: t.nav.curriculum, icon: BookOpen },
    { id: 'lab3d', label: t.nav.lab3d, icon: Box },
    { id: 'cards', label: t.nav.cards, icon: Layers },
    { id: 'games', label: t.nav.games, icon: Gamepad2 },
    { id: 'exams', label: t.nav.exams, icon: FileCheck2 },
    { id: 'profile', label: r.navProfileSettings, icon: User },
  ];

  const profile = store.activeProfile;
  const trackLabel = (track: string) =>
    track === 'TYT_ONLY' ? sh.trackTytOnly : track === 'AYT_FOCUS' ? sh.trackAytFocus : sh.trackSequential;
  const isNavOn = (id: NavTab) => activeTab === id || (id === 'profile' && activeTab === 'settings');

  const openProfile = (tab: ProfileTab = 'dashboard') => {
    setProfileTab(tab);
    setActiveTab('profile');
  };

  return (
    <div className="app-shell" style={{ ['--fs' as string]: String(textScale) }}>
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

      {/* iPad & desktop sidebar (hub screens) */}
      <aside className="app-sidebar">
        <div className="sidebar-brand-head">
          <div className="brand-logo-mark" aria-hidden="true">
            <FlaskMark width={32} height={32} variant="mark" />
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
            const on = isNavOn(item.id);
            return (
              <button
                key={item.id}
                type="button"
                className={`sidebar-nav-btn ${on ? 'active' : ''}`}
                aria-current={on ? 'page' : undefined}
                onClick={() => (item.id === 'profile' ? openProfile() : setActiveTab(item.id))}
              >
                <Icon size={20} aria-hidden={true} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button type="button" className="sidebar-xp-box" onClick={() => openProfile()} aria-label={sh.viewProfile}>
          <span className="sidebar-xp-name">
            <span>{profile.name}</span>
            <span className="ky-chip ky-chip--accent">Lv.{store.level}</span>
          </span>
          <span className="sidebar-xp-meta">
            <span>{trackLabel(profile.targetTrack)}</span>
            <span className="ky-mono">{store.xp} XP</span>
          </span>
          <span className="ky-track" aria-hidden="true">
            <span className="ky-fill ky-fill--gold" style={{ display: 'block', inlineSize: `${Math.max(3, store.levelProgressPct)}%` }} />
          </span>
        </button>
      </aside>

      <div className="app-col">
        <main className="app-main-stage">
          {activeTab === 'curriculum' && (
            <CurriculumView
              key={examPref}
              initialExamFilter={examPref}
              todayCount={todayCount}
              dailyGoal={dailyGoal}
              lang={lang}
              isOffline={isOffline}
              solvedQuestions={store.solvedQuestionIds}
              completedSlideUnits={store.completedSlideUnits}
              onMarkUnitSlidesCompleted={store.markUnitSlidesCompleted}
              onOpenProfile={() => openProfile()}
              onOpenSettings={() => setActiveTab('settings')}
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
              key={profileTab}
              lang={lang}
              store={store}
              initialTab={profileTab}
              onOpenSettings={() => setActiveTab('settings')}
            />
          )}

          {activeTab === 'settings' && (
            <SettingsView
              lang={lang}
              store={store}
              dailyGoal={dailyGoal}
              reduceMotion={reduceMotion}
              sfxOn={sfxOn}
              textSize={textSize}
              musicOn={musicOn}
              musicTrackId={musicTrackId}
              musicVolume={musicVolume}
              onSetSfxOn={setSfxOn}
              onSetTextSize={setTextSize}
              onSetMusicOn={setMusicOn}
              onSetMusicTrack={setMusicTrack}
              onSetMusicVolume={setMusicVolume}
              onSetDailyGoal={setDailyGoal}
              onSetReduceMotion={setReduceMotion}
              onRelaunchOnboarding={() => setShowOnboarding(true)}
              onOpenProfiles={() => openProfile('profiles')}
              onBack={() => setActiveTab('curriculum')}
              onInstall={
                installPrompt
                  ? async () => {
                      await installPrompt.prompt();
                      setInstallPrompt(null);
                    }
                  : undefined
              }
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
    </div>
  );
};
