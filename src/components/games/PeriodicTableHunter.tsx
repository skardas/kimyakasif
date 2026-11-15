import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Timer, Trophy, ArrowLeft, Flame, RotateCcw, Swords, Crosshair, Award, Lightbulb, SkipForward } from 'lucide-react';
import { GameHud, GameStat, clock } from './GameHud';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { GAMES_STRINGS, GAMES_CONTENT, fmt } from '../../i18n/gamesStrings';
import type { GamesStrings } from '../../i18n/gamesStrings';
import { playCorrect, playWrong, playFinish } from '../../audio/sfx';

export interface PeriodicTableHunterProps {
  lang: LanguageCode;
  highScore?: number;
  onFinish: (score: number) => void;
  onBack: () => void;
}

export interface ElementInfo {
  z: number;
  symbol: string;
  nameTr: string;
  nameEn: string;
  period: number;
  group: string;
  groupNum: number;
  category: 'alkali' | 'alkaline' | 'transition' | 'post-transition' | 'metalloid' | 'nonmetal' | 'halogen' | 'noble' | 'lanthanide' | 'actinide';
  atomicRadiusPm: number;
  ie1Kj: number;
  electronegativity: number | null;
  electronAffinityKj: number;
  metallicCharacter: number; // 1-10 scale
  /** Table-only element: placed on the hunt grid / used as a hunt target, never drawn for trend duels. */
  huntOnly?: boolean;
}

