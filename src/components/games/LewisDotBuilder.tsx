import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, RotateCcw, Trophy, HelpCircle, Plus, Minus, Award } from 'lucide-react';
import { GameHud, GameStat, toSub } from './GameHud';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { GAMES_STRINGS, GAMES_CONTENT, fmt } from '../../i18n/gamesStrings';
import { playCorrect, playWrong, playSuccess, playFinish } from '../../audio/sfx';

export interface LewisDotBuilderProps {
  lang: LanguageCode;
  highScore?: number;
  onFinish: (score: number) => void;
  onBack: () => void;
}

/** Names, geometries and curriculum notes are localised in GAMES_CONTENT, keyed by id. */
export interface MoleculeSpec {
  id: string;
  formula: string;
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
}

export const TARGET_MOLECULES: MoleculeSpec[] = [
  {
    id: 'mol-nh3',
    formula: 'NH3',
    tier: 2,
    centralAtom: { symbol: 'N', valenceElectrons: 5, targetOctet: 8 },
    peripheralAtoms: [{ symbol: 'H', count: 3, valenceElectrons: 1, targetOctet: 2 }],
    totalValenceElectrons: 8,
    expectedCentralBonds: 3,
    expectedCentralLonePairs: 1,
    expectedPeripheralBonds: 1,
    expectedPeripheralLonePairs: 0,
    vsepr: 'AX3E1',
  },
  {
    id: 'mol-h2o',
    formula: 'H2O',
    tier: 2,
    centralAtom: { symbol: 'O', valenceElectrons: 6, targetOctet: 8 },
    peripheralAtoms: [{ symbol: 'H', count: 2, valenceElectrons: 1, targetOctet: 2 }],
    totalValenceElectrons: 8,
    expectedCentralBonds: 2,
    expectedCentralLonePairs: 2,
    expectedPeripheralBonds: 1,
    expectedPeripheralLonePairs: 0,
    vsepr: 'AX2E2',
  },
  {
    id: 'mol-ch4',
    formula: 'CH4',
    tier: 2,
    centralAtom: { symbol: 'C', valenceElectrons: 4, targetOctet: 8 },
    peripheralAtoms: [{ symbol: 'H', count: 4, valenceElectrons: 1, targetOctet: 2 }],
    totalValenceElectrons: 8,
    expectedCentralBonds: 4,
    expectedCentralLonePairs: 0,
    expectedPeripheralBonds: 1,
    expectedPeripheralLonePairs: 0,
    vsepr: 'AX4',
  },
  {
    id: 'mol-co2',
    formula: 'CO2',
    tier: 2,
    centralAtom: { symbol: 'C', valenceElectrons: 4, targetOctet: 8 },
    peripheralAtoms: [{ symbol: 'O', count: 2, valenceElectrons: 6, targetOctet: 8 }],
    totalValenceElectrons: 16,
    expectedCentralBonds: 4, // 2 double bonds
    expectedCentralLonePairs: 0,
    expectedPeripheralBonds: 2,
    expectedPeripheralLonePairs: 2,
    vsepr: 'AX2',
  },
  {
    id: 'mol-hcn',
    formula: 'HCN',
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
  },
  {
    id: 'mol-bf3',
    formula: 'BF3',
    tier: 4,
    centralAtom: { symbol: 'B', valenceElectrons: 3, targetOctet: 6 },
    peripheralAtoms: [{ symbol: 'F', count: 3, valenceElectrons: 7, targetOctet: 8 }],
    totalValenceElectrons: 24,
    expectedCentralBonds: 3,
    expectedCentralLonePairs: 0,
    expectedPeripheralBonds: 1,
    expectedPeripheralLonePairs: 3,
    vsepr: 'AX3',
  },
  {
    id: 'mol-pcl5',
    formula: 'PCl5',
    tier: 4,
    centralAtom: { symbol: 'P', valenceElectrons: 5, targetOctet: 10 },
    peripheralAtoms: [{ symbol: 'Cl', count: 5, valenceElectrons: 7, targetOctet: 8 }],
    totalValenceElectrons: 40,
    expectedCentralBonds: 5,
    expectedCentralLonePairs: 0,
    expectedPeripheralBonds: 1,
    expectedPeripheralLonePairs: 3,
    vsepr: 'AX5',
  },
  {
    id: 'mol-sf6',
    formula: 'SF6',
    tier: 4,
    centralAtom: { symbol: 'S', valenceElectrons: 6, targetOctet: 12 },
    peripheralAtoms: [{ symbol: 'F', count: 6, valenceElectrons: 7, targetOctet: 8 }],
    totalValenceElectrons: 48,
    expectedCentralBonds: 6,
    expectedCentralLonePairs: 0,
    expectedPeripheralBonds: 1,
    expectedPeripheralLonePairs: 3,
    vsepr: 'AX6',
  },
];

