import React, { useState, useEffect, useMemo } from 'react';
import { Square, RotateCcw, CheckCircle2, ArrowLeft } from 'lucide-react';
import { GameHud, GameStat } from './GameHud';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { GAMES_STRINGS, fmt } from '../../i18n/gamesStrings';
import { playDrop, playBubble, playCorrect, playWrong, playSuccess } from '../../audio/sfx';

export interface TitrationSimulatorProps {
  lang: LanguageCode;
  highScore?: number;
  onFinish: (score: number) => void;
  onBack: () => void;
}

export type IndicatorType = 'phenolphthalein' | 'methyl-orange' | 'bromothymol-blue';

export function calculatePhCurve(volumeAddedMl: number): {
  clampedVol: number;
  ph: number;
  status: 'acidic' | 'equivalence' | 'basic' | 'overshot';
  color: string;
} {
  const safeVol = Number.isFinite(volumeAddedMl) ? volumeAddedMl : 0;
  const vEquiv = 25.0;
  const clampedVol = Math.min(50.0, Math.max(0, safeVol));
  let phVal: number;

  if (Math.abs(clampedVol - vEquiv) <= 0.05) {
    phVal = 7.0;
  } else if (clampedVol < vEquiv) {
    const fraction = clampedVol / vEquiv;
    phVal = 1.0 + Math.log10(1 + fraction * 9);
    phVal = Math.min(phVal, 6.5);
  } else {
    const excessVol = clampedVol - vEquiv;
    const totalVol = 25.0 + clampedVol;
    const excessMolarity = (excessVol * 0.100) / totalVol;
    const pOH = -Math.log10(excessMolarity);
    phVal = Math.min(13.0, Math.max(7.5, parseFloat((14.0 - pOH).toFixed(2))));
  }

  let status: 'acidic' | 'equivalence' | 'basic' | 'overshot' = 'acidic';
  let color = '#ef4444'; // Red acidic

  if (clampedVol >= 50.0) {
    status = 'overshot';
    color = 'deep-magenta';
  } else if (Math.abs(clampedVol - vEquiv) <= 0.05) {
    status = 'equivalence';
    color = '#a855f7'; // Purple equivalence
  } else if (clampedVol > vEquiv) {
    status = 'basic';
    color = '#3b82f6'; // Blue basic
  }

  return {
    clampedVol,
    ph: parseFloat(phVal.toFixed(2)),
    status,
    color,
  };
}


const COMMA_LANGS: LanguageCode[] = ['tr', 'de', 'fr', 'ru', 'ku'];

