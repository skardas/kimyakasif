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
import { redesignStrings } from '../../i18n/redesignStrings';
import {
  playDrop,
  playCorrect,
  playWrong,
  playSuccess,
  playApplause,
} from '../../audio/sfx';

export interface FlashcardsViewProps {
  lang: LanguageCode;
  /** Card boxes are stored per profile (the app always passes the active profile). */
  profileId?: string;
  initialUnitId?: string | null;
  masteredCardIds: string[];
  onRateCard: (cardId: string, mastered: boolean, xpReward: number) => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  lang,
  profileId,
  initialUnitId = null,
  masteredCardIds,
  onRateCard,
}) => {
  const t = UI_TRANSLATIONS[lang];

  // Persistent Leitner Spaced Repetition Engine
  const engine = useMemo(() => new LeitnerBoxEngine(null, { profileId }), [profileId]);

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
    // No pointer capture yet: capturing on pointerdown retargets the click to this stage, so a
    // plain mouse/trackpad tap never reached the card button and the card did not turn.
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
    if (Math.abs(dx) > 5 && !pointerSwipedRef.current) {
      pointerSwipedRef.current = true;
      try {
        (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
      } catch {
        // ignore
      }
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

  const r = redesignStrings(lang);

  return (
    <section className="ky-screen fc" aria-label={t.cards.title}>
      <header className="ky-screen-head">
        <h1 className="ky-disp ky-fs-28">{t.nav.cards}</h1>
        <span className="ky-chip ky-mono fc-count" aria-live="polite">
          {activeDeck.length > 0 ? `${currentIndex + 1} / ${activeDeck.length}` : '0 / 0'}
        </span>
        <button
          type="button"
          onClick={handleShuffle}
          className="ky-icon-btn"
          title={t.cards.shuffleDeck}
          aria-label={t.cards.shuffleDeck}
          data-sfx="none"
        >
          <Shuffle size={18} aria-hidden="true" />
        </button>
      </header>

      <div className="ky-fit">
        <div className="ky-pane fc-pane">
          {/* One big card that turns over in real 3D */}
          {activeDeck.length === 0 ? (
            <div className="ky-lead ky-card ky-empty fc-empty">
              <div className="ky-tile ky-tile--lg" aria-hidden="true">
                <Layers size={28} />
              </div>
              <h2 className="fc-empty__title">{t.cards.title}</h2>
              <p className="fc-empty__txt">{t.cards.tapToFlip}</p>
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
            <div
              className="ky-lead ky-persp fc-stage"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
            >
              <div className="fc-stamp fc-stamp--again" style={{ opacity: swipeOpacityLeft }} aria-hidden="true">
                {r.again}
              </div>
              <div className="fc-stamp fc-stamp--know" style={{ opacity: swipeOpacityRight }} aria-hidden="true">
                {r.know}
              </div>
              <div
                className="fc-drag"
                style={{
                  transform: `translate3d(${dragOffset.x}px, ${dragOffset.y * 0.3}px, 0) rotate(${dragOffset.x * 0.05}deg)`,
                  transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <button
                  type="button"
                  className={`ky-flip fc-card ${isFlipped ? 'turned' : ''}`}
                  aria-label={`${t.cards.tapToFlip}: ${isFlipped ? r.answer : r.question}`}
                  aria-pressed={isFlipped}
                  data-sfx="none"
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
                >
                  <span className="ky-face ky-card fc-face" aria-hidden={isFlipped}>
                    <span className="fc-face__top">
                      {currentCard.category === 'trap' ? (
                        <span className="ky-chip ky-chip--gold">
                          <AlertTriangle size={14} aria-hidden="true" /> {t.cards.osymTrapLabel}
                        </span>
                      ) : (
                        <span className="ky-chip ky-chip--accent">{r.question}</span>
                      )}
                      <span className="ky-chip ky-mono">{r.boxShort(currentBox)}</span>
                    </span>
                    <span className="fc-face__body">
                      <span className="ky-disp ky-fs-28 fc-prompt">{formatChemText(currentCard.frontPrompt)}</span>
                    </span>
                    <span className="ky-fs-14 fc-face__hint">
                      <RotateCw size={14} aria-hidden="true" /> {t.cards.tapToFlip}
                    </span>
                  </span>

                  <span className="ky-face ky-face--back ky-card fc-face fc-face--back" aria-hidden={!isFlipped}>
                    <span className="fc-face__top">
                      <span className="ky-chip ky-chip--gold">{r.answer}</span>
                      <span className="ky-chip ky-mono">{currentCard.unitId.toUpperCase()}</span>
                    </span>
                    <span className="fc-face__body">
                      <span className="ky-fs-20 fc-answer">{formatChemText(currentCard.backAnswer, { display: 'auto' })}</span>
                      {currentCard.osymTip && (
                        <span className="ky-fs-14 fc-tip">
                          <strong>
                            <Sparkles size={14} aria-hidden="true" /> {t.cards.osymTrapLabel}:
                          </strong>{' '}
                          {formatChemText(currentCard.osymTip)}
                        </span>
                      )}
                    </span>
                    <span className="ky-fs-14 ky-mono fc-face__hint">
                      {currentBox === 5 ? '★ 5' : `${r.boxShort(currentBox)} → ${r.boxShort(Math.min(5, currentBox + 1))}`}
                    </span>
                  </span>
                </button>
              </div>
            </div>
          ) : null}

          <label className="fc-unit">
            <span className="ky-eyebrow">{r.unit}</span>
            <select
              value={selectedUnit}
              onChange={(e) => {
                setSelectedUnit(e.target.value);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className="ky-select ky-fs-16"
              aria-label={r.unit}
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

          {/* Slim Leitner row (tap a box to study only that box) */}
          <section className="fc-leitner" aria-label={r.leitnerBoxes}>
            <div className="fc-leitner__head">
              <span className="ky-eyebrow">{r.leitnerBoxes}</span>
              <span className="ky-fs-13 fc-leitner__learned">
                {t.cards.masteredCount}: {masteredCardIds.length}
              </span>
            </div>
            <div className="fc-boxes">
              {[1, 2, 3, 4, 5].map((b) => {
                const on = selectedBox === b;
                const count = distribution[b] || 0;
                return (
                  <button
                    key={b}
                    type="button"
                    aria-pressed={on}
                    aria-label={r.boxAria(b, count)}
                    onClick={() => {
                      setSelectedBox((prev) => (prev === b ? 'all' : b));
                      setCurrentIndex(0);
                      setIsFlipped(false);
                    }}
                    className={`fc-box${count > 0 ? ' has-cards' : ''}${on ? ' on' : ''}`}
                  >
                    <span className="ky-mono ky-fs-16 fc-box__n">{count}</span>
                    <span className="ky-fs-12 fc-box__l">{r.boxShort(b)}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Two rating keys */}
          <div className="fc-rate">
            <button
              type="button"
              disabled={!currentCard}
              onClick={(e) => {
                e.stopPropagation();
                handleRate(false);
              }}
              className="ky-btn fc-rate__again"
            >
              <X size={18} aria-hidden="true" />
              <span>{r.again}</span>
            </button>
            <button
              type="button"
              disabled={!currentCard}
              onClick={(e) => {
                e.stopPropagation();
                handleRate(true);
              }}
              className="ky-btn ky-btn--ok fc-rate__know"
            >
              <Check size={18} aria-hidden="true" />
              <span>{r.know}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
