import React from 'react';

export interface FlaskMarkProps {
  width?: number;
  height?: number;
}

/**
 * Animated SVG Erlenmeyer flask with glowing bubbling chemical reaction
 */
export const FlaskMark: React.FC<FlaskMarkProps> = ({ width = 120, height = 120 }) => {
  return (
    <div className="flask-animated-stage" aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        width={width}
        height={height}
        className="flask-svg"
      >
        <defs>
          <linearGradient id="flaskLiquid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
          </linearGradient>
          <filter id="flaskGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Flask Glass Outline */}
        <path
          d="M 44,12 L 56,12 L 56,36 L 78,74 A 8 8 0 0 1 70,86 L 30,86 A 8 8 0 0 1 22,74 L 44,36 Z"
          fill="none"
          stroke="var(--brand-primary, #38bdf8)"
          strokeWidth="3.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Flask Lip */}
        <line x1="41" y1="12" x2="59" y2="12" stroke="var(--brand-primary, #38bdf8)" strokeWidth="3.5" strokeLinecap="round" />

        {/* Liquid Boiling In Flask */}
        <path
          d="M 33,68 Q 50,65 67,68 L 71,76 A 6 6 0 0 1 65,83 L 35,83 A 6 6 0 0 1 29,76 Z"
          fill="url(#flaskLiquid)"
          filter="url(#flaskGlow)"
        />

        {/* Rising Effervescent Bubbles */}
        <circle cx="45" cy="74" r="2.5" fill="#ffffff" opacity="0.9">
          <animate attributeName="cy" values="76;45;35" dur="1.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9;0.6;0" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="55" cy="72" r="3" fill="#ffffff" opacity="0.8">
          <animate attributeName="cy" values="75;50;38" dur="1.8s" begin="0.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.5;0" dur="1.8s" begin="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="49" cy="78" r="2" fill="#ffffff" opacity="0.9">
          <animate attributeName="cy" values="78;52;40" dur="1.2s" begin="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.9;0.4;0" dur="1.2s" begin="0.8s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};
