import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Box,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileCheck2,
  FlaskConical,
  HelpCircle,
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

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const zoomDialogRef = useRef<HTMLDialogElement | null>(null);
  const markersRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pendingTargetRef = useRef<number | null>(null);
  const scrollTokenRef = useRef<number>(0);
  const settledSlideRef = useRef<number>(0);

  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);
  const [settledSlideIdx, setSettledSlideIdx] = useState<number>(0);
  const [settledStatus, setSettledStatus] = useState<string>('');
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
    pendingTargetRef.current = null;
    settledSlideRef.current = 0;
    setActiveSlideIdx(0);
    setSettledSlideIdx(0);
    setSettledStatus('');
    setActiveSeqSteps([0, 0]);
    setRecallAnswers({});
    setTwinIdx(0);
    setSelectedTwinOpt(null);
    setZoomedDiagram(null);

    const track = trackRef.current;
    if (track) {
      track.scrollTo({ left: 0, behavior: 'instant' });
    }
  }, [unit]);

  // Native dialog showModal & backdrop click handling
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (unit) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [unit]);

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

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const handleZoomDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === zoomDialogRef.current) {
      setZoomedDiagram(null);
    }
  };

  const scrollToSlide = useCallback((targetIndex: number, instant = false) => {
    const track = trackRef.current;
    if (!track) return;

    const clamped = Math.max(0, Math.min(TOTAL_SLIDES - 1, targetIndex));
    const slides = Array.from(track.querySelectorAll<HTMLElement>('.study-slide-card'));
    const targetSlide = slides[clamped];
    if (!targetSlide) return;

    pendingTargetRef.current = clamped;
    setActiveSlideIdx(clamped);

    const trackRect = track.getBoundingClientRect();
    const slideRect = targetSlide.getBoundingClientRect();
    const delta = slideRect.left + slideRect.width / 2 - (trackRect.left + trackRect.width / 2);

    track.scrollBy({
      left: delta,
      behavior: instant ? 'instant' : 'smooth',
    });
  }, []);

  const handleTrackScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    scrollTokenRef.current += 1;
    const currentToken = scrollTokenRef.current;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;
    const slides = Array.from(track.querySelectorAll<HTMLElement>('.study-slide-card'));

    let bestIdx = 0;
    let minDistance = Infinity;

    slides.forEach((sl, idx) => {
      const rect = sl.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const dist = Math.abs(slideCenter - trackCenter);
      if (dist < minDistance) {
        minDistance = dist;
        bestIdx = idx;
      }
    });

    if (pendingTargetRef.current !== null) {
      if (bestIdx === pendingTargetRef.current) {
        pendingTargetRef.current = null;
      }
    } else {
      setActiveSlideIdx(bestIdx);
    }

    setTimeout(() => {
      if (scrollTokenRef.current === currentToken) {
        settledSlideRef.current = bestIdx;
        setSettledSlideIdx(bestIdx);
        setSettledStatus(s.slideOf(bestIdx + 1, TOTAL_SLIDES));
      }
    }, 150);
  }, [s]);

  // Keep the active slide marker visible inside its own scroll row
  useEffect(() => {
    const nav = markersRef.current;
    const el = nav?.children[activeSlideIdx] as HTMLElement | undefined;
    if (!nav || !el) return;
    const target = el.offsetLeft - (nav.clientWidth - el.offsetWidth) / 2;
    nav.scrollTo({ left: target, behavior: 'smooth' });
  }, [activeSlideIdx, unit]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!unit) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToSlide(activeSlideIdx + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToSlide(activeSlideIdx - 1);
      } else if (e.key === 'Escape' && !zoomedDiagram) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [unit, activeSlideIdx, zoomedDiagram, scrollToSlide, onClose]);

  if (!unit || !deepGuide || !diagramPair) {
    return null;
  }

  const [primaryDiagram, secondaryDiagram] = diagramPair;
  const currentTwin = unit.osymTwins[twinIdx % unit.osymTwins.length];

  return (
    <>
      <dialog
        ref={dialogRef}
        className="sd"
        onClick={handleDialogClick}
        aria-modal="true"
        aria-label={unit.title[lang] || unit.title.tr}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="sd-box" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <header className="sd-head">
            <span
              className={`ky-tile ky-tile--sm ${unit.exam === 'AYT' ? 'ky-tile--violet' : ''}`}
              aria-hidden="true"
            >
              {String(unit.order).padStart(2, '0')}
            </span>
            <div className="sd-head-info">
              <span className="ky-eyebrow">{unit.exam} · {unit.grade}. Sınıf</span>
              <h2 className="unit-slide-title sd-title">{unit.title[lang] || unit.title.tr}</h2>
            </div>
            <span className="ky-chip ky-mono slide-counter-badge">
              {activeSlideIdx + 1}/{TOTAL_SLIDES}
            </span>
            <button
              type="button"
              className="ky-icon-btn"
              onClick={onClose}
              aria-label={CLOSE_MODAL_I18N[lang] || CLOSE_MODAL_I18N.tr}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          {/* Quick Tab Markers Bar */}
          <nav className="ky-scroll-x sd-markers" ref={markersRef} aria-label={s.markersNavLabel}>
            {s.tabLabels.map((lbl, idx) => (
              <button
                key={idx}
                type="button"
                className={`ky-chip ${activeSlideIdx === idx ? 'on' : ''}`}
                aria-current={activeSlideIdx === idx ? 'true' : undefined}
                onClick={() => scrollToSlide(idx)}
                aria-label={s.goToSlide(idx + 1, lbl)}
              >
                {lbl}
              </button>
            ))}
          </nav>

          {/* Carousel Track */}
          <div
            ref={trackRef}
            className="slide-deck-track"
            onScroll={handleTrackScroll}
            role="region"
            aria-label={s.carouselLabel}
          >
            {/* ----------------- Slide 1: Big Picture ----------------- */}
            <article className="study-slide-card sd-slide" role="group" aria-label={s.slideOf(1, TOTAL_SLIDES)}>
              <div className="slide-card-header">
                <span className="slide-badge-tag">{s.bigPictureTag}</span>
                <h3 className="slide-card-title">{s.slideTitles[0]}</h3>
              </div>
              <blockquote className="big-picture-quote">
                "{deepGuide.bigPictureQuote[lang] || deepGuide.bigPictureQuote.tr}"
              </blockquote>
              <div className="slide-diagram-box">
                <ChemicalDiagram spec={primaryDiagram} allowZoom={false} />
                <button
                  type="button"
                  className="ky-chip diagram-expand-overlay-btn"
                  onClick={() => setZoomedDiagram(primaryDiagram)}
                  aria-label={s.zoomDiagram}
                >
                  <Maximize2 size={14} aria-hidden="true" />
                  <span>{s.zoomDiagram}</span>
                </button>
              </div>
            </article>

            {/* ----------------- Slide 2: Deep Summary ----------------- */}
            <article className="study-slide-card sd-slide" role="group" aria-label={s.slideOf(2, TOTAL_SLIDES)}>
              <div className="slide-card-header">
                <span className="slide-badge-tag">{s.deepMapTag}</span>
                <h3 className="slide-card-title">{s.slideTitles[1]}</h3>
              </div>
              <div className="deep-subtopics-stack">
                {deepGuide.deepSubtopics.map((sub) => (
                  <div key={sub.id} className="ky-card subtopic-card-item" style={sub.accentHex ? ({ '--sub': sub.accentHex } as React.CSSProperties) : undefined}>
                    <div className="subtopic-card-header">
                      <span className="subtopic-badge">
                        {sub.badge[lang] || sub.badge.tr}
                      </span>
                      <h4 className="subtopic-title">{sub.title[lang] || sub.title.tr}</h4>
                    </div>
                    <p className="subtopic-summary">{sub.summary[lang] || sub.summary.tr}</p>
                    <ul className="subtopic-keypoints">
                      {sub.keyPoints.map((kp, kpIdx) => (
                        <li key={kpIdx}>{kp[lang] || kp.tr}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            {/* ----------------- Slide 3: Mechanism & Golden Formulas ----------------- */}
            <article className="study-slide-card sd-slide" role="group" aria-label={s.slideOf(3, TOTAL_SLIDES)}>
              <div className="slide-card-header">
                <span className="slide-badge-tag">{s.formulasTag}</span>
                <h3 className="slide-card-title">{s.slideTitles[2]}</h3>
              </div>
              <div className="slide-diagram-box secondary">
                <ChemicalDiagram spec={secondaryDiagram} allowZoom={false} />
                <button
                  type="button"
                  className="ky-chip diagram-expand-overlay-btn"
                  onClick={() => setZoomedDiagram(secondaryDiagram)}
                  aria-label={s.zoomDiagram}
                >
                  <Maximize2 size={14} aria-hidden="true" />
                  <span>{s.zoomDiagram}</span>
                </button>
              </div>
              <div className="golden-formulas-stack">
                {deepGuide.goldenFormulas.map((gf) => (
                  <div key={gf.id} className="golden-formula-card">
                    <div className="formula-header">
                      <Sparkles size={16} className="formula-icon" aria-hidden="true" />
                      <span className="formula-label">{gf.label[lang] || gf.label.tr}</span>
                    </div>
                    <div className="formula-expression">
                      <bdi dir="ltr"><code>{formatChemText(gf.expression[lang] || gf.expression.tr)}</code></bdi>
                    </div>
                    <p className="formula-exam-note">
                      <strong>{s.examNoteLabel}:</strong> {gf.examNote[lang] || gf.examNote.tr}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            {/* ----------------- Slide 4: Memory Mnemonics ----------------- */}
            <article className="study-slide-card sd-slide" role="group" aria-label={s.slideOf(4, TOTAL_SLIDES)}>
              <div className="slide-card-header">
                <span className="slide-badge-tag">{s.mnemonicsTag}</span>
                <h3 className="slide-card-title">{s.slideTitles[3]}</h3>
              </div>
              <div className="mnemonics-cards-grid">
                {deepGuide.memoryMnemonics.map((mnem) => (
                  <div key={mnem.id} className="ky-card mnemonic-card">
                    <div className="mnemonic-badge">{mnem.codeBadge[lang] || mnem.codeBadge.tr}</div>
                    <h4 className="mnemonic-title">{mnem.title[lang] || mnem.title.tr}</h4>
                    <div className="mnemonic-box">
                      <span className="mnemonic-sublabel">{s.mnemonicExpansionLabel}:</span>
                      <p className="mnemonic-expansion">{mnem.expansion[lang] || mnem.expansion.tr}</p>
                    </div>
                    <p className="mnemonic-tip">
                      <Lightbulb size={16} className="tip-icon" aria-hidden="true" />
                      <span>{mnem.memoryTip[lang] || mnem.memoryTip.tr}</span>
                    </p>
                  </div>
                ))}
              </div>
            </article>

            {/* ----------------- Slide 5: Reaction & Process Sequences ----------------- */}
            <article className="study-slide-card sd-slide" role="group" aria-label={s.slideOf(5, TOTAL_SLIDES)}>
              <div className="slide-card-header">
                <span className="slide-badge-tag">{s.pathwaysTag}</span>
                <h3 className="slide-card-title">{s.slideTitles[4]}</h3>
              </div>
              <div className="visual-pathways-stack">
                {unit.sequences.slice(0, 2).map((seq, seqIdx) => (
                  <div key={seq.id} className="ky-card sequence-pathway-card">
                    <h4 className="pathway-title">{seq.title[lang] || seq.title.tr}</h4>
                    <div className="stepper-track">
                      {seq.steps.map((st, stepIdx) => (
                        <button
                          key={stepIdx}
                          type="button"
                          aria-pressed={activeSeqSteps[seqIdx] === stepIdx}
                          className={`stepper-node ${activeSeqSteps[seqIdx] === stepIdx ? 'active' : ''}`}
                          onClick={() => {
                            const next: [number, number] = [...activeSeqSteps];
                            next[seqIdx] = stepIdx;
                            setActiveSeqSteps(next);
                          }}
                        >
                          <span className="node-num">{stepIdx + 1}</span>
                          <span className="node-text">{st[lang] || st.tr}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* ----------------- Slide 6: Concept Comparison Matrix ----------------- */}
            <article className="study-slide-card sd-slide" role="group" aria-label={s.slideOf(6, TOTAL_SLIDES)}>
              <div className="slide-card-header">
                <span className="slide-badge-tag">{s.matrixTag}</span>
                <h3 className="slide-card-title">{s.slideTitles[5]}</h3>
              </div>
              <div className="visual-matrix-cards-grid">
                {unit.comparisons.slice(0, 4).map((comp) => (
                  <div key={comp.id} className="ky-card comparison-card">
                    <div className="comparison-concepts-header">
                      <span className="concept-chip-a">{comp.conceptA[lang] || comp.conceptA.tr}</span>
                      <span className="vs-pill">VS</span>
                      <span className="concept-chip-b">{comp.conceptB[lang] || comp.conceptB.tr}</span>
                    </div>
                    <p className="comparison-distinction">
                      {comp.distinction[lang] || comp.distinction.tr}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            {/* ----------------- Slide 7: Critical Exam Traps ----------------- */}
            <article className="study-slide-card sd-slide" role="group" aria-label={s.slideOf(7, TOTAL_SLIDES)}>
              <div className="slide-card-header">
                <span className="slide-badge-tag">{s.trapHunterTag}</span>
                <h3 className="slide-card-title">{s.slideTitles[6]}</h3>
              </div>
              <div className="trap-hunter-stack">
                {unit.facts.slice(0, 4).map((fp) => (
                  <div key={fp.id} className="ky-card trap-hunter-card">
                    <div className="trap-item-bad">
                      <div className="trap-label">
                        <XCircle size={16} aria-hidden="true" />
                        <span>{s.trapBadLabel}</span>
                      </div>
                      <p className="trap-statement">{fp.trap[lang] || fp.trap.tr}</p>
                    </div>
                    <div className="trap-item-good">
                      <div className="truth-label">
                        <CheckCircle2 size={16} aria-hidden="true" />
                        <span>{s.truthGoodLabel}</span>
                      </div>
                      <p className="truth-statement">{fp.fact[lang] || fp.fact.tr}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* ----------------- Slide 8: Active Recall Challenge ----------------- */}
            <article className="study-slide-card sd-slide" role="group" aria-label={s.slideOf(8, TOTAL_SLIDES)}>
              <div className="slide-card-header">
                <span className="slide-badge-tag">{s.recallChallengeTag}</span>
                <h3 className="slide-card-title">{s.slideTitles[7]}</h3>
              </div>
              <div className="active-recall-header-bar">
                <p className="recall-instruction">{s.recallInstruction}</p>
                <span className="recall-score-pill">
                  {s.recallScoreLabel(recallCorrectCount, recallDeck.length)}
                </span>
              </div>
              <div className="active-recall-deck">
                {recallDeck.map((item, i) => {
                  const userAnswer = recallAnswers[item.id];
                  const isAnswered = userAnswer !== undefined;
                  const isUserCorrect = isAnswered && userAnswer === item.expected;

                  return (
                    <div key={item.id} className={`ky-card recall-question-card ${isAnswered ? (isUserCorrect ? 'correct' : 'wrong') : ''}`}>
                      <div className="recall-q-num">#{i + 1}</div>
                      <p className="recall-q-text">{item.statement}</p>
                      <div className="recall-options-row">
                        <button
                          type="button"
                          className={`ky-btn ky-btn--sm recall-btn ${userAnswer === 'fact' ? 'ky-btn--ok' : ''}`}
                          onClick={() => setRecallAnswers((prev) => ({ ...prev, [item.id]: 'fact' }))}
                          disabled={isAnswered}
                        >
                          {s.guessTrueBtn}
                        </button>
                        <button
                          type="button"
                          className={`ky-btn ky-btn--sm recall-btn ${userAnswer === 'trap' ? 'ky-btn--danger' : ''}`}
                          onClick={() => setRecallAnswers((prev) => ({ ...prev, [item.id]: 'trap' }))}
                          disabled={isAnswered}
                        >
                          {s.guessTrapBtn}
                        </button>
                      </div>
                      {isAnswered && (
                        <div className="recall-feedback-box">
                          {isUserCorrect ? (
                            <p className="feedback-correct"><CheckCircle2 size={16} aria-hidden="true" /> {s.recallCorrectMsg}</p>
                          ) : (
                            <p className="feedback-wrong"><XCircle size={16} aria-hidden="true" /> {s.recallWrongMsg}</p>
                          )}
                          <p className="truth-note">
                            <strong>{s.truthGoodLabel}:</strong> {item.truthText}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>

            {/* ----------------- Slide 9: Exam Twin & Action Hub ----------------- */}
            <article className="study-slide-card sd-slide" role="group" aria-label={s.slideOf(9, TOTAL_SLIDES)}>
              <div className="slide-card-header">
                <span className="slide-badge-tag">{s.twinQuizTag}</span>
                <h3 className="slide-card-title">{s.slideTitles[8]}</h3>
              </div>

              {/* In-Slide Twin Mini-Quiz */}
              <div className="ky-card slide-twin-card">
                <div className="twin-card-header">
                  <span className="twin-badge">ÖSYM Soru İkizi #{twinIdx + 1}</span>
                  <button
                    type="button"
                    className="ky-chip twin-cycle-btn"
                    onClick={() => {
                      setTwinIdx((prev) => (prev + 1) % unit.osymTwins.length);
                      setSelectedTwinOpt(null);
                    }}
                  >
                    <RefreshCw size={14} aria-hidden="true" />
                    <span>{s.nextTwinBtn(twinIdx + 1, unit.osymTwins.length)}</span>
                  </button>
                </div>

                <p className="twin-stem">
                  <bdi dir="ltr">{formatChemText(currentTwin.stem[lang] || currentTwin.stem.tr)}</bdi>
                </p>

                <div className="twin-options-list">
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
                        className={`ky-opt twin-option-btn ${optClass} ${isSelected && !optClass ? 'on' : ''}`}
                        aria-pressed={isSelected}
                        onClick={() => setSelectedTwinOpt(oIdx)}
                      >
                        <span className="ky-key opt-letter">{String.fromCharCode(65 + oIdx)}</span>
                        <span className="opt-text">
                          <bdi dir="ltr">{formatChemText(opt[lang] || opt.tr)}</bdi>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {selectedTwinOpt !== null && (
                  <div className="twin-explanation-box">
                    <p className="twin-explanation-text">
                      <strong>Çözüm:</strong>{' '}
                      <bdi dir="ltr">{formatChemText(currentTwin.explanation[lang] || currentTwin.explanation.tr)}</bdi>
                    </p>
                  </div>
                )}
              </div>

              {/* Completion Button */}
              <div className="slide-completion-box">
                {isCompleted ? (
                  <div className="ky-chip ky-chip--ok ky-chip--lg completion-badge-done">
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>{s.completedEarnedLabel}</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="ky-btn ky-btn--gold ky-btn--block complete-slides-btn"
                    onClick={() => onMarkCompleted(unit.id)}
                  >
                    <Sparkles size={18} aria-hidden="true" />
                    <span>{s.markCompleteBtn}</span>
                  </button>
                )}
              </div>

              {/* Action Hub Launchers */}
              <div className="action-hub-section">
                <h4 className="action-hub-title">{s.actionHubTitle}</h4>
                <div className="action-hub-grid">
                  <button
                    type="button"
                    className="ky-card action-card-btn"
                    data-sfx="start"
                    onClick={() => {
                      onClose();
                      onOpenUnitQuiz(unit.id);
                    }}
                  >
                    <span className="ky-tile ky-tile--sm ky-tile--blue" aria-hidden="true"><FileCheck2 size={20} /></span>
                    <div className="action-card-text">
                      <span className="action-title">128 Soruluk Soru Bankası</span>
                      <span className="action-sub">{s.quizLaunchSub}</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    className="ky-card action-card-btn"
                    onClick={() => {
                      onClose();
                      onOpen3DScene?.(unit.id);
                    }}
                  >
                    <span className="ky-tile ky-tile--sm ky-tile--ok" aria-hidden="true"><Box size={20} /></span>
                    <div className="action-card-text">
                      <span className="action-title">3D Kimya Laboratuvarı</span>
                      <span className="action-sub">{s.lab3dLaunchSub}</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    className="ky-card action-card-btn"
                    onClick={() => {
                      onClose();
                      onOpenUnitCards(unit.id);
                    }}
                  >
                    <span className="ky-tile ky-tile--sm ky-tile--violet" aria-hidden="true"><Layers size={20} /></span>
                    <div className="action-card-text">
                      <span className="action-title">3D Leitner Flashcards</span>
                      <span className="action-sub">{s.cardsLaunchSub}</span>
                    </div>
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Carousel Footer Navigation Bar */}
          <footer className="sd-foot">
            <button
              type="button"
              className="ky-btn ky-btn--quiet ky-btn--sm sd-nav sd-nav--prev"
              onClick={() => scrollToSlide(activeSlideIdx - 1)}
              disabled={activeSlideIdx === 0}
              aria-label={s.prevSlide}
            >
              <ChevronLeft size={20} aria-hidden="true" />
              <span>{s.prevSlide}</span>
            </button>

            <div className="ky-dots sd-dots" role="group" aria-label={s.markersNavLabel}>
              {Array.from({ length: TOTAL_SLIDES }).map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={activeSlideIdx === dotIdx ? 'on' : ''}
                  aria-hidden="true"
                />
              ))}
            </div>

            <button
              type="button"
              className="ky-btn ky-btn--primary ky-btn--sm sd-nav sd-nav--next"
              onClick={() => scrollToSlide(activeSlideIdx + 1)}
              disabled={activeSlideIdx === TOTAL_SLIDES - 1}
              aria-label={s.nextSlide}
            >
              <span>{s.nextSlide}</span>
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </footer>
        </div>
      </dialog>

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
              <button
                type="button"
                className="ky-icon-btn"
                onClick={() => setZoomedDiagram(null)}
                aria-label={s.closeZoom}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="sd-zoom-body">
              <ChemicalDiagram spec={zoomedDiagram} allowZoom={false} />
            </div>
            {zoomedDiagram.caption && (
              <p className="diagram-zoom-modal-caption">{zoomedDiagram.caption}</p>
            )}
          </div>
        </dialog>
      )}
    </>
  );
};
