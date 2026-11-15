import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit19: ChemistryUnitSeedData = {
  "id": "u19",
  "order": 19,
  "exam": "AYT",
  "grade": 11,
  "title": {
    "tr": "Asit-Baz Dengesi ve Titrasyon",
    "en": "Acid-Base Equilibrium & Titration",
    "de": "Säure-Base-Gleichgewicht & Titration",
    "fr": "Équilibre Acide-Base & Titrage",
    "ru": "Кислотно-основное равновесие и титрование",
    "ar": "الاتزان الحمضي القاعدي والمعايرة",
    "zh": "酸碱平衡与滴定",
    "ku": "Hevsengiya Asîd-Baz û Tîtrakirin"
  },
  "subtitle": {
    "tr": "pH, pOH, Ka, Kb, Tampon ve Titrasyon Eğrileri",
    "en": "Weak Acids, Buffer Solutions & Equivalence",
    "de": "pH-, pOH-, Ka-, Kb-, Puffer- und Titrationskurven",
    "fr": "Courbes pH, pOH, Ka, Kb, tampon et titrage",
    "ru": "pH, pOH, Ka, Kb, буферные растворы и кривые титрования",
    "ar": "منحنيات pH وpOH وKa وKb والمخزن المؤقت والمعايرة",
    "zh": "pH、pOH、Ka、Kb、缓冲溶液和滴定曲线",
    "ku": "PH, pOH, Ka, Kb, Tampon û Kûrên Tîtrasyonê"
  },
  "facts": [
    {
      "id": "u19-f01",
      "fact": {
        "tr": "25 °C'de suyun otoiyonizasyon sabiti Ksu = [H+] * [OH-] = 1,0x10^-14'tür; pH + pOH = 14'tür.",
        "en": "The autoionization constant of water at 25 °C is Kw = [H+] * [OH-] = 1.0x10^-14; pH + pOH = 14.",
        "de": "Die Autoionisierungskonstante von Wasser bei 25 °C beträgt Kw = [H+] * [OH-] = 1,0x10^-14; pH + pOH = 14.",
        "fr": "La constante d'autoionisation de l'eau à 25 °C est Ke = [H+] * [OH-] = 1,0x10^-14 ; pH + pOH = 14.",
        "ru": "При 25 °C ионное произведение воды Kw = [H+] * [OH-] = 1,0x10^-14; pH + pOH = 14.",
        "ar": "ثابت التأين الذاتي للماء عند 25 °C هو Kw = [H+] * [OH-] = 1.0x10^-14؛ و pH + pOH = 14.",
        "zh": "25 °C 时，水的离子积 Kw = [H+] * [OH-] = 1.0x10^-14；pH + pOH = 14。",
        "ku": "Hêmana otoyonîzasyona avê di 25 °C de Ksu = [H+] * [OH-] = 1,0x10^-14 e; pH + pOH = 14."
      },
      "trap": {
        "tr": "Her sıcaklıkta pH + pOH toplamı mutlaka 14'tür.",
        "en": "The sum of pH + pOH at every temperature is definitely 14.",
        "de": "Die Summe aus pH + pOH beträgt bei jeder Temperatur definitiv 14.",
        "fr": "La somme pH + pOH à chaque température est définitivement de 14.",
        "ru": "При любой температуре сумма pH + pOH обязательно равна 14.",
        "ar": "مجموع pH + pOH يساوي 14 بالضرورة عند أي درجة حرارة.",
        "zh": "在任何温度下，pH + pOH 都一定等于 14。",
        "ku": "Di her germahiyê de hejmara pH + pOH bê guman 14 e."
      },
      "whyTrapIsFalse": {
        "tr": "pH + pOH = 14 yalnızca Ksu = 1,0x10^-14 olan 25 °C için geçerlidir; Ksu sıcaklıkla değiştiği için toplam da değişir (ör. sıcak suda 14'ten küçüktür).",
        "en": "pH + pOH = 14 holds only at 25 °C, where Kw = 1.0x10^-14; since Kw changes with temperature, the sum changes too (e.g. it is below 14 in hot water).",
        "de": "pH + pOH = 14 gilt nur bei 25 °C, wo Kw = 1,0x10^-14 ist; da sich Kw mit der Temperatur ändert, ändert sich auch die Summe (in heißem Wasser ist sie kleiner als 14).",
        "fr": "pH + pOH = 14 n’est valable qu’à 25 °C, où Ke = 1,0x10^-14 ; comme Ke varie avec la température, la somme varie aussi (elle est inférieure à 14 dans l’eau chaude).",
        "ru": "Равенство pH + pOH = 14 выполняется только при 25 °C, когда Kw = 1,0x10^-14; Kw зависит от температуры, поэтому меняется и сумма (например, в горячей воде она меньше 14).",
        "ar": "العلاقة pH + pOH = 14 صحيحة عند 25 °C فقط حيث Kw = 1.0x10^-14؛ ولأن Kw يتغير مع درجة الحرارة يتغير المجموع أيضًا (يكون أقل من 14 في الماء الساخن).",
        "zh": "pH + pOH = 14 仅在 25 °C(Kw = 1.0x10^-14)时成立；Kw 随温度变化，因此两者之和也随之变化(如热水中小于 14)。",
        "ku": "pH + pOH = 14 tenê li 25 °C derbas dibe, ku li wir Ksu = 1,0x10^-14 e; ji ber ku Ksu bi germahiyê diguhere, kom jî diguhere (di ava germ de ji 14 kêmtir e)."
      },
      "osymTip": {
        "tr": "Ksu sıcaklık arttıkça büyür (endotermiktir), bu yüzden sıcaklıkla pH+pOH değişir!",
        "en": "Kw increases as temperature increases (autoionization is endothermic), so pH + pOH changes with temperature!",
        "de": "Kw nimmt mit steigender Temperatur zu (die Autoprotolyse ist endotherm), daher ändert sich pH + pOH mit der Temperatur!",
        "fr": "Ke augmente avec la température (l'autoprotolyse est endothermique), donc pH + pOH varie avec la température !",
        "ru": "Kw растёт с повышением температуры (диссоциация воды — эндотермический процесс), поэтому сумма pH + pOH зависит от температуры!",
        "ar": "يزداد Kw بارتفاع درجة الحرارة (التأين الذاتي ماص للحرارة)، لذلك يتغير مجموع pH + pOH مع درجة الحرارة!",
        "zh": "Kw 随温度升高而增大（水的电离是吸热过程），因此 pH + pOH 随温度而变！",
        "ku": "Ksu bi zêdebûna germahiyê mezin dibe (otoiyonîzasyon endotermîk e), ji ber vê pH + pOH bi germahiyê diguhere!"
      }
    },
    {
      "id": "u19-f02",
      "fact": {
        "tr": "Kuvvetli asit ve bazlar suda %100 iyonlaşırken, zayıf asit ve bazlar kısmen iyonlaşarak denge kurar (Ka, Kb).",
        "en": "While strong acids and bases ionize 100% in water, weak acids and bases partially ionize and establish equilibrium (Ka, Kb).",
        "de": "Während starke Säuren und Basen in Wasser zu 100 % ionisieren, ionisieren schwache Säuren und Basen teilweise und stellen ein Gleichgewicht her (Ka, Kb).",
        "fr": "Alors que les acides et bases forts s'ionisent à 100 % dans l'eau, les acides et bases faibles s'ionisent partiellement et établissent l'équilibre (Ka, Kb).",
        "ru": "Сильные кислоты и основания диссоциируют в воде на 100 %, а слабые кислоты и основания — лишь частично, с установлением равновесия (Ka, Kb).",
        "ar": "بينما تتأين الأحماض والقواعد القوية بنسبة 100% في الماء، تتأين الأحماض والقواعد الضعيفة جزئيًا وتحقق التوازن (Ka, Kb).",
        "zh": "强酸和强碱在水中 100% 电离，而弱酸和弱碱只部分电离并建立平衡(Ka、Kb)。",
        "ku": "Dema ku asîd û bazên xurt di avê de %100 îyonîze dibin, asîd û bazên qels qismî iyon dibin û hevsengiyê saz dikin (Ka, Kb)."
      },
      "trap": {
        "tr": "Zayıf asitler suda hiç iyonlaşmaz.",
        "en": "Weak acids do not ionize at all in water.",
        "de": "Schwache Säuren ionisieren in Wasser überhaupt nicht.",
        "fr": "Les acides faibles ne s'ionisent pas du tout dans l'eau.",
        "ru": "Слабые кислоты в воде совсем не диссоциируют.",
        "ar": "الأحماض الضعيفة لا تتأين على الإطلاق في الماء.",
        "zh": "弱酸在水中根本不电离。",
        "ku": "Asîdên qels di avê de qet îyonîze nabin."
      },
      "whyTrapIsFalse": {
        "tr": "Zayıf asitler de suda iyonlaşır, ancak yalnızca bir kısmı iyonlaşıp denge kurar. Hiç iyonlaşmasalardı Ka değerleri sıfır olur, çözeltileri asidik özellik göstermezdi.",
        "en": "Weak acids do ionize in water, but only partially, establishing an equilibrium. If they did not ionize at all, their Ka would be zero and their solutions would not be acidic.",
        "de": "Auch schwache Säuren protolysieren in Wasser, allerdings nur teilweise unter Gleichgewichtseinstellung. Würden sie gar nicht protolysieren, wäre Ka null und ihre Lösungen wären nicht sauer.",
        "fr": "Les acides faibles s’ionisent bien dans l’eau, mais seulement partiellement, en établissant un équilibre. S’ils ne s’ionisaient pas du tout, leur Ka serait nul et leurs solutions ne seraient pas acides.",
        "ru": "Слабые кислоты тоже диссоциируют в воде, но лишь частично, с установлением равновесия. Если бы они совсем не диссоциировали, Ka была бы равна нулю, а их растворы не проявляли бы кислотных свойств.",
        "ar": "الأحماض الضعيفة تتأين في الماء أيضًا لكن جزئيًا فقط مكوّنة اتزانًا. ولو لم تتأين إطلاقًا لكانت قيمة Ka صفرًا ولما كانت محاليلها حمضية.",
        "zh": "弱酸在水中也会电离，只是部分电离并建立平衡。若完全不电离，其 Ka 将为零，溶液也不会呈酸性。",
        "ku": "Asîdên qels jî di avê de îyonîze dibin, lê tenê beşek ji wan îyonîze dibe û hevsengî saz dibe. Heke qet îyonîze nebûna, Ka ya wan sifir dibû û çareseriyên wan asîdî nedibûn."
      }
    },
    {
      "id": "u19-f03",
      "fact": {
        "tr": "Derişimi çok küçük olmayan zayıf monoprotik bir asitte iyonlaşan kısım ihmal edilirse [H+] ≈ √(Ka * Ca) olur (Ca: asidin başlangıç molaritesi).",
        "en": "For a weak monoprotic acid that is not too dilute, neglecting the ionized fraction gives [H+] ≈ √(Ka * Ca) (Ca: initial molarity of the acid).",
        "de": "Für eine nicht zu verdünnte schwache einprotonige Säure gilt bei Vernachlässigung des protolysierten Anteils [H+] ≈ √(Ka * Ca) (Ca: Anfangsmolarität der Säure).",
        "fr": "Pour un monoacide faible pas trop dilué, en négligeant la fraction ionisée, on obtient [H+] ≈ √(Ka * Ca) (Ca : molarité initiale de l’acide).",
        "ru": "Для слабой одноосновной кислоты не слишком малой концентрации, если пренебречь продиссоциировавшей частью, [H+] ≈ √(Ka * Ca), где Ca — начальная молярная концентрация кислоты.",
        "ar": "في حمض ضعيف أحادي البروتون غير مخفف جدًا، وبإهمال الجزء المتأين، يكون [H+] ≈ √(Ka * Ca) (Ca: المولارية الابتدائية للحمض).",
        "zh": "对于浓度不太低的一元弱酸，忽略已电离的部分时，[H+] ≈ √(Ka * Ca)(Ca 为酸的起始物质的量浓度)。",
        "ku": "Ji bo asîdeke qels a monoprotîk ku ne pir sist e, heke beşa îyonîzebûyî neyê hesibandin, [H+] ≈ √(Ka * Ca) e (Ca: molarîteya destpêkê ya asîdê)."
      },
      "trap": {
        "tr": "Zayıf asidin H+ derişimi başlangıç derişimine eşittir.",
        "en": "The H+ concentration of the weak acid is equal to the initial concentration.",
        "de": "Die H+-Konzentration der schwachen Säure entspricht der Anfangskonzentration.",
        "fr": "La concentration H+ de l’acide faible est égale à la concentration initiale.",
        "ru": "Концентрация H+ в растворе слабой кислоты равна начальной концентрации кислоты.",
        "ar": "تركيز H+ للحمض الضعيف يساوي التركيز الأولي.",
        "zh": "弱酸溶液中的 H+ 浓度等于酸的起始浓度。",
        "ku": "Tîrbûna H+ ya asîda qels bi tîrbûna wê ya destpêkê re wekhev e."
      },
      "whyTrapIsFalse": {
        "tr": "Bu ifade zayıf asidi kuvvetli asit gibi tamamen iyonlaşmış kabul eder. Zayıf asidin yalnızca küçük bir kesri iyonlaştığından [H+], başlangıç derişiminden çok küçüktür.",
        "en": "This statement treats the weak acid as if it were fully ionized like a strong acid. Only a small fraction of a weak acid ionizes, so [H+] is much smaller than its initial concentration.",
        "de": "Diese Aussage behandelt die schwache Säure wie eine vollständig protolysierte starke Säure. Nur ein kleiner Anteil einer schwachen Säure protolysiert, daher ist [H+] viel kleiner als die Anfangskonzentration.",
        "fr": "Cette affirmation traite l’acide faible comme un acide fort totalement ionisé. Seule une petite fraction d’un acide faible s’ionise, donc [H+] est bien inférieure à sa concentration initiale.",
        "ru": "Это утверждение рассматривает слабую кислоту как сильную, полностью диссоциированную. Диссоциирует лишь малая доля слабой кислоты, поэтому [H+] намного меньше её начальной концентрации.",
        "ar": "هذه العبارة تعامل الحمض الضعيف كأنه حمض قوي متأين كليًا. لا يتأين إلا جزء صغير من الحمض الضعيف، لذا يكون [H+] أصغر بكثير من تركيزه الابتدائي.",
        "zh": "该说法把弱酸当作完全电离的强酸。弱酸只有一小部分电离，所以 [H+] 远小于其初始浓度。",
        "ku": "Ev gotin asîda qels wek asîdeke xurt a bi tevahî îyonîzebûyî dihesibîne. Tenê beşeke piçûk a asîda qels îyonîze dibe, ji ber vê [H+] ji tîrbûna destpêkê gelek piçûktir e."
      }
    },
    {
      "id": "u19-f04",
      "fact": {
        "tr": "Brønsted-Lowry tanımına göre H+ veren tür asit, H+ alan tür bazdır; aralarında 1 H+ fark olan çiftlere konjuge (eşlenik) asit-baz çifti denir.",
        "en": "According to the Brønsted-Lowry definition, a species that donates H+ is an acid and a species that accepts H+ is a base; pairs that differ by one H+ are called conjugate acid-base pairs.",
        "de": "Nach Brønsted-Lowry ist ein Teilchen, das H+ abgibt, eine Säure, und ein Teilchen, das H+ aufnimmt, eine Base; Paare, die sich um ein H+ unterscheiden, heißen konjugierte Säure-Base-Paare.",
        "fr": "Selon Brønsted-Lowry, une espèce qui cède H+ est un acide et une espèce qui capte H+ est une base ; les couples qui diffèrent d'un H+ sont appelés couples acide-base conjugués.",
        "ru": "По Брёнстеду — Лоури кислота — частица, отдающая H+, а основание — частица, принимающая H+; пары, различающиеся на один H+, называют сопряжёнными кислотно-основными парами.",
        "ar": "وفق تعريف برونستد-لوري، النوع الذي يمنح H+ حمض، والنوع الذي يستقبل H+ قاعدة؛ والأزواج التي يختلف أفرادها بـ H+ واحد تُسمّى أزواج حمض-قاعدة مترافقة.",
        "zh": "根据布朗斯特-劳里酸碱质子理论，给出 H+ 的微粒是酸，接受 H+ 的微粒是碱；相差 1 个 H+ 的一对微粒称为共轭酸碱对。",
        "ku": "Li gorî pênaseya Brønsted-Lowry, cureya ku H+ dide asîd e û cureya ku H+ digire baz e; cotên ku 1 H+ ferqa wan heye cotên asîd-baz ên hevgirtî (konjuge) tên gotin."
      },
      "trap": {
        "tr": "Eşlenik asit-baz çiftleri arasında 2 elektron farkı bulunur.",
        "en": "There is a difference of 2 electrons between conjugated acid-base pairs.",
        "de": "Zwischen konjugierten Säure-Base-Paaren besteht ein Unterschied von 2 Elektronen.",
        "fr": "Il existe une différence de 2 électrons entre les paires acide-base conjuguées.",
        "ru": "Частицы сопряжённой кислотно-основной пары различаются на 2 электрона.",
        "ar": "يوجد فرق قدره 2 إلكترون بين أزواج الحمض والقاعدة المترافقة.",
        "zh": "共轭酸碱对之间相差 2 个电子。",
        "ku": "Di navbera cotên asîd-bazê yên hevgirtî de 2 elektronan ferq heye."
      },
      "whyTrapIsFalse": {
        "tr": "Eşlenik asit-baz çiftleri elektron değil proton (H+) alışverişiyle ilişkilidir; aralarındaki fark tek bir H+ iyonudur.",
        "en": "Conjugate acid-base pairs are related by the transfer of a proton (H+), not of electrons; they differ by a single H+ ion.",
        "de": "Korrespondierende Säure-Base-Paare unterscheiden sich durch die Übertragung eines Protons (H+), nicht von Elektronen; der Unterschied ist genau ein H+-Ion.",
        "fr": "Les couples acide-base conjugués sont liés par l’échange d’un proton (H+), et non d’électrons ; ils diffèrent d’un seul ion H+.",
        "ru": "Сопряжённые кислотно-основные пары связаны переносом протона (H+), а не электронов; они различаются одним ионом H+.",
        "ar": "الأزواج المترافقة من الحمض والقاعدة ترتبط بانتقال بروتون (H+) لا إلكترونات؛ والفرق بينها أيون H+ واحد.",
        "zh": "共轭酸碱对是通过质子(H+)而不是电子的转移相联系的；两者只相差一个 H+。",
        "ku": "Cotên asîd-baz ên hevgirtî bi guhastina protonekê (H+) ve girêdayî ne, ne bi elektronan; ferqa wan tenê yek îyona H+ ye."
      }
    },
    {
      "id": "u19-f05",
      "fact": {
        "tr": "Bir eşlenik asit-baz çiftinde Ka * Kb = Ksu = 10^-14'tür (25 °C'de).",
        "en": "In a conjugate acid-base pair, Ka * Kb = Kw = 10^-14 (at 25 °C).",
        "de": "In einem konjugierten Säure-Base-Paar beträgt Ka * Kb = Kw = 10^-14 (bei 25 °C).",
        "fr": "Dans une paire acide-base conjuguée, Ka * Kb = Ke = 10^-14 (à 25 °C).",
        "ru": "Для сопряжённой кислотно-основной пары Ka * Kb = Kw = 10^-14 (при 25 °C).",
        "ar": "في زوج مترافق من حمض وقاعدة، Ka * Kb = Kw = 10^-14 (عند 25 درجة مئوية).",
        "zh": "在共轭酸碱对中，Ka * Kb = Kw = 10^-14(25 °C 时)。",
        "ku": "Di cotek asîd-bazê ya hevgirtî de, Ka * Kb = Ksu = 10^-14 (li 25 °C)."
      },
      "trap": {
        "tr": "Ka değeri büyük olan asidin eşlenik bazının Kb değeri de çok büyüktür.",
        "en": "The Kb value of the conjugate base of the acid with a high Ka value is also very high.",
        "de": "Der Kb-Wert der konjugierten Base der Säure mit einem hohen Ka-Wert ist ebenfalls sehr hoch.",
        "fr": "La valeur Kb de la base conjuguée de l'acide avec une valeur Ka élevée est également très élevée.",
        "ru": "Если у кислоты большая Ka, то Kb её сопряжённого основания тоже очень велика.",
        "ar": "كما أن قيمة Kb للقاعدة المترافقة للحمض ذات قيمة Ka العالية مرتفعة جدًا أيضًا.",
        "zh": "Ka 很大的酸，其共轭碱的 Kb 也很大。",
        "ku": "Nirxa Kb ya bingeha hevgirtî ya asîda bi nirxa Ka ya bilind jî pir zêde ye."
      },
      "whyTrapIsFalse": {
        "tr": "Ka · Kb = Ksu sabit olduğundan biri büyüdükçe diğeri küçülür; kuvvetli asidin eşlenik bazı zayıftır.",
        "en": "Since Ka · Kb = Kw is constant, when one grows the other shrinks; the conjugate base of a strong acid is weak.",
        "de": "Da Ka · Kb = Kw konstant ist, wird der eine Wert kleiner, wenn der andere wächst; die korrespondierende Base einer starken Säure ist schwach.",
        "fr": "Comme Ka · Kb = Ke est constant, quand l’une augmente l’autre diminue ; la base conjuguée d’un acide fort est faible.",
        "ru": "Произведение Ka · Kb = Kw постоянно, поэтому чем больше одна константа, тем меньше другая; сопряжённое основание сильной кислоты — слабое.",
        "ar": "بما أن Ka · Kb = Kw ثابت، فكلما كبر أحدهما صغر الآخر؛ والقاعدة المرافقة لحمض قوي تكون ضعيفة.",
        "zh": "由于 Ka · Kb = Kw 为常数，一个变大另一个就变小；强酸的共轭碱是弱碱。",
        "ku": "Ji ber ku Ka · Kb = Ksu sabît e, dema yek mezin dibe yê din piçûk dibe; baza hevgirtî ya asîdeke xurt qels e."
      }
    },
    {
      "id": "u19-f06",
      "fact": {
        "tr": "Tampon çözelti, zayıf bir asit ile eşlenik bazını (veya zayıf bir baz ile eşlenik asidini) birlikte içeren ve az miktarda asit ya da baz eklendiğinde pH değişimine direnen çözeltidir.",
        "en": "A buffer solution contains a weak acid together with its conjugate base (or a weak base together with its conjugate acid) and resists a change in pH when a small amount of acid or base is added.",
        "de": "Eine Pufferlösung enthält eine schwache Säure zusammen mit ihrer konjugierten Base (oder eine schwache Base zusammen mit ihrer konjugierten Säure) und hält den pH-Wert bei Zugabe kleiner Mengen Säure oder Base nahezu konstant.",
        "fr": "Une solution tampon contient un acide faible et sa base conjuguée (ou une base faible et son acide conjugué) et résiste aux variations de pH lors de l'ajout d'une petite quantité d'acide ou de base.",
        "ru": "Буферный раствор содержит слабую кислоту вместе с сопряжённым с ней основанием (или слабое основание вместе с сопряжённой с ним кислотой) и сохраняет pH почти неизменным при добавлении небольшого количества кислоты или щёлочи.",
        "ar": "المحلول المنظم يحتوي على حمض ضعيف مع قاعدته المرافقة (أو قاعدة ضعيفة مع حمضها المرافق) ويقاوم تغيّر pH عند إضافة كمية قليلة من حمض أو قاعدة.",
        "zh": "缓冲溶液同时含有弱酸及其共轭碱（或弱碱及其共轭酸），加入少量酸或碱时能抵抗 pH 的变化。",
        "ku": "Çareseriya tampon asîdeke qels û baza wê ya hevgirtî (an bazeke qels û asîda wê ya hevgirtî) bi hev re dihewîne û dema hinekî asîd an baz lê tê zêdekirin li hember guherîna pH radiweste."
      },
      "trap": {
        "tr": "Tampon çözelti kuvvetli asit ile kuvvetli baz karışımından oluşur.",
        "en": "Buffer solution consists of a mixture of strong acid and strong base.",
        "de": "Pufferlösung besteht aus einer Mischung aus starker Säure und starker Base.",
        "fr": "La solution tampon est constituée d’un mélange d’acide fort et de base forte.",
        "ru": "Буферный раствор состоит из смеси сильной кислоты и сильного основания.",
        "ar": "يتكون المحلول المنظم من خليط من حمض قوي وقاعدة قوية.",
        "zh": "缓冲溶液由强酸和强碱混合而成。",
        "ku": "Çareseriya tampon ji tevliheviya asîda xurt û bazê xurt pêk tê."
      },
      "whyTrapIsFalse": {
        "tr": "Kuvvetli asit ile kuvvetli baz birbirini nötrleştirir; ortamda eklenen H+ veya OH- iyonlarını tüketecek zayıf asit-eşlenik baz çifti bulunmadığından tampon oluşmaz.",
        "en": "A strong acid and a strong base simply neutralize each other; no weak acid/conjugate base pair remains to consume added H+ or OH-, so no buffer forms.",
        "de": "Starke Säure und starke Base neutralisieren sich lediglich; es bleibt kein Paar aus schwacher Säure und korrespondierender Base, das zugesetzte H+- oder OH--Ionen abfangen könnte, also entsteht kein Puffer.",
        "fr": "Un acide fort et une base forte se neutralisent simplement ; il ne reste aucun couple acide faible/base conjuguée pour consommer les H+ ou OH- ajoutés, donc aucun tampon ne se forme.",
        "ru": "Сильная кислота и сильное основание просто нейтрализуют друг друга; в растворе нет пары «слабая кислота — сопряжённое основание», которая связывала бы добавленные ионы H+ или OH-, поэтому буфер не образуется.",
        "ar": "الحمض القوي والقاعدة القوية يتعادلان فقط؛ ولا يبقى زوج من حمض ضعيف وقاعدته المرافقة يستهلك أيونات H+ أو OH- المضافة، لذا لا يتكون محلول منظم.",
        "zh": "强酸与强碱只会相互中和，体系中没有能消耗外加 H+ 或 OH- 的弱酸-共轭碱对，因此不能形成缓冲溶液。",
        "ku": "Asîda xurt û baza xurt tenê hev bêalî dikin; cotek asîda qels û baza wê ya hevgirtî namîne ku îyonên H+ an OH- yên lê zêdekirî bixwe, ji ber vê tampon çênabe."
      }
    },
    {
      "id": "u19-f07",
      "fact": {
        "tr": "İnsan kanının pH'ı (≈ 7,4) başlıca H2CO3 / HCO3- (karbonik asit-bikarbonat) tampon sistemiyle sabit tutulur.",
        "en": "The pH of human blood (≈ 7.4) is kept constant mainly by the H2CO3 / HCO3- (carbonic acid-hydrogen carbonate) buffer system.",
        "de": "Der pH-Wert des menschlichen Blutes (≈ 7,4) wird hauptsächlich durch das Puffersystem H2CO3 / HCO3- (Kohlensäure-Hydrogencarbonat) konstant gehalten.",
        "fr": "Le pH du sang humain (≈ 7,4) est maintenu constant principalement par le système tampon H2CO3 / HCO3- (acide carbonique-hydrogénocarbonate).",
        "ru": "pH крови человека (≈ 7,4) поддерживается постоянным главным образом гидрокарбонатной буферной системой H2CO3 / HCO3- (угольная кислота — гидрокарбонат-ион).",
        "ar": "يُحافَظ على ثبات pH دم الإنسان (≈ 7.4) أساسًا بواسطة النظام المنظم H2CO3 / HCO3- (حمض الكربونيك-البيكربونات).",
        "zh": "人体血液的 pH(≈ 7.4)主要靠 H2CO3/HCO3-（碳酸-碳酸氢根）缓冲体系维持恒定。",
        "ku": "pH ya xwîna mirovan (≈ 7,4) bi giranî ji hêla pergala tampon a H2CO3 / HCO3- (asîda karbonîk-bîkarbonat) ve sabît tê hiştin."
      },
      "trap": {
        "tr": "Kanın pH'ı hidroklorik asit (HCl) ile tamponlanarak sabit tutulur.",
        "en": "Blood pH is kept constant by buffering with hydrochloric acid (HCl).",
        "de": "Der Blut-pH wird durch Pufferung mit Salzsäure (HCl) konstant gehalten.",
        "fr": "Le pH sanguin est maintenu constant par un tampon à base d’acide chlorhydrique (HCl).",
        "ru": "pH крови поддерживается постоянным благодаря буферному действию соляной кислоты (HCl).",
        "ar": "يُحافَظ على ثبات pH الدم بالتنظيم بواسطة حمض الهيدروكلوريك (HCl).",
        "zh": "血液的 pH 是靠盐酸(HCl)的缓冲作用维持恒定的。",
        "ku": "pH ya xwînê bi tamponkirina bi asîda hîdroklorîk (HCl) sabît tê hiştin."
      },
      "whyTrapIsFalse": {
        "tr": "HCl kuvvetli bir asittir ve tampon oluşturamaz; kanın pH'ını koruyan sistem zayıf asit H2CO3 ile eşlenik bazı HCO3- çiftidir.",
        "en": "HCl is a strong acid and cannot form a buffer; blood pH is maintained by the weak acid H2CO3 together with its conjugate base HCO3-.",
        "de": "HCl ist eine starke Säure und kann keinen Puffer bilden; der Blut-pH wird durch die schwache Säure H2CO3 und ihre korrespondierende Base HCO3- stabilisiert.",
        "fr": "HCl est un acide fort et ne peut pas former de tampon ; le pH sanguin est maintenu par l’acide faible H2CO3 et sa base conjuguée HCO3-.",
        "ru": "HCl — сильная кислота и буфера не образует; pH крови поддерживает пара из слабой кислоты H2CO3 и сопряжённого с ней основания HCO3-.",
        "ar": "HCl حمض قوي لا يستطيع تكوين محلول منظم؛ ويحافظ على pH الدم الزوج المكوّن من الحمض الضعيف H2CO3 وقاعدته المرافقة HCO3-.",
        "zh": "HCl 是强酸，不能形成缓冲体系；维持血液 pH 的是弱酸 H2CO3 与其共轭碱 HCO3- 组成的缓冲对。",
        "ku": "HCl asîdeke xurt e û nikare tampon çêke; pH ya xwînê ji hêla cota asîda qels H2CO3 û baza wê ya hevgirtî HCO3- ve tê parastin."
      }
    },
    {
      "id": "u19-f08",
      "fact": {
        "tr": "Titrasyonda eşdeğerlik noktası, eklenen bazdaki OH- mol sayısının asitteki H+ mol sayısına eşit olduğu noktadır (nH+ = nOH-); indikatörün renk değiştirdiği dönüm noktası bu noktaya olabildiğince yakın olacak şekilde seçilir.",
        "en": "In a titration, the equivalence point is where the moles of OH- added equal the moles of H+ in the acid (nH+ = nOH-); the indicator is chosen so that its end point (colour change) is as close as possible to it.",
        "de": "Bei einer Titration ist der Äquivalenzpunkt erreicht, wenn die zugegebene Stoffmenge OH- gleich der Stoffmenge H+ der Säure ist (nH+ = nOH-); der Indikator wird so gewählt, dass sein Endpunkt (Farbumschlag) möglichst nahe daran liegt.",
        "fr": "Dans un titrage, le point d’équivalence est atteint quand la quantité de OH- ajoutée est égale à la quantité de H+ de l’acide (nH+ = nOH-) ; l’indicateur est choisi pour que son point de virage (changement de couleur) en soit le plus proche possible.",
        "ru": "При титровании точка эквивалентности — момент, когда количество добавленных ионов OH- равно количеству ионов H+ кислоты (nH+ = nOH-); индикатор подбирают так, чтобы конечная точка титрования (изменение окраски) была как можно ближе к ней.",
        "ar": "في المعايرة، نقطة التكافؤ هي النقطة التي يتساوى فيها عدد مولات OH- المضافة مع عدد مولات H+ في الحمض (nH+ = nOH-)؛ ويُختار الكاشف بحيث تكون نقطة النهاية (تغير اللون) أقرب ما يمكن إليها.",
        "zh": "滴定中，化学计量点是加入的 OH- 的物质的量等于酸中 H+ 的物质的量的点(nH+ = nOH-)；选择指示剂时，应使其变色点（滴定终点）尽可能接近化学计量点。",
        "ku": "Di tîtrasyonê de xala hevwateyê ew xal e ku hejmara molên OH- yên lê zêdekirî bi hejmara molên H+ yên asîdê re wekhev dibe (nH+ = nOH-); îndîkator wisa tê hilbijartin ku xala dawiyê (guherîna rengê wê) bi qasî ku pêkan e nêzî vê xalê be."
      },
      "trap": {
        "tr": "Eşdeğerlik noktasında çözeltinin pH'ı daima 7,00 olmak zorundadır.",
        "en": "At the equivalence point, the pH of the solution must always be 7.00.",
        "de": "Am Äquivalenzpunkt muss der pH-Wert der Lösung immer 7,00 betragen.",
        "fr": "Au point d'équivalence, le pH de la solution doit toujours être de 7,00.",
        "ru": "В точке эквивалентности pH раствора всегда обязательно равен 7,00.",
        "ar": "عند نقطة التكافؤ، يجب أن يكون الرقم الهيدروجيني للمحلول دائمًا 7.00.",
        "zh": "化学计量点时，溶液的 pH 一定总是 7.00。",
        "ku": "Li xala hevwateyê pH ya çareseriyê her gav divê 7,00 be."
      },
      "whyTrapIsFalse": {
        "tr": "pH'ın 7 olması yalnızca kuvvetli asit-kuvvetli baz titrasyonuna özgüdür. Zayıf asit-kuvvetli baz titrasyonunda oluşan anyon hidroliz olduğundan eşdeğerlik noktasında pH 7'den büyük, zayıf baz-kuvvetli asit titrasyonunda ise küçüktür.",
        "en": "A pH of 7 is specific to strong acid-strong base titrations. In a weak acid-strong base titration the anion formed hydrolyzes, so the pH at the equivalence point is above 7; in a weak base-strong acid titration it is below 7.",
        "de": "pH 7 gilt nur für Titrationen starke Säure-starke Base. Bei schwacher Säure-starker Base reagiert das entstandene Anion mit Wasser (Hydrolyse), daher ist der pH am Äquivalenzpunkt größer als 7; bei schwacher Base-starker Säure kleiner als 7.",
        "fr": "Un pH de 7 n’est propre qu’aux titrages acide fort-base forte. Dans un titrage acide faible-base forte, l’anion formé s’hydrolyse, donc le pH au point d’équivalence est supérieur à 7 ; dans un titrage base faible-acide fort, il est inférieur à 7.",
        "ru": "pH = 7 характерен только для титрования сильной кислоты сильным основанием. При титровании слабой кислоты сильным основанием образующийся анион гидролизуется, поэтому pH в точке эквивалентности больше 7, а при титровании слабого основания сильной кислотой — меньше 7.",
        "ar": "كون pH = 7 خاص بمعايرة حمض قوي مع قاعدة قوية فقط. ففي معايرة حمض ضعيف بقاعدة قوية يتحلل الأنيون الناتج مائيًا فيكون pH عند نقطة التكافؤ أكبر من 7، وفي معايرة قاعدة ضعيفة بحمض قوي يكون أصغر من 7.",
        "zh": "pH = 7 只适用于强酸-强碱滴定。弱酸-强碱滴定中生成的阴离子会水解，化学计量点 pH 大于 7；弱碱-强酸滴定中则小于 7。",
        "ku": "pH 7 tenê taybetî tîtrasyona asîda xurt-baza xurt e. Di tîtrasyona asîda qels-baza xurt de anyona çêbûyî hîdrolîz dibe, ji ber vê li xala hevwateyê pH ji 7 mezintir e; di tîtrasyona baza qels-asîda xurt de ji 7 piçûktir e."
      },
      "osymTip": {
        "tr": "Zayıf asit - kuvvetli baz titrasyonunda eşdeğerlik noktasında pH > 7'dir!",
        "en": "In weak acid - strong base titration, the pH at the equivalence point is > 7!",
        "de": "Bei der Titration schwache Säure – starke Base beträgt der pH-Wert am Äquivalenzpunkt > 7!",
        "fr": "Dans le titrage acide faible - base forte, le pH au point d'équivalence est > 7 !",
        "ru": "При титровании слабой кислоты сильным основанием pH в точке эквивалентности больше 7!",
        "ar": "في معايرة الحمض الضعيف والقاعدة القوية، يكون الرقم الهيدروجيني عند نقطة التكافؤ أكبر من 7!",
        "zh": "弱酸-强碱滴定时，化学计量点的 pH > 7！",
        "ku": "Di tîtrasyona asîda qels - baza xurt de, li xala hevwateyê pH > 7 e!"
      }
    },
    {
      "id": "u19-f09",
      "fact": {
        "tr": "Kuvvetli asit - kuvvetli baz titrasyonunda eşdeğerlik noktasında pH 25 °C'de 7,00'dir.",
        "en": "In a strong acid - strong base titration, the pH at the equivalence point is 7.00 at 25 °C.",
        "de": "Bei der Titration starke Säure – starke Base beträgt der pH-Wert am Äquivalenzpunkt bei 25 °C 7,00.",
        "fr": "Dans le titrage acide fort - base forte, le pH au point d'équivalence est de 7,00 à 25 °C.",
        "ru": "При титровании сильной кислоты сильным основанием pH в точке эквивалентности при 25 °C равен 7,00.",
        "ar": "في معايرة حمض قوي بقاعدة قوية يكون pH عند نقطة التكافؤ 7.00 عند 25 °C.",
        "zh": "强酸-强碱滴定中，25 °C 时化学计量点的 pH 为 7.00。",
        "ku": "Di tîtrasyona asîda xurt - baza xurt de, li 25 °C pH di xala hevwateyê de 7,00 e."
      },
      "trap": {
        "tr": "Kuvvetli asit kuvvetli baz titrasyonunda eşdeğerlik noktasında pH 0'dır.",
        "en": "In a strong acid strong base titration, pH is 0 at the equivalence point.",
        "de": "Bei einer Titration mit starker Säure und starker Base beträgt der pH-Wert am Äquivalenzpunkt 0.",
        "fr": "Dans un titrage acide fort base forte, le pH est de 0 au point d’équivalence.",
        "ru": "При титровании сильной кислоты сильным основанием pH в точке эквивалентности равен 0.",
        "ar": "في معايرة حمض قوي بقاعدة قوية، يكون الرقم الهيدروجيني 0 عند نقطة التكافؤ.",
        "zh": "强酸-强碱滴定中，化学计量点的 pH 为 0。",
        "ku": "Di tîtrasyona asîda xurt - baza xurt de, pH di xala hevwateyê de 0 ye."
      },
      "whyTrapIsFalse": {
        "tr": "Eşdeğerlik noktasında asit tamamen nötrleşmiştir; ortamda yalnızca hidroliz olmayan tuz (ör. NaCl) ve su kalır. Bu yüzden pH 0 değil, 25 °C'de 7'dir.",
        "en": "At the equivalence point the acid is completely neutralized; only a non-hydrolyzing salt (e.g. NaCl) and water remain. Therefore the pH is 7 at 25 °C, not 0.",
        "de": "Am Äquivalenzpunkt ist die Säure vollständig neutralisiert; es bleiben nur ein nicht hydrolysierendes Salz (z. B. NaCl) und Wasser. Daher ist der pH bei 25 °C 7 und nicht 0.",
        "fr": "Au point d’équivalence, l’acide est totalement neutralisé ; il ne reste qu’un sel qui ne s’hydrolyse pas (ex. NaCl) et de l’eau. Le pH vaut donc 7 à 25 °C, et non 0.",
        "ru": "В точке эквивалентности кислота полностью нейтрализована; остаются только негидролизующаяся соль (например, NaCl) и вода. Поэтому pH при 25 °C равен 7, а не 0.",
        "ar": "عند نقطة التكافؤ يكون الحمض قد تعادل كليًا ولا يبقى إلا ملح لا يتحلل مائيًا (مثل NaCl) والماء، لذلك يكون pH مساويًا 7 عند 25 °C وليس 0.",
        "zh": "化学计量点时酸已被完全中和，只剩不水解的盐(如 NaCl)和水，因此 25 °C 时 pH 为 7，而不是 0。",
        "ku": "Li xala hevwateyê asîd bi tevahî bêalî bûye; tenê xwêyeke ku hîdrolîz nabe (mînak NaCl) û av dimînin. Ji ber vê li 25 °C pH 7 e, ne 0."
      }
    },
    {
      "id": "u19-f10",
      "fact": {
        "tr": "Tuz hidrolizi: Zayıf asitten gelen anyon veya zayıf bazdan gelen katyonun suyla tepkimeye girmesidir.",
        "en": "Salt hydrolysis: It is the reaction of the anion from a weak acid or the cation from a weak base with water.",
        "de": "Salzhydrolyse: Dabei handelt es sich um die Reaktion des Anions einer schwachen Säure oder des Kations einer schwachen Base mit Wasser.",
        "fr": "Hydrolyse du sel : C'est la réaction de l'anion d'un acide faible ou du cation d'une base faible avec l'eau.",
        "ru": "Гидролиз соли — взаимодействие с водой аниона слабой кислоты или катиона слабого основания.",
        "ar": "التحلل المائي للملح: هو تفاعل الأنيون من حمض ضعيف أو الكاتيون من قاعدة ضعيفة مع الماء.",
        "zh": "盐类的水解：弱酸的阴离子或弱碱的阳离子与水发生的反应。",
        "ku": "Hîdrolîza xwê: Reaksiyona anyona ji asîdeke qels an jî kationa ji bingeheke qels bi avê re ye."
      },
      "trap": {
        "tr": "Nötr tuzların iyonları suda şiddetle hidroliz olur.",
        "en": "Ions of neutral salts hydrolyze violently in water.",
        "de": "Ionen neutraler Salze hydrolysieren in Wasser heftig.",
        "fr": "Les ions de sels neutres s'hydrolysent violemment dans l'eau.",
        "ru": "Ионы нейтральных солей в воде подвергаются сильному гидролизу.",
        "ar": "تتحلل أيونات الأملاح المحايدة بعنف في الماء.",
        "zh": "中性盐的离子在水中强烈水解。",
        "ku": "Îyonên xwêyên bêalî di avê de bi tundî hîdrolîz dibin."
      },
      "whyTrapIsFalse": {
        "tr": "Nötr tuzlar kuvvetli asit ile kuvvetli bazdan türer; iyonları (ör. Na+, Cl-) suyla tepkimeye girmez, yani hidroliz olmaz ve pH'ı değiştirmez.",
        "en": "Neutral salts come from a strong acid and a strong base; their ions (e.g. Na+, Cl-) do not react with water, so they do not hydrolyze and do not change the pH.",
        "de": "Neutrale Salze stammen aus starker Säure und starker Base; ihre Ionen (z. B. Na+, Cl-) reagieren nicht mit Wasser, hydrolysieren also nicht und verändern den pH nicht.",
        "fr": "Les sels neutres proviennent d’un acide fort et d’une base forte ; leurs ions (ex. Na+, Cl-) ne réagissent pas avec l’eau : ils ne s’hydrolysent pas et ne modifient pas le pH.",
        "ru": "Нейтральные соли образованы сильной кислотой и сильным основанием; их ионы (например, Na+, Cl-) не реагируют с водой, то есть не гидролизуются и не меняют pH.",
        "ar": "الأملاح المتعادلة مشتقة من حمض قوي وقاعدة قوية؛ وأيوناتها (مثل Na+ وCl-) لا تتفاعل مع الماء، فلا تتحلل مائيًا ولا تغيّر pH.",
        "zh": "中性盐由强酸和强碱生成，其离子(如 Na+、Cl-)不与水反应，即不水解，也不改变 pH。",
        "ku": "Xwêyên bêalî ji asîda xurt û baza xurt çêdibin; îyonên wan (mînak Na+, Cl-) bi avê re reaksiyon nakin, yanî hîdrolîz nabin û pH naguherînin."
      }
    },
    {
      "id": "u19-f11",
      "fact": {
        "tr": "Aynı sıcaklık ve derişimde Ka değeri büyük olan asit daha kuvvetlidir ve iyonlaşma yüzdesi daha büyüktür.",
        "en": "At the same temperature and concentration, the acid with the larger Ka is stronger and has a higher percent ionization.",
        "de": "Bei gleicher Temperatur und Konzentration ist die Säure mit dem größeren Ka stärker und hat einen höheren Protolysegrad.",
        "fr": "À même température et même concentration, l’acide ayant le plus grand Ka est le plus fort et a le pourcentage d’ionisation le plus élevé.",
        "ru": "При одинаковых температуре и концентрации кислота с большей Ka сильнее, и степень её диссоциации больше.",
        "ar": "عند درجة الحرارة والتركيز نفسيهما، يكون الحمض ذو قيمة Ka الأكبر أقوى ونسبة تأينه المئوية أكبر.",
        "zh": "在相同温度和浓度下，Ka 越大的酸越强，电离度也越大。",
        "ku": "Di heman germahî û tîrbûnê de, asîda ku Ka ya wê mezintir e xurttir e û rêjeya îyonîzasyona wê bilindtir e."
      },
      "trap": {
        "tr": "Ka'sı küçük olan asit daha kuvvetlidir.",
        "en": "The acid with the smaller Ka is the stronger acid.",
        "de": "Die Säure mit dem kleineren Ka ist die stärkere Säure.",
        "fr": "L'acide dont le Ka est le plus petit est le plus fort.",
        "ru": "Чем меньше Ka, тем сильнее кислота.",
        "ar": "الحمض ذو قيمة Ka الأصغر هو الأقوى.",
        "zh": "Ka 较小的酸酸性更强。",
        "ku": "Asîda ku Ka ya wê piçûktir e xurttir e."
      },
      "whyTrapIsFalse": {
        "tr": "İlişki terstir: Ka, iyonlaşma dengesinin ürünler yönüne ne kadar kaydığını gösterir; Ka küçükse asit daha az iyonlaşır, dolayısıyla daha zayıftır.",
        "en": "The relation is the opposite: Ka shows how far the ionization equilibrium lies toward the products; a smaller Ka means less ionization, hence a weaker acid.",
        "de": "Der Zusammenhang ist umgekehrt: Ka zeigt, wie weit das Protolysegleichgewicht auf der Produktseite liegt; ein kleinerer Ka bedeutet weniger Protolyse, also eine schwächere Säure.",
        "fr": "La relation est inverse : Ka indique à quel point l’équilibre d’ionisation est déplacé vers les produits ; un Ka plus petit signifie moins d’ionisation, donc un acide plus faible.",
        "ru": "Зависимость обратная: Ka показывает, насколько равновесие диссоциации смещено к продуктам; чем меньше Ka, тем меньше диссоциирует кислота, т. е. тем она слабее.",
        "ar": "العلاقة معكوسة: تبيّن Ka مدى إزاحة اتزان التأين نحو النواتج؛ فكلما صغرت Ka قلّ التأين وكان الحمض أضعف.",
        "zh": "关系正好相反：Ka 表示电离平衡偏向生成物的程度；Ka 越小，电离越少，酸越弱。",
        "ku": "Têkilî berevajî ye: Ka nîşan dide ku hevsengiya îyonîzasyonê çiqas ber bi berheman ve diçe; Ka piçûktir be asîd kêmtir îyonîze dibe, ango qelstir e."
      }
    },
    {
      "id": "u19-f12",
      "fact": {
        "tr": "Zayıf bir asit çözeltisine saf su eklenip seyreltilirse iyonlaşma yüzdesi artar; ancak H+ derişimi azalır (pH artar).",
        "en": "If pure water is added to a weak acid solution and diluted, the percentage of ionization increases; but the H+ concentration decreases (pH increases).",
        "de": "Wenn einer schwach sauren Lösung reines Wasser zugesetzt und verdünnt wird, erhöht sich der Prozentsatz der Ionisierung; aber die H+-Konzentration nimmt ab (pH-Wert steigt).",
        "fr": "Si de l'eau pure est ajoutée à une solution acide faible et diluée, le pourcentage d'ionisation augmente ; mais la concentration en H+ diminue (le pH augmente).",
        "ru": "При разбавлении раствора слабой кислоты чистой водой степень диссоциации растёт, но концентрация H+ уменьшается (pH увеличивается).",
        "ar": "إذا أضيف الماء النقي إلى محلول حمضي ضعيف وتم تخفيفه، تزداد نسبة التأين؛ لكن تركيز H+ يتناقص (يزيد الرقم الهيدروجيني).",
        "zh": "向弱酸溶液中加入纯水稀释时，电离度增大，但 H+ 浓度减小(pH 升高)。",
        "ku": "Ger ava saf li çareseriya asîdeke qels were zêdekirin û sist bibe, rêjeya îyonîzasyonê zêde dibe; lê tîrbûna H+ kêm dibe (pH zêde dibe)."
      },
      "trap": {
        "tr": "Zayıf asit seyreltildiğinde H+ derişimi artar.",
        "en": "When a weak acid is diluted, the H+ concentration increases.",
        "de": "Wenn eine schwache Säure verdünnt wird, steigt die H+-Konzentration.",
        "fr": "Lorsqu’un acide faible est dilué, la concentration en H+ augmente.",
        "ru": "При разбавлении слабой кислоты концентрация H+ увеличивается.",
        "ar": "عند تخفيف حمض ضعيف يزداد تركيز H+.",
        "zh": "弱酸被稀释时，H+ 浓度增大。",
        "ku": "Dema ku asîdeke qels tê sistkirin, tîrbûna H+ zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Seyreltmede iyonlaşma yüzdesi artsa da hacim artışının etkisi daha büyüktür; H+ derişimi azalır ve pH yükselir.",
        "en": "Although dilution increases the percent ionization, the effect of the larger volume dominates; [H+] decreases and the pH rises.",
        "de": "Zwar steigt beim Verdünnen der Protolysegrad, doch die Volumenzunahme überwiegt; [H+] sinkt und der pH steigt.",
        "fr": "Même si la dilution augmente le pourcentage d’ionisation, l’effet de l’augmentation du volume l’emporte ; [H+] diminue et le pH augmente.",
        "ru": "Хотя при разбавлении степень диссоциации растёт, сильнее сказывается увеличение объёма: [H+] уменьшается, а pH растёт.",
        "ar": "مع أن التخفيف يزيد النسبة المئوية للتأين، فإن أثر زيادة الحجم أكبر؛ فيقل [H+] ويرتفع pH.",
        "zh": "稀释虽然使电离度增大，但体积增大的影响更大；[H+] 减小，pH 升高。",
        "ku": "Her çend bi sistkirinê rêjeya îyonîzasyonê zêde dibe jî, bandora zêdebûna qebareyê mezintir e; [H+] kêm dibe û pH bilind dibe."
      }
    },
    {
      "id": "u19-f13",
      "fact": {
        "tr": "Eşdeğerlik noktasında formül: Ma * Va * Za = Mb * Vb * Zb'dir (Z: tesir/etki değerliği).",
        "en": "At the equivalence point the formula is: Ma * Va * Za = Mb * Vb * Zb (Z: number of H+ or OH- ions released per formula unit).",
        "de": "Am Äquivalenzpunkt gilt: Ma * Va * Za = Mb * Vb * Zb (Z: Anzahl der pro Formeleinheit abgegebenen H+- bzw. OH--Ionen).",
        "fr": "Au point d'équivalence, la formule est : Ma * Va * Za = Mb * Vb * Zb (Z : nombre d'ions H+ ou OH- libérés par unité de formule).",
        "ru": "В точке эквивалентности выполняется соотношение Ma * Va * Za = Mb * Vb * Zb (Z — число ионов H+ или OH-, которое даёт одна формульная единица).",
        "ar": "عند نقطة التكافؤ تكون الصيغة: Ma * Va * Za = Mb * Vb * Zb (Z: عدد أيونات H+ أو OH- التي تطلقها وحدة الصيغة).",
        "zh": "化学计量点时：Ma * Va * Za = Mb * Vb * Zb(Z 为每个化学式单位释放的 H+ 或 OH- 数目)。",
        "ku": "Di xala hevwateyê de formul ev e: Ma * Va * Za = Mb * Vb * Zb (Z: hejmara îyonên H+ an OH- yên ku yek yekeya formulê dide)."
      },
      "trap": {
        "tr": "Titrasyonda tesir değerliği dikkate alınmaz.",
        "en": "In titration, the number of H+ or OH- ions per formula unit (Z) is not taken into account.",
        "de": "Bei der Titration wird die Anzahl der H+- bzw. OH--Ionen pro Formeleinheit (Z) nicht berücksichtigt.",
        "fr": "Lors d'un titrage, le nombre d'ions H+ ou OH- par unité de formule (Z) n'est pas pris en compte.",
        "ru": "При титровании число ионов H+ или OH-, которое даёт одна формульная единица (Z), не учитывают.",
        "ar": "في المعايرة لا يؤخذ عدد أيونات H+ أو OH- لكل وحدة صيغة (Z) بعين الاعتبار.",
        "zh": "滴定计算时不必考虑每个化学式单位释放的 H+ 或 OH- 数目(Z)。",
        "ku": "Di tîtrasyonê de hejmara îyonên H+ an OH- yên her yekeya formulê (Z) nayê hesibandin."
      },
      "whyTrapIsFalse": {
        "tr": "Tesir değerliği bir formül biriminin verdiği H+ veya OH- sayısıdır; H2SO4 gibi iki protonlu asitlerde Z hesaba katılmazsa sonuç yarı ya da iki kat hatalı bulunur.",
        "en": "The equivalence factor Z is the number of H+ or OH- given by one formula unit; for a diprotic acid such as H2SO4, ignoring Z makes the result wrong by a factor of two.",
        "de": "Die Wertigkeit Z ist die Zahl der H+- oder OH--Ionen pro Formeleinheit; bei einer zweiprotonigen Säure wie H2SO4 wird das Ergebnis ohne Z um den Faktor zwei falsch.",
        "fr": "La valence Z est le nombre de H+ ou OH- fournis par une unité de formule ; pour un diacide comme H2SO4, ignorer Z fausse le résultat d’un facteur deux.",
        "ru": "Z — число ионов H+ или OH-, которое даёт одна формульная единица; если для двухосновной кислоты, например H2SO4, не учесть Z, результат окажется в два раза меньше или больше истинного.",
        "ar": "التكافؤ Z هو عدد أيونات H+ أو OH- التي تعطيها وحدة صيغة واحدة؛ وفي حمض ثنائي البروتون مثل H2SO4 يؤدي إهمال Z إلى نتيجة خاطئة بمعامل اثنين.",
        "zh": "Z 是一个化学式单位提供的 H+ 或 OH- 数目；对 H2SO4 这类二元酸，忽略 Z 会使结果相差 2 倍。",
        "ku": "Z hejmara îyonên H+ an OH- ye ku yek yekeya formulê dide; ji bo asîdeke duprotonî wek H2SO4, heke Z neyê hesibandin encam du qat şaş derdikeve."
      }
    },
    {
      "id": "u19-f14",
      "fact": {
        "tr": "HCl, HNO3, H2SO4 kuvvetli asit; HF, HCN, CH3COOH (sirke asidi) zayıf asitlerdir.",
        "en": "HCl, HNO3, H2SO4 strong acid; HF, HCN, CH3COOH (vinegar acid) are weak acids.",
        "de": "HCl, HNO3, H2SO4 starke Säure; HF, HCN, CH3COOH (Essigsäure) sind schwache Säuren.",
        "fr": "HCl, HNO3, H2SO4 sont des acides forts ; HF, HCN, CH3COOH (acide acétique) sont des acides faibles.",
        "ru": "HCl, HNO3, H2SO4 — сильные кислоты; HF, HCN, CH3COOH (уксусная кислота) — слабые кислоты.",
        "ar": "HCl و HNO3 و H2SO4 أحماض قوية؛ و HF و HCN و CH3COOH (حمض الخل) أحماض ضعيفة.",
        "zh": "HCl、HNO3、H2SO4 是强酸；HF、HCN、CH3COOH（醋酸）是弱酸。",
        "ku": "HCl, HNO3, H2SO4 asîdê xurt; HF, HCN, CH3COOH (asîda sîrkeyê) asîdên qels in."
      },
      "trap": {
        "tr": "HF camı aşındırdığı için en kuvvetli asittir.",
        "en": "HF is the strongest acid because it etches glass.",
        "de": "HF ist die stärkste Säure, weil sie Glas ätzt.",
        "fr": "HF est l'acide le plus fort car il attaque le verre.",
        "ru": "HF — самая сильная кислота, поскольку разъедает стекло.",
        "ar": "HF هو أقوى حمض لأنه يُذيب (يتآكل) الزجاج.",
        "zh": "HF 能腐蚀玻璃，因此是最强的酸。",
        "ku": "HF asîda herî xurt e ji ber ku camê dixwe (diqelişîne)."
      },
      "whyTrapIsFalse": {
        "tr": "Camı aşındırmak asit kuvvetinin ölçüsü değildir; HF, camdaki SiO2 ile SiF4 oluşturduğu için camı aşındırır ama suda az iyonlaşan zayıf bir asittir.",
        "en": "Etching glass is not a measure of acid strength; HF etches glass because it forms SiF4 with SiO2, but it is a weak acid that ionizes only slightly in water.",
        "de": "Glasätzen ist kein Maß für die Säurestärke; HF ätzt Glas, weil es mit SiO2 SiF4 bildet, ist aber eine schwache, in Wasser nur wenig protolysierende Säure.",
        "fr": "Graver le verre n’est pas une mesure de la force d’un acide ; HF attaque le verre car il forme SiF4 avec SiO2, mais c’est un acide faible peu ionisé dans l’eau.",
        "ru": "Способность разъедать стекло — не мера силы кислоты; HF разъедает стекло, потому что реагирует с SiO2 с образованием SiF4, но в воде диссоциирует слабо, т. е. это слабая кислота.",
        "ar": "تآكل الزجاج ليس مقياسًا لقوة الحمض؛ فـHF يذيب الزجاج لأنه يكوّن SiF4 مع SiO2، لكنه حمض ضعيف قليل التأين في الماء.",
        "zh": "腐蚀玻璃并不是衡量酸强度的标准；HF 能与 SiO2 生成 SiF4 而腐蚀玻璃，但它在水中电离很少，是弱酸。",
        "ku": "Xwarina camê pîvana hêza asîdê nîne; HF camê dixwe ji ber ku bi SiO2 re SiF4 çêdike, lê ew asîdeke qels e ku di avê de kêm îyonîze dibe."
      },
      "osymTip": {
        "tr": "HF zayıf asittir; camı aşındırması asit kuvvetinden değil, camdaki SiO2 ile tepkimeye girip SiF4 oluşturmasındandır!",
        "en": "HF is a weak acid; it etches glass not because of its acid strength but because it reacts with the SiO2 in glass to form SiF4!",
        "de": "HF ist eine schwache Säure; sie ätzt Glas nicht wegen ihrer Säurestärke, sondern weil sie mit dem SiO2 des Glases zu SiF4 reagiert!",
        "fr": "HF est un acide faible ; il attaque le verre non pas à cause de sa force acide, mais parce qu'il réagit avec le SiO2 du verre pour former SiF4 !",
        "ru": "HF — слабая кислота; она разъедает стекло не из-за своей силы, а потому, что реагирует с SiO2 стекла с образованием SiF4!",
        "ar": "HF حمض ضعيف؛ وتآكله للزجاج ليس بسبب قوته الحمضية بل لأنه يتفاعل مع SiO2 في الزجاج مكوّنًا SiF4!",
        "zh": "HF 是弱酸；它腐蚀玻璃不是因为酸性强，而是因为它能与玻璃中的 SiO2 反应生成 SiF4！",
        "ku": "HF asîdeke qels e; camê dixwe ne ji ber hêza asîdiyê, lê ji ber ku bi SiO2 ya camê re reaksiyon dike û SiF4 çêdike!"
      }
    },
    {
      "id": "u19-f15",
      "fact": {
        "tr": "NaOH, KOH kuvvetli baz; NH3 (amonyak) zayıf bazdır.",
        "en": "NaOH, KOH strong base; NH3 (ammonia) is a weak base.",
        "de": "NaOH, KOH starke Base; NH3 (Ammoniak) ist eine schwache Base.",
        "fr": "NaOH, KOH base forte ; NH3 (ammoniac) est une base faible.",
        "ru": "NaOH, KOH — сильные основания; NH3 (аммиак) — слабое основание.",
        "ar": "NaOH و KOH قاعدتان قويتان؛ NH3 (الأمونيا) قاعدة ضعيفة.",
        "zh": "NaOH、KOH 是强碱；NH3（氨）是弱碱。",
        "ku": "NaOH, KOH bazên xurt in; NH3 (amonyak) bazeke qels e."
      },
      "trap": {
        "tr": "NH3 kuvvetli bir bazdır.",
        "en": "NH3 is a strong base.",
        "de": "NH3 ist eine starke Base.",
        "fr": "NH3 est une base forte.",
        "ru": "NH3 — сильное основание.",
        "ar": "NH3 قاعدة قوية .",
        "zh": "NH3 是强碱。",
        "ku": "NH3 bazeke xurt e."
      },
      "whyTrapIsFalse": {
        "tr": "NH3 suda yalnızca kısmen proton alarak OH- oluşturur (Kb ≈ 1,8x10^-5); tamamen iyonlaşmadığı için zayıf bazdır.",
        "en": "NH3 accepts protons from water only partially to form OH- (Kb ≈ 1.8x10^-5); since it does not ionize completely, it is a weak base.",
        "de": "NH3 nimmt in Wasser nur teilweise Protonen auf und bildet OH- (Kb ≈ 1,8x10^-5); da es nicht vollständig reagiert, ist es eine schwache Base.",
        "fr": "NH3 ne capte que partiellement les protons de l’eau pour former OH- (Kb ≈ 1,8x10^-5) ; ne s’ionisant pas totalement, c’est une base faible.",
        "ru": "NH3 лишь частично отнимает протоны у воды, образуя OH- (Kb ≈ 1,8x10^-5); реакция аммиака с водой идёт не до конца, поэтому это слабое основание.",
        "ar": "يستقبل NH3 البروتونات من الماء جزئيًا فقط مكوّنًا OH- (Kb ≈ 1.8x10^-5)؛ ولأنه لا يتأين كليًا فهو قاعدة ضعيفة.",
        "zh": "NH3 只能部分地从水中接受质子生成 OH-(Kb ≈ 1.8x10^-5)；由于不能完全电离，它是弱碱。",
        "ku": "NH3 di avê de tenê bi qismî proton digire û OH- çêdike (Kb ≈ 1,8x10^-5); ji ber ku bi tevahî îyonîze nabe, baza qels e."
      }
    },
    {
      "id": "u19-f16",
      "fact": {
        "tr": "İndikatörler ortamın pH'ına bağlı olarak renk değiştiren zayıf organik asit veya bazlardır.",
        "en": "Indicators are weak organic acids or bases that change color depending on the pH of the environment.",
        "de": "Indikatoren sind schwache organische Säuren oder Basen, die je nach pH-Wert der Umgebung ihre Farbe ändern.",
        "fr": "Les indicateurs sont des acides ou des bases organiques faibles qui changent de couleur en fonction du pH de l'environnement.",
        "ru": "Индикаторы — слабые органические кислоты или основания, окраска которых зависит от pH среды.",
        "ar": "المؤشرات عبارة عن أحماض أو قواعد عضوية ضعيفة يتغير لونها حسب الرقم الهيدروجيني للبيئة.",
        "zh": "指示剂是有机弱酸或弱碱，其颜色随溶液 pH 的变化而改变。",
        "ku": "Îndîkator asîd an bazên organîk ên qels in ku li gorî pH ya hawîrdorê reng diguherînin."
      },
      "trap": {
        "tr": "İndikatörler titrasyon tepkimesini hızlandıran katalizörlerdir.",
        "en": "Indicators are catalysts that accelerate the titration reaction.",
        "de": "Indikatoren sind Katalysatoren, die die Titrationsreaktion beschleunigen.",
        "fr": "Les indicateurs sont des catalyseurs qui accélèrent la réaction de titrage.",
        "ru": "Индикаторы — это катализаторы, ускоряющие реакцию титрования.",
        "ar": "المؤشرات عبارة عن محفزات تعمل على تسريع تفاعل المعايرة.",
        "zh": "指示剂是加速滴定反应的催化剂。",
        "ku": "Îndîkator katalîzator in ku reaksiyona tîtrasyonê lez dikin."
      },
      "whyTrapIsFalse": {
        "tr": "İndikatörler tepkime hızını değiştirmez; renkleri pH'a göre değişen zayıf organik asit veya bazlardır ve yalnızca dönüm noktasını göstermek için az miktarda kullanılır.",
        "en": "Indicators do not change the reaction rate; they are weak organic acids or bases whose colour depends on pH, used in small amounts only to show the end point.",
        "de": "Indikatoren verändern die Reaktionsgeschwindigkeit nicht; es sind schwache organische Säuren oder Basen mit pH-abhängiger Farbe, die in kleinen Mengen nur zur Anzeige des Endpunkts dienen.",
        "fr": "Les indicateurs ne modifient pas la vitesse de réaction ; ce sont des acides ou bases organiques faibles dont la couleur dépend du pH, utilisés en petite quantité pour repérer le point de virage.",
        "ru": "Индикаторы не влияют на скорость реакции; это слабые органические кислоты или основания, окраска которых зависит от pH, и их добавляют в малом количестве лишь для того, чтобы зафиксировать конечную точку титрования.",
        "ar": "الكواشف لا تغيّر سرعة التفاعل؛ إنها أحماض أو قواعد عضوية ضعيفة يتغير لونها بتغير pH، وتُستعمل بكمية قليلة لإظهار نقطة النهاية فقط.",
        "zh": "指示剂不改变反应速率；它们是颜色随 pH 变化的有机弱酸或弱碱，少量加入只用于指示滴定终点。",
        "ku": "Îndîkator leza reaksiyonê naguherînin; ew asîd an bazên organîk ên qels in ku rengê wan li gorî pH diguhere, û bi mîqdareke kêm tenê ji bo nîşandana xala dawiyê tên bikaranîn."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u19-c01",
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
        "tr": "Kuvvetli asit suda tamamen (%100) iyonlaşır; iyonlaşması tek yönlü kabul edildiğinden Ka ile denge hesabı yapılmaz. Zayıf asit ise kısmen iyonlaşarak denge kurar ve kuvveti Ka değeriyle ifade edilir.",
        "en": "A strong acid ionizes completely (100%) in water; its ionization is treated as one-way, so no equilibrium calculation with Ka is made. A weak acid ionizes only partially, establishes an equilibrium, and its strength is expressed by its Ka value.",
        "de": "Starke Säure: ionisiert in Wasser vollständig (zu 100 %); die Ionisation gilt als einseitig, daher wird keine Gleichgewichtsrechnung mit Ka durchgeführt. Eine schwache Säure ionisiert nur teilweise, es stellt sich ein Gleichgewicht ein, und ihre Stärke wird durch den Ka-Wert angegeben.",
        "fr": "Acide fort : s'ionise totalement (à 100 %) dans l'eau ; son ionisation est considérée comme totale et à sens unique, on ne fait donc pas de calcul d'équilibre avec Ka. Un acide faible ne s'ionise que partiellement, établit un équilibre, et sa force s'exprime par la valeur de Ka.",
        "ru": "Сильная кислота диссоциирует в воде полностью (на 100 %); такую диссоциацию считают необратимой, и равновесный расчёт с Ka не проводят. Слабая кислота диссоциирует лишь частично с установлением равновесия, и её силу выражают значением Ka.",
        "ar": "يتأين الحمض القوي في الماء تأينًا تامًّا (100%)، ويُعدّ تأينه في اتجاه واحد فلا تُجرى له حسابات اتزان باستخدام Ka؛ أما الأحماض الضعيفة فتتأين جزئيًا وتكوّن اتزانًا، ويُعبَّر عن قوتها بقيمة Ka.",
        "zh": "强酸在水中完全(100%)电离，电离视为不可逆，因此不用 Ka 作平衡计算；弱酸只部分电离并建立平衡，其强弱用 Ka 值表示。",
        "ku": "Asîda xurt di avê de bi temamî (%100) îyonîze dibe; îyonîzasyona wê yekalî tê hesibandin, ji ber vê bi Ka hesabê hevsengiyê nayê kirin. Asîda qels tenê bi qismî îyonîze dibe, hevsengî saz dike û hêza wê bi nirxa Ka tê nîşandan."
      }
    },
    {
      "id": "u19-c02",
      "conceptA": {
        "tr": "Eşdeğerlik Noktası",
        "en": "Equivalence Point",
        "de": "Äquivalenzpunkt",
        "fr": "Point d'équivalence",
        "ru": "Точка эквивалентности",
        "ar": "نقطة التكافؤ",
        "zh": "化学计量点",
        "ku": "Xala Hevwateyê"
      },
      "conceptB": {
        "tr": "Nötr Nokta",
        "en": "Neutral Point",
        "de": "Neutraler Punkt",
        "fr": "Point neutre",
        "ru": "Нейтральная точка",
        "ar": "نقطة محايدة",
        "zh": "中性点",
        "ku": "Xala Bêalî"
      },
      "distinction": {
        "tr": "Eşdeğerlik noktası, asitten gelen H+ ile bazdan gelen OH- mol sayılarının eşit olduğu (nH+ = nOH-) noktadır; nötr nokta ise çözeltinin pH değerinin 25 °C'de 7 olduğu noktadır. Bu iki nokta yalnızca kuvvetli asit-kuvvetli baz titrasyonunda çakışır; zayıf asit-kuvvetli baz titrasyonunda eşdeğerlik noktasında pH > 7'dir.",
        "en": "The equivalence point is the point at which the moles of H+ from the acid equal the moles of OH- from the base (nH+ = nOH-); the neutral point is the point at which the pH of the solution is 7 at 25 °C. The two coincide only in a strong acid-strong base titration; in a weak acid-strong base titration, pH > 7 at the equivalence point.",
        "de": "Äquivalenzpunkt: Punkt, an dem die Stoffmenge an H+ aus der Säure gleich der Stoffmenge an OH- aus der Base ist (nH+ = nOH-); der Neutralpunkt ist dagegen der Punkt, an dem der pH-Wert der Lösung bei 25 °C gleich 7 ist. Beide fallen nur bei der Titration einer starken Säure mit einer starken Base zusammen; bei schwacher Säure und starker Base gilt pH > 7, wenn nH+ = nOH- erreicht ist.",
        "fr": "Point d'équivalence : point où la quantité de H+ apportée par l'acide est égale à la quantité de OH- apportée par la base (nH+ = nOH-) ; le point neutre est le point où le pH de la solution vaut 7 à 25 °C. Les deux ne coïncident que lors du titrage d'un acide fort par une base forte ; pour un acide faible titré par une base forte, pH > 7 lorsque nH+ = nOH-.",
        "ru": "Точка эквивалентности — точка, в которой количество H+ кислоты равно количеству OH- основания (nH+ = nOH-); нейтральная точка — точка, в которой pH раствора при 25 °C равен 7. Они совпадают только при титровании сильной кислоты сильным основанием; при титровании слабой кислоты сильным основанием в момент, когда nH+ = nOH-, pH > 7.",
        "ar": "نقطة التكافؤ هي النقطة التي يتساوى عندها عدد مولات H+ من الحمض مع عدد مولات OH- من القاعدة (nH+ = nOH-)؛ أما النقطة المحايدة فهي النقطة التي يكون عندها pH المحلول 7 عند 25 °C. ولا تتطابق النقطتان إلا في معايرة حمض قوي بقاعدة قوية؛ ففي معايرة حمض ضعيف بقاعدة قوية يكون pH > 7 عندما nH+ = nOH-.",
        "zh": "化学计量点是酸提供的 H+ 与碱提供的 OH- 物质的量相等(nH+ = nOH-)的点；中性点则是 25 °C 时溶液 pH 为 7 的点。只有在强酸-强碱滴定中两者才重合；弱酸-强碱滴定中，nH+ = nOH- 时 pH > 7。",
        "ku": "Xala hevwateyê ew xal e ku hejmara molên H+ ya asîdê û hejmara molên OH- ya bazê wekhev in (nH+ = nOH-); xala bêalî ew xal e ku li 25 °C pH ya çareseriyê 7 e. Ev her du xal tenê di tîtrasyona asîda xurt-baza xurt de li hev tên; di tîtrasyona asîda qels-baza xurt de li xala hevwateyê pH > 7 e."
      }
    },
    {
      "id": "u19-c03",
      "conceptA": {
        "tr": "Kuvvetli Baz (NaOH)",
        "en": "Strong Base (NaOH)",
        "de": "Starke Base (NaOH)",
        "fr": "Base forte (NaOH)",
        "ru": "Сильное основание (NaOH)",
        "ar": "قاعدة قوية (NaOH)",
        "zh": "强碱(NaOH)",
        "ku": "Baza Xurt (NaOH)"
      },
      "conceptB": {
        "tr": "Zayıf Baz (NH3)",
        "en": "Weak Base (NH3)",
        "de": "Schwache Base (NH3)",
        "fr": "Base faible (NH3)",
        "ru": "Слабое основание (NH3)",
        "ar": "قاعدة ضعيفة (NH3)",
        "zh": "弱碱(NH3)",
        "ku": "Baza Qels (NH3)"
      },
      "distinction": {
        "tr": "NaOH suda %100 iyonlaşır ve pOH = -log Cb olur; NH3 sudan kısmen H+ alarak OH- oluşturur, denge kurar ve [OH-] ≈ √(Kb * Cb) yaklaşımıyla hesaplanır.",
        "en": "NaOH ionizes 100% in water, so pOH = -log Cb; NH3 partially accepts H+ from water to form OH-, establishes an equilibrium, and [OH-] is estimated by [OH-] ≈ √(Kb * Cb).",
        "de": "NaOH dissoziiert in Wasser zu 100 %, daher pOH = -log Cb; NH3 nimmt teilweise H+ aus Wasser auf, bildet OH-, stellt ein Gleichgewicht ein, und [OH-] wird mit [OH-] ≈ √(Kb * Cb) abgeschätzt.",
        "fr": "NaOH s’ionise à 100 % dans l’eau, donc pOH = -log Cb ; NH3 capte partiellement H+ de l’eau pour former OH-, établit un équilibre, et [OH-] s’estime par [OH-] ≈ √(Kb * Cb).",
        "ru": "Сильное основание (NaOH) диссоциирует в воде на 100 %, поэтому pOH = -log Cb; слабое основание (NH3) частично отнимает H+ у воды, образуя OH-, устанавливается равновесие, и [OH-] рассчитывают по приближённой формуле [OH-] ≈ √(Kb * Cb).",
        "ar": "يتأين NaOH في الماء بنسبة 100% فيكون pOH = -log Cb؛ أما NH3 فيستقبل H+ من الماء جزئيًا مكوّنًا OH- ويصل إلى اتزان، ويُقدَّر [OH-] بالعلاقة التقريبية [OH-] ≈ √(Kb * Cb).",
        "zh": "强碱(NaOH)在水中 100% 电离，pOH = -log Cb；弱碱(NH3)只能部分地从水中接受 H+ 生成 OH- 并建立平衡，[OH-] 用近似式 [OH-] ≈ √(Kb * Cb) 估算。",
        "ku": "NaOH di avê de %100 îyonîze dibe û pOH = -log Cb ye; NH3 ji avê bi qismî H+ digire, OH- çêdike, hevsengî saz dibe û [OH-] bi nêzîkatiya [OH-] ≈ √(Kb * Cb) tê hesabkirin."
      }
    },
    {
      "id": "u19-c04",
      "conceptA": {
        "tr": "Asit Ayrışma Sabiti (Ka)",
        "en": "Acid Dissociation Constant (Ka)",
        "de": "Säuredissoziationskonstante (Ka)",
        "fr": "Constante de dissociation acide (Ka)",
        "ru": "Константа диссоциации кислоты (Ka)",
        "ar": "ثابت تفكك الحمض (Ka)",
        "zh": "酸的电离常数(Ka)",
        "ku": "Sabîta Veqetîna Asîdê (Ka)"
      },
      "conceptB": {
        "tr": "Baz Ayrışma Sabiti (Kb)",
        "en": "Base Dissociation Constant (Kb)",
        "de": "Basendissoziationskonstante (Kb)",
        "fr": "Constante de dissociation de base (Kb)",
        "ru": "Константа диссоциации основания (Kb)",
        "ar": "ثابت تأين القاعدة (Kb)",
        "zh": "碱的电离常数(Kb)",
        "ku": "Sabîta Veqetîna Bazê (Kb)"
      },
      "distinction": {
        "tr": "Ka, HA ⇌ H+ + A- iyonlaşma dengesinin sabitidir ve HA'nın proton verme eğilimini (asitlik kuvvetini) gösterir; Kb ise B + H2O ⇌ BH+ + OH- dengesinin sabitidir ve B'nin proton alma eğilimini (bazlık kuvvetini) gösterir. Eşlenik asit-baz çiftinde bu iki sabitin çarpımı Ksu'ya eşittir (25 °C'de 10^-14).",
        "en": "Ka is the equilibrium constant of the ionization HA ⇌ H+ + A- and measures how readily HA donates a proton; Kb is the equilibrium constant of B + H2O ⇌ BH+ + OH- and measures how readily B accepts a proton. For a conjugate pair the product of the two constants equals Kw (10^-14 at 25 °C).",
        "de": "Ka ist die Gleichgewichtskonstante der Ionisation HA ⇌ H+ + A- und gibt an, wie leicht HA ein Proton abgibt; Kb ist die Gleichgewichtskonstante von B + H2O ⇌ BH+ + OH- und gibt an, wie leicht B ein Proton aufnimmt. Für ein konjugiertes Paar ist das Produkt beider Konstanten gleich Kw (10^-14 bei 25 °C).",
        "fr": "Ka est la constante d'équilibre de l'ionisation HA ⇌ H+ + A- et mesure la facilité avec laquelle HA cède un proton ; Kb est la constante d'équilibre de B + H2O ⇌ BH+ + OH- et mesure la facilité avec laquelle B capte un proton. Pour un couple conjugué, le produit des deux constantes est égal à Ke (10^-14 à 25 °C).",
        "ru": "Ka — константа равновесия HA ⇌ H+ + A-, характеризующая склонность HA отдавать протон (кислотные свойства); Kb — константа равновесия B + H2O ⇌ BH+ + OH-, характеризующая склонность B принимать протон (основные свойства). Для сопряжённой пары произведение этих констант равно Kw (10^-14 при 25 °C).",
        "ar": "Ka هو ثابت اتزان التأين HA ⇌ H+ + A- ويدل على مدى سهولة منح HA للبروتون؛ أما Kb فهو ثابت اتزان B + H2O ⇌ BH+ + OH- ويدل على مدى سهولة استقبال B للبروتون. وفي الزوج المترافق يكون حاصل ضرب الثابتين مساويًا لـ Kw (10^-14 عند 25 °C).",
        "zh": "酸的电离常数(Ka)是电离平衡 HA ⇌ H+ + A- 的平衡常数，表示 HA 给出质子的倾向；碱的电离常数(Kb)是 B + H2O ⇌ BH+ + OH- 的平衡常数，表示 B 接受质子的倾向。对共轭酸碱对，两者的乘积等于 Kw(25 °C 时为 10^-14)。",
        "ku": "Ka sabîta hevsengiya îyonîzasyona HA ⇌ H+ + A- ye û nîşan dide ku HA çiqas bi hêsanî protonekê dide; Kb sabîta hevsengiya B + H2O ⇌ BH+ + OH- ye û nîşan dide ku B çiqas bi hêsanî protonekê digire. Di cota hevgirtî de hevdana van her du sabîtan wekheviya Ksu ye (li 25 °C 10^-14)."
      }
    },
    {
      "id": "u19-c05",
      "conceptA": {
        "tr": "Tampon Çözelti",
        "en": "Buffer Solution",
        "de": "Pufferlösung",
        "fr": "Solution tampon",
        "ru": "Буферный раствор",
        "ar": "المحلول المنظم",
        "zh": "缓冲溶液",
        "ku": "Çareseriya tampon"
      },
      "conceptB": {
        "tr": "Nötr Çözelti",
        "en": "Neutral Solution",
        "de": "Neutrale Lösung",
        "fr": "Solution neutre",
        "ru": "Нейтральный раствор",
        "ar": "المحلول المتعادل",
        "zh": "中性溶液",
        "ku": "Çareseriya Bêalî"
      },
      "distinction": {
        "tr": "Tampon çözelti zayıf asit ile eşlenik bazını içerir ve az miktarda asit ya da baz eklendiğinde pH'ı pek değişmez; tampon olmayan nötr çözeltide (25 °C'de pH = 7) az miktar asit eklenince pH hızla düşer.",
        "en": "A buffer solution contains a weak acid and its conjugate base, so its pH hardly changes when small amounts of acid or base are added; in a neutral solution without such a pair (pH = 7 at 25 °C) a little acid makes the pH drop sharply.",
        "de": "Pufferlösung: enthält eine schwache Säure und ihre konjugierte Base, daher ändert sich ihr pH bei Zugabe kleiner Mengen Säure oder Base kaum; in einer neutralen Lösung ohne ein solches Paar (pH = 7 bei 25 °C) sinkt der pH schon durch wenig Säure stark.",
        "fr": "Solution tampon : contient un acide faible et sa base conjuguée, si bien que son pH varie peu lors de l'ajout de petites quantités d'acide ou de base ; dans une solution neutre sans un tel couple (pH = 7 à 25 °C), un peu d'acide fait chuter fortement le pH.",
        "ru": "Буферный раствор содержит слабую кислоту и сопряжённое с ней основание, поэтому его pH почти не меняется при добавлении небольших количеств кислоты или щёлочи; в небуферном нейтральном растворе (pH = 7 при 25 °C) даже небольшое количество кислоты резко снижает pH.",
        "ar": "يحتوي المحلول المنظم على حمض ضعيف وقاعدته المرافقة، فلا يتغير pH له كثيرًا عند إضافة كميات قليلة من حمض أو قاعدة؛ أما في المحلول المتعادل غير المنظم (pH = 7 عند 25 °C) فإن قليلًا من الحمض يخفض pH بشدة.",
        "zh": "缓冲溶液含有弱酸及其共轭碱，加入少量酸或碱时 pH 几乎不变；而中性溶液(25 °C 时 pH = 7)不含这种共轭酸碱对，加入少量酸时 pH 会急剧下降。",
        "ku": "Çareseriya tampon asîdeke qels û baza wê ya hevgirtî dihewîne, ji ber vê dema asîd an baza kêm lê tê zêdekirin pH hema naguhere; di çareseriya bêalî ya bê cotek wiha de (li 25 °C pH = 7) bi asîdeke kêm pH zû dadikeve."
      }
    },
    {
      "id": "u19-c06",
      "conceptA": {
        "tr": "Arrhenius Asidi",
        "en": "Arrhenius Acid",
        "de": "Arrhenius-Säure",
        "fr": "Acide d'Arrhenius",
        "ru": "Кислота Аррениуса",
        "ar": "حمض أرهينيوس",
        "zh": "阿伦尼乌斯酸",
        "ku": "Asîda Arrhenius"
      },
      "conceptB": {
        "tr": "Brønsted-Lowry Asidi",
        "en": "Brønsted-Lowry Acid",
        "de": "Brønsted-Lowry-Säure",
        "fr": "Acide de Brønsted-Lowry",
        "ru": "Кислота Брёнстеда — Лоури",
        "ar": "حمض برونستد-لوري",
        "zh": "布朗斯特-劳里酸",
        "ku": "Asîda Brønsted-Lowry"
      },
      "distinction": {
        "tr": "Arrhenius asidi suda çözündüğünde H+ (H3O+) derişimini artıran maddedir; Brønsted-Lowry asidi ise tepkimede başka bir türe proton (H+) veren türdür ve tanımı sulu ortamla sınırlı değildir.",
        "en": "An Arrhenius acid is a substance that increases the H+ (H3O+) concentration when dissolved in water; a Brønsted-Lowry acid is a species that donates a proton (H+) to another species, and the definition is not limited to aqueous solutions.",
        "de": "Arrhenius-Säure: Stoff, der beim Lösen in Wasser die H+ (H3O+)-Konzentration erhöht; eine Brønsted-Lowry-Säure ist ein Teilchen, das ein Proton (H+) an ein anderes Teilchen abgibt, und die Definition ist nicht auf wässrige Lösungen beschränkt.",
        "fr": "Acide d'Arrhenius : substance qui augmente la concentration en H+ (H3O+) lorsqu'elle est dissoute dans l'eau ; un acide de Brønsted-Lowry est une espèce qui cède un proton (H+) à une autre espèce, et cette définition ne se limite pas aux solutions aqueuses.",
        "ru": "Кислота Аррениуса — вещество, которое при растворении в воде увеличивает концентрацию H+ (H3O+); кислота Брёнстеда — Лоури — частица, отдающая протон (H+) другой частице, и это определение не ограничено водными растворами.",
        "ar": "حمض أرهينيوس مادة تزيد تركيز H+ (H3O+) عند ذوبانها في الماء؛ أما حمض برونستد-لوري فهو نوع يمنح بروتونًا (H+) لنوع آخر، ولا يقتصر تعريفه على المحاليل المائية.",
        "zh": "阿伦尼乌斯酸是溶于水时使 H+(H3O+)浓度增大的物质；布朗斯特-劳里酸是能向其他微粒给出质子(H+)的微粒，其定义不限于水溶液。",
        "ku": "Asîda Arrhenius maddeyek e ku dema di avê de dihele tîrbûna H+ (H3O+) zêde dike; asîda Brønsted-Lowry cureyek e ku protonekê (H+) dide cureyeke din û pênaseya wê bi avê ve sînordar nîne."
      }
    },
    {
      "id": "u19-c07",
      "conceptA": {
        "tr": "Konjuge (Eşlenik) Asit",
        "en": "Conjugate Acid",
        "de": "Konjugierte Säure",
        "fr": "Acide conjugué",
        "ru": "Сопряжённая кислота",
        "ar": "حمض مترافق",
        "zh": "共轭酸",
        "ku": "Asîda Hevgirtî (Konjuge)"
      },
      "conceptB": {
        "tr": "Konjuge (Eşlenik) Baz",
        "en": "Conjugate Base",
        "de": "Konjugierte Base",
        "fr": "Base conjuguée",
        "ru": "Сопряжённое основание",
        "ar": "قاعدة مترافقة",
        "zh": "共轭碱",
        "ku": "Baza Hevgirtî (Konjuge)"
      },
      "distinction": {
        "tr": "Konjuge asit, aralarında 1 proton (H+) farkı bulunan asit-baz çiftinin fazladan H+ içeren ve proton verebilen üyesidir; konjuge baz ise aynı çiftin proton alabilen üyesidir (ör. NH4+ / NH3 çiftinde NH4+ proton verir, NH3 proton alır).",
        "en": "A conjugate acid is the member of an acid-base pair differing by one proton (H+) that carries the extra H+ and can donate a proton; the conjugate base is the member of the same pair that can accept a proton (e.g. in the NH4+ / NH3 pair, NH4+ donates the proton and NH3 accepts it).",
        "de": "Konjugierte Säure: das Teilchen eines Säure-Base-Paares mit einem Proton (H+) Unterschied, das das zusätzliche H+ trägt und ein Proton abgeben kann; die konjugierte Base ist das Teilchen desselben Paares, das ein Proton aufnehmen kann (z. B. im Paar NH4+ / NH3 gibt NH4+ das Proton ab, NH3 nimmt es auf).",
        "fr": "Acide conjugué : membre d'un couple acide-base différant d'un proton (H+) qui porte le H+ supplémentaire et peut céder un proton ; la base conjuguée est le membre du même couple qui peut capter un proton (ex. dans le couple NH4+ / NH3, NH4+ cède le proton et NH3 le capte).",
        "ru": "Сопряжённая кислота — член кислотно-основной пары (её частицы различаются на один протон H+), содержащий лишний H+ и способный отдать протон; сопряжённое основание — член той же пары, способный присоединить протон (например, в паре NH4+ / NH3 протон отдаёт NH4+, а присоединяет NH3).",
        "ar": "الحمض المترافق هو فرد زوج الحمض والقاعدة (اللذين يختلفان ببروتون واحد H+) الذي يحمل H+ الإضافي ويستطيع منح بروتون؛ أما القاعدة المترافقة فهي فرد الزوج نفسه الذي يستطيع استقبال بروتون (مثلًا في الزوج NH4+ / NH3 يمنح NH4+ البروتون ويستقبله NH3).",
        "zh": "共轭酸是相差一个质子(H+)的一对酸碱中多一个 H+、能给出质子的一方；共轭碱则是同一对中能接受质子的一方(如 NH4+/NH3 中，NH4+ 给出质子，NH3 接受质子)。",
        "ku": "Asîda hevgirtî ew endamê cota asîd-baz e ku 1 proton (H+) ferqa wan heye, H+ ya zêde hildigire û dikare protonekê bide; endamê din ê heman cotê, ku dikare protonekê bigire, baza wê ye (mînak di cota NH4+ / NH3 de NH4+ protonê dide, NH3 wê digire)."
      }
    },
    {
      "id": "u19-c08",
      "conceptA": {
        "tr": "Katyon Hidrolizi",
        "en": "Cation Hydrolysis",
        "de": "Kationenhydrolyse",
        "fr": "Hydrolyse des cations",
        "ru": "Катионный гидролиз",
        "ar": "التحلل الكاتيوني",
        "zh": "阳离子水解",
        "ku": "Hîdrolîza Katyonê"
      },
      "conceptB": {
        "tr": "Anyon Hidrolizi",
        "en": "Anion Hydrolysis",
        "de": "Anionenhydrolyse",
        "fr": "Hydrolyse des anions",
        "ru": "Анионный гидролиз",
        "ar": "التحلل الأنيوني",
        "zh": "阴离子水解",
        "ku": "Hîdrolîza Anyonê"
      },
      "distinction": {
        "tr": "Zayıf bazdan gelen katyon (NH4+) hidroliz olarak asidik ortam yapar; zayıf asitten gelen anyon (CH3COO-) hidrolizle bazik ortam yapar.",
        "en": "The cation (NH4+) coming from the weak base creates an acidic environment by hydrolysis; the anion (CH3COO-) coming from the weak acid creates a basic environment by hydrolysis.",
        "de": "Das aus der schwachen Base stammende Kation (NH4+) erzeugt durch Hydrolyse ein saures Milieu; das aus der schwachen Säure stammende Anion (CH3COO-) erzeugt durch Hydrolyse ein basisches Milieu.",
        "fr": "Le cation (NH4+) issu de la base faible crée un milieu acide par hydrolyse ; l'anion (CH3COO-) issu de l'acide faible crée un milieu basique par hydrolyse.",
        "ru": "Катионный гидролиз — гидролиз катиона слабого основания (NH4+), создающий кислую среду; анионный гидролиз — гидролиз аниона слабой кислоты (CH3COO-), создающий щелочную среду.",
        "ar": "الكاتيون (NH4+) القادم من القاعدة الضعيفة يخلق بيئة حمضية عن طريق التحلل المائي؛ يخلق الأنيون (CH3COO-) القادم من الحمض الضعيف بيئة أساسية عن طريق التحلل المائي.",
        "zh": "阳离子水解是来自弱碱的阳离子(如 NH4+)与水反应，使溶液呈酸性；阴离子水解是来自弱酸的阴离子(如 CH3COO-)与水反应，使溶液呈碱性。",
        "ku": "Katyona ku ji baza qels tê (NH4+) hîdrolîz dibe û hawîrdoreke asîdî çêdike; anyona ku ji asîda qels tê (CH3COO-) hîdrolîz dibe û hawîrdoreke bazîk çêdike."
      }
    }
  ],
  "sequences": [
    {
      "id": "u19-s01",
      "title": {
        "tr": "Zayıf Asit Çözeltisinde pH Hesaplama Adımları",
        "en": "Steps for Calculating the pH of a Weak Acid Solution",
        "de": "Schritte zur pH-Berechnung einer schwachen Säure",
        "fr": "Étapes du calcul du pH d’une solution d’acide faible",
        "ru": "Этапы расчёта pH раствора слабой кислоты",
        "ar": "خطوات حساب pH لمحلول حمض ضعيف",
        "zh": "弱酸溶液 pH 的计算步骤",
        "ku": "Gavên Hesabkirina pH ya Çareseriya Asîda Qels"
      },
      "steps": [
        {
          "tr": "İyonlaşma denklemi yazılır: HA ⇌ H+ + A-",
          "en": "Write the ionization equation: HA ⇌ H+ + A-",
          "de": "Protolysegleichung aufstellen: HA ⇌ H+ + A-",
          "fr": "Écrire l’équation d’ionisation : HA ⇌ H+ + A-",
          "ru": "Записать уравнение ионизации: HA ⇌ H+ + A-",
          "ar": "تُكتب معادلة التأين: HA ⇌ H+ + A-",
          "zh": "写出电离方程式：HA ⇌ H+ + A-",
          "ku": "Hevkêşana îyonîzasyonê tê nivîsandin: HA ⇌ H+ + A-"
        },
        {
          "tr": "Ka = [H+][A-] / [HA] ifadesi yazılır ve iyonlaşan kısım çok küçük olduğundan [HA] ≈ Ca kabul edilir",
          "en": "Write Ka = [H+][A-] / [HA] and, since the ionized part is very small, assume [HA] ≈ Ca",
          "de": "Ka = [H+][A-] / [HA] aufschreiben und, da der protolysierte Anteil sehr klein ist, [HA] ≈ Ca annehmen",
          "fr": "Écrire Ka = [H+][A-] / [HA] et, la fraction ionisée étant très faible, poser [HA] ≈ Ca",
          "ru": "Записать Ka = [H+][A-] / [HA] и, поскольку продиссоциировавшая часть очень мала, принять [HA] ≈ Ca",
          "ar": "تُكتب العلاقة Ka = [H+][A-] / [HA]، ولأن الجزء المتأين صغير جدًا يُعتبر [HA] ≈ Ca",
          "zh": "写出 Ka = [H+][A-]/[HA]，由于电离部分很小，取 [HA] ≈ Ca",
          "ku": "Ka = [H+][A-] / [HA] tê nivîsandin û ji ber ku beşa îyonîzebûyî pir piçûk e, [HA] ≈ Ca tê qebûlkirin"
        },
        {
          "tr": "[H+] ≈ √(Ka * Ca) yaklaşımıyla H+ derişimi hesaplanır",
          "en": "Calculate [H+] with the approximation [H+] ≈ √(Ka * Ca)",
          "de": "[H+] mit der Näherung [H+] ≈ √(Ka * Ca) berechnen",
          "fr": "Calculer [H+] avec l’approximation [H+] ≈ √(Ka * Ca)",
          "ru": "Рассчитать [H+] по приближённой формуле [H+] ≈ √(Ka * Ca)",
          "ar": "يُحسب [H+] بالعلاقة التقريبية [H+] ≈ √(Ka * Ca)",
          "zh": "用近似式 [H+] ≈ √(Ka * Ca) 计算 [H+]",
          "ku": "Tîrbûna H+ bi nêzîkatiya [H+] ≈ √(Ka * Ca) tê hesabkirin"
        },
        {
          "tr": "pH = -log[H+] ile çözeltinin pH değeri bulunur",
          "en": "Find the pH of the solution using pH = -log[H+]",
          "de": "Den pH der Lösung mit pH = -log[H+] bestimmen",
          "fr": "Déterminer le pH de la solution par pH = -log[H+]",
          "ru": "Найти pH раствора по формуле pH = -log[H+]",
          "ar": "يُوجد pH المحلول من العلاقة pH = -log[H+]",
          "zh": "由 pH = -log[H+] 求出溶液的 pH",
          "ku": "Bi pH = -log[H+] nirxa pH ya çareseriyê tê dîtin"
        }
      ]
    },
    {
      "id": "u19-s02",
      "title": {
        "tr": "Asit-Baz Titrasyonu Deney Adımları",
        "en": "Experimental Steps of an Acid-Base Titration",
        "de": "Versuchsschritte einer Säure-Base-Titration",
        "fr": "Étapes expérimentales d’un titrage acide-base",
        "ru": "Порядок проведения кислотно-основного титрования",
        "ar": "خطوات تجربة معايرة حمض بقاعدة",
        "zh": "酸碱滴定的实验步骤",
        "ku": "Gavên Ceribandina Tîtrasyona Asîd-Bazê"
      },
      "steps": [
        {
          "tr": "Erlene hacmi bilinen asit çözeltisi ve birkaç damla indikatör (ör. fenolftalein) konur",
          "en": "Put a known volume of the acid solution and a few drops of indicator (e.g. phenolphthalein) into the conical flask",
          "de": "Ein bekanntes Volumen der Säurelösung und einige Tropfen Indikator (z. B. Phenolphthalein) in den Erlenmeyerkolben geben",
          "fr": "Introduire dans l’erlenmeyer un volume connu de solution acide et quelques gouttes d’indicateur (ex. phénolphtaléine)",
          "ru": "Поместить в коническую колбу известный объём раствора кислоты и несколько капель индикатора (например, фенолфталеина)",
          "ar": "يوضع في الدورق المخروطي حجم معلوم من محلول الحمض وبضع قطرات من الكاشف (مثل الفينولفثالين)",
          "zh": "向锥形瓶中加入已知体积的酸溶液和几滴指示剂（如酚酞）",
          "ku": "Qebareyeke naskirî ya çareseriya asîdê û çend dilopên îndîkatorê (mînak fenolftaleîn) dikevin erlenê"
        },
        {
          "tr": "Derişimi bilinen baz çözeltisi bürete doldurulur ve başlangıç hacmi okunur",
          "en": "Fill the burette with the base solution of known concentration and read the initial volume",
          "de": "Die Bürette mit der Baselösung bekannter Konzentration füllen und das Anfangsvolumen ablesen",
          "fr": "Remplir la burette avec la solution basique de concentration connue et lire le volume initial",
          "ru": "Заполнить бюретку раствором основания известной концентрации и записать начальный объём",
          "ar": "تُملأ السحاحة بمحلول القاعدة المعلوم التركيز ويُقرأ الحجم الابتدائي",
          "zh": "将已知浓度的碱溶液装入滴定管并读取初始体积",
          "ku": "Bûret bi çareseriya bazê ya tîrbûna wê naskirî tê dagirtin û qebareya destpêkê tê xwendin"
        },
        {
          "tr": "Baz, erlen sürekli çalkalanarak damla damla eklenir; indikatörün rengi kalıcı olarak değiştiği anda (dönüm noktası) musluk kapatılır ve harcanan hacim okunur",
          "en": "Add the base drop by drop while swirling the flask; close the tap as soon as the indicator colour changes permanently (end point) and read the volume used",
          "de": "Die Base unter ständigem Schwenken tropfenweise zugeben; beim bleibenden Farbumschlag des Indikators (Endpunkt) den Hahn schließen und das verbrauchte Volumen ablesen",
          "fr": "Ajouter la base goutte à goutte en agitant ; fermer le robinet dès que la couleur de l’indicateur change durablement (point de virage) et lire le volume versé",
          "ru": "Добавлять основание по каплям, постоянно перемешивая содержимое колбы; при устойчивом изменении окраски индикатора (конечная точка титрования) закрыть кран и записать израсходованный объём",
          "ar": "تُضاف القاعدة قطرة قطرة مع رجّ الدورق باستمرار، ويُغلق الصنبور لحظة تغير لون الكاشف تغيرًا دائمًا (نقطة النهاية) ويُقرأ الحجم المستهلك",
          "zh": "边摇动锥形瓶边逐滴加入碱溶液；指示剂颜色发生持久变化（滴定终点）时立即关闭活塞并读取消耗的体积",
          "ku": "Baz bi hejandina berdewam a erlenê dilop bi dilop tê zêdekirin; gava rengê îndîkatorê bi domdarî diguhere (xala dawiyê) musluk tê girtin û qebareya xerckirî tê xwendin"
        },
        {
          "tr": "Ma * Va * Za = Mb * Vb * Zb bağıntısıyla asidin derişimi hesaplanır",
          "en": "Calculate the acid concentration using Ma * Va * Za = Mb * Vb * Zb",
          "de": "Die Säurekonzentration mit Ma * Va * Za = Mb * Vb * Zb berechnen",
          "fr": "Calculer la concentration de l’acide par Ma * Va * Za = Mb * Vb * Zb",
          "ru": "Рассчитать концентрацию кислоты по формуле Ma * Va * Za = Mb * Vb * Zb",
          "ar": "يُحسب تركيز الحمض بالعلاقة Ma * Va * Za = Mb * Vb * Zb",
          "zh": "用 Ma * Va * Za = Mb * Vb * Zb 计算酸的浓度",
          "ku": "Tîrbûna asîdê bi têkiliya Ma * Va * Za = Mb * Vb * Zb tê hesabkirin"
        }
      ]
    },
    {
      "id": "u19-s03",
      "title": {
        "tr": "Tampon Çözelti Mekanizması",
        "en": "Buffer Solution Mechanism",
        "de": "Pufferlösungsmechanismus",
        "fr": "Mécanisme de solution tampon",
        "ru": "Механизм действия буферного раствора",
        "ar": "آلية الحل العازلة",
        "zh": "缓冲溶液的作用原理",
        "ku": "Mekanîzmaya Çareseriya Tampon"
      },
      "steps": [
        {
          "tr": "Zayıf asit ile eşlenik bazını içeren tuzu aynı çözeltide çözülür (ör. CH3COOH ve CH3COONa)",
          "en": "A weak acid and a salt containing its conjugate base are dissolved in the same solution (e.g. CH3COOH and CH3COONa)",
          "de": "Eine schwache Säure und ein Salz mit ihrer konjugierten Base werden in derselben Lösung gelöst (z. B. CH3COOH und CH3COONa)",
          "fr": "Un acide faible et un sel contenant sa base conjuguée sont dissous dans la même solution (ex. CH3COOH et CH3COONa)",
          "ru": "Слабую кислоту и соль, содержащую сопряжённое с ней основание, растворяют вместе (например, CH3COOH и CH3COONa)",
          "ar": "يُذاب حمض ضعيف وملح يحتوي على قاعدته المرافقة في المحلول نفسه (مثل CH3COOH و CH3COONa)",
          "zh": "将弱酸和含其共轭碱的盐溶于同一溶液中(如 CH3COOH 和 CH3COONa)",
          "ku": "Asîdeke qels û xwêyeke ku baza wê ya hevgirtî dihewîne di heman çareseriyê de tên helandin (mînak CH3COOH û CH3COONa)"
        },
        {
          "tr": "Çözeltide hem zayıf asit (HA) hem de eşlenik bazı (A-) önemli miktarda bulunur",
          "en": "The solution contains significant amounts of both the weak acid (HA) and its conjugate base (A-)",
          "de": "Die Lösung enthält sowohl die schwache Säure (HA) als auch ihre konjugierte Base (A-) in nennenswerter Menge",
          "fr": "La solution contient des quantités importantes à la fois de l’acide faible (HA) et de sa base conjuguée (A-)",
          "ru": "В растворе в заметных количествах присутствуют и слабая кислота (HA), и её сопряжённое основание (A-)",
          "ar": "يحتوي المحلول على كميات معتبرة من الحمض الضعيف (HA) ومن قاعدته المرافقة (A-) معًا",
          "zh": "溶液中同时含有相当量的弱酸(HA)及其共轭碱(A-)",
          "ku": "Di çareseriyê de hem asîda qels (HA) hem jî baza wê ya konjuge (A-) bi mîqdareke girîng heye"
        },
        {
          "tr": "Eklenen az miktardaki H+ iyonlarını A-, OH- iyonlarını ise HA tüketir",
          "en": "Small amounts of added H+ ions are consumed by A-, and added OH- ions by HA",
          "de": "Kleine Mengen zugesetzter H+-Ionen werden von A-, zugesetzte OH--Ionen von HA verbraucht",
          "fr": "De petites quantités d’ions H+ ajoutés sont consommées par A-, et les ions OH- ajoutés par HA",
          "ru": "Небольшие количества добавленных ионов H+ связываются ионами A-, а ионы OH- — кислотой HA",
          "ar": "تستهلك A- أيونات H+ المضافة بكميات قليلة، ويستهلك HA أيونات OH- المضافة",
          "zh": "少量加入的 H+ 被 A- 消耗，加入的 OH- 被 HA 消耗",
          "ku": "Îyonên H+ yên bi mîqdara kêm hatine zêdekirin ji aliyê A- ve, îyonên OH- jî ji aliyê HA ve tên xerckirin"
        },
        {
          "tr": "Çözeltinin pH değeri neredeyse sabit kalır",
          "en": "The pH value of the solution remains almost constant",
          "de": "Der pH-Wert der Lösung bleibt nahezu konstant",
          "fr": "La valeur pH de la solution reste presque constante",
          "ru": "Значение pH раствора остаётся практически постоянным",
          "ar": "تظل قيمة الرقم الهيدروجيني للمحلول ثابتة تقريبًا",
          "zh": "溶液的 pH 几乎保持不变",
          "ku": "Nirxa pH ya çareseriyê hema hema sabît dimîne"
        }
      ]
    },
    {
      "id": "u19-s04",
      "title": {
        "tr": "Kuvvetli Asidin Kuvvetli Bazla Titrasyonunda pH Değişimi",
        "en": "pH Change During the Titration of a Strong Acid with a Strong Base",
        "de": "pH-Verlauf bei der Titration einer starken Säure mit einer starken Base",
        "fr": "Évolution du pH lors du titrage d’un acide fort par une base forte",
        "ru": "Изменение pH при титровании сильной кислоты сильным основанием",
        "ar": "تغير pH أثناء معايرة حمض قوي بقاعدة قوية",
        "zh": "强碱滴定强酸过程中 pH 的变化",
        "ku": "Guherîna pH di Tîtrasyona Asîda Xurt bi Baza Xurt de"
      },
      "steps": [
        {
          "tr": "Başlangıçta erlende yalnızca kuvvetli asit vardır ve pH küçüktür",
          "en": "At the start, only the strong acid is in the flask and the pH is low",
          "de": "Zu Beginn enthält der Kolben nur die starke Säure, der pH ist niedrig",
          "fr": "Au départ, l’erlenmeyer ne contient que l’acide fort et le pH est faible",
          "ru": "Вначале в колбе только сильная кислота, pH низкий",
          "ar": "في البداية لا يحتوي الدورق إلا على الحمض القوي ويكون pH منخفضًا",
          "zh": "开始时锥形瓶中只有强酸，pH 较低",
          "ku": "Di destpêkê de di erlenê de tenê asîda xurt heye û pH nizm e"
        },
        {
          "tr": "Baz eklendikçe H+ iyonları nötrleşir ve pH yavaş yavaş artar",
          "en": "As base is added, H+ ions are neutralized and the pH rises slowly",
          "de": "Mit zugegebener Base werden H+-Ionen neutralisiert, der pH steigt langsam",
          "fr": "À mesure que la base est ajoutée, les ions H+ sont neutralisés et le pH augmente lentement",
          "ru": "По мере добавления основания ионы H+ нейтрализуются, и pH медленно растёт",
          "ar": "مع إضافة القاعدة تتعادل أيونات H+ ويرتفع pH ببطء",
          "zh": "随着碱的加入，H+ 被中和，pH 缓慢上升",
          "ku": "Her ku baz tê zêdekirin îyonên H+ bêalî dibin û pH hêdî hêdî bilind dibe"
        },
        {
          "tr": "Eşdeğerlik noktası civarında birkaç damla bazla pH hızla sıçrar; eşdeğerlik noktasında pH 25 °C'de 7,00'dir",
          "en": "Near the equivalence point a few drops of base make the pH jump sharply; at the equivalence point the pH is 7.00 at 25 °C",
          "de": "In der Nähe des Äquivalenzpunkts lassen wenige Tropfen Base den pH sprunghaft ansteigen; am Äquivalenzpunkt ist der pH bei 25 °C 7,00",
          "fr": "Près du point d’équivalence, quelques gouttes de base font bondir le pH ; au point d’équivalence, le pH vaut 7,00 à 25 °C",
          "ru": "Вблизи точки эквивалентности несколько капель основания вызывают резкий скачок pH; в точке эквивалентности pH при 25 °C равен 7,00",
          "ar": "قرب نقطة التكافؤ تؤدي قطرات قليلة من القاعدة إلى قفزة حادة في pH، وعند نقطة التكافؤ يكون pH مساويًا 7.00 عند 25 °C",
          "zh": "在化学计量点附近，几滴碱就使 pH 急剧突跃；化学计量点时 25 °C 下 pH 为 7.00",
          "ku": "Nêzî xala hevwateyê bi çend dilopên bazê pH bi lez bilind dibe; li xala hevwateyê li 25 °C pH 7,00 e"
        },
        {
          "tr": "Eşdeğerlik noktasından sonra eklenen fazla OH- nedeniyle pH 7'nin üzerine çıkar ve yavaşça artmaya devam eder",
          "en": "After the equivalence point, excess OH- raises the pH above 7 and it keeps increasing slowly",
          "de": "Nach dem Äquivalenzpunkt steigt der pH durch überschüssiges OH- über 7 und nimmt langsam weiter zu",
          "fr": "Après le point d’équivalence, l’excès de OH- fait passer le pH au-dessus de 7 et il continue d’augmenter lentement",
          "ru": "После точки эквивалентности избыток OH- поднимает pH выше 7, и pH продолжает медленно расти",
          "ar": "بعد نقطة التكافؤ يرفع فائض OH- قيمة pH فوق 7 وتستمر في الارتفاع ببطء",
          "zh": "化学计量点之后，过量的 OH- 使 pH 超过 7 并继续缓慢上升",
          "ku": "Piştî xala hevwateyê ji ber OH- ya zêde pH ji 7 derbas dibe û hêdî hêdî zêde dibe"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u19-twin01",
      "stem": {
        "tr": "0,1 M'lık sulu sirke asidi (CH3COOH) çözeltisinin pH değeri kaçtır? (CH3COOH için Ka = 1,0x10^-5)",
        "en": "What is the pH value of 0.1 M aqueous vinegar acid (CH3COOH) solution? (Ka for CH3COOH = 1.0x10^-5)",
        "de": "Wie hoch ist der pH-Wert einer 0,1 M wässrigen Essigsäurelösung (CH3COOH)? (Ka für CH3COOH = 1,0x10^-5)",
        "fr": "Quelle est la valeur du pH d'une solution aqueuse d'acide acétique (CH3COOH) 0,1 M ? (Ka pour CH3COOH = 1,0x10^-5)",
        "ru": "Чему равен pH 0,1 M водного раствора уксусной кислоты (CH3COOH)? (Ka для CH3COOH = 1,0x10^-5)",
        "ar": "ما قيمة pH لمحلول مائي من حمض الخل (CH3COOH) تركيزه 0.1 M؟ (Ka لـ CH3COOH = 1.0x10^-5)",
        "zh": "0.1 M 醋酸(CH3COOH)水溶液的 pH 是多少？(CH3COOH 的 Ka = 1.0x10^-5)",
        "ku": "Nirxa pH ya 0,1 M çareseriya asîda avî ya sîrkê (CH3COOH) çi ye? (Ka ji bo CH3COOH = 1,0x10^-5)"
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
        "tr": "CH3COOH zayıf bir asittir ve suda kısmen iyonlaşır: CH3COOH ⇌ H+ + CH3COO-. İyonlaşan kısım başlangıç derişimi yanında ihmal edilirse Ka = [H+]^2 / Ca olur. Buradan [H+] = √(Ka · Ca) = √(1,0x10^-5 · 0,1) = √(10^-6) = 10^-3 M ve pH = -log(10^-3) = 3 bulunur. Asidi kuvvetli sanıp [H+] = 0,1 M almak pH = 1, Ka değerini doğrudan [H+] kabul etmek pH = 5 sonucunu verir.",
        "en": "CH3COOH is a weak acid and ionizes only partially in water: CH3COOH ⇌ H+ + CH3COO-. Neglecting the ionized part next to the initial concentration gives Ka = [H+]^2 / Ca. Hence [H+] = √(Ka · Ca) = √(1.0x10^-5 · 0.1) = √(10^-6) = 10^-3 M and pH = -log(10^-3) = 3. Treating the acid as strong and taking [H+] = 0.1 M gives pH = 1; taking the Ka value directly as [H+] gives pH = 5.",
        "de": "CH3COOH ist eine schwache Säure und ionisiert in Wasser nur teilweise: CH3COOH ⇌ H+ + CH3COO-. Vernachlässigt man den ionisierten Anteil gegenüber der Anfangskonzentration, gilt Ka = [H+]^2 / Ca. Daraus folgt [H+] = √(Ka · Ca) = √(1,0x10^-5 · 0,1) = √(10^-6) = 10^-3 M und pH = -log(10^-3) = 3. Hält man die Säure für stark und setzt [H+] = 0,1 M, erhält man pH = 1; setzt man den Ka-Wert direkt als [H+] ein, erhält man pH = 5.",
        "fr": "CH3COOH est un acide faible qui ne s'ionise que partiellement dans l'eau : CH3COOH ⇌ H+ + CH3COO-. En négligeant la partie ionisée devant la concentration initiale, Ka = [H+]^2 / Ca. On en déduit [H+] = √(Ka · Ca) = √(1,0x10^-5 · 0,1) = √(10^-6) = 10^-3 M et pH = -log(10^-3) = 3. Considérer l'acide comme fort et prendre [H+] = 0,1 M donne pH = 1 ; prendre directement la valeur de Ka pour [H+] donne pH = 5.",
        "ru": "CH3COOH — слабая кислота, в воде диссоциирует лишь частично: CH3COOH ⇌ H+ + CH3COO-. Если пренебречь продиссоциировавшей частью по сравнению с начальной концентрацией, Ka = [H+]^2 / Ca. Отсюда [H+] = √(Ka · Ca) = √(1,0x10^-5 · 0,1) = √(10^-6) = 10^-3 M и pH = -log(10^-3) = 3. Если считать кислоту сильной и принять [H+] = 0,1 M, получится pH = 1; если принять значение Ka за [H+], получится pH = 5.",
        "ar": "CH3COOH حمض ضعيف يتأين جزئيًا في الماء: CH3COOH ⇌ H+ + CH3COO-. بإهمال الجزء المتأين مقارنةً بالتركيز الابتدائي يكون Ka = [H+]^2 / Ca. ومنه [H+] = √(Ka · Ca) = √(1.0x10^-5 · 0.1) = √(10^-6) = 10^-3 M و pH = -log(10^-3) = 3. اعتبار الحمض قويًّا وأخذ [H+] = 0.1 M يعطي pH = 1، وأخذ قيمة Ka مباشرة على أنها [H+] يعطي pH = 5.",
        "zh": "CH3COOH 是弱酸，在水中只部分电离：CH3COOH ⇌ H+ + CH3COO-。忽略已电离的部分（与起始浓度相比很小），则 Ka = [H+]^2 / Ca。由此 [H+] = √(Ka · Ca) = √(1.0x10^-5 · 0.1) = √(10^-6) = 10^-3 M，pH = -log(10^-3) = 3。若把它当作强酸取 [H+] = 0.1 M，得 pH = 1；若把 Ka 的数值直接当作 [H+]，得 pH = 5。",
        "ku": "CH3COOH asîdeke qels e û di avê de tenê bi qismî îyonîze dibe: CH3COOH ⇌ H+ + CH3COO-. Heke beşa îyonîzebûyî li ber tîrbûna destpêkê were paşguhkirin, Ka = [H+]^2 / Ca ye. Ji vê [H+] = √(Ka · Ca) = √(1,0x10^-5 · 0,1) = √(10^-6) = 10^-3 M û pH = -log(10^-3) = 3 tê dîtin. Heke asîd xurt were hesibandin û [H+] = 0,1 M were girtin pH = 1, heke nirxa Ka rasterast wekî [H+] were girtin pH = 5 derdikeve."
      }
    },
    {
      "id": "u19-twin02",
      "stem": {
        "tr": "0,1 M 100 mL HCl çözeltisini tam nötralleştirmek için 0,2 M NaOH çözeltisinden kaç mL harcanmalıdır?",
        "en": "How many mL of 0.2 M NaOH solution should be consumed to completely neutralize 100 mL of 0.1 M HCl solution?",
        "de": "Wie viele ml 0,2 M NaOH-Lösung sollten verbraucht werden, um 100 ml 0,1 M HCl-Lösung vollständig zu neutralisieren?",
        "fr": "Combien de ml de solution de NaOH 0,2 M faut-il consommer pour neutraliser complètement 100 ml de solution de HCl 0,1 M ?",
        "ru": "Сколько миллилитров 0,2 M раствора NaOH нужно для полной нейтрализации 100 мл 0,1 M раствора HCl?",
        "ar": "ما عدد مل من محلول NaOH 0.2 M الذي يجب استهلاكه لتحييد 100 مل من محلول 0.1 M HCl تمامًا؟",
        "zh": "完全中和 100 mL 0.1 M HCl 溶液需要消耗多少 mL 0.2 M NaOH 溶液？",
        "ku": "Ji bo ku 100 mL çareseriya 0,1 M HCl bi tevahî bêbandor bibe, divê çend ml çareseriya NaOH 0,2 M were vexwarin?"
      },
      "options": [
        {
          "tr": "50 mL",
          "en": "50 mL",
          "de": "50 ml",
          "fr": "50 ml",
          "ru": "50 мл",
          "ar": "50 مل",
          "zh": "50 mL",
          "ku": "50 ml"
        },
        {
          "tr": "100 mL",
          "en": "100 mL",
          "de": "100 ml",
          "fr": "100 ml",
          "ru": "100 мл",
          "ar": "100 مل",
          "zh": "100 mL",
          "ku": "100 ml"
        },
        {
          "tr": "200 mL",
          "en": "200 mL",
          "de": "200 ml",
          "fr": "200 ml",
          "ru": "200 мл",
          "ar": "200 مل",
          "zh": "200 mL",
          "ku": "200 ml"
        },
        {
          "tr": "25 mL",
          "en": "25 mL",
          "de": "25 ml",
          "fr": "25 ml",
          "ru": "25 мл",
          "ar": "25 مل",
          "zh": "25 mL",
          "ku": "25 ml"
        },
        {
          "tr": "10 mL",
          "en": "10 mL",
          "de": "10 ml",
          "fr": "10 ml",
          "ru": "10 мл",
          "ar": "10 مل",
          "zh": "10 mL",
          "ku": "10 ml"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Tam nötrleşmede asitten gelen H+ ile bazdan gelen OH- mol sayıları eşittir: Ma · Va · Za = Mb · Vb · Zb. HCl ve NaOH için tesir değerliği 1'dir: 0,1 · 100 · 1 = 0,2 · Vb · 1 → Vb = 50 mL. Baz çözeltisi asit çözeltisinden iki kat derişik olduğundan gereken hacim asit hacminin yarısıdır; hacimleri eşit almak 100 mL, oranı ters kurmak 200 mL sonucunu verir.",
        "en": "At complete neutralization the moles of H+ from the acid equal the moles of OH- from the base: Ma · Va · Za = Mb · Vb · Zb. For HCl and NaOH the equivalence factor is 1: 0.1 · 100 · 1 = 0.2 · Vb · 1 → Vb = 50 mL. Because the base solution is twice as concentrated as the acid solution, half the acid volume is needed; taking equal volumes gives 100 mL and inverting the ratio gives 200 mL.",
        "de": "Bei vollständiger Neutralisation ist die Stoffmenge an H+ aus der Säure gleich der Stoffmenge an OH- aus der Base: Ma · Va · Za = Mb · Vb · Zb. Für HCl und NaOH ist die Wertigkeit 1: 0,1 · 100 · 1 = 0,2 · Vb · 1 → Vb = 50 ml. Da die Basenlösung doppelt so konzentriert ist wie die Säurelösung, wird das halbe Säurevolumen benötigt; gleiche Volumina ergäben 100 ml, das umgekehrte Verhältnis 200 ml.",
        "fr": "À la neutralisation complète, la quantité de H+ apportée par l'acide est égale à la quantité de OH- apportée par la base : Ma · Va · Za = Mb · Vb · Zb. Pour HCl et NaOH, la valence est 1 : 0,1 · 100 · 1 = 0,2 · Vb · 1 → Vb = 50 ml. La solution de base étant deux fois plus concentrée que la solution d'acide, il faut la moitié du volume d'acide ; prendre des volumes égaux donne 100 ml et inverser le rapport donne 200 ml.",
        "ru": "При полной нейтрализации количество H+ кислоты равно количеству OH- основания: Ma · Va · Za = Mb · Vb · Zb. Для HCl и NaOH Z = 1: 0,1 · 100 · 1 = 0,2 · Vb · 1 → Vb = 50 мл. Раствор основания вдвое концентрированнее раствора кислоты, поэтому нужен вдвое меньший объём; если взять объёмы равными, получится 100 мл, если перевернуть отношение — 200 мл.",
        "ar": "عند التعادل التام يتساوى عدد مولات H+ من الحمض مع عدد مولات OH- من القاعدة: Ma · Va · Za = Mb · Vb · Zb. ولكلٍّ من HCl و NaOH يكون Z = 1: 0.1 · 100 · 1 = 0.2 · Vb · 1 → Vb = 50 مل. ولأن محلول القاعدة تركيزه ضعف تركيز محلول الحمض، يلزم نصف حجم الحمض؛ أخذ حجمين متساويين يعطي 100 مل، وعكس النسبة يعطي 200 مل.",
        "zh": "完全中和时，酸提供的 H+ 与碱提供的 OH- 物质的量相等：Ma · Va · Za = Mb · Vb · Zb。HCl 和 NaOH 的 Z 均为 1：0.1 · 100 · 1 = 0.2 · Vb · 1 → Vb = 50 mL。碱溶液的浓度是酸溶液的两倍，所以只需酸溶液体积的一半；若取相等体积会得 100 mL，若把比例弄反会得 200 mL。",
        "ku": "Di bêalîkirina temam de hejmara molên H+ ya asîdê û hejmara molên OH- ya bazê wekhev in: Ma · Va · Za = Mb · Vb · Zb. Ji bo HCl û NaOH Z = 1 e: 0,1 · 100 · 1 = 0,2 · Vb · 1 → Vb = 50 ml. Ji ber ku çareseriya bazê du qat ji çareseriya asîdê tîrtir e, nîvê hecma asîdê pêwîst e; girtina hecmên wekhev 100 ml, berevajîkirina rêjeyê 200 ml dide."
      }
    },
    {
      "id": "u19-twin03",
      "stem": {
        "tr": "25 °C'de 0,005 M Ba(OH)2 sulu çözeltisinin pH değeri kaçtır? (Ba(OH)2 suda tamamen iyonlaşır; log 2 = 0,3)",
        "en": "What is the pH of a 0.005 M aqueous Ba(OH)2 solution at 25 °C? (Ba(OH)2 dissociates completely in water; log 2 = 0.3)",
        "de": "Welchen pH-Wert hat eine 0,005 M wässrige Ba(OH)2-Lösung bei 25 °C? (Ba(OH)2 dissoziiert in Wasser vollständig; log 2 = 0,3)",
        "fr": "Quel est le pH d’une solution aqueuse de Ba(OH)2 à 0,005 M à 25 °C ? (Ba(OH)2 se dissocie totalement dans l’eau ; log 2 = 0,3)",
        "ru": "Чему равен pH 0,005 M водного раствора Ba(OH)2 при 25 °C? (Ba(OH)2 в воде диссоциирует полностью; log 2 = 0,3)",
        "ar": "ما قيمة pH لمحلول مائي من Ba(OH)2 تركيزه 0.005 M عند 25 °C؟ (يتفكك Ba(OH)2 كليًا في الماء؛ log 2 = 0.3)",
        "zh": "25 °C 时，0.005 M Ba(OH)2 水溶液的 pH 是多少？(Ba(OH)2 在水中完全电离；log 2 = 0.3)",
        "ku": "Li 25 °C pH ya çareseriya avî ya 0,005 M Ba(OH)2 çi ye? (Ba(OH)2 di avê de bi tevahî îyonîze dibe; log 2 = 0,3)"
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
          "tr": "2,3",
          "en": "2.3",
          "de": "2,3",
          "fr": "2,3",
          "ru": "2,3",
          "ar": "2.3",
          "zh": "2.3",
          "ku": "2,3"
        },
        {
          "tr": "11,7",
          "en": "11.7",
          "de": "11,7",
          "fr": "11,7",
          "ru": "11,7",
          "ar": "11.7",
          "zh": "11.7",
          "ku": "11,7"
        },
        {
          "tr": "12",
          "en": "12",
          "de": "12",
          "fr": "12",
          "ru": "12",
          "ar": "12",
          "zh": "12",
          "ku": "12"
        },
        {
          "tr": "12,3",
          "en": "12.3",
          "de": "12,3",
          "fr": "12,3",
          "ru": "12,3",
          "ar": "12.3",
          "zh": "12.3",
          "ku": "12,3"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Ba(OH)2 → Ba2+ + 2OH- olduğundan [OH-] = 2 · 0,005 = 0,01 M = 10^-2 M. pOH = 2, pH = 14 - 2 = 12. OH- katsayısı 2 alınmazsa pOH = -log(5x10^-3) = 2,3 ve pH = 11,7 bulunur; 2 ile iki kez çarpılırsa 12,3 çıkar. pOH değerini pH sanmak ise 2 veya 2,3 sonucunu verir.",
        "en": "Ba(OH)2 → Ba2+ + 2OH-, so [OH-] = 2 · 0.005 = 0.01 M = 10^-2 M. pOH = 2, pH = 14 - 2 = 12. Ignoring the coefficient 2 gives pOH = -log(5x10^-3) = 2.3 and pH = 11.7; multiplying by 2 twice gives 12.3. Taking pOH as pH gives 2 or 2.3.",
        "de": "Ba(OH)2 → Ba2+ + 2OH-, also [OH-] = 2 · 0,005 = 0,01 M = 10^-2 M. pOH = 2, pH = 14 - 2 = 12. Ohne den Faktor 2 erhält man pOH = -log(5x10^-3) = 2,3 und pH = 11,7; doppelte Multiplikation mit 2 ergibt 12,3. Wer pOH für den pH hält, erhält 2 oder 2,3.",
        "fr": "Ba(OH)2 → Ba2+ + 2OH-, donc [OH-] = 2 · 0,005 = 0,01 M = 10^-2 M. pOH = 2, pH = 14 - 2 = 12. Sans le coefficient 2, on obtient pOH = -log(5x10^-3) = 2,3 et pH = 11,7 ; en multipliant deux fois par 2, on trouve 12,3. Confondre pOH et pH donne 2 ou 2,3.",
        "ru": "Ba(OH)2 → Ba2+ + 2OH-, поэтому [OH-] = 2 · 0,005 = 0,01 M = 10^-2 M. pOH = 2, pH = 14 - 2 = 12. Без коэффициента 2 получается pOH = -log(5x10^-3) = 2,3 и pH = 11,7; двойное умножение на 2 даёт 12,3. Если принять pOH за pH, получится 2 или 2,3.",
        "ar": "Ba(OH)2 → Ba2+ + 2OH- لذا [OH-] = 2 · 0.005 = 0.01 M = 10^-2 M. pOH = 2 و pH = 14 - 2 = 12. إهمال المعامل 2 يعطي pOH = -log(5x10^-3) = 2.3 و pH = 11.7، والضرب في 2 مرتين يعطي 12.3، واعتبار pOH هو pH يعطي 2 أو 2.3.",
        "zh": "Ba(OH)2 → Ba2+ + 2OH-，所以 [OH-] = 2 · 0.005 = 0.01 M = 10^-2 M。pOH = 2，pH = 14 - 2 = 12。忽略系数 2 会得到 pOH = -log(5x10^-3) = 2.3、pH = 11.7；乘两次 2 会得到 12.3；把 pOH 当作 pH 会得到 2 或 2.3。",
        "ku": "Ji ber Ba(OH)2 → Ba2+ + 2OH-, [OH-] = 2 · 0,005 = 0,01 M = 10^-2 M. pOH = 2, pH = 14 - 2 = 12. Heke hejmara 2 neyê hesibandin pOH = -log(5x10^-3) = 2,3 û pH = 11,7 derdikeve; bi du caran lêxistina bi 2 re 12,3 derdikeve. Hesibandina pOH wek pH jî 2 an 2,3 dide."
      }
    },
    {
      "id": "u19-twin04",
      "stem": {
        "tr": "25 °C'de 0,01 M HA zayıf asit çözeltisinin pH değeri 4'tür. Buna göre HA'nın asitlik sabiti (Ka) ve iyonlaşma yüzdesi aşağıdakilerin hangisinde doğru verilmiştir?",
        "en": "At 25 °C, a 0.01 M solution of the weak acid HA has a pH of 4. Which of the following correctly gives the acid dissociation constant (Ka) and the percent ionization of HA?",
        "de": "Bei 25 °C hat eine 0,01 M Lösung der schwachen Säure HA den pH-Wert 4. Welche Angabe nennt die Säurekonstante (Ka) und den Protolysegrad von HA richtig?",
        "fr": "À 25 °C, une solution à 0,01 M de l’acide faible HA a un pH de 4. Quelle proposition donne correctement la constante d’acidité (Ka) et le pourcentage d’ionisation de HA ?",
        "ru": "При 25 °C pH 0,01 M раствора слабой кислоты HA равен 4. В каком варианте правильно указаны константа кислотности (Ka) и степень диссоциации HA?",
        "ar": "عند 25 °C يكون pH لمحلول الحمض الضعيف HA تركيزه 0.01 M مساويًا 4. في أي مما يلي أُعطي ثابت تأين الحمض (Ka) والنسبة المئوية لتأين HA بشكل صحيح؟",
        "zh": "25 °C 时，0.01 M 弱酸 HA 溶液的 pH 为 4。下列哪一项正确给出了 HA 的电离常数(Ka)和电离度？",
        "ku": "Li 25 °C pH ya çareseriya 0,01 M a asîda qels HA 4 e. Li gorî vê, sabîta asîdiyê (Ka) û rêjeya îyonîzasyona HA di kîjan vebijarkê de rast hatiye dayîn?"
      },
      "options": [
        {
          "tr": "Ka = 1,0x10^-8; %1",
          "en": "Ka = 1.0x10^-8; 1%",
          "de": "Ka = 1,0x10^-8; 1 %",
          "fr": "Ka = 1,0x10^-8 ; 1 %",
          "ru": "Ka = 1,0x10^-8; 1 %",
          "ar": "Ka = 1.0x10^-8؛ 1%",
          "zh": "Ka = 1.0x10^-8；1%",
          "ku": "Ka = 1,0x10^-8; %1"
        },
        {
          "tr": "Ka = 1,0x10^-6; %0,01",
          "en": "Ka = 1.0x10^-6; 0.01%",
          "de": "Ka = 1,0x10^-6; 0,01 %",
          "fr": "Ka = 1,0x10^-6 ; 0,01 %",
          "ru": "Ka = 1,0x10^-6; 0,01 %",
          "ar": "Ka = 1.0x10^-6؛ 0.01%",
          "zh": "Ka = 1.0x10^-6；0.01%",
          "ku": "Ka = 1,0x10^-6; %0,01"
        },
        {
          "tr": "Ka = 1,0x10^-6; %1",
          "en": "Ka = 1.0x10^-6; 1%",
          "de": "Ka = 1,0x10^-6; 1 %",
          "fr": "Ka = 1,0x10^-6 ; 1 %",
          "ru": "Ka = 1,0x10^-6; 1 %",
          "ar": "Ka = 1.0x10^-6؛ 1%",
          "zh": "Ka = 1.0x10^-6；1%",
          "ku": "Ka = 1,0x10^-6; %1"
        },
        {
          "tr": "Ka = 1,0x10^-4; %1",
          "en": "Ka = 1.0x10^-4; 1%",
          "de": "Ka = 1,0x10^-4; 1 %",
          "fr": "Ka = 1,0x10^-4 ; 1 %",
          "ru": "Ka = 1,0x10^-4; 1 %",
          "ar": "Ka = 1.0x10^-4؛ 1%",
          "zh": "Ka = 1.0x10^-4；1%",
          "ku": "Ka = 1,0x10^-4; %1"
        },
        {
          "tr": "Ka = 1,0x10^-2; %100",
          "en": "Ka = 1.0x10^-2; 100%",
          "de": "Ka = 1,0x10^-2; 100 %",
          "fr": "Ka = 1,0x10^-2 ; 100 %",
          "ru": "Ka = 1,0x10^-2; 100 %",
          "ar": "Ka = 1.0x10^-2؛ 100%",
          "zh": "Ka = 1.0x10^-2；100%",
          "ku": "Ka = 1,0x10^-2; %100"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "pH = 4 ise [H+] = 10^-4 M. HA ⇌ H+ + A- dengesinde [A-] = [H+] = 10^-4 M ve [HA] ≈ 0,01 M'dir. Ka = (10^-4)^2 / 10^-2 = 10^-6. İyonlaşma yüzdesi = (10^-4 / 10^-2) · 100 = %1. [H+] değerini doğrudan Ka almak 10^-4, karesini Ca'ya bölmeyi unutmak 10^-8 sonucunu verir; asidi tamamen iyonlaşmış saymak ise %100 gibi yanlış bir yüzde doğurur.",
        "en": "pH = 4 means [H+] = 10^-4 M. In HA ⇌ H+ + A-, [A-] = [H+] = 10^-4 M and [HA] ≈ 0.01 M. Ka = (10^-4)^2 / 10^-2 = 10^-6. Percent ionization = (10^-4 / 10^-2) · 100 = 1%. Taking [H+] itself as Ka gives 10^-4; forgetting to divide the square by Ca gives 10^-8; treating the acid as fully ionized gives a wrong 100%.",
        "de": "pH = 4 bedeutet [H+] = 10^-4 M. Im Gleichgewicht HA ⇌ H+ + A- ist [A-] = [H+] = 10^-4 M und [HA] ≈ 0,01 M. Ka = (10^-4)^2 / 10^-2 = 10^-6. Protolysegrad = (10^-4 / 10^-2) · 100 = 1 %. Wer [H+] direkt als Ka nimmt, erhält 10^-4; wer das Quadrat nicht durch Ca teilt, 10^-8; wer vollständige Protolyse annimmt, fälschlich 100 %.",
        "fr": "pH = 4 donne [H+] = 10^-4 M. Dans HA ⇌ H+ + A-, [A-] = [H+] = 10^-4 M et [HA] ≈ 0,01 M. Ka = (10^-4)^2 / 10^-2 = 10^-6. Pourcentage d’ionisation = (10^-4 / 10^-2) · 100 = 1 %. Prendre [H+] comme Ka donne 10^-4 ; oublier de diviser le carré par Ca donne 10^-8 ; supposer l’acide totalement ionisé donne un faux 100 %.",
        "ru": "pH = 4, значит, [H+] = 10^-4 M. В равновесии HA ⇌ H+ + A- [A-] = [H+] = 10^-4 M, [HA] ≈ 0,01 M. Ka = (10^-4)^2 / 10^-2 = 10^-6. Степень диссоциации = (10^-4 / 10^-2) · 100 = 1 %. Если принять [H+] за Ka, получится 10^-4; если забыть разделить квадрат на Ca — 10^-8; если считать кислоту полностью продиссоциировавшей — ошибочные 100 %.",
        "ar": "pH = 4 يعني [H+] = 10^-4 M. في الاتزان HA ⇌ H+ + A- يكون [A-] = [H+] = 10^-4 M و [HA] ≈ 0.01 M. Ka = (10^-4)^2 / 10^-2 = 10^-6. النسبة المئوية للتأين = (10^-4 / 10^-2) · 100 = 1%. اعتبار [H+] نفسه Ka يعطي 10^-4، ونسيان قسمة المربع على Ca يعطي 10^-8، واعتبار الحمض متأينًا كليًا يعطي 100% خطأً.",
        "zh": "pH = 4，则 [H+] = 10^-4 M。在 HA ⇌ H+ + A- 中，[A-] = [H+] = 10^-4 M，[HA] ≈ 0.01 M。Ka = (10^-4)^2 / 10^-2 = 10^-6。电离度 = (10^-4 / 10^-2) · 100 = 1%。直接把 [H+] 当作 Ka 得 10^-4；忘记把平方除以 Ca 得 10^-8；当作完全电离则错误地得到 100%。",
        "ku": "pH = 4 be, [H+] = 10^-4 M e. Di hevsengiya HA ⇌ H+ + A- de [A-] = [H+] = 10^-4 M û [HA] ≈ 0,01 M e. Ka = (10^-4)^2 / 10^-2 = 10^-6. Rêjeya îyonîzasyonê = (10^-4 / 10^-2) · 100 = %1. Hesibandina [H+] wek Ka 10^-4 dide; jibîrkirina parvekirina çargoşeyê li Ca 10^-8 dide; hesibandina asîdê wek bi tevahî îyonîzebûyî %100 ya şaş dide."
      }
    },
    {
      "id": "u19-twin05",
      "stem": {
        "tr": "25 °C'de HX asidi için Ka = 1,0x10^-4, HY asidi için Ka = 1,0x10^-8'dir. Buna göre,\nI. Eşit derişimli çözeltilerinden HX çözeltisinin pH değeri daha küçüktür.\nII. X- iyonunun Kb değeri 1,0x10^-10'dur.\nIII. Y- iyonu, X- iyonundan daha kuvvetli bir bazdır.\nyargılarından hangileri doğrudur?",
        "en": "At 25 °C, Ka = 1.0x10^-4 for the acid HX and Ka = 1.0x10^-8 for the acid HY. Which of the following statements are correct?\nI. For solutions of equal concentration, the HX solution has the lower pH.\nII. The Kb of the X- ion is 1.0x10^-10.\nIII. The Y- ion is a stronger base than the X- ion.",
        "de": "Bei 25 °C gilt für die Säure HX Ka = 1,0x10^-4 und für die Säure HY Ka = 1,0x10^-8. Welche Aussagen sind richtig?\nI. Bei gleicher Konzentration hat die HX-Lösung den kleineren pH-Wert.\nII. Der Kb-Wert des X--Ions beträgt 1,0x10^-10.\nIII. Das Y--Ion ist eine stärkere Base als das X--Ion.",
        "fr": "À 25 °C, Ka = 1,0x10^-4 pour l’acide HX et Ka = 1,0x10^-8 pour l’acide HY. Lesquelles des affirmations suivantes sont exactes ?\nI. À concentrations égales, la solution de HX a le pH le plus faible.\nII. Le Kb de l’ion X- vaut 1,0x10^-10.\nIII. L’ion Y- est une base plus forte que l’ion X-.",
        "ru": "При 25 °C для кислоты HX Ka = 1,0x10^-4, для кислоты HY Ka = 1,0x10^-8. Какие из утверждений верны?\nI. При равных концентрациях раствор HX имеет меньший pH.\nII. Kb иона X- равна 1,0x10^-10.\nIII. Ион Y- — более сильное основание, чем ион X-.",
        "ar": "عند 25 °C تكون Ka = 1.0x10^-4 للحمض HX و Ka = 1.0x10^-8 للحمض HY. أي العبارات التالية صحيحة؟\nI. عند تساوي التركيز يكون pH لمحلول HX أصغر.\nII. قيمة Kb للأيون X- تساوي 1.0x10^-10.\nIII. الأيون Y- قاعدة أقوى من الأيون X-.",
        "zh": "25 °C 时，酸 HX 的 Ka = 1.0x10^-4，酸 HY 的 Ka = 1.0x10^-8。下列说法中哪些正确？\nI. 浓度相同时，HX 溶液的 pH 更小。\nII. X- 的 Kb 为 1.0x10^-10。\nIII. Y- 是比 X- 更强的碱。",
        "ku": "Li 25 °C ji bo asîda HX Ka = 1,0x10^-4 û ji bo asîda HY Ka = 1,0x10^-8 e. Li gorî vê, kîjan gotin rast in?\nI. Di tîrbûna wekhev de pH ya çareseriya HX piçûktir e.\nII. Kb ya îyona X- 1,0x10^-10 e.\nIII. Îyona Y- ji îyona X- bazeke xurttir e."
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
        "tr": "I doğru: Ka'sı büyük olan HX aynı derişimde daha çok iyonlaşır, [H+] daha büyük ve pH daha küçüktür. II doğru: Kb(X-) = Ksu / Ka = 10^-14 / 10^-4 = 10^-10. III doğru: Kb(Y-) = 10^-14 / 10^-8 = 10^-6 olup 10^-10'dan büyüktür; asit ne kadar zayıfsa eşlenik bazı o kadar kuvvetlidir. Üç yargı da doğrudur.",
        "en": "I is correct: HX, with the larger Ka, ionizes more at the same concentration, so [H+] is larger and the pH lower. II is correct: Kb(X-) = Kw / Ka = 10^-14 / 10^-4 = 10^-10. III is correct: Kb(Y-) = 10^-14 / 10^-8 = 10^-6, which is larger than 10^-10; the weaker the acid, the stronger its conjugate base. All three statements are correct.",
        "de": "I ist richtig: HX mit dem größeren Ka protolysiert bei gleicher Konzentration stärker, [H+] ist größer und der pH kleiner. II ist richtig: Kb(X-) = Kw / Ka = 10^-14 / 10^-4 = 10^-10. III ist richtig: Kb(Y-) = 10^-14 / 10^-8 = 10^-6 und damit größer als 10^-10; je schwächer die Säure, desto stärker ihre korrespondierende Base. Alle drei Aussagen sind richtig.",
        "fr": "I est exacte : HX, de Ka plus grand, s’ionise davantage à même concentration, donc [H+] est plus grande et le pH plus faible. II est exacte : Kb(X-) = Ke / Ka = 10^-14 / 10^-4 = 10^-10. III est exacte : Kb(Y-) = 10^-14 / 10^-8 = 10^-6, supérieur à 10^-10 ; plus l’acide est faible, plus sa base conjuguée est forte. Les trois affirmations sont exactes.",
        "ru": "I верно: HX с большей Ka при той же концентрации диссоциирует сильнее, [H+] больше, pH меньше. II верно: Kb(X-) = Kw / Ka = 10^-14 / 10^-4 = 10^-10. III верно: Kb(Y-) = 10^-14 / 10^-8 = 10^-6, что больше 10^-10; чем слабее кислота, тем сильнее сопряжённое с ней основание. Все три утверждения верны.",
        "ar": "I صحيحة: الحمض HX ذو Ka الأكبر يتأين أكثر عند التركيز نفسه، فيكون [H+] أكبر و pH أصغر. II صحيحة: Kb(X-) = Kw / Ka = 10^-14 / 10^-4 = 10^-10. III صحيحة: Kb(Y-) = 10^-14 / 10^-8 = 10^-6 وهي أكبر من 10^-10؛ فكلما كان الحمض أضعف كانت قاعدته المرافقة أقوى. العبارات الثلاث صحيحة.",
        "zh": "I 正确：Ka 较大的 HX 在相同浓度下电离更多，[H+] 更大，pH 更小。II 正确：Kb(X-) = Kw / Ka = 10^-14 / 10^-4 = 10^-10。III 正确：Kb(Y-) = 10^-14 / 10^-8 = 10^-6，大于 10^-10；酸越弱，其共轭碱越强。三种说法都正确。",
        "ku": "I rast e: HX ku Ka ya wê mezintir e di heman tîrbûnê de zêdetir îyonîze dibe, [H+] mezintir û pH piçûktir e. II rast e: Kb(X-) = Ksu / Ka = 10^-14 / 10^-4 = 10^-10. III rast e: Kb(Y-) = 10^-14 / 10^-8 = 10^-6 e û ji 10^-10 mezintir e; asîd çiqas qelstir be, baza wê ya hevgirtî ewqas xurttir e. Her sê gotin rast in."
      }
    },
    {
      "id": "u19-twin06",
      "stem": {
        "tr": "Aşağıdaki tepkimelerin hangisinde H2O, Brønsted-Lowry tanımına göre baz olarak davranır?",
        "en": "In which of the following reactions does H2O act as a Brønsted-Lowry base?",
        "de": "In welcher der folgenden Reaktionen verhält sich H2O als Brønsted-Lowry-Base?",
        "fr": "Dans laquelle des réactions suivantes H2O se comporte-t-elle comme une base de Brønsted-Lowry ?",
        "ru": "В какой из следующих реакций H2O ведёт себя как основание Брёнстеда — Лоури?",
        "ar": "في أي من التفاعلات التالية يسلك H2O سلوك قاعدة وفق تعريف برونستد-لوري؟",
        "zh": "在下列哪个反应中，H2O 按布朗斯特-劳里理论表现为碱？",
        "ku": "Di kîjan ji reaksiyonên jêrîn de H2O li gorî pênaseya Brønsted-Lowry wek baz tevdigere?"
      },
      "options": [
        {
          "tr": "NH3 + H2O ⇌ NH4+ + OH-",
          "en": "NH3 + H2O ⇌ NH4+ + OH-",
          "de": "NH3 + H2O ⇌ NH4+ + OH-",
          "fr": "NH3 + H2O ⇌ NH4+ + OH-",
          "ru": "NH3 + H2O ⇌ NH4+ + OH-",
          "ar": "NH3 + H2O ⇌ NH4+ + OH-",
          "zh": "NH3 + H2O ⇌ NH4+ + OH-",
          "ku": "NH3 + H2O ⇌ NH4+ + OH-"
        },
        {
          "tr": "CH3COO- + H2O ⇌ CH3COOH + OH-",
          "en": "CH3COO- + H2O ⇌ CH3COOH + OH-",
          "de": "CH3COO- + H2O ⇌ CH3COOH + OH-",
          "fr": "CH3COO- + H2O ⇌ CH3COOH + OH-",
          "ru": "CH3COO- + H2O ⇌ CH3COOH + OH-",
          "ar": "CH3COO- + H2O ⇌ CH3COOH + OH-",
          "zh": "CH3COO- + H2O ⇌ CH3COOH + OH-",
          "ku": "CH3COO- + H2O ⇌ CH3COOH + OH-"
        },
        {
          "tr": "CO3^2- + H2O ⇌ HCO3- + OH-",
          "en": "CO3^2- + H2O ⇌ HCO3- + OH-",
          "de": "CO3^2- + H2O ⇌ HCO3- + OH-",
          "fr": "CO3^2- + H2O ⇌ HCO3- + OH-",
          "ru": "CO3^2- + H2O ⇌ HCO3- + OH-",
          "ar": "CO3^2- + H2O ⇌ HCO3- + OH-",
          "zh": "CO3^2- + H2O ⇌ HCO3- + OH-",
          "ku": "CO3^2- + H2O ⇌ HCO3- + OH-"
        },
        {
          "tr": "F- + H2O ⇌ HF + OH-",
          "en": "F- + H2O ⇌ HF + OH-",
          "de": "F- + H2O ⇌ HF + OH-",
          "fr": "F- + H2O ⇌ HF + OH-",
          "ru": "F- + H2O ⇌ HF + OH-",
          "ar": "F- + H2O ⇌ HF + OH-",
          "zh": "F- + H2O ⇌ HF + OH-",
          "ku": "F- + H2O ⇌ HF + OH-"
        },
        {
          "tr": "HCl + H2O → H3O+ + Cl-",
          "en": "HCl + H2O → H3O+ + Cl-",
          "de": "HCl + H2O → H3O+ + Cl-",
          "fr": "HCl + H2O → H3O+ + Cl-",
          "ru": "HCl + H2O → H3O+ + Cl-",
          "ar": "HCl + H2O → H3O+ + Cl-",
          "zh": "HCl + H2O → H3O+ + Cl-",
          "ku": "HCl + H2O → H3O+ + Cl-"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Brønsted-Lowry bazı proton (H+) alan türdür. HCl + H2O → H3O+ + Cl- tepkimesinde H2O, HCl'den H+ alarak H3O+'ya dönüşür; bu nedenle baz gibi davranır. Diğer tepkimelerin hepsinde H2O; NH3, CH3COO-, CO3^2- ve F- türlerine proton verip OH-'a dönüşür, yani asit gibi davranır. Su, karşısındaki türe göre asit ya da baz olabilen amfoter bir türdür.",
        "en": "A Brønsted-Lowry base is a proton (H+) acceptor. In HCl + H2O → H3O+ + Cl-, H2O accepts H+ from HCl and becomes H3O+, so it acts as a base. In each of the other reactions H2O donates a proton to NH3, CH3COO-, CO3^2- or F- and becomes OH-, i.e. it acts as an acid. Water is amphoteric: it can be an acid or a base depending on its partner.",
        "de": "Eine Brønsted-Lowry-Base ist ein Protonenakzeptor (H+). Bei HCl + H2O → H3O+ + Cl- nimmt H2O ein H+ von HCl auf und wird zu H3O+, verhält sich also als Base. In allen anderen Reaktionen gibt H2O ein Proton an NH3, CH3COO-, CO3^2- bzw. F- ab und wird zu OH-, wirkt also als Säure. Wasser ist ein Ampholyt: Je nach Partner reagiert es als Säure oder Base.",
        "fr": "Une base de Brønsted-Lowry est un accepteur de proton (H+). Dans HCl + H2O → H3O+ + Cl-, H2O capte le H+ de HCl et devient H3O+ : elle se comporte comme une base. Dans toutes les autres réactions, H2O cède un proton à NH3, CH3COO-, CO3^2- ou F- et devient OH- : elle agit comme un acide. L’eau est amphotère : acide ou base selon son partenaire.",
        "ru": "Основание Брёнстеда — Лоури — акцептор протона (H+). В реакции HCl + H2O → H3O+ + Cl- молекула H2O принимает H+ от HCl и превращается в H3O+, т. е. ведёт себя как основание. Во всех остальных реакциях H2O отдаёт протон частицам NH3, CH3COO-, CO3^2- или F- и превращается в OH-, т. е. выступает как кислота. Вода амфотерна: в зависимости от партнёра она проявляет свойства кислоты или основания.",
        "ar": "قاعدة برونستد-لوري هي المستقبِلة للبروتون (H+). في التفاعل HCl + H2O → H3O+ + Cl- يستقبل H2O البروتون من HCl ويتحول إلى H3O+ فيسلك سلوك القاعدة. وفي جميع التفاعلات الأخرى يعطي H2O بروتونًا إلى NH3 أو CH3COO- أو CO3^2- أو F- ويتحول إلى OH- أي يسلك سلوك الحمض. فالماء مادة مترددة (أمفوتيرية) يكون حمضًا أو قاعدة بحسب المادة المقابلة.",
        "zh": "布朗斯特-劳里碱是质子(H+)的接受体。在 HCl + H2O → H3O+ + Cl- 中，H2O 从 HCl 接受 H+ 变为 H3O+，表现为碱。在其余各反应中，H2O 把质子给予 NH3、CH3COO-、CO3^2- 或 F- 而变为 OH-，表现为酸。水是两性物质，视反应对象既可作酸也可作碱。",
        "ku": "Baza Brønsted-Lowry cureya ku proton (H+) digire ye. Di HCl + H2O → H3O+ + Cl- de H2O ji HCl H+ digire û dibe H3O+, ji ber vê wek baz tevdigere. Di hemû reaksiyonên din de H2O protonekê dide NH3, CH3COO-, CO3^2- an F- û dibe OH-, ango wek asîd tevdigere. Av amfoter e: li gorî cureya beramberê xwe dikare asîd an baz be."
      }
    },
    {
      "id": "u19-twin07",
      "stem": {
        "tr": "25 °C'de derişimleri eşit (0,1 M) olan NaCl, NH4Cl ve CH3COONa sulu çözeltilerinin pH değerlerinin küçükten büyüğe doğru sıralanışı aşağıdakilerden hangisidir?",
        "en": "At 25 °C, which of the following gives the pH values of equally concentrated (0.1 M) aqueous solutions of NaCl, NH4Cl and CH3COONa in increasing order?",
        "de": "Welche Reihenfolge gibt die pH-Werte gleich konzentrierter (0,1 M) wässriger Lösungen von NaCl, NH4Cl und CH3COONa bei 25 °C aufsteigend an?",
        "fr": "À 25 °C, quel classement donne par ordre croissant les pH des solutions aqueuses de même concentration (0,1 M) de NaCl, NH4Cl et CH3COONa ?",
        "ru": "В каком ряду водные растворы NaCl, NH4Cl и CH3COONa одинаковой концентрации (0,1 M) при 25 °C расположены в порядке возрастания pH?",
        "ar": "عند 25 °C، أي مما يلي يرتب قيم pH للمحاليل المائية المتساوية التركيز (0.1 M) من NaCl و NH4Cl و CH3COONa تصاعديًا؟",
        "zh": "25 °C 时，浓度相同(0.1 M)的 NaCl、NH4Cl 和 CH3COONa 水溶液的 pH 由小到大的顺序是下列哪一项？",
        "ku": "Li 25 °C, rêzkirina nirxên pH yên çareseriyên avî yên NaCl, NH4Cl û CH3COONa ku tîrbûna wan wekhev e (0,1 M) ji piçûk ber bi mezin kîjan e?"
      },
      "options": [
        {
          "tr": "NH4Cl < NaCl < CH3COONa",
          "en": "NH4Cl < NaCl < CH3COONa",
          "de": "NH4Cl < NaCl < CH3COONa",
          "fr": "NH4Cl < NaCl < CH3COONa",
          "ru": "NH4Cl < NaCl < CH3COONa",
          "ar": "NH4Cl < NaCl < CH3COONa",
          "zh": "NH4Cl < NaCl < CH3COONa",
          "ku": "NH4Cl < NaCl < CH3COONa"
        },
        {
          "tr": "CH3COONa < NaCl < NH4Cl",
          "en": "CH3COONa < NaCl < NH4Cl",
          "de": "CH3COONa < NaCl < NH4Cl",
          "fr": "CH3COONa < NaCl < NH4Cl",
          "ru": "CH3COONa < NaCl < NH4Cl",
          "ar": "CH3COONa < NaCl < NH4Cl",
          "zh": "CH3COONa < NaCl < NH4Cl",
          "ku": "CH3COONa < NaCl < NH4Cl"
        },
        {
          "tr": "NaCl < NH4Cl < CH3COONa",
          "en": "NaCl < NH4Cl < CH3COONa",
          "de": "NaCl < NH4Cl < CH3COONa",
          "fr": "NaCl < NH4Cl < CH3COONa",
          "ru": "NaCl < NH4Cl < CH3COONa",
          "ar": "NaCl < NH4Cl < CH3COONa",
          "zh": "NaCl < NH4Cl < CH3COONa",
          "ku": "NaCl < NH4Cl < CH3COONa"
        },
        {
          "tr": "NH4Cl < CH3COONa < NaCl",
          "en": "NH4Cl < CH3COONa < NaCl",
          "de": "NH4Cl < CH3COONa < NaCl",
          "fr": "NH4Cl < CH3COONa < NaCl",
          "ru": "NH4Cl < CH3COONa < NaCl",
          "ar": "NH4Cl < CH3COONa < NaCl",
          "zh": "NH4Cl < CH3COONa < NaCl",
          "ku": "NH4Cl < CH3COONa < NaCl"
        },
        {
          "tr": "NaCl < CH3COONa < NH4Cl",
          "en": "NaCl < CH3COONa < NH4Cl",
          "de": "NaCl < CH3COONa < NH4Cl",
          "fr": "NaCl < CH3COONa < NH4Cl",
          "ru": "NaCl < CH3COONa < NH4Cl",
          "ar": "NaCl < CH3COONa < NH4Cl",
          "zh": "NaCl < CH3COONa < NH4Cl",
          "ku": "NaCl < CH3COONa < NH4Cl"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "NH4Cl'deki NH4+, zayıf baz NH3'ün eşlenik asididir; hidroliz olarak H3O+ oluşturur ve pH < 7 olur. NaCl kuvvetli asit ile kuvvetli bazdan türer; iyonları hidroliz olmaz, pH = 7'dir. CH3COONa'daki CH3COO-, zayıf asidin eşlenik bazıdır; hidroliz olarak OH- oluşturur ve pH > 7 olur. Bu nedenle sıralama NH4Cl < NaCl < CH3COONa'dır. Tuzların hepsini nötr sanmak ya da NH4+ ile CH3COO- iyonlarının etkisini ters çevirmek yanlış sıralamalara götürür.",
        "en": "NH4+ in NH4Cl is the conjugate acid of the weak base NH3; it hydrolyzes to form H3O+, so pH < 7. NaCl comes from a strong acid and a strong base; its ions do not hydrolyze, so pH = 7. CH3COO- in CH3COONa is the conjugate base of a weak acid; it hydrolyzes to form OH-, so pH > 7. Hence NH4Cl < NaCl < CH3COONa. Treating all salts as neutral or swapping the effects of NH4+ and CH3COO- leads to the wrong orders.",
        "de": "NH4+ in NH4Cl ist die korrespondierende Säure der schwachen Base NH3; es reagiert mit Wasser unter Bildung von H3O+, daher pH < 7. NaCl stammt aus starker Säure und starker Base; seine Ionen hydrolysieren nicht, pH = 7. CH3COO- in CH3COONa ist die korrespondierende Base einer schwachen Säure; es bildet mit Wasser OH-, daher pH > 7. Also NH4Cl < NaCl < CH3COONa. Wer alle Salze für neutral hält oder die Wirkung von NH4+ und CH3COO- vertauscht, kommt zu falschen Reihenfolgen.",
        "fr": "NH4+ de NH4Cl est l’acide conjugué de la base faible NH3 ; il s’hydrolyse en formant H3O+, donc pH < 7. NaCl provient d’un acide fort et d’une base forte ; ses ions ne s’hydrolysent pas, pH = 7. CH3COO- de CH3COONa est la base conjuguée d’un acide faible ; il s’hydrolyse en formant OH-, donc pH > 7. D’où NH4Cl < NaCl < CH3COONa. Considérer tous les sels comme neutres ou inverser les effets de NH4+ et CH3COO- conduit à de mauvais classements.",
        "ru": "Ион NH4+ в NH4Cl — сопряжённая кислота слабого основания NH3; он гидролизуется с образованием H3O+, поэтому pH < 7. NaCl образован сильной кислотой и сильным основанием; его ионы не гидролизуются, pH = 7. Ион CH3COO- в CH3COONa — сопряжённое основание слабой кислоты; он гидролизуется с образованием OH-, поэтому pH > 7. Следовательно, NH4Cl < NaCl < CH3COONa. Если считать все соли нейтральными или перепутать действие ионов NH4+ и CH3COO-, получится неверный ряд.",
        "ar": "الأيون NH4+ في NH4Cl هو الحمض المرافق للقاعدة الضعيفة NH3؛ يتحلل مائيًا مكوّنًا H3O+ فيكون pH < 7. أما NaCl فمشتق من حمض قوي وقاعدة قوية ولا تتحلل أيوناته فيكون pH = 7. والأيون CH3COO- في CH3COONa هو القاعدة المرافقة لحمض ضعيف؛ يتحلل مائيًا مكوّنًا OH- فيكون pH > 7. لذا الترتيب NH4Cl < NaCl < CH3COONa. واعتبار كل الأملاح متعادلة أو عكس أثر NH4+ و CH3COO- يؤدي إلى ترتيب خاطئ.",
        "zh": "NH4Cl 中的 NH4+ 是弱碱 NH3 的共轭酸，水解生成 H3O+，pH < 7。NaCl 由强酸和强碱生成，离子不水解，pH = 7。CH3COONa 中的 CH3COO- 是弱酸的共轭碱，水解生成 OH-，pH > 7。因此顺序为 NH4Cl < NaCl < CH3COONa。把所有盐都当作中性，或把 NH4+ 与 CH3COO- 的作用弄反，都会得到错误顺序。",
        "ku": "NH4+ ya di NH4Cl de asîda hevgirtî ya baza qels NH3 ye; hîdrolîz dibe û H3O+ çêdike, ji ber vê pH < 7 e. NaCl ji asîda xurt û baza xurt çêdibe; îyonên wê hîdrolîz nabin, pH = 7 e. CH3COO- ya di CH3COONa de baza hevgirtî ya asîdeke qels e; hîdrolîz dibe û OH- çêdike, ji ber vê pH > 7 e. Lewma rêzkirin NH4Cl < NaCl < CH3COONa ye. Hesibandina hemû xwêyan wek bêalî an berevajîkirina bandora NH4+ û CH3COO- rêzkirinên şaş dide."
      }
    },
    {
      "id": "u19-twin08",
      "stem": {
        "tr": "Bileşenlerin mol sayıları eşit olacak şekilde hazırlanan\nI. CH3COOH ve CH3COONa\nII. HNO3 ve KNO3\nIII. HCl ve NH4Cl\nsulu karışımlarından hangileri tampon çözeltidir?",
        "en": "The following aqueous mixtures are prepared with equal numbers of moles of each component:\nI. CH3COOH and CH3COONa\nII. HNO3 and KNO3\nIII. HCl and NH4Cl.\nWhich of them are buffer solutions?",
        "de": "Folgende wässrige Gemische werden mit gleichen Stoffmengen der Komponenten hergestellt:\nI. CH3COOH und CH3COONa\nII. HNO3 und KNO3\nIII. HCl und NH4Cl.\nWelche davon sind Pufferlösungen?",
        "fr": "Les mélanges aqueux suivants sont préparés avec des quantités de matière égales de chaque constituant :\nI. CH3COOH et CH3COONa\nII. HNO3 et KNO3\nIII. HCl et NH4Cl.\nLesquels sont des solutions tampons ?",
        "ru": "Приготовлены водные смеси, содержащие компоненты в равных количествах (моль):\nI. CH3COOH и CH3COONa\nII. HNO3 и KNO3\nIII. HCl и NH4Cl\nКакие из них являются буферными растворами?",
        "ar": "حُضّرت المخاليط المائية التالية بأعداد مولات متساوية من مكوناتها:\nI. CH3COOH و CH3COONa\nII. HNO3 و KNO3\nIII. HCl و NH4Cl.\nأيها محاليل منظمة؟",
        "zh": "用等物质的量的各组分配制下列水溶液混合物：\nI. CH3COOH 和 CH3COONa\nII. HNO3 和 KNO3\nIII. HCl 和 NH4Cl\n其中哪些是缓冲溶液？",
        "ku": "Tevliheviyên avî yên jêrîn bi hejmara molên wekhev a pêkhateyan tên amadekirin:\nI. CH3COOH û CH3COONa\nII. HNO3 û KNO3\nIII. HCl û NH4Cl.\nKîjan ji wan çareseriyên tampon in?"
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
          "tr": "I ve III",
          "en": "I and III",
          "de": "I und III",
          "fr": "I et III",
          "ru": "I и III",
          "ar": "I و III",
          "zh": "I 和 III",
          "ku": "I û III"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Tampon çözelti, zayıf bir asit ile eşlenik bazını (veya zayıf bir baz ile eşlenik asidini) birlikte içerir. I'de zayıf asit CH3COOH ve eşlenik bazı CH3COO- birlikte bulunur; tampondur. II'de HNO3 kuvvetli asittir; NO3- iyonu eklenen H+ iyonlarını tutamaz, tampon değildir. III'te NH4+ bulunsa da yanındaki HCl kuvvetli asittir ve ortamda eşlenik zayıf baz NH3 yoktur; eklenen H+ iyonlarını tüketecek tür bulunmadığından tampon oluşmaz.",
        "en": "A buffer contains a weak acid together with its conjugate base (or a weak base with its conjugate acid). In I, the weak acid CH3COOH and its conjugate base CH3COO- are both present, so it is a buffer. In II, HNO3 is a strong acid and NO3- cannot bind added H+, so it is not a buffer. In III, NH4+ is present but HCl is a strong acid and the conjugate weak base NH3 is absent; nothing can consume added H+, so no buffer forms.",
        "de": "Ein Puffer enthält eine schwache Säure zusammen mit ihrer korrespondierenden Base (oder eine schwache Base mit ihrer korrespondierenden Säure). In I liegen die schwache Säure CH3COOH und ihre Base CH3COO- vor, also ein Puffer. In II ist HNO3 eine starke Säure, und NO3- kann zugesetzte H+ nicht binden: kein Puffer. In III ist zwar NH4+ vorhanden, aber HCl ist eine starke Säure und die schwache Base NH3 fehlt; zugesetzte H+ werden nicht abgefangen, es entsteht kein Puffer.",
        "fr": "Un tampon contient un acide faible et sa base conjuguée (ou une base faible et son acide conjugué). En I, l’acide faible CH3COOH et sa base conjuguée CH3COO- sont présents : c’est un tampon. En II, HNO3 est un acide fort et NO3- ne peut pas fixer les H+ ajoutés : pas de tampon. En III, NH4+ est présent, mais HCl est un acide fort et la base faible conjuguée NH3 est absente ; rien ne consomme les H+ ajoutés, donc pas de tampon.",
        "ru": "Буферный раствор содержит слабую кислоту вместе с сопряжённым с ней основанием (или слабое основание с сопряжённой кислотой). В смеси I присутствуют слабая кислота CH3COOH и сопряжённое с ней основание CH3COO- — это буфер. В смеси II HNO3 — сильная кислота, а ион NO3- не связывает добавленные ионы H+ — это не буфер. В смеси III есть NH4+, но HCl — сильная кислота, а сопряжённого слабого основания NH3 нет; добавленные ионы H+ связывать нечему, и буфер не образуется.",
        "ar": "المحلول المنظم يحتوي على حمض ضعيف مع قاعدته المرافقة (أو قاعدة ضعيفة مع حمضها المرافق). في I يوجد الحمض الضعيف CH3COOH وقاعدته المرافقة CH3COO- معًا فهو منظم. في II يكون HNO3 حمضًا قويًا ولا يستطيع NO3- ربط H+ المضاف فليس منظمًا. في III يوجد NH4+ لكن HCl حمض قوي ولا توجد القاعدة الضعيفة المرافقة NH3، فلا شيء يستهلك H+ المضاف ولا يتكون منظم.",
        "zh": "缓冲溶液含有弱酸及其共轭碱（或弱碱及其共轭酸）。I 中同时存在弱酸 CH3COOH 和其共轭碱 CH3COO-，是缓冲溶液。II 中 HNO3 是强酸，NO3- 不能结合外加的 H+，不是缓冲溶液。III 中虽有 NH4+，但 HCl 是强酸，且没有共轭弱碱 NH3，无法消耗外加的 H+，不能形成缓冲溶液。",
        "ku": "Çareseriya tampon asîdeke qels bi baza wê ya hevgirtî re (an bazeke qels bi asîda wê ya hevgirtî re) dihewîne. Di I de asîda qels CH3COOH û baza wê ya hevgirtî CH3COO- bi hev re hene; tampon e. Di II de HNO3 asîdeke xurt e û NO3- nikare H+ ya lê zêdekirî bigire; ne tampon e. Di III de NH4+ heye, lê HCl asîdeke xurt e û baza qels a hevgirtî NH3 tune ye; tiştek tune ku H+ ya lê zêdekirî bixwe, ji ber vê tampon çênabe."
      }
    },
    {
      "id": "u19-twin09",
      "stem": {
        "tr": "Derişimi bilinmeyen 10 mL H2SO4 çözeltisi 0,1 M NaOH çözeltisi ile titre ediliyor. Eşdeğerlik noktasına ulaşmak için 40 mL NaOH çözeltisi harcandığına göre H2SO4 çözeltisinin derişimi kaç molardır?",
        "en": "10 mL of an H2SO4 solution of unknown concentration is titrated with 0.1 M NaOH solution. If 40 mL of NaOH solution is needed to reach the equivalence point, what is the molarity of the H2SO4 solution?",
        "de": "10 mL einer H2SO4-Lösung unbekannter Konzentration werden mit 0,1 M NaOH-Lösung titriert. Bis zum Äquivalenzpunkt werden 40 mL NaOH-Lösung verbraucht. Wie groß ist die Stoffmengenkonzentration der H2SO4-Lösung in mol/L?",
        "fr": "10 mL d’une solution de H2SO4 de concentration inconnue sont titrés par une solution de NaOH à 0,1 M. Si 40 mL de NaOH sont nécessaires pour atteindre le point d’équivalence, quelle est la molarité de la solution de H2SO4 ?",
        "ru": "10 мл раствора H2SO4 неизвестной концентрации титруют 0,1 M раствором NaOH. До точки эквивалентности израсходовано 40 мл раствора NaOH. Чему равна молярная концентрация раствора H2SO4 (моль/л)?",
        "ar": "يُعاير 10 mL من محلول H2SO4 مجهول التركيز بمحلول NaOH تركيزه 0.1 M. إذا لزم 40 mL من محلول NaOH للوصول إلى نقطة التكافؤ، فما مولارية محلول H2SO4؟",
        "zh": "用 0.1 M NaOH 溶液滴定 10 mL 浓度未知的 H2SO4 溶液，到达化学计量点时消耗 NaOH 溶液 40 mL。H2SO4 溶液的物质的量浓度是多少 mol/L？",
        "ku": "10 mL çareseriya H2SO4 ya ku tîrbûna wê nenaskirî ye bi çareseriya 0,1 M NaOH tê tîtrekirin. Ji bo gihîştina xala hevwateyê 40 mL çareseriya NaOH hatiye xerckirin; li gorî vê, tîrbûna çareseriya H2SO4 çend molar e?"
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
          "tr": "1,6",
          "en": "1.6",
          "de": "1,6",
          "fr": "1,6",
          "ru": "1,6",
          "ar": "1.6",
          "zh": "1.6",
          "ku": "1,6"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Eşdeğerlik noktasında nH+ = nOH-'dir. nOH- = 0,1 · 0,040 = 4x10^-3 mol. H2SO4 iki H+ verdiğinden (Z = 2) n(H2SO4) = 4x10^-3 / 2 = 2x10^-3 mol ve M = 2x10^-3 / 0,010 = 0,2 M. Ma · Va · 2 = Mb · Vb · 1 bağıntısı da aynı sonucu verir. Tesir değerliği unutulursa 0,4 M, 2 katsayısı baz tarafına yazılırsa 0,8 M, iki kez bölünürse 0,1 M bulunur.",
        "en": "At the equivalence point nH+ = nOH-. nOH- = 0.1 · 0.040 = 4x10^-3 mol. H2SO4 gives two H+ (Z = 2), so n(H2SO4) = 4x10^-3 / 2 = 2x10^-3 mol and M = 2x10^-3 / 0.010 = 0.2 M. Ma · Va · 2 = Mb · Vb · 1 gives the same result. Ignoring Z gives 0.4 M; putting the factor 2 on the base side gives 0.8 M; dividing by 2 twice gives 0.1 M.",
        "de": "Am Äquivalenzpunkt gilt nH+ = nOH-. nOH- = 0,1 · 0,040 = 4x10^-3 mol. H2SO4 gibt zwei H+ ab (Z = 2), also n(H2SO4) = 4x10^-3 / 2 = 2x10^-3 mol und c = 2x10^-3 / 0,010 = 0,2 M. Ma · Va · 2 = Mb · Vb · 1 liefert dasselbe. Ohne Z erhält man 0,4 M, mit dem Faktor 2 auf der Basenseite 0,8 M, bei doppelter Division durch 2 0,1 M.",
        "fr": "Au point d’équivalence, nH+ = nOH-. nOH- = 0,1 · 0,040 = 4x10^-3 mol. H2SO4 libère deux H+ (Z = 2), donc n(H2SO4) = 4x10^-3 / 2 = 2x10^-3 mol et M = 2x10^-3 / 0,010 = 0,2 M. La relation Ma · Va · 2 = Mb · Vb · 1 donne le même résultat. Oublier Z donne 0,4 M ; placer le facteur 2 du côté de la base donne 0,8 M ; diviser deux fois par 2 donne 0,1 M.",
        "ru": "В точке эквивалентности nH+ = nOH-. nOH- = 0,1 · 0,040 = 4x10^-3 моль. H2SO4 даёт два иона H+ (Z = 2), поэтому n(H2SO4) = 4x10^-3 / 2 = 2x10^-3 моль и M = 2x10^-3 / 0,010 = 0,2 M. Соотношение Ma · Va · 2 = Mb · Vb · 1 даёт тот же результат. Без учёта Z получается 0,4 M, если множитель 2 записать на стороне основания — 0,8 M, если разделить на 2 дважды — 0,1 M.",
        "ar": "عند نقطة التكافؤ nH+ = nOH-. nOH- = 0.1 · 0.040 = 4x10^-3 mol. يعطي H2SO4 أيوني H+ (Z = 2)، لذا n(H2SO4) = 4x10^-3 / 2 = 2x10^-3 mol و M = 2x10^-3 / 0.010 = 0.2 M. والعلاقة Ma · Va · 2 = Mb · Vb · 1 تعطي النتيجة نفسها. إهمال Z يعطي 0.4 M، ووضع المعامل 2 في جهة القاعدة يعطي 0.8 M، والقسمة على 2 مرتين تعطي 0.1 M.",
        "zh": "化学计量点时 nH+ = nOH-。nOH- = 0.1 · 0.040 = 4x10^-3 mol。H2SO4 提供两个 H+(Z = 2)，所以 n(H2SO4) = 4x10^-3 / 2 = 2x10^-3 mol，M = 2x10^-3 / 0.010 = 0.2 M。用 Ma · Va · 2 = Mb · Vb · 1 也得到同样结果。忽略 Z 得 0.4 M；把系数 2 写在碱一侧得 0.8 M；除以 2 两次得 0.1 M。",
        "ku": "Li xala hevwateyê nH+ = nOH- e. nOH- = 0,1 · 0,040 = 4x10^-3 mol. H2SO4 du H+ dide (Z = 2), ji ber vê n(H2SO4) = 4x10^-3 / 2 = 2x10^-3 mol û M = 2x10^-3 / 0,010 = 0,2 M. Têkiliya Ma · Va · 2 = Mb · Vb · 1 jî heman encamê dide. Heke Z were jibîrkirin 0,4 M, heke hejmara 2 li aliyê bazê were nivîsandin 0,8 M, heke du caran li 2 were parvekirin 0,1 M derdikeve."
      }
    },
    {
      "id": "u19-twin10",
      "stem": {
        "tr": "25 °C'de 0,3 M 100 mL HCl çözeltisi ile 0,1 M 100 mL NaOH çözeltisi karıştırılıyor. Karışımın hacmi 200 mL kabul edildiğine göre oluşan çözeltinin pH değeri kaçtır?",
        "en": "At 25 °C, 100 mL of 0.3 M HCl solution is mixed with 100 mL of 0.1 M NaOH solution. Assuming the volume of the mixture is 200 mL, what is the pH of the resulting solution?",
        "de": "Bei 25 °C werden 100 mL 0,3 M HCl-Lösung mit 100 mL 0,1 M NaOH-Lösung gemischt. Das Volumen des Gemischs wird zu 200 mL angenommen. Welchen pH-Wert hat die entstehende Lösung?",
        "fr": "À 25 °C, on mélange 100 mL d’une solution de HCl à 0,3 M avec 100 mL d’une solution de NaOH à 0,1 M. En admettant que le volume du mélange est de 200 mL, quel est le pH de la solution obtenue ?",
        "ru": "При 25 °C смешивают 100 мл 0,3 M раствора HCl и 100 мл 0,1 M раствора NaOH. Объём смеси принять равным 200 мл. Чему равен pH полученного раствора?",
        "ar": "عند 25 °C يُخلط 100 mL من محلول HCl تركيزه 0.3 M مع 100 mL من محلول NaOH تركيزه 0.1 M. باعتبار حجم المخلوط 200 mL، ما قيمة pH للمحلول الناتج؟",
        "zh": "25 °C 时，将 100 mL 0.3 M HCl 溶液与 100 mL 0.1 M NaOH 溶液混合。设混合液体积为 200 mL，所得溶液的 pH 是多少？",
        "ku": "Li 25 °C 100 mL çareseriya 0,3 M HCl bi 100 mL çareseriya 0,1 M NaOH re tê tevlihevkirin. Heke qebareya tevliheviyê 200 mL were qebûlkirin, pH ya çareseriya çêbûyî çi ye?"
      },
      "options": [
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
          "tr": "12",
          "en": "12",
          "de": "12",
          "fr": "12",
          "ru": "12",
          "ar": "12",
          "zh": "12",
          "ku": "12"
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
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "nH+ = 0,3 · 0,1 = 0,03 mol, nOH- = 0,1 · 0,1 = 0,01 mol. H+ + OH- → H2O tepkimesinden sonra 0,03 - 0,01 = 0,02 mol H+ artar. [H+] = 0,02 / 0,2 = 0,1 M olduğundan pH = 1'dir. Asit arttığı için çözelti nötr (pH 7) olamaz; 12 ve 13 değerleri pH ile pOH karıştırıldığında, 2 ise hacim mL'den L'ye yanlış çevrildiğinde bulunur.",
        "en": "nH+ = 0.3 · 0.1 = 0.03 mol, nOH- = 0.1 · 0.1 = 0.01 mol. After H+ + OH- → H2O, 0.03 - 0.01 = 0.02 mol H+ remains. [H+] = 0.02 / 0.2 = 0.1 M, so pH = 1. Since acid is in excess the solution cannot be neutral (pH 7); 12 and 13 come from confusing pH with pOH, and 2 from a wrong mL-to-L conversion.",
        "de": "nH+ = 0,3 · 0,1 = 0,03 mol, nOH- = 0,1 · 0,1 = 0,01 mol. Nach H+ + OH- → H2O bleiben 0,03 - 0,01 = 0,02 mol H+ übrig. [H+] = 0,02 / 0,2 = 0,1 M, also pH = 1. Da Säure im Überschuss ist, kann die Lösung nicht neutral (pH 7) sein; 12 und 13 entstehen durch Verwechslung von pH und pOH, 2 durch falsche Umrechnung von mL in L.",
        "fr": "nH+ = 0,3 · 0,1 = 0,03 mol, nOH- = 0,1 · 0,1 = 0,01 mol. Après H+ + OH- → H2O, il reste 0,03 - 0,01 = 0,02 mol de H+. [H+] = 0,02 / 0,2 = 0,1 M, donc pH = 1. L’acide étant en excès, la solution ne peut pas être neutre (pH 7) ; 12 et 13 proviennent d’une confusion entre pH et pOH, et 2 d’une mauvaise conversion des mL en L.",
        "ru": "nH+ = 0,3 · 0,1 = 0,03 моль, nOH- = 0,1 · 0,1 = 0,01 моль. После H+ + OH- → H2O остаётся 0,03 - 0,01 = 0,02 моль H+. [H+] = 0,02 / 0,2 = 0,1 M, значит pH = 1. Кислота в избытке, поэтому раствор не может быть нейтральным (pH 7); значения 12 и 13 получаются при путанице pH и pOH, а 2 — при неверном переводе мл в л.",
        "ar": "nH+ = 0.3 · 0.1 = 0.03 mol و nOH- = 0.1 · 0.1 = 0.01 mol. بعد التفاعل H+ + OH- → H2O يتبقى 0.03 - 0.01 = 0.02 mol من H+. [H+] = 0.02 / 0.2 = 0.1 M إذن pH = 1. ولأن الحمض فائض لا يمكن أن يكون المحلول متعادلًا (pH 7)؛ وتنتج القيمتان 12 و 13 من الخلط بين pH و pOH، والقيمة 2 من خطأ تحويل mL إلى L.",
        "zh": "nH+ = 0.3 · 0.1 = 0.03 mol，nOH- = 0.1 · 0.1 = 0.01 mol。H+ + OH- → H2O 反应后剩余 0.03 - 0.01 = 0.02 mol H+。[H+] = 0.02 / 0.2 = 0.1 M，所以 pH = 1。酸过量，溶液不可能呈中性(pH 7)；12 和 13 源于混淆 pH 与 pOH，2 源于 mL 换算成 L 时出错。",
        "ku": "nH+ = 0,3 · 0,1 = 0,03 mol, nOH- = 0,1 · 0,1 = 0,01 mol. Piştî H+ + OH- → H2O, 0,03 - 0,01 = 0,02 mol H+ dimîne. [H+] = 0,02 / 0,2 = 0,1 M e, ji ber vê pH = 1 e. Ji ber ku asîd zêde ye çareserî nikare bêalî (pH 7) be; 12 û 13 ji tevlihevkirina pH û pOH, 2 jî ji veguhastina şaş a mL bo L derdikevin."
      }
    },
    {
      "id": "u19-twin11",
      "stem": {
        "tr": "60 °C'de suyun iyonlaşma sabiti Ksu = 1,0x10^-13'tür. Buna göre 60 °C'deki saf su için,\nI. pH değeri 6,5'tir.\nII. Nötrdür.\nIII. pH + pOH = 14'tür.\nyargılarından hangileri doğrudur?",
        "en": "At 60 °C the ion product of water is Kw = 1.0x10^-13. For pure water at 60 °C, which of the following statements are correct?\nI. Its pH is 6.5.\nII. It is neutral.\nIII. pH + pOH = 14.",
        "de": "Bei 60 °C beträgt das Ionenprodukt des Wassers Kw = 1,0x10^-13. Welche Aussagen über reines Wasser bei 60 °C sind richtig?\nI. Sein pH-Wert ist 6,5.\nII. Es ist neutral.\nIII. pH + pOH = 14.",
        "fr": "À 60 °C, le produit ionique de l’eau vaut Ke = 1,0x10^-13. Pour l’eau pure à 60 °C, lesquelles des affirmations suivantes sont exactes ?\nI. Son pH vaut 6,5.\nII. Elle est neutre.\nIII. pH + pOH = 14.",
        "ru": "При 60 °C ионное произведение воды Kw = 1,0x10^-13. Какие из утверждений о чистой воде при 60 °C верны?\nI. Её pH равен 6,5.\nII. Она нейтральна.\nIII. pH + pOH = 14.",
        "ar": "عند 60 °C يكون الحاصل الأيوني للماء Kw = 1.0x10^-13. أي العبارات التالية صحيحة للماء النقي عند 60 °C؟\nI. قيمة pH له 6.5.\nII. متعادل.\nIII. pH + pOH = 14.",
        "zh": "60 °C 时水的离子积 Kw = 1.0x10^-13。关于 60 °C 的纯水，下列说法中哪些正确？\nI. pH 为 6.5。\nII. 呈中性。\nIII. pH + pOH = 14。",
        "ku": "Li 60 °C sabîta îyonîzasyona avê Ksu = 1,0x10^-13 e. Ji bo ava saf a li 60 °C, kîjan gotin rast in?\nI. pH ya wê 6,5 e.\nII. Bêalî ye.\nIII. pH + pOH = 14 e."
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
      "correctIndex": 2,
      "explanation": {
        "tr": "Saf suda [H+] = [OH-] = √(10^-13) = 10^-6,5 M olduğundan pH = pOH = 6,5'tir (I doğru). [H+] = [OH-] olduğu için su, pH'ı 7'den küçük olsa da nötrdür (II doğru). pH + pOH = -log Ksu = 13'tür; toplamın 14 olması yalnızca 25 °C için geçerlidir (III yanlış).",
        "en": "In pure water [H+] = [OH-] = √(10^-13) = 10^-6.5 M, so pH = pOH = 6.5 (I correct). Because [H+] = [OH-], the water is neutral even though its pH is below 7 (II correct). pH + pOH = -log Kw = 13; a sum of 14 applies only at 25 °C (III incorrect).",
        "de": "In reinem Wasser ist [H+] = [OH-] = √(10^-13) = 10^-6,5 M, also pH = pOH = 6,5 (I richtig). Da [H+] = [OH-], ist das Wasser neutral, obwohl sein pH unter 7 liegt (II richtig). pH + pOH = -log Kw = 13; die Summe 14 gilt nur bei 25 °C (III falsch).",
        "fr": "Dans l’eau pure, [H+] = [OH-] = √(10^-13) = 10^-6,5 M, donc pH = pOH = 6,5 (I exacte). Comme [H+] = [OH-], l’eau est neutre bien que son pH soit inférieur à 7 (II exacte). pH + pOH = -log Ke = 13 ; une somme de 14 n’est valable qu’à 25 °C (III fausse).",
        "ru": "В чистой воде [H+] = [OH-] = √(10^-13) = 10^-6,5 M, поэтому pH = pOH = 6,5 (I верно). Так как [H+] = [OH-], вода нейтральна, хотя её pH меньше 7 (II верно). pH + pOH = -log Kw = 13; сумма 14 справедлива только при 25 °C (III неверно).",
        "ar": "في الماء النقي [H+] = [OH-] = √(10^-13) = 10^-6.5 M لذا pH = pOH = 6.5 (I صحيحة). ولأن [H+] = [OH-] فالماء متعادل رغم أن pH له أقل من 7 (II صحيحة). pH + pOH = -log Kw = 13، والمجموع 14 صحيح عند 25 °C فقط (III خاطئة).",
        "zh": "纯水中 [H+] = [OH-] = √(10^-13) = 10^-6.5 M，所以 pH = pOH = 6.5(I 正确)。因为 [H+] = [OH-]，即使 pH 小于 7，水仍呈中性(II 正确)。pH + pOH = -log Kw = 13；和为 14 只适用于 25 °C(III 错误)。",
        "ku": "Di ava saf de [H+] = [OH-] = √(10^-13) = 10^-6,5 M e, ji ber vê pH = pOH = 6,5 e (I rast e). Ji ber ku [H+] = [OH-] e, av bêalî ye her çend pH ya wê ji 7 kêmtir be jî (II rast e). pH + pOH = -log Ksu = 13 e; koma 14 tenê li 25 °C derbas dibe (III şaş e)."
      }
    },
    {
      "id": "u19-twin12",
      "stem": {
        "tr": "25 °C'de CH3COOH çözeltisi NaOH çözeltisi ile titre edildiğinde eşdeğerlik noktasında pH ≈ 8,7'dir. Dönüm noktasının (indikatörün renk değiştirdiği noktanın) eşdeğerlik noktasına en yakın olması için aşağıdaki indikatörlerden hangisi kullanılmalıdır? (Parantez içinde indikatörlerin renk değiştirdiği pH aralıkları verilmiştir.)",
        "en": "At 25 °C, when CH3COOH solution is titrated with NaOH solution, the pH at the equivalence point is ≈ 8.7. Which indicator should be used so that the end point (where the indicator changes colour) is as close as possible to the equivalence point? (The pH ranges of the colour change are given in parentheses.)",
        "de": "Bei der Titration von CH3COOH-Lösung mit NaOH-Lösung bei 25 °C beträgt der pH am Äquivalenzpunkt ≈ 8,7. Welcher Indikator sollte verwendet werden, damit der Endpunkt (Farbumschlag des Indikators) möglichst nahe am Äquivalenzpunkt liegt? (In Klammern: pH-Umschlagsbereiche.)",
        "fr": "À 25 °C, lors du titrage d’une solution de CH3COOH par une solution de NaOH, le pH au point d’équivalence est ≈ 8,7. Quel indicateur faut-il utiliser pour que le point de virage (changement de couleur de l’indicateur) soit le plus proche possible du point d’équivalence ? (Les zones de virage en pH sont données entre parenthèses.)",
        "ru": "При титровании раствора CH3COOH раствором NaOH при 25 °C pH в точке эквивалентности ≈ 8,7. Какой индикатор следует использовать, чтобы конечная точка титрования (изменение окраски индикатора) была как можно ближе к точке эквивалентности? (В скобках указаны интервалы перехода окраски по pH.)",
        "ar": "عند معايرة محلول CH3COOH بمحلول NaOH عند 25 °C يكون pH عند نقطة التكافؤ ≈ 8.7. أي الكواشف التالية يجب استخدامه لتكون نقطة النهاية (نقطة تغير لون الكاشف) أقرب ما يمكن إلى نقطة التكافؤ؟ (بين القوسين مدى pH لتغير اللون.)",
        "zh": "25 °C 时用 NaOH 溶液滴定 CH3COOH 溶液，化学计量点的 pH ≈ 8.7。为使滴定终点（指示剂变色点）尽可能接近化学计量点，应选用下列哪种指示剂？(括号内为指示剂的变色 pH 范围。)",
        "ku": "Li 25 °C dema çareseriya CH3COOH bi çareseriya NaOH tê tîtrekirin, li xala hevwateyê pH ≈ 8,7 e. Ji bo ku xala dawiyê (xala ku rengê îndîkatorê diguhere) bi qasî ku pêkan e nêzî xala hevwateyê be, kîjan îndîkator divê were bikaranîn? (Di nav kevanan de navberên pH yên guherîna rengê hatine dayîn.)"
      },
      "options": [
        {
          "tr": "Metil oranj (3,1–4,4)",
          "en": "Methyl orange (3.1–4.4)",
          "de": "Methylorange (3,1–4,4)",
          "fr": "Hélianthine (3,1–4,4)",
          "ru": "Метиловый оранжевый (3,1–4,4)",
          "ar": "الميثيل البرتقالي (3.1–4.4)",
          "zh": "甲基橙(3.1–4.4)",
          "ku": "Metîl oranj (3,1–4,4)"
        },
        {
          "tr": "Metil kırmızısı (4,4–6,2)",
          "en": "Methyl red (4.4–6.2)",
          "de": "Methylrot (4,4–6,2)",
          "fr": "Rouge de méthyle (4,4–6,2)",
          "ru": "Метиловый красный (4,4–6,2)",
          "ar": "أحمر الميثيل (4.4–6.2)",
          "zh": "甲基红(4.4–6.2)",
          "ku": "Metîl sor (4,4–6,2)"
        },
        {
          "tr": "Bromtimol mavisi (6,0–7,6)",
          "en": "Bromothymol blue (6.0–7.6)",
          "de": "Bromthymolblau (6,0–7,6)",
          "fr": "Bleu de bromothymol (6,0–7,6)",
          "ru": "Бромтимоловый синий (6,0–7,6)",
          "ar": "أزرق بروموثيمول (6.0–7.6)",
          "zh": "溴百里酚蓝(6.0–7.6)",
          "ku": "Bromtîmol şîn (6,0–7,6)"
        },
        {
          "tr": "Fenolftalein (8,2–10,0)",
          "en": "Phenolphthalein (8.2–10.0)",
          "de": "Phenolphthalein (8,2–10,0)",
          "fr": "Phénolphtaléine (8,2–10,0)",
          "ru": "Фенолфталеин (8,2–10,0)",
          "ar": "الفينولفثالين (8.2–10.0)",
          "zh": "酚酞(8.2–10.0)",
          "ku": "Fenolftaleîn (8,2–10,0)"
        },
        {
          "tr": "Alizarin sarısı R (10,1–12,0)",
          "en": "Alizarin yellow R (10.1–12.0)",
          "de": "Alizaringelb R (10,1–12,0)",
          "fr": "Jaune d’alizarine R (10,1–12,0)",
          "ru": "Ализариновый жёлтый R (10,1–12,0)",
          "ar": "أصفر الأليزارين R (10.1–12.0)",
          "zh": "茜素黄R(10.1–12.0)",
          "ku": "Alîzarîn zer R (10,1–12,0)"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Eşdeğerlik noktası nH+ = nOH- olan noktadır; dönüm noktası ise indikatörün renk değiştirdiği noktadır. Doğru sonuç için indikatörün renk değiştirme aralığı eşdeğerlik noktasındaki pH'ı içermelidir. CH3COO- iyonunun hidrolizi nedeniyle eşdeğerlik noktasında pH ≈ 8,7 olduğundan aralığı 8,2–10,0 olan fenolftalein uygundur. Bromtimol mavisi, eşdeğerlik noktasının pH 7'de olduğu yanılgısıyla seçilir; erken renk değiştirir ve harcanan baz hacmini olduğundan az gösterir.",
        "en": "The equivalence point is where nH+ = nOH-; the end point is where the indicator changes colour. For an accurate result, the indicator’s colour-change range must include the pH at the equivalence point. Because CH3COO- hydrolyzes, the equivalence-point pH is ≈ 8.7, so phenolphthalein (8.2–10.0) is suitable. Bromothymol blue is chosen by those who assume the equivalence point is at pH 7; it changes colour too early and underestimates the volume of base used.",
        "de": "Der Äquivalenzpunkt ist erreicht, wenn nH+ = nOH-; der Endpunkt ist der Farbumschlag des Indikators. Für ein genaues Ergebnis muss der Umschlagsbereich den pH am Äquivalenzpunkt enthalten. Wegen der Hydrolyse von CH3COO- liegt dieser bei ≈ 8,7, daher ist Phenolphthalein (8,2–10,0) geeignet. Bromthymolblau wählt, wer den Äquivalenzpunkt bei pH 7 vermutet; es schlägt zu früh um und täuscht ein zu kleines Basenvolumen vor.",
        "fr": "Le point d’équivalence correspond à nH+ = nOH- ; le point de virage est celui où l’indicateur change de couleur. Pour un résultat exact, la zone de virage doit contenir le pH du point d’équivalence. À cause de l’hydrolyse de CH3COO-, ce pH vaut ≈ 8,7 : la phénolphtaléine (8,2–10,0) convient. Le bleu de bromothymol est choisi si l’on croit que l’équivalence est à pH 7 ; il vire trop tôt et sous-estime le volume de base versé.",
        "ru": "Точка эквивалентности — момент, когда nH+ = nOH-; конечная точка титрования — момент изменения окраски индикатора. Для точного результата интервал перехода индикатора должен включать pH точки эквивалентности. Из-за гидролиза CH3COO- этот pH ≈ 8,7, поэтому подходит фенолфталеин (8,2–10,0). Бромтимоловый синий выбирают, ошибочно считая, что точка эквивалентности при pH 7; он меняет окраску слишком рано и занижает израсходованный объём основания.",
        "ar": "نقطة التكافؤ هي النقطة التي يكون عندها nH+ = nOH-، أما نقطة النهاية فهي نقطة تغير لون الكاشف. وللحصول على نتيجة دقيقة يجب أن يشمل مدى تغير لون الكاشف قيمة pH عند نقطة التكافؤ. وبسبب التحلل المائي لـ CH3COO- يكون pH عند التكافؤ ≈ 8.7، لذا يناسب الفينولفثالين (8.2–10.0). أما أزرق بروموثيمول فيختاره من يظن أن التكافؤ عند pH 7، وهو يغيّر لونه مبكرًا ويُظهر حجم القاعدة المستهلك أقل من الحقيقي.",
        "zh": "化学计量点是 nH+ = nOH- 的点；滴定终点是指示剂变色的点。要得到准确结果，指示剂的变色范围必须包含化学计量点的 pH。由于 CH3COO- 水解，化学计量点 pH ≈ 8.7，因此应选酚酞(8.2–10.0)。误以为化学计量点在 pH 7 的人会选溴百里酚蓝，它变色过早，使测得的碱体积偏小。",
        "ku": "Xala hevwateyê ew xal e ku nH+ = nOH- ye; xala dawiyê ew xal e ku rengê îndîkatorê diguhere. Ji bo encameke rast, navbera guherîna rengê îndîkatorê divê pH ya xala hevwateyê bihewîne. Ji ber hîdrolîza CH3COO-, li xala hevwateyê pH ≈ 8,7 e, ji ber vê fenolftaleîn (8,2–10,0) guncaw e. Bromtîmol şîn ji hêla kesên ku xala hevwateyê li pH 7 dihesibînin ve tê hilbijartin; ew zû reng diguhere û qebareya bazê ya xerckirî kêmtir nîşan dide."
      }
    },
    {
      "id": "u19-twin13",
      "stem": {
        "tr": "25 °C'de pH değeri 3 olan HCl çözeltisinden 10 mL alınıp saf su ile 1 L'ye tamamlanıyor. Oluşan çözeltinin pH değeri kaçtır?",
        "en": "At 25 °C, 10 mL of an HCl solution with pH 3 is taken and diluted to 1 L with pure water. What is the pH of the resulting solution?",
        "de": "Bei 25 °C werden 10 mL einer HCl-Lösung mit pH 3 entnommen und mit reinem Wasser auf 1 L aufgefüllt. Welchen pH-Wert hat die entstehende Lösung?",
        "fr": "À 25 °C, on prélève 10 mL d’une solution de HCl de pH 3 et on complète à 1 L avec de l’eau pure. Quel est le pH de la solution obtenue ?",
        "ru": "При 25 °C 10 мл раствора HCl с pH 3 разбавляют чистой водой до 1 л. Чему равен pH полученного раствора?",
        "ar": "عند 25 °C يُؤخذ 10 mL من محلول HCl قيمة pH له 3 ويُكمَّل بالماء النقي إلى 1 L. ما قيمة pH للمحلول الناتج؟",
        "zh": "25 °C 时，取 10 mL pH 为 3 的 HCl 溶液，用纯水稀释至 1 L。所得溶液的 pH 是多少？",
        "ku": "Li 25 °C ji çareseriya HCl ya ku pH ya wê 3 e 10 mL tê girtin û bi ava saf heta 1 L tê temamkirin. pH ya çareseriya çêbûyî çi ye?"
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
          "tr": "7",
          "en": "7",
          "de": "7",
          "fr": "7",
          "ru": "7",
          "ar": "7",
          "zh": "7",
          "ku": "7"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Hacim 10 mL'den 1000 mL'ye çıktığı için çözelti 100 kat seyreltilir. [H+] = 10^-3 / 100 = 10^-5 M, pH = 5. Kuvvetli asit çözeltisi 10 kat seyreltildiğinde pH 1 birim, 100 kat seyreltildiğinde 2 birim artar. Seyreltmenin pH'ı değiştirmediğini düşünmek 3, seyreltmeyi 10 kat saymak 4 sonucunu verir; seyreltme asidi nötrleştirmediği için bu derişimde pH 7 olmaz.",
        "en": "The volume increases from 10 mL to 1000 mL, so the solution is diluted 100-fold. [H+] = 10^-3 / 100 = 10^-5 M, pH = 5. Diluting a strong acid 10-fold raises the pH by 1 unit, 100-fold by 2 units. Thinking dilution does not change pH gives 3, taking it as 10-fold gives 4; dilution does not neutralize the acid, so the pH does not reach 7 at this concentration.",
        "de": "Das Volumen steigt von 10 mL auf 1000 mL, die Lösung wird also 100-fach verdünnt. [H+] = 10^-3 / 100 = 10^-5 M, pH = 5. Eine 10-fache Verdünnung einer starken Säure erhöht den pH um 1, eine 100-fache um 2 Einheiten. Wer meint, Verdünnen ändere den pH nicht, erhält 3; wer 10-fach rechnet, 4. Verdünnen neutralisiert die Säure nicht, daher wird hier pH 7 nicht erreicht.",
        "fr": "Le volume passe de 10 mL à 1000 mL : la solution est diluée 100 fois. [H+] = 10^-3 / 100 = 10^-5 M, pH = 5. Diluer un acide fort 10 fois augmente le pH d’une unité, 100 fois de deux unités. Croire que la dilution ne change pas le pH donne 3 ; compter une dilution par 10 donne 4 ; la dilution ne neutralise pas l’acide, le pH n’atteint donc pas 7 à cette concentration.",
        "ru": "Объём увеличивается с 10 мл до 1000 мл, то есть раствор разбавляется в 100 раз. [H+] = 10^-3 / 100 = 10^-5 M, pH = 5. Разбавление сильной кислоты в 10 раз повышает pH на 1, в 100 раз — на 2 единицы. Если считать, что разбавление не меняет pH, получится 3; если принять разбавление в 10 раз — 4; разбавление не нейтрализует кислоту, поэтому при такой концентрации pH не достигает 7.",
        "ar": "يزداد الحجم من 10 mL إلى 1000 mL، أي يُخفف المحلول 100 مرة. [H+] = 10^-3 / 100 = 10^-5 M و pH = 5. تخفيف حمض قوي 10 مرات يرفع pH وحدة واحدة، و100 مرة يرفعه وحدتين. الظن بأن التخفيف لا يغيّر pH يعطي 3، واعتبار التخفيف 10 مرات يعطي 4؛ والتخفيف لا يعادل الحمض، لذا لا يصل pH إلى 7 عند هذا التركيز.",
        "zh": "体积由 10 mL 增至 1000 mL，溶液稀释了 100 倍。[H+] = 10^-3 / 100 = 10^-5 M，pH = 5。强酸稀释 10 倍 pH 升高 1 个单位，稀释 100 倍升高 2 个单位。认为稀释不改变 pH 会得 3，按稀释 10 倍计算会得 4；稀释不会中和酸，此浓度下 pH 达不到 7。",
        "ku": "Qebare ji 10 mL derdikeve 1000 mL, ango çareserî 100 qat tê sistkirin. [H+] = 10^-3 / 100 = 10^-5 M, pH = 5. Dema asîdeke xurt 10 qat tê sistkirin pH 1 yeke, 100 qat tê sistkirin 2 yekeyan bilind dibe. Fikirîna ku sistkirin pH naguherîne 3, hesibandina sistkirinê wek 10 qat 4 dide; sistkirin asîdê bêalî nake, ji ber vê di vê tîrbûnê de pH nagihîje 7."
      }
    },
    {
      "id": "u19-twin14",
      "stem": {
        "tr": "25 °C'de 50 mL 0,1 M HCl çözeltisi, 0,1 M NaOH çözeltisi ile titre ediliyor. Buna göre,\nI. Titrasyon başlangıcında çözeltinin pH değeri 13'tür.\nII. 50 mL NaOH eklendiğinde eşdeğerlik noktasına ulaşılır ve pH 7 olur.\nIII. Toplam 100 mL NaOH eklendiğinde çözeltide [OH-] = 0,1 M olur.\nyargılarından hangileri doğrudur?",
        "en": "At 25 °C, 50 mL of 0.1 M HCl solution is titrated with 0.1 M NaOH solution. Which of the following statements are correct?\nI. At the start of the titration the pH of the solution is 13.\nII. When 50 mL of NaOH has been added, the equivalence point is reached and the pH is 7.\nIII. When a total of 100 mL of NaOH has been added, [OH-] = 0.1 M in the solution.",
        "de": "Bei 25 °C werden 50 mL 0,1 M HCl-Lösung mit 0,1 M NaOH-Lösung titriert. Welche Aussagen sind richtig?\nI. Zu Beginn der Titration beträgt der pH-Wert 13.\nII. Nach Zugabe von 50 mL NaOH ist der Äquivalenzpunkt erreicht und der pH beträgt 7.\nIII. Nach Zugabe von insgesamt 100 mL NaOH ist [OH-] = 0,1 M.",
        "fr": "À 25 °C, 50 mL d’une solution de HCl à 0,1 M sont titrés par une solution de NaOH à 0,1 M. Lesquelles des affirmations suivantes sont exactes ?\nI. Au début du titrage, le pH de la solution vaut 13.\nII. Après ajout de 50 mL de NaOH, le point d’équivalence est atteint et le pH vaut 7.\nIII. Après ajout de 100 mL de NaOH au total, [OH-] = 0,1 M dans la solution.",
        "ru": "При 25 °C 50 мл 0,1 M раствора HCl титруют 0,1 M раствором NaOH. Какие из утверждений верны?\nI. В начале титрования pH раствора равен 13.\nII. После добавления 50 мл NaOH достигается точка эквивалентности и pH = 7.\nIII. После добавления в сумме 100 мл NaOH в растворе [OH-] = 0,1 M.",
        "ar": "عند 25 °C يُعاير 50 mL من محلول HCl تركيزه 0.1 M بمحلول NaOH تركيزه 0.1 M. أي العبارات التالية صحيحة؟\nI. في بداية المعايرة يكون pH للمحلول 13.\nII. عند إضافة 50 mL من NaOH يُبلغ نقطة التكافؤ ويكون pH = 7.\nIII. عند إضافة 100 mL من NaOH إجمالًا يصبح [OH-] = 0.1 M في المحلول.",
        "zh": "25 °C 时，用 0.1 M NaOH 溶液滴定 50 mL 0.1 M HCl 溶液。下列说法中哪些正确？\nI. 滴定开始时溶液的 pH 为 13。\nII. 加入 50 mL NaOH 时到达化学计量点，pH 为 7。\nIII. 共加入 100 mL NaOH 时，溶液中 [OH-] = 0.1 M。",
        "ku": "Li 25 °C 50 mL çareseriya 0,1 M HCl bi çareseriya 0,1 M NaOH tê tîtrekirin. Li gorî vê, kîjan gotin rast in?\nI. Di destpêka tîtrasyonê de pH ya çareseriyê 13 e.\nII. Dema 50 mL NaOH lê tê zêdekirin xala hevwateyê tê gihîştin û pH 7 dibe.\nIII. Dema bi giştî 100 mL NaOH lê tê zêdekirin di çareseriyê de [OH-] = 0,1 M dibe."
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
        "tr": "I yanlış: Başlangıçta [H+] = 0,1 M olduğundan pH = 1'dir; 13 değeri pOH ile karıştırıldığında bulunur. II doğru: nHCl = 0,1 · 0,05 = 5x10^-3 mol'dür ve aynı mol NaOH 50 mL'de bulunur; kuvvetli asit-kuvvetli baz titrasyonunda eşdeğerlik noktasında pH 7'dir. III yanlış: 100 mL NaOH'de 10^-2 mol OH- vardır, 5x10^-3 mol'ü artar. Toplam hacim 150 mL olduğundan [OH-] = 5x10^-3 / 0,15 ≈ 0,033 M'dir; hacim artışı hesaba katılmazsa 0,1 M sanılır.",
        "en": "I is incorrect: initially [H+] = 0.1 M, so pH = 1; 13 results from confusing it with pOH. II is correct: nHCl = 0.1 · 0.05 = 5x10^-3 mol, and the same amount of NaOH is in 50 mL; in a strong acid-strong base titration the pH at the equivalence point is 7. III is incorrect: 100 mL of NaOH contains 10^-2 mol OH-, of which 5x10^-3 mol is in excess. The total volume is 150 mL, so [OH-] = 5x10^-3 / 0.15 ≈ 0.033 M; ignoring the volume increase gives the wrong 0.1 M.",
        "de": "I ist falsch: Anfangs ist [H+] = 0,1 M, also pH = 1; 13 entsteht durch Verwechslung mit pOH. II ist richtig: nHCl = 0,1 · 0,05 = 5x10^-3 mol, dieselbe Stoffmenge NaOH ist in 50 mL enthalten; bei starker Säure-starker Base ist der pH am Äquivalenzpunkt 7. III ist falsch: 100 mL NaOH enthalten 10^-2 mol OH-, davon sind 5x10^-3 mol im Überschuss. Das Gesamtvolumen beträgt 150 mL, also [OH-] = 5x10^-3 / 0,15 ≈ 0,033 M; ohne Volumenzunahme erhält man fälschlich 0,1 M.",
        "fr": "I est fausse : au départ [H+] = 0,1 M, donc pH = 1 ; 13 résulte d’une confusion avec le pOH. II est exacte : nHCl = 0,1 · 0,05 = 5x10^-3 mol, la même quantité de NaOH est contenue dans 50 mL ; pour un titrage acide fort-base forte, le pH à l’équivalence vaut 7. III est fausse : 100 mL de NaOH contiennent 10^-2 mol de OH-, dont 5x10^-3 mol en excès. Le volume total est de 150 mL, donc [OH-] = 5x10^-3 / 0,15 ≈ 0,033 M ; oublier l’augmentation de volume donne à tort 0,1 M.",
        "ru": "I неверно: в начале [H+] = 0,1 M, значит, pH = 1; значение 13 получается при путанице с pOH. II верно: nHCl = 0,1 · 0,05 = 5x10^-3 моль, такое же количество NaOH содержится в 50 мл; при титровании сильной кислоты сильным основанием pH в точке эквивалентности равен 7. III неверно: в 100 мл NaOH содержится 10^-2 моль OH-, из них 5x10^-3 моль остаются в избытке. Общий объём равен 150 мл, поэтому [OH-] = 5x10^-3 / 0,15 ≈ 0,033 M; без учёта увеличения объёма ошибочно получают 0,1 M.",
        "ar": "I خاطئة: في البداية [H+] = 0.1 M لذا pH = 1، والقيمة 13 تنتج من الخلط مع pOH. II صحيحة: nHCl = 0.1 · 0.05 = 5x10^-3 mol وتوجد الكمية نفسها من NaOH في 50 mL، وفي معايرة حمض قوي بقاعدة قوية يكون pH عند التكافؤ 7. III خاطئة: يحتوي 100 mL من NaOH على 10^-2 mol من OH- يفيض منها 5x10^-3 mol، والحجم الكلي 150 mL، لذا [OH-] = 5x10^-3 / 0.15 ≈ 0.033 M، وإهمال زيادة الحجم يعطي 0.1 M خطأً.",
        "zh": "I 错误：开始时 [H+] = 0.1 M，pH = 1；13 是与 pOH 混淆的结果。II 正确：nHCl = 0.1 · 0.05 = 5x10^-3 mol，50 mL NaOH 中含有等量的 NaOH；强酸-强碱滴定的化学计量点 pH 为 7。III 错误：100 mL NaOH 含 10^-2 mol OH-，其中过量 5x10^-3 mol；总体积 150 mL，[OH-] = 5x10^-3 / 0.15 ≈ 0.033 M；忽略体积增大会错误地得到 0.1 M。",
        "ku": "I şaş e: di destpêkê de [H+] = 0,1 M e, ji ber vê pH = 1 e; 13 ji tevlihevkirina bi pOH re derdikeve. II rast e: nHCl = 0,1 · 0,05 = 5x10^-3 mol e û heman mîqdara NaOH di 50 mL de heye; di tîtrasyona asîda xurt-baza xurt de li xala hevwateyê pH 7 e. III şaş e: di 100 mL NaOH de 10^-2 mol OH- heye, 5x10^-3 mol jê zêde dimîne. Qebareya giştî 150 mL e, ji ber vê [OH-] = 5x10^-3 / 0,15 ≈ 0,033 M e; heke zêdebûna qebareyê neyê hesibandin bi şaşî 0,1 M tê dîtin."
      }
    },
    {
      "id": "u19-twin15",
      "stem": {
        "tr": "25 °C'de Kb = 1,0x10^-6 olan BOH zayıf bazının 0,01 M sulu çözeltisinin pH değeri kaçtır?",
        "en": "At 25 °C, what is the pH of a 0.01 M aqueous solution of the weak base BOH, whose Kb = 1.0x10^-6?",
        "de": "Welchen pH-Wert hat bei 25 °C eine 0,01 M wässrige Lösung der schwachen Base BOH mit Kb = 1,0x10^-6?",
        "fr": "À 25 °C, quel est le pH d’une solution aqueuse à 0,01 M de la base faible BOH, dont Kb = 1,0x10^-6 ?",
        "ru": "Чему равен pH 0,01 M водного раствора слабого основания BOH (Kb = 1,0x10^-6) при 25 °C?",
        "ar": "عند 25 °C، ما قيمة pH لمحلول مائي تركيزه 0.01 M من القاعدة الضعيفة BOH التي Kb لها = 1.0x10^-6؟",
        "zh": "25 °C 时，Kb = 1.0x10^-6 的弱碱 BOH 的 0.01 M 水溶液的 pH 是多少？",
        "ku": "Li 25 °C pH ya çareseriya avî ya 0,01 M a baza qels BOH ku Kb ya wê 1,0x10^-6 e çi ye?"
      },
      "options": [
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
          "tr": "12",
          "en": "12",
          "de": "12",
          "fr": "12",
          "ru": "12",
          "ar": "12",
          "zh": "12",
          "ku": "12"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "BOH ⇌ B+ + OH- dengesinde iyonlaşan kısım çok küçük olduğundan [OH-] ≈ √(Kb · Cb) = √(10^-6 · 10^-2) = 10^-4 M'dir. pOH = 4, pH = 14 - 4 = 10. pOH değerini cevap olarak vermek 4, bazı kuvvetli sanıp [OH-] = 0,01 M almak 12, Kb değerini doğrudan [OH-] kabul etmek 8 sonucunu verir.",
        "en": "In BOH ⇌ B+ + OH- the ionized part is very small, so [OH-] ≈ √(Kb · Cb) = √(10^-6 · 10^-2) = 10^-4 M. pOH = 4, pH = 14 - 4 = 10. Giving pOH as the answer yields 4; treating the base as strong ([OH-] = 0.01 M) yields 12; taking Kb itself as [OH-] yields 8.",
        "de": "Im Gleichgewicht BOH ⇌ B+ + OH- ist der protolysierte Anteil sehr klein, daher [OH-] ≈ √(Kb · Cb) = √(10^-6 · 10^-2) = 10^-4 M. pOH = 4, pH = 14 - 4 = 10. Wer pOH als Antwort angibt, erhält 4; wer die Base für stark hält ([OH-] = 0,01 M), 12; wer Kb direkt als [OH-] nimmt, 8.",
        "fr": "Dans BOH ⇌ B+ + OH-, la partie ionisée est très faible, donc [OH-] ≈ √(Kb · Cb) = √(10^-6 · 10^-2) = 10^-4 M. pOH = 4, pH = 14 - 4 = 10. Donner le pOH comme réponse conduit à 4 ; considérer la base comme forte ([OH-] = 0,01 M) conduit à 12 ; prendre Kb comme [OH-] conduit à 8.",
        "ru": "В равновесии BOH ⇌ B+ + OH- продиссоциировавшая часть очень мала, поэтому [OH-] ≈ √(Kb · Cb) = √(10^-6 · 10^-2) = 10^-4 M. pOH = 4, pH = 14 - 4 = 10. Если дать в ответ pOH, получится 4; если считать основание сильным ([OH-] = 0,01 M) — 12; если принять Kb за [OH-] — 8.",
        "ar": "في الاتزان BOH ⇌ B+ + OH- يكون الجزء المتأين صغيرًا جدًا، لذا [OH-] ≈ √(Kb · Cb) = √(10^-6 · 10^-2) = 10^-4 M. pOH = 4 و pH = 14 - 4 = 10. إعطاء pOH كإجابة يعطي 4، واعتبار القاعدة قوية ([OH-] = 0.01 M) يعطي 12، واعتبار Kb نفسه [OH-] يعطي 8.",
        "zh": "BOH ⇌ B+ + OH- 中电离部分很小，所以 [OH-] ≈ √(Kb · Cb) = √(10^-6 · 10^-2) = 10^-4 M。pOH = 4，pH = 14 - 4 = 10。把 pOH 当作答案得 4；把它当作强碱([OH-] = 0.01 M)得 12；把 Kb 直接当作 [OH-] 得 8。",
        "ku": "Di hevsengiya BOH ⇌ B+ + OH- de beşa îyonîzebûyî pir piçûk e, ji ber vê [OH-] ≈ √(Kb · Cb) = √(10^-6 · 10^-2) = 10^-4 M e. pOH = 4, pH = 14 - 4 = 10. Dayîna pOH wek bersiv 4, hesibandina bazê wek xurt ([OH-] = 0,01 M) 12, qebûlkirina Kb wek [OH-] 8 dide."
      }
    },
    {
      "id": "u19-twin16",
      "stem": {
        "tr": "25 °C'de 0,2 mol CH3COOH ve 0,1 mol NaOH saf suda çözülerek 1 L çözelti hazırlanıyor. Oluşan çözeltinin pH değeri kaçtır? (CH3COOH için Ka = 1,0x10^-5)",
        "en": "At 25 °C, 0.2 mol of CH3COOH and 0.1 mol of NaOH are dissolved in pure water to make 1 L of solution. What is the pH of the resulting solution? (Ka of CH3COOH = 1.0x10^-5)",
        "de": "Bei 25 °C werden 0,2 mol CH3COOH und 0,1 mol NaOH in reinem Wasser zu 1 L Lösung gelöst. Welchen pH-Wert hat die entstehende Lösung? (Ka von CH3COOH = 1,0x10^-5)",
        "fr": "À 25 °C, on dissout 0,2 mol de CH3COOH et 0,1 mol de NaOH dans de l’eau pure pour obtenir 1 L de solution. Quel est le pH de la solution obtenue ? (Ka de CH3COOH = 1,0x10^-5)",
        "ru": "При 25 °C 0,2 моль CH3COOH и 0,1 моль NaOH растворяют в чистой воде и получают 1 л раствора. Чему равен pH полученного раствора? (Ka для CH3COOH = 1,0x10^-5)",
        "ar": "عند 25 °C يُذاب 0.2 mol من CH3COOH و 0.1 mol من NaOH في الماء النقي لتحضير 1 L من المحلول. ما قيمة pH للمحلول الناتج؟ (Ka لـ CH3COOH = 1.0x10^-5)",
        "zh": "25 °C 时，将 0.2 mol CH3COOH 和 0.1 mol NaOH 溶于纯水配成 1 L 溶液。所得溶液的 pH 是多少？(CH3COOH 的 Ka = 1.0x10^-5)",
        "ku": "Li 25 °C 0,2 mol CH3COOH û 0,1 mol NaOH di ava saf de tên helandin û 1 L çareserî tê amadekirin. pH ya çareseriya çêbûyî çi ye? (Ji bo CH3COOH Ka = 1,0x10^-5)"
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
          "tr": "9",
          "en": "9",
          "de": "9",
          "fr": "9",
          "ru": "9",
          "ar": "9",
          "zh": "9",
          "ku": "9"
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
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "CH3COOH + NaOH → CH3COONa + H2O tepkimesinde 0,1 mol NaOH, 0,1 mol asidi nötrleştirir. Ortamda 0,1 mol CH3COOH ve 0,1 mol CH3COO- kalır; bu karışım bir tampondur. Ka = [H+][CH3COO-] / [CH3COOH] ifadesinden [H+] = Ka · (0,1 / 0,1) = 10^-5 M, pH = 5. Tuzu hesaba katmayıp yalnızca zayıf asit gibi çözmek pH 3, tam nötrleşme olduğunu sanmak pH 7 veya 9, NaOH'yi artan sanmak pH 13 sonucunu verir.",
        "en": "In CH3COOH + NaOH → CH3COONa + H2O, 0.1 mol NaOH neutralizes 0.1 mol of the acid. 0.1 mol CH3COOH and 0.1 mol CH3COO- remain; this mixture is a buffer. From Ka = [H+][CH3COO-] / [CH3COOH], [H+] = Ka · (0.1 / 0.1) = 10^-5 M, pH = 5. Ignoring the salt and treating it as a weak acid alone gives pH 3; assuming complete neutralization gives pH 7 or 9; assuming NaOH is in excess gives pH 13.",
        "de": "Bei CH3COOH + NaOH → CH3COONa + H2O neutralisieren 0,1 mol NaOH 0,1 mol Säure. Es bleiben 0,1 mol CH3COOH und 0,1 mol CH3COO-; dieses Gemisch ist ein Puffer. Aus Ka = [H+][CH3COO-] / [CH3COOH] folgt [H+] = Ka · (0,1 / 0,1) = 10^-5 M, pH = 5. Wer das Salz ignoriert und nur eine schwache Säure rechnet, erhält pH 3; wer vollständige Neutralisation annimmt, pH 7 oder 9; wer NaOH im Überschuss vermutet, pH 13.",
        "fr": "Dans CH3COOH + NaOH → CH3COONa + H2O, 0,1 mol de NaOH neutralise 0,1 mol d’acide. Il reste 0,1 mol de CH3COOH et 0,1 mol de CH3COO- : ce mélange est un tampon. D’après Ka = [H+][CH3COO-] / [CH3COOH], [H+] = Ka · (0,1 / 0,1) = 10^-5 M, pH = 5. Ignorer le sel et traiter un acide faible seul donne pH 3 ; supposer une neutralisation complète donne pH 7 ou 9 ; supposer NaOH en excès donne pH 13.",
        "ru": "В реакции CH3COOH + NaOH → CH3COONa + H2O 0,1 моль NaOH нейтрализует 0,1 моль кислоты. Остаются 0,1 моль CH3COOH и 0,1 моль CH3COO-; эта смесь — буфер. Из Ka = [H+][CH3COO-] / [CH3COOH] следует [H+] = Ka · (0,1 / 0,1) = 10^-5 M, pH = 5. Если не учитывать соль и считать раствор просто слабой кислотой, получится pH 3; если считать нейтрализацию полной — pH 7 или 9; если считать NaOH в избытке — pH 13.",
        "ar": "في التفاعل CH3COOH + NaOH → CH3COONa + H2O يعادل 0.1 mol من NaOH كمية 0.1 mol من الحمض، فيتبقى 0.1 mol من CH3COOH و 0.1 mol من CH3COO-، وهذا المخلوط محلول منظم. من Ka = [H+][CH3COO-] / [CH3COOH] نجد [H+] = Ka · (0.1 / 0.1) = 10^-5 M و pH = 5. إهمال الملح والحساب كحمض ضعيف فقط يعطي pH 3، وافتراض تعادل كامل يعطي pH 7 أو 9، وافتراض فائض NaOH يعطي pH 13.",
        "zh": "在 CH3COOH + NaOH → CH3COONa + H2O 中，0.1 mol NaOH 中和 0.1 mol 酸，剩余 0.1 mol CH3COOH 和 0.1 mol CH3COO-，该混合物是缓冲溶液。由 Ka = [H+][CH3COO-] / [CH3COOH] 得 [H+] = Ka · (0.1 / 0.1) = 10^-5 M，pH = 5。忽略盐而只按弱酸计算得 pH 3；误以为完全中和得 pH 7 或 9；误以为 NaOH 过量得 pH 13。",
        "ku": "Di reaksiyona CH3COOH + NaOH → CH3COONa + H2O de 0,1 mol NaOH 0,1 mol asîd bêalî dike. 0,1 mol CH3COOH û 0,1 mol CH3COO- dimînin; ev tevlihevî tampon e. Ji Ka = [H+][CH3COO-] / [CH3COOH], [H+] = Ka · (0,1 / 0,1) = 10^-5 M, pH = 5. Nehesibandina xwêyê û çareserkirina wek asîda qels tenê pH 3, fikirîna bêalîbûna temam pH 7 an 9, hesibandina NaOH wek zêde pH 13 dide."
      }
    }
  ]
};

export default unit19;
