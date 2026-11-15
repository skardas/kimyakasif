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
        "tr": "İdeal Gaz Denklemi: PV = nRT'dir (P*V = n*R*T). (P: atm, V: litre, n: mol, T: Kelvin, R: 0,082 L·atm/(mol·K) veya 22,4/273).",
        "en": "Ideal Gas Equation: PV = nRT (P*V = n*R*T). (P: atm, V: liter, n: mole, T: Kelvin, R: 0.082 L·atm/(mol·K) or 22.4/273).",
        "de": "Ideale Gasgleichung: PV = nRT (P*V = n*R*T). (P: atm, V: Liter, n: Mol, T: Kelvin, R: 0,082 L·atm/(mol·K) oder 22,4/273).",
        "fr": "Équation des gaz parfaits : PV = nRT (P*V = n*R*T). (P : atm, V : litre, n : mole, T : Kelvin, R : 0,082 L·atm/(mol·K) ou 22,4/273).",
        "ru": "Уравнение идеального газа: PV = nRT (P*V = n*R*T). (P: атм, V: литр, n: моль, T: Кельвин, R: 0,082 л·атм/(моль·K) или 22,4/273).",
        "ar": "معادلة الغاز المثالي: PV = nRT (P*V = n*R*T). (P: atm، V: لتر، n: مول، T: كلفن، R: 0.082 L·atm/(mol·K) أو 22.4/273).",
        "zh": "理想气体方程：PV = nRT (P*V = n*R*T)。 (P：atm，V：升，n：摩尔，T：开尔文，R：0.082 L·atm/(mol·K)或22.4/273)。",
        "ku": "Wekheviya Gaza Îdeal: PV = nRT (P*V = n*R*T). (P: atm, V: lître, n: mol, T: Kelvin, R: 0.082 L·atm/(mol·K) an 22.4/273)."
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
      },
      "whyTrapIsFalse": {
        "tr": "Gaz yasalarında hacim ve basınç mutlak sıcaklıkla orantılıdır; °C ölçeğinin sıfırı keyfî seçildiği için (0 °C'de gazın hacmi sıfır değildir) denklemde mutlaka Kelvin kullanılır.",
        "en": "In the gas laws volume and pressure are proportional to the absolute temperature; the zero of the °C scale is arbitrary (a gas does not have zero volume at 0 °C), so Kelvin must be used in the equation.",
        "de": "In den Gasgesetzen sind Volumen und Druck zur absoluten Temperatur proportional; der Nullpunkt der °C-Skala ist willkürlich (bei 0 °C ist das Gasvolumen nicht null), daher muss in der Gleichung Kelvin verwendet werden.",
        "fr": "Dans les lois des gaz, le volume et la pression sont proportionnels à la température absolue ; le zéro de l'échelle °C est arbitraire (le volume d'un gaz n'est pas nul à 0 °C), il faut donc utiliser le kelvin dans l'équation.",
        "ru": "В газовых законах объём и давление пропорциональны абсолютной температуре; ноль шкалы Цельсия выбран условно (при 0 °C объём газа не равен нулю), поэтому в уравнение подставляют температуру в кельвинах.",
        "ar": "في قوانين الغازات يتناسب الحجم والضغط مع درجة الحرارة المطلقة؛ وصفر مقياس السلسيوس اختياري (حجم الغاز عند 0 °C ليس صفرًا)، لذلك يجب استخدام الكلفن في المعادلة.",
        "zh": "在气体定律中，体积和压强与热力学温度成正比；摄氏温标的零点是人为规定的（0 °C 时气体体积并不为零），所以方程中必须使用开尔文温度。",
        "ku": "Di zagonên gazê de qebare û zext bi germahiya mutleq re rêjeyî ne; sifira pîvana °C bi dilxwazî hatiye hilbijartin (di 0 °C de qebareya gazê ne sifir e), ji ber vê yekê di hevkêşeyê de divê Kelvin were bikaranîn."
      }
    },
    {
      "id": "u12-f02",
      "fact": {
        "tr": "Kelvin sıcaklığı T(K) = t(°C) + 273,15 formülüyle bulunur; mutlak sıcaklık sıfırın altına inemez.",
        "en": "Kelvin temperature is found by the formula T(K) = t(°C) + 273.15; The absolute temperature cannot fall below zero.",
        "de": "Die Kelvin-Temperatur wird durch die Formel T(K) = t(°C) + 273,15 ermittelt; Die absolute Temperatur kann nicht unter Null fallen.",
        "fr": "La température Kelvin est trouvée par la formule T(K) = t(°C) + 273,15 ; La température absolue ne peut pas descendre en dessous de zéro.",
        "ru": "Температура Кельвина находится по формуле Т(К) = t(°С) + 273,15; Абсолютная температура не может опускаться ниже нуля.",
        "ar": "يتم العثور على درجة حرارة كلفن بالصيغة T(K) = t(°C) + 273.15؛ لا يمكن أن تنخفض درجة الحرارة المطلقة إلى ما دون الصفر.",
        "zh": "开尔文温度的计算公式为 T(K) = t(°C) + 273.15；绝对温度不能低于零。",
        "ku": "Germahiya Kelvin bi formula T(K) = t(°C) + 273.15 tê dîtin; Germahiya mutleq nikare bikeve bin sifirê."
      },
      "trap": {
        "tr": "Sıcaklık 10 °C'den 20 °C'ye çıktığında gazın mutlak sıcaklığı iki katına çıkmış olur.",
        "en": "When the temperature increases from 10 °C to 20 °C, the absolute temperature of the gas doubles.",
        "de": "Bei einem Temperaturanstieg von 10 °C auf 20 °C verdoppelt sich die absolute Temperatur des Gases.",
        "fr": "Lorsque la température passe de 10 °C à 20 °C, la température absolue du gaz double.",
        "ru": "При повышении температуры с 10°С до 20°С абсолютная температура газа удваивается.",
        "ar": "عندما ترتفع درجة الحرارة من 10 درجات مئوية إلى 20 درجة مئوية، تتضاعف درجة الحرارة المطلقة للغاز.",
        "zh": "当温度从10℃升高到20℃时，气体的绝对温度加倍。",
        "ku": "Dema ku germahî ji 10 °C derkeve 20 °C, germahiya mutleq ya gazê du qat dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Mutlak sıcaklık °C değil Kelvin değeridir: 10 °C = 283 K, 20 °C = 293 K olduğundan artış yalnızca yaklaşık %3,5'tir; °C değerinin iki katına çıkması Kelvin değerinin iki katına çıktığı anlamına gelmez.",
        "en": "Absolute temperature is the Kelvin value, not the °C value: 10 °C = 283 K and 20 °C = 293 K, an increase of only about 3.5%; doubling the °C value does not double the Kelvin value.",
        "de": "Die absolute Temperatur ist der Kelvin-Wert, nicht der °C-Wert: 10 °C = 283 K, 20 °C = 293 K, also nur etwa 3,5 % mehr; eine Verdopplung des °C-Werts verdoppelt den Kelvin-Wert nicht.",
        "fr": "La température absolue est la valeur en kelvins, pas en °C : 10 °C = 283 K et 20 °C = 293 K, soit une hausse d'environ 3,5 % seulement ; doubler la valeur en °C ne double pas la valeur en kelvins.",
        "ru": "Абсолютная температура — это значение в кельвинах, а не в °C: 10 °C = 283 K, 20 °C = 293 K, то есть рост всего около 3,5 %; удвоение значения в °C не удваивает температуру в кельвинах.",
        "ar": "درجة الحرارة المطلقة هي القيمة بالكلفن لا بالسلسيوس: 10 °C = 283 K و20 °C = 293 K، أي أن الزيادة نحو 3.5% فقط؛ ومضاعفة القيمة بالسلسيوس لا تضاعف القيمة بالكلفن.",
        "zh": "热力学温度是开尔文值而不是摄氏值：10 °C = 283 K，20 °C = 293 K，只升高了约 3.5%；摄氏数值翻倍并不意味着开尔文温度翻倍。",
        "ku": "Germahiya mutleq nirxa Kelvin e, ne ya °C: 10 °C = 283 K û 20 °C = 293 K, ango zêdebûn tenê nêzî %3.5 e; ducarbûna nirxa °C nayê wateya ducarbûna nirxa Kelvin."
      }
    },
    {
      "id": "u12-f03",
      "fact": {
        "tr": "Boyle Yasası: Sabit sıcaklık ve mol sayısında basınç ile hacim ters orantılıdır (P1V1 = P2V2).",
        "en": "Boyle's Law: At constant temperature and number of moles, pressure and volume are inversely proportional (P1V1 = P2V2).",
        "de": "Boyles Gesetz: Bei konstanter Temperatur und Molzahl sind Druck und Volumen umgekehrt proportional (P1V1 = P2V2).",
        "fr": "Loi de Boyle : À température et nombre de moles constants, la pression et le volume sont inversement proportionnels (P1V1 = P2V2).",
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
      },
      "whyTrapIsFalse": {
        "tr": "Boyle yasasında basınç ile hacim ters orantılıdır; hacim yarıya inerse basınç yarıya inmez, iki katına çıkar (P1V1 = P2V2).",
        "en": "In Boyle's law pressure and volume are inversely proportional; if the volume is halved the pressure does not halve, it doubles (P1V1 = P2V2).",
        "de": "Nach dem Boyle-Gesetz sind Druck und Volumen umgekehrt proportional; wird das Volumen halbiert, halbiert sich der Druck nicht, sondern verdoppelt sich (P1V1 = P2V2).",
        "fr": "Dans la loi de Boyle, pression et volume sont inversement proportionnels ; si le volume est divisé par deux, la pression n'est pas divisée par deux, elle double (P1V1 = P2V2).",
        "ru": "По закону Бойля давление и объём обратно пропорциональны; при уменьшении объёма вдвое давление не уменьшается, а увеличивается вдвое (P1V1 = P2V2).",
        "ar": "في قانون بويل يتناسب الضغط عكسيًا مع الحجم؛ فإذا انخفض الحجم إلى النصف لا ينخفض الضغط إلى النصف بل يتضاعف (P1V1 = P2V2).",
        "zh": "波义耳定律中压强与体积成反比；体积减半时压强不是减半，而是加倍（P1V1 = P2V2）。",
        "ku": "Di zagona Boyle de zext û qebare berevajî rêjeyî ne; heke qebare nîv bibe, zext nîv nabe, ducar dibe (P1V1 = P2V2)."
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
        "ku": "Zagona Charles: Di zexta domdar û hejmara molan de, qebare û germahiya mutleq rasterast lihevhatî ne (V1/T1 = V2/T2)."
      },
      "trap": {
        "tr": "Sabit basınçta bir gazın sıcaklığı 20 °C'den 40 °C'ye çıkarılırsa hacmi 2 katına çıkar.",
        "en": "At constant pressure, when the temperature of a gas rises from 20 °C to 40 °C, its volume doubles.",
        "de": "Steigt bei konstantem Druck die Temperatur eines Gases von 20 °C auf 40 °C, verdoppelt sich sein Volumen.",
        "fr": "À pression constante, lorsque la température d'un gaz passe de 20 °C à 40 °C, son volume double.",
        "ru": "При постоянном давлении при повышении температуры газа с 20 °C до 40 °C его объём увеличивается вдвое.",
        "ar": "عند ثبات الضغط، إذا ارتفعت درجة حرارة غاز من 20 °C إلى 40 °C يتضاعف حجمه.",
        "zh": "恒压下，气体的温度从 20 °C 升高到 40 °C 时，其体积增大一倍。",
        "ku": "Di zexta domdar de, dema germahiya gazekê ji 20 °C derkeve 40 °C, qebareya wê du qat dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Charles yasasındaki doğru orantı Kelvin sıcaklığıyla kurulur: 293 K'den 313 K'ye çıkış hacmi yalnızca 313/293 ≈ 1,07 katına çıkarır; °C değerinin iki katına çıkması hacmi iki katına çıkarmaz.",
        "en": "The direct proportion in Charles's law uses the Kelvin temperature: going from 293 K to 313 K multiplies the volume by only 313/293 ≈ 1.07; doubling the °C value does not double the volume.",
        "de": "Die direkte Proportionalität im Charles-Gesetz gilt für die Kelvin-Temperatur: Von 293 K auf 313 K steigt das Volumen nur um den Faktor 313/293 ≈ 1,07; eine Verdopplung des °C-Werts verdoppelt das Volumen nicht.",
        "fr": "La proportionnalité de la loi de Charles porte sur la température en kelvins : passer de 293 K à 313 K ne multiplie le volume que par 313/293 ≈ 1,07 ; doubler la valeur en °C ne double pas le volume.",
        "ru": "Прямая пропорциональность в законе Шарля относится к температуре в кельвинах: при переходе от 293 K к 313 K объём увеличивается лишь в 313/293 ≈ 1,07 раза; удвоение значения в °C не удваивает объём.",
        "ar": "التناسب الطردي في قانون شارل يكون مع درجة الحرارة بالكلفن: الانتقال من 293 K إلى 313 K يضاعف الحجم بمقدار 313/293 ≈ 1.07 فقط؛ ومضاعفة القيمة بالسلسيوس لا تضاعف الحجم.",
        "zh": "查理定律中的正比关系针对开尔文温度：从 293 K 升到 313 K，体积只变为原来的 313/293 ≈ 1.07 倍；摄氏数值翻倍并不使体积翻倍。",
        "ku": "Rêjeya rasterast a zagona Charles bi germahiya Kelvin tê danîn: ji 293 K bo 313 K qebare tenê 313/293 ≈ 1.07 qat dibe; ducarbûna nirxa °C qebareyê ducar nake."
      }
    },
    {
      "id": "u12-f05",
      "fact": {
        "tr": "Gay-Lussac Yasası: Sabit hacim ve mol sayısında basınç ile mutlak sıcaklık doğru orantılıdır (P1/T1 = P2/T2).",
        "en": "Gay-Lussac's Law: At constant volume and number of moles, pressure and absolute temperature are directly proportional (P1/T1 = P2/T2).",
        "de": "Gesetz von Gay-Lussac: Bei konstantem Volumen und konstanter Molzahl sind Druck und absolute Temperatur direkt proportional (P1/T1 = P2/T2).",
        "fr": "Loi de Gay-Lussac : à volume et nombre de moles constants, la pression et la température absolue sont directement proportionnelles (P1/T1 = P2/T2).",
        "ru": "Закон Гей-Люссака: при постоянных объёме и количестве молей давление и абсолютная температура прямо пропорциональны (P1/T1 = P2/T2).",
        "ar": "قانون جاي لوساك: عند ثبات الحجم وعدد المولات يتناسب الضغط ودرجة الحرارة المطلقة تناسبًا طرديًا (P1/T1 = P2/T2).",
        "zh": "盖-吕萨克定律：在体积和物质的量不变时，压强与绝对温度成正比（P1/T1 = P2/T2）。",
        "ku": "Zagona Gay-Lussac: Di qebare û hejmara molan a domdar de, zext û germahiya mutleq rasterast lihevhatî ne (P1/T1 = P2/T2)."
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
      },
      "whyTrapIsFalse": {
        "tr": "Isınan gazın tanecikleri hızlanır ve çeperlere daha sık ve daha şiddetli çarpar; bu yüzden sabit hacimde basınç mutlak sıcaklıkla doğru orantılı olarak artar, azalmaz.",
        "en": "When a gas is heated its particles speed up and hit the walls more often and harder, so at constant volume the pressure rises in direct proportion to the absolute temperature; it does not fall.",
        "de": "Beim Erwärmen werden die Gasteilchen schneller und stoßen häufiger und heftiger gegen die Wände; daher steigt der Druck bei konstantem Volumen proportional zur absoluten Temperatur und sinkt nicht.",
        "fr": "Quand on chauffe un gaz, ses particules accélèrent et heurtent les parois plus souvent et plus fort ; à volume constant, la pression augmente donc proportionnellement à la température absolue, elle ne diminue pas.",
        "ru": "При нагревании частицы газа движутся быстрее и чаще и сильнее ударяются о стенки, поэтому при постоянном объёме давление растёт пропорционально абсолютной температуре, а не падает.",
        "ar": "عند تسخين الغاز تتسارع جسيماته وتصطدم بالجدران بتكرار وشدة أكبر، لذلك يزداد الضغط عند ثبات الحجم طرديًا مع درجة الحرارة المطلقة ولا ينقص.",
        "zh": "气体受热时粒子运动加快，撞击器壁更频繁、更猛烈，因此在体积不变时压强随热力学温度成正比增大，而不是减小。",
        "ku": "Dema gaz germ dibe tenekên wê bileztir dibin û pirtir û bihêztir li dîwaran dixin; ji ber vê yekê di qebareya domdar de zext bi germahiya mutleq re rasterast zêde dibe, kêm nabe."
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
      },
      "whyTrapIsFalse": {
        "tr": "Avogadro yasasına göre aynı sıcaklık ve basınçta eşit hacimlerde eşit sayıda mol (tanecik) bulunur, eşit kütle değil; mol kütleleri farklı olduğundan örneğin 1 mol H2 2 g, 1 mol O2 ise 32 g gelir.",
        "en": "Avogadro's law says equal volumes at the same temperature and pressure contain equal numbers of moles (particles), not equal masses; since molar masses differ, 1 mol of H2 weighs 2 g while 1 mol of O2 weighs 32 g.",
        "de": "Nach dem Avogadro-Gesetz enthalten gleiche Volumina bei gleicher Temperatur und gleichem Druck gleich viele Mol (Teilchen), nicht gleiche Massen; da die molaren Massen verschieden sind, wiegt 1 mol H2 2 g, 1 mol O2 aber 32 g.",
        "fr": "Selon la loi d'Avogadro, des volumes égaux à même température et même pression contiennent le même nombre de moles (de particules), pas la même masse ; les masses molaires différant, 1 mol de H2 pèse 2 g et 1 mol de O2 32 g.",
        "ru": "По закону Авогадро равные объёмы при одинаковых температуре и давлении содержат одинаковое число молей (частиц), а не одинаковую массу; молярные массы различны: 1 моль H2 весит 2 г, а 1 моль O2 — 32 г.",
        "ar": "وفق قانون أفوجادرو تحتوي الأحجام المتساوية عند نفس درجة الحرارة والضغط على عدد متساوٍ من المولات (الجسيمات) لا على كتل متساوية؛ ولأن الكتل المولية مختلفة فإن 1 مول من H2 كتلته 2 g بينما 1 مول من O2 كتلته 32 g.",
        "zh": "阿伏加德罗定律说的是同温同压下等体积气体含有相同的物质的量（粒子数），而不是相同的质量；由于摩尔质量不同，1 mol H2 为 2 g，而 1 mol O2 为 32 g。",
        "ku": "Li gorî zagona Avogadro, di heman germahî û zextê de qebareyên wekhev hejmara molan (tenekan) ya wekhev dihewînin, ne girseya wekhev; ji ber ku girseyên molî cuda ne, 1 mol H2 2 g e lê 1 mol O2 32 g e."
      }
    },
    {
      "id": "u12-f07",
      "fact": {
        "tr": "Yoğunluk formülü: P * MA = d * R * T'dir (Pirinç Mandalinayı daha Rahat Tartar).",
        "en": "Density formula: P * MA = d * R * T (derived from PV = nRT using n = m/MA and d = m/V).",
        "de": "Dichteformel: P * MA = d * R * T (folgt aus PV = nRT mit n = m/MA und d = m/V).",
        "fr": "Formule de la masse volumique : P * MA = d * R * T (déduite de PV = nRT avec n = m/MA et d = m/V).",
        "ru": "Формула плотности: P * MA = d * R * T (следует из PV = nRT при n = m/MA и d = m/V).",
        "ar": "صيغة الكثافة: P * MA = d * R * T (تُشتق من PV = nRT باستخدام n = m/MA و d = m/V).",
        "zh": "密度公式：P * MA = d * R * T（由 PV = nRT 结合 n = m/MA 和 d = m/V 推导得到）。",
        "ku": "Formula çirbûnê: P * MA = d * R * T (ji PV = nRT bi n = m/MA û d = m/V tê derxistin)."
      },
      "trap": {
        "tr": "Sabit basınçta bir gazın sıcaklığı artırılırsa yoğunluğu da artar.",
        "en": "At constant pressure, the density of a gas increases as its temperature increases.",
        "de": "Bei konstantem Druck nimmt die Dichte eines Gases mit steigender Temperatur zu.",
        "fr": "À pression constante, la masse volumique d'un gaz augmente lorsque sa température augmente.",
        "ru": "При постоянном давлении плотность газа увеличивается с повышением температуры.",
        "ar": "عند ثبات الضغط تزداد كثافة الغاز بارتفاع درجة حرارته.",
        "zh": "恒压下，气体的密度随温度升高而增大。",
        "ku": "Di zexta domdar de, her ku germahiya gazekê zêde dibe çirbûna wê jî zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "d = P·MA/(R·T) bağıntısına göre sabit basınçta yoğunluk mutlak sıcaklıkla ters orantılıdır: sıcaklık artınca gaz genleşir, kütle değişmeden hacim büyüdüğü için yoğunluk azalır. Sabit hacimli kapta ise kütle ve hacim değişmediğinden yoğunluk sabit kalır.",
        "en": "From d = P·MA/(R·T), at constant pressure density is inversely proportional to absolute temperature: when the temperature rises the gas expands, and since the volume grows while the mass stays the same, the density decreases. In a rigid container mass and volume do not change, so the density stays constant.",
        "de": "Nach d = P·MA/(R·T) ist die Dichte bei konstantem Druck umgekehrt proportional zur absoluten Temperatur: Bei steigender Temperatur dehnt sich das Gas aus, und da das Volumen bei gleicher Masse wächst, nimmt die Dichte ab. Im starren Gefäß bleiben Masse und Volumen gleich, die Dichte bleibt also konstant.",
        "fr": "D'après d = P·MA/(R·T), à pression constante la masse volumique est inversement proportionnelle à la température absolue : quand la température augmente, le gaz se dilate et, le volume augmentant à masse constante, la masse volumique diminue. Dans un récipient rigide, masse et volume ne changent pas et la masse volumique reste constante.",
        "ru": "Из d = P·MA/(R·T) следует, что при постоянном давлении плотность обратно пропорциональна абсолютной температуре: с ростом температуры газ расширяется, объём увеличивается при неизменной массе, и плотность уменьшается. В жёстком сосуде масса и объём не меняются, и плотность остаётся постоянной.",
        "ar": "وفق العلاقة d = P·MA/(R·T) تتناسب الكثافة عكسيًا مع درجة الحرارة المطلقة عند ثبات الضغط: بارتفاع درجة الحرارة يتمدد الغاز فيزداد الحجم مع ثبات الكتلة فتقل الكثافة. أما في الوعاء الصلب فلا تتغير الكتلة ولا الحجم فتبقى الكثافة ثابتة.",
        "zh": "由 d = P·MA/(R·T) 可知，恒压下密度与绝对温度成反比：温度升高时气体膨胀，质量不变而体积增大，密度减小。在刚性容器中质量和体积都不变，密度保持不变。",
        "ku": "Li gorî d = P·MA/(R·T), di zexta domdar de çirbûn bi germahiya mutleq re berevajî rêjeyî ye: dema germahî zêde dibe gaz berfireh dibe, girse naguhere lê qebare mezin dibe, loma çirbûn kêm dibe. Di firaxa hişk de girse û qebare naguherin, loma çirbûn domdar dimîne."
      }
    },
    {
      "id": "u12-f08",
      "fact": {
        "tr": "Birleşik gaz denklemi: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2)'dir.",
        "en": "The combined gas equation is: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
        "de": "Die kombinierte Gasgleichung lautet: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
        "fr": "L'équation des gaz combinés est la suivante : (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
        "ru": "Комбинированное уравнение газа: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
        "ar": "معادلة الغاز المجمعة هي: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2).",
        "zh": "组合气体方程为：(P1*V1) / (n1*T1) = (P2*V2) / (n2*T2)。",
        "ku": "Wekheviya gazê ya hevgirtî ev e: (P1*V1) / (n1*T1) = (P2*V2) / (n2*T2)."
      },
      "trap": {
        "tr": "Birleşik gaz denklemi gazın cinsine göre değişir; her gaz için farklı bir bağıntı kullanılır.",
        "en": "The combined gas equation depends on the identity of the gas; a different relation is used for each gas.",
        "de": "Die kombinierte Gasgleichung hängt von der Art des Gases ab; für jedes Gas gilt eine andere Beziehung.",
        "fr": "L'équation combinée des gaz dépend de la nature du gaz ; une relation différente s'applique à chaque gaz.",
        "ru": "Объединённое газовое уравнение зависит от природы газа; для каждого газа используется своё соотношение.",
        "ar": "تختلف معادلة الغازات الموحدة باختلاف نوع الغاز؛ فلكل غاز علاقة مختلفة.",
        "zh": "合并气体方程因气体种类而异，每种气体要用不同的关系式。",
        "ku": "Hevkêşeya gazê ya yekbûyî li gorî cureyê gazê diguhere; ji bo her gazê têkiliyeke cuda tê bikaranîn."
      },
      "whyTrapIsFalse": {
        "tr": "İdeal gazlar için P, V, n ve T arasındaki ilişki gazın cinsinden bağımsızdır; birleşik gaz denkleminde gazın türü veya mol kütlesi yer almaz, mol kütlesi yalnızca kütle ve yoğunluk hesabında gerekir.",
        "en": "For ideal gases the relation between P, V, n and T does not depend on the identity of the gas; the combined gas equation contains neither the type of gas nor its molar mass — molar mass is needed only for mass and density calculations.",
        "de": "Für ideale Gase hängt die Beziehung zwischen P, V, n und T nicht von der Gasart ab; in der kombinierten Gasgleichung kommen weder Gasart noch molare Masse vor – die molare Masse braucht man nur für Masse- und Dichteberechnungen.",
        "fr": "Pour les gaz parfaits, la relation entre P, V, n et T ne dépend pas de la nature du gaz ; l'équation combinée ne contient ni la nature du gaz ni sa masse molaire, qui n'est nécessaire que pour les calculs de masse et de masse volumique.",
        "ru": "Для идеальных газов связь между P, V, n и T не зависит от природы газа; в объединённом газовом законе нет ни вида газа, ни его молярной массы — она нужна только для расчёта массы и плотности.",
        "ar": "بالنسبة للغازات المثالية لا تعتمد العلاقة بين P وV وn وT على نوع الغاز؛ فمعادلة الغازات الموحدة لا تتضمن نوع الغاز ولا كتلته المولية، والكتلة المولية لا تلزم إلا في حساب الكتلة والكثافة.",
        "zh": "对理想气体而言，P、V、n、T 之间的关系与气体种类无关；合并气体方程中既不含气体种类也不含摩尔质量，摩尔质量只在计算质量和密度时才需要。",
        "ku": "Ji bo gazên îdeal têkiliya di navbera P, V, n û T de bi cureyê gazê ve girêdayî nîne; di hevkêşeya gazê ya yekbûyî de ne cureyê gazê ne jî girseya molî heye — girseya molî tenê ji bo hesabê girse û çirbûnê pêwîst e."
      }
    },
    {
      "id": "u12-f09",
      "fact": {
        "tr": "Sürtünmesiz pistonlu kaplar ve esnek balonlar sabit basınçlı sistemlere örnektir (iç basınç dış basınca eşittir).",
        "en": "Containers with a frictionless piston and flexible balloons are examples of constant-pressure systems (internal pressure equals external pressure).",
        "de": "Gefäße mit reibungsfreiem Kolben und elastische Ballons sind Beispiele für Systeme mit konstantem Druck (Innendruck gleich Außendruck).",
        "fr": "Les récipients à piston sans frottement et les ballons souples sont des exemples de systèmes à pression constante (pression intérieure égale à la pression extérieure).",
        "ru": "Сосуды с поршнем без трения и эластичные шары — примеры систем с постоянным давлением (внутреннее давление равно внешнему).",
        "ar": "الأوعية ذات المكبس عديم الاحتكاك والبالونات المرنة أمثلة على الأنظمة ذات الضغط الثابت (الضغط الداخلي يساوي الضغط الخارجي).",
        "zh": "带无摩擦活塞的容器和弹性气球是恒压体系的例子（内部压强等于外部压强）。",
        "ku": "Firaxên bi pistona bê sûrtin û balonên nerm mînakên pergalên bi zexta domdar in (zexta hundir bi zexta derve re wekhev e)."
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
      },
      "whyTrapIsFalse": {
        "tr": "Çelik kabın hacmi sabittir ve dış ortamla basınç dengesi kurmaz; içerideki basınç gazın mol sayısına ve sıcaklığına bağlıdır, atmosfer basıncından büyük de küçük de olabilir.",
        "en": "A steel container has a fixed volume and does not equalise its pressure with the surroundings; the pressure inside depends on the amount of gas and the temperature and can be higher or lower than atmospheric pressure.",
        "de": "Ein Stahlbehälter hat ein festes Volumen und gleicht seinen Druck nicht an die Umgebung an; der Innendruck hängt von der Gasmenge und der Temperatur ab und kann größer oder kleiner als der Atmosphärendruck sein.",
        "fr": "Un récipient en acier a un volume fixe et n'équilibre pas sa pression avec l'extérieur ; la pression intérieure dépend de la quantité de gaz et de la température et peut être supérieure ou inférieure à la pression atmosphérique.",
        "ru": "Стальной сосуд имеет постоянный объём и не выравнивает давление с окружающей средой; давление внутри зависит от количества газа и температуры и может быть как выше, так и ниже атмосферного.",
        "ar": "حجم الوعاء الفولاذي ثابت ولا يحقق توازنًا في الضغط مع الوسط الخارجي؛ فالضغط داخله يعتمد على كمية الغاز ودرجة الحرارة وقد يكون أكبر أو أصغر من الضغط الجوي.",
        "zh": "钢瓶容积固定，不会与外界达到压强平衡；瓶内压强取决于气体的物质的量和温度，可以高于也可以低于大气压。",
        "ku": "Qebareya firaxa polayî sabît e û zexta xwe bi derve re wekhev nake; zexta hundir bi mîqdara gazê û germahiyê ve girêdayî ye û dikare ji zexta atmosferê mezintir an piçûktir be."
      }
    },
    {
      "id": "u12-f10",
      "fact": {
        "tr": "Kinetik teoriye göre gaz tanecikleri sürekli, rastgele ve hızlı hareket eder; çarpışmalar arasında doğrusal yol izler.",
        "en": "According to kinetic theory, gas particles move constantly, randomly and rapidly, travelling in straight lines between collisions.",
        "de": "Nach der kinetischen Gastheorie bewegen sich Gasteilchen ständig, zufällig und schnell und legen zwischen den Stößen geradlinige Wege zurück.",
        "fr": "Selon la théorie cinétique, les particules de gaz se déplacent constamment, aléatoirement et rapidement, en ligne droite entre deux collisions.",
        "ru": "Согласно кинетической теории, частицы газа движутся непрерывно, хаотично и быстро, прямолинейно между столкновениями.",
        "ar": "وفقًا للنظرية الحركية، تتحرك جسيمات الغاز باستمرار وبشكل عشوائي وسريع، وتسلك مسارات مستقيمة بين التصادمات.",
        "zh": "根据分子运动论，气体粒子不停地做快速、无规则运动，在两次碰撞之间沿直线运动。",
        "ku": "Li gorî teoriya kînetîk, tenekên gazê bi berdewamî, bêserûber û bi lez dilivin û di navbera du pevketinan de li ser xêza rast diçin."
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
      },
      "whyTrapIsFalse": {
        "tr": "Kinetik teoriye göre gaz tanecikleri çarpışmalar arasında herhangi bir kuvvetin etkisinde değildir, bu yüzden doğrusal yol izler; yönleri yalnızca başka bir taneciğe veya çepere çarpınca değişir, dairesel yörünge yoktur.",
        "en": "According to kinetic theory gas particles feel no forces between collisions, so they move in straight lines; their direction changes only when they hit another particle or a wall — there are no circular orbits.",
        "de": "Nach der kinetischen Theorie wirken zwischen den Stößen keine Kräfte auf die Gasteilchen, daher bewegen sie sich geradlinig; ihre Richtung ändert sich nur beim Stoß mit einem anderen Teilchen oder der Wand – Kreisbahnen gibt es nicht.",
        "fr": "Selon la théorie cinétique, aucune force n'agit sur les particules de gaz entre deux chocs ; elles se déplacent donc en ligne droite et ne changent de direction qu'en heurtant une autre particule ou une paroi — il n'y a pas d'orbites circulaires.",
        "ru": "Согласно кинетической теории, между столкновениями на частицы газа не действуют силы, поэтому они движутся прямолинейно; направление меняется только при ударе о другую частицу или стенку — круговых орбит нет.",
        "ar": "وفق النظرية الحركية لا تؤثر أي قوة في جسيمات الغاز بين التصادمات، لذا تتحرك في خطوط مستقيمة ولا يتغير اتجاهها إلا عند اصطدامها بجسيم آخر أو بجدار الوعاء؛ فلا توجد مدارات دائرية.",
        "zh": "根据分子运动论，气体粒子在两次碰撞之间不受力，因此做直线运动；只有撞到其他粒子或器壁时方向才改变，不存在圆形轨道。",
        "ku": "Li gorî teoriya kînetîk, di navbera lêketinan de tu hêz li ser tenekên gazê nayê; loma ew bi rêya rast diçin û arasteya wan tenê dema li tenekek din an li dîwar dixin diguhere — rêgeha dorvekirî tune ye."
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
      },
      "whyTrapIsFalse": {
        "tr": "İdeal gaz tanecikleri arasındaki çarpışmalar esnektir: bir taneciğin kaybettiği enerjiyi diğeri kazanır ve sabit sıcaklıkta toplam kinetik enerji değişmez; enerji kaybolsaydı kapalı kaptaki gaz kendiliğinden soğur ve basıncı düşerdi.",
        "en": "Collisions between ideal gas particles are elastic: the energy one particle loses is gained by the other, and at constant temperature the total kinetic energy does not change; if energy were lost, a gas in a closed container would cool down and its pressure would drop by itself.",
        "de": "Stöße zwischen idealen Gasteilchen sind elastisch: Die Energie, die ein Teilchen verliert, gewinnt das andere, und bei konstanter Temperatur bleibt die gesamte kinetische Energie gleich; ginge Energie verloren, würde ein Gas im geschlossenen Gefäß von selbst abkühlen und sein Druck sinken.",
        "fr": "Les chocs entre particules d'un gaz parfait sont élastiques : l'énergie perdue par l'une est gagnée par l'autre et, à température constante, l'énergie cinétique totale ne change pas ; si de l'énergie se perdait, un gaz enfermé se refroidirait et sa pression baisserait d'elle-même.",
        "ru": "Столкновения частиц идеального газа упругие: энергию, потерянную одной частицей, получает другая, и при постоянной температуре суммарная кинетическая энергия не меняется; если бы энергия терялась, газ в закрытом сосуде сам остывал бы и его давление падало.",
        "ar": "التصادمات بين جسيمات الغاز المثالي مرنة: ما يفقده جسيم من طاقة يكسبه الآخر، وتبقى الطاقة الحركية الكلية ثابتة عند ثبات درجة الحرارة؛ ولو فُقدت الطاقة لبرد الغاز في الوعاء المغلق من تلقاء نفسه وانخفض ضغطه.",
        "zh": "理想气体粒子之间的碰撞是弹性的：一个粒子失去的能量被另一个粒子获得，温度不变时总动能不变；如果能量会损失，密闭容器中的气体就会自行冷却，压强也会下降。",
        "ku": "Lêketinên di navbera tenekên gaza îdeal de elastîk in: enerjiya ku tenekek winda dike ya din bi dest dixe û di germahiya domdar de enerjiya kînetîk a giştî naguhere; heke enerjî winda bibûya, gaza di firaxa girtî de bi xwe sar dibû û zexta wê dadiket."
      }
    },
    {
      "id": "u12-f12",
      "fact": {
        "tr": "Gazlar bulundukları kabın hacmini tamamen doldurur ve kabın çeperlerine her yönde eşit basınç uygular.",
        "en": "Gases completely fill the volume of their container and exert equal pressure on the container walls in every direction.",
        "de": "Gase füllen das Volumen ihres Behälters vollständig aus und üben in alle Richtungen den gleichen Druck auf die Gefäßwände aus.",
        "fr": "Les gaz remplissent complètement le volume de leur récipient et exercent une pression égale sur les parois dans toutes les directions.",
        "ru": "Газы полностью заполняют объём сосуда и оказывают одинаковое давление на его стенки во всех направлениях.",
        "ar": "تملأ الغازات حجم الوعاء الذي توجد فيه تمامًا وتؤثر بضغط متساوٍ في جدرانه في جميع الاتجاهات.",
        "zh": "气体完全充满所在容器的容积，并在各个方向上对器壁施加相等的压强。",
        "ku": "Gaz qebareya firaxa xwe bi tevahî tijî dikin û li her alî ve li dîwarên firaxê zexta wekhev dikin."
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
      },
      "whyTrapIsFalse": {
        "tr": "Gaz tanecikleri her yönde rastgele ve eşit sıklıkta hareket ettiğinden kabın tüm çeperlerine aynı basıncı uygular; sıvılardaki gibi derinlikle artan basınç, gazlarda sıradan kap boyutlarında fark edilmez.",
        "en": "Gas particles move randomly and equally often in every direction, so they exert the same pressure on all walls of the container; the depth-dependent pressure seen in liquids is negligible for gases in ordinary containers.",
        "de": "Gasteilchen bewegen sich zufällig und gleich häufig in alle Richtungen und üben daher auf alle Wände des Gefäßes den gleichen Druck aus; ein mit der Tiefe zunehmender Druck wie bei Flüssigkeiten ist bei Gasen in gewöhnlichen Gefäßen vernachlässigbar.",
        "fr": "Les particules de gaz se déplacent au hasard et aussi souvent dans toutes les directions ; elles exercent donc la même pression sur toutes les parois du récipient. La pression croissant avec la profondeur, comme dans les liquides, est négligeable pour un gaz dans un récipient ordinaire.",
        "ru": "Частицы газа движутся хаотично и одинаково часто во всех направлениях, поэтому оказывают одинаковое давление на все стенки сосуда; рост давления с глубиной, как в жидкостях, для газа в обычном сосуде пренебрежимо мал.",
        "ar": "تتحرك جسيمات الغاز عشوائيًا وبالتكرار نفسه في جميع الاتجاهات، لذا تؤثر بالضغط نفسه في جميع جدران الوعاء؛ أما ازدياد الضغط مع العمق كما في السوائل فهو مهمل للغازات في الأوعية العادية.",
        "zh": "气体粒子向各个方向无规则且同样频繁地运动，因此对容器各壁施加相同的压强；像液体那样随深度增大的压强，对普通容器中的气体可以忽略。",
        "ku": "Tenekên gazê bi awayekî tesadufî û bi heman pirbûnê ber bi her alî ve diçin, loma li hemû dîwarên firaxê heman zextê dikin; zexta ku wek di şilekan de bi kûrahiyê zêde dibe, ji bo gazê di firaxên asayî de nayê hesibandin."
      }
    },
    {
      "id": "u12-f13",
      "fact": {
        "tr": "Birbiriyle tepkimeye girmeyen gazlar her oranda karışarak homojen karışım oluşturur.",
        "en": "Gases that do not react with each other mix in all proportions to form homogeneous mixtures.",
        "de": "Gase, die nicht miteinander reagieren, mischen sich in jedem Verhältnis zu homogenen Gemischen.",
        "fr": "Les gaz qui ne réagissent pas entre eux se mélangent en toutes proportions pour former des mélanges homogènes.",
        "ru": "Газы, не реагирующие друг с другом, смешиваются в любых соотношениях и образуют однородные смеси.",
        "ar": "الغازات التي لا تتفاعل مع بعضها تمتزج بجميع النسب مكوّنة مخاليط متجانسة.",
        "zh": "彼此不发生反应的气体能以任意比例混合，形成均匀混合物。",
        "ku": "Gazên ku bi hev re reaksiyon nakin di her rêjeyê de tevlihev dibin û tevliheviyên homojen çêdikin."
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
      },
      "whyTrapIsFalse": {
        "tr": "Gaz tanecikleri arasında büyük boşluklar vardır ve tanecikler sürekli hareket ederek birbirinin içine yayılır (difüzyon); bu yüzden birbiriyle tepkimeye girmeyen gazlar daima homojen karışım (gaz çözeltisi) oluşturur.",
        "en": "There are large empty spaces between gas particles and the particles keep moving and spread into each other (diffusion); therefore gases that do not react with each other always form a homogeneous mixture (a gaseous solution).",
        "de": "Zwischen Gasteilchen gibt es große Zwischenräume, und die Teilchen bewegen sich ständig und verteilen sich ineinander (Diffusion); daher bilden Gase, die nicht miteinander reagieren, stets ein homogenes Gemisch (eine Gaslösung).",
        "fr": "Il existe de grands espaces vides entre les particules de gaz, qui se déplacent sans cesse et se répandent les unes dans les autres (diffusion) ; des gaz qui ne réagissent pas entre eux forment donc toujours un mélange homogène (une solution gazeuse).",
        "ru": "Между частицами газа большие промежутки, а сами частицы непрерывно движутся и проникают друг в друга (диффузия); поэтому газы, не реагирующие между собой, всегда образуют однородную смесь (газовый раствор).",
        "ar": "توجد فراغات كبيرة بين جسيمات الغاز، والجسيمات تتحرك باستمرار فتنتشر في بعضها (الانتشار)؛ لذلك تكوّن الغازات التي لا تتفاعل مع بعضها دائمًا مخلوطًا متجانسًا (محلولًا غازيًا).",
        "zh": "气体粒子之间有很大的空隙，粒子不停运动并相互扩散；因此彼此不发生反应的气体总是形成均匀混合物（气态溶液）。",
        "ku": "Di navbera tenekên gazê de valahiyên mezin hene û tenek bi berdewamî diçin û di nav hev de belav dibin (dîfûzyon); ji ber vê yekê gazên ku bi hev re reaksiyon nakin her dem tevliheviyeke homojen (çareseriya gazê) çêdikin."
      }
    },
    {
      "id": "u12-f14",
      "fact": {
        "tr": "Manometreler kapalı kaplardaki gaz basıncını ölçer; açık veya kapalı uçlu olabilir ve basınç cıva seviyeleri arasındaki farktan bulunur.",
        "en": "Manometers measure the pressure of a gas in a closed container; they may be open-ended or closed-ended, and the pressure is found from the difference in mercury levels.",
        "de": "Manometer messen den Druck eines Gases in einem geschlossenen Behälter; sie können offen oder geschlossen sein, und der Druck ergibt sich aus dem Höhenunterschied der Quecksilberspiegel.",
        "fr": "Les manomètres mesurent la pression d'un gaz dans un récipient fermé ; ils peuvent être à bout ouvert ou fermé, et la pression se déduit de la différence des niveaux de mercure.",
        "ru": "Манометры измеряют давление газа в закрытом сосуде; они бывают открытыми и закрытыми, а давление определяют по разности уровней ртути.",
        "ar": "تقيس المانومترات ضغط الغاز في وعاء مغلق، وقد تكون مفتوحة الطرف أو مغلقة الطرف، ويُحسب الضغط من فرق مستويي الزئبق.",
        "zh": "压力计用于测量密闭容器中气体的压强，可分为开口式和闭口式，压强由两侧汞面高度差求得。",
        "ku": "Manometre zexta gazê di firaxeke girtî de dipîvin; dikarin serê wan vekirî an girtî be û zext ji cudahiya astên cîweyê tê dîtin."
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
      },
      "whyTrapIsFalse": {
        "tr": "Havanın nemini ölçen alet higrometredir; manometre ise kapalı bir kaptaki gazın basıncını U borusundaki sıvı (genellikle cıva) seviyeleri arasındaki farktan ölçer.",
        "en": "The instrument that measures humidity is a hygrometer; a manometer measures the pressure of a gas in a closed container from the difference between the liquid (usually mercury) levels in a U-tube.",
        "de": "Das Gerät zur Messung der Luftfeuchtigkeit ist das Hygrometer; ein Manometer misst den Druck eines Gases in einem geschlossenen Gefäß aus dem Höhenunterschied der Flüssigkeit (meist Quecksilber) in einem U-Rohr.",
        "fr": "L'appareil qui mesure l'humidité est l'hygromètre ; un manomètre mesure la pression d'un gaz dans un récipient fermé à partir de la différence de niveau du liquide (généralement du mercure) dans un tube en U.",
        "ru": "Влажность воздуха измеряют гигрометром; манометр же измеряет давление газа в закрытом сосуде по разности уровней жидкости (обычно ртути) в U-образной трубке.",
        "ar": "الجهاز الذي يقيس رطوبة الهواء هو مقياس الرطوبة (الهيغرومتر)؛ أما المانومتر فيقيس ضغط غاز في وعاء مغلق من فرق مستويي السائل (الزئبق عادة) في أنبوب على شكل U.",
        "zh": "测量空气湿度的仪器是湿度计；压强计（U 形管压力计）是根据 U 形管中液体（通常是汞）液面高度差来测量密闭容器中气体压强的。",
        "ku": "Amûra ku şiliya hewayê dipîve hîgrometre ye; manometre jî zexta gazê ya di firaxeke girtî de ji ferqa asta şilekê (bi gelemperî cîwa) di lûleya U de dipîve."
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
        "tr": "Sürtünmesiz pistonlu kaba sabit sıcaklıkta gaz eklendiğinde gazın basıncı artar.",
        "en": "When gas is added at constant temperature to a container with a frictionless piston, the gas pressure increases.",
        "de": "Wird einem Gefäß mit reibungsfreiem Kolben bei konstanter Temperatur Gas zugeführt, steigt der Gasdruck.",
        "fr": "Lorsqu'on ajoute du gaz à température constante dans un récipient à piston sans frottement, la pression du gaz augmente.",
        "ru": "При добавлении газа при постоянной температуре в сосуд с поршнем без трения давление газа возрастает.",
        "ar": "عند إضافة غاز عند ثبات درجة الحرارة إلى وعاء ذي مكبس عديم الاحتكاك يزداد ضغط الغاز.",
        "zh": "恒温下向带无摩擦活塞的容器中加入气体时，气体的压强增大。",
        "ku": "Dema ku di germahiya domdar de gaz li firaxa bi pistona bê sûrtin tê zêdekirin, zexta gazê zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Sürtünmesiz piston, iç basınç dış basıncı aştığı anda yukarı kayar ve basınçlar yeniden eşitlenir; bu yüzden eklenen gaz basıncı değil hacmi artırır.",
        "en": "A frictionless piston slides up as soon as the inside pressure exceeds the outside pressure, and the pressures become equal again; so the added gas increases the volume, not the pressure.",
        "de": "Ein reibungsfreier Kolben gleitet nach oben, sobald der Innendruck den Außendruck übersteigt, und die Drücke gleichen sich wieder aus; das zugeführte Gas vergrößert also das Volumen, nicht den Druck.",
        "fr": "Un piston sans frottement remonte dès que la pression intérieure dépasse la pression extérieure, et les pressions s'égalisent de nouveau ; le gaz ajouté augmente donc le volume, pas la pression.",
        "ru": "Поршень без трения поднимается, как только внутреннее давление превысит внешнее, и давления снова выравниваются; поэтому добавленный газ увеличивает объём, а не давление.",
        "ar": "ينزلق المكبس عديم الاحتكاك إلى أعلى بمجرد أن يتجاوز الضغط الداخلي الضغط الخارجي فيتساوى الضغطان من جديد؛ لذلك يزيد الغاز المضاف الحجم لا الضغط.",
        "zh": "无摩擦活塞在内部压强一超过外部压强时就向上移动，使内外压强重新相等；因此加入的气体增大的是体积而不是压强。",
        "ku": "Pistona bê sûrtin gava zexta hundir ji ya derve derbas bibe ber bi jor ve diçe û zext dîsa wekhev dibin; loma gaza ku tê zêdekirin qebareyê zêde dike, ne zextê."
      }
    },
    {
      "id": "u12-f16",
      "fact": {
        "tr": "Sabit hacimli kapalı bir kaptaki belirli miktar gazın sıcaklığı Kelvin cinsinden iki katına çıkarılırsa basıncı da iki katına çıkar.",
        "en": "If the Kelvin temperature of a fixed amount of gas in a closed rigid container is doubled, its pressure also doubles.",
        "de": "Wird die Kelvin-Temperatur einer festen Gasmenge in einem geschlossenen Gefäß mit konstantem Volumen verdoppelt, verdoppelt sich auch ihr Druck.",
        "fr": "Si la température en kelvins d'une quantité fixe de gaz dans un récipient fermé à volume constant est doublée, sa pression double aussi.",
        "ru": "Если температуру (в кельвинах) постоянного количества газа в закрытом сосуде постоянного объёма увеличить вдвое, его давление тоже удвоится.",
        "ar": "إذا تضاعفت درجة الحرارة بالكلفن لكمية ثابتة من الغاز في وعاء مغلق ثابت الحجم، يتضاعف ضغطها أيضًا.",
        "zh": "定容密闭容器中一定量气体的开尔文温度加倍时，其压强也加倍。",
        "ku": "Ger germahiya (bi Kelvin) mîqdareke sabît a gazê di firaxeke girtî ya bi qebareya sabît de du qat bibe, zexta wê jî du qat dibe."
      },
      "trap": {
        "tr": "Sabit hacimli kaptaki bir gazın sıcaklığı 25 °C'den 50 °C'ye çıkarılırsa basıncı iki katına çıkar.",
        "en": "If the temperature of a gas in a rigid container rises from 25 °C to 50 °C, its pressure doubles.",
        "de": "Steigt die Temperatur eines Gases in einem Gefäß mit konstantem Volumen von 25 °C auf 50 °C, verdoppelt sich sein Druck.",
        "fr": "Si la température d'un gaz dans un récipient à volume constant passe de 25 °C à 50 °C, sa pression double.",
        "ru": "Если температура газа в сосуде постоянного объёма повышается с 25 °C до 50 °C, его давление удваивается.",
        "ar": "إذا ارتفعت درجة حرارة غاز في وعاء ثابت الحجم من 25 °C إلى 50 °C يتضاعف ضغطه.",
        "zh": "定容容器中气体的温度从 25 °C 升高到 50 °C 时，其压强加倍。",
        "ku": "Ger germahiya gazekê di firaxeke bi qebareya sabît de ji 25 °C derkeve 50 °C, zexta wê du qat dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Basınç Celsius değil Kelvin sıcaklığıyla orantılıdır: 25 °C = 298 K, 50 °C = 323 K olduğundan basınç yalnızca 323/298 ≈ 1,08 katına çıkar.",
        "en": "Pressure is proportional to the Kelvin temperature, not the Celsius value: 25 °C = 298 K and 50 °C = 323 K, so the pressure increases only by a factor of 323/298 ≈ 1.08.",
        "de": "Der Druck ist proportional zur Kelvin-Temperatur, nicht zum Celsius-Wert: 25 °C = 298 K und 50 °C = 323 K, der Druck steigt also nur um den Faktor 323/298 ≈ 1,08.",
        "fr": "La pression est proportionnelle à la température en kelvins, pas à la valeur en Celsius : 25 °C = 298 K et 50 °C = 323 K, la pression n'est donc multipliée que par 323/298 ≈ 1,08.",
        "ru": "Давление пропорционально температуре в кельвинах, а не в градусах Цельсия: 25 °C = 298 K, 50 °C = 323 K, поэтому давление возрастает лишь в 323/298 ≈ 1,08 раза.",
        "ar": "يتناسب الضغط مع درجة الحرارة بالكلفن لا بالسلسيوس: 25 °C = 298 K و50 °C = 323 K، لذا يزداد الضغط بمقدار 323/298 ≈ 1.08 مرة فقط.",
        "zh": "压强与开尔文温度成正比，而不是与摄氏数值成正比：25 °C = 298 K，50 °C = 323 K，所以压强只变为原来的 323/298 ≈ 1.08 倍。",
        "ku": "Zext bi germahiya Kelvin re rêjeyî ye, ne bi nirxa Celsius: 25 °C = 298 K û 50 °C = 323 K, loma zext tenê 323/298 ≈ 1.08 qat dibe."
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
        "en": "Charles's Law",
        "de": "Gesetz von Charles",
        "fr": "Loi de Charles",
        "ru": "Закон Шарля",
        "ar": "قانون تشارلز",
        "zh": "查理定律",
        "ku": "Qanûna Charles"
      },
      "distinction": {
        "tr": "Boyle yasası sabit sıcaklıkta basınç ile hacmin ters orantılı olduğunu; Charles yasası ise sabit basınçta hacim ile mutlak sıcaklığın doğru orantılı olduğunu ifade eder.",
        "en": "Boyle's law states that pressure and volume are inversely proportional at constant temperature; Charles's law states that volume and absolute temperature are directly proportional at constant pressure.",
        "de": "Boyles Gesetz besagt, dass Druck und Volumen bei konstanter Temperatur umgekehrt proportional sind; nach Charles sind Volumen und absolute Temperatur bei konstantem Druck direkt proportional.",
        "fr": "La loi de Boyle énonce que la pression et le volume sont inversement proportionnels à température constante ; la loi de Charles énonce que le volume et la température absolue sont directement proportionnels à pression constante.",
        "ru": "Закон Бойля гласит, что при постоянной температуре давление и объём обратно пропорциональны; закон Шарля гласит, что при постоянном давлении объём и абсолютная температура прямо пропорциональны.",
        "ar": "ينص قانون بويل على أن الضغط والحجم يتناسبان عكسيًا عند ثبات درجة الحرارة؛ أما قانون تشارلز فينص على أن الحجم ودرجة الحرارة المطلقة يتناسبان طرديًا عند ثبات الضغط.",
        "zh": "波义耳定律指出恒温下压强与体积成反比；查理定律指出恒压下体积与绝对温度成正比。",
        "ku": "Qanûna Boyle dibêje ku di germahiya domdar de zext û qebare berevajî rêjeyî ne; qanûna Charles dibêje ku di zexta domdar de qebare û germahiya mutleq rasterast rêjeyî ne."
      }
    },
    {
      "id": "u12-c02",
      "conceptA": {
        "tr": "Pistonlu Kap",
        "en": "Piston Vessel",
        "de": "Kolbengefäß",
        "fr": "Récipient à piston",
        "ru": "Поршневой сосуд",
        "ar": "وعاء ذو مكبس",
        "zh": "活塞容器",
        "ku": "Firaxa bi piston"
      },
      "conceptB": {
        "tr": "Sabit Hacimli Kap",
        "en": "Fixed-Volume Container",
        "de": "Gefäß mit konstantem Volumen",
        "fr": "Récipient à volume constant",
        "ru": "Сосуд постоянного объёма",
        "ar": "وعاء ثابت الحجم",
        "zh": "固定容积容器",
        "ku": "Firaxa bi qebareya sabît"
      },
      "distinction": {
        "tr": "Pistonlu kapta basınç sabit, hacim değişkendir; sabit hacimli (çelik) kapta ise hacim sabit, basınç değişkendir.",
        "en": "In a piston vessel the pressure is constant and the volume is variable; in a fixed-volume (steel) container the volume is constant and the pressure is variable.",
        "de": "Kolbengefäß: Der Druck ist konstant, das Volumen veränderlich; im Stahlgefäß mit konstantem Volumen ist das Volumen konstant und der Druck veränderlich.",
        "fr": "Dans un récipient à piston, la pression est constante et le volume variable ; dans un récipient à volume constant (en acier), le volume est constant et la pression variable.",
        "ru": "Поршневой сосуд: давление постоянно, а объём переменный; в стальном сосуде постоянного объёма объём постоянен, а давление переменное.",
        "ar": "وعاء ذو مكبس: يكون الضغط فيه ثابتًا والحجم متغيرًا؛ أما في الوعاء الفولاذي الثابت الحجم فيكون الحجم ثابتًا والضغط متغيرًا.",
        "zh": "活塞容器中压强恒定、体积可变；固定容积的钢制容器中体积恒定、压强可变。",
        "ku": "Di firaxa bi piston de zext domdar e û qebare diguhere; di firaxa bi qebareya sabît (pola) de qebare domdar e û zext diguhere."
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
        "tr": "Gay-Lussac sabit hacimde P ile T'nin doğru orantısını; Avogadro sabit P ve T'de V ile mol sayısının doğru orantısını açıklar.",
        "en": "Gay-Lussac describes the direct proportionality of P and T at constant volume; Avogadro describes the direct proportionality of V and the number of moles at constant P and T.",
        "de": "Gay-Lussac beschreibt die direkte Proportionalität von P und T bei konstantem Volumen; Avogadro die direkte Proportionalität von V und Molzahl bei konstantem P und T.",
        "fr": "Gay-Lussac décrit la proportionnalité directe entre P et T à volume constant ; Avogadro décrit la proportionnalité directe entre V et le nombre de moles à P et T constants.",
        "ru": "Гей-Люссак описывает прямую пропорциональность P и T при постоянном объёме; Авогадро — прямую пропорциональность V и числа молей при постоянных P и T.",
        "ar": "يصف قانون جاي لوساك التناسب الطردي بين P وT عند ثبات الحجم؛ ويصف قانون أفوجادرو التناسب الطردي بين V وعدد المولات عند ثبات P وT.",
        "zh": "盖-吕萨克定律指出定容下 P 与 T 成正比；阿伏加德罗定律指出在恒定的 P 和 T 下 V 与物质的量（摩尔数）成正比。",
        "ku": "Qanûna Gay-Lussac rêjeya rasterast a P û T di qebareya domdar de rave dike; qanûna Avogadro rêjeya rasterast a V û hejmara molan di P û T yên domdar de rave dike."
      }
    },
    {
      "id": "u12-c04",
      "conceptA": {
        "tr": "İdeal Gaz",
        "en": "Ideal Gas",
        "de": "Ideales Gas",
        "fr": "Gaz parfait",
        "ru": "Идеальный газ",
        "ar": "الغاز المثالي",
        "zh": "理想气体",
        "ku": "Gaza îdeal"
      },
      "conceptB": {
        "tr": "Gerçek Gaz",
        "en": "Real Gas",
        "de": "Reales Gas",
        "fr": "Gaz réel",
        "ru": "Реальный газ",
        "ar": "الغاز الحقيقي",
        "zh": "真实气体",
        "ku": "Gaza rastîn"
      },
      "distinction": {
        "tr": "İdeal gazda tanecikler arası çekim kuvveti yoktur ve taneciklerin öz hacmi ihmal edilir; gerçek gazlar yüksek sıcaklık ve düşük basınçta ideal davranışa yaklaşır.",
        "en": "In an ideal gas there are no attractive forces between particles and the particles' own volume is neglected; real gases approach ideal behaviour at high temperature and low pressure.",
        "de": "Ideales Gas: Zwischen den Teilchen gibt es keine Anziehungskräfte, und ihr Eigenvolumen wird vernachlässigt; reale Gase nähern sich bei hoher Temperatur und niedrigem Druck dem idealen Verhalten.",
        "fr": "Dans un gaz parfait, il n'y a pas de forces d'attraction entre les particules et leur volume propre est négligé ; les gaz réels se rapprochent du comportement idéal à haute température et basse pression.",
        "ru": "Идеальный газ: между частицами нет сил притяжения, а собственный объём частиц не учитывается; реальные газы приближаются к идеальному поведению при высокой температуре и низком давлении.",
        "ar": "في الغاز المثالي لا توجد قوى تجاذب بين الجسيمات ويُهمل حجمها الذاتي؛ وتقترب الغازات الحقيقية من السلوك المثالي عند درجات الحرارة المرتفعة والضغوط المنخفضة.",
        "zh": "理想气体粒子间没有引力，粒子本身的体积可忽略；真实气体在高温、低压下接近理想行为。",
        "ku": "Di gaza îdeal de di navbera tenekan de hêza kişandinê tune ye û qebareya tenekan bi xwe nayê hesibandin; gazên rastîn di germahiya bilind û zexta nizm de nêzî tevgera îdeal dibin."
      }
    },
    {
      "id": "u12-c05",
      "conceptA": {
        "tr": "Gaz Yoğunluğu (d = PM/RT)",
        "en": "Gas Density (d = PM/RT)",
        "de": "Gasdichte (d = PM/RT)",
        "fr": "Masse volumique du gaz (d = PM/RT)",
        "ru": "Плотность газа (d = PM/RT)",
        "ar": "كثافة الغاز (d = PM/RT)",
        "zh": "气体密度 (d = PM/RT)",
        "ku": "Çirbûna gazê (d = PM/RT)"
      },
      "conceptB": {
        "tr": "Mol Kütlesi (M)",
        "en": "Molar Mass (M)",
        "de": "Molmasse (M)",
        "fr": "Masse molaire (M)",
        "ru": "Молярная масса (M)",
        "ar": "الكتلة المولية (M)",
        "zh": "摩尔质量 (M)",
        "ku": "Girseya molî (M)"
      },
      "distinction": {
        "tr": "Gaz yoğunluğu basınca ve sıcaklığa bağlı olarak değişir; mol kütlesi ise gazın ayırt edici bir özelliğidir, basınç ve sıcaklıkla değişmez.",
        "en": "Gas density changes with pressure and temperature; molar mass is a characteristic property of the gas and does not change with pressure or temperature.",
        "de": "Die Gasdichte ändert sich mit Druck und Temperatur; die Molmasse ist eine charakteristische Eigenschaft des Gases und ändert sich weder mit dem Druck noch mit der Temperatur.",
        "fr": "La masse volumique du gaz varie avec la pression et la température ; la masse molaire est une propriété caractéristique du gaz et ne varie ni avec la pression ni avec la température.",
        "ru": "Плотность газа меняется с давлением и температурой; молярная масса — характерное свойство газа, она не зависит ни от давления, ни от температуры.",
        "ar": "تتغير كثافة الغاز بتغير الضغط ودرجة الحرارة؛ أما الكتلة المولية فخاصية مميزة للغاز لا تتغير بتغير الضغط أو درجة الحرارة.",
        "zh": "气体密度随压强和温度而变化；摩尔质量是气体的特征性质，不随压强和温度变化。",
        "ku": "Çirbûna gazê bi zext û germahiyê diguhere; girseya molî taybetmendiyeke cihêker a gazê ye û bi zext û germahiyê naguhere."
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
        "ku": "Zexta tevahî"
      },
      "distinction": {
        "tr": "Kısmi basınç, karışımdaki bir gazın aynı sıcaklıkta kabı tek başına doldurduğunda uygulayacağı basınçtır; toplam basınç ise karışımdaki bütün gazların bu basınçlarının toplamıdır.",
        "en": "Partial pressure is the pressure a gas in a mixture would exert if it alone filled the container at the same temperature; total pressure is the sum of these pressures for all the gases in the mixture.",
        "de": "Der Partialdruck ist der Druck, den ein Gas eines Gemisches ausüben würde, wenn es das Gefäß bei gleicher Temperatur allein ausfüllte; der Gesamtdruck ist die Summe dieser Drücke aller Gase des Gemisches.",
        "fr": "La pression partielle est la pression qu'un gaz d'un mélange exercerait s'il occupait seul le récipient à la même température ; la pression totale est la somme de ces pressions pour tous les gaz du mélange.",
        "ru": "Парциальное давление — это давление, которое газ смеси создавал бы, если бы один занимал весь сосуд при той же температуре; общее давление равно сумме таких давлений всех газов смеси.",
        "ar": "الضغط الجزئي هو الضغط الذي يمارسه أحد غازات الخليط لو شغل الوعاء وحده عند درجة الحرارة نفسها؛ أما الضغط الكلي فهو مجموع هذه الضغوط لجميع غازات الخليط.",
        "zh": "分压是混合气体中某一种气体在相同温度下单独占据整个容器时所产生的压强；总压是混合气体中各气体这种压强之和。",
        "ku": "Zexta qismî ew zext e ku gazeke têkelê dê bikira ger di heman germahiyê de bi tenê firaxê tijî bikira; zexta tevahî kombûna van zextên hemû gazên têkelê ye."
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
        "de": "Effusion von Gasen",
        "fr": "Effusion de gaz",
        "ru": "Эффузия газа",
        "ar": "انصباب الغاز",
        "zh": "气体泻流",
        "ku": "Efûzyona gazê"
      },
      "distinction": {
        "tr": "Gaz difüzyonu bir gazın başka bir gaz içinde kendiliğinden yayılmasıdır; efüzyon gazın küçük bir delikten boşluğa kaçmasıdır.",
        "en": "Gas diffusion is the spontaneous spreading of one gas within another gas; effusion is the escape of a gas through a tiny hole into an evacuated region.",
        "de": "Gasdiffusion ist die spontane Ausbreitung eines Gases in einem anderen Gas; Effusion ist das Ausströmen eines Gases durch eine winzige Öffnung in einen evakuierten Raum.",
        "fr": "La diffusion de gaz est la propagation spontanée d'un gaz dans un autre gaz ; l'effusion est l'échappement d'un gaz par un minuscule orifice vers une région vide.",
        "ru": "Газовая диффузия — самопроизвольное распространение одного газа в другом; эффузия — истечение газа через крошечное отверстие в вакуумированную область.",
        "ar": "انتشار الغاز هو تمدد غاز تلقائيًا داخل غاز آخر؛ والتدفق (الانصباب) هو خروج الغاز عبر ثقب صغير جدًا إلى حيّز مفرغ.",
        "zh": "气体扩散是一种气体在另一种气体中自发地扩展；泻流是气体通过微小孔隙逸入真空区域。",
        "ku": "Belavbûna gazê belavbûna xweber a gazekê di nav gazeke din de ye; efûzyon derketina gazê ye bi kunekê pir piçûk ber bi herêmeke vala (bê hewa)."
      }
    },
    {
      "id": "u12-c08",
      "conceptA": {
        "tr": "Buhar",
        "en": "Vapour",
        "de": "Dampf",
        "fr": "Vapeur",
        "ru": "Пар",
        "ar": "البخار",
        "zh": "蒸气",
        "ku": "Hilm"
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
        "tr": "Kritik sıcaklığın altındaki gaz hâline buhar denir; buhar, sıcaklık değiştirilmeden yalnızca basınç artırılarak da sıvılaştırılabilir. Kritik sıcaklığın üzerindeki madde gazdır ve basınç ne kadar artırılırsa artırılsın sıvılaştırılamaz.",
        "en": "The gaseous state below the critical temperature is called a vapour; a vapour can be liquefied by increasing the pressure alone, without changing the temperature. Above the critical temperature the substance is a gas and cannot be liquefied no matter how much the pressure is increased.",
        "de": "Der gasförmige Zustand unterhalb der kritischen Temperatur heißt Dampf; ein Dampf lässt sich auch allein durch Druckerhöhung, ohne Temperaturänderung, verflüssigen. Oberhalb der kritischen Temperatur ist der Stoff ein Gas und lässt sich auch durch noch so hohen Druck nicht verflüssigen.",
        "fr": "L'état gazeux en dessous de la température critique s'appelle une vapeur ; une vapeur peut être liquéfiée par simple augmentation de pression, sans changer la température. Au-dessus de la température critique, la substance est un gaz et ne peut pas être liquéfiée, quelle que soit la pression appliquée.",
        "ru": "Газообразное состояние ниже критической температуры называют паром; пар можно сжижить и одним повышением давления, не меняя температуру. Выше критической температуры вещество является газом и не сжижается ни при каком давлении.",
        "ar": "تُسمّى الحالة الغازية تحت درجة الحرارة الحرجة البخار، ويمكن إسالة البخار بزيادة الضغط وحدها دون تغيير درجة الحرارة. أما فوق درجة الحرارة الحرجة فالمادة غاز ولا يمكن إسالتها مهما زاد الضغط.",
        "zh": "低于临界温度的气态称为蒸气；蒸气在不改变温度的情况下，仅靠增大压强也能液化。高于临界温度时物质为气体，无论压强多大都不能液化。",
        "ku": "Rewşa gazê ya di binê germahiya krîtîk de jê re hilm tê gotin; hilm bêyî guherîna germahiyê tenê bi zêdekirina zextê jî dikare were şilekirin. Li jorî germahiya krîtîk madde gaz e û zext çiqas zêde bibe jî nayê şilekirin."
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
          "tr": "Verilen ve istenen nicelikleri belirle",
          "en": "Identify the given and the requested quantities",
          "de": "Gegebene und gesuchte Größen bestimmen",
          "fr": "Identifier les grandeurs données et demandées",
          "ru": "Определить данные и искомые величины",
          "ar": "حدّد الكميات المعطاة والمطلوبة",
          "zh": "确定已知量和所求量",
          "ku": "Mezinahiyên dayî û yên tên xwestin diyar bike"
        },
        {
          "tr": "Sıcaklığı Kelvin'e, basıncı atm'ye, hacmi litreye çevir",
          "en": "Convert temperature to kelvin, pressure to atm and volume to litres",
          "de": "Temperatur in Kelvin, Druck in atm und Volumen in Liter umrechnen",
          "fr": "Convertir la température en kelvins, la pression en atm et le volume en litres",
          "ru": "Перевести температуру в кельвины, давление в атм, объём в литры",
          "ar": "حوّل درجة الحرارة إلى كلفن والضغط إلى atm والحجم إلى لتر",
          "zh": "将温度换算为开尔文、压强换算为atm、体积换算为升",
          "ku": "Germahiyê bike Kelvin, zextê bike atm û qebareyê bike lître"
        },
        {
          "tr": "Değerleri PV = nRT denkleminde yerine koy",
          "en": "Substitute the values into PV = nRT",
          "de": "Werte in PV = nRT einsetzen",
          "fr": "Remplacer les valeurs dans PV = nRT",
          "ru": "Подставить значения в уравнение PV = nRT",
          "ar": "عوّض القيم في المعادلة PV = nRT",
          "zh": "将数值代入PV = nRT",
          "ku": "Nirxan têxe hevkêşeya PV = nRT"
        },
        {
          "tr": "Bilinmeyeni çekip sonucu birimiyle yaz",
          "en": "Solve for the unknown and write the result with its unit",
          "de": "Nach der Unbekannten auflösen und das Ergebnis mit Einheit angeben",
          "fr": "Isoler l'inconnue et écrire le résultat avec son unité",
          "ru": "Выразить неизвестное и записать ответ с единицами измерения",
          "ar": "استخرج المجهول واكتب النتيجة مع وحدتها",
          "zh": "求出未知量并写出带单位的结果",
          "ku": "Nenasê derxe û encamê bi yekîneya wê binivîse"
        }
      ]
    },
    {
      "id": "u12-s02",
      "title": {
        "tr": "İdeal Gaz Denklemine Giden Gaz Yasaları (Tarihsel Sıra)",
        "en": "Gas Laws Leading to the Ideal Gas Equation (Historical Order)",
        "de": "Gasgesetze auf dem Weg zur idealen Gasgleichung (historische Reihenfolge)",
        "fr": "Lois des gaz menant à l'équation des gaz parfaits (ordre historique)",
        "ru": "Газовые законы, приведшие к уравнению идеального газа (в историческом порядке)",
        "ar": "قوانين الغازات المؤدية إلى معادلة الغاز المثالي (بالترتيب التاريخي)",
        "zh": "通向理想气体方程的气体定律（按历史顺序）",
        "ku": "Zagonên gazê yên ber bi hevkêşeya gaza îdeal ve (rêza dîrokî)"
      },
      "steps": [
        {
          "tr": "Boyle yasasından P ile V'nin ters orantısı alınır",
          "en": "From Boyle's law, the inverse proportion of P and V is taken",
          "de": "Aus dem Boyle-Gesetz wird das umgekehrte Verhältnis von P und V abgeleitet",
          "fr": "De la loi de Boyle, on prend la proportion inverse de P et V",
          "ru": "Из закона Бойля взята обратная пропорция P и V",
          "ar": "من قانون بويل، يتم أخذ النسبة العكسية لـ P و V",
          "zh": "根据波义耳定律，可得出 P 和 V 的反比例",
          "ku": "Ji qanûna Boyle, rêjeya berevajî ya P û V tê girtin"
        },
        {
          "tr": "Charles yasasından V ile T'nin doğru orantısı eklenir",
          "en": "From Charles' law, the direct proportion of V and T is added",
          "de": "Aus dem Gesetz von Charles wird das direkte Verhältnis von V und T addiert",
          "fr": "De la loi de Charles, la proportion directe de V et T s'ajoute",
          "ru": "Из закона Шарля складывается прямая пропорция V и T.",
          "ar": "من قانون تشارلز، تتم إضافة النسبة المباشرة لـ V وT",
          "zh": "根据查理定律，加上V和T的正比例",
          "ku": "Ji qanûna Charles, rêjeya rasterast ya V û T tê zêdekirin"
        },
        {
          "tr": "Avogadro yasasından V ile n'nin doğru orantısı birleştirilir",
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
        "tr": "Birleşik Gaz Denklemi Uygulaması (Sabit Miktar Gaz)",
        "en": "Applying the Combined Gas Equation (Fixed Amount of Gas)",
        "de": "Anwendung der kombinierten Gasgleichung (konstante Gasmenge)",
        "fr": "Application de l'équation combinée des gaz (quantité de gaz constante)",
        "ru": "Применение объединённого газового закона (постоянное количество газа)",
        "ar": "تطبيق معادلة الغازات الموحدة (كمية ثابتة من الغاز)",
        "zh": "合并气体方程的应用（气体的量不变）",
        "ku": "Sepandina hevkêşeya gazê ya yekbûyî (mîqdara gazê ya sabît)"
      },
      "steps": [
        {
          "tr": "Birinci durumdaki P1, V1, T1 değerleri yazılır (sıcaklık Kelvin'e çevrilir)",
          "en": "Write P1, V1, T1 for the initial state (temperature converted to kelvin)",
          "de": "P1, V1, T1 des Anfangszustands notieren (Temperatur in Kelvin umrechnen)",
          "fr": "On note P1, V1, T1 de l'état initial (température convertie en kelvins)",
          "ru": "Записывают P1, V1, T1 начального состояния (температуру переводят в кельвины)",
          "ar": "تُكتب قيم P1 وV1 وT1 للحالة الأولى (مع تحويل درجة الحرارة إلى كلفن)",
          "zh": "写出初始状态的 P1、V1、T1（温度换算成开尔文）",
          "ku": "Nirxên P1, V1, T1 yên rewşa yekem têne nivîsandin (germahî bo Kelvin tê guhertin)"
        },
        {
          "tr": "Değişen koşullardaki P2, V2, T2 değerleri belirlenir",
          "en": "Determine P2, V2, T2 for the new conditions",
          "de": "P2, V2, T2 für die neuen Bedingungen bestimmen",
          "fr": "On détermine P2, V2, T2 dans les nouvelles conditions",
          "ru": "Определяют P2, V2, T2 для новых условий",
          "ar": "تُحدَّد قيم P2 وV2 وT2 للظروف الجديدة",
          "zh": "确定新条件下的 P2、V2、T2",
          "ku": "Nirxên P2, V2, T2 yên şertên nû têne diyarkirin"
        },
        {
          "tr": "Sabit miktar (mol) gaz için P1.V1 / T1 = P2.V2 / T2 eşitliği kurulur (mol sayısı değişiyorsa n1 ve n2 de paydaya yazılır)",
          "en": "For a fixed amount (moles) of gas set up P1.V1 / T1 = P2.V2 / T2 (if the number of moles changes, n1 and n2 are also written in the denominators)",
          "de": "Für eine konstante Gasmenge (Molzahl) P1.V1 / T1 = P2.V2 / T2 aufstellen (ändert sich die Molzahl, kommen n1 und n2 in die Nenner)",
          "fr": "Pour une quantité (nombre de moles) de gaz constante, on pose P1.V1 / T1 = P2.V2 / T2 (si le nombre de moles change, on écrit aussi n1 et n2 aux dénominateurs)",
          "ru": "Для постоянного количества (числа молей) газа записывают P1.V1 / T1 = P2.V2 / T2 (если число молей меняется, в знаменатели добавляют n1 и n2)",
          "ar": "لكمية ثابتة (عدد مولات ثابت) من الغاز تُكتب المساواة P1.V1 / T1 = P2.V2 / T2 (وإذا تغيّر عدد المولات يُضاف n1 وn2 إلى المقامين)",
          "zh": "对物质的量不变的气体列出 P1.V1 / T1 = P2.V2 / T2（若物质的量改变，则分母中还要写上 n1 和 n2）",
          "ku": "Ji bo mîqdara (mol) gazê ya sabît wekheviya P1.V1 / T1 = P2.V2 / T2 tê danîn (heke hejmara molan biguhere, n1 û n2 jî di binê kesran de têne nivîsandin)"
        },
        {
          "tr": "Bilinmeyen hacim veya basınç değeri çekilir",
          "en": "The unknown volume or pressure is solved for",
          "de": "Das unbekannte Volumen bzw. der unbekannte Druck wird berechnet",
          "fr": "On isole le volume ou la pression inconnu(e)",
          "ru": "Вычисляется неизвестный объём или давление",
          "ar": "يُحسب الحجم أو الضغط المجهول",
          "zh": "求出未知的体积或压强",
          "ku": "Qebare an zexta nenas tê hesibandin"
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
          "tr": "U borusuna cıva doldurulur",
          "en": "The U-tube is filled with mercury",
          "de": "Das U-Rohr wird mit Quecksilber gefüllt",
          "fr": "Le tube en U est rempli de mercure",
          "ru": "U-образную трубку заполняют ртутью",
          "ar": "يُملأ الأنبوب على شكل U بالزئبق",
          "zh": "U形管中装入汞",
          "ku": "Lûleya U bi cîwe tê dagirtin"
        },
        {
          "tr": "Bir kol gaz bulunan kaba bağlanır, diğer kol atmosfere açık bırakılır",
          "en": "One arm is connected to the gas container, the other is open to the atmosphere",
          "de": "Ein Schenkel wird mit dem Gasbehälter verbunden, der andere ist zur Atmosphäre offen",
          "fr": "Une branche est reliée au récipient de gaz, l'autre est ouverte à l'atmosphère",
          "ru": "Одно колено соединяют с сосудом с газом, другое открыто в атмосферу",
          "ar": "يوصل أحد الذراعين بوعاء الغاز ويُترك الآخر مفتوحًا للجو",
          "zh": "一臂与盛气体的容器相连，另一臂通大气",
          "ku": "Milek bi firaxa gazê ve tê girêdan, milê din ji atmosferê re vekirî ye"
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
          "tr": "Gaz tarafındaki cıva seviyesi düşükse h açık hava basıncına eklenir, yüksekse çıkarılır",
          "en": "If the mercury level on the gas side is lower, h is added to atmospheric pressure; if higher, it is subtracted",
          "de": "Steht das Quecksilber auf der Gasseite tiefer, wird h zum Luftdruck addiert, steht es höher, wird h abgezogen",
          "fr": "Si le niveau du mercure côté gaz est plus bas, h s'ajoute à la pression atmosphérique ; s'il est plus haut, on le soustrait",
          "ru": "Если уровень ртути со стороны газа ниже, h прибавляют к атмосферному давлению, если выше — вычитают",
          "ar": "إذا كان مستوى الزئبق في جهة الغاز أدنى يُضاف h إلى الضغط الجوي، وإذا كان أعلى يُطرح منه",
          "zh": "若气体一侧汞面较低，则将h加到大气压上；若较高，则从大气压中减去h",
          "ku": "Ger asta cîweyê li aliyê gazê nizmtir be, h li zexta atmosferê tê zêdekirin; ger bilindtir be, jê tê kêmkirin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u12-twin01",
      "stem": {
        "tr": "0 °C'de 4,48 L'lik sabit hacimli bir kapta bulunan 0,5 mol He gazının basıncı kaç atm'dir? (R = 22,4/273 L·atm/(mol·K))",
        "en": "What is the pressure, in atm, of 0.5 mol of He gas in a 4.48 L rigid container at 0 °C? (R = 22.4/273 L·atm/(mol·K))",
        "de": "Welchen Druck in atm hat 0,5 mol He-Gas in einem 4,48-L-Gefäß mit konstantem Volumen bei 0 °C? (R = 22,4/273 L·atm/(mol·K))",
        "fr": "Quelle est la pression, en atm, de 0,5 mol de He gazeux dans un récipient de 4,48 L à volume constant à 0 °C ? (R = 22,4/273 L·atm/(mol·K))",
        "ru": "Каково давление (в атм) 0,5 моль газа He в сосуде постоянного объёма 4,48 л при 0 °C? (R = 22,4/273 л·атм/(моль·K))",
        "ar": "ما ضغط 0.5 mol من غاز He بوحدة atm في وعاء ثابت الحجم سعته 4.48 L عند 0 °C؟ (R = 22.4/273 L·atm/(mol·K))",
        "zh": "0 °C 时，容积为 4.48 L 的定容容器中 0.5 mol He 气体的压强是多少 atm？(R = 22.4/273 L·atm/(mol·K))",
        "ku": "Di 0 °C de zexta 0.5 mol gaza He ya di firaxeke 4.48 L ya bi qebareya sabît de çend atm e? (R = 22.4/273 L·atm/(mol·K))"
      },
      "options": [
        {
          "tr": "2,5 atm",
          "en": "2.5 atm",
          "de": "2,5 atm",
          "fr": "2,5 atm",
          "ru": "2,5 атм",
          "ar": "2.5 atm",
          "zh": "2.5 atm",
          "ku": "2.5 atm"
        },
        {
          "tr": "1,0 atm",
          "en": "1.0 atm",
          "de": "1,0 atm",
          "fr": "1,0 atm",
          "ru": "1,0 атм",
          "ar": "1.0 atm",
          "zh": "1.0 atm",
          "ku": "1.0 atm"
        },
        {
          "tr": "5,0 atm",
          "en": "5.0 atm",
          "de": "5,0 atm",
          "fr": "5,0 atm",
          "ru": "5,0 атм",
          "ar": "5.0 atm",
          "zh": "5.0 atm",
          "ku": "5.0 atm"
        },
        {
          "tr": "0,5 atm",
          "en": "0.5 atm",
          "de": "0,5 atm",
          "fr": "0,5 atm",
          "ru": "0,5 атм",
          "ar": "0.5 atm",
          "zh": "0.5 atm",
          "ku": "0.5 atm"
        },
        {
          "tr": "2,24 atm",
          "en": "2.24 atm",
          "de": "2,24 atm",
          "fr": "2,24 atm",
          "ru": "2,24 атм",
          "ar": "2.24 atm",
          "zh": "2.24 atm",
          "ku": "2.24 atm"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "T = 0 + 273 = 273 K. P·V = n·R·T → P·4,48 = 0,5·(22,4/273)·273 = 11,2 → P = 11,2/4,48 = 2,5 atm. Sıcaklık 0 °C diye basıncı doğrudan 1 atm almak yanlıştır: 0,5 mol gaz 0 °C ve 1 atm'de 11,2 L kaplar, oysa kap 4,48 L'dir. Hacim ile mol sayısını çarpmak (4,48·0,5 = 2,24) da tipik bir hatadır.",
        "en": "T = 0 + 273 = 273 K. P·V = n·R·T → P·4.48 = 0.5·(22.4/273)·273 = 11.2 → P = 11.2/4.48 = 2.5 atm. Taking the pressure as 1 atm just because the temperature is 0 °C is wrong: 0.5 mol of gas occupies 11.2 L at 0 °C and 1 atm, but the container is 4.48 L. Multiplying volume by moles (4.48·0.5 = 2.24) is another typical error.",
        "de": "T = 0 + 273 = 273 K. P·V = n·R·T → P·4,48 = 0,5·(22,4/273)·273 = 11,2 → P = 11,2/4,48 = 2,5 atm. Den Druck nur wegen 0 °C gleich 1 atm zu setzen ist falsch: 0,5 mol Gas nehmen bei 0 °C und 1 atm 11,2 L ein, das Gefäß fasst aber 4,48 L. Volumen und Stoffmenge zu multiplizieren (4,48·0,5 = 2,24) ist ein weiterer typischer Fehler.",
        "fr": "T = 0 + 273 = 273 K. P·V = n·R·T → P·4,48 = 0,5·(22,4/273)·273 = 11,2 → P = 11,2/4,48 = 2,5 atm. Prendre 1 atm simplement parce que la température est 0 °C est faux : 0,5 mol de gaz occupe 11,2 L à 0 °C et 1 atm, alors que le récipient fait 4,48 L. Multiplier le volume par la quantité de matière (4,48·0,5 = 2,24) est une autre erreur typique.",
        "ru": "T = 0 + 273 = 273 K. P·V = n·R·T → P·4,48 = 0,5·(22,4/273)·273 = 11,2 → P = 11,2/4,48 = 2,5 атм. Считать давление равным 1 атм только потому, что температура 0 °C, неверно: 0,5 моль газа при 0 °C и 1 атм занимают 11,2 л, а объём сосуда 4,48 л. Умножение объёма на число молей (4,48·0,5 = 2,24) — ещё одна типичная ошибка.",
        "ar": "T = 0 + 273 = 273 K. P·V = n·R·T ← P·4.48 = 0.5·(22.4/273)·273 = 11.2 ← P = 11.2/4.48 = 2.5 atm. اعتبار الضغط 1 atm لمجرد أن درجة الحرارة 0 °C خطأ: 0.5 mol من الغاز يشغل 11.2 L عند 0 °C و1 atm، بينما حجم الوعاء 4.48 L. وضرب الحجم في عدد المولات (4.48·0.5 = 2.24) خطأ شائع آخر.",
        "zh": "T = 0 + 273 = 273 K。P·V = n·R·T → P·4.48 = 0.5·(22.4/273)·273 = 11.2 → P = 11.2/4.48 = 2.5 atm。仅因温度为 0 °C 就把压强当作 1 atm 是错误的：0.5 mol 气体在 0 °C、1 atm 下占 11.2 L，而容器只有 4.48 L。把体积与物质的量相乘（4.48·0.5 = 2.24）是另一种常见错误。",
        "ku": "T = 0 + 273 = 273 K. P·V = n·R·T → P·4.48 = 0.5·(22.4/273)·273 = 11.2 → P = 11.2/4.48 = 2.5 atm. Tenê ji ber ku germahî 0 °C ye zextê 1 atm hesibandin şaş e: 0.5 mol gaz di 0 °C û 1 atm de 11.2 L digire, lê firax 4.48 L ye. Carkirina qebareyê bi hejmara molan (4.48·0.5 = 2.24) jî şaşiyeke tîpîk e."
      }
    },
    {
      "id": "u12-twin02",
      "stem": {
        "tr": "Sürtünmesiz pistonlu bir kapta 27 °C'de 2 L hacim kaplayan bir miktar ideal gazın sıcaklığı 327 °C'ye çıkarılırsa hacmi kaç L olur?",
        "en": "A sample of ideal gas in a container with a frictionless piston occupies 2 L at 27 °C. If its temperature is raised to 327 °C, what will its volume be in litres?",
        "de": "Eine ideale Gasportion in einem Gefäß mit reibungsfreiem Kolben nimmt bei 27 °C ein Volumen von 2 L ein. Wie viele Liter beträgt ihr Volumen, wenn die Temperatur auf 327 °C erhöht wird?",
        "fr": "Une quantité de gaz parfait dans un récipient à piston sans frottement occupe 2 L à 27 °C. Quel sera son volume, en litres, si sa température est portée à 327 °C ?",
        "ru": "Некоторое количество идеального газа в сосуде с поршнем без трения занимает объём 2 л при 27 °C. Каким станет его объём (в литрах), если температуру повысить до 327 °C?",
        "ar": "كمية من غاز مثالي في وعاء ذي مكبس عديم الاحتكاك تشغل حجمًا قدره 2 L عند 27 °C. كم يصبح حجمها باللتر إذا رُفعت درجة حرارتها إلى 327 °C؟",
        "zh": "带无摩擦活塞的容器中，一定量理想气体在 27 °C 时体积为 2 L。若温度升高到 327 °C，其体积为多少升？",
        "ku": "Mîqdarek gaza îdeal di firaxeke bi pistona bê sûrtin de di 27 °C de 2 L qebare digire. Ger germahiya wê bibe 327 °C, qebareya wê dê bibe çend lître?"
      },
      "options": [
        {
          "tr": "4 L",
          "en": "4 L",
          "de": "4 L",
          "fr": "4 L",
          "ru": "4 л",
          "ar": "4 L",
          "zh": "4 L",
          "ku": "4 L"
        },
        {
          "tr": "24 L",
          "en": "24 L",
          "de": "24 L",
          "fr": "24 L",
          "ru": "24 л",
          "ar": "24 L",
          "zh": "24 L",
          "ku": "24 L"
        },
        {
          "tr": "1 L",
          "en": "1 L",
          "de": "1 L",
          "fr": "1 L",
          "ru": "1 л",
          "ar": "1 L",
          "zh": "1 L",
          "ku": "1 L"
        },
        {
          "tr": "8 L",
          "en": "8 L",
          "de": "8 L",
          "fr": "8 L",
          "ru": "8 л",
          "ar": "8 L",
          "zh": "8 L",
          "ku": "8 L"
        },
        {
          "tr": "6 L",
          "en": "6 L",
          "de": "6 L",
          "fr": "6 L",
          "ru": "6 л",
          "ar": "6 L",
          "zh": "6 L",
          "ku": "6 L"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Sürtünmesiz pistonlu kapta basınç sabittir; sabit basınçta hacim mutlak sıcaklıkla doğru orantılıdır (Charles yasası). T1 = 27 + 273 = 300 K, T2 = 327 + 273 = 600 K → V1/T1 = V2/T2 → 2/300 = V2/600 → V2 = 4 L. Orantı °C ile kurulursa 2·327/27 ≈ 24 L, hacim ile sıcaklık ters orantılı sanılırsa 1 L bulunur.",
        "en": "In a container with a frictionless piston the pressure is constant; at constant pressure volume is directly proportional to absolute temperature (Charles's law). T1 = 27 + 273 = 300 K, T2 = 327 + 273 = 600 K → V1/T1 = V2/T2 → 2/300 = V2/600 → V2 = 4 L. Setting up the ratio in °C gives 2·327/27 ≈ 24 L, and treating volume and temperature as inversely proportional gives 1 L.",
        "de": "Im Gefäß mit reibungsfreiem Kolben ist der Druck konstant; bei konstantem Druck ist das Volumen der absoluten Temperatur direkt proportional (Gesetz von Charles). T1 = 27 + 273 = 300 K, T2 = 327 + 273 = 600 K → V1/T1 = V2/T2 → 2/300 = V2/600 → V2 = 4 L. Mit °C gerechnet ergibt sich 2·327/27 ≈ 24 L; hält man Volumen und Temperatur für umgekehrt proportional, erhält man 1 L.",
        "fr": "Dans un récipient à piston sans frottement la pression est constante ; à pression constante, le volume est directement proportionnel à la température absolue (loi de Charles). T1 = 27 + 273 = 300 K, T2 = 327 + 273 = 600 K → V1/T1 = V2/T2 → 2/300 = V2/600 → V2 = 4 L. Avec des °C on trouve 2·327/27 ≈ 24 L ; en croyant le volume et la température inversement proportionnels on trouve 1 L.",
        "ru": "В сосуде с поршнем без трения давление постоянно; при постоянном давлении объём прямо пропорционален абсолютной температуре (закон Шарля). T1 = 27 + 273 = 300 K, T2 = 327 + 273 = 600 K → V1/T1 = V2/T2 → 2/300 = V2/600 → V2 = 4 л. Если составить пропорцию в °C, получится 2·327/27 ≈ 24 л; если считать объём и температуру обратно пропорциональными — 1 л.",
        "ar": "في الوعاء ذي المكبس عديم الاحتكاك يبقى الضغط ثابتًا؛ وعند ثبات الضغط يتناسب الحجم طرديًا مع درجة الحرارة المطلقة (قانون تشارلز). T1 = 27 + 273 = 300 K وT2 = 327 + 273 = 600 K ← V1/T1 = V2/T2 ← 2/300 = V2/600 ← V2 = 4 L. استخدام السلسيوس في التناسب يعطي 2·327/27 ≈ 24 L، واعتبار الحجم ودرجة الحرارة متناسبين عكسيًا يعطي 1 L.",
        "zh": "带无摩擦活塞的容器中压强恒定；恒压下体积与绝对温度成正比（查理定律）。T1 = 27 + 273 = 300 K，T2 = 327 + 273 = 600 K → V1/T1 = V2/T2 → 2/300 = V2/600 → V2 = 4 L。用摄氏温度列比例得 2·327/27 ≈ 24 L，误以为体积与温度成反比得 1 L。",
        "ku": "Di firaxa bi pistona bê sûrtin de zext domdar e; di zexta domdar de qebare bi germahiya mutleq re rasterast rêjeyî ye (qanûna Charles). T1 = 27 + 273 = 300 K, T2 = 327 + 273 = 600 K → V1/T1 = V2/T2 → 2/300 = V2/600 → V2 = 4 L. Heke rêje bi °C were danîn 2·327/27 ≈ 24 L, heke qebare û germahî berevajî rêjeyî werin hesibandin 1 L derdikeve."
      }
    },
    {
      "id": "u12-twin03",
      "stem": {
        "tr": "Sabit miktardaki ideal bir gaz 27 °C'de 2 atm basınç altında 6 L hacim kaplamaktadır. Gazın sıcaklığı 127 °C'ye, basıncı 4 atm'ye çıkarılırsa hacmi kaç L olur?",
        "en": "A fixed amount of an ideal gas occupies 6 L at 27 °C and 2 atm. If the temperature is raised to 127 °C and the pressure to 4 atm, what will its volume be in litres?",
        "de": "Eine konstante Menge eines idealen Gases nimmt bei 27 °C und 2 atm ein Volumen von 6 L ein. Wie viele Liter beträgt das Volumen, wenn die Temperatur auf 127 °C und der Druck auf 4 atm erhöht wird?",
        "fr": "Une quantité constante de gaz parfait occupe 6 L à 27 °C sous 2 atm. Si la température est portée à 127 °C et la pression à 4 atm, quel sera son volume en litres ?",
        "ru": "Постоянное количество идеального газа занимает 6 л при 27 °C и 2 атм. Каким станет объём (в литрах), если температуру повысить до 127 °C, а давление — до 4 атм?",
        "ar": "تشغل كمية ثابتة من غاز مثالي حجمًا قدره 6 L عند 27 °C وضغط 2 atm. إذا رُفعت درجة الحرارة إلى 127 °C والضغط إلى 4 atm، فكم لترًا يصبح حجمه؟",
        "zh": "一定量的理想气体在 27 °C、2 atm 下体积为 6 L。若将温度升高到 127 °C、压强增大到 4 atm，其体积变为多少升？",
        "ku": "Mîqdareke sabît ji gazeke îdeal di 27 °C û 2 atm de 6 L qebare digire. Heke germahî bibe 127 °C û zext bibe 4 atm, qebareya wê dibe çend lître?"
      },
      "options": [
        {
          "tr": "3 L",
          "en": "3 L",
          "de": "3 L",
          "fr": "3 L",
          "ru": "3 л",
          "ar": "3 L",
          "zh": "3 L",
          "ku": "3 L"
        },
        {
          "tr": "4 L",
          "en": "4 L",
          "de": "4 L",
          "fr": "4 L",
          "ru": "4 л",
          "ar": "4 L",
          "zh": "4 L",
          "ku": "4 L"
        },
        {
          "tr": "8 L",
          "en": "8 L",
          "de": "8 L",
          "fr": "8 L",
          "ru": "8 л",
          "ar": "8 L",
          "zh": "8 L",
          "ku": "8 L"
        },
        {
          "tr": "14,1 L",
          "en": "14.1 L",
          "de": "14,1 L",
          "fr": "14,1 L",
          "ru": "14,1 л",
          "ar": "14.1 L",
          "zh": "14.1 L",
          "ku": "14.1 L"
        },
        {
          "tr": "16 L",
          "en": "16 L",
          "de": "16 L",
          "fr": "16 L",
          "ru": "16 л",
          "ar": "16 L",
          "zh": "16 L",
          "ku": "16 L"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "T1 = 27 + 273 = 300 K, T2 = 127 + 273 = 400 K. Sabit miktar gaz için P1·V1/T1 = P2·V2/T2 → 2·6/300 = 4·V2/400 → V2 = (2·6·400)/(300·4) = 4 L. Yalnızca Boyle uygulanıp sıcaklık unutulursa 3 L, basınç değişimi unutulursa 8 L, sıcaklık °C olarak yazılırsa yaklaşık 14,1 L, basınç hacimle doğru orantılı sanılırsa 16 L bulunur.",
        "en": "T1 = 27 + 273 = 300 K, T2 = 127 + 273 = 400 K. For a fixed amount of gas P1·V1/T1 = P2·V2/T2 → 2·6/300 = 4·V2/400 → V2 = (2·6·400)/(300·4) = 4 L. Applying only Boyle's law and forgetting the temperature gives 3 L, forgetting the pressure change gives 8 L, using °C gives about 14.1 L, and treating pressure as directly proportional to volume gives 16 L.",
        "de": "T1 = 27 + 273 = 300 K, T2 = 127 + 273 = 400 K. Für eine konstante Gasmenge gilt P1·V1/T1 = P2·V2/T2 → 2·6/300 = 4·V2/400 → V2 = (2·6·400)/(300·4) = 4 L. Nur Boyle ohne Temperatur ergibt 3 L, ohne Druckänderung 8 L, mit °C etwa 14,1 L, und Druck direkt proportional zum Volumen angenommen 16 L.",
        "fr": "T1 = 27 + 273 = 300 K, T2 = 127 + 273 = 400 K. Pour une quantité de gaz constante, P1·V1/T1 = P2·V2/T2 → 2·6/300 = 4·V2/400 → V2 = (2·6·400)/(300·4) = 4 L. Appliquer seulement la loi de Boyle sans la température donne 3 L, oublier la variation de pression donne 8 L, utiliser les °C donne environ 14,1 L, et croire la pression proportionnelle au volume donne 16 L.",
        "ru": "T1 = 27 + 273 = 300 K, T2 = 127 + 273 = 400 K. Для постоянного количества газа P1·V1/T1 = P2·V2/T2 → 2·6/300 = 4·V2/400 → V2 = (2·6·400)/(300·4) = 4 л. Если применить только закон Бойля без учёта температуры, получится 3 л; без учёта изменения давления — 8 л; с температурой в °C — около 14,1 л; если считать давление прямо пропорциональным объёму — 16 л.",
        "ar": "T1 = 27 + 273 = 300 K وT2 = 127 + 273 = 400 K. لكمية ثابتة من الغاز: P1·V1/T1 = P2·V2/T2 ← 2·6/300 = 4·V2/400 ← V2 = (2·6·400)/(300·4) = 4 L. تطبيق قانون بويل وحده مع إهمال الحرارة يعطي 3 L، وإهمال تغيّر الضغط يعطي 8 L، واستخدام السلسيوس يعطي نحو 14.1 L، واعتبار الضغط متناسبًا طرديًا مع الحجم يعطي 16 L.",
        "zh": "T1 = 27 + 273 = 300 K，T2 = 127 + 273 = 400 K。对一定量气体，P1·V1/T1 = P2·V2/T2 → 2·6/300 = 4·V2/400 → V2 = (2·6·400)/(300·4) = 4 L。只用波义耳定律而忘记温度得 3 L，忘记压强变化得 8 L，用摄氏温度得约 14.1 L，误以为压强与体积成正比得 16 L。",
        "ku": "T1 = 27 + 273 = 300 K, T2 = 127 + 273 = 400 K. Ji bo mîqdara gazê ya sabît P1·V1/T1 = P2·V2/T2 → 2·6/300 = 4·V2/400 → V2 = (2·6·400)/(300·4) = 4 L. Heke tenê Boyle were sepandin û germahî were jibîrkirin 3 L, heke guherîna zextê were jibîrkirin 8 L, bi °C nêzî 14.1 L, û heke zext bi qebareyê re rasterast rêjeyî were hesibandin 16 L derdikeve."
      }
    },
    {
      "id": "u12-twin04",
      "stem": {
        "tr": "8,2 L'lik çelik bir kapta 127 °C'de 2 atm basınç yapan CH4 gazı kaç gramdır? (H = 1, C = 12; R = 0,082 L·atm/(mol·K))",
        "en": "How many grams of CH4 gas exert a pressure of 2 atm at 127 °C in an 8.2 L steel container? (H = 1, C = 12; R = 0.082 L·atm/(mol·K))",
        "de": "Wie viel Gramm CH4-Gas erzeugen in einem 8,2-L-Stahlbehälter bei 127 °C einen Druck von 2 atm? (H = 1, C = 12; R = 0,082 L·atm/(mol·K))",
        "fr": "Combien de grammes de CH4 exercent une pression de 2 atm à 127 °C dans un récipient en acier de 8,2 L ? (H = 1, C = 12 ; R = 0,082 L·atm/(mol·K))",
        "ru": "Сколько граммов CH4 создают давление 2 атм при 127 °C в стальном сосуде объёмом 8,2 л? (H = 1, C = 12; R = 0,082 л·атм/(моль·K))",
        "ar": "كم غرامًا من غاز CH4 يُحدث ضغطًا قدره 2 atm عند 127 °C في وعاء فولاذي سعته 8.2 L؟ (H = 1، C = 12؛ R = 0.082 L·atm/(mol·K))",
        "zh": "在 8.2 L 的钢瓶中，127 °C 时产生 2 atm 压强的 CH4 气体有多少克？（H = 1，C = 12；R = 0.082 L·atm/(mol·K)）",
        "ku": "Di firaxeke polayî ya 8.2 L de, gaza CH4 ya ku di 127 °C de 2 atm zext dike çend gram e? (H = 1, C = 12; R = 0.082 L·atm/(mol·K))"
      },
      "options": [
        {
          "tr": "0,5 g",
          "en": "0.5 g",
          "de": "0,5 g",
          "fr": "0,5 g",
          "ru": "0,5 г",
          "ar": "0.5 g",
          "zh": "0.5 g",
          "ku": "0.5 g"
        },
        {
          "tr": "6,5 g",
          "en": "6.5 g",
          "de": "6,5 g",
          "fr": "6,5 g",
          "ru": "6,5 г",
          "ar": "6.5 g",
          "zh": "6.5 g",
          "ku": "6.5 g"
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
          "tr": "11,7 g",
          "en": "11.7 g",
          "de": "11,7 g",
          "fr": "11,7 g",
          "ru": "11,7 г",
          "ar": "11.7 g",
          "zh": "11.7 g",
          "ku": "11.7 g"
        },
        {
          "tr": "25,2 g",
          "en": "25.2 g",
          "de": "25,2 g",
          "fr": "25,2 g",
          "ru": "25,2 г",
          "ar": "25.2 g",
          "zh": "25.2 g",
          "ku": "25.2 g"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "T = 127 + 273 = 400 K. n = P·V/(R·T) = (2·8,2)/(0,082·400) = 16,4/32,8 = 0,5 mol. CH4'ün mol kütlesi 12 + 4·1 = 16 g/mol olduğundan m = 0,5·16 = 8 g. Mol sayısında kalınırsa 0,5, H atomu sayısı unutulup mol kütlesi 13 alınırsa 6,5 g, sıcaklık 273 K alınırsa yaklaşık 11,7 g, sıcaklık °C olarak yazılırsa yaklaşık 25,2 g bulunur.",
        "en": "T = 127 + 273 = 400 K. n = P·V/(R·T) = (2·8.2)/(0.082·400) = 16.4/32.8 = 0.5 mol. The molar mass of CH4 is 12 + 4·1 = 16 g/mol, so m = 0.5·16 = 8 g. Stopping at the number of moles gives 0.5, forgetting the H count (M = 13) gives 6.5 g, using 273 K gives about 11.7 g, and using °C gives about 25.2 g.",
        "de": "T = 127 + 273 = 400 K. n = P·V/(R·T) = (2·8,2)/(0,082·400) = 16,4/32,8 = 0,5 mol. Die molare Masse von CH4 ist 12 + 4·1 = 16 g/mol, also m = 0,5·16 = 8 g. Bleibt man bei der Molzahl, erhält man 0,5; vergisst man die H-Anzahl (M = 13), 6,5 g; mit 273 K etwa 11,7 g; mit °C etwa 25,2 g.",
        "fr": "T = 127 + 273 = 400 K. n = P·V/(R·T) = (2·8,2)/(0,082·400) = 16,4/32,8 = 0,5 mol. La masse molaire de CH4 est 12 + 4·1 = 16 g/mol, donc m = 0,5·16 = 8 g. S'arrêter au nombre de moles donne 0,5 ; oublier le nombre de H (M = 13) donne 6,5 g ; prendre 273 K donne environ 11,7 g ; utiliser les °C donne environ 25,2 g.",
        "ru": "T = 127 + 273 = 400 K. n = P·V/(R·T) = (2·8,2)/(0,082·400) = 16,4/32,8 = 0,5 моль. Молярная масса CH4 = 12 + 4·1 = 16 г/моль, поэтому m = 0,5·16 = 8 г. Если остановиться на числе молей — 0,5; если забыть число атомов H (M = 13) — 6,5 г; при T = 273 K — около 11,7 г; при температуре в °C — около 25,2 г.",
        "ar": "T = 127 + 273 = 400 K. n = P·V/(R·T) = (2·8.2)/(0.082·400) = 16.4/32.8 = 0.5 mol. الكتلة المولية لـ CH4 هي 12 + 4·1 = 16 g/mol، إذن m = 0.5·16 = 8 g. التوقف عند عدد المولات يعطي 0.5، ونسيان عدد ذرات H (M = 13) يعطي 6.5 g، واستخدام 273 K يعطي نحو 11.7 g، واستخدام السلسيوس يعطي نحو 25.2 g.",
        "zh": "T = 127 + 273 = 400 K。n = P·V/(R·T) = (2·8.2)/(0.082·400) = 16.4/32.8 = 0.5 mol。CH4 的摩尔质量为 12 + 4·1 = 16 g/mol，所以 m = 0.5·16 = 8 g。只算到物质的量得 0.5；漏算 H 原子数（M = 13）得 6.5 g；误用 273 K 得约 11.7 g；用摄氏温度得约 25.2 g。",
        "ku": "T = 127 + 273 = 400 K. n = P·V/(R·T) = (2·8.2)/(0.082·400) = 16.4/32.8 = 0.5 mol. Girseya molî ya CH4 12 + 4·1 = 16 g/mol e, loma m = 0.5·16 = 8 g. Heke li hejmara molan were rawestan 0.5, heke hejmara H were jibîrkirin (M = 13) 6.5 g, bi 273 K nêzî 11.7 g, bi °C jî nêzî 25.2 g derdikeve."
      }
    },
    {
      "id": "u12-twin05",
      "stem": {
        "tr": "Sabit hacimli çelik bir kaptaki gazın 27 °C'deki basıncı 1,5 atm'dir. Gaz miktarı değiştirilmeden basıncın 2,5 atm olması için gaz kaç Kelvin'e ısıtılmalıdır?",
        "en": "The pressure of a gas in a rigid steel container is 1.5 atm at 27 °C. To what temperature in kelvin must the gas be heated, without changing its amount, for the pressure to become 2.5 atm?",
        "de": "Der Druck eines Gases in einem starren Stahlbehälter beträgt bei 27 °C 1,5 atm. Auf wie viel Kelvin muss das Gas ohne Änderung der Gasmenge erwärmt werden, damit der Druck 2,5 atm beträgt?",
        "fr": "La pression d'un gaz dans un récipient rigide en acier est de 1,5 atm à 27 °C. À quelle température en kelvins faut-il chauffer le gaz, sans changer sa quantité, pour que la pression atteigne 2,5 atm ?",
        "ru": "Давление газа в жёстком стальном сосуде при 27 °C равно 1,5 атм. До какой температуры (в кельвинах) нужно нагреть газ, не меняя его количества, чтобы давление стало 2,5 атм?",
        "ar": "ضغط غاز في وعاء فولاذي صلب ثابت الحجم يساوي 1.5 atm عند 27 °C. إلى كم كلفن يجب تسخين الغاز، دون تغيير كميته، ليصبح ضغطه 2.5 atm؟",
        "zh": "刚性钢瓶中某气体在 27 °C 时压强为 1.5 atm。在气体的量不变的情况下，需加热到多少开尔文才能使压强变为 2.5 atm？",
        "ku": "Zexta gazekê di firaxeke polayî ya bi qebareya sabît de di 27 °C de 1.5 atm e. Bêyî guhertina mîqdara gazê, divê gaz heta çend Kelvin were germkirin da ku zext bibe 2.5 atm?"
      },
      "options": [
        {
          "tr": "45 K",
          "en": "45 K",
          "de": "45 K",
          "fr": "45 K",
          "ru": "45 K",
          "ar": "45 K",
          "zh": "45 K",
          "ku": "45 K"
        },
        {
          "tr": "180 K",
          "en": "180 K",
          "de": "180 K",
          "fr": "180 K",
          "ru": "180 K",
          "ar": "180 K",
          "zh": "180 K",
          "ku": "180 K"
        },
        {
          "tr": "318 K",
          "en": "318 K",
          "de": "318 K",
          "fr": "318 K",
          "ru": "318 K",
          "ar": "318 K",
          "zh": "318 K",
          "ku": "318 K"
        },
        {
          "tr": "500 K",
          "en": "500 K",
          "de": "500 K",
          "fr": "500 K",
          "ru": "500 K",
          "ar": "500 K",
          "zh": "500 K",
          "ku": "500 K"
        },
        {
          "tr": "773 K",
          "en": "773 K",
          "de": "773 K",
          "fr": "773 K",
          "ru": "773 K",
          "ar": "773 K",
          "zh": "773 K",
          "ku": "773 K"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Sabit hacim ve mol sayısında P1/T1 = P2/T2 (Gay-Lussac). T1 = 27 + 273 = 300 K → 1,5/300 = 2,5/T2 → T2 = 300·2,5/1,5 = 500 K (227 °C). Orantı °C ile kurulursa 45, bu değer Kelvin'e çevrilirse 318, basınç ile sıcaklık ters orantılı sanılırsa 180, zaten Kelvin olan 500'e bir kez daha 273 eklenirse 773 bulunur.",
        "en": "At constant volume and amount P1/T1 = P2/T2 (Gay-Lussac). T1 = 27 + 273 = 300 K → 1.5/300 = 2.5/T2 → T2 = 300·2.5/1.5 = 500 K (227 °C). Setting up the ratio in °C gives 45, converting that to kelvin gives 318, treating pressure and temperature as inversely proportional gives 180, and adding 273 again to the 500 K result gives 773.",
        "de": "Bei konstantem Volumen und konstanter Stoffmenge gilt P1/T1 = P2/T2 (Gay-Lussac). T1 = 27 + 273 = 300 K → 1,5/300 = 2,5/T2 → T2 = 300·2,5/1,5 = 500 K (227 °C). Rechnet man mit °C, erhält man 45, in Kelvin umgerechnet 318; nimmt man umgekehrte Proportionalität an, 180; addiert man zu 500 K nochmals 273, 773.",
        "fr": "À volume et quantité constants, P1/T1 = P2/T2 (Gay-Lussac). T1 = 27 + 273 = 300 K → 1,5/300 = 2,5/T2 → T2 = 300·2,5/1,5 = 500 K (227 °C). Poser la proportion en °C donne 45, convertir ce résultat en kelvins donne 318, supposer une proportionnalité inverse donne 180, et ajouter encore 273 aux 500 K donne 773.",
        "ru": "При постоянных объёме и количестве газа P1/T1 = P2/T2 (Гей-Люссак). T1 = 27 + 273 = 300 K → 1,5/300 = 2,5/T2 → T2 = 300·2,5/1,5 = 500 K (227 °C). Пропорция в °C даёт 45, перевод этого числа в кельвины — 318, обратная пропорциональность — 180, повторное прибавление 273 к 500 K — 773.",
        "ar": "عند ثبات الحجم وعدد المولات: P1/T1 = P2/T2 (غاي-لوساك). T1 = 27 + 273 = 300 K ← 1.5/300 = 2.5/T2 ← T2 = 300·2.5/1.5 = 500 K (227 °C). إقامة التناسب بالسلسيوس تعطي 45، وتحويل هذه القيمة إلى كلفن يعطي 318، واعتبار الضغط والحرارة متناسبين عكسيًا يعطي 180، وإضافة 273 مرة أخرى إلى 500 K تعطي 773.",
        "zh": "体积和物质的量不变时 P1/T1 = P2/T2（盖-吕萨克定律）。T1 = 27 + 273 = 300 K → 1.5/300 = 2.5/T2 → T2 = 300·2.5/1.5 = 500 K（227 °C）。用摄氏温度列比例得 45，再把它换算成开尔文得 318，误以为压强与温度成反比得 180，在 500 K 上再加 273 得 773。",
        "ku": "Di qebare û mîqdara sabît de P1/T1 = P2/T2 (Gay-Lussac). T1 = 27 + 273 = 300 K → 1.5/300 = 2.5/T2 → T2 = 300·2.5/1.5 = 500 K (227 °C). Heke rêje bi °C were danîn 45, heke ev nirx bo Kelvin were guhertin 318, heke zext û germahî berevajî rêjeyî werin hesibandin 180, û heke li 500 K dîsa 273 were zêdekirin 773 derdikeve."
      }
    },
    {
      "id": "u12-twin06",
      "stem": {
        "tr": "Sürtünmesiz pistonlu bir kapta 3,2 g CH4 gazı 4 L hacim kaplamaktadır. Sıcaklık sabit tutularak kaba 4 g He gazı ekleniyor. Son durumda gaz karışımının hacmi kaç L olur? (H = 1, He = 4, C = 12)",
        "en": "In a container with a frictionless piston, 3.2 g of CH4 gas occupies 4 L. Keeping the temperature constant, 4 g of He gas is added. What is the final volume of the gas mixture in litres? (H = 1, He = 4, C = 12)",
        "de": "In einem Gefäß mit reibungsfreiem Kolben nehmen 3,2 g CH4-Gas 4 L ein. Bei konstanter Temperatur werden 4 g He-Gas hinzugefügt. Wie viele Liter beträgt das Endvolumen des Gasgemisches? (H = 1, He = 4, C = 12)",
        "fr": "Dans un récipient à piston sans frottement, 3,2 g de CH4 occupent 4 L. À température constante, on ajoute 4 g de He. Quel est le volume final du mélange gazeux en litres ? (H = 1, He = 4, C = 12)",
        "ru": "В сосуде с поршнем без трения 3,2 г CH4 занимают 4 л. При постоянной температуре в сосуд добавляют 4 г He. Каков конечный объём газовой смеси в литрах? (H = 1, He = 4, C = 12)",
        "ar": "في وعاء ذي مكبس عديم الاحتكاك يشغل 3.2 g من غاز CH4 حجمًا قدره 4 L. مع إبقاء درجة الحرارة ثابتة يُضاف إلى الوعاء 4 g من غاز He. كم لترًا يصبح حجم المخلوط الغازي في النهاية؟ (H = 1، He = 4، C = 12)",
        "zh": "在带无摩擦活塞的容器中，3.2 g CH4 气体的体积为 4 L。保持温度不变，向容器中加入 4 g He 气体。最终混合气体的体积为多少升？（H = 1，He = 4，C = 12）",
        "ku": "Di firaxeke bi pistona bê sûrtin de 3.2 g gaza CH4 4 L qebare digire. Germahî sabît tê hiştin û 4 g gaza He li firaxê tê zêdekirin. Di dawiyê de qebareya tevliheviya gazê dibe çend lître? (H = 1, He = 4, C = 12)"
      },
      "options": [
        {
          "tr": "4 L",
          "en": "4 L",
          "de": "4 L",
          "fr": "4 L",
          "ru": "4 л",
          "ar": "4 L",
          "zh": "4 L",
          "ku": "4 L"
        },
        {
          "tr": "8 L",
          "en": "8 L",
          "de": "8 L",
          "fr": "8 L",
          "ru": "8 л",
          "ar": "8 L",
          "zh": "8 L",
          "ku": "8 L"
        },
        {
          "tr": "9 L",
          "en": "9 L",
          "de": "9 L",
          "fr": "9 L",
          "ru": "9 л",
          "ar": "9 L",
          "zh": "9 L",
          "ku": "9 L"
        },
        {
          "tr": "20 L",
          "en": "20 L",
          "de": "20 L",
          "fr": "20 L",
          "ru": "20 л",
          "ar": "20 L",
          "zh": "20 L",
          "ku": "20 L"
        },
        {
          "tr": "24 L",
          "en": "24 L",
          "de": "24 L",
          "fr": "24 L",
          "ru": "24 л",
          "ar": "24 L",
          "zh": "24 L",
          "ku": "24 L"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "n(CH4) = 3,2/16 = 0,2 mol, n(He) = 4/4 = 1 mol; toplam 1,2 mol. Pistonlu kapta basınç dış basınca eşit kaldığından sabit P ve T'de V1/n1 = V2/n2 (Avogadro): 4/0,2 = V2/1,2 → V2 = 24 L. Basıncın artıp hacmin değişmediği sanılırsa 4 L, eklenen gazın da 4 L kaplayacağı düşünülürse 8 L, mol yerine kütleler oranlanırsa 9 L, yalnızca He'nin molü kullanılırsa 20 L bulunur.",
        "en": "n(CH4) = 3.2/16 = 0.2 mol, n(He) = 4/4 = 1 mol; total 1.2 mol. In a piston container the pressure stays equal to the outside pressure, so at constant P and T, V1/n1 = V2/n2 (Avogadro): 4/0.2 = V2/1.2 → V2 = 24 L. Assuming the pressure rises and the volume stays the same gives 4 L, assuming the added gas also takes 4 L gives 8 L, using masses instead of moles gives 9 L, and using only the moles of He gives 20 L.",
        "de": "n(CH4) = 3,2/16 = 0,2 mol, n(He) = 4/4 = 1 mol; insgesamt 1,2 mol. Im Kolbengefäß bleibt der Druck gleich dem Außendruck, also gilt bei konstantem P und T V1/n1 = V2/n2 (Avogadro): 4/0,2 = V2/1,2 → V2 = 24 L. Nimmt man an, der Druck steige und das Volumen bleibe gleich, erhält man 4 L; nimmt das zugefügte Gas ebenfalls 4 L ein, 8 L; mit Massen statt Mol 9 L; nur mit der Molzahl von He 20 L.",
        "fr": "n(CH4) = 3,2/16 = 0,2 mol, n(He) = 4/4 = 1 mol ; total 1,2 mol. Dans un récipient à piston, la pression reste égale à la pression extérieure, donc à P et T constantes V1/n1 = V2/n2 (Avogadro) : 4/0,2 = V2/1,2 → V2 = 24 L. Croire que la pression augmente sans changement de volume donne 4 L, supposer que le gaz ajouté occupe aussi 4 L donne 8 L, utiliser les masses au lieu des moles donne 9 L, et ne prendre que les moles de He donne 20 L.",
        "ru": "n(CH4) = 3,2/16 = 0,2 моль, n(He) = 4/4 = 1 моль; всего 1,2 моль. В сосуде с поршнем давление остаётся равным внешнему, поэтому при постоянных P и T V1/n1 = V2/n2 (Авогадро): 4/0,2 = V2/1,2 → V2 = 24 л. Если считать, что растёт давление, а объём не меняется, — 4 л; если добавленный газ тоже займёт 4 л — 8 л; если брать массы вместо молей — 9 л; если учесть только моли He — 20 л.",
        "ar": "n(CH4) = 3.2/16 = 0.2 mol وn(He) = 4/4 = 1 mol؛ المجموع 1.2 mol. في الوعاء ذي المكبس يبقى الضغط مساويًا للضغط الخارجي، لذا عند ثبات P وT يكون V1/n1 = V2/n2 (أفوجادرو): 4/0.2 = V2/1.2 ← V2 = 24 L. افتراض أن الضغط يزداد والحجم لا يتغير يعطي 4 L، وافتراض أن الغاز المضاف يشغل 4 L أيضًا يعطي 8 L، واستخدام الكتل بدل المولات يعطي 9 L، واستخدام مولات He وحدها يعطي 20 L.",
        "zh": "n(CH4) = 3.2/16 = 0.2 mol，n(He) = 4/4 = 1 mol；共 1.2 mol。活塞容器中压强始终等于外界压强，所以在 P、T 不变时 V1/n1 = V2/n2（阿伏加德罗定律）：4/0.2 = V2/1.2 → V2 = 24 L。误以为压强增大而体积不变得 4 L，以为加入的气体也只占 4 L 得 8 L，用质量代替物质的量得 9 L，只用 He 的物质的量得 20 L。",
        "ku": "n(CH4) = 3.2/16 = 0.2 mol, n(He) = 4/4 = 1 mol; bi giştî 1.2 mol. Di firaxa bi piston de zext bi zexta derve re wekhev dimîne, loma di P û T yên sabît de V1/n1 = V2/n2 (Avogadro): 4/0.2 = V2/1.2 → V2 = 24 L. Heke were texmînkirin ku zext zêde dibe û qebare naguhere 4 L, heke gaza zêdekirî jî 4 L bigire 8 L, heke li şûna molan girse werin bikaranîn 9 L, û heke tenê molên He werin bikaranîn 20 L derdikeve."
      }
    },
    {
      "id": "u12-twin07",
      "stem": {
        "tr": "127 °C'de ve 1,64 atm basınçta yoğunluğu 2,2 g/L olan gaz aşağıdakilerden hangisidir? (H = 1, C = 12, N = 14, O = 16, S = 32; R = 0,082 L·atm/(mol·K))",
        "en": "Which of the following gases has a density of 2.2 g/L at 127 °C and 1.64 atm? (H = 1, C = 12, N = 14, O = 16, S = 32; R = 0.082 L·atm/(mol·K))",
        "de": "Welches der folgenden Gase hat bei 127 °C und 1,64 atm eine Dichte von 2,2 g/L? (H = 1, C = 12, N = 14, O = 16, S = 32; R = 0,082 L·atm/(mol·K))",
        "fr": "Lequel des gaz suivants a une masse volumique de 2,2 g/L à 127 °C sous 1,64 atm ? (H = 1, C = 12, N = 14, O = 16, S = 32 ; R = 0,082 L·atm/(mol·K))",
        "ru": "Какой из следующих газов имеет плотность 2,2 г/л при 127 °C и 1,64 атм? (H = 1, C = 12, N = 14, O = 16, S = 32; R = 0,082 л·атм/(моль·K))",
        "ar": "أيّ الغازات الآتية كثافته 2.2 g/L عند 127 °C وضغط 1.64 atm؟ (H = 1، C = 12، N = 14، O = 16، S = 32؛ R = 0.082 L·atm/(mol·K))",
        "zh": "下列哪种气体在 127 °C、1.64 atm 下的密度为 2.2 g/L？（H = 1，C = 12，N = 14，O = 16，S = 32；R = 0.082 L·atm/(mol·K)）",
        "ku": "Kîjan ji van gazan di 127 °C û 1.64 atm de xwedî çirbûna 2.2 g/L e? (H = 1, C = 12, N = 14, O = 16, S = 32; R = 0.082 L·atm/(mol·K))"
      },
      "options": [
        {
          "tr": "CH4",
          "en": "CH4",
          "de": "CH4",
          "fr": "CH4",
          "ru": "CH4",
          "ar": "CH4",
          "zh": "CH4",
          "ku": "CH4"
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
          "tr": "CO2",
          "en": "CO2",
          "de": "CO2",
          "fr": "CO2",
          "ru": "CO2",
          "ar": "CO2",
          "zh": "CO2",
          "ku": "CO2"
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
      "correctIndex": 3,
      "explanation": {
        "tr": "P·MA = d·R·T → MA = d·R·T/P = 2,2·0,082·400/1,64 = 72,16/1,64 = 44 g/mol. Mol kütleleri CH4 = 16, N2 = 28, O2 = 32, CO2 = 44, SO2 = 64 g/mol olduğundan gaz CO2'dir. Sıcaklık °C olarak yazılırsa yaklaşık 14 g/mol bulunur ve hiçbir gazla eşleşmez; bu da formülde Kelvin kullanma zorunluluğunu gösterir.",
        "en": "P·MA = d·R·T → MA = d·R·T/P = 2.2·0.082·400/1.64 = 72.16/1.64 = 44 g/mol. The molar masses are CH4 = 16, N2 = 28, O2 = 32, CO2 = 44 and SO2 = 64 g/mol, so the gas is CO2. Using °C would give about 14 g/mol, which matches none of the gases — showing that kelvin must be used in the formula.",
        "de": "P·MA = d·R·T → MA = d·R·T/P = 2,2·0,082·400/1,64 = 72,16/1,64 = 44 g/mol. Die molaren Massen sind CH4 = 16, N2 = 28, O2 = 32, CO2 = 44 und SO2 = 64 g/mol, also ist das Gas CO2. Mit °C erhielte man etwa 14 g/mol, was zu keinem Gas passt – in der Formel muss Kelvin stehen.",
        "fr": "P·MA = d·R·T → MA = d·R·T/P = 2,2·0,082·400/1,64 = 72,16/1,64 = 44 g/mol. Les masses molaires sont CH4 = 16, N2 = 28, O2 = 32, CO2 = 44 et SO2 = 64 g/mol : le gaz est donc CO2. Avec des °C, on obtiendrait environ 14 g/mol, ce qui ne correspond à aucun gaz — d'où l'obligation d'utiliser les kelvins.",
        "ru": "P·MA = d·R·T → MA = d·R·T/P = 2,2·0,082·400/1,64 = 72,16/1,64 = 44 г/моль. Молярные массы: CH4 = 16, N2 = 28, O2 = 32, CO2 = 44, SO2 = 64 г/моль, значит, это CO2. С температурой в °C получилось бы около 14 г/моль, что не подходит ни одному газу, — в формулу нужно подставлять кельвины.",
        "ar": "P·MA = d·R·T ← MA = d·R·T/P = 2.2·0.082·400/1.64 = 72.16/1.64 = 44 g/mol. الكتل المولية: CH4 = 16 وN2 = 28 وO2 = 32 وCO2 = 44 وSO2 = 64 g/mol، إذن الغاز هو CO2. ولو استُخدمت درجة الحرارة بالسلسيوس لنتج نحو 14 g/mol ولا يطابق أي غاز، ما يبيّن ضرورة استخدام الكلفن.",
        "zh": "P·MA = d·R·T → MA = d·R·T/P = 2.2·0.082·400/1.64 = 72.16/1.64 = 44 g/mol。各气体摩尔质量为 CH4 = 16、N2 = 28、O2 = 32、CO2 = 44、SO2 = 64 g/mol，所以该气体是 CO2。若用摄氏温度计算得约 14 g/mol，与任何气体都不符，说明公式中必须使用开尔文温度。",
        "ku": "P·MA = d·R·T → MA = d·R·T/P = 2.2·0.082·400/1.64 = 72.16/1.64 = 44 g/mol. Girseyên molî CH4 = 16, N2 = 28, O2 = 32, CO2 = 44 û SO2 = 64 g/mol in, loma gaz CO2 ye. Heke germahî bi °C were nivîsandin nêzî 14 g/mol derdikeve û bi tu gazê re li hev nayê; ev nîşan dide ku divê Kelvin were bikaranîn."
      }
    },
    {
      "id": "u12-twin08",
      "stem": {
        "tr": "Sabit hacimli bir kapta 4 g He, 16 g O2 ve 14 g N2 gazlarından oluşan karışımın toplam basıncı 1,6 atm'dir. Buna göre O2 gazının kısmi basıncı kaç atm'dir? (He = 4, N = 14, O = 16)",
        "en": "In a rigid container a mixture of 4 g He, 16 g O2 and 14 g N2 has a total pressure of 1.6 atm. What is the partial pressure of O2 in atm? (He = 4, N = 14, O = 16)",
        "de": "In einem starren Behälter hat ein Gemisch aus 4 g He, 16 g O2 und 14 g N2 einen Gesamtdruck von 1,6 atm. Wie groß ist der Partialdruck von O2 in atm? (He = 4, N = 14, O = 16)",
        "fr": "Dans un récipient rigide, un mélange de 4 g de He, 16 g de O2 et 14 g de N2 a une pression totale de 1,6 atm. Quelle est la pression partielle de O2 en atm ? (He = 4, N = 14, O = 16)",
        "ru": "В жёстком сосуде смесь из 4 г He, 16 г O2 и 14 г N2 имеет общее давление 1,6 атм. Каково парциальное давление O2 в атм? (He = 4, N = 14, O = 16)",
        "ar": "في وعاء ثابت الحجم، الضغط الكلي لمخلوط من 4 g He و16 g O2 و14 g N2 يساوي 1.6 atm. كم يبلغ الضغط الجزئي لغاز O2 بوحدة atm؟ (He = 4، N = 14، O = 16)",
        "zh": "刚性容器中由 4 g He、16 g O2 和 14 g N2 组成的混合气体总压强为 1.6 atm。O2 的分压是多少 atm？（He = 4，N = 14，O = 16）",
        "ku": "Di firaxeke bi qebareya sabît de zexta giştî ya tevliheviya 4 g He, 16 g O2 û 14 g N2 1.6 atm e. Li gorî vê, zexta beşî ya O2 çend atm e? (He = 4, N = 14, O = 16)"
      },
      "options": [
        {
          "tr": "0,4 atm",
          "en": "0.4 atm",
          "de": "0,4 atm",
          "fr": "0,4 atm",
          "ru": "0,4 атм",
          "ar": "0.4 atm",
          "zh": "0.4 atm",
          "ku": "0.4 atm"
        },
        {
          "tr": "0,53 atm",
          "en": "0.53 atm",
          "de": "0,53 atm",
          "fr": "0,53 atm",
          "ru": "0,53 атм",
          "ar": "0.53 atm",
          "zh": "0.53 atm",
          "ku": "0.53 atm"
        },
        {
          "tr": "0,75 atm",
          "en": "0.75 atm",
          "de": "0,75 atm",
          "fr": "0,75 atm",
          "ru": "0,75 атм",
          "ar": "0.75 atm",
          "zh": "0.75 atm",
          "ku": "0.75 atm"
        },
        {
          "tr": "0,8 atm",
          "en": "0.8 atm",
          "de": "0,8 atm",
          "fr": "0,8 atm",
          "ru": "0,8 атм",
          "ar": "0.8 atm",
          "zh": "0.8 atm",
          "ku": "0.8 atm"
        },
        {
          "tr": "1,2 atm",
          "en": "1.2 atm",
          "de": "1,2 atm",
          "fr": "1,2 atm",
          "ru": "1,2 атм",
          "ar": "1.2 atm",
          "zh": "1.2 atm",
          "ku": "1.2 atm"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "n(He) = 4/4 = 1 mol, n(O2) = 16/32 = 0,5 mol, n(N2) = 14/28 = 0,5 mol; toplam 2 mol. Dalton yasasına göre P(O2) = X(O2)·P(toplam) = (0,5/2)·1,6 = 0,4 atm. Mol kesri yerine kütle kesri kullanılırsa (16/34)·1,6 ≈ 0,75 atm, basınç üç gaza eşit bölünürse ≈ 0,53 atm bulunur; 0,8 atm He'nin kısmi basıncı, 1,2 atm ise He ve N2'nin kısmi basınçları toplamıdır.",
        "en": "n(He) = 4/4 = 1 mol, n(O2) = 16/32 = 0.5 mol, n(N2) = 14/28 = 0.5 mol; total 2 mol. By Dalton's law P(O2) = X(O2)·P(total) = (0.5/2)·1.6 = 0.4 atm. Using the mass fraction instead of the mole fraction gives (16/34)·1.6 ≈ 0.75 atm, dividing the pressure equally among the three gases gives ≈ 0.53 atm; 0.8 atm is the partial pressure of He and 1.2 atm is the sum of the partial pressures of He and N2.",
        "de": "n(He) = 4/4 = 1 mol, n(O2) = 16/32 = 0,5 mol, n(N2) = 14/28 = 0,5 mol; insgesamt 2 mol. Nach Dalton gilt P(O2) = X(O2)·P(gesamt) = (0,5/2)·1,6 = 0,4 atm. Mit dem Massenanteil statt des Stoffmengenanteils erhält man (16/34)·1,6 ≈ 0,75 atm, bei gleichmäßiger Aufteilung auf drei Gase ≈ 0,53 atm; 0,8 atm ist der Partialdruck von He, 1,2 atm die Summe der Partialdrücke von He und N2.",
        "fr": "n(He) = 4/4 = 1 mol, n(O2) = 16/32 = 0,5 mol, n(N2) = 14/28 = 0,5 mol ; total 2 mol. D'après la loi de Dalton, P(O2) = X(O2)·P(totale) = (0,5/2)·1,6 = 0,4 atm. Utiliser la fraction massique au lieu de la fraction molaire donne (16/34)·1,6 ≈ 0,75 atm, partager la pression également entre les trois gaz donne ≈ 0,53 atm ; 0,8 atm est la pression partielle de He et 1,2 atm la somme des pressions partielles de He et N2.",
        "ru": "n(He) = 4/4 = 1 моль, n(O2) = 16/32 = 0,5 моль, n(N2) = 14/28 = 0,5 моль; всего 2 моль. По закону Дальтона P(O2) = X(O2)·P(общ.) = (0,5/2)·1,6 = 0,4 атм. Если взять массовую долю вместо мольной, получится (16/34)·1,6 ≈ 0,75 атм; если разделить давление поровну на три газа — ≈ 0,53 атм; 0,8 атм — парциальное давление He, 1,2 атм — сумма парциальных давлений He и N2.",
        "ar": "n(He) = 4/4 = 1 mol وn(O2) = 16/32 = 0.5 mol وn(N2) = 14/28 = 0.5 mol؛ المجموع 2 mol. وفق قانون دالتون P(O2) = X(O2)·P(الكلي) = (0.5/2)·1.6 = 0.4 atm. استخدام الكسر الكتلي بدل الكسر المولي يعطي (16/34)·1.6 ≈ 0.75 atm، وتقسيم الضغط بالتساوي على الغازات الثلاثة يعطي ≈ 0.53 atm؛ و0.8 atm هو الضغط الجزئي لـ He، و1.2 atm هو مجموع الضغطين الجزئيين لـ He وN2.",
        "zh": "n(He) = 4/4 = 1 mol，n(O2) = 16/32 = 0.5 mol，n(N2) = 14/28 = 0.5 mol；共 2 mol。根据道尔顿分压定律，P(O2) = X(O2)·P(总) = (0.5/2)·1.6 = 0.4 atm。用质量分数代替摩尔分数得 (16/34)·1.6 ≈ 0.75 atm，把压强平均分给三种气体得 ≈ 0.53 atm；0.8 atm 是 He 的分压，1.2 atm 是 He 与 N2 分压之和。",
        "ku": "n(He) = 4/4 = 1 mol, n(O2) = 16/32 = 0.5 mol, n(N2) = 14/28 = 0.5 mol; bi giştî 2 mol. Li gorî zagona Dalton P(O2) = X(O2)·P(giştî) = (0.5/2)·1.6 = 0.4 atm. Heke li şûna perçeya molî perçeya girseyî were bikaranîn (16/34)·1.6 ≈ 0.75 atm, heke zext li sê gazan wekhev were parvekirin ≈ 0.53 atm derdikeve; 0.8 atm zexta beşî ya He ye, 1.2 atm jî berhevoka zextên beşî yên He û N2 ye."
      }
    },
    {
      "id": "u12-twin09",
      "stem": {
        "tr": "Bir kaptaki gaz açık uçlu cıvalı manometreye bağlandığında, açık koldaki cıva seviyesi gazın bağlı olduğu koldakinden 14 cm daha yüksekte kalmaktadır. Aynı gaz aynı koşullarda kapalı uçlu cıvalı manometreye bağlansaydı cıva seviyeleri arasındaki fark kaç cm olurdu? (Açık hava basıncı 76 cmHg'dir.)",
        "en": "When a gas in a container is connected to an open-ended mercury manometer, the mercury level in the open arm stands 14 cm higher than in the arm connected to the gas. If the same gas under the same conditions were connected to a closed-end mercury manometer, what would the difference between the mercury levels be in cm? (Atmospheric pressure is 76 cmHg.)",
        "de": "Wird ein Gas an ein offenes Quecksilbermanometer angeschlossen, steht das Quecksilber im offenen Schenkel 14 cm höher als im Schenkel auf der Gasseite. Wie viele cm betrüge der Höhenunterschied, wenn dasselbe Gas unter gleichen Bedingungen an ein geschlossenes Quecksilbermanometer angeschlossen würde? (Luftdruck: 76 cmHg)",
        "fr": "Lorsqu'un gaz est relié à un manomètre à mercure à bout ouvert, le niveau du mercure dans la branche ouverte est 14 cm plus haut que dans la branche reliée au gaz. Si le même gaz, dans les mêmes conditions, était relié à un manomètre à mercure à bout fermé, quelle serait la dénivellation en cm ? (Pression atmosphérique : 76 cmHg.)",
        "ru": "При подключении газа к открытому ртутному манометру уровень ртути в открытом колене на 14 см выше, чем в колене, соединённом с газом. Какой была бы разность уровней ртути (в см), если бы тот же газ при тех же условиях подключили к закрытому ртутному манометру? (Атмосферное давление 76 см рт. ст.)",
        "ar": "عند توصيل غاز في وعاء بمانومتر زئبقي مفتوح الطرف، يكون مستوى الزئبق في الذراع المفتوحة أعلى بمقدار 14 cm منه في الذراع المتصلة بالغاز. لو وُصل الغاز نفسه في الظروف نفسها بمانومتر زئبقي مغلق الطرف، فكم سنتيمترًا يكون الفرق بين مستويي الزئبق؟ (الضغط الجوي 76 cmHg.)",
        "zh": "将容器中的气体连接到开口汞压强计上时，开口一侧的汞面比连接气体一侧高 14 cm。若在相同条件下把该气体连接到闭口汞压强计上，两侧汞面高度差为多少 cm？（大气压为 76 cmHg。）",
        "ku": "Dema gaza di firaxekê de bi manometreya cîwayê ya devvekirî ve tê girêdan, asta cîwayê di milê vekirî de 14 cm ji ya milê ku bi gazê ve girêdayî ye bilindtir dimîne. Heke heman gaz di heman şertan de bi manometreya cîwayê ya devgirtî ve bihata girêdan, ferqa di navbera astên cîwayê de dê çend cm bûya? (Zexta hewaya vekirî 76 cmHg e.)"
      },
      "options": [
        {
          "tr": "14 cm",
          "en": "14 cm",
          "de": "14 cm",
          "fr": "14 cm",
          "ru": "14 см",
          "ar": "14 cm",
          "zh": "14 cm",
          "ku": "14 cm"
        },
        {
          "tr": "62 cm",
          "en": "62 cm",
          "de": "62 cm",
          "fr": "62 cm",
          "ru": "62 см",
          "ar": "62 cm",
          "zh": "62 cm",
          "ku": "62 cm"
        },
        {
          "tr": "76 cm",
          "en": "76 cm",
          "de": "76 cm",
          "fr": "76 cm",
          "ru": "76 см",
          "ar": "76 cm",
          "zh": "76 cm",
          "ku": "76 cm"
        },
        {
          "tr": "90 cm",
          "en": "90 cm",
          "de": "90 cm",
          "fr": "90 cm",
          "ru": "90 см",
          "ar": "90 cm",
          "zh": "90 cm",
          "ku": "90 cm"
        },
        {
          "tr": "104 cm",
          "en": "104 cm",
          "de": "104 cm",
          "fr": "104 cm",
          "ru": "104 см",
          "ar": "104 cm",
          "zh": "104 cm",
          "ku": "104 cm"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Açık uçlu manometrede gaz tarafındaki cıva seviyesi aşağıda kaldığından gaz basıncı açık hava basıncından büyüktür: P(gaz) = 76 + 14 = 90 cmHg. Kapalı uçlu manometrenin kapalı kolunda boşluk (basınç ≈ 0) bulunduğundan seviye farkı doğrudan gaz basıncına eşittir: h = 90 cm. Farkın açık hava basıncından çıkarılması (76 − 14 = 62) ya da açık uçlu manometredeki farkın aynen alınması (14) tipik hatalardır.",
        "en": "In the open-ended manometer the mercury on the gas side is lower, so the gas pressure is greater than atmospheric: P(gas) = 76 + 14 = 90 cmHg. The closed arm of a closed-end manometer contains a vacuum (pressure ≈ 0), so the level difference equals the gas pressure directly: h = 90 cm. Subtracting the difference from atmospheric pressure (76 − 14 = 62) or simply copying the open-manometer difference (14) are typical errors.",
        "de": "Im offenen Manometer steht das Quecksilber auf der Gasseite tiefer, also ist der Gasdruck größer als der Luftdruck: P(Gas) = 76 + 14 = 90 cmHg. Im geschlossenen Schenkel eines geschlossenen Manometers herrscht Vakuum (Druck ≈ 0), daher ist der Höhenunterschied direkt gleich dem Gasdruck: h = 90 cm. Den Unterschied vom Luftdruck abzuziehen (76 − 14 = 62) oder den Wert des offenen Manometers zu übernehmen (14) sind typische Fehler.",
        "fr": "Dans le manomètre à bout ouvert, le mercure est plus bas du côté du gaz : la pression du gaz est donc supérieure à la pression atmosphérique, P(gaz) = 76 + 14 = 90 cmHg. La branche fermée d'un manomètre à bout fermé contient le vide (pression ≈ 0), la dénivellation est donc directement égale à la pression du gaz : h = 90 cm. Soustraire la dénivellation de la pression atmosphérique (76 − 14 = 62) ou recopier la valeur du manomètre ouvert (14) sont des erreurs typiques.",
        "ru": "В открытом манометре ртуть со стороны газа ниже, значит, давление газа больше атмосферного: P(газа) = 76 + 14 = 90 см рт. ст. В закрытом колене закрытого манометра — вакуум (давление ≈ 0), поэтому разность уровней прямо равна давлению газа: h = 90 см. Вычитание разности из атмосферного давления (76 − 14 = 62) или перенос значения открытого манометра (14) — типичные ошибки.",
        "ar": "في المانومتر المفتوح يكون الزئبق في جهة الغاز أدنى، إذن ضغط الغاز أكبر من الضغط الجوي: P(الغاز) = 76 + 14 = 90 cmHg. وفي الذراع المغلقة للمانومتر مغلق الطرف يوجد فراغ (الضغط ≈ 0)، لذا يساوي فرق المستويين ضغط الغاز مباشرة: h = 90 cm. طرح الفرق من الضغط الجوي (76 − 14 = 62) أو نقل فرق المانومتر المفتوح كما هو (14) خطآن شائعان.",
        "zh": "开口压强计中气体一侧汞面较低，说明气体压强大于大气压：P(气) = 76 + 14 = 90 cmHg。闭口压强计的封闭端是真空（压强 ≈ 0），所以汞面高度差直接等于气体压强：h = 90 cm。把高度差从大气压中减去（76 − 14 = 62）或直接照搬开口压强计的高度差（14）都是常见错误。",
        "ku": "Di manometreya devvekirî de cîwa li aliyê gazê nizmtir e, loma zexta gazê ji zexta hewayê mezintir e: P(gaz) = 76 + 14 = 90 cmHg. Di milê girtî yê manometreya devgirtî de valahî heye (zext ≈ 0), loma ferqa astan rasterast bi zexta gazê re wekhev e: h = 90 cm. Kêmkirina ferqê ji zexta hewayê (76 − 14 = 62) an girtina ferqa manometreya vekirî wek xwe (14) xeletiyên tîpîk in."
      }
    },
    {
      "id": "u12-twin10",
      "stem": {
        "tr": "Aralarında kapalı bir musluk bulunan iki kaptan 2 L'lik olanında 3 atm basınçta He, 3 L'lik olanında 2 atm basınçta Ne gazı vardır. Sıcaklık sabitken musluk açılıp gazlar karışınca toplam basınç kaç atm olur? (Bağlantı borusunun hacmi ihmal edilecektir.)",
        "en": "Two containers are connected by a closed valve: the 2 L container holds He at 3 atm and the 3 L container holds Ne at 2 atm. At constant temperature the valve is opened and the gases mix. What is the total pressure in atm? (Neglect the volume of the connecting tube.)",
        "de": "Zwei Behälter sind durch einen geschlossenen Hahn verbunden: Der 2-L-Behälter enthält He bei 3 atm, der 3-L-Behälter Ne bei 2 atm. Bei konstanter Temperatur wird der Hahn geöffnet und die Gase mischen sich. Wie groß ist der Gesamtdruck in atm? (Volumen des Verbindungsrohrs vernachlässigen.)",
        "fr": "Deux récipients sont reliés par un robinet fermé : celui de 2 L contient du He sous 3 atm, celui de 3 L du Ne sous 2 atm. À température constante, on ouvre le robinet et les gaz se mélangent. Quelle est la pression totale en atm ? (On néglige le volume du tube de liaison.)",
        "ru": "Два сосуда соединены закрытым краном: в сосуде объёмом 2 л находится He при 3 атм, в сосуде объёмом 3 л — Ne при 2 атм. При постоянной температуре кран открывают, и газы смешиваются. Каким станет общее давление в атм? (Объёмом соединительной трубки пренебречь.)",
        "ar": "وعاءان يصل بينهما صنبور مغلق: الوعاء الذي سعته 2 L يحتوي He تحت ضغط 3 atm، والذي سعته 3 L يحتوي Ne تحت ضغط 2 atm. عند ثبات درجة الحرارة يُفتح الصنبور فيمتزج الغازان. كم يصبح الضغط الكلي بوحدة atm؟ (يُهمل حجم أنبوب التوصيل.)",
        "zh": "两个容器之间用关闭的阀门相连：2 L 容器中装有 3 atm 的 He，3 L 容器中装有 2 atm 的 Ne。温度不变时打开阀门使气体混合，总压强是多少 atm？（连接管体积忽略不计。）",
        "ku": "Du firax bi musluxeke girtî bi hev ve girêdayî ne: di ya 2 L de He bi zexta 3 atm, di ya 3 L de Ne bi zexta 2 atm heye. Di germahiya sabît de musluk tê vekirin û gaz tevlihev dibin. Zexta giştî dibe çend atm? (Qebareya lûleya girêdanê nayê hesibandin.)"
      },
      "options": [
        {
          "tr": "1,2 atm",
          "en": "1.2 atm",
          "de": "1,2 atm",
          "fr": "1,2 atm",
          "ru": "1,2 атм",
          "ar": "1.2 atm",
          "zh": "1.2 atm",
          "ku": "1.2 atm"
        },
        {
          "tr": "2,4 atm",
          "en": "2.4 atm",
          "de": "2,4 atm",
          "fr": "2,4 atm",
          "ru": "2,4 атм",
          "ar": "2.4 atm",
          "zh": "2.4 atm",
          "ku": "2.4 atm"
        },
        {
          "tr": "2,5 atm",
          "en": "2.5 atm",
          "de": "2,5 atm",
          "fr": "2,5 atm",
          "ru": "2,5 атм",
          "ar": "2.5 atm",
          "zh": "2.5 atm",
          "ku": "2.5 atm"
        },
        {
          "tr": "5 atm",
          "en": "5 atm",
          "de": "5 atm",
          "fr": "5 atm",
          "ru": "5 атм",
          "ar": "5 atm",
          "zh": "5 atm",
          "ku": "5 atm"
        },
        {
          "tr": "12 atm",
          "en": "12 atm",
          "de": "12 atm",
          "fr": "12 atm",
          "ru": "12 атм",
          "ar": "12 atm",
          "zh": "12 atm",
          "ku": "12 atm"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Musluk açılınca her gaz 2 + 3 = 5 L'lik toplam hacme yayılır. Sabit sıcaklıkta P1·V1 = P2·V2: P(He) = 3·2/5 = 1,2 atm, P(Ne) = 2·3/5 = 1,2 atm; toplam basınç 1,2 + 1,2 = 2,4 atm. Hacimler farklı olduğu için basınçların ortalaması (2,5) ya da toplamı (5) alınamaz; 1,2 atm yalnızca bir gazın kısmi basıncı, 12 ise toplam hacme bölünmemiş P·V toplamıdır.",
        "en": "When the valve opens, each gas spreads into the total volume 2 + 3 = 5 L. At constant temperature P1·V1 = P2·V2: P(He) = 3·2/5 = 1.2 atm, P(Ne) = 2·3/5 = 1.2 atm; total pressure 1.2 + 1.2 = 2.4 atm. Because the volumes differ, the average (2.5) or the sum (5) of the pressures cannot be used; 1.2 atm is only one gas's partial pressure, and 12 is the sum of P·V not divided by the total volume.",
        "de": "Nach dem Öffnen verteilt sich jedes Gas auf das Gesamtvolumen 2 + 3 = 5 L. Bei konstanter Temperatur P1·V1 = P2·V2: P(He) = 3·2/5 = 1,2 atm, P(Ne) = 2·3/5 = 1,2 atm; Gesamtdruck 1,2 + 1,2 = 2,4 atm. Da die Volumina verschieden sind, darf man weder den Mittelwert (2,5) noch die Summe (5) der Drücke nehmen; 1,2 atm ist nur ein Partialdruck, 12 die nicht durch das Gesamtvolumen geteilte Summe von P·V.",
        "fr": "À l'ouverture, chaque gaz occupe le volume total 2 + 3 = 5 L. À température constante P1·V1 = P2·V2 : P(He) = 3·2/5 = 1,2 atm, P(Ne) = 2·3/5 = 1,2 atm ; pression totale 1,2 + 1,2 = 2,4 atm. Les volumes étant différents, on ne peut prendre ni la moyenne (2,5) ni la somme (5) des pressions ; 1,2 atm n'est que la pression partielle d'un gaz et 12 la somme des P·V non divisée par le volume total.",
        "ru": "После открытия крана каждый газ занимает общий объём 2 + 3 = 5 л. При постоянной температуре P1·V1 = P2·V2: P(He) = 3·2/5 = 1,2 атм, P(Ne) = 2·3/5 = 1,2 атм; общее давление 1,2 + 1,2 = 2,4 атм. Так как объёмы разные, нельзя брать среднее (2,5) или сумму (5) давлений; 1,2 атм — лишь парциальное давление одного газа, 12 — сумма P·V, не делённая на общий объём.",
        "ar": "عند فتح الصنبور ينتشر كل غاز في الحجم الكلي 2 + 3 = 5 L. عند ثبات الحرارة P1·V1 = P2·V2: P(He) = 3·2/5 = 1.2 atm وP(Ne) = 2·3/5 = 1.2 atm؛ الضغط الكلي 1.2 + 1.2 = 2.4 atm. ولأن الحجمين مختلفان لا يصح أخذ متوسط الضغطين (2.5) ولا مجموعهما (5)؛ و1.2 atm هو الضغط الجزئي لغاز واحد فقط، و12 هو مجموع P·V دون قسمته على الحجم الكلي.",
        "zh": "打开阀门后，每种气体都扩散到总体积 2 + 3 = 5 L 中。温度不变时 P1·V1 = P2·V2：P(He) = 3·2/5 = 1.2 atm，P(Ne) = 2·3/5 = 1.2 atm；总压强 1.2 + 1.2 = 2.4 atm。由于两容器体积不同，不能取压强的平均值（2.5）或直接相加（5）；1.2 atm 只是一种气体的分压，12 是没有除以总体积的 P·V 之和。",
        "ku": "Dema musluk vedibe her gaz li qebareya giştî ya 2 + 3 = 5 L belav dibe. Di germahiya sabît de P1·V1 = P2·V2: P(He) = 3·2/5 = 1.2 atm, P(Ne) = 2·3/5 = 1.2 atm; zexta giştî 1.2 + 1.2 = 2.4 atm. Ji ber ku qebare cuda ne, navînciya zextan (2.5) an berhevoka wan (5) nayê girtin; 1.2 atm tenê zexta beşî ya gazekê ye, 12 jî berhevoka P·V ye ku li qebareya giştî nehatiye parvekirin."
      }
    },
    {
      "id": "u12-twin11",
      "stem": {
        "tr": "Aynı sıcaklıkta bulunan He ve CH4 gazları ile ilgili; I. Taneciklerinin ortalama kinetik enerjileri eşittir. II. He tanecikleri, CH4 taneciklerinden ortalama olarak daha hızlı hareket eder. III. Tanecikler birbiriyle çarpıştıkça toplam kinetik enerjileri azalır, bu yüzden kapalı kaptaki gazın basıncı zamanla düşer. yargılarından hangileri doğrudur? (H = 1, He = 4, C = 12)",
        "en": "For He and CH4 gases at the same temperature, which of the following statements are correct? I. The average kinetic energies of their particles are equal. II. He particles move faster on average than CH4 particles. III. As particles collide, their total kinetic energy decreases, so the pressure of a gas in a closed container drops over time. (H = 1, He = 4, C = 12)",
        "de": "Welche der folgenden Aussagen über He- und CH4-Gas bei gleicher Temperatur sind richtig? I. Die mittleren kinetischen Energien ihrer Teilchen sind gleich. II. He-Teilchen bewegen sich im Mittel schneller als CH4-Teilchen. III. Bei Zusammenstößen nimmt die gesamte kinetische Energie der Teilchen ab, daher sinkt der Druck eines Gases im geschlossenen Gefäß mit der Zeit. (H = 1, He = 4, C = 12)",
        "fr": "Pour les gaz He et CH4 à la même température, lesquelles des affirmations suivantes sont exactes ? I. Les énergies cinétiques moyennes de leurs particules sont égales. II. Les particules de He se déplacent en moyenne plus vite que celles de CH4. III. À chaque choc, l'énergie cinétique totale des particules diminue ; la pression d'un gaz enfermé baisse donc avec le temps. (H = 1, He = 4, C = 12)",
        "ru": "Какие из утверждений о газах He и CH4 при одинаковой температуре верны? I. Средние кинетические энергии их частиц равны. II. Частицы He в среднем движутся быстрее частиц CH4. III. При столкновениях суммарная кинетическая энергия частиц уменьшается, поэтому давление газа в закрытом сосуде со временем падает. (H = 1, He = 4, C = 12)",
        "ar": "بالنسبة لغازي He وCH4 عند درجة الحرارة نفسها، أيّ العبارات الآتية صحيحة؟ I. متوسط الطاقة الحركية لجسيماتهما متساوٍ. II. تتحرك جسيمات He في المتوسط أسرع من جسيمات CH4. III. كلما تصادمت الجسيمات تقل طاقتها الحركية الكلية، لذا ينخفض ضغط الغاز في الوعاء المغلق مع الزمن. (H = 1، He = 4، C = 12)",
        "zh": "关于同温下的 He 和 CH4 气体，下列说法中哪些正确？I. 它们粒子的平均动能相等。II. He 粒子的平均运动速率比 CH4 粒子大。III. 粒子相互碰撞时总动能减小，因此密闭容器中气体的压强会随时间降低。（H = 1，He = 4，C = 12）",
        "ku": "Derbarê gazên He û CH4 yên di heman germahiyê de, kîjan ji van gotinan rast in? I. Enerjiya kînetîk a navîn a tenekên wan wekhev e. II. Tenekên He bi navînî ji tenekên CH4 bileztir diçin. III. Her ku tenek li hev dixin enerjiya wan a kînetîk a giştî kêm dibe, loma zexta gazê di firaxa girtî de bi demê re dadikeve. (H = 1, He = 4, C = 12)"
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
        "tr": "I doğrudur: ortalama kinetik enerji yalnızca mutlak sıcaklığa bağlıdır, gazın cinsine bağlı değildir. II doğrudur: kinetik enerjiler eşitken mol kütlesi küçük olan He (4 g/mol), CH4'ten (16 g/mol) daha hızlıdır; Graham yasasına göre hızlar oranı √(16/4) = 2'dir. III yanlıştır: ideal gaz çarpışmaları esnektir, sabit sıcaklıkta toplam kinetik enerji ve basınç zamanla değişmez.",
        "en": "I is correct: the average kinetic energy depends only on the absolute temperature, not on the identity of the gas. II is correct: with equal kinetic energies, the lighter He (4 g/mol) is faster than CH4 (16 g/mol); by Graham's law the speed ratio is √(16/4) = 2. III is wrong: collisions of ideal gas particles are elastic, so at constant temperature the total kinetic energy and the pressure do not change over time.",
        "de": "I ist richtig: Die mittlere kinetische Energie hängt nur von der absoluten Temperatur ab, nicht von der Gasart. II ist richtig: Bei gleicher kinetischer Energie ist das leichtere He (4 g/mol) schneller als CH4 (16 g/mol); nach Graham ist das Geschwindigkeitsverhältnis √(16/4) = 2. III ist falsch: Stöße idealer Gasteilchen sind elastisch, bei konstanter Temperatur ändern sich kinetische Gesamtenergie und Druck mit der Zeit nicht.",
        "fr": "I est exacte : l'énergie cinétique moyenne ne dépend que de la température absolue, pas de la nature du gaz. II est exacte : à énergie cinétique égale, He plus léger (4 g/mol) est plus rapide que CH4 (16 g/mol) ; d'après la loi de Graham, le rapport des vitesses vaut √(16/4) = 2. III est fausse : les chocs entre particules d'un gaz parfait sont élastiques ; à température constante, l'énergie cinétique totale et la pression ne varient pas avec le temps.",
        "ru": "I верно: средняя кинетическая энергия зависит только от абсолютной температуры, а не от природы газа. II верно: при равных кинетических энергиях более лёгкий He (4 г/моль) движется быстрее CH4 (16 г/моль); по закону Грэма отношение скоростей √(16/4) = 2. III неверно: столкновения частиц идеального газа упругие, при постоянной температуре суммарная кинетическая энергия и давление со временем не меняются.",
        "ar": "العبارة I صحيحة: متوسط الطاقة الحركية يعتمد على درجة الحرارة المطلقة فقط لا على نوع الغاز. العبارة II صحيحة: عند تساوي الطاقة الحركية يكون He الأخف (4 g/mol) أسرع من CH4 (16 g/mol)، ووفق قانون غراهام نسبة السرعتين √(16/4) = 2. العبارة III خاطئة: تصادمات جسيمات الغاز المثالي مرنة، فلا تتغير الطاقة الحركية الكلية ولا الضغط مع الزمن عند ثبات درجة الحرارة.",
        "zh": "I 正确：平均动能只取决于热力学温度，与气体种类无关。II 正确：动能相等时，摩尔质量较小的 He（4 g/mol）比 CH4（16 g/mol）运动得快；根据格雷姆定律，速率之比为 √(16/4) = 2。III 错误：理想气体粒子的碰撞是弹性的，温度不变时总动能和压强不随时间改变。",
        "ku": "I rast e: enerjiya kînetîk a navîn tenê bi germahiya mutleq ve girêdayî ye, ne bi cureyê gazê. II rast e: dema enerjiyên kînetîk wekhev in, He ya siviktir (4 g/mol) ji CH4 (16 g/mol) bileztir e; li gorî zagona Graham rêjeya leza wan √(16/4) = 2 ye. III şaş e: lêketinên tenekên gaza îdeal elastîk in, di germahiya sabît de enerjiya kînetîk a giştî û zext bi demê re naguherin."
      }
    },
    {
      "id": "u12-twin12",
      "stem": {
        "tr": "Gerçek bir gaz aşağıdaki koşulların hangisinde ideal gaz davranışına en çok yaklaşır?",
        "en": "Under which of the following conditions does a real gas behave most like an ideal gas?",
        "de": "Unter welcher der folgenden Bedingungen verhält sich ein reales Gas am ehesten wie ein ideales Gas?",
        "fr": "Dans laquelle des conditions suivantes un gaz réel se rapproche-t-il le plus du comportement d'un gaz parfait ?",
        "ru": "При каких из следующих условий реальный газ ведёт себя наиболее близко к идеальному?",
        "ar": "في أيّ الظروف الآتية يقترب سلوك الغاز الحقيقي أكثر ما يمكن من سلوك الغاز المثالي؟",
        "zh": "在下列哪种条件下，真实气体的行为最接近理想气体？",
        "ku": "Gazeke rastîn di kîjan ji van şertan de herî zêde nêzî tevgera gaza îdeal dibe?"
      },
      "options": [
        {
          "tr": "0,5 atm ve 500 K",
          "en": "0.5 atm and 500 K",
          "de": "0,5 atm und 500 K",
          "fr": "0,5 atm et 500 K",
          "ru": "0,5 атм и 500 K",
          "ar": "0.5 atm و500 K",
          "zh": "0.5 atm 和 500 K",
          "ku": "0.5 atm û 500 K"
        },
        {
          "tr": "50 atm ve 200 K",
          "en": "50 atm and 200 K",
          "de": "50 atm und 200 K",
          "fr": "50 atm et 200 K",
          "ru": "50 атм и 200 K",
          "ar": "50 atm و200 K",
          "zh": "50 atm 和 200 K",
          "ku": "50 atm û 200 K"
        },
        {
          "tr": "0,5 atm ve 200 K",
          "en": "0.5 atm and 200 K",
          "de": "0,5 atm und 200 K",
          "fr": "0,5 atm et 200 K",
          "ru": "0,5 атм и 200 K",
          "ar": "0.5 atm و200 K",
          "zh": "0.5 atm 和 200 K",
          "ku": "0.5 atm û 200 K"
        },
        {
          "tr": "50 atm ve 500 K",
          "en": "50 atm and 500 K",
          "de": "50 atm und 500 K",
          "fr": "50 atm et 500 K",
          "ru": "50 атм и 500 K",
          "ar": "50 atm و500 K",
          "zh": "50 atm 和 500 K",
          "ku": "50 atm û 500 K"
        },
        {
          "tr": "1 atm ve gazın yoğuşma sıcaklığına çok yakın bir sıcaklık",
          "en": "1 atm and a temperature very close to the gas's condensation point",
          "de": "1 atm und eine Temperatur sehr nahe am Kondensationspunkt des Gases",
          "fr": "1 atm et une température très proche du point de condensation du gaz",
          "ru": "1 атм и температура, очень близкая к температуре конденсации газа",
          "ar": "1 atm ودرجة حرارة قريبة جدًا من درجة تكاثف الغاز",
          "zh": "1 atm 且温度非常接近该气体的冷凝温度",
          "ku": "1 atm û germahiyeke pir nêzî germahiya hilmbûna (kondensasyona) gazê"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "İdeal gaz modelinde tanecikler arası çekim yoktur ve taneciklerin öz hacmi ihmal edilir. Düşük basınçta tanecikler birbirinden uzak olduğu için öz hacimleri kap hacmi yanında önemsizleşir; yüksek sıcaklıkta tanecikler hızlı olduğu için çekim kuvvetlerinin etkisi azalır. Bu yüzden en ideal davranış, en düşük basınç ile en yüksek sıcaklığın bir arada olduğu 0,5 atm ve 500 K koşulundadır. Yüksek basınç, düşük sıcaklık veya yoğuşma sıcaklığına yakınlık tanecikleri yaklaştırır, çekim etkisini artırır ve ideallikten sapmayı büyütür.",
        "en": "The ideal gas model assumes no attractions between particles and neglects their own volume. At low pressure the particles are far apart, so their own volume is negligible compared with the container; at high temperature the particles are fast, so attractions matter less. Hence the most ideal behaviour is at 0.5 atm and 500 K, the combination of the lowest pressure and the highest temperature. High pressure, low temperature or nearness to the condensation point bring particles closer, strengthen the effect of attractions and increase the deviation from ideality.",
        "de": "Das Modell des idealen Gases setzt keine Anziehung zwischen den Teilchen voraus und vernachlässigt ihr Eigenvolumen. Bei niedrigem Druck sind die Teilchen weit voneinander entfernt, ihr Eigenvolumen ist gegenüber dem Gefäß vernachlässigbar; bei hoher Temperatur sind sie schnell, Anziehungskräfte wirken sich weniger aus. Am idealsten verhält sich das Gas daher bei 0,5 atm und 500 K, also bei niedrigstem Druck und höchster Temperatur zugleich. Hoher Druck, niedrige Temperatur oder Nähe zum Kondensationspunkt bringen die Teilchen näher zusammen und vergrößern die Abweichung.",
        "fr": "Le modèle du gaz parfait suppose l'absence d'attraction entre particules et néglige leur volume propre. À basse pression, les particules sont éloignées et leur volume propre devient négligeable devant celui du récipient ; à haute température, elles sont rapides et les attractions comptent moins. Le comportement le plus idéal correspond donc à 0,5 atm et 500 K, qui réunit la pression la plus basse et la température la plus haute. Une pression élevée, une basse température ou la proximité du point de condensation rapprochent les particules et augmentent l'écart à l'idéalité.",
        "ru": "Модель идеального газа предполагает отсутствие притяжения между частицами и пренебрегает их собственным объёмом. При низком давлении частицы далеко друг от друга, и их собственный объём мал по сравнению с объёмом сосуда; при высокой температуре частицы быстрые, и притяжение влияет слабее. Поэтому наиболее идеально газ ведёт себя при 0,5 атм и 500 K — сочетании самого низкого давления и самой высокой температуры. Высокое давление, низкая температура или близость к температуре конденсации сближают частицы и увеличивают отклонение от идеальности.",
        "ar": "يفترض نموذج الغاز المثالي عدم وجود تجاذب بين الجسيمات ويهمل حجمها الذاتي. عند الضغط المنخفض تتباعد الجسيمات فيصبح حجمها الذاتي مهملًا مقارنة بحجم الوعاء، وعند درجة الحرارة المرتفعة تكون الجسيمات سريعة فيقل أثر قوى التجاذب. لذلك يكون السلوك الأقرب إلى المثالي عند 0.5 atm و500 K، أي عند اجتماع أدنى ضغط وأعلى درجة حرارة. أما الضغط المرتفع أو الحرارة المنخفضة أو القرب من درجة التكاثف فتقرّب الجسيمات وتزيد أثر التجاذب والانحراف عن المثالية.",
        "zh": "理想气体模型假定粒子间没有引力并忽略粒子本身的体积。低压时粒子相距很远，其本身体积相对容器可以忽略；高温时粒子运动快，引力的影响变小。因此最接近理想的情况是 0.5 atm 和 500 K，即最低压强与最高温度同时满足。高压、低温或接近冷凝温度都会使粒子靠近，增强引力作用，使偏离理想的程度增大。",
        "ku": "Modela gaza îdeal texmîn dike ku di navbera tenekan de kişandin tune ye û qebareya tenekan bi xwe nayê hesibandin. Di zexta nizm de tenek ji hev dûr in, loma qebareya wan li gorî firaxê ne girîng e; di germahiya bilind de tenek bilez in, loma bandora hêzên kişandinê kêm dibe. Ji ber vê yekê tevgera herî îdeal di 0.5 atm û 500 K de ye, ku zexta herî nizm û germahiya herî bilind bi hev re ne. Zexta bilind, germahiya nizm an nêzîkbûna germahiya hilmbûnê tenekan nêzî hev dike û dûrketina ji îdealiyê mezin dike."
      }
    },
    {
      "id": "u12-twin13",
      "stem": {
        "tr": "Sabit miktardaki ideal bir gaz için aşağıdaki değişken çiftlerinden hangisinin grafiği orijinden geçen ve artan bir doğrudur?",
        "en": "For a fixed amount of an ideal gas, the graph of which of the following pairs of variables is an increasing straight line through the origin?",
        "de": "Für eine konstante Menge eines idealen Gases: Bei welchem der folgenden Variablenpaare ist der Graph eine steigende Gerade durch den Ursprung?",
        "fr": "Pour une quantité constante de gaz parfait, pour lequel des couples de variables suivants le graphique est-il une droite croissante passant par l'origine ?",
        "ru": "Для постоянного количества идеального газа график какой из следующих пар величин представляет собой возрастающую прямую, проходящую через начало координат?",
        "ar": "لكمية ثابتة من غاز مثالي، أيّ أزواج المتغيرات الآتية يكون تمثيلها البياني خطًا مستقيمًا متزايدًا يمر بنقطة الأصل؟",
        "zh": "对于一定量的理想气体，下列哪一对变量的图像是一条过原点的上升直线？",
        "ku": "Ji bo mîqdareke sabît ji gazeke îdeal, grafîka kîjan ji van cotên guhêrbaran xêzeke rast a zêdebûyî ye ku di destpêka koordînatan re derbas dibe?"
      },
      "options": [
        {
          "tr": "Sabit basınçta hacim – Celsius sıcaklığı (t)",
          "en": "Volume vs. Celsius temperature (t) at constant pressure",
          "de": "Volumen gegen Celsius-Temperatur (t) bei konstantem Druck",
          "fr": "Volume en fonction de la température Celsius (t) à pression constante",
          "ru": "Объём – температура по Цельсию (t) при постоянном давлении",
          "ar": "الحجم مقابل درجة الحرارة السلسيوسية (t) عند ثبات الضغط",
          "zh": "恒压下体积 – 摄氏温度 (t)",
          "ku": "Di zexta sabît de qebare – germahiya Celsius (t)"
        },
        {
          "tr": "Sabit sıcaklıkta basınç – hacim",
          "en": "Pressure vs. volume at constant temperature",
          "de": "Druck gegen Volumen bei konstanter Temperatur",
          "fr": "Pression en fonction du volume à température constante",
          "ru": "Давление – объём при постоянной температуре",
          "ar": "الضغط مقابل الحجم عند ثبات درجة الحرارة",
          "zh": "恒温下压强 – 体积",
          "ku": "Di germahiya sabît de zext – qebare"
        },
        {
          "tr": "Sabit sıcaklıkta basınç × hacim – basınç",
          "en": "Pressure × volume vs. pressure at constant temperature",
          "de": "Druck × Volumen gegen Druck bei konstanter Temperatur",
          "fr": "Pression × volume en fonction de la pression à température constante",
          "ru": "Произведение давления на объём – давление при постоянной температуре",
          "ar": "حاصل ضرب الضغط في الحجم مقابل الضغط عند ثبات درجة الحرارة",
          "zh": "恒温下压强 × 体积 – 压强",
          "ku": "Di germahiya sabît de zext × qebare – zext"
        },
        {
          "tr": "Sabit hacimde basınç – 1/T",
          "en": "Pressure vs. 1/T at constant volume",
          "de": "Druck gegen 1/T bei konstantem Volumen",
          "fr": "Pression en fonction de 1/T à volume constant",
          "ru": "Давление – 1/T при постоянном объёме",
          "ar": "الضغط مقابل 1/T عند ثبات الحجم",
          "zh": "恒容下压强 – 1/T",
          "ku": "Di qebareya sabît de zext – 1/T"
        },
        {
          "tr": "Sabit basınçta hacim – mutlak sıcaklık (T)",
          "en": "Volume vs. absolute temperature (T) at constant pressure",
          "de": "Volumen gegen absolute Temperatur (T) bei konstantem Druck",
          "fr": "Volume en fonction de la température absolue (T) à pression constante",
          "ru": "Объём – абсолютная температура (T) при постоянном давлении",
          "ar": "الحجم مقابل درجة الحرارة المطلقة (T) عند ثبات الضغط",
          "zh": "恒压下体积 – 热力学温度 (T)",
          "ku": "Di zexta sabît de qebare – germahiya mutleq (T)"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Charles yasasına göre sabit basınçta V = k·T'dir; V–T(K) grafiği orijinden geçen artan bir doğrudur. V–t (Celsius) grafiği de doğrusaldır ama orijinden değil, uzatıldığında t = −273 °C noktasından geçer. Sabit sıcaklıkta P–V grafiği ters orantı eğrisi (hiperbol), P·V–P grafiği ise yatay bir doğrudur. Sabit hacimde P, T ile doğru orantılı olduğundan P–1/T grafiği doğru değil, azalan bir eğridir.",
        "en": "By Charles's law V = k·T at constant pressure, so the V–T(K) graph is an increasing straight line through the origin. The V–t (Celsius) graph is also linear, but when extended it passes through t = −273 °C, not the origin. At constant temperature the P–V graph is an inverse-proportion curve (hyperbola) and the P·V–P graph is a horizontal line. At constant volume P is directly proportional to T, so the P–1/T graph is a decreasing curve, not a straight line.",
        "de": "Nach Charles gilt bei konstantem Druck V = k·T; der V–T(K)-Graph ist eine steigende Ursprungsgerade. Der V–t (Celsius)-Graph ist zwar auch linear, verläuft verlängert aber durch t = −273 °C, nicht durch den Ursprung. Bei konstanter Temperatur ist der P–V-Graph eine Hyperbel und der P·V–P-Graph eine waagerechte Gerade. Bei konstantem Volumen ist P proportional zu T, der P–1/T-Graph ist daher eine fallende Kurve, keine Gerade.",
        "fr": "D'après la loi de Charles, V = k·T à pression constante : le graphique V–T(K) est une droite croissante passant par l'origine. Le graphique V–t (Celsius) est aussi linéaire, mais prolongé il passe par t = −273 °C et non par l'origine. À température constante, le graphique P–V est une hyperbole et le graphique P·V–P une droite horizontale. À volume constant, P est proportionnelle à T, donc le graphique P–1/T est une courbe décroissante, pas une droite.",
        "ru": "По закону Шарля при постоянном давлении V = k·T, поэтому график V–T(K) — возрастающая прямая через начало координат. График V–t (Celsius) тоже линейный, но при продолжении проходит через t = −273 °C, а не через начало координат. При постоянной температуре график P–V — гипербола, а график P·V–P — горизонтальная прямая. При постоянном объёме P прямо пропорционально T, поэтому график P–1/T — убывающая кривая, а не прямая.",
        "ar": "وفق قانون شارل يكون V = k·T عند ثبات الضغط، لذا فالتمثيل V–T(K) خط مستقيم متزايد يمر بنقطة الأصل. والتمثيل V–t (Celsius) خطي أيضًا لكنه عند مده يمر بالنقطة t = −273 °C لا بنقطة الأصل. عند ثبات الحرارة يكون التمثيل P–V منحنى تناسب عكسي (قطعًا زائدًا)، والتمثيل P·V–P خطًا أفقيًا. وعند ثبات الحجم يتناسب P طرديًا مع T، لذا فالتمثيل P–1/T منحنى متناقص لا خط مستقيم.",
        "zh": "根据查理定律，恒压下 V = k·T，所以 V–T(K) 图像是过原点的上升直线。V–t (Celsius) 图像虽然也是直线，但延长后经过 t = −273 °C，而不是原点。恒温下 P–V 图像是反比例曲线（双曲线），P·V–P 图像是一条水平线。恒容下 P 与 T 成正比，所以 P–1/T 图像是下降的曲线，而不是直线。",
        "ku": "Li gorî zagona Charles di zexta sabît de V = k·T ye; grafîka V–T(K) xêzeke rast a zêdebûyî ye ku di destpêkê re derbas dibe. Grafîka V–t (Celsius) jî xêzî ye lê dema tê dirêjkirin di t = −273 °C re derbas dibe, ne di destpêkê re. Di germahiya sabît de grafîka P–V xêzeke berevajî rêjeyî (hîperbol) ye, grafîka P·V–P jî xêzeke asoyî ye. Di qebareya sabît de P bi T re rasterast rêjeyî ye, loma grafîka P–1/T ne xêzeke rast, xêzeke kêmbûyî ya xwar e."
      }
    },
    {
      "id": "u12-twin14",
      "stem": {
        "tr": "Aynı sıcaklıkta, eşit hacimli üç ayrı kapta 8'er gram He, CH4 ve SO2 gazları bulunmaktadır. Bu gazların basınçları arasındaki ilişki aşağıdakilerden hangisidir? (H = 1, He = 4, C = 12, O = 16, S = 32)",
        "en": "Three separate containers of equal volume at the same temperature hold 8 g each of He, CH4 and SO2. Which of the following gives the relationship between the pressures of these gases? (H = 1, He = 4, C = 12, O = 16, S = 32)",
        "de": "Drei getrennte, gleich große Behälter enthalten bei gleicher Temperatur je 8 g He, CH4 und SO2. Welche Beziehung besteht zwischen den Drücken dieser Gase? (H = 1, He = 4, C = 12, O = 16, S = 32)",
        "fr": "Trois récipients séparés de même volume, à la même température, contiennent chacun 8 g de He, de CH4 et de SO2. Quelle relation existe entre les pressions de ces gaz ? (H = 1, He = 4, C = 12, O = 16, S = 32)",
        "ru": "В трёх отдельных сосудах одинакового объёма при одной и той же температуре находится по 8 г He, CH4 и SO2. Каково соотношение давлений этих газов? (H = 1, He = 4, C = 12, O = 16, S = 32)",
        "ar": "تحتوي ثلاثة أوعية منفصلة متساوية الحجم عند درجة الحرارة نفسها على 8 g من كل من He وCH4 وSO2. ما العلاقة بين ضغوط هذه الغازات؟ (H = 1، He = 4، C = 12، O = 16، S = 32)",
        "zh": "在同一温度下，三个体积相等的独立容器中分别装有 8 g He、CH4 和 SO2。这些气体压强之间的关系是下列哪一项？（H = 1，He = 4，C = 12，O = 16，S = 32）",
        "ku": "Di heman germahiyê de, di sê firaxên cuda yên bi qebareya wekhev de her yek 8 g He, CH4 û SO2 hene. Têkiliya di navbera zextên van gazan de kîjan e? (H = 1, He = 4, C = 12, O = 16, S = 32)"
      },
      "options": [
        {
          "tr": "SO2 > CH4 > He",
          "en": "SO2 > CH4 > He",
          "de": "SO2 > CH4 > He",
          "fr": "SO2 > CH4 > He",
          "ru": "SO2 > CH4 > He",
          "ar": "SO2 > CH4 > He",
          "zh": "SO2 > CH4 > He",
          "ku": "SO2 > CH4 > He"
        },
        {
          "tr": "He = CH4 = SO2",
          "en": "He = CH4 = SO2",
          "de": "He = CH4 = SO2",
          "fr": "He = CH4 = SO2",
          "ru": "He = CH4 = SO2",
          "ar": "He = CH4 = SO2",
          "zh": "He = CH4 = SO2",
          "ku": "He = CH4 = SO2"
        },
        {
          "tr": "CH4 > He > SO2",
          "en": "CH4 > He > SO2",
          "de": "CH4 > He > SO2",
          "fr": "CH4 > He > SO2",
          "ru": "CH4 > He > SO2",
          "ar": "CH4 > He > SO2",
          "zh": "CH4 > He > SO2",
          "ku": "CH4 > He > SO2"
        },
        {
          "tr": "SO2 > He > CH4",
          "en": "SO2 > He > CH4",
          "de": "SO2 > He > CH4",
          "fr": "SO2 > He > CH4",
          "ru": "SO2 > He > CH4",
          "ar": "SO2 > He > CH4",
          "zh": "SO2 > He > CH4",
          "ku": "SO2 > He > CH4"
        },
        {
          "tr": "He > CH4 > SO2",
          "en": "He > CH4 > SO2",
          "de": "He > CH4 > SO2",
          "fr": "He > CH4 > SO2",
          "ru": "He > CH4 > SO2",
          "ar": "He > CH4 > SO2",
          "zh": "He > CH4 > SO2",
          "ku": "He > CH4 > SO2"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Aynı V ve T'de basınç mol sayısıyla doğru orantılıdır (P = n·R·T/V). n(He) = 8/4 = 2 mol, n(CH4) = 8/16 = 0,5 mol, n(SO2) = 8/64 = 0,125 mol olduğundan P(He) > P(CH4) > P(SO2). Kütleler eşit diye basınçların da eşit olduğunu düşünmek ya da mol kütlesi büyük olan gazın basıncının büyük olacağını sanmak tipik hatalardır; eşit kütlede mol kütlesi küçük olan gazın mol sayısı ve basıncı büyüktür.",
        "en": "At the same V and T, pressure is directly proportional to the number of moles (P = n·R·T/V). n(He) = 8/4 = 2 mol, n(CH4) = 8/16 = 0.5 mol, n(SO2) = 8/64 = 0.125 mol, so P(He) > P(CH4) > P(SO2). Thinking the pressures are equal because the masses are equal, or that the gas with the larger molar mass has the larger pressure, are typical errors; for equal masses the gas with the smaller molar mass has more moles and a higher pressure.",
        "de": "Bei gleichem V und T ist der Druck proportional zur Stoffmenge (P = n·R·T/V). n(He) = 8/4 = 2 mol, n(CH4) = 8/16 = 0,5 mol, n(SO2) = 8/64 = 0,125 mol, also P(He) > P(CH4) > P(SO2). Typische Fehler: gleiche Massen bedeuten gleiche Drücke, oder das Gas mit der größeren molaren Masse habe den größeren Druck; bei gleicher Masse hat das Gas mit der kleineren molaren Masse mehr Mol und den höheren Druck.",
        "fr": "À V et T égaux, la pression est proportionnelle au nombre de moles (P = n·R·T/V). n(He) = 8/4 = 2 mol, n(CH4) = 8/16 = 0,5 mol, n(SO2) = 8/64 = 0,125 mol, donc P(He) > P(CH4) > P(SO2). Croire que des masses égales donnent des pressions égales, ou que le gaz de plus grande masse molaire a la plus grande pression, sont des erreurs typiques : à masse égale, le gaz de plus petite masse molaire a plus de moles et une pression plus élevée.",
        "ru": "При одинаковых V и T давление прямо пропорционально числу молей (P = n·R·T/V). n(He) = 8/4 = 2 моль, n(CH4) = 8/16 = 0,5 моль, n(SO2) = 8/64 = 0,125 моль, поэтому P(He) > P(CH4) > P(SO2). Типичные ошибки — считать, что равные массы дают равные давления, или что у газа с большей молярной массой давление больше; при равных массах у газа с меньшей молярной массой больше молей и выше давление.",
        "ar": "عند تساوي V وT يتناسب الضغط طرديًا مع عدد المولات (P = n·R·T/V). n(He) = 8/4 = 2 mol وn(CH4) = 8/16 = 0.5 mol وn(SO2) = 8/64 = 0.125 mol، إذن P(He) > P(CH4) > P(SO2). من الأخطاء الشائعة الظن بأن تساوي الكتل يعني تساوي الضغوط، أو أن الغاز ذا الكتلة المولية الأكبر ضغطه أكبر؛ فعند تساوي الكتل يكون للغاز ذي الكتلة المولية الأصغر عدد مولات وضغط أكبر.",
        "zh": "在 V 和 T 相同时，压强与物质的量成正比（P = n·R·T/V）。n(He) = 8/4 = 2 mol，n(CH4) = 8/16 = 0.5 mol，n(SO2) = 8/64 = 0.125 mol，所以 P(He) > P(CH4) > P(SO2)。认为质量相等压强就相等，或认为摩尔质量大的气体压强大，都是常见错误；质量相等时，摩尔质量小的气体物质的量多、压强大。",
        "ku": "Di heman V û T de zext bi hejmara molan re rasterast rêjeyî ye (P = n·R·T/V). n(He) = 8/4 = 2 mol, n(CH4) = 8/16 = 0.5 mol, n(SO2) = 8/64 = 0.125 mol, loma P(He) > P(CH4) > P(SO2). Fikirîna ku ji ber girseyên wekhev zext jî wekhev in, an jî ku gaza bi girseya molî ya mezintir zexta mezintir heye, xeletiyên tîpîk in; di girseya wekhev de gaza bi girseya molî ya piçûktir hejmara molan û zexta mezintir heye."
      }
    },
    {
      "id": "u12-twin15",
      "stem": {
        "tr": "Sürtünmesiz pistonlu bir kaptaki ideal gaza, sıcaklık sabit tutularak aynı gazdan bir miktar daha ekleniyor. Buna göre gazın; I. basıncı, II. yoğunluğu, III. hacmi niceliklerinden hangileri değişmez?",
        "en": "More of the same gas is added to an ideal gas in a container with a frictionless piston while the temperature is kept constant. Which of the following quantities of the gas do not change? I. pressure, II. density, III. volume",
        "de": "Einem idealen Gas in einem Gefäß mit reibungsfreiem Kolben wird bei konstanter Temperatur weiteres Gas derselben Art zugeführt. Welche der folgenden Größen des Gases ändern sich nicht? I. Druck, II. Dichte, III. Volumen",
        "fr": "On ajoute, à température constante, une quantité supplémentaire du même gaz à un gaz parfait contenu dans un récipient à piston sans frottement. Lesquelles des grandeurs suivantes du gaz ne changent pas ? I. la pression, II. la masse volumique, III. le volume",
        "ru": "К идеальному газу в сосуде с поршнем без трения при постоянной температуре добавляют ещё некоторое количество того же газа. Какие из следующих величин газа не изменяются? I. давление, II. плотность, III. объём",
        "ar": "يُضاف مزيد من الغاز نفسه إلى غاز مثالي في وعاء ذي مكبس عديم الاحتكاك مع إبقاء درجة الحرارة ثابتة. أيّ الكميات الآتية للغاز لا تتغير؟ I. الضغط، II. الكثافة، III. الحجم",
        "zh": "保持温度不变，向带无摩擦活塞的容器中的理想气体再加入一些同种气体。气体的下列物理量中哪些不变？I. 压强，II. 密度，III. 体积",
        "ku": "Germahî sabît tê hiştin û li gaza îdeal a di firaxeke bi pistona bê sûrtin de hinekî din ji heman gazê tê zêdekirin. Kîjan ji van mîqdarên gazê naguherin? I. zext, II. çirbûn, III. qebare"
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
        "tr": "Sürtünmesiz piston, iç basınç dış basınca eşit olana kadar hareket ettiğinden gazın basıncı değişmez (I). Sabit basınç ve sıcaklıkta hacim mol sayısıyla doğru orantılı olarak artar, dolayısıyla hacim değişir (III). Yoğunluk d = P·MA/(R·T) bağıntısında P, MA ve T değişmediğinden sabit kalır (II); kütle ve hacim aynı oranda artar. Değişmeyen nicelikler basınç ve yoğunluktur.",
        "en": "The frictionless piston moves until the inside pressure equals the outside pressure, so the pressure of the gas does not change (I). At constant pressure and temperature the volume increases in proportion to the number of moles, so the volume changes (III). In d = P·MA/(R·T), P, MA and T stay the same, so the density stays constant (II); mass and volume increase in the same ratio. The quantities that do not change are pressure and density.",
        "de": "Der reibungsfreie Kolben bewegt sich, bis Innen- und Außendruck gleich sind; der Druck des Gases ändert sich also nicht (I). Bei konstantem Druck und konstanter Temperatur wächst das Volumen proportional zur Stoffmenge, das Volumen ändert sich (III). In d = P·MA/(R·T) bleiben P, MA und T gleich, also bleibt die Dichte konstant (II); Masse und Volumen steigen im gleichen Verhältnis. Unverändert bleiben Druck und Dichte.",
        "fr": "Le piston sans frottement se déplace jusqu'à ce que la pression intérieure égale la pression extérieure : la pression du gaz ne change pas (I). À pression et température constantes, le volume augmente proportionnellement au nombre de moles : le volume change (III). Dans d = P·MA/(R·T), P, MA et T ne changent pas, donc la masse volumique reste constante (II) ; masse et volume augmentent dans le même rapport. Les grandeurs inchangées sont la pression et la masse volumique.",
        "ru": "Поршень без трения перемещается, пока внутреннее давление не сравняется с внешним, поэтому давление газа не меняется (I). При постоянных давлении и температуре объём растёт пропорционально числу молей, то есть объём меняется (III). В формуле d = P·MA/(R·T) P, MA и T не меняются, поэтому плотность постоянна (II); масса и объём растут в одинаковое число раз. Не изменяются давление и плотность.",
        "ar": "يتحرك المكبس عديم الاحتكاك حتى يتساوى الضغط الداخلي مع الخارجي، لذا لا يتغير ضغط الغاز (I). وعند ثبات الضغط ودرجة الحرارة يزداد الحجم طرديًا مع عدد المولات، فالحجم يتغير (III). وفي العلاقة d = P·MA/(R·T) لا تتغير P وMA وT، لذا تبقى الكثافة ثابتة (II)، إذ تزداد الكتلة والحجم بالنسبة نفسها. الكميتان اللتان لا تتغيران هما الضغط والكثافة.",
        "zh": "无摩擦活塞会移动到内外压强相等为止，所以气体压强不变（I）。在压强和温度不变时，体积随物质的量成正比增大，所以体积改变（III）。在 d = P·MA/(R·T) 中，P、MA 和 T 都不变，所以密度不变（II）；质量和体积按相同比例增大。不变的量是压强和密度。",
        "ku": "Pistona bê sûrtin heta ku zexta hundir bi ya derve re wekhev bibe diçe, loma zexta gazê naguhere (I). Di zext û germahiya sabît de qebare bi hejmara molan re rasterast zêde dibe, loma qebare diguhere (III). Di d = P·MA/(R·T) de P, MA û T naguherin, loma çirbûn sabît dimîne (II); girse û qebare bi heman rêjeyê zêde dibin. Mîqdarên ku naguherin zext û çirbûn in."
      }
    },
    {
      "id": "u12-twin16",
      "stem": {
        "tr": "Aşağıdaki günlük hayat olaylarından hangisi Charles yasası ile açıklanır?",
        "en": "Which of the following everyday events is explained by Charles's law?",
        "de": "Welches der folgenden Alltagsphänomene wird durch das Gesetz von Charles erklärt?",
        "fr": "Lequel des phénomènes quotidiens suivants s'explique par la loi de Charles ?",
        "ru": "Какое из следующих повседневных явлений объясняется законом Шарля?",
        "ar": "أيّ الظواهر اليومية الآتية يُفسَّر بقانون شارل؟",
        "zh": "下列日常现象中，哪一个可以用查理定律解释？",
        "ku": "Kîjan ji van bûyerên jiyana rojane bi zagona Charles tê ravekirin?"
      },
      "options": [
        {
          "tr": "Ucu kapatılmış şırınganın pistonu itildiğinde içindeki havanın basıncının artması",
          "en": "The pressure of the air inside a syringe with a sealed tip rising when the plunger is pushed",
          "de": "Der Druck der Luft in einer verschlossenen Spritze steigt, wenn der Kolben hineingedrückt wird",
          "fr": "La pression de l'air dans une seringue bouchée augmente quand on enfonce le piston",
          "ru": "Рост давления воздуха в шприце с закрытым носиком при нажатии на поршень",
          "ar": "ازدياد ضغط الهواء داخل محقنة مسدودة الطرف عند دفع مكبسها",
          "zh": "堵住针头的注射器，推动活塞时其中空气的压强增大",
          "ku": "Dema pistona şiringeyeke serê wê girtî tê pêldan, zexta hewaya hundir zêde dibe"
        },
        {
          "tr": "Sıcak odada şişirilen balonun soğuk balkona çıkarıldığında büzülmesi",
          "en": "A balloon inflated in a warm room shrinking when taken out onto a cold balcony",
          "de": "Ein im warmen Zimmer aufgeblasener Ballon schrumpft, wenn man ihn auf den kalten Balkon bringt",
          "fr": "Un ballon gonflé dans une pièce chaude rétrécit quand on le sort sur un balcon froid",
          "ru": "Шарик, надутый в тёплой комнате, сжимается, когда его выносят на холодный балкон",
          "ar": "انكماش بالون نُفخ في غرفة دافئة عند إخراجه إلى شرفة باردة",
          "zh": "在温暖房间里吹起的气球拿到寒冷的阳台上会收缩",
          "ku": "Balona ku di odeyeke germ de hatiye pifkirin dema derdikeve balkona sar diçile (piçûk dibe)"
        },
        {
          "tr": "Uzun yolculuktan sonra ısınan otomobil lastiklerinin basıncının artması",
          "en": "The pressure of car tyres rising as they warm up after a long drive",
          "de": "Der Reifendruck eines Autos steigt, wenn sich die Reifen nach einer langen Fahrt erwärmen",
          "fr": "La pression des pneus d'une voiture augmente quand ils s'échauffent après un long trajet",
          "ru": "Рост давления в автомобильных шинах, нагревшихся после долгой поездки",
          "ar": "ازدياد ضغط إطارات السيارة عندما تسخن بعد رحلة طويلة",
          "zh": "长途行驶后轮胎变热，胎压升高",
          "ku": "Piştî rêwîtiyeke dirêj, dema lastîkên otomobîlê germ dibin zexta wan zêde dibe"
        },
        {
          "tr": "Balona hava üflendikçe balonun büyümesi",
          "en": "A balloon getting bigger as more air is blown into it",
          "de": "Ein Ballon wird größer, je mehr Luft hineingeblasen wird",
          "fr": "Un ballon grossit à mesure qu'on y souffle de l'air",
          "ru": "Шарик увеличивается по мере того, как в него вдувают воздух",
          "ar": "كِبَر البالون كلما نُفخ فيه مزيد من الهواء",
          "zh": "向气球里吹气，气球越吹越大",
          "ku": "Her ku hewa li balonê tê pifkirin balon mezin dibe"
        },
        {
          "tr": "Dalgıcın çıkardığı hava kabarcıklarının yüzeye yükseldikçe büyümesi",
          "en": "Air bubbles released by a diver growing larger as they rise to the surface",
          "de": "Von einem Taucher ausgestoßene Luftblasen werden beim Aufsteigen zur Oberfläche größer",
          "fr": "Les bulles d'air rejetées par un plongeur grossissent en remontant vers la surface",
          "ru": "Пузырьки воздуха, выпущенные водолазом, увеличиваются при подъёме к поверхности",
          "ar": "كِبَر فقاعات الهواء التي يطلقها الغوّاص كلما صعدت نحو السطح",
          "zh": "潜水员呼出的气泡在上升到水面的过程中逐渐变大",
          "ku": "Bilbilên hewayê yên ku dalgiç derdixe her ku ber bi rûyê avê ve hildikişin mezin dibin"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Esnek balonun iç basıncı dış basınca eşit kalır; soğuk ortamda mutlak sıcaklık düştüğü için hacim de azalır. Bu, sabit basınçta hacim ile mutlak sıcaklığın doğru orantısıdır (Charles). Ucu kapalı şırınganın sıkıştırılması ve yükselen kabarcıkların büyümesi sıcaklık yaklaşık sabitken basınç–hacim ilişkisine (Boyle), ısınan lastiğin basıncının artması yaklaşık sabit hacimde basınç–sıcaklık ilişkisine (Gay-Lussac), balonun üfledikçe büyümesi ise mol sayısı–hacim ilişkisine (Avogadro) örnektir.",
        "en": "An elastic balloon keeps its inside pressure equal to the outside pressure; in the cold the absolute temperature falls, so the volume decreases too. This is the direct proportion between volume and absolute temperature at constant pressure (Charles). Compressing a sealed syringe and bubbles growing as they rise are examples of the pressure–volume relation at roughly constant temperature (Boyle), the warm tyre's pressure rise is the pressure–temperature relation at roughly constant volume (Gay-Lussac), and the balloon growing as air is blown in is the moles–volume relation (Avogadro).",
        "de": "Ein elastischer Ballon hält seinen Innendruck gleich dem Außendruck; in der Kälte sinkt die absolute Temperatur und damit auch das Volumen. Das ist die direkte Proportionalität von Volumen und absoluter Temperatur bei konstantem Druck (Charles). Das Zusammendrücken der verschlossenen Spritze und das Wachsen aufsteigender Blasen sind Beispiele für die Druck-Volumen-Beziehung bei etwa konstanter Temperatur (Boyle), der steigende Reifendruck für die Druck-Temperatur-Beziehung bei etwa konstantem Volumen (Gay-Lussac) und das Aufblasen des Ballons für die Stoffmenge-Volumen-Beziehung (Avogadro).",
        "fr": "Un ballon élastique garde une pression intérieure égale à la pression extérieure ; au froid, la température absolue baisse et le volume diminue aussi. C'est la proportionnalité entre volume et température absolue à pression constante (Charles). La compression de la seringue bouchée et le grossissement des bulles qui remontent illustrent la relation pression–volume à température à peu près constante (Boyle), la hausse de pression du pneu chaud la relation pression–température à volume à peu près constant (Gay-Lussac), et le ballon qu'on gonfle la relation quantité de matière–volume (Avogadro).",
        "ru": "У эластичного шарика внутреннее давление остаётся равным внешнему; на холоде абсолютная температура падает, и объём тоже уменьшается. Это прямая пропорциональность объёма и абсолютной температуры при постоянном давлении (Шарль). Сжатие закрытого шприца и рост поднимающихся пузырьков — примеры связи давления и объёма при почти постоянной температуре (Бойль), рост давления в нагретой шине — связи давления и температуры при почти постоянном объёме (Гей-Люссак), а увеличение надуваемого шарика — связи числа молей и объёма (Авогадро).",
        "ar": "يبقى الضغط داخل البالون المرن مساويًا للضغط الخارجي؛ وفي البرد تنخفض درجة الحرارة المطلقة فينقص الحجم أيضًا، وهذا هو التناسب الطردي بين الحجم ودرجة الحرارة المطلقة عند ثبات الضغط (شارل). أما ضغط المحقنة المسدودة وكِبَر الفقاعات الصاعدة فمثالان على علاقة الضغط بالحجم عند ثبات الحرارة تقريبًا (بويل)، وازدياد ضغط الإطار الساخن مثال على علاقة الضغط بالحرارة عند ثبات الحجم تقريبًا (غاي-لوساك)، وكِبَر البالون بالنفخ مثال على علاقة عدد المولات بالحجم (أفوجادرو).",
        "zh": "弹性气球的内部压强始终等于外部压强；在寒冷处热力学温度降低，体积也随之减小，这是恒压下体积与热力学温度成正比的关系（查理定律）。压缩堵住的注射器、气泡上升时变大，是温度近似不变时压强与体积的关系（波义耳定律）；轮胎变热后胎压升高，是体积近似不变时压强与温度的关系（盖-吕萨克定律）；气球越吹越大，是物质的量与体积的关系（阿伏加德罗定律）。",
        "ku": "Zexta hundirê balona nerm bi zexta derve re wekhev dimîne; di sermayê de germahiya mutleq dadikeve û qebare jî kêm dibe. Ev rêjeya rasterast a qebare û germahiya mutleq di zexta sabît de ye (Charles). Pêçandina şiringeya girtî û mezinbûna bilbilên ku hildikişin mînakên têkiliya zext–qebare di germahiya nêzîkî sabît de ne (Boyle), zêdebûna zexta lastîka germ têkiliya zext–germahî di qebareya nêzîkî sabît de ye (Gay-Lussac), mezinbûna balonê bi pifkirinê jî têkiliya hejmara molan–qebare ye (Avogadro)."
      }
    }
  ]
};

export default unit12;
