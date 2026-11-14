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
} from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { SLIDE_DECK_STRINGS } from '../../i18n/slideDeckStrings';
import { ALL_CHEMISTRY_UNITS } from '../../data/units';
import type { ChemistryUnitSeedData } from '../../data/units/types';
import { UnitSlideDeckModal } from './UnitSlideDeckModal';

export interface CurriculumViewProps {
  initialExamFilter?: 'ALL' | 'TYT' | 'AYT';
  todayCount: number;
  dailyGoal: number;
  lang: LanguageCode;
  solvedQuestions: Record<string, boolean>;
  completedSlideUnits: string[];
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
  onMarkUnitSlidesCompleted,
  onOpenUnitQuiz,
  onOpenUnitCards,
  onOpen3DScene,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const s = SLIDE_DECK_STRINGS[lang] || SLIDE_DECK_STRINGS.tr;

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

  return (
    <section className="curriculum-container" aria-label={t.curriculum.heroTitle}>
      {/* Hero Header */}
      <div className="section-header">
        <div>
          <h1>{t.curriculum.heroTitle}</h1>
          <p className="subtitle-text">{t.curriculum.heroSubtitle}</p>
        </div>
        <div className="telemetry-pill">
          <span>
            {todayCount} / {dailyGoal} {t.stats.solved}
          </span>
        </div>
      </div>

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

      {/* Units Grid */}
      <div className="units-grid-container">
        {filteredUnits.map((u) => {
          const solved = getUnitSolvedCount(u.id);
          const percent = Math.min(100, Math.round((solved / 128) * 100));
          const isSlidesCompleted = completedSlideUnits.includes(u.id);

          return (
            <article key={u.id} className="unit-card">
              {/* Unit Card Header */}
              <div className="unit-card-top">
                <div className="unit-meta-badges">
                  <span className={`exam-tag ${u.exam.toLowerCase()}`}>{u.exam}</span>
                  <span className="grade-tag">{u.grade}. Sınıf</span>
                  <span className="unit-number-tag">#{String(u.order).padStart(2, '0')}</span>
                </div>

                {/* Slide Status Badge */}
                {isSlidesCompleted ? (
                  <span className="slide-status-badge completed">
                    <CheckCircle2 size={14} />
                    <span>{s.slidesDoneBadge}</span>
                  </span>
                ) : (
                  <span className="slide-status-badge">
                    <BookOpen size={14} />
                    <span>{s.slidesBadge}</span>
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="unit-card-title">{u.title[lang] || u.title.tr}</h3>
              <p className="unit-card-subtitle">{u.subtitle[lang] || u.subtitle.tr}</p>

              {/* Solved Progress Bar */}
              <div className="unit-progress-container">
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

              {/* Unit Card Action Buttons */}
              <div className="unit-card-actions">
                {/* 1. Open Study Slide Deck */}
                <button
                  type="button"
                  className="unit-btn study-deck-btn"
                  onClick={() => setActiveUnitForDeck(u)}
                >
                  <BookOpen size={16} />
                  <span>{t.curriculum.openStudyGuide || 'Konu Özeti Slaytları'}</span>
                </button>

                {/* 2. Open 128-Q Quiz Bank */}
                <button
                  type="button"
                  className="unit-btn quiz-bank-btn"
                  onClick={() => onOpenUnitQuiz(u.id)}
                >
                  <FileCheck2 size={16} />
                  <span>{t.curriculum.startUnitQuiz || '128 Soru Bankası'}</span>
                </button>

                {/* 3. Open 3D Scene */}
                <button
                  type="button"
                  className="unit-btn lab-3d-btn"
                  onClick={() => onOpen3DScene(u.id)}
                  title="3D Kimya Laboratuvarı"
                >
                  <Box size={16} />
                  <span>{t.curriculum.open3dModel || '3D Lab'}</span>
                </button>

                {/* 4. Open Flashcards */}
                <button
                  type="button"
                  className="unit-btn cards-btn"
                  onClick={() => onOpenUnitCards(u.id)}
                  title="3D Leitner Flashcards"
                >
                  <Layers size={16} />
                  <span>{t.curriculum.studyCards || 'Kartlar'}</span>
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