/** Lit sphere colours per element: face, rim. */
const ATOM_COLORS: Record<string, [string, string]> = {
  O: ['#FF6B7A', '#9C1830'],
  C: ['#8593A8', '#3A475A'],
  N: ['#6FA8FF', '#173680'],
  H: ['#E8EEF6', '#8593A8'],
  F: ['#7DF0A8', '#0E8A52'],
  Cl: ['#5EE6A8', '#06603E'],
  B: ['#F6B73C', '#A86A08'],
  P: ['#FFA65C', '#A3520B'],
  S: ['#FFE066', '#9C7A00'],
};
const colorOf = (sym: string) => ATOM_COLORS[sym] ?? ['#C9D2DC', '#566275'];

const LP_CANDIDATES = [270, 90, 180, 0, 225, 315, 45, 135];
const angDist = (a: number, b: number) => {
  const d = Math.abs(((a - b) % 360) + 360) % 360;
  return d > 180 ? 360 - d : d;
};

export const LewisDotBuilder: React.FC<LewisDotBuilderProps> = ({
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

  const molName = content.molNames[currentMol.id] ?? currentMol.formula;

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
        return [180, 0];
      case 'AX2E2':
        return [142, 38];
      case 'AX3':
        return [270, 150, 30];
      case 'AX3E1':
        return [150, 90, 30];
      case 'AX4':
        return [270, 0, 90, 180];
      case 'AX5':
        return [270, 90, 0, 140, 220];
      case 'AX6':
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
        message: fmt(g.lErrOver, {
          s: currentMol.centralAtom.symbol,
          n: validation.centralTotalElectrons,
          t: currentMol.centralAtom.targetOctet,
        }),
        isCorrect: false,
      });
      return;
    }

    if (!validation.octetSatisfied) {
      playWrong();
      setFeedbackN((n) => n + 1);
      setFeedback({
        message: fmt(g.lErrUnder, { n: validation.centralTotalElectrons, t: currentMol.centralAtom.targetOctet }),
        isCorrect: false,
      });
      return;
    }

    if (!validation.isMatch) {
      playWrong();
      setFeedbackN((n) => n + 1);
      setFeedback({ message: g.lErrMatch, isCorrect: false });
      return;
    }

    // Success! (last molecule gets the bigger fanfare)
    if (moleculeIndex < TARGET_MOLECULES.length - 1) playCorrect();
    else playSuccess();
    const earned = 120;
    setScore((s) => s + earned);
    setFeedback({ message: fmt(g.lOk, { name: molName, v: currentMol.vsepr, n: earned }), isCorrect: true });

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
  const best = Math.max(highScore, score);
  const formula = toSub(currentMol.formula);

  const hud = (
    <GameHud title={t.games.lewisTitle} backLabel={t.games.backToHub} onBack={onBack}>
      <GameStat label={g.score} value={fmt(g.pts, { n: score })} tone="accent" />
      <GameStat label={g.solved} value={`${Math.min(moleculeIndex + 1, total)} / ${total}`} />
    </GameHud>
  );

  if (finished) {
    return (
      <div className="gm-play lewis-builder-container">
        {hud}
        <main className="ky-fit gm-main gm-main--center">
          <section className="ky-card gm-result">
            <span className="ky-tile ky-tile--lg ky-tile--blue" aria-hidden="true">
              <Award size={30} />
            </span>
            <h2 className="ky-disp">{g.finished}</h2>
            <div className="gm-score ky-pop">{score}</div>
            <span className="ky-chip ky-chip--gold">
              <Trophy size={14} aria-hidden="true" /> {g.best}: {best}
            </span>
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

  // ---- Molecule drawing (SVG, centred on 0,0) ----
  const n = peripheralList.length;
  const R = n > 4 ? 92 : 100;
  const rc = 30;
  const rp = n > 4 ? 19 : n > 2 ? 23 : 30;
  const atoms = peripheralList.map((atom, i) => {
    const angle = vseprAngles[i] ?? (i * 360) / n;
    const rad = (angle * Math.PI) / 180;
    return { ...atom, angle, cos: Math.cos(rad), sin: Math.sin(rad), x: Math.cos(rad) * R, y: Math.sin(rad) * R };
  });
  const centralLpAngles = [...LP_CANDIDATES]
    .map((a) => ({ a, d: Math.min(...atoms.map((at) => angDist(a, at.angle)), 360) }))
    .sort((p, q) => q.d - p.d)
    .slice(0, centralLonePairs)
    .map((p) => p.a);
  const pair = (cx: number, cy: number, angleDeg: number, dist: number, key: string) => {
    const r = (angleDeg * Math.PI) / 180;
    const px = cx + Math.cos(r) * dist;
    const py = cy + Math.sin(r) * dist;
    const ox = -Math.sin(r) * 6.5;
    const oy = Math.cos(r) * 6.5;
    return (
      <g key={key} className="gm-lp ky-pop">
        <circle cx={px + ox} cy={py + oy} r="5" />
        <circle cx={px - ox} cy={py - oy} r="5" />
      </g>
    );
  };
  const [cFace, cRim] = colorOf(currentMol.centralAtom.symbol);
  const valencePct = Math.min(100, (validation.placedElectrons / currentMol.totalValenceElectrons) * 100);
  const charge = validation.centralFormalCharge > 0 ? `+${validation.centralFormalCharge}` : String(validation.centralFormalCharge);

  const tool = (
    labelText: string,
    icon: React.ReactNode,
    value: number,
    dec: () => void,
    inc: () => void,
    tone: string
  ) => (
    <div className={`ky-card gm-tool gm-tool--${tone}`} role="group" aria-label={labelText}>
      {icon}
      <span className="ky-fs-13 gm-tool-label">{labelText}</span>
      <span className="ky-disp ky-mono gm-tool-val" aria-live="polite">{value}</span>
      <span className="gm-tool-keys">
        <button type="button" onClick={dec} className="ky-icon-btn" aria-label={fmt(g.lDec, { x: labelText })}>
          <Minus size={16} strokeWidth={2.8} aria-hidden="true" />
        </button>
        <button type="button" onClick={inc} className="ky-icon-btn" aria-label={fmt(g.lInc, { x: labelText })}>
          <Plus size={16} strokeWidth={2.8} aria-hidden="true" />
        </button>
      </span>
    </div>
  );

  return (
    <div className="gm-play lewis-builder-container">
      {hud}

      <main className="ky-fit ky-pane gm-main">
        <div className="gm-mol-title">
          <p className="ky-eyebrow">
            {fmt(g.lTier, { n: currentMol.tier })} · VSEPR {currentMol.vsepr}
          </p>
          <h2 className="ky-disp ky-fs-24">
            {molName} <span className="ky-mono gm-mol-formula" dir="ltr">{formula}</span>
          </h2>
        </div>

        <section className="ky-stage ky-lead gm-lewis-stage ky-persp lewis-canvas-stage" aria-label={fmt(g.lWorkspace, { f: formula })}>
          <div className="ky-floor" aria-hidden="true" />
          <div className="gm-lewis-rig" key={currentMol.id}>
            <svg viewBox="-160 -125 320 250" role="img" aria-label={`${formula} · ${content.molGeo[currentMol.id] ?? currentMol.vsepr}`}>
              <g className="gm-bonds">
                {atoms.map((a, i) => {
                  const offs = a.bondOrder === 3 ? [-8, 0, 8] : a.bondOrder === 2 ? [-5.5, 5.5] : [0];
                  return offs.map((o, j) => {
                    const ox = -a.sin * o;
                    const oy = a.cos * o;
                    return (
                      <line
                        key={`b-${i}-${j}`}
                        x1={a.cos * (rc - 2) + ox}
                        y1={a.sin * (rc - 2) + oy}
                        x2={a.cos * (R - rp + 2) + ox}
                        y2={a.sin * (R - rp + 2) + oy}
                      />
                    );
                  });
                })}
              </g>
              {atoms.map((a, i) => {
                const [face, rim] = colorOf(a.symbol);
                return (
                  <g key={`p-${i}`}>
                    <circle cx={a.x} cy={a.y} r={rp} fill={face} stroke={rim} strokeWidth="3" className="gm-sphere" />
                    <text x={a.x} y={a.y + rp * 0.3} fontSize={rp * 0.85} className="gm-atom-sym">
                      {a.symbol}
                    </text>
                    {a.targetOctet > 2 &&
                      [0, 90, -90, 180].slice(0, peripheralLonePairs).map((rel, k) => pair(a.x, a.y, a.angle + rel, rp + 11, `pl-${i}-${k}`))}
                  </g>
                );
              })}
              <circle cx="0" cy="0" r={rc} fill={cFace} stroke={cRim} strokeWidth="3" className="gm-sphere" />
              <text x="0" y={rc * 0.3} fontSize="26" className="gm-atom-sym">
                {currentMol.centralAtom.symbol}
              </text>
              {centralLpAngles.map((ang, k) => pair(0, 0, ang, rc + 12, `cl-${k}`))}
            </svg>
          </div>
          <span className={`ky-chip gm-lewis-badge ${validation.octetSatisfied ? 'ky-chip--ok' : 'ky-chip--bad'}`}>
            {fmt(g.lCentral, { a: validation.centralTotalElectrons, b: currentMol.centralAtom.targetOctet })}
          </span>
        </section>

        <section className="ky-well gm-valence">
          <div className="gm-valence-main">
            <p className="ky-fs-13 gm-valence-label">{g.lValence}</p>
            <div className="ky-track">
              <div className="ky-fill ky-fill--gold" style={{ inlineSize: `${valencePct}%` }} />
            </div>
          </div>
          <p className="ky-disp ky-mono gm-valence-num">
            {validation.placedElectrons}
            <span> / {currentMol.totalValenceElectrons}</span>
          </p>
        </section>

        <div className="gm-chiprow">
          <span className="ky-chip ky-mono">{fmt(g.lCharge, { c: charge })}</span>
          <span className="ky-chip ky-chip--accent">{content.molGeo[currentMol.id] ?? currentMol.vsepr}</span>
        </div>

        <section className="gm-tools" aria-label={g.lTools}>
          {tool(
            g.lBonds,
            <svg aria-hidden="true" width="34" height="20" viewBox="0 0 34 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"><path d="M3 10h28" /></svg>,
            centralBonds,
            () => setCentralBonds((b) => Math.max(1, b - 1)),
            () => setCentralBonds((b) => Math.min(8, b + 1)),
            'accent'
          )}
          {tool(
            g.lLp,
            <svg aria-hidden="true" width="34" height="20" viewBox="0 0 34 20" fill="currentColor"><circle cx="10" cy="10" r="5" /><circle cx="24" cy="10" r="5" /></svg>,
            centralLonePairs,
            () => setCentralLonePairs((lp) => Math.max(0, lp - 1)),
            () => setCentralLonePairs((lp) => Math.min(4, lp + 1)),
            'gold'
          )}
          {tool(
            g.lPeriLp,
            <svg aria-hidden="true" width="34" height="20" viewBox="0 0 34 20" fill="currentColor"><circle cx="10" cy="10" r="5" /><circle cx="24" cy="10" r="5" /></svg>,
            peripheralLonePairs,
            () => setPeripheralLonePairs((p) => Math.max(0, p - 1)),
            () => setPeripheralLonePairs((p) => Math.min(4, p + 1)),
            'violet'
          )}
        </section>

        <p className="gm-note">
          <HelpCircle size={18} aria-hidden="true" />
          <span>{content.molNotes[currentMol.id] ?? g.lHelp}</span>
        </p>
      </main>

      <footer className="ky-screen-foot ky-screen-foot--stack gm-foot">
        <p
          key={feedback ? feedbackN + (feedback.isCorrect ? 'ok' : 'bad') : 'idle'}
          role="status"
          className={`gm-status ky-fs-14 ${feedback ? (feedback.isCorrect ? 'ok ky-pop' : 'bad ky-shake') : ''}`}
        >
          {feedback ? feedback.message : g.lHelp}
        </p>
        <div className="gm-foot-row">
          <button type="button" onClick={() => loadMolecule(moleculeIndex)} className="ky-btn ky-btn--quiet" aria-label={g.reset} title={g.reset}>
            <RotateCcw size={18} aria-hidden="true" />
          </button>
          <button type="button" onClick={handleValidate} disabled={solvedNow} className="ky-btn ky-btn--primary ky-grow gm-cta">
            <CheckCircle2 size={18} aria-hidden="true" />
            <span>{g.check}</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
