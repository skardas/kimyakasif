import React, { useState, useMemo } from 'react';
import {
  FileCheck2,
  Clock,
  Sparkles,
  Trophy,
  Award,
  BookOpen,
  Filter,
  CheckCircle2,
  Star,
  RotateCcw,
  AlertCircle,
  Play,
  Layers,
  Flame,
} from 'lucide-react';
import type { CompiledQuestion, LanguageCode, MockExamDefinition } from '../../types/chemistry';
import type { ExamResultRecord, MockBestScore } from '../../store/useAppStore';
import { ALL_CHEMISTRY_UNITS } from '../../data/units';
import {
  ALL_MOCK_EXAM_SPECS,
  getMockExamCatalog,
  buildMockExamQuestions,
  buildTgProvaQuestions,
  TG_PROVA_SPEC,
} from '../../engine/mockExamCatalog';
import { compileUnitQuestions } from '../../engine/questionGenerator';
import { QuizSessionModal } from './QuizSessionModal';
import { UI_TRANSLATIONS } from '../../i18n/translations';

export type ExamCenterCategory =
  | 'tyt'
  | 'ayt'
  | 'sets'
  | 'tg'
  | 'mistakes'
  | 'bookmarks';

export interface ExamCenterProps {
  lang: LanguageCode;
  preselectedUnitId?: string | null;
  solvedQuestions: Record<string, boolean>;
  wrongQuestionIds: string[];
  bookmarkedQuestionIds: string[];
  mockBestScores: Record<string, MockBestScore>;
  onRecordQuestion: (qId: string, isCorrect: boolean) => void;
  onToggleBookmark: (qId: string) => void;
  onSaveAttempt: (attempt: Omit<ExamResultRecord, 'id' | 'dateIso'>) => void;
}