export const TitrationSimulator: React.FC<TitrationSimulatorProps> = ({
  lang,
  highScore = 0,
  onFinish,
  onBack,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const g = GAMES_STRINGS[lang] ?? GAMES_STRINGS.en;
  const [volumeDispensed, setVolumeDispensed] = useState(0.0);
  const [selectedIndicator, setSelectedIndicator] = useState<IndicatorType>('phenolphthalein');
  const [stirrerOn, setStirrerOn] = useState(true);
  const [flowRate, setFlowRate] = useState<0 | 0.2 | 1.0 | 5.0>(0); // mL/s
  const [score, setScore] = useState(0);
  const [hasFinished, setHasFinished] = useState(false);
  const [dropN, setDropN] = useState(0);
  const [historyPoints, setHistoryPoints] = useState<{ v: number; ph: number }[]>([
    { v: 0, ph: 1.0 },
  ]);

  const num = (v: number, d: number) => {
    const s = v.toFixed(d);
    return COMMA_LANGS.includes(lang) ? s.replace('.', ',') : s;
  };

  const curveData = useMemo(() => calculatePhCurve(volumeDispensed), [volumeDispensed]);

  // Color interpolation based on selected indicator
  const flaskColor = useMemo(() => {
    const ph = curveData.ph;
    if (curveData.status === 'overshot') {
      return '#be185d'; // Deep magenta
    }

    if (selectedIndicator === 'phenolphthalein') {
      if (ph < 8.2) return 'rgba(240, 249, 255, 0.25)'; // Colorless clear
      if (ph <= 10.0) return '#ec4899'; // Vibrant pink
      return '#be185d'; // Deep magenta
    } else if (selectedIndicator === 'methyl-orange') {
      if (ph <= 3.1) return '#ef4444'; // Red
      if (ph <= 4.4) return '#f97316'; // Orange
      return '#eab308'; // Yellow
    } else {
      // Bromothymol Blue
      if (ph <= 6.0) return '#eab308'; // Yellow
      if (ph <= 7.6) return '#22c55e'; // Green at equivalence!
      return '#3b82f6'; // Blue
    }
  }, [curveData, selectedIndicator]);

  // Continuous flow loop
  useEffect(() => {
    if (flowRate === 0 || hasFinished) return;

    const intervalMs = 100;
    const stepMl = (flowRate * intervalMs) / 1000;

    const timer = setInterval(() => {
      setVolumeDispensed((prev) => Math.min(50.0, prev + stepMl));
    }, intervalMs);

    return () => clearInterval(timer);
  }, [flowRate, hasFinished]);

  // Stop continuous flow when reaching maximum capacity
  useEffect(() => {
    if (volumeDispensed >= 50.0 && flowRate > 0) {
      setFlowRate(0);
    }
  }, [volumeDispensed, flowRate]);

  // Update history points for SVG chart
  useEffect(() => {
    setHistoryPoints((prev) => {
      const last = prev[prev.length - 1];
      if (!last || Math.abs(last.v - curveData.clampedVol) >= 0.5 || (curveData.clampedVol === 50.0 && last.v !== 50.0)) {
        return [...prev, { v: curveData.clampedVol, ph: curveData.ph }];
      }
      return prev;
    });
  }, [curveData]);

  // Dropwise add (+0.05 mL)
  const handleDropwise = () => {
    if (hasFinished || volumeDispensed >= 50.0) return;
    playDrop();
    setDropN((n) => n + 1);
    setVolumeDispensed((prev) => Math.min(50.0, parseFloat((prev + 0.05).toFixed(2))));
  };

  // Toggle magnetic stirrer
  const toggleStirrer = () => {
    if (!stirrerOn) playBubble();
    setStirrerOn((s) => !s);
  };

  // Check endpoint / stop titration
  const handleStopTitration = () => {
    setFlowRate(0);
    setHasFinished(true);

    const deltaV = Math.abs(volumeDispensed - 25.0);
    let pts = 0;
    if (deltaV <= 0.05) {
      pts = 300; // Perfect equivalence!
      playSuccess();
    } else if (deltaV <= 0.20) {
      pts = 200;
      playCorrect();
    } else if (deltaV <= 1.0) {
      pts = 100;
      playCorrect();
    } else {
      pts = 30;
      playWrong();
    }

    setScore(pts);
    onFinish(pts);
  };

  // Reset simulator
  const handleReset = () => {
    setVolumeDispensed(0.0);
    setFlowRate(0);
    setHasFinished(false);
    setScore(0);
    setHistoryPoints([{ v: 0, ph: 1.0 }]);
  };

  const deltaV = Math.abs(volumeDispensed - 25.0);
  const indicators: { id: IndicatorType; label: string; dot: string }[] = [
    { id: 'phenolphthalein', label: g.tPhenol, dot: '#ec4899' },
    { id: 'methyl-orange', label: g.tMethyl, dot: '#f97316' },
    { id: 'bromothymol-blue', label: g.tBromo, dot: '#22c55e' },
  ];
  const activeIndicator = indicators.find((i) => i.id === selectedIndicator) ?? indicators[0];
  const canDispense = !hasFinished && volumeDispensed < 50.0;
  const statusLabel =
    curveData.status === 'equivalence' ? g.tEquiv : curveData.status === 'basic' ? g.tBasic : curveData.status === 'overshot' ? g.tOvershot : g.tAcidic;
  const clear = flaskColor.startsWith('rgba');
  const phColor = clear ? '#F2F6FB' : flaskColor === '#ec4899' ? '#F7A8D8' : flaskColor;

  // Burette geometry (artboard: tube y 14..184, liquid inside)
  const tubeTop = 17;
  const tubeBottom = 181;
  const liquidTop = tubeTop + (tubeBottom - tubeTop) * (curveData.clampedVol / 50);
  const flowing = flowRate > 0 && canDispense;

  // Mini curve
  const cx = (v: number) => 8 + (v / 50) * 136;
  const cy = (ph: number) => 88 - (ph / 14) * 80;
  const curvePath = historyPoints
    .map((pt, i) => `${i === 0 ? 'M' : 'L'}${cx(pt.v).toFixed(1)} ${cy(pt.ph).toFixed(1)}`)
    .join(' ');

  const flowKey = (rate: 0.2 | 1.0, labelText: string, sub: string) => (
    <button
      type="button"
      className={`ky-btn ky-btn--quiet gm-dose${flowRate === rate ? ' is-on' : ''}`}
      aria-pressed={flowRate === rate}
      disabled={!canDispense}
      onClick={() => setFlowRate(flowRate === rate ? 0 : rate)}
    >
      {flowRate === rate ? <Square size={14} fill="currentColor" aria-hidden="true" /> : null}
      <span className="gm-dose-main">{flowRate === rate ? g.tStop : labelText}</span>
      <span className="gm-dose-sub ky-mono" dir="ltr">{sub}</span>
    </button>
  );

  return (
    <div className="gm-play titration-simulator-container">
      <GameHud title={t.games.titrationTitle} backLabel={t.games.backToHub} onBack={onBack}>
        <GameStat label={g.tIndicator} value={activeIndicator.label} tone="violet" mono={false} />
        {hasFinished && <GameStat label={g.score} value={fmt(g.pts, { n: score })} tone="accent" />}
        {!hasFinished && highScore > 0 && <GameStat label={g.best} value={fmt(g.recordN, { n: highScore })} />}
      </GameHud>

      <main className="ky-fit ky-pane gm-main">
        <section className="ky-stage ky-lead gm-titr-stage apparatus-stage" aria-label={g.tApparatus}>
          <div className="ky-floor" aria-hidden="true" />
          <svg className="gm-app-svg" viewBox="0 0 190 330" aria-hidden="true">
            <rect x="84" y="14" width="22" height="170" rx="5" fill="rgba(255,255,255,.08)" stroke="#8CF5E7" strokeWidth="2.5" />
            <rect
              className="gm-bur-liquid"
              x="87"
              y={liquidTop}
              width="16"
              height={Math.max(0, tubeBottom - liquidTop)}
              rx="3"
              fill="#6FA8FF"
              opacity=".85"
            />
            <g stroke="#E8EEF6" strokeWidth="1.5" opacity=".7">
              <path d="M106 40h8" />
              <path d="M106 70h12" />
              <path d="M106 100h8" />
              <path d="M106 130h12" />
              <path d="M106 160h8" />
            </g>
            <path d="M95 184v22" stroke="#8CF5E7" strokeWidth="5" strokeLinecap="round" />
            <rect x="78" y="190" width="34" height="9" rx="4.5" fill="#F6B73C" className={flowing ? 'gm-cock is-open' : 'gm-cock'} />
            {(flowing || dropN > 0) && (
              <circle key={flowing ? 'flow' : `d-${dropN}`} cx="95" cy="214" r="5" fill="#6FA8FF" className={flowing ? 'gm-drip is-loop' : 'gm-drip'} />
            )}
            <path
              d="M82 236h26v22l34 50a8 8 0 0 1-7 13H55a8 8 0 0 1-7-13l34-50z"
              fill="rgba(255,255,255,.07)"
              stroke="#8CF5E7"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path className="gm-flask-liquid" d="M68 284h54l18 26a6 6 0 0 1-5 9H55a6 6 0 0 1-5-9z" fill={clear ? 'rgba(220,235,255,.22)' : flaskColor} opacity=".92" />
            <ellipse className="gm-flask-surface" cx="95" cy="284" rx="27" ry="4" fill={clear ? 'rgba(255,255,255,.35)' : '#FFD9EE'} opacity={clear ? 1 : 0.55} />
            {stirrerOn && <ellipse className="gm-vortex" cx="95" cy="306" rx="12" ry="3" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2" />}
          </svg>

          <div className="gm-titr-side">
            <div className="gm-readout">
              <p className="gm-readout-label">pH</p>
              <p className="ky-disp ky-mono gm-readout-ph" style={{ color: phColor }} aria-live="polite">
                {num(curveData.ph, 1)}
              </p>
              <span className={`gm-ph-tag is-${curveData.status}`}>{statusLabel}</span>
            </div>
            <div className="gm-readout">
              <p className="gm-readout-label">{g.tAdded}</p>
              <p className="ky-mono gm-readout-vol">
                {num(volumeDispensed, 2)} <span>mL</span>
              </p>
            </div>
            <svg className="gm-mini-curve" viewBox="0 0 150 96" role="img" aria-label={g.tCurve}>
              <path d="M6 90V6" stroke="rgba(255,255,255,.3)" strokeWidth="1.5" />
              <path d="M6 90h140" stroke="rgba(255,255,255,.3)" strokeWidth="1.5" />
              <path d={`M${cx(25)} 6V90`} stroke="rgba(167,139,250,.55)" strokeWidth="1.2" strokeDasharray="3 3" />
              <path d={curvePath} fill="none" stroke="#2DD9C3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx={cx(curveData.clampedVol)} cy={cy(curveData.ph)} r="5" fill="#F6B73C" />
            </svg>
          </div>
        </section>

        <section className="ky-card gm-task">
          <p className="ky-fs-16 gm-task-title">{g.tTask}</p>
          <p className="ky-fs-13 gm-task-desc">{g.tTaskDesc}</p>
        </section>

        <div className="ky-seg gm-ind" role="group" aria-label={g.tIndicator}>
          {indicators.map((ind) => (
            <button key={ind.id} type="button" aria-pressed={selectedIndicator === ind.id} onClick={() => setSelectedIndicator(ind.id)} className="ky-fs-13">
              <span className="gm-dot" style={{ background: ind.dot }} aria-hidden="true" />
              {ind.label}
            </button>
          ))}
        </div>

        <div className="gm-doses valve-controls-box">
          <button type="button" onClick={handleDropwise} disabled={!canDispense} className="ky-btn ky-btn--quiet gm-dose">
            <span className="gm-dose-main">{g.tDrop}</span>
            <span className="gm-dose-sub ky-mono" dir="ltr">+{num(0.05, 2)} mL</span>
          </button>
          {flowKey(0.2, g.tSlow, `${num(0.2, 1)} mL/s`)}
          {flowKey(1.0, g.tFast, `${num(1, 1)} mL/s`)}
        </div>

        <div className="ky-well gm-stir">
          <span className="ky-fs-14">{g.tStirrer}</span>
          <button type="button" role="switch" aria-checked={stirrerOn} aria-label={g.tStirrer} className="ky-switch" onClick={toggleStirrer} />
        </div>
      </main>

      <footer className={`ky-screen-foot gm-foot${hasFinished ? ' ky-screen-foot--stack' : ''}`}>
        {hasFinished && (
          <p className={`gm-status ky-fs-14 ${score >= 100 ? 'ok ky-pop' : 'bad ky-shake'}`} role="status">
            {score >= 300
              ? fmt(g.tPerfect, { d: num(deltaV, 2), n: score })
              : fmt(g.tResult, { d: num(deltaV, 2), n: score })}
          </p>
        )}
        <div className="gm-foot-row">
          <button type="button" onClick={hasFinished ? onBack : handleReset} className="ky-btn ky-btn--quiet">
            {hasFinished ? <ArrowLeft size={16} aria-hidden="true" className="gm-flip" /> : <RotateCcw size={16} aria-hidden="true" />}
            <span className={hasFinished ? "gm-narrow-sr" : undefined}>{hasFinished ? g.backToGames : g.reset}</span>
          </button>
          {hasFinished ? (
            <button type="button" onClick={handleReset} className="ky-btn ky-btn--primary ky-grow gm-cta" data-sfx="start">
              <RotateCcw size={18} aria-hidden="true" />
              <span>{g.replay}</span>
            </button>
          ) : (
            <button type="button" onClick={handleStopTitration} className="ky-btn ky-btn--primary ky-grow gm-cta">
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>{g.tEndpoint}</span>
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};
