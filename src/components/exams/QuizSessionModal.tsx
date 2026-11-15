import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Clock,
  Star,
  Sparkles,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  AlertTriangle,
  RotateCcw,
  ListChecks,
  CircleCheck,
  CircleX,
  Minus,
} from 'lucide-react';
import type { CompiledQuestion, LanguageCode } from '../../types/chemistry';
import type { ExamResultRecord } from '../../store/useAppStore';
import { sfx } from '../../audio/sfx';
import { calculateOsymNet, estimateTgPercentile, type TgPercentileResult } from '../../engine/mockExamCatalog';
import { ChemicalDiagram } from '../diagrams/ChemicalDiagram';
import { formatChemText } from '../common/ChemFormula';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { EXAM_STRINGS } from '../../i18n/examStrings';
import { redesignStrings, redesignExtra } from '../../i18n/redesignStrings';

export interface QuizSessionModalProps {
  title: string;
  subtitle?: string;
  examType: 'TYT' | 'AYT' | 'UNIT' | 'TG' | 'MISTAKE' | 'BOOKMARK';
  mockId?: string;
  unitId?: string;
  questions: CompiledQuestion[];
  isExamMode: boolean; // true = strict timed trial without instant feedback; false = practice mode
  durationMinutes?: number;
  lang: LanguageCode;
  bookmarkedQuestionIds: string[];
  onRecordQuestion: (qId: string, isCorrect: boolean) => void;
  onToggleBookmark: (qId: string) => void;
  onSaveAttempt?: (attempt: Omit<ExamResultRecord, 'id' | 'dateIso'>) => void;
  onClose: () => void;
}

/**
 * Quiz / mock-exam session. Full-screen on phones, centred sheet on tablet and desktop.
 * Sound: practice answers play playCorrect/playWrong; mock exams answer silently by design
 * (no per-question feedback) and play playSuccess+playApplause / playFinish at submit.
 */
