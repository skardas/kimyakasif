import React from 'react';
import { ArrowLeft } from 'lucide-react';

export interface GameHudProps {
  title: string;
  backLabel: string;
  onBack: () => void;
  /** Stat wells (use <GameStat/>). */
  children?: React.ReactNode;
}

/** Top HUD bar shared by every mini-game: back icon button, title and stat wells. */
export const GameHud: React.FC<GameHudProps> = ({ title, backLabel, onBack, children }) => (
  <div className="gm-hud">
    <button
      type="button"
      onClick={onBack}
      className="ky-icon-btn gm-back"
      aria-label={backLabel}
      title={backLabel}
    >
      <ArrowLeft size={20} aria-hidden="true" />
    </button>
    <h1 className="gm-hud-title">{title}</h1>
    {children ? <div className="gm-stats">{children}</div> : null}
  </div>
);

export interface GameStatProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  tone?: 'gold' | 'accent' | 'bad';
}

export const GameStat: React.FC<GameStatProps> = ({ icon, label, value, tone }) => (
  <div className={`gm-stat${tone ? ` gm-stat--${tone}` : ''}`} title={label} role="group" aria-label={label}>
    {icon}
    <span>{value}</span>
  </div>
);
