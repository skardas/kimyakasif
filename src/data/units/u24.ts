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
    "ru": "Алканы, алкены, алкины, спирты, сложные эфиры и правило Марковникова",
    "ar": "ألكان، ألكين، ألكاين، كحول، إستر وماركوفنيكوف",
    "zh": "烷烃、烯烃、炔烃、醇、酯和马可夫尼科夫",
    "ku": "Alkan, Alken, Alkîn, Alkol, Ester û Markovnikov"
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
        "ar": "الألكانات (البارافينات، CnH2n+2) هيدروكربونات مشبعة؛ تحتوي على روابط سيجما فقط ولا تدخل في تفاعلات الإضافة.",
        "zh": "烷烃（石蜡，CnH2n+2）是饱和烃；它仅包含西格玛键并且不发生加成反应。",
        "ku": "Alkan (parafîn, CnH2n+2) hîdrokarbonên têrbûyî ne; Ew tenê girêdanên sigma dihewîne û reaksiyonek lêzêdekirinê NADE."
      },
      "trap": {
        "tr": "Alkanlar bromlu suyun kırmızı rengini hızla giderir.",
        "en": "Alkanes rapidly decolorize the red colour of bromine water.",
        "de": "Alkane entfärben die rote Farbe von Bromwasser schnell.",
        "fr": "Les alcanes décolorent rapidement la couleur rouge de l'eau de brome.",
        "ru": "Алканы быстро обесцвечивают красную окраску бромной воды.",
        "ar": "تزيل الألكانات اللون الأحمر لماء البروم بسرعة.",
        "zh": "烷烃能迅速使溴水的红色褪去。",
        "ku": "Alkan rengê sor ê ava bromê bi lez radikin."
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
        "ar": "تحتوي الألكينات (الأوليفينات، CnH2n) على رابطة ثنائية واحدة على الأقل (C=C)؛ وتدخل في تفاعلات الإضافة والبلمرة.",
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
        "de": "Markownikow-Regel: Bei der Addition von HX an unsymmetrische Alkene bindet das H-Atom an das C-Atom mit MEHR Wasserstoffatomen und das X-Atom an das C-Atom mit WENIGER Wasserstoffatomen.",
        "fr": "Règle de Markovnikov : lorsque HX est ajouté à des alcènes asymétriques, l'atome H est lié au carbone avec PLUS d'hydrogène et l'atome X est lié au carbone avec MOINS d'hydrogène.",
        "ru": "Правило Марковникова: когда HX добавляется к асимметричным алкенам, атом H связан с углеродом с БОЛЬШИМ водородом, а атом X связан с углеродом с МЕНЬШИМ водородом.",
        "ar": "قاعدة ماركونيكوف: عند إضافة HX إلى الألكينات غير المتماثلة، ترتبط ذرة H بالكربون الذي يحتوي على المزيد من الهيدروجين، وترتبط ذرة X بالكربون الذي يحتوي على كمية أقل من الهيدروجين.",
        "zh": "马尔可夫尼科夫规则：当HX添加到不对称烯烃中时，H原子与具有更多氢的碳键合，而X原子与具有较少氢的碳键合。",
        "ku": "Qaîdeya Markovnikov: dema HX li alkenên nesîmetrîk tê zêdekirin, atoma H diçe ser karbona ku hîdrojenên wê ZÊDETIR in, atoma X jî diçe ser karbona ku hîdrojenên wê KÊMTIR in."
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
        "tr": "Alkenler ve alkinler bromlu suyun kırmızı-kahverengi rengini oda koşullarında giderir (doymamışlık testi).",
        "en": "Alkenes and alkynes decolorize the red-brown colour of bromine water at room conditions (test for unsaturation).",
        "de": "Alkene und Alkine entfärben rotbraunes Bromwasser bereits bei Raumbedingungen (Nachweis von Mehrfachbindungen).",
        "fr": "Les alcènes et les alcynes décolorent l'eau de brome rouge-brun dans les conditions ambiantes (test d'insaturation).",
        "ru": "Алкены и алкины обесцвечивают красно-бурую бромную воду при комнатных условиях (качественная реакция на непредельность).",
        "ar": "تزيل الألكينات والألكاينات اللون الأحمر البني لماء البروم في الظروف العادية (اختبار عدم التشبع).",
        "zh": "烯烃和炔烃在室温下能使红棕色的溴水褪色（不饱和性检验）。",
        "ku": "Alken û alkîn di şertên odeyê de rengê sor-qehweyî yê ava bromê radikin (testa netêrbûnê)."
      },
      "trap": {
        "tr": "Alkinler üçlü bağ içerdiğinden bromlu suyun rengini gidermez.",
        "en": "Because they contain a triple bond, alkynes do not decolorize bromine water.",
        "de": "Da Alkine eine Dreifachbindung enthalten, entfärben sie Bromwasser nicht.",
        "fr": "Parce qu'ils contiennent une triple liaison, les alcynes ne décolorent pas l'eau de brome.",
        "ru": "Поскольку алкины содержат тройную связь, они не обесцвечивают бромную воду.",
        "ar": "لا تزيل الألكاينات لون ماء البروم لأنها تحتوي على رابطة ثلاثية.",
        "zh": "炔烃因含有三键，所以不能使溴水褪色。",
        "ku": "Ji ber ku alkîn girêdana sêcarî dihewînin, rengê ava bromê ranakin."
      }
    },
    {
      "id": "u24-f05",
      "fact": {
        "tr": "Alkinler (asetilenler, CnH2n-2) en az bir üçlü bağ içerir; uç alkinler amonyaklı AgNO3 çözeltisiyle beyaz, amonyaklı CuCl çözeltisiyle kırmızı çökelek verir.",
        "en": "Alkynes (acetylenes, CnH2n-2) contain at least one triple bond; terminal alkynes give a white precipitate with ammoniacal AgNO3 solution and a red precipitate with ammoniacal CuCl solution.",
        "de": "Alkine (Acetylene, CnH2n-2) enthalten mindestens eine Dreifachbindung; endständige Alkine bilden mit ammoniakalischer AgNO3-Lösung einen weißen und mit ammoniakalischer CuCl-Lösung einen roten Niederschlag.",
        "fr": "Les alcynes (acétyléniques, CnH2n-2) contiennent au moins une triple liaison ; les alcynes terminaux donnent un précipité blanc avec une solution ammoniacale d'AgNO3 et un précipité rouge avec une solution ammoniacale de CuCl.",
        "ru": "Алкины (ацетиленовые, CnH2n-2) содержат хотя бы одну тройную связь; терминальные алкины дают белый осадок с аммиачным раствором AgNO3 и красный осадок с аммиачным раствором CuCl.",
        "ar": "تحتوي الألكاينات (الأسيتيلينات، CnH2n-2) على رابطة ثلاثية واحدة على الأقل؛ وتعطي الألكاينات الطرفية راسبًا أبيض مع محلول AgNO3 النشادري وراسبًا أحمر مع محلول CuCl النشادري.",
        "zh": "炔烃（CnH2n-2）至少含有一个三键；末端炔烃与氨性 AgNO3 溶液生成白色沉淀，与氨性 CuCl 溶液生成红色沉淀。",
        "ku": "Alkîn (asetîlen, CnH2n-2) herî kêm girêdanek sêcarî dihewînin; alkînên dawiyê bi çareseriya AgNO3 ya amonyakî re niştekî spî, bi çareseriya CuCl ya amonyakî re niştekî sor didin."
      },
      "trap": {
        "tr": "İç alkinler amonyaklı AgNO3 (Tollens) çözeltisiyle çökelek verir.",
        "en": "Internal alkynes give a precipitate with ammoniacal AgNO3 (Tollens) solution.",
        "de": "Innenständige Alkine bilden mit ammoniakalischer AgNO3-Lösung (Tollens) einen Niederschlag.",
        "fr": "Les alcynes internes donnent un précipité avec une solution ammoniacale d'AgNO3 (Tollens).",
        "ru": "Внутренние алкины дают осадок с аммиачным раствором AgNO3 (реактив Толленса).",
        "ar": "تعطي الألكاينات الداخلية راسبًا مع محلول AgNO3 النشادري (كاشف تولنز).",
        "zh": "非末端（内部）炔烃能与氨性 AgNO3 溶液（托伦试剂）生成沉淀。",
        "ku": "Alkînên navîn bi çareseriya AgNO3 ya amonyakî (Tollens) re nişt didin."
      }
    },
    {
      "id": "u24-f06",
      "fact": {
        "tr": "Aromatik bileşiklerin atası benzendir (C6H6); Kekule rezonans yapısına sahiptir, çok kararlıdır ve katılma tepkimesine isteksizdir.",
        "en": "Benzene (C6H6) is the parent of aromatic compounds; it has Kekulé resonance structures, is very stable and resists addition reactions.",
        "de": "Benzol (C6H6) ist die Stammverbindung der Aromaten; es besitzt Kekulé-Resonanzstrukturen, ist sehr stabil und geht nur ungern Additionsreaktionen ein.",
        "fr": "Le benzène (C6H6) est le composé parent des aromatiques ; il possède des structures de résonance de Kekulé, est très stable et se prête mal aux réactions d'addition.",
        "ru": "Бензол (C6H6) — родоначальник ароматических соединений; для него характерны резонансные структуры Кекуле, он очень устойчив и неохотно вступает в реакции присоединения.",
        "ar": "البنزين (C6H6) هو أصل المركبات الأروماتية؛ له بنى رنين كيكوليه، وهو شديد الثبات ولا يميل إلى تفاعلات الإضافة.",
        "zh": "苯（C6H6）是芳香族化合物的母体；具有凯库勒共振结构，非常稳定，不易发生加成反应。",
        "ku": "Benzen (C6H6) bavê pêkhateyên aromatîk e; xwedî avahiyên rezonansê yên Kekulé ye, pir aram e û naxwaze beşdarî reaksiyonên lêzêdekirinê bibe."
      },
      "trap": {
        "tr": "Benzen, üç ikili bağ içeren sıradan bir alken gibi bromlu suyun rengini kolayca giderir.",
        "en": "Benzene decolorizes bromine water as easily as an ordinary alkene with three double bonds.",
        "de": "Benzol entfärbt Bromwasser so leicht wie ein gewöhnliches Alken mit drei Doppelbindungen.",
        "fr": "Le benzène décolore l'eau de brome aussi facilement qu'un alcène ordinaire à trois doubles liaisons.",
        "ru": "Бензол обесцвечивает бромную воду так же легко, как обычный алкен с тремя двойными связями.",
        "ar": "يزيل البنزين لون ماء البروم بسهولة مثل ألكين عادي يحتوي على ثلاث روابط ثنائية.",
        "zh": "苯像含三个双键的普通烯烃一样，很容易使溴水褪色。",
        "ku": "Benzen wek alkeneke asayî ya bi sê girêdanên ducarî, rengê ava bromê bi hêsanî radike."
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
        "ku": "Xala kelandinê ya eteran ji ya alkolan bilindtir e."
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
        "zh": "羧酸（R-COOH）在酸催化下与醇反应，生成有香味的酯（R-COO-R'）（酯化反应）。",
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
        "tr": "Karboksilik asitlerin kaynama noktası, mol kütlesi yakın olan alkanlarınkinden düşüktür.",
        "en": "Carboxylic acids have lower boiling points than alkanes of similar molar mass.",
        "de": "Carbonsäuren haben niedrigere Siedepunkte als Alkane mit ähnlicher molarer Masse.",
        "fr": "Les acides carboxyliques ont des températures d'ébullition plus basses que les alcanes de masse molaire voisine.",
        "ru": "Карбоновые кислоты имеют более низкие температуры кипения, чем алканы с близкой молярной массой.",
        "ar": "درجات غليان الأحماض الكربوكسيلية أقل من درجات غليان الألكانات المقاربة لها في الكتلة المولية.",
        "zh": "羧酸的沸点低于摩尔质量相近的烷烃。",
        "ku": "Xala kelandinê ya asîdên karboksîlîk ji ya alkanên bi girseya molî ya nêzîk kêmtir e."
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
        "ku": "Asîdên monokarboksîlîk û esterên bi heman hejmara karbonê îzomerên koma fonksiyonel ên hev in (mînak asîda asetîk û metîl format)."
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
        "ar": "في الألكينات إذا كانت المجموعات المرتبطة بذرتي كربون الرابطة الثنائية في الجهة نفسها سُمّي المتماكب الهندسي سيس، وإذا كانت في جهتين متقابلتين سُمّي ترانس.",
        "zh": "在烯烃中，如果连接到双键碳的基团位于同一侧，则称为顺式几何异构体，如果位于相反侧，则称为反式几何异构体。",
        "ku": "Di alkenan de ger komên ku bi karbonên girêka ducarî ve girêdayî bin li ser hev bin, ji wan re cis- û heke li aliyên dijber bin, jê re îzomerên geometrîk trans tê gotin."
      },
      "trap": {
        "tr": "Aynı karbon atomuna iki özdeş grup bağlı olsa bile cis-trans izomeri görülür.",
        "en": "Even if two identical groups are bonded to the same carbon atom, the cis-trans isomer is seen.",
        "de": "Selbst wenn zwei identische Gruppen an dasselbe Kohlenstoffatom gebunden sind, wird das cis-trans-Isomer beobachtet.",
        "fr": "Même si deux groupes identiques sont liés au même atome de carbone, l’isomère cis-trans est visible.",
        "ru": "Даже если две идентичные группы связаны с одним и тем же атомом углерода, виден цис-транс-изомер.",
        "ar": "حتى لو ارتبطت مجموعتان متماثلتان بذرة الكربون نفسها، يظهر تماكب سيس-ترانس.",
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
        "tr": "Aldehitte karbonil grubu zincirin ucundadır (Tollens ile gümüş aynası verir); ketonda karbonil grubu zincirin ortasındadır (Tollens ile tepkime vermez).",
        "en": "In an aldehyde the carbonyl group is at the end of the chain (gives a silver mirror with Tollens); in a ketone the carbonyl group is within the chain (does not react with Tollens).",
        "de": "Beim Aldehyd steht die Carbonylgruppe am Kettenende (Silberspiegel mit Tollens); beim Keton steht sie innerhalb der Kette (keine Reaktion mit Tollens).",
        "fr": "Dans un aldéhyde, le groupe carbonyle est en bout de chaîne (miroir d'argent avec Tollens) ; dans une cétone, il est à l'intérieur de la chaîne (pas de réaction avec Tollens).",
        "ru": "В альдегиде карбонильная группа находится на конце цепи (реакция серебряного зеркала с реактивом Толленса); в кетоне — внутри цепи (с реактивом Толленса не реагирует).",
        "ar": "في الألدهيد تقع مجموعة الكربونيل في طرف السلسلة (يعطي مرآة فضية مع كاشف تولنز)؛ وفي الكيتون تقع داخل السلسلة (لا يتفاعل مع كاشف تولنز).",
        "zh": "醛的羰基位于碳链末端（与托伦试剂产生银镜）；酮的羰基位于碳链中间（不与托伦试剂反应）。",
        "ku": "Di aldehîdê de koma karbonîl li dawiya zincîrê ye (bi Tollens re neynika zîvîn dide); di ketonê de koma karbonîl di nav zincîrê de ye (bi Tollens re reaksiyon nade)."
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
        "ku": "Alken"
      },
      "distinction": {
        "tr": "Alkan doymuştur katılma vermez; alken doymamıştır bromlu suyun rengini giderir ve polimerleşir.",
        "en": "An alkane is saturated and does not undergo addition; an alkene is unsaturated, decolorizes bromine water and polymerizes.",
        "de": "Ein Alkan ist gesättigt und geht keine Addition ein; ein Alken ist ungesättigt, entfärbt Bromwasser und polymerisiert.",
        "fr": "Un alcane est saturé et ne subit pas d'addition ; un alcène est insaturé, décolore l'eau de brome et se polymérise.",
        "ru": "Алкан предельный и не вступает в реакции присоединения; алкен непредельный, обесцвечивает бромную воду и полимеризуется.",
        "ar": "الألكان مشبع ولا يدخل في تفاعلات الإضافة؛ والألكين غير مشبع يزيل لون ماء البروم ويتبلمر.",
        "zh": "烷烃是饱和烃，不发生加成反应；烯烃是不饱和烃，能使溴水褪色并能发生聚合。",
        "ku": "Alkan têrbûyî ye û lêzêdekirinê nake; alken netêr e, rengê ava bromê radike û polîmerîze dibe."
      }
    },
    {
      "id": "u24-c03",
      "conceptA": {
        "tr": "Zincir izomerisi",
        "en": "Chain Isomerism",
        "de": "Kettenisomerie",
        "fr": "Isomérie de chaîne",
        "ru": "Изомерия углеродного скелета",
        "ar": "تماكب السلسلة",
        "zh": "碳链异构",
        "ku": "Îzomeriya Zincîrê"
      },
      "conceptB": {
        "tr": "Fonksiyonel grup izomerisi",
        "en": "Functional Group Isomerism",
        "de": "Funktionsisomerie",
        "fr": "Isomérie de fonction",
        "ru": "Межклассовая изомерия (изомерия функциональной группы)",
        "ar": "تماكب المجموعة الوظيفية",
        "zh": "官能团异构",
        "ku": "Îzomeriya Koma Fonksiyonel"
      },
      "distinction": {
        "tr": "Zincir izomerisinde fonksiyonel grup aynıdır, karbon zinciri (dallanma) farklıdır (örn. bütan ve 2-metilpropan); fonksiyonel grup izomerisinde molekül formülü aynı, fonksiyonel grup farklıdır (örn. etanol ve dimetil eter).",
        "en": "In chain isomerism the functional group is the same but the carbon chain (branching) differs (e.g., butane and 2-methylpropane); in functional group isomerism the molecular formula is the same but the functional groups differ (e.g., ethanol and dimethyl ether).",
        "de": "Bei der Kettenisomerie bleibt die funktionelle Gruppe gleich, aber die Kohlenstoffkette (Verzweigung) ist verschieden (z. B. Butan und 2-Methylpropan); Funktionsisomere haben dieselbe Summenformel, aber verschiedene funktionelle Gruppen (z. B. Ethanol und Dimethylether).",
        "fr": "Dans l'isomérie de chaîne, le groupe fonctionnel est le même mais la chaîne carbonée (ramification) diffère (par ex. butane et 2-méthylpropane) ; les isomères de fonction ont la même formule brute mais des groupes fonctionnels différents (par ex. éthanol et méthoxyméthane).",
        "ru": "Изомеры углеродного скелета имеют одинаковую функциональную группу, но разную углеродную цепь (разветвление) (например, бутан и 2-метилпропан); межклассовые изомеры имеют одинаковую молекулярную формулу, но разные функциональные группы (например, этанол и диметиловый эфир).",
        "ar": "متماكبات السلسلة لها المجموعة الوظيفية نفسها لكن سلسلة كربونية مختلفة (تفرع) (مثل البيوتان و2-ميثيل بروبان)؛ أما متماكبات المجموعة الوظيفية فلها الصيغة الجزيئية نفسها ومجموعات وظيفية مختلفة (مثل الإيثانول وثنائي ميثيل الإيثر).",
        "zh": "碳链异构体官能团相同而碳链（支链）不同（如丁烷与 2-甲基丙烷）；官能团异构体分子式相同而官能团不同（如乙醇与二甲醚）。",
        "ku": "Îzomerên zincîrê xwedî heman koma fonksiyonel in lê zincîra karbonê (şaxbûn) cuda ye (mînak bûtan û 2-metîlpropan); îzomerên koma fonksiyonel xwedî heman formula molekulî ne lê komên fonksiyonel cuda ne (mînak etanol û dîmetîl eter)."
      }
    },
    {
      "id": "u24-c04",
      "conceptA": {
        "tr": "Alkin",
        "en": "Alkyne",
        "de": "Alkin",
        "fr": "Alcyne",
        "ru": "Алкин",
        "ar": "ألكاين",
        "zh": "炔烃",
        "ku": "Alkîn"
      },
      "conceptB": {
        "tr": "Aromatik Hidrokarbon (Benzen)",
        "en": "Aromatic Hydrocarbon (Benzene)",
        "de": "Aromatischer Kohlenwasserstoff (Benzol)",
        "fr": "Hydrocarbure aromatique (benzène)",
        "ru": "Ароматический углеводород (бензол)",
        "ar": "هيدروكربون أروماتي (البنزين)",
        "zh": "芳香烃（苯）",
        "ku": "Hîdrokarbona Aromatîk (Benzen)"
      },
      "distinction": {
        "tr": "Alkinler üçlü bağ içerir (CnH2n-2) ve kolayca katılma tepkimesi verir; benzen rezonans kararlılığı nedeniyle katılmaya isteksizdir, daha çok yer değiştirme (sübstitüsyon) tepkimesi verir.",
        "en": "Alkynes contain a triple bond (CnH2n-2) and readily undergo addition reactions; benzene resists addition because of resonance stabilization and mainly undergoes substitution reactions.",
        "de": "Alkine enthalten eine Dreifachbindung (CnH2n-2) und gehen leicht Additionsreaktionen ein; Benzol ist wegen seiner Resonanzstabilisierung additionsträge und reagiert vorwiegend durch Substitution.",
        "fr": "Les alcynes contiennent une triple liaison (CnH2n-2) et subissent facilement des additions ; le benzène, stabilisé par résonance, se prête mal à l'addition et donne surtout des réactions de substitution.",
        "ru": "Алкины содержат тройную связь (CnH2n-2) и легко вступают в реакции присоединения; бензол из-за резонансной стабилизации неохотно присоединяет и в основном вступает в реакции замещения.",
        "ar": "تحتوي الألكاينات على رابطة ثلاثية (CnH2n-2) وتدخل بسهولة في تفاعلات الإضافة؛ أما البنزين فلا يميل إلى الإضافة بسبب الثبات الرنيني ويدخل غالبًا في تفاعلات الاستبدال.",
        "zh": "炔烃含三键（CnH2n-2），容易发生加成反应；苯因共振稳定而不易加成，主要发生取代反应。",
        "ku": "Alkîn girêdana sêcarî dihewînin (CnH2n-2) û bi hêsanî reaksiyonên lêzêdekirinê didin; benzen ji ber aramiya rezonansê naxwaze lêzêdekirinê bike, bi piranî reaksiyonên cihguhertinê (sûbstîtûsyon) dide."
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
        "zh": "仲醇",
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
        "ar": "يحتوي الحمض الكربوكسيلي على مجموعة -COOH ويكوّن روابط هيدروجينية؛ والإستر مركب ذو رائحة طيبة (-COOR) يتكون من تكاثف حمض مع كحول.",
        "zh": "羧酸含有 -COOH 基团，能形成氢键；酯是由酸和醇缩合生成的有香味的化合物（-COOR）。",
        "ku": "Asîda karboksîlîk koma -COOH dihewîne û girêdanên hîdrojenê çêdike; ester pêkhateyeke bîhnxweş e (-COOR) ku ji kondensasyona asîd û alkolê çêdibe."
      }
    },
    {
      "id": "u24-c07",
      "conceptA": {
        "tr": "Markovnikov Katılması",
        "en": "Markovnikov Addition",
        "de": "Markownikow-Addition",
        "fr": "Addition de Markovnikov",
        "ru": "Присоединение по Марковникову",
        "ar": "إضافة ماركوفنيكوف",
        "zh": "马氏加成",
        "ku": "Lêzêdekirina Markovnikov"
      },
      "conceptB": {
        "tr": "Zaitsev Ayrılması",
        "en": "Zaitsev Elimination",
        "de": "Saizew-Eliminierung",
        "fr": "Élimination de Zaïtsev",
        "ru": "Отщепление по Зайцеву",
        "ar": "حذف زايتسيف",
        "zh": "札依采夫消除",
        "ku": "Veqetandina Zaitsev"
      },
      "distinction": {
        "tr": "Markovnikov katılmasında katılan H, hidrojeni çok olan karbona bağlanır; Zaitsev ayrılmasında H, hidrojeni az olan karbondan koparılır.",
        "en": "In Markovnikov addition the added H goes to the carbon that already has more hydrogens; in Zaitsev elimination the H is removed from the carbon that has fewer hydrogens.",
        "de": "Bei der Markownikow-Addition geht das addierte H an das Kohlenstoffatom mit mehr Wasserstoffatomen; bei der Saizew-Eliminierung wird das H vom Kohlenstoffatom mit weniger Wasserstoffatomen abgespalten.",
        "fr": "Dans l'addition de Markovnikov, le H ajouté se fixe sur le carbone le plus hydrogéné ; dans l'élimination de Zaïtsev, le H est arraché au carbone le moins hydrogéné.",
        "ru": "При присоединении по Марковникову H присоединяется к более гидрогенизированному атому углерода; при отщеплении по Зайцеву H отщепляется от менее гидрогенизированного атома углерода.",
        "ar": "في إضافة ماركوفنيكوف يرتبط H المضاف بذرة الكربون التي تحمل عددًا أكبر من الهيدروجين؛ وفي حذف زايتسيف يُنزع H من ذرة الكربون التي تحمل عددًا أقل من الهيدروجين.",
        "zh": "马氏加成中，加上的 H 连到含氢较多的碳原子上；札依采夫消除中，H 从含氢较少的碳原子上脱去。",
        "ku": "Di lêzêdekirina Markovnikov de H ya tê zêdekirin diçe ser karbona ku hîdrojenên wê zêdetir in; di veqetandina Zaitsev de H ji karbona ku hîdrojenên wê kêmtir in tê rakirin."
      }
    },
    {
      "id": "u24-c08",
      "conceptA": {
        "tr": "Cis izomeri",
        "en": "Cis Isomer",
        "de": "cis-Isomer",
        "fr": "Isomère cis",
        "ru": "Цис-изомер",
        "ar": "متماكب سيس",
        "zh": "顺式异构体",
        "ku": "Îzomera Cis"
      },
      "conceptB": {
        "tr": "Trans izomeri",
        "en": "Trans Isomer",
        "de": "trans-Isomer",
        "fr": "Isomère trans",
        "ru": "Транс-изомер",
        "ar": "متماكب ترانس",
        "zh": "反式异构体",
        "ku": "Îzomera Trans"
      },
      "distinction": {
        "tr": "Cis izomerinde benzer gruplar ikili bağın aynı tarafında, trans izomerinde zıt taraflarındadır; geometrik izomeri için her iki ikili bağ karbonunda iki farklı grup bulunmalıdır.",
        "en": "In the cis isomer similar groups are on the same side of the double bond, in the trans isomer on opposite sides; geometric isomerism requires two different groups on each double-bond carbon.",
        "de": "Beim cis-Isomer liegen gleiche Gruppen auf derselben Seite der Doppelbindung, beim trans-Isomer auf gegenüberliegenden Seiten; für geometrische Isomerie muss jedes Doppelbindungs-C-Atom zwei verschiedene Gruppen tragen.",
        "fr": "Dans l'isomère cis, les groupes semblables sont du même côté de la double liaison, dans l'isomère trans de part et d'autre ; l'isomérie géométrique exige deux groupes différents sur chaque carbone de la double liaison.",
        "ru": "В цис-изомере одинаковые группы находятся по одну сторону двойной связи, в транс-изомере — по разные стороны; для геометрической изомерии каждый атом углерода при двойной связи должен иметь две разные группы.",
        "ar": "في متماكب سيس تكون المجموعات المتشابهة في الجهة نفسها من الرابطة الثنائية، وفي متماكب ترانس في جهتين متقابلتين؛ ويتطلب التماكب الهندسي وجود مجموعتين مختلفتين على كل ذرة كربون في الرابطة الثنائية.",
        "zh": "顺式异构体中相同基团位于双键同侧，反式异构体中位于双键两侧；产生顺反异构要求每个双键碳原子上连有两个不同的基团。",
        "ku": "Di îzomera cis de komên wekhev li heman aliyê girêdana ducarî ne, di îzomera trans de li aliyên dijber in; ji bo îzomeriya geometrîk divê li ser her karboneke girêdana ducarî du komên cuda hebin."
      }
    }
  ],
  "sequences": [
    {
      "id": "u24-s01",
      "title": {
        "tr": "Markovnikov Kuralının Uygulanması",
        "en": "Applying Markovnikov's Rule",
        "de": "Anwendung der Markownikow-Regel",
        "fr": "Application de la règle de Markovnikov",
        "ru": "Применение правила Марковникова",
        "ar": "تطبيق قاعدة ماركوفنيكوف",
        "zh": "马氏规则的应用",
        "ku": "Sepandina Qaîdeya Markovnikov"
      },
      "steps": [
        {
          "tr": "Asimetrik alkendeki ikili bağ karbonları belirlenir",
          "en": "Identify the double-bond carbons in the unsymmetrical alkene",
          "de": "Die Doppelbindungs-C-Atome im unsymmetrischen Alken werden bestimmt",
          "fr": "On repère les carbones de la double liaison dans l'alcène dissymétrique",
          "ru": "Определяют атомы углерода при двойной связи в несимметричном алкене",
          "ar": "تُحدد ذرتا الكربون في الرابطة الثنائية للألكين غير المتماثل",
          "zh": "找出不对称烯烃中双键上的两个碳原子",
          "ku": "Karbonên girêdana ducarî yên di alkena nesîmetrîk de têne diyarkirin"
        },
        {
          "tr": "İkili bağ karbonlarına bağlı hidrojen sayıları karşılaştırılır",
          "en": "Compare the numbers of hydrogens on the two double-bond carbons",
          "de": "Die Anzahl der Wasserstoffatome an beiden Doppelbindungs-C-Atomen wird verglichen",
          "fr": "On compare le nombre d'hydrogènes portés par chacun des deux carbones de la double liaison",
          "ru": "Сравнивают число атомов водорода у этих двух атомов углерода",
          "ar": "يُقارن عدد ذرات الهيدروجين المرتبطة بكل من ذرتي الكربون",
          "zh": "比较两个双键碳原子上所连氢原子的数目",
          "ku": "Hejmara hîdrojenên li ser her du karbonên girêdana ducarî têne berawirdkirin"
        },
        {
          "tr": "HX'in H atomu hidrojeni çok olan karbona, X atomu hidrojeni az olan karbona bağlanır",
          "en": "The H of HX bonds to the carbon with more hydrogens and X to the carbon with fewer hydrogens",
          "de": "Das H von HX bindet an das C-Atom mit mehr, X an das C-Atom mit weniger Wasserstoffatomen",
          "fr": "Le H de HX se fixe sur le carbone le plus hydrogéné et X sur le carbone le moins hydrogéné",
          "ru": "H из HX присоединяется к атому углерода с большим числом водородов, X — к атому с меньшим",
          "ar": "يرتبط H من HX بذرة الكربون الأكثر هيدروجينًا ويرتبط X بذرة الكربون الأقل هيدروجينًا",
          "zh": "HX 中的 H 加到含氢较多的碳原子上，X 加到含氢较少的碳原子上",
          "ku": "H ya HX diçe ser karbona bi hîdrojenên zêdetir, X jî diçe ser karbona bi hîdrojenên kêmtir"
        },
        {
          "tr": "Oluşan ana ürün adlandırılır (örn. propen + HBr → 2-bromopropan)",
          "en": "Name the major product formed (e.g., propene + HBr → 2-bromopropane)",
          "de": "Das gebildete Hauptprodukt wird benannt (z. B. Propen + HBr → 2-Brompropan)",
          "fr": "On nomme le produit majoritaire formé (par ex. propène + HBr → 2-bromopropane)",
          "ru": "Называют образовавшийся основной продукт (например, пропен + HBr → 2-бромпропан)",
          "ar": "يُسمى الناتج الرئيسي المتكون (مثل بروبين + HBr → 2-برومو بروبان)",
          "zh": "命名生成的主要产物（如 丙烯 + HBr → 2-溴丙烷）",
          "ku": "Berhema sereke ya çêbûyî tê binavkirin (mînak propen + HBr → 2-bromopropan)"
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
        "ku": "Binavkirina Alkanan li gorî IUPAC"
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
        "fr": "Addition d'eau sur les alcynes et tautomérie",
        "ru": "Присоединение воды к алкинам и таутомерия",
        "ar": "إضافة الماء إلى الألكاينات والتوتومرية",
        "zh": "炔烃加水和互变异构",
        "ku": "Lêzêdekirina Avê li Alkînan û Totomerî"
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
          "ku": "Di hawîrdora asîdî de bi katalîzora sulfata cîwayê (HgSO4) av li asetîlenê tê zêdekirin"
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
          "ku": "Pêkhateya asetaldehîdê ya aram tê bidestxistin"
        }
      ]
    },
    {
      "id": "u24-s04",
      "title": {
        "tr": "Primer Alkolün Kademeli Yükseltgenmesi (Etanol)",
        "en": "Stepwise Oxidation of a Primary Alcohol (Ethanol)",
        "de": "Stufenweise Oxidation eines primären Alkohols (Ethanol)",
        "fr": "Oxydation par étapes d'un alcool primaire (éthanol)",
        "ru": "Ступенчатое окисление первичного спирта (этанол)",
        "ar": "الأكسدة المتدرجة لكحول أولي (الإيثانول)",
        "zh": "伯醇的逐步氧化（乙醇）",
        "ku": "Oksîdasyona Qonax bi Qonax a Alkola Primer (Etanol)"
      },
      "steps": [
        {
          "tr": "Etanol (primer alkol) asitli KMnO4 gibi bir yükseltgenle tepkimeye sokulur",
          "en": "Ethanol (a primary alcohol) is treated with an oxidizing agent such as acidified KMnO4",
          "de": "Ethanol (ein primärer Alkohol) wird mit einem Oxidationsmittel wie angesäuertem KMnO4 umgesetzt",
          "fr": "L'éthanol (alcool primaire) est mis en réaction avec un oxydant comme KMnO4 acidifié",
          "ru": "Этанол (первичный спирт) обрабатывают окислителем, например подкисленным KMnO4",
          "ar": "يُعالج الإيثانول (كحول أولي) بعامل مؤكسد مثل KMnO4 المحمض",
          "zh": "用酸性 KMnO4 等氧化剂处理乙醇（伯醇）",
          "ku": "Etanol (alkoleke primer) bi oksîdkerekî wek KMnO4 ya asîdî re tê reaksiyonkirin"
        },
        {
          "tr": "Etanol bir basamak yükseltgenerek etanale (asetaldehit) dönüşür",
          "en": "Ethanol is oxidized one step to ethanal (acetaldehyde)",
          "de": "Ethanol wird in einer Stufe zu Ethanal (Acetaldehyd) oxidiert",
          "fr": "L'éthanol est oxydé en une étape en éthanal (acétaldéhyde)",
          "ru": "Этанол окисляется на одну ступень до этаналя (уксусного альдегида)",
          "ar": "يتأكسد الإيثانول خطوة واحدة إلى الإيثانال (الأسيتالدهيد)",
          "zh": "乙醇被氧化一步生成乙醛",
          "ku": "Etanol bi qonaxekê oksîd dibe û dibe etanal (asetaldehîd)"
        },
        {
          "tr": "Etanal bir basamak daha yükseltgenerek etanoik aside (asetik asit) dönüşür",
          "en": "Ethanal is oxidized one more step to ethanoic acid (acetic acid)",
          "de": "Ethanal wird in einer weiteren Stufe zu Ethansäure (Essigsäure) oxidiert",
          "fr": "L'éthanal est oxydé en une étape supplémentaire en acide éthanoïque (acide acétique)",
          "ru": "Этаналь окисляется ещё на одну ступень до этановой (уксусной) кислоты",
          "ar": "يتأكسد الإيثانال خطوة أخرى إلى حمض الإيثانويك (حمض الأسيتيك)",
          "zh": "乙醛再被氧化一步生成乙酸",
          "ku": "Etanal bi qonaxeke din oksîd dibe û dibe asîda etanoîk (asîda asetîk)"
        },
        {
          "tr": "Oluşan karboksilik asit bu koşullarda daha fazla yükseltgenmez; zincirin son ürünüdür",
          "en": "The carboxylic acid formed is not oxidized further under these conditions; it is the final product",
          "de": "Die entstandene Carbonsäure wird unter diesen Bedingungen nicht weiter oxidiert; sie ist das Endprodukt",
          "fr": "L'acide carboxylique formé n'est plus oxydé dans ces conditions ; c'est le produit final",
          "ru": "Образовавшаяся карбоновая кислота в этих условиях дальше не окисляется; это конечный продукт",
          "ar": "لا يتأكسد الحمض الكربوكسيلي الناتج أكثر في هذه الظروف؛ فهو الناتج النهائي",
          "zh": "生成的羧酸在该条件下不再被进一步氧化，是最终产物",
          "ku": "Asîda karboksîlîk a çêbûyî di van şertan de êdî oksîd nabe; berhema dawî ye"
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
          "ku": "Aldehîd"
        },
        {
          "tr": "Ketonlar",
          "en": "Ketones",
          "de": "Ketone",
          "fr": "Cétones",
          "ru": "Кетоны",
          "ar": "الكيتونات",
          "zh": "酮类",
          "ku": "Keton"
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
          "ku": "Alkan"
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
        "ar": "تتأكسد الألدهيدات بسهولة إلى أحماض كربوكسيلية بفضل ذرة الهيدروجين المرتبطة بمجموعة الكربونيل، فتختزل أيونات Ag+ في كاشف تولنز إلى فضة فلزية (مرآة فضية).",
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
          "tr": "Benzen, üç ikili bağ içeren sıradan bir alken gibi bromlu suyun rengini kolayca giderir.",
          "en": "Benzene decolorizes bromine water as easily as an ordinary alkene with three double bonds.",
          "de": "Benzol entfärbt Bromwasser so leicht wie ein gewöhnliches Alken mit drei Doppelbindungen.",
          "fr": "Le benzène décolore l'eau de brome aussi facilement qu'un alcène ordinaire à trois doubles liaisons.",
          "ru": "Бензол обесцвечивает бромную воду так же легко, как обычный алкен с тремя двойными связями.",
          "ar": "يزيل البنزين لون ماء البروم بسهولة مثل ألكين عادي يحتوي على ثلاث روابط ثنائية.",
          "zh": "苯像含三个双键的普通烯烃一样，很容易使溴水褪色。",
          "ku": "Benzen wek alkeneke asayî ya bi sê girêdanên ducarî, rengê ava bromê bi hêsanî radike."
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
          "de": "Markownikow-Regel: Bei der Addition von HX an unsymmetrische Alkene bindet das H-Atom an das C-Atom mit MEHR Wasserstoffatomen und das X-Atom an das C-Atom mit WENIGER Wasserstoffatomen.",
          "fr": "Règle de Markovnikov : lorsque HX est ajouté à des alcènes asymétriques, l'atome H est lié au carbone avec PLUS d'hydrogène et l'atome X est lié au carbone avec MOINS d'hydrogène.",
          "ru": "Правило Марковникова: когда HX добавляется к асимметричным алкенам, атом H связан с углеродом с БОЛЬШИМ водородом, а атом X связан с углеродом с МЕНЬШИМ водородом.",
          "ar": "قاعدة ماركونيكوف: عند إضافة HX إلى الألكينات غير المتماثلة، ترتبط ذرة H بالكربون الذي يحتوي على المزيد من الهيدروجين، وترتبط ذرة X بالكربون الذي يحتوي على كمية أقل من الهيدروجين.",
          "zh": "马尔可夫尼科夫规则：当HX添加到不对称烯烃中时，H原子与具有更多氢的碳键合，而X原子与具有较少氢的碳键合。",
          "ku": "Qaîdeya Markovnikov: dema HX li alkenên nesîmetrîk tê zêdekirin, atoma H diçe ser karbona ku hîdrojenên wê ZÊDETIR in, atoma X jî diçe ser karbona ku hîdrojenên wê KÊMTIR in."
        },
        {
          "tr": "Karboksilik asitlerin kaynama noktası, mol kütlesi yakın olan alkanlarınkinden düşüktür.",
          "en": "Carboxylic acids have lower boiling points than alkanes of similar molar mass.",
          "de": "Carbonsäuren haben niedrigere Siedepunkte als Alkane mit ähnlicher molarer Masse.",
          "fr": "Les acides carboxyliques ont des températures d'ébullition plus basses que les alcanes de masse molaire voisine.",
          "ru": "Карбоновые кислоты имеют более низкие температуры кипения, чем алканы с близкой молярной массой.",
          "ar": "درجات غليان الأحماض الكربوكسيلية أقل من درجات غليان الألكانات المقاربة لها في الكتلة المولية.",
          "zh": "羧酸的沸点低于摩尔质量相近的烷烃。",
          "ku": "Xala kelandinê ya asîdên karboksîlîk ji ya alkanên bi girseya molî ya nêzîk kêmtir e."
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
        "de": "Die zutreffende Aussage lautet: \"Markownikow-Regel: Bei der Addition von HX an unsymmetrische Alkene bindet das H-Atom an das C-Atom mit MEHR Wasserstoffatomen und das X-Atom an das C-Atom mit WENIGER Wasserstoffatomen.\". Die Reiche werden reicher Regel: H geht an den, der mehr Wasserstoff hat!",
        "fr": "L'affirmation exacte est: \"Règle de Markovnikov : lorsque HX est ajouté à des alcènes asymétriques, l'atome H est lié au carbone avec PLUS d'hydrogène et l'atome X est lié au carbone avec MOINS d'hydrogène.\". Règle des riches s’enrichissent : H va à celui qui a le plus d’hydrogène !",
        "ru": "Правильное утверждение: «Правило Марковникова: когда HX добавляется к асимметричным алкенам, атом H связан с углеродом с БОЛЬШИМ водородом, а атом X связан с углеродом с МЕНЬШИМ водородом.». Правило богатых богатеет: H достаётся тому, у кого больше водорода!",
        "ar": "العبارة الصحيحة هي: \"قاعدة ماركونيكوف: عند إضافة HX إلى الألكينات غير المتماثلة، ترتبط ذرة H بالكربون الذي يحتوي على المزيد من الهيدروجين، وترتبط ذرة X بالكربون الذي يحتوي على كمية أقل من الهيدروجين.\". قاعدة الأغنياء يصبحون أكثر ثراء: H يذهب إلى الشخص الذي لديه المزيد من الهيدروجين!",
        "zh": "正确表述为：“马尔可夫尼科夫规则：当HX添加到不对称烯烃中时，H原子与具有更多氢的碳键合，而X原子与具有较少氢的碳键合。”。富者愈富的规则：氢归拥有更多氢的人！",
        "ku": "Gotina rast ev e: \"Qaîdeya Markovnikov: dema HX li alkenên nesîmetrîk tê zêdekirin, atoma H diçe ser karbona ku hîdrojenên wê ZÊDETIR in, atoma X jî diçe ser karbona ku hîdrojenên wê KÊMTIR in.\". Desthilatdariya dewlemend dewlemendtir dibe: H diçe ba yê ku hîdrojenê wî zêde heye!"
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
          "ku": "Xala kelandinê ya eteran ji ya alkolan bilindtir e."
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
          "tr": "Alkenler ve alkinler bromlu suyun kırmızı-kahverengi rengini oda koşullarında giderir (doymamışlık testi).",
          "en": "Alkenes and alkynes decolorize the red-brown colour of bromine water at room conditions (test for unsaturation).",
          "de": "Alkene und Alkine entfärben rotbraunes Bromwasser bereits bei Raumbedingungen (Nachweis von Mehrfachbindungen).",
          "fr": "Les alcènes et les alcynes décolorent l'eau de brome rouge-brun dans les conditions ambiantes (test d'insaturation).",
          "ru": "Алкены и алкины обесцвечивают красно-бурую бромную воду при комнатных условиях (качественная реакция на непредельность).",
          "ar": "تزيل الألكينات والألكاينات اللون الأحمر البني لماء البروم في الظروف العادية (اختبار عدم التشبع).",
          "zh": "烯烃和炔烃在室温下能使红棕色的溴水褪色（不饱和性检验）。",
          "ku": "Alken û alkîn di şertên odeyê de rengê sor-qehweyî yê ava bromê radikin (testa netêrbûnê)."
        },
        {
          "tr": "Aynı karbon atomuna iki özdeş grup bağlı olsa bile cis-trans izomeri görülür.",
          "en": "Even if two identical groups are bonded to the same carbon atom, the cis-trans isomer is seen.",
          "de": "Selbst wenn zwei identische Gruppen an dasselbe Kohlenstoffatom gebunden sind, wird das cis-trans-Isomer beobachtet.",
          "fr": "Même si deux groupes identiques sont liés au même atome de carbone, l’isomère cis-trans est visible.",
          "ru": "Даже если две идентичные группы связаны с одним и тем же атомом углерода, виден цис-транс-изомер.",
          "ar": "حتى لو ارتبطت مجموعتان متماثلتان بذرة الكربون نفسها، يظهر تماكب سيس-ترانس.",
          "zh": "即使两个相同的基团键合到相同的碳原子上，也会出现顺反异构体。",
          "ku": "Ger du komên wekhev bi heman atoma karbonê re werin girêdan jî, îzomera cis-trans tê dîtin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Alkenler ve alkinler bromlu suyun kırmızı-kahverengi rengini oda koşullarında giderir (doymamışlık testi).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Alkenes and alkynes decolorize the red-brown colour of bromine water at room conditions (test for unsaturation).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Alkene und Alkine entfärben rotbraunes Bromwasser bereits bei Raumbedingungen (Nachweis von Mehrfachbindungen).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les alcènes et les alcynes décolorent l'eau de brome rouge-brun dans les conditions ambiantes (test d'insaturation).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Алкены и алкины обесцвечивают красно-бурую бромную воду при комнатных условиях (качественная реакция на непредельность).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تزيل الألكينات والألكاينات اللون الأحمر البني لماء البروم في الظروف العادية (اختبار عدم التشبع).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“烯烃和炔烃在室温下能使红棕色的溴水褪色（不饱和性检验）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Alken û alkîn di şertên odeyê de rengê sor-qehweyî yê ava bromê radikin (testa netêrbûnê).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
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
          "en": "Alkanes rapidly decolorize the red colour of bromine water.",
          "de": "Alkane entfärben die rote Farbe von Bromwasser schnell.",
          "fr": "Les alcanes décolorent rapidement la couleur rouge de l'eau de brome.",
          "ru": "Алканы быстро обесцвечивают красную окраску бромной воды.",
          "ar": "تزيل الألكانات اللون الأحمر لماء البروم بسرعة.",
          "zh": "烷烃能迅速使溴水的红色褪去。",
          "ku": "Alkan rengê sor ê ava bromê bi lez radikin."
        },
        {
          "tr": "Alkinler (asetilenler, CnH2n-2) en az bir üçlü bağ içerir; uç alkinler amonyaklı AgNO3 çözeltisiyle beyaz, amonyaklı CuCl çözeltisiyle kırmızı çökelek verir.",
          "en": "Alkynes (acetylenes, CnH2n-2) contain at least one triple bond; terminal alkynes give a white precipitate with ammoniacal AgNO3 solution and a red precipitate with ammoniacal CuCl solution.",
          "de": "Alkine (Acetylene, CnH2n-2) enthalten mindestens eine Dreifachbindung; endständige Alkine bilden mit ammoniakalischer AgNO3-Lösung einen weißen und mit ammoniakalischer CuCl-Lösung einen roten Niederschlag.",
          "fr": "Les alcynes (acétyléniques, CnH2n-2) contiennent au moins une triple liaison ; les alcynes terminaux donnent un précipité blanc avec une solution ammoniacale d'AgNO3 et un précipité rouge avec une solution ammoniacale de CuCl.",
          "ru": "Алкины (ацетиленовые, CnH2n-2) содержат хотя бы одну тройную связь; терминальные алкины дают белый осадок с аммиачным раствором AgNO3 и красный осадок с аммиачным раствором CuCl.",
          "ar": "تحتوي الألكاينات (الأسيتيلينات، CnH2n-2) على رابطة ثلاثية واحدة على الأقل؛ وتعطي الألكاينات الطرفية راسبًا أبيض مع محلول AgNO3 النشادري وراسبًا أحمر مع محلول CuCl النشادري.",
          "zh": "炔烃（CnH2n-2）至少含有一个三键；末端炔烃与氨性 AgNO3 溶液生成白色沉淀，与氨性 CuCl 溶液生成红色沉淀。",
          "ku": "Alkîn (asetîlen, CnH2n-2) herî kêm girêdanek sêcarî dihewînin; alkînên dawiyê bi çareseriya AgNO3 ya amonyakî re niştekî spî, bi çareseriya CuCl ya amonyakî re niştekî sor didin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Alkinler (asetilenler, CnH2n-2) en az bir üçlü bağ içerir; uç alkinler amonyaklı AgNO3 çözeltisiyle beyaz, amonyaklı CuCl çözeltisiyle kırmızı çökelek verir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Alkynes (acetylenes, CnH2n-2) contain at least one triple bond; terminal alkynes give a white precipitate with ammoniacal AgNO3 solution and a red precipitate with ammoniacal CuCl solution.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Alkine (Acetylene, CnH2n-2) enthalten mindestens eine Dreifachbindung; endständige Alkine bilden mit ammoniakalischer AgNO3-Lösung einen weißen und mit ammoniakalischer CuCl-Lösung einen roten Niederschlag.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les alcynes (acétyléniques, CnH2n-2) contiennent au moins une triple liaison ; les alcynes terminaux donnent un précipité blanc avec une solution ammoniacale d'AgNO3 et un précipité rouge avec une solution ammoniacale de CuCl.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Алкины (ацетиленовые, CnH2n-2) содержат хотя бы одну тройную связь; терминальные алкины дают белый осадок с аммиачным раствором AgNO3 и красный осадок с аммиачным раствором CuCl.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تحتوي الألكاينات (الأسيتيلينات، CnH2n-2) على رابطة ثلاثية واحدة على الأقل؛ وتعطي الألكاينات الطرفية راسبًا أبيض مع محلول AgNO3 النشادري وراسبًا أحمر مع محلول CuCl النشادري.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“炔烃（CnH2n-2）至少含有一个三键；末端炔烃与氨性 AgNO3 溶液生成白色沉淀，与氨性 CuCl 溶液生成红色沉淀。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Alkîn (asetîlen, CnH2n-2) herî kêm girêdanek sêcarî dihewînin; alkînên dawiyê bi çareseriya AgNO3 ya amonyakî re niştekî spî, bi çareseriya CuCl ya amonyakî re niştekî sor didin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
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
          "en": "Benzene (C6H6) is the parent of aromatic compounds; it has Kekulé resonance structures, is very stable and resists addition reactions.",
          "de": "Benzol (C6H6) ist die Stammverbindung der Aromaten; es besitzt Kekulé-Resonanzstrukturen, ist sehr stabil und geht nur ungern Additionsreaktionen ein.",
          "fr": "Le benzène (C6H6) est le composé parent des aromatiques ; il possède des structures de résonance de Kekulé, est très stable et se prête mal aux réactions d'addition.",
          "ru": "Бензол (C6H6) — родоначальник ароматических соединений; для него характерны резонансные структуры Кекуле, он очень устойчив и неохотно вступает в реакции присоединения.",
          "ar": "البنزين (C6H6) هو أصل المركبات الأروماتية؛ له بنى رنين كيكوليه، وهو شديد الثبات ولا يميل إلى تفاعلات الإضافة.",
          "zh": "苯（C6H6）是芳香族化合物的母体；具有凯库勒共振结构，非常稳定，不易发生加成反应。",
          "ku": "Benzen (C6H6) bavê pêkhateyên aromatîk e; xwedî avahiyên rezonansê yên Kekulé ye, pir aram e û naxwaze beşdarî reaksiyonên lêzêdekirinê bibe."
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
          "tr": "Karboksilik asitlerin kaynama noktası, mol kütlesi yakın olan alkanlarınkinden düşüktür.",
          "en": "Carboxylic acids have lower boiling points than alkanes of similar molar mass.",
          "de": "Carbonsäuren haben niedrigere Siedepunkte als Alkane mit ähnlicher molarer Masse.",
          "fr": "Les acides carboxyliques ont des températures d'ébullition plus basses que les alcanes de masse molaire voisine.",
          "ru": "Карбоновые кислоты имеют более низкие температуры кипения, чем алканы с близкой молярной массой.",
          "ar": "درجات غليان الأحماض الكربوكسيلية أقل من درجات غليان الألكانات المقاربة لها في الكتلة المولية.",
          "zh": "羧酸的沸点低于摩尔质量相近的烷烃。",
          "ku": "Xala kelandinê ya asîdên karboksîlîk ji ya alkanên bi girseya molî ya nêzîk kêmtir e."
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
        "en": "The correct statement is: \"Benzene (C6H6) is the parent of aromatic compounds; it has Kekulé resonance structures, is very stable and resists addition reactions.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Benzol (C6H6) ist die Stammverbindung der Aromaten; es besitzt Kekulé-Resonanzstrukturen, ist sehr stabil und geht nur ungern Additionsreaktionen ein.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le benzène (C6H6) est le composé parent des aromatiques ; il possède des structures de résonance de Kekulé, est très stable et se prête mal aux réactions d'addition.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Бензол (C6H6) — родоначальник ароматических соединений; для него характерны резонансные структуры Кекуле, он очень устойчив и неохотно вступает в реакции присоединения.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"البنزين (C6H6) هو أصل المركبات الأروماتية؛ له بنى رنين كيكوليه، وهو شديد الثبات ولا يميل إلى تفاعلات الإضافة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“苯（C6H6）是芳香族化合物的母体；具有凯库勒共振结构，非常稳定，不易发生加成反应。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Benzen (C6H6) bavê pêkhateyên aromatîk e; xwedî avahiyên rezonansê yên Kekulé ye, pir aram e û naxwaze beşdarî reaksiyonên lêzêdekirinê bibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
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
          "ar": "حتى لو ارتبطت مجموعتان متماثلتان بذرة الكربون نفسها، يظهر تماكب سيس-ترانس.",
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
          "en": "Alkanes rapidly decolorize the red colour of bromine water.",
          "de": "Alkane entfärben die rote Farbe von Bromwasser schnell.",
          "fr": "Les alcanes décolorent rapidement la couleur rouge de l'eau de brome.",
          "ru": "Алканы быстро обесцвечивают красную окраску бромной воды.",
          "ar": "تزيل الألكانات اللون الأحمر لماء البروم بسرعة.",
          "zh": "烷烃能迅速使溴水的红色褪去。",
          "ku": "Alkan rengê sor ê ava bromê bi lez radikin."
        },
        {
          "tr": "Alkinler üçlü bağ içerdiğinden bromlu suyun rengini gidermez.",
          "en": "Because they contain a triple bond, alkynes do not decolorize bromine water.",
          "de": "Da Alkine eine Dreifachbindung enthalten, entfärben sie Bromwasser nicht.",
          "fr": "Parce qu'ils contiennent une triple liaison, les alcynes ne décolorent pas l'eau de brome.",
          "ru": "Поскольку алкины содержат тройную связь, они не обесцвечивают бромную воду.",
          "ar": "لا تزيل الألكاينات لون ماء البروم لأنها تحتوي على رابطة ثلاثية.",
          "zh": "炔烃因含有三键，所以不能使溴水褪色。",
          "ku": "Ji ber ku alkîn girêdana sêcarî dihewînin, rengê ava bromê ranakin."
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
          "tr": "Karboksilik asitlerin kaynama noktası, mol kütlesi yakın olan alkanlarınkinden düşüktür.",
          "en": "Carboxylic acids have lower boiling points than alkanes of similar molar mass.",
          "de": "Carbonsäuren haben niedrigere Siedepunkte als Alkane mit ähnlicher molarer Masse.",
          "fr": "Les acides carboxyliques ont des températures d'ébullition plus basses que les alcanes de masse molaire voisine.",
          "ru": "Карбоновые кислоты имеют более низкие температуры кипения, чем алканы с близкой молярной массой.",
          "ar": "درجات غليان الأحماض الكربوكسيلية أقل من درجات غليان الألكانات المقاربة لها في الكتلة المولية.",
          "zh": "羧酸的沸点低于摩尔质量相近的烷烃。",
          "ku": "Xala kelandinê ya asîdên karboksîlîk ji ya alkanên bi girseya molî ya nêzîk kêmtir e."
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
          "tr": "İç alkinler amonyaklı AgNO3 (Tollens) çözeltisiyle çökelek verir.",
          "en": "Internal alkynes give a precipitate with ammoniacal AgNO3 (Tollens) solution.",
          "de": "Innenständige Alkine bilden mit ammoniakalischer AgNO3-Lösung (Tollens) einen Niederschlag.",
          "fr": "Les alcynes internes donnent un précipité avec une solution ammoniacale d'AgNO3 (Tollens).",
          "ru": "Внутренние алкины дают осадок с аммиачным раствором AgNO3 (реактив Толленса).",
          "ar": "تعطي الألكاينات الداخلية راسبًا مع محلول AgNO3 النشادري (كاشف تولنز).",
          "zh": "非末端（内部）炔烃能与氨性 AgNO3 溶液（托伦试剂）生成沉淀。",
          "ku": "Alkînên navîn bi çareseriya AgNO3 ya amonyakî (Tollens) re nişt didin."
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
          "ar": "حتى لو ارتبطت مجموعتان متماثلتان بذرة الكربون نفسها، يظهر تماكب سيس-ترانس.",
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
          "tr": "Benzen, üç ikili bağ içeren sıradan bir alken gibi bromlu suyun rengini kolayca giderir.",
          "en": "Benzene decolorizes bromine water as easily as an ordinary alkene with three double bonds.",
          "de": "Benzol entfärbt Bromwasser so leicht wie ein gewöhnliches Alken mit drei Doppelbindungen.",
          "fr": "Le benzène décolore l'eau de brome aussi facilement qu'un alcène ordinaire à trois doubles liaisons.",
          "ru": "Бензол обесцвечивает бромную воду так же легко, как обычный алкен с тремя двойными связями.",
          "ar": "يزيل البنزين لون ماء البروم بسهولة مثل ألكين عادي يحتوي على ثلاث روابط ثنائية.",
          "zh": "苯像含三个双键的普通烯烃一样，很容易使溴水褪色。",
          "ku": "Benzen wek alkeneke asayî ya bi sê girêdanên ducarî, rengê ava bromê bi hêsanî radike."
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
          "zh": "羧酸（R-COOH）在酸催化下与醇反应，生成有香味的酯（R-COO-R'）（酯化反应）。",
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
          "en": "Alkanes rapidly decolorize the red colour of bromine water.",
          "de": "Alkane entfärben die rote Farbe von Bromwasser schnell.",
          "fr": "Les alcanes décolorent rapidement la couleur rouge de l'eau de brome.",
          "ru": "Алканы быстро обесцвечивают красную окраску бромной воды.",
          "ar": "تزيل الألكانات اللون الأحمر لماء البروم بسرعة.",
          "zh": "烷烃能迅速使溴水的红色褪去。",
          "ku": "Alkan rengê sor ê ava bromê bi lez radikin."
        },
        {
          "tr": "Alkinler üçlü bağ içerdiğinden bromlu suyun rengini gidermez.",
          "en": "Because they contain a triple bond, alkynes do not decolorize bromine water.",
          "de": "Da Alkine eine Dreifachbindung enthalten, entfärben sie Bromwasser nicht.",
          "fr": "Parce qu'ils contiennent une triple liaison, les alcynes ne décolorent pas l'eau de brome.",
          "ru": "Поскольку алкины содержат тройную связь, они не обесцвечивают бромную воду.",
          "ar": "لا تزيل الألكاينات لون ماء البروم لأنها تحتوي على رابطة ثلاثية.",
          "zh": "炔烃因含有三键，所以不能使溴水褪色。",
          "ku": "Ji ber ku alkîn girêdana sêcarî dihewînin, rengê ava bromê ranakin."
        },
        {
          "tr": "Eterlerin kaynama noktası alkollerden daha yüksektir.",
          "en": "Ethers have a higher boiling point than alcohols.",
          "de": "Ether haben einen höheren Siedepunkt als Alkohole.",
          "fr": "Les éthers ont un point d'ébullition plus élevé que les alcools.",
          "ru": "Эфиры имеют более высокую температуру кипения, чем спирты.",
          "ar": "الإيثرات لها درجة غليان أعلى من الكحولات.",
          "zh": "醚的沸点高于醇。",
          "ku": "Xala kelandinê ya eteran ji ya alkolan bilindtir e."
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
        "zh": "正确表述为：“羧酸（R-COOH）在酸催化下与醇反应，生成有香味的酯（R-COO-R'）（酯化反应）。”。属于化学学科必考的核心客观真理。",
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
          "tr": "İç alkinler amonyaklı AgNO3 (Tollens) çözeltisiyle çökelek verir.",
          "en": "Internal alkynes give a precipitate with ammoniacal AgNO3 (Tollens) solution.",
          "de": "Innenständige Alkine bilden mit ammoniakalischer AgNO3-Lösung (Tollens) einen Niederschlag.",
          "fr": "Les alcynes internes donnent un précipité avec une solution ammoniacale d'AgNO3 (Tollens).",
          "ru": "Внутренние алкины дают осадок с аммиачным раствором AgNO3 (реактив Толленса).",
          "ar": "تعطي الألكاينات الداخلية راسبًا مع محلول AgNO3 النشادري (كاشف تولنز).",
          "zh": "非末端（内部）炔烃能与氨性 AgNO3 溶液（托伦试剂）生成沉淀。",
          "ku": "Alkînên navîn bi çareseriya AgNO3 ya amonyakî (Tollens) re nişt didin."
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
          "ar": "حتى لو ارتبطت مجموعتان متماثلتان بذرة الكربون نفسها، يظهر تماكب سيس-ترانس.",
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
          "tr": "Benzen, üç ikili bağ içeren sıradan bir alken gibi bromlu suyun rengini kolayca giderir.",
          "en": "Benzene decolorizes bromine water as easily as an ordinary alkene with three double bonds.",
          "de": "Benzol entfärbt Bromwasser so leicht wie ein gewöhnliches Alken mit drei Doppelbindungen.",
          "fr": "Le benzène décolore l'eau de brome aussi facilement qu'un alcène ordinaire à trois doubles liaisons.",
          "ru": "Бензол обесцвечивает бромную воду так же легко, как обычный алкен с тремя двойными связями.",
          "ar": "يزيل البنزين لون ماء البروم بسهولة مثل ألكين عادي يحتوي على ثلاث روابط ثنائية.",
          "zh": "苯像含三个双键的普通烯烃一样，很容易使溴水褪色。",
          "ku": "Benzen wek alkeneke asayî ya bi sê girêdanên ducarî, rengê ava bromê bi hêsanî radike."
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
          "en": "Alkanes rapidly decolorize the red colour of bromine water.",
          "de": "Alkane entfärben die rote Farbe von Bromwasser schnell.",
          "fr": "Les alcanes décolorent rapidement la couleur rouge de l'eau de brome.",
          "ru": "Алканы быстро обесцвечивают красную окраску бромной воды.",
          "ar": "تزيل الألكانات اللون الأحمر لماء البروم بسرعة.",
          "zh": "烷烃能迅速使溴水的红色褪去。",
          "ku": "Alkan rengê sor ê ava bromê bi lez radikin."
        },
        {
          "tr": "Alkinler üçlü bağ içerdiğinden bromlu suyun rengini gidermez.",
          "en": "Because they contain a triple bond, alkynes do not decolorize bromine water.",
          "de": "Da Alkine eine Dreifachbindung enthalten, entfärben sie Bromwasser nicht.",
          "fr": "Parce qu'ils contiennent une triple liaison, les alcynes ne décolorent pas l'eau de brome.",
          "ru": "Поскольку алкины содержат тройную связь, они не обесцвечивают бромную воду.",
          "ar": "لا تزيل الألكاينات لون ماء البروم لأنها تحتوي على رابطة ثلاثية.",
          "zh": "炔烃因含有三键，所以不能使溴水褪色。",
          "ku": "Ji ber ku alkîn girêdana sêcarî dihewînin, rengê ava bromê ranakin."
        },
        {
          "tr": "Eterlerin kaynama noktası alkollerden daha yüksektir.",
          "en": "Ethers have a higher boiling point than alcohols.",
          "de": "Ether haben einen höheren Siedepunkt als Alkohole.",
          "fr": "Les éthers ont un point d'ébullition plus élevé que les alcools.",
          "ru": "Эфиры имеют более высокую температуру кипения, чем спирты.",
          "ar": "الإيثرات لها درجة غليان أعلى من الكحولات.",
          "zh": "醚的沸点高于醇。",
          "ku": "Xala kelandinê ya eteran ji ya alkolan bilindtir e."
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
          "tr": "İç alkinler amonyaklı AgNO3 (Tollens) çözeltisiyle çökelek verir.",
          "en": "Internal alkynes give a precipitate with ammoniacal AgNO3 (Tollens) solution.",
          "de": "Innenständige Alkine bilden mit ammoniakalischer AgNO3-Lösung (Tollens) einen Niederschlag.",
          "fr": "Les alcynes internes donnent un précipité avec une solution ammoniacale d'AgNO3 (Tollens).",
          "ru": "Внутренние алкины дают осадок с аммиачным раствором AgNO3 (реактив Толленса).",
          "ar": "تعطي الألكاينات الداخلية راسبًا مع محلول AgNO3 النشادري (كاشف تولنز).",
          "zh": "非末端（内部）炔烃能与氨性 AgNO3 溶液（托伦试剂）生成沉淀。",
          "ku": "Alkînên navîn bi çareseriya AgNO3 ya amonyakî (Tollens) re nişt didin."
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
          "ku": "Asîdên monokarboksîlîk û esterên bi heman hejmara karbonê îzomerên koma fonksiyonel ên hev in (mînak asîda asetîk û metîl format)."
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
        "ku": "Gotina rast ev e: \"Asîdên monokarboksîlîk û esterên bi heman hejmara karbonê îzomerên koma fonksiyonel ên hev in (mînak asîda asetîk û metîl format).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
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
          "ar": "في الألكينات إذا كانت المجموعات المرتبطة بذرتي كربون الرابطة الثنائية في الجهة نفسها سُمّي المتماكب الهندسي سيس، وإذا كانت في جهتين متقابلتين سُمّي ترانس.",
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
          "tr": "Benzen, üç ikili bağ içeren sıradan bir alken gibi bromlu suyun rengini kolayca giderir.",
          "en": "Benzene decolorizes bromine water as easily as an ordinary alkene with three double bonds.",
          "de": "Benzol entfärbt Bromwasser so leicht wie ein gewöhnliches Alken mit drei Doppelbindungen.",
          "fr": "Le benzène décolore l'eau de brome aussi facilement qu'un alcène ordinaire à trois doubles liaisons.",
          "ru": "Бензол обесцвечивает бромную воду так же легко, как обычный алкен с тремя двойными связями.",
          "ar": "يزيل البنزين لون ماء البروم بسهولة مثل ألكين عادي يحتوي على ثلاث روابط ثنائية.",
          "zh": "苯像含三个双键的普通烯烃一样，很容易使溴水褪色。",
          "ku": "Benzen wek alkeneke asayî ya bi sê girêdanên ducarî, rengê ava bromê bi hêsanî radike."
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
          "tr": "Karboksilik asitlerin kaynama noktası, mol kütlesi yakın olan alkanlarınkinden düşüktür.",
          "en": "Carboxylic acids have lower boiling points than alkanes of similar molar mass.",
          "de": "Carbonsäuren haben niedrigere Siedepunkte als Alkane mit ähnlicher molarer Masse.",
          "fr": "Les acides carboxyliques ont des températures d'ébullition plus basses que les alcanes de masse molaire voisine.",
          "ru": "Карбоновые кислоты имеют более низкие температуры кипения, чем алканы с близкой молярной массой.",
          "ar": "درجات غليان الأحماض الكربوكسيلية أقل من درجات غليان الألكانات المقاربة لها في الكتلة المولية.",
          "zh": "羧酸的沸点低于摩尔质量相近的烷烃。",
          "ku": "Xala kelandinê ya asîdên karboksîlîk ji ya alkanên bi girseya molî ya nêzîk kêmtir e."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Alkenlerde ikili bağ karbonlarına bağlı gruplar aynı tarafta ise cis-, zıt tarafta ise trans- geometrik izomeri adını alır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In alkenes, if the groups attached to the double bond carbons are on the same side, they are called cis- and if they are on opposite sides, they are called trans geometric isomers.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Befinden sich in Alkenen die an die Doppelbindungskohlenstoffe gebundenen Gruppen auf derselben Seite, werden sie als cis-geometrische Isomere bezeichnet, wenn sie sich auf entgegengesetzten Seiten befinden, werden sie als trans-geometrische Isomere bezeichnet.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans les alcènes, si les groupes attachés aux carbones de la double liaison sont du même côté, ils sont appelés cis- et s'ils sont sur des côtés opposés, ils sont appelés isomères géométriques trans.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В алкенах, если группы, присоединенные к двойной связи углерода, находятся на одной стороне, их называют цис-, а если они расположены на противоположных сторонах, их называют транс-геометрическими изомерами.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في الألكينات إذا كانت المجموعات المرتبطة بذرتي كربون الرابطة الثنائية في الجهة نفسها سُمّي المتماكب الهندسي سيس، وإذا كانت في جهتين متقابلتين سُمّي ترانس.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在烯烃中，如果连接到双键碳的基团位于同一侧，则称为顺式几何异构体，如果位于相反侧，则称为反式几何异构体。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di alkenan de ger komên ku bi karbonên girêka ducarî ve girêdayî bin li ser hev bin, ji wan re cis- û heke li aliyên dijber bin, jê re îzomerên geometrîk trans tê gotin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit24;
