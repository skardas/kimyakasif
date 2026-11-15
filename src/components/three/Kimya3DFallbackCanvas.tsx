// ============================================================================
// src/components/three/Kimya3DFallbackCanvas.tsx
// Milestone 1: 2D Canvas Fallback Visualizer for WebGL-Disabled Environments
// ============================================================================

import React, { useRef, useEffect, useState, useCallback } from 'react';
import type { LanguageCode } from '../../types/chemistry';
import type { ChemicalSceneSpec, Hotspot3D } from '../../data/threeScenesData';
import { ShieldAlert, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { ZOOM_FIT_I18N } from './Kimya3DLab';

export interface Kimya3DFallbackCanvasProps {
  scene: ChemicalSceneSpec;
  lang: LanguageCode;
  selectedHotspotId: string | null;
  onSelectHotspot: (hotspot: Hotspot3D) => void;
  isDark: boolean;
  mode: 'explore' | 'quiz';
  quizTargetHotspotId?: string | null;
}

/**
 * Draws recognizable 2D schematic shapes for chemical scenes
 */
function drawSchematicApparatus(
  ctx: CanvasRenderingContext2D,
  scene: ChemicalSceneSpec,
  cx: number,
  cy: number,
  scale: number,
  isDark: boolean
) {
  const strokeColor = isDark ? 'rgba(148, 163, 184, 0.45)' : 'rgba(100, 116, 139, 0.45)';
  const fillColor = isDark ? 'rgba(56, 189, 248, 0.12)' : 'rgba(2, 132, 199, 0.08)';
  const wireColor = isDark ? '#facc15' : '#ca8a04';

  ctx.save();
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = strokeColor;
  ctx.fillStyle = fillColor;

  if (scene.id.includes('concentration') || scene.id.includes('galvanic') || scene.category === 'electrochem') {
    // 2 Beakers (Electrochemistry)
    const bW = scale * 1.8;
    const bH = scale * 2.2;
    const bY = cy - scale * 0.2;

    // Left beaker
    ctx.strokeRect(cx - scale * 2.5, bY, bW, bH);
    ctx.fillRect(cx - scale * 2.5, bY + scale * 0.5, bW, bH - scale * 0.5);

    // Right beaker
    ctx.strokeRect(cx + scale * 0.7, bY, bW, bH);
    ctx.fillRect(cx + scale * 0.7, bY + scale * 0.5, bW, bH - scale * 0.5);

    // Zinc/Metal Electrodes
    ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
    ctx.fillRect(cx - scale * 1.8, bY - scale * 0.5, scale * 0.4, scale * 2.0);
    ctx.fillRect(cx + scale * 1.4, bY - scale * 0.5, scale * 0.4, scale * 2.0);

    // Salt bridge (Inverted U-tube)
    ctx.beginPath();
    ctx.moveTo(cx - scale * 1.1, bY + scale * 1.0);
    ctx.lineTo(cx - scale * 1.1, bY - scale * 0.8);
    ctx.lineTo(cx + scale * 1.1, bY - scale * 0.8);
    ctx.lineTo(cx + scale * 1.1, bY + scale * 1.0);
    ctx.lineWidth = 8;
    ctx.strokeStyle = isDark ? 'rgba(241, 245, 249, 0.6)' : 'rgba(203, 213, 225, 0.7)';
    ctx.stroke();

    // External wire
    ctx.beginPath();
    ctx.moveTo(cx - scale * 1.6, bY - scale * 0.5);
    ctx.lineTo(cx - scale * 1.6, bY - scale * 1.5);
    ctx.lineTo(cx + scale * 1.6, bY - scale * 1.5);
    ctx.lineTo(cx + scale * 1.6, bY - scale * 0.5);
    ctx.lineWidth = 2;
    ctx.strokeStyle = wireColor;
    ctx.stroke();

    // Voltmeter circle
    ctx.fillStyle = isDark ? '#1e293b' : '#ffffff';
    ctx.beginPath();
    ctx.arc(cx, bY - scale * 1.5, scale * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = wireColor;
    ctx.stroke();
    ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
    ctx.font = 'bold 11px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('V', cx, bY - scale * 1.5);
  } else if (scene.id.includes('titration') || scene.id.includes('burette')) {
    // Burette (vertical tube)
    const bW = scale * 0.5;
    const bH = scale * 3.5;
    ctx.strokeRect(cx - bW / 2, cy - scale * 2.8, bW, bH);
    ctx.fillRect(cx - bW / 2, cy - scale * 2.5, bW, bH - scale * 0.3);

    // Stopcock
    ctx.fillStyle = isDark ? '#f59e0b' : '#d97706';
    ctx.fillRect(cx - scale * 0.5, cy + scale * 0.7, scale * 1.0, scale * 0.2);

    // Erlenmeyer Flask
    ctx.beginPath();
    ctx.moveTo(cx - scale * 0.35, cy + scale * 1.1);
    ctx.lineTo(cx - scale * 0.35, cy + scale * 1.3);
    ctx.lineTo(cx - scale * 1.5, cy + scale * 2.8);
    ctx.lineTo(cx + scale * 1.5, cy + scale * 2.8);
    ctx.lineTo(cx + scale * 0.35, cy + scale * 1.3);
    ctx.lineTo(cx + scale * 0.35, cy + scale * 1.1);
    ctx.closePath();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.fillStyle = isDark ? 'rgba(244, 63, 94, 0.25)' : 'rgba(244, 63, 94, 0.2)';
    ctx.fill();
  } else if (scene.id.includes('distillation')) {
    // Distillation flask (left)
    const fX = cx - scale * 1.6;
    const fY = cy + scale * 1.2;
    ctx.beginPath();
    ctx.arc(fX, fY, scale * 0.9, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillRect(fX - scale * 0.7, fY - scale * 0.2, scale * 1.4, scale * 0.9);

    // Fractionating Column
    ctx.strokeRect(fX - scale * 0.25, fY - scale * 2.8, scale * 0.5, scale * 2.0);

    // Angled Liebig Condenser
    ctx.beginPath();
    ctx.moveTo(fX, fY - scale * 2.5);
    ctx.lineTo(cx + scale * 1.8, cy + scale * 0.8);
    ctx.lineWidth = 14;
    ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.3)' : 'rgba(2, 132, 199, 0.25)';
    ctx.stroke();

    ctx.lineWidth = 2.5;
    ctx.strokeStyle = strokeColor;
    ctx.stroke();

    // Receiving flask (right)
    ctx.beginPath();
    ctx.arc(cx + scale * 2.0, cy + scale * 1.6, scale * 0.7, 0, Math.PI * 2);
    ctx.stroke();
  } else if (scene.id.includes('diffusion')) {
    // Diffusion Tube (horizontal cylinder)
    const tW = scale * 5.0;
    const tH = scale * 0.9;
    ctx.strokeRect(cx - tW / 2, cy - tH / 2, tW, tH);
    ctx.fillRect(cx - tW / 2, cy - tH / 2, tW, tH);

    // Cotton plugs
    ctx.fillStyle = '#38bdf8'; // NH3
    ctx.fillRect(cx - tW / 2, cy - tH / 2, scale * 0.5, tH);
    ctx.fillStyle = '#ef4444'; // HCl
    ctx.fillRect(cx + tW / 2 - scale * 0.5, cy - tH / 2, scale * 0.5, tH);

    // White NH4Cl ring at stoichiometric point x = +0.40
    const ringX = cx + scale * 0.40;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(ringX, cy - tH / 2 - 4);
    ctx.lineTo(ringX, cy + tH / 2 + 4);
    ctx.stroke();
  } else if (scene.category === 'crystal') {
    // 2D Ionic cubic lattice
    const gSize = 4;
    const gSpacing = scale * 0.75;
    const startX = cx - (gSize - 1) * gSpacing * 0.5;
    const startY = cy - (gSize - 1) * gSpacing * 0.5;

    ctx.lineWidth = 1.5;
    ctx.strokeStyle = strokeColor;
    for (let r = 0; r < gSize; r++) {
      ctx.beginPath();
      ctx.moveTo(startX, startY + r * gSpacing);
      ctx.lineTo(startX + (gSize - 1) * gSpacing, startY + r * gSpacing);
      ctx.stroke();
    }
    for (let c = 0; c < gSize; c++) {
      ctx.beginPath();
      ctx.moveTo(startX + c * gSpacing, startY);
      ctx.lineTo(startX + c * gSpacing, startY + (gSize - 1) * gSpacing);
      ctx.stroke();
    }
    for (let r = 0; r < gSize; r++) {
      for (let c = 0; c < gSize; c++) {
        const isNa = (r + c) % 2 === 0;
        ctx.fillStyle = isNa ? '#a855f7' : '#22c55e';
        ctx.beginPath();
        ctx.arc(startX + c * gSpacing, startY + r * gSpacing, isNa ? 6 : 9, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  } else if (scene.category === 'vsepr' || scene.category === 'organic') {
    // Molecular bond lines connecting centers
    if (scene.hotspots.length > 1) {
      scene.hotspots.forEach((hs) => {
        const px = cx + hs.position[0] * scale;
        const py = cy - hs.position[1] * scale;
        ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.08)' : 'rgba(2, 132, 199, 0.06)';
        ctx.beginPath();
        ctx.arc(px, py, scale * 0.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    }
  } else {
    // General connection between hotspots
    if (scene.hotspots.length > 1) {
      ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.35)' : 'rgba(100, 116, 139, 0.35)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      scene.hotspots.forEach((hs, idx) => {
        const px = cx + hs.position[0] * scale;
        const py = cy - hs.position[1] * scale;
        if (idx === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();
    }
  }

  ctx.restore();
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartPos = useRef<{ x: number; y: number; time: number } | null>(null);

  // Zoom & Pan State for 2D Fallback Canvas (Range 0.5 to 3.0)
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDraggingRef = useRef<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const zoomI18n = ZOOM_FIT_I18N[lang] || ZOOM_FIT_I18N.tr;

  // Reset zoom and pan on scene switch
  useEffect(() => {
    setZoomLevel(1.0);
    setPanOffset({ x: 0, y: 0 });
  }, [scene.id]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(3.0, Number((prev + 0.25).toFixed(2))));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(0.5, Number((prev - 0.25).toFixed(2))));
  };

  const handleFitScreen = () => {
    setZoomLevel(1.0);
    setPanOffset({ x: 0, y: 0 });
  };

  // On-demand rendering (avoids 60 FPS requestAnimationFrame polling)
  const drawScene = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    // Retina / High-DPI support
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);

    ctx.save();
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const cx = width / 2;
    const cy = height / 2;

    // Clear background
    ctx.fillStyle = isDark ? '#0b0f19' : '#f8fafc';
    ctx.fillRect(0, 0, width, height);

    // Subtle grid lines
    ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.06)' : 'rgba(2, 132, 199, 0.06)';
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

    const effectiveScale = (Math.min(width, height) / 8.5) * zoomLevel;
    const effectiveCx = cx + panOffset.x;
    const effectiveCy = cy + panOffset.y;

    // Draw recognizable 2D schematic shapes
    drawSchematicApparatus(ctx, scene, effectiveCx, effectiveCy, effectiveScale, isDark);

    // Draw Hotspot Nodes on 2D Canvas
    scene.hotspots.forEach((hs) => {
      const px = effectiveCx + hs.position[0] * effectiveScale;
      const py = effectiveCy - hs.position[1] * effectiveScale;
      const isSelected = selectedHotspotId === hs.id;
      const isTarget = mode === 'quiz' && quizTargetHotspotId === hs.id;

      // Outer radiant glow
      const glowRadius = isSelected || isTarget ? 24 : 16;
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

      // Outer ring for selected/target
      if (isSelected || isTarget) {
        ctx.strokeStyle = hs.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(px, py, 16, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Label
      ctx.font = 'bold 12px system-ui, sans-serif';
      ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
      ctx.textAlign = 'center';
      const labelText = mode === 'quiz' ? `?` : (hs.badgeLabel || `${hs.pinNumber}`);
      ctx.fillText(labelText, px, py - 18);
    });

    ctx.restore();
  }, [scene, isDark, selectedHotspotId, mode, quizTargetHotspotId, zoomLevel, panOffset]);

  // Render on prop changes and container resize
  useEffect(() => {
    drawScene();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeObserver = new ResizeObserver(() => {
      drawScene();
    });
    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
    };
  }, [drawScene]);

  // Pointer/Touch coordinate normalization and hit-testing in CSS coordinates
  const handlePointerSelect = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const clickX = clientX - rect.left;
    const clickY = clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const effectiveScale = (Math.min(rect.width, rect.height) / 8.5) * zoomLevel;
    const effectiveCx = cx + panOffset.x;
    const effectiveCy = cy + panOffset.y;

    let closest: Hotspot3D | null = null;
    let minDist = 35 * Math.max(1, zoomLevel * 0.8); // tap radius in CSS px

    scene.hotspots.forEach((hs) => {
      const px = effectiveCx + hs.position[0] * effectiveScale;
      const py = effectiveCy - hs.position[1] * effectiveScale;
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

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.2 : -0.2;
    setZoomLevel((prev) => Math.max(0.5, Math.min(3.0, Number((prev + delta).toFixed(2)))));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    touchStartPos.current = { x: e.clientX, y: e.clientY, time: Date.now() };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    if (Math.hypot(dx, dy) > 4) {
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      setPanOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = false;
    if (touchStartPos.current) {
      const dx = Math.abs(e.clientX - touchStartPos.current.x);
      const dy = Math.abs(e.clientY - touchStartPos.current.y);
      const duration = Date.now() - touchStartPos.current.time;
      if (dx < 10 && dy < 10 && duration < 300) {
        handlePointerSelect(e.clientX, e.clientY);
      }
      touchStartPos.current = null;
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      dragStartRef.current = { x: touch.clientX, y: touch.clientY };
      touchStartPos.current = { x: touch.clientX, y: touch.clientY, time: Date.now() };
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const dx = touch.clientX - dragStartRef.current.x;
      const dy = touch.clientY - dragStartRef.current.y;
      if (Math.hypot(dx, dy) > 4) {
        dragStartRef.current = { x: touch.clientX, y: touch.clientY };
        setPanOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.changedTouches.length === 1 && touchStartPos.current) {
      const touch = e.changedTouches[0];
      const dx = Math.abs(touch.clientX - touchStartPos.current.x);
      const dy = Math.abs(touch.clientY - touchStartPos.current.y);
      const duration = Date.now() - touchStartPos.current.time;
      if (dx < 10 && dy < 10 && duration < 250) {
        e.preventDefault();
        handlePointerSelect(touch.clientX, touch.clientY);
      }
      touchStartPos.current = null;
    }
  };

  return (
    <div
      ref={containerRef}
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
        <bdi dir="ltr">
          <span>WebGL 2D Güvenli Mod • Model: {scene.title[lang] || scene.title.tr}</span>
        </bdi>
      </div>

      {/* 2D Zoom & Fit HUD Controls */}
      <div
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 15,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '4px 10px',
          borderRadius: '9999px',
          background: isDark ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--border-color, rgba(148, 163, 184, 0.3))',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      >
        <button
          type="button"
          onClick={handleZoomIn}
          title={zoomI18n.zoomIn}
          aria-label={zoomI18n.zoomIn}
          style={{
            padding: '5px',
            borderRadius: '50%',
            border: 'none',
            background: 'transparent',
            color: isDark ? '#f8fafc' : '#0f172a',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ZoomIn size={16} />
        </button>

        <span
          style={{
            fontSize: '0.74rem',
            fontWeight: 700,
            minWidth: '36px',
            textAlign: 'center',
            color: 'var(--brand-primary, #0284c7)',
          }}
        >
          {Math.round(zoomLevel * 100)}%
        </span>

        <button
          type="button"
          onClick={handleZoomOut}
          title={zoomI18n.zoomOut}
          aria-label={zoomI18n.zoomOut}
          style={{
            padding: '5px',
            borderRadius: '50%',
            border: 'none',
            background: 'transparent',
            color: isDark ? '#f8fafc' : '#0f172a',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ZoomOut size={16} />
        </button>

        <button
          type="button"
          onClick={handleFitScreen}
          title={zoomI18n.fitScreen}
          aria-label={zoomI18n.fitScreen}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            padding: '3px 8px',
            borderRadius: '6px',
            border: '1px solid var(--brand-primary, #0284c7)',
            background: isDark ? 'rgba(56, 189, 248, 0.15)' : 'rgba(2, 132, 199, 0.1)',
            color: isDark ? '#f8fafc' : '#0f172a',
            fontSize: '0.72rem',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          <Maximize2 size={13} />
          <span>{zoomI18n.fitScreen}</span>
        </button>
      </div>

      <canvas
        ref={canvasRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          width: '100%',
          height: '100%',
          maxHeight: '600px',
          cursor: zoomLevel > 1.0 ? 'grab' : 'pointer',
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
              <bdi dir="ltr">
                <span>{mode === 'quiz' ? `Nokta ${hs.pinNumber}` : (hs.title[lang] || hs.title.tr)}</span>
              </bdi>
            </button>
          );
        })}
      </div>
    </div>
  );
};
