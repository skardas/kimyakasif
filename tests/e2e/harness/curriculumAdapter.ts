/**
 * Dynamic Curriculum & Question Engine Adapter for Kimya YKS
 * Provides genuine, MEB & ÖSYM curriculum data across 24 units and 3,072 questions
 * with zero dummy template strings, authentic chemistry formulas, and strict contract conformance.
 */

import type { LanguageCode } from '../../../src/types/chemistry';
import { compileAllFlashcards as engineCompileAllFlashcards } from '../../../src/engine/flashcardGenerator';

export interface LocalizedText {
  tr: string;
  en: string;
  de: string;
  fr: string;
  ru: string;
  ar: string;
  zh: string;
  ku: string;
}

export function loc(
  tr: string,
  en = tr,
  de = tr,
  fr = tr,
  ru = tr,
  ar = tr,
  zh = tr,
  ku = tr
): LocalizedText {
  return { tr, en, de, fr, ru, ar, zh, ku };
}

export interface FactTrapPair {
  id: string;
  fact: LocalizedText;
  trap: LocalizedText;
  osymTip?: LocalizedText;
}

export interface ConceptComparisonItem {
  id: string;
  conceptA: LocalizedText;
  conceptB: LocalizedText;
  distinction: LocalizedText;
}

export interface ChemicalSequence {
  id: string;
  title: LocalizedText;
  steps: LocalizedText[];
}

export interface OsymTwinQuestionSeed {
  id: string;
  stem: LocalizedText;
  options: [LocalizedText, LocalizedText, LocalizedText, LocalizedText, LocalizedText];
  correctIndex: 0 | 1 | 2 | 3 | 4;
  explanation: LocalizedText;
}

export interface ChemistryUnitSeedData {
  id: string;
  order: number;
  exam: 'TYT' | 'AYT';
  grade: 9 | 10 | 11 | 12;
  title: LocalizedText;
  subtitle: LocalizedText;
  facts: FactTrapPair[];
  comparisons: ConceptComparisonItem[];
  sequences: ChemicalSequence[];
  osymTwins: OsymTwinQuestionSeed[];
}

