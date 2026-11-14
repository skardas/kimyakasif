// ============================================================================
// src/components/three/proceduralBuilders.ts
// Milestone 3: 100% Procedural Offline Three.js Chemistry Scene Builders
// ============================================================================

import * as THREE from 'three';

export interface ProceduralSceneObject {
  group: THREE.Group;
  animate?: (time: number, liveSim: boolean) => void;
  setExplode?: (factor: number) => void;
  dispose?: () => void;
}

export interface OrbitCameraConstraints {
  minDistance: number;
  maxDistance: number;
  defaultDistance: number;
  fov: number;
  near: number;
  far: number;
}

export const DEFAULT_CAMERA_CONSTRAINTS: OrbitCameraConstraints = {
  minDistance: 1.5,
  maxDistance: 25.0,
  defaultDistance: 6.0,
  fov: 45,
  near: 0.1,
  far: 100.0,
};

export interface ExplodeViewConstraints {
  minFactor: number;
  maxFactor: number;
  step: number;
  defaultFactor: number;
}

export const DEFAULT_EXPLODE_CONSTRAINTS: ExplodeViewConstraints = {
  minFactor: 0.0,
  maxFactor: 1.0,
  step: 0.05,
  defaultFactor: 0.0,
};

/**
 * Clamps a requested camera distance against the scene's orbit camera constraints.
 * Prevents near-plane clipping / division by zero (< minDistance) and infinite zoom-out (> maxDistance).
 */
export function clampCameraDistance(
  distance: number,
  constraints: OrbitCameraConstraints = DEFAULT_CAMERA_CONSTRAINTS
): number {
  return Math.max(constraints.minDistance, Math.min(constraints.maxDistance, distance));
}

/**
 * Clamps an explode view factor within the valid [minFactor, maxFactor] range.
 * Prevents inverted geometry (< 0.0) and camera frustum overflow (> 1.0).
 */
export function clampExplodeFactor(
  factor: number,
  constraints: ExplodeViewConstraints = DEFAULT_EXPLODE_CONSTRAINTS
): number {
  return Math.max(constraints.minFactor, Math.min(constraints.maxFactor, factor));
}

export interface CrystalIon {
  id: string;
  type: 'Na+' | 'Cl-';
  gridPosition: [number, number, number];
  worldPosition: [number, number, number];
  radius: number;
  color: string;
}

export interface CrystalLatticeSpec {
  dimensions: [number, number, number];
  spacing: number;
  totalSites: number;
  ions: CrystalIon[];
  unitCellType: 'FCC' | 'BCC' | 'SimpleCubic';
  estimatedVerticesPerIon: number;
  maxVertexBudget: number;
}

/**
 * Cleanly disposes all geometries and materials within a Three.js Object3D.
 */
export function disposeSceneObject(obj: THREE.Object3D): void {
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (child.geometry) {
        child.geometry.dispose();
      }
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach((m) => m.dispose());
        } else {
          child.material.dispose();
        }
      }
    } else if (child instanceof THREE.Line || child instanceof THREE.LineSegments) {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) child.material.forEach((m) => m.dispose());
        else child.material.dispose();
      }
    }
  });
}

/**
 * Generates authentic FCC NaCl crystal lattice data with alternating Na+ and Cl- ions.
 */
export function generateNaclLattice(
  dimX: number = 4,
  dimY: number = 4,
  dimZ: number = 4,
  spacing: number = 1.2
): CrystalLatticeSpec {
  const ions: CrystalIon[] = [];
  const offsetX = ((dimX - 1) * spacing) / 2;
  const offsetY = ((dimY - 1) * spacing) / 2;
  const offsetZ = ((dimZ - 1) * spacing) / 2;

  for (let x = 0; x < dimX; x++) {
    for (let y = 0; y < dimY; y++) {
      for (let z = 0; z < dimZ; z++) {
        const isSodium = (x + y + z) % 2 === 0;
        const type: 'Na+' | 'Cl-' = isSodium ? 'Na+' : 'Cl-';
        ions.push({
          id: `ion-${x}-${y}-${z}`,
          type,
          gridPosition: [x, y, z],
          worldPosition: [
            Number((x * spacing - offsetX).toFixed(3)),
            Number((y * spacing - offsetY).toFixed(3)),
            Number((z * spacing - offsetZ).toFixed(3)),
          ],
          radius: isSodium ? 0.28 : 0.42,
          color: isSodium ? '#9333ea' : '#22c55e',
        });
      }
    }
  }

  return {
    dimensions: [dimX, dimY, dimZ],
    spacing,
    totalSites: ions.length,
    ions,
    unitCellType: 'FCC',
    estimatedVerticesPerIon: 289,
    maxVertexBudget: 25000,
  };
}

// ----------------------------------------------------------------------------
// Procedural Geometry Helpers
// ----------------------------------------------------------------------------

function makeAtomMesh(
  radius: number,
  color: string | number,
  isDark: boolean,
  emissive?: string | number,
  roughness = 0.25,
  metalness = 0.15,
  segments = 24
): THREE.Mesh {
  const geo = new THREE.SphereGeometry(radius, segments, segments);
  const mat = new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness,
    emissive: emissive ?? (isDark ? 0x111122 : 0x000000),
  });
  return new THREE.Mesh(geo, mat);
}

function makeBondCylinder(
  pA: THREE.Vector3,
  pB: THREE.Vector3,
  radius: number,
  color: string | number,
  isDark: boolean
): THREE.Mesh {
  const dir = new THREE.Vector3().subVectors(pB, pA);
  const len = dir.length();
  const geo = new THREE.CylinderGeometry(radius, radius, len, 16);
  const mat = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.4,
    metalness: 0.1,
    emissive: isDark ? 0x0a0a14 : 0x000000,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(pA).addScaledVector(dir, 0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  return mesh;
}

function makeGlassCylinder(
  radiusTop: number,
  radiusBottom: number,
  height: number,
  segments = 24
): THREE.Mesh {
  const geo = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments, 1, true);
  const mat = new THREE.MeshPhysicalMaterial({
    color: 0x93c5fd,
    transparent: true,
    opacity: 0.35,
    roughness: 0.1,
    transmission: 0.8,
    ior: 1.45,
    side: THREE.DoubleSide,
  });
  return new THREE.Mesh(geo, mat);
}

