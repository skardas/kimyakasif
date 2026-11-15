import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit09: ChemistryUnitSeedData = {
  "id": "u09",
  "order": 9,
  "exam": "TYT",
  "grade": 10,
  "title": {
    "tr": "Asitler, Bazlar ve Tuzlar",
    "en": "Acids, Bases & Salts",
    "de": "Säuren, Basen & Salze",
    "fr": "Acides, Bases & Sels",
    "ru": "Кислоты, основания и соли",
    "ar": "الأحماض والقواعد والأملاح",
    "zh": "酸、碱和盐",
    "ku": "Asîd, Baz û Xwê"
  },
  "subtitle": {
    "tr": "pH Kavramı, Nötralleşme ve Metal Tepkimeleri",
    "en": "pH Scale, Neutralization & Metal Reactivity",
    "de": "pH-Konzept, Neutralisation und Metallreaktionen",
    "fr": "Concept pH, neutralisation et réactions métalliques",
    "ru": "Понятие pH, нейтрализация и реакции металлов",
    "ar": "مفهوم الرقم الهيدروجيني والتعادل وتفاعلات الفلزات",
    "zh": "pH 的概念、中和反应与金属的反应",
    "ku": "Têgeha pH, Neutralîzasyon û Reaksiyonên Metalan"
  },
  "facts": [
    {
      "id": "u09-f01",
      "fact": {
        "tr": "Asitler sulu çözeltilerine H+ (H3O+) iyonu verir, tatları ekşidir ve mavi turnusolu kırmızıya çevirir.",
        "en": "Acids give off H+ (H3O+) ions to their aqueous solutions, taste sour and turn blue litmus red.",
        "de": "Säuren geben H+ (H3O+)-Ionen an ihre wässrigen Lösungen ab, schmecken sauer und färben blauen Lackmus rot.",
        "fr": "Les acides libèrent des ions H+ (H3O+) dans leurs solutions aqueuses, ont un goût aigre et font virer au rouge le tournesol bleu.",
        "ru": "В водных растворах кислоты образуют ионы H+ (H3O+), имеют кислый вкус и окрашивают синий лакмус в красный цвет.",
        "ar": "تطلق الأحماض أيونات H+ (H3O+) في محاليلها المائية، وطعمها حامض، وتحوّل ورق عباد الشمس الأزرق إلى اللون الأحمر.",
        "zh": "酸在水溶液中电离出 H+(H3O+)，有酸味，能使蓝色石蕊变红。",
        "ku": "Asîd îyonên H+ (H3O+) didin çareseriyên xwe yên avî, tama wan tirş e û turnusola şîn sor dikin."
      },
      "trap": {
        "tr": "Asitler ele kayganlık hissi verir ve turnusolu maviye boyar.",
        "en": "Acids give the hand a slippery feeling and turn litmus blue.",
        "de": "Säuren verleihen der Hand ein rutschiges Gefühl und verfärben Lackmus blau.",
        "fr": "Les acides donnent à la main une sensation glissante et font virer le tournesol au bleu.",
        "ru": "Кислоты мылкие на ощупь и окрашивают лакмус в синий цвет.",
        "ar": "للأحماض ملمس زلق على اليد، وهي تحوّل ورق عباد الشمس إلى اللون الأزرق.",
        "zh": "酸摸起来有滑腻感，并能使石蕊变蓝。",
        "ku": "Asîd di dest de hesteke şemitokî didin û turnusolê şîn dikin."
      },
      "whyTrapIsFalse": {
        "tr": "Ele kayganlık hissi vermek ve turnusolu maviye çevirmek bazların özelliğidir; asitler aşındırıcıdır ve mavi turnusolu kırmızıya çevirir.",
        "en": "A slippery feel and turning litmus blue are properties of bases; acids are corrosive and turn blue litmus red.",
        "de": "Ein seifiges Gefühl und das Blaufärben von Lackmus sind Eigenschaften von Basen; Säuren sind ätzend und färben blauen Lackmus rot.",
        "fr": "La sensation glissante et le virage du tournesol au bleu sont des propriétés des bases ; les acides sont corrosifs et font virer le tournesol bleu au rouge.",
        "ru": "Мылкость на ощупь и посинение лакмуса — свойства оснований; кислоты обладают разъедающим действием и окрашивают синий лакмус в красный цвет.",
        "ar": "الملمس الزلق وتحويل ورق عباد الشمس إلى الأزرق من خواص القواعد؛ أما الأحماض فهي أكّالة وتحوّل ورق عباد الشمس الأزرق إلى الأحمر.",
        "zh": "滑腻感和使石蕊变蓝是碱的性质；酸具有腐蚀性，使蓝色石蕊变红。",
        "ku": "Hesteke şemitokî dayîna destan û şînkirina turnusolê taybetmendiyên bazan in; asîd xwarker in û turnusola şîn sor dikin."
      }
    },
    {
      "id": "u09-f02",
      "fact": {
        "tr": "Bazlar sulu çözeltilerine OH- iyonu verir, tatları acıdır ve kırmızı turnusolu maviye çevirir.",
        "en": "Bases give OH- ions to their aqueous solutions, taste bitter and turn red litmus blue.",
        "de": "Basen geben OH-Ionen an ihre wässrigen Lösungen ab, schmecken bitter und färben roten Lackmus blau.",
        "fr": "Les bases libèrent des ions OH- dans leurs solutions aqueuses, ont un goût amer et font virer au bleu le tournesol rouge.",
        "ru": "В водных растворах основания образуют ионы OH-, имеют горький вкус и окрашивают красный лакмус в синий цвет.",
        "ar": "تعطي القواعد أيونات OH- في محاليلها المائية، وطعمها مر، وتحوّل ورق عباد الشمس الأحمر إلى اللون الأزرق.",
        "zh": "碱在水溶液中电离出 OH-，有苦味，能使红色石蕊变蓝。",
        "ku": "Baz îyonên OH- didin çareseriyên xwe yên avî, tama wan tal e û turnusola sor şîn dikin."
      },
      "trap": {
        "tr": "Bazlar sulu çözeltilerinde elektrik akımını iletmez.",
        "en": "Bases do not conduct electric current in aqueous solutions.",
        "de": "Basen leiten in wässrigen Lösungen keinen elektrischen Strom.",
        "fr": "Les bases ne conduisent pas le courant électrique dans les solutions aqueuses.",
        "ru": "Основания не проводят электрический ток в водных растворах.",
        "ar": "القواعد لا توصل التيار الكهربائي في المحاليل المائية.",
        "zh": "碱在水溶液中不导电。",
        "ku": "Çareseriyên avî yên bazan herikîna elektrîkê naguhezînin."
      },
      "whyTrapIsFalse": {
        "tr": "Bazlar suda katyon ve OH- iyonlarına ayrışır; çözeltide serbest iyonlar bulunduğu için sulu çözeltileri elektrik akımını iletir.",
        "en": "Bases dissociate in water into cations and OH- ions; because the solution contains free ions, aqueous solutions of bases conduct electric current.",
        "de": "Basen zerfallen in Wasser in Kationen und OH--Ionen; da die Lösung frei bewegliche Ionen enthält, leiten wässrige Basenlösungen den elektrischen Strom.",
        "fr": "Les bases se dissocient dans l'eau en cations et en ions OH- ; comme la solution contient des ions libres, les solutions aqueuses de bases conduisent le courant électrique.",
        "ru": "В воде основания диссоциируют на катионы и ионы OH-; так как в растворе есть свободные ионы, водные растворы оснований проводят электрический ток.",
        "ar": "تتفكك القواعد في الماء إلى كاتيونات وأيونات OH-؛ ولأن المحلول يحتوي على أيونات حرة فإن محاليل القواعد المائية توصل التيار الكهربائي.",
        "zh": "碱在水中电离出阳离子和 OH-；溶液中有自由移动的离子，所以碱的水溶液能导电。",
        "ku": "Baz di avê de dibin katyon û îyonên OH-; ji ber ku di çareseriyê de îyonên azad hene, çareseriyên avî yên bazan herikîna elektrîkê diguhezînin."
      }
    },
    {
      "id": "u09-f03",
      "fact": {
        "tr": "25 °C'de pH < 7 asidik, pH = 7 nötr, pH > 7 baziktir.",
        "en": "At 25 °C, pH < 7 is acidic, pH = 7 is neutral, pH > 7 is basic.",
        "de": "Bei 25 °C ist pH < 7 sauer, pH = 7 ist neutral, pH > 7 ist basisch.",
        "fr": "À 25 °C, un pH < 7 est acide, un pH = 7 est neutre, un pH > 7 est basique.",
        "ru": "При 25 °C pH < 7 — кислая среда, pH = 7 — нейтральная, pH > 7 — щелочная.",
        "ar": "عند 25 °C يكون المحلول حمضيًا إذا كان pH < 7، ومتعادلًا إذا كان pH = 7، وقاعديًا إذا كان pH > 7.",
        "zh": "25 °C 时，pH < 7 为酸性，pH = 7 为中性，pH > 7 为碱性。",
        "ku": "Di 25 °C de pH < 7 asîdî ye, pH = 7 bêalî ye, pH > 7 bazî ye."
      },
      "trap": {
        "tr": "25 °C'de pH değeri 8 olan bir çözelti asidiktir.",
        "en": "A solution with a pH of 8 at 25 °C is acidic.",
        "de": "Eine Lösung mit einem pH-Wert von 8 bei 25 °C ist sauer.",
        "fr": "Une solution avec un pH de 8 à 25 °C est acide.",
        "ru": "Раствор с pH 8 при 25 °C кислый.",
        "ar": "المحلول ذو الرقم الهيدروجيني 8 عند 25 °C يكون حمضيًا.",
        "zh": "25 °C 时，pH 为 8 的溶液呈酸性。",
        "ku": "Di 25 °C de çareseriyeke ku pH-a wê 8 e asîdî ye."
      },
      "whyTrapIsFalse": {
        "tr": "25 °C'de nötrlük sınırı pH = 7'dir; pH değeri 8 bu sınırın üzerinde olduğundan çözelti asidik değil baziktir.",
        "en": "At 25 °C the neutral point is pH = 7; a pH of 8 lies above this value, so the solution is basic, not acidic.",
        "de": "Bei 25 °C liegt der Neutralpunkt bei pH = 7; ein pH-Wert von 8 liegt darüber, die Lösung ist also basisch und nicht sauer.",
        "fr": "À 25 °C, la neutralité correspond à pH = 7 ; un pH de 8 est supérieur à cette valeur, la solution est donc basique et non acide.",
        "ru": "При 25 °C нейтральной среде соответствует pH = 7; pH 8 больше этого значения, поэтому раствор не кислый, а щелочной.",
        "ar": "عند 25 °C يكون حد التعادل pH = 7؛ والقيمة 8 أكبر منه، لذا فالمحلول قاعدي وليس حمضيًا.",
        "zh": "25 °C 时中性点为 pH = 7；pH 为 8 大于该值，所以溶液呈碱性而非酸性。",
        "ku": "Di 25 °C de sînorê bêalîbûnê pH = 7 e; pH 8 ji vî sînorî mezintir e, ji ber vê yekê çareserî ne asîdî, bazî ye."
      }
    },
    {
      "id": "u09-f04",
      "fact": {
        "tr": "Aktif metaller (Na, K, Mg, Fe vb.) HCl ve seyreltik H2SO4 gibi asitlerle tepkimeye girdiğinde H2 gazı açığa çıkarır.",
        "en": "When active metals (Na, K, Mg, Fe, etc.) react with acids such as HCl and dilute H2SO4, they release H2 gas.",
        "de": "Wenn aktive Metalle (Na, K, Mg, Fe usw.) mit Säuren wie HCl und verdünnter H2SO4 reagieren, setzen sie H2-Gas frei.",
        "fr": "Lorsque les métaux actifs (Na, K, Mg, Fe, etc.) réagissent avec des acides comme HCl et H2SO4 dilué, ils libèrent du gaz H2.",
        "ru": "Активные металлы (Na, K, Mg, Fe и др.) при взаимодействии с такими кислотами, как HCl и разбавленная H2SO4, выделяют газ H2.",
        "ar": "تطلق الفلزات النشطة (Na وK وMg وFe وغيرها) غاز H2 عند تفاعلها مع أحماض مثل HCl وH2SO4 المخفف.",
        "zh": "活泼金属(Na、K、Mg、Fe 等)与 HCl、稀 H2SO4 等酸反应时放出 H2 气体。",
        "ku": "Dema metalên çalak (Na, K, Mg, Fe hwd.) bi asîdên wek HCl û H2SO4-a sist re dikevin reaksiyonê, gaza H2 derdixin."
      },
      "trap": {
        "tr": "Aktif metaller seyreltik HCl ile tepkimeye girdiğinde SO2 gazı oluşturur.",
        "en": "When active metals react with dilute HCl, they form SO2 gas.",
        "de": "Wenn aktive Metalle mit verdünnter HCl reagieren, bilden sie SO2-Gas.",
        "fr": "Lorsque les métaux actifs réagissent avec HCl dilué, ils forment du gaz SO2.",
        "ru": "При взаимодействии активных металлов с разбавленной HCl образуется газ SO2.",
        "ar": "تكوّن الفلزات النشطة غاز SO2 عند تفاعلها مع HCl المخفف.",
        "zh": "活泼金属与稀 HCl 反应时生成 SO2 气体。",
        "ku": "Dema metalên çalak bi HCl-a sist re dikevin reaksiyonê, gaza SO2 çêdikin."
      },
      "whyTrapIsFalse": {
        "tr": "HCl kükürt içermediği için SO2 oluşturamaz; aktif metal asitteki H+ iyonlarını indirger ve H2 gazı açığa çıkar. SO2, sıcak derişik H2SO4 ile tepkimelerde oluşur.",
        "en": "HCl contains no sulfur, so it cannot form SO2; the active metal reduces the H+ ions of the acid and H2 gas is released. SO2 forms in reactions with hot concentrated H2SO4.",
        "de": "HCl enthält keinen Schwefel und kann daher kein SO2 bilden; das aktive Metall reduziert die H+-Ionen der Säure, und H2-Gas entsteht. SO2 entsteht bei Reaktionen mit heißer konzentrierter H2SO4.",
        "fr": "HCl ne contient pas de soufre et ne peut donc pas former de SO2 ; le métal actif réduit les ions H+ de l'acide et du H2 se dégage. Le SO2 se forme dans les réactions avec H2SO4 concentré et chaud.",
        "ru": "HCl не содержит серы, поэтому не может образовать SO2; активный металл восстанавливает ионы H+ кислоты, и выделяется газ H2. SO2 образуется в реакциях с горячей концентрированной H2SO4.",
        "ar": "لا يحتوي HCl على الكبريت فلا يمكنه تكوين SO2؛ إذ يختزل الفلز النشط أيونات H+ في الحمض ويتصاعد غاز H2. أما SO2 فيتكوّن في التفاعلات مع H2SO4 المركّز الساخن.",
        "zh": "HCl 不含硫，不可能生成 SO2；活泼金属还原酸中的 H+ 离子，放出 H2 气体。SO2 是在与热浓 H2SO4 的反应中生成的。",
        "ku": "HCl kukurt nahewîne, ji ber vê yekê nikare SO2 çêbike; metala çalak îyonên H+ yên asîdê redûkte dike û gaza H2 derdikeve. SO2 di reaksiyonên bi H2SO4-a tîr a germ re çêdibe."
      }
    },
    {
      "id": "u09-f05",
      "fact": {
        "tr": "Yarı soy metaller (Cu, Ag, Hg) HCl ve seyreltik H2SO4 gibi yükseltgen olmayan asitlerle tepkime vermez; bu asitlerden H2 gazı açığa çıkaramaz.",
        "en": "Semi-noble metals (Cu, Ag, Hg) do not react with non-oxidizing acids such as HCl and dilute H2SO4; they cannot release H2 gas from these acids.",
        "de": "Halbedelmetalle (Cu, Ag, Hg) reagieren nicht mit nicht oxidierenden Säuren wie HCl und verdünnter H2SO4; aus diesen Säuren können sie kein H2-Gas freisetzen.",
        "fr": "Les métaux semi-nobles (Cu, Ag, Hg) ne réagissent pas avec les acides non oxydants comme HCl et H2SO4 dilué ; ils ne peuvent pas en libérer de dihydrogène H2.",
        "ru": "Полублагородные металлы (Cu, Ag, Hg) не реагируют с кислотами-неокислителями, такими как HCl и разбавленная H2SO4, и не вытесняют из них газ H2.",
        "ar": "لا تتفاعل الفلزات شبه النبيلة (Cu وAg وHg) مع الأحماض غير المؤكسِدة مثل HCl وH2SO4 المخفف، ولا تستطيع تحرير غاز H2 منها.",
        "zh": "半贵金属(Cu、Ag、Hg)不与 HCl、稀 H2SO4 等非氧化性酸反应，不能从这些酸中置换出 H2 气体。",
        "ku": "Metalên nîvesîl (Cu, Ag, Hg) bi asîdên neoksîdker ên wek HCl û H2SO4-a sulandî re reaksiyonê nakin; ji van asîdan gaza H2 dernaxin."
      },
      "trap": {
        "tr": "Bakır metali HCl çözeltisine atıldığında bolca H2 gazı çıkarır.",
        "en": "When copper metal is thrown into HCl solution, it emits abundant H2 gas.",
        "de": "Wenn Kupfermetall in eine HCl-Lösung geworfen wird, gibt es reichlich H2-Gas ab.",
        "fr": "Lorsque le cuivre métallique est jeté dans une solution de HCl, il émet une quantité abondante de gaz H2.",
        "ru": "Медь, опущенная в раствор HCl, выделяет много газа H2.",
        "ar": "عند إلقاء فلز النحاس في محلول حمض الهيدروكلوريك (HCl)، ينطلق غاز H2 بكثرة.",
        "zh": "把铜投入 HCl 溶液中会放出大量 H2 气体。",
        "ku": "Dema metala sifir tê avêtin nav çareseriya HCl, gelek gaza H2 derdixe."
      },
      "whyTrapIsFalse": {
        "tr": "Bakır hidrojenden daha az aktiftir ve HCl'deki H+ iyonlarını indirgeyemez; bu yüzden Cu ile HCl arasında tepkime olmaz, H2 gazı çıkmaz.",
        "en": "Copper is less active than hydrogen and cannot reduce the H+ ions in HCl; therefore Cu and HCl do not react and no H2 gas is released.",
        "de": "Kupfer ist weniger aktiv als Wasserstoff und kann die H+-Ionen der HCl nicht reduzieren; daher reagieren Cu und HCl nicht, und es entsteht kein H2-Gas.",
        "fr": "Le cuivre est moins actif que l'hydrogène et ne peut pas réduire les ions H+ de HCl ; Cu et HCl ne réagissent donc pas et aucun H2 ne se dégage.",
        "ru": "Медь менее активна, чем водород, и не может восстановить ионы H+ соляной кислоты; поэтому Cu с HCl не реагирует и газ H2 не выделяется.",
        "ar": "النحاس أقل نشاطًا من الهيدروجين ولا يستطيع اختزال أيونات H+ في HCl؛ لذلك لا يحدث تفاعل بين Cu وHCl ولا يتصاعد غاز H2.",
        "zh": "铜的活泼性比氢弱，不能还原 HCl 中的 H+ 离子；因此 Cu 与 HCl 不反应，不会放出 H2。",
        "ku": "Sifir ji hîdrojenê kêmtir çalak e û nikare îyonên H+ yên di HCl de redûkte bike; ji ber vê yekê di navbera Cu û HCl de reaksiyon çênabe û gaza H2 dernakeve."
      },
      "osymTip": {
        "tr": "Cu + HCl → tepkime gerçekleşmez; H2 gazı çıkmaz.",
        "en": "Cu + HCl → no reaction; no H2 gas is released.",
        "de": "Cu + HCl → keine Reaktion; es entsteht kein H2-Gas.",
        "fr": "Cu + HCl → pas de réaction ; aucun dégagement de H2.",
        "ru": "Cu + HCl → реакция не идёт; газ H2 не выделяется.",
        "ar": "Cu + HCl → لا يحدث تفاعل؛ لا يتصاعد غاز H2.",
        "zh": "Cu + HCl → 不反应；不放出 H2 气体。",
        "ku": "Cu + HCl → reaksiyon çênabe; gaza H2 dernakeve."
      }
    },
    {
      "id": "u09-f06",
      "fact": {
        "tr": "Yarı soy metaller asitlerden yalnızca derişik HNO3 (NO2 gazı), seyreltik HNO3 (NO gazı) ve sıcak derişik H2SO4 (SO2 gazı) ile tepkime verir.",
        "en": "Among acids, semi-noble metals react only with concentrated HNO3 (NO2 gas), dilute HNO3 (NO gas) and hot concentrated H2SO4 (SO2 gas).",
        "de": "Von den Säuren reagieren Halbedelmetalle nur mit konzentrierter HNO3 (NO2-Gas), verdünnter HNO3 (NO-Gas) und heißer konzentrierter H2SO4 (SO2-Gas).",
        "fr": "Parmi les acides, les métaux semi-nobles réagissent uniquement avec HNO3 concentré (gaz NO2), HNO3 dilué (gaz NO) et H2SO4 concentré chaud (gaz SO2).",
        "ru": "Из кислот полублагородные металлы реагируют только с концентрированной HNO3 (газ NO2), разбавленной HNO3 (газ NO) и горячей концентрированной H2SO4 (газ SO2).",
        "ar": "من بين الأحماض، لا تتفاعل الفلزات شبه النبيلة إلا مع HNO3 المركز (غاز NO2) وHNO3 المخفف (غاز NO) وH2SO4 المركز الساخن (غاز SO2).",
        "zh": "在酸中，半贵金属只与浓 HNO3 (生成 NO2 气体)、稀 HNO3 (生成 NO 气体)和热的浓 H2SO4 (生成 SO2 气体)反应。",
        "ku": "Ji asîdan, metalên nîvesîl tenê bi HNO3-a tîr (gaza NO2), HNO3-a sist (gaza NO) û H2SO4-a tîr a germ (gaza SO2) re dikevin reaksiyonê."
      },
      "trap": {
        "tr": "Bakır HNO3 ile tepkime verdiğinde H2 gazı üretir.",
        "en": "When copper reacts with HNO3, it produces H2 gas.",
        "de": "Wenn Kupfer mit HNO3 reagiert, entsteht H2-Gas.",
        "fr": "Lorsque le cuivre réagit avec le HNO3, il produit du gaz H2.",
        "ru": "При взаимодействии меди с HNO3 выделяется газ H2.",
        "ar": "ينتج النحاس غاز H2 عند تفاعله مع HNO3.",
        "zh": "铜与 HNO3 反应时生成 H2 气体。",
        "ku": "Dema sifir bi HNO3 re dikeve reaksiyonê, gaza H2 çêdike."
      },
      "whyTrapIsFalse": {
        "tr": "Bakır, HNO3'teki H+ iyonlarıyla değil nitrat iyonunun yükseltgen etkisiyle tepkimeye girer; bu nedenle H2 değil, derişik asitte NO2, seyreltik asitte NO gazı oluşur.",
        "en": "Copper reacts not with the H+ ions of HNO3 but through the oxidizing action of the nitrate ion; so instead of H2, NO2 forms with the concentrated acid and NO with the dilute acid.",
        "de": "Kupfer reagiert nicht mit den H+-Ionen der HNO3, sondern durch die oxidierende Wirkung des Nitrat-Ions; daher entsteht statt H2 mit konzentrierter Säure NO2 und mit verdünnter Säure NO.",
        "fr": "Le cuivre ne réagit pas avec les ions H+ de HNO3 mais grâce au pouvoir oxydant de l'ion nitrate ; au lieu de H2, il se forme du NO2 avec l'acide concentré et du NO avec l'acide dilué.",
        "ru": "Медь реагирует не с ионами H+ азотной кислоты, а за счёт окислительного действия нитрат-иона; поэтому выделяется не H2, а NO2 (с концентрированной кислотой) или NO (с разбавленной).",
        "ar": "لا يتفاعل النحاس مع أيونات H+ في HNO3 بل بفعل الأثر المؤكسد لأيون النترات؛ لذلك يتكوّن بدلًا من H2 غاز NO2 مع الحمض المركّز وغاز NO مع الحمض المخفّف.",
        "zh": "铜不是与 HNO3 中的 H+ 反应，而是因硝酸根离子的氧化性而反应；因此不生成 H2，浓硝酸中生成 NO2，稀硝酸中生成 NO。",
        "ku": "Sifir ne bi îyonên H+ yên HNO3, bi bandora oksîdant a îyona nîtratê dikeve reaksiyonê; ji ber vê yekê li şûna H2, bi asîda tîr re NO2, bi asîda sist re NO çêdibe."
      }
    },
    {
      "id": "u09-f07",
      "fact": {
        "tr": "Tam soy metaller (Au, Pt) HCl, HNO3 ve H2SO4 gibi asitlerin hiçbiriyle tek başına tepkime vermez; kral suyunda (3 hacim derişik HCl + 1 hacim derişik HNO3) çözünür.",
        "en": "Noble metals (Au, Pt) do not react with any of the acids such as HCl, HNO3 and H2SO4 on its own; they dissolve in aqua regia (3 volumes of concentrated HCl + 1 volume of concentrated HNO3).",
        "de": "Edelmetalle (Au, Pt) reagieren mit keiner der Säuren wie HCl, HNO3 und H2SO4 allein; sie lösen sich in Königswasser (3 Volumenteile konzentrierte HCl + 1 Volumenteil konzentrierte HNO3).",
        "fr": "Les métaux nobles (Au, Pt) ne réagissent avec aucun des acides tels que HCl, HNO3 et H2SO4 pris seul ; ils se dissolvent dans l'eau régale (3 volumes de HCl concentré + 1 volume de HNO3 concentré).",
        "ru": "Благородные металлы (Au, Pt) по отдельности не реагируют ни с HCl, ни с HNO3, ни с H2SO4; они растворяются в царской водке (3 объёма концентрированной HCl + 1 объём концентрированной HNO3).",
        "ar": "لا تتفاعل الفلزات النبيلة (Au، Pt) مع أيٍّ من الأحماض مثل HCl وHNO3 وH2SO4 منفردًا؛ وتذوب في الماء الملكي (3 حجوم من HCl المركّز + 1 حجم من HNO3 المركّز).",
        "zh": "贵金属(Au、Pt)不与 HCl、HNO3、H2SO4 等任何一种酸单独反应；它们能溶于王水(3 体积浓 HCl + 1 体积浓 HNO3)。",
        "ku": "Metalên esîl (Au, Pt) bi tu ji asîdên wek HCl, HNO3 û H2SO4 re bi tena serê wê nakevin reaksiyonê; di ava qralî de (3 qebare HCl-a tîr + 1 qebare HNO3-a tîr) dihelin."
      },
      "trap": {
        "tr": "Altın derişik sülfürik asitte hızla çözünerek H2 gazı çıkarır.",
        "en": "Gold dissolves rapidly in concentrated sulfuric acid, releasing H2 gas.",
        "de": "Gold löst sich in konzentrierter Schwefelsäure schnell auf und setzt H2-Gas frei.",
        "fr": "L'or se dissout rapidement dans l'acide sulfurique concentré, libérant du gaz H2.",
        "ru": "Золото быстро растворяется в концентрированной серной кислоте с выделением газа H2.",
        "ar": "يذوب الذهب بسرعة في حمض الكبريتيك المركز، ويطلق غاز H2.",
        "zh": "金在浓硫酸中迅速溶解并放出 H2 气体。",
        "ku": "Zêr di asîda sulfurîk a tîr de zû dihele û gaza H2 derdixe."
      },
      "whyTrapIsFalse": {
        "tr": "Altın, derişik H2SO4 dahil tek başına hiçbir asitle tepkime vermez; kral suyunda çözündüğünde bile H2 gazı açığa çıkmaz.",
        "en": "Gold does not react with any single acid, concentrated H2SO4 included; even when it dissolves in aqua regia no H2 gas is released.",
        "de": "Gold reagiert mit keiner einzelnen Säure, auch nicht mit konzentrierter H2SO4; selbst beim Lösen in Königswasser wird kein H2-Gas frei.",
        "fr": "L'or ne réagit avec aucun acide pris seul, y compris H2SO4 concentré ; même lorsqu'il se dissout dans l'eau régale, il ne se dégage pas de H2.",
        "ru": "Золото не реагирует ни с одной кислотой в отдельности, в том числе с концентрированной H2SO4; даже при растворении в царской водке газ H2 не выделяется.",
        "ar": "لا يتفاعل الذهب مع أي حمض منفرد بما في ذلك H2SO4 المركّز؛ وحتى عند ذوبانه في الماء الملكي لا يتصاعد غاز H2.",
        "zh": "金不与任何单一的酸反应，包括浓 H2SO4；即使溶于王水也不会放出 H2 气体。",
        "ku": "Zêr bi tu asîdê re bi tena serê wê, H2SO4-a tîr jî tê de, nakeve reaksiyonê; heta dema di ava qralî de dihele jî gaza H2 dernakeve."
      }
    },
    {
      "id": "u09-f08",
      "fact": {
        "tr": "Amfoter metaller (Zn ve Al gibi) hem asitlerle hem de NaOH, KOH gibi kuvvetli bazlarla tepkimeye girerek H2 gazı açığa çıkarır.",
        "en": "Amphoteric metals (such as Zn and Al) react both with acids and with strong bases such as NaOH and KOH, releasing H2 gas.",
        "de": "Amphotere Metalle (wie Zn und Al) reagieren sowohl mit Säuren als auch mit starken Basen wie NaOH und KOH unter Freisetzung von H2-Gas.",
        "fr": "Les métaux amphotères (comme Zn et Al) réagissent à la fois avec les acides et avec les bases fortes comme NaOH et KOH en libérant du dihydrogène H2.",
        "ru": "Амфотерные металлы (например, Zn и Al) реагируют и с кислотами, и с сильными основаниями (NaOH, KOH) с выделением газа H2.",
        "ar": "تتفاعل الفلزات الأمفوتيرية (مثل Zn وAl) مع الأحماض ومع القواعد القوية مثل NaOH وKOH أيضًا، ويتصاعد غاز H2.",
        "zh": "两性金属(如 Zn、Al)既能与酸反应，也能与 NaOH、KOH 等强碱反应，放出 H2 气体。",
        "ku": "Metalên amfoter (wek Zn û Al) hem bi asîdan hem jî bi bazên bihêz ên wek NaOH û KOH re dikevin reaksiyonê û gaza H2 derdixin."
      },
      "trap": {
        "tr": "Alüminyum bazlarla tepkime vermez, sadece asitlerle tepkimeye girer.",
        "en": "Aluminum does not react with bases, only acids.",
        "de": "Aluminium reagiert nicht mit Basen, sondern nur mit Säuren.",
        "fr": "L'aluminium ne réagit pas avec les bases, seulement avec les acides.",
        "ru": "Алюминий не реагирует с основаниями — только с кислотами.",
        "ar": "لا يتفاعل الألومنيوم مع القواعد، بل يتفاعل مع الأحماض فقط.",
        "zh": "铝不与碱发生反应，只与酸发生反应。",
        "ku": "Alumînyûm bi bazan re nakeve reaksiyonê, tenê bi asîdan re dikeve reaksiyonê."
      },
      "whyTrapIsFalse": {
        "tr": "Alüminyum amfoter bir metaldir; yalnızca asitlerle değil, NaOH gibi kuvvetli bazlarla da tepkimeye girer ve H2 gazı açığa çıkarır.",
        "en": "Aluminium is an amphoteric metal; it reacts not only with acids but also with strong bases such as NaOH, releasing H2 gas.",
        "de": "Aluminium ist ein amphoteres Metall; es reagiert nicht nur mit Säuren, sondern auch mit starken Basen wie NaOH unter Freisetzung von H2-Gas.",
        "fr": "L'aluminium est un métal amphotère ; il réagit non seulement avec les acides mais aussi avec les bases fortes comme NaOH, en libérant du H2.",
        "ru": "Алюминий — амфотерный металл; он реагирует не только с кислотами, но и с сильными основаниями, например NaOH, с выделением газа H2.",
        "ar": "الألومنيوم فلز أمفوتيري؛ فهو لا يتفاعل مع الأحماض فقط بل مع القواعد القوية مثل NaOH أيضًا، ويتصاعد غاز H2.",
        "zh": "铝是两性金属，不仅能与酸反应，也能与 NaOH 等强碱反应并放出 H2 气体。",
        "ku": "Alumînyûm metaleke amfoter e; ne tenê bi asîdan, bi bazên bihêz ên wek NaOH re jî dikeve reaksiyonê û gaza H2 derdixe."
      }
    },
    {
      "id": "u09-f09",
      "fact": {
        "tr": "Karbonatlı bileşikler (CaCO3, NaHCO3) asitlerle tepkimeye girdiğinde CO2 gazı açığa çıkarır.",
        "en": "When carbonate compounds (CaCO3, NaHCO3) react with acids, they release CO2 gas.",
        "de": "Wenn Carbonatverbindungen (CaCO3, NaHCO3) mit Säuren reagieren, setzen sie CO2-Gas frei.",
        "fr": "Lorsque les composés carbonatés (CaCO3, NaHCO3) réagissent avec des acides, ils libèrent du CO2 gazeux.",
        "ru": "Карбонаты и гидрокарбонаты (CaCO3, NaHCO3) при взаимодействии с кислотами выделяют газ CO2.",
        "ar": "تطلق مركبات الكربونات (CaCO3 وNaHCO3) غاز CO2 عند تفاعلها مع الأحماض.",
        "zh": "碳酸盐(CaCO3、NaHCO3)与酸反应时放出 CO2 气体。",
        "ku": "Dema pêkhateyên karbonatî (CaCO3, NaHCO3) bi asîdan re dikevin reaksiyonê, gaza CO2 derdixin."
      },
      "trap": {
        "tr": "Kireç taşı üzerine asit döküldüğünde O2 gazı fışkırır.",
        "en": "When acid is poured on limestone, O2 gas gushes out.",
        "de": "Wenn Säure auf Kalkstein gegossen wird, strömt O2-Gas aus.",
        "fr": "Lorsque de l’acide est versé sur du calcaire, du gaz O2 jaillit.",
        "ru": "Если облить известняк кислотой, бурно выделяется газ O2.",
        "ar": "عند صب حمض على الحجر الجيري يندفع غاز O2.",
        "zh": "把酸倒在石灰石上会冒出 O2 气体。",
        "ku": "Dema asîd li ser kevirê kilsê tê rijandin, gaza O2 bi lez derdikeve."
      },
      "whyTrapIsFalse": {
        "tr": "Karbonatlar asitle tepkimeye girdiğinde karbonat iyonu CO2 ve suya dönüşür; çıkan gaz O2 değil CO2'dir (CaCO3 + 2HCl → CaCl2 + H2O + CO2).",
        "en": "When carbonates react with an acid, the carbonate ion turns into CO2 and water; the gas released is CO2, not O2 (CaCO3 + 2HCl → CaCl2 + H2O + CO2).",
        "de": "Reagieren Carbonate mit einer Säure, wird das Carbonat-Ion zu CO2 und Wasser; das entweichende Gas ist CO2, nicht O2 (CaCO3 + 2HCl → CaCl2 + H2O + CO2).",
        "fr": "Lorsque les carbonates réagissent avec un acide, l'ion carbonate se transforme en CO2 et en eau ; le gaz dégagé est le CO2 et non le O2 (CaCO3 + 2HCl → CaCl2 + H2O + CO2).",
        "ru": "При взаимодействии карбонатов с кислотой карбонат-ион превращается в CO2 и воду; выделяется не O2, а CO2 (CaCO3 + 2HCl → CaCl2 + H2O + CO2).",
        "ar": "عند تفاعل الكربونات مع حمض يتحوّل أيون الكربونات إلى CO2 وماء؛ فالغاز المتصاعد هو CO2 وليس O2 (CaCO3 + 2HCl → CaCl2 + H2O + CO2).",
        "zh": "碳酸盐与酸反应时，碳酸根离子转化为 CO2 和水；放出的气体是 CO2 而不是 O2 (CaCO3 + 2HCl → CaCl2 + H2O + CO2)。",
        "ku": "Dema karbonat bi asîdê re dikevin reaksiyonê, îyona karbonatê dibe CO2 û av; gaza ku derdikeve ne O2, CO2 ye (CaCO3 + 2HCl → CaCl2 + H2O + CO2)."
      }
    },
    {
      "id": "u09-f10",
      "fact": {
        "tr": "Çamaşır suyu (NaClO) ile tuz ruhu (HCl) karıştırılırsa ölümcül klor gazı (Cl2) açığa çıkar; asla karıştırılmamalıdır!",
        "en": "If bleach (NaClO) and hydrochloric acid (HCl) are mixed, deadly chlorine gas (Cl2) is released; It should NEVER be mixed!",
        "de": "Wenn Bleichmittel (NaClO) und Salzsäure (HCl) gemischt werden, wird tödliches Chlorgas (Cl2) freigesetzt; Es sollte NIEMALS gemischt werden!",
        "fr": "Si l'eau de Javel (NaClO) et l'acide chlorhydrique (HCl) sont mélangés, du chlore gazeux mortel (Cl2) est libéré ; Il ne faut JAMAIS le mélanger !",
        "ru": "При смешивании отбеливателя (NaClO) с соляной кислотой (HCl) выделяется смертельно опасный хлор (Cl2); смешивать их ни в коем случае нельзя!",
        "ar": "إذا خُلط المبيِّض (NaClO) مع حمض الهيدروكلوريك (HCl) ينطلق غاز الكلور (Cl2) القاتل؛ فلا يجوز خلطهما أبدًا!",
        "zh": "漂白剂(NaClO)与盐酸(HCl)混合会放出致命的氯气(Cl2)；绝对不能混合使用！",
        "ku": "Eger ava spîker (NaClO) û asîda hîdroklorîk (HCl) tevlî hev bibin, gaza klorê ya kujer (Cl2) derdikeve; TU CARAN nayên tevlihevkirin!"
      },
      "trap": {
        "tr": "Çamaşır suyu ve tuz ruhu karıştırıldığında temizleme gücü iki katına çıkar.",
        "en": "When bleach and spirit of salt (hydrochloric acid) are mixed, the cleaning power doubles.",
        "de": "Wenn Bleichmittel und Salzsäure gemischt werden, verdoppelt sich die Reinigungskraft.",
        "fr": "Lorsque l'eau de Javel et l'esprit de sel sont mélangés, le pouvoir nettoyant double.",
        "ru": "Если смешать отбеливатель с соляной кислотой, чистящее действие усилится вдвое.",
        "ar": "عند خلط المبيِّض مع حمض الهيدروكلوريك (روح الملح) تتضاعف قوة التنظيف.",
        "zh": "漂白剂与盐酸混合后去污能力会加倍。",
        "ku": "Dema ava spîker û asîda hîdroklorîk tên tevlihevkirin, hêza paqijkirinê du qat dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Temizlik maddelerini karıştırmak etkilerini toplamaz; NaClO ile HCl birbiriyle tepkimeye girerek zehirli Cl2 gazı oluşturur ve her iki madde de harcanır.",
        "en": "Mixing cleaning agents does not add up their effects; NaClO and HCl react with each other to form toxic Cl2 gas and both substances are used up.",
        "de": "Das Mischen von Reinigungsmitteln addiert ihre Wirkung nicht; NaClO und HCl reagieren miteinander zu giftigem Cl2-Gas, und beide Stoffe werden verbraucht.",
        "fr": "Mélanger des produits d'entretien n'additionne pas leurs effets ; NaClO et HCl réagissent entre eux en formant du dichlore Cl2 toxique et les deux produits sont consommés.",
        "ru": "При смешивании чистящих средств их действие не складывается; NaClO и HCl реагируют друг с другом с образованием ядовитого газа Cl2, и оба вещества расходуются.",
        "ar": "خلط مواد التنظيف لا يجمع تأثيرها؛ إذ يتفاعل NaClO مع HCl مكوّنين غاز Cl2 السام وتُستهلك المادتان كلتاهما.",
        "zh": "混合清洁剂并不会使效果叠加；NaClO 与 HCl 相互反应生成有毒的 Cl2 气体，两种物质都被消耗掉。",
        "ku": "Tevlihevkirina madeyên paqijiyê bandorên wan li hev zêde nake; NaClO û HCl bi hev re dikevin reaksiyonê, gaza Cl2 ya jehrî çêdikin û her du made jî tên xerckirin."
      }
    },
    {
      "id": "u09-f11",
      "fact": {
        "tr": "Bir asit ile bir baz arasındaki tepkimeye nötralleşme denir; bu tepkimede tuz ve su oluşur (HCl + NaOH → NaCl + H2O).",
        "en": "The reaction between an acid and a base is called neutralization; it produces a salt and water (HCl + NaOH → NaCl + H2O).",
        "de": "Die Reaktion zwischen einer Säure und einer Base heißt Neutralisation; dabei entstehen ein Salz und Wasser (HCl + NaOH → NaCl + H2O).",
        "fr": "La réaction entre un acide et une base s'appelle la neutralisation ; elle produit un sel et de l'eau (HCl + NaOH → NaCl + H2O).",
        "ru": "Реакция между кислотой и основанием называется нейтрализацией; при этом образуются соль и вода (HCl + NaOH → NaCl + H2O).",
        "ar": "يُسمّى التفاعل بين حمض وقاعدة تفاعل التعادل؛ وينتج عنه ملح وماء (HCl + NaOH → NaCl + H2O).",
        "zh": "酸与碱之间的反应称为中和反应，反应生成盐和水(HCl + NaOH → NaCl + H2O)。",
        "ku": "Ji reaksiyona di navbera asîdekê û bazekê de re neutralîzasyon tê gotin; di vê reaksiyonê de xwê û av çêdibin (HCl + NaOH → NaCl + H2O)."
      },
      "trap": {
        "tr": "Bir asit ile bir baz tepkimeye girdiğinde tuzla birlikte H2 gazı oluşur.",
        "en": "When an acid reacts with a base, H2 gas is formed together with the salt.",
        "de": "Wenn eine Säure mit einer Base reagiert, entsteht zusammen mit dem Salz H2-Gas.",
        "fr": "Lorsqu'un acide réagit avec une base, du dihydrogène H2 se forme en même temps que le sel.",
        "ru": "При реакции кислоты с основанием вместе с солью образуется газ H2.",
        "ar": "عندما يتفاعل حمض مع قاعدة يتكوّن غاز H2 مع الملح.",
        "zh": "酸与碱反应时，除盐外还会生成 H2 气体。",
        "ku": "Dema asîdek bi bazekê re dikeve reaksiyonê, ligel xwê gaza H2 jî çêdibe."
      },
      "whyTrapIsFalse": {
        "tr": "Nötralleşmede asidin H+ iyonu bazın OH- iyonuyla birleşerek su oluşturur; H2 gazı asit-baz tepkimesinde değil, aktif metal-asit tepkimesinde açığa çıkar.",
        "en": "In neutralization the H+ ion of the acid combines with the OH- ion of the base to form water; H2 gas is released in active metal–acid reactions, not in acid–base reactions.",
        "de": "Bei der Neutralisation verbindet sich das H+-Ion der Säure mit dem OH--Ion der Base zu Wasser; H2-Gas entsteht bei Reaktionen aktiver Metalle mit Säuren, nicht bei Säure-Base-Reaktionen.",
        "fr": "Lors de la neutralisation, l'ion H+ de l'acide s'unit à l'ion OH- de la base pour former de l'eau ; le H2 se dégage dans les réactions métal actif–acide, pas dans les réactions acide–base.",
        "ru": "При нейтрализации ион H+ кислоты соединяется с ионом OH- основания, образуя воду; газ H2 выделяется в реакциях активных металлов с кислотами, а не в реакциях кислоты с основанием.",
        "ar": "في التعادل يتحد أيون H+ من الحمض مع أيون OH- من القاعدة مكوّنًا الماء؛ أما غاز H2 فيتصاعد في تفاعل الفلز النشط مع الحمض لا في تفاعل الحمض مع القاعدة.",
        "zh": "中和反应中，酸的 H+ 与碱的 OH- 结合生成水；H2 气体是在活泼金属与酸的反应中放出的，而不是在酸碱反应中。",
        "ku": "Di neutralîzasyonê de îyona H+ ya asîdê bi îyona OH- ya bazê re dibe yek û av çêdibe; gaza H2 ne di reaksiyona asîd-bazê de, di reaksiyona metala çalak û asîdê de derdikeve."
      }
    },
    {
      "id": "u09-f12",
      "fact": {
        "tr": "Amonyak (NH3) yapısında OH- iyonu bulunmadığı hâlde suyla tepkimesinde OH- iyonu oluşturduğundan bazdır (NH3 + H2O → NH4+ + OH-).",
        "en": "Ammonia (NH3) contains no OH- ion in its structure, yet it is a base because it forms OH- ions when it reacts with water (NH3 + H2O → NH4+ + OH-).",
        "de": "Ammoniak (NH3) enthält in seiner Struktur kein OH--Ion, ist aber eine Base, weil es bei der Reaktion mit Wasser OH--Ionen bildet (NH3 + H2O → NH4+ + OH-).",
        "fr": "L'ammoniac (NH3) ne contient pas d'ion OH- dans sa structure, mais c'est une base car il forme des ions OH- en réagissant avec l'eau (NH3 + H2O → NH4+ + OH-).",
        "ru": "Аммиак (NH3) не содержит в своём составе ионов OH-, но является основанием, так как при взаимодействии с водой образует ионы OH- (NH3 + H2O → NH4+ + OH-).",
        "ar": "لا تحتوي الأمونيا (NH3) في تركيبها على أيون OH-، ومع ذلك فهي قاعدة لأنها تكوّن أيونات OH- عند تفاعلها مع الماء (NH3 + H2O → NH4+ + OH-).",
        "zh": "氨(NH3)的结构中没有 OH- 离子，但它与水反应会生成 OH- 离子，因此是碱(NH3 + H2O → NH4+ + OH-)。",
        "ku": "Amonyak (NH3) di avahiya xwe de îyona OH- nahewîne, lê ji ber ku di reaksiyona bi avê re îyona OH- çêdike, baz e (NH3 + H2O → NH4+ + OH-)."
      },
      "trap": {
        "tr": "Yapısında OH- iyonu bulunmayan bir madde baz özelliği gösteremez.",
        "en": "A substance that has no OH- ion in its structure cannot behave as a base.",
        "de": "Ein Stoff, der in seiner Struktur kein OH--Ion enthält, kann keine basischen Eigenschaften zeigen.",
        "fr": "Une substance qui ne contient pas d'ion OH- dans sa structure ne peut pas se comporter comme une base.",
        "ru": "Вещество, в составе которого нет иона OH-, не может проявлять основные свойства.",
        "ar": "لا يمكن لمادة لا تحتوي في تركيبها على أيون OH- أن تُظهر خواص القاعدة.",
        "zh": "结构中不含 OH- 离子的物质不可能表现出碱性。",
        "ku": "Madeyeke ku di avahiya wê de îyona OH- tune be nikare taybetmendiya bazê nîşan bide."
      },
      "whyTrapIsFalse": {
        "tr": "Arrhenius'a göre baz, suya OH- iyonu kazandıran maddedir; OH- iyonunun maddenin yapısında hazır bulunması gerekmez, NH3 bu iyonu suyla tepkimesiyle oluşturur.",
        "en": "According to Arrhenius, a base is a substance that increases the OH- ions in water; the OH- ion does not have to be present in its structure beforehand—NH3 produces it by reacting with water.",
        "de": "Nach Arrhenius ist eine Base ein Stoff, der dem Wasser OH--Ionen liefert; das OH--Ion muss nicht schon in seiner Struktur vorhanden sein – NH3 bildet es durch Reaktion mit Wasser.",
        "fr": "Selon Arrhenius, une base est une substance qui apporte des ions OH- à l'eau ; l'ion OH- n'a pas besoin d'être présent dans sa structure : NH3 le produit en réagissant avec l'eau.",
        "ru": "По Аррениусу основание — вещество, которое повышает концентрацию ионов OH- в воде; ион OH- не обязательно должен входить в его состав: NH3 образует этот ион при взаимодействии с водой.",
        "ar": "وفق أرهينيوس القاعدة مادة تزيد أيونات OH- في الماء؛ ولا يلزم أن يكون أيون OH- موجودًا مسبقًا في تركيبها، فالأمونيا NH3 تكوّنه بتفاعلها مع الماء.",
        "zh": "根据阿伦尼乌斯理论，碱是能使水中 OH- 离子增加的物质；OH- 不必预先存在于其结构中，NH3 通过与水反应生成 OH-。",
        "ku": "Li gorî Arrhenius baz ew made ye ku îyonên OH- dide avê; ne pêwîst e ku îyona OH- berê di avahiya madeyê de hebe, NH3 vê îyonê bi reaksiyona xwe ya bi avê re çêdike."
      }
    },
    {
      "id": "u09-f13",
      "fact": {
        "tr": "CO2, SO2, SO3 ve NO2 gibi ametal oksitler suyla asidik çözelti, Na2O ve CaO gibi aktif metal oksitleri ise suyla bazik çözelti oluşturur.",
        "en": "Nonmetal oxides such as CO2, SO2, SO3 and NO2 form acidic solutions with water, whereas oxides of active metals such as Na2O and CaO form basic solutions with water.",
        "de": "Nichtmetalloxide wie CO2, SO2, SO3 und NO2 bilden mit Wasser saure Lösungen, Oxide aktiver Metalle wie Na2O und CaO dagegen basische Lösungen.",
        "fr": "Les oxydes de non-métaux comme CO2, SO2, SO3 et NO2 forment avec l'eau des solutions acides, tandis que les oxydes de métaux actifs comme Na2O et CaO forment des solutions basiques.",
        "ru": "Оксиды неметаллов, такие как CO2, SO2, SO3 и NO2, образуют с водой кислые растворы, а оксиды активных металлов, такие как Na2O и CaO, — щелочные растворы.",
        "ar": "تكوّن أكاسيد اللافلزات مثل CO2 وSO2 وSO3 وNO2 محاليل حمضية مع الماء، بينما تكوّن أكاسيد الفلزات النشطة مثل Na2O وCaO محاليل قاعدية مع الماء.",
        "zh": "CO2、SO2、SO3、NO2 等非金属氧化物与水形成酸性溶液，而 Na2O、CaO 等活泼金属氧化物与水形成碱性溶液。",
        "ku": "Oksîdên nemetalan ên wek CO2, SO2, SO3 û NO2 bi avê re çareseriya asîdî, oksîdên metalên çalak ên wek Na2O û CaO jî bi avê re çareseriya bazî çêdikin."
      },
      "trap": {
        "tr": "Sönmemiş kireç (CaO) suda çözündüğünde asidik bir çözelti oluşturur.",
        "en": "Quicklime (CaO) forms an acidic solution when it dissolves in water.",
        "de": "Branntkalk (CaO) bildet beim Lösen in Wasser eine saure Lösung.",
        "fr": "La chaux vive (CaO) forme une solution acide lorsqu'elle se dissout dans l'eau.",
        "ru": "Негашёная известь (CaO) при растворении в воде образует кислый раствор.",
        "ar": "يكوّن الجير الحي (CaO) محلولًا حمضيًا عند ذوبانه في الماء.",
        "zh": "生石灰(CaO)溶于水时形成酸性溶液。",
        "ku": "Kilsa nevemirî (CaO) dema di avê de dihele çareseriyeke asîdî çêdike."
      },
      "whyTrapIsFalse": {
        "tr": "CaO aktif bir metalin oksididir ve suyla Ca(OH)2 bazını oluşturur (CaO + H2O → Ca(OH)2); suyla asidik çözelti oluşturanlar CO2, SO3 gibi ametal oksitlerdir.",
        "en": "CaO is the oxide of an active metal and forms the base Ca(OH)2 with water (CaO + H2O → Ca(OH)2); it is nonmetal oxides such as CO2 and SO3 that form acidic solutions with water.",
        "de": "CaO ist das Oxid eines aktiven Metalls und bildet mit Wasser die Base Ca(OH)2 (CaO + H2O → Ca(OH)2); saure Lösungen mit Wasser bilden Nichtmetalloxide wie CO2 und SO3.",
        "fr": "CaO est l'oxyde d'un métal actif et forme avec l'eau la base Ca(OH)2 (CaO + H2O → Ca(OH)2) ; ce sont les oxydes de non-métaux comme CO2 et SO3 qui forment des solutions acides.",
        "ru": "CaO — оксид активного металла, с водой он образует основание Ca(OH)2 (CaO + H2O → Ca(OH)2); кислые растворы с водой образуют оксиды неметаллов, например CO2 и SO3.",
        "ar": "CaO أكسيد فلز نشط ويكوّن مع الماء القاعدة Ca(OH)2 (CaO + H2O → Ca(OH)2)؛ أما المحاليل الحمضية فتكوّنها أكاسيد اللافلزات مثل CO2 وSO3.",
        "zh": "CaO 是活泼金属的氧化物，与水生成碱 Ca(OH)2 (CaO + H2O → Ca(OH)2)；与水形成酸性溶液的是 CO2、SO3 等非金属氧化物。",
        "ku": "CaO oksîda metaleke çalak e û bi avê re baza Ca(OH)2 çêdike (CaO + H2O → Ca(OH)2); yên ku bi avê re çareseriya asîdî çêdikin oksîdên nemetalan ên wek CO2 û SO3 ne."
      }
    },
    {
      "id": "u09-f14",
      "fact": {
        "tr": "Lavabo açıcılarda NaOH ve KOH gibi kuvvetli bazlar bulunur; bu bazlar yağ ve saç gibi organik tıkanıklıkları parçalar.",
        "en": "Drain openers contain strong bases such as NaOH and KOH; these bases break down organic blockages such as grease and hair.",
        "de": "Abflussreiniger enthalten starke Basen wie NaOH und KOH; diese Basen zersetzen organische Verstopfungen wie Fett und Haare.",
        "fr": "Les déboucheurs contiennent des bases fortes comme NaOH et KOH ; ces bases décomposent les bouchons organiques comme la graisse et les cheveux.",
        "ru": "Средства для прочистки труб содержат сильные основания (NaOH, KOH); они разрушают органические засоры — жир и волосы.",
        "ar": "تحتوي مسلّكات المجاري على قواعد قوية مثل NaOH وKOH؛ وهذه القواعد تفكّك الانسدادات العضوية مثل الدهون والشعر.",
        "zh": "管道疏通剂含有 NaOH、KOH 等强碱，这些碱能分解油脂和头发等有机堵塞物。",
        "ku": "Vekerên lavaboyê bazên bihêz ên wek NaOH û KOH dihewînin; ev baz girtinên organîk ên wek rûn û por perçe dikin."
      },
      "trap": {
        "tr": "Lavabo açıcıların etken maddesi olan NaOH kuvvetli bir asittir.",
        "en": "NaOH, the active ingredient of drain openers, is a strong acid.",
        "de": "NaOH, der Wirkstoff von Abflussreinigern, ist eine starke Säure.",
        "fr": "NaOH, la substance active des déboucheurs, est un acide fort.",
        "ru": "NaOH, действующее вещество средств для прочистки труб, — сильная кислота.",
        "ar": "هيدروكسيد الصوديوم (NaOH)، المادة الفعالة في مسلّكات المجاري، حمض قوي.",
        "zh": "管道疏通剂的有效成分 NaOH 是一种强酸。",
        "ku": "NaOH, ku madeya çalak a vekerên lavaboyê ye, asîdeke bihêz e."
      },
      "whyTrapIsFalse": {
        "tr": "NaOH asit değil, suda tamamen iyonlaşarak OH- iyonu veren kuvvetli bir bazdır; lavabo açıcılar yağ ve saç tıkanıklıklarını bu kuvvetli bazik özellikleriyle parçalar.",
        "en": "NaOH is not an acid but a strong base that ionizes completely in water to give OH- ions; drain openers break down grease and hair blockages through this strongly basic character.",
        "de": "NaOH ist keine Säure, sondern eine starke Base, die in Wasser vollständig ionisiert und Hydroxid-Ionen (OH-) liefert; Abflussreiniger zersetzen Fett- und Haarverstopfungen durch diese stark basische Wirkung.",
        "fr": "NaOH n'est pas un acide mais une base forte qui s'ionise totalement dans l'eau en libérant des ions OH- ; les déboucheurs décomposent les bouchons de graisse et de cheveux grâce à ce caractère fortement basique.",
        "ru": "NaOH — не кислота, а сильное основание: в воде он полностью диссоциирует с образованием ионов OH-; именно благодаря сильным основным свойствам средства для прочистки труб разрушают засоры из жира и волос.",
        "ar": "NaOH ليس حمضًا بل قاعدة قوية تتأين كليًا في الماء معطيةً أيونات OH-؛ ومسلّكات المجاري تفكك انسدادات الدهون والشعر بفضل هذه الخاصية القاعدية القوية.",
        "zh": "NaOH 不是酸，而是在水中完全电离、产生 OH- 离子的强碱；管道疏通剂正是依靠这种强碱性来分解油脂和头发堵塞物。",
        "ku": "NaOH ne asîd e, bazeke bihêz e ku di avê de bi tevahî îyonîze dibe û îyonên OH- dide; vekerên lavaboyê girtinên rûn û porê bi vê taybetmendiya xwe ya bazî ya bihêz perçe dikin."
      }
    },
    {
      "id": "u09-f15",
      "fact": {
        "tr": "Tuzlar iyonik yapılı kristal katılardır; katı hâlde elektriği iletmez, eriyik hâlde ve suda çözündüklerinde iletir.",
        "en": "Salts are crystalline solids with an ionic structure; they do not conduct electricity as solids but conduct when molten or dissolved in water.",
        "de": "Salze sind kristalline Feststoffe mit Ionenstruktur; im festen Zustand leiten sie keinen Strom, wohl aber als Schmelze und in Wasser gelöst.",
        "fr": "Les sels sont des solides cristallins à structure ionique ; ils ne conduisent pas l'électricité à l'état solide, mais la conduisent fondus ou dissous dans l'eau.",
        "ru": "Соли — кристаллические вещества ионного строения; в твёрдом виде они не проводят электрический ток, а в расплаве и в водном растворе проводят.",
        "ar": "الأملاح مواد صلبة بلورية ذات بنية أيونية؛ لا توصل الكهرباء في الحالة الصلبة، لكنها توصلها في الحالة المنصهرة وعند ذوبانها في الماء.",
        "zh": "盐是具有离子结构的晶体；固态时不导电，熔融状态或溶于水后能导电。",
        "ku": "Xwê madeyên hişk ên krîstalî yên bi avahiya îyonîk in; di rewşa hişk de elektrîkê naguhezînin, lê di rewşa heliyayî de û di çareseriya avî de diguhezînin."
      },
      "trap": {
        "tr": "Tuzlar kovalent moleküllerden oluşur.",
        "en": "Salts consist of covalent molecules.",
        "de": "Salze bestehen aus kovalenten Molekülen.",
        "fr": "Les sels sont constitués de molécules covalentes.",
        "ru": "Соли состоят из ковалентных молекул.",
        "ar": "تتكون الأملاح من جزيئات تساهمية.",
        "zh": "盐由共价分子组成。",
        "ku": "Xwê ji molekulên kovalent pêk tên."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzlar ayrı moleküllerden değil, katyon ve anyonların iyonik bağla oluşturduğu kristal örgüden oluşur; bu yüzden eriyikte ve sulu çözeltide iyonlarıyla akım iletirler.",
        "en": "Salts are not made of separate molecules but of a crystal lattice of cations and anions held by ionic bonds; that is why they conduct current through their ions when molten or in aqueous solution.",
        "de": "Salze bestehen nicht aus einzelnen Molekülen, sondern aus einem Kristallgitter von Kationen und Anionen mit Ionenbindung; deshalb leiten sie als Schmelze und in wässriger Lösung über ihre Ionen den Strom.",
        "fr": "Les sels ne sont pas formés de molécules séparées mais d'un réseau cristallin de cations et d'anions unis par liaison ionique ; c'est pourquoi ils conduisent le courant par leurs ions à l'état fondu ou en solution aqueuse.",
        "ru": "Соли состоят не из отдельных молекул, а из кристаллической решётки катионов и анионов, связанных ионной связью; поэтому в расплаве и водном растворе они проводят ток за счёт ионов.",
        "ar": "لا تتكوّن الأملاح من جزيئات منفصلة بل من شبكة بلورية من الكاتيونات والأنيونات المرتبطة برابطة أيونية؛ ولهذا توصل التيار بأيوناتها في الحالة المنصهرة وفي المحلول المائي.",
        "zh": "盐不是由单独的分子构成，而是由阳离子和阴离子通过离子键形成的晶格；因此熔融或在水溶液中时能靠离子导电。",
        "ku": "Xwê ne ji molekulên cuda, ji tora krîstalî ya ku katyon û anyon bi girêdana îyonîk çêdikin pêk tên; ji ber vê yekê di rewşa heliyayî û di çareseriya avî de bi saya îyonên xwe herikînê diguhezînin."
      }
    },
    {
      "id": "u09-f16",
      "fact": {
        "tr": "Yemek sodası NaHCO3 (sodyum bikarbonat), çamaşır sodası ise Na2CO3 (sodyum karbonat) bileşiğidir.",
        "en": "Baking soda is NaHCO3 (sodium bicarbonate), washing soda is Na2CO3 (sodium carbonate).",
        "de": "Natron (Backsoda) ist NaHCO3 (Natriumhydrogencarbonat), Waschsoda ist Na2CO3 (Natriumcarbonat).",
        "fr": "Le bicarbonate de soude est du NaHCO3 (hydrogénocarbonate de sodium), les cristaux de soude sont du Na2CO3 (carbonate de sodium).",
        "ru": "Пищевая сода — это NaHCO3 (гидрокарбонат натрия), а кальцинированная (стиральная) сода — Na2CO3 (карбонат натрия).",
        "ar": "صودا الخبز هي NaHCO3 (بيكربونات الصوديوم)، وصودا الغسيل هي Na2CO3 (كربونات الصوديوم).",
        "zh": "小苏打是 NaHCO3（碳酸氢钠），洗涤碱（纯碱）是 Na2CO3（碳酸钠）。",
        "ku": "Sodaya xwarinê pêkhateya NaHCO3 (bîkarbonata sodyûmê), sodaya cilşûştinê jî pêkhateya Na2CO3 (karbonata sodyûmê) ye."
      },
      "trap": {
        "tr": "Yemek sodası NaOH bileşiğidir.",
        "en": "Baking soda is a NaOH compound.",
        "de": "Natron (Backsoda) ist eine NaOH-Verbindung.",
        "fr": "Le bicarbonate de soude est un composé NaOH.",
        "ru": "Пищевая сода — это NaOH.",
        "ar": "صودا الخبز هي المركب NaOH.",
        "zh": "小苏打的化学式是 NaOH。",
        "ku": "Sodaya xwarinê pêkhateya NaOH ye."
      },
      "whyTrapIsFalse": {
        "tr": "NaOH sud kostik adı verilen yakıcı ve kuvvetli bir bazdır, gıdalarda kullanılamaz; yemek sodası NaHCO3 (sodyum bikarbonat) tuzudur.",
        "en": "NaOH is caustic soda, a corrosive strong base that cannot be used in food; baking soda is the salt NaHCO3 (sodium bicarbonate).",
        "de": "NaOH ist Ätznatron, eine ätzende starke Base, die nicht in Lebensmitteln verwendet werden kann; Natron (Backsoda) ist das Salz NaHCO3 (Natriumhydrogencarbonat).",
        "fr": "NaOH est la soude caustique, une base forte corrosive qui ne peut pas être utilisée dans les aliments ; le bicarbonate de soude est le sel NaHCO3 (hydrogénocarbonate de sodium).",
        "ru": "NaOH — едкий натр (каустическая сода), сильное едкое основание, непригодное для пищи; пищевая сода — соль NaHCO3 (гидрокарбонат натрия).",
        "ar": "NaOH هو الصودا الكاوية، وهي قاعدة قوية أكّالة لا تُستعمل في الأطعمة؛ أما صودا الخبز فهي الملح NaHCO3 (بيكربونات الصوديوم).",
        "zh": "NaOH 是烧碱（苛性钠），一种有腐蚀性的强碱，不能用于食品；小苏打是盐 NaHCO3（碳酸氢钠）。",
        "ku": "NaOH soda kostîk e, bazeke bihêz û xwarker e û di xwarinê de nayê bikaranîn; sodaya xwarinê xwêya NaHCO3 (bîkarbonata sodyûmê) ye."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u09-c01",
      "conceptA": {
        "tr": "Aktif Metal",
        "en": "Active Metal",
        "de": "Aktives Metall",
        "fr": "Métal actif",
        "ru": "Активный металл",
        "ar": "فلز نشط",
        "zh": "活泼金属",
        "ku": "Metala çalak"
      },
      "conceptB": {
        "tr": "Yarı Soy Metal",
        "en": "Semi-Noble Metal",
        "de": "Halbedelmetall",
        "fr": "Métal semi-noble",
        "ru": "Полублагородный металл",
        "ar": "فلز شبه نبيل",
        "zh": "半贵金属",
        "ku": "Metala nîvesîl"
      },
      "distinction": {
        "tr": "Aktif metal (Na, Mg, Fe gibi) HCl ve seyreltik H2SO4 ile H2 gazı verir; yarı soy metal (Cu, Ag, Hg) bu asitlerle tepkime vermez, yalnızca HNO3 ve sıcak derişik H2SO4 ile NO2, NO veya SO2 gazı verir.",
        "en": "An active metal (such as Na, Mg, Fe) gives H2 gas with HCl and dilute H2SO4; a semi-noble metal (Cu, Ag, Hg) does not react with these acids and gives NO2, NO or SO2 gas only with HNO3 and hot concentrated H2SO4.",
        "de": "Ein aktives Metall (wie Na, Mg, Fe) liefert mit HCl und verdünnter H2SO4 H2-Gas; ein Halbedelmetall (Cu, Ag, Hg) reagiert mit diesen Säuren nicht und liefert nur mit HNO3 und heißer konzentrierter H2SO4 NO2-, NO- oder SO2-Gas.",
        "fr": "Un métal actif (comme Na, Mg, Fe) donne du H2 avec HCl et H2SO4 dilué ; un métal semi-noble (Cu, Ag, Hg) ne réagit pas avec ces acides et ne donne du NO2, du NO ou du SO2 qu'avec HNO3 et H2SO4 concentré chaud.",
        "ru": "Активный металл (например, Na, Mg, Fe) с HCl и разбавленной H2SO4 выделяет H2; полублагородный металл (Cu, Ag, Hg) с этими кислотами не реагирует, а с HNO3 и горячей концентрированной H2SO4 даёт NO2, NO или SO2.",
        "ar": "الفلز النشط (مثل Na وMg وFe) يعطي غاز H2 مع HCl وH2SO4 المخفّف؛ أما الفلز شبه النبيل (Cu وAg وHg) فلا يتفاعل مع هذين الحمضين، ولا يعطي غاز NO2 أو NO أو SO2 إلا مع HNO3 وH2SO4 المركّز الساخن.",
        "zh": "活泼金属(如 Na、Mg、Fe)与 HCl 和稀 H2SO4 反应放出 H2；半贵金属(Cu、Ag、Hg)不与这些酸反应，只与 HNO3 和热浓 H2SO4 反应生成 NO2、NO 或 SO2。",
        "ku": "Metala çalak (wek Na, Mg, Fe) bi HCl û H2SO4-a sist re gaza H2 dide; metala nîvesîl (Cu, Ag, Hg) bi van asîdan re nakeve reaksiyonê, tenê bi HNO3 û H2SO4-a tîr a germ re gaza NO2, NO an SO2 dide."
      }
    },
    {
      "id": "u09-c02",
      "conceptA": {
        "tr": "Amfoter Metal",
        "en": "Amphoteric Metal",
        "de": "Amphoteres Metall",
        "fr": "Métal amphotère",
        "ru": "Амфотерный металл",
        "ar": "فلز أمفوتيري",
        "zh": "两性金属",
        "ku": "Metala amfoter"
      },
      "conceptB": {
        "tr": "Tam Soy Metal",
        "en": "Noble Metal",
        "de": "Edelmetall",
        "fr": "Métal noble",
        "ru": "Благородный металл",
        "ar": "فلز نبيل",
        "zh": "贵金属",
        "ku": "Metala esîl"
      },
      "distinction": {
        "tr": "Amfoter metal (Zn, Al gibi) hem asitlerle hem de NaOH gibi kuvvetli bazlarla tepkimeye girerek H2 gazı açığa çıkarır; tam soy metal (Au, Pt) ise tek başına hiçbir asitle ve bazlarla tepkime vermez, yalnızca kral suyunda çözünür.",
        "en": "An amphoteric metal (such as Zn, Al) reacts both with acids and with strong bases such as NaOH, releasing H2 gas; a noble metal (Au, Pt) reacts neither with any single acid nor with bases and dissolves only in aqua regia.",
        "de": "Ein amphoteres Metall (wie Zn, Al) reagiert sowohl mit Säuren als auch mit starken Basen wie NaOH unter Freisetzung von H2-Gas; ein Edelmetall (Au, Pt) reagiert weder mit einer einzelnen Säure noch mit Basen und löst sich nur in Königswasser.",
        "fr": "Un métal amphotère (comme Zn, Al) réagit aussi bien avec les acides qu'avec les bases fortes comme NaOH en dégageant du H2 ; un métal noble (Au, Pt) ne réagit ni avec un acide seul ni avec les bases et ne se dissout que dans l'eau régale.",
        "ru": "Амфотерный металл (например, Zn, Al) реагирует и с кислотами, и с сильными основаниями, такими как NaOH, с выделением газа H2; благородный металл (Au, Pt) не реагирует ни с одной кислотой в отдельности, ни с основаниями и растворяется только в царской водке.",
        "ar": "الفلز الأمفوتيري (مثل Zn وAl) يتفاعل مع الأحماض ومع القواعد القوية مثل NaOH مطلقًا غاز H2؛ أما الفلز النبيل (Au وPt) فلا يتفاعل مع أي حمض منفرد ولا مع القواعد، ولا يذوب إلا في الماء الملكي.",
        "zh": "两性金属(如 Zn、Al)既能与酸反应，也能与 NaOH 等强碱反应，并放出 H2；贵金属(Au、Pt)不与任何单一的酸反应，也不与碱反应，只溶于王水。",
        "ku": "Metala amfoter (wek Zn, Al) hem bi asîdan hem jî bi bazên bihêz ên wek NaOH re dikeve reaksiyonê û gaza H2 derdixe; metala esîl (Au, Pt) bi tena serê wê ne bi tu asîdê re ne jî bi bazan re dikeve reaksiyonê, tenê di ava qralî de dihele."
      }
    },
    {
      "id": "u09-c03",
      "conceptA": {
        "tr": "Kuvvetli Asit",
        "en": "Strong Acid",
        "de": "Starke Säure",
        "fr": "Acide fort",
        "ru": "Сильная кислота",
        "ar": "حمض قوي",
        "zh": "强酸",
        "ku": "Asîda bihêz"
      },
      "conceptB": {
        "tr": "Zayıf Asit",
        "en": "Weak Acid",
        "de": "Schwache Säure",
        "fr": "Acide faible",
        "ru": "Слабая кислота",
        "ar": "حمض ضعيف",
        "zh": "弱酸",
        "ku": "Asîda qels"
      },
      "distinction": {
        "tr": "Kuvvetli asitler suda %100 iyonlaşır (HCl, HNO3); zayıf asitler suda kısmen iyonlaşarak denge kurar (HF, CH3COOH).",
        "en": "Strong acids ionize 100% in water (HCl, HNO3); weak acids ionize only partially in water and establish an equilibrium (HF, CH3COOH).",
        "de": "Eine starke Säure ionisiert in Wasser zu 100 % (HCl, HNO3); eine schwache Säure ionisiert in Wasser nur teilweise und bildet ein Gleichgewicht (HF, CH3COOH).",
        "fr": "Un acide fort s'ionise à 100 % dans l'eau (HCl, HNO3) ; un acide faible ne s'ionise que partiellement dans l'eau et établit un équilibre (HF, CH3COOH).",
        "ru": "Сильная кислота диссоциирует в воде на 100 % (HCl, HNO3); слабая кислота диссоциирует в воде лишь частично, и устанавливается равновесие (HF, CH3COOH).",
        "ar": "في الحمض القوي يكون التأين في الماء بنسبة 100% (HCl، HNO3)؛ أما الأحماض الضعيفة فتتأين جزئيًا في الماء وتصل إلى حالة اتزان (HF، CH3COOH).",
        "zh": "强酸在水中 100% 电离(HCl、HNO3)；弱酸在水中部分电离并建立平衡(HF、CH3COOH)。",
        "ku": "Asîda bihêz di avê de %100 îyonîze dibe (HCl, HNO3); asîda qels di avê de tenê beşek jê îyonîze dibe û hevsengî ava dibe (HF, CH3COOH)."
      }
    },
    {
      "id": "u09-c04",
      "conceptA": {
        "tr": "Asidik Oksit",
        "en": "Acidic Oxide",
        "de": "Saures Oxid",
        "fr": "Oxyde acide",
        "ru": "Кислотный оксид",
        "ar": "أكسيد حمضي",
        "zh": "酸性氧化物",
        "ku": "Oksîda asîdî"
      },
      "conceptB": {
        "tr": "Bazik Oksit",
        "en": "Basic Oxide",
        "de": "Basisches Oxid",
        "fr": "Oxyde basique",
        "ru": "Основный оксид",
        "ar": "أكسيد قاعدي",
        "zh": "碱性氧化物",
        "ku": "Oksîda bazî"
      },
      "distinction": {
        "tr": "Asidik oksitler (CO2, SO3 gibi ametal oksitleri) suyla asit oluşturur ve bazlarla tepkime verir; bazik oksitler (Na2O, CaO gibi aktif metal oksitleri) suyla baz oluşturur ve asitlerle tepkime verir.",
        "en": "Acidic oxides (nonmetal oxides such as CO2, SO3) form acids with water and react with bases; basic oxides (active metal oxides such as Na2O, CaO) form bases with water and react with acids.",
        "de": "Ein saures Oxid (Nichtmetalloxid wie CO2, SO3) bildet mit Wasser eine Säure und reagiert mit Basen; ein basisches Oxid (Oxid eines aktiven Metalls wie Na2O, CaO) bildet mit Wasser eine Base und reagiert mit Säuren.",
        "fr": "Un oxyde acide (oxyde de non-métal comme CO2, SO3) forme un acide avec l'eau et réagit avec les bases ; un oxyde basique (oxyde de métal actif comme Na2O, CaO) forme une base avec l'eau et réagit avec les acides.",
        "ru": "Кислотный оксид (оксид неметалла, например CO2, SO3) с водой образует кислоту и реагирует с основаниями; основный оксид (оксид активного металла, например Na2O, CaO) с водой образует основание и реагирует с кислотами.",
        "ar": "الأكسيد الحمضي (أكسيد لافلز مثل CO2 وSO3) يكوّن حمضًا مع الماء ويتفاعل مع القواعد؛ أما الأكسيد القاعدي (أكسيد فلز نشط مثل Na2O وCaO) فيكوّن قاعدة مع الماء ويتفاعل مع الأحماض.",
        "zh": "酸性氧化物(CO2、SO3 等非金属氧化物)与水生成酸，并能与碱反应；碱性氧化物(Na2O、CaO 等活泼金属氧化物)与水生成碱，并能与酸反应。",
        "ku": "Oksîda asîdî (oksîdên nemetalan ên wek CO2, SO3) bi avê re asîd çêdike û bi bazan re dikeve reaksiyonê; oksîda bazî (oksîdên metalên çalak ên wek Na2O, CaO) bi avê re baz çêdike û bi asîdan re dikeve reaksiyonê."
      }
    },
    {
      "id": "u09-c05",
      "conceptA": {
        "tr": "Turnusol",
        "en": "Litmus",
        "de": "Lackmus",
        "fr": "Tournesol",
        "ru": "Лакмус",
        "ar": "عباد الشمس",
        "zh": "石蕊",
        "ku": "Turnusol"
      },
      "conceptB": {
        "tr": "Fenolftalein",
        "en": "Phenolphthalein",
        "de": "Phenolphthalein",
        "fr": "Phénolphtaléine",
        "ru": "Фенолфталеин",
        "ar": "الفينولفثالين",
        "zh": "酚酞",
        "ku": "Fenolftaleyîn"
      },
      "distinction": {
        "tr": "Turnusol asidik ortamda kırmızı, bazik ortamda mavi renk alır; fenolftalein ise asidik ortamda renksiz, bazik ortamda pembedir.",
        "en": "Litmus is red in acidic solution and blue in basic solution; phenolphthalein is colorless in acidic solution and pink in basic solution.",
        "de": "Lackmus ist in saurer Lösung rot und in basischer Lösung blau; Phenolphthalein ist in saurer Lösung farblos und in basischer Lösung rosa.",
        "fr": "Le tournesol est rouge en milieu acide et bleu en milieu basique ; la phénolphtaléine est incolore en milieu acide et rose en milieu basique.",
        "ru": "Лакмус в кислой среде окрашивается в красный цвет, а в щелочной — в синий; фенолфталеин в кислой среде не окрашивается, а в щелочной становится малиновым.",
        "ar": "عباد الشمس يكون أحمر في الوسط الحمضي وأزرق في الوسط القاعدي؛ أما الفينولفثالين فيكون عديم اللون في الوسط الحمضي وورديًّا في الوسط القاعدي.",
        "zh": "石蕊在酸性溶液中呈红色，在碱性溶液中呈蓝色；酚酞在酸性溶液中无色，在碱性溶液中呈粉红色。",
        "ku": "Turnusol di navgîna asîdî de sor, di navgîna bazî de şîn dibe; fenolftaleyîn di navgîna asîdî de bêreng, di navgîna bazî de pembe ye."
      }
    },
    {
      "id": "u09-c06",
      "conceptA": {
        "tr": "Derişik Asit",
        "en": "Concentrated Acid",
        "de": "Konzentrierte Säure",
        "fr": "Acide concentré",
        "ru": "Концентрированная кислота",
        "ar": "حمض مركّز",
        "zh": "浓酸",
        "ku": "Asîda tîr"
      },
      "conceptB": {
        "tr": "Kuvvetli Asit",
        "en": "Strong Acid",
        "de": "Starke Säure",
        "fr": "Acide fort",
        "ru": "Сильная кислота",
        "ar": "حمض قوي",
        "zh": "强酸",
        "ku": "Asîda bihêz"
      },
      "distinction": {
        "tr": "Derişik asit, birim hacminde çok miktarda asit çözünmüş olan çözeltidir; kuvvetli asit ise suda tamamen iyonlaşan asittir. Bu iki özellik birbirinden bağımsızdır: çok seyreltik bir HCl çözeltisinde bile HCl kuvvetli asittir.",
        "en": "A concentrated acid is a solution with a large amount of acid dissolved per unit volume; a strong acid is one that ionizes completely in water. The two properties are independent: HCl is a strong acid even in a very dilute HCl solution.",
        "de": "Eine konzentrierte Säure ist eine Lösung, die pro Volumeneinheit viel gelöste Säure enthält; eine starke Säure ist dagegen eine Säure, die in Wasser vollständig ionisiert. Die beiden Eigenschaften sind unabhängig voneinander: Auch in sehr verdünnter Lösung ist HCl eine starke Säure.",
        "fr": "Un acide concentré est une solution contenant beaucoup d'acide dissous par unité de volume ; un acide fort est un acide qui s'ionise totalement dans l'eau. Ces deux propriétés sont indépendantes : même en solution très diluée, HCl reste un acide fort.",
        "ru": "Концентрированная кислота содержит много растворённой кислоты в единице объёма раствора; сильная кислота полностью диссоциирует в воде. Эти два свойства не зависят друг от друга: даже в очень разбавленном растворе HCl остаётся сильной кислотой.",
        "ar": "الحمض المركّز محلول يحتوي على كمية كبيرة من الحمض المذاب في وحدة الحجم؛ أما الحمض القوي فيتأين كليًا في الماء. والخاصيتان مستقلتان: فحتى في محلول مخفّف جدًّا يبقى HCl حمضًا قويًا.",
        "zh": "浓酸是单位体积中溶有大量酸的溶液；强酸则是在水中完全电离的酸。这两种性质互不相关：即使在很稀的溶液中，HCl 仍是强酸。",
        "ku": "Asîda tîr çareseriyek e ku di yekîneya qebareyê de gelek asîd tê de helandî ye; asîda bihêz jî asîdek e ku di avê de bi tevahî îyonîze dibe. Ev her du taybetmendî ji hev serbixwe ne: HCl di çareseriyeke pir sist de jî asîdeke bihêz e."
      }
    },
    {
      "id": "u09-c07",
      "conceptA": {
        "tr": "Kuvvetli Baz",
        "en": "Strong Base",
        "de": "Starke Base",
        "fr": "Base forte",
        "ru": "Сильное основание",
        "ar": "قاعدة قوية",
        "zh": "强碱",
        "ku": "Baza bihêz"
      },
      "conceptB": {
        "tr": "Zayıf Baz",
        "en": "Weak Base",
        "de": "Schwache Base",
        "fr": "Base faible",
        "ru": "Слабое основание",
        "ar": "قاعدة ضعيفة",
        "zh": "弱碱",
        "ku": "Baza qels"
      },
      "distinction": {
        "tr": "Kuvvetli bazlar suda tamamen iyonlaşır (NaOH, KOH); zayıf bazlar suda kısmen iyonlaşarak denge kurar (NH3).",
        "en": "Strong bases ionize completely in water (NaOH, KOH); weak bases ionize only partially in water and establish equilibrium (NH3).",
        "de": "Eine starke Base ionisiert in Wasser vollständig (NaOH, KOH); eine schwache Base ionisiert nur teilweise und bildet ein Gleichgewicht (NH3).",
        "fr": "Une base forte s'ionise totalement dans l'eau (NaOH, KOH) ; une base faible ne s'ionise que partiellement et établit un équilibre (NH3).",
        "ru": "Сильное основание полностью диссоциирует в воде (NaOH, KOH); слабое основание диссоциирует лишь частично, и устанавливается равновесие (NH3).",
        "ar": "في القاعدة القوية يكون التأين في الماء كليًا (NaOH، KOH)؛ أما القواعد الضعيفة فتتأين جزئيًا وتصل إلى حالة اتزان (NH3).",
        "zh": "强碱在水中完全电离(NaOH、KOH)；弱碱在水中部分电离并建立平衡(NH3)。",
        "ku": "Baza bihêz di avê de bi tevahî îyonîze dibe (NaOH, KOH); baza qels di avê de tenê beşek jê îyonîze dibe û hevsengî ava dibe (NH3)."
      }
    },
    {
      "id": "u09-c08",
      "conceptA": {
        "tr": "Oksijenli Asit",
        "en": "Oxyacid",
        "de": "Sauerstoffhaltige Säure",
        "fr": "Oxacide",
        "ru": "Кислородсодержащая кислота",
        "ar": "حمض أكسجيني",
        "zh": "含氧酸",
        "ku": "Asîda Oksîjendar"
      },
      "conceptB": {
        "tr": "Oksijensiz Asit",
        "en": "Oxygen-Free Acid",
        "de": "Sauerstofffreie Säure",
        "fr": "Hydracide",
        "ru": "Бескислородная кислота",
        "ar": "حمض غير أكسجيني",
        "zh": "无氧酸",
        "ku": "Asîda Bêoksîjen"
      },
      "distinction": {
        "tr": "Oksijenli asitler (HNO3, H2SO4 gibi) yapısında oksijen bulundurur; bunlardan derişik HNO3 ve sıcak derişik H2SO4 yarı soy metalleri de çözer. Oksijensiz asitler (HCl, H2S gibi) ise yapısında oksijen bulundurmaz; bunlardan HCl yarı soy metallerle tepkime vermez.",
        "en": "Oxyacids (such as HNO3 and H2SO4) contain oxygen; of these, concentrated HNO3 and hot concentrated H2SO4 also dissolve semi-noble metals. Oxygen-free acids (such as HCl and H2S) contain no oxygen; of these, HCl does not react with semi-noble metals.",
        "de": "Eine sauerstoffhaltige Säure (z. B. HNO3, H2SO4) enthält Sauerstoff; konzentrierte HNO3 und heiße konzentrierte H2SO4 lösen auch Halbedelmetalle. Eine sauerstofffreie Säure (z. B. HCl, H2S) enthält keinen Sauerstoff; HCl reagiert nicht mit Halbedelmetallen.",
        "fr": "Un oxacide (comme HNO3 ou H2SO4) contient de l'oxygène ; HNO3 concentré et H2SO4 concentré chaud dissolvent aussi les métaux semi-nobles. Un hydracide (comme HCl ou H2S) ne contient pas d'oxygène ; HCl ne réagit pas avec les métaux semi-nobles.",
        "ru": "Кислородсодержащая кислота (например, HNO3, H2SO4) содержит кислород; концентрированная HNO3 и горячая концентрированная H2SO4 растворяют и полублагородные металлы. Бескислородная кислота (например, HCl, H2S) не содержит кислорода; HCl не реагирует с полублагородными металлами.",
        "ar": "الحمض الأكسجيني (مثل HNO3 وH2SO4) يحتوي على الأكسجين، ويذيب HNO3 المركّز وH2SO4 المركّز الساخن الفلزات شبه النبيلة أيضًا. أما الحمض غير الأكسجيني (مثل HCl وH2S) فلا يحتوي على الأكسجين، وHCl منه لا يتفاعل مع الفلزات شبه النبيلة.",
        "zh": "含氧酸(如 HNO3、H2SO4)含有氧元素，其中浓HNO3和热浓H2SO4还能溶解半贵金属；无氧酸(如 HCl、H2S)不含氧，其中 HCl 不与半贵金属反应。",
        "ku": "Asîda oksîjendar (wek HNO3, H2SO4) di avahiya xwe de oksîjenê dihewîne; HNO3-a tîr û H2SO4-a tîr a germ metalên nîvesîl jî dihelînin. Asîda bêoksîjen (wek HCl, H2S) oksîjenê nahewîne; HCl bi metalên nîvesîl re nakeve reaksiyonê."
      }
    }
  ],
  "sequences": [
    {
      "id": "u09-s01",
      "title": {
        "tr": "Metal–Asit Tepkimesinde Açığa Çıkan Gazın Tanınması (Mg + HCl)",
        "en": "Identifying the Gas Released in a Metal–Acid Reaction (Mg + HCl)",
        "de": "Nachweis des Gases aus einer Metall-Säure-Reaktion (Mg + HCl)",
        "fr": "Identification du gaz dégagé dans une réaction métal–acide (Mg + HCl)",
        "ru": "Определение газа, выделяющегося в реакции металла с кислотой (Mg + HCl)",
        "ar": "التعرّف على الغاز المتصاعد في تفاعل فلز مع حمض (Mg + HCl)",
        "zh": "鉴别金属与酸反应放出的气体(Mg + HCl)",
        "ku": "Naskirina Gaza ku di Reaksiyona Metal–Asîdê de Derdikeve (Mg + HCl)"
      },
      "steps": [
        {
          "tr": "Deney tüpüne seyreltik HCl çözeltisi konur",
          "en": "Dilute HCl solution is poured into a test tube",
          "de": "Verdünnte HCl-Lösung wird in ein Reagenzglas gegeben",
          "fr": "On verse une solution diluée de HCl dans un tube à essai",
          "ru": "В пробирку наливают разбавленный раствор HCl",
          "ar": "يوضع محلول HCl مخفّف في أنبوب اختبار",
          "zh": "向试管中加入稀 HCl 溶液",
          "ku": "Çareseriya HCl-a sist tê kirin nav lûleya ceribandinê"
        },
        {
          "tr": "Tüpe magnezyum şerit atılır ve gaz kabarcıklarının çıktığı gözlenir",
          "en": "A magnesium ribbon is added to the tube and gas bubbles are observed",
          "de": "Ein Magnesiumband wird hinzugefügt und aufsteigende Gasblasen werden beobachtet",
          "fr": "On ajoute un ruban de magnésium et on observe un dégagement de bulles de gaz",
          "ru": "В пробирку опускают магниевую ленту и наблюдают выделение пузырьков газа",
          "ar": "يُضاف شريط مغنيسيوم إلى الأنبوب وتُلاحظ فقاعات غاز متصاعدة",
          "zh": "向试管中放入镁条，观察到有气泡产生",
          "ku": "Şerîteke magnezyûmê tê avêtin nav lûleyê û derketina bilbilên gazê tê dîtin"
        },
        {
          "tr": "Çıkan gaz, ağzı aşağı çevrilmiş ikinci bir tüpte toplanır",
          "en": "The released gas is collected in a second tube held upside down",
          "de": "Das entstehende Gas wird in einem zweiten, umgedrehten Reagenzglas aufgefangen",
          "fr": "Le gaz dégagé est recueilli dans un second tube retourné",
          "ru": "Выделяющийся газ собирают во вторую пробирку, перевёрнутую вверх дном",
          "ar": "يُجمع الغاز المتصاعد في أنبوب ثانٍ مقلوب",
          "zh": "将放出的气体收集在倒置的第二支试管中",
          "ku": "Gaza ku derdikeve di lûleyeke duyem a ku devê wê ber bi jêr ve ye de tê berhevkirin"
        },
        {
          "tr": "Toplanan gaza yanan kibrit yaklaştırıldığında \"pıt\" sesi duyulur; gaz H2'dir",
          "en": "When a burning match is brought near the collected gas a \"pop\" is heard; the gas is H2",
          "de": "Hält man ein brennendes Streichholz an das aufgefangene Gas, hört man einen \"Plopp\"; das Gas ist H2",
          "fr": "Quand on approche une allumette enflammée du gaz recueilli, on entend une petite détonation (\"pop\") : le gaz est du H2",
          "ru": "При поднесении горящей спички к собранному газу слышен хлопок; газ — H2",
          "ar": "عند تقريب عود ثقاب مشتعل من الغاز المجموع يُسمع صوت فرقعة خفيفة؛ فالغاز هو H2",
          "zh": "将燃着的火柴靠近收集的气体时听到“噗”的爆鸣声，该气体是 H2",
          "ku": "Dema darikeke kibrîtê ya pêketî nêzîkî gaza berhevkirî tê kirin dengê \"pit\" tê bihîstin; gaz H2 ye"
        }
      ]
    },
    {
      "id": "u09-s02",
      "title": {
        "tr": "Asit-Baz Titrasyonu",
        "en": "Acid-Base Titration",
        "de": "Säure-Base-Titration",
        "fr": "Titrage acide-base",
        "ru": "Кислотно-основное титрование",
        "ar": "معايرة حمض بقاعدة",
        "zh": "酸碱滴定",
        "ku": "Tîtrasyona Asîd-Bazê"
      },
      "steps": [
        {
          "tr": "Erlenmayere belirli hacimde asit çözeltisi konur",
          "en": "A known volume of acid solution is placed in the Erlenmeyer flask",
          "de": "Ein bekanntes Volumen Säurelösung wird in den Erlenmeyerkolben gegeben",
          "fr": "Un volume connu de solution acide est placé dans l'erlenmeyer",
          "ru": "В колбу Эрленмейера (коническую колбу) наливают определённый объём раствора кислоты",
          "ar": "يوضع حجم معلوم من محلول الحمض في دورق إرلنماير",
          "zh": "将已知体积的酸溶液放入锥形瓶中",
          "ku": "Qebareyeke diyar a çareseriya asîdê tê kirin nav erlenmeyerê"
        },
        {
          "tr": "Erlenmayerdeki asidin üzerine birkaç damla indikatör eklenir",
          "en": "A few drops of indicator are added to the acid in the flask",
          "de": "Zur Säure im Kolben werden einige Tropfen Indikator gegeben",
          "fr": "Quelques gouttes d'indicateur sont ajoutées à l'acide dans l'erlenmeyer",
          "ru": "К кислоте в колбе добавляют несколько капель индикатора",
          "ar": "تضاف بضع قطرات من الكاشف إلى الحمض في الدورق",
          "zh": "向锥形瓶中的酸加入几滴指示剂",
          "ku": "Çend dilop îndîkator li asîda di erlenmeyerê de tê zêdekirin"
        },
        {
          "tr": "Büretteki standart baz çözeltisi damla damla eklenir",
          "en": "Standard base solution from the burette is added drop by drop",
          "de": "Standard-Basenlösung aus der Bürette wird tropfenweise zugegeben",
          "fr": "La solution basique étalon de la burette est ajoutée goutte à goutte",
          "ru": "Из бюретки по каплям добавляют стандартный раствор основания",
          "ar": "يضاف محلول القاعدة القياسي من السحاحة قطرةً قطرة",
          "zh": "从滴定管中逐滴加入标准碱溶液",
          "ku": "Çareseriya baza standard ji buretê dilop dilop tê zêdekirin"
        },
        {
          "tr": "İndikatörün rengi kalıcı olarak değiştiğinde (dönüm noktası) harcanan baz hacmi okunur",
          "en": "When the indicator colour changes permanently (end point), the volume of base used is read",
          "de": "Wenn der Indikator dauerhaft umschlägt (Endpunkt), wird das verbrauchte Basenvolumen abgelesen",
          "fr": "Lorsque l'indicateur change durablement de couleur (point de virage), on lit le volume de base versé",
          "ru": "Когда окраска индикатора устойчиво изменится (конечная точка титрования), записывают объём израсходованного основания",
          "ar": "عندما يتغير لون الكاشف تغيرًا دائمًا (نقطة النهاية) يُقرأ حجم القاعدة المستهلَك",
          "zh": "当指示剂颜色发生持久变化（滴定终点）时，读取消耗的碱溶液体积",
          "ku": "Dema rengê îndîkatorê bi awayekî mayînde diguhere (xala dawî), qebareya baza xerckirî tê xwendin"
        }
      ]
    },
    {
      "id": "u09-s03",
      "title": {
        "tr": "Zn, Cu ve Au Tozları Karışımının Asitlerle Ayrılması",
        "en": "Separating a Mixture of Zn, Cu and Au Powders with Acids",
        "de": "Trennung eines Gemischs aus Zn-, Cu- und Au-Pulver mit Säuren",
        "fr": "Séparation d'un mélange de poudres de Zn, Cu et Au à l'aide d'acides",
        "ru": "Разделение смеси порошков Zn, Cu и Au с помощью кислот",
        "ar": "فصل مخلوط من مساحيق Zn وCu وAu باستخدام الأحماض",
        "zh": "用酸分离 Zn、Cu 和 Au 粉末的混合物",
        "ku": "Veqetandina Tevliheviya Tozên Zn, Cu û Au bi Asîdan"
      },
      "steps": [
        {
          "tr": "Karışıma yeterli miktarda seyreltik HCl çözeltisi eklenir; yalnızca Zn tepkimeye girer ve H2 gazı çıkar",
          "en": "Enough dilute HCl solution is added to the mixture; only Zn reacts and H2 gas is released",
          "de": "Zum Gemisch wird ausreichend verdünnte HCl-Lösung gegeben; nur Zn reagiert, und es entsteht H2-Gas",
          "fr": "On ajoute au mélange une quantité suffisante de solution diluée de HCl ; seul Zn réagit et du H2 se dégage",
          "ru": "К смеси добавляют достаточное количество разбавленного раствора HCl; реагирует только Zn, выделяется газ H2",
          "ar": "تُضاف إلى المخلوط كمية كافية من محلول HCl المخفّف؛ يتفاعل Zn فقط ويتصاعد غاز H2",
          "zh": "向混合物中加入足量稀 HCl 溶液；只有 Zn 反应并放出 H2 气体",
          "ku": "Bi qasî têr çareseriya HCl-a sist li tevliheviyê tê zêdekirin; tenê Zn dikeve reaksiyonê û gaza H2 derdikeve"
        },
        {
          "tr": "Tepkime bitince çözünmeden kalan Cu ve Au katıları süzülerek ayrılır",
          "en": "When the reaction ends, the undissolved Cu and Au solids are separated by filtration",
          "de": "Nach Ende der Reaktion werden die ungelösten Feststoffe Cu und Au abfiltriert",
          "fr": "À la fin de la réaction, les solides non dissous Cu et Au sont séparés par filtration",
          "ru": "После окончания реакции нерастворившиеся твёрдые Cu и Au отделяют фильтрованием",
          "ar": "بعد انتهاء التفاعل تُفصل المادتان الصلبتان غير الذائبتين Cu وAu بالترشيح",
          "zh": "反应结束后，过滤分离出未溶解的 Cu 和 Au 固体",
          "ku": "Piştî ku reaksiyon diqede, madeyên hişk ên Cu û Au yên ku nehelandî mane bi parzûnkirinê tên veqetandin"
        },
        {
          "tr": "Süzülen katıya derişik HNO3 eklenir; Cu tepkimeye girer ve kahverengi NO2 gazı çıkar",
          "en": "Concentrated HNO3 is added to the filtered solid; Cu reacts and brown NO2 gas is released",
          "de": "Zum abfiltrierten Feststoff wird konzentrierte HNO3 gegeben; Cu reagiert, und es entsteht braunes NO2-Gas",
          "fr": "On ajoute du HNO3 concentré au solide filtré ; Cu réagit et un gaz brun, NO2, se dégage",
          "ru": "К отфильтрованному твёрдому остатку добавляют концентрированную HNO3; Cu реагирует, выделяется бурый газ NO2",
          "ar": "يُضاف HNO3 المركّز إلى المادة الصلبة المرشَّحة؛ يتفاعل Cu ويتصاعد غاز NO2 البني",
          "zh": "向滤出的固体中加入浓 HNO3；Cu 反应并放出红棕色 NO2 气体",
          "ku": "HNO3-a tîr li madeya hişk a parzûnkirî tê zêdekirin; Cu dikeve reaksiyonê û gaza NO2 ya qehweyî derdikeve"
        },
        {
          "tr": "Hiçbir asitle tek başına tepkime vermeyen Au geriye katı olarak kalır ve süzülerek elde edilir",
          "en": "Au, which does not react with any single acid, remains as a solid and is recovered by filtration",
          "de": "Au, das mit keiner einzelnen Säure reagiert, bleibt als Feststoff zurück und wird durch Filtrieren gewonnen",
          "fr": "Au, qui ne réagit avec aucun acide seul, reste à l'état solide et est récupéré par filtration",
          "ru": "Золото (Au), которое не реагирует ни с одной кислотой в отдельности, остаётся твёрдым; его отделяют фильтрованием",
          "ar": "يبقى Au، الذي لا يتفاعل مع أي حمض منفرد، في الحالة الصلبة ويُفصل بالترشيح",
          "zh": "不与任何单一酸反应的 Au 以固体形式残留，经过滤得到",
          "ku": "Au, ku bi tena serê wê bi tu asîdê re nakeve reaksiyonê, wek madeya hişk dimîne û bi parzûnkirinê tê bidestxistin"
        }
      ]
    },
    {
      "id": "u09-s04",
      "title": {
        "tr": "Kuvvetli Asit Çözeltisine Kuvvetli Baz Eklenirken pH Değişimi (25 °C)",
        "en": "pH Change When a Strong Base Is Added to a Strong Acid (25 °C)",
        "de": "pH-Änderung bei Zugabe einer starken Base zu einer starken Säure (25 °C)",
        "fr": "Variation du pH lors de l'ajout d'une base forte à un acide fort (25 °C)",
        "ru": "Изменение pH при добавлении сильного основания к сильной кислоте (25 °C)",
        "ar": "تغيّر الرقم الهيدروجيني عند إضافة قاعدة قوية إلى حمض قوي (25 °C)",
        "zh": "向强酸溶液中加入强碱时pH的变化(25 °C)",
        "ku": "Guherîna pH-ê Dema Baza Bihêz li Çareseriya Asîda Bihêz Tê Zêdekirin (25 °C)"
      },
      "steps": [
        {
          "tr": "Başlangıçta çözelti asidiktir (pH < 7)",
          "en": "Initially the solution is acidic (pH < 7)",
          "de": "Anfangs ist die Lösung sauer (pH < 7)",
          "fr": "Au départ, la solution est acide (pH < 7)",
          "ru": "Вначале раствор кислый (pH < 7)",
          "ar": "في البداية يكون المحلول حمضيًا (pH < 7)",
          "zh": "开始时溶液呈酸性(pH < 7)",
          "ku": "Di destpêkê de çareserî asîdî ye (pH < 7)"
        },
        {
          "tr": "Baz eklendikçe H+ derişimi azalır ve pH yükselir",
          "en": "As base is added, the H+ concentration decreases and the pH rises",
          "de": "Bei Basenzugabe sinkt die H+-Konzentration und der pH-Wert steigt",
          "fr": "À mesure que la base est ajoutée, la concentration en H+ diminue et le pH augmente",
          "ru": "По мере добавления основания концентрация H+ уменьшается, а pH растёт",
          "ar": "مع إضافة القاعدة يقل تركيز H+ ويرتفع الرقم الهيدروجيني",
          "zh": "随着碱的加入，H+ 浓度降低，pH 升高",
          "ku": "Her ku baz tê zêdekirin, tîrbûna H+ kêm dibe û pH bilind dibe"
        },
        {
          "tr": "Eşdeğerlik noktasında tüm asit nötrleşir ve pH = 7 olur",
          "en": "At the equivalence point all the acid is neutralized and pH = 7",
          "de": "Am Äquivalenzpunkt ist die gesamte Säure neutralisiert, pH = 7",
          "fr": "Au point d'équivalence, tout l'acide est neutralisé et pH = 7",
          "ru": "В точке эквивалентности вся кислота нейтрализована, pH = 7",
          "ar": "عند نقطة التكافؤ تتعادل كل كمية الحمض ويصبح pH = 7",
          "zh": "在化学计量点，酸全部被中和，pH = 7",
          "ku": "Li xala hevtayê hemû asîd tê neutralîzekirin û pH dibe 7"
        },
        {
          "tr": "Baz eklenmeye devam edilirse OH- fazlası oluşur ve pH > 7 olur",
          "en": "If more base is added, excess OH- forms and pH > 7",
          "de": "Bei weiterer Basenzugabe entsteht ein OH--Überschuss, pH > 7",
          "fr": "Si l'on continue d'ajouter de la base, un excès d'OH- se forme et pH > 7",
          "ru": "При дальнейшем добавлении основания образуется избыток OH-, pH > 7",
          "ar": "إذا استمرت إضافة القاعدة يتكوّن فائض من OH- ويصبح pH > 7",
          "zh": "继续加碱则 OH- 过量，pH > 7",
          "ku": "Eger zêdekirina bazê bidome, OH- zêde dimîne û pH dibe > 7"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u09-twin01",
      "stem": {
        "tr": "Şekildeki grafik, 20 mL HCl çözeltisine 25 °C'de 0,2 M NaOH çözeltisi damla damla eklenirken ölçülen pH değerlerini göstermektedir.\nI. HCl çözeltisinin başlangıç derişimi 0,1 M'dir.\nII. 5 mL NaOH eklendiğinde başlangıçtaki H+ iyonlarının yarısı nötrleşmiştir.\nIII. 15 mL NaOH eklenmiş çözeltiye fenolftalein damlatılırsa çözelti renksiz kalır.\nyargılarından hangileri doğrudur?",
        "en": "The graph shows the pH measured at 25 °C while 0.2 M NaOH solution is added dropwise to 20 mL of HCl solution. Which of the following statements are true?\nI. The initial concentration of the HCl solution is 0.1 M.\nII. When 5 mL of NaOH has been added, half of the initial H+ ions have been neutralized.\nIII. If phenolphthalein is added to the solution after 15 mL of NaOH has been added, the solution stays colourless.",
        "de": "Das Diagramm zeigt den bei 25 °C gemessenen pH-Wert, während 20 mL HCl-Lösung tropfenweise mit 0,2 M NaOH-Lösung versetzt werden. Welche Aussagen sind richtig?\nI. Die Anfangskonzentration der HCl-Lösung beträgt 0,1 M.\nII. Nach Zugabe von 5 mL NaOH ist die Hälfte der ursprünglichen H+-Ionen neutralisiert.\nIII. Gibt man nach Zugabe von 15 mL NaOH Phenolphthalein hinzu, bleibt die Lösung farblos.",
        "fr": "Le graphique montre le pH mesuré à 25 °C lorsqu'on ajoute goutte à goutte une solution de NaOH à 0,2 M à 20 mL de solution de HCl. Quelles affirmations sont vraies ?\nI. La concentration initiale de la solution de HCl est de 0,1 M.\nII. Après l'ajout de 5 mL de NaOH, la moitié des ions H+ initiaux est neutralisée.\nIII. Si l'on ajoute de la phénolphtaléine après l'ajout de 15 mL de NaOH, la solution reste incolore.",
        "ru": "На графике показан pH, измеренный при 25 °C при постепенном добавлении 0,2 M раствора NaOH к 20 мл раствора HCl. Какие утверждения верны?\nI. Исходная концентрация раствора HCl равна 0,1 M.\nII. После добавления 5 мл NaOH нейтрализована половина исходных ионов H+.\nIII. Если после добавления 15 мл NaOH внести фенолфталеин, раствор останется бесцветным.",
        "ar": "يبيّن الرسم البياني قيم pH المقيسة عند 25 °C أثناء إضافة محلول NaOH تركيزه 0.2 M قطرةً قطرةً إلى 20 mL من محلول HCl. أيّ العبارات الآتية صحيحة؟\nI. التركيز الابتدائي لمحلول HCl يساوي 0.1 M.\nII. عند إضافة 5 mL من NaOH يكون نصف أيونات H+ الابتدائية قد تعادل.\nIII. إذا أُضيف الفينولفثالين إلى المحلول بعد إضافة 15 mL من NaOH يبقى المحلول عديم اللون.",
        "zh": "图中给出了 25 °C 时向 20 mL HCl 溶液中逐滴加入 0.2 M NaOH 溶液过程中测得的 pH。下列说法中哪些正确？\nI. HCl 溶液的初始浓度为 0.1 M。\nII. 加入 5 mL NaOH 时，初始 H+ 离子的一半已被中和。\nIII. 加入 15 mL NaOH 后向溶液中滴加酚酞，溶液保持无色。",
        "ku": "Grafîka di şeklê de nirxên pH-ê nîşan dide ku di 25 °C de dema çareseriya NaOH a 0,2 M dilop bi dilop li 20 mL çareseriya HCl tê zêdekirin hatine pîvandin. Kîjan ji van gotinan rast in?\nI. Tîrbûna destpêkê ya çareseriya HCl 0,1 M e.\nII. Dema 5 mL NaOH hatiye zêdekirin, nîvê îyonên H+ yên destpêkê neutralîze bûne.\nIII. Eger piştî zêdekirina 15 mL NaOH fenolftaleyîn li çareseriyê were zêdekirin, çareserî bêreng dimîne."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "Only II",
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
        "tr": "Grafikte pH'ın 7 olduğu eşdeğerlik noktası (E) 10 mL NaOH'a karşılık gelir. n(NaOH) = 0,2 × 0,010 = 0,002 mol = n(HCl) olduğundan [HCl] = 0,002 / 0,020 = 0,1 M'dir; başlangıç pH'ının 1 olması da bunu doğrular. I doğrudur. 5 mL NaOH 0,001 mol OH- içerir ve başlangıçtaki 0,002 mol H+ iyonunun yarısını nötrleştirir; II doğrudur. 15 mL eklendiğinde grafikte pH yaklaşık 12,5'tir; ortam baziktir ve fenolftalein pembe olur; III yanlıştır. Eşdeğerlik hacmini (10 mL) bulup asit ve baz derişimlerini eşit sanmak ya da 15 mL'de ortamı hâlâ asidik sanmak tipik hatalardır.",
        "en": "On the graph the equivalence point (E), where pH = 7, corresponds to 10 mL of NaOH. Since n(NaOH) = 0.2 × 0.010 = 0.002 mol = n(HCl), [HCl] = 0.002 / 0.020 = 0.1 M; the initial pH of 1 confirms this. I is true. 5 mL of NaOH contains 0.001 mol OH-, which neutralizes half of the initial 0.002 mol H+; II is true. After 15 mL the graph shows a pH of about 12.5; the medium is basic and phenolphthalein turns pink; III is false. Assuming the acid and base concentrations are equal, or thinking the solution is still acidic at 15 mL, are typical mistakes.",
        "de": "Im Diagramm entspricht der Äquivalenzpunkt (E) mit pH = 7 einer Zugabe von 10 mL NaOH. Da n(NaOH) = 0,2 × 0,010 = 0,002 mol = n(HCl), gilt [HCl] = 0,002 / 0,020 = 0,1 M; der Anfangs-pH von 1 bestätigt dies. I ist richtig. 5 mL NaOH enthalten 0,001 mol OH- und neutralisieren die Hälfte der anfänglichen 0,002 mol H+; II ist richtig. Nach 15 mL zeigt das Diagramm einen pH von etwa 12,5; die Lösung ist basisch und Phenolphthalein färbt sich pink; III ist falsch. Typische Fehler sind, gleiche Konzentrationen von Säure und Base anzunehmen oder die Lösung bei 15 mL noch für sauer zu halten.",
        "fr": "Sur le graphique, le point d'équivalence (E), où pH = 7, correspond à 10 mL de NaOH. Comme n(NaOH) = 0,2 × 0,010 = 0,002 mol = n(HCl), [HCl] = 0,002 / 0,020 = 0,1 M ; le pH initial de 1 le confirme. I est vraie. 5 mL de NaOH contiennent 0,001 mol de OH-, ce qui neutralise la moitié des 0,002 mol de H+ initiaux ; II est vraie. Après 15 mL, le graphique indique un pH d'environ 12,5 ; le milieu est basique et la phénolphtaléine devient rose ; III est fausse. Supposer que l'acide et la base ont la même concentration, ou croire que la solution est encore acide à 15 mL, sont des erreurs typiques.",
        "ru": "На графике точке эквивалентности (E), где pH = 7, соответствует 10 мл NaOH. Так как n(NaOH) = 0,2 × 0,010 = 0,002 моль = n(HCl), [HCl] = 0,002 / 0,020 = 0,1 M; это подтверждает и начальный pH = 1. I верно. 5 мл NaOH содержат 0,001 моль OH- и нейтрализуют половину исходных 0,002 моль H+; II верно. После 15 мл pH по графику около 12,5; среда щелочная, фенолфталеин становится малиновым; III неверно. Типичные ошибки — считать концентрации кислоты и щёлочи равными или думать, что при 15 мл среда ещё кислая.",
        "ar": "في الرسم البياني تقابل نقطة التكافؤ (E) التي يكون عندها pH = 7 إضافة 10 mL من NaOH. وبما أن n(NaOH) = 0.2 × 0.010 = 0.002 mol = n(HCl) فإن [HCl] = 0.002 / 0.020 = 0.1 M، ويؤكد ذلك أن pH الابتدائي يساوي 1. العبارة I صحيحة. يحتوي 5 mL من NaOH على 0.001 mol من OH- فيعادل نصف 0.002 mol من H+ الابتدائية؛ العبارة II صحيحة. بعد إضافة 15 mL يبيّن الرسم أن pH نحو 12.5؛ الوسط قاعدي والفينولفثالين يصبح ورديًا؛ العبارة III خاطئة. ومن الأخطاء الشائعة افتراض تساوي تركيزَي الحمض والقاعدة أو الظن أن المحلول ما زال حمضيًا عند 15 mL.",
        "zh": "图中 pH = 7 的等当点(E)对应加入 10 mL NaOH。因为 n(NaOH) = 0.2 × 0.010 = 0.002 mol = n(HCl)，所以 [HCl] = 0.002 / 0.020 = 0.1 M；初始 pH 为 1 也证实了这一点。I 正确。5 mL NaOH 含 0.001 mol OH-，中和了初始 0.002 mol H+ 的一半；II 正确。加入 15 mL 时图中 pH 约为 12.5，溶液呈碱性，酚酞变为粉红色；III 错误。认为酸和碱的浓度相等，或认为加入 15 mL 时溶液仍呈酸性，都是典型错误。",
        "ku": "Di grafîkê de xala wekhevbûnê (E) ya ku pH lê 7 e, li hember 10 mL NaOH e. Ji ber ku n(NaOH) = 0,2 × 0,010 = 0,002 mol = n(HCl), [HCl] = 0,002 / 0,020 = 0,1 M ye; pH-a destpêkê ya 1 jî vê piştrast dike. I rast e. 5 mL NaOH 0,001 mol OH- dihewîne û nîvê 0,002 mol H+ yên destpêkê neutralîze dike; II rast e. Piştî 15 mL, li gorî grafîkê pH nêzî 12,5 ye; navgîn bazî ye û fenolftaleyîn pembe dibe; III şaş e. Wekhev hesibandina tîrbûnên asîd û bazê, an jî di 15 mL de hîn asîdî hesibandina çareseriyê xeletiyên tîpîk in."
      },
      "figure": {
        "kind": "graph",
        "xLabel": {
          "tr": "Eklenen NaOH (mL)",
          "en": "Added NaOH (mL)",
          "de": "Zugegebene NaOH (mL)",
          "fr": "NaOH ajouté (mL)",
          "ru": "Добавлено NaOH (мл)",
          "ar": "NaOH المضاف (mL)",
          "zh": "加入的 NaOH (mL)",
          "ku": "NaOH-a zêdekirî (mL)"
        },
        "yLabel": {
          "tr": "pH",
          "en": "pH",
          "de": "pH",
          "fr": "pH",
          "ru": "pH",
          "ar": "pH",
          "zh": "pH",
          "ku": "pH"
        },
        "xMax": 20,
        "yMax": 14,
        "xTicks": [
          5,
          10,
          15,
          20
        ],
        "yTicks": [
          1,
          3,
          5,
          7,
          9,
          11,
          13
        ],
        "series": [
          {
            "points": [
              [
                0,
                1
              ],
              [
                2,
                1.14
              ],
              [
                5,
                1.4
              ],
              [
                8,
                1.85
              ],
              [
                9,
                2.16
              ],
              [
                9.5,
                2.47
              ],
              [
                9.9,
                3.17
              ],
              [
                10,
                7
              ],
              [
                10.1,
                10.82
              ],
              [
                10.5,
                11.52
              ],
              [
                12,
                12.1
              ],
              [
                15,
                12.46
              ],
              [
                20,
                12.7
              ]
            ]
          }
        ],
        "markers": [
          {
            "x": 10,
            "y": 7,
            "label": "E",
            "guides": true
          }
        ]
      }
    },
    {
      "id": "u09-twin02",
      "stem": {
        "tr": "Tabloda X, Y, Z ve T metallerinin seyreltik HCl, derişik NaOH ve derişik HNO3 çözeltilerine ayrı ayrı atıldığında gözlenen sonuçlar verilmiştir (+: gaz çıkışı gözlenir, −: tepkime gözlenmez). X, Y, Z ve T metalleri sırasıyla aşağıdakilerden hangisi olabilir?",
        "en": "The table shows what is observed when metals X, Y, Z and T are placed separately in dilute HCl, concentrated NaOH and concentrated HNO3 solutions (+: gas is evolved, −: no reaction is observed). Which of the following could metals X, Y, Z and T be, respectively?",
        "de": "Die Tabelle zeigt, was beobachtet wird, wenn die Metalle X, Y, Z und T einzeln in verdünnte HCl-, konzentrierte NaOH- und konzentrierte HNO3-Lösung gegeben werden (+: Gasentwicklung, −: keine Reaktion). Welche Metalle können X, Y, Z und T der Reihe nach sein?",
        "fr": "Le tableau indique ce que l'on observe lorsqu'on place séparément les métaux X, Y, Z et T dans des solutions de HCl dilué, de NaOH concentré et de HNO3 concentré (+ : dégagement gazeux, − : aucune réaction). Quels peuvent être, respectivement, les métaux X, Y, Z et T ?",
        "ru": "В таблице приведены наблюдения при помещении металлов X, Y, Z и T по отдельности в растворы разбавленной HCl, концентрированного NaOH и концентрированной HNO3 (+: выделяется газ, −: реакция не наблюдается). Какими металлами соответственно могут быть X, Y, Z и T?",
        "ar": "يبيّن الجدول ما يُلاحظ عند وضع الفلزات X وY وZ وT كلٍّ على حدة في محاليل HCl المخفف وNaOH المركّز وHNO3 المركّز (+: يتصاعد غاز، −: لا يُلاحظ تفاعل). أيّ مما يأتي يمكن أن يكون الفلزات X وY وZ وT على الترتيب؟",
        "zh": "表中列出了将金属 X、Y、Z、T 分别放入稀 HCl、浓 NaOH 和浓 HNO3 溶液中观察到的现象（+：有气体产生，−：无反应）。X、Y、Z、T 依次可能是下列哪一组？",
        "ku": "Di tabloyê de encamên ku dema metalên X, Y, Z û T cuda cuda tên avêtin nav çareseriyên HCl-a sulandî, NaOH-a tîr û HNO3-a tîr tên dîtin hatine dayîn (+: gaz derdikeve, −: reaksiyon nayê dîtin). Metalên X, Y, Z û T bi rêzê dikarin kîjan bin?"
      },
      "options": [
        {
          "tr": "Mg, Cu, Au, Zn",
          "en": "Mg, Cu, Au, Zn",
          "de": "Mg, Cu, Au, Zn",
          "fr": "Mg, Cu, Au, Zn",
          "ru": "Mg, Cu, Au, Zn",
          "ar": "Mg, Cu, Au, Zn",
          "zh": "Mg, Cu, Au, Zn",
          "ku": "Mg, Cu, Au, Zn"
        },
        {
          "tr": "Zn, Cu, Au, Mg",
          "en": "Zn, Cu, Au, Mg",
          "de": "Zn, Cu, Au, Mg",
          "fr": "Zn, Cu, Au, Mg",
          "ru": "Zn, Cu, Au, Mg",
          "ar": "Zn, Cu, Au, Mg",
          "zh": "Zn, Cu, Au, Mg",
          "ku": "Zn, Cu, Au, Mg"
        },
        {
          "tr": "Mg, Au, Cu, Zn",
          "en": "Mg, Au, Cu, Zn",
          "de": "Mg, Au, Cu, Zn",
          "fr": "Mg, Au, Cu, Zn",
          "ru": "Mg, Au, Cu, Zn",
          "ar": "Mg, Au, Cu, Zn",
          "zh": "Mg, Au, Cu, Zn",
          "ku": "Mg, Au, Cu, Zn"
        },
        {
          "tr": "Cu, Mg, Au, Zn",
          "en": "Cu, Mg, Au, Zn",
          "de": "Cu, Mg, Au, Zn",
          "fr": "Cu, Mg, Au, Zn",
          "ru": "Cu, Mg, Au, Zn",
          "ar": "Cu, Mg, Au, Zn",
          "zh": "Cu, Mg, Au, Zn",
          "ku": "Cu, Mg, Au, Zn"
        },
        {
          "tr": "Mg, Ag, Cu, Zn",
          "en": "Mg, Ag, Cu, Zn",
          "de": "Mg, Ag, Cu, Zn",
          "fr": "Mg, Ag, Cu, Zn",
          "ru": "Mg, Ag, Cu, Zn",
          "ar": "Mg, Ag, Cu, Zn",
          "zh": "Mg, Ag, Cu, Zn",
          "ku": "Mg, Ag, Cu, Zn"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Yalnız T hem asitle hem de bazla gaz verdiğinden amfoter metaldir (Zn). X seyreltik HCl ile H2 verir ama NaOH ile tepkime vermez; amfoter olmayan aktif bir metaldir (Mg). Y seyreltik HCl ile tepkime vermez ama derişik HNO3 ile gaz (NO2) verir; yarı soy metaldir (Cu). Z hiçbir çözeltiyle tepkime vermez; tam soy metaldir (Au). Doğru sıra Mg, Cu, Au, Zn'dir. Zn'yi NaOH ile tepkime vermeyen X'in yerine koymak, Cu ile Au'yu karıştırmak ya da Ag ve Cu'nun derişik HNO3 ile tepkime vermediğini sanmak tipik hatalardır.",
        "en": "Only T gives gas with both the acid and the base, so it is an amphoteric metal (Zn). X gives H2 with dilute HCl but does not react with NaOH; it is an active, non-amphoteric metal (Mg). Y does not react with dilute HCl but gives a gas (NO2) with concentrated HNO3; it is a semi-noble metal (Cu). Z reacts with none of the solutions; it is a noble metal (Au). The correct order is Mg, Cu, Au, Zn. Putting Zn in place of X, which does not react with NaOH, confusing Cu with Au, or thinking that Ag and Cu do not react with concentrated HNO3 are typical mistakes.",
        "de": "Nur T entwickelt sowohl mit der Säure als auch mit der Base Gas, ist also ein amphoteres Metall (Zn). X bildet mit verdünnter HCl H2, reagiert aber nicht mit NaOH; es ist ein unedles, nicht amphoteres Metall (Mg). Y reagiert nicht mit verdünnter HCl, bildet aber mit konzentrierter HNO3 ein Gas (NO2); es ist ein Halbedelmetall (Cu). Z reagiert mit keiner Lösung; es ist ein Edelmetall (Au). Die richtige Reihenfolge ist Mg, Cu, Au, Zn. Typische Fehler sind, Zn an die Stelle von X zu setzen, das nicht mit NaOH reagiert, Cu mit Au zu verwechseln oder anzunehmen, Ag und Cu reagierten nicht mit konzentrierter HNO3.",
        "fr": "Seul T dégage un gaz à la fois avec l'acide et avec la base : c'est un métal amphotère (Zn). X dégage du H2 avec HCl dilué mais ne réagit pas avec NaOH ; c'est un métal actif non amphotère (Mg). Y ne réagit pas avec HCl dilué mais dégage un gaz (NO2) avec HNO3 concentré ; c'est un métal semi-noble (Cu). Z ne réagit avec aucune solution ; c'est un métal noble (Au). L'ordre correct est Mg, Cu, Au, Zn. Mettre Zn à la place de X, qui ne réagit pas avec NaOH, confondre Cu et Au, ou croire que Ag et Cu ne réagissent pas avec HNO3 concentré sont des erreurs typiques.",
        "ru": "Только T выделяет газ и с кислотой, и со щёлочью, значит, это амфотерный металл (Zn). X с разбавленной HCl выделяет H2, но не реагирует с NaOH — это активный неамфотерный металл (Mg). Y не реагирует с разбавленной HCl, но с концентрированной HNO3 выделяет газ (NO2) — это полублагородный металл (Cu). Z не реагирует ни с одним раствором — это благородный металл (Au). Правильный порядок: Mg, Cu, Au, Zn. Типичные ошибки — поставить Zn на место X, который не реагирует с NaOH, перепутать Cu и Au или считать, что Ag и Cu не реагируют с концентрированной HNO3.",
        "ar": "الفلز T وحده يطلق غازًا مع الحمض ومع القاعدة، فهو فلز أمفوتيري (Zn). يطلق X غاز H2 مع HCl المخفف ولا يتفاعل مع NaOH، فهو فلز نشط غير أمفوتيري (Mg). لا يتفاعل Y مع HCl المخفف لكنه يطلق غازًا (NO2) مع HNO3 المركّز، فهو فلز شبه نبيل (Cu). ولا يتفاعل Z مع أي محلول، فهو فلز نبيل (Au). الترتيب الصحيح Mg, Cu, Au, Zn. ومن الأخطاء الشائعة وضع Zn مكان X الذي لا يتفاعل مع NaOH، أو الخلط بين Cu وAu، أو الظن أن Ag وCu لا يتفاعلان مع HNO3 المركّز.",
        "zh": "只有 T 既能与酸又能与碱反应放出气体，所以是两性金属(Zn)。X 与稀 HCl 反应放出 H2，但不与 NaOH 反应，是非两性的活泼金属(Mg)。Y 不与稀 HCl 反应，但与浓 HNO3 反应放出气体(NO2)，是半贵金属(Cu)。Z 与所有溶液都不反应，是贵金属(Au)。正确顺序为 Mg、Cu、Au、Zn。把 Zn 放在不与 NaOH 反应的 X 的位置、混淆 Cu 和 Au，或认为 Ag 和 Cu 不与浓 HNO3 反应，都是典型错误。",
        "ku": "Tenê T hem bi asîdê hem jî bi bazê re gazê derdixe, ji ber vê yekê metaleke amfoter e (Zn). X bi HCl-a sulandî re H2 derdixe lê bi NaOH re reaksiyonê nake; metaleke çalak a ne-amfoter e (Mg). Y bi HCl-a sulandî re reaksiyonê nake lê bi HNO3-a tîr re gazê (NO2) derdixe; metaleke nîvesîl e (Cu). Z bi tu çareseriyê re reaksiyonê nake; metaleke esîl e (Au). Rêza rast Mg, Cu, Au, Zn e. Danîna Zn li şûna X ya ku bi NaOH re reaksiyonê nake, tevlihevkirina Cu û Au, an jî hesibandina ku Ag û Cu bi HNO3-a tîr re reaksiyonê nakin xeletiyên tîpîk in."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Metal",
            "en": "Metal",
            "de": "Metall",
            "fr": "Métal",
            "ru": "Металл",
            "ar": "الفلز",
            "zh": "金属",
            "ku": "Metal"
          },
          {
            "tr": "Seyreltik HCl",
            "en": "Dilute HCl",
            "de": "Verdünnte HCl",
            "fr": "HCl dilué",
            "ru": "Разб. HCl",
            "ar": "HCl مخفف",
            "zh": "稀 HCl",
            "ku": "HCl-a sulandî"
          },
          {
            "tr": "Derişik NaOH",
            "en": "Conc. NaOH",
            "de": "Konz. NaOH",
            "fr": "NaOH concentré",
            "ru": "Конц. NaOH",
            "ar": "NaOH مركّز",
            "zh": "浓 NaOH",
            "ku": "NaOH-a tîr"
          },
          {
            "tr": "Derişik HNO3",
            "en": "Conc. HNO3",
            "de": "Konz. HNO3",
            "fr": "HNO3 concentré",
            "ru": "Конц. HNO3",
            "ar": "HNO3 مركّز",
            "zh": "浓 HNO3",
            "ku": "HNO3-a tîr"
          }
        ],
        "rows": [
          [
            "X",
            "+",
            "−",
            "+"
          ],
          [
            "Y",
            "−",
            "−",
            "+"
          ],
          [
            "Z",
            "−",
            "−",
            "−"
          ],
          [
            "T",
            "+",
            "+",
            "+"
          ]
        ],
        "caption": {
          "tr": "+: gaz çıkışı gözlenir   −: tepkime gözlenmez",
          "en": "+: gas evolved   −: no reaction",
          "de": "+: Gasentwicklung   −: keine Reaktion",
          "fr": "+ : dégagement gazeux   − : aucune réaction",
          "ru": "+: выделяется газ   −: реакции нет",
          "ar": "+: يتصاعد غاز   −: لا تفاعل",
          "zh": "+：有气体产生   −：无反应",
          "ku": "+: gaz derdikeve   −: reaksiyon tune"
        }
      }
    },
    {
      "id": "u09-twin03",
      "stem": {
        "tr": "0,5 M 200 mL H2SO4 çözeltisini tamamen nötrleştirmek için kaç gram NaOH gerekir? (NaOH = 40 g/mol)",
        "en": "How many grams of NaOH are needed to completely neutralize 200 mL of 0.5 M H2SO4 solution? (NaOH = 40 g/mol)",
        "de": "Wie viel Gramm NaOH werden benötigt, um 200 mL einer 0,5 M H2SO4-Lösung vollständig zu neutralisieren? (NaOH = 40 g/mol)",
        "fr": "Combien de grammes de NaOH faut-il pour neutraliser complètement 200 mL d'une solution de H2SO4 à 0,5 M ? (NaOH = 40 g/mol)",
        "ru": "Сколько граммов NaOH необходимо для полной нейтрализации 200 мл 0,5 M раствора H2SO4? (NaOH = 40 г/моль)",
        "ar": "كم غرامًا من NaOH يلزم لمعادلة 200 mL من محلول H2SO4 تركيزه 0.5 M معادلةً تامة؟ (NaOH = 40 g/mol)",
        "zh": "完全中和 200 mL 0.5 M 的 H2SO4 溶液需要多少克 NaOH？(NaOH = 40 g/mol)",
        "ku": "Ji bo ku 200 mL çareseriya H2SO4 ya 0,5 M bi tevahî were neutralîzekirin, çend gram NaOH pêwîst e? (NaOH = 40 g/mol)"
      },
      "options": [
        {
          "tr": "2 g",
          "en": "2 g",
          "de": "2 g",
          "fr": "2 g",
          "ru": "2 г",
          "ar": "2 g",
          "zh": "2 g",
          "ku": "2 g"
        },
        {
          "tr": "4 g",
          "en": "4 g",
          "de": "4 g",
          "fr": "4 g",
          "ru": "4 г",
          "ar": "4 g",
          "zh": "4 g",
          "ku": "4 g"
        },
        {
          "tr": "8 g",
          "en": "8 g",
          "de": "8 g",
          "fr": "8 g",
          "ru": "8 г",
          "ar": "8 g",
          "zh": "8 g",
          "ku": "8 g"
        },
        {
          "tr": "16 g",
          "en": "16 g",
          "de": "16 g",
          "fr": "16 g",
          "ru": "16 г",
          "ar": "16 g",
          "zh": "16 g",
          "ku": "16 g"
        },
        {
          "tr": "40 g",
          "en": "40 g",
          "de": "40 g",
          "fr": "40 g",
          "ru": "40 г",
          "ar": "40 g",
          "zh": "40 g",
          "ku": "40 g"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "n(H2SO4) = 0,5 × 0,2 = 0,1 mol. H2SO4 + 2NaOH → Na2SO4 + 2H2O tepkimesine göre her H2SO4 iki H+ verdiğinden 0,2 mol NaOH gerekir: m = 0,2 × 40 = 8 g. Mol oranı 1:1 alınırsa 4 g, hacim 2 L sanılırsa çok daha büyük değerler bulunur.",
        "en": "n(H2SO4) = 0.5 × 0.2 = 0.1 mol. From H2SO4 + 2NaOH → Na2SO4 + 2H2O, each H2SO4 gives two H+, so 0.2 mol NaOH is needed: m = 0.2 × 40 = 8 g. Taking a 1:1 mole ratio gives 4 g; mistaking the volume for 2 L gives much larger values.",
        "de": "n(H2SO4) = 0,5 × 0,2 = 0,1 mol. Nach H2SO4 + 2NaOH → Na2SO4 + 2H2O liefert jedes H2SO4 zwei H+, daher werden 0,2 mol NaOH benötigt: m = 0,2 × 40 = 8 g. Mit einem Molverhältnis 1:1 erhält man 4 g; hält man das Volumen für 2 L, ergeben sich viel größere Werte.",
        "fr": "n(H2SO4) = 0,5 × 0,2 = 0,1 mol. D'après H2SO4 + 2NaOH → Na2SO4 + 2H2O, chaque H2SO4 fournit deux H+, il faut donc 0,2 mol de NaOH : m = 0,2 × 40 = 8 g. Avec un rapport molaire 1:1 on trouve 4 g ; en prenant 2 L pour le volume, on obtient des valeurs bien plus grandes.",
        "ru": "n(H2SO4) = 0,5 × 0,2 = 0,1 моль. По уравнению H2SO4 + 2NaOH → Na2SO4 + 2H2O каждая молекула H2SO4 даёт два иона H+, поэтому нужно 0,2 моль NaOH: m = 0,2 × 40 = 8 г. Если взять соотношение 1:1, получится 4 г, а если принять объём равным 2 л — гораздо большие значения.",
        "ar": "n(H2SO4) = 0.5 × 0.2 = 0.1 mol. وفق التفاعل H2SO4 + 2NaOH → Na2SO4 + 2H2O يعطي كل H2SO4 أيونَي H+، فيلزم 0.2 mol من NaOH: m = 0.2 × 40 = 8 g. وإذا أُخذت نسبة المولات 1:1 تنتج 4 g، وإذا ظُنّ الحجم 2 L تنتج قيم أكبر بكثير.",
        "zh": "n(H2SO4) = 0.5 × 0.2 = 0.1 mol。根据 H2SO4 + 2NaOH → Na2SO4 + 2H2O，每个 H2SO4 提供两个 H+，所以需要 0.2 mol NaOH：m = 0.2 × 40 = 8 g。若按 1:1 的物质的量之比计算得 4 g；若把体积误当作 2 L，会得到大得多的数值。",
        "ku": "n(H2SO4) = 0,5 × 0,2 = 0,1 mol. Li gorî reaksiyona H2SO4 + 2NaOH → Na2SO4 + 2H2O, her H2SO4 du H+ dide, ji ber vê yekê 0,2 mol NaOH pêwîst e: m = 0,2 × 40 = 8 g. Eger rêjeya molan 1:1 were girtin 4 g, eger qebare 2 L were hesibandin nirxên pir mezintir derdikevin."
      }
    },
    {
      "id": "u09-twin04",
      "stem": {
        "tr": "25 °C'de derişimleri eşit (0,1 M) olan HCl, CH3COOH, NaCl ve NaOH sulu çözeltilerinin pH değerlerinin küçükten büyüğe doğru sıralanışı aşağıdakilerden hangisidir?",
        "en": "Which of the following gives the pH values of aqueous HCl, CH3COOH, NaCl and NaOH solutions of equal concentration (0.1 M) at 25 °C in increasing order?",
        "de": "Welche Reihenfolge gibt die pH-Werte wässriger HCl-, CH3COOH-, NaCl- und NaOH-Lösungen gleicher Konzentration (0,1 M) bei 25 °C aufsteigend an?",
        "fr": "Lequel des classements suivants donne, par ordre croissant, le pH des solutions aqueuses de HCl, CH3COOH, NaCl et NaOH de même concentration (0,1 M) à 25 °C ?",
        "ru": "В каком ряду водные растворы HCl, CH3COOH, NaCl и NaOH одинаковой концентрации (0,1 M) при 25 °C расположены в порядке возрастания pH?",
        "ar": "أيّ مما يلي يرتّب قيم pH لمحاليل HCl وCH3COOH وNaCl وNaOH المائية المتساوية التركيز (0.1 M) عند 25 °C ترتيبًا تصاعديًا؟",
        "zh": "25 °C 时，浓度相等(0.1 M)的 HCl、CH3COOH、NaCl 和 NaOH 水溶液的 pH 由小到大的顺序是下列哪一项？",
        "ku": "Di 25 °C de rêzkirina nirxên pH-ê yên çareseriyên avî yên HCl, CH3COOH, NaCl û NaOH ku tîrbûna wan wekhev e (0,1 M), ji piçûk ber bi mezin, kîjan e?"
      },
      "options": [
        {
          "tr": "NaOH < NaCl < CH3COOH < HCl",
          "en": "NaOH < NaCl < CH3COOH < HCl",
          "de": "NaOH < NaCl < CH3COOH < HCl",
          "fr": "NaOH < NaCl < CH3COOH < HCl",
          "ru": "NaOH < NaCl < CH3COOH < HCl",
          "ar": "NaOH < NaCl < CH3COOH < HCl",
          "zh": "NaOH < NaCl < CH3COOH < HCl",
          "ku": "NaOH < NaCl < CH3COOH < HCl"
        },
        {
          "tr": "CH3COOH < HCl < NaCl < NaOH",
          "en": "CH3COOH < HCl < NaCl < NaOH",
          "de": "CH3COOH < HCl < NaCl < NaOH",
          "fr": "CH3COOH < HCl < NaCl < NaOH",
          "ru": "CH3COOH < HCl < NaCl < NaOH",
          "ar": "CH3COOH < HCl < NaCl < NaOH",
          "zh": "CH3COOH < HCl < NaCl < NaOH",
          "ku": "CH3COOH < HCl < NaCl < NaOH"
        },
        {
          "tr": "HCl < NaCl < CH3COOH < NaOH",
          "en": "HCl < NaCl < CH3COOH < NaOH",
          "de": "HCl < NaCl < CH3COOH < NaOH",
          "fr": "HCl < NaCl < CH3COOH < NaOH",
          "ru": "HCl < NaCl < CH3COOH < NaOH",
          "ar": "HCl < NaCl < CH3COOH < NaOH",
          "zh": "HCl < NaCl < CH3COOH < NaOH",
          "ku": "HCl < NaCl < CH3COOH < NaOH"
        },
        {
          "tr": "NaCl < HCl < CH3COOH < NaOH",
          "en": "NaCl < HCl < CH3COOH < NaOH",
          "de": "NaCl < HCl < CH3COOH < NaOH",
          "fr": "NaCl < HCl < CH3COOH < NaOH",
          "ru": "NaCl < HCl < CH3COOH < NaOH",
          "ar": "NaCl < HCl < CH3COOH < NaOH",
          "zh": "NaCl < HCl < CH3COOH < NaOH",
          "ku": "NaCl < HCl < CH3COOH < NaOH"
        },
        {
          "tr": "HCl < CH3COOH < NaCl < NaOH",
          "en": "HCl < CH3COOH < NaCl < NaOH",
          "de": "HCl < CH3COOH < NaCl < NaOH",
          "fr": "HCl < CH3COOH < NaCl < NaOH",
          "ru": "HCl < CH3COOH < NaCl < NaOH",
          "ar": "HCl < CH3COOH < NaCl < NaOH",
          "zh": "HCl < CH3COOH < NaCl < NaOH",
          "ku": "HCl < CH3COOH < NaCl < NaOH"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "HCl kuvvetli asittir ve tamamen iyonlaşır, bu yüzden H+ derişimi en büyük, pH'ı en küçüktür. CH3COOH zayıf asittir, kısmen iyonlaşır; asidiktir ama pH'ı HCl'den büyüktür. NaCl kuvvetli asit ile kuvvetli bazın tuzudur, çözeltisi nötrdür (pH = 7). NaOH kuvvetli bazdır, pH'ı en büyüktür. Eşit derişimli iki asidi aynı pH'ta sanmak ya da zayıf asidi daha asidik sanmak sık yapılan hatadır.",
        "en": "HCl is a strong acid and ionizes completely, so its H+ concentration is the highest and its pH the lowest. CH3COOH is a weak acid that ionizes only partly; it is acidic but its pH is higher than that of HCl. NaCl is the salt of a strong acid and a strong base, so its solution is neutral (pH = 7). NaOH is a strong base with the highest pH. Assuming two acids of equal concentration have the same pH, or that the weak acid is more acidic, are common mistakes.",
        "de": "HCl ist eine starke Säure und ionisiert vollständig, daher ist die H+-Konzentration am größten und der pH-Wert am kleinsten. CH3COOH ist eine schwache Säure und ionisiert nur teilweise; sie ist sauer, ihr pH-Wert ist aber größer als der von HCl. NaCl ist das Salz einer starken Säure und einer starken Base, seine Lösung ist neutral (pH = 7). NaOH ist eine starke Base mit dem größten pH-Wert. Häufige Fehler: zwei gleich konzentrierte Säuren für gleich sauer oder die schwache Säure für saurer zu halten.",
        "fr": "HCl est un acide fort totalement ionisé : sa concentration en H+ est la plus grande et son pH le plus petit. CH3COOH est un acide faible partiellement ionisé ; il est acide mais son pH est supérieur à celui de HCl. NaCl est le sel d'un acide fort et d'une base forte, sa solution est neutre (pH = 7). NaOH est une base forte au pH le plus élevé. Croire que deux acides de même concentration ont le même pH, ou que l'acide faible est plus acide, sont des erreurs fréquentes.",
        "ru": "HCl — сильная кислота и диссоциирует полностью, поэтому концентрация H+ в её растворе наибольшая, а pH наименьший. CH3COOH — слабая кислота и диссоциирует частично; её раствор кислый, но pH больше, чем у HCl. NaCl — соль сильной кислоты и сильного основания, её раствор нейтрален (pH = 7). NaOH — сильное основание, pH его раствора наибольший. Частые ошибки: считать, что у двух кислот одинаковой концентрации одинаковый pH, или считать слабую кислоту более кислой.",
        "ar": "HCl حمض قوي يتأين كليًا، لذا يكون تركيز H+ فيه الأكبر وقيمة pH الأصغر. CH3COOH حمض ضعيف يتأين جزئيًا؛ فهو حمضي لكن قيمة pH له أكبر من قيمة pH لمحلول HCl. NaCl ملح حمض قوي وقاعدة قوية، ومحلوله متعادل (pH = 7). NaOH قاعدة قوية لها أكبر قيمة pH. ومن الأخطاء الشائعة اعتبار حمضين متساويَي التركيز متساويَين في pH، أو اعتبار الحمض الضعيف أكثر حمضية.",
        "zh": "HCl 是强酸，完全电离，H+ 浓度最大，pH 最小。CH3COOH 是弱酸，只部分电离；溶液呈酸性，但 pH 比 HCl 大。NaCl 是强酸强碱盐，溶液呈中性(pH = 7)。NaOH 是强碱，pH 最大。常见错误是认为浓度相同的两种酸 pH 相同，或认为弱酸酸性更强。",
        "ku": "HCl asîdeke bihêz e û bi tevahî îyonîze dibe, ji ber vê yekê tîrbûna H+ ya wê herî mezin û pH-a wê herî piçûk e. CH3COOH asîdeke qels e û tenê beşek jê îyonîze dibe; asîdî ye lê pH-a wê ji ya HCl mezintir e. NaCl xwêya asîdeke bihêz û bazeke bihêz e, çareseriya wê bêalî ye (pH = 7). NaOH bazeke bihêz e û pH-a wê herî mezin e. Hesibandina ku du asîdên bi tîrbûna wekhev xwedî heman pH-ê ne, an ku asîda qels asîdîtir e, şaşiyên berbelav in."
      }
    },
    {
      "id": "u09-twin05",
      "stem": {
        "tr": "Zn, Ag ve Au tozlarından oluşan bir karışıma önce yeterli miktarda seyreltik HCl çözeltisi ekleniyor. Tepkime bittikten sonra çözünmeden kalan katı süzülüp sıcak derişik H2SO4 ile etkileştiriliyor. Birinci işlemde çıkan gaz / ikinci işlemde çıkan gaz / işlemler sonunda çözünmeden kalan katı aşağıdakilerin hangisinde doğru verilmiştir?",
        "en": "Enough dilute HCl solution is first added to a mixture of Zn, Ag and Au powders. When the reaction is over, the undissolved solid is filtered off and treated with hot concentrated H2SO4. Which of the following correctly gives the gas released in the first step / the gas released in the second step / the solid that remains undissolved at the end?",
        "de": "Zu einem Gemisch aus Zn-, Ag- und Au-Pulver wird zunächst ausreichend verdünnte HCl gegeben. Nach Ende der Reaktion wird der ungelöste Feststoff abfiltriert und mit heißer konzentrierter H2SO4 behandelt. Was gibt das Gas im ersten Schritt / das Gas im zweiten Schritt / den am Ende ungelösten Feststoff richtig an?",
        "fr": "On ajoute d'abord suffisamment de HCl dilué à un mélange de poudres de Zn, Ag et Au. Une fois la réaction terminée, le solide non dissous est filtré puis traité par H2SO4 concentré chaud. Quelle proposition donne correctement le gaz dégagé à la première étape / le gaz dégagé à la deuxième étape / le solide non dissous à la fin ?",
        "ru": "К смеси порошков Zn, Ag и Au сначала добавляют достаточное количество разбавленной HCl. После окончания реакции нерастворившийся остаток отфильтровывают и обрабатывают горячей концентрированной H2SO4. В каком варианте правильно указаны газ, выделившийся на первой стадии / газ, выделившийся на второй стадии / твёрдое вещество, оставшееся нерастворённым в конце?",
        "ar": "يُضاف أولًا قدر كافٍ من محلول HCl المخفّف إلى خليط من مساحيق Zn وAg وAu. وبعد انتهاء التفاعل يُرشَّح الصلب غير الذائب ويُعامل بـ H2SO4 المركّز الساخن. في أيّ مما يلي ذُكرت صحيحةً: الغاز المتصاعد في الخطوة الأولى / الغاز المتصاعد في الخطوة الثانية / الصلب الذي يبقى دون ذوبان في النهاية؟",
        "zh": "先向由 Zn、Ag、Au 粉末组成的混合物中加入足量稀 HCl 溶液。反应结束后，将未溶解的固体滤出，再用热浓 H2SO4 处理。下列哪一项正确给出了：第一步放出的气体 / 第二步放出的气体 / 最后仍未溶解的固体？",
        "ku": "Pêşî bi qasî têr çareseriya HCl-a sist li tevliheviyeke tozên Zn, Ag û Au tê zêdekirin. Piştî ku reaksiyon diqede, madeya hişk a ku nehelandî maye tê parzûnkirin û bi H2SO4-a tîr a germ re tê ceribandin. Gaza ku di gava yekem de derdikeve / gaza ku di gava duyem de derdikeve / madeya hişk a ku di dawiyê de nehelandî dimîne di kîjan vebijarkê de rast hatine dayîn?"
      },
      "options": [
        {
          "tr": "H2 / H2 / Ag",
          "en": "H2 / H2 / Ag",
          "de": "H2 / H2 / Ag",
          "fr": "H2 / H2 / Ag",
          "ru": "H2 / H2 / Ag",
          "ar": "H2 / H2 / Ag",
          "zh": "H2 / H2 / Ag",
          "ku": "H2 / H2 / Ag"
        },
        {
          "tr": "H2 / SO2 / Au",
          "en": "H2 / SO2 / Au",
          "de": "H2 / SO2 / Au",
          "fr": "H2 / SO2 / Au",
          "ru": "H2 / SO2 / Au",
          "ar": "H2 / SO2 / Au",
          "zh": "H2 / SO2 / Au",
          "ku": "H2 / SO2 / Au"
        },
        {
          "tr": "Cl2 / SO2 / Au",
          "en": "Cl2 / SO2 / Au",
          "de": "Cl2 / SO2 / Au",
          "fr": "Cl2 / SO2 / Au",
          "ru": "Cl2 / SO2 / Au",
          "ar": "Cl2 / SO2 / Au",
          "zh": "Cl2 / SO2 / Au",
          "ku": "Cl2 / SO2 / Au"
        },
        {
          "tr": "H2 / SO2 / Ag",
          "en": "H2 / SO2 / Ag",
          "de": "H2 / SO2 / Ag",
          "fr": "H2 / SO2 / Ag",
          "ru": "H2 / SO2 / Ag",
          "ar": "H2 / SO2 / Ag",
          "zh": "H2 / SO2 / Ag",
          "ku": "H2 / SO2 / Ag"
        },
        {
          "tr": "Gaz çıkmaz / SO2 / Au",
          "en": "No gas / SO2 / Au",
          "de": "Kein Gas / SO2 / Au",
          "fr": "Pas de gaz / SO2 / Au",
          "ru": "Газ не выделяется / SO2 / Au",
          "ar": "لا يتصاعد غاز / SO2 / Au",
          "zh": "无气体 / SO2 / Au",
          "ku": "Gaz dernakeve / SO2 / Au"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Seyreltik HCl ile yalnızca aktif metal Zn tepkime verir ve H2 çıkar (Zn + 2HCl → ZnCl2 + H2); Ag ve Au HCl ile tepkime vermez, katı olarak kalır. Sıcak derişik H2SO4 yarı soy metal Ag'yi çözer ve SO2 gazı açığa çıkar. Tam soy metal Au bu asitle de tepkime vermez ve sonunda çözünmeden kalır. HCl'den Cl2 çıktığını ya da Ag'nin sülfürik asitle tepkime vermediğini düşünmek tipik hatadır.",
        "en": "With dilute HCl only the active metal Zn reacts, releasing H2 (Zn + 2HCl → ZnCl2 + H2); Ag and Au do not react with HCl and stay as solids. Hot concentrated H2SO4 dissolves the semi-noble metal Ag and SO2 gas is released. The noble metal Au does not react with this acid either and remains undissolved at the end. Thinking that HCl gives Cl2 or that Ag does not react with sulfuric acid are typical mistakes.",
        "de": "Mit verdünnter HCl reagiert nur das aktive Metall Zn unter H2-Entwicklung (Zn + 2HCl → ZnCl2 + H2); Ag und Au reagieren nicht mit HCl und bleiben als Feststoff zurück. Heiße konzentrierte H2SO4 löst das Halbedelmetall Ag, wobei SO2-Gas entsteht. Das Edelmetall Au reagiert auch mit dieser Säure nicht und bleibt am Ende ungelöst. Typische Fehler: anzunehmen, aus HCl entstehe Cl2, oder Ag reagiere nicht mit Schwefelsäure.",
        "fr": "Avec HCl dilué, seul le métal actif Zn réagit en dégageant du H2 (Zn + 2HCl → ZnCl2 + H2) ; Ag et Au ne réagissent pas avec HCl et restent solides. H2SO4 concentré chaud dissout le métal semi-noble Ag avec dégagement de SO2. Le métal noble Au ne réagit pas non plus avec cet acide et reste non dissous à la fin. Penser que HCl dégage du Cl2 ou que Ag ne réagit pas avec l'acide sulfurique sont des erreurs typiques.",
        "ru": "С разбавленной HCl реагирует только активный металл Zn с выделением H2 (Zn + 2HCl → ZnCl2 + H2); Ag и Au с HCl не реагируют и остаются в твёрдом виде. Горячая концентрированная H2SO4 растворяет полублагородный металл Ag с выделением SO2. Благородный металл Au не реагирует и с этой кислотой и в конце остаётся нерастворённым. Типичные ошибки: считать, что из HCl выделяется Cl2, или что Ag не реагирует с серной кислотой.",
        "ar": "مع HCl المخفّف لا يتفاعل إلا الفلز النشط Zn ويتصاعد H2 (Zn + 2HCl → ZnCl2 + H2)؛ ولا يتفاعل Ag وAu مع HCl فيبقيان صلبين. ثم يذيب H2SO4 المركّز الساخن الفلز شبه النبيل Ag ويتصاعد غاز SO2. أما الفلز النبيل Au فلا يتفاعل مع هذا الحمض أيضًا ويبقى دون ذوبان في النهاية. ومن الأخطاء الشائعة الظن أن HCl يعطي Cl2 أو أن Ag لا يتفاعل مع حمض الكبريتيك.",
        "zh": "稀 HCl 只与活泼金属 Zn 反应放出 H2 (Zn + 2HCl → ZnCl2 + H2)；Ag 和 Au 不与 HCl 反应，以固体形式留下。热浓 H2SO4 能溶解半贵金属 Ag，放出 SO2 气体。贵金属 Au 也不与该酸反应，最后仍未溶解。认为 HCl 放出 Cl2，或认为 Ag 不与硫酸反应，是典型错误。",
        "ku": "Bi HCl-a sist re tenê metala çalak Zn dikeve reaksiyonê û H2 derdikeve (Zn + 2HCl → ZnCl2 + H2); Ag û Au bi HCl re nakevin reaksiyonê û wek madeya hişk dimînin. H2SO4-a tîr a germ metala nîvesîl Ag dihelîne û gaza SO2 derdikeve. Metala esîl Au bi vê asîdê re jî nakeve reaksiyonê û di dawiyê de nehelandî dimîne. Fikirîna ku ji HCl Cl2 derdikeve an ku Ag bi asîda sulfurîk re nakeve reaksiyonê şaşiyên tîpîk in."
      }
    },
    {
      "id": "u09-twin06",
      "stem": {
        "tr": "Saf suya ayrı ayrı eklenen\nI. NH3 gazı\nII. CO2 gazı\nIII. CaO katısı\nmaddelerinden hangileri 25 °C'de çözeltinin pH değerini 7'den büyük yapar?",
        "en": "Which of the following, each added separately to pure water,\nI. NH3 gas\nII. CO2 gas\nIII. solid CaO\nmake the pH of the solution greater than 7 at 25 °C?",
        "de": "Welche der folgenden Stoffe, jeweils getrennt zu reinem Wasser gegeben,\nI. NH3-Gas\nII. CO2-Gas\nIII. festes CaO\nmachen den pH-Wert der Lösung bei 25 °C größer als 7?",
        "fr": "Parmi les substances suivantes, ajoutées séparément à de l'eau pure,\nI. NH3 gazeux\nII. CO2 gazeux\nIII. CaO solide\nlesquelles rendent le pH de la solution supérieur à 7 à 25 °C ?",
        "ru": "Какие из перечисленных веществ, добавленных по отдельности к чистой воде,\nI. газ NH3\nII. газ CO2\nIII. твёрдый CaO\nделают pH раствора больше 7 при 25 °C?",
        "ar": "أيّ من المواد التالية، عند إضافة كلٍّ منها منفردة إلى الماء النقي،\nI. غاز NH3\nII. غاز CO2\nIII. CaO الصلب\nتجعل pH المحلول أكبر من 7 عند 25 °C؟",
        "zh": "将下列物质分别加入纯水中：\nI. NH3 气体\nII. CO2 气体\nIII. CaO 固体\n25 °C 时，哪些会使溶液的 pH 大于 7？",
        "ku": "Ji van madeyên ku her yek bi serê xwe li ava paqij tê zêdekirin\nI. gaza NH3\nII. gaza CO2\nIII. CaO-ya hişk\nkîjan di 25 °C de pH-a çareseriyê ji 7 mezintir dikin?"
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
        "tr": "I. NH3 suyla NH3 + H2O → NH4+ + OH- tepkimesini verir, OH- derişimi artar ve pH > 7 olur; doğru. II. CO2 bir ametal oksittir, suyla H2CO3 oluşturur ve çözelti asidik olur (pH < 7); yanlış. III. CaO aktif metal oksididir, CaO + H2O → Ca(OH)2 tepkimesiyle bazik çözelti oluşur; doğru. Yapısında OH- bulunmayan NH3'ü baz saymamak sık yapılan hatadır.",
        "en": "I. NH3 reacts with water, NH3 + H2O → NH4+ + OH-, so the OH- concentration rises and pH > 7; true. II. CO2 is a nonmetal oxide; it forms H2CO3 with water and the solution becomes acidic (pH < 7); false. III. CaO is an active metal oxide; CaO + H2O → Ca(OH)2 gives a basic solution; true. Not counting NH3 as a base because it has no OH- in its formula is a common mistake.",
        "de": "I. NH3 reagiert mit Wasser: NH3 + H2O → NH4+ + OH-, die OH--Konzentration steigt und pH > 7; richtig. II. CO2 ist ein Nichtmetalloxid, bildet mit Wasser H2CO3, die Lösung wird sauer (pH < 7); falsch. III. CaO ist ein Oxid eines aktiven Metalls; CaO + H2O → Ca(OH)2 ergibt eine basische Lösung; richtig. NH3 nicht als Base zu zählen, weil seine Formel kein OH- enthält, ist ein häufiger Fehler.",
        "fr": "I. NH3 réagit avec l'eau : NH3 + H2O → NH4+ + OH-, la concentration en OH- augmente et pH > 7 ; vrai. II. CO2 est un oxyde de non-métal ; il forme H2CO3 avec l'eau et la solution devient acide (pH < 7) ; faux. III. CaO est un oxyde de métal actif ; CaO + H2O → Ca(OH)2 donne une solution basique ; vrai. Ne pas compter NH3 comme base parce que sa formule ne contient pas OH- est une erreur fréquente.",
        "ru": "I. NH3 реагирует с водой: NH3 + H2O → NH4+ + OH-, концентрация OH- растёт и pH > 7; верно. II. CO2 — оксид неметалла, с водой образует H2CO3, раствор становится кислым (pH < 7); неверно. III. CaO — оксид активного металла; CaO + H2O → Ca(OH)2 даёт щелочной раствор; верно. Частая ошибка — не считать NH3 основанием, потому что в его формуле нет OH-.",
        "ar": "I. يتفاعل NH3 مع الماء: NH3 + H2O → NH4+ + OH-، فيزداد تركيز OH- ويصبح pH > 7؛ صحيح. II. CO2 أكسيد لافلز يكوّن مع الماء H2CO3 فيصبح المحلول حمضيًا (pH < 7)؛ خطأ. III. CaO أكسيد فلز نشط، والتفاعل CaO + H2O → Ca(OH)2 يعطي محلولًا قاعديًا؛ صحيح. ومن الأخطاء الشائعة عدم اعتبار NH3 قاعدة لأن صيغته لا تحتوي على OH-.",
        "zh": "I. NH3 与水反应：NH3 + H2O → NH4+ + OH-，OH- 浓度增大，pH > 7；正确。II. CO2 是非金属氧化物，与水生成 H2CO3，溶液呈酸性(pH < 7)；错误。III. CaO 是活泼金属氧化物，CaO + H2O → Ca(OH)2 生成碱性溶液；正确。因 NH3 化学式中没有 OH- 就不把它当作碱，是常见错误。",
        "ku": "I. NH3 bi avê re dikeve reaksiyona NH3 + H2O → NH4+ + OH-, tîrbûna OH- zêde dibe û pH > 7 dibe; rast e. II. CO2 oksîda nemetalekê ye, bi avê re H2CO3 çêdike û çareserî asîdî dibe (pH < 7); şaş e. III. CaO oksîda metaleke çalak e, bi reaksiyona CaO + H2O → Ca(OH)2 çareseriyeke bazî çêdibe; rast e. Nehesibandina NH3 wek baz ji ber ku di avahiya wê de OH- tune ye şaşiyeke berbelav e."
      }
    },
    {
      "id": "u09-twin07",
      "stem": {
        "tr": "Şekilde 25 °C'deki K, L ve M sulu çözeltilerinin pH değerleri pH çizelgesi üzerinde gösterilmiştir.\nI. K çözeltisindeki H+ iyonu derişimi, L çözeltisindekinin 1000 katıdır.\nII. M çözeltisi mavi ve kırmızı turnusol kâğıtlarının rengini değiştirmez.\nIII. L çözeltisine saf su eklenmeye devam edilirse çözeltinin pH değeri 7'nin üzerine çıkar.\nyargılarından hangileri doğrudur?",
        "en": "The figure shows the pH values of aqueous solutions K, L and M at 25 °C on a pH scale. Which of the following statements are true?\nI. The H+ ion concentration in solution K is 1000 times that in solution L.\nII. Solution M does not change the colour of blue or red litmus paper.\nIII. If pure water keeps being added to solution L, its pH rises above 7.",
        "de": "Die Abbildung zeigt die pH-Werte der wässrigen Lösungen K, L und M bei 25 °C auf einer pH-Skala. Welche Aussagen sind richtig?\nI. Die H+-Konzentration in Lösung K ist 1000-mal so groß wie in Lösung L.\nII. Lösung M verändert die Farbe von blauem und rotem Lackmuspapier nicht.\nIII. Gibt man fortlaufend reines Wasser zu Lösung L, steigt ihr pH-Wert über 7.",
        "fr": "La figure indique, sur une échelle de pH, le pH des solutions aqueuses K, L et M à 25 °C. Quelles affirmations sont vraies ?\nI. La concentration en ions H+ de la solution K est 1000 fois celle de la solution L.\nII. La solution M ne change pas la couleur du papier de tournesol bleu ni rouge.\nIII. Si l'on continue d'ajouter de l'eau pure à la solution L, son pH dépasse 7.",
        "ru": "На рисунке на шкале pH отмечены значения pH водных растворов K, L и M при 25 °C. Какие утверждения верны?\nI. Концентрация ионов H+ в растворе K в 1000 раз больше, чем в растворе L.\nII. Раствор M не изменяет окраску ни синей, ни красной лакмусовой бумаги.\nIII. Если продолжать добавлять к раствору L чистую воду, его pH станет больше 7.",
        "ar": "يبيّن الشكل قيم pH للمحاليل المائية K وL وM عند 25 °C على مقياس pH. أيّ العبارات الآتية صحيحة؟\nI. تركيز أيونات H+ في المحلول K يساوي 1000 ضعف تركيزها في المحلول L.\nII. لا يغيّر المحلول M لون ورق عباد الشمس الأزرق ولا الأحمر.\nIII. إذا استمرت إضافة الماء النقي إلى المحلول L ترتفع قيمة pH إلى أكثر من 7.",
        "zh": "图中在 pH 标尺上标出了 25 °C 时水溶液 K、L、M 的 pH。下列说法中哪些正确？\nI. 溶液 K 中 H+ 离子的浓度是溶液 L 中的 1000 倍。\nII. 溶液 M 不能使蓝色或红色石蕊试纸变色。\nIII. 若不断向溶液 L 中加入纯水，其 pH 会升高到 7 以上。",
        "ku": "Di şeklê de nirxên pH-ê yên çareseriyên avî K, L û M di 25 °C de li ser pîvana pH-ê hatine nîşandan. Kîjan ji van gotinan rast in?\nI. Tîrbûna îyonên H+ di çareseriya K de 1000 qatê ya di çareseriya L de ye.\nII. Çareseriya M rengê kaxezên turnusola şîn û sor naguherîne.\nIII. Eger av a saf her ku diçe li çareseriya L were zêdekirin, pH-a wê ji 7-an derbas dibe."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "Only I",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅 I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "Only II",
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
      "correctIndex": 2,
      "explanation": {
        "tr": "Şekilden K'nin pH'ı 2, L'ninki 5, M'ninki 7 okunur. I. [H+] = 10^-pH olduğundan K'de 10^-2 M, L'de 10^-5 M H+ vardır; oran 10^3 = 1000'dir; doğru. II. pH'ı 7 olan M nötrdür, turnusolün rengini değiştirmez; doğru. III. Asidik bir çözelti seyreltildikçe H+ derişimi azalır ve pH 7'ye yaklaşır; ancak su eklemek ortama OH- fazlası kazandırmadığı için pH 7'yi geçemez; yanlış. pH farkı 3 diye derişim farkını 3 kat sanmak tipik bir hatadır.",
        "en": "From the figure, the pH of K is 2, of L is 5 and of M is 7. I. Since [H+] = 10^-pH, K contains 10^-2 M and L 10^-5 M H+; the ratio is 10^3 = 1000; true. II. M, with pH 7, is neutral and does not change the colour of litmus; true. III. When an acidic solution is diluted, [H+] decreases and the pH approaches 7, but adding water cannot create an excess of OH-, so the pH cannot exceed 7; false. Thinking that a pH difference of 3 means a 3-fold concentration difference is a typical mistake.",
        "de": "Aus der Abbildung liest man pH = 2 für K, 5 für L und 7 für M ab. I. Wegen [H+] = 10^-pH enthält K 10^-2 M und L 10^-5 M H+; das Verhältnis ist 10^3 = 1000; richtig. II. M mit pH 7 ist neutral und verändert die Lackmusfarbe nicht; richtig. III. Beim Verdünnen einer sauren Lösung sinkt [H+] und der pH-Wert nähert sich 7; Wasser erzeugt aber keinen OH--Überschuss, daher kann der pH-Wert 7 nicht überschreiten; falsch. Ein typischer Fehler ist, einen pH-Unterschied von 3 als dreifachen Konzentrationsunterschied zu deuten.",
        "fr": "On lit sur la figure pH = 2 pour K, 5 pour L et 7 pour M. I. Comme [H+] = 10^-pH, K contient 10^-2 M et L 10^-5 M de H+ ; le rapport vaut 10^3 = 1000 ; vrai. II. M, de pH 7, est neutre et ne change pas la couleur du tournesol ; vrai. III. Quand on dilue une solution acide, [H+] diminue et le pH tend vers 7, mais l'ajout d'eau ne crée pas d'excès de OH-, donc le pH ne peut pas dépasser 7 ; faux. Croire qu'un écart de pH de 3 correspond à un rapport de concentrations de 3 est une erreur typique.",
        "ru": "По рисунку pH раствора K равен 2, L — 5, M — 7. I. Так как [H+] = 10^-pH, в K содержится 10^-2 M, а в L 10^-5 M H+; отношение 10^3 = 1000; верно. II. Раствор M с pH 7 нейтрален и не меняет окраску лакмуса; верно. III. При разбавлении кислого раствора [H+] уменьшается и pH приближается к 7, но добавление воды не создаёт избытка OH-, поэтому pH не может превысить 7; неверно. Считать, что разница pH в 3 единицы означает трёхкратную разницу концентраций, — типичная ошибка.",
        "ar": "يُقرأ من الشكل أن pH المحلول K يساوي 2 وL يساوي 5 وM يساوي 7. I. بما أن [H+] = 10^-pH ففي K يوجد 10^-2 M من H+ وفي L يوجد 10^-5 M؛ والنسبة 10^3 = 1000؛ صحيحة. II. المحلول M الذي pH له 7 متعادل ولا يغيّر لون عباد الشمس؛ صحيحة. III. عند تخفيف محلول حمضي يقل [H+] ويقترب pH من 7، لكن إضافة الماء لا تُحدث فائضًا من OH-، لذا لا يتجاوز pH القيمة 7؛ خاطئة. ومن الأخطاء الشائعة الظن أن فرق pH بمقدار 3 يعني فرقًا في التركيز بمقدار 3 أضعاف.",
        "zh": "由图可读出 K 的 pH 为 2，L 为 5，M 为 7。I. 因为 [H+] = 10^-pH，K 中 H+ 为 10^-2 M，L 中为 10^-5 M，比值为 10^3 = 1000；正确。II. pH 为 7 的 M 呈中性，不使石蕊变色；正确。III. 酸性溶液稀释时 [H+] 减小，pH 趋近于 7，但加水不会产生过量的 OH-，所以 pH 不会超过 7；错误。认为 pH 相差 3 就是浓度相差 3 倍，是典型错误。",
        "ku": "Ji şeklê tê xwendin ku pH-a K 2, ya L 5 û ya M 7 ye. I. Ji ber ku [H+] = 10^-pH, di K de 10^-2 M û di L de 10^-5 M H+ heye; rêje 10^3 = 1000 e; rast e. II. M ya ku pH-a wê 7 e notir e û rengê turnusolê naguherîne; rast e. III. Dema çareseriyeke asîdî tê sulandin [H+] kêm dibe û pH nêzî 7-an dibe; lê zêdekirina avê OH- zêde çênake, ji ber vê yekê pH nikare ji 7-an derbas bibe; şaş e. Hesibandina ku cudahiya pH-ê ya 3 tê wateya cudahiya tîrbûnê ya 3 qatî xeletiyeke tîpîk e."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 170,
        "markup": "<text x=\"180\" y=\"22\" text-anchor=\"middle\" class=\"qf-strong\">pH (25 °C)</text><rect x=\"30\" y=\"96\" width=\"150\" height=\"16\" class=\"qf-accent2\"/><rect x=\"180\" y=\"96\" width=\"150\" height=\"16\" class=\"qf-accent3\"/><rect x=\"30\" y=\"96\" width=\"300\" height=\"16\" class=\"qf-line\"/><line x1=\"30.0\" y1=\"112\" x2=\"30.0\" y2=\"118\" class=\"qf-line\"/><text x=\"30.0\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">0</text><line x1=\"51.4\" y1=\"112\" x2=\"51.4\" y2=\"118\" class=\"qf-line\"/><text x=\"51.4\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">1</text><line x1=\"72.9\" y1=\"112\" x2=\"72.9\" y2=\"118\" class=\"qf-line\"/><text x=\"72.9\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">2</text><line x1=\"94.3\" y1=\"112\" x2=\"94.3\" y2=\"118\" class=\"qf-line\"/><text x=\"94.3\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">3</text><line x1=\"115.7\" y1=\"112\" x2=\"115.7\" y2=\"118\" class=\"qf-line\"/><text x=\"115.7\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">4</text><line x1=\"137.1\" y1=\"112\" x2=\"137.1\" y2=\"118\" class=\"qf-line\"/><text x=\"137.1\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">5</text><line x1=\"158.6\" y1=\"112\" x2=\"158.6\" y2=\"118\" class=\"qf-line\"/><text x=\"158.6\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">6</text><line x1=\"180.0\" y1=\"112\" x2=\"180.0\" y2=\"118\" class=\"qf-line\"/><text x=\"180.0\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">7</text><line x1=\"201.4\" y1=\"112\" x2=\"201.4\" y2=\"118\" class=\"qf-line\"/><text x=\"201.4\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">8</text><line x1=\"222.9\" y1=\"112\" x2=\"222.9\" y2=\"118\" class=\"qf-line\"/><text x=\"222.9\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">9</text><line x1=\"244.3\" y1=\"112\" x2=\"244.3\" y2=\"118\" class=\"qf-line\"/><text x=\"244.3\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">10</text><line x1=\"265.7\" y1=\"112\" x2=\"265.7\" y2=\"118\" class=\"qf-line\"/><text x=\"265.7\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">11</text><line x1=\"287.1\" y1=\"112\" x2=\"287.1\" y2=\"118\" class=\"qf-line\"/><text x=\"287.1\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">12</text><line x1=\"308.6\" y1=\"112\" x2=\"308.6\" y2=\"118\" class=\"qf-line\"/><text x=\"308.6\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">13</text><line x1=\"330.0\" y1=\"112\" x2=\"330.0\" y2=\"118\" class=\"qf-line\"/><text x=\"330.0\" y=\"132\" text-anchor=\"middle\" class=\"qf-small\">14</text><polygon points=\"65.9,78 79.9,78 72.9,92\" class=\"qf-accent\"/><text x=\"72.9\" y=\"70\" text-anchor=\"middle\" class=\"qf-big\">K</text><polygon points=\"130.1,78 144.1,78 137.1,92\" class=\"qf-accent\"/><text x=\"137.1\" y=\"70\" text-anchor=\"middle\" class=\"qf-big\">L</text><polygon points=\"173.0,78 187.0,78 180.0,92\" class=\"qf-accent\"/><text x=\"180.0\" y=\"70\" text-anchor=\"middle\" class=\"qf-big\">M</text><text x=\"105\" y=\"158\" text-anchor=\"middle\" class=\"qf-small\">{{acid}}</text><text x=\"255\" y=\"158\" text-anchor=\"middle\" class=\"qf-small\">{{base}}</text>",
        "labels": {
          "acid": {
            "tr": "← asidik",
            "en": "← acidic",
            "de": "← sauer",
            "fr": "← acide",
            "ru": "← кислая",
            "ar": "← حمضي",
            "zh": "← 酸性",
            "ku": "← asîdî"
          },
          "base": {
            "tr": "bazik →",
            "en": "basic →",
            "de": "basisch →",
            "fr": "basique →",
            "ru": "щелочная →",
            "ar": "قاعدي →",
            "zh": "碱性 →",
            "ku": "bazî →"
          }
        }
      }
    },
    {
      "id": "u09-twin08",
      "stem": {
        "tr": "CaCO3 ve NaCl katılarından oluşan 30 g'lık bir karışım yeterli miktarda HCl çözeltisine atılıyor. Şekildeki grafik, açığa çıkan CO2 gazının normal koşullardaki (NK) hacminin zamanla değişimini göstermektedir. Karışımdaki NaCl kütlesi kaç gramdır? (CaCO3 = 100 g/mol; NK'da 1 mol gaz 22,4 L)",
        "en": "A 30 g mixture of solid CaCO3 and NaCl is placed in enough HCl solution. The graph shows how the volume of CO2 released (measured at STP) changes with time. What is the mass of NaCl in the mixture in grams? (CaCO3 = 100 g/mol; 1 mol of gas occupies 22.4 L at STP)",
        "de": "Ein 30 g schweres Gemisch aus festem CaCO3 und NaCl wird in ausreichend HCl-Lösung gegeben. Das Diagramm zeigt, wie sich das Volumen des freigesetzten CO2 (unter Normbedingungen) mit der Zeit ändert. Wie viel Gramm NaCl enthält das Gemisch? (CaCO3 = 100 g/mol; 1 mol Gas nimmt unter Normbedingungen 22,4 L ein)",
        "fr": "On place 30 g d'un mélange de CaCO3 et de NaCl solides dans suffisamment de solution de HCl. Le graphique montre l'évolution dans le temps du volume de CO2 dégagé (mesuré dans les CN). Quelle est la masse de NaCl dans le mélange, en grammes ? (CaCO3 = 100 g/mol ; 1 mol de gaz occupe 22,4 L dans les CN)",
        "ru": "Смесь твёрдых CaCO3 и NaCl массой 30 г поместили в достаточное количество раствора HCl. На графике показано изменение во времени объёма выделившегося CO2 (н. у.). Сколько граммов NaCl содержится в смеси? (CaCO3 = 100 г/моль; 1 моль газа при н. у. занимает 22,4 л)",
        "ar": "وُضع خليط كتلته 30 g من مادتَي CaCO3 وNaCl الصلبتين في كمية كافية من محلول HCl. يبيّن الرسم البياني تغيّر حجم غاز CO2 المتصاعد (مقيسًا في الظروف القياسية) مع الزمن. ما كتلة NaCl في الخليط بالغرام؟ (CaCO3 = 100 g/mol؛ 1 mol من الغاز يشغل 22.4 L في الظروف القياسية)",
        "zh": "将由固体 CaCO3 和 NaCl 组成的 30 g 混合物放入足量 HCl 溶液中。图中给出了放出的 CO2 气体体积（标准状况）随时间的变化。混合物中 NaCl 的质量是多少克？(CaCO3 = 100 g/mol；标准状况下 1 mol 气体为 22.4 L)",
        "ku": "Tevliheviyeke 30 g ji hişkên CaCO3 û NaCl tê avêtin nav çareseriya HCl a têr. Grafîka di şeklê de nîşan dide ku qebareya gaza CO2 ya derketî (di şertên normal de) bi demê re çawa diguhere. Girseya NaCl di tevliheviyê de çend gram e? (CaCO3 = 100 g/mol; di ŞN de 1 mol gaz 22,4 L ye)"
      },
      "options": [
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
          "tr": "10",
          "en": "10",
          "de": "10",
          "fr": "10",
          "ru": "10",
          "ar": "10",
          "zh": "10",
          "ku": "10"
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
          "tr": "20",
          "en": "20",
          "de": "20",
          "fr": "20",
          "ru": "20",
          "ar": "20",
          "zh": "20",
          "ku": "20"
        },
        {
          "tr": "25",
          "en": "25",
          "de": "25",
          "fr": "25",
          "ru": "25",
          "ar": "25",
          "zh": "25",
          "ku": "25"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Grafikte gaz hacmi 4,48 L'de sabitlenir; tepkime bittiğinde toplam 4,48 L CO2 oluşmuştur: n(CO2) = 4,48 / 22,4 = 0,2 mol. NaCl, HCl ile gaz oluşturmaz; CO2'nin tamamı CaCO3 + 2HCl → CaCl2 + H2O + CO2 tepkimesinden gelir. Bu yüzden n(CaCO3) = 0,2 mol, m(CaCO3) = 0,2 × 100 = 20 g ve m(NaCl) = 30 − 20 = 10 g'dır. CaCO3 kütlesini (20 g) cevap sanmak ya da HCl'nin katsayısını CO2'ye uygulayıp 0,1 mol CaCO3 bulmak (NaCl = 20 g) tipik hatalardır.",
        "en": "On the graph the gas volume levels off at 4.48 L, so when the reaction is over 4.48 L of CO2 has formed: n(CO2) = 4.48 / 22.4 = 0.2 mol. NaCl gives no gas with HCl; all the CO2 comes from CaCO3 + 2HCl → CaCl2 + H2O + CO2. Therefore n(CaCO3) = 0.2 mol, m(CaCO3) = 0.2 × 100 = 20 g and m(NaCl) = 30 − 20 = 10 g. Giving the mass of CaCO3 (20 g) as the answer, or applying the coefficient of HCl to CO2 and finding 0.1 mol CaCO3 (NaCl = 20 g), are typical mistakes.",
        "de": "Im Diagramm bleibt das Gasvolumen bei 4,48 L konstant; nach Reaktionsende sind also 4,48 L CO2 entstanden: n(CO2) = 4,48 / 22,4 = 0,2 mol. NaCl bildet mit HCl kein Gas; das gesamte CO2 stammt aus CaCO3 + 2HCl → CaCl2 + H2O + CO2. Daher ist n(CaCO3) = 0,2 mol, m(CaCO3) = 0,2 × 100 = 20 g und m(NaCl) = 30 − 20 = 10 g. Typische Fehler sind, die Masse von CaCO3 (20 g) anzugeben oder den Koeffizienten von HCl auf CO2 anzuwenden und 0,1 mol CaCO3 zu erhalten (NaCl = 20 g).",
        "fr": "Sur le graphique, le volume de gaz se stabilise à 4,48 L : à la fin de la réaction, 4,48 L de CO2 se sont formés, soit n(CO2) = 4,48 / 22,4 = 0,2 mol. NaCl ne donne pas de gaz avec HCl ; tout le CO2 provient de CaCO3 + 2HCl → CaCl2 + H2O + CO2. Donc n(CaCO3) = 0,2 mol, m(CaCO3) = 0,2 × 100 = 20 g et m(NaCl) = 30 − 20 = 10 g. Donner la masse de CaCO3 (20 g) comme réponse, ou appliquer le coefficient de HCl au CO2 et trouver 0,1 mol de CaCO3 (NaCl = 20 g), sont des erreurs typiques.",
        "ru": "По графику объём газа перестаёт расти на отметке 4,48 л, то есть к концу реакции образовалось 4,48 л CO2: n(CO2) = 4,48 / 22,4 = 0,2 моль. NaCl не выделяет газа с HCl; весь CO2 образуется по реакции CaCO3 + 2HCl → CaCl2 + H2O + CO2. Поэтому n(CaCO3) = 0,2 моль, m(CaCO3) = 0,2 × 100 = 20 г, а m(NaCl) = 30 − 20 = 10 г. Типичные ошибки — указать массу CaCO3 (20 г) или перенести коэффициент HCl на CO2 и получить 0,1 моль CaCO3 (NaCl = 20 г).",
        "ar": "في الرسم البياني يثبت حجم الغاز عند 4.48 L، أي إنه عند انتهاء التفاعل تكوّن 4.48 L من CO2: n(CO2) = 4.48 / 22.4 = 0.2 mol. لا يُطلق NaCl غازًا مع HCl، وكل CO2 يأتي من التفاعل CaCO3 + 2HCl → CaCl2 + H2O + CO2. لذا n(CaCO3) = 0.2 mol وm(CaCO3) = 0.2 × 100 = 20 g وm(NaCl) = 30 − 20 = 10 g. ومن الأخطاء الشائعة إعطاء كتلة CaCO3 (20 g) إجابةً، أو تطبيق معامل HCl على CO2 والحصول على 0.1 mol من CaCO3 (NaCl = 20 g).",
        "zh": "图中气体体积在 4.48 L 处保持不变，即反应结束时共生成 4.48 L CO2：n(CO2) = 4.48 / 22.4 = 0.2 mol。NaCl 与 HCl 不产生气体，CO2 全部来自 CaCO3 + 2HCl → CaCl2 + H2O + CO2。因此 n(CaCO3) = 0.2 mol，m(CaCO3) = 0.2 × 100 = 20 g，m(NaCl) = 30 − 20 = 10 g。把 CaCO3 的质量(20 g)当作答案，或把 HCl 的系数套用到 CO2 上得出 0.1 mol CaCO3(NaCl = 20 g)，都是典型错误。",
        "ku": "Di grafîkê de qebareya gazê li 4,48 L sabît dibe; yanî dema reaksiyon diqede bi giştî 4,48 L CO2 çêbûye: n(CO2) = 4,48 / 22,4 = 0,2 mol. NaCl bi HCl re gazê dernaxe; hemû CO2 ji reaksiyona CaCO3 + 2HCl → CaCl2 + H2O + CO2 tê. Ji ber vê yekê n(CaCO3) = 0,2 mol, m(CaCO3) = 0,2 × 100 = 20 g û m(NaCl) = 30 − 20 = 10 g ye. Dayîna girseya CaCO3 (20 g) wek bersiv, an jî sepandina kêşeya HCl li ser CO2 û dîtina 0,1 mol CaCO3 (NaCl = 20 g) xeletiyên tîpîk in."
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
          "tr": "CO₂ hacmi (L, NK)",
          "en": "CO₂ volume (L, STP)",
          "de": "CO₂-Volumen (L, NB)",
          "fr": "Volume de CO₂ (L, CN)",
          "ru": "Объём CO₂ (л, н. у.)",
          "ar": "حجم CO₂ (L، ظ.ق.)",
          "zh": "CO₂ 体积 (L，标况)",
          "ku": "Qebareya CO₂ (L, ŞN)"
        },
        "xMax": 120,
        "yMax": 6,
        "xTicks": [
          30,
          60,
          90,
          120
        ],
        "yTicks": [
          {
            "v": 4.48,
            "label": {
              "tr": "4,48",
              "en": "4.48",
              "de": "4,48",
              "fr": "4,48",
              "ru": "4,48",
              "ar": "4.48",
              "zh": "4.48",
              "ku": "4,48"
            }
          }
        ],
        "series": [
          {
            "points": [
              [
                0,
                0
              ],
              [
                10,
                1.2
              ],
              [
                20,
                2.2
              ],
              [
                30,
                2.9
              ],
              [
                45,
                3.65
              ],
              [
                60,
                4.1
              ],
              [
                75,
                4.38
              ],
              [
                90,
                4.48
              ],
              [
                120,
                4.48
              ]
            ]
          }
        ]
      }
    },
    {
      "id": "u09-twin09",
      "stem": {
        "tr": "Mavi turnusol kâğıdını kırmızıya çeviren bir X çözeltisi ile ilgili\nI. Birkaç damla fenolftalein eklenirse pembe renk oluşur.\nII. İçine magnezyum (Mg) şerit atılırsa H2 gazı açığa çıkar.\nIII. İçine mermer (CaCO3) parçası atılırsa CO2 gazı açığa çıkar.\nyargılarından hangileri doğrudur?",
        "en": "Solution X turns blue litmus paper red. Which of the following statements about X are true?\nI. If a few drops of phenolphthalein are added, a pink colour appears.\nII. If a magnesium (Mg) ribbon is placed in it, H2 gas is released.\nIII. If a piece of marble (CaCO3) is placed in it, CO2 gas is released.",
        "de": "Lösung X färbt blaues Lackmuspapier rot. Welche Aussagen über X sind richtig?\nI. Nach Zugabe einiger Tropfen Phenolphthalein entsteht eine pinke Färbung.\nII. Gibt man ein Magnesiumband (Mg) hinein, entsteht H2-Gas.\nIII. Gibt man ein Stück Marmor (CaCO3) hinein, entsteht CO2-Gas.",
        "fr": "La solution X fait virer le papier de tournesol bleu au rouge. Quelles affirmations concernant X sont vraies ?\nI. Si l'on ajoute quelques gouttes de phénolphtaléine, une couleur rose apparaît.\nII. Si l'on y plonge un ruban de magnésium (Mg), du H2 se dégage.\nIII. Si l'on y met un morceau de marbre (CaCO3), du CO2 se dégage.",
        "ru": "Раствор X окрашивает синюю лакмусовую бумагу в красный цвет. Какие утверждения о X верны?\nI. При добавлении нескольких капель фенолфталеина появляется малиновая окраска.\nII. Если опустить в него магниевую ленту (Mg), выделяется газ H2.\nIII. Если опустить в него кусочек мрамора (CaCO3), выделяется газ CO2.",
        "ar": "يحوّل المحلول X ورق عباد الشمس الأزرق إلى الأحمر. أيّ العبارات التالية عن X صحيحة؟\nI. عند إضافة بضع قطرات من الفينولفثالين يظهر لون وردي.\nII. عند وضع شريط مغنيسيوم (Mg) فيه يتصاعد غاز H2.\nIII. عند وضع قطعة رخام (CaCO3) فيه يتصاعد غاز CO2.",
        "zh": "溶液 X 能使蓝色石蕊试纸变红。关于 X 的下列说法中哪些正确？\nI. 加入几滴酚酞后呈粉红色。\nII. 放入镁(Mg)条会放出 H2 气体。\nIII. 放入一块大理石(CaCO3)会放出 CO2 气体。",
        "ku": "Çareseriya X kaxeza turnusola şîn sor dike. Kîjan ji van gotinên li ser X rast in?\nI. Eger çend dilop fenolftaleyîn lê were zêdekirin, rengê pembe çêdibe.\nII. Eger şerîteke magnezyûmê (Mg) tê de were avêtin, gaza H2 derdikeve.\nIII. Eger perçeyek mermer (CaCO3) tê de were avêtin, gaza CO2 derdikeve."
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
        "tr": "Mavi turnusolu kırmızıya çeviren çözelti asidiktir. I. Fenolftalein asidik ortamda renksizdir, pembe renk bazik ortamda görülür; yanlış. II. Mg aktif bir metaldir, asitle tepkimeye girerek H2 açığa çıkarır; doğru. III. Karbonatlar asitle tepkimeye girerek CO2 açığa çıkarır; doğru.",
        "en": "A solution that turns blue litmus red is acidic. I. Phenolphthalein is colourless in acidic medium; the pink colour appears in basic medium; false. II. Mg is an active metal and releases H2 with an acid; true. III. Carbonates react with acids and release CO2; true.",
        "de": "Eine Lösung, die blauen Lackmus rot färbt, ist sauer. I. Phenolphthalein ist im sauren Milieu farblos, pink wird es im basischen; falsch. II. Mg ist ein aktives Metall und setzt mit Säure H2 frei; richtig. III. Carbonate reagieren mit Säuren unter CO2-Entwicklung; richtig.",
        "fr": "Une solution qui fait virer le tournesol bleu au rouge est acide. I. La phénolphtaléine est incolore en milieu acide ; la couleur rose apparaît en milieu basique ; faux. II. Mg est un métal actif qui dégage du H2 avec un acide ; vrai. III. Les carbonates réagissent avec les acides en dégageant du CO2 ; vrai.",
        "ru": "Раствор, окрашивающий синий лакмус в красный, кислый. I. В кислой среде фенолфталеин бесцветен, малиновым он становится в щелочной; неверно. II. Mg — активный металл, с кислотой выделяет H2; верно. III. Карбонаты реагируют с кислотами с выделением CO2; верно.",
        "ar": "المحلول الذي يحوّل عباد الشمس الأزرق إلى الأحمر حمضي. I. الفينولفثالين عديم اللون في الوسط الحمضي، واللون الوردي يظهر في الوسط القاعدي؛ خطأ. II. Mg فلز نشط يطلق H2 مع الحمض؛ صحيح. III. تتفاعل الكربونات مع الأحماض ويتصاعد CO2؛ صحيح.",
        "zh": "能使蓝色石蕊变红的溶液呈酸性。I. 酚酞在酸性介质中无色，粉红色出现在碱性介质中；错误。II. Mg 是活泼金属，与酸反应放出 H2；正确。III. 碳酸盐与酸反应放出 CO2；正确。",
        "ku": "Çareseriya ku turnusola şîn sor dike asîdî ye. I. Fenolftaleyîn di navgîna asîdî de bêreng e, rengê pembe di navgîna bazî de xuya dibe; şaş e. II. Mg metaleke çalak e û bi asîdê re dikeve reaksiyonê û H2 derdixe; rast e. III. Karbonat bi asîdan re dikevin reaksiyonê û CO2 derdixin; rast e."
      }
    },
    {
      "id": "u09-twin10",
      "stem": {
        "tr": "Aşağıdaki tuz – kullanım alanı eşleştirmelerinden hangisi yanlıştır?",
        "en": "Which of the following salt – use pairings is wrong?",
        "de": "Welche der folgenden Zuordnungen Salz – Verwendung ist falsch?",
        "fr": "Laquelle des associations sel – utilisation suivantes est fausse ?",
        "ru": "Какое из соответствий «соль — применение» указано неверно?",
        "ar": "أيّ من مطابقات «الملح – الاستخدام» التالية خاطئة؟",
        "zh": "下列“盐—用途”的对应中，哪一项是错误的？",
        "ku": "Kîjan ji van cotkirinên xwê – qada bikaranînê şaş e?"
      },
      "options": [
        {
          "tr": "NaCl – yemeklere tat verme ve kışın yollardaki buzlanmayı önleme",
          "en": "NaCl – flavouring food and preventing ice on roads in winter",
          "de": "NaCl – Würzen von Speisen und Verhindern von Glätte auf Straßen im Winter",
          "fr": "NaCl – assaisonner les aliments et empêcher le verglas sur les routes en hiver",
          "ru": "NaCl — придание вкуса пище и борьба с гололёдом на дорогах зимой",
          "ar": "NaCl – إكساب الطعام نكهة ومنع تجمّد الطرق في الشتاء",
          "zh": "NaCl – 调味以及冬季防止道路结冰",
          "ku": "NaCl – tamdana xwarinan û di zivistanê de pêşîgirtina li qeşagirtina rêyan"
        },
        {
          "tr": "NaHCO3 – cam üretiminde temel hammadde",
          "en": "NaHCO3 – main raw material in glass production",
          "de": "NaHCO3 – Hauptrohstoff der Glasherstellung",
          "fr": "NaHCO3 – principale matière première de la fabrication du verre",
          "ru": "NaHCO3 — основное сырьё в производстве стекла",
          "ar": "NaHCO3 – المادة الخام الأساسية في صناعة الزجاج",
          "zh": "NaHCO3 – 玻璃生产的主要原料",
          "ku": "NaHCO3 – madeya xav a bingehîn di hilberîna camê de"
        },
        {
          "tr": "Na2CO3 – çamaşır sodası olarak cam, sabun ve deterjan üretimi",
          "en": "Na2CO3 – as washing soda, production of glass, soap and detergents",
          "de": "Na2CO3 – als Waschsoda, Herstellung von Glas, Seife und Waschmitteln",
          "fr": "Na2CO3 – en tant que cristaux de soude, fabrication du verre, du savon et des détergents",
          "ru": "Na2CO3 — как стиральная сода: производство стекла, мыла и моющих средств",
          "ar": "Na2CO3 – كصودا الغسيل، وفي صناعة الزجاج والصابون والمنظفات",
          "zh": "Na2CO3 – 作为洗涤碱（纯碱），用于生产玻璃、肥皂和洗涤剂",
          "ku": "Na2CO3 – wek sodaya cilşûştinê, di hilberîna cam, sabûn û deterjanan de"
        },
        {
          "tr": "CaCO3 – mermer ve kireç taşı olarak yapı malzemesi",
          "en": "CaCO3 – building material as marble and limestone",
          "de": "CaCO3 – Baumaterial als Marmor und Kalkstein",
          "fr": "CaCO3 – matériau de construction sous forme de marbre et de calcaire",
          "ru": "CaCO3 — строительный материал в виде мрамора и известняка",
          "ar": "CaCO3 – مادة بناء على شكل رخام وحجر جيري",
          "zh": "CaCO3 – 以大理石和石灰石的形式作为建筑材料",
          "ku": "CaCO3 – wek mermer û kevirê kilsê madeya avahiyê"
        },
        {
          "tr": "NH4Cl – kuru pillerde elektrolit (nişadır)",
          "en": "NH4Cl – electrolyte in dry cells (sal ammoniac)",
          "de": "NH4Cl – Elektrolyt in Trockenbatterien (Salmiak)",
          "fr": "NH4Cl – électrolyte dans les piles sèches (sel ammoniac)",
          "ru": "NH4Cl — электролит в сухих элементах (нашатырь)",
          "ar": "NH4Cl – إلكتروليت في البطاريات الجافة (ملح النشادر)",
          "zh": "NH4Cl – 干电池中的电解质（硇砂）",
          "ku": "NH4Cl – elektrolît di pîlên hişk de (nîşadir)"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Cam üretiminin temel hammaddelerinden biri çamaşır sodası Na2CO3'tür; NaHCO3 (yemek sodası) ise kabartma tozlarında, mide asidini gidermede ve yangın söndürücülerde kullanılır. Bu yüzden NaHCO3 – cam eşleştirmesi yanlıştır. NaCl'nin gıda ve yol tuzu olarak, Na2CO3'ün cam-sabun-deterjan üretiminde, CaCO3'ün yapı malzemesi olarak, NH4Cl'nin kuru pillerde kullanımı doğrudur. İki sodanın adını ve kullanımını karıştırmak tipik hatadır.",
        "en": "One of the main raw materials of glass is washing soda, Na2CO3; NaHCO3 (baking soda) is used in baking powders, for relieving stomach acid and in fire extinguishers. So the NaHCO3 – glass pairing is wrong. The uses of NaCl as food and road salt, Na2CO3 in glass, soap and detergent production, CaCO3 as building material and NH4Cl in dry cells are correct. Confusing the names and uses of the two sodas is a typical mistake.",
        "de": "Einer der Hauptrohstoffe für Glas ist Waschsoda Na2CO3; NaHCO3 (Natron) wird in Backpulver, gegen Magensäure und in Feuerlöschern verwendet. Daher ist die Zuordnung NaHCO3 – Glas falsch. Die Verwendung von NaCl als Speise- und Streusalz, Na2CO3 für Glas, Seife und Waschmittel, CaCO3 als Baumaterial und NH4Cl in Trockenbatterien ist richtig. Die beiden Sodas zu verwechseln ist ein typischer Fehler.",
        "fr": "L'une des principales matières premières du verre est le carbonate de sodium Na2CO3 (cristaux de soude) ; NaHCO3 (bicarbonate) sert dans les levures chimiques, contre l'acidité gastrique et dans les extincteurs. L'association NaHCO3 – verre est donc fausse. Les utilisations de NaCl comme sel alimentaire et de déneigement, de Na2CO3 pour le verre, le savon et les détergents, de CaCO3 comme matériau de construction et de NH4Cl dans les piles sèches sont correctes. Confondre les deux « soudes » est une erreur typique.",
        "ru": "Один из основных видов сырья для производства стекла — кальцинированная (стиральная) сода Na2CO3; NaHCO3 (пищевая сода) используется в разрыхлителях теста, для снятия изжоги и в огнетушителях. Поэтому соответствие NaHCO3 — стекло неверно. Применение NaCl как пищевой и дорожной соли, Na2CO3 в производстве стекла, мыла и моющих средств, CaCO3 как строительного материала и NH4Cl в сухих элементах указано верно. Путать две соды — типичная ошибка.",
        "ar": "من المواد الخام الأساسية للزجاج صودا الغسيل Na2CO3؛ أما NaHCO3 (صودا الخبز) فتُستعمل في مساحيق الخبز وتخفيف حموضة المعدة وطفايات الحريق. لذا فمطابقة NaHCO3 – الزجاج خاطئة. واستخدامات NaCl كملح طعام وملح للطرق، وNa2CO3 في الزجاج والصابون والمنظفات، وCaCO3 كمادة بناء، وNH4Cl في البطاريات الجافة صحيحة. والخلط بين نوعَي الصودا خطأ شائع.",
        "zh": "玻璃的主要原料之一是纯碱（洗涤碱）Na2CO3；NaHCO3（小苏打）用于发酵粉、缓解胃酸过多和灭火器。因此 NaHCO3—玻璃的对应是错误的。NaCl 用作食盐和道路融雪盐、Na2CO3 用于生产玻璃、肥皂和洗涤剂、CaCO3 作建筑材料、NH4Cl 用于干电池，这些都正确。混淆两种“苏打”的名称和用途是典型错误。",
        "ku": "Yek ji madeyên xav ên bingehîn ên hilberîna camê sodaya cilşûştinê Na2CO3 ye; NaHCO3 (sodaya xwarinê) di toza hevîrtirşkê de, ji bo kêmkirina asîda mîdeyê û di agirkujan de tê bikaranîn. Ji ber vê yekê cotkirina NaHCO3 – cam şaş e. Bikaranîna NaCl wek xwêya xwarinê û ya rêyan, ya Na2CO3 di hilberîna cam, sabûn û deterjanan de, ya CaCO3 wek madeya avahiyê û ya NH4Cl di pîlên hişk de rast e. Tevlihevkirina nav û bikaranîna her du sodayan şaşiyeke tîpîk e."
      }
    },
    {
      "id": "u09-twin11",
      "stem": {
        "tr": "0,3 mol HCl içeren sulu çözelti ile 0,2 mol NaOH içeren sulu çözelti 25 °C'de karıştırılıyor. Oluşan son çözelti ile ilgili aşağıdakilerden hangisi doğrudur?",
        "en": "An aqueous solution containing 0.3 mol HCl is mixed at 25 °C with an aqueous solution containing 0.2 mol NaOH. Which of the following about the final solution is true?",
        "de": "Eine wässrige Lösung mit 0,3 mol HCl wird bei 25 °C mit einer wässrigen Lösung mit 0,2 mol NaOH gemischt. Welche Aussage über die entstandene Lösung ist richtig?",
        "fr": "On mélange à 25 °C une solution aqueuse contenant 0,3 mol de HCl et une solution aqueuse contenant 0,2 mol de NaOH. Quelle affirmation concernant la solution finale est vraie ?",
        "ru": "Водный раствор, содержащий 0,3 моль HCl, смешивают при 25 °C с водным раствором, содержащим 0,2 моль NaOH. Какое утверждение о полученном растворе верно?",
        "ar": "يُخلط عند 25 °C محلول مائي يحتوي على 0.3 mol من HCl مع محلول مائي يحتوي على 0.2 mol من NaOH. أيّ مما يلي صحيح عن المحلول النهائي؟",
        "zh": "25 °C 时，将含 0.3 mol HCl 的水溶液与含 0.2 mol NaOH 的水溶液混合。关于所得溶液，下列哪一项正确？",
        "ku": "Di 25 °C de çareseriyeke avî ya ku 0,3 mol HCl dihewîne bi çareseriyeke avî ya ku 0,2 mol NaOH dihewîne re tê tevlihevkirin. Kîjan ji van derbarê çareseriya dawî de rast e?"
      },
      "options": [
        {
          "tr": "pH değeri 7 olur.",
          "en": "Its pH is 7.",
          "de": "Ihr pH-Wert beträgt 7.",
          "fr": "Son pH est égal à 7.",
          "ru": "pH раствора равен 7.",
          "ar": "تكون قيمة pH للمحلول 7.",
          "zh": "其 pH 为 7。",
          "ku": "pH-a wê dibe 7."
        },
        {
          "tr": "0,3 mol NaCl oluşur.",
          "en": "0.3 mol NaCl is formed.",
          "de": "Es entstehen 0,3 mol NaCl.",
          "fr": "Il se forme 0,3 mol de NaCl.",
          "ru": "Образуется 0,3 моль NaCl.",
          "ar": "يتكوّن 0.3 mol من NaCl.",
          "zh": "生成 0.3 mol NaCl。",
          "ku": "0,3 mol NaCl çêdibe."
        },
        {
          "tr": "Çözeltide 0,1 mol OH- iyonu artar.",
          "en": "0.1 mol OH- ions remain in excess in the solution.",
          "de": "In der Lösung bleiben 0,1 mol OH--Ionen im Überschuss.",
          "fr": "Il reste 0,1 mol d'ions OH- en excès dans la solution.",
          "ru": "В растворе остаётся 0,1 моль избыточных ионов OH-.",
          "ar": "يتبقى في المحلول فائض قدره 0.1 mol من أيونات OH-.",
          "zh": "溶液中剩余过量的 0.1 mol OH- 离子。",
          "ku": "Di çareseriyê de 0,1 mol îyona OH- zêde dimîne."
        },
        {
          "tr": "Çözelti asidik olur ve 0,2 mol NaCl oluşur.",
          "en": "The solution is acidic and 0.2 mol NaCl is formed.",
          "de": "Die Lösung ist sauer, und es entstehen 0,2 mol NaCl.",
          "fr": "La solution est acide et il se forme 0,2 mol de NaCl.",
          "ru": "Раствор кислый, образуется 0,2 моль NaCl.",
          "ar": "يكون المحلول حمضيًا ويتكوّن 0.2 mol من NaCl.",
          "zh": "溶液呈酸性，生成 0.2 mol NaCl。",
          "ku": "Çareserî asîdî dibe û 0,2 mol NaCl çêdibe."
        },
        {
          "tr": "Fenolftalein eklenirse çözelti pembe olur.",
          "en": "If phenolphthalein is added, the solution turns pink.",
          "de": "Bei Zugabe von Phenolphthalein färbt sich die Lösung pink.",
          "fr": "Si l'on ajoute de la phénolphtaléine, la solution devient rose.",
          "ru": "При добавлении фенолфталеина раствор становится малиновым.",
          "ar": "عند إضافة الفينولفثالين يصبح المحلول ورديًا.",
          "zh": "加入酚酞后溶液变为粉红色。",
          "ku": "Heke fenolftaleîn were zêdekirin çareserî pembe dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "HCl + NaOH → NaCl + H2O tepkimesi 1:1 oranında yürür. 0,2 mol NaOH, 0,2 mol HCl ile tepkimeye girer; 0,2 mol NaCl ve 0,2 mol H2O oluşur, 0,1 mol HCl artar. Ortamda artan H+ bulunduğundan çözelti asidiktir (pH < 7) ve fenolftalein renksiz kalır. NaCl miktarı az olan bileşen NaOH'a göre hesaplanır; 0,3 mol NaCl yazmak veya artan iyonu OH- sanmak tipik hatalardır.",
        "en": "HCl + NaOH → NaCl + H2O proceeds in a 1:1 ratio. 0.2 mol NaOH reacts with 0.2 mol HCl, forming 0.2 mol NaCl and 0.2 mol H2O, and 0.1 mol HCl is left over. Because excess H+ remains, the solution is acidic (pH < 7) and phenolphthalein stays colourless. The amount of NaCl is set by the limiting reactant NaOH; writing 0.3 mol NaCl or thinking the excess ion is OH- are typical mistakes.",
        "de": "HCl + NaOH → NaCl + H2O verläuft im Verhältnis 1:1. 0,2 mol NaOH reagieren mit 0,2 mol HCl zu 0,2 mol NaCl und 0,2 mol H2O; 0,1 mol HCl bleiben übrig. Da überschüssiges H+ vorliegt, ist die Lösung sauer (pH < 7), und Phenolphthalein bleibt farblos. Die NaCl-Menge richtet sich nach dem Unterschussreaktanten NaOH; 0,3 mol NaCl anzugeben oder das überschüssige Ion für OH- zu halten, sind typische Fehler.",
        "fr": "HCl + NaOH → NaCl + H2O se fait dans le rapport 1:1. 0,2 mol de NaOH réagissent avec 0,2 mol de HCl en formant 0,2 mol de NaCl et 0,2 mol d'eau ; il reste 0,1 mol de HCl. Comme il reste des H+ en excès, la solution est acide (pH < 7) et la phénolphtaléine reste incolore. La quantité de NaCl est fixée par le réactif limitant NaOH ; écrire 0,3 mol de NaCl ou croire que l'ion en excès est OH- sont des erreurs typiques.",
        "ru": "Реакция HCl + NaOH → NaCl + H2O идёт в соотношении 1:1. 0,2 моль NaOH реагируют с 0,2 моль HCl, образуя 0,2 моль NaCl и 0,2 моль H2O; 0,1 моль HCl остаётся в избытке. Так как в растворе есть избыток H+, раствор кислый (pH < 7), фенолфталеин остаётся бесцветным. Количество NaCl рассчитывают по веществу в недостатке — NaOH; записать 0,3 моль NaCl или считать избыточным ионом OH- — типичные ошибки.",
        "ar": "يجري التفاعل HCl + NaOH → NaCl + H2O بنسبة 1:1. يتفاعل 0.2 mol من NaOH مع 0.2 mol من HCl فيتكوّن 0.2 mol من NaCl و0.2 mol من H2O ويتبقى 0.1 mol من HCl. ولأن H+ زائد فالمحلول حمضي (pH < 7) ويبقى الفينولفثالين عديم اللون. وتُحسب كمية NaCl من المادة المحدِّدة NaOH؛ وكتابة 0.3 mol من NaCl أو الظن أن الأيون الزائد هو OH- خطآن شائعان.",
        "zh": "HCl + NaOH → NaCl + H2O 按 1:1 进行。0.2 mol NaOH 与 0.2 mol HCl 反应，生成 0.2 mol NaCl 和 0.2 mol H2O，剩余 0.1 mol HCl。溶液中有过量 H+，呈酸性(pH < 7)，酚酞保持无色。NaCl 的量由不足量的 NaOH 决定；写成 0.3 mol NaCl 或认为过量的离子是 OH-，都是典型错误。",
        "ku": "Reaksiyona HCl + NaOH → NaCl + H2O bi rêjeya 1:1 pêk tê. 0,2 mol NaOH bi 0,2 mol HCl re dikeve reaksiyonê; 0,2 mol NaCl û 0,2 mol H2O çêdibin û 0,1 mol HCl zêde dimîne. Ji ber ku H+ zêde di navgînê de heye, çareserî asîdî ye (pH < 7) û fenolftaleyîn bêreng dimîne. Mîqdara NaCl li gorî reaktanta sînordar NaOH tê hesibandin; nivîsandina 0,3 mol NaCl an hesibandina îyona zêde wek OH- şaşiyên tîpîk in."
      }
    },
    {
      "id": "u09-twin12",
      "stem": {
        "tr": "Cu ve Mg metallerinden oluşan 10 g'lık bir karışım yeterli miktarda HCl çözeltisine atıldığında normal koşullarda 4,48 L H2 gazı açığa çıkıyor. Karışımdaki Cu kütlesi kaç gramdır? (Mg = 24 g/mol; NK'da 1 mol gaz 22,4 L)",
        "en": "When a 10 g mixture of the metals Cu and Mg is placed in enough HCl solution, 4.48 L of H2 gas is released at STP. What is the mass of Cu in the mixture in grams? (Mg = 24 g/mol; 1 mol of gas occupies 22.4 L at STP)",
        "de": "Gibt man 10 g eines Gemisches aus Cu und Mg in ausreichend HCl-Lösung, entstehen unter Normbedingungen 4,48 L H2-Gas. Wie viel Gramm Cu enthält das Gemisch? (Mg = 24 g/mol; 1 mol Gas nimmt unter Normbedingungen 22,4 L ein)",
        "fr": "Lorsqu'on place 10 g d'un mélange de Cu et de Mg dans suffisamment de solution de HCl, il se dégage 4,48 L de H2 dans les conditions normales. Quelle est la masse de Cu dans le mélange, en grammes ? (Mg = 24 g/mol ; 1 mol de gaz occupe 22,4 L dans les CN)",
        "ru": "Смесь металлов Cu и Mg массой 10 г поместили в достаточное количество раствора HCl; при этом выделилось 4,48 л H2 (н. у.). Сколько граммов Cu содержится в смеси? (Mg = 24 г/моль; 1 моль газа при н. у. занимает 22,4 л)",
        "ar": "عند وضع 10 g من خليط فلزَّي Cu وMg في كمية كافية من محلول HCl يتصاعد 4.48 L من غاز H2 في الظروف القياسية. ما كتلة Cu في الخليط بالغرام؟ (Mg = 24 g/mol؛ 1 mol من الغاز يشغل 22.4 L في الظروف القياسية)",
        "zh": "将由 Cu 和 Mg 组成的 10 g 混合物放入足量 HCl 溶液中，在标准状况下放出 4.48 L H2 气体。混合物中 Cu 的质量是多少克？(Mg = 24 g/mol；标准状况下 1 mol 气体为 22.4 L)",
        "ku": "Dema tevliheviyeke 10 g ya metalên Cu û Mg tê avêtin nav çareseriya HCl a têr, di şertên normal (ŞN) de 4,48 L gaza H2 derdikeve. Girseya Cu di tevliheviyê de çend gram e? (Mg = 24 g/mol; di ŞN de 1 mol gaz 22,4 L ye)"
      },
      "options": [
        {
          "tr": "2,6 g",
          "en": "2.6 g",
          "de": "2,6 g",
          "fr": "2,6 g",
          "ru": "2,6 г",
          "ar": "2.6 g",
          "zh": "2.6 g",
          "ku": "2,6 g"
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
          "tr": "5,2 g",
          "en": "5.2 g",
          "de": "5,2 g",
          "fr": "5,2 g",
          "ru": "5,2 г",
          "ar": "5.2 g",
          "zh": "5.2 g",
          "ku": "5,2 g"
        },
        {
          "tr": "6,4 g",
          "en": "6.4 g",
          "de": "6,4 g",
          "fr": "6,4 g",
          "ru": "6,4 г",
          "ar": "6.4 g",
          "zh": "6.4 g",
          "ku": "6,4 g"
        },
        {
          "tr": "7,6 g",
          "en": "7.6 g",
          "de": "7,6 g",
          "fr": "7,6 g",
          "ru": "7,6 г",
          "ar": "7.6 g",
          "zh": "7.6 g",
          "ku": "7,6 g"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Cu yarı soy metal olduğundan HCl ile tepkime vermez; H2'nin tamamı Mg'den gelir: Mg + 2HCl → MgCl2 + H2. n(H2) = 4,48 / 22,4 = 0,2 mol, dolayısıyla n(Mg) = 0,2 mol ve m(Mg) = 0,2 × 24 = 4,8 g. m(Cu) = 10 − 4,8 = 5,2 g. Mg kütlesini cevap olarak işaretlemek ya da Mg ile H2 arasındaki oranı 2:1 alıp 2,4 g Mg (7,6 g Cu) bulmak tipik hatalardır.",
        "en": "Cu is a semi-noble metal and does not react with HCl, so all the H2 comes from Mg: Mg + 2HCl → MgCl2 + H2. n(H2) = 4.48 / 22.4 = 0.2 mol, hence n(Mg) = 0.2 mol and m(Mg) = 0.2 × 24 = 4.8 g. m(Cu) = 10 − 4.8 = 5.2 g. Giving the Mg mass as the answer, or taking a 2:1 Mg:H2 ratio to get 2.4 g Mg (7.6 g Cu), are typical mistakes.",
        "de": "Cu ist ein Halbedelmetall und reagiert nicht mit HCl; der gesamte H2 stammt aus Mg: Mg + 2HCl → MgCl2 + H2. n(H2) = 4,48 / 22,4 = 0,2 mol, also n(Mg) = 0,2 mol und m(Mg) = 0,2 × 24 = 4,8 g. m(Cu) = 10 − 4,8 = 5,2 g. Die Mg-Masse als Antwort anzugeben oder ein Verhältnis Mg:H2 = 2:1 anzunehmen (2,4 g Mg, 7,6 g Cu), sind typische Fehler.",
        "fr": "Cu est un métal semi-noble qui ne réagit pas avec HCl ; tout le H2 provient de Mg : Mg + 2HCl → MgCl2 + H2. n(H2) = 4,48 / 22,4 = 0,2 mol, donc n(Mg) = 0,2 mol et m(Mg) = 0,2 × 24 = 4,8 g. m(Cu) = 10 − 4,8 = 5,2 g. Donner la masse de Mg comme réponse, ou prendre un rapport Mg:H2 de 2:1 (2,4 g de Mg, 7,6 g de Cu), sont des erreurs typiques.",
        "ru": "Cu — полублагородный металл и с HCl не реагирует, поэтому весь H2 выделяется за счёт Mg: Mg + 2HCl → MgCl2 + H2. n(H2) = 4,48 / 22,4 = 0,2 моль, значит n(Mg) = 0,2 моль и m(Mg) = 0,2 × 24 = 4,8 г. m(Cu) = 10 − 4,8 = 5,2 г. Типичные ошибки: указать в ответе массу Mg или взять соотношение Mg : H2 = 2 : 1 и получить 2,4 г Mg (7,6 г Cu).",
        "ar": "النحاس Cu فلز شبه نبيل لا يتفاعل مع HCl، فكل H2 مصدره Mg: Mg + 2HCl → MgCl2 + H2. n(H2) = 4.48 / 22.4 = 0.2 mol، إذن n(Mg) = 0.2 mol وm(Mg) = 0.2 × 24 = 4.8 g. m(Cu) = 10 − 4.8 = 5.2 g. ومن الأخطاء الشائعة إعطاء كتلة Mg جوابًا، أو أخذ نسبة Mg:H2 = 2:1 للحصول على 2.4 g من Mg (7.6 g من Cu).",
        "zh": "Cu 是半贵金属，不与 HCl 反应，所有 H2 都来自 Mg：Mg + 2HCl → MgCl2 + H2。n(H2) = 4.48 / 22.4 = 0.2 mol，因此 n(Mg) = 0.2 mol，m(Mg) = 0.2 × 24 = 4.8 g。m(Cu) = 10 − 4.8 = 5.2 g。把 Mg 的质量当作答案，或按 Mg:H2 = 2:1 计算得 2.4 g Mg (7.6 g Cu)，都是典型错误。",
        "ku": "Ji ber ku Cu metaleke nîvesîl e, bi HCl re nakeve reaksiyonê; hemû H2 ji Mg tê: Mg + 2HCl → MgCl2 + H2. n(H2) = 4,48 / 22,4 = 0,2 mol, ji ber vê yekê n(Mg) = 0,2 mol û m(Mg) = 0,2 × 24 = 4,8 g. m(Cu) = 10 − 4,8 = 5,2 g. Nîşankirina girseya Mg wek bersiv, an girtina rêjeya Mg:H2 wek 2:1 û dîtina 2,4 g Mg (7,6 g Cu) şaşiyên tîpîk in."
      }
    },
    {
      "id": "u09-twin13",
      "stem": {
        "tr": "Evde temizlik yapan bir kişinin aşağıdaki davranışlarından hangileri doğru ve güvenlidir?\nI. Tıkalı lavaboya önce lavabo açıcı (NaOH içerikli), hemen ardından tuz ruhu (HCl) döküyor.\nII. Fayanslardaki kireç lekelerini tuz ruhuyla temizlerken eldiven takıyor ve ortamı havalandırıyor.\nIII. Lavabo açıcıyı kullanırken koruyucu gözlük takıyor ve ürünü çocukların ulaşamayacağı yerde saklıyor.",
        "en": "Which of the following actions of a person cleaning at home are correct and safe?\nI. Pours a drain opener (containing NaOH) into a clogged sink and immediately afterwards hydrochloric acid (HCl).\nII. Wears gloves and ventilates the room while removing limescale from tiles with hydrochloric acid.\nIII. Wears safety goggles while using a drain opener and keeps the product out of children's reach.",
        "de": "Welche der folgenden Handlungen einer Person beim Putzen zu Hause sind richtig und sicher?\nI. Gießt in einen verstopften Abfluss erst Abflussreiniger (NaOH-haltig) und direkt danach Salzsäure (HCl).\nII. Trägt Handschuhe und lüftet, während sie Kalkflecken auf Fliesen mit Salzsäure entfernt.\nIII. Trägt beim Verwenden von Abflussreiniger eine Schutzbrille und bewahrt das Produkt für Kinder unerreichbar auf.",
        "fr": "Parmi les actions suivantes d'une personne qui fait le ménage, lesquelles sont correctes et sûres ?\nI. Verse dans un évier bouché un déboucheur (contenant NaOH), puis immédiatement de l'acide chlorhydrique (HCl).\nII. Porte des gants et aère la pièce en éliminant le calcaire des carreaux avec de l'acide chlorhydrique.\nIII. Porte des lunettes de protection en utilisant le déboucheur et range le produit hors de portée des enfants.",
        "ru": "Какие из следующих действий человека, который делает уборку дома, правильны и безопасны?\nI. Наливает в засорившуюся раковину средство для прочистки труб (содержащее NaOH), а сразу после него — соляную кислоту (HCl).\nII. Удаляя известковый налёт с плитки соляной кислотой, надевает перчатки и проветривает помещение.\nIII. Работая со средством для прочистки труб, надевает защитные очки и хранит средство в недоступном для детей месте.",
        "ar": "أيّ من التصرفات التالية لشخص ينظّف منزله صحيحة وآمنة؟\nI. يسكب في حوض مسدود مسلّك مجارٍ (يحتوي على NaOH) ثم يسكب بعده مباشرة حمض الهيدروكلوريك (HCl).\nII. يرتدي قفازين ويهوّي المكان أثناء إزالة الترسبات الكلسية عن البلاط بحمض الهيدروكلوريك.\nIII. يرتدي نظارة واقية عند استعمال مسلّك المجاري ويحفظ المنتج بعيدًا عن متناول الأطفال.",
        "zh": "某人在家打扫卫生，下列哪些做法正确且安全？\nI. 向堵塞的水槽中先倒入管道疏通剂(含 NaOH)，紧接着倒入盐酸(HCl)。\nII. 用盐酸清除瓷砖上的水垢时戴手套并保持通风。\nIII. 使用管道疏通剂时戴护目镜，并把产品存放在儿童够不到的地方。",
        "ku": "Kîjan ji van kiryarên kesekî ku li malê paqijiyê dike rast û ewle ne?\nI. Pêşî vekerê lavaboyê (bi NaOH) dirijîne lavaboya girtî, yekser piştî wê jî asîda hîdroklorîk (HCl) dirijîne.\nII. Dema bi asîda hîdroklorîk lekeyên kilsê ji ser kaşiyan paqij dike, destmalkan li dest dike û hewaya odeyê diguherîne.\nIII. Dema vekerê lavaboyê bi kar tîne, berçavkên parastinê li xwe dike û berhemê li cihekî ku zarok negihîjinê diparêze."
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
        "tr": "I. Kuvvetli baz ile kuvvetli asidin karıştırılması çok ısı açığa çıkaran şiddetli bir nötralleşme tepkimesine yol açar; sıçrama ve yanık tehlikesi vardır, iki ürün art arda kullanılmaz; yanlış. II. Tuz ruhu aşındırıcıdır ve buharı tahriş edicidir, eldiven ve havalandırma doğru önlemlerdir; doğru. III. NaOH cilde ve göze çok zarar verir, koruyucu gözlük ve güvenli saklama doğrudur; doğru.",
        "en": "I. Mixing a strong base with a strong acid causes a violent neutralization that releases a lot of heat; there is a risk of splashing and burns, so the two products must not be used one after the other; false. II. Hydrochloric acid is corrosive and its fumes are irritating, so gloves and ventilation are correct precautions; true. III. NaOH seriously damages skin and eyes, so goggles and safe storage are correct; true.",
        "de": "I. Das Mischen einer starken Base mit einer starken Säure führt zu einer heftigen Neutralisation mit starker Wärmeentwicklung; es drohen Spritzer und Verätzungen, die beiden Produkte dürfen nicht nacheinander verwendet werden; falsch. II. Salzsäure ist ätzend und ihre Dämpfe reizen, Handschuhe und Lüften sind richtige Maßnahmen; richtig. III. NaOH schädigt Haut und Augen stark, Schutzbrille und sichere Aufbewahrung sind richtig; richtig.",
        "fr": "I. Mélanger une base forte et un acide fort provoque une neutralisation violente très exothermique ; il y a risque de projections et de brûlures, les deux produits ne doivent pas être utilisés l'un après l'autre ; faux. II. L'acide chlorhydrique est corrosif et ses vapeurs sont irritantes : gants et aération sont de bonnes précautions ; vrai. III. NaOH abîme gravement la peau et les yeux : lunettes et rangement sûr sont corrects ; vrai.",
        "ru": "I. Смешивание сильного основания с сильной кислотой вызывает бурную нейтрализацию с выделением большого количества тепла; есть опасность разбрызгивания и ожогов, эти средства нельзя применять одно за другим; неверно. II. Соляная кислота едкая, её пары раздражают, перчатки и проветривание — правильные меры; верно. III. NaOH сильно повреждает кожу и глаза, защитные очки и безопасное хранение — правильно; верно.",
        "ar": "I. خلط قاعدة قوية مع حمض قوي يسبب تفاعل تعادل عنيفًا يطلق حرارة كبيرة؛ وهناك خطر تطاير وحروق، فلا يُستعمل المنتجان واحدًا بعد الآخر؛ خطأ. II. حمض الهيدروكلوريك أكّال وأبخرته مهيّجة، فالقفازان والتهوية احتياطات صحيحة؛ صحيح. III. يضر NaOH بالجلد والعينين بشدة، فالنظارة الواقية والحفظ الآمن صحيحان؛ صحيح.",
        "zh": "I. 强碱与强酸混合会发生剧烈的中和反应并放出大量热，有飞溅和灼伤的危险，两种产品不能先后连续使用；错误。II. 盐酸有腐蚀性，其蒸气有刺激性，戴手套和通风是正确的防护措施；正确。III. NaOH 会严重伤害皮肤和眼睛，戴护目镜和安全存放是正确的；正确。",
        "ku": "I. Tevlihevkirina bazeke bihêz û asîdeke bihêz dibe sedema reaksiyoneke neutralîzasyonê ya tund ku gelek germ derdixe; xetera pijiqîn û şewitînê heye, ji ber vê yekê her du berhem li pey hev nayên bikaranîn; şaş e. II. Asîda hîdroklorîk xwarker e û buhara wê acizker e, destmalk û hewadan tedbîrên rast in; rast e. III. NaOH zirareke giran dide çerm û çavan, berçavkên parastinê û parastina ewle rast in; rast e."
      }
    },
    {
      "id": "u09-twin14",
      "stem": {
        "tr": "Aşağıdaki tepkimelerden hangisi bir nötralleşme tepkimesidir?",
        "en": "Which of the following reactions is a neutralization reaction?",
        "de": "Welche der folgenden Reaktionen ist eine Neutralisationsreaktion?",
        "fr": "Laquelle des réactions suivantes est une réaction de neutralisation ?",
        "ru": "Какая из следующих реакций является реакцией нейтрализации?",
        "ar": "أيّ من التفاعلات التالية تفاعل تعادل؟",
        "zh": "下列反应中哪一个是中和反应？",
        "ku": "Kîjan ji van reaksiyonan reaksiyoneke neutralîzasyonê ye?"
      },
      "options": [
        {
          "tr": "HNO3 + KOH → KNO3 + H2O",
          "en": "HNO3 + KOH → KNO3 + H2O",
          "de": "HNO3 + KOH → KNO3 + H2O",
          "fr": "HNO3 + KOH → KNO3 + H2O",
          "ru": "HNO3 + KOH → KNO3 + H2O",
          "ar": "HNO3 + KOH → KNO3 + H2O",
          "zh": "HNO3 + KOH → KNO3 + H2O",
          "ku": "HNO3 + KOH → KNO3 + H2O"
        },
        {
          "tr": "Zn + 2HCl → ZnCl2 + H2",
          "en": "Zn + 2HCl → ZnCl2 + H2",
          "de": "Zn + 2HCl → ZnCl2 + H2",
          "fr": "Zn + 2HCl → ZnCl2 + H2",
          "ru": "Zn + 2HCl → ZnCl2 + H2",
          "ar": "Zn + 2HCl → ZnCl2 + H2",
          "zh": "Zn + 2HCl → ZnCl2 + H2",
          "ku": "Zn + 2HCl → ZnCl2 + H2"
        },
        {
          "tr": "CaO + H2O → Ca(OH)2",
          "en": "CaO + H2O → Ca(OH)2",
          "de": "CaO + H2O → Ca(OH)2",
          "fr": "CaO + H2O → Ca(OH)2",
          "ru": "CaO + H2O → Ca(OH)2",
          "ar": "CaO + H2O → Ca(OH)2",
          "zh": "CaO + H2O → Ca(OH)2",
          "ku": "CaO + H2O → Ca(OH)2"
        },
        {
          "tr": "2Na + 2H2O → 2NaOH + H2",
          "en": "2Na + 2H2O → 2NaOH + H2",
          "de": "2Na + 2H2O → 2NaOH + H2",
          "fr": "2Na + 2H2O → 2NaOH + H2",
          "ru": "2Na + 2H2O → 2NaOH + H2",
          "ar": "2Na + 2H2O → 2NaOH + H2",
          "zh": "2Na + 2H2O → 2NaOH + H2",
          "ku": "2Na + 2H2O → 2NaOH + H2"
        },
        {
          "tr": "NaCl(k) → Na+(suda) + Cl-(suda)",
          "en": "NaCl(s) → Na+(aq) + Cl-(aq)",
          "de": "NaCl(s) → Na+(aq) + Cl-(aq)",
          "fr": "NaCl(s) → Na+(aq) + Cl-(aq)",
          "ru": "NaCl(тв) → Na+(р-р) + Cl-(р-р)",
          "ar": "NaCl(s) → Na+(aq) + Cl-(aq)",
          "zh": "NaCl(s) → Na+(aq) + Cl-(aq)",
          "ku": "NaCl(s) → Na+(aq) + Cl-(aq)"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Nötralleşme, bir asit ile bir bazın tepkimeye girerek tuz ve su oluşturmasıdır. HNO3 (asit) ile KOH (baz) tepkimesinde KNO3 tuzu ve su oluşur. Zn + 2HCl ve 2Na + 2H2O metal tepkimeleridir ve H2 açığa çıkar; CaO + H2O bir bazik oksidin suyla baz oluşturmasıdır; NaCl'nin suda iyonlarına ayrışması ise bir çözünme olayıdır, tepkimeye bir asit ile baz girmez.",
        "en": "Neutralization is the reaction of an acid with a base to form a salt and water. HNO3 (acid) and KOH (base) give the salt KNO3 and water. Zn + 2HCl and 2Na + 2H2O are metal reactions that release H2; CaO + H2O is a basic oxide forming a base with water; NaCl separating into ions in water is a dissolution, in which no acid reacts with a base.",
        "de": "Neutralisation ist die Reaktion einer Säure mit einer Base zu Salz und Wasser. HNO3 (Säure) und KOH (Base) ergeben das Salz KNO3 und Wasser. Zn + 2HCl und 2Na + 2H2O sind Metallreaktionen mit H2-Entwicklung; CaO + H2O ist die Bildung einer Base aus einem basischen Oxid und Wasser; das Zerfallen von NaCl in Ionen in Wasser ist ein Lösevorgang, bei dem keine Säure mit einer Base reagiert.",
        "fr": "La neutralisation est la réaction d'un acide avec une base qui forme un sel et de l'eau. HNO3 (acide) et KOH (base) donnent le sel KNO3 et de l'eau. Zn + 2HCl et 2Na + 2H2O sont des réactions de métaux qui dégagent du H2 ; CaO + H2O est la formation d'une base par un oxyde basique et l'eau ; la séparation de NaCl en ions dans l'eau est une dissolution, sans réaction entre un acide et une base.",
        "ru": "Нейтрализация — реакция кислоты с основанием с образованием соли и воды. HNO3 (кислота) и KOH (основание) дают соль KNO3 и воду. Zn + 2HCl и 2Na + 2H2O — реакции металлов с выделением H2; CaO + H2O — образование основания из основного оксида и воды; распад NaCl на ионы в воде — процесс растворения, в нём кислота с основанием не взаимодействуют.",
        "ar": "التعادل هو تفاعل حمض مع قاعدة لتكوين ملح وماء. يتفاعل HNO3 (حمض) مع KOH (قاعدة) فيتكوّن الملح KNO3 والماء. أما Zn + 2HCl و2Na + 2H2O فتفاعلات فلزات يتصاعد فيها H2؛ وCaO + H2O تكوين قاعدة من أكسيد قاعدي وماء؛ وتفكك NaCl إلى أيونات في الماء عملية ذوبان لا يتفاعل فيها حمض مع قاعدة.",
        "zh": "中和反应是酸与碱反应生成盐和水的反应。HNO3（酸）与 KOH（碱）生成盐 KNO3 和水。Zn + 2HCl 和 2Na + 2H2O 是放出 H2 的金属反应；CaO + H2O 是碱性氧化物与水生成碱；NaCl 在水中电离成离子是溶解过程，没有酸与碱反应。",
        "ku": "Neutralîzasyon reaksiyona asîdekê bi bazekê re ye ku pê xwê û av çêdibin. Di reaksiyona HNO3 (asîd) û KOH (baz) de xwêya KNO3 û av çêdibin. Zn + 2HCl û 2Na + 2H2O reaksiyonên metalan in û H2 derdixin; CaO + H2O çêbûna bazê ji oksîdeke bazî û avê ye; perçebûna NaCl bo îyonên wê di avê de jî bûyereke helbûnê ye, tê de asîd û baz nakevin reaksiyonê."
      }
    },
    {
      "id": "u09-twin15",
      "stem": {
        "tr": "Etiketleri düşmüş X, Y ve Z tüplerinde eşit derişimli HCl, NaOH ve NaCl çözeltileri bulunmaktadır (her tüpte farklı biri). Yapılan deneylerde:\n• X ve Y tüplerine alüminyum (Al) parçası atıldığında her ikisinde de gaz çıkışı gözleniyor, Z tüpünde gözlenmiyor.\n• X çözeltisi mavi turnusol kâğıdını kırmızıya çeviriyor.\nX, Y ve Z tüplerindeki çözeltiler sırasıyla hangileridir?",
        "en": "Tubes X, Y and Z, whose labels have fallen off, contain HCl, NaOH and NaCl solutions of equal concentration (a different one in each tube). In the experiments:\n• When a piece of aluminium (Al) is added to tubes X and Y, gas evolution is observed in both, but not in tube Z.\n• Solution X turns blue litmus paper red.\nWhich solutions are in tubes X, Y and Z, respectively?",
        "de": "Die Reagenzgläser X, Y und Z, deren Etiketten abgefallen sind, enthalten gleich konzentrierte HCl-, NaOH- und NaCl-Lösungen (in jedem eine andere). Bei den Versuchen gilt:\n• Gibt man ein Stück Aluminium (Al) in X und Y, beobachtet man in beiden Gasentwicklung, in Z nicht.\n• Lösung X färbt blaues Lackmuspapier rot.\nWelche Lösungen befinden sich der Reihe nach in X, Y und Z?",
        "fr": "Les tubes X, Y et Z, dont les étiquettes sont tombées, contiennent des solutions de HCl, NaOH et NaCl de même concentration (une différente dans chaque tube). Lors des expériences :\n• Quand on ajoute un morceau d'aluminium (Al) dans X et Y, on observe un dégagement gazeux dans les deux, mais pas dans Z.\n• La solution X fait virer le papier de tournesol bleu au rouge.\nQuelles solutions se trouvent respectivement dans X, Y et Z ?",
        "ru": "В пробирках X, Y и Z, этикетки которых отклеились, находятся растворы HCl, NaOH и NaCl одинаковой концентрации (в каждой — свой). В опытах:\n• При добавлении кусочка алюминия (Al) в пробирки X и Y в обеих наблюдается выделение газа, а в пробирке Z — нет.\n• Раствор X окрашивает синюю лакмусовую бумагу в красный цвет.\nКакие растворы находятся соответственно в пробирках X, Y и Z?",
        "ar": "تحتوي الأنابيب X وY وZ التي سقطت ملصقاتها على محاليل HCl وNaOH وNaCl متساوية التركيز (محلول مختلف في كل أنبوب). وفي التجارب:\n• عند وضع قطعة ألومنيوم (Al) في الأنبوبين X وY يُلاحظ تصاعد غاز في كليهما، ولا يُلاحظ ذلك في الأنبوب Z.\n• يحوّل المحلول X ورق عباد الشمس الأزرق إلى الأحمر.\nما المحاليل الموجودة في الأنابيب X وY وZ على الترتيب؟",
        "zh": "标签脱落的试管 X、Y、Z 中分别装有浓度相等的 HCl、NaOH 和 NaCl 溶液（每支试管中各不相同）。实验中：\n• 向 X 和 Y 中放入铝(Al)片，两支试管中都有气体产生，Z 中没有。\n• 溶液 X 能使蓝色石蕊试纸变红。\n则 X、Y、Z 中的溶液依次是什么？",
        "ku": "Di lûleyên X, Y û Z de ku etîketên wan ketine, çareseriyên HCl, NaOH û NaCl ên bi tîrbûna wekhev hene (di her lûleyê de yekî cuda). Di ceribandinan de:\n• Dema perçeyek alumînyûm (Al) tê avêtin lûleyên X û Y, di herduyan de derketina gazê tê dîtin, lê di lûleya Z de nayê dîtin.\n• Çareseriya X kaxeza turnusola şîn sor dike.\nDi lûleyên X, Y û Z de bi rêzê kîjan çareserî hene?"
      },
      "options": [
        {
          "tr": "NaOH, HCl, NaCl",
          "en": "NaOH, HCl, NaCl",
          "de": "NaOH, HCl, NaCl",
          "fr": "NaOH, HCl, NaCl",
          "ru": "NaOH, HCl, NaCl",
          "ar": "NaOH, HCl, NaCl",
          "zh": "NaOH、HCl、NaCl",
          "ku": "NaOH, HCl, NaCl"
        },
        {
          "tr": "HCl, NaCl, NaOH",
          "en": "HCl, NaCl, NaOH",
          "de": "HCl, NaCl, NaOH",
          "fr": "HCl, NaCl, NaOH",
          "ru": "HCl, NaCl, NaOH",
          "ar": "HCl, NaCl, NaOH",
          "zh": "HCl、NaCl、NaOH",
          "ku": "HCl, NaCl, NaOH"
        },
        {
          "tr": "NaCl, NaOH, HCl",
          "en": "NaCl, NaOH, HCl",
          "de": "NaCl, NaOH, HCl",
          "fr": "NaCl, NaOH, HCl",
          "ru": "NaCl, NaOH, HCl",
          "ar": "NaCl, NaOH, HCl",
          "zh": "NaCl、NaOH、HCl",
          "ku": "NaCl, NaOH, HCl"
        },
        {
          "tr": "HCl, NaOH, NaCl",
          "en": "HCl, NaOH, NaCl",
          "de": "HCl, NaOH, NaCl",
          "fr": "HCl, NaOH, NaCl",
          "ru": "HCl, NaOH, NaCl",
          "ar": "HCl, NaOH, NaCl",
          "zh": "HCl、NaOH、NaCl",
          "ku": "HCl, NaOH, NaCl"
        },
        {
          "tr": "NaOH, NaCl, HCl",
          "en": "NaOH, NaCl, HCl",
          "de": "NaOH, NaCl, HCl",
          "fr": "NaOH, NaCl, HCl",
          "ru": "NaOH, NaCl, HCl",
          "ar": "NaOH, NaCl, HCl",
          "zh": "NaOH、NaCl、HCl",
          "ku": "NaOH, NaCl, HCl"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Al amfoter bir metal olduğundan hem HCl hem de NaOH ile tepkimeye girip H2 açığa çıkarır; nötr NaCl çözeltisiyle tepkime vermez. Bu yüzden Z tüpü NaCl'dir. Mavi turnusolu kırmızıya çeviren X asidiktir, yani HCl'dir; geriye kalan Y ise NaOH'tır. Al'nin bazla tepkime vermediğini düşünen öğrenci gaz çıkan iki tüpten birini NaCl sanabilir.",
        "en": "Al is an amphoteric metal, so it reacts with both HCl and NaOH, releasing H2; it does not react with the neutral NaCl solution. Therefore tube Z is NaCl. X turns blue litmus red, so it is acidic, i.e. HCl; the remaining Y is NaOH. A student who thinks Al does not react with bases may take one of the two gas-producing tubes for NaCl.",
        "de": "Al ist ein amphoteres Metall und reagiert sowohl mit HCl als auch mit NaOH unter H2-Entwicklung; mit der neutralen NaCl-Lösung reagiert es nicht. Daher enthält Z NaCl. X färbt blauen Lackmus rot, ist also sauer, d. h. HCl; das verbleibende Y ist NaOH. Wer glaubt, Al reagiere nicht mit Basen, hält eines der beiden gasentwickelnden Gläser womöglich für NaCl.",
        "fr": "Al est un métal amphotère : il réagit avec HCl et avec NaOH en dégageant du H2 ; il ne réagit pas avec la solution neutre de NaCl. Le tube Z contient donc NaCl. X fait virer le tournesol bleu au rouge, il est acide : c'est HCl ; le tube Y restant contient NaOH. Un élève qui croit que Al ne réagit pas avec les bases peut prendre l'un des deux tubes où se dégage un gaz pour NaCl.",
        "ru": "Al — амфотерный металл, поэтому реагирует и с HCl, и с NaOH с выделением H2; с нейтральным раствором NaCl он не реагирует. Значит, в пробирке Z — NaCl. X окрашивает синий лакмус в красный, т. е. раствор кислый — HCl; оставшийся Y — NaOH. Ученик, считающий, что Al не реагирует с основаниями, может принять одну из пробирок с выделением газа за NaCl.",
        "ar": "Al فلز أمفوتيري، لذا يتفاعل مع HCl ومع NaOH ويتصاعد H2؛ ولا يتفاعل مع محلول NaCl المتعادل. إذن الأنبوب Z يحتوي على NaCl. والمحلول X يحوّل عباد الشمس الأزرق إلى الأحمر فهو حمضي، أي HCl؛ ويبقى Y وهو NaOH. والطالب الذي يظن أن Al لا يتفاعل مع القواعد قد يعدّ أحد الأنبوبين اللذين تصاعد فيهما غاز محلولَ NaCl.",
        "zh": "Al 是两性金属，既能与 HCl 反应也能与 NaOH 反应放出 H2；它不与中性的 NaCl 溶液反应。所以 Z 是 NaCl。X 使蓝色石蕊变红，呈酸性，即 HCl；剩下的 Y 是 NaOH。认为 Al 不与碱反应的学生可能把产生气体的两支试管之一误认为 NaCl。",
        "ku": "Ji ber ku Al metaleke amfoter e, hem bi HCl hem jî bi NaOH re dikeve reaksiyonê û H2 derdixe; bi çareseriya bêalî ya NaCl re nakeve reaksiyonê. Ji ber vê yekê lûleya Z NaCl e. X turnusola şîn sor dike, ji ber vê yekê asîdî ye, ango HCl e; Y-ya mayî jî NaOH e. Xwendekarê ku difikire Al bi bazan re nakeve reaksiyonê dikare yek ji du lûleyên ku gaz jê derdikeve wek NaCl bihesibîne."
      }
    },
    {
      "id": "u09-twin16",
      "stem": {
        "tr": "Aşağıdakilerden hangileri elektrik akımını iletir?\nI. Katı NaCl\nII. NaCl'nin sulu çözeltisi\nIII. Şekerin (C12H22O11) sulu çözeltisi",
        "en": "Which of the following conduct electric current?\nI. Solid NaCl\nII. Aqueous solution of NaCl\nIII. Aqueous solution of sugar (C12H22O11)",
        "de": "Welche der folgenden Stoffe leiten den elektrischen Strom?\nI. Festes NaCl\nII. Wässrige NaCl-Lösung\nIII. Wässrige Zuckerlösung (C12H22O11)",
        "fr": "Lesquels des éléments suivants conduisent le courant électrique ?\nI. NaCl solide\nII. Solution aqueuse de NaCl\nIII. Solution aqueuse de sucre (C12H22O11)",
        "ru": "Что из перечисленного проводит электрический ток?\nI. Твёрдый NaCl\nII. Водный раствор NaCl\nIII. Водный раствор сахара (C12H22O11)",
        "ar": "أيّ مما يلي يوصل التيار الكهربائي؟\nI. NaCl الصلب\nII. محلول NaCl المائي\nIII. محلول السكر (C12H22O11) المائي",
        "zh": "下列哪些能导电？\nI. 固体 NaCl\nII. NaCl 的水溶液\nIII. 蔗糖(C12H22O11)的水溶液",
        "ku": "Kîjan ji van herikîna elektrîkê diguhezînin?\nI. NaCl-ya hişk\nII. Çareseriya avî ya NaCl\nIII. Çareseriya avî ya şekir (C12H22O11)"
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
      "correctIndex": 1,
      "explanation": {
        "tr": "Akım iletimi için serbestçe hareket edebilen yüklü tanecikler gerekir. I. Katı NaCl'de iyonlar kristal örgüde sabit durur, hareket edemez; iletmez. II. NaCl suda Na+ ve Cl- iyonlarına ayrışır, iyonlar serbestçe hareket eder; iletir. III. Şeker suda moleküller hâlinde çözünür, iyon oluşturmaz; iletmez. İyonik bileşiğin katı hâlde de ilettiğini sanmak sık yapılan hatadır.",
        "en": "Conduction needs charged particles that can move freely. I. In solid NaCl the ions are fixed in the crystal lattice and cannot move; it does not conduct. II. NaCl dissociates in water into Na+ and Cl- ions, which move freely; it conducts. III. Sugar dissolves in water as molecules and forms no ions; it does not conduct. Thinking an ionic compound also conducts as a solid is a common mistake.",
        "de": "Für die Stromleitung braucht man frei bewegliche geladene Teilchen. I. Im festen NaCl sitzen die Ionen fest im Kristallgitter; es leitet nicht. II. NaCl zerfällt in Wasser in Na+- und Cl--Ionen, die frei beweglich sind; es leitet. III. Zucker löst sich in Wasser als Moleküle und bildet keine Ionen; es leitet nicht. Zu glauben, eine Ionenverbindung leite auch im festen Zustand, ist ein häufiger Fehler.",
        "fr": "La conduction exige des particules chargées libres de se déplacer. I. Dans NaCl solide, les ions sont fixés dans le réseau cristallin ; il ne conduit pas. II. NaCl se dissocie dans l'eau en ions Na+ et Cl- qui se déplacent librement ; il conduit. III. Le sucre se dissout dans l'eau sous forme de molécules sans former d'ions ; il ne conduit pas. Croire qu'un composé ionique conduit aussi à l'état solide est une erreur fréquente.",
        "ru": "Для проводимости нужны свободно движущиеся заряженные частицы. I. В твёрдом NaCl ионы закреплены в узлах кристаллической решётки и не могут перемещаться; не проводит. II. В воде NaCl диссоциирует на ионы Na+ и Cl-, которые свободно движутся; проводит. III. Сахар растворяется в воде в виде молекул и ионов не образует; не проводит. Считать, что ионное соединение проводит ток и в твёрдом виде, — частая ошибка.",
        "ar": "يتطلب التوصيل جسيمات مشحونة حرة الحركة. I. في NaCl الصلب تكون الأيونات ثابتة في الشبكة البلورية ولا تتحرك؛ لا يوصل. II. يتفكك NaCl في الماء إلى أيونات Na+ وCl- تتحرك بحرية؛ يوصل. III. يذوب السكر في الماء على شكل جزيئات ولا يكوّن أيونات؛ لا يوصل. ومن الأخطاء الشائعة الظن أن المركّب الأيوني يوصل في الحالة الصلبة أيضًا.",
        "zh": "导电需要可以自由移动的带电粒子。I. 固体 NaCl 中离子固定在晶格中，不能移动；不导电。II. NaCl 在水中电离出 Na+ 和 Cl- 离子，可以自由移动；导电。III. 蔗糖以分子形式溶于水，不形成离子；不导电。认为离子化合物在固态时也能导电是常见错误。",
        "ku": "Ji bo guhestina herikînê perçeyên barkirî yên ku bi azadî bilivin pêwîst in. I. Di NaCl-ya hişk de îyon di tora krîstalî de sabît in û nikarin bilivin; naguhezîne. II. NaCl di avê de dibe îyonên Na+ û Cl- ku bi azadî dilivin; diguhezîne. III. Şekir di avê de wek molekul dihele û îyon çênake; naguhezîne. Fikirîna ku pêkhateyeke îyonîk di rewşa hişk de jî diguhezîne şaşiyeke berbelav e."
      }
    }
  ]
};

export default unit09;
