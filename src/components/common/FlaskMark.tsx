import React, { useId } from 'react';

export interface FlaskMarkProps {
  width?: number;
  height?: number;
  /** "full" = lit glass flask with gold orbits (splash, hero); "mark" = simplified glyph readable at 24–40px. */
  variant?: 'full' | 'mark';
}

const FLASK_PATH = 'M52 18h16v24l26 46a9 9 0 0 1-9 14H35a9 9 0 0 1-9-14l26-46z';
const LIQUID_PATH = 'M41.5 66h37l12.6 22.6A6.5 6.5 0 0 1 85 98.5H35a6.5 6.5 0 0 1-6.1-9.9z';

/**
 * Kimya 3D logo — glass Erlenmeyer flask (the lab) wrapped by two gold orbits (the atom).
 * The orbits pass behind and in front of the glass for depth; bubbles rise in the liquid
 * (CSS animation, disabled by prefers-reduced-motion and the in-app reduce-motion setting).
 */
export const FlaskMark: React.FC<FlaskMarkProps> = ({ width = 120, height = 120, variant = 'full' }) => {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const liquidId = `fm-${uid}-liquid`;
  const glassId = `fm-${uid}-glass`;
  const goldId = `fm-${uid}-gold`;

  if (variant === 'mark') {
    return (
      <span className="flask-animated-stage" aria-hidden="true">
        <svg viewBox="0 0 120 120" width={width} height={height} className="flask-svg">
          <path d={FLASK_PATH} fill="rgba(45,217,195,.18)" stroke="#8CF5E7" strokeWidth="6" strokeLinejoin="round" />
          <path d={LIQUID_PATH} fill="#2DD9C3" />
          <ellipse cx="60" cy="70" rx="52" ry="16" transform="rotate(-26 60 70)" fill="none" stroke="#F6B73C" strokeWidth="5" />
        </svg>
      </span>
    );
  }

  return (
    <span className="flask-animated-stage" aria-hidden="true">
      <svg viewBox="0 0 120 120" width={width} height={height} className="flask-svg">
        <defs>
          <linearGradient id={liquidId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5FF2DF" />
            <stop offset="1" stopColor="#0C8073" />
          </linearGradient>
          <linearGradient id={glassId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity=".30" />
            <stop offset=".5" stopColor="#2DD9C3" stopOpacity=".08" />
            <stop offset="1" stopColor="#2DD9C3" stopOpacity=".26" />
          </linearGradient>
          <linearGradient id={goldId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFE08A" />
            <stop offset="1" stopColor="#F6B73C" />
          </linearGradient>
        </defs>

        {/* Orbits — back halves (behind the glass) */}
        <g fill="none" stroke="#A86A08" strokeWidth="2.6" opacity=".8">
          <path transform="rotate(-26 60 70)" d="M10 70 A50 17 0 0 1 110 70" />
          <path transform="rotate(26 60 70)" d="M10 70 A50 17 0 0 1 110 70" />
        </g>

        {/* Glass, liquid, meniscus, bubbles, neck lip and specular streak */}
        <path d={FLASK_PATH} fill={`url(#${glassId})`} stroke="#8CF5E7" strokeWidth="3" strokeLinejoin="round" />
        <path d={LIQUID_PATH} fill={`url(#${liquidId})`} />
        <ellipse cx="60" cy="66" rx="18.5" ry="3.4" fill="#C6FFF7" />
        <circle className="flask-bubble" cx="52" cy="82" r="3" fill="#C6FFF7" opacity=".8" />
        <circle className="flask-bubble b2" cx="66" cy="88" r="2" fill="#C6FFF7" opacity=".7" />
        <circle className="flask-bubble b3" cx="61" cy="76" r="1.5" fill="#C6FFF7" opacity=".7" />
        <rect x="48.5" y="13.5" width="23" height="6.5" rx="3.2" fill="#8CF5E7" />
        <path d="M47 58 36 79" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".55" />

        {/* Orbits — front halves (in front of the glass) with two electrons */}
        <g fill="none" stroke={`url(#${goldId})`} strokeWidth="3.2" strokeLinecap="round">
          <path transform="rotate(-26 60 70)" d="M10 70 A50 17 0 0 0 110 70" />
          <path transform="rotate(26 60 70)" d="M10 70 A50 17 0 0 0 110 70" />
        </g>
        <circle cx="24" cy="97" r="5" fill="#FFE08A" stroke="#A86A08" strokeWidth="1" />
        <circle cx="97" cy="96" r="5" fill="#FFE08A" stroke="#A86A08" strokeWidth="1" />
      </svg>
    </span>
  );
};
