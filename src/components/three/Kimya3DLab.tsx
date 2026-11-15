// ============================================================================
// src/components/three/Kimya3DLab.tsx
// Milestone 3: Interactive Procedural Three.js 3D Molecular & Chemical Lab
// ============================================================================

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  RotateCw,
  Play,
  Pause,
  Layers,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
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
  RotateCcw,
} from 'lucide-react';

import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { redesignStrings, redesignExtra, type LabCategoryId } from '../../i18n/redesignStrings';
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

type RGB2 = [string, string];
/** Three lit-sphere colours per category for the gallery thumbnails (centre, left, right). */
const SCENE_THUMB_COLORS: Record<string, [RGB2, RGB2, RGB2]> = {
  vsepr: [['#FF6B7A', '#9C1830'], ['#E9EEF5', '#7C8798'], ['#E9EEF5', '#7C8798']],
  crystal: [['#7DF0A8', '#0E8A52'], ['#C9A2FF', '#5B32C9'], ['#C9A2FF', '#5B32C9']],
  electrochem: [['#FFD873', '#A86A08'], ['#6FA8FF', '#1B3FA8'], ['#7C8AA0', '#1B2536']],
  organic: [['#7C8AA0', '#1B2536'], ['#E9EEF5', '#7C8798'], ['#E9EEF5', '#7C8798']],
  atomic: [['#FF6B7A', '#9C1830'], ['#FFD873', '#A86A08'], ['#FFD873', '#A86A08']],
  gas_solution: [['#6FA8FF', '#1B3FA8'], ['#5FF2DF', '#0C8073'], ['#E9EEF5', '#7C8798']],
  general: [['#5FF2DF', '#0C8073'], ['#6FA8FF', '#1B3FA8'], ['#E9EEF5', '#7C8798']],
};

/** Gallery filter chips: "all" plus every category present in the scene data, in a fixed display order. */
const LAB_CATEGORY_ORDER: LabCategoryId[] = ['vsepr', 'crystal', 'electrochem', 'organic', 'atomic', 'gas_solution', 'general'];
const LAB_CATEGORY_IDS: string[] = [
  'all',
  ...LAB_CATEGORY_ORDER.filter((id) => PRIMARY_32_SCENES.some((s) => s.category === id)),
];

