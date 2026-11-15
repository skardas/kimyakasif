import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  CheckCircle2,
  FileCheck2,
  Box,
  Layers,
  Sparkles,
  Filter,
  AlertTriangle,
  Award,
  Target,
  ArrowRight,
} from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { SLIDE_DECK_STRINGS } from '../../i18n/slideDeckStrings';
import { ALL_CHEMISTRY_UNITS } from '../../data/units';
import type { ChemistryUnitSeedData } from '../../data/units/types';
import { UnitSlideDeckModal } from './UnitSlideDeckModal';

export interface UnitActionPillLabels {
  slide: string;
  quiz: string;
  lab3d: string;
  cards: string;
}

export const UNIT_ACTION_PILLS: Record<LanguageCode, UnitActionPillLabels> = {
  tr: { slide: 'Slayt', quiz: 'Test', lab3d: '3D', cards: 'Kart' },
  en: { slide: 'Slide', quiz: 'Test', lab3d: '3D', cards: 'Card' },
  de: { slide: 'Folie', quiz: 'Test', lab3d: '3D', cards: 'Karte' },
  fr: { slide: 'Diapo', quiz: 'Test', lab3d: '3D', cards: 'Carte' },
  ru: { slide: 'Слайд', quiz: 'Тест', lab3d: '3D', cards: 'Карта' },
  ar: { slide: 'شريحة', quiz: 'اختبار', lab3d: '3D', cards: 'بطاقة' },
  zh: { slide: '幻灯片', quiz: '测试', lab3d: '3D', cards: '闪卡' },
  ku: { slide: 'Slayt', quiz: 'Test', lab3d: '3D', cards: 'Qert' },
};

export interface CurriculumViewProps {
  initialExamFilter?: 'ALL' | 'TYT' | 'AYT';
  todayCount: number;
  dailyGoal: number;
  lang: LanguageCode;
  solvedQuestions: Record<string, boolean>;
  completedSlideUnits: string[];
  targetTrack?: 'TYT_FIRST' | 'TYT_ONLY' | 'AYT_FOCUS';
  onMarkUnitSlidesCompleted: (unitId: string) => void;
  onOpenUnitQuiz: (unitId: string) => void;
  onOpenUnitCards: (unitId: string) => void;
  onOpen3DScene: (sceneId: string) => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({
  initialExamFilter = 'ALL',
  todayCount,
  dailyGoal,
  lang,
  solvedQuestions,
  completedSlideUnits,
  targetTrack = 'TYT_FIRST',
  onMarkUnitSlidesCompleted,
  onOpenUnitQuiz,
  onOpenUnitCards,
  onOpen3DScene,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const s = SLIDE_DECK_STRINGS[lang] || SLIDE_DECK_STRINGS.tr;
  const pills = UNIT_ACTION_PILLS[lang] ?? UNIT_ACTION_PILLS.tr;

  const [examFilter, setExamFilter] = useState<'ALL' | 'TYT' | 'AYT'>(initialExamFilter);
  const [gradeFilter, setGradeFilter] = useState<number | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeUnitForDeck, setActiveUnitForDeck] = useState<ChemistryUnitSeedData | null>(null);

  // Filter units based on exam, grade, and search query
  const filteredUnits = useMemo(() => {
    return ALL_CHEMISTRY_UNITS.filter((u) => {
      if (examFilter !== 'ALL' && u.exam !== examFilter) return false;
      if (gradeFilter !== 'ALL' && u.grade !== gradeFilter) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const titleMatch = (u.title[lang] || u.title.tr).toLowerCase().includes(query);
        const subtitleMatch = (u.subtitle[lang] || u.subtitle.tr).toLowerCase().includes(query);
        const idMatch = u.id.toLowerCase().includes(query);
        return titleMatch || subtitleMatch || idMatch;
      }
      return true;
    });
  }, [examFilter, gradeFilter, searchQuery, lang]);

  // Calculate unit progress (solved out of 128)
  const getUnitSolvedCount = (unitId: string) => {
    let count = 0;
    for (let q = 1; q <= 128; q++) {
      const qId = `${unitId}-q${String(q).padStart(3, '0')}`;
      if (solvedQuestions[qId]) count++;
    }
    return count;
  };

  // TYT Stage Stats (u01–u10)
  const tytUnits = useMemo(() => ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT'), []);
  const tytSolvedCount = useMemo(() => {
    return tytUnits.reduce((acc, u) => acc + getUnitSolvedCount(u.id), 0);
  }, [tytUnits, solvedQuestions]);
  const tytMasteryPct = Math.min(100, Math.round((tytSolvedCount / (10 * 16)) * 100)); // 1 set of 16/unit = 100% baseline

  // AYT Stage Stats (u11–u24)
  const aytUnits = useMemo(() => ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'AYT'), []);
  const aytSolvedCount = useMemo(() => {
    return aytUnits.reduce((acc, u) => acc + getUnitSolvedCount(u.id), 0);
  }, [aytUnits, solvedQuestions]);
  const aytMasteryPct = Math.min(100, Math.round((aytSolvedCount / (14 * 16)) * 100));

