import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  Layers,
  RotateCw,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  BookOpen,
  Filter,
} from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { ALL_CHEMISTRY_UNITS } from '../../data/units';
import { compileAllFlashcards, type CompiledFlashcard } from '../../engine/flashcardGenerator';
import { LeitnerBoxEngine } from '../../engine/leitnerEngine';
import { formatChemText } from '../common/ChemFormula';
import { Confetti } from '../common/Confetti';
import {
  playDrop,
  playCorrect,
  playWrong,
  playSuccess,
  playApplause,
} from '../../audio/sfx';

export interface FlashcardsViewProps {
  lang: LanguageCode;
  initialUnitId?: string | null;
  masteredCardIds: string[];
  onRateCard: (cardId: string, mastered: boolean, xpReward: number) => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  lang,
  initialUnitId = null,
  masteredCardIds,
  onRateCard,
}) => {
  const t = UI_TRANSLATIONS[lang];

  // Persistent Leitner Spaced Repetition Engine
  const engine = useMemo(() => new LeitnerBoxEngine(), []);

  // Compile all canonical flashcards
  const allCards = useMemo(() => compileAllFlashcards(ALL_CHEMISTRY_UNITS, lang), [lang]);

  // Filters state
  const [selectedUnit, setSelectedUnit] = useState<string>(initialUnitId || 'all');
  const [selectedBox, setSelectedBox] = useState<number | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<CompiledFlashcard[]>(allCards);
  const [celebrationKey, setCelebrationKey] = useState(0);

  // Swipe drag state
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const isScrolling = useRef(false);

  // Sync initialUnitId if changed from parent
  useEffect(() => {
    if (initialUnitId) {
      setSelectedUnit(initialUnitId);
    }
  }, [initialUnitId]);

  // Compute distribution of all cards across 5 boxes
  const [distribution, setDistribution] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

  const refreshDistribution = useCallback(() => {
    const dist = engine.getDistribution(allCards.map((c) => c.id));
    setDistribution(dist);
  }, [engine, allCards]);

  useEffect(() => {
    refreshDistribution();
  }, [refreshDistribution, masteredCardIds]);

  // Filtered queue of cards
  const activeDeck = useMemo(() => {
    return shuffledCards.filter((card) => {
      // Unit filter
      if (selectedUnit === 'tyt') {
        const order = card.unitOrder;
        if (order < 1 || order > 10) return false;
      } else if (selectedUnit === 'ayt') {
        const order = card.unitOrder;
        if (order < 11 || order > 24) return false;
      } else if (selectedUnit !== 'all') {
        if (card.unitId !== selectedUnit) return false;
      }

      // Box filter
      if (selectedBox !== 'all') {
        const cardBox = engine.getBox(card.id);
        if (cardBox !== selectedBox) return false;
      }

      return true;
    });
  }, [shuffledCards, selectedUnit, selectedBox, engine, distribution]);

  // Safe current card
  const currentCard = activeDeck[currentIndex] || null;

  // Handle deck shuffle
  const handleShuffle = () => {
    playDrop();
    const copy = [...shuffledCards];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    setShuffledCards(copy);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Flip card
  const handleFlip = () => {
    playDrop();
    setIsFlipped((f) => !f);
  };

  // Rate card (mastered / promote vs wrong / demote)
  const handleRate = (mastered: boolean) => {
    if (!currentCard) return;

    const result = engine.rateCard(currentCard.id, mastered);
    onRateCard(currentCard.id, result.newBox === 5, result.xpAwarded);

    if (mastered) {
      if (result.newBox === 5) {
        playSuccess();
        playApplause();
        setCelebrationKey((k) => k + 1);
      } else {
        playCorrect();
      }
    } else {
      playWrong();
    }

    refreshDistribution();
    setIsFlipped(false);
    setDragOffset({ x: 0, y: 0 });

    // Advance queue
    if (currentIndex >= activeDeck.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  // Touch handlers for 3D swipe physics
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now(),
    };
    isScrolling.current = false;
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const dx = e.touches[0].clientX - touchStartRef.current.x;
    const dy = e.touches[0].clientY - touchStartRef.current.y;

    if (Math.abs(dx) > Math.abs(dy)) {
      if (e.cancelable) e.preventDefault();
      setDragOffset({ x: dx, y: dy });
    } else {
      isScrolling.current = true;
    }
  };

  const onTouchEnd = () => {
    if (!touchStartRef.current) return;
    const dx = dragOffset.x;
    const dt = Date.now() - touchStartRef.current.time;
    const velocity = Math.abs(dx) / (dt || 1);

    if (Math.abs(dx) > 80 || (Math.abs(dx) > 35 && velocity > 0.45)) {
      if (dx > 0) {
        handleRate(true); // Right swipe -> Mastered / Promote
      } else {
        handleRate(false); // Left swipe -> Needs Review / Demote
      }
    } else if (!isScrolling.current && Math.abs(dx) < 10 && dt < 250) {
      handleFlip();
    } else {
      setDragOffset({ x: 0, y: 0 });
    }

    setIsDragging(false);
    touchStartRef.current = null;
    isScrolling.current = false;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input/select
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === '1' || e.key === 'ArrowLeft') {
        e.preventDefault();
        handleRate(false);
      } else if (e.key === '2' || e.key === 'ArrowRight') {
        e.preventDefault();
        handleRate(true);
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        handleShuffle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCard, isFlipped, activeDeck.length]);

  const currentBox = currentCard ? engine.getBox(currentCard.id) : 1;

  // Swipe visual indicators
  const swipeOpacityRight = Math.min(1, Math.max(0, (dragOffset.x - 20) / 70));
  const swipeOpacityLeft = Math.min(1, Math.max(0, (-dragOffset.x - 20) / 70));

  return (
    <section className="cards-container" aria-label={t.cards.title}>
      <Confetti burstKey={celebrationKey} />

      {/* Header and Telemetry */}
      <div className="section-header">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="text-primary" size={28} aria-hidden="true" />
            <h1 className="text-2xl font-bold tracking-tight">{t.cards.title}</h1>
          </div>
          <p className="subtitle-text text-sm opacity-80">{t.cards.subtitle}</p>
        </div>
        <div className="telemetry-pill">
          <span>{t.cards.masteredCount}: {masteredCardIds.length}</span>
        </div>
      </div>

      {/* Leitner 5-Box Distribution Bar */}
      <div className="leitner-box-tracker">
        <div className="flex items-center justify-between text-xs font-semibold mb-1 opacity-90">
          <span>5 Kutu Leitner Dağılımı ({allCards.length} Kart)</span>
          <span>{t.cards.masteredCount}: {distribution[5] || 0}</span>
        </div>

        <div className="leitner-progress-bar">
          <div className="leitner-box-segment box-seg-1" style={{ flex: Math.max(1, distribution[1] || 0) }} title={`Kutu 1: ${distribution[1]} kart`} />
          <div className="leitner-box-segment box-seg-2" style={{ flex: Math.max(1, distribution[2] || 0) }} title={`Kutu 2: ${distribution[2]} kart`} />
          <div className="leitner-box-segment box-seg-3" style={{ flex: Math.max(1, distribution[3] || 0) }} title={`Kutu 3: ${distribution[3]} kart`} />
          <div className="leitner-box-segment box-seg-4" style={{ flex: Math.max(1, distribution[4] || 0) }} title={`Kutu 4: ${distribution[4]} kart`} />
          <div className="leitner-box-segment box-seg-5" style={{ flex: Math.max(1, distribution[5] || 0) }} title={`Kutu 5: ${distribution[5]} kart`} />
        </div>

        <div className="leitner-pills-row">
          {[1, 2, 3, 4, 5].map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => {
                setSelectedBox((prev) => (prev === b ? 'all' : b));
                setCurrentIndex(0);
              }}
              className={`box-pill-btn ${selectedBox === b ? 'active' : ''}`}
            >
              <span className={`box-dot seg-${b}`} />
              <span>Kutu {b}: {distribution[b] || 0}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Filter and Deck Controls */}
      <div className="cards-controls-bar">
        <div className="flex items-center gap-2 flex-wrap flex-1">
          <Filter size={18} className="opacity-70" />
          <select
            value={selectedUnit}
            onChange={(e) => {
              setSelectedUnit(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="filter-select"
            aria-label="Ünite Filtresi"
          >
            <option value="all">{t.cards.allUnits}</option>
            <option value="tyt">TYT Kimya (u01 - u10)</option>
            <option value="ayt">AYT Kimya (u11 - u22)</option>
            {ALL_CHEMISTRY_UNITS.slice(0, 22).map((u) => (
              <option key={u.id} value={u.id}>
                {u.id.toUpperCase()}: {u.title[lang]}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleShuffle}
            className="btn-secondary text-xs flex items-center gap-1.5 py-1.5 px-3"
            title={t.cards.shuffleDeck}
          >
            <Shuffle size={14} />
            <span>{t.cards.shuffleDeck}</span>
          </button>
          <div className="text-xs font-mono opacity-80 px-2 py-1 bg-surface-elevated rounded">
            {activeDeck.length > 0 ? `${currentIndex + 1} / ${activeDeck.length}` : '0 / 0'}
          </div>
        </div>
      </div>

      {/* 3D Flip Card or Empty State */}
      {activeDeck.length === 0 ? (
        <div className="placeholder-card flex flex-col items-center justify-center p-8 text-center rounded-xl border border-dashed border-subtle">
          <Layers size={48} color="var(--brand-primary)" aria-hidden="true" className="mb-3 opacity-60" />
          <h2 className="text-lg font-semibold mb-1">{t.cards.title}</h2>
          <p className="text-sm opacity-70 mb-4">{t.cards.tapToFlip}</p>
          <div className="telemetry-pill mb-4">
            <span>{t.cards.masteredCount}: {masteredCardIds.length}</span>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedUnit('all');
              setSelectedBox('all');
            }}
            className="btn-primary text-sm px-4 py-2"
          >
            {t.cards.allUnits}
          </button>
        </div>
      ) : currentCard ? (
        <div className="flashcard-viewport">
          <div
            className="flashcard-3d-scene"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Rubber Stamp Swipe Overlays */}
            <div className="swipe-stamp stamp-demote" style={{ opacity: swipeOpacityLeft }}>
              TEKRAR ET (KUTU 1)
            </div>
            <div className="swipe-stamp stamp-promote" style={{ opacity: swipeOpacityRight }}>
              BİLİYORUM (+1 KUTU)
            </div>

            {/* 3D Rotatable Card Container */}
            <div
              className={`flashcard-3d-card ${isFlipped ? 'flipped' : ''}`}
              onClick={handleFlip}
              style={{
                transform: `${isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'} translate3d(${dragOffset.x}px, ${dragOffset.y * 0.3}px, 0) rotate(${dragOffset.x * 0.05}deg)`,
                transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {/* Card Face Front */}
              <div className="flashcard-face flashcard-face-front">
                <div className="card-top-row flex justify-between items-center">
                  <span className="card-badge-category">
                    {currentCard.category === 'trap' ? (
                      <span className="flex items-center gap-1 text-amber-500 font-semibold">
                        <AlertTriangle size={14} /> {t.cards.osymTrapLabel}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-cyan-500 font-semibold">
                        <BookOpen size={14} /> {t.cards.frontBadge}
                      </span>
                    )}
                  </span>
                  <span className="card-box-badge">Kutu {currentBox}</span>
                </div>

                <div className="card-body-content my-auto py-4 text-center">
                  <div className="text-lg md:text-xl font-medium leading-relaxed">
                    {formatChemText(currentCard.frontPrompt)}
                  </div>
                </div>

                <div className="card-bottom-row flex justify-between items-center text-xs opacity-60">
                  <span className="flex items-center gap-1">
                    <RotateCw size={12} /> {t.cards.tapToFlip}
                  </span>
                  <span className="font-mono">{currentCard.id}</span>
                </div>
              </div>

              {/* Card Face Back */}
              <div className="flashcard-face flashcard-face-back">
                <div className="card-top-row flex justify-between items-center">
                  <span className="card-badge-category text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={14} /> {t.cards.backBadge}
                  </span>
                  <span className="card-box-badge bg-emerald-500/20 text-emerald-400">
                    {currentBox === 5 ? '★ Usta (Mastered)' : `Kutu ${currentBox} → ${Math.min(5, currentBox + 1)}`}
                  </span>
                </div>

                <div className="card-body-content my-auto py-3">
                  <div className="text-base md:text-lg font-medium leading-relaxed mb-3">
                    {formatChemText(currentCard.backAnswer)}
                  </div>
                  {currentCard.osymTip && (
                    <div className="osym-tip-box bg-surface-elevated/80 border border-subtle rounded-lg p-3 text-xs md:text-sm">
                      <strong className="text-amber-400 flex items-center gap-1 mb-1">
                        <Sparkles size={13} /> {t.cards.osymTrapLabel}:
                      </strong>
                      <span>{currentCard.osymTip}</span>
                    </div>
                  )}
                </div>

                <div className="card-bottom-row flex justify-between items-center text-xs opacity-60">
                  <span className="flex items-center gap-1">
                    <RotateCw size={12} /> {t.cards.tapToFlip}
                  </span>
                  <span>{currentCard.unitId.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Decision Buttons */}
          <div className="flashcard-actions-bar mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRate(false);
              }}
              className="action-btn-hard flex-1 max-w-[200px] py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 border border-ruby/30 bg-ruby/10 hover:bg-ruby/20 text-ruby transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft size={18} />
              <span>{t.cards.rateHard} (Kutu 1)</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleFlip();
              }}
              className="action-btn-flip p-3 rounded-full border border-subtle bg-surface-elevated hover:bg-surface text-foreground transition-all shadow-sm active:scale-90"
              title={t.cards.tapToFlip}
            >
              <RotateCw size={18} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRate(true);
              }}
              className="action-btn-easy flex-1 max-w-[200px] py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 border border-emerald/30 bg-emerald/10 hover:bg-emerald/20 text-emerald transition-all shadow-sm active:scale-95"
            >
              <span>{t.cards.rateEasy} (+15 XP)</span>
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="keyboard-shortcuts-hint text-center text-xs opacity-50 mt-2 hidden sm:block">
            <span>Klavye: [Boşluk] Kartı Çevir • [1] / [←] Zor • [2] / [→] Öğrendim • [S] Karıştır</span>
          </div>
        </div>
      ) : null}
    </section>
  );
};
