import React, { useState, useMemo } from 'react';
import { Clock, Sparkles, Trophy, CheckCircle2, Bookmark, X, RotateCcw, Play } from 'lucide-react';
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
import { EXAM_STRINGS } from '../../i18n/examStrings';

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
  const x = EXAM_STRINGS[lang] ?? EXAM_STRINGS.tr;

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

  const TILE_VARIANTS = ['', 'ky-tile--violet', 'ky-tile--gold', 'ky-tile--blue', 'ky-tile--ok', 'ky-tile--rose'];

  const renderMockCard = (mock: MockExamDefinition) => {
    const bestScore = mockBestScores[mock.id];
    return (
      <article key={mock.id} className="ky-card ex-card">
        <div className="ex-card__top">
          <div className={`ky-tile ${TILE_VARIANTS[mock.examNumber % TILE_VARIANTS.length]}`} aria-hidden="true">
            #{mock.examNumber}
          </div>
          <div className="ex-card__body">
            <h3 className="ex-card__title">{mock.title}</h3>
            <p className="ex-card__sub">{mock.subtitle}</p>
          </div>
        </div>
        <div className="ex-meta">
          <span className="ky-chip ky-chip--accent">{mock.badgeText}</span>
          {mock.visualFocus && <span className="ky-chip ky-chip--violet">Şekilli</span>}
          <span className="ky-chip ky-mono">
            <Clock size={12} aria-hidden="true" />
            {mock.durationMinutes} {x.minShort}
          </span>
          <span className="ky-chip ky-mono">{x.questionsN(mock.questionCount)}</span>
          {bestScore ? (
            <span className="ex-meta__end ex-meta__end--ok">{x.bestNet(bestScore.bestNet.toFixed(2), bestScore.attempts)}</span>
          ) : (
            <span className="ex-meta__end">{x.notSolved}</span>
          )}
        </div>
        <button
          type="button"
          className={`ky-btn ky-btn--block ${bestScore ? 'ky-btn--quiet' : 'ky-btn--primary'}`}
          data-sfx="start"
          onClick={() => handleLaunchTrial(mock)}
        >
          <Play size={16} fill="currentColor" aria-hidden="true" />
          <span>{bestScore ? x.replay : t.exams.startExam}</span>
        </button>
      </article>
    );
  };

  const renderTrialList = (list: MockExamDefinition[], label: string) => {
    const featured = list.find((m) => !mockBestScores[m.id]) ?? list[0];
    const rest = featured ? list.filter((m) => m.id !== featured.id) : [];
    return (
      <>
        <div className="ex-filters">
          <p className="ex-subhead">{label}</p>
          <button
            type="button"
            className="ky-chip ky-chip--lg"
            aria-pressed={visualOnlyFilter}
            onClick={() => setVisualOnlyFilter((prev) => !prev)}
          >
            <Sparkles size={14} aria-hidden="true" />
            <span>%100 Şekilli (26–35)</span>
          </button>
        </div>

        {featured && (
          <section className="ky-stage ex-feature" aria-label={x.featured}>
            <div className="ky-floor" />
            <div className="ex-feature__art ky-persp" aria-hidden="true">
              <div className="ky-rig" style={{ inset: 0 }}>
              <span className="ky-bond" style={{ left: 55, top: 36, width: 36, transform: 'rotate(145deg)' }} />
              <span className="ky-bond" style={{ left: 55, top: 36, width: 36, transform: 'rotate(35deg)' }} />
              <span className="ky-atom" style={{ ['--c' as string]: '#E9EEF5', ['--cd' as string]: '#7C8798', left: 8, top: 44, width: 28, height: 28, transform: 'translateZ(-18px)' }} />
              <span className="ky-atom" style={{ ['--c' as string]: '#E9EEF5', ['--cd' as string]: '#7C8798', left: 74, top: 44, width: 28, height: 28, transform: 'translateZ(18px)' }} />
              <span className="ky-atom" style={{ ['--c' as string]: '#FF6B7A', ['--cd' as string]: '#9C1830', left: 32, top: 8, width: 46, height: 46 }} />
              </div>
            </div>
            <div className="ex-feature__top">
              <span className="ky-eyebrow">{x.featured} · #{featured.examNumber}</span>
              <h2 className="ky-disp">{featured.title}</h2>
              <p>{featured.subtitle}</p>
            </div>
            <div className="ex-meta">
              <span className="ky-chip ky-chip--gold">{featured.badgeText}</span>
              <span className="ky-chip ky-mono">
                <Clock size={12} aria-hidden="true" />
                {featured.durationMinutes} {x.minShort}
              </span>
              <span className="ky-chip ky-mono">{x.questionsN(featured.questionCount)}</span>
            </div>
            <button
              type="button"
              className="ky-btn ky-btn--primary ky-btn--block"
              data-sfx="start"
              onClick={() => handleLaunchTrial(featured)}
            >
              <Play size={16} fill="currentColor" aria-hidden="true" />
              <span>{mockBestScores[featured.id] ? x.replay : t.exams.startExam}</span>
            </button>
          </section>
        )}

        <div className="ky-grid" style={{ ['--ky-grid-min' as string]: '300px' }}>
          {rest.map(renderMockCard)}
        </div>
      </>
    );
  };

  const renderQuestionRows = (
    ids: string[],
    kind: 'mistake' | 'bookmark'
  ) =>
    resolveQuestionsByIds(ids).map((q) => (
      <div key={q.id} className="ky-card ex-row">
        <div className="ex-row__body">
          <div className="ex-row__meta">
            <span className={`ky-chip ky-mono ${kind === 'mistake' ? 'ky-chip--bad' : 'ky-chip--gold'}`}>{q.unitId.toUpperCase()}</span>
            <span className="ky-chip ky-mono">{q.id}</span>
            {kind === 'mistake' && q.diagram && <span className="ky-chip ky-chip--violet">Şekilli</span>}
          </div>
          <p className="ex-row__stem">{q.stem}</p>
        </div>
        <div className="ex-row__actions">
          {kind === 'bookmark' && (
            <button
              type="button"
              className="ky-icon-btn is-on"
              style={{ color: 'var(--gold)' }}
              onClick={() => onToggleBookmark(q.id)}
              aria-label={x.bookmarkRemove}
            >
              <Bookmark size={18} fill="currentColor" aria-hidden="true" />
            </button>
          )}
          <button
            type="button"
            className="ky-btn ky-btn--quiet ky-btn--sm"
            data-sfx="start"
            onClick={() =>
              setActiveSession(
                kind === 'mistake'
                  ? {
                      title: `${q.unitId.toUpperCase()} • Tekrar Çöz`,
                      subtitle: 'Hata Defteri Mastery',
                      examType: 'MISTAKE',
                      questions: [q],
                      isExamMode: false,
                      durationMinutes: 5,
                    }
                  : {
                      title: `${q.unitId.toUpperCase()} • Yıldızlı Soru`,
                      subtitle: 'Özel Pratik',
                      examType: 'BOOKMARK',
                      questions: [q],
                      isExamMode: false,
                      durationMinutes: 5,
                    }
              )
            }
          >
            {kind === 'mistake' ? 'Tekrar Çöz' : 'Çöz'}
          </button>
        </div>
      </div>
    ));

  const tabs: { id: ExamCenterCategory; label: string }[] = [
    { id: 'tyt', label: 'TYT' },
    { id: 'ayt', label: 'AYT' },
    { id: 'sets', label: x.tabUnits },
    { id: 'tg', label: x.tabTg },
  ];

  return (
    <section className="ky-screen ex-screen" aria-label={t.exams.title}>
      <div className="ky-fit">
      <div className="ex-center">
      <header className="ex-head">
        <p className="ky-eyebrow">40 TYT · 40 AYT · 192</p>
        <h1 className="ky-disp ky-fs-28">{t.exams.title}</h1>
      </header>

      <div className="ky-segmented ex-tabs" role="tablist" aria-label={t.exams.title}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="ex-wells">
        <button
          type="button"
          className="ky-well ex-well"
          aria-pressed={activeTab === 'mistakes'}
          onClick={() => setActiveTab('mistakes')}
        >
          <span className="ex-well__icon ex-well__icon--bad">
            <X size={18} strokeWidth={2.6} aria-hidden="true" />
          </span>
          <span className="ex-well__text">
            <strong className="ky-mono">{wrongQuestionIds.length}</strong>
            <span>{t.exams.modeMistakes}</span>
          </span>
        </button>
        <button
          type="button"
          className="ky-well ex-well"
          aria-pressed={activeTab === 'bookmarks'}
          onClick={() => setActiveTab('bookmarks')}
        >
          <span className="ex-well__icon ex-well__icon--gold">
            <Bookmark size={18} aria-hidden="true" />
          </span>
          <span className="ex-well__text">
            <strong className="ky-mono">{bookmarkedQuestionIds.length}</strong>
            <span>{t.exams.modeBookmarks}</span>
          </span>
        </button>
      </div>

      {activeTab === 'tyt' && renderTrialList(tytMocks, '1. Aşama TYT Kimya (40 Deneme • 7 Soru • 10 Dakika)')}
      {activeTab === 'ayt' && renderTrialList(aytMocks, '2. Aşama AYT Kimya (40 Deneme • 13 Soru • 20 Dakika)')}

      {/* Unit practice sets */}
      {activeTab === 'sets' && (
        <>
          <div className="ky-card ex-picker">
            <label htmlFor="unit-picker-select">Çalışmak İstediğin Üniteyi Seç (24 Ünite):</label>
            <select
              id="unit-picker-select"
              className="ky-select"
              value={selectedUnitId}
              onChange={(e) => setSelectedUnitId(e.target.value)}
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

          <div className="ky-section-head">
            <h2 className="ky-disp" style={{ fontSize: '1.15rem' }}>
              {currentUnit.id.toUpperCase()}: {currentUnit.title[lang] || currentUnit.title.tr}
            </h2>
            <span className="ky-chip ky-mono">8 Test Seti • 128 Soru</span>
          </div>

          <div className="ky-grid" style={{ ['--ky-grid-min' as string]: '260px' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((setNum) => {
              const setQuestions = currentUnitQuestions.filter((q) => q.setNumber === setNum);
              const solvedCount = setQuestions.filter((q) => solvedQuestions[q.id] !== undefined).length;
              const isCompleted = solvedCount === setQuestions.length;

              const tierName = setNum <= 2 ? 'Kolay' : setNum <= 4 ? 'Orta' : setNum <= 6 ? 'Zor' : 'ÖSYM Düzeyi';
              const tierChip =
                setNum <= 2 ? 'ky-chip--ok' : setNum <= 4 ? 'ky-chip--accent' : setNum <= 6 ? 'ky-chip--gold' : 'ky-chip--bad';
              const tileVariant = setNum <= 2 ? 'ky-tile--ok' : setNum <= 4 ? '' : setNum <= 6 ? 'ky-tile--gold' : 'ky-tile--rose';

              return (
                <article key={setNum} className="ky-card ex-card">
                  <div className="ex-card__top">
                    <div className={`ky-tile ${tileVariant}`} aria-hidden="true">
                      #{setNum}
                    </div>
                    <div className="ex-card__body">
                      <h3 className="ex-card__title">Test Seti {setNum}</h3>
                      <p className="ex-card__sub">16 Soru • 4 Şekilli Soru • Pratik Modu</p>
                    </div>
                  </div>
                  <div className="ex-meta">
                    <span className={`ky-chip ${tierChip}`}>{tierName}</span>
                  </div>
                  <div className="ex-progress">
                    <div className="ky-track" aria-hidden="true">
                      <div
                        className={`ky-fill ${isCompleted ? 'ky-fill--ok' : ''}`}
                        style={{ inlineSize: `${(solvedCount / 16) * 100}%` }}
                      />
                    </div>
                    <span className="ky-mono">{solvedCount} / 16</span>
                  </div>
                  <button
                    type="button"
                    className={`ky-btn ky-btn--block ${isCompleted ? 'ky-btn--quiet' : 'ky-btn--primary'}`}
                    data-sfx="start"
                    onClick={() => handleLaunchUnitSet(setNum)}
                  >
                    <Play size={16} fill="currentColor" aria-hidden="true" />
                    <span>{isCompleted ? 'Tekrar Et' : 'Sete Başla'}</span>
                  </button>
                </article>
              );
            })}
          </div>
        </>
      )}

      {/* TG Derece Provasi */}
      {activeTab === 'tg' && (
        <section className="ky-stage ex-tg">
          <div className="ky-floor" />
          <div>
            <span className="ky-chip ky-chip--gold">YKS Şampiyonluk Simülasyonu</span>
            <h2 className="ky-disp">{TG_PROVA_SPEC.title[lang] || TG_PROVA_SPEC.title.tr}</h2>
          </div>
          <p>
            Gerçek sınav formatında <strong>20 Soru</strong> (7 TYT + 13 AYT). 30 dakika katı süre sınırlaması, ÖSYM 4
            yanlış 1 doğruyu götürür Net hesaplaması ve Türkiye Geneli YKS Sayısal Kimya tahmini yüzdelik dilim
            hesaplaması içerir.
          </p>
          <div className="ex-tg__specs">
            <div className="ky-well ex-tg__spec">
              <small>SORU DAĞILIMI</small>
              <strong style={{ color: 'var(--accent)' }}>7 TYT + 13 AYT (20 Q)</strong>
            </div>
            <div className="ky-well ex-tg__spec">
              <small>SINAV SÜRESİ</small>
              <strong style={{ color: 'var(--bad)' }}>30 Dakika (Katı Sayaç)</strong>
            </div>
            <div className="ky-well ex-tg__spec">
              <small>ANALİZ RAPORU</small>
              <strong style={{ color: 'var(--ok)' }}>ÖSYM Yüzdelik Dilim</strong>
            </div>
          </div>
          <button type="button" className="ky-btn ky-btn--gold ky-btn--lg ky-btn--block" data-sfx="start" onClick={handleLaunchTgProva}>
            <Trophy size={20} aria-hidden="true" />
            <span>Derece Provasını Başlat (30 Dk)</span>
          </button>
        </section>
      )}

      {/* Mistakes */}
      {activeTab === 'mistakes' && (
        <div className="ex-list">
          <div className="ky-card ex-listhead">
            <div className="ex-listhead__text">
              <h2 className="ky-disp">{t.exams.modeMistakes}</h2>
              <p>Yanlış yaptığın sorular burada birikir. Tekrar çözüp doğru yanıtladığında otomatik olarak temizlenir.</p>
            </div>
            {wrongQuestionIds.length > 0 && (
              <button type="button" className="ky-btn ky-btn--danger ky-btn--sm" data-sfx="start" onClick={handleLaunchMistakes}>
                <RotateCcw size={16} aria-hidden="true" />
                <span>Tüm Hataları Tekrar Çöz ({wrongQuestionIds.length})</span>
              </button>
            )}
          </div>

          {wrongQuestionIds.length === 0 ? (
            <div className="ky-card ky-empty">
              <CheckCircle2 size={44} color="var(--ok)" aria-hidden="true" />
              <h3 className="ky-disp">Hata Defterin Tamamen Boş!</h3>
              <p>Harika gidiyorsun! Yanlış yaptığın hiçbir soru kalmadı. Yeni deneme sınavları çözerek kendini test edebilirsin.</p>
            </div>
          ) : (
            renderQuestionRows(wrongQuestionIds, 'mistake')
          )}
        </div>
      )}

      {/* Bookmarks */}
      {activeTab === 'bookmarks' && (
        <div className="ex-list">
          <div className="ky-card ex-listhead">
            <div className="ex-listhead__text">
              <h2 className="ky-disp">{t.exams.modeBookmarks}</h2>
              <p>Önemli gördüğün veya beğendiğin yıldızlı soruların kişisel koleksiyonu.</p>
            </div>
            {bookmarkedQuestionIds.length > 0 && (
              <button type="button" className="ky-btn ky-btn--gold ky-btn--sm" data-sfx="start" onClick={handleLaunchStarred}>
                <Play size={16} fill="currentColor" aria-hidden="true" />
                <span>Yıldızlı Soruları Çöz ({bookmarkedQuestionIds.length})</span>
              </button>
            )}
          </div>

          {bookmarkedQuestionIds.length === 0 ? (
            <div className="ky-card ky-empty">
              <Bookmark size={44} color="var(--gold)" aria-hidden="true" />
              <h3 className="ky-disp">Henüz Yıldızlı Soru Yok</h3>
              <p>Test çözerken beğendiğin veya tekrar göz atmak istediğin soruları kaydet butonuna basarak buraya ekleyebilirsin.</p>
            </div>
          ) : (
            renderQuestionRows(bookmarkedQuestionIds, 'bookmark')
          )}
        </div>
      )}

      </div>
      </div>

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
