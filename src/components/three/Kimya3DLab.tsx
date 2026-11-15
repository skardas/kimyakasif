// ============================================================================
// src/components/three/Kimya3DLab.tsx
// Milestone 3: Interactive Procedural Three.js 3D Molecular & Chemical Lab
// ============================================================================

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  Box,
  RotateCw,
  Play,
  Pause,
  Layers,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Award,
  Sparkles,
  Focus,
  Maximize2,
  Minimize2,
  CheckCircle2,
  XCircle,
  FileCheck2,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';

import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import {
  PRIMARY_32_SCENES,
  getSceneById,
  ChemicalSceneSpec,
  Hotspot3D,
} from '../../data/threeScenesData';
import { ProceduralSceneObject } from './proceduralBuilders';
import { Kimya3DFallbackCanvas } from './Kimya3DFallbackCanvas';
import { playCorrect, playWrong, playSuccess, playFinish } from '../../audio/sfx';

export interface Kimya3DLabProps {
  lang: LanguageCode;
  initialSceneId?: string;
  resolvedDark: boolean;
  onEarnXp: (amount: number) => void;
  onOpenUnitExam?: (unitId: string) => void;
  onNavigateTab?: (tab: string) => void;
}

export type LabMode = 'explore' | 'quiz';

export interface QuizState {
  active: boolean;
  questionIndex: number;
  questionSequence: string[];
  targetHotspotId: string | null;
  feedback: 'correct' | 'wrong' | null;
  correctCount: number;
  totalQuestions: number;
  isComplete: boolean;
  earnedXp: number;
}

export const ZOOM_FIT_I18N: Record<
  LanguageCode,
  { zoomIn: string; zoomOut: string; fitScreen: string; reset: string }
> = {
  tr: {
    zoomIn: 'Yakınlaştır',
    zoomOut: 'Uzaklaştır',
    fitScreen: 'Ekrana Sığdır',
    reset: 'Sıfırla',
  },
  en: {
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    fitScreen: 'Fit to Screen',
    reset: 'Reset',
  },
  de: {
    zoomIn: 'Vergrößern',
    zoomOut: 'Verkleinern',
    fitScreen: 'An Bildschirm anpassen',
    reset: 'Zurücksetzen',
  },
  fr: {
    zoomIn: 'Zoom avant',
    zoomOut: 'Zoom arrière',
    fitScreen: "Ajuster à l'écran",
    reset: 'Réinitialiser',
  },
  ru: {
    zoomIn: 'Приблизить',
    zoomOut: 'Отдалить',
    fitScreen: 'По размеру экрана',
    reset: 'Сброс',
  },
  ar: {
    zoomIn: 'تكبير',
    zoomOut: 'تصغير',
    fitScreen: 'ملائمة للشاشة',
    reset: 'إعادة ضبط',
  },
  zh: {
    zoomIn: '放大',
    zoomOut: '缩小',
    fitScreen: '适应屏幕',
    reset: '重置',
  },
  ku: {
    zoomIn: 'Nêzîk bike',
    zoomOut: 'Dûr bixe',
    fitScreen: 'Li ser ekranê bicîh bike',
    reset: 'Reset',
  },
};

/**
 * Calculates camera distance required to fit a 3D bounding box and its hotspots
 * into the view frustum on both portrait mobile (aspect < 1) and desktop viewports.
 */
export function calculateFitDistance(
  box: THREE.Box3,
  camera: THREE.PerspectiveCamera,
  safetyFactor: number = 1.25
): { requiredDistance: number; center: THREE.Vector3; size: THREE.Vector3 } {
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const radius = Math.max(sphere.radius, size.x / 2, size.y / 2, 0.5);

  const vFov = (camera.fov * Math.PI) / 180;
  const aspect = camera.aspect || 1.0;
  const hFov = 2 * Math.atan(Math.tan(vFov / 2) * aspect);

  const distV = radius / Math.tan(vFov / 2);
  const distH = radius / Math.tan(hFov / 2);
  const requiredDistance = Math.max(distV, distH) * safetyFactor;

  return { requiredDistance, center, size };
}

