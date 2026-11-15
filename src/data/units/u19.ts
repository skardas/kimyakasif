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
    "ru": "pH, pOH, Ka, Kb, буферные кривые и кривые титрования",
    "ar": "منحنيات pH وpOH وKa وKb والمخزن المؤقت والمعايرة",
    "zh": "pH、pOH、Ka、Kb、缓冲液和滴定曲线",
    "ku": "PH, pOH, Ka, Kb, Tampon û Kûrên Tîtrasyonê"
  },
  "facts": [
    {
      "id": "u19-f01",
      "fact": {
        "tr": "25 °C'de suyun otoiyonizasyon sabiti Ksu = [H+] * [OH-] = 1.0x10^-14'tür; pH + pOH = 14'tür.",
        "en": "The autoionization constant of water at 25 °C is Ksu = [H+] * [OH-] = 1.0x10^-14; pH + pOH = 14.",
        "de": "Die Autoionisierungskonstante von Wasser bei 25 °C beträgt Ksu = [H+] * [OH-] = 1,0x10^-14; pH + pOH = 14.",
        "fr": "La constante d'autoionisation de l'eau à 25 °C est Ksu = [H+] * [OH-] = 1,0x10^-14 ; pH + pOH = 14.",
        "ru": "Константа автоионизации воды при 25 °С равна Ksu = [H+] * [OH-] = 1,0x10^-14; рН + рОН = 14.",
        "ar": "ثابت التأين الذاتي للماء عند 25 درجة مئوية هو Ksu = [H+] * [OH-] = 1.0x10^-14؛ الرقم الهيدروجيني + الرقم الهيدروجيني = 14.",
        "zh": "25℃时水的自电离常数为Ksu = [H+] * [OH-] = 1.0x10^-14； pH + pOH = 14。",
        "ku": "Hêmana otoyonîzasyona avê di 25 °C de Ksu = [H+] * [OH-] = 1,0x10^-14 e; pH + pOH = 14."
      },
      "trap": {
        "tr": "Her sıcaklıkta pH + pOH toplamı mutlaka 14'tür.",
        "en": "The sum of pH + pOH at every temperature is definitely 14.",
        "de": "Die Summe aus pH + pOH beträgt bei jeder Temperatur definitiv 14.",
        "fr": "La somme pH + pOH à chaque température est définitivement de 14.",
        "ru": "Сумма pH + pOH при каждой температуре определенно равна 14.",
        "ar": "مجموع الرقم الهيدروجيني + الرقم الهيدروجيني عند كل درجة حرارة هو بالتأكيد 14.",
        "zh": "每个温度下 pH + pOH 的总和肯定是 14。",
        "ku": "Di her germahiyê de hejmara pH + pOH bê guman 14 e."
      },
      "osymTip": {
        "tr": "Ksu sıcaklık arttıkça büyür (endotermiktir), bu yüzden sıcaklıkla pH+pOH değişir!",
        "en": "Kwater grows as temperature increases (it is endothermic), so pH+pOH changes with temperature!",
        "de": "KWasser wächst mit steigender Temperatur (es ist endotherm), daher ändern sich pH+pOH mit der Temperatur!",
        "fr": "L'eau K croît à mesure que la température augmente (elle est endothermique), donc pH+pOH change avec la température !",
        "ru": "Kwater растет с повышением температуры (она эндотермична), поэтому pH+pOH меняется с температурой!",
        "ar": "ينمو الماء مع ارتفاع درجة الحرارة (وهو ماص للحرارة)، وبالتالي يتغير الرقم الهيدروجيني + pOH مع درجة الحرارة!",
        "zh": "Kwater 随着温度升高而增加（它是吸热的），因此 pH+pOH 随温度变化！",
        "ku": "Kwater her ku germahî zêde dibe mezin dibe (ew endotermîk e), lewra pH+pOH bi germahiyê re diguhere!"
      }
    },
    {
      "id": "u19-f02",
      "fact": {
        "tr": "Kuvvetli asit ve bazlar suda %100 iyonlaşırken, zayıf asit ve bazlar kısmen iyonlaşarak denge kurar (Ka, Kb).",
        "en": "While strong acids and bases ionize 100% in water, weak acids and bases partially ionize and establish equilibrium (Ka, Kb).",
        "de": "Während starke Säuren und Basen in Wasser zu 100 % ionisieren, ionisieren schwache Säuren und Basen teilweise und stellen ein Gleichgewicht her (Ka, Kb).",
        "fr": "Alors que les acides et bases forts s'ionisent à 100 % dans l'eau, les acides et bases faibles s'ionisent partiellement et établissent l'équilibre (Ka, Kb).",
        "ru": "В то время как сильные кислоты и основания ионизируются в воде на 100%, слабые кислоты и основания ионизируются частично и устанавливают равновесие (Ka, Kb).",
        "ar": "بينما تتأين الأحماض والقواعد القوية بنسبة 100% في الماء، تتأين الأحماض والقواعد الضعيفة جزئيًا وتحقق التوازن (Ka, Kb).",
        "zh": "强酸和强碱在水中 100% 电离，而弱酸和碱则部分电离并建立平衡 (Ka、Kb)。",
        "ku": "Dema ku asîd û bazên xurt di avê de %100 îyonîze dibin, asîd û bazên qels qismî iyon dibin û hevsengiyê saz dikin (Ka, Kb)."
      },
      "trap": {
        "tr": "Zayıf asitler suda hiç iyonlaşmaz.",
        "en": "Weak acids do not ionize at all in water.",
        "de": "Schwache Säuren ionisieren in Wasser überhaupt nicht.",
        "fr": "Les acides faibles ne s'ionisent pas du tout dans l'eau.",
        "ru": "Слабые кислоты вообще не ионизируются в воде.",
        "ar": "الأحماض الضعيفة لا تتأين على الإطلاق في الماء.",
        "zh": "弱酸在水中根本不电离。",
        "ku": "Asîdên qels di avê de qet îyonîze nabin."
      }
    },
    {
      "id": "u19-f03",
      "fact": {
        "tr": "Zayıf monoproteik asit için [H+] = sqrt(Ka * Ca)'dır (Ca: asidin başlangıç molaritesi).",
        "en": "For weak monoproteic acid, [H+] = sqrt(Ka * Ca) (Ca: initial molarity of the acid).",
        "de": "Für schwache Monoproteinsäure ist [H+] = sqrt(Ka * Ca) (Ca: anfängliche Molarität der Säure).",
        "fr": "Pour l'acide monoprotéique faible, [H+] = sqrt(Ka * Ca) (Ca : molarité initiale de l'acide).",
        "ru": "Для слабой монопротеиновой кислоты [H+] = sqrt(Ka * Ca) (Ca: начальная молярность кислоты).",
        "ar": "بالنسبة للحمض أحادي البروتين الضعيف، [H+] = sqrt(Ka * Ca) (Ca: المولارية الأولية للحمض).",
        "zh": "对于弱单蛋白酸，[H+] = sqrt(Ka * Ca)（Ca：酸的初始摩尔浓度）。",
        "ku": "Ji bo asîda monoproteîk a qels, [H+] = sqrt(Ka * Ca) (Ca: molarîteya destpêkê ya asîdê)."
      },
      "trap": {
        "tr": "Zayıf asidin H+ derişimi başlangıç derişimine eşittir.",
        "en": "The H+ concentration of the weak acid is equal to the initial concentration.",
        "de": "Die H+-Konzentration der schwachen Säure entspricht der Anfangskonzentration.",
        "fr": "La concentration H+ de l’acide faible est égale à la concentration initiale.",
        "ru": "Концентрация H+ слабой кислоты равна исходной концентрации.",
        "ar": "تركيز H+ للحمض الضعيف يساوي التركيز الأولي.",
        "zh": "弱酸的H+浓度等于初始浓度。",
        "ku": "Pîvana H+ ya asîda qels bi kêşeya destpêkê re ye."
      }
    },
    {
      "id": "u19-f04",
      "fact": {
        "tr": "Brønsted-Lowry tanımına göre H+ veren asit, H+ alan bazdır; aralarında 1 H+ fark olan çiftlere konjuge (eşlenik) asit-baz denir.",
        "en": "According to the Brønsted-Lowry definition, an acid that donates H+ is a base that accepts H+; Pairs with a difference of 1 H+ between them are called conjugated acid-base.",
        "de": "Gemäß der Brønsted-Lowry-Definition ist eine Säure, die H+ abgibt, eine Base, die H+ akzeptiert; Paare mit einem Unterschied von 1 H+ zwischen ihnen werden als konjugierte Säure-Base bezeichnet.",
        "fr": "Selon la définition de Brønsted-Lowry, un acide qui donne H+ est une base qui accepte H+ ; Les paires avec une différence de 1 H+ entre elles sont appelées acide-base conjuguée.",
        "ru": "Согласно определению Бренстеда-Лоури, кислота, отдающая H+, является основанием, акцептирующим H+; Пары с разницей между ними в 1 Н+ называются сопряженными кислотно-основными.",
        "ar": "وفقًا لتعريف برونستد-لوري، فإن الحمض الذي يمنح H+ هو قاعدة تقبل H+؛ تسمى الأزواج التي يكون الفرق بينها 1H+ بقاعدة حمضية مترافقة.",
        "zh": "根据 Brønsted-Lowry 定义，提供 H+ 的酸是接受 H+ 的碱；相差 1 H+ 的酸碱对称为共轭酸碱对。",
        "ku": "Li gorî pênaseya Brønsted-Lowry, asîda ku H+ dide bazeke ku H+ qebûl dike; Ji cotên ku di navbera wan de 1 H+ ferqa wan heye, asîda-baza hevgirtî tê gotin."
      },
      "trap": {
        "tr": "Eşlenik asit-baz çiftleri arasında 2 elektron farkı bulunur.",
        "en": "There is a difference of 2 electrons between conjugated acid-base pairs.",
        "de": "Zwischen konjugierten Säure-Base-Paaren besteht ein Unterschied von 2 Elektronen.",
        "fr": "Il existe une différence de 2 électrons entre les paires acide-base conjuguées.",
        "ru": "Между сопряженными кислотно-основными парами существует разница в 2 электрона.",
        "ar": "يوجد فرق قدره 2 إلكترون بين أزواج الحمض والقاعدة المترافقة.",
        "zh": "共轭酸碱对之间存在2个电子之差。",
        "ku": "Di navbera cotên asîd-bazê yên hevgirtî de 2 elektronan ferq heye."
      }
    },
    {
      "id": "u19-f05",
      "fact": {
        "tr": "Bir eşlenik asit-baz çiftinde Ka * Kb = Ksu = 10^-14'tür (25 °C'de).",
        "en": "In a conjugate acid-base pair, Ka * Kb = Ksu = 10^-14 (at 25 °C).",
        "de": "In einem konjugierten Säure-Base-Paar beträgt Ka * Kb = Ksu = 10^-14 (bei 25 °C).",
        "fr": "Dans une paire acide-base conjuguée, Ka * Kb = Ksu = 10^-14 (à 25 °C).",
        "ru": "В сопряженной кислотно-основной паре Ка * Kb = Ksu = 10^-14 (при 25 °С).",
        "ar": "في زوج مترافق من حمض وقاعدة، Ka * Kb = Ksu = 10^-14 (عند 25 درجة مئوية).",
        "zh": "在共轭酸碱对中，Ka * Kb = Ksu = 10^-14（25 °C 时）。",
        "ku": "Di cotek asîd-bazê ya hevgirtî de, Ka * Kb = Ksu = 10^-14 (li 25 °C)."
      },
      "trap": {
        "tr": "Ka değeri büyük olan asidin eşlenik bazının Kb değeri de çok büyüktür.",
        "en": "The Kb value of the conjugate base of the acid with a high Ka value is also very high.",
        "de": "Der Kb-Wert der konjugierten Base der Säure mit einem hohen Ka-Wert ist ebenfalls sehr hoch.",
        "fr": "La valeur Kb de la base conjuguée de l'acide avec une valeur Ka élevée est également très élevée.",
        "ru": "Значение Kb сопряженного основания кислоты с высоким значением Ka также очень велико.",
        "ar": "كما أن قيمة Kb للقاعدة المترافقة للحمض ذات قيمة Ka العالية مرتفعة جدًا أيضًا.",
        "zh": "Ka值高的酸的共轭碱的Kb值也很高。",
        "ku": "Nirxa Kb ya bingeha hevgirtî ya asîda bi nirxa Ka ya bilind jî pir zêde ye."
      }
    },
    {
      "id": "u19-f06",
      "fact": {
        "tr": "Tampon çözelti, zayıf asit ile onun konjuge tuzunu (veya zayıf baz ile konjuge tuzunu) içeren ve pH değişimine direnen sistemdir.",
        "en": "Buffer solution is a system that contains a weak acid and its conjugate salt (or a weak base and its conjugate salt) and resists pH change.",
        "de": "Pufferlösung ist ein System, das eine schwache Säure und ihr Konjugatsalz (oder eine schwache Base und ihr Konjugatsalz) enthält und pH-Änderungen widersteht.",
        "fr": "La solution tampon est un système qui contient un acide faible et son sel conjugué (ou une base faible et son sel conjugué) et résiste aux changements de pH.",
        "ru": "Буферный раствор — это система, которая содержит слабую кислоту и сопряженную с ней соль (или слабое основание и сопряженную с ней соль) и устойчива к изменению pH.",
        "ar": "المحلول المنظم هو نظام يحتوي على حمض ضعيف وملحه المرافق (أو قاعدة ضعيفة وملحه المرافق) ويقاوم تغير الرقم الهيدروجيني.",
        "zh": "缓冲溶液是含有弱酸及其共轭盐（或弱碱及其共轭盐）并抵抗pH变化的体系。",
        "ku": "Çareseriya tampon pergalek e ku asîdek qels û xwêya wê ya hevgirtî (an jî bingehek qels û xwêya wê ya hevgirtî) dihewîne û li hember guherîna pH-ê radiweste."
      },
      "trap": {
        "tr": "Tampon çözelti kuvvetli asit ile kuvvetli baz karışımından oluşur.",
        "en": "Buffer solution consists of a mixture of strong acid and strong base.",
        "de": "Pufferlösung besteht aus einer Mischung aus starker Säure und starker Base.",
        "fr": "La solution tampon est constituée d’un mélange d’acide fort et de base forte.",
        "ru": "Буферный раствор состоит из смеси сильной кислоты и сильного основания.",
        "ar": "يتكون المحلول المنظم من خليط من حمض قوي وقاعدة قوية.",
        "zh": "缓冲溶液由强酸和强碱的混合物组成。",
        "ku": "Çareseriya tampon ji tevliheviya asîda xurt û bazê xurt pêk tê."
      }
    },
    {
      "id": "u19-f07",
      "fact": {
        "tr": "İnsan kanı (pH ≈ 7.4) H2CO3 / HCO3- karbonik asit-bikarbonat tampon sistemiyle dengelenir.",
        "en": "Human blood (pH ≈ 7.4) is balanced by the H2CO3 / HCO3- carbonic acid-bicarbonate buffer system.",
        "de": "Menschliches Blut (pH ≈ 7,4) wird durch das H2CO3/HCO3-Kohlensäure-Bikarbonat-Puffersystem ausgeglichen.",
        "fr": "Le sang humain (pH ≈ 7,4) est équilibré par le système tampon H2CO3 / HCO3-acide carbonique-bicarbonate.",
        "ru": "Кровь человека (pH ≈ 7,4) сбалансирована буферной системой H2CO3/HCO3-карбоновая кислота-бикарбонат.",
        "ar": "يتم موازنة دم الإنسان (الرقم الهيدروجيني ≈ 7.4) بواسطة النظام العازل لحمض الكربونيك وبيكربونات H2CO3 / HCO3.",
        "zh": "人体血液（pH ≈ 7.4）通过 H2CO3 / HCO3-碳酸-碳酸氢盐缓冲系统进行平衡。",
        "ku": "Xwîna mirovan (pH ≈ 7,4) ji hêla pergala tampon H2CO3 / HCO3- asîda karbonîk-bîkarbonat ve tê hevseng kirin."
      },
      "trap": {
        "tr": "Kan tampon sistemi hidroklorik asit ile dengelenir.",
        "en": "The blood buffer system is balanced by hydrochloric acid.",
        "de": "Das Blutpuffersystem wird durch Salzsäure ausgeglichen.",
        "fr": "Le système tampon sanguin est équilibré par l’acide chlorhydrique.",
        "ru": "Буферная система крови сбалансирована соляной кислотой.",
        "ar": "تتم موازنة النظام العازل للدم بواسطة حمض الهيدروكلوريك.",
        "zh": "血液缓冲系统由盐酸平衡。",
        "ku": "Pergala tampon a xwînê bi asîda hîdrochloric hevseng e."
      }
    },
    {
      "id": "u19-f08",
      "fact": {
        "tr": "Titrasyonda eşdeğerlik noktası (dönüm noktası): Asitten gelen H+ mol sayısının bazdan gelen OH- mol sayısına eşit olduğu andır (nH+ = nOH-).",
        "en": "Equivalence point (turning point) in titration: It is the moment when the number of moles of H+ coming from the acid is equal to the number of moles of OH- coming from the base (nH+ = nOH-).",
        "de": "Äquivalenzpunkt (Wendepunkt) bei der Titration: Dies ist der Moment, in dem die Anzahl der Mol H+ aus der Säure gleich der Anzahl Mol OH- aus der Base ist (nH+ = nOH-).",
        "fr": "Point d'équivalence (tournant) en titrage : C'est le moment où le nombre de moles de H+ provenant de l'acide est égal au nombre de moles de OH- provenant de la base (nH+ = nOH-).",
        "ru": "Точка эквивалентности (точка поворота) при титровании: Это момент, когда количество молей H+, поступающих из кислоты, равно числу молей OH-, поступающих из основания (nH+ = nOH-).",
        "ar": "نقطة التكافؤ (نقطة التحول) في المعايرة: هي اللحظة التي يكون فيها عدد مولات H+ القادمة من الحمض مساوية لعدد مولات OH- القادمة من القاعدة (nH+ = nOH-).",
        "zh": "滴定中的当量点（转折点）：是酸中H+的摩尔数等于碱中OH-的摩尔数的时刻（nH+ = nOH-）。",
        "ku": "Di titrasyonê de xala hevdengiyê (xala zivirînê): Dema ku hejmara molên H+ yên ji asîdê tên bi hejmara molên OH- yên ji bazê tên (nH+ = nOH-) ye."
      },
      "trap": {
        "tr": "Eşdeğerlik noktasında çözeltinin pH'ı daima 7.00 olmak zorundadır.",
        "en": "At the equivalence point, the pH of the solution must always be 7.00.",
        "de": "Am Äquivalenzpunkt muss der pH-Wert der Lösung immer 7,00 betragen.",
        "fr": "Au point d'équivalence, le pH de la solution doit toujours être de 7,00.",
        "ru": "В точке эквивалентности pH раствора всегда должен быть 7,00.",
        "ar": "عند نقطة التكافؤ، يجب أن يكون الرقم الهيدروجيني للمحلول دائمًا 7.00.",
        "zh": "在当量点，溶液的 pH 值必须始终为 7.00。",
        "ku": "Di xala hevdengiyê de, pH ya çareseriyê divê her gav 7.00 be."
      },
      "osymTip": {
        "tr": "Zayıf asit - kuvvetli baz titrasyonunda eşdeğerlik noktasında pH > 7'dir!",
        "en": "In weak acid - strong base titration, the pH at the equivalence point is > 7!",
        "de": "Bei der Titration schwache Säure – starke Base beträgt der pH-Wert am Äquivalenzpunkt > 7!",
        "fr": "Dans le titrage acide faible - base forte, le pH au point d'équivalence est > 7 !",
        "ru": "При титровании слабая кислота - сильное основание pH в точке эквивалентности > 7!",
        "ar": "في معايرة الحمض الضعيف والقاعدة القوية، يكون الرقم الهيدروجيني عند نقطة التكافؤ أكبر من 7!",
        "zh": "弱酸-强碱滴定时，等当点的pH>7！",
        "ku": "Di tîtrasyona asîda qels - bazê xurt de, pH li xala hevsengiyê > 7 e!"
      }
    },
    {
      "id": "u19-f09",
      "fact": {
        "tr": "Kuvvetli asit - kuvvetli baz titrasyonunda eşdeğerlik noktasında pH tam 7.00'dir.",
        "en": "In the strong acid - strong base titration, the pH at the equivalence point is exactly 7.00.",
        "de": "Bei der Titration starke Säure – starke Base beträgt der pH-Wert am Äquivalenzpunkt genau 7,00.",
        "fr": "Dans le titrage acide fort - base forte, le pH au point d’équivalence est exactement de 7,00.",
        "ru": "При титровании сильной кислотой и сильным основанием pH в точке эквивалентности составляет ровно 7,00.",
        "ar": "في معايرة حمض قوي - قاعدة قوية، يكون الرقم الهيدروجيني عند نقطة التكافؤ 7.00 بالضبط.",
        "zh": "在强酸-强碱滴定中，等当点的pH值恰好为7.00。",
        "ku": "Di tîtrasyona asîd-bazek xurt de, pH li xala hevsengiyê tam 7.00 e."
      },
      "trap": {
        "tr": "Kuvvetli asit kuvvetli baz titrasyonunda eşdeğerlik noktasında pH 0'dır.",
        "en": "In a strong acid strong base titration, pH is 0 at the equivalence point.",
        "de": "Bei einer Titration mit starker Säure und starker Base beträgt der pH-Wert am Äquivalenzpunkt 0.",
        "fr": "Dans un titrage acide fort base forte, le pH est de 0 au point d’équivalence.",
        "ru": "При титровании сильной кислотой и сильным основанием pH равен 0 в точке эквивалентности.",
        "ar": "في معايرة حمض قوي بقاعدة قوية، يكون الرقم الهيدروجيني 0 عند نقطة التكافؤ.",
        "zh": "在强酸强碱滴定中，等当点的pH值为0。",
        "ku": "Di titrasyonek bingehîn a bihêz a asîdê de, pH di xala hevkêşiyê de 0 ye."
      }
    },
    {
      "id": "u19-f10",
      "fact": {
        "tr": "Tuz hidrolizi: Zayıf asitten gelen anyon veya zayıf bazdan gelen katyonun suyla tepkimeye girmesidir.",
        "en": "Salt hydrolysis: It is the reaction of the anion from a weak acid or the cation from a weak base with water.",
        "de": "Salzhydrolyse: Dabei handelt es sich um die Reaktion des Anions einer schwachen Säure oder des Kations einer schwachen Base mit Wasser.",
        "fr": "Hydrolyse du sel : C'est la réaction de l'anion d'un acide faible ou du cation d'une base faible avec l'eau.",
        "ru": "Солевой гидролиз: это реакция аниона слабой кислоты или катиона слабого основания с водой.",
        "ar": "التحلل المائي للملح: هو تفاعل الأنيون من حمض ضعيف أو الكاتيون من قاعدة ضعيفة مع الماء.",
        "zh": "盐水解：弱酸中的阴离子或弱碱中的阳离子与水的反应。",
        "ku": "Hîdrolîza xwê: Reaksiyona anyona ji asîdeke qels an jî kationa ji bingeheke qels bi avê re ye."
      },
      "trap": {
        "tr": "Nötr tuzların iyonları suda şiddetle hidroliz olur.",
        "en": "Ions of neutral salts hydrolyze violently in water.",
        "de": "Ionen neutraler Salze hydrolysieren in Wasser heftig.",
        "fr": "Les ions de sels neutres s'hydrolysent violemment dans l'eau.",
        "ru": "Ионы нейтральных солей бурно гидролизуются в воде.",
        "ar": "تتحلل أيونات الأملاح المحايدة بعنف في الماء.",
        "zh": "中性盐离子在水中剧烈水解。",
        "ku": "Îyonên xwêyên bêalî di avê de bi tundî hîdrolîz dibin."
      }
    },
    {
      "id": "u19-f11",
      "fact": {
        "tr": "Asitlik sabiti Ka büyüdükçe asidin kuvveti ve iyonlaşma yüzdesi artar.",
        "en": "As the acidity constant Ka increases, the strength of the acid and the percentage of ionization increase.",
        "de": "Mit zunehmender Säurekonstante Ka nehmen die Stärke der Säure und der Prozentsatz der Ionisierung zu.",
        "fr": "À mesure que la constante d'acidité Ka augmente, la force de l'acide et le pourcentage d'ionisation augmentent.",
        "ru": "С увеличением константы кислотности Ка увеличивается сила кислоты и процент ионизации.",
        "ar": "ومع زيادة ثابت الحموضة Ka، تزداد قوة الحمض ونسبة التأين.",
        "zh": "随着酸度常数 Ka 的增加，酸的强度和电离百分比增加。",
        "ku": "Her ku tîrêjiya asîdê ya Ka zêde dibe, hêza asîdê û rêjeya îyonîzasyonê zêde dibe."
      },
      "trap": {
        "tr": "Ka'sı küçük olan asit daha kuvvetlidir.",
        "en": "The acid with smaller muscles is stronger.",
        "de": "Bei kleineren Muskeln ist die Säure stärker.",
        "fr": "L'acide avec des muscles plus petits est plus fort.",
        "ru": "Кислота с меньшими мышцами сильнее.",
        "ar": "الحمض ذو العضلات الأصغر يكون أقوى.",
        "zh": "肌肉越小，酸越强。",
        "ku": "Asîda bi masûlkeyên piçûktir bihêztir e."
      }
    },
    {
      "id": "u19-f12",
      "fact": {
        "tr": "Zayıf bir asit çözeltisine saf su eklenip seyreltilirse iyonlaşma yüzdesi artar; ancak H+ derişimi azalır (pH artar).",
        "en": "If pure water is added to a weak acid solution and diluted, the percentage of ionization increases; but the H+ concentration decreases (pH increases).",
        "de": "Wenn einer schwach sauren Lösung reines Wasser zugesetzt und verdünnt wird, erhöht sich der Prozentsatz der Ionisierung; aber die H+-Konzentration nimmt ab (pH-Wert steigt).",
        "fr": "Si de l'eau pure est ajoutée à une solution acide faible et diluée, le pourcentage d'ionisation augmente ; mais la concentration en H+ diminue (le pH augmente).",
        "ru": "Если к раствору слабой кислоты добавить чистую воду и разбавить ее, процент ионизации возрастает; но концентрация H+ уменьшается (рН увеличивается).",
        "ar": "إذا أضيف الماء النقي إلى محلول حمضي ضعيف وتم تخفيفه، تزداد نسبة التأين؛ لكن تركيز H+ يتناقص (يزيد الرقم الهيدروجيني).",
        "zh": "如果将纯水加入到弱酸溶液中并稀释，电离的百分比会增加；但 H+ 浓度降低（pH 值升高）。",
        "ku": "Ger ava paqij li çareseriyek asîdê ya qels were zêdekirin û were rijandin, rêjeya îyonîzasyonê zêde dibe; lê giraniya H+ kêm dibe (pH zêde dibe)."
      },
      "trap": {
        "tr": "Zayıf asit seyreltildiğinde H+ derişimi artar.",
        "en": "When a weak acid is diluted, the H+ concentration increases.",
        "de": "Wenn eine schwache Säure verdünnt wird, steigt die H+-Konzentration.",
        "fr": "Lorsqu’un acide faible est dilué, la concentration en H+ augmente.",
        "ru": "При разбавлении слабой кислоты концентрация H+ увеличивается.",
        "ar": "عند تخفيف حمض ضعيف يزداد تركيز H+.",
        "zh": "当弱酸被稀释时，H+浓度增加。",
        "ku": "Dema ku asîdek qels tê rijandin, tansiyona H+ zêde dibe."
      }
    },
    {
      "id": "u19-f13",
      "fact": {
        "tr": "Eşdeğerlik noktasında formül: Ma * Va * Za = Mb * Vb * Zb'dir (Z: tesir/etki değerliği).",
        "en": "At the point of equivalence, the formula is: Ma * Va * Za = Mb * Vb * Zb (Z: potency).",
        "de": "Am Äquivalenzpunkt lautet die Formel: Ma * Va * Za = Mb * Vb * Zb (Z: Potenz).",
        "fr": "Au point d'équivalence, la formule est : Ma * Va * Za = Mb * Vb * Zb (Z : puissance).",
        "ru": "В точке эквивалентности формула такова: Ma * Va * Za = Mb * Vb * Zb (Z: потенция).",
        "ar": "عند نقطة التكافؤ، تكون الصيغة: Ma * Va * Za = Mb * Vb * Zb (Z: فاعلية).",
        "zh": "在等价点，公式为：Ma * Va * Za = Mb * Vb * Zb（Z：效力）。",
        "ku": "Di xala hevdengiyê de, formula ev e: Ma * Va * Za = Mb * Vb * Zb (Z: hêz)."
      },
      "trap": {
        "tr": "Titrasyonda tesir değerliği dikkate alınmaz.",
        "en": "Potency is not taken into account in titration.",
        "de": "Die Potenz wird bei der Titration nicht berücksichtigt.",
        "fr": "La puissance n'est pas prise en compte lors du titrage.",
        "ru": "Потенциал не учитывается при титровании.",
        "ar": "لا تؤخذ الفاعلية بعين الاعتبار في المعايرة.",
        "zh": "滴定时不考虑效价。",
        "ku": "Potansiyel di titrasyonê de nayê hesibandin."
      }
    },
    {
      "id": "u19-f14",
      "fact": {
        "tr": "HCl, HNO3, H2SO4 kuvvetli asit; HF, HCN, CH3COOH (sirke asidi) zayıf asitlerdir.",
        "en": "HCl, HNO3, H2SO4 strong acid; HF, HCN, CH3COOH (vinegar acid) are weak acids.",
        "de": "HCl, HNO3, H2SO4 starke Säure; HF, HCN, CH3COOH (Essigsäure) sind schwache Säuren.",
        "fr": "HCl, HNO3, H2SO4 acide fort ; HF, HCN, CH3COOH (acide vinaigre) sont des acides faibles.",
        "ru": "HCl, HNO3, H2SO4 сильная кислота; HF, HCN, CH3COOH (уксусная кислота) – слабые кислоты.",
        "ar": "حمض الهيدروكلوريك، HNO3، H2SO4 حمض قوي؛ HF، HCN، CH3COOH (حمض الخل) هي أحماض ضعيفة.",
        "zh": "HCl、HNO3、H2SO4强酸； HF、HCN、CH3COOH（醋酸）是弱酸。",
        "ku": "HCl, HNO3, H2SO4 asîdê xurt; HF, HCN, CH3COOH (asîda sîrkeyê) asîdên qels in."
      },
      "trap": {
        "tr": "HF camı erittiği için en kuvvetli asittir.",
        "en": "HF is the strongest acid because it melts glass.",
        "de": "HF ist die stärkste Säure, da sie Glas schmilzt.",
        "fr": "Le HF est l'acide le plus fort car il fait fondre le verre.",
        "ru": "HF — самая сильная кислота, потому что она плавит стекло.",
        "ar": "HF هو أقوى حمض لأنه يذيب الزجاج.",
        "zh": "HF 是最强的酸，因为它可以熔化玻璃。",
        "ku": "HF asîda herî xurt e ji ber ku camê dihelîne."
      },
      "osymTip": {
        "tr": "HF zayıf asittir; camı eritmesi kimyasal özel afinitesindendir!",
        "en": "HF is a weak acid; Melting glass is due to its special chemical affinity!",
        "de": "HF ist eine schwache Säure; Das Schmelzen von Glas ist auf seine besondere chemische Affinität zurückzuführen!",
        "fr": "Le HF est un acide faible ; La fonte du verre est due à son affinité chimique particulière !",
        "ru": "HF – слабая кислота; Плавление стекла происходит благодаря его особому химическому сродству!",
        "ar": "HF حمض ضعيف. ذوبان الزجاج يرجع إلى تقاربه الكيميائي الخاص!",
        "zh": "HF是弱酸；玻璃的熔化是由于其特殊的化学亲和力！",
        "ku": "HF asîdeke qels e; Şilbûna şûşê ji ber girêdana wê ya kîmyewî ya taybetî ye!"
      }
    },
    {
      "id": "u19-f15",
      "fact": {
        "tr": "NaOH, KOH kuvvetli baz; NH3 (amonyak) zayıf bazdır.",
        "en": "NaOH, KOH strong base; NH3 (ammonia) is a weak base.",
        "de": "NaOH, KOH starke Base; NH3 (Ammoniak) ist eine schwache Base.",
        "fr": "NaOH, KOH base forte ; NH3 (ammoniac) est une base faible.",
        "ru": "NaOH, КОН сильное основание; NH3 (аммиак) – слабое основание.",
        "ar": "هيدروكسيد الصوديوم، كوه قاعدة قوية؛ NH3 (الأمونيا) قاعدة ضعيفة.",
        "zh": "NaOH、KOH强碱； NH3（氨）是弱碱。",
        "ku": "NaOH, KOH bingeha xurt; NH3 (ammoniak) bingeheke qels e."
      },
      "trap": {
        "tr": "NH3 kuvvetli bir bazdır.",
        "en": "NH3 is a strong base.",
        "de": "NH3 ist eine starke Base.",
        "fr": "NH3 est une base forte.",
        "ru": "NH3 – сильная база.",
        "ar": "NH3 قاعدة قوية .",
        "zh": "NH3 是强碱。",
        "ku": "NH3 bingehek xurt e."
      }
    },
    {
      "id": "u19-f16",
      "fact": {
        "tr": "İndikatörler ortamın pH'ına bağlı olarak renk değiştiren zayıf organik asit veya bazlardır.",
        "en": "Indicators are weak organic acids or bases that change color depending on the pH of the environment.",
        "de": "Indikatoren sind schwache organische Säuren oder Basen, die je nach pH-Wert der Umgebung ihre Farbe ändern.",
        "fr": "Les indicateurs sont des acides ou des bases organiques faibles qui changent de couleur en fonction du pH de l'environnement.",
        "ru": "Индикаторами являются слабые органические кислоты или основания, меняющие цвет в зависимости от pH среды.",
        "ar": "المؤشرات عبارة عن أحماض أو قواعد عضوية ضعيفة يتغير لونها حسب الرقم الهيدروجيني للبيئة.",
        "zh": "指示剂是弱有机酸或碱，会根据环境的 pH 值改变颜色。",
        "ku": "Nîşan asîdên organîk an bazên qels in ku li gorî pHya hawîrdorê reng diguherînin."
      },
      "trap": {
        "tr": "İndikatörler titrasyon tepkimesini hızlandıran katalizörlerdir.",
        "en": "Indicators are catalysts that accelerate the titration reaction.",
        "de": "Indikatoren sind Katalysatoren, die die Titrationsreaktion beschleunigen.",
        "fr": "Les indicateurs sont des catalyseurs qui accélèrent la réaction de titrage.",
        "ru": "Индикаторы – это катализаторы, ускоряющие реакцию титрования.",
        "ar": "المؤشرات عبارة عن محفزات تعمل على تسريع تفاعل المعايرة.",
        "zh": "指示剂是加速滴定反应的催化剂。",
        "ku": "Nîşan katalîzator in ku reaksiyona titrasyonê lez dikin."
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
        "tr": "Kuvvetli asit suda %100 iyonlaşır (Ka'sı yoktur); zayıf asit kısmen iyonlaşır denge kurar (Ka vardır).",
        "en": "Strong acid ionizes 100% in water (has no Ka); The weak acid partially ionizes and establishes equilibrium (Ka is present).",
        "de": "Starke Säure ionisiert in Wasser zu 100 % (hat kein Ka); Die schwache Säure ionisiert teilweise und stellt ein Gleichgewicht her (Ka ist vorhanden).",
        "fr": "L'acide fort s'ionise à 100 % dans l'eau (n'a pas de Ka) ; L'acide faible s'ionise partiellement et établit l'équilibre (Ka est présent).",
        "ru": "Сильная кислота на 100% ионизируется в воде (не имеет Ка); Слабая кислота частично ионизируется и устанавливает равновесие (присутствует Ка).",
        "ar": "يتأين الحمض القوي بنسبة 100% في الماء (لا يحتوي على كا)؛ يتأين الحمض الضعيف جزئيًا ويحقق التوازن (يوجد Ka).",
        "zh": "强酸在水中100%电离（无Ka）；弱酸部分电离并建立平衡（Ka 存在）。",
        "ku": "Asîda xurt 100% di avê de îyonîze dike (Ka tune); Asîda qels qismî ionîze dike û hevsengiyê saz dike (Ka heye)."
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
        "zh": "当量点",
        "ku": "Xala Wekheviyê"
      },
      "conceptB": {
        "tr": "Nötr Nokta",
        "en": "Neutral Point",
        "de": "Neutraler Punkt",
        "fr": "Point neutre",
        "ru": "Нейтральная точка",
        "ar": "نقطة محايدة",
        "zh": "中性点",
        "ku": "Xalê Bêalî"
      },
      "distinction": {
        "tr": "Eşdeğerlik nH+ = nOH- olduğu andır; nötr nokta pH = 7 olduğu andır. Zayıf asit-kuvvetli bazda eşdeğerlikte pH > 7'dir.",
        "en": "Equivalence is when nH+ = nOH-; The neutral point is when pH = 7. pH > 7 in weak acid-strong base equivalence.",
        "de": "Äquivalenz liegt vor, wenn nH+ = nOH-; Der Neutralpunkt liegt bei pH = 7. pH > 7 im schwachen Säure-starken Basen-Äquivalent.",
        "fr": "L'équivalence est lorsque nH+ = nOH- ; Le point neutre est lorsque pH = 7. pH > 7 en équivalence acide faible-base forte.",
        "ru": "Эквивалентность – это когда nH+ = nOH-; Нейтральной точкой является pH = 7. pH > 7 в эквиваленте слабой кислоты и сильного основания.",
        "ar": "التكافؤ يكون عندما nH+ = nOH-; النقطة المحايدة هي عندما يكون الرقم الهيدروجيني = 7. الرقم الهيدروجيني > 7 في مكافئ القاعدة الحمضية الضعيفة.",
        "zh": "当 nH+ = nOH- 时等效；中性点是当 pH = 7 时。当弱酸-强碱当量时，pH > 7。",
        "ku": "Wekhevî dema ku nH+ = nOH-; Xala bêalî dema ku pH = 7 e. pH > 7 di hevberdana bazê ya qels a asîd-hêz de ye."
      }
    },
    {
      "id": "u19-c03",
      "conceptA": {
        "tr": "Kuvvetli Asit (HCl)",
        "en": "Strong Acid (HCl)",
        "de": "Starke Säure (HCl)",
        "fr": "Acide fort (HCl)",
        "ru": "Сильная кислота (HCl)",
        "ar": "حمض قوي (حمض الهيدروكلوريك)",
        "zh": "强酸（HCl）",
        "ku": "Asîda Xurt (HCl)"
      },
      "conceptB": {
        "tr": "Zayıf Asit (HF)",
        "en": "Weak Acid (HF)",
        "de": "Schwache Säure (HF)",
        "fr": "Acide faible (HF)",
        "ru": "Слабая кислота (HF)",
        "ar": "حمض ضعيف (HF)",
        "zh": "弱酸（HF）",
        "ku": "Asîda qels (HF)"
      },
      "distinction": {
        "tr": "HCl suda %100 iyonlaşarak pH = -log Ca olur; HF suda az iyonlaşır ve [H+] = karekök(Ka.Ca) dengesi kurar.",
        "en": "HCl ionizes 100% in water and becomes pH = -log Ca; HF ionizes less in water and establishes [H+] = square root (Ka.Ca) balance.",
        "de": "HCl ionisiert in Wasser zu 100 % und wird pH = -log Ca; HF ionisiert in Wasser weniger und stellt ein [H+] = Quadratwurzel (Ka.Ca)-Gleichgewicht her.",
        "fr": "HCl s'ionise à 100 % dans l'eau et devient pH = -log Ca ; Le HF s'ionise moins dans l'eau et établit l'équilibre [H+] = racine carrée (Ka.Ca).",
        "ru": "HCl ионизируется на 100% в воде и становится pH = -log Ca; HF меньше ионизируется в воде и устанавливает баланс [H+] = квадратный корень (Ka.Ca).",
        "ar": "يتأين حمض الهيدروكلوريك بنسبة 100% في الماء ويصبح الرقم الهيدروجيني = -log Ca؛ يتأين HF بشكل أقل في الماء ويؤسس توازن [H+] = الجذر التربيعي (Ka.Ca).",
        "zh": "HCl 在水中 100% 电离，变成 pH = -log Ca； HF 在水中电离较少，并建立 [H+] = 平方根 (Ka.Ca) 平衡。",
        "ku": "HCl di avê de %100 iyonîze dibe û dibe pH = -log Ca; HF di avê de kêmtir îyonîze dike û hevsengiya [H+] = koka çargoşe (Ka.Ca) saz dike."
      }
    },
    {
      "id": "u19-c04",
      "conceptA": {
        "tr": "Asit Ayrışma Sabiti (Ka)",
        "en": "Acid Dissociation Constant (Ka)",
        "de": "Säuredissoziationskonstante (Ka)",
        "fr": "Constante de dissociation acide (Ka)",
        "ru": "Константа диссоциации кислоты (Ка)",
        "ar": "ثابت تفكك الحمض (Ka)",
        "zh": "酸解离常数 (Ka)",
        "ku": "Berdewamiya Veqetîna Asîdê (Ka)"
      },
      "conceptB": {
        "tr": "Baz Ayrışma Sabiti (Kb)",
        "en": "Base Dissociation Constant (Kb)",
        "de": "Basendissoziationskonstante (Kb)",
        "fr": "Constante de dissociation de base (Kb)",
        "ru": "Базовая константа диссоциации (Кб)",
        "ar": "ثابت التفكك الأساسي (كيلو بايت)",
        "zh": "碱基解离常数 (Kb)",
        "ku": "Berdewamiya Veqetandina Bingehê (Kb)"
      },
      "distinction": {
        "tr": "Ka asidin kuvvetini ve iyonlaşma dengesini belirtir; eşlenik asit-baz çiftinde Ka . Kb = Ksu = 10^-14'tür.",
        "en": "Ka indicates the strength and ionization balance of the acid; Ka in the conjugate acid-base pair. Kb = Ksu = 10^-14.",
        "de": "Ka gibt die Stärke und das Ionisierungsgleichgewicht der Säure an; Ka im konjugierten Säure-Base-Paar. Kb = Ksu = 10^-14.",
        "fr": "Ka indique la force et l'équilibre d'ionisation de l'acide ; Ka dans la paire acide-base conjuguée. Ko = Ksu = 10^-14.",
        "ru": "Ка указывает на силу и ионизационный баланс кислоты; Ка в сопряженной кислотно-основной паре. Кб = Ксу = 10^-14.",
        "ar": "يشير Ka إلى قوة الحمض وتوازن التأين فيه؛ Ka في الزوج المترافق من حمض وقاعدة. كيلو بايت = Ksu = 10^-14.",
        "zh": "Ka表示酸的强度和电离平衡；共轭酸碱对中的 Ka。 Kb = Ksu = 10^-14。",
        "ku": "Ka balansa hêz û iyonîzasyona asîdê nîşan dide; Ka di cotek asîd-bazê ya konjugate de. Kb = Ksu = 10^-14."
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
        "ar": "الحل العازلة",
        "zh": "缓冲液",
        "ku": "Çareseriya tampon"
      },
      "conceptB": {
        "tr": "Nötr Çözelti",
        "en": "Neutral Solution",
        "de": "Neutrale Lösung",
        "fr": "Solution neutre",
        "ru": "Нейтральное решение",
        "ar": "حل محايد",
        "zh": "中性溶液",
        "ku": "Çareseriya Bêalî"
      },
      "distinction": {
        "tr": "Tampon çözelti zayıf asit ile eşlenik tuzunu içerip pH değişimine direnir; nötr çözeltide pH = 7'dir fakat asit eklenince hızla düşer.",
        "en": "Buffer solution contains the weak acid and its conjugate salt and resists pH change; In neutral solution, pH = 7, but it drops rapidly when acid is added.",
        "de": "Pufferlösung enthält die schwache Säure und ihr Konjugatsalz und widersteht pH-Änderungen; In neutraler Lösung beträgt der pH-Wert 7, fällt jedoch bei Zugabe von Säure schnell ab.",
        "fr": "La solution tampon contient l'acide faible et son sel conjugué et résiste aux changements de pH ; En solution neutre, pH = 7, mais il chute rapidement lorsqu'on ajoute de l'acide.",
        "ru": "Буферный раствор содержит слабую кислоту и сопряженную с ней соль и устойчив к изменению pH; В нейтральном растворе pH = 7, но при добавлении кислоты он быстро падает.",
        "ar": "يحتوي المحلول المنظم على الحمض الضعيف وملحه المرافق ويقاوم تغير الرقم الهيدروجيني؛ في المحلول المتعادل، يكون الرقم الهيدروجيني = 7، لكنه ينخفض ​​بسرعة عند إضافة الحمض.",
        "zh": "缓冲液含有弱酸及其共轭盐，能抵抗pH变化；在中性溶液中，pH=7，但加酸后pH值迅速下降。",
        "ku": "Çareseriya tampon asîda qels û xwêya wê ya hevgirtî dihewîne û li hember guherîna pHê radiweste; Di çareseriya bêalî de, pH = 7, lê dema ku asîd tê zêdekirin zû dadikeve."
      }
    },
    {
      "id": "u19-c06",
      "conceptA": {
        "tr": "Eşdeğerlik Noktası (Dönüm Noktası)",
        "en": "Equivalence Point (Turning Point)",
        "de": "Äquivalenzpunkt (Wendepunkt)",
        "fr": "Point d’équivalence (point tournant)",
        "ru": "Точка эквивалентности (поворотный момент)",
        "ar": "نقطة التكافؤ (نقطة التحول)",
        "zh": "当量点（转折点）",
        "ku": "Xala Wekheviyê (Xala Zivirandinê)"
      },
      "conceptB": {
        "tr": "Nötrleşme Noktası (pH = 7)",
        "en": "Neutralization Point (pH = 7)",
        "de": "Neutralisationspunkt (pH = 7)",
        "fr": "Point de neutralisation (pH = 7)",
        "ru": "Точка нейтрализации (pH = 7)",
        "ar": "نقطة التعادل (الرقم الهيدروجيني = 7)",
        "zh": "中和点（pH = 7）",
        "ku": "Xala bêalîbûnê (pH = 7)"
      },
      "distinction": {
        "tr": "Eşdeğerlik noktasında H+ mol sayısı OH- mole eşittir; zayıf asit kuvvetli baz titrasyonunda eşdeğerlik pH'ı 7'den büyüktür.",
        "en": "At the equivalence point, the number of moles of H+ equals the moles of OH-; In weak acid strong base titration, the equivalence pH is greater than 7.",
        "de": "Am Äquivalenzpunkt entspricht die Anzahl der Mol H+ der Molzahl OH-; Bei der Titration mit schwacher Säure und starker Base liegt der Äquivalenz-pH-Wert über 7.",
        "fr": "Au point d'équivalence, le nombre de moles de H+ est égal aux moles de OH- ; En titrage acide faible base forte, le pH d’équivalence est supérieur à 7.",
        "ru": "В точке эквивалентности количество молей H+ равно молям OH-; При титровании слабой кислоты сильным основанием эквивалентный pH превышает 7.",
        "ar": "عند نقطة التكافؤ، عدد مولات H+ يساوي مولات OH-؛ في معايرة القاعدة القوية للحمض الضعيف، يكون الرقم الهيدروجيني المكافئ أكبر من 7.",
        "zh": "当量点时，H+的摩尔数等于OH-的摩尔数；弱酸强碱滴定时，当量pH值大于7。",
        "ku": "Di xala hevsengiyê de, hejmara molên H+ bi molên OH- re ye; Di titrasyona bingehîn a asîda qels de, pH-ya hevwate ji 7 mezintir e."
      }
    },
    {
      "id": "u19-c07",
      "conceptA": {
        "tr": "Konjuge (Eşlenik) Asit",
        "en": "Conjugated Acid",
        "de": "Konjugierte Säure",
        "fr": "Acide Conjugué",
        "ru": "Конъюгированная кислота",
        "ar": "حمض مترافق",
        "zh": "共轭酸",
        "ku": "Asîda hevgirtî"
      },
      "conceptB": {
        "tr": "Konjuge (Eşlenik) Baz",
        "en": "Conjugated Base",
        "de": "Konjugierte Base",
        "fr": "Base conjuguée",
        "ru": "Сопряженная база",
        "ar": "قاعدة مترافقة",
        "zh": "共轭碱基",
        "ku": "Bingeha hevgirtî"
      },
      "distinction": {
        "tr": "Aralarında 1 proton (H+) farkı olan çiftlerdir; proton veren konjuge asit, proton alan konjuge bazdır.",
        "en": "They are pairs with 1 proton (H+) difference between them; A proton-donating conjugate acid is a proton-accepting conjugate base.",
        "de": "Es handelt sich um Paare mit einem Protonenunterschied (H+) zwischen ihnen; Eine protonenspendende konjugierte Säure ist eine protonenaufnehmende konjugierte Base.",
        "fr": "Ce sont des paires avec une différence de 1 proton (H+) entre elles ; Un acide conjugué donneur de protons est une base conjuguée accepteuse de protons.",
        "ru": "Это пары с разницей в 1 протон (H+); Протондонорная конъюгатная кислота представляет собой протонакцепторное конъюгатное основание.",
        "ar": "وهي عبارة عن أزواج بفارق بروتون واحد (H+) بينهما؛ الحمض المرافق المتبرع بالبروتون هو قاعدة مرافقة تقبل البروتون.",
        "zh": "它们是彼此相差 1 个质子 (H+) 的对；供质子共轭酸是接受质子共轭碱。",
        "ku": "Ew cot in ku di navbera wan de 1 proton (H+) ferqa wan heye; Asîdek hevjînî ya ku proton dide, bingehek hevgirtî ya proton-qebûlker e."
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
        "ku": "Hîdrolîza Cation"
      },
      "conceptB": {
        "tr": "Anyon Hidrolizi",
        "en": "Anion Hydrolysis",
        "de": "Anionenhydrolyse",
        "fr": "Hydrolyse des anions",
        "ru": "Анионный гидролиз",
        "ar": "التحلل الأنيوني",
        "zh": "阴离子水解",
        "ku": "Anion Hydrolysis"
      },
      "distinction": {
        "tr": "Zayıf bazdan gelen katyon (NH4+) hidroliz olarak asidik ortam yapar; zayıf asitten gelen anyon (CH3COO-) hidrolizle bazik ortam yapar.",
        "en": "The cation (NH4+) coming from the weak base creates an acidic environment by hydrolysis; The anion (CH3COO-) coming from the weak acid creates a basic environment by hydrolysis.",
        "de": "Das aus der schwachen Base stammende Kation (NH4+) erzeugt durch Hydrolyse ein saures Milieu; Das aus der schwachen Säure stammende Anion (CH3COO-) erzeugt durch Hydrolyse ein basisches Milieu.",
        "fr": "Le cation (NH4+) issu de la base faible crée un milieu acide par hydrolyse ; L'anion (CH3COO-) issu de l'acide faible crée un environnement basique par hydrolyse.",
        "ru": "Катион (NH4+), исходящий от слабого основания, в результате гидролиза создает кислую среду; Анион (CH3COO-), исходящий из слабой кислоты, в результате гидролиза создает основную среду.",
        "ar": "الكاتيون (NH4+) القادم من القاعدة الضعيفة يخلق بيئة حمضية عن طريق التحلل المائي؛ يخلق الأنيون (CH3COO-) القادم من الحمض الضعيف بيئة أساسية عن طريق التحلل المائي.",
        "zh": "来自弱碱的阳离子（NH4+）通过水解产生酸性环境；来自弱酸的阴离子（CH3COO-）通过水解产生碱性环境。",
        "ku": "Kation (NH4+) ku ji bazê qels tê, bi hîdrolîzê hawîrdoreke asîdî diafirîne; Anyona (CH3COO-) ku ji asîda qels tê, bi hîdrolîzê hawîrdoreke bingehîn diafirîne."
      }
    }
  ],
  "sequences": [
    {
      "id": "u19-s01",
      "title": {
        "tr": "Zayıf Asit pH Hesaplama Adımları",
        "en": "Weak Acid pH Calculation Steps",
        "de": "Berechnungsschritte für den schwach sauren pH-Wert",
        "fr": "Étapes de calcul du pH acide faible",
        "ru": "Этапы расчета pH для слабой кислоты",
        "ar": "خطوات حساب الرقم الهيدروجيني للحمض الضعيف",
        "zh": "弱酸性 pH 值计算步骤",
        "ku": "Pêngavên Hesabkirina pHya Asîda Qels"
      },
      "steps": [
        {
          "tr": "İyonlaşma denge denklemini yaz: HA ⇌ H+ + A-",
          "en": "Write the ionization balance equation: HA ⇌ H+ + A-",
          "de": "Schreiben Sie die Ionisationsgleichgewichtsgleichung: HA ⇌ H+ + A-",
          "fr": "Écrivez l’équation de la balance d’ionisation : HA ⇌ H+ + A-",
          "ru": "Запишите уравнение ионизационного баланса: HA ⇌ H+ + A-.",
          "ar": "اكتب معادلة توازن التأين: HA ⇌ H+ + A-",
          "zh": "写出电离平衡方程：HA ⇌ H+ + A-",
          "ku": "Hevkêşana hevsengiya iyonîzasyonê binivîsin: HA ⇌ H+ + A-"
        },
        {
          "tr": "[H+] = sqrt(Ka * Ca) bağıntısını uygula",
          "en": "Apply the relation [H+] = sqrt(Ka * Ca)",
          "de": "Wenden Sie die Beziehung [H+] = sqrt(Ka * Ca) an.",
          "fr": "Appliquer la relation [H+] = sqrt(Ka * Ca)",
          "ru": "Примените соотношение [H+] = sqrt(Ka * Ca)",
          "ar": "تطبيق العلاقة [H+] = sqrt(Ka * Ca)",
          "zh": "应用关系式 [H+] = sqrt(Ka * Ca)",
          "ku": "Têkiliya [H+] = sqrt (Ka * Ca) bicîh bikin"
        },
        {
          "tr": "[H+] değerini hesapla",
          "en": "Calculate [H+] value",
          "de": "Berechnen Sie den [H+]-Wert",
          "fr": "Calculer la valeur [H+]",
          "ru": "Рассчитать значение [H+]",
          "ar": "احسب قيمة [H+].",
          "zh": "计算[H+]值",
          "ku": "Nirxa [H+] hesab bike"
        },
        {
          "tr": "pH = -log[H+] formülünü çöz",
          "en": "Solve the formula pH = -log[H+]",
          "de": "Lösen Sie die Formel pH = -log[H+]",
          "fr": "Résoudre la formule pH = -log[H+]",
          "ru": "Решите формулу pH = -log[H+]",
          "ar": "حل الصيغة pH = -log[H+]",
          "zh": "求解公式 pH = -log[H+]",
          "ku": "Formula pH = -log[H+] çareser bike"
        }
      ]
    },
    {
      "id": "u19-s02",
      "title": {
        "tr": "Zayıf Asit İyonlaşma Dengesi",
        "en": "Weak Acid Ionization Equilibrium",
        "de": "Schwaches Säureionisationsgleichgewicht",
        "fr": "Équilibre d’ionisation acide faible",
        "ru": "Равновесие ионизации слабой кислоты",
        "ar": "توازن التأين الحمضي الضعيف",
        "zh": "弱酸电离平衡",
        "ku": "Hevsengiya Ionîzasyona Asîdê Qels"
      },
      "steps": [
        {
          "tr": "Zayıf asidin başlangıç derişimi Ca yazılır",
          "en": "The initial concentration of the weak acid is written as Ca",
          "de": "Die Anfangskonzentration der schwachen Säure wird als Ca angegeben",
          "fr": "La concentration initiale de l’acide faible s’écrit Ca",
          "ru": "Начальная концентрация слабой кислоты записывается как Ca",
          "ar": "يُكتب التركيز الأولي للحمض الضعيف بالرمز Ca",
          "zh": "弱酸的初始浓度写为 Ca",
          "ku": "Pîvana destpêkê ya asîda qels wekî Ca tê nivîsandin"
        },
        {
          "tr": "HA ayrışarak H+ ve A- iyonlarına parçalanır",
          "en": "HA decomposes into H+ and A- ions",
          "de": "HA zerfällt in H+- und A--Ionen",
          "fr": "HA se décompose en ions H+ et A-",
          "ru": "ГК распадается на ионы H+ и A-.",
          "ar": "يتحلل HA إلى أيونات H+ وA-",
          "zh": "HA 分解成 H+ 和 A- 离子",
          "ku": "HA di îyonên H+ û A- de veqete"
        },
        {
          "tr": "[H+] = karekök(Ka . Ca) formülü uygulanır",
          "en": "The formula [H+] = square root(Ka . Ca) is applied",
          "de": "Es wird die Formel [H+] = Quadratwurzel(Ka . Ca) angewendet",
          "fr": "La formule [H+] = racine carrée (Ka . Ca) est appliquée",
          "ru": "Применяется формула [H+] = квадратный корень(Ka .Ca).",
          "ar": "يتم تطبيق الصيغة [H+] = الجذر التربيعي(Ka . Ca).",
          "zh": "应用公式 [H+] = 平方根(Ka . Ca)",
          "ku": "Formula [H+] = koka çargoşe (Ka . Ca) tê sepandin"
        },
        {
          "tr": "pH = -log[H+] eşitliğinden çözeltinin pH değeri bulunur",
          "en": "The pH value of the solution is found from the equation pH = -log[H+]",
          "de": "Der pH-Wert der Lösung ergibt sich aus der Gleichung pH = -log[H+]",
          "fr": "La valeur du pH de la solution est obtenue à partir de l'équation pH = -log[H+]",
          "ru": "Значение pH раствора находится из уравнения pH = -log[H+]",
          "ar": "تم العثور على قيمة الرقم الهيدروجيني للمحلول من المعادلة pH = -log[H+]",
          "zh": "溶液的 pH 值可通过方程 pH = -log[H+] 求出",
          "ku": "Nirxa pH ya çareseriyê ji hevkêşana pH = -log[H+] tê dîtin."
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
        "ru": "Механизм буферного раствора",
        "ar": "آلية الحل العازلة",
        "zh": "缓冲溶液机理",
        "ku": "Mekanîzmaya Çareseriya Tampon"
      },
      "steps": [
        {
          "tr": "Zayıf asit ile onun eşlenik tuzu karıştırılır",
          "en": "Mix a weak acid with its conjugate salt",
          "de": "Mischen Sie eine schwache Säure mit ihrem Konjugatsalz",
          "fr": "Mélanger un acide faible avec son sel conjugué",
          "ru": "Смешайте слабую кислоту с ее сопряженной солью.",
          "ar": "خلط حمض ضعيف مع ملحه المرافق",
          "zh": "将弱酸与其共轭盐混合",
          "ku": "Asîdek qels bi xwêya wê ya hevgirtî re tevlihev bikin"
        },
        {
          "tr": "Ortama az miktar kuvvetli asit eklendiğinde eşlenik baz H+'yı tutar",
          "en": "When a small amount of strong acid is added to the medium, the conjugate base retains H+",
          "de": "Wenn dem Medium eine kleine Menge starker Säure zugesetzt wird, behält die konjugierte Base H+",
          "fr": "Lorsqu'une petite quantité d'acide fort est ajoutée au milieu, la base conjuguée retient H+",
          "ru": "При добавлении в среду небольшого количества сильной кислоты сопряженное основание сохраняет H+.",
          "ar": "عند إضافة كمية صغيرة من حمض قوي إلى الوسط، تحتفظ القاعدة المترافقة بـ H+",
          "zh": "当培养基中加入少量强酸时，共轭碱保留H+",
          "ku": "Dema ku mîqdarek piçûk a asîdek bihêz li navgînê were zêdekirin, bingeha hevgirtî H+ digire"
        },
        {
          "tr": "Ortama az miktar baz eklendiğinde zayıf asit OH-'ı nötralleştirir",
          "en": "When a small amount of base is added to the medium, it neutralizes the weak acid OH-",
          "de": "Wenn dem Medium eine kleine Menge Base zugesetzt wird, neutralisiert diese die schwache Säure OH-",
          "fr": "Lorsqu'une petite quantité de base est ajoutée au milieu, elle neutralise l'acide faible OH-",
          "ru": "При добавлении в среду небольшого количества основания оно нейтрализует слабую кислоту OH-.",
          "ar": "عند إضافة كمية صغيرة من القاعدة إلى الوسط، فإنها تعادل الحمض الضعيف OH-",
          "zh": "当介质中加入少量碱时，中和弱酸OH-",
          "ku": "Dema ku mîqdarek piçûk li navgînê tê zêdekirin, ew asîdeya qels OH- bêbandor dike."
        },
        {
          "tr": "Çözeltinin pH değeri neredeyse sabit kalır",
          "en": "The pH value of the solution remains almost constant",
          "de": "Der pH-Wert der Lösung bleibt nahezu konstant",
          "fr": "La valeur pH de la solution reste presque constante",
          "ru": "Значение pH раствора остается практически постоянным.",
          "ar": "تظل قيمة الرقم الهيدروجيني للمحلول ثابتة تقريبًا",
          "zh": "溶液的pH值几乎保持恒定",
          "ku": "Nirxa pH ya çareseriyê hema hema sabît dimîne"
        }
      ]
    },
    {
      "id": "u19-s04",
      "title": {
        "tr": "Kuvvetli Asit-Baz Titrasyonu",
        "en": "Strong Acid-Base Titration",
        "de": "Starke Säure-Base-Titration",
        "fr": "Titrage acide-base fort",
        "ru": "Сильнокислотно-основное титрование",
        "ar": "معايرة حمض-قاعدة قوية",
        "zh": "强酸碱滴定",
        "ku": "Tîtrasyona Asîd-Bas a Hêz"
      },
      "steps": [
        {
          "tr": "Büretteki baz erlendeki asit üzerine damlatılır",
          "en": "The base in the burette is dropped onto the acid in the flask.",
          "de": "Die Base aus der Bürette wird auf die Säure im Kolben getropft.",
          "fr": "La base contenue dans la burette tombe sur l'acide contenu dans le flacon.",
          "ru": "Основание из бюретки капают на кислоту в колбе.",
          "ar": "يتم إسقاط القاعدة الموجودة في السحاحة على الحمض الموجود في الدورق.",
          "zh": "将滴定管中的碱滴到烧瓶中的酸上。",
          "ku": "Bingeha di buretê de li ser asîdê di flask de tê avêtin."
        },
        {
          "tr": "Asidin mol sayısı bazın mol sayısına eşitlenir",
          "en": "The number of moles of acid equals the number of moles of base",
          "de": "Die Anzahl der Mol Säure entspricht der Anzahl der Mol Base",
          "fr": "Le nombre de moles d’acide est égal au nombre de moles de base",
          "ru": "Количество молей кислоты равно количеству молей основания.",
          "ar": "عدد مولات الحمض يساوي عدد مولات القاعدة",
          "zh": "酸的摩尔数等于碱的摩尔数",
          "ku": "Hejmara molên asîdê bi hejmara molên bazê ye"
        },
        {
          "tr": "Eşdeğerlik noktasında pH tam olarak 7.00 olur",
          "en": "At the equivalence point the pH is exactly 7.00",
          "de": "Am Äquivalenzpunkt liegt der pH-Wert genau bei 7,00",
          "fr": "Au point d'équivalence, le pH est exactement de 7,00",
          "ru": "В точке эквивалентности pH равен ровно 7,00.",
          "ar": "عند نقطة التكافؤ يكون الرقم الهيدروجيني 7.00 بالضبط",
          "zh": "在等当点，pH 值恰好为 7.00",
          "ku": "Di xala hevdengiyê de pH tam 7.00 e"
        },
        {
          "tr": "Baz eklenmeye devam edilirse pH 7'nin üstüne çıkar",
          "en": "If base is continued to be added, pH rises above 7.",
          "de": "Bei fortgesetzter Basenzugabe steigt der pH-Wert auf über 7.",
          "fr": "Si l’on continue à ajouter de la base, le pH s’élève au-dessus de 7.",
          "ru": "Если основание продолжают добавлять, pH поднимается выше 7.",
          "ar": "إذا استمرت إضافة القاعدة، يرتفع الرقم الهيدروجيني فوق 7.",
          "zh": "如果继续添加碱，pH 值将升至 7 以上。",
          "ku": "Heger lê zêdekirina bingeh berdewam be, pH ji 7 bilind dibe."
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u19-twin01",
      "stem": {
        "tr": "0.1 M'lık sulu sirke asidi (CH3COOH) çözeltisinin pH değeri kaçtır? (CH3COOH için Ka = 1.0x10^-5)",
        "en": "What is the pH value of 0.1 M aqueous vinegar acid (CH3COOH) solution? (Ka for CH3COOH = 1.0x10^-5)",
        "de": "Wie hoch ist der pH-Wert einer 0,1 M wässrigen Essigsäurelösung (CH3COOH)? (Ka für CH3COOH = 1,0x10^-5)",
        "fr": "Quelle est la valeur du pH d’une solution aqueuse d’acide vinaigre (CH3COOH) 0,1 M ? (Ka pour CH3COOH = 1,0x10^-5)",
        "ru": "Каково значение pH 0,1 М водного раствора уксусной кислоты (CH3COOH)? (Ка для CH3COOH = 1,0x10^-5)",
        "ar": "ما هي قيمة الرقم الهيدروجيني لمحلول حمض الخل المائي (CH3COOH) 0.1 م؟ (كا لCH3COOH = 1.0x10^-5)",
        "zh": "0.1 M 醋酸 (CH3COOH) 水溶液的 pH 值是多少？ （CH3COOH 的 Ka = 1.0x10^-5）",
        "ku": "Nirxa pH ya 0,1 M çareseriya asîda avî ya sîrkê (CH3COOH) çi ye? (Ka ji bo CH3COOH = 1.0x10^-5)"
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
        "tr": "[H+] = sqrt(Ka * Ca) = sqrt(10^-5 * 10^-1) = sqrt(10^-6) = 10^-3 M. pH = -log[H+] = -log(10^-3) = 3.",
        "en": "[H+] = sqrt(Ka * Ca) = sqrt(10^-5 * 10^-1) = sqrt(10^-6) = 10^-3 M. pH = -log[H+] = -log(10^-3) = 3.",
        "de": "[H+] = sqrt(Ka * Ca) = sqrt(10^-5 * 10^-1) = sqrt(10^-6) = 10^-3 M. pH = -log[H+] = -log(10^-3) = 3.",
        "fr": "[H+] = sqrt(Ka * Ca) = sqrt(10^-5 * 10^-1) = sqrt(10^-6) = 10^-3 M. pH = -log[H+] = -log(10^-3) = 3.",
        "ru": "[H+] = sqrt(Ka * Ca) = sqrt(10^-5 * 10^-1) = sqrt(10^-6) = 10^-3 M. pH = -log[H+] = -log(10^-3) = 3.",
        "ar": "[H+] = sqrt(Ka * Ca) = sqrt(10^-5 * 10^-1) = sqrt(10^-6) = 10^-3 M. pH = -log[H+] = -log(10^-3) = 3.",
        "zh": "[H+] = sqrt(Ka * Ca) = sqrt(10^-5 * 10^-1) = sqrt(10^-6) = 10^-3 M。pH = -log[H+] = -log(10^-3) = 3。",
        "ku": "[H+] = sqrt(Ka * Ca) = sqrt(10^-5 * 10^-1) = sqrt(10^-6) = 10^-3 M. pH = -log[H+] = -log(10^-3) = 3."
      }
    },
    {
      "id": "u19-twin02",
      "stem": {
        "tr": "0.1 M 100 mL HCl çözeltisini tam nötralleştirmek için 0.2 M NaOH çözeltisinden kaç mL harcanmalıdır?",
        "en": "How many mL of 0.2 M NaOH solution should be consumed to completely neutralize 100 mL of 0.1 M HCl solution?",
        "de": "Wie viele ml 0,2 M NaOH-Lösung sollten verbraucht werden, um 100 ml 0,1 M HCl-Lösung vollständig zu neutralisieren?",
        "fr": "Combien de ml de solution de NaOH 0,2 M faut-il consommer pour neutraliser complètement 100 ml de solution de HCl 0,1 M ?",
        "ru": "Сколько мл 0,2 М раствора NaOH необходимо израсходовать для полной нейтрализации 100 мл 0,1 М раствора HCl?",
        "ar": "ما عدد مل من محلول NaOH 0.2 M الذي يجب استهلاكه لتحييد 100 مل من محلول 0.1 M HCl تمامًا؟",
        "zh": "完全中和 100 mL 0.1 M HCl 溶液需要消耗多少 mL 0.2 M NaOH 溶液？",
        "ku": "Ji bo ku 100 mL çareseriya 0,1 M HCl bi tevahî bêbandor bibe, divê çend ml çareseriya NaOH 0,2 M were vexwarin?"
      },
      "options": [
        {
          "tr": "50 mL",
          "en": "50mL",
          "de": "50 ml",
          "fr": "50 ml",
          "ru": "50мл",
          "ar": "50 مل",
          "zh": "50毫升",
          "ku": "50 ml"
        },
        {
          "tr": "100 mL",
          "en": "100mL",
          "de": "100 ml",
          "fr": "100 ml",
          "ru": "100мл",
          "ar": "100 مل",
          "zh": "100毫升",
          "ku": "100 ml"
        },
        {
          "tr": "200 mL",
          "en": "200mL",
          "de": "200 ml",
          "fr": "200 ml",
          "ru": "200мл",
          "ar": "200 مل",
          "zh": "200毫升",
          "ku": "200 ml"
        },
        {
          "tr": "25 mL",
          "en": "25mL",
          "de": "25 ml",
          "fr": "25 ml",
          "ru": "25мл",
          "ar": "25 مل",
          "zh": "25毫升",
          "ku": "25 ml"
        },
        {
          "tr": "10 mL",
          "en": "10mL",
          "de": "10 ml",
          "fr": "10 ml",
          "ru": "10мл",
          "ar": "10 مل",
          "zh": "10毫升",
          "ku": "10 ml"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Ma * Va * Za = Mb * Vb * Zb -> 0.1 * 100 * 1 = 0.2 * Vb * 1 -> 10 = 0.2 * Vb -> Vb = 50 mL.",
        "en": "Ma * Va * Za = Mb * Vb * Zb -> 0.1 * 100 * 1 = 0.2 * Vb * 1 -> 10 = 0.2 * Vb -> Vb = 50 mL.",
        "de": "Ma * Va * Za = Mb * Vb * Zb -> 0,1 * 100 * 1 = 0,2 * Vb * 1 -> 10 = 0,2 * Vb -> Vb = 50 ml.",
        "fr": "Ma * Va * Za = Mb * Vb * Zb -> 0,1 * 100 * 1 = 0,2 * Vb * 1 -> 10 = 0,2 * Vb -> Vb = 50 mL.",
        "ru": "Ма*Ва*За = Мб*Вб*Зб -> 0,1*100*1 = 0,2*Вб*1 -> 10 = 0,2*Вб -> Вб = 50 мл.",
        "ar": "Ma * Va * Za = Mb * Vb * Zb -> 0.1 * 100 * 1 = 0.2 * Vb * 1 -> 10 = 0.2 * Vb -> Vb = 50 مل.",
        "zh": "Ma * Va * Za = Mb * Vb * Zb -> 0.1 * 100 * 1 = 0.2 * Vb * 1 -> 10 = 0.2 * Vb -> Vb = 50 mL。",
        "ku": "Ma * Va * Za = Mb * Vb * Zb -> 0,1 * 100 * 1 = 0,2 * Vb * 1 -> 10 = 0,2 * Vb -> Vb = 50 mL."
      }
    },
    {
      "id": "u19-twin03",
      "stem": {
        "tr": "Kimya dersinde Asit-Baz Dengesi ve Titrasyon ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Acid-Base Equilibrium & Titration, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Säure-Base-Gleichgewicht & Titration: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Équilibre Acide-Base & Titrage, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Кислотно-основное равновесие и титрование», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الاتزان الحمضي القاعدي والمعايرة\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“酸碱平衡与滴定”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Hevsengiya Asîd-Baz û Tîtrakirin\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Tampon çözelti kuvvetli asit ile kuvvetli baz karışımından oluşur.",
          "en": "Buffer solution consists of a mixture of strong acid and strong base.",
          "de": "Pufferlösung besteht aus einer Mischung aus starker Säure und starker Base.",
          "fr": "La solution tampon est constituée d’un mélange d’acide fort et de base forte.",
          "ru": "Буферный раствор состоит из смеси сильной кислоты и сильного основания.",
          "ar": "يتكون المحلول المنظم من خليط من حمض قوي وقاعدة قوية.",
          "zh": "缓冲溶液由强酸和强碱的混合物组成。",
          "ku": "Çareseriya tampon ji tevliheviya asîda xurt û bazê xurt pêk tê."
        },
        {
          "tr": "Kuvvetli asit kuvvetli baz titrasyonunda eşdeğerlik noktasında pH 0'dır.",
          "en": "In a strong acid strong base titration, pH is 0 at the equivalence point.",
          "de": "Bei einer Titration mit starker Säure und starker Base beträgt der pH-Wert am Äquivalenzpunkt 0.",
          "fr": "Dans un titrage acide fort base forte, le pH est de 0 au point d’équivalence.",
          "ru": "При титровании сильной кислотой и сильным основанием pH равен 0 в точке эквивалентности.",
          "ar": "في معايرة حمض قوي بقاعدة قوية، يكون الرقم الهيدروجيني 0 عند نقطة التكافؤ.",
          "zh": "在强酸强碱滴定中，等当点的pH值为0。",
          "ku": "Di titrasyonek bingehîn a bihêz a asîdê de, pH di xala hevkêşiyê de 0 ye."
        },
        {
          "tr": "Zayıf monoproteik asit için [H+] = sqrt(Ka * Ca)'dır (Ca: asidin başlangıç molaritesi).",
          "en": "For weak monoproteic acid, [H+] = sqrt(Ka * Ca) (Ca: initial molarity of the acid).",
          "de": "Für schwache Monoproteinsäure ist [H+] = sqrt(Ka * Ca) (Ca: anfängliche Molarität der Säure).",
          "fr": "Pour l'acide monoprotéique faible, [H+] = sqrt(Ka * Ca) (Ca : molarité initiale de l'acide).",
          "ru": "Для слабой монопротеиновой кислоты [H+] = sqrt(Ka * Ca) (Ca: начальная молярность кислоты).",
          "ar": "بالنسبة للحمض أحادي البروتين الضعيف، [H+] = sqrt(Ka * Ca) (Ca: المولارية الأولية للحمض).",
          "zh": "对于弱单蛋白酸，[H+] = sqrt(Ka * Ca)（Ca：酸的初始摩尔浓度）。",
          "ku": "Ji bo asîda monoproteîk a qels, [H+] = sqrt(Ka * Ca) (Ca: molarîteya destpêkê ya asîdê)."
        },
        {
          "tr": "Zayıf asit seyreltildiğinde H+ derişimi artar.",
          "en": "When a weak acid is diluted, the H+ concentration increases.",
          "de": "Wenn eine schwache Säure verdünnt wird, steigt die H+-Konzentration.",
          "fr": "Lorsqu’un acide faible est dilué, la concentration en H+ augmente.",
          "ru": "При разбавлении слабой кислоты концентрация H+ увеличивается.",
          "ar": "عند تخفيف حمض ضعيف يزداد تركيز H+.",
          "zh": "当弱酸被稀释时，H+浓度增加。",
          "ku": "Dema ku asîdek qels tê rijandin, tansiyona H+ zêde dibe."
        },
        {
          "tr": "NH3 kuvvetli bir bazdır.",
          "en": "NH3 is a strong base.",
          "de": "NH3 ist eine starke Base.",
          "fr": "NH3 est une base forte.",
          "ru": "NH3 – сильная база.",
          "ar": "NH3 قاعدة قوية .",
          "zh": "NH3 是强碱。",
          "ku": "NH3 bingehek xurt e."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Zayıf monoproteik asit için [H+] = sqrt(Ka * Ca)'dır (Ca: asidin başlangıç molaritesi).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"For weak monoproteic acid, [H+] = sqrt(Ka * Ca) (Ca: initial molarity of the acid).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Für schwache Monoproteinsäure ist [H+] = sqrt(Ka * Ca) (Ca: anfängliche Molarität der Säure).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Pour l'acide monoprotéique faible, [H+] = sqrt(Ka * Ca) (Ca : molarité initiale de l'acide).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Для слабой монопротеиновой кислоты [H+] = sqrt(Ka * Ca) (Ca: начальная молярность кислоты).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"بالنسبة للحمض أحادي البروتين الضعيف، [H+] = sqrt(Ka * Ca) (Ca: المولارية الأولية للحمض).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“对于弱单蛋白酸，[H+] = sqrt(Ka * Ca)（Ca：酸的初始摩尔浓度）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ji bo asîda monoproteîk a qels, [H+] = sqrt(Ka * Ca) (Ca: molarîteya destpêkê ya asîdê).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u19-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Asit-Baz Dengesi ve Titrasyon konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Acid-Base Equilibrium & Titration?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Säure-Base-Gleichgewicht & Titration zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Équilibre Acide-Base & Titrage ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Кислотно-основное равновесие и титрование»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الاتزان الحمضي القاعدي والمعايرة\"؟",
        "zh": "根据“酸碱平衡与滴定”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Hevsengiya Asîd-Baz û Tîtrakirin\" de rast e?"
      },
      "options": [
        {
          "tr": "Kan tampon sistemi hidroklorik asit ile dengelenir.",
          "en": "The blood buffer system is balanced by hydrochloric acid.",
          "de": "Das Blutpuffersystem wird durch Salzsäure ausgeglichen.",
          "fr": "Le système tampon sanguin est équilibré par l’acide chlorhydrique.",
          "ru": "Буферная система крови сбалансирована соляной кислотой.",
          "ar": "تتم موازنة النظام العازل للدم بواسطة حمض الهيدروكلوريك.",
          "zh": "血液缓冲系统由盐酸平衡。",
          "ku": "Pergala tampon a xwînê bi asîda hîdrochloric hevseng e."
        },
        {
          "tr": "Nötr tuzların iyonları suda şiddetle hidroliz olur.",
          "en": "Ions of neutral salts hydrolyze violently in water.",
          "de": "Ionen neutraler Salze hydrolysieren in Wasser heftig.",
          "fr": "Les ions de sels neutres s'hydrolysent violemment dans l'eau.",
          "ru": "Ионы нейтральных солей бурно гидролизуются в воде.",
          "ar": "تتحلل أيونات الأملاح المحايدة بعنف في الماء.",
          "zh": "中性盐离子在水中剧烈水解。",
          "ku": "Îyonên xwêyên bêalî di avê de bi tundî hîdrolîz dibin."
        },
        {
          "tr": "Titrasyonda tesir değerliği dikkate alınmaz.",
          "en": "Potency is not taken into account in titration.",
          "de": "Die Potenz wird bei der Titration nicht berücksichtigt.",
          "fr": "La puissance n'est pas prise en compte lors du titrage.",
          "ru": "Потенциал не учитывается при титровании.",
          "ar": "لا تؤخذ الفاعلية بعين الاعتبار في المعايرة.",
          "zh": "滴定时不考虑效价。",
          "ku": "Potansiyel di titrasyonê de nayê hesibandin."
        },
        {
          "tr": "Brønsted-Lowry tanımına göre H+ veren asit, H+ alan bazdır; aralarında 1 H+ fark olan çiftlere konjuge (eşlenik) asit-baz denir.",
          "en": "According to the Brønsted-Lowry definition, an acid that donates H+ is a base that accepts H+; Pairs with a difference of 1 H+ between them are called conjugated acid-base.",
          "de": "Gemäß der Brønsted-Lowry-Definition ist eine Säure, die H+ abgibt, eine Base, die H+ akzeptiert; Paare mit einem Unterschied von 1 H+ zwischen ihnen werden als konjugierte Säure-Base bezeichnet.",
          "fr": "Selon la définition de Brønsted-Lowry, un acide qui donne H+ est une base qui accepte H+ ; Les paires avec une différence de 1 H+ entre elles sont appelées acide-base conjuguée.",
          "ru": "Согласно определению Бренстеда-Лоури, кислота, отдающая H+, является основанием, акцептирующим H+; Пары с разницей между ними в 1 Н+ называются сопряженными кислотно-основными.",
          "ar": "وفقًا لتعريف برونستد-لوري، فإن الحمض الذي يمنح H+ هو قاعدة تقبل H+؛ تسمى الأزواج التي يكون الفرق بينها 1H+ بقاعدة حمضية مترافقة.",
          "zh": "根据 Brønsted-Lowry 定义，提供 H+ 的酸是接受 H+ 的碱；相差 1 H+ 的酸碱对称为共轭酸碱对。",
          "ku": "Li gorî pênaseya Brønsted-Lowry, asîda ku H+ dide bazeke ku H+ qebûl dike; Ji cotên ku di navbera wan de 1 H+ ferqa wan heye, asîda-baza hevgirtî tê gotin."
        },
        {
          "tr": "İndikatörler titrasyon tepkimesini hızlandıran katalizörlerdir.",
          "en": "Indicators are catalysts that accelerate the titration reaction.",
          "de": "Indikatoren sind Katalysatoren, die die Titrationsreaktion beschleunigen.",
          "fr": "Les indicateurs sont des catalyseurs qui accélèrent la réaction de titrage.",
          "ru": "Индикаторы – это катализаторы, ускоряющие реакцию титрования.",
          "ar": "المؤشرات عبارة عن محفزات تعمل على تسريع تفاعل المعايرة.",
          "zh": "指示剂是加速滴定反应的催化剂。",
          "ku": "Nîşan katalîzator in ku reaksiyona titrasyonê lez dikin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Brønsted-Lowry tanımına göre H+ veren asit, H+ alan bazdır; aralarında 1 H+ fark olan çiftlere konjuge (eşlenik) asit-baz denir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"According to the Brønsted-Lowry definition, an acid that donates H+ is a base that accepts H+; Pairs with a difference of 1 H+ between them are called conjugated acid-base.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Gemäß der Brønsted-Lowry-Definition ist eine Säure, die H+ abgibt, eine Base, die H+ akzeptiert; Paare mit einem Unterschied von 1 H+ zwischen ihnen werden als konjugierte Säure-Base bezeichnet.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Selon la définition de Brønsted-Lowry, un acide qui donne H+ est une base qui accepte H+ ; Les paires avec une différence de 1 H+ entre elles sont appelées acide-base conjuguée.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Согласно определению Бренстеда-Лоури, кислота, отдающая H+, является основанием, акцептирующим H+; Пары с разницей между ними в 1 Н+ называются сопряженными кислотно-основными.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"وفقًا لتعريف برونستد-لوري، فإن الحمض الذي يمنح H+ هو قاعدة تقبل H+؛ تسمى الأزواج التي يكون الفرق بينها 1H+ بقاعدة حمضية مترافقة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“根据 Brønsted-Lowry 定义，提供 H+ 的酸是接受 H+ 的碱；相差 1 H+ 的酸碱对称为共轭酸碱对。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Li gorî pênaseya Brønsted-Lowry, asîda ku H+ dide bazeke ku H+ qebûl dike; Ji cotên ku di navbera wan de 1 H+ ferqa wan heye, asîda-baza hevgirtî tê gotin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u19-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Asit-Baz Dengesi ve Titrasyon sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Acid-Base Equilibrium & Titration, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Säure-Base-Gleichgewicht & Titration: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Équilibre Acide-Base & Titrage, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Кислотно-основное равновесие и титрование», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الاتزان الحمضي القاعدي والمعايرة\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“酸碱平衡与滴定”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Hevsengiya Asîd-Baz û Tîtrakirin\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Eşdeğerlik noktasında çözeltinin pH'ı daima 7.00 olmak zorundadır.",
          "en": "At the equivalence point, the pH of the solution must always be 7.00.",
          "de": "Am Äquivalenzpunkt muss der pH-Wert der Lösung immer 7,00 betragen.",
          "fr": "Au point d'équivalence, le pH de la solution doit toujours être de 7,00.",
          "ru": "В точке эквивалентности pH раствора всегда должен быть 7,00.",
          "ar": "عند نقطة التكافؤ، يجب أن يكون الرقم الهيدروجيني للمحلول دائمًا 7.00.",
          "zh": "在当量点，溶液的 pH 值必须始终为 7.00。",
          "ku": "Di xala hevdengiyê de, pH ya çareseriyê divê her gav 7.00 be."
        },
        {
          "tr": "Ka'sı küçük olan asit daha kuvvetlidir.",
          "en": "The acid with smaller muscles is stronger.",
          "de": "Bei kleineren Muskeln ist die Säure stärker.",
          "fr": "L'acide avec des muscles plus petits est plus fort.",
          "ru": "Кислота с меньшими мышцами сильнее.",
          "ar": "الحمض ذو العضلات الأصغر يكون أقوى.",
          "zh": "肌肉越小，酸越强。",
          "ku": "Asîda bi masûlkeyên piçûktir bihêztir e."
        },
        {
          "tr": "HF camı erittiği için en kuvvetli asittir.",
          "en": "HF is the strongest acid because it melts glass.",
          "de": "HF ist die stärkste Säure, da sie Glas schmilzt.",
          "fr": "Le HF est l'acide le plus fort car il fait fondre le verre.",
          "ru": "HF — самая сильная кислота, потому что она плавит стекло.",
          "ar": "HF هو أقوى حمض لأنه يذيب الزجاج.",
          "zh": "HF 是最强的酸，因为它可以熔化玻璃。",
          "ku": "HF asîda herî xurt e ji ber ku camê dihelîne."
        },
        {
          "tr": "Her sıcaklıkta pH + pOH toplamı mutlaka 14'tür.",
          "en": "The sum of pH + pOH at every temperature is definitely 14.",
          "de": "Die Summe aus pH + pOH beträgt bei jeder Temperatur definitiv 14.",
          "fr": "La somme pH + pOH à chaque température est définitivement de 14.",
          "ru": "Сумма pH + pOH при каждой температуре определенно равна 14.",
          "ar": "مجموع الرقم الهيدروجيني + الرقم الهيدروجيني عند كل درجة حرارة هو بالتأكيد 14.",
          "zh": "每个温度下 pH + pOH 的总和肯定是 14。",
          "ku": "Di her germahiyê de hejmara pH + pOH bê guman 14 e."
        },
        {
          "tr": "Bir eşlenik asit-baz çiftinde Ka * Kb = Ksu = 10^-14'tür (25 °C'de).",
          "en": "In a conjugate acid-base pair, Ka * Kb = Ksu = 10^-14 (at 25 °C).",
          "de": "In einem konjugierten Säure-Base-Paar beträgt Ka * Kb = Ksu = 10^-14 (bei 25 °C).",
          "fr": "Dans une paire acide-base conjuguée, Ka * Kb = Ksu = 10^-14 (à 25 °C).",
          "ru": "В сопряженной кислотно-основной паре Ка * Kb = Ksu = 10^-14 (при 25 °С).",
          "ar": "في زوج مترافق من حمض وقاعدة، Ka * Kb = Ksu = 10^-14 (عند 25 درجة مئوية).",
          "zh": "在共轭酸碱对中，Ka * Kb = Ksu = 10^-14（25 °C 时）。",
          "ku": "Di cotek asîd-bazê ya hevgirtî de, Ka * Kb = Ksu = 10^-14 (li 25 °C)."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Bir eşlenik asit-baz çiftinde Ka * Kb = Ksu = 10^-14'tür (25 °C'de).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In a conjugate acid-base pair, Ka * Kb = Ksu = 10^-14 (at 25 °C).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"In einem konjugierten Säure-Base-Paar beträgt Ka * Kb = Ksu = 10^-14 (bei 25 °C).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans une paire acide-base conjuguée, Ka * Kb = Ksu = 10^-14 (à 25 °C).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В сопряженной кислотно-основной паре Ка * Kb = Ksu = 10^-14 (при 25 °С).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في زوج مترافق من حمض وقاعدة، Ka * Kb = Ksu = 10^-14 (عند 25 درجة مئوية).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在共轭酸碱对中，Ka * Kb = Ksu = 10^-14（25 °C 时）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di cotek asîd-bazê ya hevgirtî de, Ka * Kb = Ksu = 10^-14 (li 25 °C).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u19-twin06",
      "stem": {
        "tr": "Aşağıda Asit-Baz Dengesi ve Titrasyon ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Acid-Base Equilibrium & Titration, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Säure-Base-Gleichgewicht & Titration: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Équilibre Acide-Base & Titrage, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Кислотно-основное равновесие и титрование», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الاتزان الحمضي القاعدي والمعايرة\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“酸碱平衡与滴定”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Hevsengiya Asîd-Baz û Tîtrakirin\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Tampon çözelti, zayıf asit ile onun konjuge tuzunu (veya zayıf baz ile konjuge tuzunu) içeren ve pH değişimine direnen sistemdir.",
          "en": "Buffer solution is a system that contains a weak acid and its conjugate salt (or a weak base and its conjugate salt) and resists pH change.",
          "de": "Pufferlösung ist ein System, das eine schwache Säure und ihr Konjugatsalz (oder eine schwache Base und ihr Konjugatsalz) enthält und pH-Änderungen widersteht.",
          "fr": "La solution tampon est un système qui contient un acide faible et son sel conjugué (ou une base faible et son sel conjugué) et résiste aux changements de pH.",
          "ru": "Буферный раствор — это система, которая содержит слабую кислоту и сопряженную с ней соль (или слабое основание и сопряженную с ней соль) и устойчива к изменению pH.",
          "ar": "المحلول المنظم هو نظام يحتوي على حمض ضعيف وملحه المرافق (أو قاعدة ضعيفة وملحه المرافق) ويقاوم تغير الرقم الهيدروجيني.",
          "zh": "缓冲溶液是含有弱酸及其共轭盐（或弱碱及其共轭盐）并抵抗pH变化的体系。",
          "ku": "Çareseriya tampon pergalek e ku asîdek qels û xwêya wê ya hevgirtî (an jî bingehek qels û xwêya wê ya hevgirtî) dihewîne û li hember guherîna pH-ê radiweste."
        },
        {
          "tr": "Kuvvetli asit kuvvetli baz titrasyonunda eşdeğerlik noktasında pH 0'dır.",
          "en": "In a strong acid strong base titration, pH is 0 at the equivalence point.",
          "de": "Bei einer Titration mit starker Säure und starker Base beträgt der pH-Wert am Äquivalenzpunkt 0.",
          "fr": "Dans un titrage acide fort base forte, le pH est de 0 au point d’équivalence.",
          "ru": "При титровании сильной кислотой и сильным основанием pH равен 0 в точке эквивалентности.",
          "ar": "في معايرة حمض قوي بقاعدة قوية، يكون الرقم الهيدروجيني 0 عند نقطة التكافؤ.",
          "zh": "在强酸强碱滴定中，等当点的pH值为0。",
          "ku": "Di titrasyonek bingehîn a bihêz a asîdê de, pH di xala hevkêşiyê de 0 ye."
        },
        {
          "tr": "Zayıf asit seyreltildiğinde H+ derişimi artar.",
          "en": "When a weak acid is diluted, the H+ concentration increases.",
          "de": "Wenn eine schwache Säure verdünnt wird, steigt die H+-Konzentration.",
          "fr": "Lorsqu’un acide faible est dilué, la concentration en H+ augmente.",
          "ru": "При разбавлении слабой кислоты концентрация H+ увеличивается.",
          "ar": "عند تخفيف حمض ضعيف يزداد تركيز H+.",
          "zh": "当弱酸被稀释时，H+浓度增加。",
          "ku": "Dema ku asîdek qels tê rijandin, tansiyona H+ zêde dibe."
        },
        {
          "tr": "NH3 kuvvetli bir bazdır.",
          "en": "NH3 is a strong base.",
          "de": "NH3 ist eine starke Base.",
          "fr": "NH3 est une base forte.",
          "ru": "NH3 – сильная база.",
          "ar": "NH3 قاعدة قوية .",
          "zh": "NH3 是强碱。",
          "ku": "NH3 bingehek xurt e."
        },
        {
          "tr": "Zayıf asitler suda hiç iyonlaşmaz.",
          "en": "Weak acids do not ionize at all in water.",
          "de": "Schwache Säuren ionisieren in Wasser überhaupt nicht.",
          "fr": "Les acides faibles ne s'ionisent pas du tout dans l'eau.",
          "ru": "Слабые кислоты вообще не ионизируются в воде.",
          "ar": "الأحماض الضعيفة لا تتأين على الإطلاق في الماء.",
          "zh": "弱酸在水中根本不电离。",
          "ku": "Asîdên qels di avê de qet îyonîze nabin."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Tampon çözelti, zayıf asit ile onun konjuge tuzunu (veya zayıf baz ile konjuge tuzunu) içeren ve pH değişimine direnen sistemdir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Buffer solution is a system that contains a weak acid and its conjugate salt (or a weak base and its conjugate salt) and resists pH change.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Pufferlösung ist ein System, das eine schwache Säure und ihr Konjugatsalz (oder eine schwache Base und ihr Konjugatsalz) enthält und pH-Änderungen widersteht.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La solution tampon est un système qui contient un acide faible et son sel conjugué (ou une base faible et son sel conjugué) et résiste aux changements de pH.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Буферный раствор — это система, которая содержит слабую кислоту и сопряженную с ней соль (или слабое основание и сопряженную с ней соль) и устойчива к изменению pH.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المحلول المنظم هو نظام يحتوي على حمض ضعيف وملحه المرافق (أو قاعدة ضعيفة وملحه المرافق) ويقاوم تغير الرقم الهيدروجيني.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“缓冲溶液是含有弱酸及其共轭盐（或弱碱及其共轭盐）并抵抗pH变化的体系。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Çareseriya tampon pergalek e ku asîdek qels û xwêya wê ya hevgirtî (an jî bingehek qels û xwêya wê ya hevgirtî) dihewîne û li hember guherîna pH-ê radiweste.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u19-twin07",
      "stem": {
        "tr": "Asit-Baz Dengesi ve Titrasyon konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Acid-Base Equilibrium & Titration, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Säure-Base-Gleichgewicht & Titration: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Équilibre Acide-Base & Titrage, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Кислотно-основное равновесие и титрование», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الاتزان الحمضي القاعدي والمعايرة\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“酸碱平衡与滴定”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Hevsengiya Asîd-Baz û Tîtrakirin\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Nötr tuzların iyonları suda şiddetle hidroliz olur.",
          "en": "Ions of neutral salts hydrolyze violently in water.",
          "de": "Ionen neutraler Salze hydrolysieren in Wasser heftig.",
          "fr": "Les ions de sels neutres s'hydrolysent violemment dans l'eau.",
          "ru": "Ионы нейтральных солей бурно гидролизуются в воде.",
          "ar": "تتحلل أيونات الأملاح المحايدة بعنف في الماء.",
          "zh": "中性盐离子在水中剧烈水解。",
          "ku": "Îyonên xwêyên bêalî di avê de bi tundî hîdrolîz dibin."
        },
        {
          "tr": "İnsan kanı (pH ≈ 7.4) H2CO3 / HCO3- karbonik asit-bikarbonat tampon sistemiyle dengelenir.",
          "en": "Human blood (pH ≈ 7.4) is balanced by the H2CO3 / HCO3- carbonic acid-bicarbonate buffer system.",
          "de": "Menschliches Blut (pH ≈ 7,4) wird durch das H2CO3/HCO3-Kohlensäure-Bikarbonat-Puffersystem ausgeglichen.",
          "fr": "Le sang humain (pH ≈ 7,4) est équilibré par le système tampon H2CO3 / HCO3-acide carbonique-bicarbonate.",
          "ru": "Кровь человека (pH ≈ 7,4) сбалансирована буферной системой H2CO3/HCO3-карбоновая кислота-бикарбонат.",
          "ar": "يتم موازنة دم الإنسان (الرقم الهيدروجيني ≈ 7.4) بواسطة النظام العازل لحمض الكربونيك وبيكربونات H2CO3 / HCO3.",
          "zh": "人体血液（pH ≈ 7.4）通过 H2CO3 / HCO3-碳酸-碳酸氢盐缓冲系统进行平衡。",
          "ku": "Xwîna mirovan (pH ≈ 7,4) ji hêla pergala tampon H2CO3 / HCO3- asîda karbonîk-bîkarbonat ve tê hevseng kirin."
        },
        {
          "tr": "Titrasyonda tesir değerliği dikkate alınmaz.",
          "en": "Potency is not taken into account in titration.",
          "de": "Die Potenz wird bei der Titration nicht berücksichtigt.",
          "fr": "La puissance n'est pas prise en compte lors du titrage.",
          "ru": "Потенциал не учитывается при титровании.",
          "ar": "لا تؤخذ الفاعلية بعين الاعتبار في المعايرة.",
          "zh": "滴定时不考虑效价。",
          "ku": "Potansiyel di titrasyonê de nayê hesibandin."
        },
        {
          "tr": "İndikatörler titrasyon tepkimesini hızlandıran katalizörlerdir.",
          "en": "Indicators are catalysts that accelerate the titration reaction.",
          "de": "Indikatoren sind Katalysatoren, die die Titrationsreaktion beschleunigen.",
          "fr": "Les indicateurs sont des catalyseurs qui accélèrent la réaction de titrage.",
          "ru": "Индикаторы – это катализаторы, ускоряющие реакцию титрования.",
          "ar": "المؤشرات عبارة عن محفزات تعمل على تسريع تفاعل المعايرة.",
          "zh": "指示剂是加速滴定反应的催化剂。",
          "ku": "Nîşan katalîzator in ku reaksiyona titrasyonê lez dikin."
        },
        {
          "tr": "Zayıf asidin H+ derişimi başlangıç derişimine eşittir.",
          "en": "The H+ concentration of the weak acid is equal to the initial concentration.",
          "de": "Die H+-Konzentration der schwachen Säure entspricht der Anfangskonzentration.",
          "fr": "La concentration H+ de l’acide faible est égale à la concentration initiale.",
          "ru": "Концентрация H+ слабой кислоты равна исходной концентрации.",
          "ar": "تركيز H+ للحمض الضعيف يساوي التركيز الأولي.",
          "zh": "弱酸的H+浓度等于初始浓度。",
          "ku": "Pîvana H+ ya asîda qels bi kêşeya destpêkê re ye."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"İnsan kanı (pH ≈ 7.4) H2CO3 / HCO3- karbonik asit-bikarbonat tampon sistemiyle dengelenir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Human blood (pH ≈ 7.4) is balanced by the H2CO3 / HCO3- carbonic acid-bicarbonate buffer system.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Menschliches Blut (pH ≈ 7,4) wird durch das H2CO3/HCO3-Kohlensäure-Bikarbonat-Puffersystem ausgeglichen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le sang humain (pH ≈ 7,4) est équilibré par le système tampon H2CO3 / HCO3-acide carbonique-bicarbonate.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Кровь человека (pH ≈ 7,4) сбалансирована буферной системой H2CO3/HCO3-карбоновая кислота-бикарбонат.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يتم موازنة دم الإنسان (الرقم الهيدروجيني ≈ 7.4) بواسطة النظام العازل لحمض الكربونيك وبيكربونات H2CO3 / HCO3.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“人体血液（pH ≈ 7.4）通过 H2CO3 / HCO3-碳酸-碳酸氢盐缓冲系统进行平衡。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Xwîna mirovan (pH ≈ 7,4) ji hêla pergala tampon H2CO3 / HCO3- asîda karbonîk-bîkarbonat ve tê hevseng kirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u19-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Asit-Baz Dengesi ve Titrasyon ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Acid-Base Equilibrium & Titration, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Säure-Base-Gleichgewicht & Titration: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Équilibre Acide-Base & Titrage, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Кислотно-основное равновесие и титрование», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الاتزان الحمضي القاعدي والمعايرة\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“酸碱平衡与滴定”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Hevsengiya Asîd-Baz û Tîtrakirin\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Ka'sı küçük olan asit daha kuvvetlidir.",
          "en": "The acid with smaller muscles is stronger.",
          "de": "Bei kleineren Muskeln ist die Säure stärker.",
          "fr": "L'acide avec des muscles plus petits est plus fort.",
          "ru": "Кислота с меньшими мышцами сильнее.",
          "ar": "الحمض ذو العضلات الأصغر يكون أقوى.",
          "zh": "肌肉越小，酸越强。",
          "ku": "Asîda bi masûlkeyên piçûktir bihêztir e."
        },
        {
          "tr": "HF camı erittiği için en kuvvetli asittir.",
          "en": "HF is the strongest acid because it melts glass.",
          "de": "HF ist die stärkste Säure, da sie Glas schmilzt.",
          "fr": "Le HF est l'acide le plus fort car il fait fondre le verre.",
          "ru": "HF — самая сильная кислота, потому что она плавит стекло.",
          "ar": "HF هو أقوى حمض لأنه يذيب الزجاج.",
          "zh": "HF 是最强的酸，因为它可以熔化玻璃。",
          "ku": "HF asîda herî xurt e ji ber ku camê dihelîne."
        },
        {
          "tr": "Titrasyonda eşdeğerlik noktası (dönüm noktası): Asitten gelen H+ mol sayısının bazdan gelen OH- mol sayısına eşit olduğu andır (nH+ = nOH-).",
          "en": "Equivalence point (turning point) in titration: It is the moment when the number of moles of H+ coming from the acid is equal to the number of moles of OH- coming from the base (nH+ = nOH-).",
          "de": "Äquivalenzpunkt (Wendepunkt) bei der Titration: Dies ist der Moment, in dem die Anzahl der Mol H+ aus der Säure gleich der Anzahl Mol OH- aus der Base ist (nH+ = nOH-).",
          "fr": "Point d'équivalence (tournant) en titrage : C'est le moment où le nombre de moles de H+ provenant de l'acide est égal au nombre de moles de OH- provenant de la base (nH+ = nOH-).",
          "ru": "Точка эквивалентности (точка поворота) при титровании: Это момент, когда количество молей H+, поступающих из кислоты, равно числу молей OH-, поступающих из основания (nH+ = nOH-).",
          "ar": "نقطة التكافؤ (نقطة التحول) في المعايرة: هي اللحظة التي يكون فيها عدد مولات H+ القادمة من الحمض مساوية لعدد مولات OH- القادمة من القاعدة (nH+ = nOH-).",
          "zh": "滴定中的当量点（转折点）：是酸中H+的摩尔数等于碱中OH-的摩尔数的时刻（nH+ = nOH-）。",
          "ku": "Di titrasyonê de xala hevdengiyê (xala zivirînê): Dema ku hejmara molên H+ yên ji asîdê tên bi hejmara molên OH- yên ji bazê tên (nH+ = nOH-) ye."
        },
        {
          "tr": "Her sıcaklıkta pH + pOH toplamı mutlaka 14'tür.",
          "en": "The sum of pH + pOH at every temperature is definitely 14.",
          "de": "Die Summe aus pH + pOH beträgt bei jeder Temperatur definitiv 14.",
          "fr": "La somme pH + pOH à chaque température est définitivement de 14.",
          "ru": "Сумма pH + pOH при каждой температуре определенно равна 14.",
          "ar": "مجموع الرقم الهيدروجيني + الرقم الهيدروجيني عند كل درجة حرارة هو بالتأكيد 14.",
          "zh": "每个温度下 pH + pOH 的总和肯定是 14。",
          "ku": "Di her germahiyê de hejmara pH + pOH bê guman 14 e."
        },
        {
          "tr": "Eşlenik asit-baz çiftleri arasında 2 elektron farkı bulunur.",
          "en": "There is a difference of 2 electrons between conjugated acid-base pairs.",
          "de": "Zwischen konjugierten Säure-Base-Paaren besteht ein Unterschied von 2 Elektronen.",
          "fr": "Il existe une différence de 2 électrons entre les paires acide-base conjuguées.",
          "ru": "Между сопряженными кислотно-основными парами существует разница в 2 электрона.",
          "ar": "يوجد فرق قدره 2 إلكترون بين أزواج الحمض والقاعدة المترافقة.",
          "zh": "共轭酸碱对之间存在2个电子之差。",
          "ku": "Di navbera cotên asîd-bazê yên hevgirtî de 2 elektronan ferq heye."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Titrasyonda eşdeğerlik noktası (dönüm noktası): Asitten gelen H+ mol sayısının bazdan gelen OH- mol sayısına eşit olduğu andır (nH+ = nOH-).\" ifadesidir. Zayıf asit - kuvvetli baz titrasyonunda eşdeğerlik noktasında pH > 7'dir!",
        "en": "The correct statement is: \"Equivalence point (turning point) in titration: It is the moment when the number of moles of H+ coming from the acid is equal to the number of moles of OH- coming from the base (nH+ = nOH-).\". In weak acid - strong base titration, the pH at the equivalence point is > 7!",
        "de": "Die zutreffende Aussage lautet: \"Äquivalenzpunkt (Wendepunkt) bei der Titration: Dies ist der Moment, in dem die Anzahl der Mol H+ aus der Säure gleich der Anzahl Mol OH- aus der Base ist (nH+ = nOH-).\". Bei der Titration schwache Säure – starke Base beträgt der pH-Wert am Äquivalenzpunkt > 7!",
        "fr": "L'affirmation exacte est: \"Point d'équivalence (tournant) en titrage : C'est le moment où le nombre de moles de H+ provenant de l'acide est égal au nombre de moles de OH- provenant de la base (nH+ = nOH-).\". Dans le titrage acide faible - base forte, le pH au point d'équivalence est > 7 !",
        "ru": "Правильное утверждение: «Точка эквивалентности (точка поворота) при титровании: Это момент, когда количество молей H+, поступающих из кислоты, равно числу молей OH-, поступающих из основания (nH+ = nOH-).». При титровании слабая кислота - сильное основание pH в точке эквивалентности > 7!",
        "ar": "العبارة الصحيحة هي: \"نقطة التكافؤ (نقطة التحول) في المعايرة: هي اللحظة التي يكون فيها عدد مولات H+ القادمة من الحمض مساوية لعدد مولات OH- القادمة من القاعدة (nH+ = nOH-).\". في معايرة الحمض الضعيف والقاعدة القوية، يكون الرقم الهيدروجيني عند نقطة التكافؤ أكبر من 7!",
        "zh": "正确表述为：“滴定中的当量点（转折点）：是酸中H+的摩尔数等于碱中OH-的摩尔数的时刻（nH+ = nOH-）。”。弱酸-强碱滴定时，等当点的pH>7！",
        "ku": "Gotina rast ev e: \"Di titrasyonê de xala hevdengiyê (xala zivirînê): Dema ku hejmara molên H+ yên ji asîdê tên bi hejmara molên OH- yên ji bazê tên (nH+ = nOH-) ye.\". Di tîtrasyona asîda qels - bazê xurt de, pH li xala hevsengiyê > 7 e!"
      }
    },
    {
      "id": "u19-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Asit-Baz Dengesi ve Titrasyon konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Acid-Base Equilibrium & Titration, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Säure-Base-Gleichgewicht & Titration die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Équilibre Acide-Base & Titrage, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Кислотно-основное равновесие и титрование», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الاتزان الحمضي القاعدي والمعايرة\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“酸碱平衡与滴定”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Hevsengiya Asîd-Baz û Tîtrakirin\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Zayıf asit seyreltildiğinde H+ derişimi artar.",
          "en": "When a weak acid is diluted, the H+ concentration increases.",
          "de": "Wenn eine schwache Säure verdünnt wird, steigt die H+-Konzentration.",
          "fr": "Lorsqu’un acide faible est dilué, la concentration en H+ augmente.",
          "ru": "При разбавлении слабой кислоты концентрация H+ увеличивается.",
          "ar": "عند تخفيف حمض ضعيف يزداد تركيز H+.",
          "zh": "当弱酸被稀释时，H+浓度增加。",
          "ku": "Dema ku asîdek qels tê rijandin, tansiyona H+ zêde dibe."
        },
        {
          "tr": "NH3 kuvvetli bir bazdır.",
          "en": "NH3 is a strong base.",
          "de": "NH3 ist eine starke Base.",
          "fr": "NH3 est une base forte.",
          "ru": "NH3 – сильная база.",
          "ar": "NH3 قاعدة قوية .",
          "zh": "NH3 是强碱。",
          "ku": "NH3 bingehek xurt e."
        },
        {
          "tr": "Zayıf asitler suda hiç iyonlaşmaz.",
          "en": "Weak acids do not ionize at all in water.",
          "de": "Schwache Säuren ionisieren in Wasser überhaupt nicht.",
          "fr": "Les acides faibles ne s'ionisent pas du tout dans l'eau.",
          "ru": "Слабые кислоты вообще не ионизируются в воде.",
          "ar": "الأحماض الضعيفة لا تتأين على الإطلاق في الماء.",
          "zh": "弱酸在水中根本不电离。",
          "ku": "Asîdên qels di avê de qet îyonîze nabin."
        },
        {
          "tr": "Kuvvetli asit - kuvvetli baz titrasyonunda eşdeğerlik noktasında pH tam 7.00'dir.",
          "en": "In the strong acid - strong base titration, the pH at the equivalence point is exactly 7.00.",
          "de": "Bei der Titration starke Säure – starke Base beträgt der pH-Wert am Äquivalenzpunkt genau 7,00.",
          "fr": "Dans le titrage acide fort - base forte, le pH au point d’équivalence est exactement de 7,00.",
          "ru": "При титровании сильной кислотой и сильным основанием pH в точке эквивалентности составляет ровно 7,00.",
          "ar": "في معايرة حمض قوي - قاعدة قوية، يكون الرقم الهيدروجيني عند نقطة التكافؤ 7.00 بالضبط.",
          "zh": "在强酸-强碱滴定中，等当点的pH值恰好为7.00。",
          "ku": "Di tîtrasyona asîd-bazek xurt de, pH li xala hevsengiyê tam 7.00 e."
        },
        {
          "tr": "Ka değeri büyük olan asidin eşlenik bazının Kb değeri de çok büyüktür.",
          "en": "The Kb value of the conjugate base of the acid with a high Ka value is also very high.",
          "de": "Der Kb-Wert der konjugierten Base der Säure mit einem hohen Ka-Wert ist ebenfalls sehr hoch.",
          "fr": "La valeur Kb de la base conjuguée de l'acide avec une valeur Ka élevée est également très élevée.",
          "ru": "Значение Kb сопряженного основания кислоты с высоким значением Ka также очень велико.",
          "ar": "كما أن قيمة Kb للقاعدة المترافقة للحمض ذات قيمة Ka العالية مرتفعة جدًا أيضًا.",
          "zh": "Ka值高的酸的共轭碱的Kb值也很高。",
          "ku": "Nirxa Kb ya bingeha hevgirtî ya asîda bi nirxa Ka ya bilind jî pir zêde ye."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Kuvvetli asit - kuvvetli baz titrasyonunda eşdeğerlik noktasında pH tam 7.00'dir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In the strong acid - strong base titration, the pH at the equivalence point is exactly 7.00.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei der Titration starke Säure – starke Base beträgt der pH-Wert am Äquivalenzpunkt genau 7,00.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans le titrage acide fort - base forte, le pH au point d’équivalence est exactement de 7,00.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При титровании сильной кислотой и сильным основанием pH в точке эквивалентности составляет ровно 7,00.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في معايرة حمض قوي - قاعدة قوية، يكون الرقم الهيدروجيني عند نقطة التكافؤ 7.00 بالضبط.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在强酸-强碱滴定中，等当点的pH值恰好为7.00。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di tîtrasyona asîd-bazek xurt de, pH li xala hevsengiyê tam 7.00 e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u19-twin10",
      "stem": {
        "tr": "Kimya dersinde Asit-Baz Dengesi ve Titrasyon ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Acid-Base Equilibrium & Titration, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Säure-Base-Gleichgewicht & Titration: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Équilibre Acide-Base & Titrage, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Кислотно-основное равновесие и титрование», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الاتزان الحمضي القاعدي والمعايرة\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“酸碱平衡与滴定”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Hevsengiya Asîd-Baz û Tîtrakirin\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Titrasyonda tesir değerliği dikkate alınmaz.",
          "en": "Potency is not taken into account in titration.",
          "de": "Die Potenz wird bei der Titration nicht berücksichtigt.",
          "fr": "La puissance n'est pas prise en compte lors du titrage.",
          "ru": "Потенциал не учитывается при титровании.",
          "ar": "لا تؤخذ الفاعلية بعين الاعتبار في المعايرة.",
          "zh": "滴定时不考虑效价。",
          "ku": "Potansiyel di titrasyonê de nayê hesibandin."
        },
        {
          "tr": "İndikatörler titrasyon tepkimesini hızlandıran katalizörlerdir.",
          "en": "Indicators are catalysts that accelerate the titration reaction.",
          "de": "Indikatoren sind Katalysatoren, die die Titrationsreaktion beschleunigen.",
          "fr": "Les indicateurs sont des catalyseurs qui accélèrent la réaction de titrage.",
          "ru": "Индикаторы – это катализаторы, ускоряющие реакцию титрования.",
          "ar": "المؤشرات عبارة عن محفزات تعمل على تسريع تفاعل المعايرة.",
          "zh": "指示剂是加速滴定反应的催化剂。",
          "ku": "Nîşan katalîzator in ku reaksiyona titrasyonê lez dikin."
        },
        {
          "tr": "Zayıf asidin H+ derişimi başlangıç derişimine eşittir.",
          "en": "The H+ concentration of the weak acid is equal to the initial concentration.",
          "de": "Die H+-Konzentration der schwachen Säure entspricht der Anfangskonzentration.",
          "fr": "La concentration H+ de l’acide faible est égale à la concentration initiale.",
          "ru": "Концентрация H+ слабой кислоты равна исходной концентрации.",
          "ar": "تركيز H+ للحمض الضعيف يساوي التركيز الأولي.",
          "zh": "弱酸的H+浓度等于初始浓度。",
          "ku": "Pîvana H+ ya asîda qels bi kêşeya destpêkê re ye."
        },
        {
          "tr": "Tampon çözelti kuvvetli asit ile kuvvetli baz karışımından oluşur.",
          "en": "Buffer solution consists of a mixture of strong acid and strong base.",
          "de": "Pufferlösung besteht aus einer Mischung aus starker Säure und starker Base.",
          "fr": "La solution tampon est constituée d’un mélange d’acide fort et de base forte.",
          "ru": "Буферный раствор состоит из смеси сильной кислоты и сильного основания.",
          "ar": "يتكون المحلول المنظم من خليط من حمض قوي وقاعدة قوية.",
          "zh": "缓冲溶液由强酸和强碱的混合物组成。",
          "ku": "Çareseriya tampon ji tevliheviya asîda xurt û bazê xurt pêk tê."
        },
        {
          "tr": "Tuz hidrolizi: Zayıf asitten gelen anyon veya zayıf bazdan gelen katyonun suyla tepkimeye girmesidir.",
          "en": "Salt hydrolysis: It is the reaction of the anion from a weak acid or the cation from a weak base with water.",
          "de": "Salzhydrolyse: Dabei handelt es sich um die Reaktion des Anions einer schwachen Säure oder des Kations einer schwachen Base mit Wasser.",
          "fr": "Hydrolyse du sel : C'est la réaction de l'anion d'un acide faible ou du cation d'une base faible avec l'eau.",
          "ru": "Солевой гидролиз: это реакция аниона слабой кислоты или катиона слабого основания с водой.",
          "ar": "التحلل المائي للملح: هو تفاعل الأنيون من حمض ضعيف أو الكاتيون من قاعدة ضعيفة مع الماء.",
          "zh": "盐水解：弱酸中的阴离子或弱碱中的阳离子与水的反应。",
          "ku": "Hîdrolîza xwê: Reaksiyona anyona ji asîdeke qels an jî kationa ji bingeheke qels bi avê re ye."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Tuz hidrolizi: Zayıf asitten gelen anyon veya zayıf bazdan gelen katyonun suyla tepkimeye girmesidir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Salt hydrolysis: It is the reaction of the anion from a weak acid or the cation from a weak base with water.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Salzhydrolyse: Dabei handelt es sich um die Reaktion des Anions einer schwachen Säure oder des Kations einer schwachen Base mit Wasser.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Hydrolyse du sel : C'est la réaction de l'anion d'un acide faible ou du cation d'une base faible avec l'eau.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Солевой гидролиз: это реакция аниона слабой кислоты или катиона слабого основания с водой.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"التحلل المائي للملح: هو تفاعل الأنيون من حمض ضعيف أو الكاتيون من قاعدة ضعيفة مع الماء.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“盐水解：弱酸中的阴离子或弱碱中的阳离子与水的反应。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hîdrolîza xwê: Reaksiyona anyona ji asîdeke qels an jî kationa ji bingeheke qels bi avê re ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u19-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Asit-Baz Dengesi ve Titrasyon konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Acid-Base Equilibrium & Titration?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Säure-Base-Gleichgewicht & Titration zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Équilibre Acide-Base & Titrage ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Кислотно-основное равновесие и титрование»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الاتزان الحمضي القاعدي والمعايرة\"؟",
        "zh": "根据“酸碱平衡与滴定”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Hevsengiya Asîd-Baz û Tîtrakirin\" de rast e?"
      },
      "options": [
        {
          "tr": "Asitlik sabiti Ka büyüdükçe asidin kuvveti ve iyonlaşma yüzdesi artar.",
          "en": "As the acidity constant Ka increases, the strength of the acid and the percentage of ionization increase.",
          "de": "Mit zunehmender Säurekonstante Ka nehmen die Stärke der Säure und der Prozentsatz der Ionisierung zu.",
          "fr": "À mesure que la constante d'acidité Ka augmente, la force de l'acide et le pourcentage d'ionisation augmentent.",
          "ru": "С увеличением константы кислотности Ка увеличивается сила кислоты и процент ионизации.",
          "ar": "ومع زيادة ثابت الحموضة Ka، تزداد قوة الحمض ونسبة التأين.",
          "zh": "随着酸度常数 Ka 的增加，酸的强度和电离百分比增加。",
          "ku": "Her ku tîrêjiya asîdê ya Ka zêde dibe, hêza asîdê û rêjeya îyonîzasyonê zêde dibe."
        },
        {
          "tr": "HF camı erittiği için en kuvvetli asittir.",
          "en": "HF is the strongest acid because it melts glass.",
          "de": "HF ist die stärkste Säure, da sie Glas schmilzt.",
          "fr": "Le HF est l'acide le plus fort car il fait fondre le verre.",
          "ru": "HF — самая сильная кислота, потому что она плавит стекло.",
          "ar": "HF هو أقوى حمض لأنه يذيب الزجاج.",
          "zh": "HF 是最强的酸，因为它可以熔化玻璃。",
          "ku": "HF asîda herî xurt e ji ber ku camê dihelîne."
        },
        {
          "tr": "Her sıcaklıkta pH + pOH toplamı mutlaka 14'tür.",
          "en": "The sum of pH + pOH at every temperature is definitely 14.",
          "de": "Die Summe aus pH + pOH beträgt bei jeder Temperatur definitiv 14.",
          "fr": "La somme pH + pOH à chaque température est définitivement de 14.",
          "ru": "Сумма pH + pOH при каждой температуре определенно равна 14.",
          "ar": "مجموع الرقم الهيدروجيني + الرقم الهيدروجيني عند كل درجة حرارة هو بالتأكيد 14.",
          "zh": "每个温度下 pH + pOH 的总和肯定是 14。",
          "ku": "Di her germahiyê de hejmara pH + pOH bê guman 14 e."
        },
        {
          "tr": "Eşlenik asit-baz çiftleri arasında 2 elektron farkı bulunur.",
          "en": "There is a difference of 2 electrons between conjugated acid-base pairs.",
          "de": "Zwischen konjugierten Säure-Base-Paaren besteht ein Unterschied von 2 Elektronen.",
          "fr": "Il existe une différence de 2 électrons entre les paires acide-base conjuguées.",
          "ru": "Между сопряженными кислотно-основными парами существует разница в 2 электрона.",
          "ar": "يوجد فرق قدره 2 إلكترون بين أزواج الحمض والقاعدة المترافقة.",
          "zh": "共轭酸碱对之间存在2个电子之差。",
          "ku": "Di navbera cotên asîd-bazê yên hevgirtî de 2 elektronan ferq heye."
        },
        {
          "tr": "Kan tampon sistemi hidroklorik asit ile dengelenir.",
          "en": "The blood buffer system is balanced by hydrochloric acid.",
          "de": "Das Blutpuffersystem wird durch Salzsäure ausgeglichen.",
          "fr": "Le système tampon sanguin est équilibré par l’acide chlorhydrique.",
          "ru": "Буферная система крови сбалансирована соляной кислотой.",
          "ar": "تتم موازنة النظام العازل للدم بواسطة حمض الهيدروكلوريك.",
          "zh": "血液缓冲系统由盐酸平衡。",
          "ku": "Pergala tampon a xwînê bi asîda hîdrochloric hevseng e."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Asitlik sabiti Ka büyüdükçe asidin kuvveti ve iyonlaşma yüzdesi artar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"As the acidity constant Ka increases, the strength of the acid and the percentage of ionization increase.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Mit zunehmender Säurekonstante Ka nehmen die Stärke der Säure und der Prozentsatz der Ionisierung zu.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"À mesure que la constante d'acidité Ka augmente, la force de l'acide et le pourcentage d'ionisation augmentent.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «С увеличением константы кислотности Ка увеличивается сила кислоты и процент ионизации.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"ومع زيادة ثابت الحموضة Ka، تزداد قوة الحمض ونسبة التأين.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“随着酸度常数 Ka 的增加，酸的强度和电离百分比增加。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Her ku tîrêjiya asîdê ya Ka zêde dibe, hêza asîdê û rêjeya îyonîzasyonê zêde dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u19-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Asit-Baz Dengesi ve Titrasyon sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Acid-Base Equilibrium & Titration, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Säure-Base-Gleichgewicht & Titration: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Équilibre Acide-Base & Titrage, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Кислотно-основное равновесие и титрование», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الاتزان الحمضي القاعدي والمعايرة\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“酸碱平衡与滴定”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Hevsengiya Asîd-Baz û Tîtrakirin\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "NH3 kuvvetli bir bazdır.",
          "en": "NH3 is a strong base.",
          "de": "NH3 ist eine starke Base.",
          "fr": "NH3 est une base forte.",
          "ru": "NH3 – сильная база.",
          "ar": "NH3 قاعدة قوية .",
          "zh": "NH3 是强碱。",
          "ku": "NH3 bingehek xurt e."
        },
        {
          "tr": "Zayıf bir asit çözeltisine saf su eklenip seyreltilirse iyonlaşma yüzdesi artar; ancak H+ derişimi azalır (pH artar).",
          "en": "If pure water is added to a weak acid solution and diluted, the percentage of ionization increases; but the H+ concentration decreases (pH increases).",
          "de": "Wenn einer schwach sauren Lösung reines Wasser zugesetzt und verdünnt wird, erhöht sich der Prozentsatz der Ionisierung; aber die H+-Konzentration nimmt ab (pH-Wert steigt).",
          "fr": "Si de l'eau pure est ajoutée à une solution acide faible et diluée, le pourcentage d'ionisation augmente ; mais la concentration en H+ diminue (le pH augmente).",
          "ru": "Если к раствору слабой кислоты добавить чистую воду и разбавить ее, процент ионизации возрастает; но концентрация H+ уменьшается (рН увеличивается).",
          "ar": "إذا أضيف الماء النقي إلى محلول حمضي ضعيف وتم تخفيفه، تزداد نسبة التأين؛ لكن تركيز H+ يتناقص (يزيد الرقم الهيدروجيني).",
          "zh": "如果将纯水加入到弱酸溶液中并稀释，电离的百分比会增加；但 H+ 浓度降低（pH 值升高）。",
          "ku": "Ger ava paqij li çareseriyek asîdê ya qels were zêdekirin û were rijandin, rêjeya îyonîzasyonê zêde dibe; lê giraniya H+ kêm dibe (pH zêde dibe)."
        },
        {
          "tr": "Zayıf asitler suda hiç iyonlaşmaz.",
          "en": "Weak acids do not ionize at all in water.",
          "de": "Schwache Säuren ionisieren in Wasser überhaupt nicht.",
          "fr": "Les acides faibles ne s'ionisent pas du tout dans l'eau.",
          "ru": "Слабые кислоты вообще не ионизируются в воде.",
          "ar": "الأحماض الضعيفة لا تتأين على الإطلاق في الماء.",
          "zh": "弱酸在水中根本不电离。",
          "ku": "Asîdên qels di avê de qet îyonîze nabin."
        },
        {
          "tr": "Ka değeri büyük olan asidin eşlenik bazının Kb değeri de çok büyüktür.",
          "en": "The Kb value of the conjugate base of the acid with a high Ka value is also very high.",
          "de": "Der Kb-Wert der konjugierten Base der Säure mit einem hohen Ka-Wert ist ebenfalls sehr hoch.",
          "fr": "La valeur Kb de la base conjuguée de l'acide avec une valeur Ka élevée est également très élevée.",
          "ru": "Значение Kb сопряженного основания кислоты с высоким значением Ka также очень велико.",
          "ar": "كما أن قيمة Kb للقاعدة المترافقة للحمض ذات قيمة Ka العالية مرتفعة جدًا أيضًا.",
          "zh": "Ka值高的酸的共轭碱的Kb值也很高。",
          "ku": "Nirxa Kb ya bingeha hevgirtî ya asîda bi nirxa Ka ya bilind jî pir zêde ye."
        },
        {
          "tr": "Eşdeğerlik noktasında çözeltinin pH'ı daima 7.00 olmak zorundadır.",
          "en": "At the equivalence point, the pH of the solution must always be 7.00.",
          "de": "Am Äquivalenzpunkt muss der pH-Wert der Lösung immer 7,00 betragen.",
          "fr": "Au point d'équivalence, le pH de la solution doit toujours être de 7,00.",
          "ru": "В точке эквивалентности pH раствора всегда должен быть 7,00.",
          "ar": "عند نقطة التكافؤ، يجب أن يكون الرقم الهيدروجيني للمحلول دائمًا 7.00.",
          "zh": "在当量点，溶液的 pH 值必须始终为 7.00。",
          "ku": "Di xala hevdengiyê de, pH ya çareseriyê divê her gav 7.00 be."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Zayıf bir asit çözeltisine saf su eklenip seyreltilirse iyonlaşma yüzdesi artar; ancak H+ derişimi azalır (pH artar).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If pure water is added to a weak acid solution and diluted, the percentage of ionization increases; but the H+ concentration decreases (pH increases).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn einer schwach sauren Lösung reines Wasser zugesetzt und verdünnt wird, erhöht sich der Prozentsatz der Ionisierung; aber die H+-Konzentration nimmt ab (pH-Wert steigt).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si de l'eau pure est ajoutée à une solution acide faible et diluée, le pourcentage d'ionisation augmente ; mais la concentration en H+ diminue (le pH augmente).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если к раствору слабой кислоты добавить чистую воду и разбавить ее, процент ионизации возрастает; но концентрация H+ уменьшается (рН увеличивается).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا أضيف الماء النقي إلى محلول حمضي ضعيف وتم تخفيفه، تزداد نسبة التأين؛ لكن تركيز H+ يتناقص (يزيد الرقم الهيدروجيني).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果将纯水加入到弱酸溶液中并稀释，电离的百分比会增加；但 H+ 浓度降低（pH 值升高）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger ava paqij li çareseriyek asîdê ya qels were zêdekirin û were rijandin, rêjeya îyonîzasyonê zêde dibe; lê giraniya H+ kêm dibe (pH zêde dibe).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u19-twin13",
      "stem": {
        "tr": "Aşağıda Asit-Baz Dengesi ve Titrasyon ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Acid-Base Equilibrium & Titration, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Säure-Base-Gleichgewicht & Titration: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Équilibre Acide-Base & Titrage, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Кислотно-основное равновесие и титрование», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الاتزان الحمضي القاعدي والمعايرة\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“酸碱平衡与滴定”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Hevsengiya Asîd-Baz û Tîtrakirin\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "İndikatörler titrasyon tepkimesini hızlandıran katalizörlerdir.",
          "en": "Indicators are catalysts that accelerate the titration reaction.",
          "de": "Indikatoren sind Katalysatoren, die die Titrationsreaktion beschleunigen.",
          "fr": "Les indicateurs sont des catalyseurs qui accélèrent la réaction de titrage.",
          "ru": "Индикаторы – это катализаторы, ускоряющие реакцию титрования.",
          "ar": "المؤشرات عبارة عن محفزات تعمل على تسريع تفاعل المعايرة.",
          "zh": "指示剂是加速滴定反应的催化剂。",
          "ku": "Nîşan katalîzator in ku reaksiyona titrasyonê lez dikin."
        },
        {
          "tr": "Zayıf asidin H+ derişimi başlangıç derişimine eşittir.",
          "en": "The H+ concentration of the weak acid is equal to the initial concentration.",
          "de": "Die H+-Konzentration der schwachen Säure entspricht der Anfangskonzentration.",
          "fr": "La concentration H+ de l’acide faible est égale à la concentration initiale.",
          "ru": "Концентрация H+ слабой кислоты равна исходной концентрации.",
          "ar": "تركيز H+ للحمض الضعيف يساوي التركيز الأولي.",
          "zh": "弱酸的H+浓度等于初始浓度。",
          "ku": "Pîvana H+ ya asîda qels bi kêşeya destpêkê re ye."
        },
        {
          "tr": "Eşdeğerlik noktasında formül: Ma * Va * Za = Mb * Vb * Zb'dir (Z: tesir/etki değerliği).",
          "en": "At the point of equivalence, the formula is: Ma * Va * Za = Mb * Vb * Zb (Z: potency).",
          "de": "Am Äquivalenzpunkt lautet die Formel: Ma * Va * Za = Mb * Vb * Zb (Z: Potenz).",
          "fr": "Au point d'équivalence, la formule est : Ma * Va * Za = Mb * Vb * Zb (Z : puissance).",
          "ru": "В точке эквивалентности формула такова: Ma * Va * Za = Mb * Vb * Zb (Z: потенция).",
          "ar": "عند نقطة التكافؤ، تكون الصيغة: Ma * Va * Za = Mb * Vb * Zb (Z: فاعلية).",
          "zh": "在等价点，公式为：Ma * Va * Za = Mb * Vb * Zb（Z：效力）。",
          "ku": "Di xala hevdengiyê de, formula ev e: Ma * Va * Za = Mb * Vb * Zb (Z: hêz)."
        },
        {
          "tr": "Tampon çözelti kuvvetli asit ile kuvvetli baz karışımından oluşur.",
          "en": "Buffer solution consists of a mixture of strong acid and strong base.",
          "de": "Pufferlösung besteht aus einer Mischung aus starker Säure und starker Base.",
          "fr": "La solution tampon est constituée d’un mélange d’acide fort et de base forte.",
          "ru": "Буферный раствор состоит из смеси сильной кислоты и сильного основания.",
          "ar": "يتكون المحلول المنظم من خليط من حمض قوي وقاعدة قوية.",
          "zh": "缓冲溶液由强酸和强碱的混合物组成。",
          "ku": "Çareseriya tampon ji tevliheviya asîda xurt û bazê xurt pêk tê."
        },
        {
          "tr": "Kuvvetli asit kuvvetli baz titrasyonunda eşdeğerlik noktasında pH 0'dır.",
          "en": "In a strong acid strong base titration, pH is 0 at the equivalence point.",
          "de": "Bei einer Titration mit starker Säure und starker Base beträgt der pH-Wert am Äquivalenzpunkt 0.",
          "fr": "Dans un titrage acide fort base forte, le pH est de 0 au point d’équivalence.",
          "ru": "При титровании сильной кислотой и сильным основанием pH равен 0 в точке эквивалентности.",
          "ar": "في معايرة حمض قوي بقاعدة قوية، يكون الرقم الهيدروجيني 0 عند نقطة التكافؤ.",
          "zh": "在强酸强碱滴定中，等当点的pH值为0。",
          "ku": "Di titrasyonek bingehîn a bihêz a asîdê de, pH di xala hevkêşiyê de 0 ye."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Eşdeğerlik noktasında formül: Ma * Va * Za = Mb * Vb * Zb'dir (Z: tesir/etki değerliği).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"At the point of equivalence, the formula is: Ma * Va * Za = Mb * Vb * Zb (Z: potency).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Am Äquivalenzpunkt lautet die Formel: Ma * Va * Za = Mb * Vb * Zb (Z: Potenz).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Au point d'équivalence, la formule est : Ma * Va * Za = Mb * Vb * Zb (Z : puissance).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В точке эквивалентности формула такова: Ma * Va * Za = Mb * Vb * Zb (Z: потенция).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عند نقطة التكافؤ، تكون الصيغة: Ma * Va * Za = Mb * Vb * Zb (Z: فاعلية).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在等价点，公式为：Ma * Va * Za = Mb * Vb * Zb（Z：效力）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di xala hevdengiyê de, formula ev e: Ma * Va * Za = Mb * Vb * Zb (Z: hêz).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u19-twin14",
      "stem": {
        "tr": "Asit-Baz Dengesi ve Titrasyon konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Acid-Base Equilibrium & Titration, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Säure-Base-Gleichgewicht & Titration: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Équilibre Acide-Base & Titrage, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Кислотно-основное равновесие и титрование», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الاتزان الحمضي القاعدي والمعايرة\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“酸碱平衡与滴定”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Hevsengiya Asîd-Baz û Tîtrakirin\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Her sıcaklıkta pH + pOH toplamı mutlaka 14'tür.",
          "en": "The sum of pH + pOH at every temperature is definitely 14.",
          "de": "Die Summe aus pH + pOH beträgt bei jeder Temperatur definitiv 14.",
          "fr": "La somme pH + pOH à chaque température est définitivement de 14.",
          "ru": "Сумма pH + pOH при каждой температуре определенно равна 14.",
          "ar": "مجموع الرقم الهيدروجيني + الرقم الهيدروجيني عند كل درجة حرارة هو بالتأكيد 14.",
          "zh": "每个温度下 pH + pOH 的总和肯定是 14。",
          "ku": "Di her germahiyê de hejmara pH + pOH bê guman 14 e."
        },
        {
          "tr": "Eşlenik asit-baz çiftleri arasında 2 elektron farkı bulunur.",
          "en": "There is a difference of 2 electrons between conjugated acid-base pairs.",
          "de": "Zwischen konjugierten Säure-Base-Paaren besteht ein Unterschied von 2 Elektronen.",
          "fr": "Il existe une différence de 2 électrons entre les paires acide-base conjuguées.",
          "ru": "Между сопряженными кислотно-основными парами существует разница в 2 электрона.",
          "ar": "يوجد فرق قدره 2 إلكترون بين أزواج الحمض والقاعدة المترافقة.",
          "zh": "共轭酸碱对之间存在2个电子之差。",
          "ku": "Di navbera cotên asîd-bazê yên hevgirtî de 2 elektronan ferq heye."
        },
        {
          "tr": "Kan tampon sistemi hidroklorik asit ile dengelenir.",
          "en": "The blood buffer system is balanced by hydrochloric acid.",
          "de": "Das Blutpuffersystem wird durch Salzsäure ausgeglichen.",
          "fr": "Le système tampon sanguin est équilibré par l’acide chlorhydrique.",
          "ru": "Буферная система крови сбалансирована соляной кислотой.",
          "ar": "تتم موازنة النظام العازل للدم بواسطة حمض الهيدروكلوريك.",
          "zh": "血液缓冲系统由盐酸平衡。",
          "ku": "Pergala tampon a xwînê bi asîda hîdrochloric hevseng e."
        },
        {
          "tr": "HCl, HNO3, H2SO4 kuvvetli asit; HF, HCN, CH3COOH (sirke asidi) zayıf asitlerdir.",
          "en": "HCl, HNO3, H2SO4 strong acid; HF, HCN, CH3COOH (vinegar acid) are weak acids.",
          "de": "HCl, HNO3, H2SO4 starke Säure; HF, HCN, CH3COOH (Essigsäure) sind schwache Säuren.",
          "fr": "HCl, HNO3, H2SO4 acide fort ; HF, HCN, CH3COOH (acide vinaigre) sont des acides faibles.",
          "ru": "HCl, HNO3, H2SO4 сильная кислота; HF, HCN, CH3COOH (уксусная кислота) – слабые кислоты.",
          "ar": "حمض الهيدروكلوريك، HNO3، H2SO4 حمض قوي؛ HF، HCN، CH3COOH (حمض الخل) هي أحماض ضعيفة.",
          "zh": "HCl、HNO3、H2SO4强酸； HF、HCN、CH3COOH（醋酸）是弱酸。",
          "ku": "HCl, HNO3, H2SO4 asîdê xurt; HF, HCN, CH3COOH (asîda sîrkeyê) asîdên qels in."
        },
        {
          "tr": "Nötr tuzların iyonları suda şiddetle hidroliz olur.",
          "en": "Ions of neutral salts hydrolyze violently in water.",
          "de": "Ionen neutraler Salze hydrolysieren in Wasser heftig.",
          "fr": "Les ions de sels neutres s'hydrolysent violemment dans l'eau.",
          "ru": "Ионы нейтральных солей бурно гидролизуются в воде.",
          "ar": "تتحلل أيونات الأملاح المحايدة بعنف في الماء.",
          "zh": "中性盐离子在水中剧烈水解。",
          "ku": "Îyonên xwêyên bêalî di avê de bi tundî hîdrolîz dibin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"HCl, HNO3, H2SO4 kuvvetli asit; HF, HCN, CH3COOH (sirke asidi) zayıf asitlerdir.\" ifadesidir. HF zayıf asittir; camı eritmesi kimyasal özel afinitesindendir!",
        "en": "The correct statement is: \"HCl, HNO3, H2SO4 strong acid; HF, HCN, CH3COOH (vinegar acid) are weak acids.\". HF is a weak acid; Melting glass is due to its special chemical affinity!",
        "de": "Die zutreffende Aussage lautet: \"HCl, HNO3, H2SO4 starke Säure; HF, HCN, CH3COOH (Essigsäure) sind schwache Säuren.\". HF ist eine schwache Säure; Das Schmelzen von Glas ist auf seine besondere chemische Affinität zurückzuführen!",
        "fr": "L'affirmation exacte est: \"HCl, HNO3, H2SO4 acide fort ; HF, HCN, CH3COOH (acide vinaigre) sont des acides faibles.\". Le HF est un acide faible ; La fonte du verre est due à son affinité chimique particulière !",
        "ru": "Правильное утверждение: «HCl, HNO3, H2SO4 сильная кислота; HF, HCN, CH3COOH (уксусная кислота) – слабые кислоты.». HF – слабая кислота; Плавление стекла происходит благодаря его особому химическому сродству!",
        "ar": "العبارة الصحيحة هي: \"حمض الهيدروكلوريك، HNO3، H2SO4 حمض قوي؛ HF، HCN، CH3COOH (حمض الخل) هي أحماض ضعيفة.\". HF حمض ضعيف. ذوبان الزجاج يرجع إلى تقاربه الكيميائي الخاص!",
        "zh": "正确表述为：“HCl、HNO3、H2SO4强酸； HF、HCN、CH3COOH（醋酸）是弱酸。”。HF是弱酸；玻璃的熔化是由于其特殊的化学亲和力！",
        "ku": "Gotina rast ev e: \"HCl, HNO3, H2SO4 asîdê xurt; HF, HCN, CH3COOH (asîda sîrkeyê) asîdên qels in.\". HF asîdeke qels e; Şilbûna şûşê ji ber girêdana wê ya kîmyewî ya taybetî ye!"
      }
    },
    {
      "id": "u19-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Asit-Baz Dengesi ve Titrasyon ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Acid-Base Equilibrium & Titration, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Säure-Base-Gleichgewicht & Titration: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Équilibre Acide-Base & Titrage, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Кислотно-основное равновесие и титрование», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الاتزان الحمضي القاعدي والمعايرة\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“酸碱平衡与滴定”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Hevsengiya Asîd-Baz û Tîtrakirin\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Zayıf asitler suda hiç iyonlaşmaz.",
          "en": "Weak acids do not ionize at all in water.",
          "de": "Schwache Säuren ionisieren in Wasser überhaupt nicht.",
          "fr": "Les acides faibles ne s'ionisent pas du tout dans l'eau.",
          "ru": "Слабые кислоты вообще не ионизируются в воде.",
          "ar": "الأحماض الضعيفة لا تتأين على الإطلاق في الماء.",
          "zh": "弱酸在水中根本不电离。",
          "ku": "Asîdên qels di avê de qet îyonîze nabin."
        },
        {
          "tr": "Ka değeri büyük olan asidin eşlenik bazının Kb değeri de çok büyüktür.",
          "en": "The Kb value of the conjugate base of the acid with a high Ka value is also very high.",
          "de": "Der Kb-Wert der konjugierten Base der Säure mit einem hohen Ka-Wert ist ebenfalls sehr hoch.",
          "fr": "La valeur Kb de la base conjuguée de l'acide avec une valeur Ka élevée est également très élevée.",
          "ru": "Значение Kb сопряженного основания кислоты с высоким значением Ka также очень велико.",
          "ar": "كما أن قيمة Kb للقاعدة المترافقة للحمض ذات قيمة Ka العالية مرتفعة جدًا أيضًا.",
          "zh": "Ka值高的酸的共轭碱的Kb值也很高。",
          "ku": "Nirxa Kb ya bingeha hevgirtî ya asîda bi nirxa Ka ya bilind jî pir zêde ye."
        },
        {
          "tr": "Eşdeğerlik noktasında çözeltinin pH'ı daima 7.00 olmak zorundadır.",
          "en": "At the equivalence point, the pH of the solution must always be 7.00.",
          "de": "Am Äquivalenzpunkt muss der pH-Wert der Lösung immer 7,00 betragen.",
          "fr": "Au point d'équivalence, le pH de la solution doit toujours être de 7,00.",
          "ru": "В точке эквивалентности pH раствора всегда должен быть 7,00.",
          "ar": "عند نقطة التكافؤ، يجب أن يكون الرقم الهيدروجيني للمحلول دائمًا 7.00.",
          "zh": "在当量点，溶液的 pH 值必须始终为 7.00。",
          "ku": "Di xala hevdengiyê de, pH ya çareseriyê divê her gav 7.00 be."
        },
        {
          "tr": "Ka'sı küçük olan asit daha kuvvetlidir.",
          "en": "The acid with smaller muscles is stronger.",
          "de": "Bei kleineren Muskeln ist die Säure stärker.",
          "fr": "L'acide avec des muscles plus petits est plus fort.",
          "ru": "Кислота с меньшими мышцами сильнее.",
          "ar": "الحمض ذو العضلات الأصغر يكون أقوى.",
          "zh": "肌肉越小，酸越强。",
          "ku": "Asîda bi masûlkeyên piçûktir bihêztir e."
        },
        {
          "tr": "NaOH, KOH kuvvetli baz; NH3 (amonyak) zayıf bazdır.",
          "en": "NaOH, KOH strong base; NH3 (ammonia) is a weak base.",
          "de": "NaOH, KOH starke Base; NH3 (Ammoniak) ist eine schwache Base.",
          "fr": "NaOH, KOH base forte ; NH3 (ammoniac) est une base faible.",
          "ru": "NaOH, КОН сильное основание; NH3 (аммиак) – слабое основание.",
          "ar": "هيدروكسيد الصوديوم، كوه قاعدة قوية؛ NH3 (الأمونيا) قاعدة ضعيفة.",
          "zh": "NaOH、KOH强碱； NH3（氨）是弱碱。",
          "ku": "NaOH, KOH bingeha xurt; NH3 (ammoniak) bingeheke qels e."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"NaOH, KOH kuvvetli baz; NH3 (amonyak) zayıf bazdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"NaOH, KOH strong base; NH3 (ammonia) is a weak base.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"NaOH, KOH starke Base; NH3 (Ammoniak) ist eine schwache Base.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"NaOH, KOH base forte ; NH3 (ammoniac) est une base faible.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «NaOH, КОН сильное основание; NH3 (аммиак) – слабое основание.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"هيدروكسيد الصوديوم، كوه قاعدة قوية؛ NH3 (الأمونيا) قاعدة ضعيفة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“NaOH、KOH强碱； NH3（氨）是弱碱。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"NaOH, KOH bingeha xurt; NH3 (ammoniak) bingeheke qels e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u19-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Asit-Baz Dengesi ve Titrasyon konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Acid-Base Equilibrium & Titration, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Säure-Base-Gleichgewicht & Titration die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Équilibre Acide-Base & Titrage, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Кислотно-основное равновесие и титрование», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الاتزان الحمضي القاعدي والمعايرة\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“酸碱平衡与滴定”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Hevsengiya Asîd-Baz û Tîtrakirin\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "İndikatörler ortamın pH'ına bağlı olarak renk değiştiren zayıf organik asit veya bazlardır.",
          "en": "Indicators are weak organic acids or bases that change color depending on the pH of the environment.",
          "de": "Indikatoren sind schwache organische Säuren oder Basen, die je nach pH-Wert der Umgebung ihre Farbe ändern.",
          "fr": "Les indicateurs sont des acides ou des bases organiques faibles qui changent de couleur en fonction du pH de l'environnement.",
          "ru": "Индикаторами являются слабые органические кислоты или основания, меняющие цвет в зависимости от pH среды.",
          "ar": "المؤشرات عبارة عن أحماض أو قواعد عضوية ضعيفة يتغير لونها حسب الرقم الهيدروجيني للبيئة.",
          "zh": "指示剂是弱有机酸或碱，会根据环境的 pH 值改变颜色。",
          "ku": "Nîşan asîdên organîk an bazên qels in ku li gorî pHya hawîrdorê reng diguherînin."
        },
        {
          "tr": "Zayıf asidin H+ derişimi başlangıç derişimine eşittir.",
          "en": "The H+ concentration of the weak acid is equal to the initial concentration.",
          "de": "Die H+-Konzentration der schwachen Säure entspricht der Anfangskonzentration.",
          "fr": "La concentration H+ de l’acide faible est égale à la concentration initiale.",
          "ru": "Концентрация H+ слабой кислоты равна исходной концентрации.",
          "ar": "تركيز H+ للحمض الضعيف يساوي التركيز الأولي.",
          "zh": "弱酸的H+浓度等于初始浓度。",
          "ku": "Pîvana H+ ya asîda qels bi kêşeya destpêkê re ye."
        },
        {
          "tr": "Tampon çözelti kuvvetli asit ile kuvvetli baz karışımından oluşur.",
          "en": "Buffer solution consists of a mixture of strong acid and strong base.",
          "de": "Pufferlösung besteht aus einer Mischung aus starker Säure und starker Base.",
          "fr": "La solution tampon est constituée d’un mélange d’acide fort et de base forte.",
          "ru": "Буферный раствор состоит из смеси сильной кислоты и сильного основания.",
          "ar": "يتكون المحلول المنظم من خليط من حمض قوي وقاعدة قوية.",
          "zh": "缓冲溶液由强酸和强碱的混合物组成。",
          "ku": "Çareseriya tampon ji tevliheviya asîda xurt û bazê xurt pêk tê."
        },
        {
          "tr": "Kuvvetli asit kuvvetli baz titrasyonunda eşdeğerlik noktasında pH 0'dır.",
          "en": "In a strong acid strong base titration, pH is 0 at the equivalence point.",
          "de": "Bei einer Titration mit starker Säure und starker Base beträgt der pH-Wert am Äquivalenzpunkt 0.",
          "fr": "Dans un titrage acide fort base forte, le pH est de 0 au point d’équivalence.",
          "ru": "При титровании сильной кислотой и сильным основанием pH равен 0 в точке эквивалентности.",
          "ar": "في معايرة حمض قوي بقاعدة قوية، يكون الرقم الهيدروجيني 0 عند نقطة التكافؤ.",
          "zh": "在强酸强碱滴定中，等当点的pH值为0。",
          "ku": "Di titrasyonek bingehîn a bihêz a asîdê de, pH di xala hevkêşiyê de 0 ye."
        },
        {
          "tr": "Zayıf asit seyreltildiğinde H+ derişimi artar.",
          "en": "When a weak acid is diluted, the H+ concentration increases.",
          "de": "Wenn eine schwache Säure verdünnt wird, steigt die H+-Konzentration.",
          "fr": "Lorsqu’un acide faible est dilué, la concentration en H+ augmente.",
          "ru": "При разбавлении слабой кислоты концентрация H+ увеличивается.",
          "ar": "عند تخفيف حمض ضعيف يزداد تركيز H+.",
          "zh": "当弱酸被稀释时，H+浓度增加。",
          "ku": "Dema ku asîdek qels tê rijandin, tansiyona H+ zêde dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"İndikatörler ortamın pH'ına bağlı olarak renk değiştiren zayıf organik asit veya bazlardır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Indicators are weak organic acids or bases that change color depending on the pH of the environment.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Indikatoren sind schwache organische Säuren oder Basen, die je nach pH-Wert der Umgebung ihre Farbe ändern.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les indicateurs sont des acides ou des bases organiques faibles qui changent de couleur en fonction du pH de l'environnement.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Индикаторами являются слабые органические кислоты или основания, меняющие цвет в зависимости от pH среды.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المؤشرات عبارة عن أحماض أو قواعد عضوية ضعيفة يتغير لونها حسب الرقم الهيدروجيني للبيئة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“指示剂是弱有机酸或碱，会根据环境的 pH 值改变颜色。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Nîşan asîdên organîk an bazên qels in ku li gorî pHya hawîrdorê reng diguherînin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit19;
