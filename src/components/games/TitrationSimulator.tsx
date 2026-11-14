import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Trophy,
  Droplets,
  Play,
  Square,
  RotateCcw,
  FlaskConical,
  Activity,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { playDrop, playBubble, playFinish, playFizz } from '../../audio/sfx';

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
  highScore = 0,
  onFinish,
  onBack,
}) => {
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
      setVolumeDispensed((prev) => {
        const next = Math.min(50.0, prev + stepMl);
        if (next >= 50.0) {
          setFlowRate(0);
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [flowRate, hasFinished]);

  // Update history points for SVG chart
  useEffect(() => {
    setHistoryPoints((prev) => {
      const last = prev[prev.length - 1];
      if (!last || Math.abs(last.v - curveData.clampedVol) >= 0.5 || curveData.clampedVol === 50.0) {
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
    setStirrerOn((s) => {
      if (!s) playBubble();
      return !s;
    });
  };

  // Check endpoint / stop titration
  const handleStopTitration = () => {
    setFlowRate(0);
    setHasFinished(true);

    const deltaV = Math.abs(volumeDispensed - 25.0);
    let pts = 0;
    if (deltaV <= 0.05) {
      pts = 300; // Perfect equivalence!
      playFinish();
      playFizz();
    } else if (deltaV <= 0.20) {
      pts = 200;
      playFinish();
    } else if (deltaV <= 1.0) {
      pts = 100;
    } else {
      pts = 30;
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

  return (
    <div className="titration-simulator-container p-4 max-w-4xl mx-auto flex flex-col gap-5">
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

      {/* Main Titration Stage */}
      <div className="titration-board p-6 bg-surface border border-subtle rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Lab Apparatus Visual */}
        <div className="apparatus-stage flex flex-col items-center justify-between p-4 bg-surface-elevated/40 border border-subtle rounded-xl min-h-[360px] relative">
          <div className="w-full flex items-center justify-between text-xs font-semibold opacity-75">
            <span>Büret: 0.100 M NaOH (Baz)</span>
            <span className="font-mono">{volumeDispensed.toFixed(2)} / 50.00 mL</span>
          </div>

          {/* Virtual Burette Tube */}
          <div className="burette-tube w-10 h-44 bg-surface-elevated border-2 border-subtle rounded-b-md relative overflow-hidden flex flex-col justify-end shadow-inner">
            <div
              className="burette-liquid bg-cyan-500/40 w-full transition-all duration-100"
              style={{
                height: `${Math.max(0, ((50.0 - volumeDispensed) / 50.0) * 100)}%`,
              }}
            />
            {/* Graduations */}
            <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-1 px-0.5 opacity-40 text-[7px] font-mono">
              <span>0 mL</span>
              <span>10</span>
              <span>20</span>
              <span>25 (Eq)</span>
              <span>30</span>
              <span>40</span>
              <span>50 mL</span>
            </div>
          </div>

          {/* Stopcock valve droplet */}
          <div className="drop-nozzle flex flex-col items-center my-1">
            <div className={`w-1.5 h-1.5 rounded-full ${flowRate > 0 ? 'bg-cyan-400 animate-ping' : 'bg-cyan-400'}`} />
          </div>

          {/* Erlenmeyer Flask Visual */}
          <div className="erlenmeyer-flask relative flex flex-col items-center">
            <div
              className="flask-body w-32 h-28 border-4 border-subtle rounded-b-3xl rounded-t-lg transition-colors duration-300 flex items-end justify-center overflow-hidden shadow-md"
              style={{
                backgroundColor: flaskColor,
              }}
            >
              {/* Stirring vortex animation */}
              {stirrerOn && (
                <div className="w-12 h-2.5 bg-foreground/30 rounded-full animate-spin mb-2" />
              )}
            </div>
            <div className="text-[10px] opacity-75 mt-1 font-mono text-center">
              25 mL 0.100 M HCl (Asit) + İndikatör
            </div>
          </div>

          {/* Real-time pH Readout HUD */}
          <div className="ph-hud w-full flex items-center justify-between p-2.5 bg-surface border border-subtle rounded-lg mt-2">
            <span className="text-xs font-bold flex items-center gap-1.5">
              <Activity size={14} className="text-primary" />
              <span>pH Metre:</span>
            </span>
            <span className={`text-lg font-mono font-black ${curveData.ph < 7 ? 'text-ruby' : curveData.ph === 7 ? 'text-purple-400' : 'text-cyan-400'}`}>
              {curveData.ph.toFixed(2)}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded font-semibold ${curveData.status === 'equivalence' ? 'bg-purple-500/20 text-purple-300' : curveData.status === 'overshot' ? 'bg-ruby/20 text-ruby' : 'bg-surface-elevated'}`}>
              {curveData.status.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Right: Controls & Real-time S-Curve Graph */}
        <div className="controls-and-curve flex flex-col justify-between gap-4">
          {/* Indicator Selection */}
          <div className="indicator-selector flex flex-col gap-1.5">
            <label className="text-xs font-semibold opacity-80">İndikatör Seçimi:</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSelectedIndicator('phenolphthalein')}
                className={`p-2 rounded-lg border text-xs font-semibold transition-all ${selectedIndicator === 'phenolphthalein' ? 'border-pink-500 bg-pink-500/10 text-pink-300' : 'border-subtle bg-surface'}`}
              >
                Fenolftalein (8.2-10)
              </button>
              <button
                type="button"
                onClick={() => setSelectedIndicator('methyl-orange')}
                className={`p-2 rounded-lg border text-xs font-semibold transition-all ${selectedIndicator === 'methyl-orange' ? 'border-amber-500 bg-amber-500/10 text-amber-300' : 'border-subtle bg-surface'}`}
              >
                Metil Oranj (3.1-4.4)
              </button>
              <button
                type="button"
                onClick={() => setSelectedIndicator('bromothymol-blue')}
                className={`p-2 rounded-lg border text-xs font-semibold transition-all ${selectedIndicator === 'bromothymol-blue' ? 'border-cyan-500 bg-cyan-500/10 text-cyan-300' : 'border-subtle bg-surface'}`}
              >
                Bromtimol (6.0-7.6)
              </button>
            </div>
          </div>

          {/* SVG S-Curve Plot */}
          <div className="svg-curve-box p-3 bg-surface-elevated/40 border border-subtle rounded-xl flex flex-col gap-1">
            <div className="flex items-center justify-between text-[11px] font-semibold opacity-75">
              <span>Titrasyon Eğrisi (pH / V_eklenen)</span>
              <span>Eşdeğerlik: 25.00 mL (pH 7.00)</span>
            </div>

            <svg viewBox="0 0 200 100" className="w-full h-28 bg-surface rounded-md border border-subtle">
              {/* Axes and grid */}
              <line x1="20" y1="90" x2="190" y2="90" stroke="currentColor" strokeOpacity="0.2" />
              <line x1="20" y1="10" x2="20" y2="90" stroke="currentColor" strokeOpacity="0.2" />
              {/* Equivalence guide line at V=25 mL (x = 20 + 25*(170/50) = 105) */}
              <line x1="105" y1="10" x2="105" y2="90" stroke="#a855f7" strokeDasharray="3 3" strokeOpacity="0.6" />
              <line x1="20" y1="47" x2="190" y2="47" stroke="#a855f7" strokeDasharray="3 3" strokeOpacity="0.3" />

              {/* S-curve path */}
              <path
                d={historyPoints.map((pt, i) => {
                  const x = 20 + (pt.v / 50.0) * 170;
                  const y = 90 - (pt.ph / 14.0) * 80;
                  return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
                }).join(' ')}
                fill="none"
                stroke="var(--brand-primary)"
                strokeWidth="2.5"
              />

              {/* Current Point */}
              <circle
                cx={20 + (curveData.clampedVol / 50.0) * 170}
                cy={90 - (curveData.ph / 14.0) * 80}
                r="4"
                fill="#a855f7"
              />
            </svg>
          </div>

          {/* Valve and Stirrer Action Controls */}
          <div className="valve-controls-box flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleDropwise}
                disabled={hasFinished || volumeDispensed >= 50.0}
                className="btn-secondary py-2.5 px-3 flex items-center justify-center gap-2 font-bold text-xs"
              >
                <Droplets size={16} />
                <span>Damla Damla (+0.05 mL)</span>
              </button>

              <button
                type="button"
                onClick={toggleStirrer}
                className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${stirrerOn ? 'border-primary/40 bg-primary/10 text-primary' : 'border-subtle bg-surface'}`}
              >
                <Activity size={16} />
                <span>Manyetik Karıştırıcı: {stirrerOn ? 'Açık' : 'Kapalı'}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold opacity-75 shrink-0">Sürekli Akış:</span>
              <button
                type="button"
                onClick={() => setFlowRate(flowRate === 0.2 ? 0 : 0.2)}
                disabled={hasFinished || volumeDispensed >= 50.0}
                className={`btn-secondary flex-1 py-1.5 text-xs ${flowRate === 0.2 ? 'border-primary text-primary' : ''}`}
              >
                Yavaş (0.2 mL/s)
              </button>
              <button
                type="button"
                onClick={() => setFlowRate(flowRate === 1.0 ? 0 : 1.0)}
                disabled={hasFinished || volumeDispensed >= 50.0}
                className={`btn-secondary flex-1 py-1.5 text-xs ${flowRate === 1.0 ? 'border-primary text-primary' : ''}`}
              >
                Orta (1.0 mL/s)
              </button>
              <button
                type="button"
                onClick={() => setFlowRate(0)}
                className="btn-secondary py-1.5 px-3 text-xs text-ruby border-ruby/30"
              >
                Durdur
              </button>
            </div>
          </div>

          {/* End Point / Finish Button */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary py-2.5 px-4 text-xs flex items-center gap-1.5"
            >
              <RotateCcw size={14} />
              <span>Yeniden Başla</span>
            </button>

            <button
              type="button"
              onClick={handleStopTitration}
              disabled={hasFinished}
              className="btn-primary py-2.5 px-6 font-bold flex items-center gap-2 flex-1 justify-center"
            >
              <CheckCircle2 size={18} />
              <span>Dönüm Noktası (Eşdeğerlik) İlan Et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
