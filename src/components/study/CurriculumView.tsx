import React, { useState, useMemo } from 'react';
import { CheckCircle2, FileCheck2, Box, Layers, Presentation, User, SlidersHorizontal, WifiOff } from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { CURRICULUM_STRINGS } from '../../i18n/curriculumStrings';
import { SLIDE_DECK_STRINGS } from '../../i18n/slideDeckStrings';
import { redesignStrings } from '../../i18n/redesignStrings';
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
  isOffline?: boolean;
  solvedQuestions: Record<string, boolean>;
  completedSlideUnits: string[];
  onMarkUnitSlidesCompleted: (unitId: string) => void;
  onOpenProfile: () => void;
  onOpenSettings: () => void;
  onOpenUnitQuiz: (unitId: string) => void;
  onOpenUnitCards: (unitId: string) => void;
  onOpen3DScene: (sceneId: string) => void;
}

/**
 * Home: title + profile + settings, one "today's goal" row, a Tümü/TYT/AYT filter
 * and the unit list. Each unit card has four equal action keys.
 */
export const CurriculumView: React.FC<CurriculumViewProps> = ({
  initialExamFilter = 'ALL',
  todayCount,
  dailyGoal,
  lang,
  isOffline = false,
  solvedQuestions,
  completedSlideUnits,
  onMarkUnitSlidesCompleted,
  onOpenProfile,
  onOpenSettings,
  onOpenUnitQuiz,
  onOpenUnitCards,
  onOpen3DScene,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const s = SLIDE_DECK_STRINGS[lang] || SLIDE_DECK_STRINGS.tr;
  const cs = CURRICULUM_STRINGS[lang] ?? CURRICULUM_STRINGS.tr;
  const r = redesignStrings(lang);
  const pills = UNIT_ACTION_PILLS[lang] ?? UNIT_ACTION_PILLS.tr;

  const [examFilter, setExamFilter] = useState<'ALL' | 'TYT' | 'AYT'>(initialExamFilter);
  const [activeUnitForDeck, setActiveUnitForDeck] = useState<ChemistryUnitSeedData | null>(null);

  const filteredUnits = useMemo(
    () => ALL_CHEMISTRY_UNITS.filter((u) => examFilter === 'ALL' || u.exam === examFilter),
    [examFilter]
  );

  // Unit progress (solved out of 128)
  const getUnitSolvedCount = (unitId: string) => {
    let count = 0;
    for (let q = 1; q <= 128; q++) {
      const qId = `${unitId}-q${String(q).padStart(3, '0')}`;
      if (solvedQuestions[qId]) count++;
    }
    return count;
  };

  const tytCount = useMemo(() => ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT').length, []);
  const aytCount = ALL_CHEMISTRY_UNITS.length - tytCount;

  const goalPct = dailyGoal > 0 ? Math.min(1, todayCount / dailyGoal) : 0;
  const ringLen = 2 * Math.PI * 21;
  const nextUnit =
    filteredUnits.find((u) => getUnitSolvedCount(u.id) < 128) ?? filteredUnits[0] ?? ALL_CHEMISTRY_UNITS[0];

  return (
    <section className="ky-screen cur" aria-label={t.curriculum.heroTitle}>
      <header className="ky-screen-head">
        <h1 className="ky-disp ky-fs-28">{t.nav.curriculum}</h1>
        {isOffline && (
          <span className="ky-chip ky-chip--ok cur-offline" title={t.offlineModeActive}>
            <WifiOff size={14} aria-hidden="true" />
            <span className="cur-offline__label">{t.offlineModeActive}</span>
          </span>
        )}
        <button type="button" className="ky-icon-btn" onClick={onOpenProfile} aria-label={r.openProfile} title={r.openProfile}>
          <User size={20} aria-hidden="true" />
        </button>
        <button type="button" className="ky-icon-btn" onClick={onOpenSettings} aria-label={r.openSettings} title={r.openSettings}>
          <SlidersHorizontal size={20} aria-hidden="true" />
        </button>
      </header>

      <div className="cur-top">
        <div className="ky-card cur-goal">
          <svg role="img" aria-label={r.goalRing(todayCount, dailyGoal)} width="52" height="52" viewBox="0 0 52 52" className="cur-goal__ring">
            <circle cx="26" cy="26" r="21" fill="none" stroke="var(--raised)" strokeWidth="7" />
            {/* Nothing answered today = empty track (no 3% stub that reads as progress after a reset) */}
            {goalPct > 0 && (
              <circle
                cx="26"
                cy="26"
                r="21"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={ringLen}
                strokeDashoffset={ringLen * (1 - Math.max(0.03, goalPct))}
                transform="rotate(-90 26 26)"
              />
            )}
          </svg>
          <div className="cur-goal__text">
            <p className="ky-fs-16 cur-goal__title">{cs.goalEyebrow}</p>
            <p className="ky-fs-14 ky-mono cur-goal__count">{r.goalCount(todayCount, dailyGoal)}</p>
          </div>
          <button
            type="button"
            className="ky-btn ky-btn--primary ky-btn--sm cur-goal__cta"
            data-sfx="start"
            onClick={() => nextUnit && onOpenUnitQuiz(nextUnit.id)}
          >
            {cs.solveCta}
          </button>
        </div>

        <div role="tablist" aria-label={r.examFilter} className="ky-seg">
          {(
            [
              ['ALL', `${r.all} · ${ALL_CHEMISTRY_UNITS.length}`],
              ['TYT', `TYT · ${tytCount}`],
              ['AYT', `AYT · ${aytCount}`],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={examFilter === key}
              className="ky-fs-14"
              onClick={() => setExamFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="ky-fit">
        <div className="cur-list">
          {filteredUnits.map((u) => {
            const solved = getUnitSolvedCount(u.id);
            const percent = Math.min(100, Math.round((solved / 128) * 100));
            const isSlidesCompleted = completedSlideUnits.includes(u.id);
            const title = u.title[lang] || u.title.tr;
            const no = String(u.order).padStart(2, '0');

            return (
              <article key={u.id} className="ky-card cur-unit">
                <div>
                  <p className="ky-fs-12 cur-unit__meta">{r.unitMeta(no, u.exam, u.grade)}</p>
                  <h2 className="ky-fs-20 cur-unit__title">{title}</h2>
                  <p className="ky-fs-14 cur-unit__sub">{u.subtitle[lang] || u.subtitle.tr}</p>
                </div>
                <div className="cur-unit__progress">
                  <div
                    className="ky-track"
                    role="progressbar"
                    aria-valuenow={percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={title}
                  >
                    <div className={`ky-fill ${u.exam === 'AYT' ? 'ky-fill--violet' : ''}`} style={{ inlineSize: `${Math.max(percent, 2)}%` }} />
                  </div>
                  {isSlidesCompleted && (
                    <CheckCircle2 size={16} className="cur-unit__done" aria-label={s.slidesDoneBadge} />
                  )}
                  <span className="ky-mono ky-fs-12 cur-unit__count">{solved} / 128</span>
                </div>
                <div className="ky-acts">
                  <button type="button" className="ky-act" onClick={() => setActiveUnitForDeck(u)} aria-label={`${title} – ${pills.slide}`}>
                    <Presentation size={22} aria-hidden="true" />
                    <span aria-hidden="true">{pills.slide}</span>
                  </button>
                  <button type="button" className="ky-act" data-sfx="start" onClick={() => onOpenUnitQuiz(u.id)} aria-label={`${title} – ${pills.quiz}`}>
                    <FileCheck2 size={22} aria-hidden="true" />
                    <span aria-hidden="true">{pills.quiz}</span>
                  </button>
                  <button type="button" className="ky-act" onClick={() => onOpen3DScene(u.id)} aria-label={`${title} – ${pills.lab3d}`}>
                    <Box size={22} aria-hidden="true" />
                    <span aria-hidden="true">{pills.lab3d}</span>
                  </button>
                  <button type="button" className="ky-act" onClick={() => onOpenUnitCards(u.id)} aria-label={`${title} – ${pills.cards}`}>
                    <Layers size={22} aria-hidden="true" />
                    <span aria-hidden="true">{pills.cards}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
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
