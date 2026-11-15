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
        tr: 'Laboratuvar Cam Malzemeleri ve Güvenlik',
        en: 'Laboratory Glassware and Safety',
        de: 'Labor-Glasgeräte und Sicherheit',
        fr: 'Verrerie de laboratoire et sécurité',
        ru: 'Лабораторная посуда и безопасность',
        ar: 'أدوات الزجاج المخبرية والسلامة',
        zh: '实验室玻璃仪器与安全',
        ku: 'Amûrên Cam ên Laboratûwarê û Ewlehî',
      },
      caption: {
        tr: 'Büret, erlenmayer ve balon joje ile hassas hacim ölçümleri ve çözelti hazırlığı.',
        en: 'Precise volume measurement and solution preparation with burette, flask, and volumetric flask.',
        de: 'Präzise Volumenmessung und Lösungsvorbereitung mit Bürette, Erlenmeyerkolben und Messkolben.',
        fr: 'Mesure précise du volume et préparation de solutions avec burette, erlenmeyer et fiole jaugée.',
        ru: 'Точное измерение объёма и приготовление растворов с помощью бюретки и колб.',
        ar: 'قياس دقيق للحجم وتحضير المحاليل باستخدام السحاحة والدورق المعياري.',
        zh: '使用滴定管、锥形瓶和容量瓶进行精确体积测量与溶液配制。',
        ku: 'Pîvandina qebareya rast û amadekirina helawê bi buret, erlenmayer û balon jojeyê.',
      },
      labels: {
        tr: { item1: 'Büret (Titrasyon)', item2: 'Erlenmayer (Çözelti)', item3: 'Balon Joje (Standart Derişim)', item4: 'Ayırma Hunisi' },
        en: { item1: 'Burette (Titration)', item2: 'Erlenmeyer Flask', item3: 'Volumetric Flask', item4: 'Separatory Funnel' },
        de: { item1: 'Bürette (Titration)', item2: 'Erlenmeyerkolben', item3: 'Messkolben', item4: 'Scheidetrichter' },
        fr: { item1: 'Burette (Titrage)', item2: 'Erlenmeyer', item3: 'Fiole jaugée', item4: 'Ampoule à décanter' },
        ru: { item1: 'Бюретка (Титрование)', item2: 'Колба Эрленмейера', item3: 'Мерная колба', item4: 'Делительная воронка' },
        ar: { item1: 'سحاحة (معايرة)', item2: 'دورق إرلنماير', item3: 'دورق قياسي', item4: 'قمع فصل' },
        zh: { item1: '滴定管（滴定）', item2: '锥形瓶（溶液）', item3: '容量瓶（标准浓度）', item4: '分液漏斗' },
        ku: { item1: 'Buret (Tîtrasyon)', item2: 'Erlenmayer (Helaw)', item3: 'Balon Joje (Xestiya Standard)', item4: 'Huniya Veqetandinê' },
      },
    },
    {
      archetype: 'lab-glassware-setup',
      title: {
        tr: 'Simyadan Kimyaya Damıtma İmbiği',
        en: 'Alchemy to Chemistry Alembic Distillation',
        de: 'Alchemie zur Chemie Destillationskolben',
        fr: 'De l alchimie à la chimie alambic',
        ru: 'От алхимии к химии перегонный куб',
        ar: 'من الخيمياء إلى الكيمياء الإنبيق',
        zh: '从炼金术到化学蒸馏器',
        ku: 'Ji Sîmyayê ber bi Kîmyayê Înbiq',
      },
      caption: {
        tr: 'Cabir bin Hayyan ın imbik düzeneği ile zaç yağı ve kezzap eldesi.',
        en: 'Jabir ibn Hayyan alembic distillation apparatus producing sulfuric and nitric acids.',
        de: 'Destillationsapparat von Dschābir ibn Hayyān zur Gewinnung von Schwefelsäure und Salpetersäure.',
        fr: 'Appareil de distillation de Jabir ibn Hayyan pour la production d acide sulfurique et nitrique.',
        ru: 'Дистилляционный аппарат Джабира ибн Хайяна для получения серной и азотной кислот.',
        ar: 'جهاز تقطير جابر بن حيان لإنتاج حمض الكبريتيك والنتريك.',
        zh: '贾比尔·伊本·哈扬利用蒸馏器提取硫酸与硝酸。',
        ku: 'Dizgeha înbiqê ya Cabir bîn Heyyan bo bidestxistina zaç yağı û kezzapê.',
      },
      labels: {
        tr: { top: 'Buhar Soğutma', bottom: 'Isıtıcı Ocak', left: 'Ham Madde', right: 'Damıtılmış Asit' },
        en: { top: 'Vapor Condenser', bottom: 'Heating Source', left: 'Raw Feed', right: 'Distilled Acid' },
        de: { top: 'Dampfkondensator', bottom: 'Heizquelle', left: 'Rohstoff', right: 'Destillierte Säure' },
        fr: { top: 'Condenseur de vapeur', bottom: 'Source de chaleur', left: 'Matière brute', right: 'Acide distillé' },
        ru: { top: 'Охлаждение пара', bottom: 'Источник тепла', left: 'Сырьё', right: 'Дистиллированная кислота' },
        ar: { top: 'مكثف البخار', bottom: 'مصدر التسخين', left: 'المادة الخام', right: 'الحمض المقطر' },
        zh: { top: '蒸汽冷凝', bottom: '加热炉', left: '原料', right: '蒸馏酸' },
        ku: { top: 'Sarkirina Hilmê', bottom: 'Argûnê Germkirinê', left: 'Madeya Xam', right: 'Asîda Parzûnkirî' },
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
        tr: 'Çekirdek etrafındaki dairesel katmanlar ve elektron foton uyarılma ışıması.',
        en: 'Concentric shells around nucleus with electron excitation and photon emission.',
        de: 'Konzentrische Schalen um den Kern mit Elektronenanregung und Photonenemission.',
        fr: 'Couches concentriques autour du noyau avec excitation électronique et émission de photon.',
        ru: 'Концентрические оболочки вокруг ядра с возбуждением электронов и излучением фотонов.',
        ar: 'طبقات دائرية حول النواة مع إثارة الإلكترونات وانبعاث الفوتونات.',
        zh: '核外同心能级层与电子跃迁光子辐射。',
        ku: 'Qatên xelekî yên li dora navikê û tîrêjdayîna fotonan bi hişyarbûna elektronan.',
      },
      labels: {
        tr: { n1: 'n=1 (K)', n2: 'n=2 (L)', n3: 'n=3 (M)', photon: 'Foton Salımı (ΔE=hν)', nucleus: 'Çekirdek (+Ze)' },
        en: { n1: 'n=1 (K)', n2: 'n=2 (L)', n3: 'n=3 (M)', photon: 'Photon Emission (ΔE=hν)', nucleus: 'Nucleus (+Ze)' },
        de: { n1: 'n=1 (K)', n2: 'n=2 (L)', n3: 'n=3 (M)', photon: 'Photonenemission (ΔE=hν)', nucleus: 'Atomkern (+Ze)' },
        fr: { n1: 'n=1 (K)', n2: 'n=2 (L)', n3: 'n=3 (M)', photon: 'Émission de photon (ΔE=hν)', nucleus: 'Noyau (+Ze)' },
        ru: { n1: 'n=1 (K)', n2: 'n=2 (L)', n3: 'n=3 (M)', photon: 'Излучение фотона (ΔE=hν)', nucleus: 'Ядро (+Ze)' },
        ar: { n1: 'n=1 (K)', n2: 'n=2 (L)', n3: 'n=3 (M)', photon: 'انبعاث فوتون (ΔE=hν)', nucleus: 'النواة (+Ze)' },
        zh: { n1: 'n=1 (K)', n2: 'n=2 (L)', n3: 'n=3 (M)', photon: '光子发射 (ΔE=hν)', nucleus: '原子核 (+Ze)' },
        ku: { n1: 'n=1 (K)', n2: 'n=2 (L)', n3: 'n=3 (M)', photon: 'Derxistina Fotonan (ΔE=hν)', nucleus: 'Navik (+Ze)' },
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
        tr: 'Atom yarıçapı soldan sağa küçülür, iyonlaşma enerjisi ve elektronegatiflik artar.',
        en: 'Atomic radius decreases left to right; ionization energy and electronegativity increase.',
        de: 'Der Atomradius nimmt von links nach rechts ab; Ionisierungsenergie und Elektronegativität nehmen zu.',
        fr: 'Le rayon atomique diminue de gauche à droite; l énergie d ionisation et l électronégativité augmentent.',
        ru: 'Атомный радиус уменьшается слева направо; энергия ионизации и электроотрицательность растут.',
        ar: 'يقل نصف القطر الذري من اليسار إلى اليمين، وتزداد طاقة التأين والسالبية الكهربية.',
        zh: '同周期从左到右原子半径减小，第一电离能与电负性总体增加。',
        ku: 'Nîveşkêla atomê ji çepê ber bi rastê kêm dibe, enerjiya îyonîzasyonê û elektronegatîvî zêde dibe.',
      },
      labels: {
        tr: { radius: 'Yarıçap (↙ Artar)', ie: 'İyonlaşma Enerjisi (↗ Artar)', eneg: 'Elektronegatiflik (↗ Artar)', metallic: 'Metalik Aktiflik (↙)' },
        en: { radius: 'Radius (↙ Increases)', ie: 'Ionization Energy (↗)', eneg: 'Electronegativity (↗)', metallic: 'Metallic Character (↙)' },
        de: { radius: 'Atomradius (↙ Zunahme)', ie: 'Ionisierungsenergie (↗)', eneg: 'Elektronegativität (↗)', metallic: 'Metallcharakter (↙)' },
        fr: { radius: 'Rayon (↙ Augmente)', ie: 'Énergie d ionisation (↗)', eneg: 'Électronégativité (↗)', metallic: 'Caractère métallique (↙)' },
        ru: { radius: 'Радиус (↙ Растёт)', ie: 'Энергия ионизации (↗)', eneg: 'Электроотрицательность (↗)', metallic: 'Металлические свойства (↙)' },
        ar: { radius: 'نصف القطر (↙ يزداد)', ie: 'طاقة التأين (↗ تزداد)', eneg: 'السالبية الكهربية (↗)', metallic: 'الخاصية الفلزية (↙)' },
        zh: { radius: '原子半径 (↙ 增大)', ie: '第一电离能 (↗ 增加)', eneg: '电负性 (↗ 增加)', metallic: '金属性 (↙ 增强)' },
        ku: { radius: 'Nîveşkêl (↙ Zêde dibe)', ie: 'Enerjiya Îyonîzasyonê (↗)', eneg: 'Elektronegatîvî (↗)', metallic: 'Çalakiya Metalî (↙)' },
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
        tr: 'İyonik örgü vs kovalent molekül ve polar dipol etkileşimleri.',
        en: 'Ionic crystal lattice vs covalent molecule and polar dipole interactions.',
        de: 'Ionengitter vs kovalentes Molekül und dipolare Wechselwirkungen.',
        fr: 'Réseau cristallin ionique vs molécule covalente et dipôles.',
        ru: 'Ионная кристаллическая решётка против ковалентной молекулы и диполей.',
        ar: 'الشبكة البلورية الأيونية مقابل الجزيء التساهمي وتفاعلات ثنائي القطب.',
        zh: '离子晶体晶格与共价分子极性偶极相互作用。',
        ku: 'Torra krîstalî ya îyonî li hember molekula kovalant û danûstandina dîpolan.',
      },
      labels: {
        tr: { bond1: 'İyonik Bağ (e- Transferi)', bond2: 'Kovalent Bağ (e- Ortaklığı)', hbond: 'Hidrojen Bağı (F-O-N)', dipole: 'Dipol-Dipol' },
        en: { bond1: 'Ionic Bond (e- Transfer)', bond2: 'Covalent Bond (e- Sharing)', hbond: 'Hydrogen Bond (F-O-N)', dipole: 'Dipole-Dipole' },
        de: { bond1: 'Ionenbindung', bond2: 'Kovalente Bindung', hbond: 'Wasserstoffbrücke (F-O-N)', dipole: 'Dipol-Dipol' },
        fr: { bond1: 'Liaison ionique', bond2: 'Liaison covalente', hbond: 'Liaison hydrogène', dipole: 'Dipôle-Dipôle' },
        ru: { bond1: 'Ионная связь', bond2: 'Ковалентная связь', hbond: 'Водородная связь', dipole: 'Диполь-диполь' },
        ar: { bond1: 'رابطة أيونية', bond2: 'رابطة تساهمية', hbond: 'رابطة هيدروجينية', dipole: 'ثنائي القطب' },
        zh: { bond1: '离子键（电子转移）', bond2: '共价键（共用电子对）', hbond: '氢键 (F-O-N)', dipole: '偶极-偶极作用' },
        ku: { bond1: 'Benda Îyonî (Veguhastina e-)', bond2: 'Benda Kovalant', hbond: 'Benda Hîdrojenê', dipole: 'Dîpol-Dîpol' },
      },
    },
    {
      archetype: 'vsepr-molecular-geometry',
      title: {
        tr: 'Hidrojen Bağı ve Su Anomalisi',
        en: 'Hydrogen Bonding and Water Anomaly',
        de: 'Wasserstoffbrückenbindung und Wasser-Anomalie',
        fr: 'Liaison hydrogène et anomalie de l eau',
        ru: 'Водородные связи и аномалия воды',
        ar: 'الروابط الهيدروجينية وشذوذ الماء',
        zh: '氢键与水的反常物理性质',
        ku: 'Benda Hîdrojenê û Anomaliya Avê',
      },
      caption: {
        tr: 'FON atomlarına bağlı hidrojen atomlarının komşu elektronegatif atomla kurduğu zayıf etkileşim.',
        en: 'Intermolecular attraction between hydrogen bonded to FON and neighboring electronegative lone pairs.',
        de: 'Zwischenmolekulare Anziehung zwischen an FON gebundenem Wasserstoff und benachbarten freien Elektronenpaaren.',
        fr: 'Attraction intermoléculaire entre hydrogène lié à FON et doublets non liants voisins.',
        ru: 'Межмолекулярное притяжение водорода, связанного с FON, к неподелённым парам соседних атомов.',
        ar: 'تجاذب بين جزيئي يربط الهيدروجين المرتبط بـ FON بالأزواج الإلكترونية الحرة المجاورة.',
        zh: '连接在F、O、N上的氢原子与邻近孤对电子形成的分子间作用力。',
        ku: 'Kêşana navmolekûlî ya di navbera hîdrojena bi FONê ve girêdayî û cotên elektronan yên cîran de.',
      },
      labels: {
        tr: { doner: 'H-Verici (O-H)', acceptor: 'H-Alıcı (:O)', bp: 'Yüksek Kaynama Noktası', ice: 'Buz Kristal Örgüsü' },
        en: { doner: 'H-Donor (O-H)', acceptor: 'H-Acceptor (:O)', bp: 'High Boiling Point', ice: 'Ice Open Lattice' },
        de: { doner: 'H-Donator (O-H)', acceptor: 'H-Akzeptor (:O)', bp: 'Hoher Siedepunkt', ice: 'Eis-Gitterstruktur' },
        fr: { doner: 'Donneur H (O-H)', acceptor: 'Accepteur H (:O)', bp: 'Point d ébullition élevé', ice: 'Structure cristalline de la glace' },
        ru: { doner: 'Донор H (O-H)', acceptor: 'Акцептор H (:O)', bp: 'Высокая t° кипения', ice: 'Решётка льда' },
        ar: { doner: 'مانح هيدروجين', acceptor: 'مستقبل هيدروجين', bp: 'درجة غليان مرتفعة', ice: 'الشبكة البلورية للجليد' },
        zh: { doner: '氢供体 (O-H)', acceptor: '氢受体 (:O)', bp: '高沸点反常', ice: '冰晶开放式网络' },
        ku: { doner: 'H-Bexşîner (O-H)', acceptor: 'H-Wergir (:O)', bp: 'Xala Kelînê ya Bilind', ice: 'Torra Qeşayê' },
      },
    },
  ],
  u04: [
    {
      archetype: 'phase-heating-curve',
      title: {
        tr: 'Maddenin Halleri ve Isınma Eğrisi',
        en: 'States of Matter and Heating Curve',
        de: 'Aggregatzustände und Erwärmungskurve',
        fr: 'États de la matière et courbe de réchauffement',
        ru: 'Агрегатные состояния и кривая нагревания',
        ar: 'حالات المادة ومنحنى التسخين',
        zh: '物质状态与加热升温曲线',
        ku: 'Rewşên Madeyê û Xêza Germbûnê',
      },
      caption: {
        tr: 'Katı, sıvı ve gaz bölgeleri ile erime ve kaynama süresince sabit sıcaklık basamakları.',
        en: 'Solid, liquid, and gas phases with isothermal plateaus at melting and boiling temperatures.',
        de: 'Fest-, Flüssig- und Gasphasen mit Temperaturplateaus beim Schmelzen und Sieden.',
        fr: 'Phases solide, liquide et gaz avec paliers de température à fusion et ébullition.',
        ru: 'Твёрдая, жидкая и газовая фазы с изотермическими плато при плавлении и кипении.',
        ar: 'المناطق الصلبة والسائلة والغازية مع ثبوت درجة الحرارة أثناء الانصهار والغليان.',
        zh: '固态、液态与气态相变过程中的等温相变平台。',
        ku: 'Qonaxên req, şil û gaz bi germiya sabît li ser xalên helîn û kelînê.',
      },
      labels: {
        tr: { solid: 'Katı (Ek artar)', melt: 'Erime (Ep artar)', liquid: 'Sıvı', boil: 'Kaynama', gas: 'Gaz Hali' },
        en: { solid: 'Solid (Kinetic ↑)', melt: 'Melting (Potential ↑)', liquid: 'Liquid', boil: 'Boiling', gas: 'Gas Phase' },
        de: { solid: 'Festkörper', melt: 'Schmelzen', liquid: 'Flüssigkeit', boil: 'Sieden', gas: 'Gasphase' },
        fr: { solid: 'Solide', melt: 'Fusion', liquid: 'Liquide', boil: 'Ébullition', gas: 'Gaz' },
        ru: { solid: 'Твёрдое тело', melt: 'Плавление', liquid: 'Жидкость', boil: 'Кипение', gas: 'Газ' },
        ar: { solid: 'صلب', melt: 'انصهار', liquid: 'سائل', boil: 'غليان', gas: 'غاز' },
        zh: { solid: '固态（动能增加）', melt: '熔化（势能增加）', liquid: '液态', boil: '沸腾', gas: '气态' },
        ku: { solid: 'Req', melt: 'Helîn', liquid: 'Şil', boil: 'Kelîn', gas: 'Rewşa Gazê' },
      },
    },
    {
      archetype: 'phase-heating-curve',
      title: {
        tr: 'Buhar Basıncı ve Sıvı Viskozitesi',
        en: 'Vapor Pressure and Liquid Viscosity',
        de: 'Dampfdruck und Flüssigkeitsviskosität',
        fr: 'Pression de vapeur et viscosité des liquides',
        ru: 'Давление пара и вязкость жидкостей',
        ar: 'الضغط البخاري ولزوجة السوائل',
        zh: '蒸气压与液体粘度关系',
        ku: 'Zexta Hilmê û Vîskozîteya Şileyan',
      },
      caption: {
        tr: 'Sıvı buhar basıncının dış açık hava basıncına eşitlendiği anda kaynama başlar.',
        en: 'Boiling occurs at the temperature where vapor pressure equals ambient atmospheric pressure.',
        de: 'Sieden tritt ein, wenn der Dampfdruck dem äußeren Luftdruck entspricht.',
        fr: 'L ébullition commence dès que la pression de vapeur égale la pression externe.',
        ru: 'Кипение начинается, когда давление насыщенного пара сравнивается с внешним давлением.',
        ar: 'يبدأ الغليان عندما يتساوى ضغط البخار مع الضغط الجوي الخارجي.',
        zh: '当液体饱和蒸气压等于外界大气压时液体开始剧烈沸腾。',
        ku: 'Dema zexta hilmê bi zexta derve re yeksan bibe kelîn dest pê dike.',
      },
      labels: {
        tr: { pvap: 'Buhar Basıncı', pext: 'Dış Basınç (P0)', tb: 'Kaynama Noktası', visc: 'Viskozite (1/T)' },
        en: { pvap: 'Vapor Pressure', pext: 'External Pressure (P0)', tb: 'Boiling Point', visc: 'Viscosity (1/T)' },
        de: { pvap: 'Dampfdruck', pext: 'Außendruck (P0)', tb: 'Siedepunkt', visc: 'Viskosität' },
        fr: { pvap: 'Pression de vapeur', pext: 'Pression externe', tb: 'Point d ébullition', visc: 'Viscosité' },
        ru: { pvap: 'Давление пара', pext: 'Внешнее давление (P0)', tb: 'Точка кипения', visc: 'Вязкость' },
        ar: { pvap: 'ضغط البخار', pext: 'الضغط الخارجي', tb: 'درجة الغليان', visc: 'اللزوجة' },
        zh: { pvap: '蒸气压', pext: '外界气压 (P0)', tb: '沸点', visc: '粘度 (1/T)' },
        ku: { pvap: 'Zexta Hilmê', pext: 'Zexta Derve (P0)', tb: 'Xala Kelînê', visc: 'Vîskozîte' },
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
        fr: 'Dureté de l eau et traitement',
        ru: 'Жёсткость воды и цикл очистки',
        ar: 'عسر الماء ودورة المعالجة',
        zh: '水质硬度与软化处理循环',
        ku: 'Hişkiya Avê û Çerxa Parzûnkirinê',
      },
      caption: {
        tr: 'Geçici sertliğin kaynatılarak, kalıcı sertliğin iyon değiştirici reçinelerle giderilmesi.',
        en: 'Removal of temporary hardness by boiling and permanent hardness via ion-exchange resins.',
        de: 'Beseitigung vorübergehender Härte durch Kochen und bleibender Härte über Ionenaustauscher.',
        fr: 'Élimination de la dureté temporaire par ébullition et permanente par résines échangeuses d ions.',
        ru: 'Устранение временной жёсткости кипячением, а постоянной — ионообменными смолами.',
        ar: 'إزالة العسر المؤقت بالغليان، والعسر الدائم بواسطة راتنجات التبادل الأيوني.',
        zh: '煮沸去除碳酸氢钙镁暂时硬度，离子交换树脂去除硫酸盐永久硬度。',
        ku: 'Rakirina hişkiya demkî bi kelandinê û ya domdar bi rezînên guhêrbarên îyonî.',
      },
      labels: {
        tr: { ion1: 'Ca2+ / Mg2+ İyonları', boil: 'Kaynatma: CaCO3(k) Çöker', resin: 'Na+ Reçinesi (Kalıcı)', pure: 'Yumuşak Su' },
        en: { ion1: 'Ca2+ / Mg2+ Ions', boil: 'Boiling: CaCO3 ppt', resin: 'Na+ Resin (Permanent)', pure: 'Softened Water' },
        de: { ion1: 'Ca2+ / Mg2+ Ionen', boil: 'Kochen: CaCO3 Fällung', resin: 'Na+ Harz', pure: 'Weiches Wasser' },
        fr: { ion1: 'Ions Ca2+ / Mg2+', boil: 'Ébullition: CaCO3', resin: 'Résine Na+', pure: 'Eau adoucie' },
        ru: { ion1: 'Ионы Ca2+ / Mg2+', boil: 'Кипячение: осадок CaCO3', resin: 'Na+ смола', pure: 'Мягкая вода' },
        ar: { ion1: 'أيونات الكالسيوم والمغنيسيوم', boil: 'الغليان: ترسب كربونات الكالسيوم', resin: 'راتنج صوديوم', pure: 'ماء يسر' },
        zh: { ion1: '钙镁离子 (Ca2+/Mg2+)', boil: '加热煮沸产生沉淀', resin: '钠型离子交换树脂', pure: '软化水' },
        ku: { ion1: 'Îyonên Ca2+ / Mg2+', boil: 'Kelandin: CaCO3 dikişe', resin: 'Rezîna Na+', pure: 'Ava Nerm' },
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
        tr: 'Fosil yakıt gazlarının (SO2, NO2) atmosferde H2SO4 ve HNO3 asitlerine dönüşmesi.',
        en: 'Atmospheric conversion of fossil emissions (SO2, NO2) into sulfuric and nitric acids.',
        de: 'Umwandlung fossiler Abgase (SO2, NO2) in der Atmosphäre zu Schwefel- und Salpetersäure.',
        fr: 'Transformation atmosphérique des émissions de SO2 et NO2 en acides sulfurique et nitrique.',
        ru: 'Превращение промышленных выбросов (SO2, NO2) в атмосфере в серную и азотную кислоты.',
        ar: 'تحول غازات الوقود الأحفوري (SO2, NO2) في الغلاف الجوي إلى حمض الكبريتيك والنتريك.',
        zh: '化石燃烧排放物 (SO2, NO2) 在大气中水合转化为硫酸与硝酸酸雨。',
        ku: 'Veguhertina gazên sotemeniya fosîlî di atmosferê de ber bi asîdên H2SO4 û HNO3.',
      },
      labels: {
        tr: { so2: 'SO2 / SO3 Gazı', no2: 'NO2 Gazı', rain: 'Asit Yağmuru (pH < 5.2)', co2: 'Sera Etkisi (CO2, CH4)' },
        en: { so2: 'SO2 / SO3 Emission', no2: 'NO2 Emission', rain: 'Acid Rain (pH < 5.2)', co2: 'Greenhouse (CO2, CH4)' },
        de: { so2: 'SO2 / SO3 Abgase', no2: 'NO2 Abgase', rain: 'Saurer Regen (pH < 5,2)', co2: 'Treibhausgase (CO2)' },
        fr: { so2: 'Émissions SO2/SO3', no2: 'Émissions NO2', rain: 'Pluie acide (pH < 5.2)', co2: 'Effet de serre' },
        ru: { so2: 'Выбросы SO2 / SO3', no2: 'Выбросы NO2', rain: 'Кислотный дождь', co2: 'Парниковый эффект' },
        ar: { so2: 'انبعاثات أكاسيد الكبريت', no2: 'انبعاثات أكاسيد النيتروجين', rain: 'مطر حمضي', co2: 'احتباس حراري' },
        zh: { so2: '二氧化硫与三氧化硫', no2: '二氧化氮废气', rain: '酸雨沉降 (pH < 5.2)', co2: '温室气体 (CO2, CH4)' },
        ku: { so2: 'Gaza SO2 / SO3', no2: 'Gaza NO2', rain: 'Barana Asîdî', co2: 'Bandora Serayê' },
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
        tr: 'Kapalı sistemde kimyasal tepkimeye giren maddelerin kütlesi oluşan ürünlere eşittir.',
        en: 'Total mass of reactants strictly equals total mass of products in a closed system.',
        de: 'In einem geschlossenen System entspricht die Masse der Reaktanten der Masse der Produkte.',
        fr: 'Dans un système clos, la masse totale des réactifs est rigoureusement égale à celle des produits.',
        ru: 'В закрытой системе масса вступивших в реакцию веществ равна массе продуктов.',
        ar: 'في النظام المغلق، تتساوى كتلة المواد المتفاعلة تماماً مع كتلة المواد الناتجة.',
        zh: '密闭反应体系中反应物的总质量严格等于生成物的总质量。',
        ku: 'Di sîstema girtî de koma giştî ya keresteyên dikevin bertekê yeksanî ya berheman e.',
      },
      labels: {
        tr: { mreact: 'Girenler Kütlesi (mgiren)', mprod: 'Ürünler Kütlesi (mürün)', balance: 'Kütle Korunumu (Lavoisier)', ratio: 'Sabit Oranlar (Proust)' },
        en: { mreact: 'Reactant Mass', mprod: 'Product Mass', balance: 'Conservation (Lavoisier)', ratio: 'Definite Proportions (Proust)' },
        de: { mreact: 'Eduktausgangsmasse', mprod: 'Produktmasse', balance: 'Massenerhaltung', ratio: 'Konstante Proportionen' },
        fr: { mreact: 'Masse des réactifs', mprod: 'Masse des produits', balance: 'Conservation de la masse', ratio: 'Proportions définies' },
        ru: { mreact: 'Масса реагентов', mprod: 'Масса продуктов', balance: 'Закон Лавуазье', ratio: 'Закон Пруста' },
        ar: { mreact: 'كتلة المتفاعلات', mprod: 'كتلة النواتج', balance: 'حفظ الكتلة (لافوازييه)', ratio: 'النسب الثابتة (براوست)' },
        zh: { mreact: '反应物总质量', mprod: '生成物总质量', balance: '质量守恒（拉瓦锡）', ratio: '定组成定律（普鲁斯特）' },
        ku: { mreact: 'Koma Keresteyan', mprod: 'Koma Berheman', balance: 'Parastina Komê', ratio: 'Rêjeyên Sabît' },
      },
    },
    {
      archetype: 'gas-piston-manometer',
      title: {
        tr: 'Mol Kavramı ve Avogadro Dönüşümü',
        en: 'The Mole Concept and Avogadro Relations',
        de: 'Molbegriff und Avogadro-Zusammenhänge',
        fr: 'Concept de mole et relations d Avogadro',
        ru: 'Понятие моля и постоянная Авогадро',
        ar: 'مفهوم المول وعلاقات أفوجادرو',
        zh: '摩尔概念与阿伏伽德罗常数转化',
        ku: 'Têgeha Molê û Veguherîna Avogadro',
      },
      caption: {
        tr: 'Mol sayısı: n = m/MA = N/NA = V/22.4 (Normal Koşullarda).',
        en: 'Mole calculations linking grams, particle counts, and standard gas volume (22.4 L).',
        de: 'Molrechnung zur Verknüpfung von Gramm, Teilchenzahl und Normgasvolumen (22,4 L).',
        fr: 'Calculs de moles liant masse en grammes, nombre d entités et volume molaire gazeux (22,4 L).',
        ru: 'Расчёт молей: связь массы в граммах, числа частиц и объёма газа при н.у. (22,4 л).',
        ar: 'حسابات المول: n = m/MA = N/NA = V/22.4 لتر في الظروف القياسية.',
        zh: '摩尔公式关系网络：n = m/MA = N/NA = V/22.4L（标准状况下）。',
        ku: 'Hesabên molê: n = m/MA = N/NA = V/22.4 L di mercên asayî de.',
      },
      labels: {
        tr: { mol: 'n (Mol Sayısı)', na: 'NA = 6.02x10^23', vmol: 'NK: 22.4 L/mol', ma: 'Mol Kütlesi (g/mol)' },
        en: { mol: 'n (Moles)', na: 'NA = 6.02x10^23', vmol: 'STP: 22.4 L/mol', ma: 'Molar Mass (g/mol)' },
        de: { mol: 'n (Mol)', na: 'NA = 6,02x10^23', vmol: 'Normalbedingungen 22,4 L', ma: 'Molare Masse' },
        fr: { mol: 'n (Moles)', na: 'NA = 6,02x10^23', vmol: 'CNTP: 22,4 L/mol', ma: 'Masse molaire' },
        ru: { mol: 'n (Число моль)', na: 'NA = 6,02x10^23', vmol: 'н.у.: 22,4 л/моль', ma: 'Молярная масса' },
        ar: { mol: 'n (عدد المولات)', na: 'NA = 6.02x10^23', vmol: 'حجم الغاز: 22.4 لتر', ma: 'الكتلة المولية' },
        zh: { mol: '物质的量 n (mol)', na: '阿伏伽德罗常数 NA', vmol: '标况气体摩尔体积 22.4L', ma: '摩尔质量 MA' },
        ku: { mol: 'n (Hejmara Molan)', na: 'NA = 6.02x10^23', vmol: 'NK: 22.4 L/mol', ma: 'Koma Molar' },
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
        tr: 'Tepkimede önce tükenen madde sınırlayıcı bileşendir ve oluşacak ürün miktarını belirler.',
        en: 'The reactant depleted first is limiting and dictates the theoretical yield of products.',
        de: 'Der zuerst verbrauchte Reaktant ist limitierend und bestimmt die theoretische Ausbeute.',
        fr: 'Le réactif consommé en premier est limitant et détermine le rendement théorique.',
        ru: 'Реагент, расходуемый первым, является лимитирующим и определяет теоретический выход.',
        ar: 'المتفاعل الذي ينفد أولاً هو المحدد للتفاعل ويحدد كمية الناتج النظري.',
        zh: '化学反应中首先完全消耗的物质为限量反应物，决定生成物的理论产率。',
        ku: 'Madeya ku berê diqede sînordar e û hejmara berhema dawî diyar dike.',
      },
      labels: {
        tr: { limit: 'Sınırlayıcı Bileşen', excess: 'Artan Madde', yield: '% Verim = (Gerçek/Teorik)x100', comb: 'Yanma Tepkimesi' },
        en: { limit: 'Limiting Reactant', excess: 'Excess Reactant', yield: '% Yield = (Actual/Theo)x100', comb: 'Combustion' },
        de: { limit: 'Limitierender Reaktant', excess: 'Überschuss', yield: 'Ausbeute in %', comb: 'Verbrennung' },
        fr: { limit: 'Réactif limitant', excess: 'Réactif en excès', yield: 'Rendement (%)', comb: 'Combustion' },
        ru: { limit: 'Лимитирующий реагент', excess: 'Избыток', yield: 'Выход реакции (%)', comb: 'Реакция горения' },
        ar: { limit: 'المتفاعل المحدد', excess: 'المادة الفائضة', yield: 'نسبة المردود المئوية', comb: 'تفاعل احتراق' },
        zh: { limit: '限量反应物', excess: '过量未反应物', yield: '产率百分比 (实际/理论)', comb: '烃类燃烧反应' },
        ku: { limit: 'Keresteya Sînordar', excess: 'Madeya Zêde', yield: '% Berhemdarî', comb: 'Berteka Şewitandinê' },
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
        tr: 'Çözeltide çöken katı net iyon denklemini oluştururken diğer iyonlar seyirci kalır.',
        en: 'Precipitated solid defines the net ionic equation while unreacted spectator ions remain dissolved.',
        de: 'Der ausfallende Feststoff bildet die Nettoionengleichung; Zuschauerionen bleiben gelöst.',
        fr: 'Le solide précipité constitue l équation ionique nette tandis que les ions spectateurs restent dissous.',
        ru: 'Выпадающий осадок формирует чистое ионное уравнение, а ионы-зрители остаются в растворе.',
        ar: 'المادة الصلبة المترسبة تشكل المعادلة الأيونية الصافية بينما تبقى الأيونات المتفرجة ذائبة.',
        zh: '沉淀晶体决定净离子方程式，未参与反应的旁观离子游离于水溶液中。',
        ku: 'Madeya req a dikişe hevkêşeya net a îyonî pêk tîne, îyonên din temaşevan dimînin.',
      },
      labels: {
        tr: { ppt: 'Çökelek (AgCl katısı)', spec1: 'Na+ Seyirci İyon', spec2: 'NO3- Seyirci İyon', net: 'Net: Ag+(suda) + Cl-(suda)' },
        en: { ppt: 'Precipitate (AgCl solid)', spec1: 'Na+ Spectator', spec2: 'NO3- Spectator', net: 'Net: Ag+(aq) + Cl-(aq)' },
        de: { ppt: 'Niederschlag (AgCl)', spec1: 'Na+ Zuschauerion', spec2: 'NO3- Zuschauerion', net: 'Netto: Ag+ + Cl-' },
        fr: { ppt: 'Précipité (AgCl solide)', spec1: 'Spectateur Na+', spec2: 'Spectateur NO3-', net: 'Net: Ag+ + Cl-' },
        ru: { ppt: 'Осадок (AgCl тв)', spec1: 'Ион-зритель Na+', spec2: 'Ион-зритель NO3-', net: 'Ионное: Ag+ + Cl-' },
        ar: { ppt: 'راسب صلب (AgCl)', spec1: 'أيون متفرج Na+', spec2: 'أيون متفرج NO3-', net: 'الصافية: Ag+ + Cl-' },
        zh: { ppt: '难溶沉淀 (AgCl固体)', spec1: '钠旁观离子 (Na+)', spec2: '硝酸根旁观离子', net: '净反应: Ag+ + Cl- -> AgCl' },
        ku: { ppt: 'Nişîv (AgCl)', spec1: 'Îyona Temaşevan Na+', spec2: 'Îyona Temaşevan NO3-', net: 'Net: Ag+ + Cl-' },
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
        tr: 'Kaynama noktaları farklı homojen sıvı-sıvı karışımların fraksiyon kolonuyla ayrılması.',
        en: 'Separation of miscible liquids with close boiling points using a fractionating column.',
        de: 'Trennung mischbarer Flüssigkeiten mit unterschiedlichen Siedepunkten über eine Rektifikationskolonne.',
        fr: 'Séparation de liquides miscibles ayant des points d ébullition différents grâce à une colonne de fractionnement.',
        ru: 'Разделение жидких смесей с близкими температурами кипения с помощью дефлегматора.',
        ar: 'فصل السوائل الممتزجة ذات درجات الغليان المتقاربة باستخدام عمود التجزئة.',
        zh: '利用分馏柱根据各组分沸点差异分离互溶液体混合物。',
        ku: 'Veqetandina şile-şile yên bi xalên kelînê yên cuda bi riya stûna fraksiyonê.',
      },
      labels: {
        tr: { col: 'Fraksiyon Kolonu', cond: 'Liebig Soğutucu', vap1: 'Düşük KN Buharı (Etanol)', vap2: 'Yüksek KN Sıvısı (Su)' },
        en: { col: 'Fractionating Column', cond: 'Liebig Condenser', vap1: 'Lower BP (Ethanol)', vap2: 'Higher BP (Water)' },
        de: { col: 'Fraktionierkolonne', cond: 'Liebigkühler', vap1: 'Niedriger Sdp. (Ethanol)', vap2: 'Höherer Sdp. (Wasser)' },
        fr: { col: 'Colonne de fractionnement', cond: 'Réfrigérant de Liebig', vap1: 'Bas point d ébullition', vap2: 'Haut point d ébullition' },
        ru: { col: 'Дефлегматор', cond: 'Холодильник Либиха', vap1: 'Легкокипящая фракция', vap2: 'Тяжелокипящая фракция' },
        ar: { col: 'عمود التجزئة', cond: 'مكثف ليبيج', vap1: 'أقل غلياناً (إيثانول)', vap2: 'أعلى غلياناً (ماء)' },
        zh: { col: '分馏柱', cond: '冷凝管', vap1: '低沸点组分 (乙醇蒸气)', vap2: '高沸点残留液 (水)' },
        ku: { col: 'Stûna Fraksiyonê', cond: 'Sarkerê Liebig', vap1: 'Kelîna Nizm (Etanol)', vap2: 'Kelîna Bilind (Av)' },
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
        tr: 'Birbiri içinde çözünmeyen heterojen emülsiyon sıvıların muslukla ayrılması.',
        en: 'Separation of immiscible heterogeneous liquid layers based on density differences.',
        de: 'Abtrennung nicht mischbarer Flüssigkeitsschichten im Scheidetrichter anhand von Dichteunterschieden.',
        fr: 'Séparation de phases liquides non miscibles par gravité selon leurs masses volumiques.',
        ru: 'Разделение несмешивающихся слоёв жидкости по плотности с помощью крана воронки.',
        ar: 'فصل طبقات السوائل غير الممتزجة اعتماداً على فرق الكثافة بواسطة صنبور القمع.',
        zh: '利用分液漏斗旋塞依据密度差异分步放出互不相溶的液体分层。',
        ku: 'Veqetandina qatên şile yên di nav hev de nahelin li gorî tîrbûnê bi mifteyê.',
      },
      labels: {
        tr: { top: 'Zeytinyağı (d=0.92 g/mL)', bot: 'Su Katmanı (d=1.00 g/mL)', valve: 'Hassas Cam Musluk', flask: 'Toplama Beheri' },
        en: { top: 'Oil Layer (d=0.92)', bot: 'Water Layer (d=1.00)', valve: 'Stopcock Valve', flask: 'Receiving Flask' },
        de: { top: 'Ölschicht (obere Phase)', bot: 'Wasserschicht (untere Phase)', valve: 'Glashahn', flask: 'Auffangbecher' },
        fr: { top: 'Phase organique supérieure', bot: 'Phase aqueuse dense', valve: 'Robinet', flask: 'Bécher de collecte' },
        ru: { top: 'Верхний слой масла', bot: 'Нижний водный слой', valve: 'Кран воронки', flask: 'Приёмный стакан' },
        ar: { top: 'الطبقة العلوية (أقل كثافة)', bot: 'الطبقة السفلية (ماء)', valve: 'صنبور التحكم', flask: 'كأس الاستقبال' },
        zh: { top: '上层轻液相 (有机相/油)', bot: '下层重液相 (水相)', valve: '分液漏斗旋塞', flask: '接收烧杯' },
        ku: { top: 'Qata Rûnê (Sivik)', bot: 'Qata Avê (Tîr)', valve: 'Mifteya Cam', flask: 'Behera Berhevkirinê' },
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
        tr: 'H+ ve OH- iyonlarının birleşerek su ve tuz oluşturması: pH 7 nötr noktası.',
        en: 'Combination of H+ and OH- ions yielding water and ionic salt at neutral pH 7.',
        de: 'Reaktion von H+ und OH- Ionen zu Wasser und Salz mit Neutralpunkt bei pH 7.',
        fr: 'Combinaison d ions H+ et OH- formant eau et sel avec équivalence neutre à pH 7.',
        ru: 'Взаимодействие ионов H+ и OH- с образованием воды и соли при нейтральном pH 7.',
        ar: 'اتحاد أيونات الهيدروجين والهيدروكسيد لتكوين الماء والملح عند درجة تعادل pH 7.',
        zh: '氢离子与氢氧根离子结合生成水与中性盐晶体，pH=7为中性点。',
        ku: 'Yekbûna îyonên H+ û OH- bo çêkirina av û xwê li xala pH 7.',
      },
      labels: {
        tr: { acid: 'Asidik (pH < 7)', neutral: 'Nötr (pH = 7.0)', base: 'Bazik (pH > 7)', hplus: '[H+] > [OH-]' },
        en: { acid: 'Acidic (pH < 7)', neutral: 'Neutral (pH = 7.0)', base: 'Basic (pH > 7)', hplus: '[H+] > [OH-]' },
        de: { acid: 'Sauer (pH < 7)', neutral: 'Neutral (pH = 7)', base: 'Basisch (pH > 7)', hplus: '[H+] > [OH-]' },
        fr: { acid: 'Acide (pH < 7)', neutral: 'Neutre (pH = 7.0)', base: 'Basique (pH > 7)', hplus: '[H+] > [OH-]' },
        ru: { acid: 'Кислая среда', neutral: 'Нейтральная (7.0)', base: 'Щелочная среда', hplus: '[H+] > [OH-]' },
        ar: { acid: 'حمضي (pH < 7)', neutral: 'متعادل (7.0)', base: 'قاعدي (pH > 7)', hplus: '[H+] > [OH-]' },
        zh: { acid: '酸性区域 (pH < 7)', neutral: '中性平衡点 (pH = 7.0)', base: '碱性区域 (pH > 7)', hplus: '[H+] > [OH-]' },
        ku: { acid: 'Asîdî (pH < 7)', neutral: 'Bêalî (pH = 7.0)', base: 'Bazîk (pH > 7)', hplus: '[H+] > [OH-]' },
      },
    },
    {
      archetype: 'titration-burette-curve',
      title: {
        tr: 'Metallerin Asitlerle Gaz Çıkış Reaksiyonları',
        en: 'Metal-Acid Reactions & Gas Evolution',
        de: 'Metall-Säure-Reaktionen und Gasentwicklung',
        fr: 'Réactions métaux-acides et dégagement gazeux',
        ru: 'Реакции металлов с кислотами и выделение газов',
        ar: 'تفاعلات الفلزات مع الأحماض وتصاعد الغازات',
        zh: '金属与酸反应特征与气体生成规律',
        ku: 'Bertekên Metal û Asîdan û Derketina Gazê',
      },
      caption: {
        tr: 'Aktif metal H2 gazı, yarı soy metal (Cu) HNO3 ile NO/NO2 gazı üretir (H2 üretmez!).',
        en: 'Active metals evolve H2 gas; semi-noble metals (Cu, Ag) with HNO3 release NO/NO2 (no H2!).',
        de: 'Aktive Metalle entwickeln H2; Halb-Edelmetalle mit HNO3 setzen NO/NO2 frei (kein H2!).',
        fr: 'Les métaux actifs dégagent du H2; les métaux semi-nobles (Cu) avec HNO3 libèrent NO/NO2.',
        ru: 'Активные металлы выделяют H2; полублагородные (Cu) с HNO3 дают NO/NO2 (не H2!).',
        ar: 'الفلزات النشطة تصعد غاز الهيدروجين، والفلزات شبه الخاملة تنتج أكاسيد النيتروجين.',
        zh: '活泼金属置换放出氢气；半贵金属 (铜、银) 与硝酸反应生成氮氧化物而非氢气！',
        ku: 'Metalên çalak gaza H2 derdixin; nîv-esîl (Cu) bi HNO3 re gaza NO/NO2 çêdike.',
      },
      labels: {
        tr: { active: 'Aktif Metal -> H2(g)', cu_conc: 'Cu + Derişik HNO3 -> NO2', cu_dil: 'Cu + Seyreltik HNO3 -> NO', amph: 'Amfoter + Baz -> H2(g)' },
        en: { active: 'Active Metal -> H2(g)', cu_conc: 'Cu + Conc. HNO3 -> NO2', cu_dil: 'Cu + Dil. HNO3 -> NO', amph: 'Amphoteric + Base -> H2' },
        de: { active: 'Aktives Metall -> H2', cu_conc: 'Cu + konz. HNO3 -> NO2', cu_dil: 'Cu + verd. HNO3 -> NO', amph: 'Amphoter + Lauge -> H2' },
        fr: { active: 'Métal actif -> H2', cu_conc: 'Cu + HNO3 conc. -> NO2', cu_dil: 'Cu + HNO3 dil. -> NO', amph: 'Amphotère + Base -> H2' },
        ru: { active: 'Активный металл -> H2', cu_conc: 'Cu + конц. HNO3 -> NO2', cu_dil: 'Cu + разб. HNO3 -> NO', amph: 'Амфотерный + щёлочь -> H2' },
        ar: { active: 'فلز نشط -> هيدروجين', cu_conc: 'نحاس + حمض مركز -> NO2', cu_dil: 'نحاس + حمض مخفف -> NO', amph: 'متردد + قاعدة -> هيدروجين' },
        zh: { active: '活泼金属置换生成 H2', cu_conc: '铜 + 浓硝酸生成红棕色 NO2', cu_dil: '铜 + 稀硝酸生成一氧化氮 NO', amph: '两性金属溶于强碱放出 H2' },
        ku: { active: 'Metala Çalak -> H2', cu_conc: 'Cu + HNO3 ya Xest -> NO2', cu_dil: 'Cu + HNO3 ya Tenik -> NO', amph: 'Amfoter + Baz -> H2' },
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
        tr: 'Hidrofob kuyruk apolar yağa tutunur, hidrofil baş polar suya yönelerek kiri hapseder.',
        en: 'Hydrophobic nonpolar tail embeds in grease; hydrophilic polar head faces water to emulsify.',
        de: 'Der hydrophobe Schwanz bindet an Schmutz; der hydrophile Kopf ragt ins Wasser.',
        fr: 'La queue hydrophobe se lie à la graisse; la tête hydrophile s oriente vers l eau pour l émulsionner.',
        ru: 'Гидрофобный хвост внедряется в жир, а гидрофильная голова обращена к воде.',
        ar: 'يتغلغل الذيل الكاره للماء في الدهون، بينما يتجه الرأس المحب للماء نحو جزيئات الماء.',
        zh: '疏水长烃链尾端吸附包裹油脂污渍，亲水性极性头部朝向水相乳化脱附。',
        ku: 'Dûvikê hîdrofob bi rûnê digire, serê hîdrofîl ber bi avê ve diçe û pîsbûnê radike.',
      },
      labels: {
        tr: { head: 'Hidrofil Baş (-COO- Na+)', tail: 'Hidrofob Kuyruk (Apolar)', dirt: 'Apolar Yağ Kiri', water: 'Su Çözeltisi' },
        en: { head: 'Hydrophilic Head', tail: 'Hydrophobic Tail', dirt: 'Nonpolar Grease Dirt', water: 'Aqueous Phase' },
        de: { head: 'Hydrophiler Kopf', tail: 'Hydrophober Schwanz', dirt: 'Fettpartikel', water: 'Wässrige Phase' },
        fr: { head: 'Tête hydrophile', tail: 'Queue hydrophobe', dirt: 'Saleté lipidique', water: 'Solution aqueuse' },
        ru: { head: 'Гидрофильная голова', tail: 'Гидрофобный хвост', dirt: 'Жировое загрязнение', water: 'Водный раствор' },
        ar: { head: 'رأس محب للماء', tail: 'ذيل كاره للماء', dirt: 'بقعة زيتية غير قطبية', water: 'الوسط المائي' },
        zh: { head: '亲水基团头部 (-COO- Na+)', tail: '疏水亲脂烷烃尾链', dirt: '非极性油污核心', water: '水相极性环境' },
        ku: { head: 'Serê Hîdrofîl', tail: 'Dûvikê Hîdrofob', dirt: 'Pîsbûna Rûnê', water: 'Çareseriya Avê' },
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
        tr: 'Etilen gibi monomerlerin pi bağlarının açılarak uzun zincirli PE, PVC, Teflon oluşturması.',
        en: 'Opening of monomer pi bonds creating continuous repeating structural units.',
        de: 'Öffnung von Monomer-Pi-Bindungen zur Bildung langer Ketten wie PE, PVC und Teflon.',
        fr: 'Ouverture des liaisons pi pour former de longues chaînes comme le PE, PVC ou Téflon.',
        ru: 'Раскрытие пи-связей мономеров с образованием длинных макромолекулярных цепей.',
        ar: 'انفتاح الروابط الثنائية للمونومرات لتكوين سلاسل طويلة مثل البولي إيثيلين والتفلون.',
        zh: '乙烯类单体打开碳碳双键π键，连接形成高分子聚乙烯、PVC与聚四氟乙烯。',
        ku: 'Vekirina bendên pî yên monomeran bo çêkirina zencîreyên dirêj ên PE, PVC û Teflonê.',
      },
      labels: {
        tr: { mono: 'Monomer (Etilen)', poly: 'Polimer Zinciri (PE)', teflon: 'PTFE (Teflon)', pvc: 'PVC (Vinil Klorür)' },
        en: { mono: 'Monomer (Ethylene)', poly: 'Polymer Chain (PE)', teflon: 'PTFE (Teflon)', pvc: 'Polyvinyl Chloride' },
        de: { mono: 'Monomer (Ethylen)', poly: 'Polymerkette (PE)', teflon: 'PTFE (Teflon)', pvc: 'PVC' },
        fr: { mono: 'Monomère (Éthylène)', poly: 'Chaîne polymère (PE)', teflon: 'PTFE (Téflon)', pvc: 'PVC' },
        ru: { mono: 'Мономер (Этилен)', poly: 'Полимерная цепь (ПЭ)', teflon: 'ПТФЭ (Тефлон)', pvc: 'ПВХ' },
        ar: { mono: 'مونومر (إيثيلين)', poly: 'سلسلة بوليمر (PE)', teflon: 'تفلون (PTFE)', pvc: 'كلوريد البوليفينيل' },
        zh: { mono: '单体结构 (乙烯单体)', poly: '高分子聚乙烯链 (PE)', teflon: '聚四氟乙烯 (特氟龙)', pvc: '聚氯乙烯 (PVC材料)' },
        ku: { mono: 'Monomer (Etîlen)', poly: 'Zencîreya Polîmer', teflon: 'PTFE (Teflon)', pvc: 'PVC' },
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
        tr: 'Baş (n), açısal momentum (l), manyetik (ml) ve spin (ms) kuantum sayıları.',
        en: 'Principal (n), azimuthal (l), magnetic (ml), and spin (ms) quantum numbers defining orbital states.',
        de: 'Haupt- (n), Neben- (l), Magnet- (ml) und Spin- (ms) Quantenzahlen.',
        fr: 'Nombres quantiques principal (n), azimutal (l), magnétique (ml) et de spin (ms).',
        ru: 'Главное (n), орбитальное (l), магнитное (ml) и спиновое (ms) квантовые числа.',
        ar: 'أعداد الكم: الرئيسي (n)، الثانوي (l)، المغناطيسي (ml)، والمغزلي (ms).',
        zh: '主量子数 n、角量子数 l、磁量子数 ml 与自旋量子数 ms 完整描述电子波函数状态。',
        ku: 'Hejmarên kuantûmê yên serekî (n), goşeyî (l), magnetîk (ml) û spîn (ms).',
      },
      labels: {
        tr: { s_orb: 's Orbitali (l=0, küresel)', p_orb: 'p Orbitali (l=1, loblu)', d_orb: 'd Orbitali (l=2)', spin: 'Pauli: Zıt Spin (+1/2, -1/2)' },
        en: { s_orb: 's Orbital (spherical)', p_orb: 'p Orbital (dumbbell)', d_orb: 'd Orbital (cloverleaf)', spin: 'Pauli: Opposite Spins' },
        de: { s_orb: 's-Orbital (kugelförmig)', p_orb: 'p-Orbital (hantelförmig)', d_orb: 'd-Orbital', spin: 'Pauli-Prinzip (Spins)' },
        fr: { s_orb: 'Orbitale s (sphérique)', p_orb: 'Orbitale p (haltère)', d_orb: 'Orbitale d', spin: 'Principe de Pauli' },
        ru: { s_orb: 's-орбиталь (сфера)', p_orb: 'p-орбиталь (гантель)', d_orb: 'd-орбиталь', spin: 'Принцип Паули (+1/2, -1/2)' },
        ar: { s_orb: 'مدار s (كروي)', p_orb: 'مدار p (فصي)', d_orb: 'مدار d', spin: 'مبدأ باولي: دوران متعاكس' },
        zh: { s_orb: 's 轨道 (球形对称)', p_orb: 'p 轨道 (哑铃形三向伸展)', d_orb: 'd 轨道 (花瓣形五个空间取向)', spin: '泡利不相容: 自旋相反' },
        ku: { s_orb: 'Orbîtala s (Gilover)', p_orb: 'Orbîtala p', d_orb: 'Orbîtala d', spin: 'Zanista Pauli' },
      },
    },
    {
      archetype: 'bohr-orbital-atom',
      title: {
        tr: 'Aufbau, Hund ve Küresel Simetri (Cr ve Cu)',
        en: 'Aufbau, Hund Rule & Spherical Symmetry',
        de: 'Aufbauprinzip, Hundsche Regel & Symmetrie',
        fr: 'Aufbau, règle de Hund et symétrie sphérique',
        ru: 'Принцип Ауфбау, правило Хунда и симметрия',
        ar: 'مبدأ البناء التصاعدي وقاعدة هوند والتماثل',
        zh: '构造原理、洪特规则与全满半满球形对称',
        ku: 'Prensîba Aufbau, Hund û Sîmetriya Gilover',
      },
      caption: {
        tr: '24Cr (4s1 3d5) ve 29Cu (4s1 3d10) küresel simetri nedeniyle kararlıdır ve temel haldedir.',
        en: '24Cr and 29Cu ground state anomalies achieve extra thermodynamic stability via spherical symmetry.',
        de: 'Grundzustandsanomalien von Cr und Cu mit zusätzlicher Stabilität durch Kugelsymmetrie.',
        fr: 'Configurations fondamentales stables de Cr et Cu dues à la symétrie sphérique demi-pleine ou pleine.',
        ru: 'Стабильность конфигураций хрома и меди в основном состоянии за счёт сферической симметрии.',
        ar: 'استقرار التوزيع الإلكتروني للكروم والنحاس في الحالة المستقرة بفضل التماثل الكروي.',
        zh: '24号铬 (4s1 3d5) 与 29号铜 (4s1 3d10) 因半满和全满球形对称具有额外基态热力学稳定性。',
        ku: '24Cr û 29Cu ji ber sîmetriya gilover xwedî aramiya zêde ne û di rewşa bingehîn de ne.',
      },
      labels: {
        tr: { cr: 'Cr: [Ar] 4s1 3d5 (Yarı Dolu)', cu: 'Cu: [Ar] 4s1 3d10 (Tam Dolu)', aufbau: 'Aufbau: Enerji Sırası', hund: 'Hund: Paralel Spin' },
        en: { cr: 'Cr: [Ar] 4s1 3d5 (Half-Filled)', cu: 'Cu: [Ar] 4s1 3d10 (Fully Filled)', aufbau: 'Aufbau: Energy Order', hund: 'Hund: Parallel Spin' },
        de: { cr: 'Cr: 4s1 3d5 (Halb besetzt)', cu: 'Cu: 4s1 3d10 (Voll besetzt)', aufbau: 'Aufbauprinzip', hund: 'Hundsche Regel' },
        fr: { cr: 'Cr: 4s1 3d5 (Demi-remplie)', cu: 'Cu: 4s1 3d10 (Saturée)', aufbau: 'Principe d Aufbau', hund: 'Règle de Hund' },
        ru: { cr: 'Cr: 4s1 3d5 (полузаполнена)', cu: 'Cu: 4s1 3d10 (заполнена)', aufbau: 'Принцип заполнения', hund: 'Правило Хунда' },
        ar: { cr: 'كروم: 4s1 3d5 (نصف ممتلئ)', cu: 'نحاس: 4s1 3d10 (ممتلئ تماماً)', aufbau: 'أوفباو: ترتيب الطاقة', hund: 'هوند: غزل متوازٍ' },
        zh: { cr: '铬 Cr: 4s1 3d5 半充满稳定', cu: '铜 Cu: 4s1 3d10 全充满稳定', aufbau: '构造原理能量递增排序', hund: '洪特规则平行自旋先单占' },
        ku: { cr: 'Cr: 4s1 3d5 (Nîv Tije)', cu: 'Cu: 4s1 3d10 (Tije)', aufbau: 'Aufbau: Rêza Enerjiyê', hund: 'Hund: Spîna Paralel' },
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
        tr: 'P.V = n.R.T denkleminde Boyle, Charles ve Avogadro yasalarının birleşimi.',
        en: 'Integration of Boyle, Charles, Gay-Lussac, and Avogadro laws in the ideal gas equation.',
        de: 'Zusammenführung der Gesetze von Boyle, Charles und Avogadro in P.V = n.R.T.',
        fr: 'Intégration des lois de Boyle, Charles et Avogadro dans l équation P.V = n.R.T.',
        ru: 'Объединение законов Бойля, Шарля и Авогадро в уравнении Менделеева-Клапейрона.',
        ar: 'دمج قوانين بويل وشارل وأفوجادرو في معادلة الغاز المثالي: P.V = n.R.T.',
        zh: '将玻意耳、查理、盖-吕萨克与阿伏伽德罗定律统一于克拉伯龙方程 P·V = n·R·T。',
        ku: 'Yekbûna zagonên Boyle, Charles û Avogadro di hevkêşeya P.V = n.R.T de.',
      },
      labels: {
        tr: { boyle: 'Boyle: P1V1 = P2V2', charles: 'Charles: V1/T1 = V2/T2', piston: 'İdeal Hareketli Piston', rconst: 'R = 0.082 L.atm/mol.K' },
        en: { boyle: 'Boyle: P1V1 = P2V2', charles: 'Charles: V1/T1 = V2/T2', piston: 'Movable Frictionless Piston', rconst: 'R = 0.082 L.atm/mol.K' },
        de: { boyle: 'Boyle-Mariotte: P1V1=P2V2', charles: 'Gay-Lussac/Charles: V/T=konst.', piston: 'Beweglicher Kolben', rconst: 'Gaskonstante R' },
        fr: { boyle: 'Loi de Boyle: P1V1=P2V2', charles: 'Loi de Charles: V1/T1=V2/T2', piston: 'Piston mobile', rconst: 'Constante R' },
        ru: { boyle: 'Закон Бойля: P1V1=P2V2', charles: 'Закон Шарля: V1/T1=V2/T2', piston: 'Подвижный поршень', rconst: 'Газовая постоянная R' },
        ar: { boyle: 'بويل: P1V1 = P2V2', charles: 'شارل: V1/T1 = V2/T2', piston: 'مكبس حر الحركة', rconst: 'ثابت الغازات R' },
        zh: { boyle: '玻意耳定律: P1V1=P2V2 (等温)', charles: '查理定律: V1/T1=V2/T2 (等压)', piston: '光滑无摩擦可移动活塞', rconst: '摩尔气体常数 R' },
        ku: { boyle: 'Boyle: P1V1 = P2V2', charles: 'Charles: V1/T1 = V2/T2', piston: 'Pîstona Bizavkar', rconst: 'Sabîta R' },
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
        tr: 'U borusundaki cıva sütunu yüksekliği ile kapalı veya açık kaplardaki gaz basıncının ölçülmesi.',
        en: 'U-tube liquid mercury displacement determining enclosed gas pressures: P = P0 ± h.',
        de: 'U-Rohr-Quecksilberdifferenz zur Bestimmung des Innendrucks: P = P0 ± h.',
        fr: 'Déplacement de mercure dans un tube en U déterminant la pression: P = P0 ± h.',
        ru: 'Измерение давления газа по разности уровней ртути в U-образной трубке: P = P0 ± h.',
        ar: 'قياس ضغط الغاز بارتفاع عمود الزئبق في الأنبوب على شكل U: P = P0 ± h.',
        zh: '利用U型管水银高度差精准测定密闭气体绝对压强: P = P0 ± h。',
        ku: 'Pîvandina zexta gazê bi bilindahiya stûna cîvayê di lûleya U de: P = P0 ± h.',
      },
      labels: {
        tr: { p0: 'Açık Hava (P0)', gas: 'Kapalı Gaz (Pgaz)', hdiff: 'Cıva Farkı (h)', eq: 'Pgaz = P0 + h' },
        en: { p0: 'Ambient P0', gas: 'Enclosed Gas P', hdiff: 'Hg Height Δh', eq: 'P = P0 + h' },
        de: { p0: 'Außendruck P0', gas: 'Gasdruck P', hdiff: 'Quecksilbersäule h', eq: 'P = P0 + h' },
        fr: { p0: 'Pression ambiante P0', gas: 'Gaz enfermé', hdiff: 'Différence h (Hg)', eq: 'P = P0 + h' },
        ru: { p0: 'Атмосферное P0', gas: 'Газ в сосуде', hdiff: 'Уровень ртути h', eq: 'P = P0 + h' },
        ar: { p0: 'الضغط الجوي P0', gas: 'ضغط الغاز', hdiff: 'فرق ارتفاع الزئبق h', eq: 'P = P0 + h' },
        zh: { p0: '外界大气压 P0', gas: '密闭容器气体压强 P', hdiff: '水银柱压差高度 h', eq: '平衡方程: P = P0 + h' },
        ku: { p0: 'Zexta Derve (P0)', gas: 'Gaza Girtî (Pgaz)', hdiff: 'Ciyawaziya Cîvayê (h)', eq: 'Pgaz = P0 + h' },
      },
    },
  ],
  u13: [
    {
      archetype: 'gas-piston-manometer',
      title: {
        tr: 'Graham Difüzyon Yasası ve Kinetik Teori',
        en: 'Graham s Law of Diffusion & Kinetic Theory',
        de: 'Grahamsches Diffusionsgesetz & Kinetik',
        fr: 'Loi de diffusion de Graham et théorie cinétique',
        ru: 'Закон диффузии Грэма и кинетическая теория',
        ar: 'قانون جراهام للانتشار والنظرية الحركية',
        zh: '格雷姆气体扩散定律与分子运动论',
        ku: 'Zagona Belavbûnê ya Graham û Teoriya Kînetîk',
      },
      caption: {
        tr: 'Gazların yayılma hızı mutlak sıcaklığın kareköküyle doğru, mol kütlesinin kareköküyle ters orantılıdır.',
        en: 'Diffusion rates are proportional to sqrt(T) and inversely proportional to sqrt(Molar Mass).',
        de: 'Diffusionsgeschwindigkeiten verhalten sich umgekehrt proportional zur Wurzel aus der Molmasse.',
        fr: 'La vitesse de diffusion est inversement proportionnelle à la racine carrée de la masse molaire.',
        ru: 'Скорость диффузии газов обратно пропорциональна квадратному корню из их молярной массы.',
        ar: 'تتناسب سرعة انتشار الغازات عكسياً مع الجذر التربيعي للكتلة المولية.',
        zh: '同温同压下气体的扩散逸出速率与摩尔质量的平方根成反比。',
        ku: 'Leza belavbûna gazan bi koka çarçikî ya germahiyê re rast, bi ya koma molar re çewt guncaw e.',
      },
      labels: {
        tr: { vratio: 'v1/v2 = √(M2/M1)', ch4: 'CH4 (MA=16, Hızlı)', so2: 'SO2 (MA=64, Yavaş)', temp: 'v ∝ √(T/MA)' },
        en: { vratio: 'v1/v2 = √(M2/M1)', ch4: 'CH4 (Fast, MA=16)', so2: 'SO2 (Slow, MA=64)', temp: 'v ∝ √(T/MA)' },
        de: { vratio: 'v1/v2 = √(M2/M1)', ch4: 'CH4 (schnell)', so2: 'SO2 (langsam)', temp: 'v proportional √(T/M)' },
        fr: { vratio: 'v1/v2 = √(M2/M1)', ch4: 'CH4 (rapide)', so2: 'SO2 (lent)', temp: 'v ∝ √(T/M)' },
        ru: { vratio: 'v1/v2 = √(M2/M1)', ch4: 'CH4 (Быстрый, M=16)', so2: 'SO2 (Медленный, M=64)', temp: 'v ∝ √(T/M)' },
        ar: { vratio: 'v1/v2 = √(M2/M1)', ch4: 'ميثان (سريع، 16)', so2: 'ثاني أكسيد الكبريت (بطيء)', temp: 'السرعة تتناسب مع √(T/M)' },
        zh: { vratio: '扩散速率比 v1/v2 = √(M2/M1)', ch4: '甲烷 CH4 (轻质快速扩散)', so2: '二氧化硫 (较重缓慢扩散)', temp: '速率正比于 √(T/MA)' },
        ku: { vratio: 'v1/v2 = √(M2/M1)', ch4: 'CH4 (Lezgîn, MA=16)', so2: 'SO2 (Hêdî, MA=64)', temp: 'v ∝ √(T/MA)' },
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
        tr: 'Toplam basınç kısmi basınçların toplamıdır: Pi = Xi . Ptop. Yüksek T ve düşük P de ideallik artar.',
        en: 'Total pressure is the sum of partial pressures; gases approach ideality at high T and low P.',
        de: 'Der Gesamtdruck ist die Summe der Partialdrücke; Gase nähern sich bei hohem T und niedrigem P der Idealität.',
        fr: 'La pression totale est la somme des pressions partielles; l idéalité augmente à haute T et basse P.',
        ru: 'Общее давление равно сумме парциальных давлений; газы ближе к идеальным при высоком T и низком P.',
        ar: 'الضغط الكلي يساوي مجموع الضغوط الجزئية؛ يقترب الغاز من المثالية عند درجات حرارة عالية وضغط منخفض.',
        zh: '混合气体总压等于各组分分压之和: Pi = Xi · P总；在高温低压下真实气体最接近理想状态。',
        ku: 'Zexta giştî berhema zextên beşî ye: Pi = Xi . Ptop. Di germahiya bilind û zexta nizm de nêzîkî îdealbûnê dibe.',
      },
      labels: {
        tr: { ptop: 'Ptop = P1 + P2', molefrac: 'Xi = ni/ntop', water: 'Su Üstünde Gaz: Ptop = Pgaz + Psu', jt: 'Joule-Thomson Soğuma' },
        en: { ptop: 'Ptot = P1 + P2', molefrac: 'Xi = ni/ntot', water: 'Over Water: P = Pgas + Pwater', jt: 'Joule-Thomson Effect' },
        de: { ptop: 'Pgesamt = P1 + P2', molefrac: 'Molenbruch Xi', water: 'Gas über Wasser', jt: 'Joule-Thomson-Effekt' },
        fr: { ptop: 'Ptotale = P1 + P2', molefrac: 'Fraction molaire Xi', water: 'Recueil sur l eau', jt: 'Effet Joule-Thomson' },
        ru: { ptop: 'Pобщ = P1 + P2', molefrac: 'Мольная доля Xi', water: 'Сбор над водой', jt: 'Эффект Джоуля-Томсона' },
        ar: { ptop: 'الضغط الكلي', molefrac: 'الكسر المولي Xi', water: 'فوق الماء: P = Pgas + Pwater', jt: 'تأثير جول-تومسون' },
        zh: { ptop: '总压 P总 = P1 + P2', molefrac: '摩尔分数 Xi = ni/n总', water: '排水集气法: P总 = P气体 + P水蒸气', jt: '焦耳-汤姆逊绝热膨胀制冷' },
        ku: { ptop: 'Ptop = P1 + P2', molefrac: 'Xi = ni/ntop', water: 'Gaz li ser Avê', jt: 'Bandora Joule-Thomson' },
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
        tr: 'Molarite (M = n/V) ve molalite (m = n/kg) birimleri ile çözünme entalpisi mekanizması.',
        en: 'Molarity (M = n/V) and molality (m = n/kg) definitions alongside enthalpy of solvation.',
        de: 'Molarität (M = n/V) und Molalität (m = n/kg) mit Lösungsenthalpie-Mechanismen.',
        fr: 'Molarité (M = n/V) et molalité (m = n/kg) avec enthalpie de solvatation.',
        ru: 'Молярность (M = n/V) и моляльность (m = n/кг) со ступенями сольватации.',
        ar: 'المولارية (M = n/V) والمولالية (m = n/kg) مع آليات إنتالبي الذوبان.',
        zh: '物质的量浓度 (M = n/V) 与质量摩尔浓度 (m = n/kg) 及溶剂化水合焓过程。',
        ku: 'Molarîte (M = n/V) û molalîte (m = n/kg) ligel mekanîzmaya entalpiya helandinê.',
      },
      labels: {
        tr: { molar: 'M = n / V (Litre)', molal: 'm = n / kg (Çözücü)', dens: 'M = (%C . d . 10) / MA', mix: 'M1V1 + M2V2 = MsVs' },
        en: { molar: 'M = n / V (L)', molal: 'm = n / kg (Solvent)', dens: 'M = (%C . d . 10) / MA', mix: 'M1V1 + M2V2 = MfVf' },
        de: { molar: 'Molarität (mol/L)', molal: 'Molalität (mol/kg)', dens: 'Dichteformel', mix: 'Mischungsgleichung' },
        fr: { molar: 'Molarité (mol/L)', molal: 'Molalité (mol/kg)', dens: 'Formule de densité', mix: 'Équation de mélange' },
        ru: { molar: 'Молярность (моль/л)', molal: 'Моляльность (моль/кг)', dens: 'Связь с плотностью', mix: 'Смешивание растворов' },
        ar: { molar: 'مولارية (مول/لتر)', molal: 'مولالية (مول/كغم)', dens: 'علاقة الكثافة والنسبة', mix: 'معادلة الخلط' },
        zh: { molar: '体积摩尔浓度 M (mol/L)', molal: '质量摩尔浓度 m (mol/kg)', dens: '百分比与密度换算公式', mix: '不同浓度混合公式 M1V1+M2V2' },
        ku: { molar: 'M = n / V (Lître)', molal: 'm = n / kg', dens: 'M = (%C . d . 10) / MA', mix: 'M1V1 + M2V2 = MsVs' },
      },
    },
    {
      archetype: 'lab-glassware-setup',
      title: {
        tr: 'İyon Derişimleri ve Seyreltme',
        en: 'Ionic Concentrations & Dilution Process',
        de: 'Ionenkonzentrationen & Verdünnung',
        fr: 'Concentrations ioniques et dilution',
        ru: 'Концентрация ионов и разбавление',
        ar: 'تراكيز الأيونات وعملية التخفيف',
        zh: '强电解质离子浓度计算与稀释操作',
        ku: 'Xestiyên Îyonan û Tenikkirin',
      },
      caption: {
        tr: 'Al2(SO4)3 gibi tuzların suda iyonlaşması: [Al3+] = 2M, [SO42-] = 3M.',
        en: 'Complete dissociation of salts: stoichiometric ion ratios in aqueous electrolytes.',
        de: 'Vollständige Dissoziation von Salzen: stöchiometrische Ionenverhältnisse in Lösung.',
        fr: 'Dissociation complète des sels dans l eau et calcul stœchiométrique des ions.',
        ru: 'Полная диссоциация солей: стехиометрические соотношения ионов в водном растворе.',
        ar: 'التفكك الكامل للأملاح: حساب التراكيز الأيونية النسبية في المحاليل.',
        zh: '难电离和完全电离盐在水溶液中完全解离的化学计量比离子浓度计算。',
        ku: 'Veqetîna xwêyan di nav avê de: hesabên xestiya îyonan li gorî katsayiyan.',
      },
      labels: {
        tr: { salt: '1 M Al2(SO4)3', al: '[Al3+] = 2 M', so4: '[SO4 2-] = 3 M', total: 'Toplam İyon = 5 M' },
        en: { salt: '1 M Al2(SO4)3', al: '[Al3+] = 2 M', so4: '[SO4 2-] = 3 M', total: 'Total Ions = 5 M' },
        de: { salt: '1 M Al2(SO4)3', al: '[Al3+] = 2 M', so4: '[SO4 2-] = 3 M', total: 'Gesamtionen = 5 M' },
        fr: { salt: '1 M Al2(SO4)3', al: '[Al3+] = 2 M', so4: '[SO4 2-] = 3 M', total: 'Ions totaux = 5 M' },
        ru: { salt: '1 M Al2(SO4)3', al: '[Al3+] = 2 M', so4: '[SO4 2-] = 3 M', total: 'Суммарно ионов = 5 M' },
        ar: { salt: '1 M كبريتات الألومنيوم', al: '[Al3+] = 2 M', so4: '[SO4 2-] = 3 M', total: 'مجموع الأيونات = 5 M' },
        zh: { salt: '1 M 硫酸铝溶液', al: '铝离子浓度 [Al3+] = 2 M', so4: '硫酸根浓度 [SO4 2-] = 3 M', total: '溶液离子总浓度 = 5 M' },
        ku: { salt: '1 M Al2(SO4)3', al: '[Al3+] = 2 M', so4: '[SO4 2-] = 3 M', total: 'Tevahiya Îyonan = 5 M' },
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
        tr: 'ΔTk = Kk . m . i ve ΔTd = Kd . m . i bağıntıları ile çözünen tanecik sayısı etkisi.',
        en: 'Colligative shifts driven by total particle molality and the van t Hoff factor (i).',
        de: 'Siedepunktserhöhung und Gefrierpunktserniedrigung über van-t-Hoff-Faktor (i).',
        fr: 'Élévation ébullioscopique et abaissement cryoscopique via le facteur de van t Hoff (i).',
        ru: 'Повышение t° кипения и понижение t° замерзания с учётом фактора Вант-Гоффа (i).',
        ar: 'تأثير عدد الجسيمات المذابة على الغليان والتجمد عبر معامل فانت هوف (i).',
        zh: '依据范特霍夫因子 i 与质量摩尔浓度计算沸点升高度与凝固点下降值。',
        ku: 'Bandora hejmara tanikan li ser kelîn û cemidînê bi faktora van t Hoff (i).',
      },
      labels: {
        tr: { dtk: 'ΔTk = Kk . m . i', dtd: 'ΔTd = Kd . m . i', vanthoff: 'van t Hoff Faktörü (i)', osmotic: 'Ozmotik Basınç (π = iMRT)' },
        en: { dtk: 'ΔTb = Kb . m . i', dtd: 'ΔTf = Kf . m . i', vanthoff: 'van t Hoff Factor (i)', osmotic: 'Osmotic Pressure (π=iMRT)' },
        de: { dtk: 'Siedepunktsanstieg ΔTb', dtd: 'Gefrierpunktsabfall ΔTf', vanthoff: 'Faktor i', osmotic: 'Osmotischer Druck' },
        fr: { dtk: 'Élévation ΔTb', dtd: 'Abaissement ΔTf', vanthoff: 'Facteur de van t Hoff', osmotic: 'Pression osmotique' },
        ru: { dtk: 'Повышение кипения ΔTk', dtd: 'Понижение замерзания ΔTd', vanthoff: 'Изотонический фактор i', osmotic: 'Осмотическое давление' },
        ar: { dtk: 'ارتفاع الغليان ΔTb', dtd: 'انخفاض التجمد ΔTf', vanthoff: 'معامل فانت هوف (i)', osmotic: 'الضغط الأسموزي' },
        zh: { dtk: '沸点升高: ΔTb = Kb·m·i', dtd: '凝固点降低: ΔTf = Kf·m·i', vanthoff: '电离离子数因子 (i)', osmotic: '渗透压公式: π = i·M·R·T' },
        ku: { dtk: 'ΔTk = Kk . m . i', dtd: 'ΔTd = Kd . m . i', vanthoff: 'Faktora van t Hoff (i)', osmotic: 'Zexta Ozmotîk' },
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
        ku: 'Xêzên Hilweşînê û Bandora Germahiyê',
      },
      caption: {
        tr: 'Katıların çoğu endotermik (sıcaklıkla artar), gazların çözünürlüğü DAİMA ekzotermiktir.',
        en: 'Solid solubilities generally increase with temperature; gas solubilities are strictly exothermic.',
        de: 'Feststofflöslichkeit steigt meist mit der Temperatur; Gaslöslichkeit ist immer exotherm.',
        fr: 'La solubilité des solides croît souvent avec T; celle des gaz est rigoureusement exothermique.',
        ru: 'Растворимость твёрдых веществ обычно растёт с T, а газов — всегда экзотермична.',
        ar: 'ذائبية معظم المواد الصلبة تزداد بالحرارة، بينما ذائبية الغازات طاردة للحرارة دائماً.',
        zh: '大多数无机盐固体溶解吸热随温度升高，气体溶解过程恒定放热随升温急剧下降。',
        ku: 'Piranîya reqan bi germiyê zêde dibin, hilweşîna gazan DAÎMA ekzotermîk e.',
      },
      labels: {
        tr: { endo: 'Endotermik Katı (T↑ Çöz↑)', exo: 'Gaz Çözünürlüğü (T↑ Çöz↓)', henry: 'Henry Yasası (Pgaz↑ Çöz↑)', sat: 'Doymuş Çözelti Sınırı' },
        en: { endo: 'Endothermic Solid (T↑ Sol↑)', exo: 'Gas Dissolution (T↑ Sol↓)', henry: 'Henry s Law (P↑ Sol↑)', sat: 'Saturation Boundary' },
        de: { endo: 'Endotherm (Feststoff)', exo: 'Exotherm (Gas)', henry: 'Henrysches Gesetz', sat: 'Sättigungsgrenze' },
        fr: { endo: 'Solide endothermique', exo: 'Gaz exothermique', henry: 'Loi de Henry', sat: 'Limite de saturation' },
        ru: { endo: 'Эндотермическое (T↑ Раств↑)', exo: 'Газы (T↑ Раств↓)', henry: 'Закон Генри', sat: 'Предел насыщения' },
        ar: { endo: 'صلب ماص للحرارة', exo: 'غاز طارد للحرارة', henry: 'قانون هنري', sat: 'حد التشبع' },
        zh: { endo: '吸热固体 (升温溶解度增大)', exo: '气体溶解 (升温溶解度减小)', henry: '亨利定律 (加压气体溶解增大)', sat: '饱和平衡溶解度边界' },
        ku: { endo: 'Reqa Endotermîk', exo: 'Hilweşîna Gazê', henry: 'Zagona Henry', sat: 'Sînorê Têrbûnê' },
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
        tr: 'Ekzotermik (ΔH < 0) ve endotermik (ΔH > 0) tepkimelerde ΔH = Eai - Eag bağıntısı.',
        en: 'Enthalpy change ΔH = Eaf - Ear in exothermic (negative) and endothermic (positive) profiles.',
        de: 'Enthalpieänderung ΔH = Eai - Eag für exo- und endotherme Reaktionsverläufe.',
        fr: 'Variation d enthalpie ΔH = Eai - Eag dans les profils exothermiques et endothermiques.',
        ru: 'Изменение энтальпии ΔH = Eai - Eag для экзо- и эндотермических реакций.',
        ar: 'تغير الإنتالبي ΔH = Eai - Eag للتفاعلات الماصة والطاردة للحرارة.',
        zh: '化学反应焓变 ΔH = 正反应活化能 Eai - 逆反应活化能 Eag。',
        ku: 'Guhertina entalpiyê ΔH = Eai - Eag di bertekên ekzotermîk û endotermîk de.',
      },
      labels: {
        tr: { eai: 'İleri Aktifleşme (Eai)', eag: 'Geri Aktifleşme (Eag)', dh: 'ΔH = Eai - Eag', ak: 'Aktifleşmiş Kompleks' },
        en: { eai: 'Forward Ea (Eaf)', eag: 'Reverse Ea (Ear)', dh: 'ΔH = Eaf - Ear', ak: 'Activated Complex' },
        de: { eai: 'Aktivierungsenergie hin', eag: 'Aktivierungsenergie rück', dh: 'ΔH Enthalpie', ak: 'Übergangszustand' },
        fr: { eai: 'Énergie d activation directe', eag: 'Énergie inverse', dh: 'Enthalpie ΔH', ak: 'Complexe activé' },
        ru: { eai: 'Прямая энергия активации', eag: 'Обратная активация', dh: 'Тепловой эффект ΔH', ak: 'Активированный комплекс' },
        ar: { eai: 'طاقة التنشيط الأمامية', eag: 'طاقة التنشيط العكسية', dh: 'حرارة التفاعل ΔH', ak: 'المعقد النشط' },
        zh: { eai: '正反应活化能 Eai', eag: '逆反应活化能 Eag', dh: '反应热 ΔH = Eai - Eag', ak: '活化络合物过渡态' },
        ku: { eai: 'Çalakkirina Pêş (Eai)', eag: 'Çalakkirina Paş (Eag)', dh: 'ΔH = Eai - Eag', ak: 'Kompleksa Çalakbûyî' },
      },
    },
    {
      archetype: 'potential-energy-reaction',
      title: {
        tr: 'Hess Yasası ve Standart Oluşum Entalpisi',
        en: 'Hess s Law & Standard Enthalpy of Formation',
        de: 'Hessscher Wärmesatz & Bildungsenthalpie',
        fr: 'Loi de Hess et enthalpie standard de formation',
        ru: 'Закон Гесса и энтальпия образования',
        ar: 'قانون هيس وإنتالبي التكوين القياسية',
        zh: '盖斯定律热效应叠加与标准摩尔生成焓',
        ku: 'Zagona Hess û Entalpiya Çêbûnê ya Standard',
      },
      caption: {
        tr: 'Tepkime entalpisi basamakların entalpileri toplamına eşittir; yol bağımsızdır.',
        en: 'Total reaction enthalpy is additive across steps and strictly state-independent.',
        de: 'Die Gesamtreaktionsenthalpie ist die Summe der Teilschritte (Wegunabhängigkeit).',
        fr: 'L enthalpie globale est la somme des enthalpies des étapes élémentaires (loi d état).',
        ru: 'Тепловой эффект реакции зависит только от начального и конечного состояний.',
        ar: 'حرارة التفاعل الكلية تساوي مجموع حرارات خطوات التفاعل بمعزل عن المسار.',
        zh: '盖斯定律证明化学反应的焓变仅与始态和终态有关，与反应历程途径无关。',
        ku: 'Entalpiya bertekê yeksanî koma entalpiyên qonaxan e, bêyî riyê ye.',
      },
      labels: {
        tr: { hess: 'Hess: ΔHtop = ΔH1 + ΔH2', std: 'Standart Elementler ΔHf° = 0', rev: 'Ters Dönerse: -ΔH', mult: 'Katsayı Çarpımı: n.ΔH' },
        en: { hess: 'Hess: ΔHtot = ΔH1 + ΔH2', std: 'Elements in Std State ΔHf°=0', rev: 'Reverse Step: -ΔH', mult: 'Scale Factor: n·ΔH' },
        de: { hess: 'Satz von Hess', std: 'Elemente im Standardzustand=0', rev: 'Umkehr: -ΔH', mult: 'Multiplikator n·ΔH' },
        fr: { hess: 'Loi de Hess', std: 'Éléments standards ΔHf°=0', rev: 'Inversion: -ΔH', mult: 'Facteur n·ΔH' },
        ru: { hess: 'Закон Гесса', std: 'Простые вещества ΔHf°=0', rev: 'Обращение знака: -ΔH', mult: 'Умножение на n' },
        ar: { hess: 'قانون هيس', std: 'العناصر القياسية ΔHf° = 0', rev: 'عكس التفاعل: -ΔH', mult: 'مضروب المعامل' },
        zh: { hess: '盖斯定律: ΔH总 = ΔH1 + ΔH2', std: '稳定单质标准生成焓为零', rev: '反向书写焓变反号: -ΔH', mult: '计量数倍增焓变同乘 n' },
        ku: { hess: 'Hess: ΔHtop = ΔH1 + ΔH2', std: 'Madeyên Standard ΔHf° = 0', rev: 'Berevajî: -ΔH', mult: 'Katsayî: n.ΔH' },
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
        fr: 'Action du catalyseur et abaissement d activation',
        ru: 'Действие катализатора и снижение барьера',
        ar: 'تأثير العامل الحفاز وخفض طاقة التنشيط',
        zh: '催化剂降低活化能途径机理图',
        ku: 'Bandora Katalîzorê û Kêmkirina Enerjiya Çalakkirinê',
      },
      caption: {
        tr: 'Pozitif katalizör eşik enerjisini düşürerek tepkimeyi hızlandırır, ΔH değerini değiştirmez.',
        en: 'Catalysts provide an alternate pathway with lower Ea without altering net enthalpy ΔH.',
        de: 'Katalysatoren senken die Aktivierungsenergie Ea, ohne die Gesamtreaktionsenthalpie ΔH zu ändern.',
        fr: 'Un catalyseur abaisse l énergie d activation Ea sans modifier l enthalpie réactionnelle ΔH.',
        ru: 'Катализатор снижает барьер активации Ea, не изменяя энтальпию реакции ΔH.',
        ar: 'يخفض العامل الحفاز طاقة التنشيط دون التأثير على إنتالبي التفاعل الكلي ΔH.',
        zh: '正催化剂改变反应历程降低活化能垒 Ea，但决不改变化学反应始终态焓变 ΔH。',
        ku: 'Katalîzor bi kêmkirina enerjiya sînorê leza bertekê zêde dike, ΔH naguherîne.',
      },
      labels: {
        tr: { uncat: 'Katalizörsüz Yol (Yüksek Ea)', cat: 'Katalizörlü Yol (Düşük Ea)', dh_const: 'ΔH Sabit Kalır', k_inc: 'k Hız Sabiti Büyür' },
        en: { uncat: 'Uncatalyzed Path (High Ea)', cat: 'Catalyzed Path (Lower Ea)', dh_const: 'ΔH Remains Constant', k_inc: 'Rate Constant k Increases' },
        de: { uncat: 'Ohne Katalysator (hohes Ea)', cat: 'Mit Katalysator (niedriges Ea)', dh_const: 'ΔH bleibt gleich', k_inc: 'Konstante k steigt' },
        fr: { uncat: 'Sans catalyseur (Ea élevée)', cat: 'Avec catalyseur (Ea basse)', dh_const: 'ΔH inchangée', k_inc: 'Vitesse k augmentée' },
        ru: { uncat: 'Без катализатора (высокий Ea)', cat: 'С катализатором (низкий Ea)', dh_const: 'ΔH не меняется', k_inc: 'Константа k растёт' },
        ar: { uncat: 'بدون حفاز (طاقة عالية)', cat: 'مع حفاز (طاقة منخفضة)', dh_const: 'ثبات ΔH', k_inc: 'زيادة ثابت السرعة k' },
        zh: { uncat: '无催化剂天然高能垒路径', cat: '催化剂低活化能全新路径', dh_const: '始终态反应热 ΔH 保持不变', k_inc: '反应速率常数 k 成倍剧增' },
        ku: { uncat: 'Bê Katalîzor (Ea ya Bilind)', cat: 'Bi Katalîzor (Ea ya Nizm)', dh_const: 'ΔH Sabît Dimîne', k_inc: 'Sabîta k Zêde Dibe' },
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
        tr: 'Mekanizmalı tepkimelerde hızı en yüksek aktifleşme enerjisine sahip YAVAŞ basamak belirler.',
        en: 'The elementary step with the highest activation barrier is slowest and dictates the rate law.',
        de: 'Der Schritt mit der höchsten Aktivierungsenergie bestimmt die Gesamtreaktionsgeschwindigkeit.',
        fr: 'L étape ayant l énergie d activation la plus élevée est la plus lente et dicte la loi de vitesse.',
        ru: 'Стадия с наибольшей энергией активации является самой медленной и определяет общую скорость.',
        ar: 'الخطوة ذات طاقة التنشيط الأعلى هي الأبطأ وتحدد سرعة التفاعل الإجمالية.',
        zh: '多步复合机理反应的化学反应速率由活化能最高、反应最慢的关键基元步决定。',
        ku: 'Di bertekên mekanîzmî de lezê qonaxa HÊDÎ ya bi enerjiya herî bilind diyar dike.',
      },
      labels: {
        tr: { slow: 'Yavaş Basamak (Hızı Belirler)', fast: 'Hızlı Basamak', intermediate: 'Ara Ürün', rate_eq: 'r = k . [A]^a . [B]^b' },
        en: { slow: 'Slow Step (Determining)', fast: 'Fast Step', intermediate: 'Reaction Intermediate', rate_eq: 'r = k·[A]^a·[B]^b' },
        de: { slow: 'Geschwindigkeitsbestimmend', fast: 'Schneller Schritt', intermediate: 'Zwischenprodukt', rate_eq: 'Geschwindigkeitsgesetz' },
        fr: { slow: 'Étape lente limitante', fast: 'Étape rapide', intermediate: 'Intermédiaire réactionnel', rate_eq: 'v = k·[A]^a·[B]^b' },
        ru: { slow: 'Медленная стадия', fast: 'Быстрая стадия', intermediate: 'Интермедиат', rate_eq: 'r = k·[A]^a·[B]^b' },
        ar: { slow: 'الخطوة البطيئة المحددة', fast: 'الخطوة السريعة', intermediate: 'مركب وسطي', rate_eq: 'معادلة السرعة' },
        zh: { slow: '慢反应基元步 (决定全反应速率)', fast: '后续快速基元步', intermediate: '生成后消耗的中间产物', rate_eq: '速率方程: r = k·[A]^a·[B]^b' },
        ku: { slow: 'Qonaxa Hêdî', fast: 'Qonaxa Lezgîn', intermediate: 'Madeya Navber', rate_eq: 'r = k . [A]^a . [B]^b' },
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
        fr: 'Un système à l équilibre soumis à une perturbation évolue pour minimiser cette contrainte.',
        ru: 'Система в равновесии смещается в направлении, ослабляющем внешнее воздействие.',
        ar: 'ينزاح موضع الاتزان في الاتجاه الذي يقلل من أثر المؤثر الخارجي المطبق.',
        zh: '对处于平衡状态的体系施加外界影响，体系将向减弱外界影响的方向移动。',
        ku: 'Gava destwerdanek li sîstema hevseng bê kirin, sîstem ber bi kêmkirina wê bandorê ve diçe.',
      },
      labels: {
        tr: { spike: 'Madde Ekleme (Derişim Sıçraması)', shift: 'Denge Sağa Kayar', kc_t: 'Kc Yalnız Sıcaklıkla Değişir!', kp_kc: 'Kp = Kc(RT)^Δn' },
        en: { spike: 'Concentration Perturbation', shift: 'Shift Toward Products', kc_t: 'Kc Only Depends on Temp!', kp_kc: 'Kp = Kc(RT)^Δn' },
        de: { spike: 'Konzentrationssprung', shift: 'Rechtsverschiebung', kc_t: 'Kc nur von T abhängig', kp_kc: 'Kp = Kc(RT)^Δn' },
        fr: { spike: 'Perturbation de concentration', shift: 'Déplacement vers la droite', kc_t: 'Kc ne dépend que de T', kp_kc: 'Kp = Kc(RT)^Δn' },
        ru: { spike: 'Скачок концентрации', shift: 'Сдвиг вправо к продуктам', kc_t: 'Kc зависит только от T!', kp_kc: 'Kp = Kc(RT)^Δn' },
        ar: { spike: 'اضطراب في التركيز', shift: 'انزياح نحو النواتج', kc_t: 'Kc تتغير فقط بالحرارة', kp_kc: 'Kp = Kc(RT)^Δn' },
        zh: { spike: '瞬时添加反应物浓度突变尖峰', shift: '正向移动消耗外加物', kc_t: '平衡常数 Kc 仅受温度影响！', kp_kc: '压强平衡常数 Kp = Kc(RT)^Δn' },
        ku: { spike: 'Zêdekirina Madeyê', shift: 'Hevsengî ber bi Rastê ve Diçe', kc_t: 'Kc bi Tenê bi Germiyê Diguhere!', kp_kc: 'Kp = Kc(RT)^Δn' },
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
        tr: { qc_less: 'Qc < Kc: Ürünlere Kayar', qc_eq: 'Qc = Kc: Sistem Dengede', qc_more: 'Qc > Kc: Girenlere Kayar', cat_effect: 'Katalizör Dengeyi Bozmaz!' },
        en: { qc_less: 'Qc < Kc: Shifts Right', qc_eq: 'Qc = Kc: Equilibrium State', qc_more: 'Qc > Kc: Shifts Left', cat_effect: 'Catalysts Don t Shift Kc!' },
        de: { qc_less: 'Qc < Kc (nach rechts)', qc_eq: 'Qc = Kc (im Gleichgewicht)', qc_more: 'Qc > Kc (nach links)', cat_effect: 'Katalysator ohne Einfluss auf Kc' },
        fr: { qc_less: 'Qc < Kc (vers la droite)', qc_eq: 'Qc = Kc (à l équilibre)', qc_more: 'Qc > Kc (vers la gauche)', cat_effect: 'Catalyseur sans effet sur Kc' },
        ru: { qc_less: 'Qc < Kc: сдвиг вправо', qc_eq: 'Qc = Kc: равновесие', qc_more: 'Qc > Kc: сдвиг влево', cat_effect: 'Катализатор не смещает Kc!' },
        ar: { qc_less: 'Qc < Kc: انزياح لليمين', qc_eq: 'Qc = Kc: حالة اتزان', qc_more: 'Qc > Kc: انزياح لليسار', cat_effect: 'الحفاز لا يغير ثابت الاتزان' },
        zh: { qc_less: 'Qc < Kc: 正向进行移向产物', qc_eq: 'Qc = Kc: 动态化学平衡稳定', qc_more: 'Qc > Kc: 逆向进行移向反应物', cat_effect: '催化剂同等加快双向不破坏平衡' },
        ku: { qc_less: 'Qc < Kc: Ber bi Rastê', qc_eq: 'Qc = Kc: Di Hevsengiyê de', qc_more: 'Qc > Kc: Ber bi Çepê', cat_effect: 'Katalîzor Hevsengiyê Xera Nake!' },
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
        tr: 'Büretten damlatılan baz ile erlendeki asidin nötralleşmesi ve pH 7 dönüm noktası.',
        en: 'Titrant dispensed into analyte flask exhibiting a sharp pH transition at equivalence (pH 7).',
        de: 'Zutropfen von Lauge zur Säure mit steilem pH-Sprung am Äquivalenzpunkt (pH 7).',
        fr: 'Ajout de base à la burette avec saut brusque de pH au point d équivalence (pH 7).',
        ru: 'Капельное титрование кислоты щёлочью с резким скачком pH в точке эквивалентности (pH 7).',
        ar: 'معايرة الحمض بالقاعدة مع قفزة حادة في الرقم الهيدروجيني عند نقطة التكافؤ (pH 7).',
        zh: '从滴定管逐滴滴入标准碱中和锥形瓶中待测酸，在等当点发生急剧pH突跃 (pH=7)。',
        ku: 'Dilopkirina baz ji buretê û bêalîbûna asîdê li xala pH 7.',
      },
      labels: {
        tr: { burette: '0.1 M NaOH Büreti', flask: '100 mL 0.1 M HCl Erleni', eqpt: 'Dönüm Noktası (pH=7.0)', buffer: 'Tampon Çözelti Bölgesi' },
        en: { burette: '0.1 M NaOH Burette', flask: '100 mL 0.1 M HCl Flask', eqpt: 'Equivalence Point (pH=7.0)', buffer: 'Buffering Region' },
        de: { burette: 'NaOH-Bürette', flask: 'HCl-Erlenmeyerkolben', eqpt: 'Äquivalenzpunkt pH 7', buffer: 'Pufferbereich' },
        fr: { burette: 'Burette de NaOH', flask: 'Fiole d acide HCl', eqpt: 'Point d équivalence pH 7', buffer: 'Zone tampon' },
        ru: { burette: 'Бюретка с NaOH', flask: 'Колба с HCl', eqpt: 'Точка эквивалентности pH 7', buffer: 'Буферная область' },
        ar: { burette: 'سحاحة هيدروكسيد الصوديوم', flask: 'دورق حمض الهيدروكلوريك', eqpt: 'نقطة التكافؤ (pH 7.0)', buffer: 'منطقة المحلول المنظم' },
        zh: { burette: '0.1 M 氢氧化钠滴定管', flask: '锥形瓶内待测盐酸溶液', eqpt: '化学计量滴定突跃点 (pH 7.0)', buffer: '共轭弱酸碱缓冲调控区' },
        ku: { burette: 'Bureta NaOH', flask: 'Erlenmayerê HCl', eqpt: 'Xala Werguhêzbar (pH=7.0)', buffer: 'Qada Helawa Tampon' },
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
        fr: 'La dilution augmente le pourcentage d ionisation; les tampons résistent aux variations de pH.',
        ru: 'Разбавление увеличивает степень ионизации; буферные системы сопротивляются сдвигам pH.',
        ar: 'يزداد تفكك الحمض الضعيف بالتخفيف؛ وتقاوم المحاليل المنظمة التغير في الرقم الهيدروجيني.',
        zh: '根据奥斯特瓦尔德稀释定律弱酸越稀释解离度越高；缓冲对强烈抵抗外加酸碱pH骤变。',
        ku: 'Bi tenikkirinê re ji sedî ya îyonîzasyona asîda qels zêde dibe; tampon li hember guherîna pH radiweste.',
      },
      labels: {
        tr: { henderson: 'pH = pKa + log([Tuz]/[Asit])', ka_eq: '[H+] = √(Ka . Ca)', dil_pct: 'Seyreltme: İyonlaşma % Artar', salt_hydro: 'Asidik/Bazik Tuz Hidrolizi' },
        en: { henderson: 'pH = pKa + log([Salt]/[Acid])', ka_eq: '[H+] = √(Ka · Ca)', dil_pct: 'Dilution: % Ionization ↑', salt_hydro: 'Salt Cation/Anion Hydrolysis' },
        de: { henderson: 'Henderson-Hasselbalch', ka_eq: '[H+] = √(Ka · Ca)', dil_pct: 'Verdünnung: % Dissoziation ↑', salt_hydro: 'Salzhydrolyse' },
        fr: { henderson: 'Équation de Henderson', ka_eq: '[H+] = √(Ka · Ca)', dil_pct: 'Dilution: % ionisation ↑', salt_hydro: 'Hydrolyse des sels' },
        ru: { henderson: 'Уравнение Гендерсона', ka_eq: '[H+] = √(Ka · Ca)', dil_pct: 'Разбавление: % диссоциации ↑', salt_hydro: 'Гидролиз солей' },
        ar: { henderson: 'معادلة هندرسون-هاسلبالخ', ka_eq: '[H+] = √(Ka · Ca)', dil_pct: 'التخفيف: زيادة نسبة التأين', salt_hydro: 'تميه الأملاح' },
        zh: { henderson: '亨德森-哈塞尔巴尔赫缓冲方程', ka_eq: '一元弱酸氢离子浓度 [H+] = √(Ka·Ca)', dil_pct: '越稀越电离: 稀释解离百分比增大', salt_hydro: '强酸弱碱与弱酸强碱盐的水解' },
        ku: { henderson: 'pH = pKa + log([Xwê]/[Asîd])', ka_eq: '[H+] = √(Ka . Ca)', dil_pct: 'Tenikkirin: % ya Îyonîzasyonê Zêde dibe', salt_hydro: 'Hîdrolîza Xwêyan' },
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
        fr: 'Produit de solubilité (Ks) et précipitation',
        ru: 'Произведение растворимости (ПР) и осаждение',
        ar: 'حاصل الإذابة (Ksp) والترسيب',
        zh: '难溶电解质沉淀溶解平衡常数 Ksp',
        ku: 'Hevsengiya Hilweşînê (Kçç) û Nişîn',
      },
      caption: {
        tr: 'İyon çarpımı Qi > Kçç olduğunda sistem doygunluğu aşar ve çökelme meydana gelir.',
        en: 'Precipitation occurs whenever ionic product Qi exceeds the equilibrium solubility constant Ksp.',
        de: 'Fällung tritt ein, sobald das Ionenprodukt Qi das Löslichkeitsprodukt Ksp überschreitet.',
        fr: 'La précipitation se produit dès que le produit ionique Qi dépasse la constante Ks.',
        ru: 'Осадок выпадает, когда ионное произведение Qi превышает константу растворимости ПР.',
        ar: 'يحدث الترسيب عندما يتجاوز الحاصل الأيوني Qi ثابت حاصل الإذابة Ksp.',
        zh: '当溶液离子浓度幂乘积 Qi 超过溶度积常数 Ksp 时体系处于过饱和状态析出沉淀。',
        ku: 'Dema ku berhema îyonan Qi > Kçç bibe, sîstem têrbûnê derbas dike û nişîn pêk tê.',
      },
      labels: {
        tr: { ksp_xy: 'XY: Kçç = s^2', ksp_xy2: 'XY2: Kçç = 4s^3', ksp_x2y3: 'X2Y3: Kçç = 108s^5', q_precip: 'Qi > Kçç: Çökelme Olur' },
        en: { ksp_xy: 'XY: Ksp = s^2', ksp_xy2: 'XY2: Ksp = 4s^3', ksp_x2y3: 'X2Y3: Ksp = 108s^5', q_precip: 'Qi > Ksp: Precipitation' },
        de: { ksp_xy: 'XY: Ksp = s^2', ksp_xy2: 'XY2: Ksp = 4s^3', ksp_x2y3: 'X2Y3: Ksp = 108s^5', q_precip: 'Qi > Ksp: Fällung' },
        fr: { ksp_xy: 'XY: Ks = s^2', ksp_xy2: 'XY2: Ks = 4s^3', ksp_x2y3: 'X2Y3: Ks = 108s^5', q_precip: 'Qi > Ks: Précipitation' },
        ru: { ksp_xy: 'XY: ПР = s^2', ksp_xy2: 'XY2: ПР = 4s^3', ksp_x2y3: 'X2Y3: ПР = 108s^5', q_precip: 'Qi > ПР: Выпадение осадка' },
        ar: { ksp_xy: 'XY: Ksp = s^2', ksp_xy2: 'XY2: Ksp = 4s^3', ksp_x2y3: 'X2Y3: Ksp = 108s^5', q_precip: 'Qi > Ksp: يحدث ترسيب' },
        zh: { ksp_xy: '1:1型沉淀 Ksp = s^2', ksp_xy2: '1:2型沉淀 Ksp = 4s^3', ksp_x2y3: '2:3型沉淀 Ksp = 108s^5', q_precip: '过饱和沉淀判据: Qi > Ksp' },
        ku: { ksp_xy: 'XY: Kçç = s^2', ksp_xy2: 'XY2: Kçç = 4s^3', ksp_x2y3: 'X2Y3: Kçç = 108s^5', q_precip: 'Qi > Kçç: Nişîn Çêdibe' },
      },
    },
    {
      archetype: 'lab-glassware-setup',
      title: {
        tr: 'Ortak İyon Etkisi ve Çözünürlüğün Azalması',
        en: 'Common-Ion Effect on Solubility',
        de: 'Gleichioniger Effekt & Löslichkeitsabnahme',
        fr: 'Effet d ion commun sur la solubilité',
        ru: 'Эффект одноимённого иона',
        ar: 'تأثير الأيون المشترك على الذائبية',
        zh: '同离子效应显著抑制电解质微观溶解度',
        ku: 'Bandora Îyona Hevpar û Kêmbûna Hilweşînê',
      },
      caption: {
        tr: 'Ortak iyon çözünürlüğü azaltır; ancak çözünürlük çarpımı sabiti Kçç DEĞİŞMEZ.',
        en: 'Presence of a common ion suppresses molar solubility without modifying Ksp constant.',
        de: 'Gleichionige Zusätze senken die Löslichkeit, lassen aber Ksp unberührt.',
        fr: 'L ajout d un ion commun diminue la solubilité sans modifier la constante Ks.',
        ru: 'Присутствие одноимённого иона снижает растворимость, но константа ПР неизменна.',
        ar: 'يقلل الأيون المشترك الذائبية لكن ثابت حاصل الإذابة Ksp يبقى ثابتاً.',
        zh: '加入含同离子的强电解质会使平衡逆向移动大幅降低溶解度，但 Ksp 恒定不变。',
        ku: 'Îyona hevpar hilweşînê kêm dike; lê belê sabîta Kçç NAGUHERE.',
      },
      labels: {
        tr: { common: 'Ortak İyon (Cl-)', pure: 'Saf Suda Çözünürlük (Yüksek)', ion_sol: 'NaCl de Çözünürlük (Düşük)', ksp_const: 'Kçç YALNIZ SICAKLIKLA Değişir!' },
        en: { common: 'Common Ion (Cl-)', pure: 'Solubility in Pure Water', ion_sol: 'Solubility in NaCl (Lower)', ksp_const: 'Ksp Only Changes with Temp!' },
        de: { common: 'Gleichion (Cl-)', pure: 'In reinem Wasser', ion_sol: 'In NaCl-Lösung (geringer)', ksp_const: 'Ksp nur temperaturabhängig!' },
        fr: { common: 'Ion commun (Cl-)', pure: 'Dans l eau pure', ion_sol: 'Dans NaCl (diminuée)', ksp_const: 'Ks dépend uniquement de T!' },
        ru: { common: 'Одноимённый ион (Cl-)', pure: 'В чистой воде', ion_sol: 'В растворе NaCl (ниже)', ksp_const: 'ПР меняется только с T!' },
        ar: { common: 'أيون مشترك', pure: 'الذائبية في الماء النقي', ion_sol: 'الذائبية مع أيون مشترك', ksp_const: 'Ksp تتغير فقط بدرجة الحرارة' },
        zh: { common: '外加同离子 (如氯离子 Cl-)', pure: '纯水中难溶盐固有溶解度', ion_sol: '氯化钠溶液中受抑制溶解度', ksp_const: 'Ksp 常数唯有温度能改变！' },
        ku: { common: 'Îyona Hevpar (Cl-)', pure: 'Di Ava Paqij de', ion_sol: 'Di NaCl de (Kêm)', ksp_const: 'Kçç tenê bi germahiyê diguhere!' },
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
        fr: 'Pile galvanique de Daniell et flux d électrons',
        ru: 'Гальванический элемент Даниэля и ток',
        ar: 'خلية دانييل الجلفانية وتدفق الإلكترونات',
        zh: '丹尼尔铜锌原电池与外电路电子流动',
        ku: 'Pîla Galvanîk a Daniell û Herikîna Elektronan',
      },
      caption: {
        tr: 'Zn anotta yükseltgenir, Cu katotta indirgenir; dış devrede elektron anottan katoda akar.',
        en: 'Zn oxidizes at anode; Cu2+ reduces at cathode; electrons flow from anode to cathode via wire.',
        de: 'Zn oxidiert an der Anode; Cu2+ reduziert an der Kathode; Elektronen fließen von Anode zu Kathode.',
        fr: 'Zn s oxyde à l anode; Cu2+ se réduit à la cathode; les électrons circulent d anode à cathode.',
        ru: 'Цинковый анод окисляется, на медном катоде восстанавливаются ионы; ток течёт от анода к катоду.',
        ar: 'يتأكسد الخارصين عند المصعد، وتختزل أيونات النحاس عند المهبط؛ وتتدفق الإلكترونات عبر السلك.',
        zh: '锌电极在阳极失电子氧化溶解，铜离子在阴极得电子还原析出，外电路电子由负极流向正极。',
        ku: 'Zn li anotê tê bilindkirin, Cu li katotê tê daxistin; elektron ji anotê diçin katotê.',
      },
      labels: {
        tr: { anode: 'Anot (Zn -> Zn2+ + 2e-)', cathode: 'Katot (Cu2+ + 2e- -> Cu)', bridge: 'Tuz Köprüsü (KNO3)', volt: 'Standart Potansiyel E°=1.10 V' },
        en: { anode: 'Anode (Zn Oxidation)', cathode: 'Cathode (Cu2+ Reduction)', bridge: 'Salt Bridge (KNO3)', volt: 'Cell Potential E°=1.10 V' },
        de: { anode: 'Anode (Oxidation)', cathode: 'Kathode (Reduktion)', bridge: 'Salzbrücke', volt: 'Zellspannung E°=1,10 V' },
        fr: { anode: 'Anode (Oxydation)', cathode: 'Cathode (Réduction)', bridge: 'Pont salin', volt: 'Potentiel standard E°=1.10 V' },
        ru: { anode: 'Анод (Окисление Zn)', cathode: 'Катод (Восстановление Cu)', bridge: 'Солевой мостик', volt: 'Стандартная ЭДС E°=1,10 В' },
        ar: { anode: 'المصعد (أكسدة الخارصين)', cathode: 'المهبط (اختزال النحاس)', bridge: 'القنطرة الملحية', volt: 'جهد الخلية القياسي 1.10V' },
        zh: { anode: '阳极 (Zn 氧化极板质量减轻)', cathode: '阴极 (Cu 还原极板质量增加)', bridge: '琼脂盐桥平衡阴阳电荷', volt: '标准原电池电动势 E° = 1.10 V' },
        ku: { anode: 'Anot (Oksîdasyona Zn)', cathode: 'Katot (Daxistina Cu)', bridge: 'Pira Xwê (KNO3)', volt: 'Potansiyela Standard E°=1.10 V' },
      },
    },
    {
      archetype: 'galvanic-daniell-cell',
      title: {
        tr: 'Nernst Denklemi ve Derişim Pilleri',
        en: 'Nernst Equation & Concentration Cells',
        de: 'Nernst-Gleichung & Konzentrationszellen',
        fr: 'Équation de Nernst et piles de concentration',
        ru: 'Уравнение Нернста и концентрационные цепи',
        ar: 'معادلة نيرنست وخلايا التركيز',
        zh: '能斯特方程与电解质非标态浓度差电池',
        ku: 'Hevkêşeya Nernst û Pîlên Xestiyê',
      },
      caption: {
        tr: 'Epil = E°pil - (0.0592/n) . log Q. Derişim pillerinde derişimi az olan kap anottur.',
        en: 'Nonstandard potential calculated via Nernst; less concentrated half-cell acts as the anode.',
        de: 'Nicht-Standard-Potenzial über Nernst; die Halbzelle mit geringerer Konzentration ist Anode.',
        fr: 'Potentiel réel via Nernst; le compartiment le moins concentré fonctionne comme anode.',
        ru: 'Реальная ЭДС по уравнению Нернста; сосуд с меньшей концентрацией служит анодом.',
        ar: 'جهد الخلية الفعلي عبر نيرنست؛ يعمل النصف الأقل تركيزاً كمصعد مؤكسد.',
        zh: '非标准态电池电动势依据能斯特方程计算: Epil = E° - (0.0592/n)·lg Q；稀溶液侧恒为阳极。',
        ku: 'Potansiyela pîlê bi hevkêşeya Nernst tê hesabkirin; qaba bi xestiya kêm dibe anot.',
      },
      labels: {
        tr: { nernst: 'Epil = E° - (0.0592/n) log Q', conc_anode: '0.01 M Kap (Anot - Seyreltik)', conc_cath: '1.0 M Kap (Katot - Derişik)', stop: 'Derişimler Eşitlenince Pil Biter!' },
        en: { nernst: 'Epil = E° - (0.0592/n) log Q', conc_anode: '0.01 M Half-Cell (Anode)', conc_cath: '1.0 M Half-Cell (Cathode)', stop: 'Cell Dies When Concs Equalize!' },
        de: { nernst: 'Nernst-Gleichung', conc_anode: '0,01 M Anode', conc_cath: '1,0 M Kathode', stop: 'Stopp bei Konzentrationsausgleich' },
        fr: { nernst: 'Équation de Nernst', conc_anode: '0.01 M Anode', conc_cath: '1.0 M Cathode', stop: 'Arrêt à équilibre des concentrations' },
        ru: { nernst: 'Уравнение Нернста', conc_anode: '0,01 M Анод', conc_cath: '1,0 M Катод', stop: 'При равенстве ЭДС = 0' },
        ar: { nernst: 'معادلة نيرنست', conc_anode: 'خلية 0.01M (المصعد)', conc_cath: 'خلية 1.0M (المهبط)', stop: 'تتوقف الخلية عند تساوي التركيزين' },
        zh: { nernst: '能斯特方程精确公式', conc_anode: '稀溶液半电池 (0.01M 为阳极氧化极)', conc_cath: '浓溶液半电池 (1.0M 为阴极还原极)', stop: '两室离子浓度完全相等时电池报废终止' },
        ku: { nernst: 'Hevkêşeya Nernst', conc_anode: 'Qaba 0.01 M (Anot)', conc_cath: 'Qaba 1.0 M (Katot)', stop: 'Dema xestî yeksan bibe pîl diqede!' },
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
        fr: 'Voltamètre de Hoffman et électrolyse de l eau',
        ru: 'Вольтаметр Гофмана и электролиз воды',
        ar: 'فولتمتر هوفمان والتحليل الكهربائي للماء',
        zh: '霍夫曼电解水装置与 2:1 体积氢氧比',
        ku: 'Voltametreya Hoffman û Elektrolîza Avê',
      },
      caption: {
        tr: 'Elektrikle suyun ayrışması: Katotta 2 hacim H2 gazı, anotta 1 hacim O2 gazı toplanır.',
        en: 'Nonspontaneous water splitting generating 2 volumes of H2 at cathode per 1 volume of O2 at anode.',
        de: 'Nicht-spontane Wasserspaltung: 2 Volumenteile H2 an der Kathode und 1 Teil O2 an der Anode.',
        fr: 'Décomposition forcée de l eau: 2 volumes de H2 à la cathode pour 1 volume de O2 à l anode.',
        ru: 'Электролиз воды: на катоде выделяется 2 объёма H2, на аноде — 1 объём O2.',
        ar: 'التحليل الكهربائي للماء: يتجمع ضعف حجم الهيدروجين عند المهبط مقارنة بالأكسجين عند المصعد.',
        zh: '外加直流电强制分解水：阴极析出2体积氢气，阳极析出1体积氧气（严格 2:1 气体比例）。',
        ku: 'Veqetandina avê bi elektrîkê: li katotê 2 qebare H2, li anotê 1 qebare O2 kom dibe.',
      },
      labels: {
        tr: { cathode_h2: 'Katot: 2H+(suda)+2e- -> H2 (2V)', anode_o2: 'Anot: 2H2O -> O2+4H++4e- (1V)', faraday: '1 mol e- = 1 F = 96500 C', dc: 'Doğru Akım (DC) Güç Kaynağı' },
        en: { cathode_h2: 'Cathode: H2 Evolved (2V)', anode_o2: 'Anode: O2 Evolved (1V)', faraday: '1 mol e- = 96500 C', dc: 'DC Power Source' },
        de: { cathode_h2: 'Kathode: H2 (2 Volumenteile)', anode_o2: 'Anode: O2 (1 Volumenteil)', faraday: 'Faraday-Konstante 96500 C', dc: 'Gleichstromquelle' },
        fr: { cathode_h2: 'Cathode: H2 (2 volumes)', anode_o2: 'Anode: O2 (1 volume)', faraday: '1 F = 96500 C', dc: 'Alimentation continue' },
        ru: { cathode_h2: 'Катод: 2V водорода (H2)', anode_o2: 'Анод: 1V кислорода (O2)', faraday: '1 Фарадей = 96500 Кл', dc: 'Источник постоянного тока' },
        ar: { cathode_h2: 'المهبط: هيدروجين (2V)', anode_o2: 'المصعد: أكسجين (1V)', faraday: '1 فاراداي = 96500 كولوم', dc: 'مصدر تيار مستمر' },
        zh: { cathode_h2: '阴极还原反应: 析出两倍体积氢气 H2', anode_o2: '阳极氧化反应: 析出一倍体积氧气 O2', faraday: '法拉第电解定律: 1 mol e- = 96500 C', dc: '直流稳压外接电源驱动' },
        ku: { cathode_h2: 'Katot: H2 (2V)', anode_o2: 'Anot: O2 (1V)', faraday: '1 mol e- = 96500 C', dc: 'Çavkaniya Hêza DC' },
      },
    },
    {
      archetype: 'electrolysis-hoffman-cell',
      title: {
        tr: 'Faraday Kanunları ve Kurban Elektrot',
        en: 'Faraday s Laws & Sacrificial Anodes',
        de: 'Faradaysche Gesetze & Opferanoden',
        fr: 'Lois de Faraday et anodes sacrificielles',
        ru: 'Законы Фарадея и протекторная защита',
        ar: 'قوانين فاراداي والقطب المضحي',
        zh: '法拉第电沉积计算与牺牲阳极阴极保护',
        ku: 'Zagonên Faraday û Elektroda Qurbanê',
      },
      caption: {
        tr: 'm = (I . t . MA) / (96500 . z). Korozyonu önlemek için daha aktif kurban elektrot bağlanır.',
        en: 'Deposited mass calculation and cathodic protection by coupling more active sacrificial metals.',
        de: 'Massenberechnung nach Faraday und kathodischer Schutz durch unedlere Opferanoden.',
        fr: 'Calcul de masse électrodéposée et protection cathodique par anode sacrificielle plus réactive.',
        ru: 'Расчёт массы по Фарадею и катодная защита с помощью более активного металла-протектора.',
        ar: 'حساب كتلة المادة المترسبة وحماية المعادن من التآكل بربطها بقطب مضحي أكثر نشاطاً.',
        zh: '金属电解沉积质量公式与连接更活泼金属（牺牲阳极法）防止钢铁阴极腐蚀生锈。',
        ku: 'Hesaba komê bi qanûna Faraday û girêdana elektroda qurbanê ji bo rêgirtina korozyonê.',
      },
      labels: {
        tr: { faraday_law: 'm = (I.t.MA)/(96500.z)', sac_anode: 'Kurban Elektrot (Mg/Zn)', fe_pipe: 'Korunan Demir Boru (Fe)', electroplate: 'Elektrolitik Kaplama' },
        en: { faraday_law: 'm = (I·t·MA)/(96500·z)', sac_anode: 'Sacrificial Anode (Mg/Zn)', fe_pipe: 'Protected Iron Pipe', electroplate: 'Electroplating Cell' },
        de: { faraday_law: 'Massenformel nach Faraday', sac_anode: 'Opferanode (Mg/Zn)', fe_pipe: 'Geschütztes Eisenrohr', electroplate: 'Galvanisierung' },
        fr: { faraday_law: 'Loi quantitative de Faraday', sac_anode: 'Anode sacrificielle (Mg/Zn)', fe_pipe: 'Tuyau de fer protégé', electroplate: 'Galvanoplastie' },
        ru: { faraday_law: 'Формула Фарадея', sac_anode: 'Жертвенный анод (Mg/Zn)', fe_pipe: 'Защищаемая труба (Fe)', electroplate: 'Гальваностегия' },
        ar: { faraday_law: 'قانون فاراداي للكتلة', sac_anode: 'قطب مضحي (ماغنسيوم)', fe_pipe: 'أنبوب الحديد المحمي', electroplate: 'طلاء كهربائي' },
        zh: { faraday_law: '电解沉积质量定律计算式', sac_anode: '牺牲阳极保护块 (镁合金/锌块)', fe_pipe: '受到阴极保护的钢制输油管道', electroplate: '电解精炼与镀层技术' },
        ku: { faraday_law: 'm = (I.t.MA)/(96500.z)', sac_anode: 'Elektroda Qurbanê (Mg/Zn)', fe_pipe: 'Lûleya Hesin a Parastî', electroplate: 'Zêrkirina Elektrolîtîk' },
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
        tr: 'AX2 (180° Doğrusal), AX3 (120° Düzlem üçgen), AX4 (109.5° Düzgün dörtyüzlü), AX2E2 (104.5° Kırık doğru).',
        en: 'Electron pair repulsion shaping linear (180°), trigonal (120°), tetrahedral (109.5°), and bent (104.5°).',
        de: 'Abstoßung der Elektronenpaare: linear, trigonal planar, tetraedrisch und gewinkelt.',
        fr: 'Répulsion des doublets: linéaire (180°), trigonal (120°), tétraédrique (109.5°) et coudé (104.5°).',
        ru: 'Отталкивание электронных пар: линейная, плоско-треугольная, тетраэдрическая и угловая.',
        ar: 'تنافر أزواج الإلكترونات: خطي، مثلث مستوٍ، رباعي الأوجه، ومنحنٍ.',
        zh: '中心原子周围成键与孤对电子斥力决定空间立体对称几何构型与特征键角。',
        ku: 'Goşeyên bendan li gorî VSEPR: rast (180°), sêgoşe (120°), çaralî (109.5°) û xwar (104.5°).',
      },
      labels: {
        tr: { ax2: 'AX2: Doğrusal (180° - BeH2, CO2)', ax3: 'AX3: Düzlem Üçgen (120° - BH3)', ax4: 'AX4: Düzgün Dörtyüzlü (109.5° - CH4)', ax2e2: 'AX2E2: Kırık Doğru (104.5° - H2O)' },
        en: { ax2: 'AX2: Linear (180°)', ax3: 'AX3: Trigonal Planar (120°)', ax4: 'AX4: Tetrahedral (109.5°)', ax2e2: 'AX2E2: Bent (104.5°)' },
        de: { ax2: 'AX2: Linear 180°', ax3: 'AX3: Trigonal planar 120°', ax4: 'AX4: Tetraedrisch 109,5°', ax2e2: 'AX2E2: Gewinkelt 104,5°' },
        fr: { ax2: 'AX2: Linéaire 180°', ax3: 'AX3: Trigonal plan 120°', ax4: 'AX4: Tétraédrique 109.5°', ax2e2: 'AX2E2: Coudé 104.5°' },
        ru: { ax2: 'AX2: Линейная (180°)', ax3: 'AX3: Плоский треугольник (120°)', ax4: 'AX4: Тетраэдр (109.5°)', ax2e2: 'AX2E2: Угловая (104.5°)' },
        ar: { ax2: 'AX2: خطي (180 درجة)', ax3: 'AX3: مثلث مستوٍ (120 درجة)', ax4: 'AX4: رباعي الأوجه (109.5 درجة)', ax2e2: 'AX2E2: منحنٍ (104.5 درجة)' },
        zh: { ax2: 'AX2: 直线型 (180° 如 CO2, BeH2)', ax3: 'AX3: 平面三角形 (120° 如 BF3)', ax4: 'AX4: 正四面体型 (109.5° 如 CH4)', ax2e2: 'AX2E2: V型角形折线 (104.5° 如水分子)' },
        ku: { ax2: 'AX2: Rast (180°)', ax3: 'AX3: Sêgoşeya Duz (120°)', ax4: 'AX4: Çaralî (109.5°)', ax2e2: 'AX2E2: Xwar (104.5°)' },
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
        tr: { diamond: 'Elmas: sp3 (Sert, Yalıtkan)', graphite: 'Grafit: sp2 (Katmanlı, İletken)', graphene: 'Grafen: 2D Tek Atom Tabaka', nanotube: 'Karbon Nanotüp' },
        en: { diamond: 'Diamond: sp3 (Hard Insulator)', graphite: 'Graphite: sp2 (Conductor)', graphene: 'Graphene: 2D Monolayer', nanotube: 'Carbon Nanotubes' },
        de: { diamond: 'Diamant (sp3, Isolator)', graphite: 'Graphit (sp2, Leiter)', graphene: 'Graphen (2D-Schicht)', nanotube: 'Nanoröhren' },
        fr: { diamond: 'Diamant (sp3, isolant)', graphite: 'Graphite (sp2, conducteur)', graphene: 'Graphène (2D)', nanotube: 'Nanotube de carbone' },
        ru: { diamond: 'Алмаз (sp3, диэлектрик)', graphite: 'Графит (sp2, проводник)', graphene: 'Графен (2D-слой)', nanotube: 'Нанотрубка' },
        ar: { diamond: 'الماس: sp3 (صلد، عازل)', graphite: 'الجرافيت: sp2 (موصل)', graphene: 'الجرافين: طبقة أحادية', nanotube: 'أنابيب الكربون النانوية' },
        zh: { diamond: '金刚石: sp3 杂化 (自然界最硬非导体)', graphite: '石墨: sp2 杂化 (层状离域π电子导电)', graphene: '石墨烯: 二维单原子厚度六元碳网', nanotube: '碳纳米管: 极高拉伸强度与超导性' },
        ku: { diamond: 'Elmas: sp3 (Hişk, Îzole)', graphite: 'Grafît: sp2 (Gihîner)', graphene: 'Grafen: Qata 2D', nanotube: 'Nanotûba Karbonê' },
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
        fr: 'Familles d alcools, éthers, aldéhydes, cétones, acides carboxyliques et esters.',
        ru: 'Гидроксильная, карбонильная, карбоксильная и сложноэфирная функциональные группы.',
        ar: 'مجموعات الهيدروكسيل، الكربونيل، الكربوكسيل، والإستر.',
        zh: '醇羟基、醚键、醛酮羰基、羧酸羧基与酯类官能团立体结构及理化特征。',
        ku: 'Komên hîdroksîl, karbonîl, karboksîl û esterê di kîmyaya organîk de.',
      },
      labels: {
        tr: { alcohol: 'Alkol: R-OH', ether: 'Eter: R-O-R', carbonyl: 'Aldehit/Keton: C=O', acid: 'Asit: R-COOH / Ester' },
        en: { alcohol: 'Alcohol: R-OH', ether: 'Ether: R-O-R', carbonyl: 'Carbonyl: C=O', acid: 'Acid: R-COOH / Ester' },
        de: { alcohol: 'Alkohol: R-OH', ether: 'Ether: R-O-R', carbonyl: 'Carbonyl: C=O', acid: 'Carbonsäure: R-COOH' },
        fr: { alcohol: 'Alcool: R-OH', ether: 'Éther: R-O-R', carbonyl: 'Carbonyle: C=O', acid: 'Acide / Ester' },
        ru: { alcohol: 'Спирты: R-OH', ether: 'Простые эфиры: R-O-R', carbonyl: 'Карбонил: C=O', acid: 'Карбоновые кислоты' },
        ar: { alcohol: 'كحول: R-OH', ether: 'إيثر: R-O-R', carbonyl: 'كربونيل: C=O', acid: 'حمض كربوكسيلي / إستر' },
        zh: { alcohol: '醇类官能团: R-OH', ether: '醚类官能团: R-O-R', carbonyl: '醛与酮羰基: C=O', acid: '羧酸与羧酸酯类衍生物' },
        ku: { alcohol: 'Alkol: R-OH', ether: 'Eter: R-O-R', carbonyl: 'Karbonîl: C=O', acid: 'Asîd / Ester' },
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
        tr: 'Asimetrik alkene HX katıldığında H hidrojence zengin karbona bağlanır; uç alkinler Tollens le çökelek verir.',
        en: 'Hydrogen halide addition follows Markovnikov; terminal alkynes form silver precipitates with Tollens.',
        de: 'HX-Addition nach Markovnikov; terminale Alkine reagieren positiv mit Tollens-Reagenz.',
        fr: 'Addition de HX selon Markovnikov; les alcynes vrais réagissent au réactif de Tollens.',
        ru: 'Присоединение HX по Марковникову; концевые алкины дают осадок с реактивом Толленса.',
        ar: 'إضافة HX تتبع ماركوفنيكوف؛ الألكينات الطرفية تعطي راسباً فضياً مع كاشف تولنز.',
        zh: '卤化氢加成遵循马氏规则：氢加在氢多碳上；端基炔烃与醛类可与银氨托伦试剂生成银镜析出。',
        ku: 'Li gorî Markovnikov H diçe ser karbona bi hîdrojena zêde; alkînên serî bi Tollens re dikişin.',
      },
      labels: {
        tr: { markov: 'Markovnikov: H Zengine Gider', tollens_alkyne: 'Uç Alkin + Tollens -> Beyaz Çökelek', tollens_ald: 'Aldehit -> Gümüş Aynası', internal: 'İç Alkin Tepkime Vermez!' },
        en: { markov: 'Markovnikov Rule', tollens_alkyne: 'Terminal Alkyne + Tollens ppt', tollens_ald: 'Aldehyde -> Silver Mirror', internal: 'Internal Alkyne No Rxn!' },
        de: { markov: 'Markovnikov-Regel', tollens_alkyne: 'Terminales Alkin (Fällung)', tollens_ald: 'Aldehyd -> Silberspiegel', internal: 'Innenständiges Alkin: Keine Reaktion' },
        fr: { markov: 'Règle de Markovnikov', tollens_alkyne: 'Alcyne vrai + Tollens (précipité)', tollens_ald: 'Aldéhyde -> Miroir d argent', internal: 'Alcyne disubstitué: Pas de réaction' },
        ru: { markov: 'Правило Марковникова', tollens_alkyne: 'Концевой алкин + Толленс', tollens_ald: 'Альдегид -> Серебряное зеркало', internal: 'Внутренний алкин не реагирует!' },
        ar: { markov: 'قاعدة ماركوفنيكوف', tollens_alkyne: 'ألكين طرفي + تولنز (راسب)', tollens_ald: 'ألدهيد -> مرآة فضية', internal: 'ألكين داخلي لا يتفاعل' },
        zh: { markov: '马氏亲电加成规则: 富者愈富', tollens_alkyne: '端基末端炔与托伦试剂生成白色沉淀', tollens_ald: '醛基氧化还原形成璀璨银镜', internal: '内炔与酮类绝不与托伦试剂反应！' },
        ku: { markov: 'Zagona Markovnikov', tollens_alkyne: 'Alkîna Serî + Tollens -> Nişîva Spî', tollens_ald: 'Aldehîd -> Neynika Zîv', internal: 'Alkîna Hundirîn Bertekê Nenade!' },
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
        .map((q) => ({ q, safe: !diagramGivesAway(q, spec), rel: diagramRelevance(q, spec) }))
        .sort((a, b) =>
          Number(b.safe) - Number(a.safe) ||
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
