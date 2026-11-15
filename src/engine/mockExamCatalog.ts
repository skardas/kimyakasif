import { L } from '../data/units/L';
import { compileUnitQuestions } from './questionGenerator';
import type {
  CompiledQuestion,
  LanguageCode,
  LocalizedText,
  MockExamCategory,
  MockExamDefinition,
  MockExamDifficultyTier,
} from '../types/chemistry';
import type { ChemistryUnitSeedData } from '../data/units/types';

export interface MockExamSeedSpec {
  id: string;
  category: MockExamCategory;
  examNumber: number;
  difficultyTier: MockExamDifficultyTier;
  questionCount: number;
  durationMinutes: number;
  accentColor: string;
  visualFocus?: boolean;
  unitIds?: string[];
  title: LocalizedText;
  subtitle: LocalizedText;
  customBadge?: LocalizedText;
}

const TIER_BADGES: Record<MockExamDifficultyTier, LocalizedText> = {
  temel: L(
    'Temel & Kavram',
    'Foundation & Core',
    'Basis & Konzepte',
    'Base & Concepts',
    'База и понятия',
    'تأسيسي ومفاهيم',
    '基础与概念巩固',
    'Bingehîn & Têgeh'
  ),
  standart: L(
    'Standart Karma',
    'Standard Exam Mix',
    'Prüfungsstandard',
    'Standard Examen',
    'Стандарт экзамена',
    'المستوى القياسي',
    '标准综合',
    'Tevliheviya Standard'
  ),
  ileri: L(
    'İleri & Şekilli',
    'Advanced & Visual',
    'Fortgeschritten & Grafik',
    'Avancé & Schémas',
    'Сложные и со схемами',
    'متقدم ومصوّر',
    '进阶与图表',
    'Pêşketî & Dîtbarî'
  ),
  'osym-prova': L(
    'TG Derece Provası',
    'Top-Rank Rehearsal',
    'Spitzenrang-Probe',
    'Simulation Élite',
    'Рейтинговая репетиция',
    'بروفة التفوق العام',
    '全国高分冲刺模考',
    'Provaya Pileyên Jorîn'
  ),
};

const VISUAL_BADGE: LocalizedText = L(
  '%100 Şekilli & Grafikli',
  '100% Visual & Diagrams',
  '100 % Diagramme & Grafiken',
  '100 % Schémas & Graphiques',
  '100 % схемы и графики',
  '100% رسوم ومخططات',
  '100% 图表题',
  '%100 Wêne & Grafîk'
);

function resolveBranchTier(n: number): {
  tier: MockExamDifficultyTier;
  visualFocus: boolean;
} {
  if (n <= 10) return { tier: 'temel', visualFocus: false };
  if (n <= 25) return { tier: 'standart', visualFocus: false };
  if (n <= 35) return { tier: 'ileri', visualFocus: true };
  return { tier: 'osym-prova', visualFocus: false };
}

function buildTytSubtitle(tier: MockExamDifficultyTier): LocalizedText {
  switch (tier) {
    case 'temel':
      return L(
        'Temel & kavram oturtma: Kimya bilimi, atom, periyodik sistem, güçlü/zayıf bağlar, maddenin halleri ve karışımlar.',
        'Core concept mastery: Chemistry as science, atomic structure, bonds, states of matter and mixtures.',
        'Grundlagen & Konzepte: Chemie als Wissenschaft, Atomstruktur, Bindungen, Aggregatzustände und Gemische.',
        'Maîtrise des concepts : Chimie science, atome, liaisons chimiques, états de la matière et mélanges.',
        'Основные понятия: химия как наука, строение атома, периодическая система, прочные и слабые связи, агрегатные состояния и смеси.',
        'ترسيخ المفاهيم الأساسية: علم الكيمياء، الذرة، الروابط الكيميائية، حالات المادة والمخاليط.',
        '基础与概念巩固：化学科学、原子与元素周期表、化学键与分子间作用力、物质的状态与混合物。',
        'Bingeh & têgeh: Zanista kîmyayê, atom, tabloya periyodîk, girêdanên bihêz/qels, rewşên madeyê û tevlihevî.'
      );
    case 'standart':
      return L(
        'Tam ÖSYM müfredat dengesi: 7 özgün soruyla 9. ve 10. sınıf TYT kimya genel tarama provası.',
        'Standard exam balance: 7 curated questions spanning Grade 9 & 10 chemistry.',
        'Standardmäßige Prüfungsverteilung: 7 kuratierte Fragen für die Klassen 9 und 10.',
        "Équilibre officiel de l'examen : 7 questions types couvrant la chimie de 9e et 10e années.",
        'Полный баланс экзаменационной программы: 7 оригинальных заданий по химии 9–10 классов.',
        'توزيع قياسي وفق معايير الاختبار: 7 أسئلة متوازنة في كيمياء الصفين التاسع والعاشر.',
        '按考试大纲比例命题：7 道原创题，全面复习 9、10 年级化学。',
        'Hevsengiya tevahî ya mufredata azmûnê: provaya giştî ya kîmyaya pola 9 û 10 bi 7 pirsên orîjînal.'
      );
    case 'ileri':
      return L(
        '%100 Şekilli & grafikli: Laboratuvar düzenekleri, Bohr yörüngeleri, faz grafikleri ve pistonlu kaplar.',
        '100% Visual & diagrams: Laboratory apparatus, Bohr orbits, phase diagrams and piston cylinders.',
        '100 % Visuell & Grafiken: Laboraufbauten, Bohr-Orbitale, Phasendiagramme und Kolbenbehälter.',
        '100 % Schémas et graphiques : Verrerie de labo, modèle de Bohr, diagrammes de phase et pistons.',
        '100 % схемы и графики: лабораторные установки, орбиты Бора, фазовые диаграммы и сосуды с поршнем.',
        '100% أسئلة مصوّرة ومخططات: أجهزة المختبر، مدارات بور، منحنيات الأطوار والأسطوانات المزودة بمكبس.',
        '100% 图表题：实验装置、玻尔轨道、物态变化图像与带活塞的容器。',
        '%100 wêne & grafîk: Amûrên laboratuwarê, xulgehên Bohr, grafîkên rewşê û firaxên bi piston.'
      );
    case 'osym-prova':
      return L(
        'Türkiye Geneli Derece Provası: Tuzaklı kazanımlar, molekül polarlığı, mol hesapları ve asit-baz tuzakları.',
        'Final practice exam: Tricky traps, molecular polarity, mole stoichiometry and acid-base metal reactions.',
        'Abschlussprobe: Prüfungsfallen, Molekülpolarität, Molrechnungen und Säure-Base-Metalle.',
        "Examen blanc final : Pièges d'examen, polarité, stœchiométrie et réactions acides-métaux.",
        'Итоговая репетиция: задания-ловушки, полярность молекул, расчёты количества вещества и кислотно-основные ловушки.',
        'الاختبار التجريبي النهائي: أسئلة الفخاخ، قطبية الجزيئات، حسابات المولات وتفاعلات الأحماض مع الفلزات.',
        '冲刺模拟：易错陷阱、分子极性、物质的量计算与酸碱陷阱。',
        'Provaya dawî: Xefikên azmûnê, polarîteya molekulan, hesabên molê û xefikên asîd-baz.'
      );
  }
}