// ----------------------------------------------------------------------------
// 1. Fractional Distillation (u01-fractional-distillation)
// ----------------------------------------------------------------------------
export function buildFractionalDistillation(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Boiling Flask
  const flask = makeAtomMesh(0.85, isDark ? 0x38bdf8 : 0x0284c7, isDark);
  flask.position.set(0, -1.6, 0);
  (flask.material as THREE.MeshStandardMaterial).transparent = true;
  (flask.material as THREE.MeshStandardMaterial).opacity = 0.5;
  group.add(flask);

  // Vigreux Column
  const column = makeGlassCylinder(0.24, 0.24, 1.8);
  column.position.set(0, -0.4, 0);
  group.add(column);

  // Thermometer & Head
  const head = makeAtomMesh(0.22, 0xe2e8f0, isDark);
  head.position.set(0, 0.7, 0);
  const thermometer = makeBondCylinder(new THREE.Vector3(0, 0.7, 0), new THREE.Vector3(0, 1.8, 0), 0.05, 0xef4444, isDark);
  group.add(head);
  group.add(thermometer);

  // Liebig Condenser (angled downwards to right)
  const condenserStart = new THREE.Vector3(0, 0.7, 0);
  const condenserEnd = new THREE.Vector3(2.0, -0.4, 0);
  const condenser = makeBondCylinder(condenserStart, condenserEnd, 0.28, isDark ? 0x0284c7 : 0x60a5fa, isDark);
  (condenser.material as THREE.MeshStandardMaterial).transparent = true;
  (condenser.material as THREE.MeshStandardMaterial).opacity = 0.45;
  group.add(condenser);

  // Receiving Flask
  const recvFlask = makeAtomMesh(0.55, isDark ? 0x10b981 : 0x059669, isDark);
  recvFlask.position.set(2.2, -1.2, 0);
  (recvFlask.material as THREE.MeshStandardMaterial).transparent = true;
  (recvFlask.material as THREE.MeshStandardMaterial).opacity = 0.6;
  group.add(recvFlask);

  // Animated vapor bubbles
  const bubbleGeo = new THREE.SphereGeometry(0.04, 8, 8);
  const bubbleMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
  const bubbles: THREE.Mesh[] = [];
  for (let i = 0; i < 15; i++) {
    const b = new THREE.Mesh(bubbleGeo, bubbleMat);
    b.position.set((Math.random() - 0.5) * 0.2, -1.6 + Math.random() * 2.2, (Math.random() - 0.5) * 0.2);
    group.add(b);
    bubbles.push(b);
  }

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      bubbles.forEach((b, idx) => {
        b.position.y += 0.015;
        if (b.position.y > 0.7) {
          b.position.y = -1.6;
          b.position.x = (Math.random() - 0.5) * 0.2;
        }
        b.position.x += Math.sin(time * 3 + idx) * 0.002;
      });
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      column.position.y = -0.4 + factor * 0.8;
      thermometer.position.y = factor * 1.0;
      condenser.position.x = factor * 1.2;
      recvFlask.position.x = 2.2 + factor * 1.0;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 2. Rutherford Alpha Scattering (u02-rutherford-scattering)
// ----------------------------------------------------------------------------
export function buildRutherfordScattering(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Lead collimator box
  const emitterGeo = new THREE.BoxGeometry(0.7, 0.7, 0.7);
  const emitterMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8 });
  const emitter = new THREE.Mesh(emitterGeo, emitterMat);
  emitter.position.set(-2.4, 0, 0);
  group.add(emitter);

  // Thin gold foil
  const foilGeo = new THREE.BoxGeometry(0.05, 2.0, 1.8);
  const foilMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    metalness: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: 0.75,
  });
  const foil = new THREE.Mesh(foilGeo, foilMat);
  foil.position.set(0, 0, 0);
  group.add(foil);

  // Gold nucleus in center
  const nucleus = makeAtomMesh(0.18, 0xd97706, isDark, 0xf59e0b);
  nucleus.position.set(0, 0, 0);
  group.add(nucleus);

  // Circular ZnS detection screen (ring arc)
  const screenGeo = new THREE.CylinderGeometry(2.3, 2.3, 1.4, 32, 1, true, -Math.PI * 0.7, Math.PI * 1.4);
  const screenMat = new THREE.MeshStandardMaterial({
    color: 0x10b981,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.35,
    wireframe: false,
  });
  const screen = new THREE.Mesh(screenGeo, screenMat);
  group.add(screen);

  // Alpha particles
  const alphaGeo = new THREE.SphereGeometry(0.04, 8, 8);
  const alphaMat = new THREE.MeshBasicMaterial({ color: 0xf97316 });
  const alphas: { mesh: THREE.Mesh; progress: number; deflected: boolean; angle: number }[] = [];
  for (let i = 0; i < 20; i++) {
    const mesh = new THREE.Mesh(alphaGeo, alphaMat);
    const deflected = i === 0 || i === 7;
    const angle = deflected ? (Math.random() > 0.5 ? 2.2 : -2.2) : (Math.random() - 0.5) * 0.15;
    alphas.push({ mesh, progress: Math.random(), deflected, angle });
    group.add(mesh);
  }

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      alphas.forEach((a) => {
        a.progress += 0.02;
        if (a.progress > 1.0) a.progress = 0;
        const x = -2.4 + a.progress * 4.6;
        if (x < 0) {
          a.mesh.position.set(x, 0, 0);
        } else {
          // Deflection past foil
          const distPast = x;
          a.mesh.position.set(
            x * Math.cos(a.angle * 0.5),
            distPast * Math.sin(a.angle),
            distPast * Math.sin(a.angle * 0.8)
          );
        }
      });
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      emitter.position.x = -2.4 - factor * 1.2;
      screen.scale.set(1 + factor * 0.5, 1, 1 + factor * 0.5);
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 3. Bohr Hydrogen Emission (u02-bohr-hydrogen-emission)
// ----------------------------------------------------------------------------
export function buildBohrHydrogenEmission(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Nucleus: single proton
  const nucleus = makeAtomMesh(0.28, 0xef4444, isDark, 0xef4444);
  group.add(nucleus);

  // Quantized orbits n=1, 2, 3, 4
  const orbitRadii = [0.8, 1.4, 2.0, 2.6];
  orbitRadii.forEach((r, idx) => {
    const ringGeo = new THREE.RingGeometry(r - 0.015, r + 0.015, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: idx === 0 ? 0x38bdf8 : 0x64748b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);
  });

  // Orbital electron
  const electron = makeAtomMesh(0.08, 0x38bdf8, isDark, 0x38bdf8);
  group.add(electron);

  // Emitted photon packet
  const photon = makeAtomMesh(0.06, 0xa855f7, isDark, 0xc084fc);
  group.add(photon);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      const period = (time * 1.5) % (Math.PI * 2);
      // Electron orbiting
      const currentRadius = 1.4 + Math.sin(time * 2) * 0.6;
      electron.position.set(Math.cos(time * 3) * currentRadius, 0, Math.sin(time * 3) * currentRadius);

      // Emitted photon radiating outward
      const photonDist = ((time * 2.5) % 3.0) + 0.5;
      photon.position.set(photonDist * 0.8, photonDist * 0.6, 0);
      photon.scale.setScalar(1 + Math.sin(time * 10) * 0.3);
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      nucleus.scale.setScalar(1 + factor * 0.6);
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 4. NaCl FCC Crystal Lattice (u03-nacl-crystal-lattice / scene-nacl-crystal)
// ----------------------------------------------------------------------------
export function buildNaclCrystalLattice(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();
  const spec = generateNaclLattice(4, 4, 4, 1.2);

  const ionMeshes: { mesh: THREE.Mesh; basePos: THREE.Vector3 }[] = [];
  spec.ions.forEach((ion) => {
    const isNa = ion.type === 'Na+';
    const mesh = makeAtomMesh(
      ion.radius,
      isNa ? 0x9333ea : 0x22c55e,
      isDark,
      isNa ? (isDark ? 0x581c87 : 0x000000) : (isDark ? 0x14532d : 0x000000),
      0.25,
      0.15,
      16
    );
    const basePos = new THREE.Vector3(...ion.worldPosition);
    mesh.position.copy(basePos);
    group.add(mesh);
    ionMeshes.push({ mesh, basePos });
  });

  // Coordination lines between nearest neighbors
  const lineMat = new THREE.LineBasicMaterial({
    color: isDark ? 0x475569 : 0x94a3b8,
    transparent: true,
    opacity: 0.4,
  });
  const linePoints: THREE.Vector3[] = [];
  for (let i = 0; i < spec.ions.length; i++) {
    for (let j = i + 1; j < spec.ions.length; j++) {
      const p1 = new THREE.Vector3(...spec.ions[i].worldPosition);
      const p2 = new THREE.Vector3(...spec.ions[j].worldPosition);
      if (p1.distanceTo(p2) <= 1.21) {
        linePoints.push(p1, p2);
      }
    }
  }
  const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  group.add(lines);

  // Unit cell bounding box
  const boxHelper = new THREE.Box3Helper(
    new THREE.Box3(new THREE.Vector3(-1.8, -1.8, -1.8), new THREE.Vector3(1.8, 1.8, 1.8)),
    new THREE.Color(isDark ? 0x38bdf8 : 0x0284c7)
  );
  group.add(boxHelper);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      group.rotation.y = time * 0.15;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      ionMeshes.forEach(({ mesh, basePos }) => {
        mesh.position.copy(basePos).multiplyScalar(1 + factor * 1.2);
      });
      lines.visible = factor < 0.1;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 5. Water Bent VSEPR (u03-water-bent-h2o / scene-vsepr-bent)
// ----------------------------------------------------------------------------
export function buildWaterBent(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Central Oxygen (red)
  const oxygen = makeAtomMesh(0.55, 0xef4444, isDark, 0x991b1b);
  oxygen.position.set(0, 0.2, 0);
  group.add(oxygen);

  // Hydrogens (104.5 degrees apart)
  const angleHalf = (104.5 * Math.PI) / 360;
  const bondDist = 1.8;
  const h1Pos = new THREE.Vector3(bondDist * Math.sin(angleHalf), -bondDist * Math.cos(angleHalf) + 0.2, 0);
  const h2Pos = new THREE.Vector3(-bondDist * Math.sin(angleHalf), -bondDist * Math.cos(angleHalf) + 0.2, 0);

  const h1 = makeAtomMesh(0.32, 0xf1f5f9, isDark);
  h1.position.copy(h1Pos);
  group.add(h1);

  const h2 = makeAtomMesh(0.32, 0xf1f5f9, isDark);
  h2.position.copy(h2Pos);
  group.add(h2);

  // Bonds
  const bond1 = makeBondCylinder(oxygen.position, h1Pos, 0.08, 0x94a3b8, isDark);
  const bond2 = makeBondCylinder(oxygen.position, h2Pos, 0.08, 0x94a3b8, isDark);
  group.add(bond1);
  group.add(bond2);

  // 2 Lone pair lobes (out-of-plane, pointing upwards)
  const loneGeo = new THREE.SphereGeometry(0.35, 16, 16);
  loneGeo.scale(0.8, 1.4, 0.8);
  const loneMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.35,
    emissive: 0x0284c7,
  });
  const lone1 = new THREE.Mesh(loneGeo, loneMat);
  lone1.position.set(0, 1.1, 0.85);
  lone1.rotation.x = 0.5;
  group.add(lone1);

  const lone2 = new THREE.Mesh(loneGeo.clone(), loneMat);
  lone2.position.set(0, 1.1, -0.85);
  lone2.rotation.x = -0.5;
  group.add(lone2);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      // Bond angle vibration
      const vib = Math.sin(time * 6) * 0.04;
      h1.position.x = h1Pos.x + vib;
      h2.position.x = h2Pos.x - vib;
      lone1.scale.setScalar(1 + Math.sin(time * 4) * 0.05);
      lone2.scale.setScalar(1 + Math.sin(time * 4 + 1) * 0.05);
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      h1.position.copy(h1Pos).addScaledVector(h1Pos.clone().normalize(), factor * 1.5);
      h2.position.copy(h2Pos).addScaledVector(h2Pos.clone().normalize(), factor * 1.5);
      lone1.position.y = 1.1 + factor * 1.2;
      lone2.position.y = 1.1 + factor * 1.2;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 6. Liquid-Vapor Equilibrium (u04-liquid-vapor-equilibrium)
// ----------------------------------------------------------------------------
export function buildLiquidVaporEquilibrium(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Glass Chamber
  const chamber = makeGlassCylinder(1.4, 1.4, 3.0);
  group.add(chamber);

  // Liquid Phase (bottom half)
  const liquidGeo = new THREE.CylinderGeometry(1.35, 1.35, 1.2, 24);
  const liquidMat = new THREE.MeshStandardMaterial({
    color: isDark ? 0x0284c7 : 0x38bdf8,
    transparent: true,
    opacity: 0.7,
    roughness: 0.1,
  });
  const liquid = new THREE.Mesh(liquidGeo, liquidMat);
  liquid.position.set(0, -0.9, 0);
  group.add(liquid);

  // Vapor particles in upper chamber
  const partGeo = new THREE.SphereGeometry(0.06, 8, 8);
  const partMat = new THREE.MeshBasicMaterial({ color: isDark ? 0x38bdf8 : 0x0369a1 });
  const particles: { mesh: THREE.Mesh; vel: THREE.Vector3 }[] = [];
  for (let i = 0; i < 25; i++) {
    const mesh = new THREE.Mesh(partGeo, partMat);
    mesh.position.set((Math.random() - 0.5) * 2.2, 0.0 + Math.random() * 1.2, (Math.random() - 0.5) * 2.2);
    group.add(mesh);
    particles.push({
      mesh,
      vel: new THREE.Vector3((Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02),
    });
  }

  // Manometer connected to side
  const manoTube = makeGlassCylinder(0.12, 0.12, 1.8);
  manoTube.position.set(1.9, 0, 0);
  group.add(manoTube);
  const mercury = makeBondCylinder(new THREE.Vector3(1.9, -0.8, 0), new THREE.Vector3(1.9, -0.2, 0), 0.1, 0x94a3b8, isDark);
  group.add(mercury);

  return {
    group,
    animate: (_time, liveSim) => {
      if (!liveSim) return;
      particles.forEach((p) => {
        p.mesh.position.add(p.vel);
        if (Math.abs(p.mesh.position.x) > 1.2) p.vel.x *= -1;
        if (Math.abs(p.mesh.position.z) > 1.2) p.vel.z *= -1;
        if (p.mesh.position.y < -0.3 || p.mesh.position.y > 1.3) p.vel.y *= -1;
      });
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      chamber.position.y = factor * 1.2;
      manoTube.position.x = 1.9 + factor * 1.0;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 7. CO2 Linear VSEPR (u05-co2-greenhouse-linear / scene-vsepr-linear)
// ----------------------------------------------------------------------------
export function buildCo2Linear(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Carbon (center, black/gray)
  const carbon = makeAtomMesh(0.48, 0x334155, isDark, 0x1e293b);
  carbon.position.set(0, 0, 0);
  group.add(carbon);

  // 2 Oxygens (red) at 180 degrees
  const dist = 2.0;
  const o1Pos = new THREE.Vector3(dist, 0, 0);
  const o2Pos = new THREE.Vector3(-dist, 0, 0);

  const o1 = makeAtomMesh(0.46, 0xef4444, isDark, 0x991b1b);
  o1.position.copy(o1Pos);
  group.add(o1);

  const o2 = makeAtomMesh(0.46, 0xef4444, isDark, 0x991b1b);
  o2.position.copy(o2Pos);
  group.add(o2);

  // Double bonds (two parallel cylinders each side)
  const offset = 0.09;
  const b1a = makeBondCylinder(new THREE.Vector3(0, offset, 0), new THREE.Vector3(dist, offset, 0), 0.05, 0x94a3b8, isDark);
  const b1b = makeBondCylinder(new THREE.Vector3(0, -offset, 0), new THREE.Vector3(dist, -offset, 0), 0.05, 0x94a3b8, isDark);
  const b2a = makeBondCylinder(new THREE.Vector3(0, offset, 0), new THREE.Vector3(-dist, offset, 0), 0.05, 0x94a3b8, isDark);
  const b2b = makeBondCylinder(new THREE.Vector3(0, -offset, 0), new THREE.Vector3(-dist, -offset, 0), 0.05, 0x94a3b8, isDark);
  group.add(b1a, b1b, b2a, b2b);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      // Symmetrical stretching vibration
      const stretch = Math.sin(time * 8) * 0.08;
      o1.position.x = dist + stretch;
      o2.position.x = -dist - stretch;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      o1.position.x = dist + factor * 1.5;
      o2.position.x = -dist - factor * 1.5;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 8. Avogadro Mole Chamber (u06-avogadro-mole-chamber)
// ----------------------------------------------------------------------------
export function buildAvogadroChamber(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // 22.4 L cube container wireframe
  const boxHelper = new THREE.Box3Helper(
    new THREE.Box3(new THREE.Vector3(-1.6, -1.6, -1.6), new THREE.Vector3(1.6, 1.6, 1.6)),
    new THREE.Color(isDark ? 0x38bdf8 : 0x0284c7)
  );
  group.add(boxHelper);

  // Representative gas particles (diatomic molecules N2/O2)
  const particles: { p1: THREE.Mesh; p2: THREE.Mesh; vel: THREE.Vector3 }[] = [];
  const pGeo = new THREE.SphereGeometry(0.08, 8, 8);
  const pMat = new THREE.MeshStandardMaterial({ color: isDark ? 0x38bdf8 : 0x0284c7 });

  for (let i = 0; i < 20; i++) {
    const p1 = new THREE.Mesh(pGeo, pMat);
    const p2 = new THREE.Mesh(pGeo, pMat);
    const center = new THREE.Vector3((Math.random() - 0.5) * 2.8, (Math.random() - 0.5) * 2.8, (Math.random() - 0.5) * 2.8);
    p1.position.copy(center).add(new THREE.Vector3(0.06, 0, 0));
    p2.position.copy(center).add(new THREE.Vector3(-0.06, 0, 0));
    group.add(p1, p2);
    particles.push({
      p1,
      p2,
      vel: new THREE.Vector3((Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.03),
    });
  }

  return {
    group,
    animate: (_time, liveSim) => {
      if (!liveSim) return;
      particles.forEach(({ p1, p2, vel }) => {
        p1.position.add(vel);
        p2.position.add(vel);
        if (Math.abs(p1.position.x) > 1.5) vel.x *= -1;
        if (Math.abs(p1.position.y) > 1.5) vel.y *= -1;
        if (Math.abs(p1.position.z) > 1.5) vel.z *= -1;
      });
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      boxHelper.scale.setScalar(1 + factor * 0.8);
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 9. Methane Tetrahedral VSEPR (u07-methane-tetrahedral / scene-vsepr-tetrahedral)
// ----------------------------------------------------------------------------
export function buildMethaneTetrahedral(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Central Carbon (sp3)
  const carbon = makeAtomMesh(0.55, 0x334155, isDark, 0x1e293b);
  group.add(carbon);

  // 4 Hydrogens at cube corners: 109.5 degrees
  const s = 1.25;
  const hCoords: THREE.Vector3[] = [
    new THREE.Vector3(s, s, s),
    new THREE.Vector3(-s, -s, s),
    new THREE.Vector3(-s, s, -s),
    new THREE.Vector3(s, -s, -s),
  ];

  const hMeshes: THREE.Mesh[] = [];
  const bonds: THREE.Mesh[] = [];

  hCoords.forEach((pos) => {
    const h = makeAtomMesh(0.32, 0xf1f5f9, isDark);
    h.position.copy(pos);
    group.add(h);
    hMeshes.push(h);

    const b = makeBondCylinder(new THREE.Vector3(0, 0, 0), pos, 0.08, 0x94a3b8, isDark);
    group.add(b);
    bonds.push(b);
  });

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      group.rotation.y = time * 0.2;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      hCoords.forEach((basePos, i) => {
        hMeshes[i].position.copy(basePos).multiplyScalar(1 + factor * 1.5);
      });
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 10. Separatory Funnel (u08-separatory-funnel-extraction)
// ----------------------------------------------------------------------------
export function buildSeparatoryFunnel(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Pear-shaped glass funnel (cone + cylinder)
  const coneGeo = new THREE.ConeGeometry(1.2, 2.2, 24, 1, true);
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x93c5fd,
    transparent: true,
    opacity: 0.35,
    transmission: 0.8,
    side: THREE.DoubleSide,
  });
  const cone = new THREE.Mesh(coneGeo, glassMat);
  cone.rotation.x = Math.PI;
  cone.position.set(0, 0.2, 0);
  group.add(cone);

  // Upper Organic Layer (yellow)
  const orgGeo = new THREE.CylinderGeometry(1.0, 0.7, 0.8, 24);
  const orgMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, transparent: true, opacity: 0.65 });
  const orgLayer = new THREE.Mesh(orgGeo, orgMat);
  orgLayer.position.set(0, 0.6, 0);
  group.add(orgLayer);

  // Lower Aqueous Layer (blue)
  const aqGeo = new THREE.CylinderGeometry(0.7, 0.3, 0.8, 24);
  const aqMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, transparent: true, opacity: 0.7 });
  const aqLayer = new THREE.Mesh(aqGeo, aqMat);
  aqLayer.position.set(0, -0.2, 0);
  group.add(aqLayer);

  // Stopcock (musluk) at bottom
  const stopcock = makeBondCylinder(new THREE.Vector3(-0.4, -1.2, 0), new THREE.Vector3(0.4, -1.2, 0), 0.08, 0xef4444, isDark);
  group.add(stopcock);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      orgLayer.position.y = 0.6 + Math.sin(time * 2) * 0.02;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      orgLayer.position.y = 0.6 + factor * 1.0;
      aqLayer.position.y = -0.2 - factor * 0.8;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 11. Ammonia Trigonal Pyramidal (u09-ammonia-trigonal-pyramidal / scene-vsepr-pyramidal)
// ----------------------------------------------------------------------------
export function buildAmmoniaPyramidal(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Central Nitrogen (blue)
  const nitrogen = makeAtomMesh(0.52, 0x3b82f6, isDark, 0x1d4ed8);
  nitrogen.position.set(0, 0.35, 0);
  group.add(nitrogen);

  // 3 Hydrogens at 107.3 degrees
  const hCoords: THREE.Vector3[] = [
    new THREE.Vector3(0, -0.65, 1.9),
    new THREE.Vector3(1.645, -0.65, -0.95),
    new THREE.Vector3(-1.645, -0.65, -0.95),
  ];

  const hMeshes: THREE.Mesh[] = [];
  hCoords.forEach((pos) => {
    const h = makeAtomMesh(0.32, 0xf1f5f9, isDark);
    h.position.copy(pos);
    group.add(h);
    hMeshes.push(h);

    const b = makeBondCylinder(nitrogen.position, pos, 0.08, 0x94a3b8, isDark);
    group.add(b);
  });

  // Top Lone Pair Lobe (yellow/cyan translucent teardrop)
  const loneGeo = new THREE.SphereGeometry(0.38, 16, 16);
  loneGeo.scale(0.8, 1.5, 0.8);
  const loneMat = new THREE.MeshStandardMaterial({
    color: 0xfacc15,
    transparent: true,
    opacity: 0.4,
    emissive: 0xca8a04,
  });
  const lone = new THREE.Mesh(loneGeo, loneMat);
  lone.position.set(0, 1.35, 0);
  group.add(lone);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      lone.scale.setScalar(1 + Math.sin(time * 5) * 0.06);
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      hCoords.forEach((p, idx) => {
        hMeshes[idx].position.copy(p).addScaledVector(p.clone().normalize(), factor * 1.5);
      });
      lone.position.y = 1.35 + factor * 1.2;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 12. Soap Micelle (u10-soap-micelle-emulsion)
// ----------------------------------------------------------------------------
export function buildSoapMicelle(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Central grease/oil droplet (yellow/amber)
  const dirt = makeAtomMesh(0.8, 0xd97706, isDark, 0xb45309);
  group.add(dirt);

  // Radial soap molecules (hydrocarbon tail inward, polar head outward)
  const count = 24;
  const tails: THREE.Mesh[] = [];
  const heads: THREE.Mesh[] = [];

  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;

    const dir = new THREE.Vector3(
      Math.cos(theta) * Math.sin(phi),
      Math.sin(theta) * Math.sin(phi),
      Math.cos(phi)
    );

    const innerPos = dir.clone().multiplyScalar(0.85);
    const outerPos = dir.clone().multiplyScalar(2.1);

    const tail = makeBondCylinder(innerPos, outerPos, 0.04, 0x64748b, isDark);
    const head = makeAtomMesh(0.18, 0x0284c7, isDark, 0x0284c7);
    head.position.copy(outerPos);

    group.add(tail, head);
    tails.push(tail);
    heads.push(head);
  }

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      group.rotation.y = time * 0.15;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      heads.forEach((h, idx) => {
        const phi = Math.acos(-1 + (2 * idx) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        const dir = new THREE.Vector3(Math.cos(theta) * Math.sin(phi), Math.sin(theta) * Math.sin(phi), Math.cos(phi));
        h.position.copy(dir.multiplyScalar(2.1 + factor * 1.5));
      });
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 13. Quantum Orbitals s & p (u11-quantum-orbitals-sp)
// ----------------------------------------------------------------------------
export function buildQuantumOrbitals(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // s orbital: translucent sphere
  const sGeo = new THREE.SphereGeometry(1.2, 32, 32);
  const sMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.25,
    roughness: 0.2,
  });
  const sOrb = new THREE.Mesh(sGeo, sMat);
  sOrb.position.set(-1.8, 0, 0);
  group.add(sOrb);

  // p_z orbital: two teardrop lobes with nodal plane
  const pGroup = new THREE.Group();
  pGroup.position.set(1.8, 0, 0);

  const lobeGeo = new THREE.SphereGeometry(0.75, 24, 24);
  lobeGeo.scale(0.8, 1.4, 0.8);

  // Positive lobe (+z / +y) - Cyan
  const posMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.7 });
  const posLobe = new THREE.Mesh(lobeGeo, posMat);
  posLobe.position.set(0, 0.85, 0);
  pGroup.add(posLobe);

  // Negative lobe (-z / -y) - Orange
  const negMat = new THREE.MeshStandardMaterial({ color: 0xf97316, transparent: true, opacity: 0.7 });
  const negLobe = new THREE.Mesh(lobeGeo.clone(), negMat);
  negLobe.position.set(0, -0.85, 0);
  pGroup.add(negLobe);

  // Nodal plane (flat disk at y=0)
  const nodeGeo = new THREE.RingGeometry(0, 1.4, 32);
  const nodeMat = new THREE.MeshBasicMaterial({ color: 0x94a3b8, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
  const nodalPlane = new THREE.Mesh(nodeGeo, nodeMat);
  nodalPlane.rotation.x = Math.PI / 2;
  pGroup.add(nodalPlane);

  group.add(pGroup);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      sOrb.scale.setScalar(1 + Math.sin(time * 3) * 0.05);
      pGroup.rotation.y = time * 0.3;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      sOrb.position.x = -1.8 - factor * 1.0;
      pGroup.position.x = 1.8 + factor * 1.0;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 14. Ideal Gas Cylinder & Piston (u12-ideal-gas-cylinder-piston)
// ----------------------------------------------------------------------------
export function buildGasPistonCylinder(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Glass cylinder
  const cyl = makeGlassCylinder(1.4, 1.4, 3.2);
  group.add(cyl);

  // Movable metal piston head
  const pistonGeo = new THREE.CylinderGeometry(1.36, 1.36, 0.25, 24);
  const pistonMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8, roughness: 0.2 });
  const piston = new THREE.Mesh(pistonGeo, pistonMat);
  piston.position.set(0, 0.8, 0);
  group.add(piston);

  // Piston rod
  const rod = makeBondCylinder(new THREE.Vector3(0, 0.8, 0), new THREE.Vector3(0, 2.4, 0), 0.12, 0x64748b, isDark);
  group.add(rod);

  // Gas particles bouncing
  const pGeo = new THREE.SphereGeometry(0.06, 8, 8);
  const pMat = new THREE.MeshBasicMaterial({ color: isDark ? 0x38bdf8 : 0x0284c7 });
  const particles: { mesh: THREE.Mesh; vel: THREE.Vector3 }[] = [];

  for (let i = 0; i < 30; i++) {
    const mesh = new THREE.Mesh(pGeo, pMat);
    mesh.position.set((Math.random() - 0.5) * 2.2, -1.2 + Math.random() * 1.8, (Math.random() - 0.5) * 2.2);
    group.add(mesh);
    particles.push({
      mesh,
      vel: new THREE.Vector3((Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.03),
    });
  }

  return {
    group,
    animate: (_time, liveSim) => {
      if (!liveSim) return;
      particles.forEach((p) => {
        p.mesh.position.add(p.vel);
        if (Math.abs(p.mesh.position.x) > 1.2) p.vel.x *= -1;
        if (Math.abs(p.mesh.position.z) > 1.2) p.vel.z *= -1;
        if (p.mesh.position.y < -1.5 || p.mesh.position.y > piston.position.y - 0.15) p.vel.y *= -1;
      });
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      piston.position.y = 0.8 + factor * 1.2;
      rod.position.y = factor * 1.2;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 15. Graham Gas Diffusion Tube (u12-graham-diffusion-tube)
// ----------------------------------------------------------------------------
export function buildGrahamDiffusionTube(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Horizontal glass tube
  const tube = makeGlassCylinder(0.4, 0.4, 4.4);
  tube.rotation.z = Math.PI / 2;
  group.add(tube);

  // NH3 cotton plug (left, M=17)
  const nh3Plug = makeAtomMesh(0.38, 0x38bdf8, isDark);
  nh3Plug.position.set(-2.1, 0, 0);
  group.add(nh3Plug);

  // HCl cotton plug (right, M=36.5)
  const hclPlug = makeAtomMesh(0.38, 0xef4444, isDark);
  hclPlug.position.set(2.1, 0, 0);
  group.add(hclPlug);

  // White NH4Cl ring formed at x ≈ +0.7 (closer to heavier HCl)
  const ringGeo = new THREE.TorusGeometry(0.36, 0.08, 16, 32);
  const ringMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, emissive: 0x475569 });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.position.set(0.7, 0, 0);
  ring.rotation.y = Math.PI / 2;
  group.add(ring);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      ring.scale.setScalar(1 + Math.sin(time * 3) * 0.05);
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      nh3Plug.position.x = -2.1 - factor * 1.2;
      hclPlug.position.x = 2.1 + factor * 1.2;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 16. Joule-Thomson Real Gas Expansion (u13-joule-thomson-real-gas)
// ----------------------------------------------------------------------------
export function buildJouleThomsonApparatus(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Insulated horizontal cylinder
  const pipe = makeGlassCylinder(0.9, 0.9, 3.6);
  pipe.rotation.z = Math.PI / 2;
  group.add(pipe);

  // Porous throttling plug at center
  const plugGeo = new THREE.CylinderGeometry(0.88, 0.88, 0.4, 24);
  const plugMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.8 });
  const plug = new THREE.Mesh(plugGeo, plugMat);
  plug.rotation.z = Math.PI / 2;
  group.add(plug);

  // High pressure gas (left, dense red particles)
  // Low pressure cooled gas (right, dispersed blue particles)
  const particles: THREE.Mesh[] = [];
  const pGeo = new THREE.SphereGeometry(0.06, 8, 8);

  for (let i = 0; i < 20; i++) {
    const leftP = new THREE.Mesh(pGeo, new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    leftP.position.set(-1.4 + Math.random() * 1.0, (Math.random() - 0.5) * 1.2, (Math.random() - 0.5) * 1.2);
    group.add(leftP);
    particles.push(leftP);

    const rightP = new THREE.Mesh(pGeo, new THREE.MeshBasicMaterial({ color: 0x38bdf8 }));
    rightP.position.set(0.4 + Math.random() * 1.2, (Math.random() - 0.5) * 1.4, (Math.random() - 0.5) * 1.4);
    group.add(rightP);
    particles.push(rightP);
  }

  return {
    group,
    animate: (_time, liveSim) => {
      if (!liveSim) return;
      particles.forEach((p) => {
        p.position.x += 0.015;
        if (p.position.x > 1.7) p.position.x = -1.7;
      });
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      plug.scale.set(1 + factor * 0.5, 1, 1 + factor * 0.5);
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 17. Ion-Dipole Hydration Shell (u14-ion-dipole-hydration-shell)
// ----------------------------------------------------------------------------
export function buildIonDipoleHydration(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Central Na+ Cation (purple, small)
  const na = makeAtomMesh(0.42, 0x9333ea, isDark, 0x7e22ce);
  na.position.set(-1.8, 0, 0);
  group.add(na);

  // 6 Orienting H2O molecules around Na+ (O inward, H outward)
  const r = 1.4;
  const dirs = [
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, -1, 0),
    new THREE.Vector3(0, 0, 1),
    new THREE.Vector3(0, 0, -1),
  ];

  dirs.forEach((d) => {
    const oPos = na.position.clone().addScaledVector(d, r);
    const o = makeAtomMesh(0.24, 0xef4444, isDark);
    o.position.copy(oPos);
    group.add(o);
  });

  // Central Cl- Anion (green, large)
  const cl = makeAtomMesh(0.62, 0x22c55e, isDark, 0x15803d);
  cl.position.set(1.8, 0, 0);
  group.add(cl);

  // 6 Orienting H2O molecules around Cl- (H inward, O outward)
  dirs.forEach((d) => {
    const oPos = cl.position.clone().addScaledVector(d, r + 0.3);
    const o = makeAtomMesh(0.24, 0xef4444, isDark);
    o.position.copy(oPos);
    group.add(o);
  });

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      group.rotation.y = time * 0.2;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      na.position.x = -1.8 - factor * 1.2;
      cl.position.x = 1.8 + factor * 1.2;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 18. Solution Concentration Volumetric Flask (u14-solution-concentration-flask)
// ----------------------------------------------------------------------------
export function buildVolumetricFlask(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Glass volumetric flask base sphere + narrow neck
  const body = makeGlassCylinder(0.3, 1.2, 2.0);
  body.position.set(0, -0.6, 0);
  group.add(body);

  const neck = makeGlassCylinder(0.3, 0.3, 1.8);
  neck.position.set(0, 1.0, 0);
  group.add(neck);

  // Solution fill (colored copper sulfate blue)
  const solGeo = new THREE.CylinderGeometry(0.28, 1.15, 1.8, 24);
  const solMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, transparent: true, opacity: 0.65 });
  const sol = new THREE.Mesh(solGeo, solMat);
  sol.position.set(0, -0.7, 0);
  group.add(sol);

  // Meniscus ring line
  const ringGeo = new THREE.RingGeometry(0.29, 0.32, 32);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 2;
  ring.position.set(0, 0.8, 0);
  group.add(ring);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      sol.scale.y = 1 + Math.sin(time * 3) * 0.02;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      neck.position.y = 1.0 + factor * 1.0;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 19. Osmotic Pressure U-Tube (u15-osmotic-pressure-u-tube)
// ----------------------------------------------------------------------------
export function buildOsmoticUTube(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // U-tube path
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-1.2, 1.6, 0),
    new THREE.Vector3(-1.2, -1.2, 0),
    new THREE.Vector3(0, -1.6, 0),
    new THREE.Vector3(1.2, -1.2, 0),
    new THREE.Vector3(1.2, 1.6, 0),
  ]);
  const tubeGeo = new THREE.TubeGeometry(curve, 48, 0.32, 16, false);
  const tubeMat = new THREE.MeshPhysicalMaterial({
    color: 0x93c5fd,
    transparent: true,
    opacity: 0.35,
    transmission: 0.8,
  });
  const uTube = new THREE.Mesh(tubeGeo, tubeMat);
  group.add(uTube);

  // Semi-permeable membrane at bottom center
  const memGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 16);
  const memMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.5 });
  const membrane = new THREE.Mesh(memGeo, memMat);
  membrane.position.set(0, -1.6, 0);
  group.add(membrane);

  // Left arm pure water (lower level)
  const leftCol = makeBondCylinder(new THREE.Vector3(-1.2, -1.4, 0), new THREE.Vector3(-1.2, 0.2, 0), 0.28, 0x38bdf8, isDark);
  (leftCol.material as THREE.MeshStandardMaterial).transparent = true;
  (leftCol.material as THREE.MeshStandardMaterial).opacity = 0.7;
  group.add(leftCol);

  // Right arm solution (higher level due to osmotic pressure)
  const rightCol = makeBondCylinder(new THREE.Vector3(1.2, -1.4, 0), new THREE.Vector3(1.2, 1.2, 0), 0.28, 0x0284c7, isDark);
  (rightCol.material as THREE.MeshStandardMaterial).transparent = true;
  (rightCol.material as THREE.MeshStandardMaterial).opacity = 0.7;
  group.add(rightCol);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      rightCol.scale.y = 1 + Math.sin(time * 2) * 0.03;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      membrane.position.y = -1.6 - factor * 0.8;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 20. Bomb Calorimeter (u16-bomb-calorimeter-enthalpy)
// ----------------------------------------------------------------------------
export function buildBombCalorimeter(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Outer water jacket bucket
  const outer = makeGlassCylinder(1.6, 1.6, 2.6);
  group.add(outer);

  // Inner steel bomb cylinder
  const bombGeo = new THREE.CylinderGeometry(0.7, 0.7, 1.4, 24);
  const bombMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.85, roughness: 0.15 });
  const bomb = new THREE.Mesh(bombGeo, bombMat);
  bomb.position.set(0, -0.3, 0);
  group.add(bomb);

  // Ignition wires
  const wire1 = makeBondCylinder(new THREE.Vector3(-0.2, 0.4, 0), new THREE.Vector3(-0.2, 1.6, 0), 0.03, 0xef4444, isDark);
  const wire2 = makeBondCylinder(new THREE.Vector3(0.2, 0.4, 0), new THREE.Vector3(0.2, 1.6, 0), 0.03, 0x3b82f6, isDark);
  group.add(wire1, wire2);

  // Thermometer & Stirrer
  const stirrer = makeBondCylinder(new THREE.Vector3(1.1, -1.0, 0), new THREE.Vector3(1.1, 1.8, 0), 0.04, 0x94a3b8, isDark);
  group.add(stirrer);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      stirrer.rotation.y = time * 8;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      bomb.position.y = -0.3 + factor * 1.0;
      outer.position.y = -factor * 0.8;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 21. Activated Complex Transition State (u17-activated-complex-transition)
// ----------------------------------------------------------------------------
export function buildActivatedComplex(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Potential energy curve 3D path
  const curvePoints: THREE.Vector3[] = [];
  for (let x = -2.5; x <= 2.5; x += 0.2) {
    const y = Math.exp(-x * x * 1.2) * 2.2 - 0.8;
    curvePoints.push(new THREE.Vector3(x, y, 0));
  }
  const curve = new THREE.CatmullRomCurve3(curvePoints);
  const pathGeo = new THREE.TubeGeometry(curve, 48, 0.08, 12, false);
  const pathMat = new THREE.MeshStandardMaterial({ color: isDark ? 0x38bdf8 : 0x0284c7, emissive: 0x0284c7 });
  const path = new THREE.Mesh(pathGeo, pathMat);
  group.add(path);

  // Activated complex at peak (x=0, y=1.4)
  // Two colliding atoms with elongated dashed bond
  const atomA = makeAtomMesh(0.38, 0xef4444, isDark, 0x991b1b);
  atomA.position.set(-0.55, 1.4, 0);
  const atomB = makeAtomMesh(0.38, 0x3b82f6, isDark, 0x1d4ed8);
  atomB.position.set(0.55, 1.4, 0);
  group.add(atomA, atomB);

  // Transition bond
  const transBond = makeBondCylinder(atomA.position, atomB.position, 0.04, 0xfacc15, isDark);
  group.add(transBond);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      const pulse = Math.sin(time * 6) * 0.08;
      atomA.position.x = -0.55 - pulse;
      atomB.position.x = 0.55 + pulse;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      atomA.position.x = -0.55 - factor * 1.0;
      atomB.position.x = 0.55 + factor * 1.0;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 22. Catalytic Surface Reaction (u17-catalytic-surface-reaction)
// ----------------------------------------------------------------------------
export function buildCatalyticSurface(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Solid catalyst slab (Pt/Pd metal grid)
  const slabGeo = new THREE.BoxGeometry(3.6, 0.4, 2.4);
  const slabMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.9, roughness: 0.1 });
  const slab = new THREE.Mesh(slabGeo, slabMat);
  slab.position.set(0, -1.0, 0);
  group.add(slab);

  // Adsorption active sites (small metallic pins)
  for (let x = -1.4; x <= 1.4; x += 0.7) {
    for (let z = -0.8; z <= 0.8; z += 0.8) {
      const pin = makeAtomMesh(0.12, 0x94a3b8, isDark);
      pin.position.set(x, -0.75, z);
      group.add(pin);
    }
  }

  // Reactant molecules adsorbing and reacting
  const mol1 = makeAtomMesh(0.28, 0xef4444, isDark);
  mol1.position.set(-0.7, -0.4, 0);
  const mol2 = makeAtomMesh(0.28, 0x3b82f6, isDark);
  mol2.position.set(0.7, -0.4, 0);
  group.add(mol1, mol2);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      mol1.position.y = -0.4 + Math.sin(time * 3) * 0.1;
      mol2.position.y = -0.4 + Math.cos(time * 3) * 0.1;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      mol1.position.y = -0.4 + factor * 1.2;
      mol2.position.y = -0.4 + factor * 1.2;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 23. Le Chatelier Equilibrium Chamber (u18-le-chatelier-equilibrium)
// ----------------------------------------------------------------------------
export function buildLeChatelierChamber(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  const cyl = makeGlassCylinder(1.3, 1.3, 3.0);
  group.add(cyl);

  const pistonGeo = new THREE.CylinderGeometry(1.26, 1.26, 0.2, 24);
  const piston = new THREE.Mesh(pistonGeo, new THREE.MeshStandardMaterial({ color: 0x475569 }));
  piston.position.set(0, 0.9, 0);
  group.add(piston);

  // N2O4 (colorless, 2 larger spheres bonded) and NO2 (brown/orange single spheres)
  const particles: THREE.Mesh[] = [];
  const brownMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.3 });
  const clearMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, transparent: true, opacity: 0.4 });

  for (let i = 0; i < 20; i++) {
    const isNo2 = i % 2 === 0;
    const p = makeAtomMesh(isNo2 ? 0.14 : 0.24, isNo2 ? 0xd97706 : 0xe2e8f0, isDark);
    p.position.set((Math.random() - 0.5) * 2.0, -1.2 + Math.random() * 1.8, (Math.random() - 0.5) * 2.0);
    group.add(p);
    particles.push(p);
  }

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      piston.position.y = 0.9 + Math.sin(time * 1.5) * 0.3;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      piston.position.y = 0.9 + factor * 1.2;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 24. Precision Titration Burette (u19-titration-burette-ph-curve)
// ----------------------------------------------------------------------------
export function buildTitrationBurette(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Vertical graduated glass burette
  const burette = makeGlassCylinder(0.2, 0.2, 3.2);
  burette.position.set(0, 1.0, 0);
  group.add(burette);

  // Titrant liquid column inside (NaOH)
  const titrant = makeBondCylinder(new THREE.Vector3(0, -0.4, 0), new THREE.Vector3(0, 2.2, 0), 0.17, 0x38bdf8, isDark);
  (titrant.material as THREE.MeshStandardMaterial).transparent = true;
  (titrant.material as THREE.MeshStandardMaterial).opacity = 0.6;
  group.add(titrant);

  // Stopcock at tip
  const stopcock = makeBondCylinder(new THREE.Vector3(-0.3, -0.6, 0), new THREE.Vector3(0.3, -0.6, 0), 0.05, 0xef4444, isDark);
  group.add(stopcock);

  // Erlenmeyer receiving flask below
  const flaskGeo = new THREE.ConeGeometry(1.0, 1.4, 24, 1, true);
  const flaskMat = new THREE.MeshPhysicalMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.4, transmission: 0.8 });
  const flask = new THREE.Mesh(flaskGeo, flaskMat);
  flask.position.set(0, -1.8, 0);
  group.add(flask);

  // Solution in flask (phenolphthalein pink at equivalence point)
  const solGeo = new THREE.CylinderGeometry(0.85, 0.95, 0.4, 24);
  const solMat = new THREE.MeshStandardMaterial({ color: 0xec4899, transparent: true, opacity: 0.75 });
  const sol = new THREE.Mesh(solGeo, solMat);
  sol.position.set(0, -2.1, 0);
  group.add(sol);

  // Animated falling drop
  const drop = makeAtomMesh(0.06, 0x38bdf8, isDark);
  drop.position.set(0, -0.8, 0);
  group.add(drop);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      drop.position.y -= 0.03;
      if (drop.position.y < -1.9) drop.position.y = -0.8;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      burette.position.y = 1.0 + factor * 1.0;
      flask.position.y = -1.8 - factor * 0.8;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 25. Precipitation Ksp Crystal (u20-precipitation-ksp-lattice)
