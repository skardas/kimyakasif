import type {
  CompiledQuestion,
  LanguageCode,
  QuestionDiagramSpec,
  DiagramArchetypeId,
} from '../types/chemistry';
import type { ChemistryUnitSeedData } from '../data/units/types';

interface DiagramTemplate {
  archetype: DiagramArchetypeId;
  title: Record<LanguageCode, string>;
  caption: Record<LanguageCode, string>;
  labels: Record<LanguageCode, Record<string, string>>;
}

/**
 * 24 Unit Pairs of Scientific Diagrams (Primary for Slide 1 & Secondary for Slide 3)
 * Full 8-language localization for TR, EN, DE, FR, RU, AR, ZH, KU.
 */
const UNIT_DIAGRAM_TEMPLATES: Record<string, [DiagramTemplate, DiagramTemplate]> = {
  u01: [
    {
      archetype: 'lab-glassware-setup',
      title: {
        tr: 'Temel Laboratuvar Cam Malzemeleri',
        en: 'Basic Laboratory Glassware',
        de: 'Grundlegende Labor-Glasgeräte',
        fr: 'Verrerie de laboratoire de base',
        ru: 'Основная лабораторная посуда',
        ar: 'الأدوات الزجاجية المخبرية الأساسية',
        zh: '常用实验室玻璃仪器',
        ku: 'Amûrên Camî yên Bingehîn ên Laboratuvarê',
      },
      caption: {
        tr: 'Büret hassas hacimle sıvı eklemeye, erlenmayer çalkalayarak karıştırmaya, balon joje belirli hacimde çözelti hazırlamaya, ayırma hunisi birbirine karışmayan sıvıları ayırmaya yarar.',
        en: 'A burette delivers measured volumes, an Erlenmeyer flask is for swirling and mixing, a volumetric flask makes a solution of exact volume, and a separatory funnel separates immiscible liquids.',
        de: 'Präzise Volumenmessung und Lösungsvorbereitung mit Bürette, Erlenmeyerkolben und Messkolben.',
        fr: 'Mesure précise du volume et préparation de solutions avec burette, erlenmeyer et fiole jaugée.',
        ru: 'Точное измерение объёма и приготовление растворов с помощью бюретки и колб.',
        ar: 'قياس دقيق للحجم وتحضير المحاليل باستخدام السحاحة والدورق المعياري.',
        zh: '使用滴定管、锥形瓶和容量瓶进行精确体积测量与溶液配制。',
        ku: 'Pîvandina qebareya rast û amadekirina helawê bi buret, erlenmayer û balon jojeyê.',
      },
      labels: {
        tr: { item1: 'Büret', item2: 'Erlenmayer', item3: 'Balon joje', item4: 'Ayırma hunisi' },
        en: { item1: 'Burette', item2: 'Erlenmeyer flask', item3: 'Volumetric flask', item4: 'Separatory funnel' },
        de: { item1: 'Bürette', item2: 'Erlenmeyerkolben', item3: 'Messkolben', item4: 'Scheidetrichter' },
        fr: { item1: 'Burette', item2: 'Erlenmeyer', item3: 'Fiole jaugée', item4: 'Ampoule à décanter' },
        ru: { item1: 'Бюретка', item2: 'Колба Эрленмейера', item3: 'Мерная колба', item4: 'Делительная воронка' },
        ar: { item1: 'سحاحة', item2: 'دورق مخروطي', item3: 'دورق حجمي', item4: 'قمع فصل' },
        zh: { item1: '滴定管', item2: '锥形瓶', item3: '容量瓶', item4: '分液漏斗' },
        ku: { item1: 'Buret', item2: 'Erlenmayer', item3: 'Balon joje', item4: 'Huniya veqetandinê' },
      },
    },
    {
      archetype: 'lab-glassware-setup',
      title: {
        tr: 'Simyadan Kimyaya: Damıtma İmbiği',
        en: 'From Alchemy to Chemistry: the Alembic',
        de: 'Von der Alchemie zur Chemie: der Alembik',
        fr: 'De l’alchimie à la chimie : l’alambic',
        ru: 'От алхимии к химии: перегонный куб',
        ar: 'من الخيمياء إلى الكيمياء: الإنبيق',
        zh: '从炼金术到化学：蒸馏器',
        ku: 'Ji Sîmyayê ber bi Kîmyayê: Înbîq',
      },
      caption: {
        tr: 'İmbikte ısıtılan karışımın buharı başlıkta yoğuşur ve toplama kabına akar; Cabir bin Hayyan’a atfedilen bu düzenekle zaç yağı (H₂SO₄) ve kezzap (HNO₃) elde edilmiştir.',
        en: 'In an alembic the vapor of the heated mixture condenses in the head and runs into the receiver; with this apparatus, attributed to Jabir ibn Hayyan, sulfuric and nitric acids were prepared.',
        de: 'Destillationsapparat von Dschābir ibn Hayyān zur Gewinnung von Schwefelsäure und Salpetersäure.',
        fr: 'Appareil de distillation de Jabir ibn Hayyan pour la production d’acide sulfurique et nitrique.',
        ru: 'Дистилляционный аппарат Джабира ибн Хайяна для получения серной и азотной кислот.',
        ar: 'جهاز تقطير جابر بن حيان لإنتاج حمض الكبريتيك والنتريك.',
        zh: '贾比尔·伊本·哈扬利用蒸馏器提取硫酸与硝酸。',
        ku: 'Dizgeha înbiqê ya Cabir bîn Heyyan bo bidestxistina zaç yağı û kezzapê.',
      },
      labels: {
        tr: { top: 'Başlık: buhar yoğuşur', bottom: 'Ocak', left: 'Kazan: karışım', right: 'Toplama kabı: damıtık' },
        en: { top: 'Head: vapor condenses', bottom: 'Furnace', left: 'Cucurbit: mixture', right: 'Receiver: distillate' },
        de: { top: 'Helm: Dampf kondensiert', bottom: 'Ofen', left: 'Kolben: Gemisch', right: 'Vorlage: Destillat' },
        fr: { top: 'Chapiteau : la vapeur se condense', bottom: 'Fourneau', left: 'Cucurbite : mélange', right: 'Récipient : distillat' },
        ru: { top: 'Шлем: пар конденсируется', bottom: 'Печь', left: 'Куб: смесь', right: 'Приёмник: дистиллят' },
        ar: { top: 'الرأس: يتكاثف البخار', bottom: 'الموقد', left: 'القرعة: المزيج', right: 'إناء الاستقبال: القطارة' },
        zh: { top: '蒸馏头：蒸气冷凝', bottom: '炉', left: '蒸馏釜：混合物', right: '接收器：馏出液' },
        ku: { top: 'Serî: hilm şil dibe', bottom: 'Argûn', left: 'Qazan: tevlihevî', right: 'Firaxa berhevkirinê: distîlat' },
      },
    },
  ],
  u02: [
    {
      archetype: 'bohr-orbital-atom',
      title: {
        tr: 'Bohr Atom Modeli ve Yörüngeler',
        en: 'Bohr Atomic Model & Orbits',
        de: 'Bohr Atommodell & Bahnen',
        fr: 'Modèle atomique de Bohr et orbites',
        ru: 'Модель атома Бора и орбиты',
        ar: 'نموذج بور الذري والمدارات',
        zh: '波尔原子模型与轨道',
        ku: 'Modela Atomê ya Bohr û Xulgeh',
      },
      caption: {
        tr: 'Bohr modelinde elektron belirli enerji düzeylerinde (katmanlarda) bulunur; üst düzeyden alt düzeye inerken aradaki enerji farkını ışık (foton) olarak yayar.',
        en: 'In the Bohr model the electron occupies fixed energy levels (shells); when it falls to a lower level it emits the energy difference as light (a photon).',
        de: 'Konzentrische Schalen um den Kern mit Elektronenanregung und Photonenemission.',
        fr: 'Couches concentriques autour du noyau avec excitation électronique et émission de photon.',
        ru: 'Концентрические оболочки вокруг ядра с возбуждением электронов и излучением фотонов.',
        ar: 'طبقات دائرية حول النواة مع إثارة الإلكترونات وانبعاث الفوتونات.',
        zh: '核外同心能级层与电子跃迁光子辐射。',
        ku: 'Qatên xelekî yên li dora navikê û tîrêjdayîna fotonan bi hişyarbûna elektronan.',
      },
      labels: {
        tr: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: 'Foton yayılır: E = E₃ − E₂', nucleus: 'Çekirdek (+)' },
        en: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: 'Photon emitted: E = E₃ − E₂', nucleus: 'Nucleus (+)' },
        de: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: 'Photon wird emittiert: E = E₃ − E₂', nucleus: 'Atomkern (+)' },
        fr: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: 'Photon émis : E = E₃ − E₂', nucleus: 'Noyau (+)' },
        ru: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: 'Испускается фотон: E = E₃ − E₂', nucleus: 'Ядро (+)' },
        ar: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: 'ينبعث فوتون: E = E₃ − E₂', nucleus: 'النواة (+)' },
        zh: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: '发射光子：E = E₃ − E₂', nucleus: '原子核 (+)' },
        ku: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: 'Foton tê belavkirin: E = E₃ − E₂', nucleus: 'Navik (+)' },
      },
    },
    {
      archetype: 'periodic-table-trends',
      title: {
        tr: 'Periyodik Sistemde Özelliklerin Değişimi',
        en: 'Periodic Table Trends',
        de: 'Periodensystem Periodische Trends',
        fr: 'Tendances du tableau périodique',
        ru: 'Периодические свойства элементов',
        ar: 'تدرج الخواص في الجدول الدوري',
        zh: '元素周期律与周期趋势',
        ku: 'Guhertina Taybetmendiyan di Tabloya Periyodîk de',
      },
      caption: {
        tr: 'Genel eğilim: aynı periyotta soldan sağa atom yarıçapı küçülür, iyonlaşma enerjisi ve elektronegatiflik artar; aynı grupta yukarıdan aşağıya atom yarıçapı ve metalik özellik artar.',
        en: 'General trend: across a period atomic radius decreases while ionization energy and electronegativity increase; down a group atomic radius and metallic character increase.',
        de: 'Der Atomradius nimmt von links nach rechts ab; Ionisierungsenergie und Elektronegativität nehmen zu.',
        fr: 'Le rayon atomique diminue de gauche à droite ; l’énergie d’ionisation et l’électronégativité augmentent.',
        ru: 'Атомный радиус уменьшается слева направо; энергия ионизации и электроотрицательность растут.',
        ar: 'يقل نصف القطر الذري من اليسار إلى اليمين، وتزداد طاقة التأين والسالبية الكهربية.',
        zh: '同周期从左到右原子半径减小，第一电离能与电负性总体增加。',
        ku: 'Nîveşkêla atomê ji çepê ber bi rastê kêm dibe, enerjiya îyonîzasyonê û elektronegatîvî zêde dibe.',
      },
      labels: {
        tr: { radius: 'Atom yarıçapı artar', ie: 'İyonlaşma enerjisi artar', eneg: 'Elektronegatiflik artar', metallic: 'Metalik özellik artar' },
        en: { radius: 'Atomic radius increases', ie: 'Ionization energy increases', eneg: 'Electronegativity increases', metallic: 'Metallic character increases' },
        de: { radius: 'Atomradius nimmt zu', ie: 'Ionisierungsenergie nimmt zu', eneg: 'Elektronegativität nimmt zu', metallic: 'Metallcharakter nimmt zu' },
        fr: { radius: 'Le rayon atomique augmente', ie: 'L’énergie d’ionisation augmente', eneg: 'L’électronégativité augmente', metallic: 'Le caractère métallique augmente' },
        ru: { radius: 'Атомный радиус растёт', ie: 'Энергия ионизации растёт', eneg: 'Электроотрицательность растёт', metallic: 'Металлические свойства растут' },
        ar: { radius: 'يزداد نصف القطر الذري', ie: 'تزداد طاقة التأين', eneg: 'تزداد السالبية الكهربائية', metallic: 'تزداد الصفة الفلزية' },
        zh: { radius: '原子半径增大', ie: '电离能增大', eneg: '电负性增大', metallic: '金属性增强' },
        ku: { radius: 'Tîrêjnîva atomê zêde dibe', ie: 'Enerjiya îyonîzasyonê zêde dibe', eneg: 'Elektronegatîfî zêde dibe', metallic: 'Taybetiya metalî zêde dibe' },
      },
    },
  ],
  u03: [
    {
      archetype: 'vsepr-molecular-geometry',
      title: {
        tr: 'Kimyasal Bağlar ve Lewis Yapısı',
        en: 'Chemical Bonds and Lewis Dot Structures',
        de: 'Chemische Bindungen und Lewis-Strukturen',
        fr: 'Liaisons chimiques et structures de Lewis',
        ru: 'Химические связи и структуры Льюиса',
        ar: 'الروابط الكيميائية وتراكيب لويس',
        zh: '化学键与路易斯结构式',
        ku: 'Bendên Kîmyewî û Avahiya Lewis',
      },
      caption: {
        tr: 'İyonik bağda elektron aktarılır, kovalent bağda ortaklaşa kullanılır; polar moleküller arasında dipol–dipol etkileşimi, H’nin F, O veya N’ye bağlı olduğu moleküller arasında hidrojen bağı kurulur.',
        en: 'In an ionic bond an electron is transferred, in a covalent bond electrons are shared; polar molecules attract by dipole–dipole forces, and molecules with H bonded to F, O or N form hydrogen bonds.',
        de: 'Ionengitter / kovalentes Molekül und dipolare Wechselwirkungen.',
        fr: 'Réseau cristallin ionique / molécule covalente et dipôles.',
        ru: 'Ионная кристаллическая решётка против ковалентной молекулы и диполей.',
        ar: 'الشبكة البلورية الأيونية مقابل الجزيء التساهمي وتفاعلات ثنائي القطب.',
        zh: '离子晶体晶格与共价分子极性偶极相互作用。',
        ku: 'Torra krîstalî ya îyonî li hember molekula kovalant û danûstandina dîpolan.',
      },
      labels: {
        tr: { bond1: 'İyonik bağ: elektron aktarılır', bond2: 'Kovalent bağ: elektron ortaklaşılır', hbond: 'Hidrojen bağı (H ile F, O, N)', dipole: 'Dipol–dipol etkileşimi' },
        en: { bond1: 'Ionic bond: electron transferred', bond2: 'Covalent bond: electrons shared', hbond: 'Hydrogen bond (H with F, O, N)', dipole: 'Dipole–dipole attraction' },
        de: { bond1: 'Ionenbindung: Elektron wird übertragen', bond2: 'Kovalente Bindung: gemeinsames Elektronenpaar', hbond: 'Wasserstoffbrücke (H an F, O, N)', dipole: 'Dipol-Dipol-Wechselwirkung' },
        fr: { bond1: 'Liaison ionique : transfert d’électron', bond2: 'Liaison covalente : doublet partagé', hbond: 'Liaison hydrogène (H lié à F, O, N)', dipole: 'Interaction dipôle–dipôle' },
        ru: { bond1: 'Ионная связь: перенос электрона', bond2: 'Ковалентная связь: общая пара', hbond: 'Водородная связь (H при F, O, N)', dipole: 'Диполь-дипольное взаимодействие' },
        ar: { bond1: 'رابطة أيونية: انتقال إلكترون', bond2: 'رابطة تساهمية: مشاركة إلكترونات', hbond: 'رابطة هيدروجينية (H مع F, O, N)', dipole: 'تجاذب ثنائي القطب' },
        zh: { bond1: '离子键：电子转移', bond2: '共价键：共用电子对', hbond: '氢键（H 与 F、O、N）', dipole: '偶极—偶极作用' },
        ku: { bond1: 'Benda îyonî: elektron tê veguhastin', bond2: 'Benda kovalent: elektron tên parvekirin', hbond: 'Benda hîdrojenê (H bi F, O, N re)', dipole: 'Têkiliya dîpol–dîpol' },
      },
    },
    {
      archetype: 'vsepr-molecular-geometry',
      title: {
        tr: 'Hidrojen Bağı ve Su Anomalisi',
        en: 'Hydrogen Bonding and Water Anomaly',
        de: 'Wasserstoffbrückenbindung und Wasser-Anomalie',
        fr: 'Liaison hydrogène et anomalie de l’eau',
        ru: 'Водородные связи и аномалия воды',
        ar: 'الروابط الهيدروجينية وشذوذ الماء',
        zh: '氢键与水的反常物理性质',
        ku: 'Benda Hîdrojenê û Anomaliya Avê',
      },
      caption: {
        tr: 'Su molekülleri arasındaki hidrojen bağları suyun kaynama noktasını yükseltir; buzda moleküller düzenli ve boşluklu bir örgüde tutulduğu için buzun yoğunluğu sıvı sudan küçüktür.',
        en: 'Hydrogen bonds between water molecules raise its boiling point; in ice the molecules are held in an ordered, open lattice, so ice is less dense than liquid water.',
        de: 'Zwischenmolekulare Anziehung zwischen an FON gebundenem Wasserstoff und benachbarten freien Elektronenpaaren.',
        fr: 'Attraction intermoléculaire entre hydrogène lié à FON et doublets non liants voisins.',
        ru: 'Межмолекулярное притяжение водорода, связанного с FON, к неподелённым парам соседних атомов.',
        ar: 'تجاذب بين جزيئي يربط الهيدروجين المرتبط بـ FON بالأزواج الإلكترونية الحرة المجاورة.',
        zh: '连接在F、O、N上的氢原子与邻近孤对电子形成的分子间作用力。',
        ku: 'Kêşana navmolekûlî ya di navbera hîdrojena bi FONê ve girêdayî û cotên elektronan yên cîran de.',
      },
      labels: {
        tr: { doner: 'H verici (O–H)', acceptor: 'H alıcı (O üzerindeki e⁻ çifti)', bp: 'Hidrojen bağı kaynama noktasını yükseltir', ice: 'Buz: altıgen, boşluklu örgü' },
        en: { doner: 'H donor (O–H)', acceptor: 'H acceptor (lone pair on O)', bp: 'Hydrogen bonding raises the boiling point', ice: 'Ice: open hexagonal lattice' },
        de: { doner: 'H-Donor (O–H)', acceptor: 'H-Akzeptor (freies Paar am O)', bp: 'Wasserstoffbrücken erhöhen den Siedepunkt', ice: 'Eis: offenes hexagonales Gitter' },
        fr: { doner: 'Donneur de H (O–H)', acceptor: 'Accepteur de H (doublet libre de O)', bp: 'La liaison hydrogène élève le point d’ébullition', ice: 'Glace : réseau hexagonal ouvert' },
        ru: { doner: 'Донор H (O–H)', acceptor: 'Акцептор H (пара электронов O)', bp: 'Водородные связи повышают температуру кипения', ice: 'Лёд: рыхлая гексагональная решётка' },
        ar: { doner: 'مانح H (O–H)', acceptor: 'مستقبل H (زوج حر على O)', bp: 'الرابطة الهيدروجينية ترفع درجة الغليان', ice: 'الجليد: شبكة سداسية مفتوحة' },
        zh: { doner: '氢供体 (O–H)', acceptor: '氢受体（O 上的孤对电子）', bp: '氢键使沸点升高', ice: '冰：开放的六方晶格' },
        ku: { doner: 'H-bexşîner (O–H)', acceptor: 'H-wergir (cota e⁻ ya li ser O)', bp: 'Benda hîdrojenê xala kelînê bilind dike', ice: 'Qeşa: tora şeşgoşeyî ya vala' },
      },
    },
  ],
  u04: [
    {
      archetype: 'phase-heating-curve',
      title: {
        tr: 'Maddenin Hâlleri ve Isınma Eğrisi',
        en: 'States of Matter and Heating Curve',
        de: 'Aggregatzustände und Erwärmungskurve',
        fr: 'États de la matière et courbe de réchauffement',
        ru: 'Агрегатные состояния и кривая нагревания',
        ar: 'حالات المادة ومنحنى التسخين',
        zh: '物质状态与加热升温曲线',
        ku: 'Rewşên Madeyê û Xêza Germbûnê',
      },
      caption: {
        tr: '1 atm basınçta suyun ısınma eğrisi: sıcaklık yalnızca tek hâlin bulunduğu bölgelerde artar, erime (0 °C) ve kaynama (100 °C) sırasında sabit kalır.',
        en: 'Heating curve of water at 1 atm: the temperature rises only where a single phase is present and stays constant during melting (0 °C) and boiling (100 °C).',
        de: 'Fest-, Flüssig- und Gasphasen mit Temperaturplateaus beim Schmelzen und Sieden.',
        fr: 'Phases solide, liquide et gaz avec paliers de température à fusion et ébullition.',
        ru: 'Твёрдая, жидкая и газовая фазы с изотермическими плато при плавлении и кипении.',
        ar: 'المناطق الصلبة والسائلة والغازية مع ثبوت درجة الحرارة أثناء الانصهار والغليان.',
        zh: '固态、液态与气态相变过程中的等温相变平台。',
        ku: 'Qonaxên req, şil û gaz bi germiya sabît li ser xalên helîn û kelînê.',
      },
      labels: {
        tr: { solid: 'Katı', melt: 'Erime (katı + sıvı)', liquid: 'Sıvı', boil: 'Kaynama (sıvı + gaz)', gas: 'Gaz' },
        en: { solid: 'Solid', melt: 'Melting (solid + liquid)', liquid: 'Liquid', boil: 'Boiling (liquid + gas)', gas: 'Gas' },
        de: { solid: 'Fest', melt: 'Schmelzen (fest + flüssig)', liquid: 'Flüssig', boil: 'Sieden (flüssig + Gas)', gas: 'Gas' },
        fr: { solid: 'Solide', melt: 'Fusion (solide + liquide)', liquid: 'Liquide', boil: 'Ébullition (liquide + gaz)', gas: 'Gaz' },
        ru: { solid: 'Твёрдое', melt: 'Плавление (тв. + жидк.)', liquid: 'Жидкость', boil: 'Кипение (жидк. + газ)', gas: 'Газ' },
        ar: { solid: 'صلب', melt: 'انصهار (صلب + سائل)', liquid: 'سائل', boil: 'غليان (سائل + غاز)', gas: 'غاز' },
        zh: { solid: '固态', melt: '熔化（固 + 液）', liquid: '液态', boil: '沸腾（液 + 气）', gas: '气态' },
        ku: { solid: 'Hişk', melt: 'Helîn (hişk + şile)', liquid: 'Şile', boil: 'Kelîn (şile + gaz)', gas: 'Gaz' },
      },
    },
    {
      archetype: 'phase-heating-curve',
      title: {
        tr: 'Buhar Basıncı ve Kaynama Noktası',
        en: 'Vapor Pressure and Boiling Point',
        de: 'Dampfdruck und Siedepunkt',
        fr: 'Pression de vapeur et point d’ébullition',
        ru: 'Давление пара и температура кипения',
        ar: 'ضغط البخار ودرجة الغليان',
        zh: '蒸气压与沸点',
        ku: 'Zexta Hilmê û Xala Kelînê',
      },
      caption: {
        tr: 'Sıcaklık arttıkça sıvının buhar basıncı artar; buhar basıncı dış basınca eşit olduğunda sıvı kaynar. Aynı sıcaklıkta buhar basıncı yüksek olan sıvının kaynama noktası düşüktür.',
        en: 'The vapor pressure of a liquid rises with temperature; the liquid boils when it equals the external pressure. At a given temperature the liquid with the higher vapor pressure has the lower boiling point.',
        de: 'Sieden tritt ein, wenn der Dampfdruck dem äußeren Luftdruck entspricht.',
        fr: 'L’ébullition commence dès que la pression de vapeur égale la pression externe.',
        ru: 'Кипение начинается, когда давление насыщенного пара сравнивается с внешним давлением.',
        ar: 'يبدأ الغليان عندما يتساوى ضغط البخار مع الضغط الجوي الخارجي.',
        zh: '当液体饱和蒸气压等于外界大气压时液体开始剧烈沸腾。',
        ku: 'Dema zexta hilmê bi zexta derve re yeksan bibe kelîn dest pê dike.',
      },
      labels: {
        tr: { pvap: 'Buhar basıncı', pext: 'Dış basınç 1 atm: buhar basıncı buna eşitlenince sıvı kaynar', tb: 'Kaynama noktaları', visc: 'Sıcaklık artınca viskozite azalır' },
        en: { pvap: 'Vapor pressure', pext: 'External pressure 1 atm: the liquid boils when its vapor pressure reaches it', tb: 'Boiling points', visc: 'Viscosity falls as temperature rises' },
        de: { pvap: 'Dampfdruck', pext: 'Außendruck 1 atm: Erreicht der Dampfdruck ihn, siedet die Flüssigkeit', tb: 'Siedepunkte', visc: 'Die Viskosität sinkt mit steigender Temperatur' },
        fr: { pvap: 'Pression de vapeur', pext: 'Pression extérieure 1 atm : le liquide bout quand sa pression de vapeur l’atteint', tb: 'Points d’ébullition', visc: 'La viscosité diminue quand la température augmente' },
        ru: { pvap: 'Давление пара', pext: 'Внешнее давление 1 атм: жидкость кипит, когда давление пара достигает его', tb: 'Точки кипения', visc: 'С ростом температуры вязкость уменьшается' },
        ar: { pvap: 'ضغط البخار', pext: 'الضغط الخارجي 1 atm: يغلي السائل عندما يساويه ضغط بخاره', tb: 'درجات الغليان', visc: 'تقل اللزوجة بارتفاع درجة الحرارة' },
        zh: { pvap: '蒸气压', pext: '外压 1 atm：蒸气压与之相等时液体沸腾', tb: '沸点', visc: '温度升高，粘度减小' },
        ku: { pvap: 'Zexta hilmê', pext: 'Zexta derve 1 atm: dema zexta hilmê bigihîje wê, şile dikele', tb: 'Xalên kelînê', visc: 'Bi bilindbûna germahiyê vîskozîte kêm dibe' },
      },
    },
  ],
  u05: [
    {
      archetype: 'lab-glassware-setup',
      title: {
        tr: 'Su Sertliği ve Arıtım Döngüsü',
        en: 'Water Hardness & Treatment Cycle',
        de: 'Wasserhärte & Aufbereitungszyklus',
        fr: 'Dureté de l’eau et traitement',
        ru: 'Жёсткость воды и цикл очистки',
        ar: 'عسر الماء ودورة المعالجة',
        zh: '水质硬度与软化处理循环',
        ku: 'Hişkiya Avê û Çerxa Parzûnkirinê',
      },
      caption: {
        tr: 'Sert su Ca²⁺ ve Mg²⁺ iyonları içerir. Bikarbonat kaynaklı geçici sertlik kaynatılarak, kalıcı sertlik iyon değiştirici reçineyle giderilir.',
        en: 'Hard water contains Ca²⁺ and Mg²⁺ ions. Temporary (bicarbonate) hardness is removed by boiling, permanent hardness with an ion-exchange resin.',
        de: 'Beseitigung vorübergehender Härte durch Kochen und bleibender Härte über Ionenaustauscher.',
        fr: 'Élimination de la dureté temporaire par ébullition et permanente par résines échangeuses d’ions.',
        ru: 'Устранение временной жёсткости кипячением, а постоянной — ионообменными смолами.',
        ar: 'إزالة العسر المؤقت بالغليان، والعسر الدائم بواسطة راتنجات التبادل الأيوني.',
        zh: '煮沸去除碳酸氢钙镁暂时硬度，离子交换树脂去除硫酸盐永久硬度。',
        ku: 'Rakirina hişkiya demkî bi kelandinê û ya domdar bi rezînên guhêrbarên îyonî.',
      },
      labels: {
        tr: { ion1: 'Sert su: Ca²⁺ ve Mg²⁺ iyonları', boil: 'Geçici sertlik: kaynatma', resin: 'Kalıcı sertlik: iyon değiştirici reçine', pure: 'Sonuç: yumuşak su' },
        en: { ion1: 'Hard water: Ca²⁺ and Mg²⁺ ions', boil: 'Temporary hardness: boiling', resin: 'Permanent hardness: ion-exchange resin', pure: 'Result: soft water' },
        de: { ion1: 'Hartes Wasser: Ca²⁺- und Mg²⁺-Ionen', boil: 'Temporäre Härte: Abkochen', resin: 'Permanente Härte: Ionenaustauscherharz', pure: 'Ergebnis: weiches Wasser' },
        fr: { ion1: 'Eau dure : ions Ca²⁺ et Mg²⁺', boil: 'Dureté temporaire : ébullition', resin: 'Dureté permanente : résine échangeuse d’ions', pure: 'Résultat : eau douce' },
        ru: { ion1: 'Жёсткая вода: ионы Ca²⁺ и Mg²⁺', boil: 'Временная жёсткость: кипячение', resin: 'Постоянная жёсткость: ионообменная смола', pure: 'Результат: мягкая вода' },
        ar: { ion1: 'ماء عسر: أيونات Ca²⁺ و Mg²⁺', boil: 'العسر المؤقت: الغلي', resin: 'العسر الدائم: راتنج التبادل الأيوني', pure: 'النتيجة: ماء يسر' },
        zh: { ion1: '硬水：Ca²⁺ 和 Mg²⁺ 离子', boil: '暂时硬度：煮沸', resin: '永久硬度：离子交换树脂', pure: '结果：软水' },
        ku: { ion1: 'Ava hişk: îyonên Ca²⁺ û Mg²⁺', boil: 'Hişkiya demkî: kelandin', resin: 'Hişkiya mayînde: reçîneya îyon-guhêr', pure: 'Encam: ava nerm' },
      },
    },
    {
      archetype: 'lab-glassware-setup',
      title: {
        tr: 'Sera Gazları ve Asit Yağmurları',
        en: 'Greenhouse Gases and Acid Rain Formation',
        de: 'Treibhausgase und saurer Regen',
        fr: 'Gaz à effet de serre et pluies acides',
        ru: 'Парниковые газы и кислотные дожди',
        ar: 'غازات الاحتباس الحراري والأمطار الحمضية',
        zh: '温室气体效应与酸雨形成机理',
        ku: 'Gazên Serayê û Barana Asîdî',
      },
      caption: {
        tr: 'CO₂ ve CH₄ gibi sera gazları yeryüzünden yayılan ısıyı tutar. Fosil yakıtlardan çıkan SO₂ ve NO₂ ise atmosferde H₂SO₄ ve HNO₃’e dönüşerek asit yağmuruna yol açar.',
        en: 'Greenhouse gases such as CO₂ and CH₄ trap the heat radiated by the Earth. SO₂ and NO₂ from fossil fuels turn into H₂SO₄ and HNO₃ in the atmosphere and cause acid rain.',
        de: 'Umwandlung fossiler Abgase (SO₂, NO₂) in der Atmosphäre zu Schwefel- und Salpetersäure.',
        fr: 'Transformation atmosphérique des émissions de SO₂ et NO₂ en acides sulfurique et nitrique.',
        ru: 'Превращение промышленных выбросов (SO₂, NO₂) в атмосфере в серную и азотную кислоты.',
        ar: 'تحول غازات الوقود الأحفوري (SO₂, NO₂) في الغلاف الجوي إلى حمض الكبريتيك والنتريك.',
        zh: '化石燃烧排放物 (SO₂, NO₂) 在大气中水合转化为硫酸与硝酸酸雨。',
        ku: 'Veguhertina gazên sotemeniya fosîlî di atmosferê de ber bi asîdên H₂SO₄ û HNO₃.',
      },
      labels: {
        tr: { so2: 'SO₂ → SO₃ → H₂SO₄', no2: 'NO₂ → HNO₃', rain: 'Asit yağmuru: pH < 5,6', co2: 'Sera etkisi: CO₂ ve CH₄ ısıyı tutar' },
        en: { so2: 'SO₂ → SO₃ → H₂SO₄', no2: 'NO₂ → HNO₃', rain: 'Acid rain: pH < 5.6', co2: 'Greenhouse effect: CO₂ and CH₄ trap heat' },
        de: { so2: 'SO₂ → SO₃ → H₂SO₄', no2: 'NO₂ → HNO₃', rain: 'Saurer Regen: pH < 5,6', co2: 'Treibhauseffekt: CO₂ und CH₄ halten Wärme zurück' },
        fr: { so2: 'SO₂ → SO₃ → H₂SO₄', no2: 'NO₂ → HNO₃', rain: 'Pluie acide : pH < 5,6', co2: 'Effet de serre : CO₂ et CH₄ retiennent la chaleur' },
        ru: { so2: 'SO₂ → SO₃ → H₂SO₄', no2: 'NO₂ → HNO₃', rain: 'Кислотный дождь: pH < 5,6', co2: 'Парниковый эффект: CO₂ и CH₄ удерживают тепло' },
        ar: { so2: 'SO₂ → SO₃ → H₂SO₄', no2: 'NO₂ → HNO₃', rain: 'مطر حمضي: pH < 5.6', co2: 'الاحتباس الحراري: CO₂ و CH₄ يحبسان الحرارة' },
        zh: { so2: 'SO₂ → SO₃ → H₂SO₄', no2: 'NO₂ → HNO₃', rain: '酸雨：pH < 5.6', co2: '温室效应：CO₂ 和 CH₄ 留住热量' },
        ku: { so2: 'SO₂ → SO₃ → H₂SO₄', no2: 'NO₂ → HNO₃', rain: 'Barana asîdî: pH < 5,6', co2: 'Bandora serayê: CO₂ û CH₄ germê digirin' },
      },
    },
  ],
  u06: [
    {
      archetype: 'gas-piston-manometer',
      title: {
        tr: 'Kimyanın Temel Kanunları ve Kütle Dengesi',
        en: 'Fundamental Laws & Mass Conservation',
        de: 'Grundgesetze und Massenerhaltung',
        fr: 'Lois fondamentales et conservation de la masse',
        ru: 'Основные законы и сохранение массы',
        ar: 'القوانين الأساسية وحفظ الكتلة',
        zh: '化学基本定律与质量守恒天平',
        ku: 'Zagonên Bingehîn û Hevsengiya Komê',
      },
      caption: {
        tr: 'Kimyasal tepkimede atomlar yok olmaz, yeniden düzenlenir: girenlerin toplam kütlesi ürünlerin toplam kütlesine eşittir ve bir bileşikteki elementlerin kütle oranı sabittir.',
        en: 'Atoms are rearranged, not destroyed, in a chemical reaction: the total mass of the reactants equals that of the products, and the elements of a compound combine in a fixed mass ratio.',
        de: 'In einem geschlossenen System entspricht die Masse der Reaktanten der Masse der Produkte.',
        fr: 'Dans un système clos, la masse totale des réactifs est rigoureusement égale à celle des produits.',
        ru: 'В закрытой системе масса вступивших в реакцию веществ равна массе продуктов.',
        ar: 'في النظام المغلق، تتساوى كتلة المواد المتفاعلة تماماً مع كتلة المواد الناتجة.',
        zh: '密闭反应体系中反应物的总质量严格等于生成物的总质量。',
        ku: 'Di sîstema girtî de koma giştî ya keresteyên dikevin bertekê yeksanî ya berheman e.',
      },
      labels: {
        tr: { mreact: 'Girenlerin kütlesi: 36 g', mprod: 'Ürünlerin kütlesi: 36 g', balance: 'Kütlenin korunumu (Lavoisier): toplam kütle değişmez', ratio: 'Sabit oranlar (Proust): m(H) / m(O) = 1 / 8' },
        en: { mreact: 'Mass of reactants: 36 g', mprod: 'Mass of products: 36 g', balance: 'Conservation of mass (Lavoisier): total mass is unchanged', ratio: 'Definite proportions (Proust): m(H) / m(O) = 1 / 8' },
        de: { mreact: 'Masse der Edukte: 36 g', mprod: 'Masse der Produkte: 36 g', balance: 'Massenerhaltung (Lavoisier): Gesamtmasse bleibt gleich', ratio: 'Konstante Proportionen (Proust): m(H) / m(O) = 1 / 8' },
        fr: { mreact: 'Masse des réactifs : 36 g', mprod: 'Masse des produits : 36 g', balance: 'Conservation de la masse (Lavoisier) : masse totale inchangée', ratio: 'Proportions définies (Proust) : m(H) / m(O) = 1 / 8' },
        ru: { mreact: 'Масса реагентов: 36 г', mprod: 'Масса продуктов: 36 г', balance: 'Сохранение массы (Лавуазье): общая масса не меняется', ratio: 'Постоянство состава (Пруст): m(H) / m(O) = 1 / 8' },
        ar: { mreact: 'كتلة المتفاعلات: 36 g', mprod: 'كتلة النواتج: 36 g', balance: 'حفظ الكتلة (لافوازييه): الكتلة الكلية لا تتغير', ratio: 'النسب الثابتة (بروست): m(H) / m(O) = 1 / 8' },
        zh: { mreact: '反应物质量：36 g', mprod: '生成物质量：36 g', balance: '质量守恒（拉瓦锡）：总质量不变', ratio: '定比定律（普鲁斯特）：m(H) / m(O) = 1 / 8' },
        ku: { mreact: 'Girseya reaktantan: 36 g', mprod: 'Girseya berheman: 36 g', balance: 'Parastina girseyê (Lavoisier): girseya giştî naguhere', ratio: 'Rêjeyên sabît (Proust): m(H) / m(O) = 1 / 8' },
      },
    },
    {
      archetype: 'gas-piston-manometer',
      title: {
        tr: 'Mol Kavramı ve Avogadro Dönüşümü',
        en: 'The Mole Concept and Avogadro Relations',
        de: 'Molbegriff und Avogadro-Zusammenhänge',
        fr: 'Concept de mole et relations d’Avogadro',
        ru: 'Понятие моля и постоянная Авогадро',
        ar: 'مفهوم المول وعلاقات أفوجادرو',
        zh: '摩尔概念与阿伏伽德罗常数转化',
        ku: 'Têgeha Molê û Veguherîna Avogadro',
      },
      caption: {
        tr: 'Mol; kütle, tanecik sayısı ve gaz hacmi arasındaki köprüdür: n = m / MA = N / Nₐ = V / 22,4 (gaz, normal koşullar).',
        en: 'The mole links mass, number of particles and gas volume: n = m / M = N / Nₐ = V / 22.4 (gas at 0 °C and 1 atm).',
        de: 'Molrechnung zur Verknüpfung von Gramm, Teilchenzahl und Normgasvolumen (22,4 L).',
        fr: 'Calculs de moles liant masse en grammes, nombre d’entités et volume molaire gazeux (22,4 L).',
        ru: 'Расчёт молей: связь массы в граммах, числа частиц и объёма газа при н.у. (22,4 л).',
        ar: 'حسابات المول: n = m/MA = N/NA = V/22.4 لتر في الظروف القياسية.',
        zh: '摩尔公式关系网络：n = m/MA = N/NA = V/22.4L（标准状况下）。',
        ku: 'Hesabên molê: n = m/MA = N/NA = V/22,4 L di mercên asayî de.',
      },
      labels: {
        tr: { mol: '1 mol = 6,02 × 10²³ tanecik (Nₐ)', na: 'Tanecik: N = n · Nₐ', vmol: 'Gaz hacmi (NK: 0 °C, 1 atm): V = n · 22,4 L', ma: 'Kütle: m = n · MA' },
        en: { mol: '1 mol = 6.02 × 10²³ particles (Nₐ)', na: 'Particles: N = n · Nₐ', vmol: 'Gas volume (0 °C, 1 atm): V = n · 22.4 L', ma: 'Mass: m = n · M' },
        de: { mol: '1 mol = 6,02 × 10²³ Teilchen (Nₐ)', na: 'Teilchen: N = n · Nₐ', vmol: 'Gasvolumen (0 °C, 1 atm): V = n · 22,4 L', ma: 'Masse: m = n · M' },
        fr: { mol: '1 mol = 6,02 × 10²³ entités (Nₐ)', na: 'Entités : N = n · Nₐ', vmol: 'Volume de gaz (0 °C, 1 atm) : V = n · 22,4 L', ma: 'Masse : m = n · M' },
        ru: { mol: '1 моль = 6,02 × 10²³ частиц (Nₐ)', na: 'Частицы: N = n · Nₐ', vmol: 'Объём газа (0 °C, 1 атм): V = n · 22,4 л', ma: 'Масса: m = n · M' },
        ar: { mol: '1 mol = 6.02 × 10²³ جسيم (Nₐ)', na: 'الجسيمات: N = n · Nₐ', vmol: 'حجم الغاز (0 °C, 1 atm): V = n · 22.4 L', ma: 'الكتلة: m = n · M' },
        zh: { mol: '1 mol = 6.02 × 10²³ 个粒子 (Nₐ)', na: '粒子数：N = n · Nₐ', vmol: '气体体积（0 °C, 1 atm）：V = n · 22.4 L', ma: '质量：m = n · M' },
        ku: { mol: '1 mol = 6,02 × 10²³ tanecik (Nₐ)', na: 'Tanecik: N = n · Nₐ', vmol: 'Qebareya gazê (0 °C, 1 atm): V = n · 22,4 L', ma: 'Girse: m = n · MA' },
      },
    },
  ],
  u07: [
    {
      archetype: 'potential-energy-reaction',
      title: {
        tr: 'Kimyasal Tepkimeler ve Sınırlayıcı Bileşen',
        en: 'Stoichiometry and Limiting Reactant',
        de: 'Stöchiometrie und limitierender Reaktant',
        fr: 'Stœchiométrie et réactif limitant',
        ru: 'Стехиометрия и лимитирующий реагент',
        ar: 'الحسابات الكيميائية والمتفاعل المحدد',
        zh: '化学计量学与极限限量反应物',
        ku: 'Hesabên Kîmyewî û Keresteya Sînordar',
      },
      caption: {
        tr: 'Tepkimede ilk tükenen madde sınırlayıcı bileşendir; oluşan ürün miktarını o belirler, diğer maddeden artan olur.',
        en: 'The reactant that runs out first is the limiting reactant; it fixes the amount of product, and some of the other reactant is left over.',
        de: 'Der zuerst verbrauchte Reaktant ist limitierend und bestimmt die theoretische Ausbeute.',
        fr: 'Le réactif consommé en premier est limitant et détermine le rendement théorique.',
        ru: 'Реагент, расходуемый первым, является лимитирующим и определяет теоретический выход.',
        ar: 'المتفاعل الذي ينفد أولاً هو المحدد للتفاعل ويحدد كمية الناتج النظري.',
        zh: '化学反应中首先完全消耗的物质为限量反应物，决定生成物的理论产率。',
        ku: 'Madeya ku berê diqede sînordar e û hejmara berhema dawî diyar dike.',
      },
      labels: {
        tr: { limit: 'Sınırlayıcı bileşen: H₂ (tamamen tükenir)', excess: 'Artan madde: 1 O₂ molekülü', yield: '% verim = (gerçek ürün / teorik ürün) × 100', comb: 'Yanma: 2H₂ + O₂ → 2H₂O' },
        en: { limit: 'Limiting reactant: H₂ (used up completely)', excess: 'In excess: 1 O₂ molecule', yield: '% yield = (actual / theoretical) × 100', comb: 'Combustion: 2H₂ + O₂ → 2H₂O' },
        de: { limit: 'Limitierender Stoff: H₂ (wird ganz verbraucht)', excess: 'Überschuss: 1 O₂-Molekül', yield: 'Ausbeute in % = (tatsächlich / theoretisch) × 100', comb: 'Verbrennung: 2H₂ + O₂ → 2H₂O' },
        fr: { limit: 'Réactif limitant : H₂ (entièrement consommé)', excess: 'En excès : 1 molécule de O₂', yield: 'Rendement % = (réel / théorique) × 100', comb: 'Combustion : 2H₂ + O₂ → 2H₂O' },
        ru: { limit: 'Лимитирующий реагент: H₂ (расходуется полностью)', excess: 'В избытке: 1 молекула O₂', yield: 'Выход, % = (практический / теоретический) × 100', comb: 'Горение: 2H₂ + O₂ → 2H₂O' },
        ar: { limit: 'المادة المحدِّدة: H₂ (تُستهلك كليًّا)', excess: 'الفائض: جزيء O₂ واحد', yield: 'المردود % = (الفعلي / النظري) × 100', comb: 'احتراق: 2H₂ + O₂ → 2H₂O' },
        zh: { limit: '限量反应物：H₂（完全消耗）', excess: '过量：1 个 O₂ 分子', yield: '产率 % =（实际 / 理论）× 100', comb: '燃烧：2H₂ + O₂ → 2H₂O' },
        ku: { limit: 'Pêkhateya sînorker: H₂ (bi temamî diqede)', excess: 'Zêde dimîne: 1 molekula O₂', yield: '% berhemdarî = (rastîn / teorîk) × 100', comb: 'Şewitîn: 2H₂ + O₂ → 2H₂O' },
      },
    },
    {
      archetype: 'potential-energy-reaction',
      title: {
        tr: 'Çözünme-Çökelme ve Net İyon Denklemi',
        en: 'Precipitation & Net Ionic Equation',
        de: 'Fällungsreaktion und Nettoionengleichung',
        fr: 'Précipitation et équation ionique nette',
        ru: 'Осаждение и ионные уравнения',
        ar: 'الترسيب والمعادلة الأيونية الصافية',
        zh: '沉淀溶解与净离子反应方程式',
        ku: 'Hilweşîn-Nişîn û Hevkêşeya Net a Îyonî',
      },
      caption: {
        tr: 'İki çözelti karıştırıldığında Ag⁺ ve Cl⁻ iyonları AgCl katısı olarak çöker; Na⁺ ve NO₃⁻ iyonları tepkimeye girmeden çözeltide kalır.',
        en: 'When the two solutions are mixed, Ag⁺ and Cl⁻ ions precipitate as solid AgCl, while Na⁺ and NO₃⁻ ions stay in solution unchanged.',
        de: 'Der ausfallende Feststoff bildet die Nettoionengleichung; Zuschauerionen bleiben gelöst.',
        fr: 'Le solide précipité constitue l’équation ionique nette tandis que les ions spectateurs restent dissous.',
        ru: 'Выпадающий осадок формирует чистое ионное уравнение, а ионы-зрители остаются в растворе.',
        ar: 'المادة الصلبة المترسبة تشكل المعادلة الأيونية الصافية بينما تبقى الأيونات المتفرجة ذائبة.',
        zh: '沉淀晶体决定净离子方程式，未参与反应的旁观离子游离于水溶液中。',
        ku: 'Madeya req a dikişe hevkêşeya net a îyonî pêk tîne, îyonên din temaşevan dimînin.',
      },
      labels: {
        tr: { ppt: 'Çökelek: AgCl(k)', spec1: 'Na⁺: seyirci iyon', spec2: 'NO₃⁻: seyirci iyon', net: 'Net iyon denklemi: Ag⁺(suda) + Cl⁻(suda) → AgCl(k)' },
        en: { ppt: 'Precipitate: AgCl(s)', spec1: 'Na⁺: spectator ion', spec2: 'NO₃⁻: spectator ion', net: 'Net ionic equation: Ag⁺(aq) + Cl⁻(aq) → AgCl(s)' },
        de: { ppt: 'Niederschlag: AgCl(s)', spec1: 'Na⁺: Zuschauer-Ion', spec2: 'NO₃⁻: Zuschauer-Ion', net: 'Netto-Ionengleichung: Ag⁺(aq) + Cl⁻(aq) → AgCl(s)' },
        fr: { ppt: 'Précipité : AgCl(s)', spec1: 'Na⁺ : ion spectateur', spec2: 'NO₃⁻ : ion spectateur', net: 'Équation ionique nette : Ag⁺(aq) + Cl⁻(aq) → AgCl(s)' },
        ru: { ppt: 'Осадок: AgCl↓', spec1: 'Na⁺: ион-наблюдатель', spec2: 'NO₃⁻: ион-наблюдатель', net: 'Сокращённое ионное уравнение: Ag⁺ + Cl⁻ → AgCl↓' },
        ar: { ppt: 'راسب: AgCl(s)', spec1: 'Na⁺: أيون متفرج', spec2: 'NO₃⁻: أيون متفرج', net: 'المعادلة الأيونية الصافية: Ag⁺(aq) + Cl⁻(aq) → AgCl(s)' },
        zh: { ppt: '沉淀：AgCl(s)', spec1: 'Na⁺：旁观离子', spec2: 'NO₃⁻：旁观离子', net: '净离子方程式：Ag⁺(aq) + Cl⁻(aq) → AgCl(s)' },
        ku: { ppt: 'Nişîn: AgCl', spec1: 'Na⁺: îyona temaşevan', spec2: 'NO₃⁻: îyona temaşevan', net: 'Hevkêşeya îyonî ya net: Ag⁺ + Cl⁻ → AgCl↓' },
      },
    },
  ],
  u08: [
    {
      archetype: 'lab-glassware-setup',
      title: {
        tr: 'Ayrımsal Damıtma ve Karışım Ayırma',
        en: 'Fractional Distillation & Separation',
        de: 'Fraktionierte Destillation und Gemischtrennung',
        fr: 'Distillation fractionnée et séparation',
        ru: 'Фракционная перегонка и разделение смесей',
        ar: 'التقطير التجزيئي وفصل المخاليط',
        zh: '分馏塔分馏与混合物高效分离',
        ku: 'Parzûnkirina Beşî û Veqetandina Tevliheviyan',
      },
      caption: {
        tr: 'Kaynama noktaları farklı, birbiri içinde çözünen sıvılar ayrımsal damıtmayla ayrılır: kaynama noktası düşük olan önce buharlaşır, soğutucuda yoğuşur ve toplama kabında birikir.',
        en: 'Miscible liquids with different boiling points are separated by fractional distillation: the lower-boiling liquid vaporizes first, condenses in the condenser and collects in the receiver.',
        de: 'Trennung mischbarer Flüssigkeiten mit unterschiedlichen Siedepunkten über eine Rektifikationskolonne.',
        fr: 'Séparation de liquides miscibles ayant des points d’ébullition différents grâce à une colonne de fractionnement.',
        ru: 'Разделение жидких смесей с близкими температурами кипения с помощью дефлегматора.',
        ar: 'فصل السوائل الممتزجة ذات درجات الغليان المتقاربة باستخدام عمود التجزئة.',
        zh: '利用分馏柱根据各组分沸点差异分离互溶液体混合物。',
        ku: 'Veqetandina şile-şile yên bi xalên kelînê yên cuda bi riya stûna fraksiyonê.',
      },
      labels: {
        tr: { col: 'Ayrımsal damıtma kolonu', cond: 'Soğutucu (Liebig)', vap1: 'Damıtık: etanol (KN 78 °C)', vap2: 'Balonda kalan: su (KN 100 °C)' },
        en: { col: 'Fractionating column', cond: 'Liebig condenser', vap1: 'Distillate: ethanol (b.p. 78 °C)', vap2: 'Left in the flask: water (b.p. 100 °C)' },
        de: { col: 'Fraktionierkolonne', cond: 'Liebigkühler', vap1: 'Destillat: Ethanol (Sdp. 78 °C)', vap2: 'Bleibt im Kolben: Wasser (Sdp. 100 °C)' },
        fr: { col: 'Colonne de fractionnement', cond: 'Réfrigérant de Liebig', vap1: 'Distillat : éthanol (Téb 78 °C)', vap2: 'Reste dans le ballon : eau (Téb 100 °C)' },
        ru: { col: 'Ректификационная колонка', cond: 'Холодильник Либиха', vap1: 'Дистиллят: этанол (Tкип 78 °C)', vap2: 'Остаётся в колбе: вода (Tкип 100 °C)' },
        ar: { col: 'عمود التجزئة', cond: 'مكثف ليبيغ', vap1: 'القطارة: إيثانول (درجة الغليان 78 °C)', vap2: 'يبقى في الدورق: ماء (درجة الغليان 100 °C)' },
        zh: { col: '分馏柱', cond: '直形冷凝管', vap1: '馏出液：乙醇（沸点 78 °C）', vap2: '留在烧瓶中：水（沸点 100 °C）' },
        ku: { col: 'Stûna fraksiyonê', cond: 'Sarker (Liebig)', vap1: 'Distîlat: etanol (XK 78 °C)', vap2: 'Di balonê de dimîne: av (XK 100 °C)' },
      },
    },
    {
      archetype: 'lab-glassware-setup',
      title: {
        tr: 'Ayırma Hunisi ve Yoğunluk Farkı',
        en: 'Separatory Funnel & Density Immiscibility',
        de: 'Scheidetrichter und Dichteunterschied',
        fr: 'Ampoule à décanter et différence de densité',
        ru: 'Делительная воронка и разность плотностей',
        ar: 'قمع الفصل وفارق الكثافة',
        zh: '分液漏斗与液体密度分层',
        ku: 'Huniya Veqetandinê û Ciyawaziya Tîrbûnê',
      },
      caption: {
        tr: 'Birbiri içinde çözünmeyen ve yoğunlukları farklı iki sıvı ayırma hunisinde iki faz oluşturur; yoğunluğu büyük olan altta toplanır ve musluktan önce o alınır.',
        en: 'Two immiscible liquids of different density form two layers in a separatory funnel; the denser one settles at the bottom and is run off first through the stopcock.',
        de: 'Abtrennung nicht mischbarer Flüssigkeitsschichten im Scheidetrichter anhand von Dichteunterschieden.',
        fr: 'Séparation de phases liquides non miscibles par gravité selon leurs masses volumiques.',
        ru: 'Разделение несмешивающихся слоёв жидкости по плотности с помощью крана воронки.',
        ar: 'فصل طبقات السوائل غير الممتزجة اعتماداً على فرق الكثافة بواسطة صنبور القمع.',
        zh: '利用分液漏斗旋塞依据密度差异分步放出互不相溶的液体分层。',
        ku: 'Veqetandina qatên şile yên di nav hev de nahelin li gorî tîrbûnê bi mifteyê.',
      },
      labels: {
        tr: { top: 'Zeytinyağı (d = 0,92 g/mL): üst faz', bot: 'Su (d = 1,00 g/mL): alt faz', valve: 'Musluk: alt faz önce alınır', flask: 'Toplama kabı (beher)' },
        en: { top: 'Olive oil (d = 0.92 g/mL): upper layer', bot: 'Water (d = 1.00 g/mL): lower layer', valve: 'Stopcock: lower layer is drained first', flask: 'Collecting beaker' },
        de: { top: 'Olivenöl (d = 0,92 g/mL): obere Phase', bot: 'Wasser (d = 1,00 g/mL): untere Phase', valve: 'Hahn: untere Phase läuft zuerst ab', flask: 'Becherglas (Auffanggefäß)' },
        fr: { top: 'Huile d’olive (d = 0,92 g/mL) : phase supérieure', bot: 'Eau (d = 1,00 g/mL) : phase inférieure', valve: 'Robinet : la phase inférieure s’écoule d’abord', flask: 'Bécher de récupération' },
        ru: { top: 'Оливковое масло (d = 0,92 г/мл): верхний слой', bot: 'Вода (d = 1,00 г/мл): нижний слой', valve: 'Кран: сначала сливают нижний слой', flask: 'Стакан-приёмник' },
        ar: { top: 'زيت الزيتون (d = 0.92 g/mL): الطبقة العليا', bot: 'الماء (d = 1.00 g/mL): الطبقة السفلى', valve: 'الصنبور: تُسحب الطبقة السفلى أولًا', flask: 'كأس التجميع' },
        zh: { top: '橄榄油 (d = 0.92 g/mL)：上层', bot: '水 (d = 1.00 g/mL)：下层', valve: '活塞：先放出下层', flask: '收集烧杯' },
        ku: { top: 'Rûnê zeytûnê (d = 0,92 g/mL): qata jorîn', bot: 'Av (d = 1,00 g/mL): qata jêrîn', valve: 'Muslix: pêşî qata jêrîn tê girtin', flask: 'Behera berhevkirinê' },
      },
    },
  ],
  u09: [
    {
      archetype: 'titration-burette-curve',
      title: {
        tr: 'Asit-Baz Nötralleşmesi ve pH Skalası',
        en: 'Acid-Base Neutralization & pH Scale',
        de: 'Säure-Base-Neutralisation & pH-Skala',
        fr: 'Neutralisation acide-base et échelle de pH',
        ru: 'Нейтрализация кислот и оснований, шкала pH',
        ar: 'التعادل الحمضي القاعدي ومقياس الرقم الهيدروجيني',
        zh: '酸碱中和反应与pH酸碱度标度',
        ku: 'Bêalîbûna Asîd-Baz û Pîvana pH',
      },
      caption: {
        tr: '25 °C’ta pH değeri 7’den küçük çözeltiler asidik, 7 olanlar nötr, 7’den büyük olanlar baziktir; asit ile baz tepkimeye girince tuz ve su oluşur.',
        en: 'At 25 °C solutions with pH below 7 are acidic, pH 7 is neutral and above 7 is basic; an acid and a base react to give a salt and water.',
        de: 'Reaktion von H⁺ und OH⁻ Ionen zu Wasser und Salz mit Neutralpunkt bei pH 7.',
        fr: 'Combinaison d’ions H⁺ et OH⁻ formant eau et sel avec équivalence neutre à pH 7.',
        ru: 'Взаимодействие ионов H⁺ и OH⁻ с образованием воды и соли при нейтральном pH 7.',
        ar: 'اتحاد أيونات الهيدروجين والهيدروكسيد لتكوين الماء والملح عند درجة تعادل pH 7.',
        zh: '氢离子与氢氧根离子结合生成水与中性盐晶体，pH=7为中性点。',
        ku: 'Yekbûna îyonên H⁺ û OH⁻ bo çêkirina av û xwê li xala pH 7.',
      },
      labels: {
        tr: { acid: 'Asidik: pH < 7', neutral: 'Nötr: pH = 7 (25 °C)', base: 'Bazik: pH > 7', hplus: 'Nötralleşme: asit + baz → tuz + su' },
        en: { acid: 'Acidic: pH < 7', neutral: 'Neutral: pH = 7 (25 °C)', base: 'Basic: pH > 7', hplus: 'Neutralization: acid + base → salt + water' },
        de: { acid: 'Sauer: pH < 7', neutral: 'Neutral: pH = 7 (25 °C)', base: 'Basisch: pH > 7', hplus: 'Neutralisation: Säure + Base → Salz + Wasser' },
        fr: { acid: 'Acide : pH < 7', neutral: 'Neutre : pH = 7 (25 °C)', base: 'Basique : pH > 7', hplus: 'Neutralisation : acide + base → sel + eau' },
        ru: { acid: 'Кислая: pH < 7', neutral: 'Нейтральная: pH = 7 (25 °C)', base: 'Щелочная: pH > 7', hplus: 'Нейтрализация: кислота + основание → соль + вода' },
        ar: { acid: 'حمضي: pH < 7', neutral: 'متعادل: pH = 7 (25 °C)', base: 'قاعدي: pH > 7', hplus: 'التعادل: حمض + قاعدة → ملح + ماء' },
        zh: { acid: '酸性：pH < 7', neutral: '中性：pH = 7 (25 °C)', base: '碱性：pH > 7', hplus: '中和：酸 + 碱 → 盐 + 水' },
        ku: { acid: 'Asîdî: pH < 7', neutral: 'Notr: pH = 7 (25 °C)', base: 'Bazîk: pH > 7', hplus: 'Notralîzasyon: asîd + baz → xwê + av' },
      },
    },
    {
      archetype: 'titration-burette-curve',
      title: {
        tr: 'Metallerin Asitlerle Tepkimeleri ve Çıkan Gazlar',
        en: 'Metal-Acid Reactions & Gas Evolution',
        de: 'Metall-Säure-Reaktionen und Gasentwicklung',
        fr: 'Réactions métaux-acides et dégagement gazeux',
        ru: 'Реакции металлов с кислотами и выделение газов',
        ar: 'تفاعلات الفلزات مع الأحماض وتصاعد الغازات',
        zh: '金属与酸反应特征与气体生成规律',
        ku: 'Bertekên Metal û Asîdan û Derketina Gazê',
      },
      caption: {
        tr: 'Aktif metaller asitlerle H₂ gazı verir. Bakır gibi yarı soy metaller HCl ile tepkime vermez; HNO₃ ile tepkimelerinde H₂ değil NO₂ veya NO gazı çıkar. Amfoter metaller kuvvetli bazlarla da H₂ verir.',
        en: 'Active metals give H₂ with acids. Semi-noble metals such as copper do not react with HCl; with HNO₃ they release NO₂ or NO instead of H₂. Amphoteric metals also give H₂ with strong bases.',
        de: 'Aktive Metalle entwickeln H₂; Halb-Edelmetalle mit HNO₃ setzen NO/NO₂ frei (kein H₂).',
        fr: 'Les métaux actifs dégagent du H₂ ; les métaux semi-nobles (Cu) avec HNO₃ libèrent NO/NO₂.',
        ru: 'Активные металлы выделяют H₂; полублагородные (Cu) с HNO₃ дают NO/NO₂ (не H₂).',
        ar: 'الفلزات النشطة تصعد غاز الهيدروجين، والفلزات شبه الخاملة تنتج أكاسيد النيتروجين.',
        zh: '活泼金属置换放出氢气；半贵金属 (铜、银) 与硝酸反应生成氮氧化物而非氢气！',
        ku: 'Metalên çalak gaza H₂ derdixin; nîv-esîl (Cu) bi HNO₃ re gaza NO/NO₂ çêdike.',
      },
      labels: {
        tr: { active: 'Aktif metal + asit → tuz + H₂', cu_conc: 'Cu + derişik HNO₃ → NO₂ (H₂ çıkmaz)', cu_dil: 'Cu + seyreltik HNO₃ → NO (H₂ çıkmaz)', amph: 'Amfoter metal + kuvvetli baz → H₂' },
        en: { active: 'Active metal + acid → salt + H₂', cu_conc: 'Cu + concentrated HNO₃ → NO₂ (no H₂)', cu_dil: 'Cu + dilute HNO₃ → NO (no H₂)', amph: 'Amphoteric metal + strong base → H₂' },
        de: { active: 'Unedles Metall + Säure → Salz + H₂', cu_conc: 'Cu + konzentrierte HNO₃ → NO₂ (kein H₂)', cu_dil: 'Cu + verdünnte HNO₃ → NO (kein H₂)', amph: 'Amphoteres Metall + starke Base → H₂' },
        fr: { active: 'Métal actif + acide → sel + H₂', cu_conc: 'Cu + HNO₃ concentré → NO₂ (pas de H₂)', cu_dil: 'Cu + HNO₃ dilué → NO (pas de H₂)', amph: 'Métal amphotère + base forte → H₂' },
        ru: { active: 'Активный металл + кислота → соль + H₂', cu_conc: 'Cu + конц. HNO₃ → NO₂ (H₂ не выделяется)', cu_dil: 'Cu + разб. HNO₃ → NO (H₂ не выделяется)', amph: 'Амфотерный металл + щёлочь → H₂' },
        ar: { active: 'فلز نشط + حمض → ملح + H₂', cu_conc: 'Cu + HNO₃ مركز → NO₂ (لا ينطلق H₂)', cu_dil: 'Cu + HNO₃ مخفف → NO (لا ينطلق H₂)', amph: 'فلز متذبذب + قاعدة قوية → H₂' },
        zh: { active: '活泼金属 + 酸 → 盐 + H₂', cu_conc: 'Cu + 浓 HNO₃ → NO₂（不放出 H₂）', cu_dil: 'Cu + 稀 HNO₃ → NO（不放出 H₂）', amph: '两性金属 + 强碱 → H₂' },
        ku: { active: 'Metala aktîf + asîd → xwê + H₂', cu_conc: 'Cu + HNO₃ ya xest → NO₂ (H₂ dernakeve)', cu_dil: 'Cu + HNO₃ ya şilkirî → NO (H₂ dernakeve)', amph: 'Metala amfoter + baza xurt → H₂' },
      },
    },
  ],
  u10: [
    {
      archetype: 'vsepr-molecular-geometry',
      title: {
        tr: 'Sabun Miseli ve Kir Temizleme Mekanizması',
        en: 'Soap Micelle & Dirt Cleansing Action',
        de: 'Seifenmizelle und Schmutzentfernungsmechanismus',
        fr: 'Micelle de savon et action nettoyante',
        ru: 'Мыльная мицелла и механизм очистки',
        ar: 'ميسيل الصابون وآلية تنظيف الأوساخ',
        zh: '肥皂胶束结构与去污乳化机理',
        ku: 'Mîsela Sabûnê û Mekanîzmaya Paqijkirinê',
      },
      caption: {
        tr: 'Sabunun hidrofob kuyruğu yağa, hidrofil başı suya yönelir; yağ damlası misel içinde sarılarak suyla birlikte uzaklaştırılır.',
        en: 'The hydrophobic tail of soap points into the grease and the hydrophilic head into the water; the grease droplet is wrapped in a micelle and rinsed away.',
        de: 'Der hydrophobe Schwanz bindet an Schmutz; der hydrophile Kopf ragt ins Wasser.',
        fr: 'La queue hydrophobe se lie à la graisse ; la tête hydrophile s’oriente vers l’eau pour l’émulsionner.',
        ru: 'Гидрофобный хвост внедряется в жир, а гидрофильная голова обращена к воде.',
        ar: 'يتغلغل الذيل الكاره للماء في الدهون، بينما يتجه الرأس المحب للماء نحو جزيئات الماء.',
        zh: '疏水长烃链尾端吸附包裹油脂污渍，亲水性极性头部朝向水相乳化脱附。',
        ku: 'Dûvikê hîdrofob bi rûnê digire, serê hîdrofîl ber bi avê ve diçe û pîsbûnê radike.',
      },
      labels: {
        tr: { head: 'Hidrofil baş (–COO⁻ Na⁺): suya yönelir', tail: 'Hidrofob kuyruk: yağın içine girer', dirt: 'Yağ (kir) damlası', water: 'Su' },
        en: { head: 'Hydrophilic head (–COO⁻ Na⁺): faces the water', tail: 'Hydrophobic tail: enters the grease', dirt: 'Grease (dirt) droplet', water: 'Water' },
        de: { head: 'Hydrophiler Kopf (–COO⁻ Na⁺): zeigt zum Wasser', tail: 'Hydrophober Schwanz: taucht ins Fett', dirt: 'Fetttropfen (Schmutz)', water: 'Wasser' },
        fr: { head: 'Tête hydrophile (–COO⁻ Na⁺) : vers l’eau', tail: 'Queue hydrophobe : dans la graisse', dirt: 'Gouttelette de graisse (salissure)', water: 'Eau' },
        ru: { head: 'Гидрофильная головка (–COO⁻ Na⁺): к воде', tail: 'Гидрофобный хвост: в жир', dirt: 'Капля жира (грязь)', water: 'Вода' },
        ar: { head: 'رأس محب للماء (–COO⁻ Na⁺): نحو الماء', tail: 'ذيل كاره للماء: داخل الدهن', dirt: 'قطيرة دهن (اتساخ)', water: 'ماء' },
        zh: { head: '亲水头 (–COO⁻ Na⁺)：朝向水', tail: '疏水尾：伸入油污', dirt: '油污液滴', water: '水' },
        ku: { head: 'Serê hîdrofîl (–COO⁻ Na⁺): ber bi avê', tail: 'Dûvê hîdrofob: dikeve nav rûn', dirt: 'Dilopa rûn (qirêj)', water: 'Av' },
      },
    },
    {
      archetype: 'vsepr-molecular-geometry',
      title: {
        tr: 'Polimer Zincirleri ve Monomerler',
        en: 'Polymer Chains & Monomer Addition',
        de: 'Polymerketten und Monomerverknüpfung',
        fr: 'Chaînes polymères et addition de monomères',
        ru: 'Полимерные цепи и полимеризация мономеров',
        ar: 'سلاسل البوليمر وإضافة المونومرات',
        zh: '聚合物分子链与单体聚合加成',
        ku: 'Zencîreyên Polîmer û Monomeran',
      },
      caption: {
        tr: 'Katılma polimerleşmesinde monomerlerdeki C=C çift bağı açılır ve birimler uç uca eklenerek uzun zincirli polimeri (PE, PVC, teflon) oluşturur.',
        en: 'In addition polymerization the C=C double bond of each monomer opens and the units join end to end into a long-chain polymer (PE, PVC, Teflon).',
        de: 'Öffnung von Monomer-Pi-Bindungen zur Bildung langer Ketten wie PE, PVC und Teflon.',
        fr: 'Ouverture des liaisons pi pour former de longues chaînes comme le PE, PVC ou Téflon.',
        ru: 'Раскрытие пи-связей мономеров с образованием длинных макромолекулярных цепей.',
        ar: 'انفتاح الروابط الثنائية للمونومرات لتكوين سلاسل طويلة مثل البولي إيثيلين والتفلون.',
        zh: '乙烯类单体打开碳碳双键π键，连接形成高分子聚乙烯、PVC与聚四氟乙烯。',
        ku: 'Vekirina bendên pî yên monomeran bo çêkirina zencîreyên dirêj ên PE, PVC û Teflonê.',
      },
      labels: {
        tr: { mono: 'Monomer: etilen (CH₂=CH₂)', poly: 'Polimer: polietilen (PE)', teflon: 'Tetrafloroetilen → teflon (PTFE)', pvc: 'Vinil klorür → PVC' },
        en: { mono: 'Monomer: ethylene (CH₂=CH₂)', poly: 'Polymer: polyethylene (PE)', teflon: 'Tetrafluoroethylene → Teflon (PTFE)', pvc: 'Vinyl chloride → PVC' },
        de: { mono: 'Monomer: Ethen (CH₂=CH₂)', poly: 'Polymer: Polyethylen (PE)', teflon: 'Tetrafluorethen → Teflon (PTFE)', pvc: 'Vinylchlorid → PVC' },
        fr: { mono: 'Monomère : éthylène (CH₂=CH₂)', poly: 'Polymère : polyéthylène (PE)', teflon: 'Tétrafluoroéthylène → téflon (PTFE)', pvc: 'Chlorure de vinyle → PVC' },
        ru: { mono: 'Мономер: этилен (CH₂=CH₂)', poly: 'Полимер: полиэтилен (ПЭ)', teflon: 'Тетрафторэтилен → тефлон (ПТФЭ)', pvc: 'Винилхлорид → ПВХ' },
        ar: { mono: 'مونومر: إيثيلين (CH₂=CH₂)', poly: 'بوليمر: بولي إيثيلين (PE)', teflon: 'رباعي فلورو إيثيلين → تفلون (PTFE)', pvc: 'كلوريد الفينيل → PVC' },
        zh: { mono: '单体：乙烯 (CH₂=CH₂)', poly: '聚合物：聚乙烯 (PE)', teflon: '四氟乙烯 → 特氟龙 (PTFE)', pvc: '氯乙烯 → PVC' },
        ku: { mono: 'Monomer: etîlen (CH₂=CH₂)', poly: 'Polîmer: polîetîlen (PE)', teflon: 'Tetrafloroetîlen → teflon (PTFE)', pvc: 'Vînîl klorîd → PVC' },
      },
    },
  ],
  u11: [
    {
      archetype: 'bohr-orbital-atom',
      title: {
        tr: 'Modern Atom Teorisi ve Kuantum Sayıları',
        en: 'Modern Atomic Theory & Quantum Numbers',
        de: 'Moderne Atomtheorie & Quantenzahlen',
        fr: 'Théorie atomique moderne et nombres quantiques',
        ru: 'Квантовые числа и орбитали',
        ar: 'النظرية الذرية الحديثة والأعداد الكمية',
        zh: '现代量子原子轨道与四个量子数',
        ku: 'Teoriya Atomê ya Nûjen û Hejmarên Kuantûmê',
      },
      caption: {
        tr: 'Orbital türünü açısal momentum kuantum sayısı (ℓ) belirler: s küresel, p çift loblu, d çoğunlukla dört lobludur. Bir orbitalde zıt spinli en çok iki elektron bulunur.',
        en: 'The orbital type is set by the angular momentum quantum number ℓ: s is spherical, p has two lobes, d mostly four. An orbital holds at most two electrons with opposite spins.',
        de: 'Haupt- (n), Neben- (l), Magnet- (ml) und Spin- (ms) Quantenzahlen.',
        fr: 'Nombres quantiques principal (n), azimutal (l), magnétique (ml) et de spin (ms).',
        ru: 'Главное (n), орбитальное (l), магнитное (ml) и спиновое (ms) квантовые числа.',
        ar: 'أعداد الكم: الرئيسي (n)، الثانوي (l)، المغناطيسي (ml)، والمغزلي (ms).',
        zh: '主量子数 n、角量子数 l、磁量子数 ml 与自旋量子数 ms 完整描述电子波函数状态。',
        ku: 'Hejmarên kuantûmê yên serekî (n), goşeyî (l), magnetîk (ml) û spîn (ms).',
      },
      labels: {
        tr: { s_orb: 's orbitali (ℓ = 0): küresel, 1 orbital', p_orb: 'p orbitalleri (ℓ = 1): çift loblu, 3 orbital', d_orb: 'd orbitalleri (ℓ = 2): 5 orbital', spin: 'Pauli: bir orbitalde en çok 2 e⁻, zıt spinli' },
        en: { s_orb: 's orbital (ℓ = 0): spherical, 1 orbital', p_orb: 'p orbitals (ℓ = 1): two lobes, 3 orbitals', d_orb: 'd orbitals (ℓ = 2): 5 orbitals', spin: 'Pauli: at most 2 e⁻ per orbital, opposite spins' },
        de: { s_orb: 's-Orbital (ℓ = 0): kugelförmig, 1 Orbital', p_orb: 'p-Orbitale (ℓ = 1): hantelförmig, 3 Orbitale', d_orb: 'd-Orbitale (ℓ = 2): 5 Orbitale', spin: 'Pauli: höchstens 2 e⁻ pro Orbital, entgegengesetzter Spin' },
        fr: { s_orb: 'Orbitale s (ℓ = 0) : sphérique, 1 orbitale', p_orb: 'Orbitales p (ℓ = 1) : deux lobes, 3 orbitales', d_orb: 'Orbitales d (ℓ = 2) : 5 orbitales', spin: 'Pauli : au plus 2 e⁻ par orbitale, spins opposés' },
        ru: { s_orb: 's-орбиталь (ℓ = 0): сфера, 1 орбиталь', p_orb: 'p-орбитали (ℓ = 1): гантель, 3 орбитали', d_orb: 'd-орбитали (ℓ = 2): 5 орбиталей', spin: 'Паули: не более 2 e⁻ на орбитали, спины противоположны' },
        ar: { s_orb: 'الفلك s (ℓ = 0): كروي، فلك واحد', p_orb: 'أفلاك p (ℓ = 1): فصّان، 3 أفلاك', d_orb: 'أفلاك d (ℓ = 2): 5 أفلاك', spin: 'باولي: إلكترونان على الأكثر في الفلك وبغزل متعاكس' },
        zh: { s_orb: 's 轨道 (ℓ = 0)：球形，1 个', p_orb: 'p 轨道 (ℓ = 1)：哑铃形，3 个', d_orb: 'd 轨道 (ℓ = 2)：5 个', spin: '泡利：每个轨道最多 2 个电子，自旋相反' },
        ku: { s_orb: 'Orbîtala s (ℓ = 0): gogî, 1 orbîtal', p_orb: 'Orbîtalên p (ℓ = 1): du lob, 3 orbîtal', d_orb: 'Orbîtalên d (ℓ = 2): 5 orbîtal', spin: 'Pauli: di orbîtalekê de herî zêde 2 e⁻, spînên dijber' },
      },
    },
    {
      archetype: 'bohr-orbital-atom',
      title: {
        tr: 'Aufbau, Hund ve Küresel Simetri (Cr ve Cu)',
        en: 'Aufbau, Hund’s Rule & Spherical Symmetry (Cr and Cu)',
        de: 'Aufbauprinzip, Hundsche Regel & Symmetrie',
        fr: 'Aufbau, règle de Hund et symétrie sphérique',
        ru: 'Принцип Ауфбау, правило Хунда и симметрия',
        ar: 'مبدأ البناء التصاعدي وقاعدة هوند والتماثل',
        zh: '构造原理、洪特规则与全满半满球形对称',
        ku: 'Prensîba Aufbau, Hund û Sîmetriya Gilover',
      },
      caption: {
        tr: '₂₄Cr ve ₂₉Cu’da yarı dolu ve tam dolu 3d alt kabuğu (küresel simetri) daha kararlı olduğundan temel hâl dizilimleri 4s¹ 3d⁵ ve 4s¹ 3d¹⁰ şeklindedir.',
        en: 'In ₂₄Cr and ₂₉Cu the half-filled and filled 3d subshell (spherical symmetry) is more stable, so the ground-state configurations are 4s¹ 3d⁵ and 4s¹ 3d¹⁰.',
        de: 'Grundzustandsanomalien von Cr und Cu mit zusätzlicher Stabilität durch Kugelsymmetrie.',
        fr: 'Configurations fondamentales stables de Cr et Cu dues à la symétrie sphérique demi-pleine ou pleine.',
        ru: 'Стабильность конфигураций хрома и меди в основном состоянии за счёт сферической симметрии.',
        ar: 'استقرار التوزيع الإلكتروني للكروم والنحاس في الحالة المستقرة بفضل التماثل الكروي.',
        zh: '24号铬 (4s¹ 3d⁵) 与 29号铜 (4s¹ 3d¹⁰) 因半满和全满球形对称具有额外基态热力学稳定性。',
        ku: '₂₄Cr û ₂₉Cu ji ber sîmetriya gilover xwedî aramiya zêde ne û di rewşa bingehîn de ne.',
      },
      labels: {
        tr: { cr: 'Cr: [Ar] 4s¹ 3d⁵ (yarı dolu 3d)', cu: 'Cu: [Ar] 4s¹ 3d¹⁰ (tam dolu 3d)', aufbau: 'Aufbau: orbitaller artan enerji sırasıyla dolar (1s 2s 2p 3s 3p 4s 3d …)', hund: 'Hund: eş enerjili orbitallere önce birer elektron, aynı spinle yerleşir' },
        en: { cr: 'Cr: [Ar] 4s¹ 3d⁵ (half-filled 3d)', cu: 'Cu: [Ar] 4s¹ 3d¹⁰ (filled 3d)', aufbau: 'Aufbau: orbitals fill in order of increasing energy (1s 2s 2p 3s 3p 4s 3d …)', hund: 'Hund: equal-energy orbitals get one electron each first, with parallel spins' },
        de: { cr: 'Cr: [Ar] 4s¹ 3d⁵ (3d halb besetzt)', cu: 'Cu: [Ar] 4s¹ 3d¹⁰ (3d voll besetzt)', aufbau: 'Aufbau: Besetzung nach steigender Energie (1s 2s 2p 3s 3p 4s 3d …)', hund: 'Hund: energiegleiche Orbitale zuerst einfach und mit parallelem Spin' },
        fr: { cr: 'Cr : [Ar] 4s¹ 3d⁵ (3d à demi remplie)', cu: 'Cu : [Ar] 4s¹ 3d¹⁰ (3d remplie)', aufbau: 'Aufbau : remplissage par énergie croissante (1s 2s 2p 3s 3p 4s 3d …)', hund: 'Hund : un électron par orbitale de même énergie d’abord, spins parallèles' },
        ru: { cr: 'Cr: [Ar] 4s¹ 3d⁵ (3d заполнен наполовину)', cu: 'Cu: [Ar] 4s¹ 3d¹⁰ (3d заполнен)', aufbau: 'Ауфбау: заполнение по возрастанию энергии (1s 2s 2p 3s 3p 4s 3d …)', hund: 'Хунд: равные по энергии орбитали сначала по одному электрону, спины параллельны' },
        ar: { cr: 'Cr: [Ar] 4s¹ 3d⁵ (3d نصف ممتلئ)', cu: 'Cu: [Ar] 4s¹ 3d¹⁰ (3d ممتلئ)', aufbau: 'أوفباو: تُملأ الأفلاك حسب تزايد الطاقة (1s 2s 2p 3s 3p 4s 3d …)', hund: 'هوند: تُملأ الأفلاك المتساوية الطاقة فرادى أولًا وبغزل متوازٍ' },
        zh: { cr: 'Cr: [Ar] 4s¹ 3d⁵（3d 半充满）', cu: 'Cu: [Ar] 4s¹ 3d¹⁰（3d 全充满）', aufbau: '构造原理：按能量由低到高填充 (1s 2s 2p 3s 3p 4s 3d …)', hund: '洪特规则：等能量轨道先各填 1 个电子且自旋平行' },
        ku: { cr: 'Cr: [Ar] 4s¹ 3d⁵ (3d nîv-tijî)', cu: 'Cu: [Ar] 4s¹ 3d¹⁰ (3d tijî)', aufbau: 'Aufbau: orbîtal li gorî enerjiya zêdebûyî tijî dibin (1s 2s 2p 3s 3p 4s 3d …)', hund: 'Hund: orbîtalên hev-enerjî pêşî yek bi yek, bi spîna paralel tijî dibin' },
      },
    },
  ],
  u12: [
    {
      archetype: 'gas-piston-manometer',
      title: {
        tr: 'İdeal Gaz Yasaları ve Pistonlu Kap',
        en: 'Ideal Gas Laws & Piston Chamber',
        de: 'Ideale Gasgesetze und Kolbenzylinder',
        fr: 'Lois des gaz parfaits et cylindre à piston',
        ru: 'Законы идеального газа и цилиндр с поршнем',
        ar: 'قوانين الغاز المثالي والأسطوانة ذات المكبس',
        zh: '理想气体状态方程与活塞气缸模型',
        ku: 'Zagonên Gazên Îdeal û Sîlîndira Pîstonê',
      },
      caption: {
        tr: 'Sabit sıcaklıkta P ile V ters orantılıdır (Boyle); sabit basınçta V mutlak sıcaklıkla doğru orantılıdır (Charles). İkisi ideal gaz denkleminde birleşir.',
        en: 'At constant temperature P and V are inversely proportional (Boyle); at constant pressure V is proportional to the absolute temperature (Charles). Both are contained in the ideal gas equation.',
        de: 'Zusammenführung der Gesetze von Boyle, Charles und Avogadro in P · V = n · R · T.',
        fr: 'Intégration des lois de Boyle, Charles et Avogadro dans l’équation P · V = n · R · T.',
        ru: 'Объединение законов Бойля, Шарля и Авогадро в уравнении Менделеева-Клапейрона.',
        ar: 'دمج قوانين بويل وشارل وأفوجادرو في معادلة الغاز المثالي: P · V = n · R · T.',
        zh: '将玻意耳、查理、盖-吕萨克与阿伏伽德罗定律统一于克拉伯龙方程 P·V = n·R·T。',
        ku: 'Yekbûna zagonên Boyle, Charles û Avogadro di hevkêşeya P · V = n · R · T de.',
      },
      labels: {
        tr: { boyle: 'Boyle: P · V sabit (T, n sabit)', charles: 'Charles: V / T sabit (P, n sabit)', piston: 'Sürtünmesiz piston: Pgaz = Pdış', rconst: 'P · V = n · R · T;  R = 0,082 L·atm/(mol·K)' },
        en: { boyle: 'Boyle: P · V constant (T, n fixed)', charles: 'Charles: V / T constant (P, n fixed)', piston: 'Frictionless piston: Pgas = Pext', rconst: 'P · V = n · R · T;  R = 0.082 L·atm/(mol·K)' },
        de: { boyle: 'Boyle: P · V konstant (T, n fest)', charles: 'Charles: V / T konstant (P, n fest)', piston: 'Reibungsfreier Kolben: PGas = Paußen', rconst: 'P · V = n · R · T;  R = 0,082 L·atm/(mol·K)' },
        fr: { boyle: 'Boyle : P · V constant (T, n fixés)', charles: 'Charles : V / T constant (P, n fixés)', piston: 'Piston sans frottement : Pgaz = Pext', rconst: 'P · V = n · R · T;  R = 0,082 L·atm/(mol·K)' },
        ru: { boyle: 'Бойль: P · V постоянно (T, n пост.)', charles: 'Шарль: V / T постоянно (P, n пост.)', piston: 'Поршень без трения: Pгаза = Pвнеш', rconst: 'P · V = n · R · T;  R = 0,082 л·атм/(моль·K)' },
        ar: { boyle: 'بويل: P · V ثابت (T, n ثابتان)', charles: 'شارل: V / T ثابت (P, n ثابتان)', piston: 'مكبس عديم الاحتكاك: Pgas = Pext', rconst: 'P · V = n · R · T;  R = 0.082 L·atm/(mol·K)' },
        zh: { boyle: '波义耳：P · V 恒定（T、n 不变）', charles: '查理：V / T 恒定（P、n 不变）', piston: '无摩擦活塞：P气 = P外', rconst: 'P · V = n · R · T;  R = 0.082 L·atm/(mol·K)' },
        ku: { boyle: 'Boyle: P · V sabît (T, n sabît)', charles: 'Charles: V / T sabît (P, n sabît)', piston: 'Pistona bê xişandin: Pgaz = Pderve', rconst: 'P · V = n · R · T;  R = 0,082 L·atm/(mol·K)' },
      },
    },
    {
      archetype: 'gas-piston-manometer',
      title: {
        tr: 'Manometreler ve Açık Hava Basıncı',
        en: 'Manometer Gauges & Atmospheric Pressure',
        de: 'Manometer und atmosphärischer Druck',
        fr: 'Manomètres et pression atmosphérique',
        ru: 'Манометры и атмосферное давление',
        ar: 'المانومترات والضغط الجوي',
        zh: 'U型水银测压计与大气压平衡',
        ku: 'Manometre û Zexta Hewayê ya Vekirî',
      },
      caption: {
        tr: 'Kapalı uçlu manometrede gaz basıncı cıva düzeyleri farkına eşittir; açık uçlu manometrede bu fark, gaz tarafındaki düzey düşükse açık hava basıncına eklenir, yüksekse ondan çıkarılır.',
        en: 'In a closed-end manometer the gas pressure equals the difference in mercury levels; in an open-end manometer that difference is added to atmospheric pressure when the gas-side level is lower, and subtracted when it is higher.',
        de: 'U-Rohr-Quecksilberdifferenz zur Bestimmung des Innendrucks: P = P₀ ± h.',
        fr: 'Déplacement de mercure dans un tube en U déterminant la pression : P = P₀ ± h.',
        ru: 'Измерение давления газа по разности уровней ртути в U-образной трубке: P = P₀ ± h.',
        ar: 'قياس ضغط الغاز بارتفاع عمود الزئبق في الأنبوب على شكل U: P = P₀ ± h.',
        zh: '利用U型管水银高度差精准测定密闭气体绝对压强: P = P₀ ± h。',
        ku: 'Pîvandina zexta gazê bi bilindahiya stûna cîvayê di lûleya U de: P = P₀ ± h.',
      },
      labels: {
        tr: { p0: 'Açık hava basıncı (P₀)', gas: 'Gaz', hdiff: 'h: iki koldaki cıva düzeyleri farkı (cmHg)', eq: 'Açık uç: Pgaz = P₀ + h' },
        en: { p0: 'Atmospheric pressure (P₀)', gas: 'Gas', hdiff: 'h: difference between the mercury levels (cmHg)', eq: 'Open end: Pgas = P₀ + h' },
        de: { p0: 'Luftdruck (P₀)', gas: 'Gas', hdiff: 'h: Höhenunterschied der Quecksilbersäulen (cmHg)', eq: 'Offen: PGas = P₀ + h' },
        fr: { p0: 'Pression atmosphérique (P₀)', gas: 'Gaz', hdiff: 'h : dénivellation du mercure (cmHg)', eq: 'Tube ouvert : Pgaz = P₀ + h' },
        ru: { p0: 'Атмосферное давление (P₀)', gas: 'Газ', hdiff: 'h: разность уровней ртути (см рт. ст.)', eq: 'Открытый: Pгаза = P₀ + h' },
        ar: { p0: 'الضغط الجوي (P₀)', gas: 'غاز', hdiff: 'h: فرق مستويي الزئبق (cmHg)', eq: 'طرف مفتوح: Pgas = P₀ + h' },
        zh: { p0: '大气压 (P₀)', gas: '气体', hdiff: 'h：两侧汞面高度差 (cmHg)', eq: '开口：P气 = P₀ + h' },
        ku: { p0: 'Zexta hewayê (P₀)', gas: 'Gaz', hdiff: 'h: cudahiya asta cîvayê (cmHg)', eq: 'Serê vekirî: Pgaz = P₀ + h' },
      },
    },
  ],
  u13: [
    {
      archetype: 'gas-piston-manometer',
      title: {
        tr: 'Graham Difüzyon Yasası ve Kinetik Teori',
        en: 'Graham’s Law of Diffusion & Kinetic Theory',
        de: 'Grahamsches Diffusionsgesetz & Kinetik',
        fr: 'Loi de diffusion de Graham et théorie cinétique',
        ru: 'Закон диффузии Грэма и кинетическая теория',
        ar: 'قانون جراهام للانتشار والنظرية الحركية',
        zh: '格雷姆气体扩散定律与分子运动论',
        ku: 'Zagona Belavbûnê ya Graham û Teoriya Kînetîk',
      },
      caption: {
        tr: 'Aynı sıcaklıkta gazların yayılma hızı mol kütlelerinin kareköküyle ters orantılıdır: CH₄, SO₂’den 2 kat hızlı yayılır ve iki gaz SO₂ ucuna yakın bir noktada karşılaşır.',
        en: 'At the same temperature the rate of diffusion is inversely proportional to the square root of molar mass: CH₄ moves twice as fast as SO₂, so the gases meet nearer the SO₂ end.',
        de: 'Diffusionsgeschwindigkeiten verhalten sich umgekehrt proportional zur Wurzel aus der Molmasse.',
        fr: 'La vitesse de diffusion est inversement proportionnelle à la racine carrée de la masse molaire.',
        ru: 'Скорость диффузии газов обратно пропорциональна квадратному корню из их молярной массы.',
        ar: 'تتناسب سرعة انتشار الغازات عكسياً مع الجذر التربيعي للكتلة المولية.',
        zh: '同温同压下气体的扩散逸出速率与摩尔质量的平方根成反比。',
        ku: 'Leza belavbûna gazan bi koka çarçikî ya germahiyê re rast, bi ya koma molar re çewt guncaw e.',
      },
      labels: {
        tr: { vratio: 'v(CH₄) / v(SO₂) = √(64 / 16) = 2', ch4: 'CH₄ (16 g/mol): hızlı', so2: 'SO₂ (64 g/mol): yavaş', temp: 'Aynı sıcaklıkta hafif gaz daha hızlı yayılır: v ∝ 1/√M' },
        en: { vratio: 'v(CH₄) / v(SO₂) = √(64 / 16) = 2', ch4: 'CH₄ (16 g/mol): fast', so2: 'SO₂ (64 g/mol): slow', temp: 'At the same temperature the lighter gas diffuses faster: v ∝ 1/√M' },
        de: { vratio: 'v(CH₄) / v(SO₂) = √(64 / 16) = 2', ch4: 'CH₄ (16 g/mol): schnell', so2: 'SO₂ (64 g/mol): langsam', temp: 'Bei gleicher Temperatur diffundiert das leichtere Gas schneller: v ∝ 1/√M' },
        fr: { vratio: 'v(CH₄) / v(SO₂) = √(64 / 16) = 2', ch4: 'CH₄ (16 g/mol) : rapide', so2: 'SO₂ (64 g/mol) : lent', temp: 'À la même température, le gaz le plus léger diffuse plus vite : v ∝ 1/√M' },
        ru: { vratio: 'v(CH₄) / v(SO₂) = √(64 / 16) = 2', ch4: 'CH₄ (16 г/моль): быстро', so2: 'SO₂ (64 г/моль): медленно', temp: 'При одинаковой температуре лёгкий газ диффундирует быстрее: v ∝ 1/√M' },
        ar: { vratio: 'v(CH₄) / v(SO₂) = √(64 / 16) = 2', ch4: 'CH₄ (16 g/mol): سريع', so2: 'SO₂ (64 g/mol): بطيء', temp: 'عند درجة الحرارة نفسها ينتشر الغاز الأخف أسرع: v ∝ 1/√M' },
        zh: { vratio: 'v(CH₄) / v(SO₂) = √(64 / 16) = 2', ch4: 'CH₄ (16 g/mol)：快', so2: 'SO₂ (64 g/mol)：慢', temp: '同温下较轻的气体扩散更快：v ∝ 1/√M' },
        ku: { vratio: 'v(CH₄) / v(SO₂) = √(64 / 16) = 2', ch4: 'CH₄ (16 g/mol): bilez', so2: 'SO₂ (64 g/mol): hêdî', temp: 'Di heman germahiyê de gaza sivik zûtir belav dibe: v ∝ 1/√M' },
      },
    },
    {
      archetype: 'gas-piston-manometer',
      title: {
        tr: 'Dalton Kısmi Basınçlar ve Gerçek Gazlar',
        en: 'Dalton Partial Pressures & Real Gases',
        de: 'Daltonsches Partialdruckgesetz & reale Gase',
        fr: 'Pressions partielles de Dalton et gaz réels',
        ru: 'Парциальное давление Дальтона и реальные газы',
        ar: 'الضغوط الجزئية لدالتون والغازات الحقيقية',
        zh: '道尔顿分压定律与真实气体范德华修正',
        ku: 'Zextên Beşî yên Dalton û Gazên Rastî',
      },
      caption: {
        tr: 'Karışımdaki her gaz, kabı tek başına dolduruyormuş gibi basınç yapar; toplam basınç kısmi basınçların toplamıdır. Su üstünde toplanan gazın basıncına su buharının basıncı da eklenir.',
        en: 'Each gas in a mixture exerts the pressure it would exert alone; the total pressure is the sum of the partial pressures. A gas collected over water also contains water vapor.',
        de: 'Der Gesamtdruck ist die Summe der Partialdrücke; Gase nähern sich bei hohem T und niedrigem P der Idealität.',
        fr: 'La pression totale est la somme des pressions partielles ; l’idéalité augmente à haute T et basse P.',
        ru: 'Общее давление равно сумме парциальных давлений; газы ближе к идеальным при высоком T и низком P.',
        ar: 'الضغط الكلي يساوي مجموع الضغوط الجزئية؛ يقترب الغاز من المثالية عند درجات حرارة عالية وضغط منخفض.',
        zh: '混合气体总压等于各组分分压之和: Pi = Xi · P总；在高温低压下真实气体最接近理想状态。',
        ku: 'Zexta giştî berhema zextên beşî ye: Pi = Xi . Ptop. Di germahiya bilind û zexta nizm de nêzîkî îdealbûnê dibe.',
      },
      labels: {
        tr: { ptop: 'Ptoplam = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · Ptoplam', water: 'Su üstünde toplanan gaz: Ptoplam = Pgaz + Psu buharı', jt: 'Joule–Thomson: hızla genleşen gerçek gaz soğur' },
        en: { ptop: 'Ptotal = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · Ptotal', water: 'Gas collected over water: Ptotal = Pgas + Pwater vapor', jt: 'Joule–Thomson: a real gas cools as it expands rapidly' },
        de: { ptop: 'Pgesamt = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · Pgesamt', water: 'Über Wasser aufgefangenes Gas: Pgesamt = PGas + PWasserdampf', jt: 'Joule-Thomson: ein reales Gas kühlt bei rascher Expansion ab' },
        fr: { ptop: 'Ptotale = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · Ptotale', water: 'Gaz recueilli sur l’eau : Ptotale = Pgaz + Pvapeur d’eau', jt: 'Joule–Thomson : un gaz réel se refroidit en se détendant' },
        ru: { ptop: 'Pобщ = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · Pобщ', water: 'Газ, собранный над водой: Pобщ = Pгаза + Pпаров воды', jt: 'Джоуль–Томсон: реальный газ охлаждается при быстром расширении' },
        ar: { ptop: 'Ptotal = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · Ptotal', water: 'غاز مجمَّع فوق الماء: Ptotal = Pgas + PH₂O', jt: 'جول–طومسون: الغاز الحقيقي يبرد عند تمدده السريع' },
        zh: { ptop: 'P总 = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · P总', water: '排水集气：P总 = P气 + P水蒸气', jt: '焦耳—汤姆孙：真实气体迅速膨胀时降温' },
        ku: { ptop: 'Pgiştî = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · Pgiştî', water: 'Gaza li ser avê hatî berhevkirin: Pgiştî = Pgaz + Philma avê', jt: 'Joule–Thomson: gaza rastîn dema zû fireh dibe sar dibe' },
      },
    },
  ],
  u14: [
    {
      archetype: 'lab-glassware-setup',
      title: {
        tr: 'Sıvı Çözeltiler ve Derişim Birimleri',
        en: 'Liquid Solutions & Concentration Units',
        de: 'Flüssige Lösungen & Konzentrationseinheiten',
        fr: 'Solutions liquides et unités de concentration',
        ru: 'Жидкие растворы и единицы концентрации',
        ar: 'المحاليل السائلة ووحدات التركيز',
        zh: '液体溶液与化学浓度单位换算',
        ku: 'Helawên Şil û Yekeyên Xestiyê',
      },
      caption: {
        tr: 'Molarite 1 L çözeltideki, molalite 1 kg çözücüdeki çözünen mol sayısıdır; balon joje ölçü çizgisine kadar doldurularak belirli hacimde çözelti hazırlanır.',
        en: 'Molarity is moles of solute per litre of solution, molality per kilogram of solvent; a solution of exact volume is made by filling a volumetric flask to the mark.',
        de: 'Molarität (M = n/V) und Molalität (m = n/kg) mit Lösungsenthalpie-Mechanismen.',
        fr: 'Molarité (M = n/V) et molalité (m = n/kg) avec enthalpie de solvatation.',
        ru: 'Молярность (M = n/V) и моляльность (m = n/кг) со ступенями сольватации.',
        ar: 'المولارية (M = n/V) والمولالية (m = n/kg) مع آليات إنتالبي الذوبان.',
        zh: '物质的量浓度 (M = n/V) 与质量摩尔浓度 (m = n/kg) 及溶剂化水合焓过程。',
        ku: 'Molarîte (M = n/V) û molalîte (m = n/kg) ligel mekanîzmaya entalpiya helandinê.',
      },
      labels: {
        tr: { molar: 'Molarite: M = n / V (L çözelti)', molal: 'Molalite: m = n / kg çözücü', dens: 'M = (% · d · 10) / MA', mix: 'Karıştırma: M₁V₁ + M₂V₂ = Mson · Vson' },
        en: { molar: 'Molarity: M = n / V (L of solution)', molal: 'Molality: m = n / kg of solvent', dens: 'M = (% · d · 10) / molar mass', mix: 'Mixing: M₁V₁ + M₂V₂ = Mfinal · Vfinal' },
        de: { molar: 'Molarität: M = n / V (L Lösung)', molal: 'Molalität: m = n / kg Lösungsmittel', dens: 'M = (% · d · 10) / molare Masse', mix: 'Mischen: M₁V₁ + M₂V₂ = MEnd · VEnd' },
        fr: { molar: 'Molarité : M = n / V (L de solution)', molal: 'Molalité : m = n / kg de solvant', dens: 'M = (% · d · 10) / masse molaire', mix: 'Mélange : M₁V₁ + M₂V₂ = Mf · Vf' },
        ru: { molar: 'Молярность: M = n / V (л раствора)', molal: 'Моляльность: m = n / кг растворителя', dens: 'M = (% · d · 10) / молярная масса', mix: 'Смешивание: M₁V₁ + M₂V₂ = Mкон · Vкон' },
        ar: { molar: 'المولارية: M = n / V (L محلول)', molal: 'المولالية: m = n / kg مذيب', dens: 'M = (% · d · 10) / الكتلة المولية', mix: 'المزج: M₁V₁ + M₂V₂ = Mf · Vf' },
        zh: { molar: '物质的量浓度：M = n / V（L 溶液）', molal: '质量摩尔浓度：m = n / kg 溶剂', dens: 'M = (% · d · 10) / 摩尔质量', mix: '混合：M₁V₁ + M₂V₂ = M终 · V终' },
        ku: { molar: 'Molarîte: M = n / V (L çareserî)', molal: 'Molalîte: m = n / kg helker', dens: 'M = (% · d · 10) / MA', mix: 'Tevlihevkirin: M₁V₁ + M₂V₂ = Mdawî · Vdawî' },
      },
    },
    {
      archetype: 'lab-glassware-setup',
      title: {
        tr: 'Çözeltide İyon Derişimleri',
        en: 'Ion Concentrations in Solution',
        de: 'Ionenkonzentrationen in Lösung',
        fr: 'Concentrations des ions en solution',
        ru: 'Концентрации ионов в растворе',
        ar: 'تراكيز الأيونات في المحلول',
        zh: '溶液中的离子浓度',
        ku: 'Xestiya Îyonan di Çareseriyê de',
      },
      caption: {
        tr: 'Al₂(SO₄)₃ suda tamamen iyonlaşır: 1 mol tuzdan 2 mol Al³⁺ ve 3 mol SO₄²⁻ oluşur; iyon derişimleri tuzun derişiminin 2 ve 3 katıdır.',
        en: 'Al₂(SO₄)₃ dissociates completely in water: 1 mol of the salt gives 2 mol Al³⁺ and 3 mol SO₄²⁻, so the ion concentrations are 2 and 3 times that of the salt.',
        de: 'Vollständige Dissoziation von Salzen: stöchiometrische Ionenverhältnisse in Lösung.',
        fr: 'Dissociation complète des sels dans l’eau et calcul stœchiométrique des ions.',
        ru: 'Полная диссоциация солей: стехиометрические соотношения ионов в водном растворе.',
        ar: 'التفكك الكامل للأملاح: حساب التراكيز الأيونية النسبية في المحاليل.',
        zh: '难电离和完全电离盐在水溶液中完全解离的化学计量比离子浓度计算。',
        ku: 'Veqetîna xwêyan di nav avê de: hesabên xestiya îyonan li gorî katsayiyan.',
      },
      labels: {
        tr: { salt: '1 M Al₂(SO₄)₃ çözeltisi', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: 'Toplam iyon derişimi = 5 M' },
        en: { salt: '1 M Al₂(SO₄)₃ solution', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: 'Total ion concentration = 5 M' },
        de: { salt: '1 M Al₂(SO₄)₃-Lösung', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: 'Gesamte Ionenkonzentration = 5 M' },
        fr: { salt: 'Solution de Al₂(SO₄)₃ à 1 M', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: 'Concentration totale en ions = 5 M' },
        ru: { salt: '1 M раствор Al₂(SO₄)₃', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: 'Суммарная концентрация ионов = 5 M' },
        ar: { salt: 'محلول Al₂(SO₄)₃ بتركيز 1 M', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: 'التركيز الكلي للأيونات = 5 M' },
        zh: { salt: '1 M Al₂(SO₄)₃ 溶液', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: '离子总浓度 = 5 M' },
        ku: { salt: 'Çareseriya 1 M Al₂(SO₄)₃', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: 'Xestiya giştî ya îyonan = 5 M' },
      },
    },
  ],
  u15: [
    {
      archetype: 'phase-heating-curve',
      title: {
        tr: 'Koligatif Özellikler: Kaynama Noktası ve Donma Noktası',
        en: 'Colligative Properties: Boiling & Freezing Shifts',
        de: 'Kolligative Eigenschaften: Siede- und Gefrierpunkt',
        fr: 'Propriétés colligatives: Ébullioscopie et cryoscopie',
        ru: 'Коллигативные свойства: эбулиоскопия и криоскопия',
        ar: 'الخواص التجميعية: ارتفاع درجة الغليان وانخفاض التجمد',
        zh: '稀溶液依数性：沸点升高与凝固点降低曲线',
        ku: 'Taybetmendiyên Kolîgatîf: Kelîn û Cemidîn',
      },
      caption: {
        tr: 'Çözelti saf sudan daha yüksek sıcaklıkta kaynar, daha düşük sıcaklıkta donar; fark çözünen tanecik derişimine bağlıdır.',
        en: 'A solution boils at a higher and freezes at a lower temperature than pure water; the shift depends on the solute particle concentration.',
        de: 'Eine Lösung siedet höher und gefriert tiefer als reines Wasser; die Verschiebung hängt von der Teilchenkonzentration ab.',
        fr: 'Une solution bout plus haut et gèle plus bas que l\'eau pure ; l\'écart dépend de la concentration en particules dissoutes.',
        ru: 'Раствор кипит при более высокой и замерзает при более низкой температуре, чем чистая вода; сдвиг зависит от концентрации частиц.',
        ar: 'يغلي المحلول عند درجة أعلى ويتجمد عند درجة أدنى من الماء النقي؛ ويعتمد الفرق على تركيز جسيمات المذاب.',
        zh: '溶液的沸点比纯水高、凝固点比纯水低；变化量取决于溶质粒子的浓度。',
        ku: 'Çareserî ji ava saf di germahiyeke bilindtir de dikele û di ya nizmtir de dicemide; cudahî bi tîrbûna perçeyan ve girêdayî ye.',
      },
      labels: {
        tr: { dtk: 'ΔTk = Kk·m·i', dtd: 'ΔTd = Kd·m·i', vanthoff: 'i: çözünenin verdiği tanecik sayısı (NaCl için 2)', osmotic: 'Ozmotik basınç: π = i·M·R·T' },
        en: { dtk: 'ΔTb = Kb·m·i', dtd: 'ΔTf = Kf·m·i', vanthoff: 'i: particles per formula unit (2 for NaCl)', osmotic: 'Osmotic pressure: π = i·M·R·T' },
        de: { dtk: 'ΔTs = Ks·m·i', dtd: 'ΔTg = Kg·m·i', vanthoff: 'i: Teilchen pro Formeleinheit (NaCl: 2)', osmotic: 'Osmotischer Druck: π = i·M·R·T' },
        fr: { dtk: 'ΔTéb = Kéb·m·i', dtd: 'ΔTcong = Kcong·m·i', vanthoff: 'i : particules par unité de formule (NaCl : 2)', osmotic: 'Pression osmotique : π = i·M·R·T' },
        ru: { dtk: 'ΔTкип = Kэб·m·i', dtd: 'ΔTзам = Kкр·m·i', vanthoff: 'i: число частиц на формульную единицу (NaCl: 2)', osmotic: 'Осмотическое давление: π = i·M·R·T' },
        ar: { dtk: 'ΔTb = Kb·m·i', dtd: 'ΔTf = Kf·m·i', vanthoff: 'i: عدد الجسيمات لكل وحدة صيغة (NaCl: 2)', osmotic: 'الضغط الأسموزي: π = i·M·R·T' },
        zh: { dtk: 'ΔTb = Kb·m·i', dtd: 'ΔTf = Kf·m·i', vanthoff: 'i：每个化学式单位产生的粒子数（NaCl 为 2）', osmotic: '渗透压：π = i·M·R·T' },
        ku: { dtk: 'ΔTk = Kk·m·i', dtd: 'ΔTd = Kd·m·i', vanthoff: 'i: hejmara perçeyên ku helbûyî dide (ji bo NaCl 2)', osmotic: 'Zexta osmotîk: π = i·M·R·T' },
      },
    },
    {
      archetype: 'phase-heating-curve',
      title: {
        tr: 'Çözünürlük Eğrileri ve Sıcaklık Etkisi',
        en: 'Solubility Curves & Temperature Dependence',
        de: 'Löslichkeitskurven & Temperaturabhängigkeit',
        fr: 'Courbes de solubilité et effet thermique',
        ru: 'Кривые растворимости и влияние температуры',
        ar: 'منحنيات الذائبية وتأثير درجة الحرارة',
        zh: '物质溶解度曲线与温度压力综合影响',
        ku: 'Xêzên Helbûniyê û Bandora Germahiyê',
      },
      caption: {
        tr: 'Katıların çoğunun çözünürlüğü sıcaklıkla artar; gazların suda çözünmesi genellikle ekzotermiktir, bu yüzden çözünürlükleri sıcaklık arttıkça azalır.',
        en: 'The solubility of most solids rises with temperature; dissolving a gas in water is generally exothermic, so gas solubility falls as temperature rises.',
        de: 'Die Löslichkeit der meisten Feststoffe steigt mit der Temperatur; das Lösen von Gasen in Wasser ist meist exotherm, daher sinkt ihre Löslichkeit beim Erwärmen.',
        fr: 'La solubilité de la plupart des solides augmente avec la température ; la dissolution des gaz dans l\'eau est généralement exothermique, donc leur solubilité diminue quand la température augmente.',
        ru: 'Растворимость большинства твёрдых веществ растёт с температурой; растворение газов в воде обычно экзотермично, поэтому их растворимость падает при нагревании.',
        ar: 'تزداد ذائبية معظم المواد الصلبة بارتفاع درجة الحرارة؛ أما ذوبان الغازات في الماء فطارد للحرارة غالبًا، لذا تقل ذائبيتها بارتفاع درجة الحرارة.',
        zh: '多数固体的溶解度随温度升高而增大；气体溶于水通常放热，因此气体溶解度随温度升高而减小。',
        ku: 'Helbûniya piraniya hişkan bi germahiyê zêde dibe; helîna gazan di avê de bi gelemperî ekzotermîk e, loma helbûniya wan bi zêdebûna germahiyê kêm dibe.',
      },
      labels: {
        tr: { endo: 'Katıların çoğu: T↑ çözünürlük↑', exo: 'Gazlar: T↑ çözünürlük↓', henry: 'Henry yasası: gaz basıncı↑ → gazın çözünürlüğü↑', sat: 'Eğri üzeri: doymuş çözelti' },
        en: { endo: 'Most solids: T↑ solubility↑', exo: 'Gases: T↑ solubility↓', henry: 'Henry\'s law: gas pressure↑ → gas solubility↑', sat: 'On the curve: saturated' },
        de: { endo: 'Feststoffe (meist): T↑ Löslichkeit↑', exo: 'Gase: T↑ Löslichkeit↓', henry: 'Henry-Gesetz: Gasdruck↑ → Gaslöslichkeit↑', sat: 'Auf der Kurve: gesättigt' },
        fr: { endo: 'Solides (la plupart) : T↑ solubilité↑', exo: 'Gaz : T↑ solubilité↓', henry: 'Loi de Henry : pression du gaz↑ → solubilité↑', sat: 'Sur la courbe : saturée' },
        ru: { endo: 'Твёрдые вещества: T↑ растворимость↑', exo: 'Газы: T↑ растворимость↓', henry: 'Закон Генри: давление газа↑ → растворимость↑', sat: 'На кривой: насыщенный' },
        ar: { endo: 'معظم المواد الصلبة: T↑ الذائبية↑', exo: 'الغازات: T↑ الذائبية↓', henry: 'قانون هنري: بزيادة ضغط الغاز تزداد ذائبيته', sat: 'على المنحنى: محلول مشبع' },
        zh: { endo: '多数固体：T↑ 溶解度↑', exo: '气体：T↑ 溶解度↓', henry: '亨利定律：气体压强↑ → 气体溶解度↑', sat: '曲线上：饱和溶液' },
        ku: { endo: 'Piraniya hişkan: T↑ helbûnî↑', exo: 'Gaz: T↑ helbûnî↓', henry: 'Zagona Henry: zexta gazê↑ → helbûniya gazê↑', sat: 'Li ser xêzê: çareseriya têr' },
      },
    },
  ],
  u16: [
    {
      archetype: 'potential-energy-reaction',
      title: {
        tr: 'Potansiyel Enerji - Tepkime Koordinatı',
        en: 'Potential Energy - Reaction Coordinate',
        de: 'Potenzielle Energie - Reaktionskoordinate',
        fr: 'Énergie potentielle - Coordonnée de réaction',
        ru: 'Потенциальная энергия - координата реакции',
        ar: 'طاقة الوضع - مسار التفاعل',
        zh: '反应坐标势能分布曲线与活化能屏障',
        ku: 'Enerjiya Potansiyel - Koordînata Bertekê',
      },
      caption: {
        tr: 'Ekzotermik bir tepkimenin enerji profili: ileri ve geri aktifleşme enerjileri ile ΔH = Eai − Eag bağıntısı.',
        en: 'Energy profile of an exothermic reaction: forward and reverse activation energies and ΔH = Eai − Eag.',
        de: 'Energieprofil einer exothermen Reaktion: Aktivierungsenergien der Hin- und Rückreaktion und ΔH = Eai − Eag.',
        fr: 'Profil énergétique d\'une réaction exothermique : énergies d\'activation directe et inverse, ΔH = Eai − Eag.',
        ru: 'Энергетический профиль экзотермической реакции: энергии активации прямой и обратной реакций, ΔH = Eai − Eag.',
        ar: 'مخطط طاقة تفاعل طارد للحرارة: طاقتا التنشيط الأمامية والعكسية والعلاقة ΔH = Eai − Eag.',
        zh: '放热反应的能量图：正、逆反应活化能与 ΔH = Eai − Eag。',
        ku: 'Profîla enerjiyê ya reaksiyoneke ekzotermîk: enerjiyên çalakkirinê yên pêş û paş û ΔH = Eai − Eag.',
      },
      labels: {
        tr: { eai: 'Eai (ileri)', eag: 'Eag (geri)', dh: 'ΔH = Eai − Eag < 0 (ekzotermik)', ak: 'Aktifleşmiş kompleks' },
        en: { eai: 'Eai (forward)', eag: 'Eag (reverse)', dh: 'ΔH = Eai − Eag < 0 (exothermic)', ak: 'Activated complex' },
        de: { eai: 'Eai (hin)', eag: 'Eag (rück)', dh: 'ΔH = Eai − Eag < 0 (exotherm)', ak: 'Aktivierter Komplex' },
        fr: { eai: 'Eai (directe)', eag: 'Eag (inverse)', dh: 'ΔH = Eai − Eag < 0 (exothermique)', ak: 'Complexe activé' },
        ru: { eai: 'Eai (прямая)', eag: 'Eag (обратная)', dh: 'ΔH = Eai − Eag < 0 (экзотермическая)', ak: 'Активированный комплекс' },
        ar: { eai: 'Eai (الأمامي)', eag: 'Eag (العكسي)', dh: 'ΔH = Eai − Eag < 0 (طارد للحرارة)', ak: 'المعقد المنشط' },
        zh: { eai: 'Eai 正反应', eag: 'Eag 逆反应', dh: 'ΔH = Eai − Eag < 0（放热）', ak: '活化络合物' },
        ku: { eai: 'Eai (pêş)', eag: 'Eag (paş)', dh: 'ΔH = Eai − Eag < 0 (ekzotermîk)', ak: 'Kompleksa çalakbûyî' },
      },
    },
    {
      archetype: 'potential-energy-reaction',
      title: {
        tr: 'Hess Yasası ve Standart Oluşum Entalpisi',
        en: 'Hess\'s Law & Standard Enthalpy of Formation',
        de: 'Hessscher Wärmesatz & Bildungsenthalpie',
        fr: 'Loi de Hess et enthalpie standard de formation',
        ru: 'Закон Гесса и энтальпия образования',
        ar: 'قانون هيس وإنتالبي التكوين القياسية',
        zh: '盖斯定律热效应叠加与标准摩尔生成焓',
        ku: 'Zagona Hess û Entalpiya Çêbûnê ya Standard',
      },
      caption: {
        tr: 'Tepkime entalpisi basamakların entalpileri toplamına eşittir; yol bağımsızdır.',
        en: 'The enthalpy of a reaction equals the sum of the enthalpies of its steps; it does not depend on the path.',
        de: 'Die Gesamtreaktionsenthalpie ist die Summe der Teilschritte (Wegunabhängigkeit).',
        fr: 'L\'enthalpie d\'une réaction est la somme des enthalpies de ses étapes ; elle ne dépend pas du chemin suivi.',
        ru: 'Тепловой эффект реакции зависит только от начального и конечного состояний.',
        ar: 'حرارة التفاعل الكلية تساوي مجموع حرارات خطوات التفاعل بمعزل عن المسار.',
        zh: '盖斯定律证明化学反应的焓变仅与始态和终态有关，与反应历程途径无关。',
        ku: 'Entalpiya reaksiyonê bi koma entalpiyên qonaxan re wekhev e; bi rê ve ne girêdayî ye.',
      },
      labels: {
        tr: { hess: 'Hess yasası: ΔH = ΔH₁ + ΔH₂', std: 'Elementler: ΔHf° = 0', rev: 'Ters çevrilirse: −ΔH', mult: 'n ile çarpılırsa: n·ΔH' },
        en: { hess: 'Hess\'s law: ΔH = ΔH₁ + ΔH₂', std: 'Elements: ΔHf° = 0', rev: 'Reversed: −ΔH', mult: 'Multiplied by n: n·ΔH' },
        de: { hess: 'Satz von Hess: ΔH = ΔH₁ + ΔH₂', std: 'Elemente: ΔHf° = 0', rev: 'Umgekehrt: −ΔH', mult: 'Mal n: n·ΔH' },
        fr: { hess: 'Loi de Hess : ΔH = ΔH₁ + ΔH₂', std: 'Éléments : ΔHf° = 0', rev: 'Inversée : −ΔH', mult: 'Multipliée par n : n·ΔH' },
        ru: { hess: 'Закон Гесса: ΔH = ΔH₁ + ΔH₂', std: 'Простые вещества: ΔHf° = 0', rev: 'Обратная реакция: −ΔH', mult: 'Умножение на n: n·ΔH' },
        ar: { hess: 'قانون هس: ΔH = ΔH₁ + ΔH₂', std: 'العناصر: ΔHf° = 0', rev: 'عند العكس: −ΔH', mult: 'عند الضرب في n: n·ΔH' },
        zh: { hess: '盖斯定律：ΔH = ΔH₁ + ΔH₂', std: '单质：ΔHf° = 0', rev: '反应逆写：−ΔH', mult: '乘以 n：n·ΔH' },
        ku: { hess: 'Zagona Hess: ΔH = ΔH₁ + ΔH₂', std: 'Element: ΔHf° = 0', rev: 'Berevajî bibe: −ΔH', mult: 'Bi n were carandin: n·ΔH' },
      },
    },
  ],
  u17: [
    {
      archetype: 'potential-energy-reaction',
      title: {
        tr: 'Katalizör Etkisi ve Aktifleşme Enerjisi',
        en: 'Catalyst Mechanism & Activation Lowering',
        de: 'Katalysatorwirkung & Aktivierungsbarriere',
        fr: 'Action du catalyseur et énergie d\'activation',
        ru: 'Действие катализатора и снижение барьера',
        ar: 'تأثير العامل الحفاز وخفض طاقة التنشيط',
        zh: '催化剂降低活化能途径机理图',
        ku: 'Bandora Katalîzorê û Kêmkirina Enerjiya Çalakkirinê',
      },
      caption: {
        tr: 'Pozitif katalizör eşik enerjisini düşürerek tepkimeyi hızlandırır, ΔH değerini değiştirmez.',
        en: 'Catalysts provide an alternate pathway with lower Ea without altering net enthalpy ΔH.',
        de: 'Katalysatoren senken die Aktivierungsenergie Ea, ohne die Gesamtreaktionsenthalpie ΔH zu ändern.',
        fr: 'Un catalyseur abaisse l\'énergie d\'activation Ea sans modifier l\'enthalpie de réaction ΔH.',
        ru: 'Катализатор снижает барьер активации Ea, не изменяя энтальпию реакции ΔH.',
        ar: 'يخفض العامل الحفاز طاقة التنشيط دون التأثير على إنتالبي التفاعل الكلي ΔH.',
        zh: '正催化剂改变反应历程降低活化能垒 Ea，但决不改变化学反应始终态焓变 ΔH。',
        ku: 'Katalîzor bi kêmkirina enerjiya sînorê leza bertekê zêde dike, ΔH naguherîne.',
      },
      labels: {
        tr: { uncat: 'Katalizörsüz', cat: 'Katalizörlü', dh_const: 'ΔH değişmez', k_inc: 'Katalizör Ea değerini düşürür; hız sabiti k büyür' },
        en: { uncat: 'Uncatalysed', cat: 'Catalysed', dh_const: 'ΔH unchanged', k_inc: 'A catalyst lowers Ea; the rate constant k increases' },
        de: { uncat: 'Ohne Katalysator', cat: 'Mit Katalysator', dh_const: 'ΔH bleibt gleich', k_inc: 'Der Katalysator senkt Ea; die Geschwindigkeitskonstante k steigt' },
        fr: { uncat: 'Sans catalyseur', cat: 'Avec catalyseur', dh_const: 'ΔH inchangée', k_inc: 'Le catalyseur abaisse Ea ; la constante de vitesse k augmente' },
        ru: { uncat: 'Без катализатора', cat: 'С катализатором', dh_const: 'ΔH не меняется', k_inc: 'Катализатор снижает Ea; константа скорости k растёт' },
        ar: { uncat: 'بدون حفاز', cat: 'مع حفاز', dh_const: 'ΔH لا تتغير', k_inc: 'الحفاز يخفض Ea فيزداد ثابت السرعة k' },
        zh: { uncat: '无催化剂', cat: '有催化剂', dh_const: 'ΔH 不变', k_inc: '催化剂降低 Ea，速率常数 k 增大' },
        ku: { uncat: 'Bê katalîzator', cat: 'Bi katalîzator', dh_const: 'ΔH naguhere', k_inc: 'Katalîzator Ea kêm dike; sabîta lezê k mezin dibe' },
      },
    },
    {
      archetype: 'potential-energy-reaction',
      title: {
        tr: 'Tepkime Hız Denklemi ve Yavaş Basamak',
        en: 'Rate Laws & Rate-Determining Step',
        de: 'Geschwindigkeitsgesetz & geschwindigkeitsbestimmender Schritt',
        fr: 'Loi de vitesse et étape cinétiquement limitante',
        ru: 'Кинетическое уравнение и медленная стадия',
        ar: 'قانون السرعة والخطوة المحددة للسرعة',
        zh: '反应速率方程与慢反应决速步骤',
        ku: 'Hevkêşeya Leza Bertekê û Qonaxa Hêdî',
      },
      caption: {
        tr: 'Mekanizmalı tepkimelerde hızı en yüksek aktifleşme enerjisine sahip yavaş basamak belirler.',
        en: 'The elementary step with the highest activation barrier is slowest and dictates the rate law.',
        de: 'Der Schritt mit der höchsten Aktivierungsenergie bestimmt die Gesamtreaktionsgeschwindigkeit.',
        fr: 'L\'étape ayant l\'énergie d\'activation la plus élevée est la plus lente et impose la loi de vitesse.',
        ru: 'Стадия с наибольшей энергией активации является самой медленной и определяет общую скорость.',
        ar: 'الخطوة ذات طاقة التنشيط الأعلى هي الأبطأ وتحدد سرعة التفاعل الإجمالية.',
        zh: '多步复合机理反应的化学反应速率由活化能最高、反应最慢的关键基元步决定。',
        ku: 'Di bertekên mekanîzmî de lezê qonaxa hêdî ya bi enerjiya herî bilind diyar dike.',
      },
      labels: {
        tr: { slow: '1. basamak (yavaş)', fast: '2. basamak (hızlı)', intermediate: 'Ara ürün', rate_eq: 'Hız denklemi yavaş basamağa göre yazılır (Ea₁ > Ea₂)' },
        en: { slow: 'Step 1 (slow)', fast: 'Step 2 (fast)', intermediate: 'Intermediate', rate_eq: 'The rate law is written from the slow step (Ea₁ > Ea₂)' },
        de: { slow: 'Schritt 1 (langsam)', fast: 'Schritt 2 (schnell)', intermediate: 'Zwischenprodukt', rate_eq: 'Das Geschwindigkeitsgesetz folgt aus dem langsamen Schritt (Ea₁ > Ea₂)' },
        fr: { slow: 'Étape 1 (lente)', fast: 'Étape 2 (rapide)', intermediate: 'Intermédiaire', rate_eq: 'La loi de vitesse s\'écrit à partir de l\'étape lente (Ea₁ > Ea₂)' },
        ru: { slow: 'Стадия 1 (медленная)', fast: 'Стадия 2 (быстрая)', intermediate: 'Интермедиат', rate_eq: 'Уравнение скорости записывают по медленной стадии (Ea₁ > Ea₂)' },
        ar: { slow: 'الخطوة 1 (بطيئة)', fast: 'الخطوة 2 (سريعة)', intermediate: 'مركب وسطي', rate_eq: 'يُكتب قانون السرعة من الخطوة البطيئة (Ea₁ > Ea₂)' },
        zh: { slow: '第 1 步（慢）', fast: '第 2 步（快）', intermediate: '中间产物', rate_eq: '速率方程由慢反应步骤写出（Ea₁ > Ea₂）' },
        ku: { slow: 'Qonax 1 (hêdî)', fast: 'Qonax 2 (bilez)', intermediate: 'Berhema navber', rate_eq: 'Wekheviya rêjeyê ji qonaxa hêdî tê nivîsandin (Ea₁ > Ea₂)' },
      },
    },
  ],
  u18: [
    {
      archetype: 'equilibrium-le-chatelier',
      title: {
        tr: 'Kimyasal Denge ve Le Chatelier İlkesi',
        en: 'Chemical Equilibrium & Le Chatelier Shifts',
        de: 'Chemisches Gleichgewicht & Le-Chatelier-Prinzip',
        fr: 'Équilibre chimique et principe de Le Chatelier',
        ru: 'Химическое равновесие и принцип Ле Шателье',
        ar: 'الاتزان الكيميائي ومبدأ لوشاتيليه',
        zh: '动态化学平衡与勒夏特列移动原理',
        ku: 'Hevsengiya Kîmyewî û Prensîba Le Chatelier',
      },
      caption: {
        tr: 'Dengedeki sisteme dış müdahale yapıldığında sistem bu etkiyi azaltacak yöne kayar.',
        en: 'Equilibrium shifts in the direction that counteracts externally applied disturbances.',
        de: 'Ein Gleichgewichtssystem weicht äußeren Zwängen durch Verschiebung entgegen.',
        fr: 'Un système à l\'équilibre soumis à une perturbation évolue pour minimiser cette contrainte.',
        ru: 'Система в равновесии смещается в направлении, ослабляющем внешнее воздействие.',
        ar: 'ينزاح موضع الاتزان في الاتجاه الذي يقلل من أثر المؤثر الخارجي المطبق.',
        zh: '对处于平衡状态的体系施加外界影响，体系将向减弱外界影响的方向移动。',
        ku: 'Gava destwerdanek li sîstema hevseng bê kirin, sîstem ber bi kêmkirina wê bandorê ve diçe.',
      },
      labels: {
        tr: { spike: 'N₂ eklendi', shift: 'Denge ürünlere kayar', kc_t: 'Derişimler değişir, Kc değişmez; Kc yalnızca sıcaklıkla değişir', kp_kc: 'Kp = Kc·(RT)^Δn' },
        en: { spike: 'N₂ added', shift: 'Shifts toward products', kc_t: 'Concentrations change but Kc does not; Kc changes only with temperature', kp_kc: 'Kp = Kc·(RT)^Δn' },
        de: { spike: 'N₂ zugegeben', shift: 'Verschiebung zu den Produkten', kc_t: 'Konzentrationen ändern sich, Kc nicht; Kc hängt nur von der Temperatur ab', kp_kc: 'Kp = Kc·(RT)^Δn' },
        fr: { spike: 'Ajout de N₂', shift: 'Déplacement vers les produits', kc_t: 'Les concentrations changent, pas Kc ; Kc ne dépend que de la température', kp_kc: 'Kp = Kc·(RT)^Δn' },
        ru: { spike: 'Добавлен N₂', shift: 'Сдвиг к продуктам', kc_t: 'Концентрации меняются, Kc — нет; Kc зависит только от температуры', kp_kc: 'Kp = Kc·(RT)^Δn' },
        ar: { spike: 'إضافة N₂', shift: 'انزياح نحو النواتج', kc_t: 'تتغير التراكيز ولا يتغير Kc؛ يتغير Kc بدرجة الحرارة فقط', kp_kc: 'Kp = Kc·(RT)^Δn' },
        zh: { spike: '加入 N₂', shift: '平衡向生成物移动', kc_t: '浓度改变而 Kc 不变；Kc 只随温度变化', kp_kc: 'Kp = Kc·(RT)^Δn' },
        ku: { spike: 'N₂ hat zêdekirin', shift: 'Hevsengî ber bi berheman ve diçe', kc_t: 'Tîrbûn diguherin, Kc naguhere; Kc tenê bi germahiyê diguhere', kp_kc: 'Kp = Kc·(RT)^Δn' },
      },
    },
    {
      archetype: 'equilibrium-le-chatelier',
      title: {
        tr: 'Denge Kesri (Qc) ve Sistem Yönü',
        en: 'Reaction Quotient (Qc) & Shift Direction',
        de: 'Reaktionsquotient Qc & Gleichgewichtsausrichtung',
        fr: 'Quotient réactionnel Qc et évolution',
        ru: 'Коэффициент реакции Qc и направление процесса',
        ar: 'حاصل التفاعل Qc واتجاه حركة النظام',
        zh: '反应商 Qc 与平衡常数判据体系演化',
        ku: 'Qada Hevsengiyê (Qc) û Hêla Sîstemê',
      },
      caption: {
        tr: 'Qc < Kc ise sistem ürünlere (sağa), Qc > Kc ise girenlere (sola) kayarak dengeye ulaşır.',
        en: 'If Qc < Kc reaction moves right; if Qc > Kc reaction moves left to reach dynamic balance.',
        de: 'Wenn Qc < Kc verschiebt sich das System nach rechts; bei Qc > Kc nach links.',
        fr: 'Si Qc < Kc le système évolue vers les produits; si Qc > Kc vers les réactifs.',
        ru: 'Если Qc < Kc реакция идёт вправо к продуктам; если Qc > Kc — влево к реагентам.',
        ar: 'إذا كان Qc < Kc ينزاح التفاعل نحو النواتج، وإذا كان Qc > Kc ينزاح نحو المتفاعلات.',
        zh: '当 Qc < Kc 时反应自发正向进行移向产物；当 Qc > Kc 时反应逆向进行移向反应物。',
        ku: 'Heke Qc < Kc be sîstem ber bi rastê ve, heke Qc > Kc be ber bi çepê ve diçe.',
      },
      labels: {
        tr: { qc_less: 'Qc < Kc: ürünlere (sağa) kayar', qc_eq: 'Qc = Kc: denge', qc_more: 'Qc > Kc: girenlere (sola) kayar', cat_effect: 'Katalizör Kc değerini ve denge derişimlerini değiştirmez' },
        en: { qc_less: 'Qc < Kc: shifts right (products)', qc_eq: 'Qc = Kc: equilibrium', qc_more: 'Qc > Kc: shifts left (reactants)', cat_effect: 'A catalyst changes neither Kc nor the equilibrium concentrations' },
        de: { qc_less: 'Qc < Kc: nach rechts (Produkte)', qc_eq: 'Qc = Kc: Gleichgewicht', qc_more: 'Qc > Kc: nach links (Edukte)', cat_effect: 'Ein Katalysator ändert weder Kc noch die Gleichgewichtskonzentrationen' },
        fr: { qc_less: 'Qc < Kc : vers la droite (produits)', qc_eq: 'Qc = Kc : équilibre', qc_more: 'Qc > Kc : vers la gauche (réactifs)', cat_effect: 'Un catalyseur ne change ni Kc ni les concentrations à l\'équilibre' },
        ru: { qc_less: 'Qc < Kc: вправо (к продуктам)', qc_eq: 'Qc = Kc: равновесие', qc_more: 'Qc > Kc: влево (к реагентам)', cat_effect: 'Катализатор не меняет ни Kc, ни равновесные концентрации' },
        ar: { qc_less: 'Qc < Kc: نحو اليمين (النواتج)', qc_eq: 'Qc = Kc: اتزان', qc_more: 'Qc > Kc: نحو اليسار (المتفاعلات)', cat_effect: 'الحفاز لا يغيّر Kc ولا تراكيز الاتزان' },
        zh: { qc_less: 'Qc < Kc：向右（生成物）移动', qc_eq: 'Qc = Kc：平衡', qc_more: 'Qc > Kc：向左（反应物）移动', cat_effect: '催化剂不改变 Kc，也不改变平衡浓度' },
        ku: { qc_less: 'Qc < Kc: ber bi rastê (berhem)', qc_eq: 'Qc = Kc: hevsengî', qc_more: 'Qc > Kc: ber bi çepê (reaktant)', cat_effect: 'Katalîzator ne Kc ne jî tîrbûnên hevsengiyê diguherîne' },
      },
    },
  ],
  u19: [
    {
      archetype: 'titration-burette-curve',
      title: {
        tr: 'Asit-Baz Titrasyonu ve Büret Düzeneği',
        en: 'Acid-Base Titration & Burette Curve',
        de: 'Säure-Base-Titration & Bürettenkurve',
        fr: 'Titrage acide-base et courbe à la burette',
        ru: 'Кислотно-основное титрование и кривая pH',
        ar: 'معايرة حمض-قاعدة ومنحنى السحاحة',
        zh: '酸碱滴定实验装置与S型pH突跃曲线',
        ku: 'Tîtrasyona Asîd-Baz û Xêza Buretê',
      },
      caption: {
        tr: 'Büretten damlatılan baz ile erlendeki asidin nötralleşmesi ve pH = 7 olan eşdeğerlik noktası.',
        en: 'Titrant dispensed into analyte flask exhibiting a sharp pH transition at equivalence (pH 7).',
        de: 'Zutropfen von Lauge zur Säure mit steilem pH-Sprung am Äquivalenzpunkt (pH 7).',
        fr: 'Ajout de base à la burette avec saut brusque de pH au point d\'équivalence (pH 7).',
        ru: 'Капельное титрование кислоты щёлочью с резким скачком pH в точке эквивалентности (pH 7).',
        ar: 'معايرة الحمض بالقاعدة مع قفزة حادة في الرقم الهيدروجيني عند نقطة التكافؤ (pH 7).',
        zh: '从滴定管逐滴滴入标准碱中和锥形瓶中待测酸，在等当点发生急剧pH突跃 (pH=7)。',
        ku: 'Dilopkirina baz ji buretê û bêalîbûna asîdê li xala pH 7.',
      },
      labels: {
        tr: { burette: '0,1 M NaOH', flask: '100 mL 0,1 M HCl', eqpt: 'Eşdeğerlik noktası: pH = 7', buffer: 'Tampon bölgesi yoktur (kuvvetli asit – kuvvetli baz)' },
        en: { burette: '0.1 M NaOH', flask: '100 mL 0.1 M HCl', eqpt: 'Equivalence point: pH = 7', buffer: 'No buffer region (strong acid – strong base)' },
        de: { burette: '0,1 M NaOH', flask: '100 mL 0,1 M HCl', eqpt: 'Äquivalenzpunkt: pH = 7', buffer: 'Kein Pufferbereich (starke Säure – starke Base)' },
        fr: { burette: 'NaOH 0,1 M', flask: '100 mL de HCl 0,1 M', eqpt: 'Point d\'équivalence : pH = 7', buffer: 'Pas de zone tampon (acide fort – base forte)' },
        ru: { burette: '0,1 M NaOH', flask: '100 мл 0,1 M HCl', eqpt: 'Точка эквивалентности: pH = 7', buffer: 'Буферной области нет (сильная кислота – сильное основание)' },
        ar: { burette: '0.1 M NaOH', flask: '100 mL من HCl 0.1 M', eqpt: 'نقطة التكافؤ: pH = 7', buffer: 'لا توجد منطقة منظِّمة (حمض قوي – قاعدة قوية)' },
        zh: { burette: '0.1 M NaOH', flask: '100 mL 0.1 M HCl', eqpt: '化学计量点：pH = 7', buffer: '无缓冲区（强酸–强碱）' },
        ku: { burette: '0,1 M NaOH', flask: '100 mL 0,1 M HCl', eqpt: 'Xala wekheviyê: pH = 7', buffer: 'Herêma tampon tune (asîda xurt – baza xurt)' },
      },
    },
    {
      archetype: 'titration-burette-curve',
      title: {
        tr: 'Zayıf Asit İyonlaşması ve Tampon Çözeltiler',
        en: 'Weak Acid Dissociation & Buffer Solutions',
        de: 'Schwache Säuren & Pufferlösungen',
        fr: 'Acides faibles et solutions tampons',
        ru: 'Диссоциация слабых кислот и буферные растворы',
        ar: 'تأين الأحماض الضعيفة والمحاليل المنظمة',
        zh: '弱酸电离平衡常数 Ka 与缓冲溶液稳定机理',
        ku: 'Îyonîzasyona Asîda Qels û Helawên Tampon',
      },
      caption: {
        tr: 'Zayıf asit seyreltildikçe iyonlaşma yüzdesi artar; tampon çözelti pH değişimine direnir.',
        en: 'Dilution increases weak acid ionization percentage; buffers resist external pH fluctuations.',
        de: 'Verdünnung steigert den Dissoziationsgrad schwacher Säuren; Puffer stabilisieren den pH.',
        fr: 'La dilution augmente le pourcentage d\'ionisation ; les tampons résistent aux variations de pH.',
        ru: 'Разбавление увеличивает степень ионизации; буферные системы сопротивляются сдвигам pH.',
        ar: 'يزداد تفكك الحمض الضعيف بالتخفيف؛ وتقاوم المحاليل المنظمة التغير في الرقم الهيدروجيني.',
        zh: '根据奥斯特瓦尔德稀释定律弱酸越稀释解离度越高；缓冲对强烈抵抗外加酸碱pH骤变。',
        ku: 'Bi tenikkirinê re ji sedî ya îyonîzasyona asîda qels zêde dibe; tampon li hember guherîna pH radiweste.',
      },
      labels: {
        tr: { henderson: 'Tampon bölgesinde: pH = pKa + log([tuz]/[asit])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: 'Seyreltme: iyonlaşma yüzdesi artar', salt_hydro: 'Eşdeğerlik: pH > 7 (tuz hidrolizi)' },
        en: { henderson: 'In the buffer region: pH = pKa + log([salt]/[acid])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: 'Dilution: percent ionisation rises', salt_hydro: 'Equivalence: pH > 7 (salt hydrolysis)' },
        de: { henderson: 'Im Pufferbereich: pH = pKa + log([Salz]/[Säure])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: 'Verdünnung: Dissoziationsgrad steigt', salt_hydro: 'Äquivalenz: pH > 7 (Salzhydrolyse)' },
        fr: { henderson: 'Zone tampon : pH = pKa + log([sel]/[acide])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: 'Dilution : le pourcentage d\'ionisation augmente', salt_hydro: 'Équivalence : pH > 7 (hydrolyse du sel)' },
        ru: { henderson: 'В буферной области: pH = pKa + lg([соль]/[кислота])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: 'Разбавление: степень ионизации растёт', salt_hydro: 'Эквивалентность: pH > 7 (гидролиз соли)' },
        ar: { henderson: 'في المنطقة المنظِّمة: pH = pKa + log([الملح]/[الحمض])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: 'التخفيف: تزداد نسبة التأين', salt_hydro: 'التكافؤ: pH > 7 (تميّه الملح)' },
        zh: { henderson: '缓冲区：pH = pKa + lg([盐]/[酸])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: '稀释：电离度增大', salt_hydro: '化学计量点：pH > 7（盐类水解）' },
        ku: { henderson: 'Di herêma tampon de: pH = pKa + log([xwê]/[asîd])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: 'Tenikkirin: sedî ya îyonîzasyonê zêde dibe', salt_hydro: 'Wekhevî: pH > 7 (hîdrolîza xwêyê)' },
      },
    },
  ],
  u20: [
    {
      archetype: 'lab-glassware-setup',
      title: {
        tr: 'Çözünürlük Dengesi (Kçç) ve Çökelme',
        en: 'Solubility Product (Ksp) & Precipitation',
        de: 'Löslichkeitsprodukt (Ksp) & Fällung',
        fr: 'Produit de solubilité (Ksp) et précipitation',
        ru: 'Произведение растворимости (Ksp) и осаждение',
        ar: 'حاصل الإذابة (Ksp) والترسيب',
        zh: '难溶电解质沉淀溶解平衡常数 Ksp',
        ku: 'Hevsengiya Helbûniyê (Ksp) û Nişîn',
      },
      caption: {
        tr: 'İyon çarpımı Qi > Kçç olduğunda sistem doygunluğu aşar ve çökelme meydana gelir.',
        en: 'Precipitation occurs whenever ionic product Qi exceeds the equilibrium solubility constant Ksp.',
        de: 'Fällung tritt ein, sobald das Ionenprodukt Qi das Löslichkeitsprodukt Ksp überschreitet.',
        fr: 'La précipitation se produit dès que le produit ionique Qi dépasse la constante Ksp.',
        ru: 'Осадок выпадает, когда ионное произведение Qi превышает константу растворимости Ksp.',
        ar: 'يحدث الترسيب عندما يتجاوز الحاصل الأيوني Qi ثابت حاصل الإذابة Ksp.',
        zh: '当溶液离子浓度幂乘积 Qi 超过溶度积常数 Ksp 时体系处于过饱和状态析出沉淀。',
        ku: 'Dema ku berhema îyonan Qi > Ksp bibe, sîstem têrbûnê derbas dike û nişîn pêk tê.',
      },
      labels: {
        tr: { ksp_xy: 'XY: Kçç = s²', ksp_xy2: 'XY₂: Kçç = 4s³', ksp_x2y3: 'X₂Y₃: Kçç = 108s⁵', q_precip: 'Qi > Kçç ise çökelme olur; Qi = Kçç ise çözelti doygundur' },
        en: { ksp_xy: 'XY: Ksp = s²', ksp_xy2: 'XY₂: Ksp = 4s³', ksp_x2y3: 'X₂Y₃: Ksp = 108s⁵', q_precip: 'Qi > Ksp: a precipitate forms; Qi = Ksp: saturated solution' },
        de: { ksp_xy: 'XY: Ksp = s²', ksp_xy2: 'XY₂: Ksp = 4s³', ksp_x2y3: 'X₂Y₃: Ksp = 108s⁵', q_precip: 'Qi > Ksp: Niederschlag fällt aus; Qi = Ksp: gesättigte Lösung' },
        fr: { ksp_xy: 'XY : Ksp = s²', ksp_xy2: 'XY₂ : Ksp = 4s³', ksp_x2y3: 'X₂Y₃ : Ksp = 108s⁵', q_precip: 'Qi > Ksp : un précipité se forme ; Qi = Ksp : solution saturée' },
        ru: { ksp_xy: 'XY: Ksp = s²', ksp_xy2: 'XY₂: Ksp = 4s³', ksp_x2y3: 'X₂Y₃: Ksp = 108s⁵', q_precip: 'Qi > Ksp: выпадает осадок; Qi = Ksp: насыщенный раствор' },
        ar: { ksp_xy: 'XY: Ksp = s²', ksp_xy2: 'XY₂: Ksp = 4s³', ksp_x2y3: 'X₂Y₃: Ksp = 108s⁵', q_precip: 'Qi > Ksp: يتكوّن راسب؛ Qi = Ksp: محلول مشبع' },
        zh: { ksp_xy: 'XY：Ksp = s²', ksp_xy2: 'XY₂：Ksp = 4s³', ksp_x2y3: 'X₂Y₃：Ksp = 108s⁵', q_precip: 'Qi > Ksp：有沉淀生成；Qi = Ksp：溶液饱和' },
        ku: { ksp_xy: 'XY: Ksp = s²', ksp_xy2: 'XY₂: Ksp = 4s³', ksp_x2y3: 'X₂Y₃: Ksp = 108s⁵', q_precip: 'Qi > Ksp: nişîn çêdibe; Qi = Ksp: çareserî têr e' },
      },
    },
    {
      archetype: 'lab-glassware-setup',
      title: {
        tr: 'Ortak İyon Etkisi ve Çözünürlüğün Azalması',
        en: 'Common-Ion Effect on Solubility',
        de: 'Gleichioniger Effekt & Löslichkeitsabnahme',
        fr: 'Effet d\'ion commun sur la solubilité',
        ru: 'Эффект одноимённого иона',
        ar: 'تأثير الأيون المشترك على الذائبية',
        zh: '同离子效应显著抑制电解质微观溶解度',
        ku: 'Bandora Îyona Hevpar û Kêmbûna Helbûniyê',
      },
      caption: {
        tr: 'Ortak iyon çözünürlüğü azaltır; ancak çözünürlük çarpımı sabiti Kçç değişmez.',
        en: 'Presence of a common ion suppresses molar solubility without modifying Ksp constant.',
        de: 'Gleichionige Zusätze senken die Löslichkeit, lassen aber Ksp unberührt.',
        fr: 'L\'ajout d\'un ion commun diminue la solubilité sans modifier la constante Ksp.',
        ru: 'Присутствие одноимённого иона снижает растворимость, но константа Ksp неизменна.',
        ar: 'يقلل الأيون المشترك الذائبية لكن ثابت حاصل الإذابة Ksp يبقى ثابتاً.',
        zh: '加入含同离子的强电解质会使平衡逆向移动大幅降低溶解度，但 Ksp 恒定不变。',
        ku: 'Îyona hevpar helbûniyê kêm dike; lê sabîta Ksp naguhere.',
      },
      labels: {
        tr: { common: 'Ortak iyon Cl⁻ dengeyi katı AgCl yönüne kaydırır', pure: 'Saf suda: çözünürlük büyük', ion_sol: 'NaCl çözeltisinde: çözünürlük küçük', ksp_const: 'Kçç değişmez; yalnızca sıcaklıkla değişir' },
        en: { common: 'The common ion Cl⁻ shifts the equilibrium toward solid AgCl', pure: 'In pure water: higher solubility', ion_sol: 'In NaCl solution: lower solubility', ksp_const: 'Ksp does not change; it changes only with temperature' },
        de: { common: 'Das gleichionige Cl⁻ verschiebt das Gleichgewicht zum festen AgCl', pure: 'In reinem Wasser: höhere Löslichkeit', ion_sol: 'In NaCl-Lösung: geringere Löslichkeit', ksp_const: 'Ksp bleibt gleich; es ändert sich nur mit der Temperatur' },
        fr: { common: 'L\'ion commun Cl⁻ déplace l\'équilibre vers AgCl solide', pure: 'Dans l\'eau pure : solubilité plus grande', ion_sol: 'Dans NaCl : solubilité plus faible', ksp_const: 'Ksp ne change pas ; il ne dépend que de la température' },
        ru: { common: 'Одноимённый ион Cl⁻ смещает равновесие к твёрдому AgCl', pure: 'В чистой воде: растворимость больше', ion_sol: 'В растворе NaCl: растворимость меньше', ksp_const: 'Ksp не меняется; он зависит только от температуры' },
        ar: { common: 'الأيون المشترك Cl⁻ يزيح الاتزان نحو AgCl الصلب', pure: 'في الماء النقي: ذائبية أكبر', ion_sol: 'في محلول NaCl: ذائبية أقل', ksp_const: 'Ksp لا يتغير؛ يتغير بدرجة الحرارة فقط' },
        zh: { common: '同离子 Cl⁻ 使平衡向固体 AgCl 方向移动', pure: '纯水中：溶解度较大', ion_sol: 'NaCl 溶液中：溶解度较小', ksp_const: 'Ksp 不变；它只随温度变化' },
        ku: { common: 'Îyona hevpar Cl⁻ hevsengiyê ber bi AgCl ya hişk ve dibe', pure: 'Di ava saf de: helbûnî mezin e', ion_sol: 'Di çareseriya NaCl de: helbûnî biçûk e', ksp_const: 'Ksp naguhere; tenê bi germahiyê diguhere' },
      },
    },
  ],
  u21: [
    {
      archetype: 'galvanic-daniell-cell',
      title: {
        tr: 'Daniell Galvanik Pili ve Elektron Akışı',
        en: 'Daniell Galvanic Cell & Electron Flow',
        de: 'Daniell-Element & Elektronenfluss',
        fr: 'Pile galvanique de Daniell et flux d\'électrons',
        ru: 'Гальванический элемент Даниэля и ток',
        ar: 'خلية دانييل الجلفانية وتدفق الإلكترونات',
        zh: '丹尼尔铜锌原电池与外电路电子流动',
        ku: 'Pîla Galvanîk a Daniell û Herikîna Elektronan',
      },
      caption: {
        tr: 'Zn anotta yükseltgenir, Cu²⁺ katotta indirgenir; dış devrede elektron anottan katoda akar.',
        en: 'Zn oxidizes at anode; Cu²⁺ reduces at cathode; electrons flow from anode to cathode via wire.',
        de: 'Zn oxidiert an der Anode; Cu²⁺ wird an der Kathode reduziert; Elektronen fließen von Anode zu Kathode.',
        fr: 'Zn s\'oxyde à l\'anode ; Cu²⁺ se réduit à la cathode ; les électrons circulent de l\'anode à la cathode.',
        ru: 'Цинковый анод окисляется, на медном катоде восстанавливаются ионы Cu²⁺; электроны идут от анода к катоду.',
        ar: 'يتأكسد الخارصين عند المصعد، وتختزل أيونات النحاس عند المهبط؛ وتتدفق الإلكترونات عبر السلك.',
        zh: '锌电极在阳极失电子氧化溶解，铜离子在阴极得电子还原析出，外电路电子由负极流向正极。',
        ku: 'Zn li anotê tê bilindkirin, Cu li katotê tê daxistin; elektron ji anotê diçin katotê.',
      },
      labels: {
        tr: { anode: 'Anot (−): Zn → Zn²⁺ + 2e⁻', cathode: 'Katot (+): Cu²⁺ + 2e⁻ → Cu', bridge: 'Tuz köprüsü (KNO₃)', volt: 'Elektronlar dış devrede anottan katoda akar; E°pil = 1,10 V' },
        en: { anode: 'Anode (−): Zn → Zn²⁺ + 2e⁻', cathode: 'Cathode (+): Cu²⁺ + 2e⁻ → Cu', bridge: 'Salt bridge (KNO₃)', volt: 'Electrons flow from anode to cathode in the wire; E°cell = 1.10 V' },
        de: { anode: 'Anode (−): Zn → Zn²⁺ + 2e⁻', cathode: 'Kathode (+): Cu²⁺ + 2e⁻ → Cu', bridge: 'Salzbrücke (KNO₃)', volt: 'Elektronen fließen im Draht von der Anode zur Kathode; E° = 1,10 V' },
        fr: { anode: 'Anode (−) : Zn → Zn²⁺ + 2e⁻', cathode: 'Cathode (+) : Cu²⁺ + 2e⁻ → Cu', bridge: 'Pont salin (KNO₃)', volt: 'Les électrons vont de l\'anode à la cathode par le fil ; E° = 1,10 V' },
        ru: { anode: 'Анод (−): Zn → Zn²⁺ + 2e⁻', cathode: 'Катод (+): Cu²⁺ + 2e⁻ → Cu', bridge: 'Солевой мостик (KNO₃)', volt: 'Электроны идут по проводу от анода к катоду; E° = 1,10 В' },
        ar: { anode: 'المصعد (−): Zn → Zn²⁺ + 2e⁻', cathode: 'المهبط (+): Cu²⁺ + 2e⁻ → Cu', bridge: 'القنطرة الملحية (KNO₃)', volt: 'تنتقل الإلكترونات في السلك من المصعد إلى المهبط؛ E° = 1.10 V' },
        zh: { anode: '阳极（负极）：Zn → Zn²⁺ + 2e⁻', cathode: '阴极（正极）：Cu²⁺ + 2e⁻ → Cu', bridge: '盐桥 (KNO₃)', volt: '电子在导线中由阳极流向阴极；E° = 1.10 V' },
        ku: { anode: 'Anot (−): Zn → Zn²⁺ + 2e⁻', cathode: 'Katot (+): Cu²⁺ + 2e⁻ → Cu', bridge: 'Pira xwê (KNO₃)', volt: 'Elektron di têlê de ji anotê diçin katotê; E° = 1,10 V' },
      },
    },
    {
      archetype: 'galvanic-daniell-cell',
      title: {
        tr: 'Derişim Pilleri',
        en: 'Concentration Cells',
        de: 'Konzentrationszellen',
        fr: 'Piles de concentration',
        ru: 'Концентрационные элементы',
        ar: 'خلايا التركيز',
        zh: '浓差电池',
        ku: 'Pîlên Xestiyê',
      },
      caption: {
        tr: 'Gerilimi yalnızca derişim farkı oluşturur. Derişimi az olan kap anot, derişik kap katottur.',
        en: 'The voltage comes only from the concentration difference. The less concentrated half-cell is the anode, the concentrated one the cathode.',
        de: 'Die Spannung entsteht nur durch den Konzentrationsunterschied. Die verdünnte Halbzelle ist die Anode, die konzentrierte die Kathode.',
        fr: 'La tension provient uniquement de la différence de concentration. La demi-pile la moins concentrée est l\'anode, la plus concentrée la cathode.',
        ru: 'Напряжение создаётся только разностью концентраций. Полуэлемент с меньшей концентрацией — анод, с большей — катод.',
        ar: 'ينشأ الجهد من فرق التركيز فقط. النصف الأقل تركيزًا هو المصعد والنصف المركز هو المهبط.',
        zh: '电压只来自浓度差。稀溶液一侧为阳极，浓溶液一侧为阴极。',
        ku: 'Volt tenê ji cudahiya xestiyê çêdibe. Qaba bi xestiya kêm anot e, qaba xest katot e.',
      },
      labels: {
        tr: { nernst: 'Gerilimi yalnızca derişim farkı oluşturur', conc_anode: 'Anot (−): seyreltik kap', conc_cath: 'Katot (+): derişik kap', stop: 'Derişimler eşitlenince gerilim sıfır olur' },
        en: { nernst: 'The voltage comes only from the concentration difference', conc_anode: 'Anode (−): dilute side', conc_cath: 'Cathode (+): concentrated side', stop: 'When the concentrations become equal the voltage is zero' },
        de: { nernst: 'Die Spannung entsteht nur durch den Konzentrationsunterschied', conc_anode: 'Anode (−): verdünnte Halbzelle', conc_cath: 'Kathode (+): konzentrierte Halbzelle', stop: 'Bei gleichen Konzentrationen ist die Spannung null' },
        fr: { nernst: 'La tension vient uniquement de l\'écart de concentration', conc_anode: 'Anode (−) : demi-pile diluée', conc_cath: 'Cathode (+) : demi-pile concentrée', stop: 'À concentrations égales, la tension est nulle' },
        ru: { nernst: 'Напряжение создаёт только разность концентраций', conc_anode: 'Анод (−): разбавленный раствор', conc_cath: 'Катод (+): концентрированный раствор', stop: 'При равных концентрациях напряжение равно нулю' },
        ar: { nernst: 'ينشأ الجهد من فرق التركيز فقط', conc_anode: 'المصعد (−): المحلول المخفف', conc_cath: 'المهبط (+): المحلول المركز', stop: 'عند تساوي التركيزين يصبح الجهد صفرًا' },
        zh: { nernst: '电压只来自浓度差', conc_anode: '阳极（负极）：稀溶液一侧', conc_cath: '阴极（正极）：浓溶液一侧', stop: '两侧浓度相等时电压为零' },
        ku: { nernst: 'Voltaj tenê ji cudahiya tîrbûnê tê', conc_anode: 'Anot (−): qaba tenik', conc_cath: 'Katot (+): qaba tîr', stop: 'Dema tîrbûn wekhev bibin voltaj dibe sifir' },
      },
    },
  ],
  u22: [
    {
      archetype: 'electrolysis-hoffman-cell',
      title: {
        tr: 'Hoffman Voltametresi ve Suyun Elektrolizi',
        en: 'Hoffman Apparatus & Water Electrolysis',
        de: 'Hoffmanscher Zersetzungsapparat & Elektrolyse',
        fr: 'Voltamètre de Hoffman et électrolyse de l\'eau',
        ru: 'Вольтаметр Гофмана и электролиз воды',
        ar: 'فولتمتر هوفمان والتحليل الكهربائي للماء',
        zh: '霍夫曼电解水装置与 2:1 体积氢氧比',
        ku: 'Voltametreya Hoffman û Elektrolîza Avê',
      },
      caption: {
        tr: 'Elektrikle suyun ayrışması: Katotta 2 hacim H₂ gazı, anotta 1 hacim O₂ gazı toplanır.',
        en: 'Nonspontaneous water splitting generating 2 volumes of H₂ at cathode per 1 volume of O₂ at anode.',
        de: 'Nicht-spontane Wasserspaltung: 2 Volumenteile H₂ an der Kathode und 1 Teil O₂ an der Anode.',
        fr: 'Décomposition forcée de l\'eau : 2 volumes de H₂ à la cathode pour 1 volume de O₂ à l\'anode.',
        ru: 'Электролиз воды: на катоде выделяется 2 объёма H₂, на аноде — 1 объём O₂.',
        ar: 'التحليل الكهربائي للماء: يتجمع ضعف حجم الهيدروجين عند المهبط مقارنة بالأكسجين عند المصعد.',
        zh: '外加直流电强制分解水：阴极析出2体积氢气，阳极析出1体积氧气（严格 2:1 气体比例）。',
        ku: 'Veqetandina avê bi elektrîkê: li katotê 2 qebare H₂, li anotê 1 qebare O₂ kom dibe.',
      },
      labels: {
        tr: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻ (indirgenme)', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻ (yükseltgenme)', faraday: 'Net: 2H₂O → 2H₂ + O₂ (4 mol e⁻ = 4 F)', dc: 'Doğru akım kaynağı' },
        en: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻ (reduction)', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻ (oxidation)', faraday: 'Overall: 2H₂O → 2H₂ + O₂ (4 mol e⁻ = 4 F)', dc: 'DC power supply' },
        de: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻ (Reduktion)', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻ (Oxidation)', faraday: 'Gesamt: 2H₂O → 2H₂ + O₂ (4 mol e⁻ = 4 F)', dc: 'Gleichstromquelle' },
        fr: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻ (réduction)', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻ (oxydation)', faraday: 'Bilan : 2H₂O → 2H₂ + O₂ (4 mol e⁻ = 4 F)', dc: 'Générateur de courant continu' },
        ru: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻ (восстановление)', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻ (окисление)', faraday: 'Итог: 2H₂O → 2H₂ + O₂ (4 моль e⁻ = 4 F)', dc: 'Источник постоянного тока' },
        ar: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻ (اختزال)', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻ (أكسدة)', faraday: 'المحصلة: 2H₂O → 2H₂ + O₂ (4 mol e⁻ = 4 F)', dc: 'مصدر تيار مستمر' },
        zh: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻（还原）', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻（氧化）', faraday: '总反应：2H₂O → 2H₂ + O₂（4 mol e⁻ = 4 F）', dc: '直流电源' },
        ku: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻ (redûksiyon)', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻ (oksîdasyon)', faraday: 'Tevahî: 2H₂O → 2H₂ + O₂ (4 mol e⁻ = 4 F)', dc: 'Çavkaniya herikîna rasterast' },
      },
    },
    {
      archetype: 'electrolysis-hoffman-cell',
      title: {
        tr: 'Faraday Kanunları ve Kurban Elektrot',
        en: 'Faraday\'s Laws & Sacrificial Anodes',
        de: 'Faradaysche Gesetze & Opferanoden',
        fr: 'Lois de Faraday et anodes sacrificielles',
        ru: 'Законы Фарадея и протекторная защита',
        ar: 'قوانين فاراداي والقطب المضحي',
        zh: '法拉第电沉积计算与牺牲阳极阴极保护',
        ku: 'Zagonên Faraday û Elektroda Qurbanê',
      },
      caption: {
        tr: 'm = (I·t·MA) / (96500·z). Korozyonu önlemek için demire daha aktif bir kurban elektrot bağlanır.',
        en: 'Deposited mass calculation and cathodic protection by coupling more active sacrificial metals.',
        de: 'Massenberechnung nach Faraday und kathodischer Schutz durch unedlere Opferanoden.',
        fr: 'Calcul de masse électrodéposée et protection cathodique par anode sacrificielle plus réactive.',
        ru: 'Расчёт массы по Фарадею и катодная защита с помощью более активного металла-протектора.',
        ar: 'حساب كتلة المادة المترسبة وحماية المعادن من التآكل بربطها بقطب مضحي أكثر نشاطاً.',
        zh: '金属电解沉积质量公式与连接更活泼金属（牺牲阳极法）防止钢铁阴极腐蚀生锈。',
        ku: 'Hesaba komê bi qanûna Faraday û girêdana elektroda qurbanê ji bo rêgirtina korozyonê.',
      },
      labels: {
        tr: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: 'Kurban elektrot: Mg (anot, yükseltgenir)', fe_pipe: 'Demir boru: katot, korunur', electroplate: 'Elektrolizle kaplama: Ag⁺ + e⁻ → Ag' },
        en: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: 'Sacrificial anode: Mg (oxidised)', fe_pipe: 'Iron pipe: cathode, protected', electroplate: 'Electroplating: Ag⁺ + e⁻ → Ag' },
        de: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: 'Opferanode: Mg (wird oxidiert)', fe_pipe: 'Eisenrohr: Kathode, geschützt', electroplate: 'Galvanisieren: Ag⁺ + e⁻ → Ag' },
        fr: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: 'Anode sacrificielle : Mg (oxydé)', fe_pipe: 'Tuyau en fer : cathode, protégé', electroplate: 'Galvanoplastie : Ag⁺ + e⁻ → Ag' },
        ru: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: 'Жертвенный анод: Mg (окисляется)', fe_pipe: 'Железная труба: катод, защищена', electroplate: 'Гальваническое покрытие: Ag⁺ + e⁻ → Ag' },
        ar: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: 'القطب المضحي: Mg (يتأكسد)', fe_pipe: 'أنبوب الحديد: مهبط، محمي', electroplate: 'الطلاء الكهربائي: Ag⁺ + e⁻ → Ag' },
        zh: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: '牺牲阳极：Mg（被氧化）', fe_pipe: '铁管：阴极，受保护', electroplate: '电镀：Ag⁺ + e⁻ → Ag' },
        ku: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: 'Elektroda qurban: Mg (oksîde dibe)', fe_pipe: 'Lûleya hesin: katot, tê parastin', electroplate: 'Rûkêşkirina elektrolîtîk: Ag⁺ + e⁻ → Ag' },
      },
    },
  ],
  u23: [
    {
      archetype: 'vsepr-molecular-geometry',
      title: {
        tr: 'VSEPR Molekül Geometrisi ve Bağ Açıları',
        en: 'VSEPR Molecular Geometry & Bond Angles',
        de: 'VSEPR-Geometrien & Bindungswinkel',
        fr: 'Géométrie VSEPR et angles de liaison',
        ru: 'Геометрия молекул VSEPR и углы связей',
        ar: 'هندسة الجزيئات VSEPR وزوايا الروابط',
        zh: 'VSEPR价层电子对互斥理论分子立体构型',
        ku: 'Geometriya Molekûlan a VSEPR û Goşeyên Bendan',
      },
      caption: {
        tr: 'AX₂ doğrusal (180°), AX₃ düzlem üçgen (120°), AX₄ düzgün dörtyüzlü (109,5°), AX₃E üçgen piramit (107°), AX₂E₂ kırık doğru (104,5°).',
        en: 'Electron pair repulsion shaping linear (180°), trigonal (120°), tetrahedral (109.5°), and bent (104.5°).',
        de: 'Abstoßung der Elektronenpaare: linear, trigonal planar, tetraedrisch und gewinkelt.',
        fr: 'Répulsion des doublets: linéaire (180°), trigonal (120°), tétraédrique (109.5°) et coudé (104.5°).',
        ru: 'Отталкивание электронных пар: линейная, плоско-треугольная, тетраэдрическая и угловая.',
        ar: 'تنافر أزواج الإلكترونات: خطي، مثلث مستوٍ، رباعي الأوجه، ومنحنٍ.',
        zh: '中心原子周围成键与孤对电子斥力决定空间立体对称几何构型与特征键角。',
        ku: 'Goşeyên bendan li gorî VSEPR: rast (180°), sêgoşe (120°), çaralî (109.5°) û xwar (104.5°).',
      },
      labels: {
        tr: { ax2: 'AX₂ doğrusal 180°', ax3: 'AX₃ düzlem üçgen 120°', ax4: 'AX₄ düzgün dörtyüzlü 109,5°', ax2e2: 'AX₂E₂ kırık doğru 104,5°' },
        en: { ax2: 'AX₂ linear 180°', ax3: 'AX₃ trigonal planar 120°', ax4: 'AX₄ tetrahedral 109.5°', ax2e2: 'AX₂E₂ bent 104.5°' },
        de: { ax2: 'AX₂ linear 180°', ax3: 'AX₃ trigonal-planar 120°', ax4: 'AX₄ tetraedrisch 109,5°', ax2e2: 'AX₂E₂ gewinkelt 104,5°' },
        fr: { ax2: 'AX₂ linéaire 180°', ax3: 'AX₃ trigonale plane 120°', ax4: 'AX₄ tétraédrique 109,5°', ax2e2: 'AX₂E₂ coudée 104,5°' },
        ru: { ax2: 'AX₂ линейная 180°', ax3: 'AX₃ плоский треугольник 120°', ax4: 'AX₄ тетраэдр 109,5°', ax2e2: 'AX₂E₂ угловая 104,5°' },
        ar: { ax2: 'AX₂ خطي 180°', ax3: 'AX₃ مثلث مستوٍ 120°', ax4: 'AX₄ رباعي الأوجه 109.5°', ax2e2: 'AX₂E₂ منحنٍ 104.5°' },
        zh: { ax2: 'AX₂ 直线形 180°', ax3: 'AX₃ 平面三角形 120°', ax4: 'AX₄ 正四面体形 109.5°', ax2e2: 'AX₂E₂ V 形 104.5°' },
        ku: { ax2: 'AX₂ xêzik 180°', ax3: 'AX₃ sêgoşeya rast 120°', ax4: 'AX₄ çarrû 109,5°', ax2e2: 'AX₂E₂ xwar 104,5°' },
      },
    },
    {
      archetype: 'vsepr-molecular-geometry',
      title: {
        tr: 'Karbonun Allotropları: Elmas ve Grafit',
        en: 'Carbon Allotropes: Diamond & Graphite',
        de: 'Kohlenstoffallotrope: Diamant & Graphit',
        fr: 'Allotropes du carbone: Diamant et graphite',
        ru: 'Аллотропы углерода: алмаз и графит',
        ar: 'متآصلات الكربون: الماس والجرافيت',
        zh: '碳同素异形体晶体结构：金刚石与石墨',
        ku: 'Allotropên Karbonê: Elmas û Grafît',
      },
      caption: {
        tr: 'Elmas sp3 hibritleşmesiyle yalıtkandır; grafit sp2 tabakaları ve pi elektronlarıyla elektriği iletir.',
        en: 'Diamond (sp3) is an electrical insulator; graphite (sp2) conducts via delocalized pi electrons.',
        de: 'Diamant (sp3) isoliert; Graphit (sp2) leitet über delokalisierte Pi-Elektronen.',
        fr: 'Le diamant (sp3) est isolant; le graphite (sp2) est conducteur grâce aux électrons pi délocalisés.',
        ru: 'Алмаз (sp3) — диэлектрик; графит (sp2) проводит ток за счёт делокализованных пи-электронов.',
        ar: 'الماس (sp3) عازل للكهرباء؛ الجرافيت (sp2) موصل بسبب إلكترونات باي الحرة.',
        zh: '金刚石以 sp3 杂化形成超硬绝缘网络；石墨 sp2 六元环层状结构含离域π电子导电。',
        ku: 'Elmas bi hîbrîda sp3 îzole ye; grafît bi qatên sp2 û elektronên pî elektrîkê dikişîne.',
      },
      labels: {
        tr: { diamond: 'Elmas: sp³, çok sert, yalıtkan', graphite: 'Grafit: sp², tabakalı, iletken', graphene: 'Grafen: tek grafit tabakası', nanotube: 'Karbon nanotüp: silindir biçiminde kıvrılmış tabaka' },
        en: { diamond: 'Diamond: sp³, very hard, insulator', graphite: 'Graphite: sp², layered, conductor', graphene: 'Graphene: a single graphite layer', nanotube: 'Carbon nanotube: a layer rolled into a cylinder' },
        de: { diamond: 'Diamant: sp³, sehr hart, Isolator', graphite: 'Graphit: sp², Schichten, Leiter', graphene: 'Graphen: eine einzelne Graphitschicht', nanotube: 'Kohlenstoffnanoröhre: zum Zylinder gerollte Schicht' },
        fr: { diamond: 'Diamant : sp³, très dur, isolant', graphite: 'Graphite : sp², feuillets, conducteur', graphene: 'Graphène : un seul feuillet de graphite', nanotube: 'Nanotube de carbone : feuillet enroulé en cylindre' },
        ru: { diamond: 'Алмаз: sp³, очень твёрдый, диэлектрик', graphite: 'Графит: sp², слоистый, проводник', graphene: 'Графен: один слой графита', nanotube: 'Углеродная нанотрубка: слой, свёрнутый в цилиндр' },
        ar: { diamond: 'الماس: sp³، شديد الصلابة، عازل', graphite: 'الجرافيت: sp²، طبقات، موصل', graphene: 'الجرافين: طبقة واحدة من الجرافيت', nanotube: 'أنبوب الكربون النانوي: طبقة ملفوفة أسطوانيًا' },
        zh: { diamond: '金刚石：sp³ 极硬 绝缘', graphite: '石墨：sp² 层状 导电', graphene: '石墨烯：单层石墨', nanotube: '碳纳米管：卷成圆筒的单层' },
        ku: { diamond: 'Elmas: sp³, pir hişk, îzolator', graphite: 'Grafît: sp², qatqatî, gihîner', graphene: 'Grafen: yek qata grafîtê', nanotube: 'Nanotûba karbonê: qata ku wek silindir hatiye pêçandin' },
      },
    },
  ],
  u24: [
    {
      archetype: 'vsepr-molecular-geometry',
      title: {
        tr: 'Organik Fonksiyonel Gruplar',
        en: 'Organic Functional Groups',
        de: 'Organische funktionelle Gruppen',
        fr: 'Groupes fonctionnels organiques',
        ru: 'Органические функциональные группы',
        ar: 'المجموعات الوظيفية العضوية',
        zh: '有机化学典型官能团与反应特征',
        ku: 'Komên Fonksiyonel ên Organîk',
      },
      caption: {
        tr: 'Alkol (-OH), Eter (-O-), Aldehit/Keton (-C=O), Karboksilik asit (-COOH) ve Ester (-COOR).',
        en: 'Systematic family of hydroxyl, carbonyl, carboxyl, and ester chemical functional groups.',
        de: 'Übersicht über Hydroxyl-, Carbonyl-, Carboxyl- und Estergruppen.',
        fr: 'Familles d\'alcools, éthers, aldéhydes, cétones, acides carboxyliques et esters.',
        ru: 'Гидроксильная, карбонильная, карбоксильная и сложноэфирная функциональные группы.',
        ar: 'مجموعات الهيدروكسيل، الكربونيل، الكربوكسيل، والإستر.',
        zh: '醇羟基、醚键、醛酮羰基、羧酸羧基与酯类官能团立体结构及理化特征。',
        ku: 'Komên hîdroksîl, karbonîl, karboksîl û esterê di kîmyaya organîk de.',
      },
      labels: {
        tr: { alcohol: 'Alkol: R–OH', ether: 'Eter: R–O–R′', carbonyl: 'Aldehit: R–CHO · Keton: R–CO–R′', acid: 'Karboksilik asit: R–COOH · Ester: R–COO–R′' },
        en: { alcohol: 'Alcohol: R–OH', ether: 'Ether: R–O–R′', carbonyl: 'Aldehyde: R–CHO · Ketone: R–CO–R′', acid: 'Carboxylic acid: R–COOH · Ester: R–COO–R′' },
        de: { alcohol: 'Alkohol: R–OH', ether: 'Ether: R–O–R′', carbonyl: 'Aldehyd: R–CHO · Keton: R–CO–R′', acid: 'Carbonsäure: R–COOH · Ester: R–COO–R′' },
        fr: { alcohol: 'Alcool : R–OH', ether: 'Éther : R–O–R′', carbonyl: 'Aldéhyde : R–CHO · Cétone : R–CO–R′', acid: 'Acide carboxylique : R–COOH · Ester : R–COO–R′' },
        ru: { alcohol: 'Спирт: R–OH', ether: 'Простой эфир: R–O–R′', carbonyl: 'Альдегид: R–CHO · Кетон: R–CO–R′', acid: 'Карбоновая кислота: R–COOH · Сложный эфир: R–COO–R′' },
        ar: { alcohol: 'كحول: R–OH', ether: 'إيثر: R–O–R′', carbonyl: 'ألدهيد: R–CHO · كيتون: R–CO–R′', acid: 'حمض كربوكسيلي: R–COOH · إستر: R–COO–R′' },
        zh: { alcohol: '醇：R–OH', ether: '醚：R–O–R′', carbonyl: '醛：R–CHO · 酮：R–CO–R′', acid: '羧酸：R–COOH · 酯：R–COO–R′' },
        ku: { alcohol: 'Alkol: R–OH', ether: 'Eter: R–O–R′', carbonyl: 'Aldehîd: R–CHO · Keton: R–CO–R′', acid: 'Asîda karboksîlîk: R–COOH · Ester: R–COO–R′' },
      },
    },
    {
      archetype: 'vsepr-molecular-geometry',
      title: {
        tr: 'Alkenlerde Markovnikov Kuralı ve Tollens Ayıracı',
        en: 'Markovnikov Addition & Tollens Test',
        de: 'Markovnikov-Regel & Tollens-Reagenz',
        fr: 'Règle de Markovnikov et test de Tollens',
        ru: 'Правило Марковникова и реактив Толленса',
        ar: 'قاعدة ماركوفنيكوف واختبار تولنز',
        zh: '马氏加成规则与托伦试剂银镜定性鉴别',
        ku: 'Zagona Markovnikov û Testa Tollens',
      },
      caption: {
        tr: 'Asimetrik alkene HX katıldığında H hidrojence zengin karbona bağlanır; uç alkinler Tollens ayıracıyla beyaz çökelek verir.',
        en: 'Hydrogen halide addition follows Markovnikov; terminal alkynes give a white precipitate with Tollens reagent.',
        de: 'HX-Addition nach Markovnikov; terminale Alkine reagieren positiv mit Tollens-Reagenz.',
        fr: 'Addition de HX selon Markovnikov; les alcynes vrais réagissent au réactif de Tollens.',
        ru: 'Присоединение HX по Марковникову; концевые алкины дают осадок с реактивом Толленса.',
        ar: 'إضافة HX تتبع ماركوفنيكوف؛ الألكاينات الطرفية تعطي راسباً أبيض مع كاشف تولنز.',
        zh: '卤化氢加成遵循马氏规则：氢加在氢多碳上；端炔与托伦试剂生成白色沉淀，醛与托伦试剂生成银镜。',
        ku: 'Li gorî Markovnikov H diçe ser karbona bi hîdrojena zêde; alkînên serî bi Tollens re nişîna spî didin.',
      },
      labels: {
        tr: { markov: 'Markovnikov: H, hidrojeni çok olan karbona bağlanır', tollens_alkyne: 'Uç alkin + Tollens: beyaz çökelek', tollens_ald: 'Aldehit + Tollens: gümüş aynası', internal: 'İç alkin + Tollens: tepkime vermez' },
        en: { markov: 'Markovnikov: H adds to the carbon with more hydrogens', tollens_alkyne: 'Terminal alkyne + Tollens: white precipitate', tollens_ald: 'Aldehyde + Tollens: silver mirror', internal: 'Internal alkyne + Tollens: no reaction' },
        de: { markov: 'Markownikow: H geht an das C mit mehr H-Atomen', tollens_alkyne: 'Endständiges Alkin + Tollens: weißer Niederschlag', tollens_ald: 'Aldehyd + Tollens: Silberspiegel', internal: 'Innenständiges Alkin + Tollens: keine Reaktion' },
        fr: { markov: 'Markovnikov : H se fixe sur le carbone le plus hydrogéné', tollens_alkyne: 'Alcyne vrai + Tollens : précipité blanc', tollens_ald: 'Aldéhyde + Tollens : miroir d\'argent', internal: 'Alcyne interne + Tollens : pas de réaction' },
        ru: { markov: 'Правило Марковникова: H идёт к более гидрогенизированному C', tollens_alkyne: 'Концевой алкин + Толленс: белый осадок', tollens_ald: 'Альдегид + Толленс: серебряное зеркало', internal: 'Внутренний алкин + Толленс: нет реакции' },
        ar: { markov: 'ماركوفنيكوف: يرتبط H بالكربون الأغنى بالهيدروجين', tollens_alkyne: 'ألكاين طرفي + تولنز: راسب أبيض', tollens_ald: 'ألدهيد + تولنز: مرآة فضية', internal: 'ألكاين داخلي + تولنز: لا تفاعل' },
        zh: { markov: '马氏规则：H 加到含氢较多的碳上', tollens_alkyne: '端炔 + 托伦试剂：白色沉淀', tollens_ald: '醛 + 托伦试剂：银镜', internal: '内炔 + 托伦试剂：不反应' },
        ku: { markov: 'Markovnikov: H diçe ser karbona ku hîdrojena wê zêdetir e', tollens_alkyne: 'Alkîna serî + Tollens: nişîna spî', tollens_ald: 'Aldehîd + Tollens: neynika zîv', internal: 'Alkîna hundirîn + Tollens: reaksiyon nade' },
      },
    },
  ],
};