function buildAytSubtitle(tier: MockExamDifficultyTier): LocalizedText {
  switch (tier) {
    case 'temel':
      return L(
        'Temel & kavram oturtma: Kuantum orbitalleri, ideal gaz yasası, molarite, entalpi ve denge bağıntısı.',
        'Core concept mastery: Quantum orbitals, ideal gas law, molarity, enthalpy and equilibrium expressions.',
        'Grundlagen & Konzepte: Quantenorbitale, ideales Gasgesetz, Molarität, Enthalpie und Gleichgewichtskonstante.',
        "Maîtrise des concepts : Orbitales quantiques, gaz parfaits, molarité, enthalpie et constante d'équilibre.",
        'Основные понятия: квантовые орбитали, уравнение состояния идеального газа, молярная концентрация, энтальпия и выражение константы равновесия.',
        'ترسيخ المفاهيم الأساسية: المدارات الكمومية، قانون الغاز المثالي، المولارية، المحتوى الحراري وثابت الاتزان.',
        '基础与概念巩固：量子轨道、理想气体定律、物质的量浓度、焓与平衡常数表达式。',
        'Bingeh & têgeh: Orbîtalên kuantumê, zagona gaza îdeal, molarîte, entalpî û hevkêşeya hevsengiyê.'
      );
    case 'standart':
      return L(
        'Tam ÖSYM müfredat dengesi: 13 özgün soruyla 11. ve 12. sınıf AYT kimya tam kapsamlı alan provası.',
        'Standard exam balance: 13 curated questions covering all of Grade 11 & 12 chemistry.',
        'Standardmäßige Prüfungsverteilung: 13 kuratierte Fragen für die Klassen 11 und 12 im Fach Chemie.',
        "Équilibre officiel de l'examen : 13 questions types couvrant toute la chimie de 11e et 12e années.",
        'Полный баланс экзаменационной программы: 13 оригинальных заданий по всей химии 11–12 классов.',
        'توزيع قياسي وفق معايير الاختبار: 13 سؤالاً متكاملاً تغطي منهج الكيمياء للصفين الحادي عشر والثاني عشر.',
        '按考试大纲比例命题：13 道原创题，全面考查 11、12 年级化学。',
        'Hevsengiya tevahî ya mufredata azmûnê: provaya berfireh a kîmyaya pola 11 û 12 bi 13 pirsên orîjînal.'
      );
    case 'ileri':
      return L(
        '%100 Şekilli & grafikli: Potansiyel enerji eğrileri, Maxwell-Boltzmann, titrasyon büreti, Daniell pili ve Hoffman hücresi.',
        '100% Visual & diagrams: Potential energy curves, Maxwell-Boltzmann, titration burettes, Daniell cells and Hoffman voltameter.',
        '100 % Visuell & Grafiken: Potenzialenergiekurven, Maxwell-Boltzmann, Titrationsbürette, Daniell-Element und Hofmann-Zelle.',
        '100 % Schémas et graphiques : Énergie potentielle, Maxwell-Boltzmann, burette de titrage, pile Daniell et cellule de Hoffman.',
        '100 % схемы и графики: кривые потенциальной энергии, распределение Максвелла — Больцмана, бюретка для титрования, элемент Даниэля — Якоби и аппарат Гофмана.',
        '100% أسئلة مصوّرة ومخططات: منحنيات طاقة الوضع، ماكسويل-بولتزمان، سحاحة المعايرة، خلية دانيال وفولتامتر هوفمان.',
        '100% 图表题：势能曲线、麦克斯韦-玻尔兹曼分布、滴定管、丹尼尔电池与霍夫曼电解器。',
        '%100 wêne & grafîk: Xêzên enerjiya potansiyel, Maxwell-Boltzmann, bureta tîtrasyonê, pîla Daniell û voltametreya Hoffman.'
      );
    case 'osym-prova':
      return L(
        'Türkiye Geneli Derece Provası: Pil gerilimi ve derişim pilleri, Kçç ortak iyon, Le Chatelier şokları, VSEPR ve Markovnikov mekanizmaları.',
        'Final practice exam: cell voltage and concentration cells, Ksp common ion, Le Chatelier shifts, VSEPR and Markovnikov mechanisms.',
        'Abschlussprobe: Zellspannung und Konzentrationszellen, Ksp-Gemeinsamer-Ion-Effekt, Le Chatelier, VSEPR und Markovnikov.',
        "Examen blanc final : tension de pile et piles de concentration, effet d'ion commun Ksp, Le Chatelier, VSEPR et Markovnikov.",
        'Итоговая репетиция: ЭДС и концентрационные элементы, Ksp и одноимённый ион, смещение равновесия по Ле Шателье, VSEPR и правило Марковникова.',
        'الاختبار التجريبي النهائي: جهد الخلية وخلايا التركيز، الأيون المشترك Ksp، مبدأ لوشاتلييه، أشكال VSEPR وقاعدة ماركوفنيكوف.',
        '冲刺模拟：电池电压与浓差电池、Ksp 与同离子效应、勒夏特列原理、VSEPR 与马氏规则。',
        'Provaya dawî: Voltaja pîlê û pîlên tîrbûnê, îyona hevpar û Ksp, guherînên Le Chatelier, VSEPR û mekanîzmayên Markovnikov.'
      );
  }
}

