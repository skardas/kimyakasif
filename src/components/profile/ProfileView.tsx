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
} from 'lucide-react';
import type { CompiledQuestion, LanguageCode } from '../../types/chemistry';
import type { AppState } from '../../store/useAppStore';
import type { DailyGoal } from '../../store/usePreferences';
import { LANGUAGES, UI_TRANSLATIONS } from '../../i18n/translations';
import { MUSIC_TRACKS } from '../../audio/musicEngine';
import { ALL_CHEMISTRY_UNITS } from '../../data/units';
import { compileUnitQuestions } from '../../engine/questionGenerator';
import { QuizSessionModal } from '../exams/QuizSessionModal';

export type ProfileTab = 'analytics' | 'mistakes' | 'bookmarks' | 'settings';

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

  // Active segmented tab
  const [activeTab, setActiveTab] = useState<ProfileTab>('analytics');

  // Hata Defteri Filter: 'ALL' | 'TYT' | 'AYT' | unitId
  const [mistakeExamFilter, setMistakeExamFilter] = useState<'ALL' | 'TYT' | 'AYT'>('ALL');
  const [mistakeUnitFilter, setMistakeUnitFilter] = useState<string>('ALL');

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
  }, [totalSolved, store.xp, store.streakDays, store.mistakeQuestionIds.length, store.examResults]);

  // 24 Units Progress Calculation
  const unitProgressList = useMemo(() => {
    return ALL_CHEMISTRY_UNITS.map((u) => {
      // Questions solved in this unit: IDs matching `u.id-q...`
      const prefix = `${u.id}-`;
      const solvedInUnit = Object.keys(store.solvedQuestionIds).filter((id) => id.startsWith(prefix)).length;
      return {
        unit: u,
        solvedCount: solvedInUnit,
        percent: Math.min(100, Math.round((solvedInUnit / 128) * 100)),
      };
    });
  }, [store.solvedQuestionIds]);

  return (
    <section className="profile-view-container" aria-label={t.profile.title}>
      {/* Top Hero User Profile Bar */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--bg-surface), var(--bg-elevated))',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem 1.5rem',
          marginBottom: '1.25rem',
          boxShadow: 'var(--shadow-card)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--brand-primary), var(--accent-cyan))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '1.5rem',
              fontWeight: 800,
              boxShadow: 'var(--shadow-glow-cyan)',
            }}
          >
            {store.level}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h1 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 800 }}>
                {t.stats.level} {store.level}
              </h1>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.15rem 0.5rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: 'var(--accent-amber)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                }}
              >
                🔥 {store.streakDays} Gün Seri
              </span>
            </div>
            <p style={{ margin: '0.2rem 0 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              <strong>{store.xp} XP</strong> • {totalSolved} Soru Çözüldü • %{accuracyPercent} Doğruluk Oranı
            </p>
          </div>
        </div>

        {/* Global Accuracy Gauge */}
        <div
          style={{
            background: 'var(--bg-surface)',
            padding: '0.625rem 1.125rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Genel Başarı
          </div>
          <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--brand-primary)' }}>
            %{accuracyPercent}
          </div>
        </div>
      </div>

      {/* Segmented Tab Navigation */}
      <nav className="profile-segmented-nav" role="tablist" aria-label="Profil Sekmeleri">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'analytics'}
          className={`profile-seg-btn ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          <BarChart3 size={17} />
          <span>Performans & İstatistikler</span>
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
          aria-selected={activeTab === 'settings'}
          className={`profile-seg-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <Settings size={17} />
          <span>{t.nav.profile} & Ayarlar</span>
        </button>
      </nav>

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
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>DENEME SINAVI</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-amber)', marginTop: '0.25rem' }}>
                {store.examResults.length}
              </div>
            </div>
          </div>

          {/* Net Score History & Trend */}
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
            }}
          >
            <h3 style={{ margin: '0 0 1rem', fontSize: '1.05rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingUp size={20} color="var(--brand-primary)" />
              <span>Son Deneme Netleri ve İlerleme Geçmişi</span>
            </h3>

            {store.examResults.length === 0 ? (
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                Henüz tamamlanmış bir deneme sınavı bulunmuyor. TYT veya AYT branş denemesi çözerek net trendini buradan takip edebilirsin.
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {store.examResults.slice(0, 8).map((res) => (
                  <div
                    key={res.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.625rem 0.875rem',
                      background: 'var(--bg-elevated)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.85rem',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                        {res.modeTitle}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {res.dateIso.slice(0, 10)} • {res.correct} Doğru, {res.wrong} Yanlış, {res.empty} Boş
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: 900,
                          color: res.netScore >= 5 ? 'var(--accent-emerald)' : 'var(--text-primary)',
                        }}
                      >
                        {res.netScore.toFixed(2)} Net
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 8 Gamification Badges Grid */}
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
            }}
          >
            <h3 style={{ margin: '0 0 1rem', fontSize: '1.05rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={20} color="var(--accent-amber)" />
              <span>Kazanılan Başarı Rozetleri (8)</span>
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {badges.map((b) => (
                <div
                  key={b.id}
                  style={{
                    background: b.isUnlocked ? 'var(--bg-elevated)' : 'var(--bg-subtle)',
                    border: `1px solid ${b.isUnlocked ? 'var(--accent-amber)' : 'var(--border-subtle)'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '0.875rem',
                    opacity: b.isUnlocked ? 1 : 0.6,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ fontSize: '1.75rem', flexShrink: 0 }}>
                    {b.isUnlocked ? b.icon : '🔒'}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: b.isUnlocked ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                      {b.title}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem', lineHeight: 1.3 }}>
                      {b.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 24 Unit Progress Bars */}
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
            }}
          >
            <h3 style={{ margin: '0 0 1rem', fontSize: '1.05rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={20} color="var(--accent-cyan)" />
              <span>24 Ünite Müfredat Çözüm İlerlemesi (3.072 Soru)</span>
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.875rem' }}>
              {unitProgressList.map(({ unit, solvedCount, percent }) => (
                <div
                  key={unit.id}
                  style={{
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.825rem' }}>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                      {unit.id.toUpperCase()} • {unit.title[lang] || unit.title.tr}
                    </span>
                    <span style={{ fontWeight: 800, color: percent === 100 ? 'var(--accent-emerald)' : 'var(--brand-primary)' }}>
                      {solvedCount} / 128 (%{percent})
                    </span>
                  </div>
                  <div className="unit-progress-bar">
                    <div
                      className="unit-progress-fill"
                      style={{
                        width: `${percent}%`,
                        background: percent === 100 ? 'var(--accent-emerald)' : undefined,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* TAB 2: HATA DEFTERİ (MISTAKE NOTEBOOK)                            */}
      {/* ================================================================= */}
      {activeTab === 'mistakes' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Header & Filter Bar */}
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <RotateCcw size={22} color="var(--accent-ruby)" />
                <span>Hata Defteri Mastery</span>
              </h2>
              <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Yanlış çözdüğün {store.mistakeQuestionIds.length} soru. Doğru yanıtladığında otomatik olarak listeden düşer!
              </p>
            </div>

            {filteredMistakes.length > 0 && (
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setActiveQuizSession({
                    title: 'Hata Defteri • Filtrelenen Sorular',
                    subtitle: `${filteredMistakes.length} Soru • Pekiştirme Oturumu`,
                    examType: 'MISTAKE',
                    questions: filteredMistakes,
                  });
                }}
                style={{ background: 'var(--accent-ruby)', borderColor: 'var(--accent-ruby)', gap: '0.4rem' }}
              >
                <Play size={16} fill="currentColor" />
                <span>Filtrelenenleri Çöz ({filteredMistakes.length})</span>
              </button>
            )}
          </div>

          {/* Filters Row */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              type="button"
              className={mistakeExamFilter === 'ALL' ? 'primary-btn' : 'secondary-btn'}
              onClick={() => setMistakeExamFilter('ALL')}
              style={{ fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}
            >
              Tüm Sorular
            </button>
            <button
              type="button"
              className={mistakeExamFilter === 'TYT' ? 'primary-btn' : 'secondary-btn'}
              onClick={() => setMistakeExamFilter('TYT')}
              style={{ fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}
            >
              TYT Hataları
            </button>
            <button
              type="button"
              className={mistakeExamFilter === 'AYT' ? 'primary-btn' : 'secondary-btn'}
              onClick={() => setMistakeExamFilter('AYT')}
              style={{ fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}
            >
              AYT Hataları
            </button>
          </div>

          {/* Questions List */}
          {filteredMistakes.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3.5rem 1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
              <CheckCircle2 size={48} color="var(--accent-emerald)" style={{ margin: '0 auto 0.75rem' }} />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem' }}>Seçili Kriterde Hata Bulunmuyor!</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Harika! Yanlış yaptığın hiçbir soru kalmadı.
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
                          background: 'rgba(244, 63, 94, 0.15)',
                          color: 'var(--accent-ruby)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                        }}
                      >
                        {q.unitId.toUpperCase()}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {q.id}
                      </span>
                      {q.diagram && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                          • Şekilli
                        </span>
                      )}
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
                        title: `${q.unitId.toUpperCase()} • Tekrar Çöz`,
                        subtitle: 'Hata Defteri Mastery',
                        examType: 'MISTAKE',
                        questions: [q],
                      });
                    }}
                    style={{ flexShrink: 0, padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}
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
      {/* TAB 3: YILDIZLI SORULAR (BOOKMARKED QUESTIONS)                    */}
      {/* ================================================================= */}
      {activeTab === 'bookmarks' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <div>
              <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Star size={22} color="var(--accent-amber)" fill="var(--accent-amber)" />
                <span>Yıldızlı Sorular Koleksiyonu</span>
              </h2>
              <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {starredQuestions.length} soru favorilerine eklendi.
              </p>
            </div>

            {starredQuestions.length > 0 && (
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setActiveQuizSession({
                    title: 'Yıldızlı Sorular • Özel Pratik',
                    subtitle: `${starredQuestions.length} Favori Soru`,
                    examType: 'BOOKMARK',
                    questions: starredQuestions,
                  });
                }}
                style={{ background: 'var(--accent-amber)', color: '#000', borderColor: 'var(--accent-amber)', gap: '0.4rem' }}
              >
                <Play size={16} fill="currentColor" />
                <span>Yıldızlı Soruları Çöz ({starredQuestions.length})</span>
              </button>
            )}
          </div>

          {starredQuestions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3.5rem 1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
              <Star size={48} color="var(--accent-amber)" style={{ margin: '0 auto 0.75rem' }} />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem' }}>Henüz Yıldızlı Soru Yok</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Test çözerken sağ üstteki yıldız ikonuna tıklayarak beğendiğin soruları buraya kaydedebilirsin.
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
      {/* TAB 4: AYARLAR & TERCİHLER                                        */}
      {/* ================================================================= */}
      {activeTab === 'settings' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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

          {/* Daily Goal & Motion Accessibility */}
          <div className="placeholder-card" style={{ padding: '1.25rem', textAlign: 'start', alignItems: 'stretch' }}>
            <strong style={{ fontSize: '1.05rem', marginBottom: '0.8rem' }}>Hedef & Erişilebilirlik</strong>
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.8rem' }}>
              {([10, 20, 40] as DailyGoal[]).map((g) => (
                <button
                  key={g}
                  type="button"
                  className={dailyGoal === g ? 'primary-btn' : 'secondary-btn'}
                  onClick={() => onSetDailyGoal(g)}
                >
                  {g} Soru/gün
                </button>
              ))}
            </div>
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