export const ExamCenter: React.FC<ExamCenterProps> = ({
  lang,
  preselectedUnitId,
  solvedQuestions,
  wrongQuestionIds,
  bookmarkedQuestionIds,
  mockBestScores,
  onRecordQuestion,
  onToggleBookmark,
  onSaveAttempt,
}) => {
  const t = UI_TRANSLATIONS[lang];

  // Active Category Tab
  const [activeTab, setActiveTab] = useState<ExamCenterCategory>('tyt');

  // Filter for %100 Şekilli Denemeler (Trials 26–35)
  const [visualOnlyFilter, setVisualOnlyFilter] = useState(false);

  // Unit Practice Sets: chosen unit
  const [selectedUnitId, setSelectedUnitId] = useState<string>(
    preselectedUnitId && ALL_CHEMISTRY_UNITS.some((u) => u.id === preselectedUnitId)
      ? preselectedUnitId
      : 'u01'
  );

  // Active Quiz Modal Session Configuration
  const [activeSession, setActiveSession] = useState<{
    title: string;
    subtitle?: string;
    examType: 'TYT' | 'AYT' | 'UNIT' | 'TG' | 'MISTAKE' | 'BOOKMARK';
    mockId?: string;
    unitId?: string;
    questions: CompiledQuestion[];
    isExamMode: boolean;
    durationMinutes?: number;
  } | null>(null);

  // Localized Mock Catalog (80 Trials)
  const fullCatalog = useMemo(() => getMockExamCatalog(lang), [lang]);

  // TYT Trials (40)
  const tytMocks = useMemo(() => {
    const list = fullCatalog.filter((m) => m.category === 'TYT_BRANCH');
    return visualOnlyFilter ? list.filter((m) => m.visualFocus) : list;
  }, [fullCatalog, visualOnlyFilter]);

  // AYT Trials (40)
  const aytMocks = useMemo(() => {
    const list = fullCatalog.filter((m) => m.category === 'AYT_BRANCH');
    return visualOnlyFilter ? list.filter((m) => m.visualFocus) : list;
  }, [fullCatalog, visualOnlyFilter]);

  // Compiled Questions Cache for Unit Sets
  const currentUnit = useMemo(() => {
    return ALL_CHEMISTRY_UNITS.find((u) => u.id === selectedUnitId) ?? ALL_CHEMISTRY_UNITS[0];
  }, [selectedUnitId]);

  const currentUnitQuestions = useMemo(() => {
    return compileUnitQuestions(currentUnit, lang);
  }, [currentUnit, lang]);

  // Map for compiling mistake & bookmarked questions on demand
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

  // Launch TYT or AYT Mock Exam
  const handleLaunchTrial = (mock: MockExamDefinition) => {
    const qs = buildMockExamQuestions(mock.id, ALL_CHEMISTRY_UNITS, lang);
    setActiveSession({
      title: mock.title,
      subtitle: `${mock.badgeText} • ${mock.questionCount} Soru • ${mock.durationMinutes} Dakika`,
      examType: mock.category === 'TYT_BRANCH' ? 'TYT' : 'AYT',
      mockId: mock.id,
      questions: qs,
      isExamMode: true,
      durationMinutes: mock.durationMinutes,
    });
  };

  // Launch TG Derece Provası
  const handleLaunchTgProva = () => {
    const qs = buildTgProvaQuestions(ALL_CHEMISTRY_UNITS, lang);
    const spec = TG_PROVA_SPEC;
    setActiveSession({
      title: spec.title[lang] || spec.title.tr,
      subtitle: spec.subtitle[lang] || spec.subtitle.tr,
      examType: 'TG',
      mockId: spec.id,
      questions: qs,
      isExamMode: true,
      durationMinutes: spec.durationMinutes,
    });
  };

  // Launch Unit Practice Set (1 of 8 sets, 16 questions)
  const handleLaunchUnitSet = (setNumber: number) => {
    const qs = currentUnitQuestions.filter((q) => q.setNumber === setNumber);
    const unitTitle = currentUnit.title[lang] || currentUnit.title.tr;
    setActiveSession({
      title: `${currentUnit.id.toUpperCase()} • ${unitTitle}`,
      subtitle: `Test Seti #${setNumber} • 16 Soru • Pratik Modu (Anında Çözüm & İpucu)`,
      examType: 'UNIT',
      unitId: currentUnit.id,
      questions: qs,
      isExamMode: false,
      durationMinutes: 15,
    });
  };

  // Launch Mistakes Practice
  const handleLaunchMistakes = () => {
    const qs = resolveQuestionsByIds(wrongQuestionIds);
    if (qs.length === 0) return;
    setActiveSession({
      title: 'Hata Defteri • Pekiştirme Oturumu',
      subtitle: `${qs.length} Yanlış Soru • Doğru Yanıtladığında Hata Defterinden Otomatik Çıkarılır`,
      examType: 'MISTAKE',
      questions: qs,
      isExamMode: false,
      durationMinutes: Math.max(10, Math.ceil(qs.length * 1.5)),
    });
  };

  // Launch Starred Practice
  const handleLaunchStarred = () => {
    const qs = resolveQuestionsByIds(bookmarkedQuestionIds);
    if (qs.length === 0) return;
    setActiveSession({
      title: 'Yıldızlı Sorular • Özel Pratik',
      subtitle: `${qs.length} Yıldızlı Soru • Favori Soru Koleksiyonun`,
      examType: 'BOOKMARK',
      questions: qs,
      isExamMode: false,
      durationMinutes: Math.max(10, Math.ceil(qs.length * 1.5)),
    });
  };

  return (
    <section className="exam-center-container" aria-label={t.exams.title}>
      {/* Header */}
      <div className="section-header" style={{ marginBottom: '1.25rem' }}>
        <div>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '1.75rem', margin: 0 }}>
            <FileCheck2 size={28} color="var(--brand-primary)" />
            <span>{t.exams.title}</span>
          </h1>
          <p className="subtitle-text" style={{ margin: '0.35rem 0 0', color: 'var(--text-secondary)' }}>
            40 TYT, 40 AYT Branş Denemesi, 192 Ünite Testi ve Türkiye Geneli Derece Provası
          </p>
        </div>
      </div>

      {/* Category Tabs Switcher */}
      <nav className="exam-category-tabs" role="tablist" aria-label="Sınav Kategorileri">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'tyt'}
          className={`exam-category-tab ${activeTab === 'tyt' ? 'active' : ''}`}
          onClick={() => setActiveTab('tyt')}
        >
          1. Aşama TYT (40)
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'ayt'}
          className={`exam-category-tab ${activeTab === 'ayt' ? 'active' : ''}`}
          onClick={() => setActiveTab('ayt')}
        >
          2. Aşama AYT (40)
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'sets'}
          className={`exam-category-tab ${activeTab === 'sets' ? 'active' : ''}`}
          onClick={() => setActiveTab('sets')}
        >
          Ünite Soru Setleri (192)
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'tg'}
          className={`exam-category-tab ${activeTab === 'tg' ? 'active' : ''}`}
          onClick={() => setActiveTab('tg')}
          style={{
            borderColor: activeTab === 'tg' ? 'var(--accent-amber)' : 'var(--border-subtle)',
            color: activeTab === 'tg' ? '#000' : 'inherit',
            background: activeTab === 'tg' ? 'var(--accent-amber)' : undefined,
          }}
        >
          🏆 {t.exams.modeTgProva}
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'mistakes'}
          className={`exam-category-tab ${activeTab === 'mistakes' ? 'active' : ''}`}
          onClick={() => setActiveTab('mistakes')}
        >
          {t.exams.modeMistakes} ({wrongQuestionIds.length})
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'bookmarks'}
          className={`exam-category-tab ${activeTab === 'bookmarks' ? 'active' : ''}`}
          onClick={() => setActiveTab('bookmarks')}
        >
          {t.exams.modeBookmarks} ({bookmarkedQuestionIds.length})
        </button>
      </nav>

      {/* ================================================================= */}
      {/* 1. TYT BRANŞ DENEMELERİ (40 DENEME)                              */}
      {/* ================================================================= */}
      {activeTab === 'tyt' && (
        <div>
          {/* Subheader & %100 Şekilli Denemeler Filter Toggle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                1. Aşama TYT Kimya (40 Deneme • 7 Soru • 10 Dakika)
              </span>
            </div>

            <button
              type="button"
              onClick={() => setVisualOnlyFilter((prev) => !prev)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.825rem',
                fontWeight: 700,
                cursor: 'pointer',
                background: visualOnlyFilter ? 'var(--accent-cyan)' : 'var(--bg-surface)',
                color: visualOnlyFilter ? '#000' : 'var(--text-secondary)',
                border: `1.5px solid ${visualOnlyFilter ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                transition: 'all 0.15s ease',
              }}
            >
              <Sparkles size={14} />
              <span>%100 Şekilli Denemeler (Deneme 26–35)</span>
            </button>
          </div>

          <div className="exam-card-grid">
            {tytMocks.map((mock) => {
              const bestScore = mockBestScores[mock.id];
              return (
                <div key={mock.id} className="exam-card">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          background: `${mock.accentColor}20`,
                          color: mock.accentColor,
                          border: `1px solid ${mock.accentColor}50`,
                        }}
                      >
                        {mock.badgeText}
                      </span>
                      {mock.visualFocus && (
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            padding: '0.15rem 0.45rem',
                            borderRadius: '4px',
                            background: 'rgba(6, 182, 212, 0.15)',
                            color: 'var(--accent-cyan)',
                          }}
                        >
                          Şekilli
                        </span>
                      )}
                    </div>

                    <h3 style={{ margin: '0.625rem 0 0.35rem', fontSize: '1.05rem', fontWeight: 800 }}>
                      {mock.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                      {mock.subtitle}
                    </p>
                  </div>

                  <div style={{ marginTop: '1.125rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.825rem',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Clock size={14} />
                        {mock.durationMinutes} dk • 7 Soru
                      </span>

                      {bestScore ? (
                        <span style={{ fontWeight: 800, color: 'var(--accent-emerald)' }}>
                          En İyi: {bestScore.bestNet.toFixed(2)} Net ({bestScore.attempts}x)
                        </span>
                      ) : (
                        <span style={{ color: 'var(--text-muted)' }}>Henüz Çözülmedi</span>
                      )}
                    </div>

                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => handleLaunchTrial(mock)}
                      style={{ width: '100%', justifyContent: 'center', gap: '0.4rem', padding: '0.55rem' }}
                    >
                      <Play size={15} fill="currentColor" />
                      <span>{bestScore ? 'Tekrar Çöz' : 'Sınava Başla'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* 2. AYT BRANŞ DENEMELERİ (40 DENEME)                              */}
      {/* ================================================================= */}
      {activeTab === 'ayt' && (
        <div>
          {/* Subheader & %100 Şekilli Denemeler Filter Toggle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                2. Aşama AYT Kimya (40 Deneme • 13 Soru • 20 Dakika)
              </span>
            </div>

            <button
              type="button"
              onClick={() => setVisualOnlyFilter((prev) => !prev)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.825rem',
                fontWeight: 700,
                cursor: 'pointer',
                background: visualOnlyFilter ? 'var(--accent-cyan)' : 'var(--bg-surface)',
                color: visualOnlyFilter ? '#000' : 'var(--text-secondary)',
                border: `1.5px solid ${visualOnlyFilter ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                transition: 'all 0.15s ease',
              }}
            >
              <Sparkles size={14} />
              <span>%100 Şekilli Denemeler (Deneme 26–35)</span>
            </button>
          </div>

          <div className="exam-card-grid">
            {aytMocks.map((mock) => {
              const bestScore = mockBestScores[mock.id];
              return (
                <div key={mock.id} className="exam-card">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          background: `${mock.accentColor}20`,
                          color: mock.accentColor,
                          border: `1px solid ${mock.accentColor}50`,
                        }}
                      >
                        {mock.badgeText}
                      </span>
                      {mock.visualFocus && (
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            padding: '0.15rem 0.45rem',
                            borderRadius: '4px',
                            background: 'rgba(6, 182, 212, 0.15)',
                            color: 'var(--accent-cyan)',
                          }}
                        >
                          Şekilli
                        </span>
                      )}
                    </div>

                    <h3 style={{ margin: '0.625rem 0 0.35rem', fontSize: '1.05rem', fontWeight: 800 }}>
                      {mock.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                      {mock.subtitle}
                    </p>
                  </div>

                  <div style={{ marginTop: '1.125rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.825rem',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Clock size={14} />
                        {mock.durationMinutes} dk • 13 Soru
                      </span>

                      {bestScore ? (
                        <span style={{ fontWeight: 800, color: 'var(--accent-emerald)' }}>
                          En İyi: {bestScore.bestNet.toFixed(2)} Net ({bestScore.attempts}x)
                        </span>
                      ) : (
                        <span style={{ color: 'var(--text-muted)' }}>Henüz Çözülmedi</span>
                      )}
                    </div>

                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => handleLaunchTrial(mock)}
                      style={{ width: '100%', justifyContent: 'center', gap: '0.4rem', padding: '0.55rem' }}
                    >
                      <Play size={15} fill="currentColor" />
                      <span>{bestScore ? 'Tekrar Çöz' : 'Sınava Başla'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* 3. ÜNİTE SORU SETLERİ (192 SET)                                  */}
      {/* ================================================================= */}
      {activeTab === 'sets' && (
        <div>
          {/* Unit Selector Header */}
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              marginBottom: '1.25rem',
            }}
          >
            <label
              htmlFor="unit-picker-select"
              style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}
            >
              Çalışmak İstediğin Üniteyi Seç (24 Ünite):
            </label>

            <select
              id="unit-picker-select"
              value={selectedUnitId}
              onChange={(e) => setSelectedUnitId(e.target.value)}
              style={{
                width: '100%',
                padding: '0.625rem 0.875rem',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--bg-elevated)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.925rem',
                fontWeight: 600,
              }}
            >
              <optgroup label="TYT Kimya Üniteleri (u01 - u10)">
                {ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT').map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.id.toUpperCase()} • {u.title[lang] || u.title.tr} ({u.grade}. Sınıf)
                  </option>
                ))}
              </optgroup>
              <optgroup label="AYT Kimya Üniteleri (u11 - u24)">
                {ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'AYT').map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.id.toUpperCase()} • {u.title[lang] || u.title.tr} ({u.grade}. Sınıf)
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* 8 Sets Grid for Chosen Unit */}
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>
              {currentUnit.id.toUpperCase()}: {currentUnit.title[lang] || currentUnit.title.tr}
            </h2>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              8 Test Seti • 128 Soru
            </span>
          </div>

          <div className="exam-card-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((setNum) => {
              const setQuestions = currentUnitQuestions.filter((q) => q.setNumber === setNum);
              const solvedCount = setQuestions.filter((q) => solvedQuestions[q.id] !== undefined).length;
              const isCompleted = solvedCount === setQuestions.length;

              const tierName =
                setNum <= 2 ? 'Kolay' : setNum <= 4 ? 'Orta' : setNum <= 6 ? 'Zor' : 'ÖSYM Düzeyi';

              const tierColor =
                setNum <= 2
                  ? 'var(--accent-emerald)'
                  : setNum <= 4
                  ? 'var(--brand-primary)'
                  : setNum <= 6
                  ? 'var(--accent-amber)'
                  : 'var(--accent-ruby)';

              return (
                <div key={setNum} className="exam-card">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          padding: '0.2rem 0.5rem',
                          borderRadius: '4px',
                          background: `${tierColor}20`,
                          color: tierColor,
                        }}
                      >
                        {tierName}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        Set #{setNum}
                      </span>
                    </div>

                    <h3 style={{ margin: '0.625rem 0 0.25rem', fontSize: '1rem', fontWeight: 800 }}>
                      Test Seti {setNum}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      16 Soru • 4 Şekilli Soru • Pratik Modu
                    </p>
                  </div>

                  <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.825rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <span style={{ color: 'var(--text-secondary)' }}>Çözülen:</span>
                      <span style={{ fontWeight: 700, color: isCompleted ? 'var(--accent-emerald)' : 'var(--text-primary)' }}>
                        {solvedCount} / 16
                      </span>
                    </div>

                    <div className="unit-progress-bar">
                      <div
                        className="unit-progress-fill"
                        style={{
                          width: `${(solvedCount / 16) * 100}%`,
                          background: isCompleted ? 'var(--accent-emerald)' : undefined,
                        }}
                      />
                    </div>

                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => handleLaunchUnitSet(setNum)}
                      style={{ width: '100%', marginTop: '0.875rem', justifyContent: 'center', padding: '0.5rem' }}
                    >
                      <Play size={14} fill="currentColor" />
                      <span>{isCompleted ? 'Tekrar Et' : 'Sete Başla'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* 4. TG DERECE PROVASI (20 SORU: 7 TYT + 13 AYT)                    */}
      {/* ================================================================= */}
      {activeTab === 'tg' && (
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(16, 185, 129, 0.08))',
              border: '2px solid var(--accent-amber)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '2rem' }}>🏆</span>
              <div>
                <span
                  style={{
                    background: 'var(--accent-amber)',
                    color: '#000',
                    fontWeight: 900,
                    fontSize: '0.75rem',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                  }}
                >
                  YKS Şampiyonluk Simülasyonu
                </span>
                <h2 style={{ margin: '0.35rem 0 0', fontSize: '1.35rem', fontWeight: 900 }}>
                  {TG_PROVA_SPEC.title[lang] || TG_PROVA_SPEC.title.tr}
                </h2>
              </div>
            </div>

            <p style={{ fontSize: '0.925rem', lineHeight: 1.6, color: 'var(--text-secondary)', margin: '0 0 1.25rem' }}>
              Gerçek sınav formatında <strong>20 Soru</strong> (7 TYT + 13 AYT). 30 dakika katı süre sınırlaması,
              ÖSYM 4 yanlış 1 doğruyu götürür Net hesaplaması ve Türkiye Geneli YKS Sayısal Kimya tahmini yüzdelik
              dilim hesaplaması içerir.
            </p>

            {/* Spec Feature Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--bg-surface)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>SORU DAĞILIMI</div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--brand-primary)', marginTop: '0.2rem' }}>
                  7 TYT + 13 AYT (20 Q)
                </div>
              </div>

              <div style={{ background: 'var(--bg-surface)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>SINAV SÜRESİ</div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--accent-ruby)', marginTop: '0.2rem' }}>
                  30 Dakika (Katı Sayaç)
                </div>
              </div>

              <div style={{ background: 'var(--bg-surface)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ANALİZ RAPORU</div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--accent-emerald)', marginTop: '0.2rem' }}>
                  ÖSYM Yüzdelik Dilim
                </div>
              </div>
            </div>

            {/* Launch Button */}
            <button
              type="button"
              className="btn-primary"
              onClick={handleLaunchTgProva}
              style={{
                width: '100%',
                padding: '0.875rem',
                fontSize: '1.05rem',
                fontWeight: 800,
                background: 'var(--accent-amber)',
                color: '#000',
                borderColor: 'var(--accent-amber)',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <Trophy size={20} />
              <span>Derece Provasını Başlat (30 Dk)</span>
            </button>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* 5. HATA DEFTERİ (MISTAKE NOTEBOOK) TAB                           */}
      {/* ================================================================= */}
      {activeTab === 'mistakes' && (
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <RotateCcw size={22} color="var(--accent-ruby)" />
                  <span>{t.exams.modeMistakes}</span>
                </h2>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Yanlış yaptığın sorular burada birikir. Tekrar çözüp doğru yanıtladığında otomatik olarak temizlenir.
                </p>
              </div>

              {wrongQuestionIds.length > 0 && (
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleLaunchMistakes}
                  style={{ gap: '0.4rem', background: 'var(--accent-ruby)', borderColor: 'var(--accent-ruby)' }}
                >
                  <Play size={16} fill="currentColor" />
                  <span>Tüm Hataları Tekrar Çöz ({wrongQuestionIds.length})</span>
                </button>
              )}
            </div>
          </div>

          {wrongQuestionIds.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
              <CheckCircle2 size={48} color="var(--accent-emerald)" style={{ margin: '0 auto 0.75rem' }} />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem' }}>Hata Defterin Tamamen Boş!</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Harika gidiyorsun! Yanlış yaptığın hiçbir soru kalmadı. Yeni deneme sınavları çözerek kendini test edebilirsin.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {resolveQuestionsByIds(wrongQuestionIds).map((q) => (
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
                      setActiveSession({
                        title: `${q.unitId.toUpperCase()} • Tekrar Çöz`,
                        subtitle: 'Hata Defteri Mastery',
                        examType: 'MISTAKE',
                        questions: [q],
                        isExamMode: false,
                        durationMinutes: 5,
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
      {/* 6. YILDIZLI SORULAR (BOOKMARKED QUESTIONS) TAB                    */}
      {/* ================================================================= */}
      {activeTab === 'bookmarks' && (
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Star size={22} color="var(--accent-amber)" fill="var(--accent-amber)" />
                  <span>{t.exams.modeBookmarks}</span>
                </h2>
                <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Önemli gördüğün veya beğendiğin yıldızlı soruların kişisel koleksiyonu.
                </p>
              </div>

              {bookmarkedQuestionIds.length > 0 && (
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleLaunchStarred}
                  style={{ gap: '0.4rem', background: 'var(--accent-amber)', color: '#000', borderColor: 'var(--accent-amber)' }}
                >
                  <Play size={16} fill="currentColor" />
                  <span>Yıldızlı Soruları Çöz ({bookmarkedQuestionIds.length})</span>
                </button>
              )}
            </div>
          </div>

          {bookmarkedQuestionIds.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)' }}>
              <Star size={48} color="var(--accent-amber)" style={{ margin: '0 auto 0.75rem' }} />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem' }}>Henüz Yıldızlı Soru Yok</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Test çözerken beğendiğin veya tekrar göz atmak istediğin soruları sağ üstteki yıldız butonuna basarak buraya ekleyebilirsin.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {resolveQuestionsByIds(bookmarkedQuestionIds).map((q) => (
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
                      onClick={() => onToggleBookmark(q.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--accent-amber)',
                        padding: '0.4rem',
                      }}
                      title="Yıldızdan Çıkar"
                    >
                      <Star size={18} fill="var(--accent-amber)" />
                    </button>
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => {
                        setActiveSession({
                          title: `${q.unitId.toUpperCase()} • Yıldızlı Soru`,
                          subtitle: 'Özel Pratik',
                          examType: 'BOOKMARK',
                          questions: [q],
                          isExamMode: false,
                          durationMinutes: 5,
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

      {/* Active Quiz Session Modal */}
      {activeSession && (
        <QuizSessionModal
          title={activeSession.title}
          subtitle={activeSession.subtitle}
          examType={activeSession.examType}
          mockId={activeSession.mockId}
          unitId={activeSession.unitId}
          questions={activeSession.questions}
          isExamMode={activeSession.isExamMode}
          durationMinutes={activeSession.durationMinutes}
          lang={lang}
          bookmarkedQuestionIds={bookmarkedQuestionIds}
          onRecordQuestion={onRecordQuestion}
          onToggleBookmark={onToggleBookmark}
          onSaveAttempt={onSaveAttempt}
          onClose={() => setActiveSession(null)}
        />
      )}
    </section>
  );
};
