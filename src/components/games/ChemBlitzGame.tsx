import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Trophy, Check, X, RotateCcw, Zap, BookOpen, Award, ArrowLeft } from 'lucide-react';
import { GameHud, GameStat } from './GameHud';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { GAMES_STRINGS, fmt } from '../../i18n/gamesStrings';
import { ALL_CHEMISTRY_UNITS } from '../../data/units';
import { playCorrect, playWrong, playFinish, playApplause } from '../../audio/sfx';
import { formatChemText } from '../common/ChemFormula';

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

const ROUND_SECONDS = 60;
const RING_C = 2 * Math.PI * 44;

// Compile 50+ high-yield True/False statements from all 24 units
export function generateBlitzQuestions(lang: LanguageCode): BlitzItem[] {
  const g = GAMES_STRINGS[lang] ?? GAMES_STRINGS.en;
  const items: BlitzItem[] = [];

  ALL_CHEMISTRY_UNITS.forEach((unit) => {
    unit.facts?.forEach((f, idx) => {
      // True statement
      items.push({
        id: `${unit.id}-t-${idx}`,
        statement: f.fact[lang] || f.fact['tr'],
        isTrue: true,
        trapExplanation: f.osymTip?.[lang] || g.zTrueFallback,
        unitId: unit.id,
      });

      // False trap statement
      items.push({
        id: `${unit.id}-f-${idx}`,
        statement: f.trap[lang] || f.trap['tr'],
        isTrue: false,
        trapExplanation: f.whyTrapIsFalse?.[lang] || g.zFalseFallback,
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
  const unitTitles = useMemo(() => {
    const map: Record<string, string> = {};
    ALL_CHEMISTRY_UNITS.forEach((u) => {
      map[u.id] = u.title[lang] || u.title.tr;
    });
    return map;
  }, [lang]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
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
    setTimeLeft(ROUND_SECONDS);
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

  // Keyboard controls follow the on-screen order: False on the left, True on the right
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        handleAnswer(false);
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        handleAnswer(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, handleAnswer]);

  const isNewBest = score > 0 && score > bestAtStart.current;
  const best = Math.max(highScore, score);
  const lowTime = isPlaying && timeLeft <= 10;

  const hud = (
    <GameHud title={t.games.blitzTitle} backLabel={t.games.backToHub} onBack={onBack}>
      {isPlaying && combo >= 1 ? (
        <GameStat
          key={combo}
          icon={<Zap size={14} fill="currentColor" aria-hidden="true" />}
          label={g.streakN}
          value={fmt(g.streakN, { n: combo })}
          tone="gold"
          mono={false}
        />
      ) : (
        <GameStat icon={<Trophy size={14} aria-hidden="true" />} label={g.best} value={best > 0 ? best : '—'} tone="gold" />
      )}
    </GameHud>
  );

  if (!isPlaying && !isGameOver) {
    return (
      <div className="gm-play chem-blitz-container">
        {hud}
        <main className="ky-fit gm-main gm-main--center">
          <section className="ky-stage gm-intro ky-persp">
            <div className="ky-floor" aria-hidden="true" />
            <span className="ky-tile ky-tile--lg ky-tile--ok gm-bob" aria-hidden="true">
              <Zap size={32} fill="currentColor" />
            </span>
            <h2 className="ky-disp">{t.games.blitzTitle}</h2>
            <p>{t.games.blitzDesc}</p>
            <ul className="gm-rules">
              <li>{g.zRule1}</li>
              <li>{g.zRule2}</li>
              <li>{g.zRule3}</li>
              <li>{g.zRule4}</li>
            </ul>
          </section>
        </main>
        <footer className="ky-screen-foot gm-foot">
          <button type="button" onClick={handleStart} className="ky-btn ky-btn--gold ky-btn--lg ky-grow gm-cta" data-sfx="start">
            <Zap size={20} fill="currentColor" aria-hidden="true" />
            <span>{g.zStart}</span>
          </button>
        </footer>
      </div>
    );
  }

  if (isGameOver) {
    return (
      <div className="gm-play chem-blitz-container">
        {hud}
        <main className="ky-fit gm-main gm-main--center">
          <section className="ky-card gm-result">
            <span className="ky-tile ky-tile--lg ky-tile--gold" aria-hidden="true">
              <Award size={30} />
            </span>
            <h2 className="ky-disp">{g.finished}</h2>
            <div className="gm-score ky-pop">{score}</div>
            <span className="ky-chip ky-chip--gold">
              <Trophy size={14} aria-hidden="true" /> {isNewBest ? g.newBest : `${g.best}: ${best}`}
            </span>
            <p className="gm-result-meta">{fmt(g.zSummary, { a: maxCombo, b: answersLog.length })}</p>
          </section>

          {answersLog.length > 0 && (
            <section className="ky-card gm-review">
              <h3 className="ky-fs-14">
                <BookOpen size={16} aria-hidden="true" />
                <span>{g.zReview}</span>
              </h3>
              {answersLog.map((log, idx) => (
                <div key={idx} className={`gm-review-item ${log.isCorrect ? 'ok' : 'bad'}`}>
                  <div className="head">
                    <span>{formatChemText(log.statement)}</span>
                    <span className={`ky-chip ${log.isCorrect ? 'ky-chip--ok' : 'ky-chip--bad'}`}>
                      {log.isCorrect ? <Check size={12} aria-hidden="true" /> : <X size={12} aria-hidden="true" />}
                      {log.choice ? g.correct : g.wrong}
                    </span>
                  </div>
                  <em>{formatChemText(log.explanation)}</em>
                </div>
              ))}
            </section>
          )}
        </main>
        <footer className="ky-screen-foot gm-foot">
          <button type="button" onClick={onBack} className="ky-btn ky-btn--quiet">
            <ArrowLeft size={18} aria-hidden="true" className="gm-flip" />
            <span className="gm-narrow-sr">{g.backToGames}</span>
          </button>
          <button type="button" onClick={handleStart} className="ky-btn ky-btn--primary ky-grow" data-sfx="start">
            <RotateCcw size={18} aria-hidden="true" />
            <span>{g.replay}</span>
          </button>
        </footer>
      </div>
    );
  }

  const statement = currentQ?.statement ?? '';
  const sizeClass = statement.length > 140 ? 'ky-fs-18' : statement.length > 80 ? 'ky-fs-20' : 'ky-fs-24';

  return (
    <div className="gm-play chem-blitz-container">
      {hud}

      <main className="ky-fit ky-pane gm-main">
        <section className="ky-stage gm-blitz-stage">
          <svg
            className={`gm-ring${lowTime ? ' is-low' : ''}`}
            viewBox="0 0 104 104"
            role="img"
            aria-label={fmt(g.zTimeLeft, { n: timeLeft })}
          >
            <circle cx="52" cy="52" r="44" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="10" />
            <circle
              className="gm-ring-arc"
              cx="52"
              cy="52"
              r="44"
              fill="none"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={RING_C}
              strokeDashoffset={RING_C * (1 - timeLeft / ROUND_SECONDS)}
              transform="rotate(-90 52 52)"
            />
            <text x="52" y="62" textAnchor="middle" className="gm-ring-num">
              {timeLeft}
            </text>
          </svg>
          <div className="gm-blitz-score">
            <p className="ky-eyebrow">{g.zScore}</p>
            <p key={score} className="ky-disp ky-mono gm-blitz-num ky-pop">{score}</p>
            <p className="ky-fs-13 gm-blitz-target">{fmt(g.zTarget, { b: best > 0 ? best : '—' })}</p>
          </div>
        </section>

        <section
          key={flash?.n ?? 0}
          className={`ky-card ky-lead gm-statement${flash ? (flash.ok ? ' is-ok ky-pop' : ' is-bad ky-shake') : ''}`}
          aria-live="polite"
        >
          {currentQ && <span className="ky-chip ky-chip--accent gm-statement-unit">{unitTitles[currentQ.unitId] ?? ''}</span>}
          <p className={`ky-disp gm-statement-text ${sizeClass}`}>&ldquo;{formatChemText(statement)}&rdquo;</p>
          <p className="ky-fs-14 gm-statement-ask">{g.zAsk}</p>
        </section>
      </main>

      <footer className="ky-screen-foot gm-foot gm-tf" dir="ltr">
        <button type="button" onClick={() => handleAnswer(false)} className="ky-btn ky-btn--danger gm-tf-key">
          <X size={24} strokeWidth={3} aria-hidden="true" />
          <span>{g.wrong}</span>
        </button>
        <button type="button" onClick={() => handleAnswer(true)} className="ky-btn ky-btn--ok gm-tf-key">
          <Check size={24} strokeWidth={3} aria-hidden="true" />
          <span>{g.correct}</span>
        </button>
      </footer>
    </div>
  );
};
