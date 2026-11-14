import React, { useState, useMemo, useCallback } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Trophy,
  Atom,
  HelpCircle,
  Plus,
  Minus,
} from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { ChemFormula } from '../common/ChemFormula';
import { playCorrect, playWrong, playSuccess } from '../../audio/sfx';

export interface LewisDotBuilderProps {
  lang: LanguageCode;
  highScore?: number;
  onFinish: (score: number) => void;
  onBack: () => void;
}

export interface MoleculeSpec {
  id: string;
  formula: string;
  nameTr: string;
  tier: 1 | 2 | 3 | 4;
  centralAtom: {
    symbol: string;
    valenceElectrons: number;
    targetOctet: number; // 8, 2 (duet), 6 (BF3), 10 (PCl5), 12 (SF6)
  };
  peripheralAtoms: {
    symbol: string;
    count: number;
    valenceElectrons: number;
    targetOctet: number;
  }[];
  totalValenceElectrons: number;
  expectedCentralBonds: number;
  expectedCentralLonePairs: number;
  expectedPeripheralBonds: number;
  expectedPeripheralLonePairs: number;
  vsepr: string;
  geometryTr: string;
  curriculumNote: string;
}

export const TARGET_MOLECULES: MoleculeSpec[] = [
  {
    id: 'mol-nh3',
    formula: 'NH3',
    nameTr: 'Amonyak',
    tier: 2,
    centralAtom: { symbol: 'N', valenceElectrons: 5, targetOctet: 8 },
    peripheralAtoms: [{ symbol: 'H', count: 3, valenceElectrons: 1, targetOctet: 2 }],
    totalValenceElectrons: 8,
    expectedCentralBonds: 3,
    expectedCentralLonePairs: 1,
    expectedPeripheralBonds: 1,
    expectedPeripheralLonePairs: 0,
    vsepr: 'AX3E1',
    geometryTr: 'Üçgen Piramit (107.3°)',
    curriculumNote: 'Azot üzerinde 1 ortaklanmamış elektron çifti bulunur, bağ açısını 107.3°ye daraltır.',
  },
  {
    id: 'mol-h2o',
    formula: 'H2O',
    nameTr: 'Su',
    tier: 2,
    centralAtom: { symbol: 'O', valenceElectrons: 6, targetOctet: 8 },
    peripheralAtoms: [{ symbol: 'H', count: 2, valenceElectrons: 1, targetOctet: 2 }],
    totalValenceElectrons: 8,
    expectedCentralBonds: 2,
    expectedCentralLonePairs: 2,
    expectedPeripheralBonds: 1,
    expectedPeripheralLonePairs: 0,
    vsepr: 'AX2E2',
    geometryTr: 'Kırık Doğru / Açısal (104.5°)',
    curriculumNote: 'Oksijen üzerindeki 2 ortaklanmamış elektron çifti moleküle güçlü dipol moment kazandırır.',
  },
  {
    id: 'mol-ch4',
    formula: 'CH4',
    nameTr: 'Metan',
    tier: 2,
    centralAtom: { symbol: 'C', valenceElectrons: 4, targetOctet: 8 },
    peripheralAtoms: [{ symbol: 'H', count: 4, valenceElectrons: 1, targetOctet: 2 }],
    totalValenceElectrons: 8,
    expectedCentralBonds: 4,
    expectedCentralLonePairs: 0,
    expectedPeripheralBonds: 1,
    expectedPeripheralLonePairs: 0,
    vsepr: 'AX4',
    geometryTr: 'Düzgün Dörtyüzlü (109.5°)',
    curriculumNote: 'Karbon 4 özdeş sp³ hibrit bağı yapar, apolar bir moleküldür.',
  },
  {
    id: 'mol-co2',
    formula: 'CO2',
    nameTr: 'Karbondioksit',
    tier: 2,
    centralAtom: { symbol: 'C', valenceElectrons: 4, targetOctet: 8 },
    peripheralAtoms: [{ symbol: 'O', count: 2, valenceElectrons: 6, targetOctet: 8 }],
    totalValenceElectrons: 16,
    expectedCentralBonds: 4, // 2 double bonds
    expectedCentralLonePairs: 0,
    expectedPeripheralBonds: 2,
    expectedPeripheralLonePairs: 2,
    vsepr: 'AX2',
    geometryTr: 'Doğrusal (180°)',
    curriculumNote: 'Karbon ile oksijenler arasında 2 adet ikili bağ (O=C=O) bulunur.',
  },
  {
    id: 'mol-hcn',
    formula: 'HCN',
    nameTr: 'Hidrojen Siyanür',
    tier: 3,
    centralAtom: { symbol: 'C', valenceElectrons: 4, targetOctet: 8 },
    peripheralAtoms: [
      { symbol: 'H', count: 1, valenceElectrons: 1, targetOctet: 2 },
      { symbol: 'N', count: 1, valenceElectrons: 5, targetOctet: 8 },
    ],
    totalValenceElectrons: 10,
    expectedCentralBonds: 4, // 1 single + 1 triple
    expectedCentralLonePairs: 0,
    expectedPeripheralBonds: 2,
    expectedPeripheralLonePairs: 1,
    vsepr: 'AX2',
    geometryTr: 'Doğrusal (180°)',
    curriculumNote: 'H-C bağı tekli, C≡N bağı ise üçlü bağdır. Azot üzerinde 1 ortaklanmamış elektron çifti bulunur.',
  },
  {
    id: 'mol-bf3',
    formula: 'BF3',
    nameTr: 'Bor Triflorür (Oktet Boşluğu)',
    tier: 4,
    centralAtom: { symbol: 'B', valenceElectrons: 3, targetOctet: 6 },
    peripheralAtoms: [{ symbol: 'F', count: 3, valenceElectrons: 7, targetOctet: 8 }],
    totalValenceElectrons: 24,
    expectedCentralBonds: 3,
    expectedCentralLonePairs: 0,
    expectedPeripheralBonds: 1,
    expectedPeripheralLonePairs: 3,
    vsepr: 'AX3',
    geometryTr: 'Düzlem Üçgen (120°)',
    curriculumNote: 'ÖSYM İstisnası: Bor (B) 6 elektronla kararlıdır, oktet boşluğu gösterir (Incomplete Octet).',
  },
  {
    id: 'mol-pcl5',
    formula: 'PCl5',
    nameTr: 'Fosfor Pentaklorür (Genişlemiş Oktet)',
    tier: 4,
    centralAtom: { symbol: 'P', valenceElectrons: 5, targetOctet: 10 },
    peripheralAtoms: [{ symbol: 'Cl', count: 5, valenceElectrons: 7, targetOctet: 8 }],
    totalValenceElectrons: 40,
    expectedCentralBonds: 5,
    expectedCentralLonePairs: 0,
    expectedPeripheralBonds: 1,
    expectedPeripheralLonePairs: 3,
    vsepr: 'AX5',
    geometryTr: 'Üçgen Çift Piramit',
    curriculumNote: 'ÖSYM İstisnası: 3. periyot elementi Fosfor boş d orbitallerini kullanarak oktetini genişletir (10 elektron).',
  },
  {
    id: 'mol-sf6',
    formula: 'SF6',
    nameTr: 'Kükürt Hekzaflorür (Genişlemiş Oktet)',
    tier: 4,
    centralAtom: { symbol: 'S', valenceElectrons: 6, targetOctet: 12 },
    peripheralAtoms: [{ symbol: 'F', count: 6, valenceElectrons: 7, targetOctet: 8 }],
    totalValenceElectrons: 48,
    expectedCentralBonds: 6,
    expectedCentralLonePairs: 0,
    expectedPeripheralBonds: 1,
    expectedPeripheralLonePairs: 3,
    vsepr: 'AX6',
    geometryTr: 'Sekizyüzlü (Oktahedral)',
    curriculumNote: 'Kükürt 12 değerlik elektronu barındırarak genişlemiş oktet kuralını sergiler.',
  },
];

