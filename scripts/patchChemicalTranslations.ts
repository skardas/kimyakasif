import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CACHE_FILES = [
  path.resolve(__dirname, './curriculumTranslationsCache.json'),
  path.resolve(__dirname, '../src/data/i18n/curriculumTranslations.json'),
];

// Universal formulas and symbols: identical in all 8 languages
const UNIVERSAL_FORMULAS = [
  'H2', 'N2', 'O2', 'He', 'Al', 'Cu', 'Fe', 'Ag', 'Mg', 'SO2', 'NO2', 'CO2', 'CH4', 'H2O', 'HCl', 'H2S', 'SO3', 'CO',
  'AlCl3', 'CaCl2', 'NaCl', 'KNO3', 'PVC', 'PET', 'Kc', 'Kp', 'VSEPR',
  'O2(g)', 'O3(g)', 'H2O(s)', 'CO2(g)',
  '1s < 2s < 2p', '< 3s < 3p < 4s', '< 3d < 4p < 5s', '< 4d < 5p < 6s',
  'Kp = Kc * (RT)', 'Kp = Kc', 'Kc = Kp * (RT)', 'Kp = Kc / (RT)', 'Kp = Kc * (RT)^2',
  'L / (mol * s)', 'mol / (L * s)', 's^-1', 'L^2 / (mol^2 * s)', 'L^3 / (mol^3 * s)'
];

// Chemical pairs with language conjunctions
const FORMULA_PAIRS: Record<string, [string, string]> = {
  'CO ve CO2': ['CO', 'CO2'],
  'CH4 ve C2H4': ['CH4', 'C2H4'],
  'H2SO4 ve H2SO3': ['H2SO4', 'H2SO3'],
  'NaCl ve KBr': ['NaCl', 'KBr'],
  'C2H6 ve C3H8': ['C2H6', 'C3H8'],
  'Ca2+ ve Mg2+': ['Ca2+', 'Mg2+'],
  'Na+ ve K+': ['Na+', 'K+'],
  'Fe3+ ve Al3+': ['Fe3+', 'Al3+'],
  'Ag+ ve Cu2+': ['Ag+', 'Cu2+'],
  'H+ ve NH4+': ['H+', 'NH4+'],
};

const CONJUNCTIONS: Record<string, (a: string, b: string) => string> = {
  tr: (a, b) => `${a} ve ${b}`,
  en: (a, b) => `${a} and ${b}`,
  de: (a, b) => `${a} und ${b}`,
  fr: (a, b) => `${a} et ${b}`,
  ru: (a, b) => `${a} и ${b}`,
  ar: (a, b) => `${a} و ${b}`,
  zh: (a, b) => `${a} 和 ${b}`,
  ku: (a, b) => `${a} û ${b}`,
};

