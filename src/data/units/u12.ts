import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit12: ChemistryUnitSeedData = {
  "id": "u12",
  "order": 12,
  "exam": "AYT",
  "grade": 11,
  "title": {
    "tr": "Gazlar: Yasalar ve İdeal Gaz",
    "en": "Gases: Laws & Ideal Gas",
    "de": "Gase: Gesetze & Ideales Gas",
    "fr": "Gaz: Lois & Gaz Idéal",
    "ru": "Газы: законы и идеальный газ",
    "ar": "الغازات: القوانين والغاز المثالي",
    "zh": "气体：定律与理想气体",
    "ku": "Gaz: Zagon û Gaza Îdeal"
  },
  "subtitle": {
    "tr": "Boyle, Charles, Gay-Lussac ve İdeal Gaz Denklemi",
    "en": "PV=nRT, PM=dRT & Manometers",
    "de": "Boyle, Charles, Gay-Lussac und die ideale Gasgleichung",
    "fr": "Boyle, Charles, Gay-Lussac et l'équation des gaz parfaits",
    "ru": "Бойль, Чарльз, Гей-Люссак и уравнение идеального газа",
    "ar": "بويل، تشارلز، جاي لوساك ومعادلة الغاز المثالي",
    "zh": "博伊尔、查尔斯、盖-吕萨克和理想气体方程",
    "ku": "Boyle, Charles, Gay-Lussac û Wekheviya Gaza Îdeal"
  },
  "facts": [
    {
      "id": "u12-f01",
      "fact": {
        "tr": "İdeal Gaz Denklemi: PV = nRT dir (P*V = n*R*T). (P: atm, V: litre, n: mol, T: Kelvin, R: 0.0821 veya 22.4/273).",
        "en": "Ideal Gas Equation: PV = nRT (P*V = n*R*T). (P: atm, V: liter, n: mole, T: Kelvin, R: 0.0821 or 22.4/273).",
        "de": "Ideale Gasgleichung: PV = nRT (P*V = n*R*T). (P: atm, V: Liter, n: Mol, T: Kelvin, R: 0,0821 oder 22,4/273).",
        "fr": "Équation des gaz parfaits : PV = nRT (P*V = n*R*T). (P : atm, V : litre, n : mole, T : Kelvin, R : 0,0821 ou 22,4/273).",
        "ru": "Уравнение идеального газа: PV = nRT (P*V = n*R*T). (P: атм, V: литр, n: моль, T: Кельвин, R: 0,0821 или 22,4/273).",
        "ar": "معادلة الغاز المثالي: PV = nRT (P*V = n*R*T). (P: ATM، V: لتر، n: مول، T: كلفن، R: 0.0821 أو 22.4/273).",
        "zh": "理想气体方程：PV = nRT (P*V = n*R*T)。 (P：大气压，V：升，n：摩尔，T：开尔文，R：0.0821或22.4/273)。",
        "ku": "Wekheviya Gaza Îdeal: PV = nRT (P*V = n*R*T). (P: atm, V: lître, n: mol, T: Kelvin, R: 0.0821 an 22.4/273)."
      },
      "trap": {
        "tr": "İdeal gaz denkleminde sıcaklık Celsius (°C) olarak kullanılır.",
        "en": "In the ideal gas equation, temperature is used in Celsius (°C).",
        "de": "In der idealen Gasgleichung wird die Temperatur in Celsius (°C) verwendet.",
        "fr": "Dans l’équation des gaz parfaits, la température est utilisée en Celsius (°C).",
        "ru": "В уравнении идеального газа температура используется в градусах Цельсия (°C).",
        "ar": "في معادلة الغاز المثالي، يتم استخدام درجة الحرارة بالدرجة المئوية (درجة مئوية).",
        "zh": "在理想气体方程中，温度以摄氏度 (°C) 为单位。",
        "ku": "Di hevkêşeya gazê ya îdeal de, germahî bi Celsius (°C) tê bikaranîn."
      }
    },
    {
      "id": "u12-f02",
      "fact": {
        "tr": "Kelvin sıcaklığı T(K) = t(°C) + 273.15 formülüyle bulunur; mutlak sıcaklık sıfırın altına inemez.",
        "en": "Kelvin temperature is found by the formula T(K) = t(°C) + 273.15; The absolute temperature cannot fall below zero.",
        "de": "Die Kelvin-Temperatur wird durch die Formel T(K) = t(°C) + 273,15 ermittelt; Die absolute Temperatur kann nicht unter Null fallen.",
        "fr": "La température Kelvin est trouvée par la formule T(K) = t(°C) + 273,15 ; La température absolue ne peut pas descendre en dessous de zéro.",
        "ru": "Температура Кельвина находится по формуле Т(К) = t(°С) + 273,15; Абсолютная температура не может опускаться ниже нуля.",
        "ar": "يتم العثور على درجة حرارة كلفن بالصيغة T(K) = t(°C) + 273.15؛ لا يمكن أن تنخفض درجة الحرارة المطلقة إلى ما دون الصفر.",
        "zh": "开尔文温度的计算公式为 T(K) = t(°C) + 273.15；绝对温度不能低于零。",
        "ku": "Germahiya Kelvin bi formula T(K) = t(°C) + 273.15 tê dîtin; Germahiya mutleq nikare bikeve bin sifirê."
      },
      "trap": {
        "tr": "Sıcaklık 10 °C den 20 °C ye çıktığında gazın mutlak sıcaklığı iki katına çıkmış olur.",
        "en": "When the temperature increases from 10 °C to 20 °C, the absolute temperature of the gas doubles.",
        "de": "Bei einem Temperaturanstieg von 10 °C auf 20 °C verdoppelt sich die absolute Temperatur des Gases.",
        "fr": "Lorsque la température passe de 10 °C à 20 °C, la température absolue du gaz double.",
        "ru": "При повышении температуры с 10°С до 20°С абсолютная температура газа удваивается.",
        "ar": "عندما ترتفع درجة الحرارة من 10 درجات مئوية إلى 20 درجة مئوية، تتضاعف درجة الحرارة المطلقة للغاز.",
        "zh": "当温度从10℃升高到20℃时，气体的绝对温度加倍。",
        "ku": "Dema ku germahî ji 10 °C derkeve 20 °C, germahiya mutleq ya gazê du qat dibe."
      }
    },
    {
      "id": "u12-f03",
      "fact": {
        "tr": "Boyle Yasası: Sabit sıcaklık ve mol sayısında basınç ile hacim ters orantılıdır (P1V1 = P2V2).",
        "en": "Boyle's Law: At constant temperature and number of moles, pressure and volume are inversely proportional (P1V1 = P2V2).",
        "de": "Boyles Gesetz: Bei konstanter Temperatur und Molzahl sind Druck und Volumen umgekehrt proportional (P1V1 = P2V2).",
        "fr": "Loi de Boyle : À température et nombre de taupes constants, la pression et le volume sont inversement proportionnels (P1V1 = P2V2).",
        "ru": "Закон Бойля: При постоянной температуре и количестве молей давление и объем обратно пропорциональны (P1V1 = P2V2).",
        "ar": "قانون بويل: عند ثبات درجة الحرارة وعدد المولات، يتناسب الضغط والحجم عكسيا (P1V1 = P2V2).",
        "zh": "波义耳定律：在恒定的温度和摩尔数下，压力和体积成反比（P1V1 = P2V2）。",
        "ku": "Zagona Boyle: Di germahîya domdar û hejmara molan de, zext û qebare berovajî hev in (P1V1 = P2V2)."
      },
      "trap": {
        "tr": "Sabit sıcaklıkta gazın hacmi sıkıştırılarak yarıya indirilirse basıncı da yarıya iner.",
        "en": "If the volume of a gas at constant temperature is halved by compression, its pressure is also halved.",
        "de": "Wenn das Volumen eines Gases bei konstanter Temperatur durch Kompression halbiert wird, halbiert sich auch sein Druck.",
        "fr": "Si le volume d’un gaz à température constante est réduit de moitié par compression, sa pression est également réduite de moitié.",
        "ru": "Если объем газа при постоянной температуре уменьшить вдвое в результате сжатия, его давление также уменьшится вдвое.",
        "ar": "إذا انخفض حجم الغاز عند درجة حرارة ثابتة إلى النصف عن طريق الضغط، فإن ضغطه ينخفض ​​أيضًا إلى النصف.",
        "zh": "如果恒定温度下气体的体积因压缩而减半，则其压力也减半。",
        "ku": "Ger qebareya gazê ya di germahiya sabît de bi pêçandinê nîvî bibe, zexta wê jî nîvî dibe."
      }
    },
    {
      "id": "u12-f04",
      "fact": {
        "tr": "Charles Yasası: Sabit basınç ve mol sayısında hacim ile mutlak sıcaklık doğru orantılıdır (V1/T1 = V2/T2).",
        "en": "Charles' Law: At constant pressure and number of moles, volume and absolute temperature are directly proportional (V1/T1 = V2/T2).",
        "de": "Charles'sches Gesetz: Bei konstantem Druck und konstanter Molzahl sind Volumen und absolute Temperatur direkt proportional (V1/T1 = V2/T2).",
        "fr": "Loi de Charles : À pression et nombre de moles constants, le volume et la température absolue sont directement proportionnels (V1/T1 = V2/T2).",
        "ru": "Закон Шарля: при постоянном давлении и количестве молей объем и абсолютная температура прямо пропорциональны (V1/T1 = V2/T2).",
        "ar": "قانون تشارلز: عند الضغط الثابت وعدد المولات، يتناسب الحجم ودرجة الحرارة المطلقة طرديًا (V1/T1 = V2/T2).",
        "zh": "查尔斯定律：在恒定压力和摩尔数下，体积和绝对温度成正比（V1/T1 = V2/T2）。",
        "ku": "Zagona Charles: Di zexta domdar û hejmara molan de, volt û germahiya mutleq rasterast lihevhatî ne (V1/T1 = V2/T2)."
      },
      "trap": {
        "tr": "Gazın sıcaklığı 20 °C den 40 °C ye çıktığında hacmi tam 2 katına çıkar.",
        "en": "When the temperature of the gas increases from 20 °C to 40 °C, its volume doubles.",
        "de": "Steigt die Temperatur des Gases von 20 °C auf 40 °C, verdoppelt sich sein Volumen.",
        "fr": "Lorsque la température du gaz passe de 20 °C à 40 °C, son volume double.",
        "ru": "При повышении температуры газа с 20°С до 40°С его объём увеличивается вдвое.",
        "ar": "عندما ترتفع درجة حرارة الغاز من 20 درجة مئوية إلى 40 درجة مئوية، يتضاعف حجمه.",
        "zh": "当气体的温度从20℃升高到40℃时，其体积增加一倍。",
        "ku": "Dema ku germahiya gazê ji 20 °C derkeve 40 °C, qebareya wê du qat dibe."
      }
    },
    {
      "id": "u12-f05",
      "fact": {
        "tr": "Gay-Lussac Yasası: Sabit hacim ve mol sayısında basınç ile mutlak sıcaklık doğru orantılıdır (P1/T1 = P2/T2).",
        "en": "Gay-Lussac's Law: Pressure and absolute temperature are directly proportional to constant volume and number of moles (P1/T1 = P2/T2).",
        "de": "Gay-Lussac-Gesetz: Druck und absolute Temperatur sind direkt proportional zum konstanten Volumen und der Molzahl (P1/T1 = P2/T2).",
        "fr": "Loi de Gay-Lussac : La pression et la température absolue sont directement proportionnelles au volume et au nombre de moles constants (P1/T1 = P2/T2).",
        "ru": "Закон Гей-Люссака: Давление и абсолютная температура прямо пропорциональны постоянному объему и количеству молей (P1/T1 = P2/T2).",
        "ar": "قانون جاي لوساك: الضغط ودرجة الحرارة المطلقة يتناسبان طرديا مع الحجم الثابت وعدد المولات (P1/T1 = P2/T2).",
        "zh": "盖吕萨克定律：压力和绝对温度与恒定体积和摩尔数成正比（P1/T1 = P2/T2）。",
        "ku": "Zagona Gay-Lussac: Zext û germahiya mutleq rasterast bi qebareya domdar û hejmara molan re têkildar in (P1/T1 = P2/T2)."
      },
      "trap": {
        "tr": "Sabit hacimli kapta gaz ısıtılırsa basıncı azalır.",
        "en": "If the gas is heated in a fixed volume container, its pressure decreases.",
        "de": "Wenn das Gas in einem Behälter mit festem Volumen erhitzt wird, sinkt sein Druck.",
        "fr": "Si le gaz est chauffé dans un récipient à volume fixe, sa pression diminue.",
        "ru": "Если газ нагревать в контейнере фиксированного объема, его давление снижается.",
        "ar": "إذا تم تسخين الغاز في حاوية ذات حجم ثابت، ينخفض ​​ضغطه.",
        "zh": "如果气体在固定体积的容器中被加热，其压力会降低。",
        "ku": "Ger gaz di konteynirek bi qebareya sabit de were germ kirin, zexta wê kêm dibe."
      }
    },
    {
      "id": "u12-f06",
      "fact": {
        "tr": "Avogadro Yasası: Sabit sıcaklık ve basınçta hacim ile mol sayısı doğru orantılıdır (V1/n1 = V2/n2).",
        "en": "Avogadro's Law: At constant temperature and pressure, volume and number of moles are directly proportional (V1/n1 = V2/n2).",
        "de": "Avogadro-Gesetz: Bei konstanter Temperatur und konstantem Druck sind Volumen und Molzahl direkt proportional (V1/n1 = V2/n2).",
        "fr": "Loi d'Avogadro : À température et pression constantes, le volume et le nombre de moles sont directement proportionnels (V1/n1 = V2/n2).",
        "ru": "Закон Авогадро: При постоянных температуре и давлении объем и количество молей прямо пропорциональны (V1/n1 = V2/n2).",
        "ar": "قانون أفوجادرو: عند ثبات درجة الحرارة والضغط، يتناسب الحجم وعدد المولات تناسبًا طرديًا (V1/n1 = V2/n2).",
        "zh": "阿伏加德罗定律：在恒温恒压下，体积与摩尔数成正比（V1/n1 = V2/n2）。",
        "ku": "Zagona Avogadro: Di germahî û zexta domdar de, hejmûn û hejmara molan rasterast lihevhatî ne (V1/n1 = V2/n2)."
      },
      "trap": {
        "tr": "Farklı gazların eşit hacimleri daima eşit kütleye sahiptir.",
        "en": "Equal volumes of different gases always have equal mass.",
        "de": "Gleiche Volumina verschiedener Gase haben immer die gleiche Masse.",
        "fr": "Des volumes égaux de gaz différents ont toujours une masse égale.",
        "ru": "Равные объемы разных газов всегда имеют одинаковую массу.",
        "ar": "دائمًا ما تكون للأحجام المتساوية من الغازات المختلفة كتلة متساوية.",
        "zh": "相同体积的不同气体总是具有相同的质量。",
        "ku": "Hecma yeksan a gazên cuda timî xwedî girseya yeksan in."
      }
    },
    {
      "id": "u12-f07",
      "fact": {
        "tr": "Yoğunluk formülü: P * MA = d * R * T dir (Pirinç Mandalinayı daha Rahat Tartar).",
        "en": "Density formula: P * MA = d * R * T (Rice Weighs Tangerine More Easily).",
        "de": "Dichteformel: P * MA = d * R * T (Reis wiegt Mandarinen leichter).",
        "fr": "Formule de densité : P * MA = d * R * T (le riz pèse plus facilement la mandarine).",
        "ru": "Формула плотности: P*MA = d*R*T (рис легче взвешивает мандарин).",
        "ar": "صيغة الكثافة: P * MA = d * R * T (الأرز يزن اليوسفي بسهولة أكبر).",
        "zh": "密度公式：P * MA = d * R * T（大米更容易称量橘子）。",
        "ku": "Formula density: P * MA = d * R * T (Birinc Zêdetir Tangerine Digirîne)."
      },
      "trap": {
        "tr": "Gaz yoğunluğu sıcaklık arttıkça artar.",
        "en": "Gas density increases as temperature increases.",
        "de": "Die Gasdichte nimmt mit steigender Temperatur zu.",
        "fr": "La densité du gaz augmente à mesure que la température augmente.",
        "ru": "Плотность газа увеличивается с повышением температуры.",
        "ar": "تزداد كثافة الغاز مع زيادة درجة الحرارة.",
        "zh": "气体密度随着温度升高而增加。",
        "ku": "Her ku germahî zêde dibe, tîrêjiya gazê zêde dibe."
      }
    },
    {
      "id": "u12-f08",
      "fact": {
        "tr": "Birleşik gaz denklemi: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2) dir.",
        "en": "The combined gas equation is: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
        "de": "Die kombinierte Gasgleichung lautet: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
        "fr": "L'équation des gaz combinés est la suivante : (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
        "ru": "Комбинированное уравнение газа: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
        "ar": "معادلة الغاز المجمعة هي: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
        "zh": "组合气体方程为：(P1*V1) / (n1*T1) = (P2*V2) / (n2*T2)。",
        "ku": "Wekheviya gazê ya hevgirtî ev e: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2)."
      },
      "trap": {
        "tr": "Birleşik gaz denkleminde gazın türü formülü değiştirir.",
        "en": "In the combined gas equation, the type of gas changes the formula.",
        "de": "In der kombinierten Gasgleichung ändert die Art des Gases die Formel.",
        "fr": "Dans l’équation des gaz combinés, le type de gaz change la formule.",
        "ru": "В объединенном уравнении газа тип газа меняет формулу.",
        "ar": "في معادلة الغاز المدمجة، يغير نوع الغاز الصيغة.",
        "zh": "在组合气体方程中，气体类型改变了公式。",
        "ku": "Di hevkêşana gaza hevgirtî de, cureya gazê formulê diguherîne."
      }
    },
    {
      "id": "u12-f09",
      "fact": {
        "tr": "Sabit basınçlı sistemler sürtünmesiz pistonlu kaplar ve esnek balonlardır (iç basınç dış basınca eşittir).",
        "en": "Constant pressure systems are frictionless reciprocating vessels and flexible balloons (internal pressure equals external pressure).",
        "de": "Konstantdrucksysteme sind reibungsfreie hin- und hergehende Gefäße und flexible Ballons (Innendruck entspricht Außendruck).",
        "fr": "Les systèmes à pression constante sont des récipients à mouvement alternatif sans friction et des ballons flexibles (la pression interne est égale à la pression externe).",
        "ru": "Системы постоянного давления представляют собой сосуды, совершающие возвратно-поступательное движение без трения, и гибкие баллоны (внутреннее давление равно внешнему давлению).",
        "ar": "أنظمة الضغط الثابت عبارة عن أوعية ترددية عديمة الاحتكاك وبالونات مرنة (الضغط الداخلي يساوي الضغط الخارجي).",
        "zh": "恒压系统是无摩擦往复式容器和柔性气球（内部压力等于外部压力）。",
        "ku": "Pergalên zexta domdar keştiyên vegerê yên bê ferq û balonên maqûl in (zexta hundurîn wekî zexta derve ye)."
      },
      "trap": {
        "tr": "Çelik kapalı kaplarda gazın basıncı daima atmosfer basıncına eşittir.",
        "en": "In closed steel containers, the pressure of the gas is always equal to atmospheric pressure.",
        "de": "In geschlossenen Stahlbehältern ist der Druck des Gases immer gleich dem Atmosphärendruck.",
        "fr": "Dans des conteneurs en acier fermés, la pression du gaz est toujours égale à la pression atmosphérique.",
        "ru": "В закрытых стальных емкостях давление газа всегда равно атмосферному давлению.",
        "ar": "في الحاويات الفولاذية المغلقة، يكون ضغط الغاز دائمًا مساويًا للضغط الجوي.",
        "zh": "在封闭的钢制容器中，气体的压力始终等于大气压。",
        "ku": "Di konteynerên pola yên girtî de, zexta gazê her dem bi zexta atmosferê re ye."
      }
    },
    {
      "id": "u12-f10",
      "fact": {
        "tr": "Gaz molekülleri her yöne doğrusal, rastgele ve hızlı hareket eder (Brown hareketi).",
        "en": "Gas molecules move linearly, randomly and rapidly in all directions (Brown motion).",
        "de": "Gasmoleküle bewegen sich linear, zufällig und schnell in alle Richtungen (Brown-Bewegung).",
        "fr": "Les molécules de gaz se déplacent de manière linéaire, aléatoire et rapide dans toutes les directions (mouvement Brown).",
        "ru": "Молекулы газа движутся линейно, хаотично и быстро во всех направлениях (движение Брауна).",
        "ar": "تتحرك جزيئات الغاز بشكل خطي وعشوائي وسريع في جميع الاتجاهات (الحركة البنية).",
        "zh": "气体分子在各个方向上线性、随机且快速地运动（布朗运动）。",
        "ku": "Molekulên gazê bi rêkûpêk, bi rasthatinî û bi lez di her alî de dimeşin (Tevgera qehweyî)."
      },
      "trap": {
        "tr": "Gaz molekülleri sadece dairesel yörüngelerde hareket eder.",
        "en": "Gas molecules move only in circular orbits.",
        "de": "Gasmoleküle bewegen sich ausschließlich auf Kreisbahnen.",
        "fr": "Les molécules de gaz se déplacent uniquement sur des orbites circulaires.",
        "ru": "Молекулы газа движутся только по круговым орбитам.",
        "ar": "تتحرك جزيئات الغاز في مدارات دائرية فقط.",
        "zh": "气体分子仅沿圆形轨道运动。",
        "ku": "Molekulên gazê tenê di dorhêlên dorhêl de digerin."
      }
    },
    {
      "id": "u12-f11",
      "fact": {
        "tr": "Gaz tanecikleri arasındaki esnek çarpışmalarda toplam kinetik enerji ve momentum korunur.",
        "en": "In elastic collisions between gas particles, total kinetic energy and momentum are conserved.",
        "de": "Bei elastischen Kollisionen zwischen Gasteilchen bleiben die gesamte kinetische Energie und der Impuls erhalten.",
        "fr": "Dans les collisions élastiques entre particules de gaz, l’énergie cinétique totale et la quantité de mouvement sont conservées.",
        "ru": "При упругих столкновениях частиц газа полная кинетическая энергия и импульс сохраняются.",
        "ar": "في التصادمات المرنة بين جزيئات الغاز، يتم الحفاظ على الطاقة الحركية الكلية والزخم.",
        "zh": "在气体粒子之间的弹性碰撞中，总动能和动量守恒。",
        "ku": "Di pevçûnên elastîk ên di navbera pariyên gazê de, enerjiya kînetîk a tevahî û leza xwe parastiye."
      },
      "trap": {
        "tr": "Gaz tanecikleri çarptıkça kinetik enerjileri zamanla sıfıra düşer.",
        "en": "As gas particles collide, their kinetic energy decreases to zero over time.",
        "de": "Wenn Gasteilchen kollidieren, sinkt ihre kinetische Energie mit der Zeit auf Null.",
        "fr": "Lorsque les particules de gaz entrent en collision, leur énergie cinétique diminue jusqu'à zéro avec le temps.",
        "ru": "Когда частицы газа сталкиваются, их кинетическая энергия со временем уменьшается до нуля.",
        "ar": "عند تصادم جزيئات الغاز، تنخفض الطاقة الحركية لها إلى الصفر مع مرور الوقت.",
        "zh": "当气体粒子碰撞时，它们的动能随着时间的推移减少到零。",
        "ku": "Her ku pariyên gazê li hev dikevin, enerjiya wan a kînetîk bi demê re dadikeve sifirê."
      }
    },
    {
      "id": "u12-f12",
      "fact": {
        "tr": "Gazlar bulundukları kabın hacmini tamamen doldurur ve her noktasına eşit basınç uygular.",
        "en": "Gases completely fill the volume of the container they are in and apply equal pressure to every point.",
        "de": "Gase füllen das Volumen des Behälters, in dem sie sich befinden, vollständig aus und üben an jedem Punkt den gleichen Druck aus.",
        "fr": "Les gaz remplissent complètement le volume du récipient dans lequel ils se trouvent et appliquent une pression égale en chaque point.",
        "ru": "Газы полностью заполняют объем сосуда, в котором находятся, и оказывают одинаковое давление на каждую точку.",
        "ar": "تملأ الغازات حجم الوعاء الموجود فيه تمامًا وتطبق ضغطًا متساويًا على كل نقطة.",
        "zh": "气体完全充满其所在容器的体积，并对每个点施加相等的压力。",
        "ku": "Gaz bi tevahî qebareya konteynera ku tê de ne tijî dikin û zextek wekhev li her xalê dikin."
      },
      "trap": {
        "tr": "Gaz kabın dibine üst kısmından daha yüksek basınç uygular.",
        "en": "The gas exerts higher pressure at the bottom of the container than at the top.",
        "de": "Am Boden des Behälters übt das Gas einen höheren Druck aus als oben.",
        "fr": "Le gaz exerce une pression plus élevée au fond du récipient qu’en haut.",
        "ru": "Газ оказывает более высокое давление внизу контейнера, чем вверху.",
        "ar": "يمارس الغاز ضغطًا أعلى في قاع الحاوية مقارنةً بالأعلى.",
        "zh": "气体在容器底部施加的压力高于顶部。",
        "ku": "Gaz li binê konteynerê ji ya jorîn zextek bilindtir dike."
      }
    },
    {
      "id": "u12-f13",
      "fact": {
        "tr": "Gazlar birbiriyle her oranda homojen karışım oluşturur.",
        "en": "Gases form homogeneous mixtures with each other in all proportions.",
        "de": "Gase bilden in allen Mengenverhältnissen homogene Gemische miteinander.",
        "fr": "Les gaz forment entre eux des mélanges homogènes dans toutes les proportions.",
        "ru": "Газы образуют однородные смеси друг с другом во всех пропорциях.",
        "ar": "تشكل الغازات مخاليط متجانسة مع بعضها البعض بجميع النسب.",
        "zh": "气体以各种比例相互形成均匀混合物。",
        "ku": "Gaz di her rêjeyê de bi hev re tevliheviyên homojen çêdikin."
      },
      "trap": {
        "tr": "Birbiri içinde çözünmeyen heterojen gaz karışımları vardır.",
        "en": "There are heterogeneous gas mixtures that are insoluble in each other.",
        "de": "Es gibt heterogene Gasgemische, die ineinander unlöslich sind.",
        "fr": "Il existe des mélanges de gaz hétérogènes insolubles les uns dans les autres.",
        "ru": "Существуют гетерогенные газовые смеси, нерастворимые друг в друге.",
        "ar": "هناك مخاليط غازية غير متجانسة غير قابلة للذوبان في بعضها البعض.",
        "zh": "存在互不相溶的异质气体混合物。",
        "ku": "Têkelên gazê yên heterojen hene ku di nav hev de nayên çareserkirin."
      }
    },
    {
      "id": "u12-f14",
      "fact": {
        "tr": "Manometreler kapalı veya açık uçlu kaplardaki gaz basıncını cıva yüksekliğiyle ölçer.",
        "en": "Manometers measure gas pressure in closed or open-ended containers using the height of mercury.",
        "de": "Manometer messen den Gasdruck in geschlossenen oder offenen Behältern anhand der Quecksilbersäule.",
        "fr": "Les manomètres mesurent la pression du gaz dans des récipients fermés ou ouverts en utilisant la hauteur du mercure.",
        "ru": "Манометры измеряют давление газа в закрытых или открытых емкостях, используя высоту ртутного столба.",
        "ar": "تقوم أجهزة قياس الضغط بقياس ضغط الغاز في حاويات مغلقة أو مفتوحة باستخدام ارتفاع الزئبق.",
        "zh": "压力计利用水银的高度来测量封闭或开口容器中的气压。",
        "ku": "Manometre zexta gazê di konteynerên girtî an vekirî de bi karanîna bilindahiya merkurê dipîvin."
      },
      "trap": {
        "tr": "Manometre havanın nemini ölçen alettir.",
        "en": "Manometer is a device that measures the humidity of the air.",
        "de": "Manometer ist ein Gerät, das die Luftfeuchtigkeit misst.",
        "fr": "Le manomètre est un appareil qui mesure l'humidité de l'air.",
        "ru": "Манометр – прибор, измеряющий влажность воздуха.",
        "ar": "المانومتر هو جهاز يقيس رطوبة الهواء.",
        "zh": "压力计是测量空气湿度的装置。",
        "ku": "Manometre amûrek e ku nemahiya hewayê dipîve."
      }
    },
    {
      "id": "u12-f15",
      "fact": {
        "tr": "Sürtünmesiz ideal pistonlu kaba aynı sıcaklıkta gaz eklenirse gazın basıncı değişmez, hacmi artar.",
        "en": "If gas at the same temperature is added to a frictionless ideal piston container, the pressure of the gas does not change and its volume increases.",
        "de": "Wenn einem reibungsfreien idealen Kolbenbehälter Gas mit der gleichen Temperatur zugeführt wird, ändert sich der Druck des Gases nicht und sein Volumen vergrößert sich.",
        "fr": "Si du gaz à la même température est ajouté à un récipient à piston idéal sans friction, la pression du gaz ne change pas et son volume augmente.",
        "ru": "Если в идеальный поршневой контейнер без трения добавить газ той же температуры, давление газа не изменится, а его объем увеличится.",
        "ar": "إذا أضيف غاز عند نفس درجة الحرارة إلى حاوية مكبس مثالية عديمة الاحتكاك، فإن ضغط الغاز لا يتغير ويزداد حجمه.",
        "zh": "如果将相同温度的气体添加到无摩擦的理想活塞容器中，则气体的压力不改变并且其体积增加。",
        "ku": "Ger gaza di heman germahiyê de li konteynirek pistonê ya îdeal bê xitimandin were zêdekirin, zexta gazê naguhere û qebareya wê zêde dibe."
      },
      "trap": {
        "tr": "Pistonlu kaba gaz eklendiğinde iç basınç hızla artar.",
        "en": "When gas is added to the reciprocating vessel, the internal pressure increases rapidly.",
        "de": "Wenn dem Kolbenbehälter Gas zugeführt wird, steigt der Innendruck schnell an.",
        "fr": "Lorsque du gaz est ajouté au récipient alternatif, la pression interne augmente rapidement.",
        "ru": "Когда газ добавляется в возвратно-поступательный сосуд, внутреннее давление быстро увеличивается.",
        "ar": "عند إضافة الغاز إلى الوعاء الترددي، يزداد الضغط الداخلي بسرعة.",
        "zh": "当往复式容器中添加气体时，内部压力迅速增加。",
        "ku": "Dema ku gaz li keştiya veguhestinê tê zêdekirin, zexta hundur zû zêde dibe."
      }
    },
    {
      "id": "u12-f16",
      "fact": {
        "tr": "Aynı gazın bulunduğu sabit hacimli kapta sıcaklık Kelvin cinsinden iki katına çıkarsa basınç iki katına çıkar.",
        "en": "If the temperature in a fixed volume container containing the same gas doubles in Kelvin, the pressure doubles.",
        "de": "Wenn sich die Temperatur in einem Behälter mit festem Volumen, der dasselbe Gas enthält, in Kelvin verdoppelt, verdoppelt sich auch der Druck.",
        "fr": "Si la température dans un récipient à volume fixe contenant le même gaz double en Kelvin, la pression double.",
        "ru": "Если температура в контейнере фиксированного объема, содержащем тот же газ, увеличивается вдвое в Кельвинах, давление удваивается.",
        "ar": "إذا تضاعفت درجة الحرارة في وعاء ثابت الحجم يحتوي على نفس الغاز بالكلفن، فإن الضغط يتضاعف.",
        "zh": "如果含有相同气体的固定体积容器中的开尔文温度加倍，则压力加倍。",
        "ku": "Ger germahiya di konteynirek volga sabît a ku heman gazê tê de di Kelvin de duqat bibe, zext du qat dibe."
      },
      "trap": {
        "tr": "Sıcaklık 25 °C den 50 °C ye çıkarsa basınç iki katına çıkar.",
        "en": "If the temperature increases from 25 °C to 50 °C, the pressure doubles.",
        "de": "Steigt die Temperatur von 25 °C auf 50 °C, verdoppelt sich der Druck.",
        "fr": "Si la température passe de 25 °C à 50 °C, la pression double.",
        "ru": "Если температура увеличивается с 25 °C до 50 °C, давление удваивается.",
        "ar": "إذا ارتفعت درجة الحرارة من 25 درجة مئوية إلى 50 درجة مئوية، يتضاعف الضغط.",
        "zh": "如果温度从 25 °C 升高到 50 °C，压力就会加倍。",
        "ku": "Ger germahî ji 25 °C heta 50 °C zêde bibe, zext du qat dibe."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u12-c01",
      "conceptA": {
        "tr": "Boyle Yasası",
        "en": "Boyle's Law",
        "de": "Boyles Gesetz",
        "fr": "Loi de Boyle",
        "ru": "Закон Бойля",
        "ar": "قانون بويل",
        "zh": "波义耳定律",
        "ku": "Qanûna Boyle"
      },
      "conceptB": {
        "tr": "Charles Yasası",
        "en": "Charles Law",
        "de": "Charles Law",
        "fr": "Charles Loi",
        "ru": "Чарльз Лоу",
        "ar": "قانون تشارلز",
        "zh": "查尔斯·劳",
        "ku": "Charles Law"
      },
      "distinction": {
        "tr": "Boyle P-V ters orantısını; Charles V-T(K) doğru orantısını açıklar.",
        "en": "Boyle P-V inverse ratio; Explains Charles V-T(K) direct proportion.",
        "de": "Boyle P-V-Umkehrverhältnis; Erklärt die direkte Proportion von Charles V-T(K).",
        "fr": "Rapport inverse PV de Boyle ; Explique la proportion directe Charles V-T(K).",
        "ru": "Обратное соотношение Бойля P-V; Объясняет прямую зависимость Чарльза V-T(K).",
        "ar": "Boyle PV نسبة عكسية؛ يفسر نسبة تشارلز V-T(K) المباشرة.",
        "zh": "波义耳 P-V 反比；解释 Charles V-T(K) 正比例。",
        "ku": "Rêjeya berevajî ya Boyle P-V; Rêjeya rasterast Charles V-T(K) rave dike."
      }
    },
    {
      "id": "u12-c02",
      "conceptA": {
        "tr": "Pistonlu Kap",
        "en": "Piston Vessel",
        "de": "Kolbengefäß",
        "fr": "Navire à pistons",
        "ru": "Поршневой сосуд",
        "ar": "سفينة المكبس",
        "zh": "活塞容器",
        "ku": "Keştiya Piston"
      },
      "conceptB": {
        "tr": "Sabit Hacimli Kap",
        "en": "Fixed Volume Container",
        "de": "Container mit festem Volumen",
        "fr": "Conteneur à volume fixe",
        "ru": "Контейнер фиксированного объема",
        "ar": "حاوية ذات حجم ثابت",
        "zh": "固定容积容器",
        "ku": "Konteynirê Voluma Sabît"
      },
      "distinction": {
        "tr": "Pistonlu kapta basınç sabit hacim değişken; çelik kapta hacim sabit basınç değişkendir.",
        "en": "In the piston vessel, the pressure is constant and the volume is variable; In a steel vessel, the volume is constant and the pressure is variable.",
        "de": "Im Kolbenbehälter ist der Druck konstant und das Volumen variabel; In einem Stahlbehälter ist das Volumen konstant und der Druck variabel.",
        "fr": "Dans le récipient à piston, la pression est constante et le volume est variable ; Dans un récipient en acier, le volume est constant et la pression est variable.",
        "ru": "В поршневом сосуде давление постоянно, а объем переменный; В стальном сосуде объем постоянный, а давление переменное.",
        "ar": "في وعاء المكبس، يكون الضغط ثابتًا والحجم متغيرًا؛ في الوعاء الفولاذي، يكون الحجم ثابتًا والضغط متغيرًا.",
        "zh": "在活塞容器中，压力恒定，体积可变；在钢容器中，体积是恒定的，压力是可变的。",
        "ku": "Di keştiya pistonê de, zext domdar e û qebarek guhêrbar e; Di keştiyek pola de, hecm domdar e û zext jî guherbar e."
      }
    },
    {
      "id": "u12-c03",
      "conceptA": {
        "tr": "Gay-Lussac Yasası",
        "en": "Gay-Lussac's Law",
        "de": "Gay-Lussacs Gesetz",
        "fr": "Loi de Gay-Lussac",
        "ru": "Закон Гей-Люссака",
        "ar": "قانون جاي لوساك",
        "zh": "盖-吕萨克定律",
        "ku": "Qanûna Gay-Lussac"
      },
      "conceptB": {
        "tr": "Avogadro Yasası",
        "en": "Avogadro's Law",
        "de": "Avogadros Gesetz",
        "fr": "La loi d'Avogadro",
        "ru": "Закон Авогадро",
        "ar": "قانون أفوجادرو",
        "zh": "阿伏加德罗定律",
        "ku": "Qanûna Avogadro"
      },
      "distinction": {
        "tr": "Gay-Lussac sabit hacimde P ile T nin doğru orantısını; Avogadro sabit P ve T de V ile mol sayısının doğru orantısını açıklar.",
        "en": "Gay-Lussac finds the direct proportion of P and T at constant volume; Avogadro explains the direct proportionality of the number of moles to V and the constant P and T.",
        "de": "Gay-Lussac findet das direkte Verhältnis von P und T bei konstantem Volumen; Avogadro erklärt die direkte Proportionalität der Molzahl zu V und den Konstanten P und T.",
        "fr": "Gay-Lussac trouve la proportion directe de P et T à volume constant ; Avogadro explique la proportionnalité directe du nombre de taupes à V et aux constantes P et T.",
        "ru": "Гей-Люссак находит прямую зависимость Р и Т при постоянном объеме; Авогадро объясняет прямую пропорциональность числа родинок V и константам Р и Т.",
        "ar": "يجد جاي لوساك النسبة المباشرة لـ P وT عند حجم ثابت؛ يشرح أفوجادرو التناسب المباشر لعدد الشامات مع V والثابت P وT.",
        "zh": "Gay-Lussac 发现恒体积下 P 和 T 的正比例；阿伏加德罗解释了摩尔数与 V 以及常数 P 和 T 的正比关系。",
        "ku": "Gay-Lussac rêjeya rasterast ya P û T di qebareya domdar de dibîne; Avogadro hevsengiya rasterast a hejmara molan bi V û P û T-ya domdar rave dike."
      }
    },
    {
      "id": "u12-c04",
      "conceptA": {
        "tr": "Sabit Hacimli Kap",
        "en": "Fixed Volume Container",
        "de": "Container mit festem Volumen",
        "fr": "Conteneur à volume fixe",
        "ru": "Контейнер фиксированного объема",
        "ar": "حاوية ذات حجم ثابت",
        "zh": "固定容积容器",
        "ku": "Konteynirê Voluma Sabît"
      },
      "conceptB": {
        "tr": "Hareketli Pistonlu Kap",
        "en": "Movable Piston Vessel",
        "de": "Bewegliches Kolbengefäß",
        "fr": "Récipient à piston mobile",
        "ru": "Подвижный поршневой сосуд",
        "ar": "سفينة المكبس المنقولة",
        "zh": "可移动活塞容器",
        "ku": "Keştiya Piston Movable"
      },
      "distinction": {
        "tr": "Sabit hacimli kapta V sabittir, sıcaklık arttıkça P artar; pistonlu kapta dış basınç iç basınca eşit olup P sabittir, V artar.",
        "en": "In a constant volume container, V is constant, P increases as the temperature increases; In a piston vessel, the external pressure is equal to the internal pressure, P is constant, V increases.",
        "de": "In einem Behälter mit konstantem Volumen ist V konstant, P nimmt mit steigender Temperatur zu; In einem Kolbenbehälter ist der Außendruck gleich dem Innendruck, P ist konstant, V steigt.",
        "fr": "Dans un récipient à volume constant, V est constant, P augmente avec la température ; Dans un récipient à piston, la pression externe est égale à la pression interne, P est constante, V augmente.",
        "ru": "В контейнере постоянного объема V постоянно, P увеличивается с повышением температуры; В поршневом сосуде внешнее давление равно внутреннему, Р постоянно, V увеличивается.",
        "ar": "في حاوية ذات حجم ثابت، تكون V ثابتة، وتزداد P مع زيادة درجة الحرارة؛ في وعاء المكبس، الضغط الخارجي يساوي الضغط الداخلي، P ثابت، V يزداد.",
        "zh": "在定容容器中，V不变，P随温度升高而增大；在活塞容器中，外部压力等于内部压力，P 恒定，V 增大。",
        "ku": "Di konteynirek qebareya domdar de, V sabit e, P her ku germahî zêde dibe zêde dibe; Di keştiyek piston de, zexta derve bi zexta hundurîn re wekhev e, P domdar e, V zêde dibe."
      }
    },
    {
      "id": "u12-c05",
      "conceptA": {
        "tr": "Gaz Yoğunluğu (d = PM/RT)",
        "en": "Gas Density (d = PM/RT)",
        "de": "Gasdichte (d = PM/RT)",
        "fr": "Densité du gaz (d = PM/RT)",
        "ru": "Плотность газа (d = PM/RT)",
        "ar": "كثافة الغاز (د = PM/RT)",
        "zh": "气体密度 (d = PM/RT)",
        "ku": "Tîrêjiya gazê (d = PM/RT)"
      },
      "conceptB": {
        "tr": "Mol Kütlesi (M)",
        "en": "Molar Mass (M)",
        "de": "Molmasse (M)",
        "fr": "Masse molaire (M)",
        "ru": "Молярная масса (M)",
        "ar": "الكتلة المولية (م)",
        "zh": "摩尔质量 (M)",
        "ku": "Girseya Molar (M)"
      },
      "distinction": {
        "tr": "Gaz yoğunluğu basınca ve sıcaklığa bağlıdır; mol kütlesi ise gazın kimlik özelliği olup sıcaklıkla değişmez.",
        "en": "Gas density depends on pressure and temperature; Molar mass is the identity characteristic of the gas and does not change with temperature.",
        "de": "Die Gasdichte hängt von Druck und Temperatur ab; Die Molmasse ist das Identitätsmerkmal des Gases und ändert sich nicht mit der Temperatur.",
        "fr": "La densité du gaz dépend de la pression et de la température ; La masse molaire est la caractéristique d'identité du gaz et ne change pas avec la température.",
        "ru": "Плотность газа зависит от давления и температуры; Молярная масса является идентичной характеристикой газа и не меняется с температурой.",
        "ar": "تعتمد كثافة الغاز على الضغط ودرجة الحرارة؛ الكتلة المولية هي السمة المميزة للغاز ولا تتغير مع درجة الحرارة.",
        "zh": "气体密度取决于压力和温度；摩尔质量是气体的同一特征，不随温度变化。",
        "ku": "Dendika gazê bi zext û germahiyê ve girêdayî ye; Girseya Molar taybetmendiya nasnameya gazê ye û bi germahiyê re naguhere."
      }
    },
    {
      "id": "u12-c06",
      "conceptA": {
        "tr": "Kısmi Basınç",
        "en": "Partial Pressure",
        "de": "Partialdruck",
        "fr": "Pression partielle",
        "ru": "Парциальное давление",
        "ar": "الضغط الجزئي",
        "zh": "分压",
        "ku": "Zexta qismî"
      },
      "conceptB": {
        "tr": "Toplam Basınç",
        "en": "Total Pressure",
        "de": "Gesamtdruck",
        "fr": "Pression totale",
        "ru": "Общее давление",
        "ar": "الضغط الكلي",
        "zh": "总压",
        "ku": "Tevahiya Zexta"
      },
      "distinction": {
        "tr": "Kısmi basınç karışımdaki tek bir gazın tek başına uyguladığı basınçtır; toplam basınç tüm kısmi basınçların toplamıdır.",
        "en": "Partial pressure is the pressure exerted by a single gas in a mixture; total pressure is the sum of all partial pressures.",
        "de": "Partialdruck ist der Druck, der von einem einzelnen Gas in einer Mischung ausgeübt wird; Der Gesamtdruck ist die Summe aller Partialdrücke.",
        "fr": "La pression partielle est la pression exercée par un seul gaz dans un mélange ; la pression totale est la somme de toutes les pressions partielles.",
        "ru": "Парциальное давление — это давление, оказываемое одним газом в смеси; полное давление представляет собой сумму всех парциальных давлений.",
        "ar": "الضغط الجزئي هو الضغط الذي يمارسه غاز واحد في الخليط؛ الضغط الكلي هو مجموع كل الضغوط الجزئية.",
        "zh": "分压是混合物中单一气体所施加的压力；总压力是所有分压力的总和。",
        "ku": "Zexta qismî ew zexta ku ji hêla gaza yekane ve di têkelekê de tê kirin e; zexta tevhev kombûna hemû zextên qismî ye."
      }
    },
    {
      "id": "u12-c07",
      "conceptA": {
        "tr": "Gaz Difüzyonu",
        "en": "Gas Diffusion",
        "de": "Gasdiffusion",
        "fr": "Diffusion de gaz",
        "ru": "Газовая диффузия",
        "ar": "انتشار الغاز",
        "zh": "气体扩散",
        "ku": "Belavbûna Gazê"
      },
      "conceptB": {
        "tr": "Gaz Efüzyonu",
        "en": "Gas Effusion",
        "de": "Gasaustritt",
        "fr": "Épanchement de gaz",
        "ru": "Выброс газа",
        "ar": "انصباب الغاز",
        "zh": "气体逸出",
        "ku": "Derxistina Gazê"
      },
      "distinction": {
        "tr": "Difüzyon bir gazın başka bir gaz içinde kendiliğinden yayılmasıdır; efüzyon gazın küçük bir delikten boşluğa kaçmasıdır.",
        "en": "Diffusion is the spontaneous diffusion of one gas within another gas; Effusion is the escape of gas into space through a small hole.",
        "de": "Diffusion ist die spontane Diffusion eines Gases innerhalb eines anderen Gases; Unter Effusion versteht man das Entweichen von Gas durch ein kleines Loch in den Weltraum.",
        "fr": "La diffusion est la diffusion spontanée d’un gaz dans un autre gaz ; L'épanchement est la fuite de gaz dans l'espace par un petit trou.",
        "ru": "Диффузия — это самопроизвольная диффузия одного газа внутри другого газа; Эффузия – это выход газа в космос через небольшое отверстие.",
        "ar": "الانتشار هو الانتشار التلقائي لغاز ما داخل غاز آخر؛ الانصباب هو خروج الغاز إلى الفضاء من خلال ثقب صغير.",
        "zh": "扩散是一种气体在另一种气体中的自发扩散；逸出是指气体通过小孔逃逸到太空中。",
        "ku": "Difûzyon belavbûna spontan a gazekê di nav gazeke din de ye; Effuzyon reviya gazê ye ku bi kunek piçûk ve diçe fezayê."
      }
    },
    {
      "id": "u12-c08",
      "conceptA": {
        "tr": "Buhar",
        "en": "Vapor",
        "de": "Dampf",
        "fr": "Vapeur",
        "ru": "Пар",
        "ar": "البخار",
        "zh": "蒸气",
        "ku": "Buhar"
      },
      "conceptB": {
        "tr": "Gaz",
        "en": "Gas",
        "de": "Gas",
        "fr": "Gaz",
        "ru": "Газ",
        "ar": "الغاز",
        "zh": "气体",
        "ku": "Gaz"
      },
      "distinction": {
        "tr": "Buhar kritik sıcaklığın altındaki gaz fazı olup basınçla sıvılaştırılabilir; gaz ise kritik sıcaklığın üstünde olup yalnızca basınçla sıvılaştırılamaz.",
        "en": "Vapor is below its critical temperature and can be liquefied by pressure alone; gas is above its critical temperature and cannot be liquefied by pressure alone.",
        "de": "Dampf befindet sich unterhalb der kritischen Temperatur und verflüssigt sich durch Druck; Gas liegt oberhalb und lässt sich durch Druck allein nicht verflüssigen.",
        "fr": "La vapeur est en dessous de sa température critique et liquéfiable par pression ; le gaz est au-dessus et ne peut être liquéfié par pression seule.",
        "ru": "Пар находится ниже критической температуры и может быть сконденсирован давлением; газ выше критической температуры сжать в жидкость давлением нельзя.",
        "ar": "البخار يوجد تحت درجة الحرارة الحرجة ويمكن تسييله بالضغط فقط؛ الغاز يوجد فوق درجة الحرارة الحرجة ولا يمكن تسييله بالضغط بمفرده.",
        "zh": "蒸气处于临界温度以下，仅通过加压即可液化；气体处于临界温度以上，仅靠加压无法使其液化。",
        "ku": "Buhar di bin germahiya krîtîk de ye û bi zextê dibe şilek; gaz li ser germahiya krîtîk e û tenê bi zextê nabe şilek."
      }
    }
  ],
  "sequences": [
    {
      "id": "u12-s01",
      "title": {
        "tr": "İdeal Gaz Problemi Çözüm Adımları",
        "en": "Ideal Gas Problem Solution Steps",
        "de": "Lösungsschritte für ideale Gasprobleme",
        "fr": "Étapes de solution au problème des gaz parfaits",
        "ru": "Этапы решения проблемы идеального газа",
        "ar": "خطوات حل مشكلة الغاز المثالي",
        "zh": "理想气体问题解决步骤",
        "ku": "Gavên Çareseriya Pirsgirêka Gaza Îdeal"
      },
      "steps": [
        {
          "tr": "Verilen sıcaklığı Kelvin e dönüştür (t + 273)",
          "en": "Convert given temperature to Kelvin (t + 273)",
          "de": "Konvertieren Sie die angegebene Temperatur in Kelvin (t + 273).",
          "fr": "Convertir la température donnée en Kelvin (t + 273)",
          "ru": "Преобразовать данную температуру в Кельвины (t + 273)",
          "ar": "تحويل درجة الحرارة المعطاة إلى كلفن (t + 273)",
          "zh": "将给定温度转换为开尔文 (t + 273)",
          "ku": "Germahiya diyarkirî veguherînin Kelvin (t + 273)"
        },
        {
          "tr": "Basıncı atm, hacmi litreye çevir",
          "en": "Release the pressure, convert the volume to liters",
          "de": "Lassen Sie den Druck ab und rechnen Sie das Volumen in Liter um",
          "fr": "Relâchez la pression, convertissez le volume en litres",
          "ru": "Сбросьте давление, переведите объём в литры.",
          "ar": "حرر الضغط، وقم بتحويل الحجم إلى لتر",
          "zh": "释放压力，将体积换算为升",
          "ku": "Zextê berdin, hejmûnê veguherînin lîtreyan"
        },
        {
          "tr": "PV = nRT formülünü yaz",
          "en": "Write the formula PV = nRT",
          "de": "Schreiben Sie die Formel PV = nRT",
          "fr": "Écrivez la formule PV = nRT",
          "ru": "Запишите формулу PV = nRT.",
          "ar": "اكتب الصيغة PV = nRT",
          "zh": "写出公式 PV = nRT",
          "ku": "Formula PV = nRT binivîse"
        },
        {
          "tr": "Sabitleri sadeleştirip orantıyı kur",
          "en": "Simplify the constants and establish the proportion",
          "de": "Vereinfachen Sie die Konstanten und ermitteln Sie das Verhältnis",
          "fr": "Simplifier les constantes et établir la proportion",
          "ru": "Упростим константы и установим пропорцию",
          "ar": "تبسيط الثوابت وتحديد النسبة",
          "zh": "简化常数并建立比例",
          "ku": "Sabitan hêsan bikin û nîsbetê saz bikin"
        }
      ]
    },
    {
      "id": "u12-s02",
      "title": {
        "tr": "İdeal Gaz Yasası Türetimi",
        "en": "Ideal Gas Law Derivation",
        "de": "Herleitung des idealen Gasgesetzes",
        "fr": "Dérivation de la loi des gaz parfaits",
        "ru": "Вывод закона идеального газа",
        "ar": "اشتقاق قانون الغاز المثالي",
        "zh": "理想气体定律推导",
        "ku": "Derxistina Qanûna Gazê ya Îdeal"
      },
      "steps": [
        {
          "tr": "Boyle yasasından P ile V nin ters orantısı alınır",
          "en": "From Boyle's law, the inverse proportion of P and V is taken",
          "de": "Aus dem Boyle-Gesetz wird das umgekehrte Verhältnis von P und V abgeleitet",
          "fr": "De la loi de Boyle, on prend la proportion inverse de P et V",
          "ru": "Из закона Бойля взята обратная пропорция P и V",
          "ar": "من قانون بويل، يتم أخذ النسبة العكسية لـ P و V",
          "zh": "根据波义耳定律，可得出 P 和 V 的反比例",
          "ku": "Ji qanûna Boyle, rêjeya berevajî ya P û V tê girtin"
        },
        {
          "tr": "Charles yasasından V ile T nin doğru orantısı eklenir",
          "en": "From Charles' law, the direct proportion of V and T is added",
          "de": "Aus dem Gesetz von Charles wird das direkte Verhältnis von V und T addiert",
          "fr": "De la loi de Charles, la proportion directe de V et T s'ajoute",
          "ru": "Из закона Шарля складывается прямая пропорция V и T.",
          "ar": "من قانون تشارلز، تتم إضافة النسبة المباشرة لـ V وT",
          "zh": "根据查理定律，加上V和T的正比例",
          "ku": "Ji qanûna Charles, rêjeya rasterast ya V û T tê zêdekirin"
        },
        {
          "tr": "Avogadro yasasından V ile n nin doğru orantısı birleştirilir",
          "en": "From Avogadro's law, the direct proportion of V and n is combined",
          "de": "Aus dem Gesetz von Avogadro ergibt sich der direkte Anteil von V und n",
          "fr": "D'après la loi d'Avogadro, la proportion directe de V et n est combinée",
          "ru": "Из закона Авогадро складывается прямая пропорция V и n",
          "ar": "من قانون أفوجادرو، يتم الجمع بين النسبة المباشرة لـ V و n",
          "zh": "根据阿伏加德罗定律，V 和 n 的正比例结合起来",
          "ku": "Ji zagona Avogadro, rêjeya rasterast ya V û n tê hev kirin"
        },
        {
          "tr": "R gaz sabiti ile PV = nRT ana denklemi kurulur",
          "en": "The main equation PV = nRT is established with the gas constant R",
          "de": "Die Hauptgleichung PV = nRT wird mit der Gaskonstante R aufgestellt",
          "fr": "L'équation principale PV = nRT est établie avec la constante des gaz R",
          "ru": "Основное уравнение PV = nRT устанавливается с помощью газовой постоянной R",
          "ar": "يتم إنشاء المعادلة الرئيسية PV = nRT مع ثابت الغاز R",
          "zh": "由气体常数 R 建立主方程 PV = nRT",
          "ku": "Hevkêşana sereke PV = nRT bi domdariya gazê R tê saz kirin"
        }
      ]
    },
    {
      "id": "u12-s03",
      "title": {
        "tr": "Bileşik Gaz Denklemi Uygulaması",
        "en": "Compound Gas Equation Application",
        "de": "Anwendung der zusammengesetzten Gasgleichung",
        "fr": "Application de l’équation des gaz composés",
        "ru": "Приложение для уравнения составного газа",
        "ar": "تطبيق معادلة الغازات المركبة",
        "zh": "复合气体方程应用",
        "ku": "Serlêdana Wekheviya Gazê ya Pêkhatî"
      },
      "steps": [
        {
          "tr": "Birinci durumdaki P1, V1, T1 değerleri yazılır",
          "en": "P1, V1, T1 values in the first case are written",
          "de": "Im ersten Fall werden die Werte P1, V1, T1 geschrieben",
          "fr": "Les valeurs P1, V1, T1 dans le premier cas s'écrivent",
          "ru": "Значения P1, V1, T1 в первом случае записываются",
          "ar": "تتم كتابة قيم P1، V1، T1 في الحالة الأولى",
          "zh": "第一种情况下的 P1、V1、T1 值被写入",
          "ku": "Nirxên P1, V1, T1 di rewşa yekem de têne nivîsandin"
        },
        {
          "tr": "Değişen koşullardaki P2, V2, T2 parametreleri belirlenir",
          "en": "P2, V2, T2 parameters in changing conditions are determined",
          "de": "Die Parameter P2, V2, T2 unter sich ändernden Bedingungen werden bestimmt",
          "fr": "Les paramètres P2, V2, T2 dans des conditions changeantes sont déterminés",
          "ru": "Определяются параметры P2, V2, T2 в изменяющихся условиях.",
          "ar": "يتم تحديد معلمات P2، V2، T2 في الظروف المتغيرة",
          "zh": "确定变化条件下的P2、V2、T2参数",
          "ku": "Parametreyên P2, V2, T2 di şert û mercên guherînê de têne destnîşankirin"
        },
        {
          "tr": "P1.V1 / T1 = P2.V2 / T2 eşitliği kurulur",
          "en": "The equation P1.V1 / T1 = P2.V2 / T2 is established",
          "de": "Die Gleichung P1.V1 / T1 = P2.V2 / T2 wird aufgestellt",
          "fr": "L'équation P1.V1/T1 = P2.V2/T2 est établie",
          "ru": "Уравнение P1.V1/T1 = P2.V2/T2 установлено",
          "ar": "يتم إنشاء المعادلة P1.V1 / T1 = P2.V2 / T2",
          "zh": "等式 P1.V1 / T1 = P2.V2 / T2 成立",
          "ku": "Hevkêşana P1.V1 / T1 = P2.V2 / T2 tê saz kirin"
        },
        {
          "tr": "Bilinmeyen hacim veya basınç değeri çekilir",
          "en": "Unknown volume or pressure value is drawn",
          "de": "Unbekannter Volumen- oder Druckwert wird gezeichnet",
          "fr": "Un volume ou une valeur de pression inconnu est dessiné",
          "ru": "Отображается неизвестное значение объема или давления.",
          "ar": "يتم رسم حجم أو قيمة ضغط غير معروفة",
          "zh": "绘制未知的体积或压力值",
          "ku": "Hêjmar an nirxa zextê ya nenas tê kişandin"
        }
      ]
    },
    {
      "id": "u12-s04",
      "title": {
        "tr": "Manometre ile Basınç Ölçümü",
        "en": "Pressure Measurement with Manometer",
        "de": "Druckmessung mit Manometer",
        "fr": "Mesure de pression avec manomètre",
        "ru": "Измерение давления с помощью манометра",
        "ar": "قياس الضغط باستخدام المانومتر",
        "zh": "用压力计测量压力",
        "ku": "Pîvana Zextê bi Manometre"
      },
      "steps": [
        {
          "tr": "U borusuna belirli yoğunlukta cıva doldurulur",
          "en": "A certain density of mercury is filled into the U tube.",
          "de": "In das U-Rohr ist Quecksilber einer bestimmten Dichte eingefüllt.",
          "fr": "Une certaine densité de mercure est introduite dans le tube en U.",
          "ru": "U-образная трубка заполнена ртутью определенной плотности.",
          "ar": "يتم ملء كثافة معينة من الزئبق في أنبوب U.",
          "zh": "U型管内充有一定密度的汞。",
          "ku": "Tîrêjek diyar a merkurê di lûleya U de tê dagirtin."
        },
        {
          "tr": "Bir kol kapalı gaza, diğer kol atmosfere açılır",
          "en": "One arm is closed to the gas, the other arm is opened to the atmosphere.",
          "de": "Ein Arm ist zum Gas hin geschlossen, der andere Arm ist zur Atmosphäre hin geöffnet.",
          "fr": "Un bras est fermé au gaz, l’autre bras est ouvert à l’atmosphère.",
          "ru": "Одно плечо закрыто для газа, другое открыто для атмосферы.",
          "ar": "ذراع واحدة مغلقة أمام الغاز، والذراع الأخرى مفتوحة للغلاف الجوي.",
          "zh": "一只臂对气体关闭，另一只臂对大气开放。",
          "ku": "Destek ji gazê re girtî ye, milê din ji atmosferê re vekirî ye."
        },
        {
          "tr": "Cıva seviyeleri arasındaki yükseklik farkı h ölçülür",
          "en": "The height difference h between mercury levels is measured",
          "de": "Gemessen wird der Höhenunterschied h zwischen den Quecksilberspiegeln",
          "fr": "La différence de hauteur h entre les niveaux de mercure est mesurée",
          "ru": "Перепад высот h между уровнями ртути измеряется",
          "ar": "يتم قياس فرق الارتفاع h بين مستويات الزئبق",
          "zh": "测量汞水平之间的高度差 h",
          "ku": "Cûdahiya bilindahiya h di navbera astên mercury de tê pîvandin"
        },
        {
          "tr": "Açık hava basıncıyla toplanarak gaz basıncı hesaplanır",
          "en": "Gas pressure is calculated by adding it with the open air pressure",
          "de": "Der Gasdruck wird durch Addition mit dem Luftdruck im Freien berechnet",
          "fr": "La pression du gaz est calculée en l'ajoutant à la pression de l'air libre",
          "ru": "Давление газа рассчитывается путем сложения его с давлением открытого воздуха.",
          "ar": "يتم حساب ضغط الغاز عن طريق إضافته مع ضغط الهواء المفتوح",
          "zh": "气体压力是通过将其与开放气压相加来计算的",
          "ku": "Zexta gazê bi pêvekirina wê bi zexta hewaya vekirî re tê hesibandin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u12-twin01",
      "stem": {
        "tr": "0 °C de 4.48 litrelik sabit hacimli kapta 0.5 mol He gazının uyguladığı basınç kaç atmosferdir?",
        "en": "What is the pressure exerted by 0.5 mol He gas in a 4.48 liter fixed volume container at 0 °C?",
        "de": "Welchen Druck übt 0,5 mol He-Gas in einem 4,48-Liter-Behälter mit festem Volumen bei 0 °C aus?",
        "fr": "Quelle est la pression exercée par 0,5 mole de gaz He dans un récipient de 4,48 litres à volume fixe à 0 °C ?",
        "ru": "Какое давление оказывает 0,5 моль газа He в сосуде фиксированного объема емкостью 4,48 л при температуре 0 °C?",
        "ar": "ما هو الضغط الذي يمارسه 0.5 mol He من الغاز في حاوية ذات حجم ثابت سعة 4.48 لتر عند درجة حرارة 0 درجة مئوية؟",
        "zh": "0 °C 时，0.5 摩尔氦气在 4.48 升固定容积容器中施加的压力是多少？",
        "ku": "Zexta gaza 0,5 mol He di konteynirek 4,48 lîtreyî ya sabît di 0 °C de çend e?"
      },
      "options": [
        {
          "tr": "2.5 atm",
          "en": "2.5 atm",
          "de": "2,5 atm",
          "fr": "2,5 atm",
          "ru": "2,5 атм",
          "ar": "2.5 atm",
          "zh": "2.5个大气压",
          "ku": "2,5 atm"
        },
        {
          "tr": "1.0 atm",
          "en": "1.0 atm",
          "de": "1,0 atm",
          "fr": "1,0 atm",
          "ru": "1,0 атм",
          "ar": "1.0 atm",
          "zh": "1.0 个大气压",
          "ku": "1.0 atm"
        },
        {
          "tr": "5.0 atm",
          "en": "5.0 atm",
          "de": "5,0 atm",
          "fr": "5,0 atm",
          "ru": "5,0 атм",
          "ar": "5.0 atm",
          "zh": "5.0 个大气压",
          "ku": "5.0 atm"
        },
        {
          "tr": "0.5 atm",
          "en": "0.5 atm",
          "de": "0,5 atm",
          "fr": "0,5 atm",
          "ru": "0,5 атм",
          "ar": "0.5 atm",
          "zh": "0.5个大气压",
          "ku": "0,5 atm"
        },
        {
          "tr": "2.24 atm",
          "en": "2.24 atm",
          "de": "2,24 atm",
          "fr": "2,24 atm",
          "ru": "2,24 атм.",
          "ar": "2.24 atm",
          "zh": "2.24个大气压",
          "ku": "2.24 atm"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "P * V = n * R * T -> P * 4.48 = 0.5 * (22.4 / 273) * 273 -> P * 4.48 = 11.2 -> P = 11.2 / 4.48 = 2.5 atm.",
        "en": "P * V = n * R * T -> P * 4.48 = 0.5 * (22.4 / 273) * 273 -> P * 4.48 = 11.2 -> P = 11.2 / 4.48 = 2.5 atm.",
        "de": "P * V = n * R * T -> P * 4,48 = 0,5 * (22,4 / 273) * 273 -> P * 4,48 = 11,2 -> P = 11,2 / 4,48 = 2,5 atm.",
        "fr": "P * V = n * R * T -> P * 4,48 = 0,5 * (22,4 / 273) * 273 -> P * 4,48 = 11,2 -> P = 11,2 / 4,48 = 2,5 atm.",
        "ru": "P*V = n*R*T -> P*4,48 = 0,5*(22,4/273)*273 -> P*4,48 = 11,2 -> P = 11,2/4,48 = 2,5 атм.",
        "ar": "P * V = n * R * T -> P * 4.48 = 0.5 * (22.4 / 273) * 273 -> P * 4.48 = 11.2 -> P = 11.2 / 4.48 = 2.5 atm.",
        "zh": "P * V = n * R * T -> P * 4.48 = 0.5 * (22.4 / 273) * 273 -> P * 4.48 = 11.2 -> P = 11.2 / 4.48 = 2.5 个大气压。",
        "ku": "P * V = n * R * T -> P * 4,48 = 0,5 * (22,4 / 273) * 273 -> P * 4,48 = 11,2 -> P = 11,2 / 4,48 = 2,5 atm."
      }
    },
    {
      "id": "u12-twin02",
      "stem": {
        "tr": "Sürtünmesiz ideal pistonlu bir kapta 27 °C de 2 litre hacim kaplayan bir miktar gazın sıcaklığı 327 °C ye çıkarılırsa hacmi kaç litre olur?",
        "en": "If the temperature of a gas occupying a volume of 2 liters at 27 °C in a frictionless ideal piston container is increased to 327 °C, how many liters will its volume be?",
        "de": "Wenn die Temperatur eines Gases, das in einem reibungsfreien idealen Kolbenbehälter ein Volumen von 2 Litern bei 27 °C einnimmt, auf 327 °C erhöht wird, wie viele Liter wird sein Volumen betragen?",
        "fr": "Si la température d'un gaz occupant un volume de 2 litres à 27 °C dans un récipient à piston idéal sans friction est augmentée à 327 °C, de combien de litres son volume sera-t-il ?",
        "ru": "Сколько литров составит его объем, если температуру газа, занимающего объем 2 литра, при температуре 27 °С в идеальном поршневом сосуде без трения повысить до 327 °С?",
        "ar": "إذا زادت درجة حرارة غاز يشغل حجمًا قدره 2 لترًا عند 27 درجة مئوية في حاوية مكبس مثالية عديمة الاحتكاك إلى 327 درجة مئوية، فكم لترًا سيكون حجمه؟",
        "zh": "如果在无摩擦的理想活塞容器中，27℃时体积为2升的气体温度升高到327℃，则其体积为多少升？",
        "ku": "Ger germahiya gaza ku 2 lître di 27 °C de di konteynireke pistonê ya îdeal a bê ferqê de digire, bibe 327 °C, wê qebareya wê çend lître be?"
      },
      "options": [
        {
          "tr": "4 L",
          "en": "4L",
          "de": "4L",
          "fr": "4L",
          "ru": "4л",
          "ar": "4 لتر",
          "zh": "4升",
          "ku": "4L"
        },
        {
          "tr": "24 L",
          "en": "24L",
          "de": "24L",
          "fr": "24L",
          "ru": "24л",
          "ar": "24 لتر",
          "zh": "24升",
          "ku": "24L"
        },
        {
          "tr": "1 L",
          "en": "1L",
          "de": "1L",
          "fr": "1L",
          "ru": "1л",
          "ar": "1 لتر",
          "zh": "1升",
          "ku": "1L"
        },
        {
          "tr": "8 L",
          "en": "8L",
          "de": "8L",
          "fr": "8L",
          "ru": "8л",
          "ar": "8 لتر",
          "zh": "8升",
          "ku": "8L"
        },
        {
          "tr": "6 L",
          "en": "6L",
          "de": "6L",
          "fr": "6L",
          "ru": "6л",
          "ar": "6 لتر",
          "zh": "6升",
          "ku": "6L"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "T1 = 27 + 273 = 300 K; T2 = 327 + 273 = 600 K. Sıcaklık 2 katına çıktığından hacim V2 = 2 * 2 = 4 litre olur.",
        "en": "T1 = 27 + 273 = 300 K; T2 = 327 + 273 = 600 K. Since the temperature doubles, the volume becomes V2 = 2 * 2 = 4 liters.",
        "de": "T1 = 27 + 273 = 300 K; T2 = 327 + 273 = 600 K. Da sich die Temperatur verdoppelt, beträgt das Volumen V2 = 2 * 2 = 4 Liter.",
        "fr": "T1 = 27 + 273 = 300 K ; T2 = 327 + 273 = 600 K. Puisque la température double, le volume devient V2 = 2 * 2 = 4 litres.",
        "ru": "Т1 = 27 + 273 = 300 К; Т2 = 327 + 273 = 600 К. Поскольку температура увеличивается в два раза, объем становится V2 = 2*2 = 4 литра.",
        "ar": "T1 = 27 + 273 = 300 كلفن؛ T2 = 327 + 273 = 600 K. وبما أن درجة الحرارة تتضاعف، يصبح الحجم V2 = 2 * 2 = 4 لتر.",
        "zh": "T1 = 27 + 273 = 300 K； T2 = 327 + 273 = 600 K。由于温度加倍，体积变为 V2 = 2 * 2 = 4 升。",
        "ku": "T1 = 27 + 273 = 300 K; T2 = 327 + 273 = 600 K. Ji ber ku germahî du qat dibe, hêjmar dibe V2 = 2 * 2 = 4 lître."
      }
    },
    {
      "id": "u12-twin03",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Gazlar: Yasalar ve İdeal Gaz konusunu işlerken Gay-Lussac Yasası üzerine sorduğu sorunun doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During a laboratory inquiry on Gases: Laws & Ideal Gas, which statement regarding Gay-Lussac's Law represents the correct answer?",
        "de": "Welche Aussage zu Gay-Lussacs Gesetz stellt im Kontext von Gase: Gesetze & Ideales Gas die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l étude expérimentale de Gaz: Lois & Gaz Idéal, quelle proposition sur Loi de Gay-Lussac constitue la réponse exacte?",
        "ru": "В ходе лабораторного изучения темы «Газы: законы и идеальный газ», какой ответ относительно «Закон Гей-Люссака» является правильным?",
        "ar": "أثناء دراسة موضوع \"الغازات: القوانين والغاز المثالي\" مخبرياً، أي إجابة بخصوص \"قانون جاي لوساك\" تمثل الإجابة الصحيحة؟",
        "zh": "在“气体：定律与理想气体”实验探究与教学分析中，针对“盖-吕萨克定律”所提问题的正确答案是？",
        "ku": "Di lêkolîna ezmûnî ya li ser \"Gaz: Zagon û Gaza Îdeal\" de, kîjan bersiv derbarê \"Qanûna Gay-Lussac\" de rast e?"
      },
      "options": [
        {
          "tr": "Farklı gazların eşit hacimleri daima eşit kütleye sahiptir.",
          "en": "Equal volumes of different gases always have equal mass.",
          "de": "Gleiche Volumina verschiedener Gase haben immer die gleiche Masse.",
          "fr": "Des volumes égaux de gaz différents ont toujours une masse égale.",
          "ru": "Равные объемы разных газов всегда имеют одинаковую массу.",
          "ar": "دائمًا ما تكون للأحجام المتساوية من الغازات المختلفة كتلة متساوية.",
          "zh": "相同体积的不同气体总是具有相同的质量。",
          "ku": "Hecma yeksan a gazên cuda timî xwedî girseya yeksan in."
        },
        {
          "tr": "Çelik kapalı kaplarda gazın basıncı daima atmosfer basıncına eşittir.",
          "en": "In closed steel containers, the pressure of the gas is always equal to atmospheric pressure.",
          "de": "In geschlossenen Stahlbehältern ist der Druck des Gases immer gleich dem Atmosphärendruck.",
          "fr": "Dans des conteneurs en acier fermés, la pression du gaz est toujours égale à la pression atmosphérique.",
          "ru": "В закрытых стальных емкостях давление газа всегда равно атмосферному давлению.",
          "ar": "في الحاويات الفولاذية المغلقة، يكون ضغط الغاز دائمًا مساويًا للضغط الجوي.",
          "zh": "在封闭的钢制容器中，气体的压力始终等于大气压。",
          "ku": "Di konteynerên pola yên girtî de, zexta gazê her dem bi zexta atmosferê re ye."
        },
        {
          "tr": "Boyle Yasası: Sabit sıcaklık ve mol sayısında basınç ile hacim ters orantılıdır (P1V1 = P2V2).",
          "en": "Boyle's Law: At constant temperature and number of moles, pressure and volume are inversely proportional (P1V1 = P2V2).",
          "de": "Boyles Gesetz: Bei konstanter Temperatur und Molzahl sind Druck und Volumen umgekehrt proportional (P1V1 = P2V2).",
          "fr": "Loi de Boyle : À température et nombre de taupes constants, la pression et le volume sont inversement proportionnels (P1V1 = P2V2).",
          "ru": "Закон Бойля: При постоянной температуре и количестве молей давление и объем обратно пропорциональны (P1V1 = P2V2).",
          "ar": "قانون بويل: عند ثبات درجة الحرارة وعدد المولات، يتناسب الضغط والحجم عكسيا (P1V1 = P2V2).",
          "zh": "波义耳定律：在恒定的温度和摩尔数下，压力和体积成反比（P1V1 = P2V2）。",
          "ku": "Zagona Boyle: Di germahîya domdar û hejmara molan de, zext û qebare berovajî hev in (P1V1 = P2V2)."
        },
        {
          "tr": "Gaz kabın dibine üst kısmından daha yüksek basınç uygular.",
          "en": "The gas exerts higher pressure at the bottom of the container than at the top.",
          "de": "Am Boden des Behälters übt das Gas einen höheren Druck aus als oben.",
          "fr": "Le gaz exerce une pression plus élevée au fond du récipient qu’en haut.",
          "ru": "Газ оказывает более высокое давление внизу контейнера, чем вверху.",
          "ar": "يمارس الغاز ضغطًا أعلى في قاع الحاوية مقارنةً بالأعلى.",
          "zh": "气体在容器底部施加的压力高于顶部。",
          "ku": "Gaz li binê konteynerê ji ya jorîn zextek bilindtir dike."
        },
        {
          "tr": "Pistonlu kaba gaz eklendiğinde iç basınç hızla artar.",
          "en": "When gas is added to the reciprocating vessel, the internal pressure increases rapidly.",
          "de": "Wenn dem Kolbenbehälter Gas zugeführt wird, steigt der Innendruck schnell an.",
          "fr": "Lorsque du gaz est ajouté au récipient alternatif, la pression interne augmente rapidement.",
          "ru": "Когда газ добавляется в возвратно-поступательный сосуд, внутреннее давление быстро увеличивается.",
          "ar": "عند إضافة الغاز إلى الوعاء الترددي، يزداد الضغط الداخلي بسرعة.",
          "zh": "当往复式容器中添加气体时，内部压力迅速增加。",
          "ku": "Dema ku gaz li keştiya veguhestinê tê zêdekirin, zexta hundur zû zêde dibe."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Boyle Yasası: Sabit sıcaklık ve mol sayısında basınç ile hacim ters orantılıdır (P1V1 = P2V2).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Boyle's Law: At constant temperature and number of moles, pressure and volume are inversely proportional (P1V1 = P2V2).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Boyles Gesetz: Bei konstanter Temperatur und Molzahl sind Druck und Volumen umgekehrt proportional (P1V1 = P2V2).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Loi de Boyle : À température et nombre de taupes constants, la pression et le volume sont inversement proportionnels (P1V1 = P2V2).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Закон Бойля: При постоянной температуре и количестве молей давление и объем обратно пропорциональны (P1V1 = P2V2).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قانون بويل: عند ثبات درجة الحرارة وعدد المولات، يتناسب الضغط والحجم عكسيا (P1V1 = P2V2).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“波义耳定律：在恒定的温度和摩尔数下，压力和体积成反比（P1V1 = P2V2）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Zagona Boyle: Di germahîya domdar û hejmara molan de, zext û qebare berovajî hev in (P1V1 = P2V2).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u12-twin04",
      "stem": {
        "tr": "Kimya dersinde Gazlar: Yasalar ve İdeal Gaz ünitesi incelenirken Sabit Hacimli Kap ile ilgili ileri sürülen aşağıdaki yargılardan hangisi bilimsel gerçektir?",
        "en": "When analyzing the unit Gases: Laws & Ideal Gas, which of the following propositions concerning Fixed Volume Container is a verified scientific fact?",
        "de": "Bei der Untersuchung von Gase: Gesetze & Ideales Gas: Welche Behauptung bezüglich Container mit festem Volumen entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l unité Gaz: Lois & Gaz Idéal, laquelle des affirmations suivantes concernant Conteneur à volume fixe est un fait scientifique avéré?",
        "ru": "При рассмотрении темы «Газы: законы и идеальный газ», какое из следующих суждений о «Контейнер фиксированного объема» выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الغازات: القوانين والغاز المثالي\"، أي من الأحكام التالية المتعلقة بـ \"حاوية ذات حجم ثابت\" تعتبر حقيقة علمية؟",
        "zh": "在系统辨析“气体：定律与理想气体”核心规律时，下列关于“固定容积容器”的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Gaz: Zagon û Gaza Îdeal\" tê kirin, kîjan daraza li ser \"Konteynirê Voluma Sabît\" rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Gaz yoğunluğu sıcaklık arttıkça artar.",
          "en": "Gas density increases as temperature increases.",
          "de": "Die Gasdichte nimmt mit steigender Temperatur zu.",
          "fr": "La densité du gaz augmente à mesure que la température augmente.",
          "ru": "Плотность газа увеличивается с повышением температуры.",
          "ar": "تزداد كثافة الغاز مع زيادة درجة الحرارة.",
          "zh": "气体密度随着温度升高而增加。",
          "ku": "Her ku germahî zêde dibe, tîrêjiya gazê zêde dibe."
        },
        {
          "tr": "Gaz molekülleri sadece dairesel yörüngelerde hareket eder.",
          "en": "Gas molecules move only in circular orbits.",
          "de": "Gasmoleküle bewegen sich ausschließlich auf Kreisbahnen.",
          "fr": "Les molécules de gaz se déplacent uniquement sur des orbites circulaires.",
          "ru": "Молекулы газа движутся только по круговым орбитам.",
          "ar": "تتحرك جزيئات الغاز في مدارات دائرية فقط.",
          "zh": "气体分子仅沿圆形轨道运动。",
          "ku": "Molekulên gazê tenê di dorhêlên dorhêl de digerin."
        },
        {
          "tr": "Birbiri içinde çözünmeyen heterojen gaz karışımları vardır.",
          "en": "There are heterogeneous gas mixtures that are insoluble in each other.",
          "de": "Es gibt heterogene Gasgemische, die ineinander unlöslich sind.",
          "fr": "Il existe des mélanges de gaz hétérogènes insolubles les uns dans les autres.",
          "ru": "Существуют гетерогенные газовые смеси, нерастворимые друг в друге.",
          "ar": "هناك مخاليط غازية غير متجانسة غير قابلة للذوبان في بعضها البعض.",
          "zh": "存在互不相溶的异质气体混合物。",
          "ku": "Têkelên gazê yên heterojen hene ku di nav hev de nayên çareserkirin."
        },
        {
          "tr": "Charles Yasası: Sabit basınç ve mol sayısında hacim ile mutlak sıcaklık doğru orantılıdır (V1/T1 = V2/T2).",
          "en": "Charles' Law: At constant pressure and number of moles, volume and absolute temperature are directly proportional (V1/T1 = V2/T2).",
          "de": "Charles'sches Gesetz: Bei konstantem Druck und konstanter Molzahl sind Volumen und absolute Temperatur direkt proportional (V1/T1 = V2/T2).",
          "fr": "Loi de Charles : À pression et nombre de moles constants, le volume et la température absolue sont directement proportionnels (V1/T1 = V2/T2).",
          "ru": "Закон Шарля: при постоянном давлении и количестве молей объем и абсолютная температура прямо пропорциональны (V1/T1 = V2/T2).",
          "ar": "قانون تشارلز: عند الضغط الثابت وعدد المولات، يتناسب الحجم ودرجة الحرارة المطلقة طرديًا (V1/T1 = V2/T2).",
          "zh": "查尔斯定律：在恒定压力和摩尔数下，体积和绝对温度成正比（V1/T1 = V2/T2）。",
          "ku": "Zagona Charles: Di zexta domdar û hejmara molan de, volt û germahiya mutleq rasterast lihevhatî ne (V1/T1 = V2/T2)."
        },
        {
          "tr": "Sıcaklık 25 °C den 50 °C ye çıkarsa basınç iki katına çıkar.",
          "en": "If the temperature increases from 25 °C to 50 °C, the pressure doubles.",
          "de": "Steigt die Temperatur von 25 °C auf 50 °C, verdoppelt sich der Druck.",
          "fr": "Si la température passe de 25 °C à 50 °C, la pression double.",
          "ru": "Если температура увеличивается с 25 °C до 50 °C, давление удваивается.",
          "ar": "إذا ارتفعت درجة الحرارة من 25 درجة مئوية إلى 50 درجة مئوية، يتضاعف الضغط.",
          "zh": "如果温度从 25 °C 升高到 50 °C，压力就会加倍。",
          "ku": "Ger germahî ji 25 °C heta 50 °C zêde bibe, zext du qat dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Charles Yasası: Sabit basınç ve mol sayısında hacim ile mutlak sıcaklık doğru orantılıdır (V1/T1 = V2/T2).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Charles' Law: At constant pressure and number of moles, volume and absolute temperature are directly proportional (V1/T1 = V2/T2).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Charles'sches Gesetz: Bei konstantem Druck und konstanter Molzahl sind Volumen und absolute Temperatur direkt proportional (V1/T1 = V2/T2).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Loi de Charles : À pression et nombre de moles constants, le volume et la température absolue sont directement proportionnels (V1/T1 = V2/T2).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Закон Шарля: при постоянном давлении и количестве молей объем и абсолютная температура прямо пропорциональны (V1/T1 = V2/T2).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قانون تشارلز: عند الضغط الثابت وعدد المولات، يتناسب الحجم ودرجة الحرارة المطلقة طرديًا (V1/T1 = V2/T2).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“查尔斯定律：在恒定压力和摩尔数下，体积和绝对温度成正比（V1/T1 = V2/T2）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Zagona Charles: Di zexta domdar û hejmara molan de, volt û germahiya mutleq rasterast lihevhatî ne (V1/T1 = V2/T2).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u12-twin05",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Gazlar: Yasalar ve İdeal Gaz konusundaki temel kimyasal kurallar çerçevesinde Gaz Yoğunluğu (d = PM/RT) kavramını en doğru açıklayan ifadedir?",
        "en": "Which of the following most accurately describes Gas Density (d = PM/RT) within the fundamental principles of Gases: Laws & Ideal Gas?",
        "de": "Welche Aussage beschreibt das Konzept Gasdichte (d = PM/RT) im Rahmen von Gase: Gesetze & Ideales Gas am präzisesten?",
        "fr": "Laquelle des propositions suivantes décrit le plus fidèlement Densité du gaz (d = PM/RT) selon les lois de Gaz: Lois & Gaz Idéal?",
        "ru": "Какое из утверждений наиболее точно описывает понятие «Плотность газа (d = PM/RT)» в рамках темы «Газы: законы и идеальный газ»?",
        "ar": "أي مما يلي يعبر بأعلى درجات الدقة عن مفهوم \"كثافة الغاز (د = PM/RT)\" ضمن قواعد \"الغازات: القوانين والغاز المثالي\"؟",
        "zh": "根据“气体：定律与理想气体”的基本化学原理，下列哪项阐述能最准确地界定“气体密度 (d = PM/RT)”这一核心概念？",
        "ku": "Kîjan ji van vebijarkan têgeha \"Tîrêjiya gazê (d = PM/RT)\" di çarçoveya prensîbên \"Gaz: Zagon û Gaza Îdeal\" de herî rast rave dike?"
      },
      "options": [
        {
          "tr": "Birleşik gaz denkleminde gazın türü formülü değiştirir.",
          "en": "In the combined gas equation, the type of gas changes the formula.",
          "de": "In der kombinierten Gasgleichung ändert die Art des Gases die Formel.",
          "fr": "Dans l’équation des gaz combinés, le type de gaz change la formule.",
          "ru": "В объединенном уравнении газа тип газа меняет формулу.",
          "ar": "في معادلة الغاز المدمجة، يغير نوع الغاز الصيغة.",
          "zh": "在组合气体方程中，气体类型改变了公式。",
          "ku": "Di hevkêşana gaza hevgirtî de, cureya gazê formulê diguherîne."
        },
        {
          "tr": "Gaz tanecikleri çarptıkça kinetik enerjileri zamanla sıfıra düşer.",
          "en": "As gas particles collide, their kinetic energy decreases to zero over time.",
          "de": "Wenn Gasteilchen kollidieren, sinkt ihre kinetische Energie mit der Zeit auf Null.",
          "fr": "Lorsque les particules de gaz entrent en collision, leur énergie cinétique diminue jusqu'à zéro avec le temps.",
          "ru": "Когда частицы газа сталкиваются, их кинетическая энергия со временем уменьшается до нуля.",
          "ar": "عند تصادم جزيئات الغاز، تنخفض الطاقة الحركية لها إلى الصفر مع مرور الوقت.",
          "zh": "当气体粒子碰撞时，它们的动能随着时间的推移减少到零。",
          "ku": "Her ku pariyên gazê li hev dikevin, enerjiya wan a kînetîk bi demê re dadikeve sifirê."
        },
        {
          "tr": "Manometre havanın nemini ölçen alettir.",
          "en": "Manometer is a device that measures the humidity of the air.",
          "de": "Manometer ist ein Gerät, das die Luftfeuchtigkeit misst.",
          "fr": "Le manomètre est un appareil qui mesure l'humidité de l'air.",
          "ru": "Манометр – прибор, измеряющий влажность воздуха.",
          "ar": "المانومتر هو جهاز يقيس رطوبة الهواء.",
          "zh": "压力计是测量空气湿度的装置。",
          "ku": "Manometre amûrek e ku nemahiya hewayê dipîve."
        },
        {
          "tr": "İdeal gaz denkleminde sıcaklık Celsius (°C) olarak kullanılır.",
          "en": "In the ideal gas equation, temperature is used in Celsius (°C).",
          "de": "In der idealen Gasgleichung wird die Temperatur in Celsius (°C) verwendet.",
          "fr": "Dans l’équation des gaz parfaits, la température est utilisée en Celsius (°C).",
          "ru": "В уравнении идеального газа температура используется в градусах Цельсия (°C).",
          "ar": "في معادلة الغاز المثالي، يتم استخدام درجة الحرارة بالدرجة المئوية (درجة مئوية).",
          "zh": "在理想气体方程中，温度以摄氏度 (°C) 为单位。",
          "ku": "Di hevkêşeya gazê ya îdeal de, germahî bi Celsius (°C) tê bikaranîn."
        },
        {
          "tr": "Gay-Lussac Yasası: Sabit hacim ve mol sayısında basınç ile mutlak sıcaklık doğru orantılıdır (P1/T1 = P2/T2).",
          "en": "Gay-Lussac's Law: Pressure and absolute temperature are directly proportional to constant volume and number of moles (P1/T1 = P2/T2).",
          "de": "Gay-Lussac-Gesetz: Druck und absolute Temperatur sind direkt proportional zum konstanten Volumen und der Molzahl (P1/T1 = P2/T2).",
          "fr": "Loi de Gay-Lussac : La pression et la température absolue sont directement proportionnelles au volume et au nombre de moles constants (P1/T1 = P2/T2).",
          "ru": "Закон Гей-Люссака: Давление и абсолютная температура прямо пропорциональны постоянному объему и количеству молей (P1/T1 = P2/T2).",
          "ar": "قانون جاي لوساك: الضغط ودرجة الحرارة المطلقة يتناسبان طرديا مع الحجم الثابت وعدد المولات (P1/T1 = P2/T2).",
          "zh": "盖吕萨克定律：压力和绝对温度与恒定体积和摩尔数成正比（P1/T1 = P2/T2）。",
          "ku": "Zagona Gay-Lussac: Zext û germahiya mutleq rasterast bi qebareya domdar û hejmara molan re têkildar in (P1/T1 = P2/T2)."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Gay-Lussac Yasası: Sabit hacim ve mol sayısında basınç ile mutlak sıcaklık doğru orantılıdır (P1/T1 = P2/T2).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Gay-Lussac's Law: Pressure and absolute temperature are directly proportional to constant volume and number of moles (P1/T1 = P2/T2).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Gay-Lussac-Gesetz: Druck und absolute Temperatur sind direkt proportional zum konstanten Volumen und der Molzahl (P1/T1 = P2/T2).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Loi de Gay-Lussac : La pression et la température absolue sont directement proportionnelles au volume et au nombre de moles constants (P1/T1 = P2/T2).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Закон Гей-Люссака: Давление и абсолютная температура прямо пропорциональны постоянному объему и количеству молей (P1/T1 = P2/T2).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قانون جاي لوساك: الضغط ودرجة الحرارة المطلقة يتناسبان طرديا مع الحجم الثابت وعدد المولات (P1/T1 = P2/T2).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“盖吕萨克定律：压力和绝对温度与恒定体积和摩尔数成正比（P1/T1 = P2/T2）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Zagona Gay-Lussac: Zext û germahiya mutleq rasterast bi qebareya domdar û hejmara molan re têkildar in (P1/T1 = P2/T2).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u12-twin06",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Gazlar: Yasalar ve İdeal Gaz sorularında karşılaşılan Kısmi Basınç konusunda doğru olan yargı hangisidir?",
        "en": "In standard university entrance exams covering Gases: Laws & Ideal Gas, which assertion regarding Partial Pressure is correct?",
        "de": "Welche Feststellung bezüglich Partialdruck ist nach den chemischen Gesetzmäßigkeiten von Gase: Gesetze & Ideales Gas richtig?",
        "fr": "Dans les épreuves universitaires portant sur Gaz: Lois & Gaz Idéal, quelle affirmation concernant Pression partielle est correcte?",
        "ru": "В экзаменационных заданиях по теме «Газы: законы и идеальный газ», какое положение относительно «Парциальное давление» является верным?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الغازات: القوانين والغاز المثالي\"، أي حكم متعلق بـ \"الضغط الجزئي\" يعتبر صحيحاً؟",
        "zh": "在高考“气体：定律与理想气体”经典考题中，下列有关“分压”的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Gaz: Zagon û Gaza Îdeal\" de, kîjan daraza li ser \"Zexta qismî\" rast e?"
      },
      "options": [
        {
          "tr": "Avogadro Yasası: Sabit sıcaklık ve basınçta hacim ile mol sayısı doğru orantılıdır (V1/n1 = V2/n2).",
          "en": "Avogadro's Law: At constant temperature and pressure, volume and number of moles are directly proportional (V1/n1 = V2/n2).",
          "de": "Avogadro-Gesetz: Bei konstanter Temperatur und konstantem Druck sind Volumen und Molzahl direkt proportional (V1/n1 = V2/n2).",
          "fr": "Loi d'Avogadro : À température et pression constantes, le volume et le nombre de moles sont directement proportionnels (V1/n1 = V2/n2).",
          "ru": "Закон Авогадро: При постоянных температуре и давлении объем и количество молей прямо пропорциональны (V1/n1 = V2/n2).",
          "ar": "قانون أفوجادرو: عند ثبات درجة الحرارة والضغط، يتناسب الحجم وعدد المولات تناسبًا طرديًا (V1/n1 = V2/n2).",
          "zh": "阿伏加德罗定律：在恒温恒压下，体积与摩尔数成正比（V1/n1 = V2/n2）。",
          "ku": "Zagona Avogadro: Di germahî û zexta domdar de, hejmûn û hejmara molan rasterast lihevhatî ne (V1/n1 = V2/n2)."
        },
        {
          "tr": "Çelik kapalı kaplarda gazın basıncı daima atmosfer basıncına eşittir.",
          "en": "In closed steel containers, the pressure of the gas is always equal to atmospheric pressure.",
          "de": "In geschlossenen Stahlbehältern ist der Druck des Gases immer gleich dem Atmosphärendruck.",
          "fr": "Dans des conteneurs en acier fermés, la pression du gaz est toujours égale à la pression atmosphérique.",
          "ru": "В закрытых стальных емкостях давление газа всегда равно атмосферному давлению.",
          "ar": "في الحاويات الفولاذية المغلقة، يكون ضغط الغاز دائمًا مساويًا للضغط الجوي.",
          "zh": "在封闭的钢制容器中，气体的压力始终等于大气压。",
          "ku": "Di konteynerên pola yên girtî de, zexta gazê her dem bi zexta atmosferê re ye."
        },
        {
          "tr": "Gaz kabın dibine üst kısmından daha yüksek basınç uygular.",
          "en": "The gas exerts higher pressure at the bottom of the container than at the top.",
          "de": "Am Boden des Behälters übt das Gas einen höheren Druck aus als oben.",
          "fr": "Le gaz exerce une pression plus élevée au fond du récipient qu’en haut.",
          "ru": "Газ оказывает более высокое давление внизу контейнера, чем вверху.",
          "ar": "يمارس الغاز ضغطًا أعلى في قاع الحاوية مقارنةً بالأعلى.",
          "zh": "气体在容器底部施加的压力高于顶部。",
          "ku": "Gaz li binê konteynerê ji ya jorîn zextek bilindtir dike."
        },
        {
          "tr": "Pistonlu kaba gaz eklendiğinde iç basınç hızla artar.",
          "en": "When gas is added to the reciprocating vessel, the internal pressure increases rapidly.",
          "de": "Wenn dem Kolbenbehälter Gas zugeführt wird, steigt der Innendruck schnell an.",
          "fr": "Lorsque du gaz est ajouté au récipient alternatif, la pression interne augmente rapidement.",
          "ru": "Когда газ добавляется в возвратно-поступательный сосуд, внутреннее давление быстро увеличивается.",
          "ar": "عند إضافة الغاز إلى الوعاء الترددي، يزداد الضغط الداخلي بسرعة.",
          "zh": "当往复式容器中添加气体时，内部压力迅速增加。",
          "ku": "Dema ku gaz li keştiya veguhestinê tê zêdekirin, zexta hundur zû zêde dibe."
        },
        {
          "tr": "Sıcaklık 10 °C den 20 °C ye çıktığında gazın mutlak sıcaklığı iki katına çıkmış olur.",
          "en": "When the temperature increases from 10 °C to 20 °C, the absolute temperature of the gas doubles.",
          "de": "Bei einem Temperaturanstieg von 10 °C auf 20 °C verdoppelt sich die absolute Temperatur des Gases.",
          "fr": "Lorsque la température passe de 10 °C à 20 °C, la température absolue du gaz double.",
          "ru": "При повышении температуры с 10°С до 20°С абсолютная температура газа удваивается.",
          "ar": "عندما ترتفع درجة الحرارة من 10 درجات مئوية إلى 20 درجة مئوية، تتضاعف درجة الحرارة المطلقة للغاز.",
          "zh": "当温度从10℃升高到20℃时，气体的绝对温度加倍。",
          "ku": "Dema ku germahî ji 10 °C derkeve 20 °C, germahiya mutleq ya gazê du qat dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Avogadro Yasası: Sabit sıcaklık ve basınçta hacim ile mol sayısı doğru orantılıdır (V1/n1 = V2/n2).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Avogadro's Law: At constant temperature and pressure, volume and number of moles are directly proportional (V1/n1 = V2/n2).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Avogadro-Gesetz: Bei konstanter Temperatur und konstantem Druck sind Volumen und Molzahl direkt proportional (V1/n1 = V2/n2).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Loi d'Avogadro : À température et pression constantes, le volume et le nombre de moles sont directement proportionnels (V1/n1 = V2/n2).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Закон Авогадро: При постоянных температуре и давлении объем и количество молей прямо пропорциональны (V1/n1 = V2/n2).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قانون أفوجادرو: عند ثبات درجة الحرارة والضغط، يتناسب الحجم وعدد المولات تناسبًا طرديًا (V1/n1 = V2/n2).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“阿伏加德罗定律：在恒温恒压下，体积与摩尔数成正比（V1/n1 = V2/n2）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Zagona Avogadro: Di germahî û zexta domdar de, hejmûn û hejmara molan rasterast lihevhatî ne (V1/n1 = V2/n2).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u12-twin07",
      "stem": {
        "tr": "Aşağıda Gazlar: Yasalar ve İdeal Gaz ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre Gaz Difüzyonu ile ilgili hangisi doğrudur?",
        "en": "Based on the fundamental principles of Gases: Laws & Ideal Gas, which statement about Gas Diffusion is scientifically accurate?",
        "de": "Auf der Grundlage der Einheit Gase: Gesetze & Ideales Gas: Welche Aussage über Gasdiffusion ist zutreffend?",
        "fr": "Sur la base des notions fondamentales de Gaz: Lois & Gaz Idéal, quelle affirmation relative à Diffusion de gaz est exacte?",
        "ru": "На основе фундаментальных положений темы «Газы: законы и идеальный газ», какое суждение о «Газовая диффузия» верно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الغازات: القوانين والغاز المثالي\"، أي عبارة حول \"انتشار الغاز\" صحيحة؟",
        "zh": "基于“气体：定律与理想气体”的基础化学知识体系，下列关于“气体扩散”的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Gaz: Zagon û Gaza Îdeal\", kîjan gotin derbarê \"Belavbûna Gazê\" de rast e?"
      },
      "options": [
        {
          "tr": "Gaz molekülleri sadece dairesel yörüngelerde hareket eder.",
          "en": "Gas molecules move only in circular orbits.",
          "de": "Gasmoleküle bewegen sich ausschließlich auf Kreisbahnen.",
          "fr": "Les molécules de gaz se déplacent uniquement sur des orbites circulaires.",
          "ru": "Молекулы газа движутся только по круговым орбитам.",
          "ar": "تتحرك جزيئات الغاز في مدارات دائرية فقط.",
          "zh": "气体分子仅沿圆形轨道运动。",
          "ku": "Molekulên gazê tenê di dorhêlên dorhêl de digerin."
        },
        {
          "tr": "Yoğunluk formülü: P * MA = d * R * T dir (Pirinç Mandalinayı daha Rahat Tartar).",
          "en": "Density formula: P * MA = d * R * T (Rice Weighs Tangerine More Easily).",
          "de": "Dichteformel: P * MA = d * R * T (Reis wiegt Mandarinen leichter).",
          "fr": "Formule de densité : P * MA = d * R * T (le riz pèse plus facilement la mandarine).",
          "ru": "Формула плотности: P*MA = d*R*T (рис легче взвешивает мандарин).",
          "ar": "صيغة الكثافة: P * MA = d * R * T (الأرز يزن اليوسفي بسهولة أكبر).",
          "zh": "密度公式：P * MA = d * R * T（大米更容易称量橘子）。",
          "ku": "Formula density: P * MA = d * R * T (Birinc Zêdetir Tangerine Digirîne)."
        },
        {
          "tr": "Birbiri içinde çözünmeyen heterojen gaz karışımları vardır.",
          "en": "There are heterogeneous gas mixtures that are insoluble in each other.",
          "de": "Es gibt heterogene Gasgemische, die ineinander unlöslich sind.",
          "fr": "Il existe des mélanges de gaz hétérogènes insolubles les uns dans les autres.",
          "ru": "Существуют гетерогенные газовые смеси, нерастворимые друг в друге.",
          "ar": "هناك مخاليط غازية غير متجانسة غير قابلة للذوبان في بعضها البعض.",
          "zh": "存在互不相溶的异质气体混合物。",
          "ku": "Têkelên gazê yên heterojen hene ku di nav hev de nayên çareserkirin."
        },
        {
          "tr": "Sıcaklık 25 °C den 50 °C ye çıkarsa basınç iki katına çıkar.",
          "en": "If the temperature increases from 25 °C to 50 °C, the pressure doubles.",
          "de": "Steigt die Temperatur von 25 °C auf 50 °C, verdoppelt sich der Druck.",
          "fr": "Si la température passe de 25 °C à 50 °C, la pression double.",
          "ru": "Если температура увеличивается с 25 °C до 50 °C, давление удваивается.",
          "ar": "إذا ارتفعت درجة الحرارة من 25 درجة مئوية إلى 50 درجة مئوية، يتضاعف الضغط.",
          "zh": "如果温度从 25 °C 升高到 50 °C，压力就会加倍。",
          "ku": "Ger germahî ji 25 °C heta 50 °C zêde bibe, zext du qat dibe."
        },
        {
          "tr": "Sabit sıcaklıkta gazın hacmi sıkıştırılarak yarıya indirilirse basıncı da yarıya iner.",
          "en": "If the volume of a gas at constant temperature is halved by compression, its pressure is also halved.",
          "de": "Wenn das Volumen eines Gases bei konstanter Temperatur durch Kompression halbiert wird, halbiert sich auch sein Druck.",
          "fr": "Si le volume d’un gaz à température constante est réduit de moitié par compression, sa pression est également réduite de moitié.",
          "ru": "Если объем газа при постоянной температуре уменьшить вдвое в результате сжатия, его давление также уменьшится вдвое.",
          "ar": "إذا انخفض حجم الغاز عند درجة حرارة ثابتة إلى النصف عن طريق الضغط، فإن ضغطه ينخفض ​​أيضًا إلى النصف.",
          "zh": "如果恒定温度下气体的体积因压缩而减半，则其压力也减半。",
          "ku": "Ger qebareya gazê ya di germahiya sabît de bi pêçandinê nîvî bibe, zexta wê jî nîvî dibe."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Yoğunluk formülü: P * MA = d * R * T dir (Pirinç Mandalinayı daha Rahat Tartar).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Density formula: P * MA = d * R * T (Rice Weighs Tangerine More Easily).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Dichteformel: P * MA = d * R * T (Reis wiegt Mandarinen leichter).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Formule de densité : P * MA = d * R * T (le riz pèse plus facilement la mandarine).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Формула плотности: P*MA = d*R*T (рис легче взвешивает мандарин).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"صيغة الكثافة: P * MA = d * R * T (الأرز يزن اليوسفي بسهولة أكبر).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“密度公式：P * MA = d * R * T（大米更容易称量橘子）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Formula density: P * MA = d * R * T (Birinc Zêdetir Tangerine Digirîne).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u12-twin08",
      "stem": {
        "tr": "Gazlar: Yasalar ve İdeal Gaz konusu kapsamında Buhar ile ilgili yapılan çalışmalarda aşağıdaki bulgulardan hangisi bilimsel olarak doğrulanmıştır?",
        "en": "In the context of Gases: Laws & Ideal Gas, which of the following findings regarding Vapor is scientifically verified?",
        "de": "Im Rahmen der Einheit Gase: Gesetze & Ideales Gas: Welcher der folgenden Befunde zu Dampf ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l unité Gaz: Lois & Gaz Idéal, laquelle des constatations suivantes concernant Vapeur est scientifiquement vérifiée?",
        "ru": "В контексте темы «Газы: законы и идеальный газ», какой из следующих выводов относительно «Пар» научно подтверждён?",
        "ar": "في سياق موضوع \"الغازات: القوانين والغاز المثالي\"، أي من النتائج التالية المتعلقة بـ \"البخار\" مثبتة علمياً؟",
        "zh": "在“气体：定律与理想气体”主题范畴内，下列关于“蒸气”的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Gaz: Zagon û Gaza Îdeal\" de, kîjan ji van encamên li ser \"Buhar\" ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Gaz tanecikleri çarptıkça kinetik enerjileri zamanla sıfıra düşer.",
          "en": "As gas particles collide, their kinetic energy decreases to zero over time.",
          "de": "Wenn Gasteilchen kollidieren, sinkt ihre kinetische Energie mit der Zeit auf Null.",
          "fr": "Lorsque les particules de gaz entrent en collision, leur énergie cinétique diminue jusqu'à zéro avec le temps.",
          "ru": "Когда частицы газа сталкиваются, их кинетическая энергия со временем уменьшается до нуля.",
          "ar": "عند تصادم جزيئات الغاز، تنخفض الطاقة الحركية لها إلى الصفر مع مرور الوقت.",
          "zh": "当气体粒子碰撞时，它们的动能随着时间的推移减少到零。",
          "ku": "Her ku pariyên gazê li hev dikevin, enerjiya wan a kînetîk bi demê re dadikeve sifirê."
        },
        {
          "tr": "Manometre havanın nemini ölçen alettir.",
          "en": "Manometer is a device that measures the humidity of the air.",
          "de": "Manometer ist ein Gerät, das die Luftfeuchtigkeit misst.",
          "fr": "Le manomètre est un appareil qui mesure l'humidité de l'air.",
          "ru": "Манометр – прибор, измеряющий влажность воздуха.",
          "ar": "المانومتر هو جهاز يقيس رطوبة الهواء.",
          "zh": "压力计是测量空气湿度的装置。",
          "ku": "Manometre amûrek e ku nemahiya hewayê dipîve."
        },
        {
          "tr": "Birleşik gaz denklemi: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2) dir.",
          "en": "The combined gas equation is: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
          "de": "Die kombinierte Gasgleichung lautet: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
          "fr": "L'équation des gaz combinés est la suivante : (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
          "ru": "Комбинированное уравнение газа: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
          "ar": "معادلة الغاز المجمعة هي: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
          "zh": "组合气体方程为：(P1*V1) / (n1*T1) = (P2*V2) / (n2*T2)。",
          "ku": "Wekheviya gazê ya hevgirtî ev e: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2)."
        },
        {
          "tr": "İdeal gaz denkleminde sıcaklık Celsius (°C) olarak kullanılır.",
          "en": "In the ideal gas equation, temperature is used in Celsius (°C).",
          "de": "In der idealen Gasgleichung wird die Temperatur in Celsius (°C) verwendet.",
          "fr": "Dans l’équation des gaz parfaits, la température est utilisée en Celsius (°C).",
          "ru": "В уравнении идеального газа температура используется в градусах Цельсия (°C).",
          "ar": "في معادلة الغاز المثالي، يتم استخدام درجة الحرارة بالدرجة المئوية (درجة مئوية).",
          "zh": "在理想气体方程中，温度以摄氏度 (°C) 为单位。",
          "ku": "Di hevkêşeya gazê ya îdeal de, germahî bi Celsius (°C) tê bikaranîn."
        },
        {
          "tr": "Gazın sıcaklığı 20 °C den 40 °C ye çıktığında hacmi tam 2 katına çıkar.",
          "en": "When the temperature of the gas increases from 20 °C to 40 °C, its volume doubles.",
          "de": "Steigt die Temperatur des Gases von 20 °C auf 40 °C, verdoppelt sich sein Volumen.",
          "fr": "Lorsque la température du gaz passe de 20 °C à 40 °C, son volume double.",
          "ru": "При повышении температуры газа с 20°С до 40°С его объём увеличивается вдвое.",
          "ar": "عندما ترتفع درجة حرارة الغاز من 20 درجة مئوية إلى 40 درجة مئوية، يتضاعف حجمه.",
          "zh": "当气体的温度从20℃升高到40℃时，其体积增加一倍。",
          "ku": "Dema ku germahiya gazê ji 20 °C derkeve 40 °C, qebareya wê du qat dibe."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Birleşik gaz denklemi: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2) dir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The combined gas equation is: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die kombinierte Gasgleichung lautet: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'équation des gaz combinés est la suivante : (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Комбинированное уравнение газа: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"معادلة الغاز المجمعة هي: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“组合气体方程为：(P1*V1) / (n1*T1) = (P2*V2) / (n2*T2)。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Wekheviya gazê ya hevgirtî ev e: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u12-twin09",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Gazlar: Yasalar ve İdeal Gaz ünitesinde ele alınan Boyle Yasası hakkında verilen ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Gases: Laws & Ideal Gas, which statement about Boyle's Law is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Gase: Gesetze & Ideales Gas: Welche Aussage über Boyles Gesetz ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d examen de Gaz: Lois & Gaz Idéal, quelle affirmation relative à Loi de Boyle est rigoureusement exacte?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Газы: законы и идеальный газ», какое утверждение о «Закон Бойля» абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الغازات: القوانين والغاز المثالي\"، أي عبارة حول \"قانون بويل\" صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“气体：定律与理想气体”单元中关于“波义耳定律”的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Gaz: Zagon û Gaza Îdeal\", kîjan gotin li ser \"Qanûna Boyle\" bê guman rast e?"
      },
      "options": [
        {
          "tr": "Gaz kabın dibine üst kısmından daha yüksek basınç uygular.",
          "en": "The gas exerts higher pressure at the bottom of the container than at the top.",
          "de": "Am Boden des Behälters übt das Gas einen höheren Druck aus als oben.",
          "fr": "Le gaz exerce une pression plus élevée au fond du récipient qu’en haut.",
          "ru": "Газ оказывает более высокое давление внизу контейнера, чем вверху.",
          "ar": "يمارس الغاز ضغطًا أعلى في قاع الحاوية مقارنةً بالأعلى.",
          "zh": "气体在容器底部施加的压力高于顶部。",
          "ku": "Gaz li binê konteynerê ji ya jorîn zextek bilindtir dike."
        },
        {
          "tr": "Pistonlu kaba gaz eklendiğinde iç basınç hızla artar.",
          "en": "When gas is added to the reciprocating vessel, the internal pressure increases rapidly.",
          "de": "Wenn dem Kolbenbehälter Gas zugeführt wird, steigt der Innendruck schnell an.",
          "fr": "Lorsque du gaz est ajouté au récipient alternatif, la pression interne augmente rapidement.",
          "ru": "Когда газ добавляется в возвратно-поступательный сосуд, внутреннее давление быстро увеличивается.",
          "ar": "عند إضافة الغاز إلى الوعاء الترددي، يزداد الضغط الداخلي بسرعة.",
          "zh": "当往复式容器中添加气体时，内部压力迅速增加。",
          "ku": "Dema ku gaz li keştiya veguhestinê tê zêdekirin, zexta hundur zû zêde dibe."
        },
        {
          "tr": "Sıcaklık 10 °C den 20 °C ye çıktığında gazın mutlak sıcaklığı iki katına çıkmış olur.",
          "en": "When the temperature increases from 10 °C to 20 °C, the absolute temperature of the gas doubles.",
          "de": "Bei einem Temperaturanstieg von 10 °C auf 20 °C verdoppelt sich die absolute Temperatur des Gases.",
          "fr": "Lorsque la température passe de 10 °C à 20 °C, la température absolue du gaz double.",
          "ru": "При повышении температуры с 10°С до 20°С абсолютная температура газа удваивается.",
          "ar": "عندما ترتفع درجة الحرارة من 10 درجات مئوية إلى 20 درجة مئوية، تتضاعف درجة الحرارة المطلقة للغاز.",
          "zh": "当温度从10℃升高到20℃时，气体的绝对温度加倍。",
          "ku": "Dema ku germahî ji 10 °C derkeve 20 °C, germahiya mutleq ya gazê du qat dibe."
        },
        {
          "tr": "Sabit basınçlı sistemler sürtünmesiz pistonlu kaplar ve esnek balonlardır (iç basınç dış basınca eşittir).",
          "en": "Constant pressure systems are frictionless reciprocating vessels and flexible balloons (internal pressure equals external pressure).",
          "de": "Konstantdrucksysteme sind reibungsfreie hin- und hergehende Gefäße und flexible Ballons (Innendruck entspricht Außendruck).",
          "fr": "Les systèmes à pression constante sont des récipients à mouvement alternatif sans friction et des ballons flexibles (la pression interne est égale à la pression externe).",
          "ru": "Системы постоянного давления представляют собой сосуды, совершающие возвратно-поступательное движение без трения, и гибкие баллоны (внутреннее давление равно внешнему давлению).",
          "ar": "أنظمة الضغط الثابت عبارة عن أوعية ترددية عديمة الاحتكاك وبالونات مرنة (الضغط الداخلي يساوي الضغط الخارجي).",
          "zh": "恒压系统是无摩擦往复式容器和柔性气球（内部压力等于外部压力）。",
          "ku": "Pergalên zexta domdar keştiyên vegerê yên bê ferq û balonên maqûl in (zexta hundurîn wekî zexta derve ye)."
        },
        {
          "tr": "Sabit hacimli kapta gaz ısıtılırsa basıncı azalır.",
          "en": "If the gas is heated in a fixed volume container, its pressure decreases.",
          "de": "Wenn das Gas in einem Behälter mit festem Volumen erhitzt wird, sinkt sein Druck.",
          "fr": "Si le gaz est chauffé dans un récipient à volume fixe, sa pression diminue.",
          "ru": "Если газ нагревать в контейнере фиксированного объема, его давление снижается.",
          "ar": "إذا تم تسخين الغاز في حاوية ذات حجم ثابت، ينخفض ​​ضغطه.",
          "zh": "如果气体在固定体积的容器中被加热，其压力会降低。",
          "ku": "Ger gaz di konteynirek bi qebareya sabit de were germ kirin, zexta wê kêm dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Sabit basınçlı sistemler sürtünmesiz pistonlu kaplar ve esnek balonlardır (iç basınç dış basınca eşittir).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Constant pressure systems are frictionless reciprocating vessels and flexible balloons (internal pressure equals external pressure).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Konstantdrucksysteme sind reibungsfreie hin- und hergehende Gefäße und flexible Ballons (Innendruck entspricht Außendruck).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les systèmes à pression constante sont des récipients à mouvement alternatif sans friction et des ballons flexibles (la pression interne est égale à la pression externe).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Системы постоянного давления представляют собой сосуды, совершающие возвратно-поступательное движение без трения, и гибкие баллоны (внутреннее давление равно внешнему давлению).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"أنظمة الضغط الثابت عبارة عن أوعية ترددية عديمة الاحتكاك وبالونات مرنة (الضغط الداخلي يساوي الضغط الخارجي).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“恒压系统是无摩擦往复式容器和柔性气球（内部压力等于外部压力）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Pergalên zexta domdar keştiyên vegerê yên bê ferq û balonên maqûl in (zexta hundurîn wekî zexta derve ye).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u12-twin10",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Gazlar: Yasalar ve İdeal Gaz konusunu işlerken Pistonlu Kap üzerine sorduğu sorunun doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During a laboratory inquiry on Gases: Laws & Ideal Gas, which statement regarding Piston Vessel represents the correct answer?",
        "de": "Welche Aussage zu Kolbengefäß stellt im Kontext von Gase: Gesetze & Ideales Gas die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l étude expérimentale de Gaz: Lois & Gaz Idéal, quelle proposition sur Navire à pistons constitue la réponse exacte?",
        "ru": "В ходе лабораторного изучения темы «Газы: законы и идеальный газ», какой ответ относительно «Поршневой сосуд» является правильным?",
        "ar": "أثناء دراسة موضوع \"الغازات: القوانين والغاز المثالي\" مخبرياً، أي إجابة بخصوص \"سفينة المكبس\" تمثل الإجابة الصحيحة؟",
        "zh": "在“气体：定律与理想气体”实验探究与教学分析中，针对“活塞容器”所提问题的正确答案是？",
        "ku": "Di lêkolîna ezmûnî ya li ser \"Gaz: Zagon û Gaza Îdeal\" de, kîjan bersiv derbarê \"Keştiya Piston\" de rast e?"
      },
      "options": [
        {
          "tr": "Birbiri içinde çözünmeyen heterojen gaz karışımları vardır.",
          "en": "There are heterogeneous gas mixtures that are insoluble in each other.",
          "de": "Es gibt heterogene Gasgemische, die ineinander unlöslich sind.",
          "fr": "Il existe des mélanges de gaz hétérogènes insolubles les uns dans les autres.",
          "ru": "Существуют гетерогенные газовые смеси, нерастворимые друг в друге.",
          "ar": "هناك مخاليط غازية غير متجانسة غير قابلة للذوبان في بعضها البعض.",
          "zh": "存在互不相溶的异质气体混合物。",
          "ku": "Têkelên gazê yên heterojen hene ku di nav hev de nayên çareserkirin."
        },
        {
          "tr": "Sıcaklık 25 °C den 50 °C ye çıkarsa basınç iki katına çıkar.",
          "en": "If the temperature increases from 25 °C to 50 °C, the pressure doubles.",
          "de": "Steigt die Temperatur von 25 °C auf 50 °C, verdoppelt sich der Druck.",
          "fr": "Si la température passe de 25 °C à 50 °C, la pression double.",
          "ru": "Если температура увеличивается с 25 °C до 50 °C, давление удваивается.",
          "ar": "إذا ارتفعت درجة الحرارة من 25 درجة مئوية إلى 50 درجة مئوية، يتضاعف الضغط.",
          "zh": "如果温度从 25 °C 升高到 50 °C，压力就会加倍。",
          "ku": "Ger germahî ji 25 °C heta 50 °C zêde bibe, zext du qat dibe."
        },
        {
          "tr": "Sabit sıcaklıkta gazın hacmi sıkıştırılarak yarıya indirilirse basıncı da yarıya iner.",
          "en": "If the volume of a gas at constant temperature is halved by compression, its pressure is also halved.",
          "de": "Wenn das Volumen eines Gases bei konstanter Temperatur durch Kompression halbiert wird, halbiert sich auch sein Druck.",
          "fr": "Si le volume d’un gaz à température constante est réduit de moitié par compression, sa pression est également réduite de moitié.",
          "ru": "Если объем газа при постоянной температуре уменьшить вдвое в результате сжатия, его давление также уменьшится вдвое.",
          "ar": "إذا انخفض حجم الغاز عند درجة حرارة ثابتة إلى النصف عن طريق الضغط، فإن ضغطه ينخفض ​​أيضًا إلى النصف.",
          "zh": "如果恒定温度下气体的体积因压缩而减半，则其压力也减半。",
          "ku": "Ger qebareya gazê ya di germahiya sabît de bi pêçandinê nîvî bibe, zexta wê jî nîvî dibe."
        },
        {
          "tr": "Farklı gazların eşit hacimleri daima eşit kütleye sahiptir.",
          "en": "Equal volumes of different gases always have equal mass.",
          "de": "Gleiche Volumina verschiedener Gase haben immer die gleiche Masse.",
          "fr": "Des volumes égaux de gaz différents ont toujours une masse égale.",
          "ru": "Равные объемы разных газов всегда имеют одинаковую массу.",
          "ar": "دائمًا ما تكون للأحجام المتساوية من الغازات المختلفة كتلة متساوية.",
          "zh": "相同体积的不同气体总是具有相同的质量。",
          "ku": "Hecma yeksan a gazên cuda timî xwedî girseya yeksan in."
        },
        {
          "tr": "Gaz molekülleri her yöne doğrusal, rastgele ve hızlı hareket eder (Brown hareketi).",
          "en": "Gas molecules move linearly, randomly and rapidly in all directions (Brown motion).",
          "de": "Gasmoleküle bewegen sich linear, zufällig und schnell in alle Richtungen (Brown-Bewegung).",
          "fr": "Les molécules de gaz se déplacent de manière linéaire, aléatoire et rapide dans toutes les directions (mouvement Brown).",
          "ru": "Молекулы газа движутся линейно, хаотично и быстро во всех направлениях (движение Брауна).",
          "ar": "تتحرك جزيئات الغاز بشكل خطي وعشوائي وسريع في جميع الاتجاهات (الحركة البنية).",
          "zh": "气体分子在各个方向上线性、随机且快速地运动（布朗运动）。",
          "ku": "Molekulên gazê bi rêkûpêk, bi rasthatinî û bi lez di her alî de dimeşin (Tevgera qehweyî)."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Gaz molekülleri her yöne doğrusal, rastgele ve hızlı hareket eder (Brown hareketi).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Gas molecules move linearly, randomly and rapidly in all directions (Brown motion).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Gasmoleküle bewegen sich linear, zufällig und schnell in alle Richtungen (Brown-Bewegung).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les molécules de gaz se déplacent de manière linéaire, aléatoire et rapide dans toutes les directions (mouvement Brown).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Молекулы газа движутся линейно, хаотично и быстро во всех направлениях (движение Брауна).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تتحرك جزيئات الغاز بشكل خطي وعشوائي وسريع في جميع الاتجاهات (الحركة البنية).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“气体分子在各个方向上线性、随机且快速地运动（布朗运动）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Molekulên gazê bi rêkûpêk, bi rasthatinî û bi lez di her alî de dimeşin (Tevgera qehweyî).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u12-twin11",
      "stem": {
        "tr": "Kimya dersinde Gazlar: Yasalar ve İdeal Gaz ünitesi incelenirken Gay-Lussac Yasası ile ilgili ileri sürülen aşağıdaki yargılardan hangisi bilimsel gerçektir?",
        "en": "When analyzing the unit Gases: Laws & Ideal Gas, which of the following propositions concerning Gay-Lussac's Law is a verified scientific fact?",
        "de": "Bei der Untersuchung von Gase: Gesetze & Ideales Gas: Welche Behauptung bezüglich Gay-Lussacs Gesetz entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l unité Gaz: Lois & Gaz Idéal, laquelle des affirmations suivantes concernant Loi de Gay-Lussac est un fait scientifique avéré?",
        "ru": "При рассмотрении темы «Газы: законы и идеальный газ», какое из следующих суждений о «Закон Гей-Люссака» выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الغازات: القوانين والغاز المثالي\"، أي من الأحكام التالية المتعلقة بـ \"قانون جاي لوساك\" تعتبر حقيقة علمية؟",
        "zh": "在系统辨析“气体：定律与理想气体”核心规律时，下列关于“盖-吕萨克定律”的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Gaz: Zagon û Gaza Îdeal\" tê kirin, kîjan daraza li ser \"Qanûna Gay-Lussac\" rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Gaz tanecikleri arasındaki esnek çarpışmalarda toplam kinetik enerji ve momentum korunur.",
          "en": "In elastic collisions between gas particles, total kinetic energy and momentum are conserved.",
          "de": "Bei elastischen Kollisionen zwischen Gasteilchen bleiben die gesamte kinetische Energie und der Impuls erhalten.",
          "fr": "Dans les collisions élastiques entre particules de gaz, l’énergie cinétique totale et la quantité de mouvement sont conservées.",
          "ru": "При упругих столкновениях частиц газа полная кинетическая энергия и импульс сохраняются.",
          "ar": "في التصادمات المرنة بين جزيئات الغاز، يتم الحفاظ على الطاقة الحركية الكلية والزخم.",
          "zh": "在气体粒子之间的弹性碰撞中，总动能和动量守恒。",
          "ku": "Di pevçûnên elastîk ên di navbera pariyên gazê de, enerjiya kînetîk a tevahî û leza xwe parastiye."
        },
        {
          "tr": "Manometre havanın nemini ölçen alettir.",
          "en": "Manometer is a device that measures the humidity of the air.",
          "de": "Manometer ist ein Gerät, das die Luftfeuchtigkeit misst.",
          "fr": "Le manomètre est un appareil qui mesure l'humidité de l'air.",
          "ru": "Манометр – прибор, измеряющий влажность воздуха.",
          "ar": "المانومتر هو جهاز يقيس رطوبة الهواء.",
          "zh": "压力计是测量空气湿度的装置。",
          "ku": "Manometre amûrek e ku nemahiya hewayê dipîve."
        },
        {
          "tr": "İdeal gaz denkleminde sıcaklık Celsius (°C) olarak kullanılır.",
          "en": "In the ideal gas equation, temperature is used in Celsius (°C).",
          "de": "In der idealen Gasgleichung wird die Temperatur in Celsius (°C) verwendet.",
          "fr": "Dans l’équation des gaz parfaits, la température est utilisée en Celsius (°C).",
          "ru": "В уравнении идеального газа температура используется в градусах Цельсия (°C).",
          "ar": "في معادلة الغاز المثالي، يتم استخدام درجة الحرارة بالدرجة المئوية (درجة مئوية).",
          "zh": "在理想气体方程中，温度以摄氏度 (°C) 为单位。",
          "ku": "Di hevkêşeya gazê ya îdeal de, germahî bi Celsius (°C) tê bikaranîn."
        },
        {
          "tr": "Gazın sıcaklığı 20 °C den 40 °C ye çıktığında hacmi tam 2 katına çıkar.",
          "en": "When the temperature of the gas increases from 20 °C to 40 °C, its volume doubles.",
          "de": "Steigt die Temperatur des Gases von 20 °C auf 40 °C, verdoppelt sich sein Volumen.",
          "fr": "Lorsque la température du gaz passe de 20 °C à 40 °C, son volume double.",
          "ru": "При повышении температуры газа с 20°С до 40°С его объём увеличивается вдвое.",
          "ar": "عندما ترتفع درجة حرارة الغاز من 20 درجة مئوية إلى 40 درجة مئوية، يتضاعف حجمه.",
          "zh": "当气体的温度从20℃升高到40℃时，其体积增加一倍。",
          "ku": "Dema ku germahiya gazê ji 20 °C derkeve 40 °C, qebareya wê du qat dibe."
        },
        {
          "tr": "Gaz yoğunluğu sıcaklık arttıkça artar.",
          "en": "Gas density increases as temperature increases.",
          "de": "Die Gasdichte nimmt mit steigender Temperatur zu.",
          "fr": "La densité du gaz augmente à mesure que la température augmente.",
          "ru": "Плотность газа увеличивается с повышением температуры.",
          "ar": "تزداد كثافة الغاز مع زيادة درجة الحرارة.",
          "zh": "气体密度随着温度升高而增加。",
          "ku": "Her ku germahî zêde dibe, tîrêjiya gazê zêde dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Gaz tanecikleri arasındaki esnek çarpışmalarda toplam kinetik enerji ve momentum korunur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In elastic collisions between gas particles, total kinetic energy and momentum are conserved.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei elastischen Kollisionen zwischen Gasteilchen bleiben die gesamte kinetische Energie und der Impuls erhalten.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans les collisions élastiques entre particules de gaz, l’énergie cinétique totale et la quantité de mouvement sont conservées.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При упругих столкновениях частиц газа полная кинетическая энергия и импульс сохраняются.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في التصادمات المرنة بين جزيئات الغاز، يتم الحفاظ على الطاقة الحركية الكلية والزخم.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在气体粒子之间的弹性碰撞中，总动能和动量守恒。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di pevçûnên elastîk ên di navbera pariyên gazê de, enerjiya kînetîk a tevahî û leza xwe parastiye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u12-twin12",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Gazlar: Yasalar ve İdeal Gaz konusundaki temel kimyasal kurallar çerçevesinde Sabit Hacimli Kap kavramını en doğru açıklayan ifadedir?",
        "en": "Which of the following most accurately describes Fixed Volume Container within the fundamental principles of Gases: Laws & Ideal Gas?",
        "de": "Welche Aussage beschreibt das Konzept Container mit festem Volumen im Rahmen von Gase: Gesetze & Ideales Gas am präzisesten?",
        "fr": "Laquelle des propositions suivantes décrit le plus fidèlement Conteneur à volume fixe selon les lois de Gaz: Lois & Gaz Idéal?",
        "ru": "Какое из утверждений наиболее точно описывает понятие «Контейнер фиксированного объема» в рамках темы «Газы: законы и идеальный газ»?",
        "ar": "أي مما يلي يعبر بأعلى درجات الدقة عن مفهوم \"حاوية ذات حجم ثابت\" ضمن قواعد \"الغازات: القوانين والغاز المثالي\"؟",
        "zh": "根据“气体：定律与理想气体”的基本化学原理，下列哪项阐述能最准确地界定“固定容积容器”这一核心概念？",
        "ku": "Kîjan ji van vebijarkan têgeha \"Konteynirê Voluma Sabît\" di çarçoveya prensîbên \"Gaz: Zagon û Gaza Îdeal\" de herî rast rave dike?"
      },
      "options": [
        {
          "tr": "Pistonlu kaba gaz eklendiğinde iç basınç hızla artar.",
          "en": "When gas is added to the reciprocating vessel, the internal pressure increases rapidly.",
          "de": "Wenn dem Kolbenbehälter Gas zugeführt wird, steigt der Innendruck schnell an.",
          "fr": "Lorsque du gaz est ajouté au récipient alternatif, la pression interne augmente rapidement.",
          "ru": "Когда газ добавляется в возвратно-поступательный сосуд, внутреннее давление быстро увеличивается.",
          "ar": "عند إضافة الغاز إلى الوعاء الترددي، يزداد الضغط الداخلي بسرعة.",
          "zh": "当往复式容器中添加气体时，内部压力迅速增加。",
          "ku": "Dema ku gaz li keştiya veguhestinê tê zêdekirin, zexta hundur zû zêde dibe."
        },
        {
          "tr": "Gazlar bulundukları kabın hacmini tamamen doldurur ve her noktasına eşit basınç uygular.",
          "en": "Gases completely fill the volume of the container they are in and apply equal pressure to every point.",
          "de": "Gase füllen das Volumen des Behälters, in dem sie sich befinden, vollständig aus und üben an jedem Punkt den gleichen Druck aus.",
          "fr": "Les gaz remplissent complètement le volume du récipient dans lequel ils se trouvent et appliquent une pression égale en chaque point.",
          "ru": "Газы полностью заполняют объем сосуда, в котором находятся, и оказывают одинаковое давление на каждую точку.",
          "ar": "تملأ الغازات حجم الوعاء الموجود فيه تمامًا وتطبق ضغطًا متساويًا على كل نقطة.",
          "zh": "气体完全充满其所在容器的体积，并对每个点施加相等的压力。",
          "ku": "Gaz bi tevahî qebareya konteynera ku tê de ne tijî dikin û zextek wekhev li her xalê dikin."
        },
        {
          "tr": "Sıcaklık 10 °C den 20 °C ye çıktığında gazın mutlak sıcaklığı iki katına çıkmış olur.",
          "en": "When the temperature increases from 10 °C to 20 °C, the absolute temperature of the gas doubles.",
          "de": "Bei einem Temperaturanstieg von 10 °C auf 20 °C verdoppelt sich die absolute Temperatur des Gases.",
          "fr": "Lorsque la température passe de 10 °C à 20 °C, la température absolue du gaz double.",
          "ru": "При повышении температуры с 10°С до 20°С абсолютная температура газа удваивается.",
          "ar": "عندما ترتفع درجة الحرارة من 10 درجات مئوية إلى 20 درجة مئوية، تتضاعف درجة الحرارة المطلقة للغاز.",
          "zh": "当温度从10℃升高到20℃时，气体的绝对温度加倍。",
          "ku": "Dema ku germahî ji 10 °C derkeve 20 °C, germahiya mutleq ya gazê du qat dibe."
        },
        {
          "tr": "Sabit hacimli kapta gaz ısıtılırsa basıncı azalır.",
          "en": "If the gas is heated in a fixed volume container, its pressure decreases.",
          "de": "Wenn das Gas in einem Behälter mit festem Volumen erhitzt wird, sinkt sein Druck.",
          "fr": "Si le gaz est chauffé dans un récipient à volume fixe, sa pression diminue.",
          "ru": "Если газ нагревать в контейнере фиксированного объема, его давление снижается.",
          "ar": "إذا تم تسخين الغاز في حاوية ذات حجم ثابت، ينخفض ​​ضغطه.",
          "zh": "如果气体在固定体积的容器中被加热，其压力会降低。",
          "ku": "Ger gaz di konteynirek bi qebareya sabit de were germ kirin, zexta wê kêm dibe."
        },
        {
          "tr": "Birleşik gaz denkleminde gazın türü formülü değiştirir.",
          "en": "In the combined gas equation, the type of gas changes the formula.",
          "de": "In der kombinierten Gasgleichung ändert die Art des Gases die Formel.",
          "fr": "Dans l’équation des gaz combinés, le type de gaz change la formule.",
          "ru": "В объединенном уравнении газа тип газа меняет формулу.",
          "ar": "في معادلة الغاز المدمجة، يغير نوع الغاز الصيغة.",
          "zh": "在组合气体方程中，气体类型改变了公式。",
          "ku": "Di hevkêşana gaza hevgirtî de, cureya gazê formulê diguherîne."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Gazlar bulundukları kabın hacmini tamamen doldurur ve her noktasına eşit basınç uygular.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Gases completely fill the volume of the container they are in and apply equal pressure to every point.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Gase füllen das Volumen des Behälters, in dem sie sich befinden, vollständig aus und üben an jedem Punkt den gleichen Druck aus.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les gaz remplissent complètement le volume du récipient dans lequel ils se trouvent et appliquent une pression égale en chaque point.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Газы полностью заполняют объем сосуда, в котором находятся, и оказывают одинаковое давление на каждую точку.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تملأ الغازات حجم الوعاء الموجود فيه تمامًا وتطبق ضغطًا متساويًا على كل نقطة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“气体完全充满其所在容器的体积，并对每个点施加相等的压力。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Gaz bi tevahî qebareya konteynera ku tê de ne tijî dikin û zextek wekhev li her xalê dikin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u12-twin13",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Gazlar: Yasalar ve İdeal Gaz sorularında karşılaşılan Gaz Yoğunluğu (d = PM/RT) konusunda doğru olan yargı hangisidir?",
        "en": "In standard university entrance exams covering Gases: Laws & Ideal Gas, which assertion regarding Gas Density (d = PM/RT) is correct?",
        "de": "Welche Feststellung bezüglich Gasdichte (d = PM/RT) ist nach den chemischen Gesetzmäßigkeiten von Gase: Gesetze & Ideales Gas richtig?",
        "fr": "Dans les épreuves universitaires portant sur Gaz: Lois & Gaz Idéal, quelle affirmation concernant Densité du gaz (d = PM/RT) est correcte?",
        "ru": "В экзаменационных заданиях по теме «Газы: законы и идеальный газ», какое положение относительно «Плотность газа (d = PM/RT)» является верным?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الغازات: القوانين والغاز المثالي\"، أي حكم متعلق بـ \"كثافة الغاز (د = PM/RT)\" يعتبر صحيحاً؟",
        "zh": "在高考“气体：定律与理想气体”经典考题中，下列有关“气体密度 (d = PM/RT)”的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Gaz: Zagon û Gaza Îdeal\" de, kîjan daraza li ser \"Tîrêjiya gazê (d = PM/RT)\" rast e?"
      },
      "options": [
        {
          "tr": "Sıcaklık 25 °C den 50 °C ye çıkarsa basınç iki katına çıkar.",
          "en": "If the temperature increases from 25 °C to 50 °C, the pressure doubles.",
          "de": "Steigt die Temperatur von 25 °C auf 50 °C, verdoppelt sich der Druck.",
          "fr": "Si la température passe de 25 °C à 50 °C, la pression double.",
          "ru": "Если температура увеличивается с 25 °C до 50 °C, давление удваивается.",
          "ar": "إذا ارتفعت درجة الحرارة من 25 درجة مئوية إلى 50 درجة مئوية، يتضاعف الضغط.",
          "zh": "如果温度从 25 °C 升高到 50 °C，压力就会加倍。",
          "ku": "Ger germahî ji 25 °C heta 50 °C zêde bibe, zext du qat dibe."
        },
        {
          "tr": "Sabit sıcaklıkta gazın hacmi sıkıştırılarak yarıya indirilirse basıncı da yarıya iner.",
          "en": "If the volume of a gas at constant temperature is halved by compression, its pressure is also halved.",
          "de": "Wenn das Volumen eines Gases bei konstanter Temperatur durch Kompression halbiert wird, halbiert sich auch sein Druck.",
          "fr": "Si le volume d’un gaz à température constante est réduit de moitié par compression, sa pression est également réduite de moitié.",
          "ru": "Если объем газа при постоянной температуре уменьшить вдвое в результате сжатия, его давление также уменьшится вдвое.",
          "ar": "إذا انخفض حجم الغاز عند درجة حرارة ثابتة إلى النصف عن طريق الضغط، فإن ضغطه ينخفض ​​أيضًا إلى النصف.",
          "zh": "如果恒定温度下气体的体积因压缩而减半，则其压力也减半。",
          "ku": "Ger qebareya gazê ya di germahiya sabît de bi pêçandinê nîvî bibe, zexta wê jî nîvî dibe."
        },
        {
          "tr": "Gazlar birbiriyle her oranda homojen karışım oluşturur.",
          "en": "Gases form homogeneous mixtures with each other in all proportions.",
          "de": "Gase bilden in allen Mengenverhältnissen homogene Gemische miteinander.",
          "fr": "Les gaz forment entre eux des mélanges homogènes dans toutes les proportions.",
          "ru": "Газы образуют однородные смеси друг с другом во всех пропорциях.",
          "ar": "تشكل الغازات مخاليط متجانسة مع بعضها البعض بجميع النسب.",
          "zh": "气体以各种比例相互形成均匀混合物。",
          "ku": "Gaz di her rêjeyê de bi hev re tevliheviyên homojen çêdikin."
        },
        {
          "tr": "Farklı gazların eşit hacimleri daima eşit kütleye sahiptir.",
          "en": "Equal volumes of different gases always have equal mass.",
          "de": "Gleiche Volumina verschiedener Gase haben immer die gleiche Masse.",
          "fr": "Des volumes égaux de gaz différents ont toujours une masse égale.",
          "ru": "Равные объемы разных газов всегда имеют одинаковую массу.",
          "ar": "دائمًا ما تكون للأحجام المتساوية من الغازات المختلفة كتلة متساوية.",
          "zh": "相同体积的不同气体总是具有相同的质量。",
          "ku": "Hecma yeksan a gazên cuda timî xwedî girseya yeksan in."
        },
        {
          "tr": "Çelik kapalı kaplarda gazın basıncı daima atmosfer basıncına eşittir.",
          "en": "In closed steel containers, the pressure of the gas is always equal to atmospheric pressure.",
          "de": "In geschlossenen Stahlbehältern ist der Druck des Gases immer gleich dem Atmosphärendruck.",
          "fr": "Dans des conteneurs en acier fermés, la pression du gaz est toujours égale à la pression atmosphérique.",
          "ru": "В закрытых стальных емкостях давление газа всегда равно атмосферному давлению.",
          "ar": "في الحاويات الفولاذية المغلقة، يكون ضغط الغاز دائمًا مساويًا للضغط الجوي.",
          "zh": "在封闭的钢制容器中，气体的压力始终等于大气压。",
          "ku": "Di konteynerên pola yên girtî de, zexta gazê her dem bi zexta atmosferê re ye."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Gazlar birbiriyle her oranda homojen karışım oluşturur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Gases form homogeneous mixtures with each other in all proportions.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Gase bilden in allen Mengenverhältnissen homogene Gemische miteinander.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les gaz forment entre eux des mélanges homogènes dans toutes les proportions.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Газы образуют однородные смеси друг с другом во всех пропорциях.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تشكل الغازات مخاليط متجانسة مع بعضها البعض بجميع النسب.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“气体以各种比例相互形成均匀混合物。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Gaz di her rêjeyê de bi hev re tevliheviyên homojen çêdikin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u12-twin14",
      "stem": {
        "tr": "Aşağıda Gazlar: Yasalar ve İdeal Gaz ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre Kısmi Basınç ile ilgili hangisi doğrudur?",
        "en": "Based on the fundamental principles of Gases: Laws & Ideal Gas, which statement about Partial Pressure is scientifically accurate?",
        "de": "Auf der Grundlage der Einheit Gase: Gesetze & Ideales Gas: Welche Aussage über Partialdruck ist zutreffend?",
        "fr": "Sur la base des notions fondamentales de Gaz: Lois & Gaz Idéal, quelle affirmation relative à Pression partielle est exacte?",
        "ru": "На основе фундаментальных положений темы «Газы: законы и идеальный газ», какое суждение о «Парциальное давление» верно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الغازات: القوانين والغاز المثالي\"، أي عبارة حول \"الضغط الجزئي\" صحيحة؟",
        "zh": "基于“气体：定律与理想气体”的基础化学知识体系，下列关于“分压”的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Gaz: Zagon û Gaza Îdeal\", kîjan gotin derbarê \"Zexta qismî\" de rast e?"
      },
      "options": [
        {
          "tr": "İdeal gaz denkleminde sıcaklık Celsius (°C) olarak kullanılır.",
          "en": "In the ideal gas equation, temperature is used in Celsius (°C).",
          "de": "In der idealen Gasgleichung wird die Temperatur in Celsius (°C) verwendet.",
          "fr": "Dans l’équation des gaz parfaits, la température est utilisée en Celsius (°C).",
          "ru": "В уравнении идеального газа температура используется в градусах Цельсия (°C).",
          "ar": "في معادلة الغاز المثالي، يتم استخدام درجة الحرارة بالدرجة المئوية (درجة مئوية).",
          "zh": "在理想气体方程中，温度以摄氏度 (°C) 为单位。",
          "ku": "Di hevkêşeya gazê ya îdeal de, germahî bi Celsius (°C) tê bikaranîn."
        },
        {
          "tr": "Gazın sıcaklığı 20 °C den 40 °C ye çıktığında hacmi tam 2 katına çıkar.",
          "en": "When the temperature of the gas increases from 20 °C to 40 °C, its volume doubles.",
          "de": "Steigt die Temperatur des Gases von 20 °C auf 40 °C, verdoppelt sich sein Volumen.",
          "fr": "Lorsque la température du gaz passe de 20 °C à 40 °C, son volume double.",
          "ru": "При повышении температуры газа с 20°С до 40°С его объём увеличивается вдвое.",
          "ar": "عندما ترتفع درجة حرارة الغاز من 20 درجة مئوية إلى 40 درجة مئوية، يتضاعف حجمه.",
          "zh": "当气体的温度从20℃升高到40℃时，其体积增加一倍。",
          "ku": "Dema ku germahiya gazê ji 20 °C derkeve 40 °C, qebareya wê du qat dibe."
        },
        {
          "tr": "Gaz yoğunluğu sıcaklık arttıkça artar.",
          "en": "Gas density increases as temperature increases.",
          "de": "Die Gasdichte nimmt mit steigender Temperatur zu.",
          "fr": "La densité du gaz augmente à mesure que la température augmente.",
          "ru": "Плотность газа увеличивается с повышением температуры.",
          "ar": "تزداد كثافة الغاز مع زيادة درجة الحرارة.",
          "zh": "气体密度随着温度升高而增加。",
          "ku": "Her ku germahî zêde dibe, tîrêjiya gazê zêde dibe."
        },
        {
          "tr": "Manometreler kapalı veya açık uçlu kaplardaki gaz basıncını cıva yüksekliğiyle ölçer.",
          "en": "Manometers measure gas pressure in closed or open-ended containers using the height of mercury.",
          "de": "Manometer messen den Gasdruck in geschlossenen oder offenen Behältern anhand der Quecksilbersäule.",
          "fr": "Les manomètres mesurent la pression du gaz dans des récipients fermés ou ouverts en utilisant la hauteur du mercure.",
          "ru": "Манометры измеряют давление газа в закрытых или открытых емкостях, используя высоту ртутного столба.",
          "ar": "تقوم أجهزة قياس الضغط بقياس ضغط الغاز في حاويات مغلقة أو مفتوحة باستخدام ارتفاع الزئبق.",
          "zh": "压力计利用水银的高度来测量封闭或开口容器中的气压。",
          "ku": "Manometre zexta gazê di konteynerên girtî an vekirî de bi karanîna bilindahiya merkurê dipîvin."
        },
        {
          "tr": "Gaz molekülleri sadece dairesel yörüngelerde hareket eder.",
          "en": "Gas molecules move only in circular orbits.",
          "de": "Gasmoleküle bewegen sich ausschließlich auf Kreisbahnen.",
          "fr": "Les molécules de gaz se déplacent uniquement sur des orbites circulaires.",
          "ru": "Молекулы газа движутся только по круговым орбитам.",
          "ar": "تتحرك جزيئات الغاز في مدارات دائرية فقط.",
          "zh": "气体分子仅沿圆形轨道运动。",
          "ku": "Molekulên gazê tenê di dorhêlên dorhêl de digerin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Manometreler kapalı veya açık uçlu kaplardaki gaz basıncını cıva yüksekliğiyle ölçer.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Manometers measure gas pressure in closed or open-ended containers using the height of mercury.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Manometer messen den Gasdruck in geschlossenen oder offenen Behältern anhand der Quecksilbersäule.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les manomètres mesurent la pression du gaz dans des récipients fermés ou ouverts en utilisant la hauteur du mercure.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Манометры измеряют давление газа в закрытых или открытых емкостях, используя высоту ртутного столба.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تقوم أجهزة قياس الضغط بقياس ضغط الغاز في حاويات مغلقة أو مفتوحة باستخدام ارتفاع الزئبق.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“压力计利用水银的高度来测量封闭或开口容器中的气压。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Manometre zexta gazê di konteynerên girtî an vekirî de bi karanîna bilindahiya merkurê dipîvin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u12-twin15",
      "stem": {
        "tr": "Gazlar: Yasalar ve İdeal Gaz konusu kapsamında Gaz Difüzyonu ile ilgili yapılan çalışmalarda aşağıdaki bulgulardan hangisi bilimsel olarak doğrulanmıştır?",
        "en": "In the context of Gases: Laws & Ideal Gas, which of the following findings regarding Gas Diffusion is scientifically verified?",
        "de": "Im Rahmen der Einheit Gase: Gesetze & Ideales Gas: Welcher der folgenden Befunde zu Gasdiffusion ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l unité Gaz: Lois & Gaz Idéal, laquelle des constatations suivantes concernant Diffusion de gaz est scientifiquement vérifiée?",
        "ru": "В контексте темы «Газы: законы и идеальный газ», какой из следующих выводов относительно «Газовая диффузия» научно подтверждён?",
        "ar": "في سياق موضوع \"الغازات: القوانين والغاز المثالي\"، أي من النتائج التالية المتعلقة بـ \"انتشار الغاز\" مثبتة علمياً؟",
        "zh": "在“气体：定律与理想气体”主题范畴内，下列关于“气体扩散”的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Gaz: Zagon û Gaza Îdeal\" de, kîjan ji van encamên li ser \"Belavbûna Gazê\" ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Sıcaklık 10 °C den 20 °C ye çıktığında gazın mutlak sıcaklığı iki katına çıkmış olur.",
          "en": "When the temperature increases from 10 °C to 20 °C, the absolute temperature of the gas doubles.",
          "de": "Bei einem Temperaturanstieg von 10 °C auf 20 °C verdoppelt sich die absolute Temperatur des Gases.",
          "fr": "Lorsque la température passe de 10 °C à 20 °C, la température absolue du gaz double.",
          "ru": "При повышении температуры с 10°С до 20°С абсолютная температура газа удваивается.",
          "ar": "عندما ترتفع درجة الحرارة من 10 درجات مئوية إلى 20 درجة مئوية، تتضاعف درجة الحرارة المطلقة للغاز.",
          "zh": "当温度从10℃升高到20℃时，气体的绝对温度加倍。",
          "ku": "Dema ku germahî ji 10 °C derkeve 20 °C, germahiya mutleq ya gazê du qat dibe."
        },
        {
          "tr": "Sabit hacimli kapta gaz ısıtılırsa basıncı azalır.",
          "en": "If the gas is heated in a fixed volume container, its pressure decreases.",
          "de": "Wenn das Gas in einem Behälter mit festem Volumen erhitzt wird, sinkt sein Druck.",
          "fr": "Si le gaz est chauffé dans un récipient à volume fixe, sa pression diminue.",
          "ru": "Если газ нагревать в контейнере фиксированного объема, его давление снижается.",
          "ar": "إذا تم تسخين الغاز في حاوية ذات حجم ثابت، ينخفض ​​ضغطه.",
          "zh": "如果气体在固定体积的容器中被加热，其压力会降低。",
          "ku": "Ger gaz di konteynirek bi qebareya sabit de were germ kirin, zexta wê kêm dibe."
        },
        {
          "tr": "Birleşik gaz denkleminde gazın türü formülü değiştirir.",
          "en": "In the combined gas equation, the type of gas changes the formula.",
          "de": "In der kombinierten Gasgleichung ändert die Art des Gases die Formel.",
          "fr": "Dans l’équation des gaz combinés, le type de gaz change la formule.",
          "ru": "В объединенном уравнении газа тип газа меняет формулу.",
          "ar": "في معادلة الغاز المدمجة، يغير نوع الغاز الصيغة.",
          "zh": "在组合气体方程中，气体类型改变了公式。",
          "ku": "Di hevkêşana gaza hevgirtî de, cureya gazê formulê diguherîne."
        },
        {
          "tr": "Gaz tanecikleri çarptıkça kinetik enerjileri zamanla sıfıra düşer.",
          "en": "As gas particles collide, their kinetic energy decreases to zero over time.",
          "de": "Wenn Gasteilchen kollidieren, sinkt ihre kinetische Energie mit der Zeit auf Null.",
          "fr": "Lorsque les particules de gaz entrent en collision, leur énergie cinétique diminue jusqu'à zéro avec le temps.",
          "ru": "Когда частицы газа сталкиваются, их кинетическая энергия со временем уменьшается до нуля.",
          "ar": "عند تصادم جزيئات الغاز، تنخفض الطاقة الحركية لها إلى الصفر مع مرور الوقت.",
          "zh": "当气体粒子碰撞时，它们的动能随着时间的推移减少到零。",
          "ku": "Her ku pariyên gazê li hev dikevin, enerjiya wan a kînetîk bi demê re dadikeve sifirê."
        },
        {
          "tr": "Sürtünmesiz ideal pistonlu kaba aynı sıcaklıkta gaz eklenirse gazın basıncı değişmez, hacmi artar.",
          "en": "If gas at the same temperature is added to a frictionless ideal piston container, the pressure of the gas does not change and its volume increases.",
          "de": "Wenn einem reibungsfreien idealen Kolbenbehälter Gas mit der gleichen Temperatur zugeführt wird, ändert sich der Druck des Gases nicht und sein Volumen vergrößert sich.",
          "fr": "Si du gaz à la même température est ajouté à un récipient à piston idéal sans friction, la pression du gaz ne change pas et son volume augmente.",
          "ru": "Если в идеальный поршневой контейнер без трения добавить газ той же температуры, давление газа не изменится, а его объем увеличится.",
          "ar": "إذا أضيف غاز عند نفس درجة الحرارة إلى حاوية مكبس مثالية عديمة الاحتكاك، فإن ضغط الغاز لا يتغير ويزداد حجمه.",
          "zh": "如果将相同温度的气体添加到无摩擦的理想活塞容器中，则气体的压力不改变并且其体积增加。",
          "ku": "Ger gaza di heman germahiyê de li konteynirek pistonê ya îdeal bê xitimandin were zêdekirin, zexta gazê naguhere û qebareya wê zêde dibe."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Sürtünmesiz ideal pistonlu kaba aynı sıcaklıkta gaz eklenirse gazın basıncı değişmez, hacmi artar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If gas at the same temperature is added to a frictionless ideal piston container, the pressure of the gas does not change and its volume increases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn einem reibungsfreien idealen Kolbenbehälter Gas mit der gleichen Temperatur zugeführt wird, ändert sich der Druck des Gases nicht und sein Volumen vergrößert sich.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si du gaz à la même température est ajouté à un récipient à piston idéal sans friction, la pression du gaz ne change pas et son volume augmente.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если в идеальный поршневой контейнер без трения добавить газ той же температуры, давление газа не изменится, а его объем увеличится.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا أضيف غاز عند نفس درجة الحرارة إلى حاوية مكبس مثالية عديمة الاحتكاك، فإن ضغط الغاز لا يتغير ويزداد حجمه.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果将相同温度的气体添加到无摩擦的理想活塞容器中，则气体的压力不改变并且其体积增加。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger gaza di heman germahiyê de li konteynirek pistonê ya îdeal bê xitimandin were zêdekirin, zexta gazê naguhere û qebareya wê zêde dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u12-twin16",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Gazlar: Yasalar ve İdeal Gaz ünitesinde ele alınan Buhar hakkında verilen ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Gases: Laws & Ideal Gas, which statement about Vapor is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Gase: Gesetze & Ideales Gas: Welche Aussage über Dampf ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d examen de Gaz: Lois & Gaz Idéal, quelle affirmation relative à Vapeur est rigoureusement exacte?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Газы: законы и идеальный газ», какое утверждение о «Пар» абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الغازات: القوانين والغاز المثالي\"، أي عبارة حول \"البخار\" صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“气体：定律与理想气体”单元中关于“蒸气”的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Gaz: Zagon û Gaza Îdeal\", kîjan gotin li ser \"Buhar\" bê guman rast e?"
      },
      "options": [
        {
          "tr": "Aynı gazın bulunduğu sabit hacimli kapta sıcaklık Kelvin cinsinden iki katına çıkarsa basınç iki katına çıkar.",
          "en": "If the temperature in a fixed volume container containing the same gas doubles in Kelvin, the pressure doubles.",
          "de": "Wenn sich die Temperatur in einem Behälter mit festem Volumen, der dasselbe Gas enthält, in Kelvin verdoppelt, verdoppelt sich auch der Druck.",
          "fr": "Si la température dans un récipient à volume fixe contenant le même gaz double en Kelvin, la pression double.",
          "ru": "Если температура в контейнере фиксированного объема, содержащем тот же газ, увеличивается вдвое в Кельвинах, давление удваивается.",
          "ar": "إذا تضاعفت درجة الحرارة في وعاء ثابت الحجم يحتوي على نفس الغاز بالكلفن، فإن الضغط يتضاعف.",
          "zh": "如果含有相同气体的固定体积容器中的开尔文温度加倍，则压力加倍。",
          "ku": "Ger germahiya di konteynirek volga sabît a ku heman gazê tê de di Kelvin de duqat bibe, zext du qat dibe."
        },
        {
          "tr": "Sabit sıcaklıkta gazın hacmi sıkıştırılarak yarıya indirilirse basıncı da yarıya iner.",
          "en": "If the volume of a gas at constant temperature is halved by compression, its pressure is also halved.",
          "de": "Wenn das Volumen eines Gases bei konstanter Temperatur durch Kompression halbiert wird, halbiert sich auch sein Druck.",
          "fr": "Si le volume d’un gaz à température constante est réduit de moitié par compression, sa pression est également réduite de moitié.",
          "ru": "Если объем газа при постоянной температуре уменьшить вдвое в результате сжатия, его давление также уменьшится вдвое.",
          "ar": "إذا انخفض حجم الغاز عند درجة حرارة ثابتة إلى النصف عن طريق الضغط، فإن ضغطه ينخفض ​​أيضًا إلى النصف.",
          "zh": "如果恒定温度下气体的体积因压缩而减半，则其压力也减半。",
          "ku": "Ger qebareya gazê ya di germahiya sabît de bi pêçandinê nîvî bibe, zexta wê jî nîvî dibe."
        },
        {
          "tr": "Farklı gazların eşit hacimleri daima eşit kütleye sahiptir.",
          "en": "Equal volumes of different gases always have equal mass.",
          "de": "Gleiche Volumina verschiedener Gase haben immer die gleiche Masse.",
          "fr": "Des volumes égaux de gaz différents ont toujours une masse égale.",
          "ru": "Равные объемы разных газов всегда имеют одинаковую массу.",
          "ar": "دائمًا ما تكون للأحجام المتساوية من الغازات المختلفة كتلة متساوية.",
          "zh": "相同体积的不同气体总是具有相同的质量。",
          "ku": "Hecma yeksan a gazên cuda timî xwedî girseya yeksan in."
        },
        {
          "tr": "Çelik kapalı kaplarda gazın basıncı daima atmosfer basıncına eşittir.",
          "en": "In closed steel containers, the pressure of the gas is always equal to atmospheric pressure.",
          "de": "In geschlossenen Stahlbehältern ist der Druck des Gases immer gleich dem Atmosphärendruck.",
          "fr": "Dans des conteneurs en acier fermés, la pression du gaz est toujours égale à la pression atmosphérique.",
          "ru": "В закрытых стальных емкостях давление газа всегда равно атмосферному давлению.",
          "ar": "في الحاويات الفولاذية المغلقة، يكون ضغط الغاز دائمًا مساويًا للضغط الجوي.",
          "zh": "在封闭的钢制容器中，气体的压力始终等于大气压。",
          "ku": "Di konteynerên pola yên girtî de, zexta gazê her dem bi zexta atmosferê re ye."
        },
        {
          "tr": "Gaz kabın dibine üst kısmından daha yüksek basınç uygular.",
          "en": "The gas exerts higher pressure at the bottom of the container than at the top.",
          "de": "Am Boden des Behälters übt das Gas einen höheren Druck aus als oben.",
          "fr": "Le gaz exerce une pression plus élevée au fond du récipient qu’en haut.",
          "ru": "Газ оказывает более высокое давление внизу контейнера, чем вверху.",
          "ar": "يمارس الغاز ضغطًا أعلى في قاع الحاوية مقارنةً بالأعلى.",
          "zh": "气体在容器底部施加的压力高于顶部。",
          "ku": "Gaz li binê konteynerê ji ya jorîn zextek bilindtir dike."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Aynı gazın bulunduğu sabit hacimli kapta sıcaklık Kelvin cinsinden iki katına çıkarsa basınç iki katına çıkar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the temperature in a fixed volume container containing the same gas doubles in Kelvin, the pressure doubles.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn sich die Temperatur in einem Behälter mit festem Volumen, der dasselbe Gas enthält, in Kelvin verdoppelt, verdoppelt sich auch der Druck.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si la température dans un récipient à volume fixe contenant le même gaz double en Kelvin, la pression double.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если температура в контейнере фиксированного объема, содержащем тот же газ, увеличивается вдвое в Кельвинах, давление удваивается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا تضاعفت درجة الحرارة في وعاء ثابت الحجم يحتوي على نفس الغاز بالكلفن، فإن الضغط يتضاعف.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果含有相同气体的固定体积容器中的开尔文温度加倍，则压力加倍。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger germahiya di konteynirek volga sabît a ku heman gazê tê de di Kelvin de duqat bibe, zext du qat dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit12;