export const LewisDotBuilder: React.FC<LewisDotBuilderProps> = ({
  highScore = 0,
  onFinish,
  onBack,
}) => {
  const [moleculeIndex, setMoleculeIndex] = useState(0);
  const currentMol = TARGET_MOLECULES[moleculeIndex] || TARGET_MOLECULES[0];

  // User input states for central atom and peripheral atoms
  const [centralBonds, setCentralBonds] = useState<number>(1);
  const [centralLonePairs, setCentralLonePairs] = useState<number>(0);
  const [peripheralLonePairs, setPeripheralLonePairs] = useState<number>(0);

  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);

  // Reset controls on molecule switch
  const loadMolecule = useCallback((idx: number) => {
    setMoleculeIndex(idx);
    setCentralBonds(1);
    setCentralLonePairs(0);
    setPeripheralLonePairs(0);
    setFeedback(null);
  }, []);

  // Compute live Lewis validation
  const validation = useMemo(() => {
    const c = currentMol.centralAtom;
    const bondingElectrons = centralBonds * 2;
    const lonePairElectrons = centralLonePairs * 2;
    const centralTotalElectrons = bondingElectrons + lonePairElectrons;

    // Formal charge: FC = Valence - NonBonding(2*LP) - Bonds
    const centralFormalCharge = c.valenceElectrons - lonePairElectrons - centralBonds;

    // Octet check
    const octetSatisfied = centralTotalElectrons === c.targetOctet;

    // Total placed vs total required
    const periphLpAtomsCount = currentMol.peripheralAtoms
      .filter((p) => p.targetOctet > 2)
      .reduce((acc, p) => acc + p.count, 0);
    const placedElectrons =
      bondingElectrons + lonePairElectrons + periphLpAtomsCount * (peripheralLonePairs * 2);

    const isMatch =
      centralBonds === currentMol.expectedCentralBonds &&
      centralLonePairs === currentMol.expectedCentralLonePairs &&
      peripheralLonePairs === currentMol.expectedPeripheralLonePairs;

    return {
      bondingElectrons,
      lonePairElectrons,
      centralTotalElectrons,
      centralFormalCharge,
      octetSatisfied,
      placedElectrons,
      isMatch,
    };
  }, [currentMol, centralBonds, centralLonePairs, peripheralLonePairs]);

  // Check / Validate submission
  const handleValidate = () => {
    // Contract Check: E2E test T2.F06.04 checks that NH3 with 4 bonds + 1 lone pair = 10 e- is rejected
    if (validation.centralTotalElectrons > currentMol.centralAtom.targetOctet) {
      playWrong();
      setFeedback({
        message: `Hata: Merkez atom (${currentMol.centralAtom.symbol}) çevresinde ${validation.centralTotalElectrons} elektron oldu! Oktet kuralı (${currentMol.centralAtom.targetOctet} e⁻) ihlal edildi.`,
        isCorrect: false,
      });
      return;
    }

    if (!validation.octetSatisfied) {
      playWrong();
      setFeedback({
        message: `Oktet/Dublet tamamlanmadı: Merkez atomun çevresinde ${validation.centralTotalElectrons} elektron var, hedef ${currentMol.centralAtom.targetOctet} elektron.`,
        isCorrect: false,
      });
      return;
    }

    if (!validation.isMatch) {
      playWrong();
      setFeedback({
        message: `Bağ ve ortaklanmamış elektron çifti sayıları molekülün doğru rezonans yapısına uymuyor.`,
        isCorrect: false,
      });
      return;
    }

    // Success!
    playSuccess();
    const earned = 120;
    setScore((s) => s + earned);
    setFeedback({
      message: `Mükemmel! ${currentMol.nameTr} Lewis yapısı ve VSEPR geometrisi (${currentMol.vsepr}) doğrulandı. (+120 Puan)`,
      isCorrect: true,
    });

    setTimeout(() => {
      if (moleculeIndex < TARGET_MOLECULES.length - 1) {
        loadMolecule(moleculeIndex + 1);
      } else {
        onFinish(score + earned);
      }
    }, 1800);
  };

  return (
    <div className="lewis-builder-container p-4 max-w-4xl mx-auto flex flex-col gap-5">
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

      {/* Main Builder Canvas */}
      <div className="lewis-board p-6 bg-surface border border-subtle rounded-2xl shadow-lg flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <div className="text-xs uppercase tracking-wider text-primary font-bold">
              KADEME {currentMol.tier} • {moleculeIndex + 1} / {TARGET_MOLECULES.length}
            </div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span>{currentMol.nameTr}</span>
              <span className="text-primary font-mono font-bold">
                (<ChemFormula formula={currentMol.formula} />)
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
              VSEPR: {currentMol.vsepr}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-surface-elevated">
              {currentMol.geometryTr}
            </span>
          </div>
        </div>

        {/* Visual Molecule Canvas representation */}
        <div className="lewis-canvas-stage min-h-[240px] flex flex-col items-center justify-center p-6 bg-surface-elevated/40 border border-subtle rounded-2xl relative">
          <div className="relative flex items-center justify-center">
            {/* Central Atom Circle */}
            <div className="w-20 h-20 rounded-full border-4 border-primary bg-primary/10 flex flex-col items-center justify-center relative shadow-lg">
              <span className="text-2xl font-black text-primary">{currentMol.centralAtom.symbol}</span>
              <span className="text-[10px] font-mono opacity-70">
                Yük: {validation.centralFormalCharge > 0 ? `+${validation.centralFormalCharge}` : validation.centralFormalCharge}
              </span>

              {/* Central Lone Pairs visual dots */}
              {Array.from({ length: centralLonePairs }).map((_, lpIdx) => (
                <div
                  key={`clp-${lpIdx}`}
                  className="absolute flex gap-1"
                  style={{
                    top: lpIdx === 0 ? '-14px' : 'auto',
                    bottom: lpIdx === 1 ? '-14px' : 'auto',
                    left: lpIdx === 2 ? '-14px' : 'auto',
                    right: lpIdx === 3 ? '-14px' : 'auto',
                  }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm" />
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm" />
                </div>
              ))}
            </div>

            {/* Peripheral bond representations */}
            <div className="absolute flex items-center gap-12 pointer-events-none">
              <span className="w-8 h-1 bg-primary/60 rounded" />
              <span className="w-8 h-1 bg-primary/60 rounded" />
            </div>
          </div>

          {/* Real-time stats HUD */}
          <div className="flex items-center justify-center gap-4 mt-6 text-xs flex-wrap">
            <span className={`px-2 py-1 rounded-lg border font-semibold ${validation.octetSatisfied ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-ruby/40 bg-ruby/10 text-ruby'}`}>
              Merkez Elektron: {validation.centralTotalElectrons} / {currentMol.centralAtom.targetOctet}
            </span>
            <span className="px-2 py-1 rounded-lg border border-subtle bg-surface">
              Bağ Elektronu: {validation.bondingElectrons}
            </span>
            <span className="px-2 py-1 rounded-lg border border-subtle bg-surface">
              Ortaklanmamış e⁻: {validation.lonePairElectrons}
            </span>
            <span className="px-2 py-1 rounded-lg border border-subtle bg-surface">
              Toplam Yerleşen: {validation.placedElectrons} / {currentMol.totalValenceElectrons}
            </span>
          </div>
        </div>

        {/* Stepper Controls */}
        <div className="controls-grid grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-3 bg-surface-elevated rounded-xl border border-subtle flex flex-col items-center gap-2">
            <span className="text-xs font-semibold">Merkez Bağ Sayısı</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCentralBonds((b) => Math.max(1, b - 1))}
                className="btn-secondary p-1.5"
                aria-label="Bağ azalt"
              >
                <Minus size={14} />
              </button>
              <span className="w-6 text-center font-bold text-lg text-primary">{centralBonds}</span>
              <button
                type="button"
                onClick={() => setCentralBonds((b) => Math.min(8, b + 1))}
                className="btn-secondary p-1.5"
                aria-label="Bağ artır"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <div className="p-3 bg-surface-elevated rounded-xl border border-subtle flex flex-col items-center gap-2">
            <span className="text-xs font-semibold">Merkez Ortaklanmamış Çift (LP)</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCentralLonePairs((lp) => Math.max(0, lp - 1))}
                className="btn-secondary p-1.5"
                aria-label="LP azalt"
              >
                <Minus size={14} />
              </button>
              <span className="w-6 text-center font-bold text-lg text-cyan-400">{centralLonePairs}</span>
              <button
                type="button"
                onClick={() => setCentralLonePairs((lp) => Math.min(4, lp + 1))}
                className="btn-secondary p-1.5"
                aria-label="LP artır"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <div className="p-3 bg-surface-elevated rounded-xl border border-subtle flex flex-col items-center gap-2">
            <span className="text-xs font-semibold">Çevre Atom Ortaklanmamış Çift</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPeripheralLonePairs((p) => Math.max(0, p - 1))}
                className="btn-secondary p-1.5"
                aria-label="Çevre LP azalt"
              >
                <Minus size={14} />
              </button>
              <span className="w-6 text-center font-bold text-lg text-amber-400">{peripheralLonePairs}</span>
              <button
                type="button"
                onClick={() => setPeripheralLonePairs((p) => Math.min(4, p + 1))}
                className="btn-secondary p-1.5"
                aria-label="Çevre LP artır"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Curriculum note */}
        <div className="p-3 bg-primary/5 border border-primary/20 rounded-xl text-xs text-muted-foreground flex items-center gap-2">
          <HelpCircle size={16} className="text-primary shrink-0" />
          <span>{currentMol.curriculumNote}</span>
        </div>

        {/* Feedback banner */}
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

        {/* Submit */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => loadMolecule(moleculeIndex)}
            className="btn-secondary py-2.5 px-4 text-xs flex items-center gap-1.5"
          >
            <RotateCcw size={14} />
            <span>Sıfırla</span>
          </button>

          <button
            type="button"
            onClick={handleValidate}
            className="btn-primary py-2.5 px-6 font-bold flex items-center gap-2"
          >
            <CheckCircle2 size={18} />
            <span>Oktet & Lewis Doğrula</span>
          </button>
        </div>
      </div>
    </div>
  );
};