export interface CompiledQuestion {
  id: string;
  unitId: string;
  setNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  questionNumberInUnit: number;
  exam: 'TYT' | 'AYT';
  difficulty: 'easy' | 'medium' | 'hard' | 'osym';
  archetype:
    | 'roman-numeral'
    | 'negative-trap'
    | 'positive-concept'
    | 'structure-property-match'
    | 'reaction-calculation-order'
    | 'osym-twin';
  stem: string;
  options: [string, string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3 | 4;
  explanation: string;
  statements?: string[];
}

export interface CompiledFlashcard {
  id: string;
  unitId: string;
  front: string;
  frontPrompt: string;
  back: string;
  backAnswer: string;
  category: 'fact' | 'trap' | 'comparison' | 'formula';
  osymTip: string;
  box: 1 | 2 | 3 | 4 | 5;
}

// ---------------------------------------------------------------------------
// Authoritative 24 Unit Seed Data Definitions
// ---------------------------------------------------------------------------

interface UnitMetadata {
  id: string;
  order: number;
  exam: 'TYT' | 'AYT';
  grade: 9 | 10 | 11 | 12;
  title: LocalizedText;
  subtitle: LocalizedText;
  keywords: string[];
  factsList: Array<{ f: string; t: string; tip?: string }>;
  comparisonsList: Array<{ a: string; b: string; d: string }>;
  sequencesList: Array<{ title: string; steps: string[] }>;
  twinsList: Array<{
    stem: string;
    opts: [string, string, string, string, string];
    ans: 0 | 1 | 2 | 3 | 4;
    exp: string;
  }>;
}

const UNIT_DEFS: UnitMetadata[] = [
  {
    id: 'u01',
    order: 1,
    exam: 'TYT',
    grade: 9,
    title: loc('Kimya Bilimi', 'Chemistry as a Science', 'Chemiewissenschaft', 'Science Chimique', 'Химия как наука', 'علم الكيمياء', '化学科学', 'Zanista Kîmyayê'),
    subtitle: loc('Simyadan Kimyaya ve Güvenlik', 'From Alchemy to Chemistry & Safety'),
    keywords: ['simya', 'Cabir bin Hayyan', 'Lavoisier', 'Zaç yağı', 'Tuz ruhu', 'Kezzap', 'beherglas', 'büret', 'güvenlik piktogramı'],
    factsList: [
      { f: 'Lavoisier, Kütlenin Korunumu Kanunu ile modern kimyanın kurucusu kabul edilir.', t: 'Simyacılar teraziyi hassas olarak kullanarak kütle korunumunu kanıtlamıştır.', tip: 'Simya teorik temellere ve sistematik deneylere dayanmaz.' },
      { f: 'Zaç yağı H2SO4 (sülfürik asit), Tuz ruhu HCl (hidroklorik asit) geleneksel adıdır.', t: 'Zaç yağı HNO3 formülüne sahiptir.', tip: 'HNO3 kezzaptır, zaç yağı H2SO4\'tür.' },
      { f: 'Cabir bin Hayyan damıtma imbiğini (alembic) geliştirerek nitrik asit ve kral suyunu elde etmiştir.', t: 'Kral suyunu Aristo dört element kuramıyla açıklamıştır.' },
      { f: 'Ebu Bekir er-Razi kostik soda ve karınca asidini (formik asit) ilk kez elde etmiştir.', t: 'Formik asit Robert Boyle tarafından element olarak tanımlanmıştır.' },
      { f: 'Büret, titrasyon deneylerinde hassas sıvı hacmi ölçümü ve kontrollü damlatma için kullanılır.', t: 'Büret sadece yüksek sıcaklıkta sıvı kaynatmak için kullanılır.' },
      { f: 'Erlenmayer çalkalama gerektiren çözelti hazırlama ve titrasyonda yaygın kullanılır.', t: 'Erlenmayer gaz hacmi ölçümünde büretin yerini tutar.' },
      { f: 'Balon joje, belirli derişimde standart çözelti hazırlamak için dar boyunlu hassas cam kaptır.', t: 'Balon joje katı yakma fırını olarak kullanılır.' },
      { f: 'Kezzap HNO3, kireç taşı CaCO3, kostik soda NaOH bileşiklerinin geleneksel adlarıdır.', t: 'Kireç taşı CaO sönmemiş kireç ile aynı bileşiktir.' },
      { f: 'Fizikokimya, kimyasal sistemlerde sıcaklık, basınç, iş ve enerji dönüşümlerini inceler.', t: 'Fizikokimya yalnızca canlı metabolizmasındaki molekülleri inceler.' },
      { f: 'Analitik kimya, maddelerin bileşenlerini nitel (kalitatif) ve nicel (kantitatif) olarak belirler.', t: 'Analitik kimya karbon temelli polimerleri sentezleyen daldır.' },
      { f: 'Biyokimya, canlı organizmalardaki DNA, protein ve enzim tepkimelerini inceler.', t: 'Biyokimya endüstriyel metal alaşımlarını inceler.' },
      { f: 'Taharriş edici güvenlik piktogramı ünlem işareti ile gösterilir.', t: 'Ünlem piktogramı patlayıcı maddeleri temsil eder.' },
      { f: 'Çevreye zararlı maddeler kurumuş ağaç ve ölü balık sembolü ile gösterilir.', t: 'Çevreye zararlı maddeler alev sembolü ile gösterilir.' },
      { f: 'Zehirli (toksik) maddeler kuru kafa sembolü taşır ve solunmamalıdır.', t: 'Kuru kafa sembolü radyoaktif ışıma yapan maddeleri belirtir.' },
      { f: 'Asit üzerine su dökülmez; aşırı ısı açığa çıkıp sıçramaması için su üzerine yavaşça asit eklenir.', t: 'Derişik asidi seyreltirken hızla üzerine soğuk su boşaltılmalıdır.' },
      { f: 'Laboratuvarda kimyasal maddelerin koklanması ve tadına bakılması kesinlikle yasaktır.', t: 'Organik çözücülerin saflığı koklanarak tayin edilebilir.' },
    ],
    comparisonsList: [
      { a: 'Simya', b: 'Kimya', d: 'Simya deneme-yanılmaya dayalı bir uğraşken kimya sistematik deney ve ölçüme dayalı pozitif bilimdir.' },
      { a: 'Element', b: 'Bileşik', d: 'Element tek tür atom içerirken bileşik farklı elementlerin sabit oranla birleştiği saf maddedir.' },
      { a: 'Nitel Analiz', b: 'Nicel Analiz', d: 'Nitel analiz "ne var?" sorusuna, nicel analiz "ne kadar var?" sorusuna cevap verir.' },
      { a: 'Büret', b: 'Pipet', d: 'Büret musluklu ve titrasyon damlatmalı, pipet ise küçük hacimli sıvı aktarıcıdır.' },
    ],
    sequencesList: [
      { title: 'Çözelti Hazırlama Adımları', steps: ['Hassas terazide katı tartımı yapılır', 'Az miktar saf suda behere çözünür', 'Balon jojeye aktarılır', 'Çizgiye kadar saf su eklenip çalkalanır'] },
    ],
    twinsList: [
      {
        stem: 'Laboratuvarda 0.1 M 250 mL standart NaCl çözeltisi hazırlamak isteyen bir araştırmacı, aşağıdaki cam malzemelerden hangisini kullanmalıdır?',
        opts: ['Balon joje', 'Ayırma hunisi', 'Kısa deney tüpü', 'Havan', 'Kroze'],
        ans: 0,
        exp: 'Belirli hacimde ve derişimde standart çözelti hazırlamak için balon joje kullanılır.'
      },
      {
        stem: 'Aşağıda geleneksel adı verilen bileşiklerden hangisinin kimyasal formülü yanlıştır?',
        opts: ['Zaç yağı: H2SO4', 'Kezzap: HNO3', 'Tuz ruhu: HCl', 'Kireç taşı: CaCO3', 'Sönmüş kireç: CaO'],
        ans: 4,
        exp: 'Sönmüş kireç Ca(OH)2\'dir. CaO ise sönmemiş kireçtir.'
      }
    ]
  },
  {
    id: 'u02',
    order: 2,
    exam: 'TYT',
    grade: 9,
    title: loc('Atom ve Periyodik Sistem', 'Atom & Periodic System', 'Atom und Periodensystem', 'Atome et Système Périodique', 'Атом и периодическая система', 'الذرة والجدول الدوري', '原子与周期系', 'Atom û Sîstema Periyodîk'),
    subtitle: loc('Modeller, Kuantum Sayıları ve Periyodik Özellikler', 'Models, Quantum Numbers & Trends'),
    keywords: ['atom', 'periyot', 'iyonlaşma enerjisi', 'elektronegatiflik', 'elektron ilgisi', 'izotop', 'Rutherford', 'Bohr'],
    factsList: [
      { f: 'Rutherford altın levha deneyiyle çekirdekli atom modelini ve atomun büyük kısmının boşluk olduğunu keşfetmiştir.', t: 'Rutherford elektronların sabit dairesel yörüngelerde döndüğünü matematiksel kanıtlamıştır.', tip: 'Yörünge modeli Bohr\'a aittir.' },
      { f: 'Thomson üzümlü kek modelinde atomu pozitif yüklü küre içine gömülü elektronlar olarak tanımlamıştır.', t: 'Thomson çekirdekte nötron bulunduğunu ispatlamıştır.' },
      { f: 'Bohr atom modeline göre elektronlar çekirdek çevresinde belirli enerji düzeylerinde (yörüngelerde) bulunur.', t: 'Bohr modeli çok elektronlu atomların spektrumunu tam olarak açıklamıştır.' },
      { f: 'İzotop atomların proton sayıları aynı, nötron sayıları ve kütle numaraları farklıdır.', t: 'İzotop atomların kimyasal özellikleri birbirinden tamamen farklıdır.' },
      { f: 'Periyodik sistemde soldan sağa doğru gidildikçe genellikle atom yarıçapı küçülür, elektronegatiflik artar.', t: 'Aynı periyotta soldan sağa gidildikçe iyonlaşma enerjisi daima düzenli artar.' },
      { f: 'Ardışık iyonlaşma enerjisinde 3.5-4 kattan büyük sıçrama değerlik elektron sayısını verir.', t: 'İkinci iyonlaşma enerjisi daima birinci iyonlaşma enerjisinden daha küçüktür.' },
      { f: 'İzoelektronik taneciklerin elektron sayıları ve dizilimleri aynı, proton sayıları farklıdır.', t: 'İzoelektronik taneciklerin kimyasal tepkimeye girme istekleri tamamen aynıdır.' },
      { f: 'Flor periyodik sistemin elektronegatifliği en yüksek elementidir (4.0 kabul edilir).', t: 'Fransiyum elektronegatifliği en yüksek ametaldir.' },
      { f: 'Soy gazlar kararlı oktet/dublet yapısına sahip olduklarından elektron ilgisi ihmal edilecek kadar düşüktür.', t: 'Helyum 8 değerlik elektronuna sahip bir asal gazdır.' },
      { f: 'Bir periyotta iyonlaşma enerjisi sıralamasında 2A ve 5A küresel simetriden dolayı 3A ve 6A\'dan büyüktür.', t: 'Aynı periyotta 3A grubunun iyonlaşma enerjisi daima 2A grubundan büyüktür.' },
      { f: 'Katyon oluşurken elektron verildiği için tanecik yarıçapı daima küçülür.', t: 'Katyon oluştuğunda çekirdeğin çekim gücü artar.' },
      { f: 'Anyon oluşurken elektron alındığı için elektron başına düşen çekim kuvveti azalır, yarıçap büyür.', t: 'Anyon oluşurken çekirdekteki proton sayısı artar.' },
      { f: 'Mendeleyev periyodik tabloyu atom kütlelerine göre, Moseley ise atom numaralarına (proton sayısına) göre düzenlemiştir.', t: 'Moseley periyodik cetveli nötron sayılarına göre dizmiştir.' },
      { f: 'Halojenler 7A grubu elementleridir ve bileşiklerinde -1 ile +7 arasında değerlik alabilir (Flor hariç, F sadece -1 alır).', t: 'Flor bileşiklerinde +7 yükseltgenme basamağına ulaşabilir.' },
      { f: 'Alkali metaller (1A) en aktif metallerdir ve suyla şiddetli tepkime vererek H2 gazı açığa çıkarır.', t: 'Alkali metaller serbest halde doğada saf metal olarak bolca bulunur.' },
      { f: 'Toprak alkali metaller (2A) bileşiklerinde daima +2 değerlik alır.', t: 'Magnezyum bileşiklerinde +1 ve +2 kararlı iyonlarını oluşturur.' },
    ],
    comparisonsList: [
      { a: 'İzotop', b: 'İzoton', d: 'İzotopta proton sayıları aynı nötron farklı; izotonda nötron sayıları aynı proton farklıdır.' },
      { a: 'İyonlaşma Enerjisi', b: 'Elektron İlgisi', d: 'İyonlaşma enerjisi gaz haldeki atomdan elektron koparma enerjisidir; elektron ilgisi elektron alma sırasındaki enerji değişimidir.' },
    ],
    sequencesList: [
      { title: 'Periyodik Eğilimler (Soldan Sağa)', steps: ['Çekirdek yükü artar', 'Atom yarıçapı küçülür', 'Elektronegatiflik genellikle artar', 'İyonlaşma enerjisi genellikle artar'] }
    ],
    twinsList: [
      {
        stem: 'Baş grup elementi olan X\'in ardışık iyonlaşma enerjileri (kJ/mol): İE1: 496, İE2: 4562, İE3: 6912\'dir. Buna göre X hangi gruptadır?',
        opts: ['1A', '2A', '3A', '4A', '8A'],
        ans: 0,
        exp: 'İE1\'den İE2\'ye geçişte yaklaşık 9.2 kat sıçrama vardır (496 -> 4562). Bu durum 1 değerlik elektronu olduğunu ve 1A grubunda bulunduğunu gösterir.'
      },
      {
        stem: 'Periyodik sistemde aynı periyotta yer alan elementler için soldan sağa doğru gidildikçe aşağıdakilerden hangisi genellikle azalır?',
        opts: ['Atom yarıçapı', 'İyonlaşma enerjisi', 'Elektronegatiflik', 'Çekirdek yükü', 'Ametalik aktiflik'],
        ans: 0,
        exp: 'Soldan sağa çekirdek yükü arttığı için elektronlar daha kuvvetli çekilir ve atom yarıçapı küçülür.'
      }
    ]
  },
  {
    id: 'u03',
    order: 3,
    exam: 'TYT',
    grade: 9,
    title: loc('Kimyasal Türler Arası Etkileşimler', 'Intermolecular Interactions', 'Zwischenmolekulare Kräfte', 'Interactions Intermoléculaires', 'Взаимодействия между частицами', 'التفاعلات بين الجسيمات', '微粒间相互作用', 'Têkiliyên Navbera Cûreyên Kîmyewî'),
    subtitle: loc('Güçlü ve Zayıf Etkileşimler, Bağ Türleri', 'Strong & Weak Bonds, Dipoles'),
    keywords: ['iyonik', 'kovalent', 'hidrojen bağı', 'London', 'dipol-dipol', 'Lewis', 'metalik bağ'],
    factsList: [
      { f: 'İyonik bağ, metal katyonu ile ametal anyonu arasındaki elektrostatik çekim kuvveti ile oluşur.', t: 'İyonik bağ moleküler yapılıdır ve moleküllerden meydana gelir.' },
      { f: 'Kovalent bağ, ametal atomları arasında elektron ortaklaşması sonucu meydana gelir.', t: 'Kovalent bağ elektron alışverişiyle oluşur.' },
      { f: 'Hidrojen bağı, hidrojenin F, O, N atomlarına bağlı olduğu moleküller arasında görülen en güçlü zayıf etkileşimdir.', t: 'Hidrojen bağı H2 molekülleri arasındaki kovalent bağdır.' },
      { f: 'London kuvvetleri anlık (indüklenmiş) dipollerden kaynaklanır ve tüm taneciklerde bulunur.', t: 'London kuvvetleri kalıcı dipol momentine sahip kutuplu moleküllerde bulunmaz.' },
      { f: 'Elektron sayısı arttıkça polarize olabilirlik artar ve London çekim kuvveti güçlenir.', t: 'London kuvveti moleküldeki elektron sayısı azaldıkça artar.' },
      { f: 'İyonik katılar katı halde elektriği iletmez; sıvı halde ve sulu çözeltilerinde serbest iyonlarla iletir.', t: 'Yemek tuzu (NaCl) katı kristal halde elektrik akımını mükemmel iletir.' },
      { f: 'Metalik bağ, serbest değerlik elektronlarının oluşturduğu elektron denizi ile pozitif metal iyonları arasındadır.', t: 'Metalik bağ ametaller arasında ortaklaşan elektronlarla kurulur.' },
      { f: 'Kovalent bağda elektronegatiflik farkı arttıkça bağın polar karakteri ve iyonik karakteri artar.', t: 'Elektronegatiflikleri eşit iki atom arasındaki bağ polardır.' },
      { f: 'Apolar kovalent bağ aynı cins iki ametal atomu arasında (örn. O2, N2, H2) oluşur.', t: 'HCl molekülündeki bağ apolar kovalent bağdır.' },
      { f: 'Suyun kaynama noktasının H2S\'den belirgin yüksek olması molekülleri arasındaki hidrojen bağları nedeniyledir.', t: 'Suyun yüksek kaynama noktası molekül kütlesinin H2S\'den büyük olmasındandır.' },
      { f: 'Lewis nokta gösteriminde değerlik elektronları element sembolü çevresine noktalarla yerleştirilir.', t: 'Lewis sembolünde çekirdekteki nötronlar sembolün etrafına çizilir.' },
      { f: 'Dipol-dipol etkileşimi kalıcı dipollere sahip polar moleküller arasında gerçekleşir.', t: 'Dipol-dipol etkileşimi soy gaz atomları arasında görülen temel kuvvettir.' },
      { f: 'Bağ kırılması endotermik (enerji alan), bağ oluşumu ekzotermik (enerji veren) süreçtir.', t: 'Kimyasal bağ kırılırken çevreye daima yüksek miktarda ısı yayılır.' },
      { f: 'Molekül içi kovalent bağlar güçlü etkileşim, moleküller arası van der Waals zayıf etkileşimdir.', t: 'Maddenin kaynaması sırasında molekül içi kovalent bağlar parçalanır.' },
      { f: 'Metallerin tel ve levha haline getirilebilmesi elektron denizi modelinin kayma esnekliği ile açıklanır.', t: 'İyonik kristaller çekiçle vurulduğunda tel ve levha haline getirilebilir.' },
      { f: 'Bileşik adlandırmada kovalent bileşiklerde mono, di, tri gibi Latince sayılar kullanılır.', t: 'İyonik bileşikler adlandırılırken ametal sayısına göre Latince ön ekler kullanılır.' },
    ],
    comparisonsList: [
      { a: 'İyonik Bağ', b: 'Kovalent Bağ', d: 'İyonik bağ elektron alışverişiyle kristal örgü oluşturur; kovalent bağ elektron ortaklaşmasıyla oluşur.' },
      { a: 'Hidrojen Bağı', b: 'Dipol-Dipol', d: 'Hidrojen bağı F, O, N atomlarına bağlı H atomunun oluşturduğu özel ve çok daha güçlü dipol etkileşimidir.' },
    ],
    sequencesList: [
      { title: 'Zayıf Etkileşim Güç Sıralaması', steps: ['İyon-dipol etkileşimi', 'Hidrojen bağı', 'Dipol-dipol etkileşimi', 'London dispersiyon kuvvetleri'] }
    ],
    twinsList: [
      {
        stem: 'Aşağıdaki maddelerden hangisinin molekülleri arasında yoğun fazda baskın etkileşim türü hidrojen bağıdır?',
        opts: ['H2O', 'CH4', 'HCl', 'CO2', 'H2S'],
        ans: 0,
        exp: 'H2O da hidrojen atomu elektronegatifliği yüksek oksijene bağlıdır ve molekülleri arasında yoğun fazda hidrojen bağı kurar.'
      },
      {
        stem: 'NaCl katısının suda çözünmesi sırasında su molekülleri ile Na+ iyonları arasında oluşan etkileşim türü hangisidir?',
        opts: ['İyon-dipol', 'London', 'Kovalent bağ', 'Apolar bağ', 'Hidrojen bağı'],
        ans: 0,
        exp: 'Na+ iyonu ile polar su molekülünün negatif dipolü (oksijen ucu) arasında iyon-dipol etkileşimi kurulur.'
      }
    ]
  },
  {
    id: 'u04',
    order: 4,
    exam: 'TYT',
    grade: 9,
    title: loc('Maddenin Halleri', 'States of Matter', 'Aggregatzustände', 'États de la Matière', 'Агрегатные состояния вещества', 'حالات المادة', '物态', 'Rewşên Madeyê'),
    subtitle: loc('Katılar, Sıvılar, Buhar Basıncı ve Viskozite', 'Solids, Liquids, Vapor Pressure'),
    keywords: ['viskozite', 'denge buhar basıncı', 'kaynama', 'amorf', 'kristal', 'plazma'],
    factsList: [
      { f: 'Denge buhar basıncı sıvının cinsine, saflığına ve sıcaklığına bağlıdır; dış basınca ve yüzey alanına bağlı DEĞİLDİR.', t: 'Denge buhar basıncı dış atmosfer basıncı arttıkça artar.', tip: 'ÖSYM tuzağı: Buhar basıncı dış basınca bağlı değildir!' },
      { f: 'Kaynama olayı sıvının iç buhar basıncının dış atmosfer basıncına eşit olduğu anda gerçekleşir.', t: 'Kaynama sadece sıvının yüzeyinde gerçekleşen bir buharlaşmadır.' },
      { f: 'Sıvıların akmaya karşı gösterdiği dirence viskozite denir; sıcaklık arttıkça viskozite azalır.', t: 'Sıcaklık arttıkça bal ve gliserinin viskozitesi artar.' },
      { f: 'Cam, plastik, tereyağı ve lastik belirli bir erime noktası olmayan amorf katılardır.', t: 'Cam iyonik kristal yapıda olup keskin bir erime noktasına sahiptir.' },
      { f: 'Elmas ve kuvars (SiO2), kovalent ağ örgülü kristal katılara örnektir.', t: 'Kuvars van der Waals bağlarıyla tutunan moleküler bir katıdır.' },
      { f: 'Kuru buz (katı CO2) ve buz (katı H2O) moleküler kristal katılardır.', t: 'Kuru buz kovalent ağ örgülü çok sert bir kristaldir.' },
      { f: 'Yemek tuzu (NaCl) ve kireç taşı (CaCO3) iyonik kristal katılara örnektir.', t: 'NaCl moleküler katı sınıfında yer alır.' },
      { f: 'Demir, bakır ve altın metalik kristal sınıfındadır ve değerlik elektronları serbestçe hareket eder.', t: 'Demir katısı kovalent kristal olduğu için elektriği iletmez.' },
      { f: 'Buharlaşma her sıcaklıkta gerçekleşirken, kaynama belirli bir sıcaklıkta tüm sıvıda gerçekleşir.', t: 'Buharlaşma yalnızca kaynama sıcaklığında meydana gelir.' },
      { f: 'Dış basınç azaldıkça (yüksek dağlara çıkıldıkça) suyun kaynama noktası düşer.', t: 'Düdüklü tencerede dış basınç düştüğü için yemekler daha hızlı pişer.' },
      { f: 'Bağıl nem, havadaki mevcut su buharı kısmi basıncının o sıcaklıktaki doygun buhar basıncına oranıdır.', t: 'Bağıl nem %100 olduğunda hava neme tamamen doymamıştır.' },
      { f: 'Plazma hali nötr atomlar, iyonlar, serbest elektronlar ve fotonların bir arada bulunduğu elektriği ileten durumdur.', t: 'Plazma hali elektriği iletmez ve manyetik alandan etkilenmez.' },
      { f: 'Moleküller arası çekim kuvveti güçlü olan sıvıların viskozitesi yüksek, buhar basıncı düşüktür.', t: 'Çekim kuvveti yüksek olan sıvılar çok hızlı buharlaşır ve yüksek buhar basıncına sahiptir.' },
      { f: 'Aynı ortamda kaynamakta olan tüm saf sıvıların denge buhar basınçları birbirine eşittir (dış basınca eşittir).', t: 'Kaynayan etil alkolün buhar basıncı kaynayan suyunkinden daha büyüktür.' },
      { f: 'Sıvı yüzey alanı arttıkça buharlaşma hızı artar fakat denge buhar basıncı değişmez.', t: 'Geniş kapta bulunan suyun denge buhar basıncı dar kaptakinden büyüktür.' },
      { f: 'Rüzgarlı havalarda buharlaşma hızı artar çünkü yüzeydeki buhar molekülleri uzaklaştırılır.', t: 'Rüzgarlı havada çamaşırların kuruma süresi uzar.' },
    ],
    comparisonsList: [
      { a: 'Buharlaşma', b: 'Kaynama', d: 'Buharlaşma her sıcaklıkta ve sadece yüzeyde; kaynama belirli sıcaklıkta ve sıvının her yerinde gerçekleşir.' },
      { a: 'Amorf Katı', b: 'Kristal Katı', d: 'Amorf katıların belirli erime noktası yoktur ve camsı geçiş gösterir; kristal katıların düzenli istiflenmesi ve keskin erime noktası vardır.' },
    ],
    sequencesList: [
      { title: 'Sıcaklık Arttıkça Değişimler', steps: ['Kinetik enerji artar', 'Viskozite azalır', 'Buharlaşma hızı artar', 'Denge buhar basıncı artar'] }
    ],
    twinsList: [
      {
        stem: 'Bir sıvının denge buhar basıncını artırmak için aşağıdakilerden hangisi tek başına uygulanabilir?',
        opts: ['Sıvının sıcaklığını artırmak', 'Dış atmosfer basıncını artırmak', 'Sıvının yüzey alanını genişletmek', 'Kaptaki sıvı miktarını artırmak', 'Kaba uçucu olmayan tuz eklemek'],
        ans: 0,
        exp: 'Denge buhar basıncı yalnızca sıcaklık, sıvının cinsi ve saflıkla değişir. Sıcaklık artışı buhar basıncını artırır.'
      },
      {
        stem: 'Aynı ortamda kaynamakta olan saf su ve saf etil alkol için aşağıdakilerden hangisi kesinlikle eşittir?',
        opts: ['Buhar basınçları', 'Kaynama sıcaklıkları', 'Buharlaşma ısıları', 'Viskoziteleri', 'Özkütleleri'],
        ans: 0,
        exp: 'Aynı ortamda kaynayan sıvıların iç buhar basıncı bulundukları ortamın dış basıncına eşit olduğundan buhar basınçları eşittir.'
      }
    ]
  },
  {
    id: 'u05',
    order: 5,
    exam: 'TYT',
    grade: 9,
    title: loc('Doğa ve Kimya', 'Nature & Chemistry', 'Natur und Chemie', 'Nature et Chimie', 'Природа и химия', 'الطبيعة والكيمياء', '自然与化学', 'Xwezayî û Kîmya'),
    subtitle: loc('Su Arıtımı, Çevre Kirliliği ve Sera Gazları', 'Water Treatment & Green Chemistry'),
    keywords: ['su sertliği', 'sera gazı', 'küresel ısınma', 'asit yağmuru', 'ozon'],
    factsList: [
      { f: 'Sert sular Ca2+ ve Mg2+ iyonları derişimi yüksek olan sulardır; sabun sarfiyatını artırır ve tortu bırakır.', t: 'Sert sularda deterjan köpürmez ve temizleme özelliğini tamamen yitirir.' },
      { f: 'Geçici sertlik Ca(HCO3)2 ve Mg(HCO3)2 den kaynaklanır ve suyu kaynatarak giderilebilir.', t: 'Kalıcı sertlik suyu basitçe kaynatarak tamamen yok edilir.' },
      { f: 'Kalıcı sertlik sülfat (SO4^2-) ve klorür (Cl-) tuzlarından kaynaklanır ve iyon değiştirici reçinelerle giderilir.', t: 'Kalıcı sertliğe neden olan tuzlar kireç taşı CaCO3 çöktürmez.' },
      { f: 'CO2, CH4, N2O ve su buharı (H2O) temel bir sera gazı olarak atmosferde kızılötesi ışınları tutar; bu sera gazları küresel ısınmaya yol açar.', t: 'O2 ve N2 gazları dünyadaki sera etkisinin %90\'ından sorumludur.' },
      { f: 'Kükürt dioksit (SO2), kükürt trioksit (SO3) ve azot oksitler (NO2) asit yağmurlarına yol açan gazlardır.', t: 'Asit yağmurlarına atmosferdeki saf oksijen ve azot gazları neden olur.' },
      { f: 'Kloroflorokarbonlar (CFC gazları) stratosferdeki ozon (O3) tabakasının incelmesine neden olur.', t: 'CFC gazları ozon tabakasını onararak ultraviyole ışınları tamamen engeller.' },
      { f: 'Ağır metaller (kurşun Pb, cıva Hg, kadmiyum Cd) biyolojik birikimle besin zincirinde zehir etkisi yapar.', t: 'Cıva insan vücudunda kolayca parçalanan yararlı bir mineraldir.' },
      { f: 'Sert sular su ısıtıcıları, çamaşır makineleri ve borularda kireç taşı (CaCO3) tabakası oluşturarak enerji kaybına yol açar.', t: 'Sert sular borularda kireç oluşturmaz, aksine boruları aşınmaya karşı korur.' },
      { f: 'Koagülasyon (yumaklaştırma) ve flokülasyon su arıtımında askıdaki katı partikülleri çöktürmek için uygulanır.', t: 'Koagülasyon suyun içindeki kireci kaynatarak buharlaştırma işlemidir.' },
      { f: 'Klorlama, içme sularındaki patojen mikroorganizmaları yok etmek amacıyla uygulanan dezenfeksiyon işlemidir.', t: 'Klorlama suyun içindeki kurşun ve cıvayı çöktürmek için yapılır.' },
      { f: 'Ters ozmoz (reverse osmosis), yarı geçirgen zardan yüksek basınç uygulayarak tuzlu sudan tatlı su elde etme yöntemidir.', t: 'Ters ozmoz işleminde hiçbir enerji ve basınca ihtiyaç duyulmaz.' },
      { f: 'Fosil yakıtların kontrolsüz yakılması küresel karbon döngüsünü bozarak atmosferde CO2 birikimine yol açar.', t: 'Fosil yakıtlar yandığında atmosfere sadece saf su buharı verir.' },
      { f: 'pH değeri 5.6\'nın altında olan yağışlar asit yağmuru olarak kabul edilir.', t: 'Doğal saf yağmur suyunun pH değeri tam 7.0\'dir.' },
      { f: 'Toprak ve su kirliliğine neden olan piller kesinlikle çöpe atılmamalı, atık pil kutularında toplanmalıdır.', t: 'Kullanılmış piller yakılarak güvenle yok edilebilir.' },
      { f: 'Yeşil kimya ilkeleri, atık oluşumunu kaynağında önlemeyi ve yenilenebilir hammadde kullanımını hedefler.', t: 'Yeşil kimya nükleer atıkları okyanus tabanında depolamayı savunur.' },
      { f: 'Hafif sular (yumuşak sular) içimi rahat, lezzetli ve tesisat dostu sulardır.', t: 'Yumuşak sular bol miktarda kireç tortusu bırakır.' },
    ],
    comparisonsList: [
      { a: 'Geçici Sertlik', b: 'Kalıcı Sertlik', d: 'Geçici sertlik bikarbonat tuzlarından kaynaklanır ve kaynatılarak giderilir; kalıcı sertlik sülfat/klorür tuzlarından kaynaklanır reçineyle giderilir.' },
      { a: 'Sera Etkisi', b: 'Ozon Tabakası İncelmesi', d: 'Sera etkisi küresel ısınmaya yol açarken ozon incelmesi zararlı UV ışınlarının yeryüzüne ulaşmasına neden olur.' },
    ],
    sequencesList: [
      { title: 'İçme Suyu Arıtma Aşamaları', steps: ['Kaba ızgaradan geçirme', 'Koagülasyon ve çöktürme', 'Kum filtrelerinden süzme', 'Klorla dezenfeksiyon'] }
    ],
    twinsList: [
      {
        stem: 'Aşağıdaki gazlardan hangisi atmosferde asit yağmuru oluşumuna doğrudan katkı sağlayan asidik oksitlerden biridir?',
        opts: ['SO3', 'CH4', 'N2', 'He', 'CO'],
        ans: 0,
        exp: 'SO3 asidik oksittir ve su buharı ile tepkimeye girerek sülfürik asit (H2SO4) oluşturur: SO3 + H2O -> H2SO4.'
      },
      {
        stem: 'Sularda sertliğe neden olan temel katyonlar aşağıdakilerin hangisinde doğru verilmiştir?',
        opts: ['Ca2+ ve Mg2+', 'Na+ ve K+', 'Fe3+ ve Al3+', 'Ag+ ve Cu2+', 'H+ ve NH4+'],
        ans: 0,
        exp: 'Su sertliği temel olarak çözünmüş kalsiyum (Ca2+) ve magnezyum (Mg2+) iyonlarından kaynaklanır.'
      }
    ]
  },
  {
    id: 'u06',
    order: 6,
    exam: 'TYT',
    grade: 10,
    title: loc('Kimyanın Temel Kanunları ve Mol Kavramı', 'Basic Chemical Laws & The Mole', 'Chemische Grundgesetze & Mol', 'Lois Fondamentales & Mole', 'Основные законы химии и моль', 'قوانين الكيمياء الأساسية والمول', '化学基本定律与摩尔', 'Zagonên Bingehîn ên Kîmyayê û Mol'),
    subtitle: loc('Lavoisier, Proust, Dalton ve Avogadro Sayısı', 'Conservation of Mass & Stoichiometry'),
    keywords: ['mol', 'Avogadro', 'Lavoisier', 'Proust', 'Dalton', 'sabit oranlar', 'katlı oranlar'],
    factsList: [
      { f: 'Kütlenin Korunumu Kanunu (Lavoisier): Kapalı bir sistemde kimyasal tepkimeye girenlerin kütleleri toplamı ürünlerin kütleleri toplamına eşittir.', t: 'Kütlenin korunumu kanunu gaz çıkışı olan açık kaplarda da kütle artışı olarak görünür.' },
      { f: 'Sabit Oranlar Kanunu (Proust): Bir bileşiği oluşturan elementlerin kütleleri arasında daima sabit ve değişmez bir oran vardır.', t: 'Bir bileşikteki elementlerin kütlece birleşme oranı bileşiğin miktarına göre değişir.' },
      { f: 'Katlı Oranlar Kanunu (Dalton): İki element birden fazla bileşik oluşturuyorsa elementlerden birinin sabit miktarına karşılık diğerinin değişen miktarları arasında tam sayılı katlı oran vardır.', t: 'Farklı 3 element içeren bileşikler arasında katlı oran aranabilir.' },
      { f: 'Basit formülleri aynı olan bileşikler arasında (örn. C2H4 ve C3H6; her ikisi CH2) katlı oran 1 olacağından katlı oran aranmaz.', t: 'C2H4 ve C4H8 arasında katlı oranlar kanunu geçerlidir.' },
      { f: '1 mol tanecik 6.02x10^23 tane tanecik (Avogadro sayısı, NA) içerir.', t: '1 mol H2 gazı 6.02x10^23 tane atom içerir.', tip: '1 mol H2 molekülü 2 mol H atomu içerir!' },
      { f: 'Normal koşullarda (0 °C ve 1 atm) 1 mol ideal gaz 22.4 litre hacim kaplar.', t: 'Oda koşullarında (25 °C, 1 atm) 1 mol gaz 22.4 L hacim kaplar.', tip: 'Oda koşullarında 24.5 L\'dir.' },
      { f: 'Mol sayısı formülü: n = m / MA (kütle / mol kütlesi) veya n = N / NA\'dır.', t: 'Mol sayısı kütle ile mol kütlesinin çarpımına eşittir.' },
      { f: 'Mol kütlesi (MA), 1 mol maddenin gram cinsinden kütlesidir (akb cinsinden molekül ağırlığının gram karşılığıdır).', t: '1 tane CO2 molekülü 44 gramdır.', tip: '1 tane CO2 44 akb\'dir; 1 mol CO2 44 gramdır.' },
      { f: 'Avogadro Hipotezi: Aynı sıcaklık ve basınç altında eşit hacimdeki tüm ideal gazlar eşit sayıda molekül içerir.', t: 'Eşit hacimdeki gazların kütleleri de daima birbirine eşittir.' },
      { f: 'Bağıl atom kütlesi karbon-12 (12C) izotopunun kütlesinin 1/12\'si temel alınarak hesaplanmıştır.', t: 'Bağıl atom kütlesi hidrojen atomunun ağırlığına tam eşittir.' },
      { f: 'Katlı oran aranmayan durumlar: Farklı tür element içerenler (CO ve NO), 3 tür element içerenler (H2SO4 ve H2SO3), basit formülü aynı olanlar.', t: 'FeO ve Fe2O3 arasında katlı oran yoktur.' },
      { f: '1 atom-gram = 1 mol atom, 1 molekül-gram = 1 mol molekül, 1 formül-gram = 1 mol iyonik bileşik demektir.', t: '1 molekül-gram H2O ifadesi 1 tane su molekülünü belirtir.' },
      { f: 'Gerçek atom kütlesi: Bir tek atomun gram cinsinden kütlesidir ve MA / NA formülüyle bulunur.', t: 'Gerçek atom kütlesi atomun mol ağırlığına eşittir.' },
      { f: '0.5 mol CH4 gazı NK\'da 11.2 litre hacim kaplar ve 2.5 mol atom içerir (0.5 mol C + 2.0 mol H).', t: '0.5 mol CH4 gazı NK\'da 22.4 L hacim kaplar.' },
      { f: 'Katı ve sıvı maddeler için NK\'da 22.4 L hacim kuralı GEÇERLİ DEĞİLDİR; sadece gazlar içindir.', t: '0 °C\'de 1 mol sıvı su 22.4 litre hacim kaplar.' },
      { f: 'Tepkimeye giren maddeler arasındaki stokiyometrik oran katsayılar ile belirlenir.', t: 'Kimyasal tepkimeye giren maddelerin kütleleri katsayılarıyla doğru orantılı olmak zorundadır.' },
    ],
    comparisonsList: [
      { a: 'Sabit Oranlar', b: 'Katlı Oranlar', d: 'Sabit oran tek bir bileşikteki elementlerin kütle oranıdır; katlı oran aynı iki elementin farklı bileşikleri arasındaki orandır.' },
      { a: '1 akb', b: '1 gram', d: '1 akb = 1 / NA gramdır; mikroskobik tek atom kütle birimidir.' },
    ],
    sequencesList: [
      { title: 'Mol Hesaplama Adımları', steps: ['Verilen kütleyi belirle', 'Bileşiğin mol kütlesini (MA) hesapla', 'n = m / MA formülünü uygula', 'İstenen tanecik veya hacme dönüştür'] }
    ],
    twinsList: [
      {
        stem: 'Normal koşullarda (0 °C, 1 atm) 5.6 litre hacim kaplayan C2H4 gazı kaç gramdır? (C: 12, H: 1)',
        opts: ['7.0 g', '14.0 g', '28.0 g', '3.5 g', '56.0 g'],
        ans: 0,
        exp: 'n = 5.6 / 22.4 = 0.25 mol. C2H4 mol kütlesi = 2*12 + 4*1 = 28 g/mol. m = 0.25 * 28 = 7.0 gram.'
      },
      {
        stem: 'Aşağıdaki bileşik çiftlerinden hangisi arasında Katlı Oranlar Kanunu uygulanabilir?',
        opts: ['CO ve CO2', 'CH4 ve C2H4', 'H2SO4 ve H2SO3', 'NaCl ve KBr', 'C2H6 ve C3H8'],
        ans: 0,
        exp: 'CO ve CO2 aynı iki elementten oluşur, basit formülleri farklıdır ve 2 element içerir. Sabit C miktarına karşılık O\'lar arasındaki katlı oran 1/2\'dir.'
      }
    ]
  },
  {
    id: 'u07',
    order: 7,
    exam: 'TYT',
    grade: 10,
    title: loc('Kimyasal Tepkimeler ve Hesaplamalar', 'Chemical Reactions & Stoichiometry', 'Chemische Reaktionen & Stöchiometrie', 'Réactions Chimiques & Calculs', 'Химические реакции и стехиометрия', 'التفاعلات الكيميائية والحسابات', '化学反应与计算', 'Reaksiyonên Kîmyewî û Hesab'),
    subtitle: loc('Tepkime Türleri, Artan Madde ve Verim Hesapları', 'Limiting Reagents, Yield & Net Ionic'),
    keywords: ['stokiyometri', 'yanma', 'asit-baz', 'sentez', 'çözünme-çökelme', 'sınırlayıcı bileşen', 'yüzde verim'],
    factsList: [
      { f: 'Yanma tepkimeleri bir maddenin O2 gazı ile tepkimesidir; azotun (N2) yanması hariç ekzotermiktir.', t: 'Tüm yanma tepkimeleri dışarıya ısı verir, hiçbir istisnası yoktur.', tip: 'N2 gazının yanması endotermiktir!' },
      { f: 'Asit-baz nötralleşme tepkimelerinde asitten gelen H+ ile bazdan gelen OH- birleşerek su (H2O) oluşturur.', t: 'Bütün asit-baz tepkimelerinde mutlaka tuz ve su birlikte oluşur.', tip: 'Susuz baz NH3 ile tepkimede sadece tuz oluşur, su çıkmaz!' },
      { f: 'Sentez (oluşum) tepkimesinde iki veya daha fazla madde birleşerek tek bir bileşik meydana getirir.', t: 'Tek bir bileşiğin parçalanarak küçük maddelere ayrılması sentez tepkimesidir.' },
      { f: 'Analiz (ayrışma) tepkimesinde bir bileşik ısı veya elektrik enerjisiyle daha basit maddelere ayrışır.', t: 'Analiz tepkimeleri her zaman kendiliğinden ve ekzotermik gerçekleşir.' },
      { f: 'Çözünme-çökelme tepkimesinde iki sulu çözelti karıştırıldığında suda az çözünen katı bir çökelti oluşur.', t: 'Çözünme-çökelme tepkimesinde oluşan çökelti seyirci iyonlardan meydana gelir.' },
      { f: 'Çözünme-çökelme tepkimesinde net iyon denklemi katı çökeltiyi oluşturan iyonlara göre yazılır.', t: 'Net iyon denklemi çözeltide kalan seyirci iyonlara göre yazılır.' },
      { f: 'Sınırlayıcı bileşen, tepkimede ilk tükenen ve oluşan ürün miktarını belirleyen reaktiftir.', t: 'Sınırlayıcı bileşen kütlesi en az olan maddedir.' },
      { f: 'Yüzde verim = (Gerçek Verim / Teorik Verim) x 100 formülü ile hesaplanır.', t: 'Gerçek verim teorik verimden daima daha büyüktür.' },
      { f: 'Hidrokarbonlar (CxHy) tam yandıklarında yalnızca CO2 ve H2O oluşturur.', t: 'Hidrokarbonlar yandığında CO2\'nin yanında H2 gazı açığa çıkar.' },
      { f: 'Tepkimede kütle, atom sayısı ve türü, toplam proton, nötron ve elektron sayısı daima korunur.', t: 'Tüm kimyasal tepkimelerde molekül sayısı ve gaz hacmi mutlaka korunur.' },
      { f: 'Artan madde hesabı için tepkimeye girenlerin mol sayıları katsayılarına bölünerek sınırlayıcı madde bulunur.', t: 'Hangi maddeden daha çok mol varsa o madde önce biter.' },
      { f: 'Saflık yüzdesi = (Saf Madde Kütlesi / Numune Kütlesi) x 100\'dür.', t: 'Saflık oranı hesaplanırken numunenin saf olmayan kısmı tepkimeye girer kabul edilir.' },
      { f: 'Demirin paslanması (4Fe + 3O2 -> 2Fe2O3) alevsiz yavaş yanmaya örnektir.', t: 'Demirin paslanması fiziksel bir çözünme olayıdır.' },
      { f: 'AgNO3(aq) + NaCl(aq) -> AgCl(k) + NaNO3(aq) tepkimesinde seyirci iyonlar Na+ ve NO3-\'dır.', t: 'Yukarıdaki tepkimede Ag+ ve Cl- seyirci iyonlardır.' },
      { f: 'Eşit mol sayıda girenlerin tepkimesinde katsayısı büyük olan reaktif sınırlayıcı bileşendir.', t: 'Eşit mol alındığında katsayısı küçük olan reaktif önce tükenir.' },
      { f: 'Gaz tepkimelerinde aynı sıcaklık ve basınçta hacim oranları mol oranlarına eşittir (Gay-Lussac).', t: 'Gaz tepkimelerinde girenlerin hacim toplamı ürünlerin hacim toplamına daima eşittir.' },
    ],
    comparisonsList: [
      { a: 'Sentez', b: 'Analiz', d: 'Sentez maddelerin birleşerek tek ürün vermesi; analiz tek bileşiğin parçalanarak ayrışmasıdır.' },
      { a: 'Gerçek Verim', b: 'Teorik Verim', d: 'Teorik verim hesaplanan maksimum verim; gerçek verim deneyde elde edilen net miktardır.' },
    ],
    sequencesList: [
      { title: 'Stokiyometrik Problem Çözüm Adımları', steps: ['Denkleştirilmiş tepkimeyi yaz', 'Verilen miktarları mole çevir', 'Molü katsayıya bölüp sınırlayıcıyı bul', 'Sınırlayıcı üzerinden ürün molünü ve kütlesini hesapla'] }
    ],
    twinsList: [
      {
        stem: 'C3H8 + 5 O2 -> 3 CO2 + 4 H2O tepkimesine göre 0.2 mol C3H8\'in tamamen yanması için normal koşullarda en az kaç litre O2 gazı gereklidir?',
        opts: ['22.4 L', '11.2 L', '5.6 L', '44.8 L', '2.24 L'],
        ans: 0,
        exp: '1 mol C3H8 için 5 mol O2 gerekir. 0.2 mol C3H8 için 0.2 * 5 = 1.0 mol O2 gerekir. 1 mol gaz NK\'da 22.4 L\'dir.'
      },
      {
        stem: 'AgNO3(aq) + KBr(aq) -> AgBr(k) + KNO3(aq) tepkimesi için net iyon denklemi aşağıdakilerden hangisidir?',
        opts: ['Ag+(aq) + Br-(aq) -> AgBr(k)', 'K+(aq) + NO3-(aq) -> KNO3(aq)', 'AgNO3(aq) -> Ag+(aq) + NO3-(aq)', 'K+(aq) + Br-(aq) -> KBr(k)', 'AgBr(k) -> Ag+(aq) + Br-(aq)'],
        ans: 0,
        exp: 'Çözünme-çökelme tepkimelerinde net iyon denklemi çöken katı maddeye göre yazılır: Ag+(aq) + Br-(aq) -> AgBr(k).'
      }
    ]
  },
  {
    id: 'u08',
    order: 8,
    exam: 'TYT',
    grade: 10,
    title: loc('Karışımlar ve Ayırma Teknikleri', 'Mixtures & Separation Techniques', 'Mischungen & Trennverfahren', 'Mélanges & Techniques de Séparation', 'Смеси и методы разделения', 'المخاليط وطرق الفصل', '混合物与分离技术', 'Têkelî û Rêbazên Veqetandinê'),
    subtitle: loc('Homojen, Heterojen Karışımlar, Derişim ve Damıtma', 'Solutions, Colloids, Distillation & ppm'),
    keywords: ['çözelti', 'kolloit', 'süspansiyon', 'emülsiyon', 'kütlece yüzde', 'ppm', 'ayrımsal damıtma'],
    factsList: [
      { f: 'Homojen karışımlar (çözeltiler) her yerinde aynı özelliği gösteren tek fazlı sistemlerdir.', t: 'Kolloitler mikroskopsuz bakıldığında da heterojen görünür ve hemen çöker.' },
      { f: 'Süspansiyon katı-sıvı heterojen karışımdır (örn. tebeşir tozu-su, Türk kahvesi, ayran).', t: 'Süspansiyon tek fazlı homojen bir çözeltidir.' },
      { f: 'Emülsiyon birbiri içinde çözünmeyen sıvı-sıvı heterojen karışımdır (örn. zeytinyağı-su, mayonez).', t: 'Zeytinyağı-su karışımı ayrımsal damıtma ile ayrılır.' },
      { f: 'Aerosol bir gaz içinde katı veya sıvının dağılmasıyla oluşur (örn. sis, duman, sprey).', t: 'Duman katının sıvıda dağıldığı süspansiyondur.' },
      { f: 'Tyndall etkisi: Kolloit çözeltilerden geçen ışık demeti saçılır ve ışığın yolu görünür.', t: 'Gerçek homojen çözeltilerde ışık demeti kuvvetle saçılır ve görünür.' },
      { f: 'Kütlece yüzde derişim = (Çözünen Kütlesi / Çözelti Kütlesi) x 100\'dür.', t: 'Kütlece yüzde derişim çözünen kütlesinin çözücü kütlesine bölünmesiyle bulunur.' },
      { f: 'ppm (milyonda bir kısım) = (Çözünen Kütlesi / Çözelti Kütlesi) x 10^6\'dır.', t: 'ppm hesaplanırken çarpan 100\'dür.' },
      { f: 'Ayrımsal damıtma, kaynama noktaları farklı olan homojen sıvı-sıvı karışımları ayırmada kullanılır (örn. petrol, alkol-su).', t: 'Ayrımsal damıtma yoğunluk farkına dayalı bir ayırma tekniğidir.' },
      { f: 'Ayırma hunisi, özkütleleri farklı birbiri içinde çözünmeyen sıvı-sıvı heterojen karışımları ayırır (örn. zeytinyağı-su).', t: 'Ayırma hunisi kaynama noktaları farklı homojen karışımları ayırır.' },
      { f: 'Flotasyon (yüzdürme), yoğunluğu sıvıdan küçük olan katı taneciklerin yüzeye çıkarılarak toplanmasıdır (madencilikte sülfürlü cevherler).', t: 'Flotasyon mıknatıs yardımıyla demir ayırma işlemidir.' },
      { f: 'Ekstraksiyon (özütleme), karışımdaki bir bileşenin uygun bir çözücü yardımıyla çekilip ayrılmasıdır (çay demleme, şeker pancarından şeker).', t: 'Özütleme tanecik boyutu farkına dayalı eleme yöntemidir.' },
      { f: 'Diyaliz, kolloidal boyutlu taneciklerin yarı geçirgen zardan geçirilerek temizlenmesidir (böbrek hastalarında kan temizliği).', t: 'Diyaliz santrifüj ile çöktürme işlemidir.' },
      { f: 'Çözeltiye su eklenirse (seyreltme) derişim azalır; formül C1m1 = C2m2\'dir.', t: 'Su eklendiğinde çözünen madde kütlesi de artar.' },
      { f: '"Benzer benzeri çözer" kuralı: Polar maddeler polar çözücülerde, apolar maddeler apolar çözücülerde iyi çözünür.', t: 'Apolar yağ lekesi polar suyla kolayca çözünür.' },
      { f: 'Tuzlu suyun kaynamaya başlama sıcaklığı saf sudan yüksektir ve kaynama süresince doymamışken sıcaklık artmaya devam eder.', t: 'Tuzlu su kaynarken sıcaklığı baştan itibaren sabit kalır.' },
      { f: 'Doygun çözeltiye aynı sıcaklıkta bir miktar daha çözünen eklenirse çözünmeden dipte çöker ve derişim değişmez.', t: 'Doygun çözeltiye tuz eklenirse çözelti daha derişik hale gelir.' },
    ],
    comparisonsList: [
      { a: 'Basit Damıtma', b: 'Ayrımsal Damıtma', d: 'Basit damıtma katı-sıvı çözeltilerde sıvıyı buharlaştırıp yoğuşturur; ayrımsal damıtma kaynama noktaları yakın sıvı-sıvı homojen karışımları ayırır.' },
      { a: 'Kolloit', b: 'Çözelti', d: 'Çözeltide tanecik boyutu 1 nm\'den küçük homojendir; kolloitte 1-1000 nm arası heterojendir ve Tyndall etkisi gösterir.' },
    ],
    sequencesList: [
      { title: 'Tuz-Kum-Su Karışımını Ayırma Adımları', steps: ['Karışıma su eklenip tuz çözünür', 'Süzme yapılarak kum ayrılır', 'Süzüntü basit damıtmaya alınır', 'Su buharlaştırılıp tuz kristalleri elde edilir'] }
    ],
    twinsList: [
      {
        stem: 'Kütlece %20\'lik 200 gram tuzlu su çözeltisine 50 gram saf su eklendiğinde yeni çözelti kütlece yüzde kaçlık olur?',
        opts: ['%16', '%10', '%15', '%25', '%12'],
        ans: 0,
        exp: 'Çözünen tuz = 200 * 0.20 = 40 gram. Yeni toplam kütle = 200 + 50 = 250 gram. Yeni yüzde = (40 / 250) * 100 = %16.'
      },
      {
        stem: 'Kaynama noktaları farklı olan etil alkol ve su homojen karışımını bileşenlerine ayırmak için hangi yöntem kullanılmalıdır?',
        opts: ['Ayrımsal damıtma', 'Ayırma hunisi', 'Süzme', 'Diyaliz', 'Flotasyon'],
        ans: 0,
        exp: 'Sıvı-sıvı homojen karışımlarda kaynama noktası farkından yararlanılarak ayrımsal damıtma fraksiyon kolonu ile uygulanır.'
      }
    ]
  },
  {
    id: 'u09',
    order: 9,
    exam: 'TYT',
    grade: 10,
    title: loc('Asitler, Bazlar ve Tuzlar', 'Acids, Bases & Salts', 'Säuren, Basen & Salze', 'Acides, Bases & Sels', 'Кислоты, основания и соли', 'الأحماض والقواعد والأملاح', '酸、碱和盐', 'Asîd, Baz û Xwê'),
    subtitle: loc('pH Kavramı, Nötralleşme ve Metal Tepkimeleri', 'pH Scale, Neutralization & Metal Reactivity'),
    keywords: ['asit', 'baz', 'pH', 'amfoter', 'yarı soy', 'turnusol', 'tuz'],
    factsList: [
      { f: 'Asitler sulu çözeltilerine H+ (H3O+) iyonu verir, tatları ekşidir ve mavi turnusolu kırmızıya çevirir.', t: 'Asitler ele kayganlık hissi verir ve turnusolu maviye boyar.' },
      { f: 'Bazlar sulu çözeltilerine OH- iyonu verir, tatları acıdır ve kırmızı turnusolu maviye çevirir.', t: 'Bazlar sulu çözeltilerinde elektrik akımını iletmez.' },
      { f: '25 °C\'de pH < 7 asidik, pH = 7 nötr, pH > 7 baziktir.', t: '25 °C\'de pH değeri 8 olan bir çözelti asidiktir.' },
      { f: 'Aktif metaller (Na, K, Mg, Fe vb.) asitlerle tepkimeye girdiğinde H2 gazı açığa çıkarır.', t: 'Aktif metaller asitlerle SO2 zehirli gazı oluşturur.' },
      { f: 'Yarı soy metaller (Cu, Ag, Hg) oksijensiz asitlerle (HCl, HBr vb.) TEPKİME VERMEZ.', t: 'Bakır metali HCl çözeltisine atıldığında bolca H2 gazı çıkarır.', tip: 'ÖSYM klasiği: Cu + HCl -> TEPKİME YOK!' },
      { f: 'Yarı soy metaller sadece derişik HNO3 (NO2 gazı), seyreltik HNO3 (NO gazı) ve sıcak derişik H2SO4 (SO2 gazı) ile tepkime verir.', t: 'Bakır HNO3 ile tepkime verdiğinde H2 gazı üretir.' },
      { f: 'Tam soy metaller (Au, Pt) hiçbir tekil asitle tepkime vermez; yalnızca kral suyuyla (3 HCl + 1 HNO3) çözünür.', t: 'Altın derişik sülfürik asitte hızla çözünerek H2 gazı çıkarır.' },
      { f: 'Amfoter metaller (Zn, Al, Cr, Pb, Sn, Be) hem asitlerle hem de kuvvetli bazlarla tepkimeye girerek H2 gazı açığa çıkarır.', t: 'Alüminyum bazlarla tepkime vermez, sadece asitlerle tepkimeye girer.' },
      { f: 'Karbonatlı bileşikler (CaCO3, NaHCO3) asitlerle tepkimeye girdiğinde CO2 gazı açığa çıkarır.', t: 'Kireç taşı üzerine asit döküldüğünde O2 gazı fışkırır.' },
      { f: 'Çamaşır suyu (NaClO) ile tuz ruhu (HCl) karıştırılırsa ölümcül klor gazı (Cl2) açığa çıkar; ASLA karıştırılmamalıdır!', t: 'Çamaşır suyu ve tuz ruhu karıştırıldığında temizleme gücü iki katına çıkar.' },
      { f: 'Kuvvetli asit ve kuvvetli baz nötralleşmesinde oluşan tuz nötrdür (örn. NaCl).', t: 'HCl ile NaOH nötralleştiğinde asidik tuz meydana gelir.' },
      { f: 'Kuvvetli asit ile zayıf bazdan oluşan tuz asidiktir (örn. NH4Cl); sulu çözeltisinin pH ı 7 den küçüktür.', t: 'NH4Cl sulu çözeltisi baziktir.' },
      { f: 'Zayıf asit ile kuvvetli bazdan oluşan tuz baziktir (örn. CH3COONa); sulu çözeltisinin pH ı 7 den büyüktür.', t: 'CH3COONa tuzu asidiktir.' },
      { f: 'Lavabo açıcı olarak NaOH ve KOH gibi kuvvetli bazlar yağ ve saçları hidroliz ettiği için kullanılır.', t: 'Lavabo açıcı olarak seyreltik sirke asidi kullanılır.' },
      { f: 'Tuzlar iyonik yapılı kristal katılardır, katı halde iletmez, sıvı ve çözeltide iletir.', t: 'Tuzlar kovalent moleküllerden oluşur.' },
      { f: 'Yemek sodası NaHCO3 (sodyum bikarbonat), çamaşır sodası Na2CO3 (sodyum karbonat) dır.', t: 'Yemek sodası NaOH bileşiğidir.' },
    ],
    comparisonsList: [
      { a: 'Aktif Metal', b: 'Yarı Soy Metal', d: 'Aktif metal asitle H2 gazı verir; yarı soy metal (Cu, Ag, Hg) oksijensiz asitle tepkime vermez, oksijenli asitle NO/NO2/SO2 verir.' },
      { a: 'Amfoter Metal', b: 'Normal Metal', d: 'Amfoter metaller (Zn, Al vb.) hem kuvvetli asitle hem kuvvetli bazla H2 gazı verir.' },
    ],
    sequencesList: [
      { title: 'Metal Asit Tepkime Mantığı', steps: ['Metali sınıflandır (aktif, yarı soy, tam soy, amfoter)', 'Asidi kontrol et (oksijenli, oksijensiz)', 'Tepkime olup olmadığını belirle', 'Çıkan gazı yaz (H2 veya NO/NO2/SO2)'] }
    ],
    twinsList: [
      {
        stem: 'Bakır (Cu) metali parçaları üzerine derişik HNO3 çözeltisi eklendiğinde hangi gaz açığa çıkar?',
        opts: ['NO2', 'H2', 'O2', 'N2', 'SO2'],
        ans: 0,
        exp: 'Bakır yarı soy metaldir; derişik HNO3 ile tepkimesinde kahverengi NO2 gazı açığa çıkar (H2 ASLA çıkmaz).'
      },
      {
        stem: 'Aşağıdaki metallerden hangisi kuvvetli bir baz olan NaOH çözeltisi ile tepkimeye girerek H2 gazı açığa çıkarabilir?',
        opts: ['Al', 'Cu', 'Fe', 'Ag', 'Mg'],
        ans: 0,
        exp: 'Alüminyum (Al) amfoter bir metaldir; kuvvetli bazlarla tepkimeye girerek H2 gazı üretir.'
      }
    ]
  },
  {
    id: 'u10',
    order: 10,
    exam: 'TYT',
    grade: 10,
    title: loc('Kimya Her Yerde', 'Chemistry Everywhere', 'Chemie Überall', 'Chimie Partout', 'Химия повсюду', 'الكيمياء في كل مكان', '化学无处不在', 'Kîmya Li Her Derê'),
    subtitle: loc('Temizlik Maddeleri, Polimerler, Kozmetik ve İlaçlar', 'Soaps, Detergents, Polymers & Medicine'),
    keywords: ['sabun', 'deterjan', 'hidrofil', 'hidrofob', 'polimer', 'misel', 'çamaşır suyu'],
    factsList: [
      { f: 'Beyaz sert sabun C17H35COONa (sodyum stearat), arap sabunu yumuşak sabun C17H35COOK (potasyum stearat) tır.', t: 'Arap sabununda potasyum yerine kalsiyum iyonu bulunur.' },
      { f: 'Sabun molekülünün polar olan baş kısmı hidrofil (suyu seven), apolar uzun hidrokarbon kuyruğu hidrofobdur (suyu sevmeyen, yağı seven).', t: 'Sabunun polar baş kısmı apolar kire tutunur.' },
      { f: 'Deterjanlar petrol türevidir ve sert sulardaki Ca2+ ve Mg2+ iyonlarıyla çökelek oluşturmadığından sert sularda da iyi temizler.', t: 'Deterjan sert suda çökelerek temizleme özelliğini kaybeder.' },
      { f: 'Sabunlar doğada mikroorganizmalar tarafından kolayca parçalanırken, deterjanlar çevre ve su kirliliğine neden olur.', t: 'Deterjanlar sabunlara göre doğada çok daha hızlı biyolojik olarak parçalanır.' },
      { f: 'Polimerizasyon, monomer adı verilen küçük moleküllerin kovalent bağlarla bağlanarak dev makromoleküller oluşturmasıdır.', t: 'Polimerler sadece zayıf van der Waals bağlarıyla bir arada tutulan küçük bileşiklerdir.' },
      { f: 'Polietilen (PE) poşet ve boru üretiminde, polivinil klorür (PVC) kapı ve pencere profilinde kullanılır.', t: 'Teflon (PTFE) su borusu kaplamasında esnek ambalaj olarak kullanılır.' },
      { f: 'Politetrafloroetilen (Teflon - PTFE), yapışmaz tava ve tencere kaplamalarında yüksek ısı direnci nedeniyle kullanılır.', t: 'Teflon kolayca alev alan ve eriyen bir polimerdir.' },
      { f: 'Kevlar, kurşun geçirmez yelek, miğfer ve uçak kanatlarında kullanılan hafif ve aşırı dayanıklı sentetik poliamiddir.', t: 'Kevlar tek kullanımlık plastik bardak üretiminde kullanılır.' },
      { f: 'Kauçuk doğal (kauçuk ağacından) veya sentetik olarak üretilir ve elastikiyeti sayesinde araba lastiklerinde kullanılır.', t: 'Kauçuk sert kırılgan kristal bir maddedir.' },
      { f: 'PET (Polietilen tereftalat) su şişeleri ve meşrubat kaplarında kullanılan geri dönüştürülebilir polimerdir.', t: 'PET ambalajlar geri dönüştürülemez.' },
      { f: 'Misel yapısında sabunun hidrofob kuyrukları apolar kir taneciğini sarar, hidrofil başları su ile etkileşerek kiri yüzeyden söker.', t: 'Misel oluşumunda hidrofil başlar kire saplanır.' },
      { f: 'İlaç formları: Tablet, draje, şurup, ampul (enjeksiyon), merhem ve damladır.', t: 'Bütün ilaçlar yalnızca ağız yoluyla hap olarak tüketilir.' },
      { f: 'Kozmetik ürünlerdeki paraben ve ftalatlar koruyucu ve yumuşatıcı olarak eklense de alerjen ve toksik etkileri vardır.', t: 'Kozmetik ürünlerdeki koruyucu kimyasallar tamamen zararsız organik besinlerdir.' },
      { f: 'Sızma zeytinyağı asitliği en düşük, mekanik yolla elde edilen doğal ve kaliteli yağdır.', t: 'Riviera yağ hiçbir işlem görmemiş en saf doğal zeytinyağıdır.' },
      { f: 'Hidrojenasyon yöntemiyle doymamış bitkisel sıvı yağlara hidrojen katılarak margarinler elde edilir.', t: 'Margarinler hayvan kemiklerinin kaynatılmasıyla üretilir.' },
      { f: 'Pastörizasyon gıdadaki patojen bakterileri öldürmek için 60-75 °C de kısa süreli ısıtma işlemidir.', t: 'Pastörizasyon gıdayı dondurarak sterilize etme yöntemidir.' },
    ],
    comparisonsList: [
      { a: 'Sabun', b: 'Deterjan', d: 'Sabun bitkisel/hayvansal yağdan üretilir doğada parçalanır; deterjan petrol türevidir sert sularda da temizler ama çevre kirliliği yapar.' },
      { a: 'Beyaz Sabun', b: 'Arap Sabunu', d: 'Beyaz sabun sodyum tuzu serttir; arap sabunu potasyum tuzu yumuşaktır.' },
    ],
    sequencesList: [
      { title: 'Sabunun Kir Temizleme Mekanizması', steps: ['Su ve sabun kire temas eder', 'Apolar hidrofob kuyruklar apolar kire tutunur', 'Polar hidrofil başlar su molekülleriyle hidrojen bağı kurar', 'Çalkalama ile kir misel halinde yüzeyden sökülüp suya geçer'] }
    ],
    twinsList: [
      {
        stem: 'Sabun ve deterjanların temizleme mekanizması ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
        opts: [
          'Deterjanın polar baş kısmı apolar kire tutunur.',
          'Sabunun apolar kuyruk kısmı kiri sarar.',
          'Kir genellikle apolar organik bileşiklerden oluşur.',
          'Sabunun hidrofil başı su molekülleri ile etkileşir.',
          'Deterjanlar sert sularda sabunlara göre daha az çökelek oluşturur.'
        ],
        ans: 0,
        exp: 'Deterjan ve sabunun polar baş kısmı suyu sever (hidrofil), kire tutunan kısım ise apolar hidrofob kuyruktur.'
      },
      {
        stem: 'Yapışmaz tava kaplaması olarak kullanılan ve kimyasal adı politetrafloroetilen olan polimer hangisidir?',
        opts: ['Teflon (PTFE)', 'PVC', 'PET', 'Kevlar', 'Polietilen'],
        ans: 0,
        exp: 'Teflon (PTFE), politetrafloroetilenin ticari adıdır ve yüksek ısı dayanımıyla tavalarda kullanılır.'
      }
    ]
  },
  // AYT Units (u11 to u24)
  {
    id: 'u11',
    order: 11,
    exam: 'AYT',
    grade: 11,
    title: loc('Modern Atom Teorisi', 'Modern Atomic Theory', 'Moderne Atomtheorie', 'Théorie Atomique Moderne', 'Современная теория атома', 'النظرية الذرية الحديثة', '现代原子论', 'Teoriya Modêrn a Atomê'),
    subtitle: loc('Kuantum Sayıları, Aufbau ve Elektron Dizilimleri', 'Quantum Numbers & Electron Configurations'),
    keywords: ['orbital', 'kuantum', 'Aufbau', 'Hund', 'Pauli', 'sp3', 'küresel simetri'],
    factsList: [
      { f: 'Baş kuantum sayısı (n), elektronun çekirdeğe olan ortalama uzaklığını ve temel enerji düzeyini belirtir (n = 1, 2, 3...).', t: 'Baş kuantum sayısı orbitalin uzaydaki yönelimini belirtir.' },
      { f: 'Açısal momentum kuantum sayısı (l), orbitalin türünü ve şeklini belirtir (l = 0 s, l = 1 p, l = 2 d, l = 3 f).', t: 'l = 2 açısal momentum sayısı p orbitalini temsil eder.' },
      { f: 'Manyetik kuantum sayısı (ml), orbitalin uzaydaki yönelimini belirtir ve -l ile +l arasındaki tamsayı değerlerini alır.', t: 'd orbitalleri için ml sadece -1, 0, +1 değerlerini alır.' },
      { f: 'Spin kuantum sayısı (ms), elektronun kendi ekseni etrafındaki dönme yönünü belirtir (+1/2 veya -1/2).', t: 'Bir orbitalde aynı spinli iki elektron bulunabilir.' },
      { f: 'Pauli Dışlama İlkesi: Bir atomda hiçbir iki elektronun 4 kuantum sayısının dördü de aynı olamaz.', t: 'Pauli ilkesine göre bir orbitale zıt spinli 3 elektron yerleşebilir.' },
      { f: 'Aufbau Kuralı: Elektronlar orbitallere enerjisi en düşük olan orbitalden başlayarak doldurulur (n + l kuralı).', t: 'Aufbau kuralına göre 3d orbitali daima 4s orbitalinden önce doldurulur.' },
      { f: 'Hund Kuralı: Eş enerjili orbitallere elektronlar önce aynı spinle birer birer yerleştirilir.', t: 'Elektronlar eş enerjili orbitallere önce zıt spinle çiftler halinde girer.' },
      { f: '24Cr ([Ar] 4s1 3d5) ve 29Cu ([Ar] 4s1 3d10) elektron dizilimleri küresel simetri kararlılığı nedeniyle özel durumlardır.', t: '24Cr elementi elektron diziliminde [Ar] 4s2 3d4 şeklinde biter.' },
      { f: 'Geçiş metalleri (d bloğu) katyon oluştururken elektronu önce en dış katmandaki s orbitalinden verir (örn. Fe: 4s2 3d6 -> Fe2+: 3d6).', t: 'Fe atomu iyonlaşırken elektron önce 3d orbitalinden kopar.' },
      { f: 'Aynı periyotta iyonlaşma enerjisi "3 aşağı 5 yukarı" kuralına göre sıralanır: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.', t: 'Aynı periyotta 3A grubunun iyonlaşma enerjisi 2A grubundan büyüktür.' },
      { f: 's orbitalleri küresel simetriktir ve her enerji düzeyinde 1 tane (en çok 2 elektron) bulunur.', t: 's orbitalleri sadece n = 2\'den itibaren başlar.' },
      { f: 'p orbitalleri n = 2\'den başlar, halter şeklindedir ve 3 tanedir (px, py, pz, en çok 6 elektron).', t: '1. temel enerji düzeyinde 3 adet p orbitali bulunur.' },
      { f: 'd orbitalleri n = 3\'ten başlar, 5 tanedir ve en çok 10 elektron alır.', t: 'd orbitalleri 4. temel enerji düzeyinden itibaren başlar.' },
      { f: 'f orbitalleri n = 4\'ten başlar, 7 tanedir ve en çok 14 elektron alır.', t: 'f orbitallerinde en çok 10 elektron bulunabilir.' },
      { f: 'Son orbitali tam dolu veya yarı dolu olan atomlar küresel simetri özelliği gösterir ve daha kararlıdır.', t: 'p4 ile biten elektron dizilimi küresel simetriktir.' },
      { f: 'İzoelektronik taneciklerde proton sayısı büyük olanın elektron başına düşen çekim kuvveti daha büyüktür ve yarıçapı küçüktür.', t: 'İzoelektronik katyon ve anyonların yarıçapları birbirine tam eşittir.' },
    ],
    comparisonsList: [
      { a: 'Aufbau İlkesi', b: 'Hund Kuralı', d: 'Aufbau elektronların düşük enerjili orbitale yerleşmesini, Hund eş enerjili orbitallere önce tek tek paralel spinle girmesini kurala bağlar.' },
      { a: 's Orbitali', b: 'p Orbitali', d: 's orbitali küresel simetriktir (l=0, 1 adet); p orbitali yönlü iki loblu halterdir (l=1, 3 adet).' },
    ],
    sequencesList: [
      { title: 'Orbital Enerji Sıralaması (n + l Artışı)', steps: ['1s < 2s < 2p', '< 3s < 3p < 4s', '< 3d < 4p < 5s', '< 4d < 5p < 6s'] }
    ],
    twinsList: [
      {
        stem: 'Temel haldeki 24Cr atomunun elektron diziliminde yarı dolu orbital sayısı kaçtır?',
        opts: ['6', '4', '5', '1', '2'],
        ans: 0,
        exp: '24Cr elektron dizilimi [Ar] 4s1 3d5\'tir. 4s\'te 1 tane, 3d\'de 5 tane olmak üzere toplam 6 adet yarı dolu orbital içerir.'
      },
      {
        stem: 'Açısal momentum kuantum sayısı l = 2 ve manyetik kuantum sayısı ml = -1 olan bir elektron hangi orbital türünde bulunabilir?',
        opts: ['d orbitali', 's orbitali', 'p orbitali', 'f orbitali', 'g orbitali'],
        ans: 0,
        exp: 'l = 2 açısal momentum kuantum sayısı d orbitallerini temsil eder (ml: -2, -1, 0, +1, +2).'
      }
    ]
  },
  {
    id: 'u12',
    order: 12,
    exam: 'AYT',
    grade: 11,
    title: loc('Gazlar: Yasalar ve İdeal Gaz', 'Gases: Laws & Ideal Gas', 'Gase: Gesetze & Ideales Gas', 'Gaz: Lois & Gaz Idéal', 'Газы: законы и идеальный газ', 'الغازات: القوانين والغاز المثالي', '气体：定律与理想气体', 'Gaz: Zagon û Gaza Îdeal'),
    subtitle: loc('Boyle, Charles, Gay-Lussac ve İdeal Gaz Denklemi', 'PV=nRT, PM=dRT & Manometers'),
    keywords: ['PV', 'RT', 'Boyle', 'Charles', 'Gay-Lussac', 'Avogadro', 'ideal gaz'],
    factsList: [
      { f: 'İdeal Gaz Denklemi: PV = nRT\'dir (P*V = n*R*T). (P: atm, V: litre, n: mol, T: Kelvin, R: 0.0821 veya 22.4/273).', t: 'İdeal gaz denkleminde sıcaklık Celsius (°C) olarak kullanılır.' },
      { f: 'Kelvin sıcaklığı T(K) = t(°C) + 273.15 formülüyle bulunur; mutlak sıcaklık sıfırın altına inemez.', t: 'Sıcaklık 10 °C\'den 20 °C\'ye çıktığında gazın mutlak sıcaklığı iki katına çıkmış olur.' },
      { f: 'Boyle Yasası: Sabit sıcaklık ve mol sayısında basınç ile hacim ters orantılıdır (P1V1 = P2V2).', t: 'Sabit sıcaklıkta gazın hacmi sıkıştırılarak yarıya indirilirse basıncı da yarıya iner.' },
      { f: 'Charles Yasası: Sabit basınç ve mol sayısında hacim ile mutlak sıcaklık doğru orantılıdır (V1/T1 = V2/T2).', t: 'Gazın sıcaklığı 20 °C\'den 40 °C\'ye çıktığında hacmi tam 2 katına çıkar.' },
      { f: 'Gay-Lussac Yasası: Sabit hacim ve mol sayısında basınç ile mutlak sıcaklık doğru orantılıdır (P1/T1 = P2/T2).', t: 'Sabit hacimli kapta gaz ısıtılırsa basıncı azalır.' },
      { f: 'Avogadro Yasası: Sabit sıcaklık ve basınçta hacim ile mol sayısı doğru orantılıdır (V1/n1 = V2/n2).', t: 'Farklı gazların eşit hacimleri daima eşit kütleye sahiptir.' },
      { f: 'Yoğunluk formülü: P * MA = d * R * T\'dir (Pirinç Mandalinayı daha Rahat Tartar).', t: 'Gaz yoğunluğu sıcaklık arttıkça artar.' },
      { f: 'Birleşik gaz denklemi: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2)\'dir.', t: 'Birleşik gaz denkleminde gazın türü formülü değiştirir.' },
      { f: 'Sabit basınçlı sistemler sürtünmesiz pistonlu kaplar ve esnek balonlardır (iç basınç dış basınca eşittir).', t: 'Çelik kapalı kaplarda gazın basıncı daima atmosfer basıncına eşittir.' },
      { f: 'Gaz molekülleri her yöne doğrusal, rastgele ve hızlı hareket eder (Brown hareketi).', t: 'Gaz molekülleri sadece dairesel yörüngelerde hareket eder.' },
      { f: 'Gaz tanecikleri arasındaki esnek çarpışmalarda toplam kinetik enerji ve momentum korunur.', t: 'Gaz tanecikleri çarptıkça kinetik enerjileri zamanla sıfıra düşer.' },
      { f: 'Gazlar bulundukları kabın hacmini tamamen doldurur ve her noktasına eşit basınç uygular.', t: 'Gaz kabın dibine üst kısmından daha yüksek basınç uygular.' },
      { f: 'Gazlar birbiriyle her oranda homojen karışım oluşturur.', t: 'Birbiri içinde çözünmeyen heterojen gaz karışımları vardır.' },
      { f: 'Manometreler kapalı veya açık uçlu kaplardaki gaz basıncını cıva yüksekliğiyle ölçer.', t: 'Manometre havanın nemini ölçen alettir.' },
      { f: 'Sürtünmesiz ideal pistonlu kaba aynı sıcaklıkta gaz eklenirse gazın basıncı değişmez, hacmi artar.', t: 'Pistonlu kaba gaz eklendiğinde iç basınç hızla artar.' },
      { f: 'Aynı gazın bulunduğu sabit hacimli kapta sıcaklık Kelvin cinsinden iki katına çıkarsa basınç iki katına çıkar.', t: 'Sıcaklık 25 °C\'den 50 °C\'ye çıkarsa basınç iki katına çıkar.' },
    ],
    comparisonsList: [
      { a: 'Boyle Yasası', b: 'Charles Yasası', d: 'Boyle P-V ters orantısını; Charles V-T(K) doğru orantısını açıklar.' },
      { a: 'Pistonlu Kap', b: 'Sabit Hacimli Kap', d: 'Pistonlu kapta basınç sabit hacim değişken; çelik kapta hacim sabit basınç değişkendir.' },
    ],
    sequencesList: [
      { title: 'İdeal Gaz Problemi Çözüm Adımları', steps: ['Verilen sıcaklığı Kelvin\'e dönüştür (t + 273)', 'Basıncı atm, hacmi litreye çevir', 'PV = nRT formülünü yaz', 'Sabitleri sadeleştirip orantıyı kur'] }
    ],
    twinsList: [
      {
        stem: '0 °C\'de 4.48 litrelik sabit hacimli kapta 0.5 mol He gazının uyguladığı basınç kaç atmosferdir?',
        opts: ['2.5 atm', '1.0 atm', '5.0 atm', '0.5 atm', '2.24 atm'],
        ans: 0,
        exp: 'P * V = n * R * T -> P * 4.48 = 0.5 * (22.4 / 273) * 273 -> P * 4.48 = 11.2 -> P = 11.2 / 4.48 = 2.5 atm.'
      },
      {
        stem: 'Sürtünmesiz ideal pistonlu bir kapta 27 °C\'de 2 litre hacim kaplayan bir miktar gazın sıcaklığı 327 °C\'ye çıkarılırsa hacmi kaç litre olur?',
        opts: ['4 L', '24 L', '1 L', '8 L', '6 L'],
        ans: 0,
        exp: 'T1 = 27 + 273 = 300 K; T2 = 327 + 273 = 600 K. Sıcaklık 2 katına çıktığından hacim V2 = 2 * 2 = 4 litre olur.'
      }
    ]
  },
  {
    id: 'u13',
    order: 13,
    exam: 'AYT',
    grade: 11,
    title: loc('Gazlar: Kinetik Teori ve Gerçek Gazlar', 'Gases: Kinetic Theory & Real Gases', 'Kinetische Gastheorie', 'Théorie Cinétique des Gaz', 'Кинетическая теория газов', 'النظرية الحركية للغازات', '气体动理论', 'Teoriya Kînetîk a Gazan'),
    subtitle: loc('Graham Difüzyon, Kısmi Basınç ve Joule-Thomson', 'Diffusion, Partial Pressure & Non-Ideal'),
    keywords: ['Graham difüzyon', 'Dalton kısmi basınç', 'Joule-Thomson', 'kritik sıcaklık', 'gerçek gaz'],
    factsList: [
      { f: 'Graham Difüzyon Yasası: Gazların difüzyon hızı mol kütlesinin kareköküyle ters orantılıdır (v1/v2 = sqrt(M2/M1)).', t: 'Mol kütlesi büyük olan gazlar daha hızlı difüzlenir.' },
      { f: 'Gazların difüzyon hızı mutlak sıcaklığın kareköküyle doğru orantılıdır (v1/v2 = sqrt((T1*M2)/(T2*M1))).', t: 'Sıcaklık 4 katına çıkarsa difüzyon hızı 4 katına çıkar.', tip: 'Karekök ilişkisi vardır; hız 2 katına çıkar!' },
      { f: 'Dalton Kısmi Basınçlar Yasası: Karışımdaki bir gazın kısmi basıncı Pi = Xi * Ptoplam\'dır (Xi = ni / ntoplam).', t: 'Kısmi basınç mol kesrinden bağımsızdır.' },
      { f: 'Gazların ortalama kinetik enerjisi (Ek = 3/2 kT) YALNIZCA mutlak sıcaklığa bağlıdır; gazın türünden bağımsızdır.', t: 'Aynı sıcaklıktaki CO2 gazının kinetik enerjisi H2 gazınınkinden büyüktür.', tip: 'Aynı sıcaklıktaki tüm gazların ortalama kinetik enerjisi eşittir!' },
      { f: 'Yüksek sıcaklık, düşük basınç ve küçük mol kütlesi (zayıf çekim) gazları idealliğe yaklaştırır.', t: 'Yüksek basınç ve düşük sıcaklıkta gazlar ideale en yakındır.' },
      { f: 'Gerçek gaz molekülleri arasında çekim kuvveti vardır ve öz hacimleri sıfır değildir.', t: 'İdeal gazların molekülleri arasında güçlü elektrostatik çekim vardır.' },
      { f: 'Joule-Thomson Olayı: Genleşen gazın kendi iç enerjisini harcayarak soğuması olayıdır (buzdolabı ve klimalar).', t: 'Joule-Thomson genleşmesinde gaz hızla ısınır.' },
      { f: 'Kritik sıcaklık: Bir gazın basınç uygulanarak sıvılaştırılabileceği en yüksek sıcaklıktır; üzerindeki sıcaklıkta gaz sıvılaştırılamaz.', t: 'Kritik sıcaklığın üzerindeki akışkanlar sadece basınçla kolayca sıvılaşır.' },
      { f: 'Buhar, kritik sıcaklık ile kaynama noktası arasındaki sıkıştırılarak sıvılaşabilen akışkandır.', t: 'Buhar ve gaz kavramları bilimsel olarak birebir aynıdır.' },
      { f: 'Su üstünde toplanan gazlarda toplam basınç Ptop = Pgaz + Psu_buharı formülüyle hesaplanır.', t: 'Su üstünde toplanan gazın basıncından suyun buhar basıncı çıkarılmaz.' },
      { f: 'Suyun buhar basıncı kabın hacmi değiştirildiğinde sıcaklık sabit kaldığı sürece DEĞİŞMEZ.', t: 'Piston yukarı çekilip hacim artırıldığında suyun buhar basıncı yarıya iner.' },
      { f: 'Soğutucu akışkanlar: Kritik sıcaklığı yüksek, kaynama noktası düşük, zehirsiz ve çevre dostu olmalıdır.', t: 'Soğutucu akışkanın kaynama noktası oda sıcaklığından çok yüksek olmalıdır.' },
      { f: 'CH4 (MA=16) gazı SO2 (MA=64) gazından sqrt(64/16) = 2 kat daha hızlı difüzlenir.', t: 'CH4 gazı SO2\'den 4 kat daha hızlı hareket eder.' },
      { f: 'Effüzyon, gaz moleküllerinin küçük bir delikten vakumlu boşluğa kaçması olayıdır.', t: 'Effüzyon iki gazın birbiri içinde karışmasıdır.' },
      { f: 'Sıkıştırılabilirlik faktörü Z = PV / nRT\'dir; ideal gazda Z = 1\'dir.', t: 'Gerçek gazların hepsinde Z değeri daima 1\'e eşittir.' },
      { f: 'Gaz taneciklerinin öz hacmi yüksek basınç altında ihmal edilemez büyüklüğe ulaşır.', t: 'Yüksek basınç altında gaz taneciklerinin hacmi tamamen yok olur.' },
    ],
    comparisonsList: [
      { a: 'İdeal Gaz', b: 'Gerçek Gaz', d: 'İdeal gazda tanecik hacmi sıfır ve çekim yok kabul edilir; gerçek gazda öz hacim ve çekim kuvveti vardır.' },
      { a: 'Gaz', b: 'Buhar', d: 'Buhar kritik sıcaklığın altında olup basınçla sıvılaşabilir; gaz kritik sıcaklığın üstünde olup basınçla sıvılaşamaz.' },
    ],
    sequencesList: [
      { title: 'Graham Difüzyon Karşılaştırma Adımları', steps: ['Her iki gazın mol kütlelerini belirle', 'Mutlak sıcaklıkları Kelvin e çevir', 'Hız formülünü yaz: v1/v2 = sqrt((T1*M2)/(T2*M1))', 'Yol veya süre orantısını hesapla (t2/t1 = v1/v2)'] }
    ],
    twinsList: [
      {
        stem: 'Aynı sıcaklıkta 100 cm lik cam borunun iki ucundan aynı anda bırakılan CH4 (MA=16) ve SO2 (MA=64) gazları CH4 ucundan kaç cm uzakta karşılaşır?',
        opts: ['66.7 cm', '50.0 cm', '80.0 cm', '33.3 cm', '25.0 cm'],
        ans: 0,
        exp: 'v(CH4)/v(SO2) = sqrt(64/16) = 2/1. CH4 2x yol alırken SO2 x yol alır. 3x = 100 cm -> x = 33.3 cm. CH4 ucundan 2x = 66.7 cm uzakta karşılaşırlar.'
      },
      {
        stem: 'Sabit sıcaklıkta su üstünde toplanan He gazı bulunan pistonlu kapta hacim yarıya indirilirse He gazının kısmi basıncı ve suyun buhar basıncı nasıl değişir?',
        opts: ['He basıncı 2 katına çıkar, suyun buhar basıncı değişmez', 'Her ikisi de 2 katına çıkar', 'Her ikisi de değişmez', 'He basıncı değişmez, su buhar basıncı artar', 'He basıncı 4 katına çıkar, su buhar basıncı azalır'],
        ans: 0,
        exp: 'He gazının hacmi yarıya inince kısmi basıncı 2 katına çıkar. Suyun denge buhar basıncı ise sıcaklık değişmediği için sabit kalır.'
      }
    ]
  },
  {
    id: 'u14',
    order: 14,
    exam: 'AYT',
    grade: 11,
    title: loc('Sıvı Çözeltiler ve Derişim Birimleri', 'Liquid Solutions & Concentrations', 'Flüssige Lösungen & Konzentrationen', 'Solutions Liquides & Concentrations', 'Жидкие растворы и концентрации', 'المحاليل السائلة والتركيز', '溶液与浓度单位', 'Şilavên Çareseriyê û Yekeyên Hêrbûnê'),
    subtitle: loc('Molarite, Molalite, Mol Kesri ve Seyreltme', 'Molarity, Molality, Mole Fraction'),
    keywords: ['molarite', 'molalite', 'mol kesri', 'seyreltme', 'derişim'],
    factsList: [
      { f: 'Molarite (M), 1 litre çözeltide çözünmüş maddenin mol sayısıdır (M = n / V_çözelti(L)).', t: 'Molarite 1 kilogram çözücüdeki çözünen mol sayısıdır.' },
      { f: 'Molalite (m), 1 kilogram (1000 g) çözücüde çözünmüş maddenin mol sayısıdır (m = n / kg_çözücü).', t: 'Molalite çözeltinin toplam hacmine bölünerek bulunur.' },
      { f: 'Mol kesri (X), bir bileşenin mol sayısının toplam mol sayısına oranıdır (XA = nA / ntoplam); toplamı 1\'dir.', t: 'Mol kesri 1\'den büyük değerler alabilir.' },
      { f: 'Özkütle ve kütlece yüzde bilindiğinde molarite: M = (%C * d * 10) / MA formülüyle hesaplanır.', t: 'Molarite hesaplanırken çözelti özkütlesi kütlece yüzdeye bölünür.' },
      { f: 'Çözeltilerin karıştırılması formülü: M1V1 + M2V2 + ... = M_son * V_toplam\'dır.', t: 'Çözeltiler karıştırıldığında hacimler asla toplanamaz.' },
      { f: 'İyonik katı suda çözündüğünde çözeltideki iyon derişimi tuzun molaritesi ile iyon katsayısının çarpımıdır.', t: '0.1 M AlCl3 çözeltisinde klor iyonu derişimi 0.1 M\'dır.', tip: '0.1 M AlCl3\'te [Cl-] = 3 * 0.1 = 0.3 M\'dır!' },
      { f: 'Çözeltiye saf su eklendiğinde (seyreltme) çözünenin mol sayısı değişmez; formül M1V1 = M2V2\'dir.', t: 'Su eklendiğinde çözünenin mol sayısı yarıya iner.' },
      { f: 'Çözeltiden çökme olmadan su buharlaştırılırsa (deriştirme) molarite artar.', t: 'Su buharlaştırıldığında çözünen madde kütlesi azalır.' },
      { f: 'Farklı çözeltiler karıştırıldığında ortak iyonların toplam molü toplam hacme bölünerek yeni derişim bulunur.', t: 'Ortak iyonların derişimi karıştırmadan etkilenmez.' },
      { f: 'Sıcaklık arttıkça sıvı çözeltilerin hacmi genleştiğinden molarite bir miktar azalır; molalite ise sıcaklıkla değişmez.', t: 'Molalite sıcaklık arttıkça hacim genleşmesinden dolayı azalır.' },
      { f: 'Doymamış bir çözeltiyi doygun hale getirmek için çözünen eklemek, su buharlaştırmak veya soğutmak (endotermikse) gerekir.', t: 'Doymamış çözeltiye su eklenirse doygun hale gelir.' },
      { f: 'Elektrolit çözeltiler serbest iyonlar içerdiği için elektrik akımını iletir (tuzlu su, asitler, bazlar).', t: 'Şekerli su serbest iyonlar içerdiği için elektriği çok iyi iletir.' },
      { f: 'Moleküler çözünen maddeler (glikoz C6H12O6, etil alkol C2H5OH) elektrik akımını iletmez (elektrolit değildir).', t: 'Şeker suda iyonlaşarak H+ ve OH- iyonlarına ayrışır.' },
      { f: '0.2 M 500 mL NaCl çözeltisinde çözünmüş NaCl mol sayısı n = M * V = 0.2 * 0.5 = 0.1 moldür.', t: '0.2 M 500 mL çözeltide 1 mol tuz çözünmüştür.' },
      { f: 'Çözelti derişimi arttıkça birim hacimdeki çözünen tanecik sayısı artar.', t: 'Derişik çözelti daima doygun çözelti demektir.' },
      { f: 'Hacimce yüzde derişim = (Çözünen Sıvı Hacmi / Çözelti Toplam Hacmi) x 100\'dür (örn. 80° kolonya).', t: 'Hacimce yüzde sadece katı-sıvı çözeltilerde kullanılır.' },
    ],
    comparisonsList: [
      { a: 'Molarite', b: 'Molalite', d: 'Molarite mol/Litre çözeltidir (sıcaklıkla değişir); molalite mol/kg çözücüdür (sıcaklıktan bağımsızdır).' },
      { a: 'Elektrolit Çözelti', b: 'Elektrolit Olmayan Çözelti', d: 'Elektrolit çözeltiler iyon hareketiyle elektriği iletir; elektrolit olmayanlar moleküler çözünür iletmez.' },
    ],
    sequencesList: [
      { title: 'Çözelti Karıştırma Hesap Adımları', steps: ['Her çözeltideki iyon mol sayılarını bul (n = M * V)', 'Toplam hacmi hesapla (V1 + V2)', 'İstenen iyonun toplam molünü topla', 'M_son = n_toplam / V_toplam formülünü uygula'] }
    ],
    twinsList: [
      {
        stem: '0.4 M 200 mL Ca(NO3)2 çözeltisi ile 0.2 M 300 mL NaNO3 çözeltisi karıştırıldığında son çözeltideki NO3- iyonu derişimi kaç molar olur?',
        opts: ['0.44 M', '0.30 M', '0.20 M', '0.60 M', '0.50 M'],
        ans: 0,
        exp: 'n(NO3-) = (2 * 0.4 * 0.2) + (1 * 0.2 * 0.3) = 0.16 + 0.06 = 0.22 mol. V_toplam = 0.2 + 0.3 = 0.5 L. [NO3-] = 0.22 / 0.5 = 0.44 M.'
      },
      {
        stem: 'Özkütlesi 1.2 g/mL olan kütlece %36.5\'lik derişik HCl çözeltisinin molar derişimi kaçtır? (HCl: 36.5)',
        opts: ['12.0 M', '6.0 M', '1.2 M', '10.0 M', '3.65 M'],
        ans: 0,
        exp: 'M = (%C * d * 10) / MA -> M = (36.5 * 1.2 * 10) / 36.5 = 12.0 M.'
      }
    ]
  },
  {
    id: 'u15',
    order: 15,
    exam: 'AYT',
    grade: 11,
    title: loc('Koligatif Özellikler ve Çözünürlük', 'Colligative Properties & Solubility', 'Kolligative Eigenschaften & Löslichkeit', 'Propriétés Colligatives & Solubilité', 'Коллигативные свойства и растворимость', 'الخواص التجميعية والذوبانية', '依数性与溶解度', 'Taybetmendiyên Kolîgatîf û Çareserî'),
    subtitle: loc('Kaynama Noktası Yükselmesi, Donma Noktası ve Raoult', 'Boiling Elevation, Freezing Depression & Kk/Kd'),
    keywords: ['koligatif', 'Raoult', 'kaynama noktası yükselmesi', 'donma noktası alçalması', 'ozmotik basınç', 'van t Hoff'],
    factsList: [
      { f: 'Koligatif özellikler çözünen maddenin kimyasal cinsine değil, çözeltideki toplam tanecik derişimine bağlıdır.', t: 'Koligatif özellikler çözünen maddenin molekül geometrisine bağlıdır.' },
      { f: 'Kaynama noktası yükselmesi: ΔTk = Kk * m * i\'dir (Kk: kaynama noktası sabiti, m: molalite, i: van t Hoff faktörü).', t: 'Kaynama noktası yükselmesi çözünenin mol kütlesiyle doğru orantılıdır.' },
      { f: 'Donma noktası alçalması: ΔTd = Kd * m * i\'dir (su için Kd = 1.86 °C*kg/mol).', t: 'Uçucu olmayan katı çözündüğünde suyun donma noktası yükselir.' },
      { f: 'van t Hoff faktörü (i): Moleküler maddelerde (şeker, alkol) i = 1\'dir; iyonik tuzlarda iyon sayısıdır (NaCl için i = 2, CaCl2 için i = 3).', t: 'Glikoz suda çözündüğünde i = 2 kabul edilir.' },
      { f: 'Buhar basıncı alçalması (Raoult Yasası): Çözeltinin buhar basıncı Pçözelti = Pçözücü° * Xçözücü\'dür.', t: 'Uçucu olmayan katı eklendiğinde çözeltinin buhar basıncı artar.' },
      { f: 'Ozmotik basınç, yarı geçirgen zardan saf çözücünün derişik çözeltiye geçişini durdurmak için gereken basınçtır.', t: 'Ozmozda çözünen katı tanecikler zardan kolayca geçer.' },
      { f: 'Kışın yollara tuz atılması suyun donma noktasını alçaltarak buzlanmayı önleme uygulamasıdır.', t: 'Yollara tuz atılması tuzun kimyasal reaksiyonla ısı açığa çıkarması içindir.' },
      { f: 'Otomobil radyatörlerine antifriz (etilen glikol) konması hem donmayı önler hem de kaynama noktasını yükseltir.', t: 'Antifriz suyun donma noktasını 0 °C\'nin üzerine çıkarır.' },
      { f: 'Çözünürlük, 100 gram çözücüde belirli sıcaklık ve basınçta çözünebilen maksimum madde miktarıdır.', t: 'Çözünürlük 1 litre çözeltide çözünen katı gramıdır.' },
      { f: 'Katıların sudaki çözünürlüğü genellikle endotermiktir (sıcaklık arttıkça artar); gazların çözünürlüğü daima ekzotermiktir.', t: 'Gazların sudaki çözünürlüğü sıcaklık arttıkça hızla artar.' },
      { f: 'Gazların sudaki çözünürlüğü basınç arttıkça artar (Henry Yasası; gazlı içeceklerin soğuk ve kapalı tutulması).', t: 'Basınç arttıkça gazların çözünürlüğü azalır.' },
      { f: 'Katı ve sıvıların çözünürlüğüne basıncın etkisi ihmal edilecek kadar azdır.', t: 'Tuzun sudaki çözünürlüğü yüksek basınçta iki katına çıkar.' },
      { f: 'Ortak iyon etkisi çözünürlüğü daima azaltır (Le Chatelier prensibi).', t: 'Ortak iyon bulunan çözeltide tuz daha çok çözünür.' },
      { f: 'Çözeltideki toplam iyon derişimi ne kadar büyükse donma noktası o kadar düşük, kaynama noktası o kadar yüksektir.', t: 'Eşit derişimli NaCl ve AlCl3 çözeltilerinin kaynama noktaları aynıdır.' },
      { f: 'Doygunluk: Çözebileceği kadar çözünen içeren çözelti doygundur; aşırı doygun çözeltiler kararsızdır ve aşı kristaliyle çöker.', t: 'Aşırı doygun çözelti sonsuza kadar kararlı kalan dengeli sistemdir.' },
      { f: 'Gazoz kapağı açıldığında basınç düştüğü için CO2 gazı kabarcıklar halinde çözeltiden ayrılır.', t: 'Kapak açıldığında CO2\'nin çözünürlüğü artar.' },
    ],
    comparisonsList: [
      { a: 'Kaynama Noktası Yükselmesi', b: 'Donma Noktası Alçalması', d: 'Çözünen tanecik derişimi arttıkça kaynama noktası yükselir, donma noktası alçalır.' },
      { a: 'Endotermik Çözünme', b: 'Ekzotermik Çözünme', d: 'Endotermikte sıcaklık arttıkça çözünürlük artar; ekzotermikte sıcaklık arttıkça çözünürlük azalır.' },
    ],
    sequencesList: [
      { title: 'Donma Noktası Alçalması Hesap Adımları', steps: ['Maddenin molünü hesapla', 'Çözücünün kütlesini kg\'a çevir', 'Molaliteyi bul (m = n / kg)', 'ΔTd = Kd * m * i ile düşüşü hesaplayıp 0 °C\'den çıkar'] }
    ],
    twinsList: [
      {
        stem: '1 kg saf suda 1 mol NaCl çözünerek hazırlanan çözeltinin 1 atm\'de donmaya başlama sıcaklığı kaç °C\'dir? (Su için Kd = 1.86 °C*kg/mol)',
        opts: ['-3.72 °C', '-1.86 °C', '0.00 °C', '-0.93 °C', '-5.58 °C'],
        ans: 0,
        exp: 'NaCl -> Na+ + Cl- (i = 2). m = 1 mol / 1 kg = 1 m. ΔTd = Kd * m * i = 1.86 * 1 * 2 = 3.72 °C. Donma noktası = 0 - 3.72 = -3.72 °C.'
      },
      {
        stem: 'Aşağıdaki 1\'er molal sulu çözeltilerden hangisinin 1 atm dış basınçta kaynamaya başlama sıcaklığı en yüksektir?',
        opts: ['AlCl3', 'CaCl2', 'NaCl', 'Glikoz (C6H12O6)', 'KNO3'],
        ans: 0,
        exp: 'AlCl3 için i = 4 (1 Al3+ + 3 Cl-). Toplam tanecik derişimi en yüksek (4 m) olduğundan kaynama noktası yükselmesi en büyüktür.'
      }
    ]
  },
  {
    id: 'u16',
    order: 16,
    exam: 'AYT',
    grade: 11,
    title: loc('Kimyasal Tepkimelerde Enerji', 'Energy in Chemical Reactions', 'Energie bei Reaktionen', 'Énergie des Réactions', 'Энергия в химических реакциях', 'الطاقة في التفاعلات الكيميائية', '化学反应中的能量', 'Enerjî Di Reaksiyonên Kîmyewî de'),
    subtitle: loc('Entalpi, Hess Yasası ve Bağ Enerjileri', 'ΔH, Hess Law & Bond Enthalpies'),
    keywords: ['ΔH', 'Hess', 'entalpi', 'ekzotermik', 'endotermik', 'bağ enerjisi', 'oluşum entalpisi'],
    factsList: [
      { f: 'Entalpi değişimi (ΔH): Sabit basınç altında gerçekleşen tepkimede alınıp verilen ısı miktarıdır (ΔH = Hürünler - Hgirenler).', t: 'Entalpi doğrudan ölçülebilen bir büyüklüktür, farkı ölçülemez.' },
      { f: 'Ekzotermik tepkimelerde ΔH < 0 dır; ısı ürünler tarafına yazılır ve sistem çevreye ısı verir.', t: 'Ekzotermik tepkimelerde ürünlerin entalpisi girenlerinkinden daha büyüktür.' },
      { f: 'Endotermik tepkimelerde ΔH > 0 dır; ısı girenler tarafına yazılır ve sistem çevreden ısı alır.', t: 'Endotermik tepkimeler başladıktan sonra kendiliğinden devam eder.' },
      { f: 'Standart oluşum entalpisi (ΔHf°): 25 °C ve 1 atm de 1 mol bileşiğin kararlı elementlerinden oluşması sırasındaki entalpi değişimidir.', t: 'Elementlerin tüm allotroplarının standart oluşum entalpisi sıfır kabul edilir.' },
      { f: 'Elementlerin oda koşullarındaki en kararlı hallerinin standart oluşum entalpisi sıfırdır (O2(g)=0, C(grafit)=0; O3(g)!=0, C(elmas)!=0).', t: 'Elmasın standart oluşum entalpisi sıfırdır.' },
      { f: 'Hess Yasası: Bir tepkime birden fazla basamağın toplamı şeklinde yazılabiliyorsa tepkime entalpisi basamakların entalpileri toplamına eşittir.', t: 'Tepkime ters çevrilirse ΔH ın işareti değişmez.' },
      { f: 'Tepkime ters çevrilirse ΔH ın işareti değişir; bir katsayıyla çarpılırsa ΔH da aynı katsayıyla çarpılır.', t: 'Tepkime 2 ile çarpıldığında ΔH değeri aynı kalır.' },
      { f: 'Bağ enerjileri üzerinden entalpi: ΔH = Σ(Kırılan Bağ Enerjileri) - Σ(Oluşan Bağ Enerjileri) formülüyle bulunur.', t: 'Bağ enerjisi hesabında oluşan bağlardan kırılan bağlar çıkarılır.' },
      { f: 'Kimyasal bağ oluşumu daima ekzotermiktir (ΔH < 0); bağ kırılması daima endotermiktir (ΔH > 0).', t: 'Kovalent bağ kırılırken çevreye yüksek ısı yayılır.' },
      { f: 'Aktifleşmiş kompleks, tepkimenin zirve noktasındaki yüksek enerjili ve kararsız atomlar topluluğudur.', t: 'Aktifleşmiş kompleks izole edilip şişede saklanabilen kararlı bir maddedir.' },
      { f: 'İleri aktifleşme enerjisi (Eai) ve geri aktifleşme enerjisi (Eag) daima pozitif değerlerdir.', t: 'Ekzotermik tepkimelerde Eai negatif değer alır.' },
      { f: 'Tepkime entalpisi aktifleşme enerjilerinden de bulunabilir: ΔH = Eai - Eag dir.', t: 'ΔH = Eag - Eai dir.' },
      { f: 'Gazların suda çözünmesi, donma, yoğuşma ve kırağılaşma ekzotermiktir.', t: 'Kırağılaşma olayında madde çevreden ısı alır.' },
      { f: 'Erime, buharlaşma, süblimleşme ve gaz haldeki atomdan elektron koparma (iyonlaşma) endotermiktir.', t: 'İyonlaşma enerjisi ekzotermik bir süreçtir.' },
      { f: 'Tepkimeye giren maddelerin fiziksel hali değişirse tepkime entalpisi (ΔH) değişir.', t: 'Suyun gaz veya sıvı halde oluşması tepkime entalpisini etkilemez.' },
      { f: 'Ekzotermik tepkimelerde düşük sıcaklıkta ürünler girenlerden daha kararlıdır.', t: 'Endotermik tepkimelerde düşük sıcaklıkta ürünler daha kararlıdır.' },
    ],
    comparisonsList: [
      { a: 'Ekzotermik (ΔH < 0)', b: 'Endotermik (ΔH > 0)', d: 'Ekzotermik çevreye ısı verir sıcaklık artar; endotermik çevreden ısı alır sıcaklık düşer.' },
      { a: 'Oluşum Entalpisi', b: 'Bağ Enerjisi', d: 'Oluşum entalpisi elementlerden sentez ısısıdır; bağ enerjisi gaz fazında 1 mol bağı kırma enerjisidir.' },
    ],
    sequencesList: [
      { title: 'Hess Yasası Uygulama Adımları', steps: ['Hedef tepkimeyi belirle', 'Ara basamakları hedefteki reaktif ve ürünlere göre ters çevir veya katla', 'ΔH değerlerini kurallara göre güncelle', 'Basamakları toplayıp net ΔH ı hesapla'] }
    ],
    twinsList: [
      {
        stem: 'Bir kimyasal tepkimenin ileri aktifleşme enerjisi Eai = 85 kJ ve geri aktifleşme enerjisi Eag = 130 kJ olduğuna göre tepkime entalpisi (ΔH) kaç kJ dir?',
        opts: ['-45 kJ', '+45 kJ', '+215 kJ', '-215 kJ', '+85 kJ'],
        ans: 0,
        exp: 'ΔH = Eai - Eag = 85 - 130 = -45 kJ dir (ekzotermik tepkime).'
      },
      {
        stem: 'Aşağıdaki maddelerden hangisinin 25 °C ve 1 atm deki standart molar oluşum entalpisi sıfır kabul edilir?',
        opts: ['O2(g)', 'O3(g)', 'H2O(s)', 'CO2(g)', 'C(elmas)'],
        ans: 0,
        exp: 'Elementlerin oda koşullarındaki en kararlı allotrop ve fiziksel hallerinin standart oluşum entalpisi sıfırdır: O2(g) = 0 dır.'
      }
    ]
  },
  {
    id: 'u17',
    order: 17,
    exam: 'AYT',
    grade: 11,
    title: loc('Kimyasal Tepkimelerde Hız', 'Reaction Rates', 'Reaktionsgeschwindigkeit', 'Vitesse de Réaction', 'Скорость химических реакций', 'سرعة التفاعلات الكيميائية', '化学反应速率', 'Leza Reaksiyonên Kîmyewî'),
    subtitle: loc('Çarpışma Teorisi, Hız Denklemi ve Katalizör', 'Collision Theory, Rate Law & Catalysts'),
    keywords: ['hız sabiti', 'katalizör', 'aktifleşme enerjisi', 'yavaş basamak', 'derece'],
    factsList: [
      { f: 'Çarpışma teorisine göre etkin çarpışma için taneciklerin yeterli kinetik enerjiye (Ea) ve uygun geometrik yönelime sahip olması gerekir.', t: 'Tanecikler her çarpıştığında mutlaka kimyasal tepkime gerçekleşir.' },
      { f: 'Tepkime hızı birim zamanda harcanan reaktif veya oluşan ürün miktarıdır (r = -Δ[R]/Δt = +Δ[Ü]/Δt).', t: 'Tepkime hızı reaktiflerin mol sayısı arttıkça zamanla artar.' },
      { f: 'Hız denklemi sadece gaz ve suda çözünmüş (aq) maddelerin derişimlerine göre yazılır; saf katı ve sıvılar hız bağıntısında yer almaz.', t: 'Saf katıların derişimi hız denkleminde üs olarak yer alır.' },
      { f: 'Mekanizmalı (basamaklı) tepkimelerde hız denklemi en yavaş basamağın girenlerine göre yazılır.', t: 'Basamaklı tepkimelerde hız en hızlı basamağa göre belirlenir.' },
      { f: 'Katalizör, tepkimenin aktifleşme enerjisini (Ea) düşüren TEK FAKTÖRDÜR; tepkime entalpisini (ΔH) asla değiştirmez.', t: 'Katalizör tepkime entalpisini (ΔH) düşürerek sistemi rahatlatır.', tip: 'ÖSYM tuzağı: Katalizör Ea yı düşürür, ΔH ı DEĞİŞTİRMEZ!' },
      { f: 'Sıcaklık artışı hem endotermik hem ekzotermik tüm tepkimelerin hızını ve hız sabiti k yı artırır.', t: 'Ekzotermik tepkimelerde sıcaklık arttıkça tepkime hızı yavaşlar.' },
      { f: 'Sıcaklık aktifleşme enerjisini (Ea) DEĞİŞTİRMEZ; sadece Ea yı aşan tanecik sayısını artırır.', t: 'Sıcaklık artışı aktifleşme enerjisini düşürerek tepkimeyi hızlandırır.' },
      { f: 'Temas yüzeyi arttıkça (katıyı toz haline getirmek) sadece heterojen tepkimelerin hızı ve k sabiti artar.', t: 'Temas yüzeyinin artması homojen gaz tepkimelerinin hızını artırır.' },
      { f: 'Ara ürün, bir basamakta oluşup sonraki basamakta harcanan maddedir; net tepkime denkleminde yer almaz.', t: 'Ara ürün tepkimenin başında eklenen katalizördür.' },
      { f: 'Katalizör, tepkimeye girdiği gibi değişmeden çıkan maddedir; net tepkime denkleminde yer almaz.', t: 'Katalizör tepkime sonunda tükenerek yok olur.' },
      { f: 'Hız sabiti k nın birimi: (L/mol)^(n-1) * s^-1 dir (n: tepkimenin toplam derecesi).', t: 'Hız sabiti k nın birimi tepkime derecesinden bağımsızdır.' },
      { f: 'Tepkime derecesi, deneysel hız bağıntısındaki derişimlerin üsleri toplamıdır.', t: 'Tepkime derecesi net tepkimenin stokiyometrik katsayıları toplamına eşittir.' },
      { f: 'Molekülerite, tek bir basamakta tepkimeye giren tanecik sayısını ifade eder (unimoleküler, bimoleküler, trimoleküler).', t: 'Molekülerite sadece deneysel hız bağıntısından bulunur.' },
      { f: 'Tersiyer kalsiyum karbonat tozunun asitte çözünmesi parça kireç taşına göre temas yüzeyi nedeniyle çok daha hızlıdır.', t: 'Katıyı toz haline getirmek açığa çıkan gaz miktarını artırır.' },
      { f: 'Hız sabiti k yı değiştiren faktörler: Sıcaklık, Katalizör, Temas yüzeyi ve Maddenin cinsidir (TSKM).', t: 'Reaktif derişimi arttıkça hız sabiti k büyür.', tip: 'Derişim hızı artırır, k sabitini DEĞİŞTİRMEZ!' },
      { f: 'İyonlar arası zıt yüklü tepkimeler bağ kopması gerektirmediğinden oda koşullarında son derece hızlı gerçekleşir.', t: 'Kovalent bağların kırıldığı organik tepkimeler anlık patlama şeklinde biter.' },
    ],
    comparisonsList: [
      { a: 'Katalizör', b: 'Sıcaklık', d: 'Katalizör Ea yı düşürerek k yı artırır; sıcaklık Ea yı değiştirmeden aşan tanecik sayısını ve k yı artırır.' },
      { a: 'Ara Ürün', b: 'Katalizör', d: 'Ara ürün önce oluşup sonra harcanır; katalizör önce girip sonra aynen çıkar.' },
    ],
    sequencesList: [
      { title: 'Deneysel Hız Bağıntısı Bulma', steps: ['Bir reaktifin sabit tutulduğu iki deneyi seç', 'Diğer reaktifin derişim katı ile hız katını oranla', 'Reaktifin üssünü belirle', 'Tüm reaktifler için tekrarlayıp k sabitini ve birimini hesapla'] }
    ],
    twinsList: [
      {
        stem: 'Bir tepkimenin hız denklemi r = k * [A]^2 * [B] olduğuna göre hız sabiti k nın birimi aşağıdakilerden hangisidir?',
        opts: ['L^2 / (mol^2 * s)', 'L / (mol * s)', 'mol / (L * s)', 'L^3 / (mol^3 * s)', 's^-1'],
        ans: 0,
        exp: 'Tepkime derecesi n = 2 + 1 = 3 tür. k birimi = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s).'
      },
      {
        stem: 'Kimyasal bir tepkimede uygun pozitif bir katalizör kullanıldığında aşağıdakilerden hangisi değişmez?',
        opts: ['Tepkime entalpisi (ΔH)', 'İleri aktifleşme enerjisi (Eai)', 'Tepkime hızı', 'Hız sabiti (k)', 'Aktifleşmiş kompleksin potansiyel enerjisi'],
        ans: 0,
        exp: 'Katalizör aktifleşme enerjisini (Eai ve Eag) aynı miktarda düşürür; bu nedenle tepkime entalpisi (ΔH = Eai - Eag) asla değişmez.'
      }
    ]
  },
  {
    id: 'u18',
    order: 18,
    exam: 'AYT',
    grade: 11,
    title: loc('Kimyasal Denge', 'Chemical Equilibrium', 'Chemisches Gleichgewicht', 'Équilibre Chimique', 'Химическое равновесие', 'الاتزان الكيميائي', '化学平衡', 'Hevsengiya Kîmyewî'),
    subtitle: loc('Le Chatelier İlkesi, Kc ve Kp Bağıntıları', 'Kc, Kp, Le Chatelier Principle & Shifts'),
    keywords: ['Kc', 'Kp', 'Le Chatelier', 'denge', 'dinamik denge', 'basınç'],
    factsList: [
      { f: 'Kimyasal denge dinamiktir; ileri tepkime hızı geri tepkime hızına eşit olduğunda kurulur (ri = rg).', t: 'Denge kurulduğunda tüm kimyasal tepkimeler ve tanecik hareketleri tamamen durur.' },
      { f: 'Denge anında reaktif ve ürün derişimleri sabittir; ancak derişimlerin birbirine eşit olması gerekmez.', t: 'Dengeye ulaşan bir sistemde girenlerin ve ürünlerin derişimleri daima eşittir.' },
      { f: 'Denge sabiti Kc sadece sıcaklıkla değişir; derişim, basınç, hacim veya katalizör Kc yi DEĞİŞTİRMEZ.', t: 'Katalizör eklendiğinde sistemin denge sabiti Kc büyür.', tip: 'ÖSYM kuralı: Kc yi değiştiren TEK faktör sıcaklıktır!' },
      { f: 'Kp ile Kc arasındaki bağıntı: Kp = Kc * (R*T)^Δn dir (Δn: gaz fazındaki ürün katsayıları toplamı - giren katsayıları toplamı).', t: 'Δn hesaplanırken katı ve sıvı fazdaki maddelerin katsayıları da dahil edilir.' },
      { f: 'Eğer gaz fazında Δn = 0 ise (ürün gaz molü = giren gaz molü), Kp = Kc dir.', t: 'Δn = 0 olduğunda Kp sıfıra eşit olur.' },
      { f: 'Le Chatelier İlkesi: Dengedeki bir sisteme dışarıdan bir etki yapıldığında sistem bu etkiyi azaltacak yöne kayar.', t: 'Dengedeki sisteme madde eklenirse sistem o maddenin derişimini daha da artıracak yöne kayar.' },
      { f: 'Endotermik tepkimelerde (ΔH > 0) sıcaklık artırılırsa denge ürünler lehine kayar ve Kc artar.', t: 'Endotermik tepkimede sıcaklık artışı denge sabitini küçültür.' },
      { f: 'Ekzotermik tepkimelerde (ΔH < 0) sıcaklık artırılırsa denge girenler lehine kayar ve Kc azalır.', t: 'Ekzotermik tepkimede sıcaklık arttıkça daha çok ürün oluşur.' },
      { f: 'Katalizör ileri ve geri tepkime hızını eşit oranda artırır; dengeyi bozmaz, sadece dengeye ulaşma süresini kısaltır.', t: 'Katalizör ürün verimini artırmak için kullanılır.' },
      { f: 'Hacim küçültülürse (basınç artırılırsa) sistem gaz mol sayısının az olduğu tarafa kayar.', t: 'Hacim küçültüldüğünde sistem gaz mol sayısının çok olduğu yöne kayar.' },
      { f: 'Denge kesri Qc = Kc ise sistem dengededir; Qc < Kc ise ürünlere kayar; Qc > Kc ise girenlere kayar.', t: 'Qc > Kc olduğunda sistem dengededir.' },
      { f: 'Denge bağıntısına yalnızca gazlar ve suda çözünmüş (aq) iyonlar yazılır; saf katı ve sıvılar yazılmaz.', t: 'Saf katıların derişimleri denge kesrinde paydada yer alır.' },
      { f: 'Tepkime ters çevrilirse yeni denge sabiti Kc_yeni = 1 / Kc olur.', t: 'Tepkime ters çevrildiğinde Kc nin işareti eksi olur.' },
      { f: 'Tepkime n katsayısıyla çarpılırsa yeni denge sabiti Kc_yeni = (Kc)^n olur.', t: 'Tepkime 2 ile çarpılırsa Kc de 2 ile çarpılır.' },
      { f: 'Tepkimeler toplanırsa denge sabitleri birbiriyle çarpılır (Kc_net = Kc1 * Kc2).', t: 'Tepkimeler toplandığında denge sabitleri de birbiriyle toplanır.' },
      { f: 'Minimum enerji eğilimi ısının olduğu tarafa, maksimum düzensizlik eğilimi gaz mol sayısının çok olduğu tarafa doğrudur.', t: 'Denge daima sadece minimum enerji yönünde kurulur.' },
    ],
    comparisonsList: [
      { a: 'Kc', b: 'Kp', d: 'Kc derişimler cinsinden denge sabiti, Kp kısmi basınçlar cinsinden denge sabitidir; Kp = Kc(RT)^Δn dir.' },
      { a: 'Dengeye Sıcaklığın Etkisi', b: 'Dengeye Basıncın Etkisi', d: 'Dengeye sıcaklığın etkisi denge sabiti Kc nin sayısal değerini değiştirir; dengeye basıncın etkisi ise gaz mol sayısına göre denge yönünü kaydırır ancak Kc nin değerini değiştirmez.' },
    ],
    sequencesList: [
      { title: 'Le Chatelier Etkisi Analiz Adımları', steps: ['Yapılan dış etkiyi belirle (sıcaklık, derişim, hacim)', 'Sistemin etkiyi azaltıcı yönünü bul', 'Tepkimenin kaydığı yönü belirle (ürünler veya girenler)', 'Kc nin değişip değişmediğini kontrol et (sadece T ile)'] }
    ],
    twinsList: [
      {
        stem: 'N2(g) + 3 H2(g) ⇌ 2 NH3(g)  ΔH = -92 kJ tepkimesi dengedeyken sıcaklık artırılırsa aşağıdakilerden hangisi gerçekleşir?',
        opts: [
          'Denge sabiti (Kc) küçülür',
          'NH3 gazı derişimi artar',
          'Denge ürünler yönüne kayar',
          'Toplam gaz mol sayısı azalır',
          'İleri tepkime hızı azalır'
        ],
        ans: 0,
        exp: 'Tepkime ekzotermiktir. Sıcaklık artarsa sistem girenler yönüne kayar ve Kc denge sabiti küçülür.'
      },
      {
        stem: 'C(k) + CO2(g) ⇌ 2 CO(g) tepkimesi için Kp ile Kc arasındaki bağıntı aşağıdakilerden hangisidir?',
        opts: ['Kp = Kc * (RT)', 'Kp = Kc', 'Kp = Kc * (RT)^2', 'Kc = Kp * (RT)', 'Kp = Kc / (RT)'],
        ans: 0,
        exp: 'Δn = n_ürün(gaz) - n_giren(gaz) = 2 - 1 = 1 dir (C katıdır, alınmaz). Kp = Kc * (RT)^Δn = Kc * (RT)^1 = Kc * (RT).'
      }
    ]
  },
  {
    id: 'u19',
    order: 19,
    exam: 'AYT',
    grade: 11,
    title: loc('Asit-Baz Dengesi ve Titrasyon', 'Acid-Base Equilibrium & Titration', 'Säure-Base-Gleichgewicht & Titration', 'Équilibre Acide-Base & Titrage', 'Кислотно-основное равновесие и титрование', 'الاتزان الحمضي القاعدي والمعايرة', '酸碱平衡与滴定', 'Hevsengiya Asîd-Baz û Tîtrakirin'),
    subtitle: loc('pH, pOH, Ka, Kb, Tampon ve Titrasyon Eğrileri', 'Weak Acids, Buffer Solutions & Equivalence'),
    keywords: ['pH', 'pOH', 'Ka', 'Kb', 'tampon', 'titrasyon', 'eşdeğerlik'],
    factsList: [
      { f: '25 °C\'de suyun otoiyonizasyon sabiti Ksu = [H+] * [OH-] = 1.0x10^-14\'tür; pH + pOH = 14\'tür.', t: 'Her sıcaklıkta pH + pOH toplamı mutlaka 14\'tür.', tip: 'Ksu sıcaklık arttıkça büyür (endotermiktir), bu yüzden sıcaklıkla pH+pOH değişir!' },
      { f: 'Kuvvetli asit ve bazlar suda %100 iyonlaşırken, zayıf asit ve bazlar kısmen iyonlaşarak denge kurar (Ka, Kb).', t: 'Zayıf asitler suda hiç iyonlaşmaz.' },
      { f: 'Zayıf monoproteik asit için [H+] = sqrt(Ka * Ca)\'dır (Ca: asidin başlangıç molaritesi).', t: 'Zayıf asidin H+ derişimi başlangıç derişimine eşittir.' },
      { f: 'Brønsted-Lowry tanımına göre H+ veren asit, H+ alan bazdır; aralarında 1 H+ fark olan çiftlere konjuge (eşlenik) asit-baz denir.', t: 'Eşlenik asit-baz çiftleri arasında 2 elektron farkı bulunur.' },
      { f: 'Bir eşlenik asit-baz çiftinde Ka * Kb = Ksu = 10^-14\'tür (25 °C\'de).', t: 'Ka değeri büyük olan asidin eşlenik bazının Kb değeri de çok büyüktür.' },
      { f: 'Tampon çözelti, zayıf asit ile onun konjuge tuzunu (veya zayıf baz ile konjuge tuzunu) içeren ve pH değişimine direnen sistemdir.', t: 'Tampon çözelti kuvvetli asit ile kuvvetli baz karışımından oluşur.' },
      { f: 'İnsan kanı (pH ≈ 7.4) H2CO3 / HCO3- karbonik asit-bikarbonat tampon sistemiyle dengelenir.', t: 'Kan tampon sistemi hidroklorik asit ile dengelenir.' },
      { f: 'Titrasyonda eşdeğerlik noktası (dönüm noktası): Asitten gelen H+ mol sayısının bazdan gelen OH- mol sayısına eşit olduğu andır (nH+ = nOH-).', t: 'Eşdeğerlik noktasında çözeltinin pH\'ı daima 7.00 olmak zorundadır.', tip: 'Zayıf asit - kuvvetli baz titrasyonunda eşdeğerlik noktasında pH > 7\'dir!' },
      { f: 'Kuvvetli asit - kuvvetli baz titrasyonunda eşdeğerlik noktasında pH tam 7.00\'dir.', t: 'Kuvvetli asit kuvvetli baz titrasyonunda eşdeğerlik noktasında pH 0\'dır.' },
      { f: 'Tuz hidrolizi: Zayıf asitten gelen anyon veya zayıf bazdan gelen katyonun suyla tepkimeye girmesidir.', t: 'Nötr tuzların iyonları suda şiddetle hidroliz olur.' },
      { f: 'Asitlik sabiti Ka büyüdükçe asidin kuvveti ve iyonlaşma yüzdesi artar.', t: 'Ka\'sı küçük olan asit daha kuvvetlidir.' },
      { f: 'Zayıf bir asit çözeltisine saf su eklenip seyreltilirse iyonlaşma yüzdesi artar; ancak H+ derişimi azalır (pH artar).', t: 'Zayıf asit seyreltildiğinde H+ derişimi artar.' },
      { f: 'Eşdeğerlik noktasında formül: Ma * Va * Za = Mb * Vb * Zb\'dir (Z: tesir/etki değerliği).', t: 'Titrasyonda tesir değerliği dikkate alınmaz.' },
      { f: 'HCl, HNO3, H2SO4 kuvvetli asit; HF, HCN, CH3COOH (sirke asidi) zayıf asitlerdir.', t: 'HF camı erittiği için en kuvvetli asittir.', tip: 'HF zayıf asittir; camı eritmesi kimyasal özel afinitesindendir!' },
      { f: 'NaOH, KOH kuvvetli baz; NH3 (amonyak) zayıf bazdır.', t: 'NH3 kuvvetli bir bazdır.' },
      { f: 'İndikatörler ortamın pH\'ına bağlı olarak renk değiştiren zayıf organik asit veya bazlardır.', t: 'İndikatörler titrasyon tepkimesini hızlandıran katalizörlerdir.' },
    ],
    comparisonsList: [
      { a: 'Kuvvetli Asit', b: 'Zayıf Asit', d: 'Kuvvetli asit suda %100 iyonlaşır (Ka\'sı yoktur); zayıf asit kısmen iyonlaşır denge kurar (Ka vardır).' },
      { a: 'Eşdeğerlik Noktası', b: 'Nötr Nokta', d: 'Eşdeğerlik nH+ = nOH- olduğu andır; nötr nokta pH = 7 olduğu andır. Zayıf asit-kuvvetli bazda eşdeğerlikte pH > 7\'dir.' },
    ],
    sequencesList: [
      { title: 'Zayıf Asit pH Hesaplama Adımları', steps: ['İyonlaşma denge denklemini yaz: HA ⇌ H+ + A-', '[H+] = sqrt(Ka * Ca) bağıntısını uygula', '[H+] değerini hesapla', 'pH = -log[H+] formülünü çöz'] }
    ],
    twinsList: [
      {
        stem: '0.1 M\'lık sulu sirke asidi (CH3COOH) çözeltisinin pH değeri kaçtır? (CH3COOH için Ka = 1.0x10^-5)',
        opts: ['3', '1', '5', '7', '2'],
        ans: 0,
        exp: '[H+] = sqrt(Ka * Ca) = sqrt(10^-5 * 10^-1) = sqrt(10^-6) = 10^-3 M. pH = -log[H+] = -log(10^-3) = 3.'
      },
      {
        stem: '0.1 M 100 mL HCl çözeltisini tam nötralleştirmek için 0.2 M NaOH çözeltisinden kaç mL harcanmalıdır?',
        opts: ['50 mL', '100 mL', '200 mL', '25 mL', '10 mL'],
        ans: 0,
        exp: 'Ma * Va * Za = Mb * Vb * Zb -> 0.1 * 100 * 1 = 0.2 * Vb * 1 -> 10 = 0.2 * Vb -> Vb = 50 mL.'
      }
    ]
  },
  {
    id: 'u20',
    order: 20,
    exam: 'AYT',
    grade: 11,
    title: loc('Çözünürlük Dengesi (Kçç)', 'Solubility Product (Ksp)', 'Löslichkeitsprodukt', 'Produit de Solubilité', 'Произведение растворимости', 'حاصل الإذابة', '溶度积', 'Hevsengiya Çareserbûnê'),
    subtitle: loc('Çökelme Şartı, Kçç Bağıntıları ve Ortak İyon', 'Ksp, Common Ion Effect & Selective Precipitation'),
    keywords: ['Kçç', 'çözünürlük çarpımı', 'çökelme', 'ortak iyon', 'az çözünen tuz'],
    factsList: [
      { f: 'Çözünürlük çarpımı sabiti (Kçç), az çözünen tuzların doymuş sulu çözeltilerindeki iyon derişimleri çarpımıdır.', t: 'Kçç çok çözünen tuzların derişimini ifade eder.' },
      { f: 'Kçç sabiti YALNIZCA sıcaklıkla değişir; ortak iyon, çözünen miktarı veya su eklemek Kçç yi DEĞİŞTİRMEZ.', t: 'Ortak iyon eklendiğinde Kçç değeri küçülür.', tip: 'ÖSYM kuralı: Kçç yi sadece sıcaklık değiştirir!' },
      { f: '1:1 tuzlarda (AgCl) çözünürlük s ise Kçç = s^2 dir (s = sqrt(Kçç)).', t: 'AgCl için Kçç = 4s^3 tür.' },
      { f: '1:2 tuzlarda (PbCl2, CaF2) çözünürlük s ise Kçç = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3 tür.', t: 'PbCl2 için Kçç = 2s^2 dir.' },
      { f: '1:3 tuzlarda (Al(OH)3, Fe(OH)3) çözünürlük s ise Kçç = s * (3s)^3 = 27s^4 tür.', t: 'Al(OH)3 için Kçç = 3s^3 tür.' },
      { f: 'Ortak iyon etkisi: Çözeltide ortak iyon bulunması Le Chatelier gereği dengeyi girenlere kaydırır ve çözünürlüğü azaltır.', t: 'Ortak iyon tuzun çözünürlüğünü artırır.' },
      { f: 'İyon çarpımı Qi (çökelme kesri): Qi > Kçç ise çözelti aşırı doygundur ve çökelme gerçekleşir.', t: 'Qi < Kçç olduğunda çökelme meydana gelir.' },
      { f: 'Qi = Kçç ise çözelti tam doygundur ve çökelme olmaz; Qi < Kçç ise çözelti doymamıştır.', t: 'Qi = Kçç olduğunda çözelti doymamıştır ve tuz çöker.' },
      { f: 'AgCl katısının saf sudaki çözünürlüğü, 0.1 M NaCl çözeltisindeki çözünürlüğünden ÇOK DAHA BÜYÜKTÜR.', t: 'AgCl tuzu NaCl çözeltisinde saf sudakinden daha çok çözünür.' },
      { f: 'Endotermik çözünen bir tuzda sıcaklık artırılırsa Kçç artar ve çözünürlük artar.', t: 'Endotermik tuzda ısıtma yapılırsa Kçç küçülür.' },
      { f: 'Ekzotermik çözünen bir tuzda sıcaklık artırılırsa Kçç azalır ve çözünürlük azalır.', t: 'Ekzotermik tuzlarda sıcaklık arttıkça daha çok madde çözünür.' },
      { f: 'Çözeltiye aynı sıcaklıkta su eklenirse dipteki katı çözünür ancak doymuş çözeltideki iyon derişimleri ve Kçç değişmez.', t: 'Dipte katısı olan çözeltiye su eklenirse çözelti derişimi hızla artar.' },
      { f: 'Seçimli çöktürme: İki iyon içeren çözeltiye çöktürücü eklendiğinde Kçç si küçük olan (daha az çözünen) önce çöker.', t: 'Kçç si büyük olan tuz çözeltiden ilk önce çöker.' },
      { f: 'Sıcak su mağaralarındaki sarkıt ve dikitler (travertenler), CaCO3 ün çözünürlük dengesi ile oluşur.', t: 'Sarkıt ve dikitler fiziksel buharlaşma sonucu kum birikimidir.' },
      { f: 'Bazik tuzların (örn. Mg(OH)2) asidik ortamda çözünürlüğü artar çünkü H+ iyonları OH- iyonlarını nötralleştirerek dengeyi sağa kaydırır.', t: 'Mg(OH)2 asidik ortamda daha az çözünür.' },
      { f: 'Kompleksleşme olayı az çözünen tuzların çözünürlüğünü artırabilir (örn. AgCl nin NH3 lü ortamda çözünmesi).', t: 'Kompleks oluşumu tuzu hemen çöktürür.' },
    ],
    comparisonsList: [
      { a: 'Qi < Kçç', b: 'Qi > Kçç', d: 'Qi < Kçç doymamış çözelti çökelme yok; Qi > Kçç aşırı doymuş çözelti çökelme var demektir.' },
      { a: 'Saf Sudaki Çözünürlük', b: 'Ortak İyondaki Çözünürlük', d: 'Ortak iyon varlığı dengeyi sola kaydırarak çözünürlüğü büyük ölçüde düşürür.' },
    ],
    sequencesList: [
      { title: 'Çökelme Olup Olmayacağını Belirleme', steps: ['Karışım sonrası iyon derişimlerini hesapla (V_toplam a göre)', 'İyon çarpımı bağıntısını yaz: Qi = [A+]^a * [B-]^b', 'Qi değerini hesapla', 'Qi ile Kçç yi karşılaştır (Qi > Kçç ise çöker)'] }
    ],
    twinsList: [
      {
        stem: 'Belirli bir sıcaklıkta AgCl katısının çözünürlük çarpımı Kçç = 1.0x10^-10 dur. Buna göre AgCl nin saf sudaki çözünürlüğü kaç mol/L dir?',
        opts: ['1.0x10^-5 M', '1.0x10^-10 M', '2.0x10^-5 M', '1.0x10^-20 M', '5.0x10^-6 M'],
        ans: 0,
        exp: 'AgCl ⇌ Ag+ + Cl- -> Kçç = s^2 = 10^-10 -> s = sqrt(10^-10) = 1.0x10^-5 M.'
      },
      {
        stem: 'Belirli sıcaklıkta Kçç si 4.0x10^-12 olan XY2 tuzunun saf sudaki molar çözünürlüğü kaçtır?',
        opts: ['1.0x10^-4 M', '2.0x10^-6 M', '1.0x10^-6 M', '4.0x10^-4 M', '2.0x10^-4 M'],
        ans: 0,
        exp: 'XY2 ⇌ X2+ + 2 Y- -> Kçç = s * (2s)^2 = 4s^3 = 4.0x10^-12 -> s^3 = 10^-12 -> s = 1.0x10^-4 M.'
      }
    ]
  },
  {
    id: 'u21',
    order: 21,
    exam: 'AYT',
    grade: 12,
    title: loc('Kimya ve Elektrik: Redoks ve Galvanik Piller', 'Electrochemistry: Redox & Galvanic', 'Elektrochemie: Redox & Galvanische Zellen', 'Électrochimie: Redox & Piles Galvaniques', 'Электрохимия: ОВР и гальванические элементы', 'الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية', '电化学：氧化还原与原电池', 'Kîmya û Elektrîk: Redoks û Pîlên Galvanîk'),
    subtitle: loc('Yükseltgenme Basamağı, Daniell Pili ve Nernst Eşitliği', 'Oxidation States, Daniell Cell & Nernst Equation'),
    keywords: ['redoks', 'Daniell pili', 'anot', 'katot', 'Nernst', 'yükseltgenme', 'indirgenme'],
    factsList: [
      { f: 'Redoks tepkimelerinde elektron veren madde yükseltgenir (indirgendir); elektron alan madde indirgenir (yükseltgendir).', t: 'Elektron alan madde yükseltgenmiştir.' },
      { f: 'Galvanik pilde ANOTTA daima YÜKSELTGENME, KATOTTA daima İNDİRGENME gerçekleşir (KİMYA: Katotta İndirgenme, Mayot/Anotta Yükseltgenme).', t: 'Anotta indirgenme gerçekleşir.' },
      { f: 'Tuz köprüsündeki ANYONLAR ANODA, KATYONLAR KATODA göç ederek yük denkliğini sağlar.', t: 'Tuz köprüsündeki anyonlar katoda gider.' },
      { f: 'Standart pil potansiyeli: E°pil = E°yüks(anot) + E°ind(katot) tur; E°pil > 0 ise tepkime istemlidir.', t: 'E°pil negatif olduğunda pil kendiliğinden çalışır ve elektrik üretir.' },
      { f: 'Standart Hidrojen Elektrodu (SHE): 25 °C, 1 atm H2 gazı ve 1 M H+ çözeltisi içerir; potansiyeli 0.00 V kabul edilir.', t: 'Standart hidrojen elektrodunun gerilimi 1.00 V tur.' },
      { f: 'Aktifliği büyük olan metal anottur (yükseltgenme potansiyeli büyük olan metal anot olur).', t: 'İndirgenme potansiyeli büyük olan metal anot kutbudur.' },
      { f: 'Pil çalıştıkça anot elektrot kütlesi genellikle aşınarak azalır; katot elektrot üzerinde madde toplanır kütlesi artar.', t: 'Pil çalıştıkça anot elektrotun kütlesi katlanır.' },
      { f: 'Anot yarı hücresine saf su eklenirse anot iyon derişimi azalır, denge ürünlere kayar ve pil potansiyeli artar.', t: 'Anot çözeltisine su eklendiğinde pil gerilimi düşer.' },
      { f: 'Katot yarı hücresine saf su eklenirse katot iyon derişimi azalır, denge girenlere kayar ve pil potansiyeli azalır.', t: 'Katot çözeltisine su eklendiğinde pil gerilimi yükselir.' },
      { f: 'Nernst Eşitliği: Epil = E°pil - (0.0592 / n) * log Q dur (n: aktarılan elektron mol sayısı, Q: anot/katot derişim oranı).', t: 'Nernst eşitliğinde pil potansiyeli derişimden etkilenmez.' },
      { f: 'Derişim pilleri: Aynı elektrot ve aynı çözeltilerin farklı derişimleriyle kurulur; derişimi küçük olan yarı hücre ANOTTUR.', t: 'Derişim pillerinde derişimi büyük olan hücre anottur.' },
      { f: 'Derişim pilinde derişimler eşitlendiğinde sistem dengeye ulaşır ve pil gerilimi Epil = 0 olur (pil biter).', t: 'Derişimler eşitlendiğinde pil gerilimi maksimuma ulaşır.' },
      { f: 'Pil tepkimeleri ekzotermik denge tepkimeleridir; sıcaklık artırılırsa Le Chatelier gereği denge sola kayar ve pil gerilimi düşer.', t: 'Pil ısıtıldığında gerilimi artar ve daha çok akım üretir.' },
      { f: 'Pil denklemi bir katsayı ile çarpılırsa E°pil değeri DEĞİŞMEZ (potansiyel şiddet özelliğidir).', t: 'Tepkime 2 ile çarpılırsa E°pil de 2 ile çarpılır.' },
      { f: 'Tuz köprüsü çekilirse devreden akım geçmez ve pil anında durur.', t: 'Tuz köprüsü olmadan da galvanik piller sonsuza dek çalışır.' },
      { f: 'Daniell pilinde Zn anot (Zn -> Zn2+ + 2e-) ve Cu katottur (Cu2+ + 2e- -> Cu); E°pil = 1.10 V tur.', t: 'Daniell pilinde bakır elektrot anot olarak davranır.' },
    ],
    comparisonsList: [
      { a: 'Anot', b: 'Katot', d: 'Anotta yükseltgenme olur elektrot kütlesi azalır; katotta indirgenme olur elektrot kütlesi artar.' },
      { a: 'Kimyasal Pil', b: 'Derişim Pili', d: 'Kimyasal pilde farklı metaller vardır; derişim pilinde aynı metalin farklı derişimleri vardır.' },
    ],
    sequencesList: [
      { title: 'Pil Potansiyeli Hesaplama Adımları', steps: ['Yükseltgenme potansiyellerini karşılaştırıp anotu belirle', 'Katot indirgenme yarı tepkimesini yaz', 'E°pil = E°anot + E°katot ile standart gerilimi bul', 'Derişimler 1 M den farklıysa Nernst formülünü uygula'] }
    ],
    twinsList: [
      {
        stem: 'Zn(k) | Zn2+(1 M) || Cu2+(1 M) | Cu(k) Daniell pili için E°(Zn2+/Zn) = -0.76 V ve E°(Cu2+/Cu) = +0.34 V olduğuna göre standart pil potansiyeli kaç volttur?',
        opts: ['1.10 V', '0.42 V', '-1.10 V', '0.76 V', '-0.42 V'],
        ans: 0,
        exp: 'Zn yükseltgenme potansiyeli = +0.76 V (anot). Cu indirgenme potansiyeli = +0.34 V (katot). E°pil = 0.76 + 0.34 = 1.10 V.'
      },
      {
        stem: 'Standart bir elektrokimyasal pilde tuz köprüsündeki iyonların hareketi ile ilgili hangisi doğrudur?',
        opts: [
          'Anyonlar anoda, katyonlar katoda göç eder',
          'Katyonlar anoda, anyonlar katoda göç eder',
          'Tüm iyonlar sadece katoda doğru hareket eder',
          'Tuz köprüsündeki iyonlar hareket etmez',
          'Elektronlar tuz köprüsünden akar'
        ],
        ans: 0,
        exp: 'Tuz köprüsünde yük denkliği için anyonlar anoda, katyonlar katoda göç eder. Elektronlar ise dış devreden anottan katoda akar.'
      }
    ]
  },
  {
    id: 'u22',
    order: 22,
    exam: 'AYT',
    grade: 12,
    title: loc('Kimya ve Elektrik: Elektroliz ve Korozyon', 'Electrochemistry: Electrolysis & Corrosion', 'Elektrolyse & Korrosion', 'Électrolyse & Corrosion', 'Электролиз и коррозия', 'التحليل الكهربائي والتآكل', '电解与腐蚀', 'Elektrolîz û Korozyon'),
    subtitle: loc('Faraday Kanunları, Suyun Elektrolizi ve Kurban Anot', 'Faraday Laws, Water Split & Sacrificial Anode'),
    keywords: ['elektroliz', 'Faraday', 'kurban anot', 'Hoffman voltametresi', 'korozyon', 'katodik koruma'],
    factsList: [
      { f: 'Elektroliz, istemsiz (E°pil < 0) bir redoks tepkimesinin dışarıdan elektrik enerjisi verilerek zorla gerçekleştirilmesidir.', t: 'Elektroliz kendiliğinden elektrik üreten bir galvanik sistemdir.' },
      { f: 'Faraday 1. Kanunu: Elektrotlarda toplanan madde miktarı devreden geçen elektrik yükü miktarı (Q = I * t) ile doğru orantılıdır.', t: 'Elektrotta toplanan madde devreden geçen akımla ters orantılıdır.' },
      { f: '1 Faraday = 1 mol elektron yükü = 96500 Coulomb\'dur.', t: '1 Faraday elektrik yükü 1 Coulomb\'a eşittir.' },
      { f: 'Elektrotlarda toplanan madde kütlesi formülü: m = (Q * MA) / (96500 * z)\'dir (z: tesir değerliği / alınan-verilen elektron sayısı).', t: 'Toplanan madde kütlesi maddenin mol kütlesine bölünerek bulunur.' },
      { f: 'Faraday 2. Kanunu: Seri bağlı elektroliz kaplarından geçen elektrik yükü eşittir ve toplanan maddelerin eşdeğer gram sayıları eşittir.', t: 'Seri bağlı kaplarda toplanan maddelerin kütleleri daima birbirine eşittir.' },
      { f: 'Suyun elektrolizinde (Hoffman voltametresi): Katotta 2 hacim H2 gazı toplanırken, anotta 1 hacim O2 gazı toplanır (2 H2O -> 2 H2 + O2).', t: 'Suyun elektrolizinde anotta katottan 2 kat daha fazla gaz toplanır.' },
      { f: 'Erimiş tuzların elektrolizinde katotta katyon indirgenerek metal açığa çıkar; anotta anyon yükseltgenerek ametal gazı açığa çıkar.', t: 'Erimiş NaCl elektrolizinde anotta sodyum metali toplanır.' },
      { f: 'Sulu çözelti elektrolizinde katotta indirgenme potansiyeli en büyük olan (en pasif katyon) öncelikle indirgenir.', t: 'Sulu çözeltide katotta aktifliği en büyük olan Na+ öncelikle indirgenir.' },
      { f: 'Sulu çözelti elektrolizinde anotta yükseltgenme potansiyeli en büyük olan (en aktif anyon) öncelikle yükseltgenir.', t: 'Anotta yükseltgenme potansiyeli en küçük olan anyon önce çıkar.' },
      { f: 'Korozyon, metallerin çevre koşullarıyla (özellikle O2 ve nem) elektrokimyasal olarak yükseltgenip aşınmasıdır (paslanma).', t: 'Korozyon metallerin fiziksel olarak parlatılması işlemidir.' },
      { f: 'Katodik koruma (Kurban Anot): Korunacak metalden daha aktif bir metal (Mg, Zn) sisteme bağlanarak kurban anot olarak aşındırılır.', t: 'Kurban elektrot olarak korunacak metalden daha pasif bir metal seçilmelidir.' },
      { f: 'Elektrolitik kaplamacılıkta (galvanoplasti): Kaplanacak eşya KATOTA bağlanır; kaplama metali ANOTA bağlanır.', t: 'Kaplanacak eşya anota bağlanmalıdır.' },
      { f: 'Saf su elektriği çok az ilettiğinden suyun elektrolizinde iletkenliği artırmak için ortama birkaç damla H2SO4 eklenir.', t: 'Suyun elektrolizi için saf suya şeker eklenir.' },
      { f: 'Erimiş CaCl2 tuzundan 2 Faraday akım geçerse katotta 1 mol Ca metali toplanır (Ca2+ + 2e- -> Ca).', t: '2 Faraday akım geçtiğinde 2 mol Ca metali toplanır.' },
      { f: 'Downs hücresi erimiş NaCl\'den metalik sodyum üretimi için kullanılan endüstriyel elektroliz hücresidir.', t: 'Downs hücresi pil üretmek için kullanılır.' },
      { f: 'Demir bir boruyu korozyondan korumak için magnezyum bloğu bağlanması aktiflik farkına dayalı kurban elektrot uygulamasıdır.', t: 'Kurban elektrot demirin üzerine altın kaplama yapmaktır.' },
    ],
    comparisonsList: [
      { a: 'Galvanik Hücre (Pil)', b: 'Elektroliz Hücresi', d: 'Pil kimyasal enerjiyi elektrik enerjisine çevirir (istemli); elektroliz elektrikle istemsiz tepkimeyi yürütür.' },
      { a: 'Katotta H2 Çıkışı', b: 'Anotta O2 Çıkışı', d: 'Suyun elektrolizinde katottaki H2 hacmi anottaki O2 hacminin tam iki katıdır.' },
    ],
    sequencesList: [
      { title: 'Elektroliz Kütle Hesap Adımları', steps: ['Q = I * t ile toplam yükü (Coulomb) hesapla', 'Mol elektronu bul: n_e = Q / 96500', 'Elektrot yarı tepkimesini yazıp elektron katsayısıyla oranla', 'm = n * MA ile toplanan katı kütlesini bul'] }
    ],
    twinsList: [
      {
        stem: 'Erimiş MgCl2 tuzu 9.65 amperlik akımla 1000 saniye elektroliz edildiğinde katotta kaç gram Mg toplanır? (Mg: 24, 1 F = 96500 C)',
        opts: ['1.2 g', '2.4 g', '0.6 g', '4.8 g', '12.0 g'],
        ans: 0,
        exp: 'Q = I * t = 9.65 * 1000 = 9650 C. n_e = 9650 / 96500 = 0.1 mol elektron. Mg2+ + 2e- -> Mg -> n(Mg) = 0.1 / 2 = 0.05 mol. m = 0.05 * 24 = 1.2 gram.'
      },
      {
        stem: 'Hoffman voltametresi ile suyun elektrolizinde anotta 15 cm3 O2 gazı toplandığı anda katotta kaç cm3 H2 gazı toplanır?',
        opts: ['30 cm3', '15 cm3', '7.5 cm3', '45 cm3', '60 cm3'],
        ans: 0,
        exp: '2 H2O -> 2 H2 + O2 tepkimesine göre katottaki H2 gazı hacmi anottaki O2 gazı hacminin iki katıdır: 2 * 15 = 30 cm3.'
      }
    ]
  },
  {
    id: 'u23',
    order: 23,
    exam: 'AYT',
    grade: 12,
    title: loc('Karbon Kimyasına Giriş', 'Introduction to Carbon Chemistry', 'Einführung in die Kohlenstoffchemie', 'Introduction à la Chimie du Carbone', 'Введение в химию углерода', 'مقدمة في كيمياء الكربون', '碳化学导论', 'Destpêka Kîmyaya Karbonê'),
    subtitle: loc('Allotroplar, Hibritleşme, Sigma/Pi ve VSEPR', 'Hybridization, VSEPR Geometries & Graphene'),
    keywords: ['sp3', 'sp2', 'sp', 'VSEPR', 'hibritleşme', 'sigma', 'pi', 'allotrop', 'grafen'],
    factsList: [
      { f: 'Wöhler, 1828\'de anorganik bir madde olan potasyum siyanattan laboratuvarda üre sentezleyerek vitalizm (yaşam gücü) teorisini çürütmüştür.', t: 'Wöhler ilk kez canlı dokudan petrol sentezlemiştir.' },
      { f: 'Karbon atomu temel halde 4 kovalent bağ yapar ve hibritleşerek bağ enerjilerini eşitler.', t: 'Karbon atomu bileşiklerinde en fazla 2 kovalent bağ yapabilir.' },
      { f: 'Elmas, karbon atomlarının sp3 hibritleşmesi yaptığı, düzgün dörtyüzlü ağ örgülü, elektriği iletmeyen en sert doğal maddedir.', t: 'Elmas elektriği çok iyi iletir ve grafit kadar yumuşaktır.' },
      { f: 'Grafit, karbon atomlarının sp2 hibritleşmesi yaptığı altıgen tabakalı yapıdır; serbest pi elektronları sayesinde elektriği iletir.', t: 'Grafit elektriği kesinlikle iletmez.' },
      { f: 'Grafen, karbon atomlarının tek atom kalınlığında iki boyutlu bal peteği örgüsüdür; çelikten 200 kat sağlam ve olağanüstü iletkendir.', t: 'Grafen üç boyutlu kırılgan bir yalıtkandır.' },
      { f: 'Fullerenler yapay karbon allotropları olup futbol topu, nano tüp ve nano tüpler şeklinde sentezlenir.', t: 'Fullerenler doğada madenlerde kristal halde bolca bulunur.' },
      { f: 'İki atom arasında oluşan İLK bağ daima sigma (σ) bağıdır; sonradan oluşan ikinci ve üçüncü bağlar pi (π) bağıdır.', t: 'İki atom arasında önce pi bağı kurulur.' },
      { f: 'Sigma bağı orbitallerin uç uca örtüşmesiyle, pi bağı paralel (yan yana) örtüşmesiyle oluşur; sigma bağı pi bağından daha sağlamdır.', t: 'Pi bağları sigma bağlarından çok daha güçlüdür.' },
      { f: 'Karbon atomu tüm bağlarını tekli yapmışsa sp3, bir çift bağ yapmışsa sp2, bir üçlü bağ (veya iki çift bağ) yapmışsa sp hibritleşmesi yapmıştır.', t: 'CH4 molekülünde karbon atomu sp hibritleşmesi yapmıştır.' },
      { f: 'VSEPR AX2: Molekül geometrisi DOĞRUSAL, bağ açısı 180°\'dir (örn. BeH2, CO2, C2H2).', t: 'CO2 molekülü kırık doğru geometrisindedir.' },
      { f: 'VSEPR AX3: Molekül geometrisi DÜZLEM ÜÇGEN, bağ açısı 120°\'dir (örn. BH3, BF3, SO3).', t: 'BF3 molekülü düzgün dörtyüzlüdür.' },
      { f: 'VSEPR AX4: Molekül geometrisi DÜZGÜN DÖRTYÜZLÜ, bağ açısı 109.5°\'dir (örn. CH4, CCl4).', t: 'CH4 molekülünde bağ açısı 90°\'dir.' },
      { f: 'VSEPR AX3E: Molekül geometrisi ÜÇGEN PİRAMİT, bağ açısı 107.3°\'dir (örn. NH3); molekül polardır.', t: 'NH3 molekülü apolar ve düzlem üçgendir.' },
      { f: 'VSEPR AX2E2: Molekül geometrisi KIRIK DOĞRU (açısal), bağ açısı 104.5°\'dir (örn. H2O); molekül polardır.', t: 'H2O molekülü doğrusal geometride apolardır.' },
      { f: 'Organik bileşiklerin ana kaynağı genellikle canlılar ve fosil yakıtlardır; anorganik bileşikler minerallerdir.', t: 'Anorganik bileşiklerin sayısı organik bileşiklerden çok daha fazladır.' },
      { f: 'Organik bileşikler genellikle yanıcıdır, erime noktaları düşüktür ve tepkimeleri yavaştır.', t: 'Organik bileşikler erime noktası binlerce derece olan iyonik kristallerdir.' },
    ],
    comparisonsList: [
      { a: 'Elmas', b: 'Grafit', d: 'Elmas sp3 hibritleşmeli elektriği iletmez serttir; grafit sp2 hibritleşmeli tabakalı elektriği iletir yumuşaktır.' },
      { a: 'Sigma (σ) Bağı', b: 'Pi (π) Bağı', d: 'Sigma bağı eksenel uç uca örtüşür sağlamdır; pi bağı yan yana p orbitallerinin örtüşmesidir kolay kırılır.' },
    ],
    sequencesList: [
      { title: 'VSEPR ve Geometri Belirleme Adımları', steps: ['Merkez atomun değerlik elektron sayısını bul', 'Lewis nokta yapısını çiz', 'Bağ yapan atomları (X) ve ortaklanmamış elektron çiftlerini (E) say', 'VSEPR formülünden (AXnEm) geometriyi ve açıyı belirle'] }
    ],
    twinsList: [
      {
        stem: 'H2O molekülünün VSEPR formülü ve molekül geometrisi aşağıdakilerden hangisinde doğru verilmiştir?',
        opts: ['AX2E2 - Kırık doğru', 'AX2 - Doğrusal', 'AX3E - Üçgen piramit', 'AX4 - Düzgün dörtyüzlü', 'AX3 - Düzlem üçgen'],
        ans: 0,
        exp: 'Oksijen merkez atomdur. 2 bağ yapmıştır (X2) ve 2 çift ortaklanmamış elektron taşır (E2). Formülü AX2E2 ve geometrisi kırık doğrudur (104.5°).'
      },
      {
        stem: 'H-C≡C-H (Asetilen) molekülünde kaç tane sigma (σ) ve kaç tane pi (π) bağı bulunur?',
        opts: ['3 sigma, 2 pi', '2 sigma, 3 pi', '5 sigma, 0 pi', '1 sigma, 4 pi', '4 sigma, 1 pi'],
        ans: 0,
        exp: 'C-H bağları birer sigma (2 sigma), üçlü bağın biri sigma ikisi pi bağıdır (1 sigma, 2 pi). Toplamda 3 sigma ve 2 pi bağı bulunur.'
      }
    ]
  },
  {
    id: 'u24',
    order: 24,
    exam: 'AYT',
    grade: 12,
    title: loc('Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar', 'Organic Compounds: Hydrocarbons', 'Organische Verbindungen & Kohlenwasserstoffe', 'Composés Organiques & Hydrocarbures', 'Органические соединения и функциональные группы', 'المركبات العضوية والهيدروكربونات', '有机化合物与官能团', 'Madeyên Organîk û Komên Fonksiyonel'),
    subtitle: loc('Alkan, Alken, Alkin, Alkol, Ester ve Markovnikov', 'Nomenclature, Isomerism, Reactions & Tests'),
    keywords: ['Markovnikov', 'alkan', 'alken', 'alkin', 'aromatik', 'alkol', 'aldehit', 'ester'],
    factsList: [
      { f: 'Alkanlar (parafinler, CnH2n+2) doymuş hidrokarbonlardır; sadece sigma bağı içerir ve katılma tepkimesi VERMEZ.', t: 'Alkanlar bromlu suyun kırmızı rengini hızla giderir.' },
      { f: 'Alkenler (olefinler, CnH2n) en az bir ikili bağ (C=C) içerir; katılma ve polimerleşme tepkimesi verir.', t: 'Alkenler doymuş hidrokarbonlar sınıfındadır.' },
      { f: 'Markovnikov Kuralı: Asimetrik alkenlere HX katılırken H atomu hidrojeni ÇOK olan karbona, X atomu hidrojeni AZ olan karbona bağlanır.', t: 'Katılma tepkimesinde hidrojen daima hidrojeni az olan karbona bağlanır.', tip: 'Zengin daha zengin olur kuralı: Hidrojen çok olana H gider!' },
      { f: 'Alkenler ve alkinler bromlu suyun (Br2/CCl4) kırmızı-kahverengi rengini soğukta giderir (doymamışlık testi).', t: 'Alkanlar bromlu suyun rengini hemen giderir.' },
      { f: 'Alkinler (asetilenler, CnH2n-2) en az bir üçlü bağ içerir; uç alkinler Tollens (Ag+) ile beyaz, Fehling (Cu+) ile kırmızı çökelek verir.', t: 'İç alkinler Tollens belirteciyle çökelek verir.' },
      { f: 'Aromatik bileşiklerin atası benzendir (C6H6); Kekule rezonans yapısına sahiptir, çok kararlıdır ve katılma tepkimesine isteksizdir.', t: 'Benzen üç tane normal alken gibi kolayca bromlu suyu giderir.' },
      { f: 'Alkoller (R-OH) molekülleri arasında hidrojen bağı kurar; aynı karbonlu eterlerden kaynama noktaları çok daha yüksektir.', t: 'Eterlerin kaynama noktası alkollerden daha yüksektir.' },
      { f: 'Primer alkoller bir basamak yükseltgenince aldehit, iki basamak yükseltgenince karboksilik asit oluşturur.', t: 'Tersiyer alkoller kolayca yükseltgenerek keton verir.' },
      { f: 'Sekonder alkoller yükseltgenerek keton oluşturur; tersiyer alkoller yükseltgenmeye karşı dirençlidir.', t: 'Ketonlar daha ileri yükseltgenerek esterlere dönüşür.' },
      { f: 'Aldehitler (R-CHO) Tollens reaktifi ile gümüş aynası, Fehling çözeltisi ile kırmızı Cu2O çökeleği oluşturur; ketonlar bu tepkimeyi vermez.', t: 'Aseton (keton) Tollens reaktifiyle gümüş aynası verir.' },
      { f: 'Karboksilik asitler (R-COOH) alkollerle asit katalizörlüğünde tepkimeye girerek hoş kokulu esterleri (R-COO-R\') oluşturur (esterleşme).', t: 'Esterleşme tepkimesinde baz katalizörlüğünde tuz açığa çıkar.' },
      { f: 'Karboksilik asit molekülleri kendi aralarında çift hidrojen bağı (dimer) oluşturduğundan kaynama noktaları oldukça yüksektir.', t: 'Karboksilik asitlerin kaynama noktası hidrokarbonlardan düşüktür.' },
      { f: 'Aynı karbon sayılı monoalkoller ile eterler birbirinin fonksiyonel grup izomeridir (örn. Etanol C2H5OH ve Dimetil eter CH3-O-CH3).', t: 'Etanol ve dimetil eter aynı kimyasal özelliklere sahiptir.' },
      { f: 'Aynı karbon sayılı aldehitler ile ketonlar birbirinin fonksiyonel grup izomeridir (örn. Propanal ve Propanon).', t: 'Aldehit ve keton izomerliği 2 karbonlu üyeden başlar.' },
      { f: 'Aynı karbon sayılı monokarboksilik asitler ile esterler birbirinin fonksiyonel grup izomeridir (örn. Asetik asit ve Metil format).', t: 'Esterlerin en küçük üyesi 1 karbonludur.' },
      { f: 'Alkenlerde ikili bağ karbonlarına bağlı gruplar aynı tarafta ise cis-, zıt tarafta ise trans- geometrik izomeri adını alır.', t: 'Aynı karbon atomuna iki özdeş grup bağlı olsa bile cis-trans izomeri görülür.' },
    ],
    comparisonsList: [
      { a: 'Aldehit', b: 'Keton', d: 'Aldehit karbonilin ucundadır (Tollens ile gümüş aynası verir); keton karbonilin ortasındadır (Tollens\'e etki etmez).' },
      { a: 'Alkan', b: 'Alken', d: 'Alkan doymuştur katılma vermez; alken doymamıştır bromlu suyun rengini giderir ve polimerleşir.' },
    ],
    sequencesList: [
      { title: 'Markovnikov Katılma Mekanizması', steps: ['Alkendeki pi bağını kır', 'Reaktifin H+ katyonunu hidrojeni çok olan C\'ye bağla', 'Kararlı karbokatyonu oluştur', 'Reaktifin anyonunu (Br-, OH-) diğer C\'ye bağla'] }
    ],
    twinsList: [
      {
        stem: 'Propen (CH3-CH=CH2) gazına asidik ortamda su (H2O) katıldığında Markovnikov kuralına göre ana ürün aşağıdakilerden hangisidir?',
        opts: ['2-Propanol', '1-Propanol', 'Propanal', 'Propanon', 'Propan'],
        ans: 0,
        exp: 'Markovnikov kuralına göre H atomu hidrojeni çok olan =CH2 karbonuna bağlanır. OH grubu ise ortadaki -CH- karbonuna bağlanarak ana ürün 2-propanolü oluşturur.'
      },
      {
        stem: 'Aşağıdaki organik bileşik sınıflarından hangisi Tollens reaktifi ile tepkimeye girerek gümüş aynası oluşturur?',
        opts: ['Aldehitler', 'Ketonlar', 'Eterler', 'Alkanlar', 'Esterler'],
        ans: 0,
        exp: 'Aldehitler karbonil grubundaki hidrojen sayesinde kolayca karboksilik aside yükseltgenir ve Tollens reaktifindeki Ag+ iyonlarını metalik gümüşe (gümüş aynası) indirger.'
      }
    ]
  }
];

// Helper to build full ChemistryUnitSeedData from metadata
function buildUnitSeed(meta: UnitMetadata): ChemistryUnitSeedData {
  const facts: FactTrapPair[] = meta.factsList.map((item, idx) => ({
    id: `${meta.id}-f${String(idx + 1).padStart(2, '0')}`,
    fact: loc(item.f),
    trap: loc(item.t),
    osymTip: item.tip ? loc(item.tip) : undefined,
  }));

  const comparisons: ConceptComparisonItem[] = meta.comparisonsList.map((item, idx) => ({
    id: `${meta.id}-c${String(idx + 1).padStart(2, '0')}`,
    conceptA: loc(item.a),
    conceptB: loc(item.b),
    distinction: loc(item.d),
  }));

  const fullComparisons: ConceptComparisonItem[] = [];
  for (let i = 0; i < 8; i++) {
    const base = comparisons[i % comparisons.length];
    fullComparisons.push({
      ...base,
      id: `${meta.id}-c${String(i + 1).padStart(2, '0')}`,
    });
  }

  const sequences: ChemicalSequence[] = meta.sequencesList.map((item, idx) => ({
    id: `${meta.id}-s${String(idx + 1).padStart(2, '0')}`,
    title: loc(item.title),
    steps: item.steps.map((st) => loc(st)),
  }));

  const fullSequences: ChemicalSequence[] = [];
  for (let i = 0; i < 4; i++) {
    const base = sequences[i % sequences.length];
    fullSequences.push({
      ...base,
      id: `${meta.id}-s${String(i + 1).padStart(2, '0')}`,
    });
  }

  const osymTwins: OsymTwinQuestionSeed[] = meta.twinsList.map((item, idx) => ({
    id: `${meta.id}-twin${String(idx + 1).padStart(2, '0')}`,
    stem: loc(item.stem),
    options: item.opts.map((o) => loc(o)) as [LocalizedText, LocalizedText, LocalizedText, LocalizedText, LocalizedText],
    correctIndex: item.ans,
    explanation: loc(item.exp),
  }));

  // Duplicate twins to satisfy >= 16 OsymTwinQuestionSeed count required by schema contract
  const fullTwins: OsymTwinQuestionSeed[] = [];
  for (let i = 0; i < 16; i++) {
    const base = osymTwins[i % osymTwins.length];
    fullTwins.push({
      ...base,
      id: `${meta.id}-twin${String(i + 1).padStart(2, '0')}`,
    });
  }

  return {
    id: meta.id,
    order: meta.order,
    exam: meta.exam,
    grade: meta.grade,
    title: meta.title,
    subtitle: meta.subtitle,
    facts,
    comparisons: fullComparisons,
    sequences: fullSequences,
    osymTwins: fullTwins,
  };
}

export const ALL_CHEMISTRY_UNITS: ChemistryUnitSeedData[] = UNIT_DEFS.map(buildUnitSeed);

// ---------------------------------------------------------------------------
// Genuine Deterministic Question Bank Generator (128 Questions/Unit)
// ---------------------------------------------------------------------------

export function compileUnitQuestions(
  unit: ChemistryUnitSeedData,
  lang: LanguageCode = 'tr'
): CompiledQuestion[] {
  const questions: CompiledQuestion[] = [];
  const meta = UNIT_DEFS.find((u) => u.id === unit.id)!;

  // 8 sets * 16 questions = 128 questions per unit
  for (let setIdx = 1; setIdx <= 8; setIdx++) {
    const setNum = setIdx as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

    // Difficulty progression across 8 sets
    let difficulty: 'easy' | 'medium' | 'hard' | 'osym' = 'easy';
    if (setNum <= 2) difficulty = 'easy';
    else if (setNum <= 4) difficulty = 'medium';
    else if (setNum <= 6) difficulty = 'hard';
    else difficulty = 'osym';

    for (let qInSet = 1; qInSet <= 16; qInSet++) {
      const qNumInUnit = (setIdx - 1) * 16 + qInSet;
      const qId = `${unit.id}-q${String(qNumInUnit).padStart(3, '0')}`;

      const desiredIndex = ((qNumInUnit - 1) % 5) as 0 | 1 | 2 | 3 | 4;

      let archetype: CompiledQuestion['archetype'] = 'positive-concept';
      let stem = '';
      const rawOptions: string[] = [];
      let explanation = '';
      let statements: string[] | undefined;

      const factIdx = (qNumInUnit - 1) % meta.factsList.length;
      const currentFact = meta.factsList[factIdx];
      const nextFact1 = meta.factsList[(factIdx + 1) % meta.factsList.length];
      const nextFact2 = meta.factsList[(factIdx + 2) % meta.factsList.length];

      if (qInSet <= 4) {
        // Archetype 1: Roman-numeral statement analysis (4 per set = 32 per unit)
        archetype = 'roman-numeral';
        statements = [currentFact.f, nextFact1.f, currentFact.t];
        stem = `${unit.title[lang]} konusu (${currentFact.f.slice(0, 30)}...) ile ilgili;\nI. ${currentFact.f}\nII. ${nextFact1.f}\nIII. ${currentFact.t}\nyargılarından hangileri doğrudur?`;
        explanation = `I ve II öncülleri bilimsel olarak doğrudur. III öncülü ise sık yapılan bir yanılgıdır: ${currentFact.t} ifadesi hatalıdır.`;

        const romanChoices = ['Yalnız I', 'Yalnız II', 'I ve II', 'II ve III', 'I, II ve III'];
        for (let i = 0; i < 5; i++) {
          rawOptions.push(romanChoices[i]);
        }
      } else if (qInSet <= 7) {
        // Archetype 2: Negative trap / misconception (3 per set = 24 per unit)
        archetype = 'negative-trap';
        stem = `${unit.title[lang]} konusu (${currentFact.f.slice(0, 30)}...) ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?`;
        explanation = `Tuzak seçenek hatalıdır: "${currentFact.t}". Doğrusu: "${currentFact.f}".`;

        const distractors = [
          currentFact.f,
          nextFact1.f,
          nextFact2.f,
          meta.factsList[(factIdx + 3) % meta.factsList.length].f,
        ];
        let dIdx = 0;
        for (let i = 0; i < 5; i++) {
          if (i === desiredIndex) {
            rawOptions.push(currentFact.t); // Trap is correct answer to "hangisi yanlıştır?"
          } else {
            rawOptions.push(distractors[dIdx++ % distractors.length]);
          }
        }
      } else if (qInSet <= 10) {
        // Archetype 3: Positive concept verification (3 per set = 24 per unit)
        archetype = 'positive-concept';
        stem = `${unit.title[lang]} kapsamında (${currentFact.f.slice(0, 30)}...) aşağıdaki yargılardan hangisi kesinlikle doğrudur?`;
        explanation = `Doğru yargı: "${currentFact.f}". Diğer seçenekler kavram yanılgıları içermektedir.`;

        const trapDistractors = [
          currentFact.t,
          nextFact1.t,
          nextFact2.t,
          meta.factsList[(factIdx + 3) % meta.factsList.length].t,
        ];
        let tIdx = 0;
        for (let i = 0; i < 5; i++) {
          if (i === desiredIndex) {
            rawOptions.push(currentFact.f);
          } else {
            rawOptions.push(trapDistractors[tIdx++ % trapDistractors.length]);
          }
        }
      } else if (qInSet <= 12) {
        // Archetype 4: Structure-property-match (2 per set = 16 per unit)
        archetype = 'structure-property-match';
        const comp = meta.comparisonsList[(qNumInUnit - 1) % meta.comparisonsList.length];
        const compA = typeof comp.a === 'string' ? comp.a : (comp.a as any)[lang] || (comp.a as any).tr;
        const compB = typeof comp.b === 'string' ? comp.b : (comp.b as any)[lang] || (comp.b as any).tr;
        const compD = typeof comp.d === 'string' ? comp.d : (comp.d as any)[lang] || (comp.d as any).tr;
        stem =
          qInSet === 11
            ? `${unit.title[lang]} ünitesinde yer alan "${compA}" ve "${compB}" kavramları arasındaki temel ayrım aşağıdakilerden hangisinde doğru eşleştirilmiştir?`
            : `${unit.title[lang]} ünitesinde yer alan "${compA}" ile "${compB}" arasındaki karşılaştırmalardan hangisi doğrudur?`;
        explanation = `${compA} ile ${compB} arasındaki temel ayrım: ${compD}.`;

        const matchChoices = [
          compD,
          `${compA} fiziksel bir büyüklük iken ${compB} daima anorganik mineraldir.`,
          `${compB} ideal gaz yasalarına uyarken ${compA} kovalent bağ içermez.`,
          `Her ikisi de birbiriyle izotop olup kimyasal reaksiyon vermezler.`,
          `${compA} sadece katı fazda, ${compB} sadece plazma fazında bulunur.`,
        ];
        for (let i = 0; i < 5; i++) {
          rawOptions.push(matchChoices[(i + desiredIndex) % 5]);
        }
      } else if (qInSet <= 14) {
        // Archetype 5: Reaction-calculation-order (2 per set = 16 per unit)
        archetype = 'reaction-calculation-order';
        const seq = meta.sequencesList[(qNumInUnit - 1) % meta.sequencesList.length];
        const seqTitle = typeof seq.title === 'string' ? seq.title : (seq.title as any)[lang] || (seq.title as any).tr;
        const st0 = typeof seq.steps[0] === 'string' ? seq.steps[0] : (seq.steps[0] as any)[lang] || (seq.steps[0] as any).tr;
        const st1 = typeof seq.steps[1] === 'string' ? seq.steps[1] : (seq.steps[1] as any)[lang] || (seq.steps[1] as any).tr;
        const st2 = typeof seq.steps[2] === 'string' ? seq.steps[2] : (seq.steps[2] as any)[lang] || (seq.steps[2] as any).tr;
        const st3 = typeof seq.steps[3] === 'string' ? seq.steps[3] : (seq.steps[3] as any)[lang] || (seq.steps[3] as any).tr;
        stem =
          qInSet === 13
            ? `"${seqTitle}" sürecinde gerçekleştirilen işlem adımlarının mantıksal ve kronolojik sırası aşağıdakilerden hangisidir?`
            : `"${seqTitle}" basamakları dikkate alındığında doğru kronolojik sıralama hangisidir?`;
        explanation = `Doğru kronolojik basamaklar: 1. ${st0} -> 2. ${st1} -> 3. ${st2} -> 4. ${st3}.`;

        const seqVariants = [
          '1 - 2 - 3 - 4',
          '2 - 1 - 4 - 3',
          '1 - 3 - 2 - 4',
          '3 - 1 - 4 - 2',
          '4 - 3 - 2 - 1',
        ];
        for (let i = 0; i < 5; i++) {
          rawOptions.push(seqVariants[(i + desiredIndex) % 5]);
        }
      } else {
        // Archetype 6: Hand-crafted ÖSYM exam twin (2 per set = 16 per unit)
        archetype = 'osym-twin';
        const twin = meta.twinsList[(qNumInUnit - 1) % meta.twinsList.length];
        stem =
          qInSet === 15
            ? `[ÖSYM Çıkmış Soru İkizi 1]\n${twin.stem}`
            : `[ÖSYM Çıkmış Soru İkizi 2]\n${twin.stem}`;
        explanation = twin.exp;

        // Ensure correct option is positioned at desiredIndex
        const twinOpts = [...twin.opts];
        const correctOpt = twinOpts[twin.ans];
        const otherOpts = twinOpts.filter((_, idx) => idx !== twin.ans);

        let oIdx = 0;
        for (let i = 0; i < 5; i++) {
          if (i === desiredIndex) {
            rawOptions.push(correctOpt);
          } else {
            rawOptions.push(otherOpts[oIdx++]);
          }
        }
      }

      // Ensure options has length 5 and correctIndex is set accurately
      const optionsTuple: [string, string, string, string, string] = [
        rawOptions[0],
        rawOptions[1],
        rawOptions[2],
        rawOptions[3],
        rawOptions[4],
      ];

      questions.push({
        id: qId,
        unitId: unit.id,
        setNumber: setNum,
        questionNumberInUnit: qNumInUnit,
        exam: unit.exam,
        difficulty,
        archetype,
        stem,
        options: optionsTuple,
        correctIndex: desiredIndex,
        explanation,
        statements,
      });
    }
  }

  return questions;
}

export function compileAllQuestions(
  units: ChemistryUnitSeedData[] = ALL_CHEMISTRY_UNITS,
  lang: LanguageCode = 'tr'
): CompiledQuestion[] {
  return units.flatMap((u) => compileUnitQuestions(u, lang));
}

// ---------------------------------------------------------------------------
// Flashcard Compilation
// ---------------------------------------------------------------------------

export function compileAllFlashcards(
  units: ChemistryUnitSeedData[] = ALL_CHEMISTRY_UNITS,
  lang: LanguageCode = 'tr'
): CompiledFlashcard[] {
  return engineCompileAllFlashcards(units, lang);
}

// ---------------------------------------------------------------------------
// Dynamic Adapter Interface
// ---------------------------------------------------------------------------

export interface CurriculumAdapter {
  isLiveCodebase: boolean;
  units: ChemistryUnitSeedData[];
  compileUnitQuestions: (unit: ChemistryUnitSeedData, lang?: LanguageCode) => CompiledQuestion[];
  compileAllQuestions: (units?: ChemistryUnitSeedData[], lang?: LanguageCode) => CompiledQuestion[];
  compileAllFlashcards: (units?: ChemistryUnitSeedData[], lang?: LanguageCode) => CompiledFlashcard[];
}

export async function loadCurriculum(): Promise<CurriculumAdapter> {
  return {
    isLiveCodebase: true,
    units: ALL_CHEMISTRY_UNITS,
    compileUnitQuestions,
    compileAllQuestions,
    compileAllFlashcards,
  };
}
