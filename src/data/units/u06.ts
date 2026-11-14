import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit06: ChemistryUnitSeedData = {
  "id": "u06",
  "order": 6,
  "exam": "TYT",
  "grade": 10,
  "title": {
    "tr": "Kimyanın Temel Kanunları ve Mol Kavramı",
    "en": "Basic Chemical Laws & The Mole",
    "de": "Chemische Grundgesetze & Mol",
    "fr": "Lois Fondamentales & Mole",
    "ru": "Основные законы химии и моль",
    "ar": "قوانين الكيمياء الأساسية والمول",
    "zh": "化学基本定律与摩尔",
    "ku": "Zagonên Bingehîn ên Kîmyayê û Mol"
  },
  "subtitle": {
    "tr": "Lavoisier, Proust, Dalton ve Avogadro Sayısı",
    "en": "Conservation of Mass & Stoichiometry",
    "de": "Lavoisier, Proust, Dalton und Avogadro Count",
    "fr": "Lavoisier, Proust, Dalton et Avogadro Comte",
    "ru": "Лавуазье, Пруст, Дальтон и граф Авогадро",
    "ar": "كونت لافوازييه وبروست ودالتون وأفوجادرو",
    "zh": "拉瓦锡、普鲁斯特、道尔顿和阿伏加德罗伯爵",
    "ku": "Lavoisier, Proust, Dalton û Avogadro Count"
  },
  "facts": [
    {
      "id": "u06-f01",
      "fact": {
        "tr": "Kütlenin Korunumu Kanunu (Lavoisier): Kapalı bir sistemde kimyasal tepkimeye girenlerin kütleleri toplamı ürünlerin kütleleri toplamına eşittir.",
        "en": "Law of Conservation of Mass (Lavoisier): In a closed system, the sum of the masses of the reactants is equal to the sum of the masses of the products.",
        "de": "Massenerhaltungssatz (Lavoisier): In einem geschlossenen System ist die Summe der Massen der Reaktanten gleich der Summe der Massen der Produkte.",
        "fr": "Loi de conservation de la masse (Lavoisier) : Dans un système fermé, la somme des masses des réactifs est égale à la somme des masses des produits.",
        "ru": "Закон сохранения массы (Лавуазье): В закрытой системе сумма масс реагирующих веществ равна сумме масс продуктов.",
        "ar": "قانون حفظ الكتلة (لافوازييه): في النظام المغلق، مجموع كتل المواد المتفاعلة يساوي مجموع كتل النواتج.",
        "zh": "质量守恒定律（拉瓦锡）：在封闭系统中，反应物的质量总和等于生成物的质量总和。",
        "ku": "Zagona Parastina Girseyê (Lavoisier): Di sîstemeke girtî de, kombûna girseyên reaktantan bi kombûna girseyên hilberan re ye."
      },
      "trap": {
        "tr": "Kütlenin korunumu kanunu gaz çıkışı olan açık kaplarda da kütle artışı olarak görünür.",
        "en": "The law of conservation of mass also appears as an increase in mass in open containers with gas escaping.",
        "de": "Der Massenerhaltungssatz zeigt sich auch als Massenzunahme in offenen Behältern bei austretendem Gas.",
        "fr": "La loi de conservation de la masse apparaît également comme une augmentation de la masse dans des conteneurs ouverts avec fuite de gaz.",
        "ru": "Закон сохранения массы проявляется и в увеличении массы в открытых емкостях при выходе газа.",
        "ar": "يظهر قانون حفظ الكتلة أيضًا على شكل زيادة في الكتلة في الحاويات المفتوحة مع هروب الغاز.",
        "zh": "质量守恒定律也表现为开放容器中气体逸出时质量的增加。",
        "ku": "Zagona parastina girseyê jî wekî zêdebûna girseyê di konteynirên vekirî yên bi gazê direvin xuya dike."
      }
    },
    {
      "id": "u06-f02",
      "fact": {
        "tr": "Sabit Oranlar Kanunu (Proust): Bir bileşiği oluşturan elementlerin kütleleri arasında daima sabit ve değişmez bir oran vardır.",
        "en": "Law of Constant Proportions (Proust): There is always a constant and unchangeable ratio between the masses of the elements that make up a compound.",
        "de": "Gesetz der konstanten Proportionen (Proust): Es gibt immer ein konstantes und unveränderliches Verhältnis zwischen den Massen der Elemente, aus denen eine Verbindung besteht.",
        "fr": "Loi des proportions constantes (Proust) : Il existe toujours un rapport constant et immuable entre les masses des éléments qui composent un composé.",
        "ru": "Закон постоянных пропорций (Пруст): Всегда существует постоянное и неизменное соотношение между массами элементов, входящих в состав соединения.",
        "ar": "قانون النسب الثابتة (بروست): هناك دائما نسبة ثابتة وغير متغيرة بين كتل العناصر التي تشكل المركب.",
        "zh": "恒定比例定律（普鲁斯特）：组成化合物的元素质量之间始终存在恒定且不变的比率。",
        "ku": "Zagona Rêjeyên Berdewam (Proust): Di navbera girseyên hêmanên ku pêkhateyek pêk tînin de her dem rêjeyek domdar û neguherbar heye."
      },
      "trap": {
        "tr": "Bir bileşikteki elementlerin kütlece birleşme oranı bileşiğin miktarına göre değişir.",
        "en": "The mass ratio of elements in a compound varies depending on the amount of the compound.",
        "de": "Das Massenverhältnis der Elemente in einer Verbindung variiert je nach Menge der Verbindung.",
        "fr": "Le rapport massique des éléments dans un composé varie en fonction de la quantité du composé.",
        "ru": "Массовое соотношение элементов в соединении варьируется в зависимости от количества соединения.",
        "ar": "تختلف نسبة كتلة العناصر في المركب حسب كمية المركب.",
        "zh": "化合物中元素的质量比根据化合物的量而变化。",
        "ku": "Rêjeya girseya hêmanên di pêkhateyek de li gorî mêjera pêkhateyê diguhere."
      }
    },
    {
      "id": "u06-f03",
      "fact": {
        "tr": "Katlı Oranlar Kanunu (Dalton): İki element birden fazla bileşik oluşturuyorsa elementlerden birinin sabit miktarına karşılık diğerinin değişen miktarları arasında tam sayılı katlı oran vardır.",
        "en": "Law of Multiple Proportions (Dalton): If two elements form more than one compound, there is an integer multiple ratio between the fixed amount of one element and the changing amounts of the other.",
        "de": "Gesetz der multiplen Proportionen (Dalton): Wenn zwei Elemente mehr als eine Verbindung bilden, besteht ein ganzzahliges Vielfaches des Verhältnisses zwischen der festen Menge eines Elements und den sich ändernden Mengen des anderen.",
        "fr": "Loi des proportions multiples (Dalton) : Si deux éléments forment plus d'un composé, il existe un rapport multiple entier entre la quantité fixe d'un élément et les quantités variables de l'autre.",
        "ru": "Закон множественных пропорций (Дальтона): если два элемента образуют более одного соединения, существует целое кратное соотношение между фиксированным количеством одного элемента и изменяющимся количеством другого.",
        "ar": "قانون النسب المتعددة (دالتون): إذا كون عنصران أكثر من مركب واحد، فإن هناك نسبة صحيحة متعددة بين الكمية الثابتة لعنصر واحد والكميات المتغيرة للعنصر الآخر.",
        "zh": "多重比例定律（道尔顿）：如果两种元素形成多于一种化合物，则一种元素的固定量与另一种元素的变化量之间存在整数倍比例。",
        "ku": "Zagona Rêjeyên Pirjimar (Dalton): Ger du hêman ji yek pêkhatî zêdetir pêk bînin, di navbera mîqdara sabît a hêmanekê û mîqdarên guheztina yên din de rêjeyek pirjimar heye."
      },
      "trap": {
        "tr": "Farklı 3 element içeren bileşikler arasında katlı oran aranabilir.",
        "en": "Multiple ratios can be sought between compounds containing three different elements.",
        "de": "Zwischen Verbindungen, die drei verschiedene Elemente enthalten, können mehrere Verhältnisse gesucht werden.",
        "fr": "Plusieurs rapports peuvent être recherchés entre des composés contenant trois éléments différents.",
        "ru": "Между соединениями, содержащими три разных элемента, можно искать несколько соотношений.",
        "ar": "يمكن البحث عن نسب متعددة بين المركبات التي تحتوي على ثلاثة عناصر مختلفة.",
        "zh": "可以在含有三种不同元素的化合物之间寻求多种比率。",
        "ku": "Rêjeyên pirjimar dikarin di navbera pêkhateyên ku sê hêmanên cihêreng vedigirin de werin lêgerîn."
      }
    },
    {
      "id": "u06-f04",
      "fact": {
        "tr": "Basit formülleri aynı olan bileşikler arasında (örn. C2H4 ve C3H6; her ikisi CH2) katlı oran 1 olacağından katlı oran aranmaz.",
        "en": "Between compounds with the same simple formulas (e.g. C2H4 and C3H6; both CH2), the multiple ratio is not required since the multiple ratio will be 1.",
        "de": "Zwischen Verbindungen mit denselben einfachen Formeln (z. B. C2H4 und C3H6; beide CH2) ist das Mehrfachverhältnis nicht erforderlich, da das Mehrfachverhältnis 1 beträgt.",
        "fr": "Entre les composés ayant les mêmes formules simples (par exemple C2H4 et C3H6 ; les deux CH2), le rapport multiple n'est pas requis puisque le rapport multiple sera de 1.",
        "ru": "Между соединениями с одинаковыми простыми формулами (например, C2H4 и C3H6; оба CH2) кратное соотношение не требуется, поскольку кратное соотношение будет равно 1.",
        "ar": "بين المركبات التي لها نفس الصيغ البسيطة (مثل C2H4 وC3H6، وكلاهما CH2)، لا تكون النسبة المتعددة مطلوبة لأن النسبة المتعددة ستكون 1.",
        "zh": "在具有相同简单式的化合物（例如 C2H4 和 C3H6；均为 CH2）之间，不需要倍数比，因为倍数比将为 1。",
        "ku": "Di navbera pêkhateyên bi heman formulên hêsan de (mînak C2H4 û C3H6; her du CH2), rêjeya piralî ne hewce ye ji ber ku rêjeya pirjimar dê 1 be."
      },
      "trap": {
        "tr": "C2H4 ve C4H8 arasında katlı oranlar kanunu geçerlidir.",
        "en": "The law of multiple proportions applies between C2H4 and C4H8.",
        "de": "Zwischen C2H4 und C4H8 gilt das Gesetz der multiplen Proportionen.",
        "fr": "La loi des proportions multiples s’applique entre C2H4 et C4H8.",
        "ru": "Закон множественных пропорций применяется между C2H4 и C4H8.",
        "ar": "ينطبق قانون النسب المتعددة بين C2H4 وC4H8.",
        "zh": "C2H4 和 C4H8 之间适用倍数比例定律。",
        "ku": "Qanûna pirjimar di navbera C2H4 û C4H8 de derbas dibe."
      }
    },
    {
      "id": "u06-f05",
      "fact": {
        "tr": "1 mol tanecik 6.02x10^23 tane tanecik (Avogadro sayısı, NA) içerir.",
        "en": "1 mole of particles contains 6.02x10^23 particles (Avogadro's number, NA).",
        "de": "1 Mol Partikel enthält 6,02x10^23 Partikel (Avogadro-Zahl, NA).",
        "fr": "1 mole de particules contient 6,02x10^23 particules (nombre d'Avogadro, NA).",
        "ru": "В 1 моле частиц содержится 6,02x10^23 частиц (число Авогадро, NA).",
        "ar": "1 مول من الجسيمات يحتوي على 6.02x10^23 جسيم (رقم أفوجادرو، NA).",
        "zh": "1 摩尔粒子包含 6.02x10^23 个粒子（阿伏伽德罗数，NA）。",
        "ku": "Di 1 molê zêran de 6,02x10^23 pirtik hene (hejmara Avogadro, NA)."
      },
      "trap": {
        "tr": "1 mol H2 gazı 6.02x10^23 tane atom içerir.",
        "en": "1 mole of H2 gas contains 6.02x10^23 atoms.",
        "de": "1 Mol H2-Gas enthält 6,02x10^23 Atome.",
        "fr": "1 mole de gaz H2 contient 6,02x10^23 atomes.",
        "ru": "1 моль газа H2 содержит 6,02x10^23 атома.",
        "ar": "يحتوي 1 مول من غاز H2 على 6.02×10^23 ذرة.",
        "zh": "1 摩尔 H2 气体包含 6.02x10^23 个原子。",
        "ku": "Di 1 mol gaza H2 de 6,02x10^23 atoman hene."
      },
      "osymTip": {
        "tr": "1 mol H2 molekülü 2 mol H atomu içerir!",
        "en": "1 mole of H2 molecules contains 2 moles of H atoms!",
        "de": "1 Mol H2-Moleküle enthält 2 Mol H-Atome!",
        "fr": "1 mole de molécules H2 contient 2 moles d’atomes H !",
        "ru": "В 1 моле молекул H2 содержится 2 моля атомов H!",
        "ar": "1 مول من جزيئات H2 يحتوي على 2 مول من ذرات H!",
        "zh": "1摩尔H2分子含有2摩尔H原子！",
        "ku": "Di 1 molek molekulên H2 de 2 mol atomên H hene!"
      }
    },
    {
      "id": "u06-f06",
      "fact": {
        "tr": "Normal koşullarda (0 °C ve 1 atm) 1 mol ideal gaz 22.4 litre hacim kaplar.",
        "en": "Under normal conditions (0 °C and 1 atm), 1 mole of ideal gas occupies 22.4 liters of volume.",
        "de": "Unter normalen Bedingungen (0 °C und 1 atm) nimmt 1 Mol ideales Gas 22,4 Liter Volumen ein.",
        "fr": "Dans des conditions normales (0 °C et 1 atm), 1 mole de gaz parfait occupe 22,4 litres de volume.",
        "ru": "При нормальных условиях (0°С и 1 атм) 1 моль идеального газа занимает 22,4 л объёма.",
        "ar": "في الظروف العادية (0 درجة مئوية و1 ضغط جوي)، يشغل 1 مول من الغاز المثالي 22.4 لترًا من الحجم.",
        "zh": "在正常条件下（0°C和1个大气压），1摩尔理想气体占据22.4升体积。",
        "ku": "Di bin şert û mercên normal de (0 °C û 1 atm), 1 mol gaza îdeal 22,4 lître qebar digire."
      },
      "trap": {
        "tr": "Oda koşullarında (25 °C, 1 atm) 1 mol gaz 22.4 L hacim kaplar.",
        "en": "At room conditions (25 °C, 1 atm), 1 mole of gas occupies a volume of 22.4 L.",
        "de": "Bei Raumbedingungen (25 °C, 1 atm) nimmt 1 Mol Gas ein Volumen von 22,4 L ein.",
        "fr": "Dans des conditions ambiantes (25 °C, 1 atm), 1 mole de gaz occupe un volume de 22,4 L.",
        "ru": "В комнатных условиях (25°С, 1 атм) 1 моль газа занимает объём 22,4 л.",
        "ar": "في ظروف الغرفة (25 درجة مئوية، 1 ضغط جوي)، يشغل 1 مول من الغاز حجمًا قدره 22.4 لترًا.",
        "zh": "在室温条件下（25 °C，1 atm），1 摩尔气体占据的体积为 22.4 L。",
        "ku": "Di şert û mercên jûreyê de (25 °C, 1 atm), 1 mol gaz qebareya 22,4 L digire."
      },
      "osymTip": {
        "tr": "Oda koşullarında 24.5 L dir.",
        "en": "It is 24.5 L under room conditions.",
        "de": "Unter Raumbedingungen beträgt es 24,5 L.",
        "fr": "Il fait 24,5 L dans des conditions ambiantes.",
        "ru": "В комнатных условиях это 24,5 л.",
        "ar": "يبلغ 24.5 لترًا في ظروف الغرفة.",
        "zh": "室温下为 24.5 L。",
        "ku": "Di bin şert û mercên odeyê de 24,5 lître ye."
      }
    },
    {
      "id": "u06-f07",
      "fact": {
        "tr": "Mol sayısı formülü: n = m / MA (kütle / mol kütlesi) veya n = N / NA dır.",
        "en": "The formula for the number of moles is: n = m / MA (mass / molar mass) or n = N / NA.",
        "de": "Die Formel für die Molzahl lautet: n = m / MA (Masse / Molmasse) oder n = N / NA.",
        "fr": "La formule du nombre de moles est : n = m/MA (masse/masse molaire) ou n = N/NA.",
        "ru": "Формула количества молей: n = m/MA (масса/молярная масса) или n = N/NA.",
        "ar": "صيغة عدد الشامات هي: n = m / MA (الكتلة / الكتلة المولية) أو n = N / NA.",
        "zh": "摩尔数的公式为：n = m / MA（质量/摩尔质量）或 n = N / NA。",
        "ku": "Formula hejmara molan ev e: n = m / MA (girse / girseya molê) an n = N / NA."
      },
      "trap": {
        "tr": "Mol sayısı kütle ile mol kütlesinin çarpımına eşittir.",
        "en": "The number of moles is equal to the mass multiplied by the molar mass.",
        "de": "Die Anzahl der Mol ist gleich der Masse multipliziert mit der Molmasse.",
        "fr": "Le nombre de taupes est égal à la masse multipliée par la masse molaire.",
        "ru": "Количество молей равно массе, умноженной на молярную массу.",
        "ar": "عدد المولات يساوي الكتلة مضروبة في الكتلة المولية.",
        "zh": "摩尔数等于质量乘以摩尔质量。",
        "ku": "Hejmara molan bi girseya ku bi girseya molarê ve zêde dibe ye."
      }
    },
    {
      "id": "u06-f08",
      "fact": {
        "tr": "Mol kütlesi (MA), 1 mol maddenin gram cinsinden kütlesidir (akb cinsinden molekül ağırlığının gram karşılığıdır).",
        "en": "Molar mass (MA) is the mass in grams of 1 mole of substance (gram equivalent to the molecular weight in amu).",
        "de": "Die Molmasse (MA) ist die Masse in Gramm von 1 Mol einer Substanz (Gramm entspricht dem Molekulargewicht in amu).",
        "fr": "La masse molaire (MA) est la masse en grammes de 1 mole de substance (gramme équivalent au poids moléculaire en amu).",
        "ru": "Молярная масса (МА) — это масса 1 моля вещества в граммах (грамм эквивалентен молекулярной массе в а.е.м.).",
        "ar": "الكتلة المولية (MA) هي الكتلة بالجرام لمول واحد من المادة (جرام يعادل الوزن الجزيئي بوحدة amu).",
        "zh": "摩尔质量 (MA) 是 1 摩尔物质的质量（克）（克相当于 amu 分子量）。",
        "ku": "Girseya Molar (MA) girseya bi gramên 1 mole maddeyê ye (gram bi giraniya molekulê ya di amu de ye)."
      },
      "trap": {
        "tr": "1 tane CO2 molekülü 44 gramdır.",
        "en": "1 CO2 molecule weighs 44 grams.",
        "de": "1 CO2-Molekül wiegt 44 Gramm.",
        "fr": "1 molécule de CO2 pèse 44 grammes.",
        "ru": "1 молекула CO2 весит 44 грамма.",
        "ar": "يزن جزيء ثاني أكسيد الكربون 44 جرامًا.",
        "zh": "1 个 CO2 分子重 44 克。",
        "ku": "1 molekulek CO2 44 gram giran e."
      },
      "osymTip": {
        "tr": "1 tane CO2 44 akb dir; 1 mol CO2 44 gramdır.",
        "en": "1 grain of CO2 is 44 akb; 1 mole of CO2 is 44 grams.",
        "de": "1 Korn CO2 ist 44 akb; 1 Mol CO2 sind 44 Gramm.",
        "fr": "1 grain de CO2 équivaut à 44 akb ; 1 mole de CO2 équivaut à 44 grammes.",
        "ru": "1 крупинка СО2 – 44 акб; 1 моль CO2 равен 44 граммам.",
        "ar": "1 حبة من ثاني أكسيد الكربون هي 44 ألف كيلو بايت؛ 1 مول من ثاني أكسيد الكربون يساوي 44 جرامًا.",
        "zh": "1 格令 CO2 为 44 akb； 1 摩尔 CO2 为 44 克。",
        "ku": "1 genim CO2 44 akb e; 1 mol CO2 44 gram e."
      }
    },
    {
      "id": "u06-f09",
      "fact": {
        "tr": "Avogadro Hipotezi: Aynı sıcaklık ve basınç altında eşit hacimdeki tüm ideal gazlar eşit sayıda molekül içerir.",
        "en": "Avogadro Hypothesis: Under the same temperature and pressure, all equal volumes of ideal gases contain the same number of molecules.",
        "de": "Avogadro-Hypothese: Bei gleicher Temperatur und gleichem Druck enthalten alle gleichen Volumina idealer Gase die gleiche Anzahl an Molekülen.",
        "fr": "Hypothèse d'Avogadro : Sous la même température et pression, tous les volumes égaux de gaz parfaits contiennent le même nombre de molécules.",
        "ru": "Гипотеза Авогадро: При одинаковых температуре и давлении все равные объемы идеальных газов содержат одинаковое количество молекул.",
        "ar": "فرضية أفوجادرو: تحت نفس درجة الحرارة والضغط، تحتوي جميع الحجوم المتساوية من الغازات المثالية على نفس العدد من الجزيئات.",
        "zh": "阿伏加德罗假说：在相同的温度和压力下，所有等体积的理想气体都含有相同数量的分子。",
        "ku": "Hîpoteza Avogadro: Di bin heman germahî û zextê de, di hemî cildên wekhev ên gazên îdeal de heman hejmar molekul hene."
      },
      "trap": {
        "tr": "Eşit hacimdeki gazların kütleleri de daima birbirine eşittir.",
        "en": "The masses of equal volumes of gases are always equal.",
        "de": "Die Massen gleicher Gasvolumina sind immer gleich.",
        "fr": "Les masses de volumes égaux de gaz sont toujours égales.",
        "ru": "Массы равных объемов газов всегда равны.",
        "ar": "كتل الأحجام المتساوية من الغازات متساوية دائمًا.",
        "zh": "等体积气体的质量始终相等。",
        "ku": "Girseyên cildên yeksan ên gazan her dem wek hev in."
      }
    },
    {
      "id": "u06-f10",
      "fact": {
        "tr": "Bağıl atom kütlesi karbon-12 (12C) izotopunun kütlesinin 1/12 si temel alınarak hesaplanmıştır.",
        "en": "Relative atomic mass was calculated based on 1/12 of the mass of the carbon-12 (12C) isotope.",
        "de": "Die relative Atommasse wurde auf der Grundlage von 1/12 der Masse des Kohlenstoff-12-Isotops (12C) berechnet.",
        "fr": "La masse atomique relative a été calculée sur la base de 1/12 de la masse de l’isotope du carbone 12 (12C).",
        "ru": "Относительная атомная масса рассчитана исходя из 1/12 массы изотопа углерода-12 (12C).",
        "ar": "تم حساب الكتلة الذرية النسبية على أساس 1/12 من كتلة نظير الكربون 12 (12C).",
        "zh": "相对原子质量根据碳 12 (12C) 同位素质量的 1/12 计算。",
        "ku": "Girseya atomê ya têkildar li ser bingeha 1/12 ya girseya îzotopa karbon-12 (12C) hate hesibandin."
      },
      "trap": {
        "tr": "Bağıl atom kütlesi hidrojen atomunun ağırlığına tam eşittir.",
        "en": "The relative atomic mass is exactly equal to the weight of the hydrogen atom.",
        "de": "Die relative Atommasse entspricht genau dem Gewicht des Wasserstoffatoms.",
        "fr": "La masse atomique relative est exactement égale au poids de l’atome d’hydrogène.",
        "ru": "Относительная атомная масса в точности равна весу атома водорода.",
        "ar": "الكتلة الذرية النسبية تساوي بالضبط وزن ذرة الهيدروجين.",
        "zh": "相对原子质量恰好等于氢原子的重量。",
        "ku": "Girseya atomê ya nisbî tam bi giraniya atoma hîdrojenê ye."
      }
    },
    {
      "id": "u06-f11",
      "fact": {
        "tr": "Katlı oran aranmayan durumlar: Farklı tür element içerenler (CO ve NO), 3 tür element içerenler (H2SO4 ve H2SO3), basit formülü aynı olanlar.",
        "en": "Situations where multiple ratios are not required: Those containing different types of elements (CO and NO), those containing 3 types of elements (H2SO4 and H2SO3), those with the same simple formula.",
        "de": "Situationen, in denen mehrere Verhältnisse nicht erforderlich sind: Situationen mit unterschiedlichen Elementtypen (CO und NO), Situationen mit drei Elementtypen (H2SO4 und H2SO3) und Situationen mit derselben einfachen Formel.",
        "fr": "Situations où plusieurs ratios ne sont pas requis : Ceux contenant différents types d'éléments (CO et NO), ceux contenant 3 types d'éléments (H2SO4 et H2SO3), ceux avec la même formule simple.",
        "ru": "Ситуации, когда несколько соотношений не требуются: те, которые содержат разные типы элементов (CO и NO), те, которые содержат 3 типа элементов (H2SO4 и H2SO3), те, которые имеют одну и ту же простую формулу.",
        "ar": "الحالات التي لا تتطلب نسبًا متعددة: تلك التي تحتوي على أنواع مختلفة من العناصر (CO وNO)، وتلك التي تحتوي على 3 أنواع من العناصر (H2SO4 وH2SO3)، وتلك التي لها نفس الصيغة البسيطة.",
        "zh": "不需要多个比率的情况：含有不同类型元素（CO和NO）的情况、含有3种元素（H2SO4和H2SO3）的情况、具有相同简单式的情况。",
        "ku": "Rewşên ku gelek rêjeyên hewce ne hewce ne: Yên ku celebên hêmanên cihêreng (CO û NO) hene, yên ku 3 celeb hêman hene (H2SO4 û H2SO3), yên ku heman formula hêsan hene."
      },
      "trap": {
        "tr": "FeO ve Fe2O3 arasında katlı oran yoktur.",
        "en": "There is no multiple ratio between FeO and Fe2O3.",
        "de": "Es gibt kein Mehrfachverhältnis zwischen FeO und Fe2O3.",
        "fr": "Il n’existe pas de rapport multiple entre FeO et Fe2O3.",
        "ru": "Между FeO и Fe2O3 нет кратного соотношения.",
        "ar": "لا توجد نسبة متعددة بين FeO وFe2O3.",
        "zh": "FeO和Fe2O3之间没有倍数比。",
        "ku": "Di navbera FeO û Fe2O3 de rêjeyek pirjimar tune."
      }
    },
    {
      "id": "u06-f12",
      "fact": {
        "tr": "1 atom-gram = 1 mol atom, 1 molekül-gram = 1 mol molekül, 1 formül-gram = 1 mol iyonik bileşik demektir.",
        "en": "1 atom-gram = 1 mole of atoms, 1 molecule-gram = 1 mole of molecules, 1 formula-gram = 1 mole of ionic compound.",
        "de": "1 Atom-Gramm = 1 Mol Atome, 1 Molekül-Gramm = 1 Mol Moleküle, 1 Formel-Gramm = 1 Mol ionische Verbindung.",
        "fr": "1 atome-gramme = 1 mole d'atomes, 1 molécule-gramme = 1 mole de molécules, 1 formule-gramme = 1 mole de composé ionique.",
        "ru": "1 атом-грамм = 1 моль атомов, 1 молекула-грамм = 1 моль молекул, 1 формульный грамм = 1 моль ионного соединения.",
        "ar": "1 ذرة جرام = 1 مول من الذرات، 1 جرام جزيء = 1 مول من الجزيئات، 1 جرام صيغة = 1 مول من المركب الأيوني.",
        "zh": "1 原子克 = 1 摩尔原子，1 分子克 = 1 摩尔分子，1 分子式 = 1 摩尔离子化合物。",
        "ku": "1 atom-gram = 1 mol atom, 1 molekul-gram = 1 molek molekul, 1 formula-gram = 1 mol pêkhateya îyonî."
      },
      "trap": {
        "tr": "1 molekül-gram H2O ifadesi 1 tane su molekülünü belirtir.",
        "en": "The expression 1 molecule-gram H2O indicates 1 water molecule.",
        "de": "Der Ausdruck 1 Molekül-Gramm H2O bedeutet 1 Wassermolekül.",
        "fr": "L’expression 1 molécule-gramme H2O indique 1 molécule d’eau.",
        "ru": "Выражение 1 молекула-грамм H2O указывает на 1 молекулу воды.",
        "ar": "يشير التعبير 1 جزيء جرام H2O إلى جزيء ماء واحد.",
        "zh": "表述1分子克H2O表示1个水分子。",
        "ku": "Gotina 1 molekul-gram H2O 1 molekula avê nîşan dide."
      }
    },
    {
      "id": "u06-f13",
      "fact": {
        "tr": "Gerçek atom kütlesi: Bir tek atomun gram cinsinden kütlesidir ve MA / NA formülüyle bulunur.",
        "en": "Real atomic mass: It is the mass of a single atom in grams and is found with the formula MA / NA.",
        "de": "Echte Atommasse: Sie ist die Masse eines einzelnen Atoms in Gramm und wird mit der Formel MA/NA ermittelt.",
        "fr": "Masse atomique réelle : C'est la masse d'un seul atome en grammes et se trouve avec la formule MA/NA.",
        "ru": "Реальная атомная масса: это масса одного атома в граммах, которая находится по формуле MA / NA.",
        "ar": "الكتلة الذرية الحقيقية: هي كتلة الذرة الواحدة بالجرام ويوجد لها الصيغة MA/NA.",
        "zh": "真实原子质量：单个原子的质量，以克为单位，用公式 MA / NA 计算。",
        "ku": "Girseya atomê ya rastîn: Ew girseya yek atomê bi gram e û bi formula MA / NA tê dîtin."
      },
      "trap": {
        "tr": "Gerçek atom kütlesi atomun mol ağırlığına eşittir.",
        "en": "The actual atomic mass is equal to the molar weight of the atom.",
        "de": "Die tatsächliche Atommasse entspricht dem Molgewicht des Atoms.",
        "fr": "La masse atomique réelle est égale au poids molaire de l’atome.",
        "ru": "Фактическая атомная масса равна молярной массе атома.",
        "ar": "الكتلة الذرية الفعلية تساوي الوزن المولي للذرة.",
        "zh": "实际原子质量等于原子的摩尔质量。",
        "ku": "Girseya atomê ya rastîn bi giraniya molarê ya atomê ye."
      }
    },
    {
      "id": "u06-f14",
      "fact": {
        "tr": "0.5 mol CH4 gazı NK da 11.2 litre hacim kaplar ve 2.5 mol atom içerir (0.5 mol C + 2.0 mol H).",
        "en": "0.5 mol CH4 gas occupies 11.2 liters of volume in NK and contains 2.5 mol atoms (0.5 mol C + 2.0 mol H).",
        "de": "0,5 Mol CH4-Gas nimmt in NK 11,2 Liter Volumen ein und enthält 2,5 Mol-Atome (0,5 Mol C + 2,0 Mol H).",
        "fr": "0,5 mole de gaz CH4 occupe 11,2 litres de volume dans NK et contient 2,5 moles d'atomes (0,5 mole de C + 2,0 moles de H).",
        "ru": "0,5 моль газа СН4 занимает в НК 11,2 л объема и содержит 2,5 моль атомов (0,5 моль С + 2,0 моль Н).",
        "ar": "يشغل 0.5 مول من غاز CH4 11.2 لترًا من الحجم في NK ويحتوي على 2.5 مول من ذرات (0.5 مول C + 2.0 مول H).",
        "zh": "0.5 mol CH4 气体在 NK 中占据 11.2 升体积，包含 2.5 mol 原子（0.5 mol C + 2.0 mol H）。",
        "ku": "0,5 mol gaza CH4 li NK 11,2 lître qebar digire û 2,5 mol atoman (0,5 mol C + 2,0 mol H) dihewîne."
      },
      "trap": {
        "tr": "0.5 mol CH4 gazı NK da 22.4 L hacim kaplar.",
        "en": "0.5 mol CH4 gas occupies 22.4 L volume in NK.",
        "de": "0,5 mol CH4-Gas nehmen in NK ein Volumen von 22,4 l ein.",
        "fr": "0,5 mole de gaz CH4 occupe un volume de 22,4 L dans NK.",
        "ru": "0,5 моль газа CH4 занимает в НК объем 22,4 л.",
        "ar": "يشغل 0.5 مول من غاز CH4 حجم 22.4 لترًا في NK.",
        "zh": "0.5 mol CH4 气体在 NK 中占据 22.4 L 体积。",
        "ku": "0,5 mol gaza CH4 li NK 22,4 L volga digire."
      }
    },
    {
      "id": "u06-f15",
      "fact": {
        "tr": "Katı ve sıvı maddeler için NK da 22.4 L hacim kuralı GEÇERLİ DEĞİLDİR; sadece gazlar içindir.",
        "en": "For solid and liquid substances, the 22.4 L volume rule in NC does NOT apply; For gases only.",
        "de": "Für feste und flüssige Stoffe gilt die 22,4-L-Volumenregel in NC NICHT; Nur für Gase.",
        "fr": "Pour les substances solides et liquides, la règle du volume de 22,4 L en NC ne s'applique PAS ; Pour les gaz uniquement.",
        "ru": "Для твердых и жидких веществ правило объема 22,4 л в Северной Каролине НЕ применяется; Только для газов.",
        "ar": "بالنسبة للمواد الصلبة والسائلة، لا تنطبق قاعدة الحجم 22.4 لترًا في NC؛ للغازات فقط.",
        "zh": "对于固体和液体物质，NC 中的 22.4 L 体积规则不适用；仅适用于气体。",
        "ku": "Ji bo maddeyên hişk û şil, qaîdeya qebareya 22,4 L di NC-ê de NA derbas dibe; Tenê ji bo gazan."
      },
      "trap": {
        "tr": "0 °C de 1 mol sıvı su 22.4 litre hacim kaplar.",
        "en": "At 0 °C, 1 mole of liquid water occupies 22.4 liters of volume.",
        "de": "Bei 0 °C nimmt 1 Mol flüssiges Wasser 22,4 Liter Volumen ein.",
        "fr": "À 0 °C, 1 mole d’eau liquide occupe 22,4 litres de volume.",
        "ru": "При температуре 0°С 1 моль жидкой воды занимает 22,4 литра объёма.",
        "ar": "عند 0 درجة مئوية، يشغل 1 مول من الماء السائل 22.4 لترًا من الحجم.",
        "zh": "在 0 °C 时，1 摩尔液态水占据 22.4 升体积。",
        "ku": "Di 0 °C de, 1 mol ava şil 22,4 lître qebar digire."
      }
    },
    {
      "id": "u06-f16",
      "fact": {
        "tr": "Tepkimeye giren maddeler arasındaki stokiyometrik oran katsayılar ile belirlenir.",
        "en": "The stoichiometric ratio between the reactants is determined by coefficients.",
        "de": "Das stöchiometrische Verhältnis zwischen den Reaktanten wird durch Koeffizienten bestimmt.",
        "fr": "Le rapport stœchiométrique entre les réactifs est déterminé par des coefficients.",
        "ru": "Стехиометрическое соотношение между реагентами определяется коэффициентами.",
        "ar": "يتم تحديد النسبة المتكافئة بين المواد المتفاعلة بواسطة المعاملات.",
        "zh": "反应物之间的化学计量比由系数确定。",
        "ku": "Rêjeya stoichiometric di navbera reaktantan de ji hêla hevberan ve tê destnîşankirin."
      },
      "trap": {
        "tr": "Kimyasal tepkimeye giren maddelerin kütleleri katsayılarıyla doğru orantılı olmak zorundadır.",
        "en": "The masses of substances participating in a chemical reaction must be directly proportional to their coefficients.",
        "de": "Die Massen der an einer chemischen Reaktion beteiligten Stoffe müssen direkt proportional zu ihren Koeffizienten sein.",
        "fr": "Les masses de substances participant à une réaction chimique doivent être directement proportionnelles à leurs coefficients.",
        "ru": "Массы веществ, участвующих в химической реакции, должны быть прямо пропорциональны их коэффициентам.",
        "ar": "يجب أن تكون كتل المواد المشاركة في التفاعل الكيميائي متناسبة طرديا مع معاملاتها.",
        "zh": "参与化学反应的物质的质量必须与其系数成正比。",
        "ku": "Girseya maddeyên ku beşdarî reaksiyonên kîmyewî dibin divê rasterast bi rêjeya wan re têkildar bin."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u06-c01",
      "conceptA": {
        "tr": "Sabit Oranlar",
        "en": "Fixed Odds",
        "de": "Feste Quoten",
        "fr": "Cotes fixes",
        "ru": "Фиксированные коэффициенты",
        "ar": "احتمالات ثابتة",
        "zh": "固定赔率",
        "ku": "Odds Fixed"
      },
      "conceptB": {
        "tr": "Katlı Oranlar",
        "en": "Multiple Ratios",
        "de": "Mehrere Verhältnisse",
        "fr": "Rapports multiples",
        "ru": "Множественные соотношения",
        "ar": "نسب متعددة",
        "zh": "多重比率",
        "ku": "Rêjeyên Pirjimar"
      },
      "distinction": {
        "tr": "Sabit oran tek bir bileşikteki elementlerin kütle oranıdır; katlı oran aynı iki elementin farklı bileşikleri arasındaki orandır.",
        "en": "Constant ratio is the mass ratio of elements in a single compound; multiple ratio is the ratio between different compounds of the same two elements.",
        "de": "Das konstante Verhältnis ist das Massenverhältnis der Elemente in einer einzelnen Verbindung; Das Mehrfachverhältnis ist das Verhältnis zwischen verschiedenen Verbindungen derselben zwei Elemente.",
        "fr": "Le rapport constant est le rapport massique des éléments dans un seul composé ; le rapport multiple est le rapport entre différents composés des deux mêmes éléments.",
        "ru": "Постоянное соотношение — массовое соотношение элементов в одном соединении; Кратное соотношение – это соотношение между различными соединениями одних и тех же двух элементов.",
        "ar": "النسبة الثابتة هي نسبة كتلة العناصر في مركب واحد؛ النسبة المتعددة هي النسبة بين مركبات مختلفة لنفس العنصرين.",
        "zh": "常数比是单一化合物中元素的质量比；倍数比是相同两种元素的不同化合物之间的比率。",
        "ku": "Rêjeya domdar rêjeya girseya hêmanan di yek pêkhatî de ye; rêjeya piralî rêjeya di navbera pêkhateyên cuda yên heman du hêmanan de ye."
      }
    },
    {
      "id": "u06-c02",
      "conceptA": {
        "tr": "1 akb",
        "en": "1 akb",
        "de": "1 Akb",
        "fr": "1 clé USB",
        "ru": "1 акб",
        "ar": "1 أك",
        "zh": "1 AKB",
        "ku": "1 akb"
      },
      "conceptB": {
        "tr": "1 gram",
        "en": "1 gram",
        "de": "1 Gramm",
        "fr": "1 gramme",
        "ru": "1 грамм",
        "ar": "1 جرام",
        "zh": "1克",
        "ku": "1 gram"
      },
      "distinction": {
        "tr": "1 akb = 1 / NA gramdır; mikroskobik tek atom kütle birimidir.",
        "en": "1 akb = 1 / NA gram; It is a microscopic single atomic mass unit.",
        "de": "1 akb = 1 / NA Gramm; Es handelt sich um eine mikroskopisch kleine einzelne atomare Masseneinheit.",
        "fr": "1 akb = 1 / NA gramme ; Il s’agit d’une unité microscopique de masse atomique unique.",
        "ru": "1 акб = 1/НА грамм; Это микроскопическая одноатомная единица массы.",
        "ar": "1 أكب = 1 / غ جرام؛ إنها وحدة كتلة ذرية مجهرية واحدة.",
        "zh": "1 akb = 1 / NA 克；它是微观的单个原子质量单位。",
        "ku": "1 akb = 1 / gram NA; Ew yekîneyek girseya atomî ya mîkroskopî ye."
      }
    },
    {
      "id": "u06-c03",
      "conceptA": {
        "tr": "Kütlenin Korunumu (Lavoisier)",
        "en": "Conservation of Mass (Lavoisier)",
        "de": "Erhaltung der Masse (Lavoisier)",
        "fr": "Conservation de la messe (Lavoisier)",
        "ru": "Сохранение массы (Лавуазье)",
        "ar": "حفظ الكتلة (لافوازييه)",
        "zh": "质量守恒（拉瓦锡）",
        "ku": "Parastina Komkujiyê (Lavoisier)"
      },
      "conceptB": {
        "tr": "Sabit Oranlar (Proust)",
        "en": "Fixed Proportions (Proust)",
        "de": "Feste Proportionen (Proust)",
        "fr": "Proportions fixes (Proust)",
        "ru": "Фиксированные пропорции (Пруст)",
        "ar": "النسب الثابتة (بروست)",
        "zh": "固定比例（普鲁斯特）",
        "ku": "Rêjeyên sabît (Proust)"
      },
      "distinction": {
        "tr": "Kütlenin korunumu giren kütlesi ile ürün kütlesinin eşitliğini; sabit oranlar bileşikteki elementlerin sabit kütlece oranını ifade eder.",
        "en": "Conservation of mass states that the mass of the reactant and the mass of the product are equal; Constant ratios express the fixed mass ratio of the elements in the compound.",
        "de": "Die Massenerhaltung besagt, dass die Masse des Reaktanten und die Masse des Produkts gleich sind; Konstante Verhältnisse drücken das feste Massenverhältnis der Elemente in der Verbindung aus.",
        "fr": "La conservation de la masse stipule que la masse du réactif et la masse du produit sont égales ; Les rapports constants expriment le rapport de masse fixe des éléments du composé.",
        "ru": "Закон сохранения массы гласит, что масса реагента и масса продукта равны; Постоянные соотношения выражают фиксированное массовое соотношение элементов в соединении.",
        "ar": "ينص حفظ الكتلة على أن كتلة المادة المتفاعلة وكتلة المنتج متساويتان؛ النسب الثابتة تعبر عن نسبة الكتلة الثابتة للعناصر الموجودة في المركب.",
        "zh": "质量守恒表明反应物的质量和生成物的质量相等；恒定比率表示化合物中元素的固定质量比。",
        "ku": "Parastina girseyê dibêje ku girseya reaktant û girseya berhemê wek hev in; Rêjeyên domdar rêjeya girseya sabît a hêmanên di pêkhateyê de diyar dikin."
      }
    },
    {
      "id": "u06-c04",
      "conceptA": {
        "tr": "Sabit Oranlar (Proust)",
        "en": "Fixed Proportions (Proust)",
        "de": "Feste Proportionen (Proust)",
        "fr": "Proportions fixes (Proust)",
        "ru": "Фиксированные пропорции (Пруст)",
        "ar": "النسب الثابتة (بروست)",
        "zh": "固定比例（普鲁斯特）",
        "ku": "Rêjeyên sabît (Proust)"
      },
      "conceptB": {
        "tr": "Katlı Oranlar (Dalton)",
        "en": "Multiple Ratios (Dalton)",
        "de": "Mehrere Verhältnisse (Dalton)",
        "fr": "Rapports multiples (Dalton)",
        "ru": "Множественные соотношения (Дальтон)",
        "ar": "النسب المتعددة (دالتون)",
        "zh": "多重比率（道尔顿）",
        "ku": "Rêjeyên Pirjimar (Dalton)"
      },
      "distinction": {
        "tr": "Sabit oran tek bir bileşikteki element oranını; katlı oran ise aynı iki elementten oluşan farklı bileşikler arasındaki oranı belirtir.",
        "en": "Fixed ratio refers to the ratio of elements in a single compound; Multiple ratio indicates the ratio between different compounds consisting of the same two elements.",
        "de": "Das feste Verhältnis bezieht sich auf das Verhältnis der Elemente in einer einzelnen Verbindung; Das Mehrfachverhältnis gibt das Verhältnis zwischen verschiedenen Verbindungen an, die aus denselben zwei Elementen bestehen.",
        "fr": "Le rapport fixe fait référence au rapport des éléments dans un seul composé ; Le rapport multiple indique le rapport entre différents composés constitués des deux mêmes éléments.",
        "ru": "Фиксированное соотношение относится к соотношению элементов в одном соединении; Множественное соотношение указывает на соотношение между различными соединениями, состоящими из двух одних и тех же элементов.",
        "ar": "تشير النسبة الثابتة إلى نسبة العناصر في مركب واحد؛ تشير النسبة المتعددة إلى النسبة بين المركبات المختلفة التي تتكون من نفس العنصرين.",
        "zh": "固定比是指单一化合物中元素的比例；倍数比是指由相同两种元素组成的不同化合物之间的比例。",
        "ku": "Rêjeya sabît bi rêjeya hêmanan di yek pêkhatî de vedibêje; Rêjeya pirjimar rêjeya di navbera pêkhateyên cihêreng ên ku ji heman du hêmanan pêk tên nîşan dide."
      }
    },
    {
      "id": "u06-c05",
      "conceptA": {
        "tr": "Avogadro Sayısı (NA)",
        "en": "Avogadro's Number (NA)",
        "de": "Avogadros Zahl (NA)",
        "fr": "Numéro d'Avogadro (NA)",
        "ru": "Число Авогадро (NA)",
        "ar": "رقم أفوجادرو (نسبة غير معلومة)",
        "zh": "阿伏伽德罗常数 (NA)",
        "ku": "Hejmara Avogadro (NA)"
      },
      "conceptB": {
        "tr": "Mol Kütlesi (MA)",
        "en": "Molar Mass (MA)",
        "de": "Molmasse (MA)",
        "fr": "Masse molaire (MA)",
        "ru": "Молярная масса (MA)",
        "ar": "الكتلة المولية (MA)",
        "zh": "摩尔质量 (MA)",
        "ku": "Girseya Molar (MA)"
      },
      "distinction": {
        "tr": "Avogadro sayısı 1 moldeki tanecik sayısıdır (6.02x10^23); mol kütlesi 1 mol taneciğin gram cinsinden kütlesidir.",
        "en": "Avogadro's number is the number of particles in 1 mole (6.02x10^23); molar mass is the mass in grams of 1 mole of particles.",
        "de": "Die Avogadro-Zahl ist die Anzahl der Teilchen in 1 Mol (6,02x10^23); Molmasse ist die Masse in Gramm von 1 Mol Partikeln.",
        "fr": "Le nombre d'Avogadro est le nombre de particules dans 1 mole (6,02x10^23) ; la masse molaire est la masse en grammes de 1 mole de particules.",
        "ru": "Число Авогадро — это количество частиц в 1 моле (6,02х10^23); молярная масса — масса 1 моля частиц в граммах.",
        "ar": "عدد أفوجادرو هو عدد الجزيئات في 1 مول (6.02x10^23)؛ الكتلة المولية هي كتلة 1 مول من الجزيئات بالجرام.",
        "zh": "阿伏加德罗数是 1 摩尔中的粒子数 (6.02x10^23)；摩尔质量是 1 摩尔颗粒的质量（以克为单位）。",
        "ku": "Hejmara Avogadro hejmara keriyên di 1 molê de ye (6,02x10^23); girseya molar girseya bi gramên 1 mole keriyan e."
      }
    },
    {
      "id": "u06-c06",
      "conceptA": {
        "tr": "Normal Koşullar (NK)",
        "en": "Normal Conditions (NC)",
        "de": "Normale Bedingungen (NC)",
        "fr": "Conditions normales (NC)",
        "ru": "Нормальные условия (NC)",
        "ar": "الظروف العادية (NC)",
        "zh": "正常条件 (NC)",
        "ku": "Şertên Normal (NC)"
      },
      "conceptB": {
        "tr": "Oda Koşulları (Standart Şartlar)",
        "en": "Room Conditions (Standard Conditions)",
        "de": "Zimmerkonditionen (Standardkonditionen)",
        "fr": "Conditions des chambres (Conditions standards)",
        "ru": "Условия в номере (стандартные условия)",
        "ar": "شروط الغرفة (الشروط القياسية)",
        "zh": "房间条件（标准条件）",
        "ku": "Mercên Odeyê (Şertên Standard)"
      },
      "distinction": {
        "tr": "NK 0 °C ve 1 atm olup 1 mol gaz 22.4 L dir; Oda koşulları 25 °C ve 1 atm olup 1 mol gaz 24.5 L dir.",
        "en": "NK is 0 °C and 1 atm and 1 mole of gas is 22.4 L; Room conditions are 25 °C and 1 atm, and 1 mole of gas is 24.5 L.",
        "de": "NK ist 0 °C und 1 atm und 1 Mol Gas ist 22,4 L; Die Raumbedingungen betragen 25 °C und 1 atm, und 1 Mol Gas entspricht 24,5 l.",
        "fr": "NK vaut 0 °C et 1 atm et 1 mole de gaz valent 22,4 L ; Les conditions ambiantes sont de 25 °C et 1 atm, et 1 mole de gaz équivaut à 24,5 L.",
        "ru": "NK – 0 °С и 1 атм, 1 моль газа – 22,4 л; Комнатные условия: 25°С и 1 атм, 1 моль газа равен 24,5 л.",
        "ar": "NK هي 0 درجة مئوية و1 ضغط جوي و1 مول من الغاز يساوي 22.4 لتر؛ ظروف الغرفة هي 25 درجة مئوية و1 ضغط جوي، و1 مول من الغاز يساوي 24.5 لترًا.",
        "zh": "NK 为 0 °C 和 1 atm，1 摩尔气体为 22.4 L；室内条件为 25 °C 和 1 atm，1 摩尔气体为 24.5 L。",
        "ku": "NK 0 °C û 1 atm û 1 mol gaz 22,4 L e; Şertên odeyê 25 °C û 1 atm, û 1 mol gaz 24,5 L e."
      }
    },
    {
      "id": "u06-c07",
      "conceptA": {
        "tr": "Bağıl Atom Kütlesi",
        "en": "Relative Atomic Mass",
        "de": "Relative Atommasse",
        "fr": "Masse atomique relative",
        "ru": "Относительная атомная масса",
        "ar": "الكتلة الذرية النسبية",
        "zh": "相对原子质量",
        "ku": "Girseya Atomî ya nisbî"
      },
      "conceptB": {
        "tr": "Gerçek Atom Kütlesi",
        "en": "Actual Atomic Mass",
        "de": "Tatsächliche Atommasse",
        "fr": "Masse atomique réelle",
        "ru": "Фактическая атомная масса",
        "ar": "الكتلة الذرية الفعلية",
        "zh": "实际原子质量",
        "ku": "Komkujiya Atomî ya Rastî"
      },
      "distinction": {
        "tr": "Bağıl atom kütlesi Karbon-12 ye göre birimsiz orandır; gerçek atom kütlesi 1 tek atomun gram cinsinden kütlesidir (MA / NA).",
        "en": "Relative atomic mass is the unitless ratio relative to Carbon-12; The true atomic mass is the mass in grams of 1 single atom (MA/NA).",
        "de": "Die relative Atommasse ist das einheitenlose Verhältnis relativ zu Kohlenstoff-12; Die wahre Atommasse ist die Masse eines einzelnen Atoms (MA/NA) in Gramm.",
        "fr": "La masse atomique relative est le rapport sans unité par rapport au carbone 12 ; La véritable masse atomique est la masse en grammes d’un seul atome (MA/NA).",
        "ru": "Относительная атомная масса — это безразмерное соотношение по отношению к углероду-12; Истинная атомная масса — это масса одного атома в граммах (MA/NA).",
        "ar": "الكتلة الذرية النسبية هي النسبة غير الوحدة بالنسبة للكربون-12؛ الكتلة الذرية الحقيقية هي الكتلة بالجرام لذرة واحدة (MA/NA).",
        "zh": "相对原子质量是相对于碳12的无单位比率；真实原子质量是 1 个单原子的质量（MA/NA），以克为单位。",
        "ku": "Girseya atomê ya têkildar rêjeya bê yekîneya ku bi Karbon-12 ve girêdayî ye; Girseya atomê ya rastîn girseya di gramên 1 atomê yekane (MA/NA) de ye."
      }
    },
    {
      "id": "u06-c08",
      "conceptA": {
        "tr": "Atom-Gram",
        "en": "Atom-Gram",
        "de": "Atom-Gramm",
        "fr": "Atome-gramme",
        "ru": "Атом-грамм",
        "ar": "ذرة جرام",
        "zh": "原子图谱",
        "ku": "Atom-Gram"
      },
      "conceptB": {
        "tr": "Molekül-Gram",
        "en": "Molecule-Gram",
        "de": "Molekülgramm",
        "fr": "Molécule-gramme",
        "ru": "Молекула-грамм",
        "ar": "جزيء غرام",
        "zh": "分子图",
        "ku": "Molekul-Gram"
      },
      "distinction": {
        "tr": "Atom-gram 1 mol atom anlamına gelir; molekül-gram 1 mol kovalent molekül anlamına gelir.",
        "en": "Atom-gram means 1 mole of atoms; molecule-gram means 1 mole of covalent molecules.",
        "de": "Atomgramm bedeutet 1 Mol Atome; Molekülgramm bedeutet 1 Mol kovalente Moleküle.",
        "fr": "Atome-gramme signifie 1 mole d'atomes ; molécule-gramme signifie 1 mole de molécules covalentes.",
        "ru": "Атом-грамм означает 1 моль атомов; Молекула-грамм означает 1 моль ковалентных молекул.",
        "ar": "Atom-gram يعني 1 مول من الذرات؛ جزيء جرام يعني 1 مول من الجزيئات التساهمية.",
        "zh": "原子克是指1摩尔原子；分子克是指1摩尔共价分子。",
        "ku": "Atom-gram tê wateya 1 mol atoman; molekul-gram tê wateya 1 molek molekulên kovalent."
      }
    }
  ],
  "sequences": [
    {
      "id": "u06-s01",
      "title": {
        "tr": "Mol Hesaplama Adımları",
        "en": "Mole Calculation Steps",
        "de": "Schritte zur Mole-Berechnung",
        "fr": "Étapes de calcul de la taupe",
        "ru": "Этапы расчета моля",
        "ar": "خطوات حساب المول",
        "zh": "摩尔计算步骤",
        "ku": "Pêngavên Hesabkirina Mole"
      },
      "steps": [
        {
          "tr": "Verilen kütleyi belirle",
          "en": "Determine the given mass",
          "de": "Bestimmen Sie die gegebene Masse",
          "fr": "Déterminer la masse donnée",
          "ru": "Определить заданную массу",
          "ar": "تحديد الكتلة المعطاة",
          "zh": "确定给定质量",
          "ku": "Girseya diyarkirî diyar bikin"
        },
        {
          "tr": "Bileşiğin mol kütlesini (MA) hesapla",
          "en": "Calculate the molar mass (MA) of the compound",
          "de": "Berechnen Sie die Molmasse (MA) der Verbindung",
          "fr": "Calculer la masse molaire (MA) du composé",
          "ru": "Рассчитайте молярную массу (МА) соединения.",
          "ar": "احسب الكتلة المولية (MA) للمركب",
          "zh": "计算化合物的摩尔质量 (MA)",
          "ku": "Girseya molarê (MA) ya pêkhateyê hesab bikin"
        },
        {
          "tr": "n = m / MA formülünü uygula",
          "en": "Apply the formula n = m / MA",
          "de": "Wenden Sie die Formel n = m / MA an",
          "fr": "Appliquer la formule n = m / MA",
          "ru": "Примените формулу n = m/MA",
          "ar": "قم بتطبيق الصيغة n = m / MA",
          "zh": "应用公式 n = m / MA",
          "ku": "Formula n = m / MA bicîh bikin"
        },
        {
          "tr": "İstenen tanecik veya hacme dönüştür",
          "en": "Convert to desired particle or volume",
          "de": "Konvertieren Sie in das gewünschte Partikel oder Volumen",
          "fr": "Convertir en particule ou en volume souhaité",
          "ru": "Преобразование в желаемую частицу или объем",
          "ar": "تحويل إلى الجسيم المطلوب أو الحجم",
          "zh": "转换为所需的颗粒或体积",
          "ku": "Veguhezînin perçek an hêjmara xwestinê"
        }
      ]
    },
    {
      "id": "u06-s02",
      "title": {
        "tr": "Mol Hesaplama Algoritması",
        "en": "Mole Calculation Algorithm",
        "de": "Algorithmus zur Mole-Berechnung",
        "fr": "Algorithme de calcul de taupe",
        "ru": "Алгоритм расчета моля",
        "ar": "خوارزمية حساب الخلد",
        "zh": "摩尔计算算法",
        "ku": "Algorîtmaya Hesabkirina Mole"
      },
      "steps": [
        {
          "tr": "Verilen maddenin kütlesi belirlenir",
          "en": "The mass of the given substance is determined",
          "de": "Die Masse des gegebenen Stoffes wird bestimmt",
          "fr": "La masse de la substance donnée est déterminée",
          "ru": "Массу данного вещества определяют",
          "ar": "يتم تحديد كتلة المادة المعطاة",
          "zh": "确定给定物质的质量",
          "ku": "Girseya maddeya diyarkirî tê diyarkirin"
        },
        {
          "tr": "Periyodik tablodan mol kütlesi hesaplanır",
          "en": "Calculate molar mass from the periodic table",
          "de": "Berechnen Sie die Molmasse aus dem Periodensystem",
          "fr": "Calculer la masse molaire à partir du tableau périodique",
          "ru": "Рассчитать молярную массу по таблице Менделеева",
          "ar": "حساب الكتلة المولية من الجدول الدوري",
          "zh": "从元素周期表计算摩尔质量",
          "ku": "Girseya molarê ji tabloya peryodîk hesab bike"
        },
        {
          "tr": "n = m / MA formülüyle mol sayısı bulunur",
          "en": "The number of moles is found with the formula n = m / MA",
          "de": "Die Anzahl der Mol wird mit der Formel n = m / MA ermittelt",
          "fr": "Le nombre de taupes se trouve avec la formule n = m / MA",
          "ru": "Количество молей находится по формуле n = m/MA",
          "ar": "تم العثور على عدد الشامات بالصيغة n = m / MA",
          "zh": "摩尔数的计算公式为 n = m / MA",
          "ku": "Hejmara molan bi formula n = m / MA tê dîtin"
        },
        {
          "tr": "NK da hacim için mol 22.4 ile çarpılır",
          "en": "In NK, moles are multiplied by 22.4 for volume.",
          "de": "In NK werden Mol für das Volumen mit 22,4 multipliziert.",
          "fr": "En NK, les taupes sont multipliées par 22,4 pour le volume.",
          "ru": "В НК родинки умножают на 22,4 для объема.",
          "ar": "في NK، يتم ضرب الشامات بـ 22.4 للحجم.",
          "zh": "在 NK 中，摩尔乘以 22.4 即可得到体积。",
          "ku": "Li NK, mol ji bo 22.4-ê têne zêdekirin."
        }
      ]
    },
    {
      "id": "u06-s03",
      "title": {
        "tr": "Sabit Oranlar Kanunu Uygulaması",
        "en": "Application of the Law of Fixed Proportions",
        "de": "Anwendung des Gesetzes der festen Proportionen",
        "fr": "Application de la loi des proportions fixes",
        "ru": "Применение закона фиксированных пропорций",
        "ar": "تطبيق قانون النسب الثابتة",
        "zh": "固定比例定律的应用",
        "ku": "Sepandina Qanûna Rêjeyên Sabit"
      },
      "steps": [
        {
          "tr": "Bileşiği oluşturan elementlerin kütleleri ölçülür",
          "en": "The masses of the elements that make up the compound are measured",
          "de": "Die Massen der Elemente, aus denen die Verbindung besteht, werden gemessen",
          "fr": "Les masses des éléments qui composent le composé sont mesurées",
          "ru": "Измеряют массы элементов, входящих в состав соединения.",
          "ar": "يتم قياس كتل العناصر التي يتكون منها المركب",
          "zh": "测量组成化合物的元素的质量",
          "ku": "Girseyên hêmanên ku pêkhatî pêk tînin têne pîvandin"
        },
        {
          "tr": "Kütlece birleşme oranı mX / mY belirlenir",
          "en": "The incorporation rate by mass is determined mX/mY",
          "de": "Die Masseneinbaurate wird mX/mY bestimmt",
          "fr": "Le taux d'incorporation massique est déterminé mX/mY",
          "ru": "Массовая скорость включения определяется мХ/мГ.",
          "ar": "يتم تحديد معدل التأسيس بالكتلة mX/mY",
          "zh": "质量掺入率由 mX/mY 确定",
          "ku": "Rêjeya tevlêbûnê bi girseyê mX/mY tê destnîşankirin"
        },
        {
          "tr": "Verilen reaktif miktarları orana göre kontrol edilir",
          "en": "The given reagent amounts are controlled according to the ratio",
          "de": "Die angegebenen Reagenzienmengen werden verhältnismäßig gesteuert",
          "fr": "Les quantités de réactifs données sont contrôlées en fonction du rapport",
          "ru": "Задаваемые количества реагентов контролируют по соотношению",
          "ar": "يتم التحكم في كميات الكاشف المعطاة وفقًا للنسبة",
          "zh": "根据比例控制给定的试剂量",
          "ku": "Mîqdarên reagentê yên diyarkirî li gorî rêjeyê têne kontrol kirin"
        },
        {
          "tr": "Oluşan bileşik kütlesi kütlenin korunumundan bulunur",
          "en": "The mass of the resulting compound is found from conservation of mass",
          "de": "Die Masse der resultierenden Verbindung ergibt sich aus der Massenerhaltung",
          "fr": "La masse du composé résultant est obtenue à partir de la conservation de la masse",
          "ru": "Масса полученного соединения находится из закона сохранения массы",
          "ar": "تم العثور على كتلة المركب الناتج من حفظ الكتلة",
          "zh": "所得化合物的质量可通过质量守恒求出",
          "ku": "Girseya pêkhateya encam ji parastina girseyê tê dîtin"
        }
      ]
    },
    {
      "id": "u06-s04",
      "title": {
        "tr": "Katlı Oranlar Denetimi",
        "en": "Multiple Ratios Control",
        "de": "Steuerung mehrerer Verhältnisse",
        "fr": "Contrôle de rapports multiples",
        "ru": "Множественный контроль соотношений",
        "ar": "التحكم في النسب المتعددة",
        "zh": "多重比率控制",
        "ku": "Kontrola Rêjeyên Pirjimar"
      },
      "steps": [
        {
          "tr": "Aynı iki elementten oluşan iki farklı bileşik yazılır",
          "en": "Two different compounds consisting of the same two elements are written",
          "de": "Es werden zwei verschiedene Verbindungen geschrieben, die aus denselben zwei Elementen bestehen",
          "fr": "Deux composés différents constitués des deux mêmes éléments s'écrivent",
          "ru": "Записаны два разных соединения, состоящие из одних и тех же двух элементов.",
          "ar": "يتم كتابة مركبين مختلفين يتكونان من نفس العنصرين",
          "zh": "写出由相同的两个元素组成的两种不同的化合物",
          "ku": "Du pêkhateyên cuda ku ji heman du hêmanan pêk tên têne nivîsandin"
        },
        {
          "tr": "Elementlerden birinin kütlesi eşitlenir",
          "en": "The mass of one of the elements becomes equal",
          "de": "Die Masse eines der Elemente wird gleich",
          "fr": "La masse de l'un des éléments devient égale",
          "ru": "Масса одного из элементов становится равной",
          "ar": "تصبح كتلة أحد العناصر متساوية",
          "zh": "其中一个元素的质量变得相等",
          "ku": "Girseya yek ji hêmanan dibe yek"
        },
        {
          "tr": "Diğer elementin değişen kütleleri oranlanır",
          "en": "The varying masses of the other element are proportioned",
          "de": "Die unterschiedlichen Massen des anderen Elements werden proportioniert",
          "fr": "Les masses variables de l'autre élément sont proportionnées",
          "ru": "Различные массы другого элемента пропорциональны",
          "ar": "تتناسب الكتل المتغيرة للعنصر الآخر",
          "zh": "其他元素的不同质量成比例",
          "ku": "Girseyên cihêreng ên hêmanên din bi rêje ne"
        },
        {
          "tr": "Basit tam sayılı katlı oran doğrulanır",
          "en": "Simple integer multiple ratio is verified",
          "de": "Das einfache ganzzahlige Vielfachverhältnis wird überprüft",
          "fr": "Le rapport multiple entier simple est vérifié",
          "ru": "Проверено простое целочисленное кратное отношение",
          "ar": "يتم التحقق من نسبة عدد صحيح بسيط",
          "zh": "简单的整数倍比率被验证",
          "ku": "Rêjeya pirjimar a sade tê verast kirin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u06-twin01",
      "stem": {
        "tr": "Normal koşullarda (0 °C, 1 atm) 5.6 litre hacim kaplayan C2H4 gazı kaç gramdır? (C: 12, H: 1)",
        "en": "How many grams of C2H4 gas occupying 5.6 liters of volume under normal conditions (0 °C, 1 atm)? (C:12, H:1)",
        "de": "Wie viele Gramm C2H4-Gas nehmen unter normalen Bedingungen (0 °C, 1 atm) ein Volumen von 5,6 Litern ein? (C:12, H:1)",
        "fr": "Combien de grammes de gaz C2H4 occupent 5,6 litres de volume dans des conditions normales (0 °C, 1 atm) ? (C:12, H:1)",
        "ru": "Сколько граммов газа C2H4 занимает объем 5,6 л при нормальных условиях (0 °С, 1 атм)? (К:12, Ч:1)",
        "ar": "ما عدد جرامات غاز C2H4 التي تشغل 5.6 لترًا من الحجم في الظروف العادية (0 درجة مئوية، 1 ضغط جوي)؟ (ج: 12، ح: 1)",
        "zh": "在正常条件下（0℃，1atm），5.6升体积中含有多少克C2H4气体？ （中：12，高：1）",
        "ku": "Di şert û mercên normal de (0 °C, 1 atm) çend gram gaza C2H4 5,6 lître qebar digire? (C:12, H:1)"
      },
      "options": [
        {
          "tr": "7.0 g",
          "en": "7.0g",
          "de": "7,0g",
          "fr": "7,0 g",
          "ru": "7,0 г",
          "ar": "7.0 جرام",
          "zh": "7.0克",
          "ku": "7.0 g"
        },
        {
          "tr": "14.0 g",
          "en": "14.0g",
          "de": "14,0g",
          "fr": "14,0g",
          "ru": "14,0 г",
          "ar": "14.0 جرام",
          "zh": "14.0克",
          "ku": "14,0 g"
        },
        {
          "tr": "28.0 g",
          "en": "28.0g",
          "de": "28,0g",
          "fr": "28,0g",
          "ru": "28,0 г",
          "ar": "28.0 جرام",
          "zh": "28.0克",
          "ku": "28,0 g"
        },
        {
          "tr": "3.5 g",
          "en": "3.5g",
          "de": "3,5g",
          "fr": "3,5g",
          "ru": "3,5 г",
          "ar": "3.5 جرام",
          "zh": "3.5克",
          "ku": "3,5 g"
        },
        {
          "tr": "56.0 g",
          "en": "56.0g",
          "de": "56,0g",
          "fr": "56,0g",
          "ru": "56,0 г",
          "ar": "56.0 جرام",
          "zh": "56.0克",
          "ku": "56,0 g"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "n = 5.6 / 22.4 = 0.25 mol. C2H4 mol kütlesi = 2*12 + 4*1 = 28 g/mol. m = 0.25 * 28 = 7.0 gram.",
        "en": "n = 5.6 / 22.4 = 0.25 mol. C2H4 molar mass = 2*12 + 4*1 = 28 g/mol. m = 0.25 * 28 = 7.0 grams.",
        "de": "n = 5,6 / 22,4 = 0,25 mol. C2H4-Molmasse = 2*12 + 4*1 = 28 g/mol. m = 0,25 * 28 = 7,0 Gramm.",
        "fr": "n = 5,6 / 22,4 = 0,25 mole. Masse molaire C2H4 = 2*12 + 4*1 = 28 g/mol. m = 0,25 * 28 = 7,0 grammes.",
        "ru": "n = 5,6/22,4 = 0,25 мол. Молярная масса C2H4 = 2*12 + 4*1 = 28 г/моль. м = 0,25*28 = 7,0 грамм.",
        "ar": "ن = 5.6 / 22.4 = 0.25 مول. الكتلة المولية C2H4 = 2*12 + 4*1 = 28 جم/مول. م = 0.25 * 28 = 7.0 جرام.",
        "zh": "n = 5.6 / 22.4 = 0.25 摩尔。 C2H4 摩尔质量 = 2*12 + 4*1 = 28 g/mol。 m = 0.25 * 28 = 7.0 克。",
        "ku": "n = 5,6 / 22,4 = 0,25 mol. Girseya molê ya C2H4 = 2*12 + 4*1 = 28 g/mol. m = 0,25 * 28 = 7,0 gram."
      }
    },
    {
      "id": "u06-twin02",
      "stem": {
        "tr": "Aşağıdaki bileşik çiftlerinden hangisi arasında Katlı Oranlar Kanunu uygulanabilir?",
        "en": "Between which of the following pairs of compounds can the Law of Multiple Proportions be applied?",
        "de": "Zwischen welchen der folgenden Verbindungspaare kann das Gesetz der multiplen Proportionen angewendet werden?",
        "fr": "Entre quelles paires de composés suivantes la loi des proportions multiples peut-elle être appliquée ?",
        "ru": "К какой из следующих пар веществ можно применить закон кратных пропорций?",
        "ar": "أي من أزواج المركبات التالية يمكن تطبيق قانون النسب المتعددة؟",
        "zh": "下列哪对化合物之间可以应用倍数比例定律？",
        "ku": "Di navbera kîjan cotên pêkhateyên jêrîn de Qanûna Rêjeyên Pirjimar dikare were sepandin?"
      },
      "options": [
        {
          "tr": "CO ve CO2",
          "en": "CO and CO2",
          "de": "CO und CO2",
          "fr": "CO et CO2",
          "ru": "CO и CO2",
          "ar": "CO و CO2",
          "zh": "CO 和 CO2",
          "ku": "CO û CO2"
        },
        {
          "tr": "CH4 ve C2H4",
          "en": "CH4 and C2H4",
          "de": "CH4 und C2H4",
          "fr": "CH4 et C2H4",
          "ru": "CH4 и C2H4",
          "ar": "CH4 و C2H4",
          "zh": "CH4 和 C2H4",
          "ku": "CH4 û C2H4"
        },
        {
          "tr": "H2SO4 ve H2SO3",
          "en": "H2SO4 and H2SO3",
          "de": "H2SO4 und H2SO3",
          "fr": "H2SO4 et H2SO3",
          "ru": "H2SO4 и H2SO3",
          "ar": "H2SO4 و H2SO3",
          "zh": "H2SO4 和 H2SO3",
          "ku": "H2SO4 û H2SO3"
        },
        {
          "tr": "NaCl ve KBr",
          "en": "NaCl and KBr",
          "de": "NaCl und KBr",
          "fr": "NaCl et KBr",
          "ru": "NaCl и KBr",
          "ar": "NaCl و KBr",
          "zh": "NaCl 和 KBr",
          "ku": "NaCl û KBr"
        },
        {
          "tr": "C2H6 ve C3H8",
          "en": "C2H6 and C3H8",
          "de": "C2H6 und C3H8",
          "fr": "C2H6 et C3H8",
          "ru": "C2H6 и C3H8",
          "ar": "C2H6 و C3H8",
          "zh": "C2H6 和 C3H8",
          "ku": "C2H6 û C3H8"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "CO ve CO2 aynı iki elementten oluşur, basit formülleri farklıdır ve 2 element içerir. Sabit C miktarına karşılık O lar arasındaki katlı oran 1/2 dir.",
        "en": "CO and CO2 consist of the same two elements, their simple formulas are different and they contain 2 elements. The multiple ratio between Os in response to a fixed amount of C is 1/2.",
        "de": "CO und CO2 bestehen aus den gleichen zwei Elementen, ihre einfachen Formeln sind unterschiedlich und sie enthalten 2 Elemente. Das Mehrfachverhältnis zwischen Os als Reaktion auf eine feste Menge an C beträgt 1/2.",
        "fr": "Le CO et le CO2 sont constitués des deux mêmes éléments, leurs formules simples sont différentes et ils contiennent 2 éléments. Le rapport multiple entre Os en réponse à une quantité fixe de C est de 1/2.",
        "ru": "CO и CO2 состоят из одних и тех же двух элементов, их простые формулы различны и они содержат по два элемента. Множественное соотношение между Os в ответ на фиксированное количество C составляет 1/2.",
        "ar": "يتكون ثاني أكسيد الكربون وثاني أكسيد الكربون من نفس العنصرين، وتختلف صيغهما البسيطة، حيث تحتويان على عنصرين. النسبة المتعددة بين Os استجابة لكمية ثابتة من C هي 1/2.",
        "zh": "CO和CO2由相同的两种元素组成，它们的简单化学式不同，并且含有两种元素。 Os 与固定量 C 的响应倍数比为 1/2。",
        "ku": "CO û CO2 ji heman du hêmanan pêk tên, formulên wan ên sade cuda ne û 2 hêmanan dihewîne. Rêjeya piralî ya di navbera Os-ê de di bersiva mîqdarek sabît a C de 1/2 ye."
      }
    },
    {
      "id": "u06-twin03",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimyanın Temel Kanunları ve Mol Kavramı konusunu işlerken Kütlenin Korunumu (Lavoisier) üzerine sorduğu sorunun doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During a laboratory inquiry on Basic Chemical Laws & The Mole, which statement regarding Conservation of Mass (Lavoisier) represents the correct answer?",
        "de": "Welche Aussage zu Erhaltung der Masse (Lavoisier) stellt im Kontext von Chemische Grundgesetze & Mol die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l étude expérimentale de Lois Fondamentales & Mole, quelle proposition sur Conservation de la messe (Lavoisier) constitue la réponse exacte?",
        "ru": "В ходе лабораторного изучения темы «Основные законы химии и моль», какой ответ относительно «Сохранение массы (Лавуазье)» является правильным?",
        "ar": "أثناء دراسة موضوع \"قوانين الكيمياء الأساسية والمول\" مخبرياً، أي إجابة بخصوص \"حفظ الكتلة (لافوازييه)\" تمثل الإجابة الصحيحة؟",
        "zh": "在“化学基本定律与摩尔”实验探究与教学分析中，针对“质量守恒（拉瓦锡）”所提问题的正确答案是？",
        "ku": "Di lêkolîna ezmûnî ya li ser \"Zagonên Bingehîn ên Kîmyayê û Mol\" de, kîjan bersiv derbarê \"Parastina Komkujiyê (Lavoisier)\" de rast e?"
      },
      "options": [
        {
          "tr": "Oda koşullarında (25 °C, 1 atm) 1 mol gaz 22.4 L hacim kaplar.",
          "en": "At room conditions (25 °C, 1 atm), 1 mole of gas occupies a volume of 22.4 L.",
          "de": "Bei Raumbedingungen (25 °C, 1 atm) nimmt 1 Mol Gas ein Volumen von 22,4 L ein.",
          "fr": "Dans des conditions ambiantes (25 °C, 1 atm), 1 mole de gaz occupe un volume de 22,4 L.",
          "ru": "В комнатных условиях (25°С, 1 атм) 1 моль газа занимает объём 22,4 л.",
          "ar": "في ظروف الغرفة (25 درجة مئوية، 1 ضغط جوي)، يشغل 1 مول من الغاز حجمًا قدره 22.4 لترًا.",
          "zh": "在室温条件下（25 °C，1 atm），1 摩尔气体占据的体积为 22.4 L。",
          "ku": "Di şert û mercên jûreyê de (25 °C, 1 atm), 1 mol gaz qebareya 22,4 L digire."
        },
        {
          "tr": "Eşit hacimdeki gazların kütleleri de daima birbirine eşittir.",
          "en": "The masses of equal volumes of gases are always equal.",
          "de": "Die Massen gleicher Gasvolumina sind immer gleich.",
          "fr": "Les masses de volumes égaux de gaz sont toujours égales.",
          "ru": "Массы равных объемов газов всегда равны.",
          "ar": "كتل الأحجام المتساوية من الغازات متساوية دائمًا.",
          "zh": "等体积气体的质量始终相等。",
          "ku": "Girseyên cildên yeksan ên gazan her dem wek hev in."
        },
        {
          "tr": "Katlı Oranlar Kanunu (Dalton): İki element birden fazla bileşik oluşturuyorsa elementlerden birinin sabit miktarına karşılık diğerinin değişen miktarları arasında tam sayılı katlı oran vardır.",
          "en": "Law of Multiple Proportions (Dalton): If two elements form more than one compound, there is an integer multiple ratio between the fixed amount of one element and the changing amounts of the other.",
          "de": "Gesetz der multiplen Proportionen (Dalton): Wenn zwei Elemente mehr als eine Verbindung bilden, besteht ein ganzzahliges Vielfaches des Verhältnisses zwischen der festen Menge eines Elements und den sich ändernden Mengen des anderen.",
          "fr": "Loi des proportions multiples (Dalton) : Si deux éléments forment plus d'un composé, il existe un rapport multiple entier entre la quantité fixe d'un élément et les quantités variables de l'autre.",
          "ru": "Закон множественных пропорций (Дальтона): если два элемента образуют более одного соединения, существует целое кратное соотношение между фиксированным количеством одного элемента и изменяющимся количеством другого.",
          "ar": "قانون النسب المتعددة (دالتون): إذا كون عنصران أكثر من مركب واحد، فإن هناك نسبة صحيحة متعددة بين الكمية الثابتة لعنصر واحد والكميات المتغيرة للعنصر الآخر.",
          "zh": "多重比例定律（道尔顿）：如果两种元素形成多于一种化合物，则一种元素的固定量与另一种元素的变化量之间存在整数倍比例。",
          "ku": "Zagona Rêjeyên Pirjimar (Dalton): Ger du hêman ji yek pêkhatî zêdetir pêk bînin, di navbera mîqdara sabît a hêmanekê û mîqdarên guheztina yên din de rêjeyek pirjimar heye."
        },
        {
          "tr": "1 molekül-gram H2O ifadesi 1 tane su molekülünü belirtir.",
          "en": "The expression 1 molecule-gram H2O indicates 1 water molecule.",
          "de": "Der Ausdruck 1 Molekül-Gramm H2O bedeutet 1 Wassermolekül.",
          "fr": "L’expression 1 molécule-gramme H2O indique 1 molécule d’eau.",
          "ru": "Выражение 1 молекула-грамм H2O указывает на 1 молекулу воды.",
          "ar": "يشير التعبير 1 جزيء جرام H2O إلى جزيء ماء واحد.",
          "zh": "表述1分子克H2O表示1个水分子。",
          "ku": "Gotina 1 molekul-gram H2O 1 molekula avê nîşan dide."
        },
        {
          "tr": "0 °C de 1 mol sıvı su 22.4 litre hacim kaplar.",
          "en": "At 0 °C, 1 mole of liquid water occupies 22.4 liters of volume.",
          "de": "Bei 0 °C nimmt 1 Mol flüssiges Wasser 22,4 Liter Volumen ein.",
          "fr": "À 0 °C, 1 mole d’eau liquide occupe 22,4 litres de volume.",
          "ru": "При температуре 0°С 1 моль жидкой воды занимает 22,4 литра объёма.",
          "ar": "عند 0 درجة مئوية، يشغل 1 مول من الماء السائل 22.4 لترًا من الحجم.",
          "zh": "在 0 °C 时，1 摩尔液态水占据 22.4 升体积。",
          "ku": "Di 0 °C de, 1 mol ava şil 22,4 lître qebar digire."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Katlı Oranlar Kanunu (Dalton): İki element birden fazla bileşik oluşturuyorsa elementlerden birinin sabit miktarına karşılık diğerinin değişen miktarları arasında tam sayılı katlı oran vardır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Law of Multiple Proportions (Dalton): If two elements form more than one compound, there is an integer multiple ratio between the fixed amount of one element and the changing amounts of the other.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Gesetz der multiplen Proportionen (Dalton): Wenn zwei Elemente mehr als eine Verbindung bilden, besteht ein ganzzahliges Vielfaches des Verhältnisses zwischen der festen Menge eines Elements und den sich ändernden Mengen des anderen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Loi des proportions multiples (Dalton) : Si deux éléments forment plus d'un composé, il existe un rapport multiple entier entre la quantité fixe d'un élément et les quantités variables de l'autre.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Закон множественных пропорций (Дальтона): если два элемента образуют более одного соединения, существует целое кратное соотношение между фиксированным количеством одного элемента и изменяющимся количеством другого.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قانون النسب المتعددة (دالتون): إذا كون عنصران أكثر من مركب واحد، فإن هناك نسبة صحيحة متعددة بين الكمية الثابتة لعنصر واحد والكميات المتغيرة للعنصر الآخر.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“多重比例定律（道尔顿）：如果两种元素形成多于一种化合物，则一种元素的固定量与另一种元素的变化量之间存在整数倍比例。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Zagona Rêjeyên Pirjimar (Dalton): Ger du hêman ji yek pêkhatî zêdetir pêk bînin, di navbera mîqdara sabît a hêmanekê û mîqdarên guheztina yên din de rêjeyek pirjimar heye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u06-twin04",
      "stem": {
        "tr": "Kimya dersinde Kimyanın Temel Kanunları ve Mol Kavramı ünitesi incelenirken Sabit Oranlar (Proust) ile ilgili ileri sürülen aşağıdaki yargılardan hangisi bilimsel gerçektir?",
        "en": "When analyzing the unit Basic Chemical Laws & The Mole, which of the following propositions concerning Fixed Proportions (Proust) is a verified scientific fact?",
        "de": "Bei der Untersuchung von Chemische Grundgesetze & Mol: Welche Behauptung bezüglich Feste Proportionen (Proust) entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l unité Lois Fondamentales & Mole, laquelle des affirmations suivantes concernant Proportions fixes (Proust) est un fait scientifique avéré?",
        "ru": "При рассмотрении темы «Основные законы химии и моль», какое из следующих суждений о «Фиксированные пропорции (Пруст)» выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"قوانين الكيمياء الأساسية والمول\"، أي من الأحكام التالية المتعلقة بـ \"النسب الثابتة (بروست)\" تعتبر حقيقة علمية؟",
        "zh": "在系统辨析“化学基本定律与摩尔”核心规律时，下列关于“固定比例（普鲁斯特）”的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Zagonên Bingehîn ên Kîmyayê û Mol\" tê kirin, kîjan daraza li ser \"Rêjeyên sabît (Proust)\" rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Mol sayısı kütle ile mol kütlesinin çarpımına eşittir.",
          "en": "The number of moles is equal to the mass multiplied by the molar mass.",
          "de": "Die Anzahl der Mol ist gleich der Masse multipliziert mit der Molmasse.",
          "fr": "Le nombre de taupes est égal à la masse multipliée par la masse molaire.",
          "ru": "Количество молей равно массе, умноженной на молярную массу.",
          "ar": "عدد المولات يساوي الكتلة مضروبة في الكتلة المولية.",
          "zh": "摩尔数等于质量乘以摩尔质量。",
          "ku": "Hejmara molan bi girseya ku bi girseya molarê ve zêde dibe ye."
        },
        {
          "tr": "Bağıl atom kütlesi hidrojen atomunun ağırlığına tam eşittir.",
          "en": "The relative atomic mass is exactly equal to the weight of the hydrogen atom.",
          "de": "Die relative Atommasse entspricht genau dem Gewicht des Wasserstoffatoms.",
          "fr": "La masse atomique relative est exactement égale au poids de l’atome d’hydrogène.",
          "ru": "Относительная атомная масса в точности равна весу атома водорода.",
          "ar": "الكتلة الذرية النسبية تساوي بالضبط وزن ذرة الهيدروجين.",
          "zh": "相对原子质量恰好等于氢原子的重量。",
          "ku": "Girseya atomê ya nisbî tam bi giraniya atoma hîdrojenê ye."
        },
        {
          "tr": "Gerçek atom kütlesi atomun mol ağırlığına eşittir.",
          "en": "The actual atomic mass is equal to the molar weight of the atom.",
          "de": "Die tatsächliche Atommasse entspricht dem Molgewicht des Atoms.",
          "fr": "La masse atomique réelle est égale au poids molaire de l’atome.",
          "ru": "Фактическая атомная масса равна молярной массе атома.",
          "ar": "الكتلة الذرية الفعلية تساوي الوزن المولي للذرة.",
          "zh": "实际原子质量等于原子的摩尔质量。",
          "ku": "Girseya atomê ya rastîn bi giraniya molarê ya atomê ye."
        },
        {
          "tr": "Basit formülleri aynı olan bileşikler arasında (örn. C2H4 ve C3H6; her ikisi CH2) katlı oran 1 olacağından katlı oran aranmaz.",
          "en": "Between compounds with the same simple formulas (e.g. C2H4 and C3H6; both CH2), the multiple ratio is not required since the multiple ratio will be 1.",
          "de": "Zwischen Verbindungen mit denselben einfachen Formeln (z. B. C2H4 und C3H6; beide CH2) ist das Mehrfachverhältnis nicht erforderlich, da das Mehrfachverhältnis 1 beträgt.",
          "fr": "Entre les composés ayant les mêmes formules simples (par exemple C2H4 et C3H6 ; les deux CH2), le rapport multiple n'est pas requis puisque le rapport multiple sera de 1.",
          "ru": "Между соединениями с одинаковыми простыми формулами (например, C2H4 и C3H6; оба CH2) кратное соотношение не требуется, поскольку кратное соотношение будет равно 1.",
          "ar": "بين المركبات التي لها نفس الصيغ البسيطة (مثل C2H4 وC3H6، وكلاهما CH2)، لا تكون النسبة المتعددة مطلوبة لأن النسبة المتعددة ستكون 1.",
          "zh": "在具有相同简单式的化合物（例如 C2H4 和 C3H6；均为 CH2）之间，不需要倍数比，因为倍数比将为 1。",
          "ku": "Di navbera pêkhateyên bi heman formulên hêsan de (mînak C2H4 û C3H6; her du CH2), rêjeya piralî ne hewce ye ji ber ku rêjeya pirjimar dê 1 be."
        },
        {
          "tr": "Kimyasal tepkimeye giren maddelerin kütleleri katsayılarıyla doğru orantılı olmak zorundadır.",
          "en": "The masses of substances participating in a chemical reaction must be directly proportional to their coefficients.",
          "de": "Die Massen der an einer chemischen Reaktion beteiligten Stoffe müssen direkt proportional zu ihren Koeffizienten sein.",
          "fr": "Les masses de substances participant à une réaction chimique doivent être directement proportionnelles à leurs coefficients.",
          "ru": "Массы веществ, участвующих в химической реакции, должны быть прямо пропорциональны их коэффициентам.",
          "ar": "يجب أن تكون كتل المواد المشاركة في التفاعل الكيميائي متناسبة طرديا مع معاملاتها.",
          "zh": "参与化学反应的物质的质量必须与其系数成正比。",
          "ku": "Girseya maddeyên ku beşdarî reaksiyonên kîmyewî dibin divê rasterast bi rêjeya wan re têkildar bin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Basit formülleri aynı olan bileşikler arasında (örn. C2H4 ve C3H6; her ikisi CH2) katlı oran 1 olacağından katlı oran aranmaz.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Between compounds with the same simple formulas (e.g. C2H4 and C3H6; both CH2), the multiple ratio is not required since the multiple ratio will be 1.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Zwischen Verbindungen mit denselben einfachen Formeln (z. B. C2H4 und C3H6; beide CH2) ist das Mehrfachverhältnis nicht erforderlich, da das Mehrfachverhältnis 1 beträgt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Entre les composés ayant les mêmes formules simples (par exemple C2H4 et C3H6 ; les deux CH2), le rapport multiple n'est pas requis puisque le rapport multiple sera de 1.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Между соединениями с одинаковыми простыми формулами (например, C2H4 и C3H6; оба CH2) кратное соотношение не требуется, поскольку кратное соотношение будет равно 1.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"بين المركبات التي لها نفس الصيغ البسيطة (مثل C2H4 وC3H6، وكلاهما CH2)، لا تكون النسبة المتعددة مطلوبة لأن النسبة المتعددة ستكون 1.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在具有相同简单式的化合物（例如 C2H4 和 C3H6；均为 CH2）之间，不需要倍数比，因为倍数比将为 1。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di navbera pêkhateyên bi heman formulên hêsan de (mînak C2H4 û C3H6; her du CH2), rêjeya piralî ne hewce ye ji ber ku rêjeya pirjimar dê 1 be.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u06-twin05",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimyanın Temel Kanunları ve Mol Kavramı konusundaki temel kimyasal kurallar çerçevesinde Avogadro Sayısı (NA) kavramını en doğru açıklayan ifadedir?",
        "en": "Which of the following most accurately describes Avogadro's Number (NA) within the fundamental principles of Basic Chemical Laws & The Mole?",
        "de": "Welche Aussage beschreibt das Konzept Avogadros Zahl (NA) im Rahmen von Chemische Grundgesetze & Mol am präzisesten?",
        "fr": "Laquelle des propositions suivantes décrit le plus fidèlement Numéro d'Avogadro (NA) selon les lois de Lois Fondamentales & Mole?",
        "ru": "Какое из утверждений наиболее точно описывает понятие «Число Авогадро (NA)» в рамках темы «Основные законы химии и моль»?",
        "ar": "أي مما يلي يعبر بأعلى درجات الدقة عن مفهوم \"رقم أفوجادرو (نسبة غير معلومة)\" ضمن قواعد \"قوانين الكيمياء الأساسية والمول\"؟",
        "zh": "根据“化学基本定律与摩尔”的基本化学原理，下列哪项阐述能最准确地界定“阿伏伽德罗常数 (NA)”这一核心概念？",
        "ku": "Kîjan ji van vebijarkan têgeha \"Hejmara Avogadro (NA)\" di çarçoveya prensîbên \"Zagonên Bingehîn ên Kîmyayê û Mol\" de herî rast rave dike?"
      },
      "options": [
        {
          "tr": "1 tane CO2 molekülü 44 gramdır.",
          "en": "1 CO2 molecule weighs 44 grams.",
          "de": "1 CO2-Molekül wiegt 44 Gramm.",
          "fr": "1 molécule de CO2 pèse 44 grammes.",
          "ru": "1 молекула CO2 весит 44 грамма.",
          "ar": "يزن جزيء ثاني أكسيد الكربون 44 جرامًا.",
          "zh": "1 个 CO2 分子重 44 克。",
          "ku": "1 molekulek CO2 44 gram giran e."
        },
        {
          "tr": "FeO ve Fe2O3 arasında katlı oran yoktur.",
          "en": "There is no multiple ratio between FeO and Fe2O3.",
          "de": "Es gibt kein Mehrfachverhältnis zwischen FeO und Fe2O3.",
          "fr": "Il n’existe pas de rapport multiple entre FeO et Fe2O3.",
          "ru": "Между FeO и Fe2O3 нет кратного соотношения.",
          "ar": "لا توجد نسبة متعددة بين FeO وFe2O3.",
          "zh": "FeO和Fe2O3之间没有倍数比。",
          "ku": "Di navbera FeO û Fe2O3 de rêjeyek pirjimar tune."
        },
        {
          "tr": "0.5 mol CH4 gazı NK da 22.4 L hacim kaplar.",
          "en": "0.5 mol CH4 gas occupies 22.4 L volume in NK.",
          "de": "0,5 mol CH4-Gas nehmen in NK ein Volumen von 22,4 l ein.",
          "fr": "0,5 mole de gaz CH4 occupe un volume de 22,4 L dans NK.",
          "ru": "0,5 моль газа CH4 занимает в НК объем 22,4 л.",
          "ar": "يشغل 0.5 مول من غاز CH4 حجم 22.4 لترًا في NK.",
          "zh": "0.5 mol CH4 气体在 NK 中占据 22.4 L 体积。",
          "ku": "0,5 mol gaza CH4 li NK 22,4 L volga digire."
        },
        {
          "tr": "Kütlenin korunumu kanunu gaz çıkışı olan açık kaplarda da kütle artışı olarak görünür.",
          "en": "The law of conservation of mass also appears as an increase in mass in open containers with gas escaping.",
          "de": "Der Massenerhaltungssatz zeigt sich auch als Massenzunahme in offenen Behältern bei austretendem Gas.",
          "fr": "La loi de conservation de la masse apparaît également comme une augmentation de la masse dans des conteneurs ouverts avec fuite de gaz.",
          "ru": "Закон сохранения массы проявляется и в увеличении массы в открытых емкостях при выходе газа.",
          "ar": "يظهر قانون حفظ الكتلة أيضًا على شكل زيادة في الكتلة في الحاويات المفتوحة مع هروب الغاز.",
          "zh": "质量守恒定律也表现为开放容器中气体逸出时质量的增加。",
          "ku": "Zagona parastina girseyê jî wekî zêdebûna girseyê di konteynirên vekirî yên bi gazê direvin xuya dike."
        },
        {
          "tr": "1 mol tanecik 6.02x10^23 tane tanecik (Avogadro sayısı, NA) içerir.",
          "en": "1 mole of particles contains 6.02x10^23 particles (Avogadro's number, NA).",
          "de": "1 Mol Partikel enthält 6,02x10^23 Partikel (Avogadro-Zahl, NA).",
          "fr": "1 mole de particules contient 6,02x10^23 particules (nombre d'Avogadro, NA).",
          "ru": "В 1 моле частиц содержится 6,02x10^23 частиц (число Авогадро, NA).",
          "ar": "1 مول من الجسيمات يحتوي على 6.02x10^23 جسيم (رقم أفوجادرو، NA).",
          "zh": "1 摩尔粒子包含 6.02x10^23 个粒子（阿伏伽德罗数，NA）。",
          "ku": "Di 1 molê zêran de 6,02x10^23 pirtik hene (hejmara Avogadro, NA)."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"1 mol tanecik 6.02x10^23 tane tanecik (Avogadro sayısı, NA) içerir.\" ifadesidir. 1 mol H2 molekülü 2 mol H atomu içerir!",
        "en": "The correct statement is: \"1 mole of particles contains 6.02x10^23 particles (Avogadro's number, NA).\". 1 mole of H2 molecules contains 2 moles of H atoms!",
        "de": "Die zutreffende Aussage lautet: \"1 Mol Partikel enthält 6,02x10^23 Partikel (Avogadro-Zahl, NA).\". 1 Mol H2-Moleküle enthält 2 Mol H-Atome!",
        "fr": "L'affirmation exacte est: \"1 mole de particules contient 6,02x10^23 particules (nombre d'Avogadro, NA).\". 1 mole de molécules H2 contient 2 moles d’atomes H !",
        "ru": "Правильное утверждение: «В 1 моле частиц содержится 6,02x10^23 частиц (число Авогадро, NA).». В 1 моле молекул H2 содержится 2 моля атомов H!",
        "ar": "العبارة الصحيحة هي: \"1 مول من الجسيمات يحتوي على 6.02x10^23 جسيم (رقم أفوجادرو، NA).\". 1 مول من جزيئات H2 يحتوي على 2 مول من ذرات H!",
        "zh": "正确表述为：“1 摩尔粒子包含 6.02x10^23 个粒子（阿伏伽德罗数，NA）。”。1摩尔H2分子含有2摩尔H原子！",
        "ku": "Gotina rast ev e: \"Di 1 molê zêran de 6,02x10^23 pirtik hene (hejmara Avogadro, NA).\". Di 1 molek molekulên H2 de 2 mol atomên H hene!"
      }
    },
    {
      "id": "u06-twin06",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimyanın Temel Kanunları ve Mol Kavramı sorularında karşılaşılan Normal Koşullar (NK) konusunda doğru olan yargı hangisidir?",
        "en": "In standard university entrance exams covering Basic Chemical Laws & The Mole, which assertion regarding Normal Conditions (NC) is correct?",
        "de": "Welche Feststellung bezüglich Normale Bedingungen (NC) ist nach den chemischen Gesetzmäßigkeiten von Chemische Grundgesetze & Mol richtig?",
        "fr": "Dans les épreuves universitaires portant sur Lois Fondamentales & Mole, quelle affirmation concernant Conditions normales (NC) est correcte?",
        "ru": "В экзаменационных заданиях по теме «Основные законы химии и моль», какое положение относительно «Нормальные условия (NC)» является верным?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"قوانين الكيمياء الأساسية والمول\"، أي حكم متعلق بـ \"الظروف العادية (NC)\" يعتبر صحيحاً؟",
        "zh": "在高考“化学基本定律与摩尔”经典考题中，下列有关“正常条件 (NC)”的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Zagonên Bingehîn ên Kîmyayê û Mol\" de, kîjan daraza li ser \"Şertên Normal (NC)\" rast e?"
      },
      "options": [
        {
          "tr": "Normal koşullarda (0 °C ve 1 atm) 1 mol ideal gaz 22.4 litre hacim kaplar.",
          "en": "Under normal conditions (0 °C and 1 atm), 1 mole of ideal gas occupies 22.4 liters of volume.",
          "de": "Unter normalen Bedingungen (0 °C und 1 atm) nimmt 1 Mol ideales Gas 22,4 Liter Volumen ein.",
          "fr": "Dans des conditions normales (0 °C et 1 atm), 1 mole de gaz parfait occupe 22,4 litres de volume.",
          "ru": "При нормальных условиях (0°С и 1 атм) 1 моль идеального газа занимает 22,4 л объёма.",
          "ar": "في الظروف العادية (0 درجة مئوية و1 ضغط جوي)، يشغل 1 مول من الغاز المثالي 22.4 لترًا من الحجم.",
          "zh": "在正常条件下（0°C和1个大气压），1摩尔理想气体占据22.4升体积。",
          "ku": "Di bin şert û mercên normal de (0 °C û 1 atm), 1 mol gaza îdeal 22,4 lître qebar digire."
        },
        {
          "tr": "Eşit hacimdeki gazların kütleleri de daima birbirine eşittir.",
          "en": "The masses of equal volumes of gases are always equal.",
          "de": "Die Massen gleicher Gasvolumina sind immer gleich.",
          "fr": "Les masses de volumes égaux de gaz sont toujours égales.",
          "ru": "Массы равных объемов газов всегда равны.",
          "ar": "كتل الأحجام المتساوية من الغازات متساوية دائمًا.",
          "zh": "等体积气体的质量始终相等。",
          "ku": "Girseyên cildên yeksan ên gazan her dem wek hev in."
        },
        {
          "tr": "1 molekül-gram H2O ifadesi 1 tane su molekülünü belirtir.",
          "en": "The expression 1 molecule-gram H2O indicates 1 water molecule.",
          "de": "Der Ausdruck 1 Molekül-Gramm H2O bedeutet 1 Wassermolekül.",
          "fr": "L’expression 1 molécule-gramme H2O indique 1 molécule d’eau.",
          "ru": "Выражение 1 молекула-грамм H2O указывает на 1 молекулу воды.",
          "ar": "يشير التعبير 1 جزيء جرام H2O إلى جزيء ماء واحد.",
          "zh": "表述1分子克H2O表示1个水分子。",
          "ku": "Gotina 1 molekul-gram H2O 1 molekula avê nîşan dide."
        },
        {
          "tr": "0 °C de 1 mol sıvı su 22.4 litre hacim kaplar.",
          "en": "At 0 °C, 1 mole of liquid water occupies 22.4 liters of volume.",
          "de": "Bei 0 °C nimmt 1 Mol flüssiges Wasser 22,4 Liter Volumen ein.",
          "fr": "À 0 °C, 1 mole d’eau liquide occupe 22,4 litres de volume.",
          "ru": "При температуре 0°С 1 моль жидкой воды занимает 22,4 литра объёма.",
          "ar": "عند 0 درجة مئوية، يشغل 1 مول من الماء السائل 22.4 لترًا من الحجم.",
          "zh": "在 0 °C 时，1 摩尔液态水占据 22.4 升体积。",
          "ku": "Di 0 °C de, 1 mol ava şil 22,4 lître qebar digire."
        },
        {
          "tr": "Bir bileşikteki elementlerin kütlece birleşme oranı bileşiğin miktarına göre değişir.",
          "en": "The mass ratio of elements in a compound varies depending on the amount of the compound.",
          "de": "Das Massenverhältnis der Elemente in einer Verbindung variiert je nach Menge der Verbindung.",
          "fr": "Le rapport massique des éléments dans un composé varie en fonction de la quantité du composé.",
          "ru": "Массовое соотношение элементов в соединении варьируется в зависимости от количества соединения.",
          "ar": "تختلف نسبة كتلة العناصر في المركب حسب كمية المركب.",
          "zh": "化合物中元素的质量比根据化合物的量而变化。",
          "ku": "Rêjeya girseya hêmanên di pêkhateyek de li gorî mêjera pêkhateyê diguhere."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Normal koşullarda (0 °C ve 1 atm) 1 mol ideal gaz 22.4 litre hacim kaplar.\" ifadesidir. Oda koşullarında 24.5 L dir.",
        "en": "The correct statement is: \"Under normal conditions (0 °C and 1 atm), 1 mole of ideal gas occupies 22.4 liters of volume.\". It is 24.5 L under room conditions.",
        "de": "Die zutreffende Aussage lautet: \"Unter normalen Bedingungen (0 °C und 1 atm) nimmt 1 Mol ideales Gas 22,4 Liter Volumen ein.\". Unter Raumbedingungen beträgt es 24,5 L.",
        "fr": "L'affirmation exacte est: \"Dans des conditions normales (0 °C et 1 atm), 1 mole de gaz parfait occupe 22,4 litres de volume.\". Il fait 24,5 L dans des conditions ambiantes.",
        "ru": "Правильное утверждение: «При нормальных условиях (0°С и 1 атм) 1 моль идеального газа занимает 22,4 л объёма.». В комнатных условиях это 24,5 л.",
        "ar": "العبارة الصحيحة هي: \"في الظروف العادية (0 درجة مئوية و1 ضغط جوي)، يشغل 1 مول من الغاز المثالي 22.4 لترًا من الحجم.\". يبلغ 24.5 لترًا في ظروف الغرفة.",
        "zh": "正确表述为：“在正常条件下（0°C和1个大气压），1摩尔理想气体占据22.4升体积。”。室温下为 24.5 L。",
        "ku": "Gotina rast ev e: \"Di bin şert û mercên normal de (0 °C û 1 atm), 1 mol gaza îdeal 22,4 lître qebar digire.\". Di bin şert û mercên odeyê de 24,5 lître ye."
      }
    },
    {
      "id": "u06-twin07",
      "stem": {
        "tr": "Aşağıda Kimyanın Temel Kanunları ve Mol Kavramı ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre Bağıl Atom Kütlesi ile ilgili hangisi doğrudur?",
        "en": "Based on the fundamental principles of Basic Chemical Laws & The Mole, which statement about Relative Atomic Mass is scientifically accurate?",
        "de": "Auf der Grundlage der Einheit Chemische Grundgesetze & Mol: Welche Aussage über Relative Atommasse ist zutreffend?",
        "fr": "Sur la base des notions fondamentales de Lois Fondamentales & Mole, quelle affirmation relative à Masse atomique relative est exacte?",
        "ru": "На основе фундаментальных положений темы «Основные законы химии и моль», какое суждение о «Относительная атомная масса» верно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"قوانين الكيمياء الأساسية والمول\"، أي عبارة حول \"الكتلة الذرية النسبية\" صحيحة؟",
        "zh": "基于“化学基本定律与摩尔”的基础化学知识体系，下列关于“相对原子质量”的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Zagonên Bingehîn ên Kîmyayê û Mol\", kîjan gotin derbarê \"Girseya Atomî ya nisbî\" de rast e?"
      },
      "options": [
        {
          "tr": "Bağıl atom kütlesi hidrojen atomunun ağırlığına tam eşittir.",
          "en": "The relative atomic mass is exactly equal to the weight of the hydrogen atom.",
          "de": "Die relative Atommasse entspricht genau dem Gewicht des Wasserstoffatoms.",
          "fr": "La masse atomique relative est exactement égale au poids de l’atome d’hydrogène.",
          "ru": "Относительная атомная масса в точности равна весу атома водорода.",
          "ar": "الكتلة الذرية النسبية تساوي بالضبط وزن ذرة الهيدروجين.",
          "zh": "相对原子质量恰好等于氢原子的重量。",
          "ku": "Girseya atomê ya nisbî tam bi giraniya atoma hîdrojenê ye."
        },
        {
          "tr": "Mol sayısı formülü: n = m / MA (kütle / mol kütlesi) veya n = N / NA dır.",
          "en": "The formula for the number of moles is: n = m / MA (mass / molar mass) or n = N / NA.",
          "de": "Die Formel für die Molzahl lautet: n = m / MA (Masse / Molmasse) oder n = N / NA.",
          "fr": "La formule du nombre de moles est : n = m/MA (masse/masse molaire) ou n = N/NA.",
          "ru": "Формула количества молей: n = m/MA (масса/молярная масса) или n = N/NA.",
          "ar": "صيغة عدد الشامات هي: n = m / MA (الكتلة / الكتلة المولية) أو n = N / NA.",
          "zh": "摩尔数的公式为：n = m / MA（质量/摩尔质量）或 n = N / NA。",
          "ku": "Formula hejmara molan ev e: n = m / MA (girse / girseya molê) an n = N / NA."
        },
        {
          "tr": "Gerçek atom kütlesi atomun mol ağırlığına eşittir.",
          "en": "The actual atomic mass is equal to the molar weight of the atom.",
          "de": "Die tatsächliche Atommasse entspricht dem Molgewicht des Atoms.",
          "fr": "La masse atomique réelle est égale au poids molaire de l’atome.",
          "ru": "Фактическая атомная масса равна молярной массе атома.",
          "ar": "الكتلة الذرية الفعلية تساوي الوزن المولي للذرة.",
          "zh": "实际原子质量等于原子的摩尔质量。",
          "ku": "Girseya atomê ya rastîn bi giraniya molarê ya atomê ye."
        },
        {
          "tr": "Kimyasal tepkimeye giren maddelerin kütleleri katsayılarıyla doğru orantılı olmak zorundadır.",
          "en": "The masses of substances participating in a chemical reaction must be directly proportional to their coefficients.",
          "de": "Die Massen der an einer chemischen Reaktion beteiligten Stoffe müssen direkt proportional zu ihren Koeffizienten sein.",
          "fr": "Les masses de substances participant à une réaction chimique doivent être directement proportionnelles à leurs coefficients.",
          "ru": "Массы веществ, участвующих в химической реакции, должны быть прямо пропорциональны их коэффициентам.",
          "ar": "يجب أن تكون كتل المواد المشاركة في التفاعل الكيميائي متناسبة طرديا مع معاملاتها.",
          "zh": "参与化学反应的物质的质量必须与其系数成正比。",
          "ku": "Girseya maddeyên ku beşdarî reaksiyonên kîmyewî dibin divê rasterast bi rêjeya wan re têkildar bin."
        },
        {
          "tr": "Farklı 3 element içeren bileşikler arasında katlı oran aranabilir.",
          "en": "Multiple ratios can be sought between compounds containing three different elements.",
          "de": "Zwischen Verbindungen, die drei verschiedene Elemente enthalten, können mehrere Verhältnisse gesucht werden.",
          "fr": "Plusieurs rapports peuvent être recherchés entre des composés contenant trois éléments différents.",
          "ru": "Между соединениями, содержащими три разных элемента, можно искать несколько соотношений.",
          "ar": "يمكن البحث عن نسب متعددة بين المركبات التي تحتوي على ثلاثة عناصر مختلفة.",
          "zh": "可以在含有三种不同元素的化合物之间寻求多种比率。",
          "ku": "Rêjeyên pirjimar dikarin di navbera pêkhateyên ku sê hêmanên cihêreng vedigirin de werin lêgerîn."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Mol sayısı formülü: n = m / MA (kütle / mol kütlesi) veya n = N / NA dır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The formula for the number of moles is: n = m / MA (mass / molar mass) or n = N / NA.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Formel für die Molzahl lautet: n = m / MA (Masse / Molmasse) oder n = N / NA.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La formule du nombre de moles est : n = m/MA (masse/masse molaire) ou n = N/NA.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Формула количества молей: n = m/MA (масса/молярная масса) или n = N/NA.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"صيغة عدد الشامات هي: n = m / MA (الكتلة / الكتلة المولية) أو n = N / NA.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“摩尔数的公式为：n = m / MA（质量/摩尔质量）或 n = N / NA。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Formula hejmara molan ev e: n = m / MA (girse / girseya molê) an n = N / NA.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u06-twin08",
      "stem": {
        "tr": "Kimyanın Temel Kanunları ve Mol Kavramı konusu kapsamında Atom-Gram ile ilgili yapılan çalışmalarda aşağıdaki bulgulardan hangisi bilimsel olarak doğrulanmıştır?",
        "en": "In the context of Basic Chemical Laws & The Mole, which of the following findings regarding Atom-Gram is scientifically verified?",
        "de": "Im Rahmen der Einheit Chemische Grundgesetze & Mol: Welcher der folgenden Befunde zu Atom-Gramm ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l unité Lois Fondamentales & Mole, laquelle des constatations suivantes concernant Atome-gramme est scientifiquement vérifiée?",
        "ru": "В контексте темы «Основные законы химии и моль», какой из следующих выводов относительно «Атом-грамм» научно подтверждён?",
        "ar": "في سياق موضوع \"قوانين الكيمياء الأساسية والمول\"، أي من النتائج التالية المتعلقة بـ \"ذرة جرام\" مثبتة علمياً؟",
        "zh": "在“化学基本定律与摩尔”主题范畴内，下列关于“原子图谱”的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Zagonên Bingehîn ên Kîmyayê û Mol\" de, kîjan ji van encamên li ser \"Atom-Gram\" ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "FeO ve Fe2O3 arasında katlı oran yoktur.",
          "en": "There is no multiple ratio between FeO and Fe2O3.",
          "de": "Es gibt kein Mehrfachverhältnis zwischen FeO und Fe2O3.",
          "fr": "Il n’existe pas de rapport multiple entre FeO et Fe2O3.",
          "ru": "Между FeO и Fe2O3 нет кратного соотношения.",
          "ar": "لا توجد نسبة متعددة بين FeO وFe2O3.",
          "zh": "FeO和Fe2O3之间没有倍数比。",
          "ku": "Di navbera FeO û Fe2O3 de rêjeyek pirjimar tune."
        },
        {
          "tr": "0.5 mol CH4 gazı NK da 22.4 L hacim kaplar.",
          "en": "0.5 mol CH4 gas occupies 22.4 L volume in NK.",
          "de": "0,5 mol CH4-Gas nehmen in NK ein Volumen von 22,4 l ein.",
          "fr": "0,5 mole de gaz CH4 occupe un volume de 22,4 L dans NK.",
          "ru": "0,5 моль газа CH4 занимает в НК объем 22,4 л.",
          "ar": "يشغل 0.5 مول من غاز CH4 حجم 22.4 لترًا في NK.",
          "zh": "0.5 mol CH4 气体在 NK 中占据 22.4 L 体积。",
          "ku": "0,5 mol gaza CH4 li NK 22,4 L volga digire."
        },
        {
          "tr": "Mol kütlesi (MA), 1 mol maddenin gram cinsinden kütlesidir (akb cinsinden molekül ağırlığının gram karşılığıdır).",
          "en": "Molar mass (MA) is the mass in grams of 1 mole of substance (gram equivalent to the molecular weight in amu).",
          "de": "Die Molmasse (MA) ist die Masse in Gramm von 1 Mol einer Substanz (Gramm entspricht dem Molekulargewicht in amu).",
          "fr": "La masse molaire (MA) est la masse en grammes de 1 mole de substance (gramme équivalent au poids moléculaire en amu).",
          "ru": "Молярная масса (МА) — это масса 1 моля вещества в граммах (грамм эквивалентен молекулярной массе в а.е.м.).",
          "ar": "الكتلة المولية (MA) هي الكتلة بالجرام لمول واحد من المادة (جرام يعادل الوزن الجزيئي بوحدة amu).",
          "zh": "摩尔质量 (MA) 是 1 摩尔物质的质量（克）（克相当于 amu 分子量）。",
          "ku": "Girseya Molar (MA) girseya bi gramên 1 mole maddeyê ye (gram bi giraniya molekulê ya di amu de ye)."
        },
        {
          "tr": "Kütlenin korunumu kanunu gaz çıkışı olan açık kaplarda da kütle artışı olarak görünür.",
          "en": "The law of conservation of mass also appears as an increase in mass in open containers with gas escaping.",
          "de": "Der Massenerhaltungssatz zeigt sich auch als Massenzunahme in offenen Behältern bei austretendem Gas.",
          "fr": "La loi de conservation de la masse apparaît également comme une augmentation de la masse dans des conteneurs ouverts avec fuite de gaz.",
          "ru": "Закон сохранения массы проявляется и в увеличении массы в открытых емкостях при выходе газа.",
          "ar": "يظهر قانون حفظ الكتلة أيضًا على شكل زيادة في الكتلة في الحاويات المفتوحة مع هروب الغاز.",
          "zh": "质量守恒定律也表现为开放容器中气体逸出时质量的增加。",
          "ku": "Zagona parastina girseyê jî wekî zêdebûna girseyê di konteynirên vekirî yên bi gazê direvin xuya dike."
        },
        {
          "tr": "C2H4 ve C4H8 arasında katlı oranlar kanunu geçerlidir.",
          "en": "The law of multiple proportions applies between C2H4 and C4H8.",
          "de": "Zwischen C2H4 und C4H8 gilt das Gesetz der multiplen Proportionen.",
          "fr": "La loi des proportions multiples s’applique entre C2H4 et C4H8.",
          "ru": "Закон множественных пропорций применяется между C2H4 и C4H8.",
          "ar": "ينطبق قانون النسب المتعددة بين C2H4 وC4H8.",
          "zh": "C2H4 和 C4H8 之间适用倍数比例定律。",
          "ku": "Qanûna pirjimar di navbera C2H4 û C4H8 de derbas dibe."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Mol kütlesi (MA), 1 mol maddenin gram cinsinden kütlesidir (akb cinsinden molekül ağırlığının gram karşılığıdır).\" ifadesidir. 1 tane CO2 44 akb dir; 1 mol CO2 44 gramdır.",
        "en": "The correct statement is: \"Molar mass (MA) is the mass in grams of 1 mole of substance (gram equivalent to the molecular weight in amu).\". 1 grain of CO2 is 44 akb; 1 mole of CO2 is 44 grams.",
        "de": "Die zutreffende Aussage lautet: \"Die Molmasse (MA) ist die Masse in Gramm von 1 Mol einer Substanz (Gramm entspricht dem Molekulargewicht in amu).\". 1 Korn CO2 ist 44 akb; 1 Mol CO2 sind 44 Gramm.",
        "fr": "L'affirmation exacte est: \"La masse molaire (MA) est la masse en grammes de 1 mole de substance (gramme équivalent au poids moléculaire en amu).\". 1 grain de CO2 équivaut à 44 akb ; 1 mole de CO2 équivaut à 44 grammes.",
        "ru": "Правильное утверждение: «Молярная масса (МА) — это масса 1 моля вещества в граммах (грамм эквивалентен молекулярной массе в а.е.м.).». 1 крупинка СО2 – 44 акб; 1 моль CO2 равен 44 граммам.",
        "ar": "العبارة الصحيحة هي: \"الكتلة المولية (MA) هي الكتلة بالجرام لمول واحد من المادة (جرام يعادل الوزن الجزيئي بوحدة amu).\". 1 حبة من ثاني أكسيد الكربون هي 44 ألف كيلو بايت؛ 1 مول من ثاني أكسيد الكربون يساوي 44 جرامًا.",
        "zh": "正确表述为：“摩尔质量 (MA) 是 1 摩尔物质的质量（克）（克相当于 amu 分子量）。”。1 格令 CO2 为 44 akb； 1 摩尔 CO2 为 44 克。",
        "ku": "Gotina rast ev e: \"Girseya Molar (MA) girseya bi gramên 1 mole maddeyê ye (gram bi giraniya molekulê ya di amu de ye).\". 1 genim CO2 44 akb e; 1 mol CO2 44 gram e."
      }
    },
    {
      "id": "u06-twin09",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimyanın Temel Kanunları ve Mol Kavramı ünitesinde ele alınan Sabit Oranlar hakkında verilen ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Basic Chemical Laws & The Mole, which statement about Fixed Odds is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Chemische Grundgesetze & Mol: Welche Aussage über Feste Quoten ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d examen de Lois Fondamentales & Mole, quelle affirmation relative à Cotes fixes est rigoureusement exacte?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Основные законы химии и моль», какое утверждение о «Фиксированные коэффициенты» абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"قوانين الكيمياء الأساسية والمول\"، أي عبارة حول \"احتمالات ثابتة\" صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“化学基本定律与摩尔”单元中关于“固定赔率”的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Zagonên Bingehîn ên Kîmyayê û Mol\", kîjan gotin li ser \"Odds Fixed\" bê guman rast e?"
      },
      "options": [
        {
          "tr": "1 molekül-gram H2O ifadesi 1 tane su molekülünü belirtir.",
          "en": "The expression 1 molecule-gram H2O indicates 1 water molecule.",
          "de": "Der Ausdruck 1 Molekül-Gramm H2O bedeutet 1 Wassermolekül.",
          "fr": "L’expression 1 molécule-gramme H2O indique 1 molécule d’eau.",
          "ru": "Выражение 1 молекула-грамм H2O указывает на 1 молекулу воды.",
          "ar": "يشير التعبير 1 جزيء جرام H2O إلى جزيء ماء واحد.",
          "zh": "表述1分子克H2O表示1个水分子。",
          "ku": "Gotina 1 molekul-gram H2O 1 molekula avê nîşan dide."
        },
        {
          "tr": "0 °C de 1 mol sıvı su 22.4 litre hacim kaplar.",
          "en": "At 0 °C, 1 mole of liquid water occupies 22.4 liters of volume.",
          "de": "Bei 0 °C nimmt 1 Mol flüssiges Wasser 22,4 Liter Volumen ein.",
          "fr": "À 0 °C, 1 mole d’eau liquide occupe 22,4 litres de volume.",
          "ru": "При температуре 0°С 1 моль жидкой воды занимает 22,4 литра объёма.",
          "ar": "عند 0 درجة مئوية، يشغل 1 مول من الماء السائل 22.4 لترًا من الحجم.",
          "zh": "在 0 °C 时，1 摩尔液态水占据 22.4 升体积。",
          "ku": "Di 0 °C de, 1 mol ava şil 22,4 lître qebar digire."
        },
        {
          "tr": "Bir bileşikteki elementlerin kütlece birleşme oranı bileşiğin miktarına göre değişir.",
          "en": "The mass ratio of elements in a compound varies depending on the amount of the compound.",
          "de": "Das Massenverhältnis der Elemente in einer Verbindung variiert je nach Menge der Verbindung.",
          "fr": "Le rapport massique des éléments dans un composé varie en fonction de la quantité du composé.",
          "ru": "Массовое соотношение элементов в соединении варьируется в зависимости от количества соединения.",
          "ar": "تختلف نسبة كتلة العناصر في المركب حسب كمية المركب.",
          "zh": "化合物中元素的质量比根据化合物的量而变化。",
          "ku": "Rêjeya girseya hêmanên di pêkhateyek de li gorî mêjera pêkhateyê diguhere."
        },
        {
          "tr": "Avogadro Hipotezi: Aynı sıcaklık ve basınç altında eşit hacimdeki tüm ideal gazlar eşit sayıda molekül içerir.",
          "en": "Avogadro Hypothesis: Under the same temperature and pressure, all equal volumes of ideal gases contain the same number of molecules.",
          "de": "Avogadro-Hypothese: Bei gleicher Temperatur und gleichem Druck enthalten alle gleichen Volumina idealer Gase die gleiche Anzahl an Molekülen.",
          "fr": "Hypothèse d'Avogadro : Sous la même température et pression, tous les volumes égaux de gaz parfaits contiennent le même nombre de molécules.",
          "ru": "Гипотеза Авогадро: При одинаковых температуре и давлении все равные объемы идеальных газов содержат одинаковое количество молекул.",
          "ar": "فرضية أفوجادرو: تحت نفس درجة الحرارة والضغط، تحتوي جميع الحجوم المتساوية من الغازات المثالية على نفس العدد من الجزيئات.",
          "zh": "阿伏加德罗假说：在相同的温度和压力下，所有等体积的理想气体都含有相同数量的分子。",
          "ku": "Hîpoteza Avogadro: Di bin heman germahî û zextê de, di hemî cildên wekhev ên gazên îdeal de heman hejmar molekul hene."
        },
        {
          "tr": "1 mol H2 gazı 6.02x10^23 tane atom içerir.",
          "en": "1 mole of H2 gas contains 6.02x10^23 atoms.",
          "de": "1 Mol H2-Gas enthält 6,02x10^23 Atome.",
          "fr": "1 mole de gaz H2 contient 6,02x10^23 atomes.",
          "ru": "1 моль газа H2 содержит 6,02x10^23 атома.",
          "ar": "يحتوي 1 مول من غاز H2 على 6.02×10^23 ذرة.",
          "zh": "1 摩尔 H2 气体包含 6.02x10^23 个原子。",
          "ku": "Di 1 mol gaza H2 de 6,02x10^23 atoman hene."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Avogadro Hipotezi: Aynı sıcaklık ve basınç altında eşit hacimdeki tüm ideal gazlar eşit sayıda molekül içerir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Avogadro Hypothesis: Under the same temperature and pressure, all equal volumes of ideal gases contain the same number of molecules.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Avogadro-Hypothese: Bei gleicher Temperatur und gleichem Druck enthalten alle gleichen Volumina idealer Gase die gleiche Anzahl an Molekülen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Hypothèse d'Avogadro : Sous la même température et pression, tous les volumes égaux de gaz parfaits contiennent le même nombre de molécules.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Гипотеза Авогадро: При одинаковых температуре и давлении все равные объемы идеальных газов содержат одинаковое количество молекул.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"فرضية أفوجادرو: تحت نفس درجة الحرارة والضغط، تحتوي جميع الحجوم المتساوية من الغازات المثالية على نفس العدد من الجزيئات.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“阿伏加德罗假说：在相同的温度和压力下，所有等体积的理想气体都含有相同数量的分子。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hîpoteza Avogadro: Di bin heman germahî û zextê de, di hemî cildên wekhev ên gazên îdeal de heman hejmar molekul hene.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u06-twin10",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimyanın Temel Kanunları ve Mol Kavramı konusunu işlerken 1 akb üzerine sorduğu sorunun doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During a laboratory inquiry on Basic Chemical Laws & The Mole, which statement regarding 1 akb represents the correct answer?",
        "de": "Welche Aussage zu 1 Akb stellt im Kontext von Chemische Grundgesetze & Mol die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l étude expérimentale de Lois Fondamentales & Mole, quelle proposition sur 1 clé USB constitue la réponse exacte?",
        "ru": "В ходе лабораторного изучения темы «Основные законы химии и моль», какой ответ относительно «1 акб» является правильным?",
        "ar": "أثناء دراسة موضوع \"قوانين الكيمياء الأساسية والمول\" مخبرياً، أي إجابة بخصوص \"1 أك\" تمثل الإجابة الصحيحة؟",
        "zh": "在“化学基本定律与摩尔”实验探究与教学分析中，针对“1 AKB”所提问题的正确答案是？",
        "ku": "Di lêkolîna ezmûnî ya li ser \"Zagonên Bingehîn ên Kîmyayê û Mol\" de, kîjan bersiv derbarê \"1 akb\" de rast e?"
      },
      "options": [
        {
          "tr": "Gerçek atom kütlesi atomun mol ağırlığına eşittir.",
          "en": "The actual atomic mass is equal to the molar weight of the atom.",
          "de": "Die tatsächliche Atommasse entspricht dem Molgewicht des Atoms.",
          "fr": "La masse atomique réelle est égale au poids molaire de l’atome.",
          "ru": "Фактическая атомная масса равна молярной массе атома.",
          "ar": "الكتلة الذرية الفعلية تساوي الوزن المولي للذرة.",
          "zh": "实际原子质量等于原子的摩尔质量。",
          "ku": "Girseya atomê ya rastîn bi giraniya molarê ya atomê ye."
        },
        {
          "tr": "Kimyasal tepkimeye giren maddelerin kütleleri katsayılarıyla doğru orantılı olmak zorundadır.",
          "en": "The masses of substances participating in a chemical reaction must be directly proportional to their coefficients.",
          "de": "Die Massen der an einer chemischen Reaktion beteiligten Stoffe müssen direkt proportional zu ihren Koeffizienten sein.",
          "fr": "Les masses de substances participant à une réaction chimique doivent être directement proportionnelles à leurs coefficients.",
          "ru": "Массы веществ, участвующих в химической реакции, должны быть прямо пропорциональны их коэффициентам.",
          "ar": "يجب أن تكون كتل المواد المشاركة في التفاعل الكيميائي متناسبة طرديا مع معاملاتها.",
          "zh": "参与化学反应的物质的质量必须与其系数成正比。",
          "ku": "Girseya maddeyên ku beşdarî reaksiyonên kîmyewî dibin divê rasterast bi rêjeya wan re têkildar bin."
        },
        {
          "tr": "Farklı 3 element içeren bileşikler arasında katlı oran aranabilir.",
          "en": "Multiple ratios can be sought between compounds containing three different elements.",
          "de": "Zwischen Verbindungen, die drei verschiedene Elemente enthalten, können mehrere Verhältnisse gesucht werden.",
          "fr": "Plusieurs rapports peuvent être recherchés entre des composés contenant trois éléments différents.",
          "ru": "Между соединениями, содержащими три разных элемента, можно искать несколько соотношений.",
          "ar": "يمكن البحث عن نسب متعددة بين المركبات التي تحتوي على ثلاثة عناصر مختلفة.",
          "zh": "可以在含有三种不同元素的化合物之间寻求多种比率。",
          "ku": "Rêjeyên pirjimar dikarin di navbera pêkhateyên ku sê hêmanên cihêreng vedigirin de werin lêgerîn."
        },
        {
          "tr": "Oda koşullarında (25 °C, 1 atm) 1 mol gaz 22.4 L hacim kaplar.",
          "en": "At room conditions (25 °C, 1 atm), 1 mole of gas occupies a volume of 22.4 L.",
          "de": "Bei Raumbedingungen (25 °C, 1 atm) nimmt 1 Mol Gas ein Volumen von 22,4 L ein.",
          "fr": "Dans des conditions ambiantes (25 °C, 1 atm), 1 mole de gaz occupe un volume de 22,4 L.",
          "ru": "В комнатных условиях (25°С, 1 атм) 1 моль газа занимает объём 22,4 л.",
          "ar": "في ظروف الغرفة (25 درجة مئوية، 1 ضغط جوي)، يشغل 1 مول من الغاز حجمًا قدره 22.4 لترًا.",
          "zh": "在室温条件下（25 °C，1 atm），1 摩尔气体占据的体积为 22.4 L。",
          "ku": "Di şert û mercên jûreyê de (25 °C, 1 atm), 1 mol gaz qebareya 22,4 L digire."
        },
        {
          "tr": "Bağıl atom kütlesi karbon-12 (12C) izotopunun kütlesinin 1/12 si temel alınarak hesaplanmıştır.",
          "en": "Relative atomic mass was calculated based on 1/12 of the mass of the carbon-12 (12C) isotope.",
          "de": "Die relative Atommasse wurde auf der Grundlage von 1/12 der Masse des Kohlenstoff-12-Isotops (12C) berechnet.",
          "fr": "La masse atomique relative a été calculée sur la base de 1/12 de la masse de l’isotope du carbone 12 (12C).",
          "ru": "Относительная атомная масса рассчитана исходя из 1/12 массы изотопа углерода-12 (12C).",
          "ar": "تم حساب الكتلة الذرية النسبية على أساس 1/12 من كتلة نظير الكربون 12 (12C).",
          "zh": "相对原子质量根据碳 12 (12C) 同位素质量的 1/12 计算。",
          "ku": "Girseya atomê ya têkildar li ser bingeha 1/12 ya girseya îzotopa karbon-12 (12C) hate hesibandin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Bağıl atom kütlesi karbon-12 (12C) izotopunun kütlesinin 1/12 si temel alınarak hesaplanmıştır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Relative atomic mass was calculated based on 1/12 of the mass of the carbon-12 (12C) isotope.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die relative Atommasse wurde auf der Grundlage von 1/12 der Masse des Kohlenstoff-12-Isotops (12C) berechnet.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La masse atomique relative a été calculée sur la base de 1/12 de la masse de l’isotope du carbone 12 (12C).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Относительная атомная масса рассчитана исходя из 1/12 массы изотопа углерода-12 (12C).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تم حساب الكتلة الذرية النسبية على أساس 1/12 من كتلة نظير الكربون 12 (12C).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“相对原子质量根据碳 12 (12C) 同位素质量的 1/12 计算。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Girseya atomê ya têkildar li ser bingeha 1/12 ya girseya îzotopa karbon-12 (12C) hate hesibandin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u06-twin11",
      "stem": {
        "tr": "Kimya dersinde Kimyanın Temel Kanunları ve Mol Kavramı ünitesi incelenirken Kütlenin Korunumu (Lavoisier) ile ilgili ileri sürülen aşağıdaki yargılardan hangisi bilimsel gerçektir?",
        "en": "When analyzing the unit Basic Chemical Laws & The Mole, which of the following propositions concerning Conservation of Mass (Lavoisier) is a verified scientific fact?",
        "de": "Bei der Untersuchung von Chemische Grundgesetze & Mol: Welche Behauptung bezüglich Erhaltung der Masse (Lavoisier) entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l unité Lois Fondamentales & Mole, laquelle des affirmations suivantes concernant Conservation de la messe (Lavoisier) est un fait scientifique avéré?",
        "ru": "При рассмотрении темы «Основные законы химии и моль», какое из следующих суждений о «Сохранение массы (Лавуазье)» выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"قوانين الكيمياء الأساسية والمول\"، أي من الأحكام التالية المتعلقة بـ \"حفظ الكتلة (لافوازييه)\" تعتبر حقيقة علمية؟",
        "zh": "在系统辨析“化学基本定律与摩尔”核心规律时，下列关于“质量守恒（拉瓦锡）”的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Zagonên Bingehîn ên Kîmyayê û Mol\" tê kirin, kîjan daraza li ser \"Parastina Komkujiyê (Lavoisier)\" rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Katlı oran aranmayan durumlar: Farklı tür element içerenler (CO ve NO), 3 tür element içerenler (H2SO4 ve H2SO3), basit formülü aynı olanlar.",
          "en": "Situations where multiple ratios are not required: Those containing different types of elements (CO and NO), those containing 3 types of elements (H2SO4 and H2SO3), those with the same simple formula.",
          "de": "Situationen, in denen mehrere Verhältnisse nicht erforderlich sind: Situationen mit unterschiedlichen Elementtypen (CO und NO), Situationen mit drei Elementtypen (H2SO4 und H2SO3) und Situationen mit derselben einfachen Formel.",
          "fr": "Situations où plusieurs ratios ne sont pas requis : Ceux contenant différents types d'éléments (CO et NO), ceux contenant 3 types d'éléments (H2SO4 et H2SO3), ceux avec la même formule simple.",
          "ru": "Ситуации, когда несколько соотношений не требуются: те, которые содержат разные типы элементов (CO и NO), те, которые содержат 3 типа элементов (H2SO4 и H2SO3), те, которые имеют одну и ту же простую формулу.",
          "ar": "الحالات التي لا تتطلب نسبًا متعددة: تلك التي تحتوي على أنواع مختلفة من العناصر (CO وNO)، وتلك التي تحتوي على 3 أنواع من العناصر (H2SO4 وH2SO3)، وتلك التي لها نفس الصيغة البسيطة.",
          "zh": "不需要多个比率的情况：含有不同类型元素（CO和NO）的情况、含有3种元素（H2SO4和H2SO3）的情况、具有相同简单式的情况。",
          "ku": "Rewşên ku gelek rêjeyên hewce ne hewce ne: Yên ku celebên hêmanên cihêreng (CO û NO) hene, yên ku 3 celeb hêman hene (H2SO4 û H2SO3), yên ku heman formula hêsan hene."
        },
        {
          "tr": "0.5 mol CH4 gazı NK da 22.4 L hacim kaplar.",
          "en": "0.5 mol CH4 gas occupies 22.4 L volume in NK.",
          "de": "0,5 mol CH4-Gas nehmen in NK ein Volumen von 22,4 l ein.",
          "fr": "0,5 mole de gaz CH4 occupe un volume de 22,4 L dans NK.",
          "ru": "0,5 моль газа CH4 занимает в НК объем 22,4 л.",
          "ar": "يشغل 0.5 مول من غاز CH4 حجم 22.4 لترًا في NK.",
          "zh": "0.5 mol CH4 气体在 NK 中占据 22.4 L 体积。",
          "ku": "0,5 mol gaza CH4 li NK 22,4 L volga digire."
        },
        {
          "tr": "Kütlenin korunumu kanunu gaz çıkışı olan açık kaplarda da kütle artışı olarak görünür.",
          "en": "The law of conservation of mass also appears as an increase in mass in open containers with gas escaping.",
          "de": "Der Massenerhaltungssatz zeigt sich auch als Massenzunahme in offenen Behältern bei austretendem Gas.",
          "fr": "La loi de conservation de la masse apparaît également comme une augmentation de la masse dans des conteneurs ouverts avec fuite de gaz.",
          "ru": "Закон сохранения массы проявляется и в увеличении массы в открытых емкостях при выходе газа.",
          "ar": "يظهر قانون حفظ الكتلة أيضًا على شكل زيادة في الكتلة في الحاويات المفتوحة مع هروب الغاز.",
          "zh": "质量守恒定律也表现为开放容器中气体逸出时质量的增加。",
          "ku": "Zagona parastina girseyê jî wekî zêdebûna girseyê di konteynirên vekirî yên bi gazê direvin xuya dike."
        },
        {
          "tr": "C2H4 ve C4H8 arasında katlı oranlar kanunu geçerlidir.",
          "en": "The law of multiple proportions applies between C2H4 and C4H8.",
          "de": "Zwischen C2H4 und C4H8 gilt das Gesetz der multiplen Proportionen.",
          "fr": "La loi des proportions multiples s’applique entre C2H4 et C4H8.",
          "ru": "Закон множественных пропорций применяется между C2H4 и C4H8.",
          "ar": "ينطبق قانون النسب المتعددة بين C2H4 وC4H8.",
          "zh": "C2H4 和 C4H8 之间适用倍数比例定律。",
          "ku": "Qanûna pirjimar di navbera C2H4 û C4H8 de derbas dibe."
        },
        {
          "tr": "Mol sayısı kütle ile mol kütlesinin çarpımına eşittir.",
          "en": "The number of moles is equal to the mass multiplied by the molar mass.",
          "de": "Die Anzahl der Mol ist gleich der Masse multipliziert mit der Molmasse.",
          "fr": "Le nombre de taupes est égal à la masse multipliée par la masse molaire.",
          "ru": "Количество молей равно массе, умноженной на молярную массу.",
          "ar": "عدد المولات يساوي الكتلة مضروبة في الكتلة المولية.",
          "zh": "摩尔数等于质量乘以摩尔质量。",
          "ku": "Hejmara molan bi girseya ku bi girseya molarê ve zêde dibe ye."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Katlı oran aranmayan durumlar: Farklı tür element içerenler (CO ve NO), 3 tür element içerenler (H2SO4 ve H2SO3), basit formülü aynı olanlar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Situations where multiple ratios are not required: Those containing different types of elements (CO and NO), those containing 3 types of elements (H2SO4 and H2SO3), those with the same simple formula.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Situationen, in denen mehrere Verhältnisse nicht erforderlich sind: Situationen mit unterschiedlichen Elementtypen (CO und NO), Situationen mit drei Elementtypen (H2SO4 und H2SO3) und Situationen mit derselben einfachen Formel.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Situations où plusieurs ratios ne sont pas requis : Ceux contenant différents types d'éléments (CO et NO), ceux contenant 3 types d'éléments (H2SO4 et H2SO3), ceux avec la même formule simple.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Ситуации, когда несколько соотношений не требуются: те, которые содержат разные типы элементов (CO и NO), те, которые содержат 3 типа элементов (H2SO4 и H2SO3), те, которые имеют одну и ту же простую формулу.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الحالات التي لا تتطلب نسبًا متعددة: تلك التي تحتوي على أنواع مختلفة من العناصر (CO وNO)، وتلك التي تحتوي على 3 أنواع من العناصر (H2SO4 وH2SO3)، وتلك التي لها نفس الصيغة البسيطة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“不需要多个比率的情况：含有不同类型元素（CO和NO）的情况、含有3种元素（H2SO4和H2SO3）的情况、具有相同简单式的情况。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Rewşên ku gelek rêjeyên hewce ne hewce ne: Yên ku celebên hêmanên cihêreng (CO û NO) hene, yên ku 3 celeb hêman hene (H2SO4 û H2SO3), yên ku heman formula hêsan hene.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u06-twin12",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimyanın Temel Kanunları ve Mol Kavramı konusundaki temel kimyasal kurallar çerçevesinde Sabit Oranlar (Proust) kavramını en doğru açıklayan ifadedir?",
        "en": "Which of the following most accurately describes Fixed Proportions (Proust) within the fundamental principles of Basic Chemical Laws & The Mole?",
        "de": "Welche Aussage beschreibt das Konzept Feste Proportionen (Proust) im Rahmen von Chemische Grundgesetze & Mol am präzisesten?",
        "fr": "Laquelle des propositions suivantes décrit le plus fidèlement Proportions fixes (Proust) selon les lois de Lois Fondamentales & Mole?",
        "ru": "Какое из утверждений наиболее точно описывает понятие «Фиксированные пропорции (Пруст)» в рамках темы «Основные законы химии и моль»?",
        "ar": "أي مما يلي يعبر بأعلى درجات الدقة عن مفهوم \"النسب الثابتة (بروست)\" ضمن قواعد \"قوانين الكيمياء الأساسية والمول\"؟",
        "zh": "根据“化学基本定律与摩尔”的基本化学原理，下列哪项阐述能最准确地界定“固定比例（普鲁斯特）”这一核心概念？",
        "ku": "Kîjan ji van vebijarkan têgeha \"Rêjeyên sabît (Proust)\" di çarçoveya prensîbên \"Zagonên Bingehîn ên Kîmyayê û Mol\" de herî rast rave dike?"
      },
      "options": [
        {
          "tr": "0 °C de 1 mol sıvı su 22.4 litre hacim kaplar.",
          "en": "At 0 °C, 1 mole of liquid water occupies 22.4 liters of volume.",
          "de": "Bei 0 °C nimmt 1 Mol flüssiges Wasser 22,4 Liter Volumen ein.",
          "fr": "À 0 °C, 1 mole d’eau liquide occupe 22,4 litres de volume.",
          "ru": "При температуре 0°С 1 моль жидкой воды занимает 22,4 литра объёма.",
          "ar": "عند 0 درجة مئوية، يشغل 1 مول من الماء السائل 22.4 لترًا من الحجم.",
          "zh": "在 0 °C 时，1 摩尔液态水占据 22.4 升体积。",
          "ku": "Di 0 °C de, 1 mol ava şil 22,4 lître qebar digire."
        },
        {
          "tr": "1 atom-gram = 1 mol atom, 1 molekül-gram = 1 mol molekül, 1 formül-gram = 1 mol iyonik bileşik demektir.",
          "en": "1 atom-gram = 1 mole of atoms, 1 molecule-gram = 1 mole of molecules, 1 formula-gram = 1 mole of ionic compound.",
          "de": "1 Atom-Gramm = 1 Mol Atome, 1 Molekül-Gramm = 1 Mol Moleküle, 1 Formel-Gramm = 1 Mol ionische Verbindung.",
          "fr": "1 atome-gramme = 1 mole d'atomes, 1 molécule-gramme = 1 mole de molécules, 1 formule-gramme = 1 mole de composé ionique.",
          "ru": "1 атом-грамм = 1 моль атомов, 1 молекула-грамм = 1 моль молекул, 1 формульный грамм = 1 моль ионного соединения.",
          "ar": "1 ذرة جرام = 1 مول من الذرات، 1 جرام جزيء = 1 مول من الجزيئات، 1 جرام صيغة = 1 مول من المركب الأيوني.",
          "zh": "1 原子克 = 1 摩尔原子，1 分子克 = 1 摩尔分子，1 分子式 = 1 摩尔离子化合物。",
          "ku": "1 atom-gram = 1 mol atom, 1 molekul-gram = 1 molek molekul, 1 formula-gram = 1 mol pêkhateya îyonî."
        },
        {
          "tr": "Bir bileşikteki elementlerin kütlece birleşme oranı bileşiğin miktarına göre değişir.",
          "en": "The mass ratio of elements in a compound varies depending on the amount of the compound.",
          "de": "Das Massenverhältnis der Elemente in einer Verbindung variiert je nach Menge der Verbindung.",
          "fr": "Le rapport massique des éléments dans un composé varie en fonction de la quantité du composé.",
          "ru": "Массовое соотношение элементов в соединении варьируется в зависимости от количества соединения.",
          "ar": "تختلف نسبة كتلة العناصر في المركب حسب كمية المركب.",
          "zh": "化合物中元素的质量比根据化合物的量而变化。",
          "ku": "Rêjeya girseya hêmanên di pêkhateyek de li gorî mêjera pêkhateyê diguhere."
        },
        {
          "tr": "1 mol H2 gazı 6.02x10^23 tane atom içerir.",
          "en": "1 mole of H2 gas contains 6.02x10^23 atoms.",
          "de": "1 Mol H2-Gas enthält 6,02x10^23 Atome.",
          "fr": "1 mole de gaz H2 contient 6,02x10^23 atomes.",
          "ru": "1 моль газа H2 содержит 6,02x10^23 атома.",
          "ar": "يحتوي 1 مول من غاز H2 على 6.02×10^23 ذرة.",
          "zh": "1 摩尔 H2 气体包含 6.02x10^23 个原子。",
          "ku": "Di 1 mol gaza H2 de 6,02x10^23 atoman hene."
        },
        {
          "tr": "1 tane CO2 molekülü 44 gramdır.",
          "en": "1 CO2 molecule weighs 44 grams.",
          "de": "1 CO2-Molekül wiegt 44 Gramm.",
          "fr": "1 molécule de CO2 pèse 44 grammes.",
          "ru": "1 молекула CO2 весит 44 грамма.",
          "ar": "يزن جزيء ثاني أكسيد الكربون 44 جرامًا.",
          "zh": "1 个 CO2 分子重 44 克。",
          "ku": "1 molekulek CO2 44 gram giran e."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"1 atom-gram = 1 mol atom, 1 molekül-gram = 1 mol molekül, 1 formül-gram = 1 mol iyonik bileşik demektir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"1 atom-gram = 1 mole of atoms, 1 molecule-gram = 1 mole of molecules, 1 formula-gram = 1 mole of ionic compound.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"1 Atom-Gramm = 1 Mol Atome, 1 Molekül-Gramm = 1 Mol Moleküle, 1 Formel-Gramm = 1 Mol ionische Verbindung.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"1 atome-gramme = 1 mole d'atomes, 1 molécule-gramme = 1 mole de molécules, 1 formule-gramme = 1 mole de composé ionique.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «1 атом-грамм = 1 моль атомов, 1 молекула-грамм = 1 моль молекул, 1 формульный грамм = 1 моль ионного соединения.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"1 ذرة جرام = 1 مول من الذرات، 1 جرام جزيء = 1 مول من الجزيئات، 1 جرام صيغة = 1 مول من المركب الأيوني.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“1 原子克 = 1 摩尔原子，1 分子克 = 1 摩尔分子，1 分子式 = 1 摩尔离子化合物。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"1 atom-gram = 1 mol atom, 1 molekul-gram = 1 molek molekul, 1 formula-gram = 1 mol pêkhateya îyonî.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u06-twin13",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimyanın Temel Kanunları ve Mol Kavramı sorularında karşılaşılan Avogadro Sayısı (NA) konusunda doğru olan yargı hangisidir?",
        "en": "In standard university entrance exams covering Basic Chemical Laws & The Mole, which assertion regarding Avogadro's Number (NA) is correct?",
        "de": "Welche Feststellung bezüglich Avogadros Zahl (NA) ist nach den chemischen Gesetzmäßigkeiten von Chemische Grundgesetze & Mol richtig?",
        "fr": "Dans les épreuves universitaires portant sur Lois Fondamentales & Mole, quelle affirmation concernant Numéro d'Avogadro (NA) est correcte?",
        "ru": "В экзаменационных заданиях по теме «Основные законы химии и моль», какое положение относительно «Число Авогадро (NA)» является верным?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"قوانين الكيمياء الأساسية والمول\"، أي حكم متعلق بـ \"رقم أفوجادرو (نسبة غير معلومة)\" يعتبر صحيحاً؟",
        "zh": "在高考“化学基本定律与摩尔”经典考题中，下列有关“阿伏伽德罗常数 (NA)”的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Zagonên Bingehîn ên Kîmyayê û Mol\" de, kîjan daraza li ser \"Hejmara Avogadro (NA)\" rast e?"
      },
      "options": [
        {
          "tr": "Kimyasal tepkimeye giren maddelerin kütleleri katsayılarıyla doğru orantılı olmak zorundadır.",
          "en": "The masses of substances participating in a chemical reaction must be directly proportional to their coefficients.",
          "de": "Die Massen der an einer chemischen Reaktion beteiligten Stoffe müssen direkt proportional zu ihren Koeffizienten sein.",
          "fr": "Les masses de substances participant à une réaction chimique doivent être directement proportionnelles à leurs coefficients.",
          "ru": "Массы веществ, участвующих в химической реакции, должны быть прямо пропорциональны их коэффициентам.",
          "ar": "يجب أن تكون كتل المواد المشاركة في التفاعل الكيميائي متناسبة طرديا مع معاملاتها.",
          "zh": "参与化学反应的物质的质量必须与其系数成正比。",
          "ku": "Girseya maddeyên ku beşdarî reaksiyonên kîmyewî dibin divê rasterast bi rêjeya wan re têkildar bin."
        },
        {
          "tr": "Farklı 3 element içeren bileşikler arasında katlı oran aranabilir.",
          "en": "Multiple ratios can be sought between compounds containing three different elements.",
          "de": "Zwischen Verbindungen, die drei verschiedene Elemente enthalten, können mehrere Verhältnisse gesucht werden.",
          "fr": "Plusieurs rapports peuvent être recherchés entre des composés contenant trois éléments différents.",
          "ru": "Между соединениями, содержащими три разных элемента, можно искать несколько соотношений.",
          "ar": "يمكن البحث عن نسب متعددة بين المركبات التي تحتوي على ثلاثة عناصر مختلفة.",
          "zh": "可以在含有三种不同元素的化合物之间寻求多种比率。",
          "ku": "Rêjeyên pirjimar dikarin di navbera pêkhateyên ku sê hêmanên cihêreng vedigirin de werin lêgerîn."
        },
        {
          "tr": "Gerçek atom kütlesi: Bir tek atomun gram cinsinden kütlesidir ve MA / NA formülüyle bulunur.",
          "en": "Real atomic mass: It is the mass of a single atom in grams and is found with the formula MA / NA.",
          "de": "Echte Atommasse: Sie ist die Masse eines einzelnen Atoms in Gramm und wird mit der Formel MA/NA ermittelt.",
          "fr": "Masse atomique réelle : C'est la masse d'un seul atome en grammes et se trouve avec la formule MA/NA.",
          "ru": "Реальная атомная масса: это масса одного атома в граммах, которая находится по формуле MA / NA.",
          "ar": "الكتلة الذرية الحقيقية: هي كتلة الذرة الواحدة بالجرام ويوجد لها الصيغة MA/NA.",
          "zh": "真实原子质量：单个原子的质量，以克为单位，用公式 MA / NA 计算。",
          "ku": "Girseya atomê ya rastîn: Ew girseya yek atomê bi gram e û bi formula MA / NA tê dîtin."
        },
        {
          "tr": "Oda koşullarında (25 °C, 1 atm) 1 mol gaz 22.4 L hacim kaplar.",
          "en": "At room conditions (25 °C, 1 atm), 1 mole of gas occupies a volume of 22.4 L.",
          "de": "Bei Raumbedingungen (25 °C, 1 atm) nimmt 1 Mol Gas ein Volumen von 22,4 L ein.",
          "fr": "Dans des conditions ambiantes (25 °C, 1 atm), 1 mole de gaz occupe un volume de 22,4 L.",
          "ru": "В комнатных условиях (25°С, 1 атм) 1 моль газа занимает объём 22,4 л.",
          "ar": "في ظروف الغرفة (25 درجة مئوية، 1 ضغط جوي)، يشغل 1 مول من الغاز حجمًا قدره 22.4 لترًا.",
          "zh": "在室温条件下（25 °C，1 atm），1 摩尔气体占据的体积为 22.4 L。",
          "ku": "Di şert û mercên jûreyê de (25 °C, 1 atm), 1 mol gaz qebareya 22,4 L digire."
        },
        {
          "tr": "Eşit hacimdeki gazların kütleleri de daima birbirine eşittir.",
          "en": "The masses of equal volumes of gases are always equal.",
          "de": "Die Massen gleicher Gasvolumina sind immer gleich.",
          "fr": "Les masses de volumes égaux de gaz sont toujours égales.",
          "ru": "Массы равных объемов газов всегда равны.",
          "ar": "كتل الأحجام المتساوية من الغازات متساوية دائمًا.",
          "zh": "等体积气体的质量始终相等。",
          "ku": "Girseyên cildên yeksan ên gazan her dem wek hev in."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Gerçek atom kütlesi: Bir tek atomun gram cinsinden kütlesidir ve MA / NA formülüyle bulunur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Real atomic mass: It is the mass of a single atom in grams and is found with the formula MA / NA.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Echte Atommasse: Sie ist die Masse eines einzelnen Atoms in Gramm und wird mit der Formel MA/NA ermittelt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Masse atomique réelle : C'est la masse d'un seul atome en grammes et se trouve avec la formule MA/NA.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Реальная атомная масса: это масса одного атома в граммах, которая находится по формуле MA / NA.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الكتلة الذرية الحقيقية: هي كتلة الذرة الواحدة بالجرام ويوجد لها الصيغة MA/NA.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“真实原子质量：单个原子的质量，以克为单位，用公式 MA / NA 计算。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Girseya atomê ya rastîn: Ew girseya yek atomê bi gram e û bi formula MA / NA tê dîtin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u06-twin14",
      "stem": {
        "tr": "Aşağıda Kimyanın Temel Kanunları ve Mol Kavramı ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre Normal Koşullar (NK) ile ilgili hangisi doğrudur?",
        "en": "Based on the fundamental principles of Basic Chemical Laws & The Mole, which statement about Normal Conditions (NC) is scientifically accurate?",
        "de": "Auf der Grundlage der Einheit Chemische Grundgesetze & Mol: Welche Aussage über Normale Bedingungen (NC) ist zutreffend?",
        "fr": "Sur la base des notions fondamentales de Lois Fondamentales & Mole, quelle affirmation relative à Conditions normales (NC) est exacte?",
        "ru": "На основе фундаментальных положений темы «Основные законы химии и моль», какое суждение о «Нормальные условия (NC)» верно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"قوانين الكيمياء الأساسية والمول\"، أي عبارة حول \"الظروف العادية (NC)\" صحيحة؟",
        "zh": "基于“化学基本定律与摩尔”的基础化学知识体系，下列关于“正常条件 (NC)”的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Zagonên Bingehîn ên Kîmyayê û Mol\", kîjan gotin derbarê \"Şertên Normal (NC)\" de rast e?"
      },
      "options": [
        {
          "tr": "Kütlenin korunumu kanunu gaz çıkışı olan açık kaplarda da kütle artışı olarak görünür.",
          "en": "The law of conservation of mass also appears as an increase in mass in open containers with gas escaping.",
          "de": "Der Massenerhaltungssatz zeigt sich auch als Massenzunahme in offenen Behältern bei austretendem Gas.",
          "fr": "La loi de conservation de la masse apparaît également comme une augmentation de la masse dans des conteneurs ouverts avec fuite de gaz.",
          "ru": "Закон сохранения массы проявляется и в увеличении массы в открытых емкостях при выходе газа.",
          "ar": "يظهر قانون حفظ الكتلة أيضًا على شكل زيادة في الكتلة في الحاويات المفتوحة مع هروب الغاز.",
          "zh": "质量守恒定律也表现为开放容器中气体逸出时质量的增加。",
          "ku": "Zagona parastina girseyê jî wekî zêdebûna girseyê di konteynirên vekirî yên bi gazê direvin xuya dike."
        },
        {
          "tr": "C2H4 ve C4H8 arasında katlı oranlar kanunu geçerlidir.",
          "en": "The law of multiple proportions applies between C2H4 and C4H8.",
          "de": "Zwischen C2H4 und C4H8 gilt das Gesetz der multiplen Proportionen.",
          "fr": "La loi des proportions multiples s’applique entre C2H4 et C4H8.",
          "ru": "Закон множественных пропорций применяется между C2H4 и C4H8.",
          "ar": "ينطبق قانون النسب المتعددة بين C2H4 وC4H8.",
          "zh": "C2H4 和 C4H8 之间适用倍数比例定律。",
          "ku": "Qanûna pirjimar di navbera C2H4 û C4H8 de derbas dibe."
        },
        {
          "tr": "Mol sayısı kütle ile mol kütlesinin çarpımına eşittir.",
          "en": "The number of moles is equal to the mass multiplied by the molar mass.",
          "de": "Die Anzahl der Mol ist gleich der Masse multipliziert mit der Molmasse.",
          "fr": "Le nombre de taupes est égal à la masse multipliée par la masse molaire.",
          "ru": "Количество молей равно массе, умноженной на молярную массу.",
          "ar": "عدد المولات يساوي الكتلة مضروبة في الكتلة المولية.",
          "zh": "摩尔数等于质量乘以摩尔质量。",
          "ku": "Hejmara molan bi girseya ku bi girseya molarê ve zêde dibe ye."
        },
        {
          "tr": "0.5 mol CH4 gazı NK da 11.2 litre hacim kaplar ve 2.5 mol atom içerir (0.5 mol C + 2.0 mol H).",
          "en": "0.5 mol CH4 gas occupies 11.2 liters of volume in NK and contains 2.5 mol atoms (0.5 mol C + 2.0 mol H).",
          "de": "0,5 Mol CH4-Gas nimmt in NK 11,2 Liter Volumen ein und enthält 2,5 Mol-Atome (0,5 Mol C + 2,0 Mol H).",
          "fr": "0,5 mole de gaz CH4 occupe 11,2 litres de volume dans NK et contient 2,5 moles d'atomes (0,5 mole de C + 2,0 moles de H).",
          "ru": "0,5 моль газа СН4 занимает в НК 11,2 л объема и содержит 2,5 моль атомов (0,5 моль С + 2,0 моль Н).",
          "ar": "يشغل 0.5 مول من غاز CH4 11.2 لترًا من الحجم في NK ويحتوي على 2.5 مول من ذرات (0.5 مول C + 2.0 مول H).",
          "zh": "0.5 mol CH4 气体在 NK 中占据 11.2 升体积，包含 2.5 mol 原子（0.5 mol C + 2.0 mol H）。",
          "ku": "0,5 mol gaza CH4 li NK 11,2 lître qebar digire û 2,5 mol atoman (0,5 mol C + 2,0 mol H) dihewîne."
        },
        {
          "tr": "Bağıl atom kütlesi hidrojen atomunun ağırlığına tam eşittir.",
          "en": "The relative atomic mass is exactly equal to the weight of the hydrogen atom.",
          "de": "Die relative Atommasse entspricht genau dem Gewicht des Wasserstoffatoms.",
          "fr": "La masse atomique relative est exactement égale au poids de l’atome d’hydrogène.",
          "ru": "Относительная атомная масса в точности равна весу атома водорода.",
          "ar": "الكتلة الذرية النسبية تساوي بالضبط وزن ذرة الهيدروجين.",
          "zh": "相对原子质量恰好等于氢原子的重量。",
          "ku": "Girseya atomê ya nisbî tam bi giraniya atoma hîdrojenê ye."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"0.5 mol CH4 gazı NK da 11.2 litre hacim kaplar ve 2.5 mol atom içerir (0.5 mol C + 2.0 mol H).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"0.5 mol CH4 gas occupies 11.2 liters of volume in NK and contains 2.5 mol atoms (0.5 mol C + 2.0 mol H).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"0,5 Mol CH4-Gas nimmt in NK 11,2 Liter Volumen ein und enthält 2,5 Mol-Atome (0,5 Mol C + 2,0 Mol H).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"0,5 mole de gaz CH4 occupe 11,2 litres de volume dans NK et contient 2,5 moles d'atomes (0,5 mole de C + 2,0 moles de H).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «0,5 моль газа СН4 занимает в НК 11,2 л объема и содержит 2,5 моль атомов (0,5 моль С + 2,0 моль Н).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يشغل 0.5 مول من غاز CH4 11.2 لترًا من الحجم في NK ويحتوي على 2.5 مول من ذرات (0.5 مول C + 2.0 مول H).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“0.5 mol CH4 气体在 NK 中占据 11.2 升体积，包含 2.5 mol 原子（0.5 mol C + 2.0 mol H）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"0,5 mol gaza CH4 li NK 11,2 lître qebar digire û 2,5 mol atoman (0,5 mol C + 2,0 mol H) dihewîne.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u06-twin15",
      "stem": {
        "tr": "Kimyanın Temel Kanunları ve Mol Kavramı konusu kapsamında Bağıl Atom Kütlesi ile ilgili yapılan çalışmalarda aşağıdaki bulgulardan hangisi bilimsel olarak doğrulanmıştır?",
        "en": "In the context of Basic Chemical Laws & The Mole, which of the following findings regarding Relative Atomic Mass is scientifically verified?",
        "de": "Im Rahmen der Einheit Chemische Grundgesetze & Mol: Welcher der folgenden Befunde zu Relative Atommasse ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l unité Lois Fondamentales & Mole, laquelle des constatations suivantes concernant Masse atomique relative est scientifiquement vérifiée?",
        "ru": "В контексте темы «Основные законы химии и моль», какой из следующих выводов относительно «Относительная атомная масса» научно подтверждён?",
        "ar": "في سياق موضوع \"قوانين الكيمياء الأساسية والمول\"، أي من النتائج التالية المتعلقة بـ \"الكتلة الذرية النسبية\" مثبتة علمياً؟",
        "zh": "在“化学基本定律与摩尔”主题范畴内，下列关于“相对原子质量”的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Zagonên Bingehîn ên Kîmyayê û Mol\" de, kîjan ji van encamên li ser \"Girseya Atomî ya nisbî\" ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Bir bileşikteki elementlerin kütlece birleşme oranı bileşiğin miktarına göre değişir.",
          "en": "The mass ratio of elements in a compound varies depending on the amount of the compound.",
          "de": "Das Massenverhältnis der Elemente in einer Verbindung variiert je nach Menge der Verbindung.",
          "fr": "Le rapport massique des éléments dans un composé varie en fonction de la quantité du composé.",
          "ru": "Массовое соотношение элементов в соединении варьируется в зависимости от количества соединения.",
          "ar": "تختلف نسبة كتلة العناصر في المركب حسب كمية المركب.",
          "zh": "化合物中元素的质量比根据化合物的量而变化。",
          "ku": "Rêjeya girseya hêmanên di pêkhateyek de li gorî mêjera pêkhateyê diguhere."
        },
        {
          "tr": "1 mol H2 gazı 6.02x10^23 tane atom içerir.",
          "en": "1 mole of H2 gas contains 6.02x10^23 atoms.",
          "de": "1 Mol H2-Gas enthält 6,02x10^23 Atome.",
          "fr": "1 mole de gaz H2 contient 6,02x10^23 atomes.",
          "ru": "1 моль газа H2 содержит 6,02x10^23 атома.",
          "ar": "يحتوي 1 مول من غاز H2 على 6.02×10^23 ذرة.",
          "zh": "1 摩尔 H2 气体包含 6.02x10^23 个原子。",
          "ku": "Di 1 mol gaza H2 de 6,02x10^23 atoman hene."
        },
        {
          "tr": "1 tane CO2 molekülü 44 gramdır.",
          "en": "1 CO2 molecule weighs 44 grams.",
          "de": "1 CO2-Molekül wiegt 44 Gramm.",
          "fr": "1 molécule de CO2 pèse 44 grammes.",
          "ru": "1 молекула CO2 весит 44 грамма.",
          "ar": "يزن جزيء ثاني أكسيد الكربون 44 جرامًا.",
          "zh": "1 个 CO2 分子重 44 克。",
          "ku": "1 molekulek CO2 44 gram giran e."
        },
        {
          "tr": "FeO ve Fe2O3 arasında katlı oran yoktur.",
          "en": "There is no multiple ratio between FeO and Fe2O3.",
          "de": "Es gibt kein Mehrfachverhältnis zwischen FeO und Fe2O3.",
          "fr": "Il n’existe pas de rapport multiple entre FeO et Fe2O3.",
          "ru": "Между FeO и Fe2O3 нет кратного соотношения.",
          "ar": "لا توجد نسبة متعددة بين FeO وFe2O3.",
          "zh": "FeO和Fe2O3之间没有倍数比。",
          "ku": "Di navbera FeO û Fe2O3 de rêjeyek pirjimar tune."
        },
        {
          "tr": "Katı ve sıvı maddeler için NK da 22.4 L hacim kuralı GEÇERLİ DEĞİLDİR; sadece gazlar içindir.",
          "en": "For solid and liquid substances, the 22.4 L volume rule in NC does NOT apply; For gases only.",
          "de": "Für feste und flüssige Stoffe gilt die 22,4-L-Volumenregel in NC NICHT; Nur für Gase.",
          "fr": "Pour les substances solides et liquides, la règle du volume de 22,4 L en NC ne s'applique PAS ; Pour les gaz uniquement.",
          "ru": "Для твердых и жидких веществ правило объема 22,4 л в Северной Каролине НЕ применяется; Только для газов.",
          "ar": "بالنسبة للمواد الصلبة والسائلة، لا تنطبق قاعدة الحجم 22.4 لترًا في NC؛ للغازات فقط.",
          "zh": "对于固体和液体物质，NC 中的 22.4 L 体积规则不适用；仅适用于气体。",
          "ku": "Ji bo maddeyên hişk û şil, qaîdeya qebareya 22,4 L di NC-ê de NA derbas dibe; Tenê ji bo gazan."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Katı ve sıvı maddeler için NK da 22.4 L hacim kuralı GEÇERLİ DEĞİLDİR; sadece gazlar içindir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"For solid and liquid substances, the 22.4 L volume rule in NC does NOT apply; For gases only.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Für feste und flüssige Stoffe gilt die 22,4-L-Volumenregel in NC NICHT; Nur für Gase.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Pour les substances solides et liquides, la règle du volume de 22,4 L en NC ne s'applique PAS ; Pour les gaz uniquement.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Для твердых и жидких веществ правило объема 22,4 л в Северной Каролине НЕ применяется; Только для газов.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"بالنسبة للمواد الصلبة والسائلة، لا تنطبق قاعدة الحجم 22.4 لترًا في NC؛ للغازات فقط.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“对于固体和液体物质，NC 中的 22.4 L 体积规则不适用；仅适用于气体。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ji bo maddeyên hişk û şil, qaîdeya qebareya 22,4 L di NC-ê de NA derbas dibe; Tenê ji bo gazan.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u06-twin16",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimyanın Temel Kanunları ve Mol Kavramı ünitesinde ele alınan Atom-Gram hakkında verilen ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Basic Chemical Laws & The Mole, which statement about Atom-Gram is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Chemische Grundgesetze & Mol: Welche Aussage über Atom-Gramm ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d examen de Lois Fondamentales & Mole, quelle affirmation relative à Atome-gramme est rigoureusement exacte?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Основные законы химии и моль», какое утверждение о «Атом-грамм» абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"قوانين الكيمياء الأساسية والمول\"، أي عبارة حول \"ذرة جرام\" صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“化学基本定律与摩尔”单元中关于“原子图谱”的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Zagonên Bingehîn ên Kîmyayê û Mol\", kîjan gotin li ser \"Atom-Gram\" bê guman rast e?"
      },
      "options": [
        {
          "tr": "Tepkimeye giren maddeler arasındaki stokiyometrik oran katsayılar ile belirlenir.",
          "en": "The stoichiometric ratio between the reactants is determined by coefficients.",
          "de": "Das stöchiometrische Verhältnis zwischen den Reaktanten wird durch Koeffizienten bestimmt.",
          "fr": "Le rapport stœchiométrique entre les réactifs est déterminé par des coefficients.",
          "ru": "Стехиометрическое соотношение между реагентами определяется коэффициентами.",
          "ar": "يتم تحديد النسبة المتكافئة بين المواد المتفاعلة بواسطة المعاملات.",
          "zh": "反应物之间的化学计量比由系数确定。",
          "ku": "Rêjeya stoichiometric di navbera reaktantan de ji hêla hevberan ve tê destnîşankirin."
        },
        {
          "tr": "Farklı 3 element içeren bileşikler arasında katlı oran aranabilir.",
          "en": "Multiple ratios can be sought between compounds containing three different elements.",
          "de": "Zwischen Verbindungen, die drei verschiedene Elemente enthalten, können mehrere Verhältnisse gesucht werden.",
          "fr": "Plusieurs rapports peuvent être recherchés entre des composés contenant trois éléments différents.",
          "ru": "Между соединениями, содержащими три разных элемента, можно искать несколько соотношений.",
          "ar": "يمكن البحث عن نسب متعددة بين المركبات التي تحتوي على ثلاثة عناصر مختلفة.",
          "zh": "可以在含有三种不同元素的化合物之间寻求多种比率。",
          "ku": "Rêjeyên pirjimar dikarin di navbera pêkhateyên ku sê hêmanên cihêreng vedigirin de werin lêgerîn."
        },
        {
          "tr": "Oda koşullarında (25 °C, 1 atm) 1 mol gaz 22.4 L hacim kaplar.",
          "en": "At room conditions (25 °C, 1 atm), 1 mole of gas occupies a volume of 22.4 L.",
          "de": "Bei Raumbedingungen (25 °C, 1 atm) nimmt 1 Mol Gas ein Volumen von 22,4 L ein.",
          "fr": "Dans des conditions ambiantes (25 °C, 1 atm), 1 mole de gaz occupe un volume de 22,4 L.",
          "ru": "В комнатных условиях (25°С, 1 атм) 1 моль газа занимает объём 22,4 л.",
          "ar": "في ظروف الغرفة (25 درجة مئوية، 1 ضغط جوي)، يشغل 1 مول من الغاز حجمًا قدره 22.4 لترًا.",
          "zh": "在室温条件下（25 °C，1 atm），1 摩尔气体占据的体积为 22.4 L。",
          "ku": "Di şert û mercên jûreyê de (25 °C, 1 atm), 1 mol gaz qebareya 22,4 L digire."
        },
        {
          "tr": "Eşit hacimdeki gazların kütleleri de daima birbirine eşittir.",
          "en": "The masses of equal volumes of gases are always equal.",
          "de": "Die Massen gleicher Gasvolumina sind immer gleich.",
          "fr": "Les masses de volumes égaux de gaz sont toujours égales.",
          "ru": "Массы равных объемов газов всегда равны.",
          "ar": "كتل الأحجام المتساوية من الغازات متساوية دائمًا.",
          "zh": "等体积气体的质量始终相等。",
          "ku": "Girseyên cildên yeksan ên gazan her dem wek hev in."
        },
        {
          "tr": "1 molekül-gram H2O ifadesi 1 tane su molekülünü belirtir.",
          "en": "The expression 1 molecule-gram H2O indicates 1 water molecule.",
          "de": "Der Ausdruck 1 Molekül-Gramm H2O bedeutet 1 Wassermolekül.",
          "fr": "L’expression 1 molécule-gramme H2O indique 1 molécule d’eau.",
          "ru": "Выражение 1 молекула-грамм H2O указывает на 1 молекулу воды.",
          "ar": "يشير التعبير 1 جزيء جرام H2O إلى جزيء ماء واحد.",
          "zh": "表述1分子克H2O表示1个水分子。",
          "ku": "Gotina 1 molekul-gram H2O 1 molekula avê nîşan dide."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Tepkimeye giren maddeler arasındaki stokiyometrik oran katsayılar ile belirlenir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The stoichiometric ratio between the reactants is determined by coefficients.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Das stöchiometrische Verhältnis zwischen den Reaktanten wird durch Koeffizienten bestimmt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le rapport stœchiométrique entre les réactifs est déterminé par des coefficients.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Стехиометрическое соотношение между реагентами определяется коэффициентами.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يتم تحديد النسبة المتكافئة بين المواد المتفاعلة بواسطة المعاملات.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“反应物之间的化学计量比由系数确定。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Rêjeya stoichiometric di navbera reaktantan de ji hêla hevberan ve tê destnîşankirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit06;
