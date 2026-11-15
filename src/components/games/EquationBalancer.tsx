import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Plus,
  Minus,
  RotateCcw,
  Sparkles,
  Trophy,
  Scale,
} from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { ChemFormula } from '../common/ChemFormula';
import { playCorrect, playWrong, playSuccess } from '../../audio/sfx';

export interface EquationBalancerProps {
  lang: LanguageCode;
  highScore?: number;
  onFinish: (score: number) => void;
  onBack: () => void;
}

export interface ReactionEquation {
  id: string;
  nameTr: string;
  category: 'yanma' | 'asit-baz' | 'cokelme' | 'redoks' | 'endustriyel';
  reactants: { formula: string; defaultCoef: number }[];
  products: { formula: string; defaultCoef: number }[];
  correctReactants: number[];
  correctProducts: number[];
  minhoHints: {
    metal?: string;
    ametal?: string;
    hidrojen?: string;
    oksijen?: string;
  };
}

export const AUTHENTIC_EQUATIONS: ReactionEquation[] = [
  // 1. Yanma (Combustion)
  {
    id: 'eq-01',
    nameTr: 'Propan Yanması',
    category: 'yanma',
    reactants: [{ formula: 'C3H8', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    products: [{ formula: 'CO2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [1, 5],
    correctProducts: [3, 4],
    minhoHints: {
      ametal: 'C atomunu denkleştir: Girenlerde 3 C var, CO2 katsayısı 3 olmalı.',
      hidrojen: 'H atomunu denkleştir: Girenlerde 8 H var, H2O katsayısı 4 olmalı.',
      oksijen: 'Ürünlerde toplam 3*2 + 4*1 = 10 O var. O2 katsayısı 5 olmalı.',
    },
  },
  {
    id: 'eq-02',
    nameTr: 'Metan Yanması',
    category: 'yanma',
    reactants: [{ formula: 'CH4', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    products: [{ formula: 'CO2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [1, 2],
    correctProducts: [1, 2],
    minhoHints: {
      hidrojen: '4 H atomu için H2O katsayısı 2 olmalı.',
      oksijen: 'Toplam 4 O için O2 katsayısı 2 olmalı.',
    },
  },
  {
    id: 'eq-03',
    nameTr: 'Etanol Yanması',
    category: 'yanma',
    reactants: [{ formula: 'C2H5OH', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    products: [{ formula: 'CO2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [1, 3],
    correctProducts: [2, 3],
    minhoHints: {
      ametal: '2 C için CO2 katsayısı 2 olmalı.',
      hidrojen: '6 H için H2O katsayısı 3 olmalı.',
      oksijen: 'Ürünlerde 7 O var. Etanolde 1 O olduğundan, 3 O2 gerekir.',
    },
  },
  {
    id: 'eq-04',
    nameTr: 'Bütan Yanması',
    category: 'yanma',
    reactants: [{ formula: 'C4H10', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    products: [{ formula: 'CO2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [2, 13],
    correctProducts: [8, 10],
    minhoHints: {
      ametal: 'Kesirli katsayıdan kaçınmak için C4H10 katsayısını 2 alın.',
      oksijen: 'Toplam 26 O atomu için 13 O2 gerekir.',
    },
  },
  {
    id: 'eq-05',
    nameTr: 'Glikoz Yanması (Hücresel Solunum)',
    category: 'yanma',
    reactants: [{ formula: 'C6H12O6', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    products: [{ formula: 'CO2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [1, 6],
    correctProducts: [6, 6],
    minhoHints: {
      ametal: '6 C atomu için 6 CO2.',
      hidrojen: '12 H atomu için 6 H2O.',
      oksijen: 'Ürünlerde 18 O var; glikozda 6 O, geriye 6 O2 kalır.',
    },
  },

  // 2. Asit-Baz ve Nötralleşme
  {
    id: 'eq-06',
    nameTr: 'Sülfürik Asit ve Potasyum Hidroksit',
    category: 'asit-baz',
    reactants: [{ formula: 'H2SO4', defaultCoef: 1 }, { formula: 'KOH', defaultCoef: 1 }],
    products: [{ formula: 'K2SO4', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [1, 2],
    correctProducts: [1, 2],
    minhoHints: {
      metal: '2 K atomu için KOH katsayısı 2 olmalı.',
      hidrojen: '2 H+ ve 2 OH- toplam 2 H2O oluşturur.',
    },
  },
  {
    id: 'eq-07',
    nameTr: 'Fosforik Asit ve Kalsiyum Hidroksit',
    category: 'asit-baz',
    reactants: [{ formula: 'H3PO4', defaultCoef: 1 }, { formula: 'Ca(OH)2', defaultCoef: 1 }],
    products: [{ formula: 'Ca3(PO4)2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [2, 3],
    correctProducts: [1, 6],
    minhoHints: {
      metal: 'Ca3(PO4)2 için 3 Ca(OH)2 gerekir.',
      ametal: 'PO4 kökü için 2 H3PO4 gerekir.',
      hidrojen: '6 H+ ve 6 OH- birleşerek 6 H2O oluşturur.',
    },
  },
  {
    id: 'eq-08',
    nameTr: 'Nitrik Asit ve Baryum Hidroksit',
    category: 'asit-baz',
    reactants: [{ formula: 'HNO3', defaultCoef: 1 }, { formula: 'Ba(OH)2', defaultCoef: 1 }],
    products: [{ formula: 'Ba(NO3)2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [2, 1],
    correctProducts: [1, 2],
    minhoHints: {
      metal: '1 Ba atomu için 1 Ba(OH)2.',
      ametal: '2 NO3 grubu için 2 HNO3.',
      hidrojen: '2 H+ ve 2 OH- ile 2 H2O oluşur.',
    },
  },

  // 3. Çökelme ve Gaz Çıkışı
  {
    id: 'eq-09',
    nameTr: 'Gümüş Klorür Çökelmesi',
    category: 'cokelme',
    reactants: [{ formula: 'AgNO3', defaultCoef: 1 }, { formula: 'NaCl', defaultCoef: 1 }],
    products: [{ formula: 'AgCl', defaultCoef: 1 }, { formula: 'NaNO3', defaultCoef: 1 }],
    correctReactants: [1, 1],
    correctProducts: [1, 1],
    minhoHints: {
      metal: 'Ag ve Na birebir oranda denktir.',
    },
  },
  {
    id: 'eq-10',
    nameTr: 'Kurşun(II) İyodür Çökelmesi',
    category: 'cokelme',
    reactants: [{ formula: 'Pb(NO3)2', defaultCoef: 1 }, { formula: 'KI', defaultCoef: 1 }],
    products: [{ formula: 'PbI2', defaultCoef: 1 }, { formula: 'KNO3', defaultCoef: 1 }],
    correctReactants: [1, 2],
    correctProducts: [1, 2],
    minhoHints: {
      metal: '2 I atomu için 2 KI gerekir.',
      ametal: '2 NO3 için 2 KNO3 oluşur.',
    },
  },
  {
    id: 'eq-11',
    nameTr: 'Kireçtaşı ve Tuz Ruhu Tepkimesi',
    category: 'cokelme',
    reactants: [{ formula: 'CaCO3', defaultCoef: 1 }, { formula: 'HCl', defaultCoef: 1 }],
    products: [{ formula: 'CaCl2', defaultCoef: 1 }, { formula: 'CO2', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [1, 2],
    correctProducts: [1, 1, 1],
    minhoHints: {
      metal: '1 Ca için 1 CaCl2.',
      ametal: '2 Cl için 2 HCl gerekir.',
    },
  },
  {
    id: 'eq-12',
    nameTr: 'Alüminyum ve Asit Tepkimesi',
    category: 'cokelme',
    reactants: [{ formula: 'Al', defaultCoef: 1 }, { formula: 'HCl', defaultCoef: 1 }],
    products: [{ formula: 'AlCl3', defaultCoef: 1 }, { formula: 'H2', defaultCoef: 1 }],
    correctReactants: [2, 6],
    correctProducts: [2, 3],
    minhoHints: {
      metal: '2 Al atomu için 2 AlCl3.',
      ametal: '6 Cl için 6 HCl.',
      hidrojen: '6 H atomu 3 H2 molekülü verir.',
    },
  },

  // 4. Redoks ve Termal Bozunma
  {
    id: 'eq-13',
    nameTr: 'Potasyum Klorat Termal Bozunması',
    category: 'redoks',
    reactants: [{ formula: 'KClO3', defaultCoef: 1 }],
    products: [{ formula: 'KCl', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    correctReactants: [2],
    correctProducts: [2, 3],
    minhoHints: {
      oksijen: '3 O atomu ile 2 O atomunun ortak katı 6 olduğundan 2 KClO3 ve 3 O2.',
    },
  },
  {
    id: 'eq-14',
    nameTr: 'Termit Tepkimesi',
    category: 'redoks',
    reactants: [{ formula: 'Al', defaultCoef: 1 }, { formula: 'Fe2O3', defaultCoef: 1 }],
    products: [{ formula: 'Al2O3', defaultCoef: 1 }, { formula: 'Fe', defaultCoef: 1 }],
    correctReactants: [2, 1],
    correctProducts: [1, 2],
    minhoHints: {
      metal: 'Fe2O3 2 Fe verir, Al2O3 2 Al gerektirir.',
    },
  },
  {
    id: 'eq-15',
    nameTr: 'Fosfor Klorlanması (ÖSYM AYT)',
    category: 'redoks',
    reactants: [{ formula: 'P4', defaultCoef: 1 }, { formula: 'Cl2', defaultCoef: 1 }],
    products: [{ formula: 'PCl3', defaultCoef: 1 }],
    correctReactants: [1, 6],
    correctProducts: [4],
    minhoHints: {
      ametal: 'P4 molekülü 4 PCl3 verir, toplam 12 Cl için 6 Cl2 gerekir.',
    },
  },

  // 5. Endüstriyel Süreçler
  {
    id: 'eq-16',
    nameTr: 'Haber-Bosch Amonyak Sentezi',
    category: 'endustriyel',
    reactants: [{ formula: 'N2', defaultCoef: 1 }, { formula: 'H2', defaultCoef: 1 }],
    products: [{ formula: 'NH3', defaultCoef: 1 }],
    correctReactants: [1, 3],
    correctProducts: [2],
    minhoHints: {
      ametal: '2 N için 2 NH3.',
      hidrojen: '6 H için 3 H2.',
    },
  },
  {
    id: 'eq-17',
    nameTr: 'Kontak Prosesi (SO3 Üretimi)',
    category: 'endustriyel',
    reactants: [{ formula: 'SO2', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    products: [{ formula: 'SO3', defaultCoef: 1 }],
    correctReactants: [2, 1],
    correctProducts: [2],
    minhoHints: {
      ametal: '2 S atomu için 2 SO3.',
      oksijen: '2*2 + 2 = 6 O atomu dengededir.',
    },
  },
  {
    id: 'eq-18',
    nameTr: 'Ostwald Prosesi (NO Sentezi)',
    category: 'endustriyel',
    reactants: [{ formula: 'NH3', defaultCoef: 1 }, { formula: 'O2', defaultCoef: 1 }],
    products: [{ formula: 'NO', defaultCoef: 1 }, { formula: 'H2O', defaultCoef: 1 }],
    correctReactants: [4, 5],
    correctProducts: [4, 6],
    minhoHints: {
      hidrojen: '4 NH3 (12 H) için 6 H2O gerekir.',
      ametal: '4 N için 4 NO oluşur.',
      oksijen: 'Ürünlerde 4 + 6 = 10 O için 5 O2 gerekir.',
    },
  },
];

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

export const EquationBalancer: React.FC<EquationBalancerProps> = ({
  highScore = 0,
  onFinish,
  onBack,
}) => {
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
      copy[idx] = Math.max(1, Math.min(10, copy[idx] + delta));
      return copy;
    });
  };

  const adjustProduct = (idx: number, delta: number) => {
    setProductsCoefs((prev) => {
      const copy = [...prev];
      copy[idx] = Math.max(1, Math.min(10, copy[idx] + delta));
      return copy;
    });
  };

  // Submit / Verify Action
  const handleCheck = () => {
    if (!atomLedger.isPositive) {
      playWrong();
      setFeedback({
        message: 'Katsayılar pozitif tam sayı olmalıdır.',
        isCorrect: false,
      });
      return;
    }

    if (!atomLedger.allBalanced) {
      playWrong();
      setFeedback({
        message: 'Tepkime henüz denkleştirilmedi. Atom Ledger tablosundaki farkları eşitleyin.',
        isCorrect: false,
      });
      return;
    }

    if (!atomLedger.isMinimal) {
      playWrong();
      setFeedback({
        message: `Tepkime denkleştirildi ancak en küçük tamsayılarla değil (EBOB = ${atomLedger.commonDivisor}). Katsayıları sadeleştirin.`,
        isCorrect: false,
      });
      return;
    }

    // Success!
    playSuccess();
    const earned = 150;
    setScore((s) => s + earned);
    setSolvedCount((c) => c + 1);
    setFeedback({
      message: 'Tebrikler! Tepkime en küçük tamsayılarla doğru denkleştirildi. (+150 Puan)',
      isCorrect: true,
    });

    // Advance to next after slight pause
    if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
    advanceTimeoutRef.current = setTimeout(() => {
      if (equationIndex < AUTHENTIC_EQUATIONS.length - 1) {
        loadEquation(equationIndex + 1);
      } else {
        onFinish(score + earned);
      }
    }, 1800);
  };

  return (
    <div className="equation-balancer-container p-4 max-w-4xl mx-auto flex flex-col gap-5">
      {/* Top Header */}
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
            <span>En Yüksek: {Math.max(highScore, score)}</span>
          </div>

          <div className="flex items-center gap-1 text-sm font-bold text-primary">
            <Sparkles size={16} />
            <span>Puan: {score}</span>
          </div>
        </div>
      </div>

      {/* Reaction Card */}
      <div className="reaction-board p-6 bg-surface border border-subtle rounded-2xl shadow-lg flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-primary font-bold">
              {currentEq.category.toUpperCase()} • {equationIndex + 1} / {AUTHENTIC_EQUATIONS.length}
            </div>
            <h2 className="text-xl font-bold">{currentEq.nameTr}</h2>
          </div>

          <button
            type="button"
            onClick={() => setShowHint((h) => !h)}
            className="btn-secondary text-xs flex items-center gap-1.5 py-1.5 px-3 text-amber-400 border-amber-500/30"
          >
            <Lightbulb size={16} />
            <span>MİNHO İpucu</span>
          </button>
        </div>

        {/* MINHO Hint Drawer */}
        {showHint && (
          <div className="minho-hint-box p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs md:text-sm flex flex-col gap-1.5">
            <strong className="text-amber-400 flex items-center gap-1.5">
              <Lightbulb size={16} /> MİNHO Sıralama Rehberi (Metal - İyon - Hidrojen - Oksijen):
            </strong>
            {currentEq.minhoHints.metal && <div>• <strong>M (Metal):</strong> {currentEq.minhoHints.metal}</div>}
            {currentEq.minhoHints.ametal && <div>• <strong>İ/A (İyon/Ametal):</strong> {currentEq.minhoHints.ametal}</div>}
            {currentEq.minhoHints.hidrojen && <div>• <strong>H (Hidrojen):</strong> {currentEq.minhoHints.hidrojen}</div>}
            {currentEq.minhoHints.oksijen && <div>• <strong>O (Oksijen):</strong> {currentEq.minhoHints.oksijen}</div>}
          </div>
        )}

        {/* Interactive Equation Stepper Visual */}
        <div className="equation-stepper-stage flex items-center justify-center flex-wrap gap-2 md:gap-3 py-4 text-base md:text-xl font-mono" dir="ltr">
          {/* Reactants */}
          {currentEq.reactants.map((r, idx) => (
            <React.Fragment key={`r-${idx}`}>
              {idx > 0 && <span className="font-bold text-muted-foreground px-1">+</span>}
              <div className="reactant-stepper flex items-center gap-1 bg-surface-elevated p-1.5 rounded-xl border border-subtle">
                <button
                  type="button"
                  onClick={() => adjustReactant(idx, -1)}
                  className="p-1 rounded-lg hover:bg-surface text-muted-foreground hover:text-foreground"
                  aria-label="Azalt"
                >
                  <Minus size={14} />
                </button>
                <span className="w-6 text-center font-bold text-primary">{reactantsCoefs[idx]}</span>
                <button
                  type="button"
                  onClick={() => adjustReactant(idx, 1)}
                  className="p-1 rounded-lg hover:bg-surface text-muted-foreground hover:text-foreground"
                  aria-label="Artır"
                >
                  <Plus size={14} />
                </button>
                <span className="ml-1 font-sans font-bold">
                  <ChemFormula formula={r.formula} />
                </span>
              </div>
            </React.Fragment>
          ))}

          {/* Reaction Arrow */}
          <span className="text-xl md:text-2xl font-bold text-primary px-2">→</span>

          {/* Products */}
          {currentEq.products.map((p, idx) => (
            <React.Fragment key={`p-${idx}`}>
              {idx > 0 && <span className="font-bold text-muted-foreground px-1">+</span>}
              <div className="product-stepper flex items-center gap-1 bg-surface-elevated p-1.5 rounded-xl border border-subtle">
                <button
                  type="button"
                  onClick={() => adjustProduct(idx, -1)}
                  className="p-1 rounded-lg hover:bg-surface text-muted-foreground hover:text-foreground"
                  aria-label="Azalt"
                >
                  <Minus size={14} />
                </button>
                <span className="w-6 text-center font-bold text-cyan-400">{productsCoefs[idx]}</span>
                <button
                  type="button"
                  onClick={() => adjustProduct(idx, 1)}
                  className="p-1 rounded-lg hover:bg-surface text-muted-foreground hover:text-foreground"
                  aria-label="Artır"
                >
                  <Plus size={14} />
                </button>
                <span className="ml-1 font-sans font-bold">
                  <ChemFormula formula={p.formula} />
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Real-Time Atom Ledger Table */}
        <div className="atom-ledger-box p-4 bg-surface-elevated/70 rounded-xl border border-subtle">
          <div className="flex items-center gap-2 mb-3">
            <Scale size={18} className="text-primary" />
            <span className="text-sm font-bold">Canlı Atom Sayım Tablosu (Atom Ledger)</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {Object.entries(atomLedger.ledger).map(([element, counts]) => (
              <div
                key={element}
                className={`p-2.5 rounded-lg border text-xs flex items-center justify-between transition-all ${
                  counts.balanced
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300'
                    : 'border-ruby/40 bg-ruby/10 text-ruby'
                }`}
              >
                <div className="flex items-center gap-2">
                  <strong className="text-sm font-mono">{element}</strong>
                  <span>Giren: {counts.in} | Ürün: {counts.out}</span>
                </div>
                {counts.balanced ? (
                  <CheckCircle2 size={16} className="text-emerald-400" />
                ) : (
                  <AlertTriangle size={16} className="text-ruby" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Feedback message */}
        {feedback && (
          <div
            className={`p-3 rounded-xl text-sm font-medium border text-center transition-all ${
              feedback.isCorrect
                ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                : 'bg-ruby/15 border-ruby/40 text-ruby'
            }`}
          >
            {feedback.message}
          </div>
        )}

        {/* Action button */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => loadEquation(equationIndex)}
            className="btn-secondary py-2.5 px-4 text-xs flex items-center gap-1.5"
          >
            <RotateCcw size={14} />
            <span>Sıfırla</span>
          </button>

          <button
            type="button"
            onClick={handleCheck}
            className="btn-primary py-2.5 px-6 font-bold flex items-center gap-2"
          >
            <CheckCircle2 size={18} />
            <span>Tepkimeyi Doğrula</span>
          </button>
        </div>
      </div>
    </div>
  );
};