export const Kimya3DLab: React.FC<Kimya3DLabProps> = ({
  lang,
  initialSceneId = 'water-vsepr',
  resolvedDark,
  onEarnXp,
  onOpenUnitExam,
}) => {
  const t = UI_TRANSLATIONS[lang];

  // Resolve initial scene
  const initialScene = useMemo(() => {
    return getSceneById(initialSceneId) || PRIMARY_32_SCENES[0];
  }, [initialSceneId]);

  const [currentScene, setCurrentScene] = useState<ChemicalSceneSpec>(initialScene);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot3D | null>(null);
  const [mode, setMode] = useState<LabMode>('explore');
  const [isLiveSim, setIsLiveSim] = useState<boolean>(true);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(false);
  const [explodeFactor, setExplodeFactor] = useState<number>(0);
  const [isSceneModalOpen, setIsSceneModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [webglSupported, setWebglSupported] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Hotspot DOM badge refs (avoids 60-120 FPS React re-renders)
  const badgeRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Active control state refs for animation loop (prevents WebGL renderer recreation)
  const isLiveSimRef = useRef<boolean>(isLiveSim);
  useEffect(() => {
    isLiveSimRef.current = isLiveSim;
  }, [isLiveSim]);

  const isAutoRotateRef = useRef<boolean>(isAutoRotate);
  useEffect(() => {
    isAutoRotateRef.current = isAutoRotate;
  }, [isAutoRotate]);

  const currentSceneRef = useRef<ChemicalSceneSpec>(currentScene);
  useEffect(() => {
    currentSceneRef.current = currentScene;
  }, [currentScene]);

  // Light refs for neutral daylight CPK lighting updates
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const keyLightRef = useRef<THREE.DirectionalLight | null>(null);
  const fillLightRef = useRef<THREE.DirectionalLight | null>(null);

  // Quiz State
  const [quizState, setQuizState] = useState<QuizState>({
    active: false,
    questionIndex: 0,
    questionSequence: [],
    targetHotspotId: null,
    feedback: null,
    correctCount: 0,
    totalQuestions: 0,
    isComplete: false,
    earnedXp: 0,
  });

  // DOM and Three.js Refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasMountRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const proceduralObjectRef = useRef<ProceduralSceneObject | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const pointerStartRef = useRef<{ x: number; y: number; time: number }>({ x: 0, y: 0, time: 0 });

  // Update current scene if initialSceneId prop changes
  useEffect(() => {
    const matched = getSceneById(initialSceneId);
    if (matched && matched.id !== currentScene.id) {
      setCurrentScene(matched);
      setSelectedHotspot(null);
    }
  }, [initialSceneId]);

  // Start or Reset Quiz Mode for Current Scene
  const initQuizForScene = useCallback((scene: ChemicalSceneSpec) => {
    const ids = scene.hotspots.map((h) => h.id);
    // Shuffle question order
    const shuffled = [...ids].sort(() => Math.random() - 0.5);
    setQuizState({
      active: true,
      questionIndex: 0,
      questionSequence: shuffled,
      targetHotspotId: shuffled[0] || null,
      feedback: null,
      correctCount: 0,
      totalQuestions: shuffled.length,
      isComplete: false,
      earnedXp: 0,
    });
    setSelectedHotspot(null);
  }, []);

  const handleToggleMode = (newMode: LabMode) => {
    setMode(newMode);
    if (newMode === 'quiz') {
      initQuizForScene(currentScene);
    } else {
      setQuizState((prev) => ({ ...prev, active: false, feedback: null, isComplete: false }));
    }
  };

  // Change Scene Handler
  const handleSelectScene = (scene: ChemicalSceneSpec) => {
    setCurrentScene(scene);
    setSelectedHotspot(null);
    setExplodeFactor(0);
    setIsSceneModalOpen(false);
    if (mode === 'quiz') {
      initQuizForScene(scene);
    }
  };

  // Stepper handlers
  const handlePrevScene = () => {
    const currentIndex = PRIMARY_32_SCENES.findIndex((s) => s.id === currentScene.id);
    const prevIndex = (currentIndex - 1 + PRIMARY_32_SCENES.length) % PRIMARY_32_SCENES.length;
    handleSelectScene(PRIMARY_32_SCENES[prevIndex]);
  };

  const handleNextScene = () => {
    const currentIndex = PRIMARY_32_SCENES.findIndex((s) => s.id === currentScene.id);
    const nextIndex = (currentIndex + 1) % PRIMARY_32_SCENES.length;
    handleSelectScene(PRIMARY_32_SCENES[nextIndex]);
  };

  const fitToScreenRef = useRef<() => void>(() => {});

  // Fit to Screen & Auto-Framing using both vertical & horizontal FOV (mobile & desktop)
  const handleFitToScreen = useCallback(() => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    const procObj = proceduralObjectRef.current;
    if (!camera || !controls || !procObj) return;

    const box = new THREE.Box3().setFromObject(procObj.group);
    currentScene.hotspots.forEach((hs) => {
      box.expandByPoint(new THREE.Vector3(hs.position[0], hs.position[1], hs.position[2]));
    });

    const { requiredDistance, center } = calculateFitDistance(box, camera, 1.25);

    let dir = new THREE.Vector3().subVectors(camera.position, controls.target);
    if (dir.lengthSq() < 0.001) {
      const defaultCam = currentScene.cameraPosition || [0, 1.5, 6];
      const defaultTarget = currentScene.target || [0, 0, 0];
      dir.subVectors(new THREE.Vector3(...defaultCam), new THREE.Vector3(...defaultTarget));
      if (dir.lengthSq() < 0.001) {
        dir.set(0, 0.5, 1);
      }
    }
    dir.normalize();

    camera.position.copy(center).addScaledVector(dir, requiredDistance);
    controls.target.copy(center);
    controls.maxDistance = Math.max(40.0, requiredDistance * 2.5);
    controls.update();
  }, [currentScene]);

  useEffect(() => {
    fitToScreenRef.current = handleFitToScreen;
  }, [handleFitToScreen]);

  // Zoom In: dollys camera forward along camera-target vector
  const handleZoomIn = useCallback(() => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;
    const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
    const dist = offset.length();
    const minDist = controls.minDistance || 1.0;
    const step = Math.max(dist * 0.2, 0.4);
    const nextDist = Math.max(minDist, dist - step);
    offset.setLength(nextDist);
    camera.position.copy(controls.target).add(offset);
    controls.update();
  }, []);

  // Zoom Out: dollys camera backward along camera-target vector within maxDistance
  const handleZoomOut = useCallback(() => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;
    const offset = new THREE.Vector3().subVectors(camera.position, controls.target);
    const dist = offset.length();
    const maxDist = controls.maxDistance || 40.0;
    const step = Math.max(dist * 0.25, 0.4);
    const nextDist = Math.min(maxDist, dist + step);
    offset.setLength(nextDist);
    camera.position.copy(controls.target).add(offset);
    controls.update();
  }, []);

  // Reset Camera
  const handleResetCamera = useCallback(() => {
    if (!cameraRef.current || !controlsRef.current) return;
    const defaultPos = currentScene.cameraPosition || [0, 1.5, 6];
    const defaultTarget = currentScene.target || [0, 0, 0];
    cameraRef.current.position.set(...defaultPos);
    controlsRef.current.target.set(...defaultTarget);
    controlsRef.current.update();
  }, [currentScene]);

  // Focus on Hotspot
  const handleFocusHotspot = (hs: Hotspot3D) => {
    if (!controlsRef.current || !cameraRef.current) return;
    const targetVec = new THREE.Vector3(...hs.position);
    controlsRef.current.target.copy(targetVec);
    controlsRef.current.update();
  };

  // Touch Drag-vs-Tap Guard
  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: Date.now(),
    };
  };

  const handleHotspotClick = (hs: Hotspot3D, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      // Keyboard activations (Enter / Space) dispatch synthetic click events with e.detail === 0.
      // Only enforce drag-vs-tap guard for pointer interactions (e.detail > 0).
      if (e.detail !== 0) {
        const { x, y, time } = pointerStartRef.current;
        const dist = Math.hypot(e.clientX - x, e.clientY - y);
        const duration = Date.now() - time;

        // Ignore if drag > 7px or duration > 450ms
        if (dist > 7 || duration > 450) return;
      }
    }

    if (mode === 'quiz') {
      if (quizState.isComplete || quizState.feedback) return;
      const isCorrect = hs.id === quizState.targetHotspotId;

      if (isCorrect) {
        playCorrect();
        setQuizState((prev) => {
          const newCorrect = prev.correctCount + 1;
          const nextIndex = prev.questionIndex + 1;
          const isFinished = nextIndex >= prev.totalQuestions;
          const earned = newCorrect * 10;

          if (isFinished) {
            playSuccess();
            onEarnXp(earned);
          }

          return {
            ...prev,
            correctCount: newCorrect,
            feedback: 'correct',
            questionIndex: nextIndex,
            targetHotspotId: isFinished ? null : prev.questionSequence[nextIndex],
            isComplete: isFinished,
            earnedXp: earned,
          };
        });

        setTimeout(() => {
          setQuizState((prev) => ({ ...prev, feedback: null }));
        }, 1200);
      } else {
        playWrong();
        setQuizState((prev) => ({ ...prev, feedback: 'wrong' }));
        setTimeout(() => {
          setQuizState((prev) => ({ ...prev, feedback: null }));
        }, 1000);
      }
    } else {
      setSelectedHotspot(hs);
      handleFocusHotspot(hs);
    }
  };

  // --------------------------------------------------------------------------
  // Three.js Mount and Lifecycle Effect (Runs once on mount / WebGL init)
  // --------------------------------------------------------------------------
  useEffect(() => {
    const mount = canvasMountRef.current;
    if (!mount) return;

    // Check WebGL context support and cleanly release the test context
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
      (gl as WebGLRenderingContext).getExtension('WEBGL_lose_context')?.loseContext();
    } catch {
      setWebglSupported(false);
      return;
    }

    const width = mount.clientWidth || 800;
    const height = mount.clientHeight || 560;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // WebGL Context Lost and Restored Event Listeners
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      setWebglSupported(false);
    };
    const handleContextRestored = () => {
      setWebglSupported(true);
    };
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false);
    renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored, false);

    // Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const fov = currentScene.cameraConstraints?.fov || 45;
    const near = currentScene.cameraConstraints?.near || 0.1;
    const far = currentScene.cameraConstraints?.far || 100.0;
    const camera = new THREE.PerspectiveCamera(fov, width / height, near, far);
    const camPos = currentScene.cameraPosition || [0, 1.5, 6];
    camera.position.set(...camPos);
    cameraRef.current = camera;

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = currentScene.cameraConstraints?.minDistance || 1.5;
    controls.maxDistance = Math.max(40.0, currentScene.cameraConstraints?.maxDistance || 25.0);
    const targetPos = currentScene.target || [0, 0, 0];
    controls.target.set(...targetPos);
    controlsRef.current = controls;

    // Neutral Daylight Lighting (preserves CPK colors in both themes)
    const ambientLight = new THREE.AmbientLight(
      resolvedDark ? 0x334155 : 0xf8fafc,
      resolvedDark ? 0.9 : 1.2
    );
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const keyLight = new THREE.DirectionalLight(0xffffff, resolvedDark ? 1.4 : 1.2);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);
    keyLightRef.current = keyLight;

    const fillLight = new THREE.DirectionalLight(0xf8fafc, resolvedDark ? 0.8 : 0.6);
    fillLight.position.set(-5, -4, -5);
    scene.add(fillLight);
    fillLightRef.current = fillLight;

    // Build initial procedural 3D model
    const procObj = currentScene.build(resolvedDark);
    proceduralObjectRef.current = procObj;
    scene.add(procObj.group);
    if (procObj.setExplode) {
      procObj.setExplode(explodeFactor);
    }
    fitToScreenRef.current?.();

    // Animation Loop
    let clock = new THREE.Clock();
    const tempVec = new THREE.Vector3();

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Procedural object animation
      if (proceduralObjectRef.current?.animate) {
        proceduralObjectRef.current.animate(elapsedTime, isLiveSimRef.current);
      }

      // Auto rotation
      if (isAutoRotateRef.current && proceduralObjectRef.current?.group) {
        proceduralObjectRef.current.group.rotation.y += 0.005;
      }

      controls.update();
      renderer.render(scene, camera);

      // Direct DOM Badge Positioning (zero React re-renders at 60-120 FPS)
      const containerW = mount.clientWidth;
      const containerH = mount.clientHeight;
      if (containerW > 0 && containerH > 0) {
        const activeHotspots = currentSceneRef.current?.hotspots || [];
        activeHotspots.forEach((hs) => {
          const el = badgeRefs.current[hs.id];
          if (!el) return;

          tempVec.set(hs.position[0], hs.position[1], hs.position[2]);
          tempVec.project(camera);

          const isBehind = tempVec.z < -1.0 || tempVec.z > 1.0;
          if (isBehind) {
            el.style.display = 'none';
          } else {
            const screenX = (tempVec.x * 0.5 + 0.5) * containerW;
            const screenY = (-tempVec.y * 0.5 + 0.5) * containerH;

            // Viewport padding clamping (safe bounds: 24px inset so badges never clip)
            const pad = 24;
            const clampedX = Math.max(pad, Math.min(containerW - pad, screenX));
            const clampedY = Math.max(pad, Math.min(containerH - pad, screenY));

            el.style.display = 'flex';
            el.style.transform = `translate3d(${clampedX}px, ${clampedY}px, 0) translate(-50%, -50%)`;
          }
        });
      }
    };

    animate();

    // Container ResizeObserver for robust layout & sidebar transitions
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
          fitToScreenRef.current?.();
        }
      }
    });
    resizeObserver.observe(mount);

    // Cleanup on unmount
    return () => {
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
      renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      controls.dispose();
      if (proceduralObjectRef.current?.dispose) {
        proceduralObjectRef.current.dispose();
        proceduralObjectRef.current = null;
      }
      scene.clear();
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [webglSupported]);

  // --------------------------------------------------------------------------
  // Scene Replacement & Theme Update Effect (Zero-Churn WebGL Context)
  // --------------------------------------------------------------------------
  useEffect(() => {
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!scene || !camera || !controls) return;

    // 1. Remove & dispose previous procedural object
    if (proceduralObjectRef.current) {
      scene.remove(proceduralObjectRef.current.group);
      proceduralObjectRef.current.dispose?.();
      proceduralObjectRef.current = null;
    }

    // 2. Build new procedural object
    const procObj = currentScene.build(resolvedDark);
    proceduralObjectRef.current = procObj;
    scene.add(procObj.group);

    // Apply explode factor
    if (procObj.setExplode) {
      procObj.setExplode(explodeFactor);
    }

    // 3. Update neutral lights for dark/light mode
    if (ambientLightRef.current) {
      ambientLightRef.current.color.setHex(resolvedDark ? 0x334155 : 0xf8fafc);
      ambientLightRef.current.intensity = resolvedDark ? 0.9 : 1.2;
    }
    if (keyLightRef.current) {
      keyLightRef.current.color.setHex(0xffffff);
      keyLightRef.current.intensity = resolvedDark ? 1.4 : 1.2;
    }
    if (fillLightRef.current) {
      fillLightRef.current.color.setHex(0xf8fafc);
      fillLightRef.current.intensity = resolvedDark ? 0.8 : 0.6;
    }

    // 4. Reset camera and controls to currentScene constraints
    const fov = currentScene.cameraConstraints?.fov || 45;
    const near = currentScene.cameraConstraints?.near || 0.1;
    const far = currentScene.cameraConstraints?.far || 100.0;
    camera.fov = fov;
    camera.near = near;
    camera.far = far;
    const camPos = currentScene.cameraPosition || [0, 1.5, 6];
    camera.position.set(...camPos);
    camera.updateProjectionMatrix();

    controls.minDistance = currentScene.cameraConstraints?.minDistance || 1.5;
    controls.maxDistance = Math.max(40.0, currentScene.cameraConstraints?.maxDistance || 25.0);
    const targetPos = currentScene.target || [0, 0, 0];
    controls.target.set(...targetPos);
    controls.update();

    // 5. Auto-frame bounding box to fit viewport responsively
    handleFitToScreen();

    // Clear badge refs
    badgeRefs.current = {};
  }, [currentScene, resolvedDark, handleFitToScreen]);

  // Explode view factor effect
  useEffect(() => {
    if (proceduralObjectRef.current?.setExplode) {
      proceduralObjectRef.current.setExplode(explodeFactor);
      fitToScreenRef.current?.();
    }
  }, [explodeFactor]);

  // Filtered scenes in modal
  const filteredScenes = useMemo(() => {
    return PRIMARY_32_SCENES.filter((s) => {
      const matchCat = categoryFilter === 'all' || s.category === categoryFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        s.id.toLowerCase().includes(q) ||
        s.unitId.toLowerCase().includes(q) ||
        (s.title[lang] || s.title.tr).toLowerCase().includes(q) ||
        (s.subtitle[lang] || s.subtitle.tr).toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [categoryFilter, searchQuery, lang]);

  // Current Target Hotspot for Quiz
  const targetHotspot = useMemo(() => {
    if (!quizState.targetHotspotId) return null;
    return currentScene.hotspots.find((h) => h.id === quizState.targetHotspotId) || null;
  }, [quizState.targetHotspotId, currentScene]);

  // Toggle Fullscreen
  const handleToggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <section
      ref={containerRef}
      className="lab-container"
      aria-label={t.lab3d.title}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        minHeight: '680px',
        position: 'relative',
        background: resolvedDark ? 'var(--bg-canvas-dark, #0b0f19)' : 'var(--bg-canvas-light, #f8fafc)',
        color: resolvedDark ? '#f8fafc' : '#0f172a',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      {/* -------------------------------------------------------------------- */}
      {/* Top Controls Toolbar */}
      {/* -------------------------------------------------------------------- */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          padding: '12px 18px',
          borderBottom: '1px solid var(--border-color, rgba(148, 163, 184, 0.2))',
          background: resolvedDark ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          zIndex: 20,
        }}
      >
        {/* Scene Selector & Steppers */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            onClick={handlePrevScene}
            aria-label="Önceki Model"
            title="Önceki Model"
            style={{
              padding: '8px',
              borderRadius: '8px',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              background: 'transparent',
              color: 'inherit',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => setIsSceneModalOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '6px 14px',
              borderRadius: '10px',
              border: '1px solid var(--brand-primary, #0284c7)',
              background: resolvedDark ? 'rgba(56, 189, 248, 0.1)' : 'rgba(2, 132, 199, 0.08)',
              color: 'inherit',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '2px 6px',
                borderRadius: '4px',
                background: currentScene.badge === 'TYT' ? '#10b981' : '#f59e0b',
                color: '#ffffff',
              }}
            >
              {currentScene.badge}
            </span>
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, lineHeight: 1.2 }}>
                <bdi dir="ltr">{currentScene.title[lang] || currentScene.title.tr}</bdi>
              </div>
              <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                {currentScene.unitId.toUpperCase()} • {currentScene.category}
              </div>
            </div>
            <Search size={16} style={{ marginLeft: 6, opacity: 0.7 }} />
          </button>

          <button
            onClick={handleNextScene}
            aria-label="Sonraki Model"
            title="Sonraki Model"
            style={{
              padding: '8px',
              borderRadius: '8px',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              background: 'transparent',
              color: 'inherit',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Mode Switcher: Explore vs Blind Quiz */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '10px',
            background: resolvedDark ? '#1f293d' : '#e2e8f0',
            padding: '3px',
          }}
        >
          <button
            onClick={() => handleToggleMode('explore')}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              background: mode === 'explore' ? 'var(--brand-primary, #0284c7)' : 'transparent',
              color: mode === 'explore' ? '#ffffff' : 'inherit',
              transition: 'all 0.15s ease',
            }}
          >
            Keşif Modu
          </button>
          <button
            onClick={() => handleToggleMode('quiz')}
            style={{
              padding: '6px 14px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              background: mode === 'quiz' ? '#10b981' : 'transparent',
              color: mode === 'quiz' ? '#ffffff' : 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.15s ease',
            }}
          >
            <Sparkles size={14} />
            Kör İğne Sınavı
          </button>
        </div>
      </header>

      {/* -------------------------------------------------------------------- */}
      {/* Quiz Prompt Banner (When mode === 'quiz') */}
      {/* -------------------------------------------------------------------- */}
      {mode === 'quiz' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            background: resolvedDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(16, 185, 129, 0.12)',
            borderBottom: '1px solid rgba(16, 185, 129, 0.3)',
            zIndex: 15,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              style={{
                fontWeight: 800,
                fontSize: '0.82rem',
                color: '#10b981',
                padding: '4px 8px',
                borderRadius: '6px',
                background: 'rgba(16, 185, 129, 0.2)',
              }}
            >
              Soru {quizState.questionIndex + 1} / {quizState.totalQuestions}
            </span>
            <div style={{ fontSize: '0.92rem', fontWeight: 600 }}>
              Hedef:{' '}
              <span style={{ color: '#10b981', fontWeight: 800 }}>
                <bdi dir="ltr">[{targetHotspot?.title[lang] || targetHotspot?.title.tr}]</bdi>
              </span>{' '}
              noktasını 3D model üzerinde bulun ve tıklayın!
            </div>
          </div>

          {quizState.feedback === 'correct' && (
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontWeight: 800,
                color: '#10b981',
                fontSize: '0.9rem',
              }}
            >
              <CheckCircle2 size={18} /> Doğru! +10 XP
            </span>
          )}
          {quizState.feedback === 'wrong' && (
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontWeight: 800,
                color: '#ef4444',
                fontSize: '0.9rem',
              }}
            >
              <XCircle size={18} /> Yanlış Nokta! Tekrar Dene
            </span>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* Viewport Stage (WebGL Mount + Screen Projected Badges) */}
      {/* -------------------------------------------------------------------- */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          touchAction: 'none',
        }}
        onPointerDown={handlePointerDown}
      >
        {!webglSupported ? (
          <Kimya3DFallbackCanvas
            scene={currentScene}
            lang={lang}
            selectedHotspotId={selectedHotspot?.id || null}
            onSelectHotspot={(hs) => handleHotspotClick(hs)}
            isDark={resolvedDark}
            mode={mode}
            quizTargetHotspotId={quizState.targetHotspotId}
          />
        ) : (
          <div
            ref={canvasMountRef}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
            }}
          />
        )}

        {/* Screen-Projected Hotspot Badges Overlay (Direct DOM Ref positioning) */}
        {webglSupported && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 10,
            }}
          >
            {currentScene.hotspots.map((hs) => {
              const isSelected = selectedHotspot?.id === hs.id;

              return (
                <button
                  key={hs.id}
                  ref={(el) => {
                    badgeRefs.current[hs.id] = el;
                  }}
                  onClick={(e) => handleHotspotClick(hs, e)}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    transform: 'translate3d(-9999px, -9999px, 0)',
                    display: 'none',
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                    alignItems: 'center',
                    gap: 6,
                    padding: mode === 'quiz' ? '6px' : '4px 8px',
                    borderRadius: mode === 'quiz' ? '50%' : '20px',
                    width: mode === 'quiz' ? 36 : 'auto',
                    height: mode === 'quiz' ? 36 : 'auto',
                    justifyContent: 'center',
                    background: isSelected
                      ? 'var(--brand-primary, #38bdf8)'
                      : resolvedDark
                      ? 'rgba(17, 24, 39, 0.9)'
                      : 'rgba(255, 255, 255, 0.95)',
                    color: isSelected ? '#ffffff' : resolvedDark ? '#f8fafc' : '#0f172a',
                    border: `2px solid ${hs.color || '#38bdf8'}`,
                    boxShadow: isSelected
                      ? '0 0 16px var(--brand-primary, #38bdf8)'
                      : '0 2px 8px rgba(0, 0, 0, 0.25)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    transition: 'background 0.15s ease',
                  }}
                  aria-label={mode === 'quiz' ? `İğne ${hs.pinNumber}` : hs.title[lang] || hs.title.tr}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: hs.color || '#38bdf8',
                    }}
                  />
                  <bdi dir="ltr">
                    <span>
                      {mode === 'quiz' ? hs.pinNumber : (hs.badgeLabel || hs.title[lang] || hs.title.tr)}
                    </span>
                  </bdi>
                </button>
              );
            })}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* Floating Viewport HUD (Controls Bar) */}
        {/* ------------------------------------------------------------------ */}
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 16px',
            borderRadius: '9999px',
            background: resolvedDark ? 'rgba(17, 24, 39, 0.92)' : 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--border-color, rgba(148, 163, 184, 0.25))',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            zIndex: 15,
            maxWidth: '92vw',
            overflowX: 'auto',
          }}
        >
          {/* Explicit Zoom In (+) */}
          <button
            onClick={handleZoomIn}
            title={ZOOM_FIT_I18N[lang]?.zoomIn || ZOOM_FIT_I18N.tr.zoomIn}
            aria-label={ZOOM_FIT_I18N[lang]?.zoomIn || ZOOM_FIT_I18N.tr.zoomIn}
            style={{
              padding: '6px',
              borderRadius: '50%',
              border: 'none',
              background: 'transparent',
              color: 'inherit',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ZoomIn size={18} />
          </button>

          {/* Explicit Zoom Out (-) */}
          <button
            onClick={handleZoomOut}
            title={ZOOM_FIT_I18N[lang]?.zoomOut || ZOOM_FIT_I18N.tr.zoomOut}
            aria-label={ZOOM_FIT_I18N[lang]?.zoomOut || ZOOM_FIT_I18N.tr.zoomOut}
            style={{
              padding: '6px',
              borderRadius: '50%',
              border: 'none',
              background: 'transparent',
              color: 'inherit',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ZoomOut size={18} />
          </button>

          {/* Fit to Screen (Ekrana Sığdır) */}
          <button
            onClick={handleFitToScreen}
            title={ZOOM_FIT_I18N[lang]?.fitScreen || ZOOM_FIT_I18N.tr.fitScreen}
            aria-label={ZOOM_FIT_I18N[lang]?.fitScreen || ZOOM_FIT_I18N.tr.fitScreen}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              padding: '5px 12px',
              borderRadius: '9999px',
              border: '1px solid var(--brand-primary, #0284c7)',
              background: resolvedDark ? 'rgba(56, 189, 248, 0.15)' : 'rgba(2, 132, 199, 0.1)',
              color: 'inherit',
              fontSize: '0.75rem',
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            <Maximize2 size={14} />
            <span>{ZOOM_FIT_I18N[lang]?.fitScreen || ZOOM_FIT_I18N.tr.fitScreen}</span>
          </button>

          {/* Reset Camera */}
          <button
            onClick={handleResetCamera}
            title={t.lab3d.resetCamera}
            aria-label={t.lab3d.resetCamera}
            style={{
              padding: '6px',
              borderRadius: '50%',
              border: 'none',
              background: 'transparent',
              color: 'inherit',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Focus size={18} />
          </button>

          {/* Auto Rotate Toggle */}
          <button
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            title={isAutoRotate ? t.lab3d.pauseRotate : t.lab3d.autoRotate}
            aria-label={isAutoRotate ? t.lab3d.pauseRotate : t.lab3d.autoRotate}
            style={{
              padding: '6px',
              borderRadius: '50%',
              border: 'none',
              background: isAutoRotate ? 'var(--brand-primary, #0284c7)' : 'transparent',
              color: isAutoRotate ? '#ffffff' : 'inherit',
              cursor: 'pointer',
              display: 'flex',
            }}
          >
            <RotateCw size={18} />
          </button>

          {/* Live Simulation Toggle */}
          <button
            onClick={() => setIsLiveSim(!isLiveSim)}
            title={isLiveSim ? 'Canlı Simülasyonu Durdur' : 'Canlı Simülasyonu Başlat'}
            aria-label={isLiveSim ? 'Canlı Simülasyonu Durdur' : 'Canlı Simülasyonu Başlat'}
            style={{
              padding: '6px',
              borderRadius: '50%',
              border: 'none',
              background: isLiveSim ? '#10b981' : 'transparent',
              color: isLiveSim ? '#ffffff' : 'inherit',
              cursor: 'pointer',
              display: 'flex',
            }}
          >
            {isLiveSim ? <Play size={18} /> : <Pause size={18} />}
          </button>

          {/* Explode View Slider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }} title={t.lab3d.explodeView}>
            <Layers size={16} />
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={explodeFactor}
              onChange={(e) => setExplodeFactor(parseFloat(e.target.value))}
              aria-label={t.lab3d.explodeView}
              style={{ width: '80px', accentColor: 'var(--brand-primary, #0284c7)' }}
            />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, minWidth: '32px' }}>
              {Math.round(explodeFactor * 100)}%
            </span>
          </div>

          {/* Fullscreen Toggle */}
          <button
            onClick={handleToggleFullscreen}
            title={isFullscreen ? 'Tam Ekrandan Çık' : 'Tam Ekran'}
            aria-label={isFullscreen ? 'Tam Ekrandan Çık' : 'Tam Ekran'}
            style={{
              padding: '6px',
              borderRadius: '50%',
              border: 'none',
              background: 'transparent',
              color: 'inherit',
              cursor: 'pointer',
              display: 'flex',
            }}
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Hotspot Drawer / Detail Modal (When hotspot is clicked in explore) */}
        {/* ------------------------------------------------------------------ */}
        {selectedHotspot && mode === 'explore' && (
          <aside
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: '360px',
              maxHeight: 'calc(100% - 40px)',
              overflowY: 'auto',
              borderRadius: '16px',
              background: resolvedDark ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--border-color, rgba(148, 163, 184, 0.3))',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.3)',
              padding: '18px',
              zIndex: 25,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
              <div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: selectedHotspot.color || '#38bdf8',
                    color: '#ffffff',
                  }}
                >
                  Nokta {selectedHotspot.pinNumber}
                </span>
                <h2 style={{ fontSize: '1.05rem', fontWeight: 800, marginTop: 6, lineHeight: 1.3 }}>
                  <bdi dir="ltr">{selectedHotspot.title[lang] || selectedHotspot.title.tr}</bdi>
                </h2>
              </div>
              <button
                onClick={() => setSelectedHotspot(null)}
                aria-label="Kapat"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  padding: 4,
                }}
              >
                <X size={20} />
              </button>
            </div>

            <p style={{ fontSize: '0.86rem', lineHeight: 1.5, opacity: 0.9, marginTop: 12 }}>
              <bdi dir="ltr">{selectedHotspot.description[lang] || selectedHotspot.description.tr}</bdi>
            </p>

            {/* ÖSYM Exam Fact Card */}
            <div
              style={{
                marginTop: 14,
                padding: '12px 14px',
                borderRadius: '10px',
                background: resolvedDark ? 'rgba(245, 158, 11, 0.12)' : 'rgba(245, 158, 11, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#f59e0b',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  marginBottom: 6,
                }}
              >
                <Award size={16} />
                <span>ÖSYM Sınav İpucu / Exam Fact</span>
              </div>
              <div style={{ fontSize: '0.82rem', lineHeight: 1.5 }}>
                <bdi dir="ltr">{selectedHotspot.examFact[lang] || selectedHotspot.examFact.tr}</bdi>
              </div>
            </div>

            <button
              onClick={() => handleFocusHotspot(selectedHotspot)}
              style={{
                marginTop: 14,
                width: '100%',
                padding: '8px 14px',
                borderRadius: '8px',
                border: '1px solid var(--brand-primary, #0284c7)',
                background: 'transparent',
                color: 'var(--brand-primary, #0284c7)',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
              }}
            >
              <Focus size={16} />
              <span>3D Kamerayı Odakla</span>
            </button>
          </aside>
        )}
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Quiz Completion Summary Modal */}
      {/* -------------------------------------------------------------------- */}
      {quizState.isComplete && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
            padding: 20,
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '440px',
              padding: '28px',
              borderRadius: '20px',
              background: resolvedDark ? '#111827' : '#ffffff',
              border: '1px solid var(--border-color, rgba(148, 163, 184, 0.3))',
              textAlign: 'center',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              <Award size={36} />
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 8 }}>
              Kör İğne Sınavı Tamamlandı!
            </h2>
            <p style={{ opacity: 0.8, fontSize: '0.92rem', marginBottom: 18 }}>
              <bdi dir="ltr">{currentScene.title[lang] || currentScene.title.tr}</bdi> modelindeki tüm kritik uzamsal noktaları
              başarıyla incelediniz.
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '12px',
                borderRadius: '12px',
                background: resolvedDark ? '#1f293d' : '#f1f5f9',
                marginBottom: 20,
              }}
            >
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981' }}>
                  {quizState.correctCount} / {quizState.totalQuestions}
                </div>
                <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>Doğru İğne</div>
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f59e0b' }}>
                  +{quizState.earnedXp} XP
                </div>
                <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>Kazanılan Deneyim</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button
                onClick={() => initQuizForScene(currentScene)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '10px',
                  border: 'none',
                  background: 'var(--brand-primary, #0284c7)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
              >
                Tekrar Çöz
              </button>

              <button
                onClick={() => handleToggleMode('explore')}
                style={{
                  padding: '10px 18px',
                  borderRadius: '10px',
                  border: '1px solid rgba(148, 163, 184, 0.3)',
                  background: 'transparent',
                  color: 'inherit',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
              >
                Modeli Keşfetmeye Dön
              </button>

              {onOpenUnitExam && (
                <button
                  onClick={() => onOpenUnitExam(currentScene.unitId)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '10px',
                    border: 'none',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#10b981',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                  }}
                >
                  <FileCheck2 size={16} />
                  <span>Bu Ünitenin Deneme Sınavına Git</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* 32-Scene Selection Modal */}
      {/* -------------------------------------------------------------------- */}
      {isSceneModalOpen && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 60,
            padding: 20,
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '860px',
              maxHeight: '90vh',
              borderRadius: '20px',
              background: resolvedDark ? '#111827' : '#ffffff',
              border: '1px solid var(--border-color, rgba(148, 163, 184, 0.3))',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
              overflow: 'hidden',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 22px',
                borderBottom: '1px solid var(--border-color, rgba(148, 163, 184, 0.2))',
              }}
            >
              <div>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>3D Molekül & Laboratuvar Modelleri</h2>
                <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: 2 }}>
                  Tüm 24 üniteyi kapsayan 32 prosedürel 3D kimya sahnesi
                </p>
              </div>
              <button
                onClick={() => setIsSceneModalOpen(false)}
                aria-label="Kapat"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  padding: 4,
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Search & Category Filter Pills */}
            <div style={{ padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 14px',
                  borderRadius: '10px',
                  background: resolvedDark ? '#1f293d' : '#f1f5f9',
                  border: '1px solid var(--border-color, rgba(148, 163, 184, 0.25))',
                }}
              >
                <Search size={18} style={{ opacity: 0.6 }} />
                <input
                  type="text"
                  placeholder="Model adı, formül, ünite no (örn: VSEPR, NaCl, u03, Pil)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'inherit',
                    fontSize: '0.9rem',
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer' }}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {[
                  { id: 'all', label: 'Tümü (32)' },
                  { id: 'vsepr', label: 'VSEPR (7)' },
                  { id: 'crystal', label: 'Kristal (2)' },
                  { id: 'electrochem', label: 'Elektrokimya (3)' },
                  { id: 'organic', label: 'Organik (2)' },
                  { id: 'atomic', label: 'Atom & Kuantum (3)' },
                  { id: 'gas_solution', label: 'Gaz & Çözelti (7)' },
                  { id: 'general', label: 'Laboratuvar & Denge (8)' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategoryFilter(cat.id)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      background:
                        categoryFilter === cat.id
                          ? 'var(--brand-primary, #0284c7)'
                          : resolvedDark
                          ? '#1f293d'
                          : '#e2e8f0',
                      color: categoryFilter === cat.id ? '#ffffff' : 'inherit',
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scenes Grid List */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '10px 22px 22px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: 12,
              }}
            >
              {filteredScenes.map((s) => {
                const isSelected = s.id === currentScene.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => handleSelectScene(s)}
                    style={{
                      padding: '12px',
                      borderRadius: '12px',
                      border: isSelected
                        ? '2px solid var(--brand-primary, #0284c7)'
                        : '1px solid var(--border-color, rgba(148, 163, 184, 0.25))',
                      background: isSelected
                        ? resolvedDark
                          ? 'rgba(56, 189, 248, 0.12)'
                          : 'rgba(2, 132, 199, 0.08)'
                        : resolvedDark
                        ? '#1f293d'
                        : '#f8fafc',
                      color: 'inherit',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6,
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 800,
                          padding: '2px 6px',
                          borderRadius: '4px',
                          background: s.badge === 'TYT' ? '#10b981' : '#f59e0b',
                          color: '#ffffff',
                        }}
                      >
                        {s.badge} • {s.unitId.toUpperCase()}
                      </span>
                      <span style={{ fontSize: '0.72rem', opacity: 0.6 }}>{s.category}</span>
                    </div>

                    <div style={{ fontSize: '0.88rem', fontWeight: 700, lineHeight: 1.25 }}>
                      <bdi dir="ltr">{s.title[lang] || s.title.tr}</bdi>
                    </div>

                    <div
                      style={{
                        fontSize: '0.75rem',
                        opacity: 0.75,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        lineHeight: 1.3,
                      }}
                    >
                      <bdi dir="ltr">{s.subtitle[lang] || s.subtitle.tr}</bdi>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
