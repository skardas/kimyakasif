import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Trophy,
  Timer,
  Check,
  X,
  RotateCcw,
  Zap,
  Flame,
  BookOpen,
  Award,
} from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
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
      playApplause();
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

  return (
    <div className="chem-blitz-container p-4 max-w-3xl mx-auto flex flex-col gap-5">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="btn-secondary flex items-center gap-1.5 py-1.5 px-3 text-xs"
        >
          <ArrowLeft size={16} />
          <span>Geri</span>
        </button>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm font-semibold">
            <Trophy size={16} className="text-amber-400" />
            <span>Rekor: {Math.max(highScore, score)}</span>
          </div>

          <div className="flex items-center gap-1 text-sm font-bold text-primary">
            <Sparkles size={16} />
            <span>Puan: {score}</span>
          </div>

          <div
            className={`flex items-center gap-1 text-sm font-mono px-3 py-1 rounded-full ${
              timeLeft <= 10 && isPlaying
                ? 'bg-ruby/20 text-ruby animate-pulse font-black'
                : 'bg-surface-elevated'
            }`}
          >
            <Timer size={16} />
            <span>{timeLeft}s</span>
          </div>
        </div>
      </div>

      {!isPlaying && !isGameOver ? (
        /* Intro Card */
        <div className="intro-card p-8 bg-surface border border-subtle rounded-2xl text-center flex flex-col items-center gap-4 shadow-lg">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <Zap size={36} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-1">{t.games.blitzTitle}</h2>
            <p className="subtitle-text text-sm max-w-md mx-auto">{t.games.blitzDesc}</p>
          </div>

          <div className="p-4 bg-surface-elevated rounded-xl border border-subtle text-xs text-left max-w-md w-full flex flex-col gap-2">
            <div className="font-bold text-primary">Kurallar:</div>
            <div>• 60 saniyede mümkün olduğunca çok kimya öncülünü yanıtlayın.</div>
            <div>• Doğru cevaplar seriyi artırır (+5 puan / seri kat sayısı).</div>
            <div>• Yanlış cevap seriyi sıfırlar!</div>
            <div>• Klavye: [Sol Ok / A] Doğru • [Sağ Ok / D] Yanlış</div>
          </div>

          <button
            type="button"
            onClick={handleStart}
            className="btn-primary py-3 px-8 font-bold text-base flex items-center gap-2 shadow-lg"
          >
            <Zap size={20} />
            <span>Koşuyu Başlat (60s)</span>
          </button>
        </div>
      ) : isPlaying ? (
        /* Active Game Arena */
        <div className="blitz-arena flex flex-col gap-5">
          {/* Combo & Progress Banner */}
          <div className="flex items-center justify-between px-2">
            <span className="text-xs font-mono opacity-70">Soru #{currentIndex + 1}</span>
            {combo >= 2 && (
              <span className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 animate-bounce">
                <Flame size={14} />
                <span>{combo}x Seri! (+{20 + combo * 5} Puan)</span>
              </span>
            )}
          </div>

          {/* Statement Card */}
          <div className="statement-card min-h-[220px] p-8 bg-surface border-2 border-primary/30 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl">
            <div className="text-lg md:text-2xl font-bold leading-relaxed max-w-xl">
              &ldquo;{currentQ?.statement ?? ''}&rdquo;
            </div>
          </div>

          {/* Big Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleAnswer(true)}
              className="py-5 px-6 rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-3 border-2 border-emerald-500/50 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 transition-all active:scale-95 shadow-lg"
            >
              <Check size={28} />
              <span>DOĞRU (True)</span>
            </button>

            <button
              type="button"
              onClick={() => handleAnswer(false)}
              className="py-5 px-6 rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-3 border-2 border-ruby/50 bg-ruby/15 hover:bg-ruby/25 text-ruby transition-all active:scale-95 shadow-lg"
            >
              <X size={28} />
              <span>YANLIŞ (False)</span>
            </button>
          </div>
        </div>
      ) : (
        /* Game Over & Post-Game Review */
        <div className="review-card p-6 bg-surface border border-subtle rounded-2xl flex flex-col gap-5 shadow-xl">
          <div className="text-center flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-primary/20 text-primary flex items-center justify-center">
              <Award size={32} />
            </div>
            <h2 className="text-2xl font-bold">Koşu Tamamlandı!</h2>
            <div className="text-3xl font-black text-primary font-mono">{score} Puan</div>
            <div className="text-xs opacity-75">
              En Yüksek Seri: {maxCombo} • Toplam Cevap: {answersLog.length}
            </div>
          </div>

          <button
            type="button"
            onClick={handleStart}
            className="btn-primary py-3 px-6 font-bold flex items-center justify-center gap-2 w-full"
          >
            <RotateCcw size={18} />
            <span>Yeniden Oyna</span>
          </button>

          {/* Review List */}
          <div className="review-list flex flex-col gap-2.5 max-h-[350px] overflow-y-auto pr-1">
            <h3 className="text-sm font-bold flex items-center gap-2 text-primary">
              <BookOpen size={16} />
              <span>YKS Tuzakları & Cevap İncelemesi:</span>
            </h3>
            {answersLog.map((log, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-xs flex flex-col gap-1 ${
                  log.isCorrect ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-ruby/30 bg-ruby/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{log.statement}</span>
                  <span className={`font-bold ${log.isCorrect ? 'text-emerald-400' : 'text-ruby'}`}>
                    {log.isCorrect ? '✓ Doğru' : '✗ Yanlış'}
                  </span>
                </div>
                <div className="text-[11px] opacity-75 italic text-amber-400/90">
                  {log.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
