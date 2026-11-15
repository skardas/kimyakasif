import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Sparkles, Trophy, Droplets, Square, RotateCcw, Activity, CheckCircle2 } from 'lucide-react';
import { GameHud, GameStat } from './GameHud';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { GAMES_STRINGS } from '../../i18n/gamesStrings';
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
  const [historyPoints, setHistoryPoints] = useState<{ v: number; ph: number }[]>([
    { v: 0, ph: 1.0 },
  ]);

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
  const phClass = curveData.ph < 7 ? 'acid' : curveData.status === 'equivalence' ? 'eq' : '';
  const indicators: { id: IndicatorType; label: string; dot: string }[] = [
    { id: 'phenolphthalein', label: 'Fenolftalein (8.2-10)', dot: '#ec4899' },
    { id: 'methyl-orange', label: 'Metil Oranj (3.1-4.4)', dot: '#f97316' },
    { id: 'bromothymol-blue', label: 'Bromtimol (6.0-7.6)', dot: '#22c55e' },
  ];
  const canDispense = !hasFinished && volumeDispensed < 50.0;

  return (
    <div className="gm gm--wide titration-simulator-container">
      <GameHud title={t.games.titrationTitle} backLabel={t.games.backToHub} onBack={onBack}>
        <GameStat icon={<Trophy size={16} aria-hidden="true" />} label={g.best} value={Math.max(highScore, score)} tone="gold" />
        <GameStat icon={<Sparkles size={16} aria-hidden="true" />} label={g.score} value={score} tone="accent" />
      </GameHud>

      <div className="ky-card gm-board titration-board">
        <div className="gm-titr">
          {/* Apparatus */}
          <div className="ky-stage gm-apparatus apparatus-stage">
            <div className="ky-floor" aria-hidden="true" />
            <div className="gm-app-head">
              <span>Büret: 0.100 M NaOH (Baz)</span>
              <span className="ky-mono">{volumeDispensed.toFixed(2)} / 50.00 mL</span>
            </div>

            <div className="gm-burette burette-tube" role="img" aria-label={`${volumeDispensed.toFixed(2)} mL`}>
              <div
                className="gm-burette-liquid burette-liquid"
                style={{ blockSize: `${Math.max(0, ((50.0 - volumeDispensed) / 50.0) * 100)}%` }}
              />
              <div className="gm-burette-scale" aria-hidden="true">
                <span>0 mL</span>
                <span>10</span>
                <span>20</span>
                <span>25 (Eq)</span>
                <span>30</span>
                <span>40</span>
                <span>50 mL</span>
              </div>
            </div>

            <div className="gm-nozzle" aria-hidden="true">
              <i className={flowRate > 0 ? 'flow' : ''} />
            </div>

            <div className="gm-flask erlenmeyer-flask" style={{ backgroundColor: flaskColor }}>
              {stirrerOn && <div className="gm-vortex" />}
            </div>
            <div className="gm-flask-cap">25 mL 0.100 M HCl (Asit) + İndikatör</div>

            <div className="gm-ph ph-hud" aria-live="polite">
              <span className="gm-ph-label">
                <Activity size={14} aria-hidden="true" />
                pH Metre
              </span>
              <span className={`gm-ph-val ${phClass}`}>{curveData.ph.toFixed(2)}</span>
              <span className={`gm-ph-status ${curveData.status === 'equivalence' ? 'eq' : curveData.status === 'overshot' ? 'bad' : ''}`}>
                {curveData.status.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Controls + curve */}
          <div className="gm-controls controls-and-curve">
            <div className="indicator-selector" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className="gm-label" id="gm-ind-label">İndikatör Seçimi</span>
              <div className="gm-chiprow" role="group" aria-labelledby="gm-ind-label">
                {indicators.map((ind) => (
                  <button
                    key={ind.id}
                    type="button"
                    className={`ky-chip ky-chip--lg${selectedIndicator === ind.id ? ' on' : ''}`}
                    aria-pressed={selectedIndicator === ind.id}
                    onClick={() => setSelectedIndicator(ind.id)}
                  >
                    <span className="gm-dot" style={{ background: ind.dot }} aria-hidden="true" />
                    {ind.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="ky-well gm-curve svg-curve-box">
              <div className="gm-curve-head">
                <span>Titrasyon Eğrisi (pH / V_eklenen)</span>
                <span>Eşdeğerlik: 25.00 mL (pH 7.00)</span>
              </div>
              <svg viewBox="0 0 205 102" role="img" aria-label="pH curve">
                <line x1="20" y1="90" x2="195" y2="90" stroke="currentColor" strokeOpacity="0.3" />
                <line x1="20" y1="10" x2="20" y2="90" stroke="currentColor" strokeOpacity="0.3" />
                <line className="gm-curve-eq" x1="105" y1="10" x2="105" y2="90" strokeDasharray="3 3" strokeOpacity="0.7" />
                <line className="gm-curve-eq" x1="20" y1="50" x2="195" y2="50" strokeDasharray="3 3" strokeOpacity="0.35" />

                {[0, 7, 14].map((ph) => {
                  const y = 90 - (ph / 14.0) * 80;
                  return (
                    <g key={`y-tick-${ph}`}>
                      <line x1="17" y1={y} x2="20" y2={y} stroke="currentColor" strokeOpacity="0.5" />
                      <text x="15" y={y + 1.8} fontSize="4.8" fill="currentColor" textAnchor="end" fontFamily="monospace">
                        {ph}
                      </text>
                    </g>
                  );
                })}

                {[0, 10, 20, 25, 30, 40, 50].map((v) => {
                  const x = 20 + (v / 50.0) * 170;
                  return (
                    <g key={`x-tick-${v}`}>
                      <line x1={x} y1="90" x2={x} y2="93" stroke="currentColor" strokeOpacity="0.5" />
                      <text x={x} y="98" fontSize="4.8" fill="currentColor" textAnchor="middle" fontFamily="monospace">
                        {v}
                      </text>
                    </g>
                  );
                })}

                <path
                  className="gm-curve-line"
                  d={historyPoints
                    .map((pt, i) => {
                      const x = 20 + (pt.v / 50.0) * 170;
                      const y = 90 - (pt.ph / 14.0) * 80;
                      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
                    })
                    .join(' ')}
                />
                <circle
                  className="gm-curve-dot"
                  cx={20 + (curveData.clampedVol / 50.0) * 170}
                  cy={90 - (curveData.ph / 14.0) * 80}
                  r="4"
                />
              </svg>
            </div>

            <div className="gm-flow valve-controls-box">
              <div className="gm-two">
                <button type="button" onClick={handleDropwise} disabled={!canDispense} className="ky-btn ky-btn--quiet">
                  <Droplets size={16} aria-hidden="true" />
                  <span>Damla Damla (+0.05 mL)</span>
                </button>
                <button
                  type="button"
                  onClick={toggleStirrer}
                  className={`ky-btn ${stirrerOn ? 'ky-btn--primary' : 'ky-btn--quiet'}`}
                  aria-pressed={stirrerOn}
                >
                  <Activity size={16} aria-hidden="true" />
                  <span>Karıştırıcı: {stirrerOn ? 'Açık' : 'Kapalı'}</span>
                </button>
              </div>

              <span className="gm-label">Sürekli Akış</span>
              <div className="ky-segmented" role="group" aria-label="Sürekli Akış">
                <button type="button" aria-pressed={flowRate === 0.2} disabled={!canDispense} onClick={() => setFlowRate(flowRate === 0.2 ? 0 : 0.2)}>
                  Yavaş 0.2
                </button>
                <button type="button" aria-pressed={flowRate === 1.0} disabled={!canDispense} onClick={() => setFlowRate(flowRate === 1.0 ? 0 : 1.0)}>
                  Orta 1.0
                </button>
                <button type="button" aria-pressed={flowRate === 0} onClick={() => setFlowRate(0)}>
                  <Square size={12} fill="currentColor" aria-hidden="true" style={{ marginInlineEnd: 6 }} />
                  Durdur
                </button>
              </div>
            </div>

            {hasFinished ? (
              <div className={`gm-feedback ${score >= 100 ? 'ok ky-pop' : 'bad ky-shake'}`} role="status">
                {score >= 300
                  ? `Mükemmel! Tam eşdeğerlik noktası (Δ ${deltaV.toFixed(2)} mL). +${score} Puan`
                  : `Eşdeğerlik 25.00 mL idi, sapma Δ ${deltaV.toFixed(2)} mL. +${score} Puan`}
              </div>
            ) : null}

            <div className="gm-actions">
              <button type="button" onClick={handleReset} className="ky-btn ky-btn--quiet" data-sfx={hasFinished ? 'start' : undefined}>
                <RotateCcw size={16} aria-hidden="true" />
                <span>{hasFinished ? g.replay : 'Yeniden Başla'}</span>
              </button>
              <button type="button" onClick={handleStopTitration} disabled={hasFinished} className="ky-btn ky-btn--primary">
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>Dönüm Noktası İlan Et</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
