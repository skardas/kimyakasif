import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Sparkles, Timer, Trophy, ArrowLeft, Flame, RotateCcw, Swords, Crosshair, Award } from 'lucide-react';
import { GameHud, GameStat } from './GameHud';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { GAMES_STRINGS } from '../../i18n/gamesStrings';
import { playCorrect, playWrong, playSuccess, playFinish } from '../../audio/sfx';

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
}

// Canonical dataset including 1-36 and key elements up to Og 118
const ELEMENTS_DB: ElementInfo[] = [
  { z: 1, symbol: 'H', nameTr: 'Hidrojen', nameEn: 'Hydrogen', period: 1, group: '1A', groupNum: 1, category: 'nonmetal', atomicRadiusPm: 37, ie1Kj: 1312, electronegativity: 2.20, electronAffinityKj: 73, metallicCharacter: 1 },
  { z: 2, symbol: 'He', nameTr: 'Helyum', nameEn: 'Helium', period: 1, group: '8A', groupNum: 18, category: 'noble', atomicRadiusPm: 31, ie1Kj: 2372, electronegativity: null, electronAffinityKj: 0, metallicCharacter: 0 },
  { z: 3, symbol: 'Li', nameTr: 'Lityum', nameEn: 'Lithium', period: 2, group: '1A', groupNum: 1, category: 'alkali', atomicRadiusPm: 152, ie1Kj: 520, electronegativity: 0.98, electronAffinityKj: 60, metallicCharacter: 8 },
  { z: 4, symbol: 'Be', nameTr: 'Berilyum', nameEn: 'Beryllium', period: 2, group: '2A', groupNum: 2, category: 'alkaline', atomicRadiusPm: 112, ie1Kj: 899, electronegativity: 1.57, electronAffinityKj: 0, metallicCharacter: 6 },
  { z: 5, symbol: 'B', nameTr: 'Bor', nameEn: 'Boron', period: 2, group: '3A', groupNum: 13, category: 'metalloid', atomicRadiusPm: 85, ie1Kj: 801, electronegativity: 2.04, electronAffinityKj: 27, metallicCharacter: 4 },
  { z: 6, symbol: 'C', nameTr: 'Karbon', nameEn: 'Carbon', period: 2, group: '4A', groupNum: 14, category: 'nonmetal', atomicRadiusPm: 77, ie1Kj: 1086, electronegativity: 2.55, electronAffinityKj: 122, metallicCharacter: 3 },
  { z: 7, symbol: 'N', nameTr: 'Azot', nameEn: 'Nitrogen', period: 2, group: '5A', groupNum: 15, category: 'nonmetal', atomicRadiusPm: 75, ie1Kj: 1402, electronegativity: 3.04, electronAffinityKj: 7, metallicCharacter: 2 },
  { z: 8, symbol: 'O', nameTr: 'Oksijen', nameEn: 'Oxygen', period: 2, group: '6A', groupNum: 16, category: 'nonmetal', atomicRadiusPm: 73, ie1Kj: 1314, electronegativity: 3.44, electronAffinityKj: 141, metallicCharacter: 1 },
  { z: 9, symbol: 'F', nameTr: 'Flor', nameEn: 'Fluorine', period: 2, group: '7A', groupNum: 17, category: 'halogen', atomicRadiusPm: 71, ie1Kj: 1681, electronegativity: 3.98, electronAffinityKj: 328, metallicCharacter: 1 },
  { z: 10, symbol: 'Ne', nameTr: 'Neon', nameEn: 'Neon', period: 2, group: '8A', groupNum: 18, category: 'noble', atomicRadiusPm: 69, ie1Kj: 2080, electronegativity: null, electronAffinityKj: 0, metallicCharacter: 0 },
  { z: 11, symbol: 'Na', nameTr: 'Sodyum', nameEn: 'Sodium', period: 3, group: '1A', groupNum: 1, category: 'alkali', atomicRadiusPm: 186, ie1Kj: 496, electronegativity: 0.93, electronAffinityKj: 53, metallicCharacter: 9 },
  { z: 12, symbol: 'Mg', nameTr: 'Magnezyum', nameEn: 'Magnesium', period: 3, group: '2A', groupNum: 2, category: 'alkaline', atomicRadiusPm: 160, ie1Kj: 738, electronegativity: 1.31, electronAffinityKj: 0, metallicCharacter: 7 },
  { z: 13, symbol: 'Al', nameTr: 'Alüminyum', nameEn: 'Aluminium', period: 3, group: '3A', groupNum: 13, category: 'post-transition', atomicRadiusPm: 143, ie1Kj: 578, electronegativity: 1.61, electronAffinityKj: 43, metallicCharacter: 6 },
  { z: 14, symbol: 'Si', nameTr: 'Silisyum', nameEn: 'Silicon', period: 3, group: '4A', groupNum: 14, category: 'metalloid', atomicRadiusPm: 118, ie1Kj: 786, electronegativity: 1.90, electronAffinityKj: 134, metallicCharacter: 4 },
  { z: 15, symbol: 'P', nameTr: 'Fosfor', nameEn: 'Phosphorus', period: 3, group: '5A', groupNum: 15, category: 'nonmetal', atomicRadiusPm: 110, ie1Kj: 1012, electronegativity: 2.19, electronAffinityKj: 72, metallicCharacter: 3 },
  { z: 16, symbol: 'S', nameTr: 'Kükürt', nameEn: 'Sulfur', period: 3, group: '6A', groupNum: 16, category: 'nonmetal', atomicRadiusPm: 103, ie1Kj: 1000, electronegativity: 2.58, electronAffinityKj: 200, metallicCharacter: 2 },
  { z: 17, symbol: 'Cl', nameTr: 'Klor', nameEn: 'Chlorine', period: 3, group: '7A', groupNum: 17, category: 'halogen', atomicRadiusPm: 99, ie1Kj: 1251, electronegativity: 3.16, electronAffinityKj: 349, metallicCharacter: 1 },
  { z: 18, symbol: 'Ar', nameTr: 'Argon', nameEn: 'Argon', period: 3, group: '8A', groupNum: 18, category: 'noble', atomicRadiusPm: 97, ie1Kj: 1520, electronegativity: null, electronAffinityKj: 0, metallicCharacter: 0 },
  { z: 19, symbol: 'K', nameTr: 'Potasyum', nameEn: 'Potassium', period: 4, group: '1A', groupNum: 1, category: 'alkali', atomicRadiusPm: 227, ie1Kj: 419, electronegativity: 0.82, electronAffinityKj: 48, metallicCharacter: 9.5 },
  { z: 20, symbol: 'Ca', nameTr: 'Kalsiyum', nameEn: 'Calcium', period: 4, group: '2A', groupNum: 2, category: 'alkaline', atomicRadiusPm: 197, ie1Kj: 590, electronegativity: 1.00, electronAffinityKj: 2, metallicCharacter: 7.5 },
  { z: 21, symbol: 'Sc', nameTr: 'Skandiyum', nameEn: 'Scandium', period: 4, group: '3B', groupNum: 3, category: 'transition', atomicRadiusPm: 162, ie1Kj: 633, electronegativity: 1.36, electronAffinityKj: 18, metallicCharacter: 7 },
  { z: 22, symbol: 'Ti', nameTr: 'Titanyum', nameEn: 'Titanium', period: 4, group: '4B', groupNum: 4, category: 'transition', atomicRadiusPm: 147, ie1Kj: 658, electronegativity: 1.54, electronAffinityKj: 8, metallicCharacter: 7 },
  { z: 23, symbol: 'V', nameTr: 'Vanadyum', nameEn: 'Vanadium', period: 4, group: '5B', groupNum: 5, category: 'transition', atomicRadiusPm: 134, ie1Kj: 650, electronegativity: 1.63, electronAffinityKj: 51, metallicCharacter: 7 },
  { z: 24, symbol: 'Cr', nameTr: 'Krom', nameEn: 'Chromium', period: 4, group: '6B', groupNum: 6, category: 'transition', atomicRadiusPm: 128, ie1Kj: 653, electronegativity: 1.66, electronAffinityKj: 64, metallicCharacter: 7 },
  { z: 25, symbol: 'Mn', nameTr: 'Mangan', nameEn: 'Manganese', period: 4, group: '7B', groupNum: 7, category: 'transition', atomicRadiusPm: 127, ie1Kj: 717, electronegativity: 1.55, electronAffinityKj: 0, metallicCharacter: 6.8 },
  { z: 26, symbol: 'Fe', nameTr: 'Demir', nameEn: 'Iron', period: 4, group: '8B', groupNum: 8, category: 'transition', atomicRadiusPm: 126, ie1Kj: 762, electronegativity: 1.83, electronAffinityKj: 16, metallicCharacter: 6.8 },
  { z: 27, symbol: 'Co', nameTr: 'Kobalt', nameEn: 'Cobalt', period: 4, group: '8B', groupNum: 9, category: 'transition', atomicRadiusPm: 125, ie1Kj: 760, electronegativity: 1.88, electronAffinityKj: 64, metallicCharacter: 6.8 },
  { z: 28, symbol: 'Ni', nameTr: 'Nikel', nameEn: 'Nickel', period: 4, group: '8B', groupNum: 10, category: 'transition', atomicRadiusPm: 124, ie1Kj: 737, electronegativity: 1.91, electronAffinityKj: 112, metallicCharacter: 6.8 },
  { z: 29, symbol: 'Cu', nameTr: 'Bakır', nameEn: 'Copper', period: 4, group: '1B', groupNum: 11, category: 'transition', atomicRadiusPm: 128, ie1Kj: 745, electronegativity: 1.90, electronAffinityKj: 118, metallicCharacter: 6.5 },
  { z: 30, symbol: 'Zn', nameTr: 'Çinko', nameEn: 'Zinc', period: 4, group: '2B', groupNum: 12, category: 'transition', atomicRadiusPm: 134, ie1Kj: 906, electronegativity: 1.65, electronAffinityKj: 0, metallicCharacter: 6 },
  { z: 31, symbol: 'Ga', nameTr: 'Galyum', nameEn: 'Gallium', period: 4, group: '3A', groupNum: 13, category: 'post-transition', atomicRadiusPm: 135, ie1Kj: 579, electronegativity: 1.81, electronAffinityKj: 29, metallicCharacter: 5.5 },
  { z: 32, symbol: 'Ge', nameTr: 'Germanyum', nameEn: 'Germanium', period: 4, group: '4A', groupNum: 14, category: 'metalloid', atomicRadiusPm: 122, ie1Kj: 762, electronegativity: 2.01, electronAffinityKj: 119, metallicCharacter: 4.5 },
  { z: 33, symbol: 'As', nameTr: 'Arsenik', nameEn: 'Arsenic', period: 4, group: '5A', groupNum: 15, category: 'metalloid', atomicRadiusPm: 119, ie1Kj: 947, electronegativity: 2.18, electronAffinityKj: 78, metallicCharacter: 3.5 },
  { z: 34, symbol: 'Se', nameTr: 'Selenyum', nameEn: 'Selenium', period: 4, group: '6A', groupNum: 16, category: 'nonmetal', atomicRadiusPm: 116, ie1Kj: 941, electronegativity: 2.55, electronAffinityKj: 195, metallicCharacter: 2.5 },
  { z: 35, symbol: 'Br', nameTr: 'Brom', nameEn: 'Bromine', period: 4, group: '7A', groupNum: 17, category: 'halogen', atomicRadiusPm: 114, ie1Kj: 1140, electronegativity: 2.96, electronAffinityKj: 325, metallicCharacter: 1 },
  { z: 36, symbol: 'Kr', nameTr: 'Kripton', nameEn: 'Krypton', period: 4, group: '8A', groupNum: 18, category: 'noble', atomicRadiusPm: 110, ie1Kj: 1351, electronegativity: 3.00, electronAffinityKj: 0, metallicCharacter: 0 },
  // Key heavy elements & boundary element Og 118
  { z: 47, symbol: 'Ag', nameTr: 'Gümüş', nameEn: 'Silver', period: 5, group: '1B', groupNum: 11, category: 'transition', atomicRadiusPm: 144, ie1Kj: 731, electronegativity: 1.93, electronAffinityKj: 126, metallicCharacter: 6.5 },
  { z: 53, symbol: 'I', nameTr: 'İyot', nameEn: 'Iodine', period: 5, group: '7A', groupNum: 17, category: 'halogen', atomicRadiusPm: 133, ie1Kj: 1008, electronegativity: 2.66, electronAffinityKj: 295, metallicCharacter: 1.5 },
  { z: 55, symbol: 'Cs', nameTr: 'Sezyum', nameEn: 'Caesium', period: 6, group: '1A', groupNum: 1, category: 'alkali', atomicRadiusPm: 265, ie1Kj: 376, electronegativity: 0.79, electronAffinityKj: 45, metallicCharacter: 10 },
  { z: 56, symbol: 'Ba', nameTr: 'Baryum', nameEn: 'Barium', period: 6, group: '2A', groupNum: 2, category: 'alkaline', atomicRadiusPm: 222, ie1Kj: 503, electronegativity: 0.89, electronAffinityKj: 14, metallicCharacter: 8 },
  { z: 79, symbol: 'Au', nameTr: 'Altın', nameEn: 'Gold', period: 6, group: '1B', groupNum: 11, category: 'transition', atomicRadiusPm: 144, ie1Kj: 890, electronegativity: 2.54, electronAffinityKj: 223, metallicCharacter: 5 },
  { z: 80, symbol: 'Hg', nameTr: 'Cıva', nameEn: 'Mercury', period: 6, group: '2B', groupNum: 12, category: 'transition', atomicRadiusPm: 151, ie1Kj: 1007, electronegativity: 2.00, electronAffinityKj: 0, metallicCharacter: 5.5 },
  { z: 82, symbol: 'Pb', nameTr: 'Kurşun', nameEn: 'Lead', period: 6, group: '4A', groupNum: 14, category: 'post-transition', atomicRadiusPm: 175, ie1Kj: 716, electronegativity: 2.33, electronAffinityKj: 35, metallicCharacter: 6 },
  { z: 118, symbol: 'Og', nameTr: 'Oganesson', nameEn: 'Oganesson', period: 7, group: '8A', groupNum: 18, category: 'noble', atomicRadiusPm: 152, ie1Kj: 860, electronegativity: null, electronAffinityKj: 5, metallicCharacter: 2 },
];

