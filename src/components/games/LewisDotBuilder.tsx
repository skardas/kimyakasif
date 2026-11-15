import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, RotateCcw, Sparkles, Trophy, HelpCircle, Plus, Minus, Award } from 'lucide-react';
import { GameHud, GameStat } from './GameHud';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { GAMES_STRINGS } from '../../i18n/gamesStrings';
import { ChemFormula } from '../common/ChemFormula';
import { playCorrect, playWrong, playSuccess, playFinish } from '../../audio/sfx';

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
  lang,
  highScore = 0,
  onFinish,
  onBack,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const g = GAMES_STRINGS[lang] ?? GAMES_STRINGS.en;
  const [finished, setFinished] = useState(false);
  const [feedbackN, setFeedbackN] = useState(0);
  const [moleculeIndex, setMoleculeIndex] = useState(0);
  const currentMol = TARGET_MOLECULES[moleculeIndex] || TARGET_MOLECULES[0];

  // User input states for central atom and peripheral atoms
  const [centralBonds, setCentralBonds] = useState<number>(1);
  const [centralLonePairs, setCentralLonePairs] = useState<number>(0);
  const [peripheralLonePairs, setPeripheralLonePairs] = useState<number>(0);

  const [score, setScore] = useState(0);
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

  // Compute peripheral atom roster with expected bond order
  const peripheralList = useMemo(() => {
    const list: { symbol: string; bondOrder: number; targetOctet: number }[] = [];
    currentMol.peripheralAtoms.forEach((p) => {
      let bondOrder = 1;
      if (currentMol.id === 'mol-co2') {
        bondOrder = 2; // C=O
      } else if (currentMol.id === 'mol-hcn') {
        bondOrder = p.symbol === 'N' ? 3 : 1; // C≡N, C-H
      }
      for (let i = 0; i < p.count; i++) {
        list.push({
          symbol: p.symbol,
          bondOrder,
          targetOctet: p.targetOctet,
        });
      }
    });
    return list;
  }, [currentMol]);

  // VSEPR geometry angles around central atom (degrees)
  const vseprAngles = useMemo(() => {
    switch (currentMol.vsepr) {
      case 'AX2':
        // Linear 180°: left (180°), right (0°)
        return [180, 0];
      case 'AX2E2':
        // Bent 104.5°: bottom-left (142°), bottom-right (38°)
        return [142, 38];
      case 'AX3':
        // Trigonal planar 120°: top (270°), bottom-left (150°), bottom-right (30°)
        return [270, 150, 30];
      case 'AX3E1':
        // Trigonal pyramidal ~107°: bottom-left (150°), bottom (90°), bottom-right (30°)
        return [150, 90, 30];
      case 'AX4':
        // Tetrahedral: top (270°), right (0°), bottom (90°), left (180°)
        return [270, 0, 90, 180];
      case 'AX5':
        // Trigonal bipyramidal: axial top (270°), axial bottom (90°), equatorial (0°, 140°, 220°)
        return [270, 90, 0, 140, 220];
      case 'AX6':
        // Octahedral: top (270°), bottom (90°), right (0°), left (180°), diagonals (35°, 215°)
        return [270, 90, 0, 180, 35, 215];
      default:
        return peripheralList.map((_, i) => (i * 360) / (peripheralList.length || 1));
    }
  }, [currentMol.vsepr, peripheralList]);

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

  const handleReplay = () => {
    if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
    setScore(0);
    setFinished(false);
    loadMolecule(0);
  };

  // Check / Validate submission
  const handleValidate = () => {
    // Contract Check: E2E test T2.F06.04 checks that NH3 with 4 bonds + 1 lone pair = 10 e- is rejected
    if (validation.centralTotalElectrons > currentMol.centralAtom.targetOctet) {
      playWrong();
      setFeedbackN((n) => n + 1);
      setFeedback({
        message: `Hata: Merkez atom (${currentMol.centralAtom.symbol}) çevresinde ${validation.centralTotalElectrons} elektron oldu! Oktet kuralı (${currentMol.centralAtom.targetOctet} e⁻) ihlal edildi.`,
        isCorrect: false,
      });
      return;
    }

    if (!validation.octetSatisfied) {
      playWrong();
      setFeedbackN((n) => n + 1);
      setFeedback({
        message: `Oktet/Dublet tamamlanmadı: Merkez atomun çevresinde ${validation.centralTotalElectrons} elektron var, hedef ${currentMol.centralAtom.targetOctet} elektron.`,
        isCorrect: false,
      });
      return;
    }

    if (!validation.isMatch) {
      playWrong();
      setFeedbackN((n) => n + 1);
      setFeedback({
        message: `Bağ ve ortaklanmamış elektron çifti sayıları molekülün doğru rezonans yapısına uymuyor.`,
        isCorrect: false,
      });
      return;
    }

    // Success! (last molecule gets the bigger fanfare)
    if (moleculeIndex < TARGET_MOLECULES.length - 1) playCorrect();
    else playSuccess();
    const earned = 120;
    setScore((s) => s + earned);
    setFeedback({
      message: `Mükemmel! ${currentMol.nameTr} Lewis yapısı ve VSEPR geometrisi (${currentMol.vsepr}) doğrulandı. (+120 Puan)`,
      isCorrect: true,
    });

    if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
    advanceTimeoutRef.current = setTimeout(() => {
      if (moleculeIndex < TARGET_MOLECULES.length - 1) {
        loadMolecule(moleculeIndex + 1);
      } else {
        setFinished(true);
        playFinish();
        onFinish(score + earned);
      }
    }, 1800);
  };

  const total = TARGET_MOLECULES.length;
  const solvedNow = feedback?.isCorrect === true;

  if (finished) {
    return (
      <div className="gm gm--narrow lewis-builder-container">
        <GameHud title={t.games.lewisTitle} backLabel={t.games.backToHub} onBack={onBack}>
          <GameStat icon={<Trophy size={16} aria-hidden="true" />} label={g.best} value={Math.max(highScore, score)} tone="gold" />
          <GameStat icon={<Sparkles size={16} aria-hidden="true" />} label={g.score} value={score} tone="accent" />
        </GameHud>
        <div className="ky-card gm-result">
          <span className="ky-tile ky-tile--lg ky-tile--blue" aria-hidden="true">
            <Award size={30} />
          </span>
          <h2>{g.finished}</h2>
          <div className="gm-score ky-pop">{score}</div>
          <span className="ky-chip ky-chip--gold">
            <Trophy size={14} aria-hidden="true" /> {g.best}: {Math.max(highScore, score)}
          </span>
          <div className="gm-actions">
            <button type="button" onClick={handleReplay} className="ky-btn ky-btn--primary" data-sfx="start">
              <RotateCcw size={18} aria-hidden="true" />
              <span>{g.replay}</span>
            </button>
            <button type="button" onClick={onBack} className="ky-btn ky-btn--quiet">
              <ArrowLeft size={18} aria-hidden="true" className="gm-flip" />
              <span>{g.backToGames}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const stepper = (
    label: string,
    value: number,
    dec: () => void,
    inc: () => void,
    decLabel: string,
    incLabel: string,
    color: string
  ) => (
    <div className="ky-well gm-ctrl">
      <span>{label}</span>
      <div className="gm-stepper">
        <button type="button" onClick={dec} className="ky-icon-btn" aria-label={decLabel}>
          <Minus size={16} aria-hidden="true" />
        </button>
        <span className="gm-coef" style={{ color }} aria-live="polite">{value}</span>
        <button type="button" onClick={inc} className="ky-icon-btn" aria-label={incLabel}>
          <Plus size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="gm lewis-builder-container">
      <GameHud title={t.games.lewisTitle} backLabel={t.games.backToHub} onBack={onBack}>
        <GameStat icon={<Trophy size={16} aria-hidden="true" />} label={g.best} value={Math.max(highScore, score)} tone="gold" />
        <GameStat icon={<Sparkles size={16} aria-hidden="true" />} label={g.score} value={score} tone="accent" />
      </GameHud>

      <div className="ky-track gm-progress" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={moleculeIndex}>
        <div className="ky-fill" style={{ inlineSize: `${(moleculeIndex / total) * 100}%` }} />
      </div>

      <div className="ky-card gm-board lewis-board">
        <div className="gm-eyebrow-row">
          <div>
            <span className="ky-eyebrow">
              KADEME {currentMol.tier} &bull; {moleculeIndex + 1} / {total}
            </span>
            <h2 className="gm-title">
              {currentMol.nameTr} <span className="ky-mono" style={{ color: 'var(--accent)' }}>(<ChemFormula formula={currentMol.formula} />)</span>
            </h2>
          </div>
          <div className="gm-chiprow">
            <span className="ky-chip ky-chip--accent">VSEPR: {currentMol.vsepr}</span>
            <span className="ky-chip">{currentMol.geometryTr}</span>
          </div>
        </div>

        <div className="ky-stage gm-lewis-stage lewis-canvas-stage ky-lead">
          <div className="ky-floor" aria-hidden="true" />
          <div className="gm-lewis-canvas">
            <svg viewBox="-128 -128 256 256" aria-hidden="true">
              {peripheralList.map((atom, i) => {
                const angle = vseprAngles[i] ?? (i * 360) / peripheralList.length;
                const rad = (angle * Math.PI) / 180;
                const cos = Math.cos(rad);
                const sin = Math.sin(rad);
                const rStart = 38;
                const rEnd = 68;

                if (atom.bondOrder === 2) {
                  const perpX = -sin * 3;
                  const perpY = cos * 3;
                  return (
                    <g key={`bond-${i}`}>
                      <line
                        x1={cos * rStart + perpX}
                        y1={sin * rStart + perpY}
                        x2={cos * rEnd + perpX}
                        y2={sin * rEnd + perpY}
                        className="gm-bond"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1={cos * rStart - perpX}
                        y1={sin * rStart - perpY}
                        x2={cos * rEnd - perpX}
                        y2={sin * rEnd - perpY}
                        className="gm-bond"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </g>
                  );
                } else if (atom.bondOrder === 3) {
                  const perpX = -sin * 4;
                  const perpY = cos * 4;
                  return (
                    <g key={`bond-${i}`}>
                      <line
                        x1={cos * rStart + perpX}
                        y1={sin * rStart + perpY}
                        x2={cos * rEnd + perpX}
                        y2={sin * rEnd + perpY}
                        className="gm-bond"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1={cos * rStart}
                        y1={sin * rStart}
                        x2={cos * rEnd}
                        y2={sin * rEnd}
                        className="gm-bond"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1={cos * rStart - perpX}
                        y1={sin * rStart - perpY}
                        x2={cos * rEnd - perpX}
                        y2={sin * rEnd - perpY}
                        className="gm-bond"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </g>
                  );
                } else {
                  return (
                    <line
                      key={`bond-${i}`}
                      x1={cos * rStart}
                      y1={sin * rStart}
                      x2={cos * rEnd}
                      y2={sin * rEnd}
                      className="gm-bond"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  );
                }
              })}
            </svg>

            <div className="gm-central">
              <b>{currentMol.centralAtom.symbol}</b>
              <small>
                Yük: {validation.centralFormalCharge > 0 ? `+${validation.centralFormalCharge}` : validation.centralFormalCharge}
              </small>
              {Array.from({ length: centralLonePairs }).map((_, lpIdx) => (
                <div
                  key={`clp-${lpIdx}`}
                  className="gm-lp"
                  style={{
                    top: lpIdx === 0 ? '-16px' : 'auto',
                    bottom: lpIdx === 1 ? '-16px' : 'auto',
                    left: lpIdx === 2 ? '-16px' : 'auto',
                    right: lpIdx === 3 ? '-16px' : 'auto',
                  }}
                >
                  <span />
                  <span />
                </div>
              ))}
            </div>

            {peripheralList.map((atom, i) => {
              const angle = vseprAngles[i] ?? (i * 360) / peripheralList.length;
              const rad = (angle * Math.PI) / 180;
              const posX = Math.round(Math.cos(rad) * 86);
              const posY = Math.round(Math.sin(rad) * 86);
              return (
                <div
                  key={`peripheral-atom-${i}`}
                  className="gm-peri"
                  style={{ transform: `translate(${posX}px, ${posY}px)` }}
                  title={`${atom.symbol} (${currentMol.geometryTr})`}
                >
                  {atom.symbol}
                </div>
              );
            })}
          </div>

          <div className="gm-chiprow">
            <span className={`ky-chip ${validation.octetSatisfied ? 'ky-chip--ok' : 'ky-chip--bad'}`}>
              Merkez Elektron: {validation.centralTotalElectrons} / {currentMol.centralAtom.targetOctet}
            </span>
            <span className="ky-chip">Bağ Elektronu: {validation.bondingElectrons}</span>
            <span className="ky-chip">Ortaklanmamış e⁻: {validation.lonePairElectrons}</span>
            <span className="ky-chip">
              Toplam Yerleşen: {validation.placedElectrons} / {currentMol.totalValenceElectrons}
            </span>
          </div>
        </div>

        <div className="gm-ctrl-grid">
          {stepper('Merkez Bağ Sayısı', centralBonds, () => setCentralBonds((b) => Math.max(1, b - 1)), () => setCentralBonds((b) => Math.min(8, b + 1)), 'Bağ azalt', 'Bağ artır', 'var(--accent)')}
          {stepper('Merkez Ortaklanmamış Çift (LP)', centralLonePairs, () => setCentralLonePairs((lp) => Math.max(0, lp - 1)), () => setCentralLonePairs((lp) => Math.min(4, lp + 1)), 'LP azalt', 'LP artır', 'var(--gold)')}
          {stepper('Çevre Atom Ortaklanmamış Çift', peripheralLonePairs, () => setPeripheralLonePairs((p) => Math.max(0, p - 1)), () => setPeripheralLonePairs((p) => Math.min(4, p + 1)), 'Çevre LP azalt', 'Çevre LP artır', 'var(--violet)')}
        </div>

        <div className="gm-note">
          <HelpCircle size={18} aria-hidden="true" />
          <span>{currentMol.curriculumNote}</span>
        </div>

        {feedback && (
          <div
            key={feedbackN + (feedback.isCorrect ? 'ok' : 'bad')}
            className={`gm-feedback ${feedback.isCorrect ? 'ok ky-pop' : 'bad ky-shake'}`}
            role="status"
          >
            {feedback.message}
          </div>
        )}

        <div className="gm-actions">
          <button type="button" onClick={() => loadMolecule(moleculeIndex)} className="ky-btn ky-btn--quiet">
            <RotateCcw size={16} aria-hidden="true" />
            <span>Sıfırla</span>
          </button>
          <button type="button" onClick={handleValidate} disabled={solvedNow} className="ky-btn ky-btn--primary">
            <CheckCircle2 size={18} aria-hidden="true" />
            <span>Oktet &amp; Lewis Doğrula</span>
          </button>
        </div>
      </div>
    </div>
  );
};
