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
    "ru": "Органические соединения: углеводороды и функциональные группы",
    "ar": "المركبات العضوية: الهيدروكربونات والمجموعات الوظيفية",
    "zh": "有机化合物与官能团",
    "ku": "Madeyên Organîk û Komên Fonksiyonel"
  },
  "subtitle": {
    "tr": "Alkan, Alken, Alkin, Alkol, Ester ve Markovnikov",
    "en": "Nomenclature, Isomerism, Reactions & Tests",
    "de": "Alkan, Alken, Alkin, Alkohol, Ester und Markownikow",
    "fr": "Alcane, alcène, alcyne, alcool, ester et Markovnikov",
    "ru": "Алканы, алкены, алкины, спирты, сложные эфиры и правило Марковникова",
    "ar": "الألكانات والألكينات والألكاينات والكحولات والإسترات وقاعدة ماركوفنيكوف",
    "zh": "烷烃、烯烃、炔烃、醇、酯和马氏规则",
    "ku": "Alkan, Alken, Alkîn, Alkol, Ester û Markovnikov"
  },
  "facts": [
    {
      "id": "u24-f01",
      "fact": {
        "tr": "Alkanlar (parafinler, CnH2n+2) doymuş hidrokarbonlardır; sadece sigma bağı içerir ve katılma tepkimesi vermez.",
        "en": "Alkanes (paraffins, CnH2n+2) are saturated hydrocarbons; they contain only sigma bonds and do NOT undergo addition reactions.",
        "de": "Alkane (Paraffine, CnH2n+2) sind gesättigte Kohlenwasserstoffe; Es enthält nur Sigma-Bindungen und führt KEINE Additionsreaktion durch.",
        "fr": "Les alcanes (paraffines, CnH2n+2) sont des hydrocarbures saturés ; Il ne contient que des liaisons sigma et NE donne PAS de réaction d’addition.",
        "ru": "Алканы (парафины, CnH2n+2) — предельные углеводороды; они содержат только σ-связи и не вступают в реакции присоединения.",
        "ar": "الألكانات (البارافينات، CnH2n+2) هيدروكربونات مشبعة؛ تحتوي على روابط سيجما فقط ولا تدخل في تفاعلات الإضافة.",
        "zh": "烷烃(CnH2n+2，又称石蜡烃)是饱和烃；分子中只含σ键，不发生加成反应。",
        "ku": "Alkan (parafîn, CnH2n+2) hîdrokarbonên têrbûyî ne; Ew tenê girêdanên sigma dihewîne û reaksiyonek lêzêdekirinê NADE."
      },
      "trap": {
        "tr": "Alkanlar bromlu suyun kırmızı rengini hızla giderir.",
        "en": "Alkanes rapidly decolorize the red colour of bromine water.",
        "de": "Alkane entfärben die rote Farbe von Bromwasser schnell.",
        "fr": "Les alcanes décolorent rapidement la couleur rouge de l'eau de brome.",
        "ru": "Алканы быстро обесцвечивают красно-бурую бромную воду.",
        "ar": "تزيل الألكانات اللون الأحمر لماء البروم بسرعة.",
        "zh": "烷烃能迅速使溴水的红棕色褪去。",
        "ku": "Alkan rengê sor ê ava bromê bi lez radikin."
      },
      "whyTrapIsFalse": {
        "tr": "Alkanlarda yalnızca sigma bağı vardır; açılabilecek pi bağı olmadığından Br2 katılamaz ve bromlu suyun rengi oda koşullarında gitmez. Renk giderme, C=C veya C≡C bağı bulunduğunu gösterir.",
        "en": "Alkanes contain only sigma bonds; with no pi bond to open, Br2 cannot add and bromine water keeps its colour at room conditions. Decolourisation indicates a C=C or C≡C bond.",
        "de": "Alkane enthalten nur Sigma-Bindungen; ohne öffnbare Pi-Bindung kann Br2 nicht addiert werden, und Bromwasser bleibt bei Raumbedingungen gefärbt. Entfärbung zeigt eine C=C- oder C≡C-Bindung an.",
        "fr": "Les alcanes ne contiennent que des liaisons sigma ; sans liaison pi à ouvrir, Br2 ne peut pas s'additionner et l'eau de brome reste colorée dans les conditions ambiantes. La décoloration révèle une liaison C=C ou C≡C.",
        "ru": "В алканах есть только σ-связи; π-связей, которые могли бы разорваться, нет, поэтому Br2 не присоединяется и бромная вода при комнатных условиях не обесцвечивается. Обесцвечивание указывает на наличие связи C=C или C≡C.",
        "ar": "تحتوي الألكانات على روابط سيجما فقط؛ ولعدم وجود رابطة باي يمكن فتحها لا يُضاف Br2 ولا يزول لون ماء البروم في ظروف الغرفة. زوال اللون دليل على وجود رابطة C=C أو C≡C.",
        "zh": "烷烃只含σ键，没有可打开的π键，Br2 无法加成，室温下溴水不褪色。溴水褪色说明存在 C=C 或 C≡C 键。",
        "ku": "Di alkanan de tenê girêdanên sigma hene; ji ber ku girêdana pi ya ku vebe tune, Br2 lê zêde nabe û di şert û mercên odeyê de rengê ava bromê naçe. Çûna rengê nîşana girêdana C=C an C≡C e."
      }
    },
    {
      "id": "u24-f02",
      "fact": {
        "tr": "Alkenler (olefinler, CnH2n) en az bir ikili bağ (C=C) içerir; katılma ve polimerleşme tepkimesi verir.",
        "en": "Alkenes (olefins, CnH2n) contain at least one double bond (C=C); they undergo addition and polymerization reactions.",
        "de": "Alkene (Olefine, CnH2n) enthalten mindestens eine Doppelbindung (C=C); Es führt zu einer Additions- und Polymerisationsreaktion.",
        "fr": "Les alcènes (oléfines, CnH2n) contiennent au moins une double liaison (C=C) ; Il donne une réaction d'addition et de polymérisation.",
        "ru": "Алкены (олефины, CnH2n) содержат хотя бы одну двойную связь C=C; они вступают в реакции присоединения и полимеризации.",
        "ar": "تحتوي الألكينات (الأوليفينات، CnH2n) على رابطة ثنائية واحدة على الأقل (C=C)؛ وتدخل في تفاعلات الإضافة والبلمرة.",
        "zh": "烯烃(CnH2n)分子中至少含有一个碳碳双键(C=C)；能发生加成反应和聚合反应。",
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
      },
      "whyTrapIsFalse": {
        "tr": "Doymuş, bütün karbon–karbon bağlarının tekli olması demektir. Alkenlerde en az bir C=C ikili bağı bulunduğu için doymamış hidrokarbonlardır.",
        "en": "Saturated means all carbon–carbon bonds are single. Alkenes contain at least one C=C double bond, so they are unsaturated hydrocarbons.",
        "de": "Gesättigt bedeutet, dass alle Kohlenstoff-Kohlenstoff-Bindungen Einfachbindungen sind. Alkene enthalten mindestens eine C=C-Doppelbindung und sind daher ungesättigte Kohlenwasserstoffe.",
        "fr": "Saturé signifie que toutes les liaisons carbone–carbone sont simples. Les alcènes possèdent au moins une double liaison C=C : ce sont des hydrocarbures insaturés.",
        "ru": "Предельными называют углеводороды, в которых все связи углерод–углерод одинарные. В алкенах есть хотя бы одна двойная связь C=C, поэтому они относятся к непредельным углеводородам.",
        "ar": "المشبع يعني أن جميع روابط كربون–كربون أحادية. تحتوي الألكينات على رابطة ثنائية C=C واحدة على الأقل، لذا فهي هيدروكربونات غير مشبعة.",
        "zh": "饱和是指所有碳–碳键都是单键。烯烃至少含有一个 C=C 双键，因此属于不饱和烃。",
        "ku": "Têr tê wateya ku hemû girêdanên karbon–karbon yekane ne. Di alkenan de herî kêm girêdanek dualî ya C=C heye, ji ber vê yekê ew hîdrokarbonên netêr in."
      }
    },
    {
      "id": "u24-f03",
      "fact": {
        "tr": "Markovnikov Kuralı: Asimetrik alkenlere HX katılırken H atomu hidrojeni ÇOK olan karbona, X atomu hidrojeni AZ olan karbona bağlanır.",
        "en": "Markovnikov's Rule: When HX is added to asymmetric alkenes, the H atom is bonded to the carbon with MORE hydrogen, and the X atom is bonded to the carbon with LESS hydrogen.",
        "de": "Markownikow-Regel: Bei der Addition von HX an unsymmetrische Alkene bindet das H-Atom an das C-Atom mit MEHR Wasserstoffatomen und das X-Atom an das C-Atom mit WENIGER Wasserstoffatomen.",
        "fr": "Règle de Markovnikov : lorsque HX est ajouté à des alcènes asymétriques, l'atome H est lié au carbone avec PLUS d'hydrogène et l'atome X est lié au carbone avec MOINS d'hydrogène.",
        "ru": "Правило Марковникова: при присоединении HX к несимметричному алкену атом H присоединяется к тому атому углерода двойной связи, у которого больше атомов водорода, а атом X — к тому, у которого их меньше.",
        "ar": "قاعدة ماركوفنيكوف: عند إضافة HX إلى ألكين غير متماثل ترتبط ذرة H بذرة الكربون التي تحمل عددًا أكبر من ذرات الهيدروجين، وترتبط ذرة X بذرة الكربون التي تحمل عددًا أقل منها.",
        "zh": "马氏规则（马尔可夫尼科夫规则）：HX 与不对称烯烃加成时，H 原子加到含氢较多的双键碳原子上，X 原子加到含氢较少的双键碳原子上。",
        "ku": "Qaîdeya Markovnikov: dema HX li alkenên nesîmetrîk tê zêdekirin, atoma H diçe ser karbona ku hîdrojenên wê ZÊDETIR in, atoma X jî diçe ser karbona ku hîdrojenên wê KÊMTIR in."
      },
      "trap": {
        "tr": "Asimetrik bir alkene HX katılırken H atomu, ikili bağ karbonlarından hidrojeni az olana bağlanır.",
        "en": "When HX adds to an asymmetric alkene, the H atom bonds to the double-bond carbon that has fewer hydrogens.",
        "de": "Bei der Addition von HX an ein unsymmetrisches Alken bindet das H-Atom an das Doppelbindungs-C mit weniger Wasserstoffatomen.",
        "fr": "Lors de l'addition de HX sur un alcène asymétrique, l'atome H se fixe sur le carbone de la double liaison le moins hydrogéné.",
        "ru": "При присоединении HX к несимметричному алкену атом H присоединяется к тому атому углерода двойной связи, у которого меньше атомов водорода.",
        "ar": "عند إضافة HX إلى ألكين غير متماثل ترتبط ذرة H بكربون الرابطة الثنائية الذي يحمل هيدروجينًا أقل.",
        "zh": "HX 与不对称烯烃加成时，H 原子加到双键上含氢较少的碳原子上。",
        "ku": "Dema HX li alkeneke nesîmetrîk zêde dibe, atoma H bi karbona girêdana dualî ya ku hîdrojenên wê kêmtir in ve girê dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak kuralı tersine çeviriyor. Markovnikov kuralına göre HX'in H atomu ikili bağ karbonlarından hidrojeni çok olana, X atomu hidrojeni az olana bağlanır; propen + HBr tepkimesinde ana ürün 2-bromopropandır.",
        "en": "The trap reverses the rule. By Markovnikov's rule the H of HX goes to the double-bond carbon with more hydrogens and X to the one with fewer; propene + HBr gives mainly 2-bromopropane.",
        "de": "Die Falle kehrt die Regel um. Nach Markownikow geht das H von HX an das Doppelbindungs-C mit mehr Wasserstoffatomen, X an das mit weniger; Propen + HBr ergibt hauptsächlich 2-Brompropan.",
        "fr": "Le piège inverse la règle. Selon Markovnikov, le H de HX se fixe sur le carbone de la double liaison le plus hydrogéné et X sur le moins hydrogéné ; propène + HBr donne surtout le 2-bromopropane.",
        "ru": "Здесь правило перевёрнуто. По правилу Марковникова H из HX присоединяется к атому C двойной связи, у которого больше атомов водорода, а X — к атому, у которого их меньше; из пропена и HBr образуется в основном 2-бромпропан.",
        "ar": "الفخ يعكس القاعدة. وفق قاعدة ماركوفنيكوف ترتبط ذرة H من HX بكربون الرابطة الثنائية الذي يحمل هيدروجينًا أكثر، وترتبط X بالذي يحمل هيدروجينًا أقل؛ فينتج من البروبين + HBr أساسًا 2-برومو بروبان.",
        "zh": "该说法把规则说反了。按马氏规则，HX 中的 H 加到双键上含氢较多的碳原子上，X 加到含氢较少的碳原子上；丙烯 + HBr 的主产物是 2-溴丙烷。",
        "ku": "Xefik qaîdeyê berevajî dike. Li gorî qaîdeya Markovnikov H ya HX diçe ser karbona girêdana dualî ya ku hîdrojenên wê zêdetir in, X jî diçe ser ya ku hîdrojenên wê kêmtir in; propen + HBr bi giranî 2-bromopropan dide."
      },
      "osymTip": {
        "tr": "Zengin daha zengin olur kuralı: Hidrojen çok olana H gider!",
        "en": "The rich get richer rule: H goes to the one who has more hydrogen!",
        "de": "Die Reiche werden reicher Regel: H geht an den, der mehr Wasserstoff hat!",
        "fr": "Règle des riches s’enrichissent : H va à celui qui a le plus d’hydrogène !",
        "ru": "Атом H присоединяется к тому атому углерода двойной связи, который уже несёт больше атомов водорода.",
        "ar": "باختصار: تذهب ذرة H إلى كربون الرابطة الثنائية الأغنى بالهيدروجين.",
        "zh": "H 加到原本含氢较多的双键碳原子上！",
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
        "ru": "Алкины содержат тройную связь, поэтому не обесцвечивают бромную воду.",
        "ar": "لا تزيل الألكاينات لون ماء البروم لأنها تحتوي على رابطة ثلاثية.",
        "zh": "炔烃因含有三键，所以不能使溴水褪色。",
        "ku": "Ji ber ku alkîn girêdana sêcarî dihewînin, rengê ava bromê ranakin."
      },
      "whyTrapIsFalse": {
        "tr": "Üçlü bağda da pi bağı vardır, hem de iki tane. Bu nedenle alkinler de Br2 katarak bromlu suyun rengini alkenler gibi giderir.",
        "en": "A triple bond also contains pi bonds, in fact two of them. Therefore alkynes also add Br2 and decolourise bromine water just like alkenes.",
        "de": "Auch eine Dreifachbindung enthält Pi-Bindungen, sogar zwei. Deshalb addieren Alkine ebenfalls Br2 und entfärben Bromwasser wie Alkene.",
        "fr": "Une triple liaison contient aussi des liaisons pi, et même deux. Les alcynes additionnent donc Br2 et décolorent l'eau de brome comme les alcènes.",
        "ru": "Тройная связь тоже содержит π-связи, причём две. Поэтому алкины тоже присоединяют Br2 и обесцвечивают бромную воду, как и алкены.",
        "ar": "الرابطة الثلاثية تحتوي أيضًا على روابط باي، بل على رابطتين. لذلك تضيف الألكاينات Br2 وتزيل لون ماء البروم مثل الألكينات.",
        "zh": "三键中同样含有π键，而且有两个。因此炔烃也能与 Br2 加成，像烯烃一样使溴水褪色。",
        "ku": "Di girêdana sêalî de jî girêdanên pi hene, du heb jî. Ji ber vê yekê alkîn jî Br2 lê zêde dikin û wek alkenan rengê ava bromê dibin."
      }
    },
    {
      "id": "u24-f05",
      "fact": {
        "tr": "Alkinler (asetilenler, CnH2n-2) en az bir üçlü bağ içerir; uç alkinler amonyaklı AgNO3 çözeltisiyle beyaz, amonyaklı CuCl çözeltisiyle kırmızı çökelek verir.",
        "en": "Alkynes (acetylenes, CnH2n-2) contain at least one triple bond; terminal alkynes give a white precipitate with ammoniacal AgNO3 solution and a red precipitate with ammoniacal CuCl solution.",
        "de": "Alkine (Acetylene, CnH2n-2) enthalten mindestens eine Dreifachbindung; endständige Alkine bilden mit ammoniakalischer AgNO3-Lösung einen weißen und mit ammoniakalischer CuCl-Lösung einen roten Niederschlag.",
        "fr": "Les alcynes (acétyléniques, CnH2n-2) contiennent au moins une triple liaison ; les alcynes terminaux donnent un précipité blanc avec une solution ammoniacale d'AgNO3 et un précipité rouge avec une solution ammoniacale de CuCl.",
        "ru": "Алкины (ряд ацетилена, CnH2n-2) содержат хотя бы одну тройную связь; концевые алкины дают белый осадок с аммиачным раствором AgNO3 и красный осадок с аммиачным раствором CuCl.",
        "ar": "تحتوي الألكاينات (الأسيتيلينات، CnH2n-2) على رابطة ثلاثية واحدة على الأقل؛ وتعطي الألكاينات الطرفية راسبًا أبيض مع محلول AgNO3 النشادري وراسبًا أحمر مع محلول CuCl النشادري.",
        "zh": "炔烃(CnH2n-2)至少含有一个碳碳三键；端炔与银氨溶液(氨性 AgNO3 溶液)生成白色沉淀，与氨性 CuCl 溶液生成红色沉淀。",
        "ku": "Alkîn (asetîlen, CnH2n-2) herî kêm girêdanek sêcarî dihewînin; alkînên dawiyê bi çareseriya AgNO3 ya amonyakî re niştekî spî, bi çareseriya CuCl ya amonyakî re niştekî sor didin."
      },
      "trap": {
        "tr": "İç alkinler amonyaklı AgNO3 (Tollens) çözeltisiyle çökelek verir.",
        "en": "Internal alkynes give a precipitate with ammoniacal AgNO3 (Tollens) solution.",
        "de": "Innenständige Alkine bilden mit ammoniakalischer AgNO3-Lösung (Tollens) einen Niederschlag.",
        "fr": "Les alcynes internes donnent un précipité avec une solution ammoniacale d'AgNO3 (Tollens).",
        "ru": "Внутренние алкины дают осадок с аммиачным раствором AgNO3 (реактив Толленса).",
        "ar": "تعطي الألكاينات الداخلية راسبًا مع محلول AgNO3 النشادري (كاشف تولنز).",
        "zh": "内炔（三键不在链端）也能与银氨溶液（托伦试剂）生成沉淀。",
        "ku": "Alkînên navîn bi çareseriya AgNO3 ya amonyakî (Tollens) re nişt didin."
      },
      "whyTrapIsFalse": {
        "tr": "Çökelek, üçlü bağ karbonuna bağlı H atomunun Ag+ ile yer değiştirmesiyle oluşur. İç alkinlerde üçlü bağ karbonlarında H bulunmadığından çökelek oluşmaz; bu test uç alkini iç alkinden ayırır.",
        "en": "The precipitate forms when the H on a triple-bond carbon is replaced by Ag+. Internal alkynes have no H on the triple-bond carbons, so no precipitate forms; the test distinguishes terminal from internal alkynes.",
        "de": "Der Niederschlag entsteht, wenn das H am Dreifachbindungs-C durch Ag+ ersetzt wird. Innere Alkine haben kein H an den Dreifachbindungs-C-Atomen, daher kein Niederschlag; der Test unterscheidet endständige von inneren Alkinen.",
        "fr": "Le précipité se forme quand le H porté par un carbone de la triple liaison est remplacé par Ag+. Les alcynes internes n'ont pas de H sur ces carbones : pas de précipité ; le test distingue alcynes terminaux et internes.",
        "ru": "Осадок образуется, когда атом H при атоме углерода тройной связи замещается на Ag+. У внутренних алкинов при атомах углерода тройной связи нет H, поэтому осадок не образуется; эта реакция позволяет отличить концевые алкины от внутренних.",
        "ar": "يتكون الراسب عندما تُستبدل ذرة H المرتبطة بكربون الرابطة الثلاثية بأيون Ag+. لا توجد ذرة H على كربونات الرابطة الثلاثية في الألكاينات الداخلية، فلا يتكون راسب؛ وبهذا يميز الاختبار الألكاين الطرفي من الداخلي.",
        "zh": "沉淀是三键碳上的 H 被 Ag+ 取代而生成的。内炔的三键碳上没有 H，不生成沉淀；该实验可区分端炔和内炔。",
        "ku": "Çîp çêdibe dema ku H ya li ser karbona girêdana sêalî bi Ag+ tê guhertin. Di alkînên navîn de li ser karbonên girêdana sêalî H tune, loma çîp çênabe; ev test alkîna dawî ji ya navîn cuda dike."
      }
    },
    {
      "id": "u24-f06",
      "fact": {
        "tr": "Aromatik bileşiklerin atası benzendir (C6H6); Kekule rezonans yapısına sahiptir, çok kararlıdır ve katılma tepkimesine isteksizdir.",
        "en": "Benzene (C6H6) is the parent of aromatic compounds; it has Kekulé resonance structures, is very stable and resists addition reactions.",
        "de": "Benzol (C6H6) ist die Stammverbindung der Aromaten; es besitzt Kekulé-Resonanzstrukturen, ist sehr stabil und geht nur ungern Additionsreaktionen ein.",
        "fr": "Le benzène (C6H6) est le composé parent des aromatiques ; il possède des structures de résonance de Kekulé, est très stable et se prête mal aux réactions d'addition.",
        "ru": "Бензол (C6H6) — родоначальник ароматических соединений; его строение описывают резонансными структурами Кекуле, он очень устойчив и с трудом вступает в реакции присоединения.",
        "ar": "البنزين (C6H6) هو أصل المركبات الأروماتية؛ له بنى رنين كيكوليه، وهو شديد الثبات ولا يميل إلى تفاعلات الإضافة.",
        "zh": "苯(C6H6)是芳香族化合物的母体；具有凯库勒共振结构，非常稳定，不易发生加成反应。",
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
      },
      "whyTrapIsFalse": {
        "tr": "Benzende pi elektronları halka boyunca dağılmıştır (rezonans); bu kararlılık kolay bozulmadığından benzen sıradan alkenler gibi Br2 katmaz, bromlu suyun rengini gidermez ve daha çok yer değiştirme tepkimesi verir.",
        "en": "In benzene the pi electrons are spread around the ring (resonance); this stability is not easily lost, so benzene does not add Br2 like an ordinary alkene, does not decolourise bromine water and prefers substitution.",
        "de": "Im Benzol sind die Pi-Elektronen über den Ring verteilt (Mesomerie); diese Stabilität geht nicht leicht verloren, daher addiert Benzol kein Br2 wie ein gewöhnliches Alken, entfärbt Bromwasser nicht und reagiert bevorzugt durch Substitution.",
        "fr": "Dans le benzène, les électrons pi sont répartis sur tout le cycle (résonance) ; cette stabilité se perd difficilement : le benzène n'additionne pas Br2 comme un alcène ordinaire, ne décolore pas l'eau de brome et préfère la substitution.",
        "ru": "В бензоле π-электроны распределены по всему кольцу (резонанс); эту устойчивость нелегко нарушить, поэтому бензол не присоединяет Br2, как обычные алкены, не обесцвечивает бромную воду и вступает преимущественно в реакции замещения.",
        "ar": "في البنزين تتوزع إلكترونات باي على الحلقة كلها (الرنين)؛ ولا تُفقد هذه الاستقرارية بسهولة، لذا لا يضيف البنزين Br2 كالألكين العادي ولا يزيل لون ماء البروم ويفضّل تفاعلات الاستبدال.",
        "zh": "苯中的π电子分布在整个环上（共振），这种稳定性不易被破坏，所以苯不像普通烯烃那样与 Br2 加成，不使溴水褪色，而主要发生取代反应。",
        "ku": "Di benzenê de elektronên pi li seranserê xelekê belav in (rezonans); ev aramî bi hêsanî xera nabe, loma benzen wek alkenên asayî Br2 lê zêde nake, rengê ava bromê nabe û bêtir reaksiyona cihguhertinê dide."
      }
    },
    {
      "id": "u24-f07",
      "fact": {
        "tr": "Alkoller (R-OH) molekülleri arasında hidrojen bağı kurar; kaynama noktaları aynı karbon sayılı eterlerinkinden çok daha yüksektir.",
        "en": "Alcohols (R-OH) form hydrogen bonds between their molecules; their boiling points are much higher than those of ethers with the same number of carbon atoms.",
        "de": "Alkohole (R-OH) bilden Wasserstoffbrücken zwischen ihren Molekülen; ihre Siedepunkte liegen viel höher als die von Ethern mit gleicher Kohlenstoffzahl.",
        "fr": "Les alcools (R-OH) forment des liaisons hydrogène entre leurs molécules ; leurs points d'ébullition sont bien plus élevés que ceux des éthers ayant le même nombre d'atomes de carbone.",
        "ru": "Спирты (R-OH) образуют водородные связи между молекулами; их температуры кипения значительно выше, чем у простых эфиров с тем же числом атомов углерода.",
        "ar": "تكوّن الكحولات (R-OH) روابط هيدروجينية بين جزيئاتها؛ ودرجات غليانها أعلى بكثير من درجات غليان الإيثرات التي لها العدد نفسه من ذرات الكربون.",
        "zh": "醇(R-OH)分子间能形成氢键；其沸点比碳原子数相同的醚高得多。",
        "ku": "Alkol (R-OH) di navbera molekulên xwe de girêdanên hîdrojenê çêdikin; xalên kelandinê yên wan ji yên eterên bi heman hejmara karbonê pir bilindtir in."
      },
      "trap": {
        "tr": "Eterlerin kaynama noktası, aynı karbon sayılı alkollerinkinden daha yüksektir.",
        "en": "Ethers have higher boiling points than alcohols with the same number of carbon atoms.",
        "de": "Ether haben höhere Siedepunkte als Alkohole mit gleicher Kohlenstoffzahl.",
        "fr": "Les éthers ont un point d'ébullition plus élevé que les alcools ayant le même nombre d'atomes de carbone.",
        "ru": "Простые эфиры имеют более высокую температуру кипения, чем спирты с тем же числом атомов углерода.",
        "ar": "للإيثرات درجة غليان أعلى من الكحولات التي لها العدد نفسه من ذرات الكربون.",
        "zh": "醚的沸点高于碳原子数相同的醇。",
        "ku": "Xala kelandinê ya eteran ji ya alkolên bi heman hejmara karbonê bilindtir e."
      },
      "whyTrapIsFalse": {
        "tr": "Eter moleküllerinde oksijene bağlı H atomu yoktur, bu yüzden eterler kendi aralarında hidrojen bağı kuramaz. Hidrojen bağı yapan alkollerin kaynama noktası daha yüksektir (etanol 78 °C, dimetil eter −24 °C).",
        "en": "Ether molecules have no H bonded to oxygen, so ethers cannot form hydrogen bonds with one another. Alcohols, which do form hydrogen bonds, boil higher (ethanol 78 °C, dimethyl ether −24 °C).",
        "de": "Ethermoleküle haben kein an Sauerstoff gebundenes H und können untereinander keine Wasserstoffbrücken bilden. Alkohole, die Wasserstoffbrücken bilden, sieden höher (Ethanol 78 °C, Dimethylether −24 °C).",
        "fr": "Les molécules d'éther n'ont pas de H lié à l'oxygène : elles ne peuvent pas former de liaisons hydrogène entre elles. Les alcools, qui en forment, bouillent plus haut (éthanol 78 °C, éther diméthylique −24 °C).",
        "ru": "В молекулах простых эфиров нет атома H, связанного с кислородом, поэтому эфиры не образуют водородных связей между собой. Спирты, образующие водородные связи, кипят выше (этанол 78 °C, диметиловый эфир −24 °C).",
        "ar": "لا تحتوي جزيئات الإيثر على ذرة H مرتبطة بالأكسجين، لذا لا تكوّن الإيثرات روابط هيدروجينية فيما بينها. أما الكحولات فتكوّنها وتغلي عند درجة أعلى (الإيثانول 78 °C، ثنائي ميثيل الإيثر −24 °C).",
        "zh": "醚分子中没有与氧相连的 H，醚分子之间不能形成氢键。能形成氢键的醇沸点更高(乙醇 78 °C，二甲醚 −24 °C)。",
        "ku": "Di molekulên eterê de H ya bi oksîjenê ve girêdayî tune, loma eter di navbera xwe de girêdana hîdrojenê çênakin. Alkol ku girêdana hîdrojenê çêdikin, li germahiya bilindtir dikelin (etanol 78 °C, dîmetîl eter −24 °C)."
      }
    },
    {
      "id": "u24-f08",
      "fact": {
        "tr": "Primer alkoller bir basamak yükseltgenince aldehit, iki basamak yükseltgenince karboksilik asit oluşturur.",
        "en": "Primary alcohols form aldehydes when oxidized one step, and carboxylic acids when oxidized two steps.",
        "de": "Primäre Alkohole bilden Aldehyde, wenn sie in einem Schritt oxidiert werden, und Carbonsäuren, wenn sie in zwei Schritten oxidiert werden.",
        "fr": "Les alcools primaires forment des aldéhydes lorsqu'ils sont oxydés en une étape et des acides carboxyliques lorsqu'ils sont oxydés en deux étapes.",
        "ru": "Первичные спирты при окислении на одну ступень образуют альдегиды, а при окислении на две ступени — карбоновые кислоты.",
        "ar": "تتأكسد الكحولات الأولية بخطوة واحدة إلى ألدهيدات، وبخطوتين إلى أحماض كربوكسيلية.",
        "zh": "伯醇经一步氧化生成醛，再经一步氧化生成羧酸。",
        "ku": "Alkolên seretayî dema ku yek gav oksîde dibin aldehîd û dema ku du gavan têne oksîdan asîdên karboksîlîk ava dikin."
      },
      "trap": {
        "tr": "Sekonder alkoller yükseltgendiğinde önce aldehite, ardından karboksilik aside dönüşür.",
        "en": "When secondary alcohols are oxidised they turn first into an aldehyde and then into a carboxylic acid.",
        "de": "Sekundäre Alkohole werden bei der Oxidation zuerst zum Aldehyd und dann zur Carbonsäure.",
        "fr": "Les alcools secondaires, en s'oxydant, donnent d'abord un aldéhyde puis un acide carboxylique.",
        "ru": "Вторичные спирты при окислении превращаются сначала в альдегид, а затем в карбоновую кислоту.",
        "ar": "عند أكسدة الكحولات الثانوية تتحول أولًا إلى ألدهيد ثم إلى حمض كربوكسيلي.",
        "zh": "仲醇被氧化时先生成醛，再生成羧酸。",
        "ku": "Dema alkolên duyemîn oksîd dibin, pêşî dibin aldehîd û paşê dibin asîda karboksîlîk."
      },
      "whyTrapIsFalse": {
        "tr": "Aldehit ve ardından karboksilik asit veren primer alkollerdir. Sekonder alkolde OH'lı karbona iki karbon bağlı olduğundan yükseltgenme ketonda durur; keton ılımlı koşullarda daha fazla yükseltgenmez.",
        "en": "It is primary alcohols that give an aldehyde and then a carboxylic acid. In a secondary alcohol the OH-bearing carbon is bonded to two carbons, so oxidation stops at the ketone, which is not oxidised further under mild conditions.",
        "de": "Aldehyd und danach Carbonsäure liefern primäre Alkohole. Beim sekundären Alkohol ist das C mit der OH-Gruppe an zwei C-Atome gebunden, daher endet die Oxidation beim Keton, das unter milden Bedingungen nicht weiter oxidiert wird.",
        "fr": "Ce sont les alcools primaires qui donnent un aldéhyde puis un acide carboxylique. Dans un alcool secondaire, le carbone portant OH est lié à deux carbones : l'oxydation s'arrête à la cétone, qui ne s'oxyde plus en conditions douces.",
        "ru": "Альдегид, а затем карбоновую кислоту дают первичные спирты. Во вторичном спирте атом C с группой OH связан с двумя атомами углерода, поэтому окисление останавливается на кетоне, который в мягких условиях дальше не окисляется.",
        "ar": "الكحولات الأولية هي التي تعطي ألدهيدًا ثم حمضًا كربوكسيليًا. في الكحول الثانوي يرتبط الكربون الحامل لـ OH بذرتي كربون، فتتوقف الأكسدة عند الكيتون الذي لا يتأكسد أكثر في الظروف المعتدلة.",
        "zh": "先生成醛、再生成羧酸的是伯醇。仲醇中连 OH 的碳与两个碳相连，氧化停在酮这一步，温和条件下酮不再被氧化。",
        "ku": "Alkolên seretayî ne ku pêşî aldehîd û paşê asîda karboksîlîk didin. Di alkola duyemîn de karbona bi OH ve bi du karbonan ve girêdayî ye, loma oksîdasyon li ketonê disekine; keton di şertên nerm de bêtir oksîd nabe."
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
        "ar": "تتأكسد الكحولات الثانوية مكوّنة الكيتونات؛ أما الكحولات الثالثية فمقاومة للأكسدة.",
        "zh": "仲醇被氧化生成酮；叔醇难以被氧化。",
        "ku": "Alkolên duyemîn têne oksîd kirin ku ketonan çêbikin; alkolên sêyem li hember oksîdasyonê berxwedêr in."
      },
      "trap": {
        "tr": "Tersiyer alkoller kolayca yükseltgenerek keton verir.",
        "en": "Tertiary alcohols are easily oxidized to give ketones.",
        "de": "Tertiäre Alkohole werden leicht zu Ketonen oxidiert.",
        "fr": "Les alcools tertiaires sont facilement oxydés pour donner des cétones.",
        "ru": "Третичные спирты легко окисляются с образованием кетонов.",
        "ar": "تتأكسد الكحولات الثالثية بسهولة فتعطي الكيتونات.",
        "zh": "叔醇很容易被氧化生成酮。",
        "ku": "Alkolên sêyemîn bi hêsanî têne oksîd kirin da ku ketonan bidin."
      },
      "whyTrapIsFalse": {
        "tr": "Tersiyer alkolde OH'ın bağlı olduğu karbonda H atomu yoktur; yükseltgenme bu karbondaki H'nin uzaklaşmasını gerektirdiği için tersiyer alkoller ılımlı koşullarda yükseltgenmez. Keton, sekonder alkolün yükseltgenmesiyle oluşur.",
        "en": "In a tertiary alcohol the carbon bearing OH has no H atom; oxidation requires removing an H from that carbon, so tertiary alcohols resist oxidation under mild conditions. Ketones come from oxidising secondary alcohols.",
        "de": "Beim tertiären Alkohol trägt das C-Atom mit der OH-Gruppe kein H; die Oxidation erfordert die Abgabe eines H von diesem C, daher werden tertiäre Alkohole unter milden Bedingungen nicht oxidiert. Ketone entstehen aus sekundären Alkoholen.",
        "fr": "Dans un alcool tertiaire, le carbone portant OH n'a pas de H ; l'oxydation exige le départ d'un H de ce carbone, donc les alcools tertiaires ne s'oxydent pas en conditions douces. Les cétones proviennent des alcools secondaires.",
        "ru": "В третичном спирте у атома C с группой OH нет атома H; окисление требует отщепления H от этого атома C, поэтому третичные спирты в мягких условиях не окисляются. Кетоны получаются окислением вторичных спиртов.",
        "ar": "في الكحول الثالثي لا توجد ذرة H على الكربون الحامل لمجموعة OH؛ والأكسدة تتطلب نزع H من هذا الكربون، لذا تقاوم الكحولات الثالثية الأكسدة في الظروف المعتدلة. تنتج الكيتونات من أكسدة الكحولات الثانوية.",
        "zh": "叔醇中连有 OH 的碳原子上没有 H；氧化需要除去该碳上的 H，所以叔醇在温和条件下不被氧化。酮是由仲醇氧化得到的。",
        "ku": "Di alkola sêyemîn de li ser karbona ku OH pê ve girêdayî ye H tune; oksîdasyon rakirina H ya li ser vê karbonê dixwaze, loma alkolên sêyemîn di şertên nerm de oksîd nabin. Keton ji oksîdasyona alkola duyemîn çêdibe."
      }
    },
    {
      "id": "u24-f10",
      "fact": {
        "tr": "Aldehitler (R-CHO) Tollens reaktifi ile gümüş aynası, Fehling çözeltisi ile kırmızı Cu2O çökeleği oluşturur; ketonlar bu tepkimeyi vermez.",
        "en": "Aldehydes (R-CHO) form a silver mirror with Tollens' reagent and a red Cu2O precipitate with Fehling's solution; Ketones do not give this reaction.",
        "de": "Aldehyde (R-CHO) bilden mit Tollens-Reagenz einen silbernen Spiegel und mit Fehling-Lösung einen roten Cu2O-Niederschlag; Ketone lösen diese Reaktion nicht aus.",
        "fr": "Les aldéhydes (R-CHO) forment un miroir d'argent avec le réactif de Tollens et un précipité rouge de Cu2O avec la solution de Fehling ; Les cétones ne donnent pas cette réaction.",
        "ru": "Альдегиды (R-CHO) дают реакцию «серебряного зеркала» с реактивом Толленса и красный осадок Cu2O с реактивом Фелинга; кетоны этих реакций не дают.",
        "ar": "تكوّن الألدهيدات (R-CHO) مرآة فضية مع كاشف تولنز وراسبًا أحمر من Cu2O مع محلول فهلنج؛ أما الكيتونات فلا تعطي هذين التفاعلين.",
        "zh": "醛(R-CHO)能与托伦试剂发生银镜反应，与斐林试剂生成砖红色 Cu2O 沉淀；酮不发生这些反应。",
        "ku": "Aldehîd (R-CHO) bi reagenta Tollens re neynika zîvîn û bi çareseriya Fehling re jî barîna Cu2O ya sor ava dike; Keton vê reaksiyonê nade."
      },
      "trap": {
        "tr": "Aseton (keton) Tollens reaktifiyle gümüş aynası verir.",
        "en": "Acetone (a ketone) gives a silver mirror with Tollens' reagent.",
        "de": "Aceton (Keton) ergibt mit Tollens-Reagenz einen Silberspiegel.",
        "fr": "L'acétone (cétone) donne un miroir argenté avec le réactif Tollens.",
        "ru": "Ацетон (кетон) даёт реакцию «серебряного зеркала» с реактивом Толленса.",
        "ar": "الأسيتون (كيتون) يعطي مرآة فضية مع كاشف تولنز.",
        "zh": "丙酮（一种酮）能与托伦试剂反应生成银镜。",
        "ku": "Aceton (ketone) bi reagenta Tollens neynika zîv dide."
      },
      "whyTrapIsFalse": {
        "tr": "Tollens testini, karbonil karbonunda H atomu bulunan aldehitler verir. Asetonda karbonil karbonu iki CH3 grubuna bağlıdır, kolay yükseltgenemez; bu yüzden Ag+ indirgenmez ve gümüş aynası oluşmaz.",
        "en": "The Tollens test is given by aldehydes, which have an H on the carbonyl carbon. In acetone the carbonyl carbon carries two CH3 groups and is not easily oxidised, so Ag+ is not reduced and no silver mirror forms.",
        "de": "Die Tollens-Probe geben Aldehyde, die am Carbonyl-C ein H tragen. Im Aceton trägt das Carbonyl-C zwei CH3-Gruppen und lässt sich nicht leicht oxidieren; Ag+ wird nicht reduziert, es entsteht kein Silberspiegel.",
        "fr": "Le test de Tollens est donné par les aldéhydes, qui portent un H sur le carbone du carbonyle. Dans l'acétone, ce carbone porte deux groupes CH3 et s'oxyde difficilement : Ag+ n'est pas réduit, pas de miroir d'argent.",
        "ru": "Реакцию с реактивом Толленса дают альдегиды, у которых при карбонильном атоме углерода есть атом H. В ацетоне карбонильный углерод связан с двумя группами CH3 и трудно окисляется, поэтому Ag+ не восстанавливается и серебряное зеркало не образуется.",
        "ar": "الألدهيدات التي تحمل ذرة H على كربون الكربونيل هي التي تعطي اختبار تولنز. أما في الأسيتون فيرتبط كربون الكربونيل بمجموعتي CH3 ولا يتأكسد بسهولة، فلا يُختزل Ag+ ولا تتكون مرآة الفضة.",
        "zh": "能发生银镜反应的是羰基碳上带 H 的醛。丙酮的羰基碳连着两个 CH3，不易被氧化，Ag+ 不被还原，不生成银镜。",
        "ku": "Testa Tollens ji aldehîdan tê ku li ser karbona karbonîlê H heye. Di asetonê de karbona karbonîlê bi du komên CH3 ve girêdayî ye û bi hêsanî oksîd nabe; loma Ag+ kêm nabe û neynika zîv çênabe."
      }
    },
    {
      "id": "u24-f11",
      "fact": {
        "tr": "Karboksilik asitler (R-COOH) alkollerle asit katalizörlüğünde tepkimeye girerek hoş kokulu esterleri (R-COO-R') oluşturur (esterleşme).",
        "en": "Carboxylic acids (R-COOH) react with alcohols under acid catalysis to form fragrant esters (R-COO-R') (esterification).",
        "de": "Carbonsäuren (R-COOH) reagieren mit Alkoholen unter Säurekatalyse zu duftenden Estern (R-COO-R') (Veresterung).",
        "fr": "Les acides carboxyliques (R-COOH) réagissent avec les alcools sous catalyse acide pour former des esters parfumés (R-COO-R') (estérification).",
        "ru": "Карбоновые кислоты (R-COOH) реагируют со спиртами в присутствии кислотного катализатора с образованием сложных эфиров (R-COO-R') с приятным запахом (реакция этерификации).",
        "ar": "تتفاعل الأحماض الكربوكسيلية (R-COOH) مع الكحولات بوجود حمض حفاز مكوّنة إسترات ذات رائحة طيبة (R-COO-R') (الأسترة).",
        "zh": "羧酸(R-COOH)在酸催化下与醇反应，生成有香味的酯(R-COO-R')，即酯化反应。",
        "ku": "Asîdên karboksîlîk (R-COOH) di bin katalîzasyona asîdê de bi alkolan re reaksiyonê dikin û esterên bîhnxweş (R-COO-R') çê dikin (esterîkirin)."
      },
      "trap": {
        "tr": "Esterleşme tepkimesinde baz katalizörlüğünde tuz açığa çıkar.",
        "en": "In esterification, a salt is formed under base catalysis.",
        "de": "Bei der Veresterungsreaktion wird unter basischem Katalysator Salz freigesetzt.",
        "fr": "Dans la réaction d’estérification, le sel est libéré sous un catalyseur basique.",
        "ru": "В реакции этерификации в присутствии основного катализатора образуется соль.",
        "ar": "في تفاعل الأسترة يتكون ملح بوجود قاعدة حفازة.",
        "zh": "酯化反应在碱催化下进行，产物是盐。",
        "ku": "Di reaksiyona esterîfîkasyonê de, xwê di bin katalîzatora bingehîn de tê berdan."
      },
      "whyTrapIsFalse": {
        "tr": "Esterleşme asit (genellikle derişik H2SO4) katalizörlüğünde yürür ve ürünler ester ile sudur. Karboksilik asidin bazla tepkimesinde ise tuz ve su oluşur; bu esterleşme değil nötrleşmedir.",
        "en": "Esterification runs with an acid catalyst (usually concentrated H2SO4) and its products are an ester and water. A carboxylic acid reacting with a base gives a salt and water; that is neutralisation, not esterification.",
        "de": "Die Veresterung verläuft mit Säurekatalyse (meist konzentrierte H2SO4), Produkte sind Ester und Wasser. Reagiert eine Carbonsäure mit einer Base, entstehen Salz und Wasser; das ist Neutralisation, keine Veresterung.",
        "fr": "L'estérification se fait en catalyse acide (souvent H2SO4 concentré) et donne un ester et de l'eau. Un acide carboxylique réagissant avec une base donne un sel et de l'eau : c'est une neutralisation, pas une estérification.",
        "ru": "Этерификация идёт в присутствии кислотного катализатора (обычно концентрированной H2SO4), продукты — сложный эфир и вода. При взаимодействии карбоновой кислоты с основанием образуются соль и вода; это нейтрализация, а не этерификация.",
        "ar": "تجري الأسترة بوجود حمض حفاز (عادة H2SO4 المركّز) ونواتجها إستر وماء. أما تفاعل الحمض الكربوكسيلي مع قاعدة فيعطي ملحًا وماءً، وهذا تعادل وليس أسترة.",
        "zh": "酯化反应在酸(通常为浓 H2SO4)催化下进行，产物是酯和水。羧酸与碱反应生成盐和水，那是中和反应，不是酯化反应。",
        "ku": "Esterkirin bi katalîzora asîdê (bi giranî H2SO4 ya tîr) pêk tê û berhemên wê ester û av in. Reaksiyona asîda karboksîlîk bi bazê re xwê û av dide; ev netralîzasyon e, ne esterkirin."
      }
    },
    {
      "id": "u24-f12",
      "fact": {
        "tr": "Karboksilik asit molekülleri kendi aralarında çift hidrojen bağı (dimer) oluşturduğundan kaynama noktaları oldukça yüksektir.",
        "en": "Since carboxylic acid molecules form double hydrogen bonds (dimers) among themselves, their boiling points are quite high.",
        "de": "Da Carbonsäuremoleküle untereinander doppelte Wasserstoffbrückenbindungen (Dimere) bilden, sind ihre Siedepunkte recht hoch.",
        "fr": "Étant donné que les molécules d'acide carboxylique forment entre elles des doubles liaisons hydrogène (dimères), leurs points d'ébullition sont assez élevés.",
        "ru": "Молекулы карбоновых кислот связываются друг с другом двумя водородными связями (образуют димеры), поэтому температуры кипения кислот довольно высоки.",
        "ar": "تكوّن جزيئات الأحماض الكربوكسيلية فيما بينها روابط هيدروجينية مزدوجة (ثنائيات جزيئية)، لذا تكون درجات غليانها مرتفعة إلى حد كبير.",
        "zh": "羧酸分子之间能形成两个氢键而缔合成二聚体，因此沸点相当高。",
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
      },
      "whyTrapIsFalse": {
        "tr": "Karboksilik asit molekülleri polardır ve çift hidrojen bağıyla dimer oluşturur; yalnızca London kuvvetleri bulunan alkanlardan kaynama noktaları çok daha yüksektir (asetik asit 118 °C, mol kütlesi yakın bütan yaklaşık −1 °C).",
        "en": "Carboxylic acid molecules are polar and form dimers through double hydrogen bonds; they boil far higher than alkanes, which have only London forces (acetic acid 118 °C, butane of similar molar mass about −1 °C).",
        "de": "Carbonsäuremoleküle sind polar und bilden über doppelte Wasserstoffbrücken Dimere; sie sieden viel höher als Alkane mit nur London-Kräften (Essigsäure 118 °C, Butan mit ähnlicher Molmasse etwa −1 °C).",
        "fr": "Les molécules d'acide carboxylique sont polaires et forment des dimères par double liaison hydrogène ; elles bouillent bien plus haut que les alcanes, qui n'ont que des forces de London (acide acétique 118 °C, butane de masse molaire voisine environ −1 °C).",
        "ru": "Молекулы карбоновых кислот полярны и образуют димеры за счёт двух водородных связей; они кипят намного выше алканов, между молекулами которых действуют только лондоновские (дисперсионные) силы (уксусная кислота — 118 °C, бутан с близкой молярной массой — около −1 °C).",
        "ar": "جزيئات الأحماض الكربوكسيلية قطبية وتكوّن ثنائيات عبر رابطتين هيدروجينيتين؛ فتغلي عند درجات أعلى بكثير من الألكانات التي لا تملك سوى قوى لندن (حمض الأسيتيك 118 °C، والبيوتان المقارب له في الكتلة المولية نحو −1 °C).",
        "zh": "羧酸分子有极性，并通过两个氢键形成二聚体，沸点远高于分子间只有色散力的烷烃(乙酸 118 °C，摩尔质量相近的丁烷约 −1 °C)。",
        "ku": "Molekulên asîda karboksîlîk polar in û bi girêdana hîdrojenê ya ducar dîmer çêdikin; ew ji alkanan ku tenê hêzên London hene pir bilindtir dikelin (asîda asetîk 118 °C, bûtana bi girseya molar a nêzîk nêzîkî −1 °C)."
      }
    },
    {
      "id": "u24-f13",
      "fact": {
        "tr": "Aynı karbon sayılı (en az 2 karbonlu) monoalkoller ile eterler birbirinin fonksiyonel grup izomeridir (örn. etanol C2H5OH ve dimetil eter CH3-O-CH3).",
        "en": "Monoalcohols and ethers with the same number of carbon atoms (at least 2) are functional group isomers of each other (e.g. ethanol C2H5OH and dimethyl ether CH3-O-CH3).",
        "de": "Monoalkohole und Ether mit gleicher Kohlenstoffzahl (mindestens 2 C-Atome) sind Funktionsisomere (z. B. Ethanol C2H5OH und Dimethylether CH3-O-CH3).",
        "fr": "Les monoalcools et les éthers ayant le même nombre d'atomes de carbone (au moins 2) sont des isomères de fonction (par ex. l'éthanol C2H5OH et l'éther diméthylique CH3-O-CH3).",
        "ru": "Одноатомные спирты и простые эфиры с одинаковым числом атомов углерода (не менее 2) — межклассовые изомеры (например, этанол C2H5OH и диметиловый эфир CH3-O-CH3).",
        "ar": "الكحولات الأحادية والإيثرات التي لها العدد نفسه من ذرات الكربون (2 على الأقل) متماكبات مجموعة وظيفية (مثل الإيثانول C2H5OH وثنائي ميثيل الإيثر CH3-O-CH3).",
        "zh": "碳原子数相同(至少 2 个碳)的一元醇和醚互为官能团异构体(例如乙醇 C2H5OH 和二甲醚 CH3-O-CH3)。",
        "ku": "Monoalkol û eterên bi heman hejmara karbonê (herî kêm 2 karbon) îzomerên koma fonksiyonel ên hev in (mînak etanol C2H5OH û dîmetîl eter CH3-O-CH3)."
      },
      "trap": {
        "tr": "Etanol ve dimetil eter aynı kimyasal özelliklere sahiptir.",
        "en": "Ethanol and dimethyl ether have the same chemical properties.",
        "de": "Ethanol und Dimethylether haben die gleichen chemischen Eigenschaften.",
        "fr": "L'éthanol et l'éther diméthylique ont les mêmes propriétés chimiques.",
        "ru": "Этанол и диметиловый эфир имеют одинаковые химические свойства.",
        "ar": "للإيثانول وثنائي ميثيل الإيثر الخواص الكيميائية نفسها.",
        "zh": "乙醇和二甲醚具有相同的化学性质。",
        "ku": "Etanol û dimethyl ether xwedî heman taybetmendiyên kîmyewî ne."
      },
      "whyTrapIsFalse": {
        "tr": "İzomerlerde yalnızca molekül formülü aynıdır; fonksiyonel grupları farklı olduğundan kimyasal özellikleri de farklıdır. Örneğin etanol Na metaliyle H2 gazı açığa çıkarır, dimetil eter çıkarmaz.",
        "en": "Isomers share only the molecular formula; their functional groups differ, so their chemical properties differ too. For example, ethanol releases H2 with sodium metal, dimethyl ether does not.",
        "de": "Isomere haben nur dieselbe Summenformel; ihre funktionellen Gruppen sind verschieden, also auch ihre chemischen Eigenschaften. Ethanol setzt z. B. mit Natrium H2 frei, Dimethylether nicht.",
        "fr": "Les isomères n'ont en commun que la formule brute ; leurs groupes fonctionnels diffèrent, donc leurs propriétés chimiques aussi. Par exemple, l'éthanol libère H2 avec le sodium, l'éther diméthylique non.",
        "ru": "У изомеров одинакова только молекулярная формула; функциональные группы разные, значит, различаются и химические свойства. Например, этанол с натрием выделяет H2, а диметиловый эфир — нет.",
        "ar": "لا تشترك المتماكبات إلا في الصيغة الجزيئية؛ وتختلف مجموعاتها الوظيفية فتختلف خواصها الكيميائية. فمثلًا يُطلق الإيثانول غاز H2 مع فلز الصوديوم، ولا يُطلقه ثنائي ميثيل الإيثر.",
        "zh": "同分异构体只是分子式相同；官能团不同，化学性质也不同。例如乙醇与金属钠反应放出 H2，二甲醚则不能。",
        "ku": "Di îzomeran de tenê formula molekulî yek e; komên wan ên fonksiyonel cuda ne, loma taybetiyên wan ên kîmyayî jî cuda ne. Bo nimûne etanol bi metala Na re gaza H2 derdixe, dîmetîl eter dernaxe."
      }
    },
    {
      "id": "u24-f14",
      "fact": {
        "tr": "Aynı karbon sayılı (en az 3 karbonlu) aldehitler ile ketonlar birbirinin fonksiyonel grup izomeridir (örn. propanal ve propanon).",
        "en": "Aldehydes and ketones with the same number of carbon atoms (at least 3) are functional group isomers of each other (e.g. propanal and propanone).",
        "de": "Aldehyde und Ketone mit gleicher Kohlenstoffzahl (mindestens 3 C-Atome) sind Funktionsisomere (z. B. Propanal und Propanon).",
        "fr": "Les aldéhydes et les cétones ayant le même nombre d'atomes de carbone (au moins 3) sont des isomères de fonction (par ex. le propanal et la propanone).",
        "ru": "Альдегиды и кетоны с одинаковым числом атомов углерода (не менее 3) — межклассовые изомеры (например, пропаналь и пропанон).",
        "ar": "الألدهيدات والكيتونات التي لها العدد نفسه من ذرات الكربون (3 على الأقل) متماكبات مجموعة وظيفية (مثل البروبانال والبروبانون).",
        "zh": "碳原子数相同(至少 3 个碳)的醛和酮互为官能团异构体（例如丙醛和丙酮）。",
        "ku": "Aldehîd û ketonên bi heman hejmara karbonê (herî kêm 3 karbon) îzomerên koma fonksiyonel ên hev in (mînak propanal û propanon)."
      },
      "trap": {
        "tr": "Aldehit ve keton izomerliği 2 karbonlu üyeden başlar.",
        "en": "Aldehyde and ketone isomerism starts from the 2-carbon member.",
        "de": "Die Aldehyd- und Ketonisomerie beginnt beim 2-Kohlenstoff-Mitglied.",
        "fr": "L'isomérie des aldéhydes et des cétones commence à partir du membre à 2 carbones.",
        "ru": "Изомерия альдегидов и кетонов начинается с соединений, содержащих 2 атома углерода.",
        "ar": "يبدأ تماكب الألدهيد والكيتون من المركبات ذات ذرتي الكربون.",
        "zh": "醛和酮之间的同分异构从含 2 个碳原子的化合物开始。",
        "ku": "Îzomerîzma aldehîd û ketonê ji endamê 2-karbonê dest pê dike."
      },
      "whyTrapIsFalse": {
        "tr": "Karbonil grubunun zincir ortasında olabilmesi için en az 3 karbon gerekir; en küçük keton propanondur. Bu nedenle aldehit–keton izomerliği 3 karbonlu üyelerden (propanal–propanon) başlar.",
        "en": "A carbonyl group can sit in the middle of a chain only if there are at least 3 carbons; the smallest ketone is propanone. So aldehyde–ketone isomerism starts with the 3-carbon members (propanal–propanone).",
        "de": "Damit die Carbonylgruppe in der Kettenmitte stehen kann, braucht man mindestens 3 C-Atome; das kleinste Keton ist Propanon. Daher beginnt die Aldehyd-Keton-Isomerie bei den C3-Gliedern (Propanal–Propanon).",
        "fr": "Pour que le carbonyle soit au milieu de la chaîne, il faut au moins 3 carbones ; la plus petite cétone est la propanone. L'isomérie aldéhyde–cétone commence donc avec les termes en C3 (propanal–propanone).",
        "ru": "Чтобы карбонильная группа находилась в середине цепи, нужно не менее 3 атомов углерода; простейший кетон — пропанон. Поэтому изомерия альдегид–кетон начинается с членов C3 (пропаналь–пропанон).",
        "ar": "لكي تقع مجموعة الكربونيل في وسط السلسلة يلزم 3 ذرات كربون على الأقل؛ وأصغر كيتون هو البروبانون. لذلك يبدأ تماكب الألدهيد–الكيتون من المركبات ذات 3 ذرات كربون (بروبانال–بروبانون).",
        "zh": "羰基要位于碳链中间至少需要 3 个碳，最简单的酮是丙酮。因此醛–酮异构从三碳成员（丙醛–丙酮）开始。",
        "ku": "Ji bo ku koma karbonîlê di nîvê zincîrê de be herî kêm 3 karbon pêwîst in; ketona herî biçûk propanon e. Ji ber vê yekê îzomeriya aldehîd–keton ji endamên 3 karbonî (propanal–propanon) dest pê dike."
      }
    },
    {
      "id": "u24-f15",
      "fact": {
        "tr": "Aynı karbon sayılı (en az 2 karbonlu) monokarboksilik asitler ile esterler birbirinin fonksiyonel grup izomeridir (örn. asetik asit ve metil format).",
        "en": "Monocarboxylic acids and esters with the same number of carbon atoms (at least 2) are functional group isomers of each other (e.g. acetic acid and methyl formate).",
        "de": "Monocarbonsäuren und Ester mit gleicher Kohlenstoffzahl (mindestens 2 C-Atome) sind Funktionsisomere (z. B. Essigsäure und Methylformiat).",
        "fr": "Les acides monocarboxyliques et les esters ayant le même nombre d'atomes de carbone (au moins 2) sont des isomères de fonction (par ex. l'acide acétique et le formiate de méthyle).",
        "ru": "Одноосновные карбоновые кислоты и сложные эфиры с одинаковым числом атомов углерода (не менее 2) — межклассовые изомеры (например, уксусная кислота и метилформиат).",
        "ar": "الأحماض الكربوكسيلية الأحادية والإسترات التي لها العدد نفسه من ذرات الكربون (2 على الأقل) متماكبات مجموعة وظيفية (مثل حمض الأسيتيك وفورمات الميثيل).",
        "zh": "碳原子数相同(至少 2 个碳)的一元羧酸和酯互为官能团异构体（例如乙酸和甲酸甲酯）。",
        "ku": "Asîdên monokarboksîlîk û esterên bi heman hejmara karbonê (herî kêm 2 karbon) îzomerên koma fonksiyonel ên hev in (mînak asîda asetîk û metîl format)."
      },
      "trap": {
        "tr": "Esterlerin en küçük üyesi 1 karbonludur.",
        "en": "The smallest member of the esters has 1 carbon.",
        "de": "Der kleinste Vertreter der Ester hat 1 Kohlenstoff.",
        "fr": "Le plus petit membre des esters possède 1 carbone.",
        "ru": "Простейший сложный эфир содержит 1 атом углерода.",
        "ar": "أصغر إستر يحتوي على ذرة كربون واحدة.",
        "zh": "最简单的酯只含 1 个碳原子。",
        "ku": "Endamê herî piçûk ê esteran 1 karbon heye."
      },
      "whyTrapIsFalse": {
        "tr": "Ester grubunda (-COO-) asitten gelen karbonil karbonu ile alkolden gelen en az bir karbon birlikte bulunur. Bu yüzden en küçük ester, 2 karbonlu metil metanoattır (H-COO-CH3).",
        "en": "The ester group (-COO-) contains the carbonyl carbon from the acid plus at least one carbon from the alcohol. So the smallest ester is the 2-carbon methyl methanoate (H-COO-CH3).",
        "de": "Die Estergruppe (-COO-) enthält das Carbonyl-C aus der Säure und mindestens ein C aus dem Alkohol. Daher ist der kleinste Ester das C2-Molekül Methylmethanoat (H-COO-CH3).",
        "fr": "Le groupe ester (-COO-) comprend le carbone du carbonyle venant de l'acide et au moins un carbone venant de l'alcool. Le plus petit ester est donc le méthanoate de méthyle, à 2 carbones (H-COO-CH3).",
        "ru": "Сложноэфирная группа (-COO-) включает карбонильный углерод из кислоты и хотя бы один углерод из спирта. Поэтому простейший сложный эфир — метилметаноат с 2 атомами углерода (H-COO-CH3).",
        "ar": "تضم مجموعة الإستر (-COO-) كربون الكربونيل القادم من الحمض وذرة كربون واحدة على الأقل من الكحول. لذا فإن أصغر إستر هو ميثانوات الميثيل ذو ذرتي الكربون (H-COO-CH3).",
        "zh": "酯基(-COO-)中既有来自酸的羰基碳，又至少有一个来自醇的碳。因此最简单的酯是含 2 个碳的甲酸甲酯(H-COO-CH3)。",
        "ku": "Koma esterê (-COO-) karbona karbonîlê ya ji asîdê û herî kêm karbonek ji alkolê dihewîne. Loma estera herî biçûk metîl metanoat a 2 karbonî ye (H-COO-CH3)."
      }
    },
    {
      "id": "u24-f16",
      "fact": {
        "tr": "Alkenlerde ikili bağ karbonlarına bağlı benzer gruplar ikili bağın aynı tarafında ise cis-, zıt taraflarında ise trans- geometrik izomeri adını alır.",
        "en": "In alkenes, if similar groups attached to the double-bond carbons are on the same side of the double bond the geometric isomer is called cis-, and if they are on opposite sides it is called trans-.",
        "de": "Liegen bei Alkenen gleichartige Gruppen an den Doppelbindungs-C-Atomen auf derselben Seite der Doppelbindung, heißt das geometrische Isomer cis-, liegen sie auf gegenüberliegenden Seiten, heißt es trans-.",
        "fr": "Dans les alcènes, si les groupes semblables portés par les carbones de la double liaison sont du même côté de celle-ci, l'isomère géométrique est dit cis- ; s'ils sont de part et d'autre, il est dit trans-.",
        "ru": "В алкенах, если одинаковые группы при атомах углерода двойной связи находятся по одну сторону от неё, геометрический изомер называют цис-, а если по разные стороны — транс-.",
        "ar": "في الألكينات إذا كانت المجموعات المتشابهة المرتبطة بذرتي كربون الرابطة الثنائية في الجهة نفسها سُمّي المتماكب الهندسي سيس، وإذا كانت في جهتين متقابلتين سُمّي ترانس.",
        "zh": "在烯烃中，若两个双键碳原子上的相同基团位于双键同一侧，称为顺式异构体；位于两侧，则称为反式异构体。",
        "ku": "Di alkenan de heke komên wekhev ên bi karbonên girêdana ducarî ve girêdayî li heman aliyê girêdana ducarî bin, ji îzomera geometrîk re cis-, heke li aliyên dijber bin trans- tê gotin."
      },
      "trap": {
        "tr": "İkili bağ karbonlarından birine iki özdeş grup bağlı olsa bile cis-trans izomerisi görülür.",
        "en": "Cis-trans isomerism is observed even if one of the double-bond carbons carries two identical groups.",
        "de": "Cis-trans-Isomerie tritt auch dann auf, wenn eines der Doppelbindungs-C-Atome zwei gleiche Gruppen trägt.",
        "fr": "L'isomérie cis-trans s'observe même si l'un des carbones de la double liaison porte deux groupes identiques.",
        "ru": "Цис-транс-изомерия наблюдается, даже если один из атомов углерода при двойной связи связан с двумя одинаковыми группами.",
        "ar": "يظهر تماكب سيس-ترانس حتى لو ارتبطت مجموعتان متماثلتان بإحدى ذرتي كربون الرابطة الثنائية.",
        "zh": "即使双键的一个碳原子上连有两个相同的基团，也会出现顺反异构。",
        "ku": "Heke bi yek ji karbonên girêdana ducarî ve du komên wekhev girêdayî bin jî, îzomeriya cis-trans tê dîtin."
      },
      "whyTrapIsFalse": {
        "tr": "Bir ikili bağ karbonunda iki özdeş grup varsa iki düzenleme birbiriyle çakışır, yani aynı moleküldür. Cis-trans izomerisi için ikili bağın her iki karbonunda da iki farklı grup bulunmalıdır.",
        "en": "If one double-bond carbon carries two identical groups, the two arrangements superimpose and are the same molecule. Cis-trans isomerism requires two different groups on each of the two double-bond carbons.",
        "de": "Trägt ein Doppelbindungs-C zwei gleiche Gruppen, sind die beiden Anordnungen deckungsgleich, also dasselbe Molekül. Cis-trans-Isomerie erfordert an beiden Doppelbindungs-C-Atomen jeweils zwei verschiedene Gruppen.",
        "fr": "Si un carbone de la double liaison porte deux groupes identiques, les deux arrangements sont superposables : c'est la même molécule. L'isomérie cis-trans exige deux groupes différents sur chacun des deux carbones.",
        "ru": "Если при одном атоме углерода двойной связи два одинаковых заместителя, оба расположения совмещаются, то есть это одна и та же молекула. Для цис-транс-изомерии у каждого атома C двойной связи должны быть два разных заместителя.",
        "ar": "إذا حمل أحد كربوني الرابطة الثنائية مجموعتين متماثلتين، ينطبق الترتيبان أحدهما على الآخر فيكونان الجزيء نفسه. يتطلب تماكب سيس-ترانس وجود مجموعتين مختلفتين على كل من كربوني الرابطة الثنائية.",
        "zh": "若双键的一个碳上连有两个相同基团，两种排列可以重合，是同一种分子。顺反异构要求双键两端的每个碳上都连有两个不同的基团。",
        "ku": "Heke li ser karbonek ji girêdana dualî du komên wekhev hebin, her du rêzkirin li ser hev rûdinin, yanî heman molekul in. Ji bo îzomeriya cis-trans divê li ser her du karbonên girêdana dualî du komên cuda hebin."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u24-c01",
      "conceptA": {
        "tr": "Aldehit",
        "en": "Aldehyde",
        "de": "Aldehyd",
        "fr": "Aldéhyde",
        "ru": "Альдегид",
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
        "ku": "Keton"
      },
      "distinction": {
        "tr": "Aldehitte karbonil grubu zincirin ucundadır (Tollens ile gümüş aynası verir); ketonda karbonil grubu zincirin içinde, iki karbon atomu arasındadır (Tollens ile tepkime vermez).",
        "en": "In an aldehyde the carbonyl group is at the end of the chain (gives a silver mirror with Tollens); in a ketone the carbonyl group is within the chain (does not react with Tollens).",
        "de": "Beim Aldehyd steht die Carbonylgruppe am Kettenende (Silberspiegel mit Tollens); beim Keton steht sie innerhalb der Kette (keine Reaktion mit Tollens).",
        "fr": "Dans un aldéhyde, le groupe carbonyle est en bout de chaîne (miroir d'argent avec Tollens) ; dans une cétone, il est à l'intérieur de la chaîne (pas de réaction avec Tollens).",
        "ru": "Альдегид содержит карбонильную группу на конце цепи (даёт реакцию «серебряного зеркала» с реактивом Толленса); кетон содержит карбонильную группу внутри цепи, между двумя атомами углерода (с реактивом Толленса не реагирует).",
        "ar": "في الألدهيد تقع مجموعة الكربونيل في طرف السلسلة (يعطي مرآة فضية مع كاشف تولنز)؛ وفي الكيتون تقع داخل السلسلة بين ذرتي كربون (لا يتفاعل مع كاشف تولنز).",
        "zh": "醛的羰基位于碳链末端（能与托伦试剂发生银镜反应）；酮的羰基位于碳链中间（不与托伦试剂反应）。",
        "ku": "Di aldehîdê de koma karbonîl li dawiya zincîrê ye (bi Tollens re neynika zîvîn dide); di ketonê de koma karbonîl di nav zincîrê de ye (bi Tollens re reaksiyon nade)."
      }
    },
    {
      "id": "u24-c02",
      "conceptA": {
        "tr": "Alkan",
        "en": "Alkane",
        "de": "Alkan",
        "fr": "Alcane",
        "ru": "Алкан",
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
        "tr": "Alkan doymuştur ve katılma tepkimesi vermez; alken doymamıştır, bromlu suyun rengini giderir ve polimerleşir.",
        "en": "An alkane is saturated and does not undergo addition; an alkene is unsaturated, decolorizes bromine water and polymerizes.",
        "de": "Ein Alkan ist gesättigt und geht keine Addition ein; ein Alken ist ungesättigt, entfärbt Bromwasser und polymerisiert.",
        "fr": "Un alcane est saturé et ne subit pas d'addition ; un alcène est insaturé, décolore l'eau de brome et se polymérise.",
        "ru": "Алкан относится к предельным углеводородам и не вступает в реакции присоединения; алкен относится к непредельным углеводородам, обесцвечивает бромную воду и полимеризуется.",
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
        "tr": "Zincir izomerisinde fonksiyonel grup aynıdır, karbon iskeleti (dallanma) farklıdır (örn. bütan ve 2-metilpropan); fonksiyonel grup izomerisinde molekül formülü aynı, fonksiyonel grup farklıdır (örn. etanol ve dimetil eter).",
        "en": "In chain isomerism the functional group is the same but the carbon skeleton (branching) differs (e.g., butane and 2-methylpropane); in functional group isomerism the molecular formula is the same but the functional groups differ (e.g., ethanol and dimethyl ether).",
        "de": "Bei der Kettenisomerie bleibt die funktionelle Gruppe gleich, aber das Kohlenstoffgerüst (Verzweigung) ist verschieden (z. B. Butan und 2-Methylpropan); Funktionsisomere haben dieselbe Summenformel, aber verschiedene funktionelle Gruppen (z. B. Ethanol und Dimethylether).",
        "fr": "Dans l'isomérie de chaîne, le groupe fonctionnel est le même mais le squelette carboné (ramification) diffère (par ex. butane et 2-méthylpropane) ; les isomères de fonction ont la même formule brute mais des groupes fonctionnels différents (par ex. éthanol et méthoxyméthane).",
        "ru": "Изомерия углеродного скелета означает, что функциональная группа одинакова, а углеродный скелет (разветвление) различен (например, бутан и 2-метилпропан); межклассовая изомерия означает, что молекулярная формула одинакова, а функциональные группы разные (например, этанол и диметиловый эфир).",
        "ar": "في تماكب السلسلة تكون المجموعة الوظيفية نفسها لكن الهيكل الكربوني (التفرع) مختلف (مثل البيوتان و2-ميثيل بروبان)؛ أما في تماكب المجموعة الوظيفية فالصيغة الجزيئية نفسها والمجموعات الوظيفية مختلفة (مثل الإيثانول وثنائي ميثيل الإيثر).",
        "zh": "碳链异构中官能团相同而碳骨架（支链）不同(如丁烷与 2-甲基丙烷)；官能团异构中分子式相同而官能团不同（如乙醇与二甲醚）。",
        "ku": "Di îzomeriya zincîrê de koma fonksiyonel heman e lê îskeleta karbonê (şaxbûn) cuda ye (mînak bûtan û 2-metîlpropan); di îzomeriya koma fonksiyonel de formula molekulî heman e lê komên fonksiyonel cuda ne (mînak etanol û dîmetîl eter)."
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
        "ru": "Алкин содержит тройную связь (CnH2n-2) и легко вступает в реакции присоединения; бензол из-за резонансной стабилизации с трудом присоединяет другие вещества и в основном вступает в реакции замещения.",
        "ar": "الألكاين هيدروكربون يحتوي على رابطة ثلاثية (CnH2n-2) ويدخل بسهولة في تفاعلات الإضافة؛ أما البنزين فلا يميل إلى الإضافة بسبب الثبات الرنيني ويدخل غالبًا في تفاعلات الاستبدال.",
        "zh": "炔烃含碳碳三键(CnH2n-2)，容易发生加成反应；芳香烃（苯）因共振而稳定，不易加成，主要发生取代反应。",
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
        "ku": "Alkola duyemîn"
      },
      "distinction": {
        "tr": "Primer alkolde OH'ın bağlı olduğu karbona en fazla bir karbon atomu bağlıdır (metanolde hiç yoktur) ve aldehit üzerinden karboksilik aside kadar yükseltgenir; sekonder alkolde bu karbona iki karbon atomu bağlıdır ve yalnızca ketona yükseltgenir.",
        "en": "In a primary alcohol the carbon bearing OH is bonded to at most one other carbon (none in methanol) and is oxidised via the aldehyde up to the carboxylic acid; in a secondary alcohol that carbon is bonded to two carbons and is oxidised only to a ketone.",
        "de": "Beim primären Alkohol ist das C mit der OH-Gruppe an höchstens ein weiteres C gebunden (beim Methanol an keines) und wird über den Aldehyd bis zur Carbonsäure oxidiert; beim sekundären Alkohol ist dieses C an zwei C-Atome gebunden und wird nur zum Keton oxidiert.",
        "fr": "Dans un alcool primaire, le carbone portant OH est lié à au plus un autre carbone (aucun dans le méthanol) et s'oxyde, via l'aldéhyde, jusqu'à l'acide carboxylique ; dans un alcool secondaire, ce carbone est lié à deux carbones et s'oxyde seulement en cétone.",
        "ru": "Первичный спирт содержит атом C с группой OH, связанный не более чем с одним атомом углерода (в метаноле — ни с одним), и окисляется через альдегид до карбоновой кислоты; вторичный спирт содержит такой атом C, связанный с двумя атомами углерода, и окисляется только до кетона.",
        "ar": "في الكحول الأولي يرتبط الكربون الحامل لـ OH بذرة كربون واحدة على الأكثر (ولا يرتبط بأي ذرة في الميثانول) ويتأكسد عبر الألدهيد حتى الحمض الكربوكسيلي؛ وفي الكحول الثانوي يرتبط هذا الكربون بذرتي كربون ويتأكسد إلى كيتون فقط.",
        "zh": "伯醇中连 OH 的碳最多连一个其他碳原子（甲醇中没有），可经醛一直氧化到羧酸；仲醇中该碳连两个碳原子，只能被氧化成酮。",
        "ku": "Di alkola seretayî de karbona ku OH pê ve girêdayî ye herî zêde bi karbonek din ve girêdayî ye (di metanolê de qet tune) û bi riya aldehîdê heta asîda karboksîlîk oksîd dibe; di alkola duyemîn de ev karbon bi du karbonan ve girêdayî ye û tenê dibe keton."
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
        "ar": "حمض كربوكسيلي",
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
        "tr": "Karboksilik asit -COOH grubu içerir ve hidrojen bağı yapar; ester, asit ile alkolün kondenzasyonuyla oluşan hoş kokulu bileşiktir (-COOR).",
        "en": "A carboxylic acid contains a -COOH group and forms hydrogen bonds; an ester is a fragrant compound (-COOR) formed by the condensation of an acid and an alcohol.",
        "de": "Carbonsäure enthält eine -COOH-Gruppe und bildet Wasserstoffbrücken; Ester ist eine duftende Verbindung (-COOR), die durch Kondensation von Säure und Alkohol entsteht.",
        "fr": "L'acide carboxylique contient un groupe -COOH et établit des liaisons hydrogène ; L'ester est un composé parfumé (-COOR) formé par la condensation d'un acide et d'un alcool.",
        "ru": "Карбоновая кислота содержит группу -COOH и образует водородные связи; сложный эфир — душистое соединение (-COOR), образующееся при конденсации кислоты и спирта.",
        "ar": "يحتوي الحمض الكربوكسيلي على مجموعة -COOH ويكوّن روابط هيدروجينية؛ والإستر مركب ذو رائحة طيبة (-COOR) يتكون من تكاثف حمض مع كحول.",
        "zh": "羧酸含有羧基(-COOH)，分子间能形成氢键；酯是由酸和醇发生酯化反应生成的有香味的化合物(-COOR)。",
        "ku": "Asîda karboksîlîk koma -COOH dihewîne û girêdanên hîdrojenê çêdike; ester pêkhateyeke bîhnxweş e (-COOR) ku ji kondensasyona asîd û alkolê çêdibe."
      }
    },
    {
      "id": "u24-c07",
      "conceptA": {
        "tr": "Katılma Tepkimesi",
        "en": "Addition Reaction",
        "de": "Additionsreaktion",
        "fr": "Réaction d'addition",
        "ru": "Реакция присоединения",
        "ar": "تفاعل الإضافة",
        "zh": "加成反应",
        "ku": "Reaksiyona lêzêdekirinê"
      },
      "conceptB": {
        "tr": "Ayrılma Tepkimesi",
        "en": "Elimination Reaction",
        "de": "Eliminierungsreaktion",
        "fr": "Réaction d'élimination",
        "ru": "Реакция отщепления",
        "ar": "تفاعل الحذف",
        "zh": "消去反应",
        "ku": "Reaksiyona veqetandinê"
      },
      "distinction": {
        "tr": "Katılma tepkimesinde doymamış bileşiğin pi bağı açılır ve atom ya da gruplar ikili/üçlü bağ karbonlarına bağlanır (örn. CH2=CH2 + H2O → CH3-CH2-OH); ayrılma tepkimesinde komşu iki karbondan küçük bir molekül (H2O, HX) ayrılır ve ikili bağ oluşur (örn. etanolden derişik H2SO4 ile eten eldesi).",
        "en": "In an addition reaction the pi bond of an unsaturated compound opens and atoms or groups attach to the double/triple-bond carbons (e.g. CH2=CH2 + H2O → CH3-CH2-OH); in an elimination reaction a small molecule (H2O, HX) leaves two neighbouring carbons and a double bond forms (e.g. ethene from ethanol with concentrated H2SO4).",
        "de": "Bei der Additionsreaktion öffnet sich die Pi-Bindung einer ungesättigten Verbindung, und Atome oder Gruppen binden an die Doppel-/Dreifachbindungs-C-Atome (z. B. CH2=CH2 + H2O → CH3-CH2-OH); bei der Eliminierungsreaktion wird von zwei benachbarten C-Atomen ein kleines Molekül (H2O, HX) abgespalten, und es entsteht eine Doppelbindung (z. B. Ethen aus Ethanol mit konzentrierter H2SO4).",
        "fr": "Dans une réaction d'addition, la liaison pi d'un composé insaturé s'ouvre et des atomes ou groupes se fixent sur les carbones de la double/triple liaison (ex. CH2=CH2 + H2O → CH3-CH2-OH) ; dans une réaction d'élimination, une petite molécule (H2O, HX) quitte deux carbones voisins et une double liaison se forme (ex. éthène à partir d'éthanol avec H2SO4 concentré).",
        "ru": "Реакция присоединения идёт с разрывом π-связи непредельного соединения: атомы или группы присоединяются к атомам углерода двойной или тройной связи (например, CH2=CH2 + H2O → CH3-CH2-OH); в реакции отщепления от двух соседних атомов углерода отщепляется малая молекула (H2O, HX) и образуется двойная связь (например, получение этена из этанола при действии концентрированной H2SO4).",
        "ar": "في تفاعل الإضافة تنفتح رابطة باي في المركب غير المشبع وترتبط ذرات أو مجموعات بكربونات الرابطة الثنائية/الثلاثية (مثل CH2=CH2 + H2O → CH3-CH2-OH)؛ وفي تفاعل الحذف يُنزع جزيء صغير (H2O أو HX) من ذرتي كربون متجاورتين وتتكون رابطة ثنائية (مثل تحضير الإيثين من الإيثانول بحمض H2SO4 المركّز).",
        "zh": "加成反应中不饱和化合物的π键打开，原子或基团连到双键/三键碳上(如 CH2=CH2 + H2O → CH3-CH2-OH)；消去反应中从相邻两个碳上脱去一个小分子(H2O、HX)，生成双键(如乙醇与浓 H2SO4 共热制乙烯)。",
        "ku": "Di reaksiyona lêzêdekirinê de girêdana pi ya pêkhateya netêr vedibe û atom an kom bi karbonên girêdana dualî/sêalî ve girê dibin (bo nimûne CH2=CH2 + H2O → CH3-CH2-OH); di reaksiyona veqetandinê de ji du karbonên cîran molekulek biçûk (H2O, HX) vediqete û girêdana dualî çêdibe (bo nimûne bidestxistina etenê ji etanolê bi H2SO4 ya tîr)."
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
        "de": "Beim cis-Isomer liegen gleiche Gruppen auf derselben Seite der Doppelbindung, beim trans-Gegenstück auf gegenüberliegenden Seiten; für geometrische Isomerie muss jedes Doppelbindungs-C-Atom zwei verschiedene Gruppen tragen.",
        "fr": "Dans l'isomère cis, les groupes semblables sont du même côté de la double liaison, dans l'isomère trans de part et d'autre ; l'isomérie géométrique exige deux groupes différents sur chaque carbone de la double liaison.",
        "ru": "Цис-изомер имеет одинаковые группы по одну сторону от двойной связи, транс-изомер — по разные стороны; для геометрической изомерии каждый атом углерода при двойной связи должен иметь две разные группы.",
        "ar": "في متماكب سيس تكون المجموعات المتشابهة في الجهة نفسها من الرابطة الثنائية، وفي متماكب ترانس في جهتين متقابلتين؛ ويتطلب التماكب الهندسي وجود مجموعتين مختلفتين على كل ذرة كربون في الرابطة الثنائية.",
        "zh": "顺式异构体中相同基团位于双键同侧；反式异构体中相同基团位于双键两侧。产生顺反异构要求每个双键碳原子上都连有两个不同的基团。",
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
          "ar": "يُقارن عدد ذرات الهيدروجين المرتبطة بكل من ذرتي كربون الرابطة الثنائية",
          "zh": "比较两个双键碳原子上所连氢原子的数目",
          "ku": "Hejmara hîdrojenên li ser her du karbonên girêdana ducarî têne berawirdkirin"
        },
        {
          "tr": "HX'in H atomu hidrojeni çok olan karbona, X atomu hidrojeni az olan karbona bağlanır",
          "en": "The H of HX bonds to the carbon with more hydrogens and X to the carbon with fewer hydrogens",
          "de": "Das H von HX bindet an das C-Atom mit mehr, X an das C-Atom mit weniger Wasserstoffatomen",
          "fr": "Le H de HX se fixe sur le carbone le plus hydrogéné et X sur le carbone le moins hydrogéné",
          "ru": "H из HX присоединяется к атому углерода, у которого больше атомов водорода, а X — к атому, у которого их меньше",
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
          "zh": "命名生成的主要产物(如丙烯 + HBr → 2-溴丙烷)",
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
        "ru": "Номенклатура алканов по ИЮПАК",
        "ar": "تسمية الألكانات وفق نظام IUPAC",
        "zh": "烷烃的系统命名(IUPAC)",
        "ku": "Binavkirina Alkanan li gorî IUPAC"
      },
      "steps": [
        {
          "tr": "En uzun kesintisiz karbon zinciri ana zincir olarak seçilir",
          "en": "The longest uninterrupted carbon chain is chosen as the main chain",
          "de": "Als Hauptkette wird die längste ununterbrochene Kohlenstoffkette gewählt",
          "fr": "La chaîne carbonée ininterrompue la plus longue est choisie comme chaîne principale",
          "ru": "Выбирают в качестве главной цепи самую длинную непрерывную цепь атомов углерода",
          "ar": "تُختار أطول سلسلة كربونية متصلة لتكون السلسلة الرئيسية",
          "zh": "选择最长的不间断碳链作为主链",
          "ku": "Zincîra karbonê ya herî dirêj a bênavber wekî zincîra sereke tê hilbijartin"
        },
        {
          "tr": "Dallanmaya en yakın uçtan başlanarak karbonlar numaralandırılır",
          "en": "Carbons are numbered starting from the end closest to the branch.",
          "de": "Kohlenstoffe werden beginnend mit dem Ende, das dem Zweig am nächsten liegt, nummeriert.",
          "fr": "Les carbones sont numérotés en commençant par l'extrémité la plus proche de la branche.",
          "ru": "Нумеруют атомы углерода, начиная с конца, ближайшего к разветвлению",
          "ar": "تُرقَّم ذرات الكربون بدءًا من الطرف الأقرب إلى التفرع",
          "zh": "从离支链最近的一端开始给主链碳原子编号",
          "ku": "Karbon ji dawiya herî nêzî şaxê dest pê dikin têne jimartin."
        },
        {
          "tr": "Bağlı alkil gruplarının adları ve karbon numaraları yazılır",
          "en": "Names and carbon numbers of bonded alkyl groups are written",
          "de": "Namen und Kohlenstoffzahlen der gebundenen Alkylgruppen werden angegeben",
          "fr": "Les noms et les nombres de carbones des groupes alkyles liés sont écrits",
          "ru": "Записывают названия алкильных заместителей и номера атомов углерода, при которых они находятся",
          "ar": "تُكتب أسماء مجموعات الألكيل المرتبطة وأرقام ذرات الكربون التي ترتبط بها",
          "zh": "写出取代基（烷基）的位次和名称",
          "ku": "Nav û hejmarên karbonê yên komên alkil ên girêdayî têne nivîsandin"
        },
        {
          "tr": "Ana zincirdeki karbon sayısına karşılık gelen alkan adı sona eklenir",
          "en": "The alkane name corresponding to the number of carbons in the main chain is added to the end",
          "de": "Am Ende wird der Alkanname angehängt, der der Anzahl der Kohlenstoffe in der Hauptkette entspricht",
          "fr": "Le nom de l'alcane correspondant au nombre de carbones de la chaîne principale est ajouté à la fin",
          "ru": "В конце добавляют название алкана, соответствующее числу атомов углерода в главной цепи",
          "ar": "يُضاف في النهاية اسم الألكان المطابق لعدد ذرات الكربون في السلسلة الرئيسية",
          "zh": "最后写出与主链碳原子数对应的烷烃名称",
          "ku": "Navê alkanê ku bi hejmara karbonên di zincîra sereke de têkildar e, li dawiyê tê zêdekirin"
        }
      ]
    },
    {
      "id": "u24-s03",
      "title": {
        "tr": "Kalsiyum Karbürden PVC Eldesi",
        "en": "Making PVC from Calcium Carbide",
        "de": "Herstellung von PVC aus Calciumcarbid",
        "fr": "Obtention du PVC à partir du carbure de calcium",
        "ru": "Получение ПВХ из карбида кальция",
        "ar": "تحضير PVC من كربيد الكالسيوم",
        "zh": "由碳化钙制取 PVC",
        "ku": "Bidestxistina PVC ji Karbîda Kalsiyûmê"
      },
      "steps": [
        {
          "tr": "Kalsiyum karbür suyla tepkimeye sokulur: CaC2 + 2H2O → C2H2 + Ca(OH)2",
          "en": "Calcium carbide is reacted with water: CaC2 + 2H2O → C2H2 + Ca(OH)2",
          "de": "Calciumcarbid wird mit Wasser umgesetzt: CaC2 + 2H2O → C2H2 + Ca(OH)2",
          "fr": "On fait réagir le carbure de calcium avec l'eau : CaC2 + 2H2O → C2H2 + Ca(OH)2",
          "ru": "Карбид кальция обрабатывают водой: CaC2 + 2H2O → C2H2 + Ca(OH)2",
          "ar": "يُفاعَل كربيد الكالسيوم مع الماء: CaC2 + 2H2O → C2H2 + Ca(OH)2",
          "zh": "碳化钙与水反应：CaC2 + 2H2O → C2H2 + Ca(OH)2",
          "ku": "Karbîda kalsiyûmê bi avê re tê reaksiyonkirin: CaC2 + 2H2O → C2H2 + Ca(OH)2"
        },
        {
          "tr": "Oluşan asetilene (etin) 1 mol HCl katılır",
          "en": "1 mol of HCl is added to the acetylene (ethyne) formed",
          "de": "An das entstandene Acetylen (Ethin) wird 1 mol HCl addiert",
          "fr": "On additionne 1 mol de HCl sur l'acétylène (éthyne) formé",
          "ru": "К образовавшемуся ацетилену (этину) присоединяют 1 моль HCl",
          "ar": "يُضاف 1 mol من HCl إلى الأسيتيلين (الإيثاين) الناتج",
          "zh": "生成的乙炔与 1 mol HCl 加成",
          "ku": "1 mol HCl li asetîlena (etîn) ku çêbûye tê zêdekirin"
        },
        {
          "tr": "Vinil klorür (kloreten, CH2=CH-Cl) monomeri elde edilir",
          "en": "The monomer vinyl chloride (chloroethene, CH2=CH-Cl) is obtained",
          "de": "Das Monomer Vinylchlorid (Chlorethen, CH2=CH-Cl) wird erhalten",
          "fr": "On obtient le monomère chlorure de vinyle (chloroéthène, CH2=CH-Cl)",
          "ru": "Получают мономер винилхлорид (хлорэтен, CH2=CH-Cl)",
          "ar": "يُحصل على المونومر كلوريد الفينيل (كلورو إيثين، CH2=CH-Cl)",
          "zh": "得到单体氯乙烯(CH2=CH-Cl)",
          "ku": "Monomera vînîl klorîd (kloreten, CH2=CH-Cl) tê bidestxistin"
        },
        {
          "tr": "Kloreten katılma polimerleşmesiyle polivinil klorüre (PVC) dönüştürülür",
          "en": "Chloroethene is converted into polyvinyl chloride (PVC) by addition polymerisation",
          "de": "Chlorethen wird durch Additionspolymerisation zu Polyvinylchlorid (PVC) umgesetzt",
          "fr": "Le chloroéthène est transformé en poly(chlorure de vinyle) (PVC) par polymérisation par addition",
          "ru": "Хлорэтен полимеризацией превращают в поливинилхлорид (ПВХ)",
          "ar": "يتحول كلورو الإيثين إلى بولي كلوريد الفينيل (PVC) بالبلمرة بالإضافة",
          "zh": "氯乙烯经加聚反应生成聚氯乙烯(PVC)",
          "ku": "Kloreten bi polîmerbûna lêzêdekirinê dibe polîvînîl klorîd (PVC)"
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
        "ru": "Ступенчатое окисление первичного спирта (на примере этанола)",
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
        "ru": "Какой продукт, согласно правилу Марковникова, будет основным при присоединении воды (H2O) к газообразному пропену (CH3-CH=CH2) в кислой среде?",
        "ar": "عند إضافة الماء (H2O) إلى غاز البروبين (CH3-CH=CH2) في وسط حمضي، ما الناتج الرئيسي وفق قاعدة ماركوفنيكوف؟",
        "zh": "在酸催化下，丙烯(CH3-CH=CH2)与水(H2O)发生加成反应。根据马氏规则，主要产物是下列哪一项？",
        "ku": "Dema ku av (H2O) li gaza propene (CH3-CH=CH2) di hawîrdora asîdî de tê zêdekirin, li gorî qaîdeya Markovnikov kîjan ji van hilbera sereke ye?"
      },
      "options": [
        {
          "tr": "2-Propanol",
          "en": "2-Propanol",
          "de": "2-Propanol",
          "fr": "2-Propanol",
          "ru": "Пропанол-2",
          "ar": "2-بروبانول",
          "zh": "2-丙醇",
          "ku": "2-Propanol"
        },
        {
          "tr": "1-Propanol",
          "en": "1-Propanol",
          "de": "1-Propanol",
          "fr": "1-Propanol",
          "ru": "Пропанол-1",
          "ar": "1-بروبانول",
          "zh": "1-丙醇",
          "ku": "1-Propanol"
        },
        {
          "tr": "Propanal",
          "en": "Propanal",
          "de": "Propanal",
          "fr": "Propanal",
          "ru": "Пропаналь",
          "ar": "بروبانال",
          "zh": "丙醛",
          "ku": "Propanal"
        },
        {
          "tr": "Propanon",
          "en": "Propanone",
          "de": "Propanon",
          "fr": "Propanone",
          "ru": "Пропанон",
          "ar": "بروبانون",
          "zh": "丙酮",
          "ku": "Propanon"
        },
        {
          "tr": "Propan",
          "en": "Propane",
          "de": "Propan",
          "fr": "Propane",
          "ru": "Пропан",
          "ar": "بروبان",
          "zh": "丙烷",
          "ku": "Propan"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Markovnikov kuralına göre suyun H atomu, ikili bağ karbonlarından hidrojeni çok olan =CH2 karbonuna bağlanır; OH grubu ise ortadaki -CH= karbonuna bağlanır ve ana ürün 2-propanol (CH3-CH(OH)-CH3) olur. 1-propanol, OH'ın uç karbona bağlandığı, kurala aykırı üründür; propanal ve propanon ise alkollerin yükseltgenme ürünleridir, su katılmasıyla oluşmaz.",
        "en": "According to Markovnikov's rule, the H atom of water bonds to the =CH2 carbon, the double-bond carbon that has more hydrogens; the OH group bonds to the middle -CH= carbon, so the main product is 2-propanol (CH3-CH(OH)-CH3). 1-Propanol would be the product with OH on the terminal carbon, contrary to the rule; propanal and propanone are oxidation products of alcohols and are not formed by adding water.",
        "de": "Nach der Regel von Markownikow bindet das H-Atom des Wassers an das =CH2-Kohlenstoffatom, das von den beiden Doppelbindungs-C-Atomen mehr Wasserstoff trägt; die OH-Gruppe bindet an das mittlere -CH=-Kohlenstoffatom, das Hauptprodukt ist also 2-Propanol (CH3-CH(OH)-CH3). 1-Propanol wäre das Produkt mit OH am endständigen C-Atom, entgegen der Regel; Propanal und Propanon sind Oxidationsprodukte von Alkoholen und entstehen nicht durch Wasseraddition.",
        "fr": "Selon la règle de Markovnikov, l'atome H de l'eau se fixe sur le carbone =CH2, celui des deux carbones de la double liaison qui porte le plus d'hydrogènes ; le groupe OH se fixe sur le carbone central -CH=, et le produit principal est le 2-propanol (CH3-CH(OH)-CH3). Le 1-propanol serait le produit avec OH sur le carbone terminal, contraire à la règle ; le propanal et la propanone sont des produits d'oxydation des alcools et ne se forment pas par addition d'eau.",
        "ru": "По правилу Марковникова атом H воды присоединяется к атому углерода =CH2 — тому из атомов двойной связи, у которого больше атомов водорода; группа OH присоединяется к среднему атому -CH=, и основным продуктом становится пропанол-2 (CH3-CH(OH)-CH3). Пропанол-1 был бы продуктом с группой OH при концевом атоме углерода, вопреки правилу; пропаналь и пропанон — продукты окисления спиртов, при присоединении воды они не образуются.",
        "ar": "وفقًا لقاعدة ماركوفنيكوف ترتبط ذرة H من الماء بذرة الكربون =CH2، وهي ذرة كربون الرابطة الثنائية التي تحمل هيدروجينًا أكثر؛ وترتبط مجموعة OH بذرة الكربون الوسطى -CH=، فيكون الناتج الرئيسي 2-بروبانول (CH3-CH(OH)-CH3). أما 1-بروبانول فهو الناتج الذي ترتبط فيه OH بالكربون الطرفي خلافًا للقاعدة؛ والبروبانال والبروبانون ناتجا أكسدة الكحولات ولا يتكوّنان بإضافة الماء.",
        "zh": "根据马氏规则，水中的 H 原子加到双键碳中含氢较多的 =CH2 碳上，OH 加到中间的 -CH= 碳上，主要产物是 2-丙醇(CH3-CH(OH)-CH3)。1-丙醇是 OH 连在端位碳上的产物，与该规则相反；丙醛和丙酮是醇的氧化产物，不能由加水生成。",
        "ku": "Li gorî qaîdeya Markovnikov atoma H ya avê bi karbona =CH2 ve tê girêdan, ango bi wê karbona girêdana ducarî ya ku hîdrojena wê zêdetir e; koma OH jî bi karbona navîn -CH= ve tê girêdan û berhema sereke 2-propanol (CH3-CH(OH)-CH3) e. 1-propanol berhema ku tê de OH bi karbona dawî ve girêdayî ye û li dijî qaîdeyê ye; propanal û propanon jî berhemên oksîdasyona alkolan in û bi lêzêdekirina avê çênabin."
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
        "ar": "أيّ فئات المركبات العضوية الآتية تتفاعل مع كاشف تولنز مكوّنة مرآة فضية؟",
        "zh": "下列哪一类有机化合物能与托伦试剂发生银镜反应？",
        "ku": "Kîjan ji çînên jêrîn ên pêkhateyên organîk bi reagenta Tollens re reaksiyonê dike û neynika zîvîn çêdike?"
      },
      "options": [
        {
          "tr": "Aldehitler",
          "en": "Aldehydes",
          "de": "Aldehyde",
          "fr": "Aldéhydes",
          "ru": "Альдегиды",
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
        "tr": "Aldehitlerde karbonil karbonuna bir H atomu bağlıdır; bu sayede aldehitler kolayca karboksilik aside yükseltgenir ve Tollens reaktifindeki Ag+ iyonlarını metalik gümüşe (gümüş aynası) indirger. Ketonlarda karbonil karbonuna bağlı H atomu bulunmadığından bu tepkime gerçekleşmez; ketonlar Tollens testini vermez.",
        "en": "In aldehydes an H atom is bonded to the carbonyl carbon; because of this, aldehydes are easily oxidized to carboxylic acids and reduce the Ag+ ions in Tollens' reagent to metallic silver (silver mirror). Ketones have no H atom on the carbonyl carbon, so this reaction does not occur; ketones do not give the Tollens test.",
        "de": "Bei Aldehyden ist ein H-Atom an das Carbonyl-C-Atom gebunden; deshalb werden Aldehyde leicht zu Carbonsäuren oxidiert und reduzieren die Ag+-Ionen im Tollens-Reagenz zu metallischem Silber (Silberspiegel). Ketone tragen kein H-Atom am Carbonyl-C-Atom, daher läuft diese Reaktion nicht ab; Ketone zeigen die Tollens-Probe nicht.",
        "fr": "Dans les aldéhydes, un atome H est lié au carbone du groupe carbonyle ; c'est pourquoi les aldéhydes s'oxydent facilement en acides carboxyliques et réduisent les ions Ag+ du réactif de Tollens en argent métallique (miroir d'argent). Les cétones n'ont pas d'atome H sur le carbone du carbonyle, donc cette réaction n'a pas lieu ; les cétones ne donnent pas le test de Tollens.",
        "ru": "В альдегидах с карбонильным атомом углерода связан атом H; поэтому альдегиды легко окисляются до карбоновых кислот и восстанавливают ионы Ag+ реактива Толленса до металлического серебра (серебряное зеркало). У кетонов при карбонильном атоме углерода нет атома H, поэтому эта реакция не идёт; кетоны не дают реакции с реактивом Толленса.",
        "ar": "في الألدهيدات ترتبط ذرة H بكربون مجموعة الكربونيل؛ ولذلك تتأكسد الألدهيدات بسهولة إلى أحماض كربوكسيلية وتختزل أيونات Ag+ في كاشف تولنز إلى فضة فلزية (مرآة فضية). أما الكيتونات فلا توجد ذرة H على كربون الكربونيل فيها، فلا يحدث هذا التفاعل؛ والكيتونات لا تعطي اختبار تولنز.",
        "zh": "醛的羰基碳上连有一个 H 原子，因此醛很容易被氧化为羧酸，并将托伦试剂中的 Ag+ 还原为金属银（银镜）。酮的羰基碳上没有 H 原子，所以不发生这一反应；酮不发生银镜反应。",
        "ku": "Di aldehîdan de atomeke H bi karbona karbonîlê ve girêdayî ye; ji ber vê yekê aldehîd bi hêsanî dibin asîda karboksîlîk û îyonên Ag+ yên di reagenta Tollensê de dadixin zîvê metalîk (neynika zîvîn). Di ketonan de li ser karbona karbonîlê atoma H tune ye, loma ev reaksiyon pêk nayê; keton testa Tollensê nadin."
      }
    },
    {
      "id": "u24-twin03",
      "stem": {
        "tr": "Kapalı yapı formülü CH3-CH(CH3)-CH2-CH(CH2-CH3)-CH3 olan alkanın IUPAC adı aşağıdakilerden hangisidir?",
        "en": "What is the IUPAC name of the alkane whose condensed structural formula is CH3-CH(CH3)-CH2-CH(CH2-CH3)-CH3?",
        "de": "Wie lautet der IUPAC-Name des Alkans mit der Halbstrukturformel CH3-CH(CH3)-CH2-CH(CH2-CH3)-CH3?",
        "fr": "Quel est le nom IUPAC de l'alcane de formule semi-développée CH3-CH(CH3)-CH2-CH(CH2-CH3)-CH3 ?",
        "ru": "Как называется по номенклатуре ИЮПАК алкан с сокращённой структурной формулой CH3-CH(CH3)-CH2-CH(CH2-CH3)-CH3?",
        "ar": "ما اسم IUPAC للألكان الذي صيغته البنائية المختصرة CH3-CH(CH3)-CH2-CH(CH2-CH3)-CH3؟",
        "zh": "结构简式为 CH3-CH(CH3)-CH2-CH(CH2-CH3)-CH3 的烷烃的 IUPAC 名称是下列哪一个？",
        "ku": "Navê IUPAC yê alkana ku formula wê ya avahiyî ya kurt CH3-CH(CH3)-CH2-CH(CH2-CH3)-CH3 e kîjan e?"
      },
      "options": [
        {
          "tr": "2,4-dimetilpentan",
          "en": "2,4-dimethylpentane",
          "de": "2,4-Dimethylpentan",
          "fr": "2,4-diméthylpentane",
          "ru": "2,4-диметилпентан",
          "ar": "2,4-ثنائي ميثيل بنتان",
          "zh": "2,4-二甲基戊烷",
          "ku": "2,4-dîmetîlpentan"
        },
        {
          "tr": "3,5-dimetilheksan",
          "en": "3,5-dimethylhexane",
          "de": "3,5-Dimethylhexan",
          "fr": "3,5-diméthylhexane",
          "ru": "3,5-диметилгексан",
          "ar": "3,5-ثنائي ميثيل هكسان",
          "zh": "3,5-二甲基己烷",
          "ku": "3,5-dîmetîlheksan"
        },
        {
          "tr": "4-etil-2-metilpentan",
          "en": "4-ethyl-2-methylpentane",
          "de": "4-Ethyl-2-methylpentan",
          "fr": "4-éthyl-2-méthylpentane",
          "ru": "4-этил-2-метилпентан",
          "ar": "4-إيثيل-2-ميثيل بنتان",
          "zh": "4-乙基-2-甲基戊烷",
          "ku": "4-etîl-2-metîlpentan"
        },
        {
          "tr": "2,4-dimetilheksan",
          "en": "2,4-dimethylhexane",
          "de": "2,4-Dimethylhexan",
          "fr": "2,4-diméthylhexane",
          "ru": "2,4-диметилгексан",
          "ar": "2,4-ثنائي ميثيل هكسان",
          "zh": "2,4-二甲基己烷",
          "ku": "2,4-dîmetîlheksan"
        },
        {
          "tr": "2-etil-4-metilpentan",
          "en": "2-ethyl-4-methylpentane",
          "de": "2-Ethyl-4-methylpentan",
          "fr": "2-éthyl-4-méthylpentane",
          "ru": "2-этил-4-метилпентан",
          "ar": "2-إيثيل-4-ميثيل بنتان",
          "zh": "2-乙基-4-甲基戊烷",
          "ku": "2-etîl-4-metîlpentan"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "En uzun kesintisiz karbon zinciri, etil grubunun iki karbonunu da içine alan 6 karbonlu zincirdir; bu yüzden ana ad heksandır ve etil ayrı bir dal olarak yazılmaz. Zincir dallanmaya en yakın uçtan numaralanınca metil grupları 2. ve 4. karbonlara düşer (öbür uçtan 3 ve 5 olurdu): 2,4-dimetilheksan. Pentan içeren adlar en uzun zinciri seçmeme hatasından, 3,5-dimetilheksan ise yanlış uçtan numaralamadan doğar.",
        "en": "The longest continuous carbon chain is the 6-carbon chain that includes both carbons of the ethyl group, so the parent name is hexane and ethyl is not written as a branch. Numbering from the end nearest a branch puts the methyl groups on C2 and C4 (from the other end they would be 3 and 5): 2,4-dimethylhexane. Names ending in pentane come from not choosing the longest chain; 3,5-dimethylhexane comes from numbering from the wrong end.",
        "de": "Die längste durchgehende Kohlenstoffkette ist die C6-Kette, die beide C-Atome der Ethylgruppe einschließt; der Stammname ist also Hexan, und Ethyl wird nicht als Seitenkette geschrieben. Nummeriert man vom Ende, das einer Verzweigung am nächsten liegt, stehen die Methylgruppen an C2 und C4 (vom anderen Ende 3 und 5): 2,4-Dimethylhexan. Namen mit Pentan entstehen, wenn nicht die längste Kette gewählt wird; 3,5-Dimethylhexan entsteht durch Nummerieren vom falschen Ende.",
        "fr": "La plus longue chaîne carbonée continue est la chaîne à 6 carbones qui inclut les deux carbones du groupe éthyle : le nom parent est donc hexane et l'éthyle n'est pas écrit comme ramification. En numérotant depuis l'extrémité la plus proche d'une ramification, les méthyles sont en C2 et C4 (depuis l'autre extrémité, 3 et 5) : 2,4-diméthylhexane. Les noms en pentane viennent du mauvais choix de chaîne principale ; 3,5-diméthylhexane vient d'une numérotation depuis la mauvaise extrémité.",
        "ru": "Самая длинная непрерывная углеродная цепь — шестиуглеродная, включающая оба атома углерода этильной группы; поэтому родоначальное название — гексан, и этил не указывается как заместитель. При нумерации с конца, ближайшего к разветвлению, метильные группы оказываются при C2 и C4 (с другого конца было бы 3 и 5): 2,4-диметилгексан. Названия с пентаном возникают, если выбрана не самая длинная цепь; 3,5-диметилгексан — результат нумерации не с того конца.",
        "ar": "أطول سلسلة كربونية متصلة هي سلسلة من 6 ذرات كربون تضم ذرتي كربون مجموعة الإيثيل، لذا فالاسم الأصلي هكسان ولا يُكتب الإيثيل فرعًا. وعند الترقيم من الطرف الأقرب إلى التفرع تقع مجموعتا الميثيل على C2 وC4 (ومن الطرف الآخر 3 و5): 2,4-ثنائي ميثيل هكسان. الأسماء المنتهية بالبنتان تنتج عن عدم اختيار أطول سلسلة، و3,5-ثنائي ميثيل هكسان ينتج عن الترقيم من الطرف الخطأ.",
        "zh": "最长碳链是包含乙基两个碳在内的六碳链，所以母体名为己烷，乙基不作为取代基写出。从离支链最近的一端编号，两个甲基位于 2 号和 4 号碳(从另一端编号则为 3 和 5)：2,4-二甲基己烷。以戊烷结尾的名称源于没有选出最长碳链；3,5-二甲基己烷源于从错误的一端编号。",
        "ku": "Zincîra karbonê ya herî dirêj a bênavber zincîra 6 karbonî ye ku her du karbonên koma etîl dihewîne; loma navê bingehîn heksan e û etîl wek şax nayê nivîsîn. Dema zincîr ji aliyê herî nêzîkî şaxê ve tê hejmartin, komên metîl dikevin ser C2 û C4 (ji aliyê din 3 û 5 dibûn): 2,4-dîmetîlheksan. Navên bi pentan ji hilnebijartina zincîra herî dirêj, 3,5-dîmetîlheksan jî ji hejmartina ji aliyê şaş çêdibin."
      }
    },
    {
      "id": "u24-twin04",
      "stem": {
        "tr": "Bir alkinin 0,2 molü tamamen yakıldığında 35,2 g CO2 oluşuyor. Buna göre bu yanma için kaç mol O2 harcanmıştır? (C: 12, O: 16)",
        "en": "When 0.2 mol of an alkyne is burned completely, 35.2 g of CO2 is formed. How many moles of O2 are consumed in this combustion? (C: 12, O: 16)",
        "de": "Bei der vollständigen Verbrennung von 0,2 mol eines Alkins entstehen 35,2 g CO2. Wie viel mol O2 werden bei dieser Verbrennung verbraucht? (C: 12, O: 16)",
        "fr": "La combustion complète de 0,2 mol d'un alcyne produit 35,2 g de CO2. Combien de moles de O2 sont consommées lors de cette combustion ? (C : 12, O : 16)",
        "ru": "При полном сгорании 0,2 моль алкина образуется 35,2 г CO2. Сколько моль O2 израсходовано при этом сгорании? (C: 12, O: 16)",
        "ar": "عند الاحتراق التام لـ 0.2 mol من ألكاين يتكوّن 35.2 g من CO2. كم مولًا من O2 استُهلك في هذا الاحتراق؟ (C: 12، O: 16)",
        "zh": "0.2 mol 某炔烃完全燃烧生成 35.2 g CO2。此燃烧消耗了多少摩尔 O2？(C = 12，O = 16)",
        "ku": "Dema 0,2 mol ji alkînekê bi temamî dişewite, 35,2 g CO2 çêdibe. Di vê şewitandinê de çend mol O2 tê xerckirin? (C: 12, O: 16)"
      },
      "options": [
        {
          "tr": "0,8",
          "en": "0.8",
          "de": "0,8",
          "fr": "0,8",
          "ru": "0,8",
          "ar": "0.8",
          "zh": "0.8",
          "ku": "0,8"
        },
        {
          "tr": "1,1",
          "en": "1.1",
          "de": "1,1",
          "fr": "1,1",
          "ru": "1,1",
          "ar": "1.1",
          "zh": "1.1",
          "ku": "1,1"
        },
        {
          "tr": "1,2",
          "en": "1.2",
          "de": "1,2",
          "fr": "1,2",
          "ru": "1,2",
          "ar": "1.2",
          "zh": "1.2",
          "ku": "1,2"
        },
        {
          "tr": "1,3",
          "en": "1.3",
          "de": "1,3",
          "fr": "1,3",
          "ru": "1,3",
          "ar": "1.3",
          "zh": "1.3",
          "ku": "1,3"
        },
        {
          "tr": "2,2",
          "en": "2.2",
          "de": "2,2",
          "fr": "2,2",
          "ru": "2,2",
          "ar": "2.2",
          "zh": "2.2",
          "ku": "2,2"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "n(CO2) = 35,2 / 44 = 0,8 mol. 0,2 mol alkinden 0,8 mol CO2 çıktığına göre molekülde 4 C vardır; alkinlerin genel formülü CnH2n-2 olduğundan bileşik C4H6'dır. C4H6 + 11/2 O2 → 4CO2 + 3H2O denklemine göre 0,2 mol C4H6 için 0,2 × 5,5 = 1,1 mol O2 gerekir. Bileşiği alken (C4H8) sanmak 1,2; alkan (C4H10) sanmak 1,3 sonucunu verir; O atomu molünü O2'ye çevirmeyi unutmak 2,2; suyun oksijenini hesaba katmamak 0,8 verir.",
        "en": "n(CO2) = 35.2 / 44 = 0.8 mol. Since 0.2 mol of alkyne gives 0.8 mol CO2, the molecule has 4 C; the general formula of alkynes is CnH2n-2, so the compound is C4H6. From C4H6 + 11/2 O2 → 4CO2 + 3H2O, 0.2 mol C4H6 needs 0.2 × 5.5 = 1.1 mol O2. Taking it as an alkene (C4H8) gives 1.2, as an alkane (C4H10) gives 1.3; forgetting to convert moles of O atoms to O2 gives 2.2; ignoring the oxygen in water gives 0.8.",
        "de": "n(CO2) = 35,2 / 44 = 0,8 mol. Da 0,2 mol Alkin 0,8 mol CO2 liefern, enthält das Molekül 4 C; die allgemeine Formel der Alkine ist CnH2n-2, also liegt C4H6 vor. Nach C4H6 + 11/2 O2 → 4CO2 + 3H2O braucht man für 0,2 mol C4H6 0,2 × 5,5 = 1,1 mol O2. Hält man die Verbindung für ein Alken (C4H8), erhält man 1,2, für ein Alkan (C4H10) 1,3; vergisst man, mol O-Atome in O2 umzurechnen, 2,2; ohne den Sauerstoff im Wasser 0,8.",
        "fr": "n(CO2) = 35,2 / 44 = 0,8 mol. Puisque 0,2 mol d'alcyne donne 0,8 mol de CO2, la molécule compte 4 C ; la formule générale des alcynes étant CnH2n-2, le composé est C4H6. D'après C4H6 + 11/2 O2 → 4CO2 + 3H2O, 0,2 mol de C4H6 demande 0,2 × 5,5 = 1,1 mol de O2. Le prendre pour un alcène (C4H8) donne 1,2, pour un alcane (C4H10) 1,3 ; oublier de convertir les moles d'atomes O en O2 donne 2,2 ; négliger l'oxygène de l'eau donne 0,8.",
        "ru": "n(CO2) = 35,2 / 44 = 0,8 моль. Раз из 0,2 моль алкина получается 0,8 моль CO2, в молекуле 4 атома C; общая формула алкинов CnH2n-2, значит, это C4H6. По уравнению C4H6 + 11/2 O2 → 4CO2 + 3H2O на 0,2 моль C4H6 нужно 0,2 × 5,5 = 1,1 моль O2. Если принять вещество за алкен (C4H8), получится 1,2, за алкан (C4H10) — 1,3; если забыть перевести моль атомов O в O2 — 2,2; если не учесть кислород воды — 0,8.",
        "ar": "n(CO2) = 35.2 / 44 = 0.8 mol. وبما أن 0.2 mol من الألكاين تعطي 0.8 mol من CO2 ففي الجزيء 4 ذرات C؛ والصيغة العامة للألكاينات CnH2n-2، إذن المركب C4H6. ووفق C4H6 + 11/2 O2 → 4CO2 + 3H2O يلزم لـ 0.2 mol من C4H6 مقدار 0.2 × 5.5 = 1.1 mol من O2. اعتباره ألكينًا (C4H8) يعطي 1.2، واعتباره ألكانًا (C4H10) يعطي 1.3؛ ونسيان تحويل مولات ذرات O إلى O2 يعطي 2.2؛ وإهمال أكسجين الماء يعطي 0.8.",
        "zh": "n(CO2) = 35.2 / 44 = 0.8 mol。0.2 mol 炔烃生成 0.8 mol CO2，说明分子中有 4 个 C；炔烃通式为 CnH2n-2，故该化合物为 C4H6。由 C4H6 + 11/2 O2 → 4CO2 + 3H2O，0.2 mol C4H6 需要 0.2 × 5.5 = 1.1 mol O2。误当成烯烃(C4H8)得 1.2，误当成烷烃(C4H10)得 1.3；忘记把 O 原子的物质的量换算成 O2 得 2.2；忽略水中的氧得 0.8。",
        "ku": "n(CO2) = 35,2 / 44 = 0,8 mol. Ji ber ku 0,2 mol alkîn 0,8 mol CO2 dide, di molekulê de 4 C hene; formula giştî ya alkînan CnH2n-2 e, loma pêkhate C4H6 e. Li gorî C4H6 + 11/2 O2 → 4CO2 + 3H2O, ji bo 0,2 mol C4H6 0,2 × 5,5 = 1,1 mol O2 pêwîst e. Wek alken (C4H8) hesibandin 1,2, wek alkan (C4H10) hesibandin 1,3 dide; jibîrkirina veguherandina mol atomên O bo O2 2,2 dide; nehesibandina oksîjena avê 0,8 dide."
      }
    },
    {
      "id": "u24-twin05",
      "stem": {
        "tr": "Etiketleri düşmüş X, Y ve Z kaplarında propan, propen ve propin gazları bulunmaktadır (her kapta farklı bir gaz). Gazlar bromlu sudan geçirildiğinde X ve Y suyun rengini gideriyor, Z gidermiyor; amonyaklı AgNO3 çözeltisinden geçirildiğinde ise yalnızca Y beyaz çökelek oluşturuyor. Buna göre X, Y ve Z gazları sırasıyla aşağıdakilerden hangisidir?",
        "en": "Containers X, Y and Z, whose labels have fallen off, hold propane, propene and propyne (a different gas in each). When the gases are passed through bromine water, X and Y decolourise it and Z does not; when passed through ammoniacal AgNO3 solution, only Y forms a white precipitate. What are X, Y and Z, respectively?",
        "de": "Die Gefäße X, Y und Z, deren Etiketten abgefallen sind, enthalten Propan, Propen und Propin (in jedem ein anderes Gas). Leitet man die Gase durch Bromwasser, entfärben X und Y es, Z nicht; leitet man sie durch ammoniakalische AgNO3-Lösung, bildet nur Y einen weißen Niederschlag. Welche Gase sind X, Y und Z (in dieser Reihenfolge)?",
        "fr": "Les récipients X, Y et Z, dont les étiquettes sont tombées, contiennent du propane, du propène et du propyne (un gaz différent dans chacun). Lorsqu'on fait passer les gaz dans l'eau de brome, X et Y la décolorent, Z non ; dans une solution ammoniacale de AgNO3, seul Y forme un précipité blanc. Quels sont, dans l'ordre, X, Y et Z ?",
        "ru": "В сосудах X, Y и Z с отклеившимися этикетками находятся пропан, пропен и пропин (в каждом свой газ). При пропускании газов через бромную воду X и Y её обесцвечивают, а Z — нет; при пропускании через аммиачный раствор AgNO3 белый осадок образует только Y. Какие газы находятся в X, Y и Z соответственно?",
        "ar": "تحتوي الأوعية X وY وZ التي سقطت ملصقاتها على غازات البروبان والبروبين والبروباين (غاز مختلف في كل وعاء). عند إمرار الغازات في ماء البروم يزيل X وY لونه ولا يزيله Z؛ وعند إمرارها في محلول AgNO3 النشادري يكوّن Y وحده راسبًا أبيض. ما الغازات X وY وZ على الترتيب؟",
        "zh": "标签脱落的容器 X、Y、Z 中分别装有丙烷、丙烯和丙炔（各不相同）。将气体通入溴水时，X 和 Y 使溴水褪色，Z 不能；通入银氨溶液(氨性 AgNO3 溶液)时，只有 Y 生成白色沉淀。X、Y、Z 依次是什么？",
        "ku": "Di firaxên X, Y û Z de ku etîketên wan ketine, gazên propan, propen û propîn hene (di her yekê de gazek cuda). Dema gaz di ava bromê re têne derbaskirin X û Y rengê wê dibin, Z nabe; dema di çareseriya AgNO3 ya amonyakî re têne derbaskirin tenê Y çîpeke spî çêdike. Li gorî vê, X, Y û Z bi rêzê kîjan in?"
      },
      "options": [
        {
          "tr": "Propin, propen, propan",
          "en": "Propyne, propene, propane",
          "de": "Propin, Propen, Propan",
          "fr": "Propyne, propène, propane",
          "ru": "Пропин, пропен, пропан",
          "ar": "بروباين، بروبين، بروبان",
          "zh": "丙炔、丙烯、丙烷",
          "ku": "Propîn, propen, propan"
        },
        {
          "tr": "Propan, propin, propen",
          "en": "Propane, propyne, propene",
          "de": "Propan, Propin, Propen",
          "fr": "Propane, propyne, propène",
          "ru": "Пропан, пропин, пропен",
          "ar": "بروبان، بروباين، بروبين",
          "zh": "丙烷、丙炔、丙烯",
          "ku": "Propan, propîn, propen"
        },
        {
          "tr": "Propen, propan, propin",
          "en": "Propene, propane, propyne",
          "de": "Propen, Propan, Propin",
          "fr": "Propène, propane, propyne",
          "ru": "Пропен, пропан, пропин",
          "ar": "بروبين، بروبان، بروباين",
          "zh": "丙烯、丙烷、丙炔",
          "ku": "Propen, propan, propîn"
        },
        {
          "tr": "Propin, propan, propen",
          "en": "Propyne, propane, propene",
          "de": "Propin, Propan, Propen",
          "fr": "Propyne, propane, propène",
          "ru": "Пропин, пропан, пропен",
          "ar": "بروباين، بروبان، بروبين",
          "zh": "丙炔、丙烷、丙烯",
          "ku": "Propîn, propan, propen"
        },
        {
          "tr": "Propen, propin, propan",
          "en": "Propene, propyne, propane",
          "de": "Propen, Propin, Propan",
          "fr": "Propène, propyne, propane",
          "ru": "Пропен, пропин, пропан",
          "ar": "بروبين، بروباين، بروبان",
          "zh": "丙烯、丙炔、丙烷",
          "ku": "Propen, propîn, propan"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Bromlu suyun rengini gidermeyen Z, doymuş hidrokarbon olan propandır. X ve Y doymamıştır (propen ve propin). Amonyaklı AgNO3 ile beyaz çökelek, üçlü bağ karbonunda H bulunan uç alkinlerin özelliğidir; propin (CH≡C-CH3) bir uç alkindir, bu yüzden Y propin, X ise propendir. Üçlü bağlı gazın bromlu suyun rengini gidermeyeceğini sanmak en sık yapılan hatadır.",
        "en": "Z, which does not decolourise bromine water, is propane, the saturated hydrocarbon. X and Y are unsaturated (propene and propyne). A white precipitate with ammoniacal AgNO3 is typical of terminal alkynes, which have an H on a triple-bond carbon; propyne (CH≡C-CH3) is a terminal alkyne, so Y is propyne and X is propene. The most common error is thinking that the triple-bonded gas does not decolourise bromine water.",
        "de": "Z, das Bromwasser nicht entfärbt, ist Propan, der gesättigte Kohlenwasserstoff. X und Y sind ungesättigt (Propen und Propin). Ein weißer Niederschlag mit ammoniakalischer AgNO3-Lösung ist typisch für endständige Alkine mit einem H am Dreifachbindungs-C; Propin (CH≡C-CH3) ist ein endständiges Alkin, also ist Y Propin und X Propen. Der häufigste Fehler ist die Annahme, das Gas mit Dreifachbindung entfärbe Bromwasser nicht.",
        "fr": "Z, qui ne décolore pas l'eau de brome, est le propane, hydrocarbure saturé. X et Y sont insaturés (propène et propyne). Un précipité blanc avec AgNO3 ammoniacal caractérise les alcynes terminaux, qui portent un H sur un carbone de la triple liaison ; le propyne (CH≡C-CH3) est un alcyne terminal, donc Y est le propyne et X le propène. L'erreur la plus fréquente est de croire que le gaz à triple liaison ne décolore pas l'eau de brome.",
        "ru": "Z, не обесцвечивающий бромную воду, — пропан, насыщенный углеводород. X и Y ненасыщенные (пропен и пропин). Белый осадок с аммиачным раствором AgNO3 характерен для концевых алкинов, у которых при углероде тройной связи есть H; пропин (CH≡C-CH3) — концевой алкин, поэтому Y — пропин, а X — пропен. Самая частая ошибка — считать, что газ с тройной связью не обесцвечивает бромную воду.",
        "ar": "Z الذي لا يزيل لون ماء البروم هو البروبان، الهيدروكربون المشبع. أما X وY فغير مشبعين (البروبين والبروباين). الراسب الأبيض مع AgNO3 النشادري سمة الألكاينات الطرفية التي تحمل ذرة H على كربون الرابطة الثلاثية؛ والبروباين (CH≡C-CH3) ألكاين طرفي، لذا Y بروباين وX بروبين. أكثر الأخطاء شيوعًا الظن بأن الغاز ذا الرابطة الثلاثية لا يزيل لون ماء البروم.",
        "zh": "不使溴水褪色的 Z 是饱和烃丙烷。X 和 Y 是不饱和烃（丙烯和丙炔）。与银氨溶液生成白色沉淀是三键碳上带 H 的端炔的特征；丙炔(CH≡C-CH3)是端炔，所以 Y 是丙炔，X 是丙烯。最常见的错误是认为含三键的气体不能使溴水褪色。",
        "ku": "Z ku rengê ava bromê nabe propan e, hîdrokarbona têr. X û Y netêr in (propen û propîn). Çîpa spî bi AgNO3 ya amonyakî taybetiya alkînên dawî ye ku li ser karbona girêdana sêalî H heye; propîn (CH≡C-CH3) alkîneke dawî ye, loma Y propîn e û X propen e. Şaşiya herî zêde ev e ku mirov difikire gaza bi girêdana sêalî rengê ava bromê nabe."
      }
    },
    {
      "id": "u24-twin06",
      "stem": {
        "tr": "Benzen (C6H6) molekülü ile ilgili;\nI. Halkadaki bütün karbon atomları sp2 hibritleşmesi yapmıştır.\nII. FeBr3 katalizörlüğünde Br2 ile yer değiştirme tepkimesi vererek bromobenzen ve HBr oluşturur.\nIII. 1 molü tamamen yandığında 6 mol CO2 ve 3 mol H2O oluşur.\nyargılarından hangileri doğrudur?",
        "en": "Regarding the benzene (C6H6) molecule:\nI. All carbon atoms in the ring are sp2 hybridized.\nII. With Br2 in the presence of FeBr3 it undergoes a substitution reaction, forming bromobenzene and HBr.\nIII. Complete combustion of 1 mol produces 6 mol CO2 and 3 mol H2O.\nWhich of these statements are correct?",
        "de": "Zum Benzolmolekül (C6H6):\nI. Alle C-Atome im Ring sind sp2-hybridisiert.\nII. Mit Br2 und FeBr3 als Katalysator geht es eine Substitutionsreaktion ein, wobei Brombenzol und HBr entstehen.\nIII. Bei der vollständigen Verbrennung von 1 mol entstehen 6 mol CO2 und 3 mol H2O.\nWelche Aussagen sind richtig?",
        "fr": "À propos de la molécule de benzène (C6H6) :\nI. Tous les atomes de carbone du cycle sont hybridés sp2.\nII. Avec Br2 en présence de FeBr3, il subit une réaction de substitution qui donne du bromobenzène et HBr.\nIII. La combustion complète de 1 mol produit 6 mol de CO2 et 3 mol de H2O.\nLesquelles de ces affirmations sont exactes ?",
        "ru": "О молекуле бензола (C6H6):\nI. Все атомы углерода в кольце находятся в состоянии sp2-гибридизации.\nII. С Br2 в присутствии FeBr3 вступает в реакцию замещения с образованием бромбензола и HBr.\nIII. При полном сгорании 1 моль образуется 6 моль CO2 и 3 моль H2O.\nКакие из утверждений верны?",
        "ar": "فيما يتعلق بجزيء البنزين (C6H6):\nI. جميع ذرات الكربون في الحلقة مهجّنة sp2.\nII. يتفاعل مع Br2 بوجود FeBr3 تفاعل استبدال فيتكوّن البروموبنزين وHBr.\nIII. عند الاحتراق التام لـ 1 mol منه يتكوّن 6 mol من CO2 و3 mol من H2O.\nأيّ العبارات صحيحة؟",
        "zh": "关于苯(C6H6)分子：\nI. 环上所有碳原子均为 sp2 杂化。\nII. 在 FeBr3 催化下与 Br2 发生取代反应，生成溴苯和 HBr。\nIII. 1 mol 苯完全燃烧生成 6 mol CO2 和 3 mol H2O。\n以上说法中哪些正确？",
        "ku": "Derbarê molekula benzenê (C6H6) de:\nI. Hemû atomên karbonê yên di xelekê de hîbrîdbûna sp2 kirine.\nII. Bi katalîzora FeBr3 bi Br2 re reaksiyona cihguhertinê dide û bromobenzen û HBr çêdike.\nIII. Dema 1 mol bi temamî dişewite 6 mol CO2 û 3 mol H2O çêdibin.\nKîjan ji van gotinan rast in?"
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
        "tr": "I doğrudur: her karbon üç atoma (iki C, bir H) bağlıdır ve düzlemsel halkada sp2 hibritleşmesi yapar. II doğrudur: benzen rezonans kararlılığını korumak için katılma yerine yer değiştirme tepkimesi verir; C6H6 + Br2 → C6H5Br + HBr. III doğrudur: C6H6 + 15/2 O2 → 6CO2 + 3H2O; 6 C atomu 6 CO2, 6 H atomu 3 H2O verir. Üç yargı da doğrudur.",
        "en": "I is correct: each carbon is bonded to three atoms (two C, one H) and is sp2 hybridized in the planar ring. II is correct: to keep its resonance stability benzene undergoes substitution instead of addition; C6H6 + Br2 → C6H5Br + HBr. III is correct: C6H6 + 15/2 O2 → 6CO2 + 3H2O; 6 C atoms give 6 CO2 and 6 H atoms give 3 H2O. All three statements are correct.",
        "de": "I ist richtig: Jedes C ist an drei Atome (zwei C, ein H) gebunden und im planaren Ring sp2-hybridisiert. II ist richtig: Um seine Mesomeriestabilität zu bewahren, reagiert Benzol durch Substitution statt Addition; C6H6 + Br2 → C6H5Br + HBr. III ist richtig: C6H6 + 15/2 O2 → 6CO2 + 3H2O; 6 C-Atome ergeben 6 CO2, 6 H-Atome 3 H2O. Alle drei Aussagen sind richtig.",
        "fr": "I est exacte : chaque carbone est lié à trois atomes (deux C, un H) et est hybridé sp2 dans le cycle plan. II est exacte : pour conserver sa stabilité de résonance, le benzène subit une substitution plutôt qu'une addition ; C6H6 + Br2 → C6H5Br + HBr. III est exacte : C6H6 + 15/2 O2 → 6CO2 + 3H2O ; 6 atomes C donnent 6 CO2, 6 atomes H donnent 3 H2O. Les trois affirmations sont exactes.",
        "ru": "I верно: каждый атом углерода связан с тремя атомами (два C, один H) и в плоском кольце находится в sp2-гибридизации. II верно: сохраняя резонансную устойчивость, бензол вступает в замещение, а не в присоединение; C6H6 + Br2 → C6H5Br + HBr. III верно: C6H6 + 15/2 O2 → 6CO2 + 3H2O; 6 атомов C дают 6 CO2, 6 атомов H — 3 H2O. Все три утверждения верны.",
        "ar": "I صحيحة: كل ذرة كربون مرتبطة بثلاث ذرات (ذرتا C وذرة H) ومهجّنة sp2 في الحلقة المستوية. II صحيحة: يحافظ البنزين على استقرار الرنين فيتفاعل بالاستبدال لا بالإضافة؛ C6H6 + Br2 → C6H5Br + HBr. III صحيحة: C6H6 + 15/2 O2 → 6CO2 + 3H2O؛ ذرات C الست تعطي 6 CO2 وذرات H الست تعطي 3 H2O. العبارات الثلاث صحيحة.",
        "zh": "I 正确：每个碳与三个原子(两个 C、一个 H)相连，在平面环中为 sp2 杂化。II 正确：为保持共振稳定性，苯发生取代而非加成；C6H6 + Br2 → C6H5Br + HBr。III 正确：C6H6 + 15/2 O2 → 6CO2 + 3H2O，6 个 C 原子生成 6 CO2，6 个 H 原子生成 3 H2O。三种说法都正确。",
        "ku": "I rast e: her karbon bi sê atoman (du C, yek H) ve girêdayî ye û di xeleka rast de hîbrîdbûna sp2 dike. II rast e: benzen ji bo parastina aramiya rezonansê li şûna lêzêdekirinê reaksiyona cihguhertinê dide; C6H6 + Br2 → C6H5Br + HBr. III rast e: C6H6 + 15/2 O2 → 6CO2 + 3H2O; 6 atomên C 6 CO2, 6 atomên H 3 H2O didin. Her sê gotin rast in."
      }
    },
    {
      "id": "u24-twin07",
      "stem": {
        "tr": "Molekül formülü C4H8 olan açık zincirli bileşiklerin (alkenlerin) sayısı, cis-trans (geometrik) izomerleri ayrı sayıldığında kaçtır? (Halkalı yapılar sayılmayacaktır.)",
        "en": "How many open-chain compounds (alkenes) have the molecular formula C4H8 if cis-trans (geometric) isomers are counted separately? (Cyclic structures are not counted.)",
        "de": "Wie viele offenkettige Verbindungen (Alkene) haben die Summenformel C4H8, wenn cis-trans-(geometrische) Isomere getrennt gezählt werden? (Ringförmige Strukturen werden nicht gezählt.)",
        "fr": "Combien de composés à chaîne ouverte (alcènes) ont pour formule brute C4H8 si l'on compte séparément les isomères cis-trans (géométriques) ? (Les structures cycliques ne sont pas comptées.)",
        "ru": "Сколько соединений с открытой цепью (алкенов) имеют молекулярную формулу C4H8, если цис-транс (геометрические) изомеры считать отдельно? (Циклические структуры не учитываются.)",
        "ar": "كم عدد المركبات ذات السلسلة المفتوحة (الألكينات) التي صيغتها الجزيئية C4H8 إذا عُدّت متشكلات سيس-ترانس (الهندسية) كلٌّ على حدة؟ (لا تُحسب البنى الحلقية.)",
        "zh": "分子式为 C4H8 的链状化合物（烯烃）共有几种（顺反异构体分别计数，不计环状结构）？",
        "ku": "Hejmara pêkhateyên bi zincîra vekirî (alken) ku formula wan a molekulî C4H8 e çend e, heke îzomerên cis-trans (geometrîk) cuda bêne hejmartin? (Avahiyên xelekî nayên hejmartin.)"
      },
      "options": [
        {
          "tr": "2",
          "en": "2",
          "de": "2",
          "fr": "2",
          "ru": "2",
          "ar": "2",
          "zh": "2",
          "ku": "2"
        },
        {
          "tr": "3",
          "en": "3",
          "de": "3",
          "fr": "3",
          "ru": "3",
          "ar": "3",
          "zh": "3",
          "ku": "3"
        },
        {
          "tr": "4",
          "en": "4",
          "de": "4",
          "fr": "4",
          "ru": "4",
          "ar": "4",
          "zh": "4",
          "ku": "4"
        },
        {
          "tr": "5",
          "en": "5",
          "de": "5",
          "fr": "5",
          "ru": "5",
          "ar": "5",
          "zh": "5",
          "ku": "5"
        },
        {
          "tr": "6",
          "en": "6",
          "de": "6",
          "fr": "6",
          "ru": "6",
          "ar": "6",
          "zh": "6",
          "ku": "6"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "C4H8 için üç farklı alken iskeleti yazılır: CH2=CH-CH2-CH3 (1-büten), CH3-CH=CH-CH3 (2-büten) ve CH2=C(CH3)-CH3 (2-metilpropen). Bunlardan yalnızca 2-bütende ikili bağın her iki karbonunda iki farklı grup (H ve CH3) bulunduğundan cis-2-büten ve trans-2-büten olmak üzere iki geometrik izomer vardır. Toplam 1 + 2 + 1 = 4. Geometrik izomerleri saymamak 3; 1-bütende de cis-trans aramak 5; halkalı siklobütan ve metilsiklopropanı eklemek 6 sonucunu verir.",
        "en": "Three different alkene skeletons can be written for C4H8: CH2=CH-CH2-CH3 (1-butene), CH3-CH=CH-CH3 (2-butene) and CH2=C(CH3)-CH3 (2-methylpropene). Only in 2-butene does each double-bond carbon carry two different groups (H and CH3), so it has two geometric isomers, cis-2-butene and trans-2-butene. Total 1 + 2 + 1 = 4. Not counting geometric isomers gives 3; looking for cis-trans in 1-butene too gives 5; adding cyclic cyclobutane and methylcyclopropane gives 6.",
        "de": "Für C4H8 lassen sich drei Alkengerüste schreiben: CH2=CH-CH2-CH3 (1-Buten), CH3-CH=CH-CH3 (2-Buten) und CH2=C(CH3)-CH3 (2-Methylpropen). Nur beim 2-Buten tragen beide Doppelbindungs-C-Atome zwei verschiedene Gruppen (H und CH3), daher gibt es zwei geometrische Isomere, cis- und trans-2-Buten. Insgesamt 1 + 2 + 1 = 4. Ohne geometrische Isomere erhält man 3; sucht man auch beim 1-Buten cis-trans-Isomere, 5; zählt man die ringförmigen Cyclobutan und Methylcyclopropan hinzu, 6.",
        "fr": "On peut écrire trois squelettes d'alcènes pour C4H8 : CH2=CH-CH2-CH3 (but-1-ène), CH3-CH=CH-CH3 (but-2-ène) et CH2=C(CH3)-CH3 (2-méthylpropène). Seul le but-2-ène porte deux groupes différents (H et CH3) sur chaque carbone de la double liaison : il a deux isomères géométriques, cis et trans. Total 1 + 2 + 1 = 4. Ne pas compter les isomères géométriques donne 3 ; chercher aussi un cis-trans pour le but-1-ène donne 5 ; ajouter le cyclobutane et le méthylcyclopropane cycliques donne 6.",
        "ru": "Для C4H8 можно записать три разных алкеновых скелета: CH2=CH-CH2-CH3 (бутен-1), CH3-CH=CH-CH3 (бутен-2) и CH2=C(CH3)-CH3 (2-метилпропен). Только в бутене-2 у каждого атома C двойной связи два разных заместителя (H и CH3), поэтому у него два геометрических изомера — цис- и транс-бутен-2. Всего 1 + 2 + 1 = 4. Без геометрических изомеров получается 3; если искать цис-транс и у бутена-1 — 5; если добавить циклические циклобутан и метилциклопропан — 6.",
        "ar": "يمكن كتابة ثلاثة هياكل ألكينية مختلفة لـ C4H8: CH2=CH-CH2-CH3 (1-بيوتين) وCH3-CH=CH-CH3 (2-بيوتين) وCH2=C(CH3)-CH3 (2-ميثيل بروبين). في 2-بيوتين وحده يحمل كل من كربوني الرابطة الثنائية مجموعتين مختلفتين (H وCH3)، فله متشكلان هندسيان: سيس-2-بيوتين وترانس-2-بيوتين. المجموع 1 + 2 + 1 = 4. إهمال المتشكلات الهندسية يعطي 3، والبحث عن سيس-ترانس في 1-بيوتين أيضًا يعطي 5، وإضافة البنيتين الحلقيتين البيوتان الحلقي وميثيل البروبان الحلقي يعطي 6.",
        "zh": "C4H8 可写出三种烯烃碳骨架：CH2=CH-CH2-CH3(1-丁烯)、CH3-CH=CH-CH3(2-丁烯)和 CH2=C(CH3)-CH3(2-甲基丙烯)。只有 2-丁烯双键两端的碳各连两个不同基团(H 和 CH3)，因此有顺-2-丁烯和反-2-丁烯两种几何异构体。共 1 + 2 + 1 = 4 种。不计几何异构得 3；误认为 1-丁烯也有顺反异构得 5；再加上环丁烷和甲基环丙烷两种环状结构得 6。",
        "ku": "Ji bo C4H8 sê skeletên alkenê yên cuda têne nivîsîn: CH2=CH-CH2-CH3 (1-bûten), CH3-CH=CH-CH3 (2-bûten) û CH2=C(CH3)-CH3 (2-metîlpropen). Tenê di 2-bûtenê de li ser her du karbonên girêdana dualî du komên cuda (H û CH3) hene, loma du îzomerên geometrîk hene: cis-2-bûten û trans-2-bûten. Bi giştî 1 + 2 + 1 = 4. Nehejmartina îzomerên geometrîk 3; li 1-bûtenê jî cis-trans gerîn 5; lêzêdekirina sîklobûtan û metîlsîklopropana xelekî 6 dide."
      }
    },
    {
      "id": "u24-twin08",
      "stem": {
        "tr": "Aşağıdaki monomer → katılma polimeri eşleştirmelerinden hangisi yanlıştır?",
        "en": "Which of the following monomer → addition polymer pairings is wrong?",
        "de": "Welche der folgenden Zuordnungen Monomer → Additionspolymer ist falsch?",
        "fr": "Laquelle des associations monomère → polymère d'addition suivantes est fausse ?",
        "ru": "Какое из следующих соответствий мономер → полимер присоединения неверно?",
        "ar": "أيّ المطابقات الآتية بين المونومر → بوليمر الإضافة خاطئة؟",
        "zh": "下列单体 → 加聚产物的对应关系中，哪一项是错误的？",
        "ku": "Kîjan ji van lihevanînên monomer → polîmera lêzêdekirinê şaş e?"
      },
      "options": [
        {
          "tr": "CH3-CH2-Cl → polivinil klorür (PVC)",
          "en": "CH3-CH2-Cl → polyvinyl chloride (PVC)",
          "de": "CH3-CH2-Cl → Polyvinylchlorid (PVC)",
          "fr": "CH3-CH2-Cl → poly(chlorure de vinyle) (PVC)",
          "ru": "CH3-CH2-Cl → поливинилхлорид (ПВХ)",
          "ar": "CH3-CH2-Cl → بولي كلوريد الفينيل (PVC)",
          "zh": "CH3-CH2-Cl → 聚氯乙烯(PVC)",
          "ku": "CH3-CH2-Cl → polîvînîl klorîd (PVC)"
        },
        {
          "tr": "CH2=CH2 → polietilen",
          "en": "CH2=CH2 → polyethylene",
          "de": "CH2=CH2 → Polyethylen",
          "fr": "CH2=CH2 → polyéthylène",
          "ru": "CH2=CH2 → полиэтилен",
          "ar": "CH2=CH2 → بولي إيثيلين",
          "zh": "CH2=CH2 → 聚乙烯",
          "ku": "CH2=CH2 → polîetîlen"
        },
        {
          "tr": "CH2=CH-CH3 → polipropilen",
          "en": "CH2=CH-CH3 → polypropylene",
          "de": "CH2=CH-CH3 → Polypropylen",
          "fr": "CH2=CH-CH3 → polypropylène",
          "ru": "CH2=CH-CH3 → полипропилен",
          "ar": "CH2=CH-CH3 → بولي بروبيلين",
          "zh": "CH2=CH-CH3 → 聚丙烯",
          "ku": "CH2=CH-CH3 → polîpropîlen"
        },
        {
          "tr": "CF2=CF2 → teflon",
          "en": "CF2=CF2 → Teflon (PTFE)",
          "de": "CF2=CF2 → Teflon (PTFE)",
          "fr": "CF2=CF2 → téflon (PTFE)",
          "ru": "CF2=CF2 → тефлон (ПТФЭ)",
          "ar": "CF2=CF2 → التفلون (PTFE)",
          "zh": "CF2=CF2 → 聚四氟乙烯（特氟龙）",
          "ku": "CF2=CF2 → teflon"
        },
        {
          "tr": "CH2=CH-C6H5 → polistiren",
          "en": "CH2=CH-C6H5 → polystyrene",
          "de": "CH2=CH-C6H5 → Polystyrol",
          "fr": "CH2=CH-C6H5 → polystyrène",
          "ru": "CH2=CH-C6H5 → полистирол",
          "ar": "CH2=CH-C6H5 → بولي ستايرين",
          "zh": "CH2=CH-C6H5 → 聚苯乙烯",
          "ku": "CH2=CH-C6H5 → polîstîren"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Katılma polimerleşmesinde monomerin C=C bağındaki pi bağı açılır ve moleküller uç uca eklenir; bu yüzden monomerde ikili bağ bulunmalıdır. PVC'nin monomeri vinil klorürdür (kloreten, CH2=CH-Cl). CH3-CH2-Cl (kloroetan) ise doymuş bir bileşiktir, açılacak pi bağı olmadığı için katılma polimeri oluşturamaz; vinil klorür ile etil klorürü karıştırmak bu hataya yol açar. Eten–polietilen, propen–polipropilen, tetrafloreten–teflon ve stiren–polistiren eşleştirmeleri doğrudur.",
        "en": "In addition polymerisation the pi bond of the monomer's C=C opens and the molecules join end to end, so the monomer must have a double bond. The monomer of PVC is vinyl chloride (chloroethene, CH2=CH-Cl). CH3-CH2-Cl (chloroethane) is saturated; with no pi bond to open it cannot form an addition polymer. Confusing vinyl chloride with ethyl chloride leads to this error. The pairings ethene–polyethylene, propene–polypropylene, tetrafluoroethene–Teflon and styrene–polystyrene are correct.",
        "de": "Bei der Additionspolymerisation öffnet sich die Pi-Bindung der C=C-Bindung des Monomers, und die Moleküle verknüpfen sich; das Monomer muss also eine Doppelbindung haben. Das Monomer von PVC ist Vinylchlorid (Chlorethen, CH2=CH-Cl). CH3-CH2-Cl (Chlorethan) ist gesättigt; ohne öffnbare Pi-Bindung bildet es kein Additionspolymer. Die Verwechslung von Vinylchlorid und Ethylchlorid führt zu diesem Fehler. Die Paare Ethen–Polyethylen, Propen–Polypropylen, Tetrafluorethen–Teflon und Styrol–Polystyrol sind richtig.",
        "fr": "Dans la polymérisation par addition, la liaison pi de la double liaison C=C du monomère s'ouvre et les molécules s'enchaînent : le monomère doit donc posséder une double liaison. Le monomère du PVC est le chlorure de vinyle (chloroéthène, CH2=CH-Cl). CH3-CH2-Cl (chloroéthane) est saturé ; sans liaison pi à ouvrir, il ne peut pas former de polymère d'addition. Confondre chlorure de vinyle et chlorure d'éthyle mène à cette erreur. Les associations éthène–polyéthylène, propène–polypropylène, tétrafluoroéthène–téflon et styrène–polystyrène sont exactes.",
        "ru": "При полимеризации раскрывается π-связь двойной связи C=C мономера, и молекулы соединяются в цепь, поэтому мономер должен содержать двойную связь. Мономер ПВХ — винилхлорид (хлорэтен, CH2=CH-Cl). CH3-CH2-Cl (хлорэтан) — насыщенное соединение: π-связи у него нет, и полимер присоединения он не образует. К ошибке приводит смешение винилхлорида с этилхлоридом. Пары этен–полиэтилен, пропен–полипропилен, тетрафторэтен–тефлон и стирол–полистирол верны.",
        "ar": "في البلمرة بالإضافة تنفتح رابطة باي في الرابطة C=C للمونومر وتتصل الجزيئات بعضها ببعض، لذا يجب أن يحتوي المونومر على رابطة ثنائية. مونومر PVC هو كلوريد الفينيل (كلورو إيثين، CH2=CH-Cl). أما CH3-CH2-Cl (كلورو إيثان) فمركب مشبع لا يملك رابطة باي تنفتح، فلا يكوّن بوليمر إضافة؛ والخلط بين كلوريد الفينيل وكلوريد الإيثيل يؤدي إلى هذا الخطأ. المطابقات إيثين–بولي إيثيلين، بروبين–بولي بروبيلين، رباعي فلورو إيثين–التفلون، ستايرين–بولي ستايرين صحيحة.",
        "zh": "加聚反应中单体 C=C 中的π键打开，分子首尾相连，因此单体必须含有双键。PVC 的单体是氯乙烯(CH2=CH-Cl)。CH3-CH2-Cl（氯乙烷）是饱和化合物，没有可打开的π键，不能发生加聚；把氯乙烯与氯乙烷混淆会导致此错误。乙烯–聚乙烯、丙烯–聚丙烯、四氟乙烯–聚四氟乙烯、苯乙烯–聚苯乙烯的对应都正确。",
        "ku": "Di polîmerbûna lêzêdekirinê de girêdana pi ya C=C ya monomerê vedibe û molekul bi hev ve girê dibin; loma divê di monomerê de girêdana dualî hebe. Monomera PVC vînîl klorîd e (kloreten, CH2=CH-Cl). CH3-CH2-Cl (kloroetan) pêkhateyeke têr e; ji ber ku girêdana pi ya ku vebe tune, polîmera lêzêdekirinê çênake. Tevlihevkirina vînîl klorîdê bi etîl klorîdê re dibe sedema vê şaşiyê. Lihevanînên eten–polîetîlen, propen–polîpropîlen, tetrafloreten–teflon û stîren–polîstîren rast in."
      }
    },
    {
      "id": "u24-twin09",
      "stem": {
        "tr": "Mol kütleleri birbirine yakın olan propan (CH3-CH2-CH3, 44 g/mol), etanal (CH3-CHO, 44 g/mol), etanol (CH3-CH2-OH, 46 g/mol) ve metanoik asit (H-COOH, 46 g/mol) bileşiklerinin aynı dış basınçtaki kaynama noktalarının küçükten büyüğe doğru sıralanışı aşağıdakilerden hangisidir?",
        "en": "Propane (CH3-CH2-CH3, 44 g/mol), ethanal (CH3-CHO, 44 g/mol), ethanol (CH3-CH2-OH, 46 g/mol) and methanoic acid (H-COOH, 46 g/mol) have similar molar masses. Which of the following orders their boiling points at the same external pressure from lowest to highest?",
        "de": "Propan (CH3-CH2-CH3, 44 g/mol), Ethanal (CH3-CHO, 44 g/mol), Ethanol (CH3-CH2-OH, 46 g/mol) und Methansäure (H-COOH, 46 g/mol) haben ähnliche Molmassen. Welche Reihenfolge gibt ihre Siedepunkte beim gleichen äußeren Druck vom niedrigsten zum höchsten an?",
        "fr": "Le propane (CH3-CH2-CH3, 44 g/mol), l'éthanal (CH3-CHO, 44 g/mol), l'éthanol (CH3-CH2-OH, 46 g/mol) et l'acide méthanoïque (H-COOH, 46 g/mol) ont des masses molaires voisines. Quel est l'ordre croissant de leurs températures d'ébullition sous la même pression extérieure ?",
        "ru": "Пропан (CH3-CH2-CH3, 44 г/моль), этаналь (CH3-CHO, 44 г/моль), этанол (CH3-CH2-OH, 46 г/моль) и метановая кислота (H-COOH, 46 г/моль) имеют близкие молярные массы. Какой ряд располагает их температуры кипения при одинаковом внешнем давлении в порядке возрастания?",
        "ar": "للبروبان (CH3-CH2-CH3، 44 g/mol) والإيثانال (CH3-CHO، 44 g/mol) والإيثانول (CH3-CH2-OH، 46 g/mol) وحمض الميثانويك (H-COOH، 46 g/mol) كتل مولية متقاربة. أيّ الترتيبات الآتية يرتّب درجات غليانها عند الضغط الخارجي نفسه تصاعديًا؟",
        "zh": "丙烷(CH3-CH2-CH3，44 g/mol)、乙醛(CH3-CHO，44 g/mol)、乙醇(CH3-CH2-OH，46 g/mol)和甲酸(H-COOH，46 g/mol)的摩尔质量相近。在相同外压下，它们的沸点由低到高的顺序是下列哪一项？",
        "ku": "Girseyên molar ên propan (CH3-CH2-CH3, 44 g/mol), etanal (CH3-CHO, 44 g/mol), etanol (CH3-CH2-OH, 46 g/mol) û asîda metanoîk (H-COOH, 46 g/mol) nêzîkî hev in. Rêzkirina xalên kelînê yên wan di heman zexta derve de ji biçûk ber bi mezin kîjan e?"
      },
      "options": [
        {
          "tr": "Etanal < propan < etanol < metanoik asit",
          "en": "Ethanal < propane < ethanol < methanoic acid",
          "de": "Ethanal < Propan < Ethanol < Methansäure",
          "fr": "Éthanal < propane < éthanol < acide méthanoïque",
          "ru": "Этаналь < пропан < этанол < метановая кислота",
          "ar": "إيثانال < بروبان < إيثانول < حمض الميثانويك",
          "zh": "乙醛 < 丙烷 < 乙醇 < 甲酸",
          "ku": "Etanal < propan < etanol < asîda metanoîk"
        },
        {
          "tr": "Propan < etanol < etanal < metanoik asit",
          "en": "Propane < ethanol < ethanal < methanoic acid",
          "de": "Propan < Ethanol < Ethanal < Methansäure",
          "fr": "Propane < éthanol < éthanal < acide méthanoïque",
          "ru": "Пропан < этанол < этаналь < метановая кислота",
          "ar": "بروبان < إيثانول < إيثانال < حمض الميثانويك",
          "zh": "丙烷 < 乙醇 < 乙醛 < 甲酸",
          "ku": "Propan < etanol < etanal < asîda metanoîk"
        },
        {
          "tr": "Propan < etanal < metanoik asit < etanol",
          "en": "Propane < ethanal < methanoic acid < ethanol",
          "de": "Propan < Ethanal < Methansäure < Ethanol",
          "fr": "Propane < éthanal < acide méthanoïque < éthanol",
          "ru": "Пропан < этаналь < метановая кислота < этанол",
          "ar": "بروبان < إيثانال < حمض الميثانويك < إيثانول",
          "zh": "丙烷 < 乙醛 < 甲酸 < 乙醇",
          "ku": "Propan < etanal < asîda metanoîk < etanol"
        },
        {
          "tr": "Propan < etanal < etanol < metanoik asit",
          "en": "Propane < ethanal < ethanol < methanoic acid",
          "de": "Propan < Ethanal < Ethanol < Methansäure",
          "fr": "Propane < éthanal < éthanol < acide méthanoïque",
          "ru": "Пропан < этаналь < этанол < метановая кислота",
          "ar": "بروبان < إيثانال < إيثانول < حمض الميثانويك",
          "zh": "丙烷 < 乙醛 < 乙醇 < 甲酸",
          "ku": "Propan < etanal < etanol < asîda metanoîk"
        },
        {
          "tr": "Metanoik asit < etanol < etanal < propan",
          "en": "Methanoic acid < ethanol < ethanal < propane",
          "de": "Methansäure < Ethanol < Ethanal < Propan",
          "fr": "Acide méthanoïque < éthanol < éthanal < propane",
          "ru": "Метановая кислота < этанол < этаналь < пропан",
          "ar": "حمض الميثانويك < إيثانول < إيثانال < بروبان",
          "zh": "甲酸 < 乙醇 < 乙醛 < 丙烷",
          "ku": "Asîda metanoîk < etanol < etanal < propan"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Mol kütleleri yakın olduğundan sıralamayı moleküller arası etkileşimler belirler. Propan apolardır, yalnızca London kuvvetleri vardır (yaklaşık −42 °C). Etanal polardır, dipol–dipol etkileşimi yapar ama oksijene bağlı H'si olmadığından hidrojen bağı kuramaz (yaklaşık 20 °C). Etanol hidrojen bağı yapar (78 °C). Metanoik asit molekülleri iki hidrojen bağıyla dimer oluşturur ve en yüksek kaynama noktasına sahiptir (yaklaşık 101 °C). Etanolü asitten yüksek sanmak karboksil grubunun çift hidrojen bağını, etanalı propandan düşük sanmak dipol–dipol etkileşimini gözden kaçırmaktır.",
        "en": "With similar molar masses, intermolecular forces decide the order. Propane is nonpolar with only London forces (about −42 °C). Ethanal is polar and has dipole–dipole forces but cannot hydrogen-bond, having no H on oxygen (about 20 °C). Ethanol forms hydrogen bonds (78 °C). Methanoic acid molecules form dimers through two hydrogen bonds and have the highest boiling point (about 101 °C). Putting ethanol above the acid overlooks the double hydrogen bonding of the carboxyl group; putting ethanal below propane overlooks dipole–dipole forces.",
        "de": "Bei ähnlichen Molmassen entscheiden die zwischenmolekularen Kräfte. Propan ist unpolar und hat nur London-Kräfte (etwa −42 °C). Ethanal ist polar und zeigt Dipol-Dipol-Kräfte, bildet aber ohne H am Sauerstoff keine Wasserstoffbrücken (etwa 20 °C). Ethanol bildet Wasserstoffbrücken (78 °C). Methansäuremoleküle bilden über zwei Wasserstoffbrücken Dimere und haben den höchsten Siedepunkt (etwa 101 °C). Wer Ethanol über die Säure stellt, übersieht die doppelte Wasserstoffbrücke der Carboxylgruppe; wer Ethanal unter Propan stellt, übersieht die Dipol-Dipol-Kräfte.",
        "fr": "Les masses molaires étant voisines, ce sont les interactions intermoléculaires qui décident. Le propane est apolaire, avec seulement des forces de London (environ −42 °C). L'éthanal est polaire (interactions dipôle–dipôle) mais, sans H lié à l'oxygène, ne forme pas de liaison hydrogène (environ 20 °C). L'éthanol forme des liaisons hydrogène (78 °C). Les molécules d'acide méthanoïque forment des dimères par deux liaisons hydrogène et ont la plus haute température d'ébullition (environ 101 °C). Placer l'éthanol au-dessus de l'acide revient à oublier la double liaison hydrogène du carboxyle ; placer l'éthanal sous le propane, à oublier les interactions dipôle–dipôle.",
        "ru": "При близких молярных массах порядок определяют межмолекулярные взаимодействия. Пропан неполярен, между его молекулами действуют только лондоновские силы (около −42 °C). Этаналь полярен, для него характерно диполь-дипольное взаимодействие, но у кислорода нет атома H, и водородных связей нет (около 20 °C). Этанол образует водородные связи (78 °C). Молекулы метановой кислоты образуют димеры за счёт двух водородных связей и кипят выше всех (около 101 °C). Ставить этанол выше кислоты — значит упустить две водородные связи карбоксильной группы; ставить этаналь ниже пропана — упустить диполь-дипольное взаимодействие.",
        "ar": "بما أن الكتل المولية متقاربة فإن القوى بين الجزيئات هي التي تحدد الترتيب. البروبان غير قطبي ولا يملك إلا قوى لندن (نحو −42 °C). الإيثانال قطبي وله تجاذب ثنائي القطب، لكنه لا يكوّن روابط هيدروجينية لعدم وجود H مرتبطة بالأكسجين (نحو 20 °C). الإيثانول يكوّن روابط هيدروجينية (78 °C). جزيئات حمض الميثانويك تكوّن ثنائيات عبر رابطتين هيدروجينيتين ولها أعلى درجة غليان (نحو 101 °C). وضع الإيثانول فوق الحمض إغفال للرابطة الهيدروجينية المزدوجة لمجموعة الكربوكسيل، ووضع الإيثانال تحت البروبان إغفال لتجاذب ثنائي القطب.",
        "zh": "摩尔质量相近时，沸点顺序由分子间作用力决定。丙烷为非极性分子，只有色散力(约 −42 °C)。乙醛是极性分子，有偶极–偶极作用，但氧上没有 H，不能形成氢键(约 20 °C)。乙醇能形成氢键(78 °C)。甲酸分子通过两个氢键形成二聚体，沸点最高(约 101 °C)。把乙醇排在甲酸之上，是忽略了羧基的双氢键；把乙醛排在丙烷之下，是忽略了偶极–偶极作用。",
        "ku": "Ji ber ku girseyên molar nêzîk in, hêzên di navbera molekulan de rêzê diyar dikin. Propan nepolar e û tenê hêzên London hene (nêzîkî −42 °C). Etanal polar e û têkiliya dîpol–dîpol dike, lê ji ber ku H ya bi oksîjenê ve tune girêdana hîdrojenê çênake (nêzîkî 20 °C). Etanol girêdana hîdrojenê çêdike (78 °C). Molekulên asîda metanoîk bi du girêdanên hîdrojenê dîmer çêdikin û xala kelînê ya herî bilind a wan e (nêzîkî 101 °C). Danîna etanolê li ser asîdê girêdana hîdrojenê ya ducar a koma karboksîl ji bîr dike; danîna etanalê li bin propanê jî têkiliya dîpol–dîpol ji bîr dike."
      }
    },
    {
      "id": "u24-twin10",
      "stem": {
        "tr": "Asetik asit (CH3-COOH) ile etanol (CH3-CH2-OH) derişik H2SO4 katalizörlüğünde ısıtıldığında su ile birlikte oluşan organik ürünün adı aşağıdakilerden hangisidir?",
        "en": "When acetic acid (CH3-COOH) and ethanol (CH3-CH2-OH) are heated with concentrated H2SO4 as catalyst, what is the name of the organic product formed together with water?",
        "de": "Erhitzt man Essigsäure (CH3-COOH) und Ethanol (CH3-CH2-OH) mit konzentrierter H2SO4 als Katalysator, wie heißt das organische Produkt, das zusammen mit Wasser entsteht?",
        "fr": "Lorsqu'on chauffe l'acide acétique (CH3-COOH) et l'éthanol (CH3-CH2-OH) en présence de H2SO4 concentré comme catalyseur, quel est le nom du produit organique formé avec l'eau ?",
        "ru": "При нагревании уксусной кислоты (CH3-COOH) с этанолом (CH3-CH2-OH) в присутствии концентрированной H2SO4 как катализатора образуется вода и органический продукт. Как он называется?",
        "ar": "عند تسخين حمض الأسيتيك (CH3-COOH) مع الإيثانول (CH3-CH2-OH) بوجود H2SO4 المركّز حفازًا، ما اسم الناتج العضوي الذي يتكوّن مع الماء؟",
        "zh": "乙酸(CH3-COOH)与乙醇(CH3-CH2-OH)在浓 H2SO4 催化下加热，与水一同生成的有机产物名称是下列哪一个？",
        "ku": "Dema asîda asetîk (CH3-COOH) û etanol (CH3-CH2-OH) bi katalîzora H2SO4 ya tîr têne germkirin, navê berhema organîk a ku bi avê re çêdibe kîjan e?"
      },
      "options": [
        {
          "tr": "Metil propanoat",
          "en": "Methyl propanoate",
          "de": "Methylpropanoat",
          "fr": "Propanoate de méthyle",
          "ru": "Метилпропаноат",
          "ar": "بروبانوات الميثيل",
          "zh": "丙酸甲酯",
          "ku": "Metîl propanoat"
        },
        {
          "tr": "Etil etanoat",
          "en": "Ethyl ethanoate",
          "de": "Ethylethanoat",
          "fr": "Éthanoate d'éthyle",
          "ru": "Этилэтаноат",
          "ar": "إيثانوات الإيثيل",
          "zh": "乙酸乙酯",
          "ku": "Etîl etanoat"
        },
        {
          "tr": "Dietil eter",
          "en": "Diethyl ether",
          "de": "Diethylether",
          "fr": "Éther diéthylique",
          "ru": "Диэтиловый эфир",
          "ar": "ثنائي إيثيل الإيثر",
          "zh": "乙醚",
          "ku": "Dîetîl eter"
        },
        {
          "tr": "Propil metanoat",
          "en": "Propyl methanoate",
          "de": "Propylmethanoat",
          "fr": "Méthanoate de propyle",
          "ru": "Пропилметаноат",
          "ar": "ميثانوات البروبيل",
          "zh": "甲酸丙酯",
          "ku": "Propîl metanoat"
        },
        {
          "tr": "Bütanoik asit",
          "en": "Butanoic acid",
          "de": "Butansäure",
          "fr": "Acide butanoïque",
          "ru": "Бутановая кислота",
          "ar": "حمض البيوتانويك",
          "zh": "丁酸",
          "ku": "Asîda bûtanoîk"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Bu bir esterleşme tepkimesidir: CH3-COOH + CH3-CH2-OH → CH3-COO-CH2-CH3 + H2O. Esterler, alkolden gelen alkil grubunun adı ile asidin -oat ekli adı birleştirilerek adlandırılır: alkolden etil, etanoik (asetik) asitten etanoat gelir; ürün etil etanoattır (etil asetat). Metil propanoat, propil metanoat ve bütanoik asit aynı molekül formülüne (C4H8O2) sahip izomerlerdir; asit ve alkol kısımlarını karıştırmaktan doğar. Dietil eter iki etanol molekülünden su ayrılmasıyla oluşur; asetik asit içermez.",
        "en": "This is esterification: CH3-COOH + CH3-CH2-OH → CH3-COO-CH2-CH3 + H2O. Esters are named from the alkyl group of the alcohol plus the -oate name of the acid: ethyl from the alcohol, ethanoate from ethanoic (acetic) acid; the product is ethyl ethanoate (ethyl acetate). Methyl propanoate, propyl methanoate and butanoic acid are isomers with the same molecular formula (C4H8O2) and come from mixing up the acid and alcohol parts. Diethyl ether forms when water is removed from two ethanol molecules; it contains no acetic acid part.",
        "de": "Es handelt sich um eine Veresterung: CH3-COOH + CH3-CH2-OH → CH3-COO-CH2-CH3 + H2O. Ester benennt man nach der Alkylgruppe des Alkohols und dem -oat-Namen der Säure: Ethyl vom Alkohol, Ethanoat von der Ethansäure (Essigsäure); das Produkt ist Ethylethanoat (Ethylacetat). Methylpropanoat, Propylmethanoat und Butansäure sind Isomere mit derselben Summenformel (C4H8O2) und entstehen durch Verwechseln von Säure- und Alkoholteil. Diethylether entsteht durch Wasserabspaltung aus zwei Ethanolmolekülen und enthält keinen Essigsäureteil.",
        "fr": "C'est une estérification : CH3-COOH + CH3-CH2-OH → CH3-COO-CH2-CH3 + H2O. On nomme un ester avec le nom en -oate de l'acide suivi du groupe alkyle de l'alcool : éthanoate (de l'acide éthanoïque, ou acétique) et éthyle (de l'alcool) ; le produit est l'éthanoate d'éthyle (acétate d'éthyle). Le propanoate de méthyle, le méthanoate de propyle et l'acide butanoïque sont des isomères de même formule brute (C4H8O2), issus d'une confusion entre partie acide et partie alcool. L'éther diéthylique se forme par déshydratation de deux molécules d'éthanol ; il ne contient pas de partie acétique.",
        "ru": "Это реакция этерификации: CH3-COOH + CH3-CH2-OH → CH3-COO-CH2-CH3 + H2O. Сложный эфир называют по алкильной группе спирта и названию кислоты с суффиксом -оат: этил — от спирта, этаноат — от этановой (уксусной) кислоты; продукт — этилэтаноат (этилацетат). Метилпропаноат, пропилметаноат и бутановая кислота — изомеры с той же формулой C4H8O2; они получаются, если перепутать кислотную и спиртовую части. Диэтиловый эфир образуется при отщеплении воды от двух молекул этанола и не содержит остатка уксусной кислоты.",
        "ar": "هذا تفاعل أسترة: CH3-COOH + CH3-CH2-OH → CH3-COO-CH2-CH3 + H2O. يُسمّى الإستر باسم الحمض بالمقطع «-وات» مضافًا إلى مجموعة الألكيل القادمة من الكحول: الإيثانوات من حمض الإيثانويك (الأسيتيك) والإيثيل من الكحول؛ فالناتج إيثانوات الإيثيل (أسيتات الإيثيل). بروبانوات الميثيل وميثانوات البروبيل وحمض البيوتانويك متشكلات لها الصيغة الجزيئية نفسها (C4H8O2) وتنتج عن الخلط بين جزأي الحمض والكحول. أما ثنائي إيثيل الإيثر فيتكوّن بنزع الماء من جزيئي إيثانول ولا يحتوي على جزء الأسيتيك.",
        "zh": "这是酯化反应：CH3-COOH + CH3-CH2-OH → CH3-COO-CH2-CH3 + H2O。酯按“某酸某酯”命名：酸部分来自乙酸，醇部分来自乙醇，产物为乙酸乙酯。丙酸甲酯、甲酸丙酯和丁酸是分子式同为 C4H8O2 的同分异构体，源于把酸和醇两部分弄混。乙醚由两分子乙醇脱水生成，不含乙酸部分。",
        "ku": "Ev reaksiyona esterkirinê ye: CH3-COOH + CH3-CH2-OH → CH3-COO-CH2-CH3 + H2O. Ester bi navê koma alkîl a ji alkolê û navê asîdê yê bi paşgira -oat têne binavkirin: etîl ji alkolê, etanoat ji asîda etanoîk (asetîk); berhem etîl etanoat e (etîl asetat). Metîl propanoat, propîl metanoat û asîda bûtanoîk îzomerên bi heman formula molekulî (C4H8O2) ne û ji tevlihevkirina beşên asîd û alkolê çêdibin. Dîetîl eter ji du molekulên etanolê bi veqetîna avê çêdibe û beşa asetîk nahewîne."
      }
    },
    {
      "id": "u24-twin11",
      "stem": {
        "tr": "Gliserin (1,2,3-propantriol; HO-CH2-CH(OH)-CH2-OH) ile ilgili;\nI. Üç değerli bir alkoldür (polialkol).\nII. OH gruplarından biri sekonder karbona, ikisi primer karbona bağlıdır.\nIII. Molekülleri arasında hidrojen bağı bulunmadığından suda çözünmez.\nyargılarından hangileri doğrudur?",
        "en": "Regarding glycerol (propane-1,2,3-triol; HO-CH2-CH(OH)-CH2-OH):\nI. It is a trihydric alcohol (a polyol).\nII. One of its OH groups is on a secondary carbon and two are on primary carbons.\nIII. It is insoluble in water because there are no hydrogen bonds between its molecules.\nWhich of these statements are correct?",
        "de": "Zu Glycerin (Propan-1,2,3-triol; HO-CH2-CH(OH)-CH2-OH):\nI. Es ist ein dreiwertiger Alkohol (Polyol).\nII. Eine OH-Gruppe sitzt an einem sekundären, zwei an primären C-Atomen.\nIII. Es ist wasserunlöslich, weil zwischen seinen Molekülen keine Wasserstoffbrücken bestehen.\nWelche Aussagen sind richtig?",
        "fr": "À propos du glycérol (propane-1,2,3-triol ; HO-CH2-CH(OH)-CH2-OH) :\nI. C'est un trialcool (polyol).\nII. Un de ses groupes OH est porté par un carbone secondaire et deux par des carbones primaires.\nIII. Il est insoluble dans l'eau car il n'y a pas de liaisons hydrogène entre ses molécules.\nLesquelles de ces affirmations sont exactes ?",
        "ru": "О глицерине (пропантриол-1,2,3; HO-CH2-CH(OH)-CH2-OH):\nI. Это трёхатомный спирт (многоатомный спирт).\nII. Одна группа OH находится при вторичном атоме углерода, две — при первичных.\nIII. Он не растворяется в воде, так как между его молекулами нет водородных связей.\nКакие из утверждений верны?",
        "ar": "فيما يتعلق بالغليسرين (بروبان-1,2,3-تريول؛ HO-CH2-CH(OH)-CH2-OH):\nI. هو كحول ثلاثي الهيدروكسيل (كحول متعدد الهيدروكسيل).\nII. إحدى مجموعات OH مرتبطة بكربون ثانوي واثنتان بكربونين أوليين.\nIII. لا يذوب في الماء لعدم وجود روابط هيدروجينية بين جزيئاته.\nأيّ العبارات صحيحة؟",
        "zh": "关于甘油(丙三醇，1,2,3-丙三醇；HO-CH2-CH(OH)-CH2-OH)：\nI. 它是三元醇（多元醇）。\nII. 其中一个 OH 连在仲碳上，两个连在伯碳上。\nIII. 分子间不存在氢键，因此不溶于水。\n以上说法中哪些正确？",
        "ku": "Derbarê glîserînê (1,2,3-propantrîol; HO-CH2-CH(OH)-CH2-OH) de:\nI. Alkoleke sê-hîdroksîlî ye (polîalkol).\nII. Yek ji komên OH bi karbona duyemîn, du jî bi karbonên seretayî ve girêdayî ne.\nIII. Ji ber ku di navbera molekulên wê de girêdana hîdrojenê tune, di avê de nahele.\nKîjan ji van gotinan rast in?"
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
        "tr": "I doğrudur: molekülde üç OH grubu bulunduğundan üç değerli alkoldür. II doğrudur: uçtaki iki CH2 karbonunun her biri yalnızca bir karbona bağlıdır (primer), ortadaki CH karbonu iki karbona bağlıdır (sekonder). III yanlıştır: üç OH grubu sayesinde gliserin hem kendi molekülleriyle hem de suyla çok sayıda hidrojen bağı kurar ve suyla her oranda karışır; yüksek kaynama noktası ve viskozitesi de bundandır.",
        "en": "I is correct: the molecule has three OH groups, so it is a trihydric alcohol. II is correct: each terminal CH2 carbon is bonded to only one carbon (primary), while the middle CH carbon is bonded to two carbons (secondary). III is wrong: thanks to its three OH groups glycerol forms many hydrogen bonds both with its own molecules and with water, and mixes with water in all proportions; this also explains its high boiling point and viscosity.",
        "de": "I ist richtig: Das Molekül hat drei OH-Gruppen, ist also ein dreiwertiger Alkohol. II ist richtig: Jedes endständige CH2-C-Atom ist nur an ein C gebunden (primär), das mittlere CH-C-Atom an zwei (sekundär). III ist falsch: Dank der drei OH-Gruppen bildet Glycerin viele Wasserstoffbrücken untereinander und mit Wasser und ist mit Wasser in jedem Verhältnis mischbar; daher auch sein hoher Siedepunkt und seine Viskosität.",
        "fr": "I est exacte : la molécule possède trois groupes OH, c'est un trialcool. II est exacte : chaque carbone CH2 terminal n'est lié qu'à un carbone (primaire), le carbone CH central est lié à deux carbones (secondaire). III est fausse : grâce à ses trois groupes OH, le glycérol forme de nombreuses liaisons hydrogène entre ses molécules et avec l'eau, et se mélange à l'eau en toutes proportions ; cela explique aussi sa température d'ébullition et sa viscosité élevées.",
        "ru": "I верно: в молекуле три группы OH, значит, это трёхатомный спирт. II верно: каждый концевой атом C группы CH2 связан только с одним атомом углерода (первичный), а средний атом C группы CH — с двумя (вторичный). III неверно: благодаря трём группам OH глицерин образует много водородных связей и между своими молекулами, и с водой и смешивается с водой в любых соотношениях; этим же объясняются его высокие температура кипения и вязкость.",
        "ar": "I صحيحة: في الجزيء ثلاث مجموعات OH، فهو كحول ثلاثي الهيدروكسيل. II صحيحة: كل من كربوني CH2 الطرفيين مرتبط بذرة كربون واحدة فقط (أولي)، وكربون CH الأوسط مرتبط بذرتي كربون (ثانوي). III خاطئة: بفضل مجموعات OH الثلاث يكوّن الغليسرين روابط هيدروجينية كثيرة بين جزيئاته ومع الماء، ويمتزج بالماء بأي نسبة؛ وهذا يفسر أيضًا ارتفاع درجة غليانه ولزوجته.",
        "zh": "I 正确：分子中有三个 OH，是三元醇。II 正确：两端的 CH2 碳各只与一个碳相连（伯碳），中间的 CH 碳与两个碳相连（仲碳）。III 错误：甘油的三个 OH 使其分子之间以及与水之间都能形成大量氢键，能与水以任意比例互溶，这也是其沸点高、黏度大的原因。",
        "ku": "I rast e: di molekulê de sê komên OH hene, loma alkoleke sê-hîdroksîlî ye. II rast e: her yek ji karbonên CH2 yên dawî tenê bi karbonekê ve girêdayî ye (seretayî), karbona CH ya navîn bi du karbonan ve girêdayî ye (duyemîn). III şaş e: bi saya sê komên OH glîserîn hem bi molekulên xwe hem jî bi avê re gelek girêdanên hîdrojenê çêdike û bi her rêjeyê bi avê re tevlî dibe; xala kelînê û vîskozîteya wê ya bilind jî ji vê ye."
      }
    },
    {
      "id": "u24-twin12",
      "stem": {
        "tr": "12,8 g kalsiyum karbür (CaC2) yeterince su ile tamamen tepkimeye giriyor. Oluşan asetilen gazının tamamını Ni katalizörlüğünde etana (C2H6) dönüştürmek için en az kaç mol H2 gerekir? (C: 12, Ca: 40)",
        "en": "12.8 g of calcium carbide (CaC2) reacts completely with excess water. What is the minimum number of moles of H2 needed to convert all the acetylene formed into ethane (C2H6) over a Ni catalyst? (C: 12, Ca: 40)",
        "de": "12,8 g Calciumcarbid (CaC2) reagieren vollständig mit überschüssigem Wasser. Wie viel mol H2 werden mindestens benötigt, um das gesamte entstandene Acetylen am Ni-Katalysator in Ethan (C2H6) umzuwandeln? (C: 12, Ca: 40)",
        "fr": "12,8 g de carbure de calcium (CaC2) réagissent complètement avec un excès d'eau. Combien de moles de H2 faut-il au minimum pour transformer tout l'acétylène formé en éthane (C2H6) sur catalyseur au Ni ? (C : 12, Ca : 40)",
        "ru": "12,8 г карбида кальция (CaC2) полностью реагируют с избытком воды. Какое наименьшее количество H2 (в моль) нужно, чтобы на никелевом катализаторе превратить весь образовавшийся ацетилен в этан (C2H6)? (C: 12, Ca: 40)",
        "ar": "يتفاعل 12.8 g من كربيد الكالسيوم (CaC2) تفاعلًا تامًا مع كمية وافرة من الماء. ما أقل عدد مولات من H2 يلزم لتحويل كل الأسيتيلين الناتج إلى إيثان (C2H6) بوجود حفاز Ni؟ (C: 12، Ca: 40)",
        "zh": "12.8 g 碳化钙(CaC2)与足量水完全反应。要在 Ni 催化下把生成的乙炔全部转化为乙烷(C2H6)，至少需要多少摩尔 H2？(C = 12，Ca = 40)",
        "ku": "12,8 g karbîda kalsiyûmê (CaC2) bi têra avê re bi temamî reaksiyonê dike. Ji bo ku hemû gaza asetîlenê ya çêbûyî bi katalîzora Ni bibe etan (C2H6), herî kêm çend mol H2 pêwîst e? (C: 12, Ca: 40)"
      },
      "options": [
        {
          "tr": "0,1",
          "en": "0.1",
          "de": "0,1",
          "fr": "0,1",
          "ru": "0,1",
          "ar": "0.1",
          "zh": "0.1",
          "ku": "0,1"
        },
        {
          "tr": "0,2",
          "en": "0.2",
          "de": "0,2",
          "fr": "0,2",
          "ru": "0,2",
          "ar": "0.2",
          "zh": "0.2",
          "ku": "0,2"
        },
        {
          "tr": "0,4",
          "en": "0.4",
          "de": "0,4",
          "fr": "0,4",
          "ru": "0,4",
          "ar": "0.4",
          "zh": "0.4",
          "ku": "0,4"
        },
        {
          "tr": "0,6",
          "en": "0.6",
          "de": "0,6",
          "fr": "0,6",
          "ru": "0,6",
          "ar": "0.6",
          "zh": "0.6",
          "ku": "0,6"
        },
        {
          "tr": "0,8",
          "en": "0.8",
          "de": "0,8",
          "fr": "0,8",
          "ru": "0,8",
          "ar": "0.8",
          "zh": "0.8",
          "ku": "0,8"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "CaC2'nin mol kütlesi 40 + 2·12 = 64 g/mol olduğundan n(CaC2) = 12,8 / 64 = 0,2 mol. CaC2 + 2H2O → C2H2 + Ca(OH)2 denklemine göre 0,2 mol C2H2 oluşur. Üçlü bağ iki pi bağı içerdiğinden etana kadar doyurmak için her mol C2H2'ye 2 mol H2 katılır: C2H2 + 2H2 → C2H6. Gereken H2 = 0,2 × 2 = 0,4 mol. Tek mol H2 katıp etende durmak 0,2; tepkimedeki 2 mol suyu 2 mol asetilen sanmak 0,8 sonucunu verir.",
        "en": "The molar mass of CaC2 is 40 + 2·12 = 64 g/mol, so n(CaC2) = 12.8 / 64 = 0.2 mol. From CaC2 + 2H2O → C2H2 + Ca(OH)2, 0.2 mol C2H2 forms. A triple bond contains two pi bonds, so saturating it to ethane takes 2 mol H2 per mol C2H2: C2H2 + 2H2 → C2H6. H2 needed = 0.2 × 2 = 0.4 mol. Adding only one mol H2 and stopping at ethene gives 0.2; taking the 2 mol of water as 2 mol of acetylene gives 0.8.",
        "de": "Die Molmasse von CaC2 beträgt 40 + 2·12 = 64 g/mol, also n(CaC2) = 12,8 / 64 = 0,2 mol. Nach CaC2 + 2H2O → C2H2 + Ca(OH)2 entstehen 0,2 mol C2H2. Eine Dreifachbindung enthält zwei Pi-Bindungen; zur vollständigen Sättigung zu Ethan braucht man 2 mol H2 pro mol C2H2: C2H2 + 2H2 → C2H6. Benötigtes H2 = 0,2 × 2 = 0,4 mol. Addiert man nur 1 mol H2 und bleibt beim Ethen stehen, erhält man 0,2; hält man die 2 mol Wasser für 2 mol Acetylen, 0,8.",
        "fr": "La masse molaire de CaC2 vaut 40 + 2·12 = 64 g/mol, donc n(CaC2) = 12,8 / 64 = 0,2 mol. D'après CaC2 + 2H2O → C2H2 + Ca(OH)2, il se forme 0,2 mol de C2H2. Une triple liaison contient deux liaisons pi : pour saturer jusqu'à l'éthane, il faut 2 mol de H2 par mole de C2H2 : C2H2 + 2H2 → C2H6. H2 nécessaire = 0,2 × 2 = 0,4 mol. N'additionner qu'une mole de H2 et s'arrêter à l'éthène donne 0,2 ; prendre les 2 mol d'eau pour 2 mol d'acétylène donne 0,8.",
        "ru": "Молярная масса CaC2 равна 40 + 2·12 = 64 г/моль, n(CaC2) = 12,8 / 64 = 0,2 моль. По уравнению CaC2 + 2H2O → C2H2 + Ca(OH)2 образуется 0,2 моль C2H2. Тройная связь содержит две π-связи, поэтому для насыщения до этана на 1 моль C2H2 нужно 2 моль H2: C2H2 + 2H2 → C2H6. Требуется H2 = 0,2 × 2 = 0,4 моль. Если присоединить только 1 моль H2 и остановиться на этене, получится 0,2; если принять 2 моль воды за 2 моль ацетилена — 0,8.",
        "ar": "الكتلة المولية لـ CaC2 هي 40 + 2·12 = 64 g/mol، إذن n(CaC2) = 12.8 / 64 = 0.2 mol. ووفق CaC2 + 2H2O → C2H2 + Ca(OH)2 يتكوّن 0.2 mol من C2H2. تحتوي الرابطة الثلاثية على رابطتي باي، لذا يلزم 2 mol من H2 لكل 1 mol من C2H2 لإشباعه حتى الإيثان: C2H2 + 2H2 → C2H6. الـ H2 اللازم = 0.2 × 2 = 0.4 mol. إضافة مول واحد من H2 والتوقف عند الإيثين يعطي 0.2، واعتبار مولي الماء مولين من الأسيتيلين يعطي 0.8.",
        "zh": "CaC2 的摩尔质量为 40 + 2·12 = 64 g/mol，n(CaC2) = 12.8 / 64 = 0.2 mol。由 CaC2 + 2H2O → C2H2 + Ca(OH)2，生成 0.2 mol C2H2。三键含两个π键，完全加氢生成乙烷时每摩尔 C2H2 需 2 mol H2：C2H2 + 2H2 → C2H6。所需 H2 = 0.2 × 2 = 0.4 mol。只加 1 mol H2 停在乙烯得 0.2；把方程式中的 2 mol 水当作 2 mol 乙炔得 0.8。",
        "ku": "Girseya molar a CaC2 40 + 2·12 = 64 g/mol e, loma n(CaC2) = 12,8 / 64 = 0,2 mol. Li gorî CaC2 + 2H2O → C2H2 + Ca(OH)2, 0,2 mol C2H2 çêdibe. Girêdana sêalî du girêdanên pi dihewîne; ji bo têrkirina heta etanê ji her mol C2H2 re 2 mol H2 lê zêde dibe: C2H2 + 2H2 → C2H6. H2 ya pêwîst = 0,2 × 2 = 0,4 mol. Tenê 1 mol H2 lê zêdekirin û li etenê sekinîn 0,2; hesibandina 2 mol avê wek 2 mol asetîlen 0,8 dide."
      }
    },
    {
      "id": "u24-twin13",
      "stem": {
        "tr": "Aşağıdaki alkenlerden hangisine HBr katıldığında, katılmanın yönü ne olursa olsun yalnızca tek bir yapı izomeri (aynı ürün) oluşur?",
        "en": "Adding HBr to which of the following alkenes gives only one structural product, regardless of the direction of addition?",
        "de": "Bei der Addition von HBr an welches der folgenden Alkene entsteht unabhängig von der Additionsrichtung nur ein einziges Strukturprodukt?",
        "fr": "L'addition de HBr sur lequel des alcènes suivants ne donne qu'un seul produit de structure, quel que soit le sens de l'addition ?",
        "ru": "При присоединении HBr к какому из следующих алкенов образуется только одно вещество (один структурный изомер) независимо от направления присоединения?",
        "ar": "عند إضافة HBr إلى أيّ الألكينات الآتية يتكوّن ناتج بنائي واحد فقط بغض النظر عن اتجاه الإضافة؟",
        "zh": "HBr 与下列哪种烯烃加成时，无论加成方向如何都只生成一种结构的产物？",
        "ku": "Dema HBr li kîjan ji van alkenan zêde dibe, bêyî ku aliyê lêzêdekirinê girîng be tenê berhemeke avahiyî ya yekane çêdibe?"
      },
      "options": [
        {
          "tr": "CH2=CH-CH3 (propen)",
          "en": "CH2=CH-CH3 (propene)",
          "de": "CH2=CH-CH3 (Propen)",
          "fr": "CH2=CH-CH3 (propène)",
          "ru": "CH2=CH-CH3 (пропен)",
          "ar": "CH2=CH-CH3 (بروبين)",
          "zh": "CH2=CH-CH3（丙烯）",
          "ku": "CH2=CH-CH3 (propen)"
        },
        {
          "tr": "CH2=CH-CH2-CH3 (1-büten)",
          "en": "CH2=CH-CH2-CH3 (1-butene)",
          "de": "CH2=CH-CH2-CH3 (1-Buten)",
          "fr": "CH2=CH-CH2-CH3 (but-1-ène)",
          "ru": "CH2=CH-CH2-CH3 (бутен-1)",
          "ar": "CH2=CH-CH2-CH3 (1-بيوتين)",
          "zh": "CH2=CH-CH2-CH3(1-丁烯)",
          "ku": "CH2=CH-CH2-CH3 (1-bûten)"
        },
        {
          "tr": "CH2=C(CH3)-CH3 (2-metilpropen)",
          "en": "CH2=C(CH3)-CH3 (2-methylpropene)",
          "de": "CH2=C(CH3)-CH3 (2-Methylpropen)",
          "fr": "CH2=C(CH3)-CH3 (2-méthylpropène)",
          "ru": "CH2=C(CH3)-CH3 (2-метилпропен)",
          "ar": "CH2=C(CH3)-CH3 (2-ميثيل بروبين)",
          "zh": "CH2=C(CH3)-CH3(2-甲基丙烯)",
          "ku": "CH2=C(CH3)-CH3 (2-metîlpropen)"
        },
        {
          "tr": "CH3-CH=C(CH3)-CH3 (2-metil-2-büten)",
          "en": "CH3-CH=C(CH3)-CH3 (2-methyl-2-butene)",
          "de": "CH3-CH=C(CH3)-CH3 (2-Methyl-2-buten)",
          "fr": "CH3-CH=C(CH3)-CH3 (2-méthylbut-2-ène)",
          "ru": "CH3-CH=C(CH3)-CH3 (2-метилбутен-2)",
          "ar": "CH3-CH=C(CH3)-CH3 (2-ميثيل-2-بيوتين)",
          "zh": "CH3-CH=C(CH3)-CH3(2-甲基-2-丁烯)",
          "ku": "CH3-CH=C(CH3)-CH3 (2-metîl-2-bûten)"
        },
        {
          "tr": "CH3-CH=CH-CH3 (2-büten)",
          "en": "CH3-CH=CH-CH3 (2-butene)",
          "de": "CH3-CH=CH-CH3 (2-Buten)",
          "fr": "CH3-CH=CH-CH3 (but-2-ène)",
          "ru": "CH3-CH=CH-CH3 (бутен-2)",
          "ar": "CH3-CH=CH-CH3 (2-بيوتين)",
          "zh": "CH3-CH=CH-CH3(2-丁烯)",
          "ku": "CH3-CH=CH-CH3 (2-bûten)"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Tek ürün oluşması için alkenin ikili bağa göre simetrik olması gerekir; H hangi ikili bağ karbonuna bağlanırsa bağlansın aynı molekül çıkmalıdır. 2-bütende (CH3-CH=CH-CH3) ikili bağın iki karbonu da birer H ve birer CH3 taşır; ürün her durumda 2-bromobütandır. Propen, 1-büten, 2-metilpropen ve 2-metil-2-büten asimetriktir: HBr katılınca iki farklı yapı ürünü mümkündür ve hangisinin ana ürün olacağını Markovnikov kuralı belirler.",
        "en": "To get a single product the alkene must be symmetric about the double bond, so that the same molecule forms whichever double-bond carbon receives the H. In 2-butene (CH3-CH=CH-CH3) both double-bond carbons carry one H and one CH3; the product is always 2-bromobutane. Propene, 1-butene, 2-methylpropene and 2-methyl-2-butene are asymmetric: two different structural products are possible with HBr, and Markovnikov's rule decides which is the main product.",
        "de": "Für ein einziges Produkt muss das Alken bezüglich der Doppelbindung symmetrisch sein, sodass dasselbe Molekül entsteht, egal an welches Doppelbindungs-C das H geht. Im 2-Buten (CH3-CH=CH-CH3) tragen beide Doppelbindungs-C-Atome je ein H und ein CH3; das Produkt ist immer 2-Brombutan. Propen, 1-Buten, 2-Methylpropen und 2-Methyl-2-buten sind unsymmetrisch: Mit HBr sind zwei verschiedene Strukturprodukte möglich, und die Markownikow-Regel bestimmt das Hauptprodukt.",
        "fr": "Pour obtenir un seul produit, l'alcène doit être symétrique par rapport à la double liaison : la même molécule se forme quel que soit le carbone qui reçoit le H. Dans le but-2-ène (CH3-CH=CH-CH3), les deux carbones de la double liaison portent chacun un H et un CH3 ; le produit est toujours le 2-bromobutane. Le propène, le but-1-ène, le 2-méthylpropène et le 2-méthylbut-2-ène sont asymétriques : deux produits de structure sont possibles avec HBr, et la règle de Markovnikov désigne le produit majoritaire.",
        "ru": "Чтобы образовался один продукт, алкен должен быть симметричен относительно двойной связи: какой бы атом углерода ни получил H, образуется одна и та же молекула. В бутене-2 (CH3-CH=CH-CH3) оба атома C двойной связи несут по одному H и одному CH3; продукт всегда 2-бромбутан. Пропен, бутен-1, 2-метилпропен и 2-метилбутен-2 несимметричны: с HBr возможны два разных структурных продукта, и основной определяется правилом Марковникова.",
        "ar": "لكي يتكوّن ناتج واحد يجب أن يكون الألكين متماثلًا حول الرابطة الثنائية، فيتكوّن الجزيء نفسه أيًّا كان الكربون الذي ترتبط به H. في 2-بيوتين (CH3-CH=CH-CH3) يحمل كل من كربوني الرابطة الثنائية ذرة H ومجموعة CH3؛ فالناتج دائمًا 2-برومو بيوتان. أما البروبين و1-بيوتين و2-ميثيل بروبين و2-ميثيل-2-بيوتين فغير متماثلة: يمكن أن يتكوّن ناتجان بنائيان مختلفان مع HBr، وتحدد قاعدة ماركوفنيكوف الناتج الرئيسي.",
        "zh": "要只生成一种产物，烯烃必须关于双键对称，无论 H 加到哪个双键碳上都得到同一分子。2-丁烯(CH3-CH=CH-CH3)双键两端的碳各连一个 H 和一个 CH3，产物总是 2-溴丁烷。丙烯、1-丁烯、2-甲基丙烯和 2-甲基-2-丁烯都不对称，与 HBr 加成可能生成两种不同结构的产物，主产物由马氏规则决定。",
        "ku": "Ji bo ku tenê berhemek çêbibe divê alken li gorî girêdana dualî sîmetrîk be, da ku H bi kîjan karbonê ve girê bibe jî heman molekul derkeve. Di 2-bûtenê (CH3-CH=CH-CH3) de her du karbonên girêdana dualî yek H û yek CH3 hildigirin; berhem her tim 2-bromobûtan e. Propen, 1-bûten, 2-metîlpropen û 2-metîl-2-bûten nesîmetrîk in: bi HBr re du berhemên avahiyî yên cuda mimkun in û qaîdeya Markovnikov diyar dike ka kîjan berhema sereke ye."
      }
    },
    {
      "id": "u24-twin14",
      "stem": {
        "tr": "Etiketsiz iki şişeden birinde asetik asidin, diğerinde etanolün sulu çözeltisi bulunmaktadır.\nI. Sodyum bikarbonat (NaHCO3) çözeltisi eklemek\nII. Sodyum metali eklemek\nIII. Mavi turnusol kâğıdı batırmak\nişlemlerinden hangileri bu iki çözeltiyi ayırt etmek için kullanılabilir?",
        "en": "Two unlabelled bottles contain an aqueous solution of acetic acid and an aqueous solution of ethanol. Which of the following can be used to tell the two solutions apart?\nI. Adding sodium bicarbonate (NaHCO3) solution\nII. Adding sodium metal\nIII. Dipping blue litmus paper",
        "de": "Zwei unbeschriftete Flaschen enthalten eine wässrige Essigsäurelösung bzw. eine wässrige Ethanollösung. Welche der folgenden Maßnahmen eignen sich, um die beiden Lösungen zu unterscheiden?\nI. Zugabe von Natriumhydrogencarbonat-Lösung (NaHCO3)\nII. Zugabe von Natriummetall\nIII. Eintauchen von blauem Lackmuspapier",
        "fr": "Deux flacons sans étiquette contiennent l'un une solution aqueuse d'acide acétique, l'autre une solution aqueuse d'éthanol. Lesquelles des opérations suivantes permettent de distinguer les deux solutions ?\nI. Ajouter une solution d'hydrogénocarbonate de sodium (NaHCO3)\nII. Ajouter du sodium métallique\nIII. Tremper un papier de tournesol bleu",
        "ru": "В двух склянках без этикеток находятся водный раствор уксусной кислоты и водный раствор этанола. Какие из следующих действий позволяют различить эти растворы?\nI. Добавить раствор гидрокарбоната натрия (NaHCO3)\nII. Добавить металлический натрий\nIII. Опустить синюю лакмусовую бумажку",
        "ar": "في قارورتين بلا ملصقات محلول مائي لحمض الأسيتيك ومحلول مائي للإيثانول. أيّ العمليات الآتية يمكن استخدامها للتمييز بين المحلولين؟\nI. إضافة محلول بيكربونات الصوديوم (NaHCO3)\nII. إضافة فلز الصوديوم\nIII. غمس ورقة تبّاع الشمس الزرقاء",
        "zh": "两个无标签的瓶中分别装有乙酸水溶液和乙醇水溶液。下列哪些操作可用来区分这两种溶液？\nI. 加入碳酸氢钠(NaHCO3)溶液\nII. 加入金属钠\nIII. 浸入蓝色石蕊试纸",
        "ku": "Di du şûşeyên bêetîket de, di yekê de çareseriya avî ya asîda asetîk, di ya din de çareseriya avî ya etanolê heye. Kîjan ji van karan dikarin ji bo ji hev cudakirina van her du çareseriyan bêne bikaranîn?\nI. Lêzêdekirina çareseriya sodyûm bîkarbonatê (NaHCO3)\nII. Lêzêdekirina metala sodyûmê\nIII. Têxistina kaxeza turnusolê ya şîn"
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
      "correctIndex": 3,
      "explanation": {
        "tr": "I kullanılabilir: asetik asit NaHCO3 ile CO2 gazı çıkarır (CH3-COOH + NaHCO3 → CH3-COONa + H2O + CO2), etanol asidik olmadığından gaz çıkışı gözlenmez. II kullanılamaz: sodyum metali hem asetik asitle hem etanolle, ayrıca çözeltilerdeki suyla tepkimeye girip H2 gazı açığa çıkarır; iki şişede de aynı gözlem yapılır. III kullanılabilir: asetik asit çözeltisi mavi turnusolü kırmızıya çevirir, etanol çözeltisi nötr olduğundan renk değişmez.",
        "en": "I can be used: acetic acid releases CO2 gas with NaHCO3 (CH3-COOH + NaHCO3 → CH3-COONa + H2O + CO2), while ethanol is not acidic and no gas is seen. II cannot be used: sodium metal reacts with acetic acid, with ethanol and also with the water in the solutions, releasing H2 gas; the same observation is made in both bottles. III can be used: the acetic acid solution turns blue litmus red, while the ethanol solution is neutral and the colour does not change.",
        "de": "I ist geeignet: Essigsäure setzt mit NaHCO3 CO2 frei (CH3-COOH + NaHCO3 → CH3-COONa + H2O + CO2), Ethanol ist nicht sauer, es entsteht kein Gas. II ist nicht geeignet: Natrium reagiert mit Essigsäure, mit Ethanol und auch mit dem Wasser der Lösungen unter H2-Entwicklung; in beiden Flaschen beobachtet man dasselbe. III ist geeignet: Die Essigsäurelösung färbt blaues Lackmus rot, die neutrale Ethanollösung verändert die Farbe nicht.",
        "fr": "I convient : l'acide acétique dégage du CO2 avec NaHCO3 (CH3-COOH + NaHCO3 → CH3-COONa + H2O + CO2), tandis que l'éthanol, non acide, ne donne aucun gaz. II ne convient pas : le sodium réagit avec l'acide acétique, avec l'éthanol et aussi avec l'eau des solutions en dégageant H2 ; on observe la même chose dans les deux flacons. III convient : la solution d'acide acétique rougit le tournesol bleu, la solution d'éthanol, neutre, ne change pas sa couleur.",
        "ru": "I подходит: уксусная кислота с NaHCO3 выделяет CO2 (CH3-COOH + NaHCO3 → CH3-COONa + H2O + CO2), этанол не проявляет кислотных свойств, газа нет. II не подходит: натрий реагирует и с уксусной кислотой, и с этанолом, и с водой растворов с выделением H2; в обеих склянках наблюдается одно и то же. III подходит: раствор уксусной кислоты окрашивает синий лакмус в красный цвет, а нейтральный раствор этанола цвет не меняет.",
        "ar": "I يمكن استخدامها: يُطلق حمض الأسيتيك غاز CO2 مع NaHCO3 (CH3-COOH + NaHCO3 → CH3-COONa + H2O + CO2)، أما الإيثانول فليس حمضيًا ولا يُلاحظ خروج غاز. II لا يمكن استخدامها: يتفاعل فلز الصوديوم مع حمض الأسيتيك ومع الإيثانول وأيضًا مع ماء المحلولين فيُطلق غاز H2، فتُلاحظ النتيجة نفسها في القارورتين. III يمكن استخدامها: يحوّل محلول حمض الأسيتيك ورقة تبّاع الشمس الزرقاء إلى الأحمر، ومحلول الإيثانول متعادل فلا يتغير اللون.",
        "zh": "I 可以：乙酸与 NaHCO3 反应放出 CO2(CH3-COOH + NaHCO3 → CH3-COONa + H2O + CO2)，乙醇不显酸性，无气体产生。II 不可以：金属钠与乙酸、乙醇以及溶液中的水都能反应放出 H2，两瓶现象相同。III 可以：乙酸溶液使蓝色石蕊试纸变红，乙醇溶液呈中性，颜色不变。",
        "ku": "I dikare bê bikaranîn: asîda asetîk bi NaHCO3 re gaza CO2 derdixe (CH3-COOH + NaHCO3 → CH3-COONa + H2O + CO2), etanol ne asîdî ye û gaz dernakeve. II nikare bê bikaranîn: metala sodyûmê hem bi asîda asetîk, hem bi etanolê û hem jî bi ava çareseriyan re reaksiyonê dike û gaza H2 derdixe; di her du şûşeyan de heman tişt tê dîtin. III dikare bê bikaranîn: çareseriya asîda asetîk turnusola şîn sor dike, çareseriya etanolê neutral e û reng naguhere."
      }
    },
    {
      "id": "u24-twin15",
      "stem": {
        "tr": "Molekül formülü C4H10O olan düz zincirli bir alkol (X) asitli KMnO4 ile yükseltgendiğinde molekül formülü C4H8O olan Y bileşiği oluşuyor. Y, Tollens ayıracıyla gümüş aynası oluşturmuyor. Buna göre X ve Y aşağıdakilerden hangisidir?",
        "en": "When a straight-chain alcohol X with molecular formula C4H10O is oxidised with acidified KMnO4, compound Y with molecular formula C4H8O is formed. Y does not give a silver mirror with Tollens' reagent. What are X and Y?",
        "de": "Bei der Oxidation eines unverzweigten Alkohols X der Summenformel C4H10O mit angesäuertem KMnO4 entsteht die Verbindung Y der Summenformel C4H8O. Y bildet mit Tollens-Reagenz keinen Silberspiegel. Was sind X und Y?",
        "fr": "L'oxydation d'un alcool à chaîne linéaire X, de formule brute C4H10O, par KMnO4 acidifié donne le composé Y de formule brute C4H8O. Y ne donne pas de miroir d'argent avec le réactif de Tollens. Que sont X et Y ?",
        "ru": "При окислении спирта X с неразветвлённой цепью и формулой C4H10O подкисленным раствором KMnO4 образуется вещество Y с формулой C4H8O. Y не даёт реакции серебряного зеркала с реактивом Толленса. Что такое X и Y?",
        "ar": "عند أكسدة كحول ذي سلسلة مستقيمة X صيغته الجزيئية C4H10O بمحلول KMnO4 المحمّض يتكوّن المركب Y الذي صيغته الجزيئية C4H8O. لا يكوّن Y مرآة فضية مع كاشف تولنز. ما X وY؟",
        "zh": "分子式为 C4H10O 的直链醇 X 被酸性 KMnO4 氧化，生成分子式为 C4H8O 的化合物 Y。Y 不能与托伦试剂发生银镜反应。X 和 Y 分别是什么？",
        "ku": "Dema alkoleke bi zincîra rast X ku formula wê ya molekulî C4H10O e bi KMnO4 ya asîdî tê oksîdkirin, pêkhateya Y ku formula wê C4H8O ye çêdibe. Y bi reaktîfa Tollens re neynika zîv çênake. Li gorî vê, X û Y kîjan in?"
      },
      "options": [
        {
          "tr": "X: 1-bütanol, Y: bütanal",
          "en": "X: 1-butanol, Y: butanal",
          "de": "X: 1-Butanol, Y: Butanal",
          "fr": "X : butan-1-ol, Y : butanal",
          "ru": "X: бутанол-1, Y: бутаналь",
          "ar": "X: 1-بيوتانول، Y: بيوتانال",
          "zh": "X：1-丁醇，Y：丁醛",
          "ku": "X: 1-bûtanol, Y: bûtanal"
        },
        {
          "tr": "X: 2-bütanol, Y: bütanon",
          "en": "X: 2-butanol, Y: butanone",
          "de": "X: 2-Butanol, Y: Butanon",
          "fr": "X : butan-2-ol, Y : butanone",
          "ru": "X: бутанол-2, Y: бутанон",
          "ar": "X: 2-بيوتانول، Y: بيوتانون",
          "zh": "X：2-丁醇，Y：丁酮",
          "ku": "X: 2-bûtanol, Y: bûtanon"
        },
        {
          "tr": "X: 1-bütanol, Y: bütanoik asit",
          "en": "X: 1-butanol, Y: butanoic acid",
          "de": "X: 1-Butanol, Y: Butansäure",
          "fr": "X : butan-1-ol, Y : acide butanoïque",
          "ru": "X: бутанол-1, Y: бутановая кислота",
          "ar": "X: 1-بيوتانول، Y: حمض البيوتانويك",
          "zh": "X：1-丁醇，Y：丁酸",
          "ku": "X: 1-bûtanol, Y: asîda bûtanoîk"
        },
        {
          "tr": "X: 2-metil-2-propanol, Y: propanon",
          "en": "X: 2-methyl-2-propanol, Y: propanone",
          "de": "X: 2-Methyl-2-propanol, Y: Propanon",
          "fr": "X : 2-méthylpropan-2-ol, Y : propanone",
          "ru": "X: 2-метилпропанол-2, Y: пропанон",
          "ar": "X: 2-ميثيل-2-بروبانول، Y: بروبانون",
          "zh": "X：2-甲基-2-丙醇，Y：丙酮",
          "ku": "X: 2-metîl-2-propanol, Y: propanon"
        },
        {
          "tr": "X: 2-bütanol, Y: bütanal",
          "en": "X: 2-butanol, Y: butanal",
          "de": "X: 2-Butanol, Y: Butanal",
          "fr": "X : butan-2-ol, Y : butanal",
          "ru": "X: бутанол-2, Y: бутаналь",
          "ar": "X: 2-بيوتانول، Y: بيوتانال",
          "zh": "X：2-丁醇，Y：丁醛",
          "ku": "X: 2-bûtanol, Y: bûtanal"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Y'nin formülü C4H8O olduğuna göre X'ten iki H uzaklaşmıştır; Y ya aldehit (bütanal) ya da ketondur (bütanon). Tollens testi vermediği için Y aldehit olamaz, ketondur: bütanon (CH3-CO-CH2-CH3). Keton, sekonder alkolün yükseltgenmesiyle oluşur; düz zincirli sekonder C4 alkolü 2-bütanoldür (CH3-CH(OH)-CH2-CH3). 1-bütanol primer alkoldür ve bütanal verirdi; bütanal Tollens testini verir. Bütanoik asidin formülü C4H8O2'dir. 2-metil-2-propanol hem dallanmış hem de tersiyerdir, ılımlı koşullarda yükseltgenmez; 2-bütanolden de aldehit oluşmaz.",
        "en": "Since Y is C4H8O, two H atoms have been removed from X; Y is either an aldehyde (butanal) or a ketone (butanone). It does not give the Tollens test, so it is not an aldehyde but the ketone butanone (CH3-CO-CH2-CH3). Ketones come from oxidising secondary alcohols; the straight-chain secondary C4 alcohol is 2-butanol (CH3-CH(OH)-CH2-CH3). 1-Butanol is primary and would give butanal, which gives the Tollens test. Butanoic acid is C4H8O2. 2-Methyl-2-propanol is branched and tertiary and is not oxidised under mild conditions; 2-butanol does not give an aldehyde.",
        "de": "Da Y die Formel C4H8O hat, wurden X zwei H-Atome entzogen; Y ist ein Aldehyd (Butanal) oder ein Keton (Butanon). Da Y keine Tollens-Probe gibt, ist es kein Aldehyd, sondern das Keton Butanon (CH3-CO-CH2-CH3). Ketone entstehen aus sekundären Alkoholen; der unverzweigte sekundäre C4-Alkohol ist 2-Butanol (CH3-CH(OH)-CH2-CH3). 1-Butanol ist primär und würde Butanal liefern, das die Tollens-Probe gibt. Butansäure hat die Formel C4H8O2. 2-Methyl-2-propanol ist verzweigt und tertiär und wird unter milden Bedingungen nicht oxidiert; aus 2-Butanol entsteht kein Aldehyd.",
        "fr": "Y étant C4H8O, deux atomes H ont été retirés à X ; Y est soit un aldéhyde (butanal), soit une cétone (butanone). Il ne donne pas le test de Tollens : ce n'est pas un aldéhyde, c'est la butanone (CH3-CO-CH2-CH3). Une cétone provient de l'oxydation d'un alcool secondaire ; l'alcool secondaire linéaire en C4 est le butan-2-ol (CH3-CH(OH)-CH2-CH3). Le butan-1-ol est primaire et donnerait le butanal, qui donne le test de Tollens. L'acide butanoïque a pour formule C4H8O2. Le 2-méthylpropan-2-ol est ramifié et tertiaire, non oxydable en conditions douces ; le butan-2-ol ne donne pas d'aldéhyde.",
        "ru": "Так как формула Y — C4H8O, от X отщепились два атома H; Y — либо альдегид (бутаналь), либо кетон (бутанон). Реакцию Толленса Y не даёт, значит, это не альдегид, а кетон бутанон (CH3-CO-CH2-CH3). Кетоны получаются окислением вторичных спиртов; вторичный спирт C4 с неразветвлённой цепью — бутанол-2 (CH3-CH(OH)-CH2-CH3). Бутанол-1 — первичный спирт, он дал бы бутаналь, который даёт реакцию Толленса. Формула бутановой кислоты — C4H8O2. 2-Метилпропанол-2 разветвлён и третичен, в мягких условиях не окисляется; из бутанола-2 альдегид не образуется.",
        "ar": "بما أن صيغة Y هي C4H8O فقد نُزعت ذرتا H من X؛ وY إما ألدهيد (بيوتانال) أو كيتون (بيوتانون). لا يعطي Y اختبار تولنز، فهو ليس ألدهيدًا بل الكيتون بيوتانون (CH3-CO-CH2-CH3). تنتج الكيتونات من أكسدة الكحولات الثانوية، والكحول الثانوي ذو السلسلة المستقيمة بأربع ذرات كربون هو 2-بيوتانول (CH3-CH(OH)-CH2-CH3). أما 1-بيوتانول فكحول أولي يعطي البيوتانال الذي يعطي اختبار تولنز. صيغة حمض البيوتانويك C4H8O2. و2-ميثيل-2-بروبانول متفرع وثالثي لا يتأكسد في الظروف المعتدلة، ولا يعطي 2-بيوتانول ألدهيدًا.",
        "zh": "Y 的分子式为 C4H8O，说明 X 失去了两个 H；Y 是醛（丁醛）或酮（丁酮）。Y 不发生银镜反应，不是醛，而是丁酮(CH3-CO-CH2-CH3)。酮由仲醇氧化得到，直链四碳仲醇是 2-丁醇(CH3-CH(OH)-CH2-CH3)。1-丁醇是伯醇，会生成能发生银镜反应的丁醛。丁酸的分子式是 C4H8O2。2-甲基-2-丙醇既有支链又是叔醇，温和条件下不被氧化；2-丁醇也不能生成醛。",
        "ku": "Ji ber ku formula Y C4H8O ye, du atomên H ji X hatine rakirin; Y an aldehîd (bûtanal) an jî keton (bûtanon) e. Y testa Tollens nade, loma ne aldehîd e, ketona bûtanon e (CH3-CO-CH2-CH3). Keton ji oksîdasyona alkola duyemîn çêdibe; alkola duyemîn a C4 ya bi zincîra rast 2-bûtanol e (CH3-CH(OH)-CH2-CH3). 1-bûtanol alkoleke seretayî ye û dê bûtanal bida, ku testa Tollens dide. Formula asîda bûtanoîk C4H8O2 ye. 2-metîl-2-propanol hem şaxdar hem jî sêyemîn e û di şertên nerm de oksîd nabe; ji 2-bûtanolê jî aldehîd çênabe."
      }
    },
    {
      "id": "u24-twin16",
      "stem": {
        "tr": "I. CH2=CH2 + H2O → CH3-CH2-OH (asit katalizörlüğünde)\nII. CH3-CH2-OH → CH2=CH2 + H2O (derişik H2SO4, yaklaşık 170 °C)\nIII. CH4 + Cl2 → CH3Cl + HCl (UV ışığı)\nYukarıdaki tepkimelerin türleri sırasıyla aşağıdakilerden hangisidir?",
        "en": "I. CH2=CH2 + H2O → CH3-CH2-OH (acid catalyst)\nII. CH3-CH2-OH → CH2=CH2 + H2O (concentrated H2SO4, about 170 °C)\nIII. CH4 + Cl2 → CH3Cl + HCl (UV light)\nWhat are the types of these reactions, respectively?",
        "de": "I. CH2=CH2 + H2O → CH3-CH2-OH (Säurekatalyse)\nII. CH3-CH2-OH → CH2=CH2 + H2O (konzentrierte H2SO4, etwa 170 °C)\nIII. CH4 + Cl2 → CH3Cl + HCl (UV-Licht)\nUm welche Reaktionstypen handelt es sich (in dieser Reihenfolge)?",
        "fr": "I. CH2=CH2 + H2O → CH3-CH2-OH (catalyse acide)\nII. CH3-CH2-OH → CH2=CH2 + H2O (H2SO4 concentré, environ 170 °C)\nIII. CH4 + Cl2 → CH3Cl + HCl (lumière UV)\nQuels sont, dans l'ordre, les types de ces réactions ?",
        "ru": "I. CH2=CH2 + H2O → CH3-CH2-OH (кислотный катализ)\nII. CH3-CH2-OH → CH2=CH2 + H2O (концентрированная H2SO4, около 170 °C)\nIII. CH4 + Cl2 → CH3Cl + HCl (УФ-свет)\nК каким типам относятся эти реакции (по порядку)?",
        "ar": "I. CH2=CH2 + H2O → CH3-CH2-OH (بوجود حمض حفاز)\nII. CH3-CH2-OH → CH2=CH2 + H2O (H2SO4 مركّز، نحو 170 °C)\nIII. CH4 + Cl2 → CH3Cl + HCl (ضوء فوق بنفسجي)\nما أنواع هذه التفاعلات على الترتيب؟",
        "zh": "I. CH2=CH2 + H2O → CH3-CH2-OH（酸催化）\nII. CH3-CH2-OH → CH2=CH2 + H2O(浓 H2SO4，约 170 °C)\nIII. CH4 + Cl2 → CH3Cl + HCl（紫外光）\n以上反应的类型依次是下列哪一项？",
        "ku": "I. CH2=CH2 + H2O → CH3-CH2-OH (bi katalîzora asîdê)\nII. CH3-CH2-OH → CH2=CH2 + H2O (H2SO4 ya tîr, nêzîkî 170 °C)\nIII. CH4 + Cl2 → CH3Cl + HCl (ronahiya UV)\nCureyên van reaksiyonan bi rêzê kîjan in?"
      },
      "options": [
        {
          "tr": "Katılma, ayrılma, yer değiştirme",
          "en": "Addition, elimination, substitution",
          "de": "Addition, Eliminierung, Substitution",
          "fr": "Addition, élimination, substitution",
          "ru": "Присоединение, отщепление, замещение",
          "ar": "إضافة، حذف، استبدال",
          "zh": "加成、消去、取代",
          "ku": "Lêzêdekirin, veqetandin, cihguhertin"
        },
        {
          "tr": "Katılma, kondenzasyon, yer değiştirme",
          "en": "Addition, condensation, substitution",
          "de": "Addition, Kondensation, Substitution",
          "fr": "Addition, condensation, substitution",
          "ru": "Присоединение, конденсация, замещение",
          "ar": "إضافة، تكاثف، استبدال",
          "zh": "加成、缩合、取代",
          "ku": "Lêzêdekirin, kondensasyon, cihguhertin"
        },
        {
          "tr": "Ayrılma, katılma, yer değiştirme",
          "en": "Elimination, addition, substitution",
          "de": "Eliminierung, Addition, Substitution",
          "fr": "Élimination, addition, substitution",
          "ru": "Отщепление, присоединение, замещение",
          "ar": "حذف، إضافة، استبدال",
          "zh": "消去、加成、取代",
          "ku": "Veqetandin, lêzêdekirin, cihguhertin"
        },
        {
          "tr": "Katılma, yer değiştirme, ayrılma",
          "en": "Addition, substitution, elimination",
          "de": "Addition, Substitution, Eliminierung",
          "fr": "Addition, substitution, élimination",
          "ru": "Присоединение, замещение, отщепление",
          "ar": "إضافة، استبدال، حذف",
          "zh": "加成、取代、消去",
          "ku": "Lêzêdekirin, cihguhertin, veqetandin"
        },
        {
          "tr": "Yer değiştirme, ayrılma, katılma",
          "en": "Substitution, elimination, addition",
          "de": "Substitution, Eliminierung, Addition",
          "fr": "Substitution, élimination, addition",
          "ru": "Замещение, отщепление, присоединение",
          "ar": "استبدال، حذف، إضافة",
          "zh": "取代、消去、加成",
          "ku": "Cihguhertin, veqetandin, lêzêdekirin"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "I'de etenin pi bağı açılır, H ve OH ikili bağ karbonlarına bağlanır: katılma (hidratasyon). II'de etanolün komşu iki karbonundan H ve OH su olarak ayrılır ve ikili bağ oluşur: ayrılma (eliminasyon). III'te metandaki bir H atomunun yerini Cl atomu alır: yer değiştirme (sübstitüsyon). II'de su açığa çıktığı için kondenzasyon sanılabilir; oysa kondenzasyonda iki molekül küçük bir molekül vererek birleşir, burada ise tek bir molekülden su ayrılıp ikili bağ oluşmaktadır.",
        "en": "In I the pi bond of ethene opens and H and OH attach to the double-bond carbons: addition (hydration). In II, H and OH leave two neighbouring carbons of ethanol as water and a double bond forms: elimination. In III a Cl atom replaces one H atom of methane: substitution. Because water is released in II it may be mistaken for condensation; but in condensation two molecules join while giving off a small molecule, whereas here water leaves a single molecule and a double bond forms.",
        "de": "In I öffnet sich die Pi-Bindung des Ethens, H und OH binden an die Doppelbindungs-C-Atome: Addition (Hydratisierung). In II werden von zwei benachbarten C-Atomen des Ethanols H und OH als Wasser abgespalten, und es entsteht eine Doppelbindung: Eliminierung. In III ersetzt ein Cl-Atom ein H-Atom des Methans: Substitution. Weil in II Wasser frei wird, hält man sie leicht für eine Kondensation; dabei verbinden sich jedoch zwei Moleküle unter Abspaltung eines kleinen Moleküls, hier dagegen spaltet ein einziges Molekül Wasser ab und bildet eine Doppelbindung.",
        "fr": "En I, la liaison pi de l'éthène s'ouvre et H et OH se fixent sur les carbones de la double liaison : addition (hydratation). En II, H et OH quittent deux carbones voisins de l'éthanol sous forme d'eau et une double liaison se forme : élimination. En III, un atome Cl remplace un atome H du méthane : substitution. Comme de l'eau se dégage en II, on peut la confondre avec une condensation ; mais dans une condensation deux molécules s'unissent en libérant une petite molécule, alors qu'ici une seule molécule perd de l'eau et forme une double liaison.",
        "ru": "В I разрывается π-связь этена, H и OH присоединяются к атомам углерода двойной связи: присоединение (гидратация). Во II от двух соседних атомов углерода этанола отщепляются H и OH в виде воды и образуется двойная связь: отщепление (элиминирование). В III атом Cl замещает один атом H метана: замещение. Поскольку во II выделяется вода, эту реакцию можно принять за конденсацию; но при конденсации две молекулы соединяются с выделением малой молекулы, а здесь одна молекула теряет воду и образует двойную связь.",
        "ar": "في I تنفتح رابطة باي في الإيثين وترتبط H وOH بكربوني الرابطة الثنائية: إضافة (إماهة). في II تُنزع H وOH من ذرتي كربون متجاورتين في الإيثانول على هيئة ماء وتتكوّن رابطة ثنائية: حذف. في III تحل ذرة Cl محل ذرة H في الميثان: استبدال. ولأن الماء يتحرر في II قد يُظن أنه تكاثف؛ لكن في التكاثف يتحد جزيئان مع خروج جزيء صغير، أما هنا فيفقد جزيء واحد الماء وتتكوّن رابطة ثنائية.",
        "zh": "I 中乙烯的π键打开，H 和 OH 分别连到双键碳上：加成（水合）。II 中乙醇相邻两个碳上的 H 和 OH 以水的形式脱去，生成双键：消去。III 中 Cl 原子取代甲烷中的一个 H 原子：取代。II 中放出水，容易被误认为缩合；但缩合是两个分子结合并脱去小分子，而这里是一个分子脱水形成双键。",
        "ku": "Di I de girêdana pi ya etenê vedibe, H û OH bi karbonên girêdana dualî ve girê dibin: lêzêdekirin (hîdratasyon). Di II de ji du karbonên cîran ên etanolê H û OH wek av vediqetin û girêdana dualî çêdibe: veqetandin (elîmînasyon). Di III de atoma Cl cihê atomeke H ya metanê digire: cihguhertin. Ji ber ku di II de av derdikeve, mirov dikare wê kondensasyon bihesibîne; lê di kondensasyonê de du molekul bi derxistina molekuleke biçûk bi hev ve girê dibin, li vir jî ji molekulek tenê av vediqete û girêdana dualî çêdibe."
      }
    }
  ]
};

export default unit24;
