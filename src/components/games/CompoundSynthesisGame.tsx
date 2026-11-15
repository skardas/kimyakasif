import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Sparkles, Trophy, Flame, Zap, BookOpen, RotateCcw, CheckCircle2, AlertTriangle, Beaker, Thermometer, X } from 'lucide-react';
import { GameHud, GameStat } from './GameHud';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { GAMES_STRINGS } from '../../i18n/gamesStrings';
import { ChemFormula } from '../common/ChemFormula';
import { playBubble, playStart, playCorrect, playWrong } from '../../audio/sfx';

export interface CompoundSynthesisGameProps {
  lang: LanguageCode;
  highScore?: number;
  onFinish: (score: number) => void;
  onBack: () => void;
}

export interface SynthesisRecipe {
  id: string;
  nameTr: string;
  category: 'organik' | 'asit-baz' | 'redoks' | 'endustriyel';
  reactants: string[];
  requiredCatalyst?: string; // e.g. 'H+', 'H2SO4', 'Pt', 'Ni', 'Hg2+', 'Fe', 'V2O5'
  requiredHeat: boolean; // >= 60 C
  requiredUv?: boolean;
  requiredPressure?: boolean; // 200 atm
  productName: string;
  productFormula: string;
  yieldPercent: number;
  xpReward: number;
  descriptionTr: string;
}