/** True when the OS or the in-app "reduce motion" setting asks for less animation. */
const prefersReducedMotion = (): boolean =>
  typeof document !== 'undefined' &&
  (document.documentElement.hasAttribute('data-reduce-motion') ||
    (typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches));

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
  const [isLiveSim, setIsLiveSim] = useState<boolean>(() => !prefersReducedMotion());
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

  const r = redesignStrings(lang);
  const rx = redesignExtra(lang);
  const sceneTitle = currentScene.title[lang] || currentScene.title.tr;
  const sceneSub = currentScene.subtitle[lang] || currentScene.subtitle.tr;
  const fitLabel = ZOOM_FIT_I18N[lang]?.fitScreen || ZOOM_FIT_I18N.tr.fitScreen;
  const closeSceneModal = () => setIsSceneModalOpen(false);
  const catCount = (id: string) =>
    id === 'all' ? PRIMARY_32_SCENES.length : PRIMARY_32_SCENES.filter((sc) => sc.category === id).length;
  const catLabel = (id: string) => (id === 'all' ? r.all : r.categories[id as LabCategoryId] ?? id);
  const isExploded = explodeFactor > 0.01;

  // Scene gallery (LabScenes): category chips with counts + 2/3-column tile grid
  const galleryNode = isSceneModalOpen ? (
      <section className="lab-gallery" aria-labelledby="lab-scenes-title">
        <header className="ky-screen-head">
          <button type="button" className="ky-icon-btn" onClick={closeSceneModal} aria-label={r.backToLab}>
            <ChevronLeft size={20} aria-hidden="true" className="lab-flip-rtl" />
          </button>
          <h1 id="lab-scenes-title" className="ky-disp ky-fs-24">
            {r.scenesTitle}
          </h1>
          <span className="ky-chip ky-mono lab-count">{filteredScenes.length}</span>
        </header>

        <div className="lab-gallery__filters">
          <label className="lab-search">
            <Search size={18} aria-hidden="true" className="lab-search__icon" />
            <input
              type="search"
              className="ky-input lab-search__input"
              placeholder={r.searchScenes}
              aria-label={r.searchScenes}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
          <div className="lab-cats" role="group" aria-label={r.scenesTitle}>
            {LAB_CATEGORY_IDS.map((id) => (
              <button
                key={id}
                type="button"
                className={`ky-chip lab-cat${categoryFilter === id ? ' on' : ''}`}
                aria-pressed={categoryFilter === id}
                onClick={() => setCategoryFilter(id)}
              >
                {catLabel(id)} <span className="ky-mono">{catCount(id)}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="ky-fit">
          <div className="lab-tiles">
            {filteredScenes.map((sc) => {
              const isSelected = sc.id === currentScene.id;
              const [c1, c2, c3] = SCENE_THUMB_COLORS[sc.category] ?? SCENE_THUMB_COLORS.general;
              return (
                <button
                  key={sc.id}
                  type="button"
                  className={`ky-card lab-tile${isSelected ? ' on' : ''}`}
                  aria-pressed={isSelected}
                  onClick={() => handleSelectScene(sc)}
                >
                  <span className="ky-stage ky-persp ky-thumb" aria-hidden="true">
                    <span className="ky-floor" />
                    <span className="ky-rig">
                      <span className="ky-atom lab-thumb-a" style={{ ['--c' as string]: c2[0], ['--cd' as string]: c2[1] }} />
                      <span className="ky-atom lab-thumb-b" style={{ ['--c' as string]: c3[0], ['--cd' as string]: c3[1] }} />
                      <span className="ky-atom lab-thumb-c" style={{ ['--c' as string]: c1[0], ['--cd' as string]: c1[1] }} />
                    </span>
                  </span>
                  <span className="lab-tile__body">
                    <span className="ky-fs-16 lab-tile__title">
                      <bdi>{sc.title[lang] || sc.title.tr}</bdi>
                    </span>
                    <span className="lab-tile__meta">
                      <span className={`ky-chip ${sc.badge === 'TYT' ? 'ky-chip--accent' : 'ky-chip--violet'}`}>{sc.badge}</span>
                      <span className="ky-fs-12">{catLabel(sc.category)}</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
  ) : null;

  return (
    <section ref={containerRef} className="ky-screen lab" aria-label={t.lab3d.title}>
      <header className="ky-screen-head">
        <h1 className="ky-disp ky-fs-28">{r.labTitle}</h1>
        <button
          type="button"
          className="ky-chip lab-all"
          onClick={() => setIsSceneModalOpen(true)}
          aria-haspopup="dialog"
        >
          {r.allScenes(PRIMARY_32_SCENES.length)}
        </button>
      </header>

      <div className="ky-fit">
        <div className="ky-pane lab-pane">
          <section className="ky-lead ky-stage lab-stage" aria-label={sceneTitle} onPointerDown={handlePointerDown}>
            <div className="ky-floor" aria-hidden="true" />

            {!webglSupported ? (
              <Kimya3DFallbackCanvas
                scene={currentScene}
                lang={lang}
                selectedHotspotId={selectedHotspot?.id || null}
                onSelectHotspot={(hs) => handleHotspotClick(hs)}
                isDark={true}
                mode={mode}
                quizTargetHotspotId={quizState.targetHotspotId}
              />
            ) : (
              <div ref={canvasMountRef} className="lab-canvas" />
            )}

            {/* Numbered gold hotspot pins (positioned by the render loop) */}
            {webglSupported && (
              <div className="lab-pins">
                {currentScene.hotspots.map((hs) => {
                  const isSelected = selectedHotspot?.id === hs.id;
                  return (
                    <button
                      key={hs.id}
                      type="button"
                      ref={(el) => {
                        badgeRefs.current[hs.id] = el;
                      }}
                      onClick={(e) => handleHotspotClick(hs, e)}
                      className={`lab-pin${isSelected ? ' on' : ''}${mode === 'quiz' ? ' is-quiz' : ''}`}
                      aria-label={mode === 'quiz' ? `${hs.pinNumber}` : `${hs.pinNumber}. ${hs.title[lang] || hs.title.tr}`}
                    >
                      {hs.pinNumber}
                    </button>
                  );
                })}
              </div>
            )}

            <button type="button" className="ky-icon-btn lab-step lab-step--prev" onClick={handlePrevScene} aria-label={r.prevScene}>
              <ChevronLeft size={20} aria-hidden="true" className="lab-flip-rtl" />
            </button>
            <button type="button" className="ky-icon-btn lab-step lab-step--next" onClick={handleNextScene} aria-label={r.nextScene}>
              <ChevronRight size={20} aria-hidden="true" className="lab-flip-rtl" />
            </button>

            <div className="lab-hud">
              <button type="button" className="ky-icon-btn lab-hud-btn" onClick={handleZoomIn} aria-label={ZOOM_FIT_I18N[lang]?.zoomIn || ZOOM_FIT_I18N.tr.zoomIn}>
                <ZoomIn size={18} aria-hidden="true" />
              </button>
              <button type="button" className="ky-icon-btn lab-hud-btn" onClick={handleZoomOut} aria-label={ZOOM_FIT_I18N[lang]?.zoomOut || ZOOM_FIT_I18N.tr.zoomOut}>
                <ZoomOut size={18} aria-hidden="true" />
              </button>
              <button type="button" className="ky-icon-btn lab-hud-btn" onClick={handleFitToScreen} aria-label={fitLabel}>
                <Maximize2 size={18} aria-hidden="true" />
              </button>
            </div>

            <p className="lab-hint">{t.lab3d.dragHint}</p>
          </section>

          {/* Category chip, title + formula, subtitle */}
          <div className="lab-info">
            <span className="ky-chip ky-chip--accent">
              {catLabel(currentScene.category)} · {currentScene.unitId.toUpperCase()}
            </span>
            <h2 className="ky-fs-24 lab-info__title">
              <bdi>{sceneTitle}</bdi>{' '}
              <span className={`ky-chip ${currentScene.badge === 'TYT' ? 'ky-chip--accent' : 'ky-chip--violet'} lab-info__badge`}>
                {currentScene.badge}
              </span>
            </h2>
            <p className="ky-fs-14 lab-info__sub">
              <bdi>{sceneSub}</bdi>
            </p>
          </div>

          {/* Blind-pin quiz banner */}
          {mode === 'quiz' && (
            <div
              className={`ky-card lab-quiz ky-pop${quizState.feedback === 'correct' ? ' is-right' : ''}${
                quizState.feedback === 'wrong' ? ' is-wrong ky-shake' : ''
              }`}
              role="status"
              aria-live="polite"
            >
              <span className="ky-chip ky-chip--gold ky-mono">
                {Math.min(quizState.questionIndex + 1, quizState.totalQuestions)} / {quizState.totalQuestions}
              </span>
              <p className="ky-fs-16 lab-quiz__prompt">
                <strong className="lab-quiz__target">
                  <bdi>{targetHotspot?.title[lang] || targetHotspot?.title.tr}</bdi>
                </strong>
              </p>
              {quizState.feedback === 'correct' && (
                <span className="lab-quiz__fb lab-quiz__fb--ok">
                  <CheckCircle2 size={18} aria-hidden="true" /> +10 XP
                </span>
              )}
              {quizState.feedback === 'wrong' && (
                <span className="lab-quiz__fb lab-quiz__fb--bad">
                  <XCircle size={18} aria-hidden="true" />
                </span>
              )}
            </div>
          )}

          {/* Hotspot card: title + "Sınavda:" exam fact */}
          {mode === 'explore' &&
            (selectedHotspot ? (
              <section className="ky-card lab-spot ky-pop" key={selectedHotspot.id} aria-label={selectedHotspot.title[lang] || selectedHotspot.title.tr}>
                <span className="lab-pin-static" aria-hidden="true">
                  {selectedHotspot.pinNumber}
                </span>
                <div className="lab-spot__body">
                  <p className="ky-fs-16 lab-spot__title">
                    <bdi>{selectedHotspot.title[lang] || selectedHotspot.title.tr}</bdi>
                  </p>
                  <p className="ky-fs-14 lab-spot__desc">
                    <bdi>{selectedHotspot.description[lang] || selectedHotspot.description.tr}</bdi>
                  </p>
                  <p className="ky-fs-14 lab-spot__fact">
                    <strong>{r.inExam}</strong> <bdi>{selectedHotspot.examFact[lang] || selectedHotspot.examFact.tr}</bdi>
                  </p>
                  <button type="button" className="ky-btn-text lab-spot__focus" onClick={() => handleFocusHotspot(selectedHotspot)}>
                    <Focus size={16} aria-hidden="true" />
                    <span>{r.focusCamera}</span>
                  </button>
                </div>
                <button type="button" className="ky-icon-btn lab-spot__close" onClick={() => setSelectedHotspot(null)} aria-label={t.profile.close}>
                  <X size={18} aria-hidden="true" />
                </button>
              </section>
            ) : (
              <p className="ky-fs-14 lab-prompt">{t.lab3d.selectHotspotPrompt}</p>
            ))}

          {/* Three action keys */}
          <div className="ky-acts">
            <button
              type="button"
              className="ky-act"
              onClick={() => {
                setExplodeFactor(0);
                handleResetCamera();
              }}
            >
              <RotateCcw size={22} aria-hidden="true" />
              {r.resetAct}
            </button>
            <button type="button" className="ky-act" aria-pressed={isExploded} onClick={() => setExplodeFactor(isExploded ? 0 : 1)}>
              <Layers size={22} aria-hidden="true" />
              {r.explodeAct}
            </button>
            <button
              type="button"
              className="ky-act"
              data-sfx="start"
              disabled={!onOpenUnitExam}
              onClick={() => onOpenUnitExam?.(currentScene.unitId)}
            >
              <FileCheck2 size={22} aria-hidden="true" />
              {r.solveTest}
            </button>
          </div>

          {/* Secondary controls: mode, explode amount, rotation, live sim, full screen */}
          <div className="ky-well lab-controls">
            <div className="ky-seg ky-seg--sm lab-modes" role="group" aria-label={r.explore}>
              <button type="button" aria-pressed={mode === 'explore'} onClick={() => handleToggleMode('explore')}>
                {r.explore}
              </button>
              <button type="button" aria-pressed={mode === 'quiz'} onClick={() => handleToggleMode('quiz')} data-sfx="start">
                <Sparkles size={14} aria-hidden="true" /> {r.blindPin}
              </button>
            </div>
            <label className="lab-explode">
              <Layers size={18} aria-hidden="true" />
              <input
                type="range"
                className="ky-range"
                min="0"
                max="1"
                step="0.05"
                value={explodeFactor}
                onChange={(e) => setExplodeFactor(parseFloat(e.target.value))}
                aria-label={t.lab3d.explodeView}
                style={{ '--pct': `${Math.round(explodeFactor * 100)}%` } as React.CSSProperties}
              />
              <span className="ky-mono lab-explode__val">{Math.round(explodeFactor * 100)}%</span>
            </label>
            <div className="lab-toggles">
              <button
                type="button"
                className="ky-icon-btn"
                onClick={() => setIsAutoRotate(!isAutoRotate)}
                aria-pressed={isAutoRotate}
                aria-label={isAutoRotate ? t.lab3d.pauseRotate : t.lab3d.autoRotate}
                title={isAutoRotate ? t.lab3d.pauseRotate : t.lab3d.autoRotate}
              >
                <RotateCw size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="ky-icon-btn"
                onClick={() => setIsLiveSim(!isLiveSim)}
                aria-pressed={isLiveSim}
                aria-label={r.liveSim}
                title={r.liveSim}
              >
                {isLiveSim ? <Pause size={20} aria-hidden="true" /> : <Play size={20} aria-hidden="true" />}
              </button>
              <button
                type="button"
                className="ky-icon-btn"
                onClick={handleToggleFullscreen}
                aria-pressed={isFullscreen}
                aria-label={r.fullscreen}
                title={r.fullscreen}
              >
                {isFullscreen ? <Minimize2 size={20} aria-hidden="true" /> : <Maximize2 size={20} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {galleryNode}

      {/* Quiz completion summary */}
      {quizState.isComplete && (
        <div className="ky-modal-backdrop" role="presentation">
          <div className="ky-sheet lab-sheet lab-done ky-pop" role="dialog" aria-modal="true" aria-labelledby="lab-done-title">
            <div className="ky-tile ky-tile--ok ky-tile--lg lab-done__tile" aria-hidden="true">
              <Award size={32} />
            </div>
            <h2 id="lab-done-title" className="ky-disp lab-done__title">{rx.labDoneTitle}</h2>
            <p className="lab-done__txt">{rx.labDoneText(sceneTitle)}</p>

            <div className="ky-well lab-done__stats">
              <div>
                <div className="ky-mono lab-done__num lab-done__num--ok">
                  {quizState.correctCount} / {quizState.totalQuestions}
                </div>
                <div className="lab-done__lbl">{rx.labDoneCorrect}</div>
              </div>
              <div>
                <div className="ky-mono lab-done__num lab-done__num--gold">+{quizState.earnedXp} XP</div>
                <div className="lab-done__lbl">{rx.labDoneXp}</div>
              </div>
            </div>

            <div className="lab-done__actions">
              <button
                type="button"
                className="ky-btn ky-btn--primary ky-btn--block"
                data-sfx="start"
                onClick={() => initQuizForScene(currentScene)}
              >
                {rx.labRetry}
              </button>
              <button type="button" className="ky-btn ky-btn--quiet ky-btn--block" onClick={() => handleToggleMode('explore')}>
                {rx.labBackExplore}
              </button>
              {onOpenUnitExam && (
                <button
                  type="button"
                  className="ky-btn ky-btn--ok ky-btn--block"
                  onClick={() => onOpenUnitExam(currentScene.unitId)}
                >
                  <FileCheck2 size={16} aria-hidden="true" />
                  <span>{rx.labGoUnitTest}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