// Canonical dataset: Z 1-36, all of periods 5-6 except the lanthanides (Ce-Lu; La
// sits in 3B as in MEB tables), and the boundary element Og 118. Po is a metalloid
// (yarı metal), following the Turkish MEB/YKS classification.
const ELEMENTS_DB: ElementInfo[] = [
  { z: 1, symbol: 'H', nameTr: 'Hidrojen', nameEn: 'Hydrogen', period: 1, group: '1A', groupNum: 1, category: 'nonmetal', atomicRadiusPm: 37, ie1Kj: 1312, electronegativity: 2.20, electronAffinityKj: 73, metallicCharacter: 1 },
  { z: 2, symbol: 'He', nameTr: 'Helyum', nameEn: 'Helium', period: 1, group: '8A', groupNum: 18, category: 'noble', atomicRadiusPm: 31, ie1Kj: 2372, electronegativity: null, electronAffinityKj: 0, metallicCharacter: 0 },
  { z: 3, symbol: 'Li', nameTr: 'Lityum', nameEn: 'Lithium', period: 2, group: '1A', groupNum: 1, category: 'alkali', atomicRadiusPm: 152, ie1Kj: 520, electronegativity: 0.98, electronAffinityKj: 60, metallicCharacter: 8 },
  { z: 4, symbol: 'Be', nameTr: 'Berilyum', nameEn: 'Beryllium', period: 2, group: '2A', groupNum: 2, category: 'alkaline', atomicRadiusPm: 112, ie1Kj: 899, electronegativity: 1.57, electronAffinityKj: 0, metallicCharacter: 6 },
  { z: 5, symbol: 'B', nameTr: 'Bor', nameEn: 'Boron', period: 2, group: '3A', groupNum: 13, category: 'metalloid', atomicRadiusPm: 85, ie1Kj: 801, electronegativity: 2.04, electronAffinityKj: 27, metallicCharacter: 4 },
  { z: 6, symbol: 'C', nameTr: 'Karbon', nameEn: 'Carbon', period: 2, group: '4A', groupNum: 14, category: 'nonmetal', atomicRadiusPm: 77, ie1Kj: 1086, electronegativity: 2.55, electronAffinityKj: 122, metallicCharacter: 3 },
  { z: 7, symbol: 'N', nameTr: 'Azot', nameEn: 'Nitrogen', period: 2, group: '5A', groupNum: 15, category: 'nonmetal', atomicRadiusPm: 75, ie1Kj: 1402, electronegativity: 3.04, electronAffinityKj: 7, metallicCharacter: 1.8 },
  { z: 8, symbol: 'O', nameTr: 'Oksijen', nameEn: 'Oxygen', period: 2, group: '6A', groupNum: 16, category: 'nonmetal', atomicRadiusPm: 73, ie1Kj: 1314, electronegativity: 3.44, electronAffinityKj: 141, metallicCharacter: 0.5 },
  { z: 9, symbol: 'F', nameTr: 'Flor', nameEn: 'Fluorine', period: 2, group: '7A', groupNum: 17, category: 'halogen', atomicRadiusPm: 71, ie1Kj: 1681, electronegativity: 3.98, electronAffinityKj: 328, metallicCharacter: 0.2 },
  { z: 10, symbol: 'Ne', nameTr: 'Neon', nameEn: 'Neon', period: 2, group: '8A', groupNum: 18, category: 'noble', atomicRadiusPm: 69, ie1Kj: 2080, electronegativity: null, electronAffinityKj: 0, metallicCharacter: 0 },
  { z: 11, symbol: 'Na', nameTr: 'Sodyum', nameEn: 'Sodium', period: 3, group: '1A', groupNum: 1, category: 'alkali', atomicRadiusPm: 186, ie1Kj: 496, electronegativity: 0.93, electronAffinityKj: 53, metallicCharacter: 9 },
  { z: 12, symbol: 'Mg', nameTr: 'Magnezyum', nameEn: 'Magnesium', period: 3, group: '2A', groupNum: 2, category: 'alkaline', atomicRadiusPm: 160, ie1Kj: 738, electronegativity: 1.31, electronAffinityKj: 0, metallicCharacter: 7 },
  { z: 13, symbol: 'Al', nameTr: 'Alüminyum', nameEn: 'Aluminium', period: 3, group: '3A', groupNum: 13, category: 'post-transition', atomicRadiusPm: 143, ie1Kj: 578, electronegativity: 1.61, electronAffinityKj: 43, metallicCharacter: 5.9 },
  { z: 14, symbol: 'Si', nameTr: 'Silisyum', nameEn: 'Silicon', period: 3, group: '4A', groupNum: 14, category: 'metalloid', atomicRadiusPm: 118, ie1Kj: 786, electronegativity: 1.90, electronAffinityKj: 134, metallicCharacter: 4.2 },
  { z: 15, symbol: 'P', nameTr: 'Fosfor', nameEn: 'Phosphorus', period: 3, group: '5A', groupNum: 15, category: 'nonmetal', atomicRadiusPm: 107, ie1Kj: 1012, electronegativity: 2.19, electronAffinityKj: 72, metallicCharacter: 3.2 },
  { z: 16, symbol: 'S', nameTr: 'Kükürt', nameEn: 'Sulfur', period: 3, group: '6A', groupNum: 16, category: 'nonmetal', atomicRadiusPm: 103, ie1Kj: 1000, electronegativity: 2.58, electronAffinityKj: 200, metallicCharacter: 2 },
  { z: 17, symbol: 'Cl', nameTr: 'Klor', nameEn: 'Chlorine', period: 3, group: '7A', groupNum: 17, category: 'halogen', atomicRadiusPm: 99, ie1Kj: 1251, electronegativity: 3.16, electronAffinityKj: 349, metallicCharacter: 0.6 },
  { z: 18, symbol: 'Ar', nameTr: 'Argon', nameEn: 'Argon', period: 3, group: '8A', groupNum: 18, category: 'noble', atomicRadiusPm: 97, ie1Kj: 1520, electronegativity: null, electronAffinityKj: 0, metallicCharacter: 0 },
  { z: 19, symbol: 'K', nameTr: 'Potasyum', nameEn: 'Potassium', period: 4, group: '1A', groupNum: 1, category: 'alkali', atomicRadiusPm: 227, ie1Kj: 419, electronegativity: 0.82, electronAffinityKj: 48, metallicCharacter: 9.5 },
  { z: 20, symbol: 'Ca', nameTr: 'Kalsiyum', nameEn: 'Calcium', period: 4, group: '2A', groupNum: 2, category: 'alkaline', atomicRadiusPm: 197, ie1Kj: 590, electronegativity: 1.00, electronAffinityKj: 2, metallicCharacter: 7.5 },
  { z: 21, symbol: 'Sc', nameTr: 'Skandiyum', nameEn: 'Scandium', period: 4, group: '3B', groupNum: 3, category: 'transition', atomicRadiusPm: 162, ie1Kj: 633, electronegativity: 1.36, electronAffinityKj: 18, metallicCharacter: 7.3 },
  { z: 22, symbol: 'Ti', nameTr: 'Titanyum', nameEn: 'Titanium', period: 4, group: '4B', groupNum: 4, category: 'transition', atomicRadiusPm: 147, ie1Kj: 658, electronegativity: 1.54, electronAffinityKj: 8, metallicCharacter: 7.2 },
  { z: 23, symbol: 'V', nameTr: 'Vanadyum', nameEn: 'Vanadium', period: 4, group: '5B', groupNum: 5, category: 'transition', atomicRadiusPm: 134, ie1Kj: 650, electronegativity: 1.63, electronAffinityKj: 51, metallicCharacter: 7.1 },
  { z: 24, symbol: 'Cr', nameTr: 'Krom', nameEn: 'Chromium', period: 4, group: '6B', groupNum: 6, category: 'transition', atomicRadiusPm: 128, ie1Kj: 653, electronegativity: 1.66, electronAffinityKj: 64, metallicCharacter: 6.9 },
  { z: 25, symbol: 'Mn', nameTr: 'Mangan', nameEn: 'Manganese', period: 4, group: '7B', groupNum: 7, category: 'transition', atomicRadiusPm: 127, ie1Kj: 717, electronegativity: 1.55, electronAffinityKj: 0, metallicCharacter: 6.85 },
  { z: 26, symbol: 'Fe', nameTr: 'Demir', nameEn: 'Iron', period: 4, group: '8B', groupNum: 8, category: 'transition', atomicRadiusPm: 126, ie1Kj: 762, electronegativity: 1.83, electronAffinityKj: 16, metallicCharacter: 6.8 },
  { z: 27, symbol: 'Co', nameTr: 'Kobalt', nameEn: 'Cobalt', period: 4, group: '8B', groupNum: 9, category: 'transition', atomicRadiusPm: 125, ie1Kj: 760, electronegativity: 1.88, electronAffinityKj: 64, metallicCharacter: 6.75 },
  { z: 28, symbol: 'Ni', nameTr: 'Nikel', nameEn: 'Nickel', period: 4, group: '8B', groupNum: 10, category: 'transition', atomicRadiusPm: 124, ie1Kj: 737, electronegativity: 1.91, electronAffinityKj: 112, metallicCharacter: 6.7 },
  { z: 29, symbol: 'Cu', nameTr: 'Bakır', nameEn: 'Copper', period: 4, group: '1B', groupNum: 11, category: 'transition', atomicRadiusPm: 128, ie1Kj: 745, electronegativity: 1.90, electronAffinityKj: 118, metallicCharacter: 6.5 },
  { z: 30, symbol: 'Zn', nameTr: 'Çinko', nameEn: 'Zinc', period: 4, group: '2B', groupNum: 12, category: 'transition', atomicRadiusPm: 134, ie1Kj: 906, electronegativity: 1.65, electronAffinityKj: 0, metallicCharacter: 6.1 },
  { z: 31, symbol: 'Ga', nameTr: 'Galyum', nameEn: 'Gallium', period: 4, group: '3A', groupNum: 13, category: 'post-transition', atomicRadiusPm: 135, ie1Kj: 579, electronegativity: 1.81, electronAffinityKj: 29, metallicCharacter: 5.5 },
  { z: 32, symbol: 'Ge', nameTr: 'Germanyum', nameEn: 'Germanium', period: 4, group: '4A', groupNum: 14, category: 'metalloid', atomicRadiusPm: 122, ie1Kj: 762, electronegativity: 2.01, electronAffinityKj: 119, metallicCharacter: 4.5 },
  { z: 33, symbol: 'As', nameTr: 'Arsenik', nameEn: 'Arsenic', period: 4, group: '5A', groupNum: 15, category: 'metalloid', atomicRadiusPm: 119, ie1Kj: 947, electronegativity: 2.18, electronAffinityKj: 78, metallicCharacter: 3.5 },
  { z: 34, symbol: 'Se', nameTr: 'Selenyum', nameEn: 'Selenium', period: 4, group: '6A', groupNum: 16, category: 'nonmetal', atomicRadiusPm: 116, ie1Kj: 941, electronegativity: 2.55, electronAffinityKj: 195, metallicCharacter: 2.5 },
  { z: 35, symbol: 'Br', nameTr: 'Brom', nameEn: 'Bromine', period: 4, group: '7A', groupNum: 17, category: 'halogen', atomicRadiusPm: 114, ie1Kj: 1140, electronegativity: 2.96, electronAffinityKj: 325, metallicCharacter: 1.2 },
  { z: 36, symbol: 'Kr', nameTr: 'Kripton', nameEn: 'Krypton', period: 4, group: '8A', groupNum: 18, category: 'noble', atomicRadiusPm: 110, ie1Kj: 1351, electronegativity: 3.00, electronAffinityKj: 0, metallicCharacter: 0 },
  { z: 37, symbol: 'Rb', nameTr: 'Rubidyum', nameEn: 'Rubidium', period: 5, group: '1A', groupNum: 1, category: 'alkali', atomicRadiusPm: 248, ie1Kj: 403, electronegativity: 0.82, electronAffinityKj: 47, metallicCharacter: 9.8, huntOnly: true },
  { z: 38, symbol: 'Sr', nameTr: 'Stronsiyum', nameEn: 'Strontium', period: 5, group: '2A', groupNum: 2, category: 'alkaline', atomicRadiusPm: 215, ie1Kj: 550, electronegativity: 0.95, electronAffinityKj: 5, metallicCharacter: 7.8, huntOnly: true },
  { z: 39, symbol: 'Y', nameTr: 'İtriyum', nameEn: 'Yttrium', period: 5, group: '3B', groupNum: 3, category: 'transition', atomicRadiusPm: 180, ie1Kj: 600, electronegativity: 1.22, electronAffinityKj: 30, metallicCharacter: 7.2, huntOnly: true },
  { z: 40, symbol: 'Zr', nameTr: 'Zirkonyum', nameEn: 'Zirconium', period: 5, group: '4B', groupNum: 4, category: 'transition', atomicRadiusPm: 160, ie1Kj: 640, electronegativity: 1.33, electronAffinityKj: 41, metallicCharacter: 7, huntOnly: true },
  { z: 41, symbol: 'Nb', nameTr: 'Niyobyum', nameEn: 'Niobium', period: 5, group: '5B', groupNum: 5, category: 'transition', atomicRadiusPm: 146, ie1Kj: 652, electronegativity: 1.60, electronAffinityKj: 86, metallicCharacter: 6.8, huntOnly: true },
  { z: 42, symbol: 'Mo', nameTr: 'Molibden', nameEn: 'Molybdenum', period: 5, group: '6B', groupNum: 6, category: 'transition', atomicRadiusPm: 139, ie1Kj: 684, electronegativity: 2.16, electronAffinityKj: 72, metallicCharacter: 6.5, huntOnly: true },
  { z: 43, symbol: 'Tc', nameTr: 'Teknesyum', nameEn: 'Technetium', period: 5, group: '7B', groupNum: 7, category: 'transition', atomicRadiusPm: 136, ie1Kj: 702, electronegativity: 1.90, electronAffinityKj: 53, metallicCharacter: 6.5, huntOnly: true },
  { z: 44, symbol: 'Ru', nameTr: 'Rutenyum', nameEn: 'Ruthenium', period: 5, group: '8B', groupNum: 8, category: 'transition', atomicRadiusPm: 134, ie1Kj: 710, electronegativity: 2.20, electronAffinityKj: 101, metallicCharacter: 6.3, huntOnly: true },
  { z: 45, symbol: 'Rh', nameTr: 'Rodyum', nameEn: 'Rhodium', period: 5, group: '8B', groupNum: 9, category: 'transition', atomicRadiusPm: 134, ie1Kj: 720, electronegativity: 2.28, electronAffinityKj: 110, metallicCharacter: 6.3, huntOnly: true },
  { z: 46, symbol: 'Pd', nameTr: 'Paladyum', nameEn: 'Palladium', period: 5, group: '8B', groupNum: 10, category: 'transition', atomicRadiusPm: 137, ie1Kj: 804, electronegativity: 2.20, electronAffinityKj: 54, metallicCharacter: 6.2, huntOnly: true },
  { z: 47, symbol: 'Ag', nameTr: 'Gümüş', nameEn: 'Silver', period: 5, group: '1B', groupNum: 11, category: 'transition', atomicRadiusPm: 144, ie1Kj: 731, electronegativity: 1.93, electronAffinityKj: 126, metallicCharacter: 6.6 },
  { z: 48, symbol: 'Cd', nameTr: 'Kadmiyum', nameEn: 'Cadmium', period: 5, group: '2B', groupNum: 12, category: 'transition', atomicRadiusPm: 151, ie1Kj: 868, electronegativity: 1.69, electronAffinityKj: 0, metallicCharacter: 6, huntOnly: true },
  { z: 49, symbol: 'In', nameTr: 'İndiyum', nameEn: 'Indium', period: 5, group: '3A', groupNum: 13, category: 'post-transition', atomicRadiusPm: 167, ie1Kj: 558, electronegativity: 1.78, electronAffinityKj: 37, metallicCharacter: 5.8, huntOnly: true },
  { z: 50, symbol: 'Sn', nameTr: 'Kalay', nameEn: 'Tin', period: 5, group: '4A', groupNum: 14, category: 'post-transition', atomicRadiusPm: 140, ie1Kj: 709, electronegativity: 1.96, electronAffinityKj: 107, metallicCharacter: 5.2, huntOnly: true },
  { z: 51, symbol: 'Sb', nameTr: 'Antimon', nameEn: 'Antimony', period: 5, group: '5A', groupNum: 15, category: 'metalloid', atomicRadiusPm: 140, ie1Kj: 834, electronegativity: 2.05, electronAffinityKj: 101, metallicCharacter: 4, huntOnly: true },
  { z: 52, symbol: 'Te', nameTr: 'Tellür', nameEn: 'Tellurium', period: 5, group: '6A', groupNum: 16, category: 'metalloid', atomicRadiusPm: 138, ie1Kj: 869, electronegativity: 2.10, electronAffinityKj: 190, metallicCharacter: 3, huntOnly: true },
  { z: 53, symbol: 'I', nameTr: 'İyot', nameEn: 'Iodine', period: 5, group: '7A', groupNum: 17, category: 'halogen', atomicRadiusPm: 133, ie1Kj: 1008, electronegativity: 2.66, electronAffinityKj: 295, metallicCharacter: 1.5 },
  { z: 54, symbol: 'Xe', nameTr: 'Ksenon', nameEn: 'Xenon', period: 5, group: '8A', groupNum: 18, category: 'noble', atomicRadiusPm: 130, ie1Kj: 1170, electronegativity: 2.60, electronAffinityKj: 0, metallicCharacter: 0, huntOnly: true },
  { z: 55, symbol: 'Cs', nameTr: 'Sezyum', nameEn: 'Caesium', period: 6, group: '1A', groupNum: 1, category: 'alkali', atomicRadiusPm: 265, ie1Kj: 376, electronegativity: 0.79, electronAffinityKj: 45, metallicCharacter: 10 },
  { z: 56, symbol: 'Ba', nameTr: 'Baryum', nameEn: 'Barium', period: 6, group: '2A', groupNum: 2, category: 'alkaline', atomicRadiusPm: 222, ie1Kj: 503, electronegativity: 0.89, electronAffinityKj: 14, metallicCharacter: 8.2 },
  { z: 57, symbol: 'La', nameTr: 'Lantan', nameEn: 'Lanthanum', period: 6, group: '3B', groupNum: 3, category: 'transition', atomicRadiusPm: 187, ie1Kj: 538, electronegativity: 1.10, electronAffinityKj: 53, metallicCharacter: 7.8, huntOnly: true },
  { z: 72, symbol: 'Hf', nameTr: 'Hafniyum', nameEn: 'Hafnium', period: 6, group: '4B', groupNum: 4, category: 'transition', atomicRadiusPm: 159, ie1Kj: 659, electronegativity: 1.30, electronAffinityKj: 17, metallicCharacter: 7, huntOnly: true },
  { z: 73, symbol: 'Ta', nameTr: 'Tantal', nameEn: 'Tantalum', period: 6, group: '5B', groupNum: 5, category: 'transition', atomicRadiusPm: 146, ie1Kj: 761, electronegativity: 1.50, electronAffinityKj: 31, metallicCharacter: 6.8, huntOnly: true },
  { z: 74, symbol: 'W', nameTr: 'Tungsten', nameEn: 'Tungsten', period: 6, group: '6B', groupNum: 6, category: 'transition', atomicRadiusPm: 139, ie1Kj: 770, electronegativity: 2.36, electronAffinityKj: 79, metallicCharacter: 6.5, huntOnly: true },
  { z: 75, symbol: 'Re', nameTr: 'Renyum', nameEn: 'Rhenium', period: 6, group: '7B', groupNum: 7, category: 'transition', atomicRadiusPm: 137, ie1Kj: 760, electronegativity: 1.90, electronAffinityKj: 6, metallicCharacter: 6.3, huntOnly: true },
  { z: 76, symbol: 'Os', nameTr: 'Osmiyum', nameEn: 'Osmium', period: 6, group: '8B', groupNum: 8, category: 'transition', atomicRadiusPm: 135, ie1Kj: 840, electronegativity: 2.20, electronAffinityKj: 104, metallicCharacter: 6, huntOnly: true },
  { z: 77, symbol: 'Ir', nameTr: 'İridyum', nameEn: 'Iridium', period: 6, group: '8B', groupNum: 9, category: 'transition', atomicRadiusPm: 136, ie1Kj: 880, electronegativity: 2.20, electronAffinityKj: 151, metallicCharacter: 6, huntOnly: true },
  { z: 78, symbol: 'Pt', nameTr: 'Platin', nameEn: 'Platinum', period: 6, group: '8B', groupNum: 10, category: 'transition', atomicRadiusPm: 139, ie1Kj: 870, electronegativity: 2.28, electronAffinityKj: 205, metallicCharacter: 5.8, huntOnly: true },
  { z: 79, symbol: 'Au', nameTr: 'Altın', nameEn: 'Gold', period: 6, group: '1B', groupNum: 11, category: 'transition', atomicRadiusPm: 144, ie1Kj: 890, electronegativity: 2.54, electronAffinityKj: 223, metallicCharacter: 5 },
  { z: 80, symbol: 'Hg', nameTr: 'Cıva', nameEn: 'Mercury', period: 6, group: '2B', groupNum: 12, category: 'transition', atomicRadiusPm: 151, ie1Kj: 1007, electronegativity: 2.00, electronAffinityKj: 0, metallicCharacter: 5.4 },
  { z: 81, symbol: 'Tl', nameTr: 'Talyum', nameEn: 'Thallium', period: 6, group: '3A', groupNum: 13, category: 'post-transition', atomicRadiusPm: 170, ie1Kj: 589, electronegativity: 1.62, electronAffinityKj: 36, metallicCharacter: 6.5, huntOnly: true },
  { z: 82, symbol: 'Pb', nameTr: 'Kurşun', nameEn: 'Lead', period: 6, group: '4A', groupNum: 14, category: 'post-transition', atomicRadiusPm: 175, ie1Kj: 716, electronegativity: 2.33, electronAffinityKj: 35, metallicCharacter: 5.8 },
  { z: 83, symbol: 'Bi', nameTr: 'Bizmut', nameEn: 'Bismuth', period: 6, group: '5A', groupNum: 15, category: 'post-transition', atomicRadiusPm: 156, ie1Kj: 703, electronegativity: 2.02, electronAffinityKj: 91, metallicCharacter: 5, huntOnly: true },
  { z: 84, symbol: 'Po', nameTr: 'Polonyum', nameEn: 'Polonium', period: 6, group: '6A', groupNum: 16, category: 'metalloid', atomicRadiusPm: 168, ie1Kj: 812, electronegativity: 2.00, electronAffinityKj: 136, metallicCharacter: 4.5, huntOnly: true },
  { z: 85, symbol: 'At', nameTr: 'Astatin', nameEn: 'Astatine', period: 6, group: '7A', groupNum: 17, category: 'halogen', atomicRadiusPm: 150, ie1Kj: 899, electronegativity: 2.20, electronAffinityKj: 233, metallicCharacter: 2, huntOnly: true },
  { z: 86, symbol: 'Rn', nameTr: 'Radon', nameEn: 'Radon', period: 6, group: '8A', groupNum: 18, category: 'noble', atomicRadiusPm: 145, ie1Kj: 1037, electronegativity: null, electronAffinityKj: 0, metallicCharacter: 0, huntOnly: true },
  { z: 118, symbol: 'Og', nameTr: 'Oganesson', nameEn: 'Oganesson', period: 7, group: '8A', groupNum: 18, category: 'noble', atomicRadiusPm: 152, ie1Kj: 860, electronegativity: null, electronAffinityKj: 5, metallicCharacter: 2 },
];