// Exactly 40 TYT Practice Exams (7 questions each)
const TYT_SPECS: MockExamSeedSpec[] = Array.from({ length: 40 }, (_, i) => {
  const n = i + 1;
  const padded = String(n).padStart(2, '0');
  const { tier, visualFocus } = resolveBranchTier(n);
  const colors: Record<MockExamDifficultyTier, string> = {
    temel: '#0d9488',
    standart: '#3b82f6',
    ileri: '#06b6d4',
    'osym-prova': '#8b5cf6',
  };
  return {
    id: `tyt-trial-${padded}`,
    category: 'TYT_BRANCH',
    examNumber: n,
    difficultyTier: tier,
    questionCount: 7,
    durationMinutes: 10,
    accentColor: colors[tier],
    visualFocus,
    title: L(
      `TYT Kimya Branş Denemesi #${n}`,
      `Basic Chemistry Mock Exam #${n}`,
      `Chemie-Probeprüfung Grundlagen #${n}`,
      `Examen blanc de chimie – Fondamentaux #${n}`,
      `Пробный тест по химии, базовый уровень, № ${n}`,
      `اختبار تجريبي في الكيمياء – المستوى الأساسي #${n}`,
      `基础化学专项模考 #${n}`,
      `Azmûna Ceribandinê ya Kîmyayê – Bingehîn #${n}`
    ),
    subtitle: buildTytSubtitle(tier),
  };
});

// Exactly 40 AYT Practice Exams (13 questions each)
const AYT_SPECS: MockExamSeedSpec[] = Array.from({ length: 40 }, (_, i) => {
  const n = i + 1;
  const padded = String(n).padStart(2, '0');
  const { tier, visualFocus } = resolveBranchTier(n);
  const colors: Record<MockExamDifficultyTier, string> = {
    temel: '#059669',
    standart: '#6366f1',
    ileri: '#f59e0b',
    'osym-prova': '#ec4899',
  };
  return {
    id: `ayt-trial-${padded}`,
    category: 'AYT_BRANCH',
    examNumber: n,
    difficultyTier: tier,
    questionCount: 13,
    durationMinutes: 20,
    accentColor: colors[tier],
    visualFocus,
    title: L(
      `AYT Kimya Branş Denemesi #${n}`,
      `Advanced Chemistry Mock Exam #${n}`,
      `Chemie-Probeprüfung Vertiefung #${n}`,
      `Examen blanc de chimie – Approfondissement #${n}`,
      `Пробный тест по химии, углублённый уровень, № ${n}`,
      `اختبار تجريبي في الكيمياء – المستوى المتقدم #${n}`,
      `进阶化学专项模考 #${n}`,
      `Azmûna Ceribandinê ya Kîmyayê – Pêşketî #${n}`
    ),
    subtitle: buildAytSubtitle(tier),
  };
});

export const ALL_MOCK_EXAM_SPECS: MockExamSeedSpec[] = [
  ...TYT_SPECS,
  ...AYT_SPECS,
];

// Mulberry32 deterministic pseudo-random generator
function mulberry32(seed: number): () => number {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashSeed(str: string): number {
  let hash = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    hash = Math.imul(hash ^ str.charCodeAt(i), 3432918353);
    hash = (hash << 13) | (hash >>> 19);
  }
  return hash >>> 0;
}

