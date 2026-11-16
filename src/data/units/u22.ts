import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit22: ChemistryUnitSeedData = {
  "id": "u22",
  "order": 22,
  "exam": "AYT",
  "grade": 12,
  "title": {
    "tr": "Kimya ve Elektrik: Elektroliz ve Korozyon",
    "en": "Electrochemistry: Electrolysis & Corrosion",
    "de": "Elektrolyse & Korrosion",
    "fr": "Électrolyse & Corrosion",
    "ru": "Электролиз и коррозия",
    "ar": "الكيمياء والكهرباء: التحليل الكهربائي والتآكل",
    "zh": "电解与腐蚀",
    "ku": "Kîmya û Elektrîk: Elektrolîz û Korozyon"
  },
  "subtitle": {
    "tr": "Faraday Kanunları, Suyun Elektrolizi ve Kurban Anot",
    "en": "Faraday Laws, Water Split & Sacrificial Anode",
    "de": "Faradaysche Gesetze, Wasserelektrolyse und Opferanode",
    "fr": "Lois de Faraday, électrolyse de l'eau et anode sacrificielle",
    "ru": "Законы Фарадея, электролиз воды и протекторная защита",
    "ar": "قوانين فاراداي والتحليل الكهربائي للماء والمصعد المضحّي",
    "zh": "法拉第定律、电解水和牺牲阳极法",
    "ku": "Zagonên Faraday, Elektrolîza Avê û Anoda Qurbanî"
  },
  "facts": [
    {
      "id": "u22-f01",
      "fact": {
        "tr": "Elektroliz, istemsiz (E°pil < 0) bir redoks tepkimesinin dışarıdan elektrik enerjisi verilerek zorla gerçekleştirilmesidir.",
        "en": "Electrolysis is driving a non-spontaneous (E°cell < 0) redox reaction by supplying electrical energy from an external source.",
        "de": "Elektrolyse ist die erzwungene Durchführung einer nicht freiwilligen (E°Zelle < 0) Redoxreaktion durch Zufuhr elektrischer Energie von außen.",
        "fr": "L'électrolyse consiste à forcer une réaction redox non spontanée (E°pile < 0) en fournissant de l'énergie électrique depuis l'extérieur.",
        "ru": "Электролиз — принудительное проведение несамопроизвольной (E°эл < 0) окислительно-восстановительной реакции за счёт электрической энергии внешнего источника.",
        "ar": "التحليل الكهربائي هو إجبار تفاعل أكسدة واختزال غير تلقائي (E°cell < 0) على الحدوث بتزويده بطاقة كهربائية من مصدر خارجي.",
        "zh": "电解是利用外加电能迫使非自发(E°电池 < 0)的氧化还原反应发生的过程。",
        "ku": "Elektrolîz pêkanîna bi zorê ya reaksiyoneke redoksê ya ne-xweber (E°pîl < 0) e, bi dayîna enerjiya elektrîkê ji derve."
      },
      "trap": {
        "tr": "Elektroliz kendiliğinden elektrik üreten bir galvanik sistemdir.",
        "en": "Electrolysis is a galvanic system that spontaneously produces electricity.",
        "de": "Elektrolyse ist ein galvanisches System, das spontan Strom erzeugt.",
        "fr": "L'électrolyse est un système galvanique qui produit spontanément de l'électricité.",
        "ru": "Электролиз — гальваническая система, которая самопроизвольно вырабатывает электрический ток.",
        "ar": "التحليل الكهربائي هو نظام جلفاني ينتج الكهرباء تلقائيًا.",
        "zh": "电解是一种能自发产生电能的原电池体系。",
        "ku": "Elektrolîz sîstemeke galvanîk e ku bi xwe elektrîkê hildiberîne."
      },
      "whyTrapIsFalse": {
        "tr": "Bu tanım pile (galvanik hücreye) aittir. Elektroliz hücresi elektrik üretmez; tersine dış kaynaktan elektrik enerjisi harcayarak istemsiz bir tepkimeyi yürütür.",
        "en": "This description belongs to a galvanic cell. An electrolytic cell does not produce electricity; on the contrary, it consumes electrical energy from an external source to drive a non-spontaneous reaction.",
        "de": "Diese Beschreibung gilt für eine galvanische Zelle. Eine Elektrolysezelle erzeugt keinen Strom, sondern verbraucht elektrische Energie aus einer äußeren Quelle, um eine nicht freiwillige Reaktion zu erzwingen.",
        "fr": "Cette description correspond à une pile galvanique. Une cellule d'électrolyse ne produit pas d'électricité ; au contraire, elle consomme l'énergie électrique d'une source extérieure pour forcer une réaction non spontanée.",
        "ru": "Это описание гальванического элемента. Электролизёр не вырабатывает электрический ток, а, наоборот, потребляет энергию внешнего источника, чтобы провести несамопроизвольную реакцию.",
        "ar": "هذا الوصف خاص بالخلية الجلفانية. خلية التحليل الكهربائي لا تنتج الكهرباء، بل تستهلك طاقة كهربائية من مصدر خارجي لإجراء تفاعل غير تلقائي.",
        "zh": "这是原电池的特征。电解池不产生电能，相反，它消耗外电源的电能来驱动非自发反应。",
        "ku": "Ev pênase ya pîlê (şaneya galvanîk) ye. Şaneya elektrolîzê elektrîkê hilnaberîne; berevajî, enerjiya elektrîkê ya çavkaniyeke derve dixercîne da ku reaksiyoneke ne-xweber bimeşîne."
      }
    },
    {
      "id": "u22-f02",
      "fact": {
        "tr": "Faraday 1. Kanunu: Elektrotlarda toplanan madde miktarı devreden geçen elektrik yükü miktarı (Q = I * t) ile doğru orantılıdır.",
        "en": "Faraday's 1st Law: The amount of matter collected in the electrodes is directly proportional to the amount of electrical charge passing through the circuit (Q = I * t).",
        "de": "Das 1. Gesetz von Faraday: Die Menge der in den Elektroden gesammelten Materie ist direkt proportional zur Menge der elektrischen Ladung, die durch den Stromkreis fließt (Q = I * t).",
        "fr": "Première loi de Faraday : La quantité de matière collectée dans les électrodes est directement proportionnelle à la quantité de charge électrique traversant le circuit (Q = I * t).",
        "ru": "Первый закон Фарадея: количество вещества, выделившегося на электродах, прямо пропорционально заряду, прошедшему через цепь (Q = I * t).",
        "ar": "قانون فاراداي الأول: كمية المادة المتجمعة عند الأقطاب تتناسب طرديًا مع كمية الشحنة الكهربائية المارة في الدائرة (Q = I * t).",
        "zh": "法拉第第一定律：电极上析出物质的量与通过电路的电量成正比(Q = I * t)。",
        "ku": "Zagona yekem a Faraday: Mîqdara madeya ku li elektrodan kom dibe bi mîqdara bara elektrîkê ya ku di çerxê re derbas dibe (Q = I * t) re rasterast rêjeyî ye."
      },
      "trap": {
        "tr": "Elektrotta toplanan madde devreden geçen akımla ters orantılıdır.",
        "en": "The substance collected in the electrode is inversely proportional to the current passing through the circuit.",
        "de": "Die in der Elektrode gesammelte Substanz ist umgekehrt proportional zum durch den Stromkreis fließenden Strom.",
        "fr": "La substance collectée dans l'électrode est inversement proportionnelle au courant traversant le circuit.",
        "ru": "Количество вещества, выделившегося на электроде, обратно пропорционально силе тока в цепи.",
        "ar": "تتناسب كمية المادة المتجمعة عند القطب عكسيًا مع شدة التيار المار في الدائرة.",
        "zh": "电极上析出物质的量与通过电路的电流成反比。",
        "ku": "Madeya ku li elektrodê kom dibe bi herika ku di çerxê re derbas dibe re berevajî rêjeyî ye."
      },
      "whyTrapIsFalse": {
        "tr": "Akım arttıkça birim zamanda devreden daha çok elektron geçer ve daha çok iyon indirgenir. Bu yüzden toplanan madde akımla (ve süreyle) doğru orantılıdır, ters değil.",
        "en": "A larger current sends more electrons through the circuit per unit time, so more ions are reduced. The amount collected is therefore directly, not inversely, proportional to the current (and the time).",
        "de": "Ein größerer Strom transportiert pro Zeiteinheit mehr Elektronen, also werden mehr Ionen reduziert. Die abgeschiedene Menge ist daher direkt und nicht umgekehrt proportional zur Stromstärke (und zur Zeit).",
        "fr": "Un courant plus intense fait passer plus d'électrons par unité de temps, donc davantage d'ions sont réduits. La quantité recueillie est donc directement, et non inversement, proportionnelle à l'intensité (et à la durée).",
        "ru": "Чем больше сила тока, тем больше электронов проходит по цепи за единицу времени и тем больше ионов восстанавливается. Поэтому количество вещества прямо, а не обратно пропорционально силе тока (и времени).",
        "ar": "كلما زاد التيار مرّ عدد أكبر من الإلكترونات في وحدة الزمن فاختُزل عدد أكبر من الأيونات. لذلك تتناسب كمية المادة المترسبة طرديًا لا عكسيًا مع شدة التيار (ومع الزمن).",
        "zh": "电流越大，单位时间内通过电路的电子越多，被还原的离子也越多。因此析出物质的量与电流（及时间）成正比，而不是成反比。",
        "ku": "Her ku herik zêde dibe, di yekeya demê de bêtir elektron di çerxê re derbas dibin û bêtir îyon redûkte dibin. Ji ber vê yekê madeya kombûyî bi herikê (û bi demê) re rasterast rêjeyî ye, ne berevajî."
      }
    },
    {
      "id": "u22-f03",
      "fact": {
        "tr": "1 Faraday = 1 mol elektron yükü = 96500 Coulomb'dur.",
        "en": "1 Faraday = 1 mole of electron charge = 96500 Coulombs.",
        "de": "1 Faraday = 1 Mol Elektronenladung = 96500 Coulomb.",
        "fr": "1 Faraday = 1 mole de charge électronique = 96 500 Coulombs.",
        "ru": "1 фарадей = заряд 1 моль электронов = 96500 Кл.",
        "ar": "1 فاراداي = شحنة 1 mol من الإلكترونات = 96500 كولوم.",
        "zh": "1 法拉第(F) = 1 mol 电子所带的电量 = 96500 库仑。",
        "ku": "1 Faraday = bara 1 mol elektronan = 96500 Coulomb."
      },
      "trap": {
        "tr": "1 Faraday elektrik yükü 1 Coulomb'a eşittir.",
        "en": "1 Faraday electric charge is equal to 1 Coulomb.",
        "de": "1 Faradaysche elektrische Ladung entspricht 1 Coulomb.",
        "fr": "1 charge électrique Faraday équivaut à 1 Coulomb.",
        "ru": "Заряд в 1 фарадей равен 1 Кл.",
        "ar": "الشحنة الكهربائية لـ 1 فاراداي تساوي 1 كولوم.",
        "zh": "1 法拉第电荷等于 1 库仑。",
        "ku": "Bara elektrîkê ya 1 Faraday bi 1 Coulomb re wekhev e."
      },
      "whyTrapIsFalse": {
        "tr": "Coulomb (C) yük birimidir; 1 Faraday ise 1 mol (6,02·10^23 tane) elektronun toplam yüküdür ve 96500 C eder. Yani 1 Faraday, 1 Coulomb'a eşit değil, onun 96500 katıdır.",
        "en": "The coulomb (C) is the unit of charge; 1 faraday is the total charge of 1 mol (6.02·10^23) of electrons and equals 96500 C. So 1 faraday is not equal to 1 coulomb; it is 96500 times larger.",
        "de": "Das Coulomb (C) ist die Einheit der Ladung; 1 Faraday ist die Gesamtladung von 1 mol (6,02·10^23) Elektronen und beträgt 96500 C. 1 Faraday ist also nicht gleich 1 Coulomb, sondern 96500-mal so groß.",
        "fr": "Le coulomb (C) est l'unité de charge ; 1 faraday est la charge totale de 1 mol (6,02·10^23) d'électrons et vaut 96500 C. 1 faraday n'est donc pas égal à 1 coulomb : il est 96500 fois plus grand.",
        "ru": "Кулон (Кл) — единица заряда; 1 фарадей — суммарный заряд 1 моль (6,02·10^23) электронов, равный 96500 Кл. Значит, 1 фарадей не равен 1 кулону, а больше его в 96500 раз.",
        "ar": "الكولوم (C) وحدة الشحنة؛ أما 1 فاراداي فهو الشحنة الكلية لـ 1 mol (6.02·10^23) من الإلكترونات ويساوي 96500 C. إذن 1 فاراداي لا يساوي 1 كولوم، بل هو أكبر منه 96500 مرة.",
        "zh": "库仑(C)是电量单位；1 法拉第是 1 mol(6.02·10^23 个)电子的总电量，等于 96500 C。因此 1 法拉第不等于 1 库仑，而是它的 96500 倍。",
        "ku": "Coulomb (C) yekeya barê ye; 1 Faraday bara giştî ya 1 mol (6,02·10^23 heb) elektronan e û dike 96500 C. Ango 1 Faraday ne wekhevî 1 Coulomb e, 96500 qatê wê ye."
      }
    },
    {
      "id": "u22-f04",
      "fact": {
        "tr": "Elektrotlarda toplanan madde kütlesi formülü: m = (Q * MA) / (96500 * z)'dir (z: tesir değerliği / alınan-verilen elektron sayısı).",
        "en": "The formula for the mass deposited at an electrode is m = (Q * MA) / (96500 * z) (z: valence factor, i.e. the number of electrons gained or lost).",
        "de": "Die an einer Elektrode abgeschiedene Masse beträgt m = (Q * MA) / (96500 * z) (z: Wertigkeit, d. h. Zahl der aufgenommenen bzw. abgegebenen Elektronen).",
        "fr": "La masse déposée à une électrode est m = (Q * MA) / (96500 * z) (z : valence, c'est-à-dire le nombre d'électrons captés ou cédés).",
        "ru": "Масса вещества, выделившегося на электроде: m = (Q * MA) / (96500 * z) (z — число электронов, принимаемых или отдаваемых одной частицей).",
        "ar": "كتلة المادة المترسبة عند القطب: m = (Q * MA) / (96500 * z) (z: التكافؤ، أي عدد الإلكترونات المكتسبة أو المفقودة).",
        "zh": "电极上析出物质的质量 m = (Q * MA) / (96500 * z)(z 为离子的电荷数，即每个离子得失的电子数)。",
        "ku": "Formula girseya madeya ku li elektrodan kom dibe: m = (Q * MA) / (96500 * z) (z: nirxa bandorê, ango hejmara elektronên ku her îyon distîne an dide)."
      },
      "trap": {
        "tr": "Aynı elektrik yükü geçtiğinde toplanan madde kütlesi, iyonun yükü (z) büyüdükçe artar.",
        "en": "When the same electric charge is passed, the mass of substance collected increases as the ion's charge (z) increases.",
        "de": "Bei gleicher durchgeflossener Ladung nimmt die abgeschiedene Stoffmasse mit steigender Ionenladung (z) zu.",
        "fr": "Pour une même charge électrique, la masse de substance recueillie augmente quand la charge de l'ion (z) augmente.",
        "ru": "При пропускании одинакового заряда масса выделившегося вещества растёт с увеличением заряда иона (z).",
        "ar": "عند مرور الشحنة الكهربائية نفسها تزداد كتلة المادة المترسبة كلما زادت شحنة الأيون (z).",
        "zh": "通过相同电量时，离子电荷数(z)越大，析出物质的质量越大。",
        "ku": "Dema heman bara elektrîkê derbas dibe, her ku bara îyonê (z) mezin dibe, girseya madeya kombûyî zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Yükü büyük bir iyonu metale dönüştürmek için iyon başına daha çok elektron gerekir; aynı yükle daha az mol madde toplanır. Kütle mol kütlesiyle doğru, iyon yüküyle ters orantılıdır.",
        "en": "An ion with a larger charge needs more electrons per ion to be converted to metal, so the same charge deposits fewer moles. The mass is directly proportional to the molar mass and inversely proportional to the ion's charge.",
        "de": "Ein höher geladenes Ion braucht pro Ion mehr Elektronen, um zu Metall zu werden; mit derselben Ladung wird also weniger Stoffmenge abgeschieden. Die Masse ist proportional zur molaren Masse und umgekehrt proportional zur Ionenladung.",
        "fr": "Un ion plus chargé nécessite plus d'électrons par ion pour devenir métal ; la même charge dépose donc moins de moles. La masse est proportionnelle à la masse molaire et inversement proportionnelle à la charge de l'ion.",
        "ru": "Иону с большим зарядом для превращения в металл нужно больше электронов на один ион, поэтому тот же заряд выделяет меньше молей вещества. Масса прямо пропорциональна молярной массе и обратно пропорциональна заряду иона.",
        "ar": "الأيون ذو الشحنة الأكبر يحتاج إلى إلكترونات أكثر لكل أيون ليتحول إلى فلز، فتترسب بالشحنة نفسها مولات أقل. الكتلة تتناسب طرديًا مع الكتلة المولية وعكسيًا مع شحنة الأيون.",
        "zh": "电荷数越大的离子，每个离子变成金属所需电子越多，因此相同电量析出的物质的量更少。质量与摩尔质量成正比，与离子电荷数成反比。",
        "ku": "Ji bo ku îyoneke bi bara mezin bibe metal, ji her îyonê re bêtir elektron hewce ne; bi heman barê kêmtir mol made kom dibe. Girse bi girseya molî re rasterast, bi bara îyonê re berevajî rêjeyî ye."
      }
    },
    {
      "id": "u22-f05",
      "fact": {
        "tr": "Faraday 2. Kanunu: Seri bağlı elektroliz kaplarından geçen elektrik yükü eşittir ve toplanan maddelerin eşdeğer gram sayıları eşittir.",
        "en": "Faraday's 2nd Law: The electrical charge passing through serially connected electrolysis vessels is equal and the equivalent gram numbers of the collected substances are equal.",
        "de": "Faradaysches 2. Gesetz: Die elektrische Ladung, die durch in Reihe geschaltete Elektrolysegefäße fließt, ist gleich und die äquivalenten Grammzahlen der gesammelten Substanzen sind gleich.",
        "fr": "Deuxième loi de Faraday : La charge électrique passant dans les cuves d'électrolyse connectées en série est égale et les nombres de grammes équivalents des substances collectées sont égaux.",
        "ru": "Второй закон Фарадея: через последовательно соединённые электролизёры проходит одинаковый заряд, и количества вещества эквивалентов выделившихся веществ равны.",
        "ar": "قانون فاراداي الثاني: الشحنة الكهربائية المارة في خلايا التحليل الكهربائي الموصولة على التوالي واحدة، وتتساوى أعداد المكافئات الغرامية للمواد المتجمعة عند أقطابها.",
        "zh": "法拉第第二定律：串联的各电解池中通过的电量相等，析出物质的克当量数也相等。",
        "ku": "Zagona duyem a Faraday: Bara elektrîkê ya ku di firaxên elektrolîzê yên bi rêzê ve girêdayî re derbas dibe wekhev e û hejmarên ekîvalent-gram ên madeyên kombûyî wekhev in."
      },
      "trap": {
        "tr": "Seri bağlı kaplarda toplanan maddelerin kütleleri daima birbirine eşittir.",
        "en": "The masses of the substances collected in serially connected containers are always equal.",
        "de": "Die Massen der in hintereinander geschalteten Behältern gesammelten Stoffe sind immer gleich.",
        "fr": "Les masses des substances collectées dans des conteneurs connectés en série sont toujours égales.",
        "ru": "Массы веществ, выделившихся в последовательно соединённых электролизёрах, всегда равны.",
        "ar": "تكون كتل المواد المتجمعة في الخلايا الموصولة على التوالي متساوية دائمًا.",
        "zh": "串联的各电解池中析出物质的质量总是相等。",
        "ku": "Girseyên madeyên ku di firaxên bi rêzê ve girêdayî de kom dibin her tim wekhev in."
      },
      "whyTrapIsFalse": {
        "tr": "Seri bağlı kaplarda eşit olan, geçen yük yani elektron molüdür; kütle değil. Maddelerin mol kütleleri ve iyon yükleri farklı olduğundan toplanan kütleler genellikle farklıdır.",
        "en": "In cells connected in series what is equal is the charge passed, i.e. the moles of electrons, not the mass. Because the substances have different molar masses and ion charges, the masses collected are generally different.",
        "de": "In hintereinandergeschalteten Zellen ist die durchgeflossene Ladung, also die Elektronenstoffmenge, gleich, nicht die Masse. Da die Stoffe unterschiedliche molare Massen und Ionenladungen haben, sind die abgeschiedenen Massen meist verschieden.",
        "fr": "Dans des cellules en série, c'est la charge, donc le nombre de moles d'électrons, qui est égal, pas la masse. Les substances ayant des masses molaires et des charges ioniques différentes, les masses recueillies sont en général différentes.",
        "ru": "В последовательно соединённых электролизёрах одинаков прошедший заряд, то есть число молей электронов, а не масса. Так как у веществ разные молярные массы и заряды ионов, выделившиеся массы обычно различаются.",
        "ar": "في الخلايا الموصولة على التوالي تكون الشحنة المارة، أي عدد مولات الإلكترونات، متساوية وليست الكتلة. ولأن المواد تختلف في كتلها المولية وشحنات أيوناتها فإن الكتل المترسبة تكون مختلفة عمومًا.",
        "zh": "串联电解池中相等的是通过的电量即电子的物质的量，而不是质量。由于各物质的摩尔质量和离子电荷不同，析出的质量一般不相等。",
        "ku": "Di firaxên bi rêzê ve girêdayî de ya wekhev bara derbasbûyî ye, ango mola elektronan; ne girse ye. Ji ber ku girseyên molî û barên îyonan ên madeyan cuda ne, girseyên kombûyî bi piranî cuda ne."
      }
    },
    {
      "id": "u22-f06",
      "fact": {
        "tr": "Suyun elektrolizinde (Hoffman voltametresi): Katotta 2 hacim H2 gazı toplanırken, anotta 1 hacim O2 gazı toplanır (2 H2O → 2 H2 + O2).",
        "en": "In the electrolysis of water (Hoffman voltameter): While 2 volumes of H2 gas are collected at the cathode, 1 volume of O2 gas is collected at the anode (2 H2O → 2 H2 + O2).",
        "de": "Bei der Elektrolyse von Wasser (Hoffman-Voltameter): Während an der Kathode 2 Volumina H2-Gas gesammelt werden, wird an der Anode 1 Volumen O2-Gas gesammelt (2 H2O → 2 H2 + O2).",
        "fr": "Dans l'électrolyse de l'eau (voltamètre Hoffman) : Alors que 2 volumes de gaz H2 sont collectés à la cathode, 1 volume de gaz O2 est collecté à l'anode (2 H2O → 2 H2 + O2).",
        "ru": "При электролизе воды (аппарат Гофмана) на катоде собирается 2 объёма газа H2, а на аноде — 1 объём газа O2 (2 H2O → 2 H2 + O2).",
        "ar": "في التحليل الكهربائي للماء (فولتامتر هوفمان): يتجمع حجمان من غاز H2 عند المهبط، بينما يتجمع حجم واحد من غاز O2 عند المصعد (2 H2O → 2 H2 + O2).",
        "zh": "电解水时(霍夫曼电解器)：阴极收集到 2 体积 H2，阳极收集到 1 体积 O2(2 H2O → 2 H2 + O2)。",
        "ku": "Di elektrolîza avê de (voltametra Hoffman): li katodê 2 qebare gaza H2 û li anodê 1 qebare gaza O2 kom dibe (2 H2O → 2 H2 + O2)."
      },
      "trap": {
        "tr": "Suyun elektrolizinde anotta katottan 2 kat daha fazla gaz toplanır.",
        "en": "In the electrolysis of water, twice as much gas is collected at the anode than at the cathode.",
        "de": "Bei der Elektrolyse von Wasser wird an der Anode doppelt so viel Gas gesammelt wie an der Kathode.",
        "fr": "Lors de l’électrolyse de l’eau, deux fois plus de gaz sont collectés à l’anode qu’à la cathode.",
        "ru": "При электролизе воды на аноде собирается в два раза больше газа, чем на катоде.",
        "ar": "في التحليل الكهربائي للماء يتجمع عند المصعد ضعف كمية الغاز المتجمعة عند المهبط.",
        "zh": "电解水时，阳极收集到的气体体积是阴极的两倍。",
        "ku": "Di elektrolîza avê de li anodê du qat ji katodê zêdetir gaz kom dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Oran ters çevrilmiştir. 2 H2O → 2 H2 + O2 denkleminde H2 katotta oluşur ve hacmi anottaki O2 hacminin iki katıdır; yani anotta daha az gaz toplanır.",
        "en": "The ratio is reversed. In 2 H2O → 2 H2 + O2, H2 forms at the cathode and its volume is twice that of the O2 at the anode, so less gas is collected at the anode.",
        "de": "Das Verhältnis ist vertauscht. Nach 2 H2O → 2 H2 + O2 entsteht H2 an der Kathode mit doppeltem Volumen des O2 an der Anode; an der Anode wird also weniger Gas gesammelt.",
        "fr": "Le rapport est inversé. Selon 2 H2O → 2 H2 + O2, H2 se forme à la cathode avec un volume double de celui de O2 à l'anode ; on recueille donc moins de gaz à l'anode.",
        "ru": "Соотношение указано наоборот. Согласно уравнению 2 H2O → 2 H2 + O2, водород образуется на катоде, и его объём вдвое больше объёма O2 на аноде; значит, на аноде газа собирается меньше.",
        "ar": "النسبة معكوسة. وفق 2 H2O → 2 H2 + O2 يتكون H2 عند المهبط وحجمه ضعف حجم O2 عند المصعد، أي يتجمع عند المصعد غاز أقل.",
        "zh": "比例颠倒了。根据 2 H2O → 2 H2 + O2，H2 在阴极生成，其体积是阳极 O2 体积的两倍，所以阳极收集的气体更少。",
        "ku": "Rêje berevajî hatiye dayîn. Li gorî hevkêşeya 2 H2O → 2 H2 + O2, H2 li katodê çêdibe û qebareya wê du qatê qebareya O2 ya li anodê ye; ango li anodê kêmtir gaz kom dibe."
      }
    },
    {
      "id": "u22-f07",
      "fact": {
        "tr": "Erimiş tuzların elektrolizinde katotta katyon indirgenerek metal açığa çıkar; anotta anyon yükseltgenerek ametal gazı açığa çıkar.",
        "en": "In the electrolysis of molten salts, the cation is reduced at the cathode and the metal is released; At the anode, the anion is oxidized and nonmetal gas is released.",
        "de": "Bei der Elektrolyse geschmolzener Salze wird das Kation an der Kathode reduziert und das Metall freigesetzt; An der Anode wird das Anion oxidiert und nichtmetallisches Gas freigesetzt.",
        "fr": "Lors de l'électrolyse des sels fondus, le cation est réduit à la cathode et le métal est libéré ; À l'anode, l'anion est oxydé et un gaz non métallique est libéré.",
        "ru": "При электролизе расплавов солей катион восстанавливается на катоде с выделением металла; на аноде анион окисляется с выделением газообразного неметалла.",
        "ar": "في التحليل الكهربائي للأملاح المنصهرة يُختزل الكاتيون عند المهبط فيتحرر الفلز؛ ويتأكسد الأنيون عند المصعد فيتحرر غاز لافلزي.",
        "zh": "电解熔融盐时，阳离子在阴极被还原生成金属；阴离子在阳极被氧化，放出非金属气体。",
        "ku": "Di elektrolîza xwêyên helîyayî de li katodê katyon redûkte dibe û metal derdikeve holê; li anodê anyon oksîde dibe û gaza nemetal derdikeve."
      },
      "trap": {
        "tr": "Erimiş NaCl elektrolizinde anotta sodyum metali toplanır.",
        "en": "In the electrolysis of molten NaCl, sodium metal is collected at the anode.",
        "de": "Bei der Elektrolyse von geschmolzenem NaCl wird Natriummetall an der Anode gesammelt.",
        "fr": "Lors de l’électrolyse du NaCl fondu, le sodium métallique est collecté à l’anode.",
        "ru": "При электролизе расплава NaCl металлический натрий выделяется на аноде.",
        "ar": "في التحليل الكهربائي لكلوريد الصوديوم المنصهر يتجمع فلز الصوديوم عند المصعد.",
        "zh": "电解熔融氯化钠时，金属钠在阳极析出。",
        "ku": "Di elektrolîza NaCl ya helîyayî de metala sodyûmê li anodê kom dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Na+ bir katyondur; elektron alarak katotta indirgenir ve sodyum katotta toplanır. Anotta ise Cl- yükseltgenir ve Cl2 gazı çıkar.",
        "en": "Na+ is a cation; it gains electrons and is reduced at the cathode, so sodium collects at the cathode. At the anode Cl- is oxidized and Cl2 gas is released.",
        "de": "Na+ ist ein Kation; es nimmt an der Kathode Elektronen auf und wird reduziert, Natrium sammelt sich also an der Kathode. An der Anode wird Cl- oxidiert und Cl2-Gas entweicht.",
        "fr": "Na+ est un cation ; il capte des électrons et est réduit à la cathode, le sodium se dépose donc à la cathode. À l'anode, Cl- est oxydé et du gaz Cl2 se dégage.",
        "ru": "Na+ — катион; он принимает электроны и восстанавливается на катоде, поэтому натрий выделяется на катоде. На аноде окисляется Cl- и выделяется газ Cl2.",
        "ar": "Na+ كاتيون، يكتسب الإلكترونات ويُختزل عند المهبط، لذلك يتجمع الصوديوم عند المهبط. أما عند المصعد فيتأكسد Cl- ويتصاعد غاز Cl2.",
        "zh": "Na+ 是阳离子，在阴极得电子被还原，所以钠在阴极析出。阳极上是 Cl- 被氧化放出 Cl2 气体。",
        "ku": "Na+ katyon e; li katodê elektronan distîne û redûkte dibe, loma sodyûm li katodê kom dibe. Li anodê jî Cl- oksîde dibe û gaza Cl2 derdikeve."
      }
    },
    {
      "id": "u22-f08",
      "fact": {
        "tr": "Sulu çözelti elektrolizinde katotta indirgenmesi en kolay tür (indirgenme potansiyeli en büyük olan) önce indirgenir: Cu2+ ve Ag+ gibi pasif metal katyonları sudan önce indirgenirken Na+ ve K+ gibi aktif metal katyonlarının yerine su indirgenir ve H2 açığa çıkar.",
        "en": "In the electrolysis of an aqueous solution, the species that is easiest to reduce (the one with the highest reduction potential) is reduced first at the cathode: cations of less active metals such as Cu2+ and Ag+ are reduced before water, whereas instead of active-metal cations such as Na+ and K+, water is reduced and H2 is released.",
        "de": "Bei der Elektrolyse einer wässrigen Lösung wird an der Kathode zuerst die am leichtesten reduzierbare Spezies (mit dem höchsten Reduktionspotential) reduziert: Kationen edler Metalle wie Cu2+ und Ag+ werden vor dem Wasser reduziert, während anstelle von Kationen unedler Metalle wie Na+ und K+ das Wasser reduziert wird und H2 entsteht.",
        "fr": "Lors de l'électrolyse d'une solution aqueuse, l'espèce la plus facile à réduire (celle de plus haut potentiel de réduction) est réduite en premier à la cathode : les cations de métaux peu actifs comme Cu2+ et Ag+ sont réduits avant l'eau, tandis qu'à la place des cations de métaux actifs comme Na+ et K+, c'est l'eau qui est réduite et H2 se dégage.",
        "ru": "При электролизе водного раствора на катоде первой восстанавливается частица, которая восстанавливается легче всего (с наибольшим потенциалом восстановления): катионы малоактивных металлов, например Cu2+ и Ag+, восстанавливаются раньше воды, а вместо катионов активных металлов, например Na+ и K+, восстанавливается вода с выделением H2.",
        "ar": "في التحليل الكهربائي للمحاليل المائية يُختزل عند المهبط أولًا النوع الأسهل اختزالًا (ذو جهد الاختزال الأكبر): فكاتيونات الفلزات قليلة النشاط مثل Cu2+ وAg+ تُختزل قبل الماء، أما في حالة كاتيونات الفلزات النشطة مثل Na+ وK+ فيُختزل الماء بدلًا منها ويتصاعد H2.",
        "zh": "电解水溶液时，阴极上最容易被还原的粒子（还原电势最大者）先被还原：Cu2+、Ag+ 等不活泼金属的阳离子比水先被还原，而 Na+、K+ 等活泼金属阳离子不被还原，代之以水被还原放出 H2。",
        "ku": "Di elektrolîza çareseriyên avî de li katodê pêşî ew cure redûkte dibe ku herî hêsan redûkte dibe (potansiyela wê ya redûksiyonê herî mezin e): katyonên metalên pasîf ên wek Cu2+ û Ag+ beriya avê redûkte dibin, lê li şûna katyonên metalên çalak ên wek Na+ û K+ av redûkte dibe û H2 derdikeve."
      },
      "trap": {
        "tr": "Sulu çözelti elektrolizinde katotta, en aktif metalin katyonu (ör. Na+) öncelikle indirgenir.",
        "en": "In the electrolysis of an aqueous solution, the cation of the most active metal (e.g., Na+) is reduced first at the cathode.",
        "de": "Bei der Elektrolyse wässriger Lösungen wird an der Kathode zuerst das Kation des aktivsten (unedelsten) Metalls (z. B. Na+) reduziert.",
        "fr": "Lors de l'électrolyse d'une solution aqueuse, le cation du métal le plus actif (p. ex. Na+) est réduit en premier à la cathode.",
        "ru": "При электролизе водного раствора на катоде первым восстанавливается катион наиболее активного металла (например, Na+).",
        "ar": "في التحليل الكهربائي للمحاليل المائية يُختزل أولًا عند المهبط كاتيون الفلز الأكثر نشاطًا (مثل Na+).",
        "zh": "水溶液电解时，最活泼金属的阳离子(如 Na+)在阴极首先被还原。",
        "ku": "Di elektrolîza çareseriyên avî de li katodê pêşî katyona metala herî çalak (mînak Na+) redûkte dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Na+ gibi aktif metal katyonlarının indirgenmesi sudan çok daha zordur; sulu çözeltide onların yerine su indirgenir ve H2 açığa çıkar. Katotta aktifliği en büyük değil, indirgenmesi en kolay tür önce indirgenir.",
        "en": "Cations of active metals such as Na+ are much harder to reduce than water; in aqueous solution water is reduced instead and H2 is released. At the cathode the species easiest to reduce goes first, not the most active one.",
        "de": "Kationen unedler Metalle wie Na+ lassen sich viel schwerer reduzieren als Wasser; in wässriger Lösung wird stattdessen Wasser reduziert und H2 entsteht. An der Kathode reagiert zuerst die am leichtesten reduzierbare Teilchenart, nicht die aktivste.",
        "fr": "Les cations de métaux actifs comme Na+ sont bien plus difficiles à réduire que l'eau ; en solution aqueuse, c'est l'eau qui est réduite et H2 se dégage. À la cathode, l'espèce la plus facile à réduire réagit en premier, pas la plus active.",
        "ru": "Катионы активных металлов, например Na+, восстанавливаются гораздо труднее воды; в водном растворе вместо них восстанавливается вода и выделяется H2. На катоде первой восстанавливается частица, которая восстанавливается легче всего, а не самая активная.",
        "ar": "اختزال كاتيونات الفلزات النشطة مثل Na+ أصعب بكثير من اختزال الماء؛ لذلك يُختزل الماء بدلًا منها في المحلول المائي ويتصاعد H2. عند المهبط يُختزل أولًا الأسهل اختزالًا لا الأكثر نشاطًا.",
        "zh": "Na+ 等活泼金属阳离子比水难还原得多；在水溶液中被还原的是水，放出 H2。阴极上优先还原的是最容易被还原的微粒，而不是最活泼金属的阳离子。",
        "ku": "Redûksiyona katyonên metalên çalak ên wek Na+ ji ya avê gelek dijwartir e; di çareseriya avî de li şûna wan av redûkte dibe û H2 derdikeve. Li katodê ne cureyê herî çalak, cureyê ku herî hêsan redûkte dibe pêşî redûkte dibe."
      }
    },
    {
      "id": "u22-f09",
      "fact": {
        "tr": "Sulu çözelti elektrolizinde (inert elektrotla) anotta yükseltgenmesi en kolay tür önce yükseltgenir: I- ve Br- sudan önce yükseltgenir, derişik klorür çözeltisinde Cl2 açığa çıkar; NO3- ve SO42- yükseltgenmez, onların yerine su yükseltgenerek O2 oluşur.",
        "en": "In aqueous electrolysis (with inert electrodes), the species that is most easily oxidized is oxidized first at the anode: I- and Br- are oxidized before water, Cl2 is released from a concentrated chloride solution; NO3- and SO42- are not oxidized, instead water is oxidized and O2 forms.",
        "de": "Bei der Elektrolyse wässriger Lösungen (mit inerten Elektroden) wird an der Anode zuerst die am leichtesten oxidierbare Teilchenart oxidiert: I- und Br- werden vor Wasser oxidiert, aus konzentrierter Chloridlösung entsteht Cl2; NO3- und SO42- werden nicht oxidiert, stattdessen wird Wasser zu O2 oxidiert.",
        "fr": "Dans l'électrolyse en solution aqueuse (électrodes inertes), l'espèce la plus facile à oxyder est oxydée en premier à l'anode : I- et Br- sont oxydés avant l'eau, une solution concentrée de chlorure libère Cl2 ; NO3- et SO42- ne sont pas oxydés, c'est l'eau qui est oxydée en O2.",
        "ru": "При электролизе водного раствора (с инертными электродами) на аноде первой окисляется частица, которая окисляется легче всего: I- и Br- окисляются раньше воды, из концентрированного раствора хлорида выделяется Cl2; NO3- и SO42- не окисляются, вместо них окисляется вода с образованием O2.",
        "ar": "في التحليل الكهربائي للمحاليل المائية (بأقطاب خاملة) يتأكسد عند المصعد أولًا النوع الأسهل تأكسدًا: يتأكسد I- و Br- قبل الماء، ويتصاعد Cl2 من محلول الكلوريد المركز؛ أما NO3- و SO42- فلا يتأكسدان، بل يتأكسد الماء مكونًا O2.",
        "zh": "用惰性电极电解水溶液时，阳极上最容易被氧化的微粒首先被氧化：I- 和 Br- 先于水被氧化，浓氯化物溶液中放出 Cl2；NO3- 和 SO42- 不被氧化，而是水被氧化生成 O2。",
        "ku": "Di elektrolîza çareseriyên avî de (bi elektrodên înert) li anodê pêşî ew cure oksîde dibe ku herî hêsan oksîde dibe: I- û Br- berî avê oksîde dibin, ji çareseriya klorîdê ya tîr Cl2 derdikeve; NO3- û SO42- oksîde nabin, li şûna wan av oksîde dibe û O2 çêdibe."
      },
      "trap": {
        "tr": "Sulu K2SO4 çözeltisinin inert elektrotlarla elektrolizinde anotta SO42- iyonları yükseltgenir.",
        "en": "In the electrolysis of aqueous K2SO4 with inert electrodes, SO42- ions are oxidized at the anode.",
        "de": "Bei der Elektrolyse von wässrigem K2SO4 mit inerten Elektroden werden an der Anode SO42--Ionen oxidiert.",
        "fr": "Lors de l'électrolyse de K2SO4 aqueux avec des électrodes inertes, les ions SO42- sont oxydés à l'anode.",
        "ru": "При электролизе водного раствора K2SO4 с инертными электродами на аноде окисляются ионы SO42-.",
        "ar": "في التحليل الكهربائي لمحلول K2SO4 المائي بأقطاب خاملة تتأكسد أيونات SO42- عند المصعد.",
        "zh": "用惰性电极电解 K2SO4 水溶液时，阳极上 SO42- 离子被氧化。",
        "ku": "Di elektrolîza çareseriya avî ya K2SO4 de bi elektrodên înert, li anodê îyonên SO42- oksîde dibin."
      },
      "whyTrapIsFalse": {
        "tr": "SO42- iyonundaki kükürt zaten en yüksek yükseltgenme basamağında (+6) olduğundan bu iyon sudan çok daha zor yükseltgenir. Bu yüzden anotta su yükseltgenir ve O2 gazı çıkar.",
        "en": "The sulfur in SO42- is already in its highest oxidation state (+6), so this ion is much harder to oxidize than water. Therefore water is oxidized at the anode and O2 gas is released.",
        "de": "Der Schwefel in SO42- hat bereits die höchste Oxidationszahl (+6), daher ist dieses Ion viel schwerer zu oxidieren als Wasser. An der Anode wird deshalb Wasser oxidiert und O2 entsteht.",
        "fr": "Le soufre de SO42- est déjà à son nombre d'oxydation maximal (+6), cet ion est donc bien plus difficile à oxyder que l'eau. C'est donc l'eau qui est oxydée à l'anode et du O2 se dégage.",
        "ru": "Сера в SO42- уже находится в высшей степени окисления (+6), поэтому этот ион окисляется гораздо труднее воды. Следовательно, на аноде окисляется вода и выделяется O2.",
        "ar": "الكبريت في SO42- في أعلى عدد تأكسد له (+6)، لذا يصعب أكسدة هذا الأيون أكثر بكثير من الماء. ولهذا يتأكسد الماء عند المصعد ويتصاعد غاز O2.",
        "zh": "SO42- 中的硫已处于最高氧化数(+6)，该离子比水难氧化得多。因此阳极上是水被氧化，放出 O2。",
        "ku": "Kukurta di SO42- de jixwe di hejmara oksîdasyonê ya herî bilind (+6) de ye, loma ev îyon ji avê gelek dijwartir oksîde dibe. Ji ber vê li anodê av oksîde dibe û gaza O2 derdikeve."
      }
    },
    {
      "id": "u22-f10",
      "fact": {
        "tr": "Korozyon, metallerin çevre koşullarının (özellikle O2 ve nem) etkisiyle elektrokimyasal olarak yükseltgenip aşınmasıdır; demirin paslanması en bilinen örneğidir.",
        "en": "Corrosion is the wearing away of metals by electrochemical oxidation under environmental conditions (especially O2 and moisture); the rusting of iron is the best-known example.",
        "de": "Korrosion ist die Zerstörung von Metallen durch elektrochemische Oxidation unter Umgebungseinflüssen (vor allem O2 und Feuchtigkeit); das Rosten von Eisen ist das bekannteste Beispiel.",
        "fr": "La corrosion est la dégradation des métaux par oxydation électrochimique sous l'effet du milieu (surtout O2 et humidité) ; la rouille du fer en est l'exemple le plus connu.",
        "ru": "Коррозия — разрушение металлов в результате электрохимического окисления под действием окружающей среды (прежде всего O2 и влаги); самый известный пример — ржавление железа.",
        "ar": "التآكل هو تلف الفلزات بالأكسدة الكهروكيميائية بتأثير الظروف المحيطة (خاصة O2 والرطوبة)؛ وصدأ الحديد أشهر أمثلته.",
        "zh": "腐蚀是金属在环境条件(尤其是 O2 和水分)作用下发生电化学氧化而被损耗的过程；铁生锈是最常见的例子。",
        "ku": "Korozyon xwarina metalan e bi oksîdasyona elektrokîmyewî di bin bandora şertên derdorê de (nemaze O2 û şilî); zengarbûna hesin mînaka wê ya herî naskirî ye."
      },
      "trap": {
        "tr": "Demirin paslanmasında demir atomları elektron alarak indirgenir.",
        "en": "When iron rusts, the iron atoms gain electrons and are reduced.",
        "de": "Beim Rosten von Eisen nehmen die Eisenatome Elektronen auf und werden reduziert.",
        "fr": "Lors de la rouille du fer, les atomes de fer gagnent des électrons et sont réduits.",
        "ru": "При ржавлении железа атомы железа принимают электроны и восстанавливаются.",
        "ar": "عند صدأ الحديد تكتسب ذرات الحديد إلكترونات وتُختزل.",
        "zh": "铁生锈时，铁原子得到电子而被还原。",
        "ku": "Dema hesin zengar digire, atomên hesin elektronan digirin û redûkte dibin."
      },
      "whyTrapIsFalse": {
        "tr": "Paslanmada demir elektron verir (Fe → Fe2+ + 2e-) ve yükseltgenir; elektronları alan ve indirgenen tür O2'dir (O2 + 2H2O + 4e- → 4OH-). Korozyon her zaman metalin yükseltgenmesidir.",
        "en": "In rusting, iron gives up electrons (Fe → Fe2+ + 2e-) and is oxidized; the species that gains the electrons and is reduced is O2 (O2 + 2H2O + 4e- → 4OH-). Corrosion is always the oxidation of the metal.",
        "de": "Beim Rosten gibt Eisen Elektronen ab (Fe → Fe2+ + 2e-) und wird oxidiert; die Elektronen nimmt O2 auf, das reduziert wird (O2 + 2H2O + 4e- → 4OH-). Korrosion ist stets eine Oxidation des Metalls.",
        "fr": "Lors de la rouille, le fer cède des électrons (Fe → Fe2+ + 2e-) et est oxydé ; c'est O2 qui capte les électrons et est réduit (O2 + 2H2O + 4e- → 4OH-). La corrosion est toujours une oxydation du métal.",
        "ru": "При ржавлении железо отдаёт электроны (Fe → Fe2+ + 2e-) и окисляется; электроны принимает и восстанавливается O2 (O2 + 2H2O + 4e- → 4OH-). Коррозия — это всегда окисление металла.",
        "ar": "في الصدأ يفقد الحديد إلكترونات (Fe → Fe2+ + 2e-) ويتأكسد؛ أما النوع الذي يكتسب الإلكترونات ويُختزل فهو O2 (O2 + 2H2O + 4e- → 4OH-). فالتآكل دائمًا أكسدة للفلز.",
        "zh": "生锈时铁失去电子（Fe → Fe2+ + 2e-）而被氧化；得到电子而被还原的是 O2（O2 + 2H2O + 4e- → 4OH-）。腐蚀总是金属的氧化。",
        "ku": "Di zengargirtinê de hesin elektronan dide (Fe → Fe2+ + 2e-) û oksîde dibe; cureya ku elektronan digire û redûkte dibe O2 ye (O2 + 2H2O + 4e- → 4OH-). Korozyon her tim oksîdasyona metalê ye."
      }
    },
    {
      "id": "u22-f11",
      "fact": {
        "tr": "Katodik koruma (Kurban Anot): Korunacak metalden daha aktif bir metal (Mg, Zn) sisteme bağlanarak kurban anot olarak aşındırılır.",
        "en": "Cathodic protection (Sacrificial Anode): A more active metal (Mg, Zn) than the metal to be protected is connected to the system and corroded as the sacrificial anode.",
        "de": "Kathodischer Schutz (Opferanode): Ein aktiveres Metall (Mg, Zn) als das zu schützende Metall wird als Opferanode an das System angeschlossen und korrodiert.",
        "fr": "Protection cathodique (Anode sacrificielle) : Un métal plus actif (Mg, Zn) que le métal à protéger est connecté au système et corrodé comme anode sacrificielle.",
        "ru": "Протекторная защита (жертвенный анод): к защищаемому металлу присоединяют более активный металл (Mg, Zn), который как протектор окисляется и разрушается вместо него.",
        "ar": "الحماية الكاثودية (المصعد المضحي): يوصَل بالفلز المراد حمايته فلزٌ أنشط منه (Mg، Zn) فيتآكل بدلًا منه بوصفه مصعدًا مضحّيًا.",
        "zh": "阴极保护（牺牲阳极法）：将比被保护金属更活泼的金属(Mg、Zn)与之相连，使其作为牺牲阳极被腐蚀。",
        "ku": "Parastina katodîk (anoda qurbanî): metaleke ji metala parastî çalaktir (Mg, Zn) bi sîstemê ve tê girêdan û wek anoda qurbanî tê xwarin."
      },
      "trap": {
        "tr": "Kurban elektrot olarak korunacak metalden daha pasif bir metal seçilmelidir.",
        "en": "A more passive metal than the metal to be protected should be chosen as the sacrificial electrode.",
        "de": "Als Opferelektrode sollte ein passiveres Metall als das zu schützende Metall gewählt werden.",
        "fr": "Un métal plus passif que le métal à protéger doit être choisi comme électrode sacrificielle.",
        "ru": "В качестве протектора следует выбирать металл менее активный, чем защищаемый.",
        "ar": "يجب اختيار فلز أقل نشاطًا من الفلز المراد حمايته ليكون القطب المضحّي.",
        "zh": "应选择比被保护金属更不活泼的金属作为牺牲阳极。",
        "ku": "Divê wek elektroda qurbanî metaleke ji metala parastî pasîftir were hilbijartin."
      },
      "whyTrapIsFalse": {
        "tr": "Daha pasif bir metal demire bağlanırsa anot olan o değil demir olur; demir daha hızlı aşınır. Kurban metalin korunan metalden önce yükseltgenebilmesi için daha aktif olması gerekir.",
        "en": "If a less active metal is connected to iron, it is iron, not that metal, that becomes the anode, so iron corrodes faster. The sacrificial metal must be more active so that it is oxidized before the protected metal.",
        "de": "Wird ein edleres Metall mit Eisen verbunden, wird nicht dieses, sondern das Eisen zur Anode und korrodiert schneller. Das Opfermetall muss unedler sein, damit es vor dem geschützten Metall oxidiert wird.",
        "fr": "Si l'on relie au fer un métal moins actif, c'est le fer, et non ce métal, qui devient l'anode et se corrode plus vite. Le métal sacrificiel doit être plus actif pour s'oxyder avant le métal protégé.",
        "ru": "Если присоединить к железу менее активный металл, анодом станет не он, а железо, и железо будет корродировать быстрее. Протектор должен быть активнее защищаемого металла, чтобы окисляться раньше него.",
        "ar": "إذا وُصل فلز أقل نشاطًا بالحديد فإن الحديد هو الذي يصبح مصعدًا لا ذلك الفلز، فيتآكل الحديد أسرع. يجب أن يكون الفلز المضحّي أكثر نشاطًا ليتأكسد قبل الفلز المحمي.",
        "zh": "如果把较不活泼的金属与铁相连，成为负极而被腐蚀的是铁而不是该金属，铁腐蚀得更快。牺牲金属必须更活泼，才能先于被保护金属被氧化。",
        "ku": "Heke metaleke kêmçalaktir bi hesin ve were girêdan, ne ew lê hesin dibe anod û zûtir tê xwarin. Ji bo ku metala qurbanî berî metala parastî oksîde bibe, divê ew çalaktir be."
      }
    },
    {
      "id": "u22-f12",
      "fact": {
        "tr": "Elektrolitik kaplamacılıkta (galvanoplasti): Kaplanacak eşya katoda bağlanır; kaplama metali anoda bağlanır.",
        "en": "In electrolytic plating (galvanoplasty): The item to be coated is connected to the CATHODE; the coating metal is connected to the ANODE.",
        "de": "Bei der elektrolytischen Beschichtung (Galvanoplastie): Der zu beschichtende Gegenstand wird mit der KATHODE verbunden; Das Beschichtungsmetall ist mit der ANODE verbunden.",
        "fr": "En galvanoplastie (dépôt électrolytique) : l'objet à revêtir est relié à la CATHODE ; le métal de revêtement est relié à l'ANODE.",
        "ru": "При гальваническом нанесении покрытий (гальваностегии) покрываемое изделие служит катодом, а металл покрытия — анодом.",
        "ar": "في الطلاء الكهربائي: يوصَل الجسم المراد طلاؤه بالمهبط، ويوصَل فلز الطلاء بالمصعد.",
        "zh": "电镀时：待镀物件接阴极，镀层金属接阳极。",
        "ku": "Di pêçana elektrolîtîk de (galvanoplastî): tiştê ku dê were pêçandin bi KATODÊ ve, metala pêçanê jî bi ANODÊ ve tê girêdan."
      },
      "trap": {
        "tr": "Kaplanacak eşya anoda bağlanmalıdır.",
        "en": "The item to be coated must be connected to the anode.",
        "de": "Der zu beschichtende Gegenstand muss an die Anode angeschlossen werden.",
        "fr": "L'élément à revêtir doit être connecté à l'anode.",
        "ru": "Покрываемое изделие следует подключать в качестве анода.",
        "ar": "يجب أن يوصَل الجسم المراد طلاؤه بالمصعد.",
        "zh": "待镀物件必须接阳极。",
        "ku": "Divê tiştê ku dê were pêçandin bi anodê ve were girêdan."
      },
      "whyTrapIsFalse": {
        "tr": "Anotta yükseltgenme olur; anoda bağlanan eşya iyon hâlinde çözeltiye geçerek aşınır. Kaplama metalinin iyonları katotta indirgenerek biriktiği için eşya katoda bağlanmalıdır.",
        "en": "Oxidation occurs at the anode, so an object connected to the anode dissolves as ions and wears away. The plating metal's ions are reduced and deposited at the cathode, so the object must be the cathode.",
        "de": "An der Anode findet Oxidation statt; ein dort angeschlossener Gegenstand geht als Ionen in Lösung und wird abgetragen. Die Ionen des Überzugsmetalls werden an der Kathode reduziert und abgeschieden, daher muss der Gegenstand Kathode sein.",
        "fr": "L'oxydation a lieu à l'anode ; un objet relié à l'anode passe en solution sous forme d'ions et s'use. Les ions du métal de revêtement sont réduits et se déposent à la cathode, l'objet doit donc être la cathode.",
        "ru": "На аноде идёт окисление: подключённый к нему предмет переходит в раствор в виде ионов и разрушается. Ионы металла покрытия восстанавливаются и осаждаются на катоде, поэтому предмет должен быть катодом.",
        "ar": "تحدث الأكسدة عند المصعد، فالجسم الموصول بالمصعد يذوب على شكل أيونات ويتآكل. أيونات فلز الطلاء تُختزل وتترسب عند المهبط، لذلك يجب أن يكون الجسم هو المهبط.",
        "zh": "阳极发生氧化，接在阳极的物件会以离子形式溶解而被消耗。镀层金属的离子在阴极被还原沉积，所以待镀物件必须接阴极。",
        "ku": "Li anodê oksîdasyon pêk tê; tiştê bi anodê ve girêdayî wek îyon derbasî çareseriyê dibe û tê xwarin. Ji ber ku îyonên metala pêçanê li katodê redûkte dibin û lê kom dibin, divê tişt bi katodê ve were girêdan."
      }
    },
    {
      "id": "u22-f13",
      "fact": {
        "tr": "Saf su elektriği çok az ilettiğinden suyun elektrolizinde iletkenliği artırmak için ortama birkaç damla H2SO4 eklenir.",
        "en": "Since pure water conducts electricity very little, a few drops of H2SO4 are added to the medium to increase the conductivity in the electrolysis of water.",
        "de": "Da reines Wasser den Strom nur sehr wenig leitet, werden dem Medium einige Tropfen H2SO4 zugesetzt, um die Leitfähigkeit bei der Elektrolyse von Wasser zu erhöhen.",
        "fr": "L’eau pure étant très peu conductrice de l’électricité, quelques gouttes de H2SO4 sont ajoutées au milieu pour augmenter la conductivité lors de l’électrolyse de l’eau.",
        "ru": "Чистая вода очень плохо проводит электрический ток, поэтому при электролизе воды для повышения электропроводности добавляют несколько капель H2SO4.",
        "ar": "لأن الماء النقي ضعيف التوصيل للكهرباء جدًا، تُضاف بضع قطرات من H2SO4 في التحليل الكهربائي للماء لزيادة التوصيل.",
        "zh": "纯水的导电性很弱，因此电解水时要加入几滴 H2SO4 以增强导电性。",
        "ku": "Ji ber ku ava paqij elektrîkê pir kêm diguhezîne, di elektrolîza avê de ji bo zêdekirina guhêzbariyê çend dilop H2SO4 li avê tê zêdekirin."
      },
      "trap": {
        "tr": "Suyun elektrolizi için saf suya şeker eklenir.",
        "en": "For electrolysis of water, sugar is added to pure water.",
        "de": "Bei der Elektrolyse von Wasser wird reinem Wasser Zucker zugesetzt.",
        "fr": "Pour l'électrolyse de l'eau, du sucre est ajouté à l'eau pure.",
        "ru": "Для электролиза воды в чистую воду добавляют сахар.",
        "ar": "يُضاف السكر إلى الماء النقي لإجراء التحليل الكهربائي للماء.",
        "zh": "电解水时，要向纯水中加入糖。",
        "ku": "Ji bo elektrolîza avê, şekir li ava paqij tê zêdekirin."
      },
      "whyTrapIsFalse": {
        "tr": "Şeker suda iyonlarına ayrışmayan moleküler bir maddedir, bu yüzden iletkenliği artırmaz. İletkenlik için H2SO4 gibi iyon veren ve elektrot ürünlerini değiştirmeyen bir elektrolit eklenir.",
        "en": "Sugar is a molecular substance that does not dissociate into ions in water, so it does not increase conductivity. An electrolyte such as H2SO4 that supplies ions without changing the electrode products is added instead.",
        "de": "Zucker ist ein molekularer Stoff, der in Wasser nicht in Ionen zerfällt, und erhöht die Leitfähigkeit daher nicht. Zugesetzt wird ein Elektrolyt wie H2SO4, der Ionen liefert, ohne die Elektrodenprodukte zu verändern.",
        "fr": "Le sucre est une substance moléculaire qui ne se dissocie pas en ions dans l'eau ; il n'augmente donc pas la conductivité. On ajoute un électrolyte comme H2SO4, qui fournit des ions sans modifier les produits aux électrodes.",
        "ru": "Сахар — молекулярное вещество, которое не распадается на ионы в воде, поэтому электропроводность он не повышает. Добавляют электролит, например H2SO4, который даёт ионы и не меняет продукты на электродах.",
        "ar": "السكر مادة جزيئية لا تتفكك إلى أيونات في الماء، لذلك لا يزيد التوصيل. يُضاف بدلًا منه إلكتروليت مثل H2SO4 يوفر الأيونات دون أن يغير نواتج الأقطاب.",
        "zh": "糖是在水中不电离的分子物质，不能增强导电性。应加入 H2SO4 这类能提供离子而又不改变电极产物的电解质。",
        "ku": "Şekir madeyeke molekulî ye ku di avê de naqete îyonan, loma guhêzbariyê zêde nake. Ji bo guhêzbariyê elektrolîteke wek H2SO4 tê zêdekirin ku îyonan dide û hilberên elektrodan naguherîne."
      }
    },
    {
      "id": "u22-f14",
      "fact": {
        "tr": "Erimiş CaCl2 tuzundan 2 Faraday'lık elektrik yükü geçerse katotta 1 mol Ca metali toplanır (Ca2+ + 2e- → Ca).",
        "en": "If 2 faradays of charge pass through molten CaCl2, 1 mol of Ca metal is deposited at the cathode (Ca2+ + 2e- → Ca).",
        "de": "Fließt durch geschmolzenes CaCl2 eine Ladung von 2 Faraday, wird an der Kathode 1 mol Ca-Metall abgeschieden (Ca2+ + 2e- → Ca).",
        "fr": "Si une charge de 2 faradays traverse du CaCl2 fondu, 1 mol de calcium métallique se dépose à la cathode (Ca2+ + 2e- → Ca).",
        "ru": "Если через расплав CaCl2 пропустить 2 фарадея электричества, на катоде выделится 1 моль металлического Ca (Ca2+ + 2e- → Ca).",
        "ar": "إذا مرت كمية كهرباء مقدارها 2 فاراداي في مصهور CaCl2 يترسب 1 mol من فلز Ca عند المهبط (Ca2+ + 2e- → Ca).",
        "zh": "若有 2 法拉第的电量通过熔融 CaCl2，阴极上析出 1 mol 金属 Ca(Ca2+ + 2e- → Ca)。",
        "ku": "Heke bara elektrîkê ya 2 Faraday di xwêya CaCl2 ya helîyayî re derbas bibe, li katodê 1 mol metala Ca kom dibe (Ca2+ + 2e- → Ca)."
      },
      "trap": {
        "tr": "Erimiş CaCl2 tuzundan 2 Faraday'lık elektrik yükü geçtiğinde katotta 2 mol Ca metali toplanır.",
        "en": "When 2 faradays of charge pass through molten CaCl2, 2 mol of Ca metal are deposited at the cathode.",
        "de": "Fließt durch geschmolzenes CaCl2 eine Ladung von 2 Faraday, werden an der Kathode 2 mol Ca-Metall abgeschieden.",
        "fr": "Lorsqu'une charge de 2 faradays traverse du CaCl2 fondu, 2 mol de calcium métallique se déposent à la cathode.",
        "ru": "При прохождении 2 фарадеев электричества через расплав CaCl2 на катоде выделяется 2 моль металлического Ca.",
        "ar": "عند مرور كمية كهرباء مقدارها 2 فاراداي في مصهور CaCl2 يترسب 2 mol من فلز Ca عند المهبط.",
        "zh": "当 2 法拉第的电量通过熔融 CaCl2 时，阴极上析出 2 mol 金属 Ca。",
        "ku": "Dema bara elektrîkê ya 2 Faraday di xwêya CaCl2 ya helîyayî re derbas dibe, li katodê 2 mol metala Ca kom dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Ca2+ + 2e- → Ca denklemine göre 1 mol Ca için 2 mol elektron (2 F) gerekir; 2 F yalnızca 1 mol Ca verir. Bu hata iyon yükünü hesaba katmayıp 1 F'yi 1 mol metal sanmaktan doğar.",
        "en": "According to Ca2+ + 2e- → Ca, 1 mol Ca requires 2 mol electrons (2 F), so 2 F gives only 1 mol Ca. The error comes from ignoring the ion's charge and assuming 1 F gives 1 mol of metal.",
        "de": "Nach Ca2+ + 2e- → Ca braucht 1 mol Ca 2 mol Elektronen (2 F); 2 F liefern also nur 1 mol Ca. Der Fehler entsteht, wenn man die Ionenladung übersieht und annimmt, 1 F ergebe 1 mol Metall.",
        "fr": "D'après Ca2+ + 2e- → Ca, 1 mol de Ca nécessite 2 mol d'électrons (2 F) ; 2 F ne donnent donc que 1 mol de Ca. L'erreur vient de l'oubli de la charge de l'ion, en supposant que 1 F donne 1 mol de métal.",
        "ru": "По уравнению Ca2+ + 2e- → Ca на 1 моль Ca нужно 2 моль электронов (2 F), поэтому 2 F дают только 1 моль Ca. Ошибка возникает, если не учесть заряд иона и считать, что 1 F даёт 1 моль металла.",
        "ar": "وفق Ca2+ + 2e- → Ca يحتاج 1 mol من Ca إلى 2 mol من الإلكترونات (2 F)، فتعطي 2 F مولًا واحدًا فقط من Ca. ينشأ الخطأ من إهمال شحنة الأيون وافتراض أن 1 F يعطي 1 mol من الفلز.",
        "zh": "根据 Ca2+ + 2e- → Ca，1 mol Ca 需要 2 mol 电子(2 F)，所以 2 F 只得到 1 mol Ca。错误源于忽略离子电荷，以为 1 F 得到 1 mol 金属。",
        "ku": "Li gorî Ca2+ + 2e- → Ca, ji bo 1 mol Ca 2 mol elektron (2 F) hewce ne; 2 F tenê 1 mol Ca dide. Ev şaşî ji wê yekê tê ku bara îyonê nayê hesibandin û 1 F wek 1 mol metal tê girtin."
      }
    },
    {
      "id": "u22-f15",
      "fact": {
        "tr": "Downs hücresi erimiş NaCl'den metalik sodyum üretimi için kullanılan endüstriyel elektroliz hücresidir.",
        "en": "Downs cell is an industrial electrolysis cell used for the production of metallic sodium from molten NaCl.",
        "de": "Die Downs-Zelle ist eine industrielle Elektrolysezelle zur Herstellung von metallischem Natrium aus geschmolzenem NaCl.",
        "fr": "La cellule Downs est une cellule d'électrolyse industrielle utilisée pour la production de sodium métallique à partir de NaCl fondu.",
        "ru": "Ячейка Даунса — промышленный электролизёр для получения металлического натрия из расплава NaCl.",
        "ar": "خلية داونز هي خلية تحليل كهربائي صناعية تستخدم لإنتاج فلز الصوديوم من كلوريد الصوديوم المنصهر.",
        "zh": "唐斯电解槽是从熔融氯化钠生产金属钠的工业电解装置。",
        "ku": "Şaneya Downs şaneyeke elektrolîzê ya pîşesaziyê ye ku ji bo hilberîna metala sodyûmê ji NaCl ya helîyayî tê bikaranîn."
      },
      "trap": {
        "tr": "Downs hücresinde sodyum metali, sulu NaCl çözeltisinin elektroliziyle elde edilir.",
        "en": "In the Downs cell, sodium metal is obtained by electrolysing aqueous NaCl solution.",
        "de": "In der Downs-Zelle wird Natriummetall durch Elektrolyse wässriger NaCl-Lösung gewonnen.",
        "fr": "Dans la cellule de Downs, le sodium métallique est obtenu par électrolyse d'une solution aqueuse de NaCl.",
        "ru": "В ячейке Даунса металлический натрий получают электролизом водного раствора NaCl.",
        "ar": "في خلية داونز يُحصل على فلز الصوديوم بالتحليل الكهربائي لمحلول NaCl المائي.",
        "zh": "在唐斯电解槽中，金属钠是通过电解 NaCl 水溶液得到的。",
        "ku": "Di şaneya Downs de metala sodyûmê bi elektrolîza çareseriya avî ya NaCl tê bidestxistin."
      },
      "whyTrapIsFalse": {
        "tr": "Sulu NaCl çözeltisinde Na+ yerine su indirgenir ve katotta sodyum değil H2 açığa çıkar; oluşabilecek sodyum da su ile hemen tepkimeye girerdi. Bu yüzden Downs hücresinde su içermeyen erimiş NaCl elektroliz edilir.",
        "en": "In aqueous NaCl, water is reduced instead of Na+, so H2 rather than sodium forms at the cathode; any sodium formed would also react with water at once. That is why the Downs cell electrolyses molten NaCl, which contains no water.",
        "de": "In wässriger NaCl-Lösung wird statt Na+ das Wasser reduziert, an der Kathode entsteht H2 statt Natrium; entstehendes Natrium würde zudem sofort mit Wasser reagieren. Deshalb wird in der Downs-Zelle wasserfreie NaCl-Schmelze elektrolysiert.",
        "fr": "Dans NaCl aqueux, c'est l'eau et non Na+ qui est réduite : il se forme H2 et non du sodium à la cathode ; le sodium éventuellement formé réagirait d'ailleurs aussitôt avec l'eau. C'est pourquoi la cellule de Downs électrolyse du NaCl fondu, sans eau.",
        "ru": "В водном растворе NaCl вместо Na+ восстанавливается вода, и на катоде выделяется H2, а не натрий; образовавшийся натрий к тому же сразу прореагировал бы с водой. Поэтому в ячейке Даунса электролизу подвергают расплав NaCl, не содержащий воды.",
        "ar": "في محلول NaCl المائي يُختزل الماء بدل Na+ فيتصاعد H2 لا الصوديوم عند المهبط، ولو تكوّن صوديوم لتفاعل فورًا مع الماء. لذلك يُحلَّل في خلية داونز مصهور NaCl الخالي من الماء.",
        "zh": "在 NaCl 水溶液中被还原的是水而不是 Na+，阴极放出的是 H2 而不是钠；即使生成钠也会立即与水反应。因此唐斯电解槽电解的是不含水的熔融 NaCl。",
        "ku": "Di çareseriya avî ya NaCl de li şûna Na+ av redûkte dibe û li katodê ne sodyûm, H2 derdikeve; sodyûma ku çêbibe jî dê yekser bi avê re reaksiyonê bike. Ji ber vê yekê di şaneya Downs de NaCl a helandî ya bê av tê elektrolîzkirin."
      }
    },
    {
      "id": "u22-f16",
      "fact": {
        "tr": "Demir bir boruyu korozyondan korumak için magnezyum bloğu bağlanması aktiflik farkına dayalı kurban elektrot uygulamasıdır.",
        "en": "Connecting a magnesium block to an iron pipe to protect it from corrosion is a sacrificial-electrode application based on the difference in activity.",
        "de": "Das leitende Verbinden eines Magnesiumblocks mit einem Eisenrohr zum Korrosionsschutz ist eine Anwendung der Opferelektrode, die auf dem Aktivitätsunterschied beruht.",
        "fr": "Relier électriquement un bloc de magnésium à un tuyau en fer pour le protéger de la corrosion est une application de l'électrode sacrificielle fondée sur la différence d'activité.",
        "ru": "Присоединение магниевого блока к железной трубе для защиты от коррозии — пример протекторной защиты, основанной на разнице в активности металлов.",
        "ar": "ربط كتلة من المغنيسيوم بأنبوب حديدي لحمايته من التآكل تطبيقٌ للقطب المضحّي يقوم على الفرق في النشاط.",
        "zh": "用导线把镁块与铁管相连以防止铁管腐蚀，是利用金属活动性差异的牺牲阳极法。",
        "ku": "Girêdana blokeke magnezyûmê bi boriyeke hesin ve ji bo parastina wê ji korozyonê, sepandineke elektroda qurbanî ye ku li ser cudahiya çalakiyê ava dibe."
      },
      "trap": {
        "tr": "Magnezyum blok bağlanmış demir boruda magnezyum katot, demir anot olur.",
        "en": "In an iron pipe connected to a magnesium block, magnesium is the cathode and iron is the anode.",
        "de": "Bei einem mit einem Magnesiumblock verbundenen Eisenrohr ist Magnesium die Kathode und Eisen die Anode.",
        "fr": "Dans une conduite en fer reliée à un bloc de magnésium, le magnésium est la cathode et le fer l'anode.",
        "ru": "В железной трубе, соединённой с магниевым блоком, магний является катодом, а железо — анодом.",
        "ar": "في أنبوب حديدي موصول بكتلة مغنيسيوم يكون المغنيسيوم مهبطًا والحديد مصعدًا.",
        "zh": "在连接了镁块的铁管中，镁是阴极，铁是阳极。",
        "ku": "Di boriya hesin a ku bloka magnezyûmê pê ve hatiye girêdan de magnezyûm katod û hesin anod e."
      },
      "whyTrapIsFalse": {
        "tr": "Magnezyum demirden aktif olduğu için elektron veren, yani yükseltgenen metal odur: magnezyum anot olarak aşınır. Demir katot olur; üzerinde yalnızca O2 indirgenir ve demir yükseltgenmediği için korunur.",
        "en": "Magnesium is more active than iron, so it is the metal that gives up electrons and is oxidized: magnesium corrodes as the anode. Iron becomes the cathode; only O2 is reduced on its surface, and since iron is not oxidized it is protected.",
        "de": "Magnesium ist unedler als Eisen und gibt daher die Elektronen ab, wird also oxidiert: Magnesium korrodiert als Anode. Eisen wird zur Kathode; an ihm wird nur O2 reduziert, und weil das Eisen nicht oxidiert wird, ist es geschützt.",
        "fr": "Le magnésium est plus actif que le fer : c'est lui qui cède des électrons et s'oxyde, il se corrode en tant qu'anode. Le fer devient la cathode ; seul O2 y est réduit, et comme le fer n'est pas oxydé, il est protégé.",
        "ru": "Магний активнее железа, поэтому именно он отдаёт электроны и окисляется: магний разрушается как анод. Железо становится катодом; на нём восстанавливается только O2, и поскольку железо не окисляется, оно защищено.",
        "ar": "المغنيسيوم أنشط من الحديد، لذا فهو الفلز الذي يفقد الإلكترونات ويتأكسد: يتآكل المغنيسيوم بوصفه مصعدًا. ويصبح الحديد مهبطًا يُختزل عليه O2 فقط، ولأن الحديد لا يتأكسد فإنه يبقى محميًا.",
        "zh": "镁比铁活泼，所以失去电子、被氧化的是镁：镁作为阳极被腐蚀。铁成为阴极，其表面只发生 O2 的还原，铁不被氧化，因而受到保护。",
        "ku": "Magnezyûm ji hesin çalaktir e, ji ber vê metala ku elektronan dide û oksîde dibe ew e: magnezyûm wek anod dixure. Hesin dibe katod; li ser wî tenê O2 redûkte dibe û ji ber ku hesin oksîde nabe tê parastin."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u22-c01",
      "conceptA": {
        "tr": "Galvanik Hücre (Pil)",
        "en": "Galvanic Cell (Battery)",
        "de": "Galvanische Zelle (Batterie)",
        "fr": "Cellule galvanique (batterie)",
        "ru": "Гальванический элемент (источник тока)",
        "ar": "الخلية الجلفانية",
        "zh": "原电池",
        "ku": "Şaneya Galvanîk (Pîl)"
      },
      "conceptB": {
        "tr": "Elektroliz Hücresi",
        "en": "Electrolysis Cell",
        "de": "Elektrolysezelle",
        "fr": "Cellule d'électrolyse",
        "ru": "Электролизёр (электролитическая ячейка)",
        "ar": "خلية التحليل الكهربائي",
        "zh": "电解池",
        "ku": "Şaneya Elektrolîzê"
      },
      "distinction": {
        "tr": "Pil kimyasal enerjiyi elektrik enerjisine çevirir (istemli); elektroliz elektrikle istemsiz tepkimeyi yürütür.",
        "en": "A galvanic cell converts chemical energy into electrical energy (spontaneous); electrolysis uses electricity to drive a non-spontaneous reaction.",
        "de": "Eine galvanische Zelle wandelt chemische in elektrische Energie um (freiwillig); die Elektrolyse erzwingt mit Strom eine nicht freiwillige Reaktion.",
        "fr": "Une pile convertit l'énergie chimique en énergie électrique (spontané) ; l'électrolyse utilise l'électricité pour réaliser une réaction non spontanée.",
        "ru": "Гальванический элемент самопроизвольно превращает химическую энергию в электрическую; электролизёр за счёт электрического тока осуществляет несамопроизвольную реакцию.",
        "ar": "في الخلية الجلفانية تتحول الطاقة الكيميائية إلى طاقة كهربائية تلقائيًا؛ أما في خلية التحليل الكهربائي فتُستخدم الكهرباء لإحداث تفاعل غير تلقائي.",
        "zh": "原电池将化学能自发地转化为电能；电解池则利用电能驱动非自发反应。",
        "ku": "Şaneya galvanîk (pîl) enerjiya kîmyewî vediguherîne enerjiya elektrîkê (xweber); şaneya elektrolîzê bi elektrîkê reaksiyoneke ne-xweber dimeşîne."
      }
    },
    {
      "id": "u22-c02",
      "conceptA": {
        "tr": "Katotta H2 Çıkışı",
        "en": "H2 Output at Cathode",
        "de": "H2-Ausstoß an der Kathode",
        "fr": "Sortie H2 à la cathode",
        "ru": "Выделение H2 на катоде",
        "ar": "تصاعد H2 عند المهبط",
        "zh": "阴极产生的 H2",
        "ku": "Derketina H2 li Katodê"
      },
      "conceptB": {
        "tr": "Anotta O2 Çıkışı",
        "en": "O2 Output at Anode",
        "de": "O2-Ausgabe an der Anode",
        "fr": "Sortie O2 à l'anode",
        "ru": "Выделение O2 на аноде",
        "ar": "تصاعد O2 عند المصعد",
        "zh": "阳极产生的 O2",
        "ku": "Derketina O2 li Anodê"
      },
      "distinction": {
        "tr": "Katotta H2 çıkışı suyun indirgenmesiyle olur ve hacmi anottaki O2 hacminin iki katıdır; anotta O2 çıkışı suyun yükseltgenmesiyle olur.",
        "en": "H2 output at the cathode results from the reduction of water and its volume is twice that of the O2 at the anode; O2 output at the anode results from the oxidation of water.",
        "de": "Die H2-Bildung an der Kathode entsteht durch Reduktion von Wasser, ihr Volumen ist doppelt so groß wie das des O2 an der Anode; die O2-Bildung an der Anode entsteht durch Oxidation von Wasser.",
        "fr": "La production de H2 à la cathode provient de la réduction de l'eau et son volume est le double de celui de O2 à l'anode ; la production de O2 à l'anode provient de l'oxydation de l'eau.",
        "ru": "Выделение H2 на катоде происходит при восстановлении воды, и объём образующегося газа вдвое больше объёма O2 на аноде; выделение O2 на аноде происходит при окислении воды.",
        "ar": "ينتج تصاعد H2 عند المهبط عن اختزال الماء، وحجمه ضعف حجم O2؛ أما تصاعد O2 عند المصعد فينتج عن أكسدة الماء.",
        "zh": "阴极产生的 H2 来自水的还原，其体积是阳极 O2 体积的两倍；阳极产生的 O2 来自水的氧化。",
        "ku": "Derketina H2 li katodê bi redûksiyona avê pêk tê û qebareya wê du qatê qebareya O2 ya li anodê ye; derketina O2 li anodê bi oksîdasyona avê pêk tê."
      }
    },
    {
      "id": "u22-c03",
      "conceptA": {
        "tr": "Erimiş Tuz Elektrolizi",
        "en": "Molten Salt Electrolysis",
        "de": "Schmelzflusselektrolyse",
        "fr": "Électrolyse d'un sel fondu",
        "ru": "Электролиз расплава соли",
        "ar": "التحليل الكهربائي للملح المنصهر",
        "zh": "熔盐电解",
        "ku": "Elektrolîza Xwêya Helîyayî"
      },
      "conceptB": {
        "tr": "Sulu Çözelti Elektrolizi",
        "en": "Aqueous Solution Electrolysis",
        "de": "Elektrolyse wässriger Lösungen",
        "fr": "Électrolyse en solution aqueuse",
        "ru": "Электролиз водного раствора",
        "ar": "التحليل الكهربائي للمحلول المائي",
        "zh": "水溶液电解",
        "ku": "Elektrolîza Çareseriya Avî"
      },
      "distinction": {
        "tr": "Erimiş tuz elektrolizinde yalnızca tuzun katyonu ve anyonu elektrotlarda tepkimeye girer; sulu çözelti elektrolizinde ise su molekülleri de katotta indirgenme, anotta yükseltgenme yarışına katılır.",
        "en": "In molten salt electrolysis only the salt's cation and anion react at the electrodes; in aqueous solution electrolysis water molecules also compete to be reduced at the cathode and oxidized at the anode.",
        "de": "Schmelzflusselektrolyse: Nur Kation und Anion des Salzes reagieren an den Elektroden; Elektrolyse wässriger Lösungen: Auch Wassermoleküle konkurrieren um die Reduktion an der Kathode und die Oxidation an der Anode.",
        "fr": "Électrolyse d'un sel fondu : seuls le cation et l'anion du sel réagissent aux électrodes ; électrolyse en solution aqueuse : les molécules d'eau entrent aussi en compétition pour être réduites à la cathode et oxydées à l'anode.",
        "ru": "Электролиз расплава соли затрагивает только катион и анион соли; при электролизе водного раствора в конкуренцию за восстановление на катоде и окисление на аноде вступают и молекулы воды.",
        "ar": "في التحليل الكهربائي للملح المنصهر يتفاعل عند الأقطاب كاتيون الملح وأنيونه فقط؛ أما في التحليل الكهربائي للمحلول المائي فتدخل جزيئات الماء أيضًا في التنافس على الاختزال عند المهبط والتأكسد عند المصعد.",
        "zh": "熔盐电解中只有盐的阳离子和阴离子在电极上反应；水溶液电解中，水分子也参与阴极还原和阳极氧化的竞争。",
        "ku": "Di elektrolîza xwêya helîyayî de tenê katyon û anyona xwêyê li elektrodan dikevin reaksiyonê; di elektrolîza çareseriya avî de molekulên avê jî beşdarî pêşbirka redûksiyonê li katodê û oksîdasyonê li anodê dibin."
      }
    },
    {
      "id": "u22-c04",
      "conceptA": {
        "tr": "Aktif Anot (örn. Cu)",
        "en": "Active Anode (e.g., Cu)",
        "de": "Aktive Anode (z. B. Cu)",
        "fr": "Anode active (par ex. Cu)",
        "ru": "Активный анод (например, Cu)",
        "ar": "مصعد نشط (مثل Cu)",
        "zh": "活性阳极(如 Cu)",
        "ku": "Anoda Aktîf (mînak Cu)"
      },
      "conceptB": {
        "tr": "Tepkimeye Girmeyen (inert) Elektrot (Pt, grafit)",
        "en": "Inert Electrode (Pt, graphite)",
        "de": "Inerte Elektrode (Pt, Graphit)",
        "fr": "Électrode inerte (Pt, graphite)",
        "ru": "Инертный электрод (Pt, графит)",
        "ar": "قطب خامل (Pt، الجرافيت)",
        "zh": "惰性电极(Pt、石墨)",
        "ku": "Elektroda Înert (Pt, grafît)"
      },
      "distinction": {
        "tr": "Aktif anot elektrolizde kendisi yükseltgenerek çözeltiye geçer (örn. bakır arıtımında Cu anot); inert elektrot tepkimeye girmez, yalnızca elektron alışverişine yüzey sağlar.",
        "en": "An active anode is itself oxidized and dissolves during electrolysis (e.g., the Cu anode in copper refining); an inert electrode does not react and only provides a surface for electron transfer.",
        "de": "Eine aktive Anode wird bei der Elektrolyse selbst oxidiert und geht in Lösung (z. B. die Cu-Anode bei der Kupferraffination); eine inerte Elektrode reagiert nicht und bietet nur die Oberfläche für den Elektronenaustausch.",
        "fr": "Une anode active s'oxyde elle-même et se dissout pendant l'électrolyse (par ex. l'anode de Cu lors du raffinage du cuivre) ; une électrode inerte ne réagit pas et fournit seulement une surface pour l'échange d'électrons.",
        "ru": "Активный анод при электролизе окисляется и переходит в раствор (например, медный анод при рафинировании меди); инертный электрод в реакцию не вступает и лишь служит поверхностью для обмена электронами.",
        "ar": "المصعد النشط يتأكسد هو نفسه ويذوب أثناء التحليل الكهربائي (مثل مصعد النحاس في تنقية النحاس)؛ أما القطب الخامل فلا يتفاعل ويوفر سطحًا لانتقال الإلكترونات فقط.",
        "zh": "活性阳极(如 Cu)在电解中自身被氧化而溶解，例如精炼铜时的粗铜阳极；惰性电极(Pt、石墨)不参与反应，只提供电子转移的表面。",
        "ku": "Anoda aktîf di elektrolîzê de bi xwe oksîde dibe û derbasî çareseriyê dibe (mînak anoda Cu di paqijkirina sifir de); elektroda înert nakeve reaksiyonê, tenê ji bo danûstandina elektronan rûyekî peyda dike."
      }
    },
    {
      "id": "u22-c05",
      "conceptA": {
        "tr": "Faraday Sabiti (F)",
        "en": "Faraday Constant (F)",
        "de": "Faraday-Konstante (F)",
        "fr": "Constante de Faraday (F)",
        "ru": "Постоянная Фарадея (F)",
        "ar": "ثابت فاراداي (F)",
        "zh": "法拉第常数(F)",
        "ku": "Sabîta Faraday (F)"
      },
      "conceptB": {
        "tr": "Elektrik Yükü (Q = I.t)",
        "en": "Electric Charge (Q = I.t)",
        "de": "Elektrische Ladung (Q = I.t)",
        "fr": "Charge électrique (Q = I.t)",
        "ru": "Электрический заряд (Q = I.t)",
        "ar": "الشحنة الكهربائية (Q = I.t)",
        "zh": "电量(Q = I.t)",
        "ku": "Bara Elektrîkê (Q = I.t)"
      },
      "distinction": {
        "tr": "Faraday sabiti, 1 mol elektronun taşıdığı yüktür ve yaklaşık 96500 C/mol'dür; elektrik yükü ise devreden geçen toplam yüktür ve akım şiddeti ile sürenin çarpımına eşittir.",
        "en": "The Faraday constant is the charge carried by 1 mol of electrons, about 96500 C/mol; the electric charge is the total charge passing through the circuit and equals the product of current and time.",
        "de": "Faraday-Konstante: Ladung von 1 mol Elektronen, etwa 96500 C/mol; elektrische Ladung: die insgesamt durch den Stromkreis geflossene Ladung, gleich dem Produkt aus Stromstärke und Zeit.",
        "fr": "Constante de Faraday : charge portée par 1 mol d'électrons, soit environ 96500 C/mol ; charge électrique : charge totale qui traverse le circuit, égale au produit de l'intensité par la durée.",
        "ru": "Постоянная Фарадея — заряд 1 моль электронов, примерно 96500 Кл/моль; электрический заряд — суммарный заряд, прошедший через цепь, он равен произведению силы тока на время.",
        "ar": "ثابت فاراداي: الشحنة التي يحملها 1 mol من الإلكترونات، ويساوي تقريبًا 96500 C/mol؛ أما الشحنة الكهربائية فمقدار الشحنة الكلية المارة في الدائرة، ويساوي حاصل ضرب شدة التيار في الزمن.",
        "zh": "法拉第常数(F)是 1 mol 电子所带的电量，约为 96500 C/mol；电量(Q = I.t)则是通过电路的总电荷，等于电流与时间的乘积。",
        "ku": "Sabîta Faraday bara ku 1 mol elektron hildigire ye û nêzîkî 96500 C/mol e; bara elektrîkê jî bara giştî ye ku di çerxê re derbas dibe û bi lêkdana şiddeta herikê û demê re wekhev e."
      }
    },
    {
      "id": "u22-c06",
      "conceptA": {
        "tr": "Kurban Elektrot",
        "en": "Sacrificial Electrode",
        "de": "Opferelektrode",
        "fr": "Électrode sacrificielle",
        "ru": "Протектор (жертвенный анод)",
        "ar": "القطب المضحّي",
        "zh": "牺牲阳极",
        "ku": "Elektroda Qurbanî"
      },
      "conceptB": {
        "tr": "Kaplama Metali",
        "en": "Plating Metal",
        "de": "Überzugsmetall",
        "fr": "Métal de revêtement",
        "ru": "Металл покрытия",
        "ar": "فلز الطلاء",
        "zh": "镀层金属",
        "ku": "Metala Pêçanê"
      },
      "distinction": {
        "tr": "Kurban elektrot, korunacak metalden daha aktif olduğu için onun yerine yükseltgenip aşınan metaldir; kaplama metali ise elektroliz hücresinde anoda bağlanan ve iyonları katottaki eşyanın yüzeyinde indirgenerek biriken metaldir.",
        "en": "A sacrificial electrode is a metal more active than the metal to be protected, so it is oxidized and corrodes in its place; a plating metal is the metal connected as the anode of an electrolytic cell, whose ions are reduced and deposited on the surface of the object at the cathode.",
        "de": "Opferelektrode: ein Metall, das aktiver (unedler) als das zu schützende Metall ist und deshalb an dessen Stelle oxidiert wird; Überzugsmetall: wird in einer Elektrolysezelle als Anode geschaltet, seine Ionen werden auf der Oberfläche des Gegenstands an der Kathode reduziert und abgeschieden.",
        "fr": "Électrode sacrificielle : métal plus actif que le métal à protéger, qui s'oxyde et se corrode donc à sa place ; métal de revêtement : relié à l'anode d'une cellule d'électrolyse, ses ions sont réduits et déposés à la surface de l'objet placé à la cathode.",
        "ru": "Протектор — металл более активный, чем защищаемый, поэтому он окисляется и разрушается вместо него; металл покрытия служит анодом электролизёра, а его ионы восстанавливаются на катоде и осаждаются на поверхности изделия.",
        "ar": "القطب المضحّي فلز أكثر نشاطًا من الفلز المراد حمايته، فيتأكسد ويتآكل بدلًا منه؛ أما فلز الطلاء فيُستخدم مصعدًا في خلية التحليل الكهربائي، وتُختزل أيوناته وتترسب على سطح الجسم الموصول بالمهبط.",
        "zh": "牺牲阳极是比被保护金属更活泼的金属，因此代替它被氧化而腐蚀；镀层金属则在电解池中接阳极，其离子在阴极（镀件）表面被还原并沉积。",
        "ku": "Elektroda qurbanî metaleke ji metala parastî çalaktir e, loma li şûna wê oksîde dibe û tê xwarin; metala pêçanê di şaneya elektrolîzê de bi anodê ve tê girêdan û îyonên wê li ser rûyê tiştê li katodê redûkte dibin û kom dibin."
      }
    },
    {
      "id": "u22-c07",
      "conceptA": {
        "tr": "Korozyon",
        "en": "Corrosion",
        "de": "Korrosion",
        "fr": "corrosion",
        "ru": "Коррозия",
        "ar": "التآكل",
        "zh": "腐蚀",
        "ku": "Korozyon"
      },
      "conceptB": {
        "tr": "Paslanma",
        "en": "Rusting",
        "de": "Rosten",
        "fr": "Rouille",
        "ru": "Ржавление",
        "ar": "الصدأ",
        "zh": "生锈",
        "ku": "Zengarbûn"
      },
      "distinction": {
        "tr": "Korozyon herhangi bir metalin çevresiyle tepkimeye girerek aşınmasını anlatan genel kavramdır; paslanma demirin oksijen ve nemle Fe2O3.nH2O oluşturmasıdır.",
        "en": "Corrosion is the general term for the wearing away of any metal by reaction with its environment; rusting is the formation of Fe2O3.nH2O from iron with oxygen and moisture.",
        "de": "Korrosion ist der Oberbegriff für die Zerstörung eines beliebigen Metalls durch Reaktion mit seiner Umgebung; Rosten ist die Bildung von Fe2O3.nH2O aus Eisen mit Sauerstoff und Feuchtigkeit.",
        "fr": "La corrosion est le terme général désignant la dégradation d'un métal par réaction avec son environnement ; la rouille est la formation de Fe2O3.nH2O à partir du fer, du dioxygène et de l'humidité.",
        "ru": "Коррозия обозначает разрушение любого металла при взаимодействии с окружающей средой; ржавление — образование ржавчины Fe2O3.nH2O из железа под действием кислорода и влаги.",
        "ar": "التآكل مصطلح عام يصف تلف أي فلز بتفاعله مع محيطه؛ أما الصدأ فهو تكوّن Fe2O3.nH2O من الحديد بوجود الأكسجين والرطوبة.",
        "zh": "腐蚀是指任何金属与环境发生反应而损耗的总称；生锈是铁与氧气和水分作用生成 Fe2O3.nH2O 的过程。",
        "ku": "Korozyon têgeheke giştî ye ku xwarina her metalekê bi reaksiyona bi derdorê re îfade dike; zengarbûn çêbûna Fe2O3.nH2O ye ji hesin bi oksîjen û şiliyê re."
      }
    },
    {
      "id": "u22-c08",
      "conceptA": {
        "tr": "Kalaylama (Kalay Kaplama)",
        "en": "Tin Plating",
        "de": "Verzinnen",
        "fr": "Étamage",
        "ru": "Лужение (покрытие оловом)",
        "ar": "القصدرة (الطلاء بالقصدير)",
        "zh": "镀锡",
        "ku": "Qelaykirin (Pêçana Qelayê)"
      },
      "conceptB": {
        "tr": "Galvanizleme",
        "en": "Galvanizing",
        "de": "Feuerverzinken",
        "fr": "Galvanisation",
        "ru": "Цинкование (оцинковка)",
        "ar": "الجلفنة",
        "zh": "热镀锌",
        "ku": "Galvanîzekirin"
      },
      "distinction": {
        "tr": "Kalaylamada demir, kendisinden daha pasif olan kalayla kaplanır; kaplama çizilirse demir anot olur ve daha hızlı paslanır. Galvanizlemede demir daha aktif olan çinkoyla kaplanır; kaplama çizilse bile çinko yükseltgenerek demiri korur.",
        "en": "In tin plating iron is coated with tin, which is less active than iron; if the coating is scratched, iron becomes the anode and rusts faster. In galvanizing iron is coated with the more active zinc; even if the coating is scratched, zinc is oxidized and protects the iron.",
        "de": "Beim Verzinnen wird Eisen mit dem edleren Zinn überzogen; wird der Überzug verletzt, wird Eisen zur Anode und rostet schneller. Beim Verzinken wird Eisen mit dem unedleren Zink überzogen; selbst bei verletztem Überzug wird Zink oxidiert und schützt das Eisen.",
        "fr": "Dans l'étamage, le fer est recouvert d'étain, moins actif que lui ; si le revêtement est rayé, le fer devient l'anode et rouille plus vite. Dans la galvanisation, le fer est recouvert de zinc, plus actif ; même si le revêtement est rayé, le zinc s'oxyde et protège le fer.",
        "ru": "Лужение означает покрытие железа оловом, менее активным металлом; при повреждении покрытия железо становится анодом и ржавеет быстрее. Цинкование — покрытие железа более активным цинком; даже при повреждении покрытия окисляется цинк и защищает железо.",
        "ar": "في القصدرة يُطلى الحديد بالقصدير الأقل نشاطًا منه؛ فإذا خُدش الطلاء أصبح الحديد مصعدًا وصدئ أسرع. وفي الجلفنة يُطلى الحديد بالزنك الأكثر نشاطًا؛ وحتى لو خُدش الطلاء يتأكسد الزنك ويحمي الحديد.",
        "zh": "镀锡是在铁表面镀上比铁不活泼的锡，镀层一旦划破，铁成为负极而更快生锈；热镀锌是在铁表面镀上比铁活泼的锌，即使镀层划破，也是锌被氧化而铁受到保护。",
        "ku": "Di qelaykirinê de hesin bi qelayê, ku ji wî kêmçalaktir e, tê pêçandin; heke pêçan biqelişe, hesin dibe anod û zûtir zengar digire. Di galvanîzekirinê de hesin bi zinka çalaktir tê pêçandin; heta ku pêçan biqelişe jî, zink oksîde dibe û hesin diparêze."
      }
    }
  ],
  "sequences": [
    {
      "id": "u22-s01",
      "title": {
        "tr": "Elektrolizde Toplanan Kütlenin Hesaplanması",
        "en": "Calculation of the Mass Deposited in Electrolysis",
        "de": "Berechnung der bei der Elektrolyse abgeschiedenen Masse",
        "fr": "Calcul de la masse déposée lors d'une électrolyse",
        "ru": "Расчёт массы вещества, выделившегося при электролизе",
        "ar": "حساب الكتلة المترسبة في التحليل الكهربائي",
        "zh": "电解中析出质量的计算",
        "ku": "Hesabkirina Girseya ku di Elektrolîzê de Kom Dibe"
      },
      "steps": [
        {
          "tr": "Q = I * t ile toplam yükü (Coulomb) hesapla",
          "en": "Calculate total charge (Coulomb) with Q = I * t",
          "de": "Berechnen Sie die Gesamtladung (Coulomb) mit Q = I * t",
          "fr": "Calculer la charge totale (Coulomb) avec Q = I * t",
          "ru": "Рассчитать общий заряд (в кулонах) по формуле Q = I * t",
          "ar": "احسب الشحنة الكلية (كولوم) باستخدام Q = I * t",
          "zh": "计算总电量(库仑)：Q = I * t",
          "ku": "Bi Q = I * t bara giştî (Coulomb) hesab bike"
        },
        {
          "tr": "Mol elektronu bul: n_e = Q / 96500",
          "en": "Find the moles of electrons: n_e = Q / 96500",
          "de": "Stoffmenge der Elektronen bestimmen: n_e = Q / 96500",
          "fr": "Calculer la quantité d'électrons (en mol) : n_e = Q / 96500",
          "ru": "Найти количество вещества электронов: n_e = Q / 96500",
          "ar": "احسب عدد مولات الإلكترونات: n_e = Q / 96500",
          "zh": "求电子的物质的量：n_e = Q / 96500",
          "ku": "Hejmara molên elektronan bibîne: n_e = Q / 96500"
        },
        {
          "tr": "Elektrot yarı tepkimesini yazıp elektron katsayısıyla oranla",
          "en": "Write the electrode half-reaction and relate moles of substance to moles of electrons using the electron coefficient",
          "de": "Elektrodenhalbreaktion aufstellen und über den Elektronenkoeffizienten die Stoffmenge des Produkts berechnen",
          "fr": "Écrire la demi-réaction à l'électrode et relier la quantité de produit à celle des électrons grâce au coefficient des électrons",
          "ru": "Записать полуреакцию на электроде и по коэффициенту при электронах найти количество вещества продукта",
          "ar": "اكتب نصف تفاعل القطب واربط مولات المادة بمولات الإلكترونات باستخدام معامل الإلكترونات",
          "zh": "写出电极半反应，利用电子的化学计量数换算出产物的物质的量",
          "ku": "Nîv-reaksiyona elektrodê binivîse û bi hevbera elektronan rêjeya di navbera mola madeyê û mola elektronan de deyne"
        },
        {
          "tr": "m = n * MA ile toplanan katı kütlesini bul",
          "en": "Find mass of solid collected with m = n * MA",
          "de": "Finden Sie die Feststoffmasse, die mit m = n * MA gesammelt wurde",
          "fr": "Trouver la masse de solide collecté avec m = n * MA",
          "ru": "Найти массу выделившегося твёрдого вещества по формуле m = n * MA",
          "ar": "أوجد كتلة المادة الصلبة المتجمعة باستخدام m = n * MA",
          "zh": "由 m = n * MA 计算析出固体的质量",
          "ku": "Bi m = n * MA girseya madeya hişk a kombûyî bibîne"
        }
      ]
    },
    {
      "id": "u22-s02",
      "title": {
        "tr": "Bakırın Elektrolizle Saflaştırılması (Rafinasyon)",
        "en": "Electrolytic Refining of Copper",
        "de": "Elektrolytische Raffination von Kupfer",
        "fr": "Raffinage électrolytique du cuivre",
        "ru": "Электролитическое рафинирование меди",
        "ar": "تنقية النحاس بالتحليل الكهربائي",
        "zh": "电解精炼铜",
        "ku": "Paqijkirina Sifir bi Elektrolîzê (Rafînasyon)"
      },
      "steps": [
        {
          "tr": "Saf olmayan (ham) bakır anoda, ince saf bakır levha katoda bağlanır",
          "en": "Impure (crude) copper is connected as the anode and a thin sheet of pure copper as the cathode",
          "de": "Unreines Rohkupfer wird als Anode, ein dünnes Reinkupferblech als Kathode geschaltet",
          "fr": "Le cuivre impur (brut) est relié comme anode et une fine plaque de cuivre pur comme cathode",
          "ru": "Неочищенную (черновую) медь подключают как анод, а тонкую пластину чистой меди — как катод",
          "ar": "يوصل النحاس غير النقي (الخام) بوصفه مصعدًا وصفيحة رقيقة من النحاس النقي بوصفها مهبطًا",
          "zh": "粗铜作阳极，薄纯铜片作阴极",
          "ku": "Sifirê nepaqij (xav) wek anod, pelekî zirav ê sifirê paqij jî wek katod tê girêdan"
        },
        {
          "tr": "Elektrotlar CuSO4 çözeltisine daldırılır ve doğru akım uygulanır",
          "en": "The electrodes are dipped into CuSO4 solution and direct current is applied",
          "de": "Die Elektroden werden in CuSO4-Lösung getaucht und Gleichstrom angelegt",
          "fr": "Les électrodes sont plongées dans une solution de CuSO4 et un courant continu est appliqué",
          "ru": "Электроды погружают в раствор CuSO4 и пропускают постоянный ток",
          "ar": "يُغمس القطبان في محلول CuSO4 ويُمرر تيار مستمر",
          "zh": "将电极插入 CuSO4 溶液中并通入直流电",
          "ku": "Elektrod dikevin nav çareseriya CuSO4 û herika rasterast tê dayîn"
        },
        {
          "tr": "Anottaki bakır yükseltgenerek Cu2+ iyonları halinde çözeltiye geçer",
          "en": "Copper at the anode is oxidized and passes into solution as Cu2+ ions",
          "de": "Das Kupfer der Anode wird oxidiert und geht als Cu2+-Ionen in Lösung",
          "fr": "Le cuivre de l'anode s'oxyde et passe en solution sous forme d'ions Cu2+",
          "ru": "Медь анода окисляется и переходит в раствор в виде ионов Cu2+",
          "ar": "يتأكسد نحاس المصعد وينتقل إلى المحلول على شكل أيونات Cu2+",
          "zh": "阳极的铜被氧化，以 Cu2+ 形式进入溶液",
          "ku": "Sifirê li anodê oksîde dibe û wek îyonên Cu2+ derbasî çareseriyê dibe"
        },
        {
          "tr": "Cu2+ iyonları katotta indirgenerek saf bakır olarak birikir; Ag ve Au gibi pasif safsızlıklar anot çamurunda toplanır",
          "en": "Cu2+ ions are reduced at the cathode and deposit as pure copper; less active impurities such as Ag and Au collect in the anode mud",
          "de": "Cu2+-Ionen werden an der Kathode reduziert und scheiden sich als Reinkupfer ab; edlere Verunreinigungen wie Ag und Au sammeln sich im Anodenschlamm",
          "fr": "Les ions Cu2+ sont réduits à la cathode et s'y déposent en cuivre pur ; les impuretés moins actives comme Ag et Au se rassemblent dans les boues anodiques",
          "ru": "Ионы Cu2+ восстанавливаются на катоде и осаждаются в виде чистой меди; менее активные примеси (Ag, Au) собираются в анодном шламе",
          "ar": "تُختزل أيونات Cu2+ عند المهبط وتترسب نحاسًا نقيًا، وتتجمع الشوائب الأقل نشاطًا مثل Ag و Au في طين المصعد",
          "zh": "Cu2+ 在阴极被还原并沉积为纯铜；Ag、Au 等不活泼杂质沉积在阳极泥中",
          "ku": "Îyonên Cu2+ li katodê redûkte dibin û wek sifirê paqij kom dibin; nepaqijiyên kêmçalak ên wek Ag û Au di heriya anodê de kom dibin"
        }
      ]
    },
    {
      "id": "u22-s03",
      "title": {
        "tr": "Hoffman Voltametresinde Su Elektrolizi",
        "en": "Water Electrolysis in Hoffman Voltameter",
        "de": "Wasserelektrolyse im Hoffman-Voltameter",
        "fr": "Électrolyse de l'eau dans le voltamètre Hoffman",
        "ru": "Электролиз воды в аппарате Гофмана",
        "ar": "التحليل الكهربائي للماء في فولتامتر هوفمان",
        "zh": "用霍夫曼电解器电解水",
        "ku": "Elektrolîza Avê di Voltametra Hoffman de"
      },
      "steps": [
        {
          "tr": "Saf suya iletkenliği artırmak için birkaç damla seyreltik H2SO4 eklenir",
          "en": "A few drops of dilute H2SO4 are added to pure water to increase its conductivity",
          "de": "Reinem Wasser werden zur Erhöhung der Leitfähigkeit einige Tropfen verdünnte H2SO4 zugesetzt",
          "fr": "On ajoute quelques gouttes de H2SO4 dilué à l'eau pure pour augmenter sa conductivité",
          "ru": "К чистой воде для повышения электропроводности добавляют несколько капель разбавленной H2SO4",
          "ar": "تُضاف بضع قطرات من H2SO4 المخفف إلى الماء النقي لزيادة توصيله الكهربائي",
          "zh": "向纯水中加入几滴稀 H2SO4 以增强导电性",
          "ku": "Ji bo zêdekirina guhêzbariyê çend dilop H2SO4 ya sist li ava paqij tê zêdekirin"
        },
        {
          "tr": "Çözelti voltametreye doldurulur ve elektrotlar doğru akım kaynağına bağlanır",
          "en": "The solution is filled into the voltameter and the electrodes are connected to a DC source",
          "de": "Die Lösung wird in den Voltameter gefüllt und die Elektroden werden an eine Gleichstromquelle angeschlossen",
          "fr": "La solution est versée dans le voltamètre et les électrodes sont reliées à un générateur de courant continu",
          "ru": "Раствор заливают в аппарат, а электроды подключают к источнику постоянного тока",
          "ar": "يُملأ الفولتامتر بالمحلول ويوصل القطبان بمصدر تيار مستمر",
          "zh": "将溶液注入霍夫曼电解器，并将电极连接到直流电源",
          "ku": "Çareserî tê kirin nav voltametrê û elektrod bi çavkaniya herika rasterast ve têne girêdan"
        },
        {
          "tr": "Katotta su indirgenerek H2, anotta su yükseltgenerek O2 gazı oluşur",
          "en": "Water is reduced to H2 at the cathode and oxidized to O2 at the anode",
          "de": "An der Kathode wird Wasser zu H2 reduziert, an der Anode zu O2 oxidiert",
          "fr": "L'eau est réduite en H2 à la cathode et oxydée en O2 à l'anode",
          "ru": "На катоде вода восстанавливается до H2, на аноде окисляется до O2",
          "ar": "يُختزل الماء إلى H2 عند المهبط ويتأكسد إلى O2 عند المصعد",
          "zh": "水在阴极被还原生成 H2，在阳极被氧化生成 O2",
          "ku": "Li katodê av redûkte dibe û gaza H2, li anodê av oksîde dibe û gaza O2 çêdibe"
        },
        {
          "tr": "Toplanan gaz hacimleri ölçülür: katottaki H2 hacmi anottaki O2 hacminin iki katıdır",
          "en": "The collected gas volumes are measured: the volume of H2 at the cathode is twice the volume of O2 at the anode",
          "de": "Die gesammelten Gasvolumina werden gemessen: Das H2-Volumen an der Kathode ist doppelt so groß wie das O2-Volumen an der Anode",
          "fr": "On mesure les volumes de gaz recueillis : le volume de H2 à la cathode est le double du volume de O2 à l'anode",
          "ru": "Измеряют объёмы собранных газов: объём H2 на катоде вдвое больше объёма O2 на аноде",
          "ar": "تُقاس حجوم الغازات المتجمعة: حجم H2 عند المهبط ضعف حجم O2 عند المصعد",
          "zh": "测量收集到的气体体积：阴极 H2 的体积是阳极 O2 体积的两倍",
          "ku": "Qebareyên gazên kombûyî têne pîvan: qebareya H2 ya li katodê du qatê qebareya O2 ya li anodê ye"
        }
      ]
    },
    {
      "id": "u22-s04",
      "title": {
        "tr": "Kurban Elektrotla Katodik Koruma",
        "en": "Cathodic Protection with a Sacrificial Electrode",
        "de": "Kathodischer Schutz mit einer Opferelektrode",
        "fr": "Protection cathodique par électrode sacrificielle",
        "ru": "Катодная защита с помощью протектора",
        "ar": "الحماية الكاثودية بالقطب المضحّي",
        "zh": "用牺牲阳极进行阴极保护",
        "ku": "Parastina Katodîk bi Elektroda Qurbanî"
      },
      "steps": [
        {
          "tr": "Korunacak metalin (demir) standart indirgenme potansiyeli belirlenir",
          "en": "The standard reduction potential of the metal to be protected (iron) is determined",
          "de": "Das Standardreduktionspotential des zu schützenden Metalls (Eisen) wird ermittelt",
          "fr": "On détermine le potentiel standard de réduction du métal à protéger (le fer)",
          "ru": "Определяют стандартный потенциал восстановления защищаемого металла (железа)",
          "ar": "يُحدَّد جهد الاختزال القياسي للفلز المراد حمايته (الحديد)",
          "zh": "确定被保护金属（铁）的标准还原电势",
          "ku": "Potansiyela redûksiyonê ya standard a metala ku dê bê parastin (hesin) tê diyarkirin"
        },
        {
          "tr": "İndirgenme potansiyeli demirinkinden küçük, yani demirden aktif bir metal (Mg veya Zn) kurban elektrot olarak seçilir",
          "en": "A metal whose reduction potential is lower than that of iron, i.e. more active than iron (Mg or Zn), is chosen as the sacrificial electrode",
          "de": "Ein Metall mit kleinerem Reduktionspotential als Eisen, also ein unedleres Metall (Mg oder Zn), wird als Opferelektrode gewählt",
          "fr": "On choisit comme électrode sacrificielle un métal de potentiel de réduction inférieur à celui du fer, donc plus actif (Mg ou Zn)",
          "ru": "В качестве протектора выбирают металл с меньшим, чем у железа, потенциалом восстановления, то есть более активный (Mg или Zn)",
          "ar": "يُختار فلز جهد اختزاله أصغر من جهد الحديد، أي أنشط منه (Mg أو Zn)، قطبًا مضحّيًا",
          "zh": "选择还原电势比铁低、即比铁活泼的金属（Mg 或 Zn）作牺牲电极",
          "ku": "Metaleke ku potansiyela wê ya redûksiyonê ji ya hesin piçûktir e, ango ji hesin çalaktir e (Mg an Zn), wek elektroda qurbanî tê hilbijartin"
        },
        {
          "tr": "Seçilen metal blok iletken bir telle demir boruya bağlanır",
          "en": "The chosen metal block is connected to the iron pipe with a conducting wire",
          "de": "Der gewählte Metallblock wird mit einem leitenden Draht mit dem Eisenrohr verbunden",
          "fr": "Le bloc de métal choisi est relié à la conduite en fer par un fil conducteur",
          "ru": "Выбранный металлический блок соединяют с железной трубой проводником",
          "ar": "تُوصل كتلة الفلز المختارة بالأنبوب الحديدي بسلك موصل",
          "zh": "用导线把选定的金属块与铁管相连",
          "ku": "Bloka metalê ya hilbijartî bi têleke guhêzbar bi boriya hesin ve tê girêdan"
        },
        {
          "tr": "Kurban metal anot olarak yükseltgenip aşınırken demir katot olarak korunur; tükenen blok yenisiyle değiştirilir",
          "en": "While the sacrificial metal is oxidized and wears away as the anode, the iron is protected as the cathode; the used-up block is replaced with a new one",
          "de": "Während das Opfermetall als Anode oxidiert wird und sich abnutzt, ist das Eisen als Kathode geschützt; der verbrauchte Block wird ersetzt",
          "fr": "Pendant que le métal sacrificiel s'oxyde et s'use en tant qu'anode, le fer est protégé en tant que cathode ; le bloc usé est remplacé par un neuf",
          "ru": "Пока протектор окисляется и разрушается как анод, железо защищено как катод; израсходованный блок заменяют новым",
          "ar": "بينما يتأكسد الفلز المضحّي ويتآكل بوصفه مصعدًا يبقى الحديد محميًا بوصفه مهبطًا؛ وتُستبدل الكتلة المستهلكة بأخرى جديدة",
          "zh": "牺牲金属作为阳极被氧化而消耗，铁作为阴极受到保护；耗尽的金属块要更换新的",
          "ku": "Dema metala qurbanî wek anod oksîde dibe û dixure, hesin wek katod tê parastin; bloka xerckirî bi ya nû tê guhertin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u22-twin01",
      "stem": {
        "tr": "Erimiş MgCl2 tuzu 9,65 amperlik akımla 1000 saniye elektroliz edildiğinde katotta kaç gram Mg toplanır? (Mg = 24 g/mol; 1 F = 96500 C)",
        "en": "When molten MgCl2 is electrolyzed with a current of 9.65 A for 1000 seconds, how many grams of Mg are deposited at the cathode? (Mg = 24 g/mol; 1 F = 96500 C)",
        "de": "Geschmolzenes MgCl2 wird 1000 Sekunden lang mit einem Strom von 9,65 A elektrolysiert. Wie viel Gramm Mg scheiden sich an der Kathode ab? (Mg = 24 g/mol; 1 F = 96500 C)",
        "fr": "Du MgCl2 fondu est électrolysé pendant 1000 secondes avec un courant de 9,65 A. Quelle masse de Mg (en grammes) se dépose à la cathode ? (Mg = 24 g/mol ; 1 F = 96500 C)",
        "ru": "Расплав MgCl2 подвергают электролизу током 9,65 А в течение 1000 секунд. Сколько граммов Mg выделится на катоде? (Mg = 24 г/моль; 1 F = 96500 Кл)",
        "ar": "عند التحليل الكهربائي لمصهور MgCl2 بتيار شدته 9.65 A لمدة 1000 ثانية، كم غرامًا من Mg يترسب عند المهبط؟ (Mg = 24 g/mol؛ 1 F = 96500 C)",
        "zh": "用 9.65 A 的电流电解熔融 MgCl2 1000 s，阴极上析出多少克 Mg？(Mg = 24 g/mol；1 F = 96500 C)",
        "ku": "Dema xwêya MgCl2 ya helîyayî 1000 saniyeyan bi herika 9,65 A tê elektrolîzkirin, li katodê çend gram Mg kom dibe? (Mg = 24 g/mol; 1 F = 96500 C)"
      },
      "options": [
        {
          "tr": "1,2 g",
          "en": "1.2 g",
          "de": "1,2 g",
          "fr": "1,2 g",
          "ru": "1,2 г",
          "ar": "1.2 g",
          "zh": "1.2 g",
          "ku": "1,2 g"
        },
        {
          "tr": "2,4 g",
          "en": "2.4 g",
          "de": "2,4 g",
          "fr": "2,4 g",
          "ru": "2,4 г",
          "ar": "2.4 g",
          "zh": "2.4 g",
          "ku": "2,4 g"
        },
        {
          "tr": "0,6 g",
          "en": "0.6 g",
          "de": "0,6 g",
          "fr": "0,6 g",
          "ru": "0,6 г",
          "ar": "0.6 g",
          "zh": "0.6 g",
          "ku": "0,6 g"
        },
        {
          "tr": "4,8 g",
          "en": "4.8 g",
          "de": "4,8 g",
          "fr": "4,8 g",
          "ru": "4,8 г",
          "ar": "4.8 g",
          "zh": "4.8 g",
          "ku": "4,8 g"
        },
        {
          "tr": "12,0 g",
          "en": "12.0 g",
          "de": "12,0 g",
          "fr": "12,0 g",
          "ru": "12,0 г",
          "ar": "12.0 g",
          "zh": "12.0 g",
          "ku": "12,0 g"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Q = I · t = 9,65 · 1000 = 9650 C. n_e = 9650 / 96500 = 0,1 mol elektron. Mg2+ + 2e- → Mg olduğundan n(Mg) = 0,1 / 2 = 0,05 mol; m = 0,05 · 24 = 1,2 g. Mg2+ iyonunun 2 elektron aldığını hesaba katmayıp elektron molünü metal molüne eşitlemek 2,4 g sonucunu verir.",
        "en": "Q = I · t = 9.65 · 1000 = 9650 C. n_e = 9650 / 96500 = 0.1 mol of electrons. Since Mg2+ + 2e- → Mg, n(Mg) = 0.1 / 2 = 0.05 mol; m = 0.05 · 24 = 1.2 g. Ignoring that Mg2+ takes 2 electrons and setting moles of metal equal to moles of electrons gives 2.4 g.",
        "de": "Q = I · t = 9,65 · 1000 = 9650 C. n_e = 9650 / 96500 = 0,1 mol Elektronen. Wegen Mg2+ + 2e- → Mg gilt n(Mg) = 0,1 / 2 = 0,05 mol; m = 0,05 · 24 = 1,2 g. Wer übersieht, dass Mg2+ 2 Elektronen aufnimmt, und die Stoffmenge des Metalls der der Elektronen gleichsetzt, erhält 2,4 g.",
        "fr": "Q = I · t = 9,65 · 1000 = 9650 C. n_e = 9650 / 96500 = 0,1 mol d'électrons. Comme Mg2+ + 2e- → Mg, n(Mg) = 0,1 / 2 = 0,05 mol ; m = 0,05 · 24 = 1,2 g. Oublier que Mg2+ capte 2 électrons et égaler les moles de métal aux moles d'électrons donne 2,4 g.",
        "ru": "Q = I · t = 9,65 · 1000 = 9650 Кл. n_e = 9650 / 96500 = 0,1 моль электронов. Так как Mg2+ + 2e- → Mg, n(Mg) = 0,1 / 2 = 0,05 моль; m = 0,05 · 24 = 1,2 г. Если не учесть, что Mg2+ принимает 2 электрона, и приравнять количество металла к количеству электронов, получится 2,4 г.",
        "ar": "Q = I · t = 9.65 · 1000 = 9650 C. n_e = 9650 / 96500 = 0.1 mol من الإلكترونات. وبما أن Mg2+ + 2e- → Mg فإن n(Mg) = 0.1 / 2 = 0.05 mol؛ m = 0.05 · 24 = 1.2 g. أما إهمال أن Mg2+ يكتسب إلكترونين ومساواة مولات الفلز بمولات الإلكترونات فيعطي 2.4 g.",
        "zh": "Q = I · t = 9.65 · 1000 = 9650 C。n_e = 9650 / 96500 = 0.1 mol 电子。由 Mg2+ + 2e- → Mg 得 n(Mg) = 0.1 / 2 = 0.05 mol；m = 0.05 · 24 = 1.2 g。若忽略 Mg2+ 得 2 个电子，把金属的物质的量当作电子的物质的量，会得到 2.4 g。",
        "ku": "Q = I · t = 9,65 · 1000 = 9650 C. n_e = 9650 / 96500 = 0,1 mol elektron. Ji ber ku Mg2+ + 2e- → Mg e, n(Mg) = 0,1 / 2 = 0,05 mol; m = 0,05 · 24 = 1,2 g. Heke neyê hesibandin ku Mg2+ 2 elektronan distîne û mola metalê bi mola elektronan re wekhev were girtin, 2,4 g derdikeve."
      }
    },
    {
      "id": "u22-twin02",
      "stem": {
        "tr": "Seri bağlanmış iki elektroliz kabından I.'sinde sulu AgNO3, II.'sinde M metalinin sulu klorür çözeltisi bulunmaktadır. Kapların katotlarında biriken metal kütlelerinin zamanla değişimi şekildeki grafikte verilmiştir.\nDevreden geçen akımın şiddeti ve M iyonunun yükü aşağıdakilerin hangisinde doğru verilmiştir? (Ag = 108 g/mol, M = 59 g/mol; 1 F = 96500 C)",
        "en": "Of two electrolysis cells connected in series, cell I contains aqueous AgNO3 and cell II an aqueous chloride solution of metal M. The graph shows how the masses of metal deposited on the cathodes change with time.\nWhich option correctly gives the current in the circuit and the charge of the M ion? (Ag = 108 g/mol, M = 59 g/mol; 1 F = 96500 C)",
        "de": "Von zwei in Reihe geschalteten Elektrolysezellen enthält Zelle I wässrige AgNO3-Lösung und Zelle II eine wässrige Chloridlösung des Metalls M. Das Diagramm zeigt, wie sich die an den Kathoden abgeschiedenen Metallmassen mit der Zeit ändern.\nIn welcher Antwort sind die Stromstärke im Stromkreis und die Ladung des M-Ions richtig angegeben? (Ag = 108 g/mol, M = 59 g/mol; 1 F = 96500 C)",
        "fr": "Deux cuves d'électrolyse sont montées en série : la cuve I contient du AgNO3 aqueux et la cuve II une solution aqueuse du chlorure du métal M. Le graphique montre l'évolution au cours du temps des masses de métal déposées aux cathodes.\nQuelle proposition donne correctement l'intensité du courant et la charge de l'ion de M ? (Ag = 108 g/mol, M = 59 g/mol ; 1 F = 96500 C)",
        "ru": "Из двух последовательно соединённых электролизёров в I находится водный раствор AgNO3, во II — водный раствор хлорида металла M. На графике показано изменение во времени массы металла, выделившегося на катодах.\nВ каком варианте правильно указаны сила тока в цепи и заряд иона M? (Ag = 108 г/моль, M = 59 г/моль; 1 F = 96500 Кл)",
        "ar": "خليتا تحليل كهربائي موصولتان على التوالي: في الخلية I محلول AgNO3 المائي، وفي الخلية II محلول مائي لكلوريد الفلز M. يبيّن الرسم البياني تغيّر كتلتي الفلزين المترسبتين على المهبطين مع الزمن.\nفي أيّ خيار تُعطى شدة التيار المار في الدائرة وشحنة أيون M بشكل صحيح؟ (Ag = 108 g/mol، M = 59 g/mol؛ 1 F = 96500 C)",
        "zh": "两个电解池串联，池 I 中为 AgNO3 水溶液，池 II 中为金属 M 的氯化物水溶液。图中给出了两个阴极上析出金属的质量随时间的变化。\n下列哪一项正确给出了电路中的电流和 M 离子的电荷？(Ag = 108 g/mol，M = 59 g/mol；1 F = 96500 C)",
        "ku": "Ji du şaneyên elektrolîzê yên bi rêzî girêdayî, di ya I de çareseriya avî ya AgNO3 û di ya II de çareseriya klorûrê ya avî ya metala M heye. Guherîna girseyên metalên ku li ser katodan kom dibin li gorî demê di grafîka şiklê de hatiye dayîn.\nŞiddeta herikîna di devreyê de û barê îyona M di kîjan bijardeyê de rast hatine dayîn? (Ag = 108 g/mol, M = 59 g/mol; 1 F = 96500 C)"
      },
      "options": [
        {
          "tr": "1 A; M2+",
          "en": "1 A; M2+",
          "de": "1 A; M2+",
          "fr": "1 A ; M2+",
          "ru": "1 А; M2+",
          "ar": "1 A؛ M2+",
          "zh": "1 A；M2+",
          "ku": "1 A; M2+"
        },
        {
          "tr": "1 A; M+",
          "en": "1 A; M+",
          "de": "1 A; M+",
          "fr": "1 A ; M+",
          "ru": "1 А; M+",
          "ar": "1 A؛ M+",
          "zh": "1 A；M+",
          "ku": "1 A; M+"
        },
        {
          "tr": "2 A; M2+",
          "en": "2 A; M2+",
          "de": "2 A; M2+",
          "fr": "2 A ; M2+",
          "ru": "2 А; M2+",
          "ar": "2 A؛ M2+",
          "zh": "2 A；M2+",
          "ku": "2 A; M2+"
        },
        {
          "tr": "0,5 A; M4+",
          "en": "0.5 A; M4+",
          "de": "0,5 A; M4+",
          "fr": "0,5 A ; M4+",
          "ru": "0,5 А; M4+",
          "ar": "0.5 A؛ M4+",
          "zh": "0.5 A；M4+",
          "ku": "0,5 A; M4+"
        },
        {
          "tr": "2 A; M+",
          "en": "2 A; M+",
          "de": "2 A; M+",
          "fr": "2 A ; M+",
          "ru": "2 А; M+",
          "ar": "2 A؛ M+",
          "zh": "2 A；M+",
          "ku": "2 A; M+"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Grafikten 1930 s'de I. kapta 2,16 g Ag biriktiği okunur: n(Ag) = 2,16 / 108 = 0,02 mol. Ag+ + e- → Ag olduğundan devreden 0,02 mol elektron geçmiştir: Q = 0,02 · 96500 = 1930 C, I = Q / t = 1930 / 1930 = 1 A. Seri kaplardan aynı yük geçtiği için aynı sürede II. kapta 0,59 g M, yani 0,59 / 59 = 0,01 mol M birikmiştir; 0,02 mol elektron 0,01 mol M verdiğine göre her iyon 2 elektron almıştır: M2+. M'nin molünü elektron molüne eşitlemek M+ sonucunu; Ag kütlesini 1930 s yerine yanlış süreyle eşleştirmek 2 A veya 0,5 A sonucunu verir.",
        "en": "From the graph, 2.16 g of Ag has deposited in cell I at 1930 s: n(Ag) = 2.16 / 108 = 0.02 mol. Since Ag+ + e- → Ag, 0.02 mol of electrons has passed: Q = 0.02 · 96500 = 1930 C and I = Q / t = 1930 / 1930 = 1 A. The same charge passes through cells in series, so in the same time 0.59 g of M, i.e. 0.59 / 59 = 0.01 mol, deposits in cell II; 0.02 mol of electrons giving 0.01 mol of M means each ion took up 2 electrons: M2+. Equating moles of M with moles of electrons gives M+; pairing the Ag mass with the wrong time gives 2 A or 0.5 A.",
        "de": "Aus dem Diagramm liest man ab, dass sich in Zelle I nach 1930 s 2,16 g Ag abgeschieden haben: n(Ag) = 2,16 / 108 = 0,02 mol. Wegen Ag+ + e- → Ag sind 0,02 mol Elektronen geflossen: Q = 0,02 · 96500 = 1930 C, I = Q / t = 1930 / 1930 = 1 A. Durch in Reihe geschaltete Zellen fließt dieselbe Ladung; in derselben Zeit scheiden sich in Zelle II 0,59 g M, also 0,59 / 59 = 0,01 mol, ab. 0,02 mol Elektronen liefern 0,01 mol M, also nimmt jedes Ion 2 Elektronen auf: M2+. Setzt man die Stoffmenge von M der Elektronenmenge gleich, erhält man M+; ordnet man der Ag-Masse die falsche Zeit zu, erhält man 2 A oder 0,5 A.",
        "fr": "On lit sur le graphique qu'à 1930 s, 2,16 g de Ag se sont déposés dans la cuve I : n(Ag) = 2,16 / 108 = 0,02 mol. Comme Ag+ + e- → Ag, 0,02 mol d'électrons ont circulé : Q = 0,02 · 96500 = 1930 C et I = Q / t = 1930 / 1930 = 1 A. La même charge traverse les cuves en série ; pendant le même temps, 0,59 g de M, soit 0,59 / 59 = 0,01 mol, se déposent dans la cuve II. 0,02 mol d'électrons donnant 0,01 mol de M, chaque ion a capté 2 électrons : M2+. Égaler la quantité de M à celle des électrons donne M+ ; associer la masse d'argent à une mauvaise durée donne 2 A ou 0,5 A.",
        "ru": "По графику за 1930 с в электролизёре I выделилось 2,16 г Ag: n(Ag) = 2,16 / 108 = 0,02 моль. Так как Ag+ + e- → Ag, через цепь прошло 0,02 моль электронов: Q = 0,02 · 96500 = 1930 Кл, I = Q / t = 1930 / 1930 = 1 А. Через последовательно соединённые электролизёры проходит одинаковый заряд, и за то же время во II выделилось 0,59 г M, т. е. 0,59 / 59 = 0,01 моль; 0,02 моль электронов дают 0,01 моль M, значит, каждый ион принял 2 электрона: M2+. Если приравнять количество M к количеству электронов, получится M+; если сопоставить массу серебра с неверным временем — 2 А или 0,5 А.",
        "ar": "يُقرأ من الرسم أن 2.16 g من Ag ترسبت في الخلية I عند 1930 s: n(Ag) = 2.16 / 108 = 0.02 mol. وبما أن Ag+ + e- → Ag فقد مرّ 0.02 mol من الإلكترونات: Q = 0.02 · 96500 = 1930 C، وI = Q / t = 1930 / 1930 = 1 A. وتمر الشحنة نفسها في الخلايا الموصولة على التوالي، ففي الزمن نفسه ترسب في الخلية II 0.59 g من M أي 0.59 / 59 = 0.01 mol؛ وبما أن 0.02 mol من الإلكترونات أعطت 0.01 mol من M فكل أيون اكتسب إلكترونين: M2+. ومساواة مولات M بمولات الإلكترونات تعطي M+، وربط كتلة الفضة بزمن خاطئ يعطي 2 A أو 0.5 A.",
        "zh": "由图可读出，1930 s 时池 I 中析出 2.16 g Ag：n(Ag) = 2.16 / 108 = 0.02 mol。因为 Ag+ + e- → Ag，所以通过电路的电子为 0.02 mol：Q = 0.02 · 96500 = 1930 C，I = Q / t = 1930 / 1930 = 1 A。串联电解池通过的电量相同，同一时间池 II 析出 0.59 g M，即 0.59 / 59 = 0.01 mol；0.02 mol 电子生成 0.01 mol M，说明每个离子得到 2 个电子：M2+。把 M 的物质的量等同于电子的物质的量会得到 M+；把银的质量与错误的时间对应会得到 2 A 或 0.5 A。",
        "ku": "Ji grafîkê tê xwendin ku di 1930 s de di şaneya I de 2,16 g Ag kom bûye: n(Ag) = 2,16 / 108 = 0,02 mol. Ji ber Ag+ + e- → Ag, 0,02 mol elektron di devreyê re derbas bûne: Q = 0,02 · 96500 = 1930 C, I = Q / t = 1930 / 1930 = 1 A. Di şaneyên bi rêzî de heman bar derbas dibe; di heman demê de di şaneya II de 0,59 g M, ango 0,59 / 59 = 0,01 mol M kom bûye. Ji ber ku 0,02 mol elektron 0,01 mol M dide, her îyonê 2 elektron girtine: M2+. Wekhevkirina mola M bi mola elektronan re M+ dide; girêdana girseya Ag bi demeke şaş re 2 A an 0,5 A dide."
      },
      "figure": {
        "kind": "graph",
        "xLabel": {
          "tr": "Zaman (s)",
          "en": "Time (s)",
          "de": "Zeit (s)",
          "fr": "Temps (s)",
          "ru": "Время (с)",
          "ar": "الزمن (s)",
          "zh": "时间 (s)",
          "ku": "Dem (s)"
        },
        "yLabel": {
          "tr": "Biriken kütle (g)",
          "en": "Mass deposited (g)",
          "de": "Abgeschiedene Masse (g)",
          "fr": "Masse déposée (g)",
          "ru": "Масса осадка (г)",
          "ar": "الكتلة المترسبة (g)",
          "zh": "析出质量 (g)",
          "ku": "Girseya komkirî (g)"
        },
        "xMax": 4200,
        "yMax": 4.8,
        "xTicks": [
          1930,
          3860
        ],
        "yTicks": [
          0.59,
          1.18,
          2.16,
          4.32
        ],
        "series": [
          {
            "points": [
              [
                0,
                0
              ],
              [
                3860,
                4.32
              ]
            ],
            "label": "I (Ag)"
          },
          {
            "points": [
              [
                0,
                0
              ],
              [
                3860,
                1.18
              ]
            ],
            "label": "II (M)",
            "dashed": true,
            "tone": 1
          }
        ]
      }
    },
    {
      "id": "u22-twin03",
      "stem": {
        "tr": "Sulu AgNO3 çözeltisi inert elektrotlarla 0,5 A akımla elektroliz ediliyor. Katotta 10,8 g Ag toplanması için gereken süre kaç saniyedir? (Ag = 108 g/mol; 1 F = 96500 C)",
        "en": "Aqueous AgNO3 solution is electrolyzed with inert electrodes at a current of 0.5 A. How many seconds are needed to collect 10.8 g of Ag at the cathode? (Ag = 108 g/mol; 1 F = 96500 C)",
        "de": "Eine wässrige AgNO3-Lösung wird mit inerten Elektroden bei einer Stromstärke von 0,5 A elektrolysiert. Wie viele Sekunden sind nötig, um an der Kathode 10,8 g Ag abzuscheiden? (Ag = 108 g/mol; 1 F = 96500 C)",
        "fr": "Une solution aqueuse de AgNO3 est électrolysée avec des électrodes inertes sous un courant de 0,5 A. Combien de secondes faut-il pour déposer 10,8 g de Ag à la cathode ? (Ag = 108 g/mol ; 1 F = 96500 C)",
        "ru": "Водный раствор AgNO3 подвергают электролизу с инертными электродами при силе тока 0,5 А. Сколько секунд нужно, чтобы на катоде выделилось 10,8 г Ag? (Ag = 108 г/моль; 1 F = 96500 Кл)",
        "ar": "يُحلَّل محلول AgNO3 المائي كهربائيًا بأقطاب خاملة بتيار شدته 0.5 A. كم ثانية يلزم لترسيب 10.8 g من Ag عند المهبط؟ (Ag = 108 g/mol؛ 1 F = 96500 C)",
        "zh": "用惰性电极以 0.5 A 电流电解 AgNO3 水溶液。阴极上析出 10.8 g Ag 需要多少秒？(Ag = 108 g/mol；1 F = 96500 C)",
        "ku": "Çareseriya avî ya AgNO3 bi elektrodên înert û bi herika 0,5 A tê elektrolîzkirin. Ji bo ku li katodê 10,8 g Ag kom bibe çend saniye hewce ne? (Ag = 108 g/mol; 1 F = 96500 C)"
      },
      "options": [
        {
          "tr": "4825",
          "en": "4825",
          "de": "4825",
          "fr": "4825",
          "ru": "4825",
          "ar": "4825",
          "zh": "4825",
          "ku": "4825"
        },
        {
          "tr": "9650",
          "en": "9650",
          "de": "9650",
          "fr": "9650",
          "ru": "9650",
          "ar": "9650",
          "zh": "9650",
          "ku": "9650"
        },
        {
          "tr": "19300",
          "en": "19300",
          "de": "19300",
          "fr": "19300",
          "ru": "19300",
          "ar": "19300",
          "zh": "19300",
          "ku": "19300"
        },
        {
          "tr": "38600",
          "en": "38600",
          "de": "38600",
          "fr": "38600",
          "ru": "38600",
          "ar": "38600",
          "zh": "38600",
          "ku": "38600"
        },
        {
          "tr": "96500",
          "en": "96500",
          "de": "96500",
          "fr": "96500",
          "ru": "96500",
          "ar": "96500",
          "zh": "96500",
          "ku": "96500"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "n(Ag) = 10,8 / 108 = 0,1 mol. Ag+ + e- → Ag olduğundan 0,1 mol Ag için 0,1 mol elektron gerekir: Q = 0,1 · 96500 = 9650 C. t = Q / I = 9650 / 0,5 = 19300 s. 9650 bulan öğrenci yükü süre sanmış, 4825 bulan akımla bölmek yerine çarpmış, 38600 bulan Ag+ iyonunun yükünü 2 almıştır.",
        "en": "n(Ag) = 10.8 / 108 = 0.1 mol. Since Ag+ + e- → Ag, 0.1 mol Ag needs 0.1 mol electrons: Q = 0.1 · 96500 = 9650 C. t = Q / I = 9650 / 0.5 = 19300 s. A student who gets 9650 has taken the charge as the time, 4825 comes from multiplying by the current instead of dividing, and 38600 from taking the charge of Ag+ as 2.",
        "de": "n(Ag) = 10,8 / 108 = 0,1 mol. Wegen Ag+ + e- → Ag braucht man für 0,1 mol Ag 0,1 mol Elektronen: Q = 0,1 · 96500 = 9650 C. t = Q / I = 9650 / 0,5 = 19300 s. Wer 9650 erhält, hat die Ladung für die Zeit gehalten; 4825 entsteht durch Multiplizieren statt Dividieren mit der Stromstärke, 38600 durch die Annahme, Ag+ sei zweifach geladen.",
        "fr": "n(Ag) = 10,8 / 108 = 0,1 mol. Comme Ag+ + e- → Ag, 0,1 mol de Ag nécessite 0,1 mol d'électrons : Q = 0,1 · 96500 = 9650 C. t = Q / I = 9650 / 0,5 = 19300 s. Obtenir 9650 revient à prendre la charge pour la durée ; 4825 vient d'une multiplication par l'intensité au lieu d'une division, et 38600 d'une charge de 2 attribuée à Ag+.",
        "ru": "n(Ag) = 10,8 / 108 = 0,1 моль. Так как Ag+ + e- → Ag, для 0,1 моль Ag нужно 0,1 моль электронов: Q = 0,1 · 96500 = 9650 Кл. t = Q / I = 9650 / 0,5 = 19300 с. Ответ 9650 получается, если принять заряд за время; 4825 — если умножить на силу тока вместо деления; 38600 — если считать заряд Ag+ равным 2.",
        "ar": "n(Ag) = 10.8 / 108 = 0.1 mol. وبما أن Ag+ + e- → Ag فإن 0.1 mol من Ag يحتاج إلى 0.1 mol من الإلكترونات: Q = 0.1 · 96500 = 9650 C. t = Q / I = 9650 / 0.5 = 19300 s. من يحصل على 9650 اعتبر الشحنة زمنًا، و4825 ناتج عن الضرب في التيار بدل القسمة، و38600 ناتج عن اعتبار شحنة Ag+ تساوي 2.",
        "zh": "n(Ag) = 10.8 / 108 = 0.1 mol。由 Ag+ + e- → Ag，0.1 mol Ag 需要 0.1 mol 电子：Q = 0.1 · 96500 = 9650 C。t = Q / I = 9650 / 0.5 = 19300 s。得 9650 是把电量当成了时间；得 4825 是把除以电流误作乘以电流；得 38600 是把 Ag+ 的电荷当成 2。",
        "ku": "n(Ag) = 10,8 / 108 = 0,1 mol. Ji ber ku Ag+ + e- → Ag e, ji bo 0,1 mol Ag 0,1 mol elektron hewce ye: Q = 0,1 · 96500 = 9650 C. t = Q / I = 9650 / 0,5 = 19300 s. Xwendekarê ku 9650 dibîne bar wek dem girtiye; yê ku 4825 dibîne li şûna dabeşkirinê bi herikê lêkdaye; yê ku 38600 dibîne bara Ag+ wek 2 girtiye."
      }
    },
    {
      "id": "u22-twin04",
      "stem": {
        "tr": "Seri bağlı iki elektroliz kabından birincisinde erimiş AlCl3, ikincisinde sulu CuSO4 çözeltisi bulunmaktadır. Birinci kabın katodunda 5,4 g Al toplandığı anda ikinci kabın katodunda kaç gram Cu toplanmış olur? (Al = 27 g/mol, Cu = 64 g/mol)",
        "en": "Two electrolytic cells are connected in series: the first contains molten AlCl3, the second aqueous CuSO4 solution. When 5.4 g of Al has been collected at the cathode of the first cell, how many grams of Cu have been collected at the cathode of the second cell? (Al = 27 g/mol, Cu = 64 g/mol)",
        "de": "Zwei Elektrolysezellen sind hintereinandergeschaltet: Die erste enthält geschmolzenes AlCl3, die zweite wässrige CuSO4-Lösung. Wenn an der Kathode der ersten Zelle 5,4 g Al abgeschieden sind, wie viel Gramm Cu sind dann an der Kathode der zweiten Zelle abgeschieden? (Al = 27 g/mol, Cu = 64 g/mol)",
        "fr": "Deux cellules d'électrolyse sont montées en série : la première contient AlCl3 fondu, la seconde une solution aqueuse de CuSO4. Lorsque 5,4 g de Al se sont déposés à la cathode de la première cellule, combien de grammes de Cu se sont déposés à la cathode de la seconde ? (Al = 27 g/mol, Cu = 64 g/mol)",
        "ru": "Два электролизёра соединены последовательно: в первом расплав AlCl3, во втором водный раствор CuSO4. Когда на катоде первого электролизёра выделилось 5,4 г Al, сколько граммов Cu выделилось на катоде второго? (Al = 27 г/моль, Cu = 64 г/моль)",
        "ar": "خليتا تحليل كهربائي موصولتان على التوالي: الأولى تحتوي AlCl3 منصهرًا والثانية محلول CuSO4 مائيًا. عندما يترسب 5.4 g من Al عند مهبط الخلية الأولى، كم غرامًا من Cu يكون قد ترسب عند مهبط الخلية الثانية؟ (Al = 27 g/mol، Cu = 64 g/mol)",
        "zh": "两个电解池串联：第一个装熔融 AlCl3，第二个装 CuSO4 水溶液。当第一个电解池阴极上析出 5.4 g Al 时，第二个电解池阴极上析出多少克 Cu？(Al = 27 g/mol，Cu = 64 g/mol)",
        "ku": "Du firaxên elektrolîzê bi rêzê ve girêdayî ne: di ya yekem de AlCl3 ya helîyayî, di ya duyem de çareseriya avî ya CuSO4 heye. Dema li katoda firaxa yekem 5,4 g Al kom dibe, li katoda firaxa duyem çend gram Cu kom bûye? (Al = 27 g/mol, Cu = 64 g/mol)"
      },
      "options": [
        {
          "tr": "5,4",
          "en": "5.4",
          "de": "5,4",
          "fr": "5,4",
          "ru": "5,4",
          "ar": "5.4",
          "zh": "5.4",
          "ku": "5,4"
        },
        {
          "tr": "6,4",
          "en": "6.4",
          "de": "6,4",
          "fr": "6,4",
          "ru": "6,4",
          "ar": "6.4",
          "zh": "6.4",
          "ku": "6,4"
        },
        {
          "tr": "12,8",
          "en": "12.8",
          "de": "12,8",
          "fr": "12,8",
          "ru": "12,8",
          "ar": "12.8",
          "zh": "12.8",
          "ku": "12,8"
        },
        {
          "tr": "19,2",
          "en": "19.2",
          "de": "19,2",
          "fr": "19,2",
          "ru": "19,2",
          "ar": "19.2",
          "zh": "19.2",
          "ku": "19,2"
        },
        {
          "tr": "38,4",
          "en": "38.4",
          "de": "38,4",
          "fr": "38,4",
          "ru": "38,4",
          "ar": "38.4",
          "zh": "38.4",
          "ku": "38,4"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Seri bağlı kaplardan aynı yük geçer. n(Al) = 5,4 / 27 = 0,2 mol; Al3+ + 3e- → Al olduğundan geçen elektron 0,2 · 3 = 0,6 mol. Cu2+ + 2e- → Cu: n(Cu) = 0,6 / 2 = 0,3 mol, m = 0,3 · 64 = 19,2 g. Kütleleri eşit sanmak 5,4 g'ı, molleri eşit sanmak 12,8 g'ı, elektronu 2'ye bölmeyi unutmak 38,4 g'ı verir.",
        "en": "The same charge passes through cells in series. n(Al) = 5.4 / 27 = 0.2 mol; since Al3+ + 3e- → Al, electrons passed = 0.2 · 3 = 0.6 mol. Cu2+ + 2e- → Cu: n(Cu) = 0.6 / 2 = 0.3 mol, m = 0.3 · 64 = 19.2 g. Assuming equal masses gives 5.4 g, assuming equal moles gives 12.8 g, and forgetting to divide the electrons by 2 gives 38.4 g.",
        "de": "Durch hintereinandergeschaltete Zellen fließt dieselbe Ladung. n(Al) = 5,4 / 27 = 0,2 mol; wegen Al3+ + 3e- → Al flossen 0,2 · 3 = 0,6 mol Elektronen. Cu2+ + 2e- → Cu: n(Cu) = 0,6 / 2 = 0,3 mol, m = 0,3 · 64 = 19,2 g. Gleiche Massen anzunehmen ergibt 5,4 g, gleiche Stoffmengen 12,8 g, und wer vergisst, die Elektronen durch 2 zu teilen, erhält 38,4 g.",
        "fr": "La même charge traverse des cellules en série. n(Al) = 5,4 / 27 = 0,2 mol ; comme Al3+ + 3e- → Al, il est passé 0,2 · 3 = 0,6 mol d'électrons. Cu2+ + 2e- → Cu : n(Cu) = 0,6 / 2 = 0,3 mol, m = 0,3 · 64 = 19,2 g. Supposer des masses égales donne 5,4 g, des moles égales 12,8 g, et oublier de diviser les électrons par 2 donne 38,4 g.",
        "ru": "Через последовательно соединённые электролизёры проходит одинаковый заряд. n(Al) = 5,4 / 27 = 0,2 моль; так как Al3+ + 3e- → Al, прошло 0,2 · 3 = 0,6 моль электронов. Cu2+ + 2e- → Cu: n(Cu) = 0,6 / 2 = 0,3 моль, m = 0,3 · 64 = 19,2 г. Предположение о равных массах даёт 5,4 г, о равных количествах вещества — 12,8 г, а если забыть разделить электроны на 2, получится 38,4 г.",
        "ar": "تمر الشحنة نفسها في الخلايا الموصولة على التوالي. n(Al) = 5.4 / 27 = 0.2 mol؛ وبما أن Al3+ + 3e- → Al فقد مر 0.2 · 3 = 0.6 mol من الإلكترونات. Cu2+ + 2e- → Cu: n(Cu) = 0.6 / 2 = 0.3 mol، m = 0.3 · 64 = 19.2 g. افتراض تساوي الكتل يعطي 5.4 g، وافتراض تساوي المولات يعطي 12.8 g، ونسيان قسمة الإلكترونات على 2 يعطي 38.4 g.",
        "zh": "串联电解池通过的电量相同。n(Al) = 5.4 / 27 = 0.2 mol；由 Al3+ + 3e- → Al，通过电子 0.2 · 3 = 0.6 mol。Cu2+ + 2e- → Cu：n(Cu) = 0.6 / 2 = 0.3 mol，m = 0.3 · 64 = 19.2 g。误认为质量相等得 5.4 g，误认为物质的量相等得 12.8 g，忘记把电子数除以 2 得 38.4 g。",
        "ku": "Di firaxên bi rêzê ve girêdayî re heman bar derbas dibe. n(Al) = 5,4 / 27 = 0,2 mol; ji ber ku Al3+ + 3e- → Al e, elektronên derbasbûyî 0,2 · 3 = 0,6 mol in. Cu2+ + 2e- → Cu: n(Cu) = 0,6 / 2 = 0,3 mol, m = 0,3 · 64 = 19,2 g. Wekhevgirtina girseyan 5,4 g, wekhevgirtina molan 12,8 g dide; jibîrkirina dabeşkirina elektronan li 2 jî 38,4 g dide."
      }
    },
    {
      "id": "u22-twin05",
      "stem": {
        "tr": "Seyreltik H2SO4 çözeltisi inert elektrotlarla elektroliz ediliyor. Devreden 0,4 mol elektron geçtiğinde anotta toplanan gazın normal şartlardaki (0 °C, 1 atm) hacmi kaç litredir? (Normal şartlarda 1 mol gaz 22,4 L hacim kaplar.)",
        "en": "Dilute H2SO4 solution is electrolyzed with inert electrodes. When 0.4 mol of electrons has passed through the circuit, what is the volume in liters of the gas collected at the anode at STP (0 °C, 1 atm)? (1 mol of gas occupies 22.4 L at STP.)",
        "de": "Verdünnte H2SO4-Lösung wird mit inerten Elektroden elektrolysiert. Welches Volumen in Litern hat das an der Anode gesammelte Gas unter Normbedingungen (0 °C, 1 atm), wenn 0,4 mol Elektronen geflossen sind? (1 mol Gas nimmt unter Normbedingungen 22,4 L ein.)",
        "fr": "Une solution diluée de H2SO4 est électrolysée avec des électrodes inertes. Lorsque 0,4 mol d'électrons a traversé le circuit, quel est le volume en litres du gaz recueilli à l'anode dans les conditions normales (0 °C, 1 atm) ? (1 mol de gaz occupe 22,4 L dans les conditions normales.)",
        "ru": "Разбавленный раствор H2SO4 подвергают электролизу с инертными электродами. Каков объём (в литрах, при н. у.: 0 °C, 1 атм) газа, собранного на аноде, после прохождения 0,4 моль электронов? (1 моль газа при н. у. занимает 22,4 л.)",
        "ar": "يُحلَّل محلول H2SO4 المخفف كهربائيًا بأقطاب خاملة. عند مرور 0.4 mol من الإلكترونات في الدائرة، ما حجم الغاز المتجمع عند المصعد باللتر في الظروف القياسية (0 °C، 1 atm)؟ (يشغل 1 mol من الغاز 22.4 L في الظروف القياسية.)",
        "zh": "用惰性电极电解稀 H2SO4 溶液。电路中通过 0.4 mol 电子时，阳极收集到的气体在标准状况(0 °C，1 atm)下的体积是多少升？(标准状况下 1 mol 气体的体积为 22.4 L)",
        "ku": "Çareseriya sist a H2SO4 bi elektrodên înert tê elektrolîzkirin. Dema 0,4 mol elektron di çerxê re derbas dibe, qebareya gaza ku li anodê kom dibe di şertên normal de (0 °C, 1 atm) çend lître ye? (Di şertên normal de 1 mol gaz 22,4 L cih digire.)"
      },
      "options": [
        {
          "tr": "1,12",
          "en": "1.12",
          "de": "1,12",
          "fr": "1,12",
          "ru": "1,12",
          "ar": "1.12",
          "zh": "1.12",
          "ku": "1,12"
        },
        {
          "tr": "2,24",
          "en": "2.24",
          "de": "2,24",
          "fr": "2,24",
          "ru": "2,24",
          "ar": "2.24",
          "zh": "2.24",
          "ku": "2,24"
        },
        {
          "tr": "4,48",
          "en": "4.48",
          "de": "4,48",
          "fr": "4,48",
          "ru": "4,48",
          "ar": "4.48",
          "zh": "4.48",
          "ku": "4,48"
        },
        {
          "tr": "6,72",
          "en": "6.72",
          "de": "6,72",
          "fr": "6,72",
          "ru": "6,72",
          "ar": "6.72",
          "zh": "6.72",
          "ku": "6,72"
        },
        {
          "tr": "8,96",
          "en": "8.96",
          "de": "8,96",
          "fr": "8,96",
          "ru": "8,96",
          "ar": "8.96",
          "zh": "8.96",
          "ku": "8,96"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Anotta su yükseltgenir: 2 H2O → O2 + 4 H+ + 4e-. 0,4 mol elektronla 0,4 / 4 = 0,1 mol O2 oluşur; V = 0,1 · 22,4 = 2,24 L. Katottaki H2 (2 H2O + 2e- → H2 + 2 OH-) 0,2 mol yani 4,48 L'dir; bunu anot gazı sanmak ya da iki gazı toplamak (6,72 L) tipik hatadır. 8,96 L, elektron molünü gaz molü sanmaktan gelir.",
        "en": "Water is oxidized at the anode: 2 H2O → O2 + 4 H+ + 4e-. 0.4 mol electrons give 0.4 / 4 = 0.1 mol O2; V = 0.1 · 22.4 = 2.24 L. The H2 at the cathode (2 H2O + 2e- → H2 + 2 OH-) is 0.2 mol, i.e. 4.48 L; taking it as the anode gas, or adding both gases (6.72 L), are typical errors. 8.96 L comes from taking the moles of electrons as moles of gas.",
        "de": "An der Anode wird Wasser oxidiert: 2 H2O → O2 + 4 H+ + 4e-. 0,4 mol Elektronen ergeben 0,4 / 4 = 0,1 mol O2; V = 0,1 · 22,4 = 2,24 L. Das H2 an der Kathode (2 H2O + 2e- → H2 + 2 OH-) beträgt 0,2 mol, also 4,48 L; es für das Anodengas zu halten oder beide Gase zu addieren (6,72 L) sind typische Fehler. 8,96 L entsteht, wenn man die Elektronenstoffmenge als Gasstoffmenge nimmt.",
        "fr": "L'eau est oxydée à l'anode : 2 H2O → O2 + 4 H+ + 4e-. 0,4 mol d'électrons donnent 0,4 / 4 = 0,1 mol de O2 ; V = 0,1 · 22,4 = 2,24 L. Le H2 à la cathode (2 H2O + 2e- → H2 + 2 OH-) vaut 0,2 mol, soit 4,48 L ; le prendre pour le gaz anodique ou additionner les deux gaz (6,72 L) sont des erreurs typiques. 8,96 L vient de la confusion entre moles d'électrons et moles de gaz.",
        "ru": "На аноде окисляется вода: 2 H2O → O2 + 4 H+ + 4e-. 0,4 моль электронов дают 0,4 / 4 = 0,1 моль O2; V = 0,1 · 22,4 = 2,24 л. H2 на катоде (2 H2O + 2e- → H2 + 2 OH-) — 0,2 моль, то есть 4,48 л; принять его за анодный газ или сложить оба газа (6,72 л) — типичные ошибки. 8,96 л получается, если принять количество электронов за количество газа.",
        "ar": "يتأكسد الماء عند المصعد: 2 H2O → O2 + 4 H+ + 4e-. تعطي 0.4 mol من الإلكترونات 0.4 / 4 = 0.1 mol من O2؛ V = 0.1 · 22.4 = 2.24 L. أما H2 عند المهبط (2 H2O + 2e- → H2 + 2 OH-) فهو 0.2 mol أي 4.48 L؛ واعتباره غاز المصعد أو جمع الغازين (6.72 L) خطآن شائعان. وينتج 8.96 L عن اعتبار مولات الإلكترونات مولات غاز.",
        "zh": "阳极上水被氧化：2 H2O → O2 + 4 H+ + 4e-。0.4 mol 电子生成 0.4 / 4 = 0.1 mol O2；V = 0.1 · 22.4 = 2.24 L。阴极的 H2(2 H2O + 2e- → H2 + 2 OH-)为 0.2 mol 即 4.48 L；把它当作阳极气体或把两种气体相加(6.72 L)是常见错误。8.96 L 来自把电子的物质的量当作气体的物质的量。",
        "ku": "Li anodê av oksîde dibe: 2 H2O → O2 + 4 H+ + 4e-. 0,4 mol elektron 0,4 / 4 = 0,1 mol O2 didin; V = 0,1 · 22,4 = 2,24 L. H2 ya li katodê (2 H2O + 2e- → H2 + 2 OH-) 0,2 mol ango 4,48 L e; girtina wê wek gaza anodê an jî berhevkirina her du gazan (6,72 L) şaşiyên berbelav in. 8,96 L ji girtina mola elektronan wek mola gazê tê."
      }
    },
    {
      "id": "u22-twin06",
      "stem": {
        "tr": "Erimiş XCln tuzu elektroliz ediliyor. Devreden 0,6 mol elektron geçtiğinde katotta 5,4 g X metali toplanıyor. X'in mol kütlesi 27 g/mol olduğuna göre tuzun formülü aşağıdakilerden hangisidir?",
        "en": "A molten salt XCln is electrolyzed. When 0.6 mol of electrons has passed, 5.4 g of metal X is collected at the cathode. Given that the molar mass of X is 27 g/mol, what is the formula of the salt?",
        "de": "Ein geschmolzenes Salz XCln wird elektrolysiert. Nach dem Durchgang von 0,6 mol Elektronen sind an der Kathode 5,4 g des Metalls X abgeschieden. Die molare Masse von X beträgt 27 g/mol. Welche Formel hat das Salz?",
        "fr": "Un sel fondu XCln est électrolysé. Après le passage de 0,6 mol d'électrons, 5,4 g de métal X se sont déposés à la cathode. Sachant que la masse molaire de X est 27 g/mol, quelle est la formule du sel ?",
        "ru": "Расплав соли XCln подвергают электролизу. После прохождения 0,6 моль электронов на катоде выделилось 5,4 г металла X. Молярная масса X равна 27 г/моль. Какова формула соли?",
        "ar": "يُحلَّل الملح المنصهر XCln كهربائيًا. عند مرور 0.6 mol من الإلكترونات يترسب 5.4 g من الفلز X عند المهبط. إذا كانت الكتلة المولية لـ X تساوي 27 g/mol فما صيغة الملح؟",
        "zh": "电解熔融盐 XCln。通过 0.6 mol 电子时，阴极析出 5.4 g 金属 X。已知 X 的摩尔质量为 27 g/mol，该盐的化学式是什么？",
        "ku": "Xwêya XCln a helîyayî tê elektrolîzkirin. Dema 0,6 mol elektron derbas dibe, li katodê 5,4 g metala X kom dibe. Ger girseya molî ya X 27 g/mol be, formula xwêyê kîjan e?"
      },
      "options": [
        {
          "tr": "XCl",
          "en": "XCl",
          "de": "XCl",
          "fr": "XCl",
          "ru": "XCl",
          "ar": "XCl",
          "zh": "XCl",
          "ku": "XCl"
        },
        {
          "tr": "XCl2",
          "en": "XCl2",
          "de": "XCl2",
          "fr": "XCl2",
          "ru": "XCl2",
          "ar": "XCl2",
          "zh": "XCl2",
          "ku": "XCl2"
        },
        {
          "tr": "XCl3",
          "en": "XCl3",
          "de": "XCl3",
          "fr": "XCl3",
          "ru": "XCl3",
          "ar": "XCl3",
          "zh": "XCl3",
          "ku": "XCl3"
        },
        {
          "tr": "XCl4",
          "en": "XCl4",
          "de": "XCl4",
          "fr": "XCl4",
          "ru": "XCl4",
          "ar": "XCl4",
          "zh": "XCl4",
          "ku": "XCl4"
        },
        {
          "tr": "XCl6",
          "en": "XCl6",
          "de": "XCl6",
          "fr": "XCl6",
          "ru": "XCl6",
          "ar": "XCl6",
          "zh": "XCl6",
          "ku": "XCl6"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "n(X) = 5,4 / 27 = 0,2 mol. 0,2 mol X için 0,6 mol elektron harcandığına göre bir X iyonu 0,6 / 0,2 = 3 elektron almıştır: X3+ + 3e- → X. İyon X3+ olduğundan klorürü XCl3'tür. Elektron molünü doğrudan metal molüne eşitlemek XCl'yi, metal molünü yanlış hesaplamak ise XCl2 veya XCl6 gibi sonuçları verir.",
        "en": "n(X) = 5.4 / 27 = 0.2 mol. Since 0.6 mol electrons were used for 0.2 mol X, each X ion gained 0.6 / 0.2 = 3 electrons: X3+ + 3e- → X. The ion is X3+, so its chloride is XCl3. Equating moles of electrons directly with moles of metal leads to XCl, and miscalculating the moles of metal leads to results such as XCl2 or XCl6.",
        "de": "n(X) = 5,4 / 27 = 0,2 mol. Da für 0,2 mol X 0,6 mol Elektronen verbraucht wurden, nimmt jedes X-Ion 0,6 / 0,2 = 3 Elektronen auf: X3+ + 3e- → X. Das Ion ist X3+, das Chlorid also XCl3. Wer die Elektronenstoffmenge direkt mit der Metallstoffmenge gleichsetzt, kommt auf XCl; eine falsch berechnete Metallstoffmenge führt zu XCl2 oder XCl6.",
        "fr": "n(X) = 5,4 / 27 = 0,2 mol. Comme 0,6 mol d'électrons ont servi pour 0,2 mol de X, chaque ion X a capté 0,6 / 0,2 = 3 électrons : X3+ + 3e- → X. L'ion est X3+, son chlorure est donc XCl3. Égaler directement moles d'électrons et moles de métal conduit à XCl ; une erreur sur les moles de métal conduit à XCl2 ou XCl6.",
        "ru": "n(X) = 5,4 / 27 = 0,2 моль. На 0,2 моль X израсходовано 0,6 моль электронов, значит каждый ион X принял 0,6 / 0,2 = 3 электрона: X3+ + 3e- → X. Ион X3+, поэтому хлорид — XCl3. Если приравнять количество электронов к количеству металла, получится XCl; ошибка в количестве металла даёт XCl2 или XCl6.",
        "ar": "n(X) = 5.4 / 27 = 0.2 mol. وبما أن 0.6 mol من الإلكترونات استُهلكت لـ 0.2 mol من X فإن كل أيون X اكتسب 0.6 / 0.2 = 3 إلكترونات: X3+ + 3e- → X. الأيون هو X3+ فكلوريده XCl3. مساواة مولات الإلكترونات بمولات الفلز مباشرة تعطي XCl، والخطأ في حساب مولات الفلز يعطي نتائج مثل XCl2 أو XCl6.",
        "zh": "n(X) = 5.4 / 27 = 0.2 mol。0.2 mol X 消耗 0.6 mol 电子，所以每个 X 离子得到 0.6 / 0.2 = 3 个电子：X3+ + 3e- → X。离子为 X3+，其氯化物为 XCl3。把电子的物质的量直接等同于金属的物质的量会得到 XCl；算错金属的物质的量会得到 XCl2 或 XCl6 等结果。",
        "ku": "n(X) = 5,4 / 27 = 0,2 mol. Ji ber ku ji bo 0,2 mol X 0,6 mol elektron hatine xerckirin, her îyoneke X 0,6 / 0,2 = 3 elektron wergirtine: X3+ + 3e- → X. Îyon X3+ e, loma klorîda wê XCl3 ye. Wekhevkirina rasterast a mola elektronan bi mola metalê re XCl dide; şaş hesibandina mola metalê jî encamên wek XCl2 an XCl6 dide."
      }
    },
    {
      "id": "u22-twin07",
      "stem": {
        "tr": "Aşağıdaki derişik sulu çözeltiler platin elektrotlarla ayrı ayrı elektroliz ediliyor. Hangisinin elektrolizinde katotta metal birikirken anotta O2 gazı açığa çıkar?",
        "en": "The following concentrated aqueous solutions are electrolyzed separately with platinum electrodes. In the electrolysis of which one is a metal deposited at the cathode while O2 gas is released at the anode?",
        "de": "Die folgenden konzentrierten wässrigen Lösungen werden jeweils getrennt mit Platinelektroden elektrolysiert. Bei welcher wird an der Kathode ein Metall abgeschieden, während an der Anode O2-Gas entsteht?",
        "fr": "Les solutions aqueuses concentrées suivantes sont électrolysées séparément avec des électrodes de platine. Pour laquelle un métal se dépose-t-il à la cathode tandis que du O2 se dégage à l'anode ?",
        "ru": "Следующие концентрированные водные растворы по отдельности подвергают электролизу с платиновыми электродами. При электролизе какого из них на катоде осаждается металл, а на аноде выделяется газ O2?",
        "ar": "تُحلَّل المحاليل المائية المركزة الآتية كهربائيًا كلٌّ على حدة بأقطاب من البلاتين. في التحليل الكهربائي لأيها يترسب فلز عند المهبط بينما يتصاعد غاز O2 عند المصعد؟",
        "zh": "用铂电极分别电解下列浓水溶液。电解哪一种时阴极析出金属而阳极放出 O2 气体？",
        "ku": "Çareseriyên avî yên tîr ên jêrîn bi elektrodên platînê yek bi yek têne elektrolîzkirin. Di elektrolîza kîjanê de li katodê metal kom dibe û li anodê gaza O2 derdikeve?"
      },
      "options": [
        {
          "tr": "CuSO4",
          "en": "CuSO4",
          "de": "CuSO4",
          "fr": "CuSO4",
          "ru": "CuSO4",
          "ar": "CuSO4",
          "zh": "CuSO4",
          "ku": "CuSO4"
        },
        {
          "tr": "NaCl",
          "en": "NaCl",
          "de": "NaCl",
          "fr": "NaCl",
          "ru": "NaCl",
          "ar": "NaCl",
          "zh": "NaCl",
          "ku": "NaCl"
        },
        {
          "tr": "KI",
          "en": "KI",
          "de": "KI",
          "fr": "KI",
          "ru": "KI",
          "ar": "KI",
          "zh": "KI",
          "ku": "KI"
        },
        {
          "tr": "Na2SO4",
          "en": "Na2SO4",
          "de": "Na2SO4",
          "fr": "Na2SO4",
          "ru": "Na2SO4",
          "ar": "Na2SO4",
          "zh": "Na2SO4",
          "ku": "Na2SO4"
        },
        {
          "tr": "CuCl2",
          "en": "CuCl2",
          "de": "CuCl2",
          "fr": "CuCl2",
          "ru": "CuCl2",
          "ar": "CuCl2",
          "zh": "CuCl2",
          "ku": "CuCl2"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Katotta metal birikmesi için katyon sudan kolay indirgenmeli (Cu2+ evet; Na+ ve K+ hayır, onların yerine su indirgenip H2 çıkar). Anotta O2 çıkması için anyon sudan zor yükseltgenmeli (SO42- evet; derişik Cl- ve I- ise Cl2 ve I2 verir). İki koşulu birlikte sağlayan yalnızca CuSO4'tür: katotta Cu, anotta O2. CuCl2'de katotta Cu birikir ama anotta Cl2 çıkar; Na2SO4'te anotta O2 çıkar ama katotta H2 oluşur.",
        "en": "For a metal to deposit at the cathode, the cation must be easier to reduce than water (Cu2+ yes; Na+ and K+ no, water is reduced instead and H2 forms). For O2 at the anode, the anion must be harder to oxidize than water (SO42- yes; concentrated Cl- and I- give Cl2 and I2). Only CuSO4 meets both: Cu at the cathode, O2 at the anode. CuCl2 deposits Cu but releases Cl2 at the anode; Na2SO4 releases O2 at the anode but forms H2 at the cathode.",
        "de": "Damit an der Kathode Metall abgeschieden wird, muss das Kation leichter reduzierbar sein als Wasser (Cu2+ ja; Na+ und K+ nein, stattdessen wird Wasser zu H2 reduziert). Für O2 an der Anode muss das Anion schwerer oxidierbar sein als Wasser (SO42- ja; konzentriertes Cl- und I- liefern Cl2 bzw. I2). Nur CuSO4 erfüllt beides: Cu an der Kathode, O2 an der Anode. CuCl2 scheidet Cu ab, liefert an der Anode aber Cl2; Na2SO4 liefert an der Anode O2, an der Kathode aber H2.",
        "fr": "Pour qu'un métal se dépose à la cathode, le cation doit être plus facile à réduire que l'eau (Cu2+ oui ; Na+ et K+ non, c'est l'eau qui est réduite en H2). Pour obtenir O2 à l'anode, l'anion doit être plus difficile à oxyder que l'eau (SO42- oui ; Cl- et I- concentrés donnent Cl2 et I2). Seul CuSO4 remplit les deux conditions : Cu à la cathode, O2 à l'anode. CuCl2 dépose du Cu mais libère Cl2 à l'anode ; Na2SO4 libère O2 à l'anode mais forme H2 à la cathode.",
        "ru": "Чтобы на катоде осаждался металл, катион должен восстанавливаться легче воды (Cu2+ — да; Na+ и K+ — нет, вместо них восстанавливается вода с выделением H2). Чтобы на аноде выделялся O2, анион должен окисляться труднее воды (SO42- — да; концентрированные растворы Cl- и I- дают Cl2 и I2). Оба условия выполняются только для CuSO4: Cu на катоде, O2 на аноде. Для CuCl2 на катоде осаждается Cu, но на аноде выделяется Cl2; для Na2SO4 на аноде выделяется O2, но на катоде — H2.",
        "ar": "لكي يترسب فلز عند المهبط يجب أن يكون الكاتيون أسهل اختزالًا من الماء (Cu2+ نعم؛ Na+ و K+ لا، إذ يُختزل الماء بدلًا منهما ويتصاعد H2). ولكي يتصاعد O2 عند المصعد يجب أن يكون الأنيون أصعب تأكسدًا من الماء (SO42- نعم؛ أما Cl- و I- المركزان فيعطيان Cl2 و I2). لا يحقق الشرطين معًا إلا CuSO4: Cu عند المهبط و O2 عند المصعد. في CuCl2 يترسب Cu لكن يتصاعد Cl2 عند المصعد، وفي Na2SO4 يتصاعد O2 عند المصعد لكن يتكون H2 عند المهبط.",
        "zh": "阴极要析出金属，阳离子必须比水易还原(Cu2+ 可以；Na+、K+ 不行，被还原的是水，放出 H2)。阳极要放出 O2，阴离子必须比水难氧化(SO42- 可以；浓溶液中 Cl-、I- 分别生成 Cl2、I2)。同时满足两个条件的只有 CuSO4：阴极得 Cu，阳极得 O2。CuCl2 阴极析出 Cu，但阳极放出 Cl2；Na2SO4 阳极放出 O2，但阴极生成 H2。",
        "ku": "Ji bo ku li katodê metal kom bibe, divê katyon ji avê hêsantir redûkte bibe (Cu2+ erê; Na+ û K+ na, li şûna wan av redûkte dibe û H2 derdikeve). Ji bo ku li anodê O2 derkeve, divê anyon ji avê dijwartir oksîde bibe (SO42- erê; Cl- û I- yên tîr Cl2 û I2 didin). Tenê CuSO4 her du şertan bi hev re pêk tîne: li katodê Cu, li anodê O2. Di CuCl2 de li katodê Cu kom dibe lê li anodê Cl2 derdikeve; di Na2SO4 de li anodê O2 derdikeve lê li katodê H2 çêdibe."
      }
    },
    {
      "id": "u22-twin08",
      "stem": {
        "tr": "Sulu Na2SO4 çözeltisi inert elektrotlarla elektroliz ediliyor. Bu elektrolizle ilgili; I. Katotta H2 gazı açığa çıkar. II. Katot çevresindeki çözelti asidik özellik kazanır. III. Elektroliz ilerledikçe çözeltideki Na2SO4 derişimi artar. yargılarından hangileri doğrudur?",
        "en": "Aqueous Na2SO4 solution is electrolyzed with inert electrodes. Which of the following statements about this electrolysis are correct? I. H2 gas is released at the cathode. II. The solution around the cathode becomes acidic. III. As electrolysis proceeds, the concentration of Na2SO4 in the solution increases.",
        "de": "Eine wässrige Na2SO4-Lösung wird mit inerten Elektroden elektrolysiert. Welche der folgenden Aussagen über diese Elektrolyse sind richtig? I. An der Kathode entsteht H2-Gas. II. Die Lösung um die Kathode wird sauer. III. Mit fortschreitender Elektrolyse nimmt die Na2SO4-Konzentration der Lösung zu.",
        "fr": "Une solution aqueuse de Na2SO4 est électrolysée avec des électrodes inertes. Parmi les affirmations suivantes sur cette électrolyse, lesquelles sont correctes ? I. Du gaz H2 se dégage à la cathode. II. La solution autour de la cathode devient acide. III. Au cours de l'électrolyse, la concentration de Na2SO4 dans la solution augmente.",
        "ru": "Водный раствор Na2SO4 подвергают электролизу с инертными электродами. Какие из утверждений об этом электролизе верны? I. На катоде выделяется газ H2. II. Раствор вблизи катода становится кислым. III. По мере электролиза концентрация Na2SO4 в растворе увеличивается.",
        "ar": "يُحلَّل محلول Na2SO4 المائي كهربائيًا بأقطاب خاملة. أيٌّ من العبارات الآتية حول هذا التحليل صحيحة؟ I. يتصاعد غاز H2 عند المهبط. II. يصبح المحلول حول المهبط حمضيًا. III. مع تقدم التحليل الكهربائي يزداد تركيز Na2SO4 في المحلول.",
        "zh": "用惰性电极电解 Na2SO4 水溶液。关于该电解的下列说法中哪些正确？I. 阴极放出 H2 气体。II. 阴极附近的溶液变为酸性。III. 随着电解进行，溶液中 Na2SO4 的浓度增大。",
        "ku": "Çareseriya avî ya Na2SO4 bi elektrodên înert tê elektrolîzkirin. Derbarê vê elektrolîzê de; I. Li katodê gaza H2 derdikeve. II. Çareseriya li derdora katodê taybetmendiya asîdî digire. III. Her ku elektrolîz pêş ve diçe, tîrbûna Na2SO4 ya di çareseriyê de zêde dibe. kîjan ji van gotinan rast in?"
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
          "tr": "Yalnız III",
          "en": "III only",
          "de": "Nur III",
          "fr": "III seulement",
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
        "tr": "I doğru: Na+ sudan zor indirgendiği için katotta su indirgenir: 2 H2O + 2e- → H2 + 2 OH-. II yanlış: bu tepkimede OH- oluştuğu için katot çevresi bazik olur; asidikleşen anot çevresidir (2 H2O → O2 + 4 H+ + 4e-). III doğru: net olarak yalnızca su harcanır (2 H2O → 2 H2 + O2), Na2SO4 miktarı değişmez; çözücü azaldığı için derişim artar.",
        "en": "I is correct: Na+ is harder to reduce than water, so water is reduced at the cathode: 2 H2O + 2e- → H2 + 2 OH-. II is wrong: OH- forms in this reaction, so the region around the cathode becomes basic; it is the anode region that becomes acidic (2 H2O → O2 + 4 H+ + 4e-). III is correct: overall only water is consumed (2 H2O → 2 H2 + O2) and the amount of Na2SO4 does not change; as solvent decreases, the concentration increases.",
        "de": "I ist richtig: Na+ ist schwerer reduzierbar als Wasser, daher wird an der Kathode Wasser reduziert: 2 H2O + 2e- → H2 + 2 OH-. II ist falsch: Dabei entsteht OH-, die Kathodenumgebung wird also basisch; sauer wird die Anodenumgebung (2 H2O → O2 + 4 H+ + 4e-). III ist richtig: Insgesamt wird nur Wasser verbraucht (2 H2O → 2 H2 + O2), die Na2SO4-Menge bleibt gleich; da das Lösungsmittel abnimmt, steigt die Konzentration.",
        "fr": "I est correcte : Na+ est plus difficile à réduire que l'eau, donc l'eau est réduite à la cathode : 2 H2O + 2e- → H2 + 2 OH-. II est fausse : des ions OH- se forment, la zone cathodique devient donc basique ; c'est la zone anodique qui devient acide (2 H2O → O2 + 4 H+ + 4e-). III est correcte : globalement seule l'eau est consommée (2 H2O → 2 H2 + O2), la quantité de Na2SO4 ne change pas ; le solvant diminuant, la concentration augmente.",
        "ru": "I верно: Na+ восстанавливается труднее воды, поэтому на катоде восстанавливается вода: 2 H2O + 2e- → H2 + 2 OH-. II неверно: в этой реакции образуется OH-, поэтому среда у катода становится щелочной; кислой становится среда у анода (2 H2O → O2 + 4 H+ + 4e-). III верно: в итоге расходуется только вода (2 H2O → 2 H2 + O2), количество Na2SO4 не меняется; так как растворителя становится меньше, концентрация растёт.",
        "ar": "I صحيحة: Na+ أصعب اختزالًا من الماء، لذا يُختزل الماء عند المهبط: 2 H2O + 2e- → H2 + 2 OH-. II خاطئة: يتكون OH- في هذا التفاعل فيصبح الوسط حول المهبط قاعديًا، أما الذي يصبح حمضيًا فهو الوسط حول المصعد (2 H2O → O2 + 4 H+ + 4e-). III صحيحة: لا يُستهلك إجمالًا إلا الماء (2 H2O → 2 H2 + O2) ولا تتغير كمية Na2SO4، ومع نقص المذيب يزداد التركيز.",
        "zh": "I 正确：Na+ 比水难还原，阴极上被还原的是水：2 H2O + 2e- → H2 + 2 OH-。II 错误：该反应生成 OH-，阴极附近变为碱性；变为酸性的是阳极附近(2 H2O → O2 + 4 H+ + 4e-)。III 正确：总反应只消耗水(2 H2O → 2 H2 + O2)，Na2SO4 的量不变，溶剂减少，浓度增大。",
        "ku": "I rast e: Na+ ji avê dijwartir redûkte dibe, loma li katodê av redûkte dibe: 2 H2O + 2e- → H2 + 2 OH-. II şaş e: di vê reaksiyonê de OH- çêdibe, loma derdora katodê bazî dibe; derdora ku asîdî dibe ya anodê ye (2 H2O → O2 + 4 H+ + 4e-). III rast e: bi giştî tenê av tê xerckirin (2 H2O → 2 H2 + O2), mîqdara Na2SO4 naguhere; ji ber ku helker kêm dibe, tîrbûn zêde dibe."
      }
    },
    {
      "id": "u22-twin09",
      "stem": {
        "tr": "İçinde Zn, Fe, Ag ve Au safsızlıkları bulunan ham bakır, elektrolizle saflaştırılmak üzere saf bakır levhayla birlikte CuSO4 çözeltisine daldırılıp uygun gerilimde bir doğru akım kaynağına bağlanıyor. Bu işlemle ilgili; I. Ham bakır levha katoda bağlanır. II. Ag ve Au yükseltgenmeden anodun altında çamur olarak toplanır. III. Zn ve Fe, Zn2+ ve Fe2+ iyonları olarak çözeltiye geçer ve katotta birikmez. yargılarından hangileri doğrudur?",
        "en": "Crude copper containing Zn, Fe, Ag and Au impurities is to be purified by electrolysis: it is immersed in CuSO4 solution together with a pure copper sheet and connected to a DC source at a suitable voltage. Which of the following statements about this process are correct? I. The crude copper sheet is connected as the cathode. II. Ag and Au are not oxidized and collect as sludge under the anode. III. Zn and Fe pass into solution as Zn2+ and Fe2+ ions and are not deposited at the cathode.",
        "de": "Rohkupfer mit Zn-, Fe-, Ag- und Au-Verunreinigungen soll elektrolytisch gereinigt werden: Es wird zusammen mit einem Reinkupferblech in CuSO4-Lösung getaucht und bei geeigneter Spannung an eine Gleichstromquelle angeschlossen. Welche Aussagen über diesen Vorgang sind richtig? I. Das Rohkupferblech wird als Kathode geschaltet. II. Ag und Au werden nicht oxidiert und sammeln sich als Schlamm unter der Anode. III. Zn und Fe gehen als Zn2+- und Fe2+-Ionen in Lösung und werden an der Kathode nicht abgeschieden.",
        "fr": "Du cuivre brut contenant des impuretés de Zn, Fe, Ag et Au doit être purifié par électrolyse : il est plongé avec une plaque de cuivre pur dans une solution de CuSO4 et relié à une source de courant continu sous une tension adaptée. Parmi les affirmations suivantes, lesquelles sont correctes ? I. La plaque de cuivre brut est reliée comme cathode. II. Ag et Au ne sont pas oxydés et se rassemblent en boue sous l'anode. III. Zn et Fe passent en solution sous forme d'ions Zn2+ et Fe2+ et ne se déposent pas à la cathode.",
        "ru": "Черновую медь с примесями Zn, Fe, Ag и Au очищают электролизом: её вместе с пластиной чистой меди погружают в раствор CuSO4 и подключают к источнику постоянного тока при подходящем напряжении. Какие утверждения об этом процессе верны? I. Пластину черновой меди подключают как катод. II. Ag и Au не окисляются и собираются в виде шлама под анодом. III. Zn и Fe переходят в раствор в виде ионов Zn2+ и Fe2+ и на катоде не осаждаются.",
        "ar": "يُراد تنقية نحاس خام يحتوي شوائب من Zn و Fe و Ag و Au بالتحليل الكهربائي: يُغمر مع صفيحة نحاس نقي في محلول CuSO4 ويوصل بمصدر تيار مستمر عند جهد مناسب. أيٌّ من العبارات الآتية حول هذه العملية صحيحة؟ I. تُوصل صفيحة النحاس الخام مهبطًا. II. لا يتأكسد Ag و Au ويتجمعان كطين أسفل المصعد. III. ينتقل Zn و Fe إلى المحلول على شكل أيونات Zn2+ و Fe2+ ولا يترسبان عند المهبط.",
        "zh": "含 Zn、Fe、Ag、Au 杂质的粗铜用电解法精炼：将其与纯铜片一起浸入 CuSO4 溶液，并在适当电压下接直流电源。关于该过程的下列说法中哪些正确？I. 粗铜片接作阴极。II. Ag 和 Au 不被氧化，作为阳极泥沉积在阳极下方。III. Zn 和 Fe 以 Zn2+、Fe2+ 离子进入溶液，不在阴极析出。",
        "ku": "Sifirê xav ê ku nepaqijiyên Zn, Fe, Ag û Au tê de hene, ji bo ku bi elektrolîzê were paqijkirin, bi pelekî sifirê paqij re dikeve nav çareseriya CuSO4 û bi voltajeke guncav bi çavkaniya herika rasterast ve tê girêdan. Derbarê vê pêvajoyê de; I. Pelê sifirê xav wek katod tê girêdan. II. Ag û Au oksîde nabin û wek herî di binê anodê de kom dibin. III. Zn û Fe wek îyonên Zn2+ û Fe2+ derbasî çareseriyê dibin û li katodê kom nabin. kîjan ji van gotinan rast in?"
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
      "correctIndex": 4,
      "explanation": {
        "tr": "I yanlış: ham bakırın çözünmesi (yükseltgenmesi) istendiği için ham bakır anoda, saf bakır levha katoda bağlanır. II doğru: Ag ve Au bakırdan pasif olduğundan anotta yükseltgenmez, anot çözündükçe dibe düşüp anot çamurunu oluşturur. III doğru: Zn ve Fe bakırdan aktif olduğundan anotta iyonlaşıp çözeltiye geçer; ancak Zn2+ ve Fe2+ Cu2+'ya göre zor indirgendiği için çözeltide kalır, katotta yalnızca saf Cu birikir.",
        "en": "I is wrong: the crude copper must dissolve (be oxidized), so it is the anode and the pure copper sheet is the cathode. II is correct: Ag and Au are less active than copper and are not oxidized at the anode; as the anode dissolves they fall to the bottom as anode sludge. III is correct: Zn and Fe are more active than copper, so they ionize at the anode and enter the solution; but Zn2+ and Fe2+ are harder to reduce than Cu2+, so they remain in solution and only pure Cu deposits at the cathode.",
        "de": "I ist falsch: Das Rohkupfer soll sich auflösen (oxidiert werden), daher ist es die Anode, das Reinkupferblech die Kathode. II ist richtig: Ag und Au sind edler als Kupfer, werden an der Anode nicht oxidiert und fallen beim Auflösen der Anode als Anodenschlamm zu Boden. III ist richtig: Zn und Fe sind unedler als Kupfer, gehen an der Anode als Ionen in Lösung; Zn2+ und Fe2+ sind aber schwerer reduzierbar als Cu2+ und bleiben gelöst, an der Kathode scheidet sich nur reines Cu ab.",
        "fr": "I est fausse : le cuivre brut doit se dissoudre (s'oxyder), il est donc l'anode et la plaque de cuivre pur la cathode. II est correcte : Ag et Au, moins actifs que le cuivre, ne s'oxydent pas à l'anode et tombent au fond en boue anodique à mesure que l'anode se dissout. III est correcte : Zn et Fe, plus actifs que le cuivre, s'ionisent à l'anode et passent en solution ; mais Zn2+ et Fe2+ sont plus difficiles à réduire que Cu2+, ils restent en solution et seul du Cu pur se dépose à la cathode.",
        "ru": "I неверно: черновая медь должна растворяться (окисляться), поэтому её подключают как анод, а пластину чистой меди — как катод. II верно: Ag и Au менее активны, чем медь, на аноде не окисляются и по мере растворения анода оседают на дно в виде анодного шлама. III верно: Zn и Fe активнее меди, поэтому на аноде переходят в раствор в виде ионов; но Zn2+ и Fe2+ восстанавливаются труднее Cu2+ и остаются в растворе, на катоде осаждается только чистая Cu.",
        "ar": "I خاطئة: المطلوب أن يذوب النحاس الخام (يتأكسد)، لذلك يكون مصعدًا وتكون صفيحة النحاس النقي مهبطًا. II صحيحة: Ag و Au أقل نشاطًا من النحاس فلا يتأكسدان عند المصعد، ومع ذوبان المصعد يسقطان إلى القاع مكونين طين المصعد. III صحيحة: Zn و Fe أنشط من النحاس فيتأينان عند المصعد وينتقلان إلى المحلول، لكن Zn2+ و Fe2+ أصعب اختزالًا من Cu2+ فيبقيان في المحلول ولا يترسب عند المهبط إلا Cu النقي.",
        "zh": "I 错误：粗铜需要溶解（被氧化），所以粗铜作阳极，纯铜片作阴极。II 正确：Ag、Au 不如铜活泼，在阳极不被氧化，随阳极溶解落到底部形成阳极泥。III 正确：Zn、Fe 比铜活泼，在阳极以离子形式进入溶液；但 Zn2+、Fe2+ 比 Cu2+ 难还原，留在溶液中，阴极只析出纯铜。",
        "ku": "I şaş e: ji ber ku divê sifirê xav bihele (oksîde bibe), sifirê xav wek anod, pelê sifirê paqij jî wek katod tê girêdan. II rast e: Ag û Au ji sifir kêmçalaktir in û li anodê oksîde nabin; her ku anod dihele ew dikevin binî û heriya anodê çêdikin. III rast e: Zn û Fe ji sifir çalaktir in, li anodê dibin îyon û derbasî çareseriyê dibin; lê ji ber ku Zn2+ û Fe2+ ji Cu2+ dijwartir redûkte dibin, di çareseriyê de dimînin û li katodê tenê Cu ya paqij kom dibe."
      }
    },
    {
      "id": "u22-twin10",
      "stem": {
        "tr": "Demir bir anahtar şekildeki düzenekle gümüşle kaplanmak isteniyor. Anahtar ve saf gümüş levha, doğru akım kaynağına bağlı X ve Y konumlarına yerleştirilecektir.\nBu işlemle ilgili aşağıdaki ifadelerden hangisi doğrudur?",
        "en": "An iron key is to be silver-plated with the set-up shown. The key and a pure silver plate will be placed at positions X and Y, which are connected to the DC source.\nWhich of the following statements about this process is correct?",
        "de": "Ein Eisenschlüssel soll mit der gezeigten Anordnung versilbert werden. Der Schlüssel und ein reines Silberblech werden an den mit der Gleichstromquelle verbundenen Positionen X und Y angebracht.\nWelche der folgenden Aussagen über diesen Vorgang ist richtig?",
        "fr": "On veut argenter une clé en fer avec le montage représenté. La clé et une plaque d'argent pur seront placées aux positions X et Y reliées au générateur de courant continu.\nLaquelle des affirmations suivantes sur cette opération est correcte ?",
        "ru": "Железный ключ нужно посеребрить с помощью показанной установки. Ключ и пластину из чистого серебра помещают в позиции X и Y, подключённые к источнику постоянного тока.\nКакое из следующих утверждений об этом процессе верно?",
        "ar": "يُراد طلاء مفتاح من الحديد بالفضة باستخدام الجهاز المبيّن في الشكل. سيوضع المفتاح وصفيحة من الفضة النقية في الموضعين X وY الموصولين بمصدر التيار المستمر.\nأيّ العبارات الآتية عن هذه العملية صحيحة؟",
        "zh": "用图示装置给铁钥匙镀银。钥匙和纯银片将分别放在与直流电源相连的位置 X 和 Y 上。\n关于这一过程，下列说法中哪一项正确？",
        "ku": "Tê xwestin ku mifteyeke hesin bi amûra şiklê bi zîv bê pêçandin. Mifte û pelekî zîvê paqij dê li cihên X û Y yên ku bi çavkaniya herikîna rasterast ve girêdayî ne bên danîn.\nDerbarê vê karî de kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Anahtar Y'ye, gümüş levha X'e yerleştirilmeli; X'te Ag → Ag+ + e- tepkimesi gerçekleşir.",
          "en": "The key must be placed at Y and the silver plate at X; the reaction Ag → Ag+ + e- occurs at X.",
          "de": "Der Schlüssel muss an Y und das Silberblech an X; an X läuft Ag → Ag+ + e- ab.",
          "fr": "La clé doit être placée en Y et la plaque d'argent en X ; la réaction Ag → Ag+ + e- a lieu en X.",
          "ru": "Ключ нужно поместить в Y, а серебряную пластину — в X; в X протекает реакция Ag → Ag+ + e-.",
          "ar": "يجب وضع المفتاح في Y وصفيحة الفضة في X، ويحدث عند X التفاعل Ag → Ag+ + e-.",
          "zh": "钥匙应放在 Y，银片放在 X；X 处发生 Ag → Ag+ + e- 反应。",
          "ku": "Divê mifte li Y û pelê zîv li X bê danîn; li X reaksiyona Ag → Ag+ + e- pêk tê."
        },
        {
          "tr": "Anahtar X'e yerleştirilmeli; X'te Ag+ iyonları indirgenir.",
          "en": "The key must be placed at X; Ag+ ions are reduced at X.",
          "de": "Der Schlüssel muss an X; an X werden Ag+-Ionen reduziert.",
          "fr": "La clé doit être placée en X ; les ions Ag+ sont réduits en X.",
          "ru": "Ключ нужно поместить в X; в X восстанавливаются ионы Ag+.",
          "ar": "يجب وضع المفتاح في X، وتُختزل أيونات Ag+ عند X.",
          "zh": "钥匙应放在 X；X 处 Ag+ 被还原。",
          "ku": "Divê mifte li X bê danîn; li X îyonên Ag+ redûkte dibin."
        },
        {
          "tr": "Anahtar Y'ye yerleştirilmeli; işlem süresince çözeltideki Ag+ derişimi sürekli azalır.",
          "en": "The key must be placed at Y; the Ag+ concentration of the solution decreases steadily during the process.",
          "de": "Der Schlüssel muss an Y; die Ag+-Konzentration der Lösung nimmt während des Vorgangs ständig ab.",
          "fr": "La clé doit être placée en Y ; la concentration de Ag+ dans la solution diminue constamment pendant l'opération.",
          "ru": "Ключ нужно поместить в Y; концентрация Ag+ в растворе в ходе процесса непрерывно уменьшается.",
          "ar": "يجب وضع المفتاح في Y، ويتناقص تركيز Ag+ في المحلول باستمرار خلال العملية.",
          "zh": "钥匙应放在 Y；在此过程中溶液里的 Ag+ 浓度不断减小。",
          "ku": "Divê mifte li Y bê danîn; di dema karî de tîrbûna Ag+ ya çareseriyê bi berdewamî kêm dibe."
        },
        {
          "tr": "Gümüş levha Y'ye yerleştirilmeli; Y'de gümüş yükseltgenir.",
          "en": "The silver plate must be placed at Y; silver is oxidized at Y.",
          "de": "Das Silberblech muss an Y; an Y wird Silber oxidiert.",
          "fr": "La plaque d'argent doit être placée en Y ; l'argent est oxydé en Y.",
          "ru": "Серебряную пластину нужно поместить в Y; в Y серебро окисляется.",
          "ar": "يجب وضع صفيحة الفضة في Y، وتتأكسد الفضة عند Y.",
          "zh": "银片应放在 Y；银在 Y 处被氧化。",
          "ku": "Divê pelê zîv li Y bê danîn; li Y zîv oksîde dibe."
        },
        {
          "tr": "Anahtar Y'ye yerleştirilmeli; elektronlar dış devrede Y'den kaynağa, kaynaktan X'e akar.",
          "en": "The key must be placed at Y; in the external circuit electrons flow from Y to the source and from the source to X.",
          "de": "Der Schlüssel muss an Y; im äußeren Stromkreis fließen die Elektronen von Y zur Quelle und von der Quelle zu X.",
          "fr": "La clé doit être placée en Y ; dans le circuit extérieur, les électrons vont de Y au générateur puis du générateur vers X.",
          "ru": "Ключ нужно поместить в Y; во внешней цепи электроны текут от Y к источнику, а от источника к X.",
          "ar": "يجب وضع المفتاح في Y، وتتدفق الإلكترونات في الدائرة الخارجية من Y إلى المصدر ومن المصدر إلى X.",
          "zh": "钥匙应放在 Y；外电路中电子从 Y 流向电源，再从电源流向 X。",
          "ku": "Divê mifte li Y bê danîn; di devreya derve de elektron ji Y ber bi çavkaniyê û ji çavkaniyê ber bi X ve diherikin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Şekilde X kaynağın pozitif (+), Y negatif (−) kutbuna bağlıdır. Elektroliz hücresinde pozitif kutba bağlı elektrot anot, negatif kutba bağlı elektrot katottur. Kaplanacak anahtarın üzerinde Ag+ + e- → Ag ile gümüş birikmesi için anahtar katoda, yani Y'ye; gümüş levha anoda, yani X'e takılmalıdır. X'te Ag → Ag+ + e- ile levha çözünür. Anotta oluşan Ag+ kadar Ag+ katotta harcandığından derişim yaklaşık sabit kalır. Elektronlar anottan (X) kaynağın pozitif kutbuna girer, negatif kutuptan katoda (Y) gider; yani yön X'ten Y'ye doğrudur, tersi değil.",
        "en": "In the figure, X is connected to the positive (+) terminal and Y to the negative (−) terminal. In an electrolytic cell the electrode connected to the positive terminal is the anode and the one connected to the negative terminal is the cathode. For silver to deposit on the key by Ag+ + e- → Ag, the key must be the cathode, Y, and the silver plate the anode, X. At X the plate dissolves: Ag → Ag+ + e-. As much Ag+ forms at the anode as is used up at the cathode, so the concentration stays roughly constant. Electrons leave the anode (X), enter the positive terminal and leave the negative terminal toward the cathode (Y): the flow is from X to Y, not the reverse.",
        "de": "In der Abbildung ist X mit dem Pluspol (+) und Y mit dem Minuspol (−) verbunden. In einer Elektrolysezelle ist die mit dem Pluspol verbundene Elektrode die Anode, die mit dem Minuspol verbundene die Kathode. Damit sich auf dem Schlüssel nach Ag+ + e- → Ag Silber abscheidet, muss der Schlüssel Kathode sein, also an Y; das Silberblech ist Anode, also an X. An X löst sich das Blech: Ag → Ag+ + e-. An der Anode entsteht so viel Ag+, wie an der Kathode verbraucht wird; die Konzentration bleibt etwa konstant. Die Elektronen verlassen die Anode (X), gelangen zum Pluspol und vom Minuspol zur Kathode (Y): Sie fließen von X nach Y, nicht umgekehrt.",
        "fr": "Sur la figure, X est relié à la borne positive (+) et Y à la borne négative (−). Dans un électrolyseur, l'électrode reliée à la borne positive est l'anode et celle reliée à la borne négative est la cathode. Pour que l'argent se dépose sur la clé selon Ag+ + e- → Ag, la clé doit être la cathode, donc en Y, et la plaque d'argent l'anode, donc en X. En X, la plaque se dissout : Ag → Ag+ + e-. Il se forme à l'anode autant de Ag+ qu'il en est consommé à la cathode, la concentration reste donc à peu près constante. Les électrons quittent l'anode (X), entrent par la borne positive et ressortent par la borne négative vers la cathode (Y) : ils vont de X vers Y, et non l'inverse.",
        "ru": "На рисунке X подключён к положительному (+), а Y — к отрицательному (−) полюсу источника. В электролизёре электрод, подключённый к положительному полюсу, — анод, к отрицательному — катод. Чтобы на ключе по реакции Ag+ + e- → Ag осаждалось серебро, ключ должен быть катодом, то есть находиться в Y, а серебряная пластина — анодом, в X. В X пластина растворяется: Ag → Ag+ + e-. Сколько Ag+ образуется на аноде, столько расходуется на катоде, поэтому концентрация почти не меняется. Электроны уходят с анода (X) к положительному полюсу и от отрицательного полюса идут к катоду (Y): направление — от X к Y, а не наоборот.",
        "ar": "في الشكل يتصل X بالقطب الموجب (+) للمصدر وY بالقطب السالب (−). في خلية التحليل الكهربائي يكون القطب المتصل بالطرف الموجب مصعدًا والمتصل بالطرف السالب مهبطًا. ولكي تترسب الفضة على المفتاح وفق Ag+ + e- → Ag يجب أن يكون المفتاح مهبطًا أي في Y، وصفيحة الفضة مصعدًا أي في X. عند X تذوب الصفيحة: Ag → Ag+ + e-. ويتكوّن عند المصعد من Ag+ قدر ما يُستهلك عند المهبط، فيبقى التركيز ثابتًا تقريبًا. وتخرج الإلكترونات من المصعد (X) إلى الطرف الموجب ثم من الطرف السالب إلى المهبط (Y)، أي من X إلى Y لا العكس.",
        "zh": "图中 X 接电源正极（+），Y 接负极（−）。电解池中接电源正极的电极是阳极，接负极的是阴极。要使银按 Ag+ + e- → Ag 沉积在钥匙上，钥匙必须是阴极，即放在 Y；银片是阳极，放在 X。X 处银片溶解：Ag → Ag+ + e-。阳极生成的 Ag+ 与阴极消耗的 Ag+ 相等，所以浓度基本不变。电子从阳极 X 流入电源正极，再从负极流向阴极 Y：方向是从 X 到 Y，而不是相反。",
        "ku": "Di şiklê de X bi qutba erênî (+) û Y bi qutba neyînî (−) ya çavkaniyê ve girêdayî ye. Di şaneya elektrolîzê de elektroda ku bi qutba erênî ve girêdayî ye anod, ya ku bi qutba neyînî ve girêdayî ye katod e. Ji bo ku bi Ag+ + e- → Ag zîv li ser miftê kom bibe, divê mifte katod be, ango li Y be; pelê zîv anod e, ango li X ye. Li X pel dihele: Ag → Ag+ + e-. Çiqas Ag+ li anodê çêbibe ewqas li katodê tê xerckirin, ji ber vê tîrbûn hema hema sabît dimîne. Elektron ji anodê (X) diçin qutba erênî û ji qutba neyînî diçin katodê (Y): rê ji X ber bi Y ve ye, ne berevajî."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 210,
        "markup": "<rect x=\"140\" y=\"12\" width=\"80\" height=\"32\" class=\"qf-fill\"/><text x=\"158\" y=\"34\" text-anchor=\"middle\" class=\"qf-big\">+</text><text x=\"202\" y=\"34\" text-anchor=\"middle\" class=\"qf-big\">−</text><path d=\"M140 28 H90 V70\" class=\"qf-line\"/><path d=\"M220 28 H270 V70\" class=\"qf-line\"/><rect x=\"40\" y=\"90\" width=\"280\" height=\"112\" class=\"qf-fill\"/><rect x=\"41\" y=\"110\" width=\"278\" height=\"91\" class=\"qf-water\"/><rect x=\"80\" y=\"70\" width=\"20\" height=\"105\" class=\"qf-dash\"/><rect x=\"260\" y=\"70\" width=\"20\" height=\"105\" class=\"qf-dash\"/><text x=\"66\" y=\"86\" text-anchor=\"middle\" class=\"qf-big\">X</text><text x=\"294\" y=\"86\" text-anchor=\"middle\" class=\"qf-big\">Y</text><text x=\"180\" y=\"165\" text-anchor=\"middle\">{{sol}}</text>",
        "labels": {
          "sol": {
            "tr": "AgNO₃(suda)",
            "en": "AgNO₃(aq)",
            "de": "AgNO₃(aq)",
            "fr": "AgNO₃(aq)",
            "ru": "AgNO₃ (р-р)",
            "ar": "AgNO₃(aq)",
            "zh": "AgNO₃ 溶液",
            "ku": "AgNO₃(aq)"
          }
        }
      }
    },
    {
      "id": "u22-twin11",
      "stem": {
        "tr": "Özdeş ve temizlenmiş üç demir çiviyle şekildeki düzenekler hazırlanıp bir hafta bekletiliyor (susuz CaCl2 nem tutucudur).\nHangi tüplerdeki çivilerde belirgin paslanma gözlenir?",
        "en": "The set-ups shown are prepared with three identical, cleaned iron nails and left for a week (anhydrous CaCl2 is a drying agent).\nIn which tubes is noticeable rusting of the nail observed?",
        "de": "Mit drei gleichen, gereinigten Eisennägeln werden die abgebildeten Versuche angesetzt und eine Woche stehen gelassen (wasserfreies CaCl2 ist ein Trockenmittel).\nIn welchen Reagenzgläsern rostet der Nagel deutlich?",
        "fr": "On réalise les montages représentés avec trois clous en fer identiques et nettoyés, puis on les laisse une semaine (CaCl2 anhydre est un desséchant).\nDans quels tubes observe-t-on une rouille nette du clou ?",
        "ru": "С тремя одинаковыми очищенными железными гвоздями собирают показанные установки и оставляют на неделю (безводный CaCl2 — осушитель).\nВ каких пробирках гвоздь заметно ржавеет?",
        "ar": "حُضِّرت الأجهزة المبيّنة في الشكل باستخدام ثلاثة مسامير حديدية متماثلة ونظيفة وتُركت أسبوعًا (CaCl2 اللامائي مادة مجففة).\nفي أيّ الأنابيب يُلاحظ صدأ واضح على المسمار؟",
        "zh": "用三根相同且已清洁的铁钉按图示装置放置一周（无水 CaCl2 是干燥剂）。\n哪些试管中的铁钉明显生锈？",
        "ku": "Bi sê bizmarên hesin ên wekhev û paqijkirî amûrên şiklê têne amadekirin û hefteyekê têne hiştin (CaCl2 ya bê av madeyeke hişkker e).\nDi kîjan lûleyan de bizmar bi awayekî diyar zengar digire?"
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
          "tr": "Yalnız III",
          "en": "III only",
          "de": "Nur III",
          "fr": "III seulement",
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
      "correctIndex": 2,
      "explanation": {
        "tr": "Demirin paslanması için oksijen ve suyun birlikte bulunması gerekir. I. tüpte nem tutucu suyu uzaklaştırdığı için su yoktur; II. tüpte kaynatma çözünmüş O2'yi uzaklaştırmış, yağ tabakası da havanın yeniden çözünmesini engellemiştir. III. tüpte hem su hem hava vardır; ayrıca çözünmüş tuz iyonları çözeltinin iletkenliğini artırarak paslanmayı hızlandırır. Bu nedenle yalnızca III. tüpte belirgin paslanma görülür.",
        "en": "Iron rusts only when oxygen and water are present together. In tube I the drying agent removes the water; in tube II boiling removed the dissolved O2 and the oil layer prevents air from dissolving again. Tube III has both water and air, and the dissolved salt ions increase the conductivity of the solution and speed up rusting. Therefore noticeable rusting occurs only in tube III.",
        "de": "Eisen rostet nur, wenn Sauerstoff und Wasser gleichzeitig vorhanden sind. In Rohr I entfernt das Trockenmittel das Wasser; in Rohr II hat das Abkochen den gelösten O2 entfernt, und die Ölschicht verhindert, dass sich erneut Luft löst. In Rohr III sind Wasser und Luft vorhanden, und die gelösten Salzionen erhöhen die Leitfähigkeit und beschleunigen das Rosten. Daher rostet nur der Nagel in Rohr III deutlich.",
        "fr": "Le fer ne rouille qu'en présence simultanée d'oxygène et d'eau. Dans le tube I, le desséchant élimine l'eau ; dans le tube II, l'ébullition a chassé le O2 dissous et la couche d'huile empêche l'air de se redissoudre. Le tube III contient eau et air, et les ions du sel dissous augmentent la conductivité de la solution et accélèrent la rouille. Seul le clou du tube III rouille donc nettement.",
        "ru": "Железо ржавеет только при одновременном наличии кислорода и воды. В пробирке I осушитель удаляет воду; в пробирке II кипячение удалило растворённый O2, а слой масла не даёт воздуху снова раствориться. В пробирке III есть и вода, и воздух, а растворённые ионы соли повышают электропроводность раствора и ускоряют ржавление. Поэтому заметное ржавление наблюдается только в пробирке III.",
        "ar": "لا يصدأ الحديد إلا بوجود الأكسجين والماء معًا. في الأنبوب I تزيل المادة المجففة الماء، وفي الأنبوب II أزال الغليان O2 الذائب وتمنع طبقة الزيت ذوبان الهواء مجددًا. أما الأنبوب III ففيه ماء وهواء، كما أن أيونات الملح الذائبة تزيد توصيل المحلول وتسرّع الصدأ. لذلك يُلاحظ صدأ واضح في الأنبوب III فقط.",
        "zh": "铁生锈需要氧气和水同时存在。试管 I 中干燥剂除去了水；试管 II 中煮沸除去了溶解的 O2，油层又阻止空气重新溶入。试管 III 中既有水又有空气，溶解的盐离子还增强了溶液导电性，加快生锈。因此只有试管 III 中的铁钉明显生锈。",
        "ku": "Ji bo zengarbûna hesin divê oksîjen û av bi hev re hebin. Di lûleya I de hişkker avê radike, loma av tune ye; di lûleya II de kelandinê O2 ya helbûyî derxistiye û çîna rûn nahêle ku hewa dîsa bihele. Di lûleya III de hem av hem hewa heye; herweha îyonên xwêya helbûyî guhêzbariya çareseriyê zêde dikin û zengarbûnê bileztir dikin. Ji ber vê tenê di lûleya III de zengarbûneke diyar tê dîtin."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 216,
        "markup": "<rect x=\"25\" y=\"30\" width=\"70\" height=\"130\" rx=\"4\" class=\"qf-fill\"/><rect x=\"20\" y=\"20\" width=\"80\" height=\"14\" class=\"qf-solid\"/><rect x=\"26\" y=\"136\" width=\"68\" height=\"23\" class=\"qf-solid\"/><rect x=\"57\" y=\"50\" width=\"6\" height=\"70\" class=\"qf-accent3\"/><rect x=\"145\" y=\"30\" width=\"70\" height=\"130\" rx=\"4\" class=\"qf-fill\"/><rect x=\"146\" y=\"62\" width=\"68\" height=\"97\" class=\"qf-water\"/><rect x=\"146\" y=\"52\" width=\"68\" height=\"10\" class=\"qf-accent2\"/><rect x=\"177\" y=\"75\" width=\"6\" height=\"70\" class=\"qf-accent3\"/><rect x=\"265\" y=\"30\" width=\"70\" height=\"130\" rx=\"4\" class=\"qf-fill\"/><rect x=\"266\" y=\"100\" width=\"68\" height=\"59\" class=\"qf-water\"/><rect x=\"297\" y=\"55\" width=\"6\" height=\"90\" class=\"qf-accent3\"/><text x=\"60\" y=\"180\" text-anchor=\"middle\" class=\"qf-strong\">I</text><text x=\"180\" y=\"180\" text-anchor=\"middle\" class=\"qf-strong\">II</text><text x=\"300\" y=\"180\" text-anchor=\"middle\" class=\"qf-strong\">III</text><text x=\"60\" y=\"196\" text-anchor=\"middle\" class=\"qf-small\">{{a1}}</text><text x=\"60\" y=\"210\" text-anchor=\"middle\" class=\"qf-small\">{{a2}}</text><text x=\"180\" y=\"196\" text-anchor=\"middle\" class=\"qf-small\">{{b1}}</text><text x=\"180\" y=\"210\" text-anchor=\"middle\" class=\"qf-small\">{{b2}}</text><text x=\"300\" y=\"196\" text-anchor=\"middle\" class=\"qf-small\">{{c1}}</text><text x=\"300\" y=\"210\" text-anchor=\"middle\" class=\"qf-small\">{{c2}}</text>",
        "labels": {
          "a1": {
            "tr": "kuru hava",
            "en": "dry air",
            "de": "trockene Luft",
            "fr": "air sec",
            "ru": "сухой воздух",
            "ar": "هواء جاف",
            "zh": "干燥空气",
            "ku": "hewaya hişk"
          },
          "a2": {
            "tr": "susuz CaCl₂",
            "en": "anhydrous CaCl₂",
            "de": "CaCl₂ (wasserfrei)",
            "fr": "CaCl₂ anhydre",
            "ru": "безводный CaCl₂",
            "ar": "CaCl₂ لامائي",
            "zh": "无水 CaCl₂",
            "ku": "CaCl₂ bê av"
          },
          "b1": {
            "tr": "kaynatılmış su",
            "en": "boiled water",
            "de": "abgekochtes Wasser",
            "fr": "eau bouillie",
            "ru": "кипячёная вода",
            "ar": "ماء مغلي",
            "zh": "煮沸过的水",
            "ku": "ava kelandî"
          },
          "b2": {
            "tr": "+ yağ tabakası",
            "en": "+ oil layer",
            "de": "+ Ölschicht",
            "fr": "+ couche d'huile",
            "ru": "+ слой масла",
            "ar": "+ طبقة زيت",
            "zh": "+ 油层",
            "ku": "+ çîna rûn"
          },
          "c1": {
            "tr": "tuzlu su",
            "en": "salt water",
            "de": "Salzwasser",
            "fr": "eau salée",
            "ru": "солёная вода",
            "ar": "ماء مالح",
            "zh": "盐水",
            "ku": "ava şor"
          },
          "c2": {
            "tr": "ağzı açık",
            "en": "open tube",
            "de": "offenes Glas",
            "fr": "tube ouvert",
            "ru": "открытая",
            "ar": "أنبوب مفتوح",
            "zh": "敞口",
            "ku": "devê vekirî"
          }
        }
      }
    },
    {
      "id": "u22-twin12",
      "stem": {
        "tr": "Tabloda bazı yarı tepkimelerin standart indirgenme potansiyelleri verilmiştir.\nToprağa gömülü demir bir boru hattını katodik koruma yöntemiyle korumak için boruya iletken telle bağlanacak metal aşağıdakilerden hangisi olmalıdır?",
        "en": "The table gives the standard reduction potentials of some half-reactions.\nWhich of the following metals should be connected to a buried iron pipeline with a conducting wire to protect it by cathodic protection?",
        "de": "Die Tabelle enthält die Standardreduktionspotentiale einiger Halbreaktionen.\nWelches der folgenden Metalle muss über einen leitenden Draht mit einer im Boden verlegten Eisenrohrleitung verbunden werden, um sie kathodisch zu schützen?",
        "fr": "Le tableau donne les potentiels standard de réduction de quelques demi-réactions.\nQuel métal faut-il relier par un fil conducteur à une canalisation en fer enterrée pour la protéger par protection cathodique ?",
        "ru": "В таблице приведены стандартные потенциалы восстановления некоторых полуреакций.\nКакой металл нужно соединить проводником с подземным железным трубопроводом, чтобы защитить его катодной защитой?",
        "ar": "يبيّن الجدول جهود الاختزال القياسية لبعض أنصاف التفاعلات.\nأيّ الفلزات الآتية يجب توصيله بسلك موصل بخط أنابيب حديدي مدفون في التربة لحمايته بطريقة الحماية الكاثودية؟",
        "zh": "表中给出了一些半反应的标准还原电势。\n要用阴极保护法保护埋在地下的铁管道，应当用导线把下列哪种金属与管道相连？",
        "ku": "Di tabloyê de potansiyelên redûksiyonê yên standard ên hin nîvreaksiyonan hatine dayîn.\nJi bo ku xeteke boriyên hesin a di axê de veşartî bi rêbaza parastina katodîk bê parastin, divê kîjan ji van metalan bi têleke guhêzbar bi boriyê ve bê girêdan?"
      },
      "options": [
        {
          "tr": "Nikel",
          "en": "Nickel",
          "de": "Nickel",
          "fr": "Nickel",
          "ru": "Никель",
          "ar": "النيكل",
          "zh": "镍",
          "ku": "Nîkel"
        },
        {
          "tr": "Çinko",
          "en": "Zinc",
          "de": "Zink",
          "fr": "Zinc",
          "ru": "Цинк",
          "ar": "الزنك",
          "zh": "锌",
          "ku": "Zink"
        },
        {
          "tr": "Kalay",
          "en": "Tin",
          "de": "Zinn",
          "fr": "Étain",
          "ru": "Олово",
          "ar": "القصدير",
          "zh": "锡",
          "ku": "Qelay"
        },
        {
          "tr": "Bakır",
          "en": "Copper",
          "de": "Kupfer",
          "fr": "Cuivre",
          "ru": "Медь",
          "ar": "النحاس",
          "zh": "铜",
          "ku": "Sifir"
        },
        {
          "tr": "Gümüş",
          "en": "Silver",
          "de": "Silber",
          "fr": "Argent",
          "ru": "Серебро",
          "ar": "الفضة",
          "zh": "银",
          "ku": "Zîv"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Kurban metal demirden önce yükseltgenmeli, yani demirden daha aktif olmalıdır; bu da indirgenme potansiyelinin -0,44 V'tan daha küçük (daha negatif) olması demektir. Tabloda bu koşulu sağlayan yalnızca çinkodur (-0,76 V). Nikel ve kalayın potansiyelleri de negatif olduğu için çekici görünür, ancak -0,25 V ve -0,14 V değerleri -0,44 V'tan büyüktür; bu metaller demirden pasiftir ve bağlanırlarsa demir anot olup daha hızlı aşınır. Bakır ve gümüş için de aynı durum geçerlidir.",
        "en": "The sacrificial metal must be oxidized before iron, i.e. be more active than iron, which means its reduction potential must be lower (more negative) than -0.44 V. In the table only zinc (-0.76 V) meets this condition. Nickel and tin look tempting because their potentials are also negative, but -0.25 V and -0.14 V are greater than -0.44 V; these metals are less active than iron, and if connected, iron becomes the anode and corrodes faster. The same applies to copper and silver.",
        "de": "Das Opfermetall muss vor dem Eisen oxidiert werden, also unedler als Eisen sein, d. h. sein Reduktionspotential muss kleiner (negativer) als -0,44 V sein. In der Tabelle erfüllt nur Zink (-0,76 V) diese Bedingung. Nickel und Zinn wirken verlockend, weil ihre Potentiale ebenfalls negativ sind, doch -0,25 V und -0,14 V sind größer als -0,44 V; diese Metalle sind edler als Eisen, und bei Anschluss würde Eisen zur Anode und schneller korrodieren. Dasselbe gilt für Kupfer und Silber.",
        "fr": "Le métal sacrificiel doit s'oxyder avant le fer, donc être plus actif que lui, c'est-à-dire avoir un potentiel de réduction inférieur (plus négatif) à -0,44 V. Dans le tableau, seul le zinc (-0,76 V) remplit cette condition. Le nickel et l'étain sont tentants car leurs potentiels sont aussi négatifs, mais -0,25 V et -0,14 V sont supérieurs à -0,44 V ; ces métaux sont moins actifs que le fer et, si on les reliait, le fer deviendrait l'anode et se corroderait plus vite. Il en va de même pour le cuivre et l'argent.",
        "ru": "Жертвенный металл должен окисляться раньше железа, то есть быть активнее его, а значит, его потенциал восстановления должен быть меньше (отрицательнее) -0,44 В. Из таблицы этому условию удовлетворяет только цинк (-0,76 В). Никель и олово кажутся подходящими, так как их потенциалы тоже отрицательны, но -0,25 В и -0,14 В больше -0,44 В; эти металлы менее активны, чем железо, и при их подключении анодом станет железо и будет корродировать быстрее. То же относится к меди и серебру.",
        "ar": "يجب أن يتأكسد الفلز المضحّي قبل الحديد، أي أن يكون أنشط منه، وهذا يعني أن يكون جهد اختزاله أصغر (أكثر سالبية) من -0.44 V. ولا يحقق هذا الشرط في الجدول إلا الزنك (-0.76 V). يبدو النيكل والقصدير مغريين لأن جهديهما سالبان أيضًا، لكن -0.25 V و -0.14 V أكبر من -0.44 V؛ فهذان الفلزان أقل نشاطًا من الحديد، وإذا وُصلا أصبح الحديد مصعدًا وتآكل أسرع. والأمر نفسه ينطبق على النحاس والفضة.",
        "zh": "牺牲金属必须先于铁被氧化，即比铁活泼，也就是其还原电势要低于（更负于）-0.44 V。表中只有锌(-0.76 V)满足条件。镍和锡的电势也是负值，看似可选，但 -0.25 V 和 -0.14 V 都大于 -0.44 V，它们不如铁活泼，若与铁相连，铁反而成为负极而腐蚀更快。铜和银同理。",
        "ku": "Divê metala qurbanî berî hesin oksîde bibe, ango ji hesin çalaktir be; ev tê wê wateyê ku divê potansiyela wê ya redûksiyonê ji -0,44 V piçûktir (neyînîtir) be. Di tabloyê de tenê zink (-0,76 V) vî şertî pêk tîne. Nîkel û qelay jî ji ber ku potansiyelên wan neyînî ne balkêş xuya dikin, lê -0,25 V û -0,14 V ji -0,44 V mezintir in; ev metal ji hesin kêmçalaktir in û heke werin girêdan, hesin dibe anod û zûtir dixure. Ji bo sifir û zîv jî heman rewş derbasdar e."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Yarı tepkime",
            "en": "Half-reaction",
            "de": "Halbreaktion",
            "fr": "Demi-réaction",
            "ru": "Полуреакция",
            "ar": "نصف التفاعل",
            "zh": "半反应",
            "ku": "Nîvreaksiyon"
          },
          {
            "tr": "E° (V)",
            "en": "E° (V)",
            "de": "E° (V)",
            "fr": "E° (V)",
            "ru": "E° (В)",
            "ar": "E° (V)",
            "zh": "E° (V)",
            "ku": "E° (V)"
          }
        ],
        "rows": [
          [
            "Zn2+ + 2e- → Zn",
            "−0,76"
          ],
          [
            "Fe2+ + 2e- → Fe",
            "−0,44"
          ],
          [
            "Ni2+ + 2e- → Ni",
            "−0,25"
          ],
          [
            "Sn2+ + 2e- → Sn",
            "−0,14"
          ],
          [
            "Cu2+ + 2e- → Cu",
            "+0,34"
          ],
          [
            "Ag+ + e- → Ag",
            "+0,80"
          ]
        ]
      }
    },
    {
      "id": "u22-twin13",
      "stem": {
        "tr": "Biri kalayla (Sn), diğeri çinkoyla (Zn) kaplanmış iki demir levhanın kaplamaları çizilerek demir yüzey açığa çıkarılıyor ve levhalar nemli havada bekletiliyor. (Aktiflik sırası: Zn > Fe > Sn) Bu levhalarla ilgili; I. Çinko kaplı levhada çizik bölgede demir yerine çinko yükseltgenir. II. Kalay kaplı levhada çizik bölgedeki demir, hiç kaplanmamış demirden daha hızlı paslanabilir. III. Kaplamalar sağlamken her iki kaplama da demirin O2 ve nemle temasını keserek koruma sağlar. yargılarından hangileri doğrudur?",
        "en": "Two iron sheets, one coated with tin (Sn) and the other with zinc (Zn), have their coatings scratched to expose the iron and are left in humid air. (Activity order: Zn > Fe > Sn) Which of the following statements are correct? I. On the zinc-coated sheet, zinc is oxidized instead of iron at the scratch. II. On the tin-coated sheet, the iron at the scratch may rust faster than uncoated iron. III. While intact, both coatings protect iron by cutting off its contact with O2 and moisture.",
        "de": "Zwei Eisenbleche, eines verzinnt (Sn), das andere verzinkt (Zn), werden so angeritzt, dass das Eisen freiliegt, und in feuchter Luft gelagert. (Aktivitätsreihe: Zn > Fe > Sn) Welche Aussagen sind richtig? I. Beim verzinkten Blech wird an der Ritzstelle Zink statt Eisen oxidiert. II. Beim verzinnten Blech kann das Eisen an der Ritzstelle schneller rosten als unbeschichtetes Eisen. III. Solange sie unbeschädigt sind, schützen beide Überzüge das Eisen, indem sie den Kontakt mit O2 und Feuchtigkeit verhindern.",
        "fr": "Deux tôles de fer, l'une étamée (Sn), l'autre galvanisée (Zn), sont rayées de façon à mettre le fer à nu, puis laissées à l'air humide. (Ordre d'activité : Zn > Fe > Sn) Parmi les affirmations suivantes, lesquelles sont correctes ? I. Sur la tôle zinguée, c'est le zinc et non le fer qui s'oxyde au niveau de la rayure. II. Sur la tôle étamée, le fer de la rayure peut rouiller plus vite que du fer non revêtu. III. Tant qu'ils sont intacts, les deux revêtements protègent le fer en l'isolant de O2 et de l'humidité.",
        "ru": "У двух железных листов, один из которых покрыт оловом (Sn), а другой цинком (Zn), процарапывают покрытие до железа и оставляют во влажном воздухе. (Ряд активности: Zn > Fe > Sn) Какие утверждения верны? I. На оцинкованном листе в месте царапины окисляется цинк, а не железо. II. На лужёном листе железо в месте царапины может ржаветь быстрее, чем железо без покрытия. III. Пока покрытия целы, оба защищают железо, изолируя его от O2 и влаги.",
        "ar": "لوحان من الحديد أحدهما مطلي بالقصدير (Sn) والآخر بالزنك (Zn)، يُخدش طلاؤهما حتى يظهر الحديد ثم يُتركان في هواء رطب. (ترتيب النشاط: Zn > Fe > Sn) أيٌّ من العبارات الآتية عن هذين اللوحين صحيحة؟ I. في اللوح المطلي بالزنك يتأكسد الزنك بدلًا من الحديد عند الخدش. II. في اللوح المطلي بالقصدير قد يصدأ الحديد عند الخدش أسرع من الحديد غير المطلي. III. ما دام الطلاءان سليمين فإن كليهما يحمي الحديد بعزله عن O2 والرطوبة.",
        "zh": "两块铁板分别镀锡(Sn)和镀锌(Zn)，将镀层划破露出铁，放在潮湿空气中。(活动性顺序：Zn > Fe > Sn)下列说法中哪些正确？I. 镀锌铁板划痕处被氧化的是锌而不是铁。II. 镀锡铁板划痕处的铁可能比未镀层的铁生锈更快。III. 镀层完好时，两种镀层都能隔绝铁与 O2 和水分的接触而起保护作用。",
        "ku": "Pêçanên du pelên hesin ên ku yek bi qelayê (Sn), yê din bi zinkê (Zn) hatiye pêçandin têne xêzkirin da ku rûyê hesin derkeve holê, û pel di hewaya şil de têne hiştin. (Rêza çalakiyê: Zn > Fe > Sn) Derbarê van pelan de; I. Li ser pelê bi zinkê pêçayî, li cihê xêzê li şûna hesin zink oksîde dibe. II. Li ser pelê bi qelayê pêçayî, hesinê li cihê xêzê dikare ji hesinê qet nepêçayî zûtir zengar bigire. III. Heta ku pêçan saxlem bin, her du pêçan jî bi birîna têkiliya hesin bi O2 û şiliyê re wî diparêzin. kîjan ji van gotinan rast in?"
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
      "correctIndex": 4,
      "explanation": {
        "tr": "I doğru: çinko demirden aktif olduğundan çizik açılınca anot olur ve kendisi yükseltgenerek demiri korur. II doğru: kalay demirden pasiftir; nemli ortamda demir–kalay çiftinde anot demir olur, bu yüzden çizik bölgedeki demir kaplamasız demirden bile hızlı aşınabilir. III doğru: sağlam bir kaplama, hangi metal olursa olsun, demiri O2 ve nemden yalıtarak fiziksel bir engel oluşturur. Üç yargı da doğrudur.",
        "en": "I is correct: zinc is more active than iron, so when the scratch is exposed it becomes the anode and is oxidized itself, protecting the iron. II is correct: tin is less active than iron; in the iron–tin pair in humid air iron becomes the anode, so the iron at the scratch can corrode even faster than uncoated iron. III is correct: an intact coating, whatever the metal, isolates iron from O2 and moisture as a physical barrier. All three statements are correct.",
        "de": "I ist richtig: Zink ist unedler als Eisen, wird an der freigelegten Stelle zur Anode und oxidiert selbst, wodurch das Eisen geschützt wird. II ist richtig: Zinn ist edler als Eisen; im Eisen-Zinn-Paar wird in feuchter Luft Eisen zur Anode, daher kann das Eisen an der Ritzstelle sogar schneller korrodieren als unbeschichtetes Eisen. III ist richtig: Ein unbeschädigter Überzug, gleich aus welchem Metall, isoliert das Eisen als physikalische Barriere von O2 und Feuchtigkeit. Alle drei Aussagen sind richtig.",
        "fr": "I est correcte : le zinc, plus actif que le fer, devient l'anode au niveau de la rayure et s'oxyde lui-même, protégeant le fer. II est correcte : l'étain est moins actif que le fer ; dans le couple fer–étain en milieu humide, le fer devient l'anode, si bien que le fer de la rayure peut se corroder encore plus vite que du fer nu. III est correcte : un revêtement intact, quel que soit le métal, isole le fer de O2 et de l'humidité comme une barrière physique. Les trois affirmations sont correctes.",
        "ru": "I верно: цинк активнее железа, поэтому в месте царапины он становится анодом и окисляется сам, защищая железо. II верно: олово менее активно, чем железо; в паре железо–олово во влажной среде анодом становится железо, поэтому железо в месте царапины может разрушаться даже быстрее, чем железо без покрытия. III верно: целое покрытие из любого металла изолирует железо от O2 и влаги как физический барьер. Верны все три утверждения.",
        "ar": "I صحيحة: الزنك أنشط من الحديد، فعند انكشاف الخدش يصبح مصعدًا ويتأكسد هو فيحمي الحديد. II صحيحة: القصدير أقل نشاطًا من الحديد؛ وفي زوج الحديد–القصدير في الوسط الرطب يصبح الحديد مصعدًا، لذا قد يتآكل الحديد عند الخدش أسرع حتى من الحديد غير المطلي. III صحيحة: الطلاء السليم، أيًّا كان فلزه، يعزل الحديد عن O2 والرطوبة كحاجز فيزيائي. العبارات الثلاث صحيحة.",
        "zh": "I 正确：锌比铁活泼，划痕露出后锌成为负极而自身被氧化，从而保护铁。II 正确：锡不如铁活泼；在潮湿环境中铁–锡构成的原电池里铁作负极，所以划痕处的铁甚至可能比未镀层的铁腐蚀更快。III 正确：完好的镀层无论是哪种金属，都能作为物理屏障把铁与 O2 和水分隔开。三种说法都正确。",
        "ku": "I rast e: zink ji hesin çalaktir e, loma dema xêz vebe ew dibe anod, bi xwe oksîde dibe û hesin diparêze. II rast e: qelay ji hesin kêmçalaktir e; di hawîrdora şil de di cotê hesin–qelay de hesin dibe anod, loma hesinê li cihê xêzê dikare ji hesinê bêpêçan jî zûtir were xwarin. III rast e: pêçaneke saxlem, ji kîjan metalê dibe bila bibe, wek astengiyeke fîzîkî hesin ji O2 û şiliyê diparêze. Her sê gotin rast in."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 156,
        "markup": "<rect x=\"20\" y=\"89\" width=\"150\" height=\"36\" class=\"qf-fill\"/><rect x=\"20\" y=\"80\" width=\"67\" height=\"9\" class=\"qf-hl\"/><rect x=\"103\" y=\"80\" width=\"67\" height=\"9\" class=\"qf-hl\"/><path d=\"M65 80 Q95 50 125 80 Z\" class=\"qf-water\"/><rect x=\"87\" y=\"80\" width=\"16\" height=\"9\" class=\"qf-water\"/><text x=\"95\" y=\"112\" text-anchor=\"middle\" class=\"qf-strong\">Fe</text><text x=\"43\" y=\"74\" text-anchor=\"middle\" class=\"qf-strong\">Sn</text><text x=\"95\" y=\"146\" text-anchor=\"middle\" class=\"qf-small\">{{sn}}</text><rect x=\"190\" y=\"89\" width=\"150\" height=\"36\" class=\"qf-fill\"/><rect x=\"190\" y=\"80\" width=\"67\" height=\"9\" class=\"qf-hl2\"/><rect x=\"273\" y=\"80\" width=\"67\" height=\"9\" class=\"qf-hl2\"/><path d=\"M235 80 Q265 50 295 80 Z\" class=\"qf-water\"/><rect x=\"257\" y=\"80\" width=\"16\" height=\"9\" class=\"qf-water\"/><text x=\"265\" y=\"112\" text-anchor=\"middle\" class=\"qf-strong\">Fe</text><text x=\"213\" y=\"74\" text-anchor=\"middle\" class=\"qf-strong\">Zn</text><text x=\"265\" y=\"146\" text-anchor=\"middle\" class=\"qf-small\">{{zn}}</text>",
        "labels": {
          "sn": {
            "tr": "kalay kaplı demir",
            "en": "tin-coated iron",
            "de": "verzinntes Eisen",
            "fr": "fer étamé",
            "ru": "железо, покрытое оловом",
            "ar": "حديد مطلي بالقصدير",
            "zh": "镀锡铁",
            "ku": "hesinê bi qelayê pêçayî"
          },
          "zn": {
            "tr": "çinko kaplı demir",
            "en": "zinc-coated iron",
            "de": "verzinktes Eisen",
            "fr": "fer galvanisé",
            "ru": "железо, покрытое цинком",
            "ar": "حديد مطلي بالزنك",
            "zh": "镀锌铁",
            "ku": "hesinê bi zinkê pêçayî"
          }
        },
        "caption": {
          "tr": "Kesit görünüşü: kaplamadaki çizik, nemli havada su damlasıyla örtülüdür.",
          "en": "Cross-section: the scratch in the coating is covered by a water droplet in humid air.",
          "de": "Querschnitt: Der Kratzer in der Beschichtung ist in feuchter Luft von einem Wassertropfen bedeckt.",
          "fr": "Vue en coupe : dans l'air humide, la rayure du revêtement est recouverte d'une gouttelette d'eau.",
          "ru": "Разрез: царапина в покрытии во влажном воздухе покрыта каплей воды.",
          "ar": "مقطع عرضي: الخدش في الطلاء مغطّى بقطرة ماء في الهواء الرطب.",
          "zh": "截面图：潮湿空气中，镀层划痕处覆盖着一滴水。",
          "ku": "Dîmena birrînê: di hewaya şil de dilopek av xêza li ser pêçanê digire."
        }
      }
    },
    {
      "id": "u22-twin14",
      "stem": {
        "tr": "Galvanik hücre (pil) ile elektroliz hücresi karşılaştırıldığında aşağıdakilerden hangisi her iki hücre için de ortaktır?",
        "en": "When a galvanic cell is compared with an electrolytic cell, which of the following is common to both?",
        "de": "Welche der folgenden Aussagen trifft beim Vergleich einer galvanischen Zelle mit einer Elektrolysezelle auf beide zu?",
        "fr": "Si l'on compare une pile galvanique et une cellule d'électrolyse, laquelle des propositions suivantes est commune aux deux ?",
        "ru": "Что из перечисленного является общим для гальванического элемента и электролизёра?",
        "ar": "عند مقارنة الخلية الجلفانية بخلية التحليل الكهربائي، أيٌّ مما يلي مشترك بين الخليتين؟",
        "zh": "比较原电池和电解池时，下列哪一项是两者共有的？",
        "ku": "Dema şaneya galvanîk (pîl) û şaneya elektrolîzê têne berhevkirin, kîjan ji van ji bo her du şaneyan hevpar e?"
      },
      "options": [
        {
          "tr": "Anot negatif kutuptur.",
          "en": "The anode is the negative pole.",
          "de": "Die Anode ist der Minuspol.",
          "fr": "L'anode est le pôle négatif.",
          "ru": "Анод — отрицательный полюс.",
          "ar": "المصعد هو القطب السالب.",
          "zh": "发生氧化反应的电极是负极。",
          "ku": "Anod qutba neyînî ye."
        },
        {
          "tr": "Gerçekleşen redoks tepkimesi istemlidir.",
          "en": "The redox reaction that occurs is spontaneous.",
          "de": "Die ablaufende Redoxreaktion ist freiwillig.",
          "fr": "La réaction redox qui a lieu est spontanée.",
          "ru": "Протекающая окислительно-восстановительная реакция самопроизвольна.",
          "ar": "تفاعل الأكسدة والاختزال الحادث تلقائي.",
          "zh": "发生的氧化还原反应是自发的。",
          "ku": "Reaksiyona redoksê ya ku pêk tê xweber e."
        },
        {
          "tr": "Elektrik enerjisi kimyasal enerjiye dönüşür.",
          "en": "Electrical energy is converted into chemical energy.",
          "de": "Elektrische Energie wird in chemische Energie umgewandelt.",
          "fr": "L'énergie électrique est convertie en énergie chimique.",
          "ru": "Электрическая энергия превращается в химическую.",
          "ar": "تتحول الطاقة الكهربائية إلى طاقة كيميائية.",
          "zh": "电能转化为化学能。",
          "ku": "Enerjiya elektrîkê vediguhere enerjiya kîmyewî."
        },
        {
          "tr": "Katot pozitif kutuptur.",
          "en": "The cathode is the positive pole.",
          "de": "Die Kathode ist der Pluspol.",
          "fr": "La cathode est le pôle positif.",
          "ru": "Катод — положительный полюс.",
          "ar": "المهبط هو القطب الموجب.",
          "zh": "发生还原反应的电极是正极。",
          "ku": "Katod qutba erênî ye."
        },
        {
          "tr": "Anotta yükseltgenme, katotta indirgenme gerçekleşir.",
          "en": "Oxidation takes place at the anode and reduction at the cathode.",
          "de": "An der Anode findet Oxidation, an der Kathode Reduktion statt.",
          "fr": "L'oxydation a lieu à l'anode et la réduction à la cathode.",
          "ru": "На аноде происходит окисление, на катоде — восстановление.",
          "ar": "تحدث الأكسدة عند المصعد والاختزال عند المهبط.",
          "zh": "都是一个电极发生氧化反应，另一个电极发生还原反应。",
          "ku": "Li anodê oksîdasyon, li katodê redûksiyon pêk tê."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Anot ve katot adları kutbun işaretine göre değil, tepkimenin türüne göre verilir: her iki hücrede de anotta yükseltgenme, katotta indirgenme olur. Kutup işaretleri ise ters çevrilir: pilde anot negatif, katot pozitiftir; elektroliz hücresinde anot kaynağın pozitif, katot negatif kutbuna bağlıdır. Pilde tepkime istemlidir ve kimyasal enerji elektriğe dönüşür; elektrolizde istemsiz tepkime dış elektrikle yürütülür ve elektrik enerjisi kimyasal enerjiye dönüşür.",
        "en": "The names anode and cathode are based on the type of reaction, not on the sign of the pole: in both cells oxidation occurs at the anode and reduction at the cathode. The signs are reversed: in a galvanic cell the anode is negative and the cathode positive; in an electrolytic cell the anode is connected to the positive and the cathode to the negative terminal of the source. In a galvanic cell the reaction is spontaneous and chemical energy becomes electrical; in electrolysis a non-spontaneous reaction is driven by external electricity and electrical energy becomes chemical energy.",
        "de": "Die Bezeichnungen Anode und Kathode richten sich nach der Reaktionsart, nicht nach dem Vorzeichen des Pols: In beiden Zellen findet an der Anode Oxidation und an der Kathode Reduktion statt. Die Vorzeichen sind vertauscht: In der galvanischen Zelle ist die Anode negativ und die Kathode positiv; in der Elektrolysezelle ist die Anode mit dem Plus- und die Kathode mit dem Minuspol der Quelle verbunden. In der galvanischen Zelle ist die Reaktion freiwillig und chemische Energie wird zu elektrischer; bei der Elektrolyse wird eine nicht freiwillige Reaktion durch äußere Elektrizität erzwungen und elektrische Energie wird zu chemischer.",
        "fr": "Les noms anode et cathode dépendent du type de réaction, non du signe du pôle : dans les deux cellules, l'oxydation a lieu à l'anode et la réduction à la cathode. Les signes sont inversés : dans une pile, l'anode est négative et la cathode positive ; dans une cellule d'électrolyse, l'anode est reliée à la borne positive et la cathode à la borne négative de la source. Dans une pile, la réaction est spontanée et l'énergie chimique devient électrique ; dans l'électrolyse, une réaction non spontanée est forcée par l'électricité extérieure et l'énergie électrique devient chimique.",
        "ru": "Названия анод и катод определяются типом реакции, а не знаком полюса: в обеих ячейках на аноде идёт окисление, на катоде — восстановление. Знаки же противоположны: в гальваническом элементе анод отрицателен, катод положителен; в электролизёре анод подключён к положительному, а катод к отрицательному полюсу источника. В гальваническом элементе реакция самопроизвольна и химическая энергия превращается в электрическую; при электролизе несамопроизвольная реакция идёт за счёт внешнего тока, и электрическая энергия превращается в химическую.",
        "ar": "تُسمّى الأقطاب مصعدًا ومهبطًا حسب نوع التفاعل لا حسب إشارة القطب: ففي الخليتين تحدث الأكسدة عند المصعد والاختزال عند المهبط. أما الإشارات فمعكوسة: في الخلية الجلفانية المصعد سالب والمهبط موجب، وفي خلية التحليل الكهربائي يوصل المصعد بالقطب الموجب للمصدر والمهبط بالسالب. في الخلية الجلفانية التفاعل تلقائي وتتحول الطاقة الكيميائية إلى كهربائية، وفي التحليل الكهربائي يُجرى تفاعل غير تلقائي بكهرباء خارجية فتتحول الطاقة الكهربائية إلى كيميائية.",
        "zh": "两种装置中都是一个电极发生氧化、另一个电极发生还原：原电池中发生氧化的是负极、发生还原的是正极；电解池中发生氧化的是阳极（接电源正极）、发生还原的是阴极（接电源负极）。因此“发生氧化的电极是负极”“发生还原的电极是正极”只对原电池成立。原电池中反应自发，化学能转化为电能；电解中靠外加电流驱动非自发反应，电能转化为化学能。",
        "ku": "Navên anod û katod li gorî cureyê reaksiyonê têne dayîn, ne li gorî nîşana qutbê: di her du şaneyan de li anodê oksîdasyon, li katodê redûksiyon pêk tê. Nîşanên qutban berevajî ne: di pîlê de anod neyînî û katod erênî ye; di şaneya elektrolîzê de anod bi qutba erênî, katod jî bi qutba neyînî ya çavkaniyê ve girêdayî ye. Di pîlê de reaksiyon xweber e û enerjiya kîmyewî dibe enerjiya elektrîkê; di elektrolîzê de reaksiyoneke ne-xweber bi elektrîka derve tê meşandin û enerjiya elektrîkê dibe enerjiya kîmyewî."
      }
    },
    {
      "id": "u22-twin15",
      "stem": {
        "tr": "CuCl2 çözeltisi inert elektrotlarla elektroliz edildiğinde katotta Cu, anotta Cl2 oluşmaktadır. Cu2+ + 2e- → Cu E° = +0,34 V; Cl2 + 2e- → 2Cl- E° = +1,36 V olduğuna göre standart koşullarda bu elektrolizin gerçekleşmesi için dış kaynağın uygulaması gereken en düşük (teorik) gerilim kaç volttur?",
        "en": "When a CuCl2 solution is electrolyzed with inert electrodes, Cu forms at the cathode and Cl2 at the anode. Given Cu2+ + 2e- → Cu E° = +0.34 V and Cl2 + 2e- → 2Cl- E° = +1.36 V, what is the minimum (theoretical) voltage in volts that the external source must apply for this electrolysis under standard conditions?",
        "de": "Bei der Elektrolyse einer CuCl2-Lösung mit inerten Elektroden entsteht an der Kathode Cu und an der Anode Cl2. Mit Cu2+ + 2e- → Cu E° = +0,34 V und Cl2 + 2e- → 2Cl- E° = +1,36 V: Welche Mindestspannung (theoretisch) in Volt muss die äußere Quelle unter Standardbedingungen anlegen?",
        "fr": "Lors de l'électrolyse d'une solution de CuCl2 avec des électrodes inertes, Cu se forme à la cathode et Cl2 à l'anode. Sachant que Cu2+ + 2e- → Cu E° = +0,34 V et Cl2 + 2e- → 2Cl- E° = +1,36 V, quelle tension minimale (théorique), en volts, la source extérieure doit-elle appliquer dans les conditions standard ?",
        "ru": "При электролизе раствора CuCl2 с инертными электродами на катоде образуется Cu, на аноде — Cl2. Дано: Cu2+ + 2e- → Cu E° = +0,34 В; Cl2 + 2e- → 2Cl- E° = +1,36 В. Какое минимальное (теоретическое) напряжение в вольтах должен подать внешний источник, чтобы провести этот электролиз при стандартных условиях?",
        "ar": "عند التحليل الكهربائي لمحلول CuCl2 بأقطاب خاملة يتكون Cu عند المهبط وCl2 عند المصعد. إذا كان Cu2+ + 2e- → Cu E° = +0.34 V وCl2 + 2e- → 2Cl- E° = +1.36 V، فما أقل جهد (نظري) بالفولت يجب أن يطبقه المصدر الخارجي لإجراء هذا التحليل في الظروف القياسية؟",
        "zh": "用惰性电极电解 CuCl2 溶液时，阴极生成 Cu，阳极生成 Cl2。已知 Cu2+ + 2e- → Cu E° = +0.34 V，Cl2 + 2e- → 2Cl- E° = +1.36 V，在标准状态下外电源至少（理论上）需要施加多少伏电压？",
        "ku": "Dema çareseriya CuCl2 bi elektrodên înert tê elektrolîzkirin, li katodê Cu û li anodê Cl2 çêdibe. Li gorî Cu2+ + 2e- → Cu E° = +0,34 V û Cl2 + 2e- → 2Cl- E° = +1,36 V, di şertên standard de ji bo pêkhatina vê elektrolîzê divê çavkaniya derve herî kêm (bi teorîk) çend volt bide?"
      },
      "options": [
        {
          "tr": "0,34",
          "en": "0.34",
          "de": "0,34",
          "fr": "0,34",
          "ru": "0,34",
          "ar": "0.34",
          "zh": "0.34",
          "ku": "0,34"
        },
        {
          "tr": "1,02",
          "en": "1.02",
          "de": "1,02",
          "fr": "1,02",
          "ru": "1,02",
          "ar": "1.02",
          "zh": "1.02",
          "ku": "1,02"
        },
        {
          "tr": "1,36",
          "en": "1.36",
          "de": "1,36",
          "fr": "1,36",
          "ru": "1,36",
          "ar": "1.36",
          "zh": "1.36",
          "ku": "1,36"
        },
        {
          "tr": "1,70",
          "en": "1.70",
          "de": "1,70",
          "fr": "1,70",
          "ru": "1,70",
          "ar": "1.70",
          "zh": "1.70",
          "ku": "1,70"
        },
        {
          "tr": "2,38",
          "en": "2.38",
          "de": "2,38",
          "fr": "2,38",
          "ru": "2,38",
          "ar": "2.38",
          "zh": "2.38",
          "ku": "2,38"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Elektroliz tepkimesi CuCl2 → Cu + Cl2'dir. Katot: Cu2+ + 2e- → Cu (+0,34 V); anot: 2Cl- → Cl2 + 2e- (yükseltgenme potansiyeli -1,36 V). E°pil = 0,34 + (-1,36) = -1,02 V. Tepkime istemsizdir; gerçekleşmesi için dış kaynağın en az 1,02 V uygulaması gerekir. İki değeri toplamak 1,70 V'u, klorun potansiyelini tepkimedeki katsayı 2 ile çarpmak 2,38 V'u verir; potansiyel katsayıyla çarpılmaz.",
        "en": "The electrolysis reaction is CuCl2 → Cu + Cl2. Cathode: Cu2+ + 2e- → Cu (+0.34 V); anode: 2Cl- → Cl2 + 2e- (oxidation potential -1.36 V). E°cell = 0.34 + (-1.36) = -1.02 V. The reaction is non-spontaneous; the external source must apply at least 1.02 V. Adding the two values gives 1.70 V, and multiplying the chlorine potential by the coefficient 2 gives 2.38 V; potentials are not multiplied by coefficients.",
        "de": "Die Elektrolysereaktion ist CuCl2 → Cu + Cl2. Kathode: Cu2+ + 2e- → Cu (+0,34 V); Anode: 2Cl- → Cl2 + 2e- (Oxidationspotential -1,36 V). E°Zelle = 0,34 + (-1,36) = -1,02 V. Die Reaktion ist nicht freiwillig; die äußere Quelle muss mindestens 1,02 V anlegen. Addiert man beide Werte, erhält man 1,70 V; multipliziert man das Chlorpotential mit dem Koeffizienten 2, erhält man 2,38 V – Potentiale werden aber nicht mit Koeffizienten multipliziert.",
        "fr": "La réaction d'électrolyse est CuCl2 → Cu + Cl2. Cathode : Cu2+ + 2e- → Cu (+0,34 V) ; anode : 2Cl- → Cl2 + 2e- (potentiel d'oxydation -1,36 V). E°pile = 0,34 + (-1,36) = -1,02 V. La réaction est non spontanée ; la source extérieure doit appliquer au moins 1,02 V. Additionner les deux valeurs donne 1,70 V, et multiplier le potentiel du chlore par le coefficient 2 donne 2,38 V ; or un potentiel ne se multiplie pas par les coefficients.",
        "ru": "Реакция электролиза: CuCl2 → Cu + Cl2. Катод: Cu2+ + 2e- → Cu (+0,34 В); анод: 2Cl- → Cl2 + 2e- (потенциал окисления -1,36 В). E°эл = 0,34 + (-1,36) = -1,02 В. Реакция несамопроизвольна; внешний источник должен подать не менее 1,02 В. Сложение двух значений даёт 1,70 В, а умножение потенциала хлора на коэффициент 2 даёт 2,38 В; потенциалы на коэффициенты не умножаются.",
        "ar": "تفاعل التحليل هو CuCl2 → Cu + Cl2. المهبط: Cu2+ + 2e- → Cu (+0.34 V)؛ المصعد: 2Cl- → Cl2 + 2e- (جهد التأكسد -1.36 V). E°cell = 0.34 + (-1.36) = -1.02 V. التفاعل غير تلقائي، ويجب أن يطبق المصدر الخارجي 1.02 V على الأقل. جمع القيمتين يعطي 1.70 V، وضرب جهد الكلور في المعامل 2 يعطي 2.38 V؛ والجهود لا تُضرب في المعاملات.",
        "zh": "电解反应为 CuCl2 → Cu + Cl2。阴极：Cu2+ + 2e- → Cu(+0.34 V)；阳极：2Cl- → Cl2 + 2e-(氧化电势 -1.36 V)。E°电池 = 0.34 + (-1.36) = -1.02 V。反应非自发，外电源至少需施加 1.02 V。把两值相加得 1.70 V，把氯的电势乘以系数 2 得 2.38 V；电势不随化学计量系数相乘。",
        "ku": "Reaksiyona elektrolîzê CuCl2 → Cu + Cl2 ye. Katod: Cu2+ + 2e- → Cu (+0,34 V); anod: 2Cl- → Cl2 + 2e- (potansiyela oksîdasyonê -1,36 V). E°pîl = 0,34 + (-1,36) = -1,02 V. Reaksiyon ne-xweber e; ji bo pêkhatina wê divê çavkaniya derve herî kêm 1,02 V bide. Berhevkirina her du nirxan 1,70 V dide, lêkdana potansiyela klorê bi hevbera 2 ya reaksiyonê jî 2,38 V dide; potansiyel bi hevberê nayê lêkdan."
      }
    },
    {
      "id": "u22-twin16",
      "stem": {
        "tr": "Alüminyum metali endüstride, erimiş kriyolit içinde çözülmüş Al2O3'ün elektroliziyle elde edilir. Alüminyumun AlCl3 gibi bir tuzun sulu çözeltisinin elektroliziyle elde edilememesinin nedeni aşağıdakilerden hangisidir?",
        "en": "Industrially, aluminium metal is obtained by electrolysis of Al2O3 dissolved in molten cryolite. Why can aluminium not be obtained by electrolysis of an aqueous solution of a salt such as AlCl3?",
        "de": "Industriell wird Aluminium durch Elektrolyse von in geschmolzenem Kryolith gelöstem Al2O3 gewonnen. Warum lässt sich Aluminium nicht durch Elektrolyse einer wässrigen Lösung eines Salzes wie AlCl3 gewinnen?",
        "fr": "Industriellement, l'aluminium est obtenu par électrolyse de Al2O3 dissous dans la cryolithe fondue. Pourquoi ne peut-on pas obtenir l'aluminium par électrolyse d'une solution aqueuse d'un sel comme AlCl3 ?",
        "ru": "В промышленности алюминий получают электролизом Al2O3, растворённого в расплавленном криолите. Почему алюминий нельзя получить электролизом водного раствора соли, например AlCl3?",
        "ar": "يُحصل على فلز الألومنيوم صناعيًا بالتحليل الكهربائي لـ Al2O3 المذاب في الكريوليت المنصهر. لماذا لا يمكن الحصول على الألومنيوم بالتحليل الكهربائي لمحلول مائي لملح مثل AlCl3؟",
        "zh": "工业上通过电解溶于熔融冰晶石中的 Al2O3 制取金属铝。为什么不能通过电解 AlCl3 等盐的水溶液来制取铝？",
        "ku": "Di pîşesaziyê de metala alumînyûmê bi elektrolîza Al2O3 ya ku di krîyolîta helîyayî de helbûyî ye tê bidestxistin. Sedema ku alumînyûm bi elektrolîza çareseriya avî ya xwêyeke wek AlCl3 nayê bidestxistin kîjan e?"
      },
      "options": [
        {
          "tr": "Sulu çözeltide katotta Al3+ yerine su indirgenir ve H2 açığa çıkar.",
          "en": "In aqueous solution water is reduced at the cathode instead of Al3+ and H2 is released.",
          "de": "In wässriger Lösung wird an der Kathode statt Al3+ Wasser reduziert, und H2 entsteht.",
          "fr": "En solution aqueuse, c'est l'eau qui est réduite à la cathode à la place de Al3+ et H2 se dégage.",
          "ru": "В водном растворе на катоде вместо Al3+ восстанавливается вода и выделяется H2.",
          "ar": "في المحلول المائي يُختزل الماء عند المهبط بدلًا من Al3+ ويتصاعد H2.",
          "zh": "水溶液中阴极上被还原的是水而不是 Al3+，放出 H2。",
          "ku": "Di çareseriya avî de li katodê li şûna Al3+ av redûkte dibe û H2 derdikeve."
        },
        {
          "tr": "Alüminyum tuzları suda iyonlarına ayrışmaz.",
          "en": "Aluminium salts do not dissociate into ions in water.",
          "de": "Aluminiumsalze zerfallen in Wasser nicht in Ionen.",
          "fr": "Les sels d'aluminium ne se dissocient pas en ions dans l'eau.",
          "ru": "Соли алюминия не диссоциируют на ионы в воде.",
          "ar": "أملاح الألومنيوم لا تتفكك إلى أيونات في الماء.",
          "zh": "铝盐在水中不电离成离子。",
          "ku": "Xwêyên alumînyûmê di avê de naqetin îyonan."
        },
        {
          "tr": "Sulu çözeltide alüminyum metali anotta birikir.",
          "en": "In aqueous solution aluminium metal deposits at the anode.",
          "de": "In wässriger Lösung scheidet sich Aluminium an der Anode ab.",
          "fr": "En solution aqueuse, l'aluminium se dépose à l'anode.",
          "ru": "В водном растворе металлический алюминий осаждается на аноде.",
          "ar": "في المحلول المائي يترسب فلز الألومنيوم عند المصعد.",
          "zh": "水溶液中金属铝在阳极析出。",
          "ku": "Di çareseriya avî de metala alumînyûmê li anodê kom dibe."
        },
        {
          "tr": "Sulu çözeltide tepkime istemli olduğundan dış akım kaynağı kullanılamaz.",
          "en": "In aqueous solution the reaction is spontaneous, so an external power source cannot be used.",
          "de": "In wässriger Lösung ist die Reaktion freiwillig, daher kann keine äußere Stromquelle verwendet werden.",
          "fr": "En solution aqueuse, la réaction est spontanée, on ne peut donc pas utiliser de source de courant extérieure.",
          "ru": "В водном растворе реакция самопроизвольна, поэтому внешний источник тока использовать нельзя.",
          "ar": "في المحلول المائي يكون التفاعل تلقائيًا فلا يمكن استخدام مصدر تيار خارجي.",
          "zh": "水溶液中反应是自发的，因此不能使用外电源。",
          "ku": "Di çareseriya avî de reaksiyon xweber e, loma çavkaniya herika derve nayê bikaranîn."
        },
        {
          "tr": "Sulu çözeltide Al3+ iyonları yükseltgenerek Al metaline dönüşür.",
          "en": "In aqueous solution Al3+ ions are oxidized to aluminium metal.",
          "de": "In wässriger Lösung werden Al3+-Ionen zu Aluminium oxidiert.",
          "fr": "En solution aqueuse, les ions Al3+ sont oxydés en aluminium métallique.",
          "ru": "В водном растворе ионы Al3+ окисляются до металлического алюминия.",
          "ar": "في المحلول المائي تتأكسد أيونات Al3+ إلى فلز الألومنيوم.",
          "zh": "水溶液中 Al3+ 离子被氧化成金属铝。",
          "ku": "Di çareseriya avî de îyonên Al3+ oksîde dibin û vediguherin metala alumînyûmê."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Alüminyum çok aktif bir metaldir; Al3+ iyonunun indirgenmesi suyun indirgenmesinden çok daha zordur. Bu yüzden sulu çözeltide katotta su indirgenir (2 H2O + 2e- → H2 + 2 OH-) ve alüminyum hiç birikmez; su bulunmayan erimiş ortam gerekir. Al tuzları suda iyonlaşır, yani iyonlaşmama gerekçesi yanlıştır. Al3+'nın metale dönüşmesi indirgenmedir ve katotta olur; anotta metal birikmez ve elektroliz zaten istemsiz tepkimeler için dış kaynakla yapılır.",
        "en": "Aluminium is a very active metal; reducing Al3+ is much harder than reducing water. So in aqueous solution water is reduced at the cathode (2 H2O + 2e- → H2 + 2 OH-) and no aluminium deposits; a water-free molten medium is needed. Aluminium salts do ionize in water, so the non-dissociation reason is wrong. Conversion of Al3+ to metal is a reduction and occurs at the cathode; no metal deposits at the anode, and electrolysis is by definition used with an external source for non-spontaneous reactions.",
        "de": "Aluminium ist ein sehr unedles Metall; Al3+ ist viel schwerer zu reduzieren als Wasser. In wässriger Lösung wird deshalb an der Kathode Wasser reduziert (2 H2O + 2e- → H2 + 2 OH-), und es scheidet sich kein Aluminium ab; man braucht ein wasserfreies, geschmolzenes Medium. Aluminiumsalze dissoziieren in Wasser sehr wohl, die Begründung der fehlenden Ionenbildung ist also falsch. Die Umwandlung von Al3+ in Metall ist eine Reduktion und findet an der Kathode statt; an der Anode scheidet sich kein Metall ab, und Elektrolyse wird ohnehin mit äußerer Quelle für nicht freiwillige Reaktionen durchgeführt.",
        "fr": "L'aluminium est un métal très actif ; réduire Al3+ est bien plus difficile que réduire l'eau. En solution aqueuse, c'est donc l'eau qui est réduite à la cathode (2 H2O + 2e- → H2 + 2 OH-) et aucun aluminium ne se dépose ; il faut un milieu fondu sans eau. Les sels d'aluminium s'ionisent bien dans l'eau, l'argument de la non-dissociation est donc faux. La transformation de Al3+ en métal est une réduction qui a lieu à la cathode ; aucun métal ne se dépose à l'anode, et l'électrolyse sert justement, avec une source extérieure, aux réactions non spontanées.",
        "ru": "Алюминий — очень активный металл; восстановить Al3+ гораздо труднее, чем воду. Поэтому в водном растворе на катоде восстанавливается вода (2 H2O + 2e- → H2 + 2 OH-), и алюминий не осаждается; нужна безводная расплавленная среда. Соли алюминия в воде диссоциируют, поэтому довод об отсутствии диссоциации неверен. Превращение Al3+ в металл — восстановление, и оно идёт на катоде; на аноде металл не осаждается, а электролиз по определению проводят с внешним источником для несамопроизвольных реакций.",
        "ar": "الألومنيوم فلز نشط جدًا، واختزال Al3+ أصعب بكثير من اختزال الماء. لذلك يُختزل الماء عند المهبط في المحلول المائي (2 H2O + 2e- → H2 + 2 OH-) ولا يترسب الألومنيوم، فيلزم وسط منصهر خالٍ من الماء. أملاح الألومنيوم تتأين في الماء، فتعليل عدم التفكك خاطئ. وتحوّل Al3+ إلى فلز اختزال يحدث عند المهبط؛ ولا يترسب فلز عند المصعد، والتحليل الكهربائي أصلًا يُجرى بمصدر خارجي للتفاعلات غير التلقائية.",
        "zh": "铝是很活泼的金属，Al3+ 比水难还原得多。因此在水溶液中阴极上被还原的是水(2 H2O + 2e- → H2 + 2 OH-)，铝根本不会析出，必须使用无水的熔融介质。铝盐在水中能电离，所以“不电离”的理由是错的。Al3+ 变成金属是还原，发生在阴极；阳极上不析出金属，而且电解本来就是用外电源驱动非自发反应。",
        "ku": "Alumînyûm metaleke pir çalak e; redûksiyona Al3+ ji redûksiyona avê gelek dijwartir e. Ji ber vê di çareseriya avî de li katodê av redûkte dibe (2 H2O + 2e- → H2 + 2 OH-) û alumînyûm qet kom nabe; hawîrdoreke helîyayî ya bêav hewce ye. Xwêyên alumînyûmê di avê de dibin îyon, loma sedema ku ew naqetin îyonan şaş e. Veguherîna Al3+ bo metalê redûksiyon e û li katodê pêk tê; li anodê metal kom nabe û elektrolîz jixwe ji bo reaksiyonên ne-xweber bi çavkaniya derve tê kirin."
      }
    }
  ]
};

export default unit22;
