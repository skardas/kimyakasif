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
    "ru": "Концепция pH, нейтрализация и реакции металлов",
    "ar": "مفهوم الرقم الهيدروجيني والتحييد والتفاعلات المعدنية",
    "zh": "pH 概念、中和和金属反应",
    "ku": "Têgîna pH, Neutralîzasyon û Reaksiyonên Metal"
  },
  "facts": [
    {
      "id": "u09-f01",
      "fact": {
        "tr": "Asitler sulu çözeltilerine H+ (H3O+) iyonu verir, tatları ekşidir ve mavi turnusolu kırmızıya çevirir.",
        "en": "Acids give off H+ (H3O+) ions to their aqueous solutions, taste sour and turn blue litmus red.",
        "de": "Säuren geben H+ (H3O+)-Ionen an ihre wässrigen Lösungen ab, schmecken sauer und verfärben sich blauen Lackmus rot.",
        "fr": "Les acides dégagent des ions H+ (H3O+) dans leurs solutions aqueuses, ont un goût aigre et virent au rouge tournesol bleu.",
        "ru": "Кислоты отдают в свои водные растворы ионы H+ (H3O+), имеют кислый вкус и окрашивают синий лакмус в красный цвет.",
        "ar": "تطلق الأحماض أيونات H+ (H3O+) في محاليلها المائية، ويكون طعمها حامضًا ويتحول إلى اللون الأزرق لزهرة عباد الشمس.",
        "zh": "酸在其水溶液中释放出 H+ (H3O+) 离子，尝起来有酸味，并使蓝色石蕊变成红色。",
        "ku": "Asîd îyonên H+ (H3O+) ji halên xwe yên avî derdixin, tama tirşiyê çêdikin û lîmûsê şîn sor dikin."
      },
      "trap": {
        "tr": "Asitler ele kayganlık hissi verir ve turnusolu maviye boyar.",
        "en": "Acids give the hand a slippery feeling and turn litmus blue.",
        "de": "Säuren verleihen der Hand ein rutschiges Gefühl und verfärben Lackmus blau.",
        "fr": "Les acides donnent à la main une sensation glissante et virent au bleu tournesol.",
        "ru": "Кислоты придают руке ощущение скользкости и окрашивают лакмус в синий цвет.",
        "ar": "تمنح الأحماض اليد ملمسًا زلقًا وتحوّل لون عباد الشمس إلى اللون الأزرق.",
        "zh": "酸使手有滑溜的感觉并使石蕊变成蓝色。",
        "ku": "Asîd hestek şilbûnê dide dest û lîmûsê şîn dibin."
      }
    },
    {
      "id": "u09-f02",
      "fact": {
        "tr": "Bazlar sulu çözeltilerine OH- iyonu verir, tatları acıdır ve kırmızı turnusolu maviye çevirir.",
        "en": "Bases give OH- ions to their aqueous solutions, taste bitter and turn red litmus blue.",
        "de": "Basen geben OH-Ionen an ihre wässrigen Lösungen ab, schmecken bitter und färben roten Lackmus blau.",
        "fr": "Les bases donnent des ions OH- à leurs solutions aqueuses, ont un goût amer et virent au bleu tournesol rouge.",
        "ru": "Основания отдают в свои водные растворы ионы OH-, имеют горький вкус и окрашивают красный лакмус в синий цвет.",
        "ar": "تعطي القواعد أيونات OH- لمحاليلها المائية، وطعمها مر ويتحول لون عباد الشمس الأحمر إلى اللون الأزرق.",
        "zh": "碱在其水溶液中产生 OH- 离子，味道苦，并使红色石蕊变成蓝色。",
        "ku": "Bingeh îyonên OH-ê didin solavên xwe yên avî, tama tal dikin û lîmûsa sor şîn dibin."
      },
      "trap": {
        "tr": "Bazlar sulu çözeltilerinde elektrik akımını iletmez.",
        "en": "Bases do not conduct electric current in aqueous solutions.",
        "de": "Basen leiten in wässrigen Lösungen keinen elektrischen Strom.",
        "fr": "Les bases ne conduisent pas le courant électrique dans les solutions aqueuses.",
        "ru": "Основания не проводят электрический ток в водных растворах.",
        "ar": "القواعد لا توصل التيار الكهربائي في المحاليل المائية.",
        "zh": "碱在水溶液中不导电。",
        "ku": "Bingeh di çareseriyên avî de herikîna elektrîkê nagirin."
      }
    },
    {
      "id": "u09-f03",
      "fact": {
        "tr": "25 °C'de pH < 7 asidik, pH = 7 nötr, pH > 7 baziktir.",
        "en": "At 25 °C, pH < 7 is acidic, pH = 7 is neutral, pH > 7 is basic.",
        "de": "Bei 25 °C ist pH < 7 sauer, pH = 7 ist neutral, pH > 7 ist basisch.",
        "fr": "À 25 °C, un pH < 7 est acide, un pH = 7 est neutre, un pH > 7 est basique.",
        "ru": "При 25 °C pH < 7 – кислая среда, pH = 7 – нейтральная, pH > 7 – щелочная.",
        "ar": "عند 25 درجة مئوية، يكون الرقم الهيدروجيني <7 حمضيًا، ويكون الرقم الهيدروجيني = 7 متعادلًا، ويكون الرقم الهيدروجيني أكبر من 7 أساسيًا.",
        "zh": "25 °C 时，pH < 7 为酸性，pH = 7 为中性，pH > 7 为碱性。",
        "ku": "Di 25 °C de, pH <7 asîd e, pH = 7 bêalî ye, pH > 7 bingehîn e."
      },
      "trap": {
        "tr": "25 °C'de pH değeri 8 olan bir çözelti asidiktir.",
        "en": "A solution with a pH of 8 at 25 °C is acidic.",
        "de": "Eine Lösung mit einem pH-Wert von 8 bei 25 °C ist sauer.",
        "fr": "Une solution avec un pH de 8 à 25 °C est acide.",
        "ru": "Раствор с pH 8 при 25 °C является кислым.",
        "ar": "المحلول ذو الرقم الهيدروجيني 8 عند 25 درجة مئوية يكون حمضيًا.",
        "zh": "25°C 时 pH 值为 8 的溶液呈酸性。",
        "ku": "Çareseriya bi pH 8 di 25 °C de asîdî ye."
      }
    },
    {
      "id": "u09-f04",
      "fact": {
        "tr": "Aktif metaller (Na, K, Mg, Fe vb.) asitlerle tepkimeye girdiğinde H2 gazı açığa çıkarır.",
        "en": "When active metals (Na, K, Mg, Fe, etc.) react with acids, they release H2 gas.",
        "de": "Wenn aktive Metalle (Na, K, Mg, Fe usw.) mit Säuren reagieren, setzen sie H2-Gas frei.",
        "fr": "Lorsque les métaux actifs (Na, K, Mg, Fe, etc.) réagissent avec les acides, ils libèrent du gaz H2.",
        "ru": "При взаимодействии активных металлов (Na, K, Mg, Fe и др.) с кислотами выделяется газ H2.",
        "ar": "عندما تتفاعل المعادن النشطة (Na، K، Mg، Fe، إلخ) مع الأحماض، فإنها تطلق غاز H2.",
        "zh": "当活性金属（Na、K、Mg、Fe等）与酸反应时，会释放出H2气体。",
        "ku": "Dema ku metalên çalak (Na, K, Mg, Fe, hwd.) bi asîdan re bertek nîşan didin, gaza H2 derdixin."
      },
      "trap": {
        "tr": "Aktif metaller asitlerle SO2 zehirli gazı oluşturur.",
        "en": "Active metals form toxic gas SO2 with acids.",
        "de": "Aktive Metalle bilden mit Säuren das giftige Gas SO2.",
        "fr": "Les métaux actifs forment du gaz toxique SO2 avec les acides.",
        "ru": "Активные металлы образуют с кислотами токсичный газ SO2.",
        "ar": "تشكل المعادن النشطة غازًا سامًا SO2 مع الأحماض.",
        "zh": "活性金属与酸反应生成有毒气体SO2。",
        "ku": "Metalên çalak bi asîdên gaza jehrî SO2 çêdikin."
      }
    },
    {
      "id": "u09-f05",
      "fact": {
        "tr": "Yarı soy metaller (Cu, Ag, Hg) oksijensiz asitlerle (HCl, HBr vb.) TEPKİME VERMEZ.",
        "en": "Semi-noble metals (Cu, Ag, Hg) DO NOT REACT with oxygen-free acids (HCl, HBr, etc.).",
        "de": "Halbedelmetalle (Cu, Ag, Hg) REAGIEREN NICHT mit sauerstofffreien Säuren (HCl, HBr usw.).",
        "fr": "Les métaux semi-nobles (Cu, Ag, Hg) NE RÉAGISSENT PAS avec les acides sans oxygène (HCl, HBr, etc.).",
        "ru": "Полублагородные металлы (Cu, Ag, Hg) НЕ РЕАГИРУЮТ с бескислородными кислотами (HCl, HBr и др.).",
        "ar": "المعادن شبه النبيلة (Cu، Ag، Hg) لا تتفاعل مع الأحماض الخالية من الأكسجين (HCl، HBr، إلخ).",
        "zh": "半贵金属（铜、银、汞）不会与无氧酸（HCl、HBr 等）发生反应。",
        "ku": "Metalên nîv-esîl (Cu, Ag, Hg) bi asîdên bê oksîjen (HCl, HBr, hwd.) REACION NAKIN."
      },
      "trap": {
        "tr": "Bakır metali HCl çözeltisine atıldığında bolca H2 gazı çıkarır.",
        "en": "When copper metal is thrown into HCl solution, it emits abundant H2 gas.",
        "de": "Wenn Kupfermetall in eine HCl-Lösung geworfen wird, gibt es reichlich H2-Gas ab.",
        "fr": "Lorsque le cuivre métallique est jeté dans une solution de HCl, il émet une quantité abondante de gaz H2.",
        "ru": "Когда металлическую медь бросают в раствор HCl, она выделяет обильное количество газа H2.",
        "ar": "عندما يتم إلقاء معدن النحاس في محلول حمض الهيدروكلوريك (HCl)، فإنه ينبعث منه غاز H2 بكثرة.",
        "zh": "当金属铜投入HCl溶液中时，放出大量的H2气体。",
        "ku": "Dema ku metala sifir di nav çareseriya HCl de tê avêtin, ew gaza H2 ya zêde derdixe."
      },
      "osymTip": {
        "tr": "ÖSYM klasiği: Cu + HCl -> TEPKİME YOK!",
        "en": "ÖSYM classic: Cu + HCl -> NO REACTION!",
        "de": "ÖSYM-Klassiker: Cu + HCl -> KEINE REAKTION!",
        "fr": "ÖSYM classique : Cu + HCl -> AUCUNE RÉACTION !",
        "ru": "ÖSYM classic: Cu + HCl -> НЕТ РЕАКЦИИ!",
        "ar": "ÖSYM الكلاسيكي: النحاس + حمض الهيدروكلوريك -> لا يوجد تفاعل!",
        "zh": "ÖSYM 经典：Cu + HCl -> 无反应！",
        "ku": "ÖSYM klasîk: Cu + HCl -> REAKSION TUNE!"
      }
    },
    {
      "id": "u09-f06",
      "fact": {
        "tr": "Yarı soy metaller sadece derişik HNO3 (NO2 gazı), seyreltik HNO3 (NO gazı) ve sıcak derişik H2SO4 (SO2 gazı) ile tepkime verir.",
        "en": "Semi-noble metals react only with concentrated HNO3 (NO2 gas), dilute HNO3 (NO gas) and hot concentrated H2SO4 (SO2 gas).",
        "de": "Halbedelmetalle reagieren nur mit konzentriertem HNO3 (NO2-Gas), verdünntem HNO3 (NO-Gas) und heißem konzentriertem H2SO4 (SO2-Gas).",
        "fr": "Les métaux semi-nobles réagissent uniquement avec le HNO3 concentré (gaz NO2), le HNO3 dilué (gaz NO) et le H2SO4 concentré chaud (gaz SO2).",
        "ru": "Полублагородные металлы реагируют только с концентрированной HNO3 (газ NO2), разбавленной HNO3 (газ NO) и горячей концентрированной H2SO4 (газ SO2).",
        "ar": "تتفاعل المعادن شبه النبيلة فقط مع HNO3 المركز (غاز NO2)، وHNO3 المخفف (NO غاز) وH2SO4 الساخن المركز (غاز SO2).",
        "zh": "半贵金属仅与浓HNO3（NO2气体）、稀HNO3（NO气体）和热浓H2SO4（SO2气体）发生反应。",
        "ku": "Metalên nîv-esilzade tenê bi HNO3 (gaza NO2) konsantrekirî, HNO3 (gaza NO2) rijandin û H2SO4 (gaza SO2) ya germ re reaksiyonê dikin."
      },
      "trap": {
        "tr": "Bakır HNO3 ile tepkime verdiğinde H2 gazı üretir.",
        "en": "When copper reacts with HNO3, it produces H2 gas.",
        "de": "Wenn Kupfer mit HNO3 reagiert, entsteht H2-Gas.",
        "fr": "Lorsque le cuivre réagit avec le HNO3, il produit du gaz H2.",
        "ru": "Когда медь реагирует с HNO3, образуется газ H2.",
        "ar": "عندما يتفاعل النحاس مع HNO3، فإنه ينتج غاز H2.",
        "zh": "当铜与 HNO3 反应时，会产生 H2 气体。",
        "ku": "Dema ku sifir bi HNO3 re reaksiyonê dike, gaza H2 çêdike."
      }
    },
    {
      "id": "u09-f07",
      "fact": {
        "tr": "Tam soy metaller (Au, Pt) hiçbir tekil asitle tepkime vermez; yalnızca kral suyuyla (3 HCl + 1 HNO3) çözünür.",
        "en": "Complete noble metals (Au, Pt) do not react with any single acid; It dissolves only with aqua regia (3 HCl + 1 HNO3).",
        "de": "Vollständige Edelmetalle (Au, Pt) reagieren nicht mit einer einzelnen Säure; Es löst sich nur mit Königswasser (3 HCl + 1 HNO3).",
        "fr": "Les métaux nobles complets (Au, Pt) ne réagissent avec aucun acide ; Il se dissout uniquement avec de l'eau régale (3 HCl + 1 HNO3).",
        "ru": "Полные благородные металлы (Au, Pt) не реагируют ни с одной кислотой; Растворяется только царской водкой (3 HCl + 1 HNO3).",
        "ar": "لا تتفاعل المعادن النبيلة الكاملة (Au، Pt) مع أي حمض منفرد؛ يذوب فقط مع الماء الملكي (3 حمض الهيدروكلوريك + 1 HNO3).",
        "zh": "完全的贵金属（Au、Pt）不与任何单一酸发生反应；它仅溶于王水（3 HCl + 1 HNO3）。",
        "ku": "Metalên hêja yên bêkêmasî (Au, Pt) bi yek asîdê re reaksiyonê nakin; Ew tenê bi aqua regia (3 HCl + 1 HNO3) tê hilweşandin."
      },
      "trap": {
        "tr": "Altın derişik sülfürik asitte hızla çözünerek H2 gazı çıkarır.",
        "en": "Gold dissolves rapidly in concentrated sulfuric acid, releasing H2 gas.",
        "de": "Gold löst sich in konzentrierter Schwefelsäure schnell auf und setzt H2-Gas frei.",
        "fr": "L'or se dissout rapidement dans l'acide sulfurique concentré, libérant du gaz H2.",
        "ru": "Золото быстро растворяется в концентрированной серной кислоте с выделением газообразного H2.",
        "ar": "يذوب الذهب بسرعة في حمض الكبريتيك المركز، ويطلق غاز H2.",
        "zh": "金在浓硫酸中迅速溶解，释放出氢气。",
        "ku": "Zêr di asîda sulfurîk a konsantrekirî de zû dihele û gaza H2 derdixe."
      }
    },
    {
      "id": "u09-f08",
      "fact": {
        "tr": "Amfoter metaller (Zn, Al, Cr, Pb, Sn, Be) hem asitlerle hem de kuvvetli bazlarla tepkimeye girerek H2 gazı açığa çıkarır.",
        "en": "Amphoteric metals (Zn, Al, Cr, Pb, Sn, Be) react with both acids and strong bases to release H2 gas.",
        "de": "Amphotere Metalle (Zn, Al, Cr, Pb, Sn, Be) reagieren sowohl mit Säuren als auch mit starken Basen unter Freisetzung von H2-Gas.",
        "fr": "Les métaux amphotères (Zn, Al, Cr, Pb, Sn, Be) réagissent avec les acides et les bases fortes pour libérer du gaz H2.",
        "ru": "Амфотерные металлы (Zn, Al, Cr, Pb, Sn, Be) реагируют как с кислотами, так и с сильными основаниями с выделением газообразного H2.",
        "ar": "تتفاعل المعادن المذبذبة (Zn، Al، Cr، Pb، Sn، Be) مع كل من الأحماض والقواعد القوية لإطلاق غاز H2.",
        "zh": "两性金属（Zn、Al、Cr、Pb、Sn、Be）与酸和强碱反应释放氢气。",
        "ku": "Metalên amfoterîk (Zn, Al, Cr, Pb, Sn, Be) hem bi asîd û hem jî bi bazên xurt re reaksiyonê dikin û gaza H2 derdixin."
      },
      "trap": {
        "tr": "Alüminyum bazlarla tepkime vermez, sadece asitlerle tepkimeye girer.",
        "en": "Aluminum does not react with bases, only acids.",
        "de": "Aluminium reagiert nicht mit Basen, sondern nur mit Säuren.",
        "fr": "L'aluminium ne réagit pas avec les bases, seulement avec les acides.",
        "ru": "Алюминий не реагирует с основаниями, только с кислотами.",
        "ar": "الألومنيوم لا يتفاعل مع القواعد، ولكن مع الأحماض فقط.",
        "zh": "铝不与碱发生反应，只与酸发生反应。",
        "ku": "Aluminium bi bazdan re nagire, tenê bi asîdan re reaksiyonê dike."
      }
    },
    {
      "id": "u09-f09",
      "fact": {
        "tr": "Karbonatlı bileşikler (CaCO3, NaHCO3) asitlerle tepkimeye girdiğinde CO2 gazı açığa çıkarır.",
        "en": "When carbonated compounds (CaCO3, NaHCO3) react with acids, they release CO2 gas.",
        "de": "Wenn karbonisierte Verbindungen (CaCO3, NaHCO3) mit Säuren reagieren, setzen sie CO2-Gas frei.",
        "fr": "Lorsque les composés carbonatés (CaCO3, NaHCO3) réagissent avec des acides, ils libèrent du CO2 gazeux.",
        "ru": "Когда карбонизированные соединения (CaCO3, NaHCO3) реагируют с кислотами, они выделяют газ CO2.",
        "ar": "عندما تتفاعل المركبات الغازية (CaCO3، NaHCO3) مع الأحماض، فإنها تطلق غاز ثاني أكسيد الكربون.",
        "zh": "当碳酸化合物（CaCO3、NaHCO3）与酸反应时，会释放 CO2 气体。",
        "ku": "Dema pêkhateyên karbonatkirî (CaCO3, NaHCO3) bi asîdan re bertek nîşan didin, gaza CO2 derdixin."
      },
      "trap": {
        "tr": "Kireç taşı üzerine asit döküldüğünde O2 gazı fışkırır.",
        "en": "When acid is poured on limestone, O2 gas gushes out.",
        "de": "Wenn Säure auf Kalkstein gegossen wird, strömt O2-Gas aus.",
        "fr": "Lorsque de l’acide est versé sur du calcaire, du gaz O2 jaillit.",
        "ru": "Когда кислоту выливают на известняк, выделяется газ O2.",
        "ar": "عند صب حمض على الحجر الجيري، يتدفق غاز O2.",
        "zh": "当酸倒在石灰石上时，O2气体就会喷出。",
        "ku": "Dema ku asîd li ser kevirê kilsinî tê rijandin, gaza O2 derdikeve."
      }
    },
    {
      "id": "u09-f10",
      "fact": {
        "tr": "Çamaşır suyu (NaClO) ile tuz ruhu (HCl) karıştırılırsa ölümcül klor gazı (Cl2) açığa çıkar; ASLA karıştırılmamalıdır!",
        "en": "If bleach (NaClO) and hydrochloric acid (HCl) are mixed, deadly chlorine gas (Cl2) is released; It should NEVER be mixed!",
        "de": "Wenn Bleichmittel (NaClO) und Salzsäure (HCl) gemischt werden, wird tödliches Chlorgas (Cl2) freigesetzt; Es sollte NIEMALS gemischt werden!",
        "fr": "Si l'eau de Javel (NaClO) et l'acide chlorhydrique (HCl) sont mélangés, du chlore gazeux mortel (Cl2) est libéré ; Il ne faut JAMAIS le mélanger !",
        "ru": "Если смешать отбеливатель (NaClO) и соляную кислоту (HCl), выделяется смертельный газообразный хлор (Cl2); НИКОГДА нельзя смешивать!",
        "ar": "إذا تم خلط المبيض (NaClO) وحمض الهيدروكلوريك (HCl)، يتم إطلاق غاز الكلور القاتل (Cl2)؛ لا ينبغي أبدا أن تكون مختلطة!",
        "zh": "如果漂白剂（NaClO）和盐酸（HCl）混合，会释放出致命的氯气（Cl2）；绝对不应该混合！",
        "ku": "Ger spîçol (NaClO) û asîda hîdrochlorîk (HCl) tevlîhev bibin, gaza klorê ya kujer (Cl2) derdikeve; Divê ew TU carî neyê tevlihev kirin!"
      },
      "trap": {
        "tr": "Çamaşır suyu ve tuz ruhu karıştırıldığında temizleme gücü iki katına çıkar.",
        "en": "When bleach and spirit of salt (hydrochloric acid) are mixed, the cleaning power doubles.",
        "de": "Wenn Bleichmittel und Salzsäure gemischt werden, verdoppelt sich die Reinigungskraft.",
        "fr": "Lorsque l'eau de Javel et l'esprit de sel sont mélangés, le pouvoir nettoyant double.",
        "ru": "При смешивании отбеливателя и соляной кислоты чистящая способность удваивается.",
        "ar": "عندما يتم خلط المبيض وروح الملح، تتضاعف قوة التنظيف.",
        "zh": "当漂白水与盐酸混合时，清洁力加倍。",
        "ku": "Dema ku ava çilşoyê û ruhê xwê bên tevlihevkirin, hêza paqijkirinê du qat zêde dibe."
      }
    },
    {
      "id": "u09-f11",
      "fact": {
        "tr": "Kuvvetli asit ve kuvvetli baz nötralleşmesinde oluşan tuz nötrdür (örn. NaCl).",
        "en": "The salt formed in the neutralization of a strong acid and a strong base is neutral (e.g. NaCl).",
        "de": "Das bei der Neutralisation einer starken Säure und einer starken Base entstehende Salz ist neutral (z. B. NaCl).",
        "fr": "Le sel formé lors de la neutralisation d’un acide fort et d’une base forte est neutre (par exemple NaCl).",
        "ru": "Соль, образующаяся при нейтрализации сильной кислоты и сильного основания, нейтральна (например, NaCl).",
        "ar": "الملح الناتج عن معادلة حمض قوي وقاعدة قوية يكون متعادلًا (مثل NaCl).",
        "zh": "强酸和强碱中和形成的盐是中性的（例如氯化钠）。",
        "ku": "Xwêya ku di bêbandorkirina asîdeke xurt û bingeheke xurt de çêdibe bêalî ye (mînak NaCl)."
      },
      "trap": {
        "tr": "HCl ile NaOH nötralleştiğinde asidik tuz meydana gelir.",
        "en": "When HCl and NaOH are neutralized, an acidic salt is formed.",
        "de": "Wenn HCl und NaOH neutralisiert werden, entsteht ein saures Salz.",
        "fr": "Lorsque HCl et NaOH sont neutralisés, un sel acide se forme.",
        "ru": "При нейтрализации HCl и NaOH образуется кислая соль.",
        "ar": "عندما يتم تحييد حمض الهيدروكلوريك وهيدروكسيد الصوديوم، يتم تشكيل الملح الحمضي.",
        "zh": "当HCl和NaOH被中和时，形成酸性盐。",
        "ku": "Dema ku HCl û NaOH bêbandor dibin, xwêya asîdî çê dibe."
      }
    },
    {
      "id": "u09-f12",
      "fact": {
        "tr": "Kuvvetli asit ile zayıf bazdan oluşan tuz asidiktir (örn. NH4Cl); sulu çözeltisinin pH ı 7 den küçüktür.",
        "en": "A salt consisting of a strong acid and a weak base is acidic (e.g. NH4Cl); The pH of its aqueous solution is less than 7.",
        "de": "Ein Salz, das aus einer starken Säure und einer schwachen Base besteht, ist sauer (z. B. NH4Cl); Der pH-Wert seiner wässrigen Lösung liegt unter 7.",
        "fr": "Un sel constitué d'un acide fort et d'une base faible est acide (par exemple NH4Cl) ; Le pH de sa solution aqueuse est inférieur à 7.",
        "ru": "Соль, состоящая из сильной кислоты и слабого основания, является кислой (например, NH4Cl); pH его водного раствора менее 7.",
        "ar": "الملح الذي يتكون من حمض قوي وقاعدة ضعيفة يكون حامضيًا (مثل NH4Cl)؛ الرقم الهيدروجيني لمحلوله المائي أقل من 7.",
        "zh": "由强酸和弱碱组成的盐呈酸性（如NH4Cl）；其水溶液的pH值小于7。",
        "ku": "Xwêya ku ji asîdeke xurt û bazeke qels pêk tê asîdî ye (mînak NH4Cl); PH ya çareseriya wê ya avî ji 7 kêmtir e."
      },
      "trap": {
        "tr": "NH4Cl sulu çözeltisi baziktir.",
        "en": "NH4Cl aqueous solution is basic.",
        "de": "Die wässrige NH4Cl-Lösung ist basisch.",
        "fr": "La solution aqueuse de NH4Cl est basique.",
        "ru": "Водный раствор NH4Cl является основным.",
        "ar": "NH4Cl محلول مائي أساسي.",
        "zh": "NH4Cl水溶液呈碱性。",
        "ku": "Çareseriya avê ya NH4Cl bingehîn e."
      }
    },
    {
      "id": "u09-f13",
      "fact": {
        "tr": "Zayıf asit ile kuvvetli bazdan oluşan tuz baziktir (örn. CH3COONa); sulu çözeltisinin pH ı 7 den büyüktür.",
        "en": "A salt consisting of a weak acid and a strong base is basic (e.g. CH3COONa); The pH of its aqueous solution is greater than 7.",
        "de": "Ein Salz, das aus einer schwachen Säure und einer starken Base besteht, ist basisch (z. B. CH3COONa); Der pH-Wert seiner wässrigen Lösung liegt über 7.",
        "fr": "Un sel constitué d'un acide faible et d'une base forte est basique (par exemple CH3COONa) ; Le pH de sa solution aqueuse est supérieur à 7.",
        "ru": "Соль, состоящая из слабой кислоты и сильного основания, является основной (например, CH3COONa); pH его водного раствора больше 7.",
        "ar": "الملح الذي يتكون من حمض ضعيف وقاعدة قوية هو ملح قاعدي (مثل CH3COONa)؛ الرقم الهيدروجيني لمحلوله المائي أكبر من 7.",
        "zh": "由弱酸和强碱组成的盐是碱性的（例如CH3COONa）；其水溶液的pH值大于7。",
        "ku": "Xwêya ku ji asîdeke qels û bazeke xurt pêk tê bingehîn e (mînak CH3COONa); PH ya çareseriya wê ya avî ji 7 mezintir e."
      },
      "trap": {
        "tr": "CH3COONa tuzu asidiktir.",
        "en": "CH3COONa salt is acidic.",
        "de": "CH3COONa-Salz ist sauer.",
        "fr": "Le sel CH3COONa est acide.",
        "ru": "Соль CH3COONa кислая.",
        "ar": "ملح CH3COONa حمضي.",
        "zh": "CH3COONa盐呈酸性。",
        "ku": "Xwêya CH3COONa asîdî ye."
      }
    },
    {
      "id": "u09-f14",
      "fact": {
        "tr": "Lavabo açıcı olarak NaOH ve KOH gibi kuvvetli bazlar yağ ve saçları hidroliz ettiği için kullanılır.",
        "en": "Strong bases such as NaOH and KOH are used as drain cleaners because they hydrolyze oil and hair.",
        "de": "Als Abflussreiniger werden starke Basen wie NaOH und KOH verwendet, da sie Öl und Haare hydrolysieren.",
        "fr": "Des bases fortes telles que NaOH et KOH sont utilisées comme nettoyants pour canalisations car elles hydrolysent l'huile et les cheveux.",
        "ru": "Сильные основания, такие как NaOH и KOH, используются в качестве очистителей канализации, поскольку они гидролизуют масло и волосы.",
        "ar": "تُستخدم القواعد القوية مثل NaOH وKOH كمنظفات للصرف لأنها تحلل الزيت والشعر.",
        "zh": "NaOH 和 KOH 等强碱可用作排水沟清洁剂，因为它们会水解油脂和头发。",
        "ku": "Bingehên bihêz ên wekî NaOH û KOH wekî paqijkerên dravê têne bikar anîn ji ber ku ew rûn û por hîdrolîz dikin."
      },
      "trap": {
        "tr": "Lavabo açıcı olarak seyreltik sirke asidi kullanılır.",
        "en": "Dilute vinegar acid is used as a sink opener.",
        "de": "Als Spülbeckenöffner wird verdünnte Essigsäure verwendet.",
        "fr": "L’acide vinaigre dilué est utilisé comme ouvre-évier.",
        "ru": "Разбавленная уксусная кислота используется как средство для открывания раковины.",
        "ar": "يستخدم حمض الخل المخفف كفتاحة الحوض.",
        "zh": "稀醋酸用作水槽开启剂。",
        "ku": "Asîda sîrkeyê ya tenik wekî vekirina lavaboyê tê bikar anîn."
      }
    },
    {
      "id": "u09-f15",
      "fact": {
        "tr": "Tuzlar iyonik yapılı kristal katılardır, katı halde iletmez, sıvı ve çözeltide iletir.",
        "en": "Salts are crystalline solids with an ionic structure. They do not conduct in solid form, but conduct in liquid and solution.",
        "de": "Salze sind kristalline Feststoffe mit ionischer Struktur. Sie leiten nicht in fester Form, sondern in Flüssigkeit und Lösung.",
        "fr": "Les sels sont des solides cristallins à structure ionique. Ils ne conduisent pas sous forme solide, mais conduisent en liquide et en solution.",
        "ru": "Соли представляют собой кристаллические вещества с ионной структурой. Они не проводят ток в твердой форме, но проводят в жидкости и растворе.",
        "ar": "الأملاح هي مواد صلبة بلورية ذات بنية أيونية. وهي لا توصل في الحالة الصلبة، ولكنها توصل في السائل والمحلول.",
        "zh": "盐是具有离子结构的结晶固体。它们不以固体形式导电，但以液体和溶液形式导电。",
        "ku": "Xwê madeyên krîstalî yên bi avahiyeke îyonî ne. Ew ne di forma hişk de, lê di şikil û çareseriyê de digerin."
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
      }
    },
    {
      "id": "u09-f16",
      "fact": {
        "tr": "Yemek sodası NaHCO3 (sodyum bikarbonat), çamaşır sodası Na2CO3 (sodyum karbonat) dır.",
        "en": "Baking soda is NaHCO3 (sodium bicarbonate), washing soda is Na2CO3 (sodium carbonate).",
        "de": "Backpulver ist NaHCO3 (Natriumbikarbonat), Waschsoda ist Na2CO3 (Natriumkarbonat).",
        "fr": "Le bicarbonate de soude est du NaHCO3 (bicarbonate de sodium), la lessive de soude est du Na2CO3 (carbonate de sodium).",
        "ru": "Пищевая сода — это NaHCO3 (бикарбонат натрия), стиральная сода — Na2CO3 (карбонат натрия).",
        "ar": "صودا الخبز هي NaHCO3 (بيكربونات الصوديوم)، وصودا الغسيل هي Na2CO3 (كربونات الصوديوم).",
        "zh": "小苏打是NaHCO3（碳酸氢钠），洗苏打是Na2CO3（碳酸钠）。",
        "ku": "Soda şuştinê NaHCO3 (bikarbonat sodyûm), soda şuştinê Na2CO3 (karbonat sodyûm) e."
      },
      "trap": {
        "tr": "Yemek sodası NaOH bileşiğidir.",
        "en": "Baking soda is a NaOH compound.",
        "de": "Backpulver ist eine NaOH-Verbindung.",
        "fr": "Le bicarbonate de soude est un composé NaOH.",
        "ru": "Пищевая сода представляет собой соединение NaOH.",
        "ar": "صودا الخبز عبارة عن مركب NaOH.",
        "zh": "小苏打是一种 NaOH 化合物。",
        "ku": "Soda şîrîn pêkhateyek NaOH e."
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
        "ar": "المعدن النشط",
        "zh": "活性金属",
        "ku": "Active Metal"
      },
      "conceptB": {
        "tr": "Yarı Soy Metal",
        "en": "Semi Noble Metal",
        "de": "Halbedles Metall",
        "fr": "Métal semi-noble",
        "ru": "Полублагородный металл",
        "ar": "شبه المعدن النبيل",
        "zh": "半贵金属",
        "ku": "Semi Noble Metal"
      },
      "distinction": {
        "tr": "Aktif metal asitle H2 gazı verir; yarı soy metal (Cu, Ag, Hg) oksijensiz asitle tepkime vermez, oksijenli asitle NO/NO2/SO2 verir.",
        "en": "The active metal gives H2 gas with acid; Semi-noble metal (Cu, Ag, Hg) does not react with oxygen-free acid, but gives NO/NO2/SO2 with oxygenated acid.",
        "de": "Das aktive Metall gibt mit Säure H2-Gas ab; Halbedelmetalle (Cu, Ag, Hg) reagieren nicht mit sauerstofffreier Säure, sondern ergeben mit sauerstoffhaltiger Säure NO/NO2/SO2.",
        "fr": "Le métal actif donne du gaz H2 avec l'acide ; Le métal semi-noble (Cu, Ag, Hg) ne réagit pas avec l'acide sans oxygène, mais donne du NO/NO2/SO2 avec l'acide oxygéné.",
        "ru": "Активный металл дает с кислотой газ H2; Полублагородные металлы (Cu, Ag, Hg) не реагируют с бескислородной кислотой, но дают NO/NO2/SO2 с кислородсодержащей кислотой.",
        "ar": "يعطي المعدن النشط غاز H2 مع الحمض؛ لا يتفاعل المعدن شبه النبيل (Cu، Ag، Hg) مع الحمض الخالي من الأكسجين، ولكنه يعطي NO/NO2/SO2 مع الحمض المؤكسج.",
        "zh": "活性金属与酸作用放出H2气体；半贵金属（Cu、Ag、Hg）不与无氧酸反应，但与含氧酸反应生成NO/NO2/SO2。",
        "ku": "Metala çalak gaza H2 bi asîdê dide; Metala nîv-esîl (Cu, Ag, Hg) bi asîda bêoksîjen re reaksiyonê nake, lê bi asîda oksîjenkirî re NO/NO2/SO2 dide."
      }
    },
    {
      "id": "u09-c02",
      "conceptA": {
        "tr": "Amfoter Metal",
        "en": "Amphoter Metal",
        "de": "Amphoteres Metall",
        "fr": "Amphoter Métal",
        "ru": "Амфотер Металл",
        "ar": "امفوتر معدن",
        "zh": "两性金属",
        "ku": "Amphoter Metal"
      },
      "conceptB": {
        "tr": "Normal Metal",
        "en": "Regular Metal",
        "de": "Normales Metall",
        "fr": "Métal régulier",
        "ru": "Обычный металл",
        "ar": "معدن عادي",
        "zh": "普通金属",
        "ku": "Regular Metal"
      },
      "distinction": {
        "tr": "Amfoter metaller (Zn, Al vb.) hem kuvvetli asitle hem kuvvetli bazla H2 gazı verir.",
        "en": "Amphoteric metals (Zn, Al, etc.) give off H2 gas with both strong acids and strong bases.",
        "de": "Amphotere Metalle (Zn, Al usw.) geben sowohl mit starken Säuren als auch mit starken Basen H2-Gas ab.",
        "fr": "Les métaux amphotères (Zn, Al, etc.) dégagent du gaz H2 contenant à la fois des acides forts et des bases fortes.",
        "ru": "Амфотерные металлы (Zn, Al и др.) выделяют газ H2 как с сильными кислотами, так и с сильными основаниями.",
        "ar": "تطلق المعادن المذبذبة (Zn، Al، إلخ) غاز H2 مع كل من الأحماض القوية والقواعد القوية.",
        "zh": "两性金属（锌、铝等）与强酸和强碱均放出氢气。",
        "ku": "Metalên amfoterîk (Zn, Al û hwd.) gaza H2 hem bi asîdên xurt û hem jî bi bazên xurt derdixin."
      }
    },
    {
      "id": "u09-c03",
      "conceptA": {
        "tr": "Kuvvetli Asit",
        "en": "Strong Acid",
        "de": "Starke Säure",
        "fr": "Acide Fort",
        "ru": "Сильная кислота",
        "ar": "حمض قوي",
        "zh": "强酸",
        "ku": "Asîda xurt"
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
        "en": "Strong acids ionize 100% in water (HCl, HNO3); Weak acids partially ionize in water and establish equilibrium (HF, CH3COOH).",
        "de": "Starke Säuren ionisieren zu 100 % in Wasser (HCl, HNO3); Schwache Säuren ionisieren teilweise in Wasser und stellen ein Gleichgewicht her (HF, CH3COOH).",
        "fr": "Les acides forts s'ionisent à 100 % dans l'eau (HCl, HNO3) ; Les acides faibles s'ionisent partiellement dans l'eau et établissent l'équilibre (HF, CH3COOH).",
        "ru": "Сильные кислоты ионизуются в воде на 100% (HCl, HNO3); Слабые кислоты частично ионизируются в воде и устанавливают равновесие (HF, CH3COOH).",
        "ar": "تتأين الأحماض القوية بنسبة 100% في الماء (حمض الهيدروكلوريك، HNO3)؛ تتأين الأحماض الضعيفة جزئيًا في الماء وتحقق التوازن (HF، CH3COOH).",
        "zh": "强酸在水中 100% 电离（HCl、HNO3）；弱酸在水中部分电离并建立平衡（HF、CH3COOH）。",
        "ku": "Asîdên xurt 100% di avê de iyonîze dikin (HCl, HNO3); Asîdên qels di nav avê de qismî yonîze dibin û hevsengiyê ava dikin (HF, CH3COOH)."
      }
    },
    {
      "id": "u09-c04",
      "conceptA": {
        "tr": "Asidik Tuz",
        "en": "Acidic Salt",
        "de": "Saures Salz",
        "fr": "Sel acide",
        "ru": "Кислотная соль",
        "ar": "ملح حمضي",
        "zh": "酸性盐",
        "ku": "Xwêya Asîdî"
      },
      "conceptB": {
        "tr": "Bazik Tuz",
        "en": "Basic Salt",
        "de": "Basisches Salz",
        "fr": "Sel de base",
        "ru": "Основная соль",
        "ar": "الملح الأساسي",
        "zh": "碱式盐",
        "ku": "Xwêya bingehîn"
      },
      "distinction": {
        "tr": "Kuvvetli asit ile zayıf bazın tuzu asidiktir (NH4Cl); kuvvetli baz ile zayıf asidin tuzu baziktir (CH3COONa).",
        "en": "The salt of a strong acid and a weak base is acidic (NH4Cl); The salt of a strong base and a weak acid is basic (CH3COONa).",
        "de": "Das Salz einer starken Säure und einer schwachen Base ist sauer (NH4Cl); Das Salz einer starken Base und einer schwachen Säure ist basisch (CH3COONa).",
        "fr": "Le sel d’un acide fort et d’une base faible est acide (NH4Cl) ; Le sel d'une base forte et d'un acide faible est basique (CH3COONa).",
        "ru": "Соль сильной кислоты и слабого основания – кислая (NH4Cl); Соль сильного основания и слабой кислоты является основной (CH3COONa).",
        "ar": "ملح حمض قوي وقاعدة ضعيفة حمضي (NH4Cl)؛ ملح القاعدة القوية والحمض الضعيف هو ملح قاعدي (CH3COONa).",
        "zh": "强酸和弱碱的盐呈酸性（NH4Cl）；强碱和弱酸的盐是碱性的（CH3COONa）。",
        "ku": "Xwêya asîda xurt û bazeke qels asîdî ye (NH4Cl); Xwêya bingeheke xurt û asîdeke qels bingehîn e (CH3COONa)."
      }
    },
    {
      "id": "u09-c05",
      "conceptA": {
        "tr": "Turnusol İndikatörü",
        "en": "Litmus Indicator",
        "de": "Lackmus-Indikator",
        "fr": "Indicateur décisif",
        "ru": "Лакмусовый индикатор",
        "ar": "مؤشر عباد الشمس",
        "zh": "石蕊指示剂",
        "ku": "Ltmus Indicator"
      },
      "conceptB": {
        "tr": "Fenolftalein İndikatörü",
        "en": "Phenolphthalein Indicator",
        "de": "Phenolphthalein-Indikator",
        "fr": "Indicateur de phénolphtaléine",
        "ru": "Индикатор фенолфталеина",
        "ar": "مؤشر الفينول فثالين",
        "zh": "酚酞指示剂",
        "ku": "Nîşana Phenolphthalein"
      },
      "distinction": {
        "tr": "Turnusol asitte kırmızı bazda mavidir; fenolftalein asitte renksiz bazda pembedir.",
        "en": "Litmus is red in acid and blue in base; Phenolphthalein is colorless in acid and pink in base.",
        "de": "Lackmus ist in der Säure rot und in der Base blau; Phenolphthalein ist in der Säure farblos und in der Base rosa.",
        "fr": "Le tournesol est rouge en acide et bleu en base ; La phénolphtaléine est incolore en acide et rose en base.",
        "ru": "Лакмус красный в кислоте и синий в щелочи; Фенолфталеин бесцветен в кислоте и розоват в основании.",
        "ar": "عباد الشمس أحمر اللون في الحمض وأزرق في القاعدة؛ الفينول فثالين عديم اللون في الحمض ووردي في القاعدة.",
        "zh": "石蕊遇酸呈红色，遇碱呈蓝色；酚酞在酸中呈无色，在碱中呈粉红色。",
        "ku": "Litmus di asîdê de sor û di bazê de şîn e; Phenolphthalein di asîdê de bêreng û di bazê de pembe ye."
      }
    },
    {
      "id": "u09-c06",
      "conceptA": {
        "tr": "Nötralleşme",
        "en": "neutralization",
        "de": "Neutralisierung",
        "fr": "neutralisation",
        "ru": "нейтрализация",
        "ar": "تحييد",
        "zh": "中和",
        "ku": "bêbandorkirin"
      },
      "conceptB": {
        "tr": "Hidroliz",
        "en": "hydrolysis",
        "de": "Hydrolyse",
        "fr": "hydrolyse",
        "ru": "гидролиз",
        "ar": "التحلل المائي",
        "zh": "水解",
        "ku": "hîdrolîz"
      },
      "distinction": {
        "tr": "Nötralleşme H+ ile OH-'ın su oluşturmasıdır; hidroliz zayıftan gelen iyonun su ile tepkimeye girerek ortamın pH'ını değiştirmesidir.",
        "en": "Neutralization is the formation of water between H+ and OH-; Hydrolysis is when the ion coming from the weak reacts with water and changes the pH of the environment.",
        "de": "Unter Neutralisation versteht man die Bildung von Wasser zwischen H+ und OH-; Bei der Hydrolyse reagiert das von der Schwachstelle kommende Ion mit Wasser und verändert den pH-Wert der Umgebung.",
        "fr": "La neutralisation est la formation d'eau entre H+ et OH- ; L'hydrolyse se produit lorsque l'ion provenant du faible réagit avec l'eau et modifie le pH de l'environnement.",
        "ru": "Нейтрализация — это образование воды между H+ и OH-; Гидролиз – это когда ион, поступающий из слабой среды, реагирует с водой и изменяет pH среды.",
        "ar": "التحييد هو تكوين الماء بين H+ و OH-؛ يحدث التحلل المائي عندما يتفاعل الأيون القادم من الضعيف مع الماء ويغير الرقم الهيدروجيني للبيئة.",
        "zh": "中和是H+和OH-之间形成水；水解是指来自弱离子的离子与水发生反应并改变环境的 pH 值。",
        "ku": "Bêalîbûn çêbûna avê di navbera H+ û OH- de ye; Hîdrolîz ew e ku îona ku ji qels tê bi avê re reaksiyonê dike û pHya hawîrdorê diguherîne."
      }
    },
    {
      "id": "u09-c07",
      "conceptA": {
        "tr": "Aktif Metal",
        "en": "Active Metal",
        "de": "Aktives Metall",
        "fr": "Métal actif",
        "ru": "Активный металл",
        "ar": "المعدن النشط",
        "zh": "活性金属",
        "ku": "Active Metal"
      },
      "conceptB": {
        "tr": "Yarı Soy Metal",
        "en": "Semi Noble Metal",
        "de": "Halbedles Metall",
        "fr": "Métal semi-noble",
        "ru": "Полублагородный металл",
        "ar": "شبه المعدن النبيل",
        "zh": "半贵金属",
        "ku": "Semi Noble Metal"
      },
      "distinction": {
        "tr": "Aktif metal asitle H2 gazı verir; yarı soy metal (Cu, Ag, Hg) oksijensiz asitle tepkime vermez, oksijenli asitle NO/NO2/SO2 verir.",
        "en": "The active metal gives H2 gas with acid; Semi-noble metal (Cu, Ag, Hg) does not react with oxygen-free acid, but gives NO/NO2/SO2 with oxygenated acid.",
        "de": "Das aktive Metall gibt mit Säure H2-Gas ab; Halbedelmetalle (Cu, Ag, Hg) reagieren nicht mit sauerstofffreier Säure, sondern ergeben mit sauerstoffhaltiger Säure NO/NO2/SO2.",
        "fr": "Le métal actif donne du gaz H2 avec l'acide ; Le métal semi-noble (Cu, Ag, Hg) ne réagit pas avec l'acide sans oxygène, mais donne du NO/NO2/SO2 avec l'acide oxygéné.",
        "ru": "Активный металл дает с кислотой газ H2; Полублагородные металлы (Cu, Ag, Hg) не реагируют с бескислородной кислотой, но дают NO/NO2/SO2 с кислородсодержащей кислотой.",
        "ar": "يعطي المعدن النشط غاز H2 مع الحمض؛ لا يتفاعل المعدن شبه النبيل (Cu، Ag، Hg) مع الحمض الخالي من الأكسجين، ولكنه يعطي NO/NO2/SO2 مع الحمض المؤكسج.",
        "zh": "活性金属与酸作用放出H2气体；半贵金属（Cu、Ag、Hg）不与无氧酸反应，但与含氧酸反应生成NO/NO2/SO2。",
        "ku": "Metala çalak gaza H2 bi asîdê dide; Metala nîv-esîl (Cu, Ag, Hg) bi asîda bêoksîjen re reaksiyonê nake, lê bi asîda oksîjenkirî re NO/NO2/SO2 dide."
      }
    },
    {
      "id": "u09-c08",
      "conceptA": {
        "tr": "Aktif Metal",
        "en": "Active Metal",
        "de": "Aktives Metall",
        "fr": "Métal actif",
        "ru": "Активный металл",
        "ar": "المعدن النشط",
        "zh": "活性金属",
        "ku": "Active Metal"
      },
      "conceptB": {
        "tr": "Yarı Soy Metal",
        "en": "Semi Noble Metal",
        "de": "Halbedles Metall",
        "fr": "Métal semi-noble",
        "ru": "Полублагородный металл",
        "ar": "شبه المعدن النبيل",
        "zh": "半贵金属",
        "ku": "Semi Noble Metal"
      },
      "distinction": {
        "tr": "Aktif metal asitle H2 gazı verir; yarı soy metal (Cu, Ag, Hg) oksijensiz asitle tepkime vermez, oksijenli asitle NO/NO2/SO2 verir.",
        "en": "The active metal gives H2 gas with acid; Semi-noble metal (Cu, Ag, Hg) does not react with oxygen-free acid, but gives NO/NO2/SO2 with oxygenated acid.",
        "de": "Das aktive Metall gibt mit Säure H2-Gas ab; Halbedelmetalle (Cu, Ag, Hg) reagieren nicht mit sauerstofffreier Säure, sondern ergeben mit sauerstoffhaltiger Säure NO/NO2/SO2.",
        "fr": "Le métal actif donne du gaz H2 avec l'acide ; Le métal semi-noble (Cu, Ag, Hg) ne réagit pas avec l'acide sans oxygène, mais donne du NO/NO2/SO2 avec l'acide oxygéné.",
        "ru": "Активный металл дает с кислотой газ H2; Полублагородные металлы (Cu, Ag, Hg) не реагируют с бескислородной кислотой, но дают NO/NO2/SO2 с кислородсодержащей кислотой.",
        "ar": "يعطي المعدن النشط غاز H2 مع الحمض؛ لا يتفاعل المعدن شبه النبيل (Cu، Ag، Hg) مع الحمض الخالي من الأكسجين، ولكنه يعطي NO/NO2/SO2 مع الحمض المؤكسج.",
        "zh": "活性金属与酸作用放出H2气体；半贵金属（Cu、Ag、Hg）不与无氧酸反应，但与含氧酸反应生成NO/NO2/SO2。",
        "ku": "Metala çalak gaza H2 bi asîdê dide; Metala nîv-esîl (Cu, Ag, Hg) bi asîda bêoksîjen re reaksiyonê nake, lê bi asîda oksîjenkirî re NO/NO2/SO2 dide."
      }
    }
  ],
  "sequences": [
    {
      "id": "u09-s01",
      "title": {
        "tr": "Metal Asit Tepkime Mantığı",
        "en": "Metal Acid Reaction Logic",
        "de": "Logik der Metallsäurereaktion",
        "fr": "Logique de réaction acide métallique",
        "ru": "Логика реакции металлической кислоты",
        "ar": "منطق تفاعل حمض المعدن",
        "zh": "金属酸反应逻辑",
        "ku": "Metal Acid Reaction Mantiqa"
      },
      "steps": [
        {
          "tr": "Metali sınıflandır (aktif, yarı soy, tam soy, amfoter)",
          "en": "Classify the metal (active, half noble, full noble, amphoteric)",
          "de": "Klassifizierung des Metalls (aktiv, halb edel, voll edel, amphoter)",
          "fr": "Classer le métal (actif, mi-noble, plein noble, amphotère)",
          "ru": "Классификация металлов (активный, полублагородный, полностью благородный, амфотерный).",
          "ar": "تصنيف المعدن (نشط، نصف نبيل، كامل النبيل، مذبذب)",
          "zh": "金属分类（活性金属、半惰性金属、全惰性金属、两性金属）",
          "ku": "Metalê dabeş bikin (çalak, nîv esîl, tam esîl, amfoterîk)"
        },
        {
          "tr": "Asidi kontrol et (oksijenli, oksijensiz)",
          "en": "Control acid (with oxygen, without oxygen)",
          "de": "Kontrollsäure (mit Sauerstoff, ohne Sauerstoff)",
          "fr": "Acide de contrôle (avec oxygène, sans oxygène)",
          "ru": "Контрольная кислота (с кислородом, без кислорода)",
          "ar": "حمض التحكم (مع الأكسجين، بدون الأكسجين)",
          "zh": "控酸（有氧、无氧）",
          "ku": "Kontrolkirina asîdê (bi oksîjenê, bê oksîjenê)"
        },
        {
          "tr": "Tepkime olup olmadığını belirle",
          "en": "Determine if there is a reaction",
          "de": "Stellen Sie fest, ob eine Reaktion erfolgt",
          "fr": "Déterminer s'il y a une réaction",
          "ru": "Определите, есть ли реакция",
          "ar": "تحديد ما إذا كان هناك رد فعل",
          "zh": "判断是否有反应",
          "ku": "Diyar bikin ka reaksiyonek heye"
        },
        {
          "tr": "Çıkan gazı yaz (H2 veya NO/NO2/SO2)",
          "en": "Write the released gas (H2 or NO/NO2/SO2)",
          "de": "Schreiben Sie das freigesetzte Gas (H2 oder NO/NO2/SO2)",
          "fr": "Écrivez le gaz libéré (H2 ou NO/NO2/SO2)",
          "ru": "Напишите выделяемый газ (H2 или NO/NO2/SO2)",
          "ar": "اكتب الغاز المنطلق (H2 أو NO/NO2/SO2)",
          "zh": "写出释放的气体（H2或NO/NO2/SO2）",
          "ku": "Gaza berdanê (H2 an NO/NO2/SO2) binivîsin"
        }
      ]
    },
    {
      "id": "u09-s02",
      "title": {
        "tr": "Asit-Baz Titrasyon Basamakları",
        "en": "Acid-Base Titration Steps",
        "de": "Schritte der Säure-Base-Titration",
        "fr": "Étapes de titrage acide-base",
        "ru": "Этапы кислотно-основного титрования",
        "ar": "خطوات معايرة الحمض والقاعدة",
        "zh": "酸碱滴定步骤",
        "ku": "Gavên Tîtrasyona Asîd-Bas"
      },
      "steps": [
        {
          "tr": "Erlenmayere asit ve indikatör konur",
          "en": "Acid and indicator are placed in the Erlenenmayere.",
          "de": "Säure und Indikator werden in die Erlenenmayere gegeben.",
          "fr": "L'acide et l'indicateur sont placés dans l'Erlenenmayere.",
          "ru": "Кислоту и индикатор помещают в Эрлененмайер.",
          "ar": "يتم وضع الحمض والمؤشر في Erlenenmayere.",
          "zh": "酸和指示剂被放置在 Erlenenmayere 中。",
          "ku": "Acid û nîşana di Erlenenmayere de têne danîn."
        },
        {
          "tr": "Bürete standart baz çözeltisi doldurulur",
          "en": "Standard base solution is filled into the burette.",
          "de": "In die Bürette wird Standard-Basislösung eingefüllt.",
          "fr": "La solution de base étalon est versée dans la burette.",
          "ru": "В бюретку заливается стандартный базовый раствор.",
          "ar": "يتم ملء المحلول الأساسي القياسي في السحاحة.",
          "zh": "将标准碱溶液装入滴定管中。",
          "ku": "Çareseriya bingehîn a standard di buretê de tê dagirtin."
        },
        {
          "tr": "Büret musluğu açılarak damla damla eklenir",
          "en": "Open the burette valve and add drop by drop.",
          "de": "Öffnen Sie das Bürettenventil und geben Sie tropfenweise hinzu.",
          "fr": "Ouvrir la valve de la burette et ajouter goutte à goutte.",
          "ru": "Откройте кран бюретки и добавляйте по каплям.",
          "ar": "افتح صمام السحاحة وأضف قطرة قطرة.",
          "zh": "打开滴定管阀门并逐滴添加。",
          "ku": "Valveya buretê vekin û dilop bi dilop zêde bikin."
        },
        {
          "tr": "İndikatör renk değiştirdiği anda eşdeğerlik noktası kaydedilir",
          "en": "The equivalence point is recorded as soon as the indicator changes color",
          "de": "Der Äquivalenzpunkt wird erfasst, sobald der Indikator seine Farbe ändert",
          "fr": "Le point d'équivalence est enregistré dès que l'indicateur change de couleur",
          "ru": "Точка эквивалентности фиксируется, как только индикатор меняет цвет.",
          "ar": "يتم تسجيل نقطة التكافؤ بمجرد تغير لون المؤشر",
          "zh": "指示剂变色后立即记录当量点",
          "ku": "Dema ku nîşander reng diguhere, xala hevsengiyê tê tomar kirin"
        }
      ]
    },
    {
      "id": "u09-s03",
      "title": {
        "tr": "Metallerin Asitle Tepkime Sırası",
        "en": "Reaction Order of Metals with Acid",
        "de": "Reaktionsordnung von Metallen mit Säure",
        "fr": "Ordre de réaction des métaux avec l'acide",
        "ru": "Порядок реакции металлов с кислотой",
        "ar": "ترتيب تفاعل المعادن مع الحمض",
        "zh": "金属与酸的反应顺序",
        "ku": "Rêza reaksiyonê ya metalên bi asîdê"
      },
      "steps": [
        {
          "tr": "Aktif metal asitle tepkimeye girer ve H2 gazı çıkar",
          "en": "Active metal reacts with acid and releases H2 gas.",
          "de": "Aktives Metall reagiert mit Säure und setzt H2-Gas frei.",
          "fr": "Le métal actif réagit avec l'acide et libère du gaz H2.",
          "ru": "Активный металл реагирует с кислотой и выделяет газ H2.",
          "ar": "يتفاعل المعدن النشط مع الحمض ويطلق غاز H2.",
          "zh": "活性金属与酸反应并释放氢气。",
          "ku": "Metala çalak bi asîdê re reaksiyonê dike û gaza H2 derdixe."
        },
        {
          "tr": "Amfoter metal hem asit hem kuvvetli bazla H2 gazı çıkarır",
          "en": "Amphoteric metal releases H2 gas with both acid and strong base.",
          "de": "Amphoteres Metall setzt H2-Gas sowohl mit Säure als auch mit starker Base frei.",
          "fr": "Le métal amphotère libère du gaz H2 contenant à la fois un acide et une base forte.",
          "ru": "Амфотерный металл выделяет газ H2, содержащий как кислоту, так и сильное основание.",
          "ar": "يطلق المعدن المذبذب غاز H2 مع كل من القاعدة الحمضية والقوية.",
          "zh": "两性金属与酸和强碱均放出H2气体。",
          "ku": "Metala amfoterîk gaza H2 hem bi asîd û hem jî bi bazeke xurt derdixe."
        },
        {
          "tr": "Yarı soy metaller sadece HNO3 ve H2SO4 ile gaz çıkarır",
          "en": "Semi-noble metals release gas only with HNO3 and H2SO4",
          "de": "Halbedelmetalle setzen Gas nur mit HNO3 und H2SO4 frei",
          "fr": "Les métaux semi-nobles libèrent des gaz uniquement avec HNO3 et H2SO4",
          "ru": "Полублагородные металлы выделяют газ только с HNO3 и H2SO4.",
          "ar": "تطلق المعادن شبه النبيلة الغاز فقط مع HNO3 وH2SO4",
          "zh": "半贵金属仅与 HNO3 和 H2SO4 一起释放气体",
          "ku": "Metalên nîv-esilzade tenê bi HNO3 û H2SO4 gazê derdixin"
        },
        {
          "tr": "Soy metaller (Pt, Au) kral suyu hariç hiçbir asitle tepkime vermez",
          "en": "Noble metals (Pt, Au) do not react with any acid except aqua regia.",
          "de": "Edelmetalle (Pt, Au) reagieren mit keiner Säure außer Königswasser.",
          "fr": "Les métaux nobles (Pt, Au) ne réagissent avec aucun acide sauf l'eau régale.",
          "ru": "Благородные металлы (Pt, Au) не реагируют ни с какими кислотами, кроме царской водки.",
          "ar": "المعادن النبيلة (Pt, Au) لا تتفاعل مع أي حمض باستثناء الماء الملكي.",
          "zh": "贵金属（Pt、Au）不与王水以外的任何酸发生反应。",
          "ku": "Metalên hêja (Pt, Au) ji bilî aqua regia bi tu asîdê re reaksiyonê nakin."
        }
      ]
    },
    {
      "id": "u09-s04",
      "title": {
        "tr": "pH Değerinin Değişimi",
        "en": "Change of pH Value",
        "de": "Änderung des pH-Wertes",
        "fr": "Modification de la valeur du pH",
        "ru": "Изменение значения pH",
        "ar": "تغيير قيمة الرقم الهيدروجيني",
        "zh": "pH值变化",
        "ku": "Guhertina nirxa pH"
      },
      "steps": [
        {
          "tr": "Saf suyun pH değeri 7'dir",
          "en": "The pH value of pure water is 7",
          "de": "Der pH-Wert von reinem Wasser beträgt 7",
          "fr": "La valeur du pH de l'eau pure est de 7",
          "ru": "Значение pH чистой воды составляет 7.",
          "ar": "قيمة الرقم الهيدروجيني للمياه النقية هي 7",
          "zh": "纯净水的pH值为7",
          "ku": "Nirxa pH ya ava paqij 7 e"
        },
        {
          "tr": "Asit eklendikçe H+ derişimi artar ve pH düşer",
          "en": "As acid is added, H+ concentration increases and pH decreases.",
          "de": "Wenn Säure hinzugefügt wird, steigt die H+-Konzentration und der pH-Wert sinkt.",
          "fr": "À mesure que l’acide est ajouté, la concentration de H+ augmente et le pH diminue.",
          "ru": "При добавлении кислоты концентрация H+ увеличивается, а pH снижается.",
          "ar": "ومع إضافة الحمض، يزداد تركيز H+ ويقل الرقم الهيدروجيني.",
          "zh": "随着酸的添加，H+ 浓度增加，pH 值降低。",
          "ku": "Her ku asîd tê zêdekirin, konseya H+ zêde dibe û pH kêm dibe."
        },
        {
          "tr": "Baz eklendikçe OH- derişimi artar ve pH yükselir",
          "en": "As base is added, the OH- concentration increases and the pH rises.",
          "de": "Mit der Zugabe von Base erhöht sich die OH-Konzentration und der pH-Wert steigt.",
          "fr": "À mesure que la base est ajoutée, la concentration en OH- augmente et le pH augmente.",
          "ru": "По мере добавления основания концентрация OH- увеличивается и pH повышается.",
          "ar": "ومع إضافة القاعدة، يزداد تركيز OH ويرتفع الرقم الهيدروجيني.",
          "zh": "随着碱的添加，OH- 浓度增加，pH 值上升。",
          "ku": "Her ku baz tê zêdekirin, konsantasyona OH- zêde dibe û pH jî bilind dibe."
        },
        {
          "tr": "Derişik asit ile derişik baz nötralleşerek tuz ve su verir",
          "en": "Concentrated acid and concentrated base neutralize to give salt and water.",
          "de": "Konzentrierte Säure und konzentrierte Base neutralisieren zu Salz und Wasser.",
          "fr": "L'acide concentré et la base concentrée se neutralisent pour donner du sel et de l'eau.",
          "ru": "Концентрированная кислота и концентрированное основание нейтрализуются с образованием соли и воды.",
          "ar": "يتم تحييد الحمض المركز والقاعدة المركزة لإعطاء الملح والماء.",
          "zh": "浓酸和浓碱中和，得到盐和水。",
          "ku": "Asîd û bazê konsantrekirî bêbandor dibin da ku xwê û avê bidin."
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u09-twin01",
      "stem": {
        "tr": "Bakır (Cu) metali parçaları üzerine derişik HNO3 çözeltisi eklendiğinde hangi gaz açığa çıkar?",
        "en": "Which gas is released when concentrated HNO3 solution is added to copper (Cu) metal pieces?",
        "de": "Welches Gas wird freigesetzt, wenn konzentrierte HNO3-Lösung zu Metallstücken aus Kupfer (Cu) hinzugefügt wird?",
        "fr": "Quel gaz est libéré lorsqu’une solution concentrée de HNO3 est ajoutée à des pièces métalliques en cuivre (Cu) ?",
        "ru": "Какой газ выделяется при добавлении концентрированного раствора HNO3 к кускам меди (Cu)?",
        "ar": "ما الغاز الذي ينطلق عند إضافة محلول HNO3 المركز إلى القطع المعدنية من النحاس (Cu)؟",
        "zh": "当浓硝酸溶液加入到铜（Cu）金属件中时会释放出哪种气体？",
        "ku": "Dema ku çareseriya HNO3 ya konsantrekirî li perçeyên metal ên sifir (Cu) tê zêdekirin kîjan gaz derdikeve?"
      },
      "options": [
        {
          "tr": "NO2",
          "en": "NO2",
          "de": "NO2",
          "fr": "NO2",
          "ru": "NO2",
          "ar": "NO2",
          "zh": "NO2",
          "ku": "NO2"
        },
        {
          "tr": "H2",
          "en": "H2",
          "de": "H2",
          "fr": "H2",
          "ru": "H2",
          "ar": "H2",
          "zh": "H2",
          "ku": "H2"
        },
        {
          "tr": "O2",
          "en": "O2",
          "de": "O2",
          "fr": "O2",
          "ru": "O2",
          "ar": "O2",
          "zh": "O2",
          "ku": "O2"
        },
        {
          "tr": "N2",
          "en": "N2",
          "de": "N2",
          "fr": "N2",
          "ru": "N2",
          "ar": "N2",
          "zh": "N2",
          "ku": "N2"
        },
        {
          "tr": "SO2",
          "en": "SO2",
          "de": "SO2",
          "fr": "SO2",
          "ru": "SO2",
          "ar": "SO2",
          "zh": "SO2",
          "ku": "SO2"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Bakır yarı soy metaldir; derişik HNO3 ile tepkimesinde kahverengi NO2 gazı açığa çıkar (H2 ASLA çıkmaz).",
        "en": "Copper is a semi-noble metal; When it reacts with concentrated HNO3, brown NO2 gas is released (H2 NEVER comes out).",
        "de": "Kupfer ist ein Halbedelmetall; Wenn es mit konzentriertem HNO3 reagiert, wird braunes NO2-Gas freigesetzt (H2 tritt NIEMALS aus).",
        "fr": "Le cuivre est un métal semi-noble ; Lorsqu'il réagit avec du HNO3 concentré, du gaz brun NO2 est libéré (le H2 ne sort JAMAIS).",
        "ru": "Медь — полублагородный металл; При реакции с концентрированной HNO3 выделяется коричневый газ NO2 (H2 НИКОГДА не выходит).",
        "ar": "النحاس معدن شبه نبيل. عندما يتفاعل مع HNO3 المركز، يتم إطلاق غاز NO2 البني (H2 لا يخرج أبدًا).",
        "zh": "铜是一种半贵金属；当它与浓 HNO3 反应时，会释放棕色 NO2 气体（H2 永远不会逸出）。",
        "ku": "Sifir metaleke nîv-esilzade ye; Dema ku ew bi HNO3-a konsantrekirî re reaksiyonê dike, gaza qehweyî ya NO2 derdikeve (H2 TUQET dernakeve)."
      }
    },
    {
      "id": "u09-twin02",
      "stem": {
        "tr": "Aşağıdaki metallerden hangisi kuvvetli bir baz olan NaOH çözeltisi ile tepkimeye girerek H2 gazı açığa çıkarabilir?",
        "en": "Which of the following metals can react with NaOH solution, a strong base, to release H2 gas?",
        "de": "Welches der folgenden Metalle kann mit NaOH-Lösung, einer starken Base, unter Freisetzung von H2-Gas reagieren?",
        "fr": "Lequel des métaux suivants peut réagir avec une solution de NaOH, une base forte, pour libérer du gaz H2 ?",
        "ru": "Какой из перечисленных металлов может реагировать с раствором сильного основания NaOH с выделением газа H2?",
        "ar": "أي المعادن التالية يمكن أن يتفاعل مع محلول NaOH، وهو قاعدة قوية، لإطلاق غاز H2؟",
        "zh": "下列哪种金属能与强碱 NaOH 溶液反应放出氢气？",
        "ku": "Kîjan ji metalên jêrîn dikare bi çareseriya NaOH, bingehek bihêz, reaksiyonê bike û gaza H2 derxe?"
      },
      "options": [
        {
          "tr": "Al",
          "en": "Al",
          "de": "Al",
          "fr": "Al",
          "ru": "Al",
          "ar": "Al",
          "zh": "Al",
          "ku": "Al"
        },
        {
          "tr": "Cu",
          "en": "Cu",
          "de": "Cu",
          "fr": "Cu",
          "ru": "Cu",
          "ar": "Cu",
          "zh": "Cu",
          "ku": "Cu"
        },
        {
          "tr": "Fe",
          "en": "Fe",
          "de": "Fe",
          "fr": "Fe",
          "ru": "Fe",
          "ar": "Fe",
          "zh": "Fe",
          "ku": "Fe"
        },
        {
          "tr": "Ag",
          "en": "Ag",
          "de": "Ag",
          "fr": "Ag",
          "ru": "Ag",
          "ar": "Ag",
          "zh": "Ag",
          "ku": "Ag"
        },
        {
          "tr": "Mg",
          "en": "Mg",
          "de": "Mg",
          "fr": "Mg",
          "ru": "Mg",
          "ar": "Mg",
          "zh": "Mg",
          "ku": "Mg"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Alüminyum (Al) amfoter bir metaldir; kuvvetli bazlarla tepkimeye girerek H2 gazı üretir.",
        "en": "Aluminum (Al) is an amphoteric metal; It reacts with strong bases to produce H2 gas.",
        "de": "Aluminium (Al) ist ein amphoteres Metall; Es reagiert mit starken Basen unter Bildung von H2-Gas.",
        "fr": "L'aluminium (Al) est un métal amphotère ; Il réagit avec des bases fortes pour produire du gaz H2.",
        "ru": "Алюминий (Al) — амфотерный металл; Он реагирует с сильными основаниями с образованием газа H2.",
        "ar": "الألومنيوم (آل) هو معدن مذبذب. يتفاعل مع قواعد قوية لإنتاج غاز H2.",
        "zh": "铝（Al）是一种两性金属；与强碱反应生成氢气。",
        "ku": "Aluminium (Al) metalek amfoterîk e; Ew bi bingehên xurt re reaksiyonê dike ku gaza H2 hilberîne."
      }
    },
    {
      "id": "u09-twin03",
      "stem": {
        "tr": "Kimya dersinde Asitler, Bazlar ve Tuzlar ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Acids, Bases & Salts, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Säuren, Basen & Salze: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Acides, Bases & Sels, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Кислоты, основания и соли», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الأحماض والقواعد والأملاح\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“酸、碱和盐”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Asîd, Baz û Xwê\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Bakır HNO3 ile tepkime verdiğinde H2 gazı üretir.",
          "en": "When copper reacts with HNO3, it produces H2 gas.",
          "de": "Wenn Kupfer mit HNO3 reagiert, entsteht H2-Gas.",
          "fr": "Lorsque le cuivre réagit avec le HNO3, il produit du gaz H2.",
          "ru": "Когда медь реагирует с HNO3, образуется газ H2.",
          "ar": "عندما يتفاعل النحاس مع HNO3، فإنه ينتج غاز H2.",
          "zh": "当铜与 HNO3 反应时，会产生 H2 气体。",
          "ku": "Dema ku sifir bi HNO3 re reaksiyonê dike, gaza H2 çêdike."
        },
        {
          "tr": "Kireç taşı üzerine asit döküldüğünde O2 gazı fışkırır.",
          "en": "When acid is poured on limestone, O2 gas gushes out.",
          "de": "Wenn Säure auf Kalkstein gegossen wird, strömt O2-Gas aus.",
          "fr": "Lorsque de l’acide est versé sur du calcaire, du gaz O2 jaillit.",
          "ru": "Когда кислоту выливают на известняк, выделяется газ O2.",
          "ar": "عند صب حمض على الحجر الجيري، يتدفق غاز O2.",
          "zh": "当酸倒在石灰石上时，O2气体就会喷出。",
          "ku": "Dema ku asîd li ser kevirê kilsinî tê rijandin, gaza O2 derdikeve."
        },
        {
          "tr": "25 °C'de pH < 7 asidik, pH = 7 nötr, pH > 7 baziktir.",
          "en": "At 25 °C, pH < 7 is acidic, pH = 7 is neutral, pH > 7 is basic.",
          "de": "Bei 25 °C ist pH < 7 sauer, pH = 7 ist neutral, pH > 7 ist basisch.",
          "fr": "À 25 °C, un pH < 7 est acide, un pH = 7 est neutre, un pH > 7 est basique.",
          "ru": "При 25 °C pH < 7 – кислая среда, pH = 7 – нейтральная, pH > 7 – щелочная.",
          "ar": "عند 25 درجة مئوية، يكون الرقم الهيدروجيني <7 حمضيًا، ويكون الرقم الهيدروجيني = 7 متعادلًا، ويكون الرقم الهيدروجيني أكبر من 7 أساسيًا.",
          "zh": "25 °C 时，pH < 7 为酸性，pH = 7 为中性，pH > 7 为碱性。",
          "ku": "Di 25 °C de, pH <7 asîd e, pH = 7 bêalî ye, pH > 7 bingehîn e."
        },
        {
          "tr": "NH4Cl sulu çözeltisi baziktir.",
          "en": "NH4Cl aqueous solution is basic.",
          "de": "Die wässrige NH4Cl-Lösung ist basisch.",
          "fr": "La solution aqueuse de NH4Cl est basique.",
          "ru": "Водный раствор NH4Cl является основным.",
          "ar": "NH4Cl محلول مائي أساسي.",
          "zh": "NH4Cl水溶液呈碱性。",
          "ku": "Çareseriya avê ya NH4Cl bingehîn e."
        },
        {
          "tr": "Tuzlar kovalent moleküllerden oluşur.",
          "en": "Salts consist of covalent molecules.",
          "de": "Salze bestehen aus kovalenten Molekülen.",
          "fr": "Les sels sont constitués de molécules covalentes.",
          "ru": "Соли состоят из ковалентных молекул.",
          "ar": "تتكون الأملاح من جزيئات تساهمية.",
          "zh": "盐由共价分子组成。",
          "ku": "Xwê ji molekulên kovalent pêk tên."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"25 °C'de pH < 7 asidik, pH = 7 nötr, pH > 7 baziktir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"At 25 °C, pH < 7 is acidic, pH = 7 is neutral, pH > 7 is basic.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei 25 °C ist pH < 7 sauer, pH = 7 ist neutral, pH > 7 ist basisch.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"À 25 °C, un pH < 7 est acide, un pH = 7 est neutre, un pH > 7 est basique.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При 25 °C pH < 7 – кислая среда, pH = 7 – нейтральная, pH > 7 – щелочная.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عند 25 درجة مئوية، يكون الرقم الهيدروجيني <7 حمضيًا، ويكون الرقم الهيدروجيني = 7 متعادلًا، ويكون الرقم الهيدروجيني أكبر من 7 أساسيًا.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“25 °C 时，pH < 7 为酸性，pH = 7 为中性，pH > 7 为碱性。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di 25 °C de, pH <7 asîd e, pH = 7 bêalî ye, pH > 7 bingehîn e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u09-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Asitler, Bazlar ve Tuzlar konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Acids, Bases & Salts?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Säuren, Basen & Salze zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Acides, Bases & Sels ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Кислоты, основания и соли»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الأحماض والقواعد والأملاح\"؟",
        "zh": "根据“酸、碱和盐”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Asîd, Baz û Xwê\" de rast e?"
      },
      "options": [
        {
          "tr": "Altın derişik sülfürik asitte hızla çözünerek H2 gazı çıkarır.",
          "en": "Gold dissolves rapidly in concentrated sulfuric acid, releasing H2 gas.",
          "de": "Gold löst sich in konzentrierter Schwefelsäure schnell auf und setzt H2-Gas frei.",
          "fr": "L'or se dissout rapidement dans l'acide sulfurique concentré, libérant du gaz H2.",
          "ru": "Золото быстро растворяется в концентрированной серной кислоте с выделением газообразного H2.",
          "ar": "يذوب الذهب بسرعة في حمض الكبريتيك المركز، ويطلق غاز H2.",
          "zh": "金在浓硫酸中迅速溶解，释放出氢气。",
          "ku": "Zêr di asîda sulfurîk a konsantrekirî de zû dihele û gaza H2 derdixe."
        },
        {
          "tr": "Çamaşır suyu ve tuz ruhu karıştırıldığında temizleme gücü iki katına çıkar.",
          "en": "When bleach and spirit of salt (hydrochloric acid) are mixed, the cleaning power doubles.",
          "de": "Wenn Bleichmittel und Salzsäure gemischt werden, verdoppelt sich die Reinigungskraft.",
          "fr": "Lorsque l'eau de Javel et l'esprit de sel sont mélangés, le pouvoir nettoyant double.",
          "ru": "При смешивании отбеливателя и соляной кислоты чистящая способность удваивается.",
          "ar": "عندما يتم خلط المبيض وروح الملح، تتضاعف قوة التنظيف.",
          "zh": "当漂白水与盐酸混合时，清洁力加倍。",
          "ku": "Dema ku ava çilşoyê û ruhê xwê bên tevlihevkirin, hêza paqijkirinê du qat zêde dibe."
        },
        {
          "tr": "CH3COONa tuzu asidiktir.",
          "en": "CH3COONa salt is acidic.",
          "de": "CH3COONa-Salz ist sauer.",
          "fr": "Le sel CH3COONa est acide.",
          "ru": "Соль CH3COONa кислая.",
          "ar": "ملح CH3COONa حمضي.",
          "zh": "CH3COONa盐呈酸性。",
          "ku": "Xwêya CH3COONa asîdî ye."
        },
        {
          "tr": "Aktif metaller (Na, K, Mg, Fe vb.) asitlerle tepkimeye girdiğinde H2 gazı açığa çıkarır.",
          "en": "When active metals (Na, K, Mg, Fe, etc.) react with acids, they release H2 gas.",
          "de": "Wenn aktive Metalle (Na, K, Mg, Fe usw.) mit Säuren reagieren, setzen sie H2-Gas frei.",
          "fr": "Lorsque les métaux actifs (Na, K, Mg, Fe, etc.) réagissent avec les acides, ils libèrent du gaz H2.",
          "ru": "При взаимодействии активных металлов (Na, K, Mg, Fe и др.) с кислотами выделяется газ H2.",
          "ar": "عندما تتفاعل المعادن النشطة (Na، K، Mg، Fe، إلخ) مع الأحماض، فإنها تطلق غاز H2.",
          "zh": "当活性金属（Na、K、Mg、Fe等）与酸反应时，会释放出H2气体。",
          "ku": "Dema ku metalên çalak (Na, K, Mg, Fe, hwd.) bi asîdan re bertek nîşan didin, gaza H2 derdixin."
        },
        {
          "tr": "Yemek sodası NaOH bileşiğidir.",
          "en": "Baking soda is a NaOH compound.",
          "de": "Backpulver ist eine NaOH-Verbindung.",
          "fr": "Le bicarbonate de soude est un composé NaOH.",
          "ru": "Пищевая сода представляет собой соединение NaOH.",
          "ar": "صودا الخبز عبارة عن مركب NaOH.",
          "zh": "小苏打是一种 NaOH 化合物。",
          "ku": "Soda şîrîn pêkhateyek NaOH e."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Aktif metaller (Na, K, Mg, Fe vb.) asitlerle tepkimeye girdiğinde H2 gazı açığa çıkarır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"When active metals (Na, K, Mg, Fe, etc.) react with acids, they release H2 gas.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn aktive Metalle (Na, K, Mg, Fe usw.) mit Säuren reagieren, setzen sie H2-Gas frei.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Lorsque les métaux actifs (Na, K, Mg, Fe, etc.) réagissent avec les acides, ils libèrent du gaz H2.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При взаимодействии активных металлов (Na, K, Mg, Fe и др.) с кислотами выделяется газ H2.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عندما تتفاعل المعادن النشطة (Na، K، Mg، Fe، إلخ) مع الأحماض، فإنها تطلق غاز H2.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“当活性金属（Na、K、Mg、Fe等）与酸反应时，会释放出H2气体。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Dema ku metalên çalak (Na, K, Mg, Fe, hwd.) bi asîdan re bertek nîşan didin, gaza H2 derdixin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u09-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Asitler, Bazlar ve Tuzlar sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Acids, Bases & Salts, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Säuren, Basen & Salze: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Acides, Bases & Sels, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Кислоты, основания и соли», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الأحماض والقواعد والأملاح\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“酸、碱和盐”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Asîd, Baz û Xwê\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Alüminyum bazlarla tepkime vermez, sadece asitlerle tepkimeye girer.",
          "en": "Aluminum does not react with bases, only acids.",
          "de": "Aluminium reagiert nicht mit Basen, sondern nur mit Säuren.",
          "fr": "L'aluminium ne réagit pas avec les bases, seulement avec les acides.",
          "ru": "Алюминий не реагирует с основаниями, только с кислотами.",
          "ar": "الألومنيوم لا يتفاعل مع القواعد، ولكن مع الأحماض فقط.",
          "zh": "铝不与碱发生反应，只与酸发生反应。",
          "ku": "Aluminium bi bazdan re nagire, tenê bi asîdan re reaksiyonê dike."
        },
        {
          "tr": "HCl ile NaOH nötralleştiğinde asidik tuz meydana gelir.",
          "en": "When HCl and NaOH are neutralized, an acidic salt is formed.",
          "de": "Wenn HCl und NaOH neutralisiert werden, entsteht ein saures Salz.",
          "fr": "Lorsque HCl et NaOH sont neutralisés, un sel acide se forme.",
          "ru": "При нейтрализации HCl и NaOH образуется кислая соль.",
          "ar": "عندما يتم تحييد حمض الهيدروكلوريك وهيدروكسيد الصوديوم، يتم تشكيل الملح الحمضي.",
          "zh": "当HCl和NaOH被中和时，形成酸性盐。",
          "ku": "Dema ku HCl û NaOH bêbandor dibin, xwêya asîdî çê dibe."
        },
        {
          "tr": "Lavabo açıcı olarak seyreltik sirke asidi kullanılır.",
          "en": "Dilute vinegar acid is used as a sink opener.",
          "de": "Als Spülbeckenöffner wird verdünnte Essigsäure verwendet.",
          "fr": "L’acide vinaigre dilué est utilisé comme ouvre-évier.",
          "ru": "Разбавленная уксусная кислота используется как средство для открывания раковины.",
          "ar": "يستخدم حمض الخل المخفف كفتاحة الحوض.",
          "zh": "稀醋酸用作水槽开启剂。",
          "ku": "Asîda sîrkeyê ya tenik wekî vekirina lavaboyê tê bikar anîn."
        },
        {
          "tr": "Asitler ele kayganlık hissi verir ve turnusolu maviye boyar.",
          "en": "Acids give the hand a slippery feeling and turn litmus blue.",
          "de": "Säuren verleihen der Hand ein rutschiges Gefühl und verfärben Lackmus blau.",
          "fr": "Les acides donnent à la main une sensation glissante et virent au bleu tournesol.",
          "ru": "Кислоты придают руке ощущение скользкости и окрашивают лакмус в синий цвет.",
          "ar": "تمنح الأحماض اليد ملمسًا زلقًا وتحوّل لون عباد الشمس إلى اللون الأزرق.",
          "zh": "酸使手有滑溜的感觉并使石蕊变成蓝色。",
          "ku": "Asîd hestek şilbûnê dide dest û lîmûsê şîn dibin."
        },
        {
          "tr": "Yarı soy metaller (Cu, Ag, Hg) oksijensiz asitlerle (HCl, HBr vb.) TEPKİME VERMEZ.",
          "en": "Semi-noble metals (Cu, Ag, Hg) DO NOT REACT with oxygen-free acids (HCl, HBr, etc.).",
          "de": "Halbedelmetalle (Cu, Ag, Hg) REAGIEREN NICHT mit sauerstofffreien Säuren (HCl, HBr usw.).",
          "fr": "Les métaux semi-nobles (Cu, Ag, Hg) NE RÉAGISSENT PAS avec les acides sans oxygène (HCl, HBr, etc.).",
          "ru": "Полублагородные металлы (Cu, Ag, Hg) НЕ РЕАГИРУЮТ с бескислородными кислотами (HCl, HBr и др.).",
          "ar": "المعادن شبه النبيلة (Cu، Ag، Hg) لا تتفاعل مع الأحماض الخالية من الأكسجين (HCl، HBr، إلخ).",
          "zh": "半贵金属（铜、银、汞）不会与无氧酸（HCl、HBr 等）发生反应。",
          "ku": "Metalên nîv-esîl (Cu, Ag, Hg) bi asîdên bê oksîjen (HCl, HBr, hwd.) REACION NAKIN."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Yarı soy metaller (Cu, Ag, Hg) oksijensiz asitlerle (HCl, HBr vb.) TEPKİME VERMEZ.\" ifadesidir. ÖSYM klasiği: Cu + HCl -> TEPKİME YOK!",
        "en": "The correct statement is: \"Semi-noble metals (Cu, Ag, Hg) DO NOT REACT with oxygen-free acids (HCl, HBr, etc.).\". ÖSYM classic: Cu + HCl -> NO REACTION!",
        "de": "Die zutreffende Aussage lautet: \"Halbedelmetalle (Cu, Ag, Hg) REAGIEREN NICHT mit sauerstofffreien Säuren (HCl, HBr usw.).\". ÖSYM-Klassiker: Cu + HCl -> KEINE REAKTION!",
        "fr": "L'affirmation exacte est: \"Les métaux semi-nobles (Cu, Ag, Hg) NE RÉAGISSENT PAS avec les acides sans oxygène (HCl, HBr, etc.).\". ÖSYM classique : Cu + HCl -> AUCUNE RÉACTION !",
        "ru": "Правильное утверждение: «Полублагородные металлы (Cu, Ag, Hg) НЕ РЕАГИРУЮТ с бескислородными кислотами (HCl, HBr и др.).». ÖSYM classic: Cu + HCl -> НЕТ РЕАКЦИИ!",
        "ar": "العبارة الصحيحة هي: \"المعادن شبه النبيلة (Cu، Ag، Hg) لا تتفاعل مع الأحماض الخالية من الأكسجين (HCl، HBr، إلخ).\". ÖSYM الكلاسيكي: النحاس + حمض الهيدروكلوريك -> لا يوجد تفاعل!",
        "zh": "正确表述为：“半贵金属（铜、银、汞）不会与无氧酸（HCl、HBr 等）发生反应。”。ÖSYM 经典：Cu + HCl -> 无反应！",
        "ku": "Gotina rast ev e: \"Metalên nîv-esîl (Cu, Ag, Hg) bi asîdên bê oksîjen (HCl, HBr, hwd.) REACION NAKIN.\". ÖSYM klasîk: Cu + HCl -> REAKSION TUNE!"
      }
    },
    {
      "id": "u09-twin06",
      "stem": {
        "tr": "Aşağıda Asitler, Bazlar ve Tuzlar ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Acids, Bases & Salts, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Säuren, Basen & Salze: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Acides, Bases & Sels, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Кислоты, основания и соли», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الأحماض والقواعد والأملاح\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“酸、碱和盐”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Asîd, Baz û Xwê\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Yarı soy metaller sadece derişik HNO3 (NO2 gazı), seyreltik HNO3 (NO gazı) ve sıcak derişik H2SO4 (SO2 gazı) ile tepkime verir.",
          "en": "Semi-noble metals react only with concentrated HNO3 (NO2 gas), dilute HNO3 (NO gas) and hot concentrated H2SO4 (SO2 gas).",
          "de": "Halbedelmetalle reagieren nur mit konzentriertem HNO3 (NO2-Gas), verdünntem HNO3 (NO-Gas) und heißem konzentriertem H2SO4 (SO2-Gas).",
          "fr": "Les métaux semi-nobles réagissent uniquement avec le HNO3 concentré (gaz NO2), le HNO3 dilué (gaz NO) et le H2SO4 concentré chaud (gaz SO2).",
          "ru": "Полублагородные металлы реагируют только с концентрированной HNO3 (газ NO2), разбавленной HNO3 (газ NO) и горячей концентрированной H2SO4 (газ SO2).",
          "ar": "تتفاعل المعادن شبه النبيلة فقط مع HNO3 المركز (غاز NO2)، وHNO3 المخفف (NO غاز) وH2SO4 الساخن المركز (غاز SO2).",
          "zh": "半贵金属仅与浓HNO3（NO2气体）、稀HNO3（NO气体）和热浓H2SO4（SO2气体）发生反应。",
          "ku": "Metalên nîv-esilzade tenê bi HNO3 (gaza NO2) konsantrekirî, HNO3 (gaza NO2) rijandin û H2SO4 (gaza SO2) ya germ re reaksiyonê dikin."
        },
        {
          "tr": "Kireç taşı üzerine asit döküldüğünde O2 gazı fışkırır.",
          "en": "When acid is poured on limestone, O2 gas gushes out.",
          "de": "Wenn Säure auf Kalkstein gegossen wird, strömt O2-Gas aus.",
          "fr": "Lorsque de l’acide est versé sur du calcaire, du gaz O2 jaillit.",
          "ru": "Когда кислоту выливают на известняк, выделяется газ O2.",
          "ar": "عند صب حمض على الحجر الجيري، يتدفق غاز O2.",
          "zh": "当酸倒在石灰石上时，O2气体就会喷出。",
          "ku": "Dema ku asîd li ser kevirê kilsinî tê rijandin, gaza O2 derdikeve."
        },
        {
          "tr": "NH4Cl sulu çözeltisi baziktir.",
          "en": "NH4Cl aqueous solution is basic.",
          "de": "Die wässrige NH4Cl-Lösung ist basisch.",
          "fr": "La solution aqueuse de NH4Cl est basique.",
          "ru": "Водный раствор NH4Cl является основным.",
          "ar": "NH4Cl محلول مائي أساسي.",
          "zh": "NH4Cl水溶液呈碱性。",
          "ku": "Çareseriya avê ya NH4Cl bingehîn e."
        },
        {
          "tr": "Tuzlar kovalent moleküllerden oluşur.",
          "en": "Salts consist of covalent molecules.",
          "de": "Salze bestehen aus kovalenten Molekülen.",
          "fr": "Les sels sont constitués de molécules covalentes.",
          "ru": "Соли состоят из ковалентных молекул.",
          "ar": "تتكون الأملاح من جزيئات تساهمية.",
          "zh": "盐由共价分子组成。",
          "ku": "Xwê ji molekulên kovalent pêk tên."
        },
        {
          "tr": "Bazlar sulu çözeltilerinde elektrik akımını iletmez.",
          "en": "Bases do not conduct electric current in aqueous solutions.",
          "de": "Basen leiten in wässrigen Lösungen keinen elektrischen Strom.",
          "fr": "Les bases ne conduisent pas le courant électrique dans les solutions aqueuses.",
          "ru": "Основания не проводят электрический ток в водных растворах.",
          "ar": "القواعد لا توصل التيار الكهربائي في المحاليل المائية.",
          "zh": "碱在水溶液中不导电。",
          "ku": "Bingeh di çareseriyên avî de herikîna elektrîkê nagirin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Yarı soy metaller sadece derişik HNO3 (NO2 gazı), seyreltik HNO3 (NO gazı) ve sıcak derişik H2SO4 (SO2 gazı) ile tepkime verir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Semi-noble metals react only with concentrated HNO3 (NO2 gas), dilute HNO3 (NO gas) and hot concentrated H2SO4 (SO2 gas).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Halbedelmetalle reagieren nur mit konzentriertem HNO3 (NO2-Gas), verdünntem HNO3 (NO-Gas) und heißem konzentriertem H2SO4 (SO2-Gas).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les métaux semi-nobles réagissent uniquement avec le HNO3 concentré (gaz NO2), le HNO3 dilué (gaz NO) et le H2SO4 concentré chaud (gaz SO2).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Полублагородные металлы реагируют только с концентрированной HNO3 (газ NO2), разбавленной HNO3 (газ NO) и горячей концентрированной H2SO4 (газ SO2).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تتفاعل المعادن شبه النبيلة فقط مع HNO3 المركز (غاز NO2)، وHNO3 المخفف (NO غاز) وH2SO4 الساخن المركز (غاز SO2).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“半贵金属仅与浓HNO3（NO2气体）、稀HNO3（NO气体）和热浓H2SO4（SO2气体）发生反应。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Metalên nîv-esilzade tenê bi HNO3 (gaza NO2) konsantrekirî, HNO3 (gaza NO2) rijandin û H2SO4 (gaza SO2) ya germ re reaksiyonê dikin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u09-twin07",
      "stem": {
        "tr": "Asitler, Bazlar ve Tuzlar konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Acids, Bases & Salts, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Säuren, Basen & Salze: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Acides, Bases & Sels, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Кислоты, основания и соли», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الأحماض والقواعد والأملاح\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“酸、碱和盐”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Asîd, Baz û Xwê\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Çamaşır suyu ve tuz ruhu karıştırıldığında temizleme gücü iki katına çıkar.",
          "en": "When bleach and spirit of salt (hydrochloric acid) are mixed, the cleaning power doubles.",
          "de": "Wenn Bleichmittel und Salzsäure gemischt werden, verdoppelt sich die Reinigungskraft.",
          "fr": "Lorsque l'eau de Javel et l'esprit de sel sont mélangés, le pouvoir nettoyant double.",
          "ru": "При смешивании отбеливателя и соляной кислоты чистящая способность удваивается.",
          "ar": "عندما يتم خلط المبيض وروح الملح، تتضاعف قوة التنظيف.",
          "zh": "当漂白水与盐酸混合时，清洁力加倍。",
          "ku": "Dema ku ava çilşoyê û ruhê xwê bên tevlihevkirin, hêza paqijkirinê du qat zêde dibe."
        },
        {
          "tr": "Tam soy metaller (Au, Pt) hiçbir tekil asitle tepkime vermez; yalnızca kral suyuyla (3 HCl + 1 HNO3) çözünür.",
          "en": "Complete noble metals (Au, Pt) do not react with any single acid; It dissolves only with aqua regia (3 HCl + 1 HNO3).",
          "de": "Vollständige Edelmetalle (Au, Pt) reagieren nicht mit einer einzelnen Säure; Es löst sich nur mit Königswasser (3 HCl + 1 HNO3).",
          "fr": "Les métaux nobles complets (Au, Pt) ne réagissent avec aucun acide ; Il se dissout uniquement avec de l'eau régale (3 HCl + 1 HNO3).",
          "ru": "Полные благородные металлы (Au, Pt) не реагируют ни с одной кислотой; Растворяется только царской водкой (3 HCl + 1 HNO3).",
          "ar": "لا تتفاعل المعادن النبيلة الكاملة (Au، Pt) مع أي حمض منفرد؛ يذوب فقط مع الماء الملكي (3 حمض الهيدروكلوريك + 1 HNO3).",
          "zh": "完全的贵金属（Au、Pt）不与任何单一酸发生反应；它仅溶于王水（3 HCl + 1 HNO3）。",
          "ku": "Metalên hêja yên bêkêmasî (Au, Pt) bi yek asîdê re reaksiyonê nakin; Ew tenê bi aqua regia (3 HCl + 1 HNO3) tê hilweşandin."
        },
        {
          "tr": "CH3COONa tuzu asidiktir.",
          "en": "CH3COONa salt is acidic.",
          "de": "CH3COONa-Salz ist sauer.",
          "fr": "Le sel CH3COONa est acide.",
          "ru": "Соль CH3COONa кислая.",
          "ar": "ملح CH3COONa حمضي.",
          "zh": "CH3COONa盐呈酸性。",
          "ku": "Xwêya CH3COONa asîdî ye."
        },
        {
          "tr": "Yemek sodası NaOH bileşiğidir.",
          "en": "Baking soda is a NaOH compound.",
          "de": "Backpulver ist eine NaOH-Verbindung.",
          "fr": "Le bicarbonate de soude est un composé NaOH.",
          "ru": "Пищевая сода представляет собой соединение NaOH.",
          "ar": "صودا الخبز عبارة عن مركب NaOH.",
          "zh": "小苏打是一种 NaOH 化合物。",
          "ku": "Soda şîrîn pêkhateyek NaOH e."
        },
        {
          "tr": "25 °C'de pH değeri 8 olan bir çözelti asidiktir.",
          "en": "A solution with a pH of 8 at 25 °C is acidic.",
          "de": "Eine Lösung mit einem pH-Wert von 8 bei 25 °C ist sauer.",
          "fr": "Une solution avec un pH de 8 à 25 °C est acide.",
          "ru": "Раствор с pH 8 при 25 °C является кислым.",
          "ar": "المحلول ذو الرقم الهيدروجيني 8 عند 25 درجة مئوية يكون حمضيًا.",
          "zh": "25°C 时 pH 值为 8 的溶液呈酸性。",
          "ku": "Çareseriya bi pH 8 di 25 °C de asîdî ye."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Tam soy metaller (Au, Pt) hiçbir tekil asitle tepkime vermez; yalnızca kral suyuyla (3 HCl + 1 HNO3) çözünür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Complete noble metals (Au, Pt) do not react with any single acid; It dissolves only with aqua regia (3 HCl + 1 HNO3).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Vollständige Edelmetalle (Au, Pt) reagieren nicht mit einer einzelnen Säure; Es löst sich nur mit Königswasser (3 HCl + 1 HNO3).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les métaux nobles complets (Au, Pt) ne réagissent avec aucun acide ; Il se dissout uniquement avec de l'eau régale (3 HCl + 1 HNO3).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Полные благородные металлы (Au, Pt) не реагируют ни с одной кислотой; Растворяется только царской водкой (3 HCl + 1 HNO3).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"لا تتفاعل المعادن النبيلة الكاملة (Au، Pt) مع أي حمض منفرد؛ يذوب فقط مع الماء الملكي (3 حمض الهيدروكلوريك + 1 HNO3).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“完全的贵金属（Au、Pt）不与任何单一酸发生反应；它仅溶于王水（3 HCl + 1 HNO3）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Metalên hêja yên bêkêmasî (Au, Pt) bi yek asîdê re reaksiyonê nakin; Ew tenê bi aqua regia (3 HCl + 1 HNO3) tê hilweşandin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u09-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Asitler, Bazlar ve Tuzlar ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Acids, Bases & Salts, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Säuren, Basen & Salze: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Acides, Bases & Sels, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Кислоты, основания и соли», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الأحماض والقواعد والأملاح\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“酸、碱和盐”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Asîd, Baz û Xwê\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "HCl ile NaOH nötralleştiğinde asidik tuz meydana gelir.",
          "en": "When HCl and NaOH are neutralized, an acidic salt is formed.",
          "de": "Wenn HCl und NaOH neutralisiert werden, entsteht ein saures Salz.",
          "fr": "Lorsque HCl et NaOH sont neutralisés, un sel acide se forme.",
          "ru": "При нейтрализации HCl и NaOH образуется кислая соль.",
          "ar": "عندما يتم تحييد حمض الهيدروكلوريك وهيدروكسيد الصوديوم، يتم تشكيل الملح الحمضي.",
          "zh": "当HCl和NaOH被中和时，形成酸性盐。",
          "ku": "Dema ku HCl û NaOH bêbandor dibin, xwêya asîdî çê dibe."
        },
        {
          "tr": "Lavabo açıcı olarak seyreltik sirke asidi kullanılır.",
          "en": "Dilute vinegar acid is used as a sink opener.",
          "de": "Als Spülbeckenöffner wird verdünnte Essigsäure verwendet.",
          "fr": "L’acide vinaigre dilué est utilisé comme ouvre-évier.",
          "ru": "Разбавленная уксусная кислота используется как средство для открывания раковины.",
          "ar": "يستخدم حمض الخل المخفف كفتاحة الحوض.",
          "zh": "稀醋酸用作水槽开启剂。",
          "ku": "Asîda sîrkeyê ya tenik wekî vekirina lavaboyê tê bikar anîn."
        },
        {
          "tr": "Amfoter metaller (Zn, Al, Cr, Pb, Sn, Be) hem asitlerle hem de kuvvetli bazlarla tepkimeye girerek H2 gazı açığa çıkarır.",
          "en": "Amphoteric metals (Zn, Al, Cr, Pb, Sn, Be) react with both acids and strong bases to release H2 gas.",
          "de": "Amphotere Metalle (Zn, Al, Cr, Pb, Sn, Be) reagieren sowohl mit Säuren als auch mit starken Basen unter Freisetzung von H2-Gas.",
          "fr": "Les métaux amphotères (Zn, Al, Cr, Pb, Sn, Be) réagissent avec les acides et les bases fortes pour libérer du gaz H2.",
          "ru": "Амфотерные металлы (Zn, Al, Cr, Pb, Sn, Be) реагируют как с кислотами, так и с сильными основаниями с выделением газообразного H2.",
          "ar": "تتفاعل المعادن المذبذبة (Zn، Al، Cr، Pb، Sn، Be) مع كل من الأحماض والقواعد القوية لإطلاق غاز H2.",
          "zh": "两性金属（Zn、Al、Cr、Pb、Sn、Be）与酸和强碱反应释放氢气。",
          "ku": "Metalên amfoterîk (Zn, Al, Cr, Pb, Sn, Be) hem bi asîd û hem jî bi bazên xurt re reaksiyonê dikin û gaza H2 derdixin."
        },
        {
          "tr": "Asitler ele kayganlık hissi verir ve turnusolu maviye boyar.",
          "en": "Acids give the hand a slippery feeling and turn litmus blue.",
          "de": "Säuren verleihen der Hand ein rutschiges Gefühl und verfärben Lackmus blau.",
          "fr": "Les acides donnent à la main une sensation glissante et virent au bleu tournesol.",
          "ru": "Кислоты придают руке ощущение скользкости и окрашивают лакмус в синий цвет.",
          "ar": "تمنح الأحماض اليد ملمسًا زلقًا وتحوّل لون عباد الشمس إلى اللون الأزرق.",
          "zh": "酸使手有滑溜的感觉并使石蕊变成蓝色。",
          "ku": "Asîd hestek şilbûnê dide dest û lîmûsê şîn dibin."
        },
        {
          "tr": "Aktif metaller asitlerle SO2 zehirli gazı oluşturur.",
          "en": "Active metals form toxic gas SO2 with acids.",
          "de": "Aktive Metalle bilden mit Säuren das giftige Gas SO2.",
          "fr": "Les métaux actifs forment du gaz toxique SO2 avec les acides.",
          "ru": "Активные металлы образуют с кислотами токсичный газ SO2.",
          "ar": "تشكل المعادن النشطة غازًا سامًا SO2 مع الأحماض.",
          "zh": "活性金属与酸反应生成有毒气体SO2。",
          "ku": "Metalên çalak bi asîdên gaza jehrî SO2 çêdikin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Amfoter metaller (Zn, Al, Cr, Pb, Sn, Be) hem asitlerle hem de kuvvetli bazlarla tepkimeye girerek H2 gazı açığa çıkarır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Amphoteric metals (Zn, Al, Cr, Pb, Sn, Be) react with both acids and strong bases to release H2 gas.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Amphotere Metalle (Zn, Al, Cr, Pb, Sn, Be) reagieren sowohl mit Säuren als auch mit starken Basen unter Freisetzung von H2-Gas.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les métaux amphotères (Zn, Al, Cr, Pb, Sn, Be) réagissent avec les acides et les bases fortes pour libérer du gaz H2.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Амфотерные металлы (Zn, Al, Cr, Pb, Sn, Be) реагируют как с кислотами, так и с сильными основаниями с выделением газообразного H2.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تتفاعل المعادن المذبذبة (Zn، Al، Cr، Pb، Sn، Be) مع كل من الأحماض والقواعد القوية لإطلاق غاز H2.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“两性金属（Zn、Al、Cr、Pb、Sn、Be）与酸和强碱反应释放氢气。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Metalên amfoterîk (Zn, Al, Cr, Pb, Sn, Be) hem bi asîd û hem jî bi bazên xurt re reaksiyonê dikin û gaza H2 derdixin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u09-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Asitler, Bazlar ve Tuzlar konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Acids, Bases & Salts, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Säuren, Basen & Salze die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Acides, Bases & Sels, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Кислоты, основания и соли», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الأحماض والقواعد والأملاح\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“酸、碱和盐”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Asîd, Baz û Xwê\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "NH4Cl sulu çözeltisi baziktir.",
          "en": "NH4Cl aqueous solution is basic.",
          "de": "Die wässrige NH4Cl-Lösung ist basisch.",
          "fr": "La solution aqueuse de NH4Cl est basique.",
          "ru": "Водный раствор NH4Cl является основным.",
          "ar": "NH4Cl محلول مائي أساسي.",
          "zh": "NH4Cl水溶液呈碱性。",
          "ku": "Çareseriya avê ya NH4Cl bingehîn e."
        },
        {
          "tr": "Tuzlar kovalent moleküllerden oluşur.",
          "en": "Salts consist of covalent molecules.",
          "de": "Salze bestehen aus kovalenten Molekülen.",
          "fr": "Les sels sont constitués de molécules covalentes.",
          "ru": "Соли состоят из ковалентных молекул.",
          "ar": "تتكون الأملاح من جزيئات تساهمية.",
          "zh": "盐由共价分子组成。",
          "ku": "Xwê ji molekulên kovalent pêk tên."
        },
        {
          "tr": "Bazlar sulu çözeltilerinde elektrik akımını iletmez.",
          "en": "Bases do not conduct electric current in aqueous solutions.",
          "de": "Basen leiten in wässrigen Lösungen keinen elektrischen Strom.",
          "fr": "Les bases ne conduisent pas le courant électrique dans les solutions aqueuses.",
          "ru": "Основания не проводят электрический ток в водных растворах.",
          "ar": "القواعد لا توصل التيار الكهربائي في المحاليل المائية.",
          "zh": "碱在水溶液中不导电。",
          "ku": "Bingeh di çareseriyên avî de herikîna elektrîkê nagirin."
        },
        {
          "tr": "Karbonatlı bileşikler (CaCO3, NaHCO3) asitlerle tepkimeye girdiğinde CO2 gazı açığa çıkarır.",
          "en": "When carbonated compounds (CaCO3, NaHCO3) react with acids, they release CO2 gas.",
          "de": "Wenn karbonisierte Verbindungen (CaCO3, NaHCO3) mit Säuren reagieren, setzen sie CO2-Gas frei.",
          "fr": "Lorsque les composés carbonatés (CaCO3, NaHCO3) réagissent avec des acides, ils libèrent du CO2 gazeux.",
          "ru": "Когда карбонизированные соединения (CaCO3, NaHCO3) реагируют с кислотами, они выделяют газ CO2.",
          "ar": "عندما تتفاعل المركبات الغازية (CaCO3، NaHCO3) مع الأحماض، فإنها تطلق غاز ثاني أكسيد الكربون.",
          "zh": "当碳酸化合物（CaCO3、NaHCO3）与酸反应时，会释放 CO2 气体。",
          "ku": "Dema pêkhateyên karbonatkirî (CaCO3, NaHCO3) bi asîdan re bertek nîşan didin, gaza CO2 derdixin."
        },
        {
          "tr": "Bakır metali HCl çözeltisine atıldığında bolca H2 gazı çıkarır.",
          "en": "When copper metal is thrown into HCl solution, it emits abundant H2 gas.",
          "de": "Wenn Kupfermetall in eine HCl-Lösung geworfen wird, gibt es reichlich H2-Gas ab.",
          "fr": "Lorsque le cuivre métallique est jeté dans une solution de HCl, il émet une quantité abondante de gaz H2.",
          "ru": "Когда металлическую медь бросают в раствор HCl, она выделяет обильное количество газа H2.",
          "ar": "عندما يتم إلقاء معدن النحاس في محلول حمض الهيدروكلوريك (HCl)، فإنه ينبعث منه غاز H2 بكثرة.",
          "zh": "当金属铜投入HCl溶液中时，放出大量的H2气体。",
          "ku": "Dema ku metala sifir di nav çareseriya HCl de tê avêtin, ew gaza H2 ya zêde derdixe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Karbonatlı bileşikler (CaCO3, NaHCO3) asitlerle tepkimeye girdiğinde CO2 gazı açığa çıkarır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"When carbonated compounds (CaCO3, NaHCO3) react with acids, they release CO2 gas.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn karbonisierte Verbindungen (CaCO3, NaHCO3) mit Säuren reagieren, setzen sie CO2-Gas frei.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Lorsque les composés carbonatés (CaCO3, NaHCO3) réagissent avec des acides, ils libèrent du CO2 gazeux.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Когда карбонизированные соединения (CaCO3, NaHCO3) реагируют с кислотами, они выделяют газ CO2.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عندما تتفاعل المركبات الغازية (CaCO3، NaHCO3) مع الأحماض، فإنها تطلق غاز ثاني أكسيد الكربون.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“当碳酸化合物（CaCO3、NaHCO3）与酸反应时，会释放 CO2 气体。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Dema pêkhateyên karbonatkirî (CaCO3, NaHCO3) bi asîdan re bertek nîşan didin, gaza CO2 derdixin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u09-twin10",
      "stem": {
        "tr": "Kimya dersinde Asitler, Bazlar ve Tuzlar ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Acids, Bases & Salts, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Säuren, Basen & Salze: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Acides, Bases & Sels, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Кислоты, основания и соли», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الأحماض والقواعد والأملاح\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“酸、碱和盐”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Asîd, Baz û Xwê\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "CH3COONa tuzu asidiktir.",
          "en": "CH3COONa salt is acidic.",
          "de": "CH3COONa-Salz ist sauer.",
          "fr": "Le sel CH3COONa est acide.",
          "ru": "Соль CH3COONa кислая.",
          "ar": "ملح CH3COONa حمضي.",
          "zh": "CH3COONa盐呈酸性。",
          "ku": "Xwêya CH3COONa asîdî ye."
        },
        {
          "tr": "Yemek sodası NaOH bileşiğidir.",
          "en": "Baking soda is a NaOH compound.",
          "de": "Backpulver ist eine NaOH-Verbindung.",
          "fr": "Le bicarbonate de soude est un composé NaOH.",
          "ru": "Пищевая сода представляет собой соединение NaOH.",
          "ar": "صودا الخبز عبارة عن مركب NaOH.",
          "zh": "小苏打是一种 NaOH 化合物。",
          "ku": "Soda şîrîn pêkhateyek NaOH e."
        },
        {
          "tr": "25 °C'de pH değeri 8 olan bir çözelti asidiktir.",
          "en": "A solution with a pH of 8 at 25 °C is acidic.",
          "de": "Eine Lösung mit einem pH-Wert von 8 bei 25 °C ist sauer.",
          "fr": "Une solution avec un pH de 8 à 25 °C est acide.",
          "ru": "Раствор с pH 8 при 25 °C является кислым.",
          "ar": "المحلول ذو الرقم الهيدروجيني 8 عند 25 درجة مئوية يكون حمضيًا.",
          "zh": "25°C 时 pH 值为 8 的溶液呈酸性。",
          "ku": "Çareseriya bi pH 8 di 25 °C de asîdî ye."
        },
        {
          "tr": "Bakır HNO3 ile tepkime verdiğinde H2 gazı üretir.",
          "en": "When copper reacts with HNO3, it produces H2 gas.",
          "de": "Wenn Kupfer mit HNO3 reagiert, entsteht H2-Gas.",
          "fr": "Lorsque le cuivre réagit avec le HNO3, il produit du gaz H2.",
          "ru": "Когда медь реагирует с HNO3, образуется газ H2.",
          "ar": "عندما يتفاعل النحاس مع HNO3، فإنه ينتج غاز H2.",
          "zh": "当铜与 HNO3 反应时，会产生 H2 气体。",
          "ku": "Dema ku sifir bi HNO3 re reaksiyonê dike, gaza H2 çêdike."
        },
        {
          "tr": "Çamaşır suyu (NaClO) ile tuz ruhu (HCl) karıştırılırsa ölümcül klor gazı (Cl2) açığa çıkar; ASLA karıştırılmamalıdır!",
          "en": "If bleach (NaClO) and hydrochloric acid (HCl) are mixed, deadly chlorine gas (Cl2) is released; It should NEVER be mixed!",
          "de": "Wenn Bleichmittel (NaClO) und Salzsäure (HCl) gemischt werden, wird tödliches Chlorgas (Cl2) freigesetzt; Es sollte NIEMALS gemischt werden!",
          "fr": "Si l'eau de Javel (NaClO) et l'acide chlorhydrique (HCl) sont mélangés, du chlore gazeux mortel (Cl2) est libéré ; Il ne faut JAMAIS le mélanger !",
          "ru": "Если смешать отбеливатель (NaClO) и соляную кислоту (HCl), выделяется смертельный газообразный хлор (Cl2); НИКОГДА нельзя смешивать!",
          "ar": "إذا تم خلط المبيض (NaClO) وحمض الهيدروكلوريك (HCl)، يتم إطلاق غاز الكلور القاتل (Cl2)؛ لا ينبغي أبدا أن تكون مختلطة!",
          "zh": "如果漂白剂（NaClO）和盐酸（HCl）混合，会释放出致命的氯气（Cl2）；绝对不应该混合！",
          "ku": "Ger spîçol (NaClO) û asîda hîdrochlorîk (HCl) tevlîhev bibin, gaza klorê ya kujer (Cl2) derdikeve; Divê ew TU carî neyê tevlihev kirin!"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Çamaşır suyu (NaClO) ile tuz ruhu (HCl) karıştırılırsa ölümcül klor gazı (Cl2) açığa çıkar; ASLA karıştırılmamalıdır!\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If bleach (NaClO) and hydrochloric acid (HCl) are mixed, deadly chlorine gas (Cl2) is released; It should NEVER be mixed!\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn Bleichmittel (NaClO) und Salzsäure (HCl) gemischt werden, wird tödliches Chlorgas (Cl2) freigesetzt; Es sollte NIEMALS gemischt werden!\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si l'eau de Javel (NaClO) et l'acide chlorhydrique (HCl) sont mélangés, du chlore gazeux mortel (Cl2) est libéré ; Il ne faut JAMAIS le mélanger !\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если смешать отбеливатель (NaClO) и соляную кислоту (HCl), выделяется смертельный газообразный хлор (Cl2); НИКОГДА нельзя смешивать!». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا تم خلط المبيض (NaClO) وحمض الهيدروكلوريك (HCl)، يتم إطلاق غاز الكلور القاتل (Cl2)؛ لا ينبغي أبدا أن تكون مختلطة!\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果漂白剂（NaClO）和盐酸（HCl）混合，会释放出致命的氯气（Cl2）；绝对不应该混合！”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger spîçol (NaClO) û asîda hîdrochlorîk (HCl) tevlîhev bibin, gaza klorê ya kujer (Cl2) derdikeve; Divê ew TU carî neyê tevlihev kirin!\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u09-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Asitler, Bazlar ve Tuzlar konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Acids, Bases & Salts?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Säuren, Basen & Salze zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Acides, Bases & Sels ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Кислоты, основания и соли»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الأحماض والقواعد والأملاح\"؟",
        "zh": "根据“酸、碱和盐”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Asîd, Baz û Xwê\" de rast e?"
      },
      "options": [
        {
          "tr": "Kuvvetli asit ve kuvvetli baz nötralleşmesinde oluşan tuz nötrdür (örn. NaCl).",
          "en": "The salt formed in the neutralization of a strong acid and a strong base is neutral (e.g. NaCl).",
          "de": "Das bei der Neutralisation einer starken Säure und einer starken Base entstehende Salz ist neutral (z. B. NaCl).",
          "fr": "Le sel formé lors de la neutralisation d’un acide fort et d’une base forte est neutre (par exemple NaCl).",
          "ru": "Соль, образующаяся при нейтрализации сильной кислоты и сильного основания, нейтральна (например, NaCl).",
          "ar": "الملح الناتج عن معادلة حمض قوي وقاعدة قوية يكون متعادلًا (مثل NaCl).",
          "zh": "强酸和强碱中和形成的盐是中性的（例如氯化钠）。",
          "ku": "Xwêya ku di bêbandorkirina asîdeke xurt û bingeheke xurt de çêdibe bêalî ye (mînak NaCl)."
        },
        {
          "tr": "Lavabo açıcı olarak seyreltik sirke asidi kullanılır.",
          "en": "Dilute vinegar acid is used as a sink opener.",
          "de": "Als Spülbeckenöffner wird verdünnte Essigsäure verwendet.",
          "fr": "L’acide vinaigre dilué est utilisé comme ouvre-évier.",
          "ru": "Разбавленная уксусная кислота используется как средство для открывания раковины.",
          "ar": "يستخدم حمض الخل المخفف كفتاحة الحوض.",
          "zh": "稀醋酸用作水槽开启剂。",
          "ku": "Asîda sîrkeyê ya tenik wekî vekirina lavaboyê tê bikar anîn."
        },
        {
          "tr": "Asitler ele kayganlık hissi verir ve turnusolu maviye boyar.",
          "en": "Acids give the hand a slippery feeling and turn litmus blue.",
          "de": "Säuren verleihen der Hand ein rutschiges Gefühl und verfärben Lackmus blau.",
          "fr": "Les acides donnent à la main une sensation glissante et virent au bleu tournesol.",
          "ru": "Кислоты придают руке ощущение скользкости и окрашивают лакмус в синий цвет.",
          "ar": "تمنح الأحماض اليد ملمسًا زلقًا وتحوّل لون عباد الشمس إلى اللون الأزرق.",
          "zh": "酸使手有滑溜的感觉并使石蕊变成蓝色。",
          "ku": "Asîd hestek şilbûnê dide dest û lîmûsê şîn dibin."
        },
        {
          "tr": "Aktif metaller asitlerle SO2 zehirli gazı oluşturur.",
          "en": "Active metals form toxic gas SO2 with acids.",
          "de": "Aktive Metalle bilden mit Säuren das giftige Gas SO2.",
          "fr": "Les métaux actifs forment du gaz toxique SO2 avec les acides.",
          "ru": "Активные металлы образуют с кислотами токсичный газ SO2.",
          "ar": "تشكل المعادن النشطة غازًا سامًا SO2 مع الأحماض.",
          "zh": "活性金属与酸反应生成有毒气体SO2。",
          "ku": "Metalên çalak bi asîdên gaza jehrî SO2 çêdikin."
        },
        {
          "tr": "Altın derişik sülfürik asitte hızla çözünerek H2 gazı çıkarır.",
          "en": "Gold dissolves rapidly in concentrated sulfuric acid, releasing H2 gas.",
          "de": "Gold löst sich in konzentrierter Schwefelsäure schnell auf und setzt H2-Gas frei.",
          "fr": "L'or se dissout rapidement dans l'acide sulfurique concentré, libérant du gaz H2.",
          "ru": "Золото быстро растворяется в концентрированной серной кислоте с выделением газообразного H2.",
          "ar": "يذوب الذهب بسرعة في حمض الكبريتيك المركز، ويطلق غاز H2.",
          "zh": "金在浓硫酸中迅速溶解，释放出氢气。",
          "ku": "Zêr di asîda sulfurîk a konsantrekirî de zû dihele û gaza H2 derdixe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Kuvvetli asit ve kuvvetli baz nötralleşmesinde oluşan tuz nötrdür (örn. NaCl).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The salt formed in the neutralization of a strong acid and a strong base is neutral (e.g. NaCl).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Das bei der Neutralisation einer starken Säure und einer starken Base entstehende Salz ist neutral (z. B. NaCl).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le sel formé lors de la neutralisation d’un acide fort et d’une base forte est neutre (par exemple NaCl).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Соль, образующаяся при нейтрализации сильной кислоты и сильного основания, нейтральна (например, NaCl).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الملح الناتج عن معادلة حمض قوي وقاعدة قوية يكون متعادلًا (مثل NaCl).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“强酸和强碱中和形成的盐是中性的（例如氯化钠）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Xwêya ku di bêbandorkirina asîdeke xurt û bingeheke xurt de çêdibe bêalî ye (mînak NaCl).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u09-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Asitler, Bazlar ve Tuzlar sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Acids, Bases & Salts, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Säuren, Basen & Salze: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Acides, Bases & Sels, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Кислоты, основания и соли», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الأحماض والقواعد والأملاح\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“酸、碱和盐”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Asîd, Baz û Xwê\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Tuzlar kovalent moleküllerden oluşur.",
          "en": "Salts consist of covalent molecules.",
          "de": "Salze bestehen aus kovalenten Molekülen.",
          "fr": "Les sels sont constitués de molécules covalentes.",
          "ru": "Соли состоят из ковалентных молекул.",
          "ar": "تتكون الأملاح من جزيئات تساهمية.",
          "zh": "盐由共价分子组成。",
          "ku": "Xwê ji molekulên kovalent pêk tên."
        },
        {
          "tr": "Kuvvetli asit ile zayıf bazdan oluşan tuz asidiktir (örn. NH4Cl); sulu çözeltisinin pH ı 7 den küçüktür.",
          "en": "A salt consisting of a strong acid and a weak base is acidic (e.g. NH4Cl); The pH of its aqueous solution is less than 7.",
          "de": "Ein Salz, das aus einer starken Säure und einer schwachen Base besteht, ist sauer (z. B. NH4Cl); Der pH-Wert seiner wässrigen Lösung liegt unter 7.",
          "fr": "Un sel constitué d'un acide fort et d'une base faible est acide (par exemple NH4Cl) ; Le pH de sa solution aqueuse est inférieur à 7.",
          "ru": "Соль, состоящая из сильной кислоты и слабого основания, является кислой (например, NH4Cl); pH его водного раствора менее 7.",
          "ar": "الملح الذي يتكون من حمض قوي وقاعدة ضعيفة يكون حامضيًا (مثل NH4Cl)؛ الرقم الهيدروجيني لمحلوله المائي أقل من 7.",
          "zh": "由强酸和弱碱组成的盐呈酸性（如NH4Cl）；其水溶液的pH值小于7。",
          "ku": "Xwêya ku ji asîdeke xurt û bazeke qels pêk tê asîdî ye (mînak NH4Cl); PH ya çareseriya wê ya avî ji 7 kêmtir e."
        },
        {
          "tr": "Bazlar sulu çözeltilerinde elektrik akımını iletmez.",
          "en": "Bases do not conduct electric current in aqueous solutions.",
          "de": "Basen leiten in wässrigen Lösungen keinen elektrischen Strom.",
          "fr": "Les bases ne conduisent pas le courant électrique dans les solutions aqueuses.",
          "ru": "Основания не проводят электрический ток в водных растворах.",
          "ar": "القواعد لا توصل التيار الكهربائي في المحاليل المائية.",
          "zh": "碱在水溶液中不导电。",
          "ku": "Bingeh di çareseriyên avî de herikîna elektrîkê nagirin."
        },
        {
          "tr": "Bakır metali HCl çözeltisine atıldığında bolca H2 gazı çıkarır.",
          "en": "When copper metal is thrown into HCl solution, it emits abundant H2 gas.",
          "de": "Wenn Kupfermetall in eine HCl-Lösung geworfen wird, gibt es reichlich H2-Gas ab.",
          "fr": "Lorsque le cuivre métallique est jeté dans une solution de HCl, il émet une quantité abondante de gaz H2.",
          "ru": "Когда металлическую медь бросают в раствор HCl, она выделяет обильное количество газа H2.",
          "ar": "عندما يتم إلقاء معدن النحاس في محلول حمض الهيدروكلوريك (HCl)، فإنه ينبعث منه غاز H2 بكثرة.",
          "zh": "当金属铜投入HCl溶液中时，放出大量的H2气体。",
          "ku": "Dema ku metala sifir di nav çareseriya HCl de tê avêtin, ew gaza H2 ya zêde derdixe."
        },
        {
          "tr": "Alüminyum bazlarla tepkime vermez, sadece asitlerle tepkimeye girer.",
          "en": "Aluminum does not react with bases, only acids.",
          "de": "Aluminium reagiert nicht mit Basen, sondern nur mit Säuren.",
          "fr": "L'aluminium ne réagit pas avec les bases, seulement avec les acides.",
          "ru": "Алюминий не реагирует с основаниями, только с кислотами.",
          "ar": "الألومنيوم لا يتفاعل مع القواعد، ولكن مع الأحماض فقط.",
          "zh": "铝不与碱发生反应，只与酸发生反应。",
          "ku": "Aluminium bi bazdan re nagire, tenê bi asîdan re reaksiyonê dike."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Kuvvetli asit ile zayıf bazdan oluşan tuz asidiktir (örn. NH4Cl); sulu çözeltisinin pH ı 7 den küçüktür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"A salt consisting of a strong acid and a weak base is acidic (e.g. NH4Cl); The pH of its aqueous solution is less than 7.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Ein Salz, das aus einer starken Säure und einer schwachen Base besteht, ist sauer (z. B. NH4Cl); Der pH-Wert seiner wässrigen Lösung liegt unter 7.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Un sel constitué d'un acide fort et d'une base faible est acide (par exemple NH4Cl) ; Le pH de sa solution aqueuse est inférieur à 7.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Соль, состоящая из сильной кислоты и слабого основания, является кислой (например, NH4Cl); pH его водного раствора менее 7.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الملح الذي يتكون من حمض قوي وقاعدة ضعيفة يكون حامضيًا (مثل NH4Cl)؛ الرقم الهيدروجيني لمحلوله المائي أقل من 7.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“由强酸和弱碱组成的盐呈酸性（如NH4Cl）；其水溶液的pH值小于7。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Xwêya ku ji asîdeke xurt û bazeke qels pêk tê asîdî ye (mînak NH4Cl); PH ya çareseriya wê ya avî ji 7 kêmtir e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u09-twin13",
      "stem": {
        "tr": "Aşağıda Asitler, Bazlar ve Tuzlar ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Acids, Bases & Salts, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Säuren, Basen & Salze: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Acides, Bases & Sels, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Кислоты, основания и соли», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الأحماض والقواعد والأملاح\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“酸、碱和盐”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Asîd, Baz û Xwê\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Yemek sodası NaOH bileşiğidir.",
          "en": "Baking soda is a NaOH compound.",
          "de": "Backpulver ist eine NaOH-Verbindung.",
          "fr": "Le bicarbonate de soude est un composé NaOH.",
          "ru": "Пищевая сода представляет собой соединение NaOH.",
          "ar": "صودا الخبز عبارة عن مركب NaOH.",
          "zh": "小苏打是一种 NaOH 化合物。",
          "ku": "Soda şîrîn pêkhateyek NaOH e."
        },
        {
          "tr": "25 °C'de pH değeri 8 olan bir çözelti asidiktir.",
          "en": "A solution with a pH of 8 at 25 °C is acidic.",
          "de": "Eine Lösung mit einem pH-Wert von 8 bei 25 °C ist sauer.",
          "fr": "Une solution avec un pH de 8 à 25 °C est acide.",
          "ru": "Раствор с pH 8 при 25 °C является кислым.",
          "ar": "المحلول ذو الرقم الهيدروجيني 8 عند 25 درجة مئوية يكون حمضيًا.",
          "zh": "25°C 时 pH 值为 8 的溶液呈酸性。",
          "ku": "Çareseriya bi pH 8 di 25 °C de asîdî ye."
        },
        {
          "tr": "Zayıf asit ile kuvvetli bazdan oluşan tuz baziktir (örn. CH3COONa); sulu çözeltisinin pH ı 7 den büyüktür.",
          "en": "A salt consisting of a weak acid and a strong base is basic (e.g. CH3COONa); The pH of its aqueous solution is greater than 7.",
          "de": "Ein Salz, das aus einer schwachen Säure und einer starken Base besteht, ist basisch (z. B. CH3COONa); Der pH-Wert seiner wässrigen Lösung liegt über 7.",
          "fr": "Un sel constitué d'un acide faible et d'une base forte est basique (par exemple CH3COONa) ; Le pH de sa solution aqueuse est supérieur à 7.",
          "ru": "Соль, состоящая из слабой кислоты и сильного основания, является основной (например, CH3COONa); pH его водного раствора больше 7.",
          "ar": "الملح الذي يتكون من حمض ضعيف وقاعدة قوية هو ملح قاعدي (مثل CH3COONa)؛ الرقم الهيدروجيني لمحلوله المائي أكبر من 7.",
          "zh": "由弱酸和强碱组成的盐是碱性的（例如CH3COONa）；其水溶液的pH值大于7。",
          "ku": "Xwêya ku ji asîdeke qels û bazeke xurt pêk tê bingehîn e (mînak CH3COONa); PH ya çareseriya wê ya avî ji 7 mezintir e."
        },
        {
          "tr": "Bakır HNO3 ile tepkime verdiğinde H2 gazı üretir.",
          "en": "When copper reacts with HNO3, it produces H2 gas.",
          "de": "Wenn Kupfer mit HNO3 reagiert, entsteht H2-Gas.",
          "fr": "Lorsque le cuivre réagit avec le HNO3, il produit du gaz H2.",
          "ru": "Когда медь реагирует с HNO3, образуется газ H2.",
          "ar": "عندما يتفاعل النحاس مع HNO3، فإنه ينتج غاز H2.",
          "zh": "当铜与 HNO3 反应时，会产生 H2 气体。",
          "ku": "Dema ku sifir bi HNO3 re reaksiyonê dike, gaza H2 çêdike."
        },
        {
          "tr": "Kireç taşı üzerine asit döküldüğünde O2 gazı fışkırır.",
          "en": "When acid is poured on limestone, O2 gas gushes out.",
          "de": "Wenn Säure auf Kalkstein gegossen wird, strömt O2-Gas aus.",
          "fr": "Lorsque de l’acide est versé sur du calcaire, du gaz O2 jaillit.",
          "ru": "Когда кислоту выливают на известняк, выделяется газ O2.",
          "ar": "عند صب حمض على الحجر الجيري، يتدفق غاز O2.",
          "zh": "当酸倒在石灰石上时，O2气体就会喷出。",
          "ku": "Dema ku asîd li ser kevirê kilsinî tê rijandin, gaza O2 derdikeve."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Zayıf asit ile kuvvetli bazdan oluşan tuz baziktir (örn. CH3COONa); sulu çözeltisinin pH ı 7 den büyüktür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"A salt consisting of a weak acid and a strong base is basic (e.g. CH3COONa); The pH of its aqueous solution is greater than 7.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Ein Salz, das aus einer schwachen Säure und einer starken Base besteht, ist basisch (z. B. CH3COONa); Der pH-Wert seiner wässrigen Lösung liegt über 7.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Un sel constitué d'un acide faible et d'une base forte est basique (par exemple CH3COONa) ; Le pH de sa solution aqueuse est supérieur à 7.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Соль, состоящая из слабой кислоты и сильного основания, является основной (например, CH3COONa); pH его водного раствора больше 7.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الملح الذي يتكون من حمض ضعيف وقاعدة قوية هو ملح قاعدي (مثل CH3COONa)؛ الرقم الهيدروجيني لمحلوله المائي أكبر من 7.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“由弱酸和强碱组成的盐是碱性的（例如CH3COONa）；其水溶液的pH值大于7。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Xwêya ku ji asîdeke qels û bazeke xurt pêk tê bingehîn e (mînak CH3COONa); PH ya çareseriya wê ya avî ji 7 mezintir e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u09-twin14",
      "stem": {
        "tr": "Asitler, Bazlar ve Tuzlar konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Acids, Bases & Salts, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Säuren, Basen & Salze: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Acides, Bases & Sels, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Кислоты, основания и соли», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الأحماض والقواعد والأملاح\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“酸、碱和盐”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Asîd, Baz û Xwê\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Asitler ele kayganlık hissi verir ve turnusolu maviye boyar.",
          "en": "Acids give the hand a slippery feeling and turn litmus blue.",
          "de": "Säuren verleihen der Hand ein rutschiges Gefühl und verfärben Lackmus blau.",
          "fr": "Les acides donnent à la main une sensation glissante et virent au bleu tournesol.",
          "ru": "Кислоты придают руке ощущение скользкости и окрашивают лакмус в синий цвет.",
          "ar": "تمنح الأحماض اليد ملمسًا زلقًا وتحوّل لون عباد الشمس إلى اللون الأزرق.",
          "zh": "酸使手有滑溜的感觉并使石蕊变成蓝色。",
          "ku": "Asîd hestek şilbûnê dide dest û lîmûsê şîn dibin."
        },
        {
          "tr": "Aktif metaller asitlerle SO2 zehirli gazı oluşturur.",
          "en": "Active metals form toxic gas SO2 with acids.",
          "de": "Aktive Metalle bilden mit Säuren das giftige Gas SO2.",
          "fr": "Les métaux actifs forment du gaz toxique SO2 avec les acides.",
          "ru": "Активные металлы образуют с кислотами токсичный газ SO2.",
          "ar": "تشكل المعادن النشطة غازًا سامًا SO2 مع الأحماض.",
          "zh": "活性金属与酸反应生成有毒气体SO2。",
          "ku": "Metalên çalak bi asîdên gaza jehrî SO2 çêdikin."
        },
        {
          "tr": "Altın derişik sülfürik asitte hızla çözünerek H2 gazı çıkarır.",
          "en": "Gold dissolves rapidly in concentrated sulfuric acid, releasing H2 gas.",
          "de": "Gold löst sich in konzentrierter Schwefelsäure schnell auf und setzt H2-Gas frei.",
          "fr": "L'or se dissout rapidement dans l'acide sulfurique concentré, libérant du gaz H2.",
          "ru": "Золото быстро растворяется в концентрированной серной кислоте с выделением газообразного H2.",
          "ar": "يذوب الذهب بسرعة في حمض الكبريتيك المركز، ويطلق غاز H2.",
          "zh": "金在浓硫酸中迅速溶解，释放出氢气。",
          "ku": "Zêr di asîda sulfurîk a konsantrekirî de zû dihele û gaza H2 derdixe."
        },
        {
          "tr": "Lavabo açıcı olarak NaOH ve KOH gibi kuvvetli bazlar yağ ve saçları hidroliz ettiği için kullanılır.",
          "en": "Strong bases such as NaOH and KOH are used as drain cleaners because they hydrolyze oil and hair.",
          "de": "Als Abflussreiniger werden starke Basen wie NaOH und KOH verwendet, da sie Öl und Haare hydrolysieren.",
          "fr": "Des bases fortes telles que NaOH et KOH sont utilisées comme nettoyants pour canalisations car elles hydrolysent l'huile et les cheveux.",
          "ru": "Сильные основания, такие как NaOH и KOH, используются в качестве очистителей канализации, поскольку они гидролизуют масло и волосы.",
          "ar": "تُستخدم القواعد القوية مثل NaOH وKOH كمنظفات للصرف لأنها تحلل الزيت والشعر.",
          "zh": "NaOH 和 KOH 等强碱可用作排水沟清洁剂，因为它们会水解油脂和头发。",
          "ku": "Bingehên bihêz ên wekî NaOH û KOH wekî paqijkerên dravê têne bikar anîn ji ber ku ew rûn û por hîdrolîz dikin."
        },
        {
          "tr": "Çamaşır suyu ve tuz ruhu karıştırıldığında temizleme gücü iki katına çıkar.",
          "en": "When bleach and spirit of salt (hydrochloric acid) are mixed, the cleaning power doubles.",
          "de": "Wenn Bleichmittel und Salzsäure gemischt werden, verdoppelt sich die Reinigungskraft.",
          "fr": "Lorsque l'eau de Javel et l'esprit de sel sont mélangés, le pouvoir nettoyant double.",
          "ru": "При смешивании отбеливателя и соляной кислоты чистящая способность удваивается.",
          "ar": "عندما يتم خلط المبيض وروح الملح، تتضاعف قوة التنظيف.",
          "zh": "当漂白水与盐酸混合时，清洁力加倍。",
          "ku": "Dema ku ava çilşoyê û ruhê xwê bên tevlihevkirin, hêza paqijkirinê du qat zêde dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Lavabo açıcı olarak NaOH ve KOH gibi kuvvetli bazlar yağ ve saçları hidroliz ettiği için kullanılır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Strong bases such as NaOH and KOH are used as drain cleaners because they hydrolyze oil and hair.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Als Abflussreiniger werden starke Basen wie NaOH und KOH verwendet, da sie Öl und Haare hydrolysieren.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Des bases fortes telles que NaOH et KOH sont utilisées comme nettoyants pour canalisations car elles hydrolysent l'huile et les cheveux.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Сильные основания, такие как NaOH и KOH, используются в качестве очистителей канализации, поскольку они гидролизуют масло и волосы.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تُستخدم القواعد القوية مثل NaOH وKOH كمنظفات للصرف لأنها تحلل الزيت والشعر.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“NaOH 和 KOH 等强碱可用作排水沟清洁剂，因为它们会水解油脂和头发。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Bingehên bihêz ên wekî NaOH û KOH wekî paqijkerên dravê têne bikar anîn ji ber ku ew rûn û por hîdrolîz dikin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u09-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Asitler, Bazlar ve Tuzlar ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Acids, Bases & Salts, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Säuren, Basen & Salze: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Acides, Bases & Sels, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Кислоты, основания и соли», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الأحماض والقواعد والأملاح\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“酸、碱和盐”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Asîd, Baz û Xwê\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Bazlar sulu çözeltilerinde elektrik akımını iletmez.",
          "en": "Bases do not conduct electric current in aqueous solutions.",
          "de": "Basen leiten in wässrigen Lösungen keinen elektrischen Strom.",
          "fr": "Les bases ne conduisent pas le courant électrique dans les solutions aqueuses.",
          "ru": "Основания не проводят электрический ток в водных растворах.",
          "ar": "القواعد لا توصل التيار الكهربائي في المحاليل المائية.",
          "zh": "碱在水溶液中不导电。",
          "ku": "Bingeh di çareseriyên avî de herikîna elektrîkê nagirin."
        },
        {
          "tr": "Bakır metali HCl çözeltisine atıldığında bolca H2 gazı çıkarır.",
          "en": "When copper metal is thrown into HCl solution, it emits abundant H2 gas.",
          "de": "Wenn Kupfermetall in eine HCl-Lösung geworfen wird, gibt es reichlich H2-Gas ab.",
          "fr": "Lorsque le cuivre métallique est jeté dans une solution de HCl, il émet une quantité abondante de gaz H2.",
          "ru": "Когда металлическую медь бросают в раствор HCl, она выделяет обильное количество газа H2.",
          "ar": "عندما يتم إلقاء معدن النحاس في محلول حمض الهيدروكلوريك (HCl)، فإنه ينبعث منه غاز H2 بكثرة.",
          "zh": "当金属铜投入HCl溶液中时，放出大量的H2气体。",
          "ku": "Dema ku metala sifir di nav çareseriya HCl de tê avêtin, ew gaza H2 ya zêde derdixe."
        },
        {
          "tr": "Alüminyum bazlarla tepkime vermez, sadece asitlerle tepkimeye girer.",
          "en": "Aluminum does not react with bases, only acids.",
          "de": "Aluminium reagiert nicht mit Basen, sondern nur mit Säuren.",
          "fr": "L'aluminium ne réagit pas avec les bases, seulement avec les acides.",
          "ru": "Алюминий не реагирует с основаниями, только с кислотами.",
          "ar": "الألومنيوم لا يتفاعل مع القواعد، ولكن مع الأحماض فقط.",
          "zh": "铝不与碱发生反应，只与酸发生反应。",
          "ku": "Aluminium bi bazdan re nagire, tenê bi asîdan re reaksiyonê dike."
        },
        {
          "tr": "HCl ile NaOH nötralleştiğinde asidik tuz meydana gelir.",
          "en": "When HCl and NaOH are neutralized, an acidic salt is formed.",
          "de": "Wenn HCl und NaOH neutralisiert werden, entsteht ein saures Salz.",
          "fr": "Lorsque HCl et NaOH sont neutralisés, un sel acide se forme.",
          "ru": "При нейтрализации HCl и NaOH образуется кислая соль.",
          "ar": "عندما يتم تحييد حمض الهيدروكلوريك وهيدروكسيد الصوديوم، يتم تشكيل الملح الحمضي.",
          "zh": "当HCl和NaOH被中和时，形成酸性盐。",
          "ku": "Dema ku HCl û NaOH bêbandor dibin, xwêya asîdî çê dibe."
        },
        {
          "tr": "Tuzlar iyonik yapılı kristal katılardır, katı halde iletmez, sıvı ve çözeltide iletir.",
          "en": "Salts are crystalline solids with an ionic structure. They do not conduct in solid form, but conduct in liquid and solution.",
          "de": "Salze sind kristalline Feststoffe mit ionischer Struktur. Sie leiten nicht in fester Form, sondern in Flüssigkeit und Lösung.",
          "fr": "Les sels sont des solides cristallins à structure ionique. Ils ne conduisent pas sous forme solide, mais conduisent en liquide et en solution.",
          "ru": "Соли представляют собой кристаллические вещества с ионной структурой. Они не проводят ток в твердой форме, но проводят в жидкости и растворе.",
          "ar": "الأملاح هي مواد صلبة بلورية ذات بنية أيونية. وهي لا توصل في الحالة الصلبة، ولكنها توصل في السائل والمحلول.",
          "zh": "盐是具有离子结构的结晶固体。它们不以固体形式导电，但以液体和溶液形式导电。",
          "ku": "Xwê madeyên krîstalî yên bi avahiyeke îyonî ne. Ew ne di forma hişk de, lê di şikil û çareseriyê de digerin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Tuzlar iyonik yapılı kristal katılardır, katı halde iletmez, sıvı ve çözeltide iletir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Salts are crystalline solids with an ionic structure. They do not conduct in solid form, but conduct in liquid and solution.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Salze sind kristalline Feststoffe mit ionischer Struktur. Sie leiten nicht in fester Form, sondern in Flüssigkeit und Lösung.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les sels sont des solides cristallins à structure ionique. Ils ne conduisent pas sous forme solide, mais conduisent en liquide et en solution.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Соли представляют собой кристаллические вещества с ионной структурой. Они не проводят ток в твердой форме, но проводят в жидкости и растворе.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الأملاح هي مواد صلبة بلورية ذات بنية أيونية. وهي لا توصل في الحالة الصلبة، ولكنها توصل في السائل والمحلول.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“盐是具有离子结构的结晶固体。它们不以固体形式导电，但以液体和溶液形式导电。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Xwê madeyên krîstalî yên bi avahiyeke îyonî ne. Ew ne di forma hişk de, lê di şikil û çareseriyê de digerin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u09-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Asitler, Bazlar ve Tuzlar konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Acids, Bases & Salts, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Säuren, Basen & Salze die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Acides, Bases & Sels, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Кислоты, основания и соли», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الأحماض والقواعد والأملاح\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“酸、碱和盐”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Asîd, Baz û Xwê\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Yemek sodası NaHCO3 (sodyum bikarbonat), çamaşır sodası Na2CO3 (sodyum karbonat) dır.",
          "en": "Baking soda is NaHCO3 (sodium bicarbonate), washing soda is Na2CO3 (sodium carbonate).",
          "de": "Backpulver ist NaHCO3 (Natriumbikarbonat), Waschsoda ist Na2CO3 (Natriumkarbonat).",
          "fr": "Le bicarbonate de soude est du NaHCO3 (bicarbonate de sodium), la lessive de soude est du Na2CO3 (carbonate de sodium).",
          "ru": "Пищевая сода — это NaHCO3 (бикарбонат натрия), стиральная сода — Na2CO3 (карбонат натрия).",
          "ar": "صودا الخبز هي NaHCO3 (بيكربونات الصوديوم)، وصودا الغسيل هي Na2CO3 (كربونات الصوديوم).",
          "zh": "小苏打是NaHCO3（碳酸氢钠），洗苏打是Na2CO3（碳酸钠）。",
          "ku": "Soda şuştinê NaHCO3 (bikarbonat sodyûm), soda şuştinê Na2CO3 (karbonat sodyûm) e."
        },
        {
          "tr": "25 °C'de pH değeri 8 olan bir çözelti asidiktir.",
          "en": "A solution with a pH of 8 at 25 °C is acidic.",
          "de": "Eine Lösung mit einem pH-Wert von 8 bei 25 °C ist sauer.",
          "fr": "Une solution avec un pH de 8 à 25 °C est acide.",
          "ru": "Раствор с pH 8 при 25 °C является кислым.",
          "ar": "المحلول ذو الرقم الهيدروجيني 8 عند 25 درجة مئوية يكون حمضيًا.",
          "zh": "25°C 时 pH 值为 8 的溶液呈酸性。",
          "ku": "Çareseriya bi pH 8 di 25 °C de asîdî ye."
        },
        {
          "tr": "Bakır HNO3 ile tepkime verdiğinde H2 gazı üretir.",
          "en": "When copper reacts with HNO3, it produces H2 gas.",
          "de": "Wenn Kupfer mit HNO3 reagiert, entsteht H2-Gas.",
          "fr": "Lorsque le cuivre réagit avec le HNO3, il produit du gaz H2.",
          "ru": "Когда медь реагирует с HNO3, образуется газ H2.",
          "ar": "عندما يتفاعل النحاس مع HNO3، فإنه ينتج غاز H2.",
          "zh": "当铜与 HNO3 反应时，会产生 H2 气体。",
          "ku": "Dema ku sifir bi HNO3 re reaksiyonê dike, gaza H2 çêdike."
        },
        {
          "tr": "Kireç taşı üzerine asit döküldüğünde O2 gazı fışkırır.",
          "en": "When acid is poured on limestone, O2 gas gushes out.",
          "de": "Wenn Säure auf Kalkstein gegossen wird, strömt O2-Gas aus.",
          "fr": "Lorsque de l’acide est versé sur du calcaire, du gaz O2 jaillit.",
          "ru": "Когда кислоту выливают на известняк, выделяется газ O2.",
          "ar": "عند صب حمض على الحجر الجيري، يتدفق غاز O2.",
          "zh": "当酸倒在石灰石上时，O2气体就会喷出。",
          "ku": "Dema ku asîd li ser kevirê kilsinî tê rijandin, gaza O2 derdikeve."
        },
        {
          "tr": "NH4Cl sulu çözeltisi baziktir.",
          "en": "NH4Cl aqueous solution is basic.",
          "de": "Die wässrige NH4Cl-Lösung ist basisch.",
          "fr": "La solution aqueuse de NH4Cl est basique.",
          "ru": "Водный раствор NH4Cl является основным.",
          "ar": "NH4Cl محلول مائي أساسي.",
          "zh": "NH4Cl水溶液呈碱性。",
          "ku": "Çareseriya avê ya NH4Cl bingehîn e."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Yemek sodası NaHCO3 (sodyum bikarbonat), çamaşır sodası Na2CO3 (sodyum karbonat) dır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Baking soda is NaHCO3 (sodium bicarbonate), washing soda is Na2CO3 (sodium carbonate).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Backpulver ist NaHCO3 (Natriumbikarbonat), Waschsoda ist Na2CO3 (Natriumkarbonat).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le bicarbonate de soude est du NaHCO3 (bicarbonate de sodium), la lessive de soude est du Na2CO3 (carbonate de sodium).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Пищевая сода — это NaHCO3 (бикарбонат натрия), стиральная сода — Na2CO3 (карбонат натрия).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"صودا الخبز هي NaHCO3 (بيكربونات الصوديوم)، وصودا الغسيل هي Na2CO3 (كربونات الصوديوم).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“小苏打是NaHCO3（碳酸氢钠），洗苏打是Na2CO3（碳酸钠）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Soda şuştinê NaHCO3 (bikarbonat sodyûm), soda şuştinê Na2CO3 (karbonat sodyûm) e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit09;
