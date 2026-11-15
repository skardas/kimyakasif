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
      }
    },
    {
      "id": "u11-f02",
      "fact": {
        "tr": "Açısal momentum kuantum sayısı (l), orbitalin türünü ve şeklini belirtir (l = 0 s, l = 1 p, l = 2 d, l = 3 f).",
        "en": "The angular momentum quantum number (l) specifies the type and shape of the orbital (l = 0 s, l = 1 p, l = 2 d, l = 3 f).",
        "de": "Die Drehimpulsquantenzahl (l) gibt Art und Form des Orbitals an (l = 0 s, l = 1 p, l = 2 d, l = 3 f).",
        "fr": "Le nombre quantique du moment cinétique (l) spécifie le type et la forme de l'orbitale (l = 0 s, l = 1 p, l = 2 d, l = 3 f).",
        "ru": "Квантовое число углового момента (l) определяет тип и форму орбитали (l = 0 с, l = 1 p, l = 2 d, l = 3 f).",
        "ar": "يحدد الرقم الكمي للزخم الزاوي (l) نوع وشكل المدار (l = 0 s، l = 1 p، l = 2 d، l = 3 f).",
        "zh": "角动量量子数 (l) 指定轨道的类型和形状（l = 0 s、l = 1 p、l = 2 d、l = 3 f）。",
        "ku": "Hejmara quantuma leza goşeyî (l) cure û şiklê orbîtalê diyar dike (l = 0 s, l = 1 p, l = 2 d, l = 3 f)."
      },
      "trap": {
        "tr": "l = 2 açısal momentum sayısı p orbitalini temsil eder.",
        "en": "The angular momentum number l = 2 represents the p orbital.",
        "de": "Die Drehimpulszahl l = 2 repräsentiert das p-Orbital.",
        "fr": "Le nombre de moment cinétique l = 2 représente l'orbitale p.",
        "ru": "Число углового момента l = 2 представляет p-орбиталь.",
        "ar": "يمثل عدد الزخم الزاوي l = 2 المدار p.",
        "zh": "角动量数 l = 2 代表 p 轨道。",
        "ku": "Hejmara leza goşeyê l = 2 orbîtala p nîşan dide."
      }
    },
    {
      "id": "u11-f03",
      "fact": {
        "tr": "Manyetik kuantum sayısı (ml), orbitalin uzaydaki yönelimini belirtir ve -l ile +l arasındaki tamsayı değerlerini alır.",
        "en": "The magnetic quantum number (ml) indicates the orientation of the orbital in space and takes integer values ​​between -l and +1.",
        "de": "Die magnetische Quantenzahl (ml) gibt die Orientierung des Orbitals im Raum an und nimmt ganzzahlige Werte zwischen -l und +1 an.",
        "fr": "Le nombre quantique magnétique (ml) indique l'orientation de l'orbitale dans l'espace et prend des valeurs entières comprises entre -l et +1.",
        "ru": "Магнитное квантовое число (ml) указывает на ориентацию орбитали в пространстве и принимает целые значения от -l до +1.",
        "ar": "يشير رقم الكم المغناطيسي (ml) إلى اتجاه المدار في الفضاء ويأخذ قيمًا صحيحة بين -l و+1.",
        "zh": "磁量子数（ml）表示轨道在空间中的取向，取-l到+1之间的整数值。",
        "ku": "Hejmara quantumê ya magnetîkî (ml) arastekirina orbîtalê li fezayê destnîşan dike û jimareyên yekjimar di navbera -l û +1 de digire."
      },
      "trap": {
        "tr": "d orbitalleri için ml sadece -1, 0, +1 değerlerini alır.",
        "en": "For d orbitals ml only takes the values ​​-1, 0, +1.",
        "de": "Für d-Orbitale nimmt ml nur die Werte -1, 0, +1 an.",
        "fr": "Pour les orbitales d, ml ne prend que les valeurs -1, 0, +1.",
        "ru": "Для d-орбиталей ml принимает только значения -1, 0, +1.",
        "ar": "بالنسبة للمدارات d، يأخذ ml فقط القيم -1، 0، +1.",
        "zh": "对于d轨道，ml仅取值-1、0、+1。",
        "ku": "Ji bo d orbitals ml tenê nirxan -1, 0, +1 digire."
      }
    },
    {
      "id": "u11-f04",
      "fact": {
        "tr": "Spin kuantum sayısı (ms), elektronun kendi ekseni etrafındaki dönme yönünü belirtir (+1/2 veya -1/2).",
        "en": "The spin quantum number (ms) indicates the direction of rotation of the electron around its axis (+1/2 or -1/2).",
        "de": "Die Spinquantenzahl (ms) gibt die Rotationsrichtung des Elektrons um seine Achse (+1/2 oder -1/2) an.",
        "fr": "Le nombre quantique de spin (ms) indique le sens de rotation de l'électron autour de son axe (+1/2 ou -1/2).",
        "ru": "Спиновое квантовое число (мс) указывает направление вращения электрона вокруг своей оси (+1/2 или -1/2).",
        "ar": "يشير الرقم الكمي المغزلي (ms) إلى اتجاه دوران الإلكترون حول محوره (+1/2 أو -1/2).",
        "zh": "自旋量子数 (ms) 表示电子绕其轴旋转的方向（+1/2 或 -1/2）。",
        "ku": "Hejmara kuantûmê ya spinê (ms) arasteya zivirandina elektronê li dora eksê xwe (+1/2 an -1/2) nîşan dide."
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
        "ku": "Prensîba Derxistina Pauli: Di ​​atomê de du elektron nikarin heman çar hejmarên kuantûmê hebin."
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
        "zh": "Aufbau 规则：电子从能量最低的轨道开始填充到轨道中（n + l 规则）。",
        "ku": "Rêbaza Aufbau: Elektron di orbitalên ku ji orbîtala bi enerjiya herî hindik dest pê dikin têne dagirtin (qanûna n + l)."
      },
      "trap": {
        "tr": "Aufbau kuralına göre 3d orbitali daima 4s orbitalinden önce doldurulur.",
        "en": "According to the Aufbau rule, the 3d orbital is always filled before the 4s orbital.",
        "de": "Nach der Aufbau-Regel wird das 3d-Orbital immer vor dem 4s-Orbital gefüllt.",
        "fr": "Selon la règle d'Aufbau, l'orbitale 3d est toujours remplie avant l'orbitale 4s.",
        "ru": "Согласно правилу Ауфбау, 3d-орбиталь всегда заполняется раньше 4s-орбитали.",
        "ar": "وفقًا لقاعدة أوفباو، فإن المدار ثلاثي الأبعاد يمتلئ دائمًا قبل المدار 4s.",
        "zh": "根据 Aufbau 规则，3d 轨道总是在 4s 轨道之前被填充。",
        "ku": "Li gorî qaîdeya Aufbau, orbîtala 3d her dem berî orbitala 4s tê dagirtin."
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
        "zh": "洪德法则：电子首先被一个接一个地放入具有相同自旋的等能量轨道中。",
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
        "tr": "24Cr elementi elektron diziliminde [Ar] 4s2 3d4 şeklinde biter.",
        "en": "The 24Cr element ends in the electron configuration as [Ar] 4s2 3d4.",
        "de": "Das 24Cr-Element endet in der Elektronenkonfiguration als [Ar] 4s2 3d4.",
        "fr": "L'élément 24Cr se termine dans la configuration électronique comme [Ar] 4s2 3d4.",
        "ru": "Элемент 24Cr заканчивается в электронной конфигурации как [Ar] 4s2 3d4.",
        "ar": "وينتهي عنصر 24Cr في الترتيب الإلكتروني كـ [Ar] 4s2 3d4.",
        "zh": "24Cr 元素的电子构型为 [Ar] 4s2 3d4。",
        "ku": "Elementa 24Cr di veavakirina elektronê de wekî [Ar] 4s2 3d4 bi dawî dibe."
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
        "fr": "Pendant que l’atome de Fe est ionisé, l’électron se détache d’abord de l’orbitale 3D.",
        "ru": "Пока атом Fe ионизируется, электрон сначала отрывается от 3d-орбитали.",
        "ar": "أثناء تأين ذرة الحديد، ينفصل الإلكترون أولاً عن المدار ثلاثي الأبعاد.",
        "zh": "当 Fe 原子被电离时，电子首先脱离 3d 轨道。",
        "ku": "Dema ku atoma Fe îyonîze dibe, elektron pêşî ji orbitala 3d vediqete."
      }
    },
    {
      "id": "u11-f10",
      "fact": {
        "tr": "Aynı periyotta iyonlaşma enerjisi \"3 aşağı 5 yukarı\" kuralına göre sıralanır: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.",
        "en": "In the same period, ionization energy is ranked according to the \"3 down, 5 up\" rule: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.",
        "de": "Im gleichen Zeitraum wird die Ionisierungsenergie nach der Regel „3 runter, 5 rauf“ eingestuft: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.",
        "fr": "Au cours de la même période, l'énergie d'ionisation est classée selon la règle « 3 vers le bas, 5 vers le haut » : 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.",
        "ru": "В этот же период энергия ионизации ранжируется по правилу «3 вниз, 5 вверх»: 1А < 3А < 2А < 4А < 6А < 5А < 7А < 8А.",
        "ar": "وفي نفس الفترة، يتم ترتيب طاقة التأين وفقًا لقاعدة \"3 لأسفل، 5 لأعلى\": 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.",
        "zh": "同一时期内，电离能按照“3下5上”的规则排列：1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A。",
        "ku": "Di heman serdemê de, enerjiya iyonîzasyonê li gorî qaîdeya \"3 berjêr, 5 jor\" tê rêz kirin: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A."
      },
      "trap": {
        "tr": "Aynı periyotta 3A grubunun iyonlaşma enerjisi 2A grubundan büyüktür.",
        "en": "In the same period, the ionization energy of the 3A group is greater than that of the 2A group.",
        "de": "Im gleichen Zeitraum ist die Ionisierungsenergie der 3A-Gruppe größer als die der 2A-Gruppe.",
        "fr": "Dans la même période, l'énergie d'ionisation du groupe 3A est supérieure à celle du groupe 2A.",
        "ru": "В этот же период энергия ионизации группы 3А больше, чем у группы 2А.",
        "ar": "وفي نفس الفترة، تكون طاقة التأين للمجموعة 3A أكبر من طاقة التأين للمجموعة 2A.",
        "zh": "同一时期，3A基团的电离能大于2A基团的电离能。",
        "ku": "Di heman serdemê de, enerjiya iyonîzasyona koma 3A ji ya koma 2A mezintir e."
      }
    },
    {
      "id": "u11-f11",
      "fact": {
        "tr": "s orbitalleri küresel simetriktir ve her enerji düzeyinde 1 tane (en çok 2 elektron) bulunur.",
        "en": "s orbitals are spherically symmetrical and there is 1 electron (maximum 2 electrons) in each energy level.",
        "de": "s-Orbitale sind sphärisch symmetrisch und in jedem Energieniveau befindet sich 1 Elektron (maximal 2 Elektronen).",
        "fr": "Les orbitales sont à symétrie sphérique et il y a 1 électron (maximum 2 électrons) dans chaque niveau d'énergie.",
        "ru": "s-орбитали сферически симметричны, и на каждом энергетическом уровне находится 1 электрон (максимум 2 электрона).",
        "ar": "مدارات s متناظرة كرويًا ويوجد إلكترون واحد (بحد أقصى إلكترونين) في كل مستوى طاقة.",
        "zh": "s 轨道是球对称的，每个能级有 1 个电子（最多 2 个电子）。",
        "ku": "Orbîtalên s bi sferîk sîmetrîk in û di her asta enerjiyê de 1 elektron (herî zêde 2 elektron) heye."
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
      }
    },
    {
      "id": "u11-f15",
      "fact": {
        "tr": "Son orbitali tam dolu veya yarı dolu olan atomlar küresel simetri özelliği gösterir ve daha kararlıdır.",
        "en": "Atoms with a fully filled or half filled last orbital show spherical symmetry and are more stable.",
        "de": "Atome mit einem vollständig oder halbgefüllten letzten Orbital weisen eine sphärische Symmetrie auf und sind stabiler.",
        "fr": "Les atomes dont la dernière orbitale est entièrement remplie ou à moitié remplie présentent une symétrie sphérique et sont plus stables.",
        "ru": "Атомы с полностью или наполовину заполненной последней орбиталью обладают сферической симметрией и более стабильны.",
        "ar": "الذرات ذات المدار الأخير المملوء بالكامل أو نصف المملوء تظهر تناظرًا كرويًا وتكون أكثر استقرارًا.",
        "zh": "最后轨道完全充满或半充满的原子表现出球对称性并且更稳定。",
        "ku": "Atomên bi orbîtala paşîn a bi tevahî dagirtî an jî nîv dagirtî hevrehmiya ferîkî nîşan didin û aramtir in."
      },
      "trap": {
        "tr": "p4 ile biten elektron dizilimi küresel simetriktir.",
        "en": "The electron configuration ending in p4 is spherically symmetric.",
        "de": "Die Elektronenkonfiguration, die mit p4 endet, ist sphärisch symmetrisch.",
        "fr": "La configuration électronique se terminant par p4 est à symétrie sphérique.",
        "ru": "Электронная конфигурация, оканчивающаяся на p4, сферически симметрична.",
        "ar": "تكوين الإلكترون المنتهي بـ p4 متماثل كرويًا.",
        "zh": "以 p4 结尾的电子构型是球对称的。",
        "ku": "Veavakirina elektronê ku bi p4-ê diqede, bi rengek simetrîk e."
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
        "zh": "奥夫鲍原则",
        "ku": "Prensîba Aufbau"
      },
      "conceptB": {
        "tr": "Hund Kuralı",
        "en": "Hund's Rule",
        "de": "Hunds Regel",
        "fr": "La règle de Hund",
        "ru": "Правило Хунда",
        "ar": "قاعدة هوند",
        "zh": "洪特法则",
        "ku": "Qanûna Hund"
      },
      "distinction": {
        "tr": "Aufbau elektronların düşük enerjili orbitale yerleşmesini, Hund eş enerjili orbitallere önce tek tek paralel spinle girmesini kurala bağlar.",
        "en": "Aufbau rules that electrons settle in low-energy orbitals, while Hund rules that electrons first enter orbitals with equal energy, one by one, with parallel spin.",
        "de": "Aufbau geht davon aus, dass sich Elektronen in Orbitalen mit niedriger Energie niederlassen, während Hund davon ausgeht, dass Elektronen zunächst nacheinander in Orbitale mit gleicher Energie und parallelem Spin eintreten.",
        "fr": "Aufbau stipule que les électrons s'installent dans des orbitales de basse énergie, tandis que Hund stipule que les électrons entrent d'abord dans des orbitales d'énergie égale, un par un, avec un spin parallèle.",
        "ru": "Ауфбау утверждает, что электроны располагаются на низкоэнергетических орбиталях, в то время как Хунд утверждает, что электроны сначала один за другим выходят на орбитали с одинаковой энергией и с параллельным спином.",
        "ar": "يحكم أوفباو أن الإلكترونات تستقر في مدارات منخفضة الطاقة، بينما يحكم هوند أن الإلكترونات تدخل أولاً إلى مدارات ذات طاقة متساوية، واحدة تلو الأخرى، بدوران متوازي.",
        "zh": "奥夫鲍规则电子在低能轨道上定居，而洪德（Hund）规则电子首先进入具有相等能量的轨道，一个接一个，并具有平行自旋。",
        "ku": "Aufbau qaîde dike ku elektron di orbîtalên kêm-enerjiyê de bi cih dibin, dema ku Hund biryar dide ku elektron yekem car bi enerjiya wekhev, yek bi yek, bi spinek paralel dikevin orbîtalan."
      }
    },
    {
      "id": "u11-c02",
      "conceptA": {
        "tr": "s Orbitali",
        "en": "s orbital",
        "de": "s Orbital",
        "fr": "s orbitale",
        "ru": "s-орбиталь",
        "ar": "المدار s",
        "zh": "s轨道",
        "ku": "s orbital"
      },
      "conceptB": {
        "tr": "p Orbitali",
        "en": "p orbital",
        "de": "p-Orbital",
        "fr": "p orbitale",
        "ru": "p-орбиталь",
        "ar": "المدار p",
        "zh": "p轨道",
        "ku": "p orbital"
      },
      "distinction": {
        "tr": "s orbitali küresel simetriktir (l=0, 1 adet); p orbitali yönlü iki loblu halterdir (l=1, 3 adet).",
        "en": "s orbital is spherically symmetric (l=0, 1); It is a directional two-lobed barbell with a p orbital (l=1, 3 pieces).",
        "de": "s-Orbital ist sphärisch symmetrisch (l=0, 1); Es handelt sich um eine gerichtete zweilappige Langhantel mit einem p-Orbital (l=1, 3 Stück).",
        "fr": "L'orbitale s est à symétrie sphérique (l=0, 1) ; Il s'agit d'une barre directionnelle bilobée avec une orbitale p (l=1, 3 pièces).",
        "ru": "s-орбиталь сферически симметрична (l=0, 1); Это направленная двулопастная штанга с p-орбиталью (l=1,3 шт.).",
        "ar": "المدار s متماثل كرويًا (l=0, 1); وهو عبارة عن قضيب حديد اتجاهي ذو فصين مع مدار p (l = 1، 3 قطع).",
        "zh": "s 轨道是球对称的 (l=0, 1)；它是一个带有 p 轨道的定向两叶杠铃（l=1，3 件）。",
        "ku": "s orbital bi spherîk sîmetrîk e (l=0, 1); Ew barbelek du-lobek arasteyî ye û bi orbîtalek p (l=1, 3 perçe) ye."
      }
    },
    {
      "id": "u11-c03",
      "conceptA": {
        "tr": "Baş Kuantum Sayısı (n)",
        "en": "Lead Quantum Number (n)",
        "de": "Leitquantenzahl (n)",
        "fr": "Nombre quantique de plomb (n)",
        "ru": "Квантовое число свинца (n)",
        "ar": "رقم الكم الرصاصي (ن)",
        "zh": "铅量子数 (n)",
        "ku": "Hejmara Kuantuma Pêşîn (n)"
      },
      "conceptB": {
        "tr": "Açısal Momentum Kuantum (l)",
        "en": "Angular Momentum Quantum (l)",
        "de": "Drehimpuls Quantum (l)",
        "fr": "Moment angulaire quantique (l)",
        "ru": "Квант углового момента (l)",
        "ar": "الزخم الزاوي الكم (ل)",
        "zh": "角动量量子 (l)",
        "ku": "Momenta Angular Quantum (l)"
      },
      "distinction": {
        "tr": "Baş kuantum n enerji düzeyini ve ortalama uzaklığı; açısal momentum l orbitalin geometrik şeklini (s, p, d, f) belirtir.",
        "en": "Principal quantum n is the energy level and average distance; angular momentum l specifies the geometric shape of the orbital (s, p, d, f).",
        "de": "Das Hauptquantum n ist das Energieniveau und der durchschnittliche Abstand; Der Drehimpuls l gibt die geometrische Form des Orbitals an (s, p, d, f).",
        "fr": "Le quantum principal n est le niveau d'énergie et la distance moyenne ; moment cinétique l spécifie la forme géométrique de l'orbitale (s, p, d, f).",
        "ru": "Главный квант n — уровень энергии и среднее расстояние; угловой момент l задает геометрическую форму орбитали (s, p, d, f).",
        "ar": "الكم الرئيسي n هو مستوى الطاقة ومتوسط المسافة؛ يحدد الزخم الزاوي l الشكل الهندسي للمدار (s، p، d، f).",
        "zh": "主量子n是能级和平均距离；角动量 l 指定轨道的几何形状 (s, p, d, f)。",
        "ku": "Kuantuma sereke n asta enerjiyê û dûrahiya navîn e; leza goşeyî l şeklê geometrîkî yê orbîtalê (s, p, d, f) diyar dike."
      }
    },
    {
      "id": "u11-c04",
      "conceptA": {
        "tr": "Manyetik Kuantum (ml)",
        "en": "Magnetic Quantum (ml)",
        "de": "Magnetisches Quantum (ml)",
        "fr": "Quantique magnétique (ml)",
        "ru": "Магнитный Квант (мл)",
        "ar": "الكم المغناطيسي (مل)",
        "zh": "磁量子（ml）",
        "ku": "Quantuma Magnetîk (ml)"
      },
      "conceptB": {
        "tr": "Spin Kuantum Sayısı (ms)",
        "en": "Spin Quantum Number (ms)",
        "de": "Spinquantenzahl (ms)",
        "fr": "Nombre quantique de spin (ms)",
        "ru": "Спиновое квантовое число (мс)",
        "ar": "عدد الكم المغزلي (ملي ثانية)",
        "zh": "自旋量子数（毫秒）",
        "ku": "Hejmara Kuantûmê ya Spin (ms)"
      },
      "distinction": {
        "tr": "ml orbitalin uzaydaki 3 boyutlu yönelimini (-l..+l); ms elektronun kendi ekseni etrafındaki dönme yönünü (+1/2, -1/2) belirtir.",
        "en": "ml is the 3D orientation of the orbital in space (-l..+l); ms indicates the direction of rotation of the electron around its axis (+1/2, -1/2).",
        "de": "ml ist die 3D-Ausrichtung des Orbitals im Raum (-l..+l); ms gibt die Rotationsrichtung des Elektrons um seine Achse an (+1/2, -1/2).",
        "fr": "ml est l'orientation 3D de l'orbitale dans l'espace (-l..+l) ; ms indique le sens de rotation de l'électron autour de son axe (+1/2, -1/2).",
        "ru": "ml – трехмерная ориентация орбитали в пространстве (-l..+l); мс указывает направление вращения электрона вокруг своей оси (+1/2, -1/2).",
        "ar": "ml هو الاتجاه ثلاثي الأبعاد للمدار في الفضاء (-l..+l); يشير ms إلى اتجاه دوران الإلكترون حول محوره (+1/2، -1/2).",
        "zh": "ml 是轨道在空间中的 3D 方向 (-l..+l)； ms 表示电子绕其轴的旋转方向（+1/2，-1/2）。",
        "ku": "ml di fezayê de seyrûsefera 3D ya orbîtalê ye (-l..+l); ms arasteya zivirîna elektronê li dora eksê xwe nîşan dide (+1/2, -1/2)."
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
        "ku": "Spherical Symmetry"
      },
      "distinction": {
        "tr": "Pauli bir atomda 4 kuantum sayısı da aynı iki elektron olamayacağını; küresel simetri son orbitalin yarı veya tam dolu olma kararlılığını belirtir.",
        "en": "Pauli stated that there cannot be two electrons with the same quantum number 4 in an atom; Spherical symmetry indicates the stability of the last orbital being half or fully occupied.",
        "de": "Pauli stellte fest, dass es in einem Atom nicht zwei Elektronen mit derselben Quantenzahl 4 geben kann; Die sphärische Symmetrie gibt die Stabilität an, bei der das letzte Orbital zur Hälfte oder vollständig besetzt ist.",
        "fr": "Pauli a déclaré qu'il ne peut pas y avoir deux électrons avec le même nombre quantique 4 dans un atome ; La symétrie sphérique indique que la stabilité de la dernière orbitale est à moitié ou entièrement occupée.",
        "ru": "Паули заявил, что в атоме не может быть двух электронов с одинаковым квантовым числом 4; Сферическая симметрия указывает на стабильность последней орбитали, занятой наполовину или полностью.",
        "ar": "وذكر باولي أنه لا يمكن أن يكون هناك إلكترونين لهما نفس العدد الكمي 4 في الذرة؛ يشير التناظر الكروي إلى استقرار المدار الأخير الذي يكون نصفه أو مشغولًا بالكامل.",
        "zh": "泡利指出，一个原子中不可能有两个具有相同量子数4的电子；球对称性表明最后一个轨道被一半或完全占据的稳定性。",
        "ku": "Pauli diyar kir ku di atomê de du elektronên bi heman kuantuma jimare 4 nikarin hebin; Simetrîya sperîkî îstîqrara orbîtala paşîn nîv an bi tevahî dagirkirî nîşan dide."
      }
    },
    {
      "id": "u11-c06",
      "conceptA": {
        "tr": "Temel Hal",
        "en": "Ground State",
        "de": "Grundzustand",
        "fr": "État fondamental",
        "ru": "Основное состояние",
        "ar": "الحالة الأرضية",
        "zh": "Ground State",
        "ku": "Dewleta erdê"
      },
      "conceptB": {
        "tr": "Uyarılmış Hal",
        "en": "Excited State",
        "de": "Aufgeregter Zustand",
        "fr": "État excité",
        "ru": "Возбужденное состояние",
        "ar": "الدولة متحمس",
        "zh": "兴奋态",
        "ku": "Dewleta heyecan"
      },
      "distinction": {
        "tr": "Temel hal elektronların en düşük enerjili kararlı düzenidir; uyarılmış hal dışarıdan enerji alarak üst orbitale sıçramış kararsız durumdur.",
        "en": "The ground state is the lowest energy stable arrangement of electrons; The excited state is an unstable state that has jumped to the upper orbital by receiving energy from outside.",
        "de": "Der Grundzustand ist die niedrigste energiestabile Anordnung von Elektronen; Der angeregte Zustand ist ein instabiler Zustand, der durch die Aufnahme von Energie von außen in das obere Orbital gesprungen ist.",
        "fr": "L’état fondamental est l’arrangement d’électrons stable à la plus basse énergie ; L’état excité est un état instable qui a sauté vers l’orbitale supérieure en recevant de l’énergie de l’extérieur.",
        "ru": "Основное состояние представляет собой стабильное расположение электронов с наименьшей энергией; Возбужденное состояние — это нестабильное состояние, перешедшее на верхнюю орбиталь за счет получения энергии извне.",
        "ar": "الحالة الأرضية هي الترتيب المستقر للطاقة الأدنى للإلكترونات؛ الحالة المثارة هي حالة غير مستقرة قفزت إلى المدار العلوي عن طريق تلقي الطاقة من الخارج.",
        "zh": "基态是电子能量最低的稳定排列；激发态是通过从外部接收能量而跃迁到上轨道的不稳定状态。",
        "ku": "Rewşa bingehîn lihevhatina elektronan a herî kêm enerjî ye; Rewşa heyecan dewleteke bêîstîqrar e ku bi wergirtina enerjiyê ji derve xwe avêtiye orbîtala jorîn."
      }
    },
    {
      "id": "u11-c07",
      "conceptA": {
        "tr": "Aufbau İlkesi",
        "en": "Aufbau Principle",
        "de": "Aufbauprinzip",
        "fr": "Principe d'Aufbau",
        "ru": "Принцип Ауфбау",
        "ar": "مبدأ أوفباو",
        "zh": "奥夫鲍原则",
        "ku": "Prensîba Aufbau"
      },
      "conceptB": {
        "tr": "Hund Kuralı",
        "en": "Hund's Rule",
        "de": "Hunds Regel",
        "fr": "La règle de Hund",
        "ru": "Правило Хунда",
        "ar": "قاعدة هوند",
        "zh": "洪特法则",
        "ku": "Qanûna Hund"
      },
      "distinction": {
        "tr": "Aufbau elektronların düşük enerjili orbitale yerleşmesini, Hund eş enerjili orbitallere önce tek tek paralel spinle girmesini kurala bağlar.",
        "en": "Aufbau rules that electrons settle in low-energy orbitals, while Hund rules that electrons first enter orbitals with equal energy, one by one, with parallel spin.",
        "de": "Aufbau geht davon aus, dass sich Elektronen in Orbitalen mit niedriger Energie niederlassen, während Hund davon ausgeht, dass Elektronen zunächst nacheinander in Orbitale mit gleicher Energie und parallelem Spin eintreten.",
        "fr": "Aufbau stipule que les électrons s'installent dans des orbitales de basse énergie, tandis que Hund stipule que les électrons entrent d'abord dans des orbitales d'énergie égale, un par un, avec un spin parallèle.",
        "ru": "Ауфбау утверждает, что электроны располагаются на низкоэнергетических орбиталях, в то время как Хунд утверждает, что электроны сначала один за другим выходят на орбитали с одинаковой энергией и с параллельным спином.",
        "ar": "يحكم أوفباو أن الإلكترونات تستقر في مدارات منخفضة الطاقة، بينما يحكم هوند أن الإلكترونات تدخل أولاً إلى مدارات ذات طاقة متساوية، واحدة تلو الأخرى، بدوران متوازي.",
        "zh": "奥夫鲍规则电子在低能轨道上定居，而洪德（Hund）规则电子首先进入具有相等能量的轨道，一个接一个，并具有平行自旋。",
        "ku": "Aufbau qaîde dike ku elektron di orbîtalên kêm-enerjiyê de bi cih dibin, dema ku Hund biryar dide ku elektron yekem car bi enerjiya wekhev, yek bi yek, bi spinek paralel dikevin orbîtalan."
      }
    },
    {
      "id": "u11-c08",
      "conceptA": {
        "tr": "Aufbau İlkesi",
        "en": "Aufbau Principle",
        "de": "Aufbauprinzip",
        "fr": "Principe d'Aufbau",
        "ru": "Принцип Ауфбау",
        "ar": "مبدأ أوفباو",
        "zh": "奥夫鲍原则",
        "ku": "Prensîba Aufbau"
      },
      "conceptB": {
        "tr": "Hund Kuralı",
        "en": "Hund's Rule",
        "de": "Hunds Regel",
        "fr": "La règle de Hund",
        "ru": "Правило Хунда",
        "ar": "قاعدة هوند",
        "zh": "洪特法则",
        "ku": "Qanûna Hund"
      },
      "distinction": {
        "tr": "Aufbau elektronların düşük enerjili orbitale yerleşmesini, Hund eş enerjili orbitallere önce tek tek paralel spinle girmesini kurala bağlar.",
        "en": "Aufbau rules that electrons settle in low-energy orbitals, while Hund rules that electrons first enter orbitals with equal energy, one by one, with parallel spin.",
        "de": "Aufbau geht davon aus, dass sich Elektronen in Orbitalen mit niedriger Energie niederlassen, während Hund davon ausgeht, dass Elektronen zunächst nacheinander in Orbitale mit gleicher Energie und parallelem Spin eintreten.",
        "fr": "Aufbau stipule que les électrons s'installent dans des orbitales de basse énergie, tandis que Hund stipule que les électrons entrent d'abord dans des orbitales d'énergie égale, un par un, avec un spin parallèle.",
        "ru": "Ауфбау утверждает, что электроны располагаются на низкоэнергетических орбиталях, в то время как Хунд утверждает, что электроны сначала один за другим выходят на орбитали с одинаковой энергией и с параллельным спином.",
        "ar": "يحكم أوفباو أن الإلكترونات تستقر في مدارات منخفضة الطاقة، بينما يحكم هوند أن الإلكترونات تدخل أولاً إلى مدارات ذات طاقة متساوية، واحدة تلو الأخرى، بدوران متوازي.",
        "zh": "奥夫鲍规则电子在低能轨道上定居，而洪德（Hund）规则电子首先进入具有相等能量的轨道，一个接一个，并具有平行自旋。",
        "ku": "Aufbau qaîde dike ku elektron di orbîtalên kêm-enerjiyê de bi cih dibin, dema ku Hund biryar dide ku elektron yekem car bi enerjiya wekhev, yek bi yek, bi spinek paralel dikevin orbîtalan."
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
        "ar": "تصنيف الطاقة المدارية (ن + لتر الزيادة)",
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
          "tr": "< 3s < 3p < 4s",
          "en": "< 3s < 3p < 4s",
          "de": "< 3s < 3p < 4s",
          "fr": "< 3s < 3p < 4s",
          "ru": "< 3s < 3p < 4s",
          "ar": "< 3s < 3p < 4s",
          "zh": "< 3s < 3p < 4s",
          "ku": "< 3s < 3p < 4s"
        },
        {
          "tr": "< 3d < 4p < 5s",
          "en": "< 3d < 4p < 5s",
          "de": "< 3d < 4p < 5s",
          "fr": "< 3d < 4p < 5s",
          "ru": "< 3d < 4p < 5s",
          "ar": "< 3d < 4p < 5s",
          "zh": "< 3d < 4p < 5s",
          "ku": "< 3d < 4p < 5s"
        },
        {
          "tr": "< 4d < 5p < 6s",
          "en": "< 4d < 5p < 6s",
          "de": "< 4d < 5p < 6s",
          "fr": "< 4d < 5p < 6s",
          "ru": "< 4d < 5p < 6s",
          "ar": "< 4d < 5p < 6s",
          "zh": "< 4d < 5p < 6s",
          "ku": "< 4d < 5p < 6s"
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
          "de": "Nach 4 Sekunden werden die Elektronen in 3D-Orbitalen platziert.",
          "fr": "Après 4 secondes, les électrons sont placés sur des orbitales 3D.",
          "ru": "Через 4 секунды электроны перемещаются на 3d-орбитали.",
          "ar": "بعد 4s، يتم وضع الإلكترونات في مدارات ثلاثية الأبعاد.",
          "zh": "4 秒后，电子被置于 3d 轨道中。",
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
          "tr": "Elektronun kendi ekseni etrafında dönüşünden ms belirlenir",
          "en": "ms is determined from the rotation of the electron around its own axis",
          "de": "ms wird aus der Drehung des Elektrons um seine eigene Achse bestimmt",
          "fr": "ms est déterminé à partir de la rotation de l'électron autour de son propre axe",
          "ru": "мс определяется из вращения электрона вокруг собственной оси",
          "ar": "يتم تحديد مللي ثانية من دوران الإلكترون حول محوره",
          "zh": "ms 由电子绕其自身轴的旋转确定",
          "ku": "ms ji zivirîna elektronê li dora tehma xwe tê destnîşankirin"
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
          "de": "3D-Orbitale werden ab Sc gefüllt",
          "fr": "Les orbitales 3D sont remplies à partir de Sc",
          "ru": "3d-орбитали заполняются, начиная с Sc",
          "ar": "تمتلئ المدارات ثلاثية الأبعاد بدءًا من Sc",
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
          "de": "3D-Orbitale werden zur Hälfte gefüllt und erhalten sphärische Symmetrie",
          "fr": "Les orbitales 3D deviennent à moitié remplies et acquièrent une symétrie sphérique",
          "ru": "Трехмерные орбитали становятся наполовину заполненными и приобретают сферическую симметрию.",
          "ar": "تصبح المدارات ثلاثية الأبعاد نصف ممتلئة وتكتسب تناظرًا كرويًا",
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
        "tr": "Temel haldeki 24Cr atomunun elektron diziliminde yarı dolu orbital sayısı kaçtır?",
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
        "tr": "24Cr elektron dizilimi [Ar] 4s1 3d5'tir. 4s'te 1 tane, 3d'de 5 tane olmak üzere toplam 6 adet yarı dolu orbital içerir.",
        "en": "The electron configuration of 24Cr is [Ar] 4s1 3d5. It contains a total of 6 half-filled orbitals, 1 in 4s and 5 in 3d.",
        "de": "Die Elektronenkonfiguration von 24Cr ist [Ar] 4s1 3d5. Es enthält insgesamt 6 halbgefüllte Orbitale, 1 in 4s und 5 in 3d.",
        "fr": "La configuration électronique du 24Cr est [Ar] 4s1 3d5. Il contient un total de 6 orbitales à moitié remplies, 1 en 4s et 5 en 3D.",
        "ru": "Электронная конфигурация 24Cr: [Ar] 4s1 3d5. Всего он содержит 6 наполовину заполненных орбиталей: 1 в 4s и 5 в 3d.",
        "ar": "التكوين الإلكتروني لـ 24Cr هو [Ar] 4s1 3d5. يحتوي على إجمالي 6 مدارات نصف مملوءة، 1 في 4s و5 في 3d.",
        "zh": "24Cr的电子排布为[Ar] 4s1 3d5。它总共包含 6 个半填充轨道，其中 1 个为 4s，5 个为 3d。",
        "ku": "Veavakirina elektronê ya 24Cr [Ar] 4s1 3d5 e. Ew bi tevahî 6 orbitalên nîv-dagirtî, 1 di 4s û 5 di 3d de dihewîne."
      }
    },
    {
      "id": "u11-twin02",
      "stem": {
        "tr": "Açısal momentum kuantum sayısı l = 2 ve manyetik kuantum sayısı ml = -1 olan bir elektron hangi orbital türünde bulunabilir?",
        "en": "In which orbital type can an electron with angular momentum quantum number l = 2 and magnetic quantum number ml = -1 be found?",
        "de": "In welchem Orbitaltyp befindet sich ein Elektron mit der Drehimpulsquantenzahl l = 2 und der magnetischen Quantenzahl ml = -1?",
        "fr": "Dans quel type d'orbite peut-on trouver un électron avec un nombre quantique de moment cinétique l = 2 et un nombre quantique magnétique ml = -1 ?",
        "ru": "На какой орбите может находиться электрон с квантовым числом углового момента l = 2 и магнитным квантовым числом ml = -1?",
        "ar": "في أي نوع مداري يمكن العثور على إلكترون له زخم زاوي عدد الكم l = 2 وعدد كم مغناطيسي ml = -1؟",
        "zh": "在哪种轨道类型中可以找到角动量量子数 l = 2 且磁量子数 ml = -1 的电子？",
        "ku": "Elektroneke bi leza goşeyî hejmara kuantûmê l = 2 û jimareya kûantûmê ya magnetîkî ml = -1 di kîjan cureya orbîtalê de dikare were dîtin?"
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
        "tr": "l = 2 açısal momentum kuantum sayısı d orbitallerini temsil eder (ml: -2, -1, 0, +1, +2).",
        "en": "The angular momentum quantum number l = 2 represents the d orbitals (ml: -2, -1, 0, +1, +2).",
        "de": "Die Drehimpulsquantenzahl l = 2 repräsentiert die d-Orbitale (ml: -2, -1, 0, +1, +2).",
        "fr": "Le nombre quantique de moment cinétique l = 2 représente les d orbitales (ml : -2, -1, 0, +1, +2).",
        "ru": "Квантовое число углового момента l = 2 представляет d-орбитали (ml: -2, -1, 0, +1, +2).",
        "ar": "يمثل عدد الكم الزاوي l = 2 المدارات d (ml: -2، -1، 0، +1، +2).",
        "zh": "角动量量子数 l = 2 代表 d 轨道 (ml: -2, -1, 0, +1, +2)。",
        "ku": "Hejmara quantuma leza goşeyê l = 2 d orbîtalan nîşan dide (ml: -2, -1, 0, +1, +2)."
      }
    },
    {
      "id": "u11-twin03",
      "stem": {
        "tr": "Kimya dersinde Modern Atom Teorisi ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Modern Atomic Theory, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Moderne Atomtheorie: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Théorie Atomique Moderne, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Современная теория атома», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"النظرية الذرية الحديثة\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“现代原子论”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Teoriya Modêrn a Atomê\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Aufbau kuralına göre 3d orbitali daima 4s orbitalinden önce doldurulur.",
          "en": "According to the Aufbau rule, the 3d orbital is always filled before the 4s orbital.",
          "de": "Nach der Aufbau-Regel wird das 3d-Orbital immer vor dem 4s-Orbital gefüllt.",
          "fr": "Selon la règle d'Aufbau, l'orbitale 3d est toujours remplie avant l'orbitale 4s.",
          "ru": "Согласно правилу Ауфбау, 3d-орбиталь всегда заполняется раньше 4s-орбитали.",
          "ar": "وفقًا لقاعدة أوفباو، فإن المدار ثلاثي الأبعاد يمتلئ دائمًا قبل المدار 4s.",
          "zh": "根据 Aufbau 规则，3d 轨道总是在 4s 轨道之前被填充。",
          "ku": "Li gorî qaîdeya Aufbau, orbîtala 3d her dem berî orbitala 4s tê dagirtin."
        },
        {
          "tr": "Fe atomu iyonlaşırken elektron önce 3d orbitalinden kopar.",
          "en": "While the Fe atom is ionized, the electron first breaks away from the 3d orbital.",
          "de": "Während das Fe-Atom ionisiert wird, löst sich zunächst das Elektron aus dem 3d-Orbital.",
          "fr": "Pendant que l’atome de Fe est ionisé, l’électron se détache d’abord de l’orbitale 3D.",
          "ru": "Пока атом Fe ионизируется, электрон сначала отрывается от 3d-орбитали.",
          "ar": "أثناء تأين ذرة الحديد، ينفصل الإلكترون أولاً عن المدار ثلاثي الأبعاد.",
          "zh": "当 Fe 原子被电离时，电子首先脱离 3d 轨道。",
          "ku": "Dema ku atoma Fe îyonîze dibe, elektron pêşî ji orbitala 3d vediqete."
        },
        {
          "tr": "Manyetik kuantum sayısı (ml), orbitalin uzaydaki yönelimini belirtir ve -l ile +l arasındaki tamsayı değerlerini alır.",
          "en": "The magnetic quantum number (ml) indicates the orientation of the orbital in space and takes integer values ​​between -l and +1.",
          "de": "Die magnetische Quantenzahl (ml) gibt die Orientierung des Orbitals im Raum an und nimmt ganzzahlige Werte zwischen -l und +1 an.",
          "fr": "Le nombre quantique magnétique (ml) indique l'orientation de l'orbitale dans l'espace et prend des valeurs entières comprises entre -l et +1.",
          "ru": "Магнитное квантовое число (ml) указывает на ориентацию орбитали в пространстве и принимает целые значения от -l до +1.",
          "ar": "يشير رقم الكم المغناطيسي (ml) إلى اتجاه المدار في الفضاء ويأخذ قيمًا صحيحة بين -l و+1.",
          "zh": "磁量子数（ml）表示轨道在空间中的取向，取-l到+1之间的整数值。",
          "ku": "Hejmara quantumê ya magnetîkî (ml) arastekirina orbîtalê li fezayê destnîşan dike û jimareyên yekjimar di navbera -l û +1 de digire."
        },
        {
          "tr": "1. temel enerji düzeyinde 3 adet p orbitali bulunur.",
          "en": "There are 3 p orbitals in the 1st fundamental energy level.",
          "de": "Im 1. Grundenergieniveau gibt es 3 p-Orbitale.",
          "fr": "Il y a 3 orbitales p dans le 1er niveau d'énergie fondamentale.",
          "ru": "На первом фундаментальном энергетическом уровне имеется 3 p-орбитали.",
          "ar": "هناك 3 مدارات p في مستوى الطاقة الأساسي الأول.",
          "zh": "第一基本能级有 3 个 p 轨道。",
          "ku": "Di asta enerjiya bingehîn a 1emîn de 3 p orbîtal hene."
        },
        {
          "tr": "p4 ile biten elektron dizilimi küresel simetriktir.",
          "en": "The electron configuration ending in p4 is spherically symmetric.",
          "de": "Die Elektronenkonfiguration, die mit p4 endet, ist sphärisch symmetrisch.",
          "fr": "La configuration électronique se terminant par p4 est à symétrie sphérique.",
          "ru": "Электронная конфигурация, оканчивающаяся на p4, сферически симметрична.",
          "ar": "تكوين الإلكترون المنتهي بـ p4 متماثل كرويًا.",
          "zh": "以 p4 结尾的电子构型是球对称的。",
          "ku": "Veavakirina elektronê ku bi p4-ê diqede, bi rengek simetrîk e."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Manyetik kuantum sayısı (ml), orbitalin uzaydaki yönelimini belirtir ve -l ile +l arasındaki tamsayı değerlerini alır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The magnetic quantum number (ml) indicates the orientation of the orbital in space and takes integer values ​​between -l and +1.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die magnetische Quantenzahl (ml) gibt die Orientierung des Orbitals im Raum an und nimmt ganzzahlige Werte zwischen -l und +1 an.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le nombre quantique magnétique (ml) indique l'orientation de l'orbitale dans l'espace et prend des valeurs entières comprises entre -l et +1.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Магнитное квантовое число (ml) указывает на ориентацию орбитали в пространстве и принимает целые значения от -l до +1.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يشير رقم الكم المغناطيسي (ml) إلى اتجاه المدار في الفضاء ويأخذ قيمًا صحيحة بين -l و+1.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“磁量子数（ml）表示轨道在空间中的取向，取-l到+1之间的整数值。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hejmara quantumê ya magnetîkî (ml) arastekirina orbîtalê li fezayê destnîşan dike û jimareyên yekjimar di navbera -l û +1 de digire.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u11-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Modern Atom Teorisi konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Modern Atomic Theory?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Moderne Atomtheorie zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Théorie Atomique Moderne ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Современная теория атома»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"النظرية الذرية الحديثة\"؟",
        "zh": "根据“现代原子论”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Teoriya Modêrn a Atomê\" de rast e?"
      },
      "options": [
        {
          "tr": "Elektronlar eş enerjili orbitallere önce zıt spinle çiftler halinde girer.",
          "en": "Electrons first enter orbitals of equal energy in pairs with opposite spin.",
          "de": "Elektronen treten zunächst paarweise mit entgegengesetztem Spin in Orbitale gleicher Energie ein.",
          "fr": "Les électrons entrent d’abord dans des orbitales d’énergie égale par paires de spin opposé.",
          "ru": "Электроны сначала выходят на орбитали равной энергии парами с противоположным спином.",
          "ar": "تدخل الإلكترونات أولًا مدارات ذات طاقة متساوية في أزواج ذات دوران معاكس.",
          "zh": "电子首先成对进入具有相反自旋的等能量轨道。",
          "ku": "Elektron yekem car dikevin orbitalên enerjiyê yên wekhev bi cotek bi spin berevajî."
        },
        {
          "tr": "Aynı periyotta 3A grubunun iyonlaşma enerjisi 2A grubundan büyüktür.",
          "en": "In the same period, the ionization energy of the 3A group is greater than that of the 2A group.",
          "de": "Im gleichen Zeitraum ist die Ionisierungsenergie der 3A-Gruppe größer als die der 2A-Gruppe.",
          "fr": "Dans la même période, l'énergie d'ionisation du groupe 3A est supérieure à celle du groupe 2A.",
          "ru": "В этот же период энергия ионизации группы 3А больше, чем у группы 2А.",
          "ar": "وفي نفس الفترة، تكون طاقة التأين للمجموعة 3A أكبر من طاقة التأين للمجموعة 2A.",
          "zh": "同一时期，3A基团的电离能大于2A基团的电离能。",
          "ku": "Di heman serdemê de, enerjiya iyonîzasyona koma 3A ji ya koma 2A mezintir e."
        },
        {
          "tr": "d orbitalleri 4. temel enerji düzeyinden itibaren başlar.",
          "en": "d orbitals start from the 4th fundamental energy level.",
          "de": "d-Orbitale beginnen auf dem 4. Grundenergieniveau.",
          "fr": "Les orbitales d partent du 4ème niveau d’énergie fondamental.",
          "ru": "d-орбитали начинаются с 4-го фундаментального энергетического уровня.",
          "ar": "تبدأ المدارات d من مستوى الطاقة الأساسي الرابع.",
          "zh": "d 轨道从第四基本能级开始。",
          "ku": "d orbital ji asta enerjiya bingehîn a 4emîn dest pê dikin."
        },
        {
          "tr": "Spin kuantum sayısı (ms), elektronun kendi ekseni etrafındaki dönme yönünü belirtir (+1/2 veya -1/2).",
          "en": "The spin quantum number (ms) indicates the direction of rotation of the electron around its axis (+1/2 or -1/2).",
          "de": "Die Spinquantenzahl (ms) gibt die Rotationsrichtung des Elektrons um seine Achse (+1/2 oder -1/2) an.",
          "fr": "Le nombre quantique de spin (ms) indique le sens de rotation de l'électron autour de son axe (+1/2 ou -1/2).",
          "ru": "Спиновое квантовое число (мс) указывает направление вращения электрона вокруг своей оси (+1/2 или -1/2).",
          "ar": "يشير الرقم الكمي المغزلي (ms) إلى اتجاه دوران الإلكترون حول محوره (+1/2 أو -1/2).",
          "zh": "自旋量子数 (ms) 表示电子绕其轴旋转的方向（+1/2 或 -1/2）。",
          "ku": "Hejmara kuantûmê ya spinê (ms) arasteya zivirandina elektronê li dora eksê xwe (+1/2 an -1/2) nîşan dide."
        },
        {
          "tr": "İzoelektronik katyon ve anyonların yarıçapları birbirine tam eşittir.",
          "en": "The radii of isoelectronic cations and anions are exactly equal.",
          "de": "Die Radien isoelektronischer Kationen und Anionen sind genau gleich.",
          "fr": "Les rayons des cations isoélectroniques et des anions sont exactement égaux.",
          "ru": "Радиусы изоэлектронных катионов и анионов точно равны.",
          "ar": "أنصاف أقطار الكاتيونات والأنيونات متساوية الإلكترون متساوية تمامًا.",
          "zh": "等电子阳离子和阴离子的半径完全相等。",
          "ku": "Radyoya kation û anyonên îzoelektronîk tam wek hev in."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Spin kuantum sayısı (ms), elektronun kendi ekseni etrafındaki dönme yönünü belirtir (+1/2 veya -1/2).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The spin quantum number (ms) indicates the direction of rotation of the electron around its axis (+1/2 or -1/2).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Spinquantenzahl (ms) gibt die Rotationsrichtung des Elektrons um seine Achse (+1/2 oder -1/2) an.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le nombre quantique de spin (ms) indique le sens de rotation de l'électron autour de son axe (+1/2 ou -1/2).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Спиновое квантовое число (мс) указывает направление вращения электрона вокруг своей оси (+1/2 или -1/2).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يشير الرقم الكمي المغزلي (ms) إلى اتجاه دوران الإلكترون حول محوره (+1/2 أو -1/2).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“自旋量子数 (ms) 表示电子绕其轴旋转的方向（+1/2 或 -1/2）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hejmara kuantûmê ya spinê (ms) arasteya zivirandina elektronê li dora eksê xwe (+1/2 an -1/2) nîşan dide.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u11-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Modern Atom Teorisi sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Modern Atomic Theory, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Moderne Atomtheorie: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Théorie Atomique Moderne, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Современная теория атома», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"النظرية الذرية الحديثة\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“现代原子论”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Teoriya Modêrn a Atomê\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "24Cr elementi elektron diziliminde [Ar] 4s2 3d4 şeklinde biter.",
          "en": "The 24Cr element ends in the electron configuration as [Ar] 4s2 3d4.",
          "de": "Das 24Cr-Element endet in der Elektronenkonfiguration als [Ar] 4s2 3d4.",
          "fr": "L'élément 24Cr se termine dans la configuration électronique comme [Ar] 4s2 3d4.",
          "ru": "Элемент 24Cr заканчивается в электронной конфигурации как [Ar] 4s2 3d4.",
          "ar": "وينتهي عنصر 24Cr في الترتيب الإلكتروني كـ [Ar] 4s2 3d4.",
          "zh": "24Cr 元素的电子构型为 [Ar] 4s2 3d4。",
          "ku": "Elementa 24Cr di veavakirina elektronê de wekî [Ar] 4s2 3d4 bi dawî dibe."
        },
        {
          "tr": "s orbitalleri sadece n = 2'den itibaren başlar.",
          "en": "s orbitals start only from n = 2.",
          "de": "s-Orbitale beginnen erst ab n = 2.",
          "fr": "Les orbitales s commencent uniquement à partir de n = 2.",
          "ru": "s-орбитали начинаются только с n = 2.",
          "ar": "تبدأ مدارات s فقط من n = 2.",
          "zh": "s 轨道仅从 n = 2 开始。",
          "ku": "Orbitalên s tenê ji n = 2 dest pê dikin."
        },
        {
          "tr": "f orbitallerinde en çok 10 elektron bulunabilir.",
          "en": "There can be a maximum of 10 electrons in f orbitals.",
          "de": "In f-Orbitalen können sich maximal 10 Elektronen befinden.",
          "fr": "Il peut y avoir un maximum de 10 électrons dans les orbitales f.",
          "ru": "На f-орбиталях может быть максимум 10 электронов.",
          "ar": "يمكن أن يكون هناك 10 إلكترونات كحد أقصى في المدارات f.",
          "zh": "f 轨道中最多可以有 10 个电子。",
          "ku": "Di f orbîtalan de herî zêde 10 elektron dikarin hebin."
        },
        {
          "tr": "Baş kuantum sayısı orbitalin uzaydaki yönelimini belirtir.",
          "en": "The principal quantum number specifies the orientation of the orbital in space.",
          "de": "Die Hauptquantenzahl gibt die Orientierung des Orbitals im Raum an.",
          "fr": "Le nombre quantique principal spécifie l'orientation de l'orbitale dans l'espace.",
          "ru": "Главное квантовое число определяет ориентацию орбитали в пространстве.",
          "ar": "يحدد رقم الكم الرئيسي اتجاه المدار في الفضاء.",
          "zh": "主量子数指定了轨道在空间中的方向。",
          "ku": "Jimara kuantûmê ya sereke arastekirina orbîtalê li fezayê diyar dike."
        },
        {
          "tr": "Pauli Dışlama İlkesi: Bir atomda hiçbir iki elektronun 4 kuantum sayısının dördü de aynı olamaz.",
          "en": "Pauli Exclusion Principle: No two electrons in an atom can have the same four quantum numbers.",
          "de": "Pauli-Ausschlussprinzip: Keine zwei Elektronen in einem Atom können die gleichen vier Quantenzahlen haben.",
          "fr": "Principe d'exclusion de Pauli : Deux électrons dans un atome ne peuvent pas avoir les mêmes quatre nombres quantiques.",
          "ru": "Принцип Паули: никакие два электрона в атоме не могут иметь одинаковые четыре квантовых числа.",
          "ar": "مبدأ استبعاد باولي: لا يمكن لإلكترونين في الذرة أن يكون لهما نفس أعداد الكم الأربعة.",
          "zh": "泡利不相容原理：原子中没有两个电子可以具有相同的四个量子数。",
          "ku": "Prensîba Derxistina Pauli: Di ​​atomê de du elektron nikarin heman çar hejmarên kuantûmê hebin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Pauli Dışlama İlkesi: Bir atomda hiçbir iki elektronun 4 kuantum sayısının dördü de aynı olamaz.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Pauli Exclusion Principle: No two electrons in an atom can have the same four quantum numbers.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Pauli-Ausschlussprinzip: Keine zwei Elektronen in einem Atom können die gleichen vier Quantenzahlen haben.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Principe d'exclusion de Pauli : Deux électrons dans un atome ne peuvent pas avoir les mêmes quatre nombres quantiques.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Принцип Паули: никакие два электрона в атоме не могут иметь одинаковые четыре квантовых числа.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"مبدأ استبعاد باولي: لا يمكن لإلكترونين في الذرة أن يكون لهما نفس أعداد الكم الأربعة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“泡利不相容原理：原子中没有两个电子可以具有相同的四个量子数。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Prensîba Derxistina Pauli: Di ​​atomê de du elektron nikarin heman çar hejmarên kuantûmê hebin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u11-twin06",
      "stem": {
        "tr": "Aşağıda Modern Atom Teorisi ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Modern Atomic Theory, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Moderne Atomtheorie: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Théorie Atomique Moderne, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Современная теория атома», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"النظرية الذرية الحديثة\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“现代原子论”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Teoriya Modêrn a Atomê\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Aufbau Kuralı: Elektronlar orbitallere enerjisi en düşük olan orbitalden başlayarak doldurulur (n + l kuralı).",
          "en": "Aufbau Rule: Electrons are filled into orbitals starting from the orbital with the lowest energy (n + l rule).",
          "de": "Aufbauregel: Elektronen werden in Orbitale gefüllt, beginnend mit dem Orbital mit der niedrigsten Energie (n + l-Regel).",
          "fr": "Règle d'Aufbau : les électrons sont remplis dans des orbitales en commençant par l'orbitale ayant la plus faible énergie (règle n + l).",
          "ru": "Правило Ауфбау: электроны заполняются на орбитали, начиная с орбитали с наименьшей энергией (правило n + l).",
          "ar": "قاعدة أوفباو: تمتلئ الإلكترونات بالمدارات بدءًا من المدار ذي الطاقة الأقل (قاعدة n + l).",
          "zh": "Aufbau 规则：电子从能量最低的轨道开始填充到轨道中（n + l 规则）。",
          "ku": "Rêbaza Aufbau: Elektron di orbitalên ku ji orbîtala bi enerjiya herî hindik dest pê dikin têne dagirtin (qanûna n + l)."
        },
        {
          "tr": "Fe atomu iyonlaşırken elektron önce 3d orbitalinden kopar.",
          "en": "While the Fe atom is ionized, the electron first breaks away from the 3d orbital.",
          "de": "Während das Fe-Atom ionisiert wird, löst sich zunächst das Elektron aus dem 3d-Orbital.",
          "fr": "Pendant que l’atome de Fe est ionisé, l’électron se détache d’abord de l’orbitale 3D.",
          "ru": "Пока атом Fe ионизируется, электрон сначала отрывается от 3d-орбитали.",
          "ar": "أثناء تأين ذرة الحديد، ينفصل الإلكترون أولاً عن المدار ثلاثي الأبعاد.",
          "zh": "当 Fe 原子被电离时，电子首先脱离 3d 轨道。",
          "ku": "Dema ku atoma Fe îyonîze dibe, elektron pêşî ji orbitala 3d vediqete."
        },
        {
          "tr": "1. temel enerji düzeyinde 3 adet p orbitali bulunur.",
          "en": "There are 3 p orbitals in the 1st fundamental energy level.",
          "de": "Im 1. Grundenergieniveau gibt es 3 p-Orbitale.",
          "fr": "Il y a 3 orbitales p dans le 1er niveau d'énergie fondamentale.",
          "ru": "На первом фундаментальном энергетическом уровне имеется 3 p-орбитали.",
          "ar": "هناك 3 مدارات p في مستوى الطاقة الأساسي الأول.",
          "zh": "第一基本能级有 3 个 p 轨道。",
          "ku": "Di asta enerjiya bingehîn a 1emîn de 3 p orbîtal hene."
        },
        {
          "tr": "p4 ile biten elektron dizilimi küresel simetriktir.",
          "en": "The electron configuration ending in p4 is spherically symmetric.",
          "de": "Die Elektronenkonfiguration, die mit p4 endet, ist sphärisch symmetrisch.",
          "fr": "La configuration électronique se terminant par p4 est à symétrie sphérique.",
          "ru": "Электронная конфигурация, оканчивающаяся на p4, сферически симметрична.",
          "ar": "تكوين الإلكترون المنتهي بـ p4 متماثل كرويًا.",
          "zh": "以 p4 结尾的电子构型是球对称的。",
          "ku": "Veavakirina elektronê ku bi p4-ê diqede, bi rengek simetrîk e."
        },
        {
          "tr": "l = 2 açısal momentum sayısı p orbitalini temsil eder.",
          "en": "The angular momentum number l = 2 represents the p orbital.",
          "de": "Die Drehimpulszahl l = 2 repräsentiert das p-Orbital.",
          "fr": "Le nombre de moment cinétique l = 2 représente l'orbitale p.",
          "ru": "Число углового момента l = 2 представляет p-орбиталь.",
          "ar": "يمثل عدد الزخم الزاوي l = 2 المدار p.",
          "zh": "角动量数 l = 2 代表 p 轨道。",
          "ku": "Hejmara leza goşeyê l = 2 orbîtala p nîşan dide."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Aufbau Kuralı: Elektronlar orbitallere enerjisi en düşük olan orbitalden başlayarak doldurulur (n + l kuralı).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Aufbau Rule: Electrons are filled into orbitals starting from the orbital with the lowest energy (n + l rule).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Aufbauregel: Elektronen werden in Orbitale gefüllt, beginnend mit dem Orbital mit der niedrigsten Energie (n + l-Regel).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Règle d'Aufbau : les électrons sont remplis dans des orbitales en commençant par l'orbitale ayant la plus faible énergie (règle n + l).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Правило Ауфбау: электроны заполняются на орбитали, начиная с орбитали с наименьшей энергией (правило n + l).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قاعدة أوفباو: تمتلئ الإلكترونات بالمدارات بدءًا من المدار ذي الطاقة الأقل (قاعدة n + l).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“Aufbau 规则：电子从能量最低的轨道开始填充到轨道中（n + l 规则）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Rêbaza Aufbau: Elektron di orbitalên ku ji orbîtala bi enerjiya herî hindik dest pê dikin têne dagirtin (qanûna n + l).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u11-twin07",
      "stem": {
        "tr": "Modern Atom Teorisi konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Modern Atomic Theory, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Moderne Atomtheorie: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Théorie Atomique Moderne, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Современная теория атома», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"النظرية الذرية الحديثة\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“现代原子论”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Teoriya Modêrn a Atomê\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Aynı periyotta 3A grubunun iyonlaşma enerjisi 2A grubundan büyüktür.",
          "en": "In the same period, the ionization energy of the 3A group is greater than that of the 2A group.",
          "de": "Im gleichen Zeitraum ist die Ionisierungsenergie der 3A-Gruppe größer als die der 2A-Gruppe.",
          "fr": "Dans la même période, l'énergie d'ionisation du groupe 3A est supérieure à celle du groupe 2A.",
          "ru": "В этот же период энергия ионизации группы 3А больше, чем у группы 2А.",
          "ar": "وفي نفس الفترة، تكون طاقة التأين للمجموعة 3A أكبر من طاقة التأين للمجموعة 2A.",
          "zh": "同一时期，3A基团的电离能大于2A基团的电离能。",
          "ku": "Di heman serdemê de, enerjiya iyonîzasyona koma 3A ji ya koma 2A mezintir e."
        },
        {
          "tr": "Hund Kuralı: Eş enerjili orbitallere elektronlar önce aynı spinle birer birer yerleştirilir.",
          "en": "Hund's Rule: Electrons are first placed into orbitals of equal energy, one by one, with the same spin.",
          "de": "Hundsche Regel: Elektronen werden zunächst nacheinander in Orbitale mit gleicher Energie und demselben Spin gebracht.",
          "fr": "Règle de Hund : les électrons sont d'abord placés sur des orbitales d'énergie égale, un par un, avec le même spin.",
          "ru": "Правило Хунда: электроны сначала помещаются на орбитали одинаковой энергии, один за другим, с одинаковым спином.",
          "ar": "قاعدة هوند: يتم وضع الإلكترونات أولاً في مدارات متساوية الطاقة، واحدًا تلو الآخر، بنفس الدوران.",
          "zh": "洪德法则：电子首先被一个接一个地放入具有相同自旋的等能量轨道中。",
          "ku": "Rêbaza Hund: Elektron pêşî li orbîtalên enerjiya wekhev, yek bi yek, bi heman spinê têne danîn."
        },
        {
          "tr": "d orbitalleri 4. temel enerji düzeyinden itibaren başlar.",
          "en": "d orbitals start from the 4th fundamental energy level.",
          "de": "d-Orbitale beginnen auf dem 4. Grundenergieniveau.",
          "fr": "Les orbitales d partent du 4ème niveau d’énergie fondamental.",
          "ru": "d-орбитали начинаются с 4-го фундаментального энергетического уровня.",
          "ar": "تبدأ المدارات d من مستوى الطاقة الأساسي الرابع.",
          "zh": "d 轨道从第四基本能级开始。",
          "ku": "d orbital ji asta enerjiya bingehîn a 4emîn dest pê dikin."
        },
        {
          "tr": "İzoelektronik katyon ve anyonların yarıçapları birbirine tam eşittir.",
          "en": "The radii of isoelectronic cations and anions are exactly equal.",
          "de": "Die Radien isoelektronischer Kationen und Anionen sind genau gleich.",
          "fr": "Les rayons des cations isoélectroniques et des anions sont exactement égaux.",
          "ru": "Радиусы изоэлектронных катионов и анионов точно равны.",
          "ar": "أنصاف أقطار الكاتيونات والأنيونات متساوية الإلكترون متساوية تمامًا.",
          "zh": "等电子阳离子和阴离子的半径完全相等。",
          "ku": "Radyoya kation û anyonên îzoelektronîk tam wek hev in."
        },
        {
          "tr": "d orbitalleri için ml sadece -1, 0, +1 değerlerini alır.",
          "en": "For d orbitals ml only takes the values ​​-1, 0, +1.",
          "de": "Für d-Orbitale nimmt ml nur die Werte -1, 0, +1 an.",
          "fr": "Pour les orbitales d, ml ne prend que les valeurs -1, 0, +1.",
          "ru": "Для d-орбиталей ml принимает только значения -1, 0, +1.",
          "ar": "بالنسبة للمدارات d، يأخذ ml فقط القيم -1، 0، +1.",
          "zh": "对于d轨道，ml仅取值-1、0、+1。",
          "ku": "Ji bo d orbitals ml tenê nirxan -1, 0, +1 digire."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Hund Kuralı: Eş enerjili orbitallere elektronlar önce aynı spinle birer birer yerleştirilir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Hund's Rule: Electrons are first placed into orbitals of equal energy, one by one, with the same spin.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Hundsche Regel: Elektronen werden zunächst nacheinander in Orbitale mit gleicher Energie und demselben Spin gebracht.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Règle de Hund : les électrons sont d'abord placés sur des orbitales d'énergie égale, un par un, avec le même spin.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Правило Хунда: электроны сначала помещаются на орбитали одинаковой энергии, один за другим, с одинаковым спином.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قاعدة هوند: يتم وضع الإلكترونات أولاً في مدارات متساوية الطاقة، واحدًا تلو الآخر، بنفس الدوران.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“洪德法则：电子首先被一个接一个地放入具有相同自旋的等能量轨道中。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Rêbaza Hund: Elektron pêşî li orbîtalên enerjiya wekhev, yek bi yek, bi heman spinê têne danîn.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u11-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Modern Atom Teorisi ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Modern Atomic Theory, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Moderne Atomtheorie: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Théorie Atomique Moderne, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Современная теория атома», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"النظرية الذرية الحديثة\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“现代原子论”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Teoriya Modêrn a Atomê\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "s orbitalleri sadece n = 2'den itibaren başlar.",
          "en": "s orbitals start only from n = 2.",
          "de": "s-Orbitale beginnen erst ab n = 2.",
          "fr": "Les orbitales s commencent uniquement à partir de n = 2.",
          "ru": "s-орбитали начинаются только с n = 2.",
          "ar": "تبدأ مدارات s فقط من n = 2.",
          "zh": "s 轨道仅从 n = 2 开始。",
          "ku": "Orbitalên s tenê ji n = 2 dest pê dikin."
        },
        {
          "tr": "f orbitallerinde en çok 10 elektron bulunabilir.",
          "en": "There can be a maximum of 10 electrons in f orbitals.",
          "de": "In f-Orbitalen können sich maximal 10 Elektronen befinden.",
          "fr": "Il peut y avoir un maximum de 10 électrons dans les orbitales f.",
          "ru": "На f-орбиталях может быть максимум 10 электронов.",
          "ar": "يمكن أن يكون هناك 10 إلكترونات كحد أقصى في المدارات f.",
          "zh": "f 轨道中最多可以有 10 个电子。",
          "ku": "Di f orbîtalan de herî zêde 10 elektron dikarin hebin."
        },
        {
          "tr": "24Cr ([Ar] 4s1 3d5) ve 29Cu ([Ar] 4s1 3d10) elektron dizilimleri küresel simetri kararlılığı nedeniyle özel durumlardır.",
          "en": "The 24Cr ([Ar] 4s1 3d5) and 29Cu ([Ar] 4s1 3d10) electron configurations are special cases due to spherical symmetry stability.",
          "de": "Die Elektronenkonfigurationen 24Cr ([Ar] 4s1 3d5) und 29Cu ([Ar] 4s1 3d10) sind aufgrund der sphärischen Symmetriestabilität Sonderfälle.",
          "fr": "Les configurations électroniques 24Cr ([Ar] 4s1 3d5) et 29Cu ([Ar] 4s1 3d10) sont des cas particuliers en raison de la stabilité de la symétrie sphérique.",
          "ru": "Электронные конфигурации 24Cr ([Ar] 4s1 3d5) и 29Cu ([Ar] 4s1 3d10) представляют собой особые случаи из-за стабильности сферической симметрии.",
          "ar": "تعد تكوينات الإلكترون 24Cr ([Ar] 4s1 3d5) و29Cu ([Ar] 4s1 3d10) حالات خاصة بسبب استقرار التناظر الكروي.",
          "zh": "由于球对称稳定性，24Cr ([Ar] 4s1 3d5) 和 29Cu ([Ar] 4s1 3d10) 电子构型是特殊情况。",
          "ku": "Veavakirinên elektronên 24Cr ([Ar] 4s1 3d5) û 29Cu ([Ar] 4s1 3d10) ji ber îstîqrara simetrîya spherîkî rewşên taybetî ne."
        },
        {
          "tr": "Baş kuantum sayısı orbitalin uzaydaki yönelimini belirtir.",
          "en": "The principal quantum number specifies the orientation of the orbital in space.",
          "de": "Die Hauptquantenzahl gibt die Orientierung des Orbitals im Raum an.",
          "fr": "Le nombre quantique principal spécifie l'orientation de l'orbitale dans l'espace.",
          "ru": "Главное квантовое число определяет ориентацию орбитали в пространстве.",
          "ar": "يحدد رقم الكم الرئيسي اتجاه المدار في الفضاء.",
          "zh": "主量子数指定了轨道在空间中的方向。",
          "ku": "Jimara kuantûmê ya sereke arastekirina orbîtalê li fezayê diyar dike."
        },
        {
          "tr": "Bir orbitalde aynı spinli iki elektron bulunabilir.",
          "en": "An orbital can contain two electrons with the same spin.",
          "de": "Ein Orbital kann zwei Elektronen mit demselben Spin enthalten.",
          "fr": "Une orbitale peut contenir deux électrons de même spin.",
          "ru": "На орбитали могут находиться два электрона с одинаковым спином.",
          "ar": "يمكن أن يحتوي المدار على إلكترونين لهما نفس الدوران.",
          "zh": "轨道可以包含两个具有相同自旋的电子。",
          "ku": "Orbîtalek dikare du elektronên bi heman spinê hebin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"24Cr ([Ar] 4s1 3d5) ve 29Cu ([Ar] 4s1 3d10) elektron dizilimleri küresel simetri kararlılığı nedeniyle özel durumlardır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The 24Cr ([Ar] 4s1 3d5) and 29Cu ([Ar] 4s1 3d10) electron configurations are special cases due to spherical symmetry stability.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Elektronenkonfigurationen 24Cr ([Ar] 4s1 3d5) und 29Cu ([Ar] 4s1 3d10) sind aufgrund der sphärischen Symmetriestabilität Sonderfälle.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les configurations électroniques 24Cr ([Ar] 4s1 3d5) et 29Cu ([Ar] 4s1 3d10) sont des cas particuliers en raison de la stabilité de la symétrie sphérique.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Электронные конфигурации 24Cr ([Ar] 4s1 3d5) и 29Cu ([Ar] 4s1 3d10) представляют собой особые случаи из-за стабильности сферической симметрии.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تعد تكوينات الإلكترون 24Cr ([Ar] 4s1 3d5) و29Cu ([Ar] 4s1 3d10) حالات خاصة بسبب استقرار التناظر الكروي.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“由于球对称稳定性，24Cr ([Ar] 4s1 3d5) 和 29Cu ([Ar] 4s1 3d10) 电子构型是特殊情况。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Veavakirinên elektronên 24Cr ([Ar] 4s1 3d5) û 29Cu ([Ar] 4s1 3d10) ji ber îstîqrara simetrîya spherîkî rewşên taybetî ne.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u11-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Modern Atom Teorisi konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Modern Atomic Theory, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Moderne Atomtheorie die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Théorie Atomique Moderne, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Современная теория атома», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"النظرية الذرية الحديثة\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“现代原子论”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Teoriya Modêrn a Atomê\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "1. temel enerji düzeyinde 3 adet p orbitali bulunur.",
          "en": "There are 3 p orbitals in the 1st fundamental energy level.",
          "de": "Im 1. Grundenergieniveau gibt es 3 p-Orbitale.",
          "fr": "Il y a 3 orbitales p dans le 1er niveau d'énergie fondamentale.",
          "ru": "На первом фундаментальном энергетическом уровне имеется 3 p-орбитали.",
          "ar": "هناك 3 مدارات p في مستوى الطاقة الأساسي الأول.",
          "zh": "第一基本能级有 3 个 p 轨道。",
          "ku": "Di asta enerjiya bingehîn a 1emîn de 3 p orbîtal hene."
        },
        {
          "tr": "p4 ile biten elektron dizilimi küresel simetriktir.",
          "en": "The electron configuration ending in p4 is spherically symmetric.",
          "de": "Die Elektronenkonfiguration, die mit p4 endet, ist sphärisch symmetrisch.",
          "fr": "La configuration électronique se terminant par p4 est à symétrie sphérique.",
          "ru": "Электронная конфигурация, оканчивающаяся на p4, сферически симметрична.",
          "ar": "تكوين الإلكترون المنتهي بـ p4 متماثل كرويًا.",
          "zh": "以 p4 结尾的电子构型是球对称的。",
          "ku": "Veavakirina elektronê ku bi p4-ê diqede, bi rengek simetrîk e."
        },
        {
          "tr": "l = 2 açısal momentum sayısı p orbitalini temsil eder.",
          "en": "The angular momentum number l = 2 represents the p orbital.",
          "de": "Die Drehimpulszahl l = 2 repräsentiert das p-Orbital.",
          "fr": "Le nombre de moment cinétique l = 2 représente l'orbitale p.",
          "ru": "Число углового момента l = 2 представляет p-орбиталь.",
          "ar": "يمثل عدد الزخم الزاوي l = 2 المدار p.",
          "zh": "角动量数 l = 2 代表 p 轨道。",
          "ku": "Hejmara leza goşeyê l = 2 orbîtala p nîşan dide."
        },
        {
          "tr": "Geçiş metalleri (d bloğu) katyon oluştururken elektronu önce en dış katmandaki s orbitalinden verir (örn. Fe: 4s2 3d6 -> Fe2+: 3d6).",
          "en": "While transition metals (d block) form cations, they first donate the electron from the s orbital in the outermost layer (e.g. Fe: 4s2 3d6 -> Fe2+: 3d6).",
          "de": "Während Übergangsmetalle (d-Block) Kationen bilden, geben sie zunächst das Elektron aus dem s-Orbital in der äußersten Schicht ab (z. B. Fe: 4s2 3d6 -> Fe2+: 3d6).",
          "fr": "Alors que les métaux de transition (bloc d) forment des cations, ils donnent d'abord l'électron de l'orbitale s dans la couche la plus externe (par exemple Fe : 4s2 3d6 -> Fe2+ : 3d6).",
          "ru": "Хотя переходные металлы (d-блок) образуют катионы, они сначала отдают электрон с s-орбитали в самом внешнем слое (например, Fe: 4s2 3d6 -> Fe2+: 3d6).",
          "ar": "بينما تشكل المعادن الانتقالية (كتلة d) الكاتيونات، فإنها تتبرع أولاً بالإلكترون من مدار s في الطبقة الخارجية (على سبيل المثال Fe: 4s2 3d6 -> Fe2+: 3d6).",
          "zh": "当过渡金属（d 块）形成阳离子时，它们首先从最外层的 s 轨道提供电子（例如 Fe: 4s2 3d6 -> Fe2+: 3d6）。",
          "ku": "Dema ku metalên veguhêz (d bloka) kationan çêdikin, ew pêşî elektronê ji orbîtala s di qata herî derve de didin (mînak: Fe: 4s2 3d6 -> Fe2+: 3d6)."
        },
        {
          "tr": "Pauli ilkesine göre bir orbitale zıt spinli 3 elektron yerleşebilir.",
          "en": "According to the Pauli principle, three electrons with opposite spins can occupy an orbital.",
          "de": "Nach dem Pauli-Prinzip können drei Elektronen mit entgegengesetztem Spin ein Orbital besetzen.",
          "fr": "Selon le principe de Pauli, trois électrons de spins opposés peuvent occuper une orbitale.",
          "ru": "Согласно принципу Паули, три электрона с противоположными спинами могут занимать орбиталь.",
          "ar": "وفقًا لمبدأ باولي، يمكن لثلاثة إلكترونات ذات دوران متضاد أن تشغل مدارًا.",
          "zh": "根据泡利原理，三个自旋相反的电子可以占据一个轨道。",
          "ku": "Li gorî prensîba Pauli, sê elektronên bi spinên berevajî dikarin orbitalek dagir bikin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Geçiş metalleri (d bloğu) katyon oluştururken elektronu önce en dış katmandaki s orbitalinden verir (örn. Fe: 4s2 3d6 -> Fe2+: 3d6).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"While transition metals (d block) form cations, they first donate the electron from the s orbital in the outermost layer (e.g. Fe: 4s2 3d6 -> Fe2+: 3d6).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Während Übergangsmetalle (d-Block) Kationen bilden, geben sie zunächst das Elektron aus dem s-Orbital in der äußersten Schicht ab (z. B. Fe: 4s2 3d6 -> Fe2+: 3d6).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Alors que les métaux de transition (bloc d) forment des cations, ils donnent d'abord l'électron de l'orbitale s dans la couche la plus externe (par exemple Fe : 4s2 3d6 -> Fe2+ : 3d6).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Хотя переходные металлы (d-блок) образуют катионы, они сначала отдают электрон с s-орбитали в самом внешнем слое (например, Fe: 4s2 3d6 -> Fe2+: 3d6).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"بينما تشكل المعادن الانتقالية (كتلة d) الكاتيونات، فإنها تتبرع أولاً بالإلكترون من مدار s في الطبقة الخارجية (على سبيل المثال Fe: 4s2 3d6 -> Fe2+: 3d6).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“当过渡金属（d 块）形成阳离子时，它们首先从最外层的 s 轨道提供电子（例如 Fe: 4s2 3d6 -> Fe2+: 3d6）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Dema ku metalên veguhêz (d bloka) kationan çêdikin, ew pêşî elektronê ji orbîtala s di qata herî derve de didin (mînak: Fe: 4s2 3d6 -> Fe2+: 3d6).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u11-twin10",
      "stem": {
        "tr": "Kimya dersinde Modern Atom Teorisi ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Modern Atomic Theory, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Moderne Atomtheorie: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Théorie Atomique Moderne, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Современная теория атома», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"النظرية الذرية الحديثة\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“现代原子论”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Teoriya Modêrn a Atomê\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "d orbitalleri 4. temel enerji düzeyinden itibaren başlar.",
          "en": "d orbitals start from the 4th fundamental energy level.",
          "de": "d-Orbitale beginnen auf dem 4. Grundenergieniveau.",
          "fr": "Les orbitales d partent du 4ème niveau d’énergie fondamental.",
          "ru": "d-орбитали начинаются с 4-го фундаментального энергетического уровня.",
          "ar": "تبدأ المدارات d من مستوى الطاقة الأساسي الرابع.",
          "zh": "d 轨道从第四基本能级开始。",
          "ku": "d orbital ji asta enerjiya bingehîn a 4emîn dest pê dikin."
        },
        {
          "tr": "İzoelektronik katyon ve anyonların yarıçapları birbirine tam eşittir.",
          "en": "The radii of isoelectronic cations and anions are exactly equal.",
          "de": "Die Radien isoelektronischer Kationen und Anionen sind genau gleich.",
          "fr": "Les rayons des cations isoélectroniques et des anions sont exactement égaux.",
          "ru": "Радиусы изоэлектронных катионов и анионов точно равны.",
          "ar": "أنصاف أقطار الكاتيونات والأنيونات متساوية الإلكترون متساوية تمامًا.",
          "zh": "等电子阳离子和阴离子的半径完全相等。",
          "ku": "Radyoya kation û anyonên îzoelektronîk tam wek hev in."
        },
        {
          "tr": "d orbitalleri için ml sadece -1, 0, +1 değerlerini alır.",
          "en": "For d orbitals ml only takes the values ​​-1, 0, +1.",
          "de": "Für d-Orbitale nimmt ml nur die Werte -1, 0, +1 an.",
          "fr": "Pour les orbitales d, ml ne prend que les valeurs -1, 0, +1.",
          "ru": "Для d-орбиталей ml принимает только значения -1, 0, +1.",
          "ar": "بالنسبة للمدارات d، يأخذ ml فقط القيم -1، 0، +1.",
          "zh": "对于d轨道，ml仅取值-1、0、+1。",
          "ku": "Ji bo d orbitals ml tenê nirxan -1, 0, +1 digire."
        },
        {
          "tr": "Aufbau kuralına göre 3d orbitali daima 4s orbitalinden önce doldurulur.",
          "en": "According to the Aufbau rule, the 3d orbital is always filled before the 4s orbital.",
          "de": "Nach der Aufbau-Regel wird das 3d-Orbital immer vor dem 4s-Orbital gefüllt.",
          "fr": "Selon la règle d'Aufbau, l'orbitale 3d est toujours remplie avant l'orbitale 4s.",
          "ru": "Согласно правилу Ауфбау, 3d-орбиталь всегда заполняется раньше 4s-орбитали.",
          "ar": "وفقًا لقاعدة أوفباو، فإن المدار ثلاثي الأبعاد يمتلئ دائمًا قبل المدار 4s.",
          "zh": "根据 Aufbau 规则，3d 轨道总是在 4s 轨道之前被填充。",
          "ku": "Li gorî qaîdeya Aufbau, orbîtala 3d her dem berî orbitala 4s tê dagirtin."
        },
        {
          "tr": "Aynı periyotta iyonlaşma enerjisi \"3 aşağı 5 yukarı\" kuralına göre sıralanır: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.",
          "en": "In the same period, ionization energy is ranked according to the \"3 down, 5 up\" rule: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.",
          "de": "Im gleichen Zeitraum wird die Ionisierungsenergie nach der Regel „3 runter, 5 rauf“ eingestuft: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.",
          "fr": "Au cours de la même période, l'énergie d'ionisation est classée selon la règle « 3 vers le bas, 5 vers le haut » : 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.",
          "ru": "В этот же период энергия ионизации ранжируется по правилу «3 вниз, 5 вверх»: 1А < 3А < 2А < 4А < 6А < 5А < 7А < 8А.",
          "ar": "وفي نفس الفترة، يتم ترتيب طاقة التأين وفقًا لقاعدة \"3 لأسفل، 5 لأعلى\": 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.",
          "zh": "同一时期内，电离能按照“3下5上”的规则排列：1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A。",
          "ku": "Di heman serdemê de, enerjiya iyonîzasyonê li gorî qaîdeya \"3 berjêr, 5 jor\" tê rêz kirin: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Aynı periyotta iyonlaşma enerjisi \"3 aşağı 5 yukarı\" kuralına göre sıralanır: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In the same period, ionization energy is ranked according to the \"3 down, 5 up\" rule: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Im gleichen Zeitraum wird die Ionisierungsenergie nach der Regel „3 runter, 5 rauf“ eingestuft: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Au cours de la même période, l'énergie d'ionisation est classée selon la règle « 3 vers le bas, 5 vers le haut » : 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В этот же период энергия ионизации ранжируется по правилу «3 вниз, 5 вверх»: 1А < 3А < 2А < 4А < 6А < 5А < 7А < 8А.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"وفي نفس الفترة، يتم ترتيب طاقة التأين وفقًا لقاعدة \"3 لأسفل، 5 لأعلى\": 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“同一时期内，电离能按照“3下5上”的规则排列：1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di heman serdemê de, enerjiya iyonîzasyonê li gorî qaîdeya \"3 berjêr, 5 jor\" tê rêz kirin: 1A < 3A < 2A < 4A < 6A < 5A < 7A < 8A.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u11-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Modern Atom Teorisi konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Modern Atomic Theory?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Moderne Atomtheorie zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Théorie Atomique Moderne ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Современная теория атома»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"النظرية الذرية الحديثة\"؟",
        "zh": "根据“现代原子论”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Teoriya Modêrn a Atomê\" de rast e?"
      },
      "options": [
        {
          "tr": "s orbitalleri küresel simetriktir ve her enerji düzeyinde 1 tane (en çok 2 elektron) bulunur.",
          "en": "s orbitals are spherically symmetrical and there is 1 electron (maximum 2 electrons) in each energy level.",
          "de": "s-Orbitale sind sphärisch symmetrisch und in jedem Energieniveau befindet sich 1 Elektron (maximal 2 Elektronen).",
          "fr": "Les orbitales sont à symétrie sphérique et il y a 1 électron (maximum 2 électrons) dans chaque niveau d'énergie.",
          "ru": "s-орбитали сферически симметричны, и на каждом энергетическом уровне находится 1 электрон (максимум 2 электрона).",
          "ar": "مدارات s متناظرة كرويًا ويوجد إلكترون واحد (بحد أقصى إلكترونين) في كل مستوى طاقة.",
          "zh": "s 轨道是球对称的，每个能级有 1 个电子（最多 2 个电子）。",
          "ku": "Orbîtalên s bi sferîk sîmetrîk in û di her asta enerjiyê de 1 elektron (herî zêde 2 elektron) heye."
        },
        {
          "tr": "f orbitallerinde en çok 10 elektron bulunabilir.",
          "en": "There can be a maximum of 10 electrons in f orbitals.",
          "de": "In f-Orbitalen können sich maximal 10 Elektronen befinden.",
          "fr": "Il peut y avoir un maximum de 10 électrons dans les orbitales f.",
          "ru": "На f-орбиталях может быть максимум 10 электронов.",
          "ar": "يمكن أن يكون هناك 10 إلكترونات كحد أقصى في المدارات f.",
          "zh": "f 轨道中最多可以有 10 个电子。",
          "ku": "Di f orbîtalan de herî zêde 10 elektron dikarin hebin."
        },
        {
          "tr": "Baş kuantum sayısı orbitalin uzaydaki yönelimini belirtir.",
          "en": "The principal quantum number specifies the orientation of the orbital in space.",
          "de": "Die Hauptquantenzahl gibt die Orientierung des Orbitals im Raum an.",
          "fr": "Le nombre quantique principal spécifie l'orientation de l'orbitale dans l'espace.",
          "ru": "Главное квантовое число определяет ориентацию орбитали в пространстве.",
          "ar": "يحدد رقم الكم الرئيسي اتجاه المدار في الفضاء.",
          "zh": "主量子数指定了轨道在空间中的方向。",
          "ku": "Jimara kuantûmê ya sereke arastekirina orbîtalê li fezayê diyar dike."
        },
        {
          "tr": "Bir orbitalde aynı spinli iki elektron bulunabilir.",
          "en": "An orbital can contain two electrons with the same spin.",
          "de": "Ein Orbital kann zwei Elektronen mit demselben Spin enthalten.",
          "fr": "Une orbitale peut contenir deux électrons de même spin.",
          "ru": "На орбитали могут находиться два электрона с одинаковым спином.",
          "ar": "يمكن أن يحتوي المدار على إلكترونين لهما نفس الدوران.",
          "zh": "轨道可以包含两个具有相同自旋的电子。",
          "ku": "Orbîtalek dikare du elektronên bi heman spinê hebin."
        },
        {
          "tr": "Elektronlar eş enerjili orbitallere önce zıt spinle çiftler halinde girer.",
          "en": "Electrons first enter orbitals of equal energy in pairs with opposite spin.",
          "de": "Elektronen treten zunächst paarweise mit entgegengesetztem Spin in Orbitale gleicher Energie ein.",
          "fr": "Les électrons entrent d’abord dans des orbitales d’énergie égale par paires de spin opposé.",
          "ru": "Электроны сначала выходят на орбитали равной энергии парами с противоположным спином.",
          "ar": "تدخل الإلكترونات أولًا مدارات ذات طاقة متساوية في أزواج ذات دوران معاكس.",
          "zh": "电子首先成对进入具有相反自旋的等能量轨道。",
          "ku": "Elektron yekem car dikevin orbitalên enerjiyê yên wekhev bi cotek bi spin berevajî."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"s orbitalleri küresel simetriktir ve her enerji düzeyinde 1 tane (en çok 2 elektron) bulunur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"s orbitals are spherically symmetrical and there is 1 electron (maximum 2 electrons) in each energy level.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"s-Orbitale sind sphärisch symmetrisch und in jedem Energieniveau befindet sich 1 Elektron (maximal 2 Elektronen).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les orbitales sont à symétrie sphérique et il y a 1 électron (maximum 2 électrons) dans chaque niveau d'énergie.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «s-орбитали сферически симметричны, и на каждом энергетическом уровне находится 1 электрон (максимум 2 электрона).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"مدارات s متناظرة كرويًا ويوجد إلكترون واحد (بحد أقصى إلكترونين) في كل مستوى طاقة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“s 轨道是球对称的，每个能级有 1 个电子（最多 2 个电子）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Orbîtalên s bi sferîk sîmetrîk in û di her asta enerjiyê de 1 elektron (herî zêde 2 elektron) heye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u11-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Modern Atom Teorisi sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Modern Atomic Theory, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Moderne Atomtheorie: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Théorie Atomique Moderne, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Современная теория атома», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"النظرية الذرية الحديثة\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“现代原子论”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Teoriya Modêrn a Atomê\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "p4 ile biten elektron dizilimi küresel simetriktir.",
          "en": "The electron configuration ending in p4 is spherically symmetric.",
          "de": "Die Elektronenkonfiguration, die mit p4 endet, ist sphärisch symmetrisch.",
          "fr": "La configuration électronique se terminant par p4 est à symétrie sphérique.",
          "ru": "Электронная конфигурация, оканчивающаяся на p4, сферически симметрична.",
          "ar": "تكوين الإلكترون المنتهي بـ p4 متماثل كرويًا.",
          "zh": "以 p4 结尾的电子构型是球对称的。",
          "ku": "Veavakirina elektronê ku bi p4-ê diqede, bi rengek simetrîk e."
        },
        {
          "tr": "p orbitalleri n = 2'den başlar, halter şeklindedir ve 3 tanedir (px, py, pz, en çok 6 elektron).",
          "en": "p orbitals start from n = 2, are dumbbell-shaped and consist of 3 (px, py, pz, maximum 6 electrons).",
          "de": "p-Orbitale beginnen bei n = 2, sind hantelförmig und bestehen aus 3 (px, py, pz, maximal 6 Elektronen).",
          "fr": "Les orbitales p partent de n = 2, sont en forme d'haltère et se composent de 3 (px, py, pz, maximum 6 électrons).",
          "ru": "p-орбитали начинаются с n = 2, имеют форму гантели и состоят из 3 (px, py, pz, максимум 6 электронов).",
          "ar": "تبدأ المدارات p من n = 2، وهي على شكل دمبل وتتكون من 3 (px، py، pz، بحد أقصى 6 إلكترونات).",
          "zh": "p 轨道从 n = 2 开始，呈哑铃形，由 3 个（px、py、pz，最多 6 个电子）组成。",
          "ku": "orbîtalên p ji n = 2 dest pê dikin, teşe dumbbell in û ji 3 (px, py, pz, herî zêde 6 elektronan) pêk tên."
        },
        {
          "tr": "l = 2 açısal momentum sayısı p orbitalini temsil eder.",
          "en": "The angular momentum number l = 2 represents the p orbital.",
          "de": "Die Drehimpulszahl l = 2 repräsentiert das p-Orbital.",
          "fr": "Le nombre de moment cinétique l = 2 représente l'orbitale p.",
          "ru": "Число углового момента l = 2 представляет p-орбиталь.",
          "ar": "يمثل عدد الزخم الزاوي l = 2 المدار p.",
          "zh": "角动量数 l = 2 代表 p 轨道。",
          "ku": "Hejmara leza goşeyê l = 2 orbîtala p nîşan dide."
        },
        {
          "tr": "Pauli ilkesine göre bir orbitale zıt spinli 3 elektron yerleşebilir.",
          "en": "According to the Pauli principle, three electrons with opposite spins can occupy an orbital.",
          "de": "Nach dem Pauli-Prinzip können drei Elektronen mit entgegengesetztem Spin ein Orbital besetzen.",
          "fr": "Selon le principe de Pauli, trois électrons de spins opposés peuvent occuper une orbitale.",
          "ru": "Согласно принципу Паули, три электрона с противоположными спинами могут занимать орбиталь.",
          "ar": "وفقًا لمبدأ باولي، يمكن لثلاثة إلكترونات ذات دوران متضاد أن تشغل مدارًا.",
          "zh": "根据泡利原理，三个自旋相反的电子可以占据一个轨道。",
          "ku": "Li gorî prensîba Pauli, sê elektronên bi spinên berevajî dikarin orbitalek dagir bikin."
        },
        {
          "tr": "24Cr elementi elektron diziliminde [Ar] 4s2 3d4 şeklinde biter.",
          "en": "The 24Cr element ends in the electron configuration as [Ar] 4s2 3d4.",
          "de": "Das 24Cr-Element endet in der Elektronenkonfiguration als [Ar] 4s2 3d4.",
          "fr": "L'élément 24Cr se termine dans la configuration électronique comme [Ar] 4s2 3d4.",
          "ru": "Элемент 24Cr заканчивается в электронной конфигурации как [Ar] 4s2 3d4.",
          "ar": "وينتهي عنصر 24Cr في الترتيب الإلكتروني كـ [Ar] 4s2 3d4.",
          "zh": "24Cr 元素的电子构型为 [Ar] 4s2 3d4。",
          "ku": "Elementa 24Cr di veavakirina elektronê de wekî [Ar] 4s2 3d4 bi dawî dibe."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"p orbitalleri n = 2'den başlar, halter şeklindedir ve 3 tanedir (px, py, pz, en çok 6 elektron).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"p orbitals start from n = 2, are dumbbell-shaped and consist of 3 (px, py, pz, maximum 6 electrons).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"p-Orbitale beginnen bei n = 2, sind hantelförmig und bestehen aus 3 (px, py, pz, maximal 6 Elektronen).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les orbitales p partent de n = 2, sont en forme d'haltère et se composent de 3 (px, py, pz, maximum 6 électrons).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «p-орбитали начинаются с n = 2, имеют форму гантели и состоят из 3 (px, py, pz, максимум 6 электронов).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تبدأ المدارات p من n = 2، وهي على شكل دمبل وتتكون من 3 (px، py، pz، بحد أقصى 6 إلكترونات).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“p 轨道从 n = 2 开始，呈哑铃形，由 3 个（px、py、pz，最多 6 个电子）组成。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"orbîtalên p ji n = 2 dest pê dikin, teşe dumbbell in û ji 3 (px, py, pz, herî zêde 6 elektronan) pêk tên.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u11-twin13",
      "stem": {
        "tr": "Aşağıda Modern Atom Teorisi ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Modern Atomic Theory, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Moderne Atomtheorie: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Théorie Atomique Moderne, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Современная теория атома», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"النظرية الذرية الحديثة\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“现代原子论”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Teoriya Modêrn a Atomê\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "İzoelektronik katyon ve anyonların yarıçapları birbirine tam eşittir.",
          "en": "The radii of isoelectronic cations and anions are exactly equal.",
          "de": "Die Radien isoelektronischer Kationen und Anionen sind genau gleich.",
          "fr": "Les rayons des cations isoélectroniques et des anions sont exactement égaux.",
          "ru": "Радиусы изоэлектронных катионов и анионов точно равны.",
          "ar": "أنصاف أقطار الكاتيونات والأنيونات متساوية الإلكترون متساوية تمامًا.",
          "zh": "等电子阳离子和阴离子的半径完全相等。",
          "ku": "Radyoya kation û anyonên îzoelektronîk tam wek hev in."
        },
        {
          "tr": "d orbitalleri için ml sadece -1, 0, +1 değerlerini alır.",
          "en": "For d orbitals ml only takes the values ​​-1, 0, +1.",
          "de": "Für d-Orbitale nimmt ml nur die Werte -1, 0, +1 an.",
          "fr": "Pour les orbitales d, ml ne prend que les valeurs -1, 0, +1.",
          "ru": "Для d-орбиталей ml принимает только значения -1, 0, +1.",
          "ar": "بالنسبة للمدارات d، يأخذ ml فقط القيم -1، 0، +1.",
          "zh": "对于d轨道，ml仅取值-1、0、+1。",
          "ku": "Ji bo d orbitals ml tenê nirxan -1, 0, +1 digire."
        },
        {
          "tr": "d orbitalleri n = 3'ten başlar, 5 tanedir ve en çok 10 elektron alır.",
          "en": "d orbitals start from n = 3, there are 5 and can take up to 10 electrons.",
          "de": "d-Orbitale beginnen bei n = 3, es gibt 5 und können bis zu 10 Elektronen aufnehmen.",
          "fr": "Les orbitales d partent de n = 3, il y en a 5 et peuvent prendre jusqu'à 10 électrons.",
          "ru": "d-орбитали начинаются с n = 3, их 5, и они могут занимать до 10 электронов.",
          "ar": "تبدأ المدارات d من n = 3، وهناك 5 ويمكن أن تحتوي على ما يصل إلى 10 إلكترونات.",
          "zh": "d 轨道从 n = 3 开始，共有 5 个，最多可容纳 10 个电子。",
          "ku": "d orbital ji n = 3 dest pê dikin, 5 hene û dikarin heta 10 elektronan bigirin."
        },
        {
          "tr": "Aufbau kuralına göre 3d orbitali daima 4s orbitalinden önce doldurulur.",
          "en": "According to the Aufbau rule, the 3d orbital is always filled before the 4s orbital.",
          "de": "Nach der Aufbau-Regel wird das 3d-Orbital immer vor dem 4s-Orbital gefüllt.",
          "fr": "Selon la règle d'Aufbau, l'orbitale 3d est toujours remplie avant l'orbitale 4s.",
          "ru": "Согласно правилу Ауфбау, 3d-орбиталь всегда заполняется раньше 4s-орбитали.",
          "ar": "وفقًا لقاعدة أوفباو، فإن المدار ثلاثي الأبعاد يمتلئ دائمًا قبل المدار 4s.",
          "zh": "根据 Aufbau 规则，3d 轨道总是在 4s 轨道之前被填充。",
          "ku": "Li gorî qaîdeya Aufbau, orbîtala 3d her dem berî orbitala 4s tê dagirtin."
        },
        {
          "tr": "Fe atomu iyonlaşırken elektron önce 3d orbitalinden kopar.",
          "en": "While the Fe atom is ionized, the electron first breaks away from the 3d orbital.",
          "de": "Während das Fe-Atom ionisiert wird, löst sich zunächst das Elektron aus dem 3d-Orbital.",
          "fr": "Pendant que l’atome de Fe est ionisé, l’électron se détache d’abord de l’orbitale 3D.",
          "ru": "Пока атом Fe ионизируется, электрон сначала отрывается от 3d-орбитали.",
          "ar": "أثناء تأين ذرة الحديد، ينفصل الإلكترون أولاً عن المدار ثلاثي الأبعاد.",
          "zh": "当 Fe 原子被电离时，电子首先脱离 3d 轨道。",
          "ku": "Dema ku atoma Fe îyonîze dibe, elektron pêşî ji orbitala 3d vediqete."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"d orbitalleri n = 3'ten başlar, 5 tanedir ve en çok 10 elektron alır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"d orbitals start from n = 3, there are 5 and can take up to 10 electrons.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"d-Orbitale beginnen bei n = 3, es gibt 5 und können bis zu 10 Elektronen aufnehmen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les orbitales d partent de n = 3, il y en a 5 et peuvent prendre jusqu'à 10 électrons.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «d-орбитали начинаются с n = 3, их 5, и они могут занимать до 10 электронов.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تبدأ المدارات d من n = 3، وهناك 5 ويمكن أن تحتوي على ما يصل إلى 10 إلكترونات.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“d 轨道从 n = 3 开始，共有 5 个，最多可容纳 10 个电子。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"d orbital ji n = 3 dest pê dikin, 5 hene û dikarin heta 10 elektronan bigirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u11-twin14",
      "stem": {
        "tr": "Modern Atom Teorisi konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Modern Atomic Theory, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Moderne Atomtheorie: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Théorie Atomique Moderne, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Современная теория атома», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"النظرية الذرية الحديثة\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“现代原子论”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Teoriya Modêrn a Atomê\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Baş kuantum sayısı orbitalin uzaydaki yönelimini belirtir.",
          "en": "The principal quantum number specifies the orientation of the orbital in space.",
          "de": "Die Hauptquantenzahl gibt die Orientierung des Orbitals im Raum an.",
          "fr": "Le nombre quantique principal spécifie l'orientation de l'orbitale dans l'espace.",
          "ru": "Главное квантовое число определяет ориентацию орбитали в пространстве.",
          "ar": "يحدد رقم الكم الرئيسي اتجاه المدار في الفضاء.",
          "zh": "主量子数指定了轨道在空间中的方向。",
          "ku": "Jimara kuantûmê ya sereke arastekirina orbîtalê li fezayê diyar dike."
        },
        {
          "tr": "Bir orbitalde aynı spinli iki elektron bulunabilir.",
          "en": "An orbital can contain two electrons with the same spin.",
          "de": "Ein Orbital kann zwei Elektronen mit demselben Spin enthalten.",
          "fr": "Une orbitale peut contenir deux électrons de même spin.",
          "ru": "На орбитали могут находиться два электрона с одинаковым спином.",
          "ar": "يمكن أن يحتوي المدار على إلكترونين لهما نفس الدوران.",
          "zh": "轨道可以包含两个具有相同自旋的电子。",
          "ku": "Orbîtalek dikare du elektronên bi heman spinê hebin."
        },
        {
          "tr": "Elektronlar eş enerjili orbitallere önce zıt spinle çiftler halinde girer.",
          "en": "Electrons first enter orbitals of equal energy in pairs with opposite spin.",
          "de": "Elektronen treten zunächst paarweise mit entgegengesetztem Spin in Orbitale gleicher Energie ein.",
          "fr": "Les électrons entrent d’abord dans des orbitales d’énergie égale par paires de spin opposé.",
          "ru": "Электроны сначала выходят на орбитали равной энергии парами с противоположным спином.",
          "ar": "تدخل الإلكترونات أولًا مدارات ذات طاقة متساوية في أزواج ذات دوران معاكس.",
          "zh": "电子首先成对进入具有相反自旋的等能量轨道。",
          "ku": "Elektron yekem car dikevin orbitalên enerjiyê yên wekhev bi cotek bi spin berevajî."
        },
        {
          "tr": "f orbitalleri n = 4'ten başlar, 7 tanedir ve en çok 14 elektron alır.",
          "en": "f orbitals start from n = 4, there are 7 in number and can take up to 14 electrons.",
          "de": "f-Orbitale beginnen bei n = 4, es gibt 7 an der Zahl und können bis zu 14 Elektronen aufnehmen.",
          "fr": "Les orbitales f partent de n = 4, elles sont au nombre de 7 et peuvent prendre jusqu'à 14 électrons.",
          "ru": "f-орбитали начинаются с n = 4, их 7, и они могут принимать до 14 электронов.",
          "ar": "تبدأ المدارات f من n = 4، ويبلغ عددها 7 ويمكن أن تحتوي على ما يصل إلى 14 إلكترونًا.",
          "zh": "f 轨道从 n = 4 开始，共有 7 个，最多可容纳 14 个电子。",
          "ku": "f orbitals ji n = 4 dest pê dikin, 7 hene û dikarin heta 14 elektronan bigirin."
        },
        {
          "tr": "Aynı periyotta 3A grubunun iyonlaşma enerjisi 2A grubundan büyüktür.",
          "en": "In the same period, the ionization energy of the 3A group is greater than that of the 2A group.",
          "de": "Im gleichen Zeitraum ist die Ionisierungsenergie der 3A-Gruppe größer als die der 2A-Gruppe.",
          "fr": "Dans la même période, l'énergie d'ionisation du groupe 3A est supérieure à celle du groupe 2A.",
          "ru": "В этот же период энергия ионизации группы 3А больше, чем у группы 2А.",
          "ar": "وفي نفس الفترة، تكون طاقة التأين للمجموعة 3A أكبر من طاقة التأين للمجموعة 2A.",
          "zh": "同一时期，3A基团的电离能大于2A基团的电离能。",
          "ku": "Di heman serdemê de, enerjiya iyonîzasyona koma 3A ji ya koma 2A mezintir e."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"f orbitalleri n = 4'ten başlar, 7 tanedir ve en çok 14 elektron alır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"f orbitals start from n = 4, there are 7 in number and can take up to 14 electrons.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"f-Orbitale beginnen bei n = 4, es gibt 7 an der Zahl und können bis zu 14 Elektronen aufnehmen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les orbitales f partent de n = 4, elles sont au nombre de 7 et peuvent prendre jusqu'à 14 électrons.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «f-орбитали начинаются с n = 4, их 7, и они могут принимать до 14 электронов.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تبدأ المدارات f من n = 4، ويبلغ عددها 7 ويمكن أن تحتوي على ما يصل إلى 14 إلكترونًا.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“f 轨道从 n = 4 开始，共有 7 个，最多可容纳 14 个电子。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"f orbitals ji n = 4 dest pê dikin, 7 hene û dikarin heta 14 elektronan bigirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u11-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Modern Atom Teorisi ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Modern Atomic Theory, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Moderne Atomtheorie: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Théorie Atomique Moderne, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Современная теория атома», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"النظرية الذرية الحديثة\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“现代原子论”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Teoriya Modêrn a Atomê\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "l = 2 açısal momentum sayısı p orbitalini temsil eder.",
          "en": "The angular momentum number l = 2 represents the p orbital.",
          "de": "Die Drehimpulszahl l = 2 repräsentiert das p-Orbital.",
          "fr": "Le nombre de moment cinétique l = 2 représente l'orbitale p.",
          "ru": "Число углового момента l = 2 представляет p-орбиталь.",
          "ar": "يمثل عدد الزخم الزاوي l = 2 المدار p.",
          "zh": "角动量数 l = 2 代表 p 轨道。",
          "ku": "Hejmara leza goşeyê l = 2 orbîtala p nîşan dide."
        },
        {
          "tr": "Pauli ilkesine göre bir orbitale zıt spinli 3 elektron yerleşebilir.",
          "en": "According to the Pauli principle, three electrons with opposite spins can occupy an orbital.",
          "de": "Nach dem Pauli-Prinzip können drei Elektronen mit entgegengesetztem Spin ein Orbital besetzen.",
          "fr": "Selon le principe de Pauli, trois électrons de spins opposés peuvent occuper une orbitale.",
          "ru": "Согласно принципу Паули, три электрона с противоположными спинами могут занимать орбиталь.",
          "ar": "وفقًا لمبدأ باولي، يمكن لثلاثة إلكترونات ذات دوران متضاد أن تشغل مدارًا.",
          "zh": "根据泡利原理，三个自旋相反的电子可以占据一个轨道。",
          "ku": "Li gorî prensîba Pauli, sê elektronên bi spinên berevajî dikarin orbitalek dagir bikin."
        },
        {
          "tr": "24Cr elementi elektron diziliminde [Ar] 4s2 3d4 şeklinde biter.",
          "en": "The 24Cr element ends in the electron configuration as [Ar] 4s2 3d4.",
          "de": "Das 24Cr-Element endet in der Elektronenkonfiguration als [Ar] 4s2 3d4.",
          "fr": "L'élément 24Cr se termine dans la configuration électronique comme [Ar] 4s2 3d4.",
          "ru": "Элемент 24Cr заканчивается в электронной конфигурации как [Ar] 4s2 3d4.",
          "ar": "وينتهي عنصر 24Cr في الترتيب الإلكتروني كـ [Ar] 4s2 3d4.",
          "zh": "24Cr 元素的电子构型为 [Ar] 4s2 3d4。",
          "ku": "Elementa 24Cr di veavakirina elektronê de wekî [Ar] 4s2 3d4 bi dawî dibe."
        },
        {
          "tr": "s orbitalleri sadece n = 2'den itibaren başlar.",
          "en": "s orbitals start only from n = 2.",
          "de": "s-Orbitale beginnen erst ab n = 2.",
          "fr": "Les orbitales s commencent uniquement à partir de n = 2.",
          "ru": "s-орбитали начинаются только с n = 2.",
          "ar": "تبدأ مدارات s فقط من n = 2.",
          "zh": "s 轨道仅从 n = 2 开始。",
          "ku": "Orbitalên s tenê ji n = 2 dest pê dikin."
        },
        {
          "tr": "Son orbitali tam dolu veya yarı dolu olan atomlar küresel simetri özelliği gösterir ve daha kararlıdır.",
          "en": "Atoms with a fully filled or half filled last orbital show spherical symmetry and are more stable.",
          "de": "Atome mit einem vollständig oder halbgefüllten letzten Orbital weisen eine sphärische Symmetrie auf und sind stabiler.",
          "fr": "Les atomes dont la dernière orbitale est entièrement remplie ou à moitié remplie présentent une symétrie sphérique et sont plus stables.",
          "ru": "Атомы с полностью или наполовину заполненной последней орбиталью обладают сферической симметрией и более стабильны.",
          "ar": "الذرات ذات المدار الأخير المملوء بالكامل أو نصف المملوء تظهر تناظرًا كرويًا وتكون أكثر استقرارًا.",
          "zh": "最后轨道完全充满或半充满的原子表现出球对称性并且更稳定。",
          "ku": "Atomên bi orbîtala paşîn a bi tevahî dagirtî an jî nîv dagirtî hevrehmiya ferîkî nîşan didin û aramtir in."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Son orbitali tam dolu veya yarı dolu olan atomlar küresel simetri özelliği gösterir ve daha kararlıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Atoms with a fully filled or half filled last orbital show spherical symmetry and are more stable.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Atome mit einem vollständig oder halbgefüllten letzten Orbital weisen eine sphärische Symmetrie auf und sind stabiler.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les atomes dont la dernière orbitale est entièrement remplie ou à moitié remplie présentent une symétrie sphérique et sont plus stables.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Атомы с полностью или наполовину заполненной последней орбиталью обладают сферической симметрией и более стабильны.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الذرات ذات المدار الأخير المملوء بالكامل أو نصف المملوء تظهر تناظرًا كرويًا وتكون أكثر استقرارًا.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“最后轨道完全充满或半充满的原子表现出球对称性并且更稳定。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Atomên bi orbîtala paşîn a bi tevahî dagirtî an jî nîv dagirtî hevrehmiya ferîkî nîşan didin û aramtir in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u11-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Modern Atom Teorisi konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Modern Atomic Theory, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Moderne Atomtheorie die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Théorie Atomique Moderne, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Современная теория атома», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"النظرية الذرية الحديثة\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“现代原子论”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Teoriya Modêrn a Atomê\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "İzoelektronik taneciklerde proton sayısı büyük olanın elektron başına düşen çekim kuvveti daha büyüktür ve yarıçapı küçüktür.",
          "en": "In isoelectronic particles, the one with the larger number of protons has a greater attractive force per electron and a smaller radius.",
          "de": "Bei isoelektronischen Teilchen hat dasjenige mit der größeren Anzahl an Protonen eine größere Anziehungskraft pro Elektron und einen kleineren Radius.",
          "fr": "Dans les particules isoélectroniques, celle qui possède le plus grand nombre de protons a une plus grande force d’attraction par électron et un rayon plus petit.",
          "ru": "В изоэлектронных частицах тот, у кого больше протонов, имеет большую силу притяжения на электрон и меньший радиус.",
          "ar": "في الجسيمات متساوية الإلكترون، يكون للجسيم الذي يحتوي على عدد أكبر من البروتونات قوة جذب أكبر لكل إلكترون ونصف قطر أصغر.",
          "zh": "在等电子粒子中，质子数较多的粒子对每个电子的吸引力较大，半径较小。",
          "ku": "Di keriyên îzoelektronîk de, ya ku jimara protonên wê mezintir e, ji her elektronekê re hêzek balkêş a mezin û tîrêjek piçûktir heye."
        },
        {
          "tr": "d orbitalleri için ml sadece -1, 0, +1 değerlerini alır.",
          "en": "For d orbitals ml only takes the values ​​-1, 0, +1.",
          "de": "Für d-Orbitale nimmt ml nur die Werte -1, 0, +1 an.",
          "fr": "Pour les orbitales d, ml ne prend que les valeurs -1, 0, +1.",
          "ru": "Для d-орбиталей ml принимает только значения -1, 0, +1.",
          "ar": "بالنسبة للمدارات d، يأخذ ml فقط القيم -1، 0، +1.",
          "zh": "对于d轨道，ml仅取值-1、0、+1。",
          "ku": "Ji bo d orbitals ml tenê nirxan -1, 0, +1 digire."
        },
        {
          "tr": "Aufbau kuralına göre 3d orbitali daima 4s orbitalinden önce doldurulur.",
          "en": "According to the Aufbau rule, the 3d orbital is always filled before the 4s orbital.",
          "de": "Nach der Aufbau-Regel wird das 3d-Orbital immer vor dem 4s-Orbital gefüllt.",
          "fr": "Selon la règle d'Aufbau, l'orbitale 3d est toujours remplie avant l'orbitale 4s.",
          "ru": "Согласно правилу Ауфбау, 3d-орбиталь всегда заполняется раньше 4s-орбитали.",
          "ar": "وفقًا لقاعدة أوفباو، فإن المدار ثلاثي الأبعاد يمتلئ دائمًا قبل المدار 4s.",
          "zh": "根据 Aufbau 规则，3d 轨道总是在 4s 轨道之前被填充。",
          "ku": "Li gorî qaîdeya Aufbau, orbîtala 3d her dem berî orbitala 4s tê dagirtin."
        },
        {
          "tr": "Fe atomu iyonlaşırken elektron önce 3d orbitalinden kopar.",
          "en": "While the Fe atom is ionized, the electron first breaks away from the 3d orbital.",
          "de": "Während das Fe-Atom ionisiert wird, löst sich zunächst das Elektron aus dem 3d-Orbital.",
          "fr": "Pendant que l’atome de Fe est ionisé, l’électron se détache d’abord de l’orbitale 3D.",
          "ru": "Пока атом Fe ионизируется, электрон сначала отрывается от 3d-орбитали.",
          "ar": "أثناء تأين ذرة الحديد، ينفصل الإلكترون أولاً عن المدار ثلاثي الأبعاد.",
          "zh": "当 Fe 原子被电离时，电子首先脱离 3d 轨道。",
          "ku": "Dema ku atoma Fe îyonîze dibe, elektron pêşî ji orbitala 3d vediqete."
        },
        {
          "tr": "1. temel enerji düzeyinde 3 adet p orbitali bulunur.",
          "en": "There are 3 p orbitals in the 1st fundamental energy level.",
          "de": "Im 1. Grundenergieniveau gibt es 3 p-Orbitale.",
          "fr": "Il y a 3 orbitales p dans le 1er niveau d'énergie fondamentale.",
          "ru": "На первом фундаментальном энергетическом уровне имеется 3 p-орбитали.",
          "ar": "هناك 3 مدارات p في مستوى الطاقة الأساسي الأول.",
          "zh": "第一基本能级有 3 个 p 轨道。",
          "ku": "Di asta enerjiya bingehîn a 1emîn de 3 p orbîtal hene."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"İzoelektronik taneciklerde proton sayısı büyük olanın elektron başına düşen çekim kuvveti daha büyüktür ve yarıçapı küçüktür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In isoelectronic particles, the one with the larger number of protons has a greater attractive force per electron and a smaller radius.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei isoelektronischen Teilchen hat dasjenige mit der größeren Anzahl an Protonen eine größere Anziehungskraft pro Elektron und einen kleineren Radius.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans les particules isoélectroniques, celle qui possède le plus grand nombre de protons a une plus grande force d’attraction par électron et un rayon plus petit.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В изоэлектронных частицах тот, у кого больше протонов, имеет большую силу притяжения на электрон и меньший радиус.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في الجسيمات متساوية الإلكترون، يكون للجسيم الذي يحتوي على عدد أكبر من البروتونات قوة جذب أكبر لكل إلكترون ونصف قطر أصغر.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在等电子粒子中，质子数较多的粒子对每个电子的吸引力较大，半径较小。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di keriyên îzoelektronîk de, ya ku jimara protonên wê mezintir e, ji her elektronekê re hêzek balkêş a mezin û tîrêjek piçûktir heye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit11;