function seededShuffle<T>(array: readonly T[], rng: () => number): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function scoreCandidate(
  q: CompiledQuestion,
  tier: MockExamDifficultyTier,
  visualFocus: boolean,
  jitter: number
): number {
  // A question is visual when it carries a unit diagram or its own authored figure (şekilli soru).
  const hasVisual = q.diagram !== undefined || q.figure !== undefined;
  let score = jitter;

  if (visualFocus && hasVisual) {
    score += 1000;
  }

  switch (tier) {
    case 'temel':
      if (q.difficulty === 'easy') score += 50;
      else if (q.difficulty === 'medium') score += 35;
      else if (q.difficulty === 'hard') score += 10;
      else score += 15;
      if (!hasVisual) score += 15;
      break;
    case 'standart':
      if (q.difficulty === 'medium') score += 40;
      else if (q.difficulty === 'hard') score += 35;
      else if (q.difficulty === 'osym') score += 35;
      else score += 20;
      break;
    case 'ileri':
      if (hasVisual) score += 1000;
      if (q.difficulty === 'hard') score += 45;
      else if (q.difficulty === 'osym') score += 40;
      else if (q.difficulty === 'medium') score += 25;
      break;
    case 'osym-prova':
      if (q.difficulty === 'osym') score += 50;
      else if (q.difficulty === 'hard') score += 45;
      else if (q.difficulty === 'medium') score += 20;
      if (hasVisual) score += 25;
      break;
  }

  return score;
}

function pickBestFromUnit(
  pool: CompiledQuestion[],
  seedKey: string,
  tier: MockExamDifficultyTier,
  visualFocus: boolean,
  usedIds: Set<string>
): CompiledQuestion | null {
  if (pool.length === 0) return null;
  const rng = mulberry32(hashSeed(seedKey));
  const ranked = pool
    .map((q) => ({ q, s: scoreCandidate(q, tier, visualFocus, rng() * 10) }))
    .sort((a, b) => b.s - a.s);

  const unused = ranked.find((entry) => !usedIds.has(entry.q.id));
  const chosen = (unused ?? ranked[0]).q;
  usedIds.add(chosen.id);
  return chosen;
}

// TYT Chemistry units are u01 through u10
const TYT_UNIT_IDS = ['u01', 'u02', 'u03', 'u04', 'u05', 'u06', 'u07', 'u08', 'u09', 'u10'];

// AYT Chemistry units are u11 through u24
const AYT_UNIT_IDS = [
  'u11', 'u12', 'u13', 'u14', 'u15', 'u16', 'u17',
  'u18', 'u19', 'u20', 'u21', 'u22', 'u23', 'u24'
];

/**
 * Units each tier's subtitle explicitly promises. They are always included so the exam really
 * covers what its card describes (previously a plain rotation could drop, e.g., "Kimya bilimi,
 * atom, periyodik sistem" from a 'temel' TYT exam whose subtitle lists exactly those topics).
 */
const CLAIMED_UNITS: Record<'TYT_BRANCH' | 'AYT_BRANCH', Record<MockExamDifficultyTier, string[]>> = {
  TYT_BRANCH: {
    temel: ['u01', 'u02', 'u03', 'u04', 'u08'], // kimya bilimi, atom/periyodik sistem, bağlar, maddenin halleri, karışımlar
    standart: [],
    ileri: ['u01', 'u02', 'u04', 'u06'], // laboratuvar düzenekleri, Bohr, faz grafikleri, pistonlu kaplar
    'osym-prova': ['u03', 'u06', 'u09'], // molekül polarlığı, mol hesapları, asit-baz
  },
  AYT_BRANCH: {
    temel: ['u11', 'u12', 'u14', 'u16', 'u18'], // orbitaller, ideal gaz, molarite, entalpi, denge
    standart: [],
    ileri: ['u13', 'u17', 'u19', 'u21', 'u22'], // Maxwell-Boltzmann/potansiyel enerji, titrasyon, Daniell, Hoffman
    'osym-prova': ['u18', 'u20', 'u21', 'u23', 'u24'], // Le Chatelier, Kçç, pil gerilimi, VSEPR, Markovnikov
  },
};

/**
 * Builds the 7 questions for a specific TYT trial by sampling across 7 distinct TYT units.
 */
function buildTytTrialQuestions(
  spec: MockExamSeedSpec,
  getPool: (uId: string) => CompiledQuestion[],
  usedIds: Set<string>
): CompiledQuestion[] {
  const rng = mulberry32(hashSeed(spec.id));
  // Units promised by the subtitle first, then a deterministic rotation of the remaining TYT units.
  const required = CLAIMED_UNITS.TYT_BRANCH[spec.difficultyTier];
  const others = TYT_UNIT_IDS.filter((u) => !required.includes(u));
  const offset = (spec.examNumber - 1) % others.length;
  const rotated = [...others.slice(offset), ...others.slice(0, offset)];
  const chosenUnits = [...required, ...rotated]
    .slice(0, 7)
    .sort((a, b) => TYT_UNIT_IDS.indexOf(a) - TYT_UNIT_IDS.indexOf(b));

  const picked: CompiledQuestion[] = [];
  for (let i = 0; i < chosenUnits.length; i++) {
    const uId = chosenUnits[i];
    const q = pickBestFromUnit(
      getPool(uId),
      `${spec.id}::slot${i}`,
      spec.difficultyTier,
      Boolean(spec.visualFocus),
      usedIds
    );
    if (q) picked.push(q);
  }

  return picked.sort((a, b) => {
    const numA = parseInt(a.unitId.replace('u', ''), 10);
    const numB = parseInt(b.unitId.replace('u', ''), 10);
    return numA - numB;
  });
}

