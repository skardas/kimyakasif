import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit11: ChemistryUnitSeedData = {
  "id": "u11",
  "order": 11,
  "exam": "AYT",
  "grade": 11,
  "title": {
    "tr": "Modern Atom Teorisi",
    "en": "Modern Atomic Theory",
    "de": "Moderne Atomtheorie",
    "fr": "Théorie Atomique Moderne",
    "ru": "Современная теория атома",
    "ar": "النظرية الذرية الحديثة",
    "zh": "现代原子论",
    "ku": "Teoriya Nûjen a Atomê"
  },
  "subtitle": {
    "tr": "Kuantum Sayıları, Aufbau ve Elektron Dizilimleri",
    "en": "Quantum Numbers & Electron Configurations",
    "de": "Quantenzahlen, Aufbau und Elektronenkonfigurationen",
    "fr": "Nombres quantiques, Aufbau et configurations électroniques",
    "ru": "Квантовые числа, принцип наименьшей энергии и электронные конфигурации",
    "ar": "أعداد الكم ومبدأ أوفباو والتوزيعات الإلكترونية",
    "zh": "量子数、构造原理与电子排布",
    "ku": "Hejmarên Kuantumê, Aufbau û Rêzkirina Elektronan"
  },
  "facts": [
    {
      "id": "u11-f01",
      "fact": {
        "tr": "Baş kuantum sayısı (n), elektronun çekirdeğe olan ortalama uzaklığını ve temel enerji düzeyini belirtir (n = 1, 2, 3...).",
        "en": "The principal quantum number (n) indicates the average distance of the electron from the nucleus and its principal energy level (n = 1, 2, 3...).",
        "de": "Die Hauptquantenzahl (n) gibt den durchschnittlichen Abstand des Elektrons vom Kern und sein Hauptenergieniveau an (n = 1, 2, 3...).",
        "fr": "Le nombre quantique principal (n) indique la distance moyenne de l'électron au noyau et son niveau d'énergie principal (n = 1, 2, 3...).",
        "ru": "Главное квантовое число (n) характеризует энергетический уровень электрона и его среднее удаление от ядра (n = 1, 2, 3...).",
        "ar": "يدل عدد الكم الرئيس (n) على متوسط بعد الإلكترون عن النواة وعلى مستوى الطاقة الرئيس (n = 1، 2، 3...).",
        "zh": "主量子数(n)表示电子所处的能层及其离核的平均距离(n = 1, 2, 3...)。",
        "ku": "Hejmara kuantumê ya sereke (n) dûrahiya navîn a elektronê ji navokê û asta enerjiyê ya sereke nîşan dide (n = 1, 2, 3...)."
      },
      "trap": {
        "tr": "Baş kuantum sayısı orbitalin uzaydaki yönelimini belirtir.",
        "en": "The principal quantum number specifies the orientation of the orbital in space.",
        "de": "Die Hauptquantenzahl gibt die Orientierung des Orbitals im Raum an.",
        "fr": "Le nombre quantique principal spécifie l'orientation de l'orbitale dans l'espace.",
        "ru": "Главное квантовое число определяет ориентацию орбитали в пространстве.",
        "ar": "يحدد عدد الكم الرئيس اتجاه المدار في الفراغ.",
        "zh": "主量子数决定轨道在空间的取向。",
        "ku": "Hejmara kuantumê ya sereke arasteya orbîtalê ya di fezayê de diyar dike."
      },
      "whyTrapIsFalse": {
        "tr": "Orbitalin uzaydaki yönelimini manyetik kuantum sayısı (ml) belirtir; n ise yalnızca enerji düzeyini (katmanı) ve elektronun çekirdeğe ortalama uzaklığını gösterir.",
        "en": "The orientation of an orbital in space is given by the magnetic quantum number (ml); n only gives the energy level (shell) and the electron's average distance from the nucleus.",
        "de": "Die räumliche Ausrichtung eines Orbitals gibt die magnetische Quantenzahl (ml) an; n gibt nur das Energieniveau (die Schale) und den mittleren Abstand des Elektrons vom Kern an.",
        "fr": "L'orientation d'une orbitale dans l'espace est donnée par le nombre quantique magnétique (ml) ; n indique seulement le niveau d'énergie (la couche) et la distance moyenne de l'électron au noyau.",
        "ru": "Ориентацию орбитали в пространстве задаёт магнитное квантовое число (ml); n характеризует только энергетический уровень (электронный слой) и среднее удаление электрона от ядра.",
        "ar": "يحدد عدد الكم المغناطيسي (ml) اتجاه المدار في الفراغ؛ أما n فيدل فقط على مستوى الطاقة (الغلاف) ومتوسط بعد الإلكترون عن النواة.",
        "zh": "轨道在空间中的取向由磁量子数(ml)决定；n 只表示能层（电子层）以及电子与原子核的平均距离。",
        "ku": "Arasteya orbîtalê ya di fezayê de bi hejmara kuantumê ya magnetîk (ml) tê diyarkirin; n tenê asta enerjiyê (qatê) û dûrahiya navîn a elektronê ji navokê nîşan dide."
      }
    },
    {
      "id": "u11-f02",
      "fact": {
        "tr": "Açısal momentum kuantum sayısı (l), orbitalin türünü ve şeklini belirtir (l = 0 s, l = 1 p, l = 2 d, l = 3 f).",
        "en": "The angular momentum quantum number (l) specifies the type and shape of the orbital (l = 0 s, l = 1 p, l = 2 d, l = 3 f).",
        "de": "Die Drehimpulsquantenzahl (l) gibt Art und Form des Orbitals an (l = 0 s, l = 1 p, l = 2 d, l = 3 f).",
        "fr": "Le nombre quantique du moment cinétique (l) spécifie le type et la forme de l'orbitale (l = 0 s, l = 1 p, l = 2 d, l = 3 f).",
        "ru": "Орбитальное квантовое число (l) определяет тип и форму орбитали (l = 0 — s, l = 1 — p, l = 2 — d, l = 3 — f).",
        "ar": "يحدد عدد الكم الثانوي (l)، أي عدد كم الزخم الزاوي، نوع المدار وشكله (l = 0 s، l = 1 p، l = 2 d، l = 3 f).",
        "zh": "角量子数(l)决定轨道的类型和形状(l = 0 为 s，l = 1 为 p，l = 2 为 d，l = 3 为 f)。",
        "ku": "Hejmara kuantumê ya momenta goşeyî (l) cure û şiklê orbîtalê diyar dike (l = 0 s, l = 1 p, l = 2 d, l = 3 f)."
      },
      "trap": {
        "tr": "l = 2 açısal momentum sayısı p orbitalini temsil eder.",
        "en": "The angular momentum number l = 2 represents the p orbital.",
        "de": "Die Drehimpulszahl l = 2 repräsentiert das p-Orbital.",
        "fr": "Le nombre de moment cinétique l = 2 représente l'orbitale p.",
        "ru": "Орбитальному квантовому числу l = 2 соответствует p-орбиталь.",
        "ar": "قيمة عدد الكم الثانوي l = 2 تمثل المدار p.",
        "zh": "角量子数 l = 2 表示 p 轨道。",
        "ku": "Hejmara momenta goşeyî l = 2 orbîtala p nîşan dide."
      },
      "whyTrapIsFalse": {
        "tr": "p orbitali l = 1 ile gösterilir; l = 2 d orbitaline karşılık gelir. Sıralama l = 0, 1, 2, 3 için s, p, d, f şeklindedir.",
        "en": "The p orbital corresponds to l = 1; l = 2 corresponds to the d orbital. The order for l = 0, 1, 2, 3 is s, p, d, f.",
        "de": "Das p-Orbital entspricht l = 1; l = 2 entspricht dem d-Orbital. Für l = 0, 1, 2, 3 lautet die Reihenfolge s, p, d, f.",
        "fr": "L'orbitale p correspond à l = 1 ; l = 2 correspond à l'orbitale d. Pour l = 0, 1, 2, 3, l'ordre est s, p, d, f.",
        "ru": "p-орбитали соответствует l = 1, а l = 2 соответствует d-орбиталь. Значениям l = 0, 1, 2, 3 отвечают по порядку s, p, d, f.",
        "ar": "يقابل المدار p القيمة l = 1، أما l = 2 فيقابل المدار d. الترتيب للقيم l = 0، 1، 2، 3 هو s، p، d، f.",
        "zh": "p 轨道对应 l = 1；l = 2 对应 d 轨道。l = 0、1、2、3 依次对应 s、p、d、f。",
        "ku": "Orbîtala p bi l = 1 tê nîşandan; l = 2 li hember orbîtala d ye. Ji bo l = 0, 1, 2, 3 rêz s, p, d, f ye."
      }
    },
    {
      "id": "u11-f03",
      "fact": {
        "tr": "Manyetik kuantum sayısı (ml), orbitalin uzaydaki yönelimini belirtir ve -l ile +l arasındaki tamsayı değerlerini alır.",
        "en": "The magnetic quantum number (ml) indicates the orientation of the orbital in space and takes integer values between -l and +l.",
        "de": "Die magnetische Quantenzahl (ml) gibt die Orientierung des Orbitals im Raum an und nimmt ganzzahlige Werte zwischen -l und +l an.",
        "fr": "Le nombre quantique magnétique (ml) indique l'orientation de l'orbitale dans l'espace et prend des valeurs entières comprises entre -l et +l.",
        "ru": "Магнитное квантовое число (ml) характеризует ориентацию орбитали в пространстве и принимает целые значения от -l до +l.",
        "ar": "يدل عدد الكم المغناطيسي (ml) على اتجاه المدار في الفراغ، ويأخذ قيمًا صحيحة من -l إلى +l.",
        "zh": "磁量子数(ml)表示轨道在空间中的取向，取 -l 到 +l 之间的整数。",
        "ku": "Hejmara kuantumê ya magnetîk (ml) arasteya orbîtalê ya di fezayê de nîşan dide û nirxên tam ên di navbera -l û +l de digire."
      },
      "trap": {
        "tr": "d orbitalleri için ml sadece -1, 0, +1 değerlerini alır.",
        "en": "For d orbitals ml only takes the values -1, 0, +1.",
        "de": "Für d-Orbitale nimmt ml nur die Werte -1, 0, +1 an.",
        "fr": "Pour les orbitales d, ml ne prend que les valeurs -1, 0, +1.",
        "ru": "Для d-орбиталей ml принимает только значения -1, 0, +1.",
        "ar": "في مدارات d يأخذ ml القيم -1 و0 و+1 فقط.",
        "zh": "d 轨道的 ml 只能取 -1、0、+1。",
        "ku": "Ji bo orbîtalên d, ml tenê nirxên -1, 0, +1 digire."
      },
      "whyTrapIsFalse": {
        "tr": "-1, 0, +1 değerleri l = 1 olan p orbitallerine aittir. d orbitallerinde l = 2 olduğundan ml = -2, -1, 0, +1, +2 olmak üzere 5 değer alır.",
        "en": "The values -1, 0, +1 belong to the p orbitals (l = 1). For d orbitals l = 2, so ml takes five values: -2, -1, 0, +1, +2.",
        "de": "Die Werte -1, 0, +1 gehören zu den p-Orbitalen (l = 1). Bei d-Orbitalen ist l = 2, daher nimmt ml fünf Werte an: -2, -1, 0, +1, +2.",
        "fr": "Les valeurs -1, 0, +1 appartiennent aux orbitales p (l = 1). Pour les orbitales d, l = 2, donc ml prend cinq valeurs : -2, -1, 0, +1, +2.",
        "ru": "Значения -1, 0, +1 относятся к p-орбиталям (l = 1). Для d-орбиталей l = 2, поэтому ml принимает пять значений: -2, -1, 0, +1, +2.",
        "ar": "القيم -1 و0 و+1 تخص مدارات p (l = 1). أما في مدارات d فإن l = 2، لذا يأخذ ml خمس قيم: -2، -1، 0، +1، +2.",
        "zh": "-1、0、+1 是 p 轨道(l = 1) 的取值。d 轨道的 l = 2，因此 ml 有 -2、-1、0、+1、+2 五个取值。",
        "ku": "Nirxên -1, 0, +1 yên orbîtalên p (l = 1) ne. Di orbîtalên d de l = 2 ye, loma ml pênc nirxan digire: -2, -1, 0, +1, +2."
      }
    },
    {
      "id": "u11-f04",
      "fact": {
        "tr": "Spin kuantum sayısı (ms), elektronun spin yönünü gösterir ve +1/2 veya -1/2 değerini alır; spin klasik bir dönme değil, elektronun kuantum özelliğidir.",
        "en": "The spin quantum number (ms) shows the direction of the electron's spin and takes the value +1/2 or -1/2; spin is a quantum property of the electron, not a literal rotation.",
        "de": "Die Spinquantenzahl (ms) gibt die Richtung des Elektronenspins an und nimmt den Wert +1/2 oder -1/2 an; der Spin ist eine Quanteneigenschaft des Elektrons, keine klassische Drehung.",
        "fr": "Le nombre quantique de spin (ms) indique le sens du spin de l'électron et vaut +1/2 ou -1/2 ; le spin est une propriété quantique de l'électron, pas une rotation au sens classique.",
        "ru": "Спиновое квантовое число (ms) характеризует направление спина электрона и принимает значения +1/2 или -1/2; спин — квантовое свойство электрона, а не вращение в классическом смысле.",
        "ar": "يدل عدد الكم المغزلي (ms) على اتجاه مغزل (سبين) الإلكترون ويأخذ القيمة +1/2 أو -1/2؛ والمغزل خاصية كمية للإلكترون وليس دورانًا بالمعنى التقليدي.",
        "zh": "自旋量子数(ms) 表示电子自旋的方向，取值 +1/2 或 -1/2；自旋是电子的量子性质，并非经典意义上的自转。",
        "ku": "Hejmara kuantumê ya spinê (ms) arasteya spina elektronê nîşan dide û nirxa +1/2 an -1/2 digire; spin ne zivirîneke klasîk e, taybetmendiyeke kuantumî ya elektronê ye."
      },
      "trap": {
        "tr": "Bir orbitalde aynı spinli iki elektron bulunabilir.",
        "en": "An orbital can contain two electrons with the same spin.",
        "de": "Ein Orbital kann zwei Elektronen mit demselben Spin enthalten.",
        "fr": "Une orbitale peut contenir deux électrons de même spin.",
        "ru": "На одной орбитали могут находиться два электрона с одинаковыми спинами.",
        "ar": "يمكن أن يحوي المدار الواحد إلكترونين لهما المغزل نفسه.",
        "zh": "一个轨道中可以容纳两个自旋相同的电子。",
        "ku": "Di orbîtalekê de du elektronên bi heman spinê dikarin hebin."
      },
      "whyTrapIsFalse": {
        "tr": "Aynı orbitaldeki iki elektronun n, l ve ml değerleri zaten aynıdır; spinleri de aynı olsaydı dört kuantum sayısı özdeş olurdu. Pauli ilkesi buna izin vermediği için elektronlar zıt spinli olmak zorundadır.",
        "en": "Two electrons in the same orbital already share n, l and ml; if their spins were also equal, all four quantum numbers would be identical. The Pauli principle forbids this, so the electrons must have opposite spins.",
        "de": "Zwei Elektronen im selben Orbital haben bereits gleiche n, l und ml; wäre auch ihr Spin gleich, wären alle vier Quantenzahlen identisch. Das Pauli-Prinzip verbietet dies, daher müssen sie entgegengesetzten Spin haben.",
        "fr": "Deux électrons d'une même orbitale ont déjà les mêmes n, l et ml ; si leurs spins étaient aussi égaux, les quatre nombres quantiques seraient identiques. Le principe de Pauli l'interdit, donc leurs spins doivent être opposés.",
        "ru": "У двух электронов одной орбитали значения n, l и ml и так совпадают; если бы совпадали и спины, все четыре квантовых числа были бы одинаковыми. Принцип Паули это запрещает, поэтому спины электронов должны быть противоположными.",
        "ar": "الإلكترونان في المدار نفسه لهما بالفعل القيم نفسها لـ n وl وml؛ ولو تساوى مغزلاهما أيضًا لتطابقت أعداد الكم الأربعة. ولأن مبدأ باولي لا يسمح بذلك يجب أن يكون مغزلاهما متعاكسين.",
        "zh": "同一轨道中的两个电子 n、l、ml 已经相同；如果自旋也相同，四个量子数就完全相同。泡利原理不允许这种情况，因此它们必须自旋相反。",
        "ku": "Nirxên n, l û ml yên du elektronên di heman orbîtalê de jixwe wekhev in; heke spinên wan jî wekhev bûna, her çar hejmarên kuantumê dê yek bûna. Prensîba Pauli destûrê nade vê yekê, loma divê spinên wan berevajî bin."
      }
    },
    {
      "id": "u11-f05",
      "fact": {
        "tr": "Pauli Dışlama İlkesi: Bir atomda hiçbir iki elektronun 4 kuantum sayısının dördü de aynı olamaz.",
        "en": "Pauli Exclusion Principle: No two electrons in an atom can have the same four quantum numbers.",
        "de": "Pauli-Ausschlussprinzip: Keine zwei Elektronen in einem Atom können die gleichen vier Quantenzahlen haben.",
        "fr": "Principe d'exclusion de Pauli : Deux électrons dans un atome ne peuvent pas avoir les mêmes quatre nombres quantiques.",
        "ru": "Принцип Паули: в атоме не может быть двух электронов, у которых все четыре квантовых числа одинаковы.",
        "ar": "مبدأ الاستبعاد لباولي: لا يمكن أن يتساوى إلكترونان في ذرة واحدة في أعداد الكم الأربعة جميعها.",
        "zh": "泡利不相容原理：在同一原子中，不可能有两个电子的四个量子数完全相同。",
        "ku": "Prensîba dûrxistinê ya Pauli: Di atomekê de her çar hejmarên kuantumê yên du elektronan nikarin wekhev bin."
      },
      "trap": {
        "tr": "Pauli ilkesine göre bir orbitale zıt spinli 3 elektron yerleşebilir.",
        "en": "According to the Pauli principle, three electrons with opposite spins can occupy an orbital.",
        "de": "Nach dem Pauli-Prinzip können drei Elektronen mit entgegengesetztem Spin ein Orbital besetzen.",
        "fr": "Selon le principe de Pauli, trois électrons de spins opposés peuvent occuper une orbitale.",
        "ru": "Согласно принципу Паули, на одной орбитали могут находиться три электрона с противоположными спинами.",
        "ar": "وفق مبدأ باولي يمكن أن يشغل المدار الواحد 3 إلكترونات متعاكسة المغزل.",
        "zh": "根据泡利原理，一个轨道可以容纳 3 个自旋相反的电子。",
        "ku": "Li gorî prensîba Pauli, sê elektronên bi spinên berevajî dikarin di orbîtalekê de bi cih bibin."
      },
      "whyTrapIsFalse": {
        "tr": "ms yalnızca +1/2 ve -1/2 olmak üzere iki değer alabildiğinden bir orbitalde en fazla iki elektron bulunur; üçüncü elektron, öncekilerden birinin dört kuantum sayısını tekrarlamak zorunda kalırdı.",
        "en": "Since ms can only be +1/2 or -1/2, an orbital holds at most two electrons; a third electron would have to repeat all four quantum numbers of one of the others.",
        "de": "Da ms nur +1/2 oder -1/2 sein kann, fasst ein Orbital höchstens zwei Elektronen; ein drittes Elektron müsste alle vier Quantenzahlen eines anderen wiederholen.",
        "fr": "Comme ms ne peut valoir que +1/2 ou -1/2, une orbitale contient au plus deux électrons ; un troisième électron devrait répéter les quatre nombres quantiques de l'un des autres.",
        "ru": "Поскольку ms принимает только два значения, +1/2 и -1/2, на орбитали может находиться не более двух электронов; третий электрон неизбежно повторил бы все четыре квантовых числа одного из первых двух.",
        "ar": "لأن ms لا يأخذ إلا القيمتين +1/2 و-1/2، يتسع المدار لإلكترونين على الأكثر؛ فالإلكترون الثالث سيضطر إلى تكرار أعداد الكم الأربعة لأحد الإلكترونين الآخرين.",
        "zh": "ms 只能取 +1/2 或 -1/2，所以一个轨道最多容纳两个电子；第三个电子必然与其中一个电子的四个量子数完全相同。",
        "ku": "Ji ber ku ms tenê dikare +1/2 an -1/2 be, orbîtalek herî zêde du elektronan digire; elektrona sêyem dê neçar bimaya ku her çar hejmarên kuantumê yên yekê ji yên din dubare bike."
      }
    },
    {
      "id": "u11-f06",
      "fact": {
        "tr": "Aufbau Kuralı: Elektronlar orbitallere enerjisi en düşük olan orbitalden başlayarak doldurulur (n + l kuralı).",
        "en": "Aufbau Rule: Electrons are filled into orbitals starting from the orbital with the lowest energy (n + l rule).",
        "de": "Aufbauregel: Elektronen werden in Orbitale gefüllt, beginnend mit dem Orbital mit der niedrigsten Energie (n + l-Regel).",
        "fr": "Règle d'Aufbau : les électrons sont remplis dans des orbitales en commençant par l'orbitale ayant la plus faible énergie (règle n + l).",
        "ru": "Принцип наименьшей энергии (правило Клечковского): электроны заполняют орбитали в порядке возрастания их энергии, начиная с самой низкой (правило n + l).",
        "ar": "قاعدة أوفباو: تُملأ المدارات بالإلكترونات بدءًا من المدار الأقل طاقة (قاعدة n + l).",
        "zh": "构造原理：电子从能量最低的轨道开始依次填入各轨道(n + l 规则)。",
        "ku": "Qaîdeya Aufbau: Elektron ji orbîtala bi enerjiya herî nizm dest pê dikin û li orbîtalan bi cih dibin (qaîdeya n + l)."
      },
      "trap": {
        "tr": "Aufbau kuralına göre 3d orbitali daima 4s orbitalinden önce doldurulur.",
        "en": "According to the Aufbau rule, the 3d orbital is always filled before the 4s orbital.",
        "de": "Nach der Aufbau-Regel wird das 3d-Orbital immer vor dem 4s-Orbital gefüllt.",
        "fr": "Selon la règle d'Aufbau, l'orbitale 3d est toujours remplie avant l'orbitale 4s.",
        "ru": "Согласно принципу наименьшей энергии, 3d-орбитали всегда заполняются раньше 4s-орбитали.",
        "ar": "وفق قاعدة أوفباو يمتلئ المدار 3d دائمًا قبل المدار 4s.",
        "zh": "根据构造原理，3d 轨道总是先于 4s 轨道填充。",
        "ku": "Li gorî qaîdeya Aufbau, orbîtala 3d her tim berî orbîtala 4s tê dagirtin."
      },
      "whyTrapIsFalse": {
        "tr": "4s'in n + l değeri 4, 3d'ninki 5'tir. n + l değeri küçük olan orbital daha düşük enerjili olduğundan önce 4s, sonra 3d doldurulur.",
        "en": "4s has n + l = 4 while 3d has n + l = 5. The orbital with the smaller n + l is lower in energy, so 4s is filled first and then 3d.",
        "de": "4s hat n + l = 4, 3d dagegen n + l = 5. Das Orbital mit kleinerem n + l ist energieärmer, daher wird zuerst 4s und dann 3d besetzt.",
        "fr": "4s a n + l = 4 alors que 3d a n + l = 5. L'orbitale de plus petit n + l est plus basse en énergie : 4s se remplit d'abord, puis 3d.",
        "ru": "У 4s сумма n + l = 4, у 3d — 5. Орбиталь с меньшей суммой n + l имеет меньшую энергию, поэтому сначала заполняется 4s, а затем 3d.",
        "ar": "قيمة n + l للمدار 4s تساوي 4 وللمدار 3d تساوي 5. المدار ذو القيمة الأصغر أقل طاقة، لذا يمتلئ 4s أولًا ثم 3d.",
        "zh": "4s 的 n + l = 4，3d 的 n + l = 5。n + l 较小的轨道能量较低，所以先填 4s，再填 3d。",
        "ku": "Nirxa n + l ya 4s 4 e, ya 3d 5 e. Enerjiya orbîtala ku nirxa wê ya n + l piçûktir e nizmtir e, loma pêşî 4s, paşê 3d tê dagirtin."
      }
    },
    {
      "id": "u11-f07",
      "fact": {
        "tr": "Hund Kuralı: Eş enerjili orbitallere elektronlar önce aynı spinle birer birer yerleştirilir.",
        "en": "Hund's Rule: Electrons are first placed into orbitals of equal energy, one by one, with the same spin.",
        "de": "Hundsche Regel: Elektronen werden zunächst nacheinander in Orbitale mit gleicher Energie und demselben Spin gebracht.",
        "fr": "Règle de Hund : les électrons sont d'abord placés sur des orbitales d'énergie égale, un par un, avec le même spin.",
        "ru": "Правило Хунда: орбитали одинаковой энергии электроны сначала заполняют по одному, с одинаковыми (параллельными) спинами.",
        "ar": "قاعدة هوند: توزَّع الإلكترونات على المدارات المتساوية الطاقة فرادى أولًا وبالمغزل نفسه.",
        "zh": "洪特规则：电子填入能量相同的轨道时，总是先以相同的自旋分别单独占据不同轨道。",
        "ku": "Qaîdeya Hund: Elektron pêşî yek bi yek û bi heman spinê li orbîtalên xwedî heman enerjiyê bi cih dibin."
      },
      "trap": {
        "tr": "Elektronlar eş enerjili orbitallere önce zıt spinle çiftler halinde girer.",
        "en": "Electrons first enter orbitals of equal energy in pairs with opposite spin.",
        "de": "Elektronen treten zunächst paarweise mit entgegengesetztem Spin in Orbitale gleicher Energie ein.",
        "fr": "Les électrons entrent d’abord dans des orbitales d’énergie égale par paires de spin opposé.",
        "ru": "Орбитали одинаковой энергии электроны сначала заполняют парами с противоположными спинами.",
        "ar": "تدخل الإلكترونات المدارات المتساوية الطاقة أولًا على شكل أزواج متعاكسة المغزل.",
        "zh": "电子进入能量相同的轨道时，先以相反自旋成对进入。",
        "ku": "Elektron pêşî bi cotan û bi spinên berevajî dikevin orbîtalên xwedî heman enerjiyê."
      },
      "whyTrapIsFalse": {
        "tr": "Elektronlar birbirini iter; eş enerjili orbitallerde önce ayrı orbitallere paralel spinle yerleşmek daha düşük enerjili bir düzendir. Eşleşme ancak her orbitalde birer elektron olduktan sonra başlar.",
        "en": "Electrons repel each other; in degenerate orbitals, occupying separate orbitals with parallel spins first is the lower-energy arrangement. Pairing starts only after each orbital has one electron.",
        "de": "Elektronen stoßen sich ab; in entarteten Orbitalen ist es energetisch günstiger, zuerst getrennte Orbitale mit parallelem Spin zu besetzen. Die Paarung beginnt erst, wenn jedes Orbital ein Elektron hat.",
        "fr": "Les électrons se repoussent ; dans des orbitales dégénérées, occuper d'abord des orbitales séparées avec des spins parallèles est l'arrangement de plus basse énergie. L'appariement ne commence que lorsque chaque orbitale a un électron.",
        "ru": "Электроны отталкиваются друг от друга; на орбиталях одинаковой энергии энергетически выгоднее сначала занять разные орбитали с параллельными спинами. Спаривание начинается только после того, как на каждой орбитали окажется по одному электрону.",
        "ar": "تتنافر الإلكترونات فيما بينها؛ ففي المدارات المتساوية الطاقة يكون توزيعها أولًا في مدارات منفصلة بمغازل متوازية هو الترتيب الأقل طاقة. ولا يبدأ الازدواج إلا بعد أن يحوي كل مدار إلكترونًا واحدًا.",
        "zh": "电子之间相互排斥；在能量相同的轨道中，先以平行自旋分占不同轨道能量更低。只有每个轨道都有一个电子后才开始成对。",
        "ku": "Elektron hev du dehf didin; di orbîtalên xwedî heman enerjiyê de, bicihbûna pêşî li orbîtalên cuda bi spinên paralel rêzbûna bi enerjiya nizmtir e. Cotbûn tenê piştî ku di her orbîtalê de elektronek hebe dest pê dike."
      }
    },
    {
      "id": "u11-f08",
      "fact": {
        "tr": "24Cr ([Ar] 4s1 3d5) ve 29Cu ([Ar] 4s1 3d10) elektron dizilimleri küresel simetri kararlılığı nedeniyle özel durumlardır.",
        "en": "The 24Cr ([Ar] 4s1 3d5) and 29Cu ([Ar] 4s1 3d10) electron configurations are special cases due to spherical symmetry stability.",
        "de": "Die Elektronenkonfigurationen 24Cr ([Ar] 4s1 3d5) und 29Cu ([Ar] 4s1 3d10) sind aufgrund der sphärischen Symmetriestabilität Sonderfälle.",
        "fr": "Les configurations électroniques 24Cr ([Ar] 4s1 3d5) et 29Cu ([Ar] 4s1 3d10) sont des cas particuliers en raison de la stabilité de la symétrie sphérique.",
        "ru": "Электронные конфигурации 24Cr ([Ar] 4s1 3d5) и 29Cu ([Ar] 4s1 3d10) — особые случаи, обусловленные устойчивостью сферически симметричных конфигураций.",
        "ar": "يُعدّ التوزيعان الإلكترونيان لـ 24Cr ([Ar] 4s1 3d5) و29Cu ([Ar] 4s1 3d10) حالتين خاصتين بسبب استقرار التناظر الكروي.",
        "zh": "由于球形对称带来的稳定性，24Cr ([Ar] 4s1 3d5) 和 29Cu ([Ar] 4s1 3d10) 的电子排布属于特殊情况。",
        "ku": "Rêzkirina elektronan a 24Cr ([Ar] 4s1 3d5) û 29Cu ([Ar] 4s1 3d10) ji ber aramiya sîmetriya gewherî rewşên taybet in."
      },
      "trap": {
        "tr": "Temel hâldeki 24Cr atomunun elektron dizilimi [Ar] 4s2 3d4 şeklindedir.",
        "en": "The ground-state electron configuration of the 24Cr atom is [Ar] 4s2 3d4.",
        "de": "Die Elektronenkonfiguration des 24Cr-Atoms im Grundzustand lautet [Ar] 4s2 3d4.",
        "fr": "La configuration électronique de l'atome 24Cr à l'état fondamental est [Ar] 4s2 3d4.",
        "ru": "Электронная конфигурация атома 24Cr в основном состоянии — [Ar] 4s2 3d4.",
        "ar": "التوزيع الإلكتروني لذرة 24Cr في الحالة الأرضية هو [Ar] 4s2 3d4.",
        "zh": "基态 24Cr 原子的电子排布为 [Ar] 4s2 3d4。",
        "ku": "Rêzkirina elektronan a atoma 24Cr di rewşa bingehîn de [Ar] 4s2 3d4 e."
      },
      "whyTrapIsFalse": {
        "tr": "4s2 3d4, Aufbau sırasının mekanik uygulamasıdır. Bir 4s elektronunun 3d'ye geçmesiyle oluşan yarı dolu 3d5 düzeni daha kararlı olduğundan Cr'nin gerçek dizilimi [Ar] 4s1 3d5'tir.",
        "en": "4s2 3d4 is a mechanical application of the Aufbau order. Moving one 4s electron into 3d gives a more stable half-filled 3d5 arrangement, so the actual configuration of Cr is [Ar] 4s1 3d5.",
        "de": "4s2 3d4 ist eine mechanische Anwendung der Aufbau-Reihenfolge. Wechselt ein 4s-Elektron in das 3d, entsteht die stabilere halbbesetzte 3d5-Anordnung; daher ist die tatsächliche Konfiguration von Cr [Ar] 4s1 3d5.",
        "fr": "4s2 3d4 est une application mécanique de l'ordre d'Aufbau. Le passage d'un électron 4s vers 3d donne l'arrangement 3d5 à moitié rempli, plus stable ; la configuration réelle du Cr est donc [Ar] 4s1 3d5.",
        "ru": "4s2 3d4 — результат механического применения порядка заполнения. При переходе одного 4s-электрона на 3d-подуровень образуется более устойчивая наполовину заполненная конфигурация 3d5, поэтому реальная конфигурация Cr — [Ar] 4s1 3d5.",
        "ar": "التوزيع 4s2 3d4 تطبيق آلي لترتيب أوفباو. انتقال إلكترون من 4s إلى 3d يعطي ترتيب 3d5 نصف الممتلئ الأكثر استقرارًا، لذا فالتوزيع الحقيقي للكروم هو [Ar] 4s1 3d5.",
        "zh": "4s2 3d4 只是机械套用构造原理的顺序。一个 4s 电子进入 3d 后形成更稳定的半充满 3d5，因此 Cr 的实际排布是 [Ar] 4s1 3d5。",
        "ku": "4s2 3d4 sepandina mekanîkî ya rêza Aufbau ye. Bi derbasbûna elektronekê ji 4s bo 3d, rêzbûna nîvtijî ya 3d5 ya aramtir çêdibe; loma rêzkirina rastîn a Cr [Ar] 4s1 3d5 e."
      }
    },
    {
      "id": "u11-f09",
      "fact": {
        "tr": "Geçiş metalleri (d bloğu) katyon oluştururken elektronu önce en dış katmandaki s orbitalinden verir (örn. Fe: 4s2 3d6 -> Fe2+: 3d6).",
        "en": "While transition metals (d block) form cations, they first donate the electron from the s orbital in the outermost layer (e.g. Fe: 4s2 3d6 -> Fe2+: 3d6).",
        "de": "Während Übergangsmetalle (d-Block) Kationen bilden, geben sie zunächst das Elektron aus dem s-Orbital in der äußersten Schicht ab (z. B. Fe: 4s2 3d6 -> Fe2+: 3d6).",
        "fr": "Alors que les métaux de transition (bloc d) forment des cations, ils donnent d'abord l'électron de l'orbitale s dans la couche la plus externe (par exemple Fe : 4s2 3d6 -> Fe2+ : 3d6).",
        "ru": "При образовании катионов переходные металлы (d-элементы) сначала отдают электроны с s-орбитали внешнего уровня (например, Fe: 4s2 3d6 -> Fe2+: 3d6).",
        "ar": "عندما تكوّن الفلزات الانتقالية (عناصر الفئة d) أيونات موجبة تفقد أولًا إلكترونات مدار s في الغلاف الخارجي (مثل Fe: 4s2 3d6 -> Fe2+: 3d6).",
        "zh": "过渡金属(d 区)形成阳离子时，先失去最外层 s 轨道上的电子(例如 Fe: 4s2 3d6 -> Fe2+: 3d6)。",
        "ku": "Metalên veguhêz (bloka d) dema katyon çêdikin, pêşî elektronê ji orbîtala s ya qata herî derve didin (mînak Fe: 4s2 3d6 -> Fe2+: 3d6)."
      },
      "trap": {
        "tr": "Fe atomu iyonlaşırken elektron önce 3d orbitalinden kopar.",
        "en": "While the Fe atom is ionized, the electron first breaks away from the 3d orbital.",
        "de": "Während das Fe-Atom ionisiert wird, löst sich zunächst das Elektron aus dem 3d-Orbital.",
        "fr": "Pendant que l’atome de Fe est ionisé, l’électron se détache d’abord de l’orbitale 3d.",
        "ru": "При ионизации атома Fe электрон сначала отрывается с 3d-орбитали.",
        "ar": "عند تأين ذرة Fe يُنزع الإلكترون أولًا من المدار 3d.",
        "zh": "Fe 原子电离时，电子先从 3d 轨道失去。",
        "ku": "Dema atoma Fe îyonîze dibe, elektron pêşî ji orbîtala 3d diqete."
      },
      "whyTrapIsFalse": {
        "tr": "Elektronlar dolma sırasının tersine göre değil, en dış katmandan (n'si en büyük olan) koparılır. 4s elektronları 3d'ye göre çekirdekten daha uzakta olduğundan önce onlar ayrılır: Fe2+ = [Ar] 3d6.",
        "en": "Electrons are not removed in reverse filling order but from the outermost shell (largest n). The 4s electrons are farther from the nucleus than 3d, so they leave first: Fe2+ = [Ar] 3d6.",
        "de": "Elektronen werden nicht in umgekehrter Besetzungsreihenfolge entfernt, sondern aus der äußersten Schale (größtes n). Die 4s-Elektronen sind weiter vom Kern entfernt als 3d und gehen zuerst: Fe2+ = [Ar] 3d6.",
        "fr": "Les électrons ne sont pas retirés dans l'ordre inverse du remplissage, mais depuis la couche la plus externe (plus grand n). Les électrons 4s sont plus éloignés du noyau que les 3d et partent en premier : Fe2+ = [Ar] 3d6.",
        "ru": "Электроны отрываются не в порядке, обратном заполнению, а с внешнего уровня (с наибольшим n). 4s-электроны находятся дальше от ядра, чем 3d-электроны, поэтому отрываются первыми: Fe2+ = [Ar] 3d6.",
        "ar": "لا تُنزع الإلكترونات بعكس ترتيب الامتلاء، بل من الغلاف الأبعد (أكبر n). إلكترونات 4s أبعد عن النواة من إلكترونات 3d فتُنزع أولًا: Fe2+ = [Ar] 3d6.",
        "zh": "电子不是按填充顺序的逆序失去，而是先从最外层(n 最大)失去。4s 电子比 3d 电子离核更远，所以先失去：Fe2+ = [Ar] 3d6。",
        "ku": "Elektron ne li gorî berevajiya rêza dagirtinê, lê ji qata herî derve (ya ku n-ya wê herî mezin e) têne qetandin. Elektronên 4s ji yên 3d ji navokê dûrtir in, loma pêşî ew diqetin: Fe2+ = [Ar] 3d6."
      }
    },
    {
      "id": "u11-f10",
      "fact": {
        "tr": "2. ve 3. periyottaki A grubu elementlerinde birinci iyonlaşma enerjisi \"3 aşağı 5 yukarı\" kuralına göre sıralanır: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.",
        "en": "For main-group (A) elements of periods 2 and 3, the first ionization energy follows the order 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A (3A falls below 2A, and 6A falls below 5A).",
        "de": "Bei den Hauptgruppenelementen (A) der Perioden 2 und 3 folgt die erste Ionisierungsenergie der Reihenfolge 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A (3A liegt unter 2A und 6A unter 5A).",
        "fr": "Pour les éléments des groupes principaux (A) des périodes 2 et 3, la première énergie d'ionisation suit l'ordre 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A (3A passe sous 2A et 6A sous 5A).",
        "ru": "У элементов A-групп 2-го и 3-го периодов первая энергия ионизации возрастает в порядке 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A (у 3A она ниже, чем у 2A, а у 6A — ниже, чем у 5A).",
        "ar": "في عناصر المجموعات الرئيسية (A) في الدورتين الثانية والثالثة تترتب طاقة التأين الأولى هكذا: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A (تنخفض 3A عن 2A وتنخفض 6A عن 5A).",
        "zh": "第 2、3 周期主族(A) 元素的第一电离能顺序为 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A (3A 低于 2A，6A 低于 5A)。",
        "ku": "Di elementên koma A yên periyoda 2. û 3. de enerjiya îyonîzasyonê ya yekem bi vê rêzê ye: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A (3A dikeve binê 2A, 6A jî dikeve binê 5A)."
      },
      "trap": {
        "tr": "2. ve 3. periyotta 3A grubu elementinin birinci iyonlaşma enerjisi, aynı periyottaki 2A grubu elementininkinden büyüktür.",
        "en": "In periods 2 and 3, the first ionization energy of the group 3A element is greater than that of the group 2A element in the same period.",
        "de": "In den Perioden 2 und 3 ist die erste Ionisierungsenergie des Elements der Gruppe 3A größer als die des Elements der Gruppe 2A derselben Periode.",
        "fr": "Dans les périodes 2 et 3, la première énergie d'ionisation de l'élément du groupe 3A est supérieure à celle de l'élément du groupe 2A de la même période.",
        "ru": "Во 2-м и 3-м периодах первая энергия ионизации элемента группы 3A больше, чем у элемента группы 2A того же периода.",
        "ar": "في الدورتين الثانية والثالثة تكون طاقة التأين الأولى لعنصر المجموعة 3A أكبر من طاقة تأين عنصر المجموعة 2A في الدورة نفسها.",
        "zh": "在第 2、3 周期中，3A 族元素的第一电离能大于同周期 2A 族元素。",
        "ku": "Di periyoda 2. û 3. de enerjiya îyonîzasyonê ya yekem a elementa koma 3A ji ya elementa koma 2A ya heman periyodê mezintir e."
      },
      "whyTrapIsFalse": {
        "tr": "2A'nın değerlik elektronları tam dolu ns2 alt kabuğundadır; 3A'nın tek np elektronu daha yüksek enerjili olduğundan daha kolay koparılır. Bu yüzden 2. ve 3. periyotta 3A'nın iyonlaşma enerjisi 2A'dan küçüktür.",
        "en": "The valence electrons of group 2A are in a filled ns2 sublevel, while the single np electron of 3A is higher in energy and easier to remove. So in periods 2 and 3 the ionization energy of 3A is smaller than that of 2A.",
        "de": "Die Valenzelektronen der Gruppe 2A befinden sich in einem vollbesetzten ns2-Unterniveau; das einzelne np-Elektron von 3A ist energiereicher und leichter abzutrennen. Daher ist in den Perioden 2 und 3 die Ionisierungsenergie von 3A kleiner als die von 2A.",
        "fr": "Les électrons de valence du groupe 2A sont dans une sous-couche ns2 complète, tandis que l'unique électron np du 3A est plus haut en énergie et plus facile à arracher. Ainsi, dans les périodes 2 et 3, l'énergie d'ionisation de 3A est inférieure à celle de 2A.",
        "ru": "Валентные электроны элементов группы 2A находятся на полностью заполненном подуровне ns2, а единственный np-электрон элемента группы 3A имеет более высокую энергию и отрывается легче. Поэтому во 2-м и 3-м периодах энергия ионизации у 3A меньше, чем у 2A.",
        "ar": "تقع إلكترونات تكافؤ المجموعة 2A في مستوى فرعي ns2 ممتلئ، بينما إلكترون np الوحيد في 3A أعلى طاقة وأسهل نزعًا. لذلك تكون طاقة تأين 3A في الدورتين الثانية والثالثة أصغر من طاقة تأين 2A.",
        "zh": "2A 族的价电子位于全充满的 ns2 亚层，而 3A 族唯一的 np 电子能量更高、更容易失去。因此在第 2、3 周期中 3A 族的电离能小于 2A 族。",
        "ku": "Elektronên valansê yên koma 2A di binqata ns2 ya tamtijî de ne; enerjiya elektrona np ya yekane ya 3A bilindtir e û hêsantir diqete. Loma di periyoda 2. û 3. de enerjiya îyonîzasyonê ya 3A ji ya 2A piçûktir e."
      }
    },
    {
      "id": "u11-f11",
      "fact": {
        "tr": "s orbitalleri küresel simetriktir ve her enerji düzeyinde 1 tane s orbitali bulunur (en çok 2 elektron alır).",
        "en": "s orbitals are spherically symmetric; each energy level has one s orbital (holding at most 2 electrons).",
        "de": "s-Orbitale sind kugelsymmetrisch; jedes Energieniveau hat ein s-Orbital (mit höchstens 2 Elektronen).",
        "fr": "Les orbitales s sont à symétrie sphérique ; chaque niveau d'énergie possède une orbitale s (contenant au plus 2 électrons).",
        "ru": "s-орбитали сферически симметричны; на каждом энергетическом уровне есть одна s-орбиталь (она вмещает не более 2 электронов).",
        "ar": "مدارات s متناظرة كرويًا، ويوجد في كل مستوى طاقة مدار s واحد (يتسع لإلكترونين على الأكثر).",
        "zh": "s 轨道呈球形对称，每个能层有 1 个 s 轨道(最多容纳 2 个电子)。",
        "ku": "Orbîtalên s xwedî sîmetriya gewherî ne; di her asta enerjiyê de 1 orbîtala s heye (herî zêde 2 elektronan digire)."
      },
      "trap": {
        "tr": "s orbitalleri sadece n = 2'den itibaren başlar.",
        "en": "s orbitals start only from n = 2.",
        "de": "s-Orbitale beginnen erst ab n = 2.",
        "fr": "Les orbitales s commencent uniquement à partir de n = 2.",
        "ru": "s-орбитали появляются только начиная с n = 2.",
        "ar": "لا تبدأ مدارات s إلا من n = 2.",
        "zh": "s 轨道从 n = 2 才开始出现。",
        "ku": "Orbîtalên s tenê ji n = 2 û pê ve dest pê dikin."
      },
      "whyTrapIsFalse": {
        "tr": "Her enerji düzeyinde l = 0 değeri mümkün olduğundan s orbitali n = 1'den itibaren bulunur (1s). n = 2'den başlayan orbital türü p'dir.",
        "en": "Since l = 0 is allowed in every energy level, s orbitals exist from n = 1 onward (1s). It is the p orbitals that start at n = 2.",
        "de": "Da l = 0 in jedem Energieniveau erlaubt ist, gibt es s-Orbitale ab n = 1 (1s). Erst die p-Orbitale beginnen bei n = 2.",
        "fr": "Comme l = 0 est permis à chaque niveau d'énergie, les orbitales s existent dès n = 1 (1s). Ce sont les orbitales p qui commencent à n = 2.",
        "ru": "Значение l = 0 возможно на любом энергетическом уровне, поэтому s-орбитали есть уже при n = 1 (1s). Начиная с n = 2 появляются p-орбитали.",
        "ar": "لأن القيمة l = 0 ممكنة في كل مستوى طاقة، توجد مدارات s بدءًا من n = 1 (1s). أما المدارات التي تبدأ من n = 2 فهي مدارات p.",
        "zh": "每个能层都允许 l = 0，所以从 n = 1 起就有 s 轨道(1s)。从 n = 2 开始出现的是 p 轨道。",
        "ku": "Ji ber ku l = 0 di her asta enerjiyê de gengaz e, orbîtala s ji n = 1 û pê ve heye (1s). Yên ku ji n = 2 dest pê dikin orbîtalên p ne."
      }
    },
    {
      "id": "u11-f12",
      "fact": {
        "tr": "p orbitalleri n = 2'den başlar, halter şeklindedir ve 3 tanedir (px, py, pz, en çok 6 elektron).",
        "en": "p orbitals start from n = 2, are dumbbell-shaped and consist of 3 (px, py, pz, maximum 6 electrons).",
        "de": "p-Orbitale beginnen bei n = 2, sind hantelförmig und bestehen aus 3 (px, py, pz, maximal 6 Elektronen).",
        "fr": "Les orbitales p partent de n = 2, sont en forme d'haltère et se composent de 3 (px, py, pz, maximum 6 électrons).",
        "ru": "p-орбитали появляются начиная с n = 2 и имеют форму гантели; их три (px, py, pz), и они вмещают не более 6 электронов.",
        "ar": "تبدأ مدارات p من n = 2، وهي على شكل دمبل (ثقّالة)، وعددها 3 (px، py، pz) وتتسع لـ 6 إلكترونات على الأكثر.",
        "zh": "p 轨道从 n = 2 开始出现，呈哑铃形，共 3 个(px、py、pz，最多容纳 6 个电子)。",
        "ku": "Orbîtalên p ji n = 2 dest pê dikin, bi şiklê halterê ne û 3 heb in (px, py, pz; herî zêde 6 elektron)."
      },
      "trap": {
        "tr": "1. temel enerji düzeyinde 3 adet p orbitali bulunur.",
        "en": "There are 3 p orbitals in the 1st fundamental energy level.",
        "de": "Im 1. Grundenergieniveau gibt es 3 p-Orbitale.",
        "fr": "Il y a 3 orbitales p dans le 1er niveau d'énergie fondamentale.",
        "ru": "На первом энергетическом уровне есть три p-орбитали.",
        "ar": "يوجد في مستوى الطاقة الرئيس الأول 3 مدارات p.",
        "zh": "第一能层有 3 个 p 轨道。",
        "ku": "Di asta enerjiyê ya sereke ya 1. de 3 orbîtalên p hene."
      },
      "whyTrapIsFalse": {
        "tr": "n = 1 için l yalnızca 0 olabilir; bu yüzden 1. enerji düzeyinde sadece 1s orbitali vardır. p orbitalleri (l = 1) ancak n = 2'den itibaren bulunur.",
        "en": "For n = 1, l can only be 0, so the first energy level contains only the 1s orbital. p orbitals (l = 1) appear only from n = 2 onward.",
        "de": "Für n = 1 kann l nur 0 sein, daher enthält das erste Energieniveau nur das 1s-Orbital. p-Orbitale (l = 1) gibt es erst ab n = 2.",
        "fr": "Pour n = 1, l ne peut valoir que 0 : le premier niveau ne contient que l'orbitale 1s. Les orbitales p (l = 1) n'apparaissent qu'à partir de n = 2.",
        "ru": "При n = 1 l может быть только 0, поэтому на первом уровне есть лишь 1s-орбиталь. p-орбитали (l = 1) появляются только начиная с n = 2.",
        "ar": "عندما n = 1 لا يمكن أن تكون l إلا 0، لذا لا يحوي مستوى الطاقة الأول إلا المدار 1s. ولا تظهر مدارات p (l = 1) إلا بدءًا من n = 2.",
        "zh": "n = 1 时 l 只能为 0，所以第一能层只有 1s 轨道。p 轨道(l = 1) 从 n = 2 才开始出现。",
        "ku": "Ji bo n = 1, l tenê dikare 0 be; loma di asta enerjiyê ya 1. de tenê orbîtala 1s heye. Orbîtalên p (l = 1) tenê ji n = 2 û pê ve hene."
      }
    },
    {
      "id": "u11-f13",
      "fact": {
        "tr": "d orbitalleri n = 3'ten başlar, 5 tanedir ve en çok 10 elektron alır.",
        "en": "d orbitals start from n = 3, there are 5 and can take up to 10 electrons.",
        "de": "d-Orbitale beginnen bei n = 3, es gibt 5 und können bis zu 10 Elektronen aufnehmen.",
        "fr": "Les orbitales d partent de n = 3, il y en a 5 et peuvent prendre jusqu'à 10 électrons.",
        "ru": "d-орбитали появляются начиная с n = 3; их пять, и они вмещают не более 10 электронов.",
        "ar": "تبدأ مدارات d من n = 3، وعددها 5، وتتسع لـ 10 إلكترونات على الأكثر.",
        "zh": "d 轨道从 n = 3 开始，共有 5 个，最多可容纳 10 个电子。",
        "ku": "Orbîtalên d ji n = 3 dest pê dikin, 5 heb in û herî zêde 10 elektronan digirin."
      },
      "trap": {
        "tr": "d orbitalleri 4. temel enerji düzeyinden itibaren başlar.",
        "en": "d orbitals start from the 4th fundamental energy level.",
        "de": "d-Orbitale beginnen auf dem 4. Grundenergieniveau.",
        "fr": "Les orbitales d partent du 4ème niveau d’énergie fondamental.",
        "ru": "d-орбитали появляются начиная с 4-го энергетического уровня.",
        "ar": "تبدأ مدارات d من مستوى الطاقة الرئيس الرابع.",
        "zh": "d 轨道从第四能层才开始出现。",
        "ku": "Orbîtalên d ji asta enerjiyê ya sereke ya 4. dest pê dikin."
      },
      "whyTrapIsFalse": {
        "tr": "l = 2 değeri n ≥ 3 için mümkündür, bu yüzden ilk d orbitalleri 3d'dir. 4. düzeyden başlayan f orbitalleridir; 3d'nin 4s'ten sonra dolması d'nin 3. düzeyde bulunduğu gerçeğini değiştirmez.",
        "en": "l = 2 is allowed for n ≥ 3, so the first d orbitals are 3d. It is the f orbitals that start at level 4; the fact that 3d fills after 4s does not change that d orbitals exist in level 3.",
        "de": "l = 2 ist für n ≥ 3 erlaubt, daher sind die ersten d-Orbitale 3d. Bei Niveau 4 beginnen die f-Orbitale; dass 3d nach 4s besetzt wird, ändert nichts daran, dass es d-Orbitale schon im Niveau 3 gibt.",
        "fr": "l = 2 est permis pour n ≥ 3, donc les premières orbitales d sont les 3d. Ce sont les orbitales f qui commencent au niveau 4 ; le fait que 3d se remplisse après 4s ne change pas l'existence des orbitales d au niveau 3.",
        "ru": "Значение l = 2 возможно при n ≥ 3, поэтому первые d-орбитали — 3d. С 4-го уровня появляются f-орбитали; то, что 3d заполняется после 4s, не отменяет того, что d-орбитали есть уже на 3-м уровне.",
        "ar": "القيمة l = 2 ممكنة عندما n ≥ 3، لذا فأول مدارات d هي 3d. أما التي تبدأ من المستوى الرابع فهي مدارات f؛ وامتلاء 3d بعد 4s لا يغيّر وجود مدارات d في المستوى الثالث.",
        "zh": "n ≥ 3 时才允许 l = 2，所以最早的 d 轨道是 3d。从第 4 能层开始的是 f 轨道；3d 在 4s 之后填充并不改变第 3 能层就有 d 轨道这一事实。",
        "ku": "l = 2 ji bo n ≥ 3 gengaz e, loma orbîtalên d yên pêşîn 3d ne. Yên ku ji asta 4. dest pê dikin orbîtalên f ne; dagirtina 3d piştî 4s vê rastiyê naguherîne ku orbîtalên d di asta 3. de hene."
      }
    },
    {
      "id": "u11-f14",
      "fact": {
        "tr": "f orbitalleri n = 4'ten başlar, 7 tanedir ve en çok 14 elektron alır.",
        "en": "f orbitals start from n = 4, there are 7 in number and can take up to 14 electrons.",
        "de": "f-Orbitale beginnen bei n = 4, es gibt 7 an der Zahl und können bis zu 14 Elektronen aufnehmen.",
        "fr": "Les orbitales f partent de n = 4, elles sont au nombre de 7 et peuvent prendre jusqu'à 14 électrons.",
        "ru": "f-орбитали появляются начиная с n = 4; их семь, и они вмещают не более 14 электронов.",
        "ar": "تبدأ مدارات f من n = 4، وعددها 7، وتتسع لـ 14 إلكترونًا على الأكثر.",
        "zh": "f 轨道从 n = 4 开始，共有 7 个，最多可容纳 14 个电子。",
        "ku": "Orbîtalên f ji n = 4 dest pê dikin, 7 heb in û herî zêde 14 elektronan digirin."
      },
      "trap": {
        "tr": "f orbitallerinde en çok 10 elektron bulunabilir.",
        "en": "There can be a maximum of 10 electrons in f orbitals.",
        "de": "In f-Orbitalen können sich maximal 10 Elektronen befinden.",
        "fr": "Il peut y avoir un maximum de 10 électrons dans les orbitales f.",
        "ru": "На f-орбиталях может находиться не более 10 электронов.",
        "ar": "تتسع مدارات f لـ 10 إلكترونات على الأكثر.",
        "zh": "f 轨道中最多可以有 10 个电子。",
        "ku": "Di orbîtalên f de herî zêde 10 elektron dikarin hebin."
      },
      "whyTrapIsFalse": {
        "tr": "10 elektron, 5 orbitalli d alt kabuğunun kapasitesidir. f alt kabuğunda 7 orbital (ml = -3 ... +3) bulunduğundan en çok 7 × 2 = 14 elektron alır.",
        "en": "10 electrons is the capacity of the d sublevel with 5 orbitals. The f sublevel has 7 orbitals (ml = -3 ... +3), so it holds at most 7 × 2 = 14 electrons.",
        "de": "10 Elektronen sind die Kapazität des d-Unterniveaus mit 5 Orbitalen. Das f-Unterniveau hat 7 Orbitale (ml = -3 ... +3) und fasst daher höchstens 7 × 2 = 14 Elektronen.",
        "fr": "10 électrons est la capacité de la sous-couche d à 5 orbitales. La sous-couche f possède 7 orbitales (ml = -3 ... +3) et contient donc au plus 7 × 2 = 14 électrons.",
        "ru": "10 электронов — ёмкость d-подуровня из 5 орбиталей. На f-подуровне 7 орбиталей (ml = -3 ... +3), поэтому он вмещает не более 7 × 2 = 14 электронов.",
        "ar": "10 إلكترونات هي سعة المستوى الفرعي d ذي المدارات الخمسة. أما المستوى الفرعي f ففيه 7 مدارات (ml = -3 ... +3)، فيتسع لـ 7 × 2 = 14 إلكترونًا على الأكثر.",
        "zh": "10 个电子是含 5 个轨道的 d 亚层的容量。f 亚层有 7 个轨道(ml = -3 … +3)，最多容纳 7 × 2 = 14 个电子。",
        "ku": "10 elektron kapasîteya binqata d ya bi 5 orbîtalan e. Di binqata f de 7 orbîtal (ml = -3 ... +3) hene, loma herî zêde 7 × 2 = 14 elektronan digire."
      }
    },
    {
      "id": "u11-f15",
      "fact": {
        "tr": "Son alt kabuğu yarı dolu veya tam dolu olan (s1, s2, p3, p6, d5, d10 ile biten) elektron dizilimleri küresel simetriktir.",
        "en": "Electron configurations whose outermost sublevel is half-filled or completely filled (ending in s1, s2, p3, p6, d5 or d10) are spherically symmetric.",
        "de": "Elektronenkonfigurationen, deren äußerstes Unterniveau halb- oder vollbesetzt ist (Endung s1, s2, p3, p6, d5 oder d10), sind kugelsymmetrisch.",
        "fr": "Les configurations électroniques dont la dernière sous-couche est à moitié ou entièrement remplie (se terminant par s1, s2, p3, p6, d5 ou d10) sont à symétrie sphérique.",
        "ru": "Электронные конфигурации, в которых валентный подуровень заполнен наполовину или полностью (оканчиваются на s1, s2, p3, p6, d5, d10), сферически симметричны.",
        "ar": "التوزيعات الإلكترونية التي يكون مستواها الفرعي الأخير نصف ممتلئ أو ممتلئًا تمامًا (تنتهي بـ s1 أو s2 أو p3 أو p6 أو d5 أو d10) متناظرة كرويًا.",
        "zh": "价层亚层半充满或全充满(以 s1、s2、p3、p6、d5 或 d10 结尾)的电子排布呈球形对称。",
        "ku": "Rêzkirinên elektronan ên ku binqata wan a valansê nîvtijî an tamtijî ye (bi s1, s2, p3, p6, d5 an d10 diqedin) xwedî sîmetriya gewherî ne."
      },
      "trap": {
        "tr": "p4 ile biten elektron dizilimi küresel simetriktir.",
        "en": "The electron configuration ending in p4 is spherically symmetric.",
        "de": "Die Elektronenkonfiguration, die mit p4 endet, ist sphärisch symmetrisch.",
        "fr": "La configuration électronique se terminant par p4 est à symétrie sphérique.",
        "ru": "Электронная конфигурация, оканчивающаяся на p4, сферически симметрична.",
        "ar": "التوزيع الإلكتروني المنتهي بـ p4 متناظر كرويًا.",
        "zh": "以 p4 结尾的电子排布是球形对称的。",
        "ku": "Rêzkirina elektronan a ku bi p4 diqede xwedî sîmetriya gewherî ye."
      },
      "whyTrapIsFalse": {
        "tr": "Küresel simetri için p alt kabuğunun yarı dolu (p3) ya da tam dolu (p6) olması gerekir. p4'te bir orbital çift, ikisi tek elektronlu olduğundan elektron dağılımı simetrik değildir.",
        "en": "Spherical symmetry requires a half-filled (p3) or completely filled (p6) p sublevel. In p4 one orbital is paired and two are singly occupied, so the electron distribution is not symmetric.",
        "de": "Kugelsymmetrie erfordert ein halbbesetztes (p3) oder vollbesetztes (p6) p-Unterniveau. Bei p4 ist ein Orbital doppelt und zwei sind einfach besetzt, die Verteilung ist also nicht symmetrisch.",
        "fr": "La symétrie sphérique exige une sous-couche p à moitié remplie (p3) ou complète (p6). En p4, une orbitale est doublement occupée et deux le sont simplement : la distribution n'est pas symétrique.",
        "ru": "Для сферической симметрии p-подуровень должен быть заполнен наполовину (p3) или полностью (p6). При p4 одна орбиталь занята парой, а две — одиночными электронами, поэтому распределение несимметрично.",
        "ar": "يتطلب التناظر الكروي أن يكون المستوى الفرعي p نصف ممتلئ (p3) أو ممتلئًا تمامًا (p6). في p4 يحوي مدار واحد زوجًا ومداران إلكترونًا مفردًا، فلا يكون التوزيع متناظرًا.",
        "zh": "球形对称要求 p 亚层半充满(p3) 或全充满(p6)。p4 中一个轨道成对、两个轨道各有一个电子，电子分布不对称。",
        "ku": "Ji bo sîmetriya gewherî divê binqata p nîvtijî (p3) an tamtijî (p6) be. Di p4 de orbîtalek cot e û di duyên din de yek elektron heye, loma belavbûna elektronan ne sîmetrîk e."
      }
    },
    {
      "id": "u11-f16",
      "fact": {
        "tr": "İzoelektronik taneciklerde proton sayısı büyük olanın elektron başına düşen çekim kuvveti daha büyüktür ve yarıçapı küçüktür.",
        "en": "In isoelectronic particles, the one with the larger number of protons has a greater attractive force per electron and a smaller radius.",
        "de": "Bei isoelektronischen Teilchen hat dasjenige mit der größeren Anzahl an Protonen eine größere Anziehungskraft pro Elektron und einen kleineren Radius.",
        "fr": "Dans les particules isoélectroniques, celle qui possède le plus grand nombre de protons a une plus grande force d’attraction par électron et un rayon plus petit.",
        "ru": "Из изоэлектронных частиц у той, в ядре которой больше протонов, притяжение в расчёте на один электрон сильнее, а радиус меньше.",
        "ar": "في الدقائق المتساوية الإلكترونات يكون للدقيقة ذات العدد الأكبر من البروتونات جذب أكبر لكل إلكترون ونصف قطر أصغر.",
        "zh": "在等电子粒子中，质子数较多的粒子对每个电子的吸引力较大，半径较小。",
        "ku": "Di perçeyên îzoelektronîk de, hêza kişandinê ya ku li ser her elektronekê dikeve li cem ya ku hejmara protonên wê mezintir e mezintir e û nîvçapa wê piçûktir e."
      },
      "trap": {
        "tr": "İzoelektronik katyon ve anyonların yarıçapları birbirine tam eşittir.",
        "en": "The radii of isoelectronic cations and anions are exactly equal.",
        "de": "Die Radien isoelektronischer Kationen und Anionen sind genau gleich.",
        "fr": "Les rayons des cations isoélectroniques et des anions sont exactement égaux.",
        "ru": "Радиусы изоэлектронных катионов и анионов в точности равны.",
        "ar": "أنصاف أقطار الأيونات الموجبة والسالبة المتساوية الإلكترونات متساوية تمامًا.",
        "zh": "互为等电子体的阳离子和阴离子半径完全相等。",
        "ku": "Nîvçapên katyon û anyonên îzoelektronîk tam wekhev in."
      },
      "whyTrapIsFalse": {
        "tr": "Elektron sayıları aynı olsa da proton sayıları farklıdır. Proton sayısı büyük olan elektronları daha güçlü çeker; bu yüzden örneğin Mg2+ < Na+ < F- < O2- şeklinde yarıçap anyona doğru artar.",
        "en": "Although the electron counts are equal, the proton counts differ. The species with more protons pulls its electrons more strongly, so the radius increases toward the anion, e.g. Mg2+ < Na+ < F- < O2-.",
        "de": "Die Elektronenzahlen sind gleich, die Protonenzahlen aber verschieden. Das Teilchen mit mehr Protonen zieht seine Elektronen stärker an, daher nimmt der Radius zum Anion hin zu, z. B. Mg2+ < Na+ < F- < O2-.",
        "fr": "Les nombres d'électrons sont égaux, mais pas les nombres de protons. L'espèce qui a le plus de protons attire plus fortement ses électrons ; le rayon augmente donc vers l'anion, par ex. Mg2+ < Na+ < F- < O2-.",
        "ru": "Число электронов у них одинаково, но число протонов разное. Частица с бо́льшим числом протонов сильнее притягивает электроны, поэтому радиус увеличивается в сторону аниона, например Mg2+ < Na+ < F- < O2-.",
        "ar": "عدد الإلكترونات متساوٍ لكن عدد البروتونات مختلف. الدقيقة ذات البروتونات الأكثر تجذب إلكتروناتها بقوة أكبر، لذا يزداد نصف القطر باتجاه الأيون السالب، مثل Mg2+ < Na+ < F- < O2-.",
        "zh": "电子数相同，但质子数不同。质子数多的粒子对电子吸引更强，因此半径向阴离子方向增大，例如 Mg2+ < Na+ < F- < O2-。",
        "ku": "Hejmara elektronan wekhev be jî, hejmara protonan cuda ye. Ya ku protonên wê zêdetir in elektronan bihêztir dikişîne; loma nîvçap ber bi anyonê ve mezin dibe, mînak Mg2+ < Na+ < F- < O2-."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u11-c01",
      "conceptA": {
        "tr": "Aufbau İlkesi",
        "en": "Aufbau Principle",
        "de": "Aufbauprinzip",
        "fr": "Principe d'Aufbau",
        "ru": "Принцип наименьшей энергии",
        "ar": "مبدأ أوفباو",
        "zh": "构造原理",
        "ku": "Prensîba Aufbau"
      },
      "conceptB": {
        "tr": "Hund Kuralı",
        "en": "Hund's Rule",
        "de": "Hundsche Regel",
        "fr": "Règle de Hund",
        "ru": "Правило Хунда",
        "ar": "قاعدة هوند",
        "zh": "洪特规则",
        "ku": "Qaîdeya Hund"
      },
      "distinction": {
        "tr": "Aufbau ilkesi elektronların en düşük enerjili orbitalden başlayarak yerleşmesini; Hund kuralı ise eş enerjili orbitallere önce birer birer ve aynı spinle yerleşmesini ifade eder.",
        "en": "The Aufbau principle states that electrons occupy orbitals starting from the lowest-energy one; Hund's rule states that electrons enter orbitals of equal energy one at a time with the same spin before pairing.",
        "de": "Das Aufbauprinzip besagt, dass Elektronen die Orbitale beginnend mit dem energieärmsten besetzen; die Hundsche Regel besagt, dass energiegleiche Orbitale zunächst einzeln und mit gleichem Spin besetzt werden.",
        "fr": "Le principe d'Aufbau énonce que les électrons occupent les orbitales en commençant par celle de plus basse énergie ; la règle de Hund énonce que les orbitales de même énergie sont d'abord occupées une à une par des électrons de même spin.",
        "ru": "Принцип наименьшей энергии требует заполнять орбитали начиная с самых низкоэнергетических; правило Хунда требует, чтобы равноценные орбитали сначала заполнялись по одному электрону с одинаковыми спинами.",
        "ar": "ينص مبدأ أوفباو على أن الإلكترونات تملأ المدارات ابتداءً من المدار الأقل طاقة؛ أما قاعدة هوند فتنص على أن المدارات المتساوية الطاقة تُملأ أولًا فرادى بإلكترونات لها المغزل نفسه.",
        "zh": "构造原理指出电子从能量最低的轨道开始依次填充；洪特规则指出电子在能量相同的轨道上先以相同自旋分占不同轨道。",
        "ku": "Prensîba Aufbau dibêje ku elektron ji orbîtala bi enerjiya herî nizm dest pê dikin û bi cih dibin; qaîdeya Hund dibêje ku elektron pêşî yek bi yek û bi heman spinê dikevin orbîtalên xwedî heman enerjiyê."
      }
    },
    {
      "id": "u11-c02",
      "conceptA": {
        "tr": "s Orbitali",
        "en": "s orbital",
        "de": "s-Orbital",
        "fr": "Orbitale s",
        "ru": "s-орбиталь",
        "ar": "المدار s",
        "zh": "s轨道",
        "ku": "Orbîtala s"
      },
      "conceptB": {
        "tr": "p Orbitali",
        "en": "p orbital",
        "de": "p-Orbital",
        "fr": "Orbitale p",
        "ru": "p-орбиталь",
        "ar": "المدار p",
        "zh": "p轨道",
        "ku": "Orbîtala p"
      },
      "distinction": {
        "tr": "s orbitali küre şeklindedir (l = 0, 1 tane); p orbitali iki loblu halter şeklindedir ve yönlüdür (l = 1, 3 tane).",
        "en": "The s orbital is spherical (l = 0, 1 orbital); the p orbital is a directional two-lobed dumbbell (l = 1, 3 orbitals).",
        "de": "Das s-Orbital ist kugelförmig (l = 0, 1 Orbital); das p-Orbital ist eine gerichtete, zweilappige Hantel (l = 1, 3 Orbitale).",
        "fr": "L'orbitale s est sphérique (l = 0, une seule) ; l'orbitale p est un haltère orienté à deux lobes (l = 1, au nombre de trois).",
        "ru": "s-орбиталь имеет форму шара (l = 0, 1 орбиталь); p-орбиталь имеет форму гантели из двух лопастей и направлена в пространстве (l = 1, 3 орбитали).",
        "ar": "المدار s كروي الشكل (l = 0، مدار واحد)؛ والمدار p على شكل دمبل موجّه ذي فصين (l = 1، 3 مدارات).",
        "zh": "s轨道呈球形(l = 0，1个)；p轨道是有方向性的双叶哑铃形(l = 1，3个)。",
        "ku": "Orbîtala s bi şiklê gogê ye (l = 0, 1 heb); orbîtala p bi şiklê halterê ye, du lobên wê hene û arasteyî ye (l = 1, 3 heb)."
      }
    },
    {
      "id": "u11-c03",
      "conceptA": {
        "tr": "Baş Kuantum Sayısı (n)",
        "en": "Principal Quantum Number (n)",
        "de": "Hauptquantenzahl (n)",
        "fr": "Nombre quantique principal (n)",
        "ru": "Главное квантовое число n",
        "ar": "عدد الكم الرئيس (n)",
        "zh": "主量子数(n)",
        "ku": "Hejmara Sereke (n)"
      },
      "conceptB": {
        "tr": "Açısal Momentum Kuantum Sayısı (l)",
        "en": "Angular Momentum Quantum Number (l)",
        "de": "Drehimpulsquantenzahl (l)",
        "fr": "Nombre quantique de moment cinétique (l)",
        "ru": "Орбитальное квантовое число l",
        "ar": "عدد الكم الثانوي (l)",
        "zh": "角量子数(l)",
        "ku": "Hejmara Momenta Goşeyî (l)"
      },
      "distinction": {
        "tr": "Baş kuantum sayısı (n) elektronun enerji düzeyini ve çekirdeğe ortalama uzaklığını; açısal momentum kuantum sayısı (l) ise orbitalin türünü ve şeklini (s, p, d, f) belirtir.",
        "en": "The principal quantum number (n) gives the electron's energy level and average distance from the nucleus; the angular momentum quantum number (l) gives the type and shape of the orbital (s, p, d, f).",
        "de": "Die Hauptquantenzahl (n) gibt das Energieniveau des Elektrons und seinen mittleren Abstand vom Kern an; die Drehimpulsquantenzahl (l) gibt Art und Form des Orbitals an (s, p, d, f).",
        "fr": "Le nombre quantique principal (n) indique le niveau d'énergie de l'électron et sa distance moyenne au noyau ; le nombre l (moment cinétique) indique le type et la forme de l'orbitale (s, p, d, f).",
        "ru": "Главное квантовое число n характеризует энергетический уровень электрона и его среднее удаление от ядра; орбитальное квантовое число l характеризует тип и форму орбитали (s, p, d, f).",
        "ar": "عدد الكم الرئيس (n) يحدد مستوى طاقة الإلكترون ومتوسط بعده عن النواة؛ أما عدد الكم الثانوي (l) فيحدد نوع المدار وشكله (s، p، d، f).",
        "zh": "主量子数(n)表示电子所处的能层及其离核的平均距离；角量子数(l)表示轨道的类型和形状(s、p、d、f)。",
        "ku": "Hejmara sereke (n) asta enerjiyê ya elektronê û dûrahiya wê ya navîn ji navokê nîşan dide; hejmara momenta goşeyî (l) jî cure û şiklê orbîtalê (s, p, d, f) nîşan dide."
      }
    },
    {
      "id": "u11-c04",
      "conceptA": {
        "tr": "Manyetik Kuantum Sayısı (ml)",
        "en": "Magnetic Quantum Number (ml)",
        "de": "Magnetquantenzahl (ml)",
        "fr": "Nombre quantique magnétique (ml)",
        "ru": "Магнитное квантовое число ml",
        "ar": "عدد الكم المغناطيسي (ml)",
        "zh": "磁量子数(ml)",
        "ku": "Hejmara Magnetîk (ml)"
      },
      "conceptB": {
        "tr": "Spin Kuantum Sayısı (ms)",
        "en": "Spin Quantum Number (ms)",
        "de": "Spinquantenzahl (ms)",
        "fr": "Nombre quantique de spin (ms)",
        "ru": "Спиновое квантовое число ms",
        "ar": "عدد الكم المغزلي (ms)",
        "zh": "自旋量子数(ms)",
        "ku": "Hejmara Spinê (ms)"
      },
      "distinction": {
        "tr": "ml orbitalin uzaydaki yönelimini belirtir (-l..+l); ms elektronun spin yönünü belirtir (+1/2, -1/2).",
        "en": "ml gives the orientation of the orbital in space (-l..+l); ms gives the direction of the electron's spin (+1/2, -1/2).",
        "de": "ml gibt die räumliche Ausrichtung des Orbitals an (-l..+l); ms gibt die Spinrichtung des Elektrons an (+1/2, -1/2).",
        "fr": "ml donne l'orientation de l'orbitale dans l'espace (-l..+l) ; ms donne le sens du spin de l'électron (+1/2, -1/2).",
        "ru": "Магнитное квантовое число ml характеризует ориентацию орбитали в пространстве (от -l до +l); спиновое квантовое число ms характеризует направление спина электрона (+1/2, -1/2).",
        "ar": "عدد الكم المغناطيسي (ml) يحدد اتجاه المدار في الفراغ (-l..+l)؛ أما عدد الكم المغزلي (ms) فيحدد اتجاه مغزل الإلكترون (+1/2، -1/2).",
        "zh": "磁量子数(ml)表示轨道在空间中的取向(-l..+l)；自旋量子数(ms)表示电子的自旋方向(+1/2，-1/2)。",
        "ku": "Hejmara magnetîk (ml) arasteya orbîtalê ya di fezayê de nîşan dide (-l..+l); hejmara spinê (ms) arasteya zivirîna elektronê nîşan dide (+1/2, -1/2)."
      }
    },
    {
      "id": "u11-c05",
      "conceptA": {
        "tr": "Pauli Dışlama İlkesi",
        "en": "Pauli Exclusion Principle",
        "de": "Pauli-Ausschlussprinzip",
        "fr": "Principe d'exclusion de Pauli",
        "ru": "Принцип Паули",
        "ar": "مبدأ الاستبعاد لباولي",
        "zh": "泡利不相容原理",
        "ku": "Prensîba dûrxistinê ya Pauli"
      },
      "conceptB": {
        "tr": "Küresel Simetri",
        "en": "Spherical Symmetry",
        "de": "Sphärische Symmetrie",
        "fr": "Symétrie sphérique",
        "ru": "Сферическая симметрия",
        "ar": "التناظر الكروي",
        "zh": "球形对称",
        "ku": "Sîmetriya gewherî"
      },
      "distinction": {
        "tr": "Pauli dışlama ilkesi, bir atomda dört kuantum sayısı da aynı olan iki elektron bulunamayacağını belirtir; küresel simetri ise son alt kabuğun yarı dolu ya da tam dolu olmasıyla ortaya çıkan simetrik elektron dağılımını ifade eder.",
        "en": "The Pauli exclusion principle states that no two electrons in an atom can have all four quantum numbers the same; spherical symmetry describes the symmetric electron distribution that arises when the last sublevel is half-filled or completely filled.",
        "de": "Pauli: In einem Atom können keine zwei Elektronen in allen vier Quantenzahlen übereinstimmen; die Kugelsymmetrie beschreibt die besondere Stabilität eines halb- oder vollbesetzten letzten Unterniveaus.",
        "fr": "Pauli : deux électrons d'un atome ne peuvent pas avoir leurs quatre nombres quantiques identiques ; la symétrie sphérique décrit la stabilité particulière d'une dernière sous-couche à moitié ou entièrement remplie.",
        "ru": "Принцип Паули запрещает двум электронам атома иметь одинаковые значения всех четырёх квантовых чисел; сферическая симметрия означает дополнительную устойчивость, которую даёт наполовину или полностью заполненный последний подуровень.",
        "ar": "مبدأ الاستبعاد لباولي: لا يمكن أن يتطابق إلكترونان في ذرة واحدة في أعداد الكم الأربعة جميعها؛ أما التناظر الكروي فيعبّر عن الاستقرار الإضافي الناتج عن كون المستوى الفرعي الأخير نصف ممتلئ أو ممتلئًا تمامًا.",
        "zh": "泡利不相容原理指同一原子中不可能有两个电子的四个量子数完全相同；球形对称指最后一个亚层半充满或全充满时带来的额外稳定性。",
        "ku": "Prensîba dûrxistinê ya Pauli dibêje ku di atomekê de her çar hejmarên kuantumê yên du elektronan nikarin wekhev bin; sîmetriya gewherî aramiya zêde nîşan dide ku ji nîvtijî an tamtijîbûna binqata dawî tê."
      }
    },
    {
      "id": "u11-c06",
      "conceptA": {
        "tr": "Temel Hâl",
        "en": "Ground State",
        "de": "Grundzustand",
        "fr": "État fondamental",
        "ru": "Основное состояние",
        "ar": "الحالة الأرضية",
        "zh": "基态",
        "ku": "Rewşa bingehîn"
      },
      "conceptB": {
        "tr": "Uyarılmış Hâl",
        "en": "Excited State",
        "de": "Angeregter Zustand",
        "fr": "État excité",
        "ru": "Возбуждённое состояние",
        "ar": "الحالة المثارة",
        "zh": "激发态",
        "ku": "Rewşa heyecanbûyî"
      },
      "distinction": {
        "tr": "Temel hâl, atomun elektronlarının en düşük enerjili (en kararlı) dizilimidir; uyarılmış hâl ise atomun dışarıdan enerji almasıyla bir elektronunun daha yüksek enerjili bir orbitale geçtiği kararsız durumdur.",
        "en": "The ground state is the lowest-energy (most stable) arrangement of an atom's electrons; the excited state is the unstable state in which an electron has moved to a higher-energy orbital after the atom absorbed energy.",
        "de": "Der Grundzustand ist die energieärmste (stabilste) Anordnung der Elektronen eines Atoms; der angeregte Zustand ist der instabile Zustand, in dem ein Elektron nach Energieaufnahme des Atoms in ein energiereicheres Orbital gewechselt ist.",
        "fr": "L'état fondamental est l'arrangement de plus basse énergie (le plus stable) des électrons d'un atome ; l'état excité est l'état instable dans lequel un électron est passé dans une orbitale de plus haute énergie après absorption d'énergie par l'atome.",
        "ru": "Основное состояние — расположение электронов атома с наименьшей энергией (наиболее устойчивое); возбуждённое состояние — неустойчивое состояние, в котором после поглощения атомом энергии один из электронов перешёл на орбиталь с более высокой энергией.",
        "ar": "الحالة الأرضية هي ترتيب إلكترونات الذرة الأقل طاقة (الأكثر استقرارًا)؛ أما الحالة المثارة فهي الحالة غير المستقرة التي ينتقل فيها إلكترون إلى مدار أعلى طاقة بعد امتصاص الذرة للطاقة.",
        "zh": "基态是原子中电子能量最低（最稳定）的排布；激发态是原子吸收能量后某个电子跃迁到能量较高的轨道而形成的不稳定状态。",
        "ku": "Rewşa bingehîn rêzbûna elektronên atomê ya bi enerjiya herî nizm (herî aram) e; rewşa heyecanbûyî ew rewşa nearam e ku tê de, piştî ku atom ji derve enerjî werdigire, elektronek derbasî orbîtaleke bi enerjiya bilindtir dibe."
      }
    },
    {
      "id": "u11-c07",
      "conceptA": {
        "tr": "Bohr Atom Modeli",
        "en": "Bohr Atomic Model",
        "de": "Bohrsches Atommodell",
        "fr": "Modèle atomique de Bohr",
        "ru": "Модель Бора",
        "ar": "نموذج بور",
        "zh": "玻尔原子模型",
        "ku": "Modela Bohr"
      },
      "conceptB": {
        "tr": "Modern Atom Modeli",
        "en": "Modern Atomic Model",
        "de": "Modernes Atommodell",
        "fr": "Modèle atomique moderne",
        "ru": "Современная модель атома",
        "ar": "النموذج الذري الحديث",
        "zh": "现代原子模型",
        "ku": "Modela Kuantumê"
      },
      "distinction": {
        "tr": "Bohr atom modelinde elektronlar çekirdek çevresinde belirli yarıçaplı dairesel yörüngelerde dolanır ve bu model yalnızca tek elektronlu taneciklerin (H, He+) spektrumunu açıklar; modern atom modelinde ise elektronun yeri kesin olarak belirlenemez, yalnızca orbital adı verilen bölgelerde bulunma olasılığından söz edilir.",
        "en": "In the Bohr atomic model, electrons move in circular orbits of fixed radius around the nucleus, and the model explains only the spectra of one-electron species (H, He+); in the modern model the electron's position cannot be known exactly, only its probability of being found in regions called orbitals.",
        "de": "Bohrsches Atommodell: Elektronen bewegen sich auf Kreisbahnen mit festem Radius um den Kern, und das Modell erklärt nur die Spektren von Einelektronenteilchen (H, He+). Im modernen Atommodell ist der Ort des Elektrons nicht genau bestimmbar, nur seine Aufenthaltswahrscheinlichkeit in Bereichen, die Orbitale heißen.",
        "fr": "Dans le modèle atomique de Bohr, les électrons décrivent des orbites circulaires de rayon fixe autour du noyau, et ce modèle n'explique que les spectres des espèces à un électron (H, He+) ; dans le modèle moderne, la position de l'électron ne peut être connue exactement, seule sa probabilité de présence dans des régions appelées orbitales l'est.",
        "ru": "Модель Бора описывает движение электронов вокруг ядра по круговым орбитам определённого радиуса и объясняет только спектры одноэлектронных частиц (H, He+); современная модель атома не позволяет точно определить положение электрона — она говорит лишь о вероятности его нахождения в областях, называемых орбиталями.",
        "ar": "في نموذج بور تتحرك الإلكترونات حول النواة في مدارات دائرية ذات أنصاف أقطار محددة، ولا يفسر هذا النموذج إلا أطياف الدقائق ذات الإلكترون الواحد (H، He+)؛ أما في النموذج الذري الحديث فلا يمكن تحديد موقع الإلكترون بدقة، بل يُتحدّث فقط عن احتمال وجوده في مناطق تسمى المدارات (الأفلاك).",
        "zh": "玻尔原子模型认为电子在核外半径固定的圆形轨道上运动，只能解释单电子粒子(H、He+)的光谱；现代原子模型中电子的位置无法确定，只能描述其在称为原子轨道的区域中出现的概率。",
        "ku": "Di modela Bohr de elektron li dora navokê li ser rêgehên gilover ên bi nîvçapa diyar dizivirin û ev model tenê spektruma perçeyên yekelektronî (H, He+) rave dike; di modela kuantumê (modela nûjen) de cihê elektronê bi teqez nayê diyarkirin, tenê behsa îhtîmala dîtina wê di herêmên bi navê orbîtal de tê kirin."
      }
    },
    {
      "id": "u11-c08",
      "conceptA": {
        "tr": "İyonlaşma Enerjisi",
        "en": "Ionization Energy",
        "de": "Ionisierungsenergie",
        "fr": "Énergie d'ionisation",
        "ru": "Энергия ионизации",
        "ar": "طاقة التأين",
        "zh": "电离能",
        "ku": "Enerjiya îyonîzasyonê"
      },
      "conceptB": {
        "tr": "Elektron İlgisi",
        "en": "Electron Affinity",
        "de": "Elektronenaffinität",
        "fr": "Affinité électronique",
        "ru": "Сродство к электрону",
        "ar": "الألفة الإلكترونية",
        "zh": "电子亲和能",
        "ku": "Eleqeya elektronê"
      },
      "distinction": {
        "tr": "İyonlaşma enerjisi gaz hâlindeki nötr bir atomdan bir elektron koparmak için gereken enerjidir ve her zaman endotermiktir; elektron ilgisi gaz hâlindeki nötr bir atomun bir elektron almasıyla gerçekleşen enerji değişimidir ve çoğu atom için ekzotermiktir.",
        "en": "Ionization energy is the energy needed to remove an electron from a neutral gaseous atom and is always endothermic; electron affinity is the energy change when a neutral gaseous atom gains an electron and is exothermic for most atoms.",
        "de": "Die Ionisierungsenergie ist die Energie, die nötig ist, um einem neutralen gasförmigen Atom ein Elektron zu entreißen, und ist immer endotherm; die Elektronenaffinität ist die Energieänderung bei der Aufnahme eines Elektrons durch ein neutrales gasförmiges Atom und ist für die meisten Atome exotherm.",
        "fr": "L'énergie d'ionisation est l'énergie nécessaire pour arracher un électron à un atome neutre gazeux ; elle est toujours endothermique. L'affinité électronique est la variation d'énergie lorsqu'un atome neutre gazeux capte un électron ; elle est exothermique pour la plupart des atomes.",
        "ru": "Энергия ионизации — энергия, необходимая для отрыва электрона от нейтрального атома в газовой фазе; процесс всегда эндотермический. Сродство к электрону — изменение энергии при присоединении электрона к нейтральному атому в газовой фазе; для большинства атомов процесс экзотермический.",
        "ar": "طاقة التأين هي الطاقة اللازمة لنزع إلكترون من ذرة متعادلة في الحالة الغازية وهي ماصّة للحرارة دائمًا؛ أما الألفة الإلكترونية فهي تغيّر الطاقة عند اكتساب ذرة متعادلة غازية إلكترونًا، وهي طاردة للحرارة لمعظم الذرات.",
        "zh": "电离能是从气态中性原子中移去一个电子所需的能量，总是吸热的；电子亲和能是气态中性原子获得一个电子时的能量变化，对大多数原子是放热的。",
        "ku": "Enerjiya îyonîzasyonê ew enerjî ye ku ji bo qetandina elektronekê ji atomeke bêbar a di rewşa gazê de pêwîst e û her tim endotermîk e; eleqeya elektronê guherîna enerjiyê ye dema ku atomeke bêbar a di rewşa gazê de elektronekê werdigire û ji bo piraniya atoman ekzotermîk e."
      }
    }
  ],
  "sequences": [
    {
      "id": "u11-s01",
      "title": {
        "tr": "Orbital Enerji Sıralaması (n + l Artışı)",
        "en": "Orbital Energy Ranking (n + l Increment)",
        "de": "Rangfolge der Orbitalenergie (n + l-Inkrement)",
        "fr": "Classement de l'énergie orbitale (incrément n + l)",
        "ru": "Порядок возрастания энергии орбиталей (по сумме n + l)",
        "ar": "ترتيب طاقة المدارات (تزايد n + l)",
        "zh": "轨道能量顺序(按 n + l 递增)",
        "ku": "Rêzkirina Enerjiya Orbîtalan (Zêdebûna n + l)"
      },
      "steps": [
        {
          "tr": "1s < 2s < 2p",
          "en": "1s < 2s < 2p",
          "de": "1s < 2s < 2p",
          "fr": "1s < 2s < 2p",
          "ru": "1s < 2s < 2p",
          "ar": "1s < 2s < 2p",
          "zh": "1s < 2s < 2p",
          "ku": "1s < 2s < 2p"
        },
        {
          "tr": "3s < 3p < 4s",
          "en": "3s < 3p < 4s",
          "de": "3s < 3p < 4s",
          "fr": "3s < 3p < 4s",
          "ru": "3s < 3p < 4s",
          "ar": "3s < 3p < 4s",
          "zh": "3s < 3p < 4s",
          "ku": "3s < 3p < 4s"
        },
        {
          "tr": "3d < 4p < 5s",
          "en": "3d < 4p < 5s",
          "de": "3d < 4p < 5s",
          "fr": "3d < 4p < 5s",
          "ru": "3d < 4p < 5s",
          "ar": "3d < 4p < 5s",
          "zh": "3d < 4p < 5s",
          "ku": "3d < 4p < 5s"
        },
        {
          "tr": "4d < 5p < 6s",
          "en": "4d < 5p < 6s",
          "de": "4d < 5p < 6s",
          "fr": "4d < 5p < 6s",
          "ru": "4d < 5p < 6s",
          "ar": "4d < 5p < 6s",
          "zh": "4d < 5p < 6s",
          "ku": "4d < 5p < 6s"
        }
      ]
    },
    {
      "id": "u11-s02",
      "title": {
        "tr": "Aufbau Orbital Doldurma Sırası",
        "en": "Aufbau Orbital Filling Order",
        "de": "Aufbau-Orbitalfüllauftrag",
        "fr": "Commande de remplissage orbitale Aufbau",
        "ru": "Порядок заполнения орбиталей по принципу наименьшей энергии",
        "ar": "ترتيب ملء المدارات وفق مبدأ أوفباو",
        "zh": "构造原理：轨道填充顺序",
        "ku": "Rêza Dagirtina Orbîtalan a Aufbau"
      },
      "steps": [
        {
          "tr": "1s orbitali en düşük enerjiyle dolar",
          "en": "1s orbital is filled with the lowest energy",
          "de": "Das 1s-Orbital ist mit der niedrigsten Energie gefüllt",
          "fr": "L’orbitale 1s est remplie de l’énergie la plus basse",
          "ru": "Первой заполняется 1s-орбиталь с наименьшей энергией",
          "ar": "يمتلئ المدار 1s أولًا لأنه الأقل طاقة",
          "zh": "1s 轨道能量最低，最先填充",
          "ku": "Orbîtala 1s, ku enerjiya wê herî nizm e, pêşî tijî dibe"
        },
        {
          "tr": "2s ve 2p orbitalleri sırayla doldurulur",
          "en": "2s and 2p orbitals are filled sequentially",
          "de": "2s- und 2p-Orbitale werden nacheinander gefüllt",
          "fr": "Les orbitales 2s et 2p sont remplies séquentiellement",
          "ru": "Затем последовательно заполняются 2s- и 2p-орбитали",
          "ar": "تُملأ مدارات 2s و2p بالتتابع",
          "zh": "2s 和 2p 轨道依次填充",
          "ku": "Orbîtalên 2s û 2p bi rêzê têne dagirtin"
        },
        {
          "tr": "3s ve 3p orbitallerinden sonra 4s orbitali dolar",
          "en": "After the 3s and 3p orbitals, the 4s orbital is filled.",
          "de": "Nach den 3s- und 3p-Orbitalen wird das 4s-Orbital gefüllt.",
          "fr": "Après les orbitales 3s et 3p, l’orbitale 4s est remplie.",
          "ru": "После 3s- и 3p-орбиталей заполняется 4s-орбиталь",
          "ar": "بعد مداري 3s و3p يمتلئ المدار 4s",
          "zh": "3s、3p 之后填充 4s 轨道",
          "ku": "Piştî orbîtalên 3s û 3p, orbîtala 4s tijî dibe"
        },
        {
          "tr": "4s'ten sonra 3d orbitallerine elektron yerleşir",
          "en": "After 4s, electrons are placed in 3d orbitals.",
          "de": "Nach 4s werden die Elektronen in die 3d-Orbitale eingebaut.",
          "fr": "Après la 4s, les électrons se placent dans les orbitales 3d.",
          "ru": "После 4s электроны заселяют 3d-орбитали",
          "ar": "بعد 4s تدخل الإلكترونات مدارات 3d",
          "zh": "4s 之后电子填入 3d 轨道",
          "ku": "Piştî 4s, elektron li orbîtalên 3d bi cih dibin"
        }
      ]
    },
    {
      "id": "u11-s03",
      "title": {
        "tr": "Kuantum Sayılarının Belirlenmesi",
        "en": "Determination of Quantum Numbers",
        "de": "Bestimmung von Quantenzahlen",
        "fr": "Détermination des nombres quantiques",
        "ru": "Определение квантовых чисел",
        "ar": "تحديد أعداد الكم",
        "zh": "确定量子数",
        "ku": "Diyarkirina Hejmarên Kuantumê"
      },
      "steps": [
        {
          "tr": "Elektronun bulunduğu katmandan baş kuantum n belirlenir",
          "en": "Principal quantum n is determined from the layer where the electron is located",
          "de": "Das Hauptquantum n wird aus der Schicht bestimmt, in der sich das Elektron befindet",
          "fr": "Le quantum principal n est déterminé à partir de la couche où se trouve l'électron",
          "ru": "По уровню (слою), на котором находится электрон, определяют главное квантовое число n",
          "ar": "يُحدَّد عدد الكم الرئيس n من الغلاف الذي يوجد فيه الإلكترون",
          "zh": "由电子所在的能层确定主量子数 n",
          "ku": "Ji qata ku elektron tê de ye hejmara kuantumê ya sereke n tê diyarkirin"
        },
        {
          "tr": "Orbital türünden açısal momentum kuantum l bulunur",
          "en": "The angular momentum quantum l of orbital type is found",
          "de": "Das Drehimpulsquantum l vom Orbitaltyp wird gefunden",
          "fr": "Le quantum de moment cinétique l de type orbital se trouve",
          "ru": "По типу орбитали находят орбитальное квантовое число l",
          "ar": "يُستنتج عدد الكم الثانوي l من نوع المدار",
          "zh": "由轨道类型确定角量子数 l",
          "ku": "Ji cureya orbîtalê hejmara kuantumê ya momenta goşeyî l tê dîtin"
        },
        {
          "tr": "l'ye bağlı olarak ml değerleri -l'den +l'ye sıralanır",
          "en": "Depending on l, ml values are sorted from -l to +l.",
          "de": "Abhängig von l werden ml-Werte von -l bis +l sortiert.",
          "fr": "En fonction de l, les valeurs ml sont triées de -l à +l.",
          "ru": "В зависимости от l перечисляют значения ml от -l до +l",
          "ar": "تُرتَّب قيم ml تبعًا لـ l من -l إلى +l",
          "zh": "根据 l，ml 取 -l 到 +l 的值",
          "ku": "Li gorî l, nirxên ml ji -l heta +l têne rêzkirin"
        },
        {
          "tr": "Elektronun spin yönüne göre ms (+1/2 veya -1/2) belirlenir",
          "en": "ms (+1/2 or -1/2) is assigned according to the electron's spin direction",
          "de": "ms (+1/2 oder -1/2) wird nach der Spinrichtung des Elektrons festgelegt",
          "fr": "ms (+1/2 ou -1/2) est attribué selon le sens du spin de l'électron",
          "ru": "По направлению спина электрона определяют ms (+1/2 или -1/2)",
          "ar": "يُحدَّد ms (+1/2 أو -1/2) وفق اتجاه مغزل الإلكترون",
          "zh": "根据电子的自旋方向确定 ms (+1/2 或 -1/2)",
          "ku": "Li gorî arasteya spina elektronê ms (+1/2 an -1/2) tê diyarkirin"
        }
      ]
    },
    {
      "id": "u11-s04",
      "title": {
        "tr": "Küresel Simetri Kararlılığı (Cr ve Cu)",
        "en": "Spherical Symmetry Stability (Cr and Cu)",
        "de": "Stabilität der sphärischen Symmetrie (Cr und Cu)",
        "fr": "Stabilité de symétrie sphérique (Cr et Cu)",
        "ru": "Устойчивость сферически симметричных конфигураций (Cr и Cu)",
        "ar": "استقرار التناظر الكروي (Cr وCu)",
        "zh": "球形对称的稳定性(Cr 和 Cu)",
        "ku": "Aramiya Sîmetriya Gewherî (Cr û Cu)"
      },
      "steps": [
        {
          "tr": "Sc'den itibaren 3d orbitalleri doldurulur",
          "en": "3d orbitals are filled starting from Sc",
          "de": "3d-Orbitale werden ab Sc gefüllt",
          "fr": "Les orbitales 3d sont remplies à partir de Sc",
          "ru": "Начиная со Sc заполняются 3d-орбитали",
          "ar": "تمتلئ مدارات 3d بدءًا من Sc",
          "zh": "从 Sc 开始填充 3d 轨道",
          "ku": "Ji Sc û pê ve orbîtalên 3d têne dagirtin"
        },
        {
          "tr": "Cr atomunda 4s2 3d4 yerine 4s1 3d5 dizilimi oluşur",
          "en": "Instead of 4s2 3d4, the sequence 4s1 3d5 is formed in the Cr atom.",
          "de": "Anstelle von 4s2 3d4 entsteht im Cr-Atom die Folge 4s1 3d5.",
          "fr": "Au lieu de 4s2 3d4, la séquence 4s1 3d5 est formée dans l'atome de Cr.",
          "ru": "В атоме Cr вместо конфигурации 4s2 3d4 реализуется 4s1 3d5",
          "ar": "يتكون في ذرة Cr التوزيع 4s1 3d5 بدلًا من 4s2 3d4",
          "zh": "Cr 原子采取 4s1 3d5 而不是 4s2 3d4 的排布",
          "ku": "Di atoma Cr de li şûna 4s2 3d4 rêzkirina 4s1 3d5 çêdibe"
        },
        {
          "tr": "3d orbitalleri yarı dolu hale gelerek küresel simetri kazanır",
          "en": "3d orbitals become half-filled and gain spherical symmetry",
          "de": "3d-Orbitale werden zur Hälfte gefüllt und erhalten sphärische Symmetrie",
          "fr": "Les orbitales 3d deviennent à moitié remplies et acquièrent une symétrie sphérique",
          "ru": "3d-орбитали оказываются заполненными наполовину, и конфигурация приобретает сферическую симметрию",
          "ar": "تصبح مدارات 3d نصف ممتلئة وتكتسب تناظرًا كرويًا",
          "zh": "3d 轨道半充满，获得球形对称",
          "ku": "Orbîtalên 3d nîvtijî dibin û sîmetriya gewherî werdigirin"
        },
        {
          "tr": "Cu atomunda 4s1 3d10 dizilimiyle tam dolu küresel simetri kurulur",
          "en": "Full spherical symmetry is established in the Cu atom with the 4s1 3d10 sequence.",
          "de": "Mit der 4s1 3d10-Sequenz wird im Cu-Atom eine vollständige Kugelsymmetrie hergestellt.",
          "fr": "Une symétrie sphérique complète est établie dans l'atome de Cu avec la séquence 4s1 3d10.",
          "ru": "В атоме Cu конфигурация 4s1 3d10 даёт сферическую симметрию полностью заполненного подуровня",
          "ar": "يتحقق في ذرة Cu تناظر كروي تام بالتوزيع 4s1 3d10",
          "zh": "Cu 原子以 4s1 3d10 排布达到全充满的球形对称",
          "ku": "Di atoma Cu de bi rêzkirina 4s1 3d10 sîmetriya gewherî ya tamtijî pêk tê"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u11-twin01",
      "stem": {
        "tr": "Temel hâldeki 24Cr atomunda yarı dolu orbital sayısı kaçtır?",
        "en": "How many half-filled orbitals are in the electron configuration of the 24Cr atom in the ground state?",
        "de": "Wie viele halbgefüllte Orbitale gibt es in der Elektronenkonfiguration des 24Cr-Atoms im Grundzustand?",
        "fr": "Combien y a-t-il d’orbitales à moitié remplies dans la configuration électronique de l’atome de 24Cr à l’état fondamental ?",
        "ru": "Сколько наполовину заполненных орбиталей в атоме 24Cr в основном состоянии?",
        "ar": "ما عدد المدارات نصف الممتلئة في ذرة 24Cr في الحالة الأرضية؟",
        "zh": "基态 24Cr 原子中有多少个半充满轨道？",
        "ku": "Di atoma 24Cr ya di rewşa bingehîn de çend orbîtalên nîvtijî hene?"
      },
      "options": [
        {
          "tr": "6",
          "en": "6",
          "de": "6",
          "fr": "6",
          "ru": "6",
          "ar": "6",
          "zh": "6",
          "ku": "6"
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
          "tr": "1",
          "en": "1",
          "de": "1",
          "fr": "1",
          "ru": "1",
          "ar": "1",
          "zh": "1",
          "ku": "1"
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
      "correctIndex": 0,
      "explanation": {
        "tr": "24Cr atomunun temel hâl elektron dizilimi küresel simetri kararlılığı nedeniyle [Ar] 4s1 3d5'tir. 4s'te 1, 3d'de 5 olmak üzere toplam 6 yarı dolu orbital vardır. Dizilimi [Ar] 4s2 3d4 yazan 4, yalnızca 3d orbitallerini sayan 5 bulur.",
        "en": "Because of spherical-symmetry stability, the ground-state configuration of 24Cr is [Ar] 4s1 3d5. There are 6 half-filled orbitals in total: 1 in 4s and 5 in 3d. Writing the configuration as [Ar] 4s2 3d4 gives 4, and counting only the 3d orbitals gives 5.",
        "de": "Wegen der Stabilität der Kugelsymmetrie lautet die Grundzustandskonfiguration von 24Cr [Ar] 4s1 3d5. Es gibt insgesamt 6 halbbesetzte Orbitale: 1 in 4s und 5 in 3d. Wer [Ar] 4s2 3d4 schreibt, erhält 4; wer nur die 3d-Orbitale zählt, erhält 5.",
        "fr": "En raison de la stabilité liée à la symétrie sphérique, la configuration fondamentale de 24Cr est [Ar] 4s1 3d5. Il y a au total 6 orbitales à moitié remplies : 1 en 4s et 5 en 3d. Écrire [Ar] 4s2 3d4 donne 4 ; ne compter que les orbitales 3d donne 5.",
        "ru": "Благодаря устойчивости сферически симметричной конфигурации основное состояние 24Cr — [Ar] 4s1 3d5. Всего 6 наполовину заполненных орбиталей: 1 на 4s и 5 на 3d. Если записать [Ar] 4s2 3d4, получится 4; если считать только 3d-орбитали — 5.",
        "ar": "بسبب استقرار التناظر الكروي يكون التوزيع الإلكتروني لذرة 24Cr في الحالة الأرضية [Ar] 4s1 3d5. يوجد إجمالًا 6 مدارات نصف ممتلئة: 1 في 4s و5 في 3d. من يكتب التوزيع [Ar] 4s2 3d4 يحصل على 4، ومن يعدّ مدارات 3d فقط يحصل على 5.",
        "zh": "由于球形对称的稳定性，基态 24Cr 的电子排布为 [Ar] 4s1 3d5。共有 6 个半充满轨道：4s 中 1 个，3d 中 5 个。若写成 [Ar] 4s2 3d4 会得到 4，只数 3d 轨道会得到 5。",
        "ku": "Ji ber aramiya sîmetriya gewherî, rêzkirina elektronan a 24Cr di rewşa bingehîn de [Ar] 4s1 3d5 e. Bi tevahî 6 orbîtalên nîvtijî hene: 1 di 4s de û 5 di 3d de. Yê ku rêzkirinê wek [Ar] 4s2 3d4 binivîse 4, yê ku tenê orbîtalên 3d bijmêre 5 dibîne."
      }
    },
    {
      "id": "u11-twin02",
      "stem": {
        "tr": "Şekildeki grafikte, atom numaraları ardışık olan ve hepsi A grubunda bulunan dokuz elementin birinci iyonlaşma enerjileri artan atom numarası sırasıyla verilmiştir.\nI. 2. element 2A grubundadır.\nII. 6. elementin değerlik elektron sayısı 5'tir.\nIII. 5. elementin temel hâl elektron diziliminde son alt kabuk yarı doludur.\nyargılarından hangileri doğrudur?",
        "en": "The graph gives the first ionization energies of nine A-group elements with consecutive atomic numbers, in order of increasing atomic number. Which of the following statements are true?\nI. Element 2 is in group 2A.\nII. Element 6 has 5 valence electrons.\nIII. In the ground-state electron configuration of element 5, the last sublevel is half-filled.",
        "de": "Das Diagramm zeigt die ersten Ionisierungsenergien von neun Hauptgruppenelementen mit aufeinanderfolgenden Ordnungszahlen, geordnet nach steigender Ordnungszahl. Welche Aussagen sind richtig?\nI. Element 2 steht in der Gruppe 2A.\nII. Element 6 hat 5 Valenzelektronen.\nIII. In der Grundzustandskonfiguration von Element 5 ist das letzte Unterniveau halb besetzt.",
        "fr": "Le graphique donne les premières énergies d'ionisation de neuf éléments des groupes A de numéros atomiques consécutifs, rangés par numéro atomique croissant. Quelles affirmations sont vraies ?\nI. L'élément 2 appartient au groupe 2A.\nII. L'élément 6 possède 5 électrons de valence.\nIII. Dans la configuration de l'état fondamental de l'élément 5, la dernière sous-couche est à moitié remplie.",
        "ru": "На графике приведены первые энергии ионизации девяти элементов главных (A) подгрупп с последовательными порядковыми номерами, в порядке возрастания номера. Какие утверждения верны?\nI. Элемент 2 находится в группе 2A.\nII. У элемента 6 пять валентных электронов.\nIII. В электронной конфигурации основного состояния элемента 5 последний подуровень заполнен наполовину.",
        "ar": "يبيّن الرسم البياني طاقات التأين الأولى لتسعة عناصر من مجموعات A أعدادها الذرية متتالية، مرتبةً حسب تزايد العدد الذري. أيّ العبارات الآتية صحيحة؟\nI. العنصر 2 يقع في المجموعة 2A.\nII. عدد إلكترونات التكافؤ في العنصر 6 يساوي 5.\nIII. في التوزيع الإلكتروني للحالة الأرضية للعنصر 5 يكون المستوى الفرعي الأخير نصف ممتلئ.",
        "zh": "图中按原子序数递增的顺序给出了九种原子序数连续的 A 族元素的第一电离能。下列说法中哪些正确？\nI. 第 2 种元素位于 2A 族。\nII. 第 6 种元素有 5 个价电子。\nIII. 第 5 种元素基态电子排布的最后一个亚层为半充满。",
        "ku": "Di grafîka şeklê de enerjiyên îyonîzasyonê yên yekem ên neh elementên koma A yên ku hejmarên wan ên atomî li pey hev in, li gorî zêdebûna hejmara atomî hatine dayîn. Kîjan ji van gotinan rast in?\nI. Elementa 2. di koma 2A de ye.\nII. Hejmara elektronên valansê yên elementa 6. 5 e.\nIII. Di rêzkirina elektronan a rewşa bingehîn a elementa 5. de binqata dawî nîvtijî ye."
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
          "tr": "Yalnız III",
          "en": "Only III",
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
      "correctIndex": 3,
      "explanation": {
        "tr": "Grafikte 8. elementten 9. elemente geçişte iyonlaşma enerjisi en yüksek değerden en düşük değere iner; 8. element soy gaz (8A), 9. element yeni periyodun 1A elementidir. Bu durumda 1. element 1A, 2. element 2A'dır; I doğrudur. 3. elementte görülen düşüş 3A'nın tek p elektronunun kolay koparılmasından, 6. elementteki düşüş ise 6A'da p orbitalinde ilk eşleşmenin oluşmasından kaynaklanır. 6. element 6A grubundadır ve 6 değerlik elektronu vardır; II yanlıştır. 5. element 5A grubundadır (ns2 np3); p alt kabuğu yarı doludur ve bu yüzden iyonlaşma enerjisi 6. elementinkinden büyüktür; III doğrudur. Grafikteki her düşüşü yeni periyodun başlangıcı sanmak tipik bir hatadır.",
        "en": "On the graph the ionization energy falls from its highest to its lowest value between elements 8 and 9: element 8 is a noble gas (8A) and element 9 is the 1A element of the next period. So element 1 is in 1A and element 2 in 2A; I is true. The dip at element 3 comes from the single p electron of group 3A being easy to remove, and the dip at element 6 from the first pairing in the p orbitals in group 6A. Element 6 is in group 6A and has 6 valence electrons; II is false. Element 5 is in group 5A (ns2 np3); its p sublevel is half-filled, which is why its ionization energy is higher than that of element 6; III is true. Taking every dip on the graph for the start of a new period is a typical mistake.",
        "de": "Im Diagramm fällt die Ionisierungsenergie zwischen Element 8 und 9 vom höchsten auf den niedrigsten Wert: Element 8 ist ein Edelgas (8A), Element 9 das 1A-Element der nächsten Periode. Element 1 steht also in 1A, Element 2 in 2A; I ist richtig. Der Knick bei Element 3 entsteht, weil das einzelne p-Elektron der Gruppe 3A leicht abgegeben wird, der Knick bei Element 6 durch die erste Paarung in den p-Orbitalen in Gruppe 6A. Element 6 steht in Gruppe 6A und hat 6 Valenzelektronen; II ist falsch. Element 5 steht in Gruppe 5A (ns2 np3); sein p-Unterniveau ist halb besetzt, deshalb ist seine Ionisierungsenergie höher als die von Element 6; III ist richtig. Ein typischer Fehler ist, jeden Knick im Diagramm für den Beginn einer neuen Periode zu halten.",
        "fr": "Sur le graphique, l'énergie d'ionisation passe de sa valeur la plus haute à la plus basse entre les éléments 8 et 9 : l'élément 8 est un gaz noble (8A) et l'élément 9 l'élément 1A de la période suivante. L'élément 1 est donc dans le groupe 1A et l'élément 2 dans le groupe 2A ; I est vraie. La baisse à l'élément 3 vient de ce que l'unique électron p du groupe 3A s'arrache facilement, celle à l'élément 6 du premier appariement dans les orbitales p du groupe 6A. L'élément 6 est dans le groupe 6A et possède 6 électrons de valence ; II est fausse. L'élément 5 est dans le groupe 5A (ns2 np3) ; sa sous-couche p est à moitié remplie, d'où une énergie d'ionisation supérieure à celle de l'élément 6 ; III est vraie. Prendre chaque baisse du graphique pour le début d'une nouvelle période est une erreur typique.",
        "ru": "По графику энергия ионизации падает от наибольшего значения к наименьшему при переходе от элемента 8 к элементу 9: элемент 8 — благородный газ (8A), элемент 9 — элемент 1A следующего периода. Значит, элемент 1 находится в группе 1A, элемент 2 — в группе 2A; I верно. Провал у элемента 3 объясняется тем, что единственный p-электрон группы 3A легко отрывается, а провал у элемента 6 — первым спариванием электронов на p-орбиталях в группе 6A. Элемент 6 находится в группе 6A и имеет 6 валентных электронов; II неверно. Элемент 5 — группа 5A (ns2 np3); его p-подуровень заполнен наполовину, поэтому его энергия ионизации больше, чем у элемента 6; III верно. Считать каждый провал на графике началом нового периода — типичная ошибка.",
        "ar": "في الرسم البياني تهبط طاقة التأين من أعلى قيمة إلى أدنى قيمة بين العنصرين 8 و9، فالعنصر 8 غاز نبيل (8A) والعنصر 9 هو عنصر 1A في الدورة التالية. إذن العنصر 1 في المجموعة 1A والعنصر 2 في المجموعة 2A؛ العبارة I صحيحة. ينتج الانخفاض عند العنصر 3 عن سهولة نزع إلكترون p الوحيد في المجموعة 3A، والانخفاض عند العنصر 6 عن أول ازدواج في مدارات p في المجموعة 6A. العنصر 6 في المجموعة 6A وله 6 إلكترونات تكافؤ؛ العبارة II خاطئة. العنصر 5 في المجموعة 5A (ns2 np3) ومستواه الفرعي p نصف ممتلئ، ولذلك تكون طاقة تأينه أكبر من طاقة تأين العنصر 6؛ العبارة III صحيحة. ومن الأخطاء الشائعة عدّ كل انخفاض في الرسم بداية دورة جديدة.",
        "zh": "图中从第 8 种元素到第 9 种元素，电离能由最高值降到最低值：第 8 种是稀有气体(8A)，第 9 种是下一周期的 1A 元素。因此第 1 种元素在 1A 族，第 2 种在 2A 族；I 正确。第 3 种元素处的下降是因为 3A 族唯一的 p 电子容易失去，第 6 种元素处的下降是因为 6A 族 p 轨道中开始出现电子成对。第 6 种元素在 6A 族，有 6 个价电子；II 错误。第 5 种元素在 5A 族(ns2 np3)，p 亚层半充满，所以其电离能高于第 6 种元素；III 正确。把图中每一次下降都当成新周期的开始，是典型错误。",
        "ku": "Di grafîkê de di navbera elementên 8. û 9. de enerjiya îyonîzasyonê ji nirxa herî bilind dadikeve nirxa herî nizm: elementa 8. gaza esîl (8A) ye, elementa 9. jî elementa 1A ya periyoda din e. Ji ber vê yekê elementa 1. di 1A de, elementa 2. di 2A de ye; I rast e. Daketina li elementa 3. ji ber ku elektrona p a tenê ya koma 3A bi hêsanî tê qetandin e; daketina li elementa 6. jî ji ber cotbûna yekem a di orbîtalên p de ya koma 6A ye. Elementa 6. di koma 6A de ye û 6 elektronên wê yên valansê hene; II şaş e. Elementa 5. di koma 5A de ye (ns2 np3); binqata wê ya p nîvtijî ye, ji ber vê yekê enerjiya wê ya îyonîzasyonê ji ya elementa 6. mezintir e; III rast e. Hesibandina her daketinekê wek destpêka periyodeke nû xeletiyeke tîpîk e."
      },
      "figure": {
        "kind": "graph",
        "xLabel": {
          "tr": "Element sırası (artan atom numarası)",
          "en": "Element no. (increasing atomic number)",
          "de": "Element Nr. (steigende Ordnungszahl)",
          "fr": "N° d'élément (Z croissant)",
          "ru": "№ элемента (по росту Z)",
          "ar": "رقم العنصر (تزايد العدد الذري)",
          "zh": "元素序号（原子序数递增）",
          "ku": "Hejmara elementê (Z zêde dibe)"
        },
        "yLabel": {
          "tr": "İE₁ (kJ/mol)",
          "en": "IE₁ (kJ/mol)",
          "de": "IE₁ (kJ/mol)",
          "fr": "EI₁ (kJ/mol)",
          "ru": "ЭИ₁ (кДж/моль)",
          "ar": "IE₁ (kJ/mol)",
          "zh": "IE₁ (kJ/mol)",
          "ku": "IE₁ (kJ/mol)"
        },
        "xMax": 9.6,
        "xMin": 0.4,
        "yMax": 1700,
        "xTicks": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ],
        "yTicks": [
          400,
          800,
          1200,
          1600
        ],
        "series": [
          {
            "points": [
              [
                1,
                496
              ],
              [
                2,
                738
              ],
              [
                3,
                578
              ],
              [
                4,
                786
              ],
              [
                5,
                1012
              ],
              [
                6,
                1000
              ],
              [
                7,
                1251
              ],
              [
                8,
                1521
              ],
              [
                9,
                419
              ]
            ]
          }
        ],
        "markers": [
          {
            "x": 1,
            "y": 496,
            "label": ""
          },
          {
            "x": 2,
            "y": 738,
            "label": ""
          },
          {
            "x": 3,
            "y": 578,
            "label": ""
          },
          {
            "x": 4,
            "y": 786,
            "label": ""
          },
          {
            "x": 5,
            "y": 1012,
            "label": ""
          },
          {
            "x": 6,
            "y": 1000,
            "label": ""
          },
          {
            "x": 7,
            "y": 1251,
            "label": ""
          },
          {
            "x": 8,
            "y": 1521,
            "label": ""
          },
          {
            "x": 9,
            "y": 419,
            "label": ""
          }
        ]
      }
    },
    {
      "id": "u11-twin03",
      "stem": {
        "tr": "Bir atomdaki bir elektron için verilen (n, l, ml, ms) kuantum sayısı takımlarından hangisi mümkündür?",
        "en": "Which of the following sets of quantum numbers (n, l, ml, ms) is possible for an electron in an atom?",
        "de": "Welcher der folgenden Quantenzahlensätze (n, l, ml, ms) ist für ein Elektron in einem Atom möglich?",
        "fr": "Lequel des ensembles de nombres quantiques (n, l, ml, ms) suivants est possible pour un électron dans un atome ?",
        "ru": "Какой из приведённых наборов квантовых чисел (n, l, ml, ms) возможен для электрона в атоме?",
        "ar": "أيّ مجموعات أعداد الكم (n، l، ml، ms) الآتية ممكنة لإلكترون في ذرة؟",
        "zh": "对原子中的一个电子而言，下列哪组量子数(n, l, ml, ms)是可能的？",
        "ku": "Ji van komên hejmarên kuantumê (n, l, ml, ms) kîjan ji bo elektronekê di atomekê de gengaz e?"
      },
      "options": [
        {
          "tr": "n = 2, l = 2, ml = 0, ms = +1/2",
          "en": "n = 2, l = 2, ml = 0, ms = +1/2",
          "de": "n = 2, l = 2, ml = 0, ms = +1/2",
          "fr": "n = 2, l = 2, ml = 0, ms = +1/2",
          "ru": "n = 2, l = 2, ml = 0, ms = +1/2",
          "ar": "n = 2, l = 2, ml = 0, ms = +1/2",
          "zh": "n = 2, l = 2, ml = 0, ms = +1/2",
          "ku": "n = 2, l = 2, ml = 0, ms = +1/2"
        },
        {
          "tr": "n = 3, l = 1, ml = -2, ms = -1/2",
          "en": "n = 3, l = 1, ml = -2, ms = -1/2",
          "de": "n = 3, l = 1, ml = -2, ms = -1/2",
          "fr": "n = 3, l = 1, ml = -2, ms = -1/2",
          "ru": "n = 3, l = 1, ml = -2, ms = -1/2",
          "ar": "n = 3, l = 1, ml = -2, ms = -1/2",
          "zh": "n = 3, l = 1, ml = -2, ms = -1/2",
          "ku": "n = 3, l = 1, ml = -2, ms = -1/2"
        },
        {
          "tr": "n = 4, l = 2, ml = -2, ms = +1/2",
          "en": "n = 4, l = 2, ml = -2, ms = +1/2",
          "de": "n = 4, l = 2, ml = -2, ms = +1/2",
          "fr": "n = 4, l = 2, ml = -2, ms = +1/2",
          "ru": "n = 4, l = 2, ml = -2, ms = +1/2",
          "ar": "n = 4, l = 2, ml = -2, ms = +1/2",
          "zh": "n = 4, l = 2, ml = -2, ms = +1/2",
          "ku": "n = 4, l = 2, ml = -2, ms = +1/2"
        },
        {
          "tr": "n = 1, l = 0, ml = +1, ms = +1/2",
          "en": "n = 1, l = 0, ml = +1, ms = +1/2",
          "de": "n = 1, l = 0, ml = +1, ms = +1/2",
          "fr": "n = 1, l = 0, ml = +1, ms = +1/2",
          "ru": "n = 1, l = 0, ml = +1, ms = +1/2",
          "ar": "n = 1, l = 0, ml = +1, ms = +1/2",
          "zh": "n = 1, l = 0, ml = +1, ms = +1/2",
          "ku": "n = 1, l = 0, ml = +1, ms = +1/2"
        },
        {
          "tr": "n = 3, l = 0, ml = 0, ms = 0",
          "en": "n = 3, l = 0, ml = 0, ms = 0",
          "de": "n = 3, l = 0, ml = 0, ms = 0",
          "fr": "n = 3, l = 0, ml = 0, ms = 0",
          "ru": "n = 3, l = 0, ml = 0, ms = 0",
          "ar": "n = 3, l = 0, ml = 0, ms = 0",
          "zh": "n = 3, l = 0, ml = 0, ms = 0",
          "ku": "n = 3, l = 0, ml = 0, ms = 0"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Kurallar: l = 0 ... n - 1; ml = -l ... +l; ms = +1/2 veya -1/2. n = 2 için l en çok 1 olabilir, l = 2 olamaz. l = 1 için ml yalnızca -1, 0, +1 olabilir, -2 olamaz. l = 0 için ml yalnızca 0'dır, +1 olamaz. ms hiçbir zaman 0 olamaz. n = 4, l = 2 (4d), ml = -2, ms = +1/2 takımı tüm kurallara uyar.",
        "en": "Rules: l = 0 ... n - 1; ml = -l ... +l; ms = +1/2 or -1/2. For n = 2, l can be at most 1, not 2. For l = 1, ml can only be -1, 0, +1, not -2. For l = 0, ml is only 0, not +1. ms can never be 0. The set n = 4, l = 2 (4d), ml = -2, ms = +1/2 obeys all the rules.",
        "de": "Regeln: l = 0 ... n - 1; ml = -l ... +l; ms = +1/2 oder -1/2. Für n = 2 ist l höchstens 1, nicht 2. Für l = 1 kann ml nur -1, 0, +1 sein, nicht -2. Für l = 0 ist ml nur 0, nicht +1. ms ist nie 0. Der Satz n = 4, l = 2 (4d), ml = -2, ms = +1/2 erfüllt alle Regeln.",
        "fr": "Règles : l = 0 ... n - 1 ; ml = -l ... +l ; ms = +1/2 ou -1/2. Pour n = 2, l vaut au plus 1, pas 2. Pour l = 1, ml ne peut valoir que -1, 0, +1, pas -2. Pour l = 0, ml vaut seulement 0, pas +1. ms ne vaut jamais 0. L'ensemble n = 4, l = 2 (4d), ml = -2, ms = +1/2 respecte toutes les règles.",
        "ru": "Правила: l = 0 ... n - 1; ml = -l ... +l; ms = +1/2 или -1/2. При n = 2 l не может быть больше 1, значит l = 2 невозможно. При l = 1 ml может быть только -1, 0, +1, но не -2. При l = 0 ml равно только 0, но не +1. ms никогда не равно 0. Набор n = 4, l = 2 (4d), ml = -2, ms = +1/2 удовлетворяет всем правилам.",
        "ar": "القواعد: l = 0 ... n - 1؛ ml = -l ... +l؛ ms = +1/2 أو -1/2. عندما n = 2 تكون l على الأكثر 1 ولا يمكن أن تساوي 2. عندما l = 1 لا يأخذ ml إلا -1 أو 0 أو +1، ولا يمكن أن يساوي -2. عندما l = 0 يكون ml صفرًا فقط لا +1. ولا يساوي ms صفرًا أبدًا. المجموعة n = 4، l = 2 (4d)، ml = -2، ms = +1/2 تحقق جميع القواعد.",
        "zh": "规则：l = 0 … n - 1；ml = -l … +l；ms = +1/2 或 -1/2。n = 2 时 l 最大为 1，不能为 2。l = 1 时 ml 只能为 -1、0、+1，不能为 -2。l = 0 时 ml 只能为 0，不能为 +1。ms 永远不能为 0。n = 4、l = 2 (4d)、ml = -2、ms = +1/2 这一组符合所有规则。",
        "ku": "Qaîde: l = 0 ... n - 1; ml = -l ... +l; ms = +1/2 an -1/2. Ji bo n = 2, l herî zêde dikare 1 be, nikare 2 be. Ji bo l = 1, ml tenê dikare -1, 0, +1 be, nikare -2 be. Ji bo l = 0, ml tenê 0 ye, nikare +1 be. ms qet nikare 0 be. Koma n = 4, l = 2 (4d), ml = -2, ms = +1/2 li gorî hemû qaîdeyan e."
      }
    },
    {
      "id": "u11-twin04",
      "stem": {
        "tr": "Temel hâldeki 25Mn atomunda en az bir elektron bulunduran orbital sayısı kaçtır?",
        "en": "How many orbitals contain at least one electron in a ground-state 25Mn atom?",
        "de": "Wie viele Orbitale enthalten im 25Mn-Atom im Grundzustand mindestens ein Elektron?",
        "fr": "Combien d'orbitales contiennent au moins un électron dans un atome de 25Mn à l'état fondamental ?",
        "ru": "Сколько орбиталей атома 25Mn в основном состоянии содержат хотя бы один электрон?",
        "ar": "كم عدد المدارات التي تحوي إلكترونًا واحدًا على الأقل في ذرة 25Mn في الحالة الأرضية؟",
        "zh": "基态 25Mn 原子中至少含有一个电子的轨道有多少个？",
        "ku": "Di atoma 25Mn ya di rewşa bingehîn de çend orbîtal hene ku herî kêm elektronek tê de heye?"
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
          "tr": "7",
          "en": "7",
          "de": "7",
          "fr": "7",
          "ru": "7",
          "ar": "7",
          "zh": "7",
          "ku": "7"
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
          "tr": "13",
          "en": "13",
          "de": "13",
          "fr": "13",
          "ru": "13",
          "ar": "13",
          "zh": "13",
          "ku": "13"
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
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "25Mn: 1s2 2s2 2p6 3s2 3p6 4s2 3d5. Tam dolu orbitaller: 1s, 2s, 3s, 4s (4 tane) + 2p (3) + 3p (3) = 10. Hund kuralına göre 3d5'teki 5 elektron 5 ayrı orbitale tek tek yerleşir: 5 yarı dolu orbital. Toplam 10 + 5 = 15. 3d elektronlarını eşleştirerek 3 orbitale koyan 13, yalnızca tam dolu orbitalleri sayan 10, alt kabukları sayan 7 bulur.",
        "en": "25Mn: 1s2 2s2 2p6 3s2 3p6 4s2 3d5. Filled orbitals: 1s, 2s, 3s, 4s (4) + 2p (3) + 3p (3) = 10. By Hund's rule the 5 electrons of 3d5 occupy 5 separate orbitals singly: 5 half-filled orbitals. Total 10 + 5 = 15. Pairing the 3d electrons into 3 orbitals gives 13, counting only filled orbitals gives 10, and counting sublevels gives 7.",
        "de": "25Mn: 1s2 2s2 2p6 3s2 3p6 4s2 3d5. Vollbesetzte Orbitale: 1s, 2s, 3s, 4s (4) + 2p (3) + 3p (3) = 10. Nach der Hundschen Regel besetzen die 5 Elektronen von 3d5 einzeln 5 Orbitale: 5 halbbesetzte Orbitale. Insgesamt 10 + 5 = 15. Wer die 3d-Elektronen in 3 Orbitalen paart, erhält 13; wer nur volle Orbitale zählt, 10; wer Unterniveaus zählt, 7.",
        "fr": "25Mn : 1s2 2s2 2p6 3s2 3p6 4s2 3d5. Orbitales pleines : 1s, 2s, 3s, 4s (4) + 2p (3) + 3p (3) = 10. Selon la règle de Hund, les 5 électrons de 3d5 occupent seuls 5 orbitales : 5 orbitales à moitié remplies. Total 10 + 5 = 15. Apparier les électrons 3d dans 3 orbitales donne 13, ne compter que les orbitales pleines donne 10, compter les sous-couches donne 7.",
        "ru": "25Mn: 1s2 2s2 2p6 3s2 3p6 4s2 3d5. Полностью заполненные орбитали: 1s, 2s, 3s, 4s (4) + 2p (3) + 3p (3) = 10. По правилу Хунда 5 электронов 3d5 по одному занимают 5 орбиталей: это 5 наполовину заполненных орбиталей. Всего 10 + 5 = 15. Если спарить 3d-электроны на 3 орбиталях, получится 13; если считать только заполненные орбитали — 10; если считать подуровни — 7.",
        "ar": "25Mn: 1s2 2s2 2p6 3s2 3p6 4s2 3d5. المدارات الممتلئة: 1s و2s و3s و4s (4) + 2p (3) + 3p (3) = 10. وفق قاعدة هوند تشغل إلكترونات 3d5 الخمسة خمسة مدارات منفصلة فرادى: 5 مدارات نصف ممتلئة. المجموع 10 + 5 = 15. من يزاوج إلكترونات 3d في 3 مدارات يحصل على 13، ومن يعدّ المدارات الممتلئة فقط يحصل على 10، ومن يعدّ المستويات الفرعية يحصل على 7.",
        "zh": "25Mn：1s2 2s2 2p6 3s2 3p6 4s2 3d5。全充满轨道：1s、2s、3s、4s(4 个) + 2p(3 个) + 3p(3 个) = 10。按洪特规则，3d5 的 5 个电子各占一个轨道：5 个半充满轨道。共 10 + 5 = 15。若把 3d 电子成对放入 3 个轨道会得到 13，只数全充满轨道得到 10，数亚层得到 7。",
        "ku": "25Mn: 1s2 2s2 2p6 3s2 3p6 4s2 3d5. Orbîtalên tamtijî: 1s, 2s, 3s, 4s (4) + 2p (3) + 3p (3) = 10. Li gorî qaîdeya Hund 5 elektronên 3d5 yek bi yek li 5 orbîtalên cuda bi cih dibin: 5 orbîtalên nîvtijî. Bi tevahî 10 + 5 = 15. Yê ku elektronên 3d cot dike û li 3 orbîtalan bi cih dike 13, yê ku tenê orbîtalên tamtijî dijmêre 10, yê ku binqatan dijmêre 7 dibîne."
      }
    },
    {
      "id": "u11-twin05",
      "stem": {
        "tr": "29Cu+ iyonunun temel hâl elektron dizilimi aşağıdakilerden hangisidir? (18Ar)",
        "en": "Which of the following is the ground-state electron configuration of the 29Cu+ ion? (18Ar)",
        "de": "Welche der folgenden ist die Elektronenkonfiguration des 29Cu+-Ions im Grundzustand? (18Ar)",
        "fr": "Laquelle des configurations suivantes est la configuration électronique de l'ion 29Cu+ à l'état fondamental ? (18Ar)",
        "ru": "Какая из приведённых электронных конфигураций соответствует иону 29Cu+ в основном состоянии? (18Ar)",
        "ar": "أيّ مما يأتي هو التوزيع الإلكتروني للأيون 29Cu+ في الحالة الأرضية؟ (18Ar)",
        "zh": "29Cu+ 离子的基态电子排布是下列哪一项？(18Ar)",
        "ku": "Rêzkirina elektronan a îyona 29Cu+ di rewşa bingehîn de kîjan e? (18Ar)"
      },
      "options": [
        {
          "tr": "[Ar] 3d10",
          "en": "[Ar] 3d10",
          "de": "[Ar] 3d10",
          "fr": "[Ar] 3d10",
          "ru": "[Ar] 3d10",
          "ar": "[Ar] 3d10",
          "zh": "[Ar] 3d10",
          "ku": "[Ar] 3d10"
        },
        {
          "tr": "[Ar] 4s1 3d9",
          "en": "[Ar] 4s1 3d9",
          "de": "[Ar] 4s1 3d9",
          "fr": "[Ar] 4s1 3d9",
          "ru": "[Ar] 4s1 3d9",
          "ar": "[Ar] 4s1 3d9",
          "zh": "[Ar] 4s1 3d9",
          "ku": "[Ar] 4s1 3d9"
        },
        {
          "tr": "[Ar] 4s2 3d8",
          "en": "[Ar] 4s2 3d8",
          "de": "[Ar] 4s2 3d8",
          "fr": "[Ar] 4s2 3d8",
          "ru": "[Ar] 4s2 3d8",
          "ar": "[Ar] 4s2 3d8",
          "zh": "[Ar] 4s2 3d8",
          "ku": "[Ar] 4s2 3d8"
        },
        {
          "tr": "[Ar] 4s2 3d9",
          "en": "[Ar] 4s2 3d9",
          "de": "[Ar] 4s2 3d9",
          "fr": "[Ar] 4s2 3d9",
          "ru": "[Ar] 4s2 3d9",
          "ar": "[Ar] 4s2 3d9",
          "zh": "[Ar] 4s2 3d9",
          "ku": "[Ar] 4s2 3d9"
        },
        {
          "tr": "[Ar] 4s1 3d10",
          "en": "[Ar] 4s1 3d10",
          "de": "[Ar] 4s1 3d10",
          "fr": "[Ar] 4s1 3d10",
          "ru": "[Ar] 4s1 3d10",
          "ar": "[Ar] 4s1 3d10",
          "zh": "[Ar] 4s1 3d10",
          "ku": "[Ar] 4s1 3d10"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Cu atomu küresel simetri kararlılığı nedeniyle 4s2 3d9 yerine [Ar] 4s1 3d10 dizilimine sahiptir. Katyon oluşurken elektron önce en dış katmandaki 4s orbitalinden koparılır; 28 elektronlu Cu+ = [Ar] 3d10. [Ar] 4s1 3d10 nötr Cu atomunun dizilimidir; [Ar] 4s2 3d8 ise Cu'yu 4s2 3d9 kabul edip elektronu 3d'den koparmanın sonucudur.",
        "en": "Because of spherical-symmetry stability, the Cu atom is [Ar] 4s1 3d10 rather than 4s2 3d9. When a cation forms, the electron is removed first from the outermost 4s orbital; Cu+ with 28 electrons = [Ar] 3d10. [Ar] 4s1 3d10 is the neutral Cu atom; [Ar] 4s2 3d8 comes from taking Cu as 4s2 3d9 and removing the electron from 3d.",
        "de": "Wegen der Stabilität der Kugelsymmetrie hat das Cu-Atom [Ar] 4s1 3d10 statt 4s2 3d9. Bei der Kationenbildung wird das Elektron zuerst aus dem äußersten 4s-Orbital entfernt; Cu+ mit 28 Elektronen = [Ar] 3d10. [Ar] 4s1 3d10 ist das neutrale Cu-Atom; [Ar] 4s2 3d8 entsteht, wenn man Cu als 4s2 3d9 ansetzt und das Elektron aus 3d entfernt.",
        "fr": "En raison de la stabilité liée à la symétrie sphérique, l'atome de Cu est [Ar] 4s1 3d10 et non 4s2 3d9. Lors de la formation d'un cation, l'électron est d'abord retiré de l'orbitale 4s la plus externe ; Cu+ à 28 électrons = [Ar] 3d10. [Ar] 4s1 3d10 est l'atome de Cu neutre ; [Ar] 4s2 3d8 vient du fait de prendre Cu comme 4s2 3d9 et de retirer l'électron de 3d.",
        "ru": "Благодаря устойчивости сферически симметричной конфигурации атом Cu имеет конфигурацию [Ar] 4s1 3d10, а не 4s2 3d9. При образовании катиона электрон сначала отрывается с внешней 4s-орбитали; у Cu+ 28 электронов: [Ar] 3d10. [Ar] 4s1 3d10 — конфигурация нейтрального атома Cu; [Ar] 4s2 3d8 получится, если принять конфигурацию Cu за 4s2 3d9 и оторвать электрон с 3d.",
        "ar": "بسبب استقرار التناظر الكروي يكون توزيع ذرة Cu هو [Ar] 4s1 3d10 بدلًا من 4s2 3d9. عند تكوّن الأيون الموجب يُنزع الإلكترون أولًا من المدار 4s الأبعد؛ فيكون Cu+ ذو الـ 28 إلكترونًا = [Ar] 3d10. أما [Ar] 4s1 3d10 فهو ذرة Cu المتعادلة، و[Ar] 4s2 3d8 ناتج عن اعتبار Cu بتوزيع 4s2 3d9 ونزع الإلكترون من 3d.",
        "zh": "由于球形对称带来的稳定性，Cu 原子的排布是 [Ar] 4s1 3d10，而不是 4s2 3d9。形成阳离子时先失去最外层 4s 轨道上的电子；含 28 个电子的 Cu+ = [Ar] 3d10。[Ar] 4s1 3d10 是中性 Cu 原子；[Ar] 4s2 3d8 是把 Cu 当作 4s2 3d9 并从 3d 失去电子得到的错误结果。",
        "ku": "Ji ber aramiya sîmetriya gewherî, rêzkirina atoma Cu li şûna 4s2 3d9 [Ar] 4s1 3d10 e. Dema katyon çêdibe, elektron pêşî ji orbîtala 4s ya qata herî derve tê qetandin; Cu+ bi 28 elektronan = [Ar] 3d10. [Ar] 4s1 3d10 rêzkirina atoma Cu ya bêbar e; [Ar] 4s2 3d8 jî encama wê ye ku Cu wek 4s2 3d9 were qebûlkirin û elektron ji 3d were qetandin."
      }
    },
    {
      "id": "u11-twin06",
      "stem": {
        "tr": "Temel hâl elektron dizilimi 1s2 2s2 2p6 3s2 3p6 4s2 3d3 olan X atomunun periyodik sistemdeki yeri için aşağıdakilerden hangisi doğrudur?",
        "en": "Which of the following correctly gives the position in the periodic table of atom X, whose ground-state configuration is 1s2 2s2 2p6 3s2 3p6 4s2 3d3?",
        "de": "Welche Angabe zur Stellung des Atoms X im Periodensystem ist richtig, wenn seine Grundzustandskonfiguration 1s2 2s2 2p6 3s2 3p6 4s2 3d3 lautet?",
        "fr": "Laquelle des propositions suivantes donne correctement la position dans le tableau périodique de l'atome X, dont la configuration à l'état fondamental est 1s2 2s2 2p6 3s2 3p6 4s2 3d3 ?",
        "ru": "Атом X в основном состоянии имеет электронную конфигурацию 1s2 2s2 2p6 3s2 3p6 4s2 3d3. Какое утверждение о его положении в периодической системе верно?",
        "ar": "أيّ مما يأتي صحيح بشأن موقع الذرة X في الجدول الدوري إذا كان توزيعها الإلكتروني في الحالة الأرضية 1s2 2s2 2p6 3s2 3p6 4s2 3d3؟",
        "zh": "基态电子排布为 1s2 2s2 2p6 3s2 3p6 4s2 3d3 的 X 原子在元素周期表中的位置，下列哪项正确？",
        "ku": "Rêzkirina elektronan a atoma X di rewşa bingehîn de 1s2 2s2 2p6 3s2 3p6 4s2 3d3 e. Derbarê cihê X di tabloya periyodîk de kîjan rast e?"
      },
      "options": [
        {
          "tr": "3. periyot, 3A grubu, p bloku",
          "en": "Period 3, group 3A, p-block",
          "de": "3. Periode, Gruppe 3A, p-Block",
          "fr": "3e période, groupe 3A, bloc p",
          "ru": "3-й период, группа 3A, p-блок",
          "ar": "الدورة الثالثة، المجموعة 3A، الفئة p",
          "zh": "第 3 周期，3A 族，p 区",
          "ku": "Periyoda 3., koma 3A, bloka p"
        },
        {
          "tr": "4. periyot, 3B grubu, d bloku",
          "en": "Period 4, group 3B, d-block",
          "de": "4. Periode, Gruppe 3B, d-Block",
          "fr": "4e période, groupe 3B, bloc d",
          "ru": "4-й период, группа 3B, d-блок",
          "ar": "الدورة الرابعة، المجموعة 3B، الفئة d",
          "zh": "第 4 周期，3B 族，d 区",
          "ku": "Periyoda 4., koma 3B, bloka d"
        },
        {
          "tr": "4. periyot, 2A grubu, s bloku",
          "en": "Period 4, group 2A, s-block",
          "de": "4. Periode, Gruppe 2A, s-Block",
          "fr": "4e période, groupe 2A, bloc s",
          "ru": "4-й период, группа 2A, s-блок",
          "ar": "الدورة الرابعة، المجموعة 2A، الفئة s",
          "zh": "第 4 周期，2A 族，s 区",
          "ku": "Periyoda 4., koma 2A, bloka s"
        },
        {
          "tr": "4. periyot, 5B grubu, d bloku",
          "en": "Period 4, group 5B, d-block",
          "de": "4. Periode, Gruppe 5B, d-Block",
          "fr": "4e période, groupe 5B, bloc d",
          "ru": "4-й период, группа 5B, d-блок",
          "ar": "الدورة الرابعة، المجموعة 5B، الفئة d",
          "zh": "第 4 周期，5B 族，d 区",
          "ku": "Periyoda 4., koma 5B, bloka d"
        },
        {
          "tr": "3. periyot, 5B grubu, d bloku",
          "en": "Period 3, group 5B, d-block",
          "de": "3. Periode, Gruppe 5B, d-Block",
          "fr": "3e période, groupe 5B, bloc d",
          "ru": "3-й период, группа 5B, d-блок",
          "ar": "الدورة الثالثة، المجموعة 5B، الفئة d",
          "zh": "第 3 周期，5B 族，d 区",
          "ku": "Periyoda 3., koma 5B, bloka d"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "En büyük baş kuantum sayısı 4 olduğundan X 4. periyottadır (3d'deki 3 periyodu göstermez). Dizilim d orbitaliyle bittiği için X d bloku geçiş metalidir. B grubu numarası ns ve (n-1)d elektronlarının toplamıdır: 2 + 3 = 5, yani 5B (5. grup); X = 23V. Yalnızca 3d elektronlarını sayan 3B'yi, sadece 4s2'ye bakan 2A'yı bulur.",
        "en": "The largest principal quantum number is 4, so X is in period 4 (the 3 in 3d does not give the period). The configuration ends in a d orbital, so X is a d-block transition metal. The B-group number is the sum of ns and (n-1)d electrons: 2 + 3 = 5, i.e. group 5B (group 5); X = 23V. Counting only the 3d electrons gives 3B, and looking only at 4s2 gives 2A.",
        "de": "Die größte Hauptquantenzahl ist 4, also steht X in der 4. Periode (die 3 in 3d gibt nicht die Periode an). Die Konfiguration endet mit einem d-Orbital, X ist also ein Übergangsmetall des d-Blocks. Die B-Gruppennummer ist die Summe der ns- und (n-1)d-Elektronen: 2 + 3 = 5, also Gruppe 5B (Gruppe 5); X = 23V. Wer nur die 3d-Elektronen zählt, erhält 3B; wer nur 4s2 betrachtet, 2A.",
        "fr": "Le plus grand nombre quantique principal est 4, donc X est dans la 4e période (le 3 de 3d n'indique pas la période). La configuration se termine par une orbitale d : X est un métal de transition du bloc d. Le numéro du groupe B est la somme des électrons ns et (n-1)d : 2 + 3 = 5, soit le groupe 5B (groupe 5) ; X = 23V. Ne compter que les électrons 3d donne 3B ; ne regarder que 4s2 donne 2A.",
        "ru": "Наибольшее главное квантовое число равно 4, значит X находится в 4-м периоде (цифра 3 в обозначении 3d не указывает период). Конфигурация оканчивается на d-подуровень, поэтому X — переходный металл d-блока. Номер B-группы равен сумме ns- и (n-1)d-электронов: 2 + 3 = 5, то есть группа 5B (5-я группа); X = 23V. Если считать только 3d-электроны, получится 3B, а если смотреть только на 4s2 — 2A.",
        "ar": "أكبر عدد كم رئيس هو 4، لذا تقع X في الدورة الرابعة (الرقم 3 في 3d لا يدل على الدورة). ينتهي التوزيع بمدار d، فـ X فلز انتقالي من الفئة d. رقم المجموعة B هو مجموع إلكترونات ns و(n-1)d: 2 + 3 = 5، أي المجموعة 5B (المجموعة 5)؛ X = 23V. من يعدّ إلكترونات 3d فقط يحصل على 3B، ومن ينظر إلى 4s2 فقط يحصل على 2A.",
        "zh": "最大主量子数为 4，所以 X 位于第 4 周期(3d 中的 3 不代表周期)。排布以 d 轨道结尾，X 是 d 区过渡金属。B 族序数等于 ns 与 (n-1)d 电子数之和：2 + 3 = 5，即 5B 族(第 5 族)；X = 23V。只数 3d 电子会得到 3B，只看 4s2 会得到 2A。",
        "ku": "Hejmara kuantumê ya sereke ya herî mezin 4 e, loma X di periyoda 4. de ye (3-ya di 3d de periyodê nîşan nade). Rêzkirin bi orbîtala d diqede, loma X metaleke veguhêz a bloka d ye. Hejmara koma B berhevoka elektronên ns û (n-1)d ye: 2 + 3 = 5, ango koma 5B (koma 5.); X = 23V. Yê ku tenê elektronên 3d dijmêre 3B, yê ku tenê li 4s2 dinêre 2A dibîne."
      }
    },
    {
      "id": "u11-twin07",
      "stem": {
        "tr": "Baş kuantum sayısı n = 3 olan enerji düzeyi ile ilgili; I. En fazla 18 elektron alabilir. II. Bu düzeydeki orbitallerin l değerleri 0, 1 ve 2 olabilir. III. Bu düzeyde f orbitalleri de bulunur. yargılarından hangileri doğrudur?",
        "en": "Regarding the energy level with principal quantum number n = 3: I. It can hold at most 18 electrons. II. The orbitals in this level can have l values of 0, 1 and 2. III. This level also contains f orbitals. Which of these statements are correct?",
        "de": "Zum Energieniveau mit der Hauptquantenzahl n = 3: I. Es kann höchstens 18 Elektronen aufnehmen. II. Die Orbitale dieses Niveaus können l = 0, 1 und 2 haben. III. Auf diesem Niveau gibt es auch f-Orbitale. Welche Aussagen sind richtig?",
        "fr": "À propos du niveau d'énergie de nombre quantique principal n = 3 : I. Il peut contenir au maximum 18 électrons. II. Les orbitales de ce niveau peuvent avoir l = 0, 1 et 2. III. Ce niveau contient aussi des orbitales f. Lesquelles de ces affirmations sont correctes ?",
        "ru": "Даны утверждения об энергетическом уровне с главным квантовым числом n = 3: I. Он может вместить не более 18 электронов. II. Орбитали этого уровня могут иметь l = 0, 1 и 2. III. На этом уровне есть и f-орбитали. Какие из них верны?",
        "ar": "بخصوص مستوى الطاقة ذي عدد الكم الرئيس n = 3: I. يتسع لـ 18 إلكترونًا على الأكثر. II. يمكن أن تكون قيم l لمدارات هذا المستوى 0 و1 و2. III. يحتوي هذا المستوى أيضًا على مدارات f. أيّ هذه العبارات صحيحة؟",
        "zh": "关于主量子数 n = 3 的能层：I. 最多可容纳 18 个电子。II. 该能层轨道的 l 值可以是 0、1 和 2。III. 该能层也含有 f 轨道。以上说法中哪些正确？",
        "ku": "Derbarê asta enerjiyê ya ku hejmara kuantumê ya sereke n = 3 e: I. Herî zêde 18 elektronan digire. II. Nirxên l yên orbîtalên vê astê dikarin 0, 1 û 2 bin. III. Di vê astê de orbîtalên f jî hene. Kîjan ji van gotinan rast in?"
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
      "correctIndex": 1,
      "explanation": {
        "tr": "I doğru: bir enerji düzeyinin elektron kapasitesi 2n² = 2 · 9 = 18'dir (3s2 3p6 3d10). II doğru: l, 0'dan n - 1'e kadar değer alır; n = 3 için l = 0 (s), 1 (p), 2 (d). III yanlış: f orbitali l = 3 gerektirir, bu da ancak n ≥ 4 olduğunda mümkündür.",
        "en": "I is true: the electron capacity of a level is 2n² = 2 · 9 = 18 (3s2 3p6 3d10). II is true: l runs from 0 to n - 1; for n = 3, l = 0 (s), 1 (p), 2 (d). III is false: an f orbital requires l = 3, which is possible only when n ≥ 4.",
        "de": "I ist richtig: Die Elektronenkapazität eines Niveaus beträgt 2n² = 2 · 9 = 18 (3s2 3p6 3d10). II ist richtig: l läuft von 0 bis n - 1; für n = 3 ist l = 0 (s), 1 (p), 2 (d). III ist falsch: Ein f-Orbital erfordert l = 3, was erst für n ≥ 4 möglich ist.",
        "fr": "I est vraie : la capacité électronique d'un niveau est 2n² = 2 · 9 = 18 (3s2 3p6 3d10). II est vraie : l varie de 0 à n - 1 ; pour n = 3, l = 0 (s), 1 (p), 2 (d). III est fausse : une orbitale f exige l = 3, ce qui n'est possible que pour n ≥ 4.",
        "ru": "I верно: ёмкость уровня равна 2n² = 2 · 9 = 18 электронов (3s2 3p6 3d10). II верно: l принимает значения от 0 до n - 1; при n = 3 l = 0 (s), 1 (p), 2 (d). III неверно: f-орбиталь требует l = 3, что возможно только при n ≥ 4.",
        "ar": "I صحيحة: سعة مستوى الطاقة 2n² = 2 · 9 = 18 إلكترونًا (3s2 3p6 3d10). II صحيحة: تأخذ l القيم من 0 إلى n - 1؛ وعندما n = 3 تكون l = 0 (s) و1 (p) و2 (d). III خاطئة: يتطلب المدار f القيمة l = 3، وهذا لا يمكن إلا عندما n ≥ 4.",
        "zh": "I 正确：一个能层的电子容量为 2n² = 2 · 9 = 18 (3s2 3p6 3d10)。II 正确：l 取 0 到 n - 1；n = 3 时 l = 0 (s)、1 (p)、2 (d)。III 错误：f 轨道需要 l = 3，只有 n ≥ 4 时才可能。",
        "ku": "I rast e: kapasîteya elektronan a astekê 2n² = 2 · 9 = 18 e (3s2 3p6 3d10). II rast e: l ji 0 heta n - 1 nirx digire; ji bo n = 3, l = 0 (s), 1 (p), 2 (d). III şaş e: orbîtala f l = 3 dixwaze, ev jî tenê dema n ≥ 4 be gengaz e."
      }
    },
    {
      "id": "u11-twin08",
      "stem": {
        "tr": "Tabloda 3. periyotta bulunan X, Y ve Z elementlerinin ilk dört iyonlaşma enerjisi (kJ/mol) verilmiştir.\nI. Atom numarası en büyük olan Z'dir.\nII. Y'nin bileşiklerinde oluşturduğu kararlı iyon Y2+ iyonudur.\nIII. Atom yarıçapı en büyük olan Y'dir.\nyargılarından hangileri doğrudur?",
        "en": "The table gives the first four ionization energies (kJ/mol) of elements X, Y and Z, which are in period 3. Which of the following statements are true?\nI. Z has the largest atomic number.\nII. The stable ion that Y forms in its compounds is Y2+.\nIII. Y has the largest atomic radius.",
        "de": "Die Tabelle nennt die ersten vier Ionisierungsenergien (kJ/mol) der Elemente X, Y und Z aus der 3. Periode. Welche Aussagen sind richtig?\nI. Z hat die größte Ordnungszahl.\nII. Das stabile Ion, das Y in seinen Verbindungen bildet, ist Y2+.\nIII. Y hat den größten Atomradius.",
        "fr": "Le tableau donne les quatre premières énergies d'ionisation (kJ/mol) des éléments X, Y et Z de la 3e période. Quelles affirmations sont vraies ?\nI. Z a le plus grand numéro atomique.\nII. L'ion stable que forme Y dans ses composés est Y2+.\nIII. Y a le plus grand rayon atomique.",
        "ru": "В таблице приведены первые четыре энергии ионизации (кДж/моль) элементов X, Y и Z 3-го периода. Какие утверждения верны?\nI. Наибольший порядковый номер у Z.\nII. В соединениях Y образует устойчивый ион Y2+.\nIII. Наибольший атомный радиус у Y.",
        "ar": "يبيّن الجدول طاقات التأين الأربع الأولى (kJ/mol) للعناصر X وY وZ الواقعة في الدورة الثالثة. أيّ العبارات الآتية صحيحة؟\nI. العدد الذري الأكبر هو للعنصر Z.\nII. الأيون المستقر الذي يكوّنه Y في مركباته هو Y2+.\nIII. نصف القطر الذري الأكبر هو للعنصر Y.",
        "zh": "表中给出了第 3 周期元素 X、Y、Z 的前四级电离能(kJ/mol)。下列说法中哪些正确？\nI. 原子序数最大的是 Z。\nII. Y 在化合物中形成的稳定离子是 Y2+。\nIII. 原子半径最大的是 Y。",
        "ku": "Di tabloyê de çar enerjiyên îyonîzasyonê yên yekem (kJ/mol) ên elementên X, Y û Z yên di periyoda 3. de hatine dayîn. Kîjan ji van gotinan rast in?\nI. Hejmara atomî ya herî mezin a Z ye.\nII. Îyona aram a ku Y di pêkhateyên xwe de çêdike Y2+ e.\nIII. Nîvçapa atomî ya herî mezin a Y ye."
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
        "tr": "Büyük sıçrama, değerlik elektronları bittikten sonra iç katmandan elektron koparılırken görülür. X'te sıçrama İE1'den İE2'ye (496 → 4562), Y'de İE2'den İE3'e (1451 → 7733), Z'de İE3'ten İE4'e (2745 → 11577) olur. Bu durumda X 1A (Na, Z = 11), Y 2A (Mg, Z = 12), Z 3A (Al, Z = 13) grubundadır. I doğrudur: Z'nin İE1 değeri (578) Y'ninkinden (738) küçük olsa da atom numarası en büyük olan Z'dir; 3A'nın İE1 değeri 2A'dan küçüktür. II doğrudur: Y iki değerlik elektronunu vererek Y2+ iyonu oluşturur. III yanlıştır: aynı periyotta soldan sağa atom yarıçapı küçüldüğünden en büyük yarıçap X'indir. İE1'i büyük olanın atom numarasını da büyük sanmak tipik bir hatadır.",
        "en": "The big jump appears when, after the valence electrons are gone, an electron has to be removed from an inner shell. For X the jump is from IE1 to IE2 (496 → 4562), for Y from IE2 to IE3 (1451 → 7733), for Z from IE3 to IE4 (2745 → 11577). So X is in group 1A (Na, Z = 11), Y in 2A (Mg, Z = 12) and Z in 3A (Al, Z = 13). I is true: although Z's IE1 (578) is smaller than Y's (738), Z has the largest atomic number; the IE1 of group 3A is lower than that of 2A. II is true: Y gives up its two valence electrons to form Y2+. III is false: atomic radius decreases from left to right across a period, so X has the largest radius. Assuming that the element with the higher IE1 also has the higher atomic number is a typical mistake.",
        "de": "Der große Sprung tritt auf, wenn nach den Valenzelektronen ein Elektron aus einer inneren Schale entfernt werden muss. Bei X liegt der Sprung zwischen IE1 und IE2 (496 → 4562), bei Y zwischen IE2 und IE3 (1451 → 7733), bei Z zwischen IE3 und IE4 (2745 → 11577). X steht also in Gruppe 1A (Na, Z = 11), Y in 2A (Mg, Z = 12) und Z in 3A (Al, Z = 13). I ist richtig: Obwohl die IE1 von Z (578) kleiner ist als die von Y (738), hat Z die größte Ordnungszahl; die IE1 der Gruppe 3A ist kleiner als die von 2A. II ist richtig: Y gibt seine zwei Valenzelektronen ab und bildet Y2+. III ist falsch: Innerhalb einer Periode nimmt der Atomradius von links nach rechts ab, den größten Radius hat X. Ein typischer Fehler ist anzunehmen, das Element mit der höheren IE1 habe auch die höhere Ordnungszahl.",
        "fr": "Le grand saut apparaît lorsqu'après les électrons de valence il faut arracher un électron d'une couche interne. Pour X, le saut se situe entre EI1 et EI2 (496 → 4562), pour Y entre EI2 et EI3 (1451 → 7733), pour Z entre EI3 et EI4 (2745 → 11577). X est donc dans le groupe 1A (Na, Z = 11), Y dans le groupe 2A (Mg, Z = 12) et Z dans le groupe 3A (Al, Z = 13). I est vraie : bien que l'EI1 de Z (578) soit inférieure à celle de Y (738), c'est Z qui a le plus grand numéro atomique ; l'EI1 du groupe 3A est inférieure à celle du groupe 2A. II est vraie : Y cède ses deux électrons de valence et forme Y2+. III est fausse : dans une période, le rayon atomique diminue de gauche à droite, c'est donc X qui a le plus grand rayon. Supposer que l'élément de plus grande EI1 a aussi le plus grand numéro atomique est une erreur typique.",
        "ru": "Большой скачок наблюдается, когда после валентных электронов приходится отрывать электрон внутреннего слоя. У X скачок между ЭИ1 и ЭИ2 (496 → 4562), у Y — между ЭИ2 и ЭИ3 (1451 → 7733), у Z — между ЭИ3 и ЭИ4 (2745 → 11577). Значит, X — группа 1A (Na, Z = 11), Y — 2A (Mg, Z = 12), Z — 3A (Al, Z = 13). I верно: хотя ЭИ1 у Z (578) меньше, чем у Y (738), наибольший порядковый номер у Z; ЭИ1 элементов группы 3A меньше, чем у 2A. II верно: Y отдаёт два валентных электрона и образует Y2+. III неверно: в периоде атомный радиус уменьшается слева направо, поэтому наибольший радиус у X. Считать, что у элемента с большей ЭИ1 и порядковый номер больше, — типичная ошибка.",
        "ar": "تظهر القفزة الكبيرة عندما يلزم نزع إلكترون من غلاف داخلي بعد نفاد إلكترونات التكافؤ. في X تكون القفزة بين IE1 وIE2 (496 → 4562)، وفي Y بين IE2 وIE3 (1451 → 7733)، وفي Z بين IE3 وIE4 (2745 → 11577). إذن X في المجموعة 1A (Na، Z = 11) وY في 2A (Mg، Z = 12) وZ في 3A (Al، Z = 13). العبارة I صحيحة: مع أن IE1 للعنصر Z (578) أصغر منها للعنصر Y (738)، فإن العدد الذري الأكبر هو لـ Z، لأن IE1 لعناصر 3A أصغر منها لعناصر 2A. العبارة II صحيحة: يفقد Y إلكتروني التكافؤ فيكوّن Y2+. العبارة III خاطئة: في الدورة الواحدة يقل نصف القطر الذري من اليسار إلى اليمين، فالأكبر هو X. ومن الأخطاء الشائعة الظن أن العنصر ذا IE1 الأكبر له العدد الذري الأكبر.",
        "zh": "当价电子失去后需从内层失去电子时，电离能出现大幅跃升。X 的跃升在 IE1 与 IE2 之间(496 → 4562)，Y 在 IE2 与 IE3 之间(1451 → 7733)，Z 在 IE3 与 IE4 之间(2745 → 11577)。所以 X 在 1A 族(Na，Z = 11)，Y 在 2A 族(Mg，Z = 12)，Z 在 3A 族(Al，Z = 13)。I 正确：虽然 Z 的 IE1(578)小于 Y 的(738)，但原子序数最大的是 Z；3A 族的 IE1 小于 2A 族。II 正确：Y 失去两个价电子形成 Y2+。III 错误：同周期从左到右原子半径减小，半径最大的是 X。认为 IE1 越大的元素原子序数也越大，是典型错误。",
        "ku": "Bazdana mezin dema ku piştî elektronên valansê divê elektronek ji qateke hundirîn were qetandin xuya dibe. Li X bazdan di navbera IE1 û IE2 de ye (496 → 4562), li Y di navbera IE2 û IE3 de (1451 → 7733), li Z di navbera IE3 û IE4 de (2745 → 11577). Ji ber vê yekê X di koma 1A de (Na, Z = 11), Y di 2A de (Mg, Z = 12) û Z di 3A de (Al, Z = 13) ye. I rast e: her çend IE1-a Z (578) ji ya Y (738) biçûktir be jî, hejmara atomî ya herî mezin a Z ye; IE1-a koma 3A ji ya 2A biçûktir e. II rast e: Y du elektronên xwe yên valansê dide û Y2+ çêdike. III şaş e: di periyodekê de ji çepê ber bi rastê nîvçapa atomî biçûk dibe, ji ber vê yekê nîvçapa herî mezin a X ye. Hesibandina ku elementa bi IE1-a mezintir xwedî hejmara atomî ya mezintir e xeletiyeke tîpîk e."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Element",
            "en": "Element",
            "de": "Element",
            "fr": "Élément",
            "ru": "Элемент",
            "ar": "العنصر",
            "zh": "元素",
            "ku": "Element"
          },
          {
            "tr": "İE₁",
            "en": "IE₁",
            "de": "IE₁",
            "fr": "EI₁",
            "ru": "ЭИ₁",
            "ar": "IE₁",
            "zh": "IE₁",
            "ku": "IE₁"
          },
          {
            "tr": "İE₂",
            "en": "IE₂",
            "de": "IE₂",
            "fr": "EI₂",
            "ru": "ЭИ₂",
            "ar": "IE₂",
            "zh": "IE₂",
            "ku": "IE₂"
          },
          {
            "tr": "İE₃",
            "en": "IE₃",
            "de": "IE₃",
            "fr": "EI₃",
            "ru": "ЭИ₃",
            "ar": "IE₃",
            "zh": "IE₃",
            "ku": "IE₃"
          },
          {
            "tr": "İE₄",
            "en": "IE₄",
            "de": "IE₄",
            "fr": "EI₄",
            "ru": "ЭИ₄",
            "ar": "IE₄",
            "zh": "IE₄",
            "ku": "IE₄"
          }
        ],
        "rows": [
          [
            "X",
            "496",
            "4562",
            "6910",
            "9543"
          ],
          [
            "Y",
            "738",
            "1451",
            "7733",
            "10543"
          ],
          [
            "Z",
            "578",
            "1817",
            "2745",
            "11577"
          ]
        ],
        "caption": {
          "tr": "İyonlaşma enerjileri kJ/mol cinsindendir.",
          "en": "Ionization energies in kJ/mol.",
          "de": "Ionisierungsenergien in kJ/mol.",
          "fr": "Énergies d'ionisation en kJ/mol.",
          "ru": "Энергии ионизации в кДж/моль.",
          "ar": "طاقات التأين بوحدة kJ/mol.",
          "zh": "电离能单位为 kJ/mol。",
          "ku": "Enerjiyên îyonîzasyonê bi kJ/mol in."
        }
      }
    },
    {
      "id": "u11-twin09",
      "stem": {
        "tr": "8O2-, 9F-, 11Na+ ve 12Mg2+ taneciklerinin yarıçaplarının büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir?",
        "en": "Which of the following ranks the radii of the species 8O2-, 9F-, 11Na+ and 12Mg2+ from largest to smallest?",
        "de": "Welche Reihenfolge gibt die Radien der Teilchen 8O2-, 9F-, 11Na+ und 12Mg2+ vom größten zum kleinsten an?",
        "fr": "Lequel des classements suivants range les rayons des espèces 8O2-, 9F-, 11Na+ et 12Mg2+ du plus grand au plus petit ?",
        "ru": "В каком ряду радиусы частиц 8O2-, 9F-, 11Na+ и 12Mg2+ расположены в порядке убывания?",
        "ar": "أيّ مما يأتي يرتب أنصاف أقطار الدقائق 8O2- و9F- و11Na+ و12Mg2+ من الأكبر إلى الأصغر؟",
        "zh": "8O2-、9F-、11Na+ 和 12Mg2+ 的半径由大到小的顺序是下列哪一项？",
        "ku": "Rêza nîvçapên perçeyên 8O2-, 9F-, 11Na+ û 12Mg2+ ji ya herî mezin ber bi ya herî piçûk kîjan e?"
      },
      "options": [
        {
          "tr": "Mg2+ > Na+ > F- > O2-",
          "en": "Mg2+ > Na+ > F- > O2-",
          "de": "Mg2+ > Na+ > F- > O2-",
          "fr": "Mg2+ > Na+ > F- > O2-",
          "ru": "Mg2+ > Na+ > F- > O2-",
          "ar": "Mg2+ > Na+ > F- > O2-",
          "zh": "Mg2+ > Na+ > F- > O2-",
          "ku": "Mg2+ > Na+ > F- > O2-"
        },
        {
          "tr": "Na+ > Mg2+ > O2- > F-",
          "en": "Na+ > Mg2+ > O2- > F-",
          "de": "Na+ > Mg2+ > O2- > F-",
          "fr": "Na+ > Mg2+ > O2- > F-",
          "ru": "Na+ > Mg2+ > O2- > F-",
          "ar": "Na+ > Mg2+ > O2- > F-",
          "zh": "Na+ > Mg2+ > O2- > F-",
          "ku": "Na+ > Mg2+ > O2- > F-"
        },
        {
          "tr": "O2- > F- > Na+ > Mg2+",
          "en": "O2- > F- > Na+ > Mg2+",
          "de": "O2- > F- > Na+ > Mg2+",
          "fr": "O2- > F- > Na+ > Mg2+",
          "ru": "O2- > F- > Na+ > Mg2+",
          "ar": "O2- > F- > Na+ > Mg2+",
          "zh": "O2- > F- > Na+ > Mg2+",
          "ku": "O2- > F- > Na+ > Mg2+"
        },
        {
          "tr": "F- > O2- > Mg2+ > Na+",
          "en": "F- > O2- > Mg2+ > Na+",
          "de": "F- > O2- > Mg2+ > Na+",
          "fr": "F- > O2- > Mg2+ > Na+",
          "ru": "F- > O2- > Mg2+ > Na+",
          "ar": "F- > O2- > Mg2+ > Na+",
          "zh": "F- > O2- > Mg2+ > Na+",
          "ku": "F- > O2- > Mg2+ > Na+"
        },
        {
          "tr": "O2- > Na+ > F- > Mg2+",
          "en": "O2- > Na+ > F- > Mg2+",
          "de": "O2- > Na+ > F- > Mg2+",
          "fr": "O2- > Na+ > F- > Mg2+",
          "ru": "O2- > Na+ > F- > Mg2+",
          "ar": "O2- > Na+ > F- > Mg2+",
          "zh": "O2- > Na+ > F- > Mg2+",
          "ku": "O2- > Na+ > F- > Mg2+"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Dört taneciğin de 10 elektronu vardır (izoelektronik, 1s2 2s2 2p6). Elektron sayısı aynı olduğundan yarıçapı proton sayısı belirler: proton sayısı arttıkça elektron başına düşen çekim artar ve yarıçap küçülür. Proton sayıları 8 < 9 < 11 < 12 olduğundan O2- > F- > Na+ > Mg2+. Katyonları büyük sanmak, Na ve Mg atomlarının büyüklüğünü iyonlarına yanlış taşımaktır.",
        "en": "All four species have 10 electrons (isoelectronic, 1s2 2s2 2p6). With equal electron counts, the radius is decided by the proton count: more protons means a stronger pull per electron and a smaller radius. Since the proton counts are 8 < 9 < 11 < 12, O2- > F- > Na+ > Mg2+. Thinking the cations are larger wrongly carries over the large size of Na and Mg atoms to their ions.",
        "de": "Alle vier Teilchen haben 10 Elektronen (isoelektronisch, 1s2 2s2 2p6). Bei gleicher Elektronenzahl bestimmt die Protonenzahl den Radius: Mehr Protonen bedeuten stärkere Anziehung pro Elektron und einen kleineren Radius. Da die Protonenzahlen 8 < 9 < 11 < 12 sind, gilt O2- > F- > Na+ > Mg2+. Die Kationen für größer zu halten, überträgt fälschlich die Größe der Na- und Mg-Atome auf ihre Ionen.",
        "fr": "Les quatre espèces ont 10 électrons (isoélectroniques, 1s2 2s2 2p6). À nombre d'électrons égal, c'est le nombre de protons qui fixe le rayon : plus de protons signifie une attraction plus forte par électron et un rayon plus petit. Comme 8 < 9 < 11 < 12, on a O2- > F- > Na+ > Mg2+. Croire les cations plus gros revient à attribuer à tort aux ions la grande taille des atomes Na et Mg.",
        "ru": "У всех четырёх частиц по 10 электронов (изоэлектронные частицы, 1s2 2s2 2p6). При одинаковом числе электронов радиус определяется числом протонов: чем больше протонов, тем сильнее притяжение в расчёте на один электрон и тем меньше радиус. Поскольку числа протонов 8 < 9 < 11 < 12, O2- > F- > Na+ > Mg2+. Считать катионы более крупными — значит ошибочно переносить большой размер атомов Na и Mg на их ионы.",
        "ar": "لكل الدقائق الأربع 10 إلكترونات (متساوية الإلكترونات، 1s2 2s2 2p6). عند تساوي عدد الإلكترونات يحدد عدد البروتونات نصف القطر: كلما زاد عدد البروتونات زاد الجذب لكل إلكترون وصغر نصف القطر. وبما أن أعداد البروتونات 8 < 9 < 11 < 12 فإن O2- > F- > Na+ > Mg2+. أما اعتبار الأيونات الموجبة أكبر فهو نقل خاطئ لكبر ذرتي Na وMg إلى أيونيهما.",
        "zh": "四种粒子都有 10 个电子(等电子体，1s2 2s2 2p6)。电子数相同时由质子数决定半径：质子越多，每个电子受到的吸引越强，半径越小。质子数 8 < 9 < 11 < 12，所以 O2- > F- > Na+ > Mg2+。认为阳离子更大，是把 Na、Mg 原子的大半径错误地套用到它们的离子上。",
        "ku": "Her çar perçeyan 10 elektron hene (îzoelektronîk, 1s2 2s2 2p6). Ji ber ku hejmara elektronan wekhev e, nîvçap bi hejmara protonan tê diyarkirin: hejmara protonan çiqas zêde be, kişandina li ser her elektronekê ewqas zêde dibe û nîvçap piçûk dibe. Ji ber ku hejmarên protonan 8 < 9 < 11 < 12 ne, O2- > F- > Na+ > Mg2+. Mezin hesibandina katyonan ew e ku mezinahiya atomên Na û Mg bi şaşî li îyonên wan were barkirin."
      }
    },
    {
      "id": "u11-twin10",
      "stem": {
        "tr": "Aşağıdaki elektron dizilimlerinden hangisi uyarılmış hâldeki bir atoma aittir? (18Ar)",
        "en": "Which of the following electron configurations belongs to an atom in an excited state? (18Ar)",
        "de": "Welche der folgenden Elektronenkonfigurationen gehört zu einem Atom im angeregten Zustand? (18Ar)",
        "fr": "Laquelle des configurations électroniques suivantes appartient à un atome à l'état excité ? (18Ar)",
        "ru": "Какая из приведённых электронных конфигураций принадлежит атому в возбуждённом состоянии? (18Ar)",
        "ar": "أيّ التوزيعات الإلكترونية الآتية يعود إلى ذرة في حالة مثارة؟ (18Ar)",
        "zh": "下列哪种电子排布属于处于激发态的原子？(18Ar)",
        "ku": "Ji van rêzkirinên elektronan kîjan ya atomeke di rewşa heyecanbûyî de ye? (18Ar)"
      },
      "options": [
        {
          "tr": "1s2 2s2 2p6 3s1",
          "en": "1s2 2s2 2p6 3s1",
          "de": "1s2 2s2 2p6 3s1",
          "fr": "1s2 2s2 2p6 3s1",
          "ru": "1s2 2s2 2p6 3s1",
          "ar": "1s2 2s2 2p6 3s1",
          "zh": "1s2 2s2 2p6 3s1",
          "ku": "1s2 2s2 2p6 3s1"
        },
        {
          "tr": "1s2 2s2 2p3",
          "en": "1s2 2s2 2p3",
          "de": "1s2 2s2 2p3",
          "fr": "1s2 2s2 2p3",
          "ru": "1s2 2s2 2p3",
          "ar": "1s2 2s2 2p3",
          "zh": "1s2 2s2 2p3",
          "ku": "1s2 2s2 2p3"
        },
        {
          "tr": "[Ar] 4s1 3d5",
          "en": "[Ar] 4s1 3d5",
          "de": "[Ar] 4s1 3d5",
          "fr": "[Ar] 4s1 3d5",
          "ru": "[Ar] 4s1 3d5",
          "ar": "[Ar] 4s1 3d5",
          "zh": "[Ar] 4s1 3d5",
          "ku": "[Ar] 4s1 3d5"
        },
        {
          "tr": "1s2 2s1 2p1",
          "en": "1s2 2s1 2p1",
          "de": "1s2 2s1 2p1",
          "fr": "1s2 2s1 2p1",
          "ru": "1s2 2s1 2p1",
          "ar": "1s2 2s1 2p1",
          "zh": "1s2 2s1 2p1",
          "ku": "1s2 2s1 2p1"
        },
        {
          "tr": "[Ar] 4s1 3d10",
          "en": "[Ar] 4s1 3d10",
          "de": "[Ar] 4s1 3d10",
          "fr": "[Ar] 4s1 3d10",
          "ru": "[Ar] 4s1 3d10",
          "ar": "[Ar] 4s1 3d10",
          "zh": "[Ar] 4s1 3d10",
          "ku": "[Ar] 4s1 3d10"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Uyarılmış hâlde bir elektron, daha düşük enerjili bir orbitalde yer varken üst orbitale geçmiştir. 1s2 2s1 2p1 dizilimli 4 elektronlu atomda (Be) 2s dolmadan 2p'ye elektron yerleşmiştir; temel hâli 1s2 2s2'dir. [Ar] 4s1 3d5 (Cr) ve [Ar] 4s1 3d10 (Cu) Aufbau sırasına aykırı görünse de küresel simetri kararlılığı nedeniyle bu atomların temel hâl dizilimleridir. Diğer iki dizilim Aufbau sırasına uygundur.",
        "en": "In an excited state an electron has moved to a higher orbital while a lower-energy orbital still has room. In the 4-electron atom with 1s2 2s1 2p1 (Be), an electron sits in 2p before 2s is full; its ground state is 1s2 2s2. [Ar] 4s1 3d5 (Cr) and [Ar] 4s1 3d10 (Cu) seem to break the Aufbau order but are the real ground-state configurations of these atoms because of spherical-symmetry stability. The other two configurations follow the Aufbau order.",
        "de": "Im angeregten Zustand ist ein Elektron in ein höheres Orbital gewechselt, obwohl in einem energieärmeren Orbital noch Platz ist. Beim 4-Elektronen-Atom mit 1s2 2s1 2p1 (Be) befindet sich ein Elektron in 2p, bevor 2s voll ist; sein Grundzustand ist 1s2 2s2. [Ar] 4s1 3d5 (Cr) und [Ar] 4s1 3d10 (Cu) scheinen der Aufbau-Reihenfolge zu widersprechen, sind aber wegen der Stabilität der Kugelsymmetrie die echten Grundzustände dieser Atome. Die beiden anderen Konfigurationen folgen der Aufbau-Reihenfolge.",
        "fr": "À l'état excité, un électron est passé dans une orbitale supérieure alors qu'une orbitale de plus basse énergie a encore de la place. Dans l'atome à 4 électrons 1s2 2s1 2p1 (Be), un électron occupe 2p avant que 2s soit plein ; son état fondamental est 1s2 2s2. [Ar] 4s1 3d5 (Cr) et [Ar] 4s1 3d10 (Cu) semblent contredire l'ordre d'Aufbau mais sont les vraies configurations fondamentales de ces atomes grâce à la stabilité de la symétrie sphérique. Les deux autres configurations suivent l'ordre d'Aufbau.",
        "ru": "В возбуждённом состоянии электрон перешёл на более высокую орбиталь, хотя на орбитали с меньшей энергией ещё есть место. В атоме с 4 электронами 1s2 2s1 2p1 (Be) электрон находится на 2p, хотя 2s не заполнена; его основное состояние — 1s2 2s2. [Ar] 4s1 3d5 (Cr) и [Ar] 4s1 3d10 (Cu) кажутся нарушением порядка заполнения, но благодаря устойчивости сферически симметричных конфигураций это и есть основные состояния этих атомов. Две другие конфигурации соответствуют обычному порядку заполнения.",
        "ar": "في الحالة المثارة ينتقل إلكترون إلى مدار أعلى مع وجود مكان في مدار أقل طاقة. في الذرة ذات الإلكترونات الأربعة 1s2 2s1 2p1 (Be) يوجد إلكترون في 2p قبل امتلاء 2s، وحالتها الأرضية 1s2 2s2. يبدو التوزيعان [Ar] 4s1 3d5 (Cr) و[Ar] 4s1 3d10 (Cu) مخالفين لترتيب أوفباو، لكنهما توزيعا الحالة الأرضية الحقيقيان لهاتين الذرتين بسبب استقرار التناظر الكروي. والتوزيعان الآخران يتبعان ترتيب أوفباو.",
        "zh": "激发态是指低能量轨道仍有空位时，电子已跃迁到更高的轨道。含 4 个电子的 1s2 2s1 2p1 (Be) 中，2s 未填满时就有电子进入 2p；其基态为 1s2 2s2。[Ar] 4s1 3d5 (Cr) 和 [Ar] 4s1 3d10 (Cu) 看似违背构造原理，但由于球形对称的稳定性，它们正是这两种原子的基态排布。另外两种排布符合构造原理顺序。",
        "ku": "Di rewşa heyecanbûyî de elektronek derbasî orbîtaleke jortir bûye, her çend di orbîtaleke bi enerjiya nizmtir de hîn cih hebe jî. Di atoma bi 4 elektronan a bi rêzkirina 1s2 2s1 2p1 (Be) de, berî ku 2s tijî bibe elektronek li 2p bi cih bûye; rewşa wê ya bingehîn 1s2 2s2 e. [Ar] 4s1 3d5 (Cr) û [Ar] 4s1 3d10 (Cu) her çend li dijî rêza Aufbau xuya bikin jî, ji ber aramiya sîmetriya gewherî rêzkirinên rewşa bingehîn a van atoman in. Her du rêzkirinên din li gorî rêza Aufbau ne."
      }
    },
    {
      "id": "u11-twin11",
      "stem": {
        "tr": "Atom modelleri ile ilgili; I. Bohr modeli çok elektronlu atomların spektrumlarını açıklayamaz. II. Modern atom modeline göre bir elektronun konumu ve hızı aynı anda kesin olarak belirlenebilir. III. Modern atom modelinde orbital, elektronun bulunma olasılığının yüksek olduğu bölgedir. yargılarından hangileri doğrudur?",
        "en": "Regarding atomic models: I. The Bohr model cannot explain the spectra of many-electron atoms. II. According to the modern atomic model, the position and velocity of an electron can be determined exactly at the same time. III. In the modern atomic model, an orbital is a region where the probability of finding the electron is high. Which of these statements are correct?",
        "de": "Zu den Atommodellen: I. Das Bohrsche Modell kann die Spektren von Mehrelektronenatomen nicht erklären. II. Nach dem modernen Atommodell lassen sich Ort und Geschwindigkeit eines Elektrons gleichzeitig exakt bestimmen. III. Im modernen Atommodell ist ein Orbital ein Bereich, in dem die Aufenthaltswahrscheinlichkeit des Elektrons hoch ist. Welche Aussagen sind richtig?",
        "fr": "À propos des modèles atomiques : I. Le modèle de Bohr ne peut pas expliquer les spectres des atomes polyélectroniques. II. Selon le modèle atomique moderne, la position et la vitesse d'un électron peuvent être déterminées exactement en même temps. III. Dans le modèle atomique moderne, une orbitale est une région où la probabilité de trouver l'électron est élevée. Lesquelles de ces affirmations sont correctes ?",
        "ru": "Даны утверждения о моделях атома: I. Модель Бора не может объяснить спектры многоэлектронных атомов. II. Согласно современной модели атома, положение и скорость электрона можно одновременно точно определить. III. В современной модели атома орбиталь — область, в которой вероятность нахождения электрона велика. Какие из них верны?",
        "ar": "بخصوص النماذج الذرية: I. لا يستطيع نموذج بور تفسير أطياف الذرات متعددة الإلكترونات. II. وفق النموذج الذري الحديث يمكن تحديد موقع الإلكترون وسرعته بدقة في آن واحد. III. في النموذج الذري الحديث، المدار منطقة يكون فيها احتمال وجود الإلكترون كبيرًا. أيّ هذه العبارات صحيحة؟",
        "zh": "关于原子模型：I. 玻尔模型无法解释多电子原子的光谱。II. 根据现代原子模型，可以同时准确确定电子的位置和速度。III. 在现代原子模型中，轨道是电子出现概率较大的区域。以上说法中哪些正确？",
        "ku": "Derbarê modelên atomê de: I. Modela Bohr nikare spektrumên atomên pirelektronî rave bike. II. Li gorî modela atomê ya nûjen, cih û leza elektronekê di heman demê de bi teqezî dikarin werin diyarkirin. III. Di modela atomê ya nûjen de orbîtal herêmek e ku îhtîmala dîtina elektronê lê bilind e. Kîjan ji van gotinan rast in?"
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
      "correctIndex": 1,
      "explanation": {
        "tr": "I doğru: Bohr modeli yalnızca H ve He+ gibi tek elektronlu taneciklerin spektrumunu açıklar, elektronlar arası etkileşimleri hesaba katmaz. II yanlış: Heisenberg belirsizlik ilkesine göre bir elektronun konumu ve hızı (momentumu) aynı anda kesin olarak bilinemez; bu yüzden modern modelde belirli yörüngeler yoktur. III doğru: orbital, elektronun bulunma olasılığının yüksek olduğu üç boyutlu bölgedir.",
        "en": "I is true: the Bohr model explains only the spectra of one-electron species such as H and He+ and ignores electron–electron interactions. II is false: by the Heisenberg uncertainty principle, the position and velocity (momentum) of an electron cannot both be known exactly at the same time, so the modern model has no definite orbits. III is true: an orbital is the three-dimensional region where the electron is most likely to be found.",
        "de": "I ist richtig: Das Bohrsche Modell erklärt nur die Spektren von Einelektronenteilchen wie H und He+ und vernachlässigt die Wechselwirkungen zwischen Elektronen. II ist falsch: Nach der Heisenbergschen Unschärferelation können Ort und Geschwindigkeit (Impuls) eines Elektrons nicht gleichzeitig exakt bekannt sein; daher gibt es im modernen Modell keine festen Bahnen. III ist richtig: Ein Orbital ist der dreidimensionale Bereich mit hoher Aufenthaltswahrscheinlichkeit des Elektrons.",
        "fr": "I est vraie : le modèle de Bohr n'explique que les spectres des espèces à un électron comme H et He+ et ignore les interactions entre électrons. II est fausse : d'après le principe d'incertitude de Heisenberg, la position et la vitesse (quantité de mouvement) d'un électron ne peuvent être connues exactement en même temps ; le modèle moderne n'a donc pas d'orbites définies. III est vraie : une orbitale est la région à trois dimensions où la probabilité de présence de l'électron est élevée.",
        "ru": "I верно: модель Бора объясняет только спектры одноэлектронных частиц, таких как H и He+, и не учитывает взаимодействие электронов. II неверно: по принципу неопределённости Гейзенберга положение и скорость (импульс) электрона нельзя одновременно знать точно, поэтому в современной модели нет определённых орбит. III верно: орбиталь — трёхмерная область, в которой вероятность нахождения электрона велика.",
        "ar": "I صحيحة: يفسر نموذج بور أطياف الدقائق ذات الإلكترون الواحد فقط مثل H وHe+ ويهمل التفاعلات بين الإلكترونات. II خاطئة: وفق مبدأ عدم اليقين لهايزنبرغ لا يمكن معرفة موقع الإلكترون وسرعته (زخمه) بدقة في آن واحد، لذا لا توجد مدارات محددة في النموذج الحديث. III صحيحة: المدار منطقة ثلاثية الأبعاد يكون فيها احتمال وجود الإلكترون كبيرًا.",
        "zh": "I 正确：玻尔模型只能解释 H、He+ 等单电子粒子的光谱，没有考虑电子之间的相互作用。II 错误：根据海森堡不确定性原理，电子的位置和速度（动量）不能同时被准确知道，所以现代模型中没有确定的运动轨迹。III 正确：轨道是电子出现概率较大的三维区域。",
        "ku": "I rast e: modela Bohr tenê spektrumên perçeyên yekelektronî yên wek H û He+ rave dike û têkiliyên di navbera elektronan de hesab nake. II şaş e: li gorî prensîba nediyariyê ya Heisenberg, cih û leza (momentuma) elektronekê di heman demê de bi teqezî nayên zanîn; loma di modela nûjen de rêgehên diyar tune ne. III rast e: orbîtal herêmeke sêrehendî ye ku îhtîmala dîtina elektronê lê bilind e."
      }
    },
    {
      "id": "u11-twin12",
      "stem": {
        "tr": "Temel hâldeki 17Cl atomunda baş kuantum sayısı n = 3 olan kaç elektron vardır?",
        "en": "How many electrons with principal quantum number n = 3 are there in a ground-state 17Cl atom?",
        "de": "Wie viele Elektronen mit der Hauptquantenzahl n = 3 enthält ein 17Cl-Atom im Grundzustand?",
        "fr": "Combien d'électrons de nombre quantique principal n = 3 un atome de 17Cl à l'état fondamental possède-t-il ?",
        "ru": "Сколько электронов с главным квантовым числом n = 3 содержит атом 17Cl в основном состоянии?",
        "ar": "كم إلكترونًا عدد كمه الرئيس n = 3 يوجد في ذرة 17Cl في الحالة الأرضية؟",
        "zh": "基态 17Cl 原子中主量子数 n = 3 的电子有多少个？",
        "ku": "Di atoma 17Cl ya di rewşa bingehîn de çend elektron hene ku hejmara wan a kuantumê ya sereke n = 3 e?"
      },
      "options": [
        {
          "tr": "7",
          "en": "7",
          "de": "7",
          "fr": "7",
          "ru": "7",
          "ar": "7",
          "zh": "7",
          "ku": "7"
        },
        {
          "tr": "8",
          "en": "8",
          "de": "8",
          "fr": "8",
          "ru": "8",
          "ar": "8",
          "zh": "8",
          "ku": "8"
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
          "tr": "17",
          "en": "17",
          "de": "17",
          "fr": "17",
          "ru": "17",
          "ar": "17",
          "zh": "17",
          "ku": "17"
        },
        {
          "tr": "18",
          "en": "18",
          "de": "18",
          "fr": "18",
          "ru": "18",
          "ar": "18",
          "zh": "18",
          "ku": "18"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "17Cl: 1s2 2s2 2p6 3s2 3p5. n = 3 olan elektronlar 3s2 ve 3p5 alt kabuklarındadır: 2 + 5 = 7. 18, n = 3 düzeyinin kapasitesidir (2n²); 10, n = 1 ve n = 2 düzeylerindeki elektron sayısıdır; 8 ise Cl- iyonunun dış katmanını düşünmekten gelir.",
        "en": "17Cl: 1s2 2s2 2p6 3s2 3p5. The n = 3 electrons are in the 3s2 and 3p5 sublevels: 2 + 5 = 7. 18 is the capacity of level n = 3 (2n²); 10 is the number of electrons in levels n = 1 and n = 2; 8 comes from thinking of the outer shell of the Cl- ion.",
        "de": "17Cl: 1s2 2s2 2p6 3s2 3p5. Die Elektronen mit n = 3 befinden sich in den Unterniveaus 3s2 und 3p5: 2 + 5 = 7. 18 ist die Kapazität des Niveaus n = 3 (2n²); 10 ist die Elektronenzahl der Niveaus n = 1 und n = 2; 8 entsteht, wenn man an die Außenschale des Cl--Ions denkt.",
        "fr": "17Cl : 1s2 2s2 2p6 3s2 3p5. Les électrons n = 3 sont dans les sous-couches 3s2 et 3p5 : 2 + 5 = 7. 18 est la capacité du niveau n = 3 (2n²) ; 10 est le nombre d'électrons des niveaux n = 1 et n = 2 ; 8 vient de la couche externe de l'ion Cl-.",
        "ru": "17Cl: 1s2 2s2 2p6 3s2 3p5. Электроны с n = 3 находятся на подуровнях 3s2 и 3p5: 2 + 5 = 7. 18 — ёмкость уровня n = 3 (2n²); 10 — число электронов на уровнях n = 1 и n = 2; 8 получается, если рассматривать внешний слой иона Cl-.",
        "ar": "17Cl: 1s2 2s2 2p6 3s2 3p5. الإلكترونات ذات n = 3 موجودة في المستويين الفرعيين 3s2 و3p5: 2 + 5 = 7. العدد 18 هو سعة المستوى n = 3 (2n²)، و10 عدد الإلكترونات في المستويين n = 1 وn = 2، و8 ناتج عن التفكير في الغلاف الخارجي للأيون Cl-.",
        "zh": "17Cl：1s2 2s2 2p6 3s2 3p5。n = 3 的电子位于 3s2 和 3p5 亚层：2 + 5 = 7。18 是 n = 3 能层的容量(2n²)；10 是 n = 1 和 n = 2 能层的电子数；8 来自考虑 Cl- 离子的最外层。",
        "ku": "17Cl: 1s2 2s2 2p6 3s2 3p5. Elektronên bi n = 3 di binqatên 3s2 û 3p5 de ne: 2 + 5 = 7. 18 kapasîteya asta n = 3 e (2n²); 10 hejmara elektronên astên n = 1 û n = 2 ye; 8 jî ji wê tê ku qata derve ya îyona Cl- were hesibandin."
      }
    },
    {
      "id": "u11-twin13",
      "stem": {
        "tr": "Çok elektronlu atomlarda orbital enerjileri n + l kuralına göre karşılaştırıldığında 4f, 5d, 6s ve 6p orbitallerinin enerjilerinin küçükten büyüğe sıralanışı aşağıdakilerden hangisidir?",
        "en": "When orbital energies in many-electron atoms are compared using the n + l rule, which of the following ranks the energies of the 4f, 5d, 6s and 6p orbitals from lowest to highest?",
        "de": "In Mehrelektronenatomen werden Orbitalenergien mit der n + l-Regel verglichen. Welche Reihenfolge gibt danach die Energien der Orbitale 4f, 5d, 6s und 6p von der niedrigsten zur höchsten an?",
        "fr": "Dans les atomes polyélectroniques, on compare les énergies des orbitales avec la règle n + l. Lequel des classements suivants range alors les énergies des orbitales 4f, 5d, 6s et 6p de la plus basse à la plus haute ?",
        "ru": "В многоэлектронных атомах энергии орбиталей сравнивают по правилу n + l. В каком ряду орбитали 4f, 5d, 6s и 6p расположены в порядке возрастания энергии?",
        "ar": "في الذرات متعددة الإلكترونات تُقارن طاقات المدارات وفق قاعدة n + l. أيّ مما يأتي يرتب طاقات المدارات 4f و5d و6s و6p من الأقل إلى الأعلى؟",
        "zh": "在多电子原子中，按 n + l 规则比较轨道能量。下列哪项将 4f、5d、6s 和 6p 轨道的能量从低到高排列？",
        "ku": "Di atomên pirelektronî de enerjiyên orbîtalan li gorî qaîdeya n + l têne berhevdan. Rêza enerjiyên orbîtalên 4f, 5d, 6s û 6p ji ya herî nizm ber bi ya herî bilind kîjan e?"
      },
      "options": [
        {
          "tr": "4f < 5d < 6s < 6p",
          "en": "4f < 5d < 6s < 6p",
          "de": "4f < 5d < 6s < 6p",
          "fr": "4f < 5d < 6s < 6p",
          "ru": "4f < 5d < 6s < 6p",
          "ar": "4f < 5d < 6s < 6p",
          "zh": "4f < 5d < 6s < 6p",
          "ku": "4f < 5d < 6s < 6p"
        },
        {
          "tr": "6s < 5d < 4f < 6p",
          "en": "6s < 5d < 4f < 6p",
          "de": "6s < 5d < 4f < 6p",
          "fr": "6s < 5d < 4f < 6p",
          "ru": "6s < 5d < 4f < 6p",
          "ar": "6s < 5d < 4f < 6p",
          "zh": "6s < 5d < 4f < 6p",
          "ku": "6s < 5d < 4f < 6p"
        },
        {
          "tr": "6s < 6p < 4f < 5d",
          "en": "6s < 6p < 4f < 5d",
          "de": "6s < 6p < 4f < 5d",
          "fr": "6s < 6p < 4f < 5d",
          "ru": "6s < 6p < 4f < 5d",
          "ar": "6s < 6p < 4f < 5d",
          "zh": "6s < 6p < 4f < 5d",
          "ku": "6s < 6p < 4f < 5d"
        },
        {
          "tr": "4f < 6s < 5d < 6p",
          "en": "4f < 6s < 5d < 6p",
          "de": "4f < 6s < 5d < 6p",
          "fr": "4f < 6s < 5d < 6p",
          "ru": "4f < 6s < 5d < 6p",
          "ar": "4f < 6s < 5d < 6p",
          "zh": "4f < 6s < 5d < 6p",
          "ku": "4f < 6s < 5d < 6p"
        },
        {
          "tr": "6s < 4f < 5d < 6p",
          "en": "6s < 4f < 5d < 6p",
          "de": "6s < 4f < 5d < 6p",
          "fr": "6s < 4f < 5d < 6p",
          "ru": "6s < 4f < 5d < 6p",
          "ar": "6s < 4f < 5d < 6p",
          "zh": "6s < 4f < 5d < 6p",
          "ku": "6s < 4f < 5d < 6p"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "n + l değerleri: 6s = 6 + 0 = 6; 4f = 4 + 3 = 7; 5d = 5 + 2 = 7; 6p = 6 + 1 = 7. En küçük n + l değerine sahip 6s en düşük enerjilidir. n + l eşit olduğunda n'si küçük olan daha düşük enerjilidir: 4f < 5d < 6p. Sıralama 6s < 4f < 5d < 6p olur. Yalnızca n'ye bakan öğrenci 4f'yi en başa yazar.",
        "en": "n + l values: 6s = 6 + 0 = 6; 4f = 4 + 3 = 7; 5d = 5 + 2 = 7; 6p = 6 + 1 = 7. 6s, with the smallest n + l, is lowest in energy. When n + l is equal, the orbital with the smaller n is lower: 4f < 5d < 6p. The order is 6s < 4f < 5d < 6p. A student who looks only at n puts 4f first.",
        "de": "n + l-Werte: 6s = 6 + 0 = 6; 4f = 4 + 3 = 7; 5d = 5 + 2 = 7; 6p = 6 + 1 = 7. 6s mit dem kleinsten n + l ist am energieärmsten. Bei gleichem n + l ist das Orbital mit kleinerem n energieärmer: 4f < 5d < 6p. Die Reihenfolge ist 6s < 4f < 5d < 6p. Wer nur auf n achtet, setzt 4f an den Anfang.",
        "fr": "Valeurs de n + l : 6s = 6 + 0 = 6 ; 4f = 4 + 3 = 7 ; 5d = 5 + 2 = 7 ; 6p = 6 + 1 = 7. 6s, de plus petit n + l, est la plus basse en énergie. À n + l égal, l'orbitale de plus petit n est la plus basse : 4f < 5d < 6p. L'ordre est 6s < 4f < 5d < 6p. Un élève qui ne regarde que n place 4f en premier.",
        "ru": "Значения n + l: 6s = 6 + 0 = 6; 4f = 4 + 3 = 7; 5d = 5 + 2 = 7; 6p = 6 + 1 = 7. Наименьшая энергия у 6s, так как у неё наименьшая сумма n + l. При равных n + l ниже по энергии орбиталь с меньшим n: 4f < 5d < 6p. Получаем ряд 6s < 4f < 5d < 6p. Если смотреть только на n, 4f ошибочно окажется на первом месте.",
        "ar": "قيم n + l: 6s = 6 + 0 = 6؛ 4f = 4 + 3 = 7؛ 5d = 5 + 2 = 7؛ 6p = 6 + 1 = 7. المدار 6s ذو أصغر قيمة n + l هو الأقل طاقة. وعند تساوي n + l يكون المدار ذو n الأصغر أقل طاقة: 4f < 5d < 6p. فيكون الترتيب 6s < 4f < 5d < 6p. والطالب الذي ينظر إلى n فقط يضع 4f أولًا.",
        "zh": "n + l 值：6s = 6 + 0 = 6；4f = 4 + 3 = 7；5d = 5 + 2 = 7；6p = 6 + 1 = 7。n + l 最小的 6s 能量最低。n + l 相同时，n 较小的轨道能量较低：4f < 5d < 6p。顺序为 6s < 4f < 5d < 6p。只看 n 的学生会把 4f 排在最前面。",
        "ku": "Nirxên n + l: 6s = 6 + 0 = 6; 4f = 4 + 3 = 7; 5d = 5 + 2 = 7; 6p = 6 + 1 = 7. Enerjiya 6s, ku n + l-ya wê herî piçûk e, herî nizm e. Dema n + l wekhev be, enerjiya orbîtala ku n-ya wê piçûktir e nizmtir e: 4f < 5d < 6p. Rêz 6s < 4f < 5d < 6p ye. Xwendekarê ku tenê li n dinêre 4f dixe serî."
      }
    },
    {
      "id": "u11-twin14",
      "stem": {
        "tr": "Temel hâldeki 26Fe3+ iyonunda eşleşmemiş (yarı dolu orbitallerde bulunan) elektron sayısı kaçtır? (18Ar)",
        "en": "How many unpaired electrons (electrons in half-filled orbitals) does the ground-state 26Fe3+ ion have? (18Ar)",
        "de": "Wie viele ungepaarte Elektronen (Elektronen in halbbesetzten Orbitalen) hat das 26Fe3+-Ion im Grundzustand? (18Ar)",
        "fr": "Combien d'électrons non appariés (électrons dans des orbitales à moitié remplies) l'ion 26Fe3+ à l'état fondamental possède-t-il ? (18Ar)",
        "ru": "Сколько неспаренных электронов (электронов на наполовину заполненных орбиталях) у иона 26Fe3+ в основном состоянии? (18Ar)",
        "ar": "كم عدد الإلكترونات المفردة (الموجودة في مدارات نصف ممتلئة) في الأيون 26Fe3+ في الحالة الأرضية؟ (18Ar)",
        "zh": "基态 26Fe3+ 离子中有多少个未成对电子（位于半充满轨道中的电子）？(18Ar)",
        "ku": "Di îyona 26Fe3+ ya di rewşa bingehîn de çend elektronên necot (yên di orbîtalên nîvtijî de) hene? (18Ar)"
      },
      "options": [
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
        },
        {
          "tr": "8",
          "en": "8",
          "de": "8",
          "fr": "8",
          "ru": "8",
          "ar": "8",
          "zh": "8",
          "ku": "8"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "26Fe: [Ar] 4s2 3d6. Fe3+ oluşurken önce 4s'teki 2 elektron, sonra 3d'den 1 elektron koparılır: Fe3+ = [Ar] 3d5. Hund kuralına göre 5 d elektronu 5 ayrı orbitalde tek tek bulunur, yani 5 eşleşmemiş elektron vardır. Elektronları önce 3d'den koparan [Ar] 4s2 3d3 yazıp 3 bulur; nötr Fe atomunun 3d6 dizilimi ise 4 eşleşmemiş elektron içerir.",
        "en": "26Fe: [Ar] 4s2 3d6. To form Fe3+, the 2 electrons in 4s are removed first, then 1 electron from 3d: Fe3+ = [Ar] 3d5. By Hund's rule the 5 d electrons occupy 5 separate orbitals singly, so there are 5 unpaired electrons. Removing electrons from 3d first gives [Ar] 4s2 3d3 and 3; the neutral Fe atom's 3d6 contains 4 unpaired electrons.",
        "de": "26Fe: [Ar] 4s2 3d6. Bei der Bildung von Fe3+ werden zuerst die 2 Elektronen aus 4s, dann 1 Elektron aus 3d entfernt: Fe3+ = [Ar] 3d5. Nach der Hundschen Regel besetzen die 5 d-Elektronen einzeln 5 Orbitale, es gibt also 5 ungepaarte Elektronen. Wer zuerst aus 3d entfernt, schreibt [Ar] 4s2 3d3 und erhält 3; das 3d6 des neutralen Fe-Atoms enthält 4 ungepaarte Elektronen.",
        "fr": "26Fe : [Ar] 4s2 3d6. Pour former Fe3+, on retire d'abord les 2 électrons de 4s, puis 1 électron de 3d : Fe3+ = [Ar] 3d5. Selon la règle de Hund, les 5 électrons d occupent seuls 5 orbitales : il y a 5 électrons non appariés. Retirer d'abord des électrons 3d donne [Ar] 4s2 3d3 et 3 ; le 3d6 de l'atome de Fe neutre contient 4 électrons non appariés.",
        "ru": "26Fe: [Ar] 4s2 3d6. При образовании Fe3+ сначала отрываются 2 электрона с 4s, затем 1 электрон с 3d: Fe3+ = [Ar] 3d5. По правилу Хунда 5 d-электронов по одному занимают 5 орбиталей, то есть неспаренных электронов 5. Если отрывать электроны сначала с 3d, получится [Ar] 4s2 3d3 и ответ 3; в конфигурации 3d6 нейтрального атома Fe 4 неспаренных электрона.",
        "ar": "26Fe: [Ar] 4s2 3d6. عند تكوّن Fe3+ يُنزع أولًا إلكترونا 4s ثم إلكترون واحد من 3d: Fe3+ = [Ar] 3d5. ووفق قاعدة هوند تشغل إلكترونات d الخمسة خمسة مدارات منفصلة فرادى، أي يوجد 5 إلكترونات مفردة. من ينزع الإلكترونات من 3d أولًا يكتب [Ar] 4s2 3d3 ويحصل على 3، أما 3d6 في ذرة Fe المتعادلة فيحوي 4 إلكترونات مفردة.",
        "zh": "26Fe：[Ar] 4s2 3d6。形成 Fe3+ 时先失去 4s 的 2 个电子，再失去 3d 的 1 个电子：Fe3+ = [Ar] 3d5。按洪特规则，5 个 d 电子分占 5 个轨道，因此有 5 个未成对电子。先从 3d 失电子会写出 [Ar] 4s2 3d3 并得到 3；中性 Fe 原子的 3d6 含 4 个未成对电子。",
        "ku": "26Fe: [Ar] 4s2 3d6. Dema Fe3+ çêdibe, pêşî 2 elektronên 4s, paşê 1 elektron ji 3d têne qetandin: Fe3+ = [Ar] 3d5. Li gorî qaîdeya Hund 5 elektronên d yek bi yek di 5 orbîtalên cuda de ne, ango 5 elektronên necot hene. Yê ku elektronan pêşî ji 3d diqetîne [Ar] 4s2 3d3 dinivîse û 3 dibîne; di rêzkirina 3d6 ya atoma Fe ya bêbar de jî 4 elektronên necot hene."
      }
    },
    {
      "id": "u11-twin15",
      "stem": {
        "tr": "Şekilde bazı atomlar için önerilen değerlik orbital diyagramları verilmiştir (1s orbitalleri tam doludur; ↑ ve ↓ zıt spinli elektronları gösterir). Bu diyagramlardan hangileri ilgili atomun temel hâline aittir?",
        "en": "The figure shows proposed valence orbital diagrams for some atoms (the 1s orbitals are full; ↑ and ↓ show electrons of opposite spin). Which of these diagrams belong to the ground state of the atom concerned?",
        "de": "Die Abbildung zeigt vorgeschlagene Orbitaldiagramme der Valenzschale einiger Atome (die 1s-Orbitale sind voll besetzt; ↑ und ↓ stehen für Elektronen mit entgegengesetztem Spin). Welche Diagramme gehören zum Grundzustand des jeweiligen Atoms?",
        "fr": "La figure présente des diagrammes d'orbitales de valence proposés pour certains atomes (les orbitales 1s sont pleines ; ↑ et ↓ représentent des électrons de spins opposés). Lesquels de ces diagrammes correspondent à l'état fondamental de l'atome concerné ?",
        "ru": "На рисунке приведены предложенные орбитальные диаграммы валентного слоя некоторых атомов (1s-орбитали заполнены; ↑ и ↓ — электроны с противоположными спинами). Какие из диаграмм соответствуют основному состоянию данного атома?",
        "ar": "يبيّن الشكل مخططات مدارات التكافؤ المقترحة لبعض الذرات (مدارات 1s ممتلئة، و↑ و↓ إلكترونان متعاكسا المغزل). أيّ هذه المخططات يمثّل الحالة الأرضية للذرة المعنية؟",
        "zh": "图中给出了为一些原子提出的价层轨道表示式（1s 轨道已充满；↑ 和 ↓ 表示自旋相反的电子）。其中哪些属于相应原子的基态？",
        "ku": "Di şeklê de ji bo hin atoman diyagramên orbîtalên valansê yên pêşniyarkirî hatine dayîn (orbîtalên 1s tijî ne; ↑ û ↓ elektronên bi spînên berevajî nîşan didin). Kîjan ji van diyagraman ên rewşa bingehîn a atoma têkildar in?"
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
        },
        {
          "tr": "I, III ve IV",
          "en": "I, III and IV",
          "de": "I, III und IV",
          "fr": "I, III et IV",
          "ru": "I, III и IV",
          "ar": "I و III و IV",
          "zh": "I、III 和 IV",
          "ku": "I, III û IV"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "I. C (2s2 2p2): iki 2p elektronu ayrı orbitallerde ve aynı spinlidir; temel hâldir. II. N (2s2 2p3): üç 2p elektronu ayrı orbitallere yerleşmiş ama spinleri paralel değildir; Hund kuralına göre eş enerjili orbitallerdeki tek elektronlar aynı spinli olmalıdır, bu diyagram temel hâl değildir. III. O (2s2 2p4): üç orbitale birer elektron girdikten sonra eşleşme yapılmıştır; temel hâldir. IV. B: 2s dolmadan 2p'ye elektron geçmiştir (2s1 2p2); bu uyarılmış hâldir, temel hâl 2s2 2p1'dir. Temel hâle ait olanlar I ve III'tür. Elektronların ayrı orbitallerde olmasını Hund kuralı için yeterli sanıp spin yönlerini gözden kaçırmak tipik bir hatadır.",
        "en": "I. C (2s2 2p2): the two 2p electrons are in separate orbitals with the same spin; this is the ground state. II. N (2s2 2p3): the three 2p electrons are in separate orbitals but their spins are not parallel; by Hund's rule single electrons in degenerate orbitals must have the same spin, so this is not the ground state. III. O (2s2 2p4): pairing occurs only after each of the three orbitals has one electron; ground state. IV. B: an electron has moved to 2p before 2s is filled (2s1 2p2); this is an excited state, the ground state being 2s2 2p1. The diagrams of the ground state are I and III. Thinking that separate orbitals alone satisfy Hund's rule and overlooking the spin directions is a typical mistake.",
        "de": "I. C (2s2 2p2): Die beiden 2p-Elektronen besetzen getrennte Orbitale mit gleichem Spin; Grundzustand. II. N (2s2 2p3): Die drei 2p-Elektronen besetzen getrennte Orbitale, ihre Spins sind aber nicht parallel; nach der Hundschen Regel müssen Einzelelektronen in energiegleichen Orbitalen den gleichen Spin haben, daher kein Grundzustand. III. O (2s2 2p4): Die Paarung erfolgt erst, nachdem jedes der drei Orbitale ein Elektron enthält; Grundzustand. IV. B: Ein Elektron ist in 2p, bevor 2s voll ist (2s1 2p2); das ist ein angeregter Zustand, der Grundzustand ist 2s2 2p1. Zum Grundzustand gehören I und III. Ein typischer Fehler ist, getrennte Orbitale schon für die Hundsche Regel ausreichend zu halten und die Spinrichtungen zu übersehen.",
        "fr": "I. C (2s2 2p2) : les deux électrons 2p occupent des orbitales différentes avec le même spin ; état fondamental. II. N (2s2 2p3) : les trois électrons 2p occupent des orbitales différentes, mais leurs spins ne sont pas parallèles ; d'après la règle de Hund, les électrons célibataires d'orbitales de même énergie doivent avoir le même spin, ce n'est donc pas l'état fondamental. III. O (2s2 2p4) : l'appariement n'a lieu qu'après que chacune des trois orbitales a reçu un électron ; état fondamental. IV. B : un électron est passé en 2p avant que 2s soit plein (2s1 2p2) ; c'est un état excité, l'état fondamental étant 2s2 2p1. Les diagrammes de l'état fondamental sont I et III. Croire que des orbitales séparées suffisent à respecter la règle de Hund et négliger le sens des spins est une erreur typique.",
        "ru": "I. C (2s2 2p2): два 2p-электрона находятся на разных орбиталях с одинаковыми спинами; основное состояние. II. N (2s2 2p3): три 2p-электрона на разных орбиталях, но их спины не параллельны; по правилу Хунда неспаренные электроны на орбиталях одинаковой энергии должны иметь одинаковые спины, поэтому это не основное состояние. III. O (2s2 2p4): спаривание происходит только после того, как на каждой из трёх орбиталей оказалось по электрону; основное состояние. IV. B: электрон перешёл на 2p до заполнения 2s (2s1 2p2); это возбуждённое состояние, основное — 2s2 2p1. Основному состоянию соответствуют I и III. Типичная ошибка — считать, что для правила Хунда достаточно разных орбиталей, и не обращать внимания на направление спинов.",
        "ar": "I. C (2s2 2p2): إلكترونا 2p في مدارين مختلفين وبالمغزل نفسه؛ حالة أرضية. II. N (2s2 2p3): إلكترونات 2p الثلاثة في مدارات مختلفة لكن مغازلها غير متوازية؛ ووفق قاعدة هوند يجب أن يكون للإلكترونات المنفردة في المدارات المتساوية الطاقة المغزل نفسه، فهذا ليس حالة أرضية. III. O (2s2 2p4): لم يحدث الازدواج إلا بعد أن دخل إلكترون في كل مدار من المدارات الثلاثة؛ حالة أرضية. IV. B: انتقل إلكترون إلى 2p قبل امتلاء 2s (2s1 2p2)؛ هذه حالة مثارة، والحالة الأرضية 2s2 2p1. المخططات التي تمثل الحالة الأرضية هي I وIII. ومن الأخطاء الشائعة الظن أن وجود الإلكترونات في مدارات منفصلة يكفي لتحقيق قاعدة هوند وإغفال اتجاه المغزل.",
        "zh": "I. C(2s2 2p2)：两个 2p 电子分占不同轨道且自旋相同，是基态。II. N(2s2 2p3)：三个 2p 电子虽分占不同轨道，但自旋不平行；按洪特规则，简并轨道中的单电子自旋应相同，所以不是基态。III. O(2s2 2p4)：三个轨道各有一个电子后才开始成对，是基态。IV. B：2s 未充满电子就进入了 2p(2s1 2p2)，这是激发态，基态应为 2s2 2p1。属于基态的是 I 和 III。认为电子分占不同轨道就满足洪特规则而忽略自旋方向，是典型错误。",
        "ku": "I. C (2s2 2p2): du elektronên 2p di orbîtalên cuda de û bi heman spînê ne; rewşa bingehîn e. II. N (2s2 2p3): sê elektronên 2p di orbîtalên cuda de ne lê spînên wan ne paralel in; li gorî qaîdeya Hund divê elektronên tenê yên di orbîtalên wekhevenerjî de xwedî heman spînê bin, ji ber vê yekê ev ne rewşa bingehîn e. III. O (2s2 2p4): cotbûn tenê piştî ku her sê orbîtal yek elektron girtin çêbûye; rewşa bingehîn e. IV. B: berî ku 2s tijî bibe elektronek derbasî 2p bûye (2s1 2p2); ev rewşa heyecanî ye, rewşa bingehîn 2s2 2p1 e. Yên rewşa bingehîn I û III in. Hesibandina ku bes cudabûna orbîtalan ji bo qaîdeya Hund têr e û nedîtina arasteya spînan xeletiyeke tîpîk e."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 232,
        "markup": "<text x=\"155\" y=\"24\" text-anchor=\"middle\" class=\"qf-strong\">2s</text><text x=\"265\" y=\"24\" text-anchor=\"middle\" class=\"qf-strong\">2p</text><text x=\"14\" y=\"57\" class=\"qf-strong\">I.</text><text x=\"58\" y=\"57\" class=\"qf-big\">₆C</text><rect x=\"135\" y=\"36\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"155\" y=\"57\" text-anchor=\"middle\" class=\"qf-big\">↑↓</text><rect x=\"205\" y=\"36\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"225\" y=\"57\" text-anchor=\"middle\" class=\"qf-big\">↑</text><rect x=\"245\" y=\"36\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"265\" y=\"57\" text-anchor=\"middle\" class=\"qf-big\">↑</text><rect x=\"285\" y=\"36\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"14\" y=\"105\" class=\"qf-strong\">II.</text><text x=\"58\" y=\"105\" class=\"qf-big\">₇N</text><rect x=\"135\" y=\"84\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"155\" y=\"105\" text-anchor=\"middle\" class=\"qf-big\">↑↓</text><rect x=\"205\" y=\"84\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"225\" y=\"105\" text-anchor=\"middle\" class=\"qf-big\">↑</text><rect x=\"245\" y=\"84\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"265\" y=\"105\" text-anchor=\"middle\" class=\"qf-big\">↓</text><rect x=\"285\" y=\"84\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"305\" y=\"105\" text-anchor=\"middle\" class=\"qf-big\">↑</text><text x=\"14\" y=\"153\" class=\"qf-strong\">III.</text><text x=\"58\" y=\"153\" class=\"qf-big\">₈O</text><rect x=\"135\" y=\"132\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"155\" y=\"153\" text-anchor=\"middle\" class=\"qf-big\">↑↓</text><rect x=\"205\" y=\"132\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"225\" y=\"153\" text-anchor=\"middle\" class=\"qf-big\">↑↓</text><rect x=\"245\" y=\"132\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"265\" y=\"153\" text-anchor=\"middle\" class=\"qf-big\">↑</text><rect x=\"285\" y=\"132\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"305\" y=\"153\" text-anchor=\"middle\" class=\"qf-big\">↑</text><text x=\"14\" y=\"201\" class=\"qf-strong\">IV.</text><text x=\"58\" y=\"201\" class=\"qf-big\">₅B</text><rect x=\"135\" y=\"180\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"155\" y=\"201\" text-anchor=\"middle\" class=\"qf-big\">↑</text><rect x=\"205\" y=\"180\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"225\" y=\"201\" text-anchor=\"middle\" class=\"qf-big\">↑</text><rect x=\"245\" y=\"180\" width=\"40\" height=\"30\" class=\"qf-fill\"/><text x=\"265\" y=\"201\" text-anchor=\"middle\" class=\"qf-big\">↑</text><rect x=\"285\" y=\"180\" width=\"40\" height=\"30\" class=\"qf-fill\"/>"
      }
    },
    {
      "id": "u11-twin16",
      "stem": {
        "tr": "Şekildeki periyodik sistem kesitinde X, Y, Z ve T elementlerinin yerleri gösterilmiştir.\nI. Y'nin birinci iyonlaşma enerjisi X'inkinden küçüktür.\nII. T'nin birinci iyonlaşma enerjisi Z'ninkinden büyüktür.\nIII. Z'nin temel hâl elektron diziliminde son alt kabuk yarı doludur.\nyargılarından hangileri doğrudur?",
        "en": "The periodic-table section in the figure shows the positions of elements X, Y, Z and T. Which of the following statements are true?\nI. The first ionization energy of Y is smaller than that of X.\nII. The first ionization energy of T is greater than that of Z.\nIII. In the ground-state electron configuration of Z, the last sublevel is half-filled.",
        "de": "Der Ausschnitt des Periodensystems in der Abbildung zeigt die Positionen der Elemente X, Y, Z und T. Welche Aussagen sind richtig?\nI. Die erste Ionisierungsenergie von Y ist kleiner als die von X.\nII. Die erste Ionisierungsenergie von T ist größer als die von Z.\nIII. In der Grundzustandskonfiguration von Z ist das letzte Unterniveau halb besetzt.",
        "fr": "L'extrait du tableau périodique de la figure indique la position des éléments X, Y, Z et T. Quelles affirmations sont vraies ?\nI. La première énergie d'ionisation de Y est inférieure à celle de X.\nII. La première énergie d'ionisation de T est supérieure à celle de Z.\nIII. Dans la configuration de l'état fondamental de Z, la dernière sous-couche est à moitié remplie.",
        "ru": "На фрагменте периодической системы на рисунке показано положение элементов X, Y, Z и T. Какие утверждения верны?\nI. Первая энергия ионизации Y меньше, чем у X.\nII. Первая энергия ионизации T больше, чем у Z.\nIII. В электронной конфигурации основного состояния Z последний подуровень заполнен наполовину.",
        "ar": "يبيّن جزء الجدول الدوري في الشكل مواقع العناصر X وY وZ وT. أيّ العبارات الآتية صحيحة؟\nI. طاقة التأين الأولى للعنصر Y أصغر منها للعنصر X.\nII. طاقة التأين الأولى للعنصر T أكبر منها للعنصر Z.\nIII. في التوزيع الإلكتروني للحالة الأرضية للعنصر Z يكون المستوى الفرعي الأخير نصف ممتلئ.",
        "zh": "图中的元素周期表片段标出了元素 X、Y、Z、T 的位置。下列说法中哪些正确？\nI. Y 的第一电离能小于 X。\nII. T 的第一电离能大于 Z。\nIII. Z 的基态电子排布中最后一个亚层为半充满。",
        "ku": "Di beşa tabloya periyodîk a di şeklê de cihên elementên X, Y, Z û T hatine nîşandan. Kîjan ji van gotinan rast in?\nI. Enerjiya îyonîzasyonê ya yekem a Y ji ya X biçûktir e.\nII. Enerjiya îyonîzasyonê ya yekem a T ji ya Z mezintir e.\nIII. Di rêzkirina elektronan a rewşa bingehîn a Z de binqata dawî nîvtijî ye."
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
      "correctIndex": 3,
      "explanation": {
        "tr": "Şekilde X 2. periyot 2A (2s2, Be), Y 2. periyot 3A (2s2 2p1, B), Z 3. periyot 5A (3s2 3p3, P), T 3. periyot 6A (3s2 3p4, S) elementidir. I doğrudur: 2A'nın değerlik elektronları tam dolu 2s alt kabuğundadır; 3A'nın tek 2p elektronu daha kolay koparılır, bu yüzden İE1(Y) < İE1(X). II yanlıştır: Z'nin yarı dolu 3p3 alt kabuğu küresel simetrik ve kararlıdır; T'de 3p4'teki eşleşmiş elektronlar birbirini ittiği için bir elektron daha kolay kopar, İE1(T) < İE1(Z). III doğrudur: Z'nin son alt kabuğu 3p3'tür, yarı doludur. İyonlaşma enerjisinin periyotta soldan sağa hiç istisnasız arttığını sanmak tipik bir hatadır.",
        "en": "From the figure, X is the period-2 group-2A element (2s2, Be), Y the period-2 group-3A element (2s2 2p1, B), Z the period-3 group-5A element (3s2 3p3, P) and T the period-3 group-6A element (3s2 3p4, S). I is true: the valence electrons of 2A are in the full 2s sublevel, while the single 2p electron of 3A is removed more easily, so IE1(Y) < IE1(X). II is false: Z's half-filled 3p3 sublevel is spherically symmetric and stable; in T the paired electrons of 3p4 repel each other, so one is removed more easily and IE1(T) < IE1(Z). III is true: Z's last sublevel is 3p3, which is half-filled. Thinking that ionization energy always increases across a period without exception is a typical mistake.",
        "de": "Laut Abbildung ist X das Element der 2. Periode, Gruppe 2A (2s2, Be), Y das der 2. Periode, Gruppe 3A (2s2 2p1, B), Z das der 3. Periode, Gruppe 5A (3s2 3p3, P) und T das der 3. Periode, Gruppe 6A (3s2 3p4, S). I ist richtig: Die Valenzelektronen von 2A befinden sich im vollen 2s-Unterniveau, das einzelne 2p-Elektron von 3A wird leichter abgegeben, also IE1(Y) < IE1(X). II ist falsch: Das halb besetzte 3p3-Unterniveau von Z ist kugelsymmetrisch und stabil; bei T stoßen sich die gepaarten Elektronen in 3p4 ab, daher wird eines leichter abgegeben und IE1(T) < IE1(Z). III ist richtig: Das letzte Unterniveau von Z ist 3p3 und halb besetzt. Ein typischer Fehler ist anzunehmen, die Ionisierungsenergie nehme innerhalb einer Periode ausnahmslos zu.",
        "fr": "D'après la figure, X est l'élément de la 2e période, groupe 2A (2s2, Be), Y celui de la 2e période, groupe 3A (2s2 2p1, B), Z celui de la 3e période, groupe 5A (3s2 3p3, P) et T celui de la 3e période, groupe 6A (3s2 3p4, S). I est vraie : les électrons de valence du groupe 2A sont dans la sous-couche 2s pleine, tandis que l'unique électron 2p du groupe 3A s'arrache plus facilement, donc EI1(Y) < EI1(X). II est fausse : la sous-couche 3p3 à moitié remplie de Z est à symétrie sphérique et stable ; dans T, les électrons appariés de 3p4 se repoussent, l'un d'eux s'arrache plus facilement et EI1(T) < EI1(Z). III est vraie : la dernière sous-couche de Z est 3p3, à moitié remplie. Croire que l'énergie d'ionisation augmente sans exception le long d'une période est une erreur typique.",
        "ru": "По рисунку X — элемент 2-го периода группы 2A (2s2, Be), Y — 2-го периода группы 3A (2s2 2p1, B), Z — 3-го периода группы 5A (3s2 3p3, P), T — 3-го периода группы 6A (3s2 3p4, S). I верно: валентные электроны элемента 2A находятся на заполненном 2s-подуровне, а единственный 2p-электрон элемента 3A отрывается легче, поэтому ЭИ1(Y) < ЭИ1(X). II неверно: наполовину заполненный 3p3-подуровень Z сферически симметричен и устойчив; у T спаренные электроны 3p4 отталкиваются, поэтому один из них отрывается легче и ЭИ1(T) < ЭИ1(Z). III верно: последний подуровень Z — 3p3, заполненный наполовину. Считать, что энергия ионизации в периоде растёт без исключений, — типичная ошибка.",
        "ar": "من الشكل: X عنصر الدورة الثانية في المجموعة 2A (2s2، Be)، وY عنصر الدورة الثانية في المجموعة 3A (2s2 2p1، B)، وZ عنصر الدورة الثالثة في المجموعة 5A (3s2 3p3، P)، وT عنصر الدورة الثالثة في المجموعة 6A (3s2 3p4، S). العبارة I صحيحة: إلكترونات تكافؤ 2A في المستوى الفرعي 2s الممتلئ، أما إلكترون 2p الوحيد في 3A فيُنزع بسهولة أكبر، لذا IE1(Y) < IE1(X). العبارة II خاطئة: المستوى الفرعي 3p3 نصف الممتلئ في Z متناظر كرويًا ومستقر، وفي T تتنافر الإلكترونات المزدوجة في 3p4 فيُنزع أحدها بسهولة أكبر، لذا IE1(T) < IE1(Z). العبارة III صحيحة: المستوى الفرعي الأخير في Z هو 3p3 وهو نصف ممتلئ. ومن الأخطاء الشائعة الظن أن طاقة التأين تزداد عبر الدورة دون أي استثناء.",
        "zh": "由图可知，X 是第 2 周期 2A 族元素(2s2，Be)，Y 是第 2 周期 3A 族元素(2s2 2p1，B)，Z 是第 3 周期 5A 族元素(3s2 3p3，P)，T 是第 3 周期 6A 族元素(3s2 3p4，S)。I 正确：2A 族的价电子在全充满的 2s 亚层，而 3A 族唯一的 2p 电子更易失去，所以 IE1(Y) < IE1(X)。II 错误：Z 的 3p3 亚层半充满，呈球形对称而稳定；T 的 3p4 中成对电子相互排斥，其中一个更易失去，所以 IE1(T) < IE1(Z)。III 正确：Z 的最后一个亚层是半充满的 3p3。认为同周期电离能毫无例外地递增，是典型错误。",
        "ku": "Li gorî şeklê X elementa periyoda 2. ya koma 2A (2s2, Be), Y ya periyoda 2. ya koma 3A (2s2 2p1, B), Z ya periyoda 3. ya koma 5A (3s2 3p3, P) û T ya periyoda 3. ya koma 6A (3s2 3p4, S) ye. I rast e: elektronên valansê yên 2A di binqata 2s a tijî de ne; elektrona 2p a tenê ya 3A hêsantir tê qetandin, ji ber vê yekê IE1(Y) < IE1(X). II şaş e: binqata 3p3 a nîvtijî ya Z xwedî sîmetriya gewherî û aram e; li T elektronên cot ên 3p4 hev dehf didin, ji ber vê yekê yek ji wan hêsantir tê qetandin û IE1(T) < IE1(Z). III rast e: binqata dawî ya Z 3p3 e û nîvtijî ye. Hesibandina ku enerjiya îyonîzasyonê di periyodê de bê îstisna zêde dibe xeletiyeke tîpîk e."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 120,
        "markup": "<text x=\"63.0\" y=\"24\" text-anchor=\"middle\" class=\"qf-small\">1A</text><text x=\"101.0\" y=\"24\" text-anchor=\"middle\" class=\"qf-small\">2A</text><text x=\"139.0\" y=\"24\" text-anchor=\"middle\" class=\"qf-small\">3A</text><text x=\"177.0\" y=\"24\" text-anchor=\"middle\" class=\"qf-small\">4A</text><text x=\"215.0\" y=\"24\" text-anchor=\"middle\" class=\"qf-small\">5A</text><text x=\"253.0\" y=\"24\" text-anchor=\"middle\" class=\"qf-small\">6A</text><text x=\"291.0\" y=\"24\" text-anchor=\"middle\" class=\"qf-small\">7A</text><text x=\"329.0\" y=\"24\" text-anchor=\"middle\" class=\"qf-small\">8A</text><text x=\"30\" y=\"57.0\" text-anchor=\"middle\" class=\"qf-strong\">2</text><rect x=\"44\" y=\"34\" width=\"38\" height=\"36\" class=\"qf-fill\"/><rect x=\"82\" y=\"34\" width=\"38\" height=\"36\" class=\"qf-accent\"/><text x=\"101.0\" y=\"58.0\" text-anchor=\"middle\" class=\"qf-big\">X</text><rect x=\"120\" y=\"34\" width=\"38\" height=\"36\" class=\"qf-accent\"/><text x=\"139.0\" y=\"58.0\" text-anchor=\"middle\" class=\"qf-big\">Y</text><rect x=\"158\" y=\"34\" width=\"38\" height=\"36\" class=\"qf-fill\"/><rect x=\"196\" y=\"34\" width=\"38\" height=\"36\" class=\"qf-fill\"/><rect x=\"234\" y=\"34\" width=\"38\" height=\"36\" class=\"qf-fill\"/><rect x=\"272\" y=\"34\" width=\"38\" height=\"36\" class=\"qf-fill\"/><rect x=\"310\" y=\"34\" width=\"38\" height=\"36\" class=\"qf-fill\"/><text x=\"30\" y=\"93.0\" text-anchor=\"middle\" class=\"qf-strong\">3</text><rect x=\"44\" y=\"70\" width=\"38\" height=\"36\" class=\"qf-fill\"/><rect x=\"82\" y=\"70\" width=\"38\" height=\"36\" class=\"qf-fill\"/><rect x=\"120\" y=\"70\" width=\"38\" height=\"36\" class=\"qf-fill\"/><rect x=\"158\" y=\"70\" width=\"38\" height=\"36\" class=\"qf-fill\"/><rect x=\"196\" y=\"70\" width=\"38\" height=\"36\" class=\"qf-accent\"/><text x=\"215.0\" y=\"94.0\" text-anchor=\"middle\" class=\"qf-big\">Z</text><rect x=\"234\" y=\"70\" width=\"38\" height=\"36\" class=\"qf-accent\"/><text x=\"253.0\" y=\"94.0\" text-anchor=\"middle\" class=\"qf-big\">T</text><rect x=\"272\" y=\"70\" width=\"38\" height=\"36\" class=\"qf-fill\"/><rect x=\"310\" y=\"70\" width=\"38\" height=\"36\" class=\"qf-fill\"/><rect x=\"44\" y=\"34\" width=\"304\" height=\"72\" class=\"qf-line\"/><text x=\"30\" y=\"24\" text-anchor=\"middle\" class=\"qf-small\">{{per}}</text>",
        "labels": {
          "per": {
            "tr": "Per.",
            "en": "Per.",
            "de": "Per.",
            "fr": "Pér.",
            "ru": "Пер.",
            "ar": "الدورة",
            "zh": "周期",
            "ku": "Per."
          }
        }
      }
    }
  ]
};

export default unit11;
