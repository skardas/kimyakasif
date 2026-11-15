import React, { useState, useMemo } from 'react';
import {
  User,
  Volume2,
  Music,
  RotateCcw,
  Palette,
  Globe,
  BarChart3,
  BookOpen,
  Star,
  Settings,
  Trophy,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  Sparkles,
  Play,
  Lock,
  Layers,
  Flame,
  Award,
  Bell,
  BellOff,
  UserPlus,
  Trash2,
  Edit2,
  Target,
  Check,
} from 'lucide-react';
import type { CompiledQuestion, LanguageCode } from '../../types/chemistry';
import type { AppState, LearnerProfile } from '../../store/useAppStore';
import type { DailyGoal } from '../../store/usePreferences';
import { LANGUAGES, UI_TRANSLATIONS } from '../../i18n/translations';
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
        setNotificationFeedback('✅ Bildirimler aktif edildi ve günlük hatırlatma planlandı.');
      } else {
        setNotificationFeedback('⚠️ Tarayıcı bildirim izni verilmedi.');
      }
    } else {
      await notificationManager.cancelAllReminders();
      setNotificationFeedback('🔕 Bildirimler tamamen kapatıldı.');
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

  return (
    <section className="profile-container" aria-label={t.nav.profile}>
      {/* Profile Header Card */}
      <div className="profile-hero-card">
        <div className="profile-hero-main-row">
          <div className="profile-avatar-badge">
            <span className="profile-avatar-icon">{activeProfile.avatar || '👨‍🎓'}</span>
          </div>

          <div className="profile-titles-col">
            <div className="profile-name-tag-row">
              <h1 className="profile-user-name">{activeProfile.name}</h1>
              <span className="profile-level-pill">
                {t.stats.level} {store.level}
              </span>
              <span className="profile-streak-pill">
                🔥 {store.streakDays} Gün Seri
              </span>
            </div>
            <p className="profile-telemetry-sub">
              <strong>{store.xp} XP</strong> • {totalSolved} Soru Çözüldü • %{accuracyPercent} Doğruluk Oranı
            </p>
          </div>

          <div className="profile-hero-actions">
            <button
              type="button"
              className="quick-profile-switch-btn"
              onClick={() => setActiveTab('profiles')}
              title="Profil Değiştir veya Yönet"
            >
              <User size={15} />
              <span>Profil Değiştir ({store.profiles.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Segmented Tab Navigation */}
      <nav className="profile-segmented-nav" role="tablist" aria-label="Profil Sekmeleri">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'dashboard'}
          className={`profile-seg-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <Sparkles size={17} />
          <span>AI Koç & Dashboard</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'analytics'}
          className={`profile-seg-btn ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          <BarChart3 size={17} />
          <span>Ünite Analitiği</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'mistakes'}
          className={`profile-seg-btn ${activeTab === 'mistakes' ? 'active' : ''}`}
          onClick={() => setActiveTab('mistakes')}
        >
          <RotateCcw size={17} />
          <span>Hata Defteri ({store.mistakeQuestionIds.length})</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'bookmarks'}
          className={`profile-seg-btn ${activeTab === 'bookmarks' ? 'active' : ''}`}
          onClick={() => setActiveTab('bookmarks')}
        >
          <Star size={17} />
          <span>Yıldızlılar ({store.bookmarkedQuestionIds.length})</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'profiles'}
          className={`profile-seg-btn ${activeTab === 'profiles' ? 'active' : ''}`}
          onClick={() => setActiveTab('profiles')}
        >
          <User size={17} />
          <span>Profiller ({store.profiles.length})</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'settings'}
          className={`profile-seg-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <Settings size={17} />
          <span>Ayarlar</span>
        </button>
      </nav>

      {/* ================================================================= */}
      {/* TAB 0: AI KOÇ & SVG GRAFİK DASHBOARD                               */}
      {/* ================================================================= */}
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

      {/* ================================================================= */}
      {/* TAB 1: PERFORMANS ANALİTİĞİ & 24 ÜNİTE İLERLEMESİ                 */}
      {/* ================================================================= */}
      {activeTab === 'analytics' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Quick Metrics 4-Box Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>TOPLAM XP</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-primary)', marginTop: '0.25rem' }}>
                {store.xp}
              </div>
            </div>

            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>DOĞRU CEVAP</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-emerald)', marginTop: '0.25rem' }}>
                {correctCount}
              </div>
            </div>

            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>HATA SAYISI</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-ruby)', marginTop: '0.25rem' }}>
                {store.mistakeQuestionIds.length}
              </div>
            </div>

            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>TAMAMLANAN DENEME</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-cyan)', marginTop: '0.25rem' }}>
                {store.examResults.length}
              </div>
            </div>
          </div>

          {/* Gamification Badges (8 Badges) */}
          <div className="placeholder-card" style={{ padding: '1.25rem', textAlign: 'start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Award size={20} color="var(--brand-primary)" />
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>
                Kazanılan Başarı Rozetleri (8 Başarı)
              </h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {badges.map((b) => (
                <div
                  key={b.id}
                  style={{
                    background: b.isUnlocked ? 'var(--bg-surface)' : 'var(--bg-elevated)',
                    border: `1.5px solid ${b.isUnlocked ? 'var(--brand-primary)' : 'var(--border-subtle)'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    opacity: b.isUnlocked ? 1 : 0.5,
                  }}
                >
                  <div style={{ fontSize: '1.75rem' }}>{b.icon}</div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                      {b.title}
                    </strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                      {b.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 24 Units Progress Breakdown */}
          <div className="placeholder-card" style={{ padding: '1.25rem', textAlign: 'start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <BookOpen size={20} color="var(--brand-primary)" />
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>
                24 Ünite Ustalık Dağılımı
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {ALL_CHEMISTRY_UNITS.map((u) => {
                let solved = 0;
                for (let q = 1; q <= 128; q++) {
                  const qId = `${u.id}-q${String(q).padStart(3, '0')}`;
                  if (store.solvedQuestionIds[qId]) solved++;
                }
                const pct = Math.min(100, Math.round((solved / 128) * 100));
                return (
                  <div key={u.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, width: '42px', color: 'var(--text-muted)' }}>
                      {u.id.toUpperCase()}
                    </span>
                    <span style={{ fontSize: '0.85rem', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {u.title[lang] || u.title.tr}
                    </span>
                    <div style={{ width: '120px', height: '8px', background: 'var(--bg-elevated)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${pct}%`,
                          background: u.exam === 'TYT' ? 'var(--brand-primary)' : 'var(--brand-secondary)',
                          borderRadius: '4px',
                        }}
                      />
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, width: '38px', textAlign: 'end' }}>
                      %{pct}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* TAB 2: HATA DEFTERİ (WRONG QUESTIONS NOTEBOOK)                     */}
      {/* ================================================================= */}
      {activeTab === 'mistakes' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Yanlış çözdüğün <strong>{store.mistakeQuestionIds.length}</strong> soru listeleniyor.
            </p>
            {filteredMistakes.length > 0 && (
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setActiveQuizSession({
                    title: 'Hata Defteri Tekrar Sınavı',
                    subtitle: `${filteredMistakes.length} Yanlış Soru`,
                    examType: 'MISTAKE',
                    questions: filteredMistakes,
                  });
                }}
              >
                <Play size={16} />
                <span>Tüm Hataları Tekrar Çöz ({filteredMistakes.length})</span>
              </button>
            )}
          </div>

          {filteredMistakes.length === 0 ? (
            <div className="placeholder-card" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <CheckCircle2 size={42} color="var(--accent-emerald)" style={{ margin: '0 auto 0.75rem' }} />
              <h3>Harika! Hata Defterin Tertemiz</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Yanlış yaptığın hiçbir soru bulunmuyor veya tüm hatalarını çözerek ustalaştın.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {filteredMistakes.map((q) => (
                <div
                  key={q.id}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          background: q.exam === 'TYT' ? 'rgba(29, 78, 216, 0.15)' : 'rgba(13, 148, 136, 0.15)',
                          color: q.exam === 'TYT' ? 'var(--brand-primary)' : 'var(--brand-secondary)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                        }}
                      >
                        {q.exam} • {q.unitId.toUpperCase()}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {q.id}
                      </span>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.875rem',
                        lineHeight: 1.4,
                        color: 'var(--text-primary)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {q.stem}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => {
                      setActiveQuizSession({
                        title: `${q.unitId.toUpperCase()} • Hata Tekrarı`,
                        subtitle: 'ÖSYM İkiz Soru Çözümü',
                        examType: 'MISTAKE',
                        questions: [q],
                      });
                    }}
                    style={{ padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}
                  >
                    Tekrar Çöz
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================================================================= */}
      {/* TAB 3: YILDIZLI SORULAR (BOOKMARKS)                                */}
      {/* ================================================================= */}
      {activeTab === 'bookmarks' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Yıldızladığın <strong>{store.bookmarkedQuestionIds.length}</strong> soru listeleniyor.
            </p>
            {starredQuestions.length > 0 && (
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setActiveQuizSession({
                    title: 'Yıldızlı Sorular Tekrar Sınavı',
                    subtitle: `${starredQuestions.length} Soru`,
                    examType: 'BOOKMARK',
                    questions: starredQuestions,
                  });
                }}
              >
                <Play size={16} />
                <span>Tüm Yıldızlıları Çöz ({starredQuestions.length})</span>
              </button>
            )}
          </div>

          {starredQuestions.length === 0 ? (
            <div className="placeholder-card" style={{ padding: '2.5rem', textAlign: 'center' }}>
              <Star size={42} color="var(--accent-amber)" style={{ margin: '0 auto 0.75rem' }} />
              <h3>Henüz Yıldızlı Soru Eklenmedi</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Soru bankasında veya denemelerde beğendiğin soruların yıldız ikonuna tıklayarak buraya kaydedebilirsin.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {starredQuestions.map((q) => (
                <div
                  key={q.id}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          background: 'rgba(245, 158, 11, 0.15)',
                          color: 'var(--accent-amber)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                        }}
                      >
                        {q.unitId.toUpperCase()}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {q.id}
                      </span>
                    </div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.875rem',
                        lineHeight: 1.4,
                        color: 'var(--text-primary)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {q.stem}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={() => store.toggleBookmark(q.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-amber)', padding: '0.4rem' }}
                      title="Yıldızdan Çıkar"
                    >
                      <Star size={18} fill="var(--accent-amber)" />
                    </button>
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => {
                        setActiveQuizSession({
                          title: `${q.unitId.toUpperCase()} • Yıldızlı Soru`,
                          subtitle: 'Özel Pratik',
                          examType: 'BOOKMARK',
                          questions: [q],
                        });
                      }}
                      style={{ padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}
                    >
                      Çöz
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================================================================= */}
      {/* TAB 4: PROFİL YÖNETİMİ (MULTI-PROFILE MANAGER)                    */}
      {/* ================================================================= */}
      {activeTab === 'profiles' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800 }}>
                Öğrenci Profilleri ({store.profiles.length})
              </h3>
              <p style={{ margin: '0.2rem 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                Farklı öğrenciler veya farklı hedefler için izole çalışma istatistikleri ve hedefler oluşturun.
              </p>
            </div>
            <button
              type="button"
              className="btn-primary"
              onClick={() => setShowNewProfileModal(true)}
            >
              <UserPlus size={16} />
              <span>Yeni Profil Ekle</span>
            </button>
          </div>

          {/* New Profile Form Modal */}
          {showNewProfileModal && (
            <div className="placeholder-card" style={{ padding: '1.25rem', border: '2px solid var(--brand-primary)', background: 'var(--bg-surface)' }}>
              <h4 style={{ margin: '0 0 0.8rem', fontSize: '1.05rem', fontWeight: 800 }}>Yeni Öğrenci Profili Oluştur</h4>
              <form onSubmit={handleCreateProfile} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                    Öğrenci Adı / Takma Ad
                  </label>
                  <input
                    type="text"
                    value={newProfileName}
                    onChange={(e) => setNewProfileName(e.target.value)}
                    placeholder="Örn: Ayşe YKS 2027"
                    required
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.8rem',
                      borderRadius: '8px',
                      background: 'var(--bg-elevated)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-subtle)',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                    Avatar Seçimi
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {AVATAR_OPTIONS.map((av) => (
                      <button
                        key={av}
                        type="button"
                        onClick={() => setNewProfileAvatar(av)}
                        style={{
                          fontSize: '1.5rem',
                          padding: '0.4rem 0.6rem',
                          borderRadius: '8px',
                          background: newProfileAvatar === av ? 'var(--brand-primary)' : 'var(--bg-elevated)',
                          border: `2px solid ${newProfileAvatar === av ? 'var(--brand-primary)' : 'var(--border-subtle)'}`,
                          cursor: 'pointer',
                        }}
                      >
                        {av}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                    YKS Sınav İlerleme Tercihi
                  </label>
                  <select
                    value={newProfileTrack}
                    onChange={(e) => setNewProfileTrack(e.target.value as any)}
                    style={{
                      width: '100%',
                      padding: '0.6rem 0.8rem',
                      borderRadius: '8px',
                      background: 'var(--bg-elevated)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <option value="TYT_FIRST">1. TYT Kimya (u01–u10) Sonra AYT (Önerilen)</option>
                    <option value="TYT_ONLY">Sadece TYT Kimya Odaklı</option>
                    <option value="AYT_FOCUS">AYT Kimya Ağırlıklı (11-12. Sınıf)</option>
                  </select>
                </div>

                <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setShowNewProfileModal(false)}
                  >
                    İptal
                  </button>
                  <button type="submit" className="btn-primary">
                    Profili Kaydet
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Profiles Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {store.profiles.map((p) => {
              const isActive = p.id === activeProfile.id;
              const solvedCount = p.solvedQuestionIds.length;
              return (
                <div
                  key={p.id}
                  style={{
                    background: 'var(--bg-surface)',
                    border: `2px solid ${isActive ? 'var(--brand-primary)' : 'var(--border-subtle)'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '2rem' }}>{p.avatar || '👨‍🎓'}</span>
                      <div>
                        <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>{p.name}</strong>
                        <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {p.targetTrack === 'TYT_ONLY'
                            ? 'Sadece TYT'
                            : p.targetTrack === 'AYT_FOCUS'
                            ? 'AYT Odaklı'
                            : 'TYT → AYT Sıralı'}
                        </span>
                      </div>
                    </div>
                    {isActive ? (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          padding: '0.2rem 0.5rem',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(16, 185, 129, 0.15)',
                          color: 'var(--accent-emerald)',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                        }}
                      >
                        Aktif
                      </span>
                    ) : (
                      <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => store.switchProfile(p.id)}
                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
                      >
                        Aktif Yap
                      </button>
                    )}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', background: 'var(--bg-elevated)', padding: '0.5rem', borderRadius: '8px', textAlign: 'center' }}>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>XP</span>
                      <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--brand-primary)' }}>
                        {p.stats.xp}
                      </strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Seri</span>
                      <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--accent-amber)' }}>
                        {p.stats.streakDays}g
                      </strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Çözülen</span>
                      <strong style={{ display: 'block', fontSize: '0.9rem', color: 'var(--accent-emerald)' }}>
                        {solvedCount}
                      </strong>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    Hedef: {p.dailyQuestionGoal} soru/gün • {p.dailyStudyMinutesGoal} dk/gün
                  </div>

                  {!isActive && store.profiles.length > 1 && (
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
                      <button
                        type="button"
                        onClick={() => {
                          if (window.confirm(`${p.name} profilini silmek istediğinize emin misiniz?`)) {
                            store.deleteProfile(p.id);
                          }
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: 'var(--accent-ruby)',
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                        }}
                      >
                        <Trash2 size={14} />
                        <span>Profili Sil</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* TAB 5: AYARLAR & TERCİHLER                                        */}
      {/* ================================================================= */}
      {activeTab === 'settings' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Daily Goals Configuration (Questions & Study Minutes) */}
          <div className="placeholder-card" style={{ padding: '1.25rem', textAlign: 'start', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <Target size={20} color="var(--brand-primary)" />
              <strong style={{ fontSize: '1.05rem' }}>Günlük Çalışma Hedefleri ({activeProfile.name})</strong>
            </div>

            {/* Daily Questions Goal Presets */}
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                Günlük Soru Çözme Hedefi
              </span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {[15, 30, 50, 100].map((goalVal) => (
                  <button
                    key={goalVal}
                    type="button"
                    className={activeProfile.dailyQuestionGoal === goalVal ? 'primary-btn' : 'secondary-btn'}
                    onClick={() => {
                      store.updateProfile(activeProfile.id, { dailyQuestionGoal: goalVal });
                      onSetDailyGoal(goalVal as any);
                    }}
                  >
                    {goalVal} Soru
                  </button>
                ))}
              </div>
            </div>

            {/* Daily Study Minutes Goal Presets */}
            <div>
              <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                Günlük Çalışma Süresi Hedefi (Dakika)
              </span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {[15, 30, 45, 60].map((minVal) => (
                  <button
                    key={minVal}
                    type="button"
                    className={activeProfile.dailyStudyMinutesGoal === minVal ? 'primary-btn' : 'secondary-btn'}
                    onClick={() => store.updateProfile(activeProfile.id, { dailyStudyMinutesGoal: minVal })}
                  >
                    {minVal} Dakika
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Toggleable Mobile/Web Notifications */}
          <div className="placeholder-card" style={{ padding: '1.25rem', textAlign: 'start', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                {activeProfile.notificationsEnabled ? (
                  <Bell size={20} color="var(--brand-primary)" />
                ) : (
                  <BellOff size={20} color="var(--text-muted)" />
                )}
                <strong style={{ fontSize: '1.05rem' }}>Mobil & Web Bildirimleri</strong>
              </div>

              <input
                type="checkbox"
                checked={activeProfile.notificationsEnabled}
                onChange={(e) => handleToggleNotifications(e.target.checked)}
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
              />
            </div>

            <p style={{ margin: '0 0 0.8rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Hedef tutturulmadığında veya aralıklı tekrar zamanı geldiğinde AI Koç size hatırlatma bildirimi gönderir.
            </p>

            {activeProfile.notificationsEnabled && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Günlük Hatırlatma Saati:</span>
                <select
                  value={activeProfile.reminderTime || '20:00'}
                  onChange={(e) => handleChangeReminderTime(e.target.value)}
                  style={{
                    padding: '0.4rem 0.6rem',
                    borderRadius: '8px',
                    background: 'var(--bg-elevated)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                </select>

                <button
                  type="button"
                  className="secondary-btn"
                  onClick={async () => {
                    const ok = await notificationManager.sendImmediateNotification(
                      'Kimya YKS AI Koç',
                      'Harika gidiyorsun! Bildirim sistemi başarıyla çalışıyor.',
                      true
                    );
                    setNotificationFeedback(ok ? '✅ Test bildirimi gönderildi.' : '⚠️ Bildirim izni veya desteği bulunamadı.');
                    setTimeout(() => setNotificationFeedback(null), 3000);
                  }}
                  style={{ fontSize: '0.8rem', padding: '0.35rem 0.7rem' }}
                >
                  Test Bildirimi Gönder
                </button>
              </div>
            )}

            {notificationFeedback && (
              <div style={{ marginTop: '0.6rem', fontSize: '0.85rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
                {notificationFeedback}
              </div>
            )}
          </div>

          {/* Target Track Preference */}
          <div className="placeholder-card" style={{ padding: '1.25rem', textAlign: 'start', alignItems: 'stretch' }}>
            <strong style={{ fontSize: '1.05rem', marginBottom: '0.8rem' }}>YKS Sınav İlerleme Tercihi</strong>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className={activeProfile.targetTrack === 'TYT_FIRST' ? 'primary-btn' : 'secondary-btn'}
                onClick={() => store.updateProfile(activeProfile.id, { targetTrack: 'TYT_FIRST' })}
              >
                1. TYT → 2. AYT Sıralı (Varsayılan)
              </button>
              <button
                type="button"
                className={activeProfile.targetTrack === 'TYT_ONLY' ? 'primary-btn' : 'secondary-btn'}
                onClick={() => store.updateProfile(activeProfile.id, { targetTrack: 'TYT_ONLY' })}
              >
                Sadece TYT Kimya (10 Ünite)
              </button>
              <button
                type="button"
                className={activeProfile.targetTrack === 'AYT_FOCUS' ? 'primary-btn' : 'secondary-btn'}
                onClick={() => store.updateProfile(activeProfile.id, { targetTrack: 'AYT_FOCUS' })}
              >
                AYT Odaklı (14 Ünite)
              </button>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="placeholder-card" style={{ padding: '1.25rem', textAlign: 'start', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <Palette size={20} color="var(--brand-primary)" />
              <strong style={{ fontSize: '1.05rem' }}>{t.profile.themeLabel}</strong>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className={store.themeSetting === 'system' ? 'primary-btn' : 'secondary-btn'}
                onClick={() => store.setThemeSetting('system')}
              >
                {t.profile.themeSystem}
              </button>
              <button
                type="button"
                className={store.themeSetting === 'light' ? 'primary-btn' : 'secondary-btn'}
                onClick={() => store.setThemeSetting('light')}
              >
                {t.profile.themeLight}
              </button>
              <button
                type="button"
                className={store.themeSetting === 'dark' ? 'primary-btn' : 'secondary-btn'}
                onClick={() => store.setThemeSetting('dark')}
              >
                {t.profile.themeDark}
              </button>
            </div>
          </div>

          {/* Language Selection (8 Languages) */}
          <div className="placeholder-card" style={{ padding: '1.25rem', textAlign: 'start', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <Globe size={20} color="var(--brand-primary)" />
              <strong style={{ fontSize: '1.05rem' }}>{t.profile.languageLabel} (8 Dil)</strong>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.5rem' }}>
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  className={store.language === l.code ? 'primary-btn' : 'secondary-btn'}
                  onClick={() => store.setLanguage(l.code)}
                >
                  <span>{l.flag}</span>
                  <span>{l.nativeName}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Audio & Music Controls */}
          <div className="placeholder-card" style={{ padding: '1.25rem', textAlign: 'start', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
              <Volume2 size={20} color="var(--brand-primary)" />
              <strong style={{ fontSize: '1.05rem' }}>Ses ve Müzik Kontrolleri</strong>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                <span>Ses Efektleri (SFX)</span>
                <input
                  type="checkbox"
                  checked={sfxOn}
                  onChange={(e) => onSetSfxOn(e.target.checked)}
                />
              </label>
              <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                <span>Arka Plan Müziği</span>
                <input
                  type="checkbox"
                  checked={musicOn}
                  onChange={(e) => onSetMusicOn(e.target.checked)}
                />
              </label>
              {musicOn && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.4rem' }}>
                  <span>Parça Seçimi (7 Parça):</span>
                  <select
                    value={musicTrackId}
                    onChange={(e) => onSetMusicTrack(e.target.value)}
                    style={{
                      padding: '0.5rem',
                      borderRadius: '8px',
                      background: 'var(--bg-elevated)',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {MUSIC_TRACKS.map((tr) => (
                      <option key={tr.id} value={tr.id}>
                        {tr.title[lang] || tr.title.tr}
                      </option>
                    ))}
                  </select>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.4rem' }}>
                    <Music size={16} />
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={musicVolume}
                      onChange={(e) => onSetMusicVolume(parseFloat(e.target.value))}
                      style={{ flex: 1 }}
                    />
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Motion Accessibility */}
          <div className="placeholder-card" style={{ padding: '1.25rem', textAlign: 'start', alignItems: 'stretch' }}>
            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
              <span>Hareketi Azalt (Reduce Motion)</span>
              <input
                type="checkbox"
                checked={reduceMotion}
                onChange={(e) => onSetReduceMotion(e.target.checked)}
              />
            </label>
          </div>

          {/* Reset & Onboarding actions */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button type="button" className="secondary-btn" onClick={onRelaunchOnboarding}>
              Tanıtımı Tekrar Başlat
            </button>
            <button
              type="button"
              className="secondary-btn"
              style={{ color: 'var(--accent-ruby)' }}
              onClick={() => {
                if (window.confirm(t.profile.resetConfirmBody)) {
                  store.resetAllProgress();
                }
              }}
            >
              <RotateCcw size={16} />
              <span>{t.profile.resetProgress}</span>
            </button>
          </div>
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
