import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  CheckCircle2,
  FileCheck2,
  Box,
  Layers,
  AlertTriangle,
  ChevronRight,
  Play,
} from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { CURRICULUM_STRINGS } from '../../i18n/curriculumStrings';
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
  const cs = CURRICULUM_STRINGS[lang] ?? CURRICULUM_STRINGS.tr;
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

  const goalPct = dailyGoal > 0 ? Math.min(100, Math.round((todayCount / dailyGoal) * 100)) : 0;
  const nextUnit =
    filteredUnits.find((u) => getUnitSolvedCount(u.id) < 128) ?? filteredUnits[0] ?? ALL_CHEMISTRY_UNITS[0];

  return (
    <section className="cur" aria-label={t.curriculum.heroTitle}>
      <header className="cur-head">
        <p className="ky-eyebrow">{t.curriculum.heroSubtitle}</p>
        <h1 className="ky-disp cur-title">{t.curriculum.heroTitle}</h1>
      </header>

      <div className="cur-top">
        {/* Today's goal hero */}
        <section className="ky-stage cur-hero" aria-label={cs.goalEyebrow}>
          <div className="ky-floor" />
          <div className="cur-hero-copy">
            <p className="ky-eyebrow cur-hero-eyebrow">{cs.goalEyebrow}</p>
            <p className="ky-disp cur-hero-num">
              {todayCount}
              <span> / {dailyGoal} {cs.goalUnit}</span>
            </p>
            <div className="ky-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={goalPct} aria-label={cs.goalEyebrow}>
              <div className="ky-fill" style={{ inlineSize: `${Math.max(goalPct, 3)}%` }} />
            </div>
            <button
              type="button"
              className="ky-btn ky-btn--gold cur-hero-cta"
              data-sfx="start"
              onClick={() => nextUnit && onOpenUnitQuiz(nextUnit.id)}
            >
              <Play size={16} fill="currentColor" aria-hidden="true" />
              {cs.solveCta}
            </button>
          </div>
          <div className="cur-mol ky-float" aria-hidden="true">
            <div className="ky-orbit cur-mol-orbit" />
            <div className="ky-bond cur-mol-bond-a" />
            <div className="ky-bond cur-mol-bond-b" />
            <div className="ky-atom cur-mol-h1" />
            <div className="ky-atom cur-mol-h2" />
            <div className="ky-atom cur-mol-o" />
          </div>
        </section>

        {/* TYT -> AYT progression */}
        <section className="cur-stages" aria-label={cs.progression}>
          <button
            type="button"
            className="ky-well cur-stage"
            aria-pressed={examFilter === 'TYT'}
            onClick={() => setExamFilter(examFilter === 'TYT' ? 'ALL' : 'TYT')}
          >
            <span className="cur-stage-row">
              <span className="ky-chip ky-chip--accent">{cs.stage1}</span>
              <span className="ky-mono cur-stage-pct">%{tytMasteryPct}</span>
            </span>
            <span className="cur-stage-title">
              TYT Kimya <small>· {cs.unitsCount(tytUnits.length)}</small>
            </span>
            <span className="ky-track cur-stage-track"><span className="ky-fill" style={{ inlineSize: `${Math.max(tytMasteryPct, 3)}%` }} /></span>
          </button>
          <ChevronRight size={18} className="cur-stage-arrow" aria-hidden="true" />
          <button
            type="button"
            className="ky-well cur-stage"
            aria-pressed={examFilter === 'AYT'}
            onClick={() => setExamFilter(examFilter === 'AYT' ? 'ALL' : 'AYT')}
          >
            <span className="cur-stage-row">
              <span className="ky-chip ky-chip--violet">{cs.stage2}</span>
              <span className="ky-mono cur-stage-pct">%{aytMasteryPct}</span>
            </span>
            <span className="cur-stage-title">
              AYT Kimya <small>· {cs.unitsCount(aytUnits.length)}</small>
            </span>
            <span className="ky-track cur-stage-track"><span className="ky-fill ky-fill--violet" style={{ inlineSize: `${Math.max(aytMasteryPct, 3)}%` }} /></span>
          </button>
        </section>
      </div>

      {showPrereqWarning && (
        <div className="cur-prereq" role="status">
          <AlertTriangle size={18} className="cur-prereq-icon" aria-hidden="true" />
          <div className="cur-prereq-body">
            <strong>YKS Koçluk Tavsiyesi:</strong>{' '}
            <span>
              1. Aşama TYT Kimya temeliniz henüz %{tytMasteryPct} seviyesinde. YKS başarısı için
              AYT konularına geçmeden önce TYT ünitelerinde en az %60 barajına ulaşmanız önerilir.
            </span>
          </div>
          <button type="button" className="ky-btn ky-btn--quiet ky-btn--sm" onClick={() => setExamFilter('TYT')}>
            TYT Ünitelerine Odaklan
          </button>
        </div>
      )}

      <div className="cur-units-head">
        <h2 className="cur-units-title">{cs.unitsHeading}</h2>
        <div className="ky-scroll-x cur-chips" role="group" aria-label="Sınav Filtresi">
          {(
            [
              ['ALL', `${t.filters.all} ${ALL_CHEMISTRY_UNITS.length}`],
              ['TYT', `TYT ${tytUnits.length}`],
              ['AYT', `AYT ${aytUnits.length}`],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={`ky-chip ${examFilter === key ? 'on' : ''}`}
              aria-pressed={examFilter === key}
              onClick={() => setExamFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="cur-filters">
        <div className="ky-scroll-x" role="group" aria-label="Sınıf Filtresi">
          {(['ALL', 9, 10, 11, 12] as const).map((g) => (
            <button
              key={g}
              type="button"
              className={`ky-chip ${gradeFilter === g ? 'on' : ''}`}
              aria-pressed={gradeFilter === g}
              onClick={() => setGradeFilter(g)}
            >
              {g === 'ALL' ? t.filters.all : `${g}. ${t.filters.grade}`}
            </button>
          ))}
        </div>
        <label className="cur-search">
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            className="ky-input"
            placeholder={t.filters.searchPlaceholder || 'Ünite veya kavram ara...'}
            aria-label={t.filters.searchPlaceholder || 'Ünite veya kavram ara...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
      </div>

      {filteredUnits.length === 0 && <p className="ky-empty">{cs.noResults}</p>}

      <div className="cur-grid">
        {filteredUnits.map((u) => {
          const solved = getUnitSolvedCount(u.id);
          const percent = Math.min(100, Math.round((solved / 128) * 100));
          const isSlidesCompleted = completedSlideUnits.includes(u.id);
          const isAyt = u.exam === 'AYT';
          const title = u.title[lang] || u.title.tr;

          return (
            <article key={u.id} className="ky-card cur-unit">
              <div className="cur-unit-top">
                <span className={`ky-tile cur-unit-tile ${isAyt ? 'ky-tile--violet' : ''}`} aria-hidden="true">
                  {String(u.order).padStart(2, '0')}
                </span>
                <div className="cur-unit-text">
                  <h3 className="cur-unit-title" title={title}>{title}</h3>
                  <p className="cur-unit-sub">{u.subtitle[lang] || u.subtitle.tr}</p>
                </div>
                <span className={`ky-chip ${isAyt ? 'ky-chip--violet' : 'ky-chip--accent'}`}>
                  {u.exam} · {u.grade}
                </span>
              </div>

              <div className="cur-unit-progress">
                <div
                  className="ky-track"
                  role="progressbar"
                  aria-valuenow={percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={title}
                >
                  <div className={`ky-fill ${isAyt ? 'ky-fill--violet' : ''}`} style={{ inlineSize: `${Math.max(percent, 2)}%` }} />
                </div>
                <span className="ky-mono cur-unit-count">
                  {solved} / 128 {t.stats.solved}
                </span>
              </div>

              {isSlidesCompleted && (
                <span className="ky-chip ky-chip--ok cur-unit-done" title={s.slidesDoneBadge}>
                  <CheckCircle2 size={13} aria-hidden="true" />
                  {s.slidesDoneBadge}
                </span>
              )}

              <div className="cur-unit-actions">
                <button type="button" className="ky-pill-action" onClick={() => setActiveUnitForDeck(u)} title={`${title} - ${pills.slide}`}>
                  <BookOpen size={15} aria-hidden="true" />
                  <span>{pills.slide}</span>
                </button>
                <button type="button" className="ky-pill-action" data-sfx="start" onClick={() => onOpenUnitQuiz(u.id)} title={`${title} - ${pills.quiz}`}>
                  <FileCheck2 size={15} aria-hidden="true" />
                  <span>{pills.quiz}</span>
                </button>
                <button type="button" className="ky-pill-action" onClick={() => onOpen3DScene(u.id)} title={`${title} - ${pills.lab3d}`}>
                  <Box size={15} aria-hidden="true" />
                  <span>{pills.lab3d}</span>
                </button>
                <button type="button" className="ky-pill-action" onClick={() => onOpenUnitCards(u.id)} title={`${title} - ${pills.cards}`}>
                  <Layers size={15} aria-hidden="true" />
                  <span>{pills.cards}</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

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
