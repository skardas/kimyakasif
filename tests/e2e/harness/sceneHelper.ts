// ============================================================================
// tests/e2e/harness/sceneHelper.ts
// Domain contracts and helpers for Kimya 3D Visualizer Scene Constraints
// ============================================================================

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
 * Validates that a scene's camera configuration conforms to Three.js view frustum integrity rules.
 */
export function validateCameraConstraints(constraints: OrbitCameraConstraints): boolean {
  return (
    constraints.minDistance > 0 &&
    constraints.minDistance < constraints.maxDistance &&
    constraints.defaultDistance >= constraints.minDistance &&
    constraints.defaultDistance <= constraints.maxDistance &&
    constraints.near > 0 &&
    constraints.near < constraints.far &&
    constraints.fov > 0 &&
    constraints.fov < 180
  );
}

export interface ExplodeViewConstraints {
  minFactor: number;     // 0.0: collapsed equilibrium state
  maxFactor: number;     // 1.0: maximum layer separation
  step: number;          // 0.05: slider granularity
  defaultFactor: number; // 0.0: initially collapsed
}

export const DEFAULT_EXPLODE_CONSTRAINTS: ExplodeViewConstraints = {
  minFactor: 0.0,
  maxFactor: 1.0,
  step: 0.05,
  defaultFactor: 0.0,
};

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

/**
 * Calculates exploded 3D position for an ion or atom displaced by explode factor.
 */
export function calculateExplodedPosition(
  basePosition: [number, number, number],
  center: [number, number, number],
  explodeFactor: number,
  expansionScale: number = 1.5
): [number, number, number] {
  const clamped = clampExplodeFactor(explodeFactor);
  const dx = basePosition[0] - center[0];
  const dy = basePosition[1] - center[1];
  const dz = basePosition[2] - center[2];
  return [
    Number((basePosition[0] + dx * clamped * expansionScale).toFixed(3)),
    Number((basePosition[1] + dy * clamped * expansionScale).toFixed(3)),
    Number((basePosition[2] + dz * clamped * expansionScale).toFixed(3)),
  ];
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
  dimensions: [number, number, number]; // [4, 4, 4]
  spacing: number;                      // 1.2 units between ionic centers
  totalSites: number;                   // 64
  ions: CrystalIon[];                   // array of 64 fully articulated ions
  unitCellType: 'FCC' | 'BCC' | 'SimpleCubic';
  estimatedVerticesPerIon: number;      // 289 (16x16 segments)
  maxVertexBudget: number;              // 25,000 vertices for mobile WebGL
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
