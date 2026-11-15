import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Flame, Zap, BookOpen, RotateCcw, CheckCircle2, AlertTriangle, Beaker, Thermometer, X } from 'lucide-react';
import { GameHud, GameStat, toSub } from './GameHud';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { GAMES_STRINGS, GAMES_CONTENT, fmt } from '../../i18n/gamesStrings';
import type { GamesStrings } from '../../i18n/gamesStrings';
import { playBubble, playStart, playCorrect, playWrong } from '../../audio/sfx';

export interface CompoundSynthesisGameProps {
  lang: LanguageCode;
  highScore?: number;
  onFinish: (score: number) => void;
  onBack: () => void;
}

/** Recipe names, product names and descriptions are localised in GAMES_CONTENT, keyed by id. */
export interface SynthesisRecipe {
  id: string;
  category: 'organik' | 'asit-baz' | 'redoks' | 'endustriyel';
  reactants: string[];
  requiredCatalyst?: string; // e.g. 'H+', 'H2SO4', 'Pt', 'Ni', 'Hg2+', 'Fe', 'V2O5'
  requiredHeat: boolean; // >= 60 C
  requiredUv?: boolean;
  requiredPressure?: boolean; // 200 atm
  productFormula: string;
  yieldPercent: number;
  xpReward: number;
}

export const CANONICAL_RECIPES: SynthesisRecipe[] = [
  {
    id: 'syn-ester',
    category: 'organik',
    reactants: ['CH3COOH', 'C2H5OH'],
    requiredCatalyst: 'H2SO4',
    requiredHeat: true,
    productFormula: 'CH3COOC2H5 + H2O',
    yieldPercent: 85,
    xpReward: 40,
  },
  {
    id: 'syn-soap-solid',
    category: 'organik',
    reactants: ['Trigliserit', 'NaOH'],
    requiredHeat: true,
    productFormula: '3 C17H35COONa + C3H5(OH)3',
    yieldPercent: 92,
    xpReward: 45,
  },
  {
    id: 'syn-soap-liquid',
    category: 'organik',
    reactants: ['Trigliserit', 'KOH'],
    requiredHeat: true,
    productFormula: '3 C17H35COOK + C3H5(OH)3',
    yieldPercent: 90,
    xpReward: 45,
  },
  {
    id: 'syn-bromine',
    category: 'organik',
    reactants: ['C2H4', 'Br2'],
    requiredHeat: false,
    productFormula: 'CH2Br-CH2Br',
    yieldPercent: 95,
    xpReward: 35,
  },
  {
    id: 'syn-acetylene-hydration',
    category: 'organik',
    reactants: ['C2H2', 'H2O'],
    requiredCatalyst: 'Hg2+',
    requiredHeat: true,
    productFormula: 'CH3CHO',
    yieldPercent: 88,
    xpReward: 50,
  },
  {
    id: 'syn-haber',
    category: 'endustriyel',
    reactants: ['N2', 'H2'],
    requiredCatalyst: 'Fe',
    requiredHeat: true,
    requiredPressure: true,
    productFormula: '2 NH3',
    yieldPercent: 80,
    xpReward: 45,
  },
  {
    id: 'syn-radical-chlorination',
    category: 'organik',
    reactants: ['CH4', 'Cl2'],
    requiredHeat: false,
    requiredUv: true,
    productFormula: 'CH3Cl + HCl',
    yieldPercent: 75,
    xpReward: 40,
  },
  {
    id: 'syn-contact',
    category: 'endustriyel',
    reactants: ['SO2', 'O2'],
    requiredCatalyst: 'V2O5',
    requiredHeat: true,
    productFormula: '2 SO3',
    yieldPercent: 96,
    xpReward: 40,
  },
];

export const AVAILABLE_REACTANTS = [
  'CH3COOH',
  'C2H5OH',
  'Trigliserit',
  'NaOH',
  'KOH',
  'C2H4',
  'Br2',
  'C2H2',
  'H2O',
  'CH4',
  'Cl2',
  'N2',
  'H2',
  'SO2',
  'O2',
  'NaCl',
  'Au',
];

/** Catalyst ids; labels are localised in GAMES_CONTENT.catalysts. */
export const AVAILABLE_CATALYSTS = ['none', 'H2SO4', 'Hg2+', 'Fe', 'V2O5', 'Ni'];

const CATEGORY_LABEL: Record<SynthesisRecipe['category'], keyof GamesStrings> = {
  organik: 'catOrganik',
  'asit-baz': 'catAsitBaz',
  redoks: 'catRedoks',
  endustriyel: 'catEndustriyel',
};