/**
 * Builds the 13 questions for a specific AYT trial by sampling across 13 distinct AYT units (out of 14).
 */
function buildAytTrialQuestions(
  spec: MockExamSeedSpec,
  getPool: (uId: string) => CompiledQuestion[],
  usedIds: Set<string>
): CompiledQuestion[] {
  const rng = mulberry32(hashSeed(spec.id));
  // Skip one AYT unit per exam (rotating), never one that the subtitle promises.
  const required = CLAIMED_UNITS.AYT_BRANCH[spec.difficultyTier];
  const skippable = AYT_UNIT_IDS.filter((u) => !required.includes(u));
  const skipped = skippable[(spec.examNumber - 1) % skippable.length];
  const chosenUnits = AYT_UNIT_IDS.filter((u) => u !== skipped);

  const picked: CompiledQuestion[] = [];
  for (let i = 0; i < chosenUnits.length; i++) {
    const uId = chosenUnits[i];
    const q = pickBestFromUnit(
      getPool(uId),
      `${spec.id}::slot${i}`,
      spec.difficultyTier,
      Boolean(spec.visualFocus),
      usedIds
    );
    if (q) picked.push(q);
  }

  return picked.sort((a, b) => {
    const numA = parseInt(a.unitId.replace('u', ''), 10);
    const numB = parseInt(b.unitId.replace('u', ''), 10);
    return numA - numB;
  });
}

/**
 * Retrieves the full 80 mock exams catalog localized to the specified language.
 */
export function getMockExamCatalog(lang: LanguageCode = 'tr'): MockExamDefinition[] {
  return ALL_MOCK_EXAM_SPECS.map((spec) => ({
    id: spec.id,
    category: spec.category,
    examNumber: spec.examNumber,
    title: spec.title[lang] || spec.title.tr,
    subtitle: spec.subtitle[lang] || spec.subtitle.tr,
    badgeText: (spec.customBadge ?? TIER_BADGES[spec.difficultyTier])[lang] || TIER_BADGES[spec.difficultyTier].tr,
    difficultyTier: spec.difficultyTier,
    questionCount: spec.questionCount,
    durationMinutes: spec.durationMinutes,
    accentColor: spec.accentColor,
    visualFocus: spec.visualFocus,
  }));
}

/**
 * Compiles and assembles the exact questions for any specified mock exam.
 * Returns 7 questions for TYT trials, 13 questions for AYT trials.
 */
export function buildMockExamQuestions(
  examId: string,
  units: ChemistryUnitSeedData[],
  lang: LanguageCode = 'tr'
): CompiledQuestion[] {
  const spec =
    ALL_MOCK_EXAM_SPECS.find((s) => s.id === examId) ??
    (examId === TG_PROVA_SPEC.id ? TG_PROVA_SPEC : ALL_MOCK_EXAM_SPECS[0]);
  const unitById = new Map(units.map((u) => [u.id, u]));
  const compiledCache = new Map<string, CompiledQuestion[]>();

  const getPool = (uId: string): CompiledQuestion[] => {
    const cached = compiledCache.get(uId);
    if (cached) return cached;
    const u = unitById.get(uId);
    const built = u ? compileUnitQuestions(u, lang) : [];
    compiledCache.set(uId, built);
    return built;
  };

  const usedIds = new Set<string>();

  if (spec.id === TG_PROVA_SPEC.id || spec.category === 'YKS_FULL') {
    return buildTgProvaQuestions(units, lang);
  }

  if (spec.category === 'TYT_BRANCH') {
    return buildTytTrialQuestions(spec, getPool, usedIds);
  }

  if (spec.category === 'AYT_BRANCH') {
    return buildAytTrialQuestions(spec, getPool, usedIds);
  }

  return [];
}

export interface TgPercentileResult {
  netScore: number;
  percentile: number;
  percentileFormatted: string;
  estimatedRankRange: string;
  tierTitle: string;
  tierColor: string;
  badgeIcon: string;
  feedbackMessage: string;
}

export const TG_PROVA_SPEC: MockExamSeedSpec = {
  id: 'tg-derece-provası',
  category: 'YKS_FULL',
  examNumber: 1,
  difficultyTier: 'osym-prova',
  questionCount: 20,
  durationMinutes: 30,
  accentColor: '#f59e0b',
  visualFocus: true,
  title: L(
    'Türkiye Geneli YKS Kimya Derece Provası',
    'Final Chemistry Practice Exam',
    'Chemie-Abschlussprobe',
    'Examen blanc final de chimie',
    'Итоговая репетиция по химии',
    'الاختبار التجريبي النهائي في الكيمياء',
    '化学冲刺模拟考',
    'Provaya Dawî ya Kîmyayê'
  ),
  subtitle: L(
    '20 Soru (7 TYT + 13 AYT) • 30 Dakika • Gerçek YKS Zorluğu & ÖSYM Yüzdelik Dilim Tahmini',
    '20 Questions (7 Basic + 13 Advanced) • 30 Minutes • Real Exam Difficulty & Rank Percentile Estimation',
    '20 Fragen (7 Grundlagen + 13 Vertiefung) • 30 Minuten • Reale Prüfungsschwere & Perzentil-Schätzung',
    '20 questions (7 Fondamentaux + 13 Approfondissement) • 30 minutes • Difficulté Réelle & Estimation de Rang',
    '20 вопросов (7 базового + 13 углублённого уровня) • 30 минут • реальная сложность экзамена и оценка процентиля',
    '20 سؤالاً (7 من المستوى الأساسي + 13 من المستوى المتقدم) • 30 دقيقة • صعوبة حقيقية وحساب النسبة المئوية',
    '20 题(7 题基础 + 13 题进阶) • 30 分钟 • 真实考试难度与百分位排名估算',
    '20 Pirs (7 Bingehîn + 13 Pêşketî) • 30 Xulek • Zehmetiya Rastîn & Texmîna Rêzê'
  ),
  customBadge: L(
    '🏆 TG Derece Provası',
    '🏆 Final practice exam',
    '🏆 Abschlussprobe',
    '🏆 Examen blanc final',
    '🏆 Итоговая репетиция',
    '🏆 الاختبار النهائي',
    '🏆 冲刺模拟',
    '🏆 Provaya dawî'
  ),
};

