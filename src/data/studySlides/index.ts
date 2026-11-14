import type { UnitDeepStudyGuide } from '../../types/chemistry';
import { STUDY_SLIDES_U01_U06 } from './slides_u01_u06';
import { STUDY_SLIDES_U07_U12 } from './slides_u07_u12';
import { STUDY_SLIDES_U13_U18 } from './slides_u13_u18';
import { STUDY_SLIDES_U19_U24 } from './slides_u19_u24';

export const ALL_UNIT_DEEP_STUDY_GUIDES: Record<string, UnitDeepStudyGuide> = {
  ...STUDY_SLIDES_U01_U06,
  ...STUDY_SLIDES_U07_U12,
  ...STUDY_SLIDES_U13_U18,
  ...STUDY_SLIDES_U19_U24,
};

export function getUnitDeepStudyGuide(unitId: string): UnitDeepStudyGuide {
  return ALL_UNIT_DEEP_STUDY_GUIDES[unitId] || ALL_UNIT_DEEP_STUDY_GUIDES['u01'];
}

export * from './slides_u01_u06';
export * from './slides_u07_u12';
export * from './slides_u13_u18';
export * from './slides_u19_u24';
