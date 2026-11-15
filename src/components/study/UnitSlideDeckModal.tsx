import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Box,
  CheckCircle2,
  ChevronLeft,
  FileCheck2,
  Layers,
  Lightbulb,
  Maximize2,
  RefreshCw,
  Sparkles,
  X,
  XCircle,
} from 'lucide-react';
import { getUnitDeepStudyGuide } from '../../data/studySlides';
import { getAllUnitDiagramSpecs } from '../../engine/diagramQuestionEnricher';
import { SLIDE_DECK_STRINGS } from '../../i18n/slideDeckStrings';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import type { ChemistryUnitSeedData } from '../../data/units/types';
import type { LanguageCode, QuestionDiagramSpec } from '../../types/chemistry';
import { ChemicalDiagram, CLOSE_MODAL_I18N } from '../diagrams/ChemicalDiagram';
import { formatChemText } from '../common/ChemFormula';
import { redesignStrings } from '../../i18n/redesignStrings';
import { playCorrect, playWrong } from '../../audio/sfx';

export interface UnitSlideDeckModalProps {
  unit: ChemistryUnitSeedData | null;
  lang: LanguageCode;
  isCompleted: boolean;
  onClose: () => void;
  onMarkCompleted: (unitId: string) => void;
  onOpenUnitQuiz: (unitId: string) => void;
  onOpenUnitCards: (unitId: string) => void;
  onOpen3DScene?: (unitId: string) => void;
}

const TOTAL_SLIDES = 9;

