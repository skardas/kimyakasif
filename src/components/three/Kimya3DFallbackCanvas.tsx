// ============================================================================
// src/components/three/Kimya3DFallbackCanvas.tsx
// Milestone 3: 2D Canvas / SVG Fallback Visualizer for WebGL-Disabled Environments
// ============================================================================

import React, { useRef, useEffect } from 'react';
import type { LanguageCode } from '../../types/chemistry';
import type { ChemicalSceneSpec, Hotspot3D } from '../../data/threeScenesData';
import { ShieldAlert, Sparkles } from 'lucide-react';

export interface Kimya3DFallbackCanvasProps {
  scene: ChemicalSceneSpec;
  lang: LanguageCode;
  selectedHotspotId: string | null;
  onSelectHotspot: (hotspot: Hotspot3D) => void;
  isDark: boolean;
  mode: 'explore' | 'quiz';
  quizTargetHotspotId?: string | null;
}

export const Kimya3DFallbackCanvas: React.FC<Kimya3DFallbackCanvasProps> = ({
  scene,
  lang,
  selectedHotspotId,
  onSelectHotspot,
  isDark,
  mode,
  quizTargetHotspotId,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const render = () => {
      time += 0.02;
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2;

      // Clear background
      ctx.fillStyle = isDark ? '#0b0f19' : '#f8fafc';
      ctx.fillRect(0, 0, width, height);

      // Grid lines
      ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.08)' : 'rgba(2, 132, 199, 0.08)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw projected schematic from hotspots
      const scale = Math.min(width, height) / 8.5;

      // Draw connective lines between hotspots
      if (scene.hotspots.length > 1) {
        ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.4)' : 'rgba(100, 116, 139, 0.4)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        scene.hotspots.forEach((hs, idx) => {
          const px = cx + hs.position[0] * scale;
          const py = cy - hs.position[1] * scale;
          if (idx === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.stroke();
      }

      // Draw Hotspot Nodes on 2D Canvas
      scene.hotspots.forEach((hs) => {
        const px = cx + hs.position[0] * scale;
        const py = cy - hs.position[1] * scale;
        const isSelected = selectedHotspotId === hs.id;
        const isTarget = mode === 'quiz' && quizTargetHotspotId === hs.id;

        // Outer glow
        const glowRadius = isSelected ? 24 : 18;
        const grad = ctx.createRadialGradient(px, py, 4, px, py, glowRadius);
        grad.addColorStop(0, hs.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Node circle
        ctx.fillStyle = isSelected ? '#ffffff' : hs.color;
        ctx.beginPath();
        ctx.arc(px, py, isSelected ? 12 : 9, 0, Math.PI * 2);
        ctx.fill();

        // Inner border
        ctx.strokeStyle = isDark ? '#0b0f19' : '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Label
        ctx.font = 'bold 12px system-ui, sans-serif';
        ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
        ctx.textAlign = 'center';
        const labelText = mode === 'quiz' ? `?` : (hs.badgeLabel || `${hs.pinNumber}`);
        ctx.fillText(labelText, px, py - 16);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [scene, isDark, selectedHotspotId, mode, quizTargetHotspotId]);

  // Handle canvas click to select hotspot
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const scale = Math.min(width, height) / 8.5;

    let closest: Hotspot3D | null = null;
    let minDist = 35; // tap radius in px

    scene.hotspots.forEach((hs) => {
      const px = cx + hs.position[0] * scale;
      const py = cy - hs.position[1] * scale;
      const dist = Math.hypot(clickX - px, clickY - py);
      if (dist < minDist) {
        minDist = dist;
        closest = hs;
      }
    });

    if (closest) {
      onSelectHotspot(closest);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: isDark ? '#0b0f19' : '#f8fafc',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      {/* Notice Pill */}
      <div
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 14px',
          borderRadius: '9999px',
          background: isDark ? 'rgba(30, 41, 59, 0.85)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--border-color, rgba(148, 163, 184, 0.3))',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: 'var(--brand-primary, #0284c7)',
        }}
      >
        <ShieldAlert size={16} color="#f59e0b" />
        <span>WebGL 2D Güvenli Mod • Model: {scene.title[lang] || scene.title.tr}</span>
      </div>

      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onClick={handleCanvasClick}
        style={{
          width: '100%',
          height: '100%',
          maxHeight: '600px',
          cursor: 'pointer',
          touchAction: 'none',
        }}
        aria-label={`2D Görselleştirici: ${scene.title[lang] || scene.title.tr}`}
      />

      {/* Interactive Legend / Hotspot Buttons below */}
      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          justifyContent: 'center',
          pointerEvents: 'auto',
        }}
      >
        {scene.hotspots.map((hs) => {
          const isSelected = selectedHotspotId === hs.id;
          return (
            <button
              key={hs.id}
              onClick={() => onSelectHotspot(hs)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 12px',
                borderRadius: '8px',
                border: isSelected ? '2px solid var(--brand-primary, #38bdf8)' : '1px solid rgba(148, 163, 184, 0.3)',
                background: isSelected ? (isDark ? '#1e293b' : '#e0f2fe') : (isDark ? '#111827' : '#ffffff'),
                color: isDark ? '#f8fafc' : '#0f172a',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: hs.color,
                }}
              />
              <span>{mode === 'quiz' ? `Nokta ${hs.pinNumber}` : (hs.title[lang] || hs.title.tr)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
