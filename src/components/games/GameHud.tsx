import React from 'react';
import { ArrowLeft } from 'lucide-react';

export interface GameHudProps {
  title: string;
  backLabel: string;
  onBack: () => void;
  /** Stat chips (use <GameStat/>). */
  children?: React.ReactNode;
}

/**
 * Fixed header shared by every mini-game (artboard: back key, title, stat chips).
 * Rendered inside .gm-play as the screen head; the reading area below is the only scroller.
 */
export const GameHud: React.FC<GameHudProps> = ({ title, backLabel, onBack, children }) => (
  <header className="ky-screen-head gm-hud">
    <button
      type="button"
      onClick={onBack}
      className="ky-icon-btn gm-back"
      aria-label={backLabel}
      title={backLabel}
    >
      <ArrowLeft size={20} aria-hidden="true" />
    </button>
    <h1 className="gm-hud-title ky-disp ky-fs-20">{title}</h1>
    {children ? <div className="gm-stats">{children}</div> : null}
  </header>
);

export interface GameStatProps {
  /** Optional leading icon. */
  icon?: React.ReactNode;
  /** Accessible name (read before the value). Pass "" when the value already names itself. */
  label: string;
  value: React.ReactNode;
  tone?: 'gold' | 'accent' | 'bad' | 'violet';
  /** Monospaced digits (scores, timers). Default true. */
  mono?: boolean;
}

/** Header chip (artboard: 36px tall chip, mono digits). */
export const GameStat: React.FC<GameStatProps> = ({ icon, label, value, tone, mono = true }) => (
  <span className={`ky-chip gm-stat${tone ? ` ky-chip--${tone} gm-stat--${tone}` : ''}${mono ? ' ky-mono' : ''}`} title={label || undefined}>
    {icon}
    {label ? <span className="gm-sr">{label}: </span> : null}
    <span>{value}</span>
  </span>
);

const SUBSCRIPT = '₀₁₂₃₄₅₆₇₈₉';

/** "Ca(OH)2" -> "Ca(OH)₂". Digits after an element or closing bracket become subscripts; leading coefficients stay. */
export function toSub(formula: string): string {
  return formula.replace(/([A-Za-z)\]])(\d+)/g, (_m, a: string, d: string) =>
    a + Array.from(d, (c) => SUBSCRIPT[Number(c)]).join('')
  );
}

/** Seconds -> "00:38". */
export function clock(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}