  // Prerequisite prompt: if TYT_FIRST is active and TYT mastery < 60%
  const showPrereqWarning = targetTrack === 'TYT_FIRST' && tytMasteryPct < 60;

  return (
    <section className="curriculum-container" aria-label={t.curriculum.heroTitle}>
      {/* Hero Header */}
      <div className="section-header">
        <div>
          <div className="curriculum-header-badge-row">
            <h1>{t.curriculum.heroTitle}</h1>
            <span className="yks-progression-chip">
              {targetTrack === 'TYT_ONLY'
                ? '🎯 TYT Odaklı'
                : targetTrack === 'AYT_FOCUS'
                ? '⚡ AYT Odaklı'
                : '🇹🇷 1. TYT → 2. AYT Sıralı Takip'}
            </span>
          </div>
          <p className="subtitle-text">{t.curriculum.heroSubtitle}</p>
        </div>
        <div className="telemetry-pill">
          <span>
            {todayCount} / {dailyGoal} {t.stats.solved}
          </span>
        </div>
      </div>

      {/* YKS Sequential Exam Progression Overview Bar */}
      <div className="yks-stages-summary-strip">
        <div
          className={`yks-stage-pill ${examFilter === 'TYT' ? 'active' : ''}`}
          onClick={() => setExamFilter(examFilter === 'TYT' ? 'ALL' : 'TYT')}
          role="button"
          tabIndex={0}
        >
          <div className="stage-pill-meta">
            <span className="stage-num-badge tyt">1. Aşama</span>
            <strong className="stage-title-text">TYT Kimya</strong>
            <span className="stage-q-count">u01–u10 • 7 YKS Sorusu</span>
          </div>
          <div className="stage-mini-progress">
            <span className="stage-pct">%{tytMasteryPct}</span>
            <div className="stage-track">
              <div className="stage-fill tyt" style={{ width: `${tytMasteryPct}%` }} />
            </div>
          </div>
        </div>

        <div className="yks-stage-divider">
          <ArrowRight size={16} />
        </div>

        <div
          className={`yks-stage-pill ${examFilter === 'AYT' ? 'active' : ''}`}
          onClick={() => setExamFilter(examFilter === 'AYT' ? 'ALL' : 'AYT')}
          role="button"
          tabIndex={0}
        >
          <div className="stage-pill-meta">
            <span className="stage-num-badge ayt">2. Aşama</span>
            <strong className="stage-title-text">AYT Kimya</strong>
            <span className="stage-q-count">u11–u24 • 13 YKS Sorusu</span>
          </div>
          <div className="stage-mini-progress">
            <span className="stage-pct">%{aytMasteryPct}</span>
            <div className="stage-track">
              <div className="stage-fill ayt" style={{ width: `${aytMasteryPct}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisite Coaching Prompt */}
      {showPrereqWarning && (
        <div className="prereq-curriculum-banner" role="status">
          <AlertTriangle size={18} className="prereq-alert-icon" />
          <div className="prereq-body">
            <strong>YKS Koçluk Tavsiyesi:</strong>
            <span>
              1. Aşama TYT Kimya temeliniz henüz %{tytMasteryPct} seviyesinde. YKS başarısı için
              AYT konularına geçmeden önce TYT ünitelerinde en az %60 barajına ulaşmanız önerilir.
            </span>
          </div>
          <button
            type="button"
            className="prereq-filter-btn"
            onClick={() => setExamFilter('TYT')}
          >
            TYT Ünitelerine Odaklan
          </button>
        </div>
      )}

      {/* Filters and Search Bar */}
      <div className="curriculum-filter-bar">
        {/* Exam Type Filters */}
        <div className="filter-chips-group" role="radiogroup" aria-label="Sınav Filtresi">
          <button
            type="button"
            className={`filter-chip ${examFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => setExamFilter('ALL')}
          >
            {t.filters.all} (24)
          </button>
          <button
            type="button"
            className={`filter-chip ${examFilter === 'TYT' ? 'active' : ''}`}
            onClick={() => setExamFilter('TYT')}
          >
            TYT (10)
          </button>
          <button
            type="button"
            className={`filter-chip ${examFilter === 'AYT' ? 'active' : ''}`}
            onClick={() => setExamFilter('AYT')}
          >
            AYT (14)
          </button>
        </div>

        {/* Grade Filters */}
        <div className="grade-chips-group" role="radiogroup" aria-label="Sınıf Filtresi">
          <button
            type="button"
            className={`grade-chip ${gradeFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => setGradeFilter('ALL')}
          >
            {t.filters.all}
          </button>
          {[9, 10, 11, 12].map((g) => (
            <button
              key={g}
              type="button"
              className={`grade-chip ${gradeFilter === g ? 'active' : ''}`}
              onClick={() => setGradeFilter(g)}
            >
              {g}. {t.filters.grade}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="curriculum-search-input"
            placeholder={t.filters.searchPlaceholder || 'Ünite veya kavram ara...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Units Grid with Compact Premium Action Pills */}
      <div className="units-grid-container">
        {filteredUnits.map((u) => {
          const solved = getUnitSolvedCount(u.id);
          const percent = Math.min(100, Math.round((solved / 128) * 100));
          const isSlidesCompleted = completedSlideUnits.includes(u.id);

          return (
            <article key={u.id} className="unit-card compact-unit-card">
              {/* Unit Card Header */}
              <div className="unit-card-top">
                <div className="unit-meta-badges">
                  <span className={`exam-tag ${u.exam.toLowerCase()}`}>{u.exam}</span>
                  <span className="grade-tag">{u.grade}. Sınıf</span>
                  <span className="unit-number-tag">#{String(u.order).padStart(2, '0')}</span>
                </div>

                {/* Slide Status Badge */}
                {isSlidesCompleted ? (
                  <span className="slide-status-badge completed" title={s.slidesDoneBadge}>
                    <CheckCircle2 size={13} />
                    <span className="badge-text-compact">{s.slidesDoneBadge}</span>
                  </span>
                ) : (
                  <span className="slide-status-badge" title={s.slidesBadge}>
                    <BookOpen size={13} />
                    <span className="badge-text-compact">{s.slidesBadge}</span>
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="unit-card-title">{u.title[lang] || u.title.tr}</h3>
              <p className="unit-card-subtitle">{u.subtitle[lang] || u.subtitle.tr}</p>

              {/* Solved Progress Bar */}
              <div className="unit-progress-container compact-progress">
                <div className="progress-labels">
                  <span className="solved-count">
                    {solved} / 128 {t.stats.solved}
                  </span>
                  <span className="progress-pct">%{percent}</span>
                </div>
                <div className="progress-track-bg">
                  <div
                    className="progress-fill-bar"
                    style={{ width: `${percent}%` }}
                    role="progressbar"
                    aria-valuenow={percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>

              {/* Compact Localized Action Pills (Slayt, Test, 3D, Kart) */}
              <div className="unit-card-action-pills">
                {/* 1. Open Study Slide Deck */}
                <button
                  type="button"
                  className="action-pill pill-slide"
                  onClick={() => setActiveUnitForDeck(u)}
                  title={`${u.title[lang] || u.title.tr} - ${pills.slide}`}
                >
                  <BookOpen size={14} />
                  <span>{pills.slide}</span>
                </button>

                {/* 2. Open 128-Q Quiz Bank */}
                <button
                  type="button"
                  className="action-pill pill-quiz"
                  onClick={() => onOpenUnitQuiz(u.id)}
                  title={`${u.title[lang] || u.title.tr} - ${pills.quiz}`}
                >
                  <FileCheck2 size={14} />
                  <span>{pills.quiz}</span>
                </button>

                {/* 3. Open 3D Scene */}
                <button
                  type="button"
                  className="action-pill pill-3d"
                  onClick={() => onOpen3DScene(u.id)}
                  title={`${u.title[lang] || u.title.tr} - ${pills.lab3d}`}
                >
                  <Box size={14} />
                  <span>{pills.lab3d}</span>
                </button>

                {/* 4. Open Flashcards */}
                <button
                  type="button"
                  className="action-pill pill-cards"
                  onClick={() => onOpenUnitCards(u.id)}
                  title={`${u.title[lang] || u.title.tr} - ${pills.cards}`}
                >
                  <Layers size={14} />
                  <span>{pills.cards}</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Interactive 9-Slide Deep Study Deck Modal */}
      {activeUnitForDeck && (
        <UnitSlideDeckModal
          unit={activeUnitForDeck}
          lang={lang}
          isCompleted={completedSlideUnits.includes(activeUnitForDeck.id)}
          onClose={() => setActiveUnitForDeck(null)}
          onMarkCompleted={onMarkUnitSlidesCompleted}
          onOpenUnitQuiz={onOpenUnitQuiz}
          onOpenUnitCards={onOpenUnitCards}
          onOpen3DScene={onOpen3DScene}
        />
      )}
    </section>
  );
};