/**
 * Retrieves the pair of primary & secondary QuestionDiagramSpec for a given unit.
 */
export function getAllUnitDiagramSpecs(unitId: string, lang: LanguageCode): [QuestionDiagramSpec, QuestionDiagramSpec] {
  const templates = UNIT_DIAGRAM_TEMPLATES[unitId] || UNIT_DIAGRAM_TEMPLATES['u01'];
  return [
    {
      archetype: templates[0].archetype,
      title: templates[0].title[lang] || templates[0].title['tr'],
      caption: templates[0].caption[lang] || templates[0].caption['tr'],
      labels: templates[0].labels[lang] || templates[0].labels['tr'],
      variant: 1,
      animated: true,
    },
    {
      archetype: templates[1].archetype,
      title: templates[1].title[lang] || templates[1].title['tr'],
      caption: templates[1].caption[lang] || templates[1].caption['tr'],
      labels: templates[1].labels[lang] || templates[1].labels['tr'],
      variant: 2,
      animated: true,
    },
  ];
}

const STOP_STEMS = new Set(['olan', 'daha', 'gibi', 'için', 'veya', 'arası', 'sonra', 'değil', 'kadar', 'olarak', 'which', 'their', 'there', 'about', 'between', 'with', 'from', 'that', 'this', 'into']);