// Disambiguated terms
const DISAMBIGUATIONS: Record<string, Record<string, string>> = {
  'Simya': {
    tr: 'Simya', en: 'Alchemy', de: 'Alchemie', fr: 'Alchimie', ru: 'Алхимия', ar: 'الخيمياء', zh: '炼金术', ku: 'Simya'
  },
  'Kimya': {
    tr: 'Kimya', en: 'Chemistry', de: 'Chemie', fr: 'Chimie', ru: 'Химия', ar: 'الكيمياء', zh: '化学', ku: 'Kîmya'
  },
  'Molarite': {
    tr: 'Molarite', en: 'Molarity', de: 'Molarität', fr: 'Molarité', ru: 'Молярность', ar: 'المولارية', zh: '物质的量浓度 (Molarite)', ku: 'Molarîte'
  },
  'Molalite': {
    tr: 'Molalite', en: 'Molality', de: 'Molalität', fr: 'Molalité', ru: 'Моляльность', ar: 'المولالية', zh: '质量摩尔浓度 (Molalite)', ku: 'Molalîte'
  },
  'Çözünme': {
    tr: 'Çözünme', en: 'Dissolution', de: 'Auflösung', fr: 'Dissolution', ru: 'Растворение', ar: 'الذوبان', zh: '溶解过程', ku: 'Helandin'
  },
  'Çözünürlük': {
    tr: 'Çözünürlük', en: 'Solubility', de: 'Löslichkeit', fr: 'Solubilité', ru: 'Растворимость', ar: 'الذائبية', zh: '溶解度', ku: 'Helbarî'
  },
  'Çözelti': {
    tr: 'Çözelti', en: 'Solution', de: 'Lösung', fr: 'Solution', ru: 'Раствор', ar: 'المحلول', zh: '溶液', ku: 'Çareserî'
  },
  'Eterler': {
    tr: 'Eterler', en: 'Ethers', de: 'Ether', fr: 'Éthers', ru: 'Простые эфиры', ar: 'الإيثرات', zh: '醚类', ku: 'Eter'
  },
  'Esterler': {
    tr: 'Esterler', en: 'Esters', de: 'Ester', fr: 'Esters', ru: 'Сложные эфиры', ar: 'الإسترات', zh: '酯类', ku: 'Ester'
  },
  'Eter': {
    tr: 'Eter', en: 'Ether', de: 'Ether', fr: 'Éther', ru: 'Простой эфир', ar: 'إيثر', zh: '醚', ku: 'Eter'
  },
  'Ester': {
    tr: 'Ester', en: 'Ester', de: 'Ester', fr: 'Ester', ru: 'Сложный эфир', ar: 'إستر', zh: '酯', ku: 'Ester'
  },
  's orbitali': {
    tr: 's orbitali', en: 's orbital', de: 's-Orbital', fr: 'orbitale s', ru: 's-орбиталь', ar: 'مدار s', zh: 's轨道', ku: 'orbîtala s'
  },
  'p orbitali': {
    tr: 'p orbitali', en: 'p orbital', de: 'p-Orbital', fr: 'orbitale p', ru: 'p-орбиталь', ar: 'مدار p', zh: 'p轨道', ku: 'orbîtala p'
  },
  'd orbitali': {
    tr: 'd orbitali', en: 'd orbital', de: 'd-Orbital', fr: 'orbitale d', ru: 'd-орбиталь', ar: 'مدار d', zh: 'd轨道', ku: 'orbîtala d'
  },
  'f orbitali': {
    tr: 'f orbitali', en: 'f orbital', de: 'f-Orbital', fr: 'orbitale f', ru: 'f-орбиталь', ar: 'مدار f', zh: 'f轨道', ku: 'orbîtala f'
  },
  'g orbitali': {
    tr: 'g orbitali', en: 'g orbital', de: 'g-Orbital', fr: 'orbitale g', ru: 'g-орбиталь', ar: 'مدار g', zh: 'g轨道', ku: 'orbîtala g'
  },
};

for (const targetFile of CACHE_FILES) {
  if (!fs.existsSync(targetFile)) continue;
  const data: Record<string, Record<string, string>> = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

  // 1. Universal formulas
  for (const f of UNIVERSAL_FORMULAS) {
    data[f] = {
      tr: f, en: f, de: f, fr: f, ru: f, ar: f, zh: f, ku: f
    };
  }

  // 2. Formula pairs
  for (const [pairKey, [a, b]] of Object.entries(FORMULA_PAIRS)) {
    data[pairKey] = {
      tr: CONJUNCTIONS.tr(a, b),
      en: CONJUNCTIONS.en(a, b),
      de: CONJUNCTIONS.de(a, b),
      fr: CONJUNCTIONS.fr(a, b),
      ru: CONJUNCTIONS.ru(a, b),
      ar: CONJUNCTIONS.ar(a, b),
      zh: CONJUNCTIONS.zh(a, b),
      ku: CONJUNCTIONS.ku(a, b),
    };
  }

  // 3. Disambiguated terms
  for (const [key, locObj] of Object.entries(DISAMBIGUATIONS)) {
    data[key] = { ...locObj };
  }

  fs.writeFileSync(targetFile, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated chemical translations in ${targetFile}`);
}

console.log('Chemical translations successfully patched!');