export const PeriodicTableHunter: React.FC<PeriodicTableHunterProps> = ({
  lang,
  highScore = 0,
  onFinish,
  onBack,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const g = GAMES_STRINGS[lang] ?? GAMES_STRINGS.en;
  const bestAtStart = useRef(highScore);
  const [isOver, setIsOver] = useState(false);
  const [feedbackN, setFeedbackN] = useState(0);

  // Game state
  const [gameMode, setGameMode] = useState<'hunt' | 'battle'>('hunt');
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [targetElement, setTargetElement] = useState<ElementInfo>(ELEMENTS_DB[0]);
  const [clueText, setClueText] = useState('');
  const [battleQuestion, setBattleQuestion] = useState<{
    prompt: string;
    elemA: ElementInfo;
    elemB: ElementInfo;
    correctSymbol: string;
    trapNote: string;
  } | null>(null);

  const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);

  const scoreRef = useRef(score);
  scoreRef.current = score;

  // Streak Multiplier: 1x (0-2), 2x (3-5), 3x (6-8), 4x (9+)
  const multiplier = streak >= 9 ? 4 : streak >= 6 ? 3 : streak >= 3 ? 2 : 1;

  // Clue generator for Element Hunt
  const generateHuntClue = useCallback(() => {
    const el = ELEMENTS_DB[Math.floor(Math.random() * ELEMENTS_DB.length)];
    setTargetElement(el);

    const clueTypes = [
      `Atom Numarası (Z) = ${el.z} olan element hangisidir?`,
      `Periyot ${el.period}, Grup ${el.group} (${el.category.toUpperCase()}) elementini bulun.`,
      `Sembolü "${el.symbol}" olan elementin periyodik cetveldeki yerini seçin.`,
      `Adı "${lang === 'en' ? el.nameEn : el.nameTr}" olan elementi bulun.`,
    ];
    if (el.z === 1) clueTypes.push('Evrende en çok bulunan, 1A grubundaki tek ametal element!');
    if (el.z === 2) clueTypes.push('Değerlik elektron sayısı 2 olmasına rağmen 8A grubunda yer alan soygaz!');
    if (el.z === 9) clueTypes.push('Elektronegatifliği en yüksek (3.98) element!');
    if (el.z === 17) clueTypes.push('Elektron ilgisi (349 kJ/mol) flor atomundan bile yüksek olan halojen!');
    if (el.z === 24) clueTypes.push('Elektron dizilimi [Ar] 4s¹ 3d⁵ küresel simetrisi gösteren geçiş metali!');
    if (el.z === 80) clueTypes.push('Oda koşullarında sıvı halde bulunan tek metal!');
    if (el.z === 118) clueTypes.push('Periyodik tablonun en son elementi (Z=118, 7. periyot soygazı)!');

    setClueText(clueTypes[Math.floor(Math.random() * clueTypes.length)]);
  }, [lang]);

  // Battle Question Generator (Trends with YKS traps!)
  const generateBattleQuestion = useCallback(() => {
    const battleTypes = ['ie', 'radius', 'electronegativity', 'metallic', 'affinity'];
    const chosenType = battleTypes[Math.floor(Math.random() * battleTypes.length)];

    let elemA = ELEMENTS_DB[Math.floor(Math.random() * ELEMENTS_DB.length)];
    let elemB = ELEMENTS_DB[Math.floor(Math.random() * ELEMENTS_DB.length)];
    while (elemA.z === elemB.z) {
      elemB = ELEMENTS_DB[Math.floor(Math.random() * ELEMENTS_DB.length)];
    }

    // High-yield YKS Traps selection
    const randTrap = Math.random();
    if (randTrap < 0.25) {
      // 2A vs 3A trap: Be (Z=4) vs B (Z=5) OR Mg (Z=12) vs Al (Z=13)
      if (Math.random() > 0.5) {
        elemA = ELEMENTS_DB.find((e) => e.z === 4)!; // Be
        elemB = ELEMENTS_DB.find((e) => e.z === 5)!; // B
      } else {
        elemA = ELEMENTS_DB.find((e) => e.z === 12)!; // Mg
        elemB = ELEMENTS_DB.find((e) => e.z === 13)!; // Al
      }
      setBattleQuestion({
        prompt: `Hangisinin 1. İyonlaşma Enerjisi DAHA YÜKSEKTİR?`,
        elemA,
        elemB,
        correctSymbol: elemA.symbol, // 2A > 3A ("3 aşağı 5 yukarı" kuralı!)
        trapNote: `ÖSYM Tuzağı: 2A grubu (${elemA.symbol}, s²) küresel simetriden dolayı 3A grubundan (${elemB.symbol}, s²p¹) daha yüksek iyonlaşma enerjisine sahiptir!`,
      });
      return;
    } else if (randTrap < 0.50) {
      // 5A vs 6A trap: N (Z=7) vs O (Z=8) OR P (Z=15) vs S (Z=16)
      if (Math.random() > 0.5) {
        elemA = ELEMENTS_DB.find((e) => e.z === 7)!; // N
        elemB = ELEMENTS_DB.find((e) => e.z === 8)!; // O
      } else {
        elemA = ELEMENTS_DB.find((e) => e.z === 15)!; // P
        elemB = ELEMENTS_DB.find((e) => e.z === 16)!; // S
      }
      setBattleQuestion({
        prompt: `Hangisinin 1. İyonlaşma Enerjisi DAHA YÜKSEKTİR?`,
        elemA,
        elemB,
        correctSymbol: elemA.symbol, // 5A > 6A
        trapNote: `ÖSYM Tuzağı: 5A grubu (${elemA.symbol}, p³) küresel simetriden dolayı 6A grubundan (${elemB.symbol}, p⁴) daha yüksek iyonlaşma enerjisine sahiptir!`,
      });
      return;
    } else if (randTrap < 0.70) {
      // Cl vs F Electron Affinity trap!
      elemA = ELEMENTS_DB.find((e) => e.z === 17)!; // Cl
      elemB = ELEMENTS_DB.find((e) => e.z === 9)!; // F
      setBattleQuestion({
        prompt: `Hangisinin Elektron İlgisi (EA) DAHA BÜYÜKTÜR?`,
        elemA,
        elemB,
        correctSymbol: 'Cl',
        trapNote: `ÖSYM Tuzağı: Klor (Cl)'un elektron ilgisi, Flor (F)'un küçük hacmindeki elektron itmesinden dolayı Flordan DAHA BÜYÜKTÜR!`,
      });
      return;
    }

    // Standard trend comparison
    if (chosenType === 'radius') {
      const isA = elemA.atomicRadiusPm > elemB.atomicRadiusPm;
      setBattleQuestion({
        prompt: `Hangisinin Atom Yarıçapı DAHA BÜYÜKTÜR?`,
        elemA,
        elemB,
        correctSymbol: isA ? elemA.symbol : elemB.symbol,
        trapNote: `Kural: Periyotta sola ve grupta aşağıya inildikçe atom yarıçapı artar ("Kardan Adam").`,
      });
    } else if (chosenType === 'electronegativity') {
      const enA = elemA.electronegativity ?? 0;
      const enB = elemB.electronegativity ?? 0;
      const isA = enA > enB;
      setBattleQuestion({
        prompt: `Hangisinin Elektronegatifliği DAHA YÜKSEKTİR?`,
        elemA,
        elemB,
        correctSymbol: isA ? elemA.symbol : elemB.symbol,
        trapNote: `Kural: Sağ-yukarı gidildikçe elektronegatiflik artar. En yüksek element Flordur (F = 3.98).`,
      });
    } else {
      const isA = elemA.metallicCharacter > elemB.metallicCharacter;
      setBattleQuestion({
        prompt: `Hangisinin Metalik Özelliği / Aktifliği DAHA YÜKSEKTİR?`,
        elemA,
        elemB,
        correctSymbol: isA ? elemA.symbol : elemB.symbol,
        trapNote: `Kural: Periyodik cetvelde sol-aşağı doğru metalik karakter ve elektron verme eğilimi artar.`,
      });
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

  // Handle Element Click in Hunt Mode
  const handleElementClick = (el: ElementInfo) => {
    if (!isPlaying || gameMode !== 'hunt') return;

    if (el.symbol === targetElement.symbol) {
      playCorrect();
      const earned = 100 * multiplier;
      setScore((s) => s + earned);
      setStreak((st) => st + 1);
      setFeedback({ message: `+${earned} Puan! Doğru: ${el.symbol} (${el.nameTr})`, isCorrect: true });
      generateHuntClue();
    } else {
      playWrong();
      setStreak(0);
      setScore((s) => Math.max(0, s - 25));
      setFeedbackN((n) => n + 1);
      setFeedback({ message: `Yanlış! Seçilen: ${el.symbol}, Hedef: ${targetElement.symbol}`, isCorrect: false });
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
      setFeedback({ message: `Doğru! (+${earned}) ${battleQuestion.trapNote}`, isCorrect: true });
      generateBattleQuestion();
    } else {
      playWrong();
      setStreak(0);
      setScore((s) => Math.max(0, s - 30));
      setFeedbackN((n) => n + 1);
      setFeedback({ message: `Tuzak! Doğru cevap: ${battleQuestion.correctSymbol}. ${battleQuestion.trapNote}`, isCorrect: false });
      generateBattleQuestion();
    }
  };

  const modeCards = (
    <div className="gm-modes">
      <button type="button" onClick={() => startGame('hunt')} className="gm-mode" data-sfx="start">
        <Crosshair size={26} style={{ color: 'var(--accent)' }} aria-hidden="true" />
        <strong>Öğe Avı (Element Hunt)</strong>
        <small>İpuçlarından elementi periyodik tabloda bul</small>
      </button>
      <button type="button" onClick={() => startGame('battle')} className="gm-mode gm-mode--gold" data-sfx="start">
        <Swords size={26} style={{ color: 'var(--gold)' }} aria-hidden="true" />
        <strong>Eğilimler Düellosu (Trends)</strong>
        <small>İyonlaşma enerjisi ve YKS tuzaklarını alt et</small>
      </button>
    </div>
  );

  return (
    <div className="gm gm--wide periodic-hunter-container">
      <GameHud title={t.games.periodicTitle} backLabel={t.games.backToHub} onBack={onBack}>
        <GameStat icon={<Trophy size={16} aria-hidden="true" />} label={g.best} value={Math.max(highScore, score)} tone="gold" />
        <GameStat icon={<Sparkles size={16} aria-hidden="true" />} label={g.score} value={score} tone="accent" />
        <GameStat
          icon={<Timer size={16} aria-hidden="true" />}
          label="Timer"
          value={`${timeLeft}s`}
          tone={timeLeft <= 10 && isPlaying ? 'bad' : undefined}
        />
      </GameHud>

      {!isPlaying && !isOver ? (
        <div className="ky-stage gm-intro">
          <div className="ky-floor" aria-hidden="true" />
          <span className="ky-tile ky-tile--lg" aria-hidden="true">
            <Crosshair size={30} />
          </span>
          <h2>{t.games.periodicTitle}</h2>
          <p>{t.games.periodicDesc}</p>
          {modeCards}
        </div>
      ) : !isPlaying && isOver ? (
        <div className="ky-card gm-result">
          <span className="ky-tile ky-tile--lg ky-tile--gold" aria-hidden="true">
            <Award size={30} />
          </span>
          <h2>{g.finished}</h2>
          <div className="gm-score ky-pop">{score}</div>
          <span className="ky-chip ky-chip--gold">
            <Trophy size={14} aria-hidden="true" />
            {score > 0 && score > bestAtStart.current ? g.newBest : `${g.best}: ${Math.max(highScore, score)}`}
          </span>
          <div className="gm-actions">
            <button type="button" onClick={() => startGame(gameMode)} className="ky-btn ky-btn--primary" data-sfx="start">
              <RotateCcw size={18} aria-hidden="true" />
              <span>{g.replay}</span>
            </button>
            <button type="button" onClick={onBack} className="ky-btn ky-btn--quiet">
              <ArrowLeft size={18} aria-hidden="true" className="gm-flip" />
              <span>{g.backToGames}</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="ky-track gm-progress" role="progressbar" aria-valuemin={0} aria-valuemax={60} aria-valuenow={timeLeft}>
            <div className={`ky-fill ${timeLeft <= 10 ? 'ky-fill--bad' : ''}`} style={{ inlineSize: `${(timeLeft / 60) * 100}%` }} />
          </div>

          <div className="ky-card gm-clue">
            <span className={`ky-tile ky-tile--sm ${gameMode === 'hunt' ? '' : 'ky-tile--gold'}`} aria-hidden="true">
              {gameMode === 'hunt' ? <Crosshair size={20} /> : <Swords size={20} />}
            </span>
            <div className="gm-clue-body">
              <span className="ky-eyebrow">{gameMode === 'hunt' ? 'GÖREV: ELEMENTİ BUL' : 'DÜELLO: DOĞRU TERCİHİ YAP'}</span>
              <p>{gameMode === 'hunt' ? clueText : battleQuestion?.prompt}</p>
            </div>
            {streak >= 3 && (
              <span className="gm-streak" key={streak}>
                <Flame size={14} aria-hidden="true" />
                <span>{streak}x &middot; {multiplier}x</span>
              </span>
            )}
          </div>

          {feedback && (
            <div
              key={feedbackN + (feedback.isCorrect ? 'ok' : 'bad')}
              className={`gm-feedback ${feedback.isCorrect ? 'ok' : 'bad ky-shake'}`}
              role="status"
            >
              {feedback.message}
            </div>
          )}

          {gameMode === 'hunt' ? (
            <>
              <div className="gm-pt-wrap ky-lead" tabIndex={0} role="group" aria-label={t.games.periodicTitle}>
                <div className="gm-pt-grid">
                  {ELEMENTS_DB.map((el) => (
                    <button
                      key={el.z}
                      type="button"
                      onClick={() => handleElementClick(el)}
                      className="gm-el"
                      data-cat={el.category}
                      style={{ gridColumn: el.groupNum, gridRow: el.period }}
                      title={`${el.z}. ${el.nameTr} (${el.symbol})\nPeriyot ${el.period}, Grup ${el.group}`}
                      aria-label={`${el.symbol} ${lang === 'en' ? el.nameEn : el.nameTr}`}
                    >
                      <small>{el.z}</small>
                      <b>{el.symbol}</b>
                    </button>
                  ))}
                </div>
              </div>
              <p className="gm-pt-hint">{g.scrollHint}</p>
            </>
          ) : battleQuestion ? (
            <div className="gm-duel ky-lead">
              {[battleQuestion.elemA, battleQuestion.elemB].map((elem) => (
                <button key={elem.z} type="button" onClick={() => handleBattleAnswer(elem.symbol)} className="gm-duel-card">
                  <span className="ky-tile ky-tile--lg ky-tile--blue" aria-hidden="true">
                    {elem.symbol}
                  </span>
                  <strong>{lang === 'en' ? elem.nameEn : elem.nameTr}</strong>
                  <span className="gm-chiprow">
                    <span className="ky-chip">Z = {elem.z}</span>
                    <span className="ky-chip">
                      {elem.period}. P, {elem.group}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};
