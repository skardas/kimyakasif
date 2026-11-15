import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Clock,
  Bookmark,
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

  const renderSummary = () => {
    if (!finalResult) return null;
    const ratio = questions.length ? finalResult.correctCount / questions.length : 0;
    const lit = Math.min(3, Math.ceil(ratio * 3));
    const atom = (i: number, left: number, top: number, size: number) => (
      <span
        className="ky-atom"
        style={{
          left,
          top,
          width: size,
          height: size,
          ['--c' as string]: i < lit ? '#2dd9c3' : '#5b6b82',
          ['--cd' as string]: i < lit ? '#0c8073' : '#2a3446',
        }}
      />
    );

    return (
      <div className="qz-body qz-summary">
        <section className="ky-stage qz-hero" aria-label={x.results}>
          <div className="ky-floor" />
          <div className="qz-hero__atoms ky-float" aria-hidden="true">
            <span className="ky-bond" style={{ left: 46, top: 40, width: 30, transform: 'rotate(-32deg)' }} />
            <span className="ky-bond" style={{ left: 78, top: 24, width: 30, transform: 'rotate(32deg)' }} />
            {atom(0, 6, 36, 40)}
            {atom(1, 47, 6, 56)}
            {atom(2, 104, 36, 40)}
          </div>
          <h2 className="ky-disp">{examType === 'TG' ? 'Derece Provası Tamamlandı!' : 'Deneme Sınavı Tamamlandı!'}</h2>
          <p>
            {title} • {x.questionsN(questions.length)}
          </p>
          <div className="qz-hero__score ky-disp ky-mono">{finalResult.netScore.toFixed(2)}</div>
          <div className="qz-hero__unit">{x.net}</div>
        </section>

        {finalResult.tgPercentile && (
          <div className="ky-card qz-tg">
            <div className="qz-tg__row">
              <span className="qz-tg__tier">{finalResult.tgPercentile.tierTitle}</span>
              <span className="ky-chip ky-chip--gold">{finalResult.tgPercentile.percentileFormatted}</span>
            </div>
            <p>
              Tahmini YKS Sayısal Kimya Sıralama Bandı: <strong>{finalResult.tgPercentile.estimatedRankRange}</strong>
            </p>
            <em>"{finalResult.tgPercentile.feedbackMessage}"</em>
          </div>
        )}

        <div className="qz-stats">
          <div className="ky-well qz-stat qz-stat--ok">
            <strong className="ky-mono">{finalResult.correctCount}</strong>
            <span>{t.exams.correctCount}</span>
          </div>
          <div className="ky-well qz-stat qz-stat--bad">
            <strong className="ky-mono">{finalResult.wrongCount}</strong>
            <span>{t.exams.wrongCount}</span>
          </div>
          <div className="ky-well qz-stat qz-stat--empty">
            <strong className="ky-mono">{finalResult.emptyCount}</strong>
            <span>{t.exams.emptyCount}</span>
          </div>
          <div className="ky-well qz-stat qz-stat--time">
            <strong className="ky-mono">{formatTime(finalResult.durationUsedSeconds)}</strong>
            <span>{x.time}</span>
          </div>
        </div>

        <section className="qz-review" aria-label={x.reviewList}>
          <h3>{x.reviewList}</h3>
          {questions.map((q, idx) => {
            const answer = selectedAnswers[q.id];
            const status = answer === undefined ? 'empty' : answer === q.correctIndex ? 'ok' : 'bad';
            return (
              <button
                key={q.id}
                type="button"
                className={`ky-card qz-review__row qz-review__row--${status}`}
                onClick={() => {
                  setExamStatus('review');
                  setCurrentIndex(idx);
                }}
              >
                <span className="qz-review__n ky-mono">{idx + 1}</span>
                <span className="qz-review__stem">{q.stem}</span>
                <span className="qz-review__mark" aria-hidden="true">
                  {status === 'ok' ? <CircleCheck size={20} /> : status === 'bad' ? <CircleX size={20} /> : <Minus size={20} />}
                </span>
              </button>
            );
          })}
        </section>

        <div className="qz-actions">
          <button
            type="button"
            className="ky-btn ky-btn--quiet"
            onClick={() => {
              setExamStatus('review');
              setCurrentIndex(0);
            }}
          >
            <ListChecks size={18} aria-hidden="true" />
            <span>{x.reviewQuestions}</span>
          </button>
          <button type="button" className="ky-btn ky-btn--quiet" data-sfx="start" onClick={handleRetry}>
            <RotateCcw size={18} aria-hidden="true" />
            <span>{x.retry}</span>
          </button>
          <button type="button" className="ky-btn ky-btn--primary" onClick={onClose}>
            <span>{x.close}</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="ky-modal-backdrop qz-backdrop" role="dialog" aria-modal="true" aria-label={title}>
      <div className="qz">
        {/* Top Header */}
        <header className="qz-head">
          <div className="qz-top">
            <button type="button" className="ky-icon-btn" onClick={requestClose} aria-label={x.exitAria}>
              <X size={20} aria-hidden="true" />
            </button>

            <div className="qz-titles">
              <span className="ky-eyebrow">{subtitle || title}</span>
              <h2>{title}</h2>
            </div>

            <span
              className={`ky-chip ky-chip--gold ky-mono qz-timer ${isTimeLow ? 'qz-timer--low' : ''}`}
              role="timer"
              aria-live="off"
            >
              <Clock size={15} aria-hidden="true" />
              <span>{isExamMode ? formatTime(secondsRemaining) : formatTime(elapsedSeconds)}</span>
            </span>

            {currentQ && examStatus !== 'submitted' && (
              <button
                type="button"
                className={`ky-icon-btn ${isBookmarked ? 'is-on' : ''}`}
                aria-pressed={isBookmarked}
                aria-label={isBookmarked ? x.bookmarkRemove : x.bookmarkAdd}
                onClick={() => onToggleBookmark(currentQ.id)}
                style={isBookmarked ? { color: 'var(--gold)' } : undefined}
              >
                <Bookmark size={18} aria-hidden="true" fill={isBookmarked ? 'currentColor' : 'none'} />
              </button>
            )}
          </div>

          {examStatus !== 'submitted' && (
            <div className="qz-progress">
              <div
                className="ky-track"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={questions.length}
                aria-valuenow={currentIndex + 1}
              >
                <div
                  className="ky-fill"
                  style={{ inlineSize: `${questions.length ? ((currentIndex + 1) / questions.length) * 100 : 0}%` }}
                />
              </div>
              <span className="qz-count ky-mono">
                {currentIndex + 1} / {questions.length}
              </span>
              {isExamMode && examStatus === 'in-progress' && (
                <button
                  type="button"
                  className="ky-btn ky-btn--gold qz-finish"
                  onClick={() => setShowSubmitConfirm(true)}
                >
                  {t.exams.finishExam}
                </button>
              )}
              {inReview && finalResult && (
                <button type="button" className="ky-btn ky-btn--quiet qz-finish" onClick={() => setExamStatus('submitted')}>
                  {x.results}
                </button>
              )}
            </div>
          )}
        </header>

        {/* Modal Body */}
        {examStatus === 'submitted' && finalResult ? (
          renderSummary()
        ) : (
          <div className="qz-body">
            {/* Question Navigator */}
            <div ref={dotsRef} className="qz-dots ky-scroll-x" role="tablist" aria-label={x.navigator}>
              {questions.map((q, idx) => {
                const answer = selectedAnswers[q.id];
                const isCurrent = idx === currentIndex;
                const isQBookmarked = bookmarkedQuestionIds.includes(q.id);

                let statusClass = 'unvisited';
                if (!isExamMode) {
                  if (evaluatedQuestions[q.id]) {
                    statusClass = answer === q.correctIndex ? 'correct' : 'wrong';
                  }
                } else if (examStatus === 'review') {
                  if (answer === undefined) statusClass = 'unvisited';
                  else if (answer === q.correctIndex) statusClass = 'correct';
                  else statusClass = 'wrong';
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
                    className={`qz-dot ${statusClass} ${isCurrent ? 'active' : ''} ${isQBookmarked ? 'bookmarked' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {currentQ && (
              <>
                {/* Stem card */}
                <div className="ky-card qz-stem">
                  <div className="qz-stem__meta">
                    <span
                      className={`ky-chip ${
                        currentQ.difficulty === 'osym' ? 'ky-chip--bad' : currentQ.difficulty === 'hard' ? 'ky-chip--gold' : ''
                      }`}
                    >
                      {difficultyLabel(currentQ.difficulty)}
                    </span>
                    <span className="ky-chip ky-mono">{currentQ.unitId.toUpperCase()}</span>
                  </div>

                  {currentQ.diagram && <ChemicalDiagram spec={currentQ.diagram} allowZoom={true} />}

                  <div className="qz-stem__text">{formatChemText(currentQ.stem)}</div>
                </div>

                {/* Options (A-E) */}
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
                        className={`ky-opt ${stateClass} ${stateClass === 'wrong' && !isExamMode ? 'ky-shake' : ''}`}
                        onClick={() => handleSelectOption(optIdx)}
                      >
                        <span className="ky-key">{optionLetter}</span>
                        <span className="qz-opt-text">{formatChemText(optText)}</span>
                        {stateClass === 'right' && (
                          <span className="qz-opt-mark" aria-hidden="true">
                            <Check size={22} strokeWidth={3} />
                          </span>
                        )}
                        {stateClass === 'wrong' && (
                          <span className="qz-opt-mark" aria-hidden="true">
                            <X size={22} strokeWidth={3} />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Review explanation (exam mode review only; practice uses the result panel) */}
                {inReview && (
                  <div className={`ky-card qz-note ${currentPicked === currentQ.correctIndex ? 'qz-note--ok' : 'qz-note--bad'}`}>
                    <div className="qz-note__title ky-disp">
                      {currentPicked === currentQ.correctIndex ? (
                        <>
                          <Check size={18} aria-hidden="true" />
                          <span>{x.correctTitle}</span>
                        </>
                      ) : (
                        <>
                          <X size={18} aria-hidden="true" />
                          <span>{x.wrongAnswer(correctLetter)}</span>
                        </>
                      )}
                    </div>
                    <p>{formatChemText(currentQ.explanation)}</p>
                  </div>
                )}

                {(practiceEvaluated || inReview) && (
                  <div className="ky-well qz-tip">
                    <Lightbulb size={18} aria-hidden="true" />
                    <div>
                      <strong>ÖSYM Dikkat Tuzağı:</strong> Soruda verilen reaksiyon denklemi, gaz kanunu veya asit-baz
                      kuralını incelerken öncüllerdeki kesinlik ve istisna ifadelerine odaklanınız.
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Practice result panel: slides up from the bottom after answering */}
        {practiceEvaluated && currentQ && examStatus !== 'submitted' && (
          <div className="qz-dock">
            <div role="status" className={`ky-card qz-result ${currentCorrect ? 'qz-result--ok' : 'qz-result--bad'}`}>
              <div className="qz-result__text">
                <p className="qz-result__title ky-disp">
                  {currentCorrect ? x.correctTitle : `${x.wrongTitle} — ${x.wrongAnswer(correctLetter)}`}
                </p>
                <p>{formatChemText(currentQ.explanation)}</p>
              </div>
              {!isLast ? (
                <button type="button" className="ky-btn ky-btn--primary" onClick={goNext}>
                  <span>{t.exams.nextQuestion}</span>
                  <ChevronRight size={18} aria-hidden="true" className="qz-flip" />
                </button>
              ) : (
                <button type="button" className="ky-btn ky-btn--primary" onClick={onClose}>
                  <span>{x.sessionDone}</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Footer Controls */}
        {examStatus !== 'submitted' && !practiceEvaluated && (
          <footer className="qz-foot">
            <button
              type="button"
              className="ky-btn ky-btn--quiet"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              aria-label={t.exams.prevQuestion}
            >
              <ChevronLeft size={18} aria-hidden="true" className="qz-flip" />
              <span className="qz-lbl-prev">{t.exams.prevQuestion}</span>
            </button>

            <span className="qz-foot__mid ky-mono">
              {isExamMode && examStatus === 'in-progress' ? `${answeredCount} / ${questions.length}` : ''}
            </span>

            {!isLast ? (
              <button type="button" className="ky-btn ky-btn--primary" onClick={goNext}>
                <span>{t.exams.nextQuestion}</span>
                <ChevronRight size={18} aria-hidden="true" className="qz-flip" />
              </button>
            ) : isExamMode && examStatus === 'in-progress' ? (
              <button type="button" className="ky-btn ky-btn--ok" onClick={() => setShowSubmitConfirm(true)}>
                <span>{t.exams.finishExam}</span>
              </button>
            ) : (
              <button type="button" className="ky-btn ky-btn--primary" onClick={onClose}>
                <span>{x.sessionDone}</span>
              </button>
            )}
          </footer>
        )}

        {/* Confirmation: Finish Exam */}
        {showSubmitConfirm && (
          <div className="ky-modal-backdrop qz-confirm-backdrop" onClick={() => setShowSubmitConfirm(false)}>
            <div
              className="ky-card qz-confirm ky-pop"
              role="alertdialog"
              aria-modal="true"
              aria-label="Sınavı Bitirmek İstiyor musun?"
              onClick={(e) => e.stopPropagation()}
            >
              <AlertTriangle size={34} className="qz-confirm__icon" aria-hidden="true" />
              <h3 className="ky-disp">Sınavı Bitirmek İstiyor musun?</h3>
              <p>
                {answeredCount < questions.length
                  ? `${questions.length - answeredCount} adet boş sorun var. Yanıtların puanlanıp Net skorun hesaplanacak.`
                  : 'Tüm soruları yanıtladın. Net skorun hesaplanıp kaydedilecek.'}
              </p>
              <div className="qz-confirm__actions">
                <button type="button" className="ky-btn ky-btn--quiet" onClick={() => setShowSubmitConfirm(false)}>
                  Devam Et
                </button>
                <button type="button" className="ky-btn ky-btn--ok" onClick={() => handleSubmitExam(false)}>
                  Evet, Bitir
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
              aria-label="Sınavdan Çıkmak İstiyor musun?"
              onClick={(e) => e.stopPropagation()}
            >
              <AlertTriangle size={34} className="qz-confirm__icon qz-confirm__icon--bad" aria-hidden="true" />
              <h3 className="ky-disp">Sınavdan Çıkmak İstiyor musun?</h3>
              <p>Şimdi çıkarsan sınav kaydedilmeyecektir.</p>
              <div className="qz-confirm__actions">
                <button type="button" className="ky-btn ky-btn--quiet" onClick={() => setShowExitConfirm(false)}>
                  Sınava Dön
                </button>
                <button type="button" className="ky-btn ky-btn--danger" onClick={onClose}>
                  Çık
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