// ----------------------------------------------------------------------------
export function buildPrecipitationLattice(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Glass beaker
  const beaker = makeGlassCylinder(1.4, 1.4, 2.6);
  group.add(beaker);

  // Saturated solution
  const sol = makeBondCylinder(new THREE.Vector3(0, -1.2, 0), new THREE.Vector3(0, 0.4, 0), 1.35, 0x38bdf8, isDark);
  (sol.material as THREE.MeshStandardMaterial).transparent = true;
  (sol.material as THREE.MeshStandardMaterial).opacity = 0.45;
  group.add(sol);

  // AgCl precipitate crystals settling at bottom
  const pGroup = new THREE.Group();
  pGroup.position.set(0, -1.1, 0);
  for (let i = 0; i < 16; i++) {
    const c = makeAtomMesh(0.12, 0xffffff, isDark, 0x94a3b8);
    c.position.set((Math.random() - 0.5) * 1.4, Math.random() * 0.3, (Math.random() - 0.5) * 1.4);
    pGroup.add(c);
  }
  group.add(pGroup);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      pGroup.rotation.y = time * 0.1;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      pGroup.position.y = -1.1 - factor * 0.8;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 26. Daniell Galvanic Cell (u21-daniell-galvanic-cell / scene-daniell-cell)
// ----------------------------------------------------------------------------
export function buildDaniellGalvanicCell(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Left Beaker: Zinc Half-Cell
  const leftBeaker = makeGlassCylinder(1.0, 1.0, 2.2);
  leftBeaker.position.set(-1.6, -0.4, 0);
  group.add(leftBeaker);

  const leftSol = makeBondCylinder(new THREE.Vector3(-1.6, -1.4, 0), new THREE.Vector3(-1.6, 0.3, 0), 0.95, 0xe2e8f0, isDark);
  (leftSol.material as THREE.MeshStandardMaterial).transparent = true;
  (leftSol.material as THREE.MeshStandardMaterial).opacity = 0.4;
  group.add(leftSol);

  // Zn Anode Plate (silver/grey metallic)
  const znGeo = new THREE.BoxGeometry(0.25, 2.2, 0.7);
  const znMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 });
  const zn = new THREE.Mesh(znGeo, znMat);
  zn.position.set(-1.6, 0.2, 0);
  group.add(zn);

  // Right Beaker: Copper Half-Cell
  const rightBeaker = makeGlassCylinder(1.0, 1.0, 2.2);
  rightBeaker.position.set(1.6, -0.4, 0);
  group.add(rightBeaker);

  const rightSol = makeBondCylinder(new THREE.Vector3(1.6, -1.4, 0), new THREE.Vector3(1.6, 0.3, 0), 0.95, 0x0284c7, isDark);
  (rightSol.material as THREE.MeshStandardMaterial).transparent = true;
  (rightSol.material as THREE.MeshStandardMaterial).opacity = 0.65;
  group.add(rightSol);

  // Cu Cathode Plate (copper orange metallic)
  const cuGeo = new THREE.BoxGeometry(0.25, 2.2, 0.7);
  const cuMat = new THREE.MeshStandardMaterial({ color: 0xea580c, metalness: 0.9, roughness: 0.2 });
  const cu = new THREE.Mesh(cuGeo, cuMat);
  cu.position.set(1.6, 0.2, 0);
  group.add(cu);

  // Salt Bridge: Inverted U-tube
  const bridgeCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-1.2, 0.0, 0),
    new THREE.Vector3(-1.2, 1.2, 0),
    new THREE.Vector3(0, 1.5, 0),
    new THREE.Vector3(1.2, 1.2, 0),
    new THREE.Vector3(1.2, 0.0, 0),
  ]);
  const bridgeGeo = new THREE.TubeGeometry(bridgeCurve, 32, 0.18, 16, false);
  const bridgeMat = new THREE.MeshPhysicalMaterial({ color: 0xf1f5f9, transparent: true, opacity: 0.5, roughness: 0.1 });
  const bridge = new THREE.Mesh(bridgeGeo, bridgeMat);
  group.add(bridge);

  // External wire with Voltmeter
  const wireCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-1.6, 1.3, 0),
    new THREE.Vector3(-0.8, 2.2, 0),
    new THREE.Vector3(0, 2.4, 0),
    new THREE.Vector3(0.8, 2.2, 0),
    new THREE.Vector3(1.6, 1.3, 0),
  ]);
  const wireGeo = new THREE.TubeGeometry(wireCurve, 32, 0.04, 8, false);
  const wireMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.8 });
  const wire = new THREE.Mesh(wireGeo, wireMat);
  group.add(wire);

  // Voltmeter box at top
  const vmGeo = new THREE.BoxGeometry(0.6, 0.4, 0.3);
  const vmMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.6 });
  const vm = new THREE.Mesh(vmGeo, vmMat);
  vm.position.set(0, 2.4, 0);
  group.add(vm);

  // Flowing electron particles
  const eGeo = new THREE.SphereGeometry(0.06, 8, 8);
  const eMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
  const electrons: THREE.Mesh[] = [];
  for (let i = 0; i < 8; i++) {
    const e = new THREE.Mesh(eGeo, eMat);
    group.add(e);
    electrons.push(e);
  }

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      electrons.forEach((e, idx) => {
        const u = ((time * 0.4 + idx / 8) % 1.0);
        const p = wireCurve.getPoint(u);
        e.position.copy(p);
      });
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      leftBeaker.position.x = -1.6 - factor * 1.2;
      rightBeaker.position.x = 1.6 + factor * 1.2;
      bridge.position.y = factor * 1.0;
      vm.position.y = 2.4 + factor * 0.8;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 27. Zinc Concentration Cell (u21-zinc-concentration-cell)
