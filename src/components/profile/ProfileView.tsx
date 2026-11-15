import React, { useState, useMemo } from 'react';
import {
  User,
  Volume2,
  VolumeX,
  Music,
  RotateCcw,
  Palette,
  Globe,
  BarChart3,
  BookOpen,
  Star,
  Settings,
  CheckCircle2,
  Clock,
  Sparkles,
  Play,
  Lock,
  Flame,
  Award,
  Bell,
  BellOff,
  UserPlus,
  Trash2,
  Target,
  Check,
  ArrowLeftRight,
  Wind,
  Zap,
  Search,
  FlaskConical,
  Scale,
  Trophy,
  Crown,
} from 'lucide-react';
import type { CompiledQuestion, LanguageCode } from '../../types/chemistry';
import type { AppState, LearnerProfile } from '../../store/useAppStore';
import type { DailyGoal } from '../../store/usePreferences';
import { LANGUAGES, UI_TRANSLATIONS } from '../../i18n/translations';
import { SHELL_STRINGS } from '../../i18n/shellStrings';
import { MUSIC_TRACKS } from '../../audio/musicEngine';
import { ALL_CHEMISTRY_UNITS } from '../../data/units';
import { compileUnitQuestions } from '../../engine/questionGenerator';
import { QuizSessionModal } from '../exams/QuizSessionModal';
import { StudyStatsDashboard } from '../dashboard/StudyStatsDashboard';
import { notificationManager } from '../../utils/notificationManager';

export type ProfileTab = 'dashboard' | 'analytics' | 'mistakes' | 'bookmarks' | 'profiles' | 'settings';

export interface ProfileViewProps {
  lang: LanguageCode;
  store: AppState;
  dailyGoal: DailyGoal;
  reduceMotion: boolean;
  sfxOn: boolean;
  musicOn: boolean;
  musicTrackId: string;
  musicVolume: number;
  onSetSfxOn: (v: boolean) => void;
  onSetMusicOn: (v: boolean) => void;
  onSetMusicTrack: (t: string) => void;
  onSetMusicVolume: (v: number) => void;
  onSetDailyGoal: (g: DailyGoal) => void;
  onSetReduceMotion: (r: boolean) => void;
  onRelaunchOnboarding: () => void;
}

interface GamificationBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  isUnlocked: boolean;
}

const BADGE_ICON: Record<string, React.ReactNode> = {
  b1: <Zap size={18} />,
  b2: <Search size={18} />,
  b3: <FlaskConical size={18} />,
  b4: <Scale size={18} />,
  b5: <Target size={18} />,
  b6: <Trophy size={18} />,
  b7: <Flame size={18} />,
  b8: <Crown size={18} />,
};

const BADGE_TILE: Record<string, string> = {
  b1: 'ky-tile--gold',
  b2: 'ky-tile--blue',
  b3: 'ky-tile--ok',
  b4: 'ky-tile--violet',
  b5: 'ky-tile--rose',
  b6: 'ky-tile--gold',
  b7: 'ky-tile--rose',
  b8: 'ky-tile--violet',
};

const AVATAR_OPTIONS = ['👨‍🎓', '👩‍🎓', '🔬', '⚛️', '🧪', '🏆', '🚀', '🎯'];

