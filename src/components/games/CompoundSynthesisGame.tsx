import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Trophy,
  Flame,
  Zap,
  BookOpen,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Beaker,
  Thermometer,
} from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { ChemFormula } from '../common/ChemFormula';
import { playFizz, playBubble, playCorrect, playWrong, playSuccess } from '../../audio/sfx';

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
  highScore = 0,
  onFinish,
  onBack,
}) => {
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
    playBubble();

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
        playFizz();
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

  return (
    <div className="synthesis-game-container p-4 max-w-4xl mx-auto flex flex-col gap-5">
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
          <button
            type="button"
            onClick={() => setShowDiscoveryBook(true)}
            className="btn-secondary text-xs flex items-center gap-1.5 py-1.5 px-3 text-primary border-primary/30"
          >
            <BookOpen size={16} />
            <span>Sentez Kitabı ({discoveredRecipeIds.length}/{CANONICAL_RECIPES.length})</span>
          </button>

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

      {/* Synthesis Workbench */}
      <div className="workbench-card p-6 bg-surface border border-subtle rounded-2xl shadow-lg flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Beaker className="text-primary" />
            <span>Bileşik Sentez Laboratuvarı</span>
          </h2>
          <p className="subtitle-text text-xs opacity-75">
            Reaktifleri, katalizörü ve reaksiyon koşullarını ayarlayıp sentezi başlatın.
          </p>
        </div>

        {/* 1. Reactants Shelf */}
        <div className="reactants-shelf flex flex-col gap-2">
          <label className="text-xs font-semibold opacity-80">
            Reaktif Rafı (En fazla 2 bileşik seçin):
          </label>
          <div className="flex flex-wrap gap-2">
            {AVAILABLE_REACTANTS.map((r) => {
              const isSelected = selectedReactants.includes(r);
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => toggleReactant(r)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-bold transition-all ${
                    isSelected
                      ? 'border-primary bg-primary text-primary-foreground shadow-sm scale-105'
                      : 'border-subtle bg-surface-elevated hover:border-primary/50 text-foreground'
                  }`}
                >
                  <ChemFormula formula={r} />
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Reaction Conditions */}
        <div className="conditions-grid grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-surface-elevated/40 border border-subtle rounded-xl">
          {/* Catalyst Selector */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold opacity-75">Katalizör:</label>
            <select
              value={selectedCatalyst}
              onChange={(e) => setSelectedCatalyst(e.target.value)}
              className="filter-select text-xs"
            >
              {AVAILABLE_CATALYSTS.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Temperature Slider */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs font-semibold opacity-75">
              <span className="flex items-center gap-1">
                <Thermometer size={14} className="text-amber-500" />
                <span>Sıcaklık:</span>
              </span>
              <span className="font-mono font-bold">{temperatureC} °C</span>
            </div>
            <input
              type="range"
              min={25}
              max={450}
              step={25}
              value={temperatureC}
              onChange={(e) => setTemperatureC(parseInt(e.target.value, 10))}
              className="w-full accent-primary"
            />
          </div>

          {/* Environmental Toggles (UV, Pressure) */}
          <div className="flex items-center gap-2 pt-4">
            <button
              type="button"
              onClick={() => setUseUv((u) => !u)}
              className={`flex-1 py-1.5 px-2 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1 transition-all ${
                useUv ? 'border-purple-500 bg-purple-500/20 text-purple-300' : 'border-subtle bg-surface'
              }`}
            >
              <Zap size={14} />
              <span>UV Işık (hν)</span>
            </button>

            <button
              type="button"
              onClick={() => setUsePressure((p) => !p)}
              className={`flex-1 py-1.5 px-2 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1 transition-all ${
                usePressure ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300' : 'border-subtle bg-surface'
              }`}
            >
              <Flame size={14} />
              <span>200 atm Basınç</span>
            </button>
          </div>
        </div>

        {/* Reaction Beaker & Execution */}
        <div className="reaction-stage flex flex-col items-center justify-center p-6 bg-surface-elevated/70 border border-subtle rounded-2xl relative min-h-[160px]">
          {isBrewing ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
              <div className="text-sm font-bold text-primary animate-pulse">
                Tepkime efervesan köpürüyor...
              </div>
            </div>
          ) : lastResult ? (
            <div className="flex flex-col items-center gap-2 text-center">
              <div
                className={`p-2 rounded-full ${
                  lastResult.success ? 'bg-emerald-500/20 text-emerald-400' : 'bg-ruby/20 text-ruby'
                }`}
              >
                {lastResult.success ? <CheckCircle2 size={32} /> : <AlertTriangle size={32} />}
              </div>
              <div className="text-lg font-bold">{lastResult.productName}</div>
              {lastResult.success && (
                <div className="text-xs font-semibold text-emerald-400">
                  Verim: %{lastResult.yieldPercent} • +{lastResult.xpAwarded} XP
                </div>
              )}
              <p className="text-xs opacity-75 max-w-md">{lastResult.description}</p>
            </div>
          ) : (
            <div className="text-xs opacity-60 text-center">
              Reaktifleri seçip &ldquo;Tepkimeyi Başlat (Brew)&rdquo; düğmesine basın.
            </div>
          )}
        </div>

        {/* Action button */}
        <div className="flex items-center justify-end gap-3">
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
            className="btn-secondary py-2.5 px-4 text-xs flex items-center gap-1.5"
          >
            <RotateCcw size={14} />
            <span>Tezgahı Temizle</span>
          </button>

          <button
            type="button"
            onClick={handleBrew}
            disabled={selectedReactants.length === 0 || isBrewing}
            className="btn-primary py-2.5 px-6 font-bold flex items-center gap-2"
          >
            <Beaker size={18} />
            <span>Tepkimeyi Başlat (Brew)</span>
          </button>
        </div>
      </div>

      {/* Synthesis Discovery Book Modal */}
      {showDiscoveryBook && (
        <div className="modal-backdrop fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="modal-content bg-surface border border-subtle rounded-2xl max-w-2xl w-full p-6 flex flex-col gap-4 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <BookOpen className="text-primary" />
                <span>Sentez Keşif Kitabı ({discoveredRecipeIds.length}/{CANONICAL_RECIPES.length})</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowDiscoveryBook(false)}
                className="btn-secondary text-xs py-1 px-3"
              >
                Kapat
              </button>
            </div>

            <div className="recipes-list flex flex-col gap-3">
              {CANONICAL_RECIPES.map((recipe) => {
                const isUnlocked = discoveredRecipeIds.includes(recipe.id);
                return (
                  <div
                    key={recipe.id}
                    className={`p-3.5 rounded-xl border flex flex-col gap-1 transition-all ${
                      isUnlocked
                        ? 'border-emerald-500/40 bg-emerald-500/10'
                        : 'border-subtle bg-surface-elevated/40 opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm">
                        {isUnlocked ? recipe.nameTr : '??? Gizli Sentez'}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-surface">
                        {recipe.category.toUpperCase()}
                      </span>
                    </div>
                    {isUnlocked ? (
                      <>
                        <div className="text-xs font-mono text-primary font-bold">
                          {recipe.productFormula} (Verim: %{recipe.yieldPercent})
                        </div>
                        <p className="text-xs opacity-75">{recipe.descriptionTr}</p>
                      </>
                    ) : (
                      <div className="text-xs opacity-50">
                        Bu bileşiği sentezlemek için laboratuvarda reaktifleri deneyin.
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
