import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Clock,
  Star,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Award,
  Sparkles,
  X,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import type { CompiledQuestion, LanguageCode } from '../../types/chemistry';
import type { ExamResultRecord } from '../../store/useAppStore';
import { sfx } from '../../audio/sfx';
import { calculateOsymNet, estimateTgPercentile, type TgPercentileResult } from '../../engine/mockExamCatalog';
import { ChemicalDiagram } from '../diagrams/ChemicalDiagram';
import { UI_TRANSLATIONS } from '../../i18n/translations';

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

  const currentQ = questions[currentIndex];
  const isBookmarked = currentQ ? bookmarkedQuestionIds.includes(currentQ.id) : false;

  // Timer Effect
  useEffect(() => {
    if (examStatus !== 'in-progress') return;

    const timer = setInterval(() => {
      if (isExamMode) {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            // Auto submit on time expiry
            handleSubmitExam(true);
            return 0;
          }
          return prev - 1;
        });
      } else {
        setElapsedSeconds((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [examStatus, isExamMode]);

  // Handle Exam Submission
  const handleSubmitExam = useCallback(
    (isAutoSubmit = false) => {
      if (examStatus !== 'in-progress') return;

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

      // Navigation: Arrows
      if (e.key === 'ArrowRight') {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      }
      // Options A-E
      else if (key === 'A' || key === '1') {
        handleSelectOption(0);
      } else if (key === 'B' || key === '2') {
        handleSelectOption(1);
      } else if (key === 'C' || key === '3') {
        handleSelectOption(2);
      } else if (key === 'D' || key === '4') {
        handleSelectOption(3);
      } else if (key === 'E' || key === '5') {
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

  // Format MM:SS
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(Math.max(0, totalSeconds) / 60);
    const secs = Math.floor(Math.max(0, totalSeconds) % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const isTimeLow = isExamMode && secondsRemaining < 120 && examStatus === 'in-progress';

  return (
    <div className="quiz-modal-backdrop" role="dialog" aria-modal="true" aria-label={title}>
      <div className="quiz-modal-container">
        {/* Top Header */}
        <header className="quiz-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
            <button
              type="button"
              className="diagram-close-btn"
              onClick={() => {
                if (examStatus === 'in-progress' && isExamMode) {
                  setShowExitConfirm(true);
                } else {
                  onClose();
                }
              }}
              title="Çıkış"
              aria-label="Kapat"
            >
              <X size={18} />
            </button>
            <div style={{ minWidth: 0 }}>
              <h2
                style={{
                  margin: 0,
                  fontSize: '1rem',
                  fontWeight: 800,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: 'var(--text-primary)',
                }}
              >
                {title}
              </h2>
              {subtitle && (
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Timer Display */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              className={`score-timer ${isTimeLow ? 'timer-low' : ''}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontSize: '0.925rem',
                fontWeight: 700,
                color: isTimeLow ? 'var(--accent-ruby)' : 'var(--text-primary)',
                background: 'var(--bg-elevated)',
                padding: '0.25rem 0.625rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <Clock size={16} />
              <span>{isExamMode ? formatTime(secondsRemaining) : formatTime(elapsedSeconds)}</span>
            </div>

            {isExamMode && examStatus === 'in-progress' && (
              <button
                type="button"
                className="btn-primary"
                style={{ padding: '0.4rem 0.85rem', fontSize: '0.85rem' }}
                onClick={() => setShowSubmitConfirm(true)}
              >
                {t.exams.finishExam}
              </button>
            )}
          </div>
        </header>

        {/* Modal Body */}
        {examStatus === 'submitted' && finalResult ? (
          /* ============================================================= */
          /* Celebration & Score Summary Screen                            */
          /* ============================================================= */
          <div className="quiz-modal-body" style={{ textAlign: 'center', padding: '2rem 1.25rem' }}>
            <div className="score-summary-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                {finalResult.tgPercentile ? finalResult.tgPercentile.badgeIcon : finalResult.netScore >= 5 ? '🎉' : '🎯'}
              </div>
              <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 800 }}>
                {examType === 'TG' ? 'Derece Provası Tamamlandı!' : 'Deneme Sınavı Tamamlandı!'}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {title} • {questions.length} Soru
              </p>

              {/* Net Score Hero */}
              <div className="score-net-hero">
                {finalResult.netScore.toFixed(2)}{' '}
                <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Net</span>
              </div>

              {/* TG Percentile Card if applicable */}
              {finalResult.tgPercentile && (
                <div
                  style={{
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: '1.5px solid var(--accent-amber)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem',
                    margin: '1rem 0',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span
                      style={{
                        fontWeight: 800,
                        color: finalResult.tgPercentile.tierColor,
                        fontSize: '1rem',
                      }}
                    >
                      {finalResult.tgPercentile.tierTitle}
                    </span>
                    <span
                      style={{
                        background: 'var(--accent-amber)',
                        color: '#000',
                        fontWeight: 800,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                      }}
                    >
                      {finalResult.tgPercentile.percentileFormatted}
                    </span>
                  </div>
                  <p style={{ margin: '0.4rem 0 0', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                    Tahmini YKS Sayısal Kimya Sıralama Bandı: <strong>{finalResult.tgPercentile.estimatedRankRange}</strong>
                  </p>
                  <p style={{ margin: '0.4rem 0 0', fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    "{finalResult.tgPercentile.feedbackMessage}"
                  </p>
                </div>
              )}

              {/* 4-Stat Breakdown Grid */}
              <div className="score-stats-grid">
                <div className="score-stat-box">
                  <div className="score-stat-value" style={{ color: 'var(--accent-emerald)' }}>
                    {finalResult.correctCount}
                  </div>
                  <div className="score-stat-label">Doğru</div>
                </div>
                <div className="score-stat-box">
                  <div className="score-stat-value" style={{ color: 'var(--accent-ruby)' }}>
                    {finalResult.wrongCount}
                  </div>
                  <div className="score-stat-label">Yanlış</div>
                </div>
                <div className="score-stat-box">
                  <div className="score-stat-value" style={{ color: 'var(--text-muted)' }}>
                    {finalResult.emptyCount}
                  </div>
                  <div className="score-stat-label">Boş</div>
                </div>
                <div className="score-stat-box">
                  <div className="score-stat-value" style={{ color: 'var(--brand-primary)' }}>
                    {formatTime(finalResult.durationUsedSeconds)}
                  </div>
                  <div className="score-stat-label">Süre</div>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                  onClick={() => {
                    setExamStatus('review');
                    setCurrentIndex(0);
                  }}
                >
                  <HelpCircle size={16} />
                  <span>Soruları İncele</span>
                </button>
                <button type="button" className="btn-primary" onClick={onClose}>
                  <span>Tamamla & Kapat</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ============================================================= */
          /* Active Question View                                          */
          /* ============================================================= */
          <div className="quiz-modal-body">
            {/* Question Navigator Grid */}
            <div className="question-nav-grid" role="tablist" aria-label="Soru Gezgini">
              {questions.map((q, idx) => {
                const answer = selectedAnswers[q.id];
                const isCurrent = idx === currentIndex;
                const isQBookmarked = bookmarkedQuestionIds.includes(q.id);

                let statusClass = 'unvisited';
                if (!isExamMode) {
                  // Practice Mode Navigator Status
                  if (evaluatedQuestions[q.id]) {
                    statusClass = answer === q.correctIndex ? 'correct' : 'wrong';
                  }
                } else {
                  // Exam Mode Navigator Status
                  if (examStatus === 'review') {
                    if (answer === undefined) statusClass = 'unvisited';
                    else if (answer === q.correctIndex) statusClass = 'correct';
                    else statusClass = 'wrong';
                  } else {
                    if (answer !== undefined) statusClass = 'answered';
                  }
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    role="tab"
                    aria-selected={isCurrent}
                    className={`nav-dot ${statusClass} ${isCurrent ? 'active' : ''} ${
                      isQBookmarked ? 'bookmarked' : ''
                    }`}
                    onClick={() => setCurrentIndex(idx)}
                    title={`Soru ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Current Question Stem & Metadata */}
            {currentQ && (
              <div className="question-content-container">
                {/* Meta Bar: Difficulty, Unit, Bookmark Star */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        background: 'var(--bg-elevated)',
                        color: 'var(--brand-primary)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      Soru {currentIndex + 1} / {questions.length}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        background: 'var(--bg-elevated)',
                        color:
                          currentQ.difficulty === 'osym'
                            ? 'var(--accent-ruby)'
                            : currentQ.difficulty === 'hard'
                            ? 'var(--accent-amber)'
                            : 'var(--text-secondary)',
                      }}
                    >
                      {currentQ.difficulty.toUpperCase()}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {currentQ.unitId.toUpperCase()}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onToggleBookmark(currentQ.id)}
                    style={{
                      background: isBookmarked ? 'rgba(245, 158, 11, 0.15)' : 'var(--bg-elevated)',
                      border: `1px solid ${isBookmarked ? 'var(--accent-amber)' : 'var(--border-subtle)'}`,
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.3rem 0.6rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.8rem',
                      color: isBookmarked ? 'var(--accent-amber)' : 'var(--text-secondary)',
                      transition: 'all 0.15s ease',
                    }}
                    title={isBookmarked ? 'Yıldızdan Çıkar' : 'Yıldıza Ekle'}
                  >
                    <Star size={14} fill={isBookmarked ? 'var(--accent-amber)' : 'none'} />
                    <span>{isBookmarked ? 'Yıldızlı' : 'Yıldızla'}</span>
                  </button>
                </div>

                {/* Embedded Chemical Diagram if available */}
                {currentQ.diagram && (
                  <ChemicalDiagram spec={currentQ.diagram} allowZoom={true} />
                )}

                {/* Question Stem */}
                <div
                  className="question-stem"
                  style={{
                    fontSize: '1.025rem',
                    lineHeight: 1.6,
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                    marginBottom: '1.25rem',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {currentQ.stem}
                </div>

                {/* Options List (A-E) */}
                <div className="options-list" role="radiogroup" aria-label="Seçenekler">
                  {currentQ.options.map((optText, optIdx) => {
                    const optionLetter = String.fromCharCode(65 + optIdx); // A, B, C, D, E
                    const userSelected = selectedAnswers[currentQ.id];
                    const isSelected = userSelected === optIdx;

                    let cardClass = '';
                    let disabled = false;

                    if (!isExamMode) {
                      // Practice mode immediate feedback
                      const isEvaluated = evaluatedQuestions[currentQ.id];
                      if (isEvaluated) {
                        disabled = true;
                        if (optIdx === currentQ.correctIndex) {
                          cardClass = 'correct';
                        } else if (isSelected) {
                          cardClass = 'wrong';
                        } else {
                          cardClass = 'disabled';
                        }
                      } else if (isSelected) {
                        cardClass = 'selected';
                      }
                    } else {
                      // Exam mode: silent selection or review
                      if (examStatus === 'review') {
                        disabled = true;
                        if (optIdx === currentQ.correctIndex) {
                          cardClass = 'correct';
                        } else if (isSelected) {
                          cardClass = 'wrong';
                        } else {
                          cardClass = 'disabled';
                        }
                      } else {
                        if (isSelected) cardClass = 'selected';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        disabled={disabled}
                        className={`option-card ${cardClass}`}
                        onClick={() => handleSelectOption(optIdx)}
                      >
                        <div className="option-key-badge">{optionLetter}</div>
                        <div className="option-text">{optText}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Practice Mode Solution Explanation */}
                {(!isExamMode && evaluatedQuestions[currentQ.id]) || examStatus === 'review' ? (
                  <div
                    className={`solution-explanation-box ${
                      selectedAnswers[currentQ.id] === currentQ.correctIndex ? 'correct-theme' : 'wrong-theme'
                    }`}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color:
                          selectedAnswers[currentQ.id] === currentQ.correctIndex
                            ? 'var(--accent-emerald)'
                            : 'var(--accent-ruby)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {selectedAnswers[currentQ.id] === currentQ.correctIndex ? (
                        <>
                          <CheckCircle2 size={18} />
                          <span>Doğru Cevap! Tebrikler.</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={18} />
                          <span>
                            Yanlış Cevap. Doğru Seçenek: {String.fromCharCode(65 + currentQ.correctIndex)}
                          </span>
                        </>
                      )}
                    </div>
                    <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                      {currentQ.explanation}
                    </p>

                    {/* ÖSYM Tips if available */}
                    <div className="solution-osym-tip">
                      <Lightbulb size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong>ÖSYM Dikkat Tuzağı:</strong> Soruda verilen reaksiyon denklemi, gaz kanunu veya
                        asit-baz kuralını incelerken öncüllerdeki kesinlik ve istisna ifadelerine odaklanınız.
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        )}

        {/* Modal Footer Controls */}
        {examStatus !== 'submitted' && (
          <footer className="quiz-modal-footer">
            <button
              type="button"
              className="btn-secondary"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <ChevronLeft size={16} />
              <span>Önceki Soru</span>
            </button>

            <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
              {isExamMode ? `${answeredCount} / ${questions.length} Cevaplandı` : ''}
            </span>

            {currentIndex < questions.length - 1 ? (
              <button
                type="button"
                className="btn-primary"
                onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <span>Sonraki Soru</span>
                <ChevronRight size={16} />
              </button>
            ) : isExamMode && examStatus === 'in-progress' ? (
              <button
                type="button"
                className="btn-primary"
                onClick={() => setShowSubmitConfirm(true)}
                style={{ background: 'var(--accent-emerald)', borderColor: 'var(--accent-emerald)' }}
              >
                <span>Sınavı Bitir</span>
              </button>
            ) : (
              <button type="button" className="btn-primary" onClick={onClose}>
                <span>Oturumu Bitir</span>
              </button>
            )}
          </footer>
        )}

        {/* Confirmation Modal: Finish Exam */}
        {showSubmitConfirm && (
          <div
            className="diagram-zoom-overlay"
            style={{ zIndex: 10000 }}
            onClick={() => setShowSubmitConfirm(false)}
          >
            <div
              className="diagram-zoom-card"
              style={{ maxWidth: 420, padding: '1.5rem', textAlign: 'center' }}
              onClick={(e) => e.stopPropagation()}
            >
              <AlertTriangle size={36} color="var(--accent-amber)" style={{ margin: '0 auto 0.75rem' }} />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                Sınavı Bitirmek İstiyor musun?
              </h3>
              <p style={{ margin: '0 0 1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                {answeredCount < questions.length
                  ? `${questions.length - answeredCount} adet boş sorun var. Yanıtların puanlanıp Net skorun hesaplanacak.`
                  : 'Tüm soruları yanıtladın. Net skorun hesaplanıp kaydedilecek.'}
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowSubmitConfirm(false)}
                >
                  Devam Et
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => handleSubmitExam(false)}
                  style={{ background: 'var(--accent-emerald)', borderColor: 'var(--accent-emerald)' }}
                >
                  Evet, Bitir
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Confirmation Modal: Exit Early */}
        {showExitConfirm && (
          <div
            className="diagram-zoom-overlay"
            style={{ zIndex: 10000 }}
            onClick={() => setShowExitConfirm(false)}
          >
            <div
              className="diagram-zoom-card"
              style={{ maxWidth: 420, padding: '1.5rem', textAlign: 'center' }}
              onClick={(e) => e.stopPropagation()}
            >
              <AlertTriangle size={36} color="var(--accent-ruby)" style={{ margin: '0 auto 0.75rem' }} />
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                Sınavdan Çıkmak İstiyor musun?
              </h3>
              <p style={{ margin: '0 0 1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Şimdi çıkarsan sınav kaydedilmeyecektir.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowExitConfirm(false)}
                >
                  Sınava Dön
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={onClose}
                  style={{ background: 'var(--accent-ruby)', borderColor: 'var(--accent-ruby)' }}
                >
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
