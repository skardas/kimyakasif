import React, { useId, useState, useEffect } from 'react';

export interface FlaskMarkProps {
  width?: number;
  height?: number;
}

/**
 * 3D-shaded animated SVG Erlenmeyer flask with volumetric meniscus glow,
 * bubbling chemical reaction, and orbiting atomic electron rings.
 */
export const FlaskMark: React.FC<FlaskMarkProps> = ({ width = 120, height = 120 }) => {
  const reactId = useId();
  const cleanId = reactId.replace(/[^a-zA-Z0-9-_]/g, '');
  const liquidId = `flask-${cleanId}-liquid`;
  const glassId = `flask-${cleanId}-glass`;
  const meniscusId = `flask-${cleanId}-meniscus`;
  const glowId = `flask-${cleanId}-glow`;
  const orbitBackId = `flask-${cleanId}-orb-back`;
  const orbitFrontId = `flask-${cleanId}-orb-front`;
  const clipLiquidId = `flask-${cleanId}-clip`;

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(listener);
      return () => mediaQuery.removeListener(listener);
    }
  }, []);

  return (
    <div className="flask-animated-stage" aria-hidden="true">
      <div className="flask-3d-rig">
        <svg viewBox="0 0 120 120" width={width} height={height} className="flask-svg">
          <defs>
            <linearGradient id={glassId} x1="15%" y1="10%" x2="85%" y2="95%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.22" />
              <stop offset="55%" stopColor="#0e7490" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.26" />
            </linearGradient>

            <linearGradient id={liquidId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.92" />
              <stop offset="48%" stopColor="#06b6d4" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.98" />
            </linearGradient>

            <linearGradient id={meniscusId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.72" />
              <stop offset="50%" stopColor="#e0f2fe" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.72" />
            </linearGradient>

            <linearGradient id={orbitBackId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b45309" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#d97706" stopOpacity="0.68" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.45" />
            </linearGradient>

            <linearGradient id={orbitFrontId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>

            <clipPath id={clipLiquidId}>
              <path d="M 52,18 L 68,18 L 68,42 L 94,88 A 9 9 0 0 1 85,102 L 35,102 A 9 9 0 0 1 26,88 L 52,42 Z" />
            </clipPath>

            <filter id={glowId} x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="2.6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Back Halves of 3D Atomic Orbital Rings (behind flask glass) */}
          <g transform="translate(60 71)">
            <path
              d="M -42,0 A 42,14 0 0 1 42,0"
              transform="rotate(-28)"
              fill="none"
              stroke={`url(#${orbitBackId})`}
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M -42,0 A 42,14 0 0 1 42,0"
              transform="rotate(28)"
              fill="none"
              stroke={`url(#${orbitBackId})`}
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </g>

          {/* 3D Flask Glass Body */}
          <path
            d="M 52,18 L 68,18 L 68,42 L 94,88 A 9 9 0 0 1 85,102 L 35,102 A 9 9 0 0 1 26,88 L 52,42 Z"
            fill={`url(#${glassId})`}
            stroke="var(--brand-primary, #38bdf8)"
            strokeWidth="3.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Volumetric Liquid + 3D Top Meniscus clipped cleanly inside glass */}
          <g clipPath={`url(#${clipLiquidId})`}>
            <path
              d="M 24,71 Q 60,67 96,71 L 98,104 L 22,104 Z"
              fill={`url(#${liquidId})`}
              filter={`url(#${glowId})`}
            />
            <ellipse
              cx="60"
              cy="71"
              rx="22"
              ry="3.6"
              fill={`url(#${meniscusId})`}
              stroke="#e0f2fe"
              strokeWidth="0.9"
            />
          </g>

          {/* Left 3D Curved Glass Specular Sheen & Top Lip Capsule */}
          <path
            d="M 55,25 L 55,44 L 34,88 Q 33,93 36,96"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.6"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          <rect
            x="48"
            y="14"
            width="24"
            height="5.5"
            rx="2.75"
            fill="#164e63"
            fillOpacity="0.88"
            stroke="#a5f3fc"
            strokeWidth="2.1"
          />

          {/* Effervescent Rising Bubbles */}
          {!prefersReducedMotion ? (
            <>
              <circle cx="52" cy="86" r="2.6" fill="#ffffff" opacity="0.9">
                <animate attributeName="cy" values="90;52;36" dur="1.45s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.95;0.65;0" dur="1.45s" repeatCount="indefinite" />
              </circle>
              <circle cx="67" cy="84" r="3.1" fill="#ffffff" opacity="0.82">
                <animate attributeName="cy" values="88;56;40" dur="1.85s" begin="0.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.85;0.55;0" dur="1.85s" begin="0.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="59" cy="91" r="2.1" fill="#ffffff" opacity="0.9">
                <animate attributeName="cy" values="92;58;44" dur="1.25s" begin="0.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;0.45;0" dur="1.25s" begin="0.8s" repeatCount="indefinite" />
              </circle>
            </>
          ) : (
            <>
              <circle cx="52" cy="78" r="2.5" fill="#ffffff" opacity="0.65" />
              <circle cx="67" cy="72" r="3" fill="#ffffff" opacity="0.65" />
              <circle cx="59" cy="84" r="2" fill="#ffffff" opacity="0.65" />
            </>
          )}

          {/* Front Halves of 3D Atomic Orbital Rings + Orbiting Electron Spheres */}
          <g transform="translate(60 71)" filter={`url(#${glowId})`}>
            <path
              d="M -42,0 A 42,14 0 0 0 42,0"
              transform="rotate(-28)"
              fill="none"
              stroke={`url(#${orbitFrontId})`}
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d="M -42,0 A 42,14 0 0 0 42,0"
              transform="rotate(28)"
              fill="none"
              stroke={`url(#${orbitFrontId})`}
              strokeWidth="2.6"
              strokeLinecap="round"
            />

            {/* Central Nucleus Spark */}
            <circle cx="0" cy="0" r="4.1" fill="#fbbf24" />
            <circle cx="-1.3" cy="-1.3" r="1.4" fill="#ffffff" />

            {/* Orbiting Electrons */}
            {!prefersReducedMotion ? (
              <>
                <g transform="rotate(-28)">
                  <circle r="3.4" fill="#fde047">
                    <animateMotion
                      dur="4.4s"
                      repeatCount="indefinite"
                      path="M -42,0 A 42,14 0 1,0 42,0 A 42,14 0 1,0 -42,0"
                    />
                  </circle>
                </g>
                <g transform="rotate(28)">
                  <circle r="3.4" fill="#38bdf8">
                    <animateMotion
                      dur="5.2s"
                      begin="-2.1s"
                      repeatCount="indefinite"
                      path="M 42,0 A 42,14 0 1,0 -42,0 A 42,14 0 1,0 42,0"
                    />
                  </circle>
                </g>
              </>
            ) : (
              <>
                <circle cx="-35" cy="14" r="3.2" fill="#fde047" />
                <circle cx="35" cy="14" r="3.2" fill="#38bdf8" />
              </>
            )}
          </g>
        </svg>
      </div>
    </div>
  );
};
