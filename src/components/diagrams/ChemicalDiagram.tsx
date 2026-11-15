import React, { useState, useRef } from 'react';
import { Maximize2, X, ZoomIn, ZoomOut } from 'lucide-react';
import type { QuestionDiagramSpec, LanguageCode } from '../../types/chemistry';
import { ZOOM_FIT_I18N } from '../three/Kimya3DLab';

const FULLSCREEN_I18N: Record<LanguageCode, string> = {
  tr: 'Tam Ekran Büyüt',
  en: 'Fullscreen Expand',
  de: 'Vollbild vergrößern',
  fr: 'Agrandir en plein écran',
  ru: 'Развернуть на весь экран',
  ar: 'ملء الشاشة',
  zh: '全屏放大',
  ku: 'Tam ekran mezin bike',
};

export const CLOSE_MODAL_I18N: Record<LanguageCode, string> = {
  tr: 'Kapat',
  en: 'Close',
  de: 'Schließen',
  fr: 'Fermer',
  ru: 'Закрыть',
  ar: 'إغلاق',
  zh: '关闭',
  ku: 'Bigre',
};

// ---------------------------------------------------------------------------
// Obsidian Lab Glass primitives: lit-sphere gradients (white highlight at the
// upper left, the element colour, a deep shade and a dark rim), a soft drop
// shadow and a cylinder-like bond. The SVG sits on the dark .ky-stage.
// ---------------------------------------------------------------------------
const LIT_TONES: Record<string, [string, string]> = {
  teal: ['#5FF2DF', '#0C8073'],
  gold: ['#FFD873', '#A86A08'],
  ruby: ['#FF6B7A', '#9C1830'],
  green: ['#7DF0A8', '#0E8A52'],
  blue: ['#6FA8FF', '#1B3FA8'],
  violet: ['#C9A2FF', '#5B32C9'],
  white: ['#E9EEF5', '#7C8798'],
  slate: ['#7C8AA0', '#1B2536'],
};

const DiagramDefs: React.FC = () => (
  <defs>
    {Object.entries(LIT_TONES).map(([name, [c, cd]]) => (
      <radialGradient key={name} id={`dg-lit-${name}`} cx="0.32" cy="0.26" r="0.85" fx="0.32" fy="0.26">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="0.3" stopColor={c} />
        <stop offset="0.78" stopColor={cd} />
        <stop offset="1" stopColor="#020409" />
      </radialGradient>
    ))}
    <filter id="dg-shadow" x="-50%" y="-50%" width="200%" height="220%">
      <feDropShadow dx="0" dy="3" stdDeviation="2.4" floodColor="#000000" floodOpacity="0.55" />
    </filter>
  </defs>
);

/** Bond: a dark-edged grey rod with a lighter centre line, like the .ky-bond recipe. */
const Bond: React.FC<{ x1: number; y1: number; x2: number; y2: number }> = ({ x1, y1, x2, y2 }) => (
  <g>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#4A566A" strokeWidth={7} strokeLinecap="round" />
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#93A1B5" strokeWidth={5} strokeLinecap="round" />
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E8EEF6" strokeWidth={1.6} strokeLinecap="round" opacity={0.85} />
  </g>
);

