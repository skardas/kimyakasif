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
    "zh": "化学基本定律与物质的量",
    "ku": "Zagonên Bingehîn ên Kîmyayê û Têgeha Molê"
  },
  "subtitle": {
    "tr": "Lavoisier, Proust, Dalton ve Avogadro Sayısı",
    "en": "Conservation of Mass & Stoichiometry",
    "de": "Lavoisier, Proust, Dalton und die Avogadro-Zahl",
    "fr": "Lavoisier, Proust, Dalton et le nombre d'Avogadro",
    "ru": "Лавуазье, Пруст, Дальтон и число Авогадро",
    "ar": "لافوازييه وبروست ودالتون وعدد أفوجادرو",
    "zh": "拉瓦锡、普鲁斯特、道尔顿与阿伏加德罗常数",
    "ku": "Lavoisier, Proust, Dalton û Hejmara Avogadro"
  },
  "facts": [
    {
      "id": "u06-f01",
      "fact": {
        "tr": "Kütlenin Korunumu Kanunu (Lavoisier): Kapalı bir sistemde kimyasal tepkimeye girenlerin kütleleri toplamı ürünlerin kütleleri toplamına eşittir.",
        "en": "Law of Conservation of Mass (Lavoisier): In a closed system, the sum of the masses of the reactants is equal to the sum of the masses of the products.",
        "de": "Massenerhaltungssatz (Lavoisier): In einem geschlossenen System ist die Summe der Massen der Reaktanten gleich der Summe der Massen der Produkte.",
        "fr": "Loi de conservation de la masse (Lavoisier) : Dans un système fermé, la somme des masses des réactifs est égale à la somme des masses des produits.",
        "ru": "Закон сохранения массы (Лавуазье): в закрытой системе сумма масс веществ, вступивших в реакцию, равна сумме масс продуктов.",
        "ar": "قانون حفظ الكتلة (لافوازييه): في النظام المغلق، مجموع كتل المواد المتفاعلة يساوي مجموع كتل النواتج.",
        "zh": "质量守恒定律（拉瓦锡）：在密闭体系中，反应物的质量总和等于生成物的质量总和。",
        "ku": "Zagona Parastina Girseyê (Lavoisier): Di sîstemeke girtî de, berhevoka girseyên reaktantan bi berhevoka girseyên hilberan re wekhev e."
      },
      "trap": {
        "tr": "Ağzı açık kapta gerçekleşen gaz çıkışlı bir tepkimede terazide okunan kütle azaldığı için bu tepkimede kütlenin korunumu kanunu geçerli değildir.",
        "en": "In a gas-evolving reaction carried out in an open container, the mass read on the balance decreases, so the law of conservation of mass does not hold for that reaction.",
        "de": "Bei einer Reaktion mit Gasentwicklung im offenen Gefäß nimmt die auf der Waage abgelesene Masse ab, daher gilt für diese Reaktion der Massenerhaltungssatz nicht.",
        "fr": "Lors d'une réaction avec dégagement gazeux réalisée dans un récipient ouvert, la masse lue sur la balance diminue ; la loi de conservation de la masse ne s'applique donc pas à cette réaction.",
        "ru": "В реакции с выделением газа, идущей в открытом сосуде, показание весов уменьшается, поэтому для этой реакции закон сохранения массы не выполняется.",
        "ar": "في تفاعل يتصاعد منه غاز ويُجرى في وعاء مفتوح تنقص الكتلة المقروءة على الميزان، ولذلك لا ينطبق قانون حفظ الكتلة على هذا التفاعل.",
        "zh": "在敞口容器中进行有气体放出的反应时，天平读数减小，因此质量守恒定律对该反应不成立。",
        "ku": "Di reaksiyoneke ku gaz jê derdikeve û di firaxeke devvekirî de pêk tê de, ji ber ku girseya li ser terazûyê tê xwendin kêm dibe, zagona parastina girseyê ji bo vê reaksiyonê derbasdar nîne."
      },
      "whyTrapIsFalse": {
        "tr": "Kütlenin korunumu kanunu bütün kimyasal tepkimelerde geçerlidir. Açık kapta oluşan gaz ortama kaçtığı için terazi azalma gösterir; kaptan çıkan gazın kütlesi de hesaba katıldığında (ya da tepkime kapalı kapta yapıldığında) toplam kütle değişmez.",
        "en": "The law of conservation of mass holds for every chemical reaction. In an open container the gas formed escapes, so the balance shows a decrease; when the mass of the escaped gas is included (or the reaction is run in a closed container), the total mass is unchanged.",
        "de": "Der Massenerhaltungssatz gilt für jede chemische Reaktion. Im offenen Gefäß entweicht das gebildete Gas, daher zeigt die Waage eine Abnahme; wird die Masse des entwichenen Gases mitgerechnet (oder die Reaktion im geschlossenen Gefäß durchgeführt), bleibt die Gesamtmasse unverändert.",
        "fr": "La loi de conservation de la masse s'applique à toute réaction chimique. Dans un récipient ouvert, le gaz formé s'échappe et la balance indique une diminution ; si l'on tient compte de la masse du gaz échappé (ou si la réaction a lieu en récipient fermé), la masse totale ne change pas.",
        "ru": "Закон сохранения массы выполняется для любой химической реакции. В открытом сосуде образующийся газ улетучивается, поэтому весы показывают уменьшение; если учесть массу улетевшего газа (или провести реакцию в закрытом сосуде), общая масса не меняется.",
        "ar": "قانون حفظ الكتلة ينطبق على كل تفاعل كيميائي. في الوعاء المفتوح يتسرب الغاز الناتج فيُظهر الميزان نقصًا؛ وعند احتساب كتلة الغاز المتسرب (أو إجراء التفاعل في وعاء مغلق) لا تتغير الكتلة الكلية.",
        "zh": "质量守恒定律对一切化学反应都成立。在敞口容器中生成的气体逸出，所以天平读数减小；把逸出气体的质量也计算在内（或在密闭容器中进行反应），总质量不变。",
        "ku": "Zagona parastina girseyê di hemû reaksiyonên kîmyewî de derbasdar e. Di firaxa devvekirî de gaza ku çêdibe direve derdorê, loma terazû kêmbûnê nîşan dide; dema girseya gaza ku ji firaxê derketiye jî tê hesibandin (an reaksiyon di firaxeke girtî de tê kirin), girseya giştî naguhere."
      }
    },
    {
      "id": "u06-f02",
      "fact": {
        "tr": "Sabit Oranlar Kanunu (Proust): Bir bileşiği oluşturan elementlerin kütleleri arasında daima sabit ve değişmez bir oran vardır.",
        "en": "Law of Constant Proportions (Proust): There is always a constant and unchangeable ratio between the masses of the elements that make up a compound.",
        "de": "Gesetz der konstanten Proportionen (Proust): Es gibt immer ein konstantes und unveränderliches Verhältnis zwischen den Massen der Elemente, aus denen eine Verbindung besteht.",
        "fr": "Loi des proportions constantes (Proust) : Il existe toujours un rapport constant et immuable entre les masses des éléments qui composent un composé.",
        "ru": "Закон постоянства состава (Пруст): массы элементов, образующих соединение, всегда находятся в постоянном, неизменном отношении.",
        "ar": "قانون النسب الثابتة (بروست): توجد دائمًا نسبة ثابتة لا تتغير بين كتل العناصر المكوّنة للمركب.",
        "zh": "定比定律（普鲁斯特）：组成某一化合物的各元素的质量比总是固定不变的。",
        "ku": "Zagona Rêjeyên Sabît (Proust): Di navbera girseyên elementên ku pêkhateyekê pêk tînin de her tim rêjeyeke sabît û neguhêr heye."
      },
      "trap": {
        "tr": "Bir bileşikteki elementlerin kütlece birleşme oranı bileşiğin miktarına göre değişir.",
        "en": "The mass ratio of elements in a compound varies depending on the amount of the compound.",
        "de": "Das Massenverhältnis der Elemente in einer Verbindung variiert je nach Menge der Verbindung.",
        "fr": "Le rapport massique des éléments dans un composé varie en fonction de la quantité du composé.",
        "ru": "Массовое отношение элементов в соединении зависит от количества этого соединения.",
        "ar": "تتغير نسبة اتحاد العناصر بالكتلة في المركب بتغير كمية المركب.",
        "zh": "化合物中各元素的质量比随化合物的量而变化。",
        "ku": "Rêjeya girseyî ya yekbûna elementên di pêkhateyekê de li gorî mîqdara pêkhateyê diguhere."
      },
      "whyTrapIsFalse": {
        "tr": "Bileşiğin miktarı artınca her elementin kütlesi aynı oranda artar, bu yüzden kütlece oran değişmez. Örneğin 9 g suda da 90 g suda da mH/mO = 1/8'dir.",
        "en": "When the amount of the compound increases, the mass of each element increases in the same proportion, so the mass ratio does not change. For example, mH/mO = 1/8 in 9 g of water as well as in 90 g of water.",
        "de": "Wenn die Menge der Verbindung zunimmt, steigt die Masse jedes Elements im gleichen Verhältnis, daher ändert sich das Massenverhältnis nicht. Zum Beispiel ist mH/mO = 1/8 sowohl in 9 g als auch in 90 g Wasser.",
        "fr": "Quand la quantité du composé augmente, la masse de chaque élément augmente dans la même proportion, donc le rapport des masses ne change pas. Par exemple, mH/mO = 1/8 dans 9 g comme dans 90 g d'eau.",
        "ru": "При увеличении количества соединения масса каждого элемента возрастает в той же пропорции, поэтому массовое соотношение не меняется. Например, mH/mO = 1/8 и в 9 г, и в 90 г воды.",
        "ar": "عند زيادة كمية المركب تزداد كتلة كل عنصر بالنسبة نفسها، لذلك لا تتغير النسبة الكتلية. فمثلًا mH/mO = 1/8 في 9 g من الماء وفي 90 g منه أيضًا.",
        "zh": "化合物的量增加时，各元素的质量按相同比例增加，所以质量比不变。例如 9 g 水和 90 g 水中都是 mH/mO = 1/8。",
        "ku": "Dema mîqdara pêkhateyê zêde dibe, girseya her elementê bi heman rêjeyê zêde dibe, loma rêjeya girseyî naguhere. Mînak, hem di 9 g avê de hem jî di 90 g avê de mH/mO = 1/8 e."
      }
    },
    {
      "id": "u06-f03",
      "fact": {
        "tr": "Katlı Oranlar Kanunu (Dalton): İki element birden fazla bileşik oluşturuyorsa, elementlerden birinin sabit kütlesiyle birleşen diğer elementin kütleleri arasında basit tam sayılı bir oran vardır.",
        "en": "Law of Multiple Proportions (Dalton): If two elements form more than one compound, the masses of one element that combine with a fixed mass of the other are in a ratio of small whole numbers.",
        "de": "Gesetz der multiplen Proportionen (Dalton): Bilden zwei Elemente mehr als eine Verbindung, so stehen die Massen des einen Elements, die sich mit einer festen Masse des anderen verbinden, im Verhältnis kleiner ganzer Zahlen.",
        "fr": "Loi des proportions multiples (Dalton) : si deux éléments forment plus d'un composé, les masses de l'un qui se combinent à une masse fixe de l'autre sont dans un rapport de petits nombres entiers.",
        "ru": "Закон кратных отношений (Дальтон): если два элемента образуют более одного соединения, то массы одного элемента, приходящиеся на одну и ту же массу другого, относятся как небольшие целые числа.",
        "ar": "قانون النسب المتضاعفة (دالتون): إذا كوّن عنصران أكثر من مركب واحد، فإن كتل أحد العنصرين التي تتحد مع كتلة ثابتة من العنصر الآخر تكون بنسبة أعداد صحيحة بسيطة.",
        "zh": "倍比定律（道尔顿）：如果两种元素能形成多种化合物，则与一定质量的一种元素相化合的另一种元素的质量之间成简单整数比。",
        "ku": "Zagona Rêjeyên Pirjimar (Dalton): Heke du element ji yekê zêdetir pêkhate çêkin, girseyên elementekê yên ku bi girseyeke sabît a elementa din re yek dibin, di navbera xwe de rêjeyeke bi hejmarên tam ên sade nîşan didin."
      },
      "trap": {
        "tr": "Üç farklı element içeren bileşikler (örneğin H2SO4 ve H2SO3) arasında da katlı oran aranır.",
        "en": "The law of multiple proportions is also applied between compounds containing three different elements (for example H2SO4 and H2SO3).",
        "de": "Das Gesetz der multiplen Proportionen wird auch auf Verbindungen aus drei verschiedenen Elementen (zum Beispiel H2SO4 und H2SO3) angewendet.",
        "fr": "La loi des proportions multiples s'applique aussi entre des composés contenant trois éléments différents (par exemple H2SO4 et H2SO3).",
        "ru": "Кратные отношения ищут и между соединениями из трёх разных элементов (например, H2SO4 и H2SO3).",
        "ar": "يُطبَّق قانون النسب المتضاعفة أيضًا بين المركبات التي تحتوي على ثلاثة عناصر مختلفة (مثل H2SO4 وH2SO3).",
        "zh": "含三种元素的化合物之间(如 H2SO4 和 H2SO3)也可以讨论倍比关系。",
        "ku": "Di navbera pêkhateyên ku sê elementên cuda dihewînin de jî (mînak, H2SO4 û H2SO3) li rêjeya pirjimar tê gerîn."
      },
      "whyTrapIsFalse": {
        "tr": "Katlı oranlar kanunu yalnızca aynı iki elementin oluşturduğu farklı bileşikler için tanımlıdır. H2SO4 ile H2SO3 gibi üç elementli bileşikler arasında katlı oran aranmaz.",
        "en": "The law of multiple proportions is defined only for different compounds formed by the same two elements. No multiple proportion is sought between three-element compounds such as H2SO4 and H2SO3.",
        "de": "Das Gesetz der multiplen Proportionen gilt nur für verschiedene Verbindungen derselben zwei Elemente. Zwischen Verbindungen aus drei Elementen wie H2SO4 und H2SO3 wird kein multiples Verhältnis gesucht.",
        "fr": "La loi des proportions multiples ne concerne que des composés différents formés par les deux mêmes éléments. On ne cherche pas de proportion multiple entre des composés à trois éléments comme H2SO4 et H2SO3.",
        "ru": "Закон кратных отношений определён только для разных соединений, образованных одними и теми же двумя элементами. Между трёхэлементными соединениями, такими как H2SO4 и H2SO3, кратное отношение не ищут.",
        "ar": "قانون النسب المتضاعفة معرَّف فقط للمركبات المختلفة التي يكوّنها العنصران نفساهما. ولا يُبحث عن نسبة متضاعفة بين مركبات ثلاثية العناصر مثل H2SO4 وH2SO3.",
        "zh": "倍比定律只适用于由相同两种元素组成的不同化合物。像 H2SO4 和 H2SO3 这样含三种元素的化合物之间不讨论倍比关系。",
        "ku": "Zagona rêjeyên pirjimar tenê ji bo pêkhateyên cuda yên ku ji heman du elementan pêk tên derbasdar e. Di navbera pêkhateyên sê-elementî yên wekî H2SO4 û H2SO3 de li rêjeya pirjimar nayê gerîn."
      }
    },
    {
      "id": "u06-f04",
      "fact": {
        "tr": "Basit formülleri aynı olan bileşikler arasında (örn. C2H4 ve C3H6; her ikisi CH2) katlı oran 1 olacağından katlı oran aranmaz.",
        "en": "The law of multiple proportions is not applied between compounds with the same simplest formula (e.g. C2H4 and C3H6; both CH2), because the ratio would be 1.",
        "de": "Zwischen Verbindungen mit derselben einfachsten Formel (z. B. C2H4 und C3H6; beide CH2) wird das Gesetz der multiplen Proportionen nicht angewendet, da das Verhältnis 1 wäre.",
        "fr": "La loi des proportions multiples ne s'applique pas entre des composés de même formule simple (p. ex. C2H4 et C3H6 ; tous deux CH2), car le rapport vaudrait 1.",
        "ru": "Между соединениями с одинаковой простейшей формулой (например, C2H4 и C3H6 — у обоих CH2) кратное отношение не ищут, так как оно равно 1.",
        "ar": "لا يُطبَّق قانون النسب المتضاعفة بين المركبات التي لها الصيغة الأولية نفسها (مثل C2H4 وC3H6؛ وكلاهما CH2)، لأن النسبة ستكون 1.",
        "zh": "最简式相同的化合物之间(如 C2H4 和 C3H6，最简式均为 CH2)比值为 1，因此不讨论倍比关系。",
        "ku": "Di navbera pêkhateyên ku formula wan a sade yek e de (mînak, C2H4 û C3H6; her du jî CH2) li rêjeya pirjimar nayê gerîn, ji ber ku rêje dê 1 be."
      },
      "trap": {
        "tr": "C2H4 ve C4H8 arasında katlı oranlar kanunu geçerlidir.",
        "en": "The law of multiple proportions applies between C2H4 and C4H8.",
        "de": "Zwischen C2H4 und C4H8 gilt das Gesetz der multiplen Proportionen.",
        "fr": "La loi des proportions multiples s’applique entre C2H4 et C4H8.",
        "ru": "Для C2H4 и C4H8 выполняется закон кратных отношений.",
        "ar": "ينطبق قانون النسب المتضاعفة بين C2H4 وC4H8.",
        "zh": "C2H4 和 C4H8 之间符合倍比定律。",
        "ku": "Zagona rêjeyên pirjimar di navbera C2H4 û C4H8 de derbasdar e."
      },
      "whyTrapIsFalse": {
        "tr": "C2H4 ile C4H8'in basit formülü aynıdır (CH2); eşit karbon kütlesine karşılık hidrojen kütleleri oranı 1 çıkar. Oran 1 olduğunda katlı oran söz konusu değildir.",
        "en": "C2H4 and C4H8 have the same empirical formula (CH2); for equal masses of carbon the ratio of hydrogen masses is 1. When the ratio is 1, there is no multiple proportion.",
        "de": "C2H4 und C4H8 haben dieselbe Verhältnisformel (CH2); bei gleicher Kohlenstoffmasse ist das Verhältnis der Wasserstoffmassen 1. Bei einem Verhältnis von 1 liegt kein multiples Verhältnis vor.",
        "fr": "C2H4 et C4H8 ont la même formule brute simplifiée (CH2) ; pour des masses égales de carbone, le rapport des masses d'hydrogène vaut 1. Quand ce rapport vaut 1, il n'y a pas de proportion multiple.",
        "ru": "C2H4 и C4H8 имеют одинаковую простейшую формулу (CH2); при равной массе углерода отношение масс водорода равно 1. Если отношение равно 1, кратного отношения нет.",
        "ar": "للمركبين C2H4 وC4H8 الصيغة الأولية نفسها (CH2)، فعند تساوي كتلة الكربون تكون نسبة كتلتي الهيدروجين 1. وعندما تكون النسبة 1 لا توجد نسبة متضاعفة.",
        "zh": "C2H4 和 C4H8 的最简式相同(CH2)；碳质量相等时氢的质量比为 1。比值为 1 时不存在倍比关系。",
        "ku": "Formula sade ya C2H4 û C4H8 yek e (CH2); li hember girseyên wekhev ên karbonê rêjeya girseyên hîdrojenê 1 derdikeve. Dema rêje 1 be, rêjeya pirjimar nayê gotin."
      }
    },
    {
      "id": "u06-f05",
      "fact": {
        "tr": "1 mol tanecik 6,02x10^23 tane tanecik (Avogadro sayısı, NA) içerir.",
        "en": "1 mole of particles contains 6.02x10^23 particles (Avogadro's number, NA).",
        "de": "1 Mol Partikel enthält 6,02x10^23 Partikel (Avogadro-Zahl, NA).",
        "fr": "1 mole de particules contient 6,02x10^23 particules (nombre d'Avogadro, NA).",
        "ru": "1 моль частиц содержит 6,02x10^23 частиц (число Авогадро, NA).",
        "ar": "1 mol من الجسيمات يحتوي على 6.02x10^23 جسيم (عدد أفوجادرو، NA).",
        "zh": "1 mol 微粒含有 6.02x10^23 个微粒(阿伏加德罗常数，NA)。",
        "ku": "1 mol perçe 6,02x10^23 perçeyan dihewîne (hejmara Avogadro, NA)."
      },
      "trap": {
        "tr": "1 mol H2 gazı 6,02x10^23 tane atom içerir.",
        "en": "1 mole of H2 gas contains 6.02x10^23 atoms.",
        "de": "1 Mol H2-Gas enthält 6,02x10^23 Atome.",
        "fr": "1 mole de gaz H2 contient 6,02x10^23 atomes.",
        "ru": "1 моль газа H2 содержит 6,02x10^23 атома.",
        "ar": "يحتوي 1 mol من غاز H2 على 6.02x10^23 ذرة.",
        "zh": "1 mol H2 含有 6.02x10^23 个原子。",
        "ku": "1 mol gaza H2 6,02x10^23 atoman dihewîne."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak molekül sayısı ile atom sayısını karıştırır: 1 mol H2, 6,02x10^23 tane molekül içerir. Her molekülde 2 H atomu olduğundan atom sayısı 2 x 6,02x10^23 = 1,204x10^24'tür.",
        "en": "The trap confuses the number of molecules with the number of atoms: 1 mole of H2 contains 6.02x10^23 molecules. Since each molecule has 2 H atoms, the number of atoms is 2 x 6.02x10^23 = 1.204x10^24.",
        "de": "Die Falle verwechselt Molekülzahl und Atomzahl: 1 Mol H2 enthält 6,02x10^23 Moleküle. Da jedes Molekül 2 H-Atome hat, beträgt die Atomzahl 2 x 6,02x10^23 = 1,204x10^24.",
        "fr": "Le piège confond nombre de molécules et nombre d'atomes : 1 mole de H2 contient 6,02x10^23 molécules. Chaque molécule ayant 2 atomes H, le nombre d'atomes est 2 x 6,02x10^23 = 1,204x10^24.",
        "ru": "Ловушка путает число молекул и число атомов: 1 моль H2 содержит 6,02x10^23 молекул. Так как в каждой молекуле 2 атома H, число атомов равно 2 x 6,02x10^23 = 1,204x10^24.",
        "ar": "الفخ يخلط بين عدد الجزيئات وعدد الذرات: 1 mol من H2 يحتوي على 6.02x10^23 جزيء. ولأن في كل جزيء ذرتي H فإن عدد الذرات 2 x 6.02x10^23 = 1.204x10^24.",
        "zh": "这一说法混淆了分子数和原子数：1 mol H2 含 6.02x10^23 个分子。每个分子含 2 个 H 原子，所以原子数为 2 x 6.02x10^23 = 1.204x10^24。",
        "ku": "Xefik hejmara molekulan û hejmara atoman tevlihev dike: 1 mol H2 6,02x10^23 molekulan dihewîne. Ji ber ku di her molekulê de 2 atomên H hene, hejmara atoman 2 x 6,02x10^23 = 1,204x10^24 e."
      },
      "osymTip": {
        "tr": "1 mol H2 molekülü 2 mol H atomu içerir!",
        "en": "1 mole of H2 molecules contains 2 moles of H atoms!",
        "de": "1 Mol H2-Moleküle enthält 2 Mol H-Atome!",
        "fr": "1 mole de molécules H2 contient 2 moles d’atomes H !",
        "ru": "1 моль молекул H2 содержит 2 моль атомов H!",
        "ar": "1 mol من جزيئات H2 يحتوي على 2 mol من ذرات H!",
        "zh": "1 mol H2 分子含有 2 mol H 原子！",
        "ku": "1 mol molekulên H2 2 mol atomên H dihewîne!"
      }
    },
    {
      "id": "u06-f06",
      "fact": {
        "tr": "Normal koşullarda (0 °C ve 1 atm) 1 mol ideal gaz yaklaşık 22,4 litre hacim kaplar.",
        "en": "Under normal conditions (0 °C and 1 atm), 1 mole of ideal gas occupies about 22.4 liters.",
        "de": "Unter Normbedingungen (0 °C und 1 atm) nimmt 1 Mol ideales Gas etwa 22,4 Liter ein.",
        "fr": "Dans les conditions normales (0 °C et 1 atm), 1 mole de gaz parfait occupe environ 22,4 litres.",
        "ru": "При нормальных условиях (0 °C и 1 атм) 1 моль идеального газа занимает примерно 22,4 л.",
        "ar": "في الظروف القياسية (0 °C و1 atm) يشغل 1 mol من الغاز المثالي نحو 22.4 L.",
        "zh": "在标准状况(0 °C、1 atm)下，1 mol 理想气体的体积约为 22.4 L。",
        "ku": "Di şertên normal de (0 °C û 1 atm) 1 mol gaza îdeal nêzîkî 22,4 lître qebare digire."
      },
      "trap": {
        "tr": "Oda koşullarında (25 °C, 1 atm) 1 mol gaz 22,4 L hacim kaplar.",
        "en": "At room conditions (25 °C, 1 atm), 1 mole of gas occupies a volume of 22.4 L.",
        "de": "Bei Raumbedingungen (25 °C, 1 atm) nimmt 1 Mol Gas ein Volumen von 22,4 L ein.",
        "fr": "Dans des conditions ambiantes (25 °C, 1 atm), 1 mole de gaz occupe un volume de 22,4 L.",
        "ru": "При комнатных условиях (25 °C, 1 атм) 1 моль газа занимает объём 22,4 л.",
        "ar": "في ظروف الغرفة (25 °C، 1 atm)، يشغل 1 mol من الغاز حجمًا قدره 22.4 L.",
        "zh": "在常温常压(25 °C、1 atm)下，1 mol 气体的体积为 22.4 L。",
        "ku": "Di şertên odeyê de (25 °C, 1 atm) 1 mol gaz 22,4 L qebare digire."
      },
      "whyTrapIsFalse": {
        "tr": "22,4 L değeri yalnızca 0 °C ve 1 atm (NK) için geçerlidir. 25 °C'de gaz genleştiği için 1 mol gaz yaklaşık 24,5 L hacim kaplar.",
        "en": "The value 22.4 L applies only to 0 °C and 1 atm (STP). At 25 °C the gas expands, so 1 mole of gas occupies about 24.5 L.",
        "de": "Der Wert 22,4 L gilt nur für 0 °C und 1 atm (Normbedingungen). Bei 25 °C dehnt sich das Gas aus, sodass 1 Mol Gas etwa 24,5 L einnimmt.",
        "fr": "La valeur 22,4 L ne vaut que pour 0 °C et 1 atm (CNTP). À 25 °C le gaz se dilate, donc 1 mole de gaz occupe environ 24,5 L.",
        "ru": "Значение 22,4 л относится только к 0 °C и 1 атм (н. у.). При 25 °C газ расширяется, поэтому 1 моль газа занимает около 24,5 л.",
        "ar": "القيمة 22.4 L صحيحة فقط عند 0 °C و1 atm (الظروف القياسية). وعند 25 °C يتمدد الغاز فيشغل 1 mol منه نحو 24.5 L.",
        "zh": "22.4 L 只适用于 0 °C、1 atm(标准状况)。25 °C 时气体膨胀，1 mol 气体约占 24.5 L。",
        "ku": "Nirxa 22,4 L tenê ji bo 0 °C û 1 atm (şertên normal) derbasdar e. Di 25 °C de gaz fireh dibe, loma 1 mol gaz nêzîkî 24,5 L qebare digire."
      },
      "osymTip": {
        "tr": "Oda koşullarında (25 °C, 1 atm) bu değer yaklaşık 24,5 L'dir.",
        "en": "Under room conditions (25 °C, 1 atm) this value is about 24.5 L.",
        "de": "Unter Raumbedingungen (25 °C, 1 atm) beträgt dieser Wert etwa 24,5 L.",
        "fr": "Dans les conditions ambiantes (25 °C, 1 atm), cette valeur est d’environ 24,5 L.",
        "ru": "При комнатных условиях (25 °C, 1 атм) это значение составляет около 24,5 л.",
        "ar": "في ظروف الغرفة (25 °C و1 atm) تبلغ هذه القيمة نحو 24.5 L.",
        "zh": "在常温常压(25 °C、1 atm)下，该值约为 24.5 L。",
        "ku": "Di şertên odeyê de (25 °C, 1 atm) ev nirx nêzîkî 24,5 L e."
      }
    },
    {
      "id": "u06-f07",
      "fact": {
        "tr": "Mol sayısı formülü: n = m / MA (kütle / mol kütlesi) veya n = N / NA'dır.",
        "en": "The formula for the number of moles is: n = m / MA (mass / molar mass) or n = N / NA.",
        "de": "Die Formel für die Molzahl lautet: n = m / MA (Masse / Molmasse) oder n = N / NA.",
        "fr": "La formule du nombre de moles est : n = m/MA (masse/masse molaire) ou n = N/NA.",
        "ru": "Количество вещества: n = m / MA (масса / молярная масса) или n = N / NA.",
        "ar": "صيغة عدد المولات هي: n = m / MA (الكتلة / الكتلة المولية) أو n = N / NA.",
        "zh": "物质的量的计算公式：n = m / MA(质量 / 摩尔质量)或 n = N / NA。",
        "ku": "Formula hejmara molan: n = m / MA (girse / girseya molî) an n = N / NA."
      },
      "trap": {
        "tr": "Mol sayısı kütle ile mol kütlesinin çarpımına eşittir.",
        "en": "The number of moles is equal to the mass multiplied by the molar mass.",
        "de": "Die Anzahl der Mol ist gleich der Masse multipliziert mit der Molmasse.",
        "fr": "Le nombre de moles est égal à la masse multipliée par la masse molaire.",
        "ru": "Количество вещества равно произведению массы на молярную массу.",
        "ar": "عدد المولات يساوي الكتلة مضروبة في الكتلة المولية.",
        "zh": "物质的量等于质量乘以摩尔质量。",
        "ku": "Hejmara molan bi lêxistina girseyê bi girseya molî re wekhev e."
      },
      "whyTrapIsFalse": {
        "tr": "Mol sayısı kütlenin mol kütlesine bölünmesiyle bulunur (n = m / MA). Çarpım yapılırsa birimi g²/mol olan anlamsız bir nicelik elde edilir.",
        "en": "The number of moles is found by dividing the mass by the molar mass (n = m / MA). Multiplying them gives a meaningless quantity with the unit g²/mol.",
        "de": "Die Stoffmenge erhält man, indem man die Masse durch die molare Masse teilt (n = m / MA). Multipliziert man sie, entsteht eine sinnlose Größe mit der Einheit g²/mol.",
        "fr": "La quantité de matière s'obtient en divisant la masse par la masse molaire (n = m / MA). En les multipliant, on obtient une grandeur dénuée de sens, en g²/mol.",
        "ru": "Количество вещества находят делением массы на молярную массу (n = m / MA). При умножении получается бессмысленная величина с единицей г²/моль.",
        "ar": "يُحسب عدد المولات بقسمة الكتلة على الكتلة المولية (n = m / MA). أما ضربهما فيعطي كمية لا معنى لها وحدتها g²/mol.",
        "zh": "物质的量等于质量除以摩尔质量(n = m / MA)。若相乘，得到的是单位为 g²/mol 的无意义的量。",
        "ku": "Hejmara molan bi parvekirina girseyê li ser girseya molî tê dîtin (n = m / MA). Heke ev her du bi hev werin lêxistin, mezinahiyeke bêwate bi yekeya g²/mol derdikeve."
      }
    },
    {
      "id": "u06-f08",
      "fact": {
        "tr": "Mol kütlesi (MA), 1 mol maddenin gram cinsinden kütlesidir; sayıca, o maddenin bir taneciğinin akb cinsinden kütlesine eşittir.",
        "en": "Molar mass (MA) is the mass in grams of 1 mole of a substance; numerically it equals the mass of one particle of that substance in amu.",
        "de": "Die Molmasse (MA) ist die Masse von 1 Mol eines Stoffes in Gramm; ihr Zahlenwert ist gleich der Masse eines Teilchens dieses Stoffes in u.",
        "fr": "La masse molaire (MA) est la masse en grammes de 1 mole d'une substance ; sa valeur numérique est égale à la masse d'une particule de cette substance en uma.",
        "ru": "Молярная масса (MA) — масса 1 моль вещества в граммах; численно она равна массе одной частицы этого вещества в а. е. м.",
        "ar": "الكتلة المولية (MA) هي كتلة 1 mol من المادة بالجرام؛ وهي تساوي عدديًا كتلة جسيم واحد من هذه المادة بوحدة الكتلة الذرية (amu).",
        "zh": "摩尔质量(MA)是 1 mol 物质以克为单位的质量；其数值等于该物质一个微粒以原子质量单位(u)表示的质量。",
        "ku": "Girseya molî (MA) girseya 1 mol madeyê ya bi gram e; ji aliyê hejmarî ve bi girseya perçeyekî wê madeyê ya bi akb re wekhev e."
      },
      "trap": {
        "tr": "1 tane CO2 molekülü 44 gramdır.",
        "en": "1 CO2 molecule weighs 44 grams.",
        "de": "1 CO2-Molekül wiegt 44 Gramm.",
        "fr": "1 molécule de CO2 pèse 44 grammes.",
        "ru": "Масса одной молекулы CO2 равна 44 г.",
        "ar": "كتلة جزيء واحد من CO2 تساوي 44 g.",
        "zh": "1 个 CO2 分子的质量是 44 g。",
        "ku": "Molekuleke CO2 44 gram e."
      },
      "whyTrapIsFalse": {
        "tr": "44 sayısı tek bir CO2 molekülü için akb, 1 mol CO2 için gram birimindedir. Tek bir molekülün kütlesi 44 / NA ≈ 7,3x10^-23 g kadardır.",
        "en": "The number 44 is in amu for a single CO2 molecule and in grams for 1 mole of CO2. A single molecule has a mass of 44 / NA ≈ 7.3x10^-23 g.",
        "de": "Die Zahl 44 steht für ein einzelnes CO2-Molekül in u und für 1 Mol CO2 in Gramm. Ein einzelnes Molekül hat eine Masse von 44 / NA ≈ 7,3x10^-23 g.",
        "fr": "Le nombre 44 s'exprime en u pour une seule molécule de CO2 et en grammes pour 1 mole de CO2. Une seule molécule a une masse de 44 / NA ≈ 7,3x10^-23 g.",
        "ru": "Число 44 выражено в а. е. м. для одной молекулы CO2 и в граммах для 1 моль CO2. Масса одной молекулы равна 44 / NA ≈ 7,3x10^-23 г.",
        "ar": "العدد 44 بوحدة amu لجزيء CO2 واحد، وبالجرام لمول واحد من CO2. وكتلة الجزيء الواحد 44 / NA ≈ 7.3x10^-23 g.",
        "zh": "44 对单个 CO2 分子而言单位是 u，对 1 mol CO2 而言单位才是 g。单个分子的质量约为 44 / NA ≈ 7.3x10^-23 g。",
        "ku": "Hejmara 44 ji bo molekuleke CO2 bi yekeya akb, ji bo 1 mol CO2 jî bi gram e. Girseya molekuleke tenê nêzîkî 44 / NA ≈ 7,3x10^-23 g e."
      },
      "osymTip": {
        "tr": "1 tane CO2 44 akb'dir; 1 mol CO2 44 gramdır.",
        "en": "1 CO2 molecule is 44 amu; 1 mole of CO2 is 44 grams.",
        "de": "1 CO2-Molekül hat 44 u; 1 Mol CO2 wiegt 44 Gramm.",
        "fr": "1 molécule de CO2 pèse 44 uma ; 1 mole de CO2 pèse 44 grammes.",
        "ru": "Одна молекула CO2 имеет массу 44 а. е. м.; 1 моль CO2 — 44 г.",
        "ar": "جزيء واحد من CO2 كتلته 44 amu، و1 mol من CO2 كتلته 44 g.",
        "zh": "1 个 CO2 分子为 44 u；1 mol CO2 为 44 g。",
        "ku": "Molekuleke CO2 44 akb e; 1 mol CO2 44 gram e."
      }
    },
    {
      "id": "u06-f09",
      "fact": {
        "tr": "Avogadro Hipotezi: Aynı sıcaklık ve basınç altında eşit hacimdeki tüm ideal gazlar eşit sayıda molekül içerir.",
        "en": "Avogadro Hypothesis: Under the same temperature and pressure, all equal volumes of ideal gases contain the same number of molecules.",
        "de": "Avogadro-Hypothese: Bei gleicher Temperatur und gleichem Druck enthalten alle gleichen Volumina idealer Gase die gleiche Anzahl an Molekülen.",
        "fr": "Hypothèse d'Avogadro : Sous la même température et pression, tous les volumes égaux de gaz parfaits contiennent le même nombre de molécules.",
        "ru": "Гипотеза Авогадро: в равных объёмах любых идеальных газов при одинаковых температуре и давлении содержится одинаковое число молекул.",
        "ar": "فرضية أفوجادرو: عند درجة الحرارة والضغط نفسيهما تحتوي الحجوم المتساوية من جميع الغازات المثالية على العدد نفسه من الجزيئات.",
        "zh": "阿伏加德罗假说：在相同的温度和压强下，相同体积的任何理想气体都含有相同数目的分子。",
        "ku": "Hîpoteza Avogadro: Di heman germahî û zextê de, qebareyên wekhev ên hemû gazên îdeal hejmareke wekhev a molekulan dihewînin."
      },
      "trap": {
        "tr": "Eşit hacimdeki gazların kütleleri de daima birbirine eşittir.",
        "en": "The masses of equal volumes of gases are always equal.",
        "de": "Die Massen gleicher Gasvolumina sind immer gleich.",
        "fr": "Les masses de volumes égaux de gaz sont toujours égales.",
        "ru": "Массы равных объёмов газов тоже всегда равны.",
        "ar": "كتل الحجوم المتساوية من الغازات متساوية دائمًا.",
        "zh": "等体积气体的质量也总是相等。",
        "ku": "Girseyên gazên bi qebareyên wekhev jî her tim bi hev re wekhev in."
      },
      "whyTrapIsFalse": {
        "tr": "Avogadro hipotezi eşit hacimde eşit sayıda molekül olduğunu söyler, eşit kütle değil. Moleküllerin kütlesi farklı olduğundan aynı koşullarda 1 L O2, 1 L H2'den 16 kat ağırdır.",
        "en": "Avogadro's hypothesis states equal numbers of molecules in equal volumes, not equal masses. Because molecules have different masses, under the same conditions 1 L of O2 is 16 times heavier than 1 L of H2.",
        "de": "Die Avogadro-Hypothese besagt gleiche Molekülzahlen in gleichen Volumina, nicht gleiche Massen. Da Moleküle unterschiedliche Massen haben, ist unter gleichen Bedingungen 1 L O2 16-mal schwerer als 1 L H2.",
        "fr": "L'hypothèse d'Avogadro affirme un même nombre de molécules dans des volumes égaux, pas une même masse. Les molécules ayant des masses différentes, dans les mêmes conditions 1 L de O2 est 16 fois plus lourd que 1 L de H2.",
        "ru": "Гипотеза Авогадро говорит о равном числе молекул в равных объёмах, а не о равной массе. Так как массы молекул различны, при одинаковых условиях 1 л O2 в 16 раз тяжелее 1 л H2.",
        "ar": "تنص فرضية أفوجادرو على تساوي عدد الجزيئات في الحجوم المتساوية لا تساوي الكتل. ولأن كتل الجزيئات مختلفة، فإن 1 L من O2 أثقل من 1 L من H2 بـ16 مرة في الظروف نفسها.",
        "zh": "阿伏加德罗假说讲的是同体积含相同分子数，而不是质量相同。由于分子质量不同，同条件下 1 L O2 的质量是 1 L H2 的 16 倍。",
        "ku": "Hîpoteza Avogadro dibêje ku di qebareyên wekhev de hejmara molekulan wekhev e, ne girse. Ji ber ku girseyên molekulan cuda ne, di heman şertan de 1 L O2 16 qat ji 1 L H2 girantir e."
      }
    },
    {
      "id": "u06-f10",
      "fact": {
        "tr": "Bağıl atom kütlesi karbon-12 (12C) izotopunun kütlesinin 1/12'si temel alınarak hesaplanmıştır.",
        "en": "Relative atomic mass was calculated based on 1/12 of the mass of the carbon-12 (12C) isotope.",
        "de": "Die relative Atommasse wurde auf der Grundlage von 1/12 der Masse des Kohlenstoff-12-Isotops (12C) berechnet.",
        "fr": "La masse atomique relative a été calculée sur la base de 1/12 de la masse de l’isotope du carbone 12 (12C).",
        "ru": "Относительная атомная масса определяется по отношению к 1/12 массы атома изотопа углерода-12 (12C).",
        "ar": "تُحسب الكتلة الذرية النسبية على أساس 1/12 من كتلة نظير الكربون-12 (12C).",
        "zh": "相对原子质量是以碳-12(12C)原子质量的 1/12 为标准计算的。",
        "ku": "Girseya atomî ya nisbî li ser bingeha 1/12-ê girseya îzotopa karbon-12 (12C) hatiye hesibandin."
      },
      "trap": {
        "tr": "Bağıl atom kütleleri günümüzde hidrojen atomunun kütlesi 1 kabul edilerek belirlenir.",
        "en": "Today, relative atomic masses are determined by taking the mass of the hydrogen atom as 1.",
        "de": "Relative Atommassen werden heute bestimmt, indem die Masse des Wasserstoffatoms gleich 1 gesetzt wird.",
        "fr": "Aujourd'hui, les masses atomiques relatives sont déterminées en prenant la masse de l'atome d'hydrogène égale à 1.",
        "ru": "Сегодня относительные атомные массы определяют, принимая массу атома водорода равной 1.",
        "ar": "تُحدَّد الكتل الذرية النسبية اليوم باعتبار كتلة ذرة الهيدروجين مساوية لـ 1.",
        "zh": "如今相对原子质量是以氢原子的质量为 1 作为标准来确定的。",
        "ku": "Îro girseyên atomî yên nisbî bi qebûlkirina girseya atoma hîdrojenê wekî 1 tên diyarkirin."
      },
      "whyTrapIsFalse": {
        "tr": "Bağıl atom kütleleri bugün hidrojen atomuna göre değil, 12C izotopunun kütlesinin 1/12'sine göre belirlenir. Bu yüzden hidrojenin bağıl atom kütlesi bile tam 1 değil, yaklaşık 1,008'dir.",
        "en": "Relative atomic masses are defined today not relative to the hydrogen atom but relative to 1/12 of the mass of a 12C atom. That is why even hydrogen's relative atomic mass is not exactly 1 but about 1.008.",
        "de": "Relative Atommassen werden heute nicht auf das Wasserstoffatom, sondern auf 1/12 der Masse eines 12C-Atoms bezogen. Deshalb ist selbst die relative Atommasse von Wasserstoff nicht genau 1, sondern etwa 1,008.",
        "fr": "Les masses atomiques relatives sont aujourd'hui définies non par rapport à l'atome d'hydrogène, mais par rapport à 1/12 de la masse d'un atome de 12C. C'est pourquoi même celle de l'hydrogène ne vaut pas exactement 1 mais environ 1,008.",
        "ru": "Относительные атомные массы сегодня определяют не по атому водорода, а по 1/12 массы атома 12C. Поэтому даже относительная атомная масса водорода равна не точно 1, а примерно 1,008.",
        "ar": "تُحدَّد الكتل الذرية النسبية اليوم لا بالنسبة إلى ذرة الهيدروجين بل بالنسبة إلى 1/12 من كتلة ذرة 12C. لذلك فإن الكتلة الذرية النسبية للهيدروجين نفسه ليست 1 تمامًا بل نحو 1.008.",
        "zh": "如今相对原子质量不是以氢原子为标准，而是以 12C 原子质量的 1/12 为标准。因此连氢的相对原子质量也不恰好是 1，而约为 1.008。",
        "ku": "Îro girseyên atomî yên nisbî ne li gorî atoma hîdrojenê, lê li gorî 1/12-ê girseya îzotopa 12C tên diyarkirin. Loma girseya atomî ya nisbî ya hîdrojenê jî ne tam 1 e, nêzîkî 1,008 e."
      }
    },
    {
      "id": "u06-f11",
      "fact": {
        "tr": "Katlı oran aranmayan durumlar: farklı elementlerden oluşan bileşikler (CO ve NO), üç tür element içeren bileşikler (H2SO4 ve H2SO3) ve basit formülü aynı olan bileşikler.",
        "en": "The law of multiple proportions is not applied to: compounds made of different elements (CO and NO), compounds containing three kinds of elements (H2SO4 and H2SO3), and compounds with the same simplest formula.",
        "de": "Das Gesetz der multiplen Proportionen wird nicht angewendet auf: Verbindungen aus unterschiedlichen Elementen (CO und NO), Verbindungen mit drei Elementarten (H2SO4 und H2SO3) und Verbindungen mit derselben einfachsten Formel.",
        "fr": "La loi des proportions multiples ne s'applique pas : aux composés formés d'éléments différents (CO et NO), aux composés contenant trois sortes d'éléments (H2SO4 et H2SO3) et aux composés de même formule simple.",
        "ru": "Кратное отношение не ищут для соединений из разных элементов (CO и NO), для соединений из трёх элементов (H2SO4 и H2SO3) и для соединений с одинаковой простейшей формулой.",
        "ar": "لا يُطبَّق قانون النسب المتضاعفة على: المركبات المكوّنة من عناصر مختلفة (CO وNO)، والمركبات التي تحتوي على ثلاثة أنواع من العناصر (H2SO4 وH2SO3)، والمركبات التي لها الصيغة الأولية نفسها.",
        "zh": "不讨论倍比关系的情况：由不同元素组成的化合物(CO 和 NO)、含有三种元素的化合物(H2SO4 和 H2SO3)以及最简式相同的化合物。",
        "ku": "Rewşên ku li rêjeya pirjimar nayê gerîn: pêkhateyên ji elementên cuda (CO û NO), pêkhateyên ku sê cure element dihewînin (H2SO4 û H2SO3) û pêkhateyên ku formula wan a sade yek e."
      },
      "trap": {
        "tr": "FeO ve Fe2O3 arasında katlı oran yoktur.",
        "en": "The law of multiple proportions does not apply between FeO and Fe2O3.",
        "de": "Zwischen FeO und Fe2O3 gilt das Gesetz der multiplen Proportionen nicht.",
        "fr": "La loi des proportions multiples ne s'applique pas entre FeO et Fe2O3.",
        "ru": "Между FeO и Fe2O3 кратного отношения нет.",
        "ar": "لا ينطبق قانون النسب المتضاعفة بين FeO وFe2O3.",
        "zh": "FeO 和 Fe2O3 之间不存在倍比关系。",
        "ku": "Di navbera FeO û Fe2O3 de rêjeya pirjimar tune ye."
      },
      "whyTrapIsFalse": {
        "tr": "FeO ve Fe2O3 aynı iki elementten oluşur ve basit formülleri farklıdır. Eşit demir kütlesine karşılık oksijen kütleleri oranı 2/3 olduğundan aralarında katlı oran vardır.",
        "en": "FeO and Fe2O3 consist of the same two elements and have different empirical formulas. For equal masses of iron the ratio of oxygen masses is 2/3, so a multiple proportion exists between them.",
        "de": "FeO und Fe2O3 bestehen aus denselben zwei Elementen und haben unterschiedliche Verhältnisformeln. Bei gleicher Eisenmasse beträgt das Verhältnis der Sauerstoffmassen 2/3, also liegt ein multiples Verhältnis vor.",
        "fr": "FeO et Fe2O3 sont formés des deux mêmes éléments et ont des formules brutes simplifiées différentes. Pour des masses égales de fer, le rapport des masses d'oxygène vaut 2/3 : il existe donc une proportion multiple.",
        "ru": "FeO и Fe2O3 состоят из одних и тех же двух элементов и имеют разные простейшие формулы. При равной массе железа отношение масс кислорода равно 2/3, значит, кратное отношение существует.",
        "ar": "يتكوّن FeO وFe2O3 من العنصرين نفسيهما ولهما صيغتان أوليتان مختلفتان. وعند تساوي كتلة الحديد تكون نسبة كتلتي الأكسجين 2/3، إذن توجد بينهما نسبة متضاعفة.",
        "zh": "FeO 和 Fe2O3 由相同的两种元素组成，且最简式不同。铁的质量相等时氧的质量比为 2/3，所以二者之间存在倍比关系。",
        "ku": "FeO û Fe2O3 ji heman du elementan pêk tên û formulên wan ên sade cuda ne. Li hember girseyên wekhev ên hesin rêjeya girseyên oksîjenê 2/3 e, loma di navbera wan de rêjeya pirjimar heye."
      }
    },
    {
      "id": "u06-f12",
      "fact": {
        "tr": "1 atom-gram = 1 mol atom, 1 molekül-gram = 1 mol molekül, 1 formül-gram = 1 mol iyonik bileşik demektir.",
        "en": "1 atom-gram = 1 mole of atoms, 1 molecule-gram = 1 mole of molecules, 1 formula-gram = 1 mole of ionic compound.",
        "de": "1 Atom-Gramm = 1 Mol Atome, 1 Molekül-Gramm = 1 Mol Moleküle, 1 Formel-Gramm = 1 Mol ionische Verbindung.",
        "fr": "1 atome-gramme = 1 mole d'atomes, 1 molécule-gramme = 1 mole de molécules, 1 formule-gramme = 1 mole de composé ionique.",
        "ru": "1 грамм-атом = 1 моль атомов, 1 грамм-молекула = 1 моль молекул, 1 грамм-формула = 1 моль ионного соединения.",
        "ar": "1 ذرة-جرام = 1 mol من الذرات، و1 جزيء-جرام = 1 mol من الجزيئات، و1 صيغة-جرام = 1 mol من المركب الأيوني.",
        "zh": "1 克原子 = 1 mol 原子，1 克分子 = 1 mol 分子，1 克式量 = 1 mol 离子化合物。",
        "ku": "1 atom-gram = 1 mol atom, 1 molekul-gram = 1 mol molekul, 1 formul-gram = 1 mol pêkhateya îyonîk."
      },
      "trap": {
        "tr": "1 molekül-gram H2O ifadesi 1 tane su molekülünü belirtir.",
        "en": "The expression 1 molecule-gram H2O indicates 1 water molecule.",
        "de": "Der Ausdruck 1 Molekül-Gramm H2O bedeutet 1 Wassermolekül.",
        "fr": "L’expression 1 molécule-gramme H2O indique 1 molécule d’eau.",
        "ru": "Выражение «1 грамм-молекула H2O» означает одну молекулу воды.",
        "ar": "يشير التعبير 1 جزيء-جرام من H2O إلى جزيء ماء واحد.",
        "zh": "“1 克分子 H2O”表示 1 个水分子。",
        "ku": "Gotina 1 molekul-gram H2O molekuleke avê ya tenê nîşan dide."
      },
      "whyTrapIsFalse": {
        "tr": "\"Gram\" ekiyle kurulan birimler 1 mol anlamı taşır: 1 molekül-gram H2O, 6,02x10^23 tane su molekülü yani 18 g sudur. Tek bir su molekülünün kütlesi ise yalnızca 18 akb'dir.",
        "en": "Units formed with \"gram\" mean 1 mole: 1 gram-molecule of H2O is 6.02x10^23 water molecules, i.e. 18 g of water. A single water molecule has a mass of only 18 amu.",
        "de": "Mit „Gramm“ gebildete Einheiten bedeuten 1 Mol: 1 Grammmolekül H2O sind 6,02x10^23 Wassermoleküle, also 18 g Wasser. Ein einzelnes Wassermolekül hat nur eine Masse von 18 u.",
        "fr": "Les unités formées avec « gramme » signifient 1 mole : 1 molécule-gramme de H2O correspond à 6,02x10^23 molécules d'eau, soit 18 g d'eau. Une seule molécule d'eau n'a qu'une masse de 18 u.",
        "ru": "Единицы со словом «грамм» означают 1 моль: 1 грамм-молекула H2O — это 6,02x10^23 молекул воды, то есть 18 г воды. Одна молекула воды имеет массу всего 18 а. е. м.",
        "ar": "الوحدات المكوَّنة مع كلمة \"جرام\" تعني 1 mol: 1 جزيء-جرام من H2O هو 6.02x10^23 جزيء ماء أي 18 g من الماء. أما جزيء الماء الواحد فكتلته 18 amu فقط.",
        "zh": "带“克”的单位表示 1 mol：1 克分子 H2O 是 6.02x10^23 个水分子，即 18 g 水。单个水分子的质量只有 18 u。",
        "ku": "Yekeyên ku bi \"gram\" tên avakirin wateya 1 molê didin: 1 molekul-gram H2O 6,02x10^23 molekulên avê, ango 18 g av e. Girseya molekuleke avê ya tenê tenê 18 akb e."
      }
    },
    {
      "id": "u06-f13",
      "fact": {
        "tr": "Gerçek atom kütlesi: Bir tek atomun gram cinsinden kütlesidir ve MA / NA formülüyle bulunur.",
        "en": "Real atomic mass: It is the mass of a single atom in grams and is found with the formula MA / NA.",
        "de": "Echte Atommasse: Sie ist die Masse eines einzelnen Atoms in Gramm und wird mit der Formel MA/NA ermittelt.",
        "fr": "Masse atomique réelle : C'est la masse d'un seul atome en grammes et se trouve avec la formule MA/NA.",
        "ru": "Истинная масса атома — масса одного атома в граммах; её находят по формуле MA / NA.",
        "ar": "الكتلة الذرية الحقيقية: كتلة الذرة الواحدة بالجرام، وتُحسب بالعلاقة MA / NA.",
        "zh": "原子的实际质量是单个原子以克为单位的质量，可用 MA / NA 计算。",
        "ku": "Girseya atomî ya rastîn: Girseya atomeke tenê ya bi gram e û bi formula MA / NA tê dîtin."
      },
      "trap": {
        "tr": "Bir atomun gram cinsinden gerçek kütlesi, o elementin mol kütlesine eşittir.",
        "en": "The actual mass of one atom in grams is equal to the molar mass of that element.",
        "de": "Die tatsächliche Masse eines Atoms in Gramm ist gleich der Molmasse des betreffenden Elements.",
        "fr": "La masse réelle d'un atome en grammes est égale à la masse molaire de l'élément.",
        "ru": "Истинная масса одного атома в граммах равна молярной массе этого элемента.",
        "ar": "الكتلة الحقيقية لذرة واحدة بالجرام تساوي الكتلة المولية لذلك العنصر.",
        "zh": "一个原子以克为单位的实际质量等于该元素的摩尔质量。",
        "ku": "Girseya rastîn a atomekê ya bi gram bi girseya molî ya wê elementê re wekhev e."
      },
      "whyTrapIsFalse": {
        "tr": "Mol kütlesi 6,02x10^23 tane atomun toplam kütlesidir; tek bir atomun gerçek kütlesi bunun NA'da biri kadardır. Örneğin bir C atomu 12 g değil, 12 / NA ≈ 2,0x10^-23 g'dır.",
        "en": "The molar mass is the total mass of 6.02x10^23 atoms; the actual mass of one atom is that divided by NA. For example, one C atom is not 12 g but 12 / NA ≈ 2.0x10^-23 g.",
        "de": "Die molare Masse ist die Gesamtmasse von 6,02x10^23 Atomen; die tatsächliche Masse eines Atoms ist dieser Wert geteilt durch NA. Ein C-Atom wiegt also nicht 12 g, sondern 12 / NA ≈ 2,0x10^-23 g.",
        "fr": "La masse molaire est la masse totale de 6,02x10^23 atomes ; la masse réelle d'un atome vaut cette masse divisée par NA. Par exemple, un atome C ne pèse pas 12 g mais 12 / NA ≈ 2,0x10^-23 g.",
        "ru": "Молярная масса — это общая масса 6,02x10^23 атомов; истинная масса одного атома в NA раз меньше. Например, один атом C весит не 12 г, а 12 / NA ≈ 2,0x10^-23 г.",
        "ar": "الكتلة المولية هي الكتلة الكلية لـ 6.02x10^23 ذرة، والكتلة الحقيقية للذرة الواحدة تساوي ذلك مقسومًا على NA. فذرة C الواحدة ليست 12 g بل 12 / NA ≈ 2.0x10^-23 g.",
        "zh": "摩尔质量是 6.02x10^23 个原子的总质量；一个原子的实际质量是它的 1/NA。例如一个 C 原子不是 12 g，而是 12 / NA ≈ 2.0x10^-23 g。",
        "ku": "Girseya molî girseya giştî ya 6,02x10^23 atoman e; girseya rastîn a atomeke tenê NA-yek ji vê ye. Mînak, atomeke C ne 12 g, lê 12 / NA ≈ 2,0x10^-23 g e."
      }
    },
    {
      "id": "u06-f14",
      "fact": {
        "tr": "0,5 mol CH4 gazı NK'da 11,2 litre hacim kaplar ve 2,5 mol atom içerir (0,5 mol C + 2,0 mol H).",
        "en": "At STP, 0.5 mol of CH4 gas occupies 11.2 litres and contains 2.5 mol of atoms (0.5 mol C + 2.0 mol H).",
        "de": "Unter Normbedingungen nimmt 0,5 mol CH4-Gas 11,2 Liter ein und enthält 2,5 mol Atome (0,5 mol C + 2,0 mol H).",
        "fr": "Dans les conditions normales, 0,5 mol de gaz CH4 occupe 11,2 litres et contient 2,5 mol d'atomes (0,5 mol de C + 2,0 mol de H).",
        "ru": "При н. у. 0,5 моль газа CH4 занимает объём 11,2 л и содержит 2,5 моль атомов (0,5 моль C + 2,0 моль H).",
        "ar": "في الظروف القياسية يشغل 0.5 mol من غاز CH4 حجمًا قدره 11.2 L ويحتوي على 2.5 mol من الذرات (0.5 mol C + 2.0 mol H).",
        "zh": "在标准状况下，0.5 mol CH4 气体的体积为 11.2 L，含有 2.5 mol 原子(0.5 mol C + 2.0 mol H)。",
        "ku": "Di şertên normal de 0,5 mol gaza CH4 11,2 lître qebare digire û 2,5 mol atom dihewîne (0,5 mol C + 2,0 mol H)."
      },
      "trap": {
        "tr": "0,5 mol CH4 gazı NK'da 22,4 L hacim kaplar.",
        "en": "At STP, 0.5 mol of CH4 gas occupies 22.4 L.",
        "de": "Unter Normbedingungen nimmt 0,5 mol CH4-Gas ein Volumen von 22,4 L ein.",
        "fr": "Dans les conditions normales, 0,5 mol de gaz CH4 occupe un volume de 22,4 L.",
        "ru": "При н. у. 0,5 моль газа CH4 занимает объём 22,4 л.",
        "ar": "في الظروف القياسية يشغل 0.5 mol من غاز CH4 حجمًا قدره 22.4 L.",
        "zh": "在标准状况下，0.5 mol CH4 气体的体积为 22.4 L。",
        "ku": "Di şertên normal de 0,5 mol gaza CH4 22,4 L qebare digire."
      },
      "whyTrapIsFalse": {
        "tr": "NK'da 22,4 L, 1 mol gazın hacmidir; gaz hacmi mol sayısıyla doğru orantılı olduğundan 0,5 mol CH4 bunun yarısını, yani 11,2 L'yi kaplar.",
        "en": "At STP 22.4 L is the volume of 1 mole of gas; since gas volume is directly proportional to the number of moles, 0.5 mole of CH4 occupies half of it, i.e. 11.2 L.",
        "de": "Bei Normbedingungen sind 22,4 L das Volumen von 1 Mol Gas; da das Gasvolumen direkt proportional zur Stoffmenge ist, nehmen 0,5 Mol CH4 die Hälfte ein, also 11,2 L.",
        "fr": "Aux CNTP, 22,4 L est le volume de 1 mole de gaz ; le volume étant proportionnel à la quantité de matière, 0,5 mole de CH4 en occupe la moitié, soit 11,2 L.",
        "ru": "При н. у. 22,4 л — это объём 1 моль газа; так как объём газа прямо пропорционален количеству вещества, 0,5 моль CH4 занимает половину, то есть 11,2 л.",
        "ar": "في الظروف القياسية 22.4 L هو حجم 1 mol من الغاز، ولأن حجم الغاز يتناسب طرديًا مع عدد المولات فإن 0.5 mol من CH4 يشغل نصفه أي 11.2 L.",
        "zh": "标准状况下 22.4 L 是 1 mol 气体的体积；气体体积与物质的量成正比，所以 0.5 mol CH4 占其一半，即 11.2 L。",
        "ku": "Di şertên normal de 22,4 L qebareya 1 mol gazê ye; ji ber ku qebareya gazê bi hejmara molan re rasterast rêjeyî ye, 0,5 mol CH4 nîvê wê, ango 11,2 L qebare digire."
      }
    },
    {
      "id": "u06-f15",
      "fact": {
        "tr": "NK'da 1 mol maddenin 22,4 L hacim kaplaması kuralı yalnızca gazlar için geçerlidir; katı ve sıvı maddeler için geçerli değildir.",
        "en": "The rule that 1 mole of a substance occupies 22.4 L at STP applies only to gases; it does not apply to solids and liquids.",
        "de": "Die Regel, dass 1 Mol eines Stoffes unter Normbedingungen 22,4 L einnimmt, gilt nur für Gase; für Feststoffe und Flüssigkeiten gilt sie nicht.",
        "fr": "La règle selon laquelle 1 mole d'une substance occupe 22,4 L dans les conditions normales ne vaut que pour les gaz ; elle ne s'applique pas aux solides ni aux liquides.",
        "ru": "Правило, по которому 1 моль вещества при н. у. занимает 22,4 л, справедливо только для газов; к твёрдым и жидким веществам оно неприменимо.",
        "ar": "قاعدة أن 1 mol من المادة يشغل 22.4 L في الظروف القياسية تنطبق على الغازات فقط؛ ولا تنطبق على المواد الصلبة والسائلة.",
        "zh": "标准状况下 1 mol 物质占 22.4 L 体积的规律只适用于气体，不适用于固体和液体。",
        "ku": "Qaîdeya ku 1 mol made di şertên normal de 22,4 L qebare digire tenê ji bo gazan derbasdar e; ji bo madeyên hişk û şile derbasdar nîne."
      },
      "trap": {
        "tr": "0 °C'de 1 mol sıvı su 22,4 litre hacim kaplar.",
        "en": "At 0 °C, 1 mole of liquid water occupies 22.4 liters of volume.",
        "de": "Bei 0 °C nimmt 1 Mol flüssiges Wasser 22,4 Liter Volumen ein.",
        "fr": "À 0 °C, 1 mole d’eau liquide occupe 22,4 litres de volume.",
        "ru": "При 0 °C 1 моль жидкой воды занимает объём 22,4 л.",
        "ar": "عند 0 °C يشغل 1 mol من الماء السائل حجمًا قدره 22.4 L.",
        "zh": "0 °C 时，1 mol 液态水的体积为 22.4 L。",
        "ku": "Di 0 °C de 1 mol ava şile 22,4 lître qebare digire."
      },
      "whyTrapIsFalse": {
        "tr": "22,4 L kuralı yalnızca gazlar için geçerlidir. Sıvı suyun yoğunluğu yaklaşık 1 g/mL olduğundan 1 mol (18 g) su yalnızca yaklaşık 18 mL hacim kaplar.",
        "en": "The 22.4 L rule applies only to gases. Since liquid water has a density of about 1 g/mL, 1 mole (18 g) of water occupies only about 18 mL.",
        "de": "Die 22,4-L-Regel gilt nur für Gase. Da flüssiges Wasser eine Dichte von etwa 1 g/mL hat, nimmt 1 Mol (18 g) Wasser nur etwa 18 mL ein.",
        "fr": "La règle des 22,4 L ne vaut que pour les gaz. L'eau liquide ayant une masse volumique d'environ 1 g/mL, 1 mole (18 g) d'eau n'occupe qu'environ 18 mL.",
        "ru": "Правило 22,4 л относится только к газам. Так как плотность жидкой воды около 1 г/мл, 1 моль (18 г) воды занимает всего около 18 мл.",
        "ar": "قاعدة 22.4 L خاصة بالغازات فقط. ولأن كثافة الماء السائل نحو 1 g/mL فإن 1 mol (18 g) من الماء يشغل نحو 18 mL فقط.",
        "zh": "22.4 L 的规律只适用于气体。液态水的密度约为 1 g/mL，所以 1 mol(18 g)水只占约 18 mL。",
        "ku": "Qaîdeya 22,4 L tenê ji bo gazan derbasdar e. Ji ber ku çiriya ava şile nêzîkî 1 g/mL ye, 1 mol (18 g) av tenê nêzîkî 18 mL qebare digire."
      }
    },
    {
      "id": "u06-f16",
      "fact": {
        "tr": "Denkleştirilmiş tepkime denklemindeki katsayılar, tepkimeye giren ve oluşan maddelerin mol sayıları arasındaki oranı (stokiyometrik oranı) verir.",
        "en": "The coefficients of a balanced equation give the ratio of the numbers of moles (the stoichiometric ratio) of the reactants and products.",
        "de": "Die Koeffizienten einer ausgeglichenen Reaktionsgleichung geben das Verhältnis der Stoffmengen (das stöchiometrische Verhältnis) der Edukte und Produkte an.",
        "fr": "Les coefficients d'une équation équilibrée donnent le rapport des quantités de matière (rapport stœchiométrique) des réactifs et des produits.",
        "ru": "Коэффициенты в уравнении реакции показывают отношение количеств вещества реагентов и продуктов (стехиометрическое отношение).",
        "ar": "تعطي المعاملات في المعادلة الموزونة النسبة بين عدد مولات المواد المتفاعلة والناتجة (النسبة المتكافئة).",
        "zh": "配平的化学方程式中的系数表示反应物与生成物物质的量之比（化学计量比）。",
        "ku": "Hevberên di hevkêşeya reaksiyonê ya hevsengkirî de rêjeya di navbera hejmarên molan ên reaktant û hilberan de (rêjeya stokiyometrîk) didin."
      },
      "trap": {
        "tr": "Kimyasal tepkimeye giren maddelerin kütleleri katsayılarıyla doğru orantılı olmak zorundadır.",
        "en": "The masses of substances participating in a chemical reaction must be directly proportional to their coefficients.",
        "de": "Die Massen der an einer chemischen Reaktion beteiligten Stoffe müssen direkt proportional zu ihren Koeffizienten sein.",
        "fr": "Les masses de substances participant à une réaction chimique doivent être directement proportionnelles à leurs coefficients.",
        "ru": "Массы веществ, вступающих в химическую реакцию, обязательно прямо пропорциональны их коэффициентам.",
        "ar": "يجب أن تتناسب كتل المواد المتفاعلة في التفاعل الكيميائي طرديًا مع معاملاتها.",
        "zh": "参加反应的各物质的质量必须与其化学计量数成正比。",
        "ku": "Girseyên madeyên ku dikevin reaksiyona kîmyewî divê bi hevberên wan re rasterast rêjeyî bin."
      },
      "whyTrapIsFalse": {
        "tr": "Katsayılar mol sayıları oranını verir, kütle oranını vermez; maddelerin mol kütleleri farklıdır. Örneğin 2H2 + O2 → 2H2O tepkimesinde mol oranı 2:1 iken kütle oranı 4 g : 32 g = 1:8'dir.",
        "en": "Coefficients give the mole ratio, not the mass ratio, because the substances have different molar masses. For example, in 2H2 + O2 → 2H2O the mole ratio is 2:1 while the mass ratio is 4 g : 32 g = 1:8.",
        "de": "Koeffizienten geben das Stoffmengenverhältnis an, nicht das Massenverhältnis, da die Stoffe unterschiedliche molare Massen haben. Bei 2H2 + O2 → 2H2O ist das Stoffmengenverhältnis 2:1, das Massenverhältnis aber 4 g : 32 g = 1:8.",
        "fr": "Les coefficients donnent le rapport des quantités de matière (en moles), pas celui des masses, car les masses molaires diffèrent. Dans 2H2 + O2 → 2H2O, le rapport molaire est 2:1 alors que le rapport des masses est 4 g : 32 g = 1:8.",
        "ru": "Коэффициенты дают мольное отношение, а не массовое, так как молярные массы веществ различны. Например, в реакции 2H2 + O2 → 2H2O мольное отношение 2:1, а массовое 4 г : 32 г = 1:8.",
        "ar": "المعاملات تعطي نسبة المولات لا نسبة الكتل، لأن الكتل المولية للمواد مختلفة. ففي التفاعل 2H2 + O2 → 2H2O نسبة المولات 2:1 بينما نسبة الكتل 4 g : 32 g = 1:8.",
        "zh": "系数给出的是物质的量之比，而不是质量比，因为各物质的摩尔质量不同。例如 2H2 + O2 → 2H2O 中物质的量之比为 2:1，而质量比为 4 g : 32 g = 1:8。",
        "ku": "Hevber rêjeya hejmarên molan didin, ne rêjeya girseyan; girseyên molî yên madeyan cuda ne. Mînak, di reaksiyona 2H2 + O2 → 2H2O de rêjeya molan 2:1 e, lê rêjeya girseyan 4 g : 32 g = 1:8 e."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u06-c01",
      "conceptA": {
        "tr": "Sabit Oranlar Kanunu",
        "en": "Law of Constant Proportions",
        "de": "Konstante Proportionen",
        "fr": "Proportions définies",
        "ru": "Закон постоянства состава",
        "ar": "النسب الثابتة",
        "zh": "定比定律",
        "ku": "Zagona Rêjeya Sabît"
      },
      "conceptB": {
        "tr": "Katlı Oranlar Kanunu",
        "en": "Law of Multiple Proportions",
        "de": "Multiple Proportionen",
        "fr": "Proportions multiples",
        "ru": "Закон кратных отношений",
        "ar": "النسب المتضاعفة",
        "zh": "倍比定律",
        "ku": "Zagona Rêjeyên Pirjimar"
      },
      "distinction": {
        "tr": "Sabit oranlar kanunu, bir bileşiği oluşturan elementlerin kütleleri arasındaki oranın değişmediğini; katlı oranlar kanunu ise aynı iki elementin oluşturduğu farklı bileşiklerde, elementlerden birinin sabit kütlesiyle birleşen diğer elementin kütleleri arasında basit tam sayılı bir oran bulunduğunu ifade eder.",
        "en": "The law of constant proportions states that the mass ratio of the elements in a given compound never changes; Dalton's law, by contrast, states that in different compounds of the same two elements, the masses of one element combining with a fixed mass of the other are in a simple whole-number ratio.",
        "de": "Konstante Proportionen: Das Massenverhältnis der Elemente in einer bestimmten Verbindung ist stets gleich (Proust). Dagegen stehen bei verschiedenen Verbindungen derselben zwei Elemente die Massen des einen Elements, die sich mit einer festen Masse des anderen verbinden, im Verhältnis kleiner ganzer Zahlen (Dalton).",
        "fr": "Proportions définies : le rapport des masses des éléments d'un composé donné est toujours le même (Proust). En revanche, dans des composés différents des deux mêmes éléments, les masses de l'un qui se combinent à une masse fixe de l'autre sont dans un rapport de petits nombres entiers (Dalton).",
        "ru": "Закон постоянства состава утверждает, что массовое соотношение элементов в данном соединении всегда одно и то же; закон кратных отношений утверждает, что в разных соединениях одних и тех же двух элементов массы одного элемента, приходящиеся на одну и ту же массу другого, относятся как небольшие целые числа.",
        "ar": "النسب الثابتة: نسبة كتل العناصر في المركب الواحد ثابتة لا تتغير (بروست)؛ أما في النسب المتضاعفة فتكون كتل أحد العنصرين المتحدة مع كتلة ثابتة من الآخر في المركبات المختلفة للعنصرين نفسيهما بنسبة أعداد صحيحة بسيطة (دالتون).",
        "zh": "定比定律指出，同一化合物中各元素的质量比恒定不变；而倍比定律指出，在同样两种元素形成的不同化合物中，与一定质量的一种元素相化合的另一种元素的质量之间成简单整数比。",
        "ku": "Zagona rêjeya sabît dibêje ku di pêkhateyekê de girseyên elementan her tim bi heman nîsbetê ne; zagona rêjeyên pirjimar jî dibêje ku di pêkhateyên cuda yên heman du elementan de, girseyên elementekê yên ku bi girseyeke diyar a elementa din re yek dibin, nîsbeteke bi hejmarên tam ên sade nîşan didin."
      }
    },
    {
      "id": "u06-c02",
      "conceptA": {
        "tr": "1 akb",
        "en": "1 amu",
        "de": "1 u (amu)",
        "fr": "1 uma",
        "ru": "Атомная единица массы (1 а. е. м.)",
        "ar": "1 وحدة الكتلة الذرية (amu)",
        "zh": "1 原子质量单位(u)",
        "ku": "1 akb"
      },
      "conceptB": {
        "tr": "1 gram",
        "en": "1 gram",
        "de": "1 Gramm",
        "fr": "1 gramme",
        "ru": "1 грамм",
        "ar": "1 g",
        "zh": "1 克",
        "ku": "1 gram"
      },
      "distinction": {
        "tr": "1 akb, bir 12C atomunun kütlesinin 1/12'si olarak tanımlanır ve 1 / NA grama (yaklaşık 1,66x10^-24 g) eşittir; 1 gram ise bunun 6,02x10^23 katıdır.",
        "en": "1 amu is defined as 1/12 of the mass of one 12C atom and equals 1 / NA gram (about 1.66x10^-24 g); 1 gram is 6.02x10^23 times as large.",
        "de": "1 u ist als 1/12 der Masse eines 12C-Atoms definiert und entspricht 1 / NA Gramm (etwa 1,66x10^-24 g); 1 Gramm ist das 6,02x10^23-Fache davon.",
        "fr": "1 uma est définie comme 1/12 de la masse d'un atome de 12C et vaut 1 / NA gramme (environ 1,66x10^-24 g) ; 1 gramme en vaut 6,02x10^23 fois plus.",
        "ru": "Атомная единица массы (1 а. е. м.) определяется как 1/12 массы атома 12C и составляет 1 / NA г (около 1,66x10^-24 г); 1 грамм больше в 6,02x10^23 раз.",
        "ar": "1 وحدة الكتلة الذرية = 1/12 من كتلة ذرة 12C = 1 / NA g (نحو 1.66x10^-24 g)؛ أما 1 g فيساوي 6.02x10^23 ضعف ذلك.",
        "zh": "1 原子质量单位定义为一个 12C 原子质量的 1/12，等于 1/NA 克(约 1.66x10^-24 g)；而 1 克是它的 6.02x10^23 倍。",
        "ku": "1 akb wekî 1/12-ê girseya atomeke 12C tê pênasekirin û bi 1 / NA gram (nêzîkî 1,66x10^-24 g) re wekhev e; 1 gram jî 6,02x10^23 qatê wê ye."
      }
    },
    {
      "id": "u06-c03",
      "conceptA": {
        "tr": "Kütlenin Korunumu (Lavoisier)",
        "en": "Conservation of Mass (Lavoisier)",
        "de": "Erhaltung der Masse (Lavoisier)",
        "fr": "Conservation de la masse (Lavoisier)",
        "ru": "Закон сохранения массы (Лавуазье)",
        "ar": "حفظ الكتلة (لافوازييه)",
        "zh": "质量守恒定律（拉瓦锡）",
        "ku": "Parastina Girseyê (Lavoisier)"
      },
      "conceptB": {
        "tr": "Avogadro Hipotezi",
        "en": "Avogadro's Hypothesis",
        "de": "Avogadro-Hypothese",
        "fr": "Hypothèse d'Avogadro",
        "ru": "Гипотеза Авогадро",
        "ar": "فرضية أفوجادرو",
        "zh": "阿伏加德罗假说",
        "ku": "Hîpoteza Avogadro"
      },
      "distinction": {
        "tr": "Kütlenin korunumu tepkimeye girenlerin toplam kütlesinin ürünlerin toplam kütlesine eşit olduğunu; Avogadro hipotezi ise aynı sıcaklık ve basınçta eşit hacimli gazların eşit sayıda tanecik içerdiğini ifade eder.",
        "en": "Conservation of mass states that the total mass of the reactants equals the total mass of the products; Avogadro's hypothesis states that equal volumes of gases at the same temperature and pressure contain equal numbers of particles.",
        "de": "Die Erhaltung der Masse besagt, dass die Gesamtmasse der Edukte gleich der Gesamtmasse der Produkte ist; die Avogadro-Hypothese besagt, dass gleiche Gasvolumina bei gleicher Temperatur und gleichem Druck gleich viele Teilchen enthalten.",
        "fr": "La conservation de la masse énonce que la masse totale des réactifs est égale à la masse totale des produits ; l'hypothèse d'Avogadro énonce que des volumes égaux de gaz, à même température et même pression, contiennent le même nombre de particules.",
        "ru": "Закон сохранения массы (Лавуазье) утверждает, что общая масса реагентов равна общей массе продуктов; гипотеза Авогадро утверждает, что равные объёмы газов при одинаковых температуре и давлении содержат одинаковое число частиц.",
        "ar": "ينص حفظ الكتلة على أن مجموع كتل المواد المتفاعلة يساوي مجموع كتل النواتج؛ ووفق فرضية أفوجادرو تحتوي الحجوم المتساوية من الغازات عند درجة الحرارة والضغط نفسيهما على العدد نفسه من الجسيمات.",
        "zh": "质量守恒定律指出反应物的总质量等于生成物的总质量；而阿伏加德罗假说指出同温同压下，相同体积的气体含有相同数目的微粒。",
        "ku": "Parastina girseyê (Lavoisier) dibêje ku girseya giştî ya reaktantan bi girseya giştî ya hilberan re wekhev e; hîpoteza Avogadro jî dibêje ku di heman germahî û zextê de qebareyên wekhev ên gazan hejmareke wekhev a perçeyan dihewînin."
      }
    },
    {
      "id": "u06-c04",
      "conceptA": {
        "tr": "Basit Formül",
        "en": "Simple (Empirical) Formula",
        "de": "Einfache (empirische) Formel",
        "fr": "Formule simple (empirique)",
        "ru": "Простейшая формула",
        "ar": "الصيغة الأولية (البسيطة)",
        "zh": "最简式（实验式）",
        "ku": "Formula Sade"
      },
      "conceptB": {
        "tr": "Molekül Formülü",
        "en": "Molecular Formula",
        "de": "Molekülformel",
        "fr": "Formule moléculaire",
        "ru": "Молекулярная формула",
        "ar": "الصيغة الجزيئية",
        "zh": "分子式",
        "ku": "Formula Molekulî"
      },
      "distinction": {
        "tr": "Basit formül bileşikteki atomların en küçük tam sayılı oranını; molekül formülü ise bir moleküldeki gerçek atom sayılarını gösterir (örn. C2H4'ün basit formülü CH2'dir).",
        "en": "The simple formula shows the smallest whole-number ratio of atoms in a compound; the molecular formula shows the actual numbers of atoms in one molecule (e.g. the simple formula of C2H4 is CH2).",
        "de": "Die einfache Formel gibt das kleinste ganzzahlige Atomzahlverhältnis in einer Verbindung an; die Molekülformel gibt die tatsächliche Anzahl der Atome in einem Molekül an (z. B. ist die einfache Formel von C2H4 CH2).",
        "fr": "La formule simple indique le plus petit rapport entier des atomes dans un composé ; la formule moléculaire indique le nombre réel d'atomes dans une molécule (par ex. la formule simple de C2H4 est CH2).",
        "ru": "Простейшая формула показывает наименьшее целочисленное отношение атомов в соединении; молекулярная формула показывает истинное число атомов в одной молекуле (например, этилену C2H4 соответствует простейшая запись CH2).",
        "ar": "في الصيغة الأولية تظهر أصغر نسبة عددية صحيحة بين الذرات في المركب؛ أما في الصيغة الجزيئية فيظهر العدد الفعلي للذرات في الجزيء الواحد (فمثلًا CH2 هي الصيغة الأولية لـ C2H4).",
        "zh": "最简式表示化合物中各原子的最简整数比(如 C2H4 为 CH2)；而分子式表示一个分子中各原子的实际数目。",
        "ku": "Formula sade rêjeya herî piçûk a bi hejmarên tam a atomên di pêkhateyê de nîşan dide; formula molekulî jî hejmarên rastîn ên atomên di molekulekê de nîşan dide (mînak, formula sade ya C2H4 CH2 ye)."
      }
    },
    {
      "id": "u06-c05",
      "conceptA": {
        "tr": "Avogadro Sayısı (NA)",
        "en": "Avogadro's Number (NA)",
        "de": "Avogadro-Zahl (NA)",
        "fr": "Nombre d'Avogadro (NA)",
        "ru": "Число Авогадро (NA)",
        "ar": "عدد أفوجادرو (NA)",
        "zh": "阿伏加德罗常数(NA)",
        "ku": "Hejmara Avogadro (NA)"
      },
      "conceptB": {
        "tr": "Mol Kütlesi (MA)",
        "en": "Molar Mass (MA)",
        "de": "Molmasse (MA)",
        "fr": "Masse molaire (MA)",
        "ru": "Молярная масса (MA)",
        "ar": "الكتلة المولية (MA)",
        "zh": "摩尔质量(MA)",
        "ku": "Girseya Molî (MA)"
      },
      "distinction": {
        "tr": "Avogadro sayısı 1 moldeki tanecik sayısıdır (6,02x10^23); mol kütlesi 1 mol taneciğin gram cinsinden kütlesidir.",
        "en": "Avogadro's number is the number of particles in 1 mole (6.02x10^23); molar mass is the mass in grams of 1 mole of particles.",
        "de": "Die Avogadro-Zahl ist die Anzahl der Teilchen in 1 Mol (6,02x10^23); die Molmasse ist die Masse von 1 Mol Teilchen in Gramm.",
        "fr": "Le nombre d'Avogadro est le nombre de particules dans 1 mole (6,02x10^23) ; la masse molaire est la masse en grammes de 1 mole de particules.",
        "ru": "Число Авогадро (NA) — число частиц в 1 моль (6,02x10^23); молярная масса (MA) — масса 1 моль частиц в граммах.",
        "ar": "عدد أفوجادرو هو عدد الجسيمات في 1 mol (6.02x10^23)؛ أما الكتلة المولية فكتلة 1 mol من الجسيمات بالجرام.",
        "zh": "阿伏加德罗常数是 1 mol 物质所含的微粒数(6.02x10^23)；而摩尔质量是 1 mol 微粒以克为单位的质量。",
        "ku": "Hejmara Avogadro (NA) hejmara perçeyên di 1 molê de ye (6,02x10^23); girseya molî (MA) girseya 1 mol perçeyan a bi gram e."
      }
    },
    {
      "id": "u06-c06",
      "conceptA": {
        "tr": "Normal Koşullar (NK)",
        "en": "Standard Conditions (STP)",
        "de": "Normbedingungen",
        "fr": "Conditions normales (CNTP)",
        "ru": "Нормальные условия (н. у.)",
        "ar": "الظروف القياسية (STP)",
        "zh": "标准状况",
        "ku": "Şertên Normal"
      },
      "conceptB": {
        "tr": "Oda Koşulları (OK)",
        "en": "Room Conditions",
        "de": "Raumbedingungen",
        "fr": "Conditions ambiantes",
        "ru": "Комнатные условия",
        "ar": "ظروف الغرفة",
        "zh": "常温常压",
        "ku": "Şertên Odeyê"
      },
      "distinction": {
        "tr": "Normal koşullar 0 °C ve 1 atm'dir ve bu koşullarda 1 mol gaz yaklaşık 22,4 L hacim kaplar; oda koşulları ise 25 °C ve 1 atm'dir ve bu koşullarda 1 mol gaz yaklaşık 24,5 L hacim kaplar.",
        "en": "STP is 0 °C and 1 atm, where 1 mole of gas occupies about 22.4 L; room conditions are 25 °C and 1 atm, where 1 mole of gas occupies about 24.5 L.",
        "de": "Bei Normbedingungen (0 °C und 1 atm) nimmt 1 Mol Gas etwa 22,4 L ein; bei Raumbedingungen (25 °C und 1 atm) sind es etwa 24,5 L.",
        "fr": "Dans les conditions normales (0 °C et 1 atm), 1 mole de gaz occupe environ 22,4 L ; dans les conditions ambiantes (25 °C et 1 atm), elle occupe environ 24,5 L.",
        "ru": "Нормальные условия (н. у.) — 0 °C и 1 атм, при них 1 моль газа занимает около 22,4 л; комнатные условия — 25 °C и 1 атм, при них 1 моль газа занимает около 24,5 л.",
        "ar": "الظروف القياسية: 0 °C و1 atm، ويشغل فيها 1 mol من الغاز نحو 22.4 L؛ ظروف الغرفة: 25 °C و1 atm، ويشغل فيها 1 mol من الغاز نحو 24.5 L.",
        "zh": "标准状况为 0 °C、1 atm，1 mol 气体约占 22.4 L；而常温常压为 25 °C、1 atm，1 mol 气体约占 24.5 L。",
        "ku": "Şertên normal 0 °C û 1 atm in û di van şertan de 1 mol gaz nêzîkî 22,4 L qebare digire; şertên odeyê 25 °C û 1 atm in û di van şertan de 1 mol gaz nêzîkî 24,5 L qebare digire."
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
        "ku": "Girseya Atomî ya Nisbî"
      },
      "conceptB": {
        "tr": "Gerçek Atom Kütlesi",
        "en": "Actual Atomic Mass",
        "de": "Tatsächliche Atommasse",
        "fr": "Masse atomique réelle",
        "ru": "Истинная масса атома",
        "ar": "الكتلة الذرية الحقيقية",
        "zh": "原子的实际质量",
        "ku": "Girseya Atomî ya Rastîn"
      },
      "distinction": {
        "tr": "Bağıl atom kütlesi, 12C izotopuna göre belirlenen birimsiz bir orandır; gerçek atom kütlesi ise tek bir atomun gram cinsinden kütlesidir (MA / NA).",
        "en": "Relative atomic mass is a unitless ratio defined relative to the 12C isotope; actual atomic mass is the mass of one single atom in grams (MA / NA).",
        "de": "Die relative Atommasse ist ein einheitenloses Verhältnis bezogen auf das Isotop 12C; die tatsächliche Atommasse ist die Masse eines einzelnen Atoms in Gramm (MA / NA).",
        "fr": "La masse atomique relative est un rapport sans unité défini par rapport à l'isotope 12C ; la masse atomique réelle est la masse d'un seul atome en grammes (MA / NA).",
        "ru": "Относительная атомная масса — безразмерная величина, определяемая относительно изотопа 12C; истинная масса атома — масса одного атома в граммах (MA / NA).",
        "ar": "الكتلة الذرية النسبية نسبة بلا وحدة تُحدَّد بالنسبة إلى النظير 12C؛ أما الكتلة الذرية الحقيقية فكتلة ذرة واحدة بالجرام (MA / NA).",
        "zh": "相对原子质量是以 12C 为标准的、没有单位的比值；而原子的实际质量是一个原子以克为单位的质量(MA / NA)。",
        "ku": "Girseya atomî ya nisbî rêjeyeke bê yeke ye ku li gorî îzotopa 12C tê diyarkirin; girseya atomî ya rastîn jî girseya atomeke tenê ya bi gram e (MA / NA)."
      }
    },
    {
      "id": "u06-c08",
      "conceptA": {
        "tr": "Atom-Gram",
        "en": "Atom-Gram",
        "de": "Atom-Gramm",
        "fr": "Atome-gramme",
        "ru": "Грамм-атом",
        "ar": "ذرة-جرام",
        "zh": "克原子",
        "ku": "Atom-Gram"
      },
      "conceptB": {
        "tr": "Molekül-Gram",
        "en": "Molecule-Gram",
        "de": "Molekül-Gramm",
        "fr": "Molécule-gramme",
        "ru": "Грамм-молекула",
        "ar": "جزيء-جرام",
        "zh": "克分子",
        "ku": "Molekul-Gram"
      },
      "distinction": {
        "tr": "Atom-gram 1 mol atom anlamına gelir; molekül-gram 1 mol kovalent molekül anlamına gelir.",
        "en": "Atom-gram means 1 mole of atoms; molecule-gram means 1 mole of covalent molecules.",
        "de": "Atom-Gramm bedeutet 1 Mol Atome; Molekül-Gramm bedeutet 1 Mol kovalente Moleküle.",
        "fr": "Atome-gramme signifie 1 mole d'atomes ; molécule-gramme signifie 1 mole de molécules covalentes.",
        "ru": "Грамм-атом означает 1 моль атомов; грамм-молекула означает 1 моль ковалентных молекул.",
        "ar": "ذرة-جرام يعني 1 mol من الذرات؛ وجزيء-جرام يعني 1 mol من الجزيئات التساهمية.",
        "zh": "克原子是指 1 mol 原子；而克分子是指 1 mol 共价分子。",
        "ku": "Atom-gram tê wateya 1 mol atom; molekul-gram tê wateya 1 mol molekulên kovalent."
      }
    }
  ],
  "sequences": [
    {
      "id": "u06-s01",
      "title": {
        "tr": "Kütleden Atom Sayısına Geçiş",
        "en": "From Mass to Number of Atoms",
        "de": "Von der Masse zur Atomanzahl",
        "fr": "De la masse au nombre d'atomes",
        "ru": "От массы к числу атомов",
        "ar": "من الكتلة إلى عدد الذرات",
        "zh": "由质量求原子数",
        "ku": "Ji Girseyê ber bi Hejmara Atoman"
      },
      "steps": [
        {
          "tr": "Maddenin formülünden mol kütlesi (MA) hesaplanır",
          "en": "The molar mass (MA) is calculated from the formula of the substance",
          "de": "Aus der Formel des Stoffes wird die Molmasse (MA) berechnet",
          "fr": "La masse molaire (MA) est calculée à partir de la formule de la substance",
          "ru": "По формуле вещества вычисляют молярную массу (MA)",
          "ar": "تُحسب الكتلة المولية (MA) من صيغة المادة",
          "zh": "根据物质的化学式计算摩尔质量(MA)",
          "ku": "Ji formula madeyê girseya molî (MA) tê hesibandin"
        },
        {
          "tr": "Verilen kütle mol kütlesine bölünerek mol sayısı bulunur (n = m / MA)",
          "en": "The given mass is divided by the molar mass to find the number of moles (n = m / MA)",
          "de": "Die gegebene Masse wird durch die Molmasse geteilt, um die Stoffmenge zu erhalten (n = m / MA)",
          "fr": "La masse donnée est divisée par la masse molaire pour obtenir le nombre de moles (n = m / MA)",
          "ru": "Данную массу делят на молярную массу и находят количество вещества (n = m / MA)",
          "ar": "تُقسم الكتلة المعطاة على الكتلة المولية لإيجاد عدد المولات (n = m / MA)",
          "zh": "用给定质量除以摩尔质量，求出物质的量(n = m / MA)",
          "ku": "Girseya dayî li ser girseya molî tê parvekirin û hejmara molan tê dîtin (n = m / MA)"
        },
        {
          "tr": "Mol sayısı Avogadro sayısıyla çarpılarak molekül sayısı bulunur (N = n · NA)",
          "en": "The number of moles is multiplied by Avogadro's number to find the number of molecules (N = n · NA)",
          "de": "Die Stoffmenge wird mit der Avogadro-Zahl multipliziert, um die Anzahl der Moleküle zu erhalten (N = n · NA)",
          "fr": "Le nombre de moles est multiplié par le nombre d'Avogadro pour obtenir le nombre de molécules (N = n · NA)",
          "ru": "Количество вещества умножают на число Авогадро и находят число молекул (N = n · NA)",
          "ar": "يُضرب عدد المولات في عدد أفوجادرو لإيجاد عدد الجزيئات (N = n · NA)",
          "zh": "用物质的量乘以阿伏加德罗常数，求出分子数(N = n · NA)",
          "ku": "Hejmara molan bi hejmara Avogadro tê lêxistin û hejmara molekulan tê dîtin (N = n · NA)"
        },
        {
          "tr": "Molekül sayısı, bir moleküldeki atom sayısıyla çarpılarak toplam atom sayısı bulunur",
          "en": "The number of molecules is multiplied by the number of atoms in one molecule to find the total number of atoms",
          "de": "Die Anzahl der Moleküle wird mit der Zahl der Atome pro Molekül multipliziert, um die Gesamtzahl der Atome zu erhalten",
          "fr": "Le nombre de molécules est multiplié par le nombre d'atomes par molécule pour obtenir le nombre total d'atomes",
          "ru": "Число молекул умножают на число атомов в одной молекуле и находят общее число атомов",
          "ar": "يُضرب عدد الجزيئات في عدد الذرات في الجزيء الواحد لإيجاد العدد الكلي للذرات",
          "zh": "用分子数乘以每个分子中的原子数，求出原子总数",
          "ku": "Hejmara molekulan bi hejmara atomên di molekulekê de tê lêxistin û hejmara giştî ya atoman tê dîtin"
        }
      ]
    },
    {
      "id": "u06-s02",
      "title": {
        "tr": "Kütlece Bileşimden Basit Formül Bulma",
        "en": "Finding the Simple Formula from Mass Composition",
        "de": "Bestimmung der einfachen Formel aus der Massenzusammensetzung",
        "fr": "Détermination de la formule simple à partir de la composition massique",
        "ru": "Нахождение простейшей формулы по массовому составу",
        "ar": "إيجاد الصيغة الأولية من التركيب الكتلي",
        "zh": "由质量组成求最简式",
        "ku": "Dîtina Formula Sade ji Pêkhatina Girseyî"
      },
      "steps": [
        {
          "tr": "Elementlerin kütleleri (veya kütlece yüzdeleri) belirlenir",
          "en": "The masses (or mass percentages) of the elements are determined",
          "de": "Die Massen (oder Massenanteile) der Elemente werden bestimmt",
          "fr": "Les masses (ou pourcentages massiques) des éléments sont déterminées",
          "ru": "Определяют массы (или массовые доли) элементов",
          "ar": "تُحدَّد كتل العناصر (أو نسبها المئوية الكتلية)",
          "zh": "确定各元素的质量（或质量分数）",
          "ku": "Girseyên elementan (an rêjeyên wan ên girseyî yên ji sedî) tên diyarkirin"
        },
        {
          "tr": "Her elementin kütlesi atom kütlesine bölünerek mol sayısı bulunur",
          "en": "Each element's mass is divided by its atomic mass to find the number of moles",
          "de": "Die Masse jedes Elements wird durch seine Atommasse geteilt, um die Stoffmenge zu erhalten",
          "fr": "La masse de chaque élément est divisée par sa masse atomique pour obtenir le nombre de moles",
          "ru": "Массу каждого элемента делят на его атомную массу и находят количество вещества",
          "ar": "تُقسم كتلة كل عنصر على كتلته الذرية لإيجاد عدد المولات",
          "zh": "用各元素的质量除以其相对原子质量，求出物质的量",
          "ku": "Girseya her elementê li ser girseya wê ya atomî tê parvekirin û hejmara molan tê dîtin"
        },
        {
          "tr": "Mol sayıları en küçük mol sayısına bölünerek oranlanır",
          "en": "The mole numbers are divided by the smallest mole number",
          "de": "Die Stoffmengen werden durch die kleinste Stoffmenge geteilt",
          "fr": "Les nombres de moles sont divisés par le plus petit d’entre eux",
          "ru": "Полученные количества вещества делят на наименьшее из них",
          "ar": "تُقسم أعداد المولات على أصغرها لإيجاد النسبة بينها",
          "zh": "用各物质的量除以其中最小的值",
          "ku": "Hejmarên molan li ser hejmara molan a herî piçûk tên parvekirin û rêje tên dîtin"
        },
        {
          "tr": "Oranlar en küçük tam sayılara çevrilerek basit formül yazılır",
          "en": "The ratios are converted to the smallest whole numbers and the simple formula is written",
          "de": "Die Verhältnisse werden in kleinste ganze Zahlen umgewandelt und die einfache Formel wird aufgestellt",
          "fr": "Les rapports sont convertis en plus petits nombres entiers et la formule simple est écrite",
          "ru": "Отношения приводят к наименьшим целым числам и записывают простейшую формулу",
          "ar": "تُحوَّل النسب إلى أصغر أعداد صحيحة وتُكتب الصيغة الأولية",
          "zh": "将比值化为最简整数比，写出最简式",
          "ku": "Rêje dibin hejmarên tam ên herî piçûk û formula sade tê nivîsandin"
        }
      ]
    },
    {
      "id": "u06-s03",
      "title": {
        "tr": "Sabit Oranlar Kanunu Uygulaması",
        "en": "Applying the Law of Constant Proportions",
        "de": "Anwendung des Gesetzes der konstanten Proportionen",
        "fr": "Application de la loi des proportions définies",
        "ru": "Применение закона постоянства состава",
        "ar": "تطبيق قانون النسب الثابتة",
        "zh": "定比定律的应用",
        "ku": "Sepandina Zagona Rêjeyên Sabît"
      },
      "steps": [
        {
          "tr": "Bileşikteki sabit kütlece birleşme oranı (mX / mY) belirlenir",
          "en": "The fixed combining mass ratio in the compound (mX / mY) is determined",
          "de": "Das feste Massenverhältnis in der Verbindung (mX / mY) wird bestimmt",
          "fr": "Le rapport massique fixe de combinaison dans le composé (mX / mY) est déterminé",
          "ru": "Определяют постоянное массовое соотношение элементов в соединении (mX / mY)",
          "ar": "تُحدَّد نسبة الاتحاد الكتلية الثابتة في المركب (mX / mY)",
          "zh": "确定化合物中固定的化合质量比(mX / mY)",
          "ku": "Rêjeya sabît a yekbûna girseyî ya di pêkhateyê de (mX / mY) tê diyarkirin"
        },
        {
          "tr": "Verilen element kütleleri bu oranla karşılaştırılarak tamamen harcanan element bulunur",
          "en": "The given masses of the elements are compared with this ratio to find the element that is completely used up",
          "de": "Die gegebenen Massen der Elemente werden mit diesem Verhältnis verglichen, um das vollständig verbrauchte Element zu finden",
          "fr": "Les masses données des éléments sont comparées à ce rapport pour trouver l'élément entièrement consommé",
          "ru": "Данные массы элементов сравнивают с этим соотношением и находят элемент, который расходуется полностью",
          "ar": "تُقارَن كتل العناصر المعطاة بهذه النسبة لإيجاد العنصر الذي يُستهلك كليًّا",
          "zh": "将给定的元素质量与该比值比较，找出完全消耗的元素",
          "ku": "Girseyên dayî yên elementan bi vê rêjeyê re tên berhevdan û elementa ku bi tevahî tê xerckirin tê dîtin"
        },
        {
          "tr": "Diğer elementin harcanan ve artan kütlesi hesaplanır",
          "en": "The mass of the other element that reacts and the mass left over are calculated",
          "de": "Die verbrauchte und die übrig bleibende Masse des anderen Elements werden berechnet",
          "fr": "La masse consommée et la masse restante de l'autre élément sont calculées",
          "ru": "Вычисляют израсходованную и оставшуюся массу другого элемента",
          "ar": "تُحسب الكتلة المستهلكة والكتلة المتبقية من العنصر الآخر",
          "zh": "计算另一种元素消耗的质量和剩余的质量",
          "ku": "Girseya xerckirî û girseya zêde ya elementa din tên hesibandin"
        },
        {
          "tr": "Harcanan kütleler toplanarak oluşan bileşiğin kütlesi bulunur",
          "en": "The masses that reacted are added to find the mass of the compound formed",
          "de": "Die verbrauchten Massen werden addiert, um die Masse der entstandenen Verbindung zu erhalten",
          "fr": "Les masses consommées sont additionnées pour obtenir la masse du composé formé",
          "ru": "Израсходованные массы складывают и находят массу образовавшегося соединения",
          "ar": "تُجمع الكتل المستهلكة لإيجاد كتلة المركب الناتج",
          "zh": "将消耗的质量相加，求出生成化合物的质量",
          "ku": "Girseyên xerckirî tên berhevkirin û girseya pêkhateya ku çêdibe tê dîtin"
        }
      ]
    },
    {
      "id": "u06-s04",
      "title": {
        "tr": "Katlı Oranlar Denetimi",
        "en": "Checking for Multiple Proportions",
        "de": "Prüfung auf multiple Proportionen",
        "fr": "Vérification des proportions multiples",
        "ru": "Проверка закона кратных отношений",
        "ar": "التحقق من النسب المتضاعفة",
        "zh": "倍比关系的检验",
        "ku": "Kontrolkirina Rêjeyên Pirjimar"
      },
      "steps": [
        {
          "tr": "Aynı iki elementten oluşan iki farklı bileşik yazılır",
          "en": "Two different compounds of the same two elements are written",
          "de": "Zwei verschiedene Verbindungen aus denselben zwei Elementen werden aufgeschrieben",
          "fr": "On écrit deux composés différents formés des deux mêmes éléments",
          "ru": "Записывают два разных соединения, состоящих из одних и тех же двух элементов",
          "ar": "يُكتب مركبان مختلفان يتكوّنان من العنصرين نفسيهما",
          "zh": "写出由相同两种元素组成的两种不同化合物",
          "ku": "Du pêkhateyên cuda yên ku ji heman du elementan pêk tên tên nivîsandin"
        },
        {
          "tr": "Elementlerden birinin kütlesi iki bileşikte eşitlenir",
          "en": "The mass of one of the elements is made equal in the two compounds",
          "de": "Die Masse eines der Elemente wird in beiden Verbindungen gleichgesetzt",
          "fr": "La masse de l'un des éléments est rendue égale dans les deux composés",
          "ru": "Массу одного из элементов уравнивают в обоих соединениях",
          "ar": "تُجعل كتلة أحد العنصرين متساوية في المركبين",
          "zh": "使其中一种元素在两种化合物中的质量相等",
          "ku": "Girseya yek ji elementan di her du pêkhateyan de tê wekhevkirin"
        },
        {
          "tr": "Diğer elementin iki bileşikteki kütleleri birbirine oranlanır",
          "en": "The masses of the other element in the two compounds are divided by each other",
          "de": "Die Massen des anderen Elements in den beiden Verbindungen werden ins Verhältnis gesetzt",
          "fr": "On fait le rapport des masses de l'autre élément dans les deux composés",
          "ru": "Находят отношение масс другого элемента в двух соединениях",
          "ar": "تُحسب النسبة بين كتلتي العنصر الآخر في المركبين",
          "zh": "求另一种元素在两种化合物中的质量之比",
          "ku": "Girseyên elementa din ên di her du pêkhateyan de li ser hev tên parvekirin"
        },
        {
          "tr": "Bulunan oranın basit tam sayılı olduğu doğrulanır",
          "en": "The resulting ratio is confirmed to be a simple whole-number ratio",
          "de": "Es wird bestätigt, dass das erhaltene Verhältnis ein einfaches ganzzahliges Verhältnis ist",
          "fr": "On vérifie que le rapport obtenu est un rapport simple de nombres entiers",
          "ru": "Убеждаются, что полученное отношение выражается небольшими целыми числами",
          "ar": "يُتحقَّق من أن النسبة الناتجة نسبة أعداد صحيحة بسيطة",
          "zh": "确认所得比值为简单整数比",
          "ku": "Tê piştrastkirin ku rêjeya hatî dîtin rêjeyeke bi hejmarên tam ên sade ye"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u06-twin01",
      "stem": {
        "tr": "Normal koşullarda (0 °C, 1 atm) 5,6 litre hacim kaplayan C2H4 gazı kaç gramdır? (C: 12, H: 1)",
        "en": "What is the mass in grams of C2H4 gas that occupies 5.6 liters under normal conditions (0 °C, 1 atm)? (C: 12, H: 1)",
        "de": "Wie viel Gramm C2H4-Gas nehmen unter Normbedingungen (0 °C, 1 atm) ein Volumen von 5,6 Litern ein? (C: 12, H: 1)",
        "fr": "Quelle est la masse, en grammes, de gaz C2H4 occupant 5,6 litres dans les conditions normales (0 °C, 1 atm) ? (C : 12, H : 1)",
        "ru": "Сколько граммов составляет масса газа C2H4, занимающего при нормальных условиях (0 °C, 1 атм) объём 5,6 л? (C: 12, H: 1)",
        "ar": "كم غرامًا كتلة غاز C2H4 الذي يشغل 5.6 L في الظروف القياسية (0 °C، 1 atm)؟ (C: 12، H: 1)",
        "zh": "标准状况(0 °C、1 atm)下体积为 5.6 L 的 C2H4 气体的质量是多少克？(C: 12, H: 1)",
        "ku": "Gaza C2H4 ya ku di şertên normal de (0 °C, 1 atm) 5,6 lître qebare digire çend gram e? (C: 12, H: 1)"
      },
      "options": [
        {
          "tr": "7,0 g",
          "en": "7.0 g",
          "de": "7,0 g",
          "fr": "7,0 g",
          "ru": "7,0 г",
          "ar": "7.0 g",
          "zh": "7.0 g",
          "ku": "7,0 g"
        },
        {
          "tr": "14,0 g",
          "en": "14.0 g",
          "de": "14,0 g",
          "fr": "14,0 g",
          "ru": "14,0 г",
          "ar": "14.0 g",
          "zh": "14.0 g",
          "ku": "14,0 g"
        },
        {
          "tr": "28,0 g",
          "en": "28.0 g",
          "de": "28,0 g",
          "fr": "28,0 g",
          "ru": "28,0 г",
          "ar": "28.0 g",
          "zh": "28.0 g",
          "ku": "28,0 g"
        },
        {
          "tr": "3,5 g",
          "en": "3.5 g",
          "de": "3,5 g",
          "fr": "3,5 g",
          "ru": "3,5 г",
          "ar": "3.5 g",
          "zh": "3.5 g",
          "ku": "3,5 g"
        },
        {
          "tr": "56,0 g",
          "en": "56.0 g",
          "de": "56,0 g",
          "fr": "56,0 g",
          "ru": "56,0 г",
          "ar": "56.0 g",
          "zh": "56.0 g",
          "ku": "56,0 g"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "n = 5,6 / 22,4 = 0,25 mol. C2H4 mol kütlesi = 2·12 + 4·1 = 28 g/mol. m = 0,25 · 28 = 7,0 g. 28,0 g, 1 mol (22,4 L) C2H4'ün kütlesidir; 5,6 L bunun dörtte biridir.",
        "en": "n = 5.6 / 22.4 = 0.25 mol. Molar mass of C2H4 = 2·12 + 4·1 = 28 g/mol. m = 0.25 · 28 = 7.0 g. 28.0 g is the mass of 1 mol (22.4 L) of C2H4; 5.6 L is one quarter of that.",
        "de": "n = 5,6 / 22,4 = 0,25 mol. Molare Masse von C2H4 = 2·12 + 4·1 = 28 g/mol. m = 0,25 · 28 = 7,0 g. 28,0 g ist die Masse von 1 mol (22,4 L) C2H4; 5,6 L sind ein Viertel davon.",
        "fr": "n = 5,6 / 22,4 = 0,25 mol. Masse molaire de C2H4 = 2·12 + 4·1 = 28 g/mol. m = 0,25 · 28 = 7,0 g. 28,0 g est la masse de 1 mol (22,4 L) de C2H4 ; 5,6 L en représentent le quart.",
        "ru": "n = 5,6 / 22,4 = 0,25 моль. Молярная масса C2H4 = 2·12 + 4·1 = 28 г/моль. m = 0,25 · 28 = 7,0 г. 28,0 г — это масса 1 моль (22,4 л) C2H4; 5,6 л составляют четверть этого объёма.",
        "ar": "n = 5.6 / 22.4 = 0.25 mol. الكتلة المولية لـ C2H4 = 2·12 + 4·1 = 28 g/mol. m = 0.25 · 28 = 7.0 g. 28.0 g هي كتلة 1 mol (22.4 L) من C2H4؛ و5.6 L تمثل ربع ذلك.",
        "zh": "n = 5.6 / 22.4 = 0.25 mol。C2H4 的摩尔质量 = 2·12 + 4·1 = 28 g/mol。m = 0.25 · 28 = 7.0 g。28.0 g 是 1 mol(22.4 L)C2H4 的质量；5.6 L 是它的四分之一。",
        "ku": "n = 5,6 / 22,4 = 0,25 mol. Girseya molî ya C2H4 = 2·12 + 4·1 = 28 g/mol. m = 0,25 · 28 = 7,0 g. 28,0 g girseya 1 mol (22,4 L) C2H4 ye; 5,6 L çaryeka wê ye."
      }
    },
    {
      "id": "u06-twin02",
      "stem": {
        "tr": "X ve Y elementlerinden oluşan XY2 bileşiğinde X kütlesinin Y kütlesine bağlı değişimi grafikte verilmiştir. Bu bileşikle ilgili,\nI. Bileşikte kütlece birleşme oranı mX/mY = 7/8'dir.\nII. 14 g X ile 20 g Y tam verimle tepkimeye girdiğinde en fazla 30 g XY2 oluşur.\nIII. X'in atom kütlesinin Y'nin atom kütlesine oranı 7/8'dir.\nyargılarından hangileri doğrudur?",
        "en": "The graph shows how the mass of X varies with the mass of Y in the compound XY2 formed by elements X and Y. Which of the following statements about this compound are correct?\nI. The mass combining ratio in the compound is mX/mY = 7/8.\nII. When 14 g of X and 20 g of Y react completely, at most 30 g of XY2 forms.\nIII. The ratio of the atomic mass of X to that of Y is 7/8.",
        "de": "Das Diagramm zeigt, wie sich in der aus den Elementen X und Y gebildeten Verbindung XY2 die Masse von X mit der Masse von Y ändert. Welche der folgenden Aussagen über diese Verbindung sind richtig?\nI. Das Massenverhältnis in der Verbindung beträgt mX/mY = 7/8.\nII. Reagieren 14 g X und 20 g Y vollständig, entstehen höchstens 30 g XY2.\nIII. Das Verhältnis der Atommasse von X zu der von Y beträgt 7/8.",
        "fr": "Le graphique montre la variation de la masse de X en fonction de la masse de Y dans le composé XY2 formé des éléments X et Y. Lesquelles des affirmations suivantes sur ce composé sont correctes ?\nI. Le rapport massique de combinaison dans le composé est mX/mY = 7/8.\nII. Lorsque 14 g de X et 20 g de Y réagissent complètement, il se forme au plus 30 g de XY2.\nIII. Le rapport de la masse atomique de X à celle de Y est 7/8.",
        "ru": "На графике показана зависимость массы X от массы Y в соединении XY2, образованном элементами X и Y. Какие из следующих утверждений об этом соединении верны?\nI. Массовое соотношение элементов в соединении mX/mY = 7/8.\nII. При полном взаимодействии 14 г X и 20 г Y образуется не более 30 г XY2.\nIII. Отношение атомной массы X к атомной массе Y равно 7/8.",
        "ar": "يبين الرسم البياني تغيّر كتلة X بدلالة كتلة Y في المركب XY2 المكوَّن من العنصرين X وY. أيّ العبارات الآتية عن هذا المركب صحيحة؟\nI. نسبة الاتحاد الكتلية في المركب mX/mY = 7/8.\nII. عند تفاعل 14 g من X مع 20 g من Y تفاعلًا تامًا يتكوّن 30 g من XY2 على الأكثر.\nIII. نسبة الكتلة الذرية لـ X إلى الكتلة الذرية لـ Y تساوي 7/8.",
        "zh": "图中给出了由元素 X 和 Y 组成的化合物 XY2 中，X 的质量随 Y 的质量的变化。下列关于该化合物的说法中哪些正确？\nI. 化合物中的质量结合比为 mX/mY = 7/8。\nII. 14 g X 与 20 g Y 完全反应，最多生成 30 g XY2。\nIII. X 的原子质量与 Y 的原子质量之比为 7/8。",
        "ku": "Grafîk nîşan dide ka di pêkhateya XY2 ya ku ji elementên X û Y pêk tê de girseya X bi girseya Y re çawa diguhere. Derbarê vê pêkhateyê de kîjan ji van gotinan rast in?\nI. Di pêkhateyê de rêjeya girseyî ya yekbûnê mX/mY = 7/8 e.\nII. Dema 14 g X û 20 g Y bi tevahî reaksiyonê dikin, herî zêde 30 g XY2 çêdibe.\nIII. Rêjeya girseya atomî ya X bo ya Y 7/8 e."
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
      "correctIndex": 2,
      "explanation": {
        "tr": "Grafikteki doğru (8 g Y; 7 g X) ve (16 g Y; 14 g X) noktalarından geçer; X ve Y daima mX/mY = 7/8 oranında birleşir (I doğru). 14 g X ile birleşmek için 16 g Y gerekir; 20 g Y'nin 4 g'ı artar ve 14 + 16 = 30 g XY2 oluşur (II doğru). Formül XY2 olduğundan mX/mY = AX / (2 · AY) = 7/8 → AX/AY = 7/4'tür; kütle oranını doğrudan atom kütlesi oranı sanmak hatadır (III yanlış).",
        "en": "The line in the graph passes through (8 g Y; 7 g X) and (16 g Y; 14 g X); X and Y always combine in the ratio mX/mY = 7/8 (I correct). 14 g of X needs 16 g of Y; 4 g of the 20 g Y is left over and 14 + 16 = 30 g of XY2 forms (II correct). Since the formula is XY2, mX/mY = AX / (2 · AY) = 7/8 → AX/AY = 7/4; taking the mass ratio directly as the atomic-mass ratio is wrong (III incorrect).",
        "de": "Die Gerade im Diagramm verläuft durch (8 g Y; 7 g X) und (16 g Y; 14 g X); X und Y verbinden sich stets im Verhältnis mX/mY = 7/8 (I richtig). 14 g X benötigen 16 g Y; von 20 g Y bleiben 4 g übrig, und es entstehen 14 + 16 = 30 g XY2 (II richtig). Da die Formel XY2 lautet, gilt mX/mY = AX / (2 · AY) = 7/8 → AX/AY = 7/4; das Massenverhältnis direkt als Atommassenverhältnis zu nehmen, ist falsch (III falsch).",
        "fr": "La droite du graphique passe par (8 g de Y ; 7 g de X) et (16 g de Y ; 14 g de X) ; X et Y se combinent toujours dans le rapport mX/mY = 7/8 (I correcte). 14 g de X nécessitent 16 g de Y ; sur 20 g de Y, 4 g restent en excès et il se forme 14 + 16 = 30 g de XY2 (II correcte). La formule étant XY2, mX/mY = AX / (2 · AY) = 7/8 → AX/AY = 7/4 ; prendre le rapport massique pour le rapport des masses atomiques est une erreur (III fausse).",
        "ru": "Прямая на графике проходит через точки (8 г Y; 7 г X) и (16 г Y; 14 г X); X и Y всегда соединяются в отношении mX/mY = 7/8 (I верно). Для 14 г X нужно 16 г Y; из 20 г Y остаётся 4 г, и образуется 14 + 16 = 30 г XY2 (II верно). Так как формула XY2, mX/mY = AX / (2 · AY) = 7/8 → AX/AY = 7/4; принимать массовое отношение за отношение атомных масс неверно (III неверно).",
        "ar": "يمر المستقيم في الرسم بالنقطتين (8 g من Y؛ 7 g من X) و(16 g من Y؛ 14 g من X)، فيتحد X وY دائمًا بالنسبة mX/mY = 7/8 (I صحيحة). يلزم 14 g من X مقدار 16 g من Y، فيتبقى 4 g من أصل 20 g من Y ويتكوّن 14 + 16 = 30 g من XY2 (II صحيحة). وبما أن الصيغة XY2 فإن mX/mY = AX / (2 · AY) = 7/8 ← AX/AY = 7/4؛ واعتبار النسبة الكتلية نسبةً للكتل الذرية مباشرة خطأ (III خاطئة).",
        "zh": "图中直线经过 (8 g Y；7 g X) 和 (16 g Y；14 g X)，X 与 Y 总是按 mX/mY = 7/8 结合（I 正确）。14 g X 需要 16 g Y，20 g Y 中剩余 4 g，生成 14 + 16 = 30 g XY2（II 正确）。化学式为 XY2，所以 mX/mY = AX / (2 · AY) = 7/8 → AX/AY = 7/4；把质量比直接当作原子质量比是错误的（III 错误）。",
        "ku": "Xeta di grafîkê de di xalên (8 g Y; 7 g X) û (16 g Y; 14 g X) re derbas dibe; X û Y her tim bi rêjeya mX/mY = 7/8 dibin yek (I rast e). Ji bo 14 g X 16 g Y lazim e; ji 20 g Y 4 g dimîne û 14 + 16 = 30 g XY2 çêdibe (II rast e). Ji ber ku formul XY2 ye, mX/mY = AX / (2 · AY) = 7/8 → AX/AY = 7/4; rêjeya girseyî rasterast wekî rêjeya girseya atomî girtin xelet e (III xelet e)."
      },
      "figure": {
        "kind": "graph",
        "xLabel": {
          "tr": "Y kütlesi (g)",
          "en": "Mass of Y (g)",
          "de": "Masse von Y (g)",
          "fr": "Masse de Y (g)",
          "ru": "Масса Y (г)",
          "ar": "كتلة Y (g)",
          "zh": "Y 的质量 (g)",
          "ku": "Girseya Y (g)"
        },
        "yLabel": {
          "tr": "X kütlesi (g)",
          "en": "Mass of X (g)",
          "de": "Masse von X (g)",
          "fr": "Masse de X (g)",
          "ru": "Масса X (г)",
          "ar": "كتلة X (g)",
          "zh": "X 的质量 (g)",
          "ku": "Girseya X (g)"
        },
        "xMax": 20,
        "yMax": 18,
        "xTicks": [
          8,
          16
        ],
        "yTicks": [
          7,
          14
        ],
        "series": [
          {
            "points": [
              [
                0,
                0
              ],
              [
                18,
                15.75
              ]
            ],
            "label": "XY₂"
          }
        ],
        "markers": [
          {
            "x": 8,
            "y": 7,
            "label": "",
            "guides": true
          },
          {
            "x": 16,
            "y": 14,
            "label": "",
            "guides": true
          }
        ]
      }
    },
    {
      "id": "u06-twin03",
      "stem": {
        "tr": "CaS bileşiğinde kalsiyumun kükürde kütlece birleşme oranı mCa/mS = 5/4'tür. 30 g Ca ile 20 g S tam verimle tepkimeye sokulduğunda en fazla kaç gram CaS oluşur?",
        "en": "In the compound CaS the combining mass ratio of calcium to sulfur is mCa/mS = 5/4. When 30 g of Ca and 20 g of S react with complete conversion, what is the maximum mass of CaS formed?",
        "de": "In der Verbindung CaS beträgt das Massenverhältnis von Calcium zu Schwefel mCa/mS = 5/4. Wenn 30 g Ca und 20 g S vollständig reagieren, wie viel Gramm CaS entstehen höchstens?",
        "fr": "Dans le composé CaS, le rapport des masses de combinaison du calcium et du soufre est mCa/mS = 5/4. Lorsque 30 g de Ca et 20 g de S réagissent de façon complète, quelle masse maximale de CaS se forme-t-il ?",
        "ru": "В соединении CaS массовое отношение кальция к сере mCa/mS = 5/4. Какая наибольшая масса CaS может образоваться при взаимодействии 30 г Ca и 20 г S с выходом 100 %?",
        "ar": "في المركب CaS تكون نسبة اتحاد الكالسيوم مع الكبريت بالكتلة mCa/mS = 5/4. عند تفاعل 30 g من Ca مع 20 g من S تفاعلًا تامًا، ما أكبر كتلة من CaS يمكن أن تتكون؟",
        "zh": "化合物 CaS 中钙与硫的化合质量比为 mCa/mS = 5/4。30 g Ca 与 20 g S 充分反应时，最多生成多少克 CaS？",
        "ku": "Di pêkhateya CaS de rêjeya girseyî ya yekbûna kalsiyûmê bi kewkurtê re mCa/mS = 5/4 e. Dema 30 g Ca û 20 g S bi tevahî dikevin reaksiyonê, herî zêde çend gram CaS çêdibe?"
      },
      "options": [
        {
          "tr": "25 g",
          "en": "25 g",
          "de": "25 g",
          "fr": "25 g",
          "ru": "25 г",
          "ar": "25 g",
          "zh": "25 g",
          "ku": "25 g"
        },
        {
          "tr": "36 g",
          "en": "36 g",
          "de": "36 g",
          "fr": "36 g",
          "ru": "36 г",
          "ar": "36 g",
          "zh": "36 g",
          "ku": "36 g"
        },
        {
          "tr": "45 g",
          "en": "45 g",
          "de": "45 g",
          "fr": "45 g",
          "ru": "45 г",
          "ar": "45 g",
          "zh": "45 g",
          "ku": "45 g"
        },
        {
          "tr": "50 g",
          "en": "50 g",
          "de": "50 g",
          "fr": "50 g",
          "ru": "50 г",
          "ar": "50 g",
          "zh": "50 g",
          "ku": "50 g"
        },
        {
          "tr": "54 g",
          "en": "54 g",
          "de": "54 g",
          "fr": "54 g",
          "ru": "54 г",
          "ar": "54 g",
          "zh": "54 g",
          "ku": "54 g"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "20 g S'nin tamamı için gereken Ca: 20 · 5/4 = 25 g. Elimizde 30 g Ca olduğundan S tamamen harcanır, 5 g Ca artar. Oluşan CaS = 25 + 20 = 45 g. 50 g, artan Ca da ürüne katılarak; 54 g, 30 g Ca'nın tamamen harcandığı (24 g S gerekirdi, oysa 20 g var) varsayılarak; 36 g ise oran ters çevrilerek (20 g S ile 16 g Ca) bulunan hatalı sonuçlardır.",
        "en": "Ca needed for all 20 g of S: 20 · 5/4 = 25 g. Since 30 g of Ca is available, all the S is used and 5 g of Ca remains. CaS formed = 25 + 20 = 45 g. 50 g comes from adding the excess Ca to the product; 54 g from assuming all 30 g of Ca reacts (that would need 24 g of S, but only 20 g is present); 36 g from inverting the ratio (20 g S with 16 g Ca).",
        "de": "Für 20 g S benötigtes Ca: 20 · 5/4 = 25 g. Da 30 g Ca vorhanden sind, wird S vollständig verbraucht, 5 g Ca bleiben übrig. Gebildetes CaS = 25 + 20 = 45 g. 50 g entsteht, wenn das überschüssige Ca mitgezählt wird; 54 g, wenn man annimmt, dass alle 30 g Ca reagieren (dafür wären 24 g S nötig, es sind aber nur 20 g da); 36 g bei umgekehrtem Verhältnis (20 g S mit 16 g Ca).",
        "fr": "Ca nécessaire pour les 20 g de S : 20 · 5/4 = 25 g. Comme on dispose de 30 g de Ca, tout le S est consommé et il reste 5 g de Ca. CaS formé = 25 + 20 = 45 g. 50 g provient de l’ajout du Ca en excès au produit ; 54 g de l’hypothèse que les 30 g de Ca réagissent (il faudrait 24 g de S, or il n’y en a que 20 g) ; 36 g de l’inversion du rapport (20 g de S avec 16 g de Ca).",
        "ru": "Для 20 г S нужно Ca: 20 · 5/4 = 25 г. Так как есть 30 г Ca, сера расходуется полностью, а 5 г Ca остаётся в избытке. Образуется CaS: 25 + 20 = 45 г. 50 г получается, если прибавить к продукту избыток Ca; 54 г — если считать, что прореагировали все 30 г Ca (для этого нужно 24 г S, а есть только 20 г); 36 г — если перевернуть отношение (20 г S с 16 г Ca).",
        "ar": "كتلة Ca اللازمة لـ 20 g من S هي 20 · 5/4 = 25 g. وبما أن المتوفر 30 g من Ca فإن S يُستهلك كليًا ويتبقى 5 g من Ca. كتلة CaS الناتجة = 25 + 20 = 45 g. القيمة 50 g تنتج عن إضافة Ca الزائد إلى الناتج، و54 g عن افتراض تفاعل كل الـ 30 g من Ca (وهذا يتطلب 24 g من S بينما المتوفر 20 g فقط)، و36 g عن قلب النسبة (20 g من S مع 16 g من Ca).",
        "zh": "20 g S 完全反应需要 Ca：20 · 5/4 = 25 g。现有 30 g Ca，所以 S 完全消耗，Ca 剩余 5 g。生成 CaS = 25 + 20 = 45 g。50 g 是把过量的 Ca 也算进产物；54 g 是误以为 30 g Ca 全部反应(那需要 24 g S，而实际只有 20 g)；36 g 是把比值颠倒(20 g S 配 16 g Ca)。",
        "ku": "Ca-ya ku ji bo hemû 20 g S pêwîst e: 20 · 5/4 = 25 g. Ji ber ku 30 g Ca heye, S bi tevahî tê xerckirin û 5 g Ca zêde dimîne. CaS-ya ku çêdibe = 25 + 20 = 45 g. 50 g bi lêzêdekirina Ca-ya zêde li hilberê; 54 g bi wê texmînê ku hemû 30 g Ca tê xerckirin (ji bo vê 24 g S lazim e, lê tenê 20 g heye); 36 g jî bi berevajîkirina rêjeyê (20 g S bi 16 g Ca re) tê dîtin; ev hemû encamên şaş in."
      }
    },
    {
      "id": "u06-twin04",
      "stem": {
        "tr": "Azot ve oksijenden oluşan X ve Y bileşiklerinin birer örneğindeki element kütleleri tabloda verilmiştir. Eşit kütlede azotla birleşen oksijen kütleleri karşılaştırıldığında, Y'deki oksijen kütlesinin X'teki oksijen kütlesine oranı kaçtır?",
        "en": "The table gives the masses of the elements in one sample each of compounds X and Y, both made of nitrogen and oxygen. Comparing the masses of oxygen that combine with equal masses of nitrogen, what is the ratio of the oxygen mass in Y to that in X?",
        "de": "Die Tabelle gibt die Elementmassen in je einer Probe der Verbindungen X und Y an, die beide aus Stickstoff und Sauerstoff bestehen. Vergleicht man die Sauerstoffmassen, die sich mit gleichen Stickstoffmassen verbinden: Wie groß ist das Verhältnis der Sauerstoffmasse in Y zu der in X?",
        "fr": "Le tableau donne les masses des éléments dans un échantillon de chacun des composés X et Y, formés d'azote et d'oxygène. En comparant les masses d'oxygène combinées à une même masse d'azote, quel est le rapport de la masse d'oxygène dans Y à celle dans X ?",
        "ru": "В таблице приведены массы элементов в образцах соединений X и Y, состоящих из азота и кислорода. Если сравнить массы кислорода, соединяющиеся с одинаковой массой азота, чему равно отношение массы кислорода в Y к массе кислорода в X?",
        "ar": "يبين الجدول كتل العناصر في عينة من كل من المركبين X وY المكوَّنين من النيتروجين والأكسجين. عند مقارنة كتل الأكسجين المتحدة مع كتل متساوية من النيتروجين، ما نسبة كتلة الأكسجين في Y إلى كتلته في X؟",
        "zh": "表中给出了由氮和氧组成的化合物 X、Y 各一份样品中元素的质量。比较与等质量氮结合的氧的质量，Y 中氧的质量与 X 中氧的质量之比是多少？",
        "ku": "Di tabloyê de girseyên elementan ên di nimûneyek ji her yek ji pêkhateyên X û Y de, ku ji azot û oksîjenê pêk tên, hatine dayîn. Dema girseyên oksîjenê yên ku bi girseyên wekhev ên azotê re dibin yek tên berhevkirin, rêjeya girseya oksîjenê ya di Y de bo ya di X de çend e?"
      },
      "options": [
        {
          "tr": "1/6",
          "en": "1/6",
          "de": "1/6",
          "fr": "1/6",
          "ru": "1/6",
          "ar": "1/6",
          "zh": "1/6",
          "ku": "1/6"
        },
        {
          "tr": "1/3",
          "en": "1/3",
          "de": "1/3",
          "fr": "1/3",
          "ru": "1/3",
          "ar": "1/3",
          "zh": "1/3",
          "ku": "1/3"
        },
        {
          "tr": "1/2",
          "en": "1/2",
          "de": "1/2",
          "fr": "1/2",
          "ru": "1/2",
          "ar": "1/2",
          "zh": "1/2",
          "ku": "1/2"
        },
        {
          "tr": "3/2",
          "en": "3/2",
          "de": "3/2",
          "fr": "3/2",
          "ru": "3/2",
          "ar": "3/2",
          "zh": "3/2",
          "ku": "3/2"
        },
        {
          "tr": "2",
          "en": "2",
          "de": "2",
          "fr": "2",
          "ru": "2",
          "ar": "2",
          "zh": "2",
          "ku": "2"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Önce azot kütleleri eşitlenir: X'te 7 g N ile 4 g O birleşir. Y'de 21 g N ile 24 g O birleştiğine göre 7 g N ile 24/3 = 8 g O birleşir. Oran mO(Y)/mO(X) = 8/4 = 2'dir (X = N2O, Y = NO). Azot eşitlenmeden doğrudan 4/24 alınırsa 1/6, oran ters kurulursa 1/2 bulunur; ikisi de hatalıdır.",
        "en": "First equalize the nitrogen masses: in X, 7 g N combines with 4 g O. In Y, 21 g N combines with 24 g O, so 7 g N combines with 24/3 = 8 g O. The ratio mO(Y)/mO(X) = 8/4 = 2 (X = N2O, Y = NO). Taking 4/24 directly without equalizing nitrogen gives 1/6, and inverting the ratio gives 1/2; both are wrong.",
        "de": "Zuerst werden die Stickstoffmassen angeglichen: In X verbinden sich 7 g N mit 4 g O. In Y verbinden sich 21 g N mit 24 g O, also 7 g N mit 24/3 = 8 g O. Das Verhältnis mO(Y)/mO(X) = 8/4 = 2 (X = N2O, Y = NO). Nimmt man direkt 4/24 ohne Angleichung, erhält man 1/6, bei umgekehrtem Verhältnis 1/2; beides ist falsch.",
        "fr": "On égalise d’abord les masses d’azote : dans X, 7 g de N se combinent avec 4 g de O. Dans Y, 21 g de N se combinent avec 24 g de O, donc 7 g de N avec 24/3 = 8 g de O. Le rapport mO(Y)/mO(X) = 8/4 = 2 (X = N2O, Y = NO). Prendre directement 4/24 sans égaliser l’azote donne 1/6, et inverser le rapport donne 1/2 ; les deux sont faux.",
        "ru": "Сначала уравнивают массы азота: в X 7 г N соединяются с 4 г O. В Y 21 г N соединяются с 24 г O, значит, 7 г N — с 24/3 = 8 г O. Отношение mO(Y)/mO(X) = 8/4 = 2 (X = N2O, Y = NO). Если сразу взять 4/24 без уравнивания азота, получится 1/6, а при перевёрнутом отношении — 1/2; оба ответа неверны.",
        "ar": "نساوي أولًا كتلتي النيتروجين: في X تتحد 7 g من N مع 4 g من O. وفي Y تتحد 21 g من N مع 24 g من O، أي تتحد 7 g من N مع 24/3 = 8 g من O. النسبة mO(Y)/mO(X) = 8/4 = 2 (X = N2O وY = NO). وأخذ 4/24 مباشرة دون مساواة النيتروجين يعطي 1/6، وقلب النسبة يعطي 1/2؛ وكلاهما خطأ.",
        "zh": "先使氮的质量相等：X 中 7 g N 与 4 g O 化合。Y 中 21 g N 与 24 g O 化合，则 7 g N 与 24/3 = 8 g O 化合。比值 mO(Y)/mO(X) = 8/4 = 2(X = N2O，Y = NO)。不使氮的质量相等而直接取 4/24 得 1/6，把比值颠倒得 1/2，都是错误的。",
        "ku": "Pêşî girseyên azotê tên wekhevkirin: di X de 7 g N bi 4 g O re yek dibe. Ji ber ku di Y de 21 g N bi 24 g O re yek dibe, 7 g N bi 24/3 = 8 g O re yek dibe. Rêje mO(Y)/mO(X) = 8/4 = 2 ye (X = N2O, Y = NO). Heke bêyî wekhevkirina azotê rasterast 4/24 were girtin 1/6, heke rêje berevajî were danîn 1/2 tê dîtin; her du jî şaş in."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Bileşik",
            "en": "Compound",
            "de": "Verbindung",
            "fr": "Composé",
            "ru": "Соединение",
            "ar": "المركب",
            "zh": "化合物",
            "ku": "Pêkhate"
          },
          {
            "tr": "N kütlesi (g)",
            "en": "Mass of N (g)",
            "de": "Masse N (g)",
            "fr": "Masse de N (g)",
            "ru": "Масса N (г)",
            "ar": "كتلة N (g)",
            "zh": "N 的质量 (g)",
            "ku": "Girseya N (g)"
          },
          {
            "tr": "O kütlesi (g)",
            "en": "Mass of O (g)",
            "de": "Masse O (g)",
            "fr": "Masse de O (g)",
            "ru": "Масса O (г)",
            "ar": "كتلة O (g)",
            "zh": "O 的质量 (g)",
            "ku": "Girseya O (g)"
          }
        ],
        "rows": [
          [
            "X",
            "7",
            "4"
          ],
          [
            "Y",
            "21",
            "24"
          ]
        ]
      }
    },
    {
      "id": "u06-twin05",
      "stem": {
        "tr": "Aynı sıcaklık ve basınçta bulunan eşit hacimli CH4 ve SO2 gazları için aşağıdaki yargılardan hangileri doğrudur? (H: 1, C: 12, O: 16, S: 32)\nI. Molekül sayıları eşittir.\nII. Kütleleri eşittir.\nIII. Toplam atom sayıları eşittir.",
        "en": "Which of the following statements are correct for equal volumes of CH4 and SO2 gases at the same temperature and pressure? (H: 1, C: 12, O: 16, S: 32)\nI. Their numbers of molecules are equal.\nII. Their masses are equal.\nIII. Their total numbers of atoms are equal.",
        "de": "Welche der folgenden Aussagen gelten für gleiche Volumina der Gase CH4 und SO2 bei gleicher Temperatur und gleichem Druck? (H: 1, C: 12, O: 16, S: 32)\nI. Ihre Molekülzahlen sind gleich.\nII. Ihre Massen sind gleich.\nIII. Ihre Gesamtatomzahlen sind gleich.",
        "fr": "Lesquelles des affirmations suivantes sont correctes pour des volumes égaux de CH4 et de SO2 gazeux à la même température et à la même pression ? (H : 1, C : 12, O : 16, S : 32)\nI. Leurs nombres de molécules sont égaux.\nII. Leurs masses sont égales.\nIII. Leurs nombres totaux d’atomes sont égaux.",
        "ru": "Какие из следующих утверждений верны для равных объёмов газов CH4 и SO2 при одинаковых температуре и давлении? (H: 1, C: 12, O: 16, S: 32)\nI. Числа молекул равны.\nII. Массы равны.\nIII. Общие числа атомов равны.",
        "ar": "أي العبارات الآتية صحيحة لحجمين متساويين من غازي CH4 وSO2 عند درجة الحرارة والضغط نفسيهما؟ (H: 1، C: 12، O: 16، S: 32)\nI. عدد الجزيئات متساوٍ.\nII. الكتلتان متساويتان.\nIII. العدد الكلي للذرات متساوٍ.",
        "zh": "同温同压下体积相等的 CH4 和 SO2 气体，下列说法中哪些正确？(H: 1, C: 12, O: 16, S: 32)\nI. 分子数相等。\nII. 质量相等。\nIII. 原子总数相等。",
        "ku": "Ji bo gazên CH4 û SO2 yên bi qebareyên wekhev ku di heman germahî û zextê de ne, kîjan ji van gotinan rast in? (H: 1, C: 12, O: 16, S: 32)\nI. Hejmarên molekulan wekhev in.\nII. Girseyên wan wekhev in.\nIII. Hejmarên giştî yên atoman wekhev in."
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
      "correctIndex": 0,
      "explanation": {
        "tr": "I doğru: Avogadro hipotezine göre aynı koşullarda eşit hacimli gazlar eşit sayıda molekül (eşit mol) içerir. II yanlış: mol sayıları eşit ama mol kütleleri farklıdır (CH4 = 16, SO2 = 64 g/mol); SO2'nin kütlesi 4 kat fazladır. III yanlış: bir CH4 molekülünde 5, bir SO2 molekülünde 3 atom vardır; atom sayıları oranı 5/3'tür.",
        "en": "I is correct: by Avogadro's hypothesis, equal volumes of gases under the same conditions contain equal numbers of molecules (equal moles). II is wrong: the moles are equal but the molar masses differ (CH4 = 16, SO2 = 64 g/mol); SO2 has 4 times the mass. III is wrong: a CH4 molecule has 5 atoms and an SO2 molecule has 3; the atom ratio is 5/3.",
        "de": "I ist richtig: Nach der Avogadro-Hypothese enthalten gleiche Gasvolumina unter gleichen Bedingungen gleich viele Moleküle (gleiche Stoffmenge). II ist falsch: Die Stoffmengen sind gleich, die molaren Massen aber verschieden (CH4 = 16, SO2 = 64 g/mol); SO2 hat die 4-fache Masse. III ist falsch: Ein CH4-Molekül hat 5 Atome, ein SO2-Molekül 3; das Atomzahlverhältnis ist 5/3.",
        "fr": "I est correcte : d’après l’hypothèse d’Avogadro, des volumes égaux de gaz dans les mêmes conditions contiennent le même nombre de molécules (même quantité de matière). II est fausse : les quantités de matière sont égales mais les masses molaires diffèrent (CH4 = 16, SO2 = 64 g/mol) ; SO2 a une masse 4 fois plus grande. III est fausse : une molécule de CH4 a 5 atomes et une molécule de SO2 en a 3 ; le rapport des atomes est 5/3.",
        "ru": "I верно: по гипотезе Авогадро равные объёмы газов при одинаковых условиях содержат одинаковое число молекул (равное количество вещества). II неверно: количества вещества равны, но молярные массы разные (CH4 = 16, SO2 = 64 г/моль); масса SO2 в 4 раза больше. III неверно: в молекуле CH4 5 атомов, в молекуле SO2 — 3; отношение чисел атомов 5/3.",
        "ar": "I صحيحة: وفق فرضية أفوجادرو تحتوي الحجوم المتساوية من الغازات في الظروف نفسها على عدد متساوٍ من الجزيئات (مولات متساوية). II خاطئة: عدد المولات متساوٍ لكن الكتل المولية مختلفة (CH4 = 16 وSO2 = 64 g/mol)، فكتلة SO2 أكبر بأربع مرات. III خاطئة: في جزيء CH4 خمس ذرات وفي جزيء SO2 ثلاث ذرات، فنسبة الذرات 5/3.",
        "zh": "I 正确：根据阿伏加德罗假说，同条件下等体积的气体含有相同数目的分子（物质的量相等）。II 错误：物质的量相等但摩尔质量不同(CH4 = 16，SO2 = 64 g/mol)，SO2 的质量是 CH4 的 4 倍。III 错误：一个 CH4 分子含 5 个原子，一个 SO2 分子含 3 个原子，原子数之比为 5/3。",
        "ku": "I rast e: li gorî hîpoteza Avogadro, di heman şertan de gazên bi qebareyên wekhev hejmareke wekhev a molekulan (molên wekhev) dihewînin. II şaş e: hejmarên molan wekhev in, lê girseyên molî cuda ne (CH4 = 16, SO2 = 64 g/mol); girseya SO2 4 qat zêdetir e. III şaş e: di molekuleke CH4 de 5, di molekuleke SO2 de 3 atom hene; rêjeya hejmarên atoman 5/3 e."
      }
    },
    {
      "id": "u06-twin06",
      "stem": {
        "tr": "Kütlece %40 C, %6,7 H ve %53,3 O içeren bir organik bileşiğin mol kütlesi 60 g/mol'dür. Bu bileşiğin molekül formülü aşağıdakilerden hangisidir? (H: 1, C: 12, O: 16)",
        "en": "An organic compound containing 40% C, 6.7% H and 53.3% O by mass has a molar mass of 60 g/mol. Which of the following is its molecular formula? (H: 1, C: 12, O: 16)",
        "de": "Eine organische Verbindung mit den Massenanteilen 40 % C, 6,7 % H und 53,3 % O hat eine molare Masse von 60 g/mol. Welche der folgenden ist ihre Molekülformel? (H: 1, C: 12, O: 16)",
        "fr": "Un composé organique contenant en masse 40 % de C, 6,7 % de H et 53,3 % de O a une masse molaire de 60 g/mol. Laquelle des formules suivantes est sa formule moléculaire ? (H : 1, C : 12, O : 16)",
        "ru": "Органическое соединение, содержащее по массе 40 % C, 6,7 % H и 53,3 % O, имеет молярную массу 60 г/моль. Какова его молекулярная формула? (H: 1, C: 12, O: 16)",
        "ar": "مركب عضوي يحتوي بالكتلة على 40% C و6.7% H و53.3% O، وكتلته المولية 60 g/mol. أيٌّ مما يأتي صيغته الجزيئية؟ (H: 1، C: 12، O: 16)",
        "zh": "某有机化合物按质量计含 C 40%、H 6.7%、O 53.3%，摩尔质量为 60 g/mol。它的分子式是下列哪一个？(H: 1, C: 12, O: 16)",
        "ku": "Girseya molî ya pêkhateyeke organîk a ku bi girseyî %40 C, %6,7 H û %53,3 O dihewîne 60 g/mol e. Formula molekulî ya vê pêkhateyê kîjan e? (H: 1, C: 12, O: 16)"
      },
      "options": [
        {
          "tr": "CH2O",
          "en": "CH2O",
          "de": "CH2O",
          "fr": "CH2O",
          "ru": "CH2O",
          "ar": "CH2O",
          "zh": "CH2O",
          "ku": "CH2O"
        },
        {
          "tr": "C2H4O",
          "en": "C2H4O",
          "de": "C2H4O",
          "fr": "C2H4O",
          "ru": "C2H4O",
          "ar": "C2H4O",
          "zh": "C2H4O",
          "ku": "C2H4O"
        },
        {
          "tr": "C3H8O",
          "en": "C3H8O",
          "de": "C3H8O",
          "fr": "C3H8O",
          "ru": "C3H8O",
          "ar": "C3H8O",
          "zh": "C3H8O",
          "ku": "C3H8O"
        },
        {
          "tr": "C2H4O2",
          "en": "C2H4O2",
          "de": "C2H4O2",
          "fr": "C2H4O2",
          "ru": "C2H4O2",
          "ar": "C2H4O2",
          "zh": "C2H4O2",
          "ku": "C2H4O2"
        },
        {
          "tr": "C2H6O2",
          "en": "C2H6O2",
          "de": "C2H6O2",
          "fr": "C2H6O2",
          "ru": "C2H6O2",
          "ar": "C2H6O2",
          "zh": "C2H6O2",
          "ku": "C2H6O2"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "100 g bileşikte: C = 40/12 ≈ 3,33 mol; H = 6,7/1 = 6,7 mol; O = 53,3/16 ≈ 3,33 mol. En küçüğe bölünce oran 1 : 2 : 1, basit formül CH2O (30 g/mol). n = 60/30 = 2, molekül formülü C2H4O2. CH2O yalnızca basit formüldür; C3H8O'nun mol kütlesi de 60 g/mol olsa da kütlece bileşimi verilenle uyuşmaz (C oranı %60).",
        "en": "In 100 g of the compound: C = 40/12 ≈ 3.33 mol; H = 6.7/1 = 6.7 mol; O = 53.3/16 ≈ 3.33 mol. Dividing by the smallest gives 1 : 2 : 1, so the empirical formula is CH2O (30 g/mol). n = 60/30 = 2, giving the molecular formula C2H4O2. CH2O is only the empirical formula; C3H8O also has a molar mass of 60 g/mol, but its composition does not match (60% C).",
        "de": "In 100 g der Verbindung: C = 40/12 ≈ 3,33 mol; H = 6,7/1 = 6,7 mol; O = 53,3/16 ≈ 3,33 mol. Division durch den kleinsten Wert ergibt 1 : 2 : 1, Verhältnisformel CH2O (30 g/mol). n = 60/30 = 2, Molekülformel C2H4O2. CH2O ist nur die Verhältnisformel; C3H8O hat zwar auch 60 g/mol, aber seine Zusammensetzung passt nicht (60 % C).",
        "fr": "Dans 100 g du composé : C = 40/12 ≈ 3,33 mol ; H = 6,7/1 = 6,7 mol ; O = 53,3/16 ≈ 3,33 mol. En divisant par la plus petite valeur, on obtient 1 : 2 : 1, formule brute simplifiée CH2O (30 g/mol). n = 60/30 = 2, d’où la formule moléculaire C2H4O2. CH2O n’est que la formule simplifiée ; C3H8O a aussi une masse molaire de 60 g/mol, mais sa composition ne correspond pas (60 % de C).",
        "ru": "В 100 г соединения: C = 40/12 ≈ 3,33 моль; H = 6,7/1 = 6,7 моль; O = 53,3/16 ≈ 3,33 моль. При делении на наименьшее получаем 1 : 2 : 1, простейшая формула CH2O (30 г/моль). n = 60/30 = 2, молекулярная формула C2H4O2. CH2O — лишь простейшая формула; у C3H8O молярная масса тоже 60 г/моль, но состав не совпадает (60 % C).",
        "ar": "في 100 g من المركب: C = 40/12 ≈ 3.33 mol، H = 6.7/1 = 6.7 mol، O = 53.3/16 ≈ 3.33 mol. بالقسمة على الأصغر تكون النسبة 1 : 2 : 1 والصيغة الأولية CH2O (30 g/mol). n = 60/30 = 2 فالصيغة الجزيئية C2H4O2. أما CH2O فهي الصيغة الأولية فقط، وC3H8O كتلته المولية 60 g/mol أيضًا لكن تركيبه لا يطابق المعطى (60% C).",
        "zh": "100 g 化合物中：C = 40/12 ≈ 3.33 mol；H = 6.7/1 = 6.7 mol；O = 53.3/16 ≈ 3.33 mol。除以最小值得 1 : 2 : 1，最简式为 CH2O(30 g/mol)。n = 60/30 = 2，分子式为 C2H4O2。CH2O 只是最简式；C3H8O 的摩尔质量虽然也是 60 g/mol，但组成不符(含 C 60%)。",
        "ku": "Di 100 g pêkhateyê de: C = 40/12 ≈ 3,33 mol; H = 6,7/1 = 6,7 mol; O = 53,3/16 ≈ 3,33 mol. Dema li ser ya herî piçûk tên parvekirin rêje 1 : 2 : 1 e, formula sade CH2O ye (30 g/mol). n = 60/30 = 2, formula molekulî C2H4O2 ye. CH2O tenê formula sade ye; her çend girseya molî ya C3H8O jî 60 g/mol be, pêkhatina wê ya girseyî bi daneyan re li hev nayê (rêjeya C %60 e)."
      }
    },
    {
      "id": "u06-twin07",
      "stem": {
        "tr": "Kapalı bir kapta X ve Y maddeleri tepkimeye girerek Z ve T maddelerini oluşturuyor. Maddelerin tepkimeden önceki ve sonraki kütleleri tabloda verilmiştir. Tabloda m ile gösterilen Z kütlesi kaç gramdır?",
        "en": "In a closed container, substances X and Y react to form substances Z and T. The table gives the masses of the substances before and after the reaction. What is the mass of Z, shown as m in the table, in grams?",
        "de": "In einem geschlossenen Gefäß reagieren die Stoffe X und Y zu den Stoffen Z und T. Die Tabelle gibt die Massen der Stoffe vor und nach der Reaktion an. Wie viel Gramm beträgt die in der Tabelle mit m bezeichnete Masse von Z?",
        "fr": "Dans un récipient fermé, les substances X et Y réagissent pour former les substances Z et T. Le tableau donne les masses des substances avant et après la réaction. Quelle est, en grammes, la masse de Z notée m dans le tableau ?",
        "ru": "В закрытом сосуде вещества X и Y реагируют с образованием веществ Z и T. В таблице приведены массы веществ до и после реакции. Чему равна масса Z, обозначенная в таблице буквой m, в граммах?",
        "ar": "في وعاء مغلق تتفاعل المادتان X وY لتكوين المادتين Z وT. يبين الجدول كتل المواد قبل التفاعل وبعده. كم غرامًا كتلة Z المشار إليها في الجدول بالرمز m؟",
        "zh": "在密闭容器中，物质 X 与 Y 反应生成物质 Z 和 T。表中给出了反应前后各物质的质量。表中用 m 表示的 Z 的质量是多少克？",
        "ku": "Di firaxeke girtî de madeyên X û Y reaksiyonê dikin û madeyên Z û T çêdikin. Di tabloyê de girseyên madeyan ên berî û piştî reaksiyonê hatine dayîn. Girseya Z ya ku di tabloyê de bi m hatiye nîşankirin çend gram e?"
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
          "tr": "11",
          "en": "11",
          "de": "11",
          "fr": "11",
          "ru": "11",
          "ar": "11",
          "zh": "11",
          "ku": "11"
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
          "tr": "24",
          "en": "24",
          "de": "24",
          "fr": "24",
          "ru": "24",
          "ar": "24",
          "zh": "24",
          "ku": "24"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Kapalı kapta toplam kütle korunur. Başlangıçta 10 + 14 = 24 g madde vardır; sonunda 4 g artan X, m gram Z ve 9 g T bulunur: 4 + m + 9 = 24 → m = 11 g. Aynı sonuç harcanan kütlelerden de bulunur: (10 − 4) + 14 = 20 g = Z + T → Z = 20 − 9 = 11 g. 15 g sonucu artan X'i hesaba katmamaktan, 20 g harcanan kütlelerin toplamını Z sanmaktan, 24 g ise toplam kütlenin tamamını Z'ye vermekten gelir.",
        "en": "In a closed container the total mass is conserved. Initially there are 10 + 14 = 24 g; at the end there are 4 g of excess X, m g of Z and 9 g of T: 4 + m + 9 = 24 → m = 11 g. The same follows from the consumed masses: (10 − 4) + 14 = 20 g = Z + T → Z = 20 − 9 = 11 g. 15 g comes from ignoring the excess X, 20 g from taking the total consumed mass as Z, and 24 g from assigning the whole mass to Z.",
        "de": "Im geschlossenen Gefäß bleibt die Gesamtmasse erhalten. Anfangs sind 10 + 14 = 24 g vorhanden; am Ende 4 g überschüssiges X, m g Z und 9 g T: 4 + m + 9 = 24 → m = 11 g. Dasselbe folgt aus den verbrauchten Massen: (10 − 4) + 14 = 20 g = Z + T → Z = 20 − 9 = 11 g. 15 g ergibt sich, wenn man das überschüssige X übersieht, 20 g, wenn man die verbrauchte Gesamtmasse für Z hält, und 24 g, wenn man Z die gesamte Masse zuschreibt.",
        "fr": "Dans un récipient fermé, la masse totale se conserve. Au départ, il y a 10 + 14 = 24 g ; à la fin, 4 g de X en excès, m g de Z et 9 g de T : 4 + m + 9 = 24 → m = 11 g. On retrouve ce résultat avec les masses consommées : (10 − 4) + 14 = 20 g = Z + T → Z = 20 − 9 = 11 g. 15 g vient de l'oubli du X en excès, 20 g de la confusion entre la masse consommée totale et Z, et 24 g de l'attribution de toute la masse à Z.",
        "ru": "В закрытом сосуде общая масса сохраняется. В начале было 10 + 14 = 24 г; в конце — 4 г избытка X, m г Z и 9 г T: 4 + m + 9 = 24 → m = 11 г. То же получается из израсходованных масс: (10 − 4) + 14 = 20 г = Z + T → Z = 20 − 9 = 11 г. 15 г получается, если не учесть избыток X, 20 г — если принять всю израсходованную массу за Z, а 24 г — если отнести к Z всю массу.",
        "ar": "في الوعاء المغلق تُحفظ الكتلة الكلية. في البداية توجد 10 + 14 = 24 g، وفي النهاية يوجد 4 g من X الفائض وm غرامًا من Z و9 g من T: 4 + m + 9 = 24 ← m = 11 g. وتُستنتج النتيجة نفسها من الكتل المستهلكة: (10 − 4) + 14 = 20 g = Z + T ← Z = 20 − 9 = 11 g. الناتج 15 g يأتي من إهمال X الفائض، و20 g من اعتبار مجموع الكتل المستهلكة كتلةً لـ Z، و24 g من نسبة الكتلة كلها إلى Z.",
        "zh": "密闭容器中总质量守恒。反应前共有 10 + 14 = 24 g；反应后有 4 g 剩余的 X、m g Z 和 9 g T：4 + m + 9 = 24 → m = 11 g。由消耗的质量也可得出：(10 − 4) + 14 = 20 g = Z + T → Z = 20 − 9 = 11 g。15 g 是忽略了剩余的 X，20 g 是把消耗的总质量当成 Z，24 g 是把全部质量都算作 Z。",
        "ku": "Di firaxeke girtî de girseya giştî tê parastin. Di destpêkê de 10 + 14 = 24 g made heye; di dawiyê de 4 g X ya mayî, m g Z û 9 g T hene: 4 + m + 9 = 24 → m = 11 g. Heman encam ji girseyên xerckirî jî tê dîtin: (10 − 4) + 14 = 20 g = Z + T → Z = 20 − 9 = 11 g. Encama 15 g ji nehesibandina X ya mayî, 20 g ji girtina girseya xerckirî ya giştî wekî Z, 24 g jî ji dayîna hemû girseyê bo Z tê."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Madde",
            "en": "Substance",
            "de": "Stoff",
            "fr": "Substance",
            "ru": "Вещество",
            "ar": "المادة",
            "zh": "物质",
            "ku": "Made"
          },
          {
            "tr": "Tepkimeden önce (g)",
            "en": "Before reaction (g)",
            "de": "Vor der Reaktion (g)",
            "fr": "Avant la réaction (g)",
            "ru": "До реакции (г)",
            "ar": "قبل التفاعل (g)",
            "zh": "反应前 (g)",
            "ku": "Berî reaksiyonê (g)"
          },
          {
            "tr": "Tepkimeden sonra (g)",
            "en": "After reaction (g)",
            "de": "Nach der Reaktion (g)",
            "fr": "Après la réaction (g)",
            "ru": "После реакции (г)",
            "ar": "بعد التفاعل (g)",
            "zh": "反应后 (g)",
            "ku": "Piştî reaksiyonê (g)"
          }
        ],
        "rows": [
          [
            "X",
            "10",
            "4"
          ],
          [
            "Y",
            "14",
            "0"
          ],
          [
            "Z",
            "0",
            "m"
          ],
          [
            "T",
            "0",
            "9"
          ]
        ]
      }
    },
    {
      "id": "u06-twin08",
      "stem": {
        "tr": "Aşağıdaki gözlemlerden hangisi Sabit Oranlar Kanunu ile açıklanır?",
        "en": "Which of the following observations is explained by the Law of Definite Proportions?",
        "de": "Welche der folgenden Beobachtungen wird durch das Gesetz der konstanten Proportionen erklärt?",
        "fr": "Laquelle des observations suivantes s’explique par la loi des proportions définies ?",
        "ru": "Какое из следующих наблюдений объясняется законом постоянства состава?",
        "ar": "أي الملاحظات الآتية يفسرها قانون النسب الثابتة؟",
        "zh": "下列哪一项观察结果可以用定比定律解释？",
        "ku": "Kîjan ji van çavdêriyan bi Zagona Rêjeyên Sabît tê ravekirin?"
      },
      "options": [
        {
          "tr": "Farklı kaynaklardan alınan saf su örneklerinin hepsinde hidrojen kütlesinin oksijen kütlesine oranı 1/8'dir.",
          "en": "In pure water samples taken from different sources, the ratio of hydrogen mass to oxygen mass is always 1/8.",
          "de": "In reinen Wasserproben aus verschiedenen Quellen beträgt das Verhältnis von Wasserstoffmasse zu Sauerstoffmasse stets 1/8.",
          "fr": "Dans des échantillons d’eau pure prélevés de sources différentes, le rapport de la masse d’hydrogène à la masse d’oxygène vaut toujours 1/8.",
          "ru": "Во всех образцах чистой воды из разных источников отношение массы водорода к массе кислорода равно 1/8.",
          "ar": "في جميع عينات الماء النقي المأخوذة من مصادر مختلفة تكون نسبة كتلة الهيدروجين إلى كتلة الأكسجين 1/8.",
          "zh": "从不同来源取得的纯水样品中，氢与氧的质量比都是 1/8。",
          "ku": "Di hemû nimûneyên ava paqij ên ku ji çavkaniyên cuda hatine girtin de rêjeya girseya hîdrojenê li hember girseya oksîjenê 1/8 e."
        },
        {
          "tr": "Kapalı bir kapta yakılan magnezyum şeridin bulunduğu sistemin toplam kütlesi tepkimeden önce ve sonra aynıdır.",
          "en": "The total mass of a closed system in which a magnesium ribbon is burned is the same before and after the reaction.",
          "de": "Die Gesamtmasse eines geschlossenen Systems, in dem ein Magnesiumband verbrannt wird, ist vor und nach der Reaktion gleich.",
          "fr": "La masse totale d’un système fermé dans lequel on brûle un ruban de magnésium est la même avant et après la réaction.",
          "ru": "Общая масса закрытой системы, в которой сжигают магниевую ленту, до и после реакции одинакова.",
          "ar": "الكتلة الكلية لنظام مغلق يُحرق فيه شريط مغنيسيوم هي نفسها قبل التفاعل وبعده.",
          "zh": "在封闭容器中燃烧镁条，体系的总质量在反应前后相同。",
          "ku": "Girseya giştî ya sîstemeke girtî ya ku tê de şerîteke magnezyûmê tê şewitandin, berî û piştî reaksiyonê yek e."
        },
        {
          "tr": "CO ve CO2 bileşiklerinde eşit kütlede karbonla birleşen oksijen kütleleri oranı 1/2'dir.",
          "en": "In CO and CO2, the ratio of the masses of oxygen combined with equal masses of carbon is 1/2.",
          "de": "In CO und CO2 beträgt das Verhältnis der Sauerstoffmassen, die sich mit gleichen Kohlenstoffmassen verbinden, 1/2.",
          "fr": "Dans CO et CO2, le rapport des masses d’oxygène combinées à des masses égales de carbone vaut 1/2.",
          "ru": "В CO и CO2 отношение масс кислорода, соединённых с равными массами углерода, равно 1/2.",
          "ar": "في CO وCO2 تكون نسبة كتلتي الأكسجين المتحدتين مع كتلتين متساويتين من الكربون 1/2.",
          "zh": "在 CO 和 CO2 中，与等质量碳化合的氧的质量比为 1/2。",
          "ku": "Di CO û CO2 de rêjeya girseyên oksîjenê yên bi girseyên wekhev ên karbonê re yek dibin 1/2 e."
        },
        {
          "tr": "Aynı sıcaklık ve basınçta 1 L H2 gazı ile 1 L Cl2 gazı tepkimeye girerek 2 L HCl gazı oluşturur.",
          "en": "At the same temperature and pressure, 1 L of H2 gas reacts with 1 L of Cl2 gas to form 2 L of HCl gas.",
          "de": "Bei gleicher Temperatur und gleichem Druck reagieren 1 L H2-Gas und 1 L Cl2-Gas zu 2 L HCl-Gas.",
          "fr": "À la même température et à la même pression, 1 L de H2 gazeux réagit avec 1 L de Cl2 gazeux pour former 2 L de HCl gazeux.",
          "ru": "При одинаковых температуре и давлении 1 л газа H2 реагирует с 1 л газа Cl2, образуя 2 л газа HCl.",
          "ar": "عند درجة الحرارة والضغط نفسيهما يتفاعل 1 L من غاز H2 مع 1 L من غاز Cl2 فيتكوّن 2 L من غاز HCl.",
          "zh": "同温同压下，1 L H2 与 1 L Cl2 反应生成 2 L HCl 气体。",
          "ku": "Di heman germahî û zextê de 1 L gaza H2 bi 1 L gaza Cl2 re dikeve reaksiyonê û 2 L gaza HCl çêdike."
        },
        {
          "tr": "Aynı sıcaklık ve basınçta 1 L O2 gazı ile 1 L N2 gazı eşit sayıda molekül içerir.",
          "en": "At the same temperature and pressure, 1 L of O2 gas and 1 L of N2 gas contain equal numbers of molecules.",
          "de": "Bei gleicher Temperatur und gleichem Druck enthalten 1 L O2-Gas und 1 L N2-Gas gleich viele Moleküle.",
          "fr": "À la même température et à la même pression, 1 L de O2 gazeux et 1 L de N2 gazeux contiennent le même nombre de molécules.",
          "ru": "При одинаковых температуре и давлении 1 л газа O2 и 1 л газа N2 содержат одинаковое число молекул.",
          "ar": "عند درجة الحرارة والضغط نفسيهما يحتوي 1 L من غاز O2 و1 L من غاز N2 على عدد متساوٍ من الجزيئات.",
          "zh": "同温同压下，1 L O2 和 1 L N2 含有相同数目的分子。",
          "ku": "Di heman germahî û zextê de 1 L gaza O2 û 1 L gaza N2 hejmareke wekhev a molekulan dihewînin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Sabit Oranlar Kanunu, bir bileşiği oluşturan elementlerin kütle oranının bileşiğin kaynağından ve miktarından bağımsız olarak sabit olduğunu söyler; her saf su örneğinde mH/mO = 2/16 = 1/8 olması bunun örneğidir. Kapalı kapta toplam kütlenin değişmemesi Kütlenin Korunumu, CO–CO2 karşılaştırması Katlı Oranlar, gaz hacimlerinin 1 : 1 : 2 oranı Gay-Lussac'ın birleşen hacimler kanunu, eşit hacimde eşit molekül ise Avogadro hipotezi ile açıklanır.",
        "en": "The Law of Definite Proportions states that the mass ratio of the elements in a compound is constant regardless of the source or amount of the compound; mH/mO = 2/16 = 1/8 in every pure water sample is an example. The constant total mass in a closed vessel is explained by conservation of mass, the CO–CO2 comparison by multiple proportions, the 1 : 1 : 2 gas volume ratio by Gay-Lussac's law of combining volumes, and equal molecules in equal volumes by Avogadro's hypothesis.",
        "de": "Das Gesetz der konstanten Proportionen besagt, dass das Massenverhältnis der Elemente in einer Verbindung unabhängig von Herkunft und Menge konstant ist; mH/mO = 2/16 = 1/8 in jeder reinen Wasserprobe ist ein Beispiel dafür. Die gleichbleibende Gesamtmasse im geschlossenen Gefäß erklärt die Massenerhaltung, den Vergleich CO–CO2 das Gesetz der multiplen Proportionen, das Volumenverhältnis 1 : 1 : 2 das Gesetz der einfachen Volumenverhältnisse (Gay-Lussac) und gleiche Molekülzahlen in gleichen Volumina die Avogadro-Hypothese.",
        "fr": "La loi des proportions définies affirme que le rapport des masses des éléments d’un composé est constant quelles que soient l’origine et la quantité du composé ; mH/mO = 2/16 = 1/8 dans tout échantillon d’eau pure en est un exemple. La masse totale constante en récipient fermé relève de la conservation de la masse, la comparaison CO–CO2 des proportions multiples, le rapport de volumes 1 : 1 : 2 de la loi des volumes de Gay-Lussac, et l’égalité du nombre de molécules dans des volumes égaux de l’hypothèse d’Avogadro.",
        "ru": "Закон постоянства состава гласит, что массовое отношение элементов в соединении постоянно независимо от происхождения и количества соединения; mH/mO = 2/16 = 1/8 в любом образце чистой воды — пример этого. Неизменность общей массы в закрытом сосуде объясняет закон сохранения массы, сравнение CO–CO2 — закон кратных отношений, отношение объёмов газов 1 : 1 : 2 — закон объёмных отношений Гей-Люссака, равное число молекул в равных объёмах — гипотеза Авогадро.",
        "ar": "ينص قانون النسب الثابتة على أن نسبة كتل العناصر في المركب ثابتة بغض النظر عن مصدره وكميته، وكون mH/mO = 2/16 = 1/8 في كل عينة ماء نقي مثال على ذلك. أما ثبات الكتلة الكلية في الوعاء المغلق فيفسره قانون حفظ الكتلة، ومقارنة CO وCO2 يفسرها قانون النسب المتضاعفة، ونسبة الحجوم 1 : 1 : 2 يفسرها قانون جاي-لوساك للحجوم المتحدة، وتساوي الجزيئات في الحجوم المتساوية تفسره فرضية أفوجادرو.",
        "zh": "定比定律指出：化合物中各元素的质量比是固定的，与化合物的来源和数量无关；每份纯水样品中 mH/mO = 2/16 = 1/8 就是例子。密闭容器中总质量不变用质量守恒定律解释，CO 与 CO2 的比较用倍比定律解释，气体体积比 1 : 1 : 2 用盖-吕萨克气体化合体积定律解释，同体积含相同分子数用阿伏加德罗假说解释。",
        "ku": "Zagona Rêjeyên Sabît dibêje ku rêjeya girseyî ya elementên ku pêkhateyekê pêk tînin, bêyî ku bi çavkanî û mîqdara pêkhateyê ve girêdayî be, sabît e; ku di her nimûneya ava paqij de mH/mO = 2/16 = 1/8 e mînaka vê ye. Neguherîna girseya giştî di firaxa girtî de bi Parastina Girseyê, berhevdana CO–CO2 bi Rêjeyên Pirjimar, rêjeya 1 : 1 : 2 ya qebareyên gazan bi zagona qebareyên yekbûyî ya Gay-Lussac, hejmara wekhev a molekulan di qebareyên wekhev de jî bi hîpoteza Avogadro tê ravekirin."
      }
    },
    {
      "id": "u06-twin09",
      "stem": {
        "tr": "Bir X atomunun gerçek kütlesi 4,0x10^-23 g'dır. 12 g X elementi kaç mol X atomu içerir? (NA = 6,0x10^23)",
        "en": "The actual mass of one X atom is 4.0x10^-23 g. How many moles of X atoms are there in 12 g of element X? (NA = 6.0x10^23)",
        "de": "Die tatsächliche Masse eines X-Atoms beträgt 4,0x10^-23 g. Wie viel Mol X-Atome enthalten 12 g des Elements X? (NA = 6,0x10^23)",
        "fr": "La masse réelle d’un atome X est 4,0x10^-23 g. Combien de moles d’atomes X contiennent 12 g de l’élément X ? (NA = 6,0x10^23)",
        "ru": "Истинная масса одного атома X равна 4,0x10^-23 г. Сколько моль атомов X содержится в 12 г элемента X? (NA = 6,0x10^23)",
        "ar": "الكتلة الحقيقية لذرة X الواحدة 4.0x10^-23 g. كم مولًا من ذرات X يحتوي 12 g من العنصر X؟ (NA = 6.0x10^23)",
        "zh": "一个 X 原子的实际质量为 4.0x10^-23 g。12 g 元素 X 中含有多少摩尔 X 原子？(NA = 6.0x10^23)",
        "ku": "Girseya rastîn a atomeke X 4,0x10^-23 g e. 12 g elementa X çend mol atomên X dihewîne? (NA = 6,0x10^23)"
      },
      "options": [
        {
          "tr": "0,05",
          "en": "0.05",
          "de": "0,05",
          "fr": "0,05",
          "ru": "0,05",
          "ar": "0.05",
          "zh": "0.05",
          "ku": "0,05"
        },
        {
          "tr": "0,25",
          "en": "0.25",
          "de": "0,25",
          "fr": "0,25",
          "ru": "0,25",
          "ar": "0.25",
          "zh": "0.25",
          "ku": "0,25"
        },
        {
          "tr": "0,5",
          "en": "0.5",
          "de": "0,5",
          "fr": "0,5",
          "ru": "0,5",
          "ar": "0.5",
          "zh": "0.5",
          "ku": "0,5"
        },
        {
          "tr": "1,0",
          "en": "1.0",
          "de": "1,0",
          "fr": "1,0",
          "ru": "1,0",
          "ar": "1.0",
          "zh": "1.0",
          "ku": "1,0"
        },
        {
          "tr": "2,0",
          "en": "2.0",
          "de": "2,0",
          "fr": "2,0",
          "ru": "2,0",
          "ar": "2.0",
          "zh": "2.0",
          "ku": "2,0"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Mol kütlesi = gerçek kütle · NA = 4,0x10^-23 · 6,0x10^23 = 24 g/mol. n = m / MA = 12 / 24 = 0,5 mol. 2,0 sonucu bölmenin ters yapılmasıyla (24/12), 0,05 sonucu üslerin yanlış hesaplanıp mol kütlesinin 240 alınmasıyla, 0,25 ise mol kütlesinin iki katı (48) alınmasıyla elde edilir.",
        "en": "Molar mass = actual mass · NA = 4.0x10^-23 · 6.0x10^23 = 24 g/mol. n = m / MA = 12 / 24 = 0.5 mol. The result 2.0 comes from dividing the wrong way round (24/12), 0.05 from an exponent mistake that gives a molar mass of 240, and 0.25 from doubling the molar mass (48).",
        "de": "Molare Masse = tatsächliche Masse · NA = 4,0x10^-23 · 6,0x10^23 = 24 g/mol. n = m / MA = 12 / 24 = 0,5 mol. Das Ergebnis 2,0 entsteht durch umgekehrte Division (24/12), 0,05 durch einen Exponentenfehler (molare Masse 240), 0,25 durch Verdopplung der molaren Masse (48).",
        "fr": "Masse molaire = masse réelle · NA = 4,0x10^-23 · 6,0x10^23 = 24 g/mol. n = m / MA = 12 / 24 = 0,5 mol. Le résultat 2,0 vient d’une division inversée (24/12), 0,05 d’une erreur d’exposant donnant une masse molaire de 240, et 0,25 du doublement de la masse molaire (48).",
        "ru": "Молярная масса = истинная масса · NA = 4,0x10^-23 · 6,0x10^23 = 24 г/моль. n = m / MA = 12 / 24 = 0,5 моль. Ответ 2,0 получается при обратном делении (24/12), 0,05 — при ошибке в степенях (молярная масса 240), 0,25 — при удвоении молярной массы (48).",
        "ar": "الكتلة المولية = الكتلة الحقيقية · NA = 4.0x10^-23 · 6.0x10^23 = 24 g/mol. n = m / MA = 12 / 24 = 0.5 mol. والنتيجة 2.0 تنتج عن القسمة المعكوسة (24/12)، و0.05 عن خطأ في الأسس يجعل الكتلة المولية 240، و0.25 عن مضاعفة الكتلة المولية (48).",
        "zh": "摩尔质量 = 实际质量 · NA = 4.0x10^-23 · 6.0x10^23 = 24 g/mol。n = m / MA = 12 / 24 = 0.5 mol。2.0 是把除法颠倒(24/12)；0.05 是指数算错使摩尔质量变成 240；0.25 是把摩尔质量加倍(48)。",
        "ku": "Girseya molî = girseya rastîn · NA = 4,0x10^-23 · 6,0x10^23 = 24 g/mol. n = m / MA = 12 / 24 = 0,5 mol. Encama 2,0 bi parvekirina berevajî (24/12), 0,05 bi şaşiya hesabê hêzan ku girseya molî 240 dide, 0,25 jî bi girtina du qatê girseya molî (48) tê dîtin."
      }
    },
    {
      "id": "u06-twin10",
      "stem": {
        "tr": "Bir küp şeker yaklaşık 3,42 g sakkaroz (C12H22O11) içermektedir. Bir küp şekerdeki karbon atomu sayısı yaklaşık kaçtır? (H: 1, C: 12, O: 16; NA = 6,0x10^23)",
        "en": "A sugar cube contains about 3.42 g of sucrose (C12H22O11). Approximately how many carbon atoms are there in one sugar cube? (H: 1, C: 12, O: 16; NA = 6.0x10^23)",
        "de": "Ein Zuckerwürfel enthält etwa 3,42 g Saccharose (C12H22O11). Wie viele Kohlenstoffatome enthält ein Zuckerwürfel ungefähr? (H: 1, C: 12, O: 16; NA = 6,0x10^23)",
        "fr": "Un morceau de sucre contient environ 3,42 g de saccharose (C12H22O11). Combien d’atomes de carbone contient environ un morceau de sucre ? (H : 1, C : 12, O : 16 ; NA = 6,0x10^23)",
        "ru": "Кусочек сахара содержит около 3,42 г сахарозы (C12H22O11). Сколько примерно атомов углерода в одном кусочке сахара? (H: 1, C: 12, O: 16; NA = 6,0x10^23)",
        "ar": "يحتوي مكعب سكر على نحو 3.42 g من السكروز (C12H22O11). كم عدد ذرات الكربون تقريبًا في مكعب سكر واحد؟ (H: 1، C: 12، O: 16؛ NA = 6.0x10^23)",
        "zh": "一块方糖约含 3.42 g 蔗糖(C12H22O11)。一块方糖中大约含有多少个碳原子？(H: 1, C: 12, O: 16；NA = 6.0x10^23)",
        "ku": "Perçeyek şekirê kûpî nêzîkî 3,42 g sakaroz (C12H22O11) dihewîne. Hejmara atomên karbonê di perçeyek şekirê kûpî de nêzîkî çend e? (H: 1, C: 12, O: 16; NA = 6,0x10^23)"
      },
      "options": [
        {
          "tr": "6,0x10^21",
          "en": "6.0x10^21",
          "de": "6,0x10^21",
          "fr": "6,0x10^21",
          "ru": "6,0x10^21",
          "ar": "6.0x10^21",
          "zh": "6.0x10^21",
          "ku": "6,0x10^21"
        },
        {
          "tr": "7,2x10^22",
          "en": "7.2x10^22",
          "de": "7,2x10^22",
          "fr": "7,2x10^22",
          "ru": "7,2x10^22",
          "ar": "7.2x10^22",
          "zh": "7.2x10^22",
          "ku": "7,2x10^22"
        },
        {
          "tr": "1,32x10^23",
          "en": "1.32x10^23",
          "de": "1,32x10^23",
          "fr": "1,32x10^23",
          "ru": "1,32x10^23",
          "ar": "1.32x10^23",
          "zh": "1.32x10^23",
          "ku": "1,32x10^23"
        },
        {
          "tr": "2,7x10^23",
          "en": "2.7x10^23",
          "de": "2,7x10^23",
          "fr": "2,7x10^23",
          "ru": "2,7x10^23",
          "ar": "2.7x10^23",
          "zh": "2.7x10^23",
          "ku": "2,7x10^23"
        },
        {
          "tr": "7,2x10^23",
          "en": "7.2x10^23",
          "de": "7,2x10^23",
          "fr": "7,2x10^23",
          "ru": "7,2x10^23",
          "ar": "7.2x10^23",
          "zh": "7.2x10^23",
          "ku": "7,2x10^23"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "C12H22O11 mol kütlesi = 12·12 + 22·1 + 11·16 = 342 g/mol; n = 3,42 / 342 = 0,01 mol. Her molekülde 12 C atomu olduğundan C = 0,12 mol → 0,12 · 6,0x10^23 = 7,2x10^22 tane. 6,0x10^21 molekül sayısıdır; 1,32x10^23 H atomu sayısı (0,22 mol); 2,7x10^23 toplam atom sayısıdır (45 atom · 0,01 mol); 7,2x10^23 ise ondalık kaydırma hatasıdır.",
        "en": "Molar mass of C12H22O11 = 12·12 + 22·1 + 11·16 = 342 g/mol; n = 3.42 / 342 = 0.01 mol. Each molecule has 12 C atoms, so C = 0.12 mol → 0.12 · 6.0x10^23 = 7.2x10^22 atoms. 6.0x10^21 is the number of molecules; 1.32x10^23 is the number of H atoms (0.22 mol); 2.7x10^23 is the total number of atoms (45 atoms · 0.01 mol); 7.2x10^23 is a decimal-place error.",
        "de": "Molare Masse von C12H22O11 = 12·12 + 22·1 + 11·16 = 342 g/mol; n = 3,42 / 342 = 0,01 mol. Jedes Molekül hat 12 C-Atome, also C = 0,12 mol → 0,12 · 6,0x10^23 = 7,2x10^22 Atome. 6,0x10^21 ist die Molekülzahl; 1,32x10^23 die Zahl der H-Atome (0,22 mol); 2,7x10^23 die Gesamtatomzahl (45 Atome · 0,01 mol); 7,2x10^23 ist ein Kommafehler.",
        "fr": "Masse molaire de C12H22O11 = 12·12 + 22·1 + 11·16 = 342 g/mol ; n = 3,42 / 342 = 0,01 mol. Chaque molécule a 12 atomes C, donc C = 0,12 mol → 0,12 · 6,0x10^23 = 7,2x10^22 atomes. 6,0x10^21 est le nombre de molécules ; 1,32x10^23 le nombre d’atomes H (0,22 mol) ; 2,7x10^23 le nombre total d’atomes (45 atomes · 0,01 mol) ; 7,2x10^23 est une erreur de virgule.",
        "ru": "Молярная масса C12H22O11 = 12·12 + 22·1 + 11·16 = 342 г/моль; n = 3,42 / 342 = 0,01 моль. В каждой молекуле 12 атомов C, значит C = 0,12 моль → 0,12 · 6,0x10^23 = 7,2x10^22 атомов. 6,0x10^21 — число молекул; 1,32x10^23 — число атомов H (0,22 моль); 2,7x10^23 — общее число атомов (45 атомов · 0,01 моль); 7,2x10^23 — ошибка в положении запятой.",
        "ar": "الكتلة المولية لـ C12H22O11 = 12·12 + 22·1 + 11·16 = 342 g/mol، وn = 3.42 / 342 = 0.01 mol. في كل جزيء 12 ذرة C، إذن C = 0.12 mol → 0.12 · 6.0x10^23 = 7.2x10^22 ذرة. أما 6.0x10^21 فهو عدد الجزيئات، و1.32x10^23 عدد ذرات H (0.22 mol)، و2.7x10^23 العدد الكلي للذرات (45 ذرة · 0.01 mol)، و7.2x10^23 خطأ في موضع الفاصلة العشرية.",
        "zh": "C12H22O11 的摩尔质量 = 12·12 + 22·1 + 11·16 = 342 g/mol；n = 3.42 / 342 = 0.01 mol。每个分子含 12 个 C 原子，C = 0.12 mol → 0.12 · 6.0x10^23 = 7.2x10^22 个。6.0x10^21 是分子数；1.32x10^23 是 H 原子数(0.22 mol)；2.7x10^23 是原子总数(45 个原子 · 0.01 mol)；7.2x10^23 是小数点位置错误。",
        "ku": "Girseya molî ya C12H22O11 = 12·12 + 22·1 + 11·16 = 342 g/mol; n = 3,42 / 342 = 0,01 mol. Ji ber ku di her molekulê de 12 atomên C hene, C = 0,12 mol → 0,12 · 6,0x10^23 = 7,2x10^22 atom. 6,0x10^21 hejmara molekulan e; 1,32x10^23 hejmara atomên H ye (0,22 mol); 2,7x10^23 hejmara giştî ya atoman e (45 atom · 0,01 mol); 7,2x10^23 jî şaşiya cihguhertina vîrgulê ye."
      }
    },
    {
      "id": "u06-twin11",
      "stem": {
        "tr": "Ağzı açık bir erlende bulunan HCl çözeltisine terazi üzerinde bir parça magnezyum şerit atılıyor: Mg(k) + 2HCl(suda) → MgCl2(suda) + H2(g). Tepkime süresince terazide okunan değerin azaldığı gözleniyor. Aynı deney, ağzı lastik tıpayla sıkıca kapatılmış bir erlende tekrarlandığında terazide okunan değer değişmiyor. Bu deneylerle ilgili aşağıdaki yargılardan hangileri doğrudur?\nI. Açık erlende okunan kütlenin azalması kütlenin korunumu kanununa aykırı değildir; azalma kaptan çıkan H2 gazından kaynaklanır.\nII. Kapalı erlende her elementin atom sayısı tepkime boyunca korunur.\nIII. Kapalı erlende tepkimeye girenlerin toplam mol sayısı oluşan ürünlerin toplam mol sayısına eşittir.",
        "en": "On a balance, a piece of magnesium ribbon is dropped into HCl solution in an open flask: Mg(s) + 2HCl(aq) → MgCl2(aq) + H2(g). During the reaction the balance reading decreases. When the same experiment is repeated in a flask tightly closed with a rubber stopper, the reading does not change. Which of the following statements are correct?\nI. The decrease in mass in the open flask does not violate the law of conservation of mass; it is due to H2 gas leaving the flask.\nII. In the closed flask the number of atoms of each element is conserved throughout the reaction.\nIII. In the closed flask the total number of moles of reactants equals the total number of moles of products.",
        "de": "Auf einer Waage wird ein Stück Magnesiumband in HCl-Lösung in einem offenen Erlenmeyerkolben gegeben: Mg(s) + 2HCl(aq) → MgCl2(aq) + H2(g). Während der Reaktion nimmt die Anzeige ab. Wird derselbe Versuch in einem mit Gummistopfen dicht verschlossenen Kolben wiederholt, ändert sich die Anzeige nicht. Welche der folgenden Aussagen sind richtig?\nI. Die Massenabnahme im offenen Kolben widerspricht nicht dem Massenerhaltungsgesetz; sie kommt vom entweichenden H2-Gas.\nII. Im geschlossenen Kolben bleibt die Atomzahl jedes Elements während der Reaktion erhalten.\nIII. Im geschlossenen Kolben ist die Gesamtstoffmenge der Edukte gleich der Gesamtstoffmenge der Produkte.",
        "fr": "Sur une balance, on plonge un morceau de ruban de magnésium dans une solution de HCl contenue dans un erlenmeyer ouvert : Mg(s) + 2HCl(aq) → MgCl2(aq) + H2(g). Pendant la réaction, l’indication de la balance diminue. Quand on refait l’expérience dans un erlenmeyer fermé hermétiquement par un bouchon en caoutchouc, l’indication ne change pas. Lesquelles des affirmations suivantes sont correctes ?\nI. La diminution de masse dans l’erlenmeyer ouvert ne contredit pas la loi de conservation de la masse ; elle est due au dihydrogène H2 qui s’échappe.\nII. Dans l’erlenmeyer fermé, le nombre d’atomes de chaque élément est conservé pendant la réaction.\nIII. Dans l’erlenmeyer fermé, la quantité de matière totale des réactifs est égale à celle des produits.",
        "ru": "На весах в открытую колбу с раствором HCl бросают кусочек магниевой ленты: Mg(тв) + 2HCl(р-р) → MgCl2(р-р) + H2(г). Во время реакции показание весов уменьшается. Если повторить опыт в колбе, плотно закрытой резиновой пробкой, показание не меняется. Какие из следующих утверждений верны?\nI. Уменьшение массы в открытой колбе не противоречит закону сохранения массы; оно вызвано выходом газа H2 из колбы.\nII. В закрытой колбе число атомов каждого элемента в ходе реакции сохраняется.\nIII. В закрытой колбе общее количество вещества реагентов равно общему количеству вещества продуктов.",
        "ar": "على ميزان، تُلقى قطعة من شريط المغنيسيوم في محلول HCl داخل دورق مخروطي مفتوح: Mg(s) + 2HCl(aq) → MgCl2(aq) + H2(g). أثناء التفاعل تتناقص قراءة الميزان. وعند إعادة التجربة نفسها في دورق مغلق بإحكام بسدادة مطاطية لا تتغير القراءة. أيّ العبارات الآتية عن هاتين التجربتين صحيحة؟\nI. نقص الكتلة في الدورق المفتوح لا يخالف قانون حفظ الكتلة، وسببه خروج غاز H2 من الدورق.\nII. في الدورق المغلق يبقى عدد ذرات كل عنصر محفوظًا طوال التفاعل.\nIII. في الدورق المغلق يساوي العدد الكلي لمولات المتفاعلات العدد الكلي لمولات النواتج.",
        "zh": "在天平上，把一段镁条放入敞口锥形瓶中的 HCl 溶液里：Mg(s) + 2HCl(aq) → MgCl2(aq) + H2(g)。反应过程中天平示数减小。在用橡胶塞塞紧的锥形瓶中重复同一实验，示数不变。下列说法中哪些正确？\nI. 敞口瓶中质量减小并不违背质量守恒定律，是 H2 逸出造成的。\nII. 在密闭瓶中，反应过程中每种元素的原子数守恒。\nIII. 在密闭瓶中，反应物物质的量总和等于生成物物质的量总和。",
        "ku": "Li ser terazûyê, perçeyek şerîta magnezyûmê tê avêtin nav çareseriya HCl ya di erlenmeyereke devvekirî de: Mg(s) + 2HCl(aq) → MgCl2(aq) + H2(g). Tê dîtin ku di dema reaksiyonê de nirxa ku li ser terazûyê tê xwendin kêm dibe. Dema heman ceribandin di erlenmeyereke ku devê wê bi tipeke lastîkî baş hatiye girtin de tê dubarekirin, nirxa terazûyê naguhere. Derbarê van ceribandinan de kîjan ji van gotinan rast in?\nI. Kêmbûna girseya ku di erlenmeyera devvekirî de tê xwendin li dijî zagona parastina girseyê nîne; sedema kêmbûnê gaza H2 ye ku ji firaxê derdikeve.\nII. Di erlenmeyera girtî de hejmara atomên her elementê di tevahiya reaksiyonê de tê parastin.\nIII. Di erlenmeyera girtî de hejmara giştî ya molên reaktantan bi hejmara giştî ya molên hilberan re wekhev e."
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
        "tr": "I doğru: açık kapta oluşan H2 gazı ortamdan ayrıldığı için terazi azalma gösterir; çıkan gaz da hesaba katılırsa toplam kütle korunur. II doğru: kimyasal tepkimelerde atomlar yok olmaz ve oluşmaz, yalnızca yeniden düzenlenir. III yanlış: denkleme göre girenler 1 + 2 = 3 mol, ürünler 1 + 1 = 2 mol'dür; kütle korunur, mol sayısının korunması gerekmez.",
        "en": "I is correct: in the open flask the H2 gas formed leaves, so the balance shows a decrease; if the escaped gas is included, the total mass is conserved. II is correct: in chemical reactions atoms are neither destroyed nor created, only rearranged. III is wrong: according to the equation, reactants are 1 + 2 = 3 mol and products 1 + 1 = 2 mol; mass is conserved, but the number of moles need not be.",
        "de": "I ist richtig: Im offenen Kolben entweicht das gebildete H2, daher zeigt die Waage eine Abnahme; zählt man das entwichene Gas mit, bleibt die Gesamtmasse erhalten. II ist richtig: Bei chemischen Reaktionen werden Atome weder vernichtet noch erzeugt, nur umgeordnet. III ist falsch: Laut Gleichung sind es 1 + 2 = 3 mol Edukte und 1 + 1 = 2 mol Produkte; die Masse bleibt erhalten, die Stoffmenge muss es nicht.",
        "fr": "I est correcte : dans l’erlenmeyer ouvert, le H2 formé s’échappe, d’où la diminution indiquée par la balance ; en tenant compte du gaz échappé, la masse totale est conservée. II est correcte : au cours d’une réaction chimique, les atomes ne sont ni détruits ni créés, ils sont seulement réarrangés. III est fausse : d’après l’équation, les réactifs représentent 1 + 2 = 3 mol et les produits 1 + 1 = 2 mol ; la masse est conservée, pas nécessairement la quantité de matière.",
        "ru": "I верно: в открытой колбе образующийся H2 уходит, поэтому весы показывают уменьшение; если учесть вышедший газ, общая масса сохраняется. II верно: в химических реакциях атомы не исчезают и не возникают, а лишь перегруппировываются. III неверно: по уравнению реагентов 1 + 2 = 3 моль, продуктов 1 + 1 = 2 моль; масса сохраняется, а количество вещества не обязано.",
        "ar": "I صحيحة: في الدورق المفتوح يخرج غاز H2 الناتج فيُظهر الميزان نقصًا، وإذا احتُسب الغاز الخارج تبقى الكتلة الكلية محفوظة. II صحيحة: في التفاعلات الكيميائية لا تفنى الذرات ولا تُستحدث بل يُعاد ترتيبها فقط. III خاطئة: وفق المعادلة مولات المتفاعلات 1 + 2 = 3 mol ومولات النواتج 1 + 1 = 2 mol؛ فالكتلة محفوظة ولا يلزم أن يُحفظ عدد المولات.",
        "zh": "I 正确：敞口瓶中生成的 H2 逸出，所以天平示数减小；若把逸出的气体计算在内，总质量守恒。II 正确：化学反应中原子既不消失也不产生，只是重新组合。III 错误：按方程式反应物为 1 + 2 = 3 mol，生成物为 1 + 1 = 2 mol；质量守恒，但物质的量不一定守恒。",
        "ku": "I rast e: di firaxa devvekirî de gaza H2 ya ku çêdibe ji derdorê dûr dikeve, loma terazû kêmbûnê nîşan dide; heke gaza ku derketiye jî were hesibandin, girseya giştî tê parastin. II rast e: di reaksiyonên kîmyewî de atom ne winda dibin ne jî çêdibin, tenê ji nû ve tên rêzkirin. III şaş e: li gorî hevkêşeyê, reaktant 1 + 2 = 3 mol, hilber 1 + 1 = 2 mol in; girse tê parastin, lê ne mecbûr e ku hejmara molan were parastin."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 200,
        "markup": "<rect x=\"43\" y=\"166\" width=\"104\" height=\"7\" class=\"qf-solid\"/><rect x=\"51\" y=\"173\" width=\"88\" height=\"20\" class=\"qf-fill\"/><rect x=\"77\" y=\"177\" width=\"36\" height=\"11\" class=\"qf-water\"/><polygon points=\"59,165 131,165 103,105 103,72 87,72 87,105\" class=\"qf-fill\"/><polygon points=\"60,164 130,164 120,142 70,142\" class=\"qf-water\"/><rect x=\"83\" y=\"155\" width=\"16\" height=\"4\" class=\"qf-solid\"/><circle cx=\"103\" cy=\"150\" r=\"2.4\" class=\"qf-fill\"/><circle cx=\"93\" cy=\"147\" r=\"2\" class=\"qf-fill\"/><circle cx=\"95\" cy=\"60\" r=\"2.6\" class=\"qf-fill\"/><circle cx=\"101\" cy=\"48\" r=\"2.6\" class=\"qf-fill\"/><circle cx=\"91\" cy=\"37\" r=\"2.6\" class=\"qf-fill\"/><text x=\"109\" y=\"52\" class=\"qf-strong\">H₂</text><text x=\"95\" y=\"18\" text-anchor=\"middle\" class=\"qf-small\">{{open}}</text><rect x=\"213\" y=\"166\" width=\"104\" height=\"7\" class=\"qf-solid\"/><rect x=\"221\" y=\"173\" width=\"88\" height=\"20\" class=\"qf-fill\"/><rect x=\"247\" y=\"177\" width=\"36\" height=\"11\" class=\"qf-water\"/><polygon points=\"229,165 301,165 273,105 273,72 257,72 257,105\" class=\"qf-fill\"/><polygon points=\"230,164 300,164 290,142 240,142\" class=\"qf-water\"/><rect x=\"253\" y=\"155\" width=\"16\" height=\"4\" class=\"qf-solid\"/><circle cx=\"273\" cy=\"150\" r=\"2.4\" class=\"qf-fill\"/><circle cx=\"263\" cy=\"147\" r=\"2\" class=\"qf-fill\"/><rect x=\"254\" y=\"62\" width=\"22\" height=\"13\" class=\"qf-solid\"/><text x=\"265\" y=\"18\" text-anchor=\"middle\" class=\"qf-small\">{{closed}}</text>",
        "labels": {
          "open": {
            "tr": "ağzı açık",
            "en": "open flask",
            "de": "offener Kolben",
            "fr": "erlenmeyer ouvert",
            "ru": "открытая колба",
            "ar": "دورق مفتوح",
            "zh": "敞口锥形瓶",
            "ku": "devê vekirî"
          },
          "closed": {
            "tr": "lastik tıpayla kapalı",
            "en": "closed with a rubber stopper",
            "de": "mit Gummistopfen verschlossen",
            "fr": "fermé par un bouchon",
            "ru": "закрыта резиновой пробкой",
            "ar": "مسدود بسدادة مطاطية",
            "zh": "用橡胶塞塞紧",
            "ku": "bi tipaya lastîkî girtî"
          }
        }
      }
    },
    {
      "id": "u06-twin12",
      "stem": {
        "tr": "Eşit kütlelerde alınan O2 ve SO2 gazları için aşağıdaki yargılardan hangileri doğrudur? (O: 16, S: 32)\nI. O2'nin mol sayısı SO2'nin mol sayısının 2 katıdır.\nII. O2'deki toplam atom sayısının SO2'deki toplam atom sayısına oranı 4/3'tür.\nIII. Aynı sıcaklık ve basınçta O2'nin hacmi SO2'nin hacminin 2 katıdır.",
        "en": "Which of the following statements are correct for equal masses of O2 and SO2 gases? (O: 16, S: 32)\nI. The number of moles of O2 is twice that of SO2.\nII. The ratio of the total number of atoms in O2 to that in SO2 is 4/3.\nIII. At the same temperature and pressure, the volume of O2 is twice that of SO2.",
        "de": "Welche der folgenden Aussagen gelten für gleiche Massen der Gase O2 und SO2? (O: 16, S: 32)\nI. Die Stoffmenge von O2 ist doppelt so groß wie die von SO2.\nII. Das Verhältnis der Gesamtatomzahl in O2 zu der in SO2 beträgt 4/3.\nIII. Bei gleicher Temperatur und gleichem Druck ist das Volumen von O2 doppelt so groß wie das von SO2.",
        "fr": "Lesquelles des affirmations suivantes sont correctes pour des masses égales de O2 et de SO2 gazeux ? (O : 16, S : 32)\nI. La quantité de matière de O2 est le double de celle de SO2.\nII. Le rapport du nombre total d’atomes dans O2 à celui dans SO2 vaut 4/3.\nIII. À la même température et à la même pression, le volume de O2 est le double de celui de SO2.",
        "ru": "Какие из следующих утверждений верны для равных масс газов O2 и SO2? (O: 16, S: 32)\nI. Количество вещества O2 в 2 раза больше, чем SO2.\nII. Отношение общего числа атомов в O2 к общему числу атомов в SO2 равно 4/3.\nIII. При одинаковых температуре и давлении объём O2 в 2 раза больше объёма SO2.",
        "ar": "أي العبارات الآتية صحيحة لكتلتين متساويتين من غازي O2 وSO2؟ (O: 16، S: 32)\nI. عدد مولات O2 ضعف عدد مولات SO2.\nII. نسبة العدد الكلي للذرات في O2 إلى العدد الكلي للذرات في SO2 هي 4/3.\nIII. عند درجة الحرارة والضغط نفسيهما يكون حجم O2 ضعف حجم SO2.",
        "zh": "对于质量相等的 O2 和 SO2 气体，下列说法中哪些正确？(O: 16, S: 32)\nI. O2 的物质的量是 SO2 的 2 倍。\nII. O2 中原子总数与 SO2 中原子总数之比为 4/3。\nIII. 同温同压下，O2 的体积是 SO2 的 2 倍。",
        "ku": "Ji bo gazên O2 û SO2 yên bi girseyên wekhev, kîjan ji van gotinan rast in? (O: 16, S: 32)\nI. Hejmara molên O2 2 qatê hejmara molên SO2 ye.\nII. Rêjeya hejmara giştî ya atomên di O2 de li hember hejmara giştî ya atomên di SO2 de 4/3 e.\nIII. Di heman germahî û zextê de qebareya O2 2 qatê qebareya SO2 ye."
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
      "correctIndex": 4,
      "explanation": {
        "tr": "Her iki gazdan 64 g alınsın: O2 = 64/32 = 2 mol, SO2 = 64/64 = 1 mol. I doğru (2 kat). II doğru: atom sayıları O2'de 2 · 2 = 4 mol, SO2'de 1 · 3 = 3 mol, oran 4/3. III doğru: aynı koşullarda gaz hacmi mol sayısıyla orantılı olduğundan hacim oranı da 2'dir. Eşit kütlenin eşit atom sayısı anlamına geldiğini düşünmek tipik hatadır.",
        "en": "Take 64 g of each gas: O2 = 64/32 = 2 mol, SO2 = 64/64 = 1 mol. I is correct (twice). II is correct: atoms are 2 · 2 = 4 mol in O2 and 1 · 3 = 3 mol in SO2, ratio 4/3. III is correct: under the same conditions gas volume is proportional to moles, so the volume ratio is also 2. Thinking that equal masses mean equal numbers of atoms is a typical error.",
        "de": "Man nehme von jedem Gas 64 g: O2 = 64/32 = 2 mol, SO2 = 64/64 = 1 mol. I ist richtig (doppelt). II ist richtig: Atome in O2 2 · 2 = 4 mol, in SO2 1 · 3 = 3 mol, Verhältnis 4/3. III ist richtig: Unter gleichen Bedingungen ist das Gasvolumen proportional zur Stoffmenge, also ist auch das Volumenverhältnis 2. Gleiche Masse mit gleicher Atomzahl gleichzusetzen ist ein typischer Fehler.",
        "fr": "Prenons 64 g de chaque gaz : O2 = 64/32 = 2 mol, SO2 = 64/64 = 1 mol. I est correcte (le double). II est correcte : les atomes valent 2 · 2 = 4 mol dans O2 et 1 · 3 = 3 mol dans SO2, rapport 4/3. III est correcte : dans les mêmes conditions, le volume d’un gaz est proportionnel à sa quantité de matière, donc le rapport des volumes vaut aussi 2. Croire qu’une même masse signifie un même nombre d’atomes est une erreur typique.",
        "ru": "Возьмём по 64 г каждого газа: O2 = 64/32 = 2 моль, SO2 = 64/64 = 1 моль. I верно (в 2 раза). II верно: атомов в O2 2 · 2 = 4 моль, в SO2 1 · 3 = 3 моль, отношение 4/3. III верно: при одинаковых условиях объём газа пропорционален количеству вещества, поэтому отношение объёмов тоже 2. Считать, что равные массы означают равное число атомов, — типичная ошибка.",
        "ar": "لنأخذ 64 g من كل غاز: O2 = 64/32 = 2 mol وSO2 = 64/64 = 1 mol. I صحيحة (الضعف). II صحيحة: الذرات في O2 هي 2 · 2 = 4 mol وفي SO2 هي 1 · 3 = 3 mol، والنسبة 4/3. III صحيحة: في الظروف نفسها يتناسب حجم الغاز مع عدد مولاته، فنسبة الحجمين 2 أيضًا. والظن بأن تساوي الكتل يعني تساوي عدد الذرات خطأ شائع.",
        "zh": "各取 64 g：O2 = 64/32 = 2 mol，SO2 = 64/64 = 1 mol。I 正确(2 倍)。II 正确：O2 中原子为 2 · 2 = 4 mol，SO2 中为 1 · 3 = 3 mol，比值 4/3。III 正确：同条件下气体体积与物质的量成正比，所以体积比也是 2。认为质量相等就意味着原子数相等是典型错误。",
        "ku": "Bila ji her du gazan 64 g were girtin: O2 = 64/32 = 2 mol, SO2 = 64/64 = 1 mol. I rast e (2 qat). II rast e: hejmara atoman di O2 de 2 · 2 = 4 mol, di SO2 de 1 · 3 = 3 mol e, rêje 4/3 e. III rast e: ji ber ku di heman şertan de qebareya gazê bi hejmara molan re rêjeyî ye, rêjeya qebareyan jî 2 ye. Ramana ku girseya wekhev tê wateya hejmara wekhev a atoman şaşiyeke berbelav e."
      }
    },
    {
      "id": "u06-twin13",
      "stem": {
        "tr": "Doğada iki izotopu bulunan X elementinin izotoplarına ait bilgiler tabloda verilmiştir. X'in ortalama atom kütlesi 63,5 akb'dir. Tablodaki a değeri kaçtır?",
        "en": "The table gives data on the two naturally occurring isotopes of element X. The average atomic mass of X is 63.5 amu. What is the value of a in the table?",
        "de": "Die Tabelle enthält Angaben zu den beiden natürlich vorkommenden Isotopen des Elements X. Die mittlere Atommasse von X beträgt 63,5 u. Welchen Wert hat a in der Tabelle?",
        "fr": "Le tableau donne des informations sur les deux isotopes naturels de l'élément X. La masse atomique moyenne de X est 63,5 u. Quelle est la valeur de a dans le tableau ?",
        "ru": "В таблице приведены данные о двух природных изотопах элемента X. Средняя атомная масса X равна 63,5 а.е.м. Чему равно значение a в таблице?",
        "ar": "يبين الجدول معلومات عن نظيري العنصر X الموجودين في الطبيعة. متوسط الكتلة الذرية لـ X يساوي 63.5 amu. ما قيمة a في الجدول؟",
        "zh": "表中给出了元素 X 的两种天然同位素的数据。X 的平均原子质量为 63.5 u。表中 a 的值是多少？",
        "ku": "Di tabloyê de agahiyên derbarê du îzotopên xwezayî yên elementa X de hatine dayîn. Girseya atomî ya navînî ya X 63,5 akb e. Nirxa a ya di tabloyê de çend e?"
      },
      "options": [
        {
          "tr": "25",
          "en": "25",
          "de": "25",
          "fr": "25",
          "ru": "25",
          "ar": "25",
          "zh": "25",
          "ku": "25"
        },
        {
          "tr": "50",
          "en": "50",
          "de": "50",
          "fr": "50",
          "ru": "50",
          "ar": "50",
          "zh": "50",
          "ku": "50"
        },
        {
          "tr": "60",
          "en": "60",
          "de": "60",
          "fr": "60",
          "ru": "60",
          "ar": "60",
          "zh": "60",
          "ku": "60"
        },
        {
          "tr": "75",
          "en": "75",
          "de": "75",
          "fr": "75",
          "ru": "75",
          "ar": "75",
          "zh": "75",
          "ku": "75"
        },
        {
          "tr": "80",
          "en": "80",
          "de": "80",
          "fr": "80",
          "ru": "80",
          "ar": "80",
          "zh": "80",
          "ku": "80"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Ortalama atom kütlesi, izotop kütlelerinin bolluklarla ağırlıklı ortalamasıdır: 63 · a/100 + 65 · (100 − a)/100 = 63,5 → 6500 − 2a = 6350 → a = 75. Kontrol: 0,75 · 63 + 0,25 · 65 = 47,25 + 16,25 = 63,5 akb. Ortalama hafif izotopa (63) daha yakın olduğundan onun bolluğu %50'den büyük olmalıdır; 25 sonucu yüzdeleri izotoplara ters eşlemekten, 50 ise bollukları eşit sanmaktan gelir (o durumda ortalama 64 akb olurdu).",
        "en": "The average atomic mass is the abundance-weighted mean of the isotope masses: 63 · a/100 + 65 · (100 − a)/100 = 63.5 → 6500 − 2a = 6350 → a = 75. Check: 0.75 · 63 + 0.25 · 65 = 47.25 + 16.25 = 63.5 amu. Since the average is closer to the lighter isotope (63), its abundance must exceed 50%; 25 comes from matching the percentages to the wrong isotopes, and 50 from assuming equal abundances (which would give an average of 64 amu).",
        "de": "Die mittlere Atommasse ist der nach Häufigkeit gewichtete Mittelwert der Isotopenmassen: 63 · a/100 + 65 · (100 − a)/100 = 63,5 → 6500 − 2a = 6350 → a = 75. Probe: 0,75 · 63 + 0,25 · 65 = 47,25 + 16,25 = 63,5 u. Da der Mittelwert näher am leichteren Isotop (63) liegt, muss dessen Häufigkeit über 50 % liegen; 25 entsteht durch Vertauschen der Prozentsätze, 50 durch die Annahme gleicher Häufigkeiten (dann wäre der Mittelwert 64 u).",
        "fr": "La masse atomique moyenne est la moyenne des masses des isotopes pondérée par leurs abondances : 63 · a/100 + 65 · (100 − a)/100 = 63,5 → 6500 − 2a = 6350 → a = 75. Vérification : 0,75 · 63 + 0,25 · 65 = 47,25 + 16,25 = 63,5 u. La moyenne étant plus proche de l'isotope léger (63), son abondance doit dépasser 50 % ; 25 vient d'une inversion des pourcentages, et 50 de l'hypothèse d'abondances égales (la moyenne serait alors 64 u).",
        "ru": "Средняя атомная масса — это средневзвешенное масс изотопов с учётом их распространённости: 63 · a/100 + 65 · (100 − a)/100 = 63,5 → 6500 − 2a = 6350 → a = 75. Проверка: 0,75 · 63 + 0,25 · 65 = 47,25 + 16,25 = 63,5 а.е.м. Поскольку среднее ближе к лёгкому изотопу (63), его доля должна быть больше 50 %; 25 получается, если перепутать проценты изотопов, а 50 — если считать распространённости равными (тогда среднее было бы 64 а.е.м.).",
        "ar": "متوسط الكتلة الذرية هو المتوسط الموزون لكتل النظائر بحسب نسب وجودها: 63 · a/100 + 65 · (100 − a)/100 = 63.5 ← 6500 − 2a = 6350 ← a = 75. التحقق: 0.75 · 63 + 0.25 · 65 = 47.25 + 16.25 = 63.5 amu. وبما أن المتوسط أقرب إلى النظير الأخف (63) فلا بد أن تزيد نسبة وجوده على 50%؛ والناتج 25 يأتي من عكس النسب بين النظيرين، و50 من افتراض تساوي النسب (وعندها يكون المتوسط 64 amu).",
        "zh": "平均原子质量是各同位素质量按丰度的加权平均：63 · a/100 + 65 · (100 − a)/100 = 63.5 → 6500 − 2a = 6350 → a = 75。验算：0.75 · 63 + 0.25 · 65 = 47.25 + 16.25 = 63.5 u。平均值更接近较轻的同位素(63)，所以它的丰度必须大于 50%；25 是把百分比对应反了，50 是误以为丰度相等（那样平均值应为 64 u）。",
        "ku": "Girseya atomî ya navînî navîniya giranîkirî ya girseyên îzotopan e li gorî rêjeyên wan ên xwezayî: 63 · a/100 + 65 · (100 − a)/100 = 63,5 → 6500 − 2a = 6350 → a = 75. Kontrol: 0,75 · 63 + 0,25 · 65 = 47,25 + 16,25 = 63,5 akb. Ji ber ku navînî nêzîkî îzotopa siviktir (63) ye, divê rêjeya wê ji %50 mezintir be; 25 ji berevajîkirina rêjeyan, 50 jî ji texmîna rêjeyên wekhev tê (wê demê navînî 64 akb dibû)."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "İzotop",
            "en": "Isotope",
            "de": "Isotop",
            "fr": "Isotope",
            "ru": "Изотоп",
            "ar": "النظير",
            "zh": "同位素",
            "ku": "Îzotop"
          },
          {
            "tr": "Atom kütlesi (akb)",
            "en": "Atomic mass (amu)",
            "de": "Atommasse (u)",
            "fr": "Masse atomique (u)",
            "ru": "Атомная масса (а.е.м.)",
            "ar": "الكتلة الذرية (amu)",
            "zh": "原子质量 (u)",
            "ku": "Girseya atomî (akb)"
          },
          {
            "tr": "Doğada bulunma (%)",
            "en": "Natural abundance (%)",
            "de": "Natürliche Häufigkeit (%)",
            "fr": "Abondance naturelle (%)",
            "ru": "Распространённость (%)",
            "ar": "نسبة الوجود في الطبيعة (%)",
            "zh": "天然丰度 (%)",
            "ku": "Rêjeya xwezayî (%)"
          }
        ],
        "rows": [
          [
            "⁶³X",
            "63",
            "a"
          ],
          [
            "⁶⁵X",
            "65",
            "100 − a"
          ]
        ]
      }
    },
    {
      "id": "u06-twin14",
      "stem": {
        "tr": "Aşağıdaki örnekler içerdikleri toplam atom sayısına göre büyükten küçüğe nasıl sıralanır? (H: 1, O: 16)\nI. Normal koşullarda 4,48 L CH4 gazı\nII. 0,24 mol NH3\nIII. 2,7 g H2O",
        "en": "How are the following samples ranked from largest to smallest by their total number of atoms? (H: 1, O: 16)\nI. 4.48 L of CH4 gas at STP\nII. 0.24 mol of NH3\nIII. 2.7 g of H2O",
        "de": "Wie lauten die folgenden Proben nach ihrer Gesamtatomzahl von der größten zur kleinsten geordnet? (H: 1, O: 16)\nI. 4,48 L CH4-Gas bei Normbedingungen\nII. 0,24 mol NH3\nIII. 2,7 g H2O",
        "fr": "Comment classer les échantillons suivants du plus grand au plus petit nombre total d’atomes ? (H : 1, O : 16)\nI. 4,48 L de CH4 gazeux aux CNTP\nII. 0,24 mol de NH3\nIII. 2,7 g de H2O",
        "ru": "Как расположить следующие образцы по общему числу атомов от большего к меньшему? (H: 1, O: 16)\nI. 4,48 л газа CH4 при н. у.\nII. 0,24 моль NH3\nIII. 2,7 г H2O",
        "ar": "كيف تُرتَّب العينات الآتية من الأكبر إلى الأصغر حسب العدد الكلي للذرات؟ (H: 1، O: 16)\nI. 4.48 L من غاز CH4 في الظروف القياسية\nII. 0.24 mol من NH3\nIII. 2.7 g من H2O",
        "zh": "下列样品按所含原子总数由多到少如何排列？(H: 1, O: 16)\nI. 标准状况下 4.48 L CH4 气体\nII. 0.24 mol NH3\nIII. 2.7 g H2O",
        "ku": "Nimûneyên jêrîn li gorî hejmara giştî ya atomên ku dihewînin ji mezin ber bi piçûk çawa tên rêzkirin? (H: 1, O: 16)\nI. Di şertên normal de 4,48 L gaza CH4\nII. 0,24 mol NH3\nIII. 2,7 g H2O"
      },
      "options": [
        {
          "tr": "I > II > III",
          "en": "I > II > III",
          "de": "I > II > III",
          "fr": "I > II > III",
          "ru": "I > II > III",
          "ar": "I > II > III",
          "zh": "I > II > III",
          "ku": "I > II > III"
        },
        {
          "tr": "II > I > III",
          "en": "II > I > III",
          "de": "II > I > III",
          "fr": "II > I > III",
          "ru": "II > I > III",
          "ar": "II > I > III",
          "zh": "II > I > III",
          "ku": "II > I > III"
        },
        {
          "tr": "I > III > II",
          "en": "I > III > II",
          "de": "I > III > II",
          "fr": "I > III > II",
          "ru": "I > III > II",
          "ar": "I > III > II",
          "zh": "I > III > II",
          "ku": "I > III > II"
        },
        {
          "tr": "III > I > II",
          "en": "III > I > II",
          "de": "III > I > II",
          "fr": "III > I > II",
          "ru": "III > I > II",
          "ar": "III > I > II",
          "zh": "III > I > II",
          "ku": "III > I > II"
        },
        {
          "tr": "II > III > I",
          "en": "II > III > I",
          "de": "II > III > I",
          "fr": "II > III > I",
          "ru": "II > III > I",
          "ar": "II > III > I",
          "zh": "II > III > I",
          "ku": "II > III > I"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "I: 4,48 / 22,4 = 0,2 mol CH4; her molekülde 5 atom → 1,0 mol atom. II: 0,24 mol NH3 · 4 = 0,96 mol atom. III: 2,7 / 18 = 0,15 mol H2O · 3 = 0,45 mol atom. Sıralama I > II > III. Yalnızca molekül sayıları (0,2; 0,24; 0,15 mol) karşılaştırılırsa II > I > III bulunur; soru atom sayısını sorduğu için bu hatalıdır.",
        "en": "I: 4.48 / 22.4 = 0.2 mol CH4; 5 atoms per molecule → 1.0 mol of atoms. II: 0.24 mol NH3 · 4 = 0.96 mol of atoms. III: 2.7 / 18 = 0.15 mol H2O · 3 = 0.45 mol of atoms. Order: I > II > III. Comparing only the numbers of molecules (0.2; 0.24; 0.15 mol) gives II > I > III, which is wrong because the question asks for atoms.",
        "de": "I: 4,48 / 22,4 = 0,2 mol CH4; 5 Atome pro Molekül → 1,0 mol Atome. II: 0,24 mol NH3 · 4 = 0,96 mol Atome. III: 2,7 / 18 = 0,15 mol H2O · 3 = 0,45 mol Atome. Reihenfolge I > II > III. Vergleicht man nur die Molekülzahlen (0,2; 0,24; 0,15 mol), erhält man II > I > III; das ist falsch, da nach Atomen gefragt ist.",
        "fr": "I : 4,48 / 22,4 = 0,2 mol de CH4 ; 5 atomes par molécule → 1,0 mol d’atomes. II : 0,24 mol de NH3 · 4 = 0,96 mol d’atomes. III : 2,7 / 18 = 0,15 mol de H2O · 3 = 0,45 mol d’atomes. Classement I > II > III. En comparant seulement les nombres de molécules (0,2 ; 0,24 ; 0,15 mol), on obtient II > I > III, ce qui est faux puisque la question porte sur les atomes.",
        "ru": "I: 4,48 / 22,4 = 0,2 моль CH4; 5 атомов в молекуле → 1,0 моль атомов. II: 0,24 моль NH3 · 4 = 0,96 моль атомов. III: 2,7 / 18 = 0,15 моль H2O · 3 = 0,45 моль атомов. Порядок I > II > III. Если сравнивать только числа молекул (0,2; 0,24; 0,15 моль), получится II > I > III — это неверно, так как спрашивается число атомов.",
        "ar": "I: 4.48 / 22.4 = 0.2 mol من CH4، وفي كل جزيء 5 ذرات → 1.0 mol ذرات. II: 0.24 mol من NH3 · 4 = 0.96 mol ذرات. III: 2.7 / 18 = 0.15 mol من H2O · 3 = 0.45 mol ذرات. الترتيب I > II > III. ومقارنة عدد الجزيئات فقط (0.2؛ 0.24؛ 0.15 mol) تعطي II > I > III، وهذا خطأ لأن السؤال عن عدد الذرات.",
        "zh": "I：4.48 / 22.4 = 0.2 mol CH4，每个分子 5 个原子 → 1.0 mol 原子。II：0.24 mol NH3 · 4 = 0.96 mol 原子。III：2.7 / 18 = 0.15 mol H2O · 3 = 0.45 mol 原子。顺序为 I > II > III。若只比较分子数(0.2、0.24、0.15 mol)会得到 II > I > III，但题目问的是原子数，所以错误。",
        "ku": "I: 4,48 / 22,4 = 0,2 mol CH4; di her molekulê de 5 atom → 1,0 mol atom. II: 0,24 mol NH3 · 4 = 0,96 mol atom. III: 2,7 / 18 = 0,15 mol H2O · 3 = 0,45 mol atom. Rêzkirin I > II > III ye. Heke tenê hejmarên molekulan (0,2; 0,24; 0,15 mol) werin berhevdan, II > I > III tê dîtin; ji ber ku pirs hejmara atoman dipirse, ev şaş e."
      }
    },
    {
      "id": "u06-twin15",
      "stem": {
        "tr": "Aynı sıcaklık ve basınçta 2 hacim H2 gazı ile 1 hacim O2 gazı tepkimeye girerek 2 hacim su buharı oluşturmaktadır. Bu gözlemle ilgili aşağıdaki yargılardan hangileri doğrudur?\nI. Tepkimeye giren ve oluşan gazların hacimleri arasında basit tam sayılı bir oran vardır.\nII. Toplam gaz hacmi 3 hacimden 2 hacme azaldığı için kütle korunmamıştır.\nIII. Avogadro hipotezine göre aynı koşullarda gaz hacimleri oranı mol sayıları oranına eşit olduğundan tepkime 2H2 + O2 → 2H2O denklemine uyar.",
        "en": "At the same temperature and pressure, 2 volumes of H2 gas react with 1 volume of O2 gas to form 2 volumes of water vapour. Which of the following statements about this observation are correct?\nI. There is a simple whole-number ratio between the volumes of the reacting and produced gases.\nII. Since the total gas volume decreases from 3 volumes to 2 volumes, mass is not conserved.\nIII. By Avogadro's hypothesis, under the same conditions the ratio of gas volumes equals the ratio of moles, so the reaction fits the equation 2H2 + O2 → 2H2O.",
        "de": "Bei gleicher Temperatur und gleichem Druck reagieren 2 Volumina H2-Gas mit 1 Volumen O2-Gas zu 2 Volumina Wasserdampf. Welche der folgenden Aussagen zu dieser Beobachtung sind richtig?\nI. Zwischen den Volumina der reagierenden und entstehenden Gase besteht ein einfaches ganzzahliges Verhältnis.\nII. Da das Gesamtgasvolumen von 3 auf 2 Volumina abnimmt, bleibt die Masse nicht erhalten.\nIII. Nach der Avogadro-Hypothese ist unter gleichen Bedingungen das Volumenverhältnis gleich dem Stoffmengenverhältnis, daher entspricht die Reaktion der Gleichung 2H2 + O2 → 2H2O.",
        "fr": "À la même température et à la même pression, 2 volumes de H2 gazeux réagissent avec 1 volume de O2 gazeux pour former 2 volumes de vapeur d’eau. Lesquelles des affirmations suivantes sur cette observation sont correctes ?\nI. Il existe un rapport simple de nombres entiers entre les volumes des gaz qui réagissent et des gaz formés.\nII. Comme le volume gazeux total passe de 3 volumes à 2 volumes, la masse n’est pas conservée.\nIII. D’après l’hypothèse d’Avogadro, dans les mêmes conditions le rapport des volumes gazeux est égal au rapport des quantités de matière, donc la réaction correspond à l’équation 2H2 + O2 → 2H2O.",
        "ru": "При одинаковых температуре и давлении 2 объёма газа H2 реагируют с 1 объёмом газа O2, образуя 2 объёма водяного пара. Какие из следующих утверждений об этом наблюдении верны?\nI. Между объёмами вступающих в реакцию и образующихся газов существует простое целочисленное отношение.\nII. Так как общий объём газов уменьшается с 3 до 2 объёмов, масса не сохраняется.\nIII. По гипотезе Авогадро при одинаковых условиях отношение объёмов газов равно отношению их количеств вещества, поэтому реакция соответствует уравнению 2H2 + O2 → 2H2O.",
        "ar": "عند درجة الحرارة والضغط نفسيهما يتفاعل حجمان من غاز H2 مع حجم واحد من غاز O2 فيتكوّن حجمان من بخار الماء. أي العبارات الآتية حول هذه الملاحظة صحيحة؟\nI. توجد نسبة عددية صحيحة بسيطة بين حجوم الغازات المتفاعلة والناتجة.\nII. بما أن الحجم الكلي للغازات نقص من 3 حجوم إلى حجمين فإن الكتلة لم تُحفظ.\nIII. وفق فرضية أفوجادرو تساوي نسبة حجوم الغازات في الظروف نفسها نسبة عدد مولاتها، لذا يوافق التفاعل المعادلة 2H2 + O2 → 2H2O.",
        "zh": "同温同压下，2 体积 H2 与 1 体积 O2 反应生成 2 体积水蒸气。关于这一观察，下列说法中哪些正确？\nI. 参加反应的气体与生成的气体的体积之间存在简单整数比。\nII. 气体总体积由 3 体积减少到 2 体积，所以质量不守恒。\nIII. 根据阿伏加德罗假说，同条件下气体体积比等于物质的量之比，所以该反应符合方程式 2H2 + O2 → 2H2O。",
        "ku": "Di heman germahî û zextê de 2 qebare gaza H2 bi 1 qebare gaza O2 re dikeve reaksiyonê û 2 qebare buhara avê çêdike. Derbarê vê çavdêriyê de kîjan ji van gotinan rast in?\nI. Di navbera qebareyên gazên ku dikevin reaksiyonê û yên ku çêdibin de rêjeyeke bi hejmarên tam ên sade heye.\nII. Ji ber ku qebareya giştî ya gazê ji 3 qebareyan daketiye 2 qebareyan, girse nehatiye parastin.\nIII. Li gorî hîpoteza Avogadro, ji ber ku di heman şertan de rêjeya qebareyên gazan bi rêjeya hejmarên molan re wekhev e, reaksiyon li gorî hevkêşeya 2H2 + O2 → 2H2O ye."
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
        "tr": "I doğru: 2 : 1 : 2 oranı Gay-Lussac'ın birleşen hacimler kanununa örnektir. II yanlış: kütlenin korunumu gaz hacmi için değil kütle için geçerlidir; 4 g H2 + 32 g O2 = 36 g H2O olduğundan kütle korunur, hacmin korunması gerekmez. III doğru: aynı koşullarda eşit hacimler eşit mol içerdiğinden (Avogadro) hacim oranı 2 : 1 : 2 mol oranını, yani denklem katsayılarını verir.",
        "en": "I is correct: the 2 : 1 : 2 ratio is an example of Gay-Lussac's law of combining volumes. II is wrong: conservation applies to mass, not to gas volume; 4 g H2 + 32 g O2 = 36 g H2O, so mass is conserved and volume need not be. III is correct: under the same conditions equal volumes contain equal moles (Avogadro), so the 2 : 1 : 2 volume ratio gives the mole ratio, i.e. the equation coefficients.",
        "de": "I ist richtig: Das Verhältnis 2 : 1 : 2 ist ein Beispiel für das Gesetz der einfachen Volumenverhältnisse von Gay-Lussac. II ist falsch: Erhalten bleibt die Masse, nicht das Gasvolumen; 4 g H2 + 32 g O2 = 36 g H2O, die Masse bleibt also erhalten, das Volumen muss es nicht. III ist richtig: Unter gleichen Bedingungen enthalten gleiche Volumina gleiche Stoffmengen (Avogadro), daher liefert das Volumenverhältnis 2 : 1 : 2 das Stoffmengenverhältnis, also die Koeffizienten der Gleichung.",
        "fr": "I est correcte : le rapport 2 : 1 : 2 illustre la loi des volumes de combinaison de Gay-Lussac. II est fausse : la conservation concerne la masse, pas le volume gazeux ; 4 g de H2 + 32 g de O2 = 36 g de H2O, donc la masse est conservée et le volume n’a pas à l’être. III est correcte : dans les mêmes conditions, des volumes égaux contiennent des quantités de matière égales (Avogadro), donc le rapport de volumes 2 : 1 : 2 donne le rapport molaire, c’est-à-dire les coefficients de l’équation.",
        "ru": "I верно: отношение 2 : 1 : 2 — пример закона объёмных отношений Гей-Люссака. II неверно: сохраняется масса, а не объём газов; 4 г H2 + 32 г O2 = 36 г H2O, масса сохраняется, а объём не обязан. III верно: при одинаковых условиях равные объёмы содержат равные количества вещества (Авогадро), поэтому отношение объёмов 2 : 1 : 2 даёт мольное отношение, то есть коэффициенты уравнения.",
        "ar": "I صحيحة: النسبة 2 : 1 : 2 مثال على قانون جاي-لوساك للحجوم المتحدة. II خاطئة: الحفظ يخص الكتلة لا حجم الغاز؛ 4 g من H2 + 32 g من O2 = 36 g من H2O، فالكتلة محفوظة ولا يلزم حفظ الحجم. III صحيحة: في الظروف نفسها تحتوي الحجوم المتساوية على مولات متساوية (أفوجادرو)، فنسبة الحجوم 2 : 1 : 2 تعطي نسبة المولات أي معاملات المعادلة.",
        "zh": "I 正确：2 : 1 : 2 的比例是盖-吕萨克气体化合体积定律的实例。II 错误：守恒的是质量而不是气体体积；4 g H2 + 32 g O2 = 36 g H2O，质量守恒，体积不必守恒。III 正确：同条件下等体积气体含有相同的物质的量（阿伏加德罗假说），所以体积比 2 : 1 : 2 就是物质的量之比，即方程式的系数。",
        "ku": "I rast e: rêjeya 2 : 1 : 2 mînaka zagona qebareyên yekbûyî ya Gay-Lussac e. II şaş e: zagona parastinê ji bo girseyê derbasdar e, ne ji bo qebareya gazê; ji ber ku 4 g H2 + 32 g O2 = 36 g H2O ye, girse tê parastin û ne mecbûr e qebare were parastin. III rast e: ji ber ku di heman şertan de qebareyên wekhev molên wekhev dihewînin (Avogadro), rêjeya qebareyan 2 : 1 : 2 rêjeya molan, ango hevberên hevkêşeyê dide."
      }
    },
    {
      "id": "u06-twin16",
      "stem": {
        "tr": "Atom kütle birimi (akb) ve mol kütlesiyle ilgili aşağıdaki ifadelerden hangileri doğrudur? (H: 1, O: 16; NA = 6,02x10^23)\nI. Bir tane 12C atomunun kütlesi 12 akb'dir.\nII. 1 mol H2O'nun kütlesi 18 g'dır.\nIII. 1 akb, 6,02x10^23 gramdır.",
        "en": "Which of the following statements about the atomic mass unit (amu) and molar mass are correct? (H: 1, O: 16; NA = 6.02x10^23)\nI. The mass of one 12C atom is 12 amu.\nII. The mass of 1 mole of H2O is 18 g.\nIII. 1 amu is 6.02x10^23 grams.",
        "de": "Welche der folgenden Aussagen zur atomaren Masseneinheit (u) und zur molaren Masse sind richtig? (H: 1, O: 16; NA = 6,02x10^23)\nI. Die Masse eines 12C-Atoms beträgt 12 u.\nII. Die Masse von 1 Mol H2O beträgt 18 g.\nIII. 1 u entspricht 6,02x10^23 Gramm.",
        "fr": "Lesquelles des affirmations suivantes sur l’unité de masse atomique (u) et la masse molaire sont correctes ? (H : 1, O : 16 ; NA = 6,02x10^23)\nI. La masse d’un atome de 12C est 12 u.\nII. La masse de 1 mole de H2O est 18 g.\nIII. 1 u vaut 6,02x10^23 grammes.",
        "ru": "Какие из следующих утверждений об атомной единице массы (а. е. м.) и молярной массе верны? (H: 1, O: 16; NA = 6,02x10^23)\nI. Масса одного атома 12C равна 12 а. е. м.\nII. Масса 1 моль H2O равна 18 г.\nIII. 1 а. е. м. равна 6,02x10^23 граммам.",
        "ar": "أي العبارات الآتية عن وحدة الكتلة الذرية (amu) والكتلة المولية صحيحة؟ (H: 1، O: 16؛ NA = 6.02x10^23)\nI. كتلة ذرة 12C واحدة 12 amu.\nII. كتلة 1 mol من H2O تساوي 18 g.\nIII. 1 amu يساوي 6.02x10^23 g.",
        "zh": "下列关于原子质量单位(u)和摩尔质量的说法中哪些正确？(H: 1, O: 16；NA = 6.02x10^23)\nI. 一个 12C 原子的质量为 12 u。\nII. 1 mol H2O 的质量为 18 g。\nIII. 1 u 等于 6.02x10^23 g。",
        "ku": "Derbarê yekeya girseya atomî (akb) û girseya molî de kîjan ji van gotinan rast in? (H: 1, O: 16; NA = 6,02x10^23)\nI. Girseya atomeke 12C 12 akb e.\nII. Girseya 1 mol H2O 18 g e.\nIII. 1 akb 6,02x10^23 gram e."
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
      "correctIndex": 2,
      "explanation": {
        "tr": "I doğru: akb, 12C atomunun kütlesinin 1/12'si olarak tanımlandığından bir 12C atomu tam 12 akb'dir. II doğru: H2O'nun mol kütlesi 2·1 + 16 = 18 g/mol'dür. III yanlış: 1 akb çok küçük bir kütledir; 1 akb = 1/NA g ≈ 1,66x10^-24 g'dır. Tersine, 6,02x10^23 akb = 1 g'dır.",
        "en": "I is correct: since the amu is defined as 1/12 of the mass of a 12C atom, one 12C atom is exactly 12 amu. II is correct: the molar mass of H2O is 2·1 + 16 = 18 g/mol. III is wrong: 1 amu is a very small mass; 1 amu = 1/NA g ≈ 1.66x10^-24 g. Conversely, 6.02x10^23 amu = 1 g.",
        "de": "I ist richtig: Da u als 1/12 der Masse eines 12C-Atoms definiert ist, hat ein 12C-Atom genau 12 u. II ist richtig: Die molare Masse von H2O ist 2·1 + 16 = 18 g/mol. III ist falsch: 1 u ist eine sehr kleine Masse; 1 u = 1/NA g ≈ 1,66x10^-24 g. Umgekehrt gilt 6,02x10^23 u = 1 g.",
        "fr": "I est correcte : l’unité u étant définie comme 1/12 de la masse d’un atome de 12C, un atome de 12C vaut exactement 12 u. II est correcte : la masse molaire de H2O est 2·1 + 16 = 18 g/mol. III est fausse : 1 u est une masse très petite ; 1 u = 1/NA g ≈ 1,66x10^-24 g. Inversement, 6,02x10^23 u = 1 g.",
        "ru": "I верно: а. е. м. определена как 1/12 массы атома 12C, поэтому один атом 12C имеет массу ровно 12 а. е. м. II верно: молярная масса H2O равна 2·1 + 16 = 18 г/моль. III неверно: 1 а. е. м. — очень малая масса; 1 а. е. м. = 1/NA г ≈ 1,66x10^-24 г. Наоборот, 6,02x10^23 а. е. м. = 1 г.",
        "ar": "I صحيحة: لأن وحدة amu معرَّفة بأنها 1/12 من كتلة ذرة 12C فإن ذرة 12C الواحدة كتلتها 12 amu تمامًا. II صحيحة: الكتلة المولية لـ H2O هي 2·1 + 16 = 18 g/mol. III خاطئة: 1 amu كتلة صغيرة جدًا، 1 amu = 1/NA g ≈ 1.66x10^-24 g. وعلى العكس فإن 6.02x10^23 amu = 1 g.",
        "zh": "I 正确：u 定义为一个 12C 原子质量的 1/12，所以一个 12C 原子恰好是 12 u。II 正确：H2O 的摩尔质量为 2·1 + 16 = 18 g/mol。III 错误：1 u 是极小的质量，1 u = 1/NA g ≈ 1.66x10^-24 g；反过来，6.02x10^23 u = 1 g。",
        "ku": "I rast e: ji ber ku akb wekî 1/12-ê girseya atoma 12C hatiye pênasekirin, atomeke 12C tam 12 akb e. II rast e: girseya molî ya H2O 2·1 + 16 = 18 g/mol e. III şaş e: 1 akb girseyeke pir piçûk e; 1 akb = 1/NA g ≈ 1,66x10^-24 g. Berevajî vê, 6,02x10^23 akb = 1 g e."
      }
    }
  ]
};

export default unit06;