// ----------------------------------------------------------------------------
export function buildConcentrationCell(isDark: boolean): ProceduralSceneObject {
  // Similar to Daniell cell but both electrodes are Zinc with different solution molarity
  const cell = buildDaniellGalvanicCell(isDark);
  return cell;
}

// ----------------------------------------------------------------------------
// 28. Hoffman Electrolysis Voltammeter (u22-hoffman-electrolysis)
// ----------------------------------------------------------------------------
export function buildHoffmanElectrolysis(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // 3 vertical tubes connected at bottom
  const tubeMat = new THREE.MeshPhysicalMaterial({ color: 0x93c5fd, transparent: true, opacity: 0.35, transmission: 0.8 });

  // Left tube (Cathode: 2V H2 gas)
  const leftTube = makeGlassCylinder(0.25, 0.25, 3.4);
  leftTube.position.set(-1.0, 0, 0);
  group.add(leftTube);

  // Center tube (Water reservoir)
  const centerTube = makeGlassCylinder(0.35, 0.35, 3.8);
  centerTube.position.set(0, 0.2, 0);
  group.add(centerTube);

  // Right tube (Anode: 1V O2 gas)
  const rightTube = makeGlassCylinder(0.25, 0.25, 3.4);
  rightTube.position.set(1.0, 0, 0);
  group.add(rightTube);

  // Base connecting horizontal tube
  const baseTube = makeBondCylinder(new THREE.Vector3(-1.0, -1.6, 0), new THREE.Vector3(1.0, -1.6, 0), 0.2, 0x93c5fd, isDark);
  (baseTube.material as THREE.MeshStandardMaterial).transparent = true;
  (baseTube.material as THREE.MeshStandardMaterial).opacity = 0.4;
  group.add(baseTube);

  // Liquid columns: Left is pushed down further (2V gas), Right has 1V gas
  const leftLiquid = makeBondCylinder(new THREE.Vector3(-1.0, -1.6, 0), new THREE.Vector3(-1.0, 0.2, 0), 0.23, 0x38bdf8, isDark);
  const rightLiquid = makeBondCylinder(new THREE.Vector3(1.0, -1.6, 0), new THREE.Vector3(1.0, 0.9, 0), 0.23, 0x38bdf8, isDark);
  (leftLiquid.material as THREE.MeshStandardMaterial).transparent = true;
  (rightLiquid.material as THREE.MeshStandardMaterial).transparent = true;
  (leftLiquid.material as THREE.MeshStandardMaterial).opacity = 0.5;
  (rightLiquid.material as THREE.MeshStandardMaterial).opacity = 0.5;
  group.add(leftLiquid, rightLiquid);

  // Rising bubbles in cathode (2x) and anode (1x)
  const bGeo = new THREE.SphereGeometry(0.04, 8, 8);
  const bMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const bubbles: { mesh: THREE.Mesh; isCathode: boolean }[] = [];

  for (let i = 0; i < 16; i++) {
    const isCathode = i < 11;
    const b = new THREE.Mesh(bGeo, bMat);
    b.position.set(isCathode ? -1.0 : 1.0, -1.5 + Math.random() * 1.5, 0);
    group.add(b);
    bubbles.push({ mesh: b, isCathode });
  }

  return {
    group,
    animate: (_time, liveSim) => {
      if (!liveSim) return;
      bubbles.forEach(({ mesh, isCathode }) => {
        mesh.position.y += isCathode ? 0.025 : 0.015;
        const maxY = isCathode ? 0.2 : 0.9;
        if (mesh.position.y > maxY) mesh.position.y = -1.5;
      });
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      leftTube.position.x = -1.0 - factor * 0.8;
      rightTube.position.x = 1.0 + factor * 0.8;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 29. Hybrid Orbitals sp, sp2, sp3 (u23-hybrid-orbitals-sp-sp2-sp3)
// ----------------------------------------------------------------------------
export function buildHybridOrbitals(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Comparative hybrid orbital models displayed side by side
  // Left: sp (180 deg)
  const spGroup = new THREE.Group();
  spGroup.position.set(-2.2, 0, 0);
  const spLobe1 = makeAtomMesh(0.45, 0x06b6d4, isDark);
  spLobe1.scale.set(1.8, 0.7, 0.7);
  spLobe1.position.set(0.6, 0, 0);
  const spLobe2 = makeAtomMesh(0.45, 0xf97316, isDark);
  spLobe2.scale.set(1.8, 0.7, 0.7);
  spLobe2.position.set(-0.6, 0, 0);
  spGroup.add(spLobe1, spLobe2);
  group.add(spGroup);

  // Center: sp2 (120 deg trigonal)
  const sp2Group = new THREE.Group();
  sp2Group.position.set(0, 0, 0);
  for (let i = 0; i < 3; i++) {
    const angle = (i * 2 * Math.PI) / 3;
    const lobe = makeAtomMesh(0.4, 0x10b981, isDark);
    lobe.scale.set(1.6, 0.65, 0.65);
    lobe.position.set(Math.cos(angle) * 0.6, Math.sin(angle) * 0.6, 0);
    lobe.rotation.z = angle;
    sp2Group.add(lobe);
  }
  group.add(sp2Group);

  // Right: sp3 (109.5 deg tetrahedral)
  const sp3Group = new THREE.Group();
  sp3Group.position.set(2.2, 0, 0);
  const tetCorners = [
    new THREE.Vector3(0.6, 0.6, 0.6),
    new THREE.Vector3(-0.6, -0.6, 0.6),
    new THREE.Vector3(-0.6, 0.6, -0.6),
    new THREE.Vector3(0.6, -0.6, -0.6),
  ];
  tetCorners.forEach((c) => {
    const lobe = makeAtomMesh(0.35, 0xa855f7, isDark);
    lobe.position.copy(c);
    sp3Group.add(lobe);
  });
  group.add(sp3Group);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      spGroup.rotation.y = time * 0.3;
      sp2Group.rotation.z = time * 0.2;
      sp3Group.rotation.y = time * 0.25;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      spGroup.position.x = -2.2 - factor * 1.0;
      sp3Group.position.x = 2.2 + factor * 1.0;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 30. VSEPR Expanded Octets BF3, PCl5, SF6 (u23-vsepr-expanded-octets)
// ----------------------------------------------------------------------------
export function buildVseprExpandedOctets(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Octahedral SF6 (AX6) model
  const central = makeAtomMesh(0.55, 0xf59e0b, isDark, 0xd97706);
  group.add(central);

  const dist = 1.9;
  const ligands: THREE.Vector3[] = [
    new THREE.Vector3(dist, 0, 0),
    new THREE.Vector3(-dist, 0, 0),
    new THREE.Vector3(0, dist, 0),
    new THREE.Vector3(0, -dist, 0),
    new THREE.Vector3(0, 0, dist),
    new THREE.Vector3(0, 0, -dist),
  ];

  const ligMeshes: THREE.Mesh[] = [];
  ligands.forEach((pos) => {
    const lig = makeAtomMesh(0.35, 0x10b981, isDark);
    lig.position.copy(pos);
    group.add(lig);
    ligMeshes.push(lig);

    const b = makeBondCylinder(new THREE.Vector3(0, 0, 0), pos, 0.07, 0x94a3b8, isDark);
    group.add(b);
  });

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      group.rotation.x = time * 0.15;
      group.rotation.y = time * 0.2;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      ligands.forEach((p, idx) => {
        ligMeshes[idx].position.copy(p).multiplyScalar(1 + factor * 1.4);
      });
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 31. Benzene Aromatic Ring (u24-benzene-aromatic-ring / scene-benzene-resonance)
// ----------------------------------------------------------------------------
export function buildBenzeneAromaticRing(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  const rC = 2.0;
  const rH = 3.1;
  const cMeshes: THREE.Mesh[] = [];
  const hMeshes: THREE.Mesh[] = [];

  // 6 Carbons + 6 Hydrogens in planar hexagon
  for (let i = 0; i < 6; i++) {
    const angle = (i * 2 * Math.PI) / 6;
    const cPos = new THREE.Vector3(rC * Math.cos(angle), 0, rC * Math.sin(angle));
    const hPos = new THREE.Vector3(rH * Math.cos(angle), 0, rH * Math.sin(angle));

    const c = makeAtomMesh(0.42, 0x334155, isDark, 0x1e293b);
    c.position.copy(cPos);
    group.add(c);
    cMeshes.push(c);

    const h = makeAtomMesh(0.28, 0xf1f5f9, isDark);
    h.position.copy(hPos);
    group.add(h);
    hMeshes.push(h);

    // C-H bond
    const chBond = makeBondCylinder(cPos, hPos, 0.06, 0x94a3b8, isDark);
    group.add(chBond);

    // C-C ring bond
    const nextAngle = ((i + 1) * 2 * Math.PI) / 6;
    const nextPos = new THREE.Vector3(rC * Math.cos(nextAngle), 0, rC * Math.sin(nextAngle));
    const ccBond = makeBondCylinder(cPos, nextPos, 0.08, 0x64748b, isDark);
    group.add(ccBond);
  }

  // Delocalized Pi-Electron Torus Clouds (top + bottom)
  const torusGeo = new THREE.TorusGeometry(1.8, 0.38, 24, 48);
  const torusMat = new THREE.MeshStandardMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.38,
    roughness: 0.2,
    emissive: 0x0284c7,
    side: THREE.DoubleSide,
  });

  const topPi = new THREE.Mesh(torusGeo, torusMat);
  topPi.rotation.x = Math.PI / 2;
  topPi.position.set(0, 0.55, 0);
  group.add(topPi);

  const bottomPi = new THREE.Mesh(torusGeo.clone(), torusMat);
  bottomPi.rotation.x = Math.PI / 2;
  bottomPi.position.set(0, -0.55, 0);
  group.add(bottomPi);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      group.rotation.y = time * 0.15;
      topPi.scale.setScalar(1 + Math.sin(time * 3) * 0.05);
      bottomPi.scale.setScalar(1 + Math.sin(time * 3) * 0.05);
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      topPi.position.y = 0.55 + factor * 1.5;
      bottomPi.position.y = -0.55 - factor * 1.5;
      hMeshes.forEach((h, idx) => {
        const angle = (idx * 2 * Math.PI) / 6;
        h.position.set((rH + factor * 1.5) * Math.cos(angle), 0, (rH + factor * 1.5) * Math.sin(angle));
      });
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// 32. Comparative Hydrocarbons: Alkane, Alkene, Alkyne (u24-hydrocarbons-alkane-alkene-alkyne)
// ----------------------------------------------------------------------------
export function buildComparativeHydrocarbons(isDark: boolean): ProceduralSceneObject {
  const group = new THREE.Group();

  // Ethane (C2H6 - Single bond) at X = -2.4
  const ethane = new THREE.Group();
  ethane.position.set(-2.4, 0, 0);
  const c1 = makeAtomMesh(0.38, 0x334155, isDark);
  c1.position.set(-0.6, 0, 0);
  const c2 = makeAtomMesh(0.38, 0x334155, isDark);
  c2.position.set(0.6, 0, 0);
  const bSingle = makeBondCylinder(c1.position, c2.position, 0.08, 0x94a3b8, isDark);
  ethane.add(c1, c2, bSingle);
  group.add(ethane);

  // Ethene (C2H4 - Double bond) at X = 0
  const ethene = new THREE.Group();
  ethene.position.set(0, 0, 0);
  const c3 = makeAtomMesh(0.38, 0x334155, isDark);
  c3.position.set(-0.55, 0, 0);
  const c4 = makeAtomMesh(0.38, 0x334155, isDark);
  c4.position.set(0.55, 0, 0);
  const bDouble1 = makeBondCylinder(new THREE.Vector3(-0.55, 0.08, 0), new THREE.Vector3(0.55, 0.08, 0), 0.05, 0x94a3b8, isDark);
  const bDouble2 = makeBondCylinder(new THREE.Vector3(-0.55, -0.08, 0), new THREE.Vector3(0.55, -0.08, 0), 0.05, 0x94a3b8, isDark);
  ethene.add(c3, c4, bDouble1, bDouble2);
  group.add(ethene);

  // Ethyne (C2H2 - Triple bond) at X = +2.4
  const ethyne = new THREE.Group();
  ethyne.position.set(2.4, 0, 0);
  const c5 = makeAtomMesh(0.38, 0x334155, isDark);
  c5.position.set(-0.5, 0, 0);
  const c6 = makeAtomMesh(0.38, 0x334155, isDark);
  c6.position.set(0.5, 0, 0);
  const bTriple1 = makeBondCylinder(new THREE.Vector3(-0.5, 0.1, 0), new THREE.Vector3(0.5, 0.1, 0), 0.04, 0x94a3b8, isDark);
  const bTriple2 = makeBondCylinder(new THREE.Vector3(-0.5, 0, 0), new THREE.Vector3(0.5, 0, 0), 0.04, 0x94a3b8, isDark);
  const bTriple3 = makeBondCylinder(new THREE.Vector3(-0.5, -0.1, 0), new THREE.Vector3(0.5, -0.1, 0), 0.04, 0x94a3b8, isDark);
  ethyne.add(c5, c6, bTriple1, bTriple2, bTriple3);
  group.add(ethyne);

  return {
    group,
    animate: (time, liveSim) => {
      if (!liveSim) return;
      ethane.rotation.y = time * 0.2;
      ethene.rotation.y = time * 0.25;
      ethyne.rotation.y = time * 0.3;
    },
    setExplode: (factor) => {
      factor = clampExplodeFactor(factor);
      ethane.position.x = -2.4 - factor * 1.0;
      ethyne.position.x = 2.4 + factor * 1.0;
    },
    dispose: () => disposeSceneObject(group),
  };
}

// ----------------------------------------------------------------------------
// Procedural Builders Dispatch Registry
// ----------------------------------------------------------------------------
export const PROCEDURAL_BUILDERS: Record<string, (isDark: boolean) => ProceduralSceneObject> = {
  'u01-fractional-distillation': buildFractionalDistillation,
  'u02-rutherford-scattering': buildRutherfordScattering,
  'u02-bohr-hydrogen-emission': buildBohrHydrogenEmission,
  'u03-nacl-crystal-lattice': buildNaclCrystalLattice,
  'u03-water-bent-h2o': buildWaterBent,
  'u04-liquid-vapor-equilibrium': buildLiquidVaporEquilibrium,
  'u05-co2-greenhouse-linear': buildCo2Linear,
  'u06-avogadro-mole-chamber': buildAvogadroChamber,
  'u07-methane-tetrahedral': buildMethaneTetrahedral,
  'u08-separatory-funnel-extraction': buildSeparatoryFunnel,
  'u09-ammonia-trigonal-pyramidal': buildAmmoniaPyramidal,
  'u10-soap-micelle-emulsion': buildSoapMicelle,
  'u11-quantum-orbitals-sp': buildQuantumOrbitals,
  'u12-ideal-gas-cylinder-piston': buildGasPistonCylinder,
  'u12-graham-diffusion-tube': buildGrahamDiffusionTube,
  'u13-joule-thomson-real-gas': buildJouleThomsonApparatus,
  'u14-ion-dipole-hydration-shell': buildIonDipoleHydration,
  'u14-solution-concentration-flask': buildVolumetricFlask,
  'u15-osmotic-pressure-u-tube': buildOsmoticUTube,
  'u16-bomb-calorimeter-enthalpy': buildBombCalorimeter,
  'u17-activated-complex-transition': buildActivatedComplex,
  'u17-catalytic-surface-reaction': buildCatalyticSurface,
  'u18-le-chatelier-equilibrium': buildLeChatelierChamber,
  'u19-titration-burette-ph-curve': buildTitrationBurette,
  'u20-precipitation-ksp-lattice': buildPrecipitationLattice,
  'u21-daniell-galvanic-cell': buildDaniellGalvanicCell,
  'u21-zinc-concentration-cell': buildConcentrationCell,
  'u22-hoffman-electrolysis': buildHoffmanElectrolysis,
  'u23-hybrid-orbitals-sp-sp2-sp3': buildHybridOrbitals,
  'u23-vsepr-expanded-octets': buildVseprExpandedOctets,
  'u24-benzene-aromatic-ring': buildBenzeneAromaticRing,
  'u24-hydrocarbons-alkane-alkene-alkyne': buildComparativeHydrocarbons,

  // Legacy Contract Aliases
  'scene-vsepr-linear': buildCo2Linear,
  'scene-vsepr-trigonal': buildVseprExpandedOctets,
  'scene-vsepr-tetrahedral': buildMethaneTetrahedral,
  'scene-vsepr-pyramidal': buildAmmoniaPyramidal,
  'scene-vsepr-bent': buildWaterBent,
  'scene-nacl-crystal': buildNaclCrystalLattice,
  'scene-daniell-cell': buildDaniellGalvanicCell,
  'scene-benzene-resonance': buildBenzeneAromaticRing,
};