// ---------------------------------------------------------------------------
// Fitted labels. Label strings come from 8 languages and vary a lot in length,
// so every label gets a slot width (SVG units): it stays on one line when it
// fits, otherwise wraps onto two lines at the space nearest the middle, and
// only then shrinks (down to a floor, after which textLength squeezes it).
// ---------------------------------------------------------------------------
function glyphUnits(text: string): number {
  let u = 0;
  for (const ch of text) {
    const c = ch.codePointAt(0) ?? 0;
    if (c >= 0x2e80) u += 1; // CJK: full em
    else if (ch === ' ') u += 0.28;
    else if (/[A-ZÇĞİÖŞÜА-ЯΔ0-9]/.test(ch)) u += 0.64;
    else if (/[il.,:;'!|()Iı\[\]]/.test(ch)) u += 0.3;
    else u += 0.54;
  }
  return u;
}

function splitTwo(text: string): [string, string] | null {
  const mid = text.length / 2;
  let best = -1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ' && (best < 0 || Math.abs(i - mid) < Math.abs(best - mid))) best = i;
  }
  if (best <= 0) return null;
  return [text.slice(0, best), text.slice(best + 1)];
}

interface FitLabelProps {
  x: number;
  y: number;
  /** Slot width in SVG units. */
  w: number;
  size?: number;
  anchor?: 'start' | 'middle' | 'end';
  fill: string;
  weight?: number | string;
  /** Allow wrapping onto a second line. */
  wrap?: boolean;
  /** Where y sits when wrapped: first baseline (top), last baseline (bottom) or centred. */
  valign?: 'top' | 'middle' | 'bottom';
  minSize?: number;
  children: React.ReactNode;
}

const FitLabel: React.FC<FitLabelProps> = ({
  x,
  y,
  w,
  size = 11,
  anchor = 'middle',
  fill,
  weight,
  wrap = true,
  valign = 'middle',
  minSize = 8,
  children,
}) => {
  const text = React.Children.toArray(children).join('');
  const common = { x, textAnchor: anchor, fill, fontWeight: weight } as const;
  const one = glyphUnits(text) * size;
  if (one <= w) {
    return (
      <text {...common} y={y} fontSize={size}>
        {text}
      </text>
    );
  }
  const parts = wrap ? splitTwo(text) : null;
  if (parts) {
    const units = Math.max(glyphUnits(parts[0]), glyphUnits(parts[1]));
    const fs = Math.max(minSize, Math.min(size, w / units));
    const lh = Math.round(fs * 1.18 * 10) / 10;
    const y0 = valign === 'top' ? y : valign === 'bottom' ? y - lh : Math.round((y - lh / 2) * 10) / 10;
    const squeeze = units * fs > w;
    return (
      <text {...common} y={y0} fontSize={Math.round(fs * 10) / 10}>
        <tspan x={x} {...(squeeze ? { textLength: w, lengthAdjust: 'spacingAndGlyphs' } : {})}>
          {parts[0]}
        </tspan>
        <tspan x={x} dy={lh} {...(squeeze ? { textLength: w, lengthAdjust: 'spacingAndGlyphs' } : {})}>
          {parts[1]}
        </tspan>
      </text>
    );
  }
  const fs = Math.max(minSize, (size * w) / one);
  const squeeze = glyphUnits(text) * fs > w;
  return (
    <text
      {...common}
      y={y}
      fontSize={Math.round(fs * 10) / 10}
      {...(squeeze ? { textLength: w, lengthAdjust: 'spacingAndGlyphs' } : {})}
    >
      {text}
    </text>
  );
};

export interface ChemicalDiagramProps {
  spec: QuestionDiagramSpec;
  className?: string;
  allowZoom?: boolean;
  lang?: LanguageCode;
  initialZoomed?: boolean;
  /**
   * 'full' (default): title row with zoom in / 100% / zoom out / expand above the stage.
   * 'expand': stage only, with one small expand control on its corner (tapping the stage
   * also opens it); zooming happens in the expanded view. Used in the quiz.
   */
  controls?: 'full' | 'expand';
}

export const ChemicalDiagram: React.FC<ChemicalDiagramProps> = ({
  spec,
  className = '',
  allowZoom = true,
  lang = 'tr',
  initialZoomed = false,
  controls = 'full',
}) => {
  const compact = controls === 'expand';
  const [isZoomed, setIsZoomed] = useState(initialZoomed);
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const zoomI18n = ZOOM_FIT_I18N[lang] || ZOOM_FIT_I18N.tr;
  const fsLabel = FULLSCREEN_I18N[lang] || FULLSCREEN_I18N.tr;

  const handleZoomIn = () => {
    setZoomLevel((z) => Math.min(2.5, Number((z + 0.25).toFixed(2))));
  };

  const handleZoomOut = () => {
    setZoomLevel((z) => {
      const next = Math.max(1.0, Number((z - 0.25).toFixed(2)));
      if (next === 1.0) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1.0);
    setPanOffset({ x: 0, y: 0 });
  };

  const closeZoom = () => {
    setIsZoomed(false);
    // The compact quiz stage never zooms inline, so leave it at 100% again.
    if (compact) handleResetZoom();
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (zoomLevel <= 1.0) return;
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || zoomLevel <= 1.0) return;
    const maxPanX = 270 * (zoomLevel - 1);
    const maxPanY = 150 * (zoomLevel - 1);
    const newX = Math.max(-maxPanX, Math.min(maxPanX, e.clientX - dragStartRef.current.x));
    const newY = Math.max(-maxPanY, Math.min(maxPanY, e.clientY - dragStartRef.current.y));
    setPanOffset({ x: newX, y: newY });
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const renderContent = () => {
    switch (spec.archetype) {
      case 'bohr-orbital-atom':
      case 'bohr-orbital-levels':
      case 'quantum-orbitals':
        return renderBohrOrbitalAtom(spec);

      case 'periodic-table-trends':
      case 'periodic-trends-spiral':
        return renderPeriodicTrends(spec);

      case 'gas-piston-manometer':
      case 'gas-law-piston-manometer':
        return renderGasPistonManometer(spec);

      case 'phase-heating-curve':
      case 'heating-cooling-phase-diagram':
        return renderPhaseHeatingCurve(spec);

      case 'potential-energy-reaction':
      case 'potential-energy-reaction-coordinate':
        return renderPotentialEnergyCurve(spec);

      case 'titration-burette-curve':
      case 'titration-curve-burette':
        return renderTitrationBurette(spec);

      case 'galvanic-daniell-cell':
        return renderDaniellCell(spec);

      case 'electrolysis-hoffman-cell':
        return renderElectrolysisHoffman(spec);

      case 'vsepr-molecular-geometry':
      case 'lewis-dot-bonding':
      case 'crystal-lattice':
      case 'polymer-micelle':
      case 'organic-functional-groups':
        return renderVseprGeometry(spec);

      case 'equilibrium-le-chatelier':
      case 'equilibrium-le-chatelier-graph':
        return renderLeChatelierEquilibrium(spec);

      case 'lab-glassware-setup':
      case 'solution-solvation-sphere':
      case 'stoichiometry-chamber':
      case 'distillation-column':
      case 'acid-base-metal':
      default:
        return renderLabGlassware(spec);
    }
  };

  return (
    <div className={`chemical-diagram-container ${compact ? 'is-compact' : ''} ${className}`}>
      {!compact && (
      <div
        className="diagram-header"
      >
        <h4 className="diagram-title">{spec.title}</h4>
        {allowZoom && (
          <div className="diagram-zoom-toolbar">
            <button
              type="button"
              className="ky-icon-btn diagram-zoom-btn"
              data-glyph="+"
              onClick={handleZoomIn}
              aria-label={zoomI18n.zoomIn}
              title={zoomI18n.zoomIn}
            >
              <ZoomIn size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="ky-icon-btn diagram-zoom-btn"
              onClick={handleResetZoom}
              aria-label={zoomI18n.fitScreen}
              title={zoomI18n.fitScreen}
              data-role="level"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <button
              type="button"
              className="ky-icon-btn diagram-zoom-btn"
              onClick={handleZoomOut}
              aria-label={zoomI18n.zoomOut}
              title={zoomI18n.zoomOut}
            >
              <ZoomOut size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="ky-icon-btn diagram-zoom-btn"
              onClick={() => setIsZoomed(true)}
              aria-label={fsLabel}
              title={fsLabel}
              data-glyph="🔍"
            >
              <Maximize2 size={18} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      )}

      <div
        className="diagram-svg-wrapper ky-stage"
        dir="ltr"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          overflow: 'hidden',
          position: 'relative',
          cursor: zoomLevel > 1.0 ? (isDraggingRef.current ? 'grabbing' : 'grab') : 'default',
          touchAction: zoomLevel > 1.0 ? 'none' : 'auto',
          borderRadius: '12px',
        }}
      >
        {compact && allowZoom && (
          <button
            type="button"
            className="diagram-expand-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(true);
            }}
            aria-label={fsLabel}
            title={fsLabel}
          >
            <span className="diagram-expand-btn__face" aria-hidden="true">
              <Maximize2 size={16} />
            </span>
          </button>
        )}
        <div className="ky-floor" aria-hidden="true" />
        <svg
          viewBox="0 0 540 300"
          className="chemical-diagram-svg"
          onClick={compact && allowZoom ? () => setIsZoomed(true) : undefined}
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={spec.title}
          style={{
            transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
            transformOrigin: 'center center',
            transition: isDraggingRef.current ? 'none' : 'transform 0.15s ease-out',
            display: 'block',
            width: '100%',
            height: 'auto',
          }}
        >
          <style>{DIAGRAM_KEYFRAMES}</style>
          <DiagramDefs />
          {renderContent()}
        </svg>
      </div>

      {spec.caption && !compact && <p className="diagram-caption">{spec.caption}</p>}

      {/* Zoom Modal Dialog */}
      {isZoomed && (
        <div className="ky-modal-backdrop diagram-zoom-overlay" onClick={closeZoom}>
          <div
            className="ky-sheet diagram-zoom-card"
            role="dialog"
            aria-modal="true"
            aria-label={spec.title}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="diagram-zoom-header">
              <h3>{spec.title}</h3>
              <div className="diagram-zoom-toolbar">
                <button
                  type="button"
                  className="ky-icon-btn diagram-zoom-btn"
                  data-glyph="+"
              onClick={handleZoomIn}
                  aria-label={zoomI18n.zoomIn}
                  title={zoomI18n.zoomIn}
                >
                  <ZoomIn size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="ky-icon-btn diagram-zoom-btn"
                  onClick={handleResetZoom}
                  aria-label={zoomI18n.fitScreen}
                  title={zoomI18n.fitScreen}
                  data-role="level"
                >
                  {Math.round(zoomLevel * 100)}%
                </button>
                <button
                  type="button"
                  className="ky-icon-btn diagram-zoom-btn"
                  onClick={handleZoomOut}
                  aria-label={zoomI18n.zoomOut}
                  title={zoomI18n.zoomOut}
                >
                  <ZoomOut size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="ky-icon-btn diagram-close-btn"
                  onClick={closeZoom}
                  aria-label={CLOSE_MODAL_I18N[lang] || CLOSE_MODAL_I18N.tr}
                  title={CLOSE_MODAL_I18N[lang] || CLOSE_MODAL_I18N.tr}
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
            </div>
            <div
              className="diagram-zoom-body ky-stage"
              dir="ltr"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              style={{
                overflow: 'hidden',
                position: 'relative',
                cursor: zoomLevel > 1.0 ? (isDraggingRef.current ? 'grabbing' : 'grab') : 'default',
                touchAction: zoomLevel > 1.0 ? 'none' : 'auto',
              }}
            >
              <div className="ky-floor" aria-hidden="true" />
              <svg
                viewBox="0 0 540 300"
                className="chemical-diagram-svg zoom-svg"
                role="img"
                aria-label={spec.title}
                preserveAspectRatio="xMidYMid meet"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
                  transformOrigin: 'center center',
                  transition: isDraggingRef.current ? 'none' : 'transform 0.15s ease-out',
                }}
              >
                <style>{DIAGRAM_KEYFRAMES}</style>
                <DiagramDefs />
                {renderContent()}
              </svg>
            </div>
            {spec.caption && <p className="diagram-zoom-caption">{spec.caption}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// 1. Bohr & Quantum Atomic Model (Orbits, Electron Movement & Photon Emission)
// ---------------------------------------------------------------------------
function renderBohrOrbitalAtom(spec: QuestionDiagramSpec) {
  const lbl = spec.labels || {};
  return (
    <g>
      {/* Concentric Orbits */}
      <circle cx="270" cy="140" r="35" fill="none" stroke="var(--border-subtle, #334155)" strokeDasharray="3 3" />
      <circle cx="270" cy="140" r="70" fill="none" stroke="var(--border-subtle, #334155)" strokeDasharray="4 4" />
      <circle cx="270" cy="140" r="105" fill="none" stroke="var(--border-subtle, #334155)" strokeDasharray="4 4" />

      {/* Nucleus (+Ze) with Pulse */}
      <circle cx="270" cy="140" r="18" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" className="anim-pulse" />
      <text x="270" y="145" textAnchor="middle" fill="var(--brand-on-primary, #ffffff)" fontSize="11" fontWeight="bold">
        +Ze
      </text>

      {/* Orbit 1 Electron (n=1) */}
      <g className="anim-spin-fast" style={{ transformOrigin: '270px 140px' }}>
        <circle cx="270" cy="105" r="5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" />
      </g>

      {/* Orbit 2 Electron (n=2) */}
      <g className="anim-spin-med" style={{ transformOrigin: '270px 140px' }}>
        <circle cx="340" cy="140" r="5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" />
        <circle cx="200" cy="140" r="5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" />
      </g>

      {/* Orbit 3 Excited Electron Transition (n=3 -> n=2) */}
      <g className="anim-spin-slow" style={{ transformOrigin: '270px 140px' }}>
        <circle cx="270" cy="35" r="5" fill="url(#dg-lit-gold)" filter="url(#dg-shadow)" />
      </g>

      {/* Wavy Photon Emission Line */}
      <path
        d="M 330 110 Q 355 90 380 110 T 430 110"
        fill="none"
        stroke="var(--accent-amber, #f59e0b)"
        strokeWidth="2.5"
        className="anim-wave"
      />
      <polygon points="432,107 442,110 432,113" fill="var(--accent-amber, #f59e0b)" />

      {/* Labels */}
      <FitLabel x={270} y={18} w={200} wrap={false} fill="var(--text-secondary, #94a3b8)">
        {lbl.n3 || 'n = 3 (M)'}
      </FitLabel>
      <FitLabel x={392} y={62} w={140} anchor="start" wrap={false} fill="var(--text-secondary, #94a3b8)">
        {lbl.n2 || 'n = 2 (L)'}
      </FitLabel>
      <FitLabel x={270} y={275} w={500} size={12} weight={600} valign="bottom" fill="var(--text-secondary, #94a3b8)">
        {lbl.photon || 'Foton Salımı: ΔE = h·ν (Spektrum Çizgisi)'}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 2. Periodic Table Trends (Radius vs Ionization Energy & Electronegativity)
// ---------------------------------------------------------------------------
function renderPeriodicTrends(spec: QuestionDiagramSpec) {
  const lbl = spec.labels || {};
  return (
    <g>
      {/* Stylized Periodic Table Blocks */}
      <rect x="70" y="50" width="40" height="170" rx="4" fill="var(--accent-cyan-subtle, rgba(6,182,212,0.15))" stroke="var(--accent-cyan, #06b6d4)" />
      <rect x="115" y="100" width="30" height="120" rx="4" fill="var(--border-subtle, rgba(255,255,255,0.08))" stroke="var(--border-subtle, #334155)" />
      <rect x="150" y="130" width="180" height="90" rx="4" fill="var(--border-subtle, rgba(255,255,255,0.05))" stroke="var(--border-subtle, #334155)" />
      <rect x="335" y="80" width="100" height="140" rx="4" fill="var(--accent-amber-subtle, rgba(245,158,11,0.15))" stroke="var(--accent-amber, #f59e0b)" />
      <rect x="440" y="50" width="30" height="170" rx="4" fill="var(--accent-emerald-subtle, rgba(16,185,129,0.15))" stroke="var(--accent-emerald, #10b981)" />

      {/* Block Text */}
      <text x="90" y="140" textAnchor="middle" fill="var(--accent-cyan, #06b6d4)" fontSize="11" fontWeight="bold">1A</text>
      <FitLabel x={240} y={175} w={170} size={12} fill="var(--text-muted, #64748b)">
        {lbl.transition || lbl.d_block || 'Geçiş Metalleri (d)'}
      </FitLabel>
      <FitLabel x={385} y={150} w={92} weight="bold" fill="var(--accent-amber, #f59e0b)">
        {lbl.nonmetals || lbl.nonmetal || 'Ametaller'}
      </FitLabel>
      <text x="455" y="140" textAnchor="middle" fill="var(--accent-emerald, #10b981)" fontSize="11" fontWeight="bold">8A</text>

      {/* Trend Arrow 1: Ionization Energy & Electronegativity (Bottom-Left to Top-Right) */}
      <line x1="100" y1="240" x2="440" y2="40" stroke="var(--accent-ruby, #f43f5e)" strokeWidth="3" className="anim-pulse" />
      <polygon points="440,35 448,45 435,48" fill="var(--accent-ruby, #f43f5e)" />
      <FitLabel x={270} y={26} w={500} size={12} weight="bold" wrap={false} fill="var(--accent-ruby, #f43f5e)">
        {lbl.ie || '↗ İyonlaşma Enerjisi & Elektronegatiflik Artar'}
      </FitLabel>

      {/* Trend Arrow 2: Atomic Radius (Top-Right to Bottom-Left) */}
      <line x1="430" y1="230" x2="110" y2="245" stroke="var(--accent-cyan, #06b6d4)" strokeWidth="3" />
      <polygon points="105,245 118,238 118,252" fill="var(--accent-cyan, #06b6d4)" />
      <FitLabel x={270} y={274} w={500} size={12} weight="bold" wrap={false} fill="var(--accent-cyan, #06b6d4)">
        {lbl.radius || '↙ Atom Yarıçapı & Metalik Aktiflik Artar'}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 3. Gas Piston & U-Tube Manometer Setup
// ---------------------------------------------------------------------------
function renderGasPistonManometer(spec: QuestionDiagramSpec) {
  const lbl = spec.labels || {};
  return (
    <g>
      {/* Gas Cylinder Chamber */}
      <rect x="70" y="70" width="140" height="160" rx="4" fill="none" stroke="var(--text-primary, #ffffff)" strokeWidth="2.5" />

      {/* Movable Weighted Piston with Vertical Animation */}
      <g className="anim-float-y">
        <rect x="72" y="105" width="136" height="16" fill="var(--accent-amber, #f59e0b)" rx="2" />
        <rect x="133" y="45" width="14" height="60" fill="var(--accent-amber, #f59e0b)" />
        <circle cx="140" cy="38" r="8" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" />
      </g>

      {/* Gas Particles inside chamber */}
      <circle cx="100" cy="150" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-bounce-1" />
      <circle cx="150" cy="170" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-bounce-2" />
      <circle cx="120" cy="200" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-bounce-3" />
      <circle cx="170" cy="140" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-bounce-1" />
      <circle cx="90" cy="180" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-bounce-2" />

      {/* Connecting Tube from Chamber to Manometer */}
      <path d="M 210 150 L 300 150 L 300 180" fill="none" stroke="var(--text-primary, #ffffff)" strokeWidth="4" />

      {/* U-Tube Manometer */}
      <path
        d="M 300 130 L 300 230 A 25 25 0 0 0 350 230 L 350 90"
        fill="none"
        stroke="var(--text-primary, #ffffff)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Liquid Mercury (Hg) Level Difference */}
      <path
        d="M 300 190 L 300 230 A 25 25 0 0 0 350 230 L 350 140"
        fill="none"
        stroke="var(--accent-ruby, #f43f5e)"
        strokeWidth="4.5"
      />

      {/* Height Difference Δh markers */}
      <line x1="365" y1="140" x2="385" y2="140" stroke="var(--accent-amber, #f59e0b)" strokeWidth="1.5" />
      <line x1="365" y1="190" x2="385" y2="190" stroke="var(--accent-amber, #f59e0b)" strokeWidth="1.5" />
      <line x1="375" y1="140" x2="375" y2="190" stroke="var(--accent-amber, #f59e0b)" strokeWidth="1.5" strokeDasharray="2 2" />
      <FitLabel x={390} y={170} w={142} size={12} anchor="start" weight="bold" fill="var(--accent-amber, #f59e0b)">
        {lbl.hdiff || 'h (Hg)'}
      </FitLabel>

      {/* Labels */}
      <FitLabel x={140} y={248} w={210} size={12} valign="top" fill="var(--text-secondary, #94a3b8)">
        {lbl.piston || 'Pistonlu Gaz Kabı (Pgaz = P0)'}
      </FitLabel>
      <FitLabel x={410} y={270} w={230} size={12} fill="var(--text-secondary, #94a3b8)">
        {lbl.eq || 'Pgaz = P0 + h'}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 4. Phase Diagram & Heating Curve (Solid, Melt, Liquid, Boil, Gas)
// ---------------------------------------------------------------------------
function renderPhaseHeatingCurve(spec: QuestionDiagramSpec) {
  const lbl = spec.labels || {};
  return (
    <g>
      {/* Cartesian Axes */}
      <line x1="70" y1="240" x2="490" y2="240" stroke="var(--text-secondary, #94a3b8)" strokeWidth="2" />
      <line x1="70" y1="240" x2="70" y2="40" stroke="var(--text-secondary, #94a3b8)" strokeWidth="2" />
      <FitLabel x={490} y={258} w={300} anchor="end" wrap={false} fill="var(--text-muted, #64748b)">
        {lbl.heat_axis || lbl.heat || 'Isı (Q / Zaman)'}
      </FitLabel>
      <FitLabel x={75} y={30} w={300} anchor="start" wrap={false} fill="var(--text-muted, #64748b)">
        {lbl.temp_axis || lbl.temp || 'Sıcaklık (T °C)'}
      </FitLabel>

      {/* 5-Stage Stepped Heating Curve */}
      <path
        d="M 70 230 L 140 180 L 210 180 L 300 100 L 390 100 L 460 50"
        fill="none"
        stroke="var(--accent-cyan, #06b6d4)"
        strokeWidth="3.5"
      />

      {/* Temperature Reference Dashed Lines */}
      <line x1="70" y1="180" x2="210" y2="180" stroke="var(--border-subtle, #334155)" strokeDasharray="3 3" />
      <text x="60" y="184" textAnchor="start" fill="var(--text-secondary, #94a3b8)" fontSize="11">
        {lbl.melt_point || lbl.te || 'Te (0°C)'}
      </text>

      <line x1="70" y1="100" x2="390" y2="100" stroke="var(--border-subtle, #334155)" strokeDasharray="3 3" />
      <text x="60" y="104" textAnchor="start" fill="var(--text-secondary, #94a3b8)" fontSize="11">
        {lbl.boil_point || lbl.tk || 'Tk (100°C)'}
      </text>

      {/* Animated Tracer Dot moving along the curve */}
      <circle cx="210" cy="180" r="6" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" className="anim-pulse" />

      {/* Phase Labels */}
      <FitLabel x={105} y={215} w={150} anchor="start" weight="bold" valign="bottom" fill="var(--text-secondary, #94a3b8)">
        {`I: ${lbl.solid || 'Katı'}`}
      </FitLabel>
      <FitLabel x={175} y={170} w={125} anchor="start" weight="bold" valign="bottom" fill="var(--accent-amber, #f59e0b)">
        {`II: ${lbl.melt || 'Erime'}`}
      </FitLabel>
      <FitLabel x={255} y={145} w={130} anchor="start" weight="bold" valign="bottom" fill="var(--text-secondary, #94a3b8)">
        {`III: ${lbl.liquid || 'Sıvı'}`}
      </FitLabel>
      <FitLabel x={345} y={90} w={110} anchor="start" weight="bold" valign="bottom" fill="var(--accent-ruby, #f43f5e)">
        {`IV: ${lbl.boil || 'Kaynama'}`}
      </FitLabel>
      <FitLabel x={430} y={65} w={105} anchor="start" weight="bold" valign="bottom" fill="var(--accent-cyan, #06b6d4)">
        {`V: ${lbl.gas || 'Gaz'}`}
      </FitLabel>

      {/* Bottom Summary Pill */}
      <FitLabel x={270} y={282} w={500} size={12} weight={600} valign="bottom" fill="var(--text-primary, #ffffff)">
        {lbl.summary || lbl.heat_summary || 'Hal Değişimi: T Sabit, Potansiyel Enerji Artar, Kinetik Sabit'}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 5. Potential Energy vs Reaction Coordinate Curve
// ---------------------------------------------------------------------------
function renderPotentialEnergyCurve(spec: QuestionDiagramSpec) {
  const lbl = spec.labels || {};
  return (
    <g>
      {/* Cartesian Axes */}
      <line x1="70" y1="240" x2="490" y2="240" stroke="var(--text-secondary, #94a3b8)" strokeWidth="2" />
      <line x1="70" y1="240" x2="70" y2="40" stroke="var(--text-secondary, #94a3b8)" strokeWidth="2" />
      <FitLabel x={490} y={258} w={300} anchor="end" wrap={false} fill="var(--text-muted, #64748b)">
        {lbl.coord || lbl.rxn_coord || 'Tepkime Koordinatı'}
      </FitLabel>
      <FitLabel x={75} y={30} w={170} anchor="start" wrap={false} fill="var(--text-muted, #64748b)">
        {lbl.pe || 'PE (kJ)'}
      </FitLabel>

      {/* Uncatalyzed High Barrier Curve (Solid) */}
      <path
        d="M 70 170 C 140 170, 200 60, 270 60 C 340 60, 400 210, 470 210"
        fill="none"
        stroke="var(--accent-ruby, #f43f5e)"
        strokeWidth="3.5"
      />

      {/* Catalyzed Low Barrier Curve (Dashed Cyan) */}
      <path
        d="M 70 170 C 140 170, 200 105, 270 105 C 340 105, 400 210, 470 210"
        fill="none"
        stroke="var(--accent-cyan, #06b6d4)"
        strokeWidth="3"
        strokeDasharray="4 4"
      />

      {/* Reactant & Product Levels */}
      <line x1="60" y1="170" x2="110" y2="170" stroke="var(--border-subtle, #334155)" strokeDasharray="2 2" />
      <FitLabel x={78} y={186} w={130} anchor="start" weight="bold" valign="top" fill="var(--accent-cyan, #06b6d4)">
        {lbl.reactants || lbl.girenler || 'Girenler (Hgiren)'}
      </FitLabel>

      <line x1="420" y1="210" x2="480" y2="210" stroke="var(--border-subtle, #334155)" strokeDasharray="2 2" />
      <FitLabel x={472} y={228} w={150} anchor="end" weight="bold" wrap={false} fill="var(--accent-emerald, #10b981)">
        {lbl.products || lbl.urunler || 'Ürünler (Hürün)'}
      </FitLabel>

      {/* Enthalpy Difference ΔH */}
      <line x1="480" y1="170" x2="480" y2="210" stroke="var(--accent-amber, #f59e0b)" strokeWidth="2.5" />
      <polygon points="477,210 480,217 483,210" fill="var(--accent-amber, #f59e0b)" />
      <FitLabel x={474} y={194} w={70} anchor="end" weight="bold" wrap={false} fill="var(--accent-amber, #f59e0b)">
        {lbl.dh_symbol || 'ΔH < 0'}
      </FitLabel>

      {/* Peak Activated Complex marker */}
      <circle cx="270" cy="60" r="5" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" className="anim-pulse" />
      <FitLabel x={270} y={45} w={170} weight="bold" valign="bottom" fill="var(--text-primary, #ffffff)">
        {lbl.ak || '[AK]‡'}
      </FitLabel>

      {/* Bottom Summary */}
      <FitLabel x={270} y={282} w={500} size={12} weight={600} valign="bottom" fill="var(--text-primary, #ffffff)">
        {lbl.cat || lbl.dh || 'Katalizör Aktifleşme Enerjisini (Ea) Düşürür, ΔH Değişmez!'}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 6. Acid-Base Titration Burette & Sigmoidal pH S-Curve
// ---------------------------------------------------------------------------
function renderTitrationBurette(spec: QuestionDiagramSpec) {
  const lbl = spec.labels || {};
  return (
    <g>
      {/* Left: Graduated Burette */}
      <rect x="110" y="30" width="22" height="130" fill="rgba(255,255,255,0.05)" stroke="var(--text-primary, #ffffff)" strokeWidth="2" />
      <line x1="110" y1="60" x2="120" y2="60" stroke="var(--text-secondary, #94a3b8)" />
      <line x1="110" y1="90" x2="125" y2="90" stroke="var(--text-secondary, #94a3b8)" />
      <line x1="110" y1="120" x2="120" y2="120" stroke="var(--text-secondary, #94a3b8)" />

      {/* Burette Stopcock & Tip */}
      <rect x="116" y="160" width="10" height="15" fill="var(--accent-amber, #f59e0b)" />
      <line x1="105" y1="167" x2="137" y2="167" stroke="var(--accent-amber, #f59e0b)" strokeWidth="3" />

      {/* Animated Dripping Droplets into Flask */}
      <circle cx="121" cy="188" r="3.5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-drip-1" />
      <circle cx="121" cy="202" r="3.5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-drip-2" />

      {/* Erlenmeyer Flask at Bottom */}
      <path d="M 112 195 L 90 245 A 8 8 0 0 0 98 255 L 144 255 A 8 8 0 0 0 152 245 L 130 195 Z" fill="rgba(6,182,212,0.15)" stroke="var(--text-primary, #ffffff)" strokeWidth="2" />
      <FitLabel x={158} y={232} w={66} size={10} anchor="start" weight="bold" fill="var(--accent-cyan, #06b6d4)">
        {lbl.solution || lbl.flask || 'Çözelti'}
      </FitLabel>

      {/* Right: Sigmoidal pH Titration Curve */}
      <line x1="230" y1="240" x2="480" y2="240" stroke="var(--text-secondary, #94a3b8)" strokeWidth="2" />
      <line x1="230" y1="240" x2="230" y2="40" stroke="var(--text-secondary, #94a3b8)" strokeWidth="2" />
      <FitLabel x={480} y={258} w={245} anchor="end" wrap={false} fill="var(--text-muted, #64748b)">
        {lbl.base_vol || lbl.volume || 'Eklenen Baz (mL)'}
      </FitLabel>
      <text x="235" y="32" textAnchor="start" fill="var(--text-muted, #64748b)" fontSize="11">pH</text>

      {/* S-Curve Path */}
      <path
        d="M 230 220 Q 320 215 340 180 L 350 100 Q 370 65 470 60"
        fill="none"
        stroke="var(--accent-ruby, #f43f5e)"
        strokeWidth="3.5"
      />

      {/* Equivalence Point (pH=7) Glow */}
      <circle cx="345" cy="140" r="6" fill="url(#dg-lit-gold)" filter="url(#dg-shadow)" className="anim-pulse" />
      <line x1="230" y1="140" x2="345" y2="140" stroke="var(--border-subtle, #334155)" strokeDasharray="3 3" />
      <text x="215" y="145" textAnchor="end" fill="var(--accent-amber, #f59e0b)" fontSize="11" fontWeight="bold">pH = 7.0</text>
      <FitLabel x={358} y={150} w={176} anchor="start" weight="bold" fill="var(--accent-amber, #f59e0b)">
        {lbl.eqpt || 'Eşdeğerlik Noktası'}
      </FitLabel>

      {/* Bottom Summary */}
      <FitLabel x={270} y={284} w={510} size={12} weight={600} wrap={false} fill="var(--text-primary, #ffffff)">
        {lbl.burette || 'Kuvvetli Asit - Kuvvetli Baz Titrasyonu: Ma·Va·za = Mb·Vb·zb'}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 7. Galvanic Daniell Cell (Zn Anode, Cu Cathode, Salt Bridge, Electron Stream)
// ---------------------------------------------------------------------------
function renderDaniellCell(spec: QuestionDiagramSpec) {
  const lbl = spec.labels || {};
  return (
    <g>
      {/* Left Beaker: Anode Half-Cell (ZnSO4) */}
      <rect x="70" y="130" width="130" height="110" rx="6" fill="rgba(6,182,212,0.12)" stroke="var(--border-subtle, #334155)" strokeWidth="2" />
      <rect x="110" y="90" width="22" height="110" fill="var(--border-strong, #94a3b8)" stroke="var(--border-subtle, #475569)" strokeWidth="2" />
      <FitLabel x={135} y={256} w={190} weight="bold" wrap={false} fill="var(--accent-cyan, #06b6d4)">
        {lbl.anode_label || lbl.anode || 'Zn Anot'}
      </FitLabel>
      <FitLabel x={135} y={222} w={120} size={10} fill="var(--text-muted, #64748b)">
        {lbl.anode_sol || '1 M ZnSO4(aq)'}
      </FitLabel>

      {/* Right Beaker: Cathode Half-Cell (CuSO4) */}
      <rect x="340" y="130" width="130" height="110" rx="6" fill="rgba(244,63,94,0.12)" stroke="var(--border-subtle, #334155)" strokeWidth="2" />
      <rect x="408" y="90" width="22" height="110" fill="var(--accent-amber, #f97316)" stroke="var(--accent-ruby, #c2410c)" strokeWidth="2" />
      <FitLabel x={405} y={256} w={190} weight="bold" wrap={false} fill="var(--accent-ruby, #f43f5e)">
        {lbl.cathode_label || lbl.cathode || 'Cu Katot'}
      </FitLabel>
      <FitLabel x={405} y={222} w={120} size={10} fill="var(--text-muted, #64748b)">
        {lbl.cathode_sol || '1 M CuSO4(aq)'}
      </FitLabel>

      {/* Central U-Shaped Salt Bridge */}
      <path
        d="M 165 180 L 165 105 A 25 25 0 0 1 190 80 L 350 80 A 25 25 0 0 1 375 105 L 375 180"
        fill="none"
        stroke="var(--accent-amber, #f59e0b)"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <FitLabel x={270} y={84} w={150} size={10} weight="bold" wrap={false} fill="#1a1204">
        {lbl.bridge || 'Tuz Köprüsü (KNO3)'}
      </FitLabel>

      {/* External Wire Circuit with Voltmeter */}
      <path d="M 121 90 L 121 40 L 240 40" fill="none" stroke="var(--text-primary, #ffffff)" strokeWidth="2.5" />
      <circle cx="270" cy="40" r="18" fill="var(--bg-surface-elevated, #161e2e)" stroke="var(--accent-emerald, #10b981)" strokeWidth="2.5" />
      <text x="270" y="44" textAnchor="middle" fill="var(--accent-emerald, #10b981)" fontSize="10" fontWeight="bold">
        +1.10V
      </text>
      <path d="M 300 40 L 419 40 L 419 90" fill="none" stroke="var(--text-primary, #ffffff)" strokeWidth="2.5" />

      {/* Animated Stream of Electrons (Anode to Cathode) */}
      <circle cx="125" cy="40" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-flow-1" />
      <circle cx="125" cy="40" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-flow-2" />
      <circle cx="305" cy="40" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-flow-3" />
      <circle cx="305" cy="40" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-flow-4" />

      {/* Bottom Summary */}
      <FitLabel x={270} y={282} w={510} size={12} weight={600} wrap={false} fill="var(--text-primary, #ffffff)">
        {lbl.anode_note || lbl.volt || 'Elektron Akışı: Dış devrede ANOT (Zn) -> KATOT (Cu)'}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 8. Electrolysis & Hoffman Voltameter (2:1 H2 vs O2 Gas Bubbles)
// ---------------------------------------------------------------------------
function renderElectrolysisHoffman(spec: QuestionDiagramSpec) {
  const lbl = spec.labels || {};
  return (
    <g>
      {/* 3-Tube Hoffman Apparatus Frame */}
      {/* Left Tube: Cathode (H2) */}
      <rect x="130" y="40" width="35" height="180" rx="4" fill="rgba(6,182,212,0.15)" stroke="var(--text-primary, #ffffff)" strokeWidth="2" />
      {/* Center Reservoir Tube */}
      <rect x="250" y="20" width="40" height="200" rx="4" fill="rgba(255,255,255,0.05)" stroke="var(--text-primary, #ffffff)" strokeWidth="2" />
      {/* Right Tube: Anode (O2) */}
      <rect x="375" y="40" width="35" height="180" rx="4" fill="rgba(244,63,94,0.15)" stroke="var(--text-primary, #ffffff)" strokeWidth="2" />

      {/* Bottom Cross Tube Connecting all three */}
      <rect x="130" y="195" width="280" height="25" fill="rgba(6,182,212,0.15)" stroke="var(--text-primary, #ffffff)" strokeWidth="2" />

      {/* Electrodes at Bottom */}
      <rect x="142" y="180" width="12" height="35" fill="var(--border-subtle, #475569)" />
      <rect x="387" y="180" width="12" height="35" fill="var(--border-subtle, #475569)" />

      {/* Gas Volumes Collected at Top: H2 is 2 Volumes, O2 is 1 Volume */}
      <rect x="132" y="42" width="31" height="70" fill="var(--accent-cyan-subtle, rgba(6,182,212,0.4))" />
      <rect x="377" y="42" width="31" height="35" fill="var(--accent-ruby-subtle, rgba(244,63,94,0.4))" />

      {/* Rising Bubbles (Animated with Light Mode Contrast Stroke) */}
      <circle cx="148" cy="150" r="3" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" stroke="var(--bg-canvas, #ffffff)" strokeWidth="1" className="anim-rise-1" />
      <circle cx="145" cy="130" r="3.5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" stroke="var(--bg-canvas, #ffffff)" strokeWidth="1" className="anim-rise-2" />
      <circle cx="150" cy="115" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" stroke="var(--bg-canvas, #ffffff)" strokeWidth="1" className="anim-rise-3" />

      <circle cx="392" cy="140" r="3" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" stroke="var(--bg-canvas, #ffffff)" strokeWidth="1" className="anim-rise-2" />
      <circle cx="390" cy="100" r="3.5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" stroke="var(--bg-canvas, #ffffff)" strokeWidth="1" className="anim-rise-1" />

      {/* Labels */}
      <FitLabel x={147} y={32} w={190} weight="bold" wrap={false} fill="var(--accent-cyan, #06b6d4)">
        {lbl.cathode || lbl.Katot || 'Katot: 2V (H2)'}
      </FitLabel>
      <FitLabel x={392} y={32} w={190} weight="bold" wrap={false} fill="var(--accent-ruby, #f43f5e)">
        {lbl.anode || lbl.Anot || 'Anot: 1V (O2)'}
      </FitLabel>

      {/* Bottom Summary */}
      <FitLabel x={270} y={260} w={510} wrap={false} fill="var(--text-secondary, #94a3b8)">
        {lbl.reaction || '2 H2O(s) → 2 H2(g) [Katot, -] + O2(g) [Anot, +]'}
      </FitLabel>
      <FitLabel x={270} y={282} w={510} size={12} weight={600} wrap={false} fill="var(--text-primary, #ffffff)">
        {lbl.cathode_h2 || lbl.faraday || 'Katotta Toplanan H2 Gazı Hacmi, Anottaki O2 Gazının 2 Katıdır!'}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 9. VSEPR Molecular Geometries (AX2, AX3, AX4, AX3E, AX2E2)
// ---------------------------------------------------------------------------
function renderVseprGeometry(spec: QuestionDiagramSpec) {
  const lbl = spec.labels || {};
  return (
    <g>
      {/* Center 1: Linear AX2 (180°) */}
      <g transform="translate(75, 50)">
        <g className="dg-float dg-d1">
        <Bond x1={20} y1={40} x2={100} y2={40} />
        <circle cx="60" cy="40" r="14" fill="url(#dg-lit-gold)" filter="url(#dg-shadow)" />
        <circle cx="20" cy="40" r="10" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="100" cy="40" r="10" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <text x="60" y="44" textAnchor="middle" fill="#0b1220" fontSize="10" fontWeight="bold">Be</text>
        <FitLabel x={60} y={73} w={128} size={10} valign="top" fill="var(--text-secondary, #94a3b8)">
          {lbl.ax2 || 'AX2 (180°)'}
        </FitLabel>
        </g>
      </g>

      {/* Center 2: Trigonal Planar AX3 (120°) */}
      <g transform="translate(210, 40)">
        <g className="dg-float dg-d2">
        <Bond x1={60} y1={45} x2={60} y2={15} />
        <Bond x1={60} y1={45} x2={25} y2={65} />
        <Bond x1={60} y1={45} x2={95} y2={65} />
        <circle cx="60" cy="45" r="14" fill="url(#dg-lit-green)" filter="url(#dg-shadow)" />
        <circle cx="60" cy="15" r="10" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="25" cy="65" r="10" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="95" cy="65" r="10" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <text x="60" y="49" textAnchor="middle" fill="#0b1220" fontSize="10" fontWeight="bold">B</text>
        <FitLabel x={60} y={93} w={128} size={10} valign="top" fill="var(--text-secondary, #94a3b8)">
          {lbl.ax3 || 'AX3 (120°)'}
        </FitLabel>
        </g>
      </g>

      {/* Center 3: Tetrahedral AX4 (109.5°) */}
      <g transform="translate(345, 40)">
        <g className="dg-float dg-d3">
        <Bond x1={60} y1={45} x2={60} y2={12} />
        <Bond x1={60} y1={45} x2={30} y2={70} />
        <Bond x1={60} y1={45} x2={75} y2={72} />
        <Bond x1={60} y1={45} x2={95} y2={55} />
        <circle cx="60" cy="45" r="14" fill="url(#dg-lit-slate)" filter="url(#dg-shadow)" />
        <circle cx="60" cy="12" r="9" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="30" cy="70" r="9" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="75" cy="72" r="9" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="95" cy="55" r="9" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <text x="60" y="49" textAnchor="middle" fill="var(--brand-on-primary, #ffffff)" fontSize="10" fontWeight="bold">C</text>
        <FitLabel x={60} y={93} w={128} size={10} valign="top" fill="var(--text-secondary, #94a3b8)">
          {lbl.ax4 || 'AX4 (109.5°)'}
        </FitLabel>
        </g>
      </g>

      {/* Center 4: Bent / Angular AX2E2 (104.5° - H2O with Two Non-Bonding Lone Pairs) */}
      <g transform="translate(130, 160)">
        <g className="dg-float dg-d4">
        {/* Pair 1 at -25° */}
        <ellipse cx="48" cy="24" rx="10" ry="5" transform="rotate(-25 48 24)" fill="none" stroke="var(--accent-amber, #f59e0b)" strokeDasharray="2 2" className="anim-pulse" />
        {/* Pair 2 at +25° */}
        <ellipse cx="72" cy="24" rx="10" ry="5" transform="rotate(25 72 24)" fill="none" stroke="var(--accent-amber, #f59e0b)" strokeDasharray="2 2" className="anim-pulse" />
        <Bond x1={60} y1={45} x2={30} y2={70} />
        <Bond x1={60} y1={45} x2={90} y2={70} />
        <circle cx="60" cy="45" r="14" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" />
        <circle cx="30" cy="70" r="10" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="90" cy="70" r="10" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <text x="60" y="49" textAnchor="middle" fill="var(--brand-on-primary, #ffffff)" fontSize="10" fontWeight="bold">O</text>
        <FitLabel x={60} y={93} w={170} size={10} valign="top" fill="var(--text-secondary, #94a3b8)">
          {lbl.ax2e2 || 'AX2E2 (104.5°)'}
        </FitLabel>
        </g>
      </g>

      {/* Center 5: Trigonal Pyramidal AX3E (107.3° - NH3) */}
      <g transform="translate(310, 160)">
        <g className="dg-float dg-d5">
        <ellipse cx="60" cy="26" rx="12" ry="6" fill="none" stroke="var(--accent-amber, #f59e0b)" strokeDasharray="2 2" className="anim-pulse" />
        <Bond x1={60} y1={45} x2={25} y2={70} />
        <Bond x1={60} y1={45} x2={60} y2={75} />
        <Bond x1={60} y1={45} x2={95} y2={70} />
        <circle cx="60" cy="45" r="14" fill="url(#dg-lit-blue)" filter="url(#dg-shadow)" />
        <circle cx="25" cy="70" r="9" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="60" cy="75" r="9" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="95" cy="70" r="9" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <text x="60" y="49" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">N</text>
        <FitLabel x={60} y={93} w={170} size={10} valign="top" fill="var(--text-secondary, #94a3b8)">
          {lbl.ax3e || 'AX3E (107.3°)'}
        </FitLabel>
        </g>
      </g>

      {/* Bottom Summary */}
      <FitLabel x={270} y={288} w={510} weight={600} wrap={false} fill="var(--text-primary, #ffffff)">
        {lbl.summary || lbl.vsepr || 'VSEPR: Ortaklanmamış Elektron Çifti Bağ Açısını Daraltır!'}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 10. Le Chatelier Equilibrium Shift Graph (Perturbation at t1)
// ---------------------------------------------------------------------------
function renderLeChatelierEquilibrium(spec: QuestionDiagramSpec) {
  const lbl = spec.labels || {};
  return (
    <g>
      {/* Cartesian Axes */}
      <line x1="70" y1="240" x2="490" y2="240" stroke="var(--text-secondary, #94a3b8)" strokeWidth="2" />
      <line x1="70" y1="240" x2="70" y2="40" stroke="var(--text-secondary, #94a3b8)" strokeWidth="2" />
      <FitLabel x={488} y={232} w={100} anchor="end" wrap={false} fill="var(--text-muted, #64748b)">
        {lbl.time || 'Zaman (t)'}
      </FitLabel>
      <FitLabel x={75} y={30} w={250} anchor="start" wrap={false} fill="var(--text-muted, #64748b)">
        {lbl.conc || 'Derişim (M)'}
      </FitLabel>

      {/* Time Markers t1 (Perturbation) and t2 (Re-equilibrium) */}
      <line x1="220" y1="240" x2="220" y2="50" stroke="var(--border-subtle, #334155)" strokeDasharray="3 3" />
      <FitLabel x={220} y={256} w={145} weight="bold" wrap={false} fill="var(--accent-amber, #f59e0b)">
        {lbl.t1 || 't1 (Etki)'}
      </FitLabel>

      <line x1="380" y1="240" x2="380" y2="50" stroke="var(--border-subtle, #334155)" strokeDasharray="3 3" />
      <FitLabel x={380} y={256} w={145} weight="bold" wrap={false} fill="var(--accent-emerald, #10b981)">
        {lbl.t2 || 't2 (Yeni Denge)'}
      </FitLabel>

      {/* Reactant 1 Curve: Sharp spike at t1 then gradual consumption */}
      <path
        d="M 70 120 L 220 120 L 220 60 Q 300 70 380 90 L 480 90"
        fill="none"
        stroke="var(--accent-cyan, #06b6d4)"
        strokeWidth="3"
      />
      <FitLabel x={78} y={112} w={138} anchor="start" weight="bold" valign="bottom" fill="var(--accent-cyan, #06b6d4)">
        {lbl.spike || '[N2] (Eklenen)'}
      </FitLabel>

      {/* Reactant 2 Curve: Gradual consumption after t1 */}
      <path
        d="M 70 160 L 220 160 Q 300 175 380 195 L 480 195"
        fill="none"
        stroke="var(--accent-ruby, #f43f5e)"
        strokeWidth="3"
      />
      <FitLabel x={78} y={152} w={138} anchor="start" weight="bold" valign="bottom" fill="var(--accent-ruby, #f43f5e)">
        {lbl.shift || '[H2] (Harcanan)'}
      </FitLabel>

      {/* Product Curve: Gradual increase after t1 */}
      <path
        d="M 70 200 L 220 200 Q 300 185 380 150 L 480 150"
        fill="none"
        stroke="var(--accent-emerald, #10b981)"
        strokeWidth="3"
      />
      <FitLabel x={78} y={193} w={138} anchor="start" weight="bold" valign="bottom" fill="var(--accent-emerald, #10b981)">
        {lbl.product || '[NH3] (Oluşan)'}
      </FitLabel>

      {/* Bottom Summary */}
      <FitLabel x={270} y={282} w={510} size={10.5} weight={600} wrap={false} fill="var(--text-primary, #ffffff)">
        {lbl.summary || lbl.kc_t || 'Le Chatelier: N2 eklenince denge ürünlere kayar; Kc sabittir!'}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 11. Laboratory Glassware & Separation Apparatus
// ---------------------------------------------------------------------------
function renderLabGlassware(spec: QuestionDiagramSpec) {
  const lbl = spec.labels || {};
  return (
    <g>
      {/* Separation Funnel (Ayırma Hunisi) */}
      <g transform="translate(100, 30)">
        <path
          d="M 50 20 L 70 20 L 70 40 L 95 80 L 65 140 L 65 170 L 55 170 L 55 140 L 25 80 L 50 40 Z"
          fill="none"
          stroke="var(--text-primary, #ffffff)"
          strokeWidth="2.5"
        />
        {/* Immiscible Layers */}
        <path d="M 35 100 L 85 100 L 65 140 L 55 140 Z" fill="rgba(6,182,212,0.3)" />
        <path d="M 45 60 L 75 60 L 85 100 L 35 100 Z" fill="rgba(245,158,11,0.3)" />
        <rect x="52" y="150" width="16" height="8" fill="var(--accent-ruby, #f43f5e)" />
        {/* Layer labels sit beside the funnel (outside the narrow glass) with leader lines */}
        <line x1="20" y1="80" x2="44" y2="80" stroke="var(--accent-amber, #f59e0b)" strokeWidth="1.2" />
        <line x1="20" y1="118" x2="52" y2="118" stroke="var(--accent-cyan, #06b6d4)" strokeWidth="1.2" />
        <FitLabel x={16} y={84} w={100} size={10} anchor="end" weight="bold" fill="var(--accent-amber, #f59e0b)">
          {lbl.oil || lbl.top || 'Yağ (Üst)'}
        </FitLabel>
        <FitLabel x={16} y={122} w={100} size={10} anchor="end" weight="bold" fill="var(--accent-cyan, #06b6d4)">
          {lbl.water || lbl.bottom || 'Su (Alt)'}
        </FitLabel>
        <FitLabel x={60} y={192} w={170} valign="top" fill="var(--text-secondary, #94a3b8)">
          {lbl.funnel || lbl.item4 || 'Ayırma Hunisi'}
        </FitLabel>
      </g>

      {/* Beaker & Volumetric Flask */}
      <g transform="translate(300, 50)">
        {/* Beaker */}
        <rect x="30" y="70" width="70" height="90" rx="4" fill="rgba(6,182,212,0.15)" stroke="var(--text-primary, #ffffff)" strokeWidth="2" />
        <line x1="30" y1="100" x2="45" y2="100" stroke="var(--text-secondary, #94a3b8)" />
        <line x1="30" y1="120" x2="50" y2="120" stroke="var(--text-secondary, #94a3b8)" />
        <line x1="30" y1="140" x2="45" y2="140" stroke="var(--text-secondary, #94a3b8)" />
        <FitLabel x={60} y={180} w={92} valign="top" fill="var(--text-secondary, #94a3b8)">
          {lbl.beaker || lbl.item2 || 'Beherglas'}
        </FitLabel>

        {/* Volumetric Flask (Balon Joje) */}
        <path
          d="M 140 40 L 150 40 L 150 90 L 175 145 A 15 15 0 0 1 165 160 L 125 160 A 15 15 0 0 1 115 145 L 140 90 Z"
          fill="rgba(16,185,129,0.15)"
          stroke="var(--text-primary, #ffffff)"
          strokeWidth="2"
        />
        <line x1="138" y1="75" x2="152" y2="75" stroke="var(--accent-ruby, #f43f5e)" strokeWidth="1.5" />
        <FitLabel x={157} y={180} w={74} valign="top" fill="var(--text-secondary, #94a3b8)">
          {lbl.flask || lbl.item3 || 'Balon Joje'}
        </FitLabel>
      </g>

      {/* Bottom Summary */}
      <FitLabel x={270} y={282} w={510} size={12} weight={600} wrap={false} fill="var(--text-primary, #ffffff)">
        {lbl.item1 || lbl.summary || 'Hassas Çözelti Hazırlama ve Yoğunluk Farkıyla Ayırma'}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// Embedded CSS Keyframes for High-Performance GPU SVG Animations
// ---------------------------------------------------------------------------
const DIAGRAM_KEYFRAMES = `
  @keyframes spinFast {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes spinMed {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pulseGlow {
    0%, 100% { opacity: 0.8; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.08); }
  }
  @keyframes floatY {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  @keyframes bounce1 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(4px, -6px); }
  }
  @keyframes bounce2 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-5px, 4px); }
  }
  @keyframes bounce3 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(3px, 5px); }
  }
  @keyframes dripDrop {
    0% { transform: translateY(0); opacity: 1; }
    80% { transform: translateY(25px); opacity: 0.8; }
    100% { transform: translateY(35px); opacity: 0; }
  }
  @keyframes flowContinuous {
    0% { transform: translateX(0px); opacity: 0; }
    10% { opacity: 1; }
    85% { opacity: 1; }
    100% { transform: translateX(110px); opacity: 0; }
  }
  @keyframes bubbleRise {
    0% { transform: translateY(0) scale(0.8); opacity: 0.3; }
    50% { opacity: 1; }
    100% { transform: translateY(-40px) scale(1.2); opacity: 0; }
  }

  @keyframes dgFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  .chemical-diagram-svg text { font-family: var(--font-sans); }
  .anim-pulse, .anim-float-y, .dg-float { transform-box: fill-box; }
  .anim-spin-fast { animation: spinFast 3s linear infinite; }
  .anim-spin-med { animation: spinMed 6s linear infinite; }
  .anim-spin-slow { animation: spinSlow 10s linear infinite; }
  .anim-pulse { animation: pulseGlow 2.4s ease-in-out infinite; transform-origin: center; }
  .anim-float-y { animation: floatY 2.5s ease-in-out infinite; }
  .anim-bounce-1 { animation: bounce1 1.5s ease-in-out infinite; }
  .anim-bounce-2 { animation: bounce2 1.8s ease-in-out infinite; }
  .anim-bounce-3 { animation: bounce3 2.1s ease-in-out infinite; }
  .anim-drip-1 { animation: dripDrop 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
  .anim-drip-2 { animation: dripDrop 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.8s; }
  .anim-flow-1 { animation: flowContinuous 2s linear infinite; }
  .anim-flow-2 { animation: flowContinuous 2s linear infinite 1s; }
  .anim-flow-3 { animation: flowContinuous 2s linear infinite; }
  .anim-flow-4 { animation: flowContinuous 2s linear infinite 1s; }
  .anim-rise-1 { animation: bubbleRise 2s ease-in infinite; }
  .anim-rise-2 { animation: bubbleRise 2s ease-in infinite 0.7s; }
  .anim-rise-3 { animation: bubbleRise 2s ease-in infinite 1.4s; }
  .dg-float { animation: dgFloat 5s ease-in-out infinite; }
  .dg-d2 { animation-delay: -1s; }
  .dg-d3 { animation-delay: -2s; }
  .dg-d4 { animation-delay: -3s; }
  .dg-d5 { animation-delay: -4s; }

  /* Reduced motion (OS setting or the in-app toggle): a still, readable figure */
  @media (prefers-reduced-motion: reduce) {
    .chemical-diagram-svg * { animation: none !important; }
  }
  :root[data-reduce-motion] .chemical-diagram-svg * { animation: none !important; }
`;