export const CANONICAL_RECIPES: SynthesisRecipe[] = [
  {
    id: 'syn-ester',
    nameTr: 'Esterleşme (Etil Asetat Sentezi)',
    category: 'organik',
    reactants: ['CH3COOH', 'C2H5OH'],
    requiredCatalyst: 'H2SO4',
    requiredHeat: true,
    productName: 'Etil Asetat (CH3COOC2H5)',
    productFormula: 'CH3COOC2H5 + H2O',
    yieldPercent: 85,
    xpReward: 40,
    descriptionTr: 'Kondenzasyon reaksiyonudur. Karboksilik asit ve alkol asit katalizörlüğünde ısıtıldığında hoş kokulu meyvemsi ester oluşur.',
  },
  {
    id: 'syn-soap-solid',
    nameTr: 'Beyaz Sabun (Katı Sabun Sentezi)',
    category: 'organik',
    reactants: ['Trigliserit', 'NaOH'],
    requiredHeat: true,
    productName: 'Sodyum Stearat (Beyaz Sabun) + Gliserin',
    productFormula: '3 C17H35COONa + C3H5(OH)3',
    yieldPercent: 92,
    xpReward: 45,
    descriptionTr: 'Sabunlaşma reaksiyonudur. Yağ asidi trigliseritlerinin kuvvetli baz NaOH ile hidrolizinden sert katı sabun elde edilir.',
  },
  {
    id: 'syn-soap-liquid',
    nameTr: 'Arap Sabunu (Yumuşak Sabun)',
    category: 'organik',
    reactants: ['Trigliserit', 'KOH'],
    requiredHeat: true,
    productName: 'Potasyum Stearat (Arap Sabunu) + Gliserin',
    productFormula: '3 C17H35COOK + C3H5(OH)3',
    yieldPercent: 90,
    xpReward: 45,
    descriptionTr: 'KOH kullanıldığında jölemsi, yumuşak arap sabunu meydana gelir.',
  },
  {
    id: 'syn-bromine',
    nameTr: 'Alken Bromlanması (Doymamışlık Testi)',
    category: 'organik',
    reactants: ['C2H4', 'Br2'],
    requiredHeat: false,
    productName: '1,2-Dibromoetan',
    productFormula: 'CH2Br-CH2Br',
    yieldPercent: 95,
    xpReward: 35,
    descriptionTr: 'Katılma reaksiyonudur. Alkenler bromlu suyun kızıl-kahverengi rengini oda sıcaklığında giderir.',
  },
  {
    id: 'syn-acetylene-hydration',
    nameTr: 'Asetilene Su Katılması (Kucharov Tepkimesi)',
    category: 'organik',
    reactants: ['C2H2', 'H2O'],
    requiredCatalyst: 'Hg2+',
    requiredHeat: true,
    productName: 'Asetaldehit (Etanal)',
    productFormula: 'CH3CHO',
    yieldPercent: 88,
    xpReward: 50,
    descriptionTr: 'ÖSYM Tuzağı: Asetilene (C2H2) su katıldığında enol-keto tautomerisi üzerinden doğrudan asetaldehit oluşur!',
  },
  {
    id: 'syn-haber',
    nameTr: 'Haber-Bosch Amonyak Sentezi',
    category: 'endustriyel',
    reactants: ['N2', 'H2'],
    requiredCatalyst: 'Fe',
    requiredHeat: true,
    requiredPressure: true,
    productName: 'Amonyak (NH3)',
    productFormula: '2 NH3',
    yieldPercent: 80,
    xpReward: 45,
    descriptionTr: 'Endüstride gübre ve patlayıcı üretiminin temeli olan yüksek basınçlı ekzotermik sentezdir.',
  },
  {
    id: 'syn-radical-chlorination',
    nameTr: 'Alkan Radikalik Klorlanması',
    category: 'organik',
    reactants: ['CH4', 'Cl2'],
    requiredHeat: false,
    requiredUv: true,
    productName: 'Klorometan (CH3Cl) + HCl',
    productFormula: 'CH3Cl + HCl',
    yieldPercent: 75,
    xpReward: 40,
    descriptionTr: 'Alkanlar doymuş olduklarından katılma vermez, UV ışık altında radikalik yer değiştirme (sübstitüsyon) tepkimesi verir.',
  },
  {
    id: 'syn-contact',
    nameTr: 'Kontak Prosesi (Kükürt Trioksit)',
    category: 'endustriyel',
    reactants: ['SO2', 'O2'],
    requiredCatalyst: 'V2O5',
    requiredHeat: true,
    productName: 'Kükürt Trioksit (SO3)',
    productFormula: '2 SO3',
    yieldPercent: 96,
    xpReward: 40,
    descriptionTr: 'V2O5 katalizörlüğünde sülfürik asit (H2SO4) üretiminin kilit basamağıdır.',
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

export const AVAILABLE_CATALYSTS = [
  { id: 'none', label: 'Katalizör Yok' },
  { id: 'H2SO4', label: 'H+ / H2SO4 (Asit)' },
  { id: 'Hg2+', label: 'Hg²⁺ / Cıva(II) İyonu' },
  { id: 'Fe', label: 'Fe / Demir Katalizörü' },
  { id: 'V2O5', label: 'V2O5 / Vanadyum Pentoksit' },
  { id: 'Ni', label: 'Ni / Nikel' },
];

export const CompoundSynthesisGame: React.FC<CompoundSynthesisGameProps> = ({
  lang,
  highScore = 0,
  onFinish,
  onBack,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const g = GAMES_STRINGS[lang] ?? GAMES_STRINGS.en;
  const [selectedReactants, setSelectedReactants] = useState<string[]>([]);
  const [selectedCatalyst, setSelectedCatalyst] = useState<string>('none');
  const [temperatureC, setTemperatureC] = useState<number>(25); // 25 to 450 C
  const [useUv, setUseUv] = useState<boolean>(false);
  const [usePressure, setUsePressure] = useState<boolean>(false);

  const [isBrewing, setIsBrewing] = useState<boolean>(false);
  const [lastResult, setLastResult] = useState<{
    success: boolean;
    productName: string;
    yieldPercent: number;
    xpAwarded: number;
    description: string;
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

        setLastResult({
          success: true,
          productName: matched.productName,
          yieldPercent: matched.yieldPercent,
          xpAwarded: earned,
          description: matched.descriptionTr,
        });
      } else {
        // Unreactive pair (e.g. ['NaCl', 'Au'] -> 0% yield)
        playWrong();
        setLastResult({
          success: false,
          productName: 'Tepkime gerçekleşmez',
          yieldPercent: 0,
          xpAwarded: 0,
          description: 'Seçilen reaktifler bu sıcaklık, basınç ve katalizör koşullarında tepkime vermez.',
        });
      }
    }, 1200);
  };

  const total = CANONICAL_RECIPES.length;
  const tempPct = ((temperatureC - 25) / (450 - 25)) * 100;

  return (
    <div className="gm synthesis-game-container">
      <GameHud title={t.games.synthesisTitle} backLabel={t.games.backToHub} onBack={onBack}>
        <GameStat icon={<Trophy size={16} aria-hidden="true" />} label={g.best} value={Math.max(highScore, score)} tone="gold" />
        <GameStat icon={<Sparkles size={16} aria-hidden="true" />} label={g.score} value={score} tone="accent" />
        <GameStat icon={<BookOpen size={16} aria-hidden="true" />} label="Sentez Kitabı" value={`${discoveredRecipeIds.length}/${total}`} />
      </GameHud>

      <div className="ky-track gm-progress" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={discoveredRecipeIds.length}>
        <div className="ky-fill ky-fill--violet" style={{ inlineSize: `${(discoveredRecipeIds.length / total) * 100}%` }} />
      </div>

      <div className="ky-card gm-board workbench-card">
        <div className="gm-eyebrow-row">
          <div>
            <h2 className="gm-title" style={{ marginTop: 0 }}>Bileşik Sentez Laboratuvarı</h2>
            <p className="gm-sub" style={{ marginTop: 4 }}>
              Reaktifleri, katalizörü ve reaksiyon koşullarını ayarlayıp sentezi başlatın.
            </p>
          </div>
          <button type="button" onClick={() => setShowDiscoveryBook(true)} className="ky-chip ky-chip--lg ky-chip--violet">
            <BookOpen size={16} aria-hidden="true" />
            <span>Sentez Kitabı ({discoveredRecipeIds.length}/{total})</span>
          </button>
        </div>

        <div className="reactants-shelf" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span className="gm-label" id="gm-react-label">Reaktif Rafı (En fazla 2 bileşik seçin)</span>
          <div className="gm-shelf" role="group" aria-labelledby="gm-react-label">
            {AVAILABLE_REACTANTS.map((r) => {
              const isSelected = selectedReactants.includes(r);
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => toggleReactant(r)}
                  className={`ky-chip${isSelected ? ' on' : ''}`}
                  aria-pressed={isSelected}
                >
                  <ChemFormula formula={r} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="ky-well gm-cond conditions-grid">
          <div>
            <label className="gm-label" htmlFor="gm-catalyst">Katalizör</label>
            <select
              id="gm-catalyst"
              value={selectedCatalyst}
              onChange={(e) => setSelectedCatalyst(e.target.value)}
              className="ky-select"
            >
              {AVAILABLE_CATALYSTS.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="gm-field-row">
              <label htmlFor="gm-temp">
                <Thermometer size={14} aria-hidden="true" style={{ color: 'var(--gold)' }} />
                Sıcaklık
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

          <div>
            <span className="gm-label">Ortam</span>
            <div className="gm-toggles">
              <button type="button" onClick={() => setUseUv((u) => !u)} className={`ky-chip ky-chip--lg${useUv ? ' on' : ''}`} aria-pressed={useUv}>
                <Zap size={14} aria-hidden="true" />
                <span>UV Işık (hν)</span>
              </button>
              <button type="button" onClick={() => setUsePressure((p) => !p)} className={`ky-chip ky-chip--lg${usePressure ? ' on' : ''}`} aria-pressed={usePressure}>
                <Flame size={14} aria-hidden="true" />
                <span>200 atm Basınç</span>
              </button>
            </div>
          </div>
        </div>

        <div className="ky-stage gm-beaker reaction-stage ky-lead" aria-live="polite">
          <div className="ky-floor" aria-hidden="true" />
          {isBrewing ? (
            <>
              <div className="gm-spinner" aria-hidden="true" />
              <h3>Tepkime efervesan köpürüyor...</h3>
              <span className="gm-bubbles" aria-hidden="true"><i /><i /><i /></span>
            </>
          ) : lastResult ? (
            <div key={lastResult.productName + discoveredRecipeIds.length + score} className={`gm-beaker-res ${lastResult.success ? 'ky-pop' : 'ky-shake'}`}>
              <span className={`ky-tile ky-tile--lg ${lastResult.success ? 'ky-tile--ok' : 'ky-tile--rose'}`} aria-hidden="true">
                {lastResult.success ? <CheckCircle2 size={30} /> : <AlertTriangle size={30} />}
              </span>
              <h3>{lastResult.productName}</h3>
              {lastResult.success && (
                <span className="gm-ok-pill">
                  Verim: %{lastResult.yieldPercent} &bull; +{lastResult.xpAwarded} XP
                </span>
              )}
              <p>{lastResult.description}</p>
            </div>
          ) : (
            <>
              <span className="ky-tile ky-tile--lg ky-tile--violet" aria-hidden="true">
                <Beaker size={28} />
              </span>
              <p>Reaktifleri seçip &ldquo;Tepkimeyi Başlat&rdquo; düğmesine basın.</p>
            </>
          )}
        </div>

        <div className="gm-actions">
          <button
            type="button"
            onClick={() => {
              setSelectedReactants([]);
              setSelectedCatalyst('none');
              setTemperatureC(25);
              setUseUv(false);
              setUsePressure(false);
              setLastResult(null);
            }}
            className="ky-btn ky-btn--quiet"
          >
            <RotateCcw size={16} aria-hidden="true" />
            <span>Tezgahı Temizle</span>
          </button>
          <button
            type="button"
            onClick={handleBrew}
            disabled={selectedReactants.length === 0 || isBrewing}
            className="ky-btn ky-btn--violet"
          >
            <Beaker size={18} aria-hidden="true" />
            <span>Tepkimeyi Başlat</span>
          </button>
        </div>
      </div>

      {showDiscoveryBook && (
        <div className="ky-modal-backdrop" onClick={() => setShowDiscoveryBook(false)}>
          <div
            className="ky-sheet gm-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Sentez Keşif Kitabı"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gm-sheet-head">
              <h3>
                <BookOpen size={20} aria-hidden="true" style={{ color: 'var(--violet)' }} />
                <span>Sentez Keşif Kitabı ({discoveredRecipeIds.length}/{total})</span>
              </h3>
              <button type="button" onClick={() => setShowDiscoveryBook(false)} className="ky-icon-btn" aria-label={g.close}>
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }} className="recipes-list">
              {CANONICAL_RECIPES.map((recipe) => {
                const isUnlocked = discoveredRecipeIds.includes(recipe.id);
                return (
                  <div key={recipe.id} className={`gm-recipe ${isUnlocked ? 'on' : 'locked'}`}>
                    <div className="head">
                      <span>{isUnlocked ? recipe.nameTr : '??? Gizli Sentez'}</span>
                      <span className="ky-chip">{recipe.category.toUpperCase()}</span>
                    </div>
                    {isUnlocked ? (
                      <>
                        <div className="ky-mono">
                          {recipe.productFormula} (Verim: %{recipe.yieldPercent})
                        </div>
                        <p>{recipe.descriptionTr}</p>
                      </>
                    ) : (
                      <p>Bu bileşiği sentezlemek için laboratuvarda reaktifleri deneyin.</p>
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