type ClueKind = 'z' | 'pos' | 'sym' | 'name' | 'special';
type DuelKind = 'ie2A3A' | 'ie5A6A' | 'eaClF' | 'radius' | 'en' | 'metal';

const SPECIAL_CLUES: Record<number, keyof GamesStrings> = {
  1: 'phClue1',
  2: 'phClue2',
  9: 'phClue9',
  17: 'phClue17',
  24: 'phClue24',
  80: 'phClue80',
  118: 'phClue118',
};

const CAT_LABEL: Record<ElementInfo['category'], keyof GamesStrings> = {
  alkali: 'catAlkali',
  alkaline: 'catAlkaline',
  transition: 'catTransition',
  'post-transition': 'catPost',
  metalloid: 'catMetalloid',
  nonmetal: 'catNonmetal',
  halogen: 'catHalogen',
  noble: 'catNoble',
  lanthanide: 'catTransition',
  actinide: 'catTransition',
};

const LEGEND: ElementInfo['category'][] = ['alkali', 'alkaline', 'transition', 'post-transition', 'metalloid', 'nonmetal', 'halogen', 'noble'];

const DUEL_PROMPT: Record<DuelKind, keyof GamesStrings> = {
  ie2A3A: 'dqIE',
  ie5A6A: 'dqIE',
  eaClF: 'dqEA',
  radius: 'dqRadius',
  en: 'dqEN',
  metal: 'dqMetal',
};