export const QuizSessionModal: React.FC<QuizSessionModalProps> = ({
  title,
  subtitle,
  examType,
  mockId,
  unitId,
  questions,
  isExamMode,
  durationMinutes = 15,
  lang,
  bookmarkedQuestionIds,
  onRecordQuestion,
  onToggleBookmark,
  onSaveAttempt,
  onClose,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const x = EXAM_STRINGS[lang] ?? EXAM_STRINGS.tr;
  const r = redesignStrings(lang);
  const rx = redesignExtra(lang);

  // Current Question Pointer
  const [currentIndex, setCurrentIndex] = useState(0);

  // User selections: questionId -> chosen index (0..4)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  // Practice Mode: questions evaluated and frozen
  const [evaluatedQuestions, setEvaluatedQuestions] = useState<Record<string, boolean>>({});

  // Exam Mode Status: 'in-progress' | 'submitted' | 'review'
  const [examStatus, setExamStatus] = useState<'in-progress' | 'submitted' | 'review'>('in-progress');

  // Timer: seconds remaining for exam mode; elapsed seconds for practice mode
  const totalDurationSeconds = durationMinutes * 60;
  const [secondsRemaining, setSecondsRemaining] = useState(totalDurationSeconds);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  // Submit confirmation modal state
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  // Cached final results once submitted
  const [finalResult, setFinalResult] = useState<{
    correctCount: number;
    wrongCount: number;
    emptyCount: number;
    netScore: number;
    durationUsedSeconds: number;
    tgPercentile?: TgPercentileResult;
  } | null>(null);

  // Guards against double submission (StrictMode, timer + click race)
  const submittedRef = useRef(false);
  const dotsRef = useRef<HTMLDivElement>(null);

  const currentQ = questions[currentIndex];
  const isBookmarked = currentQ ? bookmarkedQuestionIds.includes(currentQ.id) : false;

  // Timer Effect (pure ticking; expiry is handled in its own effect below)
  useEffect(() => {
    if (examStatus !== 'in-progress') return;

    const timer = setInterval(() => {
      if (isExamMode) {
        setSecondsRemaining((prev) => Math.max(0, prev - 1));
      } else {
        setElapsedSeconds((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [examStatus, isExamMode]);

  // Handle Exam Submission
  const handleSubmitExam = useCallback(
    (_isAutoSubmit = false) => {
      if (examStatus !== 'in-progress' || submittedRef.current) return;
      submittedRef.current = true;

      let correct = 0;
      let wrong = 0;
      let empty = 0;

      questions.forEach((q) => {
        const answer = selectedAnswers[q.id];
        if (answer === undefined) {
          empty++;
        } else if (answer === q.correctIndex) {
          correct++;
          onRecordQuestion(q.id, true);
        } else {
          wrong++;
          onRecordQuestion(q.id, false);
        }
      });

      const net = calculateOsymNet(correct, wrong);
      const usedTime = isExamMode ? totalDurationSeconds - secondsRemaining : elapsedSeconds;

      let tgResult: TgPercentileResult | undefined;
      if (examType === 'TG') {
        tgResult = estimateTgPercentile(net);
      }

      setFinalResult({
        correctCount: correct,
        wrongCount: wrong,
        emptyCount: empty,
        netScore: net,
        durationUsedSeconds: usedTime,
        tgPercentile: tgResult,
      });

      // Save attempt to global store
      if (onSaveAttempt) {
        onSaveAttempt({
          mockId,
          unitId,
          modeTitle: title,
          examType: (examType === 'TYT' || examType === 'AYT' ? examType : 'PRACTICE') as any,
          total: questions.length,
          correct,
          wrong,
          empty,
          netScore: net,
        });
      }

      // Audio celebration triggers
      if (net > 0) {
        sfx.playSuccess();
        setTimeout(() => {
          sfx.playApplause();
        }, 350);
      } else {
        sfx.playFinish();
      }

      setExamStatus('submitted');
      setShowSubmitConfirm(false);
    },
    [
      examStatus,
      questions,
      selectedAnswers,
      onRecordQuestion,
      isExamMode,
      totalDurationSeconds,
      secondsRemaining,
      elapsedSeconds,
      examType,
      mockId,
      unitId,
      title,
      onSaveAttempt,
    ]
  );

  // Auto submit on time expiry (uses the freshest answers)
  useEffect(() => {
    if (isExamMode && examStatus === 'in-progress' && secondsRemaining <= 0) {
      handleSubmitExam(true);
    }
  }, [isExamMode, examStatus, secondsRemaining, handleSubmitExam]);

  // Retry: reset local session state and start again
  const handleRetry = useCallback(() => {
    submittedRef.current = false; // start sound comes from the button's data-sfx="start"
    setSelectedAnswers({});
    setEvaluatedQuestions({});
    setFinalResult(null);
    setCurrentIndex(0);
    setSecondsRemaining(totalDurationSeconds);
    setElapsedSeconds(0);
    setShowSubmitConfirm(false);
    setShowExitConfirm(false);
    setExamStatus('in-progress');
  }, [totalDurationSeconds]);

  // Option selection handler
  const handleSelectOption = useCallback(
    (optionIndex: number) => {
      if (!currentQ) return;

      if (!isExamMode) {
        // Practice mode: freeze after first selection
        if (evaluatedQuestions[currentQ.id]) return;

        const isCorrect = optionIndex === currentQ.correctIndex;
        setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: optionIndex }));
        setEvaluatedQuestions((prev) => ({ ...prev, [currentQ.id]: true }));

        // Trigger SFX & state update
        if (isCorrect) {
          sfx.playCorrect();
        } else {
          sfx.playWrong();
        }

        onRecordQuestion(currentQ.id, isCorrect);
      } else {
        // Exam mode: silent answer selection (can toggle/change while in-progress)
        if (examStatus !== 'in-progress') return;
        setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: optionIndex }));
      }
    },
    [currentQ, isExamMode, evaluatedQuestions, examStatus, onRecordQuestion]
  );

  // Keyboard Shortcuts Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input or modal confirmation
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (showSubmitConfirm || showExitConfirm) return;

      const key = e.key.toUpperCase();
      const rtl = document.documentElement.dir === 'rtl';
      const forward = rtl ? 'ArrowLeft' : 'ArrowRight';
      const back = rtl ? 'ArrowRight' : 'ArrowLeft';

      // Navigation: Arrows
      if (e.key === forward) {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
      } else if (e.key === back) {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      }
      // Options A-E
      else if (examStatus !== 'submitted' && (key === 'A' || key === '1')) {
        handleSelectOption(0);
      } else if (examStatus !== 'submitted' && (key === 'B' || key === '2')) {
        handleSelectOption(1);
      } else if (examStatus !== 'submitted' && (key === 'C' || key === '3')) {
        handleSelectOption(2);
      } else if (examStatus !== 'submitted' && (key === 'D' || key === '4')) {
        handleSelectOption(3);
      } else if (examStatus !== 'submitted' && (key === 'E' || key === '5')) {
        handleSelectOption(4);
      }
      // Bookmark toggle: 'S' or 'Y' (Yıldız)
      else if (key === 'S' || key === 'Y') {
        if (currentQ) onToggleBookmark(currentQ.id);
      }
      // Escape
      else if (e.key === 'Escape') {
        if (examStatus === 'in-progress' && isExamMode) {
          setShowExitConfirm(true);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, questions.length, handleSelectOption, currentQ, onToggleBookmark, examStatus, isExamMode, onClose, showSubmitConfirm, showExitConfirm]);

  // Keep the current navigator dot in view
  useEffect(() => {
    const el = dotsRef.current?.querySelector<HTMLElement>('[aria-selected="true"]');
    el?.scrollIntoView({ block: 'nearest', inline: 'center' });
  }, [currentIndex, examStatus]);

  // Format MM:SS
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(Math.max(0, totalSeconds) / 60);
    const secs = Math.floor(Math.max(0, totalSeconds) % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const isTimeLow = isExamMode && secondsRemaining < 120 && examStatus === 'in-progress';
  const isLast = currentIndex >= questions.length - 1;

  const requestClose = () => {
    if (examStatus === 'in-progress' && isExamMode) {
      setShowExitConfirm(true);
    } else {
      onClose();
    }
  };

  const goNext = () => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1));

  const difficultyLabel = (d: string) => (x.difficulty as Record<string, string>)[d] ?? d.toUpperCase();

  // Practice-mode result panel data
  const practiceEvaluated = !isExamMode && !!currentQ && !!evaluatedQuestions[currentQ.id];
  const currentPicked = currentQ ? selectedAnswers[currentQ.id] : undefined;
  const currentCorrect = !!currentQ && currentPicked === currentQ.correctIndex;
  const correctLetter = currentQ ? String.fromCharCode(65 + currentQ.correctIndex) : '';
  const inReview = examStatus === 'review';

  const kindLabel = (() => {
    if (examType === 'UNIT') return `${r.unitTest} · ${subtitle || title}`;
    if (inReview) return `${x.reviewQuestions} · ${title}`;
    return subtitle ? `${title} · ${subtitle}` : title;
  })();

  const fmtNet = (n: number) => n.toLocaleString(lang, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const renderSummary = () => {
    if (!finalResult) return null;
    const total = questions.length || 1;
    const ringLen = 2 * Math.PI * 62;
    const ratio = finalResult.correctCount / total;
    const wrongIds = questions.filter((q) => {
      const a = selectedAnswers[q.id];
      return a !== undefined && a !== q.correctIndex;
    }).length;

    return (
      <>
        <section className="ky-stage qz-res-stage" aria-label={x.results}>
          <div className="ky-floor" aria-hidden="true" />
          <p className="ky-eyebrow qz-res-eyebrow">
            {title} · {r.completed}
          </p>
          <svg className="qz-ring ky-pop" viewBox="0 0 150 150" role="img" aria-label={`${x.net} ${fmtNet(finalResult.netScore)}`}>
            <circle cx="75" cy="75" r="62" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="12" />
            <circle
              cx="75"
              cy="75"
              r="62"
              fill="none"
              stroke="#2dd9c3"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={ringLen}
              strokeDashoffset={ringLen * (1 - Math.max(0.02, ratio))}
              transform="rotate(-90 75 75)"
            />
            <text x="75" y="76" textAnchor="middle" className="qz-ring__num">
              {finalResult.correctCount}
              <tspan className="qz-ring__of"> / {questions.length}</tspan>
            </text>
            <text x="75" y="100" textAnchor="middle" className="qz-ring__lbl">
              {t.exams.correctCount}
            </text>
          </svg>
          {finalResult.tgPercentile && (
            <span className="ky-chip qz-res-chip">
              {finalResult.tgPercentile.tierTitle} · {finalResult.tgPercentile.percentileFormatted}
            </span>
          )}
        </section>

        <div className="ky-fit">
          <div className="ky-pane qz-res">
            <section aria-label={x.results} className="ky-lead qz-res-stats ky-pop">
              <div className="ky-well qz-res-stat">
                <p className="ky-mono ky-disp qz-c-ok">{finalResult.correctCount}</p>
                <p>{t.exams.correctCount}</p>
              </div>
              <div className="ky-well qz-res-stat">
                <p className="ky-mono ky-disp qz-c-bad">{finalResult.wrongCount}</p>
                <p>{t.exams.wrongCount}</p>
              </div>
              <div className="ky-well qz-res-stat">
                <p className="ky-mono ky-disp">{finalResult.emptyCount}</p>
                <p>{t.exams.emptyCount}</p>
              </div>
              <div className="ky-well qz-res-stat qz-res-stat--net">
                <p className="ky-mono ky-disp qz-c-accent">{fmtNet(finalResult.netScore)}</p>
                <p>{x.net}</p>
              </div>
            </section>

            {finalResult.tgPercentile && (
              <div className="ky-card qz-tg">
                <p className="ky-fs-14">
                  <strong>{finalResult.tgPercentile.estimatedRankRange}</strong>
                </p>
                <p className="ky-fs-14 qz-muted">“{finalResult.tgPercentile.feedbackMessage}”</p>
              </div>
            )}

            <section className="ky-card qz-breakdown" aria-label={r.breakdown}>
              <div className="qz-breakdown__head">
                <p className="ky-fs-15">{r.breakdown}</p>
                <span className="ky-mono">
                  {x.time} {formatTime(finalResult.durationUsedSeconds)}
                </span>
              </div>
              <div className="qz-breakdown__grid">
                {questions.map((q, idx) => {
                  const answer = selectedAnswers[q.id];
                  const status = answer === undefined ? 'empty' : answer === q.correctIndex ? 'ok' : 'bad';
                  return (
                    <button
                      key={q.id}
                      type="button"
                      className={`qz-bd qz-bd--${status}`}
                      aria-label={`${x.questionAria(idx + 1)}: ${
                        status === 'ok' ? x.correctTitle : status === 'bad' ? x.wrongTitle : t.exams.emptyCount
                      }`}
                      onClick={() => {
                        setExamStatus('review');
                        setCurrentIndex(idx);
                      }}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </section>

            <div className="ky-card qz-coach">
              <span className="qz-coach__icon" aria-hidden="true">
                <Sparkles size={20} />
              </span>
              <p className="ky-fs-13">
                <strong>{r.coachLabel}:</strong> {wrongIds > 0 ? r.coachWrong(wrongIds) : r.coachPerfect}
              </p>
            </div>
          </div>
        </div>

        <footer className="ky-screen-foot ky-screen-foot--stack qz-res-foot">
          <button
            type="button"
            className="ky-btn ky-btn--primary ky-grow qz-res-main"
            onClick={() => {
              setExamStatus('review');
              setCurrentIndex(0);
            }}
          >
            <ListChecks size={18} aria-hidden="true" />
            <span>{r.reviewSolutions}</span>
          </button>
          <div className="qz-res-row">
            <button type="button" className="ky-btn ky-btn--quiet" data-sfx="start" onClick={handleRetry}>
              <RotateCcw size={18} aria-hidden="true" />
              <span>{x.retry}</span>
            </button>
            <button type="button" className="ky-btn ky-btn--quiet" onClick={onClose}>
              <span>{r.backToExams}</span>
            </button>
          </div>
        </footer>
      </>
    );
  };

  const timerChip = (
    <span
      className={`ky-chip ky-mono qz-timer ${isExamMode ? 'ky-chip--gold' : ''} ${isTimeLow ? 'qz-timer--low' : ''}`}
      role="timer"
      aria-live="off"
    >
      <Clock size={15} aria-hidden="true" />
      <span>{isExamMode ? formatTime(secondsRemaining) : formatTime(elapsedSeconds)}</span>
    </span>
  );

  const showNavigator = isExamMode || inReview;

  return (
    <div className="ky-immersive qz" role="dialog" aria-modal="true" aria-label={title}>
      {examStatus === 'submitted' && finalResult ? (
        renderSummary()
      ) : (
        <>
          <header className="ky-screen-head qz-head">
            <div className="qz-top">
              <button type="button" className="ky-icon-btn" onClick={requestClose} aria-label={x.exitAria}>
                <X size={20} aria-hidden="true" />
              </button>
              <div className="ky-head-text">
                <p className="ky-meta ky-fs-12">{kindLabel}</p>
                <p className="ky-head-sub ky-fs-16">{r.questionOf(currentIndex + 1, questions.length)}</p>
              </div>
              {timerChip}
              {currentQ && (
                <button
                  type="button"
                  className={`ky-icon-btn ${isBookmarked ? 'is-on qz-star-on' : ''}`}
                  aria-pressed={isBookmarked}
                  aria-label={isBookmarked ? x.bookmarkRemove : x.bookmarkAdd}
                  onClick={() => onToggleBookmark(currentQ.id)}
                >
                  <Star size={18} aria-hidden="true" fill={isBookmarked ? 'currentColor' : 'none'} />
                </button>
              )}
            </div>
            <div
              className="ky-track qz-track"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={questions.length}
              aria-valuenow={currentIndex + 1}
              aria-label={r.questionOf(currentIndex + 1, questions.length)}
            >
              <div className="ky-fill" style={{ inlineSize: `${questions.length ? ((currentIndex + 1) / questions.length) * 100 : 0}%` }} />
            </div>
          </header>

          <div className="ky-fit">
            {currentQ && (
              <div className="ky-pane qz-pane" key={currentQ.id}>
                <div className="ky-lead qz-lead">
                  {currentQ.diagram && (
                    <div className="qz-diagram">
                      <ChemicalDiagram spec={currentQ.diagram} allowZoom={true} />
                    </div>
                  )}
                  <div className="qz-meta">
                    <span
                      className={`ky-chip ${
                        currentQ.difficulty === 'osym' ? 'ky-chip--bad' : currentQ.difficulty === 'hard' ? 'ky-chip--gold' : ''
                      }`}
                    >
                      {difficultyLabel(currentQ.difficulty)}
                    </span>
                    <span className="ky-chip ky-mono">{currentQ.unitId.toUpperCase()}</span>
                  </div>
                  <h1 className="ky-fs-20 qz-stem">{formatChemText(currentQ.stem)}</h1>
                </div>

                <div className="qz-options" role="radiogroup" aria-label={x.options}>
                  {currentQ.options.map((optText, optIdx) => {
                    const optionLetter = String.fromCharCode(65 + optIdx);
                    const isSelected = currentPicked === optIdx;
                    const frozen = practiceEvaluated || inReview;

                    let stateClass = '';
                    if (frozen) {
                      if (optIdx === currentQ.correctIndex) stateClass = 'right';
                      else if (isSelected) stateClass = 'wrong';
                    } else if (isSelected) {
                      stateClass = 'on';
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        disabled={frozen}
                        className={`ky-opt qz-opt ${stateClass} ${stateClass === 'wrong' && !isExamMode ? 'ky-shake' : ''}`}
                        onClick={() => handleSelectOption(optIdx)}
                      >
                        <span className="ky-key">{optionLetter}</span>
                        <span className="ky-fs-16 qz-opt-text">{formatChemText(optText)}</span>
                        {stateClass === 'right' && (
                          <span className="qz-opt-mark" aria-hidden="true">
                            <Check size={20} strokeWidth={3} />
                          </span>
                        )}
                        {stateClass === 'wrong' && (
                          <span className="qz-opt-mark" aria-hidden="true">
                            <X size={20} strokeWidth={3} />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {(practiceEvaluated || inReview) && (
                  <section
                    className={`ky-card qz-solution ky-pop ${currentCorrect ? 'qz-solution--ok' : 'qz-solution--bad'}`}
                    role="status"
                  >
                    <p className="ky-disp ky-fs-18 qz-verdict">
                      {currentCorrect ? (
                        <>
                          <Check size={18} aria-hidden="true" /> {x.correctTitle}
                        </>
                      ) : currentPicked === undefined ? (
                        <>
                          <Minus size={18} aria-hidden="true" /> {x.wrongAnswer(correctLetter)}
                        </>
                      ) : (
                        <>
                          <X size={18} aria-hidden="true" /> {x.wrongTitle} — {x.wrongAnswer(correctLetter)}
                        </>
                      )}
                    </p>
                    <p className="ky-fs-14 qz-solution__text">{formatChemText(currentQ.explanation)}</p>
                  </section>
                )}
              </div>
            )}
          </div>

          <footer className="ky-screen-foot ky-screen-foot--stack qz-foot">
            {showNavigator && (
              <div ref={dotsRef} className="qz-nav" role="tablist" aria-label={x.navigator}>
                {questions.map((q, idx) => {
                  const answer = selectedAnswers[q.id];
                  const isCurrent = idx === currentIndex;
                  const isFlagged = bookmarkedQuestionIds.includes(q.id);
                  let statusClass = 'none';
                  if (inReview) {
                    statusClass = answer === undefined ? 'none' : answer === q.correctIndex ? 'ok' : 'bad';
                  } else if (answer !== undefined) {
                    statusClass = 'answered';
                  }
                  return (
                    <button
                      key={q.id}
                      type="button"
                      role="tab"
                      aria-selected={isCurrent}
                      aria-label={x.questionAria(idx + 1)}
                      className={`qz-nav__dot qz-nav__dot--${statusClass} ${isFlagged ? 'is-flag' : ''} ${isCurrent ? 'is-cur' : ''}`}
                      onClick={() => setCurrentIndex(idx)}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            )}
            <div className="qz-foot__row">
              <button
                type="button"
                className="ky-btn ky-btn--quiet qz-prev"
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                aria-label={t.exams.prevQuestion}
              >
                <ChevronLeft size={20} aria-hidden="true" className="qz-flip" />
              </button>
              {isExamMode && examStatus === 'in-progress' && !isLast && (
                <button type="button" className="ky-btn ky-btn--quiet qz-finish" onClick={() => setShowSubmitConfirm(true)}>
                  <span>{r.finish}</span>
                  <span className="ky-mono qz-finish__n">
                    {answeredCount}/{questions.length}
                  </span>
                </button>
              )}
              {inReview && finalResult && (
                <button type="button" className="ky-btn ky-btn--quiet qz-finish" onClick={() => setExamStatus('submitted')}>
                  {x.results}
                </button>
              )}
              {!isLast ? (
                <button type="button" className="ky-btn ky-btn--primary ky-grow qz-next" onClick={goNext}>
                  <span>{inReview ? r.nextSolution : t.exams.nextQuestion}</span>
                  <ChevronRight size={18} aria-hidden="true" className="qz-flip" />
                </button>
              ) : isExamMode && examStatus === 'in-progress' ? (
                <button type="button" className="ky-btn ky-btn--ok ky-grow qz-next" onClick={() => setShowSubmitConfirm(true)}>
                  <span>{t.exams.finishExam}</span>
                </button>
              ) : (
                <button type="button" className="ky-btn ky-btn--primary ky-grow qz-next" onClick={inReview && finalResult ? () => setExamStatus('submitted') : onClose}>
                  <span>{inReview && finalResult ? x.results : x.sessionDone}</span>
                </button>
              )}
            </div>
          </footer>
        </>
      )}

      {/* Confirmation: Finish Exam */}
      {showSubmitConfirm && (
        <div className="ky-modal-backdrop qz-confirm-backdrop" onClick={() => setShowSubmitConfirm(false)}>
          <div
            className="ky-card qz-confirm ky-pop"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="qz-finish-title"
            onClick={(e) => e.stopPropagation()}
          >
            <AlertTriangle size={34} className="qz-confirm__icon" aria-hidden="true" />
            <h3 id="qz-finish-title" className="ky-disp">{rx.finishConfirmTitle}</h3>
            <p>
              {answeredCount < questions.length
                ? rx.finishConfirmEmpty(questions.length - answeredCount)
                : rx.finishConfirmAll}
            </p>
            <div className="qz-confirm__actions">
              <button type="button" className="ky-btn ky-btn--quiet" onClick={() => setShowSubmitConfirm(false)}>
                {rx.keepGoing}
              </button>
              <button type="button" className="ky-btn ky-btn--ok" onClick={() => handleSubmitExam(false)}>
                {rx.yesFinish}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation: Exit Early */}
      {showExitConfirm && (
        <div className="ky-modal-backdrop qz-confirm-backdrop" onClick={() => setShowExitConfirm(false)}>
          <div
            className="ky-card qz-confirm ky-pop"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="qz-exit-title"
            onClick={(e) => e.stopPropagation()}
          >
            <AlertTriangle size={34} className="qz-confirm__icon qz-confirm__icon--bad" aria-hidden="true" />
            <h3 id="qz-exit-title" className="ky-disp">{rx.exitConfirmTitle}</h3>
            <p>{rx.exitConfirmBody}</p>
            <div className="qz-confirm__actions">
              <button type="button" className="ky-btn ky-btn--quiet" onClick={() => setShowExitConfirm(false)}>
                {rx.backToExam}
              </button>
              <button type="button" className="ky-btn ky-btn--danger" onClick={onClose}>
                {rx.exitNow}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
