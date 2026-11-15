import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit01: ChemistryUnitSeedData = {
  "id": "u01",
  "order": 1,
  "exam": "TYT",
  "grade": 9,
  "title": {
    "tr": "Kimya Bilimi",
    "en": "Chemistry as a Science",
    "de": "Chemiewissenschaft",
    "fr": "Science Chimique",
    "ru": "Химия как наука",
    "ar": "علم الكيمياء",
    "zh": "化学科学",
    "ku": "Zanista Kîmyayê"
  },
  "subtitle": {
    "tr": "Simyadan Kimyaya ve Güvenlik",
    "en": "From Alchemy to Chemistry & Safety",
    "de": "Von der Alchemie zur Chemie und Laborsicherheit",
    "fr": "De l'alchimie à la chimie et sécurité au laboratoire",
    "ru": "От алхимии к химии. Безопасность в лаборатории",
    "ar": "من الخيمياء إلى الكيمياء والسلامة المختبرية",
    "zh": "从炼金术到化学与实验室安全",
    "ku": "Ji Alkîmiyê ber bi Kîmyayê û Ewlehiya Laboratuwarê"
  },
  "facts": [
    {
      "id": "u01-f01",
      "fact": {
        "tr": "Lavoisier, Kütlenin Korunumu Kanunu ile modern kimyanın kurucusu kabul edilir.",
        "en": "Lavoisier is considered the founder of modern chemistry with his Law of Conservation of Mass.",
        "de": "Lavoisier gilt mit seinem Massenerhaltungsgesetz als Begründer der modernen Chemie.",
        "fr": "Lavoisier est considéré comme le fondateur de la chimie moderne avec sa loi de conservation de la masse.",
        "ru": "Лавуазье, открывший закон сохранения массы, считается основоположником современной химии.",
        "ar": "يُعدّ لافوازييه مؤسس الكيمياء الحديثة بفضل قانون حفظ الكتلة.",
        "zh": "拉瓦锡因提出质量守恒定律而被公认为近代化学的奠基人。",
        "ku": "Lavoisier bi zagona parastina girseyê wekî damezrînerê kîmyaya nûjen tê qebûlkirin."
      },
      "trap": {
        "tr": "Simyacılar teraziyi hassas olarak kullanarak kütle korunumunu kanıtlamıştır.",
        "en": "Alchemists proved the conservation of mass by using the analytical balance precisely.",
        "de": "Alchemisten bewiesen die Massenerhaltung durch die präzise Verwendung der Analysenwaage.",
        "fr": "Les alchimistes ont prouvé la conservation de la masse en utilisant précisément la balance analytique.",
        "ru": "Алхимики доказали закон сохранения массы с помощью точных взвешиваний.",
        "ar": "أثبت الخيميائيون حفظ الكتلة باستخدام الميزان التحليلي الدقيق.",
        "zh": "炼金术士借助精密天平进行精确称量，证明了质量守恒。",
        "ku": "Alkîmîstan bi bikaranîna terazûya hesas parastina girseyê îspat kir."
      },
      "whyTrapIsFalse": {
        "tr": "Simyacılar nicel ölçüm yapmadan deneme-yanılma ile çalışmıştır; kütlenin korunduğunu kapalı kapta hassas tartımlarla gösteren Lavoisier'dir.",
        "en": "Alchemists worked by trial and error without quantitative measurement; it was Lavoisier who showed conservation of mass with precise weighings in closed vessels.",
        "de": "Alchemisten arbeiteten nach Versuch und Irrtum ohne quantitative Messungen; erst Lavoisier zeigte die Massenerhaltung durch genaue Wägungen in geschlossenen Gefäßen.",
        "fr": "Les alchimistes procédaient par essais et erreurs sans mesures quantitatives ; c'est Lavoisier qui a montré la conservation de la masse par des pesées précises en récipient fermé.",
        "ru": "Алхимики действовали методом проб и ошибок без количественных измерений; сохранение массы точными взвешиваниями в закрытом сосуде показал Лавуазье.",
        "ar": "عمل الخيميائيون بالتجربة والخطأ دون قياسات كمية؛ ولافوازييه هو من بيّن حفظ الكتلة بوزن دقيق في وعاء مغلق.",
        "zh": "炼金术士靠反复试错开展工作，并不做定量测量；是拉瓦锡通过在密闭容器中精确称量证明了质量守恒。",
        "ku": "Alkîmîst bê pîvana hejmarî, bi ceribandin û şaşiyê dixebitîn; yê ku parastina girseyê bi kêşanên hesas di firaxa girtî de nîşan da Lavoisier e."
      },
      "osymTip": {
        "tr": "Simya teorik temellere ve sistematik deneylere dayanmaz.",
        "en": "Alchemy is not based on theoretical foundations and systematic experiments.",
        "de": "Alchemie basiert nicht auf theoretischen Grundlagen und systematischen Experimenten.",
        "fr": "L'alchimie ne repose pas sur des fondements théoriques et des expériences systématiques.",
        "ru": "Алхимия не опирается ни на теорию, ни на систематический эксперимент.",
        "ar": "لا تعتمد الخيمياء على أسس نظرية وتجارب منهجية.",
        "zh": "炼金术并不以理论基础和系统实验为依据。",
        "ku": "Alkîmî ne li ser bingehên teorîk û ceribandinên sîstematîk ava bûye."
      }
    },
    {
      "id": "u01-f02",
      "fact": {
        "tr": "Zaç yağı H2SO4'ün (sülfürik asit), tuz ruhu HCl'nin (hidroklorik asit) geleneksel adıdır.",
        "en": "Oil of vitriol is H2SO4 (sulfuric acid); spirit of salt (muriatic acid) is the traditional name for HCl (hydrochloric acid).",
        "de": "Vitriolöl ist H2SO4 (Schwefelsäure); Salzgeist ist der traditionelle Name für HCl (Salzsäure).",
        "fr": "L'huile de vitriol est H2SO4 (acide sulfurique) ; l'esprit de sel est le nom traditionnel de HCl (acide chlorhydrique).",
        "ru": "Купоросное масло — традиционное название H2SO4 (серной кислоты), соляной спирт — HCl (соляной кислоты).",
        "ar": "زيت الزاج هو H2SO4 (حمض الكبريتيك)، والاسم التقليدي لروح الملح هو HCl (حمض الهيدروكلوريك).",
        "zh": "矾油是硫酸(H2SO4)的传统名称，盐镪水是盐酸(HCl)的传统名称。",
        "ku": "Rûnê zaçê navê kevneşopî yê H2SO4 (asîda sulfurîk), ruhê xwê jî navê kevneşopî yê HCl (asîda hîdroklorîk) e."
      },
      "trap": {
        "tr": "Zaç yağı HNO3 formülüne sahiptir.",
        "en": "Oil of vitriol has the chemical formula HNO3.",
        "de": "Vitriolöl besitzt die chemische Formel HNO3.",
        "fr": "L'huile de vitriol a pour formule chimique HNO3.",
        "ru": "Купоросное масло имеет формулу HNO3.",
        "ar": "صيغة زيت الزاج الكيميائية هي HNO3.",
        "zh": "矾油的化学式为 HNO3。",
        "ku": "Formula rûnê zaçê HNO3 ye."
      },
      "whyTrapIsFalse": {
        "tr": "HNO3 kezzabın (nitrik asit) formülüdür; zaç yağı kükürt içeren sülfürik asittir (H2SO4). İki asidin geleneksel adları karıştırılmıştır.",
        "en": "HNO3 is the formula of nitric acid (kezzap); 'zaç yağı' (oil of vitriol) is sulfur-containing sulfuric acid, H2SO4. The two traditional names have been mixed up.",
        "de": "HNO3 ist die Formel der Salpetersäure (Kezzap); „Vitriolöl“ (zaç yağı) ist die schwefelhaltige Schwefelsäure H2SO4. Die beiden traditionellen Namen wurden verwechselt.",
        "fr": "HNO3 est la formule de l'acide nitrique (kezzap) ; l'« huile de vitriol » (zaç yağı) est l'acide sulfurique H2SO4, qui contient du soufre. Les deux noms traditionnels ont été confondus.",
        "ru": "HNO3 — формула крепкой водки (азотной кислоты); купоросное масло — серосодержащая серная кислота H2SO4. Здесь перепутаны традиционные названия двух кислот.",
        "ar": "HNO3 صيغة حمض النيتريك (ماء الفضة)؛ أما زيت الزاج فهو حمض الكبريتيك H2SO4 الذي يحتوي على الكبريت. وقد خُلط هنا بين الاسمين التقليديين للحمضين.",
        "zh": "HNO3 是硝镪水（硝酸）的化学式；矾油是含硫的硫酸(H2SO4)。这里把两种酸的传统名称弄混了。",
        "ku": "HNO3 formula kezzapê (asîda nîtrîk) ye; rûnê zaçê asîda sulfurîk e ku kukurt tê de heye (H2SO4). Navên kevneşopî yên her du asîdan li hev hatine tevlihevkirin."
      },
      "osymTip": {
        "tr": "HNO3 kezzaptır, zaç yağı H2SO4'tür.",
        "en": "HNO3 is aqua fortis (nitric acid), whereas oil of vitriol is H2SO4 (sulfuric acid).",
        "de": "HNO3 ist Scheidewasser (Salpetersäure), während Vitriolöl H2SO4 (Schwefelsäure) ist.",
        "fr": "HNO3 est l'eau-forte (acide nitrique), tandis que l'huile de vitriol est H2SO4 (acide sulfurique).",
        "ru": "HNO3 — крепкая водка (азотная кислота), H2SO4 — купоросное масло (серная кислота).",
        "ar": "HNO3 هو ماء الفضة (حمض النيتريك)، بينما زيت الزاج هو H2SO4 (حمض الكبريتيك).",
        "zh": "HNO3 是硝镪水（硝酸），矾油才是 H2SO4（硫酸）。",
        "ku": "HNO3 kezzap (asîda nîtrîk) e, rûnê zaçê jî H2SO4 (asîda sulfurîk) e."
      }
    },
    {
      "id": "u01-f03",
      "fact": {
        "tr": "Damıtma imbiğini (alembic) geliştirdiği ve nitrik asit ile kral suyunu elde ettiği kabul edilen simyacı Cabir bin Hayyan'dır.",
        "en": "Jabir ibn Hayyan is the alchemist credited with improving the alembic and with preparing nitric acid and aqua regia.",
        "de": "Dschābir ibn Hayyān gilt als der Alchemist, der den Alambic (Destillierhelm) verbesserte und Salpetersäure sowie Königswasser herstellte.",
        "fr": "Jabir ibn Hayyan est l'alchimiste à qui l'on attribue le perfectionnement de l'alambic ainsi que la préparation de l'acide nitrique et de l'eau régale.",
        "ru": "Джабиру ибн Хайяну приписывают усовершенствование перегонного куба (аламбика) и получение азотной кислоты и царской водки.",
        "ar": "يُنسب إلى الخيميائي جابر بن حيان تطوير الإنبيق وتحضير حمض النيتريك والماء الملكي.",
        "zh": "贾比尔·伊本·哈扬被认为改进了蒸馏器（阿兰比克），并制得了硝酸和王水。",
        "ku": "Alkîmîstê ku tê qebûlkirin alembîk (îmbîka distîlasyonê) pêş xistiye û asîda nîtrîk û ava şahî bi dest xistiye Cabir bin Hayyan e."
      },
      "trap": {
        "tr": "Kral suyunu Aristo dört element kuramıyla açıklamıştır.",
        "en": "Aristotle explained aqua regia using the four elements theory.",
        "de": "Aristoteles erklärte Königswasser mit der Vier-Elemente-Lehre.",
        "fr": "Aristote a expliqué l'eau régale par la théorie des quatre éléments.",
        "ru": "Аристотель объяснил свойства царской водки учением о четырёх элементах.",
        "ar": "فسّر أرسطو الماء الملكي بنظرية العناصر الأربعة.",
        "zh": "亚里士多德用四元素学说解释了王水。",
        "ku": "Arîstoteles ava şahî bi teoriya çar elementan rave kir."
      },
      "whyTrapIsFalse": {
        "tr": "Aristo deney yapmayan ve kral suyundan yüzyıllar önce yaşamış bir filozoftur; derişik HCl ve HNO3 karışımı olan kral suyunu elde eden Cabir bin Hayyan'dır.",
        "en": "Aristotle was a philosopher who did no experiments and lived centuries before aqua regia was known; aqua regia, a mixture of concentrated HCl and HNO3, was obtained by Jabir ibn Hayyan.",
        "de": "Aristoteles war ein Philosoph, der keine Experimente machte und Jahrhunderte vor dem Königswasser lebte; Königswasser, ein Gemisch aus konzentrierter HCl und HNO3, stellte Dschabir ibn Hayyan her.",
        "fr": "Aristote était un philosophe qui ne faisait pas d'expériences et vécut des siècles avant l'eau régale ; l'eau régale, mélange de HCl et HNO3 concentrés, a été obtenue par Jabir ibn Hayyan.",
        "ru": "Аристотель — философ, не ставивший опытов и живший за века до открытия царской водки; царскую водку (смесь концентрированных HCl и HNO3) получил Джабир ибн Хайян.",
        "ar": "أرسطو فيلسوف لم يُجرِ تجارب وعاش قبل الماء الملكي بقرون؛ والذي حضّر الماء الملكي، وهو مزيج من HCl وHNO3 المركزين، هو جابر بن حيان.",
        "zh": "亚里士多德是不做实验的哲学家，生活在王水出现之前数百年；王水(浓 HCl 与浓 HNO3 的混合物)是贾比尔·伊本·哈扬制得的。",
        "ku": "Arîstoteles fîlozofek bû ku ceribandin nedikir û bi sedsalan berî ava şahî jiya; yê ku ava şahî (tevliheviya HCl û HNO3 ên tîr) bi dest xist Cabir bin Hayyan e."
      }
    },
    {
      "id": "u01-f04",
      "fact": {
        "tr": "Ebu Bekir er-Razi zaç yağını (sülfürik asit) elde etmiş ve maddeleri hayvansal, bitkisel ve madensel olarak sınıflandırmıştır.",
        "en": "Abu Bakr al-Razi obtained oil of vitriol (sulfuric acid) and classified substances as animal, vegetable and mineral.",
        "de": "Abu Bakr al-Razi gewann Vitriolöl (Schwefelsäure) und teilte die Stoffe in tierische, pflanzliche und mineralische ein.",
        "fr": "Abu Bakr al-Razi a obtenu l'huile de vitriol (acide sulfurique) et a classé les substances en animales, végétales et minérales.",
        "ru": "Абу Бакр ар-Рази получил купоросное масло (серную кислоту) и разделил вещества на животные, растительные и минеральные.",
        "ar": "حضّر أبو بكر الرازي زيت الزاج (حمض الكبريتيك) وصنّف المواد إلى حيوانية ونباتية ومعدنية.",
        "zh": "阿布·贝克尔·拉齐制得了矾油（硫酸），并把物质分为动物性、植物性和矿物性三类。",
        "ku": "Ebû Bekir er-Razî rûnê zaçê (asîda sulfurîk) bi dest xist û made wekî heywanî, nebatî û madenî dabeş kirin."
      },
      "trap": {
        "tr": "Ebu Bekir er-Razi maddeleri katı, sıvı ve gaz hâllerine göre sınıflandırmıştır.",
        "en": "Abu Bakr al-Razi classified substances according to their solid, liquid and gaseous states.",
        "de": "Abu Bakr al-Razi ordnete die Stoffe nach festem, flüssigem und gasförmigem Zustand.",
        "fr": "Abu Bakr al-Razi a classé les substances selon leurs états solide, liquide et gazeux.",
        "ru": "Абу Бакр ар-Рази классифицировал вещества по агрегатному состоянию: на твёрдые, жидкие и газообразные.",
        "ar": "صنّف أبو بكر الرازي المواد بحسب حالاتها الصلبة والسائلة والغازية.",
        "zh": "阿布·贝克尔·拉齐按固态、液态和气态对物质进行了分类。",
        "ku": "Ebû Bekir er-Razî made li gorî rewşên hişk, şile û gaz dabeş kirin."
      },
      "whyTrapIsFalse": {
        "tr": "er-Razi maddeleri fiziksel hâllerine göre değil, elde edildikleri kaynağa göre hayvansal, bitkisel ve madensel olarak sınıflandırmıştır.",
        "en": "Al-Razi classified substances not by their physical state but by their source: animal, vegetable and mineral.",
        "de": "Al-Razi ordnete die Stoffe nicht nach ihrem Aggregatzustand, sondern nach ihrer Herkunft: tierisch, pflanzlich und mineralisch.",
        "fr": "Al-Razi a classé les substances non selon leur état physique, mais selon leur origine : animale, végétale et minérale.",
        "ru": "Ар-Рази классифицировал вещества не по агрегатному состоянию, а по происхождению: животные, растительные и минеральные.",
        "ar": "صنّف الرازي المواد لا بحسب حالتها الفيزيائية، بل بحسب مصدرها: حيوانية ونباتية ومعدنية.",
        "zh": "拉齐不是按物质的物理状态，而是按其来源把物质分为动物性、植物性和矿物性三类。",
        "ku": "Er-Razî made ne li gorî rewşa wan a fîzîkî, li gorî çavkaniya ku jê tên bidestxistin wekî heywanî, nebatî û madenî dabeş kirin."
      }
    },
    {
      "id": "u01-f05",
      "fact": {
        "tr": "Büret, titrasyon deneylerinde hassas sıvı hacmi ölçümü ve kontrollü damlatma için kullanılır.",
        "en": "The burette is used for precise liquid volume measurement and controlled dripping in titration experiments.",
        "de": "Die Bürette dient der präzisen Messung des Flüssigkeitsvolumens und dem kontrollierten Tropfen in Titrationsexperimenten.",
        "fr": "La burette est utilisée pour une mesure précise du volume de liquide et un égouttement contrôlé dans les expériences de titrage.",
        "ru": "Бюретку используют при титровании для точного измерения объёма жидкости и её контролируемого покапельного добавления.",
        "ar": "تُستخدم السحاحة في تجارب المعايرة لقياس حجم السائل بدقة وإضافته قطرةً قطرةً بطريقة مضبوطة.",
        "zh": "滴定管用于在滴定实验中精确量取液体体积和控制滴加。",
        "ku": "Buret di ceribandinên tîtrasyonê de ji bo pîvandina hesas a qebareya şileyê û dilopkirina kontrolkirî tê bikaranîn."
      },
      "trap": {
        "tr": "Büret, belirli bir hacimde standart çözelti hazırlamak için kullanılan, boynunda tek ölçü çizgisi bulunan cam kaptır.",
        "en": "A burette is the glass vessel with a single calibration mark on its neck that is used to prepare a standard solution of a fixed volume.",
        "de": "Die Bürette ist das Glasgefäß mit einer einzigen Eichmarke am Hals, mit dem eine Standardlösung bestimmten Volumens hergestellt wird.",
        "fr": "La burette est le récipient en verre portant un seul trait de jauge sur le col, utilisé pour préparer une solution étalon d'un volume donné.",
        "ru": "Бюретка — стеклянный сосуд с одной меткой на горлышке, предназначенный для приготовления стандартного раствора заданного объёма.",
        "ar": "السحاحة وعاء زجاجي ذو علامة معايرة واحدة على عنقه، يُستخدم لتحضير محلول قياسي بحجم محدد.",
        "zh": "滴定管是颈部只有一条刻度线、用于配制一定体积标准溶液的玻璃容器。",
        "ku": "Buret firaxa camê ye ku tenê xêzeke pîvanê li ser stûyê wê heye û ji bo amadekirina çareseriyeke standard a bi qebareyeke diyar tê bikaranîn."
      },
      "whyTrapIsFalse": {
        "tr": "Boynunda tek ölçü çizgisi olan ve belirli hacimde çözelti hazırlamaya yarayan kap balon jojedir. Büret dereceli, musluklu ince bir cam borudur; titrasyonda sıvıyı damla damla ve ölçülü eklemeye yarar.",
        "en": "The vessel with a single mark on its neck for preparing a solution of fixed volume is the volumetric flask. A burette is a thin graduated glass tube with a stopcock; it adds liquid drop by drop and in measured amounts during titration.",
        "de": "Das Gefäß mit nur einer Eichmarke am Hals zum Ansetzen einer Lösung bestimmten Volumens ist der Messkolben. Die Bürette ist ein dünnes, graduiertes Glasrohr mit Hahn; sie gibt bei der Titration Flüssigkeit tropfenweise und abgemessen zu.",
        "fr": "Le récipient à un seul trait de jauge servant à préparer une solution de volume donné est la fiole jaugée. La burette est un tube de verre fin, gradué et muni d'un robinet ; elle ajoute le liquide goutte à goutte et de façon mesurée lors d'un titrage.",
        "ru": "Сосуд с одной меткой на горлышке для приготовления раствора заданного объёма — мерная колба. Бюретка — тонкая градуированная стеклянная трубка с краном; при титровании она служит для покапельного отмеренного добавления жидкости.",
        "ar": "الوعاء ذو العلامة الواحدة على العنق والمستخدم لتحضير محلول بحجم محدد هو الدورق الحجمي. أما السحاحة فأنبوب زجاجي رفيع مدرّج ذو صنبور، تُضاف به السوائل قطرةً قطرةً وبكميات مقيسة أثناء المعايرة.",
        "zh": "颈部只有一条刻度线、用于配制一定体积溶液的是容量瓶。滴定管是带活塞的细长刻度玻璃管，用于滴定时逐滴、定量地加入液体。",
        "ku": "Firaxa ku tenê xêzeke pîvanê li ser stûyê wê heye û ji bo amadekirina çareseriyeke bi qebareya diyar tê bikaranîn balona jojeyê ye. Buret boriyeke camê ya zirav, bi derece û şîrek e; di tîtrasyonê de şileyê dilop bi dilop û bi pîvan zêde dike."
      }
    },
    {
      "id": "u01-f06",
      "fact": {
        "tr": "Erlenmayer çalkalama gerektiren çözelti hazırlama ve titrasyonda yaygın kullanılır.",
        "en": "The Erlenmeyer flask is widely used for preparing solutions that need swirling and in titration.",
        "de": "Erlenmayer wird häufig bei der Lösungsvorbereitung und Titration verwendet, die Schütteln erfordert.",
        "fr": "Erlenmayer est largement utilisé dans la préparation et le titrage de solutions nécessitant une agitation.",
        "ru": "Колбу Эрленмейера широко используют при приготовлении растворов, которые нужно перемешивать, и при титровании.",
        "ar": "يُستخدم دورق إرلنماير على نطاق واسع في تحضير المحاليل التي تتطلب الرج وفي المعايرة.",
        "zh": "锥形瓶常用于需要振荡的溶液配制和滴定。",
        "ku": "Erlenmeyer bi berfirehî di amadekirina çareseriyên ku hewceyê hejandinê ne û di tîtrasyonê de tê bikaranîn."
      },
      "trap": {
        "tr": "Erlenmayer üzerindeki hacim çizgileri büret kadar hassas hacim ölçümü sağlar.",
        "en": "The volume marks on an Erlenmeyer flask measure volume as precisely as a burette.",
        "de": "Die Volumenmarkierungen am Erlenmeyerkolben messen so genau wie eine Bürette.",
        "fr": "Les graduations d'un erlenmeyer mesurent le volume aussi précisément qu'une burette.",
        "ru": "Деления на колбе Эрленмейера позволяют измерять объём так же точно, как бюретка.",
        "ar": "علامات الحجم على دورق إرلنماير تقيس الحجم بدقة السحاحة نفسها.",
        "zh": "锥形瓶上的体积刻度可以像滴定管一样精确地量取体积。",
        "ku": "Xetên qebareyê yên li ser erlenmeyerê bi qasî buretê qebareyê bi hesasî dipîvin."
      },
      "whyTrapIsFalse": {
        "tr": "Erlenmayer üzerindeki çizgiler yalnızca yaklaşık hacmi gösterir; hassas hacim ölçümü için büret, pipet veya balon joje kullanılır.",
        "en": "The marks on an Erlenmeyer flask show only an approximate volume; precise volumes are measured with a burette, pipette or volumetric flask.",
        "de": "Die Markierungen am Erlenmeyerkolben zeigen nur ein ungefähres Volumen; genaue Volumina misst man mit Bürette, Pipette oder Messkolben.",
        "fr": "Les graduations d'un erlenmeyer n'indiquent qu'un volume approximatif ; les volumes précis se mesurent avec une burette, une pipette ou une fiole jaugée.",
        "ru": "Деления на колбе Эрленмейера показывают лишь приблизительный объём; точные объёмы измеряют бюреткой, пипеткой или мерной колбой.",
        "ar": "العلامات على دورق إرلنماير تُظهر حجماً تقريبياً فقط؛ أما الحجوم الدقيقة فتُقاس بالسحاحة أو الماصة أو الدورق الحجمي.",
        "zh": "锥形瓶上的刻度只表示近似体积；精确量取体积要用滴定管、移液管或容量瓶。",
        "ku": "Xetên li ser erlenmeyerê tenê qebareya nêzîkî nîşan didin; ji bo pîvana hesas a qebareyê buret, pîpet an balona pîvanê tê bikaranîn."
      }
    },
    {
      "id": "u01-f07",
      "fact": {
        "tr": "Balon joje, belirli derişimde standart çözelti hazırlamak için kullanılan, dar boyunlu ve hacmi hassas ayarlanmış bir cam kaptır.",
        "en": "The volumetric flask is a narrow-necked precision glass container for preparing a standard solution at a specific concentration.",
        "de": "Der Messkolben ist ein enghalsiger Präzisionsglasbehälter zur Herstellung einer Standardlösung in einer bestimmten Konzentration.",
        "fr": "La fiole jaugée est un récipient en verre de précision à col étroit permettant de préparer une solution étalon à une concentration spécifique.",
        "ru": "Мерная колба — стеклянный сосуд с узким горлом, точно откалиброванный на определённый объём; в ней готовят стандартные растворы заданной концентрации.",
        "ar": "الدورق الحجمي وعاء زجاجي ضيق العنق معايَر الحجم بدقة، يُستخدم لتحضير محلول قياسي بتركيز معين.",
        "zh": "容量瓶是一种细颈精密玻璃容器，用于配制特定浓度的标准溶液。",
        "ku": "Balona pîvanê firaxeke camê ya stûteng e ku qebareya wê bi hesasî hatiye eyarkirin û ji bo amadekirina çareseriyeke standard bi tîrbûneke diyar tê bikaranîn."
      },
      "trap": {
        "tr": "Balon joje çözeltileri doğrudan alevde ısıtmak için tasarlanmıştır.",
        "en": "A volumetric flask is designed for heating solutions directly over a flame.",
        "de": "Ein Messkolben ist dafür gebaut, Lösungen direkt über der Flamme zu erhitzen.",
        "fr": "La fiole jaugée est conçue pour chauffer les solutions directement sur la flamme.",
        "ru": "Мерная колба предназначена для нагревания растворов прямо на пламени.",
        "ar": "صُمّم الدورق الحجمي لتسخين المحاليل مباشرة على اللهب.",
        "zh": "容量瓶是专门用来在火焰上直接加热溶液的。",
        "ku": "Balona pîvanê ji bo germkirina rasterast a çareseriyan li ser agir hatiye çêkirin."
      },
      "whyTrapIsFalse": {
        "tr": "Balon joje belirli bir sıcaklıkta tek bir hacme ayarlanmış (kalibre edilmiş) hassas bir kaptır; doğrudan ısıtılırsa cam genleşir ve hacim doğruluğu bozulur.",
        "en": "A volumetric flask is a precision vessel calibrated to a single volume at a set temperature; heating it directly expands the glass and ruins its accuracy.",
        "de": "Ein Messkolben ist ein Präzisionsgefäß, das bei einer bestimmten Temperatur auf ein einziges Volumen geeicht ist; direktes Erhitzen dehnt das Glas aus und zerstört die Genauigkeit.",
        "fr": "La fiole jaugée est un récipient de précision étalonné pour un seul volume à une température donnée ; la chauffer directement dilate le verre et fausse sa précision.",
        "ru": "Мерная колба — точная посуда, откалиброванная на один объём при определённой температуре; при прямом нагревании стекло расширяется и точность теряется.",
        "ar": "الدورق الحجمي وعاء دقيق معايَر على حجم واحد عند درجة حرارة محددة؛ وتسخينه مباشرة يمدّد الزجاج ويُفسد دقته.",
        "zh": "容量瓶是在规定温度下只校准一个体积的精密容器；直接加热会使玻璃膨胀，破坏其准确度。",
        "ku": "Balona pîvanê firaxeke hesas e ku di germahiyeke diyar de li gorî yek qebareyê hatiye kalîbrekirin; heke rasterast were germkirin, cam berfireh dibe û rastbûna qebareyê xera dibe."
      }
    },
    {
      "id": "u01-f08",
      "fact": {
        "tr": "Kezzap HNO3'ün, kireç taşı CaCO3'ün, kostik soda NaOH'ın geleneksel adıdır.",
        "en": "Aqua fortis is the traditional name of HNO3, limestone that of CaCO3 and caustic soda that of NaOH.",
        "de": "Scheidewasser ist der traditionelle Name von HNO3, Kalkstein der von CaCO3 und Ätznatron der von NaOH.",
        "fr": "L'eau-forte est le nom traditionnel de HNO3, le calcaire celui de CaCO3 et la soude caustique celui de NaOH.",
        "ru": "Крепкая водка — традиционное название HNO3, известняк — CaCO3, едкий натр — NaOH.",
        "ar": "ماء الفضة هو الاسم التقليدي لـ HNO3، والحجر الجيري لـ CaCO3، والصودا الكاوية لـ NaOH.",
        "zh": "硝镪水、石灰石、烧碱分别是 HNO3、CaCO3、NaOH 的传统名称。",
        "ku": "Kezzap navê kevneşopî yê HNO3, kevirê kilsê yê CaCO3 û soda kaustîk jî yê NaOH e."
      },
      "trap": {
        "tr": "Kireç taşı, sönmemiş kireç (CaO) ile aynı bileşiktir.",
        "en": "Limestone is the same compound as quicklime (CaO).",
        "de": "Kalkstein ist dieselbe Verbindung wie Branntkalk (CaO).",
        "fr": "Le calcaire est le même composé que la chaux vive (CaO).",
        "ru": "Известняк — это то же соединение, что и негашёная известь (CaO).",
        "ar": "الحجر الجيري هو المركب نفسه الذي يُسمّى الجير الحي (CaO).",
        "zh": "石灰石与生石灰(CaO)是同一种化合物。",
        "ku": "Kevirê kilsê û kilsa nevemirî (CaO) heman pêkhate ne."
      },
      "whyTrapIsFalse": {
        "tr": "Kireç taşı CaCO3'tür; ısıtıldığında CO2 kaybederek sönmemiş kireç CaO oluşur. Biri diğerinin bozunma ürünüdür, aynı bileşik değildir.",
        "en": "Limestone is CaCO3; on heating it loses CO2 and forms quicklime, CaO. One is the decomposition product of the other, not the same compound.",
        "de": "Kalkstein ist CaCO3; beim Erhitzen verliert er CO2 und bildet Branntkalk CaO. Das eine ist das Zersetzungsprodukt des anderen, nicht dieselbe Verbindung.",
        "fr": "Le calcaire est CaCO3 ; chauffé, il perd du CO2 et donne la chaux vive CaO. L'un est le produit de décomposition de l'autre, pas le même composé.",
        "ru": "Известняк — CaCO3; при нагревании он теряет CO2 и превращается в негашёную известь CaO. Одно вещество — продукт разложения другого, а не то же самое соединение.",
        "ar": "الحجر الجيري هو CaCO3؛ وعند تسخينه يفقد CO2 ويتكوّن الجير الحي CaO. فأحدهما ناتج تفكك الآخر وليسا المركب نفسه.",
        "zh": "石灰石是 CaCO3，受热失去 CO2 生成生石灰 CaO。一个是另一个的分解产物，并不是同一种化合物。",
        "ku": "Kevirê kilsê CaCO3 e; dema tê germkirin CO2 winda dike û kilsa nevemirî (CaO) çêdibe. Yek ji wan hilbera perçebûna ya din e, ne heman pêkhate ne."
      }
    },
    {
      "id": "u01-f09",
      "fact": {
        "tr": "Fizikokimya, kimyasal sistemlerde sıcaklık, basınç, iş ve enerji dönüşümlerini inceler.",
        "en": "Physical chemistry studies temperature, pressure, work and energy transformations in chemical systems.",
        "de": "Die physikalische Chemie untersucht Temperatur-, Druck-, Arbeits- und Energieumwandlungen in chemischen Systemen.",
        "fr": "La chimie physique étudie les transformations de température, de pression, de travail et d’énergie dans les systèmes chimiques.",
        "ru": "Физическая химия изучает температуру, давление, работу и превращения энергии в химических системах.",
        "ar": "تدرس الكيمياء الفيزيائية درجة الحرارة والضغط والعمل وتحولات الطاقة في الأنظمة الكيميائية.",
        "zh": "物理化学研究化学体系中的温度、压强、功和能量转化。",
        "ku": "Fîzîkokîmya di sîstemên kîmyewî de germahî, zext, kar û veguherînên enerjiyê lêkolîn dike."
      },
      "trap": {
        "tr": "Fizikokimya yalnızca canlı metabolizmasındaki molekülleri inceler.",
        "en": "Physical chemistry studies only the molecules involved in the metabolism of living things.",
        "de": "Die Physikochemie untersucht nur Moleküle im lebenden Stoffwechsel.",
        "fr": "La physicochimie étudie uniquement les molécules du métabolisme vivant.",
        "ru": "Физическая химия изучает только молекулы, участвующие в обмене веществ живых организмов.",
        "ar": "تدرس الكيمياء الفيزيائية الجزيئات المشاركة في أيض الكائنات الحية فقط.",
        "zh": "物理化学只研究生物体代谢中的分子。",
        "ku": "Fîzîkokîmya tenê molekulên di metabolîzma zindiyan de lêkolîn dike."
      },
      "whyTrapIsFalse": {
        "tr": "Canlı metabolizmasını inceleyen dal biyokimyadır; fizikokimya her türlü kimyasal sistemde enerji, hız ve denge gibi fiziksel ilkeleri inceler.",
        "en": "The branch that studies living metabolism is biochemistry; physical chemistry studies physical principles such as energy, rate and equilibrium in all kinds of chemical systems.",
        "de": "Den Stoffwechsel von Lebewesen untersucht die Biochemie; die physikalische Chemie untersucht physikalische Prinzipien wie Energie, Geschwindigkeit und Gleichgewicht in allen chemischen Systemen.",
        "fr": "C'est la biochimie qui étudie le métabolisme du vivant ; la chimie physique étudie des principes physiques comme l'énergie, la vitesse et l'équilibre dans tous les systèmes chimiques.",
        "ru": "Метаболизм живых организмов изучает биохимия; физическая химия изучает такие физические принципы, как энергия, скорость и равновесие, в любых химических системах.",
        "ar": "الفرع الذي يدرس الأيض في الكائنات الحية هو الكيمياء الحيوية؛ أما الكيمياء الفيزيائية فتدرس مبادئ فيزيائية كالطاقة والسرعة والاتزان في جميع الأنظمة الكيميائية.",
        "zh": "研究生物代谢的分支是生物化学；物理化学研究各种化学体系中的能量、速率和平衡等物理原理。",
        "ku": "Şaxa ku metabolîzma zindiyan lêkolîn dike biyokîmya ye; fîzîkokîmya di her cure sîstema kîmyewî de prensîbên fîzîkî yên wekî enerjî, lez û hevsengiyê lêkolîn dike."
      }
    },
    {
      "id": "u01-f10",
      "fact": {
        "tr": "Analitik kimya, maddelerin bileşenlerini nitel (kalitatif) ve nicel (kantitatif) olarak belirler.",
        "en": "Analytical chemistry determines the components of substances qualitatively and quantitatively.",
        "de": "Die analytische Chemie bestimmt die Bestandteile von Stoffen qualitativ und quantitativ.",
        "fr": "La chimie analytique détermine les composants des substances qualitativement et quantitativement.",
        "ru": "Аналитическая химия определяет компоненты веществ качественно и количественно.",
        "ar": "تحدد الكيمياء التحليلية مكونات المواد نوعياً وكمياً.",
        "zh": "分析化学定性和定量地测定物质的成分。",
        "ku": "Kîmyaya analîtîk beşên madeyan bi awayê çawanî (kalîtatîf) û çendanî (kantîtatîf) diyar dike."
      },
      "trap": {
        "tr": "Analitik kimya karbon temelli polimerleri sentezleyen daldır.",
        "en": "Analytical chemistry is the branch that synthesizes carbon-based polymers.",
        "de": "Die analytische Chemie ist der Zweig, der kohlenstoffbasierte Polymere synthetisiert.",
        "fr": "La chimie analytique est la branche qui synthétise les polymères à base de carbone.",
        "ru": "Аналитическая химия — раздел, который занимается синтезом полимеров на основе углерода.",
        "ar": "الكيمياء التحليلية هي الفرع الذي يُخلِّق البوليمرات القائمة على الكربون.",
        "zh": "分析化学是合成碳基聚合物的分支。",
        "ku": "Kîmyaya analîtîk ew şax e ku polîmerên li ser bingeha karbonê sentez dike."
      },
      "whyTrapIsFalse": {
        "tr": "Analitik kimya madde sentezlemez, bir maddede ne olduğunu ve ne kadar olduğunu belirler; polimer sentezi organik ve polimer kimyasının konusudur.",
        "en": "Analytical chemistry does not synthesise substances; it determines what is in a sample and how much. Polymer synthesis belongs to organic and polymer chemistry.",
        "de": "Die analytische Chemie stellt keine Stoffe her, sondern bestimmt, was und wie viel in einer Probe enthalten ist; Polymersynthese gehört zur organischen und Polymerchemie.",
        "fr": "La chimie analytique ne synthétise pas de substances ; elle détermine ce que contient un échantillon et en quelle quantité. La synthèse des polymères relève de la chimie organique et des polymères.",
        "ru": "Аналитическая химия не синтезирует вещества, а определяет, что и сколько содержится в образце; синтез полимеров — предмет органической химии и химии полимеров.",
        "ar": "الكيمياء التحليلية لا تُصنّع المواد، بل تحدد مكوّنات العينة وكمياتها؛ وتحضير البوليمرات من اختصاص الكيمياء العضوية وكيمياء البوليمرات.",
        "zh": "分析化学并不合成物质，而是测定样品中含有什么、含有多少；聚合物的合成属于有机化学和高分子化学。",
        "ku": "Kîmyaya analîtîk madeyan sentez nake; diyar dike ka di nimûneyekê de çi heye û çiqas heye. Senteza polîmeran mijara kîmyaya organîk û kîmyaya polîmeran e."
      }
    },
    {
      "id": "u01-f11",
      "fact": {
        "tr": "Biyokimya, canlı organizmalardaki DNA, protein ve enzim tepkimelerini inceler.",
        "en": "Biochemistry studies DNA, protein and enzyme reactions in living organisms.",
        "de": "Die Biochemie untersucht DNA-, Protein- und Enzymreaktionen in lebenden Organismen.",
        "fr": "La biochimie étudie les réactions de l'ADN, des protéines et des enzymes dans les organismes vivants.",
        "ru": "Биохимия изучает ДНК, белки и ферментативные реакции в живых организмах.",
        "ar": "تدرس الكيمياء الحيوية تفاعلات الحمض النووي والبروتين والإنزيمات في الكائنات الحية.",
        "zh": "生物化学研究生物体中的 DNA、蛋白质和酶反应。",
        "ku": "Biyokîmya di organîzmayên zindî de ADN, proteîn û reaksiyonên enzîman lêkolîn dike."
      },
      "trap": {
        "tr": "Biyokimya endüstriyel metal alaşımlarını inceler.",
        "en": "Biochemistry studies industrial metal alloys.",
        "de": "Die Biochemie untersucht industrielle Metalllegierungen.",
        "fr": "La biochimie étudie les alliages métalliques industriels.",
        "ru": "Биохимия изучает промышленные металлические сплавы.",
        "ar": "تدرس الكيمياء الحيوية السبائك الفلزية الصناعية.",
        "zh": "生物化学研究工业金属合金。",
        "ku": "Biyokîmya alyajên metalan ên pîşesaziyê lêkolîn dike."
      },
      "whyTrapIsFalse": {
        "tr": "Metal alaşımları anorganik kimya ve metalurjinin konusudur; biyokimya canlılardaki kimyasal süreçlerle ilgilenir.",
        "en": "Metal alloys are the subject of inorganic chemistry and metallurgy; biochemistry deals with chemical processes in living things.",
        "de": "Metalllegierungen sind Gegenstand der anorganischen Chemie und der Metallurgie; die Biochemie befasst sich mit chemischen Vorgängen in Lebewesen.",
        "fr": "Les alliages métalliques relèvent de la chimie inorganique et de la métallurgie ; la biochimie s'intéresse aux processus chimiques du vivant.",
        "ru": "Металлические сплавы — предмет неорганической химии и металлургии; биохимия занимается химическими процессами в живых организмах.",
        "ar": "السبائك الفلزية من اختصاص الكيمياء غير العضوية وعلم الفلزات؛ أما الكيمياء الحيوية فتهتم بالعمليات الكيميائية في الكائنات الحية.",
        "zh": "金属合金属于无机化学和冶金学的研究对象；生物化学研究生物体内的化学过程。",
        "ku": "Alyajên metalan mijara kîmyaya anorganîk û metalurjiyê ne; biyokîmya bi pêvajoyên kîmyewî yên di zindiyan de re mijûl dibe."
      }
    },
    {
      "id": "u01-f12",
      "fact": {
        "tr": "Tahriş edici maddeler için kullanılan güvenlik piktogramı ünlem işaretidir.",
        "en": "The safety pictogram for irritant substances is an exclamation mark.",
        "de": "Das Sicherheitspiktogramm für reizende Stoffe ist ein Ausrufezeichen.",
        "fr": "Le pictogramme de sécurité des substances irritantes est un point d'exclamation.",
        "ru": "Для раздражающих веществ используется пиктограмма опасности «восклицательный знак».",
        "ar": "رمز السلامة للمواد المهيِّجة هو علامة التعجب.",
        "zh": "刺激性物质的安全象形图是感叹号。",
        "ku": "Pîktograma ewlehiyê ya madeyên acizker nîşana bangkirinê (!) ye."
      },
      "trap": {
        "tr": "Ünlem piktogramı patlayıcı maddeleri temsil eder.",
        "en": "The exclamation pictogram represents explosive substances.",
        "de": "Das Ausrufezeichen-Piktogramm steht für explosive Stoffe.",
        "fr": "Le pictogramme d'exclamation représente des substances explosives.",
        "ru": "Пиктограмма «восклицательный знак» обозначает взрывчатые вещества.",
        "ar": "تدل علامة التعجب على المواد المتفجرة.",
        "zh": "感叹号象形图代表爆炸性物质。",
        "ku": "Pîktograma nîşana bangkirinê (!) madeyên teqîner nîşan dide."
      },
      "whyTrapIsFalse": {
        "tr": "Patlayıcı maddeler parçalanan bomba piktogramıyla gösterilir; ünlem işareti tahriş edici veya sağlığa zararlı maddeleri belirtir.",
        "en": "Explosives are shown by the exploding-bomb pictogram; the exclamation mark indicates irritant or harmful substances.",
        "de": "Explosive Stoffe werden mit dem Piktogramm „explodierende Bombe“ gekennzeichnet; das Ausrufezeichen steht für reizende oder gesundheitsschädliche Stoffe.",
        "fr": "Les explosifs sont signalés par le pictogramme de la bombe qui explose ; le point d'exclamation indique les substances irritantes ou nocives.",
        "ru": "Взрывчатые вещества обозначают пиктограммой «взрывающаяся бомба»; восклицательный знак указывает на раздражающие или вредные вещества.",
        "ar": "يُرمز إلى المواد المتفجرة برسم القنبلة المنفجرة؛ أما علامة التعجب فتدل على المواد المهيّجة أو الضارة بالصحة.",
        "zh": "爆炸性物质用“爆炸的炸弹”象形图表示；感叹号表示刺激性或有害物质。",
        "ku": "Madeyên teqîner bi pîktograma bombeya ku diteqe tên nîşandan; nîşana bangkirinê (!) madeyên acizker an ji tenduristiyê re zirardar nîşan dide."
      }
    },
    {
      "id": "u01-f13",
      "fact": {
        "tr": "Çevreye zararlı maddeler kurumuş ağaç ve ölü balık sembolü ile gösterilir.",
        "en": "Substances that are harmful to the environment are indicated by the symbol of dried trees and dead fish.",
        "de": "Auf umweltschädliche Stoffe wird durch das Symbol vertrockneter Bäume und toter Fische hingewiesen.",
        "fr": "Les substances nocives pour l'environnement sont signalées par le symbole des arbres séchés et des poissons morts.",
        "ru": "Вещества, опасные для окружающей среды, обозначают пиктограммой с засохшим деревом и мёртвой рыбой.",
        "ar": "يُرمز إلى المواد الضارة بالبيئة برسم شجرة يابسة وسمكة ميتة.",
        "zh": "对环境有害的物质用枯树和死鱼的图形表示。",
        "ku": "Madeyên ku zirarê didin jîngehê bi sembola dareke hişkbûyî û masiyekî mirî tên nîşandan."
      },
      "trap": {
        "tr": "Çevreye zararlı maddeler alev sembolü ile gösterilir.",
        "en": "Substances that are harmful to the environment are indicated with a flame symbol.",
        "de": "Umweltschädliche Stoffe sind mit einem Flammensymbol gekennzeichnet.",
        "fr": "Les substances nocives pour l'environnement sont signalées par un symbole de flamme.",
        "ru": "Вещества, опасные для окружающей среды, обозначают пиктограммой «пламя».",
        "ar": "يُرمز إلى المواد الضارة بالبيئة برسم اللهب.",
        "zh": "对环境有害的物质用火焰图形表示。",
        "ku": "Madeyên ku zirarê didin jîngehê bi sembola agir tên nîşandan."
      },
      "whyTrapIsFalse": {
        "tr": "Alev piktogramı kolay tutuşan (yanıcı) maddeleri gösterir; çevreye zararlı maddelerin piktogramında kurumuş ağaç ve ölü balık bulunur.",
        "en": "The flame pictogram marks flammable substances; the pictogram for substances hazardous to the environment shows a dead tree and a dead fish.",
        "de": "Das Flammen-Piktogramm kennzeichnet entzündbare Stoffe; das Piktogramm für umweltgefährliche Stoffe zeigt einen abgestorbenen Baum und einen toten Fisch.",
        "fr": "Le pictogramme de la flamme signale les substances inflammables ; celui des substances dangereuses pour l'environnement montre un arbre mort et un poisson mort.",
        "ru": "Пиктограмма «пламя» обозначает легковоспламеняющиеся вещества; на пиктограмме веществ, опасных для окружающей среды, изображены засохшее дерево и мёртвая рыба.",
        "ar": "رسم اللهب يدل على المواد القابلة للاشتعال؛ أما رسم المواد الضارة بالبيئة ففيه شجرة يابسة وسمكة ميتة.",
        "zh": "火焰象形图表示易燃物质；对环境有害物质的象形图是枯树和死鱼。",
        "ku": "Pîktograma agir madeyên şewitbar (yên ku zû agir digirin) nîşan dide; di pîktograma madeyên ku zirarê didin jîngehê de dareke hişkbûyî û masiyekî mirî hene."
      }
    },
    {
      "id": "u01-f14",
      "fact": {
        "tr": "Zehirli (toksik) maddeler kuru kafa sembolü taşır ve solunmamalıdır.",
        "en": "Poisonous (toxic) substances carry the skull symbol and should not be inhaled.",
        "de": "Giftige (toxische) Stoffe tragen das Totenkopf-Symbol und sollten nicht eingeatmet werden.",
        "fr": "Les substances toxiques (toxiques) portent le symbole du crâne et ne doivent pas être inhalées.",
        "ru": "Ядовитые (токсичные) вещества обозначают знаком «череп со скрещёнными костями»; их пары нельзя вдыхать.",
        "ar": "تحمل المواد السامة رمز الجمجمة، ويجب عدم استنشاقها.",
        "zh": "有毒物质带有骷髅标志，不得吸入。",
        "ku": "Madeyên jehrî (toksîk) sembola qoqê hildigirin û divê neyên hilmijandin."
      },
      "trap": {
        "tr": "Kuru kafa sembolü radyoaktif ışıma yapan maddeleri belirtir.",
        "en": "The skull symbol indicates substances that emit radioactive radiation.",
        "de": "Das Totenkopfsymbol weist auf Stoffe hin, die radioaktive Strahlung aussenden.",
        "fr": "Le symbole du crâne indique les substances qui émettent des rayonnements radioactifs.",
        "ru": "Знак «череп со скрещёнными костями» обозначает радиоактивные вещества.",
        "ar": "يدل رمز الجمجمة على المواد التي تُصدر إشعاعاً نووياً (المواد المشعة).",
        "zh": "骷髅标志表示具有放射性的物质。",
        "ku": "Sembola qoqê madeyên ku tîrêjên radyoaktîf belav dikin nîşan dide."
      },
      "whyTrapIsFalse": {
        "tr": "Kuru kafa akut zehirliliği (toksisiteyi) gösterir; radyoaktif maddeler üç kanatlı radyasyon (yonca) simgesiyle ayrıca belirtilir.",
        "en": "The skull and crossbones indicates acute toxicity; radioactive materials are marked separately with the three-bladed radiation (trefoil) symbol.",
        "de": "Totenkopf mit Knochen bedeutet akute Toxizität; radioaktive Stoffe werden gesondert mit dem dreiflügeligen Strahlenwarnzeichen gekennzeichnet.",
        "fr": "La tête de mort indique une toxicité aiguë ; les matières radioactives sont signalées séparément par le trèfle de radioactivité à trois pales.",
        "ru": "Череп со скрещёнными костями означает острую токсичность; радиоактивные вещества обозначают отдельным знаком радиационной опасности (трилистником).",
        "ar": "الجمجمة والعظمتان تدلان على السمّية الحادة؛ أما المواد المشعة فتُميَّز برمز الإشعاع ذي الشفرات الثلاث.",
        "zh": "骷髅头表示急性毒性；放射性物质另用三叶形电离辐射标志表示。",
        "ku": "Sembola qoqê jehrîbûna tûj (akût) nîşan dide; madeyên radyoaktîf bi cuda, bi sembola radyasyonê ya sêpelî tên nîşankirin."
      }
    },
    {
      "id": "u01-f15",
      "fact": {
        "tr": "Derişik asit seyreltilirken asidin üzerine su dökülmez; açığa çıkan ısıyla sıçrama olmaması için asit suya yavaş yavaş eklenir.",
        "en": "When a concentrated acid is diluted, water is never poured onto the acid; the acid is added slowly to the water so that the heat released does not cause splashing.",
        "de": "Beim Verdünnen einer konzentrierten Säure wird nie Wasser auf die Säure gegossen; die Säure wird langsam ins Wasser gegeben, damit die frei werdende Wärme kein Verspritzen verursacht.",
        "fr": "Pour diluer un acide concentré, on ne verse jamais l'eau sur l'acide ; on ajoute lentement l'acide à l'eau afin que la chaleur dégagée ne provoque pas de projections.",
        "ru": "При разбавлении концентрированной кислоты воду в кислоту не льют; кислоту медленно добавляют в воду, чтобы выделяющееся тепло не вызвало разбрызгивания.",
        "ar": "عند تخفيف حمض مركَّز لا يُسكب الماء على الحمض؛ بل يُضاف الحمض ببطء إلى الماء حتى لا تسبب الحرارة المنطلقة تناثر السائل.",
        "zh": "稀释浓酸时不能把水倒入酸中；应将酸缓慢加入水中，以免放出的热量引起飞溅。",
        "ku": "Dema asîda tîr tê sistkirin, av bi ser asîdê de nayê rijandin; ji bo ku germa derdikeve nebe sedema pijiqînê, asîd hêdî hêdî li avê tê zêdekirin."
      },
      "trap": {
        "tr": "Derişik asit seyreltilirken asidin üzerine hızla soğuk su dökülmelidir.",
        "en": "When diluting concentrated acid, cold water should be quickly poured over it.",
        "de": "Beim Verdünnen von konzentrierter Säure sollte diese schnell mit kaltem Wasser übergossen werden.",
        "fr": "Lors de la dilution d'un acide concentré, il convient de verser rapidement de l'eau froide dessus.",
        "ru": "При разбавлении концентрированной кислоты в неё нужно быстро налить холодную воду.",
        "ar": "عند تخفيف الحمض المركز يجب سكب الماء البارد عليه بسرعة.",
        "zh": "稀释浓酸时，应迅速向酸中倒入冷水。",
        "ku": "Dema asîda tîr tê sistkirin, divê bi lez ava sar bi ser de were rijandin."
      },
      "whyTrapIsFalse": {
        "tr": "Derişik asidin suyla karışması çok ekzotermiktir; asidin üzerine su dökülürse az miktardaki su anında kaynayıp asidi sıçratır. Bu yüzden asit suya yavaş yavaş eklenir.",
        "en": "Mixing concentrated acid with water is strongly exothermic; if water is poured onto acid, the small amount of water boils instantly and spatters acid. That is why acid is added slowly to water.",
        "de": "Das Mischen konzentrierter Säure mit Wasser ist stark exotherm; gießt man Wasser auf Säure, siedet die kleine Wassermenge sofort und verspritzt Säure. Deshalb gibt man die Säure langsam ins Wasser.",
        "fr": "Mélanger un acide concentré avec l'eau est très exothermique ; si l'on verse l'eau sur l'acide, la petite quantité d'eau bout instantanément et projette de l'acide. On ajoute donc l'acide lentement dans l'eau.",
        "ru": "Смешивание концентрированной кислоты с водой сильно экзотермично; если лить воду в кислоту, небольшое количество воды мгновенно вскипает и разбрызгивает кислоту. Поэтому кислоту медленно вливают в воду.",
        "ar": "مزج الحمض المركّز بالماء شديد الطرد للحرارة؛ فإذا صُبّ الماء على الحمض تغلي الكمية القليلة من الماء فوراً وتتطاير قطرات الحمض. لذلك يُضاف الحمض إلى الماء ببطء.",
        "zh": "浓酸与水混合强烈放热；若把水倒入酸中，少量的水会立即沸腾并使酸飞溅。因此应把酸缓慢加入水中。",
        "ku": "Tevlîbûna asîda tîr bi avê re pir ekzotermîk e; heke av bi ser asîdê de were rijandin, ava hindik di cih de dikele û asîdê dipijiqîne. Ji ber vê yekê asîd hêdî hêdî li avê tê zêdekirin."
      }
    },
    {
      "id": "u01-f16",
      "fact": {
        "tr": "Laboratuvarda kimyasal maddelerin koklanması ve tadına bakılması kesinlikle yasaktır.",
        "en": "Smelling and tasting chemicals in the laboratory is strictly prohibited.",
        "de": "Das Riechen und Schmecken von Chemikalien im Labor ist strengstens untersagt.",
        "fr": "Il est strictement interdit de sentir et de goûter des produits chimiques en laboratoire.",
        "ru": "Нюхать и пробовать химические вещества в лаборатории строго запрещено.",
        "ar": "يُمنع منعاً باتاً شمّ المواد الكيميائية وتذوّقها في المختبر.",
        "zh": "严禁在实验室内嗅闻和品尝化学品。",
        "ku": "Di laboratuwarê de bêhnkirin û tamkirina madeyên kîmyewî bi tundî qedexe ye."
      },
      "trap": {
        "tr": "Organik çözücülerin saflığı koklanarak tayin edilebilir.",
        "en": "The purity of organic solvents can be determined by smell.",
        "de": "Die Reinheit organischer Lösungsmittel lässt sich anhand des Geruchs bestimmen.",
        "fr": "La pureté des solvants organiques peut être déterminée par l'odeur.",
        "ru": "Чистоту органических растворителей можно определить по запаху.",
        "ar": "يمكن تحديد نقاوة المذيبات العضوية بشمّها.",
        "zh": "有机溶剂的纯度可以通过气味来判断。",
        "ku": "Paqijiya helkerên organîk bi bêhnkirinê dikare were destnîşankirin."
      },
      "whyTrapIsFalse": {
        "tr": "Koku saflık hakkında güvenilir bilgi vermez ve buharın solunması zehirlenmeye yol açabilir; saflık erime ve kaynama noktası gibi ölçümlerle belirlenir.",
        "en": "Odour gives no reliable information about purity, and inhaling the vapour can cause poisoning; purity is checked by measurements such as melting and boiling points.",
        "de": "Der Geruch sagt nichts Verlässliches über die Reinheit aus, und das Einatmen der Dämpfe kann zu Vergiftungen führen; die Reinheit prüft man über Messungen wie Schmelz- und Siedepunkt.",
        "fr": "L'odeur ne renseigne pas de façon fiable sur la pureté et inhaler les vapeurs peut provoquer une intoxication ; la pureté se vérifie par des mesures comme les points de fusion et d'ébullition.",
        "ru": "Запах не даёт надёжных сведений о чистоте, а вдыхание паров может вызвать отравление; чистоту проверяют измерениями, например температур плавления и кипения.",
        "ar": "الرائحة لا تعطي معلومات موثوقة عن النقاوة، واستنشاق الأبخرة قد يسبب التسمم؛ وتُحدَّد النقاوة بقياسات مثل درجتي الانصهار والغليان.",
        "zh": "气味不能可靠地反映纯度，吸入蒸气还可能导致中毒；纯度应通过测定熔点、沸点等来判断。",
        "ku": "Bêhn derbarê paqijiyê de agahiyeke bawerbar nade û hilmijandina buharê dikare bibe sedema jehrîbûnê; paqijî bi pîvanên wekî xala helînê û xala kelînê tê diyarkirin."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u01-c01",
      "conceptA": {
        "tr": "Simya",
        "en": "Alchemy",
        "de": "Alchemie",
        "fr": "Alchimie",
        "ru": "Алхимия",
        "ar": "الخيمياء",
        "zh": "炼金术",
        "ku": "Alkîmî"
      },
      "conceptB": {
        "tr": "Kimya",
        "en": "Chemistry",
        "de": "Chemie",
        "fr": "Chimie",
        "ru": "Современная химия",
        "ar": "الكيمياء",
        "zh": "化学",
        "ku": "Kîmya"
      },
      "distinction": {
        "tr": "Simya deneme-yanılmaya dayalı bir uğraşken kimya sistematik deney ve ölçüme dayalı pozitif bilimdir.",
        "en": "While alchemy is an endeavor based on trial and error, chemistry is a positive science based on systematic experimentation and measurement.",
        "de": "Während die Alchemie ein auf Versuch und Irrtum basierendes Unterfangen ist, ist die Chemie eine positive Wissenschaft, die auf systematischem Experimentieren und Messen basiert.",
        "fr": "Alors que l'alchimie est une entreprise basée sur des essais et des erreurs, la chimie est une science positive basée sur l'expérimentation et la mesure systématiques.",
        "ru": "Алхимия опирается на метод проб и ошибок; современная химия — наука, основанная на систематических экспериментах и измерениях.",
        "ar": "الخيمياء نشاط يعتمد على التجربة والخطأ، أما الكيمياء فعلم وضعي يقوم على التجريب المنهجي والقياس.",
        "zh": "炼金术是以反复试错为基础的活动，而化学是以系统实验和测量为基础的实证科学。",
        "ku": "Alkîmî karekî li ser ceribandin û şaşiyê ye; kîmya zanisteke pozîtîf e ku li ser ceribandin û pîvandina sîstematîk ava bûye."
      }
    },
    {
      "id": "u01-c02",
      "conceptA": {
        "tr": "Element",
        "en": "element",
        "de": "Element",
        "fr": "élément",
        "ru": "Элемент",
        "ar": "العنصر",
        "zh": "元素",
        "ku": "Element"
      },
      "conceptB": {
        "tr": "Bileşik",
        "en": "compound",
        "de": "Verbindung",
        "fr": "composé",
        "ru": "Соединение",
        "ar": "المركب",
        "zh": "化合物",
        "ku": "Pêkhate"
      },
      "distinction": {
        "tr": "Element tek tür atomdan oluşur; bileşik ise farklı tür atomların belirli oranlarda birleşmesiyle oluşan saf maddedir.",
        "en": "An element consists of a single kind of atom, whereas a compound is a pure substance formed when atoms of different kinds combine in fixed proportions.",
        "de": "Ein Element besteht aus nur einer Atomart, eine Verbindung dagegen ist ein Reinstoff, in dem Atome verschiedener Art in festen Verhältnissen verbunden sind.",
        "fr": "Un élément ne contient qu'une seule sorte d'atomes, alors qu'un composé est une substance pure formée d'atomes de sortes différentes combinés dans des proportions fixes.",
        "ru": "Элемент состоит из атомов одного вида; соединение — чистое вещество, образованное атомами разных видов, объединёнными в определённых соотношениях.",
        "ar": "العنصر يتكوّن من نوع واحد من الذرات، أما المركب فهو مادة نقية تتكوّن من اتحاد ذرات من أنواع مختلفة بنسب ثابتة.",
        "zh": "元素只由一种原子组成，而化合物是由不同种类的原子按固定比例结合而成的纯净物。",
        "ku": "Element ji yek cure atoman pêk tê; pêkhate jî madeyeke paqij e ku ji yekbûna atomên cureyên cuda bi rêjeyên sabît çêdibe."
      }
    },
    {
      "id": "u01-c03",
      "conceptA": {
        "tr": "Nitel Analiz",
        "en": "Qualitative Analysis",
        "de": "Qualitative Analyse",
        "fr": "Analyse qualitative",
        "ru": "Качественный анализ",
        "ar": "التحليل النوعي",
        "zh": "定性分析",
        "ku": "Analîza Çawaniyê"
      },
      "conceptB": {
        "tr": "Nicel Analiz",
        "en": "Quantitative Analysis",
        "de": "Quantitative Analyse",
        "fr": "Analyse quantitative",
        "ru": "Количественный анализ",
        "ar": "التحليل الكمي",
        "zh": "定量分析",
        "ku": "Analîza Çendaniyê"
      },
      "distinction": {
        "tr": "Nitel analiz \"ne var?\" sorusuna, nicel analiz \"ne kadar var?\" sorusuna cevap verir.",
        "en": "Qualitative analysis answers the question “what is present?”; quantitative analysis answers “how much is present?”.",
        "de": "Die qualitative Analyse beantwortet die Frage „Was ist vorhanden?“, die quantitative Analyse die Frage „Wie viel ist vorhanden?“.",
        "fr": "L'analyse qualitative répond à la question « qu'y a-t-il ? », l'analyse quantitative à la question « combien y en a-t-il ? ».",
        "ru": "Качественный анализ отвечает на вопрос „что содержится?“, количественный анализ — на вопрос „сколько содержится?“.",
        "ar": "يجيب التحليل النوعي عن سؤال «ماذا يوجد؟»، ويجيب التحليل الكمي عن سؤال «كم يوجد؟».",
        "zh": "定性分析回答“有什么？”的问题，定量分析回答“有多少？”的问题。",
        "ku": "Analîza çawaniyê bersiva pirsa “çi heye?” dide, analîza çendaniyê bersiva pirsa “çiqas heye?” dide."
      }
    },
    {
      "id": "u01-c04",
      "conceptA": {
        "tr": "Büret",
        "en": "burette",
        "de": "Bürette",
        "fr": "burette",
        "ru": "Бюретка",
        "ar": "السحاحة",
        "zh": "滴定管",
        "ku": "Buret"
      },
      "conceptB": {
        "tr": "Pipet",
        "en": "pipette",
        "de": "Pipette",
        "fr": "pipette",
        "ru": "Пипетка",
        "ar": "الماصة",
        "zh": "移液管",
        "ku": "Pîpet"
      },
      "distinction": {
        "tr": "Büret musluklu olup titrasyonda sıvıyı damla damla eklemek için, pipet ise küçük ve belirli hacimdeki sıvıyı çekip aktarmak için kullanılır.",
        "en": "A burette has a stopcock and is used for dropwise addition in titration; a pipette transfers small, measured volumes of liquid.",
        "de": "Eine Bürette besitzt einen Hahn und dient zum tropfenweisen Zugeben bei der Titration; eine Pipette überträgt kleine, abgemessene Flüssigkeitsvolumina.",
        "fr": "La burette possède un robinet et sert à l'ajout goutte à goutte lors du titrage ; la pipette sert à transférer de petits volumes mesurés de liquide.",
        "ru": "Бюретка имеет кран и служит для покапельного добавления жидкости при титровании; пипетка служит для отбора и переноса небольшого точно отмеренного объёма жидкости.",
        "ar": "السحاحة: أداة مزودة بصنبور يُضاف بها السائل قطرةً قطرةً في المعايرة؛ أما الماصة فأداة تُسحب بها كمية صغيرة محددة الحجم من السائل وتُنقل إلى وعاء آخر.",
        "zh": "滴定管带有活塞，用于滴定时逐滴加入液体；而移液管用于吸取并转移少量一定体积的液体。",
        "ku": "Buret xwedî şîrek e û di tîtrasyonê de ji bo zêdekirina şileyê dilop bi dilop tê bikaranîn; pîpet jî ji bo kişandin û veguhestina qebareyên piçûk û diyar ên şileyê tê bikaranîn."
      }
    },
    {
      "id": "u01-c05",
      "conceptA": {
        "tr": "Erlenmayer",
        "en": "Erlenmeyer Flask",
        "de": "Erlenmeyerkolben",
        "fr": "Fiole d'Erlenmeyer",
        "ru": "Колба Эрленмейера",
        "ar": "دورق إرلنماير",
        "zh": "锥形瓶",
        "ku": "Erlenmeyer"
      },
      "conceptB": {
        "tr": "Balon Joje",
        "en": "Volumetric Flask",
        "de": "Messkolben",
        "fr": "Fiole jaugée",
        "ru": "Мерная колба",
        "ar": "الدورق الحجمي",
        "zh": "容量瓶",
        "ku": "Balona pîvanê"
      },
      "distinction": {
        "tr": "Erlenmayer çalkalama ve titrasyonda; balon joje ise tam hacimde hassas derişimli çözelti hazırlamada kullanılır.",
        "en": "The Erlenmeyer flask is used for shaking and titration; the volumetric flask is used to prepare a solution of exact concentration at an exact volume.",
        "de": "Der Erlenmeyerkolben wird zum Schütteln und Titrieren verwendet; der Messkolben dient zur Herstellung einer Lösung genauer Konzentration mit genauem Volumen.",
        "fr": "La fiole d'Erlenmeyer sert à l'agitation et au titrage ; la fiole jaugée sert à préparer une solution de concentration précise à un volume exact.",
        "ru": "Колба Эрленмейера применяется при перемешивании растворов и титровании; мерная колба применяется для приготовления раствора точной концентрации в точно заданном объёме.",
        "ar": "يُستخدم دورق إرلنماير في الرج والمعايرة؛ أما الدورق الحجمي فيُستخدم لتحضير محلول دقيق التركيز بحجم محدد تمامًا.",
        "zh": "锥形瓶用于振荡和滴定；而容量瓶用于配制体积准确、浓度精确的溶液。",
        "ku": "Erlenmeyer ji bo hejandin û tîtrasyonê tê bikaranîn; balona pîvanê jî ji bo amadekirina çareseriyeke bi qebare û tîrbûna tam rast tê bikaranîn."
      }
    },
    {
      "id": "u01-c06",
      "conceptA": {
        "tr": "Zaç Yağı (H2SO4)",
        "en": "Oil of Vitriol (H2SO4)",
        "de": "Vitriolöl (H2SO4)",
        "fr": "Huile de vitriol (H2SO4)",
        "ru": "Купоросное масло (H2SO4)",
        "ar": "زيت الزاج (H2SO4)",
        "zh": "矾油(H2SO4)",
        "ku": "Rûnê zaçê (H2SO4)"
      },
      "conceptB": {
        "tr": "Kezzap (HNO3)",
        "en": "Aqua fortis (HNO3)",
        "de": "Scheidewasser (HNO3)",
        "fr": "Eau-forte (HNO3)",
        "ru": "Крепкая водка (HNO3)",
        "ar": "ماء الفضة (HNO3)",
        "zh": "硝镪水(HNO3)",
        "ku": "Kezzap (HNO3)"
      },
      "distinction": {
        "tr": "Zaç yağı sülfürik asit olup akü asidi olarak bilinir; kezzap ise nitrik asit olup gübre ve patlayıcı üretiminde kullanılır.",
        "en": "Oil of vitriol is sulfuric acid and is known as battery acid; aqua fortis (kezzap) is nitric acid and is used in fertilizer and explosives production.",
        "de": "Vitriolöl ist Schwefelsäure (Batteriesäure); Scheidewasser (Kezzap) ist Salpetersäure und dient der Düngemittel- und Sprengstoffherstellung.",
        "fr": "L'huile de vitriol est de l'acide sulfurique (acide de batterie) ; l'eau-forte (kezzap) est de l'acide nitrique utilisé pour les engrais et explosifs.",
        "ru": "Купоросное масло (H2SO4) — серная кислота, известная как аккумуляторная кислота; крепкая водка (HNO3) — азотная кислота, которую используют в производстве удобрений и взрывчатых веществ.",
        "ar": "زيت الزاج هو حمض الكبريتيك ويُعرف بحمض البطاريات؛ أما ماء الفضة فهو حمض النيتريك ويُستخدم في صناعة الأسمدة والمتفجرات.",
        "zh": "矾油即硫酸，俗称蓄电池酸；而硝镪水即硝酸，用于生产化肥和炸药。",
        "ku": "Rûnê zaçê asîda sulfurîk e û wekî asîda akuyê tê nasîn; kezzap asîda nîtrîk e û di hilberîna peyînê kîmyewî û teqîneran de tê bikaranîn."
      }
    },
    {
      "id": "u01-c07",
      "conceptA": {
        "tr": "Fiziksel Değişim",
        "en": "Physical Change",
        "de": "Physikalische Veränderung",
        "fr": "Changement physique",
        "ru": "Физическое явление",
        "ar": "التغير الفيزيائي",
        "zh": "物理变化",
        "ku": "Guherîna Fîzîkî"
      },
      "conceptB": {
        "tr": "Kimyasal Değişim",
        "en": "Chemical Change",
        "de": "Chemische Veränderung",
        "fr": "Changement chimique",
        "ru": "Химическое явление",
        "ar": "التغير الكيميائي",
        "zh": "化学变化",
        "ku": "Guherîna Kîmyewî"
      },
      "distinction": {
        "tr": "Fiziksel değişimde maddenin iç yapısı ve kimliği korunur; kimyasal değişimde yeni kimyasal türler (yeni maddeler) oluşur.",
        "en": "In a physical change, the internal structure and identity of the substance are preserved; in a chemical change, new chemical species (new substances) are formed.",
        "de": "Physikalische Veränderung bedeutet, dass die innere Struktur und die Identität des Stoffes erhalten bleiben; bei einer chemischen Veränderung entstehen neue chemische Spezies (neue Stoffe).",
        "fr": "Changement physique : la structure interne et l'identité de la substance sont conservées ; changement chimique : de nouvelles espèces chimiques (de nouvelles substances) se forment.",
        "ru": "Физическое явление сохраняет внутреннее строение и природу вещества; химическое явление приводит к образованию новых химических частиц (новых веществ).",
        "ar": "في التغير الفيزيائي تبقى البنية الداخلية للمادة وهويتها كما هي؛ أما في التغير الكيميائي فتتكوّن أنواع كيميائية جديدة (مواد جديدة).",
        "zh": "物理变化不改变物质的内部结构和本性；而化学变化有新的化学粒子（即新物质）生成。",
        "ku": "Di guherîna fîzîkî de avahiya navxweyî û nasnameya madeyê tê parastin; di guherîna kîmyewî de cureyên kîmyewî yên nû (madeyên nû) çêdibin."
      }
    },
    {
      "id": "u01-c08",
      "conceptA": {
        "tr": "Toksik Madde",
        "en": "Toxic Substance",
        "de": "Giftiger Stoff",
        "fr": "Substance toxique",
        "ru": "Токсичное вещество",
        "ar": "مادة سامة",
        "zh": "有毒物质",
        "ku": "Madeya Toksîk"
      },
      "conceptB": {
        "tr": "Aşındırıcı (Korozif) Madde",
        "en": "Corrosive Substance",
        "de": "Ätzender Stoff",
        "fr": "Substance corrosive",
        "ru": "Едкое (коррозионное) вещество",
        "ar": "مادة أكّالة",
        "zh": "腐蚀性物质",
        "ku": "Madeya Xwarker"
      },
      "distinction": {
        "tr": "Toksik maddeler zehirli olup kuru kafa piktogramı taşır; aşındırıcı maddeler cilt ve metalleri yakarak aşındıran maddelerdir.",
        "en": "Toxic substances are poisonous and bear the skull pictogram; corrosive substances attack and destroy skin and metals.",
        "de": "Giftiger Stoff bedeutet: toxisch, mit dem Totenkopf-Piktogramm gekennzeichnet; ein ätzender Stoff greift Haut und Metalle an und zerstört sie.",
        "fr": "Substance toxique : elle est vénéneuse et porte le pictogramme tête de mort ; substance corrosive : elle attaque et détruit la peau et les métaux.",
        "ru": "Токсичное вещество вызывает отравление и обозначается пиктограммой „череп со скрещёнными костями“; едкое (коррозионное) вещество разрушает кожу и металлы.",
        "ar": "مادة سامة: مادة تُسبّب التسمم ويُرمز إليها بالجمجمة؛ مادة أكّالة: مادة تُتلف الجلد والفلزات وتُسبّب تآكلها.",
        "zh": "有毒物质具有毒性，带有骷髅标志；而腐蚀性物质会腐蚀并损伤皮肤和金属。",
        "ku": "Madeya toksîk jehrî ye û pîktograma qoqê hildigire; madeya xwarker çerm û metalan dişewitîne û dixwe."
      }
    }
  ],
  "sequences": [
    {
      "id": "u01-s01",
      "title": {
        "tr": "Standart Çözelti Hazırlama",
        "en": "Preparation of a Standard Solution",
        "de": "Herstellung einer Standardlösung",
        "fr": "Préparation d'une solution étalon",
        "ru": "Приготовление стандартного раствора",
        "ar": "تحضير محلول قياسي",
        "zh": "标准溶液的配制",
        "ku": "Amadekirina Çareseriya Standard"
      },
      "steps": [
        {
          "tr": "Hassas terazide katı tartımı yapılır",
          "en": "The solid is weighed on a precision balance",
          "de": "Der Feststoff wird auf einer Präzisionswaage abgewogen",
          "fr": "Le solide est pesé sur une balance de précision",
          "ru": "Навеску твёрдого вещества взвешивают на точных весах",
          "ar": "يُوزن المذاب الصلب بميزان دقيق",
          "zh": "用精密天平称量固体",
          "ku": "Madeya hişk bi terazûya hesas tê kişandin"
        },
        {
          "tr": "Katı, beherde az miktar saf suda çözülür",
          "en": "It is dissolved in a small amount of pure water in a beaker",
          "de": "Er wird im Becherglas in wenig reinem Wasser gelöst",
          "fr": "Il est dissous dans un peu d'eau pure dans un bécher",
          "ru": "Твёрдое вещество растворяют в небольшом количестве дистиллированной воды в химическом стакане",
          "ar": "يُذاب في كمية قليلة من الماء النقي داخل كأس زجاجية",
          "zh": "在烧杯中用少量纯水溶解",
          "ku": "Madeya hişk di beherê de di hindek ava paqij de tê helandin"
        },
        {
          "tr": "Balon jojeye aktarılır",
          "en": "The solution is transferred to the volumetric flask",
          "de": "Die Lösung wird in den Messkolben überführt",
          "fr": "La solution est transvasée dans la fiole jaugée",
          "ru": "Раствор переносят в мерную колбу",
          "ar": "يُنقل المحلول إلى الدورق الحجمي",
          "zh": "将溶液转移至容量瓶中",
          "ku": "Çareserî tê veguhestin nav balona pîvanê"
        },
        {
          "tr": "Çizgiye kadar saf su eklenip çalkalanır",
          "en": "Pure water is added up to the mark and the flask is shaken",
          "de": "Reines Wasser wird bis zur Eichmarke aufgefüllt und der Kolben geschüttelt",
          "fr": "On complète avec de l'eau pure jusqu'au trait de jauge et on agite",
          "ru": "Доливают дистиллированную воду до метки и перемешивают",
          "ar": "يُضاف الماء النقي حتى العلامة ويُرج الدورق",
          "zh": "加纯水至刻度线并摇匀",
          "ku": "Ava paqij heta xetê tê zêdekirin û tê hejandin"
        }
      ]
    },
    {
      "id": "u01-s02",
      "title": {
        "tr": "Basit Damıtma",
        "en": "Simple Distillation",
        "de": "Einfache Destillation",
        "fr": "Distillation simple",
        "ru": "Простая перегонка",
        "ar": "التقطير البسيط",
        "zh": "简单蒸馏",
        "ku": "Distîlasyona Sade"
      },
      "steps": [
        {
          "tr": "Balona sıvı karışım konur",
          "en": "The liquid mixture is placed in the flask",
          "de": "Das Flüssigkeitsgemisch wird in den Rundkolben gegeben",
          "fr": "Le mélange liquide est placé dans le ballon",
          "ru": "Жидкую смесь наливают в колбу",
          "ar": "يُوضع الخليط السائل في الدورق",
          "zh": "将液体混合物放入烧瓶中",
          "ku": "Tevliheviya şile di balonê de tê danîn"
        },
        {
          "tr": "Isıtıcı açılır ve karışım kaynatılır",
          "en": "The heater is turned on and the mixture is boiled",
          "de": "Die Heizquelle wird eingeschaltet und das Gemisch zum Sieden gebracht",
          "fr": "On allume le chauffage et on porte le mélange à ébullition",
          "ru": "Включают нагреватель и доводят смесь до кипения",
          "ar": "يُشغَّل المسخن ويُغلى الخليط",
          "zh": "打开加热器，使混合物沸腾",
          "ku": "Germker tê vêxistin û tevlihevî tê kelandin"
        },
        {
          "tr": "Buharlaşan sıvı soğutucuya geçer",
          "en": "The vapor passes into the condenser",
          "de": "Der Dampf gelangt in den Kühler",
          "fr": "La vapeur passe dans le réfrigérant",
          "ru": "Пары поступают в холодильник",
          "ar": "يمر البخار إلى المكثف",
          "zh": "蒸气进入冷凝管",
          "ku": "Buhar derbasî sarkerê dibe"
        },
        {
          "tr": "Yoğuşan sıvı erlende toplanır",
          "en": "The condensed liquid is collected in the conical flask.",
          "de": "Die kondensierte Flüssigkeit wird im Erlenmeyerkolben gesammelt.",
          "fr": "Le liquide condensé est récupéré dans la fiole conique.",
          "ru": "Сконденсировавшуюся жидкость собирают в коническую колбу",
          "ar": "يُجمع السائل المتكثف في الدورق المخروطي",
          "zh": "冷凝液收集在锥形瓶中",
          "ku": "Şileya ku ji buharê çêdibe di erlenmeyerê de tê berhevkirin."
        }
      ]
    },
    {
      "id": "u01-s03",
      "title": {
        "tr": "Ayırma Hunisi ile Faz Ayırma",
        "en": "Phase Separation with Separatory Funnel",
        "de": "Phasentrennung mit Scheidetrichter",
        "fr": "Séparation de phases avec entonnoir séparateur",
        "ru": "Разделение фаз с помощью делительной воронки",
        "ar": "فصل الطورين بقمع الفصل",
        "zh": "用分液漏斗分液",
        "ku": "Veqetandina Fazan bi Qîfa Veqetandinê"
      },
      "steps": [
        {
          "tr": "Heterojen sıvı karışım huniye konur",
          "en": "The heterogeneous liquid mixture is placed in the funnel.",
          "de": "Die heterogene Flüssigkeitsmischung wird in den Trichter gegeben.",
          "fr": "Le mélange liquide hétérogène est placé dans l'entonnoir.",
          "ru": "Неоднородную жидкую смесь наливают в делительную воронку",
          "ar": "يُوضع الخليط السائل غير المتجانس في القمع",
          "zh": "将互不相溶的液体混合物倒入分液漏斗",
          "ku": "Tevliheviya şile ya heterojen di qîfa veqetandinê de tê danîn."
        },
        {
          "tr": "Huni çalkalanır ve biriken gazın basıncı alınır",
          "en": "The funnel is shaken and the built-up gas pressure is released.",
          "de": "Der Trichter wird geschüttelt und der entstandene Gasdruck abgelassen.",
          "fr": "On agite l'entonnoir et on libère la pression de gaz accumulée.",
          "ru": "Воронку встряхивают и сбрасывают давление накопившегося газа",
          "ar": "يُرجّ القمع ويُفرَّغ ضغط الغاز المتجمع فيه",
          "zh": "振荡分液漏斗并放气",
          "ku": "Qîf tê hejandin û zexta gaza kombûyî tê berdan."
        },
        {
          "tr": "Yoğunluk farkıyla fazların ayrılması beklenir",
          "en": "The mixture is left to stand until the phases separate by density difference",
          "de": "Man wartet, bis sich die Phasen aufgrund des Dichteunterschieds getrennt haben",
          "fr": "On laisse reposer jusqu'à ce que les phases se séparent par différence de densité",
          "ru": "Дают фазам расслоиться за счёт разности плотностей",
          "ar": "يُترك الخليط حتى ينفصل الطوران بسبب اختلاف الكثافة",
          "zh": "静置，待两相因密度不同而分层",
          "ku": "Tê hiştin heta ku faz ji ber cudahiya çiriyê ji hev veqetin"
        },
        {
          "tr": "Musluk açılarak alttaki faz ayrılır",
          "en": "The lower phase is separated by opening the tap.",
          "de": "Durch Öffnen des Hahns wird die untere Phase abgetrennt.",
          "fr": "La phase inférieure est séparée en ouvrant le robinet.",
          "ru": "Открывают кран и сливают нижнюю фазу",
          "ar": "يُفتح الصنبور ويُفصل الطور السفلي",
          "zh": "打开活塞，放出下层液体",
          "ku": "Bi vekirina şîrekê faza jêrîn tê berdan."
        }
      ]
    },
    {
      "id": "u01-s04",
      "title": {
        "tr": "Katı-Sıvı Süzme",
        "en": "Solid-Liquid Filtration",
        "de": "Fest-Flüssig-Filtration",
        "fr": "Filtration solide-liquide",
        "ru": "Фильтрование смеси твёрдого вещества и жидкости",
        "ar": "ترشيح خليط صلب-سائل",
        "zh": "固液过滤",
        "ku": "Parzûnkirina Hişk-Şile"
      },
      "steps": [
        {
          "tr": "Süzgeç kâğıdı koni şeklinde katlanır",
          "en": "The filter paper is folded into a cone shape",
          "de": "Das Filterpapier wird kegelförmig gefaltet",
          "fr": "Le papier filtre est plié en forme de cône",
          "ru": "Фильтровальную бумагу складывают конусом",
          "ar": "تُطوى ورقة الترشيح على شكل مخروط",
          "zh": "将滤纸折叠成圆锥形",
          "ku": "Kaxeza parzûnê bi şiklê konê tê qatkirin"
        },
        {
          "tr": "Huniye yerleştirilip ıslatılır",
          "en": "It is placed in the funnel and wetted.",
          "de": "Es wird in den Trichter gegeben und angefeuchtet.",
          "fr": "Il est placé dans l'entonnoir et mouillé.",
          "ru": "Фильтр помещают в воронку и смачивают",
          "ar": "تُوضع في القمع وتُبلَّل",
          "zh": "将滤纸放入漏斗并用水润湿",
          "ku": "Tê danîn nav qîfê û tê şilkirin."
        },
        {
          "tr": "Heterojen karışım baget yardımıyla huniye dökülür",
          "en": "The heterogeneous mixture is poured along a glass rod",
          "de": "Das heterogene Gemisch wird an einem Glasstab entlang eingegossen",
          "fr": "Le mélange hétérogène est versé le long d'une baguette de verre",
          "ru": "Неоднородную смесь выливают в воронку по стеклянной палочке",
          "ar": "يُسكب الخليط غير المتجانس في القمع بالاستعانة بساق زجاجية",
          "zh": "用玻璃棒引流，将非均匀混合物倒入漏斗",
          "ku": "Tevliheviya heterojen bi alîkariya çovika camê tê rijandin nav qîfê"
        },
        {
          "tr": "Süzüntü beherde toplanır",
          "en": "The filtrate is collected in the beaker.",
          "de": "Das Filtrat wird im Becherglas gesammelt.",
          "fr": "Le filtrat est récupéré dans le bécher.",
          "ru": "Фильтрат собирают в химический стакан",
          "ar": "يُجمع الراشح في الكأس الزجاجية",
          "zh": "滤液收集在烧杯中",
          "ku": "Şileya parzûnkirî (fîltrat) di beherê de tê berhevkirin."
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u01-twin01",
      "stem": {
        "tr": "Şekilde tuzlu sudan saf su elde etmek için kurulmuş bir basit damıtma düzeneği verilmiştir. X ve Y soğutucunun su bağlantılarını, K toplama kabını, T ise termometreyi göstermektedir.\nDüzenekle ilgili aşağıdaki yargılardan hangileri doğrudur?\nI. Soğutma suyu X'ten girip Y'den çıkmalıdır.\nII. Damıtma sonunda tuz K kabında toplanır.\nIII. T termometresi, soğutucuya geçen buharın sıcaklığını ölçer.",
        "en": "The figure shows a simple distillation set-up used to obtain pure water from salt water. X and Y are the water connections of the condenser, K is the receiving flask and T is the thermometer.\nWhich of the following statements about the set-up are correct?\nI. Cooling water should enter at X and leave at Y.\nII. At the end of the distillation the salt collects in flask K.\nIII. Thermometer T measures the temperature of the vapour passing into the condenser.",
        "de": "Die Abbildung zeigt eine einfache Destillationsapparatur zur Gewinnung von reinem Wasser aus Salzwasser. X und Y sind die Wasseranschlüsse des Kühlers, K ist die Vorlage und T das Thermometer.\nWelche der folgenden Aussagen über die Apparatur sind richtig?\nI. Das Kühlwasser muss bei X eintreten und bei Y austreten.\nII. Am Ende der Destillation sammelt sich das Salz in der Vorlage K.\nIII. Das Thermometer T misst die Temperatur des Dampfes, der in den Kühler übergeht.",
        "fr": "La figure représente un montage de distillation simple destiné à obtenir de l'eau pure à partir d'eau salée. X et Y sont les raccords d'eau du réfrigérant, K est le récipient collecteur et T le thermomètre.\nLesquelles des affirmations suivantes sur le montage sont exactes ?\nI. L'eau de refroidissement doit entrer par X et sortir par Y.\nII. À la fin de la distillation, le sel se rassemble dans le récipient K.\nIII. Le thermomètre T mesure la température de la vapeur qui passe dans le réfrigérant.",
        "ru": "На рисунке изображена установка для простой перегонки, с помощью которой из солёной воды получают чистую воду. X и Y — патрубки холодильника для воды, K — приёмник, T — термометр.\nКакие из утверждений об установке верны?\nI. Охлаждающая вода должна входить через X и выходить через Y.\nII. По окончании перегонки соль собирается в приёмнике K.\nIII. Термометр T измеряет температуру пара, поступающего в холодильник.",
        "ar": "يبيّن الشكل جهاز تقطير بسيطًا لاستخلاص الماء النقي من الماء المالح. يمثّل X وY وصلتَي الماء في المكثّف، وK وعاء الجمع، وT مقياس الحرارة.\nأيّ العبارات الآتية عن الجهاز صحيحة؟\nI. يجب أن يدخل ماء التبريد من X ويخرج من Y.\nII. في نهاية التقطير يتجمّع الملح في الوعاء K.\nIII. يقيس مقياس الحرارة T درجة حرارة البخار المارّ إلى المكثّف.",
        "zh": "图中是用盐水制取纯水的简单蒸馏装置。X 和 Y 是冷凝管的进出水口，K 是接收瓶，T 是温度计。\n关于该装置，下列说法中正确的是哪些？\nI. 冷却水应从 X 进入、从 Y 流出。\nII. 蒸馏结束时，盐聚集在接收瓶 K 中。\nIII. 温度计 T 测量的是进入冷凝管的蒸气的温度。",
        "ku": "Di şiklê de amûreke distîlasyona sade heye ku ji ava şor ava pak tê bidestxistin. X û Y girêdanên avê yên sarker in, K firaxa berhevkirinê ye û T jî germpîv e.\nKîjan ji van hukmên derbarê amûrê de rast in?\nI. Divê ava sarkirinê ji X bikeve û ji Y derkeve.\nII. Di dawiya distîlasyonê de xwê di firaxa K de kom dibe.\nIII. Germpîva T germahiya wê buharê dipîve ku derbasî sarker dibe."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "I only",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "II only",
          "de": "Nur II",
          "fr": "II seulement",
          "ru": "Только II",
          "ar": "II فقط",
          "zh": "仅 II",
          "ku": "Tenê II"
        },
        {
          "tr": "I ve II",
          "en": "I and II",
          "de": "I und II",
          "fr": "I et II",
          "ru": "I и II",
          "ar": "I و II",
          "zh": "I 和 II",
          "ku": "I û II"
        },
        {
          "tr": "I ve III",
          "en": "I and III",
          "de": "I und III",
          "fr": "I et III",
          "ru": "I и III",
          "ar": "I و III",
          "zh": "I 和 III",
          "ku": "I û III"
        },
        {
          "tr": "I, II ve III",
          "en": "I, II and III",
          "de": "I, II und III",
          "fr": "I, II et III",
          "ru": "I, II и III",
          "ar": "I و II و III",
          "zh": "I、II 和 III",
          "ku": "I, II û III"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "I doğrudur: soğutma suyu soğutucunun alt ucundaki X bağlantısından girip üst uçtaki Y'den çıkar; böylece ceket tamamen suyla dolar ve en soğuk su buharla toplama kabına yakın uçta karşılaşır. II yanlıştır: tuz uçucu olmadığından balonda kalır; K kabında yoğuşan saf su toplanır. III doğrudur: termometrenin haznesi yan borunun hizasında olduğundan soğutucuya geçen buharın sıcaklığını ölçer. Doğru yanıt: I ve III.",
        "en": "I is correct: cooling water enters through X at the lower end of the condenser and leaves through Y at the upper end, so the jacket fills completely and the coldest water meets the vapour near the receiver. II is false: salt is not volatile and stays in the boiling flask; pure condensed water collects in K. III is correct: the thermometer bulb is level with the side arm, so it measures the temperature of the vapour entering the condenser. Answer: I and III.",
        "de": "I ist richtig: Das Kühlwasser tritt am unteren Kühlerende bei X ein und am oberen Ende bei Y aus; so ist der Mantel vollständig gefüllt, und das kälteste Wasser trifft den Dampf nahe der Vorlage. II ist falsch: Salz ist nicht flüchtig und bleibt im Kolben; in K sammelt sich kondensiertes reines Wasser. III ist richtig: Die Thermometerkugel befindet sich auf Höhe des seitlichen Ansatzes und misst daher die Temperatur des in den Kühler strömenden Dampfes. Antwort: I und III.",
        "fr": "I est exacte : l'eau de refroidissement entre par X, à l'extrémité basse du réfrigérant, et sort par Y, à l'extrémité haute ; la double enveloppe est ainsi entièrement remplie et l'eau la plus froide rencontre la vapeur près du récipient collecteur. II est fausse : le sel n'est pas volatil et reste dans le ballon ; c'est l'eau pure condensée qui se rassemble dans K. III est exacte : le réservoir du thermomètre est au niveau du tube latéral, il mesure donc la température de la vapeur qui entre dans le réfrigérant. Réponse : I et III.",
        "ru": "I верно: охлаждающая вода входит через нижний патрубок X и выходит через верхний патрубок Y, поэтому рубашка полностью заполнена, и самая холодная вода встречается с паром у конца, ближнего к приёмнику. II неверно: соль нелетуча и остаётся в колбе; в приёмнике K собирается сконденсированная чистая вода. III верно: шарик термометра находится на уровне отводной трубки, поэтому он измеряет температуру пара, поступающего в холодильник. Ответ: I и III.",
        "ar": "العبارة I صحيحة: يدخل ماء التبريد من الوصلة X في الطرف السفلي للمكثّف ويخرج من Y في طرفه العلوي، فيمتلئ الغلاف تمامًا ويلتقي أبرد ماء بالبخار عند الطرف القريب من وعاء الجمع. العبارة II خاطئة: الملح غير متطاير فيبقى في الدورق، ويتجمّع في K الماء النقي المتكثّف. العبارة III صحيحة: مستودع مقياس الحرارة عند مستوى الأنبوب الجانبي، فهو يقيس درجة حرارة البخار الداخل إلى المكثّف. الإجابة: I و III.",
        "zh": "I 正确：冷却水从冷凝管下端的 X 口进入、从上端的 Y 口流出，这样夹套能完全充满水，最冷的水在靠近接收瓶的一端与蒸气相遇。II 错误：盐不挥发，留在蒸馏烧瓶中；K 中收集的是冷凝下来的纯水。III 正确：温度计的水银球与支管口相平，测量的是进入冷凝管的蒸气温度。答案：I 和 III。",
        "ku": "I rast e: ava sarkirinê ji girêdana X ya li dawiya jêrîn a sarker dikeve û ji Y ya li dawiya jorîn derdikeve; bi vî awayî kiras bi tevahî bi avê tije dibe û ava herî sar li aliyê nêzî firaxa berhevkirinê rastî buharê tê. II şaş e: xwê nafire, di balonê de dimîne; di K de ava pak a ku şile bûye kom dibe. III rast e: hezîneya germpîvê li hemberî boriya kêlekê ye, ji ber vê germahiya buhara ku derbasî sarker dibe dipîve. Bersiv: I û III."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 235,
        "markup": "<line x1=\"38\" y1=\"226\" x2=\"102\" y2=\"226\" class=\"qf-line\"/><path d=\"M60 224 L70 202 L80 224 Z\" class=\"qf-accent2\"/><path d=\"M63 70 L63 126.7 A34 34 0 1 0 77 126.7 L77 70\" class=\"qf-fill\"/><path d=\"M38.2 172 A34 34 0 0 0 101.8 172 Z\" class=\"qf-water\"/><rect x=\"60\" y=\"63\" width=\"20\" height=\"8\" class=\"qf-solid\"/><line x1=\"70\" y1=\"28\" x2=\"70\" y2=\"86\" class=\"qf-line\"/><circle cx=\"70\" cy=\"88\" r=\"3.2\" class=\"qf-accent\"/><text x=\"80\" y=\"38\" class=\"qf-strong\">T</text><polygon points=\"124.2,85.4 253.9,135.6 245.3,158 115.6,107.8\" class=\"qf-fill\"/><line x1=\"77\" y1=\"80\" x2=\"272\" y2=\"155.4\" class=\"qf-line\"/><line x1=\"272\" y1=\"155.4\" x2=\"272\" y2=\"182\" class=\"qf-line\"/><line x1=\"231.3\" y1=\"152.6\" x2=\"231.3\" y2=\"182\" class=\"qf-line\"/><text x=\"231.3\" y=\"198\" text-anchor=\"middle\" class=\"qf-strong\">X</text><line x1=\"137.3\" y1=\"90.5\" x2=\"137.3\" y2=\"62\" class=\"qf-line\"/><text x=\"137.3\" y=\"55\" text-anchor=\"middle\" class=\"qf-strong\">Y</text><polygon points=\"250,224 294,224 278,194 278,172 266,172 266,194\" class=\"qf-fill\"/><polygon points=\"252.5,220 291.5,220 287,211 257,211\" class=\"qf-water\"/><text x=\"300\" y=\"214\" class=\"qf-strong\">K</text><text x=\"186\" y=\"185\" text-anchor=\"middle\" class=\"qf-small\">{{cond}}</text>",
        "labels": {
          "cond": {
            "tr": "soğutucu",
            "en": "condenser",
            "de": "Kühler",
            "fr": "réfrigérant",
            "ru": "холодильник",
            "ar": "المكثّف",
            "zh": "冷凝管",
            "ku": "sarker"
          }
        }
      }
    },
    {
      "id": "u01-twin02",
      "stem": {
        "tr": "Aşağıda geleneksel adı verilen bileşiklerden hangisinin kimyasal formülü yanlıştır?",
        "en": "Which of the following conventionally named compounds has the wrong chemical formula?",
        "de": "Welche der folgenden konventionell benannten Verbindungen hat die falsche chemische Formel?",
        "fr": "Lequel des composés suivants nommés conventionnellement a la mauvaise formule chimique ?",
        "ru": "Для какого из соединений, приведённых под традиционными названиями, химическая формула указана неверно?",
        "ar": "أيّ المركبات الآتية، المذكورة بأسمائها التقليدية، صيغتها الكيميائية خاطئة؟",
        "zh": "下列用传统名称表示的化合物中，哪一种的化学式是错误的？",
        "ku": "Ji pêkhateyên jêrîn ên ku bi navên kevneşopî hatine dayîn, formula kîmyewî ya kîjanê şaş e?"
      },
      "options": [
        {
          "tr": "Zaç yağı: H2SO4",
          "en": "Oil of vitriol: H2SO4",
          "de": "Vitriolöl: H2SO4",
          "fr": "Huile de vitriol : H2SO4",
          "ru": "Купоросное масло: H2SO4",
          "ar": "زيت الزاج: H2SO4",
          "zh": "矾油：H2SO4",
          "ku": "Rûnê zaçê: H2SO4"
        },
        {
          "tr": "Kezzap: HNO3",
          "en": "Aqua fortis: HNO3",
          "de": "Scheidewasser: HNO3",
          "fr": "Eau-forte : HNO3",
          "ru": "Крепкая водка: HNO3",
          "ar": "ماء الفضة: HNO3",
          "zh": "硝镪水：HNO3",
          "ku": "Kezzap: HNO3"
        },
        {
          "tr": "Tuz ruhu: HCl",
          "en": "Spirit of salt: HCl",
          "de": "Salzsäure (Salzgeist): HCl",
          "fr": "Esprit de sel : HCl",
          "ru": "Соляной спирт: HCl",
          "ar": "روح الملح: HCl",
          "zh": "盐镪水：HCl",
          "ku": "Ruhê xwê: HCl"
        },
        {
          "tr": "Kireç taşı: CaCO3",
          "en": "Limestone: CaCO3",
          "de": "Kalkstein: CaCO3",
          "fr": "Calcaire : CaCO3",
          "ru": "Известняк: CaCO3",
          "ar": "الحجر الجيري: CaCO3",
          "zh": "石灰石：CaCO3",
          "ku": "Kevirê kilsê: CaCO3"
        },
        {
          "tr": "Sönmüş kireç: CaO",
          "en": "Slaked lime: CaO",
          "de": "Löschkalk: CaO",
          "fr": "Chaux éteinte : CaO",
          "ru": "Гашёная известь: CaO",
          "ar": "الجير المطفأ: CaO",
          "zh": "熟石灰：CaO",
          "ku": "Kilsa vemirî: CaO"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Sönmüş kireç Ca(OH)2'dir; CaO ise sönmemiş kirecin formülüdür. Sönmemiş kireç suyla tepkimeye girdiğinde sönmüş kireç oluşur: CaO + H2O → Ca(OH)2. Zaç yağı, kezzap, tuz ruhu ve kireç taşı için verilen formüller doğrudur.",
        "en": "Slaked lime is Ca(OH)2; CaO is the formula of quicklime. Quicklime reacts with water to give slaked lime: CaO + H2O → Ca(OH)2. The formulas given for oil of vitriol, aqua fortis, spirit of salt and limestone are correct.",
        "de": "Gelöschter Kalk (Löschkalk) ist Ca(OH)2; CaO ist die Formel von Branntkalk. Branntkalk reagiert mit Wasser zu Löschkalk: CaO + H2O → Ca(OH)2. Die für Vitriolöl, Scheidewasser, Salzgeist und Kalkstein angegebenen Formeln sind richtig.",
        "fr": "La chaux éteinte est Ca(OH)2 ; CaO est la formule de la chaux vive. La chaux vive réagit avec l'eau pour donner la chaux éteinte : CaO + H2O → Ca(OH)2. Les formules données pour l'huile de vitriol, l'eau-forte, l'esprit de sel et le calcaire sont correctes.",
        "ru": "Гашёная известь — это Ca(OH)2; CaO — формула негашёной извести. Негашёная известь реагирует с водой с образованием гашёной: CaO + H2O → Ca(OH)2. Формулы купоросного масла, крепкой водки, соляного спирта и известняка указаны верно.",
        "ar": "الجير المطفأ هو Ca(OH)2؛ أما CaO فهي صيغة الجير الحي. يتفاعل الجير الحي مع الماء مكوّناً الجير المطفأ: CaO + H2O → Ca(OH)2. أما الصيغ المعطاة لزيت الزاج وماء الفضة وروح الملح والحجر الجيري فصحيحة.",
        "zh": "熟石灰是 Ca(OH)2；CaO 是生石灰的化学式。生石灰与水反应生成熟石灰：CaO + H2O → Ca(OH)2。矾油、硝镪水、盐镪水和石灰石的化学式都是正确的。",
        "ku": "Kilsa vemirî Ca(OH)2 ye; CaO formula kilsa nevemirî ye. Dema kilsa nevemirî bi avê re dikeve reaksiyonê, kilsa vemirî çêdibe: CaO + H2O → Ca(OH)2. Formulên ku ji bo rûnê zaçê, kezzapê, ruhê xwê û kevirê kilsê hatine dayîn rast in."
      }
    },
    {
      "id": "u01-twin03",
      "stem": {
        "tr": "Simya ile ilgili aşağıdaki yargılardan hangileri doğrudur?\nI. Simyacılar damıtma, süzme ve kristallendirme gibi laboratuvar tekniklerini geliştirmiştir.\nII. Simyacıların hedefleri arasında değersiz metalleri altına dönüştürmek de vardı.\nIII. Simyacılar çalışmalarını nicel ölçümlere ve sınanabilir teorilere dayandırmıştır.",
        "en": "Which of the following statements about alchemy are correct?\nI. Alchemists developed laboratory techniques such as distillation, filtration and crystallisation.\nII. One of the alchemists' goals was to turn base metals into gold.\nIII. Alchemists based their work on quantitative measurements and testable theories.",
        "de": "Welche der folgenden Aussagen über die Alchemie sind richtig?\nI. Alchemisten entwickelten Labortechniken wie Destillation, Filtration und Kristallisation.\nII. Zu den Zielen der Alchemisten gehörte es, unedle Metalle in Gold zu verwandeln.\nIII. Alchemisten stützten ihre Arbeit auf quantitative Messungen und überprüfbare Theorien.",
        "fr": "Lesquelles des affirmations suivantes sur l'alchimie sont correctes ?\nI. Les alchimistes ont mis au point des techniques comme la distillation, la filtration et la cristallisation.\nII. L'un des buts des alchimistes était de transformer les métaux vils en or.\nIII. Les alchimistes fondaient leurs travaux sur des mesures quantitatives et des théories vérifiables.",
        "ru": "Какие из следующих утверждений об алхимии верны?\nI. Алхимики разработали такие лабораторные методы, как перегонка, фильтрование и кристаллизация.\nII. Одной из целей алхимиков было превращение неблагородных металлов в золото.\nIII. Алхимики опирались на количественные измерения и проверяемые теории.",
        "ar": "أيّ العبارات الآتية عن الخيمياء صحيحة؟\nI. طوّر الخيميائيون تقنيات مخبرية كالتقطير والترشيح والتبلور.\nII. كان من أهداف الخيميائيين تحويل الفلزات الخسيسة إلى ذهب.\nIII. بنى الخيميائيون أعمالهم على قياسات كمية ونظريات قابلة للاختبار.",
        "zh": "下列关于炼金术的说法中，哪些是正确的？\nI. 炼金术士发展了蒸馏、过滤和结晶等实验技术。\nII. 炼金术士的目标之一是把贱金属变成黄金。\nIII. 炼金术士的工作建立在定量测量和可检验的理论之上。",
        "ku": "Kîjan ji van hukmên li ser alkîmiyê rast in?\nI. Alkîmîstan teknîkên laboratuwarê yên wekî distîlasyon, parzûnkirin û krîstalbûnê pêş xistin.\nII. Yek ji armancên alkîmîstan veguherandina metalên bêqîmet bo zêr bû.\nIII. Alkîmîstan xebatên xwe li ser pîvanên hejmarî û teoriyên ceribandinbar ava kirin."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "Seulement I",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "Only II",
          "de": "Nur II",
          "fr": "Seulement II",
          "ru": "Только II",
          "ar": "II فقط",
          "zh": "仅 II",
          "ku": "Tenê II"
        },
        {
          "tr": "Yalnız III",
          "en": "Only III",
          "de": "Nur III",
          "fr": "Seulement III",
          "ru": "Только III",
          "ar": "III فقط",
          "zh": "仅 III",
          "ku": "Tenê III"
        },
        {
          "tr": "I ve II",
          "en": "I and II",
          "de": "I und II",
          "fr": "I et II",
          "ru": "I и II",
          "ar": "I و II",
          "zh": "I 和 II",
          "ku": "I û II"
        },
        {
          "tr": "I, II ve III",
          "en": "I, II and III",
          "de": "I, II und III",
          "fr": "I, II et III",
          "ru": "I, II и III",
          "ar": "I و II و III",
          "zh": "I、II 和 III",
          "ku": "I, II û III"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "I doğrudur: damıtma, süzme, kristallendirme gibi teknikler ve imbik gibi araçlar simya döneminde geliştirildi. II doğrudur: metalleri altına çevirmek ve ölümsüzlük iksiri bulmak simyanın başlıca hedefleriydi. III yanlıştır: simya deneme-yanılmaya dayanıyordu; nicel ölçüm ve sınanabilir teori kimyanın, özellikle Boyle ve Lavoisier'den sonraki dönemin özelliğidir. Doğru yanıt: I ve II.",
        "en": "I is true: techniques such as distillation, filtration and crystallisation, and tools like the alembic, were developed in the alchemical era. II is true: turning metals into gold and finding an elixir of life were main aims of alchemy. III is false: alchemy relied on trial and error; quantitative measurement and testable theory characterise chemistry, especially after Boyle and Lavoisier. Answer: I and II.",
        "de": "I ist richtig: Techniken wie Destillation, Filtration, Kristallisation und Geräte wie der Alembik entstanden in der Alchemie. II ist richtig: Metalle in Gold zu verwandeln und ein Lebenselixier zu finden waren Hauptziele. III ist falsch: Die Alchemie beruhte auf Versuch und Irrtum; quantitative Messung und überprüfbare Theorien kennzeichnen die Chemie, besonders seit Boyle und Lavoisier. Antwort: I und II.",
        "fr": "I est vraie : la distillation, la filtration, la cristallisation et l'alambic datent de l'époque alchimique. II est vraie : changer les métaux en or et trouver l'élixir de vie étaient des buts majeurs. III est fausse : l'alchimie reposait sur des essais et erreurs ; la mesure quantitative et les théories vérifiables caractérisent la chimie, surtout après Boyle et Lavoisier. Réponse : I et II.",
        "ru": "I верно: перегонка, фильтрование, кристаллизация и такие приборы, как перегонный куб, появились в эпоху алхимии. II верно: превращение металлов в золото и поиск эликсира бессмертия были главными целями алхимии. III неверно: алхимия опиралась на метод проб и ошибок; количественные измерения и проверяемые теории характерны для химии, особенно после Бойля и Лавуазье. Ответ: I и II.",
        "ar": "العبارة I صحيحة: تطورت تقنيات التقطير والترشيح والتبلور وأدوات كالإنبيق في عصر الخيمياء. العبارة II صحيحة: كان تحويل الفلزات إلى ذهب وإيجاد إكسير الحياة من أهم أهداف الخيمياء. العبارة III خاطئة: اعتمدت الخيمياء على التجربة والخطأ، أما القياس الكمي والنظريات القابلة للاختبار فمن سمات الكيمياء، خاصة بعد بويل ولافوازييه. الإجابة: I وII.",
        "zh": "I 正确：蒸馏、过滤、结晶等技术以及蒸馏器等仪器是在炼金术时期发展起来的。II 正确：把金属变成黄金、寻找长生不老药是炼金术的主要目标。III 错误：炼金术依靠反复试错；定量测量和可检验的理论是化学的特征，尤其是在波义耳和拉瓦锡之后。答案：I 和 II。",
        "ku": "I rast e: teknîkên wekî distîlasyon, parzûnkirin û krîstalbûnê û amûrên wekî alembîkê di serdema alkîmiyê de pêş ketin. II rast e: veguherandina metalan bo zêr û dîtina îksîra nemiriyê armancên sereke yên alkîmiyê bûn. III şaş e: alkîmî li ser ceribandin û şaşiyê bû; pîvana hejmarî û teoriya ceribandinbar taybetmendiyên kîmyayê ne, nemaze yên serdema piştî Boyle û Lavoisier. Bersiva rast: I û II."
      }
    },
    {
      "id": "u01-twin04",
      "stem": {
        "tr": "\"The Sceptical Chymist\" adlı eseriyle elementi \"daha basit maddelere ayrıştırılamayan saf madde\" olarak tanımlayan ve deneye dayalı yöntemi kimyaya kazandıran bilim insanı aşağıdakilerden hangisidir?",
        "en": "Which scientist, in \"The Sceptical Chymist\", defined an element as \"a pure substance that cannot be broken down into simpler substances\" and brought the experimental method into chemistry?",
        "de": "Welcher Wissenschaftler definierte in „The Sceptical Chymist“ ein Element als „Reinstoff, der sich nicht in einfachere Stoffe zerlegen lässt“, und führte die experimentelle Methode in die Chemie ein?",
        "fr": "Quel savant, dans « The Sceptical Chymist », a défini l'élément comme « une substance pure qu'on ne peut décomposer en substances plus simples » et a introduit la méthode expérimentale en chimie ?",
        "ru": "Какой учёный в труде «Химик-скептик» определил элемент как «чистое вещество, которое нельзя разложить на более простые вещества», и ввёл в химию экспериментальный метод?",
        "ar": "أيّ العلماء الآتين عرّف العنصر في كتابه «الكيميائي المتشكك» بأنه «مادة نقية لا يمكن تفكيكها إلى مواد أبسط» وأدخل المنهج التجريبي إلى الكيمياء؟",
        "zh": "哪位科学家在《怀疑派化学家》一书中把元素定义为“不能再分解为更简单物质的纯净物”，并把实验方法引入了化学？",
        "ku": "Kîjan zanyar bi berhema xwe \"The Sceptical Chymist\" element wekî \"madeya paqij a ku nayê perçekirin bo madeyên hêsantir\" pênase kir û rêbaza ceribandinê anî nav kîmyayê?"
      },
      "options": [
        {
          "tr": "Aristo",
          "en": "Aristotle",
          "de": "Aristoteles",
          "fr": "Aristote",
          "ru": "Аристотель",
          "ar": "أرسطو",
          "zh": "亚里士多德",
          "ku": "Arîstoteles"
        },
        {
          "tr": "Cabir bin Hayyan",
          "en": "Jabir ibn Hayyan",
          "de": "Dschabir ibn Hayyan",
          "fr": "Jabir ibn Hayyan",
          "ru": "Джабир ибн Хайян",
          "ar": "جابر بن حيان",
          "zh": "贾比尔·伊本·哈扬",
          "ku": "Cabir bin Hayyan"
        },
        {
          "tr": "Antoine Lavoisier",
          "en": "Antoine Lavoisier",
          "de": "Antoine Lavoisier",
          "fr": "Antoine Lavoisier",
          "ru": "Антуан Лавуазье",
          "ar": "أنطوان لافوازييه",
          "zh": "安托万·拉瓦锡",
          "ku": "Antoine Lavoisier"
        },
        {
          "tr": "John Dalton",
          "en": "John Dalton",
          "de": "John Dalton",
          "fr": "John Dalton",
          "ru": "Джон Дальтон",
          "ar": "جون دالتون",
          "zh": "约翰·道尔顿",
          "ku": "John Dalton"
        },
        {
          "tr": "Robert Boyle",
          "en": "Robert Boyle",
          "de": "Robert Boyle",
          "fr": "Robert Boyle",
          "ru": "Роберт Бойль",
          "ar": "روبرت بويل",
          "zh": "罗伯特·波义耳",
          "ku": "Robert Boyle"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Robert Boyle 1661'de yayımladığı \"The Sceptical Chymist\" ile Aristo'nun dört element görüşünü eleştirmiş, elementi deneyle ayrıştırılamayan madde olarak tanımlamış ve kimyayı simyadan ayıran deneysel yaklaşımı başlatmıştır. Lavoisier kütlenin korunumu ve modern kimyanın kurulmasıyla, Dalton ise atom kuramıyla anılır; bu tanım onlara ait değildir.",
        "en": "In \"The Sceptical Chymist\" (1661) Robert Boyle criticised Aristotle's four elements, defined an element as a substance that cannot be broken down by experiment, and started the experimental approach that separated chemistry from alchemy. Lavoisier is known for conservation of mass and founding modern chemistry, Dalton for atomic theory; this definition is not theirs.",
        "de": "In „The Sceptical Chymist“ (1661) kritisierte Robert Boyle die vier Elemente des Aristoteles, definierte das Element als experimentell nicht zerlegbaren Stoff und begründete den experimentellen Ansatz, der Chemie und Alchemie trennte. Lavoisier steht für Massenerhaltung und moderne Chemie, Dalton für die Atomtheorie; diese Definition stammt nicht von ihnen.",
        "fr": "Dans « The Sceptical Chymist » (1661), Robert Boyle a critiqué les quatre éléments d'Aristote, défini l'élément comme une substance non décomposable par l'expérience et lancé l'approche expérimentale qui sépare la chimie de l'alchimie. Lavoisier est connu pour la conservation de la masse et la chimie moderne, Dalton pour la théorie atomique ; cette définition n'est pas la leur.",
        "ru": "В «Химике-скептике» (1661) Роберт Бойль раскритиковал четыре стихии Аристотеля, определил элемент как вещество, не разлагаемое опытным путём, и положил начало экспериментальному подходу, отделившему химию от алхимии. Лавуазье известен законом сохранения массы и созданием современной химии, Дальтон — атомной теорией; это определение принадлежит не им.",
        "ar": "انتقد روبرت بويل في كتابه «الكيميائي المتشكك» (1661) عناصر أرسطو الأربعة، وعرّف العنصر بأنه مادة لا تتفكك بالتجربة، وأسس النهج التجريبي الذي فصل الكيمياء عن الخيمياء. أما لافوازييه فيُعرف بحفظ الكتلة وتأسيس الكيمياء الحديثة، ودالتون بالنظرية الذرية؛ وهذا التعريف ليس لهما.",
        "zh": "罗伯特·波义耳在 1661 年出版的《怀疑派化学家》中批判了亚里士多德的四元素说，把元素定义为不能用实验分解的物质，开创了使化学脱离炼金术的实验方法。拉瓦锡以质量守恒和创立近代化学著称，道尔顿以原子论著称；这一定义不是他们提出的。",
        "ku": "Robert Boyle di berhema xwe \"The Sceptical Chymist\" (1661) de dîtina çar elementan a Arîstoteles rexne kir, element wekî madeya ku bi ceribandinê nayê perçekirin pênase kir û nêzîkatiya ceribandinî ya ku kîmyayê ji alkîmiyê vediqetîne da destpêkirin. Lavoisier bi parastina girseyê û damezrandina kîmyaya nûjen, Dalton jî bi teoriya atomê tê nasîn; ev pênase ne ya wan e."
      }
    },
    {
      "id": "u01-twin05",
      "stem": {
        "tr": "Aşağıdaki element adı – sembol eşleştirmelerinden hangisi yanlıştır?",
        "en": "Which of the following element name – symbol pairs is incorrect?",
        "de": "Welche der folgenden Zuordnungen Elementname – Symbol ist falsch?",
        "fr": "Laquelle des associations nom d'élément – symbole suivantes est incorrecte ?",
        "ru": "Какое из соответствий «название элемента — символ» неверно?",
        "ar": "أيّ المزاوجات الآتية بين اسم العنصر ورمزه خاطئة؟",
        "zh": "下列元素名称与元素符号的对应中，哪一项是错误的？",
        "ku": "Kîjan ji van cotên navê elementê – sembolê şaş e?"
      },
      "options": [
        {
          "tr": "Gümüş – Au",
          "en": "Silver – Au",
          "de": "Silber – Au",
          "fr": "Argent – Au",
          "ru": "Серебро — Au",
          "ar": "الفضة – Au",
          "zh": "银 – Au",
          "ku": "Zîv – Au"
        },
        {
          "tr": "Sodyum – Na",
          "en": "Sodium – Na",
          "de": "Natrium – Na",
          "fr": "Sodium – Na",
          "ru": "Натрий — Na",
          "ar": "الصوديوم – Na",
          "zh": "钠 – Na",
          "ku": "Sodyûm – Na"
        },
        {
          "tr": "Potasyum – K",
          "en": "Potassium – K",
          "de": "Kalium – K",
          "fr": "Potassium – K",
          "ru": "Калий — K",
          "ar": "البوتاسيوم – K",
          "zh": "钾 – K",
          "ku": "Potasyûm – K"
        },
        {
          "tr": "Demir – Fe",
          "en": "Iron – Fe",
          "de": "Eisen – Fe",
          "fr": "Fer – Fe",
          "ru": "Железо — Fe",
          "ar": "الحديد – Fe",
          "zh": "铁 – Fe",
          "ku": "Hesin – Fe"
        },
        {
          "tr": "Cıva – Hg",
          "en": "Mercury – Hg",
          "de": "Quecksilber – Hg",
          "fr": "Mercure – Hg",
          "ru": "Ртуть — Hg",
          "ar": "الزئبق – Hg",
          "zh": "汞 – Hg",
          "ku": "Cîva – Hg"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Birçok sembol Latince adlardan gelir: sodyum natrium (Na), potasyum kalium (K), demir ferrum (Fe), cıva hydrargyrum (Hg). Gümüşün Latince adı argentum olduğundan sembolü Ag'dir; Au (aurum) altının sembolüdür. Yanlış eşleştirme gümüş – Au'dur.",
        "en": "Many symbols come from Latin names: sodium natrium (Na), potassium kalium (K), iron ferrum (Fe), mercury hydrargyrum (Hg). Silver is argentum in Latin, so its symbol is Ag; Au (aurum) is gold. The wrong pair is silver – Au.",
        "de": "Viele Symbole stammen aus lateinischen Namen: Natrium (Na), Kalium (K), Ferrum (Fe), Hydrargyrum (Hg). Silber heißt lateinisch argentum, sein Symbol ist Ag; Au (aurum) ist Gold. Falsch ist Silber – Au.",
        "fr": "Beaucoup de symboles viennent du latin : natrium (Na), kalium (K), ferrum (Fe), hydrargyrum (Hg). L'argent se dit argentum, son symbole est Ag ; Au (aurum) désigne l'or. L'association fausse est argent – Au.",
        "ru": "Многие символы происходят от латинских названий: натрий — natrium (Na), калий — kalium (K), железо — ferrum (Fe), ртуть — hydrargyrum (Hg). Серебро по-латыни argentum, поэтому его символ Ag; Au (aurum) — символ золота. Неверное соответствие: серебро — Au.",
        "ar": "كثير من الرموز مشتق من الأسماء اللاتينية: الصوديوم natrium (Na)، البوتاسيوم kalium (K)، الحديد ferrum (Fe)، الزئبق hydrargyrum (Hg). واسم الفضة اللاتيني argentum فرمزها Ag، أما Au (aurum) فهو رمز الذهب. المزاوجة الخاطئة: الفضة – Au.",
        "zh": "许多元素符号来自拉丁名：钠 natrium(Na)、钾 kalium(K)、铁 ferrum(Fe)、汞 hydrargyrum(Hg)。银的拉丁名是 argentum，符号为 Ag；Au(aurum)是金的符号。错误的是“银 – Au”。",
        "ku": "Gelek sembol ji navên latînî tên: sodyûm natrium (Na), potasyûm kalium (K), hesin ferrum (Fe), cîva hydrargyrum (Hg). Navê zîv bi latînî argentum e, loma sembola wê Ag ye; Au (aurum) sembola zêr e. Cotê şaş zîv – Au ye."
      }
    },
    {
      "id": "u01-twin06",
      "stem": {
        "tr": "Ca(OH)2 formülündeki toplam atom sayısı x, Al2(SO4)3 formülündeki toplam atom sayısı y'dir. x + y toplamı kaçtır?",
        "en": "The total number of atoms in the formula Ca(OH)2 is x and in the formula Al2(SO4)3 is y. What is x + y?",
        "de": "Die Gesamtzahl der Atome in der Formel Ca(OH)2 sei x, in der Formel Al2(SO4)3 sei y. Wie groß ist x + y?",
        "fr": "Le nombre total d'atomes dans la formule Ca(OH)2 est x et dans la formule Al2(SO4)3 est y. Combien vaut x + y ?",
        "ru": "Общее число атомов в формуле Ca(OH)2 равно x, в формуле Al2(SO4)3 — y. Чему равна сумма x + y?",
        "ar": "عدد الذرات الكلي في الصيغة Ca(OH)2 هو x، وفي الصيغة Al2(SO4)3 هو y. فكم يساوي x + y؟",
        "zh": "化学式 Ca(OH)2 中原子总数为 x，化学式 Al2(SO4)3 中原子总数为 y。x + y 等于多少？",
        "ku": "Hejmara giştî ya atoman di formula Ca(OH)2 de x, di formula Al2(SO4)3 de y ye. x + y çend e?"
      },
      "options": [
        {
          "tr": "11",
          "en": "11",
          "de": "11",
          "fr": "11",
          "ru": "11",
          "ar": "11",
          "zh": "11",
          "ku": "11"
        },
        {
          "tr": "15",
          "en": "15",
          "de": "15",
          "fr": "15",
          "ru": "15",
          "ar": "15",
          "zh": "15",
          "ku": "15"
        },
        {
          "tr": "19",
          "en": "19",
          "de": "19",
          "fr": "19",
          "ru": "19",
          "ar": "19",
          "zh": "19",
          "ku": "19"
        },
        {
          "tr": "22",
          "en": "22",
          "de": "22",
          "fr": "22",
          "ru": "22",
          "ar": "22",
          "zh": "22",
          "ku": "22"
        },
        {
          "tr": "24",
          "en": "24",
          "de": "24",
          "fr": "24",
          "ru": "24",
          "ar": "24",
          "zh": "24",
          "ku": "24"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Parantez dışındaki alt indis parantez içindeki her atomla çarpılır. Ca(OH)2: 1 Ca + 2 O + 2 H = 5, yani x = 5. Al2(SO4)3: 2 Al + 3 S + 3·4 = 12 O = 17, yani y = 17. x + y = 22. Parantez yok sayılırsa 4 + 7 = 11, indis yalnızca parantezdeki son atoma uygulanırsa 4 + 15 = 19 bulunur; bunlar tipik hatalardır.",
        "en": "The subscript outside the brackets multiplies every atom inside. Ca(OH)2: 1 Ca + 2 O + 2 H = 5, so x = 5. Al2(SO4)3: 2 Al + 3 S + 3·4 = 12 O = 17, so y = 17. x + y = 22. Ignoring the brackets gives 4 + 7 = 11, and applying the subscript only to the last atom in the brackets gives 4 + 15 = 19; these are typical errors.",
        "de": "Der Index außerhalb der Klammer multipliziert jedes Atom in der Klammer. Ca(OH)2: 1 Ca + 2 O + 2 H = 5, also x = 5. Al2(SO4)3: 2 Al + 3 S + 3·4 = 12 O = 17, also y = 17. x + y = 22. Ohne Klammer ergibt sich 4 + 7 = 11, wendet man den Index nur auf das letzte Atom an, 4 + 15 = 19; das sind typische Fehler.",
        "fr": "L'indice placé hors de la parenthèse multiplie chaque atome qu'elle contient. Ca(OH)2 : 1 Ca + 2 O + 2 H = 5, donc x = 5. Al2(SO4)3 : 2 Al + 3 S + 3·4 = 12 O = 17, donc y = 17. x + y = 22. En ignorant la parenthèse on obtient 4 + 7 = 11, et en appliquant l'indice au seul dernier atome 4 + 15 = 19 ; ce sont des erreurs typiques.",
        "ru": "Индекс за скобкой умножается на число каждого атома в скобке. Ca(OH)2: 1 Ca + 2 O + 2 H = 5, x = 5. Al2(SO4)3: 2 Al + 3 S + 3·4 = 12 O = 17, y = 17. x + y = 22. Если не учитывать скобки, получится 4 + 7 = 11, а если применить индекс только к последнему атому в скобке — 4 + 15 = 19; это типичные ошибки.",
        "ar": "الرقم السفلي خارج القوس يُضرب في كل ذرة داخله. Ca(OH)2: ‏1 Ca + 2 O + 2 H = 5، إذن x = 5. Al2(SO4)3: ‏2 Al + 3 S + 3·4 = 12 O = 17، إذن y = 17. x + y = 22. وإهمال القوس يعطي 4 + 7 = 11، وتطبيق الرقم على آخر ذرة فقط يعطي 4 + 15 = 19؛ وهما خطآن شائعان.",
        "zh": "括号外的下标要乘以括号内的每一种原子。Ca(OH)2：1 个 Ca + 2 个 O + 2 个 H = 5，x = 5。Al2(SO4)3：2 个 Al + 3 个 S + 3·4 = 12 个 O = 17，y = 17。x + y = 22。忽略括号会得到 4 + 7 = 11，只把下标乘到括号内最后一个原子上会得到 4 + 15 = 19，这些都是典型错误。",
        "ku": "Îndeksa li derveyî kevanê bi her atomeke hundirê kevanê tê pirjimarkirin. Ca(OH)2: 1 Ca + 2 O + 2 H = 5, ango x = 5. Al2(SO4)3: 2 Al + 3 S + 3·4 = 12 O = 17, ango y = 17. x + y = 22. Heke kevan neyê hesibandin 4 + 7 = 11, heke îndeks tenê li atoma dawî ya hundirê kevanê were sepandin 4 + 15 = 19 derdikeve; ev şaşiyên asayî ne."
      }
    },
    {
      "id": "u01-twin07",
      "stem": {
        "tr": "Bir öğrenci havanda toz hâline getirdiği bir katı örneğini, bek alevinde uzun süre yüksek sıcaklıkta kızdırarak kütlesindeki değişimi incelemek istiyor. Kızdırma işlemi için aşağıdaki malzemelerden hangisini kullanmalıdır?",
        "en": "A student wants to strongly heat a solid sample, powdered in a mortar, over a Bunsen flame for a long time to study its change in mass. Which piece of equipment should be used for the heating?",
        "de": "Ein Schüler möchte eine im Mörser pulverisierte Feststoffprobe lange in der Brennerflamme stark glühen, um ihre Massenänderung zu untersuchen. Welches Gerät sollte er für das Glühen verwenden?",
        "fr": "Un élève veut calciner longuement, sur la flamme d'un bec Bunsen, un échantillon solide réduit en poudre au mortier, afin d'étudier la variation de sa masse. Quel matériel doit-il utiliser pour la calcination ?",
        "ru": "Ученик хочет долго прокаливать в пламени горелки твёрдый образец, растёртый в ступке, чтобы изучить изменение его массы. Какую посуду следует использовать для прокаливания?",
        "ar": "يريد طالب تسخين عينة صلبة طحنها في الهاون تسخيناً شديداً لمدة طويلة على لهب موقد بنزن لدراسة تغيّر كتلتها. أيّ الأدوات الآتية يجب أن يستخدم للتسخين؟",
        "zh": "一名学生想把在研钵中研成粉末的固体样品放在本生灯火焰上长时间高温灼烧，以研究其质量变化。灼烧时应使用下列哪种仪器？",
        "ku": "Xwendekarek dixwaze nimûneyeke hişk a ku di hawanê de kiriye toz, demeke dirêj di agirê çira Bunsen de bi germahiya bilind sor bike û guherîna girseya wê lêkolîn bike. Ji bo sorkirinê divê kîjan amûrê bi kar bîne?"
      },
      "options": [
        {
          "tr": "Balon joje",
          "en": "Volumetric flask",
          "de": "Messkolben",
          "fr": "Fiole jaugée",
          "ru": "Мерная колба",
          "ar": "الدورق الحجمي",
          "zh": "容量瓶",
          "ku": "Balona pîvanê"
        },
        {
          "tr": "Kroze",
          "en": "Crucible",
          "de": "Tiegel",
          "fr": "Creuset",
          "ru": "Тигель",
          "ar": "البوتقة",
          "zh": "坩埚",
          "ku": "Kroze"
        },
        {
          "tr": "Büret",
          "en": "Burette",
          "de": "Bürette",
          "fr": "Burette",
          "ru": "Бюретка",
          "ar": "السحاحة",
          "zh": "滴定管",
          "ku": "Buret"
        },
        {
          "tr": "Mezür",
          "en": "Graduated cylinder",
          "de": "Messzylinder",
          "fr": "Éprouvette graduée",
          "ru": "Мерный цилиндр",
          "ar": "المخبار المدرّج",
          "zh": "量筒",
          "ku": "Silindira pîvanê"
        },
        {
          "tr": "Ayırma hunisi",
          "en": "Separatory funnel",
          "de": "Scheidetrichter",
          "fr": "Ampoule à décanter",
          "ru": "Делительная воронка",
          "ar": "قمع الفصل",
          "zh": "分液漏斗",
          "ku": "Qîfa veqetandinê"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Kroze porselen gibi ısıya çok dayanıklı malzemeden yapılır ve katıları yüksek sıcaklıkta kızdırmak için kullanılır. Balon joje, büret ve mezür hacim ölçen kaplardır; ısıtılırlarsa kalibrasyonları bozulur. Ayırma hunisi karışmayan sıvıları ayırmaya yarar.",
        "en": "A crucible is made of highly heat-resistant material such as porcelain and is used to heat solids strongly. Volumetric flasks, burettes and graduated cylinders measure volume and lose their calibration when heated. A separatory funnel separates immiscible liquids.",
        "de": "Ein Tiegel besteht aus sehr hitzebeständigem Material wie Porzellan und dient zum starken Erhitzen von Feststoffen. Messkolben, Bürette und Messzylinder messen Volumen und verlieren beim Erhitzen ihre Eichung. Ein Scheidetrichter trennt nicht mischbare Flüssigkeiten.",
        "fr": "Le creuset est en matériau très résistant à la chaleur, comme la porcelaine, et sert à calciner les solides. La fiole jaugée, la burette et l'éprouvette graduée mesurent des volumes et perdent leur étalonnage si on les chauffe. L'ampoule à décanter sépare des liquides non miscibles.",
        "ru": "Тигель делают из очень жаростойкого материала, например фарфора; в нём прокаливают твёрдые вещества. Мерная колба, бюретка и мерный цилиндр служат для измерения объёма и теряют калибровку при нагревании. Делительная воронка разделяет несмешивающиеся жидкости.",
        "ar": "تُصنع البوتقة من مادة شديدة التحمل للحرارة كالخزف، وتُستخدم لتسخين المواد الصلبة تسخيناً شديداً. أما الدورق الحجمي والسحاحة والمخبار المدرّج فأدوات لقياس الحجم تفقد معايرتها إذا سُخّنت، وقمع الفصل يفصل السوائل غير الممتزجة.",
        "zh": "坩埚由瓷等耐高温材料制成，用于高温灼烧固体。容量瓶、滴定管和量筒是量取体积的仪器，加热会破坏其刻度准确性；分液漏斗用于分离互不相溶的液体。",
        "ku": "Kroze ji madeyeke ku li hember germê pir berxwedêr e, wekî porselenê, tê çêkirin û ji bo sorkirina madeyên hişk di germahiya bilind de tê bikaranîn. Balona pîvanê, buret û silindira pîvanê qebareyê dipîvin; heke werin germkirin, kalîbrasyona wan xera dibe. Qîfa veqetandinê şileyên ku tevlî hev nabin ji hev vediqetîne."
      }
    },
    {
      "id": "u01-twin08",
      "stem": {
        "tr": "Kimyasal madde ambalajlarındaki güvenlik piktogramlarıyla ilgili aşağıdaki eşleştirmelerden hangileri doğrudur?\nI. Alev piktogramı: kolay tutuşabilen madde\nII. Kuru kafa piktogramı: metalleri ve cildi aşındıran madde\nIII. Gaz silindiri piktogramı: basınç altında depolanan gaz",
        "en": "Which of the following matches of safety pictograms on chemical packaging are correct?\nI. Flame pictogram: easily ignitable substance\nII. Skull and crossbones: substance that corrodes metals and skin\nIII. Gas cylinder pictogram: gas stored under pressure",
        "de": "Welche der folgenden Zuordnungen von Gefahrenpiktogrammen auf Chemikalienverpackungen sind richtig?\nI. Flamme: leicht entzündbarer Stoff\nII. Totenkopf: Stoff, der Metalle und Haut angreift\nIII. Gasflasche: unter Druck gelagertes Gas",
        "fr": "Lesquelles des associations suivantes concernant les pictogrammes de sécurité sont correctes ?\nI. Flamme : substance facilement inflammable\nII. Tête de mort : substance qui corrode les métaux et la peau\nIII. Bouteille de gaz : gaz stocké sous pression",
        "ru": "Какие из приведённых соответствий пиктограмм опасности на упаковках химических веществ верны?\nI. Пламя: легковоспламеняющееся вещество\nII. Череп со скрещёнными костями: вещество, разъедающее металлы и кожу\nIII. Газовый баллон: газ, хранящийся под давлением",
        "ar": "أيّ المزاوجات الآتية لرسوم السلامة على عبوات المواد الكيميائية صحيحة؟\nI. رسم اللهب: مادة سهلة الاشتعال\nII. رسم الجمجمة: مادة تُسبّب تآكل الفلزات والجلد\nIII. رسم أسطوانة الغاز: غاز مخزَّن تحت ضغط",
        "zh": "下列关于化学品包装上安全象形图的对应中，哪些是正确的？\nI. 火焰：易燃物质\nII. 骷髅头：腐蚀金属和皮肤的物质\nIII. 气瓶：加压储存的气体",
        "ku": "Kîjan ji van cotkirinên pîktogramên ewlehiyê yên li ser pakêtên madeyên kîmyewî rast in?\nI. Pîktograma agir: madeya ku zû agir digire\nII. Pîktograma qoqê: madeya ku metal û çerm dixwe\nIII. Pîktograma silindira gazê: gaza ku di bin zextê de hatiye hilanîn"
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "Seulement I",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "Only II",
          "de": "Nur II",
          "fr": "Seulement II",
          "ru": "Только II",
          "ar": "II فقط",
          "zh": "仅 II",
          "ku": "Tenê II"
        },
        {
          "tr": "I ve III",
          "en": "I and III",
          "de": "I und III",
          "fr": "I et III",
          "ru": "I и III",
          "ar": "I و III",
          "zh": "I 和 III",
          "ku": "I û III"
        },
        {
          "tr": "II ve III",
          "en": "II and III",
          "de": "II und III",
          "fr": "II et III",
          "ru": "II и III",
          "ar": "II و III",
          "zh": "II 和 III",
          "ku": "II û III"
        },
        {
          "tr": "I, II ve III",
          "en": "I, II and III",
          "de": "I, II und III",
          "fr": "I, II et III",
          "ru": "I, II и III",
          "ar": "I و II و III",
          "zh": "I、II 和 III",
          "ku": "I, II û III"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "I doğrudur: alev piktogramı yanıcı maddeleri gösterir. III doğrudur: gaz silindiri basınç altındaki gazları belirtir. II yanlıştır: kuru kafa akut zehirliliği gösterir; metali ve cildi aşındıran maddeler, üzerine sıvı damlayan el ve metal çizilmiş aşındırıcı (korozif) piktogramıyla gösterilir. Doğru yanıt: I ve III.",
        "en": "I is true: the flame pictogram marks flammable substances. III is true: the gas cylinder marks gases under pressure. II is false: the skull and crossbones means acute toxicity; substances that corrode metal and skin carry the corrosive pictogram showing liquid dripping onto a hand and a metal. Answer: I and III.",
        "de": "I ist richtig: Die Flamme kennzeichnet entzündbare Stoffe. III ist richtig: Die Gasflasche steht für Gase unter Druck. II ist falsch: Der Totenkopf bedeutet akute Toxizität; ätzende Stoffe tragen das Piktogramm mit Flüssigkeit, die auf eine Hand und ein Metall tropft. Antwort: I und III.",
        "fr": "I est vraie : la flamme signale les substances inflammables. III est vraie : la bouteille de gaz signale les gaz sous pression. II est fausse : la tête de mort indique une toxicité aiguë ; les substances corrosives portent le pictogramme d'un liquide coulant sur une main et un métal. Réponse : I et III.",
        "ru": "I верно: пламя обозначает легковоспламеняющиеся вещества. III верно: газовый баллон обозначает газы под давлением. II неверно: череп со скрещёнными костями означает острую токсичность; едкие (коррозионные) вещества, разъедающие металл и кожу, обозначают пиктограммой, на которой жидкость капает на руку и на металл. Ответ: I и III.",
        "ar": "العبارة I صحيحة: رسم اللهب يدل على المواد القابلة للاشتعال. العبارة III صحيحة: أسطوانة الغاز تدل على الغازات المضغوطة. العبارة II خاطئة: الجمجمة تدل على السمّية الحادة، أما المواد الأكّالة فرمزها سائل يقطر على يد وقطعة فلز. الإجابة: I وIII.",
        "zh": "I 正确：火焰表示易燃物质。III 正确：气瓶表示加压气体。II 错误：骷髅头表示急性毒性；腐蚀金属和皮肤的物质用“液体滴到手和金属上”的腐蚀性象形图表示。答案：I 和 III。",
        "ku": "I rast e: pîktograma agir madeyên şewitbar nîşan dide. III rast e: silindira gazê gazên di bin zextê de nîşan dide. II şaş e: qoq jehrîbûna tûj nîşan dide; madeyên ku metal û çerm dixwin bi pîktograma xwarker tên nîşandan, ku tê de şile li ser destekî û metalekê dilop dibe. Bersiva rast: I û III."
      }
    },
    {
      "id": "u01-twin09",
      "stem": {
        "tr": "Bir kimyasal maddenin ambalajında, bir dairenin üzerinde yükselen alev biçiminde piktogram bulunmaktadır. Bu madde için aşağıdakilerden hangisi doğrudur?",
        "en": "The packaging of a chemical carries a pictogram showing a flame rising above a circle. Which statement about this substance is correct?",
        "de": "Auf der Verpackung einer Chemikalie ist ein Piktogramm mit einer Flamme über einem Kreis abgebildet. Welche Aussage über diesen Stoff ist richtig?",
        "fr": "L'emballage d'un produit chimique porte un pictogramme représentant une flamme au-dessus d'un cercle. Quelle affirmation sur cette substance est correcte ?",
        "ru": "На упаковке химического вещества изображена пиктограмма «пламя над кругом». Какое утверждение об этом веществе верно?",
        "ar": "تحمل عبوة مادة كيميائية رسماً للهب يعلو دائرة. أيّ العبارات الآتية عن هذه المادة صحيحة؟",
        "zh": "某化学品包装上印有“圆圈上方有火焰”的象形图。关于该物质，下列说法正确的是哪一项？",
        "ku": "Li ser pakêta madeyeke kîmyewî pîktogramek heye ku agirekî li ser xelekekê bilind dibe nîşan dide. Kîjan gotin derbarê vê madeyê de rast e?"
      },
      "options": [
        {
          "tr": "Radyoaktif ışıma yaptığı için kurşun kapta saklanmalıdır.",
          "en": "It emits radioactive radiation, so it must be kept in a lead container.",
          "de": "Es sendet radioaktive Strahlung aus und muss in einem Bleibehälter aufbewahrt werden.",
          "fr": "Elle émet un rayonnement radioactif et doit être conservée dans un récipient en plomb.",
          "ru": "Оно радиоактивно, поэтому его нужно хранить в свинцовом контейнере.",
          "ar": "لأنها تصدر إشعاعاً نووياً يجب حفظها في وعاء من الرصاص.",
          "zh": "它具有放射性，必须保存在铅容器中。",
          "ku": "Ji ber ku tîrêjên radyoaktîf belav dike, divê di firaxeke rêsas de were hilanîn."
        },
        {
          "tr": "Yalnızca basınç altında sıvılaştırılmış gaz olarak bulunur.",
          "en": "It exists only as a gas liquefied under pressure.",
          "de": "Es kommt nur als unter Druck verflüssigtes Gas vor.",
          "fr": "Elle n'existe que sous forme de gaz liquéfié sous pression.",
          "ru": "Оно существует только в виде сжиженного под давлением газа.",
          "ar": "توجد فقط على شكل غاز مُسال تحت الضغط.",
          "zh": "它只以加压液化气体的形式存在。",
          "ku": "Tenê wekî gazeke ku di bin zextê de şile bûye heye."
        },
        {
          "tr": "Yanmayı engellediği için yangın söndürücü olarak kullanılır.",
          "en": "It suppresses burning, so it is used as a fire extinguisher.",
          "de": "Es unterdrückt Verbrennung und wird als Feuerlöscher verwendet.",
          "fr": "Elle empêche la combustion et sert d'extincteur.",
          "ru": "Оно препятствует горению и применяется для тушения пожаров.",
          "ar": "تُستخدم مطفأةً للحريق لأنها تمنع الاشتعال.",
          "zh": "它能阻止燃烧，因此用作灭火剂。",
          "ku": "Ji ber ku şewitînê asteng dike, wekî vemirînera agir tê bikaranîn."
        },
        {
          "tr": "Yalnızca ciltte hafif tahriş yapar, yanma ile ilgisi yoktur.",
          "en": "It only causes mild skin irritation and has nothing to do with burning.",
          "de": "Es reizt nur leicht die Haut und hat nichts mit Verbrennung zu tun.",
          "fr": "Elle provoque seulement une légère irritation cutanée et n'a aucun lien avec la combustion.",
          "ru": "Оно лишь слегка раздражает кожу и не связано с горением.",
          "ar": "تسبب تهيجاً خفيفاً للجلد فقط ولا علاقة لها بالاحتراق.",
          "zh": "它只会轻微刺激皮肤，与燃烧无关。",
          "ku": "Tenê çerm hinekî aciz dike, bi şewitînê re têkiliya wê tune."
        },
        {
          "tr": "Yükseltgen (oksitleyici) olduğundan yanıcı maddelerden uzak tutulmalıdır.",
          "en": "It is an oxidiser, so it must be kept away from flammable materials.",
          "de": "Es ist ein Oxidationsmittel und muss von brennbaren Stoffen ferngehalten werden.",
          "fr": "C'est un comburant (oxydant), elle doit donc être tenue à l'écart des matières inflammables.",
          "ru": "Это окислитель, поэтому его нужно хранить вдали от горючих веществ.",
          "ar": "هي مادة مؤكسدة لذا يجب إبعادها عن المواد القابلة للاشتعال.",
          "zh": "它是氧化剂，因此必须远离易燃物质。",
          "ku": "Ji ber ku oksîdant e, divê ji madeyên şewitbar dûr were hilanîn."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Daire üzerinde alev piktogramı yükseltgen (oksitleyici) maddeleri gösterir. Bu maddeler kendileri yanmasa bile oksijen sağlayarak başka maddelerin yanmasını başlatır veya şiddetlendirir; bu yüzden yanıcılardan uzak saklanır. Dairesiz alev yanıcı maddeyi, gaz silindiri basınçlı gazı belirtir; radyoaktiflik ise ayrı bir simgeyle gösterilir.",
        "en": "The flame-over-circle pictogram marks oxidisers. Even if they do not burn themselves, they supply oxygen and start or intensify the burning of other materials, so they are stored away from flammables. A flame without a circle means flammable, a gas cylinder means pressurised gas, and radioactivity has its own symbol.",
        "de": "Die Flamme über einem Kreis kennzeichnet Oxidationsmittel. Auch wenn sie selbst nicht brennen, liefern sie Sauerstoff und entfachen oder verstärken die Verbrennung anderer Stoffe; deshalb lagert man sie getrennt von brennbaren Stoffen. Die Flamme ohne Kreis steht für entzündbar, die Gasflasche für Gase unter Druck, Radioaktivität hat ein eigenes Zeichen.",
        "fr": "La flamme au-dessus d'un cercle signale les comburants. Même s'ils ne brûlent pas eux-mêmes, ils fournissent de l'oxygène et déclenchent ou attisent la combustion d'autres matières ; on les stocke donc loin des produits inflammables. La flamme seule signifie inflammable, la bouteille de gaz un gaz sous pression, et la radioactivité a son propre symbole.",
        "ru": "Пламя над кругом обозначает окислители. Даже не горя сами, они поставляют кислород и вызывают или усиливают горение других веществ, поэтому их хранят отдельно от горючих. Пламя без круга означает воспламеняющееся вещество, баллон — газ под давлением, а для радиоактивности есть отдельный знак.",
        "ar": "رسم اللهب فوق الدائرة يدل على المواد المؤكسدة؛ فهي وإن لم تحترق بنفسها تزوّد الأكسجين فتُشعل احتراق مواد أخرى أو تزيده شدة، ولذلك تُحفظ بعيداً عن المواد القابلة للاشتعال. اللهب دون دائرة يعني مادة قابلة للاشتعال، وأسطوانة الغاز تعني غازاً مضغوطاً، وللإشعاع رمز خاص به.",
        "zh": "“圆圈上的火焰”象形图表示氧化性物质。它们本身即使不燃烧，也能提供氧气，引发或加剧其他物质的燃烧，所以要远离易燃物存放。没有圆圈的火焰表示易燃，气瓶表示加压气体，放射性另有专门标志。",
        "ku": "Pîktograma agirê li ser xelekê madeyên oksîdant nîşan dide. Ev made heke bi xwe neşewitin jî, oksîjenê didin û şewitîna madeyên din didin destpêkirin an xurttir dikin; loma ji madeyên şewitbar dûr tên hilanîn. Agirê bê xelek madeya şewitbar, silindira gazê jî gaza bi zext nîşan dide; radyoaktîvîte bi sembolek cuda tê nîşandan."
      }
    },
    {
      "id": "u01-twin10",
      "stem": {
        "tr": "Aşağıdaki çalışma – kimya alt dalı eşleştirmelerinden hangisi yanlıştır?",
        "en": "Which of the following study – branch of chemistry pairs is incorrect?",
        "de": "Welche der folgenden Zuordnungen Untersuchung – Teilgebiet der Chemie ist falsch?",
        "fr": "Laquelle des associations travail – branche de la chimie suivantes est incorrecte ?",
        "ru": "Какое из соответствий «вид работы — раздел химии» неверно?",
        "ar": "أيّ المزاوجات الآتية بين الدراسة وفرع الكيمياء خاطئة؟",
        "zh": "下列“研究内容 – 化学分支”的对应中，哪一项是错误的？",
        "ku": "Kîjan ji van cotên xebat – şaxa kîmyayê şaş e?"
      },
      "options": [
        {
          "tr": "Gübre ve sülfürik asidin büyük ölçekte üretilmesi – Endüstriyel kimya",
          "en": "Large-scale production of fertilisers and sulfuric acid – Industrial chemistry",
          "de": "Großtechnische Herstellung von Düngemitteln und Schwefelsäure – Industrielle Chemie",
          "fr": "Production à grande échelle d'engrais et d'acide sulfurique – Chimie industrielle",
          "ru": "Крупномасштабное производство удобрений и серной кислоты — промышленная химия",
          "ar": "إنتاج الأسمدة وحمض الكبريتيك على نطاق واسع – الكيمياء الصناعية",
          "zh": "大规模生产化肥和硫酸 – 工业化学",
          "ku": "Hilberîna peyînê kîmyewî û asîda sulfurîk bi pîvana mezin – Kîmyaya pîşesaziyê"
        },
        {
          "tr": "Yeni bir ilaç molekülünün karbon iskeletinin sentezlenmesi – Organik kimya",
          "en": "Synthesising the carbon skeleton of a new drug molecule – Organic chemistry",
          "de": "Synthese des Kohlenstoffgerüsts eines neuen Arzneimittelmoleküls – Organische Chemie",
          "fr": "Synthèse du squelette carboné d'une nouvelle molécule de médicament – Chimie organique",
          "ru": "Синтез углеродного скелета новой молекулы лекарства — органическая химия",
          "ar": "تحضير الهيكل الكربوني لجزيء دواء جديد – الكيمياء العضوية",
          "zh": "合成一种新药分子的碳骨架 – 有机化学",
          "ku": "Senteza îskeleta karbonê ya molekuleke dermanê nû – Kîmyaya organîk"
        },
        {
          "tr": "Bir tepkimede açığa çıkan ısının ve tepkime hızının ölçülmesi – Biyokimya",
          "en": "Measuring the heat released and the rate of a reaction – Biochemistry",
          "de": "Messung der freigesetzten Wärme und der Geschwindigkeit einer Reaktion – Biochemie",
          "fr": "Mesure de la chaleur dégagée et de la vitesse d'une réaction – Biochimie",
          "ru": "Измерение выделяющейся теплоты и скорости реакции — биохимия",
          "ar": "قياس الحرارة المنطلقة وسرعة تفاعل ما – الكيمياء الحيوية",
          "zh": "测定反应放出的热量和反应速率 – 生物化学",
          "ku": "Pîvandina germa ku di reaksiyonekê de derdikeve û leza reaksiyonê – Biyokîmya"
        },
        {
          "tr": "Enzimlerin hücre içindeki işleyişinin incelenmesi – Biyokimya",
          "en": "Studying how enzymes work inside the cell – Biochemistry",
          "de": "Untersuchung der Wirkungsweise von Enzymen in der Zelle – Biochemie",
          "fr": "Étude du fonctionnement des enzymes dans la cellule – Biochimie",
          "ru": "Изучение работы ферментов в клетке — биохимия",
          "ar": "دراسة عمل الإنزيمات داخل الخلية – الكيمياء الحيوية",
          "zh": "研究酶在细胞内的作用方式 – 生物化学",
          "ku": "Lêkolîna xebata enzîman di hundirê şaneyê de – Biyokîmya"
        },
        {
          "tr": "Metal tuzlarının ve minerallerin yapısının incelenmesi – Anorganik kimya",
          "en": "Studying the structure of metal salts and minerals – Inorganic chemistry",
          "de": "Untersuchung der Struktur von Metallsalzen und Mineralen – Anorganische Chemie",
          "fr": "Étude de la structure des sels métalliques et des minéraux – Chimie inorganique",
          "ru": "Изучение строения солей металлов и минералов — неорганическая химия",
          "ar": "دراسة بنية أملاح الفلزات والمعادن – الكيمياء غير العضوية",
          "zh": "研究金属盐和矿物的结构 – 无机化学",
          "ku": "Lêkolîna avahiya xwêyên metalan û mîneralan – Kîmyaya anorganîk"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Tepkime ısısı ve tepkime hızı gibi enerji ve hız ölçümleri fizikokimyanın (fiziksel kimya) konusudur, biyokimyanın değil. Gübre ve asit üretimi endüstriyel kimya, karbon iskeletli ilaç sentezi organik kimya, enzimlerin işleyişi biyokimya, metal tuzları ve mineraller anorganik kimya ile doğru eşleşmiştir.",
        "en": "Measurements of energy and rate, such as heat of reaction and reaction rate, belong to physical chemistry, not biochemistry. Fertiliser and acid production (industrial), carbon-skeleton drug synthesis (organic), enzyme function (biochemistry) and metal salts and minerals (inorganic) are matched correctly.",
        "de": "Energie- und Geschwindigkeitsmessungen wie Reaktionswärme und Reaktionsgeschwindigkeit gehören zur physikalischen Chemie, nicht zur Biochemie. Dünger- und Säureproduktion (industriell), Synthese von Kohlenstoffgerüsten (organisch), Enzymwirkung (Biochemie) und Metallsalze/Minerale (anorganisch) sind richtig zugeordnet.",
        "fr": "Les mesures d'énergie et de vitesse, comme la chaleur et la vitesse de réaction, relèvent de la chimie physique, pas de la biochimie. Production d'engrais et d'acide (industrielle), synthèse de squelettes carbonés (organique), fonctionnement des enzymes (biochimie) et sels métalliques/minéraux (inorganique) sont correctement associés.",
        "ru": "Измерения энергии и скорости, например теплоты и скорости реакции, относятся к физической химии, а не к биохимии. Остальные пары составлены верно: производство удобрений и кислот — промышленная химия, синтез углеродного скелета лекарства — органическая химия, работа ферментов — биохимия, соли металлов и минералы — неорганическая химия.",
        "ar": "قياسات الطاقة والسرعة كحرارة التفاعل وسرعته من اختصاص الكيمياء الفيزيائية لا الكيمياء الحيوية. أما إنتاج الأسمدة والأحماض (صناعية)، وتحضير الهيكل الكربوني للدواء (عضوية)، وعمل الإنزيمات (حيوية)، وأملاح الفلزات والمعادن (غير عضوية) فمزاوجات صحيحة.",
        "zh": "反应热和反应速率等能量与速率的测定属于物理化学，而不是生物化学。化肥与酸的生产（工业化学）、药物碳骨架的合成（有机化学）、酶的作用（生物化学）、金属盐和矿物（无机化学）的对应都是正确的。",
        "ku": "Pîvanên enerjî û lezê yên wekî germa reaksiyonê û leza reaksiyonê mijara fîzîkokîmyayê (kîmyaya fîzîkî) ne, ne ya biyokîmyayê. Hilberîna peyîn û asîdê bi kîmyaya pîşesaziyê, senteza dermanên bi îskeleta karbonê bi kîmyaya organîk, xebata enzîman bi biyokîmyayê, xwêyên metalan û mîneral jî bi kîmyaya anorganîk re rast hatine cotkirin."
      }
    },
    {
      "id": "u01-twin11",
      "stem": {
        "tr": "Şekilde K, L ve M ile gösterilen laboratuvar cam malzemeleriyle ilgili aşağıdakilerden hangisi doğrudur?",
        "en": "Which of the following is correct about the laboratory glassware labelled K, L and M in the figure?",
        "de": "Welche der folgenden Aussagen über die in der Abbildung mit K, L und M bezeichneten Laborglasgeräte ist richtig?",
        "fr": "Laquelle des affirmations suivantes sur la verrerie de laboratoire notée K, L et M sur la figure est exacte ?",
        "ru": "Какое из утверждений о лабораторной посуде, обозначенной на рисунке буквами K, L и M, верно?",
        "ar": "أيّ العبارات الآتية صحيحة بشأن الأدوات الزجاجية المخبرية المشار إليها في الشكل بالرموز K وL وM؟",
        "zh": "关于图中用 K、L、M 表示的实验室玻璃仪器，下列说法正确的是哪一项？",
        "ku": "Derbarê amûrên camê yên laboratuwarê yên di şiklê de bi K, L û M hatine nîşandan, kîjan ji van rast e?"
      },
      "options": [
        {
          "tr": "K, belirli derişimde 250 mL standart çözelti hazırlamak için kullanılır.",
          "en": "K is used to prepare 250 mL of a standard solution of known concentration.",
          "de": "Mit K stellt man 250 mL einer Standardlösung bekannter Konzentration her.",
          "fr": "K sert à préparer 250 mL d'une solution étalon de concentration connue.",
          "ru": "K используют для приготовления 250 мл стандартного раствора известной концентрации.",
          "ar": "يُستخدم K لتحضير 250 mL من محلول قياسي معلوم التركيز.",
          "zh": "K 用于配制 250 mL 已知浓度的标准溶液。",
          "ku": "K ji bo amadekirina 250 mL çareseriya standard a bi tîrbûna diyar tê bikaranîn."
        },
        {
          "tr": "L, içindeki çözeltiyi doğrudan alevde kaynatmak için uygundur.",
          "en": "L is suitable for boiling the solution it contains directly over a flame.",
          "de": "L eignet sich dazu, die darin enthaltene Lösung direkt über der Flamme zu kochen.",
          "fr": "L convient pour faire bouillir la solution qu'elle contient directement sur la flamme.",
          "ru": "L подходит для кипячения находящегося в нём раствора прямо на пламени.",
          "ar": "يصلح L لغلي المحلول الموجود فيه مباشرةً على اللهب.",
          "zh": "L 适合将其中的溶液直接放在火焰上煮沸。",
          "ku": "L ji bo kelandina çareseriya tê de rasterast li ser agir guncav e."
        },
        {
          "tr": "M'nin üzerindeki çizgiler, K kadar hassas hacim ölçümü sağlar.",
          "en": "The marks on M measure volume as precisely as K does.",
          "de": "Die Markierungen auf M messen das Volumen so genau wie K.",
          "fr": "Les graduations de M mesurent le volume aussi précisément que K.",
          "ru": "Метки на M позволяют измерять объём так же точно, как K.",
          "ar": "تقيس العلامات الموجودة على M الحجمَ بدقة K نفسها.",
          "zh": "M 上的刻度线测量体积与 K 一样精确。",
          "ku": "Xêzên li ser M qebareyê bi qasî K bi hesasî dipîvin."
        },
        {
          "tr": "K titrasyonda sıvıyı damla damla ve ölçülü eklemek için, L belirli hacimde ve derişimde çözelti hazırlamak için kullanılır.",
          "en": "K is used to add liquid drop by drop and in measured amounts in a titration; L is used to prepare a solution of fixed volume and concentration.",
          "de": "K dient bei der Titration zur tropfenweisen, abgemessenen Zugabe von Flüssigkeit; L dient zum Ansetzen einer Lösung bestimmten Volumens und bestimmter Konzentration.",
          "fr": "K sert à ajouter un liquide goutte à goutte et de façon mesurée lors d'un titrage ; L sert à préparer une solution de volume et de concentration déterminés.",
          "ru": "K служит для покапельного отмеренного добавления жидкости при титровании, а L — для приготовления раствора заданного объёма и концентрации.",
          "ar": "يُستخدم K لإضافة السائل قطرةً قطرةً وبكمية مقيسة في المعايرة، ويُستخدم L لتحضير محلول بحجم وتركيز محدّدين.",
          "zh": "K 用于滴定时逐滴、定量地加入液体，L 用于配制一定体积和浓度的溶液。",
          "ku": "K di tîtrasyonê de ji bo zêdekirina şileyê dilop bi dilop û bi pîvan, L jî ji bo amadekirina çareseriyeke bi qebare û tîrbûna diyar tê bikaranîn."
        },
        {
          "tr": "L, birbirine karışmayan iki sıvıyı ayırmak için kullanılır.",
          "en": "L is used to separate two immiscible liquids.",
          "de": "L dient zum Trennen zweier nicht mischbarer Flüssigkeiten.",
          "fr": "L sert à séparer deux liquides non miscibles.",
          "ru": "L используют для разделения двух несмешивающихся жидкостей.",
          "ar": "يُستخدم L لفصل سائلين لا يمتزجان.",
          "zh": "L 用于分离两种互不相溶的液体。",
          "ku": "L ji bo veqetandina du şileyên ku tevlihev nabin tê bikaranîn."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "K musluklu, dereceli, ince uzun bir cam boru olan bürettir; titrasyonda sıvıyı damla damla ve ölçülü ekler. L, boynunda tek bir ölçü çizgisi bulunan balon jojedir; belirli hacimde ve derişimde (standart) çözelti hazırlamaya yarar ve ısıtılmaz. M konik gövdeli erlenmayerdir; çalkalama ve titrasyonda kullanılır, üzerindeki çizgiler yalnızca yaklaşık hacim gösterir. Standart çözelti büretle hazırlanmaz; karışmayan sıvılar ayırma hunisiyle ayrılır.",
        "en": "K is a burette, a long thin graduated glass tube with a stopcock; it adds liquid drop by drop and in measured amounts in a titration. L is a volumetric flask with a single mark on its neck; it is used to prepare a solution of fixed volume and concentration (a standard solution) and is never heated. M is a conical Erlenmeyer flask used for swirling and titrations; its marks show only approximate volumes. A standard solution is not prepared in a burette, and immiscible liquids are separated with a separatory funnel.",
        "de": "K ist eine Bürette, ein langes, dünnes, graduiertes Glasrohr mit Hahn; sie gibt bei der Titration Flüssigkeit tropfenweise und abgemessen zu. L ist ein Messkolben mit einer einzigen Eichmarke am Hals; er dient zum Ansetzen einer Lösung bestimmten Volumens und bestimmter Konzentration (Standardlösung) und wird nicht erhitzt. M ist ein kegelförmiger Erlenmeyerkolben zum Umschwenken und Titrieren; seine Markierungen zeigen nur ungefähre Volumina. Eine Standardlösung wird nicht in der Bürette angesetzt; nicht mischbare Flüssigkeiten trennt man mit dem Scheidetrichter.",
        "fr": "K est une burette, long tube de verre fin, gradué et muni d'un robinet ; elle ajoute le liquide goutte à goutte et de façon mesurée lors d'un titrage. L est une fiole jaugée portant un seul trait de jauge sur le col ; elle sert à préparer une solution de volume et de concentration déterminés (solution étalon) et ne se chauffe pas. M est un erlenmeyer conique utilisé pour agiter et titrer ; ses graduations n'indiquent qu'un volume approximatif. On ne prépare pas une solution étalon dans une burette, et les liquides non miscibles se séparent avec une ampoule à décanter.",
        "ru": "K — бюретка, длинная тонкая градуированная стеклянная трубка с краном; при титровании ею добавляют жидкость по каплям и в отмеренном количестве. L — мерная колба с одной меткой на горлышке; в ней готовят раствор заданного объёма и концентрации (стандартный раствор), её не нагревают. M — коническая колба Эрленмейера для перемешивания и титрования; её метки показывают объём лишь приблизительно. Стандартный раствор в бюретке не готовят, а несмешивающиеся жидкости разделяют делительной воронкой.",
        "ar": "K سحاحة، وهي أنبوب زجاجي طويل رفيع مدرّج ذو صنبور، تُضاف بها السوائل قطرةً قطرةً وبكمية مقيسة في المعايرة. وL دورق حجمي ذو علامة واحدة على عنقه، يُحضَّر فيه محلول بحجم وتركيز محدّدين (محلول قياسي) ولا يُسخَّن. وM دورق مخروطي (إرلنماير) يُستخدم للرجّ والمعايرة، وعلاماته تبيّن الحجم تقريبيًا فقط. لا يُحضَّر المحلول القياسي في السحاحة، أما السوائل غير الممتزجة فتُفصل بقمع الفصل.",
        "zh": "K 是滴定管，即带活塞的细长刻度玻璃管，滴定时用它逐滴、定量地加入液体。L 是容量瓶，颈部只有一条刻度线，用于配制一定体积和浓度的溶液（标准溶液），不能加热。M 是锥形瓶，用于振荡和滴定，其刻度只表示近似体积。标准溶液不用滴定管配制；互不相溶的液体用分液漏斗分离。",
        "ku": "K buret e, boriyeke camê ya dirêj û zirav a bi derece û şîrek; di tîtrasyonê de şileyê dilop bi dilop û bi pîvan zêde dike. L balona jojeyê ye ku tenê xêzeke pîvanê li ser stûyê wê heye; ji bo amadekirina çareseriyeke bi qebare û tîrbûna diyar (çareseriya standard) tê bikaranîn û nayê germkirin. M erlenmayera konîk e; ji bo hejandin û tîtrasyonê tê bikaranîn, xêzên li ser wê tenê qebareya texmînî nîşan didin. Çareseriya standard bi buretê nayê amadekirin; şileyên ku tevlihev nabin bi qîfa veqetandinê têne veqetandin."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 230,
        "markup": "<rect x=\"40\" y=\"15\" width=\"12\" height=\"150\" class=\"qf-fill\"/><rect x=\"41.5\" y=\"40\" width=\"9\" height=\"125\" class=\"qf-water\"/><line x1=\"40\" y1=\"30\" x2=\"46\" y2=\"30\" class=\"qf-line\"/><line x1=\"40\" y1=\"45\" x2=\"46\" y2=\"45\" class=\"qf-line\"/><line x1=\"40\" y1=\"60\" x2=\"46\" y2=\"60\" class=\"qf-line\"/><line x1=\"40\" y1=\"75\" x2=\"46\" y2=\"75\" class=\"qf-line\"/><line x1=\"40\" y1=\"90\" x2=\"46\" y2=\"90\" class=\"qf-line\"/><line x1=\"40\" y1=\"105\" x2=\"46\" y2=\"105\" class=\"qf-line\"/><line x1=\"40\" y1=\"120\" x2=\"46\" y2=\"120\" class=\"qf-line\"/><line x1=\"40\" y1=\"135\" x2=\"46\" y2=\"135\" class=\"qf-line\"/><line x1=\"40\" y1=\"150\" x2=\"46\" y2=\"150\" class=\"qf-line\"/><rect x=\"33\" y=\"166\" width=\"26\" height=\"7\" class=\"qf-solid\"/><polygon points=\"42,173 50,173 47.5,196 44.5,196\" class=\"qf-fill\"/><text x=\"46\" y=\"220\" text-anchor=\"middle\" class=\"qf-big\">K</text><path d=\"M163 42 L163 120.6 A40 40 0 1 0 177 120.6 L177 42\" class=\"qf-fill\"/><path d=\"M163 72 L163 120.6 A40 40 0 1 0 177 120.6 L177 72 Z\" class=\"qf-water\"/><line x1=\"157\" y1=\"72\" x2=\"183\" y2=\"72\" class=\"qf-line\"/><rect x=\"160\" y=\"33\" width=\"20\" height=\"9\" class=\"qf-solid\"/><text x=\"170\" y=\"220\" text-anchor=\"middle\" class=\"qf-big\">L</text><polygon points=\"250,200 330,200 298,120 298,80 282,80 282,120\" class=\"qf-fill\"/><polygon points=\"251.5,198.5 328.5,198.5 316.5,170 263.5,170\" class=\"qf-water\"/><text x=\"290\" y=\"220\" text-anchor=\"middle\" class=\"qf-big\">M</text>"
      }
    },
    {
      "id": "u01-twin12",
      "stem": {
        "tr": "Laboratuvarda deney yapan bir öğrencinin gözüne seyreltik bir kimyasal sıçramıştır. İlk olarak yapılması gereken aşağıdakilerden hangisidir?",
        "en": "During a laboratory experiment, a dilute chemical splashes into a student's eye. What should be done first?",
        "de": "Bei einem Laborversuch spritzt einem Schüler eine verdünnte Chemikalie ins Auge. Was ist als Erstes zu tun?",
        "fr": "Pendant une expérience, un produit chimique dilué éclabousse l'œil d'un élève. Que faut-il faire en premier ?",
        "ru": "Во время лабораторного опыта ученику в глаз попало разбавленное химическое вещество. Что нужно сделать в первую очередь?",
        "ar": "في أثناء تجربة مخبرية تطايرت مادة كيميائية مخففة إلى عين أحد الطلاب. ما الذي يجب فعله أولاً؟",
        "zh": "做实验时，一种稀的化学试剂溅入一名学生的眼睛。首先应当怎么做？",
        "ku": "Di dema ceribandineke laboratuwarê de madeyeke kîmyewî ya sist pijiqî çavê xwendekarekî. Divê pêşî çi were kirin?"
      },
      "options": [
        {
          "tr": "Gözü ovuşturarak kimyasalı dışarı çıkarmak",
          "en": "Rub the eye to get the chemical out",
          "de": "Das Auge reiben, um die Chemikalie zu entfernen",
          "fr": "Se frotter l'œil pour faire sortir le produit",
          "ru": "Потереть глаз, чтобы удалить химикат",
          "ar": "فرك العين لإخراج المادة الكيميائية",
          "zh": "揉眼睛把试剂揉出来",
          "ku": "Çav bê malandin da ku madeya kîmyewî derkeve"
        },
        {
          "tr": "Kimyasalı nötrleştirmek için göze zıt özellikte bir çözelti damlatmak",
          "en": "Drop a solution of opposite character into the eye to neutralise the chemical",
          "de": "Eine Lösung mit entgegengesetzter Wirkung ins Auge tropfen, um zu neutralisieren",
          "fr": "Verser dans l'œil une solution de nature opposée pour neutraliser le produit",
          "ru": "Закапать в глаз раствор противоположного характера для нейтрализации",
          "ar": "وضع قطرات من محلول معاكس الخواص في العين لمعادلة المادة",
          "zh": "往眼里滴性质相反的溶液来中和试剂",
          "ku": "Ji bo neutralîzekirina madeyê, çareseriyeke bi taybetmendiya dijber li çav were dilopkirin"
        },
        {
          "tr": "Gözü kapatıp ağrı geçene kadar beklemek",
          "en": "Close the eye and wait until the pain passes",
          "de": "Das Auge schließen und warten, bis der Schmerz nachlässt",
          "fr": "Fermer l'œil et attendre que la douleur passe",
          "ru": "Закрыть глаз и ждать, пока боль пройдёт",
          "ar": "إغلاق العين والانتظار حتى يزول الألم",
          "zh": "闭上眼睛等疼痛消失",
          "ku": "Çav were girtin û heta êş derbas bibe li bendê bimîne"
        },
        {
          "tr": "Gözü göz duşunda bol suyla en az 15 dakika yıkamak",
          "en": "Rinse the eye with plenty of water at the eyewash station for at least 15 minutes",
          "de": "Das Auge an der Augendusche mindestens 15 Minuten mit viel Wasser spülen",
          "fr": "Rincer l'œil abondamment à la douche oculaire pendant au moins 15 minutes",
          "ru": "Промывать глаз большим количеством воды у фонтанчика для глаз не менее 15 минут",
          "ar": "غسل العين بكمية وفيرة من الماء في مغسلة العين مدة 15 دقيقة على الأقل",
          "zh": "在洗眼器下用大量清水冲洗眼睛至少 15 分钟",
          "ku": "Çav li duşa çavan bi gelek avê herî kêm 15 deqeyan were şûştin"
        },
        {
          "tr": "Göze merhem sürüp üzerini bantla kapatmak",
          "en": "Apply ointment to the eye and cover it with tape",
          "de": "Salbe auf das Auge auftragen und es abkleben",
          "fr": "Appliquer une pommade sur l'œil et le couvrir d'un pansement",
          "ru": "Нанести на глаз мазь и заклеить пластырем",
          "ar": "وضع مرهم على العين وتغطيتها بشريط لاصق",
          "zh": "在眼睛上涂药膏并用胶布盖住",
          "ku": "Melhem li çav were dayîn û bi bantê were girtin"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Gözdeki kimyasal en hızlı biçimde bol suyla seyreltilip uzaklaştırılmalıdır; bu yüzden göz duşunda en az 15 dakika yıkanır, ardından öğretmene haber verilip sağlık kuruluşuna başvurulur. Ovuşturmak kimyasalı yayar ve gözü çizer; göze başka kimyasal damlatmak nötrleşme ısısıyla ek hasar yapabilir; beklemek veya kapatmak kimyasalın gözde kalmasına yol açar.",
        "en": "A chemical in the eye must be diluted and washed away as quickly as possible with plenty of water, so the eye is rinsed at the eyewash for at least 15 minutes; then the teacher is told and medical help sought. Rubbing spreads the chemical and scratches the eye; dropping another chemical in can cause further damage through the heat of neutralisation; waiting or covering leaves the chemical in the eye.",
        "de": "Eine Chemikalie im Auge muss so schnell wie möglich mit viel Wasser verdünnt und ausgespült werden, daher spült man mindestens 15 Minuten an der Augendusche, informiert dann die Lehrkraft und holt ärztliche Hilfe. Reiben verteilt die Chemikalie und verletzt das Auge; eine weitere Chemikalie kann durch Neutralisationswärme zusätzlich schaden; Warten oder Abdecken lässt die Chemikalie im Auge.",
        "fr": "Un produit dans l'œil doit être dilué et éliminé le plus vite possible avec beaucoup d'eau : on rince à la douche oculaire au moins 15 minutes, puis on prévient l'enseignant et on consulte. Se frotter étale le produit et raye l'œil ; y verser un autre produit peut aggraver les lésions par la chaleur de neutralisation ; attendre ou couvrir laisse le produit dans l'œil.",
        "ru": "Химическое вещество, попавшее в глаз, нужно как можно быстрее разбавить и смыть большим количеством воды, поэтому глаз промывают у фонтанчика не менее 15 минут, затем сообщают учителю и обращаются к врачу. Если тереть глаз, вещество распределяется и травмирует его; другое вещество, закапанное для нейтрализации, может нанести дополнительный вред из-за теплоты нейтрализации; если ждать или закрыть глаз повязкой, вещество останется в глазу.",
        "ar": "يجب تخفيف المادة الكيميائية في العين وإزالتها بأسرع ما يمكن بكمية وفيرة من الماء، لذا تُغسل العين في مغسلة العين 15 دقيقة على الأقل ثم يُبلَّغ المعلم ويُطلب العلاج. الفرك ينشر المادة ويخدش العين، ووضع قطرات مادة أخرى قد يسبب ضرراً إضافياً بحرارة التعادل، والانتظار أو التغطية يُبقيان المادة في العين.",
        "zh": "眼睛里的化学品必须尽快用大量清水稀释并冲走，所以要在洗眼器下冲洗至少 15 分钟，然后报告老师并就医。揉眼会使试剂扩散并划伤眼睛；滴入别的试剂可能因中和放热造成更大伤害；等待或遮盖会使试剂留在眼中。",
        "ku": "Madeya kîmyewî ya di çav de divê bi lez û bi gelek avê were sistkirin û rakirin; loma çav li duşa çavan herî kêm 15 deqeyan tê şûştin, paşê mamoste tê agahdarkirin û serî li navenda tenduristiyê tê dayîn. Malandin madeyê belav dike û çav diqelişîne; dilopkirina madeyeke din dikare bi germa neutralîzasyonê zirareke zêde bide; li bendê man an girtina çav dihêle ku made di çav de bimîne."
      }
    },
    {
      "id": "u01-twin13",
      "stem": {
        "tr": "Laboratuvar güvenliği ile ilgili aşağıdaki uygulamalardan hangileri yanlıştır?\nI. Deney tüpünde sıvı ısıtılırken tüpün ağzı kimsenin bulunmadığı yöne çevrilir.\nII. Deneyde artan kimyasal, israf olmaması için stok şişesine geri dökülür.\nIII. Zehirli veya boğucu gaz çıkaran deneyler çeker ocakta yapılır.",
        "en": "Which of the following laboratory practices are wrong?\nI. When heating a liquid in a test tube, its mouth is pointed away from everyone.\nII. Leftover chemical from an experiment is poured back into the stock bottle to avoid waste.\nIII. Experiments that release toxic or choking gases are done in a fume hood.",
        "de": "Welche der folgenden Laborpraktiken sind falsch?\nI. Beim Erhitzen einer Flüssigkeit im Reagenzglas zeigt die Öffnung von allen Personen weg.\nII. Übrig gebliebene Chemikalie wird, um nichts zu verschwenden, in die Vorratsflasche zurückgegossen.\nIII. Versuche, bei denen giftige oder erstickende Gase entstehen, werden im Abzug durchgeführt.",
        "fr": "Lesquelles des pratiques de laboratoire suivantes sont incorrectes ?\nI. En chauffant un liquide dans un tube à essai, on oriente l'ouverture loin de toute personne.\nII. Le reste de produit d'une expérience est reversé dans le flacon de stock pour éviter le gaspillage.\nIII. Les expériences dégageant des gaz toxiques ou suffocants se font sous une hotte.",
        "ru": "Какие из приведённых действий нарушают правила лабораторной безопасности?\nI. При нагревании жидкости в пробирке её отверстие направляют в сторону, где нет людей.\nII. Оставшийся после опыта реактив сливают обратно в склянку с запасом, чтобы не расходовать его зря.\nIII. Опыты, при которых выделяются ядовитые или удушающие газы, проводят в вытяжном шкафу.",
        "ar": "أيّ الممارسات المخبرية الآتية خاطئة؟\nI. عند تسخين سائل في أنبوب اختبار تُوجَّه فوهته بعيداً عن الأشخاص.\nII. تُعاد المادة الكيميائية الزائدة إلى زجاجة المخزون تجنباً للهدر.\nIII. تُجرى التجارب التي تُطلق غازات سامة أو خانقة داخل خزانة الغازات (ساحبة الأبخرة).",
        "zh": "下列实验室做法中，哪些是错误的？\nI. 在试管中加热液体时，管口朝向无人的方向。\nII. 实验剩余的试剂为避免浪费倒回原试剂瓶。\nIII. 产生有毒或窒息性气体的实验在通风橱中进行。",
        "ku": "Kîjan ji van kiryarên ewlehiya laboratuwarê şaş in?\nI. Dema şile di lûleya ceribandinê de tê germkirin, devê lûleyê ber bi aliyê ku kes lê tune tê zivirandin.\nII. Madeya kîmyewî ya ku ji ceribandinê dimîne, ji bo ku zaya nebe, dîsa tê rijandin nav şûşeya stokê.\nIII. Ceribandinên ku gazên jehrî an xeniqîner derdixin di dolaba hilmkêşê de tên kirin."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "Seulement I",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "Only II",
          "de": "Nur II",
          "fr": "Seulement II",
          "ru": "Только II",
          "ar": "II فقط",
          "zh": "仅 II",
          "ku": "Tenê II"
        },
        {
          "tr": "Yalnız III",
          "en": "Only III",
          "de": "Nur III",
          "fr": "Seulement III",
          "ru": "Только III",
          "ar": "III فقط",
          "zh": "仅 III",
          "ku": "Tenê III"
        },
        {
          "tr": "I ve III",
          "en": "I and III",
          "de": "I und III",
          "fr": "I et III",
          "ru": "I и III",
          "ar": "I و III",
          "zh": "I 和 III",
          "ku": "I û III"
        },
        {
          "tr": "II ve III",
          "en": "II and III",
          "de": "II und III",
          "fr": "II et III",
          "ru": "II и III",
          "ar": "II و III",
          "zh": "II 和 III",
          "ku": "II û III"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "I doğru bir uygulamadır: ısınan sıvı ani kaynayıp fışkırabileceğinden tüpün ağzı kimseye doğru tutulmaz. III doğru bir uygulamadır: zararlı gazlar çeker ocakta dışarı atılır. II yanlış bir uygulamadır: kullanılmış veya artan kimyasal kirlenmiş olabilir, stok şişesine dökülürse tüm stoku bozar; atık kabına konur. Yanlış olan yalnızca II'dir.",
        "en": "I is a correct practice: a heated liquid may suddenly boil and spurt, so the tube is never pointed at anyone. III is correct: harmful gases are removed in a fume hood. II is wrong: leftover chemical may be contaminated and would spoil the whole stock; it goes into the waste container. Only II is wrong.",
        "de": "I ist richtig: Erhitzte Flüssigkeit kann plötzlich aufsieden und herausspritzen, daher zeigt das Glas auf niemanden. III ist richtig: Schädliche Gase werden im Abzug abgeführt. II ist falsch: Reste können verunreinigt sein und den ganzen Vorrat verderben; sie gehören in den Abfallbehälter. Falsch ist nur II.",
        "fr": "I est correcte : un liquide chauffé peut bouillir brusquement et jaillir, on ne dirige donc jamais le tube vers quelqu'un. III est correcte : les gaz nocifs sont évacués par la hotte. II est incorrecte : un reste peut être contaminé et gâcherait tout le stock ; il va dans le bidon de déchets. Seule II est incorrecte.",
        "ru": "I — правильное действие: нагретая жидкость может внезапно вскипеть и выплеснуться, поэтому отверстие пробирки ни на кого не направляют. III — правильное действие: вредные газы удаляются через вытяжной шкаф. II — нарушение: использованный или оставшийся реактив может быть загрязнён и испортит весь запас; его сливают в ёмкость для отходов. Неправильно только II.",
        "ar": "الممارسة I صحيحة: قد يغلي السائل المسخَّن فجأة ويندفع، فلا تُوجَّه الفوهة نحو أحد. الممارسة III صحيحة: تُطرد الغازات الضارة عبر خزانة الغازات. الممارسة II خاطئة: قد تكون المادة الزائدة ملوثة فتُفسد المخزون كله، لذا توضع في وعاء النفايات. الخاطئة هي II فقط.",
        "zh": "I 是正确做法：受热液体可能突然沸腾喷出，所以管口不能对着人。III 是正确做法：有害气体通过通风橱排出。II 是错误做法：剩余试剂可能已被污染，倒回会污染整瓶试剂，应倒入废液容器。错误的只有 II。",
        "ku": "I kiryareke rast e: şileya germ dikare ji nişka ve bikele û biperike, loma devê lûleyê ber bi tu kesî ve nayê girtin. III kiryareke rast e: gazên zirardar bi dolaba hilmkêşê tên derxistin. II kiryareke şaş e: madeya mayî dibe ku qirêj bûbe û heke bikeve şûşeya stokê hemû stokê xera dike; divê bikeve firaxa bermahiyan. Tenê II şaş e."
      }
    },
    {
      "id": "u01-twin14",
      "stem": {
        "tr": "Aşağıdaki formüllerden hangisi bir element molekülüne aittir?",
        "en": "Which of the following formulas represents a molecule of an element?",
        "de": "Welche der folgenden Formeln stellt ein Molekül eines Elements dar?",
        "fr": "Laquelle des formules suivantes représente une molécule d'un élément ?",
        "ru": "Какая из следующих формул обозначает молекулу простого вещества (элемента)?",
        "ar": "أيّ الصيغ الآتية تمثل جزيء عنصر؟",
        "zh": "下列化学式中，表示单质分子的是哪一个？",
        "ku": "Kîjan ji van formulan molekuleke elementekê nîşan dide?"
      },
      "options": [
        {
          "tr": "H2O",
          "en": "H2O",
          "de": "H2O",
          "fr": "H2O",
          "ru": "H2O",
          "ar": "H2O",
          "zh": "H2O",
          "ku": "H2O"
        },
        {
          "tr": "O3",
          "en": "O3",
          "de": "O3",
          "fr": "O3",
          "ru": "O3",
          "ar": "O3",
          "zh": "O3",
          "ku": "O3"
        },
        {
          "tr": "CO",
          "en": "CO",
          "de": "CO",
          "fr": "CO",
          "ru": "CO",
          "ar": "CO",
          "zh": "CO",
          "ku": "CO"
        },
        {
          "tr": "CH4",
          "en": "CH4",
          "de": "CH4",
          "fr": "CH4",
          "ru": "CH4",
          "ar": "CH4",
          "zh": "CH4",
          "ku": "CH4"
        },
        {
          "tr": "NH3",
          "en": "NH3",
          "de": "NH3",
          "fr": "NH3",
          "ru": "NH3",
          "ar": "NH3",
          "zh": "NH3",
          "ku": "NH3"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Element molekülü yalnızca tek tür atomdan oluşur. O3 (ozon) üç oksijen atomundan oluşur, bu yüzden bir element molekülüdür. H2O, CO, CH4 ve NH3 en az iki farklı elementin atomlarını içerdiği için bileşik molekülleridir. Formüldeki atom sayısının fazla olması bileşik olmayı göstermez; önemli olan atom türü sayısıdır.",
        "en": "An element molecule consists of only one kind of atom. O3 (ozone) is made of three oxygen atoms, so it is an element molecule. H2O, CO, CH4 and NH3 contain atoms of at least two different elements and are compound molecules. Having many atoms does not make a compound; what matters is the number of kinds of atom.",
        "de": "Ein Elementmolekül besteht nur aus einer Atomsorte. O3 (Ozon) besteht aus drei Sauerstoffatomen und ist daher ein Elementmolekül. H2O, CO, CH4 und NH3 enthalten Atome mindestens zweier Elemente und sind Verbindungsmoleküle. Viele Atome bedeuten keine Verbindung; entscheidend ist die Zahl der Atomsorten.",
        "fr": "Une molécule d'élément ne contient qu'une seule sorte d'atome. O3 (ozone) est formé de trois atomes d'oxygène : c'est une molécule d'élément. H2O, CO, CH4 et NH3 contiennent des atomes d'au moins deux éléments différents : ce sont des molécules de composés. Un grand nombre d'atomes ne fait pas un composé ; c'est le nombre de sortes d'atomes qui compte.",
        "ru": "Молекула простого вещества состоит из атомов одного вида. O3 (озон) состоит из трёх атомов кислорода, поэтому это молекула простого вещества. H2O, CO, CH4 и NH3 содержат атомы как минимум двух разных элементов, это молекулы сложных веществ. Большое число атомов в формуле не делает вещество сложным — важно число видов атомов.",
        "ar": "يتكوّن جزيء العنصر من نوع واحد فقط من الذرات. O3 (الأوزون) يتكون من ثلاث ذرات أكسجين، فهو جزيء عنصر. أما H2O وCO وCH4 وNH3 فتحتوي على ذرات عنصرين مختلفين على الأقل، فهي جزيئات مركبات. كثرة الذرات لا تعني مركباً؛ المهم عدد أنواع الذرات.",
        "zh": "单质分子只由一种原子构成。O3(臭氧)由三个氧原子构成，是单质分子。H2O、CO、CH4、NH3 至少含有两种不同元素的原子，是化合物分子。原子个数多并不意味着是化合物，关键看原子的种类数。",
        "ku": "Molekula elementekê tenê ji yek cure atomê pêk tê. O3 (ozon) ji sê atomên oksîjenê pêk tê, loma molekula elementekê ye. H2O, CO, CH4 û NH3 atomên herî kêm du elementên cuda dihewînin û molekulên pêkhateyan in. Zêdebûna hejmara atoman pêkhatebûnê nîşan nade; ya girîng hejmara cureyên atoman e."
      }
    },
    {
      "id": "u01-twin15",
      "stem": {
        "tr": "Şekilde I, II, III ve IV numaralı kaplardaki maddelerin tanecik modelleri verilmiştir. Her farklı daire türü farklı bir atom türünü, birbirine değen daireler ise bir molekülü göstermektedir.\nBu maddelerle ilgili aşağıdakilerden hangisi doğrudur?",
        "en": "The figure shows particle models of the substances in containers I, II, III and IV. Each kind of circle represents a different kind of atom, and touching circles represent one molecule.\nWhich of the following is correct about these substances?",
        "de": "Die Abbildung zeigt Teilchenmodelle der Stoffe in den Gefäßen I, II, III und IV. Jede Kreisart steht für eine andere Atomsorte, sich berührende Kreise bilden ein Molekül.\nWelche der folgenden Aussagen über diese Stoffe ist richtig?",
        "fr": "La figure présente les modèles particulaires des substances contenues dans les récipients I, II, III et IV. Chaque type de cercle représente un type d'atome différent et des cercles qui se touchent forment une molécule.\nLaquelle des affirmations suivantes sur ces substances est exacte ?",
        "ru": "На рисунке показаны модели частиц веществ в сосудах I, II, III и IV. Каждый вид кружка обозначает свой вид атомов, соприкасающиеся кружки образуют одну молекулу.\nКакое утверждение об этих веществах верно?",
        "ar": "يبيّن الشكل نماذج جسيمية للمواد الموجودة في الأوعية I و II و III و IV. يمثّل كل نوع من الدوائر نوعًا مختلفًا من الذرات، وتمثّل الدوائر المتلامسة جزيئًا واحدًا.\nأيّ العبارات الآتية صحيحة بشأن هذه المواد؟",
        "zh": "图中给出了容器 I、II、III、IV 中物质的粒子模型。每种圆圈代表一种原子，相互接触的圆圈表示一个分子。\n关于这些物质，下列说法正确的是哪一项？",
        "ku": "Di şiklê de modelên perçeyan ên maddeyên di firaxên I, II, III û IV de hatine dayîn. Her cureyê xelekê cureyekî din ê atomê nîşan dide, xelekên ku bi hev dikevin jî molekulekê nîşan didin.\nDerbarê van maddeyan de kîjan rast e?"
      },
      "options": [
        {
          "tr": "Yalnız I element; II ve III bileşik; IV karışımdır.",
          "en": "Only I is an element; II and III are compounds; IV is a mixture.",
          "de": "Nur I ist ein Element; II und III sind Verbindungen; IV ist ein Gemisch.",
          "fr": "Seul I est un élément ; II et III sont des composés ; IV est un mélange.",
          "ru": "Только I — простое вещество; II и III — сложные вещества; IV — смесь.",
          "ar": "I وحده عنصر؛ و II و III مركّبان؛ و IV خليط.",
          "zh": "只有 I 是单质；II 和 III 是化合物；IV 是混合物。",
          "ku": "Tenê I element e; II û III pêkhate ne; IV tevlihevî ye."
        },
        {
          "tr": "I ve II element; III bileşik; IV karışımdır.",
          "en": "I and II are elements; III is a compound; IV is a mixture.",
          "de": "I und II sind Elemente; III ist eine Verbindung; IV ist ein Gemisch.",
          "fr": "I et II sont des éléments ; III est un composé ; IV est un mélange.",
          "ru": "I и II — простые вещества; III — сложное вещество; IV — смесь.",
          "ar": "I و II عنصران؛ و III مركّب؛ و IV خليط.",
          "zh": "I 和 II 是单质；III 是化合物；IV 是混合物。",
          "ku": "I û II element in; III pêkhate ye; IV tevlihevî ye."
        },
        {
          "tr": "I element; II ve IV bileşik; III karışımdır.",
          "en": "I is an element; II and IV are compounds; III is a mixture.",
          "de": "I ist ein Element; II und IV sind Verbindungen; III ist ein Gemisch.",
          "fr": "I est un élément ; II et IV sont des composés ; III est un mélange.",
          "ru": "I — простое вещество; II и IV — сложные вещества; III — смесь.",
          "ar": "I عنصر؛ و II و IV مركّبان؛ و III خليط.",
          "zh": "I 是单质；II 和 IV 是化合物；III 是混合物。",
          "ku": "I element e; II û IV pêkhate ne; III tevlihevî ye."
        },
        {
          "tr": "I, II ve III saf maddedir; bunlardan yalnız III moleküllerden oluşur.",
          "en": "I, II and III are pure substances; of these, only III is made of molecules.",
          "de": "I, II und III sind Reinstoffe; davon besteht nur III aus Molekülen.",
          "fr": "I, II et III sont des corps purs ; parmi eux, seul III est formé de molécules.",
          "ru": "I, II и III — чистые вещества; из них только III состоит из молекул.",
          "ar": "I و II و III مواد نقية؛ ومن بينها يتكوّن III وحده من جزيئات.",
          "zh": "I、II、III 是纯净物；其中只有 III 由分子构成。",
          "ku": "I, II û III maddeyên saf in; ji wan tenê III ji molekulan pêk tê."
        },
        {
          "tr": "II ve III bileşik; I ve IV elementtir.",
          "en": "II and III are compounds; I and IV are elements.",
          "de": "II und III sind Verbindungen; I und IV sind Elemente.",
          "fr": "II et III sont des composés ; I et IV sont des éléments.",
          "ru": "II и III — сложные вещества; I и IV — простые вещества.",
          "ar": "II و III مركّبان؛ و I و IV عنصران.",
          "zh": "II 和 III 是化合物；I 和 IV 是单质。",
          "ku": "II û III pêkhate ne; I û IV element in."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "I'de tek tür atom ayrı ayrı bulunur: element. II'de yalnızca tek tür atomdan oluşmuş iki atomlu moleküller vardır: element molekülü; molekül içermesi bileşik olmasını gerektirmez. III'te birbirinin aynısı olan moleküllerin her biri iki farklı türde atom içerir: bileşik. IV'te tek atomlar ile iki atomlu moleküller, yani iki farklı madde bir aradadır: karışım. I, II ve III saf maddedir; II ve III moleküllerden oluşur.",
        "en": "In I, atoms of a single kind are present separately: an element. II contains diatomic molecules made of only one kind of atom: an element whose particles are molecules; containing molecules does not make a substance a compound. In III, every identical molecule contains two different kinds of atoms: a compound. IV contains single atoms together with diatomic molecules, i.e. two different substances: a mixture. I, II and III are pure substances, and both II and III consist of molecules.",
        "de": "In I liegen Atome einer einzigen Sorte einzeln vor: ein Element. II enthält zweiatomige Moleküle aus nur einer Atomsorte: ein Element aus Molekülen; Moleküle zu enthalten macht einen Stoff nicht zur Verbindung. In III enthält jedes der gleichen Moleküle zwei verschiedene Atomsorten: eine Verbindung. IV enthält einzelne Atome und zweiatomige Moleküle, also zwei verschiedene Stoffe: ein Gemisch. I, II und III sind Reinstoffe; II und III bestehen aus Molekülen.",
        "fr": "En I, des atomes d'un seul type sont isolés : c'est un élément. II contient des molécules diatomiques formées d'un seul type d'atome : un élément moléculaire ; contenir des molécules ne fait pas d'une substance un composé. En III, chaque molécule, toutes identiques, contient deux types d'atomes : c'est un composé. IV contient des atomes isolés et des molécules diatomiques, donc deux substances différentes : c'est un mélange. I, II et III sont des corps purs ; II et III sont formés de molécules.",
        "ru": "В I находятся отдельные атомы одного вида — простое вещество. В II — двухатомные молекулы из атомов одного вида: это простое вещество молекулярного строения; наличие молекул не делает вещество сложным. В III каждая из одинаковых молекул содержит атомы двух видов — сложное вещество. В IV одновременно есть отдельные атомы и двухатомные молекулы, то есть два разных вещества — смесь. I, II и III — чистые вещества; II и III состоят из молекул.",
        "ar": "في I ذرات من نوع واحد منفصلة: عنصر. وفي II جزيئات ثنائية الذرة مكوّنة من نوع واحد من الذرات فقط: عنصر جزيئي، واحتواء المادة على جزيئات لا يجعلها مركّبًا. وفي III يحتوي كل جزيء من الجزيئات المتماثلة على نوعين مختلفين من الذرات: مركّب. وفي IV ذرات منفردة مع جزيئات ثنائية الذرة، أي مادتان مختلفتان: خليط. المواد I و II و III نقية، و II و III تتكوّنان من جزيئات.",
        "zh": "I 中是同种原子单独存在：单质。II 中是只由同种原子构成的双原子分子：由分子构成的单质；含有分子并不意味着是化合物。III 中每个相同的分子都含有两种不同的原子：化合物。IV 中单个原子和双原子分子共存，即两种不同的物质：混合物。I、II、III 是纯净物，其中 II 和 III 都由分子构成。",
        "ku": "Di I de atomên tenê yek curî bi serê xwe hene: element. Di II de molekulên duatomî yên tenê ji yek curê atomê pêk hatine hene: elementeke molekulî; hebûna molekulan maddeyekê nake pêkhate. Di III de her yek ji molekulên wekhev du curên cuda yên atomê dihewîne: pêkhate. Di IV de atomên tenê û molekulên duatomî, ango du maddeyên cuda bi hev re ne: tevlihevî. I, II û III maddeyên saf in; II û III ji molekulan pêk tên."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 116,
        "markup": "<rect x=\"8\" y=\"8\" width=\"78\" height=\"78\" class=\"qf-fill\"/><circle cx=\"28\" cy=\"28\" r=\"6\" class=\"qf-fill\"/><circle cx=\"63\" cy=\"26\" r=\"6\" class=\"qf-fill\"/><circle cx=\"43\" cy=\"53\" r=\"6\" class=\"qf-fill\"/><circle cx=\"70\" cy=\"63\" r=\"6\" class=\"qf-fill\"/><circle cx=\"26\" cy=\"72\" r=\"6\" class=\"qf-fill\"/><text x=\"47\" y=\"106\" text-anchor=\"middle\" class=\"qf-big\">I</text><rect x=\"98\" y=\"8\" width=\"78\" height=\"78\" class=\"qf-fill\"/><circle cx=\"112\" cy=\"26\" r=\"6\" class=\"qf-accent\"/><circle cx=\"123\" cy=\"26\" r=\"6\" class=\"qf-accent\"/><circle cx=\"142\" cy=\"38\" r=\"6\" class=\"qf-accent\"/><circle cx=\"153\" cy=\"38\" r=\"6\" class=\"qf-accent\"/><circle cx=\"114\" cy=\"60\" r=\"6\" class=\"qf-accent\"/><circle cx=\"125\" cy=\"60\" r=\"6\" class=\"qf-accent\"/><circle cx=\"144\" cy=\"70\" r=\"6\" class=\"qf-accent\"/><circle cx=\"155\" cy=\"70\" r=\"6\" class=\"qf-accent\"/><text x=\"137\" y=\"106\" text-anchor=\"middle\" class=\"qf-big\">II</text><rect x=\"188\" y=\"8\" width=\"78\" height=\"78\" class=\"qf-fill\"/><circle cx=\"200\" cy=\"33\" r=\"5\" class=\"qf-fill\"/><circle cx=\"220\" cy=\"33\" r=\"5\" class=\"qf-fill\"/><circle cx=\"210\" cy=\"28\" r=\"7\" class=\"qf-accent2\"/><circle cx=\"232\" cy=\"45\" r=\"5\" class=\"qf-fill\"/><circle cx=\"252\" cy=\"45\" r=\"5\" class=\"qf-fill\"/><circle cx=\"242\" cy=\"40\" r=\"7\" class=\"qf-accent2\"/><circle cx=\"202\" cy=\"69\" r=\"5\" class=\"qf-fill\"/><circle cx=\"222\" cy=\"69\" r=\"5\" class=\"qf-fill\"/><circle cx=\"212\" cy=\"64\" r=\"7\" class=\"qf-accent2\"/><circle cx=\"234\" cy=\"75\" r=\"5\" class=\"qf-fill\"/><circle cx=\"254\" cy=\"75\" r=\"5\" class=\"qf-fill\"/><circle cx=\"244\" cy=\"70\" r=\"7\" class=\"qf-accent2\"/><text x=\"227\" y=\"106\" text-anchor=\"middle\" class=\"qf-big\">III</text><rect x=\"278\" y=\"8\" width=\"78\" height=\"78\" class=\"qf-fill\"/><circle cx=\"296\" cy=\"26\" r=\"6\" class=\"qf-fill\"/><circle cx=\"338\" cy=\"56\" r=\"6\" class=\"qf-fill\"/><circle cx=\"300\" cy=\"72\" r=\"6\" class=\"qf-fill\"/><circle cx=\"318\" cy=\"26\" r=\"6\" class=\"qf-accent\"/><circle cx=\"329\" cy=\"26\" r=\"6\" class=\"qf-accent\"/><circle cx=\"302\" cy=\"50\" r=\"6\" class=\"qf-accent\"/><circle cx=\"313\" cy=\"50\" r=\"6\" class=\"qf-accent\"/><circle cx=\"326\" cy=\"74\" r=\"6\" class=\"qf-accent\"/><circle cx=\"337\" cy=\"74\" r=\"6\" class=\"qf-accent\"/><text x=\"317\" y=\"106\" text-anchor=\"middle\" class=\"qf-big\">IV</text>"
      }
    },
    {
      "id": "u01-twin16",
      "stem": {
        "tr": "Tabloda üç deneyde, işlemden önce ve sonra yapılan tartımların sonuçları verilmiştir.\nDeney sonuçlarıyla ilgili aşağıdaki yorumlardan hangileri doğrudur?\nI. 1. deney, kapalı bir sistemde toplam kütlenin korunduğunu gösterir.\nII. 2. deneyde katının kütlesi, magnezyuma havadan 1,6 g oksijen bağlandığı için artmıştır.\nIII. 3. deneyde 47,0 g madde yok olmuştur; kütlenin korunumu açık kaplarda geçerli değildir.",
        "en": "The table gives the masses weighed before and after the process in three experiments.\nWhich of the following interpretations of the results are correct?\nI. Experiment 1 shows that total mass is conserved in a closed system.\nII. In experiment 2 the mass of the solid increased because 1.6 g of oxygen from the air combined with the magnesium.\nIII. In experiment 3, 47.0 g of matter was destroyed; conservation of mass does not hold in open containers.",
        "de": "Die Tabelle zeigt die Massen, die in drei Versuchen vor und nach dem Vorgang gewogen wurden.\nWelche der folgenden Deutungen der Ergebnisse sind richtig?\nI. Versuch 1 zeigt, dass die Gesamtmasse in einem geschlossenen System erhalten bleibt.\nII. In Versuch 2 nahm die Masse des Feststoffs zu, weil sich 1,6 g Sauerstoff aus der Luft mit dem Magnesium verbanden.\nIII. In Versuch 3 wurden 47,0 g Materie vernichtet; die Massenerhaltung gilt in offenen Gefäßen nicht.",
        "fr": "Le tableau donne les masses pesées avant et après l'opération dans trois expériences.\nLesquelles des interprétations suivantes des résultats sont exactes ?\nI. L'expérience 1 montre que la masse totale se conserve dans un système fermé.\nII. Dans l'expérience 2, la masse du solide a augmenté parce que 1,6 g de dioxygène de l'air s'est fixé sur le magnésium.\nIII. Dans l'expérience 3, 47,0 g de matière ont disparu ; la conservation de la masse ne s'applique pas aux récipients ouverts.",
        "ru": "В таблице приведены массы, измеренные до и после процесса в трёх опытах.\nКакие из следующих выводов из результатов верны?\nI. Опыт 1 показывает, что в закрытой системе общая масса сохраняется.\nII. В опыте 2 масса твёрдого вещества увеличилась, потому что с магнием соединилось 1,6 г кислорода из воздуха.\nIII. В опыте 3 исчезло 47,0 г вещества; закон сохранения массы в открытых сосудах не выполняется.",
        "ar": "يبيّن الجدول الكتل المقيسة قبل العملية وبعدها في ثلاث تجارب.\nأيّ التفسيرات الآتية للنتائج صحيحة؟\nI. تُظهر التجربة 1 أن الكتلة الكلية محفوظة في نظام مغلق.\nII. في التجربة 2 ازدادت كتلة المادة الصلبة لأن 1.6 g من أكسجين الهواء اتحدت مع المغنيسيوم.\nIII. في التجربة 3 فَنِيَت 47.0 g من المادة؛ فقانون حفظ الكتلة لا يصحّ في الأوعية المفتوحة.",
        "zh": "表中给出了三个实验在操作前后称得的质量。\n关于实验结果，下列解释中正确的是哪些？\nI. 实验 1 表明在封闭体系中总质量守恒。\nII. 实验 2 中固体质量增加，是因为空气中 1.6 g 氧与镁结合了。\nIII. 实验 3 中有 47.0 g 物质消失了；质量守恒定律在敞口容器中不成立。",
        "ku": "Di tabloyê de encamên kêşanên berî û piştî karûbarê di sê ceribandinan de hatine dayîn.\nKîjan ji van şîroveyên encaman rast in?\nI. Ceribandina 1. nîşan dide ku di pergaleke girtî de girseya giştî tê parastin.\nII. Di ceribandina 2. de girseya hişkê zêde bûye, ji ber ku 1,6 g oksîjena hewayê bi magnezyûmê ve girêdayî bûye.\nIII. Di ceribandina 3. de 47,0 g madde winda bûye; parastina girseyê di firaxên vekirî de ne derbasdar e."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "I only",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "II only",
          "de": "Nur II",
          "fr": "II seulement",
          "ru": "Только II",
          "ar": "II فقط",
          "zh": "仅 II",
          "ku": "Tenê II"
        },
        {
          "tr": "I ve II",
          "en": "I and II",
          "de": "I und II",
          "fr": "I et II",
          "ru": "I и II",
          "ar": "I و II",
          "zh": "I 和 II",
          "ku": "I û II"
        },
        {
          "tr": "I ve III",
          "en": "I and III",
          "de": "I und III",
          "fr": "I et III",
          "ru": "I и III",
          "ar": "I و III",
          "zh": "I 和 III",
          "ku": "I û III"
        },
        {
          "tr": "I, II ve III",
          "en": "I, II and III",
          "de": "I, II und III",
          "fr": "I, II et III",
          "ru": "I, II и III",
          "ar": "I و II و III",
          "zh": "I、II 和 III",
          "ku": "I, II û III"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "1. deneyde kap kapalı olduğundan madde giremez ve çıkamaz; kalay oksitlense de toplam kütle 120,0 g'da kalır (I doğru). 2. deneyde magnezyum havadaki oksijenle birleşerek MgO oluşturur; kütle artışı 4,0 − 2,4 = 1,6 g, bağlanan oksijenin kütlesidir (II doğru). 3. deneyde yanma sonucu oluşan CO2 ve su buharı açık kaptan havaya karışır; 50,0 − 3,0 = 47,0 g'lık azalma kaçan gazlardan kaynaklanır. Kütle her tepkimede korunur; açık kapta yalnızca giren ve çıkan gazlar tartılamaz (III yanlış). Doğru yanıt: I ve II.",
        "en": "In experiment 1 the container is closed, so no matter can enter or leave; even though the tin is oxidised, the total mass stays at 120.0 g (I correct). In experiment 2 magnesium combines with oxygen from the air to form MgO; the increase 4.0 − 2.4 = 1.6 g is the mass of oxygen taken up (II correct). In experiment 3 the CO2 and water vapour formed by burning escape from the open container; the decrease of 50.0 − 3.0 = 47.0 g is due to the escaping gases. Mass is conserved in every reaction; in an open container the gases entering and leaving simply are not weighed (III false). Answer: I and II.",
        "de": "In Versuch 1 ist das Gefäß geschlossen, sodass kein Stoff hinein- oder hinausgelangt; obwohl das Zinn oxidiert wird, bleibt die Gesamtmasse bei 120,0 g (I richtig). In Versuch 2 verbindet sich Magnesium mit Luftsauerstoff zu MgO; die Zunahme 4,0 − 2,4 = 1,6 g ist die Masse des gebundenen Sauerstoffs (II richtig). In Versuch 3 entweichen das beim Verbrennen gebildete CO2 und der Wasserdampf aus dem offenen Gefäß; die Abnahme um 50,0 − 3,0 = 47,0 g stammt von den entweichenden Gasen. Die Masse bleibt bei jeder Reaktion erhalten; im offenen Gefäß werden nur die zu- und abströmenden Gase nicht mitgewogen (III falsch). Antwort: I und II.",
        "fr": "Dans l'expérience 1, le récipient est fermé : aucune matière ne peut entrer ni sortir ; bien que l'étain s'oxyde, la masse totale reste 120,0 g (I exacte). Dans l'expérience 2, le magnésium se combine au dioxygène de l'air pour former MgO ; l'augmentation 4,0 − 2,4 = 1,6 g est la masse d'oxygène fixée (II exacte). Dans l'expérience 3, le CO2 et la vapeur d'eau formés par la combustion s'échappent du récipient ouvert ; la diminution de 50,0 − 3,0 = 47,0 g est due aux gaz qui s'échappent. La masse se conserve dans toute réaction ; dans un récipient ouvert, on ne pèse simplement pas les gaz qui entrent et sortent (III fausse). Réponse : I et II.",
        "ru": "В опыте 1 сосуд закрыт, вещество не может ни войти, ни выйти; хотя олово окисляется, общая масса остаётся 120,0 г (I верно). В опыте 2 магний соединяется с кислородом воздуха, образуя MgO; прирост 4,0 − 2,4 = 1,6 г — это масса присоединившегося кислорода (II верно). В опыте 3 образующиеся при горении CO2 и водяной пар уходят из открытого сосуда; уменьшение на 50,0 − 3,0 = 47,0 г вызвано улетевшими газами. Масса сохраняется в любой реакции; в открытом сосуде просто не взвешиваются поступающие и уходящие газы (III неверно). Ответ: I и II.",
        "ar": "في التجربة 1 الوعاء مغلق فلا تدخل مادة ولا تخرج؛ ومع أن القصدير يتأكسد تبقى الكتلة الكلية 120.0 g (I صحيحة). في التجربة 2 يتحد المغنيسيوم مع أكسجين الهواء مكوّنًا MgO؛ والزيادة 4.0 − 2.4 = 1.6 g هي كتلة الأكسجين المتحد (II صحيحة). في التجربة 3 يتسرّب CO2 وبخار الماء الناتجان عن الاحتراق من الوعاء المفتوح؛ فالنقص 50.0 − 3.0 = 47.0 g سببه الغازات المتسرّبة. الكتلة محفوظة في كل تفاعل، أما في الوعاء المفتوح فالغازات الداخلة والخارجة وحدها هي التي لا يمكن وزنها (III خاطئة). الإجابة: I و II.",
        "zh": "实验 1 中容器密闭，物质既不能进入也不能逸出；虽然锡被氧化，总质量仍为 120.0 g（I 正确）。实验 2 中镁与空气中的氧结合生成 MgO；质量增加 4.0 − 2.4 = 1.6 g，就是结合的氧的质量（II 正确）。实验 3 中燃烧生成的 CO2 和水蒸气从敞口容器逸散到空气中；减少的 50.0 − 3.0 = 47.0 g 来自逸出的气体。任何反应中质量都守恒；敞口容器中只是进出的气体没有被称量（III 错误）。答案：I 和 II。",
        "ku": "Di ceribandina 1. de firax girtî ye, ji ber vê madde nikare bikeve û derkeve; her çend qelay oksîde dibe jî girseya giştî di 120,0 g de dimîne (I rast e). Di ceribandina 2. de magnezyûm bi oksîjena hewayê re dibe yek û MgO çêdike; zêdebûna 4,0 − 2,4 = 1,6 g girseya oksîjena girêdayî ye (II rast e). Di ceribandina 3. de CO2 û buhara avê ya ji şewitandinê çêdibin ji firaxa vekirî derdikevin hewayê; kêmbûna 50,0 − 3,0 = 47,0 g ji gazên ku direvin tê. Girse di her reaksiyonê de tê parastin; di firaxa vekirî de tenê gazên ku dikevin û derdikevin nayên kêşan (III şaş e). Bersiv: I û II."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Deney",
            "en": "Experiment",
            "de": "Versuch",
            "fr": "Expérience",
            "ru": "Опыт",
            "ar": "التجربة",
            "zh": "实验",
            "ku": "Ceribandin"
          },
          {
            "tr": "Yapılan işlem",
            "en": "Procedure",
            "de": "Vorgang",
            "fr": "Opération",
            "ru": "Процесс",
            "ar": "العملية",
            "zh": "操作",
            "ku": "Karûbar"
          },
          {
            "tr": "Önceki kütle (g)",
            "en": "Mass before (g)",
            "de": "Masse vorher (g)",
            "fr": "Masse avant (g)",
            "ru": "Масса до (г)",
            "ar": "الكتلة قبل (g)",
            "zh": "操作前质量 (g)",
            "ku": "Girseya berê (g)"
          },
          {
            "tr": "Sonraki kütle (g)",
            "en": "Mass after (g)",
            "de": "Masse nachher (g)",
            "fr": "Masse après (g)",
            "ru": "Масса после (г)",
            "ar": "الكتلة بعد (g)",
            "zh": "操作后质量 (g)",
            "ku": "Girseya paşê (g)"
          }
        ],
        "rows": [
          [
            "1",
            {
              "tr": "Kapalı cam kapta kalay ısıtılıyor (kap + içerik)",
              "en": "Tin heated in a sealed glass vessel (vessel + contents)",
              "de": "Zinn im verschlossenen Glasgefäß erhitzt (Gefäß + Inhalt)",
              "fr": "Étain chauffé dans un récipient en verre scellé (récipient + contenu)",
              "ru": "Олово нагревают в запаянном стеклянном сосуде (сосуд + содержимое)",
              "ar": "تسخين القصدير في وعاء زجاجي مغلق (الوعاء + المحتوى)",
              "zh": "在密封玻璃容器中加热锡（容器 + 内容物）",
              "ku": "Qelay di firaxeke camê ya girtî de tê germkirin (firax + naverok)"
            },
            "120,0",
            "120,0"
          ],
          [
            "2",
            {
              "tr": "Açık krozede magnezyum şerit yakılıyor (katı)",
              "en": "Magnesium ribbon burned in an open crucible (solid)",
              "de": "Magnesiumband im offenen Tiegel verbrannt (Feststoff)",
              "fr": "Ruban de magnésium brûlé dans un creuset ouvert (solide)",
              "ru": "Магниевую ленту сжигают в открытом тигле (твёрдое вещество)",
              "ar": "حرق شريط مغنيسيوم في بوتقة مفتوحة (المادة الصلبة)",
              "zh": "在敞口坩埚中燃烧镁条（固体）",
              "ku": "Şerîda magnezyûmê di krozeya vekirî de tê şewitandin (hişk)"
            },
            "2,4",
            "4,0"
          ],
          [
            "3",
            {
              "tr": "Açık kapta odun yakılıyor (katı)",
              "en": "Wood burned in an open container (solid)",
              "de": "Holz im offenen Gefäß verbrannt (Feststoff)",
              "fr": "Bois brûlé dans un récipient ouvert (solide)",
              "ru": "Древесину сжигают в открытом сосуде (твёрдое вещество)",
              "ar": "حرق خشب في وعاء مفتوح (المادة الصلبة)",
              "zh": "在敞口容器中燃烧木头（固体）",
              "ku": "Dar di firaxeke vekirî de tê şewitandin (hişk)"
            },
            "50,0",
            "3,0"
          ]
        ]
      }
    }
  ]
};

export default unit01;
