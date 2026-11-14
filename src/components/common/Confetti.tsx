import { useEffect, useRef } from 'react';

export interface ConfettiProps {
  /** Her sayısal artışta yeni bir konfeti patlaması başlar */
  burstKey: number;
}

/**
 * Kimya Spektral Emisyon ve Alev Deneyi Paleti:
 * - Bakır(II) / Siyan mavisi (#06b6d4, #0ea5e9)
 * - Baryum / Nikel zümrüt yeşili (#10b981, #059669)
 * - Sodyum altın sarısı / alev (#f59e0b, #fbbf24)
 * - Potasyum eflatunu / Permanganat (#8b5cf6, #a855f7)
 * - Lityum / Stronsiyum kızılı (#f43f5e, #ef4444)
 * - Laboratuvar gümüşü / parıltı (#f1f5f9)
 */
const CHEMISTRY_PALETTE = [
  '#06b6d4',
  '#0ea5e9',
  '#10b981',
  '#059669',
  '#f59e0b',
  '#fbbf24',
  '#8b5cf6',
  '#a855f7',
  '#f43f5e',
  '#ef4444',
  '#f1f5f9',
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  w: number;
  h: number;
  color: string;
  shape: 0 | 1 | 2; // 0: Şerit kağıt, 1: Efervesan baloncuk, 2: Kristal elmas
  wobble: number;
}

/**
 * Kimya YKS — Accessible Celebration Confetti Engine
 * HTML5 Canvas tabanlı parçacık patlaması.
 * Dokunmaları engellemez (pointer-events: none).
 * prefers-reduced-motion ve data-reduce-motion durumunda çizilmez.
 */
export function Confetti({ burstKey }: ConfettiProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!burstKey) return;
    if (document.documentElement.hasAttribute('data-reduce-motion')) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = ref.current;
    if (!canvas) return;
    const g = canvas.getContext('2d');
    if (!g) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    g.scale(dpr, dpr);

    const pieces: Particle[] = [];
    const spawn = (x: number, y: number, angle: number, spread: number, n: number, speed: number) => {
      for (let i = 0; i < n; i++) {
        const a = angle + (Math.random() - 0.5) * spread;
        const v = speed * (0.55 + Math.random() * 0.6);
        const randShape = Math.random();
        pieces.push({
          x,
          y,
          vx: Math.cos(a) * v,
          vy: Math.sin(a) * v,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.4,
          w: 8 + Math.random() * 7,
          h: 10 + Math.random() * 12,
          color: CHEMISTRY_PALETTE[Math.floor(Math.random() * CHEMISTRY_PALETTE.length)],
          shape: randShape < 0.35 ? 1 : randShape < 0.6 ? 2 : 0,
          wobble: Math.random() * Math.PI * 2,
        });
      }
    };

    const speed = Math.max(14, Math.min(22, H / 38));
    spawn(0, H, -Math.PI / 3, 0.7, 95, speed); // Sol alt köşe
    spawn(W, H, (-2 * Math.PI) / 3, 0.7, 95, speed); // Sağ alt köşe
    spawn(W / 2, H * 0.45, -Math.PI / 2, Math.PI * 1.6, 75, speed * 0.65); // Merkez fıskiye

    let raf = 0;
    const start = performance.now();

    const frame = (now: number) => {
      const elapsed = (now - start) / 1000;
      g.clearRect(0, 0, W, H);
      const fade = elapsed > 2.6 ? Math.max(0, 1 - (elapsed - 2.6) / 0.9) : 1;

      for (const p of pieces) {
        p.vy += 0.42; // Yerçekimi
        p.vx *= 0.985; // Hava sürtünmesi
        p.vy *= 0.985;
        p.wobble += 0.15;
        p.x += p.vx + Math.sin(p.wobble) * 0.6;
        p.y += p.vy;
        p.rot += p.vr;

        g.save();
        g.globalAlpha = fade;
        g.translate(p.x, p.y);
        g.rotate(p.rot);
        g.fillStyle = p.color;

        if (p.shape === 1) {
          // Efervesan daire / kimyasal baloncuk
          g.beginPath();
          g.arc(0, 0, p.w * 0.42, 0, Math.PI * 2);
          g.fill();
        } else if (p.shape === 2) {
          // Kristal kafes elmas parçacığı
          const half = p.w * 0.5;
          g.beginPath();
          g.moveTo(0, -half * 1.3);
          g.lineTo(half, 0);
          g.lineTo(0, half * 1.3);
          g.lineTo(-half, 0);
          g.closePath();
          g.fill();
        } else {
          // Dönerken 3D daralan şerit konfeti kâğıdı
          const flutterH = p.h * Math.abs(Math.cos(p.wobble)) + 1;
          g.fillRect(-p.w / 2, (-p.h / 2) * Math.abs(Math.cos(p.wobble)), p.w, flutterH);
        }
        g.restore();
      }

      if (elapsed < 3.6) {
        raf = requestAnimationFrame(frame);
      } else {
        g.clearRect(0, 0, W, H);
      }
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [burstKey]);

  return <canvas ref={ref} className="confetti-layer" aria-hidden="true" />;
}