function estimateTgPercentileTr(netScore: number): TgPercentileResult {
  const net = Number(netScore.toFixed(2));
  if (net >= 19.5) {
    return {
      netScore: net,
      percentile: 0.05,
      percentileFormatted: 'İlk %0.05',
      estimatedRankRange: 'İlk 500',
      tierTitle: 'Şampiyonlar Ligi & Türkiye Derecesi',
      tierColor: '#f59e0b',
      badgeIcon: '👑',
      feedbackMessage: 'Kusursuz performans! Türkiye genelinde ilk 500 bandında, zirvede bir sonuç.',
    };
  }
  if (net >= 18.0) {
    return {
      netScore: net,
      percentile: 0.8,
      percentileFormatted: 'İlk %0.8',
      estimatedRankRange: '500 - 2.500',
      tierTitle: 'Tıp Fakülteleri & Boğaziçi / ODTÜ Düzeyi',
      tierColor: '#10b981',
      badgeIcon: '🏆',
      feedbackMessage: 'Olağanüstü başarı! Hedeflediğin en prestijli tıp ve mühendislik bölümleri için fazlasıyla yeterli.',
    };
  }
  if (net >= 16.0) {
    return {
      netScore: net,
      percentile: 2.5,
      percentileFormatted: 'İlk %2.5',
      estimatedRankRange: '2.500 - 8.000',
      tierTitle: 'Prestijli Mühendislik & Diş / Eczacılık',
      tierColor: '#3b82f6',
      badgeIcon: '🥇',
      feedbackMessage: 'Çok güçlü bir net! İlk 10.000 derece bandındasın, 1-2 küçük eksiği Hata Defteri ile kapattığında zirvedesin.',
    };
  }
  if (net >= 13.5) {
    return {
      netScore: net,
      percentile: 6.0,
      percentileFormatted: 'İlk %6.0',
      estimatedRankRange: '8.000 - 18.000',
      tierTitle: 'Üst Düzey Başarı Dilimi',
      tierColor: '#8b5cf6',
      badgeIcon: '🥈',
      feedbackMessage: "Harika bir temel! Türkiye genelinde adayların %94'ünü geride bıraktın.",
    };
  }
  if (net >= 10.0) {
    return {
      netScore: net,
      percentile: 15.0,
      percentileFormatted: 'İlk %15.0',
      estimatedRankRange: '18.000 - 45.000',
      tierTitle: 'Güçlü Temel & Gelişime Açık',
      tierColor: '#06b6d4',
      badgeIcon: '🎯',
      feedbackMessage: 'Temel kavramlar sağlam. AYT denge, elektrokimya ve organik reaksiyon tekrarlarıyla netini hızla artırabilirsin.',
    };
  }
  if (net >= 6.0) {
    return {
      netScore: net,
      percentile: 35.0,
      percentileFormatted: 'İlk %35.0',
      estimatedRankRange: '45.000 - 100.000',
      tierTitle: 'Temel Yeterlilik Düzeyi',
      tierColor: '#eab308',
      badgeIcon: '📚',
      feedbackMessage: 'Konu eksiklerini tamamlama aşamasındasın. Görsel ders slaytlarını ve ünite test setlerini çözmelisin.',
    };
  }
  return {
    netScore: net,
    percentile: 55.0,
    percentileFormatted: 'Alt %50',
    estimatedRankRange: '100.000+',
    tierTitle: 'Başlangıç Aşaması',
    tierColor: '#ef4444',
    badgeIcon: '🌱',
    feedbackMessage: 'Düzenli konu çalışması ve flashcard tekrarlarıyla kimya netlerini adım adım inşa edeceğiz.',
  };
}

/**
 * Non-Turkish wording for the top-rank rehearsal result. The Turkish texts refer to
 * Turkish national ranks, universities and exam names, so other languages get a
 * neutral tier title and feedback, and no national rank range (empty string).
 * Index order follows the tiers in estimateTgPercentileTr (best first).
 */
