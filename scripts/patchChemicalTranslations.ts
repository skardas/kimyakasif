import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { refuseUnlessForced } from './auditedSourceGuard';

// GUARD: rewrites the translation caches that feed the (now guarded) unit/slide generators.
refuseUnlessForced('patchChemicalTranslations.ts', ['scripts/curriculumTranslationsCache.json', 'src/data/i18n/curriculumTranslations.json']);

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
  'Çamaşır suyu ve tuz ruhu karıştırıldığında temizleme gücü iki katına çıkar.': {
    tr: 'Çamaşır suyu ve tuz ruhu karıştırıldığında temizleme gücü iki katına çıkar.',
    en: 'When bleach and spirit of salt (hydrochloric acid) are mixed, the cleaning power doubles.',
    de: 'Wenn Bleichmittel und Salzsäure gemischt werden, verdoppelt sich die Reinigungskraft.',
    fr: "Lorsque l'eau de Javel et l'esprit de sel sont mélangés, le pouvoir nettoyant double.",
    ru: 'При смешивании отбеливателя и соляной кислоты чистящая способность удваивается.',
    ar: 'عندما يتم خلط المبيض وروح الملح، تتضاعف قوة التنظيف.',
    zh: '当漂白水与盐酸混合时，清洁力加倍。',
    ku: 'Dema ku ava çilşoyê û ruhê xwê bên tevlihevkirin, hêza paqijkirinê du qat zêde dibe.'
  },
  'Simyacı Cabir bin Hayyan': {
    tr: 'Simyacı Cabir bin Hayyan',
    en: 'Alchemist Jabir ibn Hayyan',
    de: 'Alchemist Dschābir ibn Hayyān',
    fr: "L'alchimiste Jabir ibn Hayyan",
    ru: 'Алхимик Джабир ибн Хайян',
    ar: 'الخيميائي جابر بن حيان',
    zh: '炼金术士贾比尔·伊本·哈扬',
    ku: 'Alkemîst Cabir bin Hayyan'
  },
  'Cabir bin Hayyan damıtma imbiğini geliştiren antik simyacıdır; Lavoisier kütlenin korunumunu ölçerek modern kimyayı başlatan bilim insanıdır.': {
    tr: 'Cabir bin Hayyan damıtma imbiğini geliştiren antik simyacıdır; Lavoisier kütlenin korunumunu ölçerek modern kimyayı başlatan bilim insanıdır.',
    en: 'Jabir ibn Hayyan is the ancient alchemist who developed the distillation alembic; Lavoisier is the scientist who founded modern chemistry by measuring the conservation of mass.',
    de: 'Dschābir ibn Hayyān ist der alte Alchemist, der den Destillierkolben entwickelte; Lavoisier begründete die moderne Chemie mit der Massenerhaltung.',
    fr: "Jabir ibn Hayyan est l'alchimiste antique qui a développé l'alambic de distillation ; Lavoisier a fondé la chimie moderne en mesurant la conservation de la masse.",
    ru: 'Джабир ибн Хайян — древний алхимик, создавший перегонный куб (аламбик); Лавуазье основал современную химию, измерив сохранение массы.',
    ar: 'جابر بن حيان هو الخيميائي القديم الذي طور الإنبيق؛ لافوازييه هو العالم الذي أسس الكيمياء الحديثة بقياس حفظ الكتلة.',
    zh: '贾比尔·伊本·哈扬是发明蒸馏器（蒸馏瓶）的古代炼金术士；拉瓦锡通过测量质量守恒开创了现代化学。',
    ku: 'Cabir bin Hayyan alkîmîstê kevnar e ku alembîka distilasyonê pêş xist; Lavoisier zanyarê ku bi pîvandina parastina girseyê kîmyaya nûjen da destpêkirin.'
  },
  'Cabir bin Hayyan imbiği geliştirmiş, zaç yağı ve kezzabı elde etmiştir.': {
    tr: 'Cabir bin Hayyan imbiği geliştirmiş, zaç yağı ve kezzabı elde etmiştir.',
    en: 'Jabir ibn Hayyan developed the alembic and synthesized oil of vitriol and aqua fortis.',
    de: 'Dschābir ibn Hayyān entwickelte den Destillierkolben und stellte Vitriolöl und Scheidewasser her.',
    fr: "Jabir ibn Hayyan a développé l'alambic et a obtenu de l'huile de vitriol et de l'eau-forte.",
    ru: 'Джабир ибн Хайян разработал перегонный куб (аламбик) и получил купоросное масло и азотную кислоту (крепкую водку).',
    ar: 'قام جابر بن حيان بتطوير الإنبيق وحصل على زيت الزاج والماء القاطع.',
    zh: '贾比尔·伊本·哈扬开发了蒸馏器，并制得了矾油（硫酸）和硝酸。',
    ku: 'Cabir bin Hayyan alembîk pêş xist û rûnê zaçê û kezzab bi dest xist.'
  },
  'Zaç yağı H2SO4, Kezzap HNO3, Tuz ruhu HCl, Kireç taşı CaCO3 tür.': {
    tr: 'Zaç yağı H2SO4, Kezzap HNO3, Tuz ruhu HCl, Kireç taşı CaCO3\'tür.',
    en: 'Oil of vitriol is H2SO4, Aqua fortis is HNO3, Spirit of salt is HCl, Limestone is CaCO3.',
    de: 'Vitriolöl ist H2SO4, Scheidewasser ist HNO3, Salzsäure ist HCl, Kalkstein ist CaCO3.',
    fr: "L'huile de vitriol est H2SO4, l'eau-forte est HNO3, l'esprit de sel est HCl, la pierre à chaux est CaCO3.",
    ru: 'Купоросное масло — это H2SO4, крепкая водка — HNO3, соляная кислота — HCl, известняк — CaCO3.',
    ar: 'زيت الزاج هو H2SO4، والماء القاطع (النيتريك) هو HNO3، وروح الملح هو HCl، والحجر الجيري هو CaCO3.',
    zh: '矾油是 H2SO4，王水/硝酸是 HNO3，盐酸是 HCl，石灰石是 CaCO3。',
    ku: 'Rûnê zaçê H2SO4, kezzab HNO3, ruhê xwê HCl, kevirê kilsê CaCO3 ye.'
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
  // Historical Alchemy & Chemical Acids
  'Zaç yağı': {
    tr: 'Zaç yağı',
    en: 'Oil of vitriol',
    de: 'Vitriolöl',
    fr: 'Huile de vitriol',
    ru: 'Купоросное масло',
    ar: 'زيت الزاج',
    zh: '矾油（硫酸）',
    ku: 'Rûnê zaçê (vîtriol)'
  },
  'Zaç Yağı': {
    tr: 'Zaç Yağı',
    en: 'Oil of Vitriol',
    de: 'Vitriolöl',
    fr: 'Huile de vitriol',
    ru: 'Купоросное масло',
    ar: 'زيت الزاج',
    zh: '矾油（硫酸）',
    ku: 'Rûnê zaçê (vîtriol)'
  },
  'Zaç Yağı (H2SO4)': {
    tr: 'Zaç Yağı (H2SO4)',
    en: 'Oil of Vitriol (H2SO4)',
    de: 'Vitriolöl (H2SO4)',
    fr: 'Huile de vitriol (H2SO4)',
    ru: 'Купоросное масло (H2SO4)',
    ar: 'زيت الزاج (H2SO4)',
    zh: '矾油 (H2SO4)',
    ku: 'Rûnê zaçê (H2SO4)'
  },
  'Zaç yağı: H2SO4': {
    tr: 'Zaç yağı: H2SO4',
    en: 'Oil of vitriol: H2SO4',
    de: 'Vitriolöl: H2SO4',
    fr: 'Huile de vitriol : H2SO4',
    ru: 'Купоросное масло: H2SO4',
    ar: 'زيت الزاج: H2SO4',
    zh: '矾油: H2SO4',
    ku: 'Rûnê zaçê: H2SO4'
  },
  'Kezzap': {
    tr: 'Kezzap',
    en: 'Aqua fortis',
    de: 'Scheidewasser',
    fr: 'Eau-forte',
    ru: 'Крепкая водка (азотная кислота)',
    ar: 'ماء الفضة (حمض النيتريك)',
    zh: '硝镪水（硝酸）',
    ku: 'Kezzap (asîda nîtrîk)'
  },
  'Kezzap (HNO3)': {
    tr: 'Kezzap (HNO3)',
    en: 'Aqua fortis (HNO3)',
    de: 'Scheidewasser (HNO3)',
    fr: 'Eau-forte (HNO3)',
    ru: 'Крепкая водка (HNO3)',
    ar: 'ماء الفضة (HNO3)',
    zh: '硝镪水 (HNO3)',
    ku: 'Kezzap (HNO3)'
  },
  'Kezzap: HNO3': {
    tr: 'Kezzap: HNO3',
    en: 'Aqua fortis: HNO3',
    de: 'Scheidewasser: HNO3',
    fr: 'Eau-forte : HNO3',
    ru: 'Крепкая водка: HNO3',
    ar: 'ماء الفضة: HNO3',
    zh: '硝镪水: HNO3',
    ku: 'Kezzap: HNO3'
  },
  'Tuz ruhu': {
    tr: 'Tuz ruhu',
    en: 'Spirit of salt (muriatic acid)',
    de: 'Salzsäure (Salzgeist)',
    fr: 'Esprit de sel (acide chlorhydrique)',
    ru: 'Соляной спирт (соляная кислота)',
    ar: 'روح الملح (حمض الهيدروكلوريك)',
    zh: '盐精（盐酸）',
    ku: 'Ruhê xwê (asîda hîdroclorîk)'
  },
  'Tuz Ruhu': {
    tr: 'Tuz Ruhu',
    en: 'Spirit of Salt',
    de: 'Salzsäure (Salzgeist)',
    fr: 'Esprit de sel',
    ru: 'Соляной спирт',
    ar: 'روح الملح',
    zh: '盐精（盐酸）',
    ku: 'Ruhê xwê'
  },
  'Tuz ruhu: HCl': {
    tr: 'Tuz ruhu: HCl',
    en: 'Spirit of salt: HCl',
    de: 'Salzsäure (Salzgeist): HCl',
    fr: 'Esprit de sel : HCl',
    ru: 'Соляной спирт: HCl',
    ar: 'روح الملح: HCl',
    zh: '盐精: HCl',
    ku: 'Ruhê xwê: HCl'
  },
  'Kral suyu': {
    tr: 'Kral suyu',
    en: 'Aqua regia',
    de: 'Königswasser',
    fr: 'Eau régale',
    ru: 'Царская водка',
    ar: 'الماء الملكي',
    zh: '王水',
    ku: 'Ava şahî (aqua regia)'
  },
  'Kral Suyu': {
    tr: 'Kral Suyu',
    en: 'Aqua Regia',
    de: 'Königswasser',
    fr: 'Eau régale',
    ru: 'Царская водка',
    ar: 'الماء الملكي',
    zh: '王水',
    ku: 'Ava şahî (aqua regia)'
  },
  'Karınca asidi (formik asit)': {
    tr: 'Karınca asidi (formik asit)',
    en: 'Formic acid (methanoic acid)',
    de: 'Ameisensäure (Methansäure)',
    fr: 'Acide formique (acide méthanoïque)',
    ru: 'Муравьиная кислота (метановая кислота)',
    ar: 'حمض الفورميك (حمض النمليك)',
    zh: '甲酸（蚁酸）',
    ku: 'Asîda formîk (asîda mêrûyê)'
  },
  'Cabir bin Hayyan': {
    tr: 'Cabir bin Hayyan',
    en: 'Jabir ibn Hayyan',
    de: 'Dschābir ibn Hayyān',
    fr: 'Jabir ibn Hayyan',
    ru: 'Джабир ибн Хайян',
    ar: 'جابر بن حيان',
    zh: '贾比尔·伊本·哈扬',
    ku: 'Cabir bin Heyyan'
  },
  'Simyadan Kimyaya ve Güvenlik': {
    tr: 'Simyadan Kimyaya ve Güvenlik',
    en: 'From Alchemy to Chemistry & Safety',
    de: 'Von der Alchemie zur Chemie und Laborsicherheit',
    fr: "De l'alchimie à la chimie et sécurité au laboratoire",
    ru: 'От алхимии к химии и лабораторной безопасности',
    ar: 'من الخيمياء إلى الكيمياء والسلامة المختبرية',
    zh: '从炼金术到化学与实验室安全',
    ku: 'Ji Simyayê ber bi Kîmyayê û Ewlehiya Laboratûwarê'
  },
  // Fact & Trap String Overrides
  'Simyacılar teraziyi hassas olarak kullanarak kütle korunumunu kanıtlamıştır.': {
    tr: 'Simyacılar teraziyi hassas olarak kullanarak kütle korunumunu kanıtlamıştır.',
    en: 'Alchemists proved the conservation of mass by using the analytical balance precisely.',
    de: 'Alchemisten bewiesen die Massenerhaltung durch die präzise Verwendung der Analysenwaage.',
    fr: 'Les alchimistes ont prouvé la conservation de la masse en utilisant précisément la balance analytique.',
    ru: 'Алхимики доказали сохранение массы, точно используя аналитические весы.',
    ar: 'أثبت الخيميائيون حفظ الكتلة باستخدام الميزان التحليلي الدقيق.',
    zh: '炼金术士通过精确使用精密天平证明了质量守恒。',
    ku: 'Alkîmîstan parastina girseyê bi karanîna terezûya hesas îspat kirin.'
  },
  'Zaç yağı H2SO4 (sülfürik asit), Tuz ruhu HCl (hidroklorik asit) geleneksel adıdır.': {
    tr: 'Zaç yağı H2SO4 (sülfürik asit), Tuz ruhu HCl (hidroklorik asit) geleneksel adıdır.',
    en: 'Oil of vitriol is H2SO4 (sulfuric acid); spirit of salt (muriatic acid) is the traditional name for HCl (hydrochloric acid).',
    de: 'Vitriolöl ist H2SO4 (Schwefelsäure), der traditionelle Name von Salzsäure (Salzgeist) ist HCl (Salzsäure).',
    fr: "L'huile de vitriol est H2SO4 (acide sulfurique) ; l'esprit de sel est le nom traditionnel de HCl (acide chlorhydrique).",
    ru: 'Купоросное масло — это H2SO4 (серная кислота), а соляной спирт — традиционное название HCl (соляной кислоты).',
    ar: 'زيت الزاج هو H2SO4 (حمض الكبريتيك)، والاسم التقليدي لروح الملح هو HCl (حمض الهيدروكلوريك).',
    zh: '矾油是H2SO4（硫酸）的传统名称，盐精是HCl（盐酸）的传统名称。',
    ku: 'Rûnê zaçê H2SO4 (asîda sulfurîk) e, navê kevneşopî yê ruhê xwê HCl (asîda hîdroclorîk) e.'
  },
  'Zaç yağı HNO3 formülüne sahiptir.': {
    tr: 'Zaç yağı HNO3 formülüne sahiptir.',
    en: 'Oil of vitriol has the chemical formula HNO3.',
    de: 'Vitriolöl besitzt die chemische Formel HNO3.',
    fr: "L'huile de vitriol a pour formule chimique HNO3.",
    ru: 'Купоросное масло имеет формулу HNO3.',
    ar: 'زيت الزاج له الصيغة الكيميائية HNO3.',
    zh: '矾油的化学式为 HNO3。',
    ku: 'Rûnê zaçê xwedî formula HNO3 ye.'
  },
  'HNO3 kezzaptır, zaç yağı H2SO4 tür.': {
    tr: "HNO3 kezzaptır, zaç yağı H2SO4'tür.",
    en: 'HNO3 is aqua fortis (nitric acid), whereas oil of vitriol is H2SO4 (sulfuric acid).',
    de: 'HNO3 ist Scheidewasser (Salpetersäure), während Vitriolöl H2SO4 (Schwefelsäure) ist.',
    fr: "HNO3 est l'eau-forte (acide nitrique), tandis que l'huile de vitriol est H2SO4 (acide sulfurique).",
    ru: 'HNO3 — это крепкая водка (азотная кислота), тогда как купоросное масло — это H2SO4 (серная кислота).',
    ar: 'HNO3 هو ماء الفضة (حمض النيتريك)، بينما زيت الزاج هو H2SO4 (حمض الكبريتيك).',
    zh: 'HNO3是浓硝酸（硝镪水），而矾油才是H2SO4（硫酸）。',
    ku: 'HNO3 kezzap (asîda nîtrîk) e, lê rûnê zaçê H2SO4 (asîda sulfurîk) e.'
  },
  "HNO3 kezzaptır, zaç yağı H2SO4'tür.": {
    tr: "HNO3 kezzaptır, zaç yağı H2SO4'tür.",
    en: 'HNO3 is aqua fortis (nitric acid), whereas oil of vitriol is H2SO4 (sulfuric acid).',
    de: 'HNO3 ist Scheidewasser (Salpetersäure), während Vitriolöl H2SO4 (Schwefelsäure) ist.',
    fr: "HNO3 est l'eau-forte (acide nitrique), tandis que l'huile de vitriol est H2SO4 (acide sulfurique).",
    ru: 'HNO3 — это крепкая водка (азотная кислота), тогда как купоросное масло — это H2SO4 (серная кислота).',
    ar: 'HNO3 هو ماء الفضة (حمض النيتريك)، بينما زيت الزاج هو H2SO4 (حمض الكبريتيك).',
    zh: 'HNO3是浓硝酸（硝镪水），而矾油才是H2SO4（硫酸）。',
    ku: 'HNO3 kezzap (asîda nîtrîk) e, lê rûnê zaçê H2SO4 (asîda sulfurîk) e.'
  },
  'Cabir bin Hayyan damıtma imbiğini (alembic) geliştirerek nitrik asit ve kral suyunu elde etmiştir.': {
    tr: 'Cabir bin Hayyan damıtma imbiğini (alembic) geliştirerek nitrik asit ve kral suyunu elde etmiştir.',
    en: 'Jabir ibn Hayyan developed the alembic and synthesized nitric acid and aqua regia.',
    de: 'Dschābir ibn Hayyān entwickelte den Alambic (Destillierkolben) und stellte Salpetersäure sowie Königswasser her.',
    fr: "Jabir ibn Hayyan a perfectionné l'alambic et obtenu l'acide nitrique et l'eau régale.",
    ru: 'Джабир ибн Хайян усовершенствовал перегонный куб (аламбик) и получил азотную кислоту и царскую водку.',
    ar: 'قام جابر بن حيان بتطوير الإنبيق وحصل على حمض النيتريك والماء الملكي.',
    zh: '贾比尔·伊本·哈扬改进了蒸馏器（alembic）并制得了硝酸和王水。',
    ku: 'Cabir bin Heyyan alambîk pêş xist û asîda nîtrîk û ava şahî bi dest xist.'
  },
  'Zaç yağı sülfürik asit olup akü asidi olarak bilinir; kezzap ise nitrik asit olup gübre ve patlayıcı üretiminde kullanılır.': {
    tr: 'Zaç yağı sülfürik asit olup akü asidi olarak bilinir; kezzap ise nitrik asit olup gübre ve patlayıcı üretiminde kullanılır.',
    en: 'Oil of vitriol is sulfuric acid and is known as battery acid; aqua fortis (kezzap) is nitric acid and is used in fertilizer and explosives production.',
    de: 'Vitriolöl ist Schwefelsäure (Batteriesäure); Scheidewasser (Kezzap) ist Salpetersäure und dient der Düngemittel- und Sprengstoffherstellung.',
    fr: "L'huile de vitriol est de l'acide sulfurique (acide de batterie) ; l'eau-forte (kezzap) est de l'acide nitrique utilisé pour les engrais et explosifs.",
    ru: 'Купоросное масло — это серная кислота (аккумуляторная кислота); азотная кислота (крепкая водка) используется в производстве удобрений и взрывчатых веществ.',
    ar: 'زيت الزاج هو حمض الكبريتيك ويعرف بماء البطارية؛ أما ماء الفضة (النيتريك) فيستخدم في صناعة الأسمدة والمتفجرات.',
    zh: '矾油是硫酸（蓄电池酸）；硝镪水（硝酸）则用于生产化肥和炸药。',
    ku: 'Rûnê zaçê asîda sulfurîk e û wekî asîda pîlê tê zanîn; kezzap asîda nîtrîk e û di hilberîna gubre û teqemeniyan de tê bikaranîn.'
  },
  'Kral suyunu Aristo dört element kuramıyla açıklamıştır.': {
    tr: 'Kral suyunu Aristo dört element kuramıyla açıklamıştır.',
    en: 'Aristotle explained aqua regia using the four elements theory.',
    de: 'Aristoteles erklärte Königswasser mit der Vier-Elemente-Lehre.',
    fr: "Aristote a expliqué l'eau régale par la théorie des quatre éléments.",
    ru: 'Аристотель объяснил царскую водку теорией четырех элементов.',
    ar: 'فسر أرسطو الماء الملكي بنظرية العناصر الأربعة.',
    zh: '亚里士多德用四元素学说解释了王水。',
    ku: 'Arîsto ava şahî bi teoriya çar hêmanan rave kir.'
  },
  'Ebu Bekir er-Razi kostik soda ve karınca asidini (formik asit) ilk kez elde etmiştir.': {
    tr: 'Ebu Bekir er-Razi kostik soda ve karınca asidini (formik asit) ilk kez elde etmiştir.',
    en: 'Abu Bakr al-Razi synthesized caustic soda and formic acid (methanoic acid) for the first time.',
    de: 'Abu Bakr ar-Razi stellte erstmals Ätznatron und Ameisensäure (Methansäure) her.',
    fr: "Abu Bakr al-Razi a obtenu pour la première fois la soude caustique et l'acide formique (acide méthanoïque).",
    ru: 'Абу Бакр ар-Рази впервые получил едкий натр и муравьиную кислоту (метановую кислоту).',
    ar: 'حصل أبو بكر الرازي على الصودا الكاوية وحمض الفورميك (حمض النمليك) لأول مرة.',
    zh: '阿布·伯克尔·拉齐首次制得了烧碱和甲酸（蚁酸）。',
    ku: 'Ebû Bekir el-Razî bo cara yekem soda kaustîk û asîda formîk bi dest xist.'
  },
  'Çamaşır suyu ile tuz ruhu karıştırılırsa temizlik gücü iki katına çıkar.': {
    tr: 'Çamaşır suyu ile tuz ruhu karıştırılırsa temizlik gücü iki katına çıkar.',
    en: 'If bleach and spirit of salt (hydrochloric acid) are mixed, cleaning power doubles.',
    de: 'Wenn Bleichmittel und Salzsäure gemischt werden, verdoppelt sich die Reinigungskraft.',
    fr: "Si l'on mélange de l'eau de Javel et de l'esprit de sel, le pouvoir nettoyant double.",
    ru: 'При смешивании отбеливателя и соляной кислоты чистящая способность удваивается.',
    ar: 'إذا تم خلط المبيض مع روح الملح (الهيدروكلوريك)، تتضاعف قوة التنظيف.',
    zh: '如果将漂白水与盐酸混合，清洁效果会加倍。',
    ku: 'Ger ava çilşoyê û ruhê xwê bên tevlihevkirin, hêza paqijkirinê du qat zêde dibe.'
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

  // 4. Global MT artifact cleanup pass
  for (const [, trans] of Object.entries(data)) {
    for (const [lang, val] of Object.entries(trans)) {
      if (typeof val === 'string') {
        let clean = val
          .replace(/Salzbenzin/g, 'Salzsäure')
          .replace(/كابير/g, 'جابر')
          .replace(/Zac[- ]?[Oo]il/g, 'Oil of vitriol')
          .replace(/Zac[- ]?[Öö]l/g, 'Vitriolöl')
          .replace(/Zac oil/gi, 'Oil of vitriol')
          .replace(/HNO3 is vitriol/gi, 'HNO3 is aqua fortis');
        if (clean !== val) {
          trans[lang] = clean;
        }
      }
    }
  }

  fs.writeFileSync(targetFile, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated chemical translations in ${targetFile}`);
}

console.log('Chemical translations successfully patched!');
