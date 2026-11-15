import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  Layers,
  RotateCw,
  Shuffle,
  Check,
  X,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { ALL_CHEMISTRY_UNITS } from '../../data/units';
import { compileAllFlashcards, type CompiledFlashcard } from '../../engine/flashcardGenerator';
import { LeitnerBoxEngine } from '../../engine/leitnerEngine';
import { formatChemText } from '../common/ChemFormula';
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

  // Swipe drag state
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const isScrolling = useRef(false);
  const touchHandledFlipRef = useRef(false);
  const pointerStartRef = useRef<{ x: number; y: number; time: number; pointerId: number } | null>(null);
  const pointerSwipedRef = useRef(false);

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
      touchHandledFlipRef.current = true;
      handleFlip();
    } else {
      setDragOffset({ x: 0, y: 0 });
    }

    setIsDragging(false);
    touchStartRef.current = null;
    isScrolling.current = false;
  };

  // Pointer handlers for desktop mouse / pen drag
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return;
    try {
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
    pointerStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: Date.now(),
      pointerId: e.pointerId,
    };
    pointerSwipedRef.current = false;
    setIsDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch' || !pointerStartRef.current) return;
    const dx = e.clientX - pointerStartRef.current.x;
    const dy = e.clientY - pointerStartRef.current.y;
    if (Math.abs(dx) > 5) {
      pointerSwipedRef.current = true;
    }
    setDragOffset({ x: dx, y: dy });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (e.pointerType === 'touch' || !pointerStartRef.current) return;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
    const dx = dragOffset.x;
    const dt = Date.now() - pointerStartRef.current.time;
    const velocity = Math.abs(dx) / (dt || 1);

    if (Math.abs(dx) > 80 || (Math.abs(dx) > 35 && velocity > 0.45)) {
      if (dx > 0) {
        handleRate(true);
      } else {
        handleRate(false);
      }
    } else {
      setDragOffset({ x: 0, y: 0 });
    }

    setIsDragging(false);
    pointerStartRef.current = null;
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

  const deckProgress = activeDeck.length > 0 ? ((currentIndex + 1) / activeDeck.length) * 100 : 0;

  return (
    <section className="fc" aria-label={t.cards.title}>
      {/* Header */}
      <header className="fc-head">
        <div className="fc-head__txt">
          <p className="ky-eyebrow">Leitner sistemi · {allCards.length} kart</p>
          <h1 className="fc-title">{t.cards.title}</h1>
        </div>
        <span className="ky-chip ky-chip--ok ky-chip--lg fc-head__chip">
          {t.cards.masteredCount}: {masteredCardIds.length}
        </span>
      </header>
      <p className="fc-sub">{t.cards.subtitle}</p>

      {/* Leitner 5-box tiles (tap to filter) */}
      <section className="fc-boxes" aria-label="Leitner kutuları">
        {[1, 2, 3, 4, 5].map((b) => {
          const on = selectedBox === b;
          const count = distribution[b] || 0;
          return (
            <button
              key={b}
              type="button"
              aria-pressed={on}
              title={`Kutu ${b}: ${count} kart`}
              onClick={() => {
                setSelectedBox((prev) => (prev === b ? 'all' : b));
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`ky-well fc-box fc-box--${b}${on ? ' on' : ''}${count === 0 ? ' is-empty' : ''}`}
            >
              <span className="ky-mono fc-box__n">{count}</span>
              <span className="fc-box__l">Kutu {b}</span>
            </button>
          );
        })}
      </section>

      {/* Unit filter + shuffle */}
      <div className="fc-controls">
        <label className="fc-unit">
          <span className="ky-eyebrow">Ünite</span>
          <select
            value={selectedUnit}
            onChange={(e) => {
              setSelectedUnit(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="ky-select"
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
        </label>
        <button
          type="button"
          onClick={handleShuffle}
          className="ky-btn ky-btn--quiet fc-shuffle"
          title={t.cards.shuffleDeck}
          data-sfx="none"
        >
          <Shuffle size={16} aria-hidden="true" />
          <span>{t.cards.shuffleDeck}</span>
        </button>
      </div>

      {/* Progress */}
      <div className="fc-progress">
        <div
          className="ky-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={activeDeck.length}
          aria-valuenow={activeDeck.length > 0 ? currentIndex + 1 : 0}
          aria-label={t.cards.title}
        >
          <div className="ky-fill" style={{ inlineSize: `${deckProgress}%` }} />
        </div>
        <span className="ky-mono fc-progress__n">
          {activeDeck.length > 0 ? `${currentIndex + 1} / ${activeDeck.length}` : '0 / 0'}
        </span>
      </div>

      {/* 3D Flip Card or Empty State */}
      {activeDeck.length === 0 ? (
        <div className="ky-empty fc-empty">
          <div className="ky-tile ky-tile--lg" aria-hidden="true">
            <Layers size={28} />
          </div>
          <h2 className="fc-empty__title">{t.cards.title}</h2>
          <p className="fc-empty__txt">{t.cards.tapToFlip}</p>
          <span className="ky-chip ky-chip--ok">
            {t.cards.masteredCount}: {masteredCardIds.length}
          </span>
          <button
            type="button"
            onClick={() => {
              setSelectedUnit('all');
              setSelectedBox('all');
            }}
            className="ky-btn ky-btn--primary"
          >
            {t.cards.allUnits}
          </button>
        </div>
      ) : currentCard ? (
        <div className="fc-viewport">
          <div
            className="fc-scene"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
          >
            {/* Rubber Stamp Swipe Overlays */}
            <div className="swipe-stamp stamp-demote" style={{ opacity: swipeOpacityLeft }} aria-hidden="true">
              TEKRAR ET (KUTU 1)
            </div>
            <div className="swipe-stamp stamp-promote" style={{ opacity: swipeOpacityRight }} aria-hidden="true">
              BİLİYORUM (+1 KUTU)
            </div>

            {/* 3D Rotatable Card Container */}
            <div
              className={`flashcard-3d-card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => {
                if (touchHandledFlipRef.current) {
                  touchHandledFlipRef.current = false;
                  return;
                }
                if (pointerSwipedRef.current) {
                  pointerSwipedRef.current = false;
                  return;
                }
                handleFlip();
              }}
              style={{
                transform: `translate3d(${dragOffset.x}px, ${dragOffset.y * 0.3}px, 0) rotate(${dragOffset.x * 0.05}deg) ${isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}`,
                transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {/* Card Face Front */}
              <div className="ky-card flashcard-face flashcard-face-front">
                <div className="fc-face__top">
                  {currentCard.category === 'trap' ? (
                    <span className="ky-chip ky-chip--gold">
                      <AlertTriangle size={14} aria-hidden="true" /> {t.cards.osymTrapLabel}
                    </span>
                  ) : (
                    <span className="ky-chip ky-chip--accent">
                      <BookOpen size={14} aria-hidden="true" /> {t.cards.frontBadge}
                    </span>
                  )}
                  <span className="ky-chip fc-face__box">Kutu {currentBox}</span>
                </div>

                <div className="fc-face__body">
                  <div className="ky-disp fc-prompt">{formatChemText(currentCard.frontPrompt)}</div>
                </div>

                <div className="fc-face__bottom">
                  <span className="fc-face__hint">
                    <RotateCw size={14} aria-hidden="true" /> {t.cards.tapToFlip}
                  </span>
                  <span className="ky-mono fc-face__id">{currentCard.id}</span>
                </div>
              </div>

              {/* Card Face Back */}
              <div className="ky-card flashcard-face flashcard-face-back">
                <div className="fc-face__top">
                  <span className="ky-chip ky-chip--ok">
                    <CheckCircle2 size={14} aria-hidden="true" /> {t.cards.backBadge}
                  </span>
                  <span className="ky-chip fc-face__box">
                    {currentBox === 5 ? 'Usta (Mastered)' : `Kutu ${currentBox} → ${Math.min(5, currentBox + 1)}`}
                  </span>
                </div>

                <div className="fc-face__body fc-face__body--back">
                  <div className="fc-answer">{formatChemText(currentCard.backAnswer)}</div>
                  {currentCard.osymTip && (
                    <div className="fc-tip">
                      <strong className="fc-tip__head">
                        <Sparkles size={14} aria-hidden="true" /> {t.cards.osymTrapLabel}:
                      </strong>
                      <span>{currentCard.osymTip}</span>
                    </div>
                  )}
                </div>

                <div className="fc-face__bottom">
                  <span className="fc-face__hint">
                    <RotateCw size={14} aria-hidden="true" /> {t.cards.tapToFlip}
                  </span>
                  <span className="ky-mono fc-face__id">{currentCard.unitId.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rating keycaps */}
          <div className="fc-actions">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRate(false);
              }}
              className="ky-btn ky-btn--danger fc-act"
            >
              <X size={18} aria-hidden="true" />
              <span>{t.cards.rateHard} (Kutu 1)</span>
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleFlip();
              }}
              className="ky-btn ky-btn--primary ky-btn--icon fc-flip"
              title={t.cards.tapToFlip}
              aria-label={t.cards.tapToFlip}
              data-sfx="none"
            >
              <RotateCw size={20} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRate(true);
              }}
              className="ky-btn ky-btn--ok fc-act"
            >
              <Check size={18} aria-hidden="true" />
              <span>{t.cards.rateEasy} (+15 XP)</span>
            </button>
          </div>

          <p className="fc-kbd">Klavye: [Boşluk] Kartı Çevir • [1] / [←] Zor • [2] / [→] Öğrendim • [S] Karıştır</p>
        </div>
      ) : null}
    </section>
  );
};
