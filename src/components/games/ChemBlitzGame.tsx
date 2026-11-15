import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Sparkles, Trophy, Timer, Check, X, RotateCcw, Zap, Flame, BookOpen, Award, ArrowLeft } from 'lucide-react';
import { GameHud, GameStat } from './GameHud';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { GAMES_STRINGS } from '../../i18n/gamesStrings';
import { ALL_CHEMISTRY_UNITS } from '../../data/units';
import { playCorrect, playWrong, playFinish, playSuccess, playApplause } from '../../audio/sfx';

export interface ChemBlitzGameProps {
  lang: LanguageCode;
  highScore?: number;
  onFinish: (score: number) => void;
  onBack: () => void;
}

export interface BlitzItem {
  id: string;
  statement: string;
  isTrue: boolean;
  trapExplanation: string;
  unitId: string;
}

// Compile 50+ high-yield True/False statements from all 24 units
export function generateBlitzQuestions(lang: LanguageCode): BlitzItem[] {
  const items: BlitzItem[] = [];

  ALL_CHEMISTRY_UNITS.forEach((unit) => {
    unit.facts?.forEach((f, idx) => {
      // True statement
      items.push({
        id: `${unit.id}-t-${idx}`,
        statement: f.fact[lang] || f.fact['tr'],
        isTrue: true,
        trapExplanation: f.osymTip?.[lang] || 'ÖSYM sınavlarında doğru kabul edilen temel MEB bilgisidir.',
        unitId: unit.id,
      });

      // False trap statement
      items.push({
        id: `${unit.id}-f-${idx}`,
        statement: f.trap[lang] || f.trap['tr'],
        isTrue: false,
        trapExplanation: f.whyTrapIsFalse?.[lang] || 'Tuzak: Bu ifade MEB ve ÖSYM müfredatına göre yanlıştır.',
        unitId: unit.id,
      });
    });
  });

  // Shuffle items
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

export const ChemBlitzGame: React.FC<ChemBlitzGameProps> = ({
  lang,
  highScore = 0,
  onFinish,
  onBack,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const g = GAMES_STRINGS[lang] ?? GAMES_STRINGS.en;
  const bestAtStart = useRef(highScore);
  const [flash, setFlash] = useState<{ ok: boolean; n: number } | null>(null);

  const questionsPool = useMemo(() => generateBlitzQuestions(lang), [lang]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const [answersLog, setAnswersLog] = useState<
    { statement: string; choice: boolean; isCorrect: boolean; explanation: string }[]
  >([]);

  const scoreRef = useRef(score);
  scoreRef.current = score;

  const currentQ = questionsPool.length > 0 ? questionsPool[currentIndex % questionsPool.length] : null;

  // Start Blitz Sprint
  const handleStart = () => {
    bestAtStart.current = highScore;
    setFlash(null);
    setIsPlaying(true);
    setIsGameOver(false);
    setTimeLeft(60);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setCurrentIndex(0);
    setAnswersLog([]);
  };

  // Timer loop
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  // Handle game over when timer expires
  useEffect(() => {
    if (isPlaying && timeLeft === 0) {
      setIsPlaying(false);
      setIsGameOver(true);
      playFinish();
      if (scoreRef.current > bestAtStart.current) playApplause();
      onFinish(scoreRef.current);
    }
  }, [isPlaying, timeLeft, onFinish]);

  // Answer handler
  const handleAnswer = useCallback(
    (choice: boolean) => {
      if (!isPlaying || timeLeft <= 0 || !currentQ) return;

      const isCorrect = choice === currentQ.isTrue;
      let pointsAwarded = 0;

      if (isCorrect) {
        playCorrect();
        const nextCombo = combo + 1;
        setCombo(nextCombo);
        if (nextCombo > maxCombo) setMaxCombo(nextCombo);
        // Formula: 20 + combo * 5
        pointsAwarded = 20 + nextCombo * 5;
        setScore((s) => s + pointsAwarded);
      } else {
        playWrong();
        setCombo(0);
      }

      setFlash((f) => ({ ok: isCorrect, n: (f?.n ?? 0) + 1 }));

      setAnswersLog((prev) => [
        ...prev,
        {
          statement: currentQ.statement,
          choice,
          isCorrect,
          explanation: currentQ.trapExplanation,
        },
      ]);

      setCurrentIndex((i) => i + 1);
    },
    [isPlaying, timeLeft, currentQ, combo, maxCombo]
  );

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        handleAnswer(true); // Left: True / Doğru
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        handleAnswer(false); // Right: False / Yanlış
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, handleAnswer]);

  const isNewBest = score > 0 && score > bestAtStart.current;

  return (
    <div className="gm gm--narrow chem-blitz-container">
      <GameHud title={t.games.blitzTitle} backLabel={t.games.backToHub} onBack={onBack}>
        <GameStat icon={<Trophy size={16} aria-hidden="true" />} label={g.best} value={Math.max(highScore, score)} tone="gold" />
        <GameStat icon={<Sparkles size={16} aria-hidden="true" />} label={g.score} value={score} tone="accent" />
        <GameStat
          icon={<Timer size={16} aria-hidden="true" />}
          label="Timer"
          value={`${timeLeft}s`}
          tone={timeLeft <= 10 && isPlaying ? 'bad' : undefined}
        />
      </GameHud>

      {!isPlaying && !isGameOver ? (
        <div className="ky-stage gm-intro">
          <div className="ky-floor" aria-hidden="true" />
          <span className="ky-tile ky-tile--lg ky-tile--ok" aria-hidden="true">
            <Zap size={32} fill="currentColor" />
          </span>
          <h2>{t.games.blitzTitle}</h2>
          <p>{t.games.blitzDesc}</p>
          <ul className="gm-rules">
            <li>60 saniyede mümkün olduğunca çok kimya öncülünü yanıtlayın.</li>
            <li>Doğru cevaplar seriyi artırır (+5 puan / seri kat sayısı).</li>
            <li>Yanlış cevap seriyi sıfırlar!</li>
            <li>Klavye: [Sol Ok / A] Doğru &bull; [Sağ Ok / D] Yanlış</li>
          </ul>
          <button type="button" onClick={handleStart} className="ky-btn ky-btn--gold ky-btn--lg" data-sfx="start">
            <Zap size={20} fill="currentColor" aria-hidden="true" />
            <span>Koşuyu Başlat (60s)</span>
          </button>
        </div>
      ) : isPlaying ? (
        <>
          <div className="ky-track gm-progress" role="progressbar" aria-valuemin={0} aria-valuemax={60} aria-valuenow={timeLeft}>
            <div className={`ky-fill ${timeLeft <= 10 ? 'ky-fill--bad' : 'ky-fill--gold'}`} style={{ inlineSize: `${(timeLeft / 60) * 100}%` }} />
          </div>

          <div className="gm-meta-row">
            <span className="ky-mono">#{currentIndex + 1}</span>
            {combo >= 2 && (
              <span className="gm-streak" key={combo}>
                <Flame size={14} aria-hidden="true" />
                <span>{combo}x (+{20 + combo * 5})</span>
              </span>
            )}
          </div>

          <div
            key={flash?.n ?? 0}
            className={`ky-card gm-statement ky-lead${flash && !flash.ok ? ' ky-shake' : ''}`}
            style={flash ? { borderColor: flash.ok ? 'var(--ok)' : 'var(--bad)' } : undefined}
            aria-live="polite"
          >
            <p>&ldquo;{currentQ?.statement ?? ''}&rdquo;</p>
          </div>

          <div className="gm-tf">
            <button type="button" onClick={() => handleAnswer(true)} className="ky-btn ky-btn--ok">
              <Check size={26} aria-hidden="true" />
              <span>DOĞRU</span>
            </button>
            <button type="button" onClick={() => handleAnswer(false)} className="ky-btn ky-btn--danger">
              <X size={26} aria-hidden="true" />
              <span>YANLIŞ</span>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="ky-card gm-result">
            <span className="ky-tile ky-tile--lg ky-tile--gold" aria-hidden="true">
              <Award size={30} />
            </span>
            <h2>{g.finished}</h2>
            <div className="gm-score ky-pop">{score}</div>
            {isNewBest ? (
              <span className="ky-chip ky-chip--gold">
                <Trophy size={14} aria-hidden="true" /> {g.newBest}
              </span>
            ) : (
              <span className="ky-chip ky-chip--gold">
                <Trophy size={14} aria-hidden="true" /> {g.best}: {Math.max(highScore, score)}
              </span>
            )}
            <div className="gm-result-meta">
              En Yüksek Seri: {maxCombo} &bull; Toplam Cevap: {answersLog.length}
            </div>
            <div className="gm-actions">
              <button type="button" onClick={handleStart} className="ky-btn ky-btn--primary" data-sfx="start">
                <RotateCcw size={18} aria-hidden="true" />
                <span>{g.replay}</span>
              </button>
              <button type="button" onClick={onBack} className="ky-btn ky-btn--quiet">
                <ArrowLeft size={18} aria-hidden="true" className="gm-flip" />
                <span>{g.backToGames}</span>
              </button>
            </div>
          </div>

          {answersLog.length > 0 && (
            <div className="ky-card gm-board">
              <div className="gm-review">
                <h3>
                  <BookOpen size={16} aria-hidden="true" />
                  <span>YKS Tuzakları &amp; Cevap İncelemesi</span>
                </h3>
                {answersLog.map((log, idx) => (
                  <div key={idx} className={`gm-review-item ${log.isCorrect ? 'ok' : 'bad'}`}>
                    <div className="head">
                      <span>{log.statement}</span>
                      <span className={`ky-chip ${log.isCorrect ? 'ky-chip--ok' : 'ky-chip--bad'}`}>
                        {log.isCorrect ? <Check size={12} aria-hidden="true" /> : <X size={12} aria-hidden="true" />}
                        {log.isCorrect ? 'Doğru' : 'Yanlış'}
                      </span>
                    </div>
                    <em>{log.explanation}</em>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