type TgLocaleText = { titles: string[]; feedback: string[]; top: (p: string) => string; bottom: string };
const TG_LOCALE_TEXT: Record<Exclude<LanguageCode, 'tr'>, TgLocaleText> = {
  en: {
    titles: ['Top of the field', 'Outstanding', 'Very strong', 'High achiever', 'Solid foundation', 'Basic proficiency', 'Getting started'],
    feedback: [
      'Flawless performance: a result at the very top.',
      'Outstanding! Enough for even the most competitive programmes you are aiming for.',
      'A very strong score. Close one or two small gaps with the Mistake Log and you will be at the top.',
      'A great foundation: you are ahead of about 94% of candidates.',
      'Your core concepts are solid. Revising equilibrium, electrochemistry and organic reactions will raise your score quickly.',
      'You are still filling topic gaps. Work through the visual slides and the unit test sets.',
      'Steady topic study and flashcard reviews will build your chemistry score step by step.',
    ],
    top: (p) => `Top ${p}%`,
    bottom: 'Bottom 50%',
  },
  de: {
    titles: ['Spitzenklasse', 'Herausragend', 'Sehr stark', 'Leistungsstark', 'Solide Basis', 'Grundkenntnisse', 'Einstieg'],
    feedback: [
      'Fehlerfreie Leistung: ein Ergebnis ganz an der Spitze.',
      'Herausragend! Das reicht selbst für die begehrtesten Studiengänge, die du anstrebst.',
      'Ein sehr starkes Ergebnis. Schließe ein, zwei kleine Lücken mit dem Fehlerheft, dann bist du ganz oben.',
      'Eine großartige Basis: Du liegst vor etwa 94 % der Teilnehmenden.',
      'Die Grundbegriffe sitzen. Mit Wiederholungen zu Gleichgewicht, Elektrochemie und organischen Reaktionen steigerst du dein Ergebnis schnell.',
      'Du schließt gerade Themenlücken. Arbeite die visuellen Folien und die Testsets der Einheiten durch.',
      'Mit regelmäßigem Lernen und Karteikarten-Wiederholungen baust du dein Chemie-Ergebnis Schritt für Schritt auf.',
    ],
    top: (p) => `Top ${p} %`,
    bottom: 'Untere 50 %',
  },
  fr: {
    titles: ['Au sommet', 'Exceptionnel', 'Très solide', 'Très bon niveau', 'Bonnes bases', 'Niveau de base', 'Premiers pas'],
    feedback: [
      'Une performance parfaite : un résultat tout en haut du classement.',
      'Exceptionnel ! Largement suffisant pour les filières les plus sélectives que tu vises.',
      'Un très bon score. Comble une ou deux petites lacunes avec le carnet d’erreurs et tu seras au sommet.',
      'De très bonnes bases : tu devances environ 94 % des candidats.',
      'Les notions de base sont solides. Réviser l’équilibre, l’électrochimie et les réactions organiques fera vite monter ton score.',
      'Tu es en train de combler des lacunes. Parcours les diapositives visuelles et les séries de tests par unité.',
      'Un travail régulier et des révisions avec les cartes mémoire construiront ton score en chimie pas à pas.',
    ],
    top: (p) => `Top ${p} %`,
    bottom: '50 % inférieurs',
  },
  ru: {
    titles: ['Высший уровень', 'Выдающийся результат', 'Очень сильный результат', 'Высокий уровень', 'Прочная база', 'Базовая подготовка', 'Начальный этап'],
    feedback: [
      'Безупречно: результат на самой вершине.',
      'Выдающийся результат! Этого хватит даже для самых конкурсных направлений, к которым ты стремишься.',
      'Очень сильный результат. Закрой один-два небольших пробела с помощью тетради ошибок, и ты будешь на вершине.',
      'Отличная база: ты опережаешь около 94 % участников.',
      'Основные понятия усвоены прочно. Повтори равновесие, электрохимию и органические реакции, и балл быстро вырастет.',
      'Ты восполняешь пробелы по темам. Пройди наглядные слайды и тестовые наборы по темам.',
      'Регулярные занятия и повторение карточек шаг за шагом поднимут твой балл по химии.',
    ],
    top: (p) => `Лучшие ${p} %`,
    bottom: 'Нижние 50 %',
  },
  ar: {
    titles: ['في القمة', 'أداء استثنائي', 'قوي جدًا', 'مستوى متفوق', 'أساس متين', 'كفاءة أساسية', 'مرحلة البداية'],
    feedback: [
      'أداء بلا أخطاء: نتيجة في القمة تمامًا.',
      'أداء استثنائي! يكفي حتى لأكثر التخصصات تنافسًا التي تطمح إليها.',
      'نتيجة قوية جدًا. سدّ ثغرة أو اثنتين صغيرتين بدفتر الأخطاء وستكون في القمة.',
      'أساس رائع: أنت متقدم على نحو 94% من المتقدمين.',
      'المفاهيم الأساسية متينة. مراجعة الاتزان والكيمياء الكهربائية والتفاعلات العضوية سترفع نتيجتك بسرعة.',
      'أنت في مرحلة سدّ الثغرات. راجع الشرائح المصوّرة ومجموعات اختبارات الوحدات.',
      'بالدراسة المنتظمة ومراجعة البطاقات ستبني نتيجتك في الكيمياء خطوة بخطوة.',
    ],
    top: (p) => `أعلى ${p}%`,
    bottom: 'أدنى 50%',
  },
  zh: {
    titles: ['顶尖水平', '出类拔萃', '非常优秀', '优秀', '基础扎实', '基本达标', '起步阶段'],
    feedback: [
      '零失误！成绩位于最顶端。',
      '出类拔萃！即使是你目标中竞争最激烈的专业也绰绰有余。',
      '非常优秀的成绩。用错题本补上一两个小漏洞，你就能登顶。',
      '基础很棒：你领先约94%的考生。',
      '核心概念很扎实。复习化学平衡、电化学和有机反应，分数会快速提升。',
      '你正在补齐知识漏洞。请学习图解幻灯片并完成单元测验题组。',
      '坚持系统学习并复习抽认卡，你的化学成绩会一步步提高。',
    ],
    top: (p) => `前 ${p}%`,
    bottom: '后 50%',
  },
  ku: {
    titles: ['Li lûtkeyê', 'Awarte', 'Pir xurt', 'Serkeftina bilind', 'Bingeha xurt', 'Asta bingehîn', 'Destpêk'],
    feedback: [
      'Performanseke bêkêmasî: encamek li lûtkeyê.',
      'Serkeftineke awarte! Ji bo beşên herî bi pêşbazî yên ku tu dixwazî jî bes e.',
      'Encameke pir xurt. Bi Deftera Şaşiyan yek-du kêmasiyên biçûk biqedîne û tu li lûtkeyê yî.',
      'Bingeheke hêja: tu li pêşiya nêzîkî %94ê namzedan î.',
      'Têgehên bingehîn xurt in. Bi dubarekirina hevsengiyê, elektrokîmyayê û reaksiyonên organîk tu dikarî encama xwe zû bilind bikî.',
      'Tu hîn kêmasiyên mijaran temam dikî. Slaytên dîtbarî û komên testên yekîneyê bixebitîne.',
      'Bi xebata birêkûpêk û dubarekirina kartan em ê encama te ya kîmyayê gav bi gav ava bikin.',
    ],
    top: (p) => `%${p} yên pêşîn`,
    bottom: '%50 yên dawî',
  },
};

