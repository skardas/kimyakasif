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
        ku: 'Amûrên Camî yên Bingehîn ên Laboratuwarê',
      },
      caption: {
        tr: 'Büret hassas hacimle sıvı eklemeye, erlenmayer çalkalayarak karıştırmaya, balon joje belirli hacimde çözelti hazırlamaya, ayırma hunisi birbirine karışmayan sıvıları ayırmaya yarar.',
        en: 'A burette delivers measured volumes, an Erlenmeyer flask is for swirling and mixing, a volumetric flask makes a solution of exact volume, and a separatory funnel separates immiscible liquids.',
        de: 'Präzise Volumenmessung und Lösungsvorbereitung mit Bürette, Erlenmeyerkolben und Messkolben.',
        fr: 'Mesure précise du volume et préparation de solutions avec burette, erlenmeyer et fiole jaugée.',
        ru: 'Бюретка служит для добавления жидкости точно отмеренными объёмами, колба Эрленмейера — для перемешивания встряхиванием, мерная колба — для приготовления раствора заданного объёма, делительная воронка — для разделения несмешивающихся жидкостей.',
        ar: 'تُستخدم السحاحة لإضافة حجوم دقيقة من السائل، والدورق المخروطي للخلط بالرج، والدورق الحجمي لتحضير محلول بحجم محدد، وقمع الفصل لفصل السوائل غير الممتزجة.',
        zh: '滴定管用于准确滴加一定体积的液体，锥形瓶用于振荡混合，容量瓶用于配制一定体积的溶液，分液漏斗用于分离互不相溶的液体。',
        ku: 'Bi buretê şile bi qebareya rast tê zêdekirin, di erlenmeyerê de bi hejandinê tê tevlihevkirin, bi balona pîvanê çareseriya bi qebareya diyar tê amadekirin, bi qîfa veqetandinê jî şileyên ku tev li hev nabin tên veqetandin.',
      },
      labels: {
        tr: { item1: 'Büret', item2: 'Erlenmayer', item3: 'Balon joje', item4: 'Ayırma hunisi' },
        en: { item1: 'Burette', item2: 'Erlenmeyer flask', item3: 'Volumetric flask', item4: 'Separatory funnel' },
        de: { item1: 'Bürette', item2: 'Erlenmeyerkolben', item3: 'Messkolben', item4: 'Scheidetrichter' },
        fr: { item1: 'Burette', item2: 'Erlenmeyer', item3: 'Fiole jaugée', item4: 'Ampoule à décanter' },
        ru: { item1: 'Бюретка', item2: 'Колба Эрленмейера', item3: 'Мерная колба', item4: 'Делительная воронка' },
        ar: { item1: 'سحاحة', item2: 'دورق مخروطي', item3: 'دورق حجمي', item4: 'قمع فصل' },
        zh: { item1: '滴定管', item2: '锥形瓶', item3: '容量瓶', item4: '分液漏斗' },
        ku: { item1: 'Buret', item2: 'Erlenmeyer', item3: 'Balona pîvanê', item4: 'Qîfa veqetandinê' },
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
        ku: 'Ji Alkîmiyê ber bi Kîmyayê: Înbîqa Distîlasyonê',
      },
      caption: {
        tr: 'İmbikte ısıtılan karışımın buharı başlıkta yoğuşur ve toplama kabına akar; Cabir bin Hayyan’a atfedilen bu düzenekle zaç yağı (H₂SO₄) ve kezzap (HNO₃) elde edilmiştir.',
        en: 'In an alembic the vapor of the heated mixture condenses in the head and runs into the receiver; with this apparatus, attributed to Jabir ibn Hayyan, sulfuric and nitric acids were prepared.',
        de: 'Destillationsapparat von Dschābir ibn Hayyān zur Gewinnung von Schwefelsäure und Salpetersäure.',
        fr: 'Appareil de distillation de Jabir ibn Hayyan pour la production d’acide sulfurique et nitrique.',
        ru: 'Пар нагретой смеси конденсируется в шлеме перегонного куба и стекает в приёмник; с помощью этой установки, которую приписывают Джабиру ибн Хайяну, получали купоросное масло (H₂SO₄) и крепкую водку (HNO₃).',
        ar: 'في الإنبيق يتكاثف بخار المخلوط المسخَّن في الرأس ويسيل إلى إناء الاستقبال؛ وبهذا الجهاز المنسوب إلى جابر بن حيان حُضِّر حمض الكبريتيك (H₂SO₄) وحمض النتريك (HNO₃).',
        zh: '蒸馏器中被加热混合物的蒸气在顶部冷凝后流入接收器；人们用这种相传由贾比尔·伊本·哈扬发明的装置制得了矾油(H₂SO₄)和硝镪水(HNO₃)。',
        ku: 'Di înbîqê de buhara tevliheviya germkirî di serî de şile dibe û diherike firaxa berhevkirinê; bi vê amûrê ku bi Câbir bin Heyyan ve tê girêdan, asîda sulfurîk (H₂SO₄) û asîda nîtrîk (HNO₃) hatine bidestxistin.',
      },
      labels: {
        tr: { top: 'Başlık: buhar yoğuşur', bottom: 'Ocak', left: 'Kazan: karışım', right: 'Toplama kabı: damıtık' },
        en: { top: 'Head: vapor condenses', bottom: 'Furnace', left: 'Cucurbit: mixture', right: 'Receiver: distillate' },
        de: { top: 'Helm: Dampf kondensiert', bottom: 'Ofen', left: 'Kolben: Gemisch', right: 'Vorlage: Destillat' },
        fr: { top: 'Chapiteau : la vapeur se condense', bottom: 'Fourneau', left: 'Cucurbite : mélange', right: 'Récipient : distillat' },
        ru: { top: 'Шлем: пар конденсируется', bottom: 'Печь', left: 'Куб: смесь', right: 'Приёмник: дистиллят' },
        ar: { top: 'الرأس: يتكاثف البخار', bottom: 'الموقد', left: 'القرعة: المخلوط', right: 'إناء الاستقبال: ناتج التقطير' },
        zh: { top: '蒸馏头：蒸气冷凝', bottom: '炉', left: '蒸馏釜：混合物', right: '接收器：馏出液' },
        ku: { top: 'Serî: buhar şile dibe', bottom: 'Ocax', left: 'Qazan: tevlihevî', right: 'Firaxa berhevkirinê: distîlat' },
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
        zh: '玻尔原子模型与轨道',
        ku: 'Modela Atomê ya Bohr û Xulgeh',
      },
      caption: {
        tr: 'Bohr modelinde elektron belirli enerji düzeylerinde (katmanlarda) bulunur; üst düzeyden alt düzeye inerken aradaki enerji farkını ışık (foton) olarak yayar.',
        en: 'In the Bohr model the electron occupies fixed energy levels (shells); when it falls to a lower level it emits the energy difference as light (a photon).',
        de: 'Konzentrische Schalen um den Kern mit Elektronenanregung und Photonenemission.',
        fr: 'Couches concentriques autour du noyau avec excitation électronique et émission de photon.',
        ru: 'В модели Бора электрон находится на определённых энергетических уровнях (электронных слоях); переходя с верхнего уровня на нижний, он испускает разность энергий в виде света (фотона).',
        ar: 'في نموذج بور يوجد الإلكترون في مستويات طاقة محددة (أغلفة)؛ وعندما ينتقل من مستوى أعلى إلى مستوى أدنى يُطلق فرق الطاقة بينهما على هيئة ضوء (فوتون).',
        zh: '在玻尔模型中，电子处于一定的能级（电子层）上；电子从高能级跃迁到低能级时，以光（光子）的形式放出两能级间的能量差。',
        ku: 'Di modela Bohr de elektron li astên enerjiyê yên diyar (qatan) cih digire; dema ji asteke jor dadikeve asteke jêr, cudahiya enerjiyê wek ronahî (foton) belav dike.',
      },
      labels: {
        tr: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: 'Foton yayılır: E = E₃ − E₂', nucleus: 'Çekirdek (+)' },
        en: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: 'Photon emitted: E = E₃ − E₂', nucleus: 'Nucleus (+)' },
        de: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: 'Photon wird emittiert: E = E₃ − E₂', nucleus: 'Atomkern (+)' },
        fr: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: 'Photon émis : E = E₃ − E₂', nucleus: 'Noyau (+)' },
        ru: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: 'Испускается фотон: E = E₃ − E₂', nucleus: 'Ядро (+)' },
        ar: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: 'ينبعث فوتون: E = E₃ − E₂', nucleus: 'النواة (+)' },
        zh: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: '发射光子：E = E₃ − E₂', nucleus: '原子核(+)' },
        ku: { n1: 'n = 1 (K)', n2: 'n = 2 (L)', n3: 'n = 3 (M)', photon: 'Foton belav dibe: E = E₃ − E₂', nucleus: 'Navok (+)' },
      },
    },
    {
      archetype: 'periodic-table-trends',
      title: {
        tr: 'Periyodik Sistemde Özelliklerin Değişimi',
        en: 'Periodic Table Trends',
        de: 'Periodensystem Periodische Trends',
        fr: 'Tendances du tableau périodique',
        ru: 'Изменение свойств элементов в периодической системе',
        ar: 'تدرج الخواص في الجدول الدوري',
        zh: '元素性质的周期性变化',
        ku: 'Guherîna Taybetmendiyan di Tabloya Periyodîk de',
      },
      caption: {
        tr: 'Genel eğilim: aynı periyotta soldan sağa atom yarıçapı küçülür, iyonlaşma enerjisi ve elektronegatiflik artar; aynı grupta yukarıdan aşağıya atom yarıçapı ve metalik özellik artar.',
        en: 'General trend: across a period atomic radius decreases while ionization energy and electronegativity increase; down a group atomic radius and metallic character increase.',
        de: 'Der Atomradius nimmt von links nach rechts ab; Ionisierungsenergie und Elektronegativität nehmen zu.',
        fr: 'Le rayon atomique diminue de gauche à droite ; l’énergie d’ionisation et l’électronégativité augmentent.',
        ru: 'Общая закономерность: в периоде слева направо радиус атома уменьшается, энергия ионизации и электроотрицательность растут; в группе сверху вниз растут радиус атома и металлические свойства.',
        ar: 'الاتجاه العام: في الدورة الواحدة من اليسار إلى اليمين يقل نصف القطر الذري وتزداد طاقة التأين والسالبية الكهربائية؛ وفي المجموعة الواحدة من الأعلى إلى الأسفل يزداد نصف القطر الذري وتزداد الصفة الفلزية.',
        zh: '总体趋势：同周期从左到右，原子半径减小，电离能和电负性增大；同主族从上到下，原子半径增大，金属性增强。',
        ku: 'Meyla giştî: di periyodekê de ji çepê ber bi rastê nîvçapa atomê kêm dibe, enerjiya îyonîzasyonê û elektronegatîfî zêde dibin; di komekê de ji jor ber bi jêr nîvçapa atomê û taybetmendiya metalîk zêde dibin.',
      },
      labels: {
        tr: { radius: 'Atom yarıçapı artar', ie: 'İyonlaşma enerjisi artar', eneg: 'Elektronegatiflik artar', metallic: 'Metalik özellik artar' },
        en: { radius: 'Atomic radius increases', ie: 'Ionization energy increases', eneg: 'Electronegativity increases', metallic: 'Metallic character increases' },
        de: { radius: 'Atomradius nimmt zu', ie: 'Ionisierungsenergie nimmt zu', eneg: 'Elektronegativität nimmt zu', metallic: 'Metallcharakter nimmt zu' },
        fr: { radius: 'Le rayon atomique augmente', ie: 'L’énergie d’ionisation augmente', eneg: 'L’électronégativité augmente', metallic: 'Le caractère métallique augmente' },
        ru: { radius: 'Атомный радиус растёт', ie: 'Энергия ионизации растёт', eneg: 'Электроотрицательность растёт', metallic: 'Металлические свойства растут' },
        ar: { radius: 'يزداد نصف القطر الذري', ie: 'تزداد طاقة التأين', eneg: 'تزداد السالبية الكهربائية', metallic: 'تزداد الصفة الفلزية' },
        zh: { radius: '原子半径增大', ie: '电离能增大', eneg: '电负性增大', metallic: '金属性增强' },
        ku: { radius: 'Nîvçapa atomê zêde dibe', ie: 'Enerjiya îyonîzasyonê zêde dibe', eneg: 'Elektronegatîfî zêde dibe', metallic: 'Taybetmendiya metalîk zêde dibe' },
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
        ku: 'Girêdanên Kîmyewî û Avahiya Lewis',
      },
      caption: {
        tr: 'İyonik bağda elektron aktarılır, kovalent bağda ortaklaşa kullanılır; polar moleküller arasında dipol–dipol etkileşimi, H’nin F, O veya N’ye bağlı olduğu moleküller arasında hidrojen bağı kurulur.',
        en: 'In an ionic bond an electron is transferred, in a covalent bond electrons are shared; polar molecules attract by dipole–dipole forces, and molecules with H bonded to F, O or N form hydrogen bonds.',
        de: 'Ionengitter / kovalentes Molekül und dipolare Wechselwirkungen.',
        fr: 'Réseau cristallin ionique / molécule covalente et dipôles.',
        ru: 'При ионной связи электроны переходят от одного атома к другому, при ковалентной — становятся общими; между полярными молекулами действует диполь-дипольное взаимодействие, а между молекулами, в которых H связан с F, O или N, — водородная связь.',
        ar: 'في الرابطة الأيونية ينتقل الإلكترون، وفي الرابطة التساهمية تُشارَك الإلكترونات؛ وتتجاذب الجزيئات القطبية بقوى ثنائي القطب–ثنائي القطب، أما الجزيئات التي يرتبط فيها H بـ F أو O أو N فتنشأ بينها روابط هيدروجينية.',
        zh: '离子键中电子发生转移，共价键中电子被共用；极性分子之间存在偶极-偶极作用，H与F、O或N相连的分子之间形成氢键。',
        ku: 'Di girêdana îyonîk de elektron tê veguhastin, di girêdana kovalent de bi hev re tê parvekirin; di navbera molekulên polar de hêzên dîpol–dîpol, di navbera molekulên ku tê de H bi F, O an N ve girêdayî ye de girêdana hîdrojenê çêdibe.',
      },
      labels: {
        tr: { bond1: 'İyonik bağ: elektron aktarılır', bond2: 'Kovalent bağ: elektron ortaklaşılır', hbond: 'Hidrojen bağı (H ile F, O, N)', dipole: 'Dipol–dipol etkileşimi' },
        en: { bond1: 'Ionic bond: electron transferred', bond2: 'Covalent bond: electrons shared', hbond: 'Hydrogen bond (H with F, O, N)', dipole: 'Dipole–dipole attraction' },
        de: { bond1: 'Ionenbindung: Elektron wird übertragen', bond2: 'Kovalente Bindung: gemeinsames Elektronenpaar', hbond: 'Wasserstoffbrücke (H an F, O, N)', dipole: 'Dipol-Dipol-Wechselwirkung' },
        fr: { bond1: 'Liaison ionique : transfert d’électron', bond2: 'Liaison covalente : doublet partagé', hbond: 'Liaison hydrogène (H lié à F, O, N)', dipole: 'Interaction dipôle–dipôle' },
        ru: { bond1: 'Ионная связь: перенос электрона', bond2: 'Ковалентная связь: общая пара', hbond: 'Водородная связь (H при F, O, N)', dipole: 'Диполь-дипольное взаимодействие' },
        ar: { bond1: 'رابطة أيونية: انتقال إلكترون', bond2: 'رابطة تساهمية: مشاركة إلكترونات', hbond: 'رابطة هيدروجينية (H مع F أو O أو N)', dipole: 'تجاذب ثنائي القطب–ثنائي القطب' },
        zh: { bond1: '离子键：电子转移', bond2: '共价键：共用电子对', hbond: '氢键(H与F、O、N)', dipole: '偶极-偶极作用' },
        ku: { bond1: 'Girêdana îyonîk: elektron tê veguhastin', bond2: 'Girêdana kovalent: elektron tê parvekirin', hbond: 'Girêdana hîdrojenê (H bi F, O, N re)', dipole: 'Têkiliya dîpol–dîpol' },
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
        zh: '氢键与水的反常性质',
        ku: 'Girêdana Hîdrojenê û Anomaliya Avê',
      },
      caption: {
        tr: 'Su molekülleri arasındaki hidrojen bağları suyun kaynama noktasını yükseltir; buzda moleküller düzenli ve boşluklu bir örgüde tutulduğu için buzun yoğunluğu sıvı sudan küçüktür.',
        en: 'Hydrogen bonds between water molecules raise its boiling point; in ice the molecules are held in an ordered, open lattice, so ice is less dense than liquid water.',
        de: 'Zwischenmolekulare Anziehung zwischen an FON gebundenem Wasserstoff und benachbarten freien Elektronenpaaren.',
        fr: 'Attraction intermoléculaire entre hydrogène lié à FON et doublets non liants voisins.',
        ru: 'Водородные связи между молекулами воды повышают её температуру кипения; во льду молекулы удерживаются в упорядоченной рыхлой решётке, поэтому плотность льда меньше, чем у жидкой воды.',
        ar: 'ترفع الروابط الهيدروجينية بين جزيئات الماء درجة غليانه؛ وفي الجليد تُحفظ الجزيئات في شبكة منتظمة كثيرة الفراغات، لذلك تكون كثافة الجليد أقل من كثافة الماء السائل.',
        zh: '水分子间的氢键使水的沸点升高；冰中的分子排列成规则而多空隙的晶格，因此冰的密度比液态水小。',
        ku: 'Girêdanên hîdrojenê yên di navbera molekulên avê de xala kelînê ya avê bilind dikin; di qeşayê de molekul di toreke rêkûpêk û valahîdar de ne, loma çiriya qeşayê ji ya ava şile kêmtir e.',
      },
      labels: {
        tr: { doner: 'H verici (O–H)', acceptor: 'H alıcı (O üzerindeki e⁻ çifti)', bp: 'Hidrojen bağı kaynama noktasını yükseltir', ice: 'Buz: altıgen, boşluklu örgü' },
        en: { doner: 'H donor (O–H)', acceptor: 'H acceptor (lone pair on O)', bp: 'Hydrogen bonding raises the boiling point', ice: 'Ice: open hexagonal lattice' },
        de: { doner: 'H-Donor (O–H)', acceptor: 'H-Akzeptor (freies Paar am O)', bp: 'Wasserstoffbrücken erhöhen den Siedepunkt', ice: 'Eis: offenes hexagonales Gitter' },
        fr: { doner: 'Donneur de H (O–H)', acceptor: 'Accepteur de H (doublet libre de O)', bp: 'La liaison hydrogène élève le point d’ébullition', ice: 'Glace : réseau hexagonal ouvert' },
        ru: { doner: 'Донор H (O–H)', acceptor: 'Акцептор H (пара электронов O)', bp: 'Водородные связи повышают температуру кипения', ice: 'Лёд: рыхлая гексагональная решётка' },
        ar: { doner: 'مانح H (O–H)', acceptor: 'مستقبل H (زوج إلكتروني حر على O)', bp: 'الرابطة الهيدروجينية ترفع درجة الغليان', ice: 'الجليد: شبكة سداسية كثيرة الفراغات' },
        zh: { doner: '氢供体(O–H)', acceptor: '氢受体(O上的孤电子对)', bp: '氢键使沸点升高', ice: '冰：多空隙的六方晶格' },
        ku: { doner: 'Dayînerê H (O–H)', acceptor: 'Wergirê H (cotê e⁻ yê li ser O)', bp: 'Girêdana hîdrojenê xala kelînê bilind dike', ice: 'Qeşa: tora şeşgoşe ya valahîdar' },
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
        zh: '物质的状态与加热曲线',
        ku: 'Rewşên Madeyê û Xêza Germbûnê',
      },
      caption: {
        tr: '1 atm basınçta suyun ısınma eğrisi: sıcaklık yalnızca tek hâlin bulunduğu bölgelerde artar, erime (0 °C) ve kaynama (100 °C) sırasında sabit kalır.',
        en: 'Heating curve of water at 1 atm: the temperature rises only where a single phase is present and stays constant during melting (0 °C) and boiling (100 °C).',
        de: 'Fest-, Flüssig- und Gasphasen mit Temperaturplateaus beim Schmelzen und Sieden.',
        fr: 'Phases solide, liquide et gaz avec paliers de température à fusion et ébullition.',
        ru: 'Кривая нагревания воды при 1 атм: температура растёт только на участках, где вещество находится в одном агрегатном состоянии, и остаётся постоянной при плавлении (0 °C) и кипении (100 °C).',
        ar: 'منحنى تسخين الماء عند 1 atm: ترتفع درجة الحرارة فقط في المناطق التي توجد فيها حالة واحدة، وتبقى ثابتة أثناء الانصهار (0 °C) والغليان (100 °C).',
        zh: '1 atm下水的加热曲线：只有单一状态存在时温度才升高；在熔化(0 °C)和沸腾(100 °C)过程中温度保持不变。',
        ku: 'Xêza germbûna avê di 1 atm de: germahî tenê li herêmên ku tenê rewşek tê de heye bilind dibe; di dema helînê (0 °C) û kelînê (100 °C) de sabît dimîne.',
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
        ku: 'Zexta Buharê û Xala Kelînê',
      },
      caption: {
        tr: 'Sıcaklık arttıkça sıvının buhar basıncı artar; buhar basıncı dış basınca eşit olduğunda sıvı kaynar. Aynı sıcaklıkta buhar basıncı yüksek olan sıvının kaynama noktası düşüktür.',
        en: 'The vapor pressure of a liquid rises with temperature; the liquid boils when it equals the external pressure. At a given temperature the liquid with the higher vapor pressure has the lower boiling point.',
        de: 'Sieden tritt ein, wenn der Dampfdruck dem äußeren Luftdruck entspricht.',
        fr: 'L’ébullition commence dès que la pression de vapeur égale la pression externe.',
        ru: 'С ростом температуры давление пара жидкости увеличивается; когда оно становится равным внешнему давлению, жидкость кипит. Из двух жидкостей при одной температуре ниже температура кипения у той, давление пара которой выше.',
        ar: 'يزداد ضغط بخار السائل بارتفاع درجة الحرارة، ويغلي السائل عندما يتساوى ضغط بخاره مع الضغط الخارجي. وعند درجة الحرارة نفسها تكون درجة غليان السائل ذي ضغط البخار الأعلى أدنى.',
        zh: '温度升高，液体的蒸气压增大；蒸气压等于外界压强时液体沸腾。同一温度下蒸气压较大的液体，沸点较低。',
        ku: 'Germahî çiqas zêde bibe, zexta buhara şileyê ewqas zêde dibe; dema zexta buharê bigihîje zexta derve, şile dikele. Di heman germahiyê de, şileya ku zexta buhara wê bilindtir e, xala kelînê ya wê nizmtir e.',
      },
      labels: {
        tr: { pvap: 'Buhar basıncı', pext: 'Dış basınç 1 atm: buhar basıncı buna eşitlenince sıvı kaynar', tb: 'Kaynama noktaları', visc: 'Sıcaklık artınca viskozite azalır' },
        en: { pvap: 'Vapor pressure', pext: 'External pressure 1 atm: the liquid boils when its vapor pressure reaches it', tb: 'Boiling points', visc: 'Viscosity falls as temperature rises' },
        de: { pvap: 'Dampfdruck', pext: 'Außendruck 1 atm: Erreicht der Dampfdruck ihn, siedet die Flüssigkeit', tb: 'Siedepunkte', visc: 'Die Viskosität sinkt mit steigender Temperatur' },
        fr: { pvap: 'Pression de vapeur', pext: 'Pression extérieure 1 atm : le liquide bout quand sa pression de vapeur l’atteint', tb: 'Points d’ébullition', visc: 'La viscosité diminue quand la température augmente' },
        ru: { pvap: 'Давление пара', pext: 'Внешнее давление 1 атм: жидкость кипит, когда давление пара достигает его', tb: 'Температуры кипения', visc: 'С ростом температуры вязкость уменьшается' },
        ar: { pvap: 'ضغط البخار', pext: 'الضغط الخارجي 1 atm: يغلي السائل عندما يساويه ضغط بخاره', tb: 'درجات الغليان', visc: 'تقل اللزوجة بارتفاع درجة الحرارة' },
        zh: { pvap: '蒸气压', pext: '外压 1 atm：蒸气压与之相等时液体沸腾', tb: '沸点', visc: '温度升高，黏度减小' },
        ku: { pvap: 'Zexta buharê', pext: 'Zexta derve 1 atm: dema zexta buharê bigihîje wê, şile dikele', tb: 'Xalên kelînê', visc: 'Germahî zêde dibe, vîskozîte kêm dibe' },
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
        zh: '水的硬度与软化',
        ku: 'Hişkiya Avê û Çerxa Paqijkirinê',
      },
      caption: {
        tr: 'Sert su Ca²⁺ ve Mg²⁺ iyonları içerir. Bikarbonat kaynaklı geçici sertlik kaynatılarak, kalıcı sertlik iyon değiştirici reçineyle giderilir.',
        en: 'Hard water contains Ca²⁺ and Mg²⁺ ions. Temporary (bicarbonate) hardness is removed by boiling, permanent hardness with an ion-exchange resin.',
        de: 'Beseitigung vorübergehender Härte durch Kochen und bleibender Härte über Ionenaustauscher.',
        fr: 'Élimination de la dureté temporaire par ébullition et permanente par résines échangeuses d’ions.',
        ru: 'Жёсткая вода содержит ионы Ca²⁺ и Mg²⁺. Временную (гидрокарбонатную) жёсткость устраняют кипячением, постоянную — ионообменной смолой.',
        ar: 'يحتوي الماء العسر على أيونات Ca²⁺ وMg²⁺. يُزال العسر المؤقت الناتج عن البيكربونات بالغليان، ويُزال العسر الدائم براتنج التبادل الأيوني.',
        zh: '硬水中含有Ca²⁺ 和Mg²⁺。由碳酸氢盐引起的暂时硬度可通过煮沸除去，永久硬度可用离子交换树脂除去。',
        ku: 'Ava hişk îyonên Ca²⁺ û Mg²⁺ dihewîne. Hişkiya demkî ya ji bîkarbonatê bi kelandinê, hişkiya domdar jî bi reçîneya îyonguhêr tê rakirin.',
      },
      labels: {
        tr: { ion1: 'Sert su: Ca²⁺ ve Mg²⁺ iyonları', boil: 'Geçici sertlik: kaynatma', resin: 'Kalıcı sertlik: iyon değiştirici reçine', pure: 'Sonuç: yumuşak su' },
        en: { ion1: 'Hard water: Ca²⁺ and Mg²⁺ ions', boil: 'Temporary hardness: boiling', resin: 'Permanent hardness: ion-exchange resin', pure: 'Result: soft water' },
        de: { ion1: 'Hartes Wasser: Ca²⁺- und Mg²⁺-Ionen', boil: 'Temporäre Härte: Abkochen', resin: 'Permanente Härte: Ionenaustauscherharz', pure: 'Ergebnis: weiches Wasser' },
        fr: { ion1: 'Eau dure : ions Ca²⁺ et Mg²⁺', boil: 'Dureté temporaire : ébullition', resin: 'Dureté permanente : résine échangeuse d’ions', pure: 'Résultat : eau douce' },
        ru: { ion1: 'Жёсткая вода: ионы Ca²⁺ и Mg²⁺', boil: 'Временная жёсткость: кипячение', resin: 'Постоянная жёсткость: ионообменная смола', pure: 'Результат: мягкая вода' },
        ar: { ion1: 'ماء عسر: أيونات Ca²⁺ و Mg²⁺', boil: 'العسر المؤقت: الغلي', resin: 'العسر الدائم: راتنج التبادل الأيوني', pure: 'النتيجة: ماء يسر' },
        zh: { ion1: '硬水：Ca²⁺ 和 Mg²⁺ 离子', boil: '暂时硬度：煮沸', resin: '永久硬度：离子交换树脂', pure: '结果：软水' },
        ku: { ion1: 'Ava hişk: îyonên Ca²⁺ û Mg²⁺', boil: 'Hişkiya demkî: kelandin', resin: 'Hişkiya domdar: reçîneya îyonguhêr', pure: 'Encam: ava nerm' },
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
        zh: '温室气体与酸雨',
        ku: 'Gazên Serayê û Barana Asîdî',
      },
      caption: {
        tr: 'CO₂ ve CH₄ gibi sera gazları yeryüzünden yayılan ısıyı tutar. Fosil yakıtlardan çıkan SO₂ ve NO₂ ise atmosferde H₂SO₄ ve HNO₃’e dönüşerek asit yağmuruna yol açar.',
        en: 'Greenhouse gases such as CO₂ and CH₄ trap the heat radiated by the Earth. SO₂ and NO₂ from fossil fuels turn into H₂SO₄ and HNO₃ in the atmosphere and cause acid rain.',
        de: 'Umwandlung fossiler Abgase (SO₂, NO₂) in der Atmosphäre zu Schwefel- und Salpetersäure.',
        fr: 'Transformation atmosphérique des émissions de SO₂ et NO₂ en acides sulfurique et nitrique.',
        ru: 'Парниковые газы, такие как CO₂ и CH₄, удерживают тепло, излучаемое земной поверхностью. SO₂ и NO₂ из ископаемого топлива превращаются в атмосфере в H₂SO₄ и HNO₃ и вызывают кислотные дожди.',
        ar: 'تحبس غازات الاحتباس الحراري مثل CO₂ وCH₄ الحرارة المنبعثة من سطح الأرض. أما SO₂ وNO₂ الناتجان عن الوقود الأحفوري فيتحولان في الغلاف الجوي إلى H₂SO₄ وHNO₃ ويسببان الأمطار الحمضية.',
        zh: 'CO₂、CH₄等温室气体能吸收地面辐射的热量。化石燃料燃烧产生的SO₂和NO₂在大气中转化为H₂SO₄和HNO₃，形成酸雨。',
        ku: 'Gazên serayê yên wek CO₂ û CH₄ germa ku ji rûyê erdê belav dibe digirin. SO₂ û NO₂ yên ji sotemeniyên fosîl derdikevin jî di atmosferê de vediguherin H₂SO₄ û HNO₃ û barana asîdî çêdikin.',
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
        ru: 'Основные законы химии и сохранение массы',
        ar: 'القوانين الأساسية للكيمياء وحفظ الكتلة',
        zh: '化学基本定律与质量守恒',
        ku: 'Zagonên Bingehîn ên Kîmyayê û Hevsengiya Girseyê',
      },
      caption: {
        tr: 'Kimyasal tepkimede atomlar yok olmaz, yeniden düzenlenir: girenlerin toplam kütlesi ürünlerin toplam kütlesine eşittir ve bir bileşikteki elementlerin kütle oranı sabittir.',
        en: 'Atoms are rearranged, not destroyed, in a chemical reaction: the total mass of the reactants equals that of the products, and the elements of a compound combine in a fixed mass ratio.',
        de: 'In einem geschlossenen System entspricht die Masse der Reaktanten der Masse der Produkte.',
        fr: 'Dans un système clos, la masse totale des réactifs est rigoureusement égale à celle des produits.',
        ru: 'В химической реакции атомы не исчезают, а перегруппировываются: общая масса реагентов равна общей массе продуктов, а массовое отношение элементов в соединении постоянно.',
        ar: 'في التفاعل الكيميائي لا تفنى الذرات بل يُعاد ترتيبها: الكتلة الكلية للمواد المتفاعلة تساوي الكتلة الكلية للمواد الناتجة، ونسبة كتل العناصر في المركب ثابتة.',
        zh: '化学反应中原子不会消失，只是重新组合：反应物的总质量等于生成物的总质量，化合物中各元素的质量比是固定的。',
        ku: 'Di reaksiyona kîmyewî de atom winda nabin, ji nû ve tên rêzkirin: girseya giştî ya reaktantan bi girseya giştî ya hilberan re wekhev e û di pêkhateyekê de rêjeya girseyî ya elementan sabît e.',
      },
      labels: {
        tr: { mreact: 'Girenlerin kütlesi: 36 g', mprod: 'Ürünlerin kütlesi: 36 g', balance: 'Kütlenin korunumu (Lavoisier): toplam kütle değişmez', ratio: 'Sabit oranlar (Proust): m(H) / m(O) = 1 / 8' },
        en: { mreact: 'Mass of reactants: 36 g', mprod: 'Mass of products: 36 g', balance: 'Conservation of mass (Lavoisier): total mass is unchanged', ratio: 'Definite proportions (Proust): m(H) / m(O) = 1 / 8' },
        de: { mreact: 'Masse der Edukte: 36 g', mprod: 'Masse der Produkte: 36 g', balance: 'Massenerhaltung (Lavoisier): Gesamtmasse bleibt gleich', ratio: 'Konstante Proportionen (Proust): m(H) / m(O) = 1 / 8' },
        fr: { mreact: 'Masse des réactifs : 36 g', mprod: 'Masse des produits : 36 g', balance: 'Conservation de la masse (Lavoisier) : masse totale inchangée', ratio: 'Proportions définies (Proust) : m(H) / m(O) = 1 / 8' },
        ru: { mreact: 'Масса реагентов: 36 г', mprod: 'Масса продуктов: 36 г', balance: 'Сохранение массы (Лавуазье): общая масса не меняется', ratio: 'Постоянство состава (Пруст): m(H) / m(O) = 1 / 8' },
        ar: { mreact: 'كتلة المواد المتفاعلة: 36 g', mprod: 'كتلة المواد الناتجة: 36 g', balance: 'حفظ الكتلة (لافوازييه): الكتلة الكلية لا تتغير', ratio: 'النسب الثابتة (بروست): m(H) / m(O) = 1 / 8' },
        zh: { mreact: '反应物质量：36 g', mprod: '生成物质量：36 g', balance: '质量守恒（拉瓦锡）：总质量不变', ratio: '定比定律（普鲁斯特）：m(H) / m(O) = 1 / 8' },
        ku: { mreact: 'Girseya reaktantan: 36 g', mprod: 'Girseya hilberan: 36 g', balance: 'Parastina girseyê (Lavoisier): girseya giştî naguhere', ratio: 'Rêjeyên sabît (Proust): m(H) / m(O) = 1 / 8' },
      },
    },
    {
      archetype: 'gas-piston-manometer',
      title: {
        tr: 'Mol Kavramı ve Avogadro Dönüşümü',
        en: 'The Mole Concept and Avogadro Relations',
        de: 'Molbegriff und Avogadro-Zusammenhänge',
        fr: 'Concept de mole et relations d’Avogadro',
        ru: 'Понятие моля и пересчёты с числом Авогадро',
        ar: 'مفهوم المول وعلاقات أفوجادرو',
        zh: '物质的量与阿伏加德罗常数',
        ku: 'Têgeha Molê û Veguherînên Avogadro',
      },
      caption: {
        tr: 'Mol; kütle, tanecik sayısı ve gaz hacmi arasındaki köprüdür: n = m / MA = N / Nₐ = V / 22,4 (gaz, normal koşullar).',
        en: 'The mole links mass, number of particles and gas volume: n = m / M = N / Nₐ = V / 22.4 (gas at 0 °C and 1 atm).',
        de: 'Molrechnung zur Verknüpfung von Gramm, Teilchenzahl und Normgasvolumen (22,4 L).',
        fr: 'Calculs de moles liant masse en grammes, nombre d’entités et volume molaire gazeux (22,4 L).',
        ru: 'Моль связывает массу, число частиц и объём газа: n = m / M = N / Nₐ = V / 22,4 (газ, н. у.).',
        ar: 'المول حلقة الوصل بين الكتلة وعدد الجسيمات وحجم الغاز: n = m / M = N / Nₐ = V / 22.4 (للغاز في الظروف القياسية).',
        zh: '物质的量是联系质量、粒子数和气体体积的桥梁：n = m / M = N / Nₐ = V / 22.4（气体，标准状况）。',
        ku: 'Mol pira di navbera girse, hejmara perçeyan û qebareya gazê de ye: n = m / MA = N / Nₐ = V / 22,4 (gaz, şertên normal).',
      },
      labels: {
        tr: { mol: '1 mol = 6,02 × 10²³ tanecik (Nₐ)', na: 'Tanecik: N = n · Nₐ', vmol: 'Gaz hacmi (NK: 0 °C, 1 atm): V = n · 22,4 L', ma: 'Kütle: m = n · MA' },
        en: { mol: '1 mol = 6.02 × 10²³ particles (Nₐ)', na: 'Particles: N = n · Nₐ', vmol: 'Gas volume (0 °C, 1 atm): V = n · 22.4 L', ma: 'Mass: m = n · M' },
        de: { mol: '1 mol = 6,02 × 10²³ Teilchen (Nₐ)', na: 'Teilchen: N = n · Nₐ', vmol: 'Gasvolumen (0 °C, 1 atm): V = n · 22,4 L', ma: 'Masse: m = n · M' },
        fr: { mol: '1 mol = 6,02 × 10²³ entités (Nₐ)', na: 'Entités : N = n · Nₐ', vmol: 'Volume de gaz (0 °C, 1 atm) : V = n · 22,4 L', ma: 'Masse : m = n · M' },
        ru: { mol: '1 моль = 6,02 × 10²³ частиц (Nₐ)', na: 'Частицы: N = n · Nₐ', vmol: 'Объём газа (н. у.: 0 °C, 1 атм): V = n · 22,4 л', ma: 'Масса: m = n · M' },
        ar: { mol: '1 mol = 6.02 × 10²³ جسيم (Nₐ)', na: 'الجسيمات: N = n · Nₐ', vmol: 'حجم الغاز (0 °C، 1 atm): V = n · 22.4 L', ma: 'الكتلة: m = n · M' },
        zh: { mol: '1 mol = 6.02 × 10²³ 个粒子 (Nₐ)', na: '粒子数：N = n · Nₐ', vmol: '气体体积(0 °C, 1 atm)：V = n · 22.4 L', ma: '质量：m = n · M' },
        ku: { mol: '1 mol = 6,02 × 10²³ perçe (Nₐ)', na: 'Perçe: N = n · Nₐ', vmol: 'Qebareya gazê (ŞN: 0 °C, 1 atm): V = n · 22,4 L', ma: 'Girse: m = n · MA' },
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
        ru: 'Химические реакции и лимитирующий реагент',
        ar: 'التفاعلات الكيميائية والمادة المحددة للتفاعل',
        zh: '化学反应与限量反应物',
        ku: 'Reaksiyonên Kîmyewî û Reaktanta Sînordar',
      },
      caption: {
        tr: 'Tepkimede ilk tükenen madde sınırlayıcı bileşendir; oluşan ürün miktarını o belirler, diğer maddeden artan olur.',
        en: 'The reactant that runs out first is the limiting reactant; it fixes the amount of product, and some of the other reactant is left over.',
        de: 'Der zuerst verbrauchte Reaktant ist limitierend und bestimmt die theoretische Ausbeute.',
        fr: 'Le réactif consommé en premier est limitant et détermine le rendement théorique.',
        ru: 'Вещество, которое расходуется первым, — лимитирующий реагент; оно определяет количество образующегося продукта, а другое вещество остаётся в избытке.',
        ar: 'المادة التي تُستهلك أولًا في التفاعل هي المادة المحددة للتفاعل؛ فهي التي تحدد كمية الناتج، ويتبقى فائض من المادة الأخرى.',
        zh: '反应中最先耗尽的物质是限量反应物，它决定生成物的量，另一种物质有剩余。',
        ku: 'Di reaksiyonê de madeya ku pêşî diqede reaktanta sînordar e; mîqdara hilberê ew diyar dike, ji madeya din jî hinek zêde dimîne.',
      },
      labels: {
        tr: { limit: 'Sınırlayıcı bileşen: H₂ (tamamen tükenir)', excess: 'Artan madde: 1 O₂ molekülü', yield: '% verim = (gerçek ürün / teorik ürün) × 100', comb: 'Yanma: 2H₂ + O₂ → 2H₂O' },
        en: { limit: 'Limiting reactant: H₂ (used up completely)', excess: 'In excess: 1 O₂ molecule', yield: '% yield = (actual / theoretical) × 100', comb: 'Combustion: 2H₂ + O₂ → 2H₂O' },
        de: { limit: 'Limitierender Stoff: H₂ (wird ganz verbraucht)', excess: 'Überschuss: 1 O₂-Molekül', yield: 'Ausbeute in % = (tatsächlich / theoretisch) × 100', comb: 'Verbrennung: 2H₂ + O₂ → 2H₂O' },
        fr: { limit: 'Réactif limitant : H₂ (entièrement consommé)', excess: 'En excès : 1 molécule de O₂', yield: 'Rendement % = (réel / théorique) × 100', comb: 'Combustion : 2H₂ + O₂ → 2H₂O' },
        ru: { limit: 'Лимитирующий реагент: H₂ (расходуется полностью)', excess: 'В избытке: 1 молекула O₂', yield: 'Выход, % = (практический / теоретический) × 100', comb: 'Горение: 2H₂ + O₂ → 2H₂O' },
        ar: { limit: 'المادة المحددة للتفاعل: H₂ (تُستهلك كليًا)', excess: 'المادة الفائضة: جزيء O₂ واحد', yield: 'المردود % = (الفعلي / النظري) × 100', comb: 'احتراق: 2H₂ + O₂ → 2H₂O' },
        zh: { limit: '限量反应物：H₂（完全消耗）', excess: '剩余物质：1 个 O₂ 分子', yield: '产率% = (实际产量 / 理论产量) × 100', comb: '燃烧：2H₂ + O₂ → 2H₂O' },
        ku: { limit: 'Reaktanta sînordar: H₂ (bi tevahî diqede)', excess: 'Reaktanta zêde: 1 molekula O₂', yield: '% berhem = (rastîn / teorîk) × 100', comb: 'Şewitîn: 2H₂ + O₂ → 2H₂O' },
      },
    },
    {
      archetype: 'potential-energy-reaction',
      title: {
        tr: 'Çözünme-Çökelme ve Net İyon Denklemi',
        en: 'Precipitation & Net Ionic Equation',
        de: 'Fällungsreaktion und Nettoionengleichung',
        fr: 'Précipitation et équation ionique nette',
        ru: 'Растворение, осаждение и сокращённое ионное уравнение',
        ar: 'الترسيب والمعادلة الأيونية الصافية',
        zh: '沉淀反应与净离子方程式',
        ku: 'Helbûn-Niştin û Hevkêşeya Îyonî ya Net',
      },
      caption: {
        tr: 'İki çözelti karıştırıldığında Ag⁺ ve Cl⁻ iyonları AgCl katısı olarak çöker; Na⁺ ve NO₃⁻ iyonları tepkimeye girmeden çözeltide kalır.',
        en: 'When the two solutions are mixed, Ag⁺ and Cl⁻ ions precipitate as solid AgCl, while Na⁺ and NO₃⁻ ions stay in solution unchanged.',
        de: 'Der ausfallende Feststoff bildet die Nettoionengleichung; Zuschauerionen bleiben gelöst.',
        fr: 'Le solide précipité constitue l’équation ionique nette tandis que les ions spectateurs restent dissous.',
        ru: 'При смешивании двух растворов ионы Ag⁺ и Cl⁻ выпадают в осадок AgCl, а ионы Na⁺ и NO₃⁻ не участвуют в реакции и остаются в растворе.',
        ar: 'عند مزج المحلولين تترسب أيونات Ag⁺ وCl⁻ على هيئة AgCl صلب، بينما تبقى أيونات Na⁺ وNO₃⁻ في المحلول دون أن تتفاعل.',
        zh: '两种溶液混合时，Ag⁺ 和Cl⁻ 以AgCl固体的形式沉淀；Na⁺ 和NO₃⁻ 不参加反应，留在溶液中。',
        ku: 'Dema du çareserî tev li hev dibin, îyonên Ag⁺ û Cl⁻ wek AgCl ya hişk dinişin; îyonên Na⁺ û NO₃⁻ bêyî ku bikevin reaksiyonê di çareseriyê de dimînin.',
      },
      labels: {
        tr: { ppt: 'Çökelek: AgCl(k)', spec1: 'Na⁺: seyirci iyon', spec2: 'NO₃⁻: seyirci iyon', net: 'Net iyon denklemi: Ag⁺(suda) + Cl⁻(suda) → AgCl(k)' },
        en: { ppt: 'Precipitate: AgCl(s)', spec1: 'Na⁺: spectator ion', spec2: 'NO₃⁻: spectator ion', net: 'Net ionic equation: Ag⁺(aq) + Cl⁻(aq) → AgCl(s)' },
        de: { ppt: 'Niederschlag: AgCl(s)', spec1: 'Na⁺: Zuschauer-Ion', spec2: 'NO₃⁻: Zuschauer-Ion', net: 'Netto-Ionengleichung: Ag⁺(aq) + Cl⁻(aq) → AgCl(s)' },
        fr: { ppt: 'Précipité : AgCl(s)', spec1: 'Na⁺ : ion spectateur', spec2: 'NO₃⁻ : ion spectateur', net: 'Équation ionique nette : Ag⁺(aq) + Cl⁻(aq) → AgCl(s)' },
        ru: { ppt: 'Осадок: AgCl↓', spec1: 'Na⁺: ион-наблюдатель', spec2: 'NO₃⁻: ион-наблюдатель', net: 'Сокращённое ионное уравнение: Ag⁺ + Cl⁻ → AgCl↓' },
        ar: { ppt: 'راسب: AgCl(s)', spec1: 'Na⁺: أيون متفرج', spec2: 'NO₃⁻: أيون متفرج', net: 'المعادلة الأيونية الصافية: Ag⁺(aq) + Cl⁻(aq) → AgCl(s)' },
        zh: { ppt: '沉淀：AgCl(s)', spec1: 'Na⁺：旁观离子', spec2: 'NO₃⁻：旁观离子', net: '净离子方程式：Ag⁺(aq) + Cl⁻(aq) → AgCl(s)' },
        ku: { ppt: 'Niştek: AgCl(s)', spec1: 'Na⁺: îyona temaşevan', spec2: 'NO₃⁻: îyona temaşevan', net: 'Hevkêşeya îyonî ya net: Ag⁺(aq) + Cl⁻(aq) → AgCl(s)' },
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
        zh: '分馏与混合物的分离',
        ku: 'Distîlasyona Perçeyî û Veqetandina Tevliheviyan',
      },
      caption: {
        tr: 'Kaynama noktaları farklı, birbiri içinde çözünen sıvılar ayrımsal damıtmayla ayrılır: kaynama noktası düşük olan önce buharlaşır, soğutucuda yoğuşur ve toplama kabında birikir.',
        en: 'Miscible liquids with different boiling points are separated by fractional distillation: the lower-boiling liquid vaporizes first, condenses in the condenser and collects in the receiver.',
        de: 'Trennung mischbarer Flüssigkeiten mit unterschiedlichen Siedepunkten über eine Rektifikationskolonne.',
        fr: 'Séparation de liquides miscibles ayant des points d’ébullition différents grâce à une colonne de fractionnement.',
        ru: 'Взаимно растворимые жидкости с разными температурами кипения разделяют фракционной перегонкой: жидкость с более низкой температурой кипения испаряется первой, конденсируется в холодильнике и собирается в приёмнике.',
        ar: 'تُفصل السوائل الممتزجة ذات درجات الغليان المختلفة بالتقطير التجزيئي: يتبخر السائل ذو درجة الغليان الأدنى أولًا، ثم يتكاثف في المكثف ويتجمع في إناء الاستقبال.',
        zh: '沸点不同、互溶的液体可用分馏法分离：沸点低的组分先汽化，在冷凝管中冷凝后收集在接收器中。',
        ku: 'Şileyên ku di nav hev de dihelin û xalên kelînê yên wan cuda ne, bi distîlasyona perçeyî tên veqetandin: ya ku xala kelînê ya wê nizmtir e pêşî buhar dibe, di sarkerê de şile dibe û di firaxa berhevkirinê de kom dibe.',
      },
      labels: {
        tr: { col: 'Ayrımsal damıtma kolonu', cond: 'Soğutucu (Liebig)', vap1: 'Damıtık: etanol (KN 78 °C)', vap2: 'Balonda kalan: su (KN 100 °C)' },
        en: { col: 'Fractionating column', cond: 'Liebig condenser', vap1: 'Distillate: ethanol (b.p. 78 °C)', vap2: 'Left in the flask: water (b.p. 100 °C)' },
        de: { col: 'Fraktionierkolonne', cond: 'Liebigkühler', vap1: 'Destillat: Ethanol (Sdp. 78 °C)', vap2: 'Bleibt im Kolben: Wasser (Sdp. 100 °C)' },
        fr: { col: 'Colonne de fractionnement', cond: 'Réfrigérant de Liebig', vap1: 'Distillat : éthanol (Téb 78 °C)', vap2: 'Reste dans le ballon : eau (Téb 100 °C)' },
        ru: { col: 'Ректификационная колонка', cond: 'Холодильник Либиха', vap1: 'Дистиллят: этанол (Tкип 78 °C)', vap2: 'Остаётся в колбе: вода (Tкип 100 °C)' },
        ar: { col: 'عمود التجزئة', cond: 'مكثف ليبيغ', vap1: 'ناتج التقطير: إيثانول (درجة الغليان 78 °C)', vap2: 'يبقى في الدورق: ماء (درجة الغليان 100 °C)' },
        zh: { col: '分馏柱', cond: '直形冷凝管', vap1: '馏出液：乙醇(沸点 78 °C)', vap2: '留在烧瓶中：水(沸点 100 °C)' },
        ku: { col: 'Stûna distîlasyona perçeyî', cond: 'Sarker (Liebig)', vap1: 'Distîlat: etanol (XK 78 °C)', vap2: 'Di balonê de dimîne: av (XK 100 °C)' },
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
        ar: 'قمع الفصل وفرق الكثافة',
        zh: '分液漏斗与密度差',
        ku: 'Qîfa Veqetandinê û Cudahiya Çiriyê',
      },
      caption: {
        tr: 'Birbiri içinde çözünmeyen ve yoğunlukları farklı iki sıvı ayırma hunisinde iki faz oluşturur; yoğunluğu büyük olan altta toplanır ve musluktan önce o alınır.',
        en: 'Two immiscible liquids of different density form two layers in a separatory funnel; the denser one settles at the bottom and is run off first through the stopcock.',
        de: 'Abtrennung nicht mischbarer Flüssigkeitsschichten im Scheidetrichter anhand von Dichteunterschieden.',
        fr: 'Séparation de phases liquides non miscibles par gravité selon leurs masses volumiques.',
        ru: 'Две взаимно нерастворимые жидкости с разной плотностью образуют в делительной воронке два слоя; более плотная жидкость собирается внизу, и её первой сливают через кран.',
        ar: 'يكوّن سائلان غير ممتزجين مختلفا الكثافة طبقتين في قمع الفصل؛ فيستقر الأكثر كثافة في الأسفل ويُسحب أولًا من الصنبور.',
        zh: '两种互不相溶、密度不同的液体在分液漏斗中分为两层；密度大的在下层，打开活塞时先放出下层液体。',
        ku: 'Du şileyên ku di nav hev de nahelin û çiriya wan cuda ye, di qîfa veqetandinê de du qat çêdikin; ya ku çiriya wê mezintir e li jêr kom dibe û pêşî ew ji şîrê tê berdan.',
      },
      labels: {
        tr: { top: 'Zeytinyağı (d = 0,92 g/mL): üst faz', bot: 'Su (d = 1,00 g/mL): alt faz', valve: 'Musluk: alt faz önce alınır', flask: 'Toplama kabı (beher)' },
        en: { top: 'Olive oil (d = 0.92 g/mL): upper layer', bot: 'Water (d = 1.00 g/mL): lower layer', valve: 'Stopcock: lower layer is drained first', flask: 'Collecting beaker' },
        de: { top: 'Olivenöl (d = 0,92 g/mL): obere Phase', bot: 'Wasser (d = 1,00 g/mL): untere Phase', valve: 'Hahn: untere Phase läuft zuerst ab', flask: 'Becherglas (Auffanggefäß)' },
        fr: { top: 'Huile d’olive (d = 0,92 g/mL) : phase supérieure', bot: 'Eau (d = 1,00 g/mL) : phase inférieure', valve: 'Robinet : la phase inférieure s’écoule d’abord', flask: 'Bécher de récupération' },
        ru: { top: 'Оливковое масло (d = 0,92 г/мл): верхний слой', bot: 'Вода (d = 1,00 г/мл): нижний слой', valve: 'Кран: сначала сливают нижний слой', flask: 'Стакан-приёмник' },
        ar: { top: 'زيت الزيتون (d = 0.92 g/mL): الطبقة العليا', bot: 'الماء (d = 1.00 g/mL): الطبقة السفلى', valve: 'الصنبور: تُسحب الطبقة السفلى أولًا', flask: 'إناء التجميع (كأس زجاجية)' },
        zh: { top: '橄榄油 (d = 0.92 g/mL)：上层', bot: '水 (d = 1.00 g/mL)：下层', valve: '活塞：先放出下层', flask: '收集烧杯' },
        ku: { top: 'Rûnê zeytûnê (d = 0,92 g/mL): qata jor', bot: 'Av (d = 1,00 g/mL): qata jêr', valve: 'Şîr: pêşî qata jêr tê berdan', flask: 'Firaxa berhevkirinê (beher)' },
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
        ru: 'Нейтрализация и шкала pH',
        ar: 'التعادل الحمضي القاعدي ومقياس الرقم الهيدروجيني',
        zh: '酸碱中和与pH',
        ku: 'Neutralîzasyona Asîd-Baz û Pîvana pH',
      },
      caption: {
        tr: '25 °C’ta pH değeri 7’den küçük çözeltiler asidik, 7 olanlar nötr, 7’den büyük olanlar baziktir; asit ile baz tepkimeye girince tuz ve su oluşur.',
        en: 'At 25 °C solutions with pH below 7 are acidic, pH 7 is neutral and above 7 is basic; an acid and a base react to give a salt and water.',
        de: 'Reaktion von H⁺ und OH⁻ Ionen zu Wasser und Salz mit Neutralpunkt bei pH 7.',
        fr: 'Combinaison d’ions H⁺ et OH⁻ formant eau et sel avec équivalence neutre à pH 7.',
        ru: 'При 25 °C растворы с pH меньше 7 кислые, с pH = 7 нейтральные, с pH больше 7 щелочные; при взаимодействии кислоты с основанием образуются соль и вода.',
        ar: 'عند 25 °C يكون المحلول حمضيًا إذا كانت قيمة pH أقل من 7، ومتعادلًا إذا كانت 7، وقاعديًا إذا كانت أكبر من 7؛ وعند تفاعل الحمض مع القاعدة يتكون ملح وماء.',
        zh: '25 °C时，pH小于7的溶液呈酸性，等于7的呈中性，大于7的呈碱性；酸与碱反应生成盐和水。',
        ku: 'Li 25 °C çareseriyên ku pH-a wan ji 7 kêmtir e asîdî, yên ku pH-a wan 7 e notr, yên ku ji 7 mezintir e bazîk in; asîd û baz bi hev re dikevin reaksiyonê û xwê û av çêdibin.',
      },
      labels: {
        tr: { acid: 'Asidik: pH < 7', neutral: 'Nötr: pH = 7 (25 °C)', base: 'Bazik: pH > 7', hplus: 'Nötralleşme: asit + baz → tuz + su' },
        en: { acid: 'Acidic: pH < 7', neutral: 'Neutral: pH = 7 (25 °C)', base: 'Basic: pH > 7', hplus: 'Neutralization: acid + base → salt + water' },
        de: { acid: 'Sauer: pH < 7', neutral: 'Neutral: pH = 7 (25 °C)', base: 'Basisch: pH > 7', hplus: 'Neutralisation: Säure + Base → Salz + Wasser' },
        fr: { acid: 'Acide : pH < 7', neutral: 'Neutre : pH = 7 (25 °C)', base: 'Basique : pH > 7', hplus: 'Neutralisation : acide + base → sel + eau' },
        ru: { acid: 'Кислая: pH < 7', neutral: 'Нейтральная: pH = 7 (25 °C)', base: 'Щелочная: pH > 7', hplus: 'Нейтрализация: кислота + основание → соль + вода' },
        ar: { acid: 'حمضي: pH < 7', neutral: 'متعادل: pH = 7 (25 °C)', base: 'قاعدي: pH > 7', hplus: 'التعادل: حمض + قاعدة → ملح + ماء' },
        zh: { acid: '酸性：pH < 7', neutral: '中性：pH = 7 (25 °C)', base: '碱性：pH > 7', hplus: '中和：酸 + 碱 → 盐 + 水' },
        ku: { acid: 'Asîdî: pH < 7', neutral: 'Notr: pH = 7 (25 °C)', base: 'Bazîk: pH > 7', hplus: 'Neutralîzasyon: asîd + baz → xwê + av' },
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
        zh: '金属与酸的反应及生成的气体',
        ku: 'Reaksiyonên Metalan bi Asîdan re û Gazên Derdikevin',
      },
      caption: {
        tr: 'Aktif metaller asitlerle H₂ gazı verir. Bakır gibi yarı soy metaller HCl ile tepkime vermez; HNO₃ ile tepkimelerinde H₂ değil NO₂ veya NO gazı çıkar. Amfoter metaller kuvvetli bazlarla da H₂ verir.',
        en: 'Active metals give H₂ with acids. Semi-noble metals such as copper do not react with HCl; with HNO₃ they release NO₂ or NO instead of H₂. Amphoteric metals also give H₂ with strong bases.',
        de: 'Aktive Metalle entwickeln H₂; Halb-Edelmetalle mit HNO₃ setzen NO/NO₂ frei (kein H₂).',
        fr: 'Les métaux actifs dégagent du H₂ ; les métaux semi-nobles (Cu) avec HNO₃ libèrent NO/NO₂.',
        ru: 'Активные металлы с кислотами выделяют H₂. Полублагородные металлы, например медь, с HCl не реагируют, а в реакциях с HNO₃ выделяют не H₂, а NO₂ или NO. Амфотерные металлы выделяют H₂ и с сильными основаниями.',
        ar: 'تتفاعل الفلزات النشطة مع الأحماض فيتصاعد غاز H₂. أما الفلزات شبه النبيلة مثل النحاس فلا تتفاعل مع HCl، وعند تفاعلها مع HNO₃ يتصاعد غاز NO₂ أو NO لا H₂. وتُطلق الفلزات الأمفوتيرية غاز H₂ مع القواعد القوية أيضًا.',
        zh: '活泼金属与酸反应放出H₂。铜等不活泼金属不与HCl反应；与HNO₃反应时放出的是NO₂或NO，而不是H₂。两性金属与强碱反应也放出H₂。',
        ku: 'Metalên çalak bi asîdan re gaza H₂ didin. Metalên nîvesîl ên wek sifir bi HCl re nakevin reaksiyonê; di reaksiyona wan a bi HNO₃ re ne H₂, lê gaza NO₂ an NO derdikeve. Metalên amfoter bi bazên bihêz re jî H₂ didin.',
      },
      labels: {
        tr: { active: 'Aktif metal + asit → tuz + H₂', cu_conc: 'Cu + derişik HNO₃ → NO₂ (H₂ çıkmaz)', cu_dil: 'Cu + seyreltik HNO₃ → NO (H₂ çıkmaz)', amph: 'Amfoter metal + kuvvetli baz → H₂' },
        en: { active: 'Active metal + acid → salt + H₂', cu_conc: 'Cu + concentrated HNO₃ → NO₂ (no H₂)', cu_dil: 'Cu + dilute HNO₃ → NO (no H₂)', amph: 'Amphoteric metal + strong base → H₂' },
        de: { active: 'Unedles Metall + Säure → Salz + H₂', cu_conc: 'Cu + konzentrierte HNO₃ → NO₂ (kein H₂)', cu_dil: 'Cu + verdünnte HNO₃ → NO (kein H₂)', amph: 'Amphoteres Metall + starke Base → H₂' },
        fr: { active: 'Métal actif + acide → sel + H₂', cu_conc: 'Cu + HNO₃ concentré → NO₂ (pas de H₂)', cu_dil: 'Cu + HNO₃ dilué → NO (pas de H₂)', amph: 'Métal amphotère + base forte → H₂' },
        ru: { active: 'Активный металл + кислота → соль + H₂', cu_conc: 'Cu + конц. HNO₃ → NO₂ (H₂ не выделяется)', cu_dil: 'Cu + разб. HNO₃ → NO (H₂ не выделяется)', amph: 'Амфотерный металл + щёлочь → H₂' },
        ar: { active: 'فلز نشط + حمض → ملح + H₂', cu_conc: 'Cu + HNO₃ مركز → NO₂ (لا ينطلق H₂)', cu_dil: 'Cu + HNO₃ مخفف → NO (لا ينطلق H₂)', amph: 'فلز أمفوتيري + قاعدة قوية → H₂' },
        zh: { active: '活泼金属 + 酸 → 盐 + H₂', cu_conc: 'Cu + 浓 HNO₃ → NO₂(不放出 H₂)', cu_dil: 'Cu + 稀 HNO₃ → NO(不放出 H₂)', amph: '两性金属 + 强碱 → H₂' },
        ku: { active: 'Metala çalak + asîd → xwê + H₂', cu_conc: 'Cu + HNO₃ ya tîr → NO₂ (H₂ dernakeve)', cu_dil: 'Cu + HNO₃ ya sist → NO (H₂ dernakeve)', amph: 'Metala amfoter + baza bihêz → H₂' },
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
        ru: 'Мицелла мыла и механизм удаления грязи',
        ar: 'ميسيل الصابون وآلية تنظيف الأوساخ',
        zh: '肥皂胶束与去污原理',
        ku: 'Mîsela Sabûnê û Mekanîzmaya Paqijkirina Qirêjê',
      },
      caption: {
        tr: 'Sabunun hidrofob kuyruğu yağa, hidrofil başı suya yönelir; yağ damlası misel içinde sarılarak suyla birlikte uzaklaştırılır.',
        en: 'The hydrophobic tail of soap points into the grease and the hydrophilic head into the water; the grease droplet is wrapped in a micelle and rinsed away.',
        de: 'Der hydrophobe Schwanz bindet an Schmutz; der hydrophile Kopf ragt ins Wasser.',
        fr: 'La queue hydrophobe se lie à la graisse ; la tête hydrophile s’oriente vers l’eau pour l’émulsionner.',
        ru: 'Гидрофобный хвост мыла направлен к жиру, гидрофильная головка — к воде; капля жира оказывается внутри мицеллы и удаляется вместе с водой.',
        ar: 'يتجه الذيل الكاره للماء في الصابون نحو الدهن، والرأس المحب للماء نحو الماء؛ فتُحاط قطيرة الدهن داخل الميسيل وتُزال مع الماء.',
        zh: '肥皂的疏水尾伸向油污，亲水头朝向水；油滴被包裹在胶束中，随水一起被除去。',
        ku: 'Dûvikê hîdrofob ê sabûnê ber bi rûn ve, serê wê yê hîdrofîl ber bi avê ve dizivire; dilopa rûn di nav mîselê de tê pêçandin û bi avê re tê rakirin.',
      },
      labels: {
        tr: { head: 'Hidrofil baş (–COO⁻ Na⁺): suya yönelir', tail: 'Hidrofob kuyruk: yağın içine girer', dirt: 'Yağ (kir) damlası', water: 'Su' },
        en: { head: 'Hydrophilic head (–COO⁻ Na⁺): faces the water', tail: 'Hydrophobic tail: enters the grease', dirt: 'Grease (dirt) droplet', water: 'Water' },
        de: { head: 'Hydrophiler Kopf (–COO⁻ Na⁺): zeigt zum Wasser', tail: 'Hydrophober Schwanz: taucht ins Fett', dirt: 'Fetttropfen (Schmutz)', water: 'Wasser' },
        fr: { head: 'Tête hydrophile (–COO⁻ Na⁺) : vers l’eau', tail: 'Queue hydrophobe : dans la graisse', dirt: 'Gouttelette de graisse (salissure)', water: 'Eau' },
        ru: { head: 'Гидрофильная головка (–COO⁻ Na⁺): к воде', tail: 'Гидрофобный хвост: в жир', dirt: 'Капля жира (грязь)', water: 'Вода' },
        ar: { head: 'رأس محب للماء (–COO⁻ Na⁺): نحو الماء', tail: 'ذيل كاره للماء: داخل الدهن', dirt: 'قطيرة دهن (أوساخ)', water: 'ماء' },
        zh: { head: '亲水头 (–COO⁻ Na⁺)：朝向水', tail: '疏水尾：伸入油污', dirt: '油污液滴', water: '水' },
        ku: { head: 'Serê hîdrofîl (–COO⁻ Na⁺): ber bi avê', tail: 'Dûvikê hîdrofob: dikeve nav rûn', dirt: 'Dilopa rûn (qirêj)', water: 'Av' },
      },
    },
    {
      archetype: 'vsepr-molecular-geometry',
      title: {
        tr: 'Polimer Zincirleri ve Monomerler',
        en: 'Polymer Chains & Monomer Addition',
        de: 'Polymerketten und Monomerverknüpfung',
        fr: 'Chaînes polymères et addition de monomères',
        ru: 'Полимерные цепи и мономеры',
        ar: 'سلاسل البوليمرات والمونومرات',
        zh: '聚合物链与单体',
        ku: 'Zincîrên Polîmeran û Monomer',
      },
      caption: {
        tr: 'Katılma polimerleşmesinde monomerlerdeki C=C çift bağı açılır ve birimler uç uca eklenerek uzun zincirli polimeri (PE, PVC, teflon) oluşturur.',
        en: 'In addition polymerization the C=C double bond of each monomer opens and the units join end to end into a long-chain polymer (PE, PVC, Teflon).',
        de: 'Öffnung von Monomer-Pi-Bindungen zur Bildung langer Ketten wie PE, PVC und Teflon.',
        fr: 'Ouverture des liaisons pi pour former de longues chaînes comme le PE, PVC ou Téflon.',
        ru: 'При полимеризации двойная связь C=C в мономерах раскрывается, и звенья присоединяются друг к другу, образуя полимер с длинной цепью (ПЭ, ПВХ, тефлон).',
        ar: 'في البلمرة بالإضافة تنفتح الرابطة الثنائية C=C في المونومرات، وتتصل الوحدات طرفًا بطرف مكوّنة بوليمرًا طويل السلسلة (PE وPVC والتفلون).',
        zh: '加聚反应中，单体的C=C双键打开，单元首尾相连，形成长链聚合物(PE、PVC、聚四氟乙烯)。',
        ku: 'Di polîmerîzasyona lêzêdekirinê de girêdana ducar a C=C ya her monomerê vedibe û monomer dawî bi dawî bi hev ve tên girêdan; bi vî awayî polîmerên zincîrdirêj (PE, PVC, teflon) çêdibin.',
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
        ru: 'Современная теория строения атома и квантовые числа',
        ar: 'النظرية الذرية الحديثة وأعداد الكم',
        zh: '现代原子理论与量子数',
        ku: 'Teoriya Atomê ya Nûjen û Hejmarên Kuantumê',
      },
      caption: {
        tr: 'Orbital türünü açısal momentum kuantum sayısı (ℓ) belirler: s küresel, p çift loblu, d çoğunlukla dört lobludur. Bir orbitalde zıt spinli en çok iki elektron bulunur.',
        en: 'The orbital type is set by the angular momentum quantum number ℓ: s is spherical, p has two lobes, d mostly four. An orbital holds at most two electrons with opposite spins.',
        de: 'Haupt- (n), Neben- (l), Magnet- (ml) und Spin- (ms) Quantenzahlen.',
        fr: 'Nombres quantiques principal (n), azimutal (l), magnétique (ml) et de spin (ms).',
        ru: 'Тип орбитали определяется орбитальным квантовым числом (ℓ): s-орбиталь сферическая, p-орбиталь гантелеобразная, d-орбитали в основном четырёхлепестковые. На одной орбитали может быть не более двух электронов с противоположными спинами.',
        ar: 'يحدد عدد الكم الثانوي (ℓ) نوع المدار: s كروي، وp ثنائي الفص، وd رباعي الفصوص في الغالب. ويتسع المدار الواحد لإلكترونين على الأكثر متعاكسين في الغزل.',
        zh: '角量子数(ℓ)决定轨道类型：s轨道呈球形，p轨道呈哑铃形，d轨道大多为四叶形。一个轨道中最多容纳两个自旋相反的电子。',
        ku: 'Cureyê orbîtalê hejmara kuantumê ya momenta goşeyî (ℓ) diyar dike: s gogî ye, p du lobî ye, d bi piranî çar lobî ye. Di orbîtalekê de herî zêde du elektronên bi spînên dijber hene.',
      },
      labels: {
        tr: { s_orb: 's orbitali (ℓ = 0): küresel, 1 orbital', p_orb: 'p orbitalleri (ℓ = 1): çift loblu, 3 orbital', d_orb: 'd orbitalleri (ℓ = 2): 5 orbital', spin: 'Pauli: bir orbitalde en çok 2 e⁻, zıt spinli' },
        en: { s_orb: 's orbital (ℓ = 0): spherical, 1 orbital', p_orb: 'p orbitals (ℓ = 1): two lobes, 3 orbitals', d_orb: 'd orbitals (ℓ = 2): 5 orbitals', spin: 'Pauli: at most 2 e⁻ per orbital, opposite spins' },
        de: { s_orb: 's-Orbital (ℓ = 0): kugelförmig, 1 Orbital', p_orb: 'p-Orbitale (ℓ = 1): hantelförmig, 3 Orbitale', d_orb: 'd-Orbitale (ℓ = 2): 5 Orbitale', spin: 'Pauli: höchstens 2 e⁻ pro Orbital, entgegengesetzter Spin' },
        fr: { s_orb: 'Orbitale s (ℓ = 0) : sphérique, 1 orbitale', p_orb: 'Orbitales p (ℓ = 1) : deux lobes, 3 orbitales', d_orb: 'Orbitales d (ℓ = 2) : 5 orbitales', spin: 'Pauli : au plus 2 e⁻ par orbitale, spins opposés' },
        ru: { s_orb: 's-орбиталь (ℓ = 0): сфера, 1 орбиталь', p_orb: 'p-орбитали (ℓ = 1): гантель, 3 орбитали', d_orb: 'd-орбитали (ℓ = 2): 5 орбиталей', spin: 'Паули: не более 2 e⁻ на орбитали, спины противоположны' },
        ar: { s_orb: 'مدار s (ℓ = 0): كروي، مدار واحد', p_orb: 'مدارات p (ℓ = 1): ثنائية الفص، 3 مدارات', d_orb: 'مدارات d (ℓ = 2): 5 مدارات', spin: 'باولي: إلكترونان على الأكثر في المدار، متعاكسان في الغزل' },
        zh: { s_orb: 's 轨道 (ℓ = 0)：球形，1 个', p_orb: 'p 轨道 (ℓ = 1)：哑铃形，3 个', d_orb: 'd 轨道 (ℓ = 2)：5 个', spin: '泡利：每个轨道最多 2 个电子，自旋相反' },
        ku: { s_orb: 'Orbîtala s (ℓ = 0): gogî, 1 orbîtal', p_orb: 'Orbîtalên p (ℓ = 1): du lobî, 3 orbîtal', d_orb: 'Orbîtalên d (ℓ = 2): 5 orbîtal', spin: 'Pauli: di orbîtalekê de herî zêde 2 e⁻, spînên dijber' },
      },
    },
    {
      archetype: 'bohr-orbital-atom',
      title: {
        tr: 'Aufbau, Hund ve Küresel Simetri (Cr ve Cu)',
        en: 'Aufbau, Hund’s Rule & Spherical Symmetry (Cr and Cu)',
        de: 'Aufbauprinzip, Hundsche Regel & Symmetrie',
        fr: 'Aufbau, règle de Hund et symétrie sphérique',
        ru: 'Принцип наименьшей энергии, правило Хунда и сферическая симметрия (Cr и Cu)',
        ar: 'مبدأ أوفباو وقاعدة هوند والتماثل الكروي (Cr وCu)',
        zh: '构造原理、洪特规则与球形对称(Cr和Cu)',
        ku: 'Aufbau, Qaîdeya Hund û Sîmetriya Gogî (Cr û Cu)',
      },
      caption: {
        tr: '₂₄Cr ve ₂₉Cu’da yarı dolu ve tam dolu 3d alt kabuğu (küresel simetri) daha kararlı olduğundan temel hâl dizilimleri 4s¹ 3d⁵ ve 4s¹ 3d¹⁰ şeklindedir.',
        en: 'In ₂₄Cr and ₂₉Cu the half-filled and filled 3d subshell (spherical symmetry) is more stable, so the ground-state configurations are 4s¹ 3d⁵ and 4s¹ 3d¹⁰.',
        de: 'Grundzustandsanomalien von Cr und Cu mit zusätzlicher Stabilität durch Kugelsymmetrie.',
        fr: 'Configurations fondamentales stables de Cr et Cu dues à la symétrie sphérique demi-pleine ou pleine.',
        ru: 'У ₂₄Cr и ₂₉Cu наполовину и полностью заполненный 3d-подуровень (сферическая симметрия) более устойчив, поэтому их конфигурации в основном состоянии — 4s¹ 3d⁵ и 4s¹ 3d¹⁰.',
        ar: 'في ₂₄Cr و₂₉Cu يكون المستوى الفرعي 3d نصف الممتلئ والممتلئ (التماثل الكروي) أكثر استقرارًا، لذا يكون توزيعهما الإلكتروني في الحالة الأرضية 4s¹ 3d⁵ و4s¹ 3d¹⁰.',
        zh: '₂₄Cr和₂₉Cu中半充满和全充满的3d亚层（球形对称）更稳定，因此其基态电子排布为4s¹ 3d⁵和4s¹ 3d¹⁰。',
        ku: 'Di ₂₄Cr û ₂₉Cu de binqata 3d ya nîvtijî û tijî (sîmetriya gogî) aramtir e, loma rêzkirina elektronan a rewşa bingehîn 4s¹ 3d⁵ û 4s¹ 3d¹⁰ e.',
      },
      labels: {
        tr: { cr: 'Cr: [Ar] 4s¹ 3d⁵ (yarı dolu 3d)', cu: 'Cu: [Ar] 4s¹ 3d¹⁰ (tam dolu 3d)', aufbau: 'Aufbau: orbitaller artan enerji sırasıyla dolar (1s 2s 2p 3s 3p 4s 3d …)', hund: 'Hund: eş enerjili orbitallere önce birer elektron, aynı spinle yerleşir' },
        en: { cr: 'Cr: [Ar] 4s¹ 3d⁵ (half-filled 3d)', cu: 'Cu: [Ar] 4s¹ 3d¹⁰ (filled 3d)', aufbau: 'Aufbau: orbitals fill in order of increasing energy (1s 2s 2p 3s 3p 4s 3d …)', hund: 'Hund: equal-energy orbitals get one electron each first, with parallel spins' },
        de: { cr: 'Cr: [Ar] 4s¹ 3d⁵ (3d halb besetzt)', cu: 'Cu: [Ar] 4s¹ 3d¹⁰ (3d voll besetzt)', aufbau: 'Aufbau: Besetzung nach steigender Energie (1s 2s 2p 3s 3p 4s 3d …)', hund: 'Hund: energiegleiche Orbitale zuerst einfach und mit parallelem Spin' },
        fr: { cr: 'Cr : [Ar] 4s¹ 3d⁵ (3d à demi remplie)', cu: 'Cu : [Ar] 4s¹ 3d¹⁰ (3d remplie)', aufbau: 'Aufbau : remplissage par énergie croissante (1s 2s 2p 3s 3p 4s 3d …)', hund: 'Hund : un électron par orbitale de même énergie d’abord, spins parallèles' },
        ru: { cr: 'Cr: [Ar] 4s¹ 3d⁵ (3d заполнен наполовину)', cu: 'Cu: [Ar] 4s¹ 3d¹⁰ (3d заполнен)', aufbau: 'Принцип наименьшей энергии: орбитали заполняются по возрастанию энергии (1s 2s 2p 3s 3p 4s 3d …)', hund: 'Хунд: орбитали одной энергии сначала получают по одному e⁻ с одинаковым спином' },
        ar: { cr: 'Cr: [Ar] 4s¹ 3d⁵ (3d نصف ممتلئ)', cu: 'Cu: [Ar] 4s¹ 3d¹⁰ (3d ممتلئ)', aufbau: 'أوفباو: تُملأ المدارات حسب تزايد الطاقة (1s 2s 2p 3s 3p 4s 3d …)', hund: 'هوند: تُملأ المدارات المتساوية الطاقة فرادى أولًا وبغزل متوازٍ' },
        zh: { cr: 'Cr: [Ar] 4s¹ 3d⁵(3d 半充满)', cu: 'Cu: [Ar] 4s¹ 3d¹⁰(3d 全充满)', aufbau: '构造原理：按能量由低到高填充 (1s 2s 2p 3s 3p 4s 3d …)', hund: '洪特规则：等能量轨道先各填 1 个电子且自旋平行' },
        ku: { cr: 'Cr: [Ar] 4s¹ 3d⁵ (3d nîvtijî)', cu: 'Cu: [Ar] 4s¹ 3d¹⁰ (3d tijî)', aufbau: 'Aufbau: orbîtal li gorî enerjiya zêdebûyî tijî dibin (1s 2s 2p 3s 3p 4s 3d …)', hund: 'Hund: orbîtalên hevenerjî pêşî yek bi yek û bi spîna paralel tijî dibin' },
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
        zh: '理想气体定律与活塞容器',
        ku: 'Zagonên Gaza Îdeal û Firaxa bi Piston',
      },
      caption: {
        tr: 'Sabit sıcaklıkta P ile V ters orantılıdır (Boyle); sabit basınçta V mutlak sıcaklıkla doğru orantılıdır (Charles). İkisi ideal gaz denkleminde birleşir.',
        en: 'At constant temperature P and V are inversely proportional (Boyle); at constant pressure V is proportional to the absolute temperature (Charles). Both are contained in the ideal gas equation.',
        de: 'Zusammenführung der Gesetze von Boyle, Charles und Avogadro in P · V = n · R · T.',
        fr: 'Intégration des lois de Boyle, Charles et Avogadro dans l’équation P · V = n · R · T.',
        ru: 'При постоянной температуре P и V обратно пропорциональны (закон Бойля — Мариотта); при постоянном давлении V прямо пропорционален абсолютной температуре (закон Шарля). Оба закона объединяются в уравнении состояния идеального газа.',
        ar: 'عند ثبوت درجة الحرارة يتناسب P عكسيًا مع V (قانون بويل)، وعند ثبوت الضغط يتناسب V طرديًا مع درجة الحرارة المطلقة (قانون شارل). ويجتمع القانونان في معادلة الغاز المثالي.',
        zh: '恒温时P与V成反比（波义耳定律）；恒压时V与热力学温度成正比（查理定律）。二者统一为理想气体状态方程。',
        ku: 'Di germahiya sabît de P û V berevajî rêjeyî ne (Boyle); di zexta sabît de V bi germahiya mutleq re rasterast rêjeyî ye (Charles). Her du jî di hevkêşeya gaza îdeal de dicivin.',
      },
      labels: {
        tr: { boyle: 'Boyle: P · V sabit (T, n sabit)', charles: 'Charles: V / T sabit (P, n sabit)', piston: 'Sürtünmesiz piston: Pgaz = Pdış', rconst: 'P · V = n · R · T;  R = 0,082 L·atm/(mol·K)' },
        en: { boyle: 'Boyle: P · V constant (T, n fixed)', charles: 'Charles: V / T constant (P, n fixed)', piston: 'Frictionless piston: Pgas = Pext', rconst: 'P · V = n · R · T;  R = 0.082 L·atm/(mol·K)' },
        de: { boyle: 'Boyle: P · V konstant (T, n fest)', charles: 'Charles: V / T konstant (P, n fest)', piston: 'Reibungsfreier Kolben: PGas = Paußen', rconst: 'P · V = n · R · T;  R = 0,082 L·atm/(mol·K)' },
        fr: { boyle: 'Boyle : P · V constant (T, n fixés)', charles: 'Charles : V / T constant (P, n fixés)', piston: 'Piston sans frottement : Pgaz = Pext', rconst: 'P · V = n · R · T;  R = 0,082 L·atm/(mol·K)' },
        ru: { boyle: 'Бойль: P · V постоянно (T, n пост.)', charles: 'Шарль: V / T постоянно (P, n пост.)', piston: 'Поршень без трения: Pгаза = Pвнеш', rconst: 'P · V = n · R · T;  R = 0,082 л·атм/(моль·K)' },
        ar: { boyle: 'بويل: P · V ثابت (T, n ثابتان)', charles: 'شارل: V / T ثابت (P, n ثابتان)', piston: 'مكبس عديم الاحتكاك: Pgas = Pext', rconst: 'P · V = n · R · T;  R = 0.082 L·atm/(mol·K)' },
        zh: { boyle: '波义耳：P · V 恒定(T、n 不变)', charles: '查理：V / T 恒定(P、n 不变)', piston: '无摩擦活塞：P气 = P外', rconst: 'P · V = n · R · T;  R = 0.082 L·atm/(mol·K)' },
        ku: { boyle: 'Boyle: P · V sabît (T, n sabît)', charles: 'Charles: V / T sabît (P, n sabît)', piston: 'Pistona bê sûrtin: Pgaz = Pderve', rconst: 'P · V = n · R · T;  R = 0,082 L·atm/(mol·K)' },
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
        zh: '压强计与大气压',
        ku: 'Manometre û Zexta Atmosferê',
      },
      caption: {
        tr: 'Kapalı uçlu manometrede gaz basıncı cıva düzeyleri farkına eşittir; açık uçlu manometrede bu fark, gaz tarafındaki düzey düşükse açık hava basıncına eklenir, yüksekse ondan çıkarılır.',
        en: 'In a closed-end manometer the gas pressure equals the difference in mercury levels; in an open-end manometer that difference is added to atmospheric pressure when the gas-side level is lower, and subtracted when it is higher.',
        de: 'U-Rohr-Quecksilberdifferenz zur Bestimmung des Innendrucks: P = P₀ ± h.',
        fr: 'Déplacement de mercure dans un tube en U déterminant la pression : P = P₀ ± h.',
        ru: 'В манометре с запаянным концом давление газа равно разности уровней ртути; в открытом манометре эту разность прибавляют к атмосферному давлению, если уровень со стороны газа ниже, и вычитают, если выше.',
        ar: 'في المانومتر ذي الطرف المغلق يساوي ضغط الغاز فرق مستويي الزئبق؛ وفي المانومتر ذي الطرف المفتوح يُضاف هذا الفرق إلى الضغط الجوي إذا كان مستوى الزئبق في جهة الغاز أدنى، ويُطرح منه إذا كان أعلى.',
        zh: '闭口压强计中，气体压强等于两侧水银面的高度差；开口压强计中，若气体一侧液面较低，则在大气压上加上此差值，若较高则减去。',
        ku: 'Di manometreya serîgirtî de zexta gazê bi cudahiya astên cîvayê re wekhev e; di manometreya serîvekirî de, heke asta li aliyê gazê nizmtir be ev cudahî li zexta atmosferê tê zêdekirin, heke bilindtir be jê tê kêmkirin.',
      },
      labels: {
        tr: { p0: 'Açık hava basıncı (P₀)', gas: 'Gaz', hdiff: 'h: iki koldaki cıva düzeyleri farkı (cmHg)', eq: 'Açık uç: Pgaz = P₀ + h' },
        en: { p0: 'Atmospheric pressure (P₀)', gas: 'Gas', hdiff: 'h: difference between the mercury levels (cmHg)', eq: 'Open end: Pgas = P₀ + h' },
        de: { p0: 'Luftdruck (P₀)', gas: 'Gas', hdiff: 'h: Höhenunterschied der Quecksilbersäulen (cmHg)', eq: 'Offen: PGas = P₀ + h' },
        fr: { p0: 'Pression atmosphérique (P₀)', gas: 'Gaz', hdiff: 'h : dénivellation du mercure (cmHg)', eq: 'Tube ouvert : Pgaz = P₀ + h' },
        ru: { p0: 'Атмосферное давление (P₀)', gas: 'Газ', hdiff: 'h: разность уровней ртути (см рт. ст.)', eq: 'Открытый конец: Pгаза = P₀ + h' },
        ar: { p0: 'الضغط الجوي (P₀)', gas: 'غاز', hdiff: 'h: فرق مستويي الزئبق (cmHg)', eq: 'طرف مفتوح: Pgas = P₀ + h' },
        zh: { p0: '大气压(P₀)', gas: '气体', hdiff: 'h：两侧汞面高度差(cmHg)', eq: '开口端：P气 = P₀ + h' },
        ku: { p0: 'Zexta atmosferê (P₀)', gas: 'Gaz', hdiff: 'h: cudahiya astên cîvayê di her du milan de (cmHg)', eq: 'Serê vekirî: Pgaz = P₀ + h' },
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
        ru: 'Закон диффузии Грэма и молекулярно-кинетическая теория',
        ar: 'قانون جراهام للانتشار والنظرية الحركية',
        zh: '格雷厄姆扩散定律与分子动理论',
        ku: 'Zagona Belavbûnê ya Graham û Teoriya Kînetîk',
      },
      caption: {
        tr: 'Aynı sıcaklıkta gazların yayılma hızı mol kütlelerinin kareköküyle ters orantılıdır: CH₄, SO₂’den 2 kat hızlı yayılır ve iki gaz SO₂ ucuna yakın bir noktada karşılaşır.',
        en: 'At the same temperature the rate of diffusion is inversely proportional to the square root of molar mass: CH₄ moves twice as fast as SO₂, so the gases meet nearer the SO₂ end.',
        de: 'Diffusionsgeschwindigkeiten verhalten sich umgekehrt proportional zur Wurzel aus der Molmasse.',
        fr: 'La vitesse de diffusion est inversement proportionnelle à la racine carrée de la masse molaire.',
        ru: 'При одинаковой температуре скорость диффузии газов обратно пропорциональна квадратному корню из их молярных масс: CH₄ диффундирует в 2 раза быстрее SO₂, и газы встречаются ближе к концу с SO₂.',
        ar: 'عند درجة الحرارة نفسها تتناسب سرعة انتشار الغازات عكسيًا مع الجذر التربيعي لكتلها المولية: ينتشر CH₄ أسرع من SO₂ بمرتين، فيلتقي الغازان عند نقطة أقرب إلى طرف SO₂.',
        zh: '同温下气体的扩散速率与摩尔质量的平方根成反比：CH₄的扩散速率是SO₂的2倍，两种气体在靠近SO₂一端的位置相遇。',
        ku: 'Di heman germahiyê de leza belavbûna gazan bi koka çargoşe ya girseya wan a molî re berevajî rêjeyî ye: CH₄ 2 qat ji SO₂ zûtir belav dibe û her du gaz li xaleke nêzîkî serê SO₂ digihîjin hev.',
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
        ru: 'Закон парциальных давлений Дальтона и реальные газы',
        ar: 'قانون دالتون للضغوط الجزئية والغازات الحقيقية',
        zh: '道尔顿分压定律与实际气体',
        ku: 'Zextên Beşî yên Dalton û Gazên Rastîn',
      },
      caption: {
        tr: 'Karışımdaki her gaz, kabı tek başına dolduruyormuş gibi basınç yapar; toplam basınç kısmi basınçların toplamıdır. Su üstünde toplanan gazın basıncına su buharının basıncı da eklenir.',
        en: 'Each gas in a mixture exerts the pressure it would exert alone; the total pressure is the sum of the partial pressures. A gas collected over water also contains water vapor.',
        de: 'Der Gesamtdruck ist die Summe der Partialdrücke; Gase nähern sich bei hohem T und niedrigem P der Idealität.',
        fr: 'La pression totale est la somme des pressions partielles ; l’idéalité augmente à haute T et basse P.',
        ru: 'Каждый газ в смеси создаёт такое давление, как если бы он один занимал весь сосуд; общее давление равно сумме парциальных давлений. К давлению газа, собранного над водой, добавляется давление водяного пара.',
        ar: 'يُحدث كل غاز في المخلوط ضغطًا كما لو كان يملأ الوعاء وحده، والضغط الكلي يساوي مجموع الضغوط الجزئية. وعند جمع غاز فوق الماء يُضاف ضغط بخار الماء إلى ضغطه.',
        zh: '混合物中每种气体产生的压强与它单独充满容器时相同；总压等于各分压之和。用排水法收集气体时，总压中还包括水蒸气的压强。',
        ku: 'Her gaza di tevliheviyê de wisa zextê dide wek ku bi tena serê xwe firaxê dagirtibe; zexta giştî serhevdana zextên beşî ye. Li zexta gaza ku li ser avê tê berhevkirin, zexta buhara avê jî zêde dibe.',
      },
      labels: {
        tr: { ptop: 'Ptoplam = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · Ptoplam', water: 'Su üstünde toplanan gaz: Ptoplam = Pgaz + Psu buharı', jt: 'Joule–Thomson: hızla genleşen gerçek gaz soğur' },
        en: { ptop: 'Ptotal = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · Ptotal', water: 'Gas collected over water: Ptotal = Pgas + Pwater vapor', jt: 'Joule–Thomson: a real gas cools as it expands rapidly' },
        de: { ptop: 'Pgesamt = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · Pgesamt', water: 'Über Wasser aufgefangenes Gas: Pgesamt = PGas + PWasserdampf', jt: 'Joule-Thomson: ein reales Gas kühlt bei rascher Expansion ab' },
        fr: { ptop: 'Ptotale = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · Ptotale', water: 'Gaz recueilli sur l’eau : Ptotale = Pgaz + Pvapeur d’eau', jt: 'Joule–Thomson : un gaz réel se refroidit en se détendant' },
        ru: { ptop: 'Pобщ = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · Pобщ', water: 'Газ, собранный над водой: Pобщ = Pгаза + Pпаров воды', jt: 'Джоуль–Томсон: реальный газ охлаждается при быстром расширении' },
        ar: { ptop: 'Ptotal = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · Ptotal', water: 'غاز مجمَّع فوق الماء: Ptotal = Pgas + PH₂O', jt: 'جول–طومسون: الغاز الحقيقي يبرد عند تمدده السريع' },
        zh: { ptop: 'P总 = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · P总', water: '排水集气：P总 = P气 + P水蒸气', jt: '焦耳-汤姆孙：实际气体迅速膨胀时降温' },
        ku: { ptop: 'Pgiştî = P₁ + P₂', molefrac: 'Pᵢ = Xᵢ · Pgiştî', water: 'Gaza li ser avê berhevkirî: Pgiştî = Pgaz + Pbuhara avê', jt: 'Joule–Thomson: gaza rastîn dema bi lez fireh dibe sar dibe' },
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
        zh: '溶液与浓度单位',
        ku: 'Çareseriyên Şile û Yekeyên Tîrbûnê',
      },
      caption: {
        tr: 'Molarite 1 L çözeltideki, molalite 1 kg çözücüdeki çözünen mol sayısıdır; balon joje ölçü çizgisine kadar doldurularak belirli hacimde çözelti hazırlanır.',
        en: 'Molarity is moles of solute per litre of solution, molality per kilogram of solvent; a solution of exact volume is made by filling a volumetric flask to the mark.',
        de: 'Molarität (M = n/V) und Molalität (m = n/kg) mit Lösungsenthalpie-Mechanismen.',
        fr: 'Molarité (M = n/V) et molalité (m = n/kg) avec enthalpie de solvatation.',
        ru: 'Молярная концентрация — количество растворённого вещества в 1 л раствора, моляльность — в 1 кг растворителя; раствор заданного объёма готовят в мерной колбе, доливая её до метки.',
        ar: 'المولارية عدد مولات المذاب في 1 L من المحلول، والمولالية عدد مولات المذاب في 1 kg من المذيب؛ ويُحضَّر محلول بحجم محدد بملء الدورق الحجمي حتى علامة التدريج.',
        zh: '物质的量浓度是1 L溶液中所含溶质的物质的量，质量摩尔浓度是1 kg溶剂中所含溶质的物质的量；将容量瓶加水至刻度线，可配制一定体积的溶液。',
        ku: 'Molarîte hejmara molên madeya helbûyî ya di 1 L çareseriyê de ye, molalîte jî ya di 1 kg helkerê de ye; çareseriya bi qebareya diyar bi dagirtina balona pîvanê heta xêza nîşanê tê amadekirin.',
      },
      labels: {
        tr: { molar: 'Molarite: M = n / V (L çözelti)', molal: 'Molalite: m = n / kg çözücü', dens: 'M = (% · d · 10) / MA', mix: 'Karıştırma: M₁V₁ + M₂V₂ = Mson · Vson' },
        en: { molar: 'Molarity: M = n / V (L of solution)', molal: 'Molality: m = n / kg of solvent', dens: 'M = (% · d · 10) / molar mass', mix: 'Mixing: M₁V₁ + M₂V₂ = Mfinal · Vfinal' },
        de: { molar: 'Molarität: M = n / V (L Lösung)', molal: 'Molalität: m = n / kg Lösungsmittel', dens: 'M = (% · d · 10) / molare Masse', mix: 'Mischen: M₁V₁ + M₂V₂ = MEnd · VEnd' },
        fr: { molar: 'Molarité : M = n / V (L de solution)', molal: 'Molalité : m = n / kg de solvant', dens: 'M = (% · d · 10) / masse molaire', mix: 'Mélange : M₁V₁ + M₂V₂ = Mf · Vf' },
        ru: { molar: 'Молярность: M = n / V (л раствора)', molal: 'Моляльность: m = n / кг растворителя', dens: 'M = (% · d · 10) / молярная масса', mix: 'Смешивание: M₁V₁ + M₂V₂ = Mкон · Vкон' },
        ar: { molar: 'المولارية: M = n / V (L محلول)', molal: 'المولالية: m = n / kg مذيب', dens: 'M = (% · d · 10) / الكتلة المولية', mix: 'المزج: M₁V₁ + M₂V₂ = Mf · Vf' },
        zh: { molar: '物质的量浓度：M = n / V(L 溶液)', molal: '质量摩尔浓度：m = n / kg 溶剂', dens: 'M = (% · d · 10) / 摩尔质量', mix: '混合：M₁V₁ + M₂V₂ = M终 · V终' },
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
        ku: 'Tîrbûna Îyonan di Çareseriyê de',
      },
      caption: {
        tr: 'Al₂(SO₄)₃ suda tamamen iyonlaşır: 1 mol tuzdan 2 mol Al³⁺ ve 3 mol SO₄²⁻ oluşur; iyon derişimleri tuzun derişiminin 2 ve 3 katıdır.',
        en: 'Al₂(SO₄)₃ dissociates completely in water: 1 mol of the salt gives 2 mol Al³⁺ and 3 mol SO₄²⁻, so the ion concentrations are 2 and 3 times that of the salt.',
        de: 'Vollständige Dissoziation von Salzen: stöchiometrische Ionenverhältnisse in Lösung.',
        fr: 'Dissociation complète des sels dans l’eau et calcul stœchiométrique des ions.',
        ru: 'Al₂(SO₄)₃ в воде полностью диссоциирует: из 1 моль соли образуется 2 моль Al³⁺ и 3 моль SO₄²⁻; концентрации ионов в 2 и 3 раза больше концентрации соли.',
        ar: 'يتأين Al₂(SO₄)₃ في الماء تأينًا تامًا: ينتج 1 mol من الملح 2 mol من Al³⁺ و3 mol من SO₄²⁻، فيكون تركيزا الأيونين ضعفي تركيز الملح وثلاثة أمثاله.',
        zh: 'Al₂(SO₄)₃在水中完全电离：1 mol该盐生成2 mol Al³⁺ 和3 mol SO₄²⁻；离子浓度分别是盐浓度的2倍和3倍。',
        ku: 'Al₂(SO₄)₃ di avê de bi tevahî îyonîze dibe: ji 1 mol xwê 2 mol Al³⁺ û 3 mol SO₄²⁻ çêdibin; tîrbûnên îyonan 2 û 3 qatên tîrbûna xwêyê ne.',
      },
      labels: {
        tr: { salt: '1 M Al₂(SO₄)₃ çözeltisi', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: 'Toplam iyon derişimi = 5 M' },
        en: { salt: '1 M Al₂(SO₄)₃ solution', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: 'Total ion concentration = 5 M' },
        de: { salt: '1 M Al₂(SO₄)₃-Lösung', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: 'Gesamte Ionenkonzentration = 5 M' },
        fr: { salt: 'Solution de Al₂(SO₄)₃ à 1 M', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: 'Concentration totale en ions = 5 M' },
        ru: { salt: '1 M раствор Al₂(SO₄)₃', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: 'Суммарная концентрация ионов = 5 M' },
        ar: { salt: 'محلول Al₂(SO₄)₃ بتركيز 1 M', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: 'التركيز الكلي للأيونات = 5 M' },
        zh: { salt: '1 M Al₂(SO₄)₃ 溶液', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: '离子总浓度 = 5 M' },
        ku: { salt: 'Çareseriya 1 M Al₂(SO₄)₃', al: '[Al³⁺] = 2 M', so4: '[SO₄²⁻] = 3 M', total: 'Tîrbûna giştî ya îyonan = 5 M' },
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
        ru: 'Коллигативные свойства: температуры кипения и замерзания',
        ar: 'الخواص التجميعية: ارتفاع درجة الغليان وانخفاض درجة التجمد',
        zh: '依数性：沸点升高与凝固点降低',
        ku: 'Taybetmendiyên Kolîgatîf: Xala Kelînê û Xala Cemidînê',
      },
      caption: {
        tr: 'Çözelti saf sudan daha yüksek sıcaklıkta kaynar, daha düşük sıcaklıkta donar; fark çözünen tanecik derişimine bağlıdır.',
        en: 'A solution boils at a higher and freezes at a lower temperature than pure water; the shift depends on the solute particle concentration.',
        de: 'Eine Lösung siedet höher und gefriert tiefer als reines Wasser; die Verschiebung hängt von der Teilchenkonzentration ab.',
        fr: 'Une solution bout plus haut et gèle plus bas que l\'eau pure ; l\'écart dépend de la concentration en particules dissoutes.',
        ru: 'Раствор кипит при более высокой и замерзает при более низкой температуре, чем чистая вода; сдвиг зависит от концентрации частиц.',
        ar: 'يغلي المحلول عند درجة أعلى ويتجمد عند درجة أدنى من الماء النقي؛ ويعتمد الفرق على تركيز جسيمات المذاب.',
        zh: '溶液的沸点比纯水高、凝固点比纯水低；变化量取决于溶质粒子的浓度。',
        ku: 'Çareserî ji ava paqij di germahiyeke bilindtir de dikele û di germahiyeke nizmtir de dicemide; ev cudahî bi tîrbûna perçeyên helbûyî ve girêdayî ye.',
      },
      labels: {
        tr: { dtk: 'ΔTk = Kk·m·i', dtd: 'ΔTd = Kd·m·i', vanthoff: 'i: çözünenin verdiği tanecik sayısı (NaCl için 2)', osmotic: 'Ozmotik basınç: π = i·M·R·T' },
        en: { dtk: 'ΔTb = Kb·m·i', dtd: 'ΔTf = Kf·m·i', vanthoff: 'i: particles per formula unit (2 for NaCl)', osmotic: 'Osmotic pressure: π = i·M·R·T' },
        de: { dtk: 'ΔTs = Ks·m·i', dtd: 'ΔTg = Kg·m·i', vanthoff: 'i: Teilchen pro Formeleinheit (NaCl: 2)', osmotic: 'Osmotischer Druck: π = i·M·R·T' },
        fr: { dtk: 'ΔTéb = Kéb·m·i', dtd: 'ΔTcong = Kcong·m·i', vanthoff: 'i : particules par unité de formule (NaCl : 2)', osmotic: 'Pression osmotique : π = i·M·R·T' },
        ru: { dtk: 'ΔTкип = Kэб·m·i', dtd: 'ΔTзам = Kкр·m·i', vanthoff: 'i: число частиц на формульную единицу (NaCl: 2)', osmotic: 'Осмотическое давление: π = i·M·R·T' },
        ar: { dtk: 'ΔTb = Kb·m·i', dtd: 'ΔTf = Kf·m·i', vanthoff: 'i: عدد الجسيمات التي يعطيها المذاب (2 لـ NaCl)', osmotic: 'الضغط الأسموزي: π = i·M·R·T' },
        zh: { dtk: 'ΔTb = Kb·m·i', dtd: 'ΔTf = Kf·m·i', vanthoff: 'i：每个化学式单位产生的粒子数(NaCl 为 2)', osmotic: '渗透压：π = i·M·R·T' },
        ku: { dtk: 'ΔTk = Kk·m·i', dtd: 'ΔTd = Kd·m·i', vanthoff: 'i: hejmara perçeyên ji madeya helbûyî (ji bo NaCl 2)', osmotic: 'Zexta osmotîk: π = i·M·R·T' },
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
        zh: '溶解度曲线与温度的影响',
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
        ku: 'Helbûniya piraniya madeyên hişk bi germahiyê re zêde dibe; helbûna gazan di avê de bi gelemperî ekzotermîk e, loma helbûniya wan bi zêdebûna germahiyê kêm dibe.',
      },
      labels: {
        tr: { endo: 'Katıların çoğu: T↑ çözünürlük↑', exo: 'Gazlar: T↑ çözünürlük↓', henry: 'Henry yasası: gaz basıncı↑ → gazın çözünürlüğü↑', sat: 'Eğri üzeri: doymuş çözelti' },
        en: { endo: 'Most solids: T↑ solubility↑', exo: 'Gases: T↑ solubility↓', henry: 'Henry\'s law: gas pressure↑ → gas solubility↑', sat: 'On the curve: saturated' },
        de: { endo: 'Feststoffe (meist): T↑ Löslichkeit↑', exo: 'Gase: T↑ Löslichkeit↓', henry: 'Henry-Gesetz: Gasdruck↑ → Gaslöslichkeit↑', sat: 'Auf der Kurve: gesättigt' },
        fr: { endo: 'Solides (la plupart) : T↑ solubilité↑', exo: 'Gaz : T↑ solubilité↓', henry: 'Loi de Henry : pression du gaz↑ → solubilité↑', sat: 'Sur la courbe : saturée' },
        ru: { endo: 'Твёрдые вещества: T↑ растворимость↑', exo: 'Газы: T↑ растворимость↓', henry: 'Закон Генри: давление газа↑ → растворимость↑', sat: 'На кривой: насыщенный раствор' },
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
        ru: 'Потенциальная энергия — координата реакции',
        ar: 'طاقة الوضع - مسار التفاعل',
        zh: '势能-反应进程图',
        ku: 'Enerjiya Potansiyel - Koordînata Reaksiyonê',
      },
      caption: {
        tr: 'Ekzotermik bir tepkimenin enerji profili: ileri ve geri aktifleşme enerjileri ile ΔH = Eai − Eag bağıntısı.',
        en: 'Energy profile of an exothermic reaction: forward and reverse activation energies and ΔH = Eai − Eag.',
        de: 'Energieprofil einer exothermen Reaktion: Aktivierungsenergien der Hin- und Rückreaktion und ΔH = Eai − Eag.',
        fr: 'Profil énergétique d\'une réaction exothermique : énergies d\'activation directe et inverse, ΔH = Eai − Eag.',
        ru: 'Энергетический профиль экзотермической реакции: энергии активации прямой и обратной реакций, ΔH = Ea(пр) − Ea(обр).',
        ar: 'مخطط طاقة تفاعل طارد للحرارة: طاقتا التنشيط الأمامية والعكسية والعلاقة ΔH = Eai − Eag.',
        zh: '放热反应的能量图：正、逆反应活化能与 ΔH = Eai − Eag。',
        ku: 'Profîla enerjiyê ya reaksiyoneke ekzotermîk: enerjiyên aktîvasyonê yên pêş û paş û pêwendiya ΔH = Eai − Eag.',
      },
      labels: {
        tr: { eai: 'Eai (ileri)', eag: 'Eag (geri)', dh: 'ΔH = Eai − Eag < 0 (ekzotermik)', ak: 'Aktifleşmiş kompleks' },
        en: { eai: 'Eai (forward)', eag: 'Eag (reverse)', dh: 'ΔH = Eai − Eag < 0 (exothermic)', ak: 'Activated complex' },
        de: { eai: 'Eai (hin)', eag: 'Eag (rück)', dh: 'ΔH = Eai − Eag < 0 (exotherm)', ak: 'Aktivierter Komplex' },
        fr: { eai: 'Eai (directe)', eag: 'Eag (inverse)', dh: 'ΔH = Eai − Eag < 0 (exothermique)', ak: 'Complexe activé' },
        ru: { eai: 'Ea(пр)', eag: 'Ea(обр)', dh: 'ΔH = Ea(пр) − Ea(обр) < 0 (экзотермическая)', ak: 'Активированный комплекс' },
        ar: { eai: 'Eai (الأمامي)', eag: 'Eag (العكسي)', dh: 'ΔH = Eai − Eag < 0 (طارد للحرارة)', ak: 'المعقد المنشط' },
        zh: { eai: 'Eai（正反应）', eag: 'Eag（逆反应）', dh: 'ΔH = Eai − Eag < 0（放热）', ak: '活化络合物' },
        ku: { eai: 'Eai (pêş)', eag: 'Eag (paş)', dh: 'ΔH = Eai − Eag < 0 (ekzotermîk)', ak: 'Kompleksa aktîvkirî' },
      },
    },
    {
      archetype: 'potential-energy-reaction',
      title: {
        tr: 'Hess Yasası ve Standart Oluşum Entalpisi',
        en: 'Hess\'s Law & Standard Enthalpy of Formation',
        de: 'Hessscher Wärmesatz & Bildungsenthalpie',
        fr: 'Loi de Hess et enthalpie standard de formation',
        ru: 'Закон Гесса и стандартная энтальпия образования',
        ar: 'قانون هس وحرارة التكوين القياسية',
        zh: '盖斯定律与标准摩尔生成焓',
        ku: 'Zagona Hess û Entalpiya Çêbûnê ya Standard',
      },
      caption: {
        tr: 'Tepkime entalpisi basamakların entalpileri toplamına eşittir; yol bağımsızdır.',
        en: 'The enthalpy of a reaction equals the sum of the enthalpies of its steps; it does not depend on the path.',
        de: 'Die Gesamtreaktionsenthalpie ist die Summe der Teilschritte (Wegunabhängigkeit).',
        fr: 'L\'enthalpie d\'une réaction est la somme des enthalpies de ses étapes ; elle ne dépend pas du chemin suivi.',
        ru: 'Энтальпия реакции равна сумме энтальпий отдельных стадий и не зависит от пути реакции.',
        ar: 'التغير في المحتوى الحراري للتفاعل يساوي مجموع التغيرات في المحتوى الحراري لخطواته، ولا يعتمد على المسار.',
        zh: '反应的焓变等于各步反应焓变之和，与反应途径无关。',
        ku: 'Entalpiya reaksiyonê serhevdana entalpiyên qonaxan e; bi rêya reaksiyonê ve ne girêdayî ye.',
      },
      labels: {
        tr: { hess: 'Hess yasası: ΔH = ΔH₁ + ΔH₂', std: 'Elementler: ΔHf° = 0', rev: 'Ters çevrilirse: −ΔH', mult: 'n ile çarpılırsa: n·ΔH' },
        en: { hess: 'Hess\'s law: ΔH = ΔH₁ + ΔH₂', std: 'Elements: ΔHf° = 0', rev: 'Reversed: −ΔH', mult: 'Multiplied by n: n·ΔH' },
        de: { hess: 'Satz von Hess: ΔH = ΔH₁ + ΔH₂', std: 'Elemente: ΔHf° = 0', rev: 'Umgekehrt: −ΔH', mult: 'Mal n: n·ΔH' },
        fr: { hess: 'Loi de Hess : ΔH = ΔH₁ + ΔH₂', std: 'Éléments : ΔHf° = 0', rev: 'Inversée : −ΔH', mult: 'Multipliée par n : n·ΔH' },
        ru: { hess: 'Закон Гесса: ΔH = ΔH₁ + ΔH₂', std: 'Простые вещества: ΔHf° = 0', rev: 'Обратная реакция: −ΔH', mult: 'Умножение на n: n·ΔH' },
        ar: { hess: 'قانون هس: ΔH = ΔH₁ + ΔH₂', std: 'العناصر: ΔHf° = 0', rev: 'عند العكس: −ΔH', mult: 'عند الضرب في n: n·ΔH' },
        zh: { hess: '盖斯定律：ΔH = ΔH₁ + ΔH₂', std: '单质：ΔHf° = 0', rev: '反应逆写：−ΔH', mult: '乘以 n：n·ΔH' },
        ku: { hess: 'Zagona Hess: ΔH = ΔH₁ + ΔH₂', std: 'Element: ΔHf° = 0', rev: 'Berevajîkirin: −ΔH', mult: 'Bi n lêxistin: n·ΔH' },
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
        ru: 'Действие катализатора и энергия активации',
        ar: 'تأثير العامل الحفاز وخفض طاقة التنشيط',
        zh: '催化剂的作用与活化能',
        ku: 'Bandora Katalîzorê û Enerjiya Aktîvasyonê',
      },
      caption: {
        tr: 'Pozitif katalizör eşik enerjisini düşürerek tepkimeyi hızlandırır, ΔH değerini değiştirmez.',
        en: 'Catalysts provide an alternate pathway with lower Ea without altering net enthalpy ΔH.',
        de: 'Katalysatoren senken die Aktivierungsenergie Ea, ohne die Gesamtreaktionsenthalpie ΔH zu ändern.',
        fr: 'Un catalyseur abaisse l\'énergie d\'activation Ea sans modifier l\'enthalpie de réaction ΔH.',
        ru: 'Положительный катализатор ускоряет реакцию, снижая энергию активации, и не меняет ΔH.',
        ar: 'يخفض العامل الحفاز طاقة التنشيط دون أن يغيّر المحتوى الحراري للتفاعل ΔH.',
        zh: '正催化剂降低活化能，使反应加快，但不改变ΔH。',
        ku: 'Katalîzora pozîtîf enerjiya aktîvasyonê kêm dike û reaksiyonê bileztir dike; nirxa ΔH naguherîne.',
      },
      labels: {
        tr: { uncat: 'Katalizörsüz', cat: 'Katalizörlü', dh_const: 'ΔH değişmez', k_inc: 'Katalizör Ea değerini düşürür; hız sabiti k büyür' },
        en: { uncat: 'Uncatalysed', cat: 'Catalysed', dh_const: 'ΔH unchanged', k_inc: 'A catalyst lowers Ea; the rate constant k increases' },
        de: { uncat: 'Ohne Katalysator', cat: 'Mit Katalysator', dh_const: 'ΔH bleibt gleich', k_inc: 'Der Katalysator senkt Ea; die Geschwindigkeitskonstante k steigt' },
        fr: { uncat: 'Sans catalyseur', cat: 'Avec catalyseur', dh_const: 'ΔH inchangée', k_inc: 'Le catalyseur abaisse Ea ; la constante de vitesse k augmente' },
        ru: { uncat: 'Без катализатора', cat: 'С катализатором', dh_const: 'ΔH не меняется', k_inc: 'Катализатор снижает Ea; константа скорости k растёт' },
        ar: { uncat: 'بدون حفاز', cat: 'مع حفاز', dh_const: 'ΔH لا يتغير', k_inc: 'الحفاز يخفض Ea فيزداد ثابت السرعة k' },
        zh: { uncat: '无催化剂', cat: '有催化剂', dh_const: 'ΔH 不变', k_inc: '催化剂降低 Ea，速率常数 k 增大' },
        ku: { uncat: 'Bê katalîzor', cat: 'Bi katalîzor', dh_const: 'ΔH naguhere', k_inc: 'Katalîzor Ea kêm dike; sabîta lezê k mezin dibe' },
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
        zh: '速率方程与慢反应步骤',
        ku: 'Hevkêşeya Lezê û Qonaxa Hêdî',
      },
      caption: {
        tr: 'Mekanizmalı tepkimelerde hızı en yüksek aktifleşme enerjisine sahip yavaş basamak belirler.',
        en: 'The elementary step with the highest activation barrier is slowest and dictates the rate law.',
        de: 'Der Schritt mit der höchsten Aktivierungsenergie bestimmt die Gesamtreaktionsgeschwindigkeit.',
        fr: 'L\'étape ayant l\'énergie d\'activation la plus élevée est la plus lente et impose la loi de vitesse.',
        ru: 'В многостадийных реакциях скорость определяет медленная стадия с наибольшей энергией активации.',
        ar: 'في التفاعلات التي تحدث في عدة خطوات، تحدد الخطوة البطيئة ذات طاقة التنشيط الأعلى سرعة التفاعل.',
        zh: '多步反应的速率由活化能最高的慢反应步骤决定。',
        ku: 'Di reaksiyonên bi mekanîzma de, lezê qonaxa hêdî ya ku enerjiya aktîvasyonê ya wê herî bilind e diyar dike.',
      },
      labels: {
        tr: { slow: '1. basamak (yavaş)', fast: '2. basamak (hızlı)', intermediate: 'Ara ürün', rate_eq: 'Hız denklemi yavaş basamağa göre yazılır (Ea₁ > Ea₂)' },
        en: { slow: 'Step 1 (slow)', fast: 'Step 2 (fast)', intermediate: 'Intermediate', rate_eq: 'The rate law is written from the slow step (Ea₁ > Ea₂)' },
        de: { slow: 'Schritt 1 (langsam)', fast: 'Schritt 2 (schnell)', intermediate: 'Zwischenprodukt', rate_eq: 'Das Geschwindigkeitsgesetz folgt aus dem langsamen Schritt (Ea₁ > Ea₂)' },
        fr: { slow: 'Étape 1 (lente)', fast: 'Étape 2 (rapide)', intermediate: 'Intermédiaire', rate_eq: 'La loi de vitesse s\'écrit à partir de l\'étape lente (Ea₁ > Ea₂)' },
        ru: { slow: 'Стадия 1 (медленная)', fast: 'Стадия 2 (быстрая)', intermediate: 'Промежуточный продукт', rate_eq: 'Уравнение скорости записывают по медленной стадии (Ea₁ > Ea₂)' },
        ar: { slow: 'الخطوة 1 (بطيئة)', fast: 'الخطوة 2 (سريعة)', intermediate: 'مركب وسطي', rate_eq: 'يُكتب قانون السرعة من الخطوة البطيئة (Ea₁ > Ea₂)' },
        zh: { slow: '第 1 步（慢）', fast: '第 2 步（快）', intermediate: '中间产物', rate_eq: '速率方程由慢反应步骤写出(Ea₁ > Ea₂)' },
        ku: { slow: 'Qonaxa 1. (hêdî)', fast: 'Qonaxa 2. (bilez)', intermediate: 'Hilbera navber', rate_eq: 'Hevkêşeya lezê li gorî qonaxa hêdî tê nivîsîn (Ea₁ > Ea₂)' },
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
        ar: 'الاتزان الكيميائي ومبدأ لوشاتلييه',
        zh: '化学平衡与勒夏特列原理',
        ku: 'Hevsengiya Kîmyewî û Prensîba Le Chatelier',
      },
      caption: {
        tr: 'Dengedeki sisteme dış müdahale yapıldığında sistem bu etkiyi azaltacak yöne kayar.',
        en: 'Equilibrium shifts in the direction that counteracts externally applied disturbances.',
        de: 'Ein Gleichgewichtssystem weicht äußeren Zwängen durch Verschiebung entgegen.',
        fr: 'Un système à l\'équilibre soumis à une perturbation évolue pour minimiser cette contrainte.',
        ru: 'Если на систему в равновесии оказать внешнее воздействие, равновесие смещается в сторону, ослабляющую это воздействие.',
        ar: 'عند التأثير في نظام متزن بمؤثر خارجي ينزاح الاتزان في الاتجاه الذي يقلل هذا التأثير.',
        zh: '改变平衡体系的条件，平衡就向减弱这种改变的方向移动。',
        ku: 'Dema ji derve destwerdan li sîstemeke di hevsengiyê de tê kirin, sîstem ber bi aliyê ku vê bandorê kêm dike ve diçe.',
      },
      labels: {
        tr: { spike: 'N₂ eklendi', shift: 'Denge ürünlere kayar', kc_t: 'Derişimler değişir, Kc değişmez; Kc yalnızca sıcaklıkla değişir', kp_kc: 'Kp = Kc·(RT)^Δn' },
        en: { spike: 'N₂ added', shift: 'Shifts toward products', kc_t: 'Concentrations change but Kc does not; Kc changes only with temperature', kp_kc: 'Kp = Kc·(RT)^Δn' },
        de: { spike: 'N₂ zugegeben', shift: 'Verschiebung zu den Produkten', kc_t: 'Konzentrationen ändern sich, Kc nicht; Kc hängt nur von der Temperatur ab', kp_kc: 'Kp = Kc·(RT)^Δn' },
        fr: { spike: 'Ajout de N₂', shift: 'Déplacement vers les produits', kc_t: 'Les concentrations changent, pas Kc ; Kc ne dépend que de la température', kp_kc: 'Kp = Kc·(RT)^Δn' },
        ru: { spike: 'Добавлен N₂', shift: 'Равновесие смещается к продуктам', kc_t: 'Концентрации меняются, Kc — нет; Kc зависит только от температуры', kp_kc: 'Kp = Kc·(RT)^Δn' },
        ar: { spike: 'إضافة N₂', shift: 'ينزاح الاتزان نحو النواتج', kc_t: 'تتغير التراكيز ولا يتغير Kc؛ يتغير Kc بدرجة الحرارة فقط', kp_kc: 'Kp = Kc·(RT)^Δn' },
        zh: { spike: '加入 N₂', shift: '平衡向生成物移动', kc_t: '浓度改变而 Kc 不变；Kc 只随温度变化', kp_kc: 'Kp = Kc·(RT)^Δn' },
        ku: { spike: 'N₂ hat zêdekirin', shift: 'Hevsengî ber bi hilberan ve diçe', kc_t: 'Tîrbûn diguherin, Kc naguhere; Kc tenê bi germahiyê diguhere', kp_kc: 'Kp = Kc·(RT)^Δn' },
      },
    },
    {
      archetype: 'equilibrium-le-chatelier',
      title: {
        tr: 'Denge Kesri (Qc) ve Sistem Yönü',
        en: 'Reaction Quotient (Qc) & Shift Direction',
        de: 'Reaktionsquotient Qc & Gleichgewichtsausrichtung',
        fr: 'Quotient réactionnel Qc et évolution',
        ru: 'Коэффициент реакции (Qc) и направление смещения',
        ar: 'حاصل التفاعل (Qc) واتجاه انزياح الاتزان',
        zh: '浓度商(Qc)与平衡移动方向',
        ku: 'Pişka Reaksiyonê (Qc) û Aliyê Guherînê',
      },
      caption: {
        tr: 'Qc < Kc ise sistem ürünlere (sağa), Qc > Kc ise girenlere (sola) kayarak dengeye ulaşır.',
        en: 'If Qc < Kc reaction moves right; if Qc > Kc reaction moves left to reach dynamic balance.',
        de: 'Wenn Qc < Kc verschiebt sich das System nach rechts; bei Qc > Kc nach links.',
        fr: 'Si Qc < Kc le système évolue vers les produits; si Qc > Kc vers les réactifs.',
        ru: 'Если Qc < Kc, система приходит к равновесию, смещаясь к продуктам (вправо); если Qc > Kc — к реагентам (влево).',
        ar: 'إذا كان Qc < Kc ينزاح النظام نحو النواتج (اليمين)، وإذا كان Qc > Kc ينزاح نحو المتفاعلات (اليسار) حتى يبلغ الاتزان.',
        zh: 'Qc < Kc时，平衡向生成物方向（向右）移动；Qc > Kc时，向反应物方向（向左）移动，直至达到平衡。',
        ku: 'Heke Qc < Kc be sîstem ber bi hilberan (rastê), heke Qc > Kc be ber bi reaktantan (çepê) ve diçe û digihîje hevsengiyê.',
      },
      labels: {
        tr: { qc_less: 'Qc < Kc: ürünlere (sağa) kayar', qc_eq: 'Qc = Kc: denge', qc_more: 'Qc > Kc: girenlere (sola) kayar', cat_effect: 'Katalizör Kc değerini ve denge derişimlerini değiştirmez' },
        en: { qc_less: 'Qc < Kc: shifts right (products)', qc_eq: 'Qc = Kc: equilibrium', qc_more: 'Qc > Kc: shifts left (reactants)', cat_effect: 'A catalyst changes neither Kc nor the equilibrium concentrations' },
        de: { qc_less: 'Qc < Kc: nach rechts (Produkte)', qc_eq: 'Qc = Kc: Gleichgewicht', qc_more: 'Qc > Kc: nach links (Edukte)', cat_effect: 'Ein Katalysator ändert weder Kc noch die Gleichgewichtskonzentrationen' },
        fr: { qc_less: 'Qc < Kc : vers la droite (produits)', qc_eq: 'Qc = Kc : équilibre', qc_more: 'Qc > Kc : vers la gauche (réactifs)', cat_effect: 'Un catalyseur ne change ni Kc ni les concentrations à l\'équilibre' },
        ru: { qc_less: 'Qc < Kc: вправо (к продуктам)', qc_eq: 'Qc = Kc: равновесие', qc_more: 'Qc > Kc: влево (к реагентам)', cat_effect: 'Катализатор не меняет ни Kc, ни равновесные концентрации' },
        ar: { qc_less: 'Qc < Kc: نحو اليمين (النواتج)', qc_eq: 'Qc = Kc: اتزان', qc_more: 'Qc > Kc: نحو اليسار (المتفاعلات)', cat_effect: 'الحفاز لا يغيّر Kc ولا تراكيز الاتزان' },
        zh: { qc_less: 'Qc < Kc：向右（生成物）移动', qc_eq: 'Qc = Kc：平衡', qc_more: 'Qc > Kc：向左（反应物）移动', cat_effect: '催化剂不改变 Kc，也不改变平衡浓度' },
        ku: { qc_less: 'Qc < Kc: ber bi hilberan (rastê) diçe', qc_eq: 'Qc = Kc: hevsengî', qc_more: 'Qc > Kc: ber bi reaktantan (çepê) diçe', cat_effect: 'Katalîzor ne Kc ne jî tîrbûnên hevsengiyê diguherîne' },
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
        ru: 'Кислотно-основное титрование и установка с бюреткой',
        ar: 'معايرة الحمض بالقاعدة وجهاز السحاحة',
        zh: '酸碱滴定与滴定装置',
        ku: 'Tîtrasyona Asîd-Baz û Amûra Buretê',
      },
      caption: {
        tr: 'Büretten damlatılan baz ile erlendeki asidin nötralleşmesi ve pH = 7 olan eşdeğerlik noktası.',
        en: 'Titrant dispensed into analyte flask exhibiting a sharp pH transition at equivalence (pH 7).',
        de: 'Zutropfen von Lauge zur Säure mit steilem pH-Sprung am Äquivalenzpunkt (pH 7).',
        fr: 'Ajout de base à la burette avec saut brusque de pH au point d\'équivalence (pH 7).',
        ru: 'Нейтрализация кислоты в колбе основанием, добавляемым по каплям из бюретки, и точка эквивалентности при pH = 7.',
        ar: 'تعادل الحمض في الدورق المخروطي بالقاعدة المضافة قطرة قطرة من السحاحة، ونقطة التكافؤ عند pH = 7.',
        zh: '从滴定管滴入的碱中和锥形瓶中的酸，化学计量点时pH = 7。',
        ku: 'Neutralîzasyona asîda di erlenmeyerê de bi baza ku ji buretê tê dilopkirin û xala hevtayê ya ku pH = 7 e.',
      },
      labels: {
        tr: { burette: '0,1 M NaOH', flask: '100 mL 0,1 M HCl', eqpt: 'Eşdeğerlik noktası: pH = 7', buffer: 'Tampon bölgesi yoktur (kuvvetli asit – kuvvetli baz)' },
        en: { burette: '0.1 M NaOH', flask: '100 mL 0.1 M HCl', eqpt: 'Equivalence point: pH = 7', buffer: 'No buffer region (strong acid – strong base)' },
        de: { burette: '0,1 M NaOH', flask: '100 mL 0,1 M HCl', eqpt: 'Äquivalenzpunkt: pH = 7', buffer: 'Kein Pufferbereich (starke Säure – starke Base)' },
        fr: { burette: 'NaOH 0,1 M', flask: '100 mL de HCl 0,1 M', eqpt: 'Point d\'équivalence : pH = 7', buffer: 'Pas de zone tampon (acide fort – base forte)' },
        ru: { burette: '0,1 M NaOH', flask: '100 мл 0,1 M HCl', eqpt: 'Точка эквивалентности: pH = 7', buffer: 'Буферной области нет (сильная кислота – сильное основание)' },
        ar: { burette: '0.1 M NaOH', flask: '100 mL من HCl 0.1 M', eqpt: 'نقطة التكافؤ: pH = 7', buffer: 'لا توجد منطقة منظِّمة (حمض قوي – قاعدة قوية)' },
        zh: { burette: '0.1 M NaOH', flask: '100 mL 0.1 M HCl', eqpt: '化学计量点：pH = 7', buffer: '无缓冲区（强酸-强碱）' },
        ku: { burette: '0,1 M NaOH', flask: '100 mL 0,1 M HCl', eqpt: 'Xala hevtayê: pH = 7', buffer: 'Herêma tampon tune (asîda bihêz – baza bihêz)' },
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
        zh: '弱酸的电离与缓冲溶液',
        ku: 'Îyonîzasyona Asîda Qels û Çareseriyên Tampon',
      },
      caption: {
        tr: 'Zayıf asit seyreltildikçe iyonlaşma yüzdesi artar; tampon çözelti pH değişimine direnir.',
        en: 'Dilution increases weak acid ionization percentage; buffers resist external pH fluctuations.',
        de: 'Verdünnung steigert den Dissoziationsgrad schwacher Säuren; Puffer stabilisieren den pH.',
        fr: 'La dilution augmente le pourcentage d\'ionisation ; les tampons résistent aux variations de pH.',
        ru: 'При разбавлении слабой кислоты степень её диссоциации растёт; буферный раствор противостоит изменению pH.',
        ar: 'تزداد النسبة المئوية لتأين الحمض الضعيف كلما خُفِّف؛ ويقاوم المحلول المنظِّم تغير pH.',
        zh: '弱酸溶液越稀，电离度越大；缓冲溶液能抵抗pH的变化。',
        ku: 'Asîda qels çiqas sist bibe, rêjeya îyonîzasyonê ya ji sedî ewqas zêde dibe; çareseriya tampon li hember guherîna pH-ê radiweste.',
      },
      labels: {
        tr: { henderson: 'Tampon bölgesinde: pH = pKa + log([tuz]/[asit])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: 'Seyreltme: iyonlaşma yüzdesi artar', salt_hydro: 'Eşdeğerlik: pH > 7 (tuz hidrolizi)' },
        en: { henderson: 'In the buffer region: pH = pKa + log([salt]/[acid])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: 'Dilution: percent ionisation rises', salt_hydro: 'Equivalence: pH > 7 (salt hydrolysis)' },
        de: { henderson: 'Im Pufferbereich: pH = pKa + log([Salz]/[Säure])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: 'Verdünnung: Dissoziationsgrad steigt', salt_hydro: 'Äquivalenz: pH > 7 (Salzhydrolyse)' },
        fr: { henderson: 'Zone tampon : pH = pKa + log([sel]/[acide])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: 'Dilution : le pourcentage d\'ionisation augmente', salt_hydro: 'Équivalence : pH > 7 (hydrolyse du sel)' },
        ru: { henderson: 'В буферной области: pH = pKa + lg([соль]/[кислота])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: 'Разбавление: степень диссоциации растёт', salt_hydro: 'Эквивалентность: pH > 7 (гидролиз соли)' },
        ar: { henderson: 'في المنطقة المنظِّمة: pH = pKa + log([الملح]/[الحمض])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: 'التخفيف: تزداد نسبة التأين', salt_hydro: 'التكافؤ: pH > 7 (التحلل المائي للملح)' },
        zh: { henderson: '缓冲区：pH = pKa + lg([盐]/[酸])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: '稀释：电离度增大', salt_hydro: '化学计量点：pH > 7（盐类水解）' },
        ku: { henderson: 'Di herêma tampon de: pH = pKa + log([xwê]/[asîd])', ka_eq: '[H⁺] = √(Ka·Ca)', dil_pct: 'Sistkirin: îyonîzasyona ji sedî zêde dibe', salt_hydro: 'Xala hevtayê: pH > 7 (hîdrolîza xwêyê)' },
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
        ru: 'Равновесие растворимости (Ksp) и осаждение',
        ar: 'حاصل الإذابة (Ksp) والترسيب',
        zh: '沉淀溶解平衡(Ksp)与沉淀生成',
        ku: 'Hevsengiya Helbûniyê (Ksp) û Niştin',
      },
      caption: {
        tr: 'İyon çarpımı Qi > Kçç olduğunda sistem doygunluğu aşar ve çökelme meydana gelir.',
        en: 'Precipitation occurs whenever ionic product Qi exceeds the equilibrium solubility constant Ksp.',
        de: 'Fällung tritt ein, sobald das Ionenprodukt Qi das Löslichkeitsprodukt Ksp überschreitet.',
        fr: 'La précipitation se produit dès que le produit ionique Qi dépasse la constante Ksp.',
        ru: 'Когда ионное произведение Qi больше Ksp, раствор становится пересыщенным и выпадает осадок.',
        ar: 'عندما يصبح الحاصل الأيوني Qi أكبر من Ksp يتجاوز المحلول حد التشبع ويحدث الترسيب.',
        zh: '离子积Qi > Ksp时，溶液过饱和，有沉淀生成。',
        ku: 'Dema hasila îyonan Qi > Ksp be, sîstem têrbûnê derbas dike û niştin çêdibe.',
      },
      labels: {
        tr: { ksp_xy: 'XY: Kçç = s²', ksp_xy2: 'XY₂: Kçç = 4s³', ksp_x2y3: 'X₂Y₃: Kçç = 108s⁵', q_precip: 'Qi > Kçç ise çökelme olur; Qi = Kçç ise çözelti doygundur' },
        en: { ksp_xy: 'XY: Ksp = s²', ksp_xy2: 'XY₂: Ksp = 4s³', ksp_x2y3: 'X₂Y₃: Ksp = 108s⁵', q_precip: 'Qi > Ksp: a precipitate forms; Qi = Ksp: saturated solution' },
        de: { ksp_xy: 'XY: Ksp = s²', ksp_xy2: 'XY₂: Ksp = 4s³', ksp_x2y3: 'X₂Y₃: Ksp = 108s⁵', q_precip: 'Qi > Ksp: Niederschlag fällt aus; Qi = Ksp: gesättigte Lösung' },
        fr: { ksp_xy: 'XY : Ksp = s²', ksp_xy2: 'XY₂ : Ksp = 4s³', ksp_x2y3: 'X₂Y₃ : Ksp = 108s⁵', q_precip: 'Qi > Ksp : un précipité se forme ; Qi = Ksp : solution saturée' },
        ru: { ksp_xy: 'XY: Ksp = s²', ksp_xy2: 'XY₂: Ksp = 4s³', ksp_x2y3: 'X₂Y₃: Ksp = 108s⁵', q_precip: 'Qi > Ksp: выпадает осадок; Qi = Ksp: насыщенный раствор' },
        ar: { ksp_xy: 'XY: Ksp = s²', ksp_xy2: 'XY₂: Ksp = 4s³', ksp_x2y3: 'X₂Y₃: Ksp = 108s⁵', q_precip: 'Qi > Ksp: يتكوّن راسب؛ Qi = Ksp: محلول مشبع' },
        zh: { ksp_xy: 'XY：Ksp = s²', ksp_xy2: 'XY₂：Ksp = 4s³', ksp_x2y3: 'X₂Y₃：Ksp = 108s⁵', q_precip: 'Qi > Ksp：有沉淀生成；Qi = Ksp：溶液饱和' },
        ku: { ksp_xy: 'XY: Ksp = s²', ksp_xy2: 'XY₂: Ksp = 4s³', ksp_x2y3: 'X₂Y₃: Ksp = 108s⁵', q_precip: 'Qi > Ksp: niştin çêdibe; Qi = Ksp: çareserî têr e' },
      },
    },
    {
      archetype: 'lab-glassware-setup',
      title: {
        tr: 'Ortak İyon Etkisi ve Çözünürlüğün Azalması',
        en: 'Common-Ion Effect on Solubility',
        de: 'Gleichioniger Effekt & Löslichkeitsabnahme',
        fr: 'Effet d\'ion commun sur la solubilité',
        ru: 'Влияние одноимённого иона и снижение растворимости',
        ar: 'تأثير الأيون المشترك وانخفاض الذائبية',
        zh: '同离子效应与溶解度减小',
        ku: 'Bandora Îyona Hevpar û Kêmbûna Helbûniyê',
      },
      caption: {
        tr: 'Ortak iyon çözünürlüğü azaltır; ancak çözünürlük çarpımı sabiti Kçç değişmez.',
        en: 'Presence of a common ion suppresses molar solubility without modifying Ksp constant.',
        de: 'Gleichionige Zusätze senken die Löslichkeit, lassen aber Ksp unberührt.',
        fr: 'L\'ajout d\'un ion commun diminue la solubilité sans modifier la constante Ksp.',
        ru: 'Одноимённый ион уменьшает растворимость, но произведение растворимости Ksp не меняется.',
        ar: 'يقلل الأيون المشترك الذائبية، لكن حاصل الإذابة Ksp لا يتغير.',
        zh: '同离子效应使溶解度减小，但溶度积Ksp不变。',
        ku: 'Îyona hevpar helbûniyê kêm dike; lê sabîta hasila helbûniyê Ksp naguhere.',
      },
      labels: {
        tr: { common: 'Ortak iyon Cl⁻ dengeyi katı AgCl yönüne kaydırır', pure: 'Saf suda: çözünürlük büyük', ion_sol: 'NaCl çözeltisinde: çözünürlük küçük', ksp_const: 'Kçç değişmez; yalnızca sıcaklıkla değişir' },
        en: { common: 'The common ion Cl⁻ shifts the equilibrium toward solid AgCl', pure: 'In pure water: higher solubility', ion_sol: 'In NaCl solution: lower solubility', ksp_const: 'Ksp does not change; it changes only with temperature' },
        de: { common: 'Das gleichionige Cl⁻ verschiebt das Gleichgewicht zum festen AgCl', pure: 'In reinem Wasser: höhere Löslichkeit', ion_sol: 'In NaCl-Lösung: geringere Löslichkeit', ksp_const: 'Ksp bleibt gleich; es ändert sich nur mit der Temperatur' },
        fr: { common: 'L\'ion commun Cl⁻ déplace l\'équilibre vers AgCl solide', pure: 'Dans l\'eau pure : solubilité plus grande', ion_sol: 'Dans NaCl : solubilité plus faible', ksp_const: 'Ksp ne change pas ; il ne dépend que de la température' },
        ru: { common: 'Одноимённый ион Cl⁻ смещает равновесие к твёрдому AgCl', pure: 'В чистой воде: растворимость больше', ion_sol: 'В растворе NaCl: растворимость меньше', ksp_const: 'Ksp не меняется; он зависит только от температуры' },
        ar: { common: 'الأيون المشترك Cl⁻ يزيح الاتزان نحو AgCl الصلب', pure: 'في الماء النقي: ذائبية أكبر', ion_sol: 'في محلول NaCl: ذائبية أقل', ksp_const: 'Ksp لا يتغير؛ يتغير بدرجة الحرارة فقط' },
        zh: { common: '同离子 Cl⁻ 使平衡向固体 AgCl 方向移动', pure: '纯水中：溶解度较大', ion_sol: 'NaCl 溶液中：溶解度较小', ksp_const: 'Ksp 不变；它只随温度变化' },
        ku: { common: 'Îyona hevpar Cl⁻ hevsengiyê ber bi AgCl ya hişk ve dikişîne', pure: 'Di ava paqij de: helbûnî mezin e', ion_sol: 'Di çareseriya NaCl de: helbûnî biçûk e', ksp_const: 'Ksp naguhere; tenê bi germahiyê diguhere' },
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
        ru: 'Гальванический элемент Даниэля и движение электронов',
        ar: 'خلية دانييل الجلفانية وتدفق الإلكترونات',
        zh: '丹尼尔原电池与电子流向',
        ku: 'Pîla Galvanîk a Daniell û Herikîna Elektronan',
      },
      caption: {
        tr: 'Zn anotta yükseltgenir, Cu²⁺ katotta indirgenir; dış devrede elektron anottan katoda akar.',
        en: 'Zn oxidizes at anode; Cu²⁺ reduces at cathode; electrons flow from anode to cathode via wire.',
        de: 'Zn oxidiert an der Anode; Cu²⁺ wird an der Kathode reduziert; Elektronen fließen von Anode zu Kathode.',
        fr: 'Zn s\'oxyde à l\'anode ; Cu²⁺ se réduit à la cathode ; les électrons circulent de l\'anode à la cathode.',
        ru: 'Zn окисляется на аноде, Cu²⁺ восстанавливается на катоде; во внешней цепи электроны движутся от анода к катоду.',
        ar: 'يتأكسد Zn عند المصعد، وتُختزل أيونات Cu²⁺ عند المهبط؛ وتنتقل الإلكترونات في الدائرة الخارجية من المصعد إلى المهبط.',
        zh: 'Zn在负极被氧化，Cu²⁺ 在正极被还原；外电路中电子由负极流向正极。',
        ku: 'Zn li anodê dikeve oksîdasyonê, Cu²⁺ li katodê dikeve redûksiyonê; di çerxa derve de elektron ji anodê ber bi katodê ve diherikin.',
      },
      labels: {
        tr: { anode: 'Anot (−): Zn → Zn²⁺ + 2e⁻', cathode: 'Katot (+): Cu²⁺ + 2e⁻ → Cu', bridge: 'Tuz köprüsü (KNO₃)', volt: 'Elektronlar dış devrede anottan katoda akar; E°pil = 1,10 V' },
        en: { anode: 'Anode (−): Zn → Zn²⁺ + 2e⁻', cathode: 'Cathode (+): Cu²⁺ + 2e⁻ → Cu', bridge: 'Salt bridge (KNO₃)', volt: 'Electrons flow from anode to cathode in the wire; E°cell = 1.10 V' },
        de: { anode: 'Anode (−): Zn → Zn²⁺ + 2e⁻', cathode: 'Kathode (+): Cu²⁺ + 2e⁻ → Cu', bridge: 'Salzbrücke (KNO₃)', volt: 'Elektronen fließen im Draht von der Anode zur Kathode; E° = 1,10 V' },
        fr: { anode: 'Anode (−) : Zn → Zn²⁺ + 2e⁻', cathode: 'Cathode (+) : Cu²⁺ + 2e⁻ → Cu', bridge: 'Pont salin (KNO₃)', volt: 'Les électrons vont de l\'anode à la cathode par le fil ; E° = 1,10 V' },
        ru: { anode: 'Анод (−): Zn → Zn²⁺ + 2e⁻', cathode: 'Катод (+): Cu²⁺ + 2e⁻ → Cu', bridge: 'Солевой мостик (KNO₃)', volt: 'Электроны идут по проводу от анода к катоду; E° = 1,10 В' },
        ar: { anode: 'المصعد (−): Zn → Zn²⁺ + 2e⁻', cathode: 'المهبط (+): Cu²⁺ + 2e⁻ → Cu', bridge: 'القنطرة الملحية (KNO₃)', volt: 'تنتقل الإلكترونات في السلك من المصعد إلى المهبط؛ E°cell = 1.10 V' },
        zh: { anode: '负极(−)：Zn → Zn²⁺ + 2e⁻', cathode: '正极(+)：Cu²⁺ + 2e⁻ → Cu', bridge: '盐桥(KNO₃)', volt: '电子在外电路中由负极流向正极；E° = 1.10 V' },
        ku: { anode: 'Anod (−): Zn → Zn²⁺ + 2e⁻', cathode: 'Katod (+): Cu²⁺ + 2e⁻ → Cu', bridge: 'Pira xwê (KNO₃)', volt: 'Elektron di çerxa derve de ji anodê diçin katodê; E°pîl = 1,10 V' },
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
        ku: 'Pîlên Tîrbûnê',
      },
      caption: {
        tr: 'Gerilimi yalnızca derişim farkı oluşturur. Derişimi az olan kap anot, derişik kap katottur.',
        en: 'The voltage comes only from the concentration difference. The less concentrated half-cell is the anode, the concentrated one the cathode.',
        de: 'Die Spannung entsteht nur durch den Konzentrationsunterschied. Die verdünnte Halbzelle ist die Anode, die konzentrierte die Kathode.',
        fr: 'La tension provient uniquement de la différence de concentration. La demi-pile la moins concentrée est l\'anode, la plus concentrée la cathode.',
        ru: 'Напряжение создаётся только разностью концентраций. Полуэлемент с меньшей концентрацией — анод, с большей — катод.',
        ar: 'ينشأ الجهد من فرق التركيز فقط. نصف الخلية الأقل تركيزًا هو المصعد، ونصف الخلية الأكثر تركيزًا هو المهبط.',
        zh: '电压只由浓度差产生。稀溶液一侧为负极，浓溶液一侧为正极。',
        ku: 'Voltajê tenê cudahiya tîrbûnê çêdike. Firaxa sist anod e, firaxa tîr katod e.',
      },
      labels: {
        tr: { nernst: 'Gerilimi yalnızca derişim farkı oluşturur', conc_anode: 'Anot (−): seyreltik kap', conc_cath: 'Katot (+): derişik kap', stop: 'Derişimler eşitlenince gerilim sıfır olur' },
        en: { nernst: 'The voltage comes only from the concentration difference', conc_anode: 'Anode (−): dilute side', conc_cath: 'Cathode (+): concentrated side', stop: 'When the concentrations become equal the voltage is zero' },
        de: { nernst: 'Die Spannung entsteht nur durch den Konzentrationsunterschied', conc_anode: 'Anode (−): verdünnte Halbzelle', conc_cath: 'Kathode (+): konzentrierte Halbzelle', stop: 'Bei gleichen Konzentrationen ist die Spannung null' },
        fr: { nernst: 'La tension vient uniquement de l\'écart de concentration', conc_anode: 'Anode (−) : demi-pile diluée', conc_cath: 'Cathode (+) : demi-pile concentrée', stop: 'À concentrations égales, la tension est nulle' },
        ru: { nernst: 'Напряжение создаёт только разность концентраций', conc_anode: 'Анод (−): разбавленный раствор', conc_cath: 'Катод (+): концентрированный раствор', stop: 'При равных концентрациях напряжение равно нулю' },
        ar: { nernst: 'ينشأ الجهد من فرق التركيز فقط', conc_anode: 'المصعد (−): المحلول المخفف', conc_cath: 'المهبط (+): المحلول المركز', stop: 'عند تساوي التركيزين يصبح الجهد صفرًا' },
        zh: { nernst: '电压只由浓度差产生', conc_anode: '负极(−)：稀溶液一侧', conc_cath: '正极(+)：浓溶液一侧', stop: '两侧浓度相等时电压为零' },
        ku: { nernst: 'Voltajê tenê cudahiya tîrbûnê çêdike', conc_anode: 'Anod (−): firaxa sist', conc_cath: 'Katod (+): firaxa tîr', stop: 'Dema tîrbûn wekhev dibin, voltaj dibe sifir' },
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
        ru: 'Аппарат Гофмана и электролиз воды',
        ar: 'جهاز هوفمان والتحليل الكهربائي للماء',
        zh: '霍夫曼电解器与水的电解',
        ku: 'Voltametreya Hoffman û Elektrolîza Avê',
      },
      caption: {
        tr: 'Elektrikle suyun ayrışması: Katotta 2 hacim H₂ gazı, anotta 1 hacim O₂ gazı toplanır.',
        en: 'Nonspontaneous water splitting generating 2 volumes of H₂ at cathode per 1 volume of O₂ at anode.',
        de: 'Nicht-spontane Wasserspaltung: 2 Volumenteile H₂ an der Kathode und 1 Teil O₂ an der Anode.',
        fr: 'Décomposition forcée de l\'eau : 2 volumes de H₂ à la cathode pour 1 volume de O₂ à l\'anode.',
        ru: 'Разложение воды электрическим током: на катоде собирается 2 объёма H₂, на аноде — 1 объём O₂.',
        ar: 'تحلل الماء بالكهرباء: يتجمع حجمان من غاز H₂ عند المهبط مقابل حجم واحد من غاز O₂ عند المصعد.',
        zh: '用电分解水：阴极收集到2体积H₂，阳极收集到1体积O₂。',
        ku: 'Perçebûna avê bi elektrîkê: li katodê 2 qebare gaza H₂, li anodê 1 qebare gaza O₂ kom dibe.',
      },
      labels: {
        tr: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻ (indirgenme)', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻ (yükseltgenme)', faraday: 'Net: 2H₂O → 2H₂ + O₂ (4 mol e⁻ = 4 F)', dc: 'Doğru akım kaynağı' },
        en: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻ (reduction)', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻ (oxidation)', faraday: 'Overall: 2H₂O → 2H₂ + O₂ (4 mol e⁻ = 4 F)', dc: 'DC power supply' },
        de: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻ (Reduktion)', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻ (Oxidation)', faraday: 'Gesamt: 2H₂O → 2H₂ + O₂ (4 mol e⁻ = 4 F)', dc: 'Gleichstromquelle' },
        fr: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻ (réduction)', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻ (oxydation)', faraday: 'Bilan : 2H₂O → 2H₂ + O₂ (4 mol e⁻ = 4 F)', dc: 'Générateur de courant continu' },
        ru: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻ (восстановление)', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻ (окисление)', faraday: 'Итог: 2H₂O → 2H₂ + O₂ (4 моль e⁻ = 4 F)', dc: 'Источник постоянного тока' },
        ar: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻ (اختزال)', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻ (أكسدة)', faraday: 'المحصلة: 2H₂O → 2H₂ + O₂ (4 mol e⁻ = 4 F)', dc: 'مصدر تيار مستمر' },
        zh: { cathode_h2: '4H₂O + 4e⁻ → 2H₂ + 4OH⁻（还原）', anode_o2: '2H₂O → O₂ + 4H⁺ + 4e⁻（氧化）', faraday: '总反应：2H₂O → 2H₂ + O₂(4 mol e⁻ = 4 F)', dc: '直流电源' },
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
        zh: '法拉第定律与牺牲阳极',
        ku: 'Zagonên Faraday û Elektroda Qurbanê',
      },
      caption: {
        tr: 'm = (I·t·MA) / (96500·z). Korozyonu önlemek için demire daha aktif bir kurban elektrot bağlanır.',
        en: 'Deposited mass calculation and cathodic protection by coupling more active sacrificial metals.',
        de: 'Massenberechnung nach Faraday und kathodischer Schutz durch unedlere Opferanoden.',
        fr: 'Calcul de masse électrodéposée et protection cathodique par anode sacrificielle plus réactive.',
        ru: 'm = (I·t·MA) / (96500·z). Для защиты от коррозии к железу присоединяют более активный металл — протектор.',
        ar: 'm = (I·t·MA) / (96500·z). ولمنع تآكل الحديد يوصل به قطب مضحٍّ أكثر نشاطًا منه.',
        zh: 'm = (I·t·MA) / (96500·z)。为防止腐蚀，将更活泼的金属作为牺牲阳极与铁相连。',
        ku: 'm = (I·t·MA) / (96500·z). Ji bo pêşîgirtina li korozyonê, elektrodeke qurbanê ya çalaktir bi hesin ve tê girêdan.',
      },
      labels: {
        tr: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: 'Kurban elektrot: Mg (anot, yükseltgenir)', fe_pipe: 'Demir boru: katot, korunur', electroplate: 'Elektrolizle kaplama: Ag⁺ + e⁻ → Ag' },
        en: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: 'Sacrificial anode: Mg (oxidised)', fe_pipe: 'Iron pipe: cathode, protected', electroplate: 'Electroplating: Ag⁺ + e⁻ → Ag' },
        de: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: 'Opferanode: Mg (wird oxidiert)', fe_pipe: 'Eisenrohr: Kathode, geschützt', electroplate: 'Galvanisieren: Ag⁺ + e⁻ → Ag' },
        fr: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: 'Anode sacrificielle : Mg (oxydé)', fe_pipe: 'Tuyau en fer : cathode, protégé', electroplate: 'Galvanoplastie : Ag⁺ + e⁻ → Ag' },
        ru: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: 'Протектор: Mg (анод, окисляется)', fe_pipe: 'Железная труба: катод, защищена', electroplate: 'Гальваническое покрытие: Ag⁺ + e⁻ → Ag' },
        ar: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: 'القطب المضحي: Mg (مصعد، يتأكسد)', fe_pipe: 'أنبوب الحديد: مهبط، محمي', electroplate: 'الطلاء الكهربائي: Ag⁺ + e⁻ → Ag' },
        zh: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: '牺牲阳极：Mg（被氧化）', fe_pipe: '铁管：阴极，受保护', electroplate: '电镀：Ag⁺ + e⁻ → Ag' },
        ku: { faraday_law: 'm = (I·t·MA) / (96500·z)', sac_anode: 'Elektroda qurbanê: Mg (anod, oksîdasyon)', fe_pipe: 'Boriya hesin: katod, tê parastin', electroplate: 'Rûpoşkirin bi elektrolîzê: Ag⁺ + e⁻ → Ag' },
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
        ru: 'Геометрия молекул по VSEPR и валентные углы',
        ar: 'الأشكال الهندسية للجزيئات (VSEPR) وزوايا الروابط',
        zh: 'VSEPR分子构型与键角',
        ku: 'Geometriya Molekulê ya VSEPR û Goşeyên Girêdanê',
      },
      caption: {
        tr: 'AX₂ doğrusal (180°), AX₃ düzlem üçgen (120°), AX₄ düzgün dörtyüzlü (109,5°), AX₃E üçgen piramit (107°), AX₂E₂ kırık doğru (104,5°).',
        en: 'Electron pair repulsion shaping linear (180°), trigonal (120°), tetrahedral (109.5°), and bent (104.5°).',
        de: 'Abstoßung der Elektronenpaare: linear, trigonal planar, tetraedrisch und gewinkelt.',
        fr: 'Répulsion des doublets: linéaire (180°), trigonal (120°), tétraédrique (109.5°) et coudé (104.5°).',
        ru: 'AX₂ — линейная (180°), AX₃ — плоский треугольник (120°), AX₄ — правильный тетраэдр (109,5°), AX₃E — тригональная пирамида (107°), AX₂E₂ — угловая (104,5°).',
        ar: 'AX₂ خطي (180°)، AX₃ مثلث مستوٍ (120°)، AX₄ رباعي الأوجه منتظم (109.5°)، AX₃E هرم ثلاثي (107°)، AX₂E₂ منحنٍ (104.5°).',
        zh: 'AX₂直线形(180°)，AX₃平面三角形(120°)，AX₄正四面体形(109.5°)，AX₃E三角锥形(107°)，AX₂E₂ V形(104.5°)。',
        ku: 'AX₂ xêzikî (180°), AX₃ sêgoşeya pelî (120°), AX₄ tetrahedral (109,5°), AX₃E pîramîda sêgoşe (107°), AX₂E₂ goşeyî (104,5°).',
      },
      labels: {
        tr: { ax2: 'AX₂ doğrusal 180°', ax3: 'AX₃ düzlem üçgen 120°', ax4: 'AX₄ düzgün dörtyüzlü 109,5°', ax2e2: 'AX₂E₂ kırık doğru 104,5°' },
        en: { ax2: 'AX₂ linear 180°', ax3: 'AX₃ trigonal planar 120°', ax4: 'AX₄ tetrahedral 109.5°', ax2e2: 'AX₂E₂ bent 104.5°' },
        de: { ax2: 'AX₂ linear 180°', ax3: 'AX₃ trigonal-planar 120°', ax4: 'AX₄ tetraedrisch 109,5°', ax2e2: 'AX₂E₂ gewinkelt 104,5°' },
        fr: { ax2: 'AX₂ linéaire 180°', ax3: 'AX₃ trigonale plane 120°', ax4: 'AX₄ tétraédrique 109,5°', ax2e2: 'AX₂E₂ coudée 104,5°' },
        ru: { ax2: 'AX₂ линейная 180°', ax3: 'AX₃ плоский треугольник 120°', ax4: 'AX₄ тетраэдр 109,5°', ax2e2: 'AX₂E₂ угловая 104,5°' },
        ar: { ax2: 'AX₂ خطي 180°', ax3: 'AX₃ مثلث مستوٍ 120°', ax4: 'AX₄ رباعي الأوجه 109.5°', ax2e2: 'AX₂E₂ منحنٍ 104.5°' },
        zh: { ax2: 'AX₂ 直线形 180°', ax3: 'AX₃ 平面三角形 120°', ax4: 'AX₄ 正四面体形 109.5°', ax2e2: 'AX₂E₂ V 形 104.5°' },
        ku: { ax2: 'AX₂ xêzikî 180°', ax3: 'AX₃ sêgoşeya pelî 120°', ax4: 'AX₄ tetrahedral 109,5°', ax2e2: 'AX₂E₂ goşeyî 104,5°' },
      },
    },
    {
      archetype: 'vsepr-molecular-geometry',
      title: {
        tr: 'Karbonun Allotropları: Elmas ve Grafit',
        en: 'Carbon Allotropes: Diamond & Graphite',
        de: 'Kohlenstoffallotrope: Diamant & Graphit',
        fr: 'Allotropes du carbone: Diamant et graphite',
        ru: 'Аллотропные модификации углерода: алмаз и графит',
        ar: 'متآصلات الكربون: الماس والجرافيت',
        zh: '碳的同素异形体：金刚石与石墨',
        ku: 'Allotropên Karbonê: Elmas û Grafît',
      },
      caption: {
        tr: 'Elmas sp3 hibritleşmesiyle yalıtkandır; grafit sp2 tabakaları ve pi elektronlarıyla elektriği iletir.',
        en: 'Diamond (sp3) is an electrical insulator; graphite (sp2) conducts via delocalized pi electrons.',
        de: 'Diamant (sp3) isoliert; Graphit (sp2) leitet über delokalisierte Pi-Elektronen.',
        fr: 'Le diamant (sp3) est isolant; le graphite (sp2) est conducteur grâce aux électrons pi délocalisés.',
        ru: 'Алмаз (sp3-гибридизация) — диэлектрик; графит благодаря слоям из sp2-атомов и π-электронам проводит электрический ток.',
        ar: 'الماس بتهجين sp3 عازل للكهرباء؛ أما الجرافيت فيوصل الكهرباء بطبقاته ذات التهجين sp2 وإلكترونات باي.',
        zh: '金刚石中碳原子为sp³杂化，不导电；石墨为sp²杂化的层状结构，有π电子，能导电。',
        ku: 'Elmas bi hîbrîdîzasyona sp3 îzolator e; grafît bi qatên sp2 û elektronên pî elektrîkê diguhezîne.',
      },
      labels: {
        tr: { diamond: 'Elmas: sp³, çok sert, yalıtkan', graphite: 'Grafit: sp², tabakalı, iletken', graphene: 'Grafen: tek grafit tabakası', nanotube: 'Karbon nanotüp: silindir biçiminde kıvrılmış tabaka' },
        en: { diamond: 'Diamond: sp³, very hard, insulator', graphite: 'Graphite: sp², layered, conductor', graphene: 'Graphene: a single graphite layer', nanotube: 'Carbon nanotube: a layer rolled into a cylinder' },
        de: { diamond: 'Diamant: sp³, sehr hart, Isolator', graphite: 'Graphit: sp², Schichten, Leiter', graphene: 'Graphen: eine einzelne Graphitschicht', nanotube: 'Kohlenstoffnanoröhre: zum Zylinder gerollte Schicht' },
        fr: { diamond: 'Diamant : sp³, très dur, isolant', graphite: 'Graphite : sp², feuillets, conducteur', graphene: 'Graphène : un seul feuillet de graphite', nanotube: 'Nanotube de carbone : feuillet enroulé en cylindre' },
        ru: { diamond: 'Алмаз: sp³, очень твёрдый, диэлектрик', graphite: 'Графит: sp², слоистый, проводник', graphene: 'Графен: один слой графита', nanotube: 'Углеродная нанотрубка: слой, свёрнутый в цилиндр' },
        ar: { diamond: 'الماس: sp³، شديد الصلابة، عازل', graphite: 'الجرافيت: sp²، طبقات، موصل', graphene: 'الجرافين: طبقة واحدة من الجرافيت', nanotube: 'أنبوب الكربون النانوي: طبقة ملفوفة أسطوانيًا' },
        zh: { diamond: '金刚石：sp³，极硬，不导电', graphite: '石墨：sp²，层状，导电', graphene: '石墨烯：单层石墨', nanotube: '碳纳米管：卷成圆筒的单层' },
        ku: { diamond: 'Elmas: sp³, pir hişk, îzolator', graphite: 'Grafît: sp², qatqatî, gihîner', graphene: 'Grafen: yek qata grafîtê', nanotube: 'Nanotûba karbonê: qateke wek silindir pêçayî' },
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
        zh: '有机官能团',
        ku: 'Komên Fonksiyonel ên Organîk',
      },
      caption: {
        tr: 'Alkol (-OH), Eter (-O-), Aldehit/Keton (-C=O), Karboksilik asit (-COOH) ve Ester (-COOR).',
        en: 'Systematic family of hydroxyl, carbonyl, carboxyl, and ester chemical functional groups.',
        de: 'Übersicht über Hydroxyl-, Carbonyl-, Carboxyl- und Estergruppen.',
        fr: 'Familles d\'alcools, éthers, aldéhydes, cétones, acides carboxyliques et esters.',
        ru: 'Спирты (-OH), простые эфиры (-O-), альдегиды и кетоны (-C=O), карбоновые кислоты (-COOH) и сложные эфиры (-COOR).',
        ar: 'الكحول (-OH)، والإيثر (-O-)، والألدهيد/الكيتون (-C=O)، والحمض الكربوكسيلي (-COOH)، والإستر (-COOR).',
        zh: '醇(-OH)、醚(-O-)、醛/酮(C=O)、羧酸(-COOH)和酯(-COOR)。',
        ku: 'Alkol (-OH), Eter (-O-), Aldehîd/Keton (-C=O), Asîda karboksîlîk (-COOH) û Ester (-COOR).',
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
        ru: 'Правило Марковникова для алкенов и реактив Толленса',
        ar: 'قاعدة ماركوفنيكوف واختبار تولنز',
        zh: '马氏规则与托伦试剂',
        ku: 'Qaîdeya Markovnikov li Alkenan û Reaktîfa Tollens',
      },
      caption: {
        tr: 'Asimetrik alkene HX katıldığında H hidrojence zengin karbona bağlanır; uç alkinler Tollens ayıracıyla beyaz çökelek verir.',
        en: 'Hydrogen halide addition follows Markovnikov; terminal alkynes give a white precipitate with Tollens reagent.',
        de: 'HX-Addition nach Markovnikov; terminale Alkine reagieren positiv mit Tollens-Reagenz.',
        fr: 'Addition de HX selon Markovnikov; les alcynes vrais réagissent au réactif de Tollens.',
        ru: 'При присоединении HX к несимметричному алкену H присоединяется к атому углерода, связанному с большим числом атомов водорода; концевые алкины с реактивом Толленса дают белый осадок.',
        ar: 'عند إضافة HX إلى ألكين غير متماثل يرتبط H بذرة الكربون الأغنى بالهيدروجين؛ وتعطي الألكاينات الطرفية راسبًا أبيض مع كاشف تولنز.',
        zh: '不对称烯烃与HX加成时，H加到含氢较多的碳原子上；端炔与托伦试剂生成白色沉淀。',
        ku: 'Dema HX li alkeneke asîmetrîk zêde dibe, H bi karbona ku hîdrojenên wê zêdetir in ve girê dibe; alkînên dawî bi reaktîfa Tollens re niştekeke spî didin.',
      },
      labels: {
        tr: { markov: 'Markovnikov: H, hidrojeni çok olan karbona bağlanır', tollens_alkyne: 'Uç alkin + Tollens: beyaz çökelek', tollens_ald: 'Aldehit + Tollens: gümüş aynası', internal: 'İç alkin + Tollens: tepkime vermez' },
        en: { markov: 'Markovnikov: H adds to the carbon with more hydrogens', tollens_alkyne: 'Terminal alkyne + Tollens: white precipitate', tollens_ald: 'Aldehyde + Tollens: silver mirror', internal: 'Internal alkyne + Tollens: no reaction' },
        de: { markov: 'Markownikow: H geht an das C mit mehr H-Atomen', tollens_alkyne: 'Endständiges Alkin + Tollens: weißer Niederschlag', tollens_ald: 'Aldehyd + Tollens: Silberspiegel', internal: 'Innenständiges Alkin + Tollens: keine Reaktion' },
        fr: { markov: 'Markovnikov : H se fixe sur le carbone le plus hydrogéné', tollens_alkyne: 'Alcyne vrai + Tollens : précipité blanc', tollens_ald: 'Aldéhyde + Tollens : miroir d\'argent', internal: 'Alcyne interne + Tollens : pas de réaction' },
        ru: { markov: 'Марковников: H — к атому C, у которого больше атомов H', tollens_alkyne: 'Концевой алкин + Толленс: белый осадок', tollens_ald: 'Альдегид + Толленс: серебряное зеркало', internal: 'Внутренний алкин + Толленс: нет реакции' },
        ar: { markov: 'ماركوفنيكوف: يرتبط H بالكربون الأغنى بالهيدروجين', tollens_alkyne: 'ألكاين طرفي + تولنز: راسب أبيض', tollens_ald: 'ألدهيد + تولنز: مرآة فضية', internal: 'ألكاين داخلي + تولنز: لا تفاعل' },
        zh: { markov: '马氏规则：H 加到含氢较多的碳上', tollens_alkyne: '端炔 + 托伦试剂：白色沉淀', tollens_ald: '醛 + 托伦试剂：银镜', internal: '内炔 + 托伦试剂：不反应' },
        ku: { markov: 'Markovnikov: H bi karbona ku hîdrojenên wê zêdetir in ve girê dibe', tollens_alkyne: 'Alkîna dawî + Tollens: niştekeke spî', tollens_ald: 'Aldehîd + Tollens: neynika zîv', internal: 'Alkîna navîn + Tollens: reaksiyon çênabe' },
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