export const ProfileView: React.FC<ProfileViewProps> = ({
  lang,
  store,
  dailyGoal,
  reduceMotion,
  sfxOn,
  musicOn,
  musicTrackId,
  musicVolume,
  onSetSfxOn,
  onSetMusicOn,
  onSetMusicTrack,
  onSetMusicVolume,
  onSetDailyGoal,
  onSetReduceMotion,
  onRelaunchOnboarding,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const sh = SHELL_STRINGS[lang];
  const activeProfile = store.activeProfile;

  // Active segmented tab
  const [activeTab, setActiveTab] = useState<ProfileTab>('dashboard');

  // Hata Defteri Filter: 'ALL' | 'TYT' | 'AYT' | unitId
  const [mistakeExamFilter, setMistakeExamFilter] = useState<'ALL' | 'TYT' | 'AYT'>('ALL');
  const [mistakeUnitFilter, setMistakeUnitFilter] = useState<string>('ALL');

  // Profile Manager Modal / Form State
  const [showNewProfileModal, setShowNewProfileModal] = useState(false);
  const [newProfileName, setNewProfileName] = useState('');
  const [newProfileAvatar, setNewProfileAvatar] = useState('👨‍🎓');
  const [newProfileTrack, setNewProfileTrack] = useState<'TYT_FIRST' | 'TYT_ONLY' | 'AYT_FOCUS'>('TYT_FIRST');

  // Notification Test Feedback
  const [notificationFeedback, setNotificationFeedback] = useState<string | null>(null);

  // Active Quiz Modal Session (for retrying mistakes or bookmarks)
  const [activeQuizSession, setActiveQuizSession] = useState<{
    title: string;
    subtitle?: string;
    examType: 'MISTAKE' | 'BOOKMARK';
    questions: CompiledQuestion[];
  } | null>(null);

  // Stats Calculations
  const totalSolved = Object.keys(store.solvedQuestionIds).length;
  const correctCount = Object.values(store.solvedQuestionIds).filter((v) => v === true).length;
  const accuracyPercent = totalSolved > 0 ? Math.round((correctCount / totalSolved) * 100) : 0;

  // Resolve Questions on Demand
  const resolveQuestionsByIds = (ids: string[]): CompiledQuestion[] => {
    const unitMap = new Map<string, CompiledQuestion[]>();
    const resolved: CompiledQuestion[] = [];

    ids.forEach((id) => {
      const uId = id.slice(0, 3);
      if (!unitMap.has(uId)) {
        const u = ALL_CHEMISTRY_UNITS.find((unit) => unit.id === uId);
        if (u) {
          unitMap.set(uId, compileUnitQuestions(u, lang));
        } else {
          unitMap.set(uId, []);
        }
      }
      const pool = unitMap.get(uId)!;
      const found = pool.find((q) => q.id === id);
      if (found) resolved.push(found);
    });

    return resolved;
  };

  // Filtered Mistakes
  const filteredMistakes = useMemo(() => {
    const allMistakeQs = resolveQuestionsByIds(store.mistakeQuestionIds);
    return allMistakeQs.filter((q) => {
      if (mistakeExamFilter === 'TYT' && q.exam !== 'TYT') return false;
      if (mistakeExamFilter === 'AYT' && q.exam !== 'AYT') return false;
      if (mistakeUnitFilter !== 'ALL' && q.unitId !== mistakeUnitFilter) return false;
      return true;
    });
  }, [store.mistakeQuestionIds, mistakeExamFilter, mistakeUnitFilter, lang]);

  // Starred Questions
  const starredQuestions = useMemo(() => {
    return resolveQuestionsByIds(store.bookmarkedQuestionIds);
  }, [store.bookmarkedQuestionIds, lang]);

  // 8 Gamification Badges
  const badges: GamificationBadge[] = useMemo(() => {
    const hasHighExamNet = store.examResults.some((r) => r.netScore >= 14);
    return [
      {
        id: 'b1',
        title: 'İlk Kıvılcım',
        description: 'İlk soruyu başarıyla çözdün',
        icon: '⚡',
        isUnlocked: totalSolved >= 1,
      },
      {
        id: 'b2',
        title: 'Element Avcısı',
        description: '50 soru çözerek temelini attın',
        icon: '🔍',
        isUnlocked: totalSolved >= 50,
      },
      {
        id: 'b3',
        title: 'Laboratuvar Çırağı',
        description: '500+ Deneyim Puanına (XP) ulaştın',
        icon: '🧪',
        isUnlocked: store.xp >= 500,
      },
      {
        id: 'b4',
        title: 'Denge Ustası',
        description: '200 soru çözerek kavramları pekiştirdin',
        icon: '⚖️',
        isUnlocked: totalSolved >= 200,
      },
      {
        id: 'b5',
        title: 'Hata Avcısı',
        description: 'Hatalarının üzerine gidip ustalaştın',
        icon: '🎯',
        isUnlocked: totalSolved >= 20 && store.mistakeQuestionIds.length <= 5,
      },
      {
        id: 'b6',
        title: 'Deneme Şampiyonu',
        description: 'En az 5 deneme sınavını tamamladın',
        icon: '🏆',
        isUnlocked: store.examResults.length >= 5,
      },
      {
        id: 'b7',
        title: 'Ateşli Seri',
        description: '3 gün üst üste kimya çalıştın',
        icon: '🔥',
        isUnlocked: store.streakDays >= 3,
      },
      {
        id: 'b8',
        title: 'Derece & Tıp Hedefi',
        description: '14+ Net skoruna veya 1.000 XP barajına ulaştın',
        icon: '👑',
        isUnlocked: hasHighExamNet || store.xp >= 1000,
      },
    ];
  }, [totalSolved, store.xp, store.mistakeQuestionIds.length, store.examResults, store.streakDays]);

  // Handle Create Profile
  const handleCreateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProfileName.trim()) return;
    const newId = store.createProfile(newProfileName.trim(), newProfileAvatar, newProfileTrack);
    setShowNewProfileModal(false);
    setNewProfileName('');
    setActiveTab('dashboard');
  };

  // Handle Notifications Toggle
  const handleToggleNotifications = async (enabled: boolean) => {
    store.updateProfile(activeProfile.id, { notificationsEnabled: enabled });
    if (enabled) {
      const granted = await notificationManager.requestPermission();
      if (granted) {
        await notificationManager.scheduleDailyReminder(
          activeProfile.reminderTime || '20:00',
          'Kimya YKS Günlük Çalışma Hatırlatması',
          `Merhaba ${activeProfile.name}! Günlük hedefini tamamlamak için 15 dakika ayır.`,
          true
        );
        setNotificationFeedback('Bildirimler aktif edildi ve günlük hatırlatma planlandı.');
      } else {
        setNotificationFeedback('Tarayıcı bildirim izni verilmedi.');
      }
    } else {
      await notificationManager.cancelAllReminders();
      setNotificationFeedback('Bildirimler tamamen kapatıldı.');
    }
    setTimeout(() => setNotificationFeedback(null), 4000);
  };

  // Handle Reminder Time Change
  const handleChangeReminderTime = (time: string) => {
    store.updateProfile(activeProfile.id, { reminderTime: time });
    if (activeProfile.notificationsEnabled) {
      notificationManager.scheduleDailyReminder(
        time,
        'Kimya YKS Günlük Çalışma Hatırlatması',
        `Merhaba ${activeProfile.name}! Günlük hedefini tamamlamak için 15 dakika ayır.`,
        true
      );
    }
  };

  const trackLabel = (tr: string) =>
    tr === 'TYT_ONLY' ? 'Sadece TYT' : tr === 'AYT_FOCUS' ? 'AYT Odaklı' : 'TYT → AYT';
  const currentTrack = MUSIC_TRACKS.find((x) => x.id === musicTrackId) ?? MUSIC_TRACKS[0];
  const currentTrackTitle = currentTrack ? currentTrack.title[lang] || currentTrack.title.tr : '';
  const volPct = Math.round(Math.max(0, Math.min(1, musicVolume)) * 100);

  const tabs: { id: ProfileTab; icon: React.ReactNode; label: string }[] = [
    { id: 'dashboard', icon: <Sparkles size={16} aria-hidden="true" />, label: 'AI Koç' },
    { id: 'analytics', icon: <BarChart3 size={16} aria-hidden="true" />, label: 'Analitik' },
    { id: 'mistakes', icon: <RotateCcw size={16} aria-hidden="true" />, label: `Hata Defteri (${store.mistakeQuestionIds.length})` },
    { id: 'bookmarks', icon: <Star size={16} aria-hidden="true" />, label: `Yıldızlı (${store.bookmarkedQuestionIds.length})` },
    { id: 'profiles', icon: <User size={16} aria-hidden="true" />, label: `Profiller (${store.profiles.length})` },
    { id: 'settings', icon: <Settings size={16} aria-hidden="true" />, label: sh.settings },
  ];

  const goalOptions: DailyGoal[] = [10, 20, 40];

  const renderQuestionRow = (q: CompiledQuestion, mode: 'mistake' | 'bookmark') => (
    <li key={q.id} className="ky-card pf-qrow">
      <div className="pf-qrow__main">
        <div className="pf-qrow__meta">
          <span className={`ky-chip ${mode === 'mistake' ? (q.exam === 'TYT' ? 'ky-chip--accent' : 'ky-chip--violet') : 'ky-chip--gold'}`}>
            {mode === 'mistake' ? `${q.exam} · ${q.unitId.toUpperCase()}` : q.unitId.toUpperCase()}
          </span>
          <span className="pf-qrow__id ky-mono">{q.id}</span>
        </div>
        <p className="pf-qrow__stem">{q.stem}</p>
      </div>
      <div className="pf-qrow__actions">
        {mode === 'bookmark' && (
          <button
            type="button"
            className="ky-icon-btn is-on"
            onClick={() => store.toggleBookmark(q.id)}
            aria-label="Yıldızdan Çıkar"
            title="Yıldızdan Çıkar"
          >
            <Star size={18} fill="currentColor" aria-hidden="true" />
          </button>
        )}
        <button
          type="button"
          className="ky-btn ky-btn--quiet ky-btn--sm"
          onClick={() =>
            setActiveQuizSession(
              mode === 'mistake'
                ? { title: `${q.unitId.toUpperCase()} • Hata Tekrarı`, subtitle: 'ÖSYM İkiz Soru Çözümü', examType: 'MISTAKE', questions: [q] }
                : { title: `${q.unitId.toUpperCase()} • Yıldızlı Soru`, subtitle: 'Özel Pratik', examType: 'BOOKMARK', questions: [q] }
            )
          }
        >
          {mode === 'mistake' ? 'Tekrar Çöz' : 'Çöz'}
        </button>
      </div>
    </li>
  );

  return (
    <section className="pf" aria-label={t.nav.profile}>
      {/* Header stage: avatar, name, level/track chips, XP track */}
      <div className="ky-stage pf-hero">
        <span className="ky-tile ky-tile--violet ky-tile--lg pf-hero__avatar" aria-hidden="true">
          {activeProfile.avatar || '👨‍🎓'}
        </span>
        <div className="pf-hero__body">
          <div className="pf-hero__name-row">
            <h1 className="pf-hero__name ky-disp">{activeProfile.name}</h1>
            <span className="ky-chip ky-chip--accent">
              {t.stats.level} {store.level}
            </span>
          </div>
          <p className="pf-hero__track">{trackLabel(activeProfile.targetTrack)}</p>
          <div className="pf-hero__xp">
            <div
              className="ky-track pf-hero__xp-track"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={store.levelProgressPct}
              aria-label={`${store.xp} XP`}
            >
              <div className="ky-fill ky-fill--gold" style={{ inlineSize: `${Math.max(3, store.levelProgressPct)}%` }} />
            </div>
            <span className="ky-mono pf-hero__xp-val">{store.xp} XP</span>
          </div>
        </div>
        <button
          type="button"
          className="ky-icon-btn pf-hero__switch"
          onClick={() => setActiveTab('profiles')}
          aria-label={`Profil Değiştir veya Yönet (${store.profiles.length})`}
          title="Profil Değiştir veya Yönet"
        >
          <ArrowLeftRight size={18} aria-hidden="true" />
        </button>
      </div>

      {/* Stat wells */}
      <div className="pf-stats" role="group" aria-label={t.stats.xp}>
        <div className="ky-well pf-stat">
          <p className="ky-mono ky-disp pf-stat__v pf-stat__v--gold">
            <Flame size={16} aria-hidden="true" /> {store.streakDays}
          </p>
          <p className="pf-stat__l">gün seri</p>
        </div>
        <div className="ky-well pf-stat">
          <p className="ky-mono ky-disp pf-stat__v">{totalSolved}</p>
          <p className="pf-stat__l">çözülen soru</p>
        </div>
        <div className="ky-well pf-stat">
          <p className="ky-mono ky-disp pf-stat__v pf-stat__v--ok">%{accuracyPercent}</p>
          <p className="pf-stat__l">doğruluk</p>
        </div>
      </div>

      {/* Tabs */}
      <nav className="ky-scroll-x pf-tabs" role="tablist" aria-label="Profil Sekmeleri">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`ky-chip ky-chip--lg pf-tab ${activeTab === tab.id ? 'on' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>

      {/* TAB 0: AI COACH & DASHBOARD */}
      {activeTab === 'dashboard' && (
        <StudyStatsDashboard
          profile={activeProfile}
          lang={lang}
          onNavigateTab={(tab, meta) => {
            if (tab === 'exams' && meta?.mode === 'mistakes') {
              setActiveTab('mistakes');
            }
          }}
        />
      )}

      {/* TAB 1: ANALYTICS */}
      {activeTab === 'analytics' && (
        <div className="pf-stack">
          <div className="pf-metrics">
            <div className="ky-well pf-metric">
              <span className="pf-metric__l">TOPLAM XP</span>
              <span className="ky-mono ky-disp pf-metric__v pf-c-accent">{store.xp}</span>
            </div>
            <div className="ky-well pf-metric">
              <span className="pf-metric__l">DOĞRU CEVAP</span>
              <span className="ky-mono ky-disp pf-metric__v pf-c-ok">{correctCount}</span>
            </div>
            <div className="ky-well pf-metric">
              <span className="pf-metric__l">HATA SAYISI</span>
              <span className="ky-mono ky-disp pf-metric__v pf-c-bad">{store.mistakeQuestionIds.length}</span>
            </div>
            <div className="ky-well pf-metric">
              <span className="pf-metric__l">TAMAMLANAN DENEME</span>
              <span className="ky-mono ky-disp pf-metric__v pf-c-violet">{store.examResults.length}</span>
            </div>
          </div>

          <div className="ky-card pf-panel">
            <div className="pf-panel__head">
              <Award size={20} aria-hidden="true" />
              <h3>Kazanılan Başarı Rozetleri (8 Başarı)</h3>
            </div>
            <ul className="pf-badges">
              {badges.map((b) => (
                <li key={b.id} className={`ky-well pf-badge ${b.isUnlocked ? 'is-unlocked' : ''}`}>
                  <span className={`ky-tile ky-tile--sm ${b.isUnlocked ? BADGE_TILE[b.id] : 'ky-tile--slate'}`} aria-hidden="true">
                    {b.isUnlocked ? BADGE_ICON[b.id] : <Lock size={16} />}
                  </span>
                  <span className="pf-badge__text">
                    <strong>{b.title}</strong>
                    <span>{b.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ky-card pf-panel">
            <div className="pf-panel__head">
              <BookOpen size={20} aria-hidden="true" />
              <h3>24 Ünite Ustalık Dağılımı</h3>
            </div>
            <ul className="pf-units">
              {ALL_CHEMISTRY_UNITS.map((u) => {
                let solved = 0;
                for (let q = 1; q <= 128; q++) {
                  const qId = `${u.id}-q${String(q).padStart(3, '0')}`;
                  if (store.solvedQuestionIds[qId]) solved++;
                }
                const pct = Math.min(100, Math.round((solved / 128) * 100));
                return (
                  <li key={u.id} className="pf-unit">
                    <span className="pf-unit__id ky-mono">{u.id.toUpperCase()}</span>
                    <span className="pf-unit__name">{u.title[lang] || u.title.tr}</span>
                    <div className="ky-track pf-unit__bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
                      <div className={`ky-fill ${u.exam === 'TYT' ? '' : 'ky-fill--violet'}`} style={{ inlineSize: `${pct}%` }} />
                    </div>
                    <span className="pf-unit__pct ky-mono">%{pct}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {/* TAB 2: MISTAKES */}
      {activeTab === 'mistakes' && (
        <div className="pf-stack">
          <div className="pf-listhead">
            <p>
              Yanlış çözdüğün <strong>{store.mistakeQuestionIds.length}</strong> soru listeleniyor.
            </p>
            {filteredMistakes.length > 0 && (
              <button
                type="button"
                className="ky-btn ky-btn--primary ky-btn--sm"
                onClick={() =>
                  setActiveQuizSession({
                    title: 'Hata Defteri Tekrar Sınavı',
                    subtitle: `${filteredMistakes.length} Yanlış Soru`,
                    examType: 'MISTAKE',
                    questions: filteredMistakes,
                  })
                }
              >
                <Play size={16} aria-hidden="true" />
                <span>Tüm Hataları Tekrar Çöz ({filteredMistakes.length})</span>
              </button>
            )}
          </div>

          {filteredMistakes.length === 0 ? (
            <div className="ky-card ky-empty">
              <span className="ky-tile ky-tile--ok" aria-hidden="true"><CheckCircle2 size={26} /></span>
              <h3>Harika! Hata Defterin Tertemiz</h3>
              <p>Yanlış yaptığın hiçbir soru bulunmuyor veya tüm hatalarını çözerek ustalaştın.</p>
            </div>
          ) : (
            <ul className="pf-qlist">
              {filteredMistakes.map((q) => renderQuestionRow(q, 'mistake'))}
            </ul>
          )}
        </div>
      )}

      {/* TAB 3: BOOKMARKS */}
      {activeTab === 'bookmarks' && (
        <div className="pf-stack">
          <div className="pf-listhead">
            <p>
              Yıldızladığın <strong>{store.bookmarkedQuestionIds.length}</strong> soru listeleniyor.
            </p>
            {starredQuestions.length > 0 && (
              <button
                type="button"
                className="ky-btn ky-btn--primary ky-btn--sm"
                onClick={() =>
                  setActiveQuizSession({
                    title: 'Yıldızlı Sorular Tekrar Sınavı',
                    subtitle: `${starredQuestions.length} Soru`,
                    examType: 'BOOKMARK',
                    questions: starredQuestions,
                  })
                }
              >
                <Play size={16} aria-hidden="true" />
                <span>Tüm Yıldızlıları Çöz ({starredQuestions.length})</span>
              </button>
            )}
          </div>

          {starredQuestions.length === 0 ? (
            <div className="ky-card ky-empty">
              <span className="ky-tile ky-tile--gold" aria-hidden="true"><Star size={26} /></span>
              <h3>Henüz Yıldızlı Soru Eklenmedi</h3>
              <p>Soru bankasında veya denemelerde beğendiğin soruların yıldız ikonuna tıklayarak buraya kaydedebilirsin.</p>
            </div>
          ) : (
            <ul className="pf-qlist">
              {starredQuestions.map((q) => renderQuestionRow(q, 'bookmark'))}
            </ul>
          )}
        </div>
      )}

      {/* TAB 4: PROFILE MANAGER */}
      {activeTab === 'profiles' && (
        <div className="pf-stack">
          <div className="pf-listhead">
            <div>
              <h3 className="pf-h3">Öğrenci Profilleri ({store.profiles.length})</h3>
              <p className="pf-sub">
                Farklı öğrenciler veya farklı hedefler için izole çalışma istatistikleri ve hedefler oluşturun.
              </p>
            </div>
            <button type="button" className="ky-btn ky-btn--primary ky-btn--sm" onClick={() => setShowNewProfileModal(true)}>
              <UserPlus size={16} aria-hidden="true" />
              <span>Yeni Profil Ekle</span>
            </button>
          </div>

          {showNewProfileModal && (
            <form className="ky-card pf-panel pf-form ky-pop" onSubmit={handleCreateProfile} aria-label="Yeni Öğrenci Profili Oluştur">
              <h4 className="pf-h4">Yeni Öğrenci Profili Oluştur</h4>
              <div className="pf-field">
                <label htmlFor="pf-new-name">Öğrenci Adı / Takma Ad</label>
                <input
                  id="pf-new-name"
                  type="text"
                  className="ky-input"
                  value={newProfileName}
                  onChange={(e) => setNewProfileName(e.target.value)}
                  placeholder="Örn: Ayşe YKS 2027"
                  required
                />
              </div>

              <div className="pf-field">
                <span id="pf-avatar-label" className="pf-field__label">Avatar Seçimi</span>
                <div className="pf-avatars" role="radiogroup" aria-labelledby="pf-avatar-label">
                  {AVATAR_OPTIONS.map((av) => (
                    <button
                      key={av}
                      type="button"
                      role="radio"
                      aria-checked={newProfileAvatar === av}
                      className={`pf-avatar-opt ${newProfileAvatar === av ? 'on' : ''}`}
                      onClick={() => setNewProfileAvatar(av)}
                    >
                      <span aria-hidden="true">{av}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pf-field">
                <label htmlFor="pf-new-track">YKS Sınav İlerleme Tercihi</label>
                <select
                  id="pf-new-track"
                  className="ky-select"
                  value={newProfileTrack}
                  onChange={(e) => setNewProfileTrack(e.target.value as 'TYT_FIRST' | 'TYT_ONLY' | 'AYT_FOCUS')}
                >
                  <option value="TYT_FIRST">1. TYT Kimya (u01–u10) Sonra AYT (Önerilen)</option>
                  <option value="TYT_ONLY">Sadece TYT Kimya Odaklı</option>
                  <option value="AYT_FOCUS">AYT Kimya Ağırlıklı (11-12. Sınıf)</option>
                </select>
              </div>

              <div className="pf-actions">
                <button type="button" className="ky-btn ky-btn--quiet ky-btn--sm" onClick={() => setShowNewProfileModal(false)}>
                  İptal
                </button>
                <button type="submit" className="ky-btn ky-btn--primary ky-btn--sm">
                  Profili Kaydet
                </button>
              </div>
            </form>
          )}

          <ul className="ky-grid pf-profiles" style={{ ['--ky-grid-min' as string]: '280px' }}>
            {store.profiles.map((p) => {
              const isActive = p.id === activeProfile.id;
              return (
                <li key={p.id} className={`ky-card pf-profile ${isActive ? 'is-active' : ''}`}>
                  <div className="pf-profile__top">
                    <span className="ky-tile ky-tile--violet ky-tile--sm" aria-hidden="true">{p.avatar || '👨‍🎓'}</span>
                    <div className="pf-profile__id">
                      <strong>{p.name}</strong>
                      <span>{trackLabel(p.targetTrack)}</span>
                    </div>
                    {isActive ? (
                      <span className="ky-chip ky-chip--ok">
                        <Check size={12} aria-hidden="true" /> Aktif
                      </span>
                    ) : (
                      <button type="button" className="ky-btn ky-btn--quiet ky-btn--sm" onClick={() => store.switchProfile(p.id)}>
                        Aktif Yap
                      </button>
                    )}
                  </div>

                  <div className="pf-profile__stats">
                    <div className="ky-well">
                      <span>XP</span>
                      <strong className="ky-mono pf-c-accent">{p.stats.xp}</strong>
                    </div>
                    <div className="ky-well">
                      <span>Seri</span>
                      <strong className="ky-mono pf-c-gold">{p.stats.streakDays}g</strong>
                    </div>
                    <div className="ky-well">
                      <span>Çözülen</span>
                      <strong className="ky-mono pf-c-ok">{p.solvedQuestionIds.length}</strong>
                    </div>
                  </div>

                  <p className="pf-profile__goal">
                    Hedef: {p.dailyQuestionGoal} soru/gün • {p.dailyStudyMinutesGoal} dk/gün
                  </p>

                  {!isActive && store.profiles.length > 1 && (
                    <button
                      type="button"
                      className="ky-btn ky-btn--danger ky-btn--sm pf-profile__del"
                      onClick={() => {
                        if (window.confirm(`${p.name} profilini silmek istediğinize emin misiniz?`)) {
                          store.deleteProfile(p.id);
                        }
                      }}
                    >
                      <Trash2 size={16} aria-hidden="true" />
                      <span>Profili Sil</span>
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* TAB 5: SETTINGS */}
      {activeTab === 'settings' && (
        <div className="pf-stack">
          <section className="ky-card pf-group" aria-label={sh.settings}>
            {/* Theme */}
            <div className="pf-row">
              <span className="pf-row__icon" aria-hidden="true"><Palette size={20} /></span>
              <span className="pf-row__text">
                <span className="pf-row__label" id="pf-theme-l">{t.profile.themeLabel}</span>
              </span>
            </div>
            <div className="pf-row pf-row--ctl">
              <div className="ky-segmented pf-seg-full" role="radiogroup" aria-labelledby="pf-theme-l">
                {(
                  [
                    ['system', t.profile.themeSystem],
                    ['light', t.profile.themeLight],
                    ['dark', t.profile.themeDark],
                  ] as const
                ).map(([val, label]) => (
                  <button
                    key={val}
                    type="button"
                    role="radio"
                    aria-checked={store.themeSetting === val}
                    onClick={() => store.setThemeSetting(val)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Language */}
            <div className="pf-row">
              <span className="pf-row__icon" aria-hidden="true"><Globe size={20} /></span>
              <label className="pf-row__text" htmlFor="pf-lang">
                <span className="pf-row__label">{t.profile.languageLabel}</span>
              </label>
              <div className="pf-row__ctl pf-row__ctl--select">
                <select
                  id="pf-lang"
                  className="ky-select"
                  value={store.language}
                  onChange={(e) => store.setLanguage(e.target.value as LanguageCode)}
                >
                  {LANGUAGES.map((l) => (
                    <option key={l.code} value={l.code}>
                      {l.flag} {l.nativeName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Music */}
            <div className="pf-row">
              <span className="pf-row__icon" aria-hidden="true"><Music size={20} /></span>
              <span className="pf-row__text">
                <span className="pf-row__label" id="pf-music-l">{sh.music}</span>
                <span className="pf-row__hint">{sh.musicHint}</span>
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={musicOn}
                aria-labelledby="pf-music-l"
                className="ky-switch"
                onClick={() => onSetMusicOn(!musicOn)}
              />
            </div>
            <div className={`pf-sub-controls ${musicOn ? '' : 'is-off'}`}>
              {musicOn && (
                <p className="pf-nowplaying" aria-live="polite">
                  <span className="pf-eq" aria-hidden="true"><i /><i /><i /></span>
                  <span>
                    {sh.nowPlaying}: <strong>{currentTrackTitle}</strong>
                  </span>
                </p>
              )}
              <div className="pf-field">
                <label htmlFor="pf-track">{sh.musicTrack}</label>
                <select
                  id="pf-track"
                  className="ky-select"
                  value={musicTrackId}
                  disabled={!musicOn}
                  onChange={(e) => onSetMusicTrack(e.target.value)}
                >
                  {MUSIC_TRACKS.map((tr) => (
                    <option key={tr.id} value={tr.id}>
                      {tr.title[lang] || tr.title.tr}
                    </option>
                  ))}
                </select>
              </div>
              <div className="pf-field">
                <label htmlFor="pf-vol" className="pf-vol-label">
                  <span>{sh.musicVolume}</span>
                  <span className="ky-mono">{volPct}%</span>
                </label>
                <div className="pf-vol">
                  <VolumeX size={18} aria-hidden="true" />
                  <input
                    id="pf-vol"
                    type="range"
                    className="ky-range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={musicVolume}
                    disabled={!musicOn}
                    style={{ ['--pct' as string]: `${volPct}%` }}
                    onChange={(e) => onSetMusicVolume(parseFloat(e.target.value))}
                  />
                  <Volume2 size={18} aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* SFX */}
            <div className="pf-row">
              <span className="pf-row__icon" aria-hidden="true"><Volume2 size={20} /></span>
              <span className="pf-row__text">
                <span className="pf-row__label" id="pf-sfx-l">{sh.sfx}</span>
                <span className="pf-row__hint">{sh.sfxHint}</span>
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={sfxOn}
                aria-labelledby="pf-sfx-l"
                className="ky-switch"
                onClick={() => onSetSfxOn(!sfxOn)}
              />
            </div>

            {/* Daily goal */}
            <div className="pf-row">
              <span className="pf-row__icon" aria-hidden="true"><Target size={20} /></span>
              <span className="pf-row__text">
                <span className="pf-row__label" id="pf-goal-l">{sh.dailyGoal}</span>
                <span className="pf-row__hint">{activeProfile.name} · {sh.goalUnit}</span>
              </span>
              <div className="ky-segmented pf-seg-compact" role="radiogroup" aria-labelledby="pf-goal-l">
                {goalOptions.map((goalVal) => (
                  <button
                    key={goalVal}
                    type="button"
                    role="radio"
                    aria-checked={activeProfile.dailyQuestionGoal === goalVal}
                    className="ky-mono"
                    onClick={() => {
                      store.updateProfile(activeProfile.id, { dailyQuestionGoal: goalVal });
                      onSetDailyGoal(goalVal);
                    }}
                  >
                    {goalVal}
                  </button>
                ))}
              </div>
            </div>

            <div className="pf-row">
              <span className="pf-row__icon" aria-hidden="true"><Clock size={20} /></span>
              <span className="pf-row__text">
                <span className="pf-row__label" id="pf-min-l">Günlük Çalışma Süresi</span>
                <span className="pf-row__hint">dakika</span>
              </span>
              <div className="ky-segmented pf-seg-compact" role="radiogroup" aria-labelledby="pf-min-l">
                {[15, 30, 45, 60].map((minVal) => (
                  <button
                    key={minVal}
                    type="button"
                    role="radio"
                    aria-checked={activeProfile.dailyStudyMinutesGoal === minVal}
                    className="ky-mono"
                    onClick={() => store.updateProfile(activeProfile.id, { dailyStudyMinutesGoal: minVal })}
                  >
                    {minVal}
                  </button>
                ))}
              </div>
            </div>

            {/* Reduce motion */}
            <div className="pf-row">
              <span className="pf-row__icon" aria-hidden="true"><Wind size={20} /></span>
              <span className="pf-row__text">
                <span className="pf-row__label" id="pf-motion-l">{sh.reduceMotion}</span>
                <span className="pf-row__hint">{sh.reduceMotionHint}</span>
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={reduceMotion}
                aria-labelledby="pf-motion-l"
                className="ky-switch"
                onClick={() => onSetReduceMotion(!reduceMotion)}
              />
            </div>
          </section>

          {/* Notifications */}
          <section className="ky-card pf-group" aria-label="Mobil & Web Bildirimleri">
            <div className="pf-row">
              <span className="pf-row__icon" aria-hidden="true">
                {activeProfile.notificationsEnabled ? <Bell size={20} /> : <BellOff size={20} />}
              </span>
              <span className="pf-row__text">
                <span className="pf-row__label" id="pf-notif-l">Mobil & Web Bildirimleri</span>
                <span className="pf-row__hint">
                  Hedef tutturulmadığında veya aralıklı tekrar zamanı geldiğinde AI Koç size hatırlatma gönderir.
                </span>
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={activeProfile.notificationsEnabled}
                aria-labelledby="pf-notif-l"
                className="ky-switch"
                onClick={() => handleToggleNotifications(!activeProfile.notificationsEnabled)}
              />
            </div>

            {activeProfile.notificationsEnabled && (
              <div className="pf-sub-controls">
                <div className="pf-field">
                  <label htmlFor="pf-remind">Günlük Hatırlatma Saati</label>
                  <select
                    id="pf-remind"
                    className="ky-select"
                    value={activeProfile.reminderTime || '20:00'}
                    onChange={(e) => handleChangeReminderTime(e.target.value)}
                  >
                    {['18:00', '19:00', '20:00', '21:00', '22:00'].map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  className="ky-btn ky-btn--quiet ky-btn--sm"
                  onClick={async () => {
                    const ok = await notificationManager.sendImmediateNotification(
                      'Kimya YKS AI Koç',
                      'Harika gidiyorsun! Bildirim sistemi başarıyla çalışıyor.',
                      true
                    );
                    setNotificationFeedback(ok ? 'Test bildirimi gönderildi.' : 'Bildirim izni veya desteği bulunamadı.');
                    setTimeout(() => setNotificationFeedback(null), 3000);
                  }}
                >
                  <Bell size={16} aria-hidden="true" />
                  <span>Test Bildirimi Gönder</span>
                </button>
              </div>
            )}

            {notificationFeedback && (
              <p className="pf-feedback" role="status">{notificationFeedback}</p>
            )}
          </section>

          {/* Target track */}
          <section className="pf-panel-plain" aria-label="YKS Sınav İlerleme Tercihi">
            <h3 className="pf-h4" id="pf-track-pref">YKS Sınav İlerleme Tercihi</h3>
            <div className="pf-opts" role="radiogroup" aria-labelledby="pf-track-pref">
              {(
                [
                  ['TYT_FIRST', '1', '1. TYT → 2. AYT Sıralı (Varsayılan)'],
                  ['TYT_ONLY', 'T', 'Sadece TYT Kimya (10 Ünite)'],
                  ['AYT_FOCUS', 'A', 'AYT Odaklı (14 Ünite)'],
                ] as const
              ).map(([val, key, label]) => (
                <button
                  key={val}
                  type="button"
                  role="radio"
                  aria-checked={activeProfile.targetTrack === val}
                  className="ky-opt"
                  onClick={() => store.updateProfile(activeProfile.id, { targetTrack: val })}
                >
                  <span className="ky-key" aria-hidden="true">{key}</span>
                  <span className="pf-opt__label">{label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Data actions */}
          <section className="ky-card pf-group" aria-label={sh.dataTitle}>
            <div className="pf-data">
              <h3 className="pf-h4">{sh.dataTitle}</h3>
              <button type="button" className="ky-btn ky-btn--quiet ky-btn--block" onClick={onRelaunchOnboarding}>
                <Play size={16} aria-hidden="true" />
                <span>Tanıtımı Tekrar Başlat</span>
              </button>
              <button
                type="button"
                className="ky-btn ky-btn--danger ky-btn--block"
                onClick={() => {
                  if (window.confirm(t.profile.resetConfirmBody)) {
                    store.resetAllProgress();
                  }
                }}
              >
                <RotateCcw size={16} aria-hidden="true" />
                <span>{t.profile.resetProgress}</span>
              </button>
            </div>
          </section>
        </div>
      )}

      {/* Active Quiz Session Modal inside Profile (for Hata Defteri and Bookmarks practice) */}
      {activeQuizSession && (
        <QuizSessionModal
          title={activeQuizSession.title}
          subtitle={activeQuizSession.subtitle}
          examType={activeQuizSession.examType}
          questions={activeQuizSession.questions}
          isExamMode={false}
          durationMinutes={Math.max(10, Math.ceil(activeQuizSession.questions.length * 1.5))}
          lang={lang}
          bookmarkedQuestionIds={store.bookmarkedQuestionIds}
          onRecordQuestion={store.recordQuestionResult}
          onToggleBookmark={store.toggleBookmark}
          onClose={() => setActiveQuizSession(null)}
        />
      )}
    </section>
  );
};