const DUEL_NOTE: Record<DuelKind, keyof GamesStrings> = {
  ie2A3A: 'dt2A3A',
  ie5A6A: 'dt5A6A',
  eaClF: 'dtClF',
  radius: 'dtRadius',
  en: 'dtEN',
  metal: 'dtMetal',
};

const byZ = (z: number) => ELEMENTS_DB.find((e) => e.z === z)!;
const pickRandom = () => ELEMENTS_DB[Math.floor(Math.random() * ELEMENTS_DB.length)];
// Trend duels keep to the curated set whose trend values are checked against YKS rules.
const DUEL_POOL = ELEMENTS_DB.filter((e) => !e.huntOnly);
const pickDuel = () => DUEL_POOL[Math.floor(Math.random() * DUEL_POOL.length)];

export const PeriodicTableHunter: React.FC<PeriodicTableHunterProps> = ({
  lang,
  highScore = 0,
  onFinish,
  onBack,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const g = GAMES_STRINGS[lang] ?? GAMES_STRINGS.en;
  const content = GAMES_CONTENT[lang] ?? GAMES_CONTENT.en;
  const bestAtStart = useRef(highScore);
  const [isOver, setIsOver] = useState(false);
  const [feedbackN, setFeedbackN] = useState(0);

  // Game state
  const [gameMode, setGameMode] = useState<'hunt' | 'battle'>('hunt');
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [hits, setHits] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [lastPick, setLastPick] = useState<{ z: number; ok: boolean; n: number } | null>(null);
  const [clue, setClue] = useState<{ el: ElementInfo; kind: ClueKind }>({ el: ELEMENTS_DB[0], kind: 'z' });
  const [battleQuestion, setBattleQuestion] = useState<{
    kind: DuelKind;
    elemA: ElementInfo;
    elemB: ElementInfo;
    correctSymbol: string;
  } | null>(null);

  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);

  const scoreRef = useRef(score);
  scoreRef.current = score;

  // Streak Multiplier: 1x (0-2), 2x (3-5), 3x (6-8), 4x (9+)
  const multiplier = streak >= 9 ? 4 : streak >= 6 ? 3 : streak >= 3 ? 2 : 1;

  const elName = useCallback(
    (el: ElementInfo) => content.elementNames[el.symbol] ?? (lang === 'tr' ? el.nameTr : el.nameEn),
    [content, lang]
  );

  // Clue generator for Element Hunt
  const generateHuntClue = useCallback(() => {
    const el = pickRandom();
    const kinds: ClueKind[] = ['z', 'pos', 'sym', 'name'];
    if (SPECIAL_CLUES[el.z]) kinds.push('special');
    setClue({ el, kind: kinds[Math.floor(Math.random() * kinds.length)] });
    setShowHint(false);
  }, []);

  // Battle Question Generator (Trends with YKS traps!)
  const generateBattleQuestion = useCallback(() => {
    const battleTypes = ['ie', 'radius', 'electronegativity', 'metallic', 'affinity'];
    const chosenType = battleTypes[Math.floor(Math.random() * battleTypes.length)];

    let elemA = pickDuel();
    let elemB = pickDuel();
    while (elemA.z === elemB.z) {
      elemB = pickDuel();
    }

    // High-yield YKS Traps selection
    const randTrap = Math.random();
    if (randTrap < 0.25) {
      // 2A vs 3A trap: Be vs B OR Mg vs Al ("2A > 3A")
      [elemA, elemB] = Math.random() > 0.5 ? [byZ(4), byZ(5)] : [byZ(12), byZ(13)];
      setBattleQuestion({ kind: 'ie2A3A', elemA, elemB, correctSymbol: elemA.symbol });
      return;
    } else if (randTrap < 0.5) {
      // 5A vs 6A trap: N vs O OR P vs S
      [elemA, elemB] = Math.random() > 0.5 ? [byZ(7), byZ(8)] : [byZ(15), byZ(16)];
      setBattleQuestion({ kind: 'ie5A6A', elemA, elemB, correctSymbol: elemA.symbol });
      return;
    } else if (randTrap < 0.7) {
      // Cl vs F Electron Affinity trap
      setBattleQuestion({ kind: 'eaClF', elemA: byZ(17), elemB: byZ(9), correctSymbol: 'Cl' });
      return;
    }

    // Standard trend comparison
    if (chosenType === 'radius') {
      const isA = elemA.atomicRadiusPm > elemB.atomicRadiusPm;
      setBattleQuestion({ kind: 'radius', elemA, elemB, correctSymbol: isA ? elemA.symbol : elemB.symbol });
    } else if (chosenType === 'electronegativity') {
      const isA = (elemA.electronegativity ?? 0) > (elemB.electronegativity ?? 0);
      setBattleQuestion({ kind: 'en', elemA, elemB, correctSymbol: isA ? elemA.symbol : elemB.symbol });
    } else {
      const isA = elemA.metallicCharacter > elemB.metallicCharacter;
      setBattleQuestion({ kind: 'metal', elemA, elemB, correctSymbol: isA ? elemA.symbol : elemB.symbol });
    }
  }, []);

  // Start game session
  const startGame = (mode: 'hunt' | 'battle') => {
    bestAtStart.current = highScore;
    setGameMode(mode);
    setIsOver(false);
    setIsPlaying(true);
    setTimeLeft(60);
    setScore(0);
    setStreak(0);
    setHits(0);
    setLastPick(null);
    setFeedback(null);
    if (mode === 'hunt') {
      generateHuntClue();
    } else {
      generateBattleQuestion();
    }
  };

  // Timer loop
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  // Handle game finish when timer expires
  useEffect(() => {
    if (isPlaying && timeLeft === 0) {
      setIsPlaying(false);
      setIsOver(true);
      playFinish();
      onFinish(scoreRef.current);
    }
  }, [isPlaying, timeLeft, onFinish]);

  const duelNote = (q: NonNullable<typeof battleQuestion>) =>
    fmt(g[DUEL_NOTE[q.kind]], { a: q.elemA.symbol, b: q.elemB.symbol });

  // Handle Element Click in Hunt Mode
  const handleElementClick = (el: ElementInfo) => {
    if (!isPlaying || gameMode !== 'hunt') return;
    const target = clue.el;

    if (el.symbol === target.symbol) {
      playCorrect();
      const earned = 100 * multiplier;
      setScore((s) => s + earned);
      setStreak((st) => st + 1);
      setHits((h) => h + 1);
      setLastPick((p) => ({ z: el.z, ok: true, n: (p?.n ?? 0) + 1 }));
      setFeedback({ message: fmt(g.phOk, { n: earned, s: el.symbol, name: elName(el) }), isCorrect: true });
      generateHuntClue();
    } else {
      playWrong();
      setStreak(0);
      setScore((s) => Math.max(0, s - 25));
      setFeedbackN((n) => n + 1);
      setLastPick((p) => ({ z: el.z, ok: false, n: (p?.n ?? 0) + 1 }));
      setFeedback({ message: fmt(g.phBad, { s: el.symbol, t: target.symbol }), isCorrect: false });
    }
  };

  // Handle Battle Mode Answer
  const handleBattleAnswer = (chosenSymbol: string) => {
    if (!isPlaying || !battleQuestion) return;

    if (chosenSymbol === battleQuestion.correctSymbol) {
      playCorrect();
      const earned = 120 * multiplier;
      setScore((s) => s + earned);
      setStreak((st) => st + 1);
      setHits((h) => h + 1);
      setFeedback({ message: fmt(g.duelOk, { n: earned, note: duelNote(battleQuestion) }), isCorrect: true });
      generateBattleQuestion();
    } else {
      playWrong();
      setStreak(0);
      setScore((s) => Math.max(0, s - 30));
      setFeedbackN((n) => n + 1);
      setFeedback({
        message: fmt(g.duelBad, { s: battleQuestion.correctSymbol, note: duelNote(battleQuestion) }),
        isCorrect: false,
      });
      generateBattleQuestion();
    }
  };

  // Hint (hunt): reveals period + group, but the streak bonus is forfeited
  const handleHint = () => {
    if (!isPlaying || showHint) return;
    setShowHint(true);
    setStreak(0);
  };

  // Skip: new clue / question, no points, streak resets
  const handleSkip = () => {
    if (!isPlaying) return;
    setStreak(0);
    setFeedback(null);
    if (gameMode === 'hunt') generateHuntClue();
    else generateBattleQuestion();
  };

  const clueText = (() => {
    const el = clue.el;
    switch (clue.kind) {
      case 'z':
        return fmt(g.phClueZ, { z: el.z });
      case 'pos':
        return fmt(g.phCluePos, { p: el.period, g: el.group, cat: g[CAT_LABEL[el.category]] });
      case 'sym':
        return fmt(g.phClueSym, { s: el.symbol });
      case 'name':
        return fmt(g.phClueName, { name: elName(el) });
      default:
        return g[SPECIAL_CLUES[el.z]] ?? fmt(g.phClueZ, { z: el.z });
    }
  })();

  const best = Math.max(highScore, score);
  const lowTime = timeLeft <= 10 && isPlaying;

  const hud = (
    <GameHud title={t.games.periodicTitle} backLabel={t.games.backToHub} onBack={onBack}>
      <GameStat label={g.score} value={fmt(g.pts, { n: score })} tone="accent" />
      <GameStat icon={<Timer size={14} aria-hidden="true" />} label={g.timer} value={clock(timeLeft)} tone={lowTime ? 'bad' : 'gold'} />
    </GameHud>
  );

  if (!isPlaying && !isOver) {
    return (
      <div className="gm-play periodic-hunter-container">
        {hud}
        <main className="ky-fit gm-main gm-main--center">
          <section className="ky-stage gm-intro ky-persp">
            <div className="ky-floor" aria-hidden="true" />
            <span className="ky-tile ky-tile--lg gm-bob" aria-hidden="true">
              <Crosshair size={30} />
            </span>
            <h2 className="ky-disp">{t.games.periodicTitle}</h2>
            <p>{t.games.periodicDesc}</p>
            <div className="gm-modes">
              <button type="button" onClick={() => startGame('hunt')} className="gm-mode" data-sfx="start">
                <Crosshair size={26} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                <strong>{g.phHunt}</strong>
                <small>{g.phHuntDesc}</small>
              </button>
              <button type="button" onClick={() => startGame('battle')} className="gm-mode gm-mode--gold" data-sfx="start">
                <Swords size={26} style={{ color: 'var(--gold)' }} aria-hidden="true" />
                <strong>{g.phDuel}</strong>
                <small>{g.phDuelDesc}</small>
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }

  if (!isPlaying && isOver) {
    return (
      <div className="gm-play periodic-hunter-container">
        {hud}
        <main className="ky-fit gm-main gm-main--center">
          <section className="ky-card gm-result">
            <span className="ky-tile ky-tile--lg ky-tile--gold" aria-hidden="true">
              <Award size={30} />
            </span>
            <h2 className="ky-disp">{g.finished}</h2>
            <div className="gm-score ky-pop">{score}</div>
            <span className="ky-chip ky-chip--gold">
              <Trophy size={14} aria-hidden="true" />
              {score > 0 && score > bestAtStart.current ? g.newBest : `${g.best}: ${best}`}
            </span>
            <p className="gm-result-meta">{g.solved}: {hits}</p>
          </section>
        </main>
        <footer className="ky-screen-foot gm-foot">
          <button type="button" onClick={onBack} className="ky-btn ky-btn--quiet">
            <ArrowLeft size={18} aria-hidden="true" className="gm-flip" />
            <span className="gm-narrow-sr">{g.backToGames}</span>
          </button>
          <button type="button" onClick={() => startGame(gameMode)} className="ky-btn ky-btn--primary ky-grow" data-sfx="start">
            <RotateCcw size={18} aria-hidden="true" />
            <span>{g.replay}</span>
          </button>
        </footer>
      </div>
    );
  }

  const streakPct = streak >= 9 ? 100 : ((streak % 3) / 3) * 100;

  return (
    <div className="gm-play periodic-hunter-container">
      {hud}

      <main className="ky-fit ky-pane gm-main">
        {/* Target */}
        <section className="ky-stage gm-target" aria-live="polite">
          <span
            className="ky-atom ky-float gm-target-orb"
            aria-hidden="true"
            style={
              gameMode === 'hunt'
                ? { ['--c' as string]: '#FFD873', ['--cd' as string]: '#A86A08' }
                : { ['--c' as string]: '#C9A2FF', ['--cd' as string]: '#5B32C9' }
            }
          />
          <div className="gm-target-text">
            <p className="ky-eyebrow">
              {gameMode === 'hunt' ? g.phHunt : g.phDuel} · {fmt(g.phTargetN, { n: hits + 1 })}
            </p>
            <h2 className="ky-disp ky-fs-20">{gameMode === 'hunt' ? clueText : battleQuestion ? g[DUEL_PROMPT[battleQuestion.kind]] : ''}</h2>
            <p className="ky-fs-13 gm-target-sub">
              {gameMode === 'hunt'
                ? showHint
                  ? fmt(g.phHintText, { p: clue.el.period, g: clue.el.group })
                  : g.phTapCell
                : g.phPickOne}
            </p>
            {feedback && (
              <p
                key={feedbackN + (feedback.isCorrect ? 'ok' : 'bad')}
                className={`gm-flash ky-fs-13 ${feedback.isCorrect ? 'ok ky-pop' : 'bad ky-shake'}`}
                role="status"
              >
                {feedback.message}
              </p>
            )}
          </div>
        </section>

        {gameMode === 'hunt' ? (
          <section className="ky-card ky-lead gm-table-card" aria-label={g.phTable}>
            <div className="gm-pt-scroll" tabIndex={0} role="group" aria-label={g.phTable}>
              <div className="gm-pt-grid">
                {ELEMENTS_DB.map((el) => {
                  const pick = lastPick && lastPick.z === el.z ? lastPick : null;
                  return (
                    <button
                      key={pick ? `${el.z}-${pick.n}` : el.z}
                      type="button"
                      onClick={() => handleElementClick(el)}
                      className={`gm-el${pick ? (pick.ok ? ' is-hit' : ' is-miss') : ''}`}
                      data-cat={el.category}
                      style={{ gridColumn: el.groupNum, gridRow: el.period }}
                      aria-label={`${el.symbol} ${elName(el)}`}
                    >
                      <small>{el.z}</small>
                      <b>{el.symbol}</b>
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="gm-pt-hint ky-fs-12">{g.phScroll}</p>
          </section>
        ) : battleQuestion ? (
          <section className="gm-duel ky-lead" aria-label={g.phDuel}>
            {[battleQuestion.elemA, battleQuestion.elemB].map((elem) => (
              <button key={elem.z} type="button" onClick={() => handleBattleAnswer(elem.symbol)} className="ky-card gm-duel-card">
                <span className="gm-el gm-el--big" data-cat={elem.category} aria-hidden="true">
                  <small>{elem.z}</small>
                  <b>{elem.symbol}</b>
                </span>
                <strong className="ky-fs-16">{elName(elem)}</strong>
                <span className="gm-chiprow">
                  <span className="ky-chip ky-mono">Z = {elem.z}</span>
                  <span className="ky-chip">{fmt(g.periodShort, { p: elem.period })} · {elem.group}</span>
                </span>
              </button>
            ))}
          </section>
        ) : null}

        {gameMode === 'hunt' && (
          <div className="gm-legend">
            {LEGEND.map((cat) => (
              <span key={cat} className="ky-chip">
                <span className="gm-swatch" data-cat={cat} aria-hidden="true" />
                {g[CAT_LABEL[cat]]}
              </span>
            ))}
          </div>
        )}

        <div className="ky-well gm-streak-well">
          <span className="ky-chip ky-chip--gold" key={streak}>
            <Flame size={13} aria-hidden="true" />
            {fmt(g.streakN, { n: multiplier })}
          </span>
          <div className="ky-track" aria-hidden="true">
            <div className="ky-fill ky-fill--gold" style={{ inlineSize: `${streakPct}%` }} />
          </div>
          <span className="ky-mono ky-fs-12 gm-streak-best">{fmt(g.recordN, { n: best > 0 ? best : '—' })}</span>
        </div>
      </main>

      <footer className="ky-screen-foot gm-foot">
        {gameMode === 'hunt' && (
          <button type="button" className="ky-btn ky-btn--quiet ky-grow" onClick={handleHint} disabled={showHint} aria-pressed={showHint}>
            <Lightbulb size={18} aria-hidden="true" />
            <span>{g.hint}</span>
          </button>
        )}
        <button type="button" className="ky-btn ky-btn--quiet ky-grow" onClick={handleSkip}>
          <SkipForward size={18} aria-hidden="true" className="gm-flip" />
          <span>{g.skip}</span>
        </button>
      </footer>
    </div>
  );
};
