import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit08: ChemistryUnitSeedData = {
  "id": "u08",
  "order": 8,
  "exam": "TYT",
  "grade": 10,
  "title": {
    "tr": "Karışımlar ve Ayırma Teknikleri",
    "en": "Mixtures & Separation Techniques",
    "de": "Mischungen & Trennverfahren",
    "fr": "Mélanges & Techniques de Séparation",
    "ru": "Смеси и методы разделения",
    "ar": "المخاليط وطرق الفصل",
    "zh": "混合物与分离技术",
    "ku": "Têkelî û Rêbazên Veqetandinê"
  },
  "subtitle": {
    "tr": "Homojen, Heterojen Karışımlar, Derişim ve Damıtma",
    "en": "Solutions, Colloids, Distillation & ppm",
    "de": "Homogene, heterogene Gemische, Konzentration und Destillation",
    "fr": "Mélanges homogènes et hétérogènes, concentration et distillation",
    "ru": "Гомогенные, гетерогенные смеси, концентрирование и перегонка",
    "ar": "المخاليط المتجانسة وغير المتجانسة والتركيز والتقطير",
    "zh": "均质、非均质混合物、浓缩和蒸馏",
    "ku": "Tevliheviyên Homogeneous, Heterogenous, Concentration and Distillation"
  },
  "facts": [
    {
      "id": "u08-f01",
      "fact": {
        "tr": "Homojen karışımlar (çözeltiler) her yerinde aynı özelliği gösteren tek fazlı sistemlerdir.",
        "en": "Homogeneous mixtures (solutions) are single-phase systems that have the same properties throughout.",
        "de": "Homogene Gemische (Lösungen) sind einphasige Systeme, die durchgehend die gleichen Eigenschaften aufweisen.",
        "fr": "Les mélanges homogènes (solutions) sont des systèmes monophasés qui ont partout les mêmes propriétés.",
        "ru": "Гомогенные смеси (растворы) представляют собой однофазные системы, обладающие одинаковыми свойствами во всем.",
        "ar": "المخاليط (المحاليل) المتجانسة هي أنظمة أحادية الطور لها نفس الخصائص طوال الوقت.",
        "zh": "均质混合物（溶液）是具有相同性质的单相系统。",
        "ku": "Têkelên homojen (çareserî) pergalên yek-qonaxê ne ku li seranserê wan xwedî heman taybetmendiyan in."
      },
      "trap": {
        "tr": "Kolloitler mikroskopsuz bakıldığında da heterojen görünür ve hemen çöker.",
        "en": "Even when viewed without a microscope, colloids appear heterogeneous and precipitate immediately.",
        "de": "Selbst bei Betrachtung ohne Mikroskop erscheinen Kolloide heterogen und fallen sofort aus.",
        "fr": "Même observés sans microscope, les colloïdes semblent hétérogènes et précipitent immédiatement.",
        "ru": "Даже при осмотре без микроскопа коллоиды кажутся неоднородными и сразу же выпадают в осадок.",
        "ar": "حتى عند النظر إليها بدون مجهر، تبدو الغرويات غير متجانسة وتترسب على الفور.",
        "zh": "即使不用显微镜观察，胶体也会显得不均匀并立即沉淀。",
        "ku": "Dema ku bêyî mîkroskopê were temaşe kirin jî, koloid heterojen xuya dikin û yekser dibarin."
      }
    },
    {
      "id": "u08-f02",
      "fact": {
        "tr": "Süspansiyon katı-sıvı heterojen karışımdır (örn. tebeşir tozu-su, Türk kahvesi, ayran).",
        "en": "Suspension is a solid-liquid heterogeneous mixture (e.g. chalk powder-water, Turkish coffee, buttermilk).",
        "de": "Die Suspension ist eine heterogene Fest-Flüssigkeits-Mischung (z. B. Kreidepulver-Wasser, türkischer Kaffee, Buttermilch).",
        "fr": "La suspension est un mélange hétérogène solide-liquide (par exemple poudre de craie-eau, café turc, babeurre).",
        "ru": "Суспензия представляет собой твердожидкостную гетерогенную смесь (например, мел-вода, турецкий кофе, пахта).",
        "ar": "المعلق عبارة عن خليط غير متجانس صلب وسائل (مثل مسحوق الطباشير والماء والقهوة التركية واللبن).",
        "zh": "悬浮液是一种固液异质混合物（例如粉笔粉-水、土耳其咖啡、酪乳）。",
        "ku": "Süspansiyon tevliheviyeke heterojen a hişk-şil e (mînak toza tebeşîrê-av, qehweya tirkî, dew)."
      },
      "trap": {
        "tr": "Süspansiyon tek fazlı homojen bir çözeltidir.",
        "en": "The suspension is a single-phase homogeneous solution.",
        "de": "Die Suspension ist eine einphasige homogene Lösung.",
        "fr": "La suspension est une solution homogène monophasée.",
        "ru": "Суспензия представляет собой однофазный гомогенный раствор.",
        "ar": "المعلق محلول متجانس أحادي الطور.",
        "zh": "该悬浮液是单相均相溶液。",
        "ku": "Süspansiyon çareseriyeke homojen a yek-qonaxî ye."
      }
    },
    {
      "id": "u08-f03",
      "fact": {
        "tr": "Emülsiyon birbiri içinde çözünmeyen sıvı-sıvı heterojen karışımdır (örn. zeytinyağı-su, mayonez).",
        "en": "Emulsion is a liquid-liquid heterogeneous mixture that is insoluble in each other (e.g. olive oil-water, mayonnaise).",
        "de": "Eine Emulsion ist ein heterogenes Flüssig-Flüssigkeits-Gemisch, das ineinander unlöslich ist (z. B. Olivenöl-Wasser, Mayonnaise).",
        "fr": "L'émulsion est un mélange hétérogène liquide-liquide insoluble l'un dans l'autre (par exemple huile d'olive-eau, mayonnaise).",
        "ru": "Эмульсия представляет собой гетерогенную смесь жидкость-жидкость, нерастворимую друг в друге (например, оливковое масло-вода, майонез).",
        "ar": "المستحلب عبارة عن خليط سائل غير متجانس غير قابل للذوبان في بعضها البعض (مثل زيت الزيتون والماء والمايونيز).",
        "zh": "乳液是一种液-液异质混合物，彼此互不相溶（例如橄榄油-水、蛋黄酱）。",
        "ku": "Emulsiyon tevliheviyek heterojen a şil-avî ye ku di nav hev de nayên çareser kirin (mînak rûnê zeytûn-ava, mayonez)."
      },
      "trap": {
        "tr": "Zeytinyağı-su karışımı ayrımsal damıtma ile ayrılır.",
        "en": "The olive oil-water mixture is separated by fractional distillation.",
        "de": "Das Olivenöl-Wasser-Gemisch wird durch fraktionierte Destillation getrennt.",
        "fr": "Le mélange huile d'olive-eau est séparé par distillation fractionnée.",
        "ru": "Смесь оливкового масла и воды разделяют фракционной перегонкой.",
        "ar": "يتم فصل خليط زيت الزيتون والماء عن طريق التقطير التجزيئي.",
        "zh": "橄榄油-水混合物通过分馏分离。",
        "ku": "Tevliheviya rûnê zeytûn-avê bi distîlasyona fraksîyonî tê veqetandin."
      }
    },
    {
      "id": "u08-f04",
      "fact": {
        "tr": "Aerosol bir gaz içinde katı veya sıvının dağılmasıyla oluşur (örn. sis, duman, sprey).",
        "en": "An aerosol is formed by the dispersion of a solid or liquid in a gas (e.g. fog, smoke, spray).",
        "de": "Ein Aerosol entsteht durch die Dispersion eines Feststoffs oder einer Flüssigkeit in einem Gas (z. B. Nebel, Rauch, Spray).",
        "fr": "Un aérosol est formé par la dispersion d'un solide ou d'un liquide dans un gaz (par exemple brouillard, fumée, spray).",
        "ru": "Аэрозоль образуется в результате распыления твердого вещества или жидкости в газе (например, туман, дым, брызги).",
        "ar": "يتكون الهباء الجوي من تشتت مادة صلبة أو سائلة في الغاز (مثل الضباب والدخان والرذاذ).",
        "zh": "气溶胶是由固体或液体分散在气体中形成的（例如雾、烟、喷雾）。",
        "ku": "Aerosol bi belavkirina hişk an şilek di gazê de (mînak mij, dûman, sprey) çê dibe."
      },
      "trap": {
        "tr": "Duman katının sıvıda dağıldığı süspansiyondur.",
        "en": "Smoke is a suspension in which the solid is dispersed in the liquid.",
        "de": "Rauch ist eine Suspension, in der der Feststoff in der Flüssigkeit dispergiert ist.",
        "fr": "La fumée est une suspension dans laquelle le solide est dispersé dans le liquide.",
        "ru": "Дым представляет собой суспензию, в которой твердое вещество рассеяно в жидкости.",
        "ar": "الدخان عبارة عن معلق يتم فيه تشتيت المادة الصلبة في السائل.",
        "zh": "烟雾是固体分散在液体中的悬浮液。",
        "ku": "Dûman suspensionek e ku tê de maddeya hişk di şilekê de belav dibe."
      }
    },
    {
      "id": "u08-f05",
      "fact": {
        "tr": "Tyndall etkisi: Kolloitlerden geçen ışık demeti saçılır ve ışığın yolu görünür.",
        "en": "Tyndall effect: A light beam passing through a colloid is scattered and its path becomes visible.",
        "de": "Tyndall-Effekt: Ein Lichtstrahl, der durch ein Kolloid fällt, wird gestreut, und sein Weg wird sichtbar.",
        "fr": "Effet Tyndall : un faisceau lumineux traversant un colloïde est diffusé et son trajet devient visible.",
        "ru": "Эффект Тиндаля: луч света, проходящий через коллоид, рассеивается, и его путь становится видимым.",
        "ar": "تأثير تيندال: يتشتت شعاع الضوء المار عبر الغروي ويصبح مساره مرئيًا.",
        "zh": "丁达尔效应：光束通过胶体时发生散射，光的路径清晰可见。",
        "ku": "Bandora Tyndall: Tîrêja ronahiyê ya ku di koloîdekê re derbas dibe belav dibe û riya wê xuya dibe."
      },
      "trap": {
        "tr": "Gerçek homojen çözeltilerde ışık demeti kuvvetle saçılır ve görünür.",
        "en": "In true homogeneous solutions, the light beam is strongly scattered and visible.",
        "de": "In wirklich homogenen Lösungen ist der Lichtstrahl stark gestreut und sichtbar.",
        "fr": "Dans les solutions véritablement homogènes, le faisceau lumineux est fortement diffusé et visible.",
        "ru": "В истинно однородных растворах луч света сильно рассеивается и виден.",
        "ar": "في المحاليل المتجانسة الحقيقية، يكون شعاع الضوء منتشرًا بقوة ومرئيًا.",
        "zh": "在真溶液中，光束被强烈散射并且可见。",
        "ku": "Di çareseriyên homojen ên rastîn de, tîrêjê ronahiyê bi tundî belav dibe û xuya dibe."
      }
    },
    {
      "id": "u08-f06",
      "fact": {
        "tr": "Kütlece yüzde derişim = (Çözünen Kütlesi / Çözelti Kütlesi) x 100'dür.",
        "en": "Percent concentration by mass = (Solute Mass / Solution Mass) x 100.",
        "de": "Prozentuale Konzentration nach Masse = (Masse gelöster Stoffe / Masse der Lösung) x 100.",
        "fr": "Pourcentage de concentration en masse = (Masse du soluté / Masse de la solution) x 100.",
        "ru": "Процентная концентрация по массе = (Масса растворенного вещества / Масса раствора) x 100.",
        "ar": "نسبة التركيز بالكتلة = (كتلة المذاب / كتلة المحلول) × 100.",
        "zh": "质量百分比浓度 =（溶质质量 / 溶液质量）x 100。",
        "ku": "Rêjeya girseyî ya ji sedî = (Girseya madeya helyayî / Girseya çareseriyê) x 100."
      },
      "trap": {
        "tr": "Kütlece yüzde derişim çözünen kütlesinin çözücü kütlesine bölünmesiyle bulunur.",
        "en": "Percent concentration by mass is calculated by dividing the mass of the solute by the mass of the solvent.",
        "de": "Die Massenkonzentration in Prozent wird berechnet, indem die Masse des gelösten Stoffes durch die Masse des Lösungsmittels dividiert wird.",
        "fr": "La concentration en pourcentage en masse est calculée en divisant la masse du soluté par la masse du solvant.",
        "ru": "Массовая процентная концентрация рассчитывается путем деления массы растворенного вещества на массу растворителя.",
        "ar": "يتم حساب التركيز المئوي للكتلة عن طريق قسمة كتلة المذاب على كتلة المذيب.",
        "zh": "质量百分比浓度通过溶质质量除以溶剂质量来计算。",
        "ku": "Rêjeya girseyî ya ji sedî bi parvekirina girseya madeya helyayî li girseya helkerê tê dîtin."
      }
    },
    {
      "id": "u08-f07",
      "fact": {
        "tr": "ppm (milyonda bir kısım) = (Çözünen Kütlesi / Çözelti Kütlesi) x 10^6'dır.",
        "en": "ppm (parts per million) = (Solute Mass / Solution Mass) x 10^6.",
        "de": "ppm (parts per million) = (Gelöste Masse / Lösungsmasse) x 10^6.",
        "fr": "ppm (parties par million) = (Masse de soluté / Masse de solution) x 10^6.",
        "ru": "ppm (частей на миллион) = (Масса растворенного вещества / Масса раствора) x 10^6.",
        "ar": "جزء في المليون (جزء في المليون) = (كتلة المذاب / كتلة المحلول) × 10 ^ 6.",
        "zh": "ppm（百万分之一）=（溶质质量/溶液质量）x 10^6。",
        "ku": "ppm (parçe di mîlyonekê de) = (Girseya madeya helyayî / Girseya çareseriyê) x 10^6."
      },
      "trap": {
        "tr": "ppm hesaplanırken çarpan 100'dür.",
        "en": "When calculating ppm, the multiplier is 100.",
        "de": "Bei der Berechnung von ppm beträgt der Multiplikator 100.",
        "fr": "Lors du calcul du ppm, le multiplicateur est de 100.",
        "ru": "При расчете ppm множитель равен 100.",
        "ar": "عند حساب جزء في المليون، يكون المضاعف 100.",
        "zh": "计算 ppm 时，乘数为 100。",
        "ku": "Dema ku ppm tê hesibandin, pirjimar 100 e."
      }
    },
    {
      "id": "u08-f08",
      "fact": {
        "tr": "Ayrımsal damıtma, kaynama noktaları farklı olan homojen sıvı-sıvı karışımları ayırmada kullanılır (örn. petrol, alkol-su).",
        "en": "Fractional distillation is used to separate homogeneous liquid-liquid mixtures with different boiling points (e.g. oil, alcohol-water).",
        "de": "Die fraktionierte Destillation dient der Trennung homogener Flüssigkeit-Flüssigkeits-Gemische mit unterschiedlichen Siedepunkten (z. B. Öl, Alkohol-Wasser).",
        "fr": "La distillation fractionnée est utilisée pour séparer des mélanges liquide-liquide homogènes avec différents points d'ébullition (par exemple huile, alcool-eau).",
        "ru": "Фракционную перегонку применяют для разделения однородных смесей жидкость-жидкость с разными температурами кипения (например, масло, спирт-вода).",
        "ar": "يستخدم التقطير التجزيئي لفصل مخاليط سائلة متجانسة ذات نقاط غليان مختلفة (مثل الزيت والكحول والماء).",
        "zh": "分馏用于分离具有不同沸点的均质液-液混合物（例如油、醇-水）。",
        "ku": "Distîlasyona fraksîyonel ji bo veqetandina hevokên şil-avî yên homojen ên bi xalên kelandinê yên cihêreng (mînak rûn, alkol-av) tê bikar anîn."
      },
      "trap": {
        "tr": "Ayrımsal damıtma yoğunluk farkına dayalı bir ayırma tekniğidir.",
        "en": "Fractional distillation is a separation technique based on density difference.",
        "de": "Die fraktionierte Destillation ist eine Trenntechnik, die auf Dichteunterschieden basiert.",
        "fr": "La distillation fractionnée est une technique de séparation basée sur la différence de densité.",
        "ru": "Фракционная перегонка — это метод разделения, основанный на разнице плотностей.",
        "ar": "التقطير التجزيئي هو تقنية فصل تعتمد على اختلاف الكثافة.",
        "zh": "分馏是一种基于密度差的分离技术。",
        "ku": "Distîlasyona fraksîyonî teknîkek veqetandinê ye ku li ser bingeha ciyawaziya dendikê ye."
      }
    },
    {
      "id": "u08-f09",
      "fact": {
        "tr": "Ayırma hunisi, özkütleleri farklı birbiri içinde çözünmeyen sıvı-sıvı heterojen karışımları ayırır (örn. zeytinyağı-su).",
        "en": "The separatory funnel separates insoluble liquid-liquid heterogeneous mixtures with different density (e.g. olive oil-water).",
        "de": "Der Scheidetrichter trennt unlösliche flüssig-flüssig-heterogene Gemische unterschiedlicher Dichte (z. B. Olivenöl-Wasser).",
        "fr": "L'entonnoir de séparation sépare les mélanges hétérogènes liquide-liquide insolubles de différentes densités (par exemple huile d'olive-eau).",
        "ru": "Делительная воронка разделяет нерастворимые гетерогенные смеси жидкость-жидкость различной плотности (например, оливковое масло-вода).",
        "ar": "يفصل قمع الفصل المخاليط غير المتجانسة السائلة غير القابلة للذوبان ذات الكثافة المختلفة (مثل زيت الزيتون والماء).",
        "zh": "分液漏斗分离不同密度的不溶性液-液非均质混合物（例如橄榄油-水）。",
        "ku": "Hunîya veqetandinê tevliheviyên heterojen ên şil-şil ên ku di hev de nahelin û dendikên wan cuda ne ji hev vediqetîne (mînak rûnê zeytûnê-av)."
      },
      "trap": {
        "tr": "Ayırma hunisi kaynama noktaları farklı homojen karışımları ayırır.",
        "en": "The separatory funnel separates homogeneous mixtures with different boiling points.",
        "de": "Der Scheidetrichter trennt homogene Gemische mit unterschiedlichen Siedepunkten.",
        "fr": "L'entonnoir séparateur sépare des mélanges homogènes avec différents points d'ébullition.",
        "ru": "Делительная воронка разделяет однородные смеси с разной температурой кипения.",
        "ar": "يقوم القمع الفاصل بفصل المخاليط المتجانسة ذات نقاط غليان مختلفة.",
        "zh": "分液漏斗分离具有不同沸点的均匀混合物。",
        "ku": "Hunîya veqetandinê tevliheviyên homojen ên bi xalên kelandinê yên cihêreng vediqetîne."
      }
    },
    {
      "id": "u08-f10",
      "fact": {
        "tr": "Flotasyon (yüzdürme), yoğunluğu sıvıdan küçük olan katı taneciklerin yüzeye çıkarılarak toplanmasıdır (madencilikte sülfürlü cevherler).",
        "en": "Flotation is the collection of solid particles, whose density is less than the liquid, by bringing them to the surface (sulfide ores in mining).",
        "de": "Bei der Flotation werden feste Partikel, deren Dichte geringer ist als die der Flüssigkeit, an die Oberfläche gebracht (Sulfiderze im Bergbau).",
        "fr": "La flottation est la collecte de particules solides, dont la densité est inférieure à celle du liquide, en les ramenant à la surface (minerais sulfurés en exploitation minière).",
        "ru": "Флотация — сбор твердых частиц, плотность которых меньше плотности жидкости, путем выноса их на поверхность (сульфидные руды в горнодобывающей промышленности).",
        "ar": "التعويم هو تجميع الجزيئات الصلبة التي تقل كثافتها عن السائل عن طريق رفعها إلى السطح (خامات الكبريتيد في التعدين).",
        "zh": "浮选是通过将密度小于液体的固体颗粒带到表面（采矿中的硫化矿石）来收集它们。",
        "ku": "Flotasyon komkirina keriyên hişk e, ku tîraniya wan ji şilê kêmtir e, bi anîna wan li ser rûyê erdê (di madenê de kanên sulfîdî)."
      },
      "trap": {
        "tr": "Flotasyon mıknatıs yardımıyla demir ayırma işlemidir.",
        "en": "Flotation is the process of separating iron with the help of a magnet.",
        "de": "Bei der Flotation wird Eisen mit Hilfe eines Magneten abgetrennt.",
        "fr": "La flottation est le processus de séparation du fer à l'aide d'un aimant.",
        "ru": "Флотация – это процесс отделения железа с помощью магнита.",
        "ar": "التعويم هو عملية فصل الحديد بمساعدة المغناطيس.",
        "zh": "浮选是借助磁铁分离铁的过程。",
        "ku": "Flotasyon pêvajoya veqetandina hesin bi alîkariya magnetekê ye."
      }
    },
    {
      "id": "u08-f11",
      "fact": {
        "tr": "Ekstraksiyon (özütleme), karışımdaki bir bileşenin uygun bir çözücü yardımıyla çekilip ayrılmasıdır (çay demleme, şeker pancarından şeker).",
        "en": "Extraction is the separation of a component from a mixture with the help of a suitable solvent (tea brewing, sugar from sugar beets).",
        "de": "Unter Extraktion versteht man die Abtrennung einer Komponente aus einem Gemisch mit Hilfe eines geeigneten Lösungsmittels (Teeaufguss, Zucker aus Zuckerrüben).",
        "fr": "L'extraction est la séparation d'un composant d'un mélange à l'aide d'un solvant approprié (infusion de thé, sucre de betterave sucrière).",
        "ru": "Экстракция – это отделение компонента от смеси с помощью подходящего растворителя (чайной заварки, сахара из сахарной свеклы).",
        "ar": "الاستخلاص هو فصل أحد المكونات عن الخليط بمساعدة مذيب مناسب (تخمير الشاي، السكر من بنجر السكر).",
        "zh": "萃取是借助合适的溶剂（泡茶、甜菜中的糖）从混合物中分离出一种成分。",
        "ku": "Derxistin veqetandina hêmanek ji tevlêbûnekê bi alîkariya çareserkerek maqûl (çêkirina çayê, şekirê ji bexçeyên şekir) ye."
      },
      "trap": {
        "tr": "Özütleme tanecik boyutu farkına dayalı eleme yöntemidir.",
        "en": "Extraction is a screening method based on particle size difference.",
        "de": "Die Extraktion ist eine Siebmethode, die auf Partikelgrößenunterschieden basiert.",
        "fr": "L'extraction est une méthode de criblage basée sur la différence de taille des particules.",
        "ru": "Экстракция — это метод отбора, основанный на разнице в размерах частиц.",
        "ar": "الاستخراج هو طريقة فحص تعتمد على اختلاف حجم الجسيمات.",
        "zh": "萃取是一种基于粒度差异的筛选方法。",
        "ku": "Derxistin rêbazek vekolînek e ku li ser bingeha cûdahiya mezinahiya parçikê ye."
      }
    },
    {
      "id": "u08-f12",
      "fact": {
        "tr": "Diyaliz, küçük iyon ve moleküllerin yarı geçirgen zardan geçirilerek kolloidal boyutlu taneciklerden ayrılmasıdır (böbrek hastalarında kan temizliği).",
        "en": "Dialysis is the separation of small ions and molecules from colloidal-sized particles by passing them through a semi-permeable membrane (blood cleansing in kidney patients).",
        "de": "Dialyse ist die Abtrennung kleiner Ionen und Moleküle von kolloidalen Teilchen, indem sie durch eine semipermeable Membran hindurchtreten (Blutreinigung bei Nierenpatienten).",
        "fr": "La dialyse est la séparation des petits ions et molécules des particules de taille colloïdale, qui passent à travers une membrane semi-perméable (épuration du sang chez les insuffisants rénaux).",
        "ru": "Диализ — это отделение малых ионов и молекул от частиц коллоидного размера путём их прохождения через полупроницаемую мембрану (очистка крови у почечных больных).",
        "ar": "الديلزة هي فصل الأيونات والجزيئات الصغيرة عن الجسيمات الغروية الحجم بتمريرها عبر غشاء شبه منفذ (تنقية الدم لدى مرضى الكلى).",
        "zh": "透析是让小的离子和分子透过半透膜，从而与胶体大小的粒子分离（肾病患者的血液净化）。",
        "ku": "Dialîz veqetandina îyon û molekulên biçûk ji perçeyên bi mezinahiya koloîdal e, bi derbaskirina wan di parzûneke nîv-derbasbar re (paqijkirina xwînê di nexweşên gurçikan de)."
      },
      "trap": {
        "tr": "Diyaliz santrifüj ile çöktürme işlemidir.",
        "en": "Dialysis is a centrifugal precipitation process.",
        "de": "Bei der Dialyse handelt es sich um ein zentrifugales Fällungsverfahren.",
        "fr": "La dialyse est un processus de précipitation centrifuge.",
        "ru": "Диализ – это процесс осаждения центрифугированием.",
        "ar": "الديلزة عملية ترسيب بالطرد المركزي.",
        "zh": "透析是一种离心沉淀过程。",
        "ku": "Dialîz pêvajoyeke niştandinê bi santrîfûjê ye."
      }
    },
    {
      "id": "u08-f13",
      "fact": {
        "tr": "Çözeltiye su eklenirse (seyreltme) derişim azalır; formül C1m1 = C2m2'dir.",
        "en": "If water is added to the solution (dilution), the concentration decreases; The formula is C1m1 = C2m2.",
        "de": "Wird der Lösung Wasser zugesetzt (Verdünnung), sinkt die Konzentration; Die Formel lautet C1m1 = C2m2.",
        "fr": "Si de l'eau est ajoutée à la solution (dilution), la concentration diminue ; La formule est C1m1 = C2m2.",
        "ru": "Если к раствору добавляют воду (разбавление), концентрация снижается; Формула: C1m1 = C2m2.",
        "ar": "إذا تمت إضافة الماء إلى المحلول (التخفيف)، ينخفض ​​التركيز؛ الصيغة هي C1m1 = C2m2.",
        "zh": "如果向溶液中添加水（稀释），浓度会降低；公式为C1m1 = C2m2。",
        "ku": "Ger av li çareseriyê were zêdekirin (seyrelandin), derîşî kêm dibe; formula C1m1 = C2m2 ye."
      },
      "trap": {
        "tr": "Su eklendiğinde çözünen madde kütlesi de artar.",
        "en": "When water is added, the mass of solute also increases.",
        "de": "Bei Zugabe von Wasser erhöht sich auch die Masse des gelösten Stoffes.",
        "fr": "Lorsque de l’eau est ajoutée, la masse de soluté augmente également.",
        "ru": "При добавлении воды масса растворенного вещества также увеличивается.",
        "ar": "عند إضافة الماء، تزداد كتلة المذاب أيضًا.",
        "zh": "当添加水时，溶质的质量也会增加。",
        "ku": "Dema ku av lê tê zêdekirin, girseya madeya helyayî jî zêde dibe."
      }
    },
    {
      "id": "u08-f14",
      "fact": {
        "tr": "\"Benzer benzeri çözer\" kuralı: Polar maddeler polar çözücülerde, apolar maddeler apolar çözücülerde iyi çözünür.",
        "en": "\"Like dissolves like\" rule: Polar substances dissolve well in polar solvents, and nonpolar substances dissolve well in nonpolar solvents.",
        "de": "„Gleiches löst Gleiches auf“-Regel: Polare Stoffe lösen sich gut in polaren Lösungsmitteln, unpolare Stoffe lösen sich gut in unpolaren Lösungsmitteln.",
        "fr": "Règle « Le semblable se dissout comme » : les substances polaires se dissolvent bien dans les solvants polaires et les substances non polaires se dissolvent bien dans les solvants non polaires.",
        "ru": "Правило «Подобное растворяется в подобном»: полярные вещества хорошо растворяются в полярных растворителях, а неполярные вещества хорошо растворяются в неполярных растворителях.",
        "ar": "قاعدة \"المثل يذوب مثل\": المواد القطبية تذوب جيدًا في المذيبات القطبية، والمواد غير القطبية تذوب جيدًا في المذيبات غير القطبية.",
        "zh": "“相似相溶”法则：极性物质在极性溶剂中溶解良好，非极性物质在非极性溶剂中溶解良好。",
        "ku": "Qaydeya \"Wekî mîna xwe dihelîne\": Madeyên polar di halên polar de baş dihelin, û madeyên nepolar jî di halên nepolar de baş dihelin."
      },
      "trap": {
        "tr": "Apolar yağ lekesi polar suyla kolayca çözünür.",
        "en": "Non-polar oil stain dissolves easily with polar water.",
        "de": "Unpolare Ölflecken lösen sich leicht mit polarem Wasser.",
        "fr": "La tache d'huile non polaire se dissout facilement avec de l'eau polaire.",
        "ru": "Неполярное масляное пятно легко растворяется полярной водой.",
        "ar": "تذوب وصمة الزيت غير القطبية بسهولة بالماء القطبي.",
        "zh": "非极性油污很容易被极性水溶解。",
        "ku": "Lekeya rûnê ne-polar bi ava polar bi hêsanî dihele."
      }
    },
    {
      "id": "u08-f15",
      "fact": {
        "tr": "Tuzlu suyun kaynamaya başlama sıcaklığı saf sudan yüksektir ve kaynama süresince doymamışken sıcaklık artmaya devam eder.",
        "en": "The boiling temperature of salt water is higher than pure water, and the temperature continues to increase during boiling while it is not saturated.",
        "de": "Die Siedetemperatur von Salzwasser ist höher als die von reinem Wasser und die Temperatur steigt während des Kochens weiter an, solange es nicht gesättigt ist.",
        "fr": "La température d’ébullition de l’eau salée est supérieure à celle de l’eau pure et la température continue d’augmenter pendant l’ébullition tant qu’elle n’est pas saturée.",
        "ru": "Температура кипения соленой воды выше, чем у чистой воды, и температура продолжает повышаться во время кипения, пока она не насыщена.",
        "ar": "درجة حرارة غليان الماء المالح أعلى من الماء النقي، وتستمر درجة الحرارة في الارتفاع أثناء الغليان وهو غير مشبع.",
        "zh": "盐水的沸腾温度比纯水高，并且在沸腾过程中温度不断升高，但尚未饱和。",
        "ku": "Germahiya kelandinê ya ava şor ji ava paqij bilindtir e û di dema kelandinê de dema ku têr nebe germahî zêde dibe."
      },
      "trap": {
        "tr": "Tuzlu su kaynarken sıcaklığı baştan itibaren sabit kalır.",
        "en": "While salt water boils, its temperature remains constant from the beginning.",
        "de": "Während Salzwasser kocht, bleibt seine Temperatur von Anfang an konstant.",
        "fr": "Pendant que l’eau salée bout, sa température reste constante depuis le début.",
        "ru": "Пока соленая вода кипит, ее температура с самого начала остается постоянной.",
        "ar": "فبينما يغلي الماء المالح، تظل درجة حرارته ثابتة منذ البداية.",
        "zh": "当盐水沸腾时，其温度从一开始就保持恒定。",
        "ku": "Dema ava şor dikele, germahiya wê ji destpêkê ve sabit dimîne."
      }
    },
    {
      "id": "u08-f16",
      "fact": {
        "tr": "Doygun çözeltiye aynı sıcaklıkta bir miktar daha çözünen eklenirse çözünmeden dipte çöker ve derişim değişmez.",
        "en": "If more solute is added to the saturated solution at the same temperature, it will precipitate to the bottom without dissolving and the concentration will not change.",
        "de": "Wenn der gesättigten Lösung bei gleicher Temperatur mehr gelöster Stoff zugesetzt wird, fällt dieser am Boden aus, ohne sich aufzulösen, und die Konzentration ändert sich nicht.",
        "fr": "Si davantage de soluté est ajouté à la solution saturée à la même température, il précipitera au fond sans se dissoudre et la concentration ne changera pas.",
        "ru": "Если к насыщенному раствору при той же температуре добавить больше растворенного вещества, оно выпадет в осадок на дно, не растворяясь, и концентрация не изменится.",
        "ar": "إذا تمت إضافة المزيد من المذاب إلى المحلول المشبع عند نفس درجة الحرارة، فسوف يترسب إلى القاع دون أن يذوب ولن يتغير التركيز.",
        "zh": "如果在相同温度下向饱和溶液中加入更多的溶质，它会沉淀到底部而不溶解，浓度不会改变。",
        "ku": "Ger di heman germahiyê de zêdetir maddeya çareserkirî li çareseriya têrbûyî were zêdekirin, ew ê bêyî ku bihele ber bi binî ve biherike û konsantre wê neguhere."
      },
      "trap": {
        "tr": "Doygun çözeltiye tuz eklenirse çözelti daha derişik hale gelir.",
        "en": "If salt is added to a saturated solution, the solution becomes more concentrated.",
        "de": "Wenn einer gesättigten Lösung Salz zugesetzt wird, wird die Lösung konzentrierter.",
        "fr": "Si du sel est ajouté à une solution saturée, la solution devient plus concentrée.",
        "ru": "Если к насыщенному раствору добавить соль, раствор станет более концентрированным.",
        "ar": "إذا أضيف الملح إلى محلول مشبع، يصبح المحلول أكثر تركيزا.",
        "zh": "如果将盐添加到饱和溶液中，溶液会变得更加浓缩。",
        "ku": "Heke xwê li çareseriyeke têrbûyî were zêdekirin, çareserî bêtir derîşîk dibe."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u08-c01",
      "conceptA": {
        "tr": "Basit Damıtma",
        "en": "Simple Distillation",
        "de": "Einfache Destillation",
        "fr": "Distillation simple",
        "ru": "Простая дистилляция",
        "ar": "التقطير البسيط",
        "zh": "简单蒸馏",
        "ku": "Distîlasyona sade"
      },
      "conceptB": {
        "tr": "Ayrımsal Damıtma",
        "en": "Fractional Distillation",
        "de": "Fraktionierte Destillation",
        "fr": "Distillation fractionnée",
        "ru": "Фракционная перегонка",
        "ar": "التقطير التجزيئي",
        "zh": "分馏",
        "ku": "Distîlasyona fraksîyonî"
      },
      "distinction": {
        "tr": "Basit damıtma katı-sıvı çözeltilerde sıvıyı buharlaştırıp yoğuşturur; ayrımsal damıtma kaynama noktaları yakın sıvı-sıvı homojen karışımları ayırır.",
        "en": "Simple distillation evaporates and condenses the liquid in solid-liquid solutions; Fractional distillation separates liquid-liquid homogeneous mixtures with close boiling points.",
        "de": "Durch einfache Destillation wird die Flüssigkeit in Fest-Flüssig-Lösungen verdampft und kondensiert; Die fraktionierte Destillation trennt flüssig-flüssig homogene Gemische mit nahe beieinander liegenden Siedepunkten.",
        "fr": "Une simple distillation évapore et condense le liquide en solutions solide-liquide ; La distillation fractionnée sépare des mélanges homogènes liquide-liquide avec des points d'ébullition proches.",
        "ru": "Простая перегонка испаряет и конденсирует жидкость в твердожидкие растворы; Фракционная перегонка разделяет жидкость-жидкость однородных смесей с близкими температурами кипения.",
        "ar": "التقطير البسيط يتبخر ويكثف السائل في المحاليل الصلبة والسائلة؛ يفصل التقطير التجزيئي المخاليط المتجانسة من سائل إلى سائل ذات نقاط غليان متقاربة.",
        "zh": "简单蒸馏将固液溶液中的液体蒸发并冷凝；分馏可分离沸点接近的液-液均匀混合物。",
        "ku": "Distilasyona hêsan şilê di çareseriyên zirav-avî de diherikîne û dişewitîne; Distîlasyona fraksîyonel hevokên homojen ên şil-avî yên bi xalên kelandinê yên nêzîk ji hev vediqetîne."
      }
    },
    {
      "id": "u08-c02",
      "conceptA": {
        "tr": "Kolloit",
        "en": "colloid",
        "de": "Kolloid",
        "fr": "colloïde",
        "ru": "коллоидный",
        "ar": "الغروانية",
        "zh": "胶体",
        "ku": "koloid"
      },
      "conceptB": {
        "tr": "Çözelti",
        "en": "Solution",
        "de": "Lösung",
        "fr": "Solution",
        "ru": "Раствор",
        "ar": "المحلول",
        "zh": "溶液",
        "ku": "Çareserî"
      },
      "distinction": {
        "tr": "Çözeltide tanecik boyutu 1 nm'den küçük homojendir; kolloitte 1-1000 nm arası heterojendir ve Tyndall etkisi gösterir.",
        "en": "In solution, the particle size is homogeneous, less than 1 nm; It is heterogeneous between 1 and 1000 nm in the colloid and shows the Tyndall effect.",
        "de": "In Lösung ist die Partikelgröße homogen und beträgt weniger als 1 nm; Es ist im Kolloid zwischen 1 und 1000 nm heterogen und zeigt den Tyndall-Effekt.",
        "fr": "En solution, la taille des particules est homogène, inférieure à 1 nm ; Il est hétérogène entre 1 et 1000 nm dans le colloïde et montre l'effet Tyndall.",
        "ru": "В растворе размер частиц однородный, менее 1 нм; Он неоднороден в диапазоне от 1 до 1000 нм в коллоиде и демонстрирует эффект Тиндаля.",
        "ar": "في المحلول، يكون حجم الجسيمات متجانسًا، أقل من 1 نانومتر؛ وهو غير متجانس بين 1 و 1000 نانومتر في المادة الغروية ويظهر تأثير تيندال.",
        "zh": "在溶液中，粒径均匀，小于1纳米；它在胶体中 1 至 1000 nm 之间是不均匀的，并显示廷德尔效应。",
        "ku": "Di çareseriyê de, mezinahiya perçeyê homojen e, ji 1 nm kêmtir e; Di koloidê de di navbera 1 û 1000 nm de heterojen e û bandora Tyndall nîşan dide."
      }
    },
    {
      "id": "u08-c03",
      "conceptA": {
        "tr": "Süspansiyon",
        "en": "Suspension",
        "de": "Suspension",
        "fr": "suspension",
        "ru": "Суспензия",
        "ar": "المعلق",
        "zh": "悬浮液",
        "ku": "Süspansiyon"
      },
      "conceptB": {
        "tr": "Emülsiyon",
        "en": "Emulsion",
        "de": "Emulsion",
        "fr": "émulsion",
        "ru": "эмульсия",
        "ar": "مستحلب",
        "zh": "乳液",
        "ku": "Emulsiyon"
      },
      "distinction": {
        "tr": "Süspansiyon katı-sıvı heterojen karışımdır (ör. ayran); emülsiyon sıvı-sıvı heterojen karışımdır (ör. zeytinyağı-su).",
        "en": "Suspension is a solid-liquid heterogeneous mixture (e.g. buttermilk); An emulsion is a liquid-liquid heterogeneous mixture (e.g. olive oil-water).",
        "de": "Suspension ist eine heterogene Fest-Flüssigkeits-Mischung (z. B. Buttermilch); Eine Emulsion ist ein heterogenes Flüssig-Flüssigkeits-Gemisch (z. B. Olivenöl-Wasser).",
        "fr": "La suspension est un mélange hétérogène solide-liquide (par exemple du babeurre) ; Une émulsion est un mélange hétérogène liquide-liquide (par exemple huile d'olive-eau).",
        "ru": "Суспензия представляет собой твердожидкостную гетерогенную смесь (например, пахта); Эмульсия представляет собой гетерогенную смесь жидкость-жидкость (например, оливковое масло-вода).",
        "ar": "المعلق عبارة عن خليط غير متجانس صلب وسائل (مثل اللبن)؛ المستحلب عبارة عن خليط سائل غير متجانس (مثل زيت الزيتون والماء).",
        "zh": "悬浮液是固液非均质混合物（例如酪乳）；乳液是液-液非均质混合物（例如橄榄油-水）。",
        "ku": "Süspansiyon tevliheviyeke heterojen a hişk-şil e (mînak dew); emulsiyon tevliheviyeke heterojen a şil-şil e (mînak rûnê zeytûnê-av)."
      }
    },
    {
      "id": "u08-c04",
      "conceptA": {
        "tr": "Süzme",
        "en": "Filtration",
        "de": "Filtration",
        "fr": "Filtration",
        "ru": "Фильтрование",
        "ar": "الترشيح",
        "zh": "过滤",
        "ku": "Parzûnkirin"
      },
      "conceptB": {
        "tr": "Diyaliz",
        "en": "Dialysis",
        "de": "Dialyse",
        "fr": "Dialyse",
        "ru": "Диализ",
        "ar": "الديلزة",
        "zh": "透析",
        "ku": "Dialîz"
      },
      "distinction": {
        "tr": "Süzme, katı tanecikleri süzgeç kâğıdında tutarak heterojen katı-sıvı karışımları ayırır; diyaliz ise küçük iyon ve molekülleri yarı geçirgen zardan geçirerek kolloidal taneciklerden ayırır.",
        "en": "Filtration separates heterogeneous solid-liquid mixtures by retaining the solid particles on filter paper; dialysis separates small ions and molecules from colloidal particles by passing them through a semi-permeable membrane.",
        "de": "Die Filtration trennt heterogene Fest-flüssig-Gemische, indem die Feststoffteilchen im Filterpapier zurückgehalten werden; die Dialyse trennt kleine Ionen und Moleküle von kolloidalen Teilchen, indem sie diese durch eine semipermeable Membran treten lässt.",
        "fr": "La filtration sépare les mélanges hétérogènes solide-liquide en retenant les particules solides sur le papier filtre ; la dialyse sépare les petits ions et molécules des particules colloïdales en les faisant passer à travers une membrane semi-perméable.",
        "ru": "Фильтрование разделяет гетерогенные смеси твёрдое-жидкость, задерживая твёрдые частицы на фильтровальной бумаге; диализ отделяет малые ионы и молекулы от коллоидных частиц, пропуская их через полупроницаемую мембрану.",
        "ar": "يفصل الترشيح المخاليط غير المتجانسة الصلبة-السائلة باحتجاز الجسيمات الصلبة على ورق الترشيح؛ وتفصل الديلزة الأيونات والجزيئات الصغيرة عن الجسيمات الغروية بتمريرها عبر غشاء شبه منفذ.",
        "zh": "过滤是用滤纸截留固体颗粒，分离非均相的固-液混合物；透析是让小的离子和分子透过半透膜，使其与胶体粒子分离。",
        "ku": "Parzûnkirin perçeyên hişk li ser kaxeza parzûnê digire û tevliheviyên heterojen ên hişk-şil ji hev vediqetîne; dialîz îyon û molekulên biçûk di parzûneke nîv-derbasbar re derbas dike û wan ji perçeyên koloîdal vediqetîne."
      }
    },
    {
      "id": "u08-c05",
      "conceptA": {
        "tr": "Ayırma Hunisi ile Ayırma",
        "en": "Separation with Separatory Funnel",
        "de": "Trennung mit Scheidetrichter",
        "fr": "Séparation avec entonnoir séparateur",
        "ru": "Разделение с помощью делительной воронки",
        "ar": "الفصل مع قمع الفصل",
        "zh": "用分液漏斗分离",
        "ku": "Veqetandin bi hunîya veqetandinê"
      },
      "conceptB": {
        "tr": "Yüzdürme (Flotasyon)",
        "en": "Flotation",
        "de": "Flotation",
        "fr": "Flottation",
        "ru": "Флотация",
        "ar": "التعويم",
        "zh": "浮选",
        "ku": "Flotation"
      },
      "distinction": {
        "tr": "Ayırma hunisi yoğunlukları farklı karışmayan sıvıları ayırır; flotasyon katı-katı karışımlarında yoğunluk farkıyla cevher zenginleştirmedir.",
        "en": "The separatory funnel separates immiscible liquids of different densities; Flotation is the enrichment of ore by density difference in solid-solid mixtures.",
        "de": "Der Scheidetrichter trennt nicht mischbare Flüssigkeiten unterschiedlicher Dichte; Unter Flotation versteht man die Anreicherung von Erzen durch Dichteunterschiede in Feststoff-Feststoff-Gemischen.",
        "fr": "L'entonnoir séparateur sépare les liquides non miscibles de différentes densités ; La flottation est l'enrichissement du minerai par différence de densité dans des mélanges solide-solide.",
        "ru": "Делительная воронка разделяет несмешивающиеся жидкости различной плотности; Флотация – это обогащение руды за счет разницы плотностей в смесях твердого и твердого.",
        "ar": "يقوم قمع الفصل بفصل السوائل غير القابلة للامتزاج ذات الكثافات المختلفة؛ التعويم هو إثراء الخام عن طريق اختلاف الكثافة في المخاليط الصلبة والصلبة.",
        "zh": "分液漏斗分离不同密度的互不相溶的液体；浮选是利用固-固混合物中的密度差来富集矿石。",
        "ku": "Hunîya veqetandinê şilekên nelihevkirî yên tîrêjên cihêreng ji hev vediqetîne; Flotasyon dewlemendkirina kanzayê ji hêla cûdahiya tîrêjê ve di tevliheviyên hişk-hişk de ye."
      }
    },
    {
      "id": "u08-c06",
      "conceptA": {
        "tr": "Kütlece Yüzde Derişim",
        "en": "Percent Concentration by Mass",
        "de": "Prozentuale Massenkonzentration",
        "fr": "Pourcentage de concentration en masse",
        "ru": "Процентная концентрация по массе",
        "ar": "تركيز النسبة المئوية بالكتلة",
        "zh": "质量百分比浓度",
        "ku": "Rêjeya girseyî ya ji sedî"
      },
      "conceptB": {
        "tr": "Hacimce Yüzde Derişim",
        "en": "Percent Concentration by Volume",
        "de": "Prozentuale Konzentration nach Volumen",
        "fr": "Pourcentage de concentration par volume",
        "ru": "Процентная концентрация по объему",
        "ar": "تركيز النسبة المئوية حسب الحجم",
        "zh": "体积百分比浓度",
        "ku": "Rêjeya qebareyî ya ji sedî"
      },
      "distinction": {
        "tr": "Kütlece yüzde, çözünen kütlesinin çözelti kütlesine oranıdır (x100); hacimce yüzde, sıvı çözünen hacminin toplam hacme oranıdır (x100).",
        "en": "Percent by mass is the ratio of solute mass to solution mass (x100); percent by volume is the ratio of liquid solute volume to total volume (x100).",
        "de": "Massenprozent ist das Verhältnis der Masse des gelösten Stoffes zur Masse der Lösung (x100); Volumenprozent ist das Verhältnis des Volumens des flüssigen gelösten Stoffes zum Gesamtvolumen (x100).",
        "fr": "Le pourcentage massique est le rapport de la masse de soluté à la masse de solution (x100) ; le pourcentage volumique est le rapport du volume de soluté liquide au volume total (x100).",
        "ru": "Массовая доля в процентах — отношение массы растворённого вещества к массе раствора (x100); объёмная доля в процентах — отношение объёма жидкого растворённого вещества к общему объёму (x100).",
        "ar": "النسبة المئوية الكتلية هي نسبة كتلة المذاب إلى كتلة المحلول (x100)؛ والنسبة المئوية الحجمية هي نسبة حجم المذاب السائل إلى الحجم الكلي (x100).",
        "zh": "质量百分比浓度是溶质质量与溶液质量之比（x100）；体积百分比浓度是液态溶质体积与总体积之比（x100）。",
        "ku": "Rêjeya girseyî ya ji sedî rêjeya girseya madeya helyayî li girseya çareseriyê ye (x100); rêjeya qebareyî ya ji sedî rêjeya qebareya madeya helyayî ya şil li qebareya giştî ye (x100)."
      }
    },
    {
      "id": "u08-c07",
      "conceptA": {
        "tr": "Doymuş Çözelti",
        "en": "Saturated Solution",
        "de": "Gesättigte Lösung",
        "fr": "Solution saturée",
        "ru": "Насыщенный раствор",
        "ar": "محلول مشبع",
        "zh": "饱和溶液",
        "ku": "Çareseriya Têrbûyî"
      },
      "conceptB": {
        "tr": "Aşırı Doymuş Çözelti",
        "en": "Supersaturated Solution",
        "de": "Übersättigte Lösung",
        "fr": "Solution sursaturée",
        "ru": "Перенасыщенный раствор",
        "ar": "محلول مفرط التشبع",
        "zh": "过饱和溶液",
        "ku": "Çareseriya Supersaturated"
      },
      "distinction": {
        "tr": "Doymuş çözelti çözebileceği maksimum maddeyi çözmüştür; aşırı doymuş çözelti sıcaklıkla geçici olarak fazlasını çözmüş kararsız sistemdir.",
        "en": "A saturated solution has dissolved the maximum amount of substance it can dissolve; A supersaturated solution is an unstable system that has temporarily dissolved excess with temperature.",
        "de": "Eine gesättigte Lösung hat die maximale Stoffmenge gelöst, die sie lösen kann; Eine übersättigte Lösung ist ein instabiles System, das mit der Temperatur vorübergehend Überschüsse auflöst.",
        "fr": "Une solution saturée a dissous la quantité maximale de substance qu’elle peut dissoudre ; Une solution sursaturée est un système instable qui a temporairement dissous l’excès avec la température.",
        "ru": "Насыщенный раствор растворил максимальное количество вещества, которое он может растворить; Пересыщенный раствор — это нестабильная система, избыток которой временно растворяется при повышении температуры.",
        "ar": "لقد أذاب المحلول المشبع أكبر قدر ممكن من المادة التي يمكنه إذابتها؛ المحلول المفرط هو نظام غير مستقر يذوب الفائض مؤقتًا مع درجة الحرارة.",
        "zh": "饱和溶液已溶解了其所能溶解的最大量的物质；过饱和溶液是一种不稳定的系统，会随着温度的升高而暂时溶解过量的溶液。",
        "ku": "Çareseriya têrbûyî herî zêde mîqdara maddeya ku ew dikare bihelîne, hilweşandiye; Çareseriya pir têrbûyî pergalek bêîstîqrar e ku bi germahiyê re demkî zêde hilweşandiye."
      }
    },
    {
      "id": "u08-c08",
      "conceptA": {
        "tr": "Seyreltme",
        "en": "Dilution",
        "de": "Verdünnen",
        "fr": "Dilution",
        "ru": "Разбавление",
        "ar": "التخفيف",
        "zh": "稀释",
        "ku": "Seyrelandin"
      },
      "conceptB": {
        "tr": "Deriştirme",
        "en": "Concentrating",
        "de": "Aufkonzentrieren",
        "fr": "Concentration",
        "ru": "Концентрирование",
        "ar": "التركيز",
        "zh": "浓缩",
        "ku": "Tîrkirin"
      },
      "distinction": {
        "tr": "Seyreltmede çözeltiye çözücü eklenir, çözünen kütlesi değişmez ve derişim azalır; deriştirmede çözücü buharlaştırılır veya çözünen eklenir ve derişim artar.",
        "en": "In dilution, solvent is added, the mass of solute stays the same and the concentration decreases; in concentrating, solvent is evaporated or more solute is added and the concentration increases.",
        "de": "Beim Verdünnen wird Lösungsmittel zugegeben, die Masse des gelösten Stoffes bleibt gleich und die Konzentration sinkt; beim Aufkonzentrieren wird Lösungsmittel verdampft oder mehr gelöster Stoff zugegeben, und die Konzentration steigt.",
        "fr": "Lors d'une dilution, on ajoute du solvant : la masse de soluté reste la même et la concentration diminue ; pour concentrer, on évapore du solvant ou on ajoute du soluté, et la concentration augmente.",
        "ru": "При разбавлении добавляют растворитель, масса растворённого вещества не меняется, и концентрация уменьшается; при концентрировании растворитель выпаривают или добавляют растворённое вещество, и концентрация растёт.",
        "ar": "في التخفيف يُضاف المذيب فتبقى كتلة المذاب ثابتة ويقل التركيز؛ وفي التركيز يُبخَّر المذيب أو يُضاف مزيد من المذاب فيزداد التركيز.",
        "zh": "稀释是加入溶剂，溶质质量不变，浓度降低；浓缩是蒸发溶剂或加入更多溶质，浓度升高。",
        "ku": "Di seyrelandinê de helker tê zêdekirin, girseya madeya helyayî naguhere û derîşî kêm dibe; di tîrkirinê de helker tê hilmikandin an madeya helyayî tê zêdekirin û derîşî zêde dibe."
      }
    }
  ],
  "sequences": [
    {
      "id": "u08-s01",
      "title": {
        "tr": "Tuz-Kum-Su Karışımını Ayırma Adımları",
        "en": "Steps to Separate Salt-Sand-Water Mixture",
        "de": "Schritte zur Trennung des Salz-Sand-Wasser-Gemisches",
        "fr": "Étapes pour séparer le mélange sel-sable-eau",
        "ru": "Действия по разделению смеси соли, песка и воды",
        "ar": "خطوات فصل خليط الماء المالح والرمل",
        "zh": "分离盐-沙-水混合物的步骤",
        "ku": "Gavên Veqetandina Têkeliya Xwê-Sand-Av"
      },
      "steps": [
        {
          "tr": "Karışıma su eklenip tuz çözünür",
          "en": "Add water to the mixture and dissolve the salt.",
          "de": "Fügen Sie der Mischung Wasser hinzu und lösen Sie das Salz auf.",
          "fr": "Ajoutez de l'eau au mélange et dissolvez le sel.",
          "ru": "Добавьте в смесь воду и растворите соль.",
          "ar": "يضاف الماء إلى الخليط ويذوب الملح.",
          "zh": "向混合物中加水并溶解盐。",
          "ku": "Avê bixin nav têkelê û xwê bihelînin."
        },
        {
          "tr": "Süzme yapılarak kum ayrılır",
          "en": "Sand is separated by filtration",
          "de": "Sand wird durch Filtration abgetrennt",
          "fr": "Le sable est séparé par filtration",
          "ru": "Песок отделяется фильтрацией",
          "ar": "يتم فصل الرمال عن طريق الترشيح",
          "zh": "通过过滤分离沙子",
          "ku": "Qûm bi parzûnê tê veqetandin"
        },
        {
          "tr": "Süzüntü basit damıtmaya alınır",
          "en": "The filtrate is taken into simple distillation",
          "de": "Das Filtrat wird einer einfachen Destillation zugeführt",
          "fr": "Le filtrat est repris en distillation simple",
          "ru": "Фильтрат направляют на простую перегонку.",
          "ar": "يتم أخذ الترشيح في التقطير البسيط",
          "zh": "滤液进行简单蒸馏",
          "ku": "Parzûn di distilasyona hêsan de tê girtin"
        },
        {
          "tr": "Su buharlaştırılıp tuz kristalleri elde edilir",
          "en": "Water is evaporated and salt crystals are obtained.",
          "de": "Wasser wird verdampft und es entstehen Salzkristalle.",
          "fr": "L'eau est évaporée et des cristaux de sel sont obtenus.",
          "ru": "Воду испаряют и получают кристаллы соли.",
          "ar": "يتبخر الماء ويتم الحصول على بلورات الملح.",
          "zh": "蒸发水并获得盐晶体。",
          "ku": "Av tê hilmikandin û krîstalên xwê tên bidestxistin."
        }
      ]
    },
    {
      "id": "u08-s02",
      "title": {
        "tr": "Ayrımsal Damıtma Basamakları",
        "en": "Fractional Distillation Steps",
        "de": "Fraktionierte Destillationsschritte",
        "fr": "Étapes de distillation fractionnée",
        "ru": "Этапы фракционной перегонки",
        "ar": "خطوات التقطير التجزيئي",
        "zh": "分馏步骤",
        "ku": "Gavên Distilasyonê Fractional"
      },
      "steps": [
        {
          "tr": "Kaynama noktaları farklı homojen sıvı karışım ısıtılır",
          "en": "A homogeneous liquid mixture with different boiling points is heated.",
          "de": "Eine homogene Flüssigkeitsmischung mit unterschiedlichen Siedepunkten wird erhitzt.",
          "fr": "Un mélange liquide homogène avec différents points d'ébullition est chauffé.",
          "ru": "Нагревают однородную жидкую смесь с разными температурами кипения.",
          "ar": "يتم تسخين خليط سائل متجانس له نقاط غليان مختلفة.",
          "zh": "加热具有不同沸点的均匀液体混合物。",
          "ku": "Tevliheviyek şilek homojen bi xalên kelandinê yên cihêreng tê germ kirin."
        },
        {
          "tr": "Uçucu olan bileşen önce buharlaşır",
          "en": "The volatile component evaporates first",
          "de": "Der flüchtige Bestandteil verdunstet zunächst",
          "fr": "Le composant volatil s'évapore en premier",
          "ru": "Летучий компонент испаряется первым.",
          "ar": "يتبخر المكون المتطاير أولاً",
          "zh": "挥发性成分首先蒸发",
          "ku": "Pêkhateya hêsan-buharbûyî pêşî dibe buhar"
        },
        {
          "tr": "Fraksiyon kolonunda buhar ayrışır",
          "en": "Vapor separates in the fractionation column",
          "de": "In der Fraktionierungskolonne trennt sich Dampf",
          "fr": "La vapeur se sépare dans la colonne de fractionnement",
          "ru": "Пар отделяется в ректификационной колонне",
          "ar": "ينفصل البخار في عمود التجزئة",
          "zh": "蒸气在分馏塔中分离",
          "ku": "Vapor di stûna perçebûnê de ji hev vediqete"
        },
        {
          "tr": "Soğutucuda yoğuşarak ayrı toplama kabına akar",
          "en": "It condenses in the cooler and flows into a separate collection container.",
          "de": "Es kondensiert im Kühler und fließt in einen separaten Auffangbehälter.",
          "fr": "Il se condense dans le refroidisseur et s'écoule dans un récipient de collecte séparé.",
          "ru": "Он конденсируется в охладителе и стекает в отдельный сборный контейнер.",
          "ar": "يتكثف في المبرد ويتدفق إلى حاوية تجميع منفصلة.",
          "zh": "它在冷却器中冷凝并流入单独的收集容器中。",
          "ku": "Ew di sarincê de diqelişe û diherike nav konteynirek berhevkirinê ya cihê."
        }
      ]
    },
    {
      "id": "u08-s03",
      "title": {
        "tr": "Kütlece Yüzde Derişim Hazırlığı",
        "en": "Preparing a Solution of Given Mass Percent",
        "de": "Herstellung einer Lösung mit bestimmtem Massenprozent",
        "fr": "Préparation d'une solution de pourcentage massique donné",
        "ru": "Приготовление раствора с заданной массовой долей",
        "ar": "تحضير محلول بنسبة مئوية كتلية محددة",
        "zh": "配制一定质量百分比浓度的溶液",
        "ku": "Amadekirina çareseriyeke bi rêjeya girseyî ya ji sedî"
      },
      "steps": [
        {
          "tr": "Gereken çözünen madde kütlesi tartılır",
          "en": "Weigh the required mass of solute",
          "de": "Wiegen Sie die erforderliche Masse des gelösten Stoffes",
          "fr": "Peser la masse requise de soluté",
          "ru": "Взвесьте необходимую массу растворенного вещества",
          "ar": "وزن الكتلة المطلوبة من المذاب",
          "zh": "称量所需的溶质质量",
          "ku": "Girseya pêwîst a madeya helyayî tê kişandin"
        },
        {
          "tr": "Gereken çözücü su miktarı tartılır",
          "en": "The required amount of solvent water is weighed",
          "de": "Die benötigte Menge Lösungsmittel Wasser wird abgewogen",
          "fr": "La quantité requise d'eau de solvant est pesée",
          "ru": "Необходимое количество воды-растворителя отвешивается.",
          "ar": "يتم وزن الكمية المطلوبة من الماء المذيب",
          "zh": "称取所需溶剂水量",
          "ku": "Mîqdara pêwîst a ava helker tê kişandin"
        },
        {
          "tr": "Çözünen kütlesi toplam kütleye oranlanır",
          "en": "The mass of the solute is divided by the total mass",
          "de": "Die Masse des gelösten Stoffes wird durch die Gesamtmasse geteilt",
          "fr": "La masse du soluté est divisée par la masse totale",
          "ru": "Массу растворённого вещества делят на общую массу",
          "ar": "تُقسم كتلة المذاب على الكتلة الكلية",
          "zh": "用溶质质量除以总质量",
          "ku": "Girseya madeya helyayî li girseya giştî tê parvekirin"
        },
        {
          "tr": "Yüz ile çarpılarak kütlece yüzde belirlenir",
          "en": "The percentage by mass is determined by multiplying by one hundred.",
          "de": "Der Massenanteil wird durch Multiplikation mit einhundert ermittelt.",
          "fr": "Le pourcentage massique est déterminé en multipliant par cent.",
          "ru": "Процент по массе определяют путем умножения на сто.",
          "ar": "يتم تحديد النسبة المئوية للكتلة بضربها في مائة.",
          "zh": "质量百分比通过乘以一百来确定。",
          "ku": "Bi lêdana bi sed rêjeya girseyî ya ji sedî tê dîtin"
        }
      ]
    },
    {
      "id": "u08-s04",
      "title": {
        "tr": "Kristallendirme ile Ayırma",
        "en": "Separation by Crystallization",
        "de": "Trennung durch Kristallisation",
        "fr": "Séparation par cristallisation",
        "ru": "Разделение кристаллизацией",
        "ar": "الفصل عن طريق التبلور",
        "zh": "结晶分离",
        "ku": "Veqetandin bi Crystalization"
      },
      "steps": [
        {
          "tr": "Sıcak suda doymuş çözelti hazırlanır",
          "en": "A saturated solution is prepared in hot water",
          "de": "In heißem Wasser wird eine gesättigte Lösung hergestellt",
          "fr": "Une solution saturée est préparée dans de l'eau chaude",
          "ru": "Насыщенный раствор готовят в горячей воде.",
          "ar": "يتم تحضير محلول مشبع في الماء الساخن",
          "zh": "在热水中配制饱和溶液",
          "ku": "Di ava germ de çareseriyek têrbûyî tê amadekirin"
        },
        {
          "tr": "Çözelti yavaş yavaş soğumaya bırakılır",
          "en": "The solution is allowed to cool slowly",
          "de": "Man lässt die Lösung langsam abkühlen",
          "fr": "La solution est laissée refroidir lentement",
          "ru": "Раствору дают медленно остыть",
          "ar": "يُترك المحلول ليبرد ببطء",
          "zh": "让溶液缓慢冷却",
          "ku": "Dihêlin çareserî hêdî hêdî sar bibe"
        },
        {
          "tr": "Sıcaklık düştükçe çözünürlük azalır ve katı çöker",
          "en": "As the temperature decreases, the solubility decreases and the solid precipitates.",
          "de": "Mit sinkender Temperatur nimmt die Löslichkeit ab und der Feststoff fällt aus.",
          "fr": "À mesure que la température diminue, la solubilité diminue et le solide précipite.",
          "ru": "При понижении температуры растворимость снижается и твердое вещество выпадает в осадок.",
          "ar": "مع انخفاض درجة الحرارة، تنخفض قابلية الذوبان وتترسب المواد الصلبة.",
          "zh": "随着温度降低，溶解度降低，固体析出。",
          "ku": "Her ku germahî kêm dibe, helbûnî kêm dibe û madeya hişk dinişe"
        },
        {
          "tr": "Süzgeç kağıdından süzülerek saf kristaller alınır",
          "en": "Pure crystals are obtained by filtering through filter paper.",
          "de": "Durch Filtrieren durch Filterpapier werden reine Kristalle gewonnen.",
          "fr": "Les cristaux purs sont obtenus par filtration sur papier filtre.",
          "ru": "Чистые кристаллы получают фильтрованием через фильтровальную бумагу.",
          "ar": "يتم الحصول على بلورات نقية عن طريق الترشيح من خلال ورق الترشيح.",
          "zh": "通过滤纸过滤得到纯晶体。",
          "ku": "Krîstalên pak bi parzûna kaxezê parzûnê têne bidestxistin."
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u08-twin01",
      "stem": {
        "tr": "Kütlece %20'lik 200 gram tuzlu su çözeltisine 50 gram saf su eklendiğinde yeni çözelti kütlece yüzde kaçlık olur?",
        "en": "When 50 grams of pure water is added to 200 grams of 20% salt water solution by mass, what percentage by mass will the new solution be?",
        "de": "Wenn 50 Gramm reines Wasser zu 200 Gramm einer 20-prozentigen Salzwasserlösung hinzugefügt werden, wie viel Prozent der Masse beträgt die neue Lösung?",
        "fr": "Lorsque 50 grammes d’eau pure sont ajoutés à 200 grammes de solution d’eau salée à 20 % en masse, quel sera le pourcentage en masse de la nouvelle solution ?",
        "ru": "Какую массовую долю составит новый раствор, если к 200 граммам 20%-ного по массе раствора соленой воды добавить 50 граммов чистой воды?",
        "ar": "عند إضافة 50 جرامًا من الماء النقي إلى 200 جرام من محلول الماء المالح بنسبة 20% بالكتلة، ما النسبة المئوية بالكتلة للمحلول الجديد؟",
        "zh": "将50克纯水按质量分数加入200克20%的盐水溶液中，新溶液的质量百分比是多少？",
        "ku": "Dema ku 50 gram ava saf bi girseyê li 200 gram ava şor a %20 were zêdekirin, wê çareseriya nû ji sedî çend be?"
      },
      "options": [
        {
          "tr": "%16",
          "en": "16%",
          "de": "16 %",
          "fr": "16%",
          "ru": "16%",
          "ar": "16%",
          "zh": "16%",
          "ku": "%16"
        },
        {
          "tr": "%10",
          "en": "10%",
          "de": "10 %",
          "fr": "10%",
          "ru": "10%",
          "ar": "10%",
          "zh": "10%",
          "ku": "%10"
        },
        {
          "tr": "%15",
          "en": "15%",
          "de": "15 %",
          "fr": "15%",
          "ru": "15%",
          "ar": "15%",
          "zh": "15%",
          "ku": "%15"
        },
        {
          "tr": "%25",
          "en": "25%",
          "de": "25 %",
          "fr": "25%",
          "ru": "25%",
          "ar": "25%",
          "zh": "25%",
          "ku": "%25"
        },
        {
          "tr": "%12",
          "en": "12%",
          "de": "12 %",
          "fr": "12%",
          "ru": "12%",
          "ar": "12%",
          "zh": "12%",
          "ku": "%12"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Çözünen tuz = 200 * 0.20 = 40 gram. Yeni toplam kütle = 200 + 50 = 250 gram. Yeni yüzde = (40 / 250) * 100 = %16.",
        "en": "Dissolved salt = 200 * 0.20 = 40 grams. New total mass = 200 + 50 = 250 grams. New percentage = (40 / 250) * 100 = 16%.",
        "de": "Gelöstes Salz = 200 * 0,20 = 40 Gramm. Neue Gesamtmasse = 200 + 50 = 250 Gramm. Neuer Prozentsatz = (40 / 250) * 100 = 16 %.",
        "fr": "Sel dissous = 200 * 0,20 = 40 grammes. Nouvelle masse totale = 200 + 50 = 250 grammes. Nouveau pourcentage = (40 / 250) * 100 = 16 %.",
        "ru": "Растворенная соль = 200*0,20=40 грамм. Новая общая масса = 200 + 50 = 250 грамм. Новый процент = (40/250) * 100 = 16%.",
        "ar": "ملح مذاب = 200 * 0.20 = 40 جرام. الكتلة الكلية الجديدة = 200 + 50 = 250 جرام. النسبة الجديدة = (40 / 250) * 100 = 16%.",
        "zh": "溶解盐=200*0.20=40克。新总质量 = 200 + 50 = 250 克。新百分比 = (40 / 250) * 100 = 16%。",
        "ku": "Xwêya helkirî = 200 * 0,20 = 40 gram. Girseya giştî ya nû = 200 + 50 = 250 gram. Rêjeya nû = (40 / 250) * 100 = 16%."
      }
    },
    {
      "id": "u08-twin02",
      "stem": {
        "tr": "Kaynama noktaları farklı olan etil alkol ve su homojen karışımını bileşenlerine ayırmak için hangi yöntem kullanılmalıdır?",
        "en": "Which method should be used to separate a homogeneous mixture of ethyl alcohol and water with different boiling points into its components?",
        "de": "Mit welcher Methode soll ein homogenes Gemisch aus Ethylalkohol und Wasser mit unterschiedlichen Siedepunkten in seine Bestandteile zerlegt werden?",
        "fr": "Quelle méthode doit-on utiliser pour séparer en ses composants un mélange homogène d’alcool éthylique et d’eau avec des points d’ébullition différents ?",
        "ru": "Каким методом следует разделить однородную смесь этилового спирта и воды с разными температурами кипения на компоненты?",
        "ar": "ما الطريقة التي ينبغي استخدامها لفصل خليط متجانس من الكحول الإيثيلي والماء بدرجات غليان مختلفة إلى مكوناته؟",
        "zh": "应使用哪种方法将不同沸点的乙醇和水的均匀混合物分离成其组分？",
        "ku": "Kîjan rêbaz divê were bikar anîn da ku tevliheviyek homojen a etilalkol û avê bi xalên kelandinê yên cihêreng di pêkhateyên wê de were veqetandin?"
      },
      "options": [
        {
          "tr": "Ayrımsal damıtma",
          "en": "fractional distillation",
          "de": "fraktionierte Destillation",
          "fr": "distillation fractionnée",
          "ru": "фракционная перегонка",
          "ar": "التقطير التجزيئي",
          "zh": "分馏",
          "ku": "distilasyona fractional"
        },
        {
          "tr": "Ayırma hunisi",
          "en": "separatory funnel",
          "de": "Scheidetrichter",
          "fr": "entonnoir séparateur",
          "ru": "делительная воронка",
          "ar": "قمع منفصل",
          "zh": "分液漏斗",
          "ku": "Hunîya veqetandinê"
        },
        {
          "tr": "Süzme",
          "en": "Filtration",
          "de": "Filtration",
          "fr": "Filtration",
          "ru": "Фильтрование",
          "ar": "الترشيح",
          "zh": "过滤",
          "ku": "Parzûnkirin"
        },
        {
          "tr": "Diyaliz",
          "en": "dialysis",
          "de": "Dialyse",
          "fr": "dialyse",
          "ru": "диализ",
          "ar": "غسيل الكلى",
          "zh": "透析",
          "ku": "diyalîz"
        },
        {
          "tr": "Flotasyon",
          "en": "flotation",
          "de": "Flotation",
          "fr": "flottation",
          "ru": "флотация",
          "ar": "التعويم",
          "zh": "浮选",
          "ku": "flotation"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Sıvı-sıvı homojen karışımlarda kaynama noktası farkından yararlanılarak ayrımsal damıtma fraksiyon kolonu ile uygulanır.",
        "en": "It is applied with a fractional distillation fraction column by taking advantage of the boiling point difference in liquid-liquid homogeneous mixtures.",
        "de": "Es wird mit einer fraktionierten Destillationsfraktionskolonne angewendet, indem der Siedepunktunterschied in homogenen Flüssig-Flüssigkeits-Mischungen ausgenutzt wird.",
        "fr": "Il est appliqué avec une colonne de fraction de distillation fractionnée en tirant parti de la différence de point d'ébullition dans les mélanges homogènes liquide-liquide.",
        "ru": "Применяется с фракционной колонной фракционной перегонки за счет использования разницы температур кипения в гомогенных смесях жидкость-жидкость.",
        "ar": "يتم تطبيقه مع عمود جزء التقطير التجزيئي من خلال الاستفادة من اختلاف نقطة الغليان في المخاليط المتجانسة بين السائل والسائل.",
        "zh": "它与分馏塔一起应用，利用液-液均质混合物的沸点差。",
        "ku": "Ew bi stûnek perçeya distilasyonê ya fraksîyonî bi sûdwergirtina ji cûdahiya xala kelandinê di tevliheviyên homojen ên şil-avî de tê sepandin."
      }
    },
    {
      "id": "u08-twin03",
      "stem": {
        "tr": "Kimya dersinde Karışımlar ve Ayırma Teknikleri ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Mixtures & Separation Techniques, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Mischungen & Trennverfahren: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Mélanges & Techniques de Séparation, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Смеси и методы разделения», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"المخاليط وطرق الفصل\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“混合物与分离技术”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Têkelî û Rêbazên Veqetandinê\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Kütlece yüzde derişim çözünen kütlesinin çözücü kütlesine bölünmesiyle bulunur.",
          "en": "Percent concentration by mass is calculated by dividing the mass of the solute by the mass of the solvent.",
          "de": "Die Massenkonzentration in Prozent wird berechnet, indem die Masse des gelösten Stoffes durch die Masse des Lösungsmittels dividiert wird.",
          "fr": "La concentration en pourcentage en masse est calculée en divisant la masse du soluté par la masse du solvant.",
          "ru": "Массовая процентная концентрация рассчитывается путем деления массы растворенного вещества на массу растворителя.",
          "ar": "يتم حساب التركيز المئوي للكتلة عن طريق قسمة كتلة المذاب على كتلة المذيب.",
          "zh": "质量百分比浓度通过溶质质量除以溶剂质量来计算。",
          "ku": "Rêjeya girseyî ya ji sedî bi parvekirina girseya madeya helyayî li girseya helkerê tê dîtin."
        },
        {
          "tr": "Ayırma hunisi kaynama noktaları farklı homojen karışımları ayırır.",
          "en": "The separatory funnel separates homogeneous mixtures with different boiling points.",
          "de": "Der Scheidetrichter trennt homogene Gemische mit unterschiedlichen Siedepunkten.",
          "fr": "L'entonnoir séparateur sépare des mélanges homogènes avec différents points d'ébullition.",
          "ru": "Делительная воронка разделяет однородные смеси с разной температурой кипения.",
          "ar": "يقوم القمع الفاصل بفصل المخاليط المتجانسة ذات نقاط غليان مختلفة.",
          "zh": "分液漏斗分离具有不同沸点的均匀混合物。",
          "ku": "Hunîya veqetandinê tevliheviyên homojen ên bi xalên kelandinê yên cihêreng vediqetîne."
        },
        {
          "tr": "Emülsiyon birbiri içinde çözünmeyen sıvı-sıvı heterojen karışımdır (örn. zeytinyağı-su, mayonez).",
          "en": "Emulsion is a liquid-liquid heterogeneous mixture that is insoluble in each other (e.g. olive oil-water, mayonnaise).",
          "de": "Eine Emulsion ist ein heterogenes Flüssig-Flüssigkeits-Gemisch, das ineinander unlöslich ist (z. B. Olivenöl-Wasser, Mayonnaise).",
          "fr": "L'émulsion est un mélange hétérogène liquide-liquide insoluble l'un dans l'autre (par exemple huile d'olive-eau, mayonnaise).",
          "ru": "Эмульсия представляет собой гетерогенную смесь жидкость-жидкость, нерастворимую друг в друге (например, оливковое масло-вода, майонез).",
          "ar": "المستحلب عبارة عن خليط سائل غير متجانس غير قابل للذوبان في بعضها البعض (مثل زيت الزيتون والماء والمايونيز).",
          "zh": "乳液是一种液-液异质混合物，彼此互不相溶（例如橄榄油-水、蛋黄酱）。",
          "ku": "Emulsiyon tevliheviyek heterojen a şil-avî ye ku di nav hev de nayên çareser kirin (mînak rûnê zeytûn-ava, mayonez)."
        },
        {
          "tr": "Diyaliz santrifüj ile çöktürme işlemidir.",
          "en": "Dialysis is a centrifugal precipitation process.",
          "de": "Bei der Dialyse handelt es sich um ein zentrifugales Fällungsverfahren.",
          "fr": "La dialyse est un processus de précipitation centrifuge.",
          "ru": "Диализ – это процесс осаждения центрифугированием.",
          "ar": "الديلزة عملية ترسيب بالطرد المركزي.",
          "zh": "透析是一种离心沉淀过程。",
          "ku": "Dialîz pêvajoyeke niştandinê bi santrîfûjê ye."
        },
        {
          "tr": "Tuzlu su kaynarken sıcaklığı baştan itibaren sabit kalır.",
          "en": "While salt water boils, its temperature remains constant from the beginning.",
          "de": "Während Salzwasser kocht, bleibt seine Temperatur von Anfang an konstant.",
          "fr": "Pendant que l’eau salée bout, sa température reste constante depuis le début.",
          "ru": "Пока соленая вода кипит, ее температура с самого начала остается постоянной.",
          "ar": "فبينما يغلي الماء المالح، تظل درجة حرارته ثابتة منذ البداية.",
          "zh": "当盐水沸腾时，其温度从一开始就保持恒定。",
          "ku": "Dema ava şor dikele, germahiya wê ji destpêkê ve sabit dimîne."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Emülsiyon birbiri içinde çözünmeyen sıvı-sıvı heterojen karışımdır (örn. zeytinyağı-su, mayonez).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Emulsion is a liquid-liquid heterogeneous mixture that is insoluble in each other (e.g. olive oil-water, mayonnaise).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Eine Emulsion ist ein heterogenes Flüssig-Flüssigkeits-Gemisch, das ineinander unlöslich ist (z. B. Olivenöl-Wasser, Mayonnaise).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'émulsion est un mélange hétérogène liquide-liquide insoluble l'un dans l'autre (par exemple huile d'olive-eau, mayonnaise).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Эмульсия представляет собой гетерогенную смесь жидкость-жидкость, нерастворимую друг в друге (например, оливковое масло-вода, майонез).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المستحلب عبارة عن خليط سائل غير متجانس غير قابل للذوبان في بعضها البعض (مثل زيت الزيتون والماء والمايونيز).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“乳液是一种液-液异质混合物，彼此互不相溶（例如橄榄油-水、蛋黄酱）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Emulsiyon tevliheviyek heterojen a şil-avî ye ku di nav hev de nayên çareser kirin (mînak rûnê zeytûn-ava, mayonez).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u08-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Karışımlar ve Ayırma Teknikleri konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Mixtures & Separation Techniques?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Mischungen & Trennverfahren zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Mélanges & Techniques de Séparation ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Смеси и методы разделения»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"المخاليط وطرق الفصل\"؟",
        "zh": "根据“混合物与分离技术”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Têkelî û Rêbazên Veqetandinê\" de rast e?"
      },
      "options": [
        {
          "tr": "ppm hesaplanırken çarpan 100'dür.",
          "en": "When calculating ppm, the multiplier is 100.",
          "de": "Bei der Berechnung von ppm beträgt der Multiplikator 100.",
          "fr": "Lors du calcul du ppm, le multiplicateur est de 100.",
          "ru": "При расчете ppm множитель равен 100.",
          "ar": "عند حساب جزء في المليون، يكون المضاعف 100.",
          "zh": "计算 ppm 时，乘数为 100。",
          "ku": "Dema ku ppm tê hesibandin, pirjimar 100 e."
        },
        {
          "tr": "Flotasyon mıknatıs yardımıyla demir ayırma işlemidir.",
          "en": "Flotation is the process of separating iron with the help of a magnet.",
          "de": "Bei der Flotation wird Eisen mit Hilfe eines Magneten abgetrennt.",
          "fr": "La flottation est le processus de séparation du fer à l'aide d'un aimant.",
          "ru": "Флотация – это процесс отделения железа с помощью магнита.",
          "ar": "التعويم هو عملية فصل الحديد بمساعدة المغناطيس.",
          "zh": "浮选是借助磁铁分离铁的过程。",
          "ku": "Flotasyon pêvajoya veqetandina hesin bi alîkariya magnetekê ye."
        },
        {
          "tr": "Su eklendiğinde çözünen madde kütlesi de artar.",
          "en": "When water is added, the mass of solute also increases.",
          "de": "Bei Zugabe von Wasser erhöht sich auch die Masse des gelösten Stoffes.",
          "fr": "Lorsque de l’eau est ajoutée, la masse de soluté augmente également.",
          "ru": "При добавлении воды масса растворенного вещества также увеличивается.",
          "ar": "عند إضافة الماء، تزداد كتلة المذاب أيضًا.",
          "zh": "当添加水时，溶质的质量也会增加。",
          "ku": "Dema ku av lê tê zêdekirin, girseya madeya helyayî jî zêde dibe."
        },
        {
          "tr": "Aerosol bir gaz içinde katı veya sıvının dağılmasıyla oluşur (örn. sis, duman, sprey).",
          "en": "An aerosol is formed by the dispersion of a solid or liquid in a gas (e.g. fog, smoke, spray).",
          "de": "Ein Aerosol entsteht durch die Dispersion eines Feststoffs oder einer Flüssigkeit in einem Gas (z. B. Nebel, Rauch, Spray).",
          "fr": "Un aérosol est formé par la dispersion d'un solide ou d'un liquide dans un gaz (par exemple brouillard, fumée, spray).",
          "ru": "Аэрозоль образуется в результате распыления твердого вещества или жидкости в газе (например, туман, дым, брызги).",
          "ar": "يتكون الهباء الجوي من تشتت مادة صلبة أو سائلة في الغاز (مثل الضباب والدخان والرذاذ).",
          "zh": "气溶胶是由固体或液体分散在气体中形成的（例如雾、烟、喷雾）。",
          "ku": "Aerosol bi belavkirina hişk an şilek di gazê de (mînak mij, dûman, sprey) çê dibe."
        },
        {
          "tr": "Doygun çözeltiye tuz eklenirse çözelti daha derişik hale gelir.",
          "en": "If salt is added to a saturated solution, the solution becomes more concentrated.",
          "de": "Wenn einer gesättigten Lösung Salz zugesetzt wird, wird die Lösung konzentrierter.",
          "fr": "Si du sel est ajouté à une solution saturée, la solution devient plus concentrée.",
          "ru": "Если к насыщенному раствору добавить соль, раствор станет более концентрированным.",
          "ar": "إذا أضيف الملح إلى محلول مشبع، يصبح المحلول أكثر تركيزا.",
          "zh": "如果将盐添加到饱和溶液中，溶液会变得更加浓缩。",
          "ku": "Heke xwê li çareseriyeke têrbûyî were zêdekirin, çareserî bêtir derîşîk dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Aerosol bir gaz içinde katı veya sıvının dağılmasıyla oluşur (örn. sis, duman, sprey).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"An aerosol is formed by the dispersion of a solid or liquid in a gas (e.g. fog, smoke, spray).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Ein Aerosol entsteht durch die Dispersion eines Feststoffs oder einer Flüssigkeit in einem Gas (z. B. Nebel, Rauch, Spray).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Un aérosol est formé par la dispersion d'un solide ou d'un liquide dans un gaz (par exemple brouillard, fumée, spray).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Аэрозоль образуется в результате распыления твердого вещества или жидкости в газе (например, туман, дым, брызги).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يتكون الهباء الجوي من تشتت مادة صلبة أو سائلة في الغاز (مثل الضباب والدخان والرذاذ).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“气溶胶是由固体或液体分散在气体中形成的（例如雾、烟、喷雾）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Aerosol bi belavkirina hişk an şilek di gazê de (mînak mij, dûman, sprey) çê dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u08-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Karışımlar ve Ayırma Teknikleri sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Mixtures & Separation Techniques, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Mischungen & Trennverfahren: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Mélanges & Techniques de Séparation, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Смеси и методы разделения», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"المخاليط وطرق الفصل\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“混合物与分离技术”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Têkelî û Rêbazên Veqetandinê\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Ayrımsal damıtma yoğunluk farkına dayalı bir ayırma tekniğidir.",
          "en": "Fractional distillation is a separation technique based on density difference.",
          "de": "Die fraktionierte Destillation ist eine Trenntechnik, die auf Dichteunterschieden basiert.",
          "fr": "La distillation fractionnée est une technique de séparation basée sur la différence de densité.",
          "ru": "Фракционная перегонка — это метод разделения, основанный на разнице плотностей.",
          "ar": "التقطير التجزيئي هو تقنية فصل تعتمد على اختلاف الكثافة.",
          "zh": "分馏是一种基于密度差的分离技术。",
          "ku": "Distîlasyona fraksîyonî teknîkek veqetandinê ye ku li ser bingeha ciyawaziya dendikê ye."
        },
        {
          "tr": "Özütleme tanecik boyutu farkına dayalı eleme yöntemidir.",
          "en": "Extraction is a screening method based on particle size difference.",
          "de": "Die Extraktion ist eine Siebmethode, die auf Partikelgrößenunterschieden basiert.",
          "fr": "L'extraction est une méthode de criblage basée sur la différence de taille des particules.",
          "ru": "Экстракция — это метод отбора, основанный на разнице в размерах частиц.",
          "ar": "الاستخراج هو طريقة فحص تعتمد على اختلاف حجم الجسيمات.",
          "zh": "萃取是一种基于粒度差异的筛选方法。",
          "ku": "Derxistin rêbazek vekolînek e ku li ser bingeha cûdahiya mezinahiya parçikê ye."
        },
        {
          "tr": "Apolar yağ lekesi polar suyla kolayca çözünür.",
          "en": "Non-polar oil stain dissolves easily with polar water.",
          "de": "Unpolare Ölflecken lösen sich leicht mit polarem Wasser.",
          "fr": "La tache d'huile non polaire se dissout facilement avec de l'eau polaire.",
          "ru": "Неполярное масляное пятно легко растворяется полярной водой.",
          "ar": "تذوب وصمة الزيت غير القطبية بسهولة بالماء القطبي.",
          "zh": "非极性油污很容易被极性水溶解。",
          "ku": "Lekeya rûnê ne-polar bi ava polar bi hêsanî dihele."
        },
        {
          "tr": "Kolloitler mikroskopsuz bakıldığında da heterojen görünür ve hemen çöker.",
          "en": "Even when viewed without a microscope, colloids appear heterogeneous and precipitate immediately.",
          "de": "Selbst bei Betrachtung ohne Mikroskop erscheinen Kolloide heterogen und fallen sofort aus.",
          "fr": "Même observés sans microscope, les colloïdes semblent hétérogènes et précipitent immédiatement.",
          "ru": "Даже при осмотре без микроскопа коллоиды кажутся неоднородными и сразу же выпадают в осадок.",
          "ar": "حتى عند النظر إليها بدون مجهر، تبدو الغرويات غير متجانسة وتترسب على الفور.",
          "zh": "即使不用显微镜观察，胶体也会显得不均匀并立即沉淀。",
          "ku": "Dema ku bêyî mîkroskopê were temaşe kirin jî, koloid heterojen xuya dikin û yekser dibarin."
        },
        {
          "tr": "Tyndall etkisi: Kolloitlerden geçen ışık demeti saçılır ve ışığın yolu görünür.",
          "en": "Tyndall effect: A light beam passing through a colloid is scattered and its path becomes visible.",
          "de": "Tyndall-Effekt: Ein Lichtstrahl, der durch ein Kolloid fällt, wird gestreut, und sein Weg wird sichtbar.",
          "fr": "Effet Tyndall : un faisceau lumineux traversant un colloïde est diffusé et son trajet devient visible.",
          "ru": "Эффект Тиндаля: луч света, проходящий через коллоид, рассеивается, и его путь становится видимым.",
          "ar": "تأثير تيندال: يتشتت شعاع الضوء المار عبر الغروي ويصبح مساره مرئيًا.",
          "zh": "丁达尔效应：光束通过胶体时发生散射，光的路径清晰可见。",
          "ku": "Bandora Tyndall: Tîrêja ronahiyê ya ku di koloîdekê re derbas dibe belav dibe û riya wê xuya dibe."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Tyndall etkisi: Kolloitlerden geçen ışık demeti saçılır ve ışığın yolu görünür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Tyndall effect: A light beam passing through a colloid is scattered and its path becomes visible.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Tyndall-Effekt: Ein Lichtstrahl, der durch ein Kolloid fällt, wird gestreut, und sein Weg wird sichtbar.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Effet Tyndall : un faisceau lumineux traversant un colloïde est diffusé et son trajet devient visible.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Эффект Тиндаля: луч света, проходящий через коллоид, рассеивается, и его путь становится видимым.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تأثير تيندال: يتشتت شعاع الضوء المار عبر الغروي ويصبح مساره مرئيًا.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“丁达尔效应：光束通过胶体时发生散射，光的路径清晰可见。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Bandora Tyndall: Tîrêja ronahiyê ya ku di koloîdekê re derbas dibe belav dibe û riya wê xuya dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u08-twin06",
      "stem": {
        "tr": "Aşağıda Karışımlar ve Ayırma Teknikleri ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Mixtures & Separation Techniques, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Mischungen & Trennverfahren: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Mélanges & Techniques de Séparation, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Смеси и методы разделения», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"المخاليط وطرق الفصل\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“混合物与分离技术”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Têkelî û Rêbazên Veqetandinê\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Kütlece yüzde derişim = (Çözünen Kütlesi / Çözelti Kütlesi) x 100'dür.",
          "en": "Percent concentration by mass = (Solute Mass / Solution Mass) x 100.",
          "de": "Prozentuale Konzentration nach Masse = (Masse gelöster Stoffe / Masse der Lösung) x 100.",
          "fr": "Pourcentage de concentration en masse = (Masse du soluté / Masse de la solution) x 100.",
          "ru": "Процентная концентрация по массе = (Масса растворенного вещества / Масса раствора) x 100.",
          "ar": "نسبة التركيز بالكتلة = (كتلة المذاب / كتلة المحلول) × 100.",
          "zh": "质量百分比浓度 =（溶质质量 / 溶液质量）x 100。",
          "ku": "Rêjeya girseyî ya ji sedî = (Girseya madeya helyayî / Girseya çareseriyê) x 100."
        },
        {
          "tr": "Ayırma hunisi kaynama noktaları farklı homojen karışımları ayırır.",
          "en": "The separatory funnel separates homogeneous mixtures with different boiling points.",
          "de": "Der Scheidetrichter trennt homogene Gemische mit unterschiedlichen Siedepunkten.",
          "fr": "L'entonnoir séparateur sépare des mélanges homogènes avec différents points d'ébullition.",
          "ru": "Делительная воронка разделяет однородные смеси с разной температурой кипения.",
          "ar": "يقوم القمع الفاصل بفصل المخاليط المتجانسة ذات نقاط غليان مختلفة.",
          "zh": "分液漏斗分离具有不同沸点的均匀混合物。",
          "ku": "Hunîya veqetandinê tevliheviyên homojen ên bi xalên kelandinê yên cihêreng vediqetîne."
        },
        {
          "tr": "Diyaliz santrifüj ile çöktürme işlemidir.",
          "en": "Dialysis is a centrifugal precipitation process.",
          "de": "Bei der Dialyse handelt es sich um ein zentrifugales Fällungsverfahren.",
          "fr": "La dialyse est un processus de précipitation centrifuge.",
          "ru": "Диализ – это процесс осаждения центрифугированием.",
          "ar": "الديلزة عملية ترسيب بالطرد المركزي.",
          "zh": "透析是一种离心沉淀过程。",
          "ku": "Dialîz pêvajoyeke niştandinê bi santrîfûjê ye."
        },
        {
          "tr": "Tuzlu su kaynarken sıcaklığı baştan itibaren sabit kalır.",
          "en": "While salt water boils, its temperature remains constant from the beginning.",
          "de": "Während Salzwasser kocht, bleibt seine Temperatur von Anfang an konstant.",
          "fr": "Pendant que l’eau salée bout, sa température reste constante depuis le début.",
          "ru": "Пока соленая вода кипит, ее температура с самого начала остается постоянной.",
          "ar": "فبينما يغلي الماء المالح، تظل درجة حرارته ثابتة منذ البداية.",
          "zh": "当盐水沸腾时，其温度从一开始就保持恒定。",
          "ku": "Dema ava şor dikele, germahiya wê ji destpêkê ve sabit dimîne."
        },
        {
          "tr": "Süspansiyon tek fazlı homojen bir çözeltidir.",
          "en": "The suspension is a single-phase homogeneous solution.",
          "de": "Die Suspension ist eine einphasige homogene Lösung.",
          "fr": "La suspension est une solution homogène monophasée.",
          "ru": "Суспензия представляет собой однофазный гомогенный раствор.",
          "ar": "المعلق محلول متجانس أحادي الطور.",
          "zh": "该悬浮液是单相均相溶液。",
          "ku": "Süspansiyon çareseriyeke homojen a yek-qonaxî ye."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Kütlece yüzde derişim = (Çözünen Kütlesi / Çözelti Kütlesi) x 100'dür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Percent concentration by mass = (Solute Mass / Solution Mass) x 100.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Prozentuale Konzentration nach Masse = (Masse gelöster Stoffe / Masse der Lösung) x 100.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Pourcentage de concentration en masse = (Masse du soluté / Masse de la solution) x 100.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Процентная концентрация по массе = (Масса растворенного вещества / Масса раствора) x 100.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"نسبة التركيز بالكتلة = (كتلة المذاب / كتلة المحلول) × 100.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“质量百分比浓度 =（溶质质量 / 溶液质量）x 100。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Rêjeya girseyî ya ji sedî = (Girseya madeya helyayî / Girseya çareseriyê) x 100.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u08-twin07",
      "stem": {
        "tr": "Karışımlar ve Ayırma Teknikleri konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Mixtures & Separation Techniques, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Mischungen & Trennverfahren: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Mélanges & Techniques de Séparation, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Смеси и методы разделения», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"المخاليط وطرق الفصل\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“混合物与分离技术”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Têkelî û Rêbazên Veqetandinê\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Flotasyon mıknatıs yardımıyla demir ayırma işlemidir.",
          "en": "Flotation is the process of separating iron with the help of a magnet.",
          "de": "Bei der Flotation wird Eisen mit Hilfe eines Magneten abgetrennt.",
          "fr": "La flottation est le processus de séparation du fer à l'aide d'un aimant.",
          "ru": "Флотация – это процесс отделения железа с помощью магнита.",
          "ar": "التعويم هو عملية فصل الحديد بمساعدة المغناطيس.",
          "zh": "浮选是借助磁铁分离铁的过程。",
          "ku": "Flotasyon pêvajoya veqetandina hesin bi alîkariya magnetekê ye."
        },
        {
          "tr": "ppm (milyonda bir kısım) = (Çözünen Kütlesi / Çözelti Kütlesi) x 10^6'dır.",
          "en": "ppm (parts per million) = (Solute Mass / Solution Mass) x 10^6.",
          "de": "ppm (parts per million) = (Gelöste Masse / Lösungsmasse) x 10^6.",
          "fr": "ppm (parties par million) = (Masse de soluté / Masse de solution) x 10^6.",
          "ru": "ppm (частей на миллион) = (Масса растворенного вещества / Масса раствора) x 10^6.",
          "ar": "جزء في المليون (جزء في المليون) = (كتلة المذاب / كتلة المحلول) × 10 ^ 6.",
          "zh": "ppm（百万分之一）=（溶质质量/溶液质量）x 10^6。",
          "ku": "ppm (parçe di mîlyonekê de) = (Girseya madeya helyayî / Girseya çareseriyê) x 10^6."
        },
        {
          "tr": "Su eklendiğinde çözünen madde kütlesi de artar.",
          "en": "When water is added, the mass of solute also increases.",
          "de": "Bei Zugabe von Wasser erhöht sich auch die Masse des gelösten Stoffes.",
          "fr": "Lorsque de l’eau est ajoutée, la masse de soluté augmente également.",
          "ru": "При добавлении воды масса растворенного вещества также увеличивается.",
          "ar": "عند إضافة الماء، تزداد كتلة المذاب أيضًا.",
          "zh": "当添加水时，溶质的质量也会增加。",
          "ku": "Dema ku av lê tê zêdekirin, girseya madeya helyayî jî zêde dibe."
        },
        {
          "tr": "Doygun çözeltiye tuz eklenirse çözelti daha derişik hale gelir.",
          "en": "If salt is added to a saturated solution, the solution becomes more concentrated.",
          "de": "Wenn einer gesättigten Lösung Salz zugesetzt wird, wird die Lösung konzentrierter.",
          "fr": "Si du sel est ajouté à une solution saturée, la solution devient plus concentrée.",
          "ru": "Если к насыщенному раствору добавить соль, раствор станет более концентрированным.",
          "ar": "إذا أضيف الملح إلى محلول مشبع، يصبح المحلول أكثر تركيزا.",
          "zh": "如果将盐添加到饱和溶液中，溶液会变得更加浓缩。",
          "ku": "Heke xwê li çareseriyeke têrbûyî were zêdekirin, çareserî bêtir derîşîk dibe."
        },
        {
          "tr": "Zeytinyağı-su karışımı ayrımsal damıtma ile ayrılır.",
          "en": "The olive oil-water mixture is separated by fractional distillation.",
          "de": "Das Olivenöl-Wasser-Gemisch wird durch fraktionierte Destillation getrennt.",
          "fr": "Le mélange huile d'olive-eau est séparé par distillation fractionnée.",
          "ru": "Смесь оливкового масла и воды разделяют фракционной перегонкой.",
          "ar": "يتم فصل خليط زيت الزيتون والماء عن طريق التقطير التجزيئي.",
          "zh": "橄榄油-水混合物通过分馏分离。",
          "ku": "Tevliheviya rûnê zeytûn-avê bi distîlasyona fraksîyonî tê veqetandin."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"ppm (milyonda bir kısım) = (Çözünen Kütlesi / Çözelti Kütlesi) x 10^6'dır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"ppm (parts per million) = (Solute Mass / Solution Mass) x 10^6.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"ppm (parts per million) = (Gelöste Masse / Lösungsmasse) x 10^6.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"ppm (parties par million) = (Masse de soluté / Masse de solution) x 10^6.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «ppm (частей на миллион) = (Масса растворенного вещества / Масса раствора) x 10^6.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"جزء في المليون (جزء في المليون) = (كتلة المذاب / كتلة المحلول) × 10 ^ 6.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“ppm（百万分之一）=（溶质质量/溶液质量）x 10^6。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"ppm (parçe di mîlyonekê de) = (Girseya madeya helyayî / Girseya çareseriyê) x 10^6.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u08-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Karışımlar ve Ayırma Teknikleri ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Mixtures & Separation Techniques, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Mischungen & Trennverfahren: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Mélanges & Techniques de Séparation, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Смеси и методы разделения», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"المخاليط وطرق الفصل\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“混合物与分离技术”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Têkelî û Rêbazên Veqetandinê\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Özütleme tanecik boyutu farkına dayalı eleme yöntemidir.",
          "en": "Extraction is a screening method based on particle size difference.",
          "de": "Die Extraktion ist eine Siebmethode, die auf Partikelgrößenunterschieden basiert.",
          "fr": "L'extraction est une méthode de criblage basée sur la différence de taille des particules.",
          "ru": "Экстракция — это метод отбора, основанный на разнице в размерах частиц.",
          "ar": "الاستخراج هو طريقة فحص تعتمد على اختلاف حجم الجسيمات.",
          "zh": "萃取是一种基于粒度差异的筛选方法。",
          "ku": "Derxistin rêbazek vekolînek e ku li ser bingeha cûdahiya mezinahiya parçikê ye."
        },
        {
          "tr": "Apolar yağ lekesi polar suyla kolayca çözünür.",
          "en": "Non-polar oil stain dissolves easily with polar water.",
          "de": "Unpolare Ölflecken lösen sich leicht mit polarem Wasser.",
          "fr": "La tache d'huile non polaire se dissout facilement avec de l'eau polaire.",
          "ru": "Неполярное масляное пятно легко растворяется полярной водой.",
          "ar": "تذوب وصمة الزيت غير القطبية بسهولة بالماء القطبي.",
          "zh": "非极性油污很容易被极性水溶解。",
          "ku": "Lekeya rûnê ne-polar bi ava polar bi hêsanî dihele."
        },
        {
          "tr": "Ayrımsal damıtma, kaynama noktaları farklı olan homojen sıvı-sıvı karışımları ayırmada kullanılır (örn. petrol, alkol-su).",
          "en": "Fractional distillation is used to separate homogeneous liquid-liquid mixtures with different boiling points (e.g. oil, alcohol-water).",
          "de": "Die fraktionierte Destillation dient der Trennung homogener Flüssigkeit-Flüssigkeits-Gemische mit unterschiedlichen Siedepunkten (z. B. Öl, Alkohol-Wasser).",
          "fr": "La distillation fractionnée est utilisée pour séparer des mélanges liquide-liquide homogènes avec différents points d'ébullition (par exemple huile, alcool-eau).",
          "ru": "Фракционную перегонку применяют для разделения однородных смесей жидкость-жидкость с разными температурами кипения (например, масло, спирт-вода).",
          "ar": "يستخدم التقطير التجزيئي لفصل مخاليط سائلة متجانسة ذات نقاط غليان مختلفة (مثل الزيت والكحول والماء).",
          "zh": "分馏用于分离具有不同沸点的均质液-液混合物（例如油、醇-水）。",
          "ku": "Distîlasyona fraksîyonel ji bo veqetandina hevokên şil-avî yên homojen ên bi xalên kelandinê yên cihêreng (mînak rûn, alkol-av) tê bikar anîn."
        },
        {
          "tr": "Kolloitler mikroskopsuz bakıldığında da heterojen görünür ve hemen çöker.",
          "en": "Even when viewed without a microscope, colloids appear heterogeneous and precipitate immediately.",
          "de": "Selbst bei Betrachtung ohne Mikroskop erscheinen Kolloide heterogen und fallen sofort aus.",
          "fr": "Même observés sans microscope, les colloïdes semblent hétérogènes et précipitent immédiatement.",
          "ru": "Даже при осмотре без микроскопа коллоиды кажутся неоднородными и сразу же выпадают в осадок.",
          "ar": "حتى عند النظر إليها بدون مجهر، تبدو الغرويات غير متجانسة وتترسب على الفور.",
          "zh": "即使不用显微镜观察，胶体也会显得不均匀并立即沉淀。",
          "ku": "Dema ku bêyî mîkroskopê were temaşe kirin jî, koloid heterojen xuya dikin û yekser dibarin."
        },
        {
          "tr": "Duman katının sıvıda dağıldığı süspansiyondur.",
          "en": "Smoke is a suspension in which the solid is dispersed in the liquid.",
          "de": "Rauch ist eine Suspension, in der der Feststoff in der Flüssigkeit dispergiert ist.",
          "fr": "La fumée est une suspension dans laquelle le solide est dispersé dans le liquide.",
          "ru": "Дым представляет собой суспензию, в которой твердое вещество рассеяно в жидкости.",
          "ar": "الدخان عبارة عن معلق يتم فيه تشتيت المادة الصلبة في السائل.",
          "zh": "烟雾是固体分散在液体中的悬浮液。",
          "ku": "Dûman suspensionek e ku tê de maddeya hişk di şilekê de belav dibe."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Ayrımsal damıtma, kaynama noktaları farklı olan homojen sıvı-sıvı karışımları ayırmada kullanılır (örn. petrol, alkol-su).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Fractional distillation is used to separate homogeneous liquid-liquid mixtures with different boiling points (e.g. oil, alcohol-water).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die fraktionierte Destillation dient der Trennung homogener Flüssigkeit-Flüssigkeits-Gemische mit unterschiedlichen Siedepunkten (z. B. Öl, Alkohol-Wasser).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La distillation fractionnée est utilisée pour séparer des mélanges liquide-liquide homogènes avec différents points d'ébullition (par exemple huile, alcool-eau).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Фракционную перегонку применяют для разделения однородных смесей жидкость-жидкость с разными температурами кипения (например, масло, спирт-вода).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يستخدم التقطير التجزيئي لفصل مخاليط سائلة متجانسة ذات نقاط غليان مختلفة (مثل الزيت والكحول والماء).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“分馏用于分离具有不同沸点的均质液-液混合物（例如油、醇-水）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Distîlasyona fraksîyonel ji bo veqetandina hevokên şil-avî yên homojen ên bi xalên kelandinê yên cihêreng (mînak rûn, alkol-av) tê bikar anîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u08-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Karışımlar ve Ayırma Teknikleri konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Mixtures & Separation Techniques, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Mischungen & Trennverfahren die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Mélanges & Techniques de Séparation, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Смеси и методы разделения», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"المخاليط وطرق الفصل\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“混合物与分离技术”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Têkelî û Rêbazên Veqetandinê\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Diyaliz santrifüj ile çöktürme işlemidir.",
          "en": "Dialysis is a centrifugal precipitation process.",
          "de": "Bei der Dialyse handelt es sich um ein zentrifugales Fällungsverfahren.",
          "fr": "La dialyse est un processus de précipitation centrifuge.",
          "ru": "Диализ – это процесс осаждения центрифугированием.",
          "ar": "الديلزة عملية ترسيب بالطرد المركزي.",
          "zh": "透析是一种离心沉淀过程。",
          "ku": "Dialîz pêvajoyeke niştandinê bi santrîfûjê ye."
        },
        {
          "tr": "Tuzlu su kaynarken sıcaklığı baştan itibaren sabit kalır.",
          "en": "While salt water boils, its temperature remains constant from the beginning.",
          "de": "Während Salzwasser kocht, bleibt seine Temperatur von Anfang an konstant.",
          "fr": "Pendant que l’eau salée bout, sa température reste constante depuis le début.",
          "ru": "Пока соленая вода кипит, ее температура с самого начала остается постоянной.",
          "ar": "فبينما يغلي الماء المالح، تظل درجة حرارته ثابتة منذ البداية.",
          "zh": "当盐水沸腾时，其温度从一开始就保持恒定。",
          "ku": "Dema ava şor dikele, germahiya wê ji destpêkê ve sabit dimîne."
        },
        {
          "tr": "Süspansiyon tek fazlı homojen bir çözeltidir.",
          "en": "The suspension is a single-phase homogeneous solution.",
          "de": "Die Suspension ist eine einphasige homogene Lösung.",
          "fr": "La suspension est une solution homogène monophasée.",
          "ru": "Суспензия представляет собой однофазный гомогенный раствор.",
          "ar": "المعلق محلول متجانس أحادي الطور.",
          "zh": "该悬浮液是单相均相溶液。",
          "ku": "Süspansiyon çareseriyeke homojen a yek-qonaxî ye."
        },
        {
          "tr": "Ayırma hunisi, özkütleleri farklı birbiri içinde çözünmeyen sıvı-sıvı heterojen karışımları ayırır (örn. zeytinyağı-su).",
          "en": "The separatory funnel separates insoluble liquid-liquid heterogeneous mixtures with different density (e.g. olive oil-water).",
          "de": "Der Scheidetrichter trennt unlösliche flüssig-flüssig-heterogene Gemische unterschiedlicher Dichte (z. B. Olivenöl-Wasser).",
          "fr": "L'entonnoir de séparation sépare les mélanges hétérogènes liquide-liquide insolubles de différentes densités (par exemple huile d'olive-eau).",
          "ru": "Делительная воронка разделяет нерастворимые гетерогенные смеси жидкость-жидкость различной плотности (например, оливковое масло-вода).",
          "ar": "يفصل قمع الفصل المخاليط غير المتجانسة السائلة غير القابلة للذوبان ذات الكثافة المختلفة (مثل زيت الزيتون والماء).",
          "zh": "分液漏斗分离不同密度的不溶性液-液非均质混合物（例如橄榄油-水）。",
          "ku": "Hunîya veqetandinê tevliheviyên heterojen ên şil-şil ên ku di hev de nahelin û dendikên wan cuda ne ji hev vediqetîne (mînak rûnê zeytûnê-av)."
        },
        {
          "tr": "Gerçek homojen çözeltilerde ışık demeti kuvvetle saçılır ve görünür.",
          "en": "In true homogeneous solutions, the light beam is strongly scattered and visible.",
          "de": "In wirklich homogenen Lösungen ist der Lichtstrahl stark gestreut und sichtbar.",
          "fr": "Dans les solutions véritablement homogènes, le faisceau lumineux est fortement diffusé et visible.",
          "ru": "В истинно однородных растворах луч света сильно рассеивается и виден.",
          "ar": "في المحاليل المتجانسة الحقيقية، يكون شعاع الضوء منتشرًا بقوة ومرئيًا.",
          "zh": "在真溶液中，光束被强烈散射并且可见。",
          "ku": "Di çareseriyên homojen ên rastîn de, tîrêjê ronahiyê bi tundî belav dibe û xuya dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Ayırma hunisi, özkütleleri farklı birbiri içinde çözünmeyen sıvı-sıvı heterojen karışımları ayırır (örn. zeytinyağı-su).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The separatory funnel separates insoluble liquid-liquid heterogeneous mixtures with different density (e.g. olive oil-water).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der Scheidetrichter trennt unlösliche flüssig-flüssig-heterogene Gemische unterschiedlicher Dichte (z. B. Olivenöl-Wasser).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'entonnoir de séparation sépare les mélanges hétérogènes liquide-liquide insolubles de différentes densités (par exemple huile d'olive-eau).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Делительная воронка разделяет нерастворимые гетерогенные смеси жидкость-жидкость различной плотности (например, оливковое масло-вода).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يفصل قمع الفصل المخاليط غير المتجانسة السائلة غير القابلة للذوبان ذات الكثافة المختلفة (مثل زيت الزيتون والماء).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“分液漏斗分离不同密度的不溶性液-液非均质混合物（例如橄榄油-水）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hunîya veqetandinê tevliheviyên heterojen ên şil-şil ên ku di hev de nahelin û dendikên wan cuda ne ji hev vediqetîne (mînak rûnê zeytûnê-av).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u08-twin10",
      "stem": {
        "tr": "Kimya dersinde Karışımlar ve Ayırma Teknikleri ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Mixtures & Separation Techniques, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Mischungen & Trennverfahren: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Mélanges & Techniques de Séparation, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Смеси и методы разделения», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"المخاليط وطرق الفصل\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“混合物与分离技术”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Têkelî û Rêbazên Veqetandinê\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Su eklendiğinde çözünen madde kütlesi de artar.",
          "en": "When water is added, the mass of solute also increases.",
          "de": "Bei Zugabe von Wasser erhöht sich auch die Masse des gelösten Stoffes.",
          "fr": "Lorsque de l’eau est ajoutée, la masse de soluté augmente également.",
          "ru": "При добавлении воды масса растворенного вещества также увеличивается.",
          "ar": "عند إضافة الماء، تزداد كتلة المذاب أيضًا.",
          "zh": "当添加水时，溶质的质量也会增加。",
          "ku": "Dema ku av lê tê zêdekirin, girseya madeya helyayî jî zêde dibe."
        },
        {
          "tr": "Doygun çözeltiye tuz eklenirse çözelti daha derişik hale gelir.",
          "en": "If salt is added to a saturated solution, the solution becomes more concentrated.",
          "de": "Wenn einer gesättigten Lösung Salz zugesetzt wird, wird die Lösung konzentrierter.",
          "fr": "Si du sel est ajouté à une solution saturée, la solution devient plus concentrée.",
          "ru": "Если к насыщенному раствору добавить соль, раствор станет более концентрированным.",
          "ar": "إذا أضيف الملح إلى محلول مشبع، يصبح المحلول أكثر تركيزا.",
          "zh": "如果将盐添加到饱和溶液中，溶液会变得更加浓缩。",
          "ku": "Heke xwê li çareseriyeke têrbûyî were zêdekirin, çareserî bêtir derîşîk dibe."
        },
        {
          "tr": "Zeytinyağı-su karışımı ayrımsal damıtma ile ayrılır.",
          "en": "The olive oil-water mixture is separated by fractional distillation.",
          "de": "Das Olivenöl-Wasser-Gemisch wird durch fraktionierte Destillation getrennt.",
          "fr": "Le mélange huile d'olive-eau est séparé par distillation fractionnée.",
          "ru": "Смесь оливкового масла и воды разделяют фракционной перегонкой.",
          "ar": "يتم فصل خليط زيت الزيتون والماء عن طريق التقطير التجزيئي.",
          "zh": "橄榄油-水混合物通过分馏分离。",
          "ku": "Tevliheviya rûnê zeytûn-avê bi distîlasyona fraksîyonî tê veqetandin."
        },
        {
          "tr": "Kütlece yüzde derişim çözünen kütlesinin çözücü kütlesine bölünmesiyle bulunur.",
          "en": "Percent concentration by mass is calculated by dividing the mass of the solute by the mass of the solvent.",
          "de": "Die Massenkonzentration in Prozent wird berechnet, indem die Masse des gelösten Stoffes durch die Masse des Lösungsmittels dividiert wird.",
          "fr": "La concentration en pourcentage en masse est calculée en divisant la masse du soluté par la masse du solvant.",
          "ru": "Массовая процентная концентрация рассчитывается путем деления массы растворенного вещества на массу растворителя.",
          "ar": "يتم حساب التركيز المئوي للكتلة عن طريق قسمة كتلة المذاب على كتلة المذيب.",
          "zh": "质量百分比浓度通过溶质质量除以溶剂质量来计算。",
          "ku": "Rêjeya girseyî ya ji sedî bi parvekirina girseya madeya helyayî li girseya helkerê tê dîtin."
        },
        {
          "tr": "Flotasyon (yüzdürme), yoğunluğu sıvıdan küçük olan katı taneciklerin yüzeye çıkarılarak toplanmasıdır (madencilikte sülfürlü cevherler).",
          "en": "Flotation is the collection of solid particles, whose density is less than the liquid, by bringing them to the surface (sulfide ores in mining).",
          "de": "Bei der Flotation werden feste Partikel, deren Dichte geringer ist als die der Flüssigkeit, an die Oberfläche gebracht (Sulfiderze im Bergbau).",
          "fr": "La flottation est la collecte de particules solides, dont la densité est inférieure à celle du liquide, en les ramenant à la surface (minerais sulfurés en exploitation minière).",
          "ru": "Флотация — сбор твердых частиц, плотность которых меньше плотности жидкости, путем выноса их на поверхность (сульфидные руды в горнодобывающей промышленности).",
          "ar": "التعويم هو تجميع الجزيئات الصلبة التي تقل كثافتها عن السائل عن طريق رفعها إلى السطح (خامات الكبريتيد في التعدين).",
          "zh": "浮选是通过将密度小于液体的固体颗粒带到表面（采矿中的硫化矿石）来收集它们。",
          "ku": "Flotasyon komkirina keriyên hişk e, ku tîraniya wan ji şilê kêmtir e, bi anîna wan li ser rûyê erdê (di madenê de kanên sulfîdî)."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Flotasyon (yüzdürme), yoğunluğu sıvıdan küçük olan katı taneciklerin yüzeye çıkarılarak toplanmasıdır (madencilikte sülfürlü cevherler).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Flotation is the collection of solid particles, whose density is less than the liquid, by bringing them to the surface (sulfide ores in mining).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei der Flotation werden feste Partikel, deren Dichte geringer ist als die der Flüssigkeit, an die Oberfläche gebracht (Sulfiderze im Bergbau).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La flottation est la collecte de particules solides, dont la densité est inférieure à celle du liquide, en les ramenant à la surface (minerais sulfurés en exploitation minière).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Флотация — сбор твердых частиц, плотность которых меньше плотности жидкости, путем выноса их на поверхность (сульфидные руды в горнодобывающей промышленности).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"التعويم هو تجميع الجزيئات الصلبة التي تقل كثافتها عن السائل عن طريق رفعها إلى السطح (خامات الكبريتيد في التعدين).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“浮选是通过将密度小于液体的固体颗粒带到表面（采矿中的硫化矿石）来收集它们。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Flotasyon komkirina keriyên hişk e, ku tîraniya wan ji şilê kêmtir e, bi anîna wan li ser rûyê erdê (di madenê de kanên sulfîdî).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u08-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Karışımlar ve Ayırma Teknikleri konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Mixtures & Separation Techniques?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Mischungen & Trennverfahren zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Mélanges & Techniques de Séparation ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Смеси и методы разделения»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"المخاليط وطرق الفصل\"؟",
        "zh": "根据“混合物与分离技术”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Têkelî û Rêbazên Veqetandinê\" de rast e?"
      },
      "options": [
        {
          "tr": "Ekstraksiyon (özütleme), karışımdaki bir bileşenin uygun bir çözücü yardımıyla çekilip ayrılmasıdır (çay demleme, şeker pancarından şeker).",
          "en": "Extraction is the separation of a component from a mixture with the help of a suitable solvent (tea brewing, sugar from sugar beets).",
          "de": "Unter Extraktion versteht man die Abtrennung einer Komponente aus einem Gemisch mit Hilfe eines geeigneten Lösungsmittels (Teeaufguss, Zucker aus Zuckerrüben).",
          "fr": "L'extraction est la séparation d'un composant d'un mélange à l'aide d'un solvant approprié (infusion de thé, sucre de betterave sucrière).",
          "ru": "Экстракция – это отделение компонента от смеси с помощью подходящего растворителя (чайной заварки, сахара из сахарной свеклы).",
          "ar": "الاستخلاص هو فصل أحد المكونات عن الخليط بمساعدة مذيب مناسب (تخمير الشاي، السكر من بنجر السكر).",
          "zh": "萃取是借助合适的溶剂（泡茶、甜菜中的糖）从混合物中分离出一种成分。",
          "ku": "Derxistin veqetandina hêmanek ji tevlêbûnekê bi alîkariya çareserkerek maqûl (çêkirina çayê, şekirê ji bexçeyên şekir) ye."
        },
        {
          "tr": "Apolar yağ lekesi polar suyla kolayca çözünür.",
          "en": "Non-polar oil stain dissolves easily with polar water.",
          "de": "Unpolare Ölflecken lösen sich leicht mit polarem Wasser.",
          "fr": "La tache d'huile non polaire se dissout facilement avec de l'eau polaire.",
          "ru": "Неполярное масляное пятно легко растворяется полярной водой.",
          "ar": "تذوب وصمة الزيت غير القطبية بسهولة بالماء القطبي.",
          "zh": "非极性油污很容易被极性水溶解。",
          "ku": "Lekeya rûnê ne-polar bi ava polar bi hêsanî dihele."
        },
        {
          "tr": "Kolloitler mikroskopsuz bakıldığında da heterojen görünür ve hemen çöker.",
          "en": "Even when viewed without a microscope, colloids appear heterogeneous and precipitate immediately.",
          "de": "Selbst bei Betrachtung ohne Mikroskop erscheinen Kolloide heterogen und fallen sofort aus.",
          "fr": "Même observés sans microscope, les colloïdes semblent hétérogènes et précipitent immédiatement.",
          "ru": "Даже при осмотре без микроскопа коллоиды кажутся неоднородными и сразу же выпадают в осадок.",
          "ar": "حتى عند النظر إليها بدون مجهر، تبدو الغرويات غير متجانسة وتترسب على الفور.",
          "zh": "即使不用显微镜观察，胶体也会显得不均匀并立即沉淀。",
          "ku": "Dema ku bêyî mîkroskopê were temaşe kirin jî, koloid heterojen xuya dikin û yekser dibarin."
        },
        {
          "tr": "Duman katının sıvıda dağıldığı süspansiyondur.",
          "en": "Smoke is a suspension in which the solid is dispersed in the liquid.",
          "de": "Rauch ist eine Suspension, in der der Feststoff in der Flüssigkeit dispergiert ist.",
          "fr": "La fumée est une suspension dans laquelle le solide est dispersé dans le liquide.",
          "ru": "Дым представляет собой суспензию, в которой твердое вещество рассеяно в жидкости.",
          "ar": "الدخان عبارة عن معلق يتم فيه تشتيت المادة الصلبة في السائل.",
          "zh": "烟雾是固体分散在液体中的悬浮液。",
          "ku": "Dûman suspensionek e ku tê de maddeya hişk di şilekê de belav dibe."
        },
        {
          "tr": "ppm hesaplanırken çarpan 100'dür.",
          "en": "When calculating ppm, the multiplier is 100.",
          "de": "Bei der Berechnung von ppm beträgt der Multiplikator 100.",
          "fr": "Lors du calcul du ppm, le multiplicateur est de 100.",
          "ru": "При расчете ppm множитель равен 100.",
          "ar": "عند حساب جزء في المليون، يكون المضاعف 100.",
          "zh": "计算 ppm 时，乘数为 100。",
          "ku": "Dema ku ppm tê hesibandin, pirjimar 100 e."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Ekstraksiyon (özütleme), karışımdaki bir bileşenin uygun bir çözücü yardımıyla çekilip ayrılmasıdır (çay demleme, şeker pancarından şeker).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Extraction is the separation of a component from a mixture with the help of a suitable solvent (tea brewing, sugar from sugar beets).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Unter Extraktion versteht man die Abtrennung einer Komponente aus einem Gemisch mit Hilfe eines geeigneten Lösungsmittels (Teeaufguss, Zucker aus Zuckerrüben).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'extraction est la séparation d'un composant d'un mélange à l'aide d'un solvant approprié (infusion de thé, sucre de betterave sucrière).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Экстракция – это отделение компонента от смеси с помощью подходящего растворителя (чайной заварки, сахара из сахарной свеклы).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الاستخلاص هو فصل أحد المكونات عن الخليط بمساعدة مذيب مناسب (تخمير الشاي، السكر من بنجر السكر).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“萃取是借助合适的溶剂（泡茶、甜菜中的糖）从混合物中分离出一种成分。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Derxistin veqetandina hêmanek ji tevlêbûnekê bi alîkariya çareserkerek maqûl (çêkirina çayê, şekirê ji bexçeyên şekir) ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u08-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Karışımlar ve Ayırma Teknikleri sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Mixtures & Separation Techniques, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Mischungen & Trennverfahren: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Mélanges & Techniques de Séparation, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Смеси и методы разделения», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"المخاليط وطرق الفصل\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“混合物与分离技术”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Têkelî û Rêbazên Veqetandinê\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Tuzlu su kaynarken sıcaklığı baştan itibaren sabit kalır.",
          "en": "While salt water boils, its temperature remains constant from the beginning.",
          "de": "Während Salzwasser kocht, bleibt seine Temperatur von Anfang an konstant.",
          "fr": "Pendant que l’eau salée bout, sa température reste constante depuis le début.",
          "ru": "Пока соленая вода кипит, ее температура с самого начала остается постоянной.",
          "ar": "فبينما يغلي الماء المالح، تظل درجة حرارته ثابتة منذ البداية.",
          "zh": "当盐水沸腾时，其温度从一开始就保持恒定。",
          "ku": "Dema ava şor dikele, germahiya wê ji destpêkê ve sabit dimîne."
        },
        {
          "tr": "Diyaliz, küçük iyon ve moleküllerin yarı geçirgen zardan geçirilerek kolloidal boyutlu taneciklerden ayrılmasıdır (böbrek hastalarında kan temizliği).",
          "en": "Dialysis is the separation of small ions and molecules from colloidal-sized particles by passing them through a semi-permeable membrane (blood cleansing in kidney patients).",
          "de": "Dialyse ist die Abtrennung kleiner Ionen und Moleküle von kolloidalen Teilchen, indem sie durch eine semipermeable Membran hindurchtreten (Blutreinigung bei Nierenpatienten).",
          "fr": "La dialyse est la séparation des petits ions et molécules des particules de taille colloïdale, qui passent à travers une membrane semi-perméable (épuration du sang chez les insuffisants rénaux).",
          "ru": "Диализ — это отделение малых ионов и молекул от частиц коллоидного размера путём их прохождения через полупроницаемую мембрану (очистка крови у почечных больных).",
          "ar": "الديلزة هي فصل الأيونات والجزيئات الصغيرة عن الجسيمات الغروية الحجم بتمريرها عبر غشاء شبه منفذ (تنقية الدم لدى مرضى الكلى).",
          "zh": "透析是让小的离子和分子透过半透膜，从而与胶体大小的粒子分离（肾病患者的血液净化）。",
          "ku": "Dialîz veqetandina îyon û molekulên biçûk ji perçeyên bi mezinahiya koloîdal e, bi derbaskirina wan di parzûneke nîv-derbasbar re (paqijkirina xwînê di nexweşên gurçikan de)."
        },
        {
          "tr": "Süspansiyon tek fazlı homojen bir çözeltidir.",
          "en": "The suspension is a single-phase homogeneous solution.",
          "de": "Die Suspension ist eine einphasige homogene Lösung.",
          "fr": "La suspension est une solution homogène monophasée.",
          "ru": "Суспензия представляет собой однофазный гомогенный раствор.",
          "ar": "المعلق محلول متجانس أحادي الطور.",
          "zh": "该悬浮液是单相均相溶液。",
          "ku": "Süspansiyon çareseriyeke homojen a yek-qonaxî ye."
        },
        {
          "tr": "Gerçek homojen çözeltilerde ışık demeti kuvvetle saçılır ve görünür.",
          "en": "In true homogeneous solutions, the light beam is strongly scattered and visible.",
          "de": "In wirklich homogenen Lösungen ist der Lichtstrahl stark gestreut und sichtbar.",
          "fr": "Dans les solutions véritablement homogènes, le faisceau lumineux est fortement diffusé et visible.",
          "ru": "В истинно однородных растворах луч света сильно рассеивается и виден.",
          "ar": "في المحاليل المتجانسة الحقيقية، يكون شعاع الضوء منتشرًا بقوة ومرئيًا.",
          "zh": "在真溶液中，光束被强烈散射并且可见。",
          "ku": "Di çareseriyên homojen ên rastîn de, tîrêjê ronahiyê bi tundî belav dibe û xuya dibe."
        },
        {
          "tr": "Ayrımsal damıtma yoğunluk farkına dayalı bir ayırma tekniğidir.",
          "en": "Fractional distillation is a separation technique based on density difference.",
          "de": "Die fraktionierte Destillation ist eine Trenntechnik, die auf Dichteunterschieden basiert.",
          "fr": "La distillation fractionnée est une technique de séparation basée sur la différence de densité.",
          "ru": "Фракционная перегонка — это метод разделения, основанный на разнице плотностей.",
          "ar": "التقطير التجزيئي هو تقنية فصل تعتمد على اختلاف الكثافة.",
          "zh": "分馏是一种基于密度差的分离技术。",
          "ku": "Distîlasyona fraksîyonî teknîkek veqetandinê ye ku li ser bingeha ciyawaziya dendikê ye."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Diyaliz, küçük iyon ve moleküllerin yarı geçirgen zardan geçirilerek kolloidal boyutlu taneciklerden ayrılmasıdır (böbrek hastalarında kan temizliği).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Dialysis is the separation of small ions and molecules from colloidal-sized particles by passing them through a semi-permeable membrane (blood cleansing in kidney patients).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Dialyse ist die Abtrennung kleiner Ionen und Moleküle von kolloidalen Teilchen, indem sie durch eine semipermeable Membran hindurchtreten (Blutreinigung bei Nierenpatienten).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La dialyse est la séparation des petits ions et molécules des particules de taille colloïdale, qui passent à travers une membrane semi-perméable (épuration du sang chez les insuffisants rénaux).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Диализ — это отделение малых ионов и молекул от частиц коллоидного размера путём их прохождения через полупроницаемую мембрану (очистка крови у почечных больных).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الديلزة هي فصل الأيونات والجزيئات الصغيرة عن الجسيمات الغروية الحجم بتمريرها عبر غشاء شبه منفذ (تنقية الدم لدى مرضى الكلى).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“透析是让小的离子和分子透过半透膜，从而与胶体大小的粒子分离（肾病患者的血液净化）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Dialîz veqetandina îyon û molekulên biçûk ji perçeyên bi mezinahiya koloîdal e, bi derbaskirina wan di parzûneke nîv-derbasbar re (paqijkirina xwînê di nexweşên gurçikan de).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u08-twin13",
      "stem": {
        "tr": "Aşağıda Karışımlar ve Ayırma Teknikleri ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Mixtures & Separation Techniques, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Mischungen & Trennverfahren: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Mélanges & Techniques de Séparation, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Смеси и методы разделения», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"المخاليط وطرق الفصل\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“混合物与分离技术”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Têkelî û Rêbazên Veqetandinê\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Doygun çözeltiye tuz eklenirse çözelti daha derişik hale gelir.",
          "en": "If salt is added to a saturated solution, the solution becomes more concentrated.",
          "de": "Wenn einer gesättigten Lösung Salz zugesetzt wird, wird die Lösung konzentrierter.",
          "fr": "Si du sel est ajouté à une solution saturée, la solution devient plus concentrée.",
          "ru": "Если к насыщенному раствору добавить соль, раствор станет более концентрированным.",
          "ar": "إذا أضيف الملح إلى محلول مشبع، يصبح المحلول أكثر تركيزا.",
          "zh": "如果将盐添加到饱和溶液中，溶液会变得更加浓缩。",
          "ku": "Heke xwê li çareseriyeke têrbûyî were zêdekirin, çareserî bêtir derîşîk dibe."
        },
        {
          "tr": "Zeytinyağı-su karışımı ayrımsal damıtma ile ayrılır.",
          "en": "The olive oil-water mixture is separated by fractional distillation.",
          "de": "Das Olivenöl-Wasser-Gemisch wird durch fraktionierte Destillation getrennt.",
          "fr": "Le mélange huile d'olive-eau est séparé par distillation fractionnée.",
          "ru": "Смесь оливкового масла и воды разделяют фракционной перегонкой.",
          "ar": "يتم فصل خليط زيت الزيتون والماء عن طريق التقطير التجزيئي.",
          "zh": "橄榄油-水混合物通过分馏分离。",
          "ku": "Tevliheviya rûnê zeytûn-avê bi distîlasyona fraksîyonî tê veqetandin."
        },
        {
          "tr": "Çözeltiye su eklenirse (seyreltme) derişim azalır; formül C1m1 = C2m2'dir.",
          "en": "If water is added to the solution (dilution), the concentration decreases; The formula is C1m1 = C2m2.",
          "de": "Wird der Lösung Wasser zugesetzt (Verdünnung), sinkt die Konzentration; Die Formel lautet C1m1 = C2m2.",
          "fr": "Si de l'eau est ajoutée à la solution (dilution), la concentration diminue ; La formule est C1m1 = C2m2.",
          "ru": "Если к раствору добавляют воду (разбавление), концентрация снижается; Формула: C1m1 = C2m2.",
          "ar": "إذا تمت إضافة الماء إلى المحلول (التخفيف)، ينخفض ​​التركيز؛ الصيغة هي C1m1 = C2m2.",
          "zh": "如果向溶液中添加水（稀释），浓度会降低；公式为C1m1 = C2m2。",
          "ku": "Ger av li çareseriyê were zêdekirin (seyrelandin), derîşî kêm dibe; formula C1m1 = C2m2 ye."
        },
        {
          "tr": "Kütlece yüzde derişim çözünen kütlesinin çözücü kütlesine bölünmesiyle bulunur.",
          "en": "Percent concentration by mass is calculated by dividing the mass of the solute by the mass of the solvent.",
          "de": "Die Massenkonzentration in Prozent wird berechnet, indem die Masse des gelösten Stoffes durch die Masse des Lösungsmittels dividiert wird.",
          "fr": "La concentration en pourcentage en masse est calculée en divisant la masse du soluté par la masse du solvant.",
          "ru": "Массовая процентная концентрация рассчитывается путем деления массы растворенного вещества на массу растворителя.",
          "ar": "يتم حساب التركيز المئوي للكتلة عن طريق قسمة كتلة المذاب على كتلة المذيب.",
          "zh": "质量百分比浓度通过溶质质量除以溶剂质量来计算。",
          "ku": "Rêjeya girseyî ya ji sedî bi parvekirina girseya madeya helyayî li girseya helkerê tê dîtin."
        },
        {
          "tr": "Ayırma hunisi kaynama noktaları farklı homojen karışımları ayırır.",
          "en": "The separatory funnel separates homogeneous mixtures with different boiling points.",
          "de": "Der Scheidetrichter trennt homogene Gemische mit unterschiedlichen Siedepunkten.",
          "fr": "L'entonnoir séparateur sépare des mélanges homogènes avec différents points d'ébullition.",
          "ru": "Делительная воронка разделяет однородные смеси с разной температурой кипения.",
          "ar": "يقوم القمع الفاصل بفصل المخاليط المتجانسة ذات نقاط غليان مختلفة.",
          "zh": "分液漏斗分离具有不同沸点的均匀混合物。",
          "ku": "Hunîya veqetandinê tevliheviyên homojen ên bi xalên kelandinê yên cihêreng vediqetîne."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Çözeltiye su eklenirse (seyreltme) derişim azalır; formül C1m1 = C2m2'dir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If water is added to the solution (dilution), the concentration decreases; The formula is C1m1 = C2m2.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wird der Lösung Wasser zugesetzt (Verdünnung), sinkt die Konzentration; Die Formel lautet C1m1 = C2m2.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si de l'eau est ajoutée à la solution (dilution), la concentration diminue ; La formule est C1m1 = C2m2.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если к раствору добавляют воду (разбавление), концентрация снижается; Формула: C1m1 = C2m2.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا تمت إضافة الماء إلى المحلول (التخفيف)، ينخفض ​​التركيز؛ الصيغة هي C1m1 = C2m2.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果向溶液中添加水（稀释），浓度会降低；公式为C1m1 = C2m2。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger av li çareseriyê were zêdekirin (seyrelandin), derîşî kêm dibe; formula C1m1 = C2m2 ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u08-twin14",
      "stem": {
        "tr": "Karışımlar ve Ayırma Teknikleri konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Mixtures & Separation Techniques, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Mischungen & Trennverfahren: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Mélanges & Techniques de Séparation, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Смеси и методы разделения», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"المخاليط وطرق الفصل\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“混合物与分离技术”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Têkelî û Rêbazên Veqetandinê\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Kolloitler mikroskopsuz bakıldığında da heterojen görünür ve hemen çöker.",
          "en": "Even when viewed without a microscope, colloids appear heterogeneous and precipitate immediately.",
          "de": "Selbst bei Betrachtung ohne Mikroskop erscheinen Kolloide heterogen und fallen sofort aus.",
          "fr": "Même observés sans microscope, les colloïdes semblent hétérogènes et précipitent immédiatement.",
          "ru": "Даже при осмотре без микроскопа коллоиды кажутся неоднородными и сразу же выпадают в осадок.",
          "ar": "حتى عند النظر إليها بدون مجهر، تبدو الغرويات غير متجانسة وتترسب على الفور.",
          "zh": "即使不用显微镜观察，胶体也会显得不均匀并立即沉淀。",
          "ku": "Dema ku bêyî mîkroskopê were temaşe kirin jî, koloid heterojen xuya dikin û yekser dibarin."
        },
        {
          "tr": "Duman katının sıvıda dağıldığı süspansiyondur.",
          "en": "Smoke is a suspension in which the solid is dispersed in the liquid.",
          "de": "Rauch ist eine Suspension, in der der Feststoff in der Flüssigkeit dispergiert ist.",
          "fr": "La fumée est une suspension dans laquelle le solide est dispersé dans le liquide.",
          "ru": "Дым представляет собой суспензию, в которой твердое вещество рассеяно в жидкости.",
          "ar": "الدخان عبارة عن معلق يتم فيه تشتيت المادة الصلبة في السائل.",
          "zh": "烟雾是固体分散在液体中的悬浮液。",
          "ku": "Dûman suspensionek e ku tê de maddeya hişk di şilekê de belav dibe."
        },
        {
          "tr": "ppm hesaplanırken çarpan 100'dür.",
          "en": "When calculating ppm, the multiplier is 100.",
          "de": "Bei der Berechnung von ppm beträgt der Multiplikator 100.",
          "fr": "Lors du calcul du ppm, le multiplicateur est de 100.",
          "ru": "При расчете ppm множитель равен 100.",
          "ar": "عند حساب جزء في المليون، يكون المضاعف 100.",
          "zh": "计算 ppm 时，乘数为 100。",
          "ku": "Dema ku ppm tê hesibandin, pirjimar 100 e."
        },
        {
          "tr": "\"Benzer benzeri çözer\" kuralı: Polar maddeler polar çözücülerde, apolar maddeler apolar çözücülerde iyi çözünür.",
          "en": "\"Like dissolves like\" rule: Polar substances dissolve well in polar solvents, and nonpolar substances dissolve well in nonpolar solvents.",
          "de": "„Gleiches löst Gleiches auf“-Regel: Polare Stoffe lösen sich gut in polaren Lösungsmitteln, unpolare Stoffe lösen sich gut in unpolaren Lösungsmitteln.",
          "fr": "Règle « Le semblable se dissout comme » : les substances polaires se dissolvent bien dans les solvants polaires et les substances non polaires se dissolvent bien dans les solvants non polaires.",
          "ru": "Правило «Подобное растворяется в подобном»: полярные вещества хорошо растворяются в полярных растворителях, а неполярные вещества хорошо растворяются в неполярных растворителях.",
          "ar": "قاعدة \"المثل يذوب مثل\": المواد القطبية تذوب جيدًا في المذيبات القطبية، والمواد غير القطبية تذوب جيدًا في المذيبات غير القطبية.",
          "zh": "“相似相溶”法则：极性物质在极性溶剂中溶解良好，非极性物质在非极性溶剂中溶解良好。",
          "ku": "Qaydeya \"Wekî mîna xwe dihelîne\": Madeyên polar di halên polar de baş dihelin, û madeyên nepolar jî di halên nepolar de baş dihelin."
        },
        {
          "tr": "Flotasyon mıknatıs yardımıyla demir ayırma işlemidir.",
          "en": "Flotation is the process of separating iron with the help of a magnet.",
          "de": "Bei der Flotation wird Eisen mit Hilfe eines Magneten abgetrennt.",
          "fr": "La flottation est le processus de séparation du fer à l'aide d'un aimant.",
          "ru": "Флотация – это процесс отделения железа с помощью магнита.",
          "ar": "التعويم هو عملية فصل الحديد بمساعدة المغناطيس.",
          "zh": "浮选是借助磁铁分离铁的过程。",
          "ku": "Flotasyon pêvajoya veqetandina hesin bi alîkariya magnetekê ye."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"\"Benzer benzeri çözer\" kuralı: Polar maddeler polar çözücülerde, apolar maddeler apolar çözücülerde iyi çözünür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"\"Like dissolves like\" rule: Polar substances dissolve well in polar solvents, and nonpolar substances dissolve well in nonpolar solvents.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"„Gleiches löst Gleiches auf“-Regel: Polare Stoffe lösen sich gut in polaren Lösungsmitteln, unpolare Stoffe lösen sich gut in unpolaren Lösungsmitteln.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Règle « Le semblable se dissout comme » : les substances polaires se dissolvent bien dans les solvants polaires et les substances non polaires se dissolvent bien dans les solvants non polaires.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Правило «Подобное растворяется в подобном»: полярные вещества хорошо растворяются в полярных растворителях, а неполярные вещества хорошо растворяются в неполярных растворителях.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قاعدة \"المثل يذوب مثل\": المواد القطبية تذوب جيدًا في المذيبات القطبية، والمواد غير القطبية تذوب جيدًا في المذيبات غير القطبية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：““相似相溶”法则：极性物质在极性溶剂中溶解良好，非极性物质在非极性溶剂中溶解良好。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Qaydeya \"Wekî mîna xwe dihelîne\": Madeyên polar di halên polar de baş dihelin, û madeyên nepolar jî di halên nepolar de baş dihelin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u08-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Karışımlar ve Ayırma Teknikleri ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Mixtures & Separation Techniques, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Mischungen & Trennverfahren: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Mélanges & Techniques de Séparation, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Смеси и методы разделения», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"المخاليط وطرق الفصل\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“混合物与分离技术”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Têkelî û Rêbazên Veqetandinê\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Süspansiyon tek fazlı homojen bir çözeltidir.",
          "en": "The suspension is a single-phase homogeneous solution.",
          "de": "Die Suspension ist eine einphasige homogene Lösung.",
          "fr": "La suspension est une solution homogène monophasée.",
          "ru": "Суспензия представляет собой однофазный гомогенный раствор.",
          "ar": "المعلق محلول متجانس أحادي الطور.",
          "zh": "该悬浮液是单相均相溶液。",
          "ku": "Süspansiyon çareseriyeke homojen a yek-qonaxî ye."
        },
        {
          "tr": "Gerçek homojen çözeltilerde ışık demeti kuvvetle saçılır ve görünür.",
          "en": "In true homogeneous solutions, the light beam is strongly scattered and visible.",
          "de": "In wirklich homogenen Lösungen ist der Lichtstrahl stark gestreut und sichtbar.",
          "fr": "Dans les solutions véritablement homogènes, le faisceau lumineux est fortement diffusé et visible.",
          "ru": "В истинно однородных растворах луч света сильно рассеивается и виден.",
          "ar": "في المحاليل المتجانسة الحقيقية، يكون شعاع الضوء منتشرًا بقوة ومرئيًا.",
          "zh": "在真溶液中，光束被强烈散射并且可见。",
          "ku": "Di çareseriyên homojen ên rastîn de, tîrêjê ronahiyê bi tundî belav dibe û xuya dibe."
        },
        {
          "tr": "Ayrımsal damıtma yoğunluk farkına dayalı bir ayırma tekniğidir.",
          "en": "Fractional distillation is a separation technique based on density difference.",
          "de": "Die fraktionierte Destillation ist eine Trenntechnik, die auf Dichteunterschieden basiert.",
          "fr": "La distillation fractionnée est une technique de séparation basée sur la différence de densité.",
          "ru": "Фракционная перегонка — это метод разделения, основанный на разнице плотностей.",
          "ar": "التقطير التجزيئي هو تقنية فصل تعتمد على اختلاف الكثافة.",
          "zh": "分馏是一种基于密度差的分离技术。",
          "ku": "Distîlasyona fraksîyonî teknîkek veqetandinê ye ku li ser bingeha ciyawaziya dendikê ye."
        },
        {
          "tr": "Özütleme tanecik boyutu farkına dayalı eleme yöntemidir.",
          "en": "Extraction is a screening method based on particle size difference.",
          "de": "Die Extraktion ist eine Siebmethode, die auf Partikelgrößenunterschieden basiert.",
          "fr": "L'extraction est une méthode de criblage basée sur la différence de taille des particules.",
          "ru": "Экстракция — это метод отбора, основанный на разнице в размерах частиц.",
          "ar": "الاستخراج هو طريقة فحص تعتمد على اختلاف حجم الجسيمات.",
          "zh": "萃取是一种基于粒度差异的筛选方法。",
          "ku": "Derxistin rêbazek vekolînek e ku li ser bingeha cûdahiya mezinahiya parçikê ye."
        },
        {
          "tr": "Tuzlu suyun kaynamaya başlama sıcaklığı saf sudan yüksektir ve kaynama süresince doymamışken sıcaklık artmaya devam eder.",
          "en": "The boiling temperature of salt water is higher than pure water, and the temperature continues to increase during boiling while it is not saturated.",
          "de": "Die Siedetemperatur von Salzwasser ist höher als die von reinem Wasser und die Temperatur steigt während des Kochens weiter an, solange es nicht gesättigt ist.",
          "fr": "La température d’ébullition de l’eau salée est supérieure à celle de l’eau pure et la température continue d’augmenter pendant l’ébullition tant qu’elle n’est pas saturée.",
          "ru": "Температура кипения соленой воды выше, чем у чистой воды, и температура продолжает повышаться во время кипения, пока она не насыщена.",
          "ar": "درجة حرارة غليان الماء المالح أعلى من الماء النقي، وتستمر درجة الحرارة في الارتفاع أثناء الغليان وهو غير مشبع.",
          "zh": "盐水的沸腾温度比纯水高，并且在沸腾过程中温度不断升高，但尚未饱和。",
          "ku": "Germahiya kelandinê ya ava şor ji ava paqij bilindtir e û di dema kelandinê de dema ku têr nebe germahî zêde dibe."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Tuzlu suyun kaynamaya başlama sıcaklığı saf sudan yüksektir ve kaynama süresince doymamışken sıcaklık artmaya devam eder.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The boiling temperature of salt water is higher than pure water, and the temperature continues to increase during boiling while it is not saturated.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Siedetemperatur von Salzwasser ist höher als die von reinem Wasser und die Temperatur steigt während des Kochens weiter an, solange es nicht gesättigt ist.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La température d’ébullition de l’eau salée est supérieure à celle de l’eau pure et la température continue d’augmenter pendant l’ébullition tant qu’elle n’est pas saturée.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Температура кипения соленой воды выше, чем у чистой воды, и температура продолжает повышаться во время кипения, пока она не насыщена.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"درجة حرارة غليان الماء المالح أعلى من الماء النقي، وتستمر درجة الحرارة في الارتفاع أثناء الغليان وهو غير مشبع.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“盐水的沸腾温度比纯水高，并且在沸腾过程中温度不断升高，但尚未饱和。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Germahiya kelandinê ya ava şor ji ava paqij bilindtir e û di dema kelandinê de dema ku têr nebe germahî zêde dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u08-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Karışımlar ve Ayırma Teknikleri konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Mixtures & Separation Techniques, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Mischungen & Trennverfahren die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Mélanges & Techniques de Séparation, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Смеси и методы разделения», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"المخاليط وطرق الفصل\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“混合物与分离技术”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Têkelî û Rêbazên Veqetandinê\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Doygun çözeltiye aynı sıcaklıkta bir miktar daha çözünen eklenirse çözünmeden dipte çöker ve derişim değişmez.",
          "en": "If more solute is added to the saturated solution at the same temperature, it will precipitate to the bottom without dissolving and the concentration will not change.",
          "de": "Wenn der gesättigten Lösung bei gleicher Temperatur mehr gelöster Stoff zugesetzt wird, fällt dieser am Boden aus, ohne sich aufzulösen, und die Konzentration ändert sich nicht.",
          "fr": "Si davantage de soluté est ajouté à la solution saturée à la même température, il précipitera au fond sans se dissoudre et la concentration ne changera pas.",
          "ru": "Если к насыщенному раствору при той же температуре добавить больше растворенного вещества, оно выпадет в осадок на дно, не растворяясь, и концентрация не изменится.",
          "ar": "إذا تمت إضافة المزيد من المذاب إلى المحلول المشبع عند نفس درجة الحرارة، فسوف يترسب إلى القاع دون أن يذوب ولن يتغير التركيز.",
          "zh": "如果在相同温度下向饱和溶液中加入更多的溶质，它会沉淀到底部而不溶解，浓度不会改变。",
          "ku": "Ger di heman germahiyê de zêdetir maddeya çareserkirî li çareseriya têrbûyî were zêdekirin, ew ê bêyî ku bihele ber bi binî ve biherike û konsantre wê neguhere."
        },
        {
          "tr": "Zeytinyağı-su karışımı ayrımsal damıtma ile ayrılır.",
          "en": "The olive oil-water mixture is separated by fractional distillation.",
          "de": "Das Olivenöl-Wasser-Gemisch wird durch fraktionierte Destillation getrennt.",
          "fr": "Le mélange huile d'olive-eau est séparé par distillation fractionnée.",
          "ru": "Смесь оливкового масла и воды разделяют фракционной перегонкой.",
          "ar": "يتم فصل خليط زيت الزيتون والماء عن طريق التقطير التجزيئي.",
          "zh": "橄榄油-水混合物通过分馏分离。",
          "ku": "Tevliheviya rûnê zeytûn-avê bi distîlasyona fraksîyonî tê veqetandin."
        },
        {
          "tr": "Kütlece yüzde derişim çözünen kütlesinin çözücü kütlesine bölünmesiyle bulunur.",
          "en": "Percent concentration by mass is calculated by dividing the mass of the solute by the mass of the solvent.",
          "de": "Die Massenkonzentration in Prozent wird berechnet, indem die Masse des gelösten Stoffes durch die Masse des Lösungsmittels dividiert wird.",
          "fr": "La concentration en pourcentage en masse est calculée en divisant la masse du soluté par la masse du solvant.",
          "ru": "Массовая процентная концентрация рассчитывается путем деления массы растворенного вещества на массу растворителя.",
          "ar": "يتم حساب التركيز المئوي للكتلة عن طريق قسمة كتلة المذاب على كتلة المذيب.",
          "zh": "质量百分比浓度通过溶质质量除以溶剂质量来计算。",
          "ku": "Rêjeya girseyî ya ji sedî bi parvekirina girseya madeya helyayî li girseya helkerê tê dîtin."
        },
        {
          "tr": "Ayırma hunisi kaynama noktaları farklı homojen karışımları ayırır.",
          "en": "The separatory funnel separates homogeneous mixtures with different boiling points.",
          "de": "Der Scheidetrichter trennt homogene Gemische mit unterschiedlichen Siedepunkten.",
          "fr": "L'entonnoir séparateur sépare des mélanges homogènes avec différents points d'ébullition.",
          "ru": "Делительная воронка разделяет однородные смеси с разной температурой кипения.",
          "ar": "يقوم القمع الفاصل بفصل المخاليط المتجانسة ذات نقاط غليان مختلفة.",
          "zh": "分液漏斗分离具有不同沸点的均匀混合物。",
          "ku": "Hunîya veqetandinê tevliheviyên homojen ên bi xalên kelandinê yên cihêreng vediqetîne."
        },
        {
          "tr": "Diyaliz santrifüj ile çöktürme işlemidir.",
          "en": "Dialysis is a centrifugal precipitation process.",
          "de": "Bei der Dialyse handelt es sich um ein zentrifugales Fällungsverfahren.",
          "fr": "La dialyse est un processus de précipitation centrifuge.",
          "ru": "Диализ – это процесс осаждения центрифугированием.",
          "ar": "الديلزة عملية ترسيب بالطرد المركزي.",
          "zh": "透析是一种离心沉淀过程。",
          "ku": "Dialîz pêvajoyeke niştandinê bi santrîfûjê ye."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Doygun çözeltiye aynı sıcaklıkta bir miktar daha çözünen eklenirse çözünmeden dipte çöker ve derişim değişmez.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If more solute is added to the saturated solution at the same temperature, it will precipitate to the bottom without dissolving and the concentration will not change.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn der gesättigten Lösung bei gleicher Temperatur mehr gelöster Stoff zugesetzt wird, fällt dieser am Boden aus, ohne sich aufzulösen, und die Konzentration ändert sich nicht.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si davantage de soluté est ajouté à la solution saturée à la même température, il précipitera au fond sans se dissoudre et la concentration ne changera pas.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если к насыщенному раствору при той же температуре добавить больше растворенного вещества, оно выпадет в осадок на дно, не растворяясь, и концентрация не изменится.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا تمت إضافة المزيد من المذاب إلى المحلول المشبع عند نفس درجة الحرارة، فسوف يترسب إلى القاع دون أن يذوب ولن يتغير التركيز.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果在相同温度下向饱和溶液中加入更多的溶质，它会沉淀到底部而不溶解，浓度不会改变。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger di heman germahiyê de zêdetir maddeya çareserkirî li çareseriya têrbûyî were zêdekirin, ew ê bêyî ku bihele ber bi binî ve biherike û konsantre wê neguhere.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit08;
