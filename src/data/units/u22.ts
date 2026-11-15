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
    "ar": "التحليل الكهربائي والتآكل",
    "zh": "电解与腐蚀",
    "ku": "Elektrolîz û Korozyon"
  },
  "subtitle": {
    "tr": "Faraday Kanunları, Suyun Elektrolizi ve Kurban Anot",
    "en": "Faraday Laws, Water Split & Sacrificial Anode",
    "de": "Faradaysche Gesetze, Wasserelektrolyse und Opferanode",
    "fr": "Lois de Faraday, électrolyse de l'eau et anode sacrificielle",
    "ru": "Законы Фарадея, электролиз воды и жертвенный анод",
    "ar": "قوانين فاراداي، التحليل الكهربائي للماء والأنود المضحي",
    "zh": "法拉第定律、水电解和牺牲阳极",
    "ku": "Qanûnên Faraday, Elektroliza Avê û Anode Qurbanê"
  },
  "facts": [
    {
      "id": "u22-f01",
      "fact": {
        "tr": "Elektroliz, istemsiz (E°pil < 0) bir redoks tepkimesinin dışarıdan elektrik enerjisi verilerek zorla gerçekleştirilmesidir.",
        "en": "Electrolysis is driving a non-spontaneous (E°cell < 0) redox reaction by supplying electrical energy from an external source.",
        "de": "Elektrolyse ist die erzwungene Durchführung einer nicht freiwilligen (E°Zelle < 0) Redoxreaktion durch Zufuhr elektrischer Energie von außen.",
        "fr": "L'électrolyse consiste à forcer une réaction redox non spontanée (E°pile < 0) en fournissant de l'énergie électrique depuis l'extérieur.",
        "ru": "Электролиз — это принудительное осуществление несамопроизвольной (E°эл < 0) окислительно-восстановительной реакции за счёт подводимой извне электрической энергии.",
        "ar": "التحليل الكهربائي هو إجبار تفاعل أكسدة واختزال غير تلقائي (E°خلية < 0) على الحدوث بتزويده بطاقة كهربائية من مصدر خارجي.",
        "zh": "电解是通过外加电能迫使非自发（E°电池 < 0）的氧化还原反应发生的过程。",
        "ku": "Elektrolîz, bi dayîna enerjiya elektrîkê ji derve, bi zorê pêkanîna reaksiyoneke redoksê ya ne-xweber (E°pîl < 0) ye."
      },
      "trap": {
        "tr": "Elektroliz kendiliğinden elektrik üreten bir galvanik sistemdir.",
        "en": "Electrolysis is a galvanic system that spontaneously produces electricity.",
        "de": "Elektrolyse ist ein galvanisches System, das spontan Strom erzeugt.",
        "fr": "L'électrolyse est un système galvanique qui produit spontanément de l'électricité.",
        "ru": "Электролиз – это гальваническая система, которая самопроизвольно производит электричество.",
        "ar": "التحليل الكهربائي هو نظام كلفاني ينتج الكهرباء تلقائيًا.",
        "zh": "电解是一种能自发产生电能的原电池体系。",
        "ku": "Elektrolîz pergalek galvanîk e ku bi xweber elektrîkê hildiberîne."
      }
    },
    {
      "id": "u22-f02",
      "fact": {
        "tr": "Faraday 1. Kanunu: Elektrotlarda toplanan madde miktarı devreden geçen elektrik yükü miktarı (Q = I * t) ile doğru orantılıdır.",
        "en": "Faraday's 1st Law: The amount of matter collected in the electrodes is directly proportional to the amount of electrical charge passing through the circuit (Q = I * t).",
        "de": "Das 1. Gesetz von Faraday: Die Menge der in den Elektroden gesammelten Materie ist direkt proportional zur Menge der elektrischen Ladung, die durch den Stromkreis fließt (Q = I * t).",
        "fr": "Première loi de Faraday : La quantité de matière collectée dans les électrodes est directement proportionnelle à la quantité de charge électrique traversant le circuit (Q = I * t).",
        "ru": "Первый закон Фарадея: Количество вещества, собранного в электродах, прямо пропорционально количеству электрического заряда, проходящего через цепь (Q = I*t).",
        "ar": "قانون فاراداي الأول: كمية المادة المجمعة في الأقطاب الكهربائية تتناسب طرديا مع كمية الشحنة الكهربائية المارة عبر الدائرة (Q = I * t).",
        "zh": "法拉第第一定律：电极中收集的物质量与通过电路的电荷量成正比（Q = I * t）。",
        "ku": "Zagona 1emîn a Faraday: Rêjeya maddeya ku di elektrodê de tê berhevkirin rasterast bi rêjeya barkirina elektrîkê ya ku di çerxê re derbas dibe re têkildar e (Q = I * t)."
      },
      "trap": {
        "tr": "Elektrotta toplanan madde devreden geçen akımla ters orantılıdır.",
        "en": "The substance collected in the electrode is inversely proportional to the current passing through the circuit.",
        "de": "Die in der Elektrode gesammelte Substanz ist umgekehrt proportional zum durch den Stromkreis fließenden Strom.",
        "fr": "La substance collectée dans l'électrode est inversement proportionnelle au courant traversant le circuit.",
        "ru": "Вещество, собирающееся в электроде, обратно пропорционально току, проходящему через цепь.",
        "ar": "تتناسب المادة المجمعة في القطب عكسيا مع التيار الذي يمر عبر الدائرة.",
        "zh": "电极中收集的物质与通过电路的电流成反比。",
        "ku": "Madeya ku di elektrodê de tê berhevkirin, berevajî wê bi rêjeya ku di çerxê re derbas dibe re têkildar e."
      }
    },
    {
      "id": "u22-f03",
      "fact": {
        "tr": "1 Faraday = 1 mol elektron yükü = 96500 Coulomb'dur.",
        "en": "1 Faraday = 1 mole of electron charge = 96500 Coulombs.",
        "de": "1 Faraday = 1 Mol Elektronenladung = 96500 Coulomb.",
        "fr": "1 Faraday = 1 mole de charge électronique = 96 500 Coulombs.",
        "ru": "1 Фарадей = 1 моль заряда электрона = 96500 Кулонов.",
        "ar": "1 فاراداي = 1 مول من شحنة الإلكترون = 96500 كولوم.",
        "zh": "1 法拉第 = 1 摩尔电子电荷 = 96500 库仑。",
        "ku": "1 Faraday = 1 mol barkirina elektronê = 96500 Kulomb."
      },
      "trap": {
        "tr": "1 Faraday elektrik yükü 1 Coulomb'a eşittir.",
        "en": "1 Faraday electric charge is equal to 1 Coulomb.",
        "de": "1 Faradaysche elektrische Ladung entspricht 1 Coulomb.",
        "fr": "1 charge électrique Faraday équivaut à 1 Coulomb.",
        "ru": "1 электрический заряд Фарадея равен 1 Кулону.",
        "ar": "1 شحنة فاراداي الكهربائية تساوي 1 كولوم.",
        "zh": "1 法拉第电荷等于 1 库仑。",
        "ku": "1 Bara elektrîkê ya Faraday bi 1 Coulomb re ye."
      }
    },
    {
      "id": "u22-f04",
      "fact": {
        "tr": "Elektrotlarda toplanan madde kütlesi formülü: m = (Q * MA) / (96500 * z)'dir (z: tesir değerliği / alınan-verilen elektron sayısı).",
        "en": "The formula for the mass deposited at an electrode is m = (Q * MA) / (96500 * z) (z: valence factor, i.e. the number of electrons gained or lost).",
        "de": "Die an einer Elektrode abgeschiedene Masse beträgt m = (Q * MA) / (96500 * z) (z: Wertigkeit, d. h. Zahl der aufgenommenen bzw. abgegebenen Elektronen).",
        "fr": "La masse déposée à une électrode est m = (Q * MA) / (96500 * z) (z : valence, c'est-à-dire le nombre d'électrons captés ou cédés).",
        "ru": "Масса вещества, выделившегося на электроде: m = (Q * MA) / (96500 * z) (z — валентность, т. е. число принятых или отданных электронов).",
        "ar": "كتلة المادة المترسبة عند القطب: m = (Q * MA) / (96500 * z) (z: التكافؤ، أي عدد الإلكترونات المكتسبة أو المفقودة).",
        "zh": "电极上析出物质的质量公式为 m = (Q * MA) / (96500 * z)（z：化合价，即得失电子数）。",
        "ku": "Formula girseya maddeya ku li elektrodê kom dibe: m = (Q * MA) / (96500 * z) (z: valans, ango hejmara elektronên hatine wergirtin an dayîn)."
      },
      "trap": {
        "tr": "Toplanan madde kütlesi maddenin mol kütlesine bölünerek bulunur.",
        "en": "The mass of the collected substance is found by dividing it by the molar mass of the substance.",
        "de": "Die Masse der gesammelten Substanz wird ermittelt, indem man sie durch die Molmasse der Substanz dividiert.",
        "fr": "La masse de la substance collectée est obtenue en la divisant par la masse molaire de la substance.",
        "ru": "Массу собранного вещества находят путем деления ее на молярную массу вещества.",
        "ar": "يتم العثور على كتلة المادة المجمعة بتقسيمها على الكتلة المولية للمادة.",
        "zh": "所收集物质的质量除以该物质的摩尔质量即可得出。",
        "ku": "Girseya maddeya berhevkirî bi dabeşkirina wê bi girseya molî ya maddeyê tê dîtin."
      }
    },
    {
      "id": "u22-f05",
      "fact": {
        "tr": "Faraday 2. Kanunu: Seri bağlı elektroliz kaplarından geçen elektrik yükü eşittir ve toplanan maddelerin eşdeğer gram sayıları eşittir.",
        "en": "Faraday's 2nd Law: The electrical charge passing through serially connected electrolysis vessels is equal and the equivalent gram numbers of the collected substances are equal.",
        "de": "Faradaysches 2. Gesetz: Die elektrische Ladung, die durch in Reihe geschaltete Elektrolysegefäße fließt, ist gleich und die äquivalenten Grammzahlen der gesammelten Substanzen sind gleich.",
        "fr": "Deuxième loi de Faraday : La charge électrique passant dans les cuves d'électrolyse connectées en série est égale et les nombres de grammes équivalents des substances collectées sont égaux.",
        "ru": "Второй закон Фарадея: Электрический заряд, проходящий через последовательно соединенные электролизные сосуды, одинаков, и эквивалентное количество граммов собранных веществ одинаково.",
        "ar": "قانون فاراداي الثاني: الشحنات الكهربائية التي تمر عبر أوعية التحليل الكهربائي المتصلة تسلسلياً متساوية، كما أن أعداد الغرامات المكافئة للمواد المجمعة متساوية.",
        "zh": "法拉第第二定律：通过串联电解容器的电荷相等，收集到的物质的当量克数也相等。",
        "ku": "Zagona 2yemîn a Faraday: Bara elektrîkê ya ku di firaxên elektrolîzê yên bi rêz ve girêdayî re derbas dibe wekhev e û jimareyên gram ên hevwate yên maddeyên berhevkirî wekhev in."
      },
      "trap": {
        "tr": "Seri bağlı kaplarda toplanan maddelerin kütleleri daima birbirine eşittir.",
        "en": "The masses of the substances collected in serially connected containers are always equal.",
        "de": "Die Massen der in hintereinander geschalteten Behältern gesammelten Stoffe sind immer gleich.",
        "fr": "Les masses des substances collectées dans des conteneurs connectés en série sont toujours égales.",
        "ru": "Массы веществ, собранных в последовательно соединенные емкости, всегда равны.",
        "ar": "تكون كتل المواد المجمعة في حاويات متصلة تسلسليًا متساوية دائمًا.",
        "zh": "串联连接的容器中收集的物质的质量始终相等。",
        "ku": "Girseya maddeyên ku di konteynerên bi rêz ve girêdayî de têne berhev kirin her gav wekhev in."
      }
    },
    {
      "id": "u22-f06",
      "fact": {
        "tr": "Suyun elektrolizinde (Hoffman voltametresi): Katotta 2 hacim H2 gazı toplanırken, anotta 1 hacim O2 gazı toplanır (2 H2O → 2 H2 + O2).",
        "en": "In the electrolysis of water (Hoffman voltammeter): While 2 volumes of H2 gas are collected at the cathode, 1 volume of O2 gas is collected at the anode (2 H2O → 2 H2 + O2).",
        "de": "Bei der Elektrolyse von Wasser (Hoffman-Voltammeter): Während an der Kathode 2 Volumina H2-Gas gesammelt werden, wird an der Anode 1 Volumen O2-Gas gesammelt (2 H2O → 2 H2 + O2).",
        "fr": "Dans l'électrolyse de l'eau (voltampèremètre Hoffman) : Alors que 2 volumes de gaz H2 sont collectés à la cathode, 1 volume de gaz O2 est collecté à l'anode (2 H2O → 2 H2 + O2).",
        "ru": "При электролизе воды (вольтамперметр Хоффмана): на катоде собирается 2 объема газообразного H2, на аноде собирается 1 объем газообразного O2 (2 H2O → 2 H2 + O2).",
        "ar": "في التحليل الكهربائي للماء (فولتاميتر هوفمان): بينما يتم جمع حجمين من غاز H2 عند الكاثود، يتم جمع حجم واحد من غاز O2 عند الأنود (2 H2O → 2 H2 + O2).",
        "zh": "在水电解中（霍夫曼伏安计）：在阴极收集 2 体积的 H2 气体，在阳极收集 1 体积的 O2 气体 (2 H2O → 2 H2 + O2)。",
        "ku": "Di elektrolîza avê de (voltametra Hoffman): Dema ku li katodê 2 cild gaza H2, li anodê 1 cild gaza O2 tê berhevkirin (2 H2O → 2 H2 + O2)."
      },
      "trap": {
        "tr": "Suyun elektrolizinde anotta katottan 2 kat daha fazla gaz toplanır.",
        "en": "In the electrolysis of water, twice as much gas is collected at the anode than at the cathode.",
        "de": "Bei der Elektrolyse von Wasser wird an der Anode doppelt so viel Gas gesammelt wie an der Kathode.",
        "fr": "Lors de l’électrolyse de l’eau, deux fois plus de gaz sont collectés à l’anode qu’à la cathode.",
        "ru": "При электролизе воды на аноде собирается в два раза больше газа, чем на катоде.",
        "ar": "في التحليل الكهربائي للمياه، يتم جمع ضعف كمية الغاز عند القطب الموجب مقارنة بالكاثود.",
        "zh": "在水的电解中，阳极收集的气体是阴极收集的气体的两倍。",
        "ku": "Di elektrolîza avê de li anodê du qat zêdetir gaz ji katodê tê komkirin."
      }
    },
    {
      "id": "u22-f07",
      "fact": {
        "tr": "Erimiş tuzların elektrolizinde katotta katyon indirgenerek metal açığa çıkar; anotta anyon yükseltgenerek ametal gazı açığa çıkar.",
        "en": "In the electrolysis of molten salts, the cation is reduced at the cathode and the metal is released; At the anode, the anion is oxidized and nonmetal gas is released.",
        "de": "Bei der Elektrolyse geschmolzener Salze wird das Kation an der Kathode reduziert und das Metall freigesetzt; An der Anode wird das Anion oxidiert und nichtmetallisches Gas freigesetzt.",
        "fr": "Lors de l'électrolyse des sels fondus, le cation est réduit à la cathode et le métal est libéré ; À l'anode, l'anion est oxydé et un gaz non métallique est libéré.",
        "ru": "При электролизе расплавленных солей катион восстанавливается на катоде и выделяется металл; На аноде анион окисляется и выделяется неметаллический газ.",
        "ar": "في التحليل الكهربائي للأملاح المنصهرة يُختزل الكاتيون عند الكاثود فيتحرر الفلز؛ ويتأكسد الأنيون عند الأنود فيتحرر غاز لافلزي.",
        "zh": "熔盐电解时，阳离子在阴极被还原，释放出金属；在阳极，阴离子被氧化并释放出非金属气体。",
        "ku": "Di elektrolîza xwêyên şilandî de, kation li katodê kêm dibe û metal tê berdan; Li anodê, anyon oksîde dibe û gaza nemetal derdikeve."
      },
      "trap": {
        "tr": "Erimiş NaCl elektrolizinde anotta sodyum metali toplanır.",
        "en": "In the electrolysis of molten NaCl, sodium metal is collected at the anode.",
        "de": "Bei der Elektrolyse von geschmolzenem NaCl wird Natriummetall an der Anode gesammelt.",
        "fr": "Lors de l’électrolyse du NaCl fondu, le sodium métallique est collecté à l’anode.",
        "ru": "При электролизе расплавленного NaCl металлический натрий собирается на аноде.",
        "ar": "في التحليل الكهربائي لكلوريد الصوديوم المنصهر، يتم جمع معدن الصوديوم عند القطب الموجب.",
        "zh": "在电解熔融氯化钠时，金属钠被收集在阳极。",
        "ku": "Di elektrolîza NaCl ya şilandî de, metala sodyûm li anodê tê berhev kirin."
      }
    },
    {
      "id": "u22-f08",
      "fact": {
        "tr": "Sulu çözelti elektrolizinde katotta indirgenme potansiyeli en büyük olan (en pasif katyon) öncelikle indirgenir.",
        "en": "In aqueous solution electrolysis, the cation with the largest reduction potential (the most passive cation) at the cathode is reduced first.",
        "de": "Bei der Elektrolyse wässriger Lösungen wird zuerst das Kation mit dem größten Reduktionspotential (das passivste Kation) an der Kathode reduziert.",
        "fr": "Dans l'électrolyse en solution aqueuse, le cation ayant le potentiel de réduction le plus élevé (le cation le plus passif) à la cathode est réduit en premier.",
        "ru": "При электролизе водного раствора катион с наибольшим восстановительным потенциалом (самый пассивный катион) на катоде восстанавливается первым.",
        "ar": "في التحليل الكهربائي للمحاليل المائية يُختزل أولًا عند الكاثود الكاتيون ذو جهد الاختزال الأكبر (الكاتيون الأقل نشاطًا).",
        "zh": "在水溶液电解中，阴极处还原电势最大的阳离子（最惰性的阳离子）首先被还原。",
        "ku": "Di elektrolîza çareseriya avî de, kationa ku potansiyela kêmkirina herî mezin (kationa herî pasîf) li katodê pêşî kêm dibe."
      },
      "trap": {
        "tr": "Sulu çözeltide katotta aktifliği en büyük olan Na+ öncelikle indirgenir.",
        "en": "In aqueous solution, Na+, which is the most active at the cathode, is reduced first.",
        "de": "In wässriger Lösung wird zunächst Na+ reduziert, das an der Kathode am aktivsten ist.",
        "fr": "En solution aqueuse, Na+, qui est le plus actif à la cathode, est réduit en premier.",
        "ru": "В водном растворе в первую очередь восстанавливается Na+, наиболее активный на катоде.",
        "ar": "في المحلول المائي، يتم اختزال Na+، وهو الأكثر نشاطًا عند الكاثود، أولاً.",
        "zh": "在水溶液中，Na+ 在阴极最活跃，首先被还原。",
        "ku": "Di çareseriya avî de, Na+, ku li katodê herî çalak e, pêşî kêm dibe."
      }
    },
    {
      "id": "u22-f09",
      "fact": {
        "tr": "Sulu çözelti elektrolizinde anotta yükseltgenme potansiyeli en büyük olan (en aktif anyon) öncelikle yükseltgenir.",
        "en": "In aqueous solution electrolysis, the anion with the highest oxidation potential (the most active anion) at the anode is oxidized first.",
        "de": "Bei der Elektrolyse wässriger Lösungen wird zuerst das Anion mit dem höchsten Oxidationspotential (das aktivste Anion) an der Anode oxidiert.",
        "fr": "Dans l'électrolyse en solution aqueuse, l'anion ayant le potentiel d'oxydation le plus élevé (l'anion le plus actif) à l'anode est oxydé en premier.",
        "ru": "При электролизе водного раствора анион с самым высоким окислительным потенциалом (наиболее активный анион) на аноде окисляется первым.",
        "ar": "في التحليل الكهربائي للمحاليل المائية يتأكسد أولًا عند الأنود الأنيون ذو جهد التأكسد الأكبر (الأنيون الأكثر نشاطًا).",
        "zh": "在水溶液电解中，阳极处氧化电位最高的阴离子（最活泼的阴离子）首先被氧化。",
        "ku": "Di elektrolîza çareseriya avî de, anyona ku potansiyela oksîdasyonê ya herî zêde (anyona herî çalak) li anodê ye pêşî tê oksîd kirin."
      },
      "trap": {
        "tr": "Anotta yükseltgenme potansiyeli en küçük olan anyon önce çıkar.",
        "en": "The anion with the smallest oxidation potential at the anode emerges first.",
        "de": "Das Anion mit dem kleinsten Oxidationspotential an der Anode entsteht zuerst.",
        "fr": "L’anion ayant le plus petit potentiel d’oxydation à l’anode émerge en premier.",
        "ru": "Первым на аноде выходит анион с наименьшим окислительным потенциалом.",
        "ar": "يتأكسد أولًا عند الأنود الأنيون ذو جهد التأكسد الأصغر.",
        "zh": "阳极氧化电位最小的阴离子首先出现。",
        "ku": "Anyona xwedan potansiyela oksîdasyonê ya herî piçûk li anodê pêşî derdikeve holê."
      }
    },
    {
      "id": "u22-f10",
      "fact": {
        "tr": "Korozyon, metallerin çevre koşullarıyla (özellikle O2 ve nem) elektrokimyasal olarak yükseltgenip aşınmasıdır (paslanma).",
        "en": "Corrosion is the electrochemical oxidation and corrosion (rusting) of metals by environmental conditions (especially O2 and humidity).",
        "de": "Korrosion ist die elektrochemische Oxidation und Korrosion (Rosten) von Metallen durch Umgebungsbedingungen (insbesondere O2 und Feuchtigkeit).",
        "fr": "La corrosion est l'oxydation électrochimique et la corrosion (rouille) des métaux par les conditions environnementales (en particulier l'O2 et l'humidité).",
        "ru": "Коррозия – это электрохимическое окисление и коррозия (ржавление) металлов под воздействием условий окружающей среды (особенно O2 и влажности).",
        "ar": "التآكل هو الأكسدة الكهروكيميائية والتآكل (الصدأ) للمعادن بسبب الظروف البيئية (خاصة الأكسجين والرطوبة).",
        "zh": "腐蚀是金属在环境条件（尤其是氧气和湿度）的作用下发生的电化学氧化和腐蚀（生锈）。",
        "ku": "Korozyon oksîdasyon û korozyona elektrokîmyayî (xirabbûn) ya metalan e ji ber şert û mercên jîngehê (bi taybetî O2 û nembûn)."
      },
      "trap": {
        "tr": "Korozyon metallerin fiziksel olarak parlatılması işlemidir.",
        "en": "Corrosion is the process of physical polishing of metals.",
        "de": "Korrosion ist der Prozess des physikalischen Polierens von Metallen.",
        "fr": "La corrosion est le processus de polissage physique des métaux.",
        "ru": "Коррозия – это процесс физической полировки металлов.",
        "ar": "التآكل هو عملية التلميع الفيزيائي للمعادن.",
        "zh": "腐蚀是金属的物理抛光过程。",
        "ku": "Korozyon pêvajoya paqijkirina fizîkî ya metalan e."
      }
    },
    {
      "id": "u22-f11",
      "fact": {
        "tr": "Katodik koruma (Kurban Anot): Korunacak metalden daha aktif bir metal (Mg, Zn) sisteme bağlanarak kurban anot olarak aşındırılır.",
        "en": "Cathodic protection (Sacrificial Anode): A more active metal (Mg, Zn) than the metal to be protected is connected to the system and corroded as the sacrificial anode.",
        "de": "Kathodischer Schutz (Opferanode): Ein aktiveres Metall (Mg, Zn) als das zu schützende Metall wird als Opferanode an das System angeschlossen und korrodiert.",
        "fr": "Protection cathodique (Anode sacrificielle) : Un métal plus actif (Mg, Zn) que le métal à protéger est connecté au système et corrodé comme anode sacrificielle.",
        "ru": "Катодная защита (жертвенный анод): более активный металл (Mg, Zn), чем защищаемый металл, подключается к системе и подвергается коррозии в качестве жертвенного анода.",
        "ar": "الحماية الكاثودية (الأنود المضحي): يتم توصيل المعدن الأكثر نشاطًا (Mg، Zn) من المعدن المراد حمايته بالنظام ويتآكل مثل الأنود المضحي.",
        "zh": "阴极保护（牺牲阳极）：将比被保护金属更活泼的金属（Mg、Zn）连接到系统中，作为牺牲阳极发生腐蚀。",
        "ku": "Parastina katodîk (Anoda Qurbanê): Metalek çalaktir (Mg, Zn) ji metala ku tê parastin bi pergalê ve girêdayî ye û wekî anoda qurbanê tê xera kirin."
      },
      "trap": {
        "tr": "Kurban elektrot olarak korunacak metalden daha pasif bir metal seçilmelidir.",
        "en": "A more passive metal than the metal to be protected should be chosen as the sacrificial electrode.",
        "de": "Als Opferelektrode sollte ein passiveres Metall als das zu schützende Metall gewählt werden.",
        "fr": "Un métal plus passif que le métal à protéger doit être choisi comme électrode sacrificielle.",
        "ru": "В качестве жертвующего электрода следует выбрать более пассивный металл, чем защищаемый металл.",
        "ar": "يجب اختيار فلز أقل نشاطًا من الفلز المراد حمايته ليكون القطب المضحّي.",
        "zh": "应选择比被保护金属更惰性的金属作为牺牲电极。",
        "ku": "Pêdivî ye ku ji metalê ku were parastin metalek pasîftir wekî elektrodê qurban were hilbijartin."
      }
    },
    {
      "id": "u22-f12",
      "fact": {
        "tr": "Elektrolitik kaplamacılıkta (galvanoplasti): Kaplanacak eşya KATOTA bağlanır; kaplama metali ANOTA bağlanır.",
        "en": "In electrolytic plating (galvanoplasty): The item to be coated is connected to the CATHOD; The coating metal is connected to the ANODE.",
        "de": "Bei der elektrolytischen Beschichtung (Galvanoplastie): Der zu beschichtende Gegenstand wird mit der KATHODE verbunden; Das Beschichtungsmetall ist mit der ANODE verbunden.",
        "fr": "En galvanoplastie (dépôt électrolytique) : l'objet à revêtir est relié à la CATHODE ; le métal de revêtement est relié à l'ANODE.",
        "ru": "При гальванопластике (гальванопластике): Изделие, на которое будет нанесено покрытие, подключается к КАТОДУ; Металл покрытия соединен с АНОДОМ.",
        "ar": "في الطلاء الكهربائي (الجلفنة الكهربائية): يوصل الجسم المراد طلاؤه بالكاثود، ويوصل فلز الطلاء بالأنود.",
        "zh": "在电解电镀（电镀成形术）中：将要涂覆的物品连接到阴极；涂层金属连接到阳极。",
        "ku": "Di pêçana elektrolîtîk de (galvanoplastî): tiştê ku dê were pêçandin bi KATODÊ ve, metala pêçanê jî bi ANODÊ ve tê girêdan."
      },
      "trap": {
        "tr": "Kaplanacak eşya anota bağlanmalıdır.",
        "en": "The item to be coated must be connected to the anode.",
        "de": "Der zu beschichtende Gegenstand muss an die Anode angeschlossen werden.",
        "fr": "L'élément à revêtir doit être connecté à l'anode.",
        "ru": "Изделие, на которое будет нанесено покрытие, должно быть соединено с анодом.",
        "ar": "يجب أن يكون العنصر المراد طلاؤه متصلاً بالأنود.",
        "zh": "待涂覆的物品必须连接到阳极。",
        "ku": "Tiştê ku tê pêçandin divê bi anodê ve were girêdan."
      }
    },
    {
      "id": "u22-f13",
      "fact": {
        "tr": "Saf su elektriği çok az ilettiğinden suyun elektrolizinde iletkenliği artırmak için ortama birkaç damla H2SO4 eklenir.",
        "en": "Since pure water conducts electricity very little, a few drops of H2SO4 are added to the medium to increase the conductivity in the electrolysis of water.",
        "de": "Da reines Wasser den Strom nur sehr wenig leitet, werden dem Medium einige Tropfen H2SO4 zugesetzt, um die Leitfähigkeit bei der Elektrolyse von Wasser zu erhöhen.",
        "fr": "L’eau pure étant très peu conductrice de l’électricité, quelques gouttes de H2SO4 sont ajoutées au milieu pour augmenter la conductivité lors de l’électrolyse de l’eau.",
        "ru": "Поскольку чистая вода проводит электричество очень мало, в среду для увеличения проводимости при электролизе воды добавляют несколько капель H2SO4.",
        "ar": "نظرًا لأن الماء النقي يوصل الكهرباء بشكل قليل جدًا، تتم إضافة بضع قطرات من H2SO4 إلى الوسط لزيادة التوصيلية في التحليل الكهربائي للماء.",
        "zh": "由于纯水的导电性很小，因此在介质中添加几滴H2SO4以增加水电解时的电导率。",
        "ku": "Ji ber ku ava paqij elektrîkê pir hindik diguhezîne, di elektrolîza avê de ji bo zêdekirina guhêzbariyê çend dilop H2SO4 lê tê zêdekirin."
      },
      "trap": {
        "tr": "Suyun elektrolizi için saf suya şeker eklenir.",
        "en": "For electrolysis of water, sugar is added to pure water.",
        "de": "Bei der Elektrolyse von Wasser wird reinem Wasser Zucker zugesetzt.",
        "fr": "Pour l'électrolyse de l'eau, du sucre est ajouté à l'eau pure.",
        "ru": "Для электролиза воды в чистую воду добавляют сахар.",
        "ar": "للتحليل الكهربائي للماء، يضاف السكر إلى الماء النقي.",
        "zh": "为了电解水，将糖添加到纯水中。",
        "ku": "Ji bo elektrolîza avê, şekir li ava paqij tê zêdekirin."
      }
    },
    {
      "id": "u22-f14",
      "fact": {
        "tr": "Erimiş CaCl2 tuzundan 2 Faraday akım geçerse katotta 1 mol Ca metali toplanır (Ca2+ + 2e- → Ca).",
        "en": "If a current of 2 Faradays passes through the molten CaCl2 salt, 1 mole of Ca metal is collected at the cathode (Ca2+ + 2e- → Ca).",
        "de": "Wenn ein Strom von 2 Faradays durch das geschmolzene CaCl2-Salz fließt, wird 1 Mol Ca-Metall an der Kathode gesammelt (Ca2+ + 2e- → Ca).",
        "fr": "Si un courant de 2 Faraday traverse le sel CaCl2 fondu, 1 mole de métal Ca est collectée à la cathode (Ca2+ + 2e- → Ca).",
        "ru": "Если через расплав CaCl2 пропустить 2 фарадея электричества, на катоде выделится 1 моль металлического Ca (Ca2+ + 2e- → Ca).",
        "ar": "إذا مرت كمية كهرباء مقدارها 2 فاراداي في مصهور CaCl2 يترسب 1 مول من فلز Ca عند الكاثود (Ca2+ + 2e- → Ca).",
        "zh": "如果 2 法拉第的电流通过熔融的 CaCl2 盐，则在阴极处收集 1 摩尔的 Ca 金属 (Ca2+ + 2e- → Ca)。",
        "ku": "Ger herikîna 2 Faraday di xwêya CaCl2 ya şilandî re derbas bibe, 1 mol metal Ca li katodê tê berhev kirin (Ca2+ + 2e- → Ca)."
      },
      "trap": {
        "tr": "2 Faraday akım geçtiğinde 2 mol Ca metali toplanır.",
        "en": "When 2 Faraday current passes, 2 moles of Ca metal are collected.",
        "de": "Wenn ein Strom von 2 Faraday fließt, werden 2 Mol Ca-Metall gesammelt.",
        "fr": "Lorsque 2 faradays traversent la cellule, 2 moles de calcium métallique sont recueillies.",
        "ru": "При прохождении 2 фарадеев электричества выделяется 2 моль металлического Ca.",
        "ar": "عند مرور 2 فاراداي يترسب 2 مول من فلز Ca.",
        "zh": "当通过 2 法拉第电流时，会收集 2 摩尔的 Ca 金属。",
        "ku": "Dema 2 Faraday bar derbas dibe, 2 mol metala Ca kom dibe."
      }
    },
    {
      "id": "u22-f15",
      "fact": {
        "tr": "Downs hücresi erimiş NaCl'den metalik sodyum üretimi için kullanılan endüstriyel elektroliz hücresidir.",
        "en": "Downs cell is an industrial electrolysis cell used for the production of metallic sodium from molten NaCl.",
        "de": "Die Downs-Zelle ist eine industrielle Elektrolysezelle zur Herstellung von metallischem Natrium aus geschmolzenem NaCl.",
        "fr": "La cellule Downs est une cellule d'électrolyse industrielle utilisée pour la production de sodium métallique à partir de NaCl fondu.",
        "ru": "Ячейка Даунса — это промышленная электролитическая ячейка, используемая для производства металлического натрия из расплавленного NaCl.",
        "ar": "خلية داونز هي خلية تحليل كهربائي صناعية تستخدم لإنتاج الصوديوم المعدني من كلوريد الصوديوم المنصهر.",
        "zh": "唐斯槽是一种工业电解槽，用于从熔融氯化钠生产金属钠。",
        "ku": "Hucreya Downs şaneyek elektrolîzek pîşesaziyê ye ku ji bo hilberîna sodyûmê metalî ya ji NaCl-ya şilkirî tê bikar anîn."
      },
      "trap": {
        "tr": "Downs hücresi pil üretmek için kullanılır.",
        "en": "Downs cell is used to produce batteries.",
        "de": "Downs-Zellen werden zur Herstellung von Batterien verwendet.",
        "fr": "La cellule Downs est utilisée pour produire des batteries.",
        "ru": "Ячейка Даунса используется для производства аккумуляторов.",
        "ar": "تستخدم خلية داونز لإنتاج البطاريات.",
        "zh": "唐斯电池用于生产电池。",
        "ku": "Hucreya Downs ji bo hilberîna bataryayê tê bikar anîn."
      }
    },
    {
      "id": "u22-f16",
      "fact": {
        "tr": "Demir bir boruyu korozyondan korumak için magnezyum bloğu bağlanması aktiflik farkına dayalı kurban elektrot uygulamasıdır.",
        "en": "Connecting a magnesium block to an iron pipe to protect it from corrosion is a sacrificial-electrode application based on the difference in activity.",
        "de": "Das leitende Verbinden eines Magnesiumblocks mit einem Eisenrohr zum Korrosionsschutz ist eine Anwendung der Opferelektrode, die auf dem Aktivitätsunterschied beruht.",
        "fr": "Relier électriquement un bloc de magnésium à un tuyau en fer pour le protéger de la corrosion est une application de l'électrode sacrificielle fondée sur la différence d'activité.",
        "ru": "Подключение магниевого блока к железной трубе для защиты от коррозии — это применение жертвенного электрода, основанное на разнице активности металлов.",
        "ar": "إن ربط كتلة من المغنيسيوم لحماية أنبوب حديدي من التآكل هو تطبيق قطب كهربائي مضحٍ يعتمد على اختلاف النشاط.",
        "zh": "将镁块用导线与铁管相连以防止铁管腐蚀，是基于金属活动性差异的牺牲电极应用。",
        "ku": "Girêdana bloka magnesiumê ji bo parastina boriyek hesin ji korozyonê serîlêdanek elektrodê ya qurbanî ye ku li ser bingeha cûdahiya çalakiyê ye."
      },
      "trap": {
        "tr": "Kurban elektrot demirin üzerine altın kaplama yapmaktır.",
        "en": "The sacrificial electrode is plating gold on iron.",
        "de": "Die Opferelektrode plattiert Eisen mit Gold.",
        "fr": "L'électrode sacrificielle consiste à déposer de l'or sur du fer.",
        "ru": "Жертвенный электрод наносит золото на железо.",
        "ar": "القطب المضحي هو طلاء الذهب على الحديد.",
        "zh": "牺牲电极是在铁上镀金。",
        "ku": "Elektroda qurbanê zêr li ser hesin dike."
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
        "ru": "Гальванический элемент (батарея)",
        "ar": "خلية كلفانية (بطارية)",
        "zh": "原电池（电池）",
        "ku": "Hucreya Galvanîk (Pîl)"
      },
      "conceptB": {
        "tr": "Elektroliz Hücresi",
        "en": "Electrolysis Cell",
        "de": "Elektrolysezelle",
        "fr": "Cellule d'électrolyse",
        "ru": "Электролизная ячейка",
        "ar": "خلية التحليل الكهربائي",
        "zh": "电解槽",
        "ku": "Hucreya Elektrolîzê"
      },
      "distinction": {
        "tr": "Pil kimyasal enerjiyi elektrik enerjisine çevirir (istemli); elektroliz elektrikle istemsiz tepkimeyi yürütür.",
        "en": "A galvanic cell converts chemical energy into electrical energy (spontaneous); electrolysis uses electricity to drive a non-spontaneous reaction.",
        "de": "Eine galvanische Zelle wandelt chemische in elektrische Energie um (freiwillig); die Elektrolyse erzwingt mit Strom eine nicht freiwillige Reaktion.",
        "fr": "Une pile convertit l'énergie chimique en énergie électrique (spontané) ; l'électrolyse utilise l'électricité pour réaliser une réaction non spontanée.",
        "ru": "Гальванический элемент превращает химическую энергию в электрическую (самопроизвольно); электролиз с помощью тока осуществляет несамопроизвольную реакцию.",
        "ar": "تحوّل الخلية الجلفانية الطاقة الكيميائية إلى طاقة كهربائية (تلقائي)؛ ويستخدم التحليل الكهربائي الكهرباء لإحداث تفاعل غير تلقائي.",
        "zh": "原电池将化学能转化为电能（自发）；电解利用电能驱动非自发反应。",
        "ku": "Pîl enerjiya kîmyewî vediguherîne enerjiya elektrîkê (xweber); elektrolîz bi elektrîkê reaksiyoneke ne-xweber dimeşîne."
      }
    },
    {
      "id": "u22-c02",
      "conceptA": {
        "tr": "Katotta H2 Çıkışı",
        "en": "H2 Output at Cathode",
        "de": "H2-Ausstoß an der Kathode",
        "fr": "Sortie H2 à la cathode",
        "ru": "Выход H2 на катоде",
        "ar": "خرج H2 عند الكاثود",
        "zh": "阴极 H2 输出",
        "ku": "Hilberîna H2 li Katodê"
      },
      "conceptB": {
        "tr": "Anotta O2 Çıkışı",
        "en": "O2 Output at Anode",
        "de": "O2-Ausgabe an der Anode",
        "fr": "Sortie O2 à l'anode",
        "ru": "Выход O2 на аноде",
        "ar": "إخراج O2 في الأنود",
        "zh": "阳极 O2 输出",
        "ku": "Derketina O2 li Anode"
      },
      "distinction": {
        "tr": "Katotta H2 çıkışı suyun indirgenmesiyle olur ve hacmi anottaki O2 hacminin iki katıdır; anotta O2 çıkışı suyun yükseltgenmesiyle olur.",
        "en": "H2 output at the cathode results from the reduction of water and its volume is twice that of the O2 at the anode; O2 output at the anode results from the oxidation of water.",
        "de": "Die H2-Bildung an der Kathode entsteht durch Reduktion von Wasser, ihr Volumen ist doppelt so groß wie das des O2 an der Anode; die O2-Bildung an der Anode entsteht durch Oxidation von Wasser.",
        "fr": "La production de H2 à la cathode provient de la réduction de l'eau et son volume est le double de celui de O2 à l'anode ; la production de O2 à l'anode provient de l'oxydation de l'eau.",
        "ru": "Выделение H2 на катоде происходит при восстановлении воды, и его объём вдвое больше объёма O2 на аноде; выделение O2 на аноде происходит при окислении воды.",
        "ar": "ينتج تصاعد H2 عند الكاثود عن اختزال الماء وحجمه ضعف حجم O2 عند الأنود؛ وينتج تصاعد O2 عند الأنود عن أكسدة الماء.",
        "zh": "阴极析出 H2 是水被还原的结果，其体积是阳极 O2 体积的两倍；阳极析出 O2 是水被氧化的结果。",
        "ku": "Derketina H2 li katodê ji kêmbûna avê çêdibe û qebareya wê du qatê ya O2 ya li anodê ye; derketina O2 li anodê ji oksîdbûna avê çêdibe."
      }
    },
    {
      "id": "u22-c03",
      "conceptA": {
        "tr": "Erimiş Tuz Elektrolizi",
        "en": "Molten Salt Electrolysis",
        "de": "Elektrolyse von geschmolzenem Salz",
        "fr": "Électrolyse au sel fondu",
        "ru": "Электролиз расплавленной соли",
        "ar": "التحليل الكهربائي للملح المنصهر",
        "zh": "熔盐电解",
        "ku": "Elektrolîza xwêya helandî"
      },
      "conceptB": {
        "tr": "Sulu Çözelti Elektrolizi",
        "en": "Aqueous Solution Electrolysis",
        "de": "Elektrolyse wässriger Lösungen",
        "fr": "Électrolyse en solution aqueuse",
        "ru": "Электролиз водного раствора",
        "ar": "التحليل الكهربائي للمحلول المائي",
        "zh": "水溶液电解",
        "ku": "Elektroliza Çareseriya Avê"
      },
      "distinction": {
        "tr": "Erimiş tuzda sadece katyon ve anyon yarışır; sulu çözeltide suyun H+ ve OH- iyonları da elektrot yarışına katılır.",
        "en": "In molten salt, only cations and anions compete; In aqueous solution, H+ and OH- ions of water also participate in the electrode race.",
        "de": "In geschmolzenem Salz konkurrieren nur Kationen und Anionen; In wässriger Lösung nehmen auch H+- und OH--Ionen des Wassers am Elektrodenwettlauf teil.",
        "fr": "Dans le sel fondu, seuls les cations et les anions entrent en compétition ; En solution aqueuse, les ions H+ et OH- de l’eau participent également à la course aux électrodes.",
        "ru": "В расплавленной соли конкурируют только катионы и анионы; В водном растворе в электродной гонке участвуют также ионы воды H+ и OH-.",
        "ar": "في الملح المنصهر، تتنافس الكاتيونات والأنيونات فقط؛ في المحلول المائي، تشارك أيونات الماء H+ و OH- أيضًا في سباق القطب الكهربائي.",
        "zh": "在熔盐中，只有阳离子和阴离子竞争；在水溶液中，水的H+和OH-离子也参与电极竞赛。",
        "ku": "Di xwêya şilandî de, tenê kation û anyon hevrikiyê dikin; Di çareseriya avî de îyonên H+ û OH- yên avê jî beşdarî pêşbirka elektrodê dibin."
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
        "ar": "أنود نشط (مثل Cu)",
        "zh": "活性阳极（如 Cu）",
        "ku": "Anoda Aktîf (mînak Cu)"
      },
      "conceptB": {
        "tr": "İnert Elektrot (Pt, grafit)",
        "en": "Inert Electrode (Pt, graphite)",
        "de": "Inerte Elektrode (Pt, Graphit)",
        "fr": "Électrode inerte (Pt, graphite)",
        "ru": "Инертный электрод (Pt, графит)",
        "ar": "قطب خامل (Pt، الجرافيت)",
        "zh": "惰性电极（Pt、石墨）",
        "ku": "Elektroda Bêbandor (Pt, grafît)"
      },
      "distinction": {
        "tr": "Aktif anot elektrolizde kendisi yükseltgenerek çözeltiye geçer (örn. bakır arıtımında Cu anot); inert elektrot tepkimeye girmez, yalnızca elektron alışverişine yüzey sağlar.",
        "en": "An active anode is itself oxidized and dissolves during electrolysis (e.g., the Cu anode in copper refining); an inert electrode does not react and only provides a surface for electron transfer.",
        "de": "Eine aktive Anode wird bei der Elektrolyse selbst oxidiert und geht in Lösung (z. B. die Cu-Anode bei der Kupferraffination); eine inerte Elektrode reagiert nicht und bietet nur die Oberfläche für den Elektronenaustausch.",
        "fr": "Une anode active s'oxyde elle-même et se dissout pendant l'électrolyse (par ex. l'anode de Cu lors du raffinage du cuivre) ; une électrode inerte ne réagit pas et fournit seulement une surface pour l'échange d'électrons.",
        "ru": "Активный анод при электролизе сам окисляется и переходит в раствор (например, медный анод при рафинировании меди); инертный электрод не вступает в реакцию и лишь служит поверхностью для обмена электронами.",
        "ar": "الأنود النشط يتأكسد هو نفسه ويذوب أثناء التحليل الكهربائي (مثل أنود النحاس في تنقية النحاس)؛ أما القطب الخامل فلا يتفاعل ويوفر سطحًا لانتقال الإلكترونات فقط.",
        "zh": "活性阳极在电解中自身被氧化而溶解（如精炼铜时的粗铜阳极）；惰性电极不参与反应，只提供电子转移的表面。",
        "ku": "Anoda aktîf di elektrolîzê de bi xwe oksîd dibe û derbasî çareseriyê dibe (mînak anoda Cu di paqijkirina sifir de); elektroda bêbandor beşdarî reaksiyonê nabe, tenê ji bo guhertina elektronan rûyekê peyda dike."
      }
    },
    {
      "id": "u22-c05",
      "conceptA": {
        "tr": "Faraday Sabiti (96500 C)",
        "en": "Faraday Constant (96500 C)",
        "de": "Faraday-Konstante (96500 C)",
        "fr": "Constante de Faraday (96500 C)",
        "ru": "Постоянная Фарадея (96500 Кл)",
        "ar": "ثابت فاراداي (96500 C)",
        "zh": "法拉第常数 (96500 C)",
        "ku": "Sabîta Faraday (96500 C)"
      },
      "conceptB": {
        "tr": "Elektrik Yükü (Q = I.t)",
        "en": "Electric Charge (Q = I.t)",
        "de": "Elektrische Ladung (Q = I.t)",
        "fr": "Charge électrique (Q = I.t)",
        "ru": "Электрический заряд (Q = I.t)",
        "ar": "الشحنة الكهربائية (Q = I.t)",
        "zh": "电荷 (Q = I.t)",
        "ku": "Barkirina Elektrîkê (Q = I.t)"
      },
      "distinction": {
        "tr": "1 mol elektronun yükü 96500 Coulomb'dur; devreden geçen yük akım şiddeti ile sürenin çarpımıdır.",
        "en": "The charge of 1 mol of electrons is 96500 coulombs; the charge passing through the circuit is the product of current and time.",
        "de": "Die Ladung von 1 mol Elektronen beträgt 96500 Coulomb; die durch den Stromkreis geflossene Ladung ist das Produkt aus Stromstärke und Zeit.",
        "fr": "La charge d'une mole d'électrons vaut 96500 coulombs ; la charge qui traverse le circuit est le produit de l'intensité par la durée.",
        "ru": "Заряд 1 моль электронов равен 96500 Кл; заряд, прошедший через цепь, равен произведению силы тока на время.",
        "ar": "شحنة 1 مول من الإلكترونات تساوي 96500 كولوم؛ والشحنة المارة في الدائرة تساوي حاصل ضرب شدة التيار في الزمن.",
        "zh": "1 mol 电子所带电量为 96500 库仑；通过电路的电量等于电流强度与时间的乘积。",
        "ku": "Barê 1 mol elektronan 96500 Coulomb e; barê ku di çerxê re derbas dibe hilberîna xurtiya herikînê û demê ye."
      }
    },
    {
      "id": "u22-c06",
      "conceptA": {
        "tr": "Kurban Elektrot",
        "en": "Sacrificial Electrode",
        "de": "Opferelektrode",
        "fr": "Électrode sacrificielle",
        "ru": "Жертвенный электрод",
        "ar": "القطب المضحّي",
        "zh": "牺牲电极",
        "ku": "Elektroda Qurbanê"
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
        "tr": "Kurban elektrot korunacak metalden daha aktiftir ve kendini feda eder; kaplama metalinde istenen metal katotta elektrokaplanır.",
        "en": "The sacrificial electrode is more active than the metal to be protected and sacrifices itself; The desired metal in the coating metal is electroplated at the cathode.",
        "de": "Die Opferelektrode ist aktiver als das zu schützende Metall und opfert sich selbst; Das gewünschte Metall im Beschichtungsmetall wird an der Kathode galvanisiert.",
        "fr": "L'électrode sacrificielle est plus active que le métal à protéger et se sacrifie ; Le métal souhaité dans le métal de revêtement est déposé électrolytiquement à la cathode.",
        "ru": "Жертвенный электрод более активен, чем защищаемый металл, и жертвует собой; Желаемый металл в металле покрытия наносится гальваническим способом на катоде.",
        "ar": "القطب المضحي أكثر نشاطا من المعدن المراد حمايته ويضحي بنفسه؛ يتم طلاء المعدن المرغوب في طلاء المعدن بالكهرباء عند الكاثود.",
        "zh": "牺牲电极比被保护金属活性更高，牺牲自身；涂层金属中所需的金属在阴极电镀。",
        "ku": "Elektroda qurbanê ji metala ku tê parastin çalaktir e û xwe feda dike; di pêçana metalî de metala xwestî li katodê bi elektrolîzê tê pêçandin."
      }
    },
    {
      "id": "u22-c07",
      "conceptA": {
        "tr": "Korozyon",
        "en": "corrosion",
        "de": "Korrosion",
        "fr": "corrosion",
        "ru": "коррозия",
        "ar": "التآكل",
        "zh": "腐蚀",
        "ku": "korozyon"
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
        "ru": "Коррозия — общее понятие для разрушения любого металла при взаимодействии с окружающей средой; ржавление — образование Fe2O3.nH2O из железа под действием кислорода и влаги.",
        "ar": "التآكل مصطلح عام يصف تلف أي فلز بتفاعله مع محيطه؛ أما الصدأ فهو تكوّن Fe2O3.nH2O من الحديد بوجود الأكسجين والرطوبة.",
        "zh": "腐蚀是指任何金属与环境发生反应而损耗的总称；生锈是铁与氧气和水分作用生成 Fe2O3.nH2O 的过程。",
        "ku": "Korozyon têgeheke giştî ye ku xirabûna her metalekê bi reaksiyona bi derdorê re vedibêje; zengarbûn çêbûna Fe2O3.nH2O ji hesin bi oksîjen û şilbûnê ye."
      }
    },
    {
      "id": "u22-c08",
      "conceptA": {
        "tr": "Elektrostatik Kaplama",
        "en": "Electrostatic Coating",
        "de": "Elektrostatische Beschichtung",
        "fr": "Revêtement électrostatique",
        "ru": "Электростатическое покрытие",
        "ar": "الطلاء الكهروستاتيكي",
        "zh": "静电涂层",
        "ku": "Pêçana Elektrostatîk"
      },
      "conceptB": {
        "tr": "Galvanizleme",
        "en": "Galvanizing",
        "de": "Feuerverzinken",
        "fr": "Galvanisation",
        "ru": "Горячее цинкование",
        "ar": "الجلفنة",
        "zh": "热镀锌",
        "ku": "Galvanîzekirin"
      },
      "distinction": {
        "tr": "Elektrostatik kaplama toz boya yapışmasıdır; galvanizleme demirin erimiş çinko (Zn) ile kaplanarak korozyondan korunmasıdır.",
        "en": "Electrostatic coating is powder coating adhesion; Galvanization is the protection of iron from corrosion by coating it with molten zinc (Zn).",
        "de": "Elektrostatische Beschichtung ist das Anhaften von Pulverlack; beim Feuerverzinken wird Eisen durch Überziehen mit geschmolzenem Zink (Zn) vor Korrosion geschützt.",
        "fr": "Le revêtement électrostatique est une adhérence de revêtement en poudre ; La galvanisation est la protection du fer contre la corrosion en le recouvrant de zinc fondu (Zn).",
        "ru": "Электростатическое покрытие — это нанесение порошковой краски; горячее цинкование — защита железа от коррозии покрытием расплавленным цинком (Zn).",
        "ar": "الطلاء الكهروستاتيكي هو التصاق مسحوق الطلاء. الجلفنة هي حماية الحديد من التآكل عن طريق طلاءه بالزنك المنصهر (Zn).",
        "zh": "静电涂装是使粉末涂料附着；热镀锌是在铁表面镀上熔融锌（Zn）以防止腐蚀。",
        "ku": "Pêçana elektrostatîk zeliqandina boyaxa tozî ye; galvanîzekirin parastina hesin ji korozyonê ye bi pêçandina wê bi zinka helandî (Zn)."
      }
    }
  ],
  "sequences": [
    {
      "id": "u22-s01",
      "title": {
        "tr": "Elektroliz Kütle Hesap Adımları",
        "en": "Electrolysis Mass Calculation Steps",
        "de": "Schritte zur Berechnung der Elektrolysemasse",
        "fr": "Étapes de calcul de la masse d'électrolyse",
        "ru": "Этапы расчета массы электролиза",
        "ar": "خطوات حساب كتلة التحليل الكهربائي",
        "zh": "电解质量计算步骤",
        "ku": "Gavên Hesabkirina Girseyê di Elektrolîzê de"
      },
      "steps": [
        {
          "tr": "Q = I * t ile toplam yükü (Coulomb) hesapla",
          "en": "Calculate total charge (Coulomb) with Q = I * t",
          "de": "Berechnen Sie die Gesamtladung (Coulomb) mit Q = I * t",
          "fr": "Calculer la charge totale (Coulomb) avec Q = I * t",
          "ru": "Рассчитайте общий заряд (Кулон) при Q = I * t",
          "ar": "احسب الشحنة الكلية (كولوم) باستخدام Q = I * t",
          "zh": "计算总电荷（库仑），Q = I * t",
          "ku": "Bi Q = I * t barê giştî (Coulomb) hesab bike"
        },
        {
          "tr": "Mol elektronu bul: n_e = Q / 96500",
          "en": "Find the moles of electrons: n_e = Q / 96500",
          "de": "Stoffmenge der Elektronen bestimmen: n_e = Q / 96500",
          "fr": "Calculer la quantité d'électrons (en mol) : n_e = Q / 96500",
          "ru": "Найдите моль электрона: n_e = Q/96500",
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
          "ku": "Nîv-reaksiyona elektrodê binivîse û bi katsayiya elektronan molên maddeyê ji molên elektronan bibîne"
        },
        {
          "tr": "m = n * MA ile toplanan katı kütlesini bul",
          "en": "Find mass of solid collected with m = n * MA",
          "de": "Finden Sie die Feststoffmasse, die mit m = n * MA gesammelt wurde",
          "fr": "Trouver la masse de solide collecté avec m = n * MA",
          "ru": "Найдите массу твердого вещества, собранного при m = n * MA.",
          "ar": "أوجد كتلة المادة الصلبة المجمعة باستخدام m = n * MA",
          "zh": "通过 m = n * MA 计算收集到的固体的质量",
          "ku": "Girseya qalind a ku bi m = n * MA hatî komkirin bibînin"
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
        "ku": "Paqijkirina Sifir bi Elektrolîzê"
      },
      "steps": [
        {
          "tr": "Saf olmayan (ham) bakır anoda, ince saf bakır levha katoda bağlanır",
          "en": "Impure (crude) copper is connected as the anode and a thin sheet of pure copper as the cathode",
          "de": "Unreines Rohkupfer wird als Anode, ein dünnes Reinkupferblech als Kathode geschaltet",
          "fr": "Le cuivre impur (brut) est relié comme anode et une fine plaque de cuivre pur comme cathode",
          "ru": "Неочищенную (черновую) медь подключают как анод, а тонкую пластину чистой меди — как катод",
          "ar": "يوصل النحاس غير النقي (الخام) بوصفه أنودًا وصفيحة رقيقة من النحاس النقي بوصفها كاثودًا",
          "zh": "粗铜作阳极，薄纯铜片作阴极",
          "ku": "Sifirê ne-paqij (xav) wek anod, pelekî zirav ê sifirê paqij jî wek katod tê girêdan"
        },
        {
          "tr": "Elektrotlar CuSO4 çözeltisine daldırılır ve doğru akım uygulanır",
          "en": "The electrodes are dipped into CuSO4 solution and direct current is applied",
          "de": "Die Elektroden werden in CuSO4-Lösung getaucht und Gleichstrom angelegt",
          "fr": "Les électrodes sont plongées dans une solution de CuSO4 et un courant continu est appliqué",
          "ru": "Электроды погружают в раствор CuSO4 и пропускают постоянный ток",
          "ar": "يُغمس القطبان في محلول CuSO4 ويُمرر تيار مستمر",
          "zh": "将电极插入 CuSO4 溶液中并通入直流电",
          "ku": "Elektrod di çareseriya CuSO4 de têne danîn û herikîna rasterast tê dayîn"
        },
        {
          "tr": "Anottaki bakır yükseltgenerek Cu2+ iyonları halinde çözeltiye geçer",
          "en": "Copper at the anode is oxidized and passes into solution as Cu2+ ions",
          "de": "Das Kupfer der Anode wird oxidiert und geht als Cu2+-Ionen in Lösung",
          "fr": "Le cuivre de l'anode s'oxyde et passe en solution sous forme d'ions Cu2+",
          "ru": "Медь анода окисляется и переходит в раствор в виде ионов Cu2+",
          "ar": "يتأكسد نحاس الأنود وينتقل إلى المحلول على شكل أيونات Cu2+",
          "zh": "阳极的铜被氧化，以 Cu2+ 离子形式进入溶液",
          "ku": "Sifirê li anodê oksîd dibe û wek îyonên Cu2+ derbasî çareseriyê dibe"
        },
        {
          "tr": "Cu2+ iyonları katotta indirgenerek saf bakır olarak birikir; Ag ve Au gibi pasif safsızlıklar anot çamurunda toplanır",
          "en": "Cu2+ ions are reduced at the cathode and deposit as pure copper; less active impurities such as Ag and Au collect in the anode mud",
          "de": "Cu2+-Ionen werden an der Kathode reduziert und scheiden sich als Reinkupfer ab; edlere Verunreinigungen wie Ag und Au sammeln sich im Anodenschlamm",
          "fr": "Les ions Cu2+ sont réduits à la cathode et s'y déposent en cuivre pur ; les impuretés moins actives comme Ag et Au se rassemblent dans les boues anodiques",
          "ru": "Ионы Cu2+ восстанавливаются на катоде и осаждаются в виде чистой меди; менее активные примеси (Ag, Au) собираются в анодном шламе",
          "ar": "تُختزل أيونات Cu2+ عند الكاثود وتترسب نحاسًا نقيًا، وتتجمع الشوائب الأقل نشاطًا مثل Ag و Au في طين الأنود",
          "zh": "Cu2+ 离子在阴极被还原并沉积为纯铜；Ag、Au 等不活泼杂质沉积在阳极泥中",
          "ku": "Îyonên Cu2+ li katodê kêm dibin û wek sifirê paqij kom dibin; nepaqijiyên pasîf ên wek Ag û Au di heriya anodê de kom dibin"
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
        "ru": "Электролиз воды в вольтаметре Хоффмана",
        "ar": "التحليل الكهربائي للمياه في هوفمان الفولتميتر",
        "zh": "霍夫曼伏特计中的水电解",
        "ku": "Elektroliza Avê di Voltametera Hoffman de"
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
          "ru": "Раствор заливают в вольтаметр, а электроды подключают к источнику постоянного тока",
          "ar": "يُملأ الفولتامتر بالمحلول ويوصل القطبان بمصدر تيار مستمر",
          "zh": "将溶液注入霍夫曼电解器，并将电极连接到直流电源",
          "ku": "Çareserî tê kirin nav voltametreyê û elektrod bi çavkaniya herikîna rasterast ve têne girêdan"
        },
        {
          "tr": "Katotta su indirgenerek H2, anotta su yükseltgenerek O2 gazı oluşur",
          "en": "Water is reduced to H2 at the cathode and oxidized to O2 at the anode",
          "de": "An der Kathode wird Wasser zu H2 reduziert, an der Anode zu O2 oxidiert",
          "fr": "L'eau est réduite en H2 à la cathode et oxydée en O2 à l'anode",
          "ru": "На катоде вода восстанавливается до H2, на аноде окисляется до O2",
          "ar": "يُختزل الماء إلى H2 عند الكاثود ويتأكسد إلى O2 عند الأنود",
          "zh": "水在阴极被还原生成 H2，在阳极被氧化生成 O2",
          "ku": "Li katodê av kêm dibe û H2, li anodê av oksîd dibe û O2 çêdibe"
        },
        {
          "tr": "Toplanan gaz hacimleri ölçülür: katottaki H2 hacmi anottaki O2 hacminin iki katıdır",
          "en": "The collected gas volumes are measured: the volume of H2 at the cathode is twice the volume of O2 at the anode",
          "de": "Die gesammelten Gasvolumina werden gemessen: Das H2-Volumen an der Kathode ist doppelt so groß wie das O2-Volumen an der Anode",
          "fr": "On mesure les volumes de gaz recueillis : le volume de H2 à la cathode est le double du volume de O2 à l'anode",
          "ru": "Измеряют объёмы собранных газов: объём H2 на катоде вдвое больше объёма O2 на аноде",
          "ar": "تُقاس حجوم الغازات المتجمعة: حجم H2 عند الكاثود ضعف حجم O2 عند الأنود",
          "zh": "测量收集到的气体体积：阴极 H2 的体积是阳极 O2 体积的两倍",
          "ku": "Qebareyên gazên komkirî têne pîvan: qebareya H2 ya li katodê du qatê qebareya O2 ya li anodê ye"
        }
      ]
    },
    {
      "id": "u22-s04",
      "title": {
        "tr": "Katodik Koruma ve Kurban Elektrot",
        "en": "Cathodic Protection and Sacrificial Electrode",
        "de": "Kathodischer Schutz und Opferelektrode",
        "fr": "Protection Cathodique et Électrode Sacrificielle",
        "ru": "Катодная защита и жертвенный электрод",
        "ar": "الحماية الكاثودية والقطب القرباني",
        "zh": "阴极保护和牺牲电极",
        "ku": "Parastina Katodîk û Elektroda Qurbanê"
      },
      "steps": [
        {
          "tr": "Korunmak istenen demir boru hattı toprağa gömülür",
          "en": "The iron pipeline to be protected is buried in the ground",
          "de": "Die zu schützende Eisenrohrleitung ist im Boden vergraben",
          "fr": "Le pipeline de fer à protéger est enfoui dans le sol",
          "ru": "Железный трубопровод, подлежащий защите, закопан в землю.",
          "ar": "يتم دفن خط الأنابيب الحديدي المراد حمايته في الأرض",
          "zh": "待保护的铁质管道埋于地下",
          "ku": "Xeta boriya hesin a ku were parastin di bin axê de ye"
        },
        {
          "tr": "Demirden daha aktif bir metal (Zn veya Mg) kurban elektrot seçilir",
          "en": "A more active metal (Zn or Mg) than iron is chosen as the sacrificial electrode",
          "de": "Als Opferelektrode wird ein aktiveres Metall (Zn oder Mg) als Eisen gewählt",
          "fr": "Un métal plus actif (Zn ou Mg) que le fer est choisi comme électrode sacrificielle",
          "ru": "В качестве жертвенного электрода выбран более активный металл (Zn или Mg), чем железо.",
          "ar": "يتم اختيار معدن أكثر نشاطًا (Zn أو Mg) من الحديد ليكون القطب الكهربائي المضحي",
          "zh": "选择比铁更活泼的金属（锌或镁）作为牺牲电极",
          "ku": "Metalek çalaktir (Zn an Mg) ji hesin wekî elektrodê qurban tê hilbijartin"
        },
        {
          "tr": "Kurban elektrot bir iletken telle demir hatta bağlanır",
          "en": "The sacrificial electrode is connected to the iron line with a conductive wire",
          "de": "Die Opferelektrode ist über einen leitenden Draht mit der Eisenleitung verbunden",
          "fr": "L'électrode sacrificielle est reliée à la ligne de fer par un fil conducteur",
          "ru": "Жертвенный электрод соединен с железной линией проводящим проводом.",
          "ar": "يتم توصيل القطب المضحي بالخط الحديدي بسلك موصل",
          "zh": "牺牲电极用导线与铁线连接",
          "ku": "Elektroda qurbanê bi têlekî veguhêz bi xeta hesinî ve tê girêdan"
        },
        {
          "tr": "Kurban elektrot kendisi yükseltgenerek demirin korozyonunu önler",
          "en": "The sacrificial electrode itself is oxidized, preventing corrosion of the iron",
          "de": "Die Opferelektrode selbst ist oxidiert, wodurch eine Korrosion des Eisens verhindert wird",
          "fr": "L'électrode sacrificielle elle-même est oxydée, empêchant ainsi la corrosion du fer",
          "ru": "Сам жертвенный электрод окисляется, предотвращая коррозию железа.",
          "ar": "يتأكسد القطب المضحي نفسه، مما يمنع تآكل الحديد",
          "zh": "牺牲电极本身被氧化，防止铁腐蚀",
          "ku": "Elektroda qurbanê bixwe tê oksîdan, pêşî li korozyona hesin digire"
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
        "ar": "عند التحليل الكهربائي لمصهور MgCl2 بتيار شدته 9.65 A لمدة 1000 ثانية، كم غرامًا من Mg يترسب عند الكاثود؟ (Mg = 24 g/mol؛ 1 F = 96500 C)",
        "zh": "用 9.65 A 的电流电解熔融 MgCl2 1000 秒，阴极上析出多少克 Mg？（Mg = 24 g/mol；1 F = 96500 C）",
        "ku": "Dema MgCl2 ya helandî 1000 çirkeyan bi herikîna 9,65 A tê elektrolîzkirin, li katodê çend gram Mg kom dibe? (Mg = 24 g/mol; 1 F = 96500 C)"
      },
      "options": [
        {
          "tr": "1,2 g",
          "en": "1.2g",
          "de": "1,2g",
          "fr": "1,2g",
          "ru": "1,2 г",
          "ar": "1.2 جرام",
          "zh": "1.2克",
          "ku": "1.2 g"
        },
        {
          "tr": "2,4 g",
          "en": "2.4g",
          "de": "2,4g",
          "fr": "2,4 g",
          "ru": "2,4 г",
          "ar": "2.4 جرام",
          "zh": "2.4克",
          "ku": "2.4 g"
        },
        {
          "tr": "0,6 g",
          "en": "0.6g",
          "de": "0,6g",
          "fr": "0,6g",
          "ru": "0,6 г",
          "ar": "0.6 جرام",
          "zh": "0.6克",
          "ku": "0.6 g"
        },
        {
          "tr": "4,8 g",
          "en": "4.8g",
          "de": "4,8g",
          "fr": "4,8g",
          "ru": "4,8 г",
          "ar": "4.8 جرام",
          "zh": "4.8克",
          "ku": "4.8 g"
        },
        {
          "tr": "12,0 g",
          "en": "12.0g",
          "de": "12,0g",
          "fr": "12,0g",
          "ru": "12,0 г",
          "ar": "12.0 جرام",
          "zh": "12.0克",
          "ku": "12,0 g"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Q = I * t = 9,65 * 1000 = 9650 C. n_e = 9650 / 96500 = 0,1 mol elektron. Mg2+ + 2e- → Mg → n(Mg) = 0,1 / 2 = 0,05 mol. m = 0,05 * 24 = 1,2 gram.",
        "en": "Q = I * t = 9.65 * 1000 = 9650 C. n_e = 9650 / 96500 = 0.1 mol of electrons. Mg2+ + 2e- → Mg → n(Mg) = 0.1 / 2 = 0.05 mol. m = 0.05 * 24 = 1.2 grams.",
        "de": "Q = I * t = 9,65 * 1000 = 9650 C. n_e = 9650 / 96500 = 0,1 Mol Elektronen. Mg2+ + 2e- → Mg → n(Mg) = 0,1 / 2 = 0,05 mol. m = 0,05 * 24 = 1,2 Gramm.",
        "fr": "Q = I * t = 9,65 * 1000 = 9650 C. n_e = 9650 / 96500 = 0,1 mole d'électrons. Mg2+ + 2e- → Mg → n(Mg) = 0,1 / 2 = 0,05 mol. m = 0,05 * 24 = 1,2 grammes.",
        "ru": "Q = I * t = 9,65 * 1000 = 9650 Кл. n_e = 9650/96500 = 0,1 моль электронов. Mg2+ + 2e- → Mg → n(Mg) = 0,1/2 = 0,05 моль. м = 0,05*24 = 1,2 грамма.",
        "ar": "Q = I * t = 9.65 * 1000 = 9650 C. n_e = 9650 / 96500 = 0.1 مول من الإلكترونات. Mg2+ + 2e- → Mg → n(Mg) = 0.1 / 2 = 0.05 مول. م = 0.05 * 24 = 1.2 جرام.",
        "zh": "Q = I * t = 9.65 * 1000 = 9650 C。n_e = 9650 / 96500 = 0.1 mol 电子。 Mg2+ + 2e- → Mg → n(Mg) = 0.1 / 2 = 0.05 摩尔。 m = 0.05 * 24 = 1.2 克。",
        "ku": "Q = I * t = 9,65 * 1000 = 9650 C. n_e = 9650 / 96500 = 0,1 mol elektronan. Mg2+ + 2e- → Mg → n(Mg) = 0,1 / 2 = 0,05 mol. m = 0,05 * 24 = 1,2 gram."
      }
    },
    {
      "id": "u22-twin02",
      "stem": {
        "tr": "Hoffman voltametresi ile suyun elektrolizinde anotta 15 cm3 O2 gazı toplandığı anda katotta kaç cm3 H2 gazı toplanır?",
        "en": "In the electrolysis of water with Hoffman voltammeter, how many cm3 of H2 gas is collected at the cathode when 15 cm3 of O2 gas is collected at the anode?",
        "de": "Wie viele cm3 H2-Gas werden bei der Elektrolyse von Wasser mit einem Hoffman-Voltammeter an der Kathode gesammelt, wenn 15 cm3 O2-Gas an der Anode gesammelt werden?",
        "fr": "Lors de l'électrolyse de l'eau avec le voltamètre Hoffman, combien de cm3 de gaz H2 sont collectés à la cathode lorsque 15 cm3 de gaz O2 sont collectés à l'anode ?",
        "ru": "Сколько см3 газа H2 собирается на катоде при электролизе воды с помощью вольтамперметра Хоффмана, когда на аноде собирается 15 см3 газа O2?",
        "ar": "في التحليل الكهربي للماء باستخدام مقياس جهد هوفمان، ما عدد cm3 من غاز H2 الذي يتم جمعه عند الكاثود عندما يتم تجميع 15 cm3 من غاز O2 عند الأنود؟",
        "zh": "用霍夫曼伏安计电解水时，阳极收集15cm3的O2，阴极收集多少cm3的H2气？",
        "ku": "Di elektrolîza avê ya bi voltametera Hoffman de, dema ku li anodê 15 cm3 gaza O2 were berhevkirin çend cm3 gaza H2 li katodê tê berhevkirin?"
      },
      "options": [
        {
          "tr": "30 cm3",
          "en": "30 cm3",
          "de": "30 cm3",
          "fr": "30 cm3",
          "ru": "30 см3",
          "ar": "30 سم3",
          "zh": "30立方厘米",
          "ku": "30 cm3"
        },
        {
          "tr": "15 cm3",
          "en": "15 cm3",
          "de": "15 cm3",
          "fr": "15 cm3",
          "ru": "15 см3",
          "ar": "15 سم3",
          "zh": "15立方厘米",
          "ku": "15 cm3"
        },
        {
          "tr": "7,5 cm3",
          "en": "7.5 cm3",
          "de": "7,5 cm3",
          "fr": "7,5 cm3",
          "ru": "7,5 см3",
          "ar": "7.5 سم3",
          "zh": "7.5立方厘米",
          "ku": "7,5 cm3"
        },
        {
          "tr": "45 cm3",
          "en": "45 cm3",
          "de": "45 cm3",
          "fr": "45 cm3",
          "ru": "45 см3",
          "ar": "45 سم3",
          "zh": "45立方厘米",
          "ku": "45 cm3"
        },
        {
          "tr": "60 cm3",
          "en": "60 cm3",
          "de": "60 cm3",
          "fr": "60 cm3",
          "ru": "60 см3",
          "ar": "60 سم3",
          "zh": "60立方厘米",
          "ku": "60 cm3"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "2 H2O → 2 H2 + O2 tepkimesine göre katottaki H2 gazı hacmi anottaki O2 gazı hacminin iki katıdır: 2 * 15 = 30 cm3.",
        "en": "According to the reaction 2 H2O → 2 H2 + O2, the volume of H2 gas at the cathode is twice the volume of O2 gas at the anode: 2 * 15 = 30 cm3.",
        "de": "Gemäß der Reaktion 2 H2O → 2 H2 + O2 ist das Volumen des H2-Gases an der Kathode doppelt so groß wie das Volumen des O2-Gases an der Anode: 2 * 15 = 30 cm3.",
        "fr": "D'après la réaction 2 H2O → 2 H2 + O2, le volume de gaz H2 à la cathode est le double du volume de gaz O2 à l'anode : 2 * 15 = 30 cm3.",
        "ru": "По реакции 2 H2O → 2 H2 + O2 объем газа H2 на катоде в два раза превышает объем газа O2 на аноде: 2*15 = 30 см3.",
        "ar": "وفقا للتفاعل 2 H2O → 2 H2 + O2، فإن حجم غاز H2 عند الكاثود هو ضعف حجم غاز O2 عند الأنود: 2 * 15 = 30 سم 3.",
        "zh": "根据反应2 H2O → 2 H2 + O2，阴极处的H2气体体积是阳极处的O2气体体积的两倍：2 * 15 = 30 cm3。",
        "ku": "Li gor reaksiyona 2 H2O → 2 H2 + O2 qebareya gaza H2 ya li katodê du qat ji qebareya gaza O2 ya li anodê ye: 2 * 15 = 30 cm3."
      }
    },
    {
      "id": "u22-twin03",
      "stem": {
        "tr": "Kimya dersinde Kimya ve Elektrik: Elektroliz ve Korozyon ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Electrochemistry: Electrolysis & Corrosion, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Elektrolyse & Korrosion: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Électrolyse & Corrosion, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Электролиз и коррозия», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"التحليل الكهربائي والتآكل\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“电解与腐蚀”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Elektrolîz û Korozyon\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Suyun elektrolizinde anotta katottan 2 kat daha fazla gaz toplanır.",
          "en": "In the electrolysis of water, twice as much gas is collected at the anode than at the cathode.",
          "de": "Bei der Elektrolyse von Wasser wird an der Anode doppelt so viel Gas gesammelt wie an der Kathode.",
          "fr": "Lors de l’électrolyse de l’eau, deux fois plus de gaz sont collectés à l’anode qu’à la cathode.",
          "ru": "При электролизе воды на аноде собирается в два раза больше газа, чем на катоде.",
          "ar": "في التحليل الكهربائي للمياه، يتم جمع ضعف كمية الغاز عند القطب الموجب مقارنة بالكاثود.",
          "zh": "在水的电解中，阳极收集的气体是阴极收集的气体的两倍。",
          "ku": "Di elektrolîza avê de li anodê du qat zêdetir gaz ji katodê tê komkirin."
        },
        {
          "tr": "Anotta yükseltgenme potansiyeli en küçük olan anyon önce çıkar.",
          "en": "The anion with the smallest oxidation potential at the anode emerges first.",
          "de": "Das Anion mit dem kleinsten Oxidationspotential an der Anode entsteht zuerst.",
          "fr": "L’anion ayant le plus petit potentiel d’oxydation à l’anode émerge en premier.",
          "ru": "Первым на аноде выходит анион с наименьшим окислительным потенциалом.",
          "ar": "يتأكسد أولًا عند الأنود الأنيون ذو جهد التأكسد الأصغر.",
          "zh": "阳极氧化电位最小的阴离子首先出现。",
          "ku": "Anyona xwedan potansiyela oksîdasyonê ya herî piçûk li anodê pêşî derdikeve holê."
        },
        {
          "tr": "1 Faraday = 1 mol elektron yükü = 96500 Coulomb'dur.",
          "en": "1 Faraday = 1 mole of electron charge = 96500 Coulombs.",
          "de": "1 Faraday = 1 Mol Elektronenladung = 96500 Coulomb.",
          "fr": "1 Faraday = 1 mole de charge électronique = 96 500 Coulombs.",
          "ru": "1 Фарадей = 1 моль заряда электрона = 96500 Кулонов.",
          "ar": "1 فاراداي = 1 مول من شحنة الإلكترون = 96500 كولوم.",
          "zh": "1 法拉第 = 1 摩尔电子电荷 = 96500 库仑。",
          "ku": "1 Faraday = 1 mol barkirina elektronê = 96500 Kulomb."
        },
        {
          "tr": "Kaplanacak eşya anota bağlanmalıdır.",
          "en": "The item to be coated must be connected to the anode.",
          "de": "Der zu beschichtende Gegenstand muss an die Anode angeschlossen werden.",
          "fr": "L'élément à revêtir doit être connecté à l'anode.",
          "ru": "Изделие, на которое будет нанесено покрытие, должно быть соединено с анодом.",
          "ar": "يجب أن يكون العنصر المراد طلاؤه متصلاً بالأنود.",
          "zh": "待涂覆的物品必须连接到阳极。",
          "ku": "Tiştê ku tê pêçandin divê bi anodê ve were girêdan."
        },
        {
          "tr": "Downs hücresi pil üretmek için kullanılır.",
          "en": "Downs cell is used to produce batteries.",
          "de": "Downs-Zellen werden zur Herstellung von Batterien verwendet.",
          "fr": "La cellule Downs est utilisée pour produire des batteries.",
          "ru": "Ячейка Даунса используется для производства аккумуляторов.",
          "ar": "تستخدم خلية داونز لإنتاج البطاريات.",
          "zh": "唐斯电池用于生产电池。",
          "ku": "Hucreya Downs ji bo hilberîna bataryayê tê bikar anîn."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"1 Faraday = 1 mol elektron yükü = 96500 Coulomb'dur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"1 Faraday = 1 mole of electron charge = 96500 Coulombs.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"1 Faraday = 1 Mol Elektronenladung = 96500 Coulomb.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"1 Faraday = 1 mole de charge électronique = 96 500 Coulombs.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «1 Фарадей = 1 моль заряда электрона = 96500 Кулонов.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"1 فاراداي = 1 مول من شحنة الإلكترون = 96500 كولوم.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“1 法拉第 = 1 摩尔电子电荷 = 96500 库仑。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"1 Faraday = 1 mol barkirina elektronê = 96500 Kulomb.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u22-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimya ve Elektrik: Elektroliz ve Korozyon konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Electrochemistry: Electrolysis & Corrosion?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Elektrolyse & Korrosion zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Électrolyse & Corrosion ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Электролиз и коррозия»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"التحليل الكهربائي والتآكل\"؟",
        "zh": "根据“电解与腐蚀”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Elektrolîz û Korozyon\" de rast e?"
      },
      "options": [
        {
          "tr": "Erimiş NaCl elektrolizinde anotta sodyum metali toplanır.",
          "en": "In the electrolysis of molten NaCl, sodium metal is collected at the anode.",
          "de": "Bei der Elektrolyse von geschmolzenem NaCl wird Natriummetall an der Anode gesammelt.",
          "fr": "Lors de l’électrolyse du NaCl fondu, le sodium métallique est collecté à l’anode.",
          "ru": "При электролизе расплавленного NaCl металлический натрий собирается на аноде.",
          "ar": "في التحليل الكهربائي لكلوريد الصوديوم المنصهر، يتم جمع معدن الصوديوم عند القطب الموجب.",
          "zh": "在电解熔融氯化钠时，金属钠被收集在阳极。",
          "ku": "Di elektrolîza NaCl ya şilandî de, metala sodyûm li anodê tê berhev kirin."
        },
        {
          "tr": "Korozyon metallerin fiziksel olarak parlatılması işlemidir.",
          "en": "Corrosion is the process of physical polishing of metals.",
          "de": "Korrosion ist der Prozess des physikalischen Polierens von Metallen.",
          "fr": "La corrosion est le processus de polissage physique des métaux.",
          "ru": "Коррозия – это процесс физической полировки металлов.",
          "ar": "التآكل هو عملية التلميع الفيزيائي للمعادن.",
          "zh": "腐蚀是金属的物理抛光过程。",
          "ku": "Korozyon pêvajoya paqijkirina fizîkî ya metalan e."
        },
        {
          "tr": "Suyun elektrolizi için saf suya şeker eklenir.",
          "en": "For electrolysis of water, sugar is added to pure water.",
          "de": "Bei der Elektrolyse von Wasser wird reinem Wasser Zucker zugesetzt.",
          "fr": "Pour l'électrolyse de l'eau, du sucre est ajouté à l'eau pure.",
          "ru": "Для электролиза воды в чистую воду добавляют сахар.",
          "ar": "للتحليل الكهربائي للماء، يضاف السكر إلى الماء النقي.",
          "zh": "为了电解水，将糖添加到纯水中。",
          "ku": "Ji bo elektrolîza avê, şekir li ava paqij tê zêdekirin."
        },
        {
          "tr": "Elektrotlarda toplanan madde kütlesi formülü: m = (Q * MA) / (96500 * z)'dir (z: tesir değerliği / alınan-verilen elektron sayısı).",
          "en": "The formula for the mass deposited at an electrode is m = (Q * MA) / (96500 * z) (z: valence factor, i.e. the number of electrons gained or lost).",
          "de": "Die an einer Elektrode abgeschiedene Masse beträgt m = (Q * MA) / (96500 * z) (z: Wertigkeit, d. h. Zahl der aufgenommenen bzw. abgegebenen Elektronen).",
          "fr": "La masse déposée à une électrode est m = (Q * MA) / (96500 * z) (z : valence, c'est-à-dire le nombre d'électrons captés ou cédés).",
          "ru": "Масса вещества, выделившегося на электроде: m = (Q * MA) / (96500 * z) (z — валентность, т. е. число принятых или отданных электронов).",
          "ar": "كتلة المادة المترسبة عند القطب: m = (Q * MA) / (96500 * z) (z: التكافؤ، أي عدد الإلكترونات المكتسبة أو المفقودة).",
          "zh": "电极上析出物质的质量公式为 m = (Q * MA) / (96500 * z)（z：化合价，即得失电子数）。",
          "ku": "Formula girseya maddeya ku li elektrodê kom dibe: m = (Q * MA) / (96500 * z) (z: valans, ango hejmara elektronên hatine wergirtin an dayîn)."
        },
        {
          "tr": "Kurban elektrot demirin üzerine altın kaplama yapmaktır.",
          "en": "The sacrificial electrode is plating gold on iron.",
          "de": "Die Opferelektrode plattiert Eisen mit Gold.",
          "fr": "L'électrode sacrificielle consiste à déposer de l'or sur du fer.",
          "ru": "Жертвенный электрод наносит золото на железо.",
          "ar": "القطب المضحي هو طلاء الذهب على الحديد.",
          "zh": "牺牲电极是在铁上镀金。",
          "ku": "Elektroda qurbanê zêr li ser hesin dike."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Elektrotlarda toplanan madde kütlesi formülü: m = (Q * MA) / (96500 * z)'dir (z: tesir değerliği / alınan-verilen elektron sayısı).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The formula for the mass deposited at an electrode is m = (Q * MA) / (96500 * z) (z: valence factor, i.e. the number of electrons gained or lost).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die an einer Elektrode abgeschiedene Masse beträgt m = (Q * MA) / (96500 * z) (z: Wertigkeit, d. h. Zahl der aufgenommenen bzw. abgegebenen Elektronen).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La masse déposée à une électrode est m = (Q * MA) / (96500 * z) (z : valence, c'est-à-dire le nombre d'électrons captés ou cédés).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Масса вещества, выделившегося на электроде: m = (Q * MA) / (96500 * z) (z — валентность, т. е. число принятых или отданных электронов).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"كتلة المادة المترسبة عند القطب: m = (Q * MA) / (96500 * z) (z: التكافؤ، أي عدد الإلكترونات المكتسبة أو المفقودة).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“电极上析出物质的质量公式为 m = (Q * MA) / (96500 * z)（z：化合价，即得失电子数）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Formula girseya maddeya ku li elektrodê kom dibe: m = (Q * MA) / (96500 * z) (z: valans, ango hejmara elektronên hatine wergirtin an dayîn).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u22-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimya ve Elektrik: Elektroliz ve Korozyon sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Electrochemistry: Electrolysis & Corrosion, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Elektrolyse & Korrosion: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Électrolyse & Corrosion, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Электролиз и коррозия», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"التحليل الكهربائي والتآكل\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“电解与腐蚀”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Elektrolîz û Korozyon\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Sulu çözeltide katotta aktifliği en büyük olan Na+ öncelikle indirgenir.",
          "en": "In aqueous solution, Na+, which is the most active at the cathode, is reduced first.",
          "de": "In wässriger Lösung wird zunächst Na+ reduziert, das an der Kathode am aktivsten ist.",
          "fr": "En solution aqueuse, Na+, qui est le plus actif à la cathode, est réduit en premier.",
          "ru": "В водном растворе в первую очередь восстанавливается Na+, наиболее активный на катоде.",
          "ar": "في المحلول المائي، يتم اختزال Na+، وهو الأكثر نشاطًا عند الكاثود، أولاً.",
          "zh": "在水溶液中，Na+ 在阴极最活跃，首先被还原。",
          "ku": "Di çareseriya avî de, Na+, ku li katodê herî çalak e, pêşî kêm dibe."
        },
        {
          "tr": "Kurban elektrot olarak korunacak metalden daha pasif bir metal seçilmelidir.",
          "en": "A more passive metal than the metal to be protected should be chosen as the sacrificial electrode.",
          "de": "Als Opferelektrode sollte ein passiveres Metall als das zu schützende Metall gewählt werden.",
          "fr": "Un métal plus passif que le métal à protéger doit être choisi comme électrode sacrificielle.",
          "ru": "В качестве жертвующего электрода следует выбрать более пассивный металл, чем защищаемый металл.",
          "ar": "يجب اختيار فلز أقل نشاطًا من الفلز المراد حمايته ليكون القطب المضحّي.",
          "zh": "应选择比被保护金属更惰性的金属作为牺牲电极。",
          "ku": "Pêdivî ye ku ji metalê ku were parastin metalek pasîftir wekî elektrodê qurban were hilbijartin."
        },
        {
          "tr": "2 Faraday akım geçtiğinde 2 mol Ca metali toplanır.",
          "en": "When 2 Faraday current passes, 2 moles of Ca metal are collected.",
          "de": "Wenn ein Strom von 2 Faraday fließt, werden 2 Mol Ca-Metall gesammelt.",
          "fr": "Lorsque 2 faradays traversent la cellule, 2 moles de calcium métallique sont recueillies.",
          "ru": "При прохождении 2 фарадеев электричества выделяется 2 моль металлического Ca.",
          "ar": "عند مرور 2 فاراداي يترسب 2 مول من فلز Ca.",
          "zh": "当通过 2 法拉第电流时，会收集 2 摩尔的 Ca 金属。",
          "ku": "Dema 2 Faraday bar derbas dibe, 2 mol metala Ca kom dibe."
        },
        {
          "tr": "Elektroliz kendiliğinden elektrik üreten bir galvanik sistemdir.",
          "en": "Electrolysis is a galvanic system that spontaneously produces electricity.",
          "de": "Elektrolyse ist ein galvanisches System, das spontan Strom erzeugt.",
          "fr": "L'électrolyse est un système galvanique qui produit spontanément de l'électricité.",
          "ru": "Электролиз – это гальваническая система, которая самопроизвольно производит электричество.",
          "ar": "التحليل الكهربائي هو نظام كلفاني ينتج الكهرباء تلقائيًا.",
          "zh": "电解是一种能自发产生电能的原电池体系。",
          "ku": "Elektrolîz pergalek galvanîk e ku bi xweber elektrîkê hildiberîne."
        },
        {
          "tr": "Faraday 2. Kanunu: Seri bağlı elektroliz kaplarından geçen elektrik yükü eşittir ve toplanan maddelerin eşdeğer gram sayıları eşittir.",
          "en": "Faraday's 2nd Law: The electrical charge passing through serially connected electrolysis vessels is equal and the equivalent gram numbers of the collected substances are equal.",
          "de": "Faradaysches 2. Gesetz: Die elektrische Ladung, die durch in Reihe geschaltete Elektrolysegefäße fließt, ist gleich und die äquivalenten Grammzahlen der gesammelten Substanzen sind gleich.",
          "fr": "Deuxième loi de Faraday : La charge électrique passant dans les cuves d'électrolyse connectées en série est égale et les nombres de grammes équivalents des substances collectées sont égaux.",
          "ru": "Второй закон Фарадея: Электрический заряд, проходящий через последовательно соединенные электролизные сосуды, одинаков, и эквивалентное количество граммов собранных веществ одинаково.",
          "ar": "قانون فاراداي الثاني: الشحنات الكهربائية التي تمر عبر أوعية التحليل الكهربائي المتصلة تسلسلياً متساوية، كما أن أعداد الغرامات المكافئة للمواد المجمعة متساوية.",
          "zh": "法拉第第二定律：通过串联电解容器的电荷相等，收集到的物质的当量克数也相等。",
          "ku": "Zagona 2yemîn a Faraday: Bara elektrîkê ya ku di firaxên elektrolîzê yên bi rêz ve girêdayî re derbas dibe wekhev e û jimareyên gram ên hevwate yên maddeyên berhevkirî wekhev in."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Faraday 2. Kanunu: Seri bağlı elektroliz kaplarından geçen elektrik yükü eşittir ve toplanan maddelerin eşdeğer gram sayıları eşittir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Faraday's 2nd Law: The electrical charge passing through serially connected electrolysis vessels is equal and the equivalent gram numbers of the collected substances are equal.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Faradaysches 2. Gesetz: Die elektrische Ladung, die durch in Reihe geschaltete Elektrolysegefäße fließt, ist gleich und die äquivalenten Grammzahlen der gesammelten Substanzen sind gleich.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Deuxième loi de Faraday : La charge électrique passant dans les cuves d'électrolyse connectées en série est égale et les nombres de grammes équivalents des substances collectées sont égaux.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Второй закон Фарадея: Электрический заряд, проходящий через последовательно соединенные электролизные сосуды, одинаков, и эквивалентное количество граммов собранных веществ одинаково.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قانون فاراداي الثاني: الشحنات الكهربائية التي تمر عبر أوعية التحليل الكهربائي المتصلة تسلسلياً متساوية، كما أن أعداد الغرامات المكافئة للمواد المجمعة متساوية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“法拉第第二定律：通过串联电解容器的电荷相等，收集到的物质的当量克数也相等。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Zagona 2yemîn a Faraday: Bara elektrîkê ya ku di firaxên elektrolîzê yên bi rêz ve girêdayî re derbas dibe wekhev e û jimareyên gram ên hevwate yên maddeyên berhevkirî wekhev in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u22-twin06",
      "stem": {
        "tr": "Aşağıda Kimya ve Elektrik: Elektroliz ve Korozyon ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Electrochemistry: Electrolysis & Corrosion, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Elektrolyse & Korrosion: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Électrolyse & Corrosion, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Электролиз и коррозия», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"التحليل الكهربائي والتآكل\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“电解与腐蚀”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Elektrolîz û Korozyon\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Suyun elektrolizinde (Hoffman voltametresi): Katotta 2 hacim H2 gazı toplanırken, anotta 1 hacim O2 gazı toplanır (2 H2O → 2 H2 + O2).",
          "en": "In the electrolysis of water (Hoffman voltammeter): While 2 volumes of H2 gas are collected at the cathode, 1 volume of O2 gas is collected at the anode (2 H2O → 2 H2 + O2).",
          "de": "Bei der Elektrolyse von Wasser (Hoffman-Voltammeter): Während an der Kathode 2 Volumina H2-Gas gesammelt werden, wird an der Anode 1 Volumen O2-Gas gesammelt (2 H2O → 2 H2 + O2).",
          "fr": "Dans l'électrolyse de l'eau (voltampèremètre Hoffman) : Alors que 2 volumes de gaz H2 sont collectés à la cathode, 1 volume de gaz O2 est collecté à l'anode (2 H2O → 2 H2 + O2).",
          "ru": "При электролизе воды (вольтамперметр Хоффмана): на катоде собирается 2 объема газообразного H2, на аноде собирается 1 объем газообразного O2 (2 H2O → 2 H2 + O2).",
          "ar": "في التحليل الكهربائي للماء (فولتاميتر هوفمان): بينما يتم جمع حجمين من غاز H2 عند الكاثود، يتم جمع حجم واحد من غاز O2 عند الأنود (2 H2O → 2 H2 + O2).",
          "zh": "在水电解中（霍夫曼伏安计）：在阴极收集 2 体积的 H2 气体，在阳极收集 1 体积的 O2 气体 (2 H2O → 2 H2 + O2)。",
          "ku": "Di elektrolîza avê de (voltametra Hoffman): Dema ku li katodê 2 cild gaza H2, li anodê 1 cild gaza O2 tê berhevkirin (2 H2O → 2 H2 + O2)."
        },
        {
          "tr": "Anotta yükseltgenme potansiyeli en küçük olan anyon önce çıkar.",
          "en": "The anion with the smallest oxidation potential at the anode emerges first.",
          "de": "Das Anion mit dem kleinsten Oxidationspotential an der Anode entsteht zuerst.",
          "fr": "L’anion ayant le plus petit potentiel d’oxydation à l’anode émerge en premier.",
          "ru": "Первым на аноде выходит анион с наименьшим окислительным потенциалом.",
          "ar": "يتأكسد أولًا عند الأنود الأنيون ذو جهد التأكسد الأصغر.",
          "zh": "阳极氧化电位最小的阴离子首先出现。",
          "ku": "Anyona xwedan potansiyela oksîdasyonê ya herî piçûk li anodê pêşî derdikeve holê."
        },
        {
          "tr": "Kaplanacak eşya anota bağlanmalıdır.",
          "en": "The item to be coated must be connected to the anode.",
          "de": "Der zu beschichtende Gegenstand muss an die Anode angeschlossen werden.",
          "fr": "L'élément à revêtir doit être connecté à l'anode.",
          "ru": "Изделие, на которое будет нанесено покрытие, должно быть соединено с анодом.",
          "ar": "يجب أن يكون العنصر المراد طلاؤه متصلاً بالأنود.",
          "zh": "待涂覆的物品必须连接到阳极。",
          "ku": "Tiştê ku tê pêçandin divê bi anodê ve were girêdan."
        },
        {
          "tr": "Downs hücresi pil üretmek için kullanılır.",
          "en": "Downs cell is used to produce batteries.",
          "de": "Downs-Zellen werden zur Herstellung von Batterien verwendet.",
          "fr": "La cellule Downs est utilisée pour produire des batteries.",
          "ru": "Ячейка Даунса используется для производства аккумуляторов.",
          "ar": "تستخدم خلية داونز لإنتاج البطاريات.",
          "zh": "唐斯电池用于生产电池。",
          "ku": "Hucreya Downs ji bo hilberîna bataryayê tê bikar anîn."
        },
        {
          "tr": "Elektrotta toplanan madde devreden geçen akımla ters orantılıdır.",
          "en": "The substance collected in the electrode is inversely proportional to the current passing through the circuit.",
          "de": "Die in der Elektrode gesammelte Substanz ist umgekehrt proportional zum durch den Stromkreis fließenden Strom.",
          "fr": "La substance collectée dans l'électrode est inversement proportionnelle au courant traversant le circuit.",
          "ru": "Вещество, собирающееся в электроде, обратно пропорционально току, проходящему через цепь.",
          "ar": "تتناسب المادة المجمعة في القطب عكسيا مع التيار الذي يمر عبر الدائرة.",
          "zh": "电极中收集的物质与通过电路的电流成反比。",
          "ku": "Madeya ku di elektrodê de tê berhevkirin, berevajî wê bi rêjeya ku di çerxê re derbas dibe re têkildar e."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Suyun elektrolizinde (Hoffman voltametresi): Katotta 2 hacim H2 gazı toplanırken, anotta 1 hacim O2 gazı toplanır (2 H2O → 2 H2 + O2).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In the electrolysis of water (Hoffman voltammeter): While 2 volumes of H2 gas are collected at the cathode, 1 volume of O2 gas is collected at the anode (2 H2O → 2 H2 + O2).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei der Elektrolyse von Wasser (Hoffman-Voltammeter): Während an der Kathode 2 Volumina H2-Gas gesammelt werden, wird an der Anode 1 Volumen O2-Gas gesammelt (2 H2O → 2 H2 + O2).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans l'électrolyse de l'eau (voltampèremètre Hoffman) : Alors que 2 volumes de gaz H2 sont collectés à la cathode, 1 volume de gaz O2 est collecté à l'anode (2 H2O → 2 H2 + O2).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При электролизе воды (вольтамперметр Хоффмана): на катоде собирается 2 объема газообразного H2, на аноде собирается 1 объем газообразного O2 (2 H2O → 2 H2 + O2).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في التحليل الكهربائي للماء (فولتاميتر هوفمان): بينما يتم جمع حجمين من غاز H2 عند الكاثود، يتم جمع حجم واحد من غاز O2 عند الأنود (2 H2O → 2 H2 + O2).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在水电解中（霍夫曼伏安计）：在阴极收集 2 体积的 H2 气体，在阳极收集 1 体积的 O2 气体 (2 H2O → 2 H2 + O2)。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di elektrolîza avê de (voltametra Hoffman): Dema ku li katodê 2 cild gaza H2, li anodê 1 cild gaza O2 tê berhevkirin (2 H2O → 2 H2 + O2).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u22-twin07",
      "stem": {
        "tr": "Kimya ve Elektrik: Elektroliz ve Korozyon konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Electrochemistry: Electrolysis & Corrosion, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Elektrolyse & Korrosion: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Électrolyse & Corrosion, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Электролиз и коррозия», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"التحليل الكهربائي والتآكل\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“电解与腐蚀”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Elektrolîz û Korozyon\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Korozyon metallerin fiziksel olarak parlatılması işlemidir.",
          "en": "Corrosion is the process of physical polishing of metals.",
          "de": "Korrosion ist der Prozess des physikalischen Polierens von Metallen.",
          "fr": "La corrosion est le processus de polissage physique des métaux.",
          "ru": "Коррозия – это процесс физической полировки металлов.",
          "ar": "التآكل هو عملية التلميع الفيزيائي للمعادن.",
          "zh": "腐蚀是金属的物理抛光过程。",
          "ku": "Korozyon pêvajoya paqijkirina fizîkî ya metalan e."
        },
        {
          "tr": "Erimiş tuzların elektrolizinde katotta katyon indirgenerek metal açığa çıkar; anotta anyon yükseltgenerek ametal gazı açığa çıkar.",
          "en": "In the electrolysis of molten salts, the cation is reduced at the cathode and the metal is released; At the anode, the anion is oxidized and nonmetal gas is released.",
          "de": "Bei der Elektrolyse geschmolzener Salze wird das Kation an der Kathode reduziert und das Metall freigesetzt; An der Anode wird das Anion oxidiert und nichtmetallisches Gas freigesetzt.",
          "fr": "Lors de l'électrolyse des sels fondus, le cation est réduit à la cathode et le métal est libéré ; À l'anode, l'anion est oxydé et un gaz non métallique est libéré.",
          "ru": "При электролизе расплавленных солей катион восстанавливается на катоде и выделяется металл; На аноде анион окисляется и выделяется неметаллический газ.",
          "ar": "في التحليل الكهربائي للأملاح المنصهرة يُختزل الكاتيون عند الكاثود فيتحرر الفلز؛ ويتأكسد الأنيون عند الأنود فيتحرر غاز لافلزي.",
          "zh": "熔盐电解时，阳离子在阴极被还原，释放出金属；在阳极，阴离子被氧化并释放出非金属气体。",
          "ku": "Di elektrolîza xwêyên şilandî de, kation li katodê kêm dibe û metal tê berdan; Li anodê, anyon oksîde dibe û gaza nemetal derdikeve."
        },
        {
          "tr": "Suyun elektrolizi için saf suya şeker eklenir.",
          "en": "For electrolysis of water, sugar is added to pure water.",
          "de": "Bei der Elektrolyse von Wasser wird reinem Wasser Zucker zugesetzt.",
          "fr": "Pour l'électrolyse de l'eau, du sucre est ajouté à l'eau pure.",
          "ru": "Для электролиза воды в чистую воду добавляют сахар.",
          "ar": "للتحليل الكهربائي للماء، يضاف السكر إلى الماء النقي.",
          "zh": "为了电解水，将糖添加到纯水中。",
          "ku": "Ji bo elektrolîza avê, şekir li ava paqij tê zêdekirin."
        },
        {
          "tr": "Kurban elektrot demirin üzerine altın kaplama yapmaktır.",
          "en": "The sacrificial electrode is plating gold on iron.",
          "de": "Die Opferelektrode plattiert Eisen mit Gold.",
          "fr": "L'électrode sacrificielle consiste à déposer de l'or sur du fer.",
          "ru": "Жертвенный электрод наносит золото на железо.",
          "ar": "القطب المضحي هو طلاء الذهب على الحديد.",
          "zh": "牺牲电极是在铁上镀金。",
          "ku": "Elektroda qurbanê zêr li ser hesin dike."
        },
        {
          "tr": "1 Faraday elektrik yükü 1 Coulomb'a eşittir.",
          "en": "1 Faraday electric charge is equal to 1 Coulomb.",
          "de": "1 Faradaysche elektrische Ladung entspricht 1 Coulomb.",
          "fr": "1 charge électrique Faraday équivaut à 1 Coulomb.",
          "ru": "1 электрический заряд Фарадея равен 1 Кулону.",
          "ar": "1 شحنة فاراداي الكهربائية تساوي 1 كولوم.",
          "zh": "1 法拉第电荷等于 1 库仑。",
          "ku": "1 Bara elektrîkê ya Faraday bi 1 Coulomb re ye."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Erimiş tuzların elektrolizinde katotta katyon indirgenerek metal açığa çıkar; anotta anyon yükseltgenerek ametal gazı açığa çıkar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In the electrolysis of molten salts, the cation is reduced at the cathode and the metal is released; At the anode, the anion is oxidized and nonmetal gas is released.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei der Elektrolyse geschmolzener Salze wird das Kation an der Kathode reduziert und das Metall freigesetzt; An der Anode wird das Anion oxidiert und nichtmetallisches Gas freigesetzt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Lors de l'électrolyse des sels fondus, le cation est réduit à la cathode et le métal est libéré ; À l'anode, l'anion est oxydé et un gaz non métallique est libéré.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При электролизе расплавленных солей катион восстанавливается на катоде и выделяется металл; На аноде анион окисляется и выделяется неметаллический газ.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في التحليل الكهربائي للأملاح المنصهرة يُختزل الكاتيون عند الكاثود فيتحرر الفلز؛ ويتأكسد الأنيون عند الأنود فيتحرر غاز لافلزي.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“熔盐电解时，阳离子在阴极被还原，释放出金属；在阳极，阴离子被氧化并释放出非金属气体。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di elektrolîza xwêyên şilandî de, kation li katodê kêm dibe û metal tê berdan; Li anodê, anyon oksîde dibe û gaza nemetal derdikeve.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u22-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimya ve Elektrik: Elektroliz ve Korozyon ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Electrochemistry: Electrolysis & Corrosion, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Elektrolyse & Korrosion: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Électrolyse & Corrosion, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Электролиз и коррозия», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"التحليل الكهربائي والتآكل\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“电解与腐蚀”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Elektrolîz û Korozyon\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Kurban elektrot olarak korunacak metalden daha pasif bir metal seçilmelidir.",
          "en": "A more passive metal than the metal to be protected should be chosen as the sacrificial electrode.",
          "de": "Als Opferelektrode sollte ein passiveres Metall als das zu schützende Metall gewählt werden.",
          "fr": "Un métal plus passif que le métal à protéger doit être choisi comme électrode sacrificielle.",
          "ru": "В качестве жертвующего электрода следует выбрать более пассивный металл, чем защищаемый металл.",
          "ar": "يجب اختيار فلز أقل نشاطًا من الفلز المراد حمايته ليكون القطب المضحّي.",
          "zh": "应选择比被保护金属更惰性的金属作为牺牲电极。",
          "ku": "Pêdivî ye ku ji metalê ku were parastin metalek pasîftir wekî elektrodê qurban were hilbijartin."
        },
        {
          "tr": "2 Faraday akım geçtiğinde 2 mol Ca metali toplanır.",
          "en": "When 2 Faraday current passes, 2 moles of Ca metal are collected.",
          "de": "Wenn ein Strom von 2 Faraday fließt, werden 2 Mol Ca-Metall gesammelt.",
          "fr": "Lorsque 2 faradays traversent la cellule, 2 moles de calcium métallique sont recueillies.",
          "ru": "При прохождении 2 фарадеев электричества выделяется 2 моль металлического Ca.",
          "ar": "عند مرور 2 فاراداي يترسب 2 مول من فلز Ca.",
          "zh": "当通过 2 法拉第电流时，会收集 2 摩尔的 Ca 金属。",
          "ku": "Dema 2 Faraday bar derbas dibe, 2 mol metala Ca kom dibe."
        },
        {
          "tr": "Sulu çözelti elektrolizinde katotta indirgenme potansiyeli en büyük olan (en pasif katyon) öncelikle indirgenir.",
          "en": "In aqueous solution electrolysis, the cation with the largest reduction potential (the most passive cation) at the cathode is reduced first.",
          "de": "Bei der Elektrolyse wässriger Lösungen wird zuerst das Kation mit dem größten Reduktionspotential (das passivste Kation) an der Kathode reduziert.",
          "fr": "Dans l'électrolyse en solution aqueuse, le cation ayant le potentiel de réduction le plus élevé (le cation le plus passif) à la cathode est réduit en premier.",
          "ru": "При электролизе водного раствора катион с наибольшим восстановительным потенциалом (самый пассивный катион) на катоде восстанавливается первым.",
          "ar": "في التحليل الكهربائي للمحاليل المائية يُختزل أولًا عند الكاثود الكاتيون ذو جهد الاختزال الأكبر (الكاتيون الأقل نشاطًا).",
          "zh": "在水溶液电解中，阴极处还原电势最大的阳离子（最惰性的阳离子）首先被还原。",
          "ku": "Di elektrolîza çareseriya avî de, kationa ku potansiyela kêmkirina herî mezin (kationa herî pasîf) li katodê pêşî kêm dibe."
        },
        {
          "tr": "Elektroliz kendiliğinden elektrik üreten bir galvanik sistemdir.",
          "en": "Electrolysis is a galvanic system that spontaneously produces electricity.",
          "de": "Elektrolyse ist ein galvanisches System, das spontan Strom erzeugt.",
          "fr": "L'électrolyse est un système galvanique qui produit spontanément de l'électricité.",
          "ru": "Электролиз – это гальваническая система, которая самопроизвольно производит электричество.",
          "ar": "التحليل الكهربائي هو نظام كلفاني ينتج الكهرباء تلقائيًا.",
          "zh": "电解是一种能自发产生电能的原电池体系。",
          "ku": "Elektrolîz pergalek galvanîk e ku bi xweber elektrîkê hildiberîne."
        },
        {
          "tr": "Toplanan madde kütlesi maddenin mol kütlesine bölünerek bulunur.",
          "en": "The mass of the collected substance is found by dividing it by the molar mass of the substance.",
          "de": "Die Masse der gesammelten Substanz wird ermittelt, indem man sie durch die Molmasse der Substanz dividiert.",
          "fr": "La masse de la substance collectée est obtenue en la divisant par la masse molaire de la substance.",
          "ru": "Массу собранного вещества находят путем деления ее на молярную массу вещества.",
          "ar": "يتم العثور على كتلة المادة المجمعة بتقسيمها على الكتلة المولية للمادة.",
          "zh": "所收集物质的质量除以该物质的摩尔质量即可得出。",
          "ku": "Girseya maddeya berhevkirî bi dabeşkirina wê bi girseya molî ya maddeyê tê dîtin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Sulu çözelti elektrolizinde katotta indirgenme potansiyeli en büyük olan (en pasif katyon) öncelikle indirgenir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In aqueous solution electrolysis, the cation with the largest reduction potential (the most passive cation) at the cathode is reduced first.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei der Elektrolyse wässriger Lösungen wird zuerst das Kation mit dem größten Reduktionspotential (das passivste Kation) an der Kathode reduziert.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans l'électrolyse en solution aqueuse, le cation ayant le potentiel de réduction le plus élevé (le cation le plus passif) à la cathode est réduit en premier.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При электролизе водного раствора катион с наибольшим восстановительным потенциалом (самый пассивный катион) на катоде восстанавливается первым.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في التحليل الكهربائي للمحاليل المائية يُختزل أولًا عند الكاثود الكاتيون ذو جهد الاختزال الأكبر (الكاتيون الأقل نشاطًا).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在水溶液电解中，阴极处还原电势最大的阳离子（最惰性的阳离子）首先被还原。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di elektrolîza çareseriya avî de, kationa ku potansiyela kêmkirina herî mezin (kationa herî pasîf) li katodê pêşî kêm dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u22-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimya ve Elektrik: Elektroliz ve Korozyon konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Electrochemistry: Electrolysis & Corrosion, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Elektrolyse & Korrosion die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Électrolyse & Corrosion, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Электролиз и коррозия», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"التحليل الكهربائي والتآكل\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“电解与腐蚀”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Elektrolîz û Korozyon\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Kaplanacak eşya anota bağlanmalıdır.",
          "en": "The item to be coated must be connected to the anode.",
          "de": "Der zu beschichtende Gegenstand muss an die Anode angeschlossen werden.",
          "fr": "L'élément à revêtir doit être connecté à l'anode.",
          "ru": "Изделие, на которое будет нанесено покрытие, должно быть соединено с анодом.",
          "ar": "يجب أن يكون العنصر المراد طلاؤه متصلاً بالأنود.",
          "zh": "待涂覆的物品必须连接到阳极。",
          "ku": "Tiştê ku tê pêçandin divê bi anodê ve were girêdan."
        },
        {
          "tr": "Downs hücresi pil üretmek için kullanılır.",
          "en": "Downs cell is used to produce batteries.",
          "de": "Downs-Zellen werden zur Herstellung von Batterien verwendet.",
          "fr": "La cellule Downs est utilisée pour produire des batteries.",
          "ru": "Ячейка Даунса используется для производства аккумуляторов.",
          "ar": "تستخدم خلية داونز لإنتاج البطاريات.",
          "zh": "唐斯电池用于生产电池。",
          "ku": "Hucreya Downs ji bo hilberîna bataryayê tê bikar anîn."
        },
        {
          "tr": "Elektrotta toplanan madde devreden geçen akımla ters orantılıdır.",
          "en": "The substance collected in the electrode is inversely proportional to the current passing through the circuit.",
          "de": "Die in der Elektrode gesammelte Substanz ist umgekehrt proportional zum durch den Stromkreis fließenden Strom.",
          "fr": "La substance collectée dans l'électrode est inversement proportionnelle au courant traversant le circuit.",
          "ru": "Вещество, собирающееся в электроде, обратно пропорционально току, проходящему через цепь.",
          "ar": "تتناسب المادة المجمعة في القطب عكسيا مع التيار الذي يمر عبر الدائرة.",
          "zh": "电极中收集的物质与通过电路的电流成反比。",
          "ku": "Madeya ku di elektrodê de tê berhevkirin, berevajî wê bi rêjeya ku di çerxê re derbas dibe re têkildar e."
        },
        {
          "tr": "Sulu çözelti elektrolizinde anotta yükseltgenme potansiyeli en büyük olan (en aktif anyon) öncelikle yükseltgenir.",
          "en": "In aqueous solution electrolysis, the anion with the highest oxidation potential (the most active anion) at the anode is oxidized first.",
          "de": "Bei der Elektrolyse wässriger Lösungen wird zuerst das Anion mit dem höchsten Oxidationspotential (das aktivste Anion) an der Anode oxidiert.",
          "fr": "Dans l'électrolyse en solution aqueuse, l'anion ayant le potentiel d'oxydation le plus élevé (l'anion le plus actif) à l'anode est oxydé en premier.",
          "ru": "При электролизе водного раствора анион с самым высоким окислительным потенциалом (наиболее активный анион) на аноде окисляется первым.",
          "ar": "في التحليل الكهربائي للمحاليل المائية يتأكسد أولًا عند الأنود الأنيون ذو جهد التأكسد الأكبر (الأنيون الأكثر نشاطًا).",
          "zh": "在水溶液电解中，阳极处氧化电位最高的阴离子（最活泼的阴离子）首先被氧化。",
          "ku": "Di elektrolîza çareseriya avî de, anyona ku potansiyela oksîdasyonê ya herî zêde (anyona herî çalak) li anodê ye pêşî tê oksîd kirin."
        },
        {
          "tr": "Seri bağlı kaplarda toplanan maddelerin kütleleri daima birbirine eşittir.",
          "en": "The masses of the substances collected in serially connected containers are always equal.",
          "de": "Die Massen der in hintereinander geschalteten Behältern gesammelten Stoffe sind immer gleich.",
          "fr": "Les masses des substances collectées dans des conteneurs connectés en série sont toujours égales.",
          "ru": "Массы веществ, собранных в последовательно соединенные емкости, всегда равны.",
          "ar": "تكون كتل المواد المجمعة في حاويات متصلة تسلسليًا متساوية دائمًا.",
          "zh": "串联连接的容器中收集的物质的质量始终相等。",
          "ku": "Girseya maddeyên ku di konteynerên bi rêz ve girêdayî de têne berhev kirin her gav wekhev in."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Sulu çözelti elektrolizinde anotta yükseltgenme potansiyeli en büyük olan (en aktif anyon) öncelikle yükseltgenir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In aqueous solution electrolysis, the anion with the highest oxidation potential (the most active anion) at the anode is oxidized first.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei der Elektrolyse wässriger Lösungen wird zuerst das Anion mit dem höchsten Oxidationspotential (das aktivste Anion) an der Anode oxidiert.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans l'électrolyse en solution aqueuse, l'anion ayant le potentiel d'oxydation le plus élevé (l'anion le plus actif) à l'anode est oxydé en premier.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При электролизе водного раствора анион с самым высоким окислительным потенциалом (наиболее активный анион) на аноде окисляется первым.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في التحليل الكهربائي للمحاليل المائية يتأكسد أولًا عند الأنود الأنيون ذو جهد التأكسد الأكبر (الأنيون الأكثر نشاطًا).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在水溶液电解中，阳极处氧化电位最高的阴离子（最活泼的阴离子）首先被氧化。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di elektrolîza çareseriya avî de, anyona ku potansiyela oksîdasyonê ya herî zêde (anyona herî çalak) li anodê ye pêşî tê oksîd kirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u22-twin10",
      "stem": {
        "tr": "Kimya dersinde Kimya ve Elektrik: Elektroliz ve Korozyon ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Electrochemistry: Electrolysis & Corrosion, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Elektrolyse & Korrosion: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Électrolyse & Corrosion, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Электролиз и коррозия», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"التحليل الكهربائي والتآكل\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“电解与腐蚀”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Elektrolîz û Korozyon\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Suyun elektrolizi için saf suya şeker eklenir.",
          "en": "For electrolysis of water, sugar is added to pure water.",
          "de": "Bei der Elektrolyse von Wasser wird reinem Wasser Zucker zugesetzt.",
          "fr": "Pour l'électrolyse de l'eau, du sucre est ajouté à l'eau pure.",
          "ru": "Для электролиза воды в чистую воду добавляют сахар.",
          "ar": "للتحليل الكهربائي للماء، يضاف السكر إلى الماء النقي.",
          "zh": "为了电解水，将糖添加到纯水中。",
          "ku": "Ji bo elektrolîza avê, şekir li ava paqij tê zêdekirin."
        },
        {
          "tr": "Kurban elektrot demirin üzerine altın kaplama yapmaktır.",
          "en": "The sacrificial electrode is plating gold on iron.",
          "de": "Die Opferelektrode plattiert Eisen mit Gold.",
          "fr": "L'électrode sacrificielle consiste à déposer de l'or sur du fer.",
          "ru": "Жертвенный электрод наносит золото на железо.",
          "ar": "القطب المضحي هو طلاء الذهب على الحديد.",
          "zh": "牺牲电极是在铁上镀金。",
          "ku": "Elektroda qurbanê zêr li ser hesin dike."
        },
        {
          "tr": "1 Faraday elektrik yükü 1 Coulomb'a eşittir.",
          "en": "1 Faraday electric charge is equal to 1 Coulomb.",
          "de": "1 Faradaysche elektrische Ladung entspricht 1 Coulomb.",
          "fr": "1 charge électrique Faraday équivaut à 1 Coulomb.",
          "ru": "1 электрический заряд Фарадея равен 1 Кулону.",
          "ar": "1 شحنة فاراداي الكهربائية تساوي 1 كولوم.",
          "zh": "1 法拉第电荷等于 1 库仑。",
          "ku": "1 Bara elektrîkê ya Faraday bi 1 Coulomb re ye."
        },
        {
          "tr": "Suyun elektrolizinde anotta katottan 2 kat daha fazla gaz toplanır.",
          "en": "In the electrolysis of water, twice as much gas is collected at the anode than at the cathode.",
          "de": "Bei der Elektrolyse von Wasser wird an der Anode doppelt so viel Gas gesammelt wie an der Kathode.",
          "fr": "Lors de l’électrolyse de l’eau, deux fois plus de gaz sont collectés à l’anode qu’à la cathode.",
          "ru": "При электролизе воды на аноде собирается в два раза больше газа, чем на катоде.",
          "ar": "في التحليل الكهربائي للمياه، يتم جمع ضعف كمية الغاز عند القطب الموجب مقارنة بالكاثود.",
          "zh": "在水的电解中，阳极收集的气体是阴极收集的气体的两倍。",
          "ku": "Di elektrolîza avê de li anodê du qat zêdetir gaz ji katodê tê komkirin."
        },
        {
          "tr": "Korozyon, metallerin çevre koşullarıyla (özellikle O2 ve nem) elektrokimyasal olarak yükseltgenip aşınmasıdır (paslanma).",
          "en": "Corrosion is the electrochemical oxidation and corrosion (rusting) of metals by environmental conditions (especially O2 and humidity).",
          "de": "Korrosion ist die elektrochemische Oxidation und Korrosion (Rosten) von Metallen durch Umgebungsbedingungen (insbesondere O2 und Feuchtigkeit).",
          "fr": "La corrosion est l'oxydation électrochimique et la corrosion (rouille) des métaux par les conditions environnementales (en particulier l'O2 et l'humidité).",
          "ru": "Коррозия – это электрохимическое окисление и коррозия (ржавление) металлов под воздействием условий окружающей среды (особенно O2 и влажности).",
          "ar": "التآكل هو الأكسدة الكهروكيميائية والتآكل (الصدأ) للمعادن بسبب الظروف البيئية (خاصة الأكسجين والرطوبة).",
          "zh": "腐蚀是金属在环境条件（尤其是氧气和湿度）的作用下发生的电化学氧化和腐蚀（生锈）。",
          "ku": "Korozyon oksîdasyon û korozyona elektrokîmyayî (xirabbûn) ya metalan e ji ber şert û mercên jîngehê (bi taybetî O2 û nembûn)."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Korozyon, metallerin çevre koşullarıyla (özellikle O2 ve nem) elektrokimyasal olarak yükseltgenip aşınmasıdır (paslanma).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Corrosion is the electrochemical oxidation and corrosion (rusting) of metals by environmental conditions (especially O2 and humidity).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Korrosion ist die elektrochemische Oxidation und Korrosion (Rosten) von Metallen durch Umgebungsbedingungen (insbesondere O2 und Feuchtigkeit).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La corrosion est l'oxydation électrochimique et la corrosion (rouille) des métaux par les conditions environnementales (en particulier l'O2 et l'humidité).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Коррозия – это электрохимическое окисление и коррозия (ржавление) металлов под воздействием условий окружающей среды (особенно O2 и влажности).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"التآكل هو الأكسدة الكهروكيميائية والتآكل (الصدأ) للمعادن بسبب الظروف البيئية (خاصة الأكسجين والرطوبة).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“腐蚀是金属在环境条件（尤其是氧气和湿度）的作用下发生的电化学氧化和腐蚀（生锈）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Korozyon oksîdasyon û korozyona elektrokîmyayî (xirabbûn) ya metalan e ji ber şert û mercên jîngehê (bi taybetî O2 û nembûn).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u22-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimya ve Elektrik: Elektroliz ve Korozyon konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Electrochemistry: Electrolysis & Corrosion?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Elektrolyse & Korrosion zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Électrolyse & Corrosion ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Электролиз и коррозия»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"التحليل الكهربائي والتآكل\"؟",
        "zh": "根据“电解与腐蚀”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Elektrolîz û Korozyon\" de rast e?"
      },
      "options": [
        {
          "tr": "Katodik koruma (Kurban Anot): Korunacak metalden daha aktif bir metal (Mg, Zn) sisteme bağlanarak kurban anot olarak aşındırılır.",
          "en": "Cathodic protection (Sacrificial Anode): A more active metal (Mg, Zn) than the metal to be protected is connected to the system and corroded as the sacrificial anode.",
          "de": "Kathodischer Schutz (Opferanode): Ein aktiveres Metall (Mg, Zn) als das zu schützende Metall wird als Opferanode an das System angeschlossen und korrodiert.",
          "fr": "Protection cathodique (Anode sacrificielle) : Un métal plus actif (Mg, Zn) que le métal à protéger est connecté au système et corrodé comme anode sacrificielle.",
          "ru": "Катодная защита (жертвенный анод): более активный металл (Mg, Zn), чем защищаемый металл, подключается к системе и подвергается коррозии в качестве жертвенного анода.",
          "ar": "الحماية الكاثودية (الأنود المضحي): يتم توصيل المعدن الأكثر نشاطًا (Mg، Zn) من المعدن المراد حمايته بالنظام ويتآكل مثل الأنود المضحي.",
          "zh": "阴极保护（牺牲阳极）：将比被保护金属更活泼的金属（Mg、Zn）连接到系统中，作为牺牲阳极发生腐蚀。",
          "ku": "Parastina katodîk (Anoda Qurbanê): Metalek çalaktir (Mg, Zn) ji metala ku tê parastin bi pergalê ve girêdayî ye û wekî anoda qurbanê tê xera kirin."
        },
        {
          "tr": "2 Faraday akım geçtiğinde 2 mol Ca metali toplanır.",
          "en": "When 2 Faraday current passes, 2 moles of Ca metal are collected.",
          "de": "Wenn ein Strom von 2 Faraday fließt, werden 2 Mol Ca-Metall gesammelt.",
          "fr": "Lorsque 2 faradays traversent la cellule, 2 moles de calcium métallique sont recueillies.",
          "ru": "При прохождении 2 фарадеев электричества выделяется 2 моль металлического Ca.",
          "ar": "عند مرور 2 فاراداي يترسب 2 مول من فلز Ca.",
          "zh": "当通过 2 法拉第电流时，会收集 2 摩尔的 Ca 金属。",
          "ku": "Dema 2 Faraday bar derbas dibe, 2 mol metala Ca kom dibe."
        },
        {
          "tr": "Elektroliz kendiliğinden elektrik üreten bir galvanik sistemdir.",
          "en": "Electrolysis is a galvanic system that spontaneously produces electricity.",
          "de": "Elektrolyse ist ein galvanisches System, das spontan Strom erzeugt.",
          "fr": "L'électrolyse est un système galvanique qui produit spontanément de l'électricité.",
          "ru": "Электролиз – это гальваническая система, которая самопроизвольно производит электричество.",
          "ar": "التحليل الكهربائي هو نظام كلفاني ينتج الكهرباء تلقائيًا.",
          "zh": "电解是一种能自发产生电能的原电池体系。",
          "ku": "Elektrolîz pergalek galvanîk e ku bi xweber elektrîkê hildiberîne."
        },
        {
          "tr": "Toplanan madde kütlesi maddenin mol kütlesine bölünerek bulunur.",
          "en": "The mass of the collected substance is found by dividing it by the molar mass of the substance.",
          "de": "Die Masse der gesammelten Substanz wird ermittelt, indem man sie durch die Molmasse der Substanz dividiert.",
          "fr": "La masse de la substance collectée est obtenue en la divisant par la masse molaire de la substance.",
          "ru": "Массу собранного вещества находят путем деления ее на молярную массу вещества.",
          "ar": "يتم العثور على كتلة المادة المجمعة بتقسيمها على الكتلة المولية للمادة.",
          "zh": "所收集物质的质量除以该物质的摩尔质量即可得出。",
          "ku": "Girseya maddeya berhevkirî bi dabeşkirina wê bi girseya molî ya maddeyê tê dîtin."
        },
        {
          "tr": "Erimiş NaCl elektrolizinde anotta sodyum metali toplanır.",
          "en": "In the electrolysis of molten NaCl, sodium metal is collected at the anode.",
          "de": "Bei der Elektrolyse von geschmolzenem NaCl wird Natriummetall an der Anode gesammelt.",
          "fr": "Lors de l’électrolyse du NaCl fondu, le sodium métallique est collecté à l’anode.",
          "ru": "При электролизе расплавленного NaCl металлический натрий собирается на аноде.",
          "ar": "في التحليل الكهربائي لكلوريد الصوديوم المنصهر، يتم جمع معدن الصوديوم عند القطب الموجب.",
          "zh": "在电解熔融氯化钠时，金属钠被收集在阳极。",
          "ku": "Di elektrolîza NaCl ya şilandî de, metala sodyûm li anodê tê berhev kirin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Katodik koruma (Kurban Anot): Korunacak metalden daha aktif bir metal (Mg, Zn) sisteme bağlanarak kurban anot olarak aşındırılır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Cathodic protection (Sacrificial Anode): A more active metal (Mg, Zn) than the metal to be protected is connected to the system and corroded as the sacrificial anode.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Kathodischer Schutz (Opferanode): Ein aktiveres Metall (Mg, Zn) als das zu schützende Metall wird als Opferanode an das System angeschlossen und korrodiert.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Protection cathodique (Anode sacrificielle) : Un métal plus actif (Mg, Zn) que le métal à protéger est connecté au système et corrodé comme anode sacrificielle.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Катодная защита (жертвенный анод): более активный металл (Mg, Zn), чем защищаемый металл, подключается к системе и подвергается коррозии в качестве жертвенного анода.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الحماية الكاثودية (الأنود المضحي): يتم توصيل المعدن الأكثر نشاطًا (Mg، Zn) من المعدن المراد حمايته بالنظام ويتآكل مثل الأنود المضحي.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“阴极保护（牺牲阳极）：将比被保护金属更活泼的金属（Mg、Zn）连接到系统中，作为牺牲阳极发生腐蚀。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Parastina katodîk (Anoda Qurbanê): Metalek çalaktir (Mg, Zn) ji metala ku tê parastin bi pergalê ve girêdayî ye û wekî anoda qurbanê tê xera kirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u22-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimya ve Elektrik: Elektroliz ve Korozyon sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Electrochemistry: Electrolysis & Corrosion, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Elektrolyse & Korrosion: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Électrolyse & Corrosion, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Электролиз и коррозия», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"التحليل الكهربائي والتآكل\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“电解与腐蚀”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Elektrolîz û Korozyon\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Downs hücresi pil üretmek için kullanılır.",
          "en": "Downs cell is used to produce batteries.",
          "de": "Downs-Zellen werden zur Herstellung von Batterien verwendet.",
          "fr": "La cellule Downs est utilisée pour produire des batteries.",
          "ru": "Ячейка Даунса используется для производства аккумуляторов.",
          "ar": "تستخدم خلية داونز لإنتاج البطاريات.",
          "zh": "唐斯电池用于生产电池。",
          "ku": "Hucreya Downs ji bo hilberîna bataryayê tê bikar anîn."
        },
        {
          "tr": "Elektrolitik kaplamacılıkta (galvanoplasti): Kaplanacak eşya KATOTA bağlanır; kaplama metali ANOTA bağlanır.",
          "en": "In electrolytic plating (galvanoplasty): The item to be coated is connected to the CATHOD; The coating metal is connected to the ANODE.",
          "de": "Bei der elektrolytischen Beschichtung (Galvanoplastie): Der zu beschichtende Gegenstand wird mit der KATHODE verbunden; Das Beschichtungsmetall ist mit der ANODE verbunden.",
          "fr": "En galvanoplastie (dépôt électrolytique) : l'objet à revêtir est relié à la CATHODE ; le métal de revêtement est relié à l'ANODE.",
          "ru": "При гальванопластике (гальванопластике): Изделие, на которое будет нанесено покрытие, подключается к КАТОДУ; Металл покрытия соединен с АНОДОМ.",
          "ar": "في الطلاء الكهربائي (الجلفنة الكهربائية): يوصل الجسم المراد طلاؤه بالكاثود، ويوصل فلز الطلاء بالأنود.",
          "zh": "在电解电镀（电镀成形术）中：将要涂覆的物品连接到阴极；涂层金属连接到阳极。",
          "ku": "Di pêçana elektrolîtîk de (galvanoplastî): tiştê ku dê were pêçandin bi KATODÊ ve, metala pêçanê jî bi ANODÊ ve tê girêdan."
        },
        {
          "tr": "Elektrotta toplanan madde devreden geçen akımla ters orantılıdır.",
          "en": "The substance collected in the electrode is inversely proportional to the current passing through the circuit.",
          "de": "Die in der Elektrode gesammelte Substanz ist umgekehrt proportional zum durch den Stromkreis fließenden Strom.",
          "fr": "La substance collectée dans l'électrode est inversement proportionnelle au courant traversant le circuit.",
          "ru": "Вещество, собирающееся в электроде, обратно пропорционально току, проходящему через цепь.",
          "ar": "تتناسب المادة المجمعة في القطب عكسيا مع التيار الذي يمر عبر الدائرة.",
          "zh": "电极中收集的物质与通过电路的电流成反比。",
          "ku": "Madeya ku di elektrodê de tê berhevkirin, berevajî wê bi rêjeya ku di çerxê re derbas dibe re têkildar e."
        },
        {
          "tr": "Seri bağlı kaplarda toplanan maddelerin kütleleri daima birbirine eşittir.",
          "en": "The masses of the substances collected in serially connected containers are always equal.",
          "de": "Die Massen der in hintereinander geschalteten Behältern gesammelten Stoffe sind immer gleich.",
          "fr": "Les masses des substances collectées dans des conteneurs connectés en série sont toujours égales.",
          "ru": "Массы веществ, собранных в последовательно соединенные емкости, всегда равны.",
          "ar": "تكون كتل المواد المجمعة في حاويات متصلة تسلسليًا متساوية دائمًا.",
          "zh": "串联连接的容器中收集的物质的质量始终相等。",
          "ku": "Girseya maddeyên ku di konteynerên bi rêz ve girêdayî de têne berhev kirin her gav wekhev in."
        },
        {
          "tr": "Sulu çözeltide katotta aktifliği en büyük olan Na+ öncelikle indirgenir.",
          "en": "In aqueous solution, Na+, which is the most active at the cathode, is reduced first.",
          "de": "In wässriger Lösung wird zunächst Na+ reduziert, das an der Kathode am aktivsten ist.",
          "fr": "En solution aqueuse, Na+, qui est le plus actif à la cathode, est réduit en premier.",
          "ru": "В водном растворе в первую очередь восстанавливается Na+, наиболее активный на катоде.",
          "ar": "في المحلول المائي، يتم اختزال Na+، وهو الأكثر نشاطًا عند الكاثود، أولاً.",
          "zh": "在水溶液中，Na+ 在阴极最活跃，首先被还原。",
          "ku": "Di çareseriya avî de, Na+, ku li katodê herî çalak e, pêşî kêm dibe."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Elektrolitik kaplamacılıkta (galvanoplasti): Kaplanacak eşya KATOTA bağlanır; kaplama metali ANOTA bağlanır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In electrolytic plating (galvanoplasty): The item to be coated is connected to the CATHOD; The coating metal is connected to the ANODE.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei der elektrolytischen Beschichtung (Galvanoplastie): Der zu beschichtende Gegenstand wird mit der KATHODE verbunden; Das Beschichtungsmetall ist mit der ANODE verbunden.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"En galvanoplastie (dépôt électrolytique) : l'objet à revêtir est relié à la CATHODE ; le métal de revêtement est relié à l'ANODE.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При гальванопластике (гальванопластике): Изделие, на которое будет нанесено покрытие, подключается к КАТОДУ; Металл покрытия соединен с АНОДОМ.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في الطلاء الكهربائي (الجلفنة الكهربائية): يوصل الجسم المراد طلاؤه بالكاثود، ويوصل فلز الطلاء بالأنود.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在电解电镀（电镀成形术）中：将要涂覆的物品连接到阴极；涂层金属连接到阳极。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di pêçana elektrolîtîk de (galvanoplastî): tiştê ku dê were pêçandin bi KATODÊ ve, metala pêçanê jî bi ANODÊ ve tê girêdan.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u22-twin13",
      "stem": {
        "tr": "Aşağıda Kimya ve Elektrik: Elektroliz ve Korozyon ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Electrochemistry: Electrolysis & Corrosion, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Elektrolyse & Korrosion: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Électrolyse & Corrosion, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Электролиз и коррозия», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"التحليل الكهربائي والتآكل\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“电解与腐蚀”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Elektrolîz û Korozyon\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Kurban elektrot demirin üzerine altın kaplama yapmaktır.",
          "en": "The sacrificial electrode is plating gold on iron.",
          "de": "Die Opferelektrode plattiert Eisen mit Gold.",
          "fr": "L'électrode sacrificielle consiste à déposer de l'or sur du fer.",
          "ru": "Жертвенный электрод наносит золото на железо.",
          "ar": "القطب المضحي هو طلاء الذهب على الحديد.",
          "zh": "牺牲电极是在铁上镀金。",
          "ku": "Elektroda qurbanê zêr li ser hesin dike."
        },
        {
          "tr": "1 Faraday elektrik yükü 1 Coulomb'a eşittir.",
          "en": "1 Faraday electric charge is equal to 1 Coulomb.",
          "de": "1 Faradaysche elektrische Ladung entspricht 1 Coulomb.",
          "fr": "1 charge électrique Faraday équivaut à 1 Coulomb.",
          "ru": "1 электрический заряд Фарадея равен 1 Кулону.",
          "ar": "1 شحنة فاراداي الكهربائية تساوي 1 كولوم.",
          "zh": "1 法拉第电荷等于 1 库仑。",
          "ku": "1 Bara elektrîkê ya Faraday bi 1 Coulomb re ye."
        },
        {
          "tr": "Saf su elektriği çok az ilettiğinden suyun elektrolizinde iletkenliği artırmak için ortama birkaç damla H2SO4 eklenir.",
          "en": "Since pure water conducts electricity very little, a few drops of H2SO4 are added to the medium to increase the conductivity in the electrolysis of water.",
          "de": "Da reines Wasser den Strom nur sehr wenig leitet, werden dem Medium einige Tropfen H2SO4 zugesetzt, um die Leitfähigkeit bei der Elektrolyse von Wasser zu erhöhen.",
          "fr": "L’eau pure étant très peu conductrice de l’électricité, quelques gouttes de H2SO4 sont ajoutées au milieu pour augmenter la conductivité lors de l’électrolyse de l’eau.",
          "ru": "Поскольку чистая вода проводит электричество очень мало, в среду для увеличения проводимости при электролизе воды добавляют несколько капель H2SO4.",
          "ar": "نظرًا لأن الماء النقي يوصل الكهرباء بشكل قليل جدًا، تتم إضافة بضع قطرات من H2SO4 إلى الوسط لزيادة التوصيلية في التحليل الكهربائي للماء.",
          "zh": "由于纯水的导电性很小，因此在介质中添加几滴H2SO4以增加水电解时的电导率。",
          "ku": "Ji ber ku ava paqij elektrîkê pir hindik diguhezîne, di elektrolîza avê de ji bo zêdekirina guhêzbariyê çend dilop H2SO4 lê tê zêdekirin."
        },
        {
          "tr": "Suyun elektrolizinde anotta katottan 2 kat daha fazla gaz toplanır.",
          "en": "In the electrolysis of water, twice as much gas is collected at the anode than at the cathode.",
          "de": "Bei der Elektrolyse von Wasser wird an der Anode doppelt so viel Gas gesammelt wie an der Kathode.",
          "fr": "Lors de l’électrolyse de l’eau, deux fois plus de gaz sont collectés à l’anode qu’à la cathode.",
          "ru": "При электролизе воды на аноде собирается в два раза больше газа, чем на катоде.",
          "ar": "في التحليل الكهربائي للمياه، يتم جمع ضعف كمية الغاز عند القطب الموجب مقارنة بالكاثود.",
          "zh": "在水的电解中，阳极收集的气体是阴极收集的气体的两倍。",
          "ku": "Di elektrolîza avê de li anodê du qat zêdetir gaz ji katodê tê komkirin."
        },
        {
          "tr": "Anotta yükseltgenme potansiyeli en küçük olan anyon önce çıkar.",
          "en": "The anion with the smallest oxidation potential at the anode emerges first.",
          "de": "Das Anion mit dem kleinsten Oxidationspotential an der Anode entsteht zuerst.",
          "fr": "L’anion ayant le plus petit potentiel d’oxydation à l’anode émerge en premier.",
          "ru": "Первым на аноде выходит анион с наименьшим окислительным потенциалом.",
          "ar": "يتأكسد أولًا عند الأنود الأنيون ذو جهد التأكسد الأصغر.",
          "zh": "阳极氧化电位最小的阴离子首先出现。",
          "ku": "Anyona xwedan potansiyela oksîdasyonê ya herî piçûk li anodê pêşî derdikeve holê."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Saf su elektriği çok az ilettiğinden suyun elektrolizinde iletkenliği artırmak için ortama birkaç damla H2SO4 eklenir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Since pure water conducts electricity very little, a few drops of H2SO4 are added to the medium to increase the conductivity in the electrolysis of water.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Da reines Wasser den Strom nur sehr wenig leitet, werden dem Medium einige Tropfen H2SO4 zugesetzt, um die Leitfähigkeit bei der Elektrolyse von Wasser zu erhöhen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L’eau pure étant très peu conductrice de l’électricité, quelques gouttes de H2SO4 sont ajoutées au milieu pour augmenter la conductivité lors de l’électrolyse de l’eau.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Поскольку чистая вода проводит электричество очень мало, в среду для увеличения проводимости при электролизе воды добавляют несколько капель H2SO4.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"نظرًا لأن الماء النقي يوصل الكهرباء بشكل قليل جدًا، تتم إضافة بضع قطرات من H2SO4 إلى الوسط لزيادة التوصيلية في التحليل الكهربائي للماء.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“由于纯水的导电性很小，因此在介质中添加几滴H2SO4以增加水电解时的电导率。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ji ber ku ava paqij elektrîkê pir hindik diguhezîne, di elektrolîza avê de ji bo zêdekirina guhêzbariyê çend dilop H2SO4 lê tê zêdekirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u22-twin14",
      "stem": {
        "tr": "Kimya ve Elektrik: Elektroliz ve Korozyon konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Electrochemistry: Electrolysis & Corrosion, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Elektrolyse & Korrosion: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Électrolyse & Corrosion, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Электролиз и коррозия», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"التحليل الكهربائي والتآكل\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“电解与腐蚀”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Elektrolîz û Korozyon\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Elektroliz kendiliğinden elektrik üreten bir galvanik sistemdir.",
          "en": "Electrolysis is a galvanic system that spontaneously produces electricity.",
          "de": "Elektrolyse ist ein galvanisches System, das spontan Strom erzeugt.",
          "fr": "L'électrolyse est un système galvanique qui produit spontanément de l'électricité.",
          "ru": "Электролиз – это гальваническая система, которая самопроизвольно производит электричество.",
          "ar": "التحليل الكهربائي هو نظام كلفاني ينتج الكهرباء تلقائيًا.",
          "zh": "电解是一种能自发产生电能的原电池体系。",
          "ku": "Elektrolîz pergalek galvanîk e ku bi xweber elektrîkê hildiberîne."
        },
        {
          "tr": "Toplanan madde kütlesi maddenin mol kütlesine bölünerek bulunur.",
          "en": "The mass of the collected substance is found by dividing it by the molar mass of the substance.",
          "de": "Die Masse der gesammelten Substanz wird ermittelt, indem man sie durch die Molmasse der Substanz dividiert.",
          "fr": "La masse de la substance collectée est obtenue en la divisant par la masse molaire de la substance.",
          "ru": "Массу собранного вещества находят путем деления ее на молярную массу вещества.",
          "ar": "يتم العثور على كتلة المادة المجمعة بتقسيمها على الكتلة المولية للمادة.",
          "zh": "所收集物质的质量除以该物质的摩尔质量即可得出。",
          "ku": "Girseya maddeya berhevkirî bi dabeşkirina wê bi girseya molî ya maddeyê tê dîtin."
        },
        {
          "tr": "Erimiş NaCl elektrolizinde anotta sodyum metali toplanır.",
          "en": "In the electrolysis of molten NaCl, sodium metal is collected at the anode.",
          "de": "Bei der Elektrolyse von geschmolzenem NaCl wird Natriummetall an der Anode gesammelt.",
          "fr": "Lors de l’électrolyse du NaCl fondu, le sodium métallique est collecté à l’anode.",
          "ru": "При электролизе расплавленного NaCl металлический натрий собирается на аноде.",
          "ar": "في التحليل الكهربائي لكلوريد الصوديوم المنصهر، يتم جمع معدن الصوديوم عند القطب الموجب.",
          "zh": "在电解熔融氯化钠时，金属钠被收集在阳极。",
          "ku": "Di elektrolîza NaCl ya şilandî de, metala sodyûm li anodê tê berhev kirin."
        },
        {
          "tr": "Erimiş CaCl2 tuzundan 2 Faraday akım geçerse katotta 1 mol Ca metali toplanır (Ca2+ + 2e- → Ca).",
          "en": "If a current of 2 Faradays passes through the molten CaCl2 salt, 1 mole of Ca metal is collected at the cathode (Ca2+ + 2e- → Ca).",
          "de": "Wenn ein Strom von 2 Faradays durch das geschmolzene CaCl2-Salz fließt, wird 1 Mol Ca-Metall an der Kathode gesammelt (Ca2+ + 2e- → Ca).",
          "fr": "Si un courant de 2 Faraday traverse le sel CaCl2 fondu, 1 mole de métal Ca est collectée à la cathode (Ca2+ + 2e- → Ca).",
          "ru": "Если через расплав CaCl2 пропустить 2 фарадея электричества, на катоде выделится 1 моль металлического Ca (Ca2+ + 2e- → Ca).",
          "ar": "إذا مرت كمية كهرباء مقدارها 2 فاراداي في مصهور CaCl2 يترسب 1 مول من فلز Ca عند الكاثود (Ca2+ + 2e- → Ca).",
          "zh": "如果 2 法拉第的电流通过熔融的 CaCl2 盐，则在阴极处收集 1 摩尔的 Ca 金属 (Ca2+ + 2e- → Ca)。",
          "ku": "Ger herikîna 2 Faraday di xwêya CaCl2 ya şilandî re derbas bibe, 1 mol metal Ca li katodê tê berhev kirin (Ca2+ + 2e- → Ca)."
        },
        {
          "tr": "Korozyon metallerin fiziksel olarak parlatılması işlemidir.",
          "en": "Corrosion is the process of physical polishing of metals.",
          "de": "Korrosion ist der Prozess des physikalischen Polierens von Metallen.",
          "fr": "La corrosion est le processus de polissage physique des métaux.",
          "ru": "Коррозия – это процесс физической полировки металлов.",
          "ar": "التآكل هو عملية التلميع الفيزيائي للمعادن.",
          "zh": "腐蚀是金属的物理抛光过程。",
          "ku": "Korozyon pêvajoya paqijkirina fizîkî ya metalan e."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Erimiş CaCl2 tuzundan 2 Faraday akım geçerse katotta 1 mol Ca metali toplanır (Ca2+ + 2e- → Ca).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If a current of 2 Faradays passes through the molten CaCl2 salt, 1 mole of Ca metal is collected at the cathode (Ca2+ + 2e- → Ca).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn ein Strom von 2 Faradays durch das geschmolzene CaCl2-Salz fließt, wird 1 Mol Ca-Metall an der Kathode gesammelt (Ca2+ + 2e- → Ca).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si un courant de 2 Faraday traverse le sel CaCl2 fondu, 1 mole de métal Ca est collectée à la cathode (Ca2+ + 2e- → Ca).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если через расплав CaCl2 пропустить 2 фарадея электричества, на катоде выделится 1 моль металлического Ca (Ca2+ + 2e- → Ca).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا مرت كمية كهرباء مقدارها 2 فاراداي في مصهور CaCl2 يترسب 1 مول من فلز Ca عند الكاثود (Ca2+ + 2e- → Ca).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果 2 法拉第的电流通过熔融的 CaCl2 盐，则在阴极处收集 1 摩尔的 Ca 金属 (Ca2+ + 2e- → Ca)。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger herikîna 2 Faraday di xwêya CaCl2 ya şilandî re derbas bibe, 1 mol metal Ca li katodê tê berhev kirin (Ca2+ + 2e- → Ca).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u22-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimya ve Elektrik: Elektroliz ve Korozyon ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Electrochemistry: Electrolysis & Corrosion, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Elektrolyse & Korrosion: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Électrolyse & Corrosion, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Электролиз и коррозия», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"التحليل الكهربائي والتآكل\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“电解与腐蚀”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Elektrolîz û Korozyon\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Elektrotta toplanan madde devreden geçen akımla ters orantılıdır.",
          "en": "The substance collected in the electrode is inversely proportional to the current passing through the circuit.",
          "de": "Die in der Elektrode gesammelte Substanz ist umgekehrt proportional zum durch den Stromkreis fließenden Strom.",
          "fr": "La substance collectée dans l'électrode est inversement proportionnelle au courant traversant le circuit.",
          "ru": "Вещество, собирающееся в электроде, обратно пропорционально току, проходящему через цепь.",
          "ar": "تتناسب المادة المجمعة في القطب عكسيا مع التيار الذي يمر عبر الدائرة.",
          "zh": "电极中收集的物质与通过电路的电流成反比。",
          "ku": "Madeya ku di elektrodê de tê berhevkirin, berevajî wê bi rêjeya ku di çerxê re derbas dibe re têkildar e."
        },
        {
          "tr": "Seri bağlı kaplarda toplanan maddelerin kütleleri daima birbirine eşittir.",
          "en": "The masses of the substances collected in serially connected containers are always equal.",
          "de": "Die Massen der in hintereinander geschalteten Behältern gesammelten Stoffe sind immer gleich.",
          "fr": "Les masses des substances collectées dans des conteneurs connectés en série sont toujours égales.",
          "ru": "Массы веществ, собранных в последовательно соединенные емкости, всегда равны.",
          "ar": "تكون كتل المواد المجمعة في حاويات متصلة تسلسليًا متساوية دائمًا.",
          "zh": "串联连接的容器中收集的物质的质量始终相等。",
          "ku": "Girseya maddeyên ku di konteynerên bi rêz ve girêdayî de têne berhev kirin her gav wekhev in."
        },
        {
          "tr": "Sulu çözeltide katotta aktifliği en büyük olan Na+ öncelikle indirgenir.",
          "en": "In aqueous solution, Na+, which is the most active at the cathode, is reduced first.",
          "de": "In wässriger Lösung wird zunächst Na+ reduziert, das an der Kathode am aktivsten ist.",
          "fr": "En solution aqueuse, Na+, qui est le plus actif à la cathode, est réduit en premier.",
          "ru": "В водном растворе в первую очередь восстанавливается Na+, наиболее активный на катоде.",
          "ar": "في المحلول المائي، يتم اختزال Na+، وهو الأكثر نشاطًا عند الكاثود، أولاً.",
          "zh": "在水溶液中，Na+ 在阴极最活跃，首先被还原。",
          "ku": "Di çareseriya avî de, Na+, ku li katodê herî çalak e, pêşî kêm dibe."
        },
        {
          "tr": "Kurban elektrot olarak korunacak metalden daha pasif bir metal seçilmelidir.",
          "en": "A more passive metal than the metal to be protected should be chosen as the sacrificial electrode.",
          "de": "Als Opferelektrode sollte ein passiveres Metall als das zu schützende Metall gewählt werden.",
          "fr": "Un métal plus passif que le métal à protéger doit être choisi comme électrode sacrificielle.",
          "ru": "В качестве жертвующего электрода следует выбрать более пассивный металл, чем защищаемый металл.",
          "ar": "يجب اختيار فلز أقل نشاطًا من الفلز المراد حمايته ليكون القطب المضحّي.",
          "zh": "应选择比被保护金属更惰性的金属作为牺牲电极。",
          "ku": "Pêdivî ye ku ji metalê ku were parastin metalek pasîftir wekî elektrodê qurban were hilbijartin."
        },
        {
          "tr": "Downs hücresi erimiş NaCl'den metalik sodyum üretimi için kullanılan endüstriyel elektroliz hücresidir.",
          "en": "Downs cell is an industrial electrolysis cell used for the production of metallic sodium from molten NaCl.",
          "de": "Die Downs-Zelle ist eine industrielle Elektrolysezelle zur Herstellung von metallischem Natrium aus geschmolzenem NaCl.",
          "fr": "La cellule Downs est une cellule d'électrolyse industrielle utilisée pour la production de sodium métallique à partir de NaCl fondu.",
          "ru": "Ячейка Даунса — это промышленная электролитическая ячейка, используемая для производства металлического натрия из расплавленного NaCl.",
          "ar": "خلية داونز هي خلية تحليل كهربائي صناعية تستخدم لإنتاج الصوديوم المعدني من كلوريد الصوديوم المنصهر.",
          "zh": "唐斯槽是一种工业电解槽，用于从熔融氯化钠生产金属钠。",
          "ku": "Hucreya Downs şaneyek elektrolîzek pîşesaziyê ye ku ji bo hilberîna sodyûmê metalî ya ji NaCl-ya şilkirî tê bikar anîn."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Downs hücresi erimiş NaCl'den metalik sodyum üretimi için kullanılan endüstriyel elektroliz hücresidir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Downs cell is an industrial electrolysis cell used for the production of metallic sodium from molten NaCl.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Downs-Zelle ist eine industrielle Elektrolysezelle zur Herstellung von metallischem Natrium aus geschmolzenem NaCl.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La cellule Downs est une cellule d'électrolyse industrielle utilisée pour la production de sodium métallique à partir de NaCl fondu.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Ячейка Даунса — это промышленная электролитическая ячейка, используемая для производства металлического натрия из расплавленного NaCl.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"خلية داونز هي خلية تحليل كهربائي صناعية تستخدم لإنتاج الصوديوم المعدني من كلوريد الصوديوم المنصهر.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“唐斯槽是一种工业电解槽，用于从熔融氯化钠生产金属钠。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hucreya Downs şaneyek elektrolîzek pîşesaziyê ye ku ji bo hilberîna sodyûmê metalî ya ji NaCl-ya şilkirî tê bikar anîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u22-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimya ve Elektrik: Elektroliz ve Korozyon konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Electrochemistry: Electrolysis & Corrosion, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Elektrolyse & Korrosion die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Électrolyse & Corrosion, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Электролиз и коррозия», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"التحليل الكهربائي والتآكل\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“电解与腐蚀”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Elektrolîz û Korozyon\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Demir bir boruyu korozyondan korumak için magnezyum bloğu bağlanması aktiflik farkına dayalı kurban elektrot uygulamasıdır.",
          "en": "Connecting a magnesium block to an iron pipe to protect it from corrosion is a sacrificial-electrode application based on the difference in activity.",
          "de": "Das leitende Verbinden eines Magnesiumblocks mit einem Eisenrohr zum Korrosionsschutz ist eine Anwendung der Opferelektrode, die auf dem Aktivitätsunterschied beruht.",
          "fr": "Relier électriquement un bloc de magnésium à un tuyau en fer pour le protéger de la corrosion est une application de l'électrode sacrificielle fondée sur la différence d'activité.",
          "ru": "Подключение магниевого блока к железной трубе для защиты от коррозии — это применение жертвенного электрода, основанное на разнице активности металлов.",
          "ar": "إن ربط كتلة من المغنيسيوم لحماية أنبوب حديدي من التآكل هو تطبيق قطب كهربائي مضحٍ يعتمد على اختلاف النشاط.",
          "zh": "将镁块用导线与铁管相连以防止铁管腐蚀，是基于金属活动性差异的牺牲电极应用。",
          "ku": "Girêdana bloka magnesiumê ji bo parastina boriyek hesin ji korozyonê serîlêdanek elektrodê ya qurbanî ye ku li ser bingeha cûdahiya çalakiyê ye."
        },
        {
          "tr": "1 Faraday elektrik yükü 1 Coulomb'a eşittir.",
          "en": "1 Faraday electric charge is equal to 1 Coulomb.",
          "de": "1 Faradaysche elektrische Ladung entspricht 1 Coulomb.",
          "fr": "1 charge électrique Faraday équivaut à 1 Coulomb.",
          "ru": "1 электрический заряд Фарадея равен 1 Кулону.",
          "ar": "1 شحنة فاراداي الكهربائية تساوي 1 كولوم.",
          "zh": "1 法拉第电荷等于 1 库仑。",
          "ku": "1 Bara elektrîkê ya Faraday bi 1 Coulomb re ye."
        },
        {
          "tr": "Suyun elektrolizinde anotta katottan 2 kat daha fazla gaz toplanır.",
          "en": "In the electrolysis of water, twice as much gas is collected at the anode than at the cathode.",
          "de": "Bei der Elektrolyse von Wasser wird an der Anode doppelt so viel Gas gesammelt wie an der Kathode.",
          "fr": "Lors de l’électrolyse de l’eau, deux fois plus de gaz sont collectés à l’anode qu’à la cathode.",
          "ru": "При электролизе воды на аноде собирается в два раза больше газа, чем на катоде.",
          "ar": "في التحليل الكهربائي للمياه، يتم جمع ضعف كمية الغاز عند القطب الموجب مقارنة بالكاثود.",
          "zh": "在水的电解中，阳极收集的气体是阴极收集的气体的两倍。",
          "ku": "Di elektrolîza avê de li anodê du qat zêdetir gaz ji katodê tê komkirin."
        },
        {
          "tr": "Anotta yükseltgenme potansiyeli en küçük olan anyon önce çıkar.",
          "en": "The anion with the smallest oxidation potential at the anode emerges first.",
          "de": "Das Anion mit dem kleinsten Oxidationspotential an der Anode entsteht zuerst.",
          "fr": "L’anion ayant le plus petit potentiel d’oxydation à l’anode émerge en premier.",
          "ru": "Первым на аноде выходит анион с наименьшим окислительным потенциалом.",
          "ar": "يتأكسد أولًا عند الأنود الأنيون ذو جهد التأكسد الأصغر.",
          "zh": "阳极氧化电位最小的阴离子首先出现。",
          "ku": "Anyona xwedan potansiyela oksîdasyonê ya herî piçûk li anodê pêşî derdikeve holê."
        },
        {
          "tr": "Kaplanacak eşya anota bağlanmalıdır.",
          "en": "The item to be coated must be connected to the anode.",
          "de": "Der zu beschichtende Gegenstand muss an die Anode angeschlossen werden.",
          "fr": "L'élément à revêtir doit être connecté à l'anode.",
          "ru": "Изделие, на которое будет нанесено покрытие, должно быть соединено с анодом.",
          "ar": "يجب أن يكون العنصر المراد طلاؤه متصلاً بالأنود.",
          "zh": "待涂覆的物品必须连接到阳极。",
          "ku": "Tiştê ku tê pêçandin divê bi anodê ve were girêdan."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Demir bir boruyu korozyondan korumak için magnezyum bloğu bağlanması aktiflik farkına dayalı kurban elektrot uygulamasıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Connecting a magnesium block to an iron pipe to protect it from corrosion is a sacrificial-electrode application based on the difference in activity.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Das leitende Verbinden eines Magnesiumblocks mit einem Eisenrohr zum Korrosionsschutz ist eine Anwendung der Opferelektrode, die auf dem Aktivitätsunterschied beruht.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Relier électriquement un bloc de magnésium à un tuyau en fer pour le protéger de la corrosion est une application de l'électrode sacrificielle fondée sur la différence d'activité.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Подключение магниевого блока к железной трубе для защиты от коррозии — это применение жертвенного электрода, основанное на разнице активности металлов.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إن ربط كتلة من المغنيسيوم لحماية أنبوب حديدي من التآكل هو تطبيق قطب كهربائي مضحٍ يعتمد على اختلاف النشاط.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“将镁块用导线与铁管相连以防止铁管腐蚀，是基于金属活动性差异的牺牲电极应用。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Girêdana bloka magnesiumê ji bo parastina boriyek hesin ji korozyonê serîlêdanek elektrodê ya qurbanî ye ku li ser bingeha cûdahiya çalakiyê ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit22;
