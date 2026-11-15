import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit24: ChemistryUnitSeedData = {
  "id": "u24",
  "order": 24,
  "exam": "AYT",
  "grade": 12,
  "title": {
    "tr": "Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar",
    "en": "Organic Compounds: Hydrocarbons",
    "de": "Organische Verbindungen & Kohlenwasserstoffe",
    "fr": "Composés Organiques & Hydrocarbures",
    "ru": "Органические соединения и функциональные группы",
    "ar": "المركبات العضوية والهيدروكربونات",
    "zh": "有机化合物与官能团",
    "ku": "Madeyên Organîk û Komên Fonksiyonel"
  },
  "subtitle": {
    "tr": "Alkan, Alken, Alkin, Alkol, Ester ve Markovnikov",
    "en": "Nomenclature, Isomerism, Reactions & Tests",
    "de": "Alkan, Alken, Alkin, Alkohol, Ester und Markownikow",
    "fr": "Alcane, alcène, alcyne, alcool, ester et Markovnikov",
    "ru": "Алкан, Алкен, Алкин, Спирт, Эфир и Марковник",
    "ar": "ألكان، ألكين، ألكاين، كحول، إستر وماركوفنيكوف",
    "zh": "烷烃、烯烃、炔烃、醇、酯和马可夫尼科夫",
    "ku": "Alkan, Alkene, Alkyne, Alkol, Ester û Markovnikov"
  },
  "facts": [
    {
      "id": "u24-f01",
      "fact": {
        "tr": "Alkanlar (parafinler, CnH2n+2) doymuş hidrokarbonlardır; sadece sigma bağı içerir ve katılma tepkimesi VERMEZ.",
        "en": "Alkanes (paraffins, CnH2n+2) are saturated hydrocarbons; It contains only sigma bonds and DOES NOT give an addition reaction.",
        "de": "Alkane (Paraffine, CnH2n+2) sind gesättigte Kohlenwasserstoffe; Es enthält nur Sigma-Bindungen und führt KEINE Additionsreaktion durch.",
        "fr": "Les alcanes (paraffines, CnH2n+2) sont des hydrocarbures saturés ; Il ne contient que des liaisons sigma et NE donne PAS de réaction d’addition.",
        "ru": "Алканы (парафины, CnH2n+2) – предельные углеводороды; Он содержит только сигма-связи и НЕ дает реакции присоединения.",
        "ar": "الألكانات (البارافينات، CnH2n+2) عبارة عن هيدروكربونات مشبعة؛ أنه يحتوي فقط على روابط سيجما ولا يعطي رد فعل إضافي.",
        "zh": "烷烃（石蜡，CnH2n+2）是饱和烃；它仅包含西格玛键并且不发生加成反应。",
        "ku": "Alkan (parafîn, CnH2n+2) hîdrokarbonên têrbûyî ne; Ew tenê girêdanên sigma dihewîne û reaksiyonek lêzêdekirinê NADE."
      },
      "trap": {
        "tr": "Alkanlar bromlu suyun kırmızı rengini hızla giderir.",
        "en": "Alkanes quickly remove the red color of brominated water.",
        "de": "Alkane entfernen schnell die rote Farbe von bromiertem Wasser.",
        "fr": "Les alcanes éliminent rapidement la couleur rouge de l'eau bromée.",
        "ru": "Алканы быстро удаляют красный цвет бромированной воды.",
        "ar": "تقوم الألكانات بإزالة اللون الأحمر للمياه المبرومة بسرعة.",
        "zh": "烷烃可以快速去除溴化水的红色。",
        "ku": "Alkan bi lez rengê sor yê ava bromînê jê dikin."
      }
    },
    {
      "id": "u24-f02",
      "fact": {
        "tr": "Alkenler (olefinler, CnH2n) en az bir ikili bağ (C=C) içerir; katılma ve polimerleşme tepkimesi verir.",
        "en": "Alkenes (olefins, CnH2n) contain at least one double bond (C=C); It gives addition and polymerization reaction.",
        "de": "Alkene (Olefine, CnH2n) enthalten mindestens eine Doppelbindung (C=C); Es führt zu einer Additions- und Polymerisationsreaktion.",
        "fr": "Les alcènes (oléfines, CnH2n) contiennent au moins une double liaison (C=C) ; Il donne une réaction d'addition et de polymérisation.",
        "ru": "Алкены (олефины, CnH2n) содержат хотя бы одну двойную связь (C=C); Дает реакции присоединения и полимеризации.",
        "ar": "تحتوي الألكينات (الأوليفينات، CnH2n) على رابطة مزدوجة واحدة على الأقل (C=C)؛ أنه يعطي رد فعل بالإضافة والبلمرة.",
        "zh": "烯烃（olefins，CnH2n）含有至少一个双键（C=C）；发生加成和聚合反应。",
        "ku": "Alken (olefîn, CnH2n) herî kêm girêdanek ducarî dihewîne (C=C); Ew reaksiyona zêdebûn û polîmerîzasyonê dide."
      },
      "trap": {
        "tr": "Alkenler doymuş hidrokarbonlar sınıfındadır.",
        "en": "Alkenes are in the class of saturated hydrocarbons.",
        "de": "Alkene gehören zur Klasse der gesättigten Kohlenwasserstoffe.",
        "fr": "Les alcènes appartiennent à la classe des hydrocarbures saturés.",
        "ru": "Алкены относятся к классу предельных углеводородов.",
        "ar": "تنتمي الألكينات إلى فئة الهيدروكربونات المشبعة.",
        "zh": "烯烃属于饱和烃类。",
        "ku": "Alken di çîna hîdrokarbonên têrbûyî de ne."
      }
    },
    {
      "id": "u24-f03",
      "fact": {
        "tr": "Markovnikov Kuralı: Asimetrik alkenlere HX katılırken H atomu hidrojeni ÇOK olan karbona, X atomu hidrojeni AZ olan karbona bağlanır.",
        "en": "Markovnikov's Rule: When HX is added to asymmetric alkenes, the H atom is bonded to the carbon with MORE hydrogen, and the X atom is bonded to the carbon with LESS hydrogen.",
        "de": "Markownikows Regel: Wenn HX zu asymmetrischen Alkenen hinzugefügt wird, wird das H-Atom mit MEHR Wasserstoff an den Kohlenstoff gebunden, und das X-Atom wird mit WENIGER Wasserstoff an den Kohlenstoff gebunden.",
        "fr": "Règle de Markovnikov : lorsque HX est ajouté à des alcènes asymétriques, l'atome H est lié au carbone avec PLUS d'hydrogène et l'atome X est lié au carbone avec MOINS d'hydrogène.",
        "ru": "Правило Марковникова: когда HX добавляется к асимметричным алкенам, атом H связан с углеродом с БОЛЬШИМ водородом, а атом X связан с углеродом с МЕНЬШИМ водородом.",
        "ar": "قاعدة ماركونيكوف: عند إضافة HX إلى الألكينات غير المتماثلة، ترتبط ذرة H بالكربون الذي يحتوي على المزيد من الهيدروجين، وترتبط ذرة X بالكربون الذي يحتوي على كمية أقل من الهيدروجين.",
        "zh": "马尔可夫尼科夫规则：当HX添加到不对称烯烃中时，H原子与具有更多氢的碳键合，而X原子与具有较少氢的碳键合。",
        "ku": "Rêbaza Markovnikov: Dema ku HX li alkenên asîmetrîk tê zêdekirin, atoma H bi karbonê re bi HÎdrojena ZÊDETIR, û atoma X bi karbonê bi hîdrojena KÊMT re tê girêdan."
      },
      "trap": {
        "tr": "Katılma tepkimesinde hidrojen daima hidrojeni az olan karbona bağlanır.",
        "en": "In the addition reaction, hydrogen is always bonded to the carbon with less hydrogen.",
        "de": "Bei der Additionsreaktion wird immer Wasserstoff an den Kohlenstoff mit weniger Wasserstoff gebunden.",
        "fr": "Dans la réaction d’addition, l’hydrogène est toujours lié au carbone avec moins d’hydrogène.",
        "ru": "В реакции присоединения водород всегда связан с углеродом с меньшим количеством водорода.",
        "ar": "في تفاعل الإضافة، يرتبط الهيدروجين دائمًا بالكربون الذي يحتوي على كمية أقل من الهيدروجين.",
        "zh": "在加成反应中，氢总是与氢含量较少的碳键合。",
        "ku": "Di reaksiyona pêvekirinê de, hîdrojen her gav bi karbonê re bi hîdrojenê kêmtir ve girêdayî ye."
      },
      "osymTip": {
        "tr": "Zengin daha zengin olur kuralı: Hidrojen çok olana H gider!",
        "en": "The rich get richer rule: H goes to the one who has more hydrogen!",
        "de": "Die Reiche werden reicher Regel: H geht an den, der mehr Wasserstoff hat!",
        "fr": "Règle des riches s’enrichissent : H va à celui qui a le plus d’hydrogène !",
        "ru": "Правило богатых богатеет: H достаётся тому, у кого больше водорода!",
        "ar": "قاعدة الأغنياء يصبحون أكثر ثراء: H يذهب إلى الشخص الذي لديه المزيد من الهيدروجين!",
        "zh": "富者愈富的规则：氢归拥有更多氢的人！",
        "ku": "Desthilatdariya dewlemend dewlemendtir dibe: H diçe ba yê ku hîdrojenê wî zêde heye!"
      }
    },
    {
      "id": "u24-f04",
      "fact": {
        "tr": "Alkenler ve alkinler bromlu suyun (Br2/CCl4) kırmızı-kahverengi rengini soğukta giderir (doymamışlık testi).",
        "en": "Alkenes and alkynes remove the red-brown color of brominated water (Br2/CCl4) on cold (unsaturation test).",
        "de": "Alkene und Alkine entfernen die rotbraune Farbe von bromiertem Wasser (Br2/CCl4) bei Kälte (Unsättigungstest).",
        "fr": "Les alcènes et alcynes enlèvent la couleur rouge-brun de l'eau bromée (Br2/CCl4) à froid (test d'insaturation).",
        "ru": "Алкены и алкины удаляют красно-коричневую окраску бромированной воды (Br2/CCl4) на холоду (испытание на ненасыщенность).",
        "ar": "تقوم الألكينات والألكاينات بإزالة اللون البني المحمر من الماء المبروم (Br2/CCl4) عند البرد (اختبار عدم التشبع).",
        "zh": "烯烃和炔烃在冷时消除溴化水 (Br2/CCl4) 的红棕色（不饱和度测试）。",
        "ku": "Alken û alkîn rengê sor-qehweyî yê ava bromînkirî (Br2/CCl4) di sermayê de (ceribandina têrbûnê) jê dikin."
      },
      "trap": {
        "tr": "Alkanlar bromlu suyun rengini hemen giderir.",
        "en": "Alkanes quickly decolorize brominated water.",
        "de": "Alkane entfärben bromiertes Wasser schnell.",
        "fr": "Les alcanes décolorent rapidement l'eau bromée.",
        "ru": "Алканы быстро обесцвечивают бромированную воду.",
        "ar": "تعمل الألكانات على إزالة اللون من الماء المبروم بسرعة.",
        "zh": "烷烃可以快速使溴化水脱色。",
        "ku": "Alkan bi lez ava bromînkirî dereng dikin."
      }
    },
    {
      "id": "u24-f05",
      "fact": {
        "tr": "Alkinler (asetilenler, CnH2n-2) en az bir üçlü bağ içerir; uç alkinler Tollens (Ag+) ile beyaz, Fehling (Cu+) ile kırmızı çökelek verir.",
        "en": "Alkynes (acetylenes, CnH2n-2) contain at least one triple bond; Terminal alkynes give white precipitates with Tollens (Ag+) and red precipitates with Fehlings (Cu+).",
        "de": "Alkine (Acetylene, CnH2n-2) enthalten mindestens eine Dreifachbindung; Terminale Alkine ergeben weiße Niederschläge mit Tollens (Ag+) und rote Niederschläge mit Fehlings (Cu+).",
        "fr": "Les alcynes (acétylènes, CnH2n-2) contiennent au moins une triple liaison ; Les alcynes terminaux donnent des précipités blancs avec les Tollens (Ag+) et rouges avec les Fehlings (Cu+).",
        "ru": "Алкины (ацетилены, CnH2n-2) содержат хотя бы одну тройную связь; Концевые алкины дают белые осадки с Толленами (Ag+) и красные осадки с Фелингами (Cu+).",
        "ar": "تحتوي الألكينات (الأسيتيلين، CnH2n-2) على رابطة ثلاثية واحدة على الأقل؛ الألكينات الطرفية تعطي رواسب بيضاء مع تولنز (Ag+) ورواسب حمراء مع فهلينغز (Cu+).",
        "zh": "炔烃（乙炔，CnH2n-2）含有至少一个三键；末端炔烃与托伦斯 (Ag+) 产生白色沉淀，与费林斯 (Cu+) 产生红色沉淀。",
        "ku": "Alkines (acetylenes, CnH2n-2) bi kêmanî yek girêdana sê-sêyan heye; Alkînên termînalê bi Tollens (Ag+) û barîna sor bi Fehlings (Cu+) baranê spî didin."
      },
      "trap": {
        "tr": "İç alkinler Tollens belirteciyle çökelek verir.",
        "en": "Internal alkynes precipitate with the Tollens reagent.",
        "de": "Interne Alkine fallen mit dem Tollens-Reagenz aus.",
        "fr": "Les alcynes internes précipitent avec le réactif de Tollens.",
        "ru": "Внутренние алкины осаждаются реактивом Толленса.",
        "ar": "تترسب الألكينات الداخلية مع كاشف تولنس.",
        "zh": "内部炔烃与 Tollens 试剂一起沉淀。",
        "ku": "Alkînên hundirîn bi reagenta Tollens dibarin."
      }
    },
    {
      "id": "u24-f06",
      "fact": {
        "tr": "Aromatik bileşiklerin atası benzendir (C6H6); Kekule rezonans yapısına sahiptir, çok kararlıdır ve katılma tepkimesine isteksizdir.",
        "en": "The ancestor of aromatic compounds is benzene (C6H6); Kekule has a resonance structure, is very stable and is reluctant to undergo addition reactions.",
        "de": "Der Vorfahre aromatischer Verbindungen ist Benzol (C6H6); Kekule hat eine Resonanzstruktur, ist sehr stabil und geht nur ungern Additionsreaktionen ein.",
        "fr": "L'ancêtre des composés aromatiques est le benzène (C6H6) ; Kekule a une structure de résonance, est très stable et hésite à subir des réactions d'addition.",
        "ru": "Предком ароматических соединений является бензол (C6H6); Кекуле имеет резонансную структуру, очень стабилен и неохотно вступает в реакции присоединения.",
        "ar": "سلف المركبات العطرية هو البنزين (C6H6)؛ يتمتع Kekule ببنية رنينية، وهو مستقر للغاية ولا يرغب في الخضوع لتفاعلات إضافية.",
        "zh": "芳香族化合物的祖先是苯（C6H6）；凯库勒具有共振结构，非常稳定，不易发生加成反应。",
        "ku": "Bavê pêkhateyên aromatîk benzen (C6H6) e; Kekule xwedan avahiyek rezonansê ye, pir bi îstîqrar e û ji ber reaksiyonên zêdebûnê nerazî ye."
      },
      "trap": {
        "tr": "Benzen üç tane normal alken gibi kolayca bromlu suyu giderir.",
        "en": "Benzene readily removes brominated water, as do the three normal alkenes.",
        "de": "Benzol entfernt leicht bromiertes Wasser, ebenso wie die drei normalen Alkene.",
        "fr": "Le benzène élimine facilement l'eau bromée, tout comme les trois alcènes normaux.",
        "ru": "Бензол легко удаляет бромированную воду, как и три нормальных алкена.",
        "ar": "يزيل البنزين الماء المبروم بسهولة، كما تفعل الألكينات الطبيعية الثلاثة.",
        "zh": "与三种普通烯烃一样，苯很容易去除溴化水。",
        "ku": "Benzene bi hêsanî ava bromînkirî radike, wekî sê alkenên normal."
      }
    },
    {
      "id": "u24-f07",
      "fact": {
        "tr": "Alkoller (R-OH) molekülleri arasında hidrojen bağı kurar; aynı karbonlu eterlerden kaynama noktaları çok daha yüksektir.",
        "en": "Alcohols (R-OH) form hydrogen bonds between molecules; Their boiling points are much higher than ethers with the same carbon.",
        "de": "Alkohole (R-OH) bilden Wasserstoffbrückenbindungen zwischen Molekülen; Ihre Siedepunkte sind viel höher als die von Ethern mit demselben Kohlenstoff.",
        "fr": "Les alcools (R-OH) forment des liaisons hydrogène entre les molécules ; Leurs points d'ébullition sont bien plus élevés que ceux des éthers ayant le même carbone.",
        "ru": "Спирты (R-OH) образуют водородные связи между молекулами; Их температуры кипения значительно выше, чем у эфиров с тем же углеродом.",
        "ar": "تشكل الكحولات (R-OH) روابط هيدروجينية بين الجزيئات؛ درجة غليانها أعلى بكثير من الإيثرات التي لها نفس الكربون.",
        "zh": "醇（R-OH）分子间形成氢键；它们的沸点比相同碳的醚高得多。",
        "ku": "Alkol (R-OH) di navbera molekulan de girêkên hîdrojenê çêdikin; Xalên kelandinê yên wan ji eterên bi heman karbonê pir bilindtir in."
      },
      "trap": {
        "tr": "Eterlerin kaynama noktası alkollerden daha yüksektir.",
        "en": "Ethers have a higher boiling point than alcohols.",
        "de": "Ether haben einen höheren Siedepunkt als Alkohole.",
        "fr": "Les éthers ont un point d'ébullition plus élevé que les alcools.",
        "ru": "Эфиры имеют более высокую температуру кипения, чем спирты.",
        "ar": "الإيثرات لها درجة غليان أعلى من الكحولات.",
        "zh": "醚的沸点高于醇。",
        "ku": "Eter ji alkolan xwedî nuqteya kelandinê ye."
      }
    },
    {
      "id": "u24-f08",
      "fact": {
        "tr": "Primer alkoller bir basamak yükseltgenince aldehit, iki basamak yükseltgenince karboksilik asit oluşturur.",
        "en": "Primary alcohols form aldehydes when oxidized one step, and carboxylic acids when oxidized two steps.",
        "de": "Primäre Alkohole bilden Aldehyde, wenn sie in einem Schritt oxidiert werden, und Carbonsäuren, wenn sie in zwei Schritten oxidiert werden.",
        "fr": "Les alcools primaires forment des aldéhydes lorsqu'ils sont oxydés en une étape et des acides carboxyliques lorsqu'ils sont oxydés en deux étapes.",
        "ru": "Первичные спирты при одностадийном окислении образуют альдегиды, а при двухступенчатом окислении карбоновые кислоты.",
        "ar": "تشكل الكحولات الأولية الألدهيدات عند أكسدتها بخطوة واحدة، والأحماض الكربوكسيلية عند أكسدتها بخطوتين.",
        "zh": "伯醇在一步氧化时形成醛，在氧化两步时形成羧酸。",
        "ku": "Alkolên seretayî dema ku yek gav oksîde dibin aldehîd û dema ku du gavan têne oksîdan asîdên karboksîlîk ava dikin."
      },
      "trap": {
        "tr": "Tersiyer alkoller kolayca yükseltgenerek keton verir.",
        "en": "Tertiary alcohols are easily oxidized to give ketones.",
        "de": "Tertiäre Alkohole werden leicht zu Ketonen oxidiert.",
        "fr": "Les alcools tertiaires sont facilement oxydés pour donner des cétones.",
        "ru": "Третичные спирты легко окисляются с образованием кетонов.",
        "ar": "تتأكسد الكحولات الثلاثية بسهولة لتعطي الكيتونات.",
        "zh": "叔醇很容易被氧化生成酮。",
        "ku": "Alkolên sêyemîn bi hêsanî têne oksîd kirin da ku ketonan bidin."
      }
    },
    {
      "id": "u24-f09",
      "fact": {
        "tr": "Sekonder alkoller yükseltgenerek keton oluşturur; tersiyer alkoller yükseltgenmeye karşı dirençlidir.",
        "en": "Secondary alcohols are oxidized to form ketones; tertiary alcohols are resistant to oxidation.",
        "de": "Sekundäre Alkohole werden zu Ketonen oxidiert; Tertiäre Alkohole sind oxidationsbeständig.",
        "fr": "Les alcools secondaires sont oxydés pour former des cétones ; les alcools tertiaires résistent à l'oxydation.",
        "ru": "Вторичные спирты окисляются с образованием кетонов; третичные спирты устойчивы к окислению.",
        "ar": "تتأكسد الكحولات الثانوية لتكوين الكيتونات. الكحولات الثلاثية مقاومة للأكسدة.",
        "zh": "仲醇被氧化生成酮；叔醇具有抗氧化性。",
        "ku": "Alkolên duyemîn têne oksîd kirin ku ketonan çêbikin; alkolên sêyem li hember oksîdasyonê berxwedêr in."
      },
      "trap": {
        "tr": "Ketonlar daha ileri yükseltgenerek esterlere dönüşür.",
        "en": "Ketones are further oxidized to esters.",
        "de": "Ketone werden weiter zu Estern oxidiert.",
        "fr": "Les cétones sont ensuite oxydées en esters.",
        "ru": "Кетоны далее окисляются до сложных эфиров.",
        "ar": "تتأكسد الكيتونات أيضًا إلى استرات.",
        "zh": "酮进一步氧化成酯。",
        "ku": "Ketone bêtir ji bo esteran têne oksîd kirin."
      }
    },
    {
      "id": "u24-f10",
      "fact": {
        "tr": "Aldehitler (R-CHO) Tollens reaktifi ile gümüş aynası, Fehling çözeltisi ile kırmızı Cu2O çökeleği oluşturur; ketonlar bu tepkimeyi vermez.",
        "en": "Aldehydes (R-CHO) form a silver mirror with Tollens' reagent and a red Cu2O precipitate with Fehling's solution; Ketones do not give this reaction.",
        "de": "Aldehyde (R-CHO) bilden mit Tollens-Reagenz einen silbernen Spiegel und mit Fehling-Lösung einen roten Cu2O-Niederschlag; Ketone lösen diese Reaktion nicht aus.",
        "fr": "Les aldéhydes (R-CHO) forment un miroir d'argent avec le réactif de Tollens et un précipité rouge de Cu2O avec la solution de Fehling ; Les cétones ne donnent pas cette réaction.",
        "ru": "Альдегиды (R-CHO) образуют серебряное зеркало с реактивом Толленса и красный осадок Cu2O с раствором Фелинга; Кетоны не дают такой реакции.",
        "ar": "تشكل الألدهيدات (R-CHO) مرآة فضية مع كاشف تولنز وترسب Cu2O أحمر مع محلول فهلنج؛ الكيتونات لا تعطي هذا التفاعل.",
        "zh": "醛（R-CHO）与托伦斯试剂形成银镜，与费林溶液形成红色 Cu2O 沉淀；酮不会发生这种反应。",
        "ku": "Aldehîd (R-CHO) bi reagenta Tollens re neynika zîvîn û bi çareseriya Fehling re jî barîna Cu2O ya sor ava dike; Keton vê reaksiyonê nade."
      },
      "trap": {
        "tr": "Aseton (keton) Tollens reaktifiyle gümüş aynası verir.",
        "en": "Acetone (ketone) gives silver mirror with Tollens reagent.",
        "de": "Aceton (Keton) ergibt mit Tollens-Reagenz einen Silberspiegel.",
        "fr": "L'acétone (cétone) donne un miroir argenté avec le réactif Tollens.",
        "ru": "Ацетон (кетон) дает серебряное зеркало с реактивом Толленса.",
        "ar": "الأسيتون (الكيتون) يعطي مرآة فضية مع كاشف تولنس.",
        "zh": "丙酮（酮）与托伦斯试剂反应生成银镜。",
        "ku": "Aceton (ketone) bi reagenta Tollens neynika zîv dide."
      }
    },
    {
      "id": "u24-f11",
      "fact": {
        "tr": "Karboksilik asitler (R-COOH) alkollerle asit katalizörlüğünde tepkimeye girerek hoş kokulu esterleri (R-COO-R') oluşturur (esterleşme).",
        "en": "Carboxylic acids (R-COOH) react with alcohols under acid catalysis to form fragrant esters (R-COO-R') (esterification).",
        "de": "Carbonsäuren (R-COOH) reagieren mit Alkoholen unter Säurekatalyse zu duftenden Estern (R-COO-R') (Veresterung).",
        "fr": "Les acides carboxyliques (R-COOH) réagissent avec les alcools sous catalyse acide pour former des esters parfumés (R-COO-R') (estérification).",
        "ru": "Карбоновые кислоты (R-COOH) реагируют со спиртами в условиях кислотного катализа с образованием ароматных эфиров (R-COO-R') (этерификация).",
        "ar": "تتفاعل الأحماض الكربوكسيلية (R-COOH) مع الكحولات تحت التحفيز الحمضي لتكوين استرات عطرة (R-COO-R') (الأسترة).",
        "zh": "羧酸（R-COOH）在酸催化下与醇反应生成芳香酯（R-COO-R'）（酯化）。",
        "ku": "Asîdên karboksîlîk (R-COOH) di bin katalîzasyona asîdê de bi alkolan re reaksiyonê dikin û esterên bîhnxweş (R-COO-R') çê dikin (esterîkirin)."
      },
      "trap": {
        "tr": "Esterleşme tepkimesinde baz katalizörlüğünde tuz açığa çıkar.",
        "en": "In the esterification reaction, salt is released under base catalyst.",
        "de": "Bei der Veresterungsreaktion wird unter basischem Katalysator Salz freigesetzt.",
        "fr": "Dans la réaction d’estérification, le sel est libéré sous un catalyseur basique.",
        "ru": "В реакции этерификации соль выделяется под основным катализатором.",
        "ar": "في تفاعل الأسترة، يتم إطلاق الملح تحت المحفز الأساسي.",
        "zh": "在酯化反应中，在碱催化剂的作用下释放出盐。",
        "ku": "Di reaksiyona esterîfîkasyonê de, xwê di bin katalîzatora bingehîn de tê berdan."
      }
    },
    {
      "id": "u24-f12",
      "fact": {
        "tr": "Karboksilik asit molekülleri kendi aralarında çift hidrojen bağı (dimer) oluşturduğundan kaynama noktaları oldukça yüksektir.",
        "en": "Since carboxylic acid molecules form double hydrogen bonds (dimers) among themselves, their boiling points are quite high.",
        "de": "Da Carbonsäuremoleküle untereinander doppelte Wasserstoffbrückenbindungen (Dimere) bilden, sind ihre Siedepunkte recht hoch.",
        "fr": "Étant donné que les molécules d'acide carboxylique forment entre elles des doubles liaisons hydrogène (dimères), leurs points d'ébullition sont assez élevés.",
        "ru": "Поскольку молекулы карбоновых кислот образуют между собой двойные водородные связи (димеры), их температуры кипения достаточно высоки.",
        "ar": "نظرًا لأن جزيئات حمض الكربوكسيل تشكل روابط هيدروجينية مزدوجة (ثنائية) فيما بينها، فإن نقاط غليانها تكون عالية جدًا.",
        "zh": "由于羧酸分子之间形成双氢键（二聚体），因此它们的沸点相当高。",
        "ku": "Ji ber ku molekulên asîda karboksîlîk di nav xwe de dubendên hîdrojenê (dimer) çêdikin, xalên kelandinê yên wan pir zêde ne."
      },
      "trap": {
        "tr": "Karboksilik asitlerin kaynama noktası hidrokarbonlardan düşüktür.",
        "en": "The boiling point of carboxylic acids is lower than hydrocarbons.",
        "de": "Der Siedepunkt von Carbonsäuren ist niedriger als der von Kohlenwasserstoffen.",
        "fr": "Le point d'ébullition des acides carboxyliques est inférieur à celui des hydrocarbures.",
        "ru": "Температура кипения карбоновых кислот ниже, чем у углеводородов.",
        "ar": "درجة غليان الأحماض الكربوكسيلية أقل من درجة غليان الهيدروكربونات.",
        "zh": "羧酸的沸点比烃低。",
        "ku": "Xala kelandinê ya asîdên karboksîlî ji hîdrokarbonan kêmtir e."
      }
    },
    {
      "id": "u24-f13",
      "fact": {
        "tr": "Aynı karbon sayılı monoalkoller ile eterler birbirinin fonksiyonel grup izomeridir (örn. Etanol C2H5OH ve Dimetil eter CH3-O-CH3).",
        "en": "Monoalcohols and ethers with the same carbon number are functional group isomers of each other (e.g. Ethanol C2H5OH and Dimethyl ether CH3-O-CH3).",
        "de": "Monoalkohole und Ether mit der gleichen Kohlenstoffzahl sind funktionelle Gruppenisomere voneinander (z. B. Ethanol C2H5OH und Dimethylether CH3-O-CH3).",
        "fr": "Les monoalcools et les éthers ayant le même nombre de carbones sont des isomères de groupes fonctionnels les uns des autres (par exemple l'éthanol C2H5OH et l'éther diméthylique CH3-O-CH3).",
        "ru": "Моноспирты и простые эфиры с одинаковым числом атомов углерода являются изомерами функциональных групп друг друга (например, этанол C2H5OH и диметиловый эфир CH3-O-CH3).",
        "ar": "الكحولات الأحادية والإيثرات التي لها نفس رقم الكربون هي أيزومرات مجموعة وظيفية لبعضها البعض (مثل الإيثانول C2H5OH وثنائي ميثيل إيثر CH3-O-CH3).",
        "zh": "具有相同碳数的一元醇和醚是彼此的官能团异构体（例如乙醇C2H5OH和二甲醚CH3-O-CH3）。",
        "ku": "Monoalkol û etherên bi heman hejmara karbonê îzomerên koma fonksiyonel ên hev in (mînak Etanol C2H5OH û Dimetîl ether CH3-O-CH3)."
      },
      "trap": {
        "tr": "Etanol ve dimetil eter aynı kimyasal özelliklere sahiptir.",
        "en": "Ethanol and dimethyl ether have the same chemical properties.",
        "de": "Ethanol und Dimethylether haben die gleichen chemischen Eigenschaften.",
        "fr": "L'éthanol et l'éther diméthylique ont les mêmes propriétés chimiques.",
        "ru": "Этанол и диметиловый эфир имеют одинаковые химические свойства.",
        "ar": "الإيثانول وثنائي ميثيل الأثير لهما نفس الخصائص الكيميائية.",
        "zh": "乙醇和二甲醚具有相同的化学性质。",
        "ku": "Etanol û dimethyl ether xwedî heman taybetmendiyên kîmyewî ne."
      }
    },
    {
      "id": "u24-f14",
      "fact": {
        "tr": "Aynı karbon sayılı aldehitler ile ketonlar birbirinin fonksiyonel grup izomeridir (örn. Propanal ve Propanon).",
        "en": "Aldehydes and ketones with the same carbon number are functional group isomers of each other (e.g. Propanal and Propanone).",
        "de": "Aldehyde und Ketone mit der gleichen Kohlenstoffzahl sind funktionelle Isomere voneinander (z. B. Propanal und Propanon).",
        "fr": "Les aldéhydes et les cétones ayant le même nombre de carbones sont des isomères de groupes fonctionnels les uns des autres (par exemple le propanal et la propanone).",
        "ru": "Альдегиды и кетоны с одинаковым числом атомов углерода являются изомерами функциональных групп друг друга (например, пропаналь и пропанон).",
        "ar": "الألدهيدات والكيتونات التي لها نفس رقم الكربون هي أيزومرات مجموعة وظيفية لبعضها البعض (مثل البروبانال والبروبانون).",
        "zh": "具有相同碳数的醛和酮是彼此的官能团异构体（例如丙醛和丙酮）。",
        "ku": "Aldehîd û ketonên bi heman hejmara karbonê îzomerên koma fonksiyonel ên hev in (mînak Propanal û Propanone)."
      },
      "trap": {
        "tr": "Aldehit ve keton izomerliği 2 karbonlu üyeden başlar.",
        "en": "Aldehyde and ketone isomerism starts from the 2-carbon member.",
        "de": "Die Aldehyd- und Ketonisomerie beginnt beim 2-Kohlenstoff-Mitglied.",
        "fr": "L'isomérie des aldéhydes et des cétones commence à partir du membre à 2 carbones.",
        "ru": "Изомерия альдегидов и кетонов начинается с 2-углеродного члена.",
        "ar": "تبدأ متصاوغة الألدهيد والكيتون من العضو ثنائي الكربون.",
        "zh": "醛和酮的异构现象是从2-碳原子开始的。",
        "ku": "Îzomerîzma aldehîd û ketonê ji endamê 2-karbonê dest pê dike."
      }
    },
    {
      "id": "u24-f15",
      "fact": {
        "tr": "Aynı karbon sayılı monokarboksilik asitler ile esterler birbirinin fonksiyonel grup izomeridir (örn. Asetik asit ve Metil format).",
        "en": "Monocarboxylic acids and esters with the same carbon number are functional group isomers of each other (e.g. Acetic acid and Methyl formate).",
        "de": "Monocarbonsäuren und Ester mit der gleichen Kohlenstoffzahl sind Isomere funktioneller Gruppen voneinander (z. B. Essigsäure und Methylformiat).",
        "fr": "Les acides monocarboxyliques et les esters ayant le même nombre de carbones sont des isomères de groupes fonctionnels les uns des autres (par exemple l'acide acétique et le formiate de méthyle).",
        "ru": "Монокарбоновые кислоты и сложные эфиры с одинаковым числом атомов углерода являются изомерами функциональных групп друг друга (например, уксусная кислота и метилформиат).",
        "ar": "الأحماض الأحادية الكربوكسيلية والإسترات التي لها نفس رقم الكربون هي أيزومرات مجموعة وظيفية لبعضها البعض (مثل حمض الأسيتيك وفورمات الميثيل).",
        "zh": "具有相同碳数的一元羧酸和酯是彼此的官能团异构体（例如乙酸和甲酸甲酯）。",
        "ku": "Asîdên monokarboksîlî û esterên bi heman hejmara karbonê îzomerên koma fonksîyonel ên hev in (mînak asîda acetîk û format Methyl)."
      },
      "trap": {
        "tr": "Esterlerin en küçük üyesi 1 karbonludur.",
        "en": "The smallest member of the esters has 1 carbon.",
        "de": "Der kleinste Vertreter der Ester hat 1 Kohlenstoff.",
        "fr": "Le plus petit membre des esters possède 1 carbone.",
        "ru": "Самый маленький член сложных эфиров имеет 1 углерод.",
        "ar": "أصغر عضو في الاسترات يحتوي على 1 كربون.",
        "zh": "酯中最小的成员有 1 个碳。",
        "ku": "Endamê herî piçûk ê esteran 1 karbon heye."
      }
    },
    {
      "id": "u24-f16",
      "fact": {
        "tr": "Alkenlerde ikili bağ karbonlarına bağlı gruplar aynı tarafta ise cis-, zıt tarafta ise trans- geometrik izomeri adını alır.",
        "en": "In alkenes, if the groups attached to the double bond carbons are on the same side, they are called cis- and if they are on opposite sides, they are called trans geometric isomers.",
        "de": "Befinden sich in Alkenen die an die Doppelbindungskohlenstoffe gebundenen Gruppen auf derselben Seite, werden sie als cis-geometrische Isomere bezeichnet, wenn sie sich auf entgegengesetzten Seiten befinden, werden sie als trans-geometrische Isomere bezeichnet.",
        "fr": "Dans les alcènes, si les groupes attachés aux carbones de la double liaison sont du même côté, ils sont appelés cis- et s'ils sont sur des côtés opposés, ils sont appelés isomères géométriques trans.",
        "ru": "В алкенах, если группы, присоединенные к двойной связи углерода, находятся на одной стороне, их называют цис-, а если они расположены на противоположных сторонах, их называют транс-геометрическими изомерами.",
        "ar": "في الألكينات، إذا كانت المجموعات المرتبطة بذرات الكربون ذات الرابطة المزدوجة على نفس الجانب، فإنها تسمى cis- وإذا كانت على جوانب متقابلة، فإنها تسمى أيزومرات هندسية متحولة.",
        "zh": "在烯烃中，如果连接到双键碳的基团位于同一侧，则称为顺式几何异构体，如果位于相反侧，则称为反式几何异构体。",
        "ku": "Di alkenan de ger komên ku bi karbonên girêka ducarî ve girêdayî bin li ser hev bin, ji wan re cis- û heke li aliyên dijber bin, jê re îzomerên geometrîk trans tê gotin."
      },
      "trap": {
        "tr": "Aynı karbon atomuna iki özdeş grup bağlı olsa bile cis-trans izomeri görülür.",
        "en": "Even if two identical groups are bonded to the same carbon atom, the cis-trans isomer is seen.",
        "de": "Selbst wenn zwei identische Gruppen an dasselbe Kohlenstoffatom gebunden sind, wird das cis-trans-Isomer beobachtet.",
        "fr": "Même si deux groupes identiques sont liés au même atome de carbone, l’isomère cis-trans est visible.",
        "ru": "Даже если две идентичные группы связаны с одним и тем же атомом углерода, виден цис-транс-изомер.",
        "ar": "حتى لو تم ربط مجموعتين متطابقتين بنفس ذرة الكربون، فإن الأيزومر المقرون العابر يمكن رؤيته.",
        "zh": "即使两个相同的基团键合到相同的碳原子上，也会出现顺反异构体。",
        "ku": "Ger du komên wekhev bi heman atoma karbonê re werin girêdan jî, îzomera cis-trans tê dîtin."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u24-c01",
      "conceptA": {
        "tr": "Aldehit",
        "en": "aldehyde",
        "de": "Aldehyd",
        "fr": "aldéhyde",
        "ru": "альдегид",
        "ar": "ألدهيد",
        "zh": "醛",
        "ku": "Aldehîd"
      },
      "conceptB": {
        "tr": "Keton",
        "en": "Ketone",
        "de": "Keton",
        "fr": "Cétone",
        "ru": "Кетон",
        "ar": "كيتون",
        "zh": "酮",
        "ku": "Ketone"
      },
      "distinction": {
        "tr": "Aldehit karbonilin ucundadır (Tollens ile gümüş aynası verir); keton karbonilin ortasındadır (Tollens'e etki etmez).",
        "en": "The aldehyde is at the end of the carbonyl (giving silver mirror with Tollens); The ketone is in the middle of the carbonyl (does not affect Tollens).",
        "de": "Der Aldehyd befindet sich am Ende des Carbonyls (ergibt mit Tollens einen silbernen Spiegel); Das Keton befindet sich in der Mitte des Carbonyls (beeinflusst Tollens nicht).",
        "fr": "L'aldéhyde est à l'extrémité du carbonyle (donnant un miroir argenté avec Tollens) ; La cétone est au milieu du carbonyle (n'affecte pas Tollens).",
        "ru": "Альдегид находится на конце карбонила (давая серебряное зеркало с Толленсом); Кетон находится в середине карбонила (не влияет на Толленса).",
        "ar": "الألدهيد موجود في نهاية الكربونيل (يعطي مرآة فضية مع تولنز)؛ يوجد الكيتون في منتصف الكربونيل (لا يؤثر على تولنس).",
        "zh": "醛位于羰基末端（托伦斯给出银镜）；酮位于羰基中间（不影响托伦斯）。",
        "ku": "Aldehîd li dawiya karbonîlê ye (neynika zîv bi Tollens dide); Keton di nîvê karbonylê de ye (bandorê li Tollens nake)."
      }
    },
    {
      "id": "u24-c02",
      "conceptA": {
        "tr": "Alkan",
        "en": "alkane",
        "de": "Alkan",
        "fr": "alcane",
        "ru": "алкан",
        "ar": "ألكان",
        "zh": "烷烃",
        "ku": "Alkan"
      },
      "conceptB": {
        "tr": "Alken",
        "en": "Alkene",
        "de": "Alken",
        "fr": "Alcène",
        "ru": "Алкен",
        "ar": "ألكين",
        "zh": "烯烃",
        "ku": "Alkene"
      },
      "distinction": {
        "tr": "Alkan doymuştur katılma vermez; alken doymamıştır bromlu suyun rengini giderir ve polimerleşir.",
        "en": "The alkane is saturated and does not add; The alkene is unsaturated, decolorizes brominated water and polymerizes.",
        "de": "Das Alkan ist gesättigt und addiert nicht; Das Alken ist ungesättigt, entfärbt bromiertes Wasser und polymerisiert.",
        "fr": "L'alcane est saturé et n'ajoute rien ; L'alcène est insaturé, décolore l'eau bromée et polymérise.",
        "ru": "Алкан является насыщенным и не присоединяется; Алкен непределен, обесцвечивает бромированную воду и полимеризуется.",
        "ar": "الألكان مشبع ولا يضيف؛ الألكين غير مشبع، يزيل لون الماء المبروم ويتبلمر.",
        "zh": "烷烃饱和，不加；该烯烃是不饱和的，使溴化水脱色并聚合。",
        "ku": "Alkan têr e û lê zêde nake; Alken têrnebûyî ye, ava bromînkirî bêreng dike û polîmerîze dike."
      }
    },
    {
      "id": "u24-c03",
      "conceptA": {
        "tr": "Alkan (Parafin)",
        "en": "Alkane (Paraffin)",
        "de": "Alkan (Paraffin)",
        "fr": "Alcane (Paraffine)",
        "ru": "Алкан (парафин)",
        "ar": "ألكان (بارافين)",
        "zh": "烷烃（石蜡）",
        "ku": "Alkan (Parafîn)"
      },
      "conceptB": {
        "tr": "Alken (Olefin)",
        "en": "Alkene (Olefin)",
        "de": "Alken (Olefin)",
        "fr": "Alcène (oléfine)",
        "ru": "Алкен (олефин)",
        "ar": "ألكين (أولفين)",
        "zh": "烯烃（烯烃）",
        "ku": "Alkene (Olefin)"
      },
      "distinction": {
        "tr": "Alkanlar sadece tekli sigma bağı içeren doymuş hidrokarbonlardır (CnH2n+2); alkenler en az bir ikili pi bağı içerir (CnH2n).",
        "en": "Alkanes are saturated hydrocarbons (CnH2n+2) containing only a single sigma bond; alkenes contain at least one double pi bond (CnH2n).",
        "de": "Alkane sind gesättigte Kohlenwasserstoffe (CnH2n+2), die nur eine einzige Sigma-Bindung enthalten; Alkene enthalten mindestens eine Doppel-Pi-Bindung (CnH2n).",
        "fr": "Les alcanes sont des hydrocarbures saturés (CnH2n+2) ne contenant qu'une seule liaison sigma ; les alcènes contiennent au moins une double liaison pi (CnH2n).",
        "ru": "Алканы – это насыщенные углеводороды (CnH2n+2), содержащие только одну сигма-связь; алкены содержат по крайней мере одну двойную пи-связь (CnH2n).",
        "ar": "الألكانات عبارة عن هيدروكربونات مشبعة (CnH2n+2) تحتوي على رابطة سيجما واحدة فقط؛ تحتوي الألكينات على رابطة باي مزدوجة واحدة على الأقل (CnH2n).",
        "zh": "烷烃是仅含有一个西格玛键的饱和烃（CnH2n+2）；烯烃含有至少一个双π键(CnH2n)。",
        "ku": "Alkan hîdrokarbonên têrbûyî ne (CnH2n+2) ku tenê girêdanek sigmayê dihewîne; alkenan bi kêmî ve girêdanek pi ya ducar (CnH2n) heye."
      }
    },
    {
      "id": "u24-c04",
      "conceptA": {
        "tr": "Alken",
        "en": "Alkene",
        "de": "Alken",
        "fr": "Alcène",
        "ru": "Алкен",
        "ar": "ألكين",
        "zh": "烯烃",
        "ku": "Alken"
      },
      "conceptB": {
        "tr": "Alkin (Asetilenler)",
        "en": "Alkyne (Acetylenes)",
        "de": "Alkin (Acetylene)",
        "fr": "Alcyne (Acétylènes)",
        "ru": "Алкин (ацетилены)",
        "ar": "الألكين (الأسيتيلين)",
        "zh": "炔烃（乙炔）",
        "ku": "Alkyne (Acetylenes)"
      },
      "distinction": {
        "tr": "Alkenler ikili bağ içerir ve katılma tepkimesi verir; alkinler üçlü bağ içerir (CnH2n-2) ve uç alkinler Tollens ile çökelek verir.",
        "en": "Alkenes contain double bonds and undergo addition reactions; Alkynes contain triple bonds (CnH2n-2) and terminal alkynes precipitate with Tollens.",
        "de": "Alkene enthalten Doppelbindungen und gehen Additionsreaktionen ein; Alkine enthalten Dreifachbindungen (CnH2n-2) und terminale Alkine fallen mit Tollens aus.",
        "fr": "Les alcènes contiennent des doubles liaisons et subissent des réactions d'addition ; Les alcynes contiennent des triples liaisons (CnH2n-2) et les alcynes terminaux précipitent avec Tollens.",
        "ru": "Алкены содержат двойные связи и вступают в реакции присоединения; Алкины содержат тройные связи (CnH2n-2), а концевые алкины осаждаются с помощью Толленов.",
        "ar": "تحتوي الألكينات على روابط مزدوجة وتخضع لتفاعلات إضافة؛ تحتوي الألكينات على روابط ثلاثية (CnH2n-2) وتترسب الألكينات الطرفية مع تولنز.",
        "zh": "烯烃含有双键，发生加成反应；炔烃含有三键 (CnH2n-2)，末端炔烃与 Tollens 一起沉淀。",
        "ku": "Alkenan girêdanên ducarî dihewîne û reaksiyonên lêzêdekirinê derbas dikin; Alkîn girêdanên sêqat (CnH2n-2) dihewîne û alkînên termînalê bi Tollenan dibarin."
      }
    },
    {
      "id": "u24-c05",
      "conceptA": {
        "tr": "Primer Alkol",
        "en": "Primary Alcohol",
        "de": "Primärer Alkohol",
        "fr": "Alcool primaire",
        "ru": "Первичный спирт",
        "ar": "الكحول الأولي",
        "zh": "伯醇",
        "ku": "Alkola seretayî"
      },
      "conceptB": {
        "tr": "Sekonder Alkol",
        "en": "Secondary Alcohol",
        "de": "Sekundärer Alkohol",
        "fr": "Alcool secondaire",
        "ru": "Вторичный спирт",
        "ar": "الكحول الثانوي",
        "zh": "二级酒精",
        "ku": "Alkola Duyemîn"
      },
      "distinction": {
        "tr": "Primer alkol OH ın bağlı olduğu C da 1 R grubu içerir ve karboksilik aside kadar yükseltgenir; sekonder alkol sadece ketona yükseltgenir.",
        "en": "The primary alcohol contains 1 R group at the C to which the OH is attached and is oxidized to carboxylic acid; Secondary alcohol is oxidized only to ketone.",
        "de": "Der primäre Alkohol enthält 1 R-Gruppe am C, an das das OH gebunden ist, und wird zu Carbonsäure oxidiert; Sekundärer Alkohol wird nur zu Keton oxidiert.",
        "fr": "L'alcool primaire contient un groupe 1 R en C auquel le OH est attaché et est oxydé en acide carboxylique ; L'alcool secondaire est oxydé uniquement en cétone.",
        "ru": "Первичный спирт содержит 1 группу R при атоме С, к которой присоединен ОН, и окисляется до карбоновой кислоты; Вторичный спирт окисляется только до кетона.",
        "ar": "يحتوي الكحول الأولي على مجموعة R واحدة عند C التي يرتبط بها OH ويتأكسد إلى حمض الكربوكسيل؛ يتأكسد الكحول الثانوي إلى الكيتون فقط.",
        "zh": "伯醇在连接有OH的C处含有1个R基团，被氧化成羧酸；仲醇仅被氧化成酮。",
        "ku": "Alkola seretayî li C-ya ku OH pê ve girêdayî ye 1 koma R dihewîne û bi asîda karboksîlîk tê oksîdan; Alkola duyemîn tenê bi ketonê tê oksîdan."
      }
    },
    {
      "id": "u24-c06",
      "conceptA": {
        "tr": "Karboksilik Asit",
        "en": "Carboxylic Acid",
        "de": "Carbonsäure",
        "fr": "Acide carboxylique",
        "ru": "Карбоновая кислота",
        "ar": "حمض الكربوكسيل",
        "zh": "羧酸",
        "ku": "Asîda Karboksîlîk"
      },
      "conceptB": {
        "tr": "Ester",
        "en": "Ester",
        "de": "Ester",
        "fr": "Ester",
        "ru": "Сложный эфир",
        "ar": "إستر",
        "zh": "酯",
        "ku": "Ester"
      },
      "distinction": {
        "tr": "Karboksilik asit -COOH grubu içerir ve hidrojen bağı yapar; ester asit ve alkolün kondenzasyonuyla oluşan kokulu bileşiktir (-COOR).",
        "en": "Carboxylic acid contains a -COOH group and makes hydrogen bonds; Ester is a fragrant compound (-COOR) formed by the condensation of acid and alcohol.",
        "de": "Carbonsäure enthält eine -COOH-Gruppe und bildet Wasserstoffbrücken; Ester ist eine duftende Verbindung (-COOR), die durch Kondensation von Säure und Alkohol entsteht.",
        "fr": "L'acide carboxylique contient un groupe -COOH et établit des liaisons hydrogène ; L'ester est un composé parfumé (-COOR) formé par la condensation d'un acide et d'un alcool.",
        "ru": "Карбоновая кислота содержит группу -СООН и образует водородные связи; Эфир — ароматное соединение (-COOR), образующееся в результате конденсации кислоты и спирта.",
        "ar": "يحتوي الحمض الكربوكسيلي على مجموعة -COOH ويكوّن روابط هيدروجينية؛ الإستر هو مركب عطري (-COOR) يتكون من تكثيف الحمض والكحول.",
        "zh": "羧酸含有-COOH基团并形成氢键；酯是由酸和醇缩合形成的芳香化合物（-COOR）。",
        "ku": "Karboksîlîk koma -COOH dihewîne û girêdanên hîdrojenê çêdike; Ester pêkhateyek bîhnxweş e (-COOR) ku ji berhevbûna asîd û alkolê pêk tê."
      }
    },
    {
      "id": "u24-c07",
      "conceptA": {
        "tr": "Markovnikov Katılması",
        "en": "Joining Markovnikov",
        "de": "Beitritt zu Markownikow",
        "fr": "Rejoindre Markovnikov",
        "ru": "Присоединение к Марковникову",
        "ar": "الانضمام إلى ماركوفنيكوف",
        "zh": "马氏加成规则",
        "ku": "Tevlî Markovnikov dibe"
      },
      "conceptB": {
        "tr": "Zaitsev Ayrılması",
        "en": "Zaitsev Detachment",
        "de": "Zaitsev-Abteilung",
        "fr": "Détachement de Zaïtsev",
        "ru": "Зайцевский отряд",
        "ar": "مفرزة زايتسيف",
        "zh": "扎伊采夫消去规则",
        "ku": "Detachment Zaitsev"
      },
      "distinction": {
        "tr": "Markovnikov katılan H'nin çok hidrojeni olan karbona gitmesidir; Zaitsev ayrılmada eliminasyon az hidrojeni olan karbondan gerçekleşir.",
        "en": "The Markovnikov addition is that the H goes to the carbon that has a lot of hydrogen; In Zaitsev separation, elimination occurs from carbon with less hydrogen.",
        "de": "Der Markownikow-Zusatz besteht darin, dass das H an den Kohlenstoff geht, der viel Wasserstoff enthält; Bei der Zaitsev-Trennung erfolgt die Eliminierung von Kohlenstoff mit weniger Wasserstoff.",
        "fr": "L'ajout de Markovnikov est que le H va au carbone qui contient beaucoup d'hydrogène ; Dans la séparation Zaitsev, l'élimination se produit du carbone avec moins d'hydrogène.",
        "ru": "Дополнение Марковникова состоит в том, что H переходит к углероду, в котором много водорода; При разделении Зайцева отщепление происходит от углерода с меньшим количеством водорода.",
        "ar": "إضافة ماركوفنيكوف هي أن H يذهب إلى الكربون الذي يحتوي على الكثير من الهيدروجين؛ في فصل زايتسيف، يحدث التخلص من الكربون مع كمية أقل من الهيدروجين.",
        "zh": "马氏加成是，H 进入含有大量氢的碳；在扎伊采夫分离中，消除是从碳和较少的氢中发生的。",
        "ku": "Zêdekirina Markovnikov ew e ku H diçe karbona ku pir hîdrojen lê heye; Di veqetandina Zaitsev de, jêbirin ji karbonê bi hîdrojenê kêmtir pêk tê."
      }
    },
    {
      "id": "u24-c08",
      "conceptA": {
        "tr": "Aldehit",
        "en": "aldehyde",
        "de": "Aldehyd",
        "fr": "aldéhyde",
        "ru": "альдегид",
        "ar": "ألدهيد",
        "zh": "醛",
        "ku": "Aldehîd"
      },
      "conceptB": {
        "tr": "Keton",
        "en": "Ketone",
        "de": "Keton",
        "fr": "Cétone",
        "ru": "Кетон",
        "ar": "كيتون",
        "zh": "酮",
        "ku": "Ketone"
      },
      "distinction": {
        "tr": "Aldehit karbonilin ucundadır (Tollens ile gümüş aynası verir); keton karbonilin ortasındadır (Tollens'e etki etmez).",
        "en": "The aldehyde is at the end of the carbonyl (giving silver mirror with Tollens); The ketone is in the middle of the carbonyl (does not affect Tollens).",
        "de": "Der Aldehyd befindet sich am Ende des Carbonyls (ergibt mit Tollens einen silbernen Spiegel); Das Keton befindet sich in der Mitte des Carbonyls (beeinflusst Tollens nicht).",
        "fr": "L'aldéhyde est à l'extrémité du carbonyle (donnant un miroir argenté avec Tollens) ; La cétone est au milieu du carbonyle (n'affecte pas Tollens).",
        "ru": "Альдегид находится на конце карбонила (давая серебряное зеркало с Толленсом); Кетон находится в середине карбонила (не влияет на Толленса).",
        "ar": "الألدهيد موجود في نهاية الكربونيل (يعطي مرآة فضية مع تولنز)؛ يوجد الكيتون في منتصف الكربونيل (لا يؤثر على تولنس).",
        "zh": "醛位于羰基末端（托伦斯给出银镜）；酮位于羰基中间（不影响托伦斯）。",
        "ku": "Aldehîd li dawiya karbonîlê ye (neynika zîv bi Tollens dide); Keton di nîvê karbonylê de ye (bandorê li Tollens nake)."
      }
    }
  ],
  "sequences": [
    {
      "id": "u24-s01",
      "title": {
        "tr": "Markovnikov Katılma Mekanizması",
        "en": "Markovnikov Addition Mechanism",
        "de": "Markownikow-Additionsmechanismus",
        "fr": "Mécanisme d'addition de Markovnikov",
        "ru": "Механизм сложения Марковникова",
        "ar": "آلية إضافة ماركوفنيكوف",
        "zh": "马尔可夫尼科夫加法机制",
        "ku": "Mekanîzmaya Zêdekirina Markovnikov"
      },
      "steps": [
        {
          "tr": "Alkendeki pi bağını kır",
          "en": "Break the pi bond in the alkene",
          "de": "Brechen Sie die Pi-Bindung im Alken",
          "fr": "Rompre la liaison pi dans l'alcène",
          "ru": "Разрыв пи-связи в алкене",
          "ar": "اكسر الرابطة باي في الألكين",
          "zh": "打破烯烃中的π键",
          "ku": "Di alkenê de girêdana pi bişkînin"
        },
        {
          "tr": "Reaktifin H+ katyonunu hidrojeni çok olan C'ye bağla",
          "en": "Connect the H+ cation of the reagent to the C that has more hydrogen.",
          "de": "Verbinden Sie das H+-Kation des Reagenzes mit dem C, das mehr Wasserstoff enthält.",
          "fr": "Connectez le cation H+ du réactif au C qui contient plus d’hydrogène.",
          "ru": "Соедините катион H+ реагента с катионом C, в котором больше водорода.",
          "ar": "قم بتوصيل كاتيون H+ للكاشف إلى C الذي يحتوي على المزيد من الهيدروجين.",
          "zh": "将试剂的 H+ 阳离子连接到具有更多氢的 C。",
          "ku": "H+ kationa reagentê bi C-ya ku hîdrojena wê zêdetir e ve girêdin."
        },
        {
          "tr": "Kararlı karbokatyonu oluştur",
          "en": "Form stable carbocation",
          "de": "Bilden Sie stabile Carbokationen",
          "fr": "Forme un carbocation stable",
          "ru": "Образуют стабильный карбокатион",
          "ar": "شكل كاربوكاتيون مستقر",
          "zh": "形成稳定的碳正离子",
          "ku": "Carbocation stabîl ava bikin"
        },
        {
          "tr": "Reaktifin anyonunu (Br-, OH-) diğer C'ye bağla",
          "en": "Connect the anion of the reagent (Br-, OH-) to the other C",
          "de": "Verbinden Sie das Anion des Reagenzes (Br-, OH-) mit dem anderen C",
          "fr": "Connectez l'anion du réactif (Br-, OH-) à l'autre C",
          "ru": "Соедините анион реагента (Br-, OH-) с другим C",
          "ar": "قم بتوصيل أنيون الكاشف (Br-، OH-) بالآخر C",
          "zh": "将试剂的阴离子（Br-、OH-）连接到另一个 C",
          "ku": "Anyona reagentê (Br-, OH-) bi C-ya din ve girêdin"
        }
      ]
    },
    {
      "id": "u24-s02",
      "title": {
        "tr": "IUPAC Alkan Adlandırma",
        "en": "IUPAC Alkane Nomenclature",
        "de": "IUPAC-Alkan-Nomenklatur",
        "fr": "Nomenclature des alcanes IUPAC",
        "ru": "Номенклатура алканов ИЮПАК",
        "ar": "تسمية الألكانات IUPAC",
        "zh": "IUPAC 烷烃命名法",
        "ku": "IUPAC Alkane Nomenclature"
      },
      "steps": [
        {
          "tr": "En uzun kesintisiz karbon zinciri ana zincir olarak seçilir",
          "en": "The longest uninterrupted carbon chain is chosen as the main chain",
          "de": "Als Hauptkette wird die längste ununterbrochene Kohlenstoffkette gewählt",
          "fr": "La chaîne carbonée ininterrompue la plus longue est choisie comme chaîne principale",
          "ru": "В качестве основной цепи выбирают самую длинную непрерывную углеродную цепь.",
          "ar": "يتم اختيار أطول سلسلة كربون غير منقطعة لتكون السلسلة الرئيسية",
          "zh": "选择最长的不间断碳链作为主链",
          "ku": "Zincîra karbonê ya herî dirêj a bênavber wekî zincîra sereke tê hilbijartin"
        },
        {
          "tr": "Dallanmaya en yakın uçtan başlanarak karbonlar numaralandırılır",
          "en": "Carbons are numbered starting from the end closest to the branch.",
          "de": "Kohlenstoffe werden beginnend mit dem Ende, das dem Zweig am nächsten liegt, nummeriert.",
          "fr": "Les carbones sont numérotés en commençant par l'extrémité la plus proche de la branche.",
          "ru": "Углероды нумеруются, начиная с конца, ближайшего к ветви.",
          "ar": "يتم ترقيم الكربونات بدءًا من النهاية الأقرب إلى الفرع.",
          "zh": "碳从最靠近分支的末端开始编号。",
          "ku": "Karbon ji dawiya herî nêzî şaxê dest pê dikin têne jimartin."
        },
        {
          "tr": "Bağlı alkil gruplarının adları ve karbon numaraları yazılır",
          "en": "Names and carbon numbers of bonded alkyl groups are written",
          "de": "Namen und Kohlenstoffzahlen der gebundenen Alkylgruppen werden angegeben",
          "fr": "Les noms et les nombres de carbones des groupes alkyles liés sont écrits",
          "ru": "Написаны названия и номера атомов углерода связанных алкильных групп.",
          "ar": "تتم كتابة أسماء وأرقام الكربون لمجموعات الألكيل المرتبطة",
          "zh": "写出键合烷基的名称和碳数",
          "ku": "Nav û hejmarên karbonê yên komên alkil ên girêdayî têne nivîsandin"
        },
        {
          "tr": "Ana zincirdeki karbon sayısına karşılık gelen alkan adı sona eklenir",
          "en": "The alkane name corresponding to the number of carbons in the main chain is added to the end",
          "de": "Am Ende wird der Alkanname angehängt, der der Anzahl der Kohlenstoffe in der Hauptkette entspricht",
          "fr": "Le nom de l'alcane correspondant au nombre de carbones de la chaîne principale est ajouté à la fin",
          "ru": "В конце добавляется название алкана, соответствующее числу атомов углерода в основной цепи.",
          "ar": "يضاف اسم الألكان المطابق لعدد ذرات الكربون في السلسلة الرئيسية إلى النهاية",
          "zh": "末尾添加主链碳数对应的烷烃名称",
          "ku": "Navê alkanê ku bi hejmara karbonên di zincîra sereke de têkildar e, li dawiyê tê zêdekirin"
        }
      ]
    },
    {
      "id": "u24-s03",
      "title": {
        "tr": "Alkinlere Su Katılması ve Totomeri",
        "en": "Addition of Water to Alkynes and Tautomery",
        "de": "Addition von Wasser an Alkine und Tautomerie",
        "fr": "Ajout d'eau aux alcynes et à la tautomérie",
        "ru": "Присоединение воды к алкинам и таутомерия",
        "ar": "إضافة الماء إلى الألكينات والتوتومري",
        "zh": "炔烃加水和互变异构",
        "ku": "Zêdekirina avê li Alkines û Tautomery"
      },
      "steps": [
        {
          "tr": "Asetilene asidik ortamda cıva sülfat (HgSO4) katalizörlüğünde su katılır",
          "en": "Water is added to acetylene under the catalyst of mercury sulfate (HgSO4) in an acidic environment.",
          "de": "Unter dem Katalysator Quecksilbersulfat (HgSO4) wird in einer sauren Umgebung Wasser zu Acetylen gegeben.",
          "fr": "De l'eau est ajoutée à l'acétylène sous le catalyseur du sulfate de mercure (HgSO4) dans un environnement acide.",
          "ru": "Вода добавляется в ацетилен под катализатором сульфата ртути (HgSO4) в кислой среде.",
          "ar": "يضاف الماء إلى الأسيتيلين تحت محفز كبريتات الزئبق (HgSO4) في بيئة حمضية.",
          "zh": "在硫酸汞（HgSO4）催化下，在酸性环境下将水加入乙炔中。",
          "ku": "Av li asetîlenê di bin katalîzatorê sulfate mercury (HgSO4) de di hawîrdorek asîd de tê zêdekirin."
        },
        {
          "tr": "Kararsız enol ara ürünü oluşur",
          "en": "An unstable enol intermediate is formed",
          "de": "Es entsteht ein instabiles Enol-Zwischenprodukt",
          "fr": "Un intermédiaire énol instable se forme",
          "ru": "Образуется нестабильный енольный интермедиат.",
          "ar": "يتم تشكيل وسيط إنول غير مستقر",
          "zh": "形成不稳定的烯醇中间体",
          "ku": "Navberek enolê ya bêîstîqrar tê çêkirin"
        },
        {
          "tr": "Hidrojen atomu göç ederek pi bağı karbonil grubuna kayar",
          "en": "The hydrogen atom migrates and the pi bond shifts to the carbonyl group",
          "de": "Das Wasserstoffatom wandert und die Pi-Bindung verschiebt sich zur Carbonylgruppe",
          "fr": "L'atome d'hydrogène migre et la liaison pi se déplace vers le groupe carbonyle",
          "ru": "Атом водорода мигрирует, а пи-связь смещается к карбонильной группе.",
          "ar": "تهاجر ذرة الهيدروجين وتنتقل الرابطة باي إلى مجموعة الكربونيل",
          "zh": "氢原子迁移，π键转移至羰基",
          "ku": "Atoma hîdrojenê koç dike û girêka pi diguhere koma karbonîl"
        },
        {
          "tr": "Kararlı asetaldehit bileşiği elde edilir",
          "en": "Stable acetaldehyde compound is obtained",
          "de": "Es wird eine stabile Acetaldehydverbindung erhalten",
          "fr": "Un composé acétaldéhyde stable est obtenu",
          "ru": "Получено стабильное соединение ацетальдегида.",
          "ar": "يتم الحصول على مركب الأسيتالديهيد المستقر",
          "zh": "获得稳定的乙醛化合物",
          "ku": "Têkiliya acetaldehyde ya stabîl tê wergirtin"
        }
      ]
    },
    {
      "id": "u24-s04",
      "title": {
        "tr": "Alkollerin Kademeli Yükseltgenmesi",
        "en": "Stepwise Oxidation of Alcohols",
        "de": "Stufenweise Oxidation von Alkoholen",
        "fr": "Oxydation étape par étape des alcools",
        "ru": "Ступенчатое окисление спиртов.",
        "ar": "الأكسدة التدريجية للكحولات",
        "zh": "醇的逐步氧化",
        "ku": "Oksîdakirina Alkolan a Gav bi gav"
      },
      "steps": [
        {
          "tr": "Primer alkol bir basamak yükseltgenerek aldehite dönüşür",
          "en": "The primary alcohol is oxidized one step to an aldehyde.",
          "de": "Der primäre Alkohol wird in einem Schritt zu einem Aldehyd oxidiert.",
          "fr": "L'alcool primaire est oxydé en une étape en aldéhyde.",
          "ru": "Первичный спирт окисляется на одну ступень до альдегида.",
          "ar": "يتأكسد الكحول الأولي خطوة واحدة إلى الألدهيد.",
          "zh": "伯醇一步被氧化成醛。",
          "ku": "Alkola seretayî gavekê berbi aldehîdê ve tê oksîdan."
        },
        {
          "tr": "Aldehit bir basamak daha yükseltgenerek karboksilik asit verir",
          "en": "The aldehyde is further oxidized to give carboxylic acid.",
          "de": "Der Aldehyd wird weiter zu Carbonsäure oxidiert.",
          "fr": "L'aldéhyde est ensuite oxydé pour donner de l'acide carboxylique.",
          "ru": "Альдегид далее окисляется с образованием карбоновой кислоты.",
          "ar": "يتأكسد الألدهيد أيضًا ليعطي حمض كربوكسيلي.",
          "zh": "醛进一步氧化得到羧酸。",
          "ku": "Aldehîd bêtir tê oksîd kirin ku asîda karboksîlîk bide."
        },
        {
          "tr": "Sekonder alkol yükseltgendiğinde sadece keton oluşur",
          "en": "When secondary alcohol is oxidized, only ketones are formed.",
          "de": "Bei der Oxidation von sekundärem Alkohol entstehen ausschließlich Ketone.",
          "fr": "Lorsque l’alcool secondaire est oxydé, seules des cétones se forment.",
          "ru": "При окислении вторичного спирта образуются только кетоны.",
          "ar": "عندما يتأكسد الكحول الثانوي، يتم تشكيل الكيتونات فقط.",
          "zh": "当仲醇被氧化时，仅形成酮。",
          "ku": "Dema ku alkola duyemîn oksîde dibe, tenê keton têne çêkirin."
        },
        {
          "tr": "Tersiyer alkoller yükseltgenme tepkimesi vermez",
          "en": "Tertiary alcohols do not undergo oxidation reactions",
          "de": "Tertiäre Alkohole unterliegen keinen Oxidationsreaktionen",
          "fr": "Les alcools tertiaires ne subissent pas de réactions d'oxydation",
          "ru": "Третичные спирты не вступают в реакции окисления.",
          "ar": "لا تخضع الكحولات الثلاثية لتفاعلات الأكسدة",
          "zh": "叔醇不发生氧化反应",
          "ku": "Alkolên sêyemîn reaksiyonên oksîdasyonê derbas nakin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u24-twin01",
      "stem": {
        "tr": "Propen (CH3-CH=CH2) gazına asidik ortamda su (H2O) katıldığında Markovnikov kuralına göre ana ürün aşağıdakilerden hangisidir?",
        "en": "When water (H2O) is added to propene (CH3-CH=CH2) gas in an acidic environment, which of the following is the main product according to Markovnikov's rule?",
        "de": "Wenn in einer sauren Umgebung Wasser (H2O) zu Propengas (CH3-CH=CH2) hinzugefügt wird, welches der folgenden Produkte ist gemäß der Markownikow-Regel das Hauptprodukt?",
        "fr": "Lorsque de l'eau (H2O) est ajoutée au gaz propène (CH3-CH=CH2) dans un environnement acide, lequel des éléments suivants est le produit principal selon la règle de Markovnikov ?",
        "ru": "Что из следующего является основным продуктом, согласно правилу Марковникова, при добавлении воды (H2O) к газообразному пропену (CH3-CH=CH2) в кислой среде?",
        "ar": "عند إضافة الماء (H2O) إلى غاز البروبين (CH3-CH=CH2) في بيئة حمضية، أي مما يلي يعد الناتج الرئيسي وفقًا لقاعدة ماركوفنيكوف؟",
        "zh": "在酸性环境下，将水（H2O）加入到丙烯（CH3-CH=CH2）气体中，根据马尔可夫尼科夫法则，下列哪项是主要产物？",
        "ku": "Dema ku av (H2O) li gaza propene (CH3-CH=CH2) di hawîrdora asîdî de tê zêdekirin, li gorî qaîdeya Markovnikov kîjan ji van hilbera sereke ye?"
      },
      "options": [
        {
          "tr": "2-Propanol",
          "en": "2-Propanol",
          "de": "2-Propanol",
          "fr": "2-Propanol",
          "ru": "2-Пропанол",
          "ar": "2- البروبانول",
          "zh": "2-丙醇",
          "ku": "2-Propanol"
        },
        {
          "tr": "1-Propanol",
          "en": "1-Propanol",
          "de": "1-Propanol",
          "fr": "1-Propanol",
          "ru": "1-Пропанол",
          "ar": "1-بروبانول",
          "zh": "1-丙醇",
          "ku": "1-Propanol"
        },
        {
          "tr": "Propanal",
          "en": "propanal",
          "de": "Propanal",
          "fr": "propanal",
          "ru": "пропаналь",
          "ar": "بروبانال",
          "zh": "丙醛",
          "ku": "propanal"
        },
        {
          "tr": "Propanon",
          "en": "propanone",
          "de": "Propanon",
          "fr": "propanone",
          "ru": "пропанон",
          "ar": "بروبانون",
          "zh": "丙酮",
          "ku": "propanone"
        },
        {
          "tr": "Propan",
          "en": "propane",
          "de": "Propan",
          "fr": "propane",
          "ru": "пропан",
          "ar": "البروبان",
          "zh": "丙烷",
          "ku": "propane"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Markovnikov kuralına göre H atomu hidrojeni çok olan =CH2 karbonuna bağlanır. OH grubu ise ortadaki -CH- karbonuna bağlanarak ana ürün 2-propanolü oluşturur.",
        "en": "According to Markovnikov's rule, the H atom is bonded to the =CH2 carbon, which has more hydrogen. The OH group bonds to the -CH- carbon in the middle, forming the main product 2-propanol.",
        "de": "Nach der Regel von Markownikow ist das H-Atom an den =CH2-Kohlenstoff gebunden, der mehr Wasserstoff enthält. Die OH-Gruppe bindet an den -CH-Kohlenstoff in der Mitte und bildet das Hauptprodukt 2-Propanol.",
        "fr": "Selon la règle de Markovnikov, l’atome H est lié au carbone =CH2, qui contient plus d’hydrogène. Le groupe OH se lie au carbone -CH- au milieu, formant le produit principal 2-propanol.",
        "ru": "Согласно правилу Марковникова, атом H связан с углеродом =CH2, в котором больше водорода. Группа OH связывается с углеродом -CH- в середине, образуя основной продукт - 2-пропанол.",
        "ar": "وفقًا لقاعدة ماركوفنيكوف، ترتبط ذرة H بذرة الكربون =CH2، التي تحتوي على كمية أكبر من الهيدروجين. ترتبط مجموعة OH بالكربون -CH- في المنتصف، لتشكل المنتج الرئيسي 2-بروبانول.",
        "zh": "根据马尔可夫尼科夫规则，H原子与=CH2碳键合，其中含有更多的氢。 OH基团与中间的-CH-碳键合，形成主要产物2-丙醇。",
        "ku": "Li gorî qaîdeya Markovnikov, atoma H bi karbona =CH2 ve girêdayî ye ku hîdrojenê wê zêdetir e. Koma OH bi karbona -CH- ya navîn ve girêdayî ye, hilberîna sereke 2-propanol pêk tîne."
      }
    },
    {
      "id": "u24-twin02",
      "stem": {
        "tr": "Aşağıdaki organik bileşik sınıflarından hangisi Tollens reaktifi ile tepkimeye girerek gümüş aynası oluşturur?",
        "en": "Which of the following classes of organic compounds reacts with Tollens' reagent to form a silver mirror?",
        "de": "Welche der folgenden Klassen organischer Verbindungen reagiert mit Tollens' Reagens unter Bildung eines Silberspiegels?",
        "fr": "Laquelle des classes suivantes de composés organiques réagit avec le réactif de Tollens pour former un miroir d'argent ?",
        "ru": "Какой из следующих классов органических соединений реагирует с реактивом Толленса с образованием серебряного зеркала?",
        "ar": "أي من فئات المركبات العضوية التالية تتفاعل مع كاشف تولنز لتكوين مرآة فضية؟",
        "zh": "以下哪一类有机化合物与托伦斯试剂反应形成银镜？",
        "ku": "Kîjan ji çînên jêrîn ên pêkhateyên organîk bi reagenta Tollens re reaksiyonê dike û neynika zîvîn çêdike?"
      },
      "options": [
        {
          "tr": "Aldehitler",
          "en": "aldehydes",
          "de": "Aldehyde",
          "fr": "aldéhydes",
          "ru": "альдегиды",
          "ar": "الألدهيدات",
          "zh": "醛类",
          "ku": "aldehydes"
        },
        {
          "tr": "Ketonlar",
          "en": "Ketones",
          "de": "Ketone",
          "fr": "Cétones",
          "ru": "Кетоны",
          "ar": "الكيتونات",
          "zh": "酮类",
          "ku": "Ketones"
        },
        {
          "tr": "Eterler",
          "en": "Ethers",
          "de": "Ether",
          "fr": "Éthers",
          "ru": "Простые эфиры",
          "ar": "الإيثرات",
          "zh": "醚类",
          "ku": "Eter"
        },
        {
          "tr": "Alkanlar",
          "en": "Alkanes",
          "de": "Alkane",
          "fr": "Alcanes",
          "ru": "Алканы",
          "ar": "الألكانات",
          "zh": "烷烃",
          "ku": "Alkanes"
        },
        {
          "tr": "Esterler",
          "en": "Esters",
          "de": "Ester",
          "fr": "Esters",
          "ru": "Сложные эфиры",
          "ar": "الإسترات",
          "zh": "酯类",
          "ku": "Ester"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Aldehitler karbonil grubundaki hidrojen sayesinde kolayca karboksilik aside yükseltgenir ve Tollens reaktifindeki Ag+ iyonlarını metalik gümüşe (gümüş aynası) indirger.",
        "en": "Aldehydes are easily oxidized to carboxylic acid thanks to the hydrogen in the carbonyl group, reducing the Ag+ ions in the Tollens reagent to metallic silver (silver mirror).",
        "de": "Aldehyde werden dank des Wasserstoffs in der Carbonylgruppe leicht zu Carbonsäure oxidiert, wodurch die Ag+-Ionen im Tollens-Reagenz zu metallischem Silber (Silberspiegel) reduziert werden.",
        "fr": "Les aldéhydes sont facilement oxydés en acide carboxylique grâce à l'hydrogène du groupe carbonyle, réduisant les ions Ag+ du réactif de Tollens en argent métallique (miroir d'argent).",
        "ru": "Альдегиды легко окисляются до карбоновой кислоты благодаря водороду в карбонильной группе, восстанавливая ионы Ag+ в реактиве Толленса до металлического серебра (серебряное зеркало).",
        "ar": "تتأكسد الألدهيدات بسهولة إلى حمض كربوكسيلي بفضل الهيدروجين الموجود في مجموعة الكربونيل، مما يقلل أيونات Ag+ في كاشف تولنز إلى الفضة المعدنية (المرآة الفضية).",
        "zh": "由于羰基中的氢，醛很容易被氧化为羧酸，从而将Tollens试剂中的Ag+离子还原为金属银（银镜）。",
        "ku": "Aldehîd bi saya hîdrojena di koma karbonîl de bi hêsanî dibin asîda karboksîlîk, îyonên Ag+ yên di reagenta Tollensê de dibe zîvê metalîk (neynika zîv)."
      }
    },
    {
      "id": "u24-twin03",
      "stem": {
        "tr": "Kimya dersinde Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Organic Compounds: Hydrocarbons, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Organische Verbindungen & Kohlenwasserstoffe: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Composés Organiques & Hydrocarbures, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Органические соединения и функциональные группы», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"المركبات العضوية والهيدروكربونات\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“有机化合物与官能团”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Madeyên Organîk û Komên Fonksiyonel\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Benzen üç tane normal alken gibi kolayca bromlu suyu giderir.",
          "en": "Benzene readily removes brominated water, as do the three normal alkenes.",
          "de": "Benzol entfernt leicht bromiertes Wasser, ebenso wie die drei normalen Alkene.",
          "fr": "Le benzène élimine facilement l'eau bromée, tout comme les trois alcènes normaux.",
          "ru": "Бензол легко удаляет бромированную воду, как и три нормальных алкена.",
          "ar": "يزيل البنزين الماء المبروم بسهولة، كما تفعل الألكينات الطبيعية الثلاثة.",
          "zh": "与三种普通烯烃一样，苯很容易去除溴化水。",
          "ku": "Benzene bi hêsanî ava bromînkirî radike, wekî sê alkenên normal."
        },
        {
          "tr": "Ketonlar daha ileri yükseltgenerek esterlere dönüşür.",
          "en": "Ketones are further oxidized to esters.",
          "de": "Ketone werden weiter zu Estern oxidiert.",
          "fr": "Les cétones sont ensuite oxydées en esters.",
          "ru": "Кетоны далее окисляются до сложных эфиров.",
          "ar": "تتأكسد الكيتونات أيضًا إلى استرات.",
          "zh": "酮进一步氧化成酯。",
          "ku": "Ketone bêtir ji bo esteran têne oksîd kirin."
        },
        {
          "tr": "Markovnikov Kuralı: Asimetrik alkenlere HX katılırken H atomu hidrojeni ÇOK olan karbona, X atomu hidrojeni AZ olan karbona bağlanır.",
          "en": "Markovnikov's Rule: When HX is added to asymmetric alkenes, the H atom is bonded to the carbon with MORE hydrogen, and the X atom is bonded to the carbon with LESS hydrogen.",
          "de": "Markownikows Regel: Wenn HX zu asymmetrischen Alkenen hinzugefügt wird, wird das H-Atom mit MEHR Wasserstoff an den Kohlenstoff gebunden, und das X-Atom wird mit WENIGER Wasserstoff an den Kohlenstoff gebunden.",
          "fr": "Règle de Markovnikov : lorsque HX est ajouté à des alcènes asymétriques, l'atome H est lié au carbone avec PLUS d'hydrogène et l'atome X est lié au carbone avec MOINS d'hydrogène.",
          "ru": "Правило Марковникова: когда HX добавляется к асимметричным алкенам, атом H связан с углеродом с БОЛЬШИМ водородом, а атом X связан с углеродом с МЕНЬШИМ водородом.",
          "ar": "قاعدة ماركونيكوف: عند إضافة HX إلى الألكينات غير المتماثلة، ترتبط ذرة H بالكربون الذي يحتوي على المزيد من الهيدروجين، وترتبط ذرة X بالكربون الذي يحتوي على كمية أقل من الهيدروجين.",
          "zh": "马尔可夫尼科夫规则：当HX添加到不对称烯烃中时，H原子与具有更多氢的碳键合，而X原子与具有较少氢的碳键合。",
          "ku": "Rêbaza Markovnikov: Dema ku HX li alkenên asîmetrîk tê zêdekirin, atoma H bi karbonê re bi HÎdrojena ZÊDETIR, û atoma X bi karbonê bi hîdrojena KÊMT re tê girêdan."
        },
        {
          "tr": "Karboksilik asitlerin kaynama noktası hidrokarbonlardan düşüktür.",
          "en": "The boiling point of carboxylic acids is lower than hydrocarbons.",
          "de": "Der Siedepunkt von Carbonsäuren ist niedriger als der von Kohlenwasserstoffen.",
          "fr": "Le point d'ébullition des acides carboxyliques est inférieur à celui des hydrocarbures.",
          "ru": "Температура кипения карбоновых кислот ниже, чем у углеводородов.",
          "ar": "درجة غليان الأحماض الكربوكسيلية أقل من درجة غليان الهيدروكربونات.",
          "zh": "羧酸的沸点比烃低。",
          "ku": "Xala kelandinê ya asîdên karboksîlî ji hîdrokarbonan kêmtir e."
        },
        {
          "tr": "Esterlerin en küçük üyesi 1 karbonludur.",
          "en": "The smallest member of the esters has 1 carbon.",
          "de": "Der kleinste Vertreter der Ester hat 1 Kohlenstoff.",
          "fr": "Le plus petit membre des esters possède 1 carbone.",
          "ru": "Самый маленький член сложных эфиров имеет 1 углерод.",
          "ar": "أصغر عضو في الاسترات يحتوي على 1 كربون.",
          "zh": "酯中最小的成员有 1 个碳。",
          "ku": "Endamê herî piçûk ê esteran 1 karbon heye."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Markovnikov Kuralı: Asimetrik alkenlere HX katılırken H atomu hidrojeni ÇOK olan karbona, X atomu hidrojeni AZ olan karbona bağlanır.\" ifadesidir. Zengin daha zengin olur kuralı: Hidrojen çok olana H gider!",
        "en": "The correct statement is: \"Markovnikov's Rule: When HX is added to asymmetric alkenes, the H atom is bonded to the carbon with MORE hydrogen, and the X atom is bonded to the carbon with LESS hydrogen.\". The rich get richer rule: H goes to the one who has more hydrogen!",
        "de": "Die zutreffende Aussage lautet: \"Markownikows Regel: Wenn HX zu asymmetrischen Alkenen hinzugefügt wird, wird das H-Atom mit MEHR Wasserstoff an den Kohlenstoff gebunden, und das X-Atom wird mit WENIGER Wasserstoff an den Kohlenstoff gebunden.\". Die Reiche werden reicher Regel: H geht an den, der mehr Wasserstoff hat!",
        "fr": "L'affirmation exacte est: \"Règle de Markovnikov : lorsque HX est ajouté à des alcènes asymétriques, l'atome H est lié au carbone avec PLUS d'hydrogène et l'atome X est lié au carbone avec MOINS d'hydrogène.\". Règle des riches s’enrichissent : H va à celui qui a le plus d’hydrogène !",
        "ru": "Правильное утверждение: «Правило Марковникова: когда HX добавляется к асимметричным алкенам, атом H связан с углеродом с БОЛЬШИМ водородом, а атом X связан с углеродом с МЕНЬШИМ водородом.». Правило богатых богатеет: H достаётся тому, у кого больше водорода!",
        "ar": "العبارة الصحيحة هي: \"قاعدة ماركونيكوف: عند إضافة HX إلى الألكينات غير المتماثلة، ترتبط ذرة H بالكربون الذي يحتوي على المزيد من الهيدروجين، وترتبط ذرة X بالكربون الذي يحتوي على كمية أقل من الهيدروجين.\". قاعدة الأغنياء يصبحون أكثر ثراء: H يذهب إلى الشخص الذي لديه المزيد من الهيدروجين!",
        "zh": "正确表述为：“马尔可夫尼科夫规则：当HX添加到不对称烯烃中时，H原子与具有更多氢的碳键合，而X原子与具有较少氢的碳键合。”。富者愈富的规则：氢归拥有更多氢的人！",
        "ku": "Gotina rast ev e: \"Rêbaza Markovnikov: Dema ku HX li alkenên asîmetrîk tê zêdekirin, atoma H bi karbonê re bi HÎdrojena ZÊDETIR, û atoma X bi karbonê bi hîdrojena KÊMT re tê girêdan.\". Desthilatdariya dewlemend dewlemendtir dibe: H diçe ba yê ku hîdrojenê wî zêde heye!"
      }
    },
    {
      "id": "u24-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Organic Compounds: Hydrocarbons?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Organische Verbindungen & Kohlenwasserstoffe zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Composés Organiques & Hydrocarbures ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Органические соединения и функциональные группы»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"المركبات العضوية والهيدروكربونات\"؟",
        "zh": "根据“有机化合物与官能团”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Madeyên Organîk û Komên Fonksiyonel\" de rast e?"
      },
      "options": [
        {
          "tr": "Eterlerin kaynama noktası alkollerden daha yüksektir.",
          "en": "Ethers have a higher boiling point than alcohols.",
          "de": "Ether haben einen höheren Siedepunkt als Alkohole.",
          "fr": "Les éthers ont un point d'ébullition plus élevé que les alcools.",
          "ru": "Эфиры имеют более высокую температуру кипения, чем спирты.",
          "ar": "الإيثرات لها درجة غليان أعلى من الكحولات.",
          "zh": "醚的沸点高于醇。",
          "ku": "Eter ji alkolan xwedî nuqteya kelandinê ye."
        },
        {
          "tr": "Aseton (keton) Tollens reaktifiyle gümüş aynası verir.",
          "en": "Acetone (ketone) gives silver mirror with Tollens reagent.",
          "de": "Aceton (Keton) ergibt mit Tollens-Reagenz einen Silberspiegel.",
          "fr": "L'acétone (cétone) donne un miroir argenté avec le réactif Tollens.",
          "ru": "Ацетон (кетон) дает серебряное зеркало с реактивом Толленса.",
          "ar": "الأسيتون (الكيتون) يعطي مرآة فضية مع كاشف تولنس.",
          "zh": "丙酮（酮）与托伦斯试剂反应生成银镜。",
          "ku": "Aceton (ketone) bi reagenta Tollens neynika zîv dide."
        },
        {
          "tr": "Etanol ve dimetil eter aynı kimyasal özelliklere sahiptir.",
          "en": "Ethanol and dimethyl ether have the same chemical properties.",
          "de": "Ethanol und Dimethylether haben die gleichen chemischen Eigenschaften.",
          "fr": "L'éthanol et l'éther diméthylique ont les mêmes propriétés chimiques.",
          "ru": "Этанол и диметиловый эфир имеют одинаковые химические свойства.",
          "ar": "الإيثانول وثنائي ميثيل الأثير لهما نفس الخصائص الكيميائية.",
          "zh": "乙醇和二甲醚具有相同的化学性质。",
          "ku": "Etanol û dimethyl ether xwedî heman taybetmendiyên kîmyewî ne."
        },
        {
          "tr": "Alkenler ve alkinler bromlu suyun (Br2/CCl4) kırmızı-kahverengi rengini soğukta giderir (doymamışlık testi).",
          "en": "Alkenes and alkynes remove the red-brown color of brominated water (Br2/CCl4) on cold (unsaturation test).",
          "de": "Alkene und Alkine entfernen die rotbraune Farbe von bromiertem Wasser (Br2/CCl4) bei Kälte (Unsättigungstest).",
          "fr": "Les alcènes et alcynes enlèvent la couleur rouge-brun de l'eau bromée (Br2/CCl4) à froid (test d'insaturation).",
          "ru": "Алкены и алкины удаляют красно-коричневую окраску бромированной воды (Br2/CCl4) на холоду (испытание на ненасыщенность).",
          "ar": "تقوم الألكينات والألكاينات بإزالة اللون البني المحمر من الماء المبروم (Br2/CCl4) عند البرد (اختبار عدم التشبع).",
          "zh": "烯烃和炔烃在冷时消除溴化水 (Br2/CCl4) 的红棕色（不饱和度测试）。",
          "ku": "Alken û alkîn rengê sor-qehweyî yê ava bromînkirî (Br2/CCl4) di sermayê de (ceribandina têrbûnê) jê dikin."
        },
        {
          "tr": "Aynı karbon atomuna iki özdeş grup bağlı olsa bile cis-trans izomeri görülür.",
          "en": "Even if two identical groups are bonded to the same carbon atom, the cis-trans isomer is seen.",
          "de": "Selbst wenn zwei identische Gruppen an dasselbe Kohlenstoffatom gebunden sind, wird das cis-trans-Isomer beobachtet.",
          "fr": "Même si deux groupes identiques sont liés au même atome de carbone, l’isomère cis-trans est visible.",
          "ru": "Даже если две идентичные группы связаны с одним и тем же атомом углерода, виден цис-транс-изомер.",
          "ar": "حتى لو تم ربط مجموعتين متطابقتين بنفس ذرة الكربون، فإن الأيزومر المقرون العابر يمكن رؤيته.",
          "zh": "即使两个相同的基团键合到相同的碳原子上，也会出现顺反异构体。",
          "ku": "Ger du komên wekhev bi heman atoma karbonê re werin girêdan jî, îzomera cis-trans tê dîtin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Alkenler ve alkinler bromlu suyun (Br2/CCl4) kırmızı-kahverengi rengini soğukta giderir (doymamışlık testi).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Alkenes and alkynes remove the red-brown color of brominated water (Br2/CCl4) on cold (unsaturation test).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Alkene und Alkine entfernen die rotbraune Farbe von bromiertem Wasser (Br2/CCl4) bei Kälte (Unsättigungstest).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les alcènes et alcynes enlèvent la couleur rouge-brun de l'eau bromée (Br2/CCl4) à froid (test d'insaturation).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Алкены и алкины удаляют красно-коричневую окраску бромированной воды (Br2/CCl4) на холоду (испытание на ненасыщенность).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تقوم الألكينات والألكاينات بإزالة اللون البني المحمر من الماء المبروم (Br2/CCl4) عند البرد (اختبار عدم التشبع).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“烯烃和炔烃在冷时消除溴化水 (Br2/CCl4) 的红棕色（不饱和度测试）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Alken û alkîn rengê sor-qehweyî yê ava bromînkirî (Br2/CCl4) di sermayê de (ceribandina têrbûnê) jê dikin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u24-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Organic Compounds: Hydrocarbons, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Organische Verbindungen & Kohlenwasserstoffe: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Composés Organiques & Hydrocarbures, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Органические соединения и функциональные группы», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"المركبات العضوية والهيدروكربونات\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“有机化合物与官能团”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Madeyên Organîk û Komên Fonksiyonel\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Tersiyer alkoller kolayca yükseltgenerek keton verir.",
          "en": "Tertiary alcohols are easily oxidized to give ketones.",
          "de": "Tertiäre Alkohole werden leicht zu Ketonen oxidiert.",
          "fr": "Les alcools tertiaires sont facilement oxydés pour donner des cétones.",
          "ru": "Третичные спирты легко окисляются с образованием кетонов.",
          "ar": "تتأكسد الكحولات الثلاثية بسهولة لتعطي الكيتونات.",
          "zh": "叔醇很容易被氧化生成酮。",
          "ku": "Alkolên sêyemîn bi hêsanî têne oksîd kirin da ku ketonan bidin."
        },
        {
          "tr": "Esterleşme tepkimesinde baz katalizörlüğünde tuz açığa çıkar.",
          "en": "In the esterification reaction, salt is released under base catalyst.",
          "de": "Bei der Veresterungsreaktion wird unter basischem Katalysator Salz freigesetzt.",
          "fr": "Dans la réaction d’estérification, le sel est libéré sous un catalyseur basique.",
          "ru": "В реакции этерификации соль выделяется под основным катализатором.",
          "ar": "في تفاعل الأسترة، يتم إطلاق الملح تحت المحفز الأساسي.",
          "zh": "在酯化反应中，在碱催化剂的作用下释放出盐。",
          "ku": "Di reaksiyona esterîfîkasyonê de, xwê di bin katalîzatora bingehîn de tê berdan."
        },
        {
          "tr": "Aldehit ve keton izomerliği 2 karbonlu üyeden başlar.",
          "en": "Aldehyde and ketone isomerism starts from the 2-carbon member.",
          "de": "Die Aldehyd- und Ketonisomerie beginnt beim 2-Kohlenstoff-Mitglied.",
          "fr": "L'isomérie des aldéhydes et des cétones commence à partir du membre à 2 carbones.",
          "ru": "Изомерия альдегидов и кетонов начинается с 2-углеродного члена.",
          "ar": "تبدأ متصاوغة الألدهيد والكيتون من العضو ثنائي الكربون.",
          "zh": "醛和酮的异构现象是从2-碳原子开始的。",
          "ku": "Îzomerîzma aldehîd û ketonê ji endamê 2-karbonê dest pê dike."
        },
        {
          "tr": "Alkanlar bromlu suyun kırmızı rengini hızla giderir.",
          "en": "Alkanes quickly remove the red color of brominated water.",
          "de": "Alkane entfernen schnell die rote Farbe von bromiertem Wasser.",
          "fr": "Les alcanes éliminent rapidement la couleur rouge de l'eau bromée.",
          "ru": "Алканы быстро удаляют красный цвет бромированной воды.",
          "ar": "تقوم الألكانات بإزالة اللون الأحمر للمياه المبرومة بسرعة.",
          "zh": "烷烃可以快速去除溴化水的红色。",
          "ku": "Alkan bi lez rengê sor yê ava bromînê jê dikin."
        },
        {
          "tr": "Alkinler (asetilenler, CnH2n-2) en az bir üçlü bağ içerir; uç alkinler Tollens (Ag+) ile beyaz, Fehling (Cu+) ile kırmızı çökelek verir.",
          "en": "Alkynes (acetylenes, CnH2n-2) contain at least one triple bond; Terminal alkynes give white precipitates with Tollens (Ag+) and red precipitates with Fehlings (Cu+).",
          "de": "Alkine (Acetylene, CnH2n-2) enthalten mindestens eine Dreifachbindung; Terminale Alkine ergeben weiße Niederschläge mit Tollens (Ag+) und rote Niederschläge mit Fehlings (Cu+).",
          "fr": "Les alcynes (acétylènes, CnH2n-2) contiennent au moins une triple liaison ; Les alcynes terminaux donnent des précipités blancs avec les Tollens (Ag+) et rouges avec les Fehlings (Cu+).",
          "ru": "Алкины (ацетилены, CnH2n-2) содержат хотя бы одну тройную связь; Концевые алкины дают белые осадки с Толленами (Ag+) и красные осадки с Фелингами (Cu+).",
          "ar": "تحتوي الألكينات (الأسيتيلين، CnH2n-2) على رابطة ثلاثية واحدة على الأقل؛ الألكينات الطرفية تعطي رواسب بيضاء مع تولنز (Ag+) ورواسب حمراء مع فهلينغز (Cu+).",
          "zh": "炔烃（乙炔，CnH2n-2）含有至少一个三键；末端炔烃与托伦斯 (Ag+) 产生白色沉淀，与费林斯 (Cu+) 产生红色沉淀。",
          "ku": "Alkines (acetylenes, CnH2n-2) bi kêmanî yek girêdana sê-sêyan heye; Alkînên termînalê bi Tollens (Ag+) û barîna sor bi Fehlings (Cu+) baranê spî didin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Alkinler (asetilenler, CnH2n-2) en az bir üçlü bağ içerir; uç alkinler Tollens (Ag+) ile beyaz, Fehling (Cu+) ile kırmızı çökelek verir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Alkynes (acetylenes, CnH2n-2) contain at least one triple bond; Terminal alkynes give white precipitates with Tollens (Ag+) and red precipitates with Fehlings (Cu+).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Alkine (Acetylene, CnH2n-2) enthalten mindestens eine Dreifachbindung; Terminale Alkine ergeben weiße Niederschläge mit Tollens (Ag+) und rote Niederschläge mit Fehlings (Cu+).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les alcynes (acétylènes, CnH2n-2) contiennent au moins une triple liaison ; Les alcynes terminaux donnent des précipités blancs avec les Tollens (Ag+) et rouges avec les Fehlings (Cu+).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Алкины (ацетилены, CnH2n-2) содержат хотя бы одну тройную связь; Концевые алкины дают белые осадки с Толленами (Ag+) и красные осадки с Фелингами (Cu+).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تحتوي الألكينات (الأسيتيلين، CnH2n-2) على رابطة ثلاثية واحدة على الأقل؛ الألكينات الطرفية تعطي رواسب بيضاء مع تولنز (Ag+) ورواسب حمراء مع فهلينغز (Cu+).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“炔烃（乙炔，CnH2n-2）含有至少一个三键；末端炔烃与托伦斯 (Ag+) 产生白色沉淀，与费林斯 (Cu+) 产生红色沉淀。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Alkines (acetylenes, CnH2n-2) bi kêmanî yek girêdana sê-sêyan heye; Alkînên termînalê bi Tollens (Ag+) û barîna sor bi Fehlings (Cu+) baranê spî didin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u24-twin06",
      "stem": {
        "tr": "Aşağıda Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Organic Compounds: Hydrocarbons, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Organische Verbindungen & Kohlenwasserstoffe: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Composés Organiques & Hydrocarbures, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Органические соединения и функциональные группы», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"المركبات العضوية والهيدروكربونات\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“有机化合物与官能团”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Madeyên Organîk û Komên Fonksiyonel\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Aromatik bileşiklerin atası benzendir (C6H6); Kekule rezonans yapısına sahiptir, çok kararlıdır ve katılma tepkimesine isteksizdir.",
          "en": "The ancestor of aromatic compounds is benzene (C6H6); Kekule has a resonance structure, is very stable and is reluctant to undergo addition reactions.",
          "de": "Der Vorfahre aromatischer Verbindungen ist Benzol (C6H6); Kekule hat eine Resonanzstruktur, ist sehr stabil und geht nur ungern Additionsreaktionen ein.",
          "fr": "L'ancêtre des composés aromatiques est le benzène (C6H6) ; Kekule a une structure de résonance, est très stable et hésite à subir des réactions d'addition.",
          "ru": "Предком ароматических соединений является бензол (C6H6); Кекуле имеет резонансную структуру, очень стабилен и неохотно вступает в реакции присоединения.",
          "ar": "سلف المركبات العطرية هو البنزين (C6H6)؛ يتمتع Kekule ببنية رنينية، وهو مستقر للغاية ولا يرغب في الخضوع لتفاعلات إضافية.",
          "zh": "芳香族化合物的祖先是苯（C6H6）；凯库勒具有共振结构，非常稳定，不易发生加成反应。",
          "ku": "Bavê pêkhateyên aromatîk benzen (C6H6) e; Kekule xwedan avahiyek rezonansê ye, pir bi îstîqrar e û ji ber reaksiyonên zêdebûnê nerazî ye."
        },
        {
          "tr": "Ketonlar daha ileri yükseltgenerek esterlere dönüşür.",
          "en": "Ketones are further oxidized to esters.",
          "de": "Ketone werden weiter zu Estern oxidiert.",
          "fr": "Les cétones sont ensuite oxydées en esters.",
          "ru": "Кетоны далее окисляются до сложных эфиров.",
          "ar": "تتأكسد الكيتونات أيضًا إلى استرات.",
          "zh": "酮进一步氧化成酯。",
          "ku": "Ketone bêtir ji bo esteran têne oksîd kirin."
        },
        {
          "tr": "Karboksilik asitlerin kaynama noktası hidrokarbonlardan düşüktür.",
          "en": "The boiling point of carboxylic acids is lower than hydrocarbons.",
          "de": "Der Siedepunkt von Carbonsäuren ist niedriger als der von Kohlenwasserstoffen.",
          "fr": "Le point d'ébullition des acides carboxyliques est inférieur à celui des hydrocarbures.",
          "ru": "Температура кипения карбоновых кислот ниже, чем у углеводородов.",
          "ar": "درجة غليان الأحماض الكربوكسيلية أقل من درجة غليان الهيدروكربونات.",
          "zh": "羧酸的沸点比烃低。",
          "ku": "Xala kelandinê ya asîdên karboksîlî ji hîdrokarbonan kêmtir e."
        },
        {
          "tr": "Esterlerin en küçük üyesi 1 karbonludur.",
          "en": "The smallest member of the esters has 1 carbon.",
          "de": "Der kleinste Vertreter der Ester hat 1 Kohlenstoff.",
          "fr": "Le plus petit membre des esters possède 1 carbone.",
          "ru": "Самый маленький член сложных эфиров имеет 1 углерод.",
          "ar": "أصغر عضو في الاسترات يحتوي على 1 كربون.",
          "zh": "酯中最小的成员有 1 个碳。",
          "ku": "Endamê herî piçûk ê esteran 1 karbon heye."
        },
        {
          "tr": "Alkenler doymuş hidrokarbonlar sınıfındadır.",
          "en": "Alkenes are in the class of saturated hydrocarbons.",
          "de": "Alkene gehören zur Klasse der gesättigten Kohlenwasserstoffe.",
          "fr": "Les alcènes appartiennent à la classe des hydrocarbures saturés.",
          "ru": "Алкены относятся к классу предельных углеводородов.",
          "ar": "تنتمي الألكينات إلى فئة الهيدروكربونات المشبعة.",
          "zh": "烯烃属于饱和烃类。",
          "ku": "Alken di çîna hîdrokarbonên têrbûyî de ne."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Aromatik bileşiklerin atası benzendir (C6H6); Kekule rezonans yapısına sahiptir, çok kararlıdır ve katılma tepkimesine isteksizdir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The ancestor of aromatic compounds is benzene (C6H6); Kekule has a resonance structure, is very stable and is reluctant to undergo addition reactions.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der Vorfahre aromatischer Verbindungen ist Benzol (C6H6); Kekule hat eine Resonanzstruktur, ist sehr stabil und geht nur ungern Additionsreaktionen ein.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'ancêtre des composés aromatiques est le benzène (C6H6) ; Kekule a une structure de résonance, est très stable et hésite à subir des réactions d'addition.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Предком ароматических соединений является бензол (C6H6); Кекуле имеет резонансную структуру, очень стабилен и неохотно вступает в реакции присоединения.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"سلف المركبات العطرية هو البنزين (C6H6)؛ يتمتع Kekule ببنية رنينية، وهو مستقر للغاية ولا يرغب في الخضوع لتفاعلات إضافية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“芳香族化合物的祖先是苯（C6H6）；凯库勒具有共振结构，非常稳定，不易发生加成反应。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Bavê pêkhateyên aromatîk benzen (C6H6) e; Kekule xwedan avahiyek rezonansê ye, pir bi îstîqrar e û ji ber reaksiyonên zêdebûnê nerazî ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u24-twin07",
      "stem": {
        "tr": "Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Organic Compounds: Hydrocarbons, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Organische Verbindungen & Kohlenwasserstoffe: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Composés Organiques & Hydrocarbures, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Органические соединения и функциональные группы», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"المركبات العضوية والهيدروكربونات\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“有机化合物与官能团”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Madeyên Organîk û Komên Fonksiyonel\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Aseton (keton) Tollens reaktifiyle gümüş aynası verir.",
          "en": "Acetone (ketone) gives silver mirror with Tollens reagent.",
          "de": "Aceton (Keton) ergibt mit Tollens-Reagenz einen Silberspiegel.",
          "fr": "L'acétone (cétone) donne un miroir argenté avec le réactif Tollens.",
          "ru": "Ацетон (кетон) дает серебряное зеркало с реактивом Толленса.",
          "ar": "الأسيتون (الكيتون) يعطي مرآة فضية مع كاشف تولنس.",
          "zh": "丙酮（酮）与托伦斯试剂反应生成银镜。",
          "ku": "Aceton (ketone) bi reagenta Tollens neynika zîv dide."
        },
        {
          "tr": "Alkoller (R-OH) molekülleri arasında hidrojen bağı kurar; aynı karbonlu eterlerden kaynama noktaları çok daha yüksektir.",
          "en": "Alcohols (R-OH) form hydrogen bonds between molecules; Their boiling points are much higher than ethers with the same carbon.",
          "de": "Alkohole (R-OH) bilden Wasserstoffbrückenbindungen zwischen Molekülen; Ihre Siedepunkte sind viel höher als die von Ethern mit demselben Kohlenstoff.",
          "fr": "Les alcools (R-OH) forment des liaisons hydrogène entre les molécules ; Leurs points d'ébullition sont bien plus élevés que ceux des éthers ayant le même carbone.",
          "ru": "Спирты (R-OH) образуют водородные связи между молекулами; Их температуры кипения значительно выше, чем у эфиров с тем же углеродом.",
          "ar": "تشكل الكحولات (R-OH) روابط هيدروجينية بين الجزيئات؛ درجة غليانها أعلى بكثير من الإيثرات التي لها نفس الكربون.",
          "zh": "醇（R-OH）分子间形成氢键；它们的沸点比相同碳的醚高得多。",
          "ku": "Alkol (R-OH) di navbera molekulan de girêkên hîdrojenê çêdikin; Xalên kelandinê yên wan ji eterên bi heman karbonê pir bilindtir in."
        },
        {
          "tr": "Etanol ve dimetil eter aynı kimyasal özelliklere sahiptir.",
          "en": "Ethanol and dimethyl ether have the same chemical properties.",
          "de": "Ethanol und Dimethylether haben die gleichen chemischen Eigenschaften.",
          "fr": "L'éthanol et l'éther diméthylique ont les mêmes propriétés chimiques.",
          "ru": "Этанол и диметиловый эфир имеют одинаковые химические свойства.",
          "ar": "الإيثانول وثنائي ميثيل الأثير لهما نفس الخصائص الكيميائية.",
          "zh": "乙醇和二甲醚具有相同的化学性质。",
          "ku": "Etanol û dimethyl ether xwedî heman taybetmendiyên kîmyewî ne."
        },
        {
          "tr": "Aynı karbon atomuna iki özdeş grup bağlı olsa bile cis-trans izomeri görülür.",
          "en": "Even if two identical groups are bonded to the same carbon atom, the cis-trans isomer is seen.",
          "de": "Selbst wenn zwei identische Gruppen an dasselbe Kohlenstoffatom gebunden sind, wird das cis-trans-Isomer beobachtet.",
          "fr": "Même si deux groupes identiques sont liés au même atome de carbone, l’isomère cis-trans est visible.",
          "ru": "Даже если две идентичные группы связаны с одним и тем же атомом углерода, виден цис-транс-изомер.",
          "ar": "حتى لو تم ربط مجموعتين متطابقتين بنفس ذرة الكربون، فإن الأيزومر المقرون العابر يمكن رؤيته.",
          "zh": "即使两个相同的基团键合到相同的碳原子上，也会出现顺反异构体。",
          "ku": "Ger du komên wekhev bi heman atoma karbonê re werin girêdan jî, îzomera cis-trans tê dîtin."
        },
        {
          "tr": "Katılma tepkimesinde hidrojen daima hidrojeni az olan karbona bağlanır.",
          "en": "In the addition reaction, hydrogen is always bonded to the carbon with less hydrogen.",
          "de": "Bei der Additionsreaktion wird immer Wasserstoff an den Kohlenstoff mit weniger Wasserstoff gebunden.",
          "fr": "Dans la réaction d’addition, l’hydrogène est toujours lié au carbone avec moins d’hydrogène.",
          "ru": "В реакции присоединения водород всегда связан с углеродом с меньшим количеством водорода.",
          "ar": "في تفاعل الإضافة، يرتبط الهيدروجين دائمًا بالكربون الذي يحتوي على كمية أقل من الهيدروجين.",
          "zh": "在加成反应中，氢总是与氢含量较少的碳键合。",
          "ku": "Di reaksiyona pêvekirinê de, hîdrojen her gav bi karbonê re bi hîdrojenê kêmtir ve girêdayî ye."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Alkoller (R-OH) molekülleri arasında hidrojen bağı kurar; aynı karbonlu eterlerden kaynama noktaları çok daha yüksektir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Alcohols (R-OH) form hydrogen bonds between molecules; Their boiling points are much higher than ethers with the same carbon.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Alkohole (R-OH) bilden Wasserstoffbrückenbindungen zwischen Molekülen; Ihre Siedepunkte sind viel höher als die von Ethern mit demselben Kohlenstoff.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les alcools (R-OH) forment des liaisons hydrogène entre les molécules ; Leurs points d'ébullition sont bien plus élevés que ceux des éthers ayant le même carbone.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Спирты (R-OH) образуют водородные связи между молекулами; Их температуры кипения значительно выше, чем у эфиров с тем же углеродом.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تشكل الكحولات (R-OH) روابط هيدروجينية بين الجزيئات؛ درجة غليانها أعلى بكثير من الإيثرات التي لها نفس الكربون.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“醇（R-OH）分子间形成氢键；它们的沸点比相同碳的醚高得多。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Alkol (R-OH) di navbera molekulan de girêkên hîdrojenê çêdikin; Xalên kelandinê yên wan ji eterên bi heman karbonê pir bilindtir in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u24-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Organic Compounds: Hydrocarbons, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Organische Verbindungen & Kohlenwasserstoffe: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Composés Organiques & Hydrocarbures, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Органические соединения и функциональные группы», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"المركبات العضوية والهيدروكربونات\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“有机化合物与官能团”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Madeyên Organîk û Komên Fonksiyonel\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Esterleşme tepkimesinde baz katalizörlüğünde tuz açığa çıkar.",
          "en": "In the esterification reaction, salt is released under base catalyst.",
          "de": "Bei der Veresterungsreaktion wird unter basischem Katalysator Salz freigesetzt.",
          "fr": "Dans la réaction d’estérification, le sel est libéré sous un catalyseur basique.",
          "ru": "В реакции этерификации соль выделяется под основным катализатором.",
          "ar": "في تفاعل الأسترة، يتم إطلاق الملح تحت المحفز الأساسي.",
          "zh": "在酯化反应中，在碱催化剂的作用下释放出盐。",
          "ku": "Di reaksiyona esterîfîkasyonê de, xwê di bin katalîzatora bingehîn de tê berdan."
        },
        {
          "tr": "Aldehit ve keton izomerliği 2 karbonlu üyeden başlar.",
          "en": "Aldehyde and ketone isomerism starts from the 2-carbon member.",
          "de": "Die Aldehyd- und Ketonisomerie beginnt beim 2-Kohlenstoff-Mitglied.",
          "fr": "L'isomérie des aldéhydes et des cétones commence à partir du membre à 2 carbones.",
          "ru": "Изомерия альдегидов и кетонов начинается с 2-углеродного члена.",
          "ar": "تبدأ متصاوغة الألدهيد والكيتون من العضو ثنائي الكربون.",
          "zh": "醛和酮的异构现象是从2-碳原子开始的。",
          "ku": "Îzomerîzma aldehîd û ketonê ji endamê 2-karbonê dest pê dike."
        },
        {
          "tr": "Primer alkoller bir basamak yükseltgenince aldehit, iki basamak yükseltgenince karboksilik asit oluşturur.",
          "en": "Primary alcohols form aldehydes when oxidized one step, and carboxylic acids when oxidized two steps.",
          "de": "Primäre Alkohole bilden Aldehyde, wenn sie in einem Schritt oxidiert werden, und Carbonsäuren, wenn sie in zwei Schritten oxidiert werden.",
          "fr": "Les alcools primaires forment des aldéhydes lorsqu'ils sont oxydés en une étape et des acides carboxyliques lorsqu'ils sont oxydés en deux étapes.",
          "ru": "Первичные спирты при одностадийном окислении образуют альдегиды, а при двухступенчатом окислении карбоновые кислоты.",
          "ar": "تشكل الكحولات الأولية الألدهيدات عند أكسدتها بخطوة واحدة، والأحماض الكربوكسيلية عند أكسدتها بخطوتين.",
          "zh": "伯醇在一步氧化时形成醛，在氧化两步时形成羧酸。",
          "ku": "Alkolên seretayî dema ku yek gav oksîde dibin aldehîd û dema ku du gavan têne oksîdan asîdên karboksîlîk ava dikin."
        },
        {
          "tr": "Alkanlar bromlu suyun kırmızı rengini hızla giderir.",
          "en": "Alkanes quickly remove the red color of brominated water.",
          "de": "Alkane entfernen schnell die rote Farbe von bromiertem Wasser.",
          "fr": "Les alcanes éliminent rapidement la couleur rouge de l'eau bromée.",
          "ru": "Алканы быстро удаляют красный цвет бромированной воды.",
          "ar": "تقوم الألكانات بإزالة اللون الأحمر للمياه المبرومة بسرعة.",
          "zh": "烷烃可以快速去除溴化水的红色。",
          "ku": "Alkan bi lez rengê sor yê ava bromînê jê dikin."
        },
        {
          "tr": "Alkanlar bromlu suyun rengini hemen giderir.",
          "en": "Alkanes quickly decolorize brominated water.",
          "de": "Alkane entfärben bromiertes Wasser schnell.",
          "fr": "Les alcanes décolorent rapidement l'eau bromée.",
          "ru": "Алканы быстро обесцвечивают бромированную воду.",
          "ar": "تعمل الألكانات على إزالة اللون من الماء المبروم بسرعة.",
          "zh": "烷烃可以快速使溴化水脱色。",
          "ku": "Alkan bi lez ava bromînkirî dereng dikin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Primer alkoller bir basamak yükseltgenince aldehit, iki basamak yükseltgenince karboksilik asit oluşturur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Primary alcohols form aldehydes when oxidized one step, and carboxylic acids when oxidized two steps.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Primäre Alkohole bilden Aldehyde, wenn sie in einem Schritt oxidiert werden, und Carbonsäuren, wenn sie in zwei Schritten oxidiert werden.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les alcools primaires forment des aldéhydes lorsqu'ils sont oxydés en une étape et des acides carboxyliques lorsqu'ils sont oxydés en deux étapes.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Первичные спирты при одностадийном окислении образуют альдегиды, а при двухступенчатом окислении карбоновые кислоты.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تشكل الكحولات الأولية الألدهيدات عند أكسدتها بخطوة واحدة، والأحماض الكربوكسيلية عند أكسدتها بخطوتين.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“伯醇在一步氧化时形成醛，在氧化两步时形成羧酸。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Alkolên seretayî dema ku yek gav oksîde dibin aldehîd û dema ku du gavan têne oksîdan asîdên karboksîlîk ava dikin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u24-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Organic Compounds: Hydrocarbons, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Organische Verbindungen & Kohlenwasserstoffe die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Composés Organiques & Hydrocarbures, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Органические соединения и функциональные группы», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"المركبات العضوية والهيدروكربونات\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“有机化合物与官能团”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Madeyên Organîk û Komên Fonksiyonel\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Karboksilik asitlerin kaynama noktası hidrokarbonlardan düşüktür.",
          "en": "The boiling point of carboxylic acids is lower than hydrocarbons.",
          "de": "Der Siedepunkt von Carbonsäuren ist niedriger als der von Kohlenwasserstoffen.",
          "fr": "Le point d'ébullition des acides carboxyliques est inférieur à celui des hydrocarbures.",
          "ru": "Температура кипения карбоновых кислот ниже, чем у углеводородов.",
          "ar": "درجة غليان الأحماض الكربوكسيلية أقل من درجة غليان الهيدروكربونات.",
          "zh": "羧酸的沸点比烃低。",
          "ku": "Xala kelandinê ya asîdên karboksîlî ji hîdrokarbonan kêmtir e."
        },
        {
          "tr": "Esterlerin en küçük üyesi 1 karbonludur.",
          "en": "The smallest member of the esters has 1 carbon.",
          "de": "Der kleinste Vertreter der Ester hat 1 Kohlenstoff.",
          "fr": "Le plus petit membre des esters possède 1 carbone.",
          "ru": "Самый маленький член сложных эфиров имеет 1 углерод.",
          "ar": "أصغر عضو في الاسترات يحتوي على 1 كربون.",
          "zh": "酯中最小的成员有 1 个碳。",
          "ku": "Endamê herî piçûk ê esteran 1 karbon heye."
        },
        {
          "tr": "Alkenler doymuş hidrokarbonlar sınıfındadır.",
          "en": "Alkenes are in the class of saturated hydrocarbons.",
          "de": "Alkene gehören zur Klasse der gesättigten Kohlenwasserstoffe.",
          "fr": "Les alcènes appartiennent à la classe des hydrocarbures saturés.",
          "ru": "Алкены относятся к классу предельных углеводородов.",
          "ar": "تنتمي الألكينات إلى فئة الهيدروكربونات المشبعة.",
          "zh": "烯烃属于饱和烃类。",
          "ku": "Alken di çîna hîdrokarbonên têrbûyî de ne."
        },
        {
          "tr": "Sekonder alkoller yükseltgenerek keton oluşturur; tersiyer alkoller yükseltgenmeye karşı dirençlidir.",
          "en": "Secondary alcohols are oxidized to form ketones; tertiary alcohols are resistant to oxidation.",
          "de": "Sekundäre Alkohole werden zu Ketonen oxidiert; Tertiäre Alkohole sind oxidationsbeständig.",
          "fr": "Les alcools secondaires sont oxydés pour former des cétones ; les alcools tertiaires résistent à l'oxydation.",
          "ru": "Вторичные спирты окисляются с образованием кетонов; третичные спирты устойчивы к окислению.",
          "ar": "تتأكسد الكحولات الثانوية لتكوين الكيتونات. الكحولات الثلاثية مقاومة للأكسدة.",
          "zh": "仲醇被氧化生成酮；叔醇具有抗氧化性。",
          "ku": "Alkolên duyemîn têne oksîd kirin ku ketonan çêbikin; alkolên sêyem li hember oksîdasyonê berxwedêr in."
        },
        {
          "tr": "İç alkinler Tollens belirteciyle çökelek verir.",
          "en": "Internal alkynes precipitate with the Tollens reagent.",
          "de": "Interne Alkine fallen mit dem Tollens-Reagenz aus.",
          "fr": "Les alcynes internes précipitent avec le réactif de Tollens.",
          "ru": "Внутренние алкины осаждаются реактивом Толленса.",
          "ar": "تترسب الألكينات الداخلية مع كاشف تولنس.",
          "zh": "内部炔烃与 Tollens 试剂一起沉淀。",
          "ku": "Alkînên hundirîn bi reagenta Tollens dibarin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Sekonder alkoller yükseltgenerek keton oluşturur; tersiyer alkoller yükseltgenmeye karşı dirençlidir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Secondary alcohols are oxidized to form ketones; tertiary alcohols are resistant to oxidation.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Sekundäre Alkohole werden zu Ketonen oxidiert; Tertiäre Alkohole sind oxidationsbeständig.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les alcools secondaires sont oxydés pour former des cétones ; les alcools tertiaires résistent à l'oxydation.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Вторичные спирты окисляются с образованием кетонов; третичные спирты устойчивы к окислению.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تتأكسد الكحولات الثانوية لتكوين الكيتونات. الكحولات الثلاثية مقاومة للأكسدة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“仲醇被氧化生成酮；叔醇具有抗氧化性。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Alkolên duyemîn têne oksîd kirin ku ketonan çêbikin; alkolên sêyem li hember oksîdasyonê berxwedêr in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u24-twin10",
      "stem": {
        "tr": "Kimya dersinde Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Organic Compounds: Hydrocarbons, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Organische Verbindungen & Kohlenwasserstoffe: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Composés Organiques & Hydrocarbures, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Органические соединения и функциональные группы», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"المركبات العضوية والهيدروكربونات\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“有机化合物与官能团”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Madeyên Organîk û Komên Fonksiyonel\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Etanol ve dimetil eter aynı kimyasal özelliklere sahiptir.",
          "en": "Ethanol and dimethyl ether have the same chemical properties.",
          "de": "Ethanol und Dimethylether haben die gleichen chemischen Eigenschaften.",
          "fr": "L'éthanol et l'éther diméthylique ont les mêmes propriétés chimiques.",
          "ru": "Этанол и диметиловый эфир имеют одинаковые химические свойства.",
          "ar": "الإيثانول وثنائي ميثيل الأثير لهما نفس الخصائص الكيميائية.",
          "zh": "乙醇和二甲醚具有相同的化学性质。",
          "ku": "Etanol û dimethyl ether xwedî heman taybetmendiyên kîmyewî ne."
        },
        {
          "tr": "Aynı karbon atomuna iki özdeş grup bağlı olsa bile cis-trans izomeri görülür.",
          "en": "Even if two identical groups are bonded to the same carbon atom, the cis-trans isomer is seen.",
          "de": "Selbst wenn zwei identische Gruppen an dasselbe Kohlenstoffatom gebunden sind, wird das cis-trans-Isomer beobachtet.",
          "fr": "Même si deux groupes identiques sont liés au même atome de carbone, l’isomère cis-trans est visible.",
          "ru": "Даже если две идентичные группы связаны с одним и тем же атомом углерода, виден цис-транс-изомер.",
          "ar": "حتى لو تم ربط مجموعتين متطابقتين بنفس ذرة الكربون، فإن الأيزومر المقرون العابر يمكن رؤيته.",
          "zh": "即使两个相同的基团键合到相同的碳原子上，也会出现顺反异构体。",
          "ku": "Ger du komên wekhev bi heman atoma karbonê re werin girêdan jî, îzomera cis-trans tê dîtin."
        },
        {
          "tr": "Katılma tepkimesinde hidrojen daima hidrojeni az olan karbona bağlanır.",
          "en": "In the addition reaction, hydrogen is always bonded to the carbon with less hydrogen.",
          "de": "Bei der Additionsreaktion wird immer Wasserstoff an den Kohlenstoff mit weniger Wasserstoff gebunden.",
          "fr": "Dans la réaction d’addition, l’hydrogène est toujours lié au carbone avec moins d’hydrogène.",
          "ru": "В реакции присоединения водород всегда связан с углеродом с меньшим количеством водорода.",
          "ar": "في تفاعل الإضافة، يرتبط الهيدروجين دائمًا بالكربون الذي يحتوي على كمية أقل من الهيدروجين.",
          "zh": "在加成反应中，氢总是与氢含量较少的碳键合。",
          "ku": "Di reaksiyona pêvekirinê de, hîdrojen her gav bi karbonê re bi hîdrojenê kêmtir ve girêdayî ye."
        },
        {
          "tr": "Benzen üç tane normal alken gibi kolayca bromlu suyu giderir.",
          "en": "Benzene readily removes brominated water, as do the three normal alkenes.",
          "de": "Benzol entfernt leicht bromiertes Wasser, ebenso wie die drei normalen Alkene.",
          "fr": "Le benzène élimine facilement l'eau bromée, tout comme les trois alcènes normaux.",
          "ru": "Бензол легко удаляет бромированную воду, как и три нормальных алкена.",
          "ar": "يزيل البنزين الماء المبروم بسهولة، كما تفعل الألكينات الطبيعية الثلاثة.",
          "zh": "与三种普通烯烃一样，苯很容易去除溴化水。",
          "ku": "Benzene bi hêsanî ava bromînkirî radike, wekî sê alkenên normal."
        },
        {
          "tr": "Aldehitler (R-CHO) Tollens reaktifi ile gümüş aynası, Fehling çözeltisi ile kırmızı Cu2O çökeleği oluşturur; ketonlar bu tepkimeyi vermez.",
          "en": "Aldehydes (R-CHO) form a silver mirror with Tollens' reagent and a red Cu2O precipitate with Fehling's solution; Ketones do not give this reaction.",
          "de": "Aldehyde (R-CHO) bilden mit Tollens-Reagenz einen silbernen Spiegel und mit Fehling-Lösung einen roten Cu2O-Niederschlag; Ketone lösen diese Reaktion nicht aus.",
          "fr": "Les aldéhydes (R-CHO) forment un miroir d'argent avec le réactif de Tollens et un précipité rouge de Cu2O avec la solution de Fehling ; Les cétones ne donnent pas cette réaction.",
          "ru": "Альдегиды (R-CHO) образуют серебряное зеркало с реактивом Толленса и красный осадок Cu2O с раствором Фелинга; Кетоны не дают такой реакции.",
          "ar": "تشكل الألدهيدات (R-CHO) مرآة فضية مع كاشف تولنز وترسب Cu2O أحمر مع محلول فهلنج؛ الكيتونات لا تعطي هذا التفاعل.",
          "zh": "醛（R-CHO）与托伦斯试剂形成银镜，与费林溶液形成红色 Cu2O 沉淀；酮不会发生这种反应。",
          "ku": "Aldehîd (R-CHO) bi reagenta Tollens re neynika zîvîn û bi çareseriya Fehling re jî barîna Cu2O ya sor ava dike; Keton vê reaksiyonê nade."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Aldehitler (R-CHO) Tollens reaktifi ile gümüş aynası, Fehling çözeltisi ile kırmızı Cu2O çökeleği oluşturur; ketonlar bu tepkimeyi vermez.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Aldehydes (R-CHO) form a silver mirror with Tollens' reagent and a red Cu2O precipitate with Fehling's solution; Ketones do not give this reaction.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Aldehyde (R-CHO) bilden mit Tollens-Reagenz einen silbernen Spiegel und mit Fehling-Lösung einen roten Cu2O-Niederschlag; Ketone lösen diese Reaktion nicht aus.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les aldéhydes (R-CHO) forment un miroir d'argent avec le réactif de Tollens et un précipité rouge de Cu2O avec la solution de Fehling ; Les cétones ne donnent pas cette réaction.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Альдегиды (R-CHO) образуют серебряное зеркало с реактивом Толленса и красный осадок Cu2O с раствором Фелинга; Кетоны не дают такой реакции.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تشكل الألدهيدات (R-CHO) مرآة فضية مع كاشف تولنز وترسب Cu2O أحمر مع محلول فهلنج؛ الكيتونات لا تعطي هذا التفاعل.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“醛（R-CHO）与托伦斯试剂形成银镜，与费林溶液形成红色 Cu2O 沉淀；酮不会发生这种反应。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Aldehîd (R-CHO) bi reagenta Tollens re neynika zîvîn û bi çareseriya Fehling re jî barîna Cu2O ya sor ava dike; Keton vê reaksiyonê nade.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u24-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Organic Compounds: Hydrocarbons?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Organische Verbindungen & Kohlenwasserstoffe zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Composés Organiques & Hydrocarbures ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Органические соединения и функциональные группы»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"المركبات العضوية والهيدروكربونات\"؟",
        "zh": "根据“有机化合物与官能团”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Madeyên Organîk û Komên Fonksiyonel\" de rast e?"
      },
      "options": [
        {
          "tr": "Karboksilik asitler (R-COOH) alkollerle asit katalizörlüğünde tepkimeye girerek hoş kokulu esterleri (R-COO-R') oluşturur (esterleşme).",
          "en": "Carboxylic acids (R-COOH) react with alcohols under acid catalysis to form fragrant esters (R-COO-R') (esterification).",
          "de": "Carbonsäuren (R-COOH) reagieren mit Alkoholen unter Säurekatalyse zu duftenden Estern (R-COO-R') (Veresterung).",
          "fr": "Les acides carboxyliques (R-COOH) réagissent avec les alcools sous catalyse acide pour former des esters parfumés (R-COO-R') (estérification).",
          "ru": "Карбоновые кислоты (R-COOH) реагируют со спиртами в условиях кислотного катализа с образованием ароматных эфиров (R-COO-R') (этерификация).",
          "ar": "تتفاعل الأحماض الكربوكسيلية (R-COOH) مع الكحولات تحت التحفيز الحمضي لتكوين استرات عطرة (R-COO-R') (الأسترة).",
          "zh": "羧酸（R-COOH）在酸催化下与醇反应生成芳香酯（R-COO-R'）（酯化）。",
          "ku": "Asîdên karboksîlîk (R-COOH) di bin katalîzasyona asîdê de bi alkolan re reaksiyonê dikin û esterên bîhnxweş (R-COO-R') çê dikin (esterîkirin)."
        },
        {
          "tr": "Aldehit ve keton izomerliği 2 karbonlu üyeden başlar.",
          "en": "Aldehyde and ketone isomerism starts from the 2-carbon member.",
          "de": "Die Aldehyd- und Ketonisomerie beginnt beim 2-Kohlenstoff-Mitglied.",
          "fr": "L'isomérie des aldéhydes et des cétones commence à partir du membre à 2 carbones.",
          "ru": "Изомерия альдегидов и кетонов начинается с 2-углеродного члена.",
          "ar": "تبدأ متصاوغة الألدهيد والكيتون من العضو ثنائي الكربون.",
          "zh": "醛和酮的异构现象是从2-碳原子开始的。",
          "ku": "Îzomerîzma aldehîd û ketonê ji endamê 2-karbonê dest pê dike."
        },
        {
          "tr": "Alkanlar bromlu suyun kırmızı rengini hızla giderir.",
          "en": "Alkanes quickly remove the red color of brominated water.",
          "de": "Alkane entfernen schnell die rote Farbe von bromiertem Wasser.",
          "fr": "Les alcanes éliminent rapidement la couleur rouge de l'eau bromée.",
          "ru": "Алканы быстро удаляют красный цвет бромированной воды.",
          "ar": "تقوم الألكانات بإزالة اللون الأحمر للمياه المبرومة بسرعة.",
          "zh": "烷烃可以快速去除溴化水的红色。",
          "ku": "Alkan bi lez rengê sor yê ava bromînê jê dikin."
        },
        {
          "tr": "Alkanlar bromlu suyun rengini hemen giderir.",
          "en": "Alkanes quickly decolorize brominated water.",
          "de": "Alkane entfärben bromiertes Wasser schnell.",
          "fr": "Les alcanes décolorent rapidement l'eau bromée.",
          "ru": "Алканы быстро обесцвечивают бромированную воду.",
          "ar": "تعمل الألكانات على إزالة اللون من الماء المبروم بسرعة.",
          "zh": "烷烃可以快速使溴化水脱色。",
          "ku": "Alkan bi lez ava bromînkirî dereng dikin."
        },
        {
          "tr": "Eterlerin kaynama noktası alkollerden daha yüksektir.",
          "en": "Ethers have a higher boiling point than alcohols.",
          "de": "Ether haben einen höheren Siedepunkt als Alkohole.",
          "fr": "Les éthers ont un point d'ébullition plus élevé que les alcools.",
          "ru": "Эфиры имеют более высокую температуру кипения, чем спирты.",
          "ar": "الإيثرات لها درجة غليان أعلى من الكحولات.",
          "zh": "醚的沸点高于醇。",
          "ku": "Eter ji alkolan xwedî nuqteya kelandinê ye."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Karboksilik asitler (R-COOH) alkollerle asit katalizörlüğünde tepkimeye girerek hoş kokulu esterleri (R-COO-R') oluşturur (esterleşme).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Carboxylic acids (R-COOH) react with alcohols under acid catalysis to form fragrant esters (R-COO-R') (esterification).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Carbonsäuren (R-COOH) reagieren mit Alkoholen unter Säurekatalyse zu duftenden Estern (R-COO-R') (Veresterung).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les acides carboxyliques (R-COOH) réagissent avec les alcools sous catalyse acide pour former des esters parfumés (R-COO-R') (estérification).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Карбоновые кислоты (R-COOH) реагируют со спиртами в условиях кислотного катализа с образованием ароматных эфиров (R-COO-R') (этерификация).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تتفاعل الأحماض الكربوكسيلية (R-COOH) مع الكحولات تحت التحفيز الحمضي لتكوين استرات عطرة (R-COO-R') (الأسترة).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“羧酸（R-COOH）在酸催化下与醇反应生成芳香酯（R-COO-R'）（酯化）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Asîdên karboksîlîk (R-COOH) di bin katalîzasyona asîdê de bi alkolan re reaksiyonê dikin û esterên bîhnxweş (R-COO-R') çê dikin (esterîkirin).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u24-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Organic Compounds: Hydrocarbons, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Organische Verbindungen & Kohlenwasserstoffe: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Composés Organiques & Hydrocarbures, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Органические соединения и функциональные группы», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"المركبات العضوية والهيدروكربونات\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“有机化合物与官能团”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Madeyên Organîk û Komên Fonksiyonel\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Esterlerin en küçük üyesi 1 karbonludur.",
          "en": "The smallest member of the esters has 1 carbon.",
          "de": "Der kleinste Vertreter der Ester hat 1 Kohlenstoff.",
          "fr": "Le plus petit membre des esters possède 1 carbone.",
          "ru": "Самый маленький член сложных эфиров имеет 1 углерод.",
          "ar": "أصغر عضو في الاسترات يحتوي على 1 كربون.",
          "zh": "酯中最小的成员有 1 个碳。",
          "ku": "Endamê herî piçûk ê esteran 1 karbon heye."
        },
        {
          "tr": "Karboksilik asit molekülleri kendi aralarında çift hidrojen bağı (dimer) oluşturduğundan kaynama noktaları oldukça yüksektir.",
          "en": "Since carboxylic acid molecules form double hydrogen bonds (dimers) among themselves, their boiling points are quite high.",
          "de": "Da Carbonsäuremoleküle untereinander doppelte Wasserstoffbrückenbindungen (Dimere) bilden, sind ihre Siedepunkte recht hoch.",
          "fr": "Étant donné que les molécules d'acide carboxylique forment entre elles des doubles liaisons hydrogène (dimères), leurs points d'ébullition sont assez élevés.",
          "ru": "Поскольку молекулы карбоновых кислот образуют между собой двойные водородные связи (димеры), их температуры кипения достаточно высоки.",
          "ar": "نظرًا لأن جزيئات حمض الكربوكسيل تشكل روابط هيدروجينية مزدوجة (ثنائية) فيما بينها، فإن نقاط غليانها تكون عالية جدًا.",
          "zh": "由于羧酸分子之间形成双氢键（二聚体），因此它们的沸点相当高。",
          "ku": "Ji ber ku molekulên asîda karboksîlîk di nav xwe de dubendên hîdrojenê (dimer) çêdikin, xalên kelandinê yên wan pir zêde ne."
        },
        {
          "tr": "Alkenler doymuş hidrokarbonlar sınıfındadır.",
          "en": "Alkenes are in the class of saturated hydrocarbons.",
          "de": "Alkene gehören zur Klasse der gesättigten Kohlenwasserstoffe.",
          "fr": "Les alcènes appartiennent à la classe des hydrocarbures saturés.",
          "ru": "Алкены относятся к классу предельных углеводородов.",
          "ar": "تنتمي الألكينات إلى فئة الهيدروكربونات المشبعة.",
          "zh": "烯烃属于饱和烃类。",
          "ku": "Alken di çîna hîdrokarbonên têrbûyî de ne."
        },
        {
          "tr": "İç alkinler Tollens belirteciyle çökelek verir.",
          "en": "Internal alkynes precipitate with the Tollens reagent.",
          "de": "Interne Alkine fallen mit dem Tollens-Reagenz aus.",
          "fr": "Les alcynes internes précipitent avec le réactif de Tollens.",
          "ru": "Внутренние алкины осаждаются реактивом Толленса.",
          "ar": "تترسب الألكينات الداخلية مع كاشف تولنس.",
          "zh": "内部炔烃与 Tollens 试剂一起沉淀。",
          "ku": "Alkînên hundirîn bi reagenta Tollens dibarin."
        },
        {
          "tr": "Tersiyer alkoller kolayca yükseltgenerek keton verir.",
          "en": "Tertiary alcohols are easily oxidized to give ketones.",
          "de": "Tertiäre Alkohole werden leicht zu Ketonen oxidiert.",
          "fr": "Les alcools tertiaires sont facilement oxydés pour donner des cétones.",
          "ru": "Третичные спирты легко окисляются с образованием кетонов.",
          "ar": "تتأكسد الكحولات الثلاثية بسهولة لتعطي الكيتونات.",
          "zh": "叔醇很容易被氧化生成酮。",
          "ku": "Alkolên sêyemîn bi hêsanî têne oksîd kirin da ku ketonan bidin."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Karboksilik asit molekülleri kendi aralarında çift hidrojen bağı (dimer) oluşturduğundan kaynama noktaları oldukça yüksektir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Since carboxylic acid molecules form double hydrogen bonds (dimers) among themselves, their boiling points are quite high.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Da Carbonsäuremoleküle untereinander doppelte Wasserstoffbrückenbindungen (Dimere) bilden, sind ihre Siedepunkte recht hoch.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Étant donné que les molécules d'acide carboxylique forment entre elles des doubles liaisons hydrogène (dimères), leurs points d'ébullition sont assez élevés.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Поскольку молекулы карбоновых кислот образуют между собой двойные водородные связи (димеры), их температуры кипения достаточно высоки.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"نظرًا لأن جزيئات حمض الكربوكسيل تشكل روابط هيدروجينية مزدوجة (ثنائية) فيما بينها، فإن نقاط غليانها تكون عالية جدًا.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“由于羧酸分子之间形成双氢键（二聚体），因此它们的沸点相当高。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ji ber ku molekulên asîda karboksîlîk di nav xwe de dubendên hîdrojenê (dimer) çêdikin, xalên kelandinê yên wan pir zêde ne.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u24-twin13",
      "stem": {
        "tr": "Aşağıda Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Organic Compounds: Hydrocarbons, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Organische Verbindungen & Kohlenwasserstoffe: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Composés Organiques & Hydrocarbures, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Органические соединения и функциональные группы», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"المركبات العضوية والهيدروكربونات\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“有机化合物与官能团”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Madeyên Organîk û Komên Fonksiyonel\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Aynı karbon atomuna iki özdeş grup bağlı olsa bile cis-trans izomeri görülür.",
          "en": "Even if two identical groups are bonded to the same carbon atom, the cis-trans isomer is seen.",
          "de": "Selbst wenn zwei identische Gruppen an dasselbe Kohlenstoffatom gebunden sind, wird das cis-trans-Isomer beobachtet.",
          "fr": "Même si deux groupes identiques sont liés au même atome de carbone, l’isomère cis-trans est visible.",
          "ru": "Даже если две идентичные группы связаны с одним и тем же атомом углерода, виден цис-транс-изомер.",
          "ar": "حتى لو تم ربط مجموعتين متطابقتين بنفس ذرة الكربون، فإن الأيزومر المقرون العابر يمكن رؤيته.",
          "zh": "即使两个相同的基团键合到相同的碳原子上，也会出现顺反异构体。",
          "ku": "Ger du komên wekhev bi heman atoma karbonê re werin girêdan jî, îzomera cis-trans tê dîtin."
        },
        {
          "tr": "Katılma tepkimesinde hidrojen daima hidrojeni az olan karbona bağlanır.",
          "en": "In the addition reaction, hydrogen is always bonded to the carbon with less hydrogen.",
          "de": "Bei der Additionsreaktion wird immer Wasserstoff an den Kohlenstoff mit weniger Wasserstoff gebunden.",
          "fr": "Dans la réaction d’addition, l’hydrogène est toujours lié au carbone avec moins d’hydrogène.",
          "ru": "В реакции присоединения водород всегда связан с углеродом с меньшим количеством водорода.",
          "ar": "في تفاعل الإضافة، يرتبط الهيدروجين دائمًا بالكربون الذي يحتوي على كمية أقل من الهيدروجين.",
          "zh": "在加成反应中，氢总是与氢含量较少的碳键合。",
          "ku": "Di reaksiyona pêvekirinê de, hîdrojen her gav bi karbonê re bi hîdrojenê kêmtir ve girêdayî ye."
        },
        {
          "tr": "Aynı karbon sayılı monoalkoller ile eterler birbirinin fonksiyonel grup izomeridir (örn. Etanol C2H5OH ve Dimetil eter CH3-O-CH3).",
          "en": "Monoalcohols and ethers with the same carbon number are functional group isomers of each other (e.g. Ethanol C2H5OH and Dimethyl ether CH3-O-CH3).",
          "de": "Monoalkohole und Ether mit der gleichen Kohlenstoffzahl sind funktionelle Gruppenisomere voneinander (z. B. Ethanol C2H5OH und Dimethylether CH3-O-CH3).",
          "fr": "Les monoalcools et les éthers ayant le même nombre de carbones sont des isomères de groupes fonctionnels les uns des autres (par exemple l'éthanol C2H5OH et l'éther diméthylique CH3-O-CH3).",
          "ru": "Моноспирты и простые эфиры с одинаковым числом атомов углерода являются изомерами функциональных групп друг друга (например, этанол C2H5OH и диметиловый эфир CH3-O-CH3).",
          "ar": "الكحولات الأحادية والإيثرات التي لها نفس رقم الكربون هي أيزومرات مجموعة وظيفية لبعضها البعض (مثل الإيثانول C2H5OH وثنائي ميثيل إيثر CH3-O-CH3).",
          "zh": "具有相同碳数的一元醇和醚是彼此的官能团异构体（例如乙醇C2H5OH和二甲醚CH3-O-CH3）。",
          "ku": "Monoalkol û etherên bi heman hejmara karbonê îzomerên koma fonksiyonel ên hev in (mînak Etanol C2H5OH û Dimetîl ether CH3-O-CH3)."
        },
        {
          "tr": "Benzen üç tane normal alken gibi kolayca bromlu suyu giderir.",
          "en": "Benzene readily removes brominated water, as do the three normal alkenes.",
          "de": "Benzol entfernt leicht bromiertes Wasser, ebenso wie die drei normalen Alkene.",
          "fr": "Le benzène élimine facilement l'eau bromée, tout comme les trois alcènes normaux.",
          "ru": "Бензол легко удаляет бромированную воду, как и три нормальных алкена.",
          "ar": "يزيل البنزين الماء المبروم بسهولة، كما تفعل الألكينات الطبيعية الثلاثة.",
          "zh": "与三种普通烯烃一样，苯很容易去除溴化水。",
          "ku": "Benzene bi hêsanî ava bromînkirî radike, wekî sê alkenên normal."
        },
        {
          "tr": "Ketonlar daha ileri yükseltgenerek esterlere dönüşür.",
          "en": "Ketones are further oxidized to esters.",
          "de": "Ketone werden weiter zu Estern oxidiert.",
          "fr": "Les cétones sont ensuite oxydées en esters.",
          "ru": "Кетоны далее окисляются до сложных эфиров.",
          "ar": "تتأكسد الكيتونات أيضًا إلى استرات.",
          "zh": "酮进一步氧化成酯。",
          "ku": "Ketone bêtir ji bo esteran têne oksîd kirin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Aynı karbon sayılı monoalkoller ile eterler birbirinin fonksiyonel grup izomeridir (örn. Etanol C2H5OH ve Dimetil eter CH3-O-CH3).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Monoalcohols and ethers with the same carbon number are functional group isomers of each other (e.g. Ethanol C2H5OH and Dimethyl ether CH3-O-CH3).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Monoalkohole und Ether mit der gleichen Kohlenstoffzahl sind funktionelle Gruppenisomere voneinander (z. B. Ethanol C2H5OH und Dimethylether CH3-O-CH3).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les monoalcools et les éthers ayant le même nombre de carbones sont des isomères de groupes fonctionnels les uns des autres (par exemple l'éthanol C2H5OH et l'éther diméthylique CH3-O-CH3).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Моноспирты и простые эфиры с одинаковым числом атомов углерода являются изомерами функциональных групп друг друга (например, этанол C2H5OH и диметиловый эфир CH3-O-CH3).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الكحولات الأحادية والإيثرات التي لها نفس رقم الكربون هي أيزومرات مجموعة وظيفية لبعضها البعض (مثل الإيثانول C2H5OH وثنائي ميثيل إيثر CH3-O-CH3).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“具有相同碳数的一元醇和醚是彼此的官能团异构体（例如乙醇C2H5OH和二甲醚CH3-O-CH3）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Monoalkol û etherên bi heman hejmara karbonê îzomerên koma fonksiyonel ên hev in (mînak Etanol C2H5OH û Dimetîl ether CH3-O-CH3).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u24-twin14",
      "stem": {
        "tr": "Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Organic Compounds: Hydrocarbons, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Organische Verbindungen & Kohlenwasserstoffe: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Composés Organiques & Hydrocarbures, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Органические соединения и функциональные группы», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"المركبات العضوية والهيدروكربونات\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“有机化合物与官能团”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Madeyên Organîk û Komên Fonksiyonel\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Alkanlar bromlu suyun kırmızı rengini hızla giderir.",
          "en": "Alkanes quickly remove the red color of brominated water.",
          "de": "Alkane entfernen schnell die rote Farbe von bromiertem Wasser.",
          "fr": "Les alcanes éliminent rapidement la couleur rouge de l'eau bromée.",
          "ru": "Алканы быстро удаляют красный цвет бромированной воды.",
          "ar": "تقوم الألكانات بإزالة اللون الأحمر للمياه المبرومة بسرعة.",
          "zh": "烷烃可以快速去除溴化水的红色。",
          "ku": "Alkan bi lez rengê sor yê ava bromînê jê dikin."
        },
        {
          "tr": "Alkanlar bromlu suyun rengini hemen giderir.",
          "en": "Alkanes quickly decolorize brominated water.",
          "de": "Alkane entfärben bromiertes Wasser schnell.",
          "fr": "Les alcanes décolorent rapidement l'eau bromée.",
          "ru": "Алканы быстро обесцвечивают бромированную воду.",
          "ar": "تعمل الألكانات على إزالة اللون من الماء المبروم بسرعة.",
          "zh": "烷烃可以快速使溴化水脱色。",
          "ku": "Alkan bi lez ava bromînkirî dereng dikin."
        },
        {
          "tr": "Eterlerin kaynama noktası alkollerden daha yüksektir.",
          "en": "Ethers have a higher boiling point than alcohols.",
          "de": "Ether haben einen höheren Siedepunkt als Alkohole.",
          "fr": "Les éthers ont un point d'ébullition plus élevé que les alcools.",
          "ru": "Эфиры имеют более высокую температуру кипения, чем спирты.",
          "ar": "الإيثرات لها درجة غليان أعلى من الكحولات.",
          "zh": "醚的沸点高于醇。",
          "ku": "Eter ji alkolan xwedî nuqteya kelandinê ye."
        },
        {
          "tr": "Aynı karbon sayılı aldehitler ile ketonlar birbirinin fonksiyonel grup izomeridir (örn. Propanal ve Propanon).",
          "en": "Aldehydes and ketones with the same carbon number are functional group isomers of each other (e.g. Propanal and Propanone).",
          "de": "Aldehyde und Ketone mit der gleichen Kohlenstoffzahl sind funktionelle Isomere voneinander (z. B. Propanal und Propanon).",
          "fr": "Les aldéhydes et les cétones ayant le même nombre de carbones sont des isomères de groupes fonctionnels les uns des autres (par exemple le propanal et la propanone).",
          "ru": "Альдегиды и кетоны с одинаковым числом атомов углерода являются изомерами функциональных групп друг друга (например, пропаналь и пропанон).",
          "ar": "الألدهيدات والكيتونات التي لها نفس رقم الكربون هي أيزومرات مجموعة وظيفية لبعضها البعض (مثل البروبانال والبروبانون).",
          "zh": "具有相同碳数的醛和酮是彼此的官能团异构体（例如丙醛和丙酮）。",
          "ku": "Aldehîd û ketonên bi heman hejmara karbonê îzomerên koma fonksiyonel ên hev in (mînak Propanal û Propanone)."
        },
        {
          "tr": "Aseton (keton) Tollens reaktifiyle gümüş aynası verir.",
          "en": "Acetone (ketone) gives silver mirror with Tollens reagent.",
          "de": "Aceton (Keton) ergibt mit Tollens-Reagenz einen Silberspiegel.",
          "fr": "L'acétone (cétone) donne un miroir argenté avec le réactif Tollens.",
          "ru": "Ацетон (кетон) дает серебряное зеркало с реактивом Толленса.",
          "ar": "الأسيتون (الكيتون) يعطي مرآة فضية مع كاشف تولنس.",
          "zh": "丙酮（酮）与托伦斯试剂反应生成银镜。",
          "ku": "Aceton (ketone) bi reagenta Tollens neynika zîv dide."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Aynı karbon sayılı aldehitler ile ketonlar birbirinin fonksiyonel grup izomeridir (örn. Propanal ve Propanon).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Aldehydes and ketones with the same carbon number are functional group isomers of each other (e.g. Propanal and Propanone).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Aldehyde und Ketone mit der gleichen Kohlenstoffzahl sind funktionelle Isomere voneinander (z. B. Propanal und Propanon).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les aldéhydes et les cétones ayant le même nombre de carbones sont des isomères de groupes fonctionnels les uns des autres (par exemple le propanal et la propanone).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Альдегиды и кетоны с одинаковым числом атомов углерода являются изомерами функциональных групп друг друга (например, пропаналь и пропанон).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الألدهيدات والكيتونات التي لها نفس رقم الكربون هي أيزومرات مجموعة وظيفية لبعضها البعض (مثل البروبانال والبروبانون).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“具有相同碳数的醛和酮是彼此的官能团异构体（例如丙醛和丙酮）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Aldehîd û ketonên bi heman hejmara karbonê îzomerên koma fonksiyonel ên hev in (mînak Propanal û Propanone).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u24-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Organic Compounds: Hydrocarbons, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Organische Verbindungen & Kohlenwasserstoffe: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Composés Organiques & Hydrocarbures, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Органические соединения и функциональные группы», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"المركبات العضوية والهيدروكربونات\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“有机化合物与官能团”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Madeyên Organîk û Komên Fonksiyonel\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Alkenler doymuş hidrokarbonlar sınıfındadır.",
          "en": "Alkenes are in the class of saturated hydrocarbons.",
          "de": "Alkene gehören zur Klasse der gesättigten Kohlenwasserstoffe.",
          "fr": "Les alcènes appartiennent à la classe des hydrocarbures saturés.",
          "ru": "Алкены относятся к классу предельных углеводородов.",
          "ar": "تنتمي الألكينات إلى فئة الهيدروكربونات المشبعة.",
          "zh": "烯烃属于饱和烃类。",
          "ku": "Alken di çîna hîdrokarbonên têrbûyî de ne."
        },
        {
          "tr": "İç alkinler Tollens belirteciyle çökelek verir.",
          "en": "Internal alkynes precipitate with the Tollens reagent.",
          "de": "Interne Alkine fallen mit dem Tollens-Reagenz aus.",
          "fr": "Les alcynes internes précipitent avec le réactif de Tollens.",
          "ru": "Внутренние алкины осаждаются реактивом Толленса.",
          "ar": "تترسب الألكينات الداخلية مع كاشف تولنس.",
          "zh": "内部炔烃与 Tollens 试剂一起沉淀。",
          "ku": "Alkînên hundirîn bi reagenta Tollens dibarin."
        },
        {
          "tr": "Tersiyer alkoller kolayca yükseltgenerek keton verir.",
          "en": "Tertiary alcohols are easily oxidized to give ketones.",
          "de": "Tertiäre Alkohole werden leicht zu Ketonen oxidiert.",
          "fr": "Les alcools tertiaires sont facilement oxydés pour donner des cétones.",
          "ru": "Третичные спирты легко окисляются с образованием кетонов.",
          "ar": "تتأكسد الكحولات الثلاثية بسهولة لتعطي الكيتونات.",
          "zh": "叔醇很容易被氧化生成酮。",
          "ku": "Alkolên sêyemîn bi hêsanî têne oksîd kirin da ku ketonan bidin."
        },
        {
          "tr": "Esterleşme tepkimesinde baz katalizörlüğünde tuz açığa çıkar.",
          "en": "In the esterification reaction, salt is released under base catalyst.",
          "de": "Bei der Veresterungsreaktion wird unter basischem Katalysator Salz freigesetzt.",
          "fr": "Dans la réaction d’estérification, le sel est libéré sous un catalyseur basique.",
          "ru": "В реакции этерификации соль выделяется под основным катализатором.",
          "ar": "في تفاعل الأسترة، يتم إطلاق الملح تحت المحفز الأساسي.",
          "zh": "在酯化反应中，在碱催化剂的作用下释放出盐。",
          "ku": "Di reaksiyona esterîfîkasyonê de, xwê di bin katalîzatora bingehîn de tê berdan."
        },
        {
          "tr": "Aynı karbon sayılı monokarboksilik asitler ile esterler birbirinin fonksiyonel grup izomeridir (örn. Asetik asit ve Metil format).",
          "en": "Monocarboxylic acids and esters with the same carbon number are functional group isomers of each other (e.g. Acetic acid and Methyl formate).",
          "de": "Monocarbonsäuren und Ester mit der gleichen Kohlenstoffzahl sind Isomere funktioneller Gruppen voneinander (z. B. Essigsäure und Methylformiat).",
          "fr": "Les acides monocarboxyliques et les esters ayant le même nombre de carbones sont des isomères de groupes fonctionnels les uns des autres (par exemple l'acide acétique et le formiate de méthyle).",
          "ru": "Монокарбоновые кислоты и сложные эфиры с одинаковым числом атомов углерода являются изомерами функциональных групп друг друга (например, уксусная кислота и метилформиат).",
          "ar": "الأحماض الأحادية الكربوكسيلية والإسترات التي لها نفس رقم الكربون هي أيزومرات مجموعة وظيفية لبعضها البعض (مثل حمض الأسيتيك وفورمات الميثيل).",
          "zh": "具有相同碳数的一元羧酸和酯是彼此的官能团异构体（例如乙酸和甲酸甲酯）。",
          "ku": "Asîdên monokarboksîlî û esterên bi heman hejmara karbonê îzomerên koma fonksîyonel ên hev in (mînak asîda acetîk û format Methyl)."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Aynı karbon sayılı monokarboksilik asitler ile esterler birbirinin fonksiyonel grup izomeridir (örn. Asetik asit ve Metil format).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Monocarboxylic acids and esters with the same carbon number are functional group isomers of each other (e.g. Acetic acid and Methyl formate).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Monocarbonsäuren und Ester mit der gleichen Kohlenstoffzahl sind Isomere funktioneller Gruppen voneinander (z. B. Essigsäure und Methylformiat).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les acides monocarboxyliques et les esters ayant le même nombre de carbones sont des isomères de groupes fonctionnels les uns des autres (par exemple l'acide acétique et le formiate de méthyle).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Монокарбоновые кислоты и сложные эфиры с одинаковым числом атомов углерода являются изомерами функциональных групп друг друга (например, уксусная кислота и метилформиат).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الأحماض الأحادية الكربوكسيلية والإسترات التي لها نفس رقم الكربون هي أيزومرات مجموعة وظيفية لبعضها البعض (مثل حمض الأسيتيك وفورمات الميثيل).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“具有相同碳数的一元羧酸和酯是彼此的官能团异构体（例如乙酸和甲酸甲酯）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Asîdên monokarboksîlî û esterên bi heman hejmara karbonê îzomerên koma fonksîyonel ên hev in (mînak asîda acetîk û format Methyl).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u24-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Organik Bileşikler: Hidrokarbonlar ve Fonksiyonel Gruplar konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Organic Compounds: Hydrocarbons, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Organische Verbindungen & Kohlenwasserstoffe die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Composés Organiques & Hydrocarbures, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Органические соединения и функциональные группы», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"المركبات العضوية والهيدروكربونات\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“有机化合物与官能团”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Madeyên Organîk û Komên Fonksiyonel\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Alkenlerde ikili bağ karbonlarına bağlı gruplar aynı tarafta ise cis-, zıt tarafta ise trans- geometrik izomeri adını alır.",
          "en": "In alkenes, if the groups attached to the double bond carbons are on the same side, they are called cis- and if they are on opposite sides, they are called trans geometric isomers.",
          "de": "Befinden sich in Alkenen die an die Doppelbindungskohlenstoffe gebundenen Gruppen auf derselben Seite, werden sie als cis-geometrische Isomere bezeichnet, wenn sie sich auf entgegengesetzten Seiten befinden, werden sie als trans-geometrische Isomere bezeichnet.",
          "fr": "Dans les alcènes, si les groupes attachés aux carbones de la double liaison sont du même côté, ils sont appelés cis- et s'ils sont sur des côtés opposés, ils sont appelés isomères géométriques trans.",
          "ru": "В алкенах, если группы, присоединенные к двойной связи углерода, находятся на одной стороне, их называют цис-, а если они расположены на противоположных сторонах, их называют транс-геометрическими изомерами.",
          "ar": "في الألكينات، إذا كانت المجموعات المرتبطة بذرات الكربون ذات الرابطة المزدوجة على نفس الجانب، فإنها تسمى cis- وإذا كانت على جوانب متقابلة، فإنها تسمى أيزومرات هندسية متحولة.",
          "zh": "在烯烃中，如果连接到双键碳的基团位于同一侧，则称为顺式几何异构体，如果位于相反侧，则称为反式几何异构体。",
          "ku": "Di alkenan de ger komên ku bi karbonên girêka ducarî ve girêdayî bin li ser hev bin, ji wan re cis- û heke li aliyên dijber bin, jê re îzomerên geometrîk trans tê gotin."
        },
        {
          "tr": "Katılma tepkimesinde hidrojen daima hidrojeni az olan karbona bağlanır.",
          "en": "In the addition reaction, hydrogen is always bonded to the carbon with less hydrogen.",
          "de": "Bei der Additionsreaktion wird immer Wasserstoff an den Kohlenstoff mit weniger Wasserstoff gebunden.",
          "fr": "Dans la réaction d’addition, l’hydrogène est toujours lié au carbone avec moins d’hydrogène.",
          "ru": "В реакции присоединения водород всегда связан с углеродом с меньшим количеством водорода.",
          "ar": "في تفاعل الإضافة، يرتبط الهيدروجين دائمًا بالكربون الذي يحتوي على كمية أقل من الهيدروجين.",
          "zh": "在加成反应中，氢总是与氢含量较少的碳键合。",
          "ku": "Di reaksiyona pêvekirinê de, hîdrojen her gav bi karbonê re bi hîdrojenê kêmtir ve girêdayî ye."
        },
        {
          "tr": "Benzen üç tane normal alken gibi kolayca bromlu suyu giderir.",
          "en": "Benzene readily removes brominated water, as do the three normal alkenes.",
          "de": "Benzol entfernt leicht bromiertes Wasser, ebenso wie die drei normalen Alkene.",
          "fr": "Le benzène élimine facilement l'eau bromée, tout comme les trois alcènes normaux.",
          "ru": "Бензол легко удаляет бромированную воду, как и три нормальных алкена.",
          "ar": "يزيل البنزين الماء المبروم بسهولة، كما تفعل الألكينات الطبيعية الثلاثة.",
          "zh": "与三种普通烯烃一样，苯很容易去除溴化水。",
          "ku": "Benzene bi hêsanî ava bromînkirî radike, wekî sê alkenên normal."
        },
        {
          "tr": "Ketonlar daha ileri yükseltgenerek esterlere dönüşür.",
          "en": "Ketones are further oxidized to esters.",
          "de": "Ketone werden weiter zu Estern oxidiert.",
          "fr": "Les cétones sont ensuite oxydées en esters.",
          "ru": "Кетоны далее окисляются до сложных эфиров.",
          "ar": "تتأكسد الكيتونات أيضًا إلى استرات.",
          "zh": "酮进一步氧化成酯。",
          "ku": "Ketone bêtir ji bo esteran têne oksîd kirin."
        },
        {
          "tr": "Karboksilik asitlerin kaynama noktası hidrokarbonlardan düşüktür.",
          "en": "The boiling point of carboxylic acids is lower than hydrocarbons.",
          "de": "Der Siedepunkt von Carbonsäuren ist niedriger als der von Kohlenwasserstoffen.",
          "fr": "Le point d'ébullition des acides carboxyliques est inférieur à celui des hydrocarbures.",
          "ru": "Температура кипения карбоновых кислот ниже, чем у углеводородов.",
          "ar": "درجة غليان الأحماض الكربوكسيلية أقل من درجة غليان الهيدروكربونات.",
          "zh": "羧酸的沸点比烃低。",
          "ku": "Xala kelandinê ya asîdên karboksîlî ji hîdrokarbonan kêmtir e."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Alkenlerde ikili bağ karbonlarına bağlı gruplar aynı tarafta ise cis-, zıt tarafta ise trans- geometrik izomeri adını alır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In alkenes, if the groups attached to the double bond carbons are on the same side, they are called cis- and if they are on opposite sides, they are called trans geometric isomers.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Befinden sich in Alkenen die an die Doppelbindungskohlenstoffe gebundenen Gruppen auf derselben Seite, werden sie als cis-geometrische Isomere bezeichnet, wenn sie sich auf entgegengesetzten Seiten befinden, werden sie als trans-geometrische Isomere bezeichnet.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans les alcènes, si les groupes attachés aux carbones de la double liaison sont du même côté, ils sont appelés cis- et s'ils sont sur des côtés opposés, ils sont appelés isomères géométriques trans.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В алкенах, если группы, присоединенные к двойной связи углерода, находятся на одной стороне, их называют цис-, а если они расположены на противоположных сторонах, их называют транс-геометрическими изомерами.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في الألكينات، إذا كانت المجموعات المرتبطة بذرات الكربون ذات الرابطة المزدوجة على نفس الجانب، فإنها تسمى cis- وإذا كانت على جوانب متقابلة، فإنها تسمى أيزومرات هندسية متحولة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在烯烃中，如果连接到双键碳的基团位于同一侧，则称为顺式几何异构体，如果位于相反侧，则称为反式几何异构体。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di alkenan de ger komên ku bi karbonên girêka ducarî ve girêdayî bin li ser hev bin, ji wan re cis- û heke li aliyên dijber bin, jê re îzomerên geometrîk trans tê gotin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit24;
