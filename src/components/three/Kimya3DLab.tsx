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

const LAB_CATEGORIES: { id: string; label: string }[] = [
  { id: 'all', label: 'Tümü (32)' },
  { id: 'vsepr', label: 'VSEPR (7)' },
  { id: 'crystal', label: 'Kristal (2)' },
  { id: 'electrochem', label: 'Elektrokimya (3)' },
  { id: 'organic', label: 'Organik (2)' },
  { id: 'atomic', label: 'Atom & Kuantum (3)' },
  { id: 'gas_solution', label: 'Gaz & Çözelti (7)' },
  { id: 'general', label: 'Laboratuvar & Denge (8)' },
];

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

  const unitCategoryLine = `${currentScene.unitId.toUpperCase()} · ${currentScene.category}`;
  const sceneTitle = currentScene.title[lang] || currentScene.title.tr;
  const categoryScenes =
    categoryFilter === 'all' ? PRIMARY_32_SCENES : PRIMARY_32_SCENES.filter((s) => s.category === categoryFilter);
  const fitLabel = ZOOM_FIT_I18N[lang]?.fitScreen || ZOOM_FIT_I18N.tr.fitScreen;
  const closeSceneModal = () => setIsSceneModalOpen(false);

  return (
    <section ref={containerRef} className="lab" aria-label={t.lab3d.title}>
      {/* Header */}
      <header className="lab-head">
        <div className="lab-head__txt">
          <p className="ky-eyebrow lab-head__eyebrow">{unitCategoryLine}</p>
          <h1 className="lab-title">{t.lab3d.title}</h1>
        </div>
        <button
          type="button"
          className="ky-icon-btn"
          onClick={() => setIsSceneModalOpen(true)}
          aria-label="Sahne ara"
          title="Sahne ara"
          aria-haspopup="dialog"
        >
          <Search size={20} aria-hidden="true" />
        </button>
      </header>

      {/* Scene stepper + mode switch */}
      <div className="lab-toolbar">
        <button
          type="button"
          className="ky-icon-btn"
          onClick={handlePrevScene}
          aria-label="Önceki Model"
          title="Önceki Model"
        >
          <ChevronLeft size={20} aria-hidden="true" className="lab-flip-rtl" />
        </button>

        <div className="ky-segmented lab-toolbar__modes" role="group" aria-label="Mod">
          <button type="button" aria-pressed={mode === 'explore'} onClick={() => handleToggleMode('explore')}>
            Keşif Modu
          </button>
          <button
            type="button"
            aria-pressed={mode === 'quiz'}
            onClick={() => handleToggleMode('quiz')}
            data-sfx="start"
            className="lab-mode-quiz"
          >
            <Sparkles size={14} aria-hidden="true" />
            Kör İğne Sınavı
          </button>
        </div>

        <button
          type="button"
          className="ky-icon-btn"
          onClick={handleNextScene}
          aria-label="Sonraki Model"
          title="Sonraki Model"
        >
          <ChevronRight size={20} aria-hidden="true" className="lab-flip-rtl" />
        </button>
      </div>

      {/* Quiz prompt banner */}
      {mode === 'quiz' && (
        <div
          className={`ky-card lab-quiz${quizState.feedback === 'correct' ? ' is-right' : ''}${
            quizState.feedback === 'wrong' ? ' is-wrong ky-shake' : ''
          }`}
          role="status"
          aria-live="polite"
        >
          <span className="ky-chip ky-chip--ok ky-mono">
            Soru {Math.min(quizState.questionIndex + 1, quizState.totalQuestions)} / {quizState.totalQuestions}
          </span>
          <p className="lab-quiz__prompt">
            Hedef:{' '}
            <strong className="lab-quiz__target">
              <bdi dir="ltr">[{targetHotspot?.title[lang] || targetHotspot?.title.tr}]</bdi>
            </strong>{' '}
            noktasını 3D model üzerinde bulun ve tıklayın!
          </p>
          {quizState.feedback === 'correct' && (
            <span className="lab-quiz__fb lab-quiz__fb--ok">
              <CheckCircle2 size={18} aria-hidden="true" /> Doğru! +10 XP
            </span>
          )}
          {quizState.feedback === 'wrong' && (
            <span className="lab-quiz__fb lab-quiz__fb--bad">
              <XCircle size={18} aria-hidden="true" /> Yanlış Nokta! Tekrar Dene
            </span>
          )}
        </div>
      )}

      <div className="lab-body">
        {/* Viewport column */}
        <div className="lab-viewcol">
          <div className="ky-stage lab-stage" onPointerDown={handlePointerDown}>
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

            {/* Screen-projected hotspot badges (positioned directly via DOM refs) */}
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
                      style={{ '--pin': hs.color || '#38bdf8' } as React.CSSProperties}
                      aria-label={mode === 'quiz' ? `İğne ${hs.pinNumber}` : hs.title[lang] || hs.title.tr}
                    >
                      <span className="lab-dot" aria-hidden="true" />
                      <bdi dir="ltr">
                        <span>{mode === 'quiz' ? hs.pinNumber : hs.badgeLabel || hs.title[lang] || hs.title.tr}</span>
                      </bdi>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Overlay info chip */}
            <span className="ky-chip lab-overlay-chip">
              <span className={`lab-level lab-level--${currentScene.badge === 'TYT' ? 'tyt' : 'ayt'}`}>
                {currentScene.badge}
              </span>
              <bdi dir="ltr">{sceneTitle}</bdi>
            </span>

            {/* Zoom / camera keycaps */}
            <div className="lab-hud">
              <button
                type="button"
                className="ky-icon-btn lab-hud-btn"
                onClick={handleZoomIn}
                title={ZOOM_FIT_I18N[lang]?.zoomIn || ZOOM_FIT_I18N.tr.zoomIn}
                aria-label={ZOOM_FIT_I18N[lang]?.zoomIn || ZOOM_FIT_I18N.tr.zoomIn}
              >
                <ZoomIn size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="ky-icon-btn lab-hud-btn"
                onClick={handleZoomOut}
                title={ZOOM_FIT_I18N[lang]?.zoomOut || ZOOM_FIT_I18N.tr.zoomOut}
                aria-label={ZOOM_FIT_I18N[lang]?.zoomOut || ZOOM_FIT_I18N.tr.zoomOut}
              >
                <ZoomOut size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="ky-icon-btn lab-hud-btn"
                onClick={handleFitToScreen}
                title={fitLabel}
                aria-label={fitLabel}
              >
                <Maximize2 size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="ky-icon-btn lab-hud-btn"
                onClick={handleResetCamera}
                title={t.lab3d.resetCamera}
                aria-label={t.lab3d.resetCamera}
              >
                <Focus size={20} aria-hidden="true" />
              </button>
            </div>

            <p className="lab-hint">{t.lab3d.dragHint}</p>
          </div>

          {/* Secondary controls */}
          <div className="ky-card lab-controls">
            <button
              type="button"
              className="ky-icon-btn"
              onClick={() => setIsAutoRotate(!isAutoRotate)}
              aria-pressed={isAutoRotate}
              title={isAutoRotate ? t.lab3d.pauseRotate : t.lab3d.autoRotate}
              aria-label={isAutoRotate ? t.lab3d.pauseRotate : t.lab3d.autoRotate}
            >
              <RotateCw size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="ky-icon-btn"
              onClick={() => setIsLiveSim(!isLiveSim)}
              aria-pressed={isLiveSim}
              title={isLiveSim ? 'Canlı Simülasyonu Durdur' : 'Canlı Simülasyonu Başlat'}
              aria-label={isLiveSim ? 'Canlı Simülasyonu Durdur' : 'Canlı Simülasyonu Başlat'}
            >
              {isLiveSim ? <Pause size={20} aria-hidden="true" /> : <Play size={20} aria-hidden="true" />}
            </button>
            <label className="lab-explode" title={t.lab3d.explodeView}>
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
            <button
              type="button"
              className="ky-icon-btn"
              onClick={handleToggleFullscreen}
              aria-pressed={isFullscreen}
              title={isFullscreen ? 'Tam Ekrandan Çık' : 'Tam Ekran'}
              aria-label={isFullscreen ? 'Tam Ekrandan Çık' : 'Tam Ekran'}
            >
              {isFullscreen ? <Minimize2 size={20} aria-hidden="true" /> : <Maximize2 size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Side panel */}
        <div className="lab-side">
          <section className="ky-card lab-info">
            <div className="lab-info__top">
              <h2 className="lab-info__title">
                <bdi dir="ltr">{sceneTitle}</bdi>
              </h2>
              <span className={`ky-chip ${currentScene.badge === 'TYT' ? 'ky-chip--ok' : 'ky-chip--gold'}`}>
                {currentScene.badge}
              </span>
            </div>
            <div className="lab-info__tags">
              <span className="ky-chip ky-chip--accent">{currentScene.unitId.toUpperCase()}</span>
              <span className="ky-chip">{currentScene.category}</span>
              {mode === 'explore' && (
                <span className="ky-chip ky-chip--violet">{currentScene.hotspots.length} nokta</span>
              )}
            </div>
            <p className="lab-info__desc">
              <bdi dir="ltr">{currentScene.subtitle[lang] || currentScene.subtitle.tr}</bdi>
            </p>
            {mode === 'explore' && !selectedHotspot && (
              <p className="lab-info__prompt">{t.lab3d.selectHotspotPrompt}</p>
            )}
          </section>

          {selectedHotspot && mode === 'explore' && (
            <aside className="ky-card lab-hotspot ky-pop" aria-label="Nokta detayı">
              <div className="lab-hotspot__top">
                <div className="lab-hotspot__ttl">
                  <span className="ky-chip lab-hotspot__pin" style={{ '--pin': selectedHotspot.color || '#38bdf8' } as React.CSSProperties}>
                    <span className="lab-dot" aria-hidden="true" />
                    Nokta {selectedHotspot.pinNumber}
                  </span>
                  <h3 className="lab-hotspot__name">
                    <bdi dir="ltr">{selectedHotspot.title[lang] || selectedHotspot.title.tr}</bdi>
                  </h3>
                </div>
                <button
                  type="button"
                  className="ky-icon-btn"
                  onClick={() => setSelectedHotspot(null)}
                  aria-label="Kapat"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              <p className="lab-hotspot__desc">
                <bdi dir="ltr">{selectedHotspot.description[lang] || selectedHotspot.description.tr}</bdi>
              </p>

              <div className="lab-fact">
                <div className="lab-fact__head">
                  <Award size={16} aria-hidden="true" />
                  <span>ÖSYM Sınav İpucu / Exam Fact</span>
                </div>
                <div className="lab-fact__body">
                  <bdi dir="ltr">{selectedHotspot.examFact[lang] || selectedHotspot.examFact.tr}</bdi>
                </div>
              </div>

              <button
                type="button"
                className="ky-btn ky-btn--quiet ky-btn--block"
                onClick={() => handleFocusHotspot(selectedHotspot)}
              >
                <Focus size={16} aria-hidden="true" />
                <span>3D Kamerayı Odakla</span>
              </button>
            </aside>
          )}

          {/* Scene picker chips */}
          <div className="lab-picker" aria-label="Modeller">
            <div className="ky-scroll-x lab-picker__cats">
              {LAB_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`ky-chip ky-chip--lg${categoryFilter === cat.id ? ' on' : ''}`}
                  aria-pressed={categoryFilter === cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="ky-scroll-x lab-picker__scenes">
              {categoryScenes.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`ky-chip${s.id === currentScene.id ? ' on' : ''}`}
                  aria-pressed={s.id === currentScene.id}
                  onClick={() => handleSelectScene(s)}
                >
                  <bdi dir="ltr">{s.title[lang] || s.title.tr}</bdi>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quiz completion summary */}
      {quizState.isComplete && (
        <div className="ky-modal-backdrop" role="presentation">
          <div className="ky-sheet lab-sheet lab-done ky-pop" role="dialog" aria-modal="true" aria-label="Kör İğne Sınavı Tamamlandı!">
            <div className="ky-tile ky-tile--ok ky-tile--lg lab-done__tile" aria-hidden="true">
              <Award size={32} />
            </div>
            <h2 className="lab-done__title">Kör İğne Sınavı Tamamlandı!</h2>
            <p className="lab-done__txt">
              <bdi dir="ltr">{sceneTitle}</bdi> modelindeki tüm kritik uzamsal noktaları başarıyla incelediniz.
            </p>

            <div className="ky-well lab-done__stats">
              <div>
                <div className="ky-mono lab-done__num lab-done__num--ok">
                  {quizState.correctCount} / {quizState.totalQuestions}
                </div>
                <div className="lab-done__lbl">Doğru İğne</div>
              </div>
              <div>
                <div className="ky-mono lab-done__num lab-done__num--gold">+{quizState.earnedXp} XP</div>
                <div className="lab-done__lbl">Kazanılan Deneyim</div>
              </div>
            </div>

            <div className="lab-done__actions">
              <button
                type="button"
                className="ky-btn ky-btn--primary ky-btn--block"
                data-sfx="start"
                onClick={() => initQuizForScene(currentScene)}
              >
                Tekrar Çöz
              </button>
              <button type="button" className="ky-btn ky-btn--quiet ky-btn--block" onClick={() => handleToggleMode('explore')}>
                Modeli Keşfetmeye Dön
              </button>
              {onOpenUnitExam && (
                <button
                  type="button"
                  className="ky-btn ky-btn--ok ky-btn--block"
                  onClick={() => onOpenUnitExam(currentScene.unitId)}
                >
                  <FileCheck2 size={16} aria-hidden="true" />
                  <span>Bu Ünitenin Deneme Sınavına Git</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Scene selection modal */}
      {isSceneModalOpen && (
        <div
          className="ky-modal-backdrop"
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeSceneModal();
          }}
        >
          <div className="ky-sheet lab-sheet lab-scenes ky-pop" role="dialog" aria-modal="true" aria-labelledby="lab-scenes-title">
            <div className="lab-scenes__head">
              <div className="lab-scenes__txt">
                <h2 id="lab-scenes-title" className="lab-scenes__title">3D Molekül & Laboratuvar Modelleri</h2>
                <p className="lab-scenes__sub">Tüm 24 üniteyi kapsayan 32 prosedürel 3D kimya sahnesi</p>
              </div>
              <button type="button" className="ky-icon-btn" onClick={closeSceneModal} aria-label="Kapat">
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="lab-scenes__filters">
              <div className="lab-search">
                <Search size={18} aria-hidden="true" className="lab-search__icon" />
                <input
                  type="search"
                  className="ky-input lab-search__input"
                  placeholder="Model adı, formül, ünite no (örn: VSEPR, NaCl, u03, Pil)..."
                  aria-label="Model ara"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="ky-scroll-x">
                {LAB_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`ky-chip ky-chip--lg${categoryFilter === cat.id ? ' on' : ''}`}
                    aria-pressed={categoryFilter === cat.id}
                    onClick={() => setCategoryFilter(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="lab-scenes__grid">
              {filteredScenes.map((s) => {
                const isSelected = s.id === currentScene.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    className={`ky-opt lab-scene-card${isSelected ? ' on' : ''}`}
                    aria-pressed={isSelected}
                    onClick={() => handleSelectScene(s)}
                  >
                    <span className="lab-scene-card__meta">
                      <span className={`lab-level lab-level--${s.badge === 'TYT' ? 'tyt' : 'ayt'}`}>
                        {s.badge} • {s.unitId.toUpperCase()}
                      </span>
                      <span className="lab-scene-card__cat">{s.category}</span>
                    </span>
                    <span className="lab-scene-card__name">
                      <bdi dir="ltr">{s.title[lang] || s.title.tr}</bdi>
                    </span>
                    <span className="lab-scene-card__sub">
                      <bdi dir="ltr">{s.subtitle[lang] || s.subtitle.tr}</bdi>
                    </span>
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
