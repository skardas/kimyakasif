import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Lightbulb, Plus, Minus, RotateCcw, Trophy, Award } from 'lucide-react';
import { GameHud, GameStat, toSub } from './GameHud';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { GAMES_STRINGS, GAMES_CONTENT, fmt } from '../../i18n/gamesStrings';
import type { GamesStrings, EqHintKey } from '../../i18n/gamesStrings';
import { playCorrect, playWrong, playSuccess, playFinish } from '../../audio/sfx';

export interface EquationBalancerProps {
  lang: LanguageCode;
  highScore?: number;
  onFinish: (score: number) => void;
  onBack: () => void;
}

/** Names and MİNHO hints are localised in GAMES_CONTENT (eqNames / eqHints), keyed by id. */
export interface ReactionEquation {
  id: string;
  category: 'yanma' | 'asit-baz' | 'cokelme' | 'redoks' | 'endustriyel';
  reactants: { formula: string; defaultCoef: number }[];
  products: { formula: string; defaultCoef: number }[];
  correctReactants: number[];
  correctProducts: number[];
  /** Turkish display name, derived from GAMES_CONTENT.tr (kept for scripts/logging). */
  nameTr: string;
}

const RAW_EQUATIONS: Omit<ReactionEquation, 'nameTr'>[] = [
  {
    id: 'eq-01',
    category: 'yanma',
    reactants: [{ formula: 'C3H8', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    products: [{ formula: 'CO2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [1, 5],
    correctProducts: [3, 4],
  },
  {
    id: 'eq-02',
    category: 'yanma',
    reactants: [{ formula: 'CH4', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    products: [{ formula: 'CO2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [1, 2],
    correctProducts: [1, 2],
  },
  {
    id: 'eq-03',
    category: 'yanma',
    reactants: [{ formula: 'C2H5OH', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    products: [{ formula: 'CO2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [1, 3],
    correctProducts: [2, 3],
  },
  {
    id: 'eq-04',
    category: 'yanma',
    reactants: [{ formula: 'C4H10', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    products: [{ formula: 'CO2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [2, 13],
    correctProducts: [8, 10],
  },
  {
    id: 'eq-05',
    category: 'yanma',
    reactants: [{ formula: 'C6H12O6', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    products: [{ formula: 'CO2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [1, 6],
    correctProducts: [6, 6],
  },
  {
    id: 'eq-06',
    category: 'asit-baz',
    reactants: [{ formula: 'H2SO4', defaultCoef: 1 }, { formula: 'KOH', defaultCoef: 1 }],
    products: [{ formula: 'K2SO4', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [1, 2],
    correctProducts: [1, 2],
  },
  {
    id: 'eq-07',
    category: 'asit-baz',
    reactants: [{ formula: 'H3PO4', defaultCoef: 1 }, { formula: 'Ca(OH)2', defaultCoef: 1 }],
    products: [{ formula: 'Ca3(PO4)2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [2, 3],
    correctProducts: [1, 6],
  },
  {
    id: 'eq-08',
    category: 'asit-baz',
    reactants: [{ formula: 'HNO3', defaultCoef: 1 }, { formula: 'Ba(OH)2', defaultCoef: 1 }],
    products: [{ formula: 'Ba(NO3)2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [2, 1],
    correctProducts: [1, 2],
  },
  {
    id: 'eq-09',
    category: 'cokelme',
    reactants: [{ formula: 'AgNO3', defaultCoef: 1 }, { formula: 'NaCl', defaultCoef: 1 }],
    products: [{ formula: 'AgCl', defaultCoef: 1 }, { formula: 'NaNO3', defaultCoef: 1 }],
    correctReactants: [1, 1],
    correctProducts: [1, 1],
  },
  {
    id: 'eq-10',
    category: 'cokelme',
    reactants: [{ formula: 'Pb(NO3)2', defaultCoef: 1 }, { formula: 'KI', defaultCoef: 1 }],
    products: [{ formula: 'PbI2', defaultCoef: 1 }, { formula: 'KNO3', defaultCoef: 1 }],
    correctReactants: [1, 2],
    correctProducts: [1, 2],
  },
  {
    id: 'eq-11',
    category: 'cokelme',
    reactants: [{ formula: 'CaCO3', defaultCoef: 1 }, { formula: 'HCl', defaultCoef: 1 }],
    products: [{ formula: 'CaCl2', defaultCoef: 1 }, { formula: 'CO2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [1, 2],
    correctProducts: [1, 1, 1],
  },
  {
    id: 'eq-12',
    category: 'cokelme',
    reactants: [{ formula: 'Al', defaultCoef: 1 }, { formula: 'HCl', defaultCoef: 1 }],
    products: [{ formula: 'AlCl3', defaultCoef: 1 }, { formula: 'H2', defaultCoef: 1 }],
    correctReactants: [2, 6],
    correctProducts: [2, 3],
  },
  {
    id: 'eq-13',
    category: 'redoks',
    reactants: [{ formula: 'KClO3', defaultCoef: 1 }],
    products: [{ formula: 'KCl', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    correctReactants: [2],
    correctProducts: [2, 3],
  },
  {
    id: 'eq-14',
    category: 'redoks',
    reactants: [{ formula: 'Al', defaultCoef: 1 }, { formula: 'Fe2O3', defaultCoef: 1 }],
    products: [{ formula: 'Al2O3', defaultCoef: 1 }, { formula: 'Fe', defaultCoef: 1 }],
    correctReactants: [2, 1],
    correctProducts: [1, 2],
  },
  {
    id: 'eq-15',
    category: 'redoks',
    reactants: [{ formula: 'P4', defaultCoef: 1 }, { formula: 'Cl2', defaultCoef: 1 }],
    products: [{ formula: 'PCl3', defaultCoef: 1 }],
    correctReactants: [1, 6],
    correctProducts: [4],
  },
  {
    id: 'eq-16',
    category: 'endustriyel',
    reactants: [{ formula: 'N2', defaultCoef: 1 }, { formula: 'H2', defaultCoef: 1 }],
    products: [{ formula: 'NH3', defaultCoef: 1 }],
    correctReactants: [1, 3],
    correctProducts: [2],
  },
  {
    id: 'eq-17',
    category: 'endustriyel',
    reactants: [{ formula: 'SO2', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    products: [{ formula: 'SO3', defaultCoef: 1 }],
    correctReactants: [2, 1],
    correctProducts: [2],
  },
  {
    id: 'eq-18',
    category: 'endustriyel',
    reactants: [{ formula: 'NH3', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    products: [{ formula: 'NO', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [4, 5],
    correctProducts: [4, 6],
  },
];

export const AUTHENTIC_EQUATIONS: ReactionEquation[] = RAW_EQUATIONS.map((eq) => ({
  ...eq,
  nameTr: GAMES_CONTENT.tr.eqNames[eq.id] ?? eq.id,
}));

// Helper: GCD of list
export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export function gcdList(nums: number[]): number {
  if (!nums || nums.length === 0) return 1;
  return nums.reduce((acc, n) => gcd(acc, n), nums[0]);
}

// Stack-based Chemical Formula Parser
export function parseFormula(formula: string): Record<string, number> {
  const stack: Record<string, number>[] = [{}];
  const regex = /([A-Z][a-z]?)|(\d+)|([(\[])|([)\]])/g;
  let match: RegExpExecArray | null;
  let lastElement: string | null = null;

  while ((match = regex.exec(formula)) !== null) {
    const [, element, countStr, openParen, closeParen] = match;

    if (element) {
      stack[stack.length - 1][element] = (stack[stack.length - 1][element] || 0) + 1;
      lastElement = element;
    } else if (countStr) {
      const count = parseInt(countStr, 10);
      if (lastElement) {
        stack[stack.length - 1][lastElement] += count - 1;
        lastElement = null;
      }
    } else if (openParen) {
      stack.push({});
      lastElement = null;
    } else if (closeParen) {
      if (stack.length > 1) {
        const popped = stack.pop() || {};
        lastElement = null;
        const nextMatch = /^\d+/.exec(formula.slice(regex.lastIndex));
        let mult = 1;
        if (nextMatch) {
          mult = parseInt(nextMatch[0], 10);
          regex.lastIndex += nextMatch[0].length;
        }
        for (const [el, cnt] of Object.entries(popped)) {
          stack[stack.length - 1][el] = (stack[stack.length - 1][el] || 0) + cnt * mult;
        }
      } else {
        lastElement = null;
      }
    }
  }

  return stack[0] || {};
}


const CATEGORY_LABEL: Record<ReactionEquation['category'], keyof GamesStrings> = {
  yanma: 'catYanma',
  'asit-baz': 'catAsitBaz',
  cokelme: 'catCokelme',
  redoks: 'catRedoks',
  endustriyel: 'catEndustriyel',
};

const HINT_ORDER: { key: EqHintKey; label: keyof GamesStrings }[] = [
  { key: 'metal', label: 'bHintM' },
  { key: 'ametal', label: 'bHintA' },
  { key: 'hidrojen', label: 'bHintH' },
  { key: 'oksijen', label: 'bHintO' },
];

// Highest coefficient a stepper reaches: butane combustion needs 13 O₂ (2 C₄H₁₀ + 13 O₂).
const MAX_COEF = 15;

export const EquationBalancer: React.FC<EquationBalancerProps> = ({
  lang,
  highScore = 0,
  onFinish,
  onBack,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const g = GAMES_STRINGS[lang] ?? GAMES_STRINGS.en;
  const content = GAMES_CONTENT[lang] ?? GAMES_CONTENT.en;
  const [finished, setFinished] = useState(false);
  const [feedbackN, setFeedbackN] = useState(0);
  const [equationIndex, setEquationIndex] = useState(0);
  const currentEq = AUTHENTIC_EQUATIONS[equationIndex] || AUTHENTIC_EQUATIONS[0];

  const [reactantsCoefs, setReactantsCoefs] = useState<number[]>(
    currentEq.reactants.map((r) => r.defaultCoef)
  );
  const [productsCoefs, setProductsCoefs] = useState<number[]>(
    currentEq.products.map((p) => p.defaultCoef)
  );

  const [score, setScore] = useState(0);
  const [solvedCount, setSolvedCount] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
  const advanceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (advanceTimeoutRef.current) {
        clearTimeout(advanceTimeoutRef.current);
      }
    };
  }, []);

  // Reset coefficients on equation switch
  const loadEquation = useCallback((idx: number) => {
    setEquationIndex(idx);
    const eq = AUTHENTIC_EQUATIONS[idx];
    setReactantsCoefs(eq.reactants.map((r) => r.defaultCoef));
    setProductsCoefs(eq.products.map((p) => p.defaultCoef));
    setShowHint(false);
    setFeedback(null);
  }, []);

  // Compute Atom Ledger
  const atomLedger = useMemo(() => {
    const reactantsTotal: Record<string, number> = {};
    const productsTotal: Record<string, number> = {};
    const allElements = new Set<string>();

    currentEq.reactants.forEach((r, idx) => {
      const parsed = parseFormula(r.formula);
      const coef = reactantsCoefs[idx] || 0;
      Object.entries(parsed).forEach(([el, cnt]) => {
        allElements.add(el);
        reactantsTotal[el] = (reactantsTotal[el] || 0) + cnt * coef;
      });
    });

    currentEq.products.forEach((p, idx) => {
      const parsed = parseFormula(p.formula);
      const coef = productsCoefs[idx] || 0;
      Object.entries(parsed).forEach(([el, cnt]) => {
        allElements.add(el);
        productsTotal[el] = (productsTotal[el] || 0) + cnt * coef;
      });
    });

    const ledger: Record<string, { in: number; out: number; balanced: boolean }> = {};
    let allBalanced = true;

    allElements.forEach((el) => {
      const rCnt = reactantsTotal[el] || 0;
      const pCnt = productsTotal[el] || 0;
      const isBal = rCnt === pCnt && rCnt > 0;
      if (!isBal) allBalanced = false;
      ledger[el] = { in: rCnt, out: pCnt, balanced: isBal };
    });

    const allCoefs = [...reactantsCoefs, ...productsCoefs];
    const isPositive = allCoefs.every((c) => c > 0);
    const commonDivisor = isPositive ? gcdList(allCoefs) : 1;
    const isMinimal = isPositive && commonDivisor === 1;

    return {
      ledger,
      allBalanced: allBalanced && isPositive,
      isPositive,
      isMinimal,
      commonDivisor,
    };
  }, [currentEq, reactantsCoefs, productsCoefs]);

  // Adjust coefficient
  const adjustReactant = (idx: number, delta: number) => {
    setReactantsCoefs((prev) => {
      const copy = [...prev];
      copy[idx] = Math.max(1, Math.min(MAX_COEF, copy[idx] + delta));
      return copy;
    });
  };

  const adjustProduct = (idx: number, delta: number) => {
    setProductsCoefs((prev) => {
      const copy = [...prev];
      copy[idx] = Math.max(1, Math.min(MAX_COEF, copy[idx] + delta));
      return copy;
    });
  };

  const handleReplay = () => {
    if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
    setScore(0);
    setSolvedCount(0);
    setFinished(false);
    loadEquation(0);
  };

  // Submit / Verify Action
  const handleCheck = () => {
    if (!atomLedger.isPositive) {
      playWrong();
      setFeedbackN((n) => n + 1);
      setFeedback({ message: g.bErrPos, isCorrect: false });
      return;
    }

    if (!atomLedger.allBalanced) {
      playWrong();
      setFeedbackN((n) => n + 1);
      setFeedback({ message: g.bErrUnbal, isCorrect: false });
      return;
    }

    if (!atomLedger.isMinimal) {
      playWrong();
      setFeedbackN((n) => n + 1);
      setFeedback({ message: fmt(g.bErrMin, { d: atomLedger.commonDivisor }), isCorrect: false });
      return;
    }

    // Success! (last equation gets the bigger fanfare)
    if (equationIndex < AUTHENTIC_EQUATIONS.length - 1) playCorrect();
    else playSuccess();
    const earned = 150;
    setScore((s) => s + earned);
    setSolvedCount((c) => c + 1);
    setFeedback({ message: fmt(g.bOk, { n: earned }), isCorrect: true });

    // Advance to next after slight pause
    if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
    advanceTimeoutRef.current = setTimeout(() => {
      if (equationIndex < AUTHENTIC_EQUATIONS.length - 1) {
        loadEquation(equationIndex + 1);
      } else {
        setFinished(true);
        playFinish();
        onFinish(score + earned);
      }
    }, 1800);
  };

  const total = AUTHENTIC_EQUATIONS.length;
  const solvedNow = feedback?.isCorrect === true;
  const best = Math.max(highScore, score);

  const hud = (
    <GameHud title={t.games.balancerTitle} backLabel={t.games.backToHub} onBack={onBack}>
      <GameStat label="" value={fmt(g.level, { n: Math.min(equationIndex + 1, total) })} tone="accent" mono={false} />
      <GameStat label={g.score} value={fmt(g.pts, { n: score })} />
    </GameHud>
  );

  if (finished) {
    return (
      <div className="gm-play equation-balancer-container">
        {hud}
        <main className="ky-fit gm-main gm-main--center">
          <section className="ky-card gm-result">
            <span className="ky-tile ky-tile--lg ky-tile--gold" aria-hidden="true">
              <Award size={30} />
            </span>
            <h2 className="ky-disp">{g.finished}</h2>
            <div className="gm-score ky-pop">{score}</div>
            <span className="ky-chip ky-chip--gold">
              <Trophy size={14} aria-hidden="true" /> {g.best}: {best}
            </span>
            <p className="gm-result-meta">
              {g.solved}: {solvedCount} / {total}
            </p>
          </section>
        </main>
        <footer className="ky-screen-foot gm-foot">
          <button type="button" onClick={onBack} className="ky-btn ky-btn--quiet">
            <ArrowLeft size={18} aria-hidden="true" className="gm-flip" />
            <span className="gm-narrow-sr">{g.backToGames}</span>
          </button>
          <button type="button" onClick={handleReplay} className="ky-btn ky-btn--primary ky-grow" data-sfx="start">
            <RotateCcw size={18} aria-hidden="true" />
            <span>{g.replay}</span>
          </button>
        </footer>
      </div>
    );
  }

  const species = [
    ...currentEq.reactants.map((r, idx) => ({ side: 'r' as const, idx, formula: r.formula, coef: reactantsCoefs[idx] })),
    ...currentEq.products.map((p, idx) => ({ side: 'p' as const, idx, formula: p.formula, coef: productsCoefs[idx] })),
  ];
  const cols = species.length <= 4 ? species.length : 3;
  const hints = content.eqHints[currentEq.id] ?? {};
  const statusMsg = feedback
    ? feedback.message
    : atomLedger.allBalanced && atomLedger.isMinimal
      ? g.bReady
      : g.bIdle;
  const statusTone = feedback ? (feedback.isCorrect ? 'ok' : 'bad') : atomLedger.allBalanced && atomLedger.isMinimal ? 'ok' : '';

  const side = (list: typeof species) =>
    list.map((s, i) => (
      <React.Fragment key={`${s.side}-${s.idx}`}>
        {i > 0 && <span className="gm-eq-op"> + </span>}
        <span className="gm-eq-term">
          <span key={s.coef} className="gm-eq-coef">{s.coef}</span>
          {toSub(s.formula)}
        </span>
      </React.Fragment>
    ));

  return (
    <div className="gm-play equation-balancer-container">
      {hud}

      <main className="ky-fit ky-pane gm-main">
        <section className="ky-stage ky-lead gm-eq-stage reaction-board">
          <p className="ky-eyebrow">
            {g[CATEGORY_LABEL[currentEq.category]]} · {equationIndex + 1} / {total}
          </p>
          <h2 className="gm-eq-name ky-fs-16">{content.eqNames[currentEq.id] ?? currentEq.id}</h2>
          <p className="gm-eq-line ky-mono" dir="ltr">
            {side(species.filter((s) => s.side === 'r'))}
            <span className="gm-eq-op gm-eq-arrow"> → </span>
            {side(species.filter((s) => s.side === 'p'))}
          </p>
          <div className="ky-track gm-eq-progress" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={solvedCount} aria-label={g.solved}>
            <div className="ky-fill ky-fill--gold" style={{ inlineSize: `${(solvedCount / total) * 100}%` }} />
          </div>
        </section>

        <section className={`gm-coefs${cols >= 4 ? ' gm-coefs--dense' : ''}`} aria-label={g.bCoefs} style={{ ['--cols' as string]: cols }}>
          {species.map((s) => {
            const label = toSub(s.formula);
            const adjust = s.side === 'r' ? adjustReactant : adjustProduct;
            return (
              <div key={`${s.side}-${s.idx}`} className={`ky-card gm-coef-card${s.side === 'p' ? ' is-product' : ''}`}>
                <p className="ky-mono gm-coef-formula" dir="ltr">{label}</p>
                <button type="button" className="ky-icon-btn gm-coef-btn" onClick={() => adjust(s.idx, 1)} aria-label={fmt(g.bInc, { f: label })}>
                  <Plus size={18} strokeWidth={2.8} aria-hidden="true" />
                </button>
                <p className="ky-disp ky-mono gm-coef-val" aria-live="polite">{s.coef}</p>
                <button type="button" className="ky-icon-btn gm-coef-btn" onClick={() => adjust(s.idx, -1)} aria-label={fmt(g.bDec, { f: label })}>
                  <Minus size={18} strokeWidth={2.8} aria-hidden="true" />
                </button>
              </div>
            );
          })}
        </section>

        <section className="ky-card gm-tally" aria-label={g.bTally}>
          <div className="gm-tally-row gm-tally-head ky-fs-12">
            <span>{g.bAtom}</span>
            <span>{g.bLeft}</span>
            <span>{g.bRight}</span>
            <span>{g.bState}</span>
          </div>
          {Object.entries(atomLedger.ledger).map(([element, counts]) => (
            <div key={element} className="gm-tally-row">
              <span className="ky-fs-16 gm-tally-atom">{element}</span>
              <span className="ky-mono ky-fs-18">{counts.in}</span>
              <span className="ky-mono ky-fs-18">{counts.out}</span>
              <span>
                <span className={`ky-chip ${counts.balanced ? 'ky-chip--ok' : 'ky-chip--bad'}`}>
                  {counts.balanced ? g.bEq : g.bNeq}
                </span>
              </span>
            </div>
          ))}
        </section>

        <div className="gm-hint-wrap">
          <button
            type="button"
            onClick={() => setShowHint((h) => !h)}
            className={`ky-chip ky-chip--lg${showHint ? ' on' : ''}`}
            aria-pressed={showHint}
            aria-expanded={showHint}
          >
            <Lightbulb size={16} aria-hidden="true" />
            <span>{g.hint}</span>
          </button>
          {showHint && (
            <div className="gm-note gm-note--gold ky-pop">
              <Lightbulb size={18} aria-hidden="true" />
              <div className="gm-note-list">
                <strong>{g.bHintTitle}</strong>
                {HINT_ORDER.filter((h) => hints[h.key]).map((h) => (
                  <div key={h.key}>
                    <strong>{g[h.label]}:</strong> {hints[h.key]}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="ky-screen-foot ky-screen-foot--stack gm-foot">
        <p
          key={feedback ? feedbackN + (feedback.isCorrect ? 'ok' : 'bad') : 'idle'}
          role="status"
          className={`gm-status ky-fs-14 ${statusTone}${feedback && !feedback.isCorrect ? ' ky-shake' : ''}`}
        >
          {statusMsg}
        </p>
        <div className="gm-foot-row">
          <button type="button" onClick={() => loadEquation(equationIndex)} className="ky-btn ky-btn--quiet" aria-label={g.reset} title={g.reset}>
            <RotateCcw size={18} aria-hidden="true" />
          </button>
          <button type="button" onClick={handleCheck} disabled={solvedNow} className="ky-btn ky-btn--primary ky-grow gm-cta">
            <CheckCircle2 size={18} aria-hidden="true" />
            <span>{g.check}</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