export const UnitSlideDeckModal: React.FC<UnitSlideDeckModalProps> = ({
  unit,
  lang,
  isCompleted,
  onClose,
  onMarkCompleted,
  onOpenUnitQuiz,
  onOpenUnitCards,
  onOpen3DScene,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const s = SLIDE_DECK_STRINGS[lang] || SLIDE_DECK_STRINGS.tr;
  const isRtl = lang === 'ar';

  const r = redesignStrings(lang);
  const zoomDialogRef = useRef<HTMLDialogElement | null>(null);
  const fitRef = useRef<HTMLDivElement | null>(null);

  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);
  const [activeSeqSteps, setActiveSeqSteps] = useState<[number, number]>([0, 0]);
  const [recallAnswers, setRecallAnswers] = useState<Record<string, 'fact' | 'trap'>>({});
  const [twinIdx, setTwinIdx] = useState<number>(0);
  const [selectedTwinOpt, setSelectedTwinOpt] = useState<number | null>(null);
  const [zoomedDiagram, setZoomedDiagram] = useState<QuestionDiagramSpec | null>(null);

  const deepGuide = useMemo(
    () => (unit ? getUnitDeepStudyGuide(unit.id) : null),
    [unit]
  );

  const diagramPair = useMemo(
    () => (unit ? getAllUnitDiagramSpecs(unit.id, lang) : null),
    [unit, lang]
  );

  // Slide 8 deterministic 6-item active recall list from facts[6..11]
  const recallDeck = useMemo(() => {
    if (!unit) return [];
    return unit.facts.slice(6, 12).map((fp, i) => {
      const showTrap = i % 2 === 1;
      return {
        id: fp.id,
        statement: showTrap ? (fp.trap[lang] || fp.trap.tr) : (fp.fact[lang] || fp.fact.tr),
        expected: (showTrap ? 'trap' : 'fact') as 'fact' | 'trap',
        truthText: fp.fact[lang] || fp.fact.tr,
        whyFalse: fp.whyTrapIsFalse?.[lang] || fp.whyTrapIsFalse?.tr,
      };
    });
  }, [unit, lang]);

  const recallCorrectCount = useMemo(() => {
    return recallDeck.filter((item) => recallAnswers[item.id] === item.expected).length;
  }, [recallDeck, recallAnswers]);

  // Reset interactive states when opened with a new unit
  useEffect(() => {
    if (!unit) return;
    setActiveSlideIdx(0);
    setActiveSeqSteps([0, 0]);
    setRecallAnswers({});
    setTwinIdx(0);
    setSelectedTwinOpt(null);
    setZoomedDiagram(null);
  }, [unit]);

  // Each slide starts at the top of the reading area
  useEffect(() => {
    fitRef.current?.scrollTo({ top: 0 });
  }, [activeSlideIdx]);

  // Diagram Zoom dialog
  useEffect(() => {
    const zoomDialog = zoomDialogRef.current;
    if (!zoomDialog) return;

    if (zoomedDiagram) {
      if (!zoomDialog.open) {
        zoomDialog.showModal();
      }
    } else if (zoomDialog.open) {
      zoomDialog.close();
    }
  }, [zoomedDiagram]);

  const handleZoomDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === zoomDialogRef.current) {
      setZoomedDiagram(null);
    }
  };

  const goToSlide = useCallback((targetIndex: number) => {
    setActiveSlideIdx(Math.max(0, Math.min(TOTAL_SLIDES - 1, targetIndex)));
  }, []);

  // Keyboard navigation (arrow keys follow the reading direction)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!unit || zoomedDiagram) return;
      const forward = isRtl ? 'ArrowLeft' : 'ArrowRight';
      const back = isRtl ? 'ArrowRight' : 'ArrowLeft';
      if (e.key === forward) {
        e.preventDefault();
        goToSlide(activeSlideIdx + 1);
      } else if (e.key === back) {
        e.preventDefault();
        goToSlide(activeSlideIdx - 1);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [unit, activeSlideIdx, zoomedDiagram, goToSlide, onClose, isRtl]);

  if (!unit || !deepGuide || !diagramPair) {
    return null;
  }

  const [primaryDiagram, secondaryDiagram] = diagramPair;
  const currentTwin = unit.osymTwins[twinIdx % unit.osymTwins.length];
  const unitNo = String(unit.order).padStart(2, '0');
  const unitTitle = unit.title[lang] || unit.title.tr;
  const isLast = activeSlideIdx === TOTAL_SLIDES - 1;
  const firstTrap = unit.facts[0];

  const tags = [
    s.bigPictureTag,
    s.deepMapTag,
    s.formulasTag,
    s.mnemonicsTag,
    s.pathwaysTag,
    s.matrixTag,
    s.trapHunterTag,
    s.recallChallengeTag,
    s.twinQuizTag,
  ];

  const diagramCard = (spec: QuestionDiagramSpec) => (
    <div className="ky-card sl-diagram">
      <ChemicalDiagram spec={spec} allowZoom={false} lang={lang} />
      <button type="button" className="ky-chip sl-zoom-btn" onClick={() => setZoomedDiagram(spec)} aria-label={s.zoomDiagram}>
        <Maximize2 size={14} aria-hidden="true" />
        <span>{s.zoomDiagram}</span>
      </button>
    </div>
  );

  const trapBlock = (bad: string, good: string, key?: string) => (
    <div className="sl-trap" key={key}>
      <p className="ky-fs-14 sl-trap__title">
        <XCircle size={16} aria-hidden="true" /> {r.examTrap}
      </p>
      <p className="ky-fs-16 sl-trap__text">{bad}</p>
      <p className="ky-fs-14 sl-truth__title">
        <CheckCircle2 size={16} aria-hidden="true" /> {s.truthGoodLabel}
      </p>
      <p className="ky-fs-16 sl-truth__text">{good}</p>
    </div>
  );

  const actionKeys = (
    <div className="ky-acts">
      <button
        type="button"
        className="ky-act"
        onClick={() => {
          onClose();
          onOpen3DScene?.(unit.id);
        }}
      >
        <Box size={22} aria-hidden="true" />
        {r.model3d}
      </button>
      <button
        type="button"
        className="ky-act"
        onClick={() => {
          onClose();
          onOpenUnitCards(unit.id);
        }}
      >
        <Layers size={22} aria-hidden="true" />
        {r.cardsAct}
      </button>
      <button
        type="button"
        className="ky-act"
        data-sfx="start"
        onClick={() => {
          onClose();
          onOpenUnitQuiz(unit.id);
        }}
      >
        <FileCheck2 size={22} aria-hidden="true" />
        {r.testAct}
      </button>
    </div>
  );

  const slideHead = (i: number, gold = false) => (
    <div className="sl-head">
      <span className={`ky-chip ${gold ? 'ky-chip--gold' : 'ky-chip--accent'}`}>{tags[i]}</span>
      <h1 className="ky-disp ky-fs-34 sl-title">{s.slideTitles[i]}</h1>
    </div>
  );

  // One slide = lead column (title + main idea blocks) + side column (diagram, trap, actions)
  const renderSlide = () => {
    switch (activeSlideIdx) {
      case 0:
        return (
          <>
            <div className="ky-lead sl-main">
              {slideHead(0)}
              <blockquote className="ky-card ky-fs-20 sl-quote">
                {deepGuide.bigPictureQuote[lang] || deepGuide.bigPictureQuote.tr}
              </blockquote>
            </div>
            {diagramCard(primaryDiagram)}
          </>
        );
      case 1:
        return (
          <div className="ky-lead sl-main">
            {slideHead(1)}
            {deepGuide.deepSubtopics.map((sub) => (
              <div key={sub.id} className="ky-card sl-block">
                <span className="ky-chip">{sub.badge[lang] || sub.badge.tr}</span>
                <h2 className="ky-fs-20 sl-block__title">{sub.title[lang] || sub.title.tr}</h2>
                <p className="ky-fs-16 sl-block__text">{sub.summary[lang] || sub.summary.tr}</p>
                <ul className="sl-points ky-fs-16">
                  {sub.keyPoints.map((kp, kpIdx) => (
                    <li key={kpIdx}>{kp[lang] || kp.tr}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <>
            <div className="ky-lead sl-main">
              {slideHead(2, true)}
              {deepGuide.goldenFormulas.map((gf) => (
                <div key={gf.id} className="ky-card sl-formula">
                  <p className="ky-fs-12 sl-formula__label">{gf.label[lang] || gf.label.tr}</p>
                  <p className="ky-fs-24 sl-formula__eq">
                    <bdi dir="ltr">{formatChemText(gf.expression[lang] || gf.expression.tr)}</bdi>
                  </p>
                  <p className="ky-fs-16 sl-formula__note">{gf.examNote[lang] || gf.examNote.tr}</p>
                </div>
              ))}
            </div>
            {firstTrap &&
              trapBlock(firstTrap.trap[lang] || firstTrap.trap.tr, firstTrap.fact[lang] || firstTrap.fact.tr)}
            {diagramCard(secondaryDiagram)}
          </>
        );
      case 3:
        return (
          <div className="ky-lead sl-main">
            {slideHead(3)}
            {deepGuide.memoryMnemonics.map((mnem) => (
              <div key={mnem.id} className="ky-card sl-block">
                <span className="ky-chip ky-chip--violet">{mnem.codeBadge[lang] || mnem.codeBadge.tr}</span>
                <h2 className="ky-fs-20 sl-block__title">{mnem.title[lang] || mnem.title.tr}</h2>
                <p className="ky-fs-12 sl-formula__label">{s.mnemonicExpansionLabel}</p>
                <p className="ky-fs-18 sl-block__strong">{mnem.expansion[lang] || mnem.expansion.tr}</p>
                <p className="ky-fs-16 sl-tip">
                  <Lightbulb size={18} aria-hidden="true" />
                  <span>{mnem.memoryTip[lang] || mnem.memoryTip.tr}</span>
                </p>
              </div>
            ))}
          </div>
        );
      case 4:
        return (
          <div className="ky-lead sl-main">
            {slideHead(4)}
            {unit.sequences.slice(0, 2).map((seq, seqIdx) => (
              <div key={seq.id} className="ky-card sl-block">
                <h2 className="ky-fs-20 sl-block__title">{seq.title[lang] || seq.title.tr}</h2>
                <ol className="sl-steps">
                  {seq.steps.map((st, stepIdx) => (
                    <li key={stepIdx}>
                      <button
                        type="button"
                        aria-pressed={activeSeqSteps[seqIdx] === stepIdx}
                        className={`sl-step ${activeSeqSteps[seqIdx] === stepIdx ? 'on' : ''}`}
                        onClick={() => {
                          const next: [number, number] = [...activeSeqSteps];
                          next[seqIdx] = stepIdx;
                          setActiveSeqSteps(next);
                        }}
                      >
                        <span className="sl-step__n ky-mono">{stepIdx + 1}</span>
                        <span className="ky-fs-16 sl-step__text">{st[lang] || st.tr}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        );
      case 5:
        return (
          <div className="ky-lead sl-main">
            {slideHead(5)}
            {unit.comparisons.slice(0, 4).map((comp) => (
              <div key={comp.id} className="ky-card sl-block">
                <p className="sl-vs">
                  <span className="ky-chip ky-chip--accent">{comp.conceptA[lang] || comp.conceptA.tr}</span>
                  <span className="sl-vs__pill">VS</span>
                  <span className="ky-chip ky-chip--violet">{comp.conceptB[lang] || comp.conceptB.tr}</span>
                </p>
                <p className="ky-fs-16 sl-block__text">{comp.distinction[lang] || comp.distinction.tr}</p>
              </div>
            ))}
          </div>
        );
      case 6:
        return (
          <div className="ky-lead sl-main">
            {slideHead(6, true)}
            {unit.facts
              .slice(0, 4)
              .map((fp) => trapBlock(fp.trap[lang] || fp.trap.tr, fp.fact[lang] || fp.fact.tr, fp.id))}
          </div>
        );
      case 7:
        return (
          <div className="ky-lead sl-main">
            {slideHead(7)}
            <div className="sl-recall-head">
              <p className="ky-fs-16 sl-block__text">{s.recallInstruction}</p>
              <span className="ky-chip ky-chip--accent ky-mono">{s.recallScoreLabel(recallCorrectCount, recallDeck.length)}</span>
            </div>
            {recallDeck.map((item, i) => {
              const userAnswer = recallAnswers[item.id];
              const isAnswered = userAnswer !== undefined;
              const isUserCorrect = isAnswered && userAnswer === item.expected;
              return (
                <div
                  key={item.id}
                  className={`ky-card sl-block sl-recall ${isAnswered ? (isUserCorrect ? 'is-right ky-pop' : 'is-wrong ky-pop') : ''}`}
                >
                  <span className="ky-mono sl-recall__n">#{i + 1}</span>
                  <p className="ky-fs-18 sl-block__strong">{item.statement}</p>
                  <div className="sl-recall__btns">
                    <button
                      type="button"
                      className={`ky-btn ky-btn--sm ${userAnswer === 'fact' ? 'ky-btn--ok' : 'ky-btn--quiet'}`}
                      onClick={() => setRecallAnswers((prev) => ({ ...prev, [item.id]: 'fact' }))}
                      disabled={isAnswered}
                    >
                      {s.guessTrueBtn}
                    </button>
                    <button
                      type="button"
                      className={`ky-btn ky-btn--sm ${userAnswer === 'trap' ? 'ky-btn--danger' : 'ky-btn--quiet'}`}
                      onClick={() => setRecallAnswers((prev) => ({ ...prev, [item.id]: 'trap' }))}
                      disabled={isAnswered}
                    >
                      {s.guessTrapBtn}
                    </button>
                  </div>
                  {isAnswered && (
                    <div className="sl-recall__fb" role="status">
                      <p className={`ky-fs-16 ${isUserCorrect ? 'sl-ok' : 'sl-bad'}`}>
                        {isUserCorrect ? <CheckCircle2 size={16} aria-hidden="true" /> : <XCircle size={16} aria-hidden="true" />}{' '}
                        {isUserCorrect ? s.recallCorrectMsg : s.recallWrongMsg}
                      </p>
                      <p className="ky-fs-14 sl-block__text">
                        <strong>{s.truthGoodLabel}:</strong> {item.truthText}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      default:
        return (
          <>
            <div className="ky-lead sl-main">
              {slideHead(8, true)}
              <div className="ky-card sl-block">
                <div className="sl-twin-head">
                  <span className="ky-chip ky-chip--gold">ÖSYM #{twinIdx + 1}</span>
                  <button
                    type="button"
                    className="ky-chip sl-twin-next"
                    onClick={() => {
                      setTwinIdx((prev) => (prev + 1) % unit.osymTwins.length);
                      setSelectedTwinOpt(null);
                    }}
                  >
                    <RefreshCw size={14} aria-hidden="true" />
                    <span>{s.nextTwinBtn(twinIdx + 1, unit.osymTwins.length)}</span>
                  </button>
                </div>
                <p className="ky-fs-18 sl-block__strong">
                  <bdi>{formatChemText(currentTwin.stem[lang] || currentTwin.stem.tr)}</bdi>
                </p>
                <div className="sl-twin-opts" role="radiogroup" aria-label={s.twinQuizTag}>
                  {currentTwin.options.map((opt, oIdx) => {
                    const isSelected = selectedTwinOpt === oIdx;
                    const isCorrect = currentTwin.correctIndex === oIdx;
                    let optClass = '';
                    if (selectedTwinOpt !== null) {
                      if (isCorrect) optClass = 'right';
                      else if (isSelected) optClass = 'wrong';
                    }
                    return (
                      <button
                        key={oIdx}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        disabled={selectedTwinOpt !== null}
                        className={`ky-opt ${optClass} ${isSelected && !optClass ? 'on' : ''} ${optClass === 'wrong' ? 'ky-shake' : ''}`}
                        onClick={() => {
                          // Answer once (like the quiz): correct / wrong feedback instead of the plain UI click
                          if (selectedTwinOpt !== null) return;
                          if (isCorrect) playCorrect();
                          else playWrong();
                          setSelectedTwinOpt(oIdx);
                        }}
                      >
                        <span className="ky-key">{String.fromCharCode(65 + oIdx)}</span>
                        <span className="ky-fs-16 sl-opt-text">
                          <bdi>{formatChemText(opt[lang] || opt.tr)}</bdi>
                        </span>
                      </button>
                    );
                  })}
                </div>
                {selectedTwinOpt !== null && (
                  <div className="sl-solution ky-pop" role="status">
                    <p className="ky-fs-16">
                      <bdi>{formatChemText(currentTwin.explanation[lang] || currentTwin.explanation.tr)}</bdi>
                    </p>
                  </div>
                )}
              </div>
            </div>
            {isCompleted ? (
              <div className="ky-chip ky-chip--ok ky-chip--lg sl-done">
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>{s.completedEarnedLabel}</span>
              </div>
            ) : (
              <button type="button" className="ky-btn ky-btn--gold ky-btn--block" onClick={() => onMarkCompleted(unit.id)}>
                <Sparkles size={18} aria-hidden="true" />
                <span>{s.markCompleteBtn}</span>
              </button>
            )}
          </>
        );
    }
  };

  return (
    <>
      <div className="ky-immersive sl" role="dialog" aria-modal="true" aria-label={unitTitle} dir={isRtl ? 'rtl' : 'ltr'}>
        <header className="ky-screen-head sl-top">
          <div className="sl-top__row">
            <button type="button" className="ky-icon-btn" onClick={onClose} aria-label={CLOSE_MODAL_I18N[lang] || CLOSE_MODAL_I18N.tr}>
              <X size={20} aria-hidden="true" />
            </button>
            <div className="ky-head-text">
              <p className="ky-meta ky-fs-12">{r.slideMeta(unitNo, activeSlideIdx + 1, TOTAL_SLIDES)}</p>
              <p className="ky-head-sub ky-fs-16">{unitTitle}</p>
            </div>
          </div>
          <nav className="sl-segs" aria-label={s.markersNavLabel}>
            {s.tabLabels.map((lbl, idx) => (
              <button
                key={idx}
                type="button"
                className={`sl-seg ${idx <= activeSlideIdx ? 'on' : ''}`}
                aria-current={activeSlideIdx === idx ? 'step' : undefined}
                aria-label={s.goToSlide(idx + 1, lbl)}
                onClick={() => goToSlide(idx)}
              >
                <span aria-hidden="true" />
              </button>
            ))}
          </nav>
        </header>

        <div className="ky-fit" ref={fitRef}>
          <div key={activeSlideIdx} className="ky-pane sl-pane" role="group" aria-label={s.slideOf(activeSlideIdx + 1, TOTAL_SLIDES)}>
            {renderSlide()}
            {actionKeys}
          </div>
        </div>

        <footer className="ky-screen-foot">
          <button
            type="button"
            className="ky-btn ky-btn--quiet sl-prev"
            onClick={() => goToSlide(activeSlideIdx - 1)}
            disabled={activeSlideIdx === 0}
            aria-label={s.prevSlide}
          >
            <ChevronLeft size={20} aria-hidden="true" className="sl-flip" />
          </button>
          {isLast ? (
            <button type="button" className="ky-btn ky-btn--primary ky-grow sl-next" onClick={onClose}>
              <span>{r.finish}</span>
            </button>
          ) : (
            <button type="button" className="ky-btn ky-btn--primary ky-grow sl-next" onClick={() => goToSlide(activeSlideIdx + 1)}>
              {s.nextSlide}
            </button>
          )}
        </footer>
      </div>

      {/* Nested Zoom Dialog */}
      {zoomedDiagram && (
        <dialog
          ref={zoomDialogRef}
          className="sd-zoom"
          onClick={handleZoomDialogClick}
          aria-modal="true"
          aria-label={zoomedDiagram.title}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <div className="sd-zoom-card" onClick={(e) => e.stopPropagation()}>
            <div className="sd-zoom-head">
              <h3>{zoomedDiagram.title}</h3>
              <button type="button" className="ky-icon-btn" onClick={() => setZoomedDiagram(null)} aria-label={s.closeZoom}>
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="sd-zoom-body">
              <ChemicalDiagram spec={zoomedDiagram} allowZoom={false} lang={lang} />
            </div>
            {zoomedDiagram.caption && <p className="diagram-zoom-modal-caption">{zoomedDiagram.caption}</p>}
          </div>
        </dialog>
      )}
    </>
  );
};