const TG_TIER_PERCENTILES = [0.05, 0.8, 2.5, 6.0, 15.0, 35.0, 55.0];

export function estimateTgPercentile(netScore: number, lang: LanguageCode = 'tr'): TgPercentileResult {
  const base = estimateTgPercentileTr(netScore);
  if (lang === 'tr') return base;
  const text = TG_LOCALE_TEXT[lang] ?? TG_LOCALE_TEXT.en;
  const tier = Math.max(0, TG_TIER_PERCENTILES.indexOf(base.percentile));
  const isLast = tier === TG_TIER_PERCENTILES.length - 1;
  let pct: string;
  try {
    pct = base.percentile.toLocaleString(lang, { minimumFractionDigits: 1, maximumFractionDigits: 2 });
  } catch {
    pct = String(base.percentile);
  }
  return {
    ...base,
    percentileFormatted: isLast ? text.bottom : text.top(pct),
    estimatedRankRange: '',
    tierTitle: text.titles[tier],
    feedbackMessage: text.feedback[tier],
  };
}

export function calculateOsymNet(correct: number, wrong: number): number {
  return Number((correct - wrong / 4.0).toFixed(2));
}

/**
 * Builds the 20 questions for TG Derece Provası:
 * Exactly 7 TYT questions (from u01..u10) + 13 AYT questions (from u11..u24).
 * Prioritizes high difficulty ('osym' / 'hard') and visual (diagram or figure) questions.
 */
export function buildTgProvaQuestions(
  units: ChemistryUnitSeedData[],
  lang: LanguageCode = 'tr',
  seed = 1
): CompiledQuestion[] {
  const unitById = new Map(units.map((u) => [u.id, u]));
  const compiledCache = new Map<string, CompiledQuestion[]>();

  const getPool = (uId: string): CompiledQuestion[] => {
    const cached = compiledCache.get(uId);
    if (cached) return cached;
    const u = unitById.get(uId);
    const built = u ? compileUnitQuestions(u, lang) : [];
    compiledCache.set(uId, built);
    return built;
  };

  const usedIds = new Set<string>();

  // 7 TYT units sampled from u01..u10
  const tytOffset = (seed - 1) % TYT_UNIT_IDS.length;
  const rotatedTyt = [
    ...TYT_UNIT_IDS.slice(tytOffset),
    ...TYT_UNIT_IDS.slice(0, tytOffset),
  ];
  const chosenTytUnits = rotatedTyt.slice(0, 7);

  // 13 AYT units sampled from u11..u24
  const aytSkip = (seed - 1) % AYT_UNIT_IDS.length;
  const chosenAytUnits = AYT_UNIT_IDS.filter((_, idx) => idx !== aytSkip);

  const tytQuestions: CompiledQuestion[] = [];
  for (let i = 0; i < chosenTytUnits.length; i++) {
    const uId = chosenTytUnits[i];
    const q = pickBestFromUnit(
      getPool(uId),
      `tg-prova::tyt::slot${i}::seed${seed}`,
      'osym-prova',
      true,
      usedIds
    );
    if (q) tytQuestions.push(q);
  }

  const aytQuestions: CompiledQuestion[] = [];
  for (let i = 0; i < chosenAytUnits.length; i++) {
    const uId = chosenAytUnits[i];
    const q = pickBestFromUnit(
      getPool(uId),
      `tg-prova::ayt::slot${i}::seed${seed}`,
      'osym-prova',
      true,
      usedIds
    );
    if (q) aytQuestions.push(q);
  }

  tytQuestions.sort((a, b) => {
    const numA = parseInt(a.unitId.replace('u', ''), 10);
    const numB = parseInt(b.unitId.replace('u', ''), 10);
    return numA - numB;
  });

  aytQuestions.sort((a, b) => {
    const numA = parseInt(a.unitId.replace('u', ''), 10);
    const numB = parseInt(b.unitId.replace('u', ''), 10);
    return numA - numB;
  });

  return [...tytQuestions, ...aytQuestions];
}
