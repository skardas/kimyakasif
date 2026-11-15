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
    "ru": "От алхимии к химии и лабораторной безопасности",
    "ar": "من الخيمياء إلى الكيمياء والسلامة المختبرية",
    "zh": "从炼金术到化学与实验室安全",
    "ku": "Ji Simyayê ber bi Kîmyayê û Ewlehiya Laboratûwarê"
  },
  "facts": [
    {
      "id": "u01-f01",
      "fact": {
        "tr": "Lavoisier, Kütlenin Korunumu Kanunu ile modern kimyanın kurucusu kabul edilir.",
        "en": "Lavoisier is considered the founder of modern chemistry with his Law of Conservation of Mass.",
        "de": "Lavoisier gilt mit seinem Massenerhaltungsgesetz als Begründer der modernen Chemie.",
        "fr": "Lavoisier est considéré comme le fondateur de la chimie moderne avec sa loi de conservation de la masse.",
        "ru": "Лавуазье считается основоположником современной химии с его Законом сохранения массы.",
        "ar": "يعتبر لافوازييه مؤسس الكيمياء الحديثة من خلال قانون حفظ الكتلة.",
        "zh": "拉瓦锡以其质量守恒定律被认为是现代化学的创始人。",
        "ku": "Lavoisier bi Qanûna Parastina Komkujiyê damezrînerê kîmya nûjen tê hesibandin."
      },
      "trap": {
        "tr": "Simyacılar teraziyi hassas olarak kullanarak kütle korunumunu kanıtlamıştır.",
        "en": "Alchemists proved the conservation of mass by using the analytical balance precisely.",
        "de": "Alchemisten bewiesen die Massenerhaltung durch die präzise Verwendung der Analysenwaage.",
        "fr": "Les alchimistes ont prouvé la conservation de la masse en utilisant précisément la balance analytique.",
        "ru": "Алхимики доказали сохранение массы, точно используя аналитические весы.",
        "ar": "أثبت الخيميائيون حفظ الكتلة باستخدام الميزان التحليلي الدقيق.",
        "zh": "炼金术士通过精确使用精密天平证明了质量守恒。",
        "ku": "Alkîmîstan parastina girseyê bi karanîna terezûya hesas îspat kirin."
      },
      "osymTip": {
        "tr": "Simya teorik temellere ve sistematik deneylere dayanmaz.",
        "en": "Alchemy is not based on theoretical foundations and systematic experiments.",
        "de": "Alchemie basiert nicht auf theoretischen Grundlagen und systematischen Experimenten.",
        "fr": "L'alchimie ne repose pas sur des fondements théoriques et des expériences systématiques.",
        "ru": "Алхимия не основана на теоретических основах и систематических экспериментах.",
        "ar": "لا تعتمد الخيمياء على أسس نظرية وتجارب منهجية.",
        "zh": "炼金术不是建立在理论基础和系统实验的基础上的。",
        "ku": "Alkîmya ne li ser bingehên teorîk û ceribandinên sîstematîk e."
      }
    },
    {
      "id": "u01-f02",
      "fact": {
        "tr": "Zaç yağı H2SO4 (sülfürik asit), Tuz ruhu HCl (hidroklorik asit) geleneksel adıdır.",
        "en": "Oil of vitriol is H2SO4 (sulfuric acid); spirit of salt (muriatic acid) is the traditional name for HCl (hydrochloric acid).",
        "de": "Vitriolöl ist H2SO4 (Schwefelsäure), der traditionelle Name von Salzsäure (Salzgeist) ist HCl (Salzsäure).",
        "fr": "L'huile de vitriol est H2SO4 (acide sulfurique) ; l'esprit de sel est le nom traditionnel de HCl (acide chlorhydrique).",
        "ru": "Купоросное масло — это H2SO4 (серная кислота), а соляной спирт — традиционное название HCl (соляной кислоты).",
        "ar": "زيت الزاج هو H2SO4 (حمض الكبريتيك)، والاسم التقليدي لروح الملح هو HCl (حمض الهيدروكلوريك).",
        "zh": "矾油是H2SO4（硫酸）的传统名称，盐精是HCl（盐酸）的传统名称。",
        "ku": "Rûnê zaçê H2SO4 (asîda sulfurîk) e, navê kevneşopî yê ruhê xwê HCl (asîda hîdroclorîk) e."
      },
      "trap": {
        "tr": "Zaç yağı HNO3 formülüne sahiptir.",
        "en": "Oil of vitriol has the chemical formula HNO3.",
        "de": "Vitriolöl besitzt die chemische Formel HNO3.",
        "fr": "L'huile de vitriol a pour formule chimique HNO3.",
        "ru": "Купоросное масло имеет формулу HNO3.",
        "ar": "زيت الزاج له الصيغة الكيميائية HNO3.",
        "zh": "矾油的化学式为 HNO3。",
        "ku": "Rûnê zaçê xwedî formula HNO3 ye."
      },
      "osymTip": {
        "tr": "HNO3 kezzaptır, zaç yağı H2SO4'tür.",
        "en": "HNO3 is aqua fortis (nitric acid), whereas oil of vitriol is H2SO4 (sulfuric acid).",
        "de": "HNO3 ist Scheidewasser (Salpetersäure), während Vitriolöl H2SO4 (Schwefelsäure) ist.",
        "fr": "HNO3 est l'eau-forte (acide nitrique), tandis que l'huile de vitriol est H2SO4 (acide sulfurique).",
        "ru": "HNO3 — это крепкая водка (азотная кислота), тогда как купоросное масло — это H2SO4 (серная кислота).",
        "ar": "HNO3 هو ماء الفضة (حمض النيتريك)، بينما زيت الزاج هو H2SO4 (حمض الكبريتيك).",
        "zh": "HNO3是浓硝酸（硝镪水），而矾油才是H2SO4（硫酸）。",
        "ku": "HNO3 kezzap (asîda nîtrîk) e, lê rûnê zaçê H2SO4 (asîda sulfurîk) e."
      }
    },
    {
      "id": "u01-f03",
      "fact": {
        "tr": "Cabir bin Hayyan damıtma imbiğini (alembic) geliştirerek nitrik asit ve kral suyunu elde etmiştir.",
        "en": "Jabir ibn Hayyan developed the alembic and synthesized nitric acid and aqua regia.",
        "de": "Dschābir ibn Hayyān entwickelte den Alambic (Destillierkolben) und stellte Salpetersäure sowie Königswasser her.",
        "fr": "Jabir ibn Hayyan a perfectionné l'alambic et obtenu l'acide nitrique et l'eau régale.",
        "ru": "Джабир ибн Хайян усовершенствовал перегонный куб (аламбик) и получил азотную кислоту и царскую водку.",
        "ar": "قام جابر بن حيان بتطوير الإنبيق وحصل على حمض النيتريك والماء الملكي.",
        "zh": "贾比尔·伊本·哈扬改进了蒸馏器（alembic）并制得了硝酸和王水。",
        "ku": "Cabir bin Heyyan alambîk pêş xist û asîda nîtrîk û ava şahî bi dest xist."
      },
      "trap": {
        "tr": "Kral suyunu Aristo dört element kuramıyla açıklamıştır.",
        "en": "Aristotle explained aqua regia using the four elements theory.",
        "de": "Aristoteles erklärte Königswasser mit der Vier-Elemente-Lehre.",
        "fr": "Aristote a expliqué l'eau régale par la théorie des quatre éléments.",
        "ru": "Аристотель объяснил царскую водку теорией четырех элементов.",
        "ar": "فسر أرسطو الماء الملكي بنظرية العناصر الأربعة.",
        "zh": "亚里士多德用四元素学说解释了王水。",
        "ku": "Arîsto ava şahî bi teoriya çar hêmanan rave kir."
      }
    },
    {
      "id": "u01-f04",
      "fact": {
        "tr": "Ebu Bekir er-Razi kostik soda ve karınca asidini (formik asit) ilk kez elde etmiştir.",
        "en": "Abu Bakr al-Razi synthesized caustic soda and formic acid (methanoic acid) for the first time.",
        "de": "Abu Bakr ar-Razi stellte erstmals Ätznatron und Ameisensäure (Methansäure) her.",
        "fr": "Abu Bakr al-Razi a obtenu pour la première fois la soude caustique et l'acide formique (acide méthanoïque).",
        "ru": "Абу Бакр ар-Рази впервые получил едкий натр и муравьиную кислоту (метановую кислоту).",
        "ar": "حصل أبو بكر الرازي على الصودا الكاوية وحمض الفورميك (حمض النمليك) لأول مرة.",
        "zh": "阿布·伯克尔·拉齐首次制得了烧碱和甲酸（蚁酸）。",
        "ku": "Ebû Bekir el-Razî bo cara yekem soda kaustîk û asîda formîk bi dest xist."
      },
      "trap": {
        "tr": "Formik asit Robert Boyle tarafından element olarak tanımlanmıştır.",
        "en": "Formic acid was identified as an element by Robert Boyle.",
        "de": "Ameisensäure wurde von Robert Boyle als Element identifiziert.",
        "fr": "L'acide formique a été identifié comme élément par Robert Boyle.",
        "ru": "Муравьиная кислота была идентифицирована как элемент Робертом Бойлем.",
        "ar": "تم تحديد حمض الفورميك كعنصر من قبل روبرت بويل.",
        "zh": "甲酸被罗伯特·博伊尔鉴定为一种元素。",
        "ku": "Asîdê formîk wekî elementek ji hêla Robert Boyle ve hate nas kirin."
      }
    },
    {
      "id": "u01-f05",
      "fact": {
        "tr": "Büret, titrasyon deneylerinde hassas sıvı hacmi ölçümü ve kontrollü damlatma için kullanılır.",
        "en": "The burette is used for precise liquid volume measurement and controlled dripping in titration experiments.",
        "de": "Die Bürette dient der präzisen Messung des Flüssigkeitsvolumens und dem kontrollierten Tropfen in Titrationsexperimenten.",
        "fr": "La burette est utilisée pour une mesure précise du volume de liquide et un égouttement contrôlé dans les expériences de titrage.",
        "ru": "Бюретка используется для точного измерения объема жидкости и контроля капания в экспериментах по титрованию.",
        "ar": "يتم استخدام السحاحة لقياس حجم السائل بشكل دقيق والتحكم في التقطير في تجارب المعايرة.",
        "zh": "滴定管用于滴定实验中精确测量液体体积和控制滴注。",
        "ku": "Buret ji bo pîvandina hêjmara şilavê ya rast û di ceribandinên titrasyonê de rijandina kontrolkirî tê bikar anîn."
      },
      "trap": {
        "tr": "Büret sadece yüksek sıcaklıkta sıvı kaynatmak için kullanılır.",
        "en": "The burette is used only for boiling liquids at high temperatures.",
        "de": "Die Bürette wird nur zum Kochen von Flüssigkeiten bei hohen Temperaturen verwendet.",
        "fr": "La burette est utilisée uniquement pour faire bouillir des liquides à haute température.",
        "ru": "Бюретку используют только для кипячения жидкостей при высоких температурах.",
        "ar": "تُستخدم السحاحة فقط لغلي السوائل في درجات حرارة عالية.",
        "zh": "滴定管仅用于高温沸腾液体。",
        "ku": "Buret tenê ji bo kelandina şilekên di germahiyên bilind de tê bikar anîn."
      }
    },
    {
      "id": "u01-f06",
      "fact": {
        "tr": "Erlenmayer çalkalama gerektiren çözelti hazırlama ve titrasyonda yaygın kullanılır.",
        "en": "Erlenmayer is widely used in solution preparation and titration that requires shaking.",
        "de": "Erlenmayer wird häufig bei der Lösungsvorbereitung und Titration verwendet, die Schütteln erfordert.",
        "fr": "Erlenmayer est largement utilisé dans la préparation et le titrage de solutions nécessitant une agitation.",
        "ru": "Эрленмайера широко используется при приготовлении растворов и титровании, требующем встряхивания.",
        "ar": "يستخدم إرلينماير على نطاق واسع في تحضير المحاليل والمعايرة التي تتطلب الرج.",
        "zh": "锥形瓶广泛用于需要摇动的溶液制备和滴定。",
        "ku": "Erlenmayer bi berfirehî di amadekirina çareseriyê û titrkirina ku hewceyê hejandinê de ye tê bikar anîn."
      },
      "trap": {
        "tr": "Erlenmayer gaz hacmi ölçümünde büretin yerini tutar.",
        "en": "Erlenmayer replaces the burette in gas volume measurement.",
        "de": "Erlenmayer ersetzt die Bürette bei der Gasvolumenmessung.",
        "fr": "Erlenmayer remplace la burette dans la mesure du volume de gaz.",
        "ru": "Эрленмайер заменяет бюретку при измерении объема газа.",
        "ar": "Erlenmayer يستبدل السحاحة في قياس حجم الغاز.",
        "zh": "Erlenmayer 在气体体积测量中取代了滴定管。",
        "ku": "Erlenmayer di pîvana qebareya gazê de buretê diguhezîne."
      }
    },
    {
      "id": "u01-f07",
      "fact": {
        "tr": "Balon joje, belirli derişimde standart çözelti hazırlamak için dar boyunlu hassas cam kaptır.",
        "en": "The volumetric flask is a narrow-necked precision glass container for preparing a standard solution at a specific concentration.",
        "de": "Der Messkolben ist ein enghalsiger Präzisionsglasbehälter zur Herstellung einer Standardlösung in einer bestimmten Konzentration.",
        "fr": "La fiole jaugée est un récipient en verre de précision à col étroit permettant de préparer une solution étalon à une concentration spécifique.",
        "ru": "Мерная колба представляет собой прецизионную стеклянную емкость с узким горлышком для приготовления стандартного раствора определенной концентрации.",
        "ar": "الدورق الحجمي عبارة عن حاوية زجاجية دقيقة ضيقة العنق لتحضير محلول قياسي بتركيز معين.",
        "zh": "容量瓶是一种细颈精密玻璃容器，用于配制特定浓度的标准溶液。",
        "ku": "Firmaya volumetric konteynirek camê ya bi stûyê teng e ku ji bo amadekirina çareseriyek standard di konsantreyek taybetî de ye."
      },
      "trap": {
        "tr": "Balon joje katı yakma fırını olarak kullanılır.",
        "en": "The volumetric flask is used as a solid incinerator.",
        "de": "Der Messkolben dient als Feststoffverbrennungsanlage.",
        "fr": "La fiole jaugée est utilisée comme incinérateur de solides.",
        "ru": "Мерную колбу используют в качестве печи для сжигания твердых веществ.",
        "ar": "يتم استخدام الدورق الحجمي كمحرقة صلبة.",
        "zh": "容量瓶用作固体焚烧炉。",
        "ku": "Firmaya volumetric wekî şewitandina hişk tê bikaranîn."
      }
    },
    {
      "id": "u01-f08",
      "fact": {
        "tr": "Kezzap HNO3, kireç taşı CaCO3, kostik soda NaOH bileşiklerinin geleneksel adlarıdır.",
        "en": "Kezzap HNO3, limestone CaCO3, caustic soda are the traditional names of NaOH compounds.",
        "de": "Kezzap HNO3, Kalkstein CaCO3, Natronlauge sind die traditionellen Namen von NaOH-Verbindungen.",
        "fr": "Kezzap HNO3, calcaire CaCO3, soude caustique sont les noms traditionnels des composés NaOH.",
        "ru": "Кеззап HNO3, известняк CaCO3, каустическая сода – традиционные названия соединений NaOH.",
        "ar": "Kezzap HNO3، الحجر الجيري CaCO3، الصودا الكاوية هي الأسماء التقليدية لمركبات NaOH.",
        "zh": "Kezzap HNO3、石灰石 CaCO3、烧碱是 NaOH 化合物的传统名称。",
        "ku": "Kezzap HNO3, kevirê kilsinî CaCO3, soda caustic navên kevneşopî yên pêkhateyên NaOH in."
      },
      "trap": {
        "tr": "Kireç taşı CaO sönmemiş kireç ile aynı bileşiktir.",
        "en": "Limestone CaO is the same compound as quicklime.",
        "de": "Kalkstein CaO ist die gleiche Verbindung wie Branntkalk.",
        "fr": "Le calcaire CaO est le même composé que la chaux vive.",
        "ru": "Известняк CaO представляет собой то же соединение, что и негашеная известь.",
        "ar": "الحجر الجيري CaO هو نفس مركب الجير الحي.",
        "zh": "石灰石 CaO 与生石灰是相同的化合物。",
        "ku": "Kevirê kilsinî CaO heman pêkhatî ye wekî kilê zû."
      }
    },
    {
      "id": "u01-f09",
      "fact": {
        "tr": "Fizikokimya, kimyasal sistemlerde sıcaklık, basınç, iş ve enerji dönüşümlerini inceler.",
        "en": "Physical chemistry studies temperature, pressure, work and energy transformations in chemical systems.",
        "de": "Die physikalische Chemie untersucht Temperatur-, Druck-, Arbeits- und Energieumwandlungen in chemischen Systemen.",
        "fr": "La chimie physique étudie les transformations de température, de pression, de travail et d’énergie dans les systèmes chimiques.",
        "ru": "Физическая химия изучает температуру, давление, превращения работы и энергии в химических системах.",
        "ar": "تدرس الكيمياء الفيزيائية درجة الحرارة والضغط والعمل وتحولات الطاقة في الأنظمة الكيميائية.",
        "zh": "物理化学研究化学系统中的温度、压力、功和能量转换。",
        "ku": "Kîmyaya fizîkî di pergalên kîmyewî de germahî, zext, kar û veguherînên enerjiyê lêkolîn dike."
      },
      "trap": {
        "tr": "Fizikokimya yalnızca canlı metabolizmasındaki molekülleri inceler.",
        "en": "Physicochemistry only studies molecules in living metabolism.",
        "de": "Die Physikochemie untersucht nur Moleküle im lebenden Stoffwechsel.",
        "fr": "La physicochimie étudie uniquement les molécules du métabolisme vivant.",
        "ru": "Физикохимия изучает только молекулы в живом метаболизме.",
        "ar": "الكيمياء الفيزيائية تدرس فقط الجزيئات في عملية التمثيل الغذائي الحي.",
        "zh": "物理化学仅研究生命代谢中的分子。",
        "ku": "Fîzokîmya tenê molekulên di metabolîzma zindî de lêkolîn dike."
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
        "ar": "تحدد الكيمياء التحليلية مكونات المواد نوعيا وكميا.",
        "zh": "分析化学定性和定量地测定物质的成分。",
        "ku": "Kîmyaya analîtîk pêkhateyên maddeyan bi kalîte û mîqdar diyar dike."
      },
      "trap": {
        "tr": "Analitik kimya karbon temelli polimerleri sentezleyen daldır.",
        "en": "Analytical chemistry is the branch that synthesizes carbon-based polymers.",
        "de": "Die analytische Chemie ist der Zweig, der kohlenstoffbasierte Polymere synthetisiert.",
        "fr": "La chimie analytique est la branche qui synthétise les polymères à base de carbone.",
        "ru": "Аналитическая химия — это раздел, занимающийся синтезом полимеров на основе углерода.",
        "ar": "الكيمياء التحليلية هي الفرع الذي يقوم بتصنيع البوليمرات القائمة على الكربون.",
        "zh": "分析化学是合成碳基聚合物的分支。",
        "ku": "Kîmyaya analîtîk şaxek e ku polîmerên karbon-based sentez dike."
      }
    },
    {
      "id": "u01-f11",
      "fact": {
        "tr": "Biyokimya, canlı organizmalardaki DNA, protein ve enzim tepkimelerini inceler.",
        "en": "Biochemistry studies DNA, protein and enzyme reactions in living organisms.",
        "de": "Die Biochemie untersucht DNA-, Protein- und Enzymreaktionen in lebenden Organismen.",
        "fr": "La biochimie étudie les réactions de l'ADN, des protéines et des enzymes dans les organismes vivants.",
        "ru": "Биохимия изучает реакции ДНК, белков и ферментов в живых организмах.",
        "ar": "تدرس الكيمياء الحيوية تفاعلات الحمض النووي والبروتين والإنزيمات في الكائنات الحية.",
        "zh": "生物化学研究生物体中的 DNA、蛋白质和酶反应。",
        "ku": "Biyokîmya reaksiyonên ADN, proteîn û enzîman di organîzmayên zindî de lêkolîn dike."
      },
      "trap": {
        "tr": "Biyokimya endüstriyel metal alaşımlarını inceler.",
        "en": "Biochemistry studies industrial metal alloys.",
        "de": "Die Biochemie untersucht industrielle Metalllegierungen.",
        "fr": "La biochimie étudie les alliages métalliques industriels.",
        "ru": "Биохимия изучает промышленные металлические сплавы.",
        "ar": "تدرس الكيمياء الحيوية السبائك المعدنية الصناعية.",
        "zh": "生物化学研究工业金属合金。",
        "ku": "Biyokîmya aligirên metal ên pîşesaziyê lêkolîn dike."
      }
    },
    {
      "id": "u01-f12",
      "fact": {
        "tr": "Taharriş edici güvenlik piktogramı ünlem işareti ile gösterilir.",
        "en": "The irritating safety pictogram is indicated by an exclamation mark.",
        "de": "Das irritierende Sicherheitspiktogramm ist durch ein Ausrufezeichen gekennzeichnet.",
        "fr": "Le pictogramme de sécurité irritant est signalé par un point d'exclamation.",
        "ru": "Раздражающая пиктограмма безопасности обозначается восклицательным знаком.",
        "ar": "يُشار إلى الرسم التوضيحي للسلامة المزعج بعلامة تعجب.",
        "zh": "令人恼火的安全象形图用感叹号表示。",
        "ku": "Pîktograma ewlehiyê ya acizker bi nîşanek ravek tê destnîşan kirin."
      },
      "trap": {
        "tr": "Ünlem piktogramı patlayıcı maddeleri temsil eder.",
        "en": "The exclamation pictogram represents explosive substances.",
        "de": "Das Ausrufezeichen-Piktogramm steht für explosive Stoffe.",
        "fr": "Le pictogramme d'exclamation représente des substances explosives.",
        "ru": "Восклицательный знак обозначает взрывоопасные вещества.",
        "ar": "يمثل رسم التعجب المواد المتفجرة.",
        "zh": "感叹号象形图代表爆炸性物质。",
        "ku": "Pîktograma qîrînê madeyên teqemenî nîşan dide."
      }
    },
    {
      "id": "u01-f13",
      "fact": {
        "tr": "Çevreye zararlı maddeler kurumuş ağaç ve ölü balık sembolü ile gösterilir.",
        "en": "Substances that are harmful to the environment are indicated by the symbol of dried trees and dead fish.",
        "de": "Auf umweltschädliche Stoffe wird durch das Symbol vertrockneter Bäume und toter Fische hingewiesen.",
        "fr": "Les substances nocives pour l'environnement sont signalées par le symbole des arbres séchés et des poissons morts.",
        "ru": "Вещества, вредные для окружающей среды, обозначаются символом засохших деревьев и мертвой рыбы.",
        "ar": "يشار إلى المواد الضارة بالبيئة برمز الأشجار المجففة والأسماك الميتة.",
        "zh": "对环境有害的物质用干树和死鱼的符号表示。",
        "ku": "Madeyên ku zerarê didin jîngehê bi nîşana darên hişkbûyî û masiyên mirî têne nîşandayîn."
      },
      "trap": {
        "tr": "Çevreye zararlı maddeler alev sembolü ile gösterilir.",
        "en": "Substances that are harmful to the environment are indicated with a flame symbol.",
        "de": "Umweltschädliche Stoffe sind mit einem Flammensymbol gekennzeichnet.",
        "fr": "Les substances nocives pour l'environnement sont signalées par un symbole de flamme.",
        "ru": "Вещества, вредные для окружающей среды, обозначаются символом пламени.",
        "ar": "تتم الإشارة إلى المواد الضارة بالبيئة برمز اللهب.",
        "zh": "对环境有害的物质用火焰符号表示。",
        "ku": "Madeyên ku ji jîngehê re zerardar in, bi nîşana şewatê têne destnîşan kirin."
      }
    },
    {
      "id": "u01-f14",
      "fact": {
        "tr": "Zehirli (toksik) maddeler kuru kafa sembolü taşır ve solunmamalıdır.",
        "en": "Poisonous (toxic) substances carry the skull symbol and should not be inhaled.",
        "de": "Giftige (toxische) Stoffe tragen das Totenkopf-Symbol und sollten nicht eingeatmet werden.",
        "fr": "Les substances toxiques (toxiques) portent le symbole du crâne et ne doivent pas être inhalées.",
        "ru": "Ядовитые (токсичные) вещества имеют символ черепа, и их нельзя вдыхать.",
        "ar": "المواد السامة (السامة) تحمل رمز الجمجمة ويجب عدم استنشاقها.",
        "zh": "有毒（有毒）物质带有骷髅符号，不应吸入。",
        "ku": "Madeyên jehrîn (jehrîn) sembola serjê hildigirin û divê neyên hilgirtin."
      },
      "trap": {
        "tr": "Kuru kafa sembolü radyoaktif ışıma yapan maddeleri belirtir.",
        "en": "The skull symbol indicates substances that emit radioactive radiation.",
        "de": "Das Totenkopfsymbol weist auf Stoffe hin, die radioaktive Strahlung aussenden.",
        "fr": "Le symbole du crâne indique les substances qui émettent des rayonnements radioactifs.",
        "ru": "Символ черепа обозначает вещества, излучающие радиоактивное излучение.",
        "ar": "يشير رمز الجمجمة إلى المواد التي تنبعث منها إشعاعات مشعة.",
        "zh": "骷髅符号表示发射放射性辐射的物质。",
        "ku": "Sembola skull maddeyên ku tîrêjên radyoaktîf derdixin nîşan dide."
      }
    },
    {
      "id": "u01-f15",
      "fact": {
        "tr": "Asit üzerine su dökülmez; aşırı ısı açığa çıkıp sıçramaması için su üzerine yavaşça asit eklenir.",
        "en": "Water is not poured on acid; Acid is slowly added to the water to prevent excess heat from being released and splashing.",
        "de": "Wasser wird nicht auf Säure gegossen; Dem Wasser wird langsam Säure zugesetzt, um zu verhindern, dass überschüssige Hitze freigesetzt wird und verspritzt.",
        "fr": "L'eau n'est pas versée sur l'acide ; L'acide est ajouté lentement à l'eau pour éviter que l'excès de chaleur ne soit libéré et éclaboussé.",
        "ru": "Воду на кислоту не льют; В воду медленно добавляют кислоту, чтобы предотвратить выделение избыточного тепла и разбрызгивание.",
        "ar": "ولا يُسكب الماء على الحمض؛ يضاف الحمض ببطء إلى الماء لمنع إطلاق الحرارة الزائدة وتناثرها.",
        "zh": "水不倒在酸上；将酸缓慢添加到水中，以防止多余的热量释放和飞溅。",
        "ku": "Av li asîdê nayê rijandin; Asît hêdî hêdî li avê tê zêdekirin da ku germa zêde dernekeve û nerije."
      },
      "trap": {
        "tr": "Derişik asidi seyreltirken hızla üzerine soğuk su boşaltılmalıdır.",
        "en": "When diluting concentrated acid, cold water should be quickly poured over it.",
        "de": "Beim Verdünnen von konzentrierter Säure sollte diese schnell mit kaltem Wasser übergossen werden.",
        "fr": "Lors de la dilution d'un acide concentré, il convient de verser rapidement de l'eau froide dessus.",
        "ru": "При разбавлении концентрированной кислоты ее следует быстро залить холодной водой.",
        "ar": "عند تخفيف الحمض المركز، يجب سكب الماء البارد عليه بسرعة.",
        "zh": "稀释浓酸时，应迅速倒入冷水。",
        "ku": "Dema ku asîda konsantrekirî tê rijandin, divê ava sar zû bi ser de were rijandin."
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
        "ar": "يمنع منعا باتا شم وتذوق المواد الكيميائية في المختبر.",
        "zh": "严禁在实验室内嗅闻和品尝化学品。",
        "ku": "Bêhnkirin û tamkirina madeyên kîmyewî di laboratuarê de bi tundî qedexe ye."
      },
      "trap": {
        "tr": "Organik çözücülerin saflığı koklanarak tayin edilebilir.",
        "en": "The purity of organic solvents can be determined by smell.",
        "de": "Die Reinheit organischer Lösungsmittel lässt sich anhand des Geruchs bestimmen.",
        "fr": "La pureté des solvants organiques peut être déterminée par l'odeur.",
        "ru": "Чистоту органических растворителей можно определить по запаху.",
        "ar": "يمكن تحديد نقاء المذيبات العضوية عن طريق الرائحة.",
        "zh": "有机溶剂的纯度可以通过气味来判断。",
        "ku": "Paqijiya rûkalên organîk bi bîhnê dikare were destnîşankirin."
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
        "ku": "Simya"
      },
      "conceptB": {
        "tr": "Kimya",
        "en": "Chemistry",
        "de": "Chemie",
        "fr": "Chimie",
        "ru": "Химия",
        "ar": "الكيمياء",
        "zh": "化学",
        "ku": "Kîmya"
      },
      "distinction": {
        "tr": "Simya deneme-yanılmaya dayalı bir uğraşken kimya sistematik deney ve ölçüme dayalı pozitif bilimdir.",
        "en": "While alchemy is an endeavor based on trial and error, chemistry is a positive science based on systematic experimentation and measurement.",
        "de": "Während die Alchemie ein auf Versuch und Irrtum basierendes Unterfangen ist, ist die Chemie eine positive Wissenschaft, die auf systematischem Experimentieren und Messen basiert.",
        "fr": "Alors que l'alchimie est une entreprise basée sur des essais et des erreurs, la chimie est une science positive basée sur l'expérimentation et la mesure systématiques.",
        "ru": "В то время как алхимия — это попытка, основанная на пробах и ошибках, химия — позитивная наука, основанная на систематических экспериментах и измерениях.",
        "ar": "في حين أن الكيمياء هي مسعى يعتمد على التجربة والخطأ، فإن الكيمياء هي علم إيجابي يعتمد على التجريب والقياس المنهجي.",
        "zh": "炼金术是一门基于反复试验的努力，而化学是一门基于系统实验和测量的实证科学。",
        "ku": "Digel ku alkîmya hewldanek li ser ceribandin û xeletiyê ye, kîmya zanistek erênî ye ku li ser ceribandin û pîvandina sîstematîk e."
      }
    },
    {
      "id": "u01-c02",
      "conceptA": {
        "tr": "Element",
        "en": "element",
        "de": "Element",
        "fr": "élément",
        "ru": "элемент",
        "ar": "عنصر",
        "zh": "元素",
        "ku": "element"
      },
      "conceptB": {
        "tr": "Bileşik",
        "en": "compound",
        "de": "Verbindung",
        "fr": "composé",
        "ru": "соединение",
        "ar": "مركب",
        "zh": "化合物",
        "ku": "pêkhatî"
      },
      "distinction": {
        "tr": "Element tek tür atom içerirken bileşik farklı elementlerin sabit oranla birleştiği saf maddedir.",
        "en": "While an element contains a single type of atom, a compound is a pure substance in which different elements are combined in fixed proportions.",
        "de": "Während ein Element eine einzige Atomart enthält, ist eine Verbindung eine reine Substanz, in der verschiedene Elemente in festen Anteilen kombiniert sind.",
        "fr": "Alors qu’un élément contient un seul type d’atome, un composé est une substance pure dans laquelle différents éléments sont combinés dans des proportions fixes.",
        "ru": "Хотя элемент содержит атом одного типа, соединение представляет собой чистое вещество, в котором различные элементы объединены в фиксированных пропорциях.",
        "ar": "بينما يحتوي العنصر على نوع واحد من الذرة، فإن المركب عبارة عن مادة نقية تتحد فيها عناصر مختلفة بنسب ثابتة.",
        "zh": "虽然元素包含单一类型的原子，但化合物是不同元素以固定比例组合的纯物质。",
        "ku": "Dema ku hêmanek celebek atomek yekane vedihewîne, pêkhateyek maddeyek paqij e ku tê de hêmanên cihêreng bi rêjeyên sabît têne hev kirin."
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
        "ku": "Analysis Qualitative"
      },
      "conceptB": {
        "tr": "Nicel Analiz",
        "en": "Quantitative Analysis",
        "de": "Quantitative Analyse",
        "fr": "Analyse quantitative",
        "ru": "Количественный анализ",
        "ar": "التحليل الكمي",
        "zh": "定量分析",
        "ku": "Analysis Quantitative"
      },
      "distinction": {
        "tr": "Nitel analiz \"ne var?\" sorusuna, nicel analiz \"ne kadar var?\" sorusuna cevap verir.",
        "en": "Qualitative analysis “what is it?” to the question, quantitative analysis \"how much is there?\" answers the question.",
        "de": "Qualitative Analyse „Was ist das?“ Auf die Frage, quantitative Analyse „Wie viel ist da?“ beantwortet die Frage.",
        "fr": "Analyse qualitative « qu'est-ce que c'est ? à la question, analyse quantitative « combien y a-t-il ? répond à la question.",
        "ru": "Качественный анализ «что это?» на вопрос, количественный анализ \"сколько там?\" отвечает на вопрос.",
        "ar": "التحليل النوعي \"ما هو؟\" على السؤال، التحليل الكمي \"كم هو هناك؟\" يجيب على السؤال.",
        "zh": "定性分析“这是什么？”对于问题，定量分析“有多少？”回答了问题。",
        "ku": "Analîzek kalîteyê \"ew çi ye?\" li ser pirsa, analîza hejmarî \"çiqas heye?\" bersiva pirsê dide."
      }
    },
    {
      "id": "u01-c04",
      "conceptA": {
        "tr": "Büret",
        "en": "burette",
        "de": "Bürette",
        "fr": "burette",
        "ru": "бюретка",
        "ar": "السحاحة",
        "zh": "滴定管",
        "ku": "burette"
      },
      "conceptB": {
        "tr": "Pipet",
        "en": "pipette",
        "de": "Pipette",
        "fr": "pipette",
        "ru": "пипетка",
        "ar": "ماصة",
        "zh": "移液器",
        "ku": "pipette"
      },
      "distinction": {
        "tr": "Büret musluklu ve titrasyon damlatmalı, pipet ise küçük hacimli sıvı aktarıcıdır.",
        "en": "A burette has a stopper and a titration dropper, while a pipette is a small volume liquid transmitter.",
        "de": "Eine Bürette hat einen Stopfen und einen Titriertropfer, während eine Pipette ein Flüssigkeitstransmitter für kleine Volumina ist.",
        "fr": "Une burette est dotée d'un bouchon et d'un compte-gouttes de titrage, tandis qu'une pipette est un transmetteur de liquide de petit volume.",
        "ru": "Бюретка имеет пробку и пипетку для титрования, а пипетка представляет собой датчик жидкости небольшого объема.",
        "ar": "تحتوي السحاحة على سدادة وقطارة معايرة، في حين أن الماصة عبارة عن جهاز إرسال سائل صغير الحجم.",
        "zh": "滴定管有塞子和滴定管，而移液管是小容量液体传送器。",
        "ku": "Bûretek xwedan rawestgehek û dilopek titrasyonê ye, dema ku pîpettek veguhezkerek şilavê ya piçûk e."
      }
    },
    {
      "id": "u01-c05",
      "conceptA": {
        "tr": "Erlenmayer",
        "en": "Erlenmayer",
        "de": "Erlenmayer",
        "fr": "Erlenmayer",
        "ru": "Эрленмайер",
        "ar": "إرلينماير",
        "zh": "埃伦梅尔",
        "ku": "Erlenmayer"
      },
      "conceptB": {
        "tr": "Balon Joje",
        "en": "Balloon Bottle",
        "de": "Ballonflasche",
        "fr": "Bouteille de ballon",
        "ru": "Бутылка с воздушным шаром",
        "ar": "زجاجة بالون",
        "zh": "气球瓶",
        "ku": "Balloon Bottle"
      },
      "distinction": {
        "tr": "Erlenmayer çalkalama ve titrasyonda; balon joje ise tam hacimde hassas derişimli çözelti hazırlamada kullanılır.",
        "en": "In Erlenmayer shaking and titration; The volumetric flask is used to prepare a full volume of precisely concentrated solution.",
        "de": "Bei Erlenmayer Schütteln und Titrieren; Mit dem Messkolben wird ein vollständiges Volumen einer präzise konzentrierten Lösung hergestellt.",
        "fr": "Dans l'agitation et le titrage d'Erlenmayer ; La fiole jaugée est utilisée pour préparer un volume complet de solution précisément concentrée.",
        "ru": "По Эрленмайеру встряхивание и титрование; Мерную колбу используют для приготовления полного объема точно концентрированного раствора.",
        "ar": "في إرلنماير، الاهتزاز والمعايرة؛ يُستخدم الدورق الحجمي لتحضير حجم كامل من المحلول المركز بدقة.",
        "zh": "在锥形瓶摇动和滴定中；容量瓶用于配制全体积的精密浓缩溶液。",
        "ku": "Di Erlenmayer de hejandin û titrasyon; Firmaya volumetric ji bo amadekirina cildek tije ya çareseriyek berbiçav tê bikar anîn."
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
        "zh": "矾油 (H2SO4)",
        "ku": "Rûnê zaçê (H2SO4)"
      },
      "conceptB": {
        "tr": "Kezzap (HNO3)",
        "en": "Aqua fortis (HNO3)",
        "de": "Scheidewasser (HNO3)",
        "fr": "Eau-forte (HNO3)",
        "ru": "Крепкая водка (HNO3)",
        "ar": "ماء الفضة (HNO3)",
        "zh": "硝镪水 (HNO3)",
        "ku": "Kezzap (HNO3)"
      },
      "distinction": {
        "tr": "Zaç yağı sülfürik asit olup akü asidi olarak bilinir; kezzap ise nitrik asit olup gübre ve patlayıcı üretiminde kullanılır.",
        "en": "Oil of vitriol is sulfuric acid and is known as battery acid; aqua fortis (kezzap) is nitric acid and is used in fertilizer and explosives production.",
        "de": "Vitriolöl ist Schwefelsäure (Batteriesäure); Scheidewasser (Kezzap) ist Salpetersäure und dient der Düngemittel- und Sprengstoffherstellung.",
        "fr": "L'huile de vitriol est de l'acide sulfurique (acide de batterie) ; l'eau-forte (kezzap) est de l'acide nitrique utilisé pour les engrais et explosifs.",
        "ru": "Купоросное масло — это серная кислота (аккумуляторная кислота); азотная кислота (крепкая водка) используется в производстве удобрений и взрывчатых веществ.",
        "ar": "زيت الزاج هو حمض الكبريتيك ويعرف بماء البطارية؛ أما ماء الفضة (النيتريك) فيستخدم في صناعة الأسمدة والمتفجرات.",
        "zh": "矾油是硫酸（蓄电池酸）；硝镪水（硝酸）则用于生产化肥和炸药。",
        "ku": "Rûnê zaçê asîda sulfurîk e û wekî asîda pîlê tê zanîn; kezzap asîda nîtrîk e û di hilberîna gubre û teqemeniyan de tê bikaranîn."
      }
    },
    {
      "id": "u01-c07",
      "conceptA": {
        "tr": "Fiziksel Değişim",
        "en": "Physical Change",
        "de": "Körperliche Veränderung",
        "fr": "Changement physique",
        "ru": "Физические изменения",
        "ar": "التغيير الجسدي",
        "zh": "物理变化",
        "ku": "Guhertina Fîzîkî"
      },
      "conceptB": {
        "tr": "Kimyasal Değişim",
        "en": "Chemical Change",
        "de": "Chemische Veränderung",
        "fr": "Changement chimique",
        "ru": "Химические изменения",
        "ar": "التغير الكيميائي",
        "zh": "化学变化",
        "ku": "Guhertina Kîmyewî"
      },
      "distinction": {
        "tr": "Fiziksel değişimde maddenin iç yapısı ve kimlik özelliği korunur; kimyasal değişimde yeni kimyasal türler oluşur.",
        "en": "In physical change, the internal structure and identity of the substance are preserved; In a chemical change, new chemical species are formed.",
        "de": "Bei der physikalischen Veränderung bleiben die innere Struktur und Identität der Substanz erhalten; Bei einer chemischen Veränderung entstehen neue chemische Spezies.",
        "fr": "Lors d'un changement physique, la structure interne et l'identité de la substance sont préservées ; Lors d’un changement chimique, de nouvelles espèces chimiques se forment.",
        "ru": "При физическом изменении внутренняя структура и самобытность вещества сохраняются; В результате химических изменений образуются новые химические виды.",
        "ar": "في التغير الجسدي، يتم الحفاظ على البنية الداخلية وهوية المادة؛ في التغير الكيميائي، تتشكل أنواع كيميائية جديدة.",
        "zh": "在物理变化中，物质的内部结构和特性得以保留；在化学变化中，形成新的化学物质。",
        "ku": "Di guherîna fizîkî de, avahiya navxweyî û nasnameya maddeyê tê parastin; Di guherîneke kîmyewî de, cureyên kîmyewî yên nû çêdibin."
      }
    },
    {
      "id": "u01-c08",
      "conceptA": {
        "tr": "Toksik Madde",
        "en": "Toxic Substance",
        "de": "Giftiger Stoff",
        "fr": "Substance toxique",
        "ru": "Токсическое вещество",
        "ar": "مادة سامة",
        "zh": "有毒物质",
        "ku": "Madeya Toksîk"
      },
      "conceptB": {
        "tr": "Aşındırıcı (Korozif) Madde",
        "en": "Corrosive Substance",
        "de": "Ätzender Stoff",
        "fr": "Substance corrosive",
        "ru": "Коррозионное вещество",
        "ar": "مادة قابلة للتآكل",
        "zh": "腐蚀性物质",
        "ku": "Madeya korozive"
      },
      "distinction": {
        "tr": "Toksik maddeler zehirli olup kuru kafa piktogramı taşır; aşındırıcı maddeler cilt ve metalleri yakarak aşındıran maddelerdir.",
        "en": "Toxic substances are poisonous and bear the skull pictogram; Corrosive substances are substances that corrode skin and metals by burning them.",
        "de": "Giftstoffe sind giftig und tragen das Totenkopf-Piktogramm; Ätzende Stoffe sind Stoffe, die durch Verbrennen Haut und Metalle angreifen.",
        "fr": "Les substances toxiques sont vénéneuses et portent le pictogramme du crâne ; Les substances corrosives sont des substances qui corrodent la peau et les métaux en les brûlant.",
        "ru": "Токсичные вещества ядовиты и имеют пиктограмму черепа; Коррозионные вещества – это вещества, которые разъедают кожу и металлы, сжигая их.",
        "ar": "المواد السامة سامة وتحمل رسمًا تخطيطيًا للجمجمة؛ المواد المسببة للتآكل هي مواد تؤدي إلى تآكل الجلد والمعادن عن طريق حرقها.",
        "zh": "有毒物质有毒，并带有骷髅象形文字；腐蚀性物质是通过燃烧而腐蚀皮肤和金属的物质。",
        "ku": "Madeyên jehrî jehrîn in û pîktograma serê serê xwe hildigirin; Madeyên gemarî ew maddeyên ku bi şewitandina çerm û metalan dişewitînin."
      }
    }
  ],
  "sequences": [
    {
      "id": "u01-s01",
      "title": {
        "tr": "Çözelti Hazırlama Adımları",
        "en": "Solution Preparation Steps",
        "de": "Schritte zur Lösungsvorbereitung",
        "fr": "Étapes de préparation de la solution",
        "ru": "Этапы подготовки раствора",
        "ar": "خطوات تحضير الحل",
        "zh": "溶液制备步骤",
        "ku": "Pêngavên Amadekirina Çareseriyê"
      },
      "steps": [
        {
          "tr": "Hassas terazide katı tartımı yapılır",
          "en": "Solids are weighed on a precision scale",
          "de": "Feststoffe werden auf einer Präzisionswaage gewogen",
          "fr": "Les solides sont pesés sur une balance de précision",
          "ru": "Твердые вещества взвешиваются на прецизионных весах.",
          "ar": "يتم وزن المواد الصلبة على مقياس دقيق",
          "zh": "在精密天平上对固体进行称重",
          "ku": "Zeviyên hişk li ser pîvanek rastîn têne giran kirin"
        },
        {
          "tr": "Az miktar saf suda behere çözünür",
          "en": "Soluble in small amount of pure water in beaker",
          "de": "Löslich in einer kleinen Menge reinem Wasser im Becher",
          "fr": "Soluble dans une petite quantité d'eau pure dans un bécher",
          "ru": "Растворим в небольшом количестве чистой воды в стакане.",
          "ar": "قابل للذوبان في كمية صغيرة من الماء النقي في كوب",
          "zh": "溶于烧杯中少量纯水",
          "ku": "Di mîqdarek piçûk a ava paqij a di kaxezê de tê çareser kirin"
        },
        {
          "tr": "Balon jojeye aktarılır",
          "en": "The flask is transferred to the volumetric jar",
          "de": "Der Kolben wird in das Messgefäß überführt",
          "fr": "Le ballon est transféré dans le pot jaugé",
          "ru": "Колбу переносят в мерную банку.",
          "ar": "يتم نقل القارورة إلى الجرة الحجمية",
          "zh": "将烧瓶转移至容量瓶中",
          "ku": "Falsk li jar volumetric ve tê veguhestin"
        },
        {
          "tr": "Çizgiye kadar saf su eklenip çalkalanır",
          "en": "Pure water is added up to the line and shaken.",
          "de": "Reines Wasser wird in die Leitung gegeben und geschüttelt.",
          "fr": "De l'eau pure est ajoutée jusqu'au trait et secouée.",
          "ru": "В линию добавляют чистую воду и встряхивают.",
          "ar": "يضاف الماء النقي إلى الخط ويهز.",
          "zh": "将纯水添加到管线中并摇匀。",
          "ku": "Ava paqij li ser rêzê tê zêdekirin û dihejîne."
        }
      ]
    },
    {
      "id": "u01-s02",
      "title": {
        "tr": "Basit Damıtma Düzeneği Kurulumu",
        "en": "Simple Distillation Setup",
        "de": "Einfache Destillationseinrichtung",
        "fr": "Configuration de distillation simple",
        "ru": "Простая установка дистилляции",
        "ar": "إعداد التقطير البسيط",
        "zh": "简单的蒸馏设置",
        "ku": "Setup Distillation Simple"
      },
      "steps": [
        {
          "tr": "Balona sıvı karışım konur",
          "en": "Liquid mixture is placed in the balloon",
          "de": "In den Ballon wird eine flüssige Mischung gegeben",
          "fr": "Le mélange liquide est placé dans le ballon",
          "ru": "Жидкая смесь помещается в баллон.",
          "ar": "يوضع الخليط السائل في البالون",
          "zh": "将液体混合物放入气球中",
          "ku": "Tevliheviya şil di balonê de tê danîn"
        },
        {
          "tr": "Isıtıcı açılıp kaynatılır",
          "en": "The heater is turned on and boiled",
          "de": "Die Heizung wird eingeschaltet und gekocht",
          "fr": "Le chauffage est allumé et bouilli",
          "ru": "Нагреватель включается и кипит",
          "ar": "يتم تشغيل المدفأة وغليها",
          "zh": "加热器已打开并煮沸",
          "ku": "Germahî tê vekirin û tê kelandin"
        },
        {
          "tr": "Buharlaşan sıvı soğutucuya geçer",
          "en": "The evaporated liquid passes into the cooler",
          "de": "Die verdampfte Flüssigkeit gelangt in den Kühler",
          "fr": "Le liquide évaporé passe dans le refroidisseur",
          "ru": "Испаренная жидкость поступает в охладитель.",
          "ar": "يمر السائل المتبخر إلى المبرد",
          "zh": "蒸发的液体进入冷却器",
          "ku": "Şîva hilmikî derbasî sarincê dibe"
        },
        {
          "tr": "Yoğuşan sıvı erlende toplanır",
          "en": "The condensed liquid is collected in the conical flask.",
          "de": "Die kondensierte Flüssigkeit wird im Erlenmeyerkolben gesammelt.",
          "fr": "Le liquide condensé est récupéré dans la fiole conique.",
          "ru": "Конденсированную жидкость собирают в коническую колбу.",
          "ar": "يتم جمع السائل المكثف في الدورق المخروطي.",
          "zh": "将冷凝液收集在锥形瓶中。",
          "ku": "Avêra kondenskirî di fîşeka konîk de tê berhev kirin."
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
        "ar": "فصل المرحلة مع قمع الفصل",
        "zh": "使用分液漏斗进行相分离",
        "ku": "Veqetandina Qonaxê bi Funnelê Veqetandinê"
      },
      "steps": [
        {
          "tr": "Heterojen sıvı karışım huniye konur",
          "en": "The heterogeneous liquid mixture is placed in the funnel.",
          "de": "Die heterogene Flüssigkeitsmischung wird in den Trichter gegeben.",
          "fr": "Le mélange liquide hétérogène est placé dans l'entonnoir.",
          "ru": "Неоднородную жидкую смесь помещают в воронку.",
          "ar": "يتم وضع الخليط السائل غير المتجانس في القمع.",
          "zh": "将异质液体混合物置于漏斗中。",
          "ku": "Tevliheviya şilekê ya heterojen di qalikê de tê danîn."
        },
        {
          "tr": "Çalkalanıp gaz basıncı alınır",
          "en": "It is shaken and the gas pressure is taken off.",
          "de": "Es wird geschüttelt und der Gasdruck abgenommen.",
          "fr": "Il est secoué et la pression du gaz est supprimée.",
          "ru": "Его встряхивают и сбрасывают давление газа.",
          "ar": "يتم هزها ويتم خلع ضغط الغاز.",
          "zh": "摇动它并消除气压。",
          "ku": "Tê hejandin û tansiyona gazê jê tê derxistin."
        },
        {
          "tr": "Yoğunluk farkıyla faz ayrımı beklenir",
          "en": "Phase separation is expected with density difference",
          "de": "Bei einem Dichteunterschied ist eine Phasentrennung zu erwarten",
          "fr": "Une séparation de phase est attendue avec une différence de densité",
          "ru": "Ожидается разделение фаз с разницей плотностей.",
          "ar": "ومن المتوقع فصل المرحلة مع اختلاف الكثافة",
          "zh": "预计会因密度差而发生相分离",
          "ku": "Veqetandina qonaxê bi cûdahiya tîrêjê tê çaverê kirin"
        },
        {
          "tr": "Musluk açılarak alttaki faz ayrılır",
          "en": "The lower phase is separated by opening the tap.",
          "de": "Durch Öffnen des Hahns wird die untere Phase abgetrennt.",
          "fr": "La phase inférieure est séparée en ouvrant le robinet.",
          "ru": "Нижнюю фазу отделяют открытием крана.",
          "ar": "يتم فصل المرحلة السفلية عن طريق فتح الصنبور.",
          "zh": "通过打开龙头分离下层相。",
          "ku": "Qonaxa jêrîn bi vekirina depikê ve tê veqetandin."
        }
      ]
    },
    {
      "id": "u01-s04",
      "title": {
        "tr": "Katı-Sıvı Süzme İşlemi",
        "en": "Solid-Liquid Filtration Process",
        "de": "Fest-Flüssig-Filtrationsprozess",
        "fr": "Processus de filtration solide-liquide",
        "ru": "Процесс твердожидкостной фильтрации",
        "ar": "عملية الترشيح الصلبة والسائلة",
        "zh": "固液过滤工艺",
        "ku": "Pêvajoya Parzûna Solid-Liquid"
      },
      "steps": [
        {
          "tr": "Süzgeç kağıdı koni şeklinde katlanır",
          "en": "The filter paper is folded into a cone shape",
          "de": "Das Filterpapier wird kegelförmig gefaltet",
          "fr": "Le papier filtre est plié en forme de cône",
          "ru": "Фильтровальная бумага сложена в форме конуса.",
          "ar": "يتم طي ورقة الترشيح في شكل مخروطي",
          "zh": "将滤纸折叠成圆锥形",
          "ku": "Kaxeza parzûnê bi şiklê konî tê pêçan"
        },
        {
          "tr": "Huniye yerleştirilip ıslatılır",
          "en": "It is placed in the funnel and wetted.",
          "de": "Es wird in den Trichter gegeben und angefeuchtet.",
          "fr": "Il est placé dans l'entonnoir et mouillé.",
          "ru": "Его помещают в воронку и смачивают.",
          "ar": "يتم وضعها في القمع وترطيبها.",
          "zh": "将其放入漏斗中并润湿。",
          "ku": "Ew di kavilê de tê danîn û tê şil kirin."
        },
        {
          "tr": "Heterojen karışım bagetle dökülür",
          "en": "The heterogeneous mixture is poured with a baguette",
          "de": "Die heterogene Mischung wird mit einem Baguette gegossen",
          "fr": "Le mélange hétérogène est versé avec une baguette",
          "ru": "Неоднородная смесь заливается багетом",
          "ar": "يُسكب الخليط غير المتجانس بالرغيف الفرنسي",
          "zh": "将异质混合物倒入长棍面包中",
          "ku": "Têkeliya heterojen bi baguette tê rijandin"
        },
        {
          "tr": "Süzüntü beherde toplanır",
          "en": "The filtrate is collected in the beaker.",
          "de": "Das Filtrat wird im Becherglas gesammelt.",
          "fr": "Le filtrat est récupéré dans le bécher.",
          "ru": "Фильтрат собирают в стакан.",
          "ar": "يتم جمع الترشيح في الدورق.",
          "zh": "将滤液收集在烧杯中。",
          "ku": "Parzûna di qalikê de tê berhevkirin."
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u01-twin01",
      "stem": {
        "tr": "Laboratuvarda 0.1 M 250 mL standart NaCl çözeltisi hazırlamak isteyen bir araştırmacı, aşağıdaki cam malzemelerden hangisini kullanmalıdır?",
        "en": "Which of the following glassware should a researcher who wants to prepare 0.1 M 250 mL standard NaCl solution in the laboratory use?",
        "de": "Welches der folgenden Glasgeräte sollte ein Forscher verwenden, der im Labor eine 0,1 M 250 ml Standard-NaCl-Lösung herstellen möchte?",
        "fr": "Laquelle des verreries suivantes un chercheur souhaitant préparer une solution étalon de NaCl 0,1 M 250 mL en laboratoire devrait-il utiliser ?",
        "ru": "Какую из следующей стеклянной посуды следует использовать исследователю, желающему приготовить в лаборатории стандартный раствор NaCl концентрацией 0,1 М (250 мл)?",
        "ar": "أي من الأواني الزجاجية التالية يجب على الباحث الذي يريد تحضير 0.1 M 250 mL من محلول NaCl القياسي استخدامه في المختبر؟",
        "zh": "想要在实验室中制备 0.1 M 250 mL 标准氯化钠溶液的研究人员应该使用以下哪种玻璃器皿？",
        "ku": "Lêkolînerê ku dixwaze 0,1 M 250 mL çareseriya standard NaCl amade bike, divê kîjan ji şûşeyên jêrîn di laboratîfê de bikar bîne?"
      },
      "options": [
        {
          "tr": "Balon joje",
          "en": "volumetric flask",
          "de": "Messkolben",
          "fr": "fiole jaugée",
          "ru": "мерная колба",
          "ar": "قارورة حجمية",
          "zh": "容量瓶",
          "ku": "flaskek volumetric"
        },
        {
          "tr": "Ayırma hunisi",
          "en": "separatory funnel",
          "de": "Scheidetrichter",
          "fr": "entonnoir séparateur",
          "ru": "делительная воронка",
          "ar": "قمع منفصل",
          "zh": "分液漏斗",
          "ku": "kana veqetandinê"
        },
        {
          "tr": "Kısa deney tüpü",
          "en": "short test tube",
          "de": "kurzes Reagenzglas",
          "fr": "tube à essai court",
          "ru": "короткая пробирка",
          "ar": "أنبوب اختبار قصير",
          "zh": "短试管",
          "ku": "lûleya testê ya kurt"
        },
        {
          "tr": "Havan",
          "en": "mortar",
          "de": "Mörtel",
          "fr": "mortier",
          "ru": "ступка",
          "ar": "هاون",
          "zh": "迫击炮",
          "ku": "mortar"
        },
        {
          "tr": "Kroze",
          "en": "crucible",
          "de": "Tiegel",
          "fr": "creuset",
          "ru": "тигель",
          "ar": "بوتقة",
          "zh": "坩埚",
          "ku": "crucible"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Belirli hacimde ve derişimde standart çözelti hazırlamak için balon joje kullanılır.",
        "en": "A volumetric flask is used to prepare a standard solution in a certain volume and concentration.",
        "de": "In einem Messkolben wird eine Standardlösung in einem bestimmten Volumen und einer bestimmten Konzentration hergestellt.",
        "fr": "Une fiole jaugée est utilisée pour préparer une solution étalon dans un certain volume et une certaine concentration.",
        "ru": "В мерной колбе готовят стандартный раствор определенного объема и концентрации.",
        "ar": "يتم استخدام دورق حجمي لتحضير محلول قياسي بحجم وتركيز معينين.",
        "zh": "容量瓶用于配制一定体积和浓度的标准溶液。",
        "ku": "Kulîlkek volumetric tê bikar anîn da ku çareseriyek standard di hêjmarek diyarkirî û hûrgelê de amade bike."
      }
    },
    {
      "id": "u01-twin02",
      "stem": {
        "tr": "Aşağıda geleneksel adı verilen bileşiklerden hangisinin kimyasal formülü yanlıştır?",
        "en": "Which of the following conventionally named compounds has the wrong chemical formula?",
        "de": "Welche der folgenden konventionell benannten Verbindungen hat die falsche chemische Formel?",
        "fr": "Lequel des composés suivants nommés conventionnellement a la mauvaise formule chimique ?",
        "ru": "Какое из следующих условно названных соединений имеет неправильную химическую формулу?",
        "ar": "أي من المركبات التالية ذات الأسماء التقليدية لها صيغة كيميائية خاطئة؟",
        "zh": "以下哪种传统命名的化合物的化学式是错误的？",
        "ku": "Kîjan ji pêkhateyên jêrîn bi navên kevneşopî xwedî formula kîmyewî ya çewt e?"
      },
      "options": [
        {
          "tr": "Zaç yağı: H2SO4",
          "en": "Oil of vitriol: H2SO4",
          "de": "Vitriolöl: H2SO4",
          "fr": "Huile de vitriol : H2SO4",
          "ru": "Купоросное масло: H2SO4",
          "ar": "زيت الزاج: H2SO4",
          "zh": "矾油: H2SO4",
          "ku": "Rûnê zaçê: H2SO4"
        },
        {
          "tr": "Kezzap: HNO3",
          "en": "Aqua fortis: HNO3",
          "de": "Scheidewasser: HNO3",
          "fr": "Eau-forte : HNO3",
          "ru": "Крепкая водка: HNO3",
          "ar": "ماء الفضة: HNO3",
          "zh": "硝镪水: HNO3",
          "ku": "Kezzap: HNO3"
        },
        {
          "tr": "Tuz ruhu: HCl",
          "en": "Spirit of salt: HCl",
          "de": "Salzsäure (Salzgeist): HCl",
          "fr": "Esprit de sel : HCl",
          "ru": "Соляной спирт: HCl",
          "ar": "روح الملح: HCl",
          "zh": "盐精: HCl",
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
          "ku": "Kevir: CaCO3"
        },
        {
          "tr": "Sönmüş kireç: CaO",
          "en": "Slaked lime: CaO",
          "de": "Löschkalk: CaO",
          "fr": "Chaux éteinte : CaO",
          "ru": "Гашеная известь: CaO",
          "ar": "الجير المطفأ : CaO",
          "zh": "熟石灰：CaO",
          "ku": "Kevirê şilandî: CaO"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Sönmüş kireç Ca(OH)2'dir. CaO ise sönmemiş kireçtir.",
        "en": "Slaked lime is Ca(OH)2. CaO is quicklime.",
        "de": "Gelöschter Kalk ist Ca(OH)2. CaO ist Branntkalk.",
        "fr": "La chaux éteinte est Ca(OH)2. CaO est de la chaux vive.",
        "ru": "Гашеная известь – это Ca(OH)2. СаО – это негашеная известь.",
        "ar": "الجير المطفأ هو Ca(OH)2. CaO هو الجير الحي.",
        "zh": "熟石灰是Ca(OH)2。 CaO是生石灰。",
        "ku": "Kevirê şilandî Ca(OH)2 ye. CaO zirav zû ye."
      }
    },
    {
      "id": "u01-twin03",
      "stem": {
        "tr": "Kimya dersinde Kimya Bilimi ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Chemistry as a Science, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Chemiewissenschaft: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Science Chimique, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Химия как наука», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"علم الكيمياء\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“化学科学”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Zanista Kîmyayê\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Erlenmayer gaz hacmi ölçümünde büretin yerini tutar.",
          "en": "Erlenmayer replaces the burette in gas volume measurement.",
          "de": "Erlenmayer ersetzt die Bürette bei der Gasvolumenmessung.",
          "fr": "Erlenmayer remplace la burette dans la mesure du volume de gaz.",
          "ru": "Эрленмайер заменяет бюретку при измерении объема газа.",
          "ar": "Erlenmayer يستبدل السحاحة في قياس حجم الغاز.",
          "zh": "Erlenmayer 在气体体积测量中取代了滴定管。",
          "ku": "Erlenmayer di pîvana qebareya gazê de buretê diguhezîne."
        },
        {
          "tr": "Fizikokimya yalnızca canlı metabolizmasındaki molekülleri inceler.",
          "en": "Physicochemistry only studies molecules in living metabolism.",
          "de": "Die Physikochemie untersucht nur Moleküle im lebenden Stoffwechsel.",
          "fr": "La physicochimie étudie uniquement les molécules du métabolisme vivant.",
          "ru": "Физикохимия изучает только молекулы в живом метаболизме.",
          "ar": "الكيمياء الفيزيائية تدرس فقط الجزيئات في عملية التمثيل الغذائي الحي.",
          "zh": "物理化学仅研究生命代谢中的分子。",
          "ku": "Fîzokîmya tenê molekulên di metabolîzma zindî de lêkolîn dike."
        },
        {
          "tr": "Cabir bin Hayyan damıtma imbiğini (alembic) geliştirerek nitrik asit ve kral suyunu elde etmiştir.",
          "en": "Jabir ibn Hayyan developed the alembic and synthesized nitric acid and aqua regia.",
          "de": "Dschābir ibn Hayyān entwickelte den Alambic (Destillierkolben) und stellte Salpetersäure sowie Königswasser her.",
          "fr": "Jabir ibn Hayyan a perfectionné l'alambic et obtenu l'acide nitrique et l'eau régale.",
          "ru": "Джабир ибн Хайян усовершенствовал перегонный куб (аламбик) и получил азотную кислоту и царскую водку.",
          "ar": "قام جابر بن حيان بتطوير الإنبيق وحصل على حمض النيتريك والماء الملكي.",
          "zh": "贾比尔·伊本·哈扬改进了蒸馏器（alembic）并制得了硝酸和王水。",
          "ku": "Cabir bin Heyyan alambîk pêş xist û asîda nîtrîk û ava şahî bi dest xist."
        },
        {
          "tr": "Ünlem piktogramı patlayıcı maddeleri temsil eder.",
          "en": "The exclamation pictogram represents explosive substances.",
          "de": "Das Ausrufezeichen-Piktogramm steht für explosive Stoffe.",
          "fr": "Le pictogramme d'exclamation représente des substances explosives.",
          "ru": "Восклицательный знак обозначает взрывоопасные вещества.",
          "ar": "يمثل رسم التعجب المواد المتفجرة.",
          "zh": "感叹号象形图代表爆炸性物质。",
          "ku": "Pîktograma qîrînê madeyên teqemenî nîşan dide."
        },
        {
          "tr": "Derişik asidi seyreltirken hızla üzerine soğuk su boşaltılmalıdır.",
          "en": "When diluting concentrated acid, cold water should be quickly poured over it.",
          "de": "Beim Verdünnen von konzentrierter Säure sollte diese schnell mit kaltem Wasser übergossen werden.",
          "fr": "Lors de la dilution d'un acide concentré, il convient de verser rapidement de l'eau froide dessus.",
          "ru": "При разбавлении концентрированной кислоты ее следует быстро залить холодной водой.",
          "ar": "عند تخفيف الحمض المركز، يجب سكب الماء البارد عليه بسرعة.",
          "zh": "稀释浓酸时，应迅速倒入冷水。",
          "ku": "Dema ku asîda konsantrekirî tê rijandin, divê ava sar zû bi ser de were rijandin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Cabir bin Hayyan damıtma imbiğini (alembic) geliştirerek nitrik asit ve kral suyunu elde etmiştir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Jabir ibn Hayyan developed the alembic and synthesized nitric acid and aqua regia.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Dschābir ibn Hayyān entwickelte den Alambic (Destillierkolben) und stellte Salpetersäure sowie Königswasser her.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Jabir ibn Hayyan a perfectionné l'alambic et obtenu l'acide nitrique et l'eau régale.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Джабир ибн Хайян усовершенствовал перегонный куб (аламбик) и получил азотную кислоту и царскую водку.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قام جابر بن حيان بتطوير الإنبيق وحصل على حمض النيتريك والماء الملكي.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“贾比尔·伊本·哈扬改进了蒸馏器（alembic）并制得了硝酸和王水。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Cabir bin Heyyan alambîk pêş xist û asîda nîtrîk û ava şahî bi dest xist.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u01-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimya Bilimi konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Chemistry as a Science?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Chemiewissenschaft zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Science Chimique ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Химия как наука»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"علم الكيمياء\"؟",
        "zh": "根据“化学科学”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Zanista Kîmyayê\" de rast e?"
      },
      "options": [
        {
          "tr": "Balon joje katı yakma fırını olarak kullanılır.",
          "en": "The volumetric flask is used as a solid incinerator.",
          "de": "Der Messkolben dient als Feststoffverbrennungsanlage.",
          "fr": "La fiole jaugée est utilisée comme incinérateur de solides.",
          "ru": "Мерную колбу используют в качестве печи для сжигания твердых веществ.",
          "ar": "يتم استخدام الدورق الحجمي كمحرقة صلبة.",
          "zh": "容量瓶用作固体焚烧炉。",
          "ku": "Firmaya volumetric wekî şewitandina hişk tê bikaranîn."
        },
        {
          "tr": "Analitik kimya karbon temelli polimerleri sentezleyen daldır.",
          "en": "Analytical chemistry is the branch that synthesizes carbon-based polymers.",
          "de": "Die analytische Chemie ist der Zweig, der kohlenstoffbasierte Polymere synthetisiert.",
          "fr": "La chimie analytique est la branche qui synthétise les polymères à base de carbone.",
          "ru": "Аналитическая химия — это раздел, занимающийся синтезом полимеров на основе углерода.",
          "ar": "الكيمياء التحليلية هي الفرع الذي يقوم بتصنيع البوليمرات القائمة على الكربون.",
          "zh": "分析化学是合成碳基聚合物的分支。",
          "ku": "Kîmyaya analîtîk şaxek e ku polîmerên karbon-based sentez dike."
        },
        {
          "tr": "Çevreye zararlı maddeler alev sembolü ile gösterilir.",
          "en": "Substances that are harmful to the environment are indicated with a flame symbol.",
          "de": "Umweltschädliche Stoffe sind mit einem Flammensymbol gekennzeichnet.",
          "fr": "Les substances nocives pour l'environnement sont signalées par un symbole de flamme.",
          "ru": "Вещества, вредные для окружающей среды, обозначаются символом пламени.",
          "ar": "تتم الإشارة إلى المواد الضارة بالبيئة برمز اللهب.",
          "zh": "对环境有害的物质用火焰符号表示。",
          "ku": "Madeyên ku ji jîngehê re zerardar in, bi nîşana şewatê têne destnîşan kirin."
        },
        {
          "tr": "Ebu Bekir er-Razi kostik soda ve karınca asidini (formik asit) ilk kez elde etmiştir.",
          "en": "Abu Bakr al-Razi synthesized caustic soda and formic acid (methanoic acid) for the first time.",
          "de": "Abu Bakr ar-Razi stellte erstmals Ätznatron und Ameisensäure (Methansäure) her.",
          "fr": "Abu Bakr al-Razi a obtenu pour la première fois la soude caustique et l'acide formique (acide méthanoïque).",
          "ru": "Абу Бакр ар-Рази впервые получил едкий натр и муравьиную кислоту (метановую кислоту).",
          "ar": "حصل أبو بكر الرازي على الصودا الكاوية وحمض الفورميك (حمض النمليك) لأول مرة.",
          "zh": "阿布·伯克尔·拉齐首次制得了烧碱和甲酸（蚁酸）。",
          "ku": "Ebû Bekir el-Razî bo cara yekem soda kaustîk û asîda formîk bi dest xist."
        },
        {
          "tr": "Organik çözücülerin saflığı koklanarak tayin edilebilir.",
          "en": "The purity of organic solvents can be determined by smell.",
          "de": "Die Reinheit organischer Lösungsmittel lässt sich anhand des Geruchs bestimmen.",
          "fr": "La pureté des solvants organiques peut être déterminée par l'odeur.",
          "ru": "Чистоту органических растворителей можно определить по запаху.",
          "ar": "يمكن تحديد نقاء المذيبات العضوية عن طريق الرائحة.",
          "zh": "有机溶剂的纯度可以通过气味来判断。",
          "ku": "Paqijiya rûkalên organîk bi bîhnê dikare were destnîşankirin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Ebu Bekir er-Razi kostik soda ve karınca asidini (formik asit) ilk kez elde etmiştir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Abu Bakr al-Razi synthesized caustic soda and formic acid (methanoic acid) for the first time.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Abu Bakr ar-Razi stellte erstmals Ätznatron und Ameisensäure (Methansäure) her.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Abu Bakr al-Razi a obtenu pour la première fois la soude caustique et l'acide formique (acide méthanoïque).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Абу Бакр ар-Рази впервые получил едкий натр и муравьиную кислоту (метановую кислоту).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"حصل أبو بكر الرازي على الصودا الكاوية وحمض الفورميك (حمض النمليك) لأول مرة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“阿布·伯克尔·拉齐首次制得了烧碱和甲酸（蚁酸）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ebû Bekir el-Razî bo cara yekem soda kaustîk û asîda formîk bi dest xist.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u01-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimya Bilimi sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Chemistry as a Science, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Chemiewissenschaft: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Science Chimique, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Химия как наука», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"علم الكيمياء\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“化学科学”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Zanista Kîmyayê\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Kireç taşı CaO sönmemiş kireç ile aynı bileşiktir.",
          "en": "Limestone CaO is the same compound as quicklime.",
          "de": "Kalkstein CaO ist die gleiche Verbindung wie Branntkalk.",
          "fr": "Le calcaire CaO est le même composé que la chaux vive.",
          "ru": "Известняк CaO представляет собой то же соединение, что и негашеная известь.",
          "ar": "الحجر الجيري CaO هو نفس مركب الجير الحي.",
          "zh": "石灰石 CaO 与生石灰是相同的化合物。",
          "ku": "Kevirê kilsinî CaO heman pêkhatî ye wekî kilê zû."
        },
        {
          "tr": "Biyokimya endüstriyel metal alaşımlarını inceler.",
          "en": "Biochemistry studies industrial metal alloys.",
          "de": "Die Biochemie untersucht industrielle Metalllegierungen.",
          "fr": "La biochimie étudie les alliages métalliques industriels.",
          "ru": "Биохимия изучает промышленные металлические сплавы.",
          "ar": "تدرس الكيمياء الحيوية السبائك المعدنية الصناعية.",
          "zh": "生物化学研究工业金属合金。",
          "ku": "Biyokîmya aligirên metal ên pîşesaziyê lêkolîn dike."
        },
        {
          "tr": "Kuru kafa sembolü radyoaktif ışıma yapan maddeleri belirtir.",
          "en": "The skull symbol indicates substances that emit radioactive radiation.",
          "de": "Das Totenkopfsymbol weist auf Stoffe hin, die radioaktive Strahlung aussenden.",
          "fr": "Le symbole du crâne indique les substances qui émettent des rayonnements radioactifs.",
          "ru": "Символ черепа обозначает вещества, излучающие радиоактивное излучение.",
          "ar": "يشير رمز الجمجمة إلى المواد التي تنبعث منها إشعاعات مشعة.",
          "zh": "骷髅符号表示发射放射性辐射的物质。",
          "ku": "Sembola skull maddeyên ku tîrêjên radyoaktîf derdixin nîşan dide."
        },
        {
          "tr": "Simyacılar teraziyi hassas olarak kullanarak kütle korunumunu kanıtlamıştır.",
          "en": "Alchemists proved the conservation of mass by using the analytical balance precisely.",
          "de": "Alchemisten bewiesen die Massenerhaltung durch die präzise Verwendung der Analysenwaage.",
          "fr": "Les alchimistes ont prouvé la conservation de la masse en utilisant précisément la balance analytique.",
          "ru": "Алхимики доказали сохранение массы, точно используя аналитические весы.",
          "ar": "أثبت الخيميائيون حفظ الكتلة باستخدام الميزان التحليلي الدقيق.",
          "zh": "炼金术士通过精确使用精密天平证明了质量守恒。",
          "ku": "Alkîmîstan parastina girseyê bi karanîna terezûya hesas îspat kirin."
        },
        {
          "tr": "Büret, titrasyon deneylerinde hassas sıvı hacmi ölçümü ve kontrollü damlatma için kullanılır.",
          "en": "The burette is used for precise liquid volume measurement and controlled dripping in titration experiments.",
          "de": "Die Bürette dient der präzisen Messung des Flüssigkeitsvolumens und dem kontrollierten Tropfen in Titrationsexperimenten.",
          "fr": "La burette est utilisée pour une mesure précise du volume de liquide et un égouttement contrôlé dans les expériences de titrage.",
          "ru": "Бюретка используется для точного измерения объема жидкости и контроля капания в экспериментах по титрованию.",
          "ar": "يتم استخدام السحاحة لقياس حجم السائل بشكل دقيق والتحكم في التقطير في تجارب المعايرة.",
          "zh": "滴定管用于滴定实验中精确测量液体体积和控制滴注。",
          "ku": "Buret ji bo pîvandina hêjmara şilavê ya rast û di ceribandinên titrasyonê de rijandina kontrolkirî tê bikar anîn."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Büret, titrasyon deneylerinde hassas sıvı hacmi ölçümü ve kontrollü damlatma için kullanılır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The burette is used for precise liquid volume measurement and controlled dripping in titration experiments.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Bürette dient der präzisen Messung des Flüssigkeitsvolumens und dem kontrollierten Tropfen in Titrationsexperimenten.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La burette est utilisée pour une mesure précise du volume de liquide et un égouttement contrôlé dans les expériences de titrage.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Бюретка используется для точного измерения объема жидкости и контроля капания в экспериментах по титрованию.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يتم استخدام السحاحة لقياس حجم السائل بشكل دقيق والتحكم في التقطير في تجارب المعايرة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“滴定管用于滴定实验中精确测量液体体积和控制滴注。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Buret ji bo pîvandina hêjmara şilavê ya rast û di ceribandinên titrasyonê de rijandina kontrolkirî tê bikar anîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u01-twin06",
      "stem": {
        "tr": "Aşağıda Kimya Bilimi ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Chemistry as a Science, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Chemiewissenschaft: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Science Chimique, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Химия как наука», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"علم الكيمياء\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“化学科学”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Zanista Kîmyayê\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Erlenmayer çalkalama gerektiren çözelti hazırlama ve titrasyonda yaygın kullanılır.",
          "en": "Erlenmayer is widely used in solution preparation and titration that requires shaking.",
          "de": "Erlenmayer wird häufig bei der Lösungsvorbereitung und Titration verwendet, die Schütteln erfordert.",
          "fr": "Erlenmayer est largement utilisé dans la préparation et le titrage de solutions nécessitant une agitation.",
          "ru": "Эрленмайера широко используется при приготовлении растворов и титровании, требующем встряхивания.",
          "ar": "يستخدم إرلينماير على نطاق واسع في تحضير المحاليل والمعايرة التي تتطلب الرج.",
          "zh": "锥形瓶广泛用于需要摇动的溶液制备和滴定。",
          "ku": "Erlenmayer bi berfirehî di amadekirina çareseriyê û titrkirina ku hewceyê hejandinê de ye tê bikar anîn."
        },
        {
          "tr": "Fizikokimya yalnızca canlı metabolizmasındaki molekülleri inceler.",
          "en": "Physicochemistry only studies molecules in living metabolism.",
          "de": "Die Physikochemie untersucht nur Moleküle im lebenden Stoffwechsel.",
          "fr": "La physicochimie étudie uniquement les molécules du métabolisme vivant.",
          "ru": "Физикохимия изучает только молекулы в живом метаболизме.",
          "ar": "الكيمياء الفيزيائية تدرس فقط الجزيئات في عملية التمثيل الغذائي الحي.",
          "zh": "物理化学仅研究生命代谢中的分子。",
          "ku": "Fîzokîmya tenê molekulên di metabolîzma zindî de lêkolîn dike."
        },
        {
          "tr": "Ünlem piktogramı patlayıcı maddeleri temsil eder.",
          "en": "The exclamation pictogram represents explosive substances.",
          "de": "Das Ausrufezeichen-Piktogramm steht für explosive Stoffe.",
          "fr": "Le pictogramme d'exclamation représente des substances explosives.",
          "ru": "Восклицательный знак обозначает взрывоопасные вещества.",
          "ar": "يمثل رسم التعجب المواد المتفجرة.",
          "zh": "感叹号象形图代表爆炸性物质。",
          "ku": "Pîktograma qîrînê madeyên teqemenî nîşan dide."
        },
        {
          "tr": "Derişik asidi seyreltirken hızla üzerine soğuk su boşaltılmalıdır.",
          "en": "When diluting concentrated acid, cold water should be quickly poured over it.",
          "de": "Beim Verdünnen von konzentrierter Säure sollte diese schnell mit kaltem Wasser übergossen werden.",
          "fr": "Lors de la dilution d'un acide concentré, il convient de verser rapidement de l'eau froide dessus.",
          "ru": "При разбавлении концентрированной кислоты ее следует быстро залить холодной водой.",
          "ar": "عند تخفيف الحمض المركز، يجب سكب الماء البارد عليه بسرعة.",
          "zh": "稀释浓酸时，应迅速倒入冷水。",
          "ku": "Dema ku asîda konsantrekirî tê rijandin, divê ava sar zû bi ser de were rijandin."
        },
        {
          "tr": "Zaç yağı HNO3 formülüne sahiptir.",
          "en": "Oil of vitriol has the chemical formula HNO3.",
          "de": "Vitriolöl besitzt die chemische Formel HNO3.",
          "fr": "L'huile de vitriol a pour formule chimique HNO3.",
          "ru": "Купоросное масло имеет формулу HNO3.",
          "ar": "زيت الزاج له الصيغة الكيميائية HNO3.",
          "zh": "矾油的化学式为 HNO3。",
          "ku": "Rûnê zaçê xwedî formula HNO3 ye."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Erlenmayer çalkalama gerektiren çözelti hazırlama ve titrasyonda yaygın kullanılır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Erlenmayer is widely used in solution preparation and titration that requires shaking.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Erlenmayer wird häufig bei der Lösungsvorbereitung und Titration verwendet, die Schütteln erfordert.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Erlenmayer est largement utilisé dans la préparation et le titrage de solutions nécessitant une agitation.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Эрленмайера широко используется при приготовлении растворов и титровании, требующем встряхивания.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يستخدم إرلينماير على نطاق واسع في تحضير المحاليل والمعايرة التي تتطلب الرج.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“锥形瓶广泛用于需要摇动的溶液制备和滴定。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Erlenmayer bi berfirehî di amadekirina çareseriyê û titrkirina ku hewceyê hejandinê de ye tê bikar anîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u01-twin07",
      "stem": {
        "tr": "Kimya Bilimi konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Chemistry as a Science, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Chemiewissenschaft: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Science Chimique, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Химия как наука», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"علم الكيمياء\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“化学科学”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Zanista Kîmyayê\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Analitik kimya karbon temelli polimerleri sentezleyen daldır.",
          "en": "Analytical chemistry is the branch that synthesizes carbon-based polymers.",
          "de": "Die analytische Chemie ist der Zweig, der kohlenstoffbasierte Polymere synthetisiert.",
          "fr": "La chimie analytique est la branche qui synthétise les polymères à base de carbone.",
          "ru": "Аналитическая химия — это раздел, занимающийся синтезом полимеров на основе углерода.",
          "ar": "الكيمياء التحليلية هي الفرع الذي يقوم بتصنيع البوليمرات القائمة على الكربون.",
          "zh": "分析化学是合成碳基聚合物的分支。",
          "ku": "Kîmyaya analîtîk şaxek e ku polîmerên karbon-based sentez dike."
        },
        {
          "tr": "Balon joje, belirli derişimde standart çözelti hazırlamak için dar boyunlu hassas cam kaptır.",
          "en": "The volumetric flask is a narrow-necked precision glass container for preparing a standard solution at a specific concentration.",
          "de": "Der Messkolben ist ein enghalsiger Präzisionsglasbehälter zur Herstellung einer Standardlösung in einer bestimmten Konzentration.",
          "fr": "La fiole jaugée est un récipient en verre de précision à col étroit permettant de préparer une solution étalon à une concentration spécifique.",
          "ru": "Мерная колба представляет собой прецизионную стеклянную емкость с узким горлышком для приготовления стандартного раствора определенной концентрации.",
          "ar": "الدورق الحجمي عبارة عن حاوية زجاجية دقيقة ضيقة العنق لتحضير محلول قياسي بتركيز معين.",
          "zh": "容量瓶是一种细颈精密玻璃容器，用于配制特定浓度的标准溶液。",
          "ku": "Firmaya volumetric konteynirek camê ya bi stûyê teng e ku ji bo amadekirina çareseriyek standard di konsantreyek taybetî de ye."
        },
        {
          "tr": "Çevreye zararlı maddeler alev sembolü ile gösterilir.",
          "en": "Substances that are harmful to the environment are indicated with a flame symbol.",
          "de": "Umweltschädliche Stoffe sind mit einem Flammensymbol gekennzeichnet.",
          "fr": "Les substances nocives pour l'environnement sont signalées par un symbole de flamme.",
          "ru": "Вещества, вредные для окружающей среды, обозначаются символом пламени.",
          "ar": "تتم الإشارة إلى المواد الضارة بالبيئة برمز اللهب.",
          "zh": "对环境有害的物质用火焰符号表示。",
          "ku": "Madeyên ku ji jîngehê re zerardar in, bi nîşana şewatê têne destnîşan kirin."
        },
        {
          "tr": "Organik çözücülerin saflığı koklanarak tayin edilebilir.",
          "en": "The purity of organic solvents can be determined by smell.",
          "de": "Die Reinheit organischer Lösungsmittel lässt sich anhand des Geruchs bestimmen.",
          "fr": "La pureté des solvants organiques peut être déterminée par l'odeur.",
          "ru": "Чистоту органических растворителей можно определить по запаху.",
          "ar": "يمكن تحديد نقاء المذيبات العضوية عن طريق الرائحة.",
          "zh": "有机溶剂的纯度可以通过气味来判断。",
          "ku": "Paqijiya rûkalên organîk bi bîhnê dikare were destnîşankirin."
        },
        {
          "tr": "Kral suyunu Aristo dört element kuramıyla açıklamıştır.",
          "en": "Aristotle explained aqua regia using the four elements theory.",
          "de": "Aristoteles erklärte Königswasser mit der Vier-Elemente-Lehre.",
          "fr": "Aristote a expliqué l'eau régale par la théorie des quatre éléments.",
          "ru": "Аристотель объяснил царскую водку теорией четырех элементов.",
          "ar": "فسر أرسطو الماء الملكي بنظرية العناصر الأربعة.",
          "zh": "亚里士多德用四元素学说解释了王水。",
          "ku": "Arîsto ava şahî bi teoriya çar hêmanan rave kir."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Balon joje, belirli derişimde standart çözelti hazırlamak için dar boyunlu hassas cam kaptır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The volumetric flask is a narrow-necked precision glass container for preparing a standard solution at a specific concentration.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der Messkolben ist ein enghalsiger Präzisionsglasbehälter zur Herstellung einer Standardlösung in einer bestimmten Konzentration.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La fiole jaugée est un récipient en verre de précision à col étroit permettant de préparer une solution étalon à une concentration spécifique.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Мерная колба представляет собой прецизионную стеклянную емкость с узким горлышком для приготовления стандартного раствора определенной концентрации.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الدورق الحجمي عبارة عن حاوية زجاجية دقيقة ضيقة العنق لتحضير محلول قياسي بتركيز معين.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“容量瓶是一种细颈精密玻璃容器，用于配制特定浓度的标准溶液。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Firmaya volumetric konteynirek camê ya bi stûyê teng e ku ji bo amadekirina çareseriyek standard di konsantreyek taybetî de ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u01-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimya Bilimi ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Chemistry as a Science, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Chemiewissenschaft: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Science Chimique, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Химия как наука», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"علم الكيمياء\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“化学科学”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Zanista Kîmyayê\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Biyokimya endüstriyel metal alaşımlarını inceler.",
          "en": "Biochemistry studies industrial metal alloys.",
          "de": "Die Biochemie untersucht industrielle Metalllegierungen.",
          "fr": "La biochimie étudie les alliages métalliques industriels.",
          "ru": "Биохимия изучает промышленные металлические сплавы.",
          "ar": "تدرس الكيمياء الحيوية السبائك المعدنية الصناعية.",
          "zh": "生物化学研究工业金属合金。",
          "ku": "Biyokîmya aligirên metal ên pîşesaziyê lêkolîn dike."
        },
        {
          "tr": "Kuru kafa sembolü radyoaktif ışıma yapan maddeleri belirtir.",
          "en": "The skull symbol indicates substances that emit radioactive radiation.",
          "de": "Das Totenkopfsymbol weist auf Stoffe hin, die radioaktive Strahlung aussenden.",
          "fr": "Le symbole du crâne indique les substances qui émettent des rayonnements radioactifs.",
          "ru": "Символ черепа обозначает вещества, излучающие радиоактивное излучение.",
          "ar": "يشير رمز الجمجمة إلى المواد التي تنبعث منها إشعاعات مشعة.",
          "zh": "骷髅符号表示发射放射性辐射的物质。",
          "ku": "Sembola skull maddeyên ku tîrêjên radyoaktîf derdixin nîşan dide."
        },
        {
          "tr": "Kezzap HNO3, kireç taşı CaCO3, kostik soda NaOH bileşiklerinin geleneksel adlarıdır.",
          "en": "Kezzap HNO3, limestone CaCO3, caustic soda are the traditional names of NaOH compounds.",
          "de": "Kezzap HNO3, Kalkstein CaCO3, Natronlauge sind die traditionellen Namen von NaOH-Verbindungen.",
          "fr": "Kezzap HNO3, calcaire CaCO3, soude caustique sont les noms traditionnels des composés NaOH.",
          "ru": "Кеззап HNO3, известняк CaCO3, каустическая сода – традиционные названия соединений NaOH.",
          "ar": "Kezzap HNO3، الحجر الجيري CaCO3، الصودا الكاوية هي الأسماء التقليدية لمركبات NaOH.",
          "zh": "Kezzap HNO3、石灰石 CaCO3、烧碱是 NaOH 化合物的传统名称。",
          "ku": "Kezzap HNO3, kevirê kilsinî CaCO3, soda caustic navên kevneşopî yên pêkhateyên NaOH in."
        },
        {
          "tr": "Simyacılar teraziyi hassas olarak kullanarak kütle korunumunu kanıtlamıştır.",
          "en": "Alchemists proved the conservation of mass by using the analytical balance precisely.",
          "de": "Alchemisten bewiesen die Massenerhaltung durch die präzise Verwendung der Analysenwaage.",
          "fr": "Les alchimistes ont prouvé la conservation de la masse en utilisant précisément la balance analytique.",
          "ru": "Алхимики доказали сохранение массы, точно используя аналитические весы.",
          "ar": "أثبت الخيميائيون حفظ الكتلة باستخدام الميزان التحليلي الدقيق.",
          "zh": "炼金术士通过精确使用精密天平证明了质量守恒。",
          "ku": "Alkîmîstan parastina girseyê bi karanîna terezûya hesas îspat kirin."
        },
        {
          "tr": "Formik asit Robert Boyle tarafından element olarak tanımlanmıştır.",
          "en": "Formic acid was identified as an element by Robert Boyle.",
          "de": "Ameisensäure wurde von Robert Boyle als Element identifiziert.",
          "fr": "L'acide formique a été identifié comme élément par Robert Boyle.",
          "ru": "Муравьиная кислота была идентифицирована как элемент Робертом Бойлем.",
          "ar": "تم تحديد حمض الفورميك كعنصر من قبل روبرت بويل.",
          "zh": "甲酸被罗伯特·博伊尔鉴定为一种元素。",
          "ku": "Asîdê formîk wekî elementek ji hêla Robert Boyle ve hate nas kirin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Kezzap HNO3, kireç taşı CaCO3, kostik soda NaOH bileşiklerinin geleneksel adlarıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Kezzap HNO3, limestone CaCO3, caustic soda are the traditional names of NaOH compounds.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Kezzap HNO3, Kalkstein CaCO3, Natronlauge sind die traditionellen Namen von NaOH-Verbindungen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Kezzap HNO3, calcaire CaCO3, soude caustique sont les noms traditionnels des composés NaOH.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Кеззап HNO3, известняк CaCO3, каустическая сода – традиционные названия соединений NaOH.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"Kezzap HNO3، الحجر الجيري CaCO3، الصودا الكاوية هي الأسماء التقليدية لمركبات NaOH.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“Kezzap HNO3、石灰石 CaCO3、烧碱是 NaOH 化合物的传统名称。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Kezzap HNO3, kevirê kilsinî CaCO3, soda caustic navên kevneşopî yên pêkhateyên NaOH in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u01-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimya Bilimi konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Chemistry as a Science, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Chemiewissenschaft die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Science Chimique, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Химия как наука», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"علم الكيمياء\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“化学科学”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Zanista Kîmyayê\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Ünlem piktogramı patlayıcı maddeleri temsil eder.",
          "en": "The exclamation pictogram represents explosive substances.",
          "de": "Das Ausrufezeichen-Piktogramm steht für explosive Stoffe.",
          "fr": "Le pictogramme d'exclamation représente des substances explosives.",
          "ru": "Восклицательный знак обозначает взрывоопасные вещества.",
          "ar": "يمثل رسم التعجب المواد المتفجرة.",
          "zh": "感叹号象形图代表爆炸性物质。",
          "ku": "Pîktograma qîrînê madeyên teqemenî nîşan dide."
        },
        {
          "tr": "Derişik asidi seyreltirken hızla üzerine soğuk su boşaltılmalıdır.",
          "en": "When diluting concentrated acid, cold water should be quickly poured over it.",
          "de": "Beim Verdünnen von konzentrierter Säure sollte diese schnell mit kaltem Wasser übergossen werden.",
          "fr": "Lors de la dilution d'un acide concentré, il convient de verser rapidement de l'eau froide dessus.",
          "ru": "При разбавлении концентрированной кислоты ее следует быстро залить холодной водой.",
          "ar": "عند تخفيف الحمض المركز، يجب سكب الماء البارد عليه بسرعة.",
          "zh": "稀释浓酸时，应迅速倒入冷水。",
          "ku": "Dema ku asîda konsantrekirî tê rijandin, divê ava sar zû bi ser de were rijandin."
        },
        {
          "tr": "Zaç yağı HNO3 formülüne sahiptir.",
          "en": "Oil of vitriol has the chemical formula HNO3.",
          "de": "Vitriolöl besitzt die chemische Formel HNO3.",
          "fr": "L'huile de vitriol a pour formule chimique HNO3.",
          "ru": "Купоросное масло имеет формулу HNO3.",
          "ar": "زيت الزاج له الصيغة الكيميائية HNO3.",
          "zh": "矾油的化学式为 HNO3。",
          "ku": "Rûnê zaçê xwedî formula HNO3 ye."
        },
        {
          "tr": "Fizikokimya, kimyasal sistemlerde sıcaklık, basınç, iş ve enerji dönüşümlerini inceler.",
          "en": "Physical chemistry studies temperature, pressure, work and energy transformations in chemical systems.",
          "de": "Die physikalische Chemie untersucht Temperatur-, Druck-, Arbeits- und Energieumwandlungen in chemischen Systemen.",
          "fr": "La chimie physique étudie les transformations de température, de pression, de travail et d’énergie dans les systèmes chimiques.",
          "ru": "Физическая химия изучает температуру, давление, превращения работы и энергии в химических системах.",
          "ar": "تدرس الكيمياء الفيزيائية درجة الحرارة والضغط والعمل وتحولات الطاقة في الأنظمة الكيميائية.",
          "zh": "物理化学研究化学系统中的温度、压力、功和能量转换。",
          "ku": "Kîmyaya fizîkî di pergalên kîmyewî de germahî, zext, kar û veguherînên enerjiyê lêkolîn dike."
        },
        {
          "tr": "Büret sadece yüksek sıcaklıkta sıvı kaynatmak için kullanılır.",
          "en": "The burette is used only for boiling liquids at high temperatures.",
          "de": "Die Bürette wird nur zum Kochen von Flüssigkeiten bei hohen Temperaturen verwendet.",
          "fr": "La burette est utilisée uniquement pour faire bouillir des liquides à haute température.",
          "ru": "Бюретку используют только для кипячения жидкостей при высоких температурах.",
          "ar": "تُستخدم السحاحة فقط لغلي السوائل في درجات حرارة عالية.",
          "zh": "滴定管仅用于高温沸腾液体。",
          "ku": "Buret tenê ji bo kelandina şilekên di germahiyên bilind de tê bikar anîn."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Fizikokimya, kimyasal sistemlerde sıcaklık, basınç, iş ve enerji dönüşümlerini inceler.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Physical chemistry studies temperature, pressure, work and energy transformations in chemical systems.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die physikalische Chemie untersucht Temperatur-, Druck-, Arbeits- und Energieumwandlungen in chemischen Systemen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La chimie physique étudie les transformations de température, de pression, de travail et d’énergie dans les systèmes chimiques.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Физическая химия изучает температуру, давление, превращения работы и энергии в химических системах.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تدرس الكيمياء الفيزيائية درجة الحرارة والضغط والعمل وتحولات الطاقة في الأنظمة الكيميائية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“物理化学研究化学系统中的温度、压力、功和能量转换。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Kîmyaya fizîkî di pergalên kîmyewî de germahî, zext, kar û veguherînên enerjiyê lêkolîn dike.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u01-twin10",
      "stem": {
        "tr": "Kimya dersinde Kimya Bilimi ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Chemistry as a Science, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Chemiewissenschaft: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Science Chimique, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Химия как наука», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"علم الكيمياء\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“化学科学”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Zanista Kîmyayê\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Çevreye zararlı maddeler alev sembolü ile gösterilir.",
          "en": "Substances that are harmful to the environment are indicated with a flame symbol.",
          "de": "Umweltschädliche Stoffe sind mit einem Flammensymbol gekennzeichnet.",
          "fr": "Les substances nocives pour l'environnement sont signalées par un symbole de flamme.",
          "ru": "Вещества, вредные для окружающей среды, обозначаются символом пламени.",
          "ar": "تتم الإشارة إلى المواد الضارة بالبيئة برمز اللهب.",
          "zh": "对环境有害的物质用火焰符号表示。",
          "ku": "Madeyên ku ji jîngehê re zerardar in, bi nîşana şewatê têne destnîşan kirin."
        },
        {
          "tr": "Organik çözücülerin saflığı koklanarak tayin edilebilir.",
          "en": "The purity of organic solvents can be determined by smell.",
          "de": "Die Reinheit organischer Lösungsmittel lässt sich anhand des Geruchs bestimmen.",
          "fr": "La pureté des solvants organiques peut être déterminée par l'odeur.",
          "ru": "Чистоту органических растворителей можно определить по запаху.",
          "ar": "يمكن تحديد نقاء المذيبات العضوية عن طريق الرائحة.",
          "zh": "有机溶剂的纯度可以通过气味来判断。",
          "ku": "Paqijiya rûkalên organîk bi bîhnê dikare were destnîşankirin."
        },
        {
          "tr": "Kral suyunu Aristo dört element kuramıyla açıklamıştır.",
          "en": "Aristotle explained aqua regia using the four elements theory.",
          "de": "Aristoteles erklärte Königswasser mit der Vier-Elemente-Lehre.",
          "fr": "Aristote a expliqué l'eau régale par la théorie des quatre éléments.",
          "ru": "Аристотель объяснил царскую водку теорией четырех элементов.",
          "ar": "فسر أرسطو الماء الملكي بنظرية العناصر الأربعة.",
          "zh": "亚里士多德用四元素学说解释了王水。",
          "ku": "Arîsto ava şahî bi teoriya çar hêmanan rave kir."
        },
        {
          "tr": "Erlenmayer gaz hacmi ölçümünde büretin yerini tutar.",
          "en": "Erlenmayer replaces the burette in gas volume measurement.",
          "de": "Erlenmayer ersetzt die Bürette bei der Gasvolumenmessung.",
          "fr": "Erlenmayer remplace la burette dans la mesure du volume de gaz.",
          "ru": "Эрленмайер заменяет бюретку при измерении объема газа.",
          "ar": "Erlenmayer يستبدل السحاحة في قياس حجم الغاز.",
          "zh": "Erlenmayer 在气体体积测量中取代了滴定管。",
          "ku": "Erlenmayer di pîvana qebareya gazê de buretê diguhezîne."
        },
        {
          "tr": "Analitik kimya, maddelerin bileşenlerini nitel (kalitatif) ve nicel (kantitatif) olarak belirler.",
          "en": "Analytical chemistry determines the components of substances qualitatively and quantitatively.",
          "de": "Die analytische Chemie bestimmt die Bestandteile von Stoffen qualitativ und quantitativ.",
          "fr": "La chimie analytique détermine les composants des substances qualitativement et quantitativement.",
          "ru": "Аналитическая химия определяет компоненты веществ качественно и количественно.",
          "ar": "تحدد الكيمياء التحليلية مكونات المواد نوعيا وكميا.",
          "zh": "分析化学定性和定量地测定物质的成分。",
          "ku": "Kîmyaya analîtîk pêkhateyên maddeyan bi kalîte û mîqdar diyar dike."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Analitik kimya, maddelerin bileşenlerini nitel (kalitatif) ve nicel (kantitatif) olarak belirler.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Analytical chemistry determines the components of substances qualitatively and quantitatively.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die analytische Chemie bestimmt die Bestandteile von Stoffen qualitativ und quantitativ.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La chimie analytique détermine les composants des substances qualitativement et quantitativement.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Аналитическая химия определяет компоненты веществ качественно и количественно.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تحدد الكيمياء التحليلية مكونات المواد نوعيا وكميا.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“分析化学定性和定量地测定物质的成分。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Kîmyaya analîtîk pêkhateyên maddeyan bi kalîte û mîqdar diyar dike.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u01-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimya Bilimi konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Chemistry as a Science?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Chemiewissenschaft zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Science Chimique ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Химия как наука»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"علم الكيمياء\"؟",
        "zh": "根据“化学科学”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Zanista Kîmyayê\" de rast e?"
      },
      "options": [
        {
          "tr": "Biyokimya, canlı organizmalardaki DNA, protein ve enzim tepkimelerini inceler.",
          "en": "Biochemistry studies DNA, protein and enzyme reactions in living organisms.",
          "de": "Die Biochemie untersucht DNA-, Protein- und Enzymreaktionen in lebenden Organismen.",
          "fr": "La biochimie étudie les réactions de l'ADN, des protéines et des enzymes dans les organismes vivants.",
          "ru": "Биохимия изучает реакции ДНК, белков и ферментов в живых организмах.",
          "ar": "تدرس الكيمياء الحيوية تفاعلات الحمض النووي والبروتين والإنزيمات في الكائنات الحية.",
          "zh": "生物化学研究生物体中的 DNA、蛋白质和酶反应。",
          "ku": "Biyokîmya reaksiyonên ADN, proteîn û enzîman di organîzmayên zindî de lêkolîn dike."
        },
        {
          "tr": "Kuru kafa sembolü radyoaktif ışıma yapan maddeleri belirtir.",
          "en": "The skull symbol indicates substances that emit radioactive radiation.",
          "de": "Das Totenkopfsymbol weist auf Stoffe hin, die radioaktive Strahlung aussenden.",
          "fr": "Le symbole du crâne indique les substances qui émettent des rayonnements radioactifs.",
          "ru": "Символ черепа обозначает вещества, излучающие радиоактивное излучение.",
          "ar": "يشير رمز الجمجمة إلى المواد التي تنبعث منها إشعاعات مشعة.",
          "zh": "骷髅符号表示发射放射性辐射的物质。",
          "ku": "Sembola skull maddeyên ku tîrêjên radyoaktîf derdixin nîşan dide."
        },
        {
          "tr": "Simyacılar teraziyi hassas olarak kullanarak kütle korunumunu kanıtlamıştır.",
          "en": "Alchemists proved the conservation of mass by using the analytical balance precisely.",
          "de": "Alchemisten bewiesen die Massenerhaltung durch die präzise Verwendung der Analysenwaage.",
          "fr": "Les alchimistes ont prouvé la conservation de la masse en utilisant précisément la balance analytique.",
          "ru": "Алхимики доказали сохранение массы, точно используя аналитические весы.",
          "ar": "أثبت الخيميائيون حفظ الكتلة باستخدام الميزان التحليلي الدقيق.",
          "zh": "炼金术士通过精确使用精密天平证明了质量守恒。",
          "ku": "Alkîmîstan parastina girseyê bi karanîna terezûya hesas îspat kirin."
        },
        {
          "tr": "Formik asit Robert Boyle tarafından element olarak tanımlanmıştır.",
          "en": "Formic acid was identified as an element by Robert Boyle.",
          "de": "Ameisensäure wurde von Robert Boyle als Element identifiziert.",
          "fr": "L'acide formique a été identifié comme élément par Robert Boyle.",
          "ru": "Муравьиная кислота была идентифицирована как элемент Робертом Бойлем.",
          "ar": "تم تحديد حمض الفورميك كعنصر من قبل روبرت بويل.",
          "zh": "甲酸被罗伯特·博伊尔鉴定为一种元素。",
          "ku": "Asîdê formîk wekî elementek ji hêla Robert Boyle ve hate nas kirin."
        },
        {
          "tr": "Balon joje katı yakma fırını olarak kullanılır.",
          "en": "The volumetric flask is used as a solid incinerator.",
          "de": "Der Messkolben dient als Feststoffverbrennungsanlage.",
          "fr": "La fiole jaugée est utilisée comme incinérateur de solides.",
          "ru": "Мерную колбу используют в качестве печи для сжигания твердых веществ.",
          "ar": "يتم استخدام الدورق الحجمي كمحرقة صلبة.",
          "zh": "容量瓶用作固体焚烧炉。",
          "ku": "Firmaya volumetric wekî şewitandina hişk tê bikaranîn."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Biyokimya, canlı organizmalardaki DNA, protein ve enzim tepkimelerini inceler.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Biochemistry studies DNA, protein and enzyme reactions in living organisms.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Biochemie untersucht DNA-, Protein- und Enzymreaktionen in lebenden Organismen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La biochimie étudie les réactions de l'ADN, des protéines et des enzymes dans les organismes vivants.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Биохимия изучает реакции ДНК, белков и ферментов в живых организмах.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تدرس الكيمياء الحيوية تفاعلات الحمض النووي والبروتين والإنزيمات في الكائنات الحية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“生物化学研究生物体中的 DNA、蛋白质和酶反应。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Biyokîmya reaksiyonên ADN, proteîn û enzîman di organîzmayên zindî de lêkolîn dike.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u01-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimya Bilimi sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Chemistry as a Science, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Chemiewissenschaft: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Science Chimique, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Химия как наука», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"علم الكيمياء\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“化学科学”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Zanista Kîmyayê\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Derişik asidi seyreltirken hızla üzerine soğuk su boşaltılmalıdır.",
          "en": "When diluting concentrated acid, cold water should be quickly poured over it.",
          "de": "Beim Verdünnen von konzentrierter Säure sollte diese schnell mit kaltem Wasser übergossen werden.",
          "fr": "Lors de la dilution d'un acide concentré, il convient de verser rapidement de l'eau froide dessus.",
          "ru": "При разбавлении концентрированной кислоты ее следует быстро залить холодной водой.",
          "ar": "عند تخفيف الحمض المركز، يجب سكب الماء البارد عليه بسرعة.",
          "zh": "稀释浓酸时，应迅速倒入冷水。",
          "ku": "Dema ku asîda konsantrekirî tê rijandin, divê ava sar zû bi ser de were rijandin."
        },
        {
          "tr": "Taharriş edici güvenlik piktogramı ünlem işareti ile gösterilir.",
          "en": "The irritating safety pictogram is indicated by an exclamation mark.",
          "de": "Das irritierende Sicherheitspiktogramm ist durch ein Ausrufezeichen gekennzeichnet.",
          "fr": "Le pictogramme de sécurité irritant est signalé par un point d'exclamation.",
          "ru": "Раздражающая пиктограмма безопасности обозначается восклицательным знаком.",
          "ar": "يُشار إلى الرسم التوضيحي للسلامة المزعج بعلامة تعجب.",
          "zh": "令人恼火的安全象形图用感叹号表示。",
          "ku": "Pîktograma ewlehiyê ya acizker bi nîşanek ravek tê destnîşan kirin."
        },
        {
          "tr": "Zaç yağı HNO3 formülüne sahiptir.",
          "en": "Oil of vitriol has the chemical formula HNO3.",
          "de": "Vitriolöl besitzt die chemische Formel HNO3.",
          "fr": "L'huile de vitriol a pour formule chimique HNO3.",
          "ru": "Купоросное масло имеет формулу HNO3.",
          "ar": "زيت الزاج له الصيغة الكيميائية HNO3.",
          "zh": "矾油的化学式为 HNO3。",
          "ku": "Rûnê zaçê xwedî formula HNO3 ye."
        },
        {
          "tr": "Büret sadece yüksek sıcaklıkta sıvı kaynatmak için kullanılır.",
          "en": "The burette is used only for boiling liquids at high temperatures.",
          "de": "Die Bürette wird nur zum Kochen von Flüssigkeiten bei hohen Temperaturen verwendet.",
          "fr": "La burette est utilisée uniquement pour faire bouillir des liquides à haute température.",
          "ru": "Бюретку используют только для кипячения жидкостей при высоких температурах.",
          "ar": "تُستخدم السحاحة فقط لغلي السوائل في درجات حرارة عالية.",
          "zh": "滴定管仅用于高温沸腾液体。",
          "ku": "Buret tenê ji bo kelandina şilekên di germahiyên bilind de tê bikar anîn."
        },
        {
          "tr": "Kireç taşı CaO sönmemiş kireç ile aynı bileşiktir.",
          "en": "Limestone CaO is the same compound as quicklime.",
          "de": "Kalkstein CaO ist die gleiche Verbindung wie Branntkalk.",
          "fr": "Le calcaire CaO est le même composé que la chaux vive.",
          "ru": "Известняк CaO представляет собой то же соединение, что и негашеная известь.",
          "ar": "الحجر الجيري CaO هو نفس مركب الجير الحي.",
          "zh": "石灰石 CaO 与生石灰是相同的化合物。",
          "ku": "Kevirê kilsinî CaO heman pêkhatî ye wekî kilê zû."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Taharriş edici güvenlik piktogramı ünlem işareti ile gösterilir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The irritating safety pictogram is indicated by an exclamation mark.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Das irritierende Sicherheitspiktogramm ist durch ein Ausrufezeichen gekennzeichnet.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le pictogramme de sécurité irritant est signalé par un point d'exclamation.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Раздражающая пиктограмма безопасности обозначается восклицательным знаком.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يُشار إلى الرسم التوضيحي للسلامة المزعج بعلامة تعجب.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“令人恼火的安全象形图用感叹号表示。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Pîktograma ewlehiyê ya acizker bi nîşanek ravek tê destnîşan kirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u01-twin13",
      "stem": {
        "tr": "Aşağıda Kimya Bilimi ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Chemistry as a Science, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Chemiewissenschaft: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Science Chimique, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Химия как наука», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"علم الكيمياء\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“化学科学”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Zanista Kîmyayê\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Organik çözücülerin saflığı koklanarak tayin edilebilir.",
          "en": "The purity of organic solvents can be determined by smell.",
          "de": "Die Reinheit organischer Lösungsmittel lässt sich anhand des Geruchs bestimmen.",
          "fr": "La pureté des solvants organiques peut être déterminée par l'odeur.",
          "ru": "Чистоту органических растворителей можно определить по запаху.",
          "ar": "يمكن تحديد نقاء المذيبات العضوية عن طريق الرائحة.",
          "zh": "有机溶剂的纯度可以通过气味来判断。",
          "ku": "Paqijiya rûkalên organîk bi bîhnê dikare were destnîşankirin."
        },
        {
          "tr": "Kral suyunu Aristo dört element kuramıyla açıklamıştır.",
          "en": "Aristotle explained aqua regia using the four elements theory.",
          "de": "Aristoteles erklärte Königswasser mit der Vier-Elemente-Lehre.",
          "fr": "Aristote a expliqué l'eau régale par la théorie des quatre éléments.",
          "ru": "Аристотель объяснил царскую водку теорией четырех элементов.",
          "ar": "فسر أرسطو الماء الملكي بنظرية العناصر الأربعة.",
          "zh": "亚里士多德用四元素学说解释了王水。",
          "ku": "Arîsto ava şahî bi teoriya çar hêmanan rave kir."
        },
        {
          "tr": "Çevreye zararlı maddeler kurumuş ağaç ve ölü balık sembolü ile gösterilir.",
          "en": "Substances that are harmful to the environment are indicated by the symbol of dried trees and dead fish.",
          "de": "Auf umweltschädliche Stoffe wird durch das Symbol vertrockneter Bäume und toter Fische hingewiesen.",
          "fr": "Les substances nocives pour l'environnement sont signalées par le symbole des arbres séchés et des poissons morts.",
          "ru": "Вещества, вредные для окружающей среды, обозначаются символом засохших деревьев и мертвой рыбы.",
          "ar": "يشار إلى المواد الضارة بالبيئة برمز الأشجار المجففة والأسماك الميتة.",
          "zh": "对环境有害的物质用干树和死鱼的符号表示。",
          "ku": "Madeyên ku zerarê didin jîngehê bi nîşana darên hişkbûyî û masiyên mirî têne nîşandayîn."
        },
        {
          "tr": "Erlenmayer gaz hacmi ölçümünde büretin yerini tutar.",
          "en": "Erlenmayer replaces the burette in gas volume measurement.",
          "de": "Erlenmayer ersetzt die Bürette bei der Gasvolumenmessung.",
          "fr": "Erlenmayer remplace la burette dans la mesure du volume de gaz.",
          "ru": "Эрленмайер заменяет бюретку при измерении объема газа.",
          "ar": "Erlenmayer يستبدل السحاحة في قياس حجم الغاز.",
          "zh": "Erlenmayer 在气体体积测量中取代了滴定管。",
          "ku": "Erlenmayer di pîvana qebareya gazê de buretê diguhezîne."
        },
        {
          "tr": "Fizikokimya yalnızca canlı metabolizmasındaki molekülleri inceler.",
          "en": "Physicochemistry only studies molecules in living metabolism.",
          "de": "Die Physikochemie untersucht nur Moleküle im lebenden Stoffwechsel.",
          "fr": "La physicochimie étudie uniquement les molécules du métabolisme vivant.",
          "ru": "Физикохимия изучает только молекулы в живом метаболизме.",
          "ar": "الكيمياء الفيزيائية تدرس فقط الجزيئات في عملية التمثيل الغذائي الحي.",
          "zh": "物理化学仅研究生命代谢中的分子。",
          "ku": "Fîzokîmya tenê molekulên di metabolîzma zindî de lêkolîn dike."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Çevreye zararlı maddeler kurumuş ağaç ve ölü balık sembolü ile gösterilir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Substances that are harmful to the environment are indicated by the symbol of dried trees and dead fish.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Auf umweltschädliche Stoffe wird durch das Symbol vertrockneter Bäume und toter Fische hingewiesen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les substances nocives pour l'environnement sont signalées par le symbole des arbres séchés et des poissons morts.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Вещества, вредные для окружающей среды, обозначаются символом засохших деревьев и мертвой рыбы.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يشار إلى المواد الضارة بالبيئة برمز الأشجار المجففة والأسماك الميتة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“对环境有害的物质用干树和死鱼的符号表示。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Madeyên ku zerarê didin jîngehê bi nîşana darên hişkbûyî û masiyên mirî têne nîşandayîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u01-twin14",
      "stem": {
        "tr": "Kimya Bilimi konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Chemistry as a Science, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Chemiewissenschaft: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Science Chimique, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Химия как наука», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"علم الكيمياء\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“化学科学”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Zanista Kîmyayê\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Simyacılar teraziyi hassas olarak kullanarak kütle korunumunu kanıtlamıştır.",
          "en": "Alchemists proved the conservation of mass by using the analytical balance precisely.",
          "de": "Alchemisten bewiesen die Massenerhaltung durch die präzise Verwendung der Analysenwaage.",
          "fr": "Les alchimistes ont prouvé la conservation de la masse en utilisant précisément la balance analytique.",
          "ru": "Алхимики доказали сохранение массы, точно используя аналитические весы.",
          "ar": "أثبت الخيميائيون حفظ الكتلة باستخدام الميزان التحليلي الدقيق.",
          "zh": "炼金术士通过精确使用精密天平证明了质量守恒。",
          "ku": "Alkîmîstan parastina girseyê bi karanîna terezûya hesas îspat kirin."
        },
        {
          "tr": "Formik asit Robert Boyle tarafından element olarak tanımlanmıştır.",
          "en": "Formic acid was identified as an element by Robert Boyle.",
          "de": "Ameisensäure wurde von Robert Boyle als Element identifiziert.",
          "fr": "L'acide formique a été identifié comme élément par Robert Boyle.",
          "ru": "Муравьиная кислота была идентифицирована как элемент Робертом Бойлем.",
          "ar": "تم تحديد حمض الفورميك كعنصر من قبل روبرت بويل.",
          "zh": "甲酸被罗伯特·博伊尔鉴定为一种元素。",
          "ku": "Asîdê formîk wekî elementek ji hêla Robert Boyle ve hate nas kirin."
        },
        {
          "tr": "Balon joje katı yakma fırını olarak kullanılır.",
          "en": "The volumetric flask is used as a solid incinerator.",
          "de": "Der Messkolben dient als Feststoffverbrennungsanlage.",
          "fr": "La fiole jaugée est utilisée comme incinérateur de solides.",
          "ru": "Мерную колбу используют в качестве печи для сжигания твердых веществ.",
          "ar": "يتم استخدام الدورق الحجمي كمحرقة صلبة.",
          "zh": "容量瓶用作固体焚烧炉。",
          "ku": "Firmaya volumetric wekî şewitandina hişk tê bikaranîn."
        },
        {
          "tr": "Zehirli (toksik) maddeler kuru kafa sembolü taşır ve solunmamalıdır.",
          "en": "Poisonous (toxic) substances carry the skull symbol and should not be inhaled.",
          "de": "Giftige (toxische) Stoffe tragen das Totenkopf-Symbol und sollten nicht eingeatmet werden.",
          "fr": "Les substances toxiques (toxiques) portent le symbole du crâne et ne doivent pas être inhalées.",
          "ru": "Ядовитые (токсичные) вещества имеют символ черепа, и их нельзя вдыхать.",
          "ar": "المواد السامة (السامة) تحمل رمز الجمجمة ويجب عدم استنشاقها.",
          "zh": "有毒（有毒）物质带有骷髅符号，不应吸入。",
          "ku": "Madeyên jehrîn (jehrîn) sembola serjê hildigirin û divê neyên hilgirtin."
        },
        {
          "tr": "Analitik kimya karbon temelli polimerleri sentezleyen daldır.",
          "en": "Analytical chemistry is the branch that synthesizes carbon-based polymers.",
          "de": "Die analytische Chemie ist der Zweig, der kohlenstoffbasierte Polymere synthetisiert.",
          "fr": "La chimie analytique est la branche qui synthétise les polymères à base de carbone.",
          "ru": "Аналитическая химия — это раздел, занимающийся синтезом полимеров на основе углерода.",
          "ar": "الكيمياء التحليلية هي الفرع الذي يقوم بتصنيع البوليمرات القائمة على الكربون.",
          "zh": "分析化学是合成碳基聚合物的分支。",
          "ku": "Kîmyaya analîtîk şaxek e ku polîmerên karbon-based sentez dike."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Zehirli (toksik) maddeler kuru kafa sembolü taşır ve solunmamalıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Poisonous (toxic) substances carry the skull symbol and should not be inhaled.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Giftige (toxische) Stoffe tragen das Totenkopf-Symbol und sollten nicht eingeatmet werden.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les substances toxiques (toxiques) portent le symbole du crâne et ne doivent pas être inhalées.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Ядовитые (токсичные) вещества имеют символ черепа, и их нельзя вдыхать.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المواد السامة (السامة) تحمل رمز الجمجمة ويجب عدم استنشاقها.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“有毒（有毒）物质带有骷髅符号，不应吸入。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Madeyên jehrîn (jehrîn) sembola serjê hildigirin û divê neyên hilgirtin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u01-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimya Bilimi ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Chemistry as a Science, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Chemiewissenschaft: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Science Chimique, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Химия как наука», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"علم الكيمياء\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“化学科学”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Zanista Kîmyayê\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Zaç yağı HNO3 formülüne sahiptir.",
          "en": "Oil of vitriol has the chemical formula HNO3.",
          "de": "Vitriolöl besitzt die chemische Formel HNO3.",
          "fr": "L'huile de vitriol a pour formule chimique HNO3.",
          "ru": "Купоросное масло имеет формулу HNO3.",
          "ar": "زيت الزاج له الصيغة الكيميائية HNO3.",
          "zh": "矾油的化学式为 HNO3。",
          "ku": "Rûnê zaçê xwedî formula HNO3 ye."
        },
        {
          "tr": "Büret sadece yüksek sıcaklıkta sıvı kaynatmak için kullanılır.",
          "en": "The burette is used only for boiling liquids at high temperatures.",
          "de": "Die Bürette wird nur zum Kochen von Flüssigkeiten bei hohen Temperaturen verwendet.",
          "fr": "La burette est utilisée uniquement pour faire bouillir des liquides à haute température.",
          "ru": "Бюретку используют только для кипячения жидкостей при высоких температурах.",
          "ar": "تُستخدم السحاحة فقط لغلي السوائل في درجات حرارة عالية.",
          "zh": "滴定管仅用于高温沸腾液体。",
          "ku": "Buret tenê ji bo kelandina şilekên di germahiyên bilind de tê bikar anîn."
        },
        {
          "tr": "Kireç taşı CaO sönmemiş kireç ile aynı bileşiktir.",
          "en": "Limestone CaO is the same compound as quicklime.",
          "de": "Kalkstein CaO ist die gleiche Verbindung wie Branntkalk.",
          "fr": "Le calcaire CaO est le même composé que la chaux vive.",
          "ru": "Известняк CaO представляет собой то же соединение, что и негашеная известь.",
          "ar": "الحجر الجيري CaO هو نفس مركب الجير الحي.",
          "zh": "石灰石 CaO 与生石灰是相同的化合物。",
          "ku": "Kevirê kilsinî CaO heman pêkhatî ye wekî kilê zû."
        },
        {
          "tr": "Biyokimya endüstriyel metal alaşımlarını inceler.",
          "en": "Biochemistry studies industrial metal alloys.",
          "de": "Die Biochemie untersucht industrielle Metalllegierungen.",
          "fr": "La biochimie étudie les alliages métalliques industriels.",
          "ru": "Биохимия изучает промышленные металлические сплавы.",
          "ar": "تدرس الكيمياء الحيوية السبائك المعدنية الصناعية.",
          "zh": "生物化学研究工业金属合金。",
          "ku": "Biyokîmya aligirên metal ên pîşesaziyê lêkolîn dike."
        },
        {
          "tr": "Asit üzerine su dökülmez; aşırı ısı açığa çıkıp sıçramaması için su üzerine yavaşça asit eklenir.",
          "en": "Water is not poured on acid; Acid is slowly added to the water to prevent excess heat from being released and splashing.",
          "de": "Wasser wird nicht auf Säure gegossen; Dem Wasser wird langsam Säure zugesetzt, um zu verhindern, dass überschüssige Hitze freigesetzt wird und verspritzt.",
          "fr": "L'eau n'est pas versée sur l'acide ; L'acide est ajouté lentement à l'eau pour éviter que l'excès de chaleur ne soit libéré et éclaboussé.",
          "ru": "Воду на кислоту не льют; В воду медленно добавляют кислоту, чтобы предотвратить выделение избыточного тепла и разбрызгивание.",
          "ar": "ولا يُسكب الماء على الحمض؛ يضاف الحمض ببطء إلى الماء لمنع إطلاق الحرارة الزائدة وتناثرها.",
          "zh": "水不倒在酸上；将酸缓慢添加到水中，以防止多余的热量释放和飞溅。",
          "ku": "Av li asîdê nayê rijandin; Asît hêdî hêdî li avê tê zêdekirin da ku germa zêde dernekeve û nerije."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Asit üzerine su dökülmez; aşırı ısı açığa çıkıp sıçramaması için su üzerine yavaşça asit eklenir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Water is not poured on acid; Acid is slowly added to the water to prevent excess heat from being released and splashing.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wasser wird nicht auf Säure gegossen; Dem Wasser wird langsam Säure zugesetzt, um zu verhindern, dass überschüssige Hitze freigesetzt wird und verspritzt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'eau n'est pas versée sur l'acide ; L'acide est ajouté lentement à l'eau pour éviter que l'excès de chaleur ne soit libéré et éclaboussé.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Воду на кислоту не льют; В воду медленно добавляют кислоту, чтобы предотвратить выделение избыточного тепла и разбрызгивание.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"ولا يُسكب الماء على الحمض؛ يضاف الحمض ببطء إلى الماء لمنع إطلاق الحرارة الزائدة وتناثرها.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“水不倒在酸上；将酸缓慢添加到水中，以防止多余的热量释放和飞溅。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Av li asîdê nayê rijandin; Asît hêdî hêdî li avê tê zêdekirin da ku germa zêde dernekeve û nerije.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u01-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimya Bilimi konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Chemistry as a Science, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Chemiewissenschaft die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Science Chimique, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Химия как наука», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"علم الكيمياء\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“化学科学”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Zanista Kîmyayê\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Laboratuvarda kimyasal maddelerin koklanması ve tadına bakılması kesinlikle yasaktır.",
          "en": "Smelling and tasting chemicals in the laboratory is strictly prohibited.",
          "de": "Das Riechen und Schmecken von Chemikalien im Labor ist strengstens untersagt.",
          "fr": "Il est strictement interdit de sentir et de goûter des produits chimiques en laboratoire.",
          "ru": "Нюхать и пробовать химические вещества в лаборатории строго запрещено.",
          "ar": "يمنع منعا باتا شم وتذوق المواد الكيميائية في المختبر.",
          "zh": "严禁在实验室内嗅闻和品尝化学品。",
          "ku": "Bêhnkirin û tamkirina madeyên kîmyewî di laboratuarê de bi tundî qedexe ye."
        },
        {
          "tr": "Kral suyunu Aristo dört element kuramıyla açıklamıştır.",
          "en": "Aristotle explained aqua regia using the four elements theory.",
          "de": "Aristoteles erklärte Königswasser mit der Vier-Elemente-Lehre.",
          "fr": "Aristote a expliqué l'eau régale par la théorie des quatre éléments.",
          "ru": "Аристотель объяснил царскую водку теорией четырех элементов.",
          "ar": "فسر أرسطو الماء الملكي بنظرية العناصر الأربعة.",
          "zh": "亚里士多德用四元素学说解释了王水。",
          "ku": "Arîsto ava şahî bi teoriya çar hêmanan rave kir."
        },
        {
          "tr": "Erlenmayer gaz hacmi ölçümünde büretin yerini tutar.",
          "en": "Erlenmayer replaces the burette in gas volume measurement.",
          "de": "Erlenmayer ersetzt die Bürette bei der Gasvolumenmessung.",
          "fr": "Erlenmayer remplace la burette dans la mesure du volume de gaz.",
          "ru": "Эрленмайер заменяет бюретку при измерении объема газа.",
          "ar": "Erlenmayer يستبدل السحاحة في قياس حجم الغاز.",
          "zh": "Erlenmayer 在气体体积测量中取代了滴定管。",
          "ku": "Erlenmayer di pîvana qebareya gazê de buretê diguhezîne."
        },
        {
          "tr": "Fizikokimya yalnızca canlı metabolizmasındaki molekülleri inceler.",
          "en": "Physicochemistry only studies molecules in living metabolism.",
          "de": "Die Physikochemie untersucht nur Moleküle im lebenden Stoffwechsel.",
          "fr": "La physicochimie étudie uniquement les molécules du métabolisme vivant.",
          "ru": "Физикохимия изучает только молекулы в живом метаболизме.",
          "ar": "الكيمياء الفيزيائية تدرس فقط الجزيئات في عملية التمثيل الغذائي الحي.",
          "zh": "物理化学仅研究生命代谢中的分子。",
          "ku": "Fîzokîmya tenê molekulên di metabolîzma zindî de lêkolîn dike."
        },
        {
          "tr": "Ünlem piktogramı patlayıcı maddeleri temsil eder.",
          "en": "The exclamation pictogram represents explosive substances.",
          "de": "Das Ausrufezeichen-Piktogramm steht für explosive Stoffe.",
          "fr": "Le pictogramme d'exclamation représente des substances explosives.",
          "ru": "Восклицательный знак обозначает взрывоопасные вещества.",
          "ar": "يمثل رسم التعجب المواد المتفجرة.",
          "zh": "感叹号象形图代表爆炸性物质。",
          "ku": "Pîktograma qîrînê madeyên teqemenî nîşan dide."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Laboratuvarda kimyasal maddelerin koklanması ve tadına bakılması kesinlikle yasaktır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Smelling and tasting chemicals in the laboratory is strictly prohibited.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Das Riechen und Schmecken von Chemikalien im Labor ist strengstens untersagt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Il est strictement interdit de sentir et de goûter des produits chimiques en laboratoire.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Нюхать и пробовать химические вещества в лаборатории строго запрещено.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يمنع منعا باتا شم وتذوق المواد الكيميائية في المختبر.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“严禁在实验室内嗅闻和品尝化学品。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Bêhnkirin û tamkirina madeyên kîmyewî di laboratuarê de bi tundî qedexe ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit01;