export const CompoundSynthesisGame: React.FC<CompoundSynthesisGameProps> = ({
  lang,
  highScore = 0,
  onFinish,
  onBack,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const g = GAMES_STRINGS[lang] ?? GAMES_STRINGS.en;
  const content = GAMES_CONTENT[lang] ?? GAMES_CONTENT.en;
  const [selectedReactants, setSelectedReactants] = useState<string[]>([]);
  const [selectedCatalyst, setSelectedCatalyst] = useState<string>('none');
  const [temperatureC, setTemperatureC] = useState<number>(25); // 25 to 450 C
  const [useUv, setUseUv] = useState<boolean>(false);
  const [usePressure, setUsePressure] = useState<boolean>(false);

  const [isBrewing, setIsBrewing] = useState<boolean>(false);
  const [resultN, setResultN] = useState(0);
  const [lastResult, setLastResult] = useState<{
    success: boolean;
    recipeId: string | null;
    yieldPercent: number;
    xpAwarded: number;
  } | null>(null);

  const [showDiscoveryBook, setShowDiscoveryBook] = useState<boolean>(false);
  const [discoveredRecipeIds, setDiscoveredRecipeIds] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const brewTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear pending timers on unmount
  useEffect(() => {
    return () => {
      if (brewTimeoutRef.current) {
        clearTimeout(brewTimeoutRef.current);
      }
    };
  }, []);

  // Load discovered recipes from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('kimya_synthesis_recipes');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setDiscoveredRecipeIds(parsed);
        } else {
          setDiscoveredRecipeIds([]);
        }
      }
    } catch {
      // Ignore
    }
  }, []);

  const saveDiscovery = useCallback((id: string) => {
    setDiscoveredRecipeIds((prev) => {
      if (prev.includes(id)) return prev;
      const updated = [...prev, id];
      try {
        localStorage.setItem('kimya_synthesis_recipes', JSON.stringify(updated));
      } catch {
        // Ignore
      }
      return updated;
    });
  }, []);

  // Toggle reactant selection (max 2)
  const toggleReactant = (r: string) => {
    playBubble();
    setSelectedReactants((prev) => {
      if (prev.includes(r)) {
        return prev.filter((item) => item !== r);
      }
      if (prev.length >= 2) {
        return [prev[1], r];
      }
      return [...prev, r];
    });
  };

  // Brew synthesis action
  const handleBrew = () => {
    if (selectedReactants.length === 0) return;

    setIsBrewing(true);
    playStart();

    if (brewTimeoutRef.current) clearTimeout(brewTimeoutRef.current);
    brewTimeoutRef.current = setTimeout(() => {
      setIsBrewing(false);
      setResultN((n) => n + 1);

      // Check matches against canonical recipes
      const matched = CANONICAL_RECIPES.find((recipe) => {
        const hasAllReactants =
          recipe.reactants.every((r) => selectedReactants.includes(r)) &&
          selectedReactants.length === recipe.reactants.length;
        if (!hasAllReactants) return false;

        // Catalyst check
        if (recipe.requiredCatalyst) {
          if (recipe.requiredCatalyst === 'H2SO4' && !['H2SO4', 'H+'].includes(selectedCatalyst)) return false;
          if (recipe.requiredCatalyst === 'Hg2+' && selectedCatalyst !== 'Hg2+') return false;
          if (recipe.requiredCatalyst === 'Fe' && selectedCatalyst !== 'Fe') return false;
          if (recipe.requiredCatalyst === 'V2O5' && selectedCatalyst !== 'V2O5') return false;
        }

        // Temperature check
        if (recipe.requiredHeat && temperatureC < 60) return false;

        // UV check
        if (recipe.requiredUv && !useUv) return false;

        // Pressure check
        if (recipe.requiredPressure && !usePressure) return false;

        return true;
      });

      if (matched) {
        playCorrect();
        saveDiscovery(matched.id);
        const earned = matched.xpReward;
        setScore((s) => s + earned);
        setLastResult({ success: true, recipeId: matched.id, yieldPercent: matched.yieldPercent, xpAwarded: earned });
      } else {
        // Unreactive pair (e.g. ['NaCl', 'Au'] -> 0% yield)
        playWrong();
        setLastResult({ success: false, recipeId: null, yieldPercent: 0, xpAwarded: 0 });
      }
    }, 1200);
  };

  const handleClear = () => {
    setSelectedReactants([]);
    setSelectedCatalyst('none');
    setTemperatureC(25);
    setUseUv(false);
    setUsePressure(false);
    setLastResult(null);
  };

  const total = CANONICAL_RECIPES.length;
  const tempPct = ((temperatureC - 25) / (450 - 25)) * 100;
  const label = (r: string) => content.reactantLabels[r] ?? toSub(r);
  const recipe = lastResult?.recipeId ? CANONICAL_RECIPES.find((rc) => rc.id === lastResult.recipeId) ?? null : null;
  const [slotA, slotB] = [selectedReactants[0], selectedReactants[1]];

  const eyebrow = isBrewing ? g.sBrewing : lastResult ? (lastResult.success ? g.sProduct : g.sNoReaction) : g.sBench;
  const heading = recipe ? content.recipeProducts[recipe.id] ?? recipe.productFormula : lastResult ? g.sNoReaction : g.sBenchTitle;
  const sub = recipe
    ? fmt(g.sYield, { y: lastResult!.yieldPercent, xp: lastResult!.xpAwarded })
    : lastResult
      ? g.sNoReactionDesc
      : g.sBenchSub;

  const atomLabel = (r: string | undefined) => (r ? label(r) : '?');
  const atomClass = (r: string | undefined) => {
    const len = atomLabel(r).length;
    return len > 8 ? ' is-xs' : len > 5 ? ' is-sm' : '';
  };

  return (
    <div className="gm-play synthesis-game-container">
      <GameHud title={t.games.synthesisTitle} backLabel={t.games.backToHub} onBack={onBack}>
        <GameStat label={g.score} value={fmt(g.pts, { n: score })} tone="accent" />
        <button
          type="button"
          className="ky-chip ky-mono gm-stat gm-stat-btn"
          onClick={() => setShowDiscoveryBook(true)}
          aria-label={fmt(g.sBookCount, { a: discoveredRecipeIds.length, b: total })}
          title={g.sBook}
        >
          <BookOpen size={14} aria-hidden="true" />
          <span>
            {discoveredRecipeIds.length} / {total}
          </span>
        </button>
      </GameHud>

      <main className="ky-fit ky-pane gm-main">
        {/* Reaction stage */}
        <section className="ky-stage ky-lead gm-syn-stage ky-persp reaction-stage" aria-live="polite">
          <div className="ky-floor" aria-hidden="true" />
          <p className="ky-eyebrow">{eyebrow}</p>
          <h2 className="ky-disp ky-fs-24">{heading}</h2>
          <p className="ky-fs-13 gm-syn-sub">{sub}</p>
          <div className="gm-syn-mol ky-float" aria-hidden="true">
            <div
              key={`m-${resultN}`}
              className={`gm-syn-pair${isBrewing ? ' is-mixing' : ''}${lastResult ? (lastResult.success ? ' ky-pop is-ok' : ' ky-shake') : ''}`}
            >
              <span className={`ky-atom gm-syn-a${atomClass(slotA)}${slotA ? '' : ' is-empty'}`}>
                <b>{atomLabel(slotA)}</b>
              </span>
              <span className={`ky-atom gm-syn-b${atomClass(slotB)}${slotB ? '' : ' is-empty'}`}>
                <b>{atomLabel(slotB)}</b>
              </span>
            </div>
          </div>
        </section>

        {/* Selected slots */}
        <section className="ky-card gm-slots" aria-label={g.sSelected}>
          {[slotA, slotB].map((r, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="gm-slot-op" aria-hidden="true">+</span>}
              {r ? (
                <button type="button" className="gm-slot is-filled" onClick={() => toggleReactant(r)} aria-label={`${label(r)} ×`}>
                  <span dir="ltr">{label(r)}</span>
                </button>
              ) : (
                <span className="gm-slot" aria-label={g.sEmpty}>?</span>
              )}
            </React.Fragment>
          ))}
          <span className="gm-slot-op gm-flip" aria-hidden="true">→</span>
          <span className={`ky-mono gm-slot-out${recipe ? ' is-ok' : ''}`} dir="ltr">
            {recipe ? toSub(recipe.productFormula) : selectedReactants.length ? `${selectedReactants.map(label).join(' + ')} ?` : '?'}
          </span>
        </section>

        {lastResult && (
          <p key={`d-${resultN}`} className={`gm-note ky-pop${lastResult.success ? '' : ' gm-note--bad'}`} role="status">
            {lastResult.success ? <CheckCircle2 size={18} aria-hidden="true" /> : <AlertTriangle size={18} aria-hidden="true" />}
            <span>{recipe ? content.recipeDescs[recipe.id] : g.sNoReactionDesc}</span>
          </p>
        )}

        {/* Reactant tray */}
        <section className="gm-tray reactants-shelf" aria-label={g.sTray}>
          {AVAILABLE_REACTANTS.map((r) => {
            const isSelected = selectedReactants.includes(r);
            const txt = label(r);
            return (
              <button
                key={r}
                type="button"
                onClick={() => toggleReactant(r)}
                className={`gm-tray-key${isSelected ? ' on' : ''}${txt.length > 6 ? ' is-long' : ''}`}
                aria-pressed={isSelected}
              >
                <span dir="ltr">{txt}</span>
              </button>
            );
          })}
        </section>

        {/* Conditions */}
        <section className="ky-well gm-cond conditions-grid" aria-label={g.sConditions}>
          <div className="gm-cond-field">
            <label className="gm-label ky-fs-13" htmlFor="gm-catalyst">{g.sCatalyst}</label>
            <select id="gm-catalyst" value={selectedCatalyst} onChange={(e) => setSelectedCatalyst(e.target.value)} className="ky-select">
              {AVAILABLE_CATALYSTS.map((id) => (
                <option key={id} value={id}>
                  {content.catalysts[id] ?? id}
                </option>
              ))}
            </select>
          </div>
          <div className="gm-cond-field">
            <div className="gm-field-row">
              <label htmlFor="gm-temp" className="ky-fs-13">
                <Thermometer size={14} aria-hidden="true" />
                {g.sTemp}
              </label>
              <span className="ky-mono">{temperatureC} °C</span>
            </div>
            <input
              id="gm-temp"
              type="range"
              min={25}
              max={450}
              step={25}
              value={temperatureC}
              onChange={(e) => setTemperatureC(parseInt(e.target.value, 10))}
              className="ky-range"
              style={{ ['--pct' as string]: `${tempPct}%` }}
            />
          </div>
          <div className="gm-toggles" role="group" aria-label={g.sMedium}>
            <button type="button" onClick={() => setUseUv((u) => !u)} className={`ky-chip ky-chip--lg${useUv ? ' on' : ''}`} aria-pressed={useUv}>
              <Zap size={14} aria-hidden="true" />
              <span>{g.sUv}</span>
            </button>
            <button type="button" onClick={() => setUsePressure((p) => !p)} className={`ky-chip ky-chip--lg${usePressure ? ' on' : ''}`} aria-pressed={usePressure}>
              <Flame size={14} aria-hidden="true" />
              <span>{g.sPressure}</span>
            </button>
          </div>
        </section>
      </main>

      <footer className="ky-screen-foot gm-foot">
        <button type="button" onClick={handleClear} className="ky-btn ky-btn--quiet">
          <RotateCcw size={16} aria-hidden="true" />
          <span>{g.sClear}</span>
        </button>
        <button
          type="button"
          onClick={handleBrew}
          disabled={selectedReactants.length === 0 || isBrewing}
          className="ky-btn ky-btn--primary ky-grow gm-cta"
        >
          <Beaker size={18} aria-hidden="true" />
          <span>{g.sSynth}</span>
        </button>
      </footer>

      {showDiscoveryBook && (
        <div className="ky-modal-backdrop gm-book-backdrop" onClick={() => setShowDiscoveryBook(false)}>
          <div
            className="ky-sheet gm-sheet"
            role="dialog"
            aria-modal="true"
            aria-label={g.sBook}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gm-sheet-head">
              <h3 className="ky-disp">
                <BookOpen size={20} aria-hidden="true" />
                <span>{fmt(g.sBookCount, { a: discoveredRecipeIds.length, b: total })}</span>
              </h3>
              <button type="button" onClick={() => setShowDiscoveryBook(false)} className="ky-icon-btn" aria-label={g.close}>
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="gm-sheet-list recipes-list">
              {CANONICAL_RECIPES.map((rc) => {
                const isUnlocked = discoveredRecipeIds.includes(rc.id);
                return (
                  <div key={rc.id} className={`gm-recipe ${isUnlocked ? 'on' : 'locked'}`}>
                    <div className="head">
                      <span>{isUnlocked ? content.recipeNames[rc.id] : g.sLocked}</span>
                      <span className="ky-chip">{g[CATEGORY_LABEL[rc.category]]}</span>
                    </div>
                    {isUnlocked ? (
                      <>
                        <div className="ky-mono" dir="ltr">
                          {toSub(rc.productFormula)} · {fmt(g.sYieldShort, { y: rc.yieldPercent })}
                        </div>
                        <p>{content.recipeDescs[rc.id]}</p>
                      </>
                    ) : (
                      <p>{g.sLockedDesc}</p>
                    )}
                  </div>
                );
              })}
            </div>

            <button type="button" onClick={() => setShowDiscoveryBook(false)} className="ky-btn ky-btn--quiet ky-btn--block">
              {g.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