/** Crude language-agnostic content stems (first 5 letters of words with >= 4 letters). */
function contentStems(text: string): Set<string> {
  const out = new Set<string>();
  for (const w of (text || '').toLocaleLowerCase('tr').split(/[^\p{L}\p{N}]+/u)) {
    if (w.length < 4 || STOP_STEMS.has(w)) continue;
    out.add(w.slice(0, 5));
  }
  return out;
}

/** Statements a student evaluates in a question: the options plus any I./II./III. lines of the stem. */
function questionStatements(q: CompiledQuestion): string[] {
  const lines = q.stem.split('\n').filter((l) => /^(I|II|III|IV)\.\s/.test(l)).map((l) => l.replace(/^[IV]+\.\s*/, ''));
  // Quoted clues inside the stem (e.g. the trait in a matching question) are judged too.
  const quoted = (q.stem.match(/["“«]([^"”»]{25,})["”»]/g) || []).map((m) => m.slice(1, -1));
  return [...q.options, ...lines, ...quoted];
}

/**
 * A diagram whose caption restates one of the statements being judged hands the student the
 * answer (e.g. a caption "katalizör ΔH değerini değiştirmez" on a question that asks whether that
 * very statement is true). Such pairings are not allowed.
 */
function diagramGivesAway(q: CompiledQuestion, spec: QuestionDiagramSpec): boolean {
  // A figure whose title, caption or labels name the keyed option (e.g. "Geçici sertlik" for a
  // question whose answer is "Geçici Sertlik") gives the answer away outright.
  const key = (q.options[q.correctIndex] || '').replace(/\s*[（(][^）)]*[）)]/g, '').trim().toLocaleLowerCase('tr');
  const figureText = `${spec.title} ${spec.caption} ${Object.values(spec.labels || {}).join(' ')}`.toLocaleLowerCase('tr');
  if (key.length >= 4 && key.length <= 40) {
    if (figureText.includes(key)) return true;
    const keyStems = contentStems(key);
    const figStems = contentStems(figureText);
    if (keyStems.size > 0 && [...keyStems].every((k) => figStems.has(k))) return true;
  }
  const cap = contentStems(spec.caption);
  if (cap.size === 0) return false;
  for (const st of questionStatements(q)) {
    const s = contentStems(st);
    let shared = 0;
    for (const c of cap) if (s.has(c)) shared++;
    if (shared >= 3 && shared / cap.size >= 0.4) return true;
  }
  return false;
}

function diagramRelevance(q: CompiledQuestion, spec: QuestionDiagramSpec): number {
  const d = contentStems(`${spec.title} ${spec.caption} ${Object.values(spec.labels || {}).join(' ')}`);
  const t = contentStems(`${q.stem} ${q.options.join(' ')}`);
  let shared = 0;
  for (const x of d) if (t.has(x)) shared++;
  return shared;
}

/**
 * Topics a unit's figure does not illustrate, as lowercase Turkish stem fragments
 * ([primary figure, secondary figure]). A question whose stem names one of them is only given
 * that figure when the set has no better candidate left, so the 2 + 2 per set count never changes.
 */
const FIGURE_OFF_TOPIC: Record<string, [string[], string[]]> = {
  // u01: four pieces of glassware · alembic distillation
  u01: [
    ['damıtma', 'süzme', 'simya', 'zaç', 'kezzap', 'biyokimya', 'imbik'],
    ['süzme', 'ayırma hunisi', 'balon joje', 'büret', 'biyokimya', 'piktogram'],
  ],
  // u02: Bohr levels and photon emission · periodic trends
  u02: [
    ['periyot', 'iyonlaşma', 'elektronegat', 'yarıçap', 'metalik', 'izotop', 'izoton', 'kütle numarası', 'elektron ilgisi'],
    ['izotop', 'izoton', 'kütle numarası', 'rutherford', 'thomson', 'atom model', 'ışıma', 'uyarıl'],
  ],
  // u03: ionic / covalent bond, dipole–dipole, hydrogen bond · hydrogen bonds in water and ice
  u03: [
    ['london', 'buz'],
    ['iyonik bağ', 'london', 'kovalent bağ', 'metalik bağ', 'lewis'],
  ],
  // u04: heating curve of water · vapour pressure and boiling point
  u04: [
    ['kristal', 'amorf', 'moleküler katı', 'viskozite', 'akıcılık', 'bağıl nem', 'buhar basıncı', 'plazma'],
    ['kristal', 'amorf', 'moleküler katı', 'bağıl nem', 'plazma', 'ısınma ve hal değişimi'],
  ],
  // u05: water hardness and softening · greenhouse effect and acid rain
  u05: [
    ['sera', 'asit yağmur', 'ozon', 'yeşil kimya', 'fosil', 'karbon döngü'],
    ['sert su', 'sertlik', 'yumuşak su', 'koagülasyon', 'iyon değiştir', 'kireç'],
  ],
  // u06: conservation of mass and definite proportions · mole map
  u06: [
    ['mol kütlesi', 'avogadro', '22,4', 'basit formül', 'molekül formülü', 'bağıl atom', 'gerçek atom'],
    ['katlı oran', 'sabit oran', 'kütlenin korunumu', 'basit formül', 'molekül formülü'],
  ],
  // u07: limiting reactant · precipitation and net ionic equation
  u07: [
    ['çözünme-çökelme', 'net iyon', 'seyirci', 'denkleştirme', 'analiz', 'saflık', 'asit-baz'],
    ['artan madde', 'sınırlayıcı', 'verim', 'yanma', 'denkleştirme', 'saflık', 'paslanma'],
  ],
  // u08: fractional distillation · separatory funnel
  u08: [
    ['ayırma hunisi', 'kristallendirme', 'diyaliz', 'ppm', 'yüzde derişim', 'flotasyon', 'yüzdürme', 'süspansiyon', 'emülsiyon'],
    ['damıtma', 'ppm', 'flotasyon', 'yüzdürme', 'diyaliz', 'doygun', 'süspansiyon', 'özütleme', 'duman'],
  ],
  // u09: pH scale and neutralisation · gases from metals with acids
  u09: [
    ['bakır', 'altın', 'metal', 'oksit'],
    ['titrasyon', 'çamaşır', 'kireç taşı', 'soda', 'oksijensiz asit', 'indikatör', 'fenolftalein', 'ph değer'],
  ],
  // u10: soap micelle · addition polymers
  u10: [
    ['polimer', 'pet ambalaj', 'teflon', 'kozmetik', 'pastörizasyon', 'kevlar'],
    ['sabun', 'deterjan', 'misel', 'kozmetik', 'pastörizasyon'],
  ],
  // u11: orbital shapes and Pauli · Cr / Cu orbital diagrams, Aufbau and Hund
  u11: [
    ['izoelektronik', 'küresel simetri', 'iyonlaşma', 'aufbau', 'bohr atom'],
    ['iyonlaşma', 'izoelektronik', 'açısal momentum', 'manyetik kuantum'],
  ],
  // u12: piston, Boyle and Charles graphs · manometers
  u12: [
    ['manometre', 'kinetik', 'dairesel'],
    ['boyle', 'charles', 'gay-lussac', 'avogadro', 'ideal gaz denklemi', 'yoğunlu', 'heterojen gaz', 'birleşik gaz'],
  ],
  // u13: Graham diffusion · Dalton partial pressures and gas over water
  u13: [
    ['joule', 'soğutucu', 'kısmi basınç', 'kinetik enerji', 'ideale', 'su üstünde'],
    ['difüz', 'efüzyon', 'graham', 'yayılma'],
  ],
  // u14: concentration units · ion concentrations of a dissolved salt
  u14: [
    ['iyonlaş', 'elektrolit', 'ortak iyon'],
    ['mol kesri', 'hacimce yüzde', 'molalite'],
  ],
  // u15: boiling/freezing shift curves · solubility curves
  u15: [
    ['çözünürlük eğrisi', 'henry', 'aşırı doymuş', 'ozmo'],
    ['kayna', 'donma', 'ozmo', 'molal', 'buhar basıncı'],
  ],
  // u16: energy profile with Eai / Eag · Hess enthalpy levels
  u16: [
    ['bağ enerji', 'hess', 'oluşum entalpi', 'kalorimetre'],
    ['bağ enerji', 'aktifleş', 'potansiyel enerji grafiği', 'kalorimetre'],
  ],
};

function figureOffTopic(unitId: string, variantIdx: 0 | 1, q: CompiledQuestion): boolean {
  const fragments = FIGURE_OFF_TOPIC[unitId]?.[variantIdx];
  if (!fragments || fragments.length === 0) return false;
  const stem = q.stem.toLocaleLowerCase('tr');
  return fragments.some((f) => stem.includes(f));
}

/** Diagram placement (question id -> variant) decided once per unit on the Turkish bank. */
export type DiagramPlacement = Map<string, 1 | 2>;

/**
 * Chooses, in every 16-question set, 2 questions for the unit's primary diagram and 2 for the
 * secondary one (32 per unit, 16 + 16), preferring the questions whose content matches the
 * diagram's topic and never attaching a diagram whose caption gives away the answer. ÖSYM twins
 * keep their authored form (no generic figure attached).
 */
export function planDiagramPlacement(
  unit: ChemistryUnitSeedData,
  questions: CompiledQuestion[],
  lang: LanguageCode
): DiagramPlacement {
  const specs = getAllUnitDiagramSpecs(unit.id, lang);
  const placement: DiagramPlacement = new Map();
  const bySet = new Map<number, CompiledQuestion[]>();
  for (const q of questions) {
    const s = Math.floor((q.questionNumberInUnit - 1) / 16);
    if (!bySet.has(s)) bySet.set(s, []);
    bySet.get(s)!.push(q);
  }
  const legacySlot = (q: CompiledQuestion) => {
    const qInSet = ((q.questionNumberInUnit - 1) % 16) + 1;
    return qInSet === 1 || qInSet === 5 || qInSet === 9 || qInSet === 13 ? 1 : 0;
  };
  for (const setQs of bySet.values()) {
    const taken = new Set<string>();
    for (const variantIdx of [0, 1] as const) {
      const spec = specs[variantIdx];
      const ranked = setQs
        .filter((q) => q.archetype !== 'osym-twin' && !taken.has(q.id))
        .map((q) => ({ q, safe: !diagramGivesAway(q, spec), fits: !figureOffTopic(unit.id, variantIdx, q), rel: diagramRelevance(q, spec) }))
        .sort((a, b) =>
          Number(b.safe) - Number(a.safe) ||
          Number(b.fits) - Number(a.fits) ||
          b.rel - a.rel ||
          legacySlot(b.q) - legacySlot(a.q) ||
          a.q.questionNumberInUnit - b.q.questionNumberInUnit);
      for (const entry of ranked.slice(0, 2)) {
        taken.add(entry.q.id);
        placement.set(entry.q.id, (variantIdx + 1) as 1 | 2);
      }
    }
  }
  return placement;
}

/**
 * Enriches figure-applicable questions within a unit with interactive animated diagrams
 * (exactly 32 per 128 questions: 16 primary + 16 secondary). Pass `placement` (computed on the
 * Turkish bank) so every language attaches the figure to the same question ids.
 */
export function enrichQuestionsWithDiagrams(
  unit: ChemistryUnitSeedData,
  questions: CompiledQuestion[],
  lang: LanguageCode,
  placement?: DiagramPlacement
): CompiledQuestion[] {
  const [diag1, diag2] = getAllUnitDiagramSpecs(unit.id, lang);
  const plan = placement ?? planDiagramPlacement(unit, questions, lang);

  return questions.map((q) => {
    const variant = plan.get(q.id);
    const { diagram: _previous, ...rest } = q;
    if (!variant) return rest as CompiledQuestion;
    const spec = variant === 1 ? diag1 : diag2;
    return {
      ...rest,
      diagram: {
        ...spec,
        animated: true,
      },
    };
  });
}

export const getUnitDiagramSpecs = getAllUnitDiagramSpecs;
