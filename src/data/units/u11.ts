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
    "ku": "Teoriya Modêrn a Atomê"
  },
  "subtitle": {
    "tr": "Kuantum Sayıları, Aufbau ve Elektron Dizilimleri",
    "en": "Quantum Numbers & Electron Configurations",
    "de": "Quantenzahlen, Aufbau und Elektronenkonfigurationen",
    "fr": "Nombres quantiques, Aufbau et configurations électroniques",
    "ru": "Квантовые числа, Ауфбау и электронные конфигурации",
    "ar": "أرقام الكم، أوفباو وتكوينات الإلكترون",
    "zh": "量子数、Aufbau 和电子构型",
    "ku": "Hejmarên Quantum, Aufbau û Vesazkirinên Elektronê"
  },
  "facts": [
    {
      "id": "u11-f01",
      "fact": {
        "tr": "Baş kuantum sayısı (n), elektronun çekirdeğe olan ortalama uzaklığını ve temel enerji düzeyini belirtir (n = 1, 2, 3...).",
        "en": "The principal quantum number (n) indicates the average distance of the electron from the nucleus and its principal energy level (n = 1, 2, 3...).",
        "de": "Die Hauptquantenzahl (n) gibt den durchschnittlichen Abstand des Elektrons vom Kern und sein Hauptenergieniveau an (n = 1, 2, 3...).",
        "fr": "Le nombre quantique principal (n) indique la distance moyenne de l'électron au noyau et son niveau d'énergie principal (n = 1, 2, 3...).",
        "ru": "Главное квантовое число (n) указывает среднее расстояние электрона от ядра и его главный энергетический уровень (n = 1, 2, 3...).",
        "ar": "يشير رقم الكم الرئيسي (n) إلى متوسط مسافة الإلكترون من النواة ومستوى طاقته الرئيسي (n = 1، 2، 3...).",
        "zh": "主量子数 (n) 表示电子距原子核的平均距离及其主能级 (n = 1, 2, 3...)。",
        "ku": "Hejmara kuantûmê ya sereke (n) dûrahiya navîn a elektronê ji navokê û asta enerjiya wê ya sereke (n = 1, 2, 3...) nîşan dide."
      },
      "trap": {
        "tr": "Baş kuantum sayısı orbitalin uzaydaki yönelimini belirtir.",
        "en": "The principal quantum number specifies the orientation of the orbital in space.",
        "de": "Die Hauptquantenzahl gibt die Orientierung des Orbitals im Raum an.",
        "fr": "Le nombre quantique principal spécifie l'orientation de l'orbitale dans l'espace.",
        "ru": "Главное квантовое число определяет ориентацию орбитали в пространстве.",
        "ar": "يحدد رقم الكم الرئيسي اتجاه المدار في الفضاء.",
        "zh": "主量子数指定了轨道在空间中的方向。",
        "ku": "Jimara kuantûmê ya sereke arastekirina orbîtalê li fezayê diyar dike."
      },
      "whyTrapIsFalse": {
        "tr": "Orbitalin uzaydaki yönelimini manyetik kuantum sayısı (ml) belirtir; n ise yalnızca enerji düzeyini (katmanı) ve elektronun çekirdeğe ortalama uzaklığını gösterir.",
        "en": "The orientation of an orbital in space is given by the magnetic quantum number (ml); n only gives the energy level (shell) and the electron's average distance from the nucleus.",
        "de": "Die räumliche Ausrichtung eines Orbitals gibt die magnetische Quantenzahl (ml) an; n gibt nur das Energieniveau (die Schale) und den mittleren Abstand des Elektrons vom Kern an.",
        "fr": "L'orientation d'une orbitale dans l'espace est donnée par le nombre quantique magnétique (ml) ; n indique seulement le niveau d'énergie (la couche) et la distance moyenne de l'électron au noyau.",
        "ru": "Ориентацию орбитали в пространстве задаёт магнитное квантовое число (ml); n указывает только энергетический уровень (слой) и среднее расстояние электрона от ядра.",
        "ar": "يحدد عدد الكم المغناطيسي (ml) اتجاه المدار في الفراغ؛ أما n فيدل فقط على مستوى الطاقة (الغلاف) ومتوسط بعد الإلكترون عن النواة.",
        "zh": "轨道在空间中的取向由磁量子数 (ml) 决定；n 只表示能层（电子层）以及电子与原子核的平均距离。",
        "ku": "Arasteya orbîtalê di fezayê de bi hejmara kuantûmê ya magnetîkî (ml) tê diyarkirin; n tenê asta enerjiyê (qatê) û dûrahiya navînî ya elektronê ji navikê nîşan dide."
      }
    },
    {
      "id": "u11-f02",
      "fact": {
        "tr": "Açısal momentum kuantum sayısı (l), orbitalin türünü ve şeklini belirtir (l = 0 s, l = 1 p, l = 2 d, l = 3 f).",
        "en": "The angular momentum quantum number (l) specifies the type and shape of the orbital (l = 0 s, l = 1 p, l = 2 d, l = 3 f).",
        "de": "Die Drehimpulsquantenzahl (l) gibt Art und Form des Orbitals an (l = 0 s, l = 1 p, l = 2 d, l = 3 f).",
        "fr": "Le nombre quantique du moment cinétique (l) spécifie le type et la forme de l'orbitale (l = 0 s, l = 1 p, l = 2 d, l = 3 f).",
        "ru": "Квантовое число углового момента (l) определяет тип и форму орбитали (l = 0 s, l = 1 p, l = 2 d, l = 3 f).",
        "ar": "يحدد الرقم الكمي للزخم الزاوي (l) نوع وشكل المدار (l = 0 s، l = 1 p، l = 2 d، l = 3 f).",
        "zh": "角动量量子数 (l) 指定轨道的类型和形状（l = 0 s、l = 1 p、l = 2 d、l = 3 f）。",
        "ku": "Hejmara kuantûmê ya momenta goşeyî (l) cure û şiklê orbîtalê diyar dike (l = 0 s, l = 1 p, l = 2 d, l = 3 f)."
      },
      "trap": {
        "tr": "l = 2 açısal momentum sayısı p orbitalini temsil eder.",
        "en": "The angular momentum number l = 2 represents the p orbital.",
        "de": "Die Drehimpulszahl l = 2 repräsentiert das p-Orbital.",
        "fr": "Le nombre de moment cinétique l = 2 représente l'orbitale p.",
        "ru": "Число углового момента l = 2 представляет p-орбиталь.",
        "ar": "يمثل عدد الزخم الزاوي l = 2 المدار p.",
        "zh": "角动量数 l = 2 代表 p 轨道。",
        "ku": "Hejmara kuantûmê ya momenta goşeyî l = 2 orbîtala p nîşan dide."
      },
      "whyTrapIsFalse": {
        "tr": "p orbitali l = 1 ile gösterilir; l = 2 d orbitaline karşılık gelir. Sıralama l = 0, 1, 2, 3 için s, p, d, f şeklindedir.",
        "en": "The p orbital corresponds to l = 1; l = 2 corresponds to the d orbital. The order for l = 0, 1, 2, 3 is s, p, d, f.",
        "de": "Das p-Orbital entspricht l = 1; l = 2 entspricht dem d-Orbital. Für l = 0, 1, 2, 3 lautet die Reihenfolge s, p, d, f.",
        "fr": "L'orbitale p correspond à l = 1 ; l = 2 correspond à l'orbitale d. Pour l = 0, 1, 2, 3, l'ordre est s, p, d, f.",
        "ru": "p-орбитали соответствует l = 1; l = 2 соответствует d-орбитали. Для l = 0, 1, 2, 3 порядок: s, p, d, f.",
        "ar": "يقابل المدار p القيمة l = 1، أما l = 2 فيقابل المدار d. الترتيب للقيم l = 0، 1، 2، 3 هو s، p، d، f.",
        "zh": "p 轨道对应 l = 1；l = 2 对应 d 轨道。l = 0、1、2、3 依次对应 s、p、d、f。",
        "ku": "Orbîtala p bi l = 1 tê nîşandan; l = 2 orbîtala d ye. Ji bo l = 0, 1, 2, 3 rêz s, p, d, f e."
      }
    },
    {
      "id": "u11-f03",
      "fact": {
        "tr": "Manyetik kuantum sayısı (ml), orbitalin uzaydaki yönelimini belirtir ve -l ile +l arasındaki tamsayı değerlerini alır.",
        "en": "The magnetic quantum number (ml) indicates the orientation of the orbital in space and takes integer values between -l and +l.",
        "de": "Die magnetische Quantenzahl (ml) gibt die Orientierung des Orbitals im Raum an und nimmt ganzzahlige Werte zwischen -l und +l an.",
        "fr": "Le nombre quantique magnétique (ml) indique l'orientation de l'orbitale dans l'espace et prend des valeurs entières comprises entre -l et +l.",
        "ru": "Магнитное квантовое число (ml) указывает на ориентацию орбитали в пространстве и принимает целые значения от -l до +l.",
        "ar": "يشير رقم الكم المغناطيسي (ml) إلى اتجاه المدار في الفضاء ويأخذ قيمًا صحيحة بين -l و+l.",
        "zh": "磁量子数（ml）表示轨道在空间中的取向，取-l到+l之间的整数值。",
        "ku": "Hejmara quantumê ya magnetîkî (ml) arastekirina orbîtalê li fezayê destnîşan dike û jimareyên yekjimar di navbera -l û +l de digire."
      },
      "trap": {
        "tr": "d orbitalleri için ml sadece -1, 0, +1 değerlerini alır.",
        "en": "For d orbitals ml only takes the values -1, 0, +1.",
        "de": "Für d-Orbitale nimmt ml nur die Werte -1, 0, +1 an.",
        "fr": "Pour les orbitales d, ml ne prend que les valeurs -1, 0, +1.",
        "ru": "Для d-орбиталей ml принимает только значения -1, 0, +1.",
        "ar": "بالنسبة للمدارات d، يأخذ ml فقط القيم -1، 0، +1.",
        "zh": "对于d轨道，ml仅取值-1、0、+1。",
        "ku": "Ji bo d orbitals ml tenê nirxan -1, 0, +1 digire."
      },
      "whyTrapIsFalse": {
        "tr": "-1, 0, +1 değerleri l = 1 olan p orbitallerine aittir. d orbitallerinde l = 2 olduğundan ml = -2, -1, 0, +1, +2 olmak üzere 5 değer alır.",
        "en": "The values -1, 0, +1 belong to the p orbitals (l = 1). For d orbitals l = 2, so ml takes five values: -2, -1, 0, +1, +2.",
        "de": "Die Werte -1, 0, +1 gehören zu den p-Orbitalen (l = 1). Bei d-Orbitalen ist l = 2, daher nimmt ml fünf Werte an: -2, -1, 0, +1, +2.",
        "fr": "Les valeurs -1, 0, +1 appartiennent aux orbitales p (l = 1). Pour les orbitales d, l = 2, donc ml prend cinq valeurs : -2, -1, 0, +1, +2.",
        "ru": "Значения -1, 0, +1 относятся к p-орбиталям (l = 1). Для d-орбиталей l = 2, поэтому ml принимает пять значений: -2, -1, 0, +1, +2.",
        "ar": "القيم -1 و0 و+1 تخص مدارات p (l = 1). أما في مدارات d فإن l = 2، لذا يأخذ ml خمس قيم: -2، -1، 0، +1، +2.",
        "zh": "-1、0、+1 是 p 轨道 (l = 1) 的取值。d 轨道的 l = 2，因此 ml 有 -2、-1、0、+1、+2 五个取值。",
        "ku": "Nirxên -1, 0, +1 yên orbîtalên p (l = 1) ne. Di orbîtalên d de l = 2 ye, loma ml pênc nirxan digire: -2, -1, 0, +1, +2."
      }
    },
    {
      "id": "u11-f04",
      "fact": {
        "tr": "Spin kuantum sayısı (ms), elektronun spininin (dönme hareketinin) yönünü gösterir ve +1/2 veya -1/2 değerini alır; spin klasik bir dönme değil, elektronun kuantum özelliğidir.",
        "en": "The spin quantum number (ms) shows the direction of the electron's spin and takes the value +1/2 or -1/2; spin is a quantum property of the electron, not a literal rotation.",
        "de": "Die Spinquantenzahl (ms) gibt die Richtung des Elektronenspins an und nimmt den Wert +1/2 oder -1/2 an; der Spin ist eine Quanteneigenschaft des Elektrons, keine klassische Drehung.",
        "fr": "Le nombre quantique de spin (ms) indique le sens du spin de l'électron et vaut +1/2 ou -1/2 ; le spin est une propriété quantique de l'électron, pas une rotation au sens classique.",
        "ru": "Спиновое квантовое число (ms) указывает направление спина электрона и принимает значение +1/2 или -1/2; спин — квантовое свойство электрона, а не буквальное вращение.",
        "ar": "يدل عدد الكم المغزلي (ms) على اتجاه مغزل (سبين) الإلكترون ويأخذ القيمة +1/2 أو -1/2؛ والمغزل خاصية كمية للإلكترون وليس دورانًا بالمعنى التقليدي.",
        "zh": "自旋量子数 (ms) 表示电子自旋的方向，取值 +1/2 或 -1/2；自旋是电子的量子性质，并非经典意义上的自转。",
        "ku": "Hejmara kuantûmê ya spinê (ms) arasteya spina elektronê nîşan dide û nirxa +1/2 an -1/2 digire; spin taybetmendiyeke kuantûmî ya elektronê ye, ne zivirîneke klasîk e."
      },
      "trap": {
        "tr": "Bir orbitalde aynı spinli iki elektron bulunabilir.",
        "en": "An orbital can contain two electrons with the same spin.",
        "de": "Ein Orbital kann zwei Elektronen mit demselben Spin enthalten.",
        "fr": "Une orbitale peut contenir deux électrons de même spin.",
        "ru": "На орбитали могут находиться два электрона с одинаковым спином.",
        "ar": "يمكن أن يحتوي المدار على إلكترونين لهما نفس الدوران.",
        "zh": "轨道可以包含两个具有相同自旋的电子。",
        "ku": "Orbîtalek dikare du elektronên bi heman spinê hebin."
      },
      "whyTrapIsFalse": {
        "tr": "Aynı orbitaldeki iki elektronun n, l ve ml değerleri zaten aynıdır; spinleri de aynı olsaydı dört kuantum sayısı özdeş olurdu. Pauli ilkesi buna izin vermediği için elektronlar zıt spinli olmak zorundadır.",
        "en": "Two electrons in the same orbital already share n, l and ml; if their spins were also equal, all four quantum numbers would be identical. The Pauli principle forbids this, so the electrons must have opposite spins.",
        "de": "Zwei Elektronen im selben Orbital haben bereits gleiche n, l und ml; wäre auch ihr Spin gleich, wären alle vier Quantenzahlen identisch. Das Pauli-Prinzip verbietet dies, daher müssen sie entgegengesetzten Spin haben.",
        "fr": "Deux électrons d'une même orbitale ont déjà les mêmes n, l et ml ; si leurs spins étaient aussi égaux, les quatre nombres quantiques seraient identiques. Le principe de Pauli l'interdit, donc leurs spins doivent être opposés.",
        "ru": "У двух электронов одной орбитали n, l и ml уже совпадают; если бы совпадали и спины, все четыре квантовых числа были бы одинаковыми. Принцип Паули это запрещает, поэтому спины должны быть противоположными.",
        "ar": "الإلكترونان في المدار نفسه لهما بالفعل القيم نفسها لـ n وl وml؛ ولو تساوى مغزلاهما أيضًا لتطابقت أعداد الكم الأربعة. مبدأ باولي يمنع ذلك، لذا يجب أن يكون مغزلاهما متعاكسين.",
        "zh": "同一轨道中的两个电子 n、l、ml 已经相同；如果自旋也相同，四个量子数就完全相同。泡利原理不允许这种情况，因此它们必须自旋相反。",
        "ku": "Du elektronên di heman orbîtalê de jixwe n, l û ml wekhev in; heke spinên wan jî wekhev bûna, her çar hejmarên kuantûmê dê yek bûna. Prensîba Pauli destûr nade, loma divê spinên wan berevajî bin."
      }
    },
    {
      "id": "u11-f05",
      "fact": {
        "tr": "Pauli Dışlama İlkesi: Bir atomda hiçbir iki elektronun 4 kuantum sayısının dördü de aynı olamaz.",
        "en": "Pauli Exclusion Principle: No two electrons in an atom can have the same four quantum numbers.",
        "de": "Pauli-Ausschlussprinzip: Keine zwei Elektronen in einem Atom können die gleichen vier Quantenzahlen haben.",
        "fr": "Principe d'exclusion de Pauli : Deux électrons dans un atome ne peuvent pas avoir les mêmes quatre nombres quantiques.",
        "ru": "Принцип Паули: никакие два электрона в атоме не могут иметь одинаковые четыре квантовых числа.",
        "ar": "مبدأ استبعاد باولي: لا يمكن لإلكترونين في الذرة أن يكون لهما نفس أعداد الكم الأربعة.",
        "zh": "泡利不相容原理：原子中没有两个电子可以具有相同的四个量子数。",
        "ku": "Prensîba Derxistina Pauli: Di atomê de du elektron nikarin heman çar hejmarên kuantûmê hebin."
      },
      "trap": {
        "tr": "Pauli ilkesine göre bir orbitale zıt spinli 3 elektron yerleşebilir.",
        "en": "According to the Pauli principle, three electrons with opposite spins can occupy an orbital.",
        "de": "Nach dem Pauli-Prinzip können drei Elektronen mit entgegengesetztem Spin ein Orbital besetzen.",
        "fr": "Selon le principe de Pauli, trois électrons de spins opposés peuvent occuper une orbitale.",
        "ru": "Согласно принципу Паули, три электрона с противоположными спинами могут занимать орбиталь.",
        "ar": "وفقًا لمبدأ باولي، يمكن لثلاثة إلكترونات ذات دوران متضاد أن تشغل مدارًا.",
        "zh": "根据泡利原理，三个自旋相反的电子可以占据一个轨道。",
        "ku": "Li gorî prensîba Pauli, sê elektronên bi spinên berevajî dikarin orbitalek dagir bikin."
      },
      "whyTrapIsFalse": {
        "tr": "ms yalnızca +1/2 ve -1/2 olmak üzere iki değer alabildiğinden bir orbitalde en fazla iki elektron bulunur; üçüncü elektron, öncekilerden birinin dört kuantum sayısını tekrarlamak zorunda kalırdı.",
        "en": "Since ms can only be +1/2 or -1/2, an orbital holds at most two electrons; a third electron would have to repeat all four quantum numbers of one of the others.",
        "de": "Da ms nur +1/2 oder -1/2 sein kann, fasst ein Orbital höchstens zwei Elektronen; ein drittes Elektron müsste alle vier Quantenzahlen eines anderen wiederholen.",
        "fr": "Comme ms ne peut valoir que +1/2 ou -1/2, une orbitale contient au plus deux électrons ; un troisième électron devrait répéter les quatre nombres quantiques de l'un des autres.",
        "ru": "Поскольку ms может быть только +1/2 или -1/2, на орбитали помещается не более двух электронов; третий электрон повторил бы все четыре квантовых числа одного из них.",
        "ar": "لأن ms لا يأخذ إلا القيمتين +1/2 و-1/2، يتسع المدار لإلكترونين على الأكثر؛ فالإلكترون الثالث سيضطر إلى تكرار أعداد الكم الأربعة لأحد الإلكترونين الآخرين.",
        "zh": "ms 只能取 +1/2 或 -1/2，所以一个轨道最多容纳两个电子；第三个电子必然与其中一个电子的四个量子数完全相同。",
        "ku": "Ji ber ku ms tenê dikare +1/2 an -1/2 be, orbîtalek herî zêde du elektronan digire; elektrona sêyem dê neçar bimaya her çar hejmarên kuantûmê yên yekê din dubare bike."
      }
    },
    {
      "id": "u11-f06",
      "fact": {
        "tr": "Aufbau Kuralı: Elektronlar orbitallere enerjisi en düşük olan orbitalden başlayarak doldurulur (n + l kuralı).",
        "en": "Aufbau Rule: Electrons are filled into orbitals starting from the orbital with the lowest energy (n + l rule).",
        "de": "Aufbauregel: Elektronen werden in Orbitale gefüllt, beginnend mit dem Orbital mit der niedrigsten Energie (n + l-Regel).",
        "fr": "Règle d'Aufbau : les électrons sont remplis dans des orbitales en commençant par l'orbitale ayant la plus faible énergie (règle n + l).",
        "ru": "Правило Ауфбау: электроны заполняются на орбитали, начиная с орбитали с наименьшей энергией (правило n + l).",
        "ar": "قاعدة أوفباو: تمتلئ الإلكترونات بالمدارات بدءًا من المدار ذي الطاقة الأقل (قاعدة n + l).",
        "zh": "构造原理（Aufbau 规则）：电子从能量最低的轨道开始填充到轨道中（n + l 规则）。",
        "ku": "Rêbaza Aufbau: Elektron di orbitalên ku ji orbîtala bi enerjiya herî hindik dest pê dikin têne dagirtin (qanûna n + l)."
      },
      "trap": {
        "tr": "Aufbau kuralına göre 3d orbitali daima 4s orbitalinden önce doldurulur.",
        "en": "According to the Aufbau rule, the 3d orbital is always filled before the 4s orbital.",
        "de": "Nach der Aufbau-Regel wird das 3d-Orbital immer vor dem 4s-Orbital gefüllt.",
        "fr": "Selon la règle d'Aufbau, l'orbitale 3d est toujours remplie avant l'orbitale 4s.",
        "ru": "Согласно правилу Ауфбау, 3d-орбиталь всегда заполняется раньше 4s-орбитали.",
        "ar": "وفقًا لقاعدة أوفباو، فإن المدار 3d يمتلئ دائمًا قبل المدار 4s.",
        "zh": "根据 Aufbau 规则，3d 轨道总是在 4s 轨道之前被填充。",
        "ku": "Li gorî qaîdeya Aufbau, orbîtala 3d her dem berî orbitala 4s tê dagirtin."
      },
      "whyTrapIsFalse": {
        "tr": "4s'in n + l değeri 4, 3d'ninki 5'tir. n + l değeri küçük olan orbital daha düşük enerjili olduğundan önce 4s, sonra 3d doldurulur.",
        "en": "4s has n + l = 4 while 3d has n + l = 5. The orbital with the smaller n + l is lower in energy, so 4s is filled first and then 3d.",
        "de": "4s hat n + l = 4, 3d dagegen n + l = 5. Das Orbital mit kleinerem n + l ist energieärmer, daher wird zuerst 4s und dann 3d besetzt.",
        "fr": "4s a n + l = 4 alors que 3d a n + l = 5. L'orbitale de plus petit n + l est plus basse en énergie : 4s se remplit d'abord, puis 3d.",
        "ru": "У 4s n + l = 4, у 3d n + l = 5. Орбиталь с меньшим n + l ниже по энергии, поэтому сначала заполняется 4s, затем 3d.",
        "ar": "قيمة n + l للمدار 4s تساوي 4 وللمدار 3d تساوي 5. المدار ذو القيمة الأصغر أقل طاقة، لذا يمتلئ 4s أولًا ثم 3d.",
        "zh": "4s 的 n + l = 4，3d 的 n + l = 5。n + l 较小的轨道能量较低，所以先填 4s，再填 3d。",
        "ku": "Nirxa n + l ya 4s 4 e, ya 3d 5 e. Orbîtala bi n + l ya biçûktir enerjiya wê kêmtir e, loma pêşî 4s paşê 3d tê dagirtin."
      }
    },
    {
      "id": "u11-f07",
      "fact": {
        "tr": "Hund Kuralı: Eş enerjili orbitallere elektronlar önce aynı spinle birer birer yerleştirilir.",
        "en": "Hund's Rule: Electrons are first placed into orbitals of equal energy, one by one, with the same spin.",
        "de": "Hundsche Regel: Elektronen werden zunächst nacheinander in Orbitale mit gleicher Energie und demselben Spin gebracht.",
        "fr": "Règle de Hund : les électrons sont d'abord placés sur des orbitales d'énergie égale, un par un, avec le même spin.",
        "ru": "Правило Хунда: электроны сначала помещаются на орбитали одинаковой энергии, один за другим, с одинаковым спином.",
        "ar": "قاعدة هوند: يتم وضع الإلكترونات أولاً في مدارات متساوية الطاقة، واحدًا تلو الآخر، بنفس الدوران.",
        "zh": "洪特规则：电子首先被一个接一个地放入具有相同自旋的等能量轨道中。",
        "ku": "Rêbaza Hund: Elektron pêşî li orbîtalên enerjiya wekhev, yek bi yek, bi heman spinê têne danîn."
      },
      "trap": {
        "tr": "Elektronlar eş enerjili orbitallere önce zıt spinle çiftler halinde girer.",
        "en": "Electrons first enter orbitals of equal energy in pairs with opposite spin.",
        "de": "Elektronen treten zunächst paarweise mit entgegengesetztem Spin in Orbitale gleicher Energie ein.",
        "fr": "Les électrons entrent d’abord dans des orbitales d’énergie égale par paires de spin opposé.",
        "ru": "Электроны сначала выходят на орбитали равной энергии парами с противоположным спином.",
        "ar": "تدخل الإلكترونات أولًا مدارات ذات طاقة متساوية في أزواج ذات دوران معاكس.",
        "zh": "电子首先成对进入具有相反自旋的等能量轨道。",
        "ku": "Elektron yekem car dikevin orbitalên enerjiyê yên wekhev bi cotek bi spin berevajî."
      },
      "whyTrapIsFalse": {
        "tr": "Elektronlar birbirini iter; eş enerjili orbitallerde önce ayrı orbitallere paralel spinle yerleşmek daha düşük enerjili bir düzendir. Eşleşme ancak her orbitalde birer elektron olduktan sonra başlar.",
        "en": "Electrons repel each other; in degenerate orbitals, occupying separate orbitals with parallel spins first is the lower-energy arrangement. Pairing starts only after each orbital has one electron.",
        "de": "Elektronen stoßen sich ab; in entarteten Orbitalen ist es energetisch günstiger, zuerst getrennte Orbitale mit parallelem Spin zu besetzen. Die Paarung beginnt erst, wenn jedes Orbital ein Elektron hat.",
        "fr": "Les électrons se repoussent ; dans des orbitales dégénérées, occuper d'abord des orbitales séparées avec des spins parallèles est l'arrangement de plus basse énergie. L'appariement ne commence que lorsque chaque orbitale a un électron.",
        "ru": "Электроны отталкиваются; в вырожденных орбиталях энергетически выгоднее сначала занять разные орбитали с параллельными спинами. Спаривание начинается только после того, как в каждой орбитали окажется по одному электрону.",
        "ar": "تتنافر الإلكترونات فيما بينها؛ ففي المدارات المتساوية الطاقة يكون توزيعها أولًا في مدارات منفصلة بمغازل متوازية هو الترتيب الأقل طاقة. ولا يبدأ الازدواج إلا بعد أن يحوي كل مدار إلكترونًا واحدًا.",
        "zh": "电子之间相互排斥；在能量相同的轨道中，先以平行自旋分占不同轨道能量更低。只有每个轨道都有一个电子后才开始成对。",
        "ku": "Elektron hevdu dehf didin; di orbîtalên wekhev-enerjî de, pêşî bi spina paralel li orbîtalên cuda bicihbûn rêzkirina bi enerjiya kêmtir e. Cotbûn tenê piştî ku di her orbîtalê de yek elektron hebe dest pê dike."
      }
    },
    {
      "id": "u11-f08",
      "fact": {
        "tr": "24Cr ([Ar] 4s1 3d5) ve 29Cu ([Ar] 4s1 3d10) elektron dizilimleri küresel simetri kararlılığı nedeniyle özel durumlardır.",
        "en": "The 24Cr ([Ar] 4s1 3d5) and 29Cu ([Ar] 4s1 3d10) electron configurations are special cases due to spherical symmetry stability.",
        "de": "Die Elektronenkonfigurationen 24Cr ([Ar] 4s1 3d5) und 29Cu ([Ar] 4s1 3d10) sind aufgrund der sphärischen Symmetriestabilität Sonderfälle.",
        "fr": "Les configurations électroniques 24Cr ([Ar] 4s1 3d5) et 29Cu ([Ar] 4s1 3d10) sont des cas particuliers en raison de la stabilité de la symétrie sphérique.",
        "ru": "Электронные конфигурации 24Cr ([Ar] 4s1 3d5) и 29Cu ([Ar] 4s1 3d10) представляют собой особые случаи из-за стабильности сферической симметрии.",
        "ar": "تعد تكوينات الإلكترون 24Cr ([Ar] 4s1 3d5) و29Cu ([Ar] 4s1 3d10) حالات خاصة بسبب استقرار التناظر الكروي.",
        "zh": "由于球对称稳定性，24Cr ([Ar] 4s1 3d5) 和 29Cu ([Ar] 4s1 3d10) 电子构型是特殊情况。",
        "ku": "Veavakirinên elektronên 24Cr ([Ar] 4s1 3d5) û 29Cu ([Ar] 4s1 3d10) ji ber îstîqrara simetrîya spherîkî rewşên taybetî ne."
      },
      "trap": {
        "tr": "Temel hâldeki 24Cr atomunun elektron dizilimi [Ar] 4s2 3d4 şeklindedir.",
        "en": "The ground-state electron configuration of the 24Cr atom is [Ar] 4s2 3d4.",
        "de": "Die Elektronenkonfiguration des 24Cr-Atoms im Grundzustand lautet [Ar] 4s2 3d4.",
        "fr": "La configuration électronique de l'atome 24Cr à l'état fondamental est [Ar] 4s2 3d4.",
        "ru": "Электронная конфигурация атома 24Cr в основном состоянии — [Ar] 4s2 3d4.",
        "ar": "التوزيع الإلكتروني لذرة 24Cr في الحالة الأرضية هو [Ar] 4s2 3d4.",
        "zh": "基态 24Cr 原子的电子排布为 [Ar] 4s2 3d4。",
        "ku": "Dîzilîma elektronan a atoma 24Cr di rewşa bingehîn de [Ar] 4s2 3d4 e."
      },
      "whyTrapIsFalse": {
        "tr": "4s2 3d4, Aufbau sırasının mekanik uygulamasıdır. Bir 4s elektronunun 3d'ye geçmesiyle oluşan yarı dolu 3d5 düzeni daha kararlı olduğundan Cr'nin gerçek dizilimi [Ar] 4s1 3d5'tir.",
        "en": "4s2 3d4 is a mechanical application of the Aufbau order. Moving one 4s electron into 3d gives a more stable half-filled 3d5 arrangement, so the actual configuration of Cr is [Ar] 4s1 3d5.",
        "de": "4s2 3d4 ist eine mechanische Anwendung der Aufbau-Reihenfolge. Wechselt ein 4s-Elektron in das 3d, entsteht die stabilere halbbesetzte 3d5-Anordnung; daher ist die tatsächliche Konfiguration von Cr [Ar] 4s1 3d5.",
        "fr": "4s2 3d4 est une application mécanique de l'ordre d'Aufbau. Le passage d'un électron 4s vers 3d donne l'arrangement 3d5 à moitié rempli, plus stable ; la configuration réelle du Cr est donc [Ar] 4s1 3d5.",
        "ru": "4s2 3d4 — механическое применение порядка Ауфбау. Переход одного 4s-электрона на 3d даёт более устойчивую наполовину заполненную конфигурацию 3d5, поэтому реальная конфигурация Cr — [Ar] 4s1 3d5.",
        "ar": "التوزيع 4s2 3d4 تطبيق آلي لترتيب أوفباو. انتقال إلكترون من 4s إلى 3d يعطي ترتيب 3d5 نصف الممتلئ الأكثر استقرارًا، لذا فالتوزيع الحقيقي للكروم هو [Ar] 4s1 3d5.",
        "zh": "4s2 3d4 只是机械套用构造原理的顺序。一个 4s 电子进入 3d 后形成更稳定的半充满 3d5，因此 Cr 的实际排布是 [Ar] 4s1 3d5。",
        "ku": "4s2 3d4 sepandina mekanîkî ya rêza Aufbau ye. Bi derbasbûna elektroneke 4s bo 3d, rêzkirina nîv-tijî ya 3d5 ya aramtir çêdibe; loma dîzilîma rastîn a Cr [Ar] 4s1 3d5 e."
      }
    },
    {
      "id": "u11-f09",
      "fact": {
        "tr": "Geçiş metalleri (d bloğu) katyon oluştururken elektronu önce en dış katmandaki s orbitalinden verir (örn. Fe: 4s2 3d6 -> Fe2+: 3d6).",
        "en": "While transition metals (d block) form cations, they first donate the electron from the s orbital in the outermost layer (e.g. Fe: 4s2 3d6 -> Fe2+: 3d6).",
        "de": "Während Übergangsmetalle (d-Block) Kationen bilden, geben sie zunächst das Elektron aus dem s-Orbital in der äußersten Schicht ab (z. B. Fe: 4s2 3d6 -> Fe2+: 3d6).",
        "fr": "Alors que les métaux de transition (bloc d) forment des cations, ils donnent d'abord l'électron de l'orbitale s dans la couche la plus externe (par exemple Fe : 4s2 3d6 -> Fe2+ : 3d6).",
        "ru": "Хотя переходные металлы (d-блок) образуют катионы, они сначала отдают электрон с s-орбитали в самом внешнем слое (например, Fe: 4s2 3d6 -> Fe2+: 3d6).",
        "ar": "بينما تشكل المعادن الانتقالية (كتلة d) الكاتيونات، فإنها تتبرع أولاً بالإلكترون من مدار s في الطبقة الخارجية (على سبيل المثال Fe: 4s2 3d6 -> Fe2+: 3d6).",
        "zh": "当过渡金属（d 块）形成阳离子时，它们首先从最外层的 s 轨道提供电子（例如 Fe: 4s2 3d6 -> Fe2+: 3d6）。",
        "ku": "Dema ku metalên veguhêz (d bloka) kationan çêdikin, ew pêşî elektronê ji orbîtala s di qata herî derve de didin (mînak: Fe: 4s2 3d6 -> Fe2+: 3d6)."
      },
      "trap": {
        "tr": "Fe atomu iyonlaşırken elektron önce 3d orbitalinden kopar.",
        "en": "While the Fe atom is ionized, the electron first breaks away from the 3d orbital.",
        "de": "Während das Fe-Atom ionisiert wird, löst sich zunächst das Elektron aus dem 3d-Orbital.",
        "fr": "Pendant que l’atome de Fe est ionisé, l’électron se détache d’abord de l’orbitale 3d.",
        "ru": "Пока атом Fe ионизируется, электрон сначала отрывается от 3d-орбитали.",
        "ar": "أثناء تأين ذرة الحديد، ينفصل الإلكترون أولاً عن المدار 3d.",
        "zh": "当 Fe 原子被电离时，电子首先脱离 3d 轨道。",
        "ku": "Dema ku atoma Fe îyonîze dibe, elektron pêşî ji orbitala 3d vediqete."
      },
      "whyTrapIsFalse": {
        "tr": "Elektronlar dolma sırasının tersine göre değil, en dış katmandan (n'si en büyük olan) koparılır. 4s elektronları 3d'ye göre çekirdekten daha uzakta olduğundan önce onlar ayrılır: Fe2+ = [Ar] 3d6.",
        "en": "Electrons are not removed in reverse filling order but from the outermost shell (largest n). The 4s electrons are farther from the nucleus than 3d, so they leave first: Fe2+ = [Ar] 3d6.",
        "de": "Elektronen werden nicht in umgekehrter Besetzungsreihenfolge entfernt, sondern aus der äußersten Schale (größtes n). Die 4s-Elektronen sind weiter vom Kern entfernt als 3d und gehen zuerst: Fe2+ = [Ar] 3d6.",
        "fr": "Les électrons ne sont pas retirés dans l'ordre inverse du remplissage, mais depuis la couche la plus externe (plus grand n). Les électrons 4s sont plus éloignés du noyau que les 3d et partent en premier : Fe2+ = [Ar] 3d6.",
        "ru": "Электроны удаляются не в обратном порядке заполнения, а с внешнего слоя (наибольшее n). 4s-электроны дальше от ядра, чем 3d, поэтому уходят первыми: Fe2+ = [Ar] 3d6.",
        "ar": "لا تُنزع الإلكترونات بعكس ترتيب الامتلاء، بل من الغلاف الأبعد (أكبر n). إلكترونات 4s أبعد عن النواة من إلكترونات 3d فتُنزع أولًا: Fe2+ = [Ar] 3d6.",
        "zh": "电子不是按填充顺序的逆序失去，而是先从最外层（n 最大）失去。4s 电子比 3d 电子离核更远，所以先失去：Fe2+ = [Ar] 3d6。",
        "ku": "Elektron ne li gorî berevajiya rêza dagirtinê, lê ji qata herî derve (n ya herî mezin) tên qetandin. Elektronên 4s ji yên 3d dûrtir in, loma pêşî ew diqetin: Fe2+ = [Ar] 3d6."
      }
    },
    {
      "id": "u11-f10",
      "fact": {
        "tr": "2. ve 3. periyottaki A grubu elementlerinde birinci iyonlaşma enerjisi \"3 aşağı 5 yukarı\" kuralına göre sıralanır: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.",
        "en": "For main-group (A) elements of periods 2 and 3, the first ionization energy follows the order 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A (3A falls below 2A, and 6A falls below 5A).",
        "de": "Bei den Hauptgruppenelementen (A) der Perioden 2 und 3 folgt die erste Ionisierungsenergie der Reihenfolge 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A (3A liegt unter 2A und 6A unter 5A).",
        "fr": "Pour les éléments des groupes principaux (A) des périodes 2 et 3, la première énergie d'ionisation suit l'ordre 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A (3A passe sous 2A et 6A sous 5A).",
        "ru": "Для элементов главных подгрупп (А) 2-го и 3-го периодов первая энергия ионизации возрастает в порядке 1А < 3А < 2А < 4А < 6А < 5А < 7А < 8А (3А ниже 2А, а 6А ниже 5А).",
        "ar": "في عناصر المجموعات الرئيسية (A) في الدورتين الثانية والثالثة تترتب طاقة التأين الأولى هكذا: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A (تنخفض 3A عن 2A وتنخفض 6A عن 5A).",
        "zh": "第 2、3 周期主族 (A) 元素的第一电离能顺序为 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A（3A 低于 2A，6A 低于 5A）。",
        "ku": "Di hêmanên koma A yên periyoda 2. û 3. de enerjiya iyonîzasyonê ya yekem bi vê rêzê ye: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A (3A di bin 2A de, 6A di bin 5A de dimîne)."
      },
      "trap": {
        "tr": "2. ve 3. periyotta 3A grubu elementinin birinci iyonlaşma enerjisi, aynı periyottaki 2A grubu elementininkinden büyüktür.",
        "en": "In periods 2 and 3, the first ionization energy of the group 3A element is greater than that of the group 2A element in the same period.",
        "de": "In den Perioden 2 und 3 ist die erste Ionisierungsenergie des Elements der Gruppe 3A größer als die des Elements der Gruppe 2A derselben Periode.",
        "fr": "Dans les périodes 2 et 3, la première énergie d'ionisation de l'élément du groupe 3A est supérieure à celle de l'élément du groupe 2A de la même période.",
        "ru": "Во 2-м и 3-м периодах первая энергия ионизации элемента группы 3А больше, чем у элемента группы 2А того же периода.",
        "ar": "في الدورتين الثانية والثالثة تكون طاقة التأين الأولى لعنصر المجموعة 3A أكبر من طاقة تأين عنصر المجموعة 2A في الدورة نفسها.",
        "zh": "在第 2、3 周期中，3A 族元素的第一电离能大于同周期 2A 族元素。",
        "ku": "Di periyoda 2. û 3. de enerjiya iyonîzasyonê ya yekem a hêmana koma 3A ji ya hêmana koma 2A ya heman periyodê mezintir e."
      },
      "whyTrapIsFalse": {
        "tr": "2A'nın değerlik elektronları tam dolu ns2 alt kabuğundadır; 3A'nın tek np elektronu daha yüksek enerjili olduğundan daha kolay koparılır. Bu yüzden 2. ve 3. periyotta 3A'nın iyonlaşma enerjisi 2A'dan küçüktür.",
        "en": "The valence electrons of group 2A are in a filled ns2 sublevel, while the single np electron of 3A is higher in energy and easier to remove. So in periods 2 and 3 the ionization energy of 3A is smaller than that of 2A.",
        "de": "Die Valenzelektronen der Gruppe 2A befinden sich in einem vollbesetzten ns2-Unterniveau; das einzelne np-Elektron von 3A ist energiereicher und leichter abzutrennen. Daher ist in den Perioden 2 und 3 die Ionisierungsenergie von 3A kleiner als die von 2A.",
        "fr": "Les électrons de valence du groupe 2A sont dans une sous-couche ns2 complète, tandis que l'unique électron np du 3A est plus haut en énergie et plus facile à arracher. Ainsi, dans les périodes 2 et 3, l'énergie d'ionisation de 3A est inférieure à celle de 2A.",
        "ru": "Валентные электроны группы 2А находятся на заполненном подуровне ns2, а единственный np-электрон группы 3А выше по энергии и отрывается легче. Поэтому во 2-м и 3-м периодах энергия ионизации 3А меньше, чем у 2А.",
        "ar": "تقع إلكترونات تكافؤ المجموعة 2A في مستوى فرعي ns2 ممتلئ، بينما إلكترون np الوحيد في 3A أعلى طاقة وأسهل نزعًا. لذلك تكون طاقة تأين 3A في الدورتين الثانية والثالثة أصغر من طاقة تأين 2A.",
        "zh": "2A 族的价电子位于全充满的 ns2 亚层，而 3A 族唯一的 np 电子能量更高、更容易失去。因此在第 2、3 周期中 3A 族的电离能小于 2A 族。",
        "ku": "Elektronên valansê yên koma 2A di binasta ns2 ya tam-tijî de ne; elektrona np ya yekane ya 3A enerjiya wê bilindtir e û hêsantir diqete. Loma di periyoda 2. û 3. de enerjiya iyonîzasyonê ya 3A ji ya 2A kêmtir e."
      }
    },
    {
      "id": "u11-f11",
      "fact": {
        "tr": "s orbitalleri küresel simetriktir ve her enerji düzeyinde 1 tane s orbitali bulunur (en çok 2 elektron alır).",
        "en": "s orbitals are spherically symmetric; each energy level has one s orbital (holding at most 2 electrons).",
        "de": "s-Orbitale sind kugelsymmetrisch; jedes Energieniveau hat ein s-Orbital (mit höchstens 2 Elektronen).",
        "fr": "Les orbitales s sont à symétrie sphérique ; chaque niveau d'énergie possède une orbitale s (contenant au plus 2 électrons).",
        "ru": "s-орбитали сферически симметричны; на каждом энергетическом уровне есть одна s-орбиталь (вмещает не более 2 электронов).",
        "ar": "مدارات s متناظرة كرويًا، ويوجد في كل مستوى طاقة مدار s واحد (يتسع لإلكترونين على الأكثر).",
        "zh": "s轨道呈球形对称，每个能级有1个s轨道（最多容纳2个电子）。",
        "ku": "Orbîtalên s sîmetriya gewherî nîşan didin; di her asta enerjiyê de 1 orbîtala s heye (herî zêde 2 elektronan digire)."
      },
      "trap": {
        "tr": "s orbitalleri sadece n = 2'den itibaren başlar.",
        "en": "s orbitals start only from n = 2.",
        "de": "s-Orbitale beginnen erst ab n = 2.",
        "fr": "Les orbitales s commencent uniquement à partir de n = 2.",
        "ru": "s-орбитали начинаются только с n = 2.",
        "ar": "تبدأ مدارات s فقط من n = 2.",
        "zh": "s 轨道仅从 n = 2 开始。",
        "ku": "Orbitalên s tenê ji n = 2 dest pê dikin."
      },
      "whyTrapIsFalse": {
        "tr": "Her enerji düzeyinde l = 0 değeri mümkün olduğundan s orbitali n = 1'den itibaren bulunur (1s). n = 2'den başlayan orbital türü p'dir.",
        "en": "Since l = 0 is allowed in every energy level, s orbitals exist from n = 1 onward (1s). It is the p orbitals that start at n = 2.",
        "de": "Da l = 0 in jedem Energieniveau erlaubt ist, gibt es s-Orbitale ab n = 1 (1s). Erst die p-Orbitale beginnen bei n = 2.",
        "fr": "Comme l = 0 est permis à chaque niveau d'énergie, les orbitales s existent dès n = 1 (1s). Ce sont les orbitales p qui commencent à n = 2.",
        "ru": "Поскольку l = 0 допустимо на каждом энергетическом уровне, s-орбитали существуют начиная с n = 1 (1s). С n = 2 начинаются p-орбитали.",
        "ar": "لأن القيمة l = 0 ممكنة في كل مستوى طاقة، توجد مدارات s بدءًا من n = 1 (1s). أما المدارات التي تبدأ من n = 2 فهي مدارات p.",
        "zh": "每个能层都允许 l = 0，所以从 n = 1 起就有 s 轨道 (1s)。从 n = 2 开始出现的是 p 轨道。",
        "ku": "Ji ber ku l = 0 di her asta enerjiyê de gengaz e, orbîtala s ji n = 1 ve heye (1s). Yên ku ji n = 2 dest pê dikin orbîtalên p ne."
      }
    },
    {
      "id": "u11-f12",
      "fact": {
        "tr": "p orbitalleri n = 2'den başlar, halter şeklindedir ve 3 tanedir (px, py, pz, en çok 6 elektron).",
        "en": "p orbitals start from n = 2, are dumbbell-shaped and consist of 3 (px, py, pz, maximum 6 electrons).",
        "de": "p-Orbitale beginnen bei n = 2, sind hantelförmig und bestehen aus 3 (px, py, pz, maximal 6 Elektronen).",
        "fr": "Les orbitales p partent de n = 2, sont en forme d'haltère et se composent de 3 (px, py, pz, maximum 6 électrons).",
        "ru": "p-орбитали начинаются с n = 2, имеют форму гантели и состоят из 3 (px, py, pz, максимум 6 электронов).",
        "ar": "تبدأ المدارات p من n = 2، وهي على شكل دمبل وتتكون من 3 (px، py، pz، بحد أقصى 6 إلكترونات).",
        "zh": "p 轨道从 n = 2 开始，呈哑铃形，由 3 个（px、py、pz，最多 6 个电子）组成。",
        "ku": "orbîtalên p ji n = 2 dest pê dikin, teşe dumbbell in û ji 3 (px, py, pz, herî zêde 6 elektronan) pêk tên."
      },
      "trap": {
        "tr": "1. temel enerji düzeyinde 3 adet p orbitali bulunur.",
        "en": "There are 3 p orbitals in the 1st fundamental energy level.",
        "de": "Im 1. Grundenergieniveau gibt es 3 p-Orbitale.",
        "fr": "Il y a 3 orbitales p dans le 1er niveau d'énergie fondamentale.",
        "ru": "На первом фундаментальном энергетическом уровне имеется 3 p-орбитали.",
        "ar": "هناك 3 مدارات p في مستوى الطاقة الأساسي الأول.",
        "zh": "第一基本能级有 3 个 p 轨道。",
        "ku": "Di asta enerjiya bingehîn a 1emîn de 3 p orbîtal hene."
      },
      "whyTrapIsFalse": {
        "tr": "n = 1 için l yalnızca 0 olabilir; bu yüzden 1. enerji düzeyinde sadece 1s orbitali vardır. p orbitalleri (l = 1) ancak n = 2'den itibaren bulunur.",
        "en": "For n = 1, l can only be 0, so the first energy level contains only the 1s orbital. p orbitals (l = 1) appear only from n = 2 onward.",
        "de": "Für n = 1 kann l nur 0 sein, daher enthält das erste Energieniveau nur das 1s-Orbital. p-Orbitale (l = 1) gibt es erst ab n = 2.",
        "fr": "Pour n = 1, l ne peut valoir que 0 : le premier niveau ne contient que l'orbitale 1s. Les orbitales p (l = 1) n'apparaissent qu'à partir de n = 2.",
        "ru": "При n = 1 l может быть только 0, поэтому на первом уровне есть лишь 1s-орбиталь. p-орбитали (l = 1) появляются только начиная с n = 2.",
        "ar": "عندما n = 1 لا يمكن أن تكون l إلا 0، لذا لا يحوي مستوى الطاقة الأول إلا المدار 1s. ولا تظهر مدارات p (l = 1) إلا بدءًا من n = 2.",
        "zh": "n = 1 时 l 只能为 0，所以第一能层只有 1s 轨道。p 轨道 (l = 1) 从 n = 2 才开始出现。",
        "ku": "Ji bo n = 1, l tenê dikare 0 be, loma di asta enerjiyê ya yekem de tenê orbîtala 1s heye. Orbîtalên p (l = 1) tenê ji n = 2 ve hene."
      }
    },
    {
      "id": "u11-f13",
      "fact": {
        "tr": "d orbitalleri n = 3'ten başlar, 5 tanedir ve en çok 10 elektron alır.",
        "en": "d orbitals start from n = 3, there are 5 and can take up to 10 electrons.",
        "de": "d-Orbitale beginnen bei n = 3, es gibt 5 und können bis zu 10 Elektronen aufnehmen.",
        "fr": "Les orbitales d partent de n = 3, il y en a 5 et peuvent prendre jusqu'à 10 électrons.",
        "ru": "d-орбитали начинаются с n = 3, их 5, и они могут занимать до 10 электронов.",
        "ar": "تبدأ المدارات d من n = 3، وهناك 5 ويمكن أن تحتوي على ما يصل إلى 10 إلكترونات.",
        "zh": "d 轨道从 n = 3 开始，共有 5 个，最多可容纳 10 个电子。",
        "ku": "d orbital ji n = 3 dest pê dikin, 5 hene û dikarin heta 10 elektronan bigirin."
      },
      "trap": {
        "tr": "d orbitalleri 4. temel enerji düzeyinden itibaren başlar.",
        "en": "d orbitals start from the 4th fundamental energy level.",
        "de": "d-Orbitale beginnen auf dem 4. Grundenergieniveau.",
        "fr": "Les orbitales d partent du 4ème niveau d’énergie fondamental.",
        "ru": "d-орбитали начинаются с 4-го фундаментального энергетического уровня.",
        "ar": "تبدأ المدارات d من مستوى الطاقة الأساسي الرابع.",
        "zh": "d 轨道从第四基本能级开始。",
        "ku": "d orbital ji asta enerjiya bingehîn a 4emîn dest pê dikin."
      },
      "whyTrapIsFalse": {
        "tr": "l = 2 değeri n ≥ 3 için mümkündür, bu yüzden ilk d orbitalleri 3d'dir. 4. düzeyden başlayan f orbitalleridir; 3d'nin 4s'ten sonra dolması d'nin 3. düzeyde bulunduğu gerçeğini değiştirmez.",
        "en": "l = 2 is allowed for n ≥ 3, so the first d orbitals are 3d. It is the f orbitals that start at level 4; the fact that 3d fills after 4s does not change that d orbitals exist in level 3.",
        "de": "l = 2 ist für n ≥ 3 erlaubt, daher sind die ersten d-Orbitale 3d. Bei Niveau 4 beginnen die f-Orbitale; dass 3d nach 4s besetzt wird, ändert nichts daran, dass es d-Orbitale schon im Niveau 3 gibt.",
        "fr": "l = 2 est permis pour n ≥ 3, donc les premières orbitales d sont les 3d. Ce sont les orbitales f qui commencent au niveau 4 ; le fait que 3d se remplisse après 4s ne change pas l'existence des orbitales d au niveau 3.",
        "ru": "l = 2 допустимо при n ≥ 3, поэтому первые d-орбитали — 3d. С 4-го уровня начинаются f-орбитали; то, что 3d заполняется после 4s, не отменяет наличия d-орбиталей на 3-м уровне.",
        "ar": "القيمة l = 2 ممكنة عندما n ≥ 3، لذا فأول مدارات d هي 3d. أما التي تبدأ من المستوى الرابع فهي مدارات f؛ وامتلاء 3d بعد 4s لا يغيّر وجود مدارات d في المستوى الثالث.",
        "zh": "n ≥ 3 时才允许 l = 2，所以最早的 d 轨道是 3d。从第 4 能层开始的是 f 轨道；3d 在 4s 之后填充并不改变第 3 能层就有 d 轨道这一事实。",
        "ku": "l = 2 ji bo n ≥ 3 gengaz e, loma orbîtalên d yên pêşîn 3d ne. Yên ku ji asta 4. dest pê dikin orbîtalên f ne; dagirtina 3d piştî 4s nayê wê wateyê ku d di asta 3. de tune ye."
      }
    },
    {
      "id": "u11-f14",
      "fact": {
        "tr": "f orbitalleri n = 4'ten başlar, 7 tanedir ve en çok 14 elektron alır.",
        "en": "f orbitals start from n = 4, there are 7 in number and can take up to 14 electrons.",
        "de": "f-Orbitale beginnen bei n = 4, es gibt 7 an der Zahl und können bis zu 14 Elektronen aufnehmen.",
        "fr": "Les orbitales f partent de n = 4, elles sont au nombre de 7 et peuvent prendre jusqu'à 14 électrons.",
        "ru": "f-орбитали начинаются с n = 4, их 7, и они могут принимать до 14 электронов.",
        "ar": "تبدأ المدارات f من n = 4، ويبلغ عددها 7 ويمكن أن تحتوي على ما يصل إلى 14 إلكترونًا.",
        "zh": "f 轨道从 n = 4 开始，共有 7 个，最多可容纳 14 个电子。",
        "ku": "f orbitals ji n = 4 dest pê dikin, 7 hene û dikarin heta 14 elektronan bigirin."
      },
      "trap": {
        "tr": "f orbitallerinde en çok 10 elektron bulunabilir.",
        "en": "There can be a maximum of 10 electrons in f orbitals.",
        "de": "In f-Orbitalen können sich maximal 10 Elektronen befinden.",
        "fr": "Il peut y avoir un maximum de 10 électrons dans les orbitales f.",
        "ru": "На f-орбиталях может быть максимум 10 электронов.",
        "ar": "يمكن أن يكون هناك 10 إلكترونات كحد أقصى في المدارات f.",
        "zh": "f 轨道中最多可以有 10 个电子。",
        "ku": "Di f orbîtalan de herî zêde 10 elektron dikarin hebin."
      },
      "whyTrapIsFalse": {
        "tr": "10 elektron, 5 orbitalli d alt kabuğunun kapasitesidir. f alt kabuğunda 7 orbital (ml = -3 ... +3) bulunduğundan en çok 7 × 2 = 14 elektron alır.",
        "en": "10 electrons is the capacity of the d sublevel with 5 orbitals. The f sublevel has 7 orbitals (ml = -3 ... +3), so it holds at most 7 × 2 = 14 electrons.",
        "de": "10 Elektronen sind die Kapazität des d-Unterniveaus mit 5 Orbitalen. Das f-Unterniveau hat 7 Orbitale (ml = -3 ... +3) und fasst daher höchstens 7 × 2 = 14 Elektronen.",
        "fr": "10 électrons est la capacité de la sous-couche d à 5 orbitales. La sous-couche f possède 7 orbitales (ml = -3 ... +3) et contient donc au plus 7 × 2 = 14 électrons.",
        "ru": "10 электронов — ёмкость d-подуровня из 5 орбиталей. На f-подуровне 7 орбиталей (ml = -3 ... +3), поэтому он вмещает не более 7 × 2 = 14 электронов.",
        "ar": "10 إلكترونات هي سعة المستوى الفرعي d ذي المدارات الخمسة. أما المستوى الفرعي f ففيه 7 مدارات (ml = -3 ... +3)، فيتسع لـ 7 × 2 = 14 إلكترونًا على الأكثر.",
        "zh": "10 个电子是含 5 个轨道的 d 亚层的容量。f 亚层有 7 个轨道 (ml = -3 … +3)，最多容纳 7 × 2 = 14 个电子。",
        "ku": "10 elektron kapasîteya binasta d ya bi 5 orbîtalan e. Binasta f 7 orbîtal (ml = -3 ... +3) hene, loma herî zêde 7 × 2 = 14 elektronan digire."
      }
    },
    {
      "id": "u11-f15",
      "fact": {
        "tr": "Değerlik alt kabuğu yarı dolu veya tam dolu olan (s1, s2, p3, p6, d5, d10 ile biten) elektron dizilimleri küresel simetriktir ve ek kararlılık sağlar.",
        "en": "Electron configurations whose outermost sublevel is half-filled or completely filled (ending in s1, s2, p3, p6, d5 or d10) are spherically symmetric and gain extra stability.",
        "de": "Elektronenkonfigurationen, deren äußerstes Unterniveau halb- oder vollbesetzt ist (Endung s1, s2, p3, p6, d5 oder d10), sind kugelsymmetrisch und besonders stabil.",
        "fr": "Les configurations électroniques dont la dernière sous-couche est à moitié ou entièrement remplie (se terminant par s1, s2, p3, p6, d5 ou d10) sont à symétrie sphérique et gagnent en stabilité.",
        "ru": "Электронные конфигурации, у которых последний подуровень заполнен наполовину или полностью (оканчиваются на s1, s2, p3, p6, d5 или d10), сферически симметричны и обладают дополнительной устойчивостью.",
        "ar": "التوزيعات الإلكترونية التي يكون مستواها الفرعي الأخير نصف ممتلئ أو ممتلئًا تمامًا (تنتهي بـ s1 أو s2 أو p3 أو p6 أو d5 أو d10) متناظرة كرويًا وتكتسب استقرارًا إضافيًا.",
        "zh": "最后一个亚层半充满或全充满（以 s1、s2、p3、p6、d5 或 d10 结尾）的电子排布具有球形对称性，并更加稳定。",
        "ku": "Dîzilîmên elektronan ên ku binasta wan a dawî nîv-tijî an tam-tijî ye (bi s1, s2, p3, p6, d5 an d10 diqedin) sîmetriya gewherî nîşan didin û aramiyeke zêde distînin."
      },
      "trap": {
        "tr": "p4 ile biten elektron dizilimi küresel simetriktir.",
        "en": "The electron configuration ending in p4 is spherically symmetric.",
        "de": "Die Elektronenkonfiguration, die mit p4 endet, ist sphärisch symmetrisch.",
        "fr": "La configuration électronique se terminant par p4 est à symétrie sphérique.",
        "ru": "Электронная конфигурация, оканчивающаяся на p4, сферически симметрична.",
        "ar": "تكوين الإلكترون المنتهي بـ p4 متماثل كرويًا.",
        "zh": "以 p4 结尾的电子构型是球对称的。",
        "ku": "Veavakirina elektronê ku bi p4-ê diqede sîmetriya gewherî nîşan dide."
      },
      "whyTrapIsFalse": {
        "tr": "Küresel simetri için p alt kabuğunun yarı dolu (p3) ya da tam dolu (p6) olması gerekir. p4'te bir orbital çift, ikisi tek elektronlu olduğundan elektron dağılımı simetrik değildir.",
        "en": "Spherical symmetry requires a half-filled (p3) or completely filled (p6) p sublevel. In p4 one orbital is paired and two are singly occupied, so the electron distribution is not symmetric.",
        "de": "Kugelsymmetrie erfordert ein halbbesetztes (p3) oder vollbesetztes (p6) p-Unterniveau. Bei p4 ist ein Orbital doppelt und zwei sind einfach besetzt, die Verteilung ist also nicht symmetrisch.",
        "fr": "La symétrie sphérique exige une sous-couche p à moitié remplie (p3) ou complète (p6). En p4, une orbitale est doublement occupée et deux le sont simplement : la distribution n'est pas symétrique.",
        "ru": "Для сферической симметрии p-подуровень должен быть заполнен наполовину (p3) или полностью (p6). При p4 одна орбиталь занята парой, а две — одиночными электронами, поэтому распределение несимметрично.",
        "ar": "يتطلب التناظر الكروي أن يكون المستوى الفرعي p نصف ممتلئ (p3) أو ممتلئًا تمامًا (p6). في p4 يحوي مدار واحد زوجًا ومداران إلكترونًا مفردًا، فلا يكون التوزيع متناظرًا.",
        "zh": "球形对称要求 p 亚层半充满 (p3) 或全充满 (p6)。p4 中一个轨道成对、两个轨道各有一个电子，电子分布不对称。",
        "ku": "Ji bo sîmetriya gewherî divê binasta p nîv-tijî (p3) an tam-tijî (p6) be. Di p4 de orbîtalek cot e û du yek-elektronî ne, loma belavbûna elektronan ne sîmetrîk e."
      }
    },
    {
      "id": "u11-f16",
      "fact": {
        "tr": "İzoelektronik taneciklerde proton sayısı büyük olanın elektron başına düşen çekim kuvveti daha büyüktür ve yarıçapı küçüktür.",
        "en": "In isoelectronic particles, the one with the larger number of protons has a greater attractive force per electron and a smaller radius.",
        "de": "Bei isoelektronischen Teilchen hat dasjenige mit der größeren Anzahl an Protonen eine größere Anziehungskraft pro Elektron und einen kleineren Radius.",
        "fr": "Dans les particules isoélectroniques, celle qui possède le plus grand nombre de protons a une plus grande force d’attraction par électron et un rayon plus petit.",
        "ru": "В изоэлектронных частицах тот, у кого больше протонов, имеет большую силу притяжения на электрон и меньший радиус.",
        "ar": "في الجسيمات متساوية الإلكترون، يكون للجسيم الذي يحتوي على عدد أكبر من البروتونات قوة جذب أكبر لكل إلكترون ونصف قطر أصغر.",
        "zh": "在等电子粒子中，质子数较多的粒子对每个电子的吸引力较大，半径较小。",
        "ku": "Di keriyên îzoelektronîk de, ya ku jimara protonên wê mezintir e, ji her elektronekê re hêzek balkêş a mezin û tîrêjek piçûktir heye."
      },
      "trap": {
        "tr": "İzoelektronik katyon ve anyonların yarıçapları birbirine tam eşittir.",
        "en": "The radii of isoelectronic cations and anions are exactly equal.",
        "de": "Die Radien isoelektronischer Kationen und Anionen sind genau gleich.",
        "fr": "Les rayons des cations isoélectroniques et des anions sont exactement égaux.",
        "ru": "Радиусы изоэлектронных катионов и анионов точно равны.",
        "ar": "أنصاف أقطار الكاتيونات والأنيونات متساوية الإلكترون متساوية تمامًا.",
        "zh": "等电子阳离子和阴离子的半径完全相等。",
        "ku": "Radyoya kation û anyonên îzoelektronîk tam wek hev in."
      },
      "whyTrapIsFalse": {
        "tr": "Elektron sayıları aynı olsa da proton sayıları farklıdır. Proton sayısı büyük olan elektronları daha güçlü çeker; bu yüzden örneğin Mg2+ < Na+ < F- < O2- şeklinde yarıçap anyona doğru artar.",
        "en": "Although the electron counts are equal, the proton counts differ. The species with more protons pulls its electrons more strongly, so the radius increases toward the anion, e.g. Mg2+ < Na+ < F- < O2-.",
        "de": "Die Elektronenzahlen sind gleich, die Protonenzahlen aber verschieden. Das Teilchen mit mehr Protonen zieht seine Elektronen stärker an, daher nimmt der Radius zum Anion hin zu, z. B. Mg2+ < Na+ < F- < O2-.",
        "fr": "Les nombres d'électrons sont égaux, mais pas les nombres de protons. L'espèce qui a le plus de protons attire plus fortement ses électrons ; le rayon augmente donc vers l'anion, par ex. Mg2+ < Na+ < F- < O2-.",
        "ru": "Число электронов одинаково, но число протонов разное. Частица с бо́льшим числом протонов сильнее притягивает электроны, поэтому радиус растёт к аниону, например Mg2+ < Na+ < F- < O2-.",
        "ar": "عدد الإلكترونات متساوٍ لكن عدد البروتونات مختلف. الدقيقة ذات البروتونات الأكثر تجذب إلكتروناتها بقوة أكبر، لذا يزداد نصف القطر باتجاه الأيون السالب، مثل Mg2+ < Na+ < F- < O2-.",
        "zh": "电子数相同，但质子数不同。质子数多的粒子对电子吸引更强，因此半径向阴离子方向增大，例如 Mg2+ < Na+ < F- < O2-。",
        "ku": "Hejmara elektronan wekhev e lê hejmara protonan cuda ye. Ya ku protonên wê zêdetir in elektronan bihêztir dikişîne; loma tîrêj ber bi anyonê ve mezin dibe, mînak Mg2+ < Na+ < F- < O2-."
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
        "ru": "Принцип Ауфбау",
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
        "ru": "Принцип Ауфбау гласит, что электроны заполняют орбитали начиная с орбитали с наименьшей энергией; правило Хунда гласит, что орбитали с одинаковой энергией сначала заполняются по одному электрону с одинаковым спином.",
        "ar": "ينص مبدأ أوفباو على أن الإلكترونات تملأ المدارات ابتداءً من المدار الأقل طاقة؛ أما قاعدة هوند فتنص على أن المدارات المتساوية الطاقة تُملأ أولًا فرادى بإلكترونات لها المغزل نفسه.",
        "zh": "构造原理指出电子从能量最低的轨道开始依次填充；洪特规则指出电子在能量相同的轨道上先以相同自旋分占不同轨道。",
        "ku": "Prensîba Aufbau dibêje ku elektron ji orbîtala herî kêm-enerjî dest pê dikin û bi cih dibin; qaîdeya Hund dibêje ku elektron pêşî yek bi yek û bi heman spinê dikevin orbîtalên xwedî heman enerjiyê."
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
        "ru": "s-орбиталь имеет форму сферы (l = 0, 1 орбиталь); p-орбиталь — направленная двухлопастная гантель (l = 1, 3 орбитали).",
        "ar": "المدار s كروي الشكل (l = 0، مدار واحد)؛ والمدار p على شكل دمبل موجّه ذي فصين (l = 1، 3 مدارات).",
        "zh": "s轨道呈球形（l = 0，1个）；p轨道是有方向性的双叶哑铃形（l = 1，3个）。",
        "ku": "Orbîtala s gilover e (l = 0, 1 orbîtal); orbîtala p wek halterê du-lobî û arasteyî ye (l = 1, 3 orbîtal)."
      }
    },
    {
      "id": "u11-c03",
      "conceptA": {
        "tr": "Baş Kuantum Sayısı (n)",
        "en": "Principal Quantum Number (n)",
        "de": "Hauptquantenzahl (n)",
        "fr": "Nombre quantique principal (n)",
        "ru": "Главное квантовое число (n)",
        "ar": "عدد الكم الرئيسي (n)",
        "zh": "主量子数 (n)",
        "ku": "Hejmara kuantûmê ya sereke (n)"
      },
      "conceptB": {
        "tr": "Açısal Momentum Kuantum Sayısı (l)",
        "en": "Angular Momentum Quantum Number (l)",
        "de": "Drehimpulsquantenzahl (l)",
        "fr": "Nombre quantique de moment cinétique (l)",
        "ru": "Квантовое число углового момента (l)",
        "ar": "عدد كم الزخم الزاوي (l)",
        "zh": "角动量量子数 (l)",
        "ku": "Hejmara kuantûmê ya momenta goşeyî (l)"
      },
      "distinction": {
        "tr": "Baş kuantum sayısı (n) elektronun enerji düzeyini ve çekirdeğe ortalama uzaklığını; açısal momentum kuantum sayısı (l) ise orbitalin türünü ve şeklini (s, p, d, f) belirtir.",
        "en": "The principal quantum number (n) gives the electron's energy level and average distance from the nucleus; the angular momentum quantum number (l) gives the type and shape of the orbital (s, p, d, f).",
        "de": "Die Hauptquantenzahl (n) gibt das Energieniveau des Elektrons und seinen mittleren Abstand vom Kern an; die Drehimpulsquantenzahl (l) gibt Art und Form des Orbitals an (s, p, d, f).",
        "fr": "Le nombre quantique principal (n) indique le niveau d'énergie de l'électron et sa distance moyenne au noyau ; le nombre l (moment cinétique) indique le type et la forme de l'orbitale (s, p, d, f).",
        "ru": "Главное квантовое число (n) указывает энергетический уровень электрона и его среднее расстояние от ядра; число l (угловой момент) указывает тип и форму орбитали (s, p, d, f).",
        "ar": "عدد الكم الرئيسي (n) يحدد مستوى طاقة الإلكترون ومتوسط بعده عن النواة؛ أما عدد كم الزخم الزاوي (l) فيحدد نوع المدار وشكله (s، p، d، f).",
        "zh": "主量子数 (n) 表示电子所处的能级及其离核的平均距离；角动量量子数 (l) 表示轨道的类型和形状 (s, p, d, f)。",
        "ku": "Hejmara kuantûmê ya sereke (n) asta enerjiyê ya elektronê û dûrahiya wê ya navîn ji navokê nîşan dide; hejmara l (momenta goşeyî) cure û şiklê orbîtalê (s, p, d, f) nîşan dide."
      }
    },
    {
      "id": "u11-c04",
      "conceptA": {
        "tr": "Manyetik Kuantum Sayısı (ml)",
        "en": "Magnetic Quantum Number (ml)",
        "de": "Magnetquantenzahl (ml)",
        "fr": "Nombre quantique magnétique (ml)",
        "ru": "Магнитное квантовое число (ml)",
        "ar": "عدد الكم المغناطيسي (ml)",
        "zh": "磁量子数（ml）",
        "ku": "Hejmara Kuantûmê ya Magnetîk (ml)"
      },
      "conceptB": {
        "tr": "Spin Kuantum Sayısı (ms)",
        "en": "Spin Quantum Number (ms)",
        "de": "Spinquantenzahl (ms)",
        "fr": "Nombre quantique de spin (ms)",
        "ru": "Спиновое квантовое число (ms)",
        "ar": "عدد الكم المغزلي (ms)",
        "zh": "自旋量子数（ms）",
        "ku": "Hejmara Kuantûmê ya Spin (ms)"
      },
      "distinction": {
        "tr": "ml orbitalin uzaydaki yönelimini belirtir (-l..+l); ms elektronun spin yönünü belirtir (+1/2, -1/2).",
        "en": "ml gives the orientation of the orbital in space (-l..+l); ms gives the direction of the electron's spin (+1/2, -1/2).",
        "de": "ml gibt die räumliche Ausrichtung des Orbitals an (-l..+l); ms gibt die Spinrichtung des Elektrons an (+1/2, -1/2).",
        "fr": "ml donne l'orientation de l'orbitale dans l'espace (-l..+l) ; ms donne le sens du spin de l'électron (+1/2, -1/2).",
        "ru": "ml задаёт ориентацию орбитали в пространстве (-l..+l); ms — направление спина электрона (+1/2, -1/2).",
        "ar": "يحدد ml اتجاه المدار في الفراغ (-l..+l)؛ ويحدد ms اتجاه مغزل الإلكترون (+1/2، -1/2).",
        "zh": "ml 表示轨道在空间中的取向 (-l..+l)；ms 表示电子的自旋方向（+1/2，-1/2）。",
        "ku": "ml arasteya orbîtalê di fezayê de nîşan dide (-l..+l); ms arasteya spina elektronê nîşan dide (+1/2, -1/2)."
      }
    },
    {
      "id": "u11-c05",
      "conceptA": {
        "tr": "Pauli Dışlama İlkesi",
        "en": "Pauli Exclusion Principle",
        "de": "Pauli-Ausschlussprinzip",
        "fr": "Principe d'exclusion de Pauli",
        "ru": "Принцип исключения Паули",
        "ar": "مبدأ استبعاد باولي",
        "zh": "泡利不相容原理",
        "ku": "Prensîba Derxistina Pauli"
      },
      "conceptB": {
        "tr": "Küresel Simetri",
        "en": "Spherical Symmetry",
        "de": "Sphärische Symmetrie",
        "fr": "Symétrie sphérique",
        "ru": "Сферическая симметрия",
        "ar": "التماثل الكروي",
        "zh": "球对称",
        "ku": "Sîmetriya gewherî"
      },
      "distinction": {
        "tr": "Pauli bir atomda 4 kuantum sayısı da aynı iki elektron olamayacağını; küresel simetri son alt kabuğun (orbital türünün) yarı veya tam dolu olmasından gelen ek kararlılığı belirtir.",
        "en": "Pauli: no two electrons in an atom can have all four quantum numbers the same; spherical symmetry describes the extra stability of a half-filled or completely filled last sublevel.",
        "de": "Pauli: In einem Atom können keine zwei Elektronen in allen vier Quantenzahlen übereinstimmen; die Kugelsymmetrie beschreibt die besondere Stabilität eines halb- oder vollbesetzten letzten Unterniveaus.",
        "fr": "Pauli : deux électrons d'un atome ne peuvent pas avoir leurs quatre nombres quantiques identiques ; la symétrie sphérique décrit la stabilité particulière d'une dernière sous-couche à moitié ou entièrement remplie.",
        "ru": "Паули: в атоме не может быть двух электронов с одинаковыми всеми четырьмя квантовыми числами; сферическая симметрия означает особую устойчивость наполовину или полностью заполненного последнего подуровня.",
        "ar": "باولي: لا يمكن أن يتطابق إلكترونان في الذرة في أعداد الكم الأربعة جميعها؛ أما التناظر الكروي فيعبّر عن الاستقرار الخاص للمستوى الفرعي الأخير نصف الممتلئ أو الممتلئ تمامًا.",
        "zh": "泡利原理：同一原子中不可能有两个电子的四个量子数完全相同；球形对称指最后一个亚层半充满或全充满时的特殊稳定性。",
        "ku": "Pauli: di atomekê de du elektron nikarin her çar hejmarên kuantûmê wekhev hebin; sîmetriya gewherî aramiya taybet a binasta dawî ya nîv-tijî an tam-tijî nîşan dide."
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
        "ku": "Rewşa heyecanî"
      },
      "distinction": {
        "tr": "Temel hâl, atomun elektronlarının en düşük enerjili (en kararlı) dizilimidir; uyarılmış hâl ise atomun dışarıdan enerji almasıyla bir elektronunun daha yüksek enerjili bir orbitale geçtiği kararsız durumdur.",
        "en": "The ground state is the lowest-energy (most stable) arrangement of an atom's electrons; the excited state is the unstable state in which an electron has moved to a higher-energy orbital after the atom absorbed energy.",
        "de": "Der Grundzustand ist die energieärmste (stabilste) Anordnung der Elektronen eines Atoms; der angeregte Zustand ist der instabile Zustand, in dem ein Elektron nach Energieaufnahme des Atoms in ein energiereicheres Orbital gewechselt ist.",
        "fr": "L'état fondamental est l'arrangement de plus basse énergie (le plus stable) des électrons d'un atome ; l'état excité est l'état instable dans lequel un électron est passé dans une orbitale de plus haute énergie après absorption d'énergie par l'atome.",
        "ru": "Основное состояние — это расположение электронов атома с наименьшей энергией (наиболее устойчивое); возбуждённое состояние — неустойчивое состояние, в котором электрон после поглощения атомом энергии перешёл на орбиталь с более высокой энергией.",
        "ar": "الحالة الأرضية هي ترتيب إلكترونات الذرة الأقل طاقة (الأكثر استقرارًا)؛ أما الحالة المثارة فهي الحالة غير المستقرة التي ينتقل فيها إلكترون إلى مدار أعلى طاقة بعد امتصاص الذرة للطاقة.",
        "zh": "基态是原子中电子能量最低（最稳定）的排布；激发态是原子吸收能量后某个电子跃迁到能量较高的轨道而形成的不稳定状态。",
        "ku": "Rewşa bingehîn rêzbûna elektronên atomê ya herî kêm-enerjî (herî aram) e; rewşa heyecanî ew rewşa nearam e ku tê de elektronek piştî ku atom enerjî wergirtiye derbasî orbîtaleke bi enerjiya bilindtir bûye."
      }
    },
    {
      "id": "u11-c07",
      "conceptA": {
        "tr": "Bohr Atom Modeli",
        "en": "Bohr Atomic Model",
        "de": "Bohrsches Atommodell",
        "fr": "Modèle atomique de Bohr",
        "ru": "Модель атома Бора",
        "ar": "نموذج بور الذري",
        "zh": "玻尔原子模型",
        "ku": "Modela atomê ya Bohr"
      },
      "conceptB": {
        "tr": "Modern Atom Modeli",
        "en": "Modern Atomic Model",
        "de": "Modernes Atommodell",
        "fr": "Modèle atomique moderne",
        "ru": "Современная модель атома",
        "ar": "النموذج الذري الحديث",
        "zh": "现代原子模型",
        "ku": "Modela atomê ya nûjen"
      },
      "distinction": {
        "tr": "Bohr atom modelinde elektronlar çekirdek çevresinde belirli yarıçaplı dairesel yörüngelerde dolanır ve bu model yalnızca tek elektronlu taneciklerin (H, He+) spektrumunu açıklar; modern atom modelinde ise elektronun yeri kesin olarak belirlenemez, yalnızca orbital adı verilen bölgelerde bulunma olasılığından söz edilir.",
        "en": "In the Bohr atomic model, electrons move in circular orbits of fixed radius around the nucleus, and the model explains only the spectra of one-electron species (H, He+); in the modern model the electron's position cannot be known exactly, only its probability of being found in regions called orbitals.",
        "de": "Bohrsches Atommodell: Elektronen bewegen sich auf Kreisbahnen mit festem Radius um den Kern, und das Modell erklärt nur die Spektren von Einelektronenteilchen (H, He+). Im modernen Atommodell ist der Ort des Elektrons nicht genau bestimmbar, nur seine Aufenthaltswahrscheinlichkeit in Bereichen, die Orbitale heißen.",
        "fr": "Dans le modèle atomique de Bohr, les électrons décrivent des orbites circulaires de rayon fixe autour du noyau, et ce modèle n'explique que les spectres des espèces à un électron (H, He+) ; dans le modèle moderne, la position de l'électron ne peut être connue exactement, seule sa probabilité de présence dans des régions appelées orbitales l'est.",
        "ru": "Модель атома Бора предполагает, что электроны движутся вокруг ядра по круговым орбитам определённого радиуса, и объясняет только спектры одноэлектронных частиц (H, He+); в современной модели положение электрона нельзя точно определить — говорят лишь о вероятности его нахождения в областях, называемых орбиталями.",
        "ar": "في نموذج بور الذري تتحرك الإلكترونات حول النواة في مدارات دائرية ذات أنصاف أقطار محددة، ولا يفسر هذا النموذج إلا أطياف الأنواع أحادية الإلكترون (H، He+)؛ أما في النموذج الحديث فلا يمكن تحديد موقع الإلكترون بدقة، بل احتمال وجوده في مناطق تسمى الأوربيتالات.",
        "zh": "玻尔原子模型认为电子在核外半径固定的圆形轨道上运动，只能解释单电子粒子（H、He+）的光谱；现代原子模型中电子的位置无法确定，只能描述其在称为原子轨道的区域中出现的概率。",
        "ku": "Di modela atomê ya Bohr de elektron li dora navokê li ser rêgehên dorhêlî yên bi nîvtîreya diyar dizivirin û ev model tenê spektra tenekên yek-elektronî (H, He+) rave dike; di modela nûjen de cihê elektronê bi tevahî nayê zanîn, tenê îhtîmala dîtina wê di herêmên bi navê orbîtal de tê gotin."
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
        "ku": "Enerjiya îyonbûnê"
      },
      "conceptB": {
        "tr": "Elektron İlgisi",
        "en": "Electron Affinity",
        "de": "Elektronenaffinität",
        "fr": "Affinité électronique",
        "ru": "Сродство к электрону",
        "ar": "الألفة الإلكترونية",
        "zh": "电子亲和能",
        "ku": "Têkiliya elektronê"
      },
      "distinction": {
        "tr": "İyonlaşma enerjisi gaz hâlindeki nötr bir atomdan bir elektron koparmak için gereken enerjidir ve her zaman endotermiktir; elektron ilgisi gaz hâlindeki nötr bir atomun bir elektron almasıyla gerçekleşen enerji değişimidir ve çoğu atom için ekzotermiktir.",
        "en": "Ionization energy is the energy needed to remove an electron from a neutral gaseous atom and is always endothermic; electron affinity is the energy change when a neutral gaseous atom gains an electron and is exothermic for most atoms.",
        "de": "Die Ionisierungsenergie ist die Energie, die nötig ist, um einem neutralen gasförmigen Atom ein Elektron zu entreißen, und ist immer endotherm; die Elektronenaffinität ist die Energieänderung bei der Aufnahme eines Elektrons durch ein neutrales gasförmiges Atom und ist für die meisten Atome exotherm.",
        "fr": "L'énergie d'ionisation est l'énergie nécessaire pour arracher un électron à un atome neutre gazeux ; elle est toujours endothermique. L'affinité électronique est la variation d'énergie lorsqu'un atome neutre gazeux capte un électron ; elle est exothermique pour la plupart des atomes.",
        "ru": "Энергия ионизации — энергия, необходимая для отрыва электрона от нейтрального атома в газовой фазе; процесс всегда эндотермический. Сродство к электрону — изменение энергии при присоединении электрона к нейтральному атому в газовой фазе; для большинства атомов процесс экзотермический.",
        "ar": "طاقة التأين هي الطاقة اللازمة لنزع إلكترون من ذرة متعادلة في الحالة الغازية وهي ماصّة للحرارة دائمًا؛ أما الألفة الإلكترونية فهي تغيّر الطاقة عند اكتساب ذرة متعادلة غازية إلكترونًا، وهي طاردة للحرارة لمعظم الذرات.",
        "zh": "电离能是从气态中性原子中移去一个电子所需的能量，总是吸热的；电子亲和能是气态中性原子获得一个电子时的能量变化，对大多数原子是放热的。",
        "ku": "Enerjiya îyonbûnê enerjiya ku ji bo derxistina elektronekê ji atomeke bêalî ya di rewşa gazê de pêwîst e û her tim endotermîk e; têkiliya elektronê guhertina enerjiyê ye dema ku atomeke bêalî ya gazî elektronekê werdigire û ji bo piraniya atoman ekzotermîk e."
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
        "ru": "Рейтинг орбитальной энергии (приращение n + l)",
        "ar": "تصنيف طاقة المدارات (تزايد n + l)",
        "zh": "轨道能量排名（n + l 增量）",
        "ku": "Rêzkirina Enerjiya Orbital (n + l Zêdebûn)"
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
        "ru": "Порядок орбитального заполнения Ауфбау",
        "ar": "أمر التعبئة المداري Aufbau",
        "zh": "Aufbau 轨道填充顺序",
        "ku": "Orbital Dagirtina Aufbau"
      },
      "steps": [
        {
          "tr": "1s orbitali en düşük enerjiyle dolar",
          "en": "1s orbital is filled with the lowest energy",
          "de": "Das 1s-Orbital ist mit der niedrigsten Energie gefüllt",
          "fr": "L’orbitale 1s est remplie de l’énergie la plus basse",
          "ru": "1s-орбиталь заполнена наименьшей энергией",
          "ar": "المدار 1s مملوء بأقل طاقة",
          "zh": "1s轨道充满了最低能量",
          "ku": "Orbital 1s bi enerjiya herî kêm tije ye"
        },
        {
          "tr": "2s ve 2p orbitalleri sırayla doldurulur",
          "en": "2s and 2p orbitals are filled sequentially",
          "de": "2s- und 2p-Orbitale werden nacheinander gefüllt",
          "fr": "Les orbitales 2s et 2p sont remplies séquentiellement",
          "ru": "2s и 2p орбитали заполняются последовательно.",
          "ar": "يتم ملء المدارات 2s و 2p بالتتابع",
          "zh": "2s和2p轨道依次填充",
          "ku": "Orbitalên 2s û 2p bi rêz têne dagirtin"
        },
        {
          "tr": "3s ve 3p orbitallerinden sonra 4s orbitali dolar",
          "en": "After the 3s and 3p orbitals, the 4s orbital is filled.",
          "de": "Nach den 3s- und 3p-Orbitalen wird das 4s-Orbital gefüllt.",
          "fr": "Après les orbitales 3s et 3p, l’orbitale 4s est remplie.",
          "ru": "После 3s- и 3p-орбиталей заполняется 4s-орбиталь.",
          "ar": "بعد المدارات 3s و3p، يمتلئ المدار 4s.",
          "zh": "在 3s 和 3p 轨道之后，4s 轨道被填充。",
          "ku": "Piştî orbitalên 3s û 3p, orbîtala 4s tije dibe."
        },
        {
          "tr": "4s'ten sonra 3d orbitallerine elektron yerleşir",
          "en": "After 4s, electrons are placed in 3d orbitals.",
          "de": "Nach 4s werden die Elektronen in die 3d-Orbitale eingebaut.",
          "fr": "Après la 4s, les électrons se placent dans les orbitales 3d.",
          "ru": "После 4s электроны заполняют 3d-орбитали.",
          "ar": "بعد 4s، توضع الإلكترونات في مدارات 3d.",
          "zh": "4s之后，电子填入3d轨道。",
          "ku": "Piştî 4s, elektron di orbitalên 3d de têne danîn."
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
        "ar": "تحديد أرقام الكم",
        "zh": "量子数的测定",
        "ku": "Diyarkirina Jimarên Kuantûmî"
      },
      "steps": [
        {
          "tr": "Elektronun bulunduğu katmandan baş kuantum n belirlenir",
          "en": "Principal quantum n is determined from the layer where the electron is located",
          "de": "Das Hauptquantum n wird aus der Schicht bestimmt, in der sich das Elektron befindet",
          "fr": "Le quantum principal n est déterminé à partir de la couche où se trouve l'électron",
          "ru": "Главный квант n определяется по слою, в котором находится электрон.",
          "ar": "يتم تحديد الكم الرئيسي n من الطبقة التي يقع فيها الإلكترون",
          "zh": "主量子 n 由电子所在层确定",
          "ku": "Kuantuma sereke n ji qata ku elektron lê ye tê destnîşankirin"
        },
        {
          "tr": "Orbital türünden açısal momentum kuantum l bulunur",
          "en": "The angular momentum quantum l of orbital type is found",
          "de": "Das Drehimpulsquantum l vom Orbitaltyp wird gefunden",
          "fr": "Le quantum de moment cinétique l de type orbital se trouve",
          "ru": "Находится квант углового момента l орбитального типа",
          "ar": "تم العثور على الزخم الزاوي الكمي l من النوع المداري",
          "zh": "求出轨道型角动量量子 l",
          "ku": "Hêza goşeyî kuantuma l ya cureya orbîtal tê dîtin"
        },
        {
          "tr": "l'ye bağlı olarak ml değerleri -l'den +l'ye sıralanır",
          "en": "Depending on l, ml values are sorted from -l to +l.",
          "de": "Abhängig von l werden ml-Werte von -l bis +l sortiert.",
          "fr": "En fonction de l, les valeurs ml sont triées de -l à +l.",
          "ru": "В зависимости от l значения ml сортируются от -l до +l.",
          "ar": "اعتمادًا على l، يتم فرز قيم ml من -l إلى +l.",
          "zh": "根据 l，ml 值从 -l 到 +l 排序。",
          "ku": "Li gorî l, nirxên ml ji -l ber +l têne rêz kirin."
        },
        {
          "tr": "Elektronun spin yönüne göre ms (+1/2 veya -1/2) belirlenir",
          "en": "ms (+1/2 or -1/2) is assigned according to the electron's spin direction",
          "de": "ms (+1/2 oder -1/2) wird nach der Spinrichtung des Elektrons festgelegt",
          "fr": "ms (+1/2 ou -1/2) est attribué selon le sens du spin de l'électron",
          "ru": "ms (+1/2 или -1/2) определяется направлением спина электрона",
          "ar": "يُحدَّد ms (+1/2 أو -1/2) وفق اتجاه مغزل الإلكترون",
          "zh": "根据电子的自旋方向确定 ms（+1/2 或 -1/2）",
          "ku": "ms (+1/2 an -1/2) li gorî arasteya spina elektronê tê diyarkirin"
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
        "ru": "Стабильность сферической симметрии (Cr и Cu)",
        "ar": "استقرار التماثل الكروي (الكروم والنحاس)",
        "zh": "球对称稳定性（Cr 和 Cu）",
        "ku": "Îstiqrara Sferîk ya Simetrî (Cr û Cu)"
      },
      "steps": [
        {
          "tr": "Sc'den itibaren 3d orbitalleri doldurulur",
          "en": "3d orbitals are filled starting from Sc",
          "de": "3d-Orbitale werden ab Sc gefüllt",
          "fr": "Les orbitales 3d sont remplies à partir de Sc",
          "ru": "3d-орбитали заполняются, начиная с Sc",
          "ar": "تمتلئ مدارات 3d بدءًا من Sc",
          "zh": "3d 轨道从 Sc 开始填充",
          "ku": "Orbitalên 3d ji Sc dest pê dikin têne dagirtin"
        },
        {
          "tr": "Cr atomunda 4s2 3d4 yerine 4s1 3d5 dizilimi oluşur",
          "en": "Instead of 4s2 3d4, the sequence 4s1 3d5 is formed in the Cr atom.",
          "de": "Anstelle von 4s2 3d4 entsteht im Cr-Atom die Folge 4s1 3d5.",
          "fr": "Au lieu de 4s2 3d4, la séquence 4s1 3d5 est formée dans l'atome de Cr.",
          "ru": "Вместо 4s2 3d4 в атоме Cr образуется последовательность 4s1 3d5.",
          "ar": "بدلا من 4s2 3d4، يتم تشكيل التسلسل 4s1 3d5 في ذرة الكروم.",
          "zh": "Cr 原子中形成的序列为 4s1 3d5，而不是 4s2 3d4。",
          "ku": "Li şûna 4s2 3d4, rêzika 4s1 3d5 di atoma Cr de pêk tê."
        },
        {
          "tr": "3d orbitalleri yarı dolu hale gelerek küresel simetri kazanır",
          "en": "3d orbitals become half-filled and gain spherical symmetry",
          "de": "3d-Orbitale werden zur Hälfte gefüllt und erhalten sphärische Symmetrie",
          "fr": "Les orbitales 3d deviennent à moitié remplies et acquièrent une symétrie sphérique",
          "ru": "3d-орбитали становятся наполовину заполненными и приобретают сферическую симметрию.",
          "ar": "تصبح مدارات 3d نصف ممتلئة وتكتسب تناظرًا كرويًا",
          "zh": "3d 轨道变为半填充并获得球对称性",
          "ku": "Orbîtalên 3d nîv tije dibin û hevsengiya ferîkî werdigirin"
        },
        {
          "tr": "Cu atomunda 4s1 3d10 dizilimiyle tam dolu küresel simetri kurulur",
          "en": "Full spherical symmetry is established in the Cu atom with the 4s1 3d10 sequence.",
          "de": "Mit der 4s1 3d10-Sequenz wird im Cu-Atom eine vollständige Kugelsymmetrie hergestellt.",
          "fr": "Une symétrie sphérique complète est établie dans l'atome de Cu avec la séquence 4s1 3d10.",
          "ru": "Полная сферическая симметрия устанавливается в атоме Cu с последовательностью 4s1 3d10.",
          "ar": "تم إنشاء تناظر كروي كامل في ذرة النحاس بالتسلسل 4s1 3d10.",
          "zh": "具有 4s1 3d10 序列的 Cu 原子建立了完全球对称性。",
          "ku": "Di atoma Cu de bi rêzika 4s1 3d10 sîmetrîya gewherî ya tam pêk tê."
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
        "ru": "Сколько полузаполненных орбиталей содержится в электронной конфигурации атома 24Cr в основном состоянии?",
        "ar": "ما عدد المدارات نصف الممتلئة الموجودة في التوزيع الإلكتروني لذرة 24Cr في الحالة الأرضية؟",
        "zh": "基态 24Cr 原子的电子排布中有多少个半满轨道？",
        "ku": "Di konfigurasyona elektronê ya atoma 24Cr di rewşa zemînê de çend orbîtalên nîv-tijî hene?"
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
        "ru": "Из-за устойчивости сферически симметричной конфигурации основное состояние 24Cr — [Ar] 4s1 3d5. Всего 6 наполовину заполненных орбиталей: 1 на 4s и 5 на 3d. Если записать [Ar] 4s2 3d4, получится 4; если считать только 3d-орбитали — 5.",
        "ar": "بسبب استقرار التناظر الكروي يكون التوزيع الإلكتروني لذرة 24Cr في الحالة الأرضية [Ar] 4s1 3d5. يوجد إجمالًا 6 مدارات نصف ممتلئة: 1 في 4s و5 في 3d. من يكتب التوزيع [Ar] 4s2 3d4 يحصل على 4، ومن يعدّ مدارات 3d فقط يحصل على 5.",
        "zh": "由于球形对称的稳定性，基态 24Cr 的电子排布为 [Ar] 4s1 3d5。共有 6 个半满轨道：4s 中 1 个，3d 中 5 个。若写成 [Ar] 4s2 3d4 会得到 4，只数 3d 轨道会得到 5。",
        "ku": "Ji ber aramiya sîmetriya gewherî, dîzilîma rewşa bingehîn a 24Cr [Ar] 4s1 3d5 e. Bi tevahî 6 orbîtalên nîv-tijî hene: 1 di 4s de û 5 di 3d de. Kesê ku [Ar] 4s2 3d4 binivîse 4, kesê ku tenê orbîtalên 3d bijmêre 5 dibîne."
      }
    },
    {
      "id": "u11-twin02",
      "stem": {
        "tr": "Açısal momentum kuantum sayısı l = 2 ve manyetik kuantum sayısı ml = -1 olan bir elektron hangi orbital türünde bulunabilir?",
        "en": "In which orbital type can an electron with angular momentum quantum number l = 2 and magnetic quantum number ml = -1 be found?",
        "de": "In welchem Orbitaltyp befindet sich ein Elektron mit der Drehimpulsquantenzahl l = 2 und der magnetischen Quantenzahl ml = -1?",
        "fr": "Dans quel type d'orbite peut-on trouver un électron avec un nombre quantique de moment cinétique l = 2 et un nombre quantique magnétique ml = -1 ?",
        "ru": "В каком типе орбитали может находиться электрон с квантовым числом углового момента l = 2 и магнитным квантовым числом ml = -1?",
        "ar": "في أي نوع مداري يمكن العثور على إلكترون له زخم زاوي عدد الكم l = 2 وعدد كم مغناطيسي ml = -1؟",
        "zh": "在哪种轨道类型中可以找到角动量量子数 l = 2 且磁量子数 ml = -1 的电子？",
        "ku": "Elektroneke ku hejmara wê ya kuantûmê ya momenta goşeyî l = 2 û hejmara wê ya kuantûmê ya magnetîk ml = -1 e, di kîjan cureya orbîtalê de dikare hebe?"
      },
      "options": [
        {
          "tr": "d orbitali",
          "en": "d orbital",
          "de": "d-Orbital",
          "fr": "orbitale d",
          "ru": "d-орбиталь",
          "ar": "مدار d",
          "zh": "d轨道",
          "ku": "orbîtala d"
        },
        {
          "tr": "s orbitali",
          "en": "s orbital",
          "de": "s-Orbital",
          "fr": "orbitale s",
          "ru": "s-орбиталь",
          "ar": "مدار s",
          "zh": "s轨道",
          "ku": "orbîtala s"
        },
        {
          "tr": "p orbitali",
          "en": "p orbital",
          "de": "p-Orbital",
          "fr": "orbitale p",
          "ru": "p-орбиталь",
          "ar": "مدار p",
          "zh": "p轨道",
          "ku": "orbîtala p"
        },
        {
          "tr": "f orbitali",
          "en": "f orbital",
          "de": "f-Orbital",
          "fr": "orbitale f",
          "ru": "f-орбиталь",
          "ar": "مدار f",
          "zh": "f轨道",
          "ku": "orbîtala f"
        },
        {
          "tr": "g orbitali",
          "en": "g orbital",
          "de": "g-Orbital",
          "fr": "orbitale g",
          "ru": "g-орбиталь",
          "ar": "مدار g",
          "zh": "g轨道",
          "ku": "orbîtala g"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Orbital türünü açısal momentum kuantum sayısı belirler: l = 0 s, l = 1 p, l = 2 d, l = 3 f. l = 2 olduğundan elektron bir d orbitalindedir; d orbitallerinde ml = -2, -1, 0, +1, +2 değerlerini alabildiğinden ml = -1 mümkündür. ml = -1 değeri p orbitallerinde de görülür, ancak p için l = 1'dir.",
        "en": "The orbital type is set by the angular momentum quantum number: l = 0 s, l = 1 p, l = 2 d, l = 3 f. Since l = 2, the electron is in a d orbital; for d orbitals ml can be -2, -1, 0, +1, +2, so ml = -1 is allowed. ml = -1 also occurs for p orbitals, but p has l = 1.",
        "de": "Den Orbitaltyp legt die Drehimpulsquantenzahl fest: l = 0 s, l = 1 p, l = 2 d, l = 3 f. Wegen l = 2 befindet sich das Elektron in einem d-Orbital; für d-Orbitale kann ml die Werte -2, -1, 0, +1, +2 annehmen, ml = -1 ist also möglich. ml = -1 kommt auch bei p-Orbitalen vor, dort ist aber l = 1.",
        "fr": "Le type d'orbitale est fixé par le nombre quantique de moment cinétique : l = 0 s, l = 1 p, l = 2 d, l = 3 f. Comme l = 2, l'électron est dans une orbitale d ; pour les orbitales d, ml peut valoir -2, -1, 0, +1, +2, donc ml = -1 est possible. ml = -1 existe aussi pour les orbitales p, mais alors l = 1.",
        "ru": "Тип орбитали определяется квантовым числом углового момента: l = 0 s, l = 1 p, l = 2 d, l = 3 f. Так как l = 2, электрон находится на d-орбитали; для d-орбиталей ml принимает значения -2, -1, 0, +1, +2, поэтому ml = -1 возможно. Значение ml = -1 встречается и у p-орбиталей, но для них l = 1.",
        "ar": "يحدد عدد كم الزخم الزاوي نوع المدار: l = 0 s، l = 1 p، l = 2 d، l = 3 f. بما أن l = 2 فالإلكترون في مدار d؛ وفي مدارات d يأخذ ml القيم -2، -1، 0، +1، +2، لذا فإن ml = -1 ممكن. القيمة ml = -1 تظهر أيضًا في مدارات p، لكن l = 1 فيها.",
        "zh": "轨道类型由角动量量子数决定：l = 0 为 s，l = 1 为 p，l = 2 为 d，l = 3 为 f。因为 l = 2，电子处于 d 轨道；d 轨道的 ml 可取 -2、-1、0、+1、+2，所以 ml = -1 是允许的。p 轨道也可有 ml = -1，但 p 轨道的 l = 1。",
        "ku": "Cureya orbîtalê ji hêla hejmara kuantûmê ya momenta goşeyî ve tê diyarkirin: l = 0 s, l = 1 p, l = 2 d, l = 3 f. Ji ber ku l = 2 e, elektron di orbîtaleke d de ye; di orbîtalên d de ml dikare -2, -1, 0, +1, +2 be, loma ml = -1 gengaz e. ml = -1 di orbîtalên p de jî heye, lê ji bo p l = 1 e."
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
        "zh": "下列哪组量子数 (n, l, ml, ms) 对原子中的一个电子是可能的？",
        "ku": "Ji van komên hejmarên kuantûmê (n, l, ml, ms) kîjan ji bo elektroneke di atomekê de gengaz e?"
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
        "ru": "Правила: l = 0 ... n - 1; ml = -l ... +l; ms = +1/2 или -1/2. При n = 2 l не больше 1, значит l = 2 невозможно. При l = 1 ml может быть только -1, 0, +1, но не -2. При l = 0 ml равно только 0, но не +1. ms никогда не равно 0. Набор n = 4, l = 2 (4d), ml = -2, ms = +1/2 удовлетворяет всем правилам.",
        "ar": "القواعد: l = 0 ... n - 1؛ ml = -l ... +l؛ ms = +1/2 أو -1/2. عندما n = 2 تكون l على الأكثر 1 ولا يمكن أن تساوي 2. عندما l = 1 لا يأخذ ml إلا -1 أو 0 أو +1، ولا يمكن أن يساوي -2. عندما l = 0 يكون ml صفرًا فقط لا +1. ولا يساوي ms صفرًا أبدًا. المجموعة n = 4، l = 2 (4d)، ml = -2، ms = +1/2 تحقق جميع القواعد.",
        "zh": "规则：l = 0 … n - 1；ml = -l … +l；ms = +1/2 或 -1/2。n = 2 时 l 最大为 1，不能为 2。l = 1 时 ml 只能为 -1、0、+1，不能为 -2。l = 0 时 ml 只能为 0，不能为 +1。ms 永远不能为 0。n = 4、l = 2 (4d)、ml = -2、ms = +1/2 这一组符合所有规则。",
        "ku": "Qaîde: l = 0 ... n - 1; ml = -l ... +l; ms = +1/2 an -1/2. Ji bo n = 2, l herî zêde 1 e, nikare 2 be. Ji bo l = 1, ml tenê dikare -1, 0, +1 be, ne -2. Ji bo l = 0, ml tenê 0 ye, ne +1. ms qet nabe 0. Koma n = 4, l = 2 (4d), ml = -2, ms = +1/2 li gorî hemû qaîdeyan e."
      }
    },
    {
      "id": "u11-twin04",
      "stem": {
        "tr": "Temel hâldeki 25Mn atomunda en az bir elektron bulunduran orbital sayısı kaçtır?",
        "en": "How many orbitals contain at least one electron in a ground-state 25Mn atom?",
        "de": "Wie viele Orbitale enthalten im 25Mn-Atom im Grundzustand mindestens ein Elektron?",
        "fr": "Combien d'orbitales contiennent au moins un électron dans un atome de 25Mn à l'état fondamental ?",
        "ru": "Сколько орбиталей содержат хотя бы один электрон в атоме 25Mn в основном состоянии?",
        "ar": "كم مدارًا يحتوي على إلكترون واحد على الأقل في ذرة 25Mn في الحالة الأساسية؟",
        "zh": "基态 25Mn 原子中至少含有一个电子的轨道有多少个？",
        "ku": "Di atoma 25Mn ya di rewşa bingehîn de çend orbîtal herî kêm yek elektron dihewînin?"
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
        "ru": "25Mn: 1s2 2s2 2p6 3s2 3p6 4s2 3d5. Полностью заполненные орбитали: 1s, 2s, 3s, 4s (4) + 2p (3) + 3p (3) = 10. По правилу Хунда 5 электронов 3d5 по одному занимают 5 орбиталей: 5 наполовину заполненных орбиталей. Всего 10 + 5 = 15. Если спарить 3d-электроны на 3 орбиталях, получится 13; если считать только заполненные орбитали — 10; если считать подуровни — 7.",
        "ar": "25Mn: 1s2 2s2 2p6 3s2 3p6 4s2 3d5. المدارات الممتلئة: 1s و2s و3s و4s (4) + 2p (3) + 3p (3) = 10. وفق قاعدة هوند تشغل إلكترونات 3d5 الخمسة خمسة مدارات منفصلة فرادى: 5 مدارات نصف ممتلئة. المجموع 10 + 5 = 15. من يزاوج إلكترونات 3d في 3 مدارات يحصل على 13، ومن يعدّ المدارات الممتلئة فقط يحصل على 10، ومن يعدّ المستويات الفرعية يحصل على 7.",
        "zh": "25Mn：1s2 2s2 2p6 3s2 3p6 4s2 3d5。全充满轨道：1s、2s、3s、4s（4 个）+ 2p（3 个）+ 3p（3 个）= 10。按洪特规则，3d5 的 5 个电子各占一个轨道：5 个半充满轨道。共 10 + 5 = 15。若把 3d 电子成对放入 3 个轨道会得到 13，只数全充满轨道得到 10，数亚层得到 7。",
        "ku": "25Mn: 1s2 2s2 2p6 3s2 3p6 4s2 3d5. Orbîtalên tam-tijî: 1s, 2s, 3s, 4s (4) + 2p (3) + 3p (3) = 10. Li gorî qaîdeya Hund 5 elektronên 3d5 yek bi yek li 5 orbîtalên cuda bicih dibin: 5 orbîtalên nîv-tijî. Bi giştî 10 + 5 = 15. Yê ku elektronên 3d di 3 orbîtalan de cot dike 13, yê ku tenê orbîtalên tam-tijî dihejmêre 10, yê ku binastan dihejmêre 7 dibîne."
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
        "ar": "أيّ مما يأتي هو التوزيع الإلكتروني للأيون 29Cu+ في الحالة الأساسية؟ (18Ar)",
        "zh": "下列哪一项是 29Cu+ 离子的基态电子排布？(18Ar)",
        "ku": "Ji van kîjan dîzilîma elektronan a îyona 29Cu+ di rewşa bingehîn de ye? (18Ar)"
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
        "ru": "Из-за устойчивости сферической симметрии атом Cu имеет конфигурацию [Ar] 4s1 3d10, а не 4s2 3d9. При образовании катиона электрон сначала удаляется с внешней 4s-орбитали; Cu+ с 28 электронами = [Ar] 3d10. [Ar] 4s1 3d10 — нейтральный атом Cu; [Ar] 4s2 3d8 получается, если принять Cu за 4s2 3d9 и удалить электрон с 3d.",
        "ar": "بسبب استقرار التناظر الكروي يكون توزيع ذرة Cu هو [Ar] 4s1 3d10 بدلًا من 4s2 3d9. عند تكوّن الأيون الموجب يُنزع الإلكترون أولًا من المدار 4s الأبعد؛ فيكون Cu+ ذو الـ 28 إلكترونًا = [Ar] 3d10. أما [Ar] 4s1 3d10 فهو ذرة Cu المتعادلة، و[Ar] 4s2 3d8 ناتج عن اعتبار Cu بتوزيع 4s2 3d9 ونزع الإلكترون من 3d.",
        "zh": "由于球形对称带来的稳定性，Cu 原子的排布是 [Ar] 4s1 3d10，而不是 4s2 3d9。形成阳离子时先失去最外层 4s 轨道上的电子；含 28 个电子的 Cu+ = [Ar] 3d10。[Ar] 4s1 3d10 是中性 Cu 原子；[Ar] 4s2 3d8 是把 Cu 当作 4s2 3d9 并从 3d 失去电子得到的错误结果。",
        "ku": "Ji ber aramiya sîmetriya gewherî, dîzilîma atoma Cu li şûna 4s2 3d9 [Ar] 4s1 3d10 e. Dema kation çêdibe, elektron pêşî ji orbîtala 4s ya qata herî derve tê qetandin; Cu+ bi 28 elektronan = [Ar] 3d10. [Ar] 4s1 3d10 atoma Cu ya bêalî ye; [Ar] 4s2 3d8 ji wê tê ku Cu wekî 4s2 3d9 bê hesibandin û elektron ji 3d bê qetandin."
      }
    },
    {
      "id": "u11-twin06",
      "stem": {
        "tr": "Temel hâl elektron dizilimi 1s2 2s2 2p6 3s2 3p6 4s2 3d3 olan X atomunun periyodik sistemdeki yeri için aşağıdakilerden hangisi doğrudur?",
        "en": "Which of the following correctly gives the position in the periodic table of atom X, whose ground-state configuration is 1s2 2s2 2p6 3s2 3p6 4s2 3d3?",
        "de": "Welche Angabe zur Stellung des Atoms X im Periodensystem ist richtig, wenn seine Grundzustandskonfiguration 1s2 2s2 2p6 3s2 3p6 4s2 3d3 lautet?",
        "fr": "Laquelle des propositions suivantes donne correctement la position dans le tableau périodique de l'atome X, dont la configuration à l'état fondamental est 1s2 2s2 2p6 3s2 3p6 4s2 3d3 ?",
        "ru": "Какое утверждение верно указывает положение в периодической системе атома X, электронная конфигурация которого в основном состоянии 1s2 2s2 2p6 3s2 3p6 4s2 3d3?",
        "ar": "أيّ مما يأتي يحدد بشكل صحيح موقع الذرة X في الجدول الدوري إذا كان توزيعها الإلكتروني في الحالة الأساسية 1s2 2s2 2p6 3s2 3p6 4s2 3d3؟",
        "zh": "基态电子排布为 1s2 2s2 2p6 3s2 3p6 4s2 3d3 的 X 原子在元素周期表中的位置，下列哪项正确？",
        "ku": "Cihê atoma X di sîstema periyodîk de, ya ku dîzilîma wê ya rewşa bingehîn 1s2 2s2 2p6 3s2 3p6 4s2 3d3 e, kîjan rast e?"
      },
      "options": [
        {
          "tr": "3. periyot, 3A grubu, p bloku",
          "en": "Period 3, group 3A, p-block",
          "de": "3. Periode, Gruppe 3A, p-Block",
          "fr": "3e période, groupe 3A, bloc p",
          "ru": "3-й период, группа 3А, p-блок",
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
          "ru": "4-й период, группа 2А, s-блок",
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
        "ru": "Наибольшее главное квантовое число равно 4, значит X находится в 4-м периоде (цифра 3 в 3d не указывает период). Конфигурация оканчивается на d-орбиталь, поэтому X — переходный металл d-блока. Номер B-группы равен сумме ns- и (n-1)d-электронов: 2 + 3 = 5, то есть группа 5B (5-я группа); X = 23V. Если считать только 3d-электроны, получится 3B, а если смотреть только на 4s2 — 2А.",
        "ar": "أكبر عدد كم رئيس هو 4، لذا تقع X في الدورة الرابعة (الرقم 3 في 3d لا يدل على الدورة). ينتهي التوزيع بمدار d، فـ X فلز انتقالي من الفئة d. رقم المجموعة B هو مجموع إلكترونات ns و(n-1)d: 2 + 3 = 5، أي المجموعة 5B (المجموعة 5)؛ X = 23V. من يعدّ إلكترونات 3d فقط يحصل على 3B، ومن ينظر إلى 4s2 فقط يحصل على 2A.",
        "zh": "最大主量子数为 4，所以 X 位于第 4 周期（3d 中的 3 不代表周期）。排布以 d 轨道结尾，X 是 d 区过渡金属。B 族序数等于 ns 与 (n-1)d 电子数之和：2 + 3 = 5，即 5B 族（第 5 族）；X = 23V。只数 3d 电子会得到 3B，只看 4s2 会得到 2A。",
        "ku": "Hejmara kuantûmê ya sereke ya herî mezin 4 e, loma X di periyoda 4. de ye (3-ya di 3d de periyodê nîşan nade). Dîzilîm bi orbîtala d diqede, loma X metaleke derbasbûnê ya bloka d ye. Hejmara koma B berhevoka elektronên ns û (n-1)d e: 2 + 3 = 5, ango koma 5B (koma 5.); X = 23V. Yê ku tenê elektronên 3d dihejmêre 3B, yê ku tenê li 4s2 dinêre 2A dibîne."
      }
    },
    {
      "id": "u11-twin07",
      "stem": {
        "tr": "Baş kuantum sayısı n = 3 olan enerji düzeyi ile ilgili; I. En fazla 18 elektron alabilir. II. Bu düzeydeki orbitallerin l değerleri 0, 1 ve 2 olabilir. III. Bu düzeyde f orbitalleri de bulunur. yargılarından hangileri doğrudur?",
        "en": "Regarding the energy level with principal quantum number n = 3: I. It can hold at most 18 electrons. II. The orbitals in this level can have l values of 0, 1 and 2. III. This level also contains f orbitals. Which of these statements are correct?",
        "de": "Zum Energieniveau mit der Hauptquantenzahl n = 3: I. Es kann höchstens 18 Elektronen aufnehmen. II. Die Orbitale dieses Niveaus können l = 0, 1 und 2 haben. III. Auf diesem Niveau gibt es auch f-Orbitale. Welche Aussagen sind richtig?",
        "fr": "À propos du niveau d'énergie de nombre quantique principal n = 3 : I. Il peut contenir au maximum 18 électrons. II. Les orbitales de ce niveau peuvent avoir l = 0, 1 et 2. III. Ce niveau contient aussi des orbitales f. Lesquelles de ces affirmations sont correctes ?",
        "ru": "Об энергетическом уровне с главным квантовым числом n = 3: I. Он может вместить не более 18 электронов. II. Орбитали этого уровня могут иметь l = 0, 1 и 2. III. На этом уровне есть и f-орбитали. Какие утверждения верны?",
        "ar": "بخصوص مستوى الطاقة ذي عدد الكم الرئيس n = 3: I. يتسع لـ 18 إلكترونًا على الأكثر. II. يمكن أن تكون قيم l لمدارات هذا المستوى 0 و1 و2. III. يحتوي هذا المستوى أيضًا على مدارات f. أيّ هذه العبارات صحيحة؟",
        "zh": "关于主量子数 n = 3 的能层：I. 最多可容纳 18 个电子。II. 该能层轨道的 l 值可以是 0、1 和 2。III. 该能层也含有 f 轨道。以上说法中哪些正确？",
        "ku": "Derbarê asta enerjiyê ya bi hejmara kuantûmê ya sereke n = 3: I. Herî zêde 18 elektronan digire. II. Nirxên l yên orbîtalên vê astê dikarin 0, 1 û 2 bin. III. Di vê astê de orbîtalên f jî hene. Kîjan ji van gotinan rast in?"
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
        "tr": "3. periyotta bulunan X elementinin ardışık iyonlaşma enerjileri (kJ/mol) şöyledir: İE1 = 738, İE2 = 1451, İE3 = 7733, İE4 = 10540. Buna göre X ile ilgili aşağıdakilerden hangisi doğrudur?",
        "en": "The successive ionization energies (kJ/mol) of element X, which is in period 3, are: IE1 = 738, IE2 = 1451, IE3 = 7733, IE4 = 10540. Which of the following about X is correct?",
        "de": "Die aufeinanderfolgenden Ionisierungsenergien (kJ/mol) des Elements X aus der 3. Periode betragen: IE1 = 738, IE2 = 1451, IE3 = 7733, IE4 = 10540. Welche Aussage über X ist richtig?",
        "fr": "Les énergies d'ionisation successives (kJ/mol) de l'élément X, situé dans la 3e période, sont : EI1 = 738, EI2 = 1451, EI3 = 7733, EI4 = 10540. Laquelle des propositions suivantes sur X est correcte ?",
        "ru": "Последовательные энергии ионизации (кДж/моль) элемента X 3-го периода: ЭИ1 = 738, ЭИ2 = 1451, ЭИ3 = 7733, ЭИ4 = 10540. Какое утверждение об X верно?",
        "ar": "طاقات التأين المتتالية (kJ/mol) للعنصر X الواقع في الدورة الثالثة هي: IE1 = 738، IE2 = 1451، IE3 = 7733، IE4 = 10540. أيّ مما يأتي صحيح بشأن X؟",
        "zh": "位于第 3 周期的元素 X 的逐级电离能 (kJ/mol) 为：IE1 = 738，IE2 = 1451，IE3 = 7733，IE4 = 10540。下列关于 X 的说法哪项正确？",
        "ku": "Enerjiyên iyonîzasyonê yên li pey hev (kJ/mol) yên hêmana X ya di periyoda 3. de ev in: IE1 = 738, IE2 = 1451, IE3 = 7733, IE4 = 10540. Derbarê X de kîjan rast e?"
      },
      "options": [
        {
          "tr": "1A grubunda bulunur.",
          "en": "It is in group 1A.",
          "de": "Es steht in Gruppe 1A.",
          "fr": "Il appartient au groupe 1A.",
          "ru": "Он находится в группе 1А.",
          "ar": "يقع في المجموعة 1A.",
          "zh": "它位于 1A 族。",
          "ku": "Di koma 1A de ye."
        },
        {
          "tr": "Elektron dizilimi 3p orbitaliyle biter.",
          "en": "Its electron configuration ends in a 3p orbital.",
          "de": "Seine Elektronenkonfiguration endet mit einem 3p-Orbital.",
          "fr": "Sa configuration électronique se termine par une orbitale 3p.",
          "ru": "Его электронная конфигурация оканчивается на 3p-орбиталь.",
          "ar": "ينتهي توزيعه الإلكتروني بمدار 3p.",
          "zh": "其电子排布以 3p 轨道结尾。",
          "ku": "Dîzilîma wê ya elektronan bi orbîtala 3p diqede."
        },
        {
          "tr": "Kararlı iyonu X3+ iyonudur.",
          "en": "Its stable ion is X3+.",
          "de": "Sein stabiles Ion ist X3+.",
          "fr": "Son ion stable est X3+.",
          "ru": "Его устойчивый ион — X3+.",
          "ar": "أيونه المستقر هو X3+.",
          "zh": "其稳定离子是 X3+。",
          "ku": "Îyona wê ya aram X3+ e."
        },
        {
          "tr": "Atom numarası 13'tür.",
          "en": "Its atomic number is 13.",
          "de": "Seine Ordnungszahl ist 13.",
          "fr": "Son numéro atomique est 13.",
          "ru": "Его атомный номер 13.",
          "ar": "عدده الذري 13.",
          "zh": "其原子序数为 13。",
          "ku": "Hejmara wê ya atomî 13 e."
        },
        {
          "tr": "Değerlik elektron sayısı 2, atom numarası 12'dir.",
          "en": "It has 2 valence electrons and atomic number 12.",
          "de": "Es hat 2 Valenzelektronen und die Ordnungszahl 12.",
          "fr": "Il possède 2 électrons de valence et son numéro atomique est 12.",
          "ru": "У него 2 валентных электрона, атомный номер 12.",
          "ar": "لديه إلكترونا تكافؤ وعدده الذري 12.",
          "zh": "它有 2 个价电子，原子序数为 12。",
          "ku": "2 elektronên wê yên valansê hene û hejmara wê ya atomî 12 e."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "İE2'den İE3'e geçişte enerji yaklaşık 5 kat artar (1451 → 7733). Bu büyük sıçrama, iki elektron koparıldıktan sonra soygaz düzenindeki iç katmana inildiğini gösterir; X'in 2 değerlik elektronu vardır. 3. periyot 2A grubu: 1s2 2s2 2p6 3s2, Z = 12 (Mg). Dizilim 3s ile biter ve kararlı iyonu X2+'dir. Atom numarası 13 (Al, 3A) olsaydı büyük sıçrama İE3 ile İE4 arasında görülürdü; 1A elementinde ise sıçrama İE1'den sonra olurdu.",
        "en": "From IE2 to IE3 the energy rises about fivefold (1451 → 7733). This big jump shows that after two electrons are removed, an inner noble-gas shell is reached; X has 2 valence electrons. Period 3, group 2A: 1s2 2s2 2p6 3s2, Z = 12 (Mg). The configuration ends in 3s and the stable ion is X2+. If the atomic number were 13 (Al, 3A), the jump would come between IE3 and IE4; for a 1A element it would come right after IE1.",
        "de": "Von IE2 zu IE3 steigt die Energie etwa auf das Fünffache (1451 → 7733). Dieser große Sprung zeigt, dass nach Entfernen zweier Elektronen eine innere Edelgasschale erreicht ist; X hat 2 Valenzelektronen. 3. Periode, Gruppe 2A: 1s2 2s2 2p6 3s2, Z = 12 (Mg). Die Konfiguration endet mit 3s, das stabile Ion ist X2+. Wäre die Ordnungszahl 13 (Al, 3A), läge der Sprung zwischen IE3 und IE4; bei einem 1A-Element direkt nach IE1.",
        "fr": "De EI2 à EI3, l'énergie est multipliée par environ cinq (1451 → 7733). Ce grand saut montre qu'après le départ de deux électrons on atteint une couche interne de gaz noble ; X possède 2 électrons de valence. 3e période, groupe 2A : 1s2 2s2 2p6 3s2, Z = 12 (Mg). La configuration se termine par 3s et l'ion stable est X2+. Si le numéro atomique était 13 (Al, 3A), le saut se situerait entre EI3 et EI4 ; pour un élément 1A, juste après EI1.",
        "ru": "От ЭИ2 к ЭИ3 энергия возрастает примерно в 5 раз (1451 → 7733). Этот резкий скачок показывает, что после удаления двух электронов достигнут внутренний слой с конфигурацией благородного газа; у X 2 валентных электрона. 3-й период, группа 2А: 1s2 2s2 2p6 3s2, Z = 12 (Mg). Конфигурация оканчивается на 3s, устойчивый ион — X2+. Если бы атомный номер был 13 (Al, 3А), скачок был бы между ЭИ3 и ЭИ4; у элемента 1А — сразу после ЭИ1.",
        "ar": "من IE2 إلى IE3 تزداد الطاقة نحو خمسة أضعاف (1451 → 7733). تدل هذه القفزة الكبيرة على الوصول إلى غلاف داخلي بتوزيع الغاز النبيل بعد نزع إلكترونين؛ إذن لـ X إلكترونا تكافؤ. الدورة الثالثة، المجموعة 2A: 1s2 2s2 2p6 3s2، Z = 12 (Mg). ينتهي التوزيع بـ 3s وأيونه المستقر X2+. لو كان العدد الذري 13 (Al، 3A) لظهرت القفزة بين IE3 وIE4، ولعنصر من 1A لظهرت مباشرة بعد IE1.",
        "zh": "从 IE2 到 IE3 能量约增大 5 倍 (1451 → 7733)。这一突跃说明失去两个电子后已到达稀有气体结构的内层；X 有 2 个价电子。第 3 周期 2A 族：1s2 2s2 2p6 3s2，Z = 12 (Mg)。排布以 3s 结尾，稳定离子为 X2+。若原子序数为 13 (Al，3A)，突跃应出现在 IE3 与 IE4 之间；若为 1A 元素，突跃紧接在 IE1 之后。",
        "ku": "Ji IE2 bo IE3 enerjî nêzî pênc qat zêde dibe (1451 → 7733). Ev bazdana mezin nîşan dide ku piştî qetandina du elektronan qata hundir a bi rêzkirina gaza esil tê gihîştin; X 2 elektronên valansê hene. Periyoda 3., koma 2A: 1s2 2s2 2p6 3s2, Z = 12 (Mg). Dîzilîm bi 3s diqede û îyona wê ya aram X2+ e. Heke hejmara atomî 13 (Al, 3A) bûya, bazdan dê di navbera IE3 û IE4 de bûya; ji bo hêmaneke 1A jî rasterast piştî IE1."
      }
    },
    {
      "id": "u11-twin09",
      "stem": {
        "tr": "8O2-, 9F-, 11Na+ ve 12Mg2+ taneciklerinin yarıçaplarının büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir?",
        "en": "Which of the following ranks the radii of the species 8O2-, 9F-, 11Na+ and 12Mg2+ from largest to smallest?",
        "de": "Welche Reihenfolge gibt die Radien der Teilchen 8O2-, 9F-, 11Na+ und 12Mg2+ vom größten zum kleinsten an?",
        "fr": "Lequel des classements suivants range les rayons des espèces 8O2-, 9F-, 11Na+ et 12Mg2+ du plus grand au plus petit ?",
        "ru": "Какой ряд располагает радиусы частиц 8O2-, 9F-, 11Na+ и 12Mg2+ в порядке убывания?",
        "ar": "أيّ مما يأتي يرتب أنصاف أقطار الدقائق 8O2- و9F- و11Na+ و12Mg2+ من الأكبر إلى الأصغر؟",
        "zh": "下列哪项把 8O2-、9F-、11Na+ 和 12Mg2+ 的半径按从大到小排列？",
        "ku": "Kîjan rêz tîrêjên perçeyên 8O2-, 9F-, 11Na+ û 12Mg2+ ji ya herî mezin ber bi ya herî biçûk ve rêz dike?"
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
        "ru": "У всех четырёх частиц по 10 электронов (изоэлектронные, 1s2 2s2 2p6). При одинаковом числе электронов радиус определяется числом протонов: чем больше протонов, тем сильнее притяжение на каждый электрон и тем меньше радиус. Поскольку числа протонов 8 < 9 < 11 < 12, O2- > F- > Na+ > Mg2+. Считать катионы бо́льшими — значит ошибочно переносить большой размер атомов Na и Mg на их ионы.",
        "ar": "لكل الدقائق الأربع 10 إلكترونات (متساوية الإلكترونات، 1s2 2s2 2p6). عند تساوي عدد الإلكترونات يحدد عدد البروتونات نصف القطر: كلما زاد عدد البروتونات زاد الجذب لكل إلكترون وصغر نصف القطر. وبما أن أعداد البروتونات 8 < 9 < 11 < 12 فإن O2- > F- > Na+ > Mg2+. أما اعتبار الأيونات الموجبة أكبر فهو نقل خاطئ لكبر ذرتي Na وMg إلى أيونيهما.",
        "zh": "四种粒子都有 10 个电子（等电子体，1s2 2s2 2p6）。电子数相同时由质子数决定半径：质子越多，每个电子受到的吸引越强，半径越小。质子数 8 < 9 < 11 < 12，所以 O2- > F- > Na+ > Mg2+。认为阳离子更大，是把 Na、Mg 原子的大半径错误地套用到它们的离子上。",
        "ku": "Her çar perçe 10 elektron hene (îzoelektronîk, 1s2 2s2 2p6). Dema hejmara elektronan wekhev be, tîrêj bi hejmara protonan tê diyarkirin: proton çiqas zêde bin, kişandina li ser her elektronê ewqas xurt e û tîrêj biçûk dibe. Ji ber ku hejmarên protonan 8 < 9 < 11 < 12 ne, O2- > F- > Na+ > Mg2+. Mezinhesibandina kationan, mezinahiya atomên Na û Mg bi şaşî li îyonên wan bar dike."
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
        "ku": "Ji van dîzilîmên elektronan kîjan aîdî atomeke di rewşa heyecanî (uyarılmış) de ye? (18Ar)"
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
        "ru": "В возбуждённом состоянии электрон перешёл на более высокую орбиталь, хотя на орбитали с меньшей энергией ещё есть место. У атома с 4 электронами 1s2 2s1 2p1 (Be) электрон находится на 2p, хотя 2s не заполнена; его основное состояние 1s2 2s2. [Ar] 4s1 3d5 (Cr) и [Ar] 4s1 3d10 (Cu) кажутся нарушением порядка Ауфбау, но благодаря устойчивости сферической симметрии это настоящие основные состояния этих атомов. Две другие конфигурации соответствуют порядку Ауфбау.",
        "ar": "في الحالة المثارة ينتقل إلكترون إلى مدار أعلى مع وجود مكان في مدار أقل طاقة. في الذرة ذات الإلكترونات الأربعة 1s2 2s1 2p1 (Be) يوجد إلكترون في 2p قبل امتلاء 2s، وحالتها الأساسية 1s2 2s2. يبدو التوزيعان [Ar] 4s1 3d5 (Cr) و[Ar] 4s1 3d10 (Cu) مخالفين لترتيب أوفباو، لكنهما التوزيعان الأساسيان الحقيقيان لهاتين الذرتين بسبب استقرار التناظر الكروي. والتوزيعان الآخران يتبعان ترتيب أوفباو.",
        "zh": "激发态是指低能量轨道仍有空位时，电子已跃迁到更高的轨道。含 4 个电子的 1s2 2s1 2p1 (Be) 中，2s 未填满时就有电子进入 2p；其基态为 1s2 2s2。[Ar] 4s1 3d5 (Cr) 和 [Ar] 4s1 3d10 (Cu) 看似违背构造原理，但由于球形对称的稳定性，它们正是这两种原子的基态排布。另外两种排布符合构造原理顺序。",
        "ku": "Di rewşa heyecanî de elektronek derbasî orbîtaleke jortir bûye her çend di orbîtaleke bi enerjiya kêmtir de cih hebe. Di atoma bi 4 elektronan 1s2 2s1 2p1 (Be) de, berî ku 2s tijî bibe elektronek ketiye 2p; rewşa wê ya bingehîn 1s2 2s2 e. [Ar] 4s1 3d5 (Cr) û [Ar] 4s1 3d10 (Cu) dixuyin ku li dijî rêza Aufbau ne, lê ji ber aramiya sîmetriya gewherî dîzilîmên rastîn ên rewşa bingehîn a van atoman in. Her du dîzilîmên din li gorî rêza Aufbau ne."
      }
    },
    {
      "id": "u11-twin11",
      "stem": {
        "tr": "Atom modelleri ile ilgili; I. Bohr modeli çok elektronlu atomların spektrumlarını açıklayamaz. II. Modern atom modeline göre bir elektronun konumu ve hızı aynı anda kesin olarak belirlenebilir. III. Modern atom modelinde orbital, elektronun bulunma olasılığının yüksek olduğu bölgedir. yargılarından hangileri doğrudur?",
        "en": "Regarding atomic models: I. The Bohr model cannot explain the spectra of many-electron atoms. II. According to the modern atomic model, the position and velocity of an electron can be determined exactly at the same time. III. In the modern atomic model, an orbital is a region where the probability of finding the electron is high. Which of these statements are correct?",
        "de": "Zu den Atommodellen: I. Das Bohrsche Modell kann die Spektren von Mehrelektronenatomen nicht erklären. II. Nach dem modernen Atommodell lassen sich Ort und Geschwindigkeit eines Elektrons gleichzeitig exakt bestimmen. III. Im modernen Atommodell ist ein Orbital ein Bereich, in dem die Aufenthaltswahrscheinlichkeit des Elektrons hoch ist. Welche Aussagen sind richtig?",
        "fr": "À propos des modèles atomiques : I. Le modèle de Bohr ne peut pas expliquer les spectres des atomes polyélectroniques. II. Selon le modèle atomique moderne, la position et la vitesse d'un électron peuvent être déterminées exactement en même temps. III. Dans le modèle atomique moderne, une orbitale est une région où la probabilité de trouver l'électron est élevée. Lesquelles de ces affirmations sont correctes ?",
        "ru": "Об атомных моделях: I. Модель Бора не может объяснить спектры многоэлектронных атомов. II. Согласно современной модели атома, положение и скорость электрона можно одновременно точно определить. III. В современной модели атома орбиталь — это область, где вероятность нахождения электрона высока. Какие утверждения верны?",
        "ar": "بخصوص النماذج الذرية: I. لا يستطيع نموذج بور تفسير أطياف الذرات متعددة الإلكترونات. II. وفق النموذج الذري الحديث يمكن تحديد موقع الإلكترون وسرعته بدقة في آن واحد. III. في النموذج الذري الحديث، المدار منطقة يكون فيها احتمال وجود الإلكترون كبيرًا. أيّ هذه العبارات صحيحة؟",
        "zh": "关于原子模型：I. 玻尔模型无法解释多电子原子的光谱。II. 根据现代原子模型，可以同时准确确定电子的位置和速度。III. 在现代原子模型中，轨道是电子出现概率较大的区域。以上说法中哪些正确？",
        "ku": "Derbarê modelên atomê: I. Modela Bohr nikare spektrumên atomên pir-elektronî rave bike. II. Li gorî modela atomê ya nûjen, cih û leza elektronekê di heman demê de bi teqezî dikarin bên diyarkirin. III. Di modela atomê ya nûjen de orbîtal herêmek e ku îhtîmala hebûna elektronê lê bilind e. Kîjan ji van gotinan rast in?"
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
        "ru": "I верно: модель Бора объясняет только спектры одноэлектронных частиц, таких как H и He+, и не учитывает взаимодействие электронов. II неверно: по принципу неопределённости Гейзенберга положение и скорость (импульс) электрона нельзя одновременно знать точно, поэтому в современной модели нет определённых орбит. III верно: орбиталь — трёхмерная область, где вероятность нахождения электрона высока.",
        "ar": "I صحيحة: يفسر نموذج بور أطياف الدقائق ذات الإلكترون الواحد فقط مثل H وHe+ ويهمل التفاعلات بين الإلكترونات. II خاطئة: وفق مبدأ عدم اليقين لهايزنبرغ لا يمكن معرفة موقع الإلكترون وسرعته (زخمه) بدقة في آن واحد، لذا لا توجد مدارات محددة في النموذج الحديث. III صحيحة: المدار منطقة ثلاثية الأبعاد يكون فيها احتمال وجود الإلكترون كبيرًا.",
        "zh": "I 正确：玻尔模型只能解释 H、He+ 等单电子粒子的光谱，没有考虑电子之间的相互作用。II 错误：根据海森堡不确定性原理，电子的位置和速度（动量）不能同时被准确知道，所以现代模型中没有确定的轨道。III 正确：轨道是电子出现概率较大的三维区域。",
        "ku": "I rast e: modela Bohr tenê spektrumên perçeyên yek-elektronî yên wekî H û He+ rave dike û bandora elektronan li ser hev nahesibîne. II şaş e: li gorî prensîba nediyariyê ya Heisenberg, cih û leza (momentuma) elektronekê di heman demê de bi teqezî nayên zanîn; loma di modela nûjen de rêgehên diyar tune ne. III rast e: orbîtal herêmeke sê-alî ye ku îhtîmala hebûna elektronê lê bilind e."
      }
    },
    {
      "id": "u11-twin12",
      "stem": {
        "tr": "Temel hâldeki 17Cl atomunda baş kuantum sayısı n = 3 olan kaç elektron vardır?",
        "en": "How many electrons with principal quantum number n = 3 are there in a ground-state 17Cl atom?",
        "de": "Wie viele Elektronen mit der Hauptquantenzahl n = 3 enthält ein 17Cl-Atom im Grundzustand?",
        "fr": "Combien d'électrons de nombre quantique principal n = 3 un atome de 17Cl à l'état fondamental possède-t-il ?",
        "ru": "Сколько электронов с главным квантовым числом n = 3 в атоме 17Cl в основном состоянии?",
        "ar": "كم إلكترونًا عدد الكم الرئيس له n = 3 توجد في ذرة 17Cl في الحالة الأساسية؟",
        "zh": "基态 17Cl 原子中主量子数 n = 3 的电子有多少个？",
        "ku": "Di atoma 17Cl ya di rewşa bingehîn de çend elektronên bi hejmara kuantûmê ya sereke n = 3 hene?"
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
        "ru": "17Cl: 1s2 2s2 2p6 3s2 3p5. Электроны с n = 3 находятся на подуровнях 3s2 и 3p5: 2 + 5 = 7. 18 — ёмкость уровня n = 3 (2n²); 10 — число электронов на уровнях n = 1 и n = 2; 8 получается, если думать о внешнем слое иона Cl-.",
        "ar": "17Cl: 1s2 2s2 2p6 3s2 3p5. الإلكترونات ذات n = 3 موجودة في المستويين الفرعيين 3s2 و3p5: 2 + 5 = 7. العدد 18 هو سعة المستوى n = 3 (2n²)، و10 عدد الإلكترونات في المستويين n = 1 وn = 2، و8 ناتج عن التفكير في الغلاف الخارجي للأيون Cl-.",
        "zh": "17Cl：1s2 2s2 2p6 3s2 3p5。n = 3 的电子位于 3s2 和 3p5 亚层：2 + 5 = 7。18 是 n = 3 能层的容量 (2n²)；10 是 n = 1 和 n = 2 能层的电子数；8 来自考虑 Cl- 离子的最外层。",
        "ku": "17Cl: 1s2 2s2 2p6 3s2 3p5. Elektronên bi n = 3 di binastên 3s2 û 3p5 de ne: 2 + 5 = 7. 18 kapasîteya asta n = 3 e (2n²); 10 hejmara elektronên astên n = 1 û n = 2 ye; 8 jî ji fikirîna li ser qata derve ya îyona Cl- tê."
      }
    },
    {
      "id": "u11-twin13",
      "stem": {
        "tr": "Çok elektronlu atomlarda orbital enerjileri n + l kuralına göre karşılaştırılır. Buna göre 4f, 5d, 6s ve 6p orbitallerinin enerjilerinin küçükten büyüğe sıralanışı aşağıdakilerden hangisidir?",
        "en": "In many-electron atoms, orbital energies are compared using the n + l rule. Accordingly, which of the following ranks the energies of the 4f, 5d, 6s and 6p orbitals from lowest to highest?",
        "de": "In Mehrelektronenatomen werden Orbitalenergien mit der n + l-Regel verglichen. Welche Reihenfolge gibt danach die Energien der Orbitale 4f, 5d, 6s und 6p von der niedrigsten zur höchsten an?",
        "fr": "Dans les atomes polyélectroniques, on compare les énergies des orbitales avec la règle n + l. Lequel des classements suivants range alors les énergies des orbitales 4f, 5d, 6s et 6p de la plus basse à la plus haute ?",
        "ru": "В многоэлектронных атомах энергии орбиталей сравнивают по правилу n + l. Какой ряд располагает энергии орбиталей 4f, 5d, 6s и 6p в порядке возрастания?",
        "ar": "في الذرات متعددة الإلكترونات تُقارن طاقات المدارات وفق قاعدة n + l. وعليه، أيّ مما يأتي يرتب طاقات المدارات 4f و5d و6s و6p من الأقل إلى الأعلى؟",
        "zh": "在多电子原子中，按 n + l 规则比较轨道能量。据此，下列哪项将 4f、5d、6s 和 6p 轨道的能量从低到高排列？",
        "ku": "Di atomên pir-elektronî de enerjiyên orbîtalan li gorî qaîdeya n + l tên berhevdan. Li gorî vê, kîjan rêz enerjiyên orbîtalên 4f, 5d, 6s û 6p ji ya herî kêm ber bi ya herî bilind ve rêz dike?"
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
        "ru": "Значения n + l: 6s = 6 + 0 = 6; 4f = 4 + 3 = 7; 5d = 5 + 2 = 7; 6p = 6 + 1 = 7. 6s с наименьшим n + l имеет наименьшую энергию. При равных n + l ниже по энергии орбиталь с меньшим n: 4f < 5d < 6p. Порядок: 6s < 4f < 5d < 6p. Ученик, смотрящий только на n, ставит 4f первой.",
        "ar": "قيم n + l: 6s = 6 + 0 = 6؛ 4f = 4 + 3 = 7؛ 5d = 5 + 2 = 7؛ 6p = 6 + 1 = 7. المدار 6s ذو أصغر قيمة n + l هو الأقل طاقة. وعند تساوي n + l يكون المدار ذو n الأصغر أقل طاقة: 4f < 5d < 6p. فيكون الترتيب 6s < 4f < 5d < 6p. والطالب الذي ينظر إلى n فقط يضع 4f أولًا.",
        "zh": "n + l 值：6s = 6 + 0 = 6；4f = 4 + 3 = 7；5d = 5 + 2 = 7；6p = 6 + 1 = 7。n + l 最小的 6s 能量最低。n + l 相同时，n 较小的轨道能量较低：4f < 5d < 6p。顺序为 6s < 4f < 5d < 6p。只看 n 的学生会把 4f 排在最前面。",
        "ku": "Nirxên n + l: 6s = 6 + 0 = 6; 4f = 4 + 3 = 7; 5d = 5 + 2 = 7; 6p = 6 + 1 = 7. 6s bi n + l ya herî biçûk enerjiya wê ya herî kêm e. Dema n + l wekhev be, orbîtala bi n ya biçûktir enerjiya wê kêmtir e: 4f < 5d < 6p. Rêz 6s < 4f < 5d < 6p e. Xwendekarê ku tenê li n dinêre 4f dixe serî."
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
        "ar": "كم عدد الإلكترونات المفردة (الموجودة في مدارات نصف ممتلئة) في الأيون 26Fe3+ في الحالة الأساسية؟ (18Ar)",
        "zh": "基态 26Fe3+ 离子中有多少个未成对电子（位于半充满轨道中的电子）？(18Ar)",
        "ku": "Di îyona 26Fe3+ ya di rewşa bingehîn de çend elektronên necot (yên di orbîtalên nîv-tijî de) hene? (18Ar)"
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
        "ru": "26Fe: [Ar] 4s2 3d6. При образовании Fe3+ сначала удаляются 2 электрона с 4s, затем 1 электрон с 3d: Fe3+ = [Ar] 3d5. По правилу Хунда 5 d-электронов по одному занимают 5 орбиталей, то есть неспаренных электронов 5. Если удалять электроны сначала с 3d, получится [Ar] 4s2 3d3 и ответ 3; конфигурация 3d6 нейтрального атома Fe содержит 4 неспаренных электрона.",
        "ar": "26Fe: [Ar] 4s2 3d6. عند تكوّن Fe3+ يُنزع أولًا إلكترونا 4s ثم إلكترون واحد من 3d: Fe3+ = [Ar] 3d5. ووفق قاعدة هوند تشغل إلكترونات d الخمسة خمسة مدارات منفصلة فرادى، أي يوجد 5 إلكترونات مفردة. من ينزع الإلكترونات من 3d أولًا يكتب [Ar] 4s2 3d3 ويحصل على 3، أما 3d6 في ذرة Fe المتعادلة فيحوي 4 إلكترونات مفردة.",
        "zh": "26Fe：[Ar] 4s2 3d6。形成 Fe3+ 时先失去 4s 的 2 个电子，再失去 3d 的 1 个电子：Fe3+ = [Ar] 3d5。按洪特规则，5 个 d 电子分占 5 个轨道，因此有 5 个未成对电子。先从 3d 失电子会写出 [Ar] 4s2 3d3 并得到 3；中性 Fe 原子的 3d6 含 4 个未成对电子。",
        "ku": "26Fe: [Ar] 4s2 3d6. Dema Fe3+ çêdibe pêşî 2 elektronên 4s, paşê 1 elektron ji 3d tên qetandin: Fe3+ = [Ar] 3d5. Li gorî qaîdeya Hund 5 elektronên d yek bi yek di 5 orbîtalên cuda de ne, ango 5 elektronên necot hene. Yê ku pêşî ji 3d diqetîne [Ar] 4s2 3d3 dinivîse û 3 dibîne; 3d6 ya atoma Fe ya bêalî 4 elektronên necot dihewîne."
      }
    },
    {
      "id": "u11-twin15",
      "stem": {
        "tr": "Aşağıda bazı atomların temel hâli için önerilen 2p orbital yerleşimleri verilmiştir (her parantez bir orbitali, ↑ ve ↓ zıt spinli elektronları gösterir). Bu yerleşimlerden hangisi Hund kuralına aykırıdır?",
        "en": "Below are proposed arrangements of the 2p electrons for the ground state of some atoms (each bracket is one orbital; ↑ and ↓ are electrons of opposite spin). Which one violates Hund's rule?",
        "de": "Unten sind für den Grundzustand einiger Atome vorgeschlagene Elektronenverteilungen in den 2p-Orbitalen angegeben (jede Klammer ist ein Orbital; ↑ und ↓ sind Elektronen mit entgegengesetztem Spin). Welche verstößt gegen die Hundsche Regel?",
        "fr": "Ci-dessous figurent des répartitions proposées des électrons dans les orbitales 2p pour l'état fondamental de quelques atomes (chaque parenthèse est une orbitale ; ↑ et ↓ sont des électrons de spins opposés). Laquelle viole la règle de Hund ?",
        "ru": "Ниже приведены предложенные варианты размещения электронов на 2p-орбиталях для основного состояния некоторых атомов (каждая скобка — орбиталь; ↑ и ↓ — электроны с противоположными спинами). Какое размещение нарушает правило Хунда?",
        "ar": "فيما يلي توزيعات مقترحة للإلكترونات في مدارات 2p للحالة الأرضية لبعض الذرات (كل قوس يمثل مدارًا، و↑ و↓ إلكترونان متعاكسا المغزل). أيّها يخالف قاعدة هوند؟",
        "zh": "下面给出为一些原子的基态所提出的 2p 轨道电子填充方式（每个括号代表一个轨道，↑ 和 ↓ 表示自旋相反的电子）。哪一项违背洪特规则？",
        "ku": "Li jêr ji bo rewşa bingehîn a hin atoman bicihbûnên pêşniyarkirî yên elektronan di orbîtalên 2p de hatine dayîn (her kevanek orbîtalek e; ↑ û ↓ elektronên bi spina berevajî ne). Kîjan li dijî qaîdeya Hund e?"
      },
      "options": [
        {
          "tr": "7N: 2p (↑)(↑)(↑)",
          "en": "7N: 2p (↑)(↑)(↑)",
          "de": "7N: 2p (↑)(↑)(↑)",
          "fr": "7N: 2p (↑)(↑)(↑)",
          "ru": "7N: 2p (↑)(↑)(↑)",
          "ar": "7N: 2p (↑)(↑)(↑)",
          "zh": "7N: 2p (↑)(↑)(↑)",
          "ku": "7N: 2p (↑)(↑)(↑)"
        },
        {
          "tr": "8O: 2p (↑↓)(↑)(↑)",
          "en": "8O: 2p (↑↓)(↑)(↑)",
          "de": "8O: 2p (↑↓)(↑)(↑)",
          "fr": "8O: 2p (↑↓)(↑)(↑)",
          "ru": "8O: 2p (↑↓)(↑)(↑)",
          "ar": "8O: 2p (↑↓)(↑)(↑)",
          "zh": "8O: 2p (↑↓)(↑)(↑)",
          "ku": "8O: 2p (↑↓)(↑)(↑)"
        },
        {
          "tr": "6C: 2p (↑)(↑)( )",
          "en": "6C: 2p (↑)(↑)( )",
          "de": "6C: 2p (↑)(↑)( )",
          "fr": "6C: 2p (↑)(↑)( )",
          "ru": "6C: 2p (↑)(↑)( )",
          "ar": "6C: 2p (↑)(↑)( )",
          "zh": "6C: 2p (↑)(↑)( )",
          "ku": "6C: 2p (↑)(↑)( )"
        },
        {
          "tr": "7N: 2p (↑↓)(↑)( )",
          "en": "7N: 2p (↑↓)(↑)( )",
          "de": "7N: 2p (↑↓)(↑)( )",
          "fr": "7N: 2p (↑↓)(↑)( )",
          "ru": "7N: 2p (↑↓)(↑)( )",
          "ar": "7N: 2p (↑↓)(↑)( )",
          "zh": "7N: 2p (↑↓)(↑)( )",
          "ku": "7N: 2p (↑↓)(↑)( )"
        },
        {
          "tr": "9F: 2p (↑↓)(↑↓)(↑)",
          "en": "9F: 2p (↑↓)(↑↓)(↑)",
          "de": "9F: 2p (↑↓)(↑↓)(↑)",
          "fr": "9F: 2p (↑↓)(↑↓)(↑)",
          "ru": "9F: 2p (↑↓)(↑↓)(↑)",
          "ar": "9F: 2p (↑↓)(↑↓)(↑)",
          "zh": "9F: 2p (↑↓)(↑↓)(↑)",
          "ku": "9F: 2p (↑↓)(↑↓)(↑)"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Hund kuralına göre eş enerjili 2p orbitallerine elektronlar önce aynı spinle birer birer yerleşir; eşleşme ancak her orbitalde bir elektron olduktan sonra başlar. N'nin üç 2p elektronu (↑)(↑)(↑) şeklinde olmalıdır; (↑↓)(↑)( ) yerleşiminde bir orbital boşken eşleşme yapılmıştır. C (2p2) yerleşimi tek tek ve paralel spinlidir; O (2p4) ve F (2p5) yerleşimlerinde eşleşme her orbitale birer elektron girdikten sonra yapıldığından kurala uygundur.",
        "en": "By Hund's rule, electrons enter the degenerate 2p orbitals one by one with the same spin first; pairing starts only after each orbital has one electron. N's three 2p electrons must be (↑)(↑)(↑); in (↑↓)(↑)( ) pairing occurred while an orbital was still empty. The C (2p2) arrangement is single and parallel; in O (2p4) and F (2p5) pairing happens only after every orbital has one electron, so they obey the rule.",
        "de": "Nach der Hundschen Regel besetzen Elektronen die entarteten 2p-Orbitale zuerst einzeln mit gleichem Spin; die Paarung beginnt erst, wenn jedes Orbital ein Elektron hat. Die drei 2p-Elektronen von N müssen (↑)(↑)(↑) sein; bei (↑↓)(↑)( ) wurde gepaart, obwohl ein Orbital noch leer war. Bei C (2p2) sind die Elektronen einzeln und parallel; bei O (2p4) und F (2p5) erfolgt die Paarung erst, nachdem jedes Orbital ein Elektron hat, also regelkonform.",
        "fr": "Selon la règle de Hund, les électrons entrent d'abord un par un, avec le même spin, dans les orbitales 2p dégénérées ; l'appariement ne commence qu'après que chaque orbitale a un électron. Les trois électrons 2p de N doivent être (↑)(↑)(↑) ; dans (↑↓)(↑)( ), l'appariement a eu lieu alors qu'une orbitale était encore vide. Pour C (2p2), les électrons sont seuls et parallèles ; pour O (2p4) et F (2p5), l'appariement n'intervient qu'après que chaque orbitale a un électron : ils respectent la règle.",
        "ru": "По правилу Хунда электроны сначала по одному с одинаковым спином занимают вырожденные 2p-орбитали; спаривание начинается только после того, как в каждой орбитали есть один электрон. Три 2p-электрона N должны быть (↑)(↑)(↑); в (↑↓)(↑)( ) спаривание произошло, когда одна орбиталь ещё была пустой. У C (2p2) электроны одиночные и параллельные; у O (2p4) и F (2p5) спаривание происходит после того, как в каждой орбитали появился электрон, поэтому правило соблюдено.",
        "ar": "وفق قاعدة هوند تدخل الإلكترونات مدارات 2p المتساوية الطاقة أولًا واحدًا واحدًا وبالمغزل نفسه، ولا يبدأ الازدواج إلا بعد أن يحوي كل مدار إلكترونًا. يجب أن تكون إلكترونات 2p الثلاثة للنيتروجين (↑)(↑)(↑)؛ أما في (↑↓)(↑)( ) فقد حدث الازدواج مع بقاء مدار فارغ. توزيع C (2p2) مفرد ومتوازٍ، وفي O (2p4) وF (2p5) يحدث الازدواج بعد أن يحوي كل مدار إلكترونًا، فهي موافقة للقاعدة.",
        "zh": "按洪特规则，电子先以相同自旋逐个进入能量相同的 2p 轨道，每个轨道都有一个电子后才开始成对。N 的三个 2p 电子应为 (↑)(↑)(↑)；(↑↓)(↑)( ) 在仍有空轨道时就成对了。C (2p2) 的电子单独且平行；O (2p4) 和 F (2p5) 都是在每个轨道各有一个电子后才成对，符合规则。",
        "ku": "Li gorî qaîdeya Hund elektron pêşî yek bi yek û bi heman spinê dikevin orbîtalên 2p yên wekhev-enerjî; cotbûn tenê piştî ku her orbîtal yek elektron hebe dest pê dike. Sê elektronên 2p yên N divê (↑)(↑)(↑) bin; di (↑↓)(↑)( ) de dema orbîtalek hê vala bû cotbûn çêbûye. Bicihbûna C (2p2) yek-yek û paralel e; di O (2p4) û F (2p5) de cotbûn piştî ku her orbîtal yek elektron girt çêdibe, loma li gorî qaîdeyê ne."
      }
    },
    {
      "id": "u11-twin16",
      "stem": {
        "tr": "3. periyotta bulunan X, Y ve Z atomlarının değerlik elektron dizilimleri şöyledir: X: 3s1, Y: 3s2 3p1, Z: 3s2 3p3. Buna göre; I. Birinci iyonlaşma enerjisi en büyük olan Z'dir. II. Y'nin birinci iyonlaşma enerjisi X'inkinden büyüktür. III. Atom yarıçapı en büyük olan Z'dir. yargılarından hangileri doğrudur?",
        "en": "The valence electron configurations of atoms X, Y and Z in period 3 are: X: 3s1, Y: 3s2 3p1, Z: 3s2 3p3. Accordingly: I. Z has the highest first ionization energy. II. The first ionization energy of Y is greater than that of X. III. Z has the largest atomic radius. Which of these statements are correct?",
        "de": "Die Valenzelektronenkonfigurationen der Atome X, Y und Z der 3. Periode lauten: X: 3s1, Y: 3s2 3p1, Z: 3s2 3p3. Demnach: I. Z hat die höchste erste Ionisierungsenergie. II. Die erste Ionisierungsenergie von Y ist größer als die von X. III. Z hat den größten Atomradius. Welche Aussagen sind richtig?",
        "fr": "Les configurations électroniques de valence des atomes X, Y et Z de la 3e période sont : X : 3s1, Y : 3s2 3p1, Z : 3s2 3p3. Par conséquent : I. Z a la plus grande première énergie d'ionisation. II. La première énergie d'ionisation de Y est supérieure à celle de X. III. Z a le plus grand rayon atomique. Lesquelles de ces affirmations sont correctes ?",
        "ru": "Валентные электронные конфигурации атомов X, Y и Z 3-го периода: X: 3s1, Y: 3s2 3p1, Z: 3s2 3p3. Следовательно: I. Наибольшая первая энергия ионизации у Z. II. Первая энергия ионизации Y больше, чем у X. III. Наибольший атомный радиус у Z. Какие утверждения верны?",
        "ar": "توزيعات إلكترونات التكافؤ للذرات X وY وZ في الدورة الثالثة هي: X: 3s1، Y: 3s2 3p1، Z: 3s2 3p3. وعليه: I. أعلى طاقة تأين أولى هي لـ Z. II. طاقة التأين الأولى لـ Y أكبر من طاقة X. III. أكبر نصف قطر ذري هو لـ Z. أيّ هذه العبارات صحيحة؟",
        "zh": "第 3 周期原子 X、Y、Z 的价电子排布为：X：3s1，Y：3s2 3p1，Z：3s2 3p3。据此：I. 第一电离能最大的是 Z。II. Y 的第一电离能大于 X。III. 原子半径最大的是 Z。以上说法中哪些正确？",
        "ku": "Dîzilîmên elektronên valansê yên atomên X, Y û Z yên di periyoda 3. de ev in: X: 3s1, Y: 3s2 3p1, Z: 3s2 3p3. Li gorî vê: I. Enerjiya iyonîzasyonê ya yekem a herî mezin a Z ye. II. Enerjiya iyonîzasyonê ya yekem a Y ji ya X mezintir e. III. Tîrêja atomî ya herî mezin a Z ye. Kîjan ji van gotinan rast in?"
      },
      "options": [
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
      "correctIndex": 1,
      "explanation": {
        "tr": "X = Na (1A), Y = Al (3A), Z = P (5A). Aynı periyotta soldan sağa çekirdek yükü arttığından iyonlaşma enerjisi genel olarak artar, atom yarıçapı azalır. I doğru: Z en sağdadır ve yarı dolu 3p3 alt kabuğu ek kararlılık sağlar. II doğru: 3A'nın iyonlaşma enerjisi 2A'dan küçük olsa da 1A'dan büyüktür (Al > Na). III yanlış: yarıçapı en büyük olan periyodun başındaki X'tir.",
        "en": "X = Na (1A), Y = Al (3A), Z = P (5A). Across a period the nuclear charge increases, so ionization energy generally rises and atomic radius decreases. I is true: Z is farthest right and its half-filled 3p3 sublevel adds stability. II is true: although 3A's ionization energy is lower than 2A's, it is higher than 1A's (Al > Na). III is false: the largest radius belongs to X at the start of the period.",
        "de": "X = Na (1A), Y = Al (3A), Z = P (5A). Innerhalb einer Periode nimmt die Kernladung zu, daher steigt die Ionisierungsenergie im Allgemeinen und der Atomradius sinkt. I ist richtig: Z steht am weitesten rechts, und sein halbbesetztes 3p3-Unterniveau bringt zusätzliche Stabilität. II ist richtig: Die Ionisierungsenergie von 3A ist zwar kleiner als die von 2A, aber größer als die von 1A (Al > Na). III ist falsch: Den größten Radius hat X am Anfang der Periode.",
        "fr": "X = Na (1A), Y = Al (3A), Z = P (5A). Le long d'une période, la charge nucléaire augmente : l'énergie d'ionisation croît en général et le rayon atomique diminue. I est vraie : Z est le plus à droite et sa sous-couche 3p3 à moitié remplie lui apporte de la stabilité. II est vraie : l'énergie d'ionisation de 3A est inférieure à celle de 2A mais supérieure à celle de 1A (Al > Na). III est fausse : le plus grand rayon est celui de X, en début de période.",
        "ru": "X = Na (1А), Y = Al (3А), Z = P (5А). В периоде слева направо заряд ядра растёт, поэтому энергия ионизации в целом увеличивается, а атомный радиус уменьшается. I верно: Z стоит правее всех, а наполовину заполненный подуровень 3p3 придаёт дополнительную устойчивость. II верно: энергия ионизации 3А хотя и меньше, чем у 2А, но больше, чем у 1А (Al > Na). III неверно: наибольший радиус у X в начале периода.",
        "ar": "X = Na (1A)، Y = Al (3A)، Z = P (5A). في الدورة من اليسار إلى اليمين تزداد شحنة النواة، فتزداد طاقة التأين عمومًا ويقل نصف القطر الذري. I صحيحة: تقع Z في أقصى اليمين ومستواها الفرعي 3p3 نصف الممتلئ يمنحها استقرارًا إضافيًا. II صحيحة: طاقة تأين 3A وإن كانت أقل من 2A فهي أكبر من 1A (Al > Na). III خاطئة: أكبر نصف قطر هو لـ X في بداية الدورة.",
        "zh": "X = Na (1A)，Y = Al (3A)，Z = P (5A)。同周期从左到右核电荷增大，电离能总体增大，原子半径减小。I 正确：Z 位于最右侧，半充满的 3p3 亚层还带来额外稳定性。II 正确：3A 的电离能虽小于 2A，但大于 1A (Al > Na)。III 错误：半径最大的是位于周期开头的 X。",
        "ku": "X = Na (1A), Y = Al (3A), Z = P (5A). Di periyodekê de ji çep ber bi rast barê navikê zêde dibe, loma enerjiya iyonîzasyonê bi giştî zêde dibe û tîrêja atomî kêm dibe. I rast e: Z li aliyê herî rast e û binasta wê ya nîv-tijî 3p3 aramiyeke zêde dide. II rast e: her çend enerjiya iyonîzasyonê ya 3A ji ya 2A kêmtir be jî, ji ya 1A mezintir e (Al > Na). III şaş e: tîrêja herî mezin a X ye ku li destpêka periyodê ye."
      }
    }
  ]
};

export default unit11;
