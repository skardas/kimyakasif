import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit13: ChemistryUnitSeedData = {
  "id": "u13",
  "order": 13,
  "exam": "AYT",
  "grade": 11,
  "title": {
    "tr": "Gazlar: Kinetik Teori ve Gerçek Gazlar",
    "en": "Gases: Kinetic Theory & Real Gases",
    "de": "Kinetische Gastheorie",
    "fr": "Théorie Cinétique des Gaz",
    "ru": "Газы: молекулярно-кинетическая теория и реальные газы",
    "ar": "الغازات: النظرية الحركية والغازات الحقيقية",
    "zh": "气体动理论与真实气体",
    "ku": "Teoriya Kînetîk a Gazan"
  },
  "subtitle": {
    "tr": "Graham Difüzyon, Kısmi Basınç ve Joule-Thomson",
    "en": "Diffusion, Partial Pressure & Non-Ideal",
    "de": "Graham-Diffusion, Partialdruck und Joule-Thomson",
    "fr": "Diffusion Graham, pression partielle et Joule-Thomson",
    "ru": "Закон Грэма, парциальные давления и эффект Джоуля — Томсона",
    "ar": "قانون جراهام للانتشار والضغط الجزئي وظاهرة جول-طومسون",
    "zh": "格雷厄姆扩散定律、分压与焦耳-汤姆孙效应",
    "ku": "Graham Diffusion, Zexta Parçeyî û Joule-Thomson"
  },
  "facts": [
    {
      "id": "u13-f01",
      "fact": {
        "tr": "Graham Difüzyon Yasası: Aynı sıcaklıkta gazların difüzyon hızı mol kütlesinin kareköküyle ters orantılıdır (v1/v2 = sqrt(M2/M1)).",
        "en": "Graham's Law of Diffusion: At the same temperature, the diffusion rate of gases is inversely proportional to the square root of the molar mass (v1/v2 = sqrt(M2/M1)).",
        "de": "Grahams Diffusionsgesetz: Bei gleicher Temperatur ist die Diffusionsgeschwindigkeit von Gasen umgekehrt proportional zur Quadratwurzel der Molmasse (v1/v2 = sqrt(M2/M1)).",
        "fr": "Loi de diffusion de Graham : à la même température, la vitesse de diffusion des gaz est inversement proportionnelle à la racine carrée de la masse molaire (v1/v2 = sqrt(M2/M1)).",
        "ru": "Закон диффузии Грэма: при одинаковой температуре скорость диффузии газов обратно пропорциональна квадратному корню из молярной массы (v1/v2 = sqrt(M2/M1)).",
        "ar": "قانون جراهام للانتشار: عند درجة الحرارة نفسها يتناسب معدل انتشار الغازات عكسيًا مع الجذر التربيعي للكتلة المولية (v1/v2 = sqrt(M2/M1)).",
        "zh": "格雷厄姆扩散定律：在相同温度下，气体的扩散速率与摩尔质量的平方根成反比(v1/v2 = sqrt(M2/M1))。",
        "ku": "Zagona Belavbûnê ya Graham: Di heman germahiyê de leza belavbûna gazan bi koka çargoşe ya girseya molar re berevajî têkildar e (v1/v2 = sqrt(M2/M1))."
      },
      "trap": {
        "tr": "Aynı sıcaklıkta mol kütlesi büyük olan gaz daha hızlı difüzlenir.",
        "en": "At the same temperature, the gas with the larger molar mass diffuses faster.",
        "de": "Bei gleicher Temperatur diffundiert das Gas mit der größeren Molmasse schneller.",
        "fr": "À la même température, le gaz de plus grande masse molaire diffuse plus vite.",
        "ru": "При одинаковой температуре газ с большей молярной массой диффундирует быстрее.",
        "ar": "عند درجة الحرارة نفسها ينتشر الغاز ذو الكتلة المولية الأكبر بسرعة أكبر.",
        "zh": "在相同温度下，摩尔质量较大的气体扩散得更快。",
        "ku": "Di heman germahiyê de gaza ku girseya wê ya molar mezintir e zûtir belav dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak, ağır gazın daha hızlı yayıldığını varsayıyor. Aynı sıcaklıkta tüm gazların ortalama kinetik enerjisi eşit olduğundan kütlesi büyük taneciklerin hızı daha küçüktür; bu yüzden ağır gaz daha yavaş difüzlenir.",
        "en": "The trap assumes that a heavier gas spreads faster. At the same temperature all gases have the same average kinetic energy, so heavier particles move more slowly; the heavier gas therefore diffuses more slowly.",
        "de": "Die Falle nimmt an, dass ein schwereres Gas sich schneller ausbreitet. Bei gleicher Temperatur haben alle Gase dieselbe mittlere kinetische Energie, daher bewegen sich schwerere Teilchen langsamer; das schwerere Gas diffundiert also langsamer.",
        "fr": "Le piège suppose qu'un gaz plus lourd se répand plus vite. À même température, tous les gaz ont la même énergie cinétique moyenne, donc les particules plus lourdes se déplacent plus lentement ; le gaz le plus lourd diffuse donc plus lentement.",
        "ru": "Ловушка исходит из того, что тяжёлый газ распространяется быстрее. При одинаковой температуре средняя кинетическая энергия частиц всех газов одинакова, поэтому более тяжёлые частицы движутся медленнее и тяжёлый газ диффундирует медленнее.",
        "ar": "يفترض الفخ أن الغاز الأثقل ينتشر أسرع. عند درجة الحرارة نفسها تتساوى متوسطات الطاقة الحركية لجميع الغازات، لذا تتحرك الجسيمات الأثقل ببطء أكبر، فينتشر الغاز الأثقل أبطأ.",
        "zh": "陷阱以为较重的气体扩散更快。相同温度下所有气体的平均动能相等，所以质量较大的粒子运动较慢，较重的气体扩散反而更慢。",
        "ku": "Xefik dihesibîne ku gaza girantir zûtir belav dibe. Di heman germahiyê de enerjiya kînetîk a navîn a hemû gazan wekhev e, ji ber vê yekê perçeyên giran hêdîtir diçin û gaza giran hêdîtir belav dibe."
      }
    },
    {
      "id": "u13-f02",
      "fact": {
        "tr": "Gazların difüzyon hızı mutlak sıcaklığın kareköküyle doğru orantılıdır (v1/v2 = sqrt((T1*M2)/(T2*M1))).",
        "en": "The diffusion rate of gases is directly proportional to the square root of the absolute temperature (v1/v2 = sqrt((T1*M2)/(T2*M1))).",
        "de": "Die Diffusionsgeschwindigkeit von Gasen ist direkt proportional zur Quadratwurzel der absoluten Temperatur (v1/v2 = sqrt((T1*M2)/(T2*M1))).",
        "fr": "Le taux de diffusion des gaz est directement proportionnel à la racine carrée de la température absolue (v1/v2 = sqrt((T1*M2)/(T2*M1))).",
        "ru": "Скорость диффузии газа прямо пропорциональна квадратному корню из абсолютной температуры (v1/v2 = sqrt((T1*M2)/(T2*M1))).",
        "ar": "يتناسب معدل انتشار الغازات طرديًا مع الجذر التربيعي لدرجة الحرارة المطلقة (v1/v2 = sqrt((T1*M2)/(T2*M1))).",
        "zh": "气体的扩散速率与热力学温度的平方根成正比(v1/v2 = sqrt((T1*M2)/(T2*M1)))。",
        "ku": "Rêjeya belavbûna gazan rasterast bi koka çargoşe ya germahiya mutleq re têkildar e (v1/v2 = sqrt((T1*M2)/(T2*M1)))."
      },
      "trap": {
        "tr": "Bir gazın mutlak sıcaklığı 4 katına çıkarılırsa difüzyon hızı da 4 katına çıkar.",
        "en": "If the absolute temperature of a gas is quadrupled, its diffusion rate also quadruples.",
        "de": "Wird die absolute Temperatur eines Gases vervierfacht, vervierfacht sich auch seine Diffusionsgeschwindigkeit.",
        "fr": "Si la température absolue d'un gaz est multipliée par 4, sa vitesse de diffusion est aussi multipliée par 4.",
        "ru": "Если абсолютную температуру газа увеличить в 4 раза, скорость его диффузии тоже увеличится в 4 раза.",
        "ar": "إذا زيدت درجة الحرارة المطلقة لغاز إلى 4 أمثالها، يزداد معدل انتشاره أيضًا إلى 4 أمثاله.",
        "zh": "若气体的热力学温度增大到原来的4倍，其扩散速率也增大到原来的4倍。",
        "ku": "Ger germahiya mutleq a gazekê 4 qat bibe, leza belavbûna wê jî 4 qat dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak, hızın sıcaklıkla doğru orantılı olduğunu sanıyor. Hız mutlak sıcaklığın kareköküyle orantılıdır; mutlak sıcaklık 4 katına çıkınca hız sqrt(4) = 2 katına çıkar.",
        "en": "The trap treats the rate as directly proportional to temperature. The rate is proportional to the square root of the absolute temperature; when the absolute temperature is quadrupled, the rate increases sqrt(4) = 2 times.",
        "de": "Die Falle hält die Geschwindigkeit für direkt proportional zur Temperatur. Sie ist proportional zur Quadratwurzel der absoluten Temperatur; bei vierfacher absoluter Temperatur steigt sie nur auf das sqrt(4) = 2-Fache.",
        "fr": "Le piège considère la vitesse comme proportionnelle à la température. Elle est proportionnelle à la racine carrée de la température absolue ; si celle-ci est multipliée par 4, la vitesse n'est multipliée que par sqrt(4) = 2.",
        "ru": "Ловушка считает скорость прямо пропорциональной температуре. На самом деле скорость пропорциональна квадратному корню из абсолютной температуры: при увеличении абсолютной температуры в 4 раза скорость растёт в sqrt(4) = 2 раза.",
        "ar": "يعدّ الفخ السرعة متناسبة طرديًا مع درجة الحرارة. السرعة تتناسب مع الجذر التربيعي لدرجة الحرارة المطلقة؛ فإذا زادت درجة الحرارة المطلقة إلى 4 أمثالها تزداد السرعة إلى sqrt(4) = 2 مثلَي قيمتها فقط.",
        "zh": "陷阱把速率当作与温度成正比。速率与热力学温度的平方根成正比；热力学温度变为4倍时，速率只变为 sqrt(4) = 2 倍。",
        "ku": "Xefik leza belavbûnê rasterast bi germahiyê re têkildar dihesibîne. Lez bi koka çargoşe ya germahiya mutleq re têkildar e; dema germahiya mutleq 4 qat dibe, lez tenê sqrt(4) = 2 qat dibe."
      },
      "osymTip": {
        "tr": "Karekök ilişkisi vardır; hız 2 katına çıkar!",
        "en": "There is a square root relationship; speed doubles!",
        "de": "Es besteht eine Quadratwurzelbeziehung; Geschwindigkeit verdoppelt sich!",
        "fr": "Il existe une relation racine carrée ; la vitesse double !",
        "ru": "Зависимость здесь через квадратный корень: скорость возрастает только в 2 раза!",
        "ar": "العلاقة علاقة جذر تربيعي؛ فالسرعة تتضاعف فقط!",
        "zh": "是平方根关系：速率只变为原来的2倍！",
        "ku": "Têkiliya koka çargoşe heye; leza duqat dibe!"
      }
    },
    {
      "id": "u13-f03",
      "fact": {
        "tr": "Dalton Kısmi Basınçlar Yasası: Karışımdaki bir gazın kısmi basıncı Pi = Xi * Ptoplam'dır (Xi = ni / ntoplam).",
        "en": "Dalton's Law of Partial Pressures: The partial pressure of a gas in a mixture is Pi = Xi * Ptotal (Xi = ni / ntotal).",
        "de": "Daltons Partialdruckgesetz: Der Partialdruck eines Gases in einer Mischung ist Pi = Xi * Ptotal (Xi = ni / ntotal).",
        "fr": "Loi de Dalton sur les pressions partielles : La pression partielle d'un gaz dans un mélange est Pi = Xi * Ptotal (Xi = ni / ntotal).",
        "ru": "Закон парциальных давлений Дальтона: парциальное давление газа в смеси Pi = Xi * Pобщ (Xi = ni / nобщ).",
        "ar": "قانون دالتون للضغوط الجزئية: الضغط الجزئي للغاز في الخليط هو Pi = Xi * Ptotal (Xi = ni / ntotal).",
        "zh": "道尔顿分压定律：混合气体中某一气体的分压 Pi = Xi * P总(Xi = ni / n总)。",
        "ku": "Zagona Zextên Parçeyî ya Dalton: Zexta qismî ya gazekê di tevlîheviyê de Pi = Xi * Ptotal e (Xi = ni / ntotal)."
      },
      "trap": {
        "tr": "Kısmi basınç mol kesrinden bağımsızdır.",
        "en": "The partial pressure is independent of the mole fraction.",
        "de": "Der Partialdruck ist unabhängig vom Stoffmengenanteil.",
        "fr": "La pression partielle est indépendante de la fraction molaire.",
        "ru": "Парциальное давление не зависит от мольной доли.",
        "ar": "الضغط الجزئي مستقل عن الكسر المولي.",
        "zh": "分压与物质的量分数无关。",
        "ku": "Zexta qismî ji beşa molê serbixwe ye."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak, kısmi basıncın gazın miktarıyla ilgisi olmadığını sanıyor. Aynı kapta ve sıcaklıkta basınç tanecik sayısıyla orantılı olduğundan bir gazın kısmi basıncı mol kesriyle doğru orantılıdır: Pi = Xi * Ptoplam.",
        "en": "The trap assumes partial pressure has nothing to do with the amount of the gas. In the same container at the same temperature pressure is proportional to the number of particles, so a gas's partial pressure is directly proportional to its mole fraction: Pi = Xi * Ptotal.",
        "de": "Die Falle nimmt an, dass der Partialdruck nichts mit der Gasmenge zu tun hat. Im selben Behälter bei gleicher Temperatur ist der Druck proportional zur Teilchenzahl, daher ist der Partialdruck proportional zum Stoffmengenanteil: Pi = Xi * Pgesamt.",
        "fr": "Le piège suppose que la pression partielle ne dépend pas de la quantité de gaz. Dans le même récipient et à même température, la pression est proportionnelle au nombre de particules, donc la pression partielle est proportionnelle à la fraction molaire : Pi = Xi * Ptotale.",
        "ru": "Ловушка считает, что парциальное давление не связано с количеством газа. В одном сосуде при одной температуре давление пропорционально числу частиц, поэтому парциальное давление газа прямо пропорционально его мольной доле: Pi = Xi * Pобщ.",
        "ar": "يفترض الفخ أن الضغط الجزئي لا علاقة له بكمية الغاز. في الوعاء نفسه وعند درجة الحرارة نفسها يتناسب الضغط مع عدد الجسيمات، لذا يتناسب الضغط الجزئي للغاز طرديًا مع كسره المولي: Pi = Xi * Ptotal.",
        "zh": "陷阱以为分压与气体的量无关。在同一容器、同一温度下，压强与粒子数成正比，所以某气体的分压与其物质的量分数成正比：Pi = Xi * P总。",
        "ku": "Xefik dihesibîne ku zexta qismî bi mîqdara gazê ve ne girêdayî ye. Di heman firaxê û germahiyê de zext bi hejmara perçeyan re têkildar e, ji ber vê yekê zexta qismî ya gazekê rasterast bi kesra molê re têkildar e: Pi = Xi * Ptevahî."
      }
    },
    {
      "id": "u13-f04",
      "fact": {
        "tr": "Gazların ortalama kinetik enerjisi yalnızca mutlak sıcaklığa bağlıdır ve mutlak sıcaklıkla doğru orantılıdır; aynı sıcaklıkta gazın türünden bağımsızdır.",
        "en": "The average kinetic energy of gas particles depends only on absolute temperature and is directly proportional to it; at the same temperature it does not depend on the kind of gas.",
        "de": "Die mittlere kinetische Energie von Gasteilchen hängt nur von der absoluten Temperatur ab und ist ihr direkt proportional; bei gleicher Temperatur ist sie von der Gasart unabhängig.",
        "fr": "L'énergie cinétique moyenne des particules d'un gaz ne dépend que de la température absolue et lui est proportionnelle ; à même température, elle ne dépend pas de la nature du gaz.",
        "ru": "Средняя кинетическая энергия частиц газа зависит только от абсолютной температуры и прямо пропорциональна ей; при одинаковой температуре она не зависит от природы газа.",
        "ar": "يعتمد متوسط الطاقة الحركية لجسيمات الغاز على درجة الحرارة المطلقة فقط ويتناسب معها طرديًا؛ وعند درجة الحرارة نفسها لا يعتمد على نوع الغاز.",
        "zh": "气体粒子的平均动能只取决于热力学温度，并与热力学温度成正比；相同温度下与气体种类无关。",
        "ku": "Enerjiya kînetîk a navîn a perçeyên gazê tenê bi germahiya mutleq ve girêdayî ye û rasterast bi wê re têkildar e; di heman germahiyê de bi cureyê gazê ve ne girêdayî ye."
      },
      "trap": {
        "tr": "Aynı sıcaklıktaki CO2 moleküllerinin ortalama kinetik enerjisi H2 moleküllerininkinden büyüktür.",
        "en": "At the same temperature, the average kinetic energy of CO2 molecules is greater than that of H2 molecules.",
        "de": "Bei gleicher Temperatur ist die mittlere kinetische Energie von CO2-Molekülen größer als die von H2-Molekülen.",
        "fr": "À la même température, l'énergie cinétique moyenne des molécules de CO2 est supérieure à celle des molécules de H2.",
        "ru": "При одинаковой температуре средняя кинетическая энергия молекул CO2 больше, чем у молекул H2.",
        "ar": "عند درجة الحرارة نفسها، يكون متوسط الطاقة الحركية لجزيئات CO2 أكبر من متوسط الطاقة الحركية لجزيئات H2.",
        "zh": "相同温度下，CO2分子的平均动能大于H2分子的平均动能。",
        "ku": "Di heman germahiyê de, enerjiya kînetîk a navîn a molekulên CO2 ji ya molekulên H2 mezintir e."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak, ağır moleküllerin daha fazla kinetik enerjiye sahip olduğunu düşünüyor. Ortalama kinetik enerji yalnızca mutlak sıcaklığa bağlıdır; aynı sıcaklıkta CO2 ile H2'nin ortalama kinetik enerjileri eşittir, ağır olan CO2 yalnızca daha yavaş hareket eder.",
        "en": "The trap thinks heavier molecules carry more kinetic energy. Average kinetic energy depends only on absolute temperature; at the same temperature CO2 and H2 have equal average kinetic energies, the heavier CO2 simply moves more slowly.",
        "de": "Die Falle meint, schwerere Moleküle hätten mehr kinetische Energie. Die mittlere kinetische Energie hängt nur von der absoluten Temperatur ab; bei gleicher Temperatur haben CO2 und H2 dieselbe mittlere kinetische Energie, das schwerere CO2 bewegt sich nur langsamer.",
        "fr": "Le piège croit que les molécules plus lourdes ont plus d'énergie cinétique. L'énergie cinétique moyenne ne dépend que de la température absolue ; à même température, CO2 et H2 ont la même énergie cinétique moyenne, le CO2 plus lourd se déplace simplement plus lentement.",
        "ru": "Ловушка полагает, что более тяжёлые молекулы обладают большей кинетической энергией. Средняя кинетическая энергия зависит только от абсолютной температуры; при одной температуре у CO2 и H2 она одинакова, более тяжёлый CO2 просто движется медленнее.",
        "ar": "يظن الفخ أن الجزيئات الأثقل تملك طاقة حركية أكبر. متوسط الطاقة الحركية يعتمد على درجة الحرارة المطلقة فقط؛ عند درجة الحرارة نفسها يتساوى متوسط الطاقة الحركية لـ CO2 وH2، وكل ما في الأمر أن CO2 الأثقل يتحرك أبطأ.",
        "zh": "陷阱以为较重的分子动能更大。平均动能只取决于热力学温度；相同温度下 CO2 与 H2 的平均动能相等，较重的 CO2 只是运动得更慢。",
        "ku": "Xefik difikire ku molekulên giran enerjiya kînetîk a zêdetir hene. Enerjiya kînetîk a navîn tenê bi germahiya mutleq ve girêdayî ye; di heman germahiyê de ya CO2 û H2 wekhev e, CO2 ya giran tenê hêdîtir diçe."
      },
      "osymTip": {
        "tr": "Aynı sıcaklıktaki tüm gazların ortalama kinetik enerjisi eşittir!",
        "en": "The average kinetic energy of all gases at the same temperature is equal!",
        "de": "Die durchschnittliche kinetische Energie aller Gase bei gleicher Temperatur ist gleich!",
        "fr": "L'énergie cinétique moyenne de tous les gaz à la même température est égale !",
        "ru": "Средняя кинетическая энергия всех газов при одинаковой температуре одинакова!",
        "ar": "متوسط الطاقة الحركية لجميع الغازات عند درجة الحرارة نفسها متساوٍ!",
        "zh": "相同温度下所有气体的平均动能相等！",
        "ku": "Enerjiya kînetîk a navînî ya hemî gazên di heman germahiyê de wekhev e!"
      }
    },
    {
      "id": "u13-f05",
      "fact": {
        "tr": "Yüksek sıcaklık, düşük basınç ve zayıf moleküller arası çekim (küçük, apolar tanecikler) gazları ideal davranışa yaklaştırır.",
        "en": "High temperature, low pressure and weak intermolecular attraction (small, nonpolar particles) bring gases closer to ideal behavior.",
        "de": "Hohe Temperatur, niedriger Druck und schwache zwischenmolekulare Anziehung (kleine, unpolare Teilchen) bringen Gase dem idealen Verhalten näher.",
        "fr": "Une température élevée, une basse pression et une faible attraction intermoléculaire (particules petites et apolaires) rapprochent les gaz du comportement parfait.",
        "ru": "Высокая температура, низкое давление и слабое межмолекулярное притяжение (небольшие неполярные частицы) приближают газы к идеальному поведению.",
        "ar": "درجة الحرارة المرتفعة والضغط المنخفض وضعف التجاذب بين الجزيئات (جسيمات صغيرة غير قطبية) تقرّب الغازات من السلوك المثالي.",
        "zh": "高温、低压以及较弱的分子间引力（粒子小、非极性）使气体更接近理想气体行为。",
        "ku": "Germahiya bilind, zexta nizm û kişandina navmolekulî ya qels (perçeyên biçûk û ne-polar) gazan nêzîkî tevgera îdeal dikin."
      },
      "trap": {
        "tr": "Yüksek basınç ve düşük sıcaklıkta gazlar ideale en yakındır.",
        "en": "Gases at high pressure and low temperature are closest to ideal.",
        "de": "Gase mit hohem Druck und niedriger Temperatur kommen dem Ideal am nächsten.",
        "fr": "Les gaz à haute pression et basse température sont les plus proches de l’idéal.",
        "ru": "Наиболее близки к идеальным газы при высоком давлении и низкой температуре.",
        "ar": "تكون الغازات أقرب ما تكون إلى السلوك المثالي عند الضغط المرتفع ودرجة الحرارة المنخفضة.",
        "zh": "气体在高压、低温下最接近理想气体。",
        "ku": "Gazên di tansiyona bilind û germahiya nizm de herî nêzîk îdeal in."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak koşulları tersine çeviriyor. Yüksek basınçta tanecikler birbirine yaklaştığı için öz hacim ve çekim önem kazanır, düşük sıcaklıkta da çekim kuvvetleri baskın gelir; bu koşullar gazı idealden en çok uzaklaştırır.",
        "en": "The trap reverses the conditions. At high pressure the particles are close together, so their own volume and attractions matter, and at low temperature attractive forces dominate; these conditions move a gas furthest from ideal behavior.",
        "de": "Die Falle kehrt die Bedingungen um. Bei hohem Druck liegen die Teilchen dicht beieinander, sodass Eigenvolumen und Anziehung wichtig werden, und bei tiefer Temperatur überwiegen die Anziehungskräfte; diese Bedingungen entfernen ein Gas am stärksten vom idealen Verhalten.",
        "fr": "Le piège inverse les conditions. À haute pression, les particules sont proches, leur volume propre et leurs attractions comptent, et à basse température les forces d'attraction dominent ; ces conditions éloignent le plus un gaz du comportement parfait.",
        "ru": "Ловушка меняет условия на противоположные. При высоком давлении частицы сближаются, и их собственный объём и притяжение становятся существенными, а при низкой температуре преобладают силы притяжения; именно эти условия сильнее всего отдаляют газ от идеального поведения.",
        "ar": "يعكس الفخ الظروف. عند الضغط المرتفع تقترب الجسيمات بعضها من بعض فيصبح لحجمها الذاتي وللتجاذب أثر، وعند درجة الحرارة المنخفضة تسود قوى التجاذب؛ وهذه الظروف تُبعد الغاز عن السلوك المثالي أكثر ما يمكن.",
        "zh": "陷阱把条件说反了。高压下粒子彼此靠近，自身体积和引力变得重要；低温下分子间引力占主导。这些条件使气体偏离理想气体行为最严重。",
        "ku": "Xefik şertan berevajî dike. Di zexta bilind de perçe nêzî hev dibin, ji ber vê yekê qebareya wan a xwe û kişandin girîng dibin, û di germahiya nizm de hêzên kişandinê serdest in; ev şert gazê herî zêde ji tevgera îdeal dûr dixin."
      }
    },
    {
      "id": "u13-f06",
      "fact": {
        "tr": "Gerçek gaz molekülleri arasında çekim kuvveti vardır ve öz hacimleri sıfır değildir.",
        "en": "Real gas molecules attract each other, and their own volumes are not zero.",
        "de": "Zwischen den Molekülen realer Gase wirken Anziehungskräfte, und ihr Eigenvolumen ist nicht null.",
        "fr": "Les molécules d'un gaz réel s'attirent mutuellement et leur volume propre n'est pas nul.",
        "ru": "Между молекулами реального газа действуют силы притяжения, и их собственный объём не равен нулю.",
        "ar": "توجد قوى تجاذب بين جزيئات الغاز الحقيقي، وحجمها الذاتي لا يساوي صفرًا.",
        "zh": "真实气体分子之间存在引力，且分子自身体积不为零。",
        "ku": "Di navbera molekulên gaza rastîn de hêza kişandinê heye û qebareya wan a xwe ne sifir e."
      },
      "trap": {
        "tr": "İdeal gazların molekülleri arasında güçlü elektrostatik çekim vardır.",
        "en": "There is a strong electrostatic attraction between the molecules of ideal gases.",
        "de": "Zwischen den Molekülen idealer Gase besteht eine starke elektrostatische Anziehung.",
        "fr": "Il existe une forte attraction électrostatique entre les molécules des gaz parfaits.",
        "ru": "Между молекулами идеальных газов существует сильное электростатическое притяжение.",
        "ar": "هناك تجاذب إلكتروستاتيكي قوي بين جزيئات الغازات المثالية.",
        "zh": "理想气体分子之间存在很强的静电引力。",
        "ku": "Di navbera molekulên gazên îdeal de kêşeyeke elektrostatîk a xurt heye."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak, ideal gaz ile gerçek gazı karıştırıyor. İdeal gaz modelinde tanecikler arasında hiçbir çekim olmadığı varsayılır; çekim kuvveti gerçek gazların özelliğidir.",
        "en": "The trap confuses an ideal gas with a real gas. The ideal gas model assumes there is no attraction at all between particles; attractive forces are a property of real gases.",
        "de": "Die Falle verwechselt ideales und reales Gas. Im Modell des idealen Gases gibt es überhaupt keine Anziehung zwischen den Teilchen; Anziehungskräfte sind eine Eigenschaft realer Gase.",
        "fr": "Le piège confond gaz parfait et gaz réel. Le modèle du gaz parfait suppose qu'il n'y a aucune attraction entre les particules ; les forces d'attraction sont une propriété des gaz réels.",
        "ru": "Ловушка путает идеальный газ с реальным. В модели идеального газа притяжение между частицами полностью отсутствует; силы притяжения — свойство реальных газов.",
        "ar": "يخلط الفخ بين الغاز المثالي والغاز الحقيقي. يفترض نموذج الغاز المثالي عدم وجود أي تجاذب بين الجسيمات؛ أما قوى التجاذب فهي من خصائص الغازات الحقيقية.",
        "zh": "陷阱混淆了理想气体和真实气体。理想气体模型假定粒子之间完全没有引力；分子间引力是真实气体的特征。",
        "ku": "Xefik gaza îdeal û gaza rastîn tevlihev dike. Modela gaza îdeal dihesibîne ku di navbera perçeyan de qet kişandin tune; hêza kişandinê taybetiya gazên rastîn e."
      }
    },
    {
      "id": "u13-f07",
      "fact": {
        "tr": "Joule-Thomson olayı: Sıkıştırılmış gerçek gazların çoğu, oda koşullarında dar bir delikten düşük basınca genleşirken moleküller arası çekimi yenmek için enerji harcar ve soğur (buzdolabı ve klimaların çalışma ilkesi).",
        "en": "Joule-Thomson effect: at room conditions most compressed real gases, while expanding through a narrow opening to low pressure, spend energy to overcome intermolecular attraction and cool down (the working principle of refrigerators and air conditioners).",
        "de": "Joule-Thomson-Effekt: Bei Raumbedingungen verbrauchen die meisten komprimierten realen Gase beim Entspannen durch eine enge Öffnung auf niedrigen Druck Energie, um die zwischenmolekulare Anziehung zu überwinden, und kühlen ab (Funktionsprinzip von Kühlschränken und Klimaanlagen).",
        "fr": "Effet Joule-Thomson : dans les conditions ambiantes, la plupart des gaz réels comprimés qui se détendent à travers un orifice étroit vers une basse pression dépensent de l'énergie pour vaincre l'attraction intermoléculaire et se refroidissent (principe des réfrigérateurs et des climatiseurs).",
        "ru": "Эффект Джоуля — Томсона: в комнатных условиях большинство сжатых реальных газов при расширении через узкое отверстие в область низкого давления затрачивают энергию на преодоление межмолекулярного притяжения и охлаждаются (на этом основана работа холодильников и кондиционеров).",
        "ar": "ظاهرة جول-طومسون: في ظروف الغرفة تستهلك معظم الغازات الحقيقية المضغوطة، عند تمددها عبر فتحة ضيقة إلى ضغط منخفض، طاقةً للتغلب على التجاذب بين الجزيئات فتبرد (مبدأ عمل الثلاجات والمكيفات).",
        "zh": "焦耳-汤姆孙效应：在室温条件下，大多数被压缩的真实气体经狭窄小孔向低压膨胀时，要消耗能量克服分子间引力而降温（冰箱和空调的工作原理）。",
        "ku": "Bandora Joule-Thomson: Di şertên odeyê de piraniya gazên rastîn ên pêçayî, dema ji qulikeke teng ber bi zexta nizm berfireh dibin, ji bo derbaskirina kişandina navmolekulî enerjiyê xerc dikin û sar dibin (prensîba xebata sarinc û klîmayan)."
      },
      "trap": {
        "tr": "Oda koşullarında sıkıştırılmış gerçek gazların çoğu dar bir delikten genleştirildiğinde ısınır.",
        "en": "At room conditions most compressed real gases warm up when they are expanded through a narrow opening.",
        "de": "Bei Raumbedingungen erwärmen sich die meisten komprimierten realen Gase, wenn sie durch eine enge Öffnung entspannt werden.",
        "fr": "Dans les conditions ambiantes, la plupart des gaz réels comprimés s'échauffent lorsqu'on les détend à travers un orifice étroit.",
        "ru": "В комнатных условиях большинство сжатых реальных газов нагреваются при расширении через узкое отверстие.",
        "ar": "في ظروف الغرفة تسخن معظم الغازات الحقيقية المضغوطة عند تمددها عبر فتحة ضيقة.",
        "zh": "在室温条件下，大多数被压缩的真实气体经狭窄小孔膨胀时会升温。",
        "ku": "Di şertên odeyê de piraniya gazên rastîn ên pêçayî dema ji qulikeke teng têne berfirehkirin germ dibin."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak, genleşen gazın ısındığını sanıyor. Oda koşullarında çoğu gerçek gaz genleşirken moleküller arası çekimi yenmek için kendi kinetik enerjisinden harcar, tanecikler yavaşlar ve gaz soğur; buzdolabı ve klimalar bu soğumadan yararlanır.",
        "en": "The trap assumes the expanding gas warms up. At room conditions most real gases use part of their own kinetic energy to overcome intermolecular attraction while expanding, so the particles slow down and the gas cools; refrigerators and air conditioners use this cooling.",
        "de": "Die Falle nimmt an, dass sich das expandierende Gas erwärmt. Bei Raumbedingungen verbrauchen die meisten realen Gase beim Expandieren einen Teil ihrer kinetischen Energie, um die zwischenmolekulare Anziehung zu überwinden; die Teilchen werden langsamer und das Gas kühlt ab, was Kühlschränke und Klimaanlagen nutzen.",
        "fr": "Le piège suppose que le gaz qui se détend s'échauffe. Dans les conditions ambiantes, la plupart des gaz réels dépensent une partie de leur énergie cinétique pour vaincre l'attraction intermoléculaire pendant la détente ; les particules ralentissent et le gaz se refroidit, ce qu'exploitent réfrigérateurs et climatiseurs.",
        "ru": "Ловушка считает, что расширяющийся газ нагревается. В комнатных условиях большинство реальных газов при расширении тратят часть своей кинетической энергии на преодоление межмолекулярного притяжения, частицы замедляются и газ охлаждается; этим пользуются холодильники и кондиционеры.",
        "ar": "يفترض الفخ أن الغاز المتمدد يسخن. في ظروف الغرفة تستهلك معظم الغازات الحقيقية أثناء التمدد جزءًا من طاقتها الحركية للتغلب على التجاذب بين الجزيئات، فتتباطأ الجسيمات ويبرد الغاز؛ وتستفيد الثلاجات والمكيفات من هذا التبريد.",
        "zh": "陷阱以为膨胀的气体会升温。在室温条件下，大多数真实气体膨胀时要消耗自身部分动能来克服分子间引力，粒子变慢，气体变冷；冰箱和空调正是利用这种降温。",
        "ku": "Xefik dihesibîne ku gaza ku berfireh dibe germ dibe. Di şertên odeyê de piraniya gazên rastîn dema berfireh dibin beşek ji enerjiya xwe ya kînetîk ji bo derbaskirina kişandina navmolekulî xerc dikin, perçe hêdî dibin û gaz sar dibe; sarinc û klîma vê sarbûnê bi kar tînin."
      }
    },
    {
      "id": "u13-f08",
      "fact": {
        "tr": "Kritik sıcaklık: Bir gazın basınç uygulanarak sıvılaştırılabileceği en yüksek sıcaklıktır; üzerindeki sıcaklıkta gaz sıvılaştırılamaz.",
        "en": "Critical temperature: The highest temperature at which a gas can be liquefied by applying pressure; At temperatures above this, gas cannot be liquefied.",
        "de": "Kritische Temperatur: Die höchste Temperatur, bei der ein Gas durch Druckanwendung verflüssigt werden kann; Bei Temperaturen darüber kann Gas nicht verflüssigt werden.",
        "fr": "Température critique : température la plus élevée à laquelle un gaz peut être liquéfié en appliquant une pression ; À des températures supérieures, le gaz ne peut pas être liquéfié.",
        "ru": "Критическая температура — самая высокая температура, при которой газ можно сжижить повышением давления; выше этой температуры газ сжижить нельзя.",
        "ar": "درجة الحرارة الحرجة: أعلى درجة حرارة يمكن عندها تسييل الغاز بالضغط؛ وفوقها لا يمكن تسييل الغاز.",
        "zh": "临界温度：仅靠加压就能使气体液化的最高温度；温度高于临界温度时，气体不能液化。",
        "ku": "Germahiya krîtîk: Germahiya herî bilind a ku tê de gazek bi pêkanîna zextê dikare şil bibe; Di germahiyên ji vê zêdetir de, gaz nikare şil bibe."
      },
      "trap": {
        "tr": "Kritik sıcaklığın üzerindeki akışkanlar sadece basınçla kolayca sıvılaşır.",
        "en": "Fluids above the critical temperature liquefy easily with pressure alone.",
        "de": "Fluide oberhalb der kritischen Temperatur lassen sich allein durch Druck leicht verflüssigen.",
        "fr": "Les fluides au-dessus de la température critique se liquéfient facilement avec la seule pression.",
        "ru": "Выше критической температуры вещество легко сжижается одним лишь повышением давления.",
        "ar": "الموائع التي تكون فوق درجة حرارتها الحرجة تتسيّل بسهولة بالضغط وحده.",
        "zh": "高于临界温度的流体仅靠加压就很容易液化。",
        "ku": "Herikbarên li ser germahiya krîtîk tenê bi zextê bi hêsanî şil dibin."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak, yeterince yüksek basınçla her gazın sıvılaşacağını sanıyor. Kritik sıcaklığın üzerinde taneciklerin kinetik enerjisi çekim kuvvetlerini aşar; basınç ne kadar artırılırsa artırılsın sıvı faz oluşmaz.",
        "en": "The trap believes that any gas will liquefy under high enough pressure. Above the critical temperature the kinetic energy of the particles exceeds the attractive forces, so no liquid phase forms however much the pressure is raised.",
        "de": "Die Falle glaubt, jedes Gas lasse sich mit genügend hohem Druck verflüssigen. Oberhalb der kritischen Temperatur übersteigt die kinetische Energie der Teilchen die Anziehungskräfte; es bildet sich keine flüssige Phase, egal wie hoch der Druck ist.",
        "fr": "Le piège croit que tout gaz se liquéfie sous une pression suffisante. Au-dessus de la température critique, l'énergie cinétique des particules dépasse les forces d'attraction : aucune phase liquide ne se forme, quelle que soit la pression.",
        "ru": "Ловушка считает, что любой газ можно сжижить достаточно высоким давлением. Выше критической температуры кинетическая энергия частиц превосходит силы притяжения, и жидкая фаза не образуется ни при каком давлении.",
        "ar": "يظن الفخ أن أي غاز يتسيّل بضغط مرتفع بما يكفي. فوق درجة الحرارة الحرجة تتغلب الطاقة الحركية للجسيمات على قوى التجاذب، فلا يتكوّن طور سائل مهما زيد الضغط.",
        "zh": "陷阱以为只要压强足够大任何气体都能液化。高于临界温度时粒子的动能超过分子间引力，无论压强多大都不会出现液相。",
        "ku": "Xefik bawer dike ku her gaz bi zexteke têra xwe bilind şil dibe. Li ser germahiya krîtîk enerjiya kînetîk a perçeyan ji hêzên kişandinê mezintir e; zext çiqas were zêdekirin jî qonaxa şil çênabe."
      }
    },
    {
      "id": "u13-f09",
      "fact": {
        "tr": "Buhar, bir maddenin kritik sıcaklığının altındaki gaz hâlidir; sabit sıcaklıkta basınç artırılarak sıvılaştırılabilir.",
        "en": "Vapor is the gaseous state of a substance below its critical temperature; it can be liquefied by increasing the pressure at constant temperature.",
        "de": "Dampf ist der gasförmige Zustand eines Stoffes unterhalb seiner kritischen Temperatur; er kann bei konstanter Temperatur durch Druckerhöhung verflüssigt werden.",
        "fr": "La vapeur est l'état gazeux d'une substance en dessous de sa température critique ; elle peut être liquéfiée en augmentant la pression à température constante.",
        "ru": "Пар — газообразное состояние вещества ниже его критической температуры; при постоянной температуре пар можно сжижить, повышая давление.",
        "ar": "البخار هو الحالة الغازية للمادة عند درجة حرارة أقل من درجة حرارتها الحرجة؛ ويمكن تسييله بزيادة الضغط عند درجة حرارة ثابتة.",
        "zh": "蒸气是物质在其临界温度以下的气态；在温度不变时增大压强即可使其液化。",
        "ku": "Buhar rewşa gazî ya maddeyekê ye di bin germahiya wê ya krîtîk de; di germahiya sabît de bi zêdekirina zextê dikare were şilkirin."
      },
      "trap": {
        "tr": "Buhar ve gaz kavramları bilimsel olarak birebir aynıdır.",
        "en": "The concepts of vapor and gas are scientifically exactly the same.",
        "de": "Die Konzepte von Dampf und Gas sind wissenschaftlich genau gleich.",
        "fr": "Les concepts de vapeur et de gaz sont scientifiquement exactement les mêmes.",
        "ru": "С научной точки зрения понятия «пар» и «газ» полностью совпадают.",
        "ar": "مفهوما البخار والغاز متطابقان تمامًا من الناحية العلمية.",
        "zh": "蒸气和气体这两个概念在科学上完全相同。",
        "ku": "Têgehên buhar û gazê bi zanistî tam yek in."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak iki kavramı eş tutuyor. Buhar kritik sıcaklığın altındaki gaz hâlidir ve yalnızca basınçla sıvılaştırılabilir; kritik sıcaklığın üzerindeki gaz ise yalnızca basınçla sıvılaştırılamaz, bu yüzden iki kavram aynı değildir.",
        "en": "The trap treats the two terms as identical. A vapor is the gaseous state below the critical temperature and can be liquefied by pressure alone; a gas above its critical temperature cannot be liquefied by pressure alone, so the two terms are not the same.",
        "de": "Die Falle setzt beide Begriffe gleich. Dampf ist der gasförmige Zustand unterhalb der kritischen Temperatur und lässt sich allein durch Druck verflüssigen; ein Gas oberhalb der kritischen Temperatur nicht, daher sind die Begriffe nicht identisch.",
        "fr": "Le piège considère les deux termes comme identiques. Une vapeur est l'état gazeux en dessous de la température critique et se liquéfie par simple compression ; un gaz au-dessus de sa température critique ne le peut pas, les deux notions sont donc différentes.",
        "ru": "Ловушка отождествляет два понятия. Пар — газообразное состояние ниже критической температуры, его можно сжижить одним повышением давления; газ выше критической температуры одним давлением не сжижается, поэтому эти понятия не совпадают.",
        "ar": "يعدّ الفخ المفهومين متطابقين. البخار هو الحالة الغازية تحت درجة الحرارة الحرجة ويمكن تسييله بالضغط وحده؛ أما الغاز فوق درجة حرارته الحرجة فلا يتسيّل بالضغط وحده، لذا فالمفهومان مختلفان.",
        "zh": "陷阱把两个概念等同起来。蒸气是物质在临界温度以下的气态，仅靠加压即可液化；而临界温度以上的气体仅靠加压无法液化，所以两个概念并不相同。",
        "ku": "Xefik her du têgehan wekhev dihesibîne. Buhar rewşa gazî ya di bin germahiya krîtîk de ye û tenê bi zextê dikare şil bibe; gaza li ser germahiya krîtîk tenê bi zextê şil nabe, ji ber vê yekê her du têgeh ne yek in."
      }
    },
    {
      "id": "u13-f10",
      "fact": {
        "tr": "Su üstünde toplanan bir gazın bulunduğu kapta toplam basınç, gazın kısmi basıncı ile suyun buhar basıncının toplamıdır (Ptoplam = Pgaz + Psu_buharı).",
        "en": "In a container holding a gas collected over water, the total pressure is the sum of the partial pressure of the gas and the vapor pressure of water (Ptotal = Pgas + Pwater_vapor).",
        "de": "In einem Gefäß mit einem über Wasser aufgefangenen Gas ist der Gesamtdruck die Summe aus dem Partialdruck des Gases und dem Dampfdruck des Wassers (Pgesamt = PGas + PWasserdampf).",
        "fr": "Dans un récipient contenant un gaz recueilli sur l'eau, la pression totale est la somme de la pression partielle du gaz et de la pression de vapeur de l'eau (Ptotale = Pgaz + Pvapeur_eau).",
        "ru": "Если газ собран над водой, общее давление в сосуде равно сумме парциального давления газа и давления водяного пара (Pобщ = Pгаза + Pпара_воды).",
        "ar": "في وعاء يحتوي غازًا جُمع فوق الماء، الضغط الكلي يساوي مجموع الضغط الجزئي للغاز وضغط بخار الماء (Ptotal = Pgas + Pwater_vapor).",
        "zh": "用排水法收集气体时，容器内的总压强等于该气体的分压与水的蒸气压之和(P总 = P气体 + P水蒸气)。",
        "ku": "Di firaxa ku gazeke li ser avê hatiye berhevkirin tê de ye, zexta giştî bi qasî koma zexta qismî ya gazê û zexta buhara avê ye (Ptotal = Pgas + Pwater_vapor)."
      },
      "trap": {
        "tr": "Su üstünde toplanan bir gazın kısmi basıncı, kapta ölçülen toplam basınca eşittir.",
        "en": "The partial pressure of a gas collected over water is equal to the total pressure measured in the container.",
        "de": "Der Partialdruck eines über Wasser aufgefangenen Gases ist gleich dem im Gefäß gemessenen Gesamtdruck.",
        "fr": "La pression partielle d'un gaz recueilli sur l'eau est égale à la pression totale mesurée dans le récipient.",
        "ru": "Парциальное давление газа, собранного над водой, равно общему давлению, измеренному в сосуде.",
        "ar": "الضغط الجزئي لغاز جُمع فوق الماء يساوي الضغط الكلي المقيس في الوعاء.",
        "zh": "用排水法收集的气体，其分压等于容器内测得的总压强。",
        "ku": "Zexta qismî ya gazeke ku li ser avê hatiye berhevkirin bi qasî zexta giştî ya ku di firaxê de tê pîvandin e."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak, su üstünde toplanan gazın saf olduğunu varsayıyor. Gaz su buharıyla karışık olduğundan ölçülen toplam basınç, gazın kısmi basıncı ile suyun buhar basıncının toplamıdır; kuru gazın basıncını bulmak için suyun buhar basıncı çıkarılmalıdır.",
        "en": "The trap assumes the gas collected over water is pure. The gas is mixed with water vapor, so the measured total pressure is the sum of the gas's partial pressure and the vapor pressure of water; the vapor pressure of water must be subtracted to get the dry gas pressure.",
        "de": "Die Falle nimmt an, das über Wasser gesammelte Gas sei rein. Es ist mit Wasserdampf gemischt, daher ist der gemessene Gesamtdruck die Summe aus Partialdruck des Gases und Dampfdruck des Wassers; für den Druck des trockenen Gases muss der Dampfdruck abgezogen werden.",
        "fr": "Le piège suppose que le gaz recueilli sur l'eau est pur. Il est mélangé à de la vapeur d'eau, donc la pression totale mesurée est la somme de la pression partielle du gaz et de la pression de vapeur de l'eau ; il faut soustraire cette dernière pour obtenir la pression du gaz sec.",
        "ru": "Ловушка исходит из того, что газ, собранный над водой, чистый. На самом деле он смешан с водяным паром, поэтому измеренное общее давление равно сумме парциального давления газа и давления водяного пара; чтобы найти давление сухого газа, давление водяного пара нужно вычесть.",
        "ar": "يفترض الفخ أن الغاز المجموع فوق الماء نقي. الغاز ممزوج ببخار الماء، فالضغط الكلي المقيس هو مجموع الضغط الجزئي للغاز وضغط بخار الماء؛ ولإيجاد ضغط الغاز الجاف يجب طرح ضغط بخار الماء.",
        "zh": "陷阱以为排水法收集的气体是纯净的。气体中混有水蒸气，测得的总压强等于该气体分压与水的蒸气压之和；要得到干燥气体的压强，必须减去水的蒸气压。",
        "ku": "Xefik dihesibîne ku gaza li ser avê hatiye berhevkirin paqij e. Gaz bi buhara avê re tevlihev e, ji ber vê yekê zexta tevahî ya pîvandî berhevoka zexta qismî ya gazê û zexta buhara avê ye; ji bo zexta gaza hişk divê zexta buhara avê were derxistin."
      }
    },
    {
      "id": "u13-f11",
      "fact": {
        "tr": "Kapta sıvı su bulunduğu sürece, sabit sıcaklıkta kabın hacmi değiştirilse de suyun buhar basıncı değişmez.",
        "en": "As long as liquid water remains in the container, the vapor pressure of water does not change when the volume is changed at constant temperature.",
        "de": "Solange flüssiges Wasser im Behälter vorhanden ist, ändert sich der Dampfdruck des Wassers bei konstanter Temperatur nicht, auch wenn das Volumen verändert wird.",
        "fr": "Tant qu'il reste de l'eau liquide dans le récipient, la pression de vapeur de l'eau ne change pas lorsque le volume varie à température constante.",
        "ru": "Пока в сосуде есть жидкая вода, давление её пара при постоянной температуре не меняется, даже если изменить объём сосуда.",
        "ar": "ما دام الماء السائل موجودًا في الوعاء، فإن ضغط بخار الماء لا يتغير عند تغيير الحجم مع ثبات درجة الحرارة.",
        "zh": "只要容器中仍有液态水，在温度不变时改变容器体积，水的蒸气压不会改变。",
        "ku": "Heta ku di firaxê de ava şil hebe, di germahiya sabît de qebare were guhertin jî zexta buhara avê naguhere."
      },
      "trap": {
        "tr": "Kapta sıvı su bulunurken sabit sıcaklıkta kabın hacmi 2 katına çıkarılırsa suyun buhar basıncı yarıya iner.",
        "en": "If the volume of a container holding liquid water is doubled at constant temperature, the vapor pressure of the water is halved.",
        "de": "Wird das Volumen eines Gefäßes, in dem sich flüssiges Wasser befindet, bei konstanter Temperatur verdoppelt, so halbiert sich der Dampfdruck des Wassers.",
        "fr": "Si l'on double, à température constante, le volume d'un récipient contenant de l'eau liquide, la pression de vapeur de l'eau est réduite de moitié.",
        "ru": "Если при постоянной температуре увеличить вдвое объём сосуда, в котором есть жидкая вода, давление водяного пара уменьшится вдвое.",
        "ar": "إذا ضوعف حجم وعاء يحتوي على ماء سائل عند درجة حرارة ثابتة، ينخفض ضغط بخار الماء إلى النصف.",
        "zh": "在温度不变时，将盛有液态水的容器体积增大到原来的2倍，水的蒸气压减半。",
        "ku": "Ger di germahiya sabît de qebareya firaxa ku ava şil tê de heye du qat bibe, zexta buhara avê nîvî dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak, buhar basıncına Boyle yasasını uyguluyor. Hacim artınca bir miktar sıvı buharlaşarak buhar basıncını yeniden denge değerine getirir; kapta sıvı kaldıkça buhar basıncı yalnızca sıcaklığa bağlıdır.",
        "en": "The trap applies Boyle's law to the vapor pressure. When the volume increases, some liquid evaporates and brings the vapor pressure back to its equilibrium value; as long as liquid remains, the vapor pressure depends only on temperature.",
        "de": "Die Falle wendet das Boyle-Gesetz auf den Dampfdruck an. Bei Volumenvergrößerung verdampft etwas Flüssigkeit und stellt den Gleichgewichtsdampfdruck wieder her; solange Flüssigkeit vorhanden ist, hängt der Dampfdruck nur von der Temperatur ab.",
        "fr": "Le piège applique la loi de Boyle à la pression de vapeur. Quand le volume augmente, un peu de liquide s'évapore et ramène la pression de vapeur à sa valeur d'équilibre ; tant qu'il reste du liquide, elle ne dépend que de la température.",
        "ru": "Ловушка применяет к давлению пара закон Бойля — Мариотта. При увеличении объёма часть жидкости испаряется и восстанавливает равновесное давление пара; пока в сосуде остаётся жидкость, давление пара зависит только от температуры.",
        "ar": "يطبّق الفخ قانون بويل على ضغط البخار. عند زيادة الحجم يتبخر جزء من السائل فيعيد ضغط البخار إلى قيمة الاتزان؛ وما دام السائل موجودًا فإن ضغط البخار يعتمد على درجة الحرارة فقط.",
        "zh": "陷阱把波义耳定律用到了蒸气压上。体积增大时会有一部分液体蒸发，使蒸气压恢复到平衡值；只要容器中还有液体，蒸气压只取决于温度。",
        "ku": "Xefik zagona Boyle li ser zexta buharê bi kar tîne. Dema qebare zêde dibe, hinek şile dibe buhar û zexta buharê dîsa digihîne nirxa hevsengiyê; heta ku şile hebe, zexta buharê tenê bi germahiyê ve girêdayî ye."
      }
    },
    {
      "id": "u13-f12",
      "fact": {
        "tr": "Soğutucu akışkanlar: Kritik sıcaklığı yüksek, kaynama noktası düşük, zehirsiz ve çevre dostu olmalıdır.",
        "en": "Refrigerants: Must have a high critical temperature, low boiling point, non-toxic and environmentally friendly.",
        "de": "Kältemittel: Muss eine hohe kritische Temperatur, einen niedrigen Siedepunkt, ungiftig und umweltfreundlich sein.",
        "fr": "Réfrigérants : doivent avoir une température critique élevée, un point d’ébullition bas, non toxiques et respectueux de l’environnement.",
        "ru": "Хладагенты должны иметь высокую критическую температуру и низкую температуру кипения, быть нетоксичными и безопасными для окружающей среды.",
        "ar": "موائع التبريد: يجب أن تكون ذات درجة حرارة حرجة مرتفعة ودرجة غليان منخفضة، وأن تكون غير سامة وصديقة للبيئة.",
        "zh": "制冷剂应具有较高的临界温度和较低的沸点，并且无毒、环保。",
        "ku": "Herikbarên sarker: divê germahiya wan a krîtîk bilind, xala wan a kelandinê nizm be, nejehrî û dostê jîngehê bin."
      },
      "trap": {
        "tr": "Soğutucu akışkanın kaynama noktası oda sıcaklığından çok yüksek olmalıdır.",
        "en": "The boiling point of the refrigerant must be much higher than room temperature.",
        "de": "Der Siedepunkt des Kältemittels muss deutlich über der Raumtemperatur liegen.",
        "fr": "Le point d'ébullition du réfrigérant doit être bien supérieur à la température ambiante.",
        "ru": "Температура кипения хладагента должна быть намного выше комнатной температуры.",
        "ar": "يجب أن تكون درجة غليان مائع التبريد أعلى بكثير من درجة حرارة الغرفة.",
        "zh": "制冷剂的沸点必须远高于室温。",
        "ku": "Divê xala kelandinê ya herikbara sarker ji germahiya odeyê pir bilindtir be."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak soğutucunun çalışma ilkesini ters kuruyor. Soğutucu akışkan, soğutulan bölmeden ısı alarak düşük sıcaklıkta buharlaşmalıdır; kaynama noktası oda sıcaklığından yüksek olsaydı orada buharlaşamaz ve ısı çekemezdi.",
        "en": "The trap reverses how a refrigerant works. The refrigerant must evaporate at a low temperature by taking heat from the cooled compartment; if its boiling point were above room temperature it could not evaporate there and would not absorb heat.",
        "de": "Die Falle kehrt das Funktionsprinzip um. Das Kältemittel muss bei niedriger Temperatur verdampfen und dabei dem Kühlraum Wärme entziehen; läge sein Siedepunkt über Raumtemperatur, könnte es dort nicht verdampfen und keine Wärme aufnehmen.",
        "fr": "Le piège inverse le principe de fonctionnement. Le fluide frigorigène doit s'évaporer à basse température en prenant de la chaleur au compartiment refroidi ; si son point d'ébullition dépassait la température ambiante, il ne pourrait pas s'y évaporer ni absorber de chaleur.",
        "ru": "Ловушка переворачивает принцип работы холодильника. Хладагент должен испаряться при низкой температуре, отбирая теплоту у охлаждаемой камеры; если бы его температура кипения была выше комнатной, он не смог бы там испаряться и поглощать теплоту.",
        "ar": "يعكس الفخ مبدأ عمل المبرّد. يجب أن يتبخر سائل التبريد عند درجة حرارة منخفضة آخذًا الحرارة من الحجرة المبرَّدة؛ ولو كانت درجة غليانه أعلى من درجة حرارة الغرفة لما تبخر هناك ولما امتص الحرارة.",
        "zh": "陷阱把制冷剂的工作原理说反了。制冷剂必须在低温下从冷藏室吸热而蒸发；如果它的沸点高于室温，就无法在那里蒸发吸热。",
        "ku": "Xefik prensîba xebata sarker berevajî dike. Akışkana sarker divê di germahiya nizm de germê ji beşa sarkirî bigire û bibe buhar; heke xala wê ya kelandinê ji germahiya odeyê bilindtir bûya, li wir nedibû buhar û germ nedikişand."
      }
    },
    {
      "id": "u13-f13",
      "fact": {
        "tr": "Aynı sıcaklıkta CH4 (MA=16) gazı, SO2 (MA=64) gazından sqrt(64/16) = 2 kat daha hızlı difüzlenir.",
        "en": "At the same temperature, CH4 (MA=16) gas diffuses sqrt(64/16) = 2 times faster than SO2 (MA=64) gas.",
        "de": "Bei gleicher Temperatur diffundiert CH4-Gas (MA=16) sqrt(64/16) = 2-mal schneller als SO2-Gas (MA=64).",
        "fr": "À la même température, le gaz CH4 (MA=16) diffuse sqrt(64/16) = 2 fois plus vite que le gaz SO2 (MA=64).",
        "ru": "При одинаковой температуре газ CH4 (MA=16) диффундирует в sqrt(64/16) = 2 раза быстрее, чем газ SO2 (MA=64).",
        "ar": "عند درجة الحرارة نفسها تبلغ سرعة انتشار غاز CH4 (MA=16) مثلَي سرعة انتشار غاز SO2 (MA=64)، لأن sqrt(64/16) = 2.",
        "zh": "相同温度下，CH4(M = 16 g/mol)的扩散速率是 SO2(M = 64 g/mol)的 sqrt(64/16) = 2 倍。",
        "ku": "Di heman germahiyê de gaza CH4 (MA=16) sqrt(64/16) = 2 qat ji gaza SO2 (MA=64) zûtir belav dibe."
      },
      "trap": {
        "tr": "Aynı sıcaklıkta CH4 gazı SO2 gazından 4 kat daha hızlı difüzlenir.",
        "en": "At the same temperature, CH4 gas diffuses 4 times faster than SO2 gas.",
        "de": "Bei gleicher Temperatur diffundiert CH4-Gas 4-mal schneller als SO2-Gas.",
        "fr": "À la même température, le gaz CH4 diffuse 4 fois plus vite que le gaz SO2.",
        "ru": "При одинаковой температуре газ CH4 диффундирует в 4 раза быстрее, чем газ SO2.",
        "ar": "عند درجة الحرارة نفسها تبلغ سرعة انتشار غاز CH4 4 أمثال سرعة انتشار غاز SO2.",
        "zh": "相同温度下，CH4 气体的扩散速率是 SO2 气体的4倍。",
        "ku": "Di heman germahiyê de gaza CH4 4 qat ji gaza SO2 zûtir belav dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak karekök almayı unutuyor ve mol kütleleri oranını (64/16 = 4) doğrudan hız oranı sanıyor. Hız oranı mol kütleleri oranının kareköküdür: sqrt(4) = 2.",
        "en": "The trap forgets the square root and takes the molar mass ratio (64/16 = 4) as the rate ratio. The rate ratio is the square root of the molar mass ratio: sqrt(4) = 2.",
        "de": "Die Falle vergisst die Quadratwurzel und hält das Molmassenverhältnis (64/16 = 4) für das Geschwindigkeitsverhältnis. Dieses ist die Wurzel daraus: sqrt(4) = 2.",
        "fr": "Le piège oublie la racine carrée et prend le rapport des masses molaires (64/16 = 4) pour le rapport des vitesses. Celui-ci en est la racine carrée : sqrt(4) = 2.",
        "ru": "Ловушка забывает извлечь корень и принимает отношение молярных масс (64/16 = 4) за отношение скоростей. Отношение скоростей равно квадратному корню из отношения молярных масс: sqrt(4) = 2.",
        "ar": "ينسى الفخ أخذ الجذر التربيعي ويعدّ نسبة الكتل المولية (64/16 = 4) نسبةً للسرعات. نسبة السرعات هي الجذر التربيعي لنسبة الكتل المولية: sqrt(4) = 2.",
        "zh": "陷阱忘了开平方，把摩尔质量之比(64/16 = 4)直接当作速率之比。速率之比是摩尔质量之比的平方根：sqrt(4) = 2。",
        "ku": "Xefik koka çargoşe ji bîr dike û rêjeya girseyên molar (64/16 = 4) rasterast wekî rêjeya lezê digire. Rêjeya lezê koka çargoşe ya wê rêjeyê ye: sqrt(4) = 2."
      }
    },
    {
      "id": "u13-f14",
      "fact": {
        "tr": "Efüzyon, gaz taneciklerinin küçük bir delikten boşluğa (vakuma) kaçması olayıdır.",
        "en": "Effusion is the phenomenon of gas molecules escaping into a vacuum space through a small hole.",
        "de": "Unter Effusion versteht man das Phänomen, dass Gasmoleküle durch ein kleines Loch in einen Vakuumraum entweichen.",
        "fr": "L'effusion est le phénomène par lequel des molécules de gaz s'échappent vers le vide par un petit orifice.",
        "ru": "Эффузия — истечение частиц газа через маленькое отверстие в пустоту (вакуум).",
        "ar": "التدفق هو ظاهرة هروب جسيمات الغاز عبر ثقب صغير إلى الفراغ.",
        "zh": "泻流是气体粒子通过小孔逸入真空的现象。",
        "ku": "Efûzyon diyardeya reva molekulên gazê ji qulikeke biçûk ber bi valahiyê (vakûmê) ye."
      },
      "trap": {
        "tr": "Efüzyon iki gazın birbiri içinde karışmasıdır.",
        "en": "Effusion is the mixing of two gases with each other.",
        "de": "Unter Effusion versteht man die Vermischung zweier Gase miteinander.",
        "fr": "L'effusion est le mélange de deux gaz l'un dans l'autre.",
        "ru": "Эффузия — взаимное смешивание двух газов.",
        "ar": "التدفق هو اختلاط غازين أحدهما بالآخر.",
        "zh": "泻流是两种气体相互混合的现象。",
        "ku": "Efûzyon tevlihevbûna du gazan di nav hev de ye."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak efüzyonu difüzyonla karıştırıyor. İki gazın birbiri içinde yayılarak karışması difüzyondur; efüzyon ise gaz taneciklerinin küçük bir delikten boşluğa kaçmasıdır.",
        "en": "The trap confuses effusion with diffusion. Two gases spreading through and mixing with each other is diffusion; effusion is the escape of gas particles through a small hole into an empty space.",
        "de": "Die Falle verwechselt Effusion mit Diffusion. Das gegenseitige Ausbreiten und Mischen zweier Gase ist Diffusion; Effusion ist das Entweichen von Gasteilchen durch eine kleine Öffnung in einen leeren Raum.",
        "fr": "Le piège confond effusion et diffusion. Le mélange de deux gaz qui se répandent l'un dans l'autre est la diffusion ; l'effusion est la fuite des particules de gaz par un petit orifice vers un espace vide.",
        "ru": "Ловушка путает эффузию с диффузией. Взаимное проникновение и смешивание двух газов — это диффузия; эффузия — выход частиц газа через маленькое отверстие в пустое пространство.",
        "ar": "يخلط الفخ بين التدفق والانتشار. انتشار غازين أحدهما في الآخر وامتزاجهما هو الانتشار؛ أما التدفق فهو تسرّب جسيمات الغاز عبر ثقب صغير إلى فراغ.",
        "zh": "陷阱把泻流和扩散混淆了。两种气体相互扩散混合属于扩散；泻流是气体粒子通过小孔逸入真空的过程。",
        "ku": "Xefik efûzyonê bi belavbûnê (difûzyonê) re tevlihev dike. Belavbûn û tevlihevbûna du gazan di nav hev de difûzyon e; efûzyon reva perçeyên gazê ji qulikeke biçûk ber bi valahiyê ye."
      }
    },
    {
      "id": "u13-f15",
      "fact": {
        "tr": "Gerçek gazlar yeterince soğutulup sıkıştırılarak sıvılaştırılabilir; ideal gaz modelinde tanecikler arasında çekim olmadığından ideal gaz hiçbir koşulda sıvılaşmaz.",
        "en": "Real gases can be liquefied by sufficient cooling and compression; in the ideal gas model there is no attraction between particles, so an ideal gas never liquefies under any conditions.",
        "de": "Reale Gase lassen sich durch ausreichendes Abkühlen und Komprimieren verflüssigen; im Modell des idealen Gases gibt es keine Anziehung zwischen den Teilchen, daher verflüssigt sich ein ideales Gas unter keinen Bedingungen.",
        "fr": "Les gaz réels peuvent être liquéfiés par un refroidissement et une compression suffisants ; dans le modèle du gaz parfait il n'y a pas d'attraction entre particules, donc un gaz parfait ne se liquéfie dans aucune condition.",
        "ru": "Реальные газы можно сжижить достаточным охлаждением и сжатием; в модели идеального газа притяжения между частицами нет, поэтому идеальный газ не сжижается ни при каких условиях.",
        "ar": "يمكن تسييل الغازات الحقيقية بالتبريد والضغط الكافيين؛ أما في نموذج الغاز المثالي فلا يوجد تجاذب بين الجسيمات، لذا لا يتسيّل الغاز المثالي تحت أي ظرف.",
        "zh": "真实气体经充分冷却和压缩可以液化；理想气体模型中粒子间没有引力，所以理想气体在任何条件下都不会液化。",
        "ku": "Gazên rastîn bi sarkirin û pêçandina têra xwe dikarin werin şilkirin; di modela gaza îdeal de di navbera perçeyan de kişandin tune, ji ber vê yekê gaza îdeal di tu şertî de şil nabe."
      },
      "trap": {
        "tr": "İdeal gaz yeterince soğutulup sıkıştırılırsa sıvılaştırılabilir.",
        "en": "An ideal gas can be liquefied if it is cooled and compressed enough.",
        "de": "Ein ideales Gas lässt sich verflüssigen, wenn man es genügend abkühlt und komprimiert.",
        "fr": "Un gaz parfait peut être liquéfié s'il est suffisamment refroidi et comprimé.",
        "ru": "Идеальный газ можно сжижить, если достаточно охладить и сжать его.",
        "ar": "يمكن تسييل الغاز المثالي إذا بُرّد وضُغط بما يكفي.",
        "zh": "理想气体只要充分冷却和压缩就能液化。",
        "ku": "Gaza îdeal heke têra xwe were sarkirin û pêçandin dikare were şilkirin."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak, ideal gazın da gerçek gaz gibi sıvılaşabileceğini sanıyor. Sıvılaşma tanecikler arası çekim kuvvetleri sayesinde gerçekleşir; ideal gaz modelinde çekim ve öz hacim olmadığından ideal gaz hiçbir koşulda sıvılaşmaz.",
        "en": "The trap assumes an ideal gas can liquefy like a real gas. Liquefaction happens because of attractive forces between particles; in the ideal gas model there is no attraction and no particle volume, so an ideal gas never liquefies under any conditions.",
        "de": "Die Falle nimmt an, ein ideales Gas lasse sich wie ein reales verflüssigen. Verflüssigung beruht auf Anziehungskräften zwischen den Teilchen; im Modell des idealen Gases gibt es weder Anziehung noch Eigenvolumen, daher verflüssigt es sich unter keinen Bedingungen.",
        "fr": "Le piège suppose qu'un gaz parfait peut se liquéfier comme un gaz réel. La liquéfaction est due aux forces d'attraction entre particules ; le modèle du gaz parfait n'a ni attraction ni volume propre, donc un gaz parfait ne se liquéfie dans aucune condition.",
        "ru": "Ловушка считает, что идеальный газ можно сжижить так же, как реальный. Сжижение происходит благодаря силам притяжения между частицами; в модели идеального газа нет ни притяжения, ни собственного объёма частиц, поэтому идеальный газ не сжижается ни при каких условиях.",
        "ar": "يفترض الفخ أن الغاز المثالي يمكن تسييله كالغاز الحقيقي. يحدث التسييل بفضل قوى التجاذب بين الجسيمات؛ وفي نموذج الغاز المثالي لا تجاذب ولا حجم ذاتي، لذا لا يتسيّل الغاز المثالي تحت أي ظرف.",
        "zh": "陷阱以为理想气体也能像真实气体一样液化。液化依靠粒子间的引力；理想气体模型中既没有引力也没有粒子自身体积，所以理想气体在任何条件下都不会液化。",
        "ku": "Xefik dihesibîne ku gaza îdeal jî wek gaza rastîn şil dibe. Şilbûn bi saya hêzên kişandinê yên di navbera perçeyan de çêdibe; di modela gaza îdeal de kişandin û qebareya xwe tune ne, ji ber vê yekê gaza îdeal di tu şertî de şil nabe."
      }
    },
    {
      "id": "u13-f16",
      "fact": {
        "tr": "Yüksek basınçta gaz hacmi küçüldüğünden, taneciklerin öz hacmi toplam hacim yanında ihmal edilemez hâle gelir.",
        "en": "At high pressure the gas volume becomes small, so the particles' own volume is no longer negligible compared with the total volume.",
        "de": "Bei hohem Druck wird das Gasvolumen klein, sodass das Eigenvolumen der Teilchen gegenüber dem Gesamtvolumen nicht mehr vernachlässigbar ist.",
        "fr": "À haute pression, le volume du gaz devient faible, si bien que le volume propre des particules n'est plus négligeable devant le volume total.",
        "ru": "При высоком давлении объём газа становится малым, поэтому собственным объёмом частиц по сравнению с общим объёмом уже нельзя пренебречь.",
        "ar": "عند الضغط المرتفع يصغر حجم الغاز، فيصبح الحجم الذاتي للجسيمات غير قابل للإهمال مقارنةً بالحجم الكلي.",
        "zh": "高压下气体体积变小，粒子自身体积相对于总体积不再可以忽略。",
        "ku": "Di zexta bilind de qebareya gazê biçûk dibe, ji ber vê yekê qebareya perçeyan a xwe li hember qebareya tevahî êdî nayê paşguhkirin."
      },
      "trap": {
        "tr": "Yüksek basınç altında gaz taneciklerinin hacmi tamamen yok olur.",
        "en": "Under high pressure, the volume of gas particles disappears completely.",
        "de": "Unter hohem Druck verschwindet das Volumen der Gaspartikel vollständig.",
        "fr": "Sous haute pression, le volume des particules de gaz disparaît complètement.",
        "ru": "Под высоким давлением объём частиц газа полностью исчезает.",
        "ar": "تحت الضغط المرتفع يختفي حجم جسيمات الغاز تمامًا.",
        "zh": "在高压下，气体粒子的体积完全消失。",
        "ku": "Di bin zexta bilind de, qebareya pariyên gazê bi tevahî winda dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Tuzak, sıkıştırmanın tanecikleri de küçülttüğünü sanıyor. Basınç tanecikler arasındaki boşluğu azaltır, taneciklerin kendi hacmi değişmez; yüksek basınçta bu öz hacim toplam hacmin önemli bir kısmı hâline gelir.",
        "en": "The trap assumes compression shrinks the particles themselves. Pressure only reduces the empty space between particles, the particles' own volume does not change; at high pressure this own volume becomes a significant part of the total volume.",
        "de": "Die Falle nimmt an, Kompression verkleinere die Teilchen selbst. Druck verringert nur den leeren Raum zwischen ihnen, ihr Eigenvolumen bleibt gleich; bei hohem Druck wird dieses Eigenvolumen ein erheblicher Teil des Gesamtvolumens.",
        "fr": "Le piège suppose que la compression rétrécit les particules elles-mêmes. La pression réduit seulement l'espace vide entre elles, leur volume propre ne change pas ; à haute pression, ce volume propre devient une part importante du volume total.",
        "ru": "Ловушка считает, что при сжатии уменьшаются сами частицы. Давление уменьшает лишь промежутки между частицами, а их собственный объём не меняется; при высоком давлении он становится заметной частью общего объёма.",
        "ar": "يفترض الفخ أن الضغط يصغّر الجسيمات نفسها. الضغط يقلل الفراغ بين الجسيمات فقط، أما حجمها الذاتي فلا يتغير؛ وعند الضغط المرتفع يصبح هذا الحجم الذاتي جزءًا مهمًا من الحجم الكلي.",
        "zh": "陷阱以为压缩会使粒子本身变小。压强只减小粒子之间的空隙，粒子自身体积不变；在高压下，这部分自身体积占总体积的比例变得显著。",
        "ku": "Xefik dihesibîne ku pêçandin perçeyan bi xwe biçûk dike. Zext tenê valahiya navbera perçeyan kêm dike, qebareya wan a xwe naguhere; di zexta bilind de ev qebare dibe beşeke girîng a qebareya tevahî."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u13-c01",
      "conceptA": {
        "tr": "İdeal Gaz",
        "en": "Ideal Gas",
        "de": "Ideales Gas",
        "fr": "Gaz parfait",
        "ru": "Идеальный газ",
        "ar": "الغاز المثالي",
        "zh": "理想气体",
        "ku": "Gaza Îdeal"
      },
      "conceptB": {
        "tr": "Gerçek Gaz",
        "en": "Real Gas",
        "de": "Echtes Gas",
        "fr": "Gaz réel",
        "ru": "Реальный газ",
        "ar": "الغاز الحقيقي",
        "zh": "真实气体",
        "ku": "Gaza Rastî"
      },
      "distinction": {
        "tr": "İdeal gazda tanecik hacmi sıfır ve çekim yok kabul edilir; gerçek gazda öz hacim ve çekim kuvveti vardır.",
        "en": "In an ideal gas, particle volume is taken as zero and there is no attraction; in a real gas, particles have their own volume and attractive forces.",
        "de": "Beim idealen Gas werden ein Teilchenvolumen von null und keine Anziehung angenommen; beim realen Gas gibt es Eigenvolumen und Anziehungskräfte.",
        "fr": "Dans un gaz parfait, le volume des particules est supposé nul et il n'y a pas d'attraction ; dans un gaz réel, il existe un volume propre et des forces d'attraction.",
        "ru": "Идеальный газ — модель, в которой объём частиц принимают равным нулю, а притяжения между частицами нет; реальный газ имеет собственный объём частиц, и между ними действуют силы притяжения.",
        "ar": "في الغاز المثالي يُفترض أن حجم الجسيمات صفر ولا يوجد تجاذب؛ أما في الغاز الحقيقي فللجسيمات حجم ذاتي وتوجد قوى تجاذب.",
        "zh": "理想气体假定粒子本身体积为零、粒子间无引力；而真实气体的粒子有自身体积，粒子间存在引力。",
        "ku": "Di gaza îdeal de qebareya perçeyan sifir û kişandin tune tê qebûlkirin; di gaza rastîn de qebareya xwe û hêza kişandinê heye."
      }
    },
    {
      "id": "u13-c02",
      "conceptA": {
        "tr": "Gaz",
        "en": "Gas",
        "de": "Gas",
        "fr": "Gaz",
        "ru": "Газ",
        "ar": "الغاز",
        "zh": "气体",
        "ku": "Gaz"
      },
      "conceptB": {
        "tr": "Buhar",
        "en": "Vapor",
        "de": "Dampf",
        "fr": "Vapeur",
        "ru": "Пар",
        "ar": "البخار",
        "zh": "蒸气",
        "ku": "Buhar"
      },
      "distinction": {
        "tr": "Buhar, kritik sıcaklığının altında bulunduğundan yalnızca basınç artırılarak sıvılaştırılabilir; gaz ise kritik sıcaklığının üstünde bulunduğundan yalnızca basınç artırılarak sıvılaştırılamaz.",
        "en": "A vapor is below its critical temperature, so it can be liquefied by increasing the pressure alone; a gas is above its critical temperature, so it cannot be liquefied by increasing the pressure alone.",
        "de": "Dampf liegt unterhalb seiner kritischen Temperatur und lässt sich daher allein durch Druckerhöhung verflüssigen; ein Gas liegt oberhalb seiner kritischen Temperatur und lässt sich daher allein durch Druckerhöhung nicht verflüssigen.",
        "fr": "Une vapeur est en dessous de sa température critique et peut donc être liquéfiée par simple augmentation de la pression ; un gaz est au-dessus de sa température critique et ne peut donc pas être liquéfié par simple augmentation de la pression.",
        "ru": "Пар находится ниже своей критической температуры, поэтому его можно сжижить одним лишь повышением давления; газ находится выше своей критической температуры, поэтому одним лишь повышением давления его сжижить нельзя.",
        "ar": "البخار يكون دون درجة حرارته الحرجة، ولذلك يمكن تسييله بزيادة الضغط وحدها؛ أما الغاز فيكون فوق درجة حرارته الحرجة، ولذلك لا يمكن تسييله بزيادة الضغط وحدها.",
        "zh": "蒸气处于其临界温度以下，因此仅靠加压就能液化；而气体处于其临界温度以上，因此仅靠加压不能液化。",
        "ku": "Buhar li jêr germahiya xwe ya krîtîk e, ji ber vê yekê tenê bi zêdekirina zextê dikare were şilkirin; gaz li ser germahiya xwe ya krîtîk e, ji ber vê yekê tenê bi zêdekirina zextê nikare were şilkirin."
      }
    },
    {
      "id": "u13-c03",
      "conceptA": {
        "tr": "Graham Difüzyon Yasası",
        "en": "Graham's Law of Diffusion",
        "de": "Grahams Diffusionsgesetz",
        "fr": "Loi de diffusion de Graham",
        "ru": "Закон диффузии Грэма",
        "ar": "قانون جراهام للانتشار",
        "zh": "格雷厄姆扩散定律",
        "ku": "Zagona Belavbûnê ya Graham"
      },
      "conceptB": {
        "tr": "Dalton Kısmi Basınçlar Yasası",
        "en": "Dalton's Law of Partial Pressures",
        "de": "Daltons Partialdruckgesetz",
        "fr": "Loi des pressions partielles de Dalton",
        "ru": "Закон парциальных давлений Дальтона",
        "ar": "قانون دالتون للضغوط الجزئية",
        "zh": "道尔顿分压定律",
        "ku": "Zagona Dalton ya Zextên Parçeyî"
      },
      "distinction": {
        "tr": "Graham Difüzyon Yasası, gazların yayılma hızının mol kütlesinin kareköküyle ters orantılı olduğunu; Dalton Kısmi Basınçlar Yasası ise bir gazın kısmi basıncının mol kesriyle doğru orantılı olduğunu belirtir.",
        "en": "Graham's Law of Diffusion states that the rate at which gases spread is inversely proportional to the square root of the molar mass; Dalton's Law of Partial Pressures states that the partial pressure of a gas is directly proportional to its mole fraction.",
        "de": "Grahams Diffusionsgesetz besagt, dass die Ausbreitungsgeschwindigkeit von Gasen umgekehrt proportional zur Quadratwurzel der Molmasse ist; Daltons Partialdruckgesetz besagt, dass der Partialdruck eines Gases direkt proportional zu seinem Stoffmengenanteil ist.",
        "fr": "La loi de diffusion de Graham énonce que la vitesse de propagation des gaz est inversement proportionnelle à la racine carrée de la masse molaire ; la loi des pressions partielles de Dalton énonce que la pression partielle d'un gaz est directement proportionnelle à sa fraction molaire.",
        "ru": "Закон диффузии Грэма утверждает, что скорость распространения газов обратно пропорциональна квадратному корню из их молярной массы; закон парциальных давлений Дальтона утверждает, что парциальное давление газа прямо пропорционально его мольной доле.",
        "ar": "قانون جراهام للانتشار ينص على أن سرعة انتشار الغازات تتناسب عكسيًا مع الجذر التربيعي للكتلة المولية؛ أما قانون دالتون للضغوط الجزئية فينص على أن الضغط الجزئي للغاز يتناسب طرديًا مع كسره المولي.",
        "zh": "格雷厄姆扩散定律指出，气体的扩散速率与摩尔质量的平方根成反比；道尔顿分压定律指出，气体的分压与其物质的量分数成正比。",
        "ku": "Zagona Belavbûnê ya Graham dibêje ku leza belavbûna gazan bi koka çargoşe ya girseya molar re berevajî têkildar e; Zagona Dalton ya Zextên Parçeyî dibêje ku zexta qismî ya gazekê bi parçeya wê ya molê re rasterast têkildar e."
      }
    },
    {
      "id": "u13-c04",
      "conceptA": {
        "tr": "Difüzyon",
        "en": "Diffusion",
        "de": "Diffusion",
        "fr": "Diffusion",
        "ru": "Диффузия",
        "ar": "الانتشار",
        "zh": "扩散",
        "ku": "Belavbûn (difûzyon)"
      },
      "conceptB": {
        "tr": "Efüzyon",
        "en": "Effusion",
        "de": "Effusion",
        "fr": "Effusion",
        "ru": "Эффузия",
        "ar": "التدفق",
        "zh": "泻流",
        "ku": "Efûzyon"
      },
      "distinction": {
        "tr": "Difüzyon, gaz taneciklerinin başka bir gaz ortamında yayılarak karışmasıdır; efüzyon ise gaz taneciklerinin küçük bir delikten boşluğa (vakuma) kaçmasıdır.",
        "en": "Diffusion is the spreading and mixing of gas particles through another gas; effusion is the escape of gas particles through a small hole into a vacuum.",
        "de": "Diffusion ist das Ausbreiten und Vermischen von Gasteilchen in einem anderen Gas; Effusion ist das Entweichen von Gasteilchen durch eine kleine Öffnung ins Vakuum.",
        "fr": "La diffusion est la propagation et le mélange des particules d'un gaz dans un autre gaz ; l'effusion est la fuite de particules de gaz par un petit orifice vers le vide.",
        "ru": "Диффузия — распространение и смешивание частиц газа в среде другого газа; эффузия — вытекание частиц газа через маленькое отверстие в вакуум.",
        "ar": "الانتشار هو تفرّق جسيمات الغاز واختلاطها داخل غاز آخر؛ أما التدفق فهو خروج جسيمات الغاز عبر ثقب صغير إلى فراغ.",
        "zh": "扩散是气体粒子在另一种气体中散开并相互混合；而泻流是气体粒子通过小孔逸入真空。",
        "ku": "Belavbûn belavbûn û tevlihevbûna perçeyên gazê di nav gazeke din de ye; efûzyon reva perçeyên gazê ji qulikeke biçûk ber bi valahiyê (vakûmê) ye."
      }
    },
    {
      "id": "u13-c05",
      "conceptA": {
        "tr": "Joule-Thomson Olayı",
        "en": "Joule-Thomson Effect",
        "de": "Joule-Thomson-Effekt",
        "fr": "Effet Joule-Thomson",
        "ru": "Эффект Джоуля — Томсона",
        "ar": "تأثير جول-طومسون",
        "zh": "焦耳-汤姆孙效应",
        "ku": "Bandora Joule-Thomson"
      },
      "conceptB": {
        "tr": "Kritik Sıcaklık",
        "en": "Critical Temperature",
        "de": "Kritische Temperatur",
        "fr": "Température critique",
        "ru": "Критическая температура",
        "ar": "درجة الحرارة الحرجة",
        "zh": "临界温度",
        "ku": "Germahiya krîtîk"
      },
      "distinction": {
        "tr": "Joule-Thomson olayı, sıkıştırılmış gerçek gazların çoğunun oda koşullarında dar bir delikten genleşirken soğumasıdır; kritik sıcaklık ise üzerinde bir gazın hiçbir basınç altında sıvılaştırılamadığı sıcaklıktır.",
        "en": "The Joule-Thomson effect is the cooling of most compressed real gases as they expand through a narrow opening at room conditions; the critical temperature is the temperature above which a gas cannot be liquefied under any pressure.",
        "de": "Der Joule-Thomson-Effekt ist die Abkühlung der meisten komprimierten realen Gase beim Entspannen durch eine enge Öffnung bei Raumbedingungen; die kritische Temperatur ist die Temperatur, oberhalb derer sich ein Gas unter keinem Druck verflüssigen lässt.",
        "fr": "L'effet Joule-Thomson est le refroidissement de la plupart des gaz réels comprimés lorsqu'ils se détendent à travers un orifice étroit dans les conditions ambiantes ; la température critique est la température au-dessus de laquelle un gaz ne peut être liquéfié sous aucune pression.",
        "ru": "Эффект Джоуля — Томсона — охлаждение большинства сжатых реальных газов при расширении через узкое отверстие в комнатных условиях; критическая температура — температура, выше которой газ нельзя сжижить ни при каком давлении.",
        "ar": "تأثير جول-طومسون هو تبريد معظم الغازات الحقيقية المضغوطة عند تمددها عبر فتحة ضيقة في ظروف الغرفة؛ أما درجة الحرارة الحرجة فدرجةُ الحرارة التي لا يمكن فوقها تسييل الغاز مهما كان الضغط.",
        "zh": "焦耳-汤姆孙效应是指室温下大多数被压缩的真实气体经狭窄小孔膨胀时降温；而临界温度是指高于该温度时气体在任何压强下都不能液化的温度。",
        "ku": "Bandora Joule-Thomson sarbûna piraniya gazên rastîn ên pêçayî ye dema ku di şertên odeyê de ji qulikeke teng berfireh dibin; germahiya krîtîk ew germahî ye ku li ser wê gaz di bin tu zextê de nayê şilkirin."
      }
    },
    {
      "id": "u13-c06",
      "conceptA": {
        "tr": "Doygun Su Buharı Basıncı",
        "en": "Saturated Water Vapor Pressure",
        "de": "Gesättigter Wasserdampfdruck",
        "fr": "Pression de vapeur d'eau saturée",
        "ru": "Давление насыщенного водяного пара",
        "ar": "ضغط بخار الماء المشبع",
        "zh": "饱和水蒸气压",
        "ku": "Zexta Buhara Avê ya Têrbûyî"
      },
      "conceptB": {
        "tr": "Kuru Gaz Basıncı",
        "en": "Dry Gas Pressure",
        "de": "Trockener Gasdruck",
        "fr": "Pression du gaz sec",
        "ru": "Давление сухого газа",
        "ar": "ضغط الغاز الجاف",
        "zh": "干燥气体的压强",
        "ku": "Zexta Gaza Hişk"
      },
      "distinction": {
        "tr": "Doygun su buharı basıncı yalnızca sıcaklığa bağlıdır ve kap hacmiyle değişmez; kuru gaz basıncı ise sabit sıcaklıkta kap hacmi değiştikçe Boyle yasasına göre değişir.",
        "en": "Saturated water vapor pressure depends only on temperature and does not change with the container volume; dry gas pressure changes according to Boyle's law when the container volume changes at constant temperature.",
        "de": "Gesättigter Wasserdampfdruck hängt nur von der Temperatur ab und ändert sich nicht mit dem Gefäßvolumen; trockener Gasdruck ändert sich bei konstanter Temperatur mit dem Gefäßvolumen nach dem Boyleschen Gesetz.",
        "fr": "La pression de vapeur d'eau saturée ne dépend que de la température et ne varie pas avec le volume du récipient ; la pression du gaz sec varie selon la loi de Boyle lorsque le volume du récipient change à température constante.",
        "ru": "Давление насыщенного водяного пара зависит только от температуры и не меняется при изменении объёма сосуда; давление сухого газа при постоянной температуре меняется вместе с объёмом сосуда по закону Бойля — Мариотта.",
        "ar": "ضغط بخار الماء المشبع يعتمد على درجة الحرارة فقط ولا يتغير بتغير حجم الوعاء؛ أما ضغط الغاز الجاف فيتغير وفق قانون بويل عند تغير حجم الوعاء مع ثبات درجة الحرارة.",
        "zh": "饱和水蒸气压只取决于温度，不随容器体积变化；而干燥气体的压强在温度不变时随容器体积按波义耳定律变化。",
        "ku": "Zexta buhara avê ya têrbûyî tenê bi germahiyê ve girêdayî ye û bi qebareya firaxê naguhere; zexta gaza hişk di germahiya sabît de dema qebareya firaxê diguhere li gorî zagona Boyle diguhere."
      }
    },
    {
      "id": "u13-c07",
      "conceptA": {
        "tr": "Ortalama Kinetik Enerji",
        "en": "Average Kinetic Energy",
        "de": "Mittlere kinetische Energie",
        "fr": "Énergie cinétique moyenne",
        "ru": "Средняя кинетическая энергия",
        "ar": "متوسط الطاقة الحركية",
        "zh": "平均动能",
        "ku": "Enerjiya Kînetîk a Navîn"
      },
      "conceptB": {
        "tr": "Yayılma Hızı",
        "en": "Diffusion Rate",
        "de": "Diffusionsgeschwindigkeit",
        "fr": "Vitesse de diffusion",
        "ru": "Скорость диффузии",
        "ar": "سرعة الانتشار",
        "zh": "扩散速率",
        "ku": "Leza belavbûnê"
      },
      "distinction": {
        "tr": "Ortalama kinetik enerji yalnızca mutlak sıcaklığa bağlıdır; yayılma hızı ise hem mutlak sıcaklığa hem de mol kütlesine bağlıdır.",
        "en": "Average kinetic energy depends only on absolute temperature; diffusion rate depends on both absolute temperature and molar mass.",
        "de": "Mittlere kinetische Energie hängt nur von der absoluten Temperatur ab; die Diffusionsgeschwindigkeit hängt sowohl von der absoluten Temperatur als auch von der Molmasse ab.",
        "fr": "L'énergie cinétique moyenne ne dépend que de la température absolue ; la vitesse de diffusion dépend à la fois de la température absolue et de la masse molaire.",
        "ru": "Средняя кинетическая энергия зависит только от абсолютной температуры; скорость диффузии зависит и от абсолютной температуры, и от молярной массы.",
        "ar": "متوسط الطاقة الحركية يعتمد على درجة الحرارة المطلقة فقط؛ أما سرعة الانتشار فتعتمد على درجة الحرارة المطلقة والكتلة المولية معًا.",
        "zh": "平均动能只取决于热力学温度；扩散速率则同时取决于热力学温度和摩尔质量。",
        "ku": "Enerjiya kînetîk a navîn tenê bi germahiya mutleq ve girêdayî ye; leza belavbûnê hem bi germahiya mutleq û hem jî bi girseya molar ve girêdayî ye."
      }
    },
    {
      "id": "u13-c08",
      "conceptA": {
        "tr": "İdeal Davranıştan Sapma",
        "en": "Deviation from Ideal Behavior",
        "de": "Abweichung vom idealen Verhalten",
        "fr": "Écart au comportement parfait",
        "ru": "Отклонение от идеального поведения",
        "ar": "الانحراف عن السلوك المثالي",
        "zh": "偏离理想气体行为",
        "ku": "Dûrketina ji tevgera îdeal"
      },
      "conceptB": {
        "tr": "Kritik Basınç",
        "en": "Critical Pressure",
        "de": "Kritischer Druck",
        "fr": "Pression critique",
        "ru": "Критическое давление",
        "ar": "الضغط الحرج",
        "zh": "临界压强",
        "ku": "Zexta Krîtîk"
      },
      "distinction": {
        "tr": "İdeal davranıştan sapma, tanecik öz hacmi ve çekim kuvvetleri nedeniyle gerçek gazın ideal gaz modelinden uzaklaşmasıdır ve yüksek basınç ile düşük sıcaklıkta artar; kritik basınç ise bir gazı kritik sıcaklığında sıvılaştırmak için gereken en düşük basınçtır.",
        "en": "Deviation from ideal behavior is a real gas departing from the ideal gas model because of particle volume and attractive forces, and it grows at high pressure and low temperature; critical pressure is the minimum pressure needed to liquefy a gas at its critical temperature.",
        "de": "Abweichung vom idealen Verhalten bedeutet, dass sich ein reales Gas wegen des Eigenvolumens und der Anziehungskräfte der Teilchen vom Modell des idealen Gases entfernt; sie nimmt bei hohem Druck und tiefer Temperatur zu. Der kritische Druck ist der Mindestdruck, der nötig ist, um ein Gas bei seiner kritischen Temperatur zu verflüssigen.",
        "fr": "L'écart au comportement parfait est l'éloignement d'un gaz réel du modèle du gaz parfait, dû au volume propre et aux attractions des particules ; il augmente à haute pression et basse température. La pression critique est la pression minimale nécessaire pour liquéfier un gaz à sa température critique.",
        "ru": "Отклонение от идеального поведения — отличие свойств реального газа от модели идеального газа, вызванное собственным объёмом частиц и силами притяжения; оно растёт при высоком давлении и низкой температуре; критическое давление — наименьшее давление, необходимое для сжижения газа при его критической температуре.",
        "ar": "الانحراف عن السلوك المثالي هو ابتعاد الغاز الحقيقي عن نموذج الغاز المثالي بسبب الحجم الذاتي للجسيمات وقوى التجاذب، ويزداد عند الضغط المرتفع ودرجة الحرارة المنخفضة؛ أما الضغط الحرج فهو أقل ضغط لازم لتسييل الغاز عند درجة حرارته الحرجة.",
        "zh": "偏离理想气体行为是指真实气体由于粒子自身体积和分子间引力而与理想气体模型不符，高压、低温时偏离增大；而临界压强是在临界温度下使气体液化所需的最低压强。",
        "ku": "Dûrketina ji tevgera îdeal ew e ku gaza rastîn ji ber qebareya perçeyan û hêzên kişandinê ji modela gaza îdeal dûr dikeve, û di zexta bilind û germahiya nizm de zêde dibe; zexta krîtîk zexta herî kêm e ku ji bo şilkirina gazekê di germahiya wê ya krîtîk de pêwîst e."
      }
    }
  ],
  "sequences": [
    {
      "id": "u13-s01",
      "title": {
        "tr": "Graham Difüzyon Karşılaştırma Adımları",
        "en": "Graham Diffusion Comparison Steps",
        "de": "Graham-Diffusionsvergleichsschritte",
        "fr": "Étapes de comparaison de diffusion Graham",
        "ru": "Порядок сравнения скоростей диффузии по закону Грэма",
        "ar": "المقارنة بقانون جراهام للانتشار",
        "zh": "用格雷厄姆定律比较扩散速率的步骤",
        "ku": "Pêngavên Berhevdana Belavbûna Graham"
      },
      "steps": [
        {
          "tr": "Gazların mol kütleleri belirlenir, sıcaklıklar kelvine çevrilir",
          "en": "The molar masses of the gases are determined and the temperatures are converted to kelvin",
          "de": "Die Molmassen der Gase werden bestimmt und die Temperaturen in Kelvin umgerechnet",
          "fr": "On détermine les masses molaires des gaz et on convertit les températures en kelvins",
          "ru": "Определяют молярные массы газов и переводят температуры в кельвины",
          "ar": "تُحدَّد الكتل المولية للغازين وتُحوَّل درجات الحرارة إلى الكلفن",
          "zh": "确定两种气体的摩尔质量，并把温度换算成开尔文",
          "ku": "Girseyên molar ên gazan tên diyarkirin û germahî tên guhertin bo kelvînê"
        },
        {
          "tr": "Bu değerler v1/v2 = sqrt((T1*M2)/(T2*M1)) bağıntısında yerine yazılır",
          "en": "These values are substituted into v1/v2 = sqrt((T1*M2)/(T2*M1))",
          "de": "Diese Werte werden in v1/v2 = sqrt((T1*M2)/(T2*M1)) eingesetzt",
          "fr": "On reporte ces valeurs dans v1/v2 = sqrt((T1*M2)/(T2*M1))",
          "ru": "Эти значения подставляют в формулу v1/v2 = sqrt((T1*M2)/(T2*M1))",
          "ar": "تُعوَّض هذه القيم في العلاقة v1/v2 = sqrt((T1*M2)/(T2*M1))",
          "zh": "把这些数值代入 v1/v2 = sqrt((T1*M2)/(T2*M1))",
          "ku": "Ev nirx di v1/v2 = sqrt((T1*M2)/(T2*M1)) de tên bicihkirin"
        },
        {
          "tr": "Hız oranı (v1/v2) hesaplanır",
          "en": "The rate ratio (v1/v2) is calculated",
          "de": "Das Geschwindigkeitsverhältnis (v1/v2) wird berechnet",
          "fr": "On calcule le rapport des vitesses (v1/v2)",
          "ru": "Вычисляют отношение скоростей (v1/v2)",
          "ar": "تُحسب نسبة السرعتين (v1/v2)",
          "zh": "计算速率之比(v1/v2)",
          "ku": "Rêjeya lezan (v1/v2) tê hesibandin"
        },
        {
          "tr": "Hız oranından yol (x1/x2 = v1/v2) ya da süre (t2/t1 = v1/v2) oranına geçilir",
          "en": "The rate ratio is used to find the distance ratio (x1/x2 = v1/v2) or the time ratio (t2/t1 = v1/v2)",
          "de": "Aus dem Geschwindigkeitsverhältnis wird das Streckenverhältnis (x1/x2 = v1/v2) oder das Zeitverhältnis (t2/t1 = v1/v2) ermittelt",
          "fr": "On en déduit le rapport des distances (x1/x2 = v1/v2) ou des durées (t2/t1 = v1/v2)",
          "ru": "По отношению скоростей находят отношение путей (x1/x2 = v1/v2) или времён (t2/t1 = v1/v2)",
          "ar": "تُستنتج من نسبة السرعتين نسبة المسافتين (x1/x2 = v1/v2) أو نسبة الزمنين (t2/t1 = v1/v2)",
          "zh": "由速率之比求出路程之比(x1/x2 = v1/v2)或时间之比(t2/t1 = v1/v2)",
          "ku": "Ji rêjeya lezan rêjeya rêyan (x1/x2 = v1/v2) an jî rêjeya deman (t2/t1 = v1/v2) tê dîtin"
        }
      ]
    },
    {
      "id": "u13-s02",
      "title": {
        "tr": "Graham Difüzyon Deneyi",
        "en": "Graham Diffusion Experiment",
        "de": "Graham-Diffusionsexperiment",
        "fr": "Expérience de diffusion Graham",
        "ru": "Опыт Грэма по диффузии газов",
        "ar": "تجربة جراهام للانتشار",
        "zh": "格雷厄姆扩散实验",
        "ku": "Ezmûna Belavbûna Graham"
      },
      "steps": [
        {
          "tr": "İki pamuk parçasından biri derişik HCl, diğeri derişik NH3 çözeltisiyle ıslatılır",
          "en": "One of two pieces of cotton is soaked in concentrated HCl solution and the other in concentrated NH3 solution",
          "de": "Von zwei Wattebäuschen wird einer mit konzentrierter HCl-Lösung, der andere mit konzentrierter NH3-Lösung getränkt",
          "fr": "On imbibe un morceau de coton de solution concentrée de HCl et un autre de solution concentrée de NH3",
          "ru": "Один из двух кусочков ваты смачивают концентрированным раствором HCl, другой — концентрированным раствором NH3",
          "ar": "تُبلَّل إحدى قطعتَي قطن بمحلول HCl المركز والأخرى بمحلول NH3 المركز",
          "zh": "取两团棉花，一团用浓盐酸浸湿，另一团用浓氨水浸湿",
          "ku": "Ji du perçeyên pembû yek bi çareseriya HCl ya konsantrekirî, ya din bi çareseriya NH3 ya konsantrekirî tê şilkirin"
        },
        {
          "tr": "Pamuklar yatay bir cam borunun iki ucuna aynı anda yerleştirilir",
          "en": "The cotton pieces are placed at the two ends of a horizontal glass tube at the same time",
          "de": "Die Wattebäusche werden gleichzeitig an die beiden Enden eines waagerechten Glasrohrs gesetzt",
          "fr": "On place les deux cotons en même temps aux deux extrémités d'un tube de verre horizontal",
          "ru": "Ватные тампоны одновременно вставляют в оба конца горизонтальной стеклянной трубки",
          "ar": "توضع قطعتا القطن في اللحظة نفسها عند طرفَي أنبوب زجاجي أفقي",
          "zh": "把两团棉花同时放在水平玻璃管的两端",
          "ku": "Perçeyên pembû di heman demê de li her du serên lûleyeke camê ya asoyî tên danîn"
        },
        {
          "tr": "HCl ve NH3 gazları boru içinde birbirine doğru yayılır",
          "en": "HCl and NH3 gases spread toward each other inside the tube",
          "de": "HCl- und NH3-Gas breiten sich im Rohr aufeinander zu aus",
          "fr": "Les gaz HCl et NH3 se propagent l'un vers l'autre dans le tube",
          "ru": "Газы HCl и NH3 распространяются по трубке навстречу друг другу",
          "ar": "ينتشر غازا HCl وNH3 داخل الأنبوب أحدهما نحو الآخر",
          "zh": "HCl 和 NH3 两种气体在管内相向扩散",
          "ku": "Gazên HCl û NH3 di lûleyê de ber bi hev ve belav dibin"
        },
        {
          "tr": "Gazların karşılaştığı yerde, HCl ucuna daha yakın beyaz NH4Cl halkası oluşur",
          "en": "Where the gases meet, a white NH4Cl ring forms closer to the HCl end",
          "de": "Wo die Gase aufeinandertreffen, bildet sich näher am HCl-Ende ein weißer NH4Cl-Ring",
          "fr": "Là où les gaz se rencontrent, un anneau blanc de NH4Cl se forme plus près de l'extrémité HCl",
          "ru": "В месте встречи газов, ближе к концу с HCl, образуется белое кольцо NH4Cl",
          "ar": "عند موضع التقاء الغازين تتكون حلقة بيضاء من NH4Cl أقرب إلى طرف HCl",
          "zh": "两种气体在靠近 HCl 一端相遇，生成白色的 NH4Cl 环",
          "ku": "Li cihê ku gaz digihîjin hev, nêzîktirî serê HCl, xelekeke spî ya NH4Cl çêdibe"
        }
      ]
    },
    {
      "id": "u13-s03",
      "title": {
        "tr": "Su Üstünde Gaz Toplama",
        "en": "Gas Collection on Water",
        "de": "Gassammlung auf Wasser",
        "fr": "Collecte de gaz sur l'eau",
        "ru": "Собирание газа над водой",
        "ar": "جمع الغاز فوق الماء",
        "zh": "排水法收集气体",
        "ku": "Komkirina Gazê li ser Avê"
      },
      "steps": [
        {
          "tr": "Suyla doldurulan dereceli silindir, su dolu bir kaba ters çevrilerek yerleştirilir",
          "en": "A graduated cylinder filled with water is inverted in a trough of water",
          "de": "Ein mit Wasser gefüllter Messzylinder wird umgekehrt in eine Wanne mit Wasser gestellt",
          "fr": "Une éprouvette graduée remplie d'eau est retournée dans une cuve d'eau",
          "ru": "Мерный цилиндр, заполненный водой, переворачивают и погружают в сосуд с водой",
          "ar": "تُملأ أسطوانة مدرجة بالماء ثم تُنكَّس في حوض ماء",
          "zh": "把装满水的量筒倒立在盛水的水槽中",
          "ku": "Silindireke pîvanê ya bi avê dagirtî di firaxeke tijî av de serûbin tê danîn"
        },
        {
          "tr": "Tepkimede oluşan gaz bir boruyla silindire gönderilir ve suyun üstünde toplanır",
          "en": "The gas formed in the reaction is led into the cylinder through a tube and collects over the water",
          "de": "Das bei der Reaktion entstehende Gas wird über ein Rohr in den Zylinder geleitet und sammelt sich über dem Wasser",
          "fr": "Le gaz formé par la réaction est amené dans l'éprouvette par un tube et s'accumule au-dessus de l'eau",
          "ru": "Газ, образующийся в реакции, по трубке направляют в цилиндр, где он собирается над водой",
          "ar": "يُمرَّر الغاز الناتج من التفاعل عبر أنبوب إلى الأسطوانة فيتجمع فوق الماء",
          "zh": "把反应生成的气体用导管通入量筒，气体聚集在水面上方",
          "ku": "Gaza ku di reaksiyonê de çêdibe bi lûleyekê tê şandin nav silindirê û li ser avê tê berhevkirin"
        },
        {
          "tr": "Silindirdeki toplam basınç (Ptoplam) belirlenir",
          "en": "The total pressure in the cylinder (Ptotal) is determined",
          "de": "Der Gesamtdruck im Zylinder (Pgesamt) wird bestimmt",
          "fr": "On détermine la pression totale dans l'éprouvette (Ptotale)",
          "ru": "Определяют общее давление в цилиндре (Pобщ)",
          "ar": "يُحدَّد الضغط الكلي في الأسطوانة (Ptotal)",
          "zh": "测定量筒内的总压强(P总)",
          "ku": "Zexta giştî ya di silindirê de (Ptotal) tê diyarkirin"
        },
        {
          "tr": "Toplam basınçtan suyun o sıcaklıktaki buhar basıncı çıkarılarak kuru gazın basıncı bulunur",
          "en": "The vapor pressure of water at that temperature is subtracted from the total pressure to find the pressure of the dry gas",
          "de": "Vom Gesamtdruck wird der Dampfdruck des Wassers bei dieser Temperatur abgezogen; so erhält man den Druck des trockenen Gases",
          "fr": "On soustrait de la pression totale la pression de vapeur de l'eau à cette température pour obtenir la pression du gaz sec",
          "ru": "Из общего давления вычитают давление пара воды при данной температуре и получают давление сухого газа",
          "ar": "يُطرح ضغط بخار الماء عند درجة الحرارة تلك من الضغط الكلي فيُحصل على ضغط الغاز الجاف",
          "zh": "从总压中减去该温度下水的蒸气压，得到干燥气体的压强",
          "ku": "Zexta buhara avê ya di wê germahiyê de ji zexta giştî tê kêmkirin û zexta gaza hişk tê dîtin"
        }
      ]
    },
    {
      "id": "u13-s04",
      "title": {
        "tr": "Joule-Thomson Soğuma Aşamaları",
        "en": "Stages of Joule-Thomson Cooling",
        "de": "Ablauf der Joule-Thomson-Abkühlung",
        "fr": "Étapes du refroidissement Joule-Thomson",
        "ru": "Этапы охлаждения газа по Джоулю — Томсону",
        "ar": "التبريد بظاهرة جول-طومسون",
        "zh": "焦耳-汤姆孙效应的降温过程",
        "ku": "Qonaxên sarbûna Joule-Thomson"
      },
      "steps": [
        {
          "tr": "Gerçek gaz yüksek basınç altında sıkıştırılır",
          "en": "A real gas is compressed to high pressure",
          "de": "Ein reales Gas wird auf hohen Druck verdichtet",
          "fr": "Un gaz réel est comprimé à haute pression",
          "ru": "Реальный газ сжимают до высокого давления",
          "ar": "يُضغط غاز حقيقي إلى ضغط مرتفع",
          "zh": "把真实气体压缩至高压",
          "ku": "Gazeke rastîn heta zexta bilind tê pêçandin"
        },
        {
          "tr": "Sıkıştırılmış gaz dar bir delikten (kısma vanası) düşük basınçlı bölgeye genleştirilir",
          "en": "The compressed gas is expanded through a narrow opening (throttling valve) into a low-pressure region",
          "de": "Das verdichtete Gas wird durch eine enge Öffnung (Drosselventil) in einen Bereich niedrigen Drucks entspannt",
          "fr": "Le gaz comprimé est détendu à travers un orifice étroit (détendeur) vers une zone de basse pression",
          "ru": "Сжатый газ расширяется через узкое отверстие (дроссельный вентиль) в область низкого давления",
          "ar": "يتمدد الغاز المضغوط عبر فتحة ضيقة (صمام خانق) إلى منطقة منخفضة الضغط",
          "zh": "被压缩的气体经狭窄小孔（节流阀）膨胀进入低压区域",
          "ku": "Gaza pêçayî ji qulikeke teng (valfa tengkirinê) ber bi herêma zexta nizm tê berfirehkirin"
        },
        {
          "tr": "Genleşen gaz, moleküller arası çekimi yenmek için kendi kinetik enerjisinden harcar",
          "en": "The expanding gas uses part of its own kinetic energy to overcome intermolecular attraction",
          "de": "Das expandierende Gas verbraucht einen Teil seiner kinetischen Energie, um die zwischenmolekulare Anziehung zu überwinden",
          "fr": "Le gaz qui se détend dépense une partie de son énergie cinétique pour vaincre l'attraction intermoléculaire",
          "ru": "Расширяющийся газ тратит часть своей кинетической энергии на преодоление межмолекулярного притяжения",
          "ar": "يستهلك الغاز المتمدد جزءًا من طاقته الحركية للتغلب على التجاذب بين الجزيئات",
          "zh": "膨胀的气体消耗自身部分动能来克服分子间引力",
          "ku": "Gaza ku berfireh dibe ji bo derbaskirina kişandina navmolekulî beşek ji enerjiya xwe ya kînetîk xerc dike"
        },
        {
          "tr": "Tanecikler yavaşladığı için gazın sıcaklığı düşer (oda koşullarında çoğu gaz için)",
          "en": "Because the particles slow down, the temperature of the gas falls (for most gases at room conditions)",
          "de": "Da die Teilchen langsamer werden, sinkt die Temperatur des Gases (für die meisten Gase bei Raumbedingungen)",
          "fr": "Les particules ralentissant, la température du gaz baisse (pour la plupart des gaz dans les conditions ambiantes)",
          "ru": "Частицы замедляются, поэтому температура газа понижается (для большинства газов в комнатных условиях)",
          "ar": "تنخفض درجة حرارة الغاز لتباطؤ جسيماته (لمعظم الغازات في ظروف الغرفة)",
          "zh": "粒子变慢，气体温度降低（室温下的大多数气体如此）",
          "ku": "Ji ber ku perçe hêdî dibin, germahiya gazê dadikeve (ji bo piraniya gazan di şertên odeyê de)"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u13-twin01",
      "stem": {
        "tr": "Aynı sıcaklıktaki CH4 (MA=16) ve SO2 (MA=64) gazları, 100 cm'lik bir cam borunun iki ucundan aynı anda bırakılıyor. Buna göre gazlar, CH4'ün bırakıldığı uçtan kaç cm uzakta karşılaşır?",
        "en": "CH4 (MA=16) and SO2 (MA=64) gases are released at the same moment from the two ends of a 100 cm glass tube at the same temperature. How many cm from the CH4 end do they meet?",
        "de": "CH4-Gas (MA=16) und SO2-Gas (MA=64) werden bei gleicher Temperatur gleichzeitig an den beiden Enden eines 100 cm langen Glasrohrs freigesetzt. In wie vielen cm Entfernung vom CH4-Ende treffen die Gase aufeinander?",
        "fr": "Les gaz CH4 (MA=16) et SO2 (MA=64), à la même température, sont libérés simultanément aux deux extrémités d'un tube de verre de 100 cm. À combien de cm de l'extrémité CH4 les gaz se rencontrent-ils ?",
        "ru": "Газы CH4 (MA=16) и SO2 (MA=64) при одинаковой температуре одновременно выпускают с двух концов стеклянной трубки длиной 100 см. На каком расстоянии (в см) от конца с CH4 газы встретятся?",
        "ar": "عند درجة الحرارة نفسها أُطلق غازا CH4 (MA=16) وSO2 (MA=64) في اللحظة نفسها من طرفي أنبوب زجاجي طوله 100 cm. على بُعد كم cm من طرف CH4 يلتقي الغازان؟",
        "zh": "相同温度下，从 100 cm 长玻璃管的两端同时放入 CH4(M = 16 g/mol)和 SO2(M = 64 g/mol)气体。两种气体在距 CH4 一端多少厘米处相遇？",
        "ku": "Gazên CH4 (MA=16) û SO2 (MA=64) ên di heman germahiyê de, di heman demê de ji her du serên lûleyeke camê ya 100 cm tên berdan. Gaz li çend cm dûrî serê CH4 digihîjin hev?"
      },
      "options": [
        {
          "tr": "66,7 cm",
          "en": "66.7 cm",
          "de": "66,7 cm",
          "fr": "66,7 cm",
          "ru": "66,7 см",
          "ar": "66.7 cm",
          "zh": "66.7 cm",
          "ku": "66,7 cm"
        },
        {
          "tr": "50,0 cm",
          "en": "50.0 cm",
          "de": "50,0 cm",
          "fr": "50,0 cm",
          "ru": "50,0 см",
          "ar": "50.0 cm",
          "zh": "50.0 cm",
          "ku": "50,0 cm"
        },
        {
          "tr": "80,0 cm",
          "en": "80.0 cm",
          "de": "80,0 cm",
          "fr": "80,0 cm",
          "ru": "80,0 см",
          "ar": "80.0 cm",
          "zh": "80.0 cm",
          "ku": "80,0 cm"
        },
        {
          "tr": "33,3 cm",
          "en": "33.3 cm",
          "de": "33,3 cm",
          "fr": "33,3 cm",
          "ru": "33,3 см",
          "ar": "33.3 cm",
          "zh": "33.3 cm",
          "ku": "33,3 cm"
        },
        {
          "tr": "25,0 cm",
          "en": "25.0 cm",
          "de": "25,0 cm",
          "fr": "25,0 cm",
          "ru": "25,0 см",
          "ar": "25.0 cm",
          "zh": "25.0 cm",
          "ku": "25,0 cm"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. Aynı sürede CH4 2x, SO2 x kadar yol alır. 3x = 100 cm → x = 33,3 cm. Gazlar, CH4'ün bırakıldığı uçtan 2x = 66,7 cm uzakta karşılaşır. Hızları eşit sanan öğrenci 50,0 cm; SO2'nin aldığı yolu (x) yazan ise 33,3 cm bulur.",
        "en": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. While CH4 travels 2x, SO2 travels x. 3x = 100 cm → x = 33.3 cm. They meet 2x = 66.7 cm from the CH4 end. A student who assumes equal rates gets 50.0 cm; one who gives the distance travelled by SO2 (x) gets 33.3 cm.",
        "de": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. Während CH4 die Strecke 2x zurücklegt, legt SO2 x zurück. 3x = 100 cm → x = 33,3 cm. Sie treffen sich 2x = 66,7 cm vom CH4-Ende entfernt. Wer gleiche Geschwindigkeiten annimmt, erhält 50,0 cm; wer die von SO2 zurückgelegte Strecke (x) angibt, 33,3 cm.",
        "fr": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. Pendant que CH4 parcourt 2x, SO2 parcourt x. 3x = 100 cm → x = 33,3 cm. Ils se rencontrent à 2x = 66,7 cm de l'extrémité CH4. L'élève qui suppose des vitesses égales trouve 50,0 cm ; celui qui donne la distance parcourue par SO2 (x) trouve 33,3 cm.",
        "ru": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. Пока CH4 проходит 2x, SO2 проходит x. 3x = 100 см → x = 33,3 см. Газы встречаются на расстоянии 2x = 66,7 см от конца с CH4. Ученик, считающий скорости равными, получит 50,0 см; указавший путь, пройденный SO2 (x), — 33,3 см.",
        "ar": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. بينما يقطع CH4 مسافة 2x يقطع SO2 مسافة x. 3x = 100 cm → x = 33.3 cm. يلتقي الغازان على بُعد 2x = 66.7 cm من طرف CH4. الطالب الذي يفترض تساوي السرعتين يحصل على 50.0 cm، ومن يكتب المسافة التي قطعها SO2 (x) يحصل على 33.3 cm.",
        "zh": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1。相同时间内 CH4 走 2x，SO2 走 x。3x = 100 cm → x = 33.3 cm。两者在距 CH4 端 2x = 66.7 cm 处相遇。认为两者速率相等的学生得到 50.0 cm；写出 SO2 所走路程(x)的学生得到 33.3 cm。",
        "ku": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. Dema CH4 rêya 2x digire, SO2 rêya x digire. 3x = 100 cm → x = 33,3 cm. Ew li 2x = 66,7 cm dûrî serê CH4 digihîjin hev. Xwendekarê ku lezan wekhev dihesibîne 50,0 cm dibîne; yê ku rêya SO2 girtiye (x) dinivîse 33,3 cm dibîne."
      }
    },
    {
      "id": "u13-twin02",
      "stem": {
        "tr": "Pistonlu bir kapta, bir miktar sıvı su ile su üstünde toplanmış He gazı bulunmaktadır. Sabit sıcaklıkta piston itilerek gaz hacmi yarıya indiriliyor ve kapta hâlâ sıvı su bulunuyor. Buna göre He gazının kısmi basıncı ve suyun buhar basıncı nasıl değişir?",
        "en": "A container fitted with a piston holds some liquid water and He gas collected over the water. At constant temperature the piston is pushed in until the gas volume is halved, and liquid water is still present. How do the partial pressure of He and the vapor pressure of water change?",
        "de": "In einem Gefäß mit Kolben befinden sich etwas flüssiges Wasser und über dem Wasser aufgefangenes He-Gas. Bei konstanter Temperatur wird der Kolben hineingeschoben, bis das Gasvolumen halbiert ist; flüssiges Wasser ist weiterhin vorhanden. Wie ändern sich der Partialdruck von He und der Dampfdruck des Wassers?",
        "fr": "Un récipient à piston contient un peu d'eau liquide et du gaz He recueilli sur l'eau. À température constante, on enfonce le piston jusqu'à réduire de moitié le volume gazeux ; il reste de l'eau liquide. Comment varient la pression partielle de He et la pression de vapeur de l'eau ?",
        "ru": "В сосуде с поршнем находятся немного жидкой воды и газ He, собранный над водой. При постоянной температуре поршень вдвигают так, что объём газа уменьшается вдвое; жидкая вода в сосуде остаётся. Как изменятся парциальное давление He и давление пара воды?",
        "ar": "يحتوي وعاء ذو مكبس على كمية من الماء السائل وعلى غاز He مجمَّع فوق الماء. عند درجة حرارة ثابتة يُدفع المكبس حتى ينخفض حجم الغاز إلى النصف، ويبقى في الوعاء ماء سائل. كيف يتغير الضغط الجزئي لغاز He وضغط بخار الماء؟",
        "zh": "带活塞的容器中有少量液态水，水面上方是用排水法收集的 He。恒温下推动活塞使气体体积减小一半，容器中仍有液态水。He 的分压和水的蒸气压分别如何变化？",
        "ku": "Di firaxeke bi piston de hinek ava şil û gaza He ya ku li ser avê hatiye berhevkirin heye. Di germahiya sabît de piston tê dehfdan heta ku qebareya gazê nîvî dibe, û di firaxê de hîn jî ava şil heye. Zexta qismî ya He û zexta buhara avê çawa diguherin?"
      },
      "options": [
        {
          "tr": "He'nin kısmi basıncı 2 katına çıkar, suyun buhar basıncı değişmez",
          "en": "He pressure doubles, vapor pressure of water does not change",
          "de": "Der He-Druck verdoppelt sich, der Dampfdruck des Wassers ändert sich nicht",
          "fr": "La pression de He double, la pression de vapeur de l'eau ne change pas",
          "ru": "Парциальное давление He увеличится в 2 раза, давление водяного пара не изменится",
          "ar": "يتضاعف الضغط الجزئي لـ He، ولا يتغير ضغط بخار الماء",
          "zh": "He 的分压变为原来的2倍，水的蒸气压不变",
          "ku": "Zexta He du qat dibe, zexta buhara avê naguhere"
        },
        {
          "tr": "Her ikisi de 2 katına çıkar",
          "en": "Both double",
          "de": "Beide verdoppeln sich",
          "fr": "Les deux doublent",
          "ru": "Оба давления увеличатся в 2 раза",
          "ar": "يتضاعف كلاهما",
          "zh": "两者都变为原来的2倍",
          "ku": "Her du jî du qat dibin"
        },
        {
          "tr": "Her ikisi de değişmez",
          "en": "Neither changes",
          "de": "Keiner der beiden ändert sich",
          "fr": "Aucune des deux ne change",
          "ru": "Оба давления не изменятся",
          "ar": "لا يتغير أيٌّ منهما",
          "zh": "两者都不变",
          "ku": "Tu yek ji wan naguhere"
        },
        {
          "tr": "He'nin kısmi basıncı değişmez, suyun buhar basıncı artar",
          "en": "He pressure does not change, water vapor pressure increases",
          "de": "Der He-Druck ändert sich nicht, der Wasserdampfdruck steigt",
          "fr": "La pression de He ne change pas, la pression de vapeur de l'eau augmente",
          "ru": "Парциальное давление He не изменится, давление водяного пара увеличится",
          "ar": "لا يتغير الضغط الجزئي لـ He، ويزداد ضغط بخار الماء",
          "zh": "He 的分压不变，水的蒸气压增大",
          "ku": "Zexta He naguhere, zexta buhara avê zêde dibe"
        },
        {
          "tr": "He'nin kısmi basıncı 4 katına çıkar, suyun buhar basıncı azalır",
          "en": "He pressure increases 4 times, water vapor pressure decreases",
          "de": "Der He-Druck vervierfacht sich, der Wasserdampfdruck nimmt ab",
          "fr": "La pression de He est multipliée par 4, la pression de vapeur de l'eau diminue",
          "ru": "Парциальное давление He увеличится в 4 раза, давление водяного пара уменьшится",
          "ar": "يزداد الضغط الجزئي لـ He إلى 4 أمثاله، وينخفض ضغط بخار الماء",
          "zh": "He 的分压变为原来的4倍，水的蒸气压减小",
          "ku": "Zexta He 4 qat dibe, zexta buhara avê kêm dibe"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "He gazı için sabit sıcaklıkta Boyle yasası geçerlidir: hacim yarıya inince kısmi basıncı 2 katına çıkar. Suyun buhar basıncı ise kapta sıvı su bulundukça yalnızca sıcaklığa bağlıdır; hacim küçülünce su buharının bir kısmı yoğuşur ve buhar basıncı aynı kalır. Her iki basıncın da 2 katına çıktığını düşünen öğrenci, Boyle yasasını su buharına da uygulamış olur.",
        "en": "At constant temperature He obeys Boyle's law: when the volume is halved its partial pressure doubles. The vapor pressure of water depends only on temperature as long as liquid water is present; when the volume shrinks, some water vapor condenses and the vapor pressure stays the same. A student who thinks both pressures double has wrongly applied Boyle's law to the water vapor as well.",
        "de": "Für He gilt bei konstanter Temperatur das Boylesche Gesetz: Wird das Volumen halbiert, verdoppelt sich sein Partialdruck. Der Dampfdruck des Wassers hängt, solange flüssiges Wasser vorhanden ist, nur von der Temperatur ab; bei kleinerem Volumen kondensiert ein Teil des Wasserdampfs, und der Dampfdruck bleibt gleich. Wer meint, beide Drücke verdoppelten sich, wendet das Boylesche Gesetz fälschlich auch auf den Wasserdampf an.",
        "fr": "À température constante, He obéit à la loi de Boyle : quand le volume est réduit de moitié, sa pression partielle double. La pression de vapeur de l'eau ne dépend que de la température tant qu'il reste de l'eau liquide ; quand le volume diminue, une partie de la vapeur d'eau se condense et la pression de vapeur reste la même. L'élève qui pense que les deux pressions doublent applique à tort la loi de Boyle à la vapeur d'eau.",
        "ru": "При постоянной температуре для He выполняется закон Бойля — Мариотта: при уменьшении объёма вдвое его парциальное давление увеличивается в 2 раза. Давление водяного пара, пока в сосуде есть жидкая вода, зависит только от температуры; при уменьшении объёма часть пара конденсируется, и давление пара остаётся прежним. Ученик, считающий, что оба давления увеличиваются в 2 раза, ошибочно применяет закон Бойля — Мариотта и к водяному пару.",
        "ar": "عند ثبات درجة الحرارة يخضع He لقانون بويل: عندما ينخفض الحجم إلى النصف يتضاعف ضغطه الجزئي. أما ضغط بخار الماء فيعتمد على درجة الحرارة فقط ما دام الماء السائل موجودًا؛ فعند نقصان الحجم يتكاثف جزء من بخار الماء ويبقى ضغط البخار كما هو. والطالب الذي يظن أن الضغطين يتضاعفان يطبق قانون بويل خطأً على بخار الماء أيضًا.",
        "zh": "恒温下 He 遵循波义耳定律：体积减半，其分压变为原来的2倍。只要容器中有液态水，水的蒸气压只取决于温度；体积减小时部分水蒸气凝结，蒸气压保持不变。认为两个压强都变为2倍的学生，是把波义耳定律也错误地用到了水蒸气上。",
        "ku": "Di germahiya sabît de ji bo He zagona Boyle derbas dibe: dema qebare nîvî dibe, zexta wê ya qismî du qat dibe. Zexta buhara avê, heta ku di firaxê de ava şil hebe, tenê bi germahiyê ve girêdayî ye; dema qebare biçûk dibe beşek ji buhara avê şil dibe û zexta buharê wek xwe dimîne. Xwendekarê ku difikire her du zext du qat dibin, zagona Boyle bi şaşî li ser buhara avê jî bi kar tîne."
      }
    },
    {
      "id": "u13-twin03",
      "stem": {
        "tr": "Aynı sıcaklık ve basınçta, eşit hacimdeki He gazı küçük bir delikten 10 saniyede, X gazı ise aynı delikten 40 saniyede efüzlenmektedir. Buna göre X gazının mol kütlesi kaç g/mol'dür? (He = 4 g/mol)",
        "en": "At the same temperature and pressure, equal volumes of He gas and X gas effuse through the same small hole in 10 s and 40 s respectively. What is the molar mass of gas X in g/mol? (He = 4 g/mol)",
        "de": "Bei gleicher Temperatur und gleichem Druck effundieren gleiche Volumina He-Gas und X-Gas durch dieselbe kleine Öffnung in 10 s bzw. 40 s. Wie groß ist die molare Masse von X in g/mol? (He = 4 g/mol)",
        "fr": "À même température et même pression, des volumes égaux de gaz He et de gaz X s'effusent par le même petit orifice en 10 s et en 40 s respectivement. Quelle est la masse molaire du gaz X en g/mol ? (He = 4 g/mol)",
        "ru": "При одинаковых температуре и давлении равные объёмы газа He и газа X вытекают (эффундируют) через одно и то же маленькое отверстие за 10 с и 40 с соответственно. Чему равна молярная масса газа X (г/моль)? (He = 4 г/моль)",
        "ar": "عند درجة الحرارة والضغط نفسيهما، يتدفق حجمان متساويان من غاز He وغاز X عبر الثقب الصغير نفسه في 10 s و40 s على الترتيب. كم تبلغ الكتلة المولية للغاز X بوحدة g/mol؟ (He = 4 g/mol)",
        "zh": "在相同温度和压强下，等体积的 He 和气体 X 通过同一小孔泻流，分别需要 10 s 和 40 s。气体 X 的摩尔质量是多少 g/mol？(He = 4 g/mol)",
        "ku": "Di heman germahî û zextê de, qebareyên wekhev ên gaza He û gaza X ji heman qulika biçûk bi rêzê di 10 s û 40 s de efûzyon dibin. Girseya molar a gaza X çend g/mol e? (He = 4 g/mol)"
      },
      "options": [
        {
          "tr": "8 g/mol",
          "en": "8 g/mol",
          "de": "8 g/mol",
          "fr": "8 g/mol",
          "ru": "8 г/моль",
          "ar": "8 g/mol",
          "zh": "8 g/mol",
          "ku": "8 g/mol"
        },
        {
          "tr": "16 g/mol",
          "en": "16 g/mol",
          "de": "16 g/mol",
          "fr": "16 g/mol",
          "ru": "16 г/моль",
          "ar": "16 g/mol",
          "zh": "16 g/mol",
          "ku": "16 g/mol"
        },
        {
          "tr": "32 g/mol",
          "en": "32 g/mol",
          "de": "32 g/mol",
          "fr": "32 g/mol",
          "ru": "32 г/моль",
          "ar": "32 g/mol",
          "zh": "32 g/mol",
          "ku": "32 g/mol"
        },
        {
          "tr": "64 g/mol",
          "en": "64 g/mol",
          "de": "64 g/mol",
          "fr": "64 g/mol",
          "ru": "64 г/моль",
          "ar": "64 g/mol",
          "zh": "64 g/mol",
          "ku": "64 g/mol"
        },
        {
          "tr": "256 g/mol",
          "en": "256 g/mol",
          "de": "256 g/mol",
          "fr": "256 g/mol",
          "ru": "256 г/моль",
          "ar": "256 g/mol",
          "zh": "256 g/mol",
          "ku": "256 g/mol"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Eşit hacimler için süre hızla ters orantılıdır: tX/tHe = vHe/vX = sqrt(MX/MHe). 40/10 = 4 = sqrt(MX/4) → MX/4 = 16 → MX = 64 g/mol. Süre oranını karekök ilişkisini unutarak doğrudan mol kütlesi oranı sanan öğrenci 4 × 4 = 16 g/mol bulur.",
        "en": "For equal volumes the time is inversely proportional to the rate: tX/tHe = vHe/vX = sqrt(MX/MHe). 40/10 = 4 = sqrt(MX/4) → MX/4 = 16 → MX = 64 g/mol. A student who forgets the square root and takes the time ratio as the molar mass ratio gets 4 × 4 = 16 g/mol.",
        "de": "Bei gleichen Volumina ist die Zeit umgekehrt proportional zur Geschwindigkeit: tX/tHe = vHe/vX = sqrt(MX/MHe). 40/10 = 4 = sqrt(MX/4) → MX/4 = 16 → MX = 64 g/mol. Wer die Wurzel vergisst und das Zeitverhältnis als Molmassenverhältnis nimmt, erhält 4 × 4 = 16 g/mol.",
        "fr": "Pour des volumes égaux, le temps est inversement proportionnel à la vitesse : tX/tHe = vHe/vX = sqrt(MX/MHe). 40/10 = 4 = sqrt(MX/4) → MX/4 = 16 → MX = 64 g/mol. L'élève qui oublie la racine carrée et prend le rapport des temps pour le rapport des masses molaires trouve 4 × 4 = 16 g/mol.",
        "ru": "Для равных объёмов время обратно пропорционально скорости: tX/tHe = vHe/vX = sqrt(MX/MHe). 40/10 = 4 = sqrt(MX/4) → MX/4 = 16 → MX = 64 г/моль. Ученик, забывший про корень и принявший отношение времён за отношение молярных масс, получит 4 × 4 = 16 г/моль.",
        "ar": "للحجوم المتساوية يتناسب الزمن عكسيًا مع السرعة: tX/tHe = vHe/vX = sqrt(MX/MHe). 40/10 = 4 = sqrt(MX/4) → MX/4 = 16 → MX = 64 g/mol. الطالب الذي ينسى الجذر التربيعي ويعدّ نسبة الزمنين نسبةً للكتل المولية يحصل على 4 × 4 = 16 g/mol.",
        "zh": "等体积时，时间与速率成反比：tX/tHe = vHe/vX = sqrt(MX/MHe)。40/10 = 4 = sqrt(MX/4) → MX/4 = 16 → MX = 64 g/mol。忘记开平方、把时间比直接当作摩尔质量比的学生会得到 4 × 4 = 16 g/mol。",
        "ku": "Ji bo qebareyên wekhev dem bi lezê re berevajî têkildar e: tX/tHe = vHe/vX = sqrt(MX/MHe). 40/10 = 4 = sqrt(MX/4) → MX/4 = 16 → MX = 64 g/mol. Xwendekarê ku koka çargoşe ji bîr dike û rêjeya deman wekî rêjeya girseyên molar digire, 4 × 4 = 16 g/mol dibîne."
      }
    },
    {
      "id": "u13-twin04",
      "stem": {
        "tr": "Kritik sıcaklıkları X: 132 °C, Y: 31 °C, Z: −119 °C olan üç madde 25 °C'de gaz fazında bulunmaktadır. Buna göre; I. 25 °C'de X ve Y buhar, Z ise gaz olarak adlandırılır. II. Z, 25 °C'de yalnızca basınç artırılarak sıvılaştırılabilir. III. Y, 40 °C'de yalnızca basınç artırılarak sıvılaştırılabilir. yargılarından hangileri doğrudur?",
        "en": "Three substances with critical temperatures X: 132 °C, Y: 31 °C and Z: −119 °C are in the gas phase at 25 °C. Which of the following statements are correct? I. At 25 °C, X and Y are called vapors, while Z is called a gas. II. Z can be liquefied at 25 °C by increasing the pressure alone. III. Y can be liquefied at 40 °C by increasing the pressure alone.",
        "de": "Drei Stoffe mit den kritischen Temperaturen X: 132 °C, Y: 31 °C und Z: −119 °C liegen bei 25 °C gasförmig vor. Welche der folgenden Aussagen sind richtig? I. Bei 25 °C bezeichnet man X und Y als Dampf, Z als Gas. II. Z lässt sich bei 25 °C allein durch Druckerhöhung verflüssigen. III. Y lässt sich bei 40 °C allein durch Druckerhöhung verflüssigen.",
        "fr": "Trois substances dont les températures critiques sont X : 132 °C, Y : 31 °C et Z : −119 °C sont en phase gazeuse à 25 °C. Lesquelles des affirmations suivantes sont correctes ? I. À 25 °C, X et Y sont appelés vapeurs et Z est appelé gaz. II. Z peut être liquéfié à 25 °C par simple augmentation de la pression. III. Y peut être liquéfié à 40 °C par simple augmentation de la pression.",
        "ru": "Три вещества с критическими температурами X: 132 °C, Y: 31 °C и Z: −119 °C находятся при 25 °C в газовой фазе. Какие из утверждений верны? I. При 25 °C X и Y называют паром, а Z — газом. II. Z можно сжижить при 25 °C только повышением давления. III. Y можно сжижить при 40 °C только повышением давления.",
        "ar": "ثلاث مواد درجات حرارتها الحرجة X: 132 °C وY: 31 °C وZ: −119 °C توجد في الطور الغازي عند 25 °C. أيّ العبارات الآتية صحيحة؟ I. عند 25 °C يُسمّى X وY بخارًا ويُسمّى Z غازًا. II. يمكن تسييل Z عند 25 °C بزيادة الضغط وحدها. III. يمكن تسييل Y عند 40 °C بزيادة الضغط وحدها.",
        "zh": "临界温度分别为 X 132 °C、Y 31 °C、Z −119 °C 的三种物质在 25 °C 时均处于气相。有下列说法：I. 25 °C 时 X 和 Y 称为蒸气，Z 称为气体。II. 25 °C 时仅靠增大压强就能使 Z 液化。III. 40 °C 时仅靠增大压强就能使 Y 液化。其中正确的是哪些？",
        "ku": "Sê madeyên ku germahiyên wan ên krîtîk X: 132 °C, Y: 31 °C û Z: −119 °C ne, di 25 °C de di qonaxa gazê de ne. Kîjan ji van gotinan rast in? I. Di 25 °C de ji X û Y re buhar, ji Z re gaz tê gotin. II. Z di 25 °C de tenê bi zêdekirina zextê dikare were şilkirin. III. Y di 40 °C de tenê bi zêdekirina zextê dikare were şilkirin."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "I only",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "II only",
          "de": "Nur II",
          "fr": "II seulement",
          "ru": "Только II",
          "ar": "II فقط",
          "zh": "仅II",
          "ku": "Tenê II"
        },
        {
          "tr": "I ve II",
          "en": "I and II",
          "de": "I und II",
          "fr": "I et II",
          "ru": "I и II",
          "ar": "I و II",
          "zh": "I和II",
          "ku": "I û II"
        },
        {
          "tr": "I ve III",
          "en": "I and III",
          "de": "I und III",
          "fr": "I et III",
          "ru": "I и III",
          "ar": "I و III",
          "zh": "I和III",
          "ku": "I û III"
        },
        {
          "tr": "II ve III",
          "en": "II and III",
          "de": "II und III",
          "fr": "II et III",
          "ru": "II и III",
          "ar": "II و III",
          "zh": "II和III",
          "ku": "II û III"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Bir madde kritik sıcaklığının altındaysa buhar, üstündeyse gazdır. 25 °C, X (132 °C) ve Y (31 °C) için kritik sıcaklığın altında, Z (−119 °C) için üstündedir; I doğrudur. Kritik sıcaklığının üzerindeki bir madde yalnızca basınçla sıvılaştırılamaz: Z 25 °C'de, Y de 40 °C'de (31 °C'nin üstü) kritik sıcaklığının üzerinde olduğundan II ve III yanlıştır. Doğru olan yalnızca I'dir.",
        "en": "A substance below its critical temperature is a vapor; above it, a gas. 25 °C is below the critical temperatures of X (132 °C) and Y (31 °C) and above that of Z (−119 °C), so I is correct. A substance above its critical temperature cannot be liquefied by pressure alone: Z at 25 °C and Y at 40 °C (above 31 °C) are both above their critical temperatures, so II and III are false. Only I is correct.",
        "de": "Unterhalb seiner kritischen Temperatur ist ein Stoff Dampf, oberhalb Gas. 25 °C liegt unter den kritischen Temperaturen von X (132 °C) und Y (31 °C) und über der von Z (−119 °C); I ist richtig. Oberhalb der kritischen Temperatur ist keine Verflüssigung allein durch Druck möglich: Z bei 25 °C und Y bei 40 °C (über 31 °C) liegen darüber, daher sind II und III falsch. Nur I ist richtig.",
        "fr": "Une substance en dessous de sa température critique est une vapeur, au-dessus c'est un gaz. 25 °C est inférieur aux températures critiques de X (132 °C) et Y (31 °C) et supérieur à celle de Z (−119 °C) : I est vraie. Au-dessus de sa température critique, une substance ne se liquéfie pas par simple compression : Z à 25 °C et Y à 40 °C (au-dessus de 31 °C) sont dans ce cas, donc II et III sont fausses. Seule I est correcte.",
        "ru": "Ниже своей критической температуры вещество называют паром, выше — газом. Температура 25 °C ниже критических температур X (132 °C) и Y (31 °C) и выше критической температуры Z (−119 °C), поэтому I верно. Выше критической температуры вещество нельзя сжижить одним давлением: Z при 25 °C и Y при 40 °C (выше 31 °C) находятся выше своих критических температур, поэтому II и III неверны. Верно только I.",
        "ar": "تكون المادة بخارًا إذا كانت تحت درجة حرارتها الحرجة، وغازًا إذا كانت فوقها. 25 °C أقل من درجتي X (132 °C) وY (31 °C) الحرجتين وأعلى من درجة Z (−119 °C)، لذا I صحيحة. المادة فوق درجة حرارتها الحرجة لا تتسيّل بالضغط وحده: Z عند 25 °C وY عند 40 °C (أعلى من 31 °C) كلاهما فوق درجة الحرارة الحرجة، لذا II وIII خاطئتان. الصحيحة I فقط.",
        "zh": "物质低于其临界温度时称为蒸气，高于临界温度时称为气体。25 °C 低于 X(132 °C)和 Y(31 °C)的临界温度，高于 Z(−119 °C)的临界温度，所以 I 正确。高于临界温度的物质仅靠加压不能液化：25 °C 的 Z 和 40 °C(高于 31 °C)的 Y 都高于各自的临界温度，所以 II 和 III 错误。只有 I 正确。",
        "ku": "Madeyek di bin germahiya xwe ya krîtîk de buhar e, li ser wê gaz e. 25 °C ji germahiyên krîtîk ên X (132 °C) û Y (31 °C) nizmtir û ji ya Z (−119 °C) bilindtir e; I rast e. Madeya li ser germahiya xwe ya krîtîk tenê bi zextê şil nabe: Z di 25 °C de û Y di 40 °C de (li ser 31 °C) li ser germahiya xwe ya krîtîk in, ji ber vê yekê II û III şaş in. Tenê I rast e."
      }
    },
    {
      "id": "u13-twin05",
      "stem": {
        "tr": "Sabit hacimli bir kapta eşit kütlelerde H2 ve He gazları bulunmaktadır. Kaptaki toplam basınç 1,2 atm olduğuna göre He gazının kısmi basıncı kaç atm'dir? (H = 1, He = 4 g/mol)",
        "en": "A rigid container holds equal masses of H2 and He gases. If the total pressure in the container is 1.2 atm, what is the partial pressure of He in atm? (H = 1, He = 4 g/mol)",
        "de": "Ein Behälter mit konstantem Volumen enthält gleiche Massen H2- und He-Gas. Der Gesamtdruck beträgt 1,2 atm. Wie groß ist der Partialdruck von He in atm? (H = 1, He = 4 g/mol)",
        "fr": "Un récipient de volume constant contient des masses égales de H2 et de He gazeux. La pression totale étant de 1,2 atm, quelle est la pression partielle de He en atm ? (H = 1, He = 4 g/mol)",
        "ru": "В сосуде постоянного объёма находятся газы H2 и He равной массы. Общее давление в сосуде 1,2 атм. Чему равно парциальное давление He (атм)? (H = 1, He = 4 г/моль)",
        "ar": "يحتوي وعاء ثابت الحجم على كتلتين متساويتين من غازي H2 وHe. إذا كان الضغط الكلي في الوعاء 1.2 atm، فكم يبلغ الضغط الجزئي لغاز He بوحدة atm؟ (H = 1، He = 4 g/mol)",
        "zh": "一个恒容容器中装有质量相等的 H2 和 He 两种气体。若容器内总压强为 1.2 atm，He 的分压是多少 atm？(H = 1，He = 4 g/mol)",
        "ku": "Di firaxeke bi qebareya sabît de girseyên wekhev ên gazên H2 û He hene. Heke zexta tevahî ya firaxê 1,2 atm be, zexta qismî ya He çend atm e? (H = 1, He = 4 g/mol)"
      },
      "options": [
        {
          "tr": "0,3 atm",
          "en": "0.3 atm",
          "de": "0,3 atm",
          "fr": "0,3 atm",
          "ru": "0,3 атм",
          "ar": "0.3 atm",
          "zh": "0.3 atm",
          "ku": "0,3 atm"
        },
        {
          "tr": "0,4 atm",
          "en": "0.4 atm",
          "de": "0,4 atm",
          "fr": "0,4 atm",
          "ru": "0,4 атм",
          "ar": "0.4 atm",
          "zh": "0.4 atm",
          "ku": "0,4 atm"
        },
        {
          "tr": "0,6 atm",
          "en": "0.6 atm",
          "de": "0,6 atm",
          "fr": "0,6 atm",
          "ru": "0,6 атм",
          "ar": "0.6 atm",
          "zh": "0.6 atm",
          "ku": "0,6 atm"
        },
        {
          "tr": "0,8 atm",
          "en": "0.8 atm",
          "de": "0,8 atm",
          "fr": "0,8 atm",
          "ru": "0,8 атм",
          "ar": "0.8 atm",
          "zh": "0.8 atm",
          "ku": "0,8 atm"
        },
        {
          "tr": "0,9 atm",
          "en": "0.9 atm",
          "de": "0,9 atm",
          "fr": "0,9 atm",
          "ru": "0,9 атм",
          "ar": "0.9 atm",
          "zh": "0.9 atm",
          "ku": "0,9 atm"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Her iki gazın kütlesi m olsun: n(H2) = m/2, n(He) = m/4. Mol oranı n(H2) : n(He) = 2 : 1 olduğundan X(He) = 1/3'tür. P(He) = 1/3 × 1,2 = 0,4 atm. Eşit kütleyi eşit mol sanıp toplam basıncı ikiye bölen öğrenci 0,6 atm; mol kesirlerini ters eşleştiren ise H2'nin kısmi basıncı olan 0,8 atm'yi bulur.",
        "en": "Let the mass of each gas be m: n(H2) = m/2, n(He) = m/4. The mole ratio n(H2) : n(He) = 2 : 1, so X(He) = 1/3. P(He) = 1/3 × 1.2 = 0.4 atm. A student who treats equal masses as equal moles and halves the total pressure gets 0.6 atm; one who swaps the mole fractions gets 0.8 atm, which is the partial pressure of H2.",
        "de": "Die Masse jedes Gases sei m: n(H2) = m/2, n(He) = m/4. Das Stoffmengenverhältnis n(H2) : n(He) = 2 : 1, also X(He) = 1/3. P(He) = 1/3 × 1,2 = 0,4 atm. Wer gleiche Massen für gleiche Stoffmengen hält und den Gesamtdruck halbiert, erhält 0,6 atm; wer die Stoffmengenanteile vertauscht, erhält 0,8 atm, den Partialdruck von H2.",
        "fr": "Soit m la masse de chaque gaz : n(H2) = m/2, n(He) = m/4. Le rapport molaire n(H2) : n(He) = 2 : 1, donc X(He) = 1/3. P(He) = 1/3 × 1,2 = 0,4 atm. L'élève qui confond masses égales et quantités égales et divise la pression totale par deux trouve 0,6 atm ; celui qui inverse les fractions molaires trouve 0,8 atm, la pression partielle de H2.",
        "ru": "Пусть масса каждого газа m: n(H2) = m/2, n(He) = m/4. Отношение количеств n(H2) : n(He) = 2 : 1, значит X(He) = 1/3. P(He) = 1/3 × 1,2 = 0,4 атм. Ученик, принявший равные массы за равные количества и поделивший общее давление пополам, получит 0,6 атм; перепутавший мольные доли получит 0,8 атм — парциальное давление H2.",
        "ar": "لتكن كتلة كل غاز m: n(H2) = m/2 وn(He) = m/4. النسبة المولية n(H2) : n(He) = 2 : 1، إذن X(He) = 1/3. P(He) = 1/3 × 1.2 = 0.4 atm. الطالب الذي يعدّ الكتل المتساوية مولات متساوية ويقسم الضغط الكلي على اثنين يحصل على 0.6 atm، ومن يعكس الكسور المولية يحصل على 0.8 atm وهو الضغط الجزئي لـ H2.",
        "zh": "设每种气体质量为 m：n(H2) = m/2，n(He) = m/4。物质的量之比 n(H2) : n(He) = 2 : 1，所以 X(He) = 1/3。P(He) = 1/3 × 1.2 = 0.4 atm。把等质量误当作等物质的量、把总压平分的学生得到 0.6 atm；把物质的量分数对调的学生得到 0.8 atm，那是 H2 的分压。",
        "ku": "Bila girseya her gazekê m be: n(H2) = m/2, n(He) = m/4. Rêjeya molan n(H2) : n(He) = 2 : 1 e, ji ber vê yekê X(He) = 1/3. P(He) = 1/3 × 1,2 = 0,4 atm. Xwendekarê ku girseyên wekhev wekî molên wekhev dihesibîne û zexta tevahî dike du par, 0,6 atm dibîne; yê ku kesrên molê berevajî dike 0,8 atm dibîne, ku zexta qismî ya H2 ye."
      }
    },
    {
      "id": "u13-twin06",
      "stem": {
        "tr": "Aynı sıcaklıkta bulunan He ve SO2 gazları ile ilgili; I. Taneciklerinin ortalama kinetik enerjileri eşittir. II. He taneciklerinin ortalama hızı, SO2 moleküllerinin ortalama hızının 4 katıdır. III. Mutlak sıcaklık 2 katına çıkarılırsa her iki gazın ortalama kinetik enerjisi de 2 katına çıkar. yargılarından hangileri doğrudur? (He = 4, SO2 = 64 g/mol)",
        "en": "He and SO2 gases are at the same temperature. Which of the following statements are correct? I. The average kinetic energies of their particles are equal. II. The average speed of He particles is 4 times that of SO2 molecules. III. If the absolute temperature is doubled, the average kinetic energy of both gases doubles. (He = 4, SO2 = 64 g/mol)",
        "de": "He- und SO2-Gas haben dieselbe Temperatur. Welche Aussagen sind richtig? I. Die mittleren kinetischen Energien ihrer Teilchen sind gleich. II. Die mittlere Geschwindigkeit der He-Teilchen ist 4-mal so groß wie die der SO2-Moleküle. III. Wird die absolute Temperatur verdoppelt, verdoppelt sich die mittlere kinetische Energie beider Gase. (He = 4, SO2 = 64 g/mol)",
        "fr": "Les gaz He et SO2 sont à la même température. Lesquelles des affirmations suivantes sont correctes ? I. Les énergies cinétiques moyennes de leurs particules sont égales. II. La vitesse moyenne des particules de He est 4 fois celle des molécules de SO2. III. Si la température absolue double, l'énergie cinétique moyenne des deux gaz double. (He = 4, SO2 = 64 g/mol)",
        "ru": "Газы He и SO2 находятся при одинаковой температуре. Какие утверждения верны? I. Средние кинетические энергии их частиц равны. II. Средняя скорость частиц He в 4 раза больше, чем молекул SO2. III. При увеличении абсолютной температуры в 2 раза средняя кинетическая энергия обоих газов увеличивается в 2 раза. (He = 4, SO2 = 64 г/моль)",
        "ar": "غازا He وSO2 عند درجة الحرارة نفسها. أيّ العبارات الآتية صحيحة؟ I. متوسطا الطاقة الحركية لجسيماتهما متساويان. II. متوسط سرعة جسيمات He يساوي 4 أمثال متوسط سرعة جزيئات SO2. III. إذا ضوعفت درجة الحرارة المطلقة يتضاعف متوسط الطاقة الحركية لكلا الغازين. (He = 4، SO2 = 64 g/mol)",
        "zh": "He 和 SO2 两种气体处于相同温度。有下列说法：I. 两者粒子的平均动能相等。II. He 粒子的平均速率是 SO2 分子的4倍。III. 若热力学温度变为原来的2倍，两种气体的平均动能都变为原来的2倍。其中正确的是哪些？(He = 4，SO2 = 64 g/mol)",
        "ku": "Gazên He û SO2 di heman germahiyê de ne. Kîjan ji van gotinan rast in? I. Enerjiyên kînetîk ên navîn ên perçeyên wan wekhev in. II. Leza navîn a perçeyên He 4 qatê ya molekulên SO2 ye. III. Heke germahiya mutleq 2 qat bibe, enerjiya kînetîk a navîn a her du gazan jî 2 qat dibe. (He = 4, SO2 = 64 g/mol)"
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "I only",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅I",
          "ku": "Tenê I"
        },
        {
          "tr": "I ve II",
          "en": "I and II",
          "de": "I und II",
          "fr": "I et II",
          "ru": "I и II",
          "ar": "I و II",
          "zh": "I和II",
          "ku": "I û II"
        },
        {
          "tr": "I ve III",
          "en": "I and III",
          "de": "I und III",
          "fr": "I et III",
          "ru": "I и III",
          "ar": "I و III",
          "zh": "I和III",
          "ku": "I û III"
        },
        {
          "tr": "II ve III",
          "en": "II and III",
          "de": "II und III",
          "fr": "II et III",
          "ru": "II и III",
          "ar": "II و III",
          "zh": "II和III",
          "ku": "II û III"
        },
        {
          "tr": "I, II ve III",
          "en": "I, II and III",
          "de": "I, II und III",
          "fr": "I, II et III",
          "ru": "I, II и III",
          "ar": "I و II و III",
          "zh": "I、II和III",
          "ku": "I, II û III"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "I: Ortalama kinetik enerji yalnızca mutlak sıcaklığa bağlıdır; sıcaklıklar aynı olduğundan eşittir, doğru. II: Kinetik enerjiler eşitken hız mol kütlesinin kareköküyle ters orantılıdır: v(He)/v(SO2) = sqrt(64/4) = 4, doğru. III: Ortalama kinetik enerji mutlak sıcaklıkla doğru orantılıdır; mutlak sıcaklık 2 katına çıkınca kinetik enerji de 2 katına çıkar, doğru (hız ise yalnızca sqrt(2) katına çıkar). Üç yargı da doğrudur.",
        "en": "I: Average kinetic energy depends only on absolute temperature; the temperatures are equal, so the energies are equal — correct. II: At equal kinetic energy, speed is inversely proportional to the square root of molar mass: v(He)/v(SO2) = sqrt(64/4) = 4 — correct. III: Average kinetic energy is directly proportional to absolute temperature, so doubling the absolute temperature doubles it — correct (the speed rises only sqrt(2) times). All three statements are correct.",
        "de": "I: Die mittlere kinetische Energie hängt nur von der absoluten Temperatur ab; gleiche Temperatur bedeutet gleiche Energie — richtig. II: Bei gleicher kinetischer Energie ist die Geschwindigkeit umgekehrt proportional zur Wurzel der Molmasse: v(He)/v(SO2) = sqrt(64/4) = 4 — richtig. III: Die mittlere kinetische Energie ist proportional zur absoluten Temperatur; bei doppelter Temperatur verdoppelt sie sich — richtig (die Geschwindigkeit steigt nur um den Faktor sqrt(2)). Alle drei Aussagen sind richtig.",
        "fr": "I : L'énergie cinétique moyenne ne dépend que de la température absolue ; les températures sont égales, donc les énergies aussi — vrai. II : À énergie cinétique égale, la vitesse est inversement proportionnelle à la racine carrée de la masse molaire : v(He)/v(SO2) = sqrt(64/4) = 4 — vrai. III : L'énergie cinétique moyenne est proportionnelle à la température absolue ; si celle-ci double, l'énergie double — vrai (la vitesse n'est multipliée que par sqrt(2)). Les trois affirmations sont correctes.",
        "ru": "I: Средняя кинетическая энергия зависит только от абсолютной температуры; температуры равны, значит, равны и энергии — верно. II: При равной кинетической энергии скорость обратно пропорциональна корню из молярной массы: v(He)/v(SO2) = sqrt(64/4) = 4 — верно. III: Средняя кинетическая энергия прямо пропорциональна абсолютной температуре; при её удвоении энергия удваивается — верно (скорость растёт лишь в sqrt(2) раз). Верны все три утверждения.",
        "ar": "I: يعتمد متوسط الطاقة الحركية على درجة الحرارة المطلقة فقط؛ ودرجتا الحرارة متساويتان فالطاقتان متساويتان — صحيحة. II: عند تساوي الطاقة الحركية تتناسب السرعة عكسيًا مع الجذر التربيعي للكتلة المولية: v(He)/v(SO2) = sqrt(64/4) = 4 — صحيحة. III: متوسط الطاقة الحركية يتناسب طرديًا مع درجة الحرارة المطلقة، فإذا تضاعفت تضاعف — صحيحة (أما السرعة فتزداد sqrt(2) مرة فقط). العبارات الثلاث صحيحة.",
        "zh": "I：平均动能只取决于热力学温度；温度相同，平均动能相等——正确。II：动能相等时，速率与摩尔质量的平方根成反比：v(He)/v(SO2) = sqrt(64/4) = 4——正确。III：平均动能与热力学温度成正比，热力学温度加倍，平均动能也加倍——正确(速率只变为 sqrt(2) 倍)。三个说法都正确。",
        "ku": "I: Enerjiya kînetîk a navîn tenê bi germahiya mutleq ve girêdayî ye; germahî wekhev in, ji ber vê yekê enerjî jî wekhev in — rast. II: Dema enerjiya kînetîk wekhev be, lez bi koka çargoşe ya girseya molar re berevajî têkildar e: v(He)/v(SO2) = sqrt(64/4) = 4 — rast. III: Enerjiya kînetîk a navîn rasterast bi germahiya mutleq re têkildar e; dema germahî 2 qat dibe, enerjî jî 2 qat dibe — rast (lez tenê sqrt(2) qat dibe). Her sê gotin rast in."
      }
    },
    {
      "id": "u13-twin07",
      "stem": {
        "tr": "Yeterli miktarda HCl çözeltisine atılan bir miktar Zn metalinin tamamı Zn(k) + 2HCl(suda) → ZnCl2(suda) + H2(g) tepkimesine göre harcanıyor. Oluşan H2 gazı 27 °C'de 24,6 L'lik bir kapta su üstünde toplanıyor ve kaptaki toplam basınç 1,03 atm ölçülüyor. Buna göre tepkimeye giren Zn kaç gramdır? (27 °C'de suyun buhar basıncı 0,03 atm; R = 0,082 L·atm/(mol·K); Zn = 65 g/mol)",
        "en": "A piece of Zn metal is added to excess HCl solution and is completely consumed according to Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g). The H2 gas formed is collected over water at 27 °C in a 24.6 L container, and the total pressure in the container is measured as 1.03 atm. How many grams of Zn reacted? (Vapor pressure of water at 27 °C = 0.03 atm; R = 0.082 L·atm/(mol·K); Zn = 65 g/mol)",
        "de": "Ein Stück Zn-Metall wird in überschüssige HCl-Lösung gegeben und nach Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g) vollständig verbraucht. Das entstehende H2-Gas wird bei 27 °C in einem 24,6-L-Gefäß über Wasser aufgefangen; der Gesamtdruck im Gefäß beträgt 1,03 atm. Wie viel Gramm Zn haben reagiert? (Dampfdruck von Wasser bei 27 °C = 0,03 atm; R = 0,082 L·atm/(mol·K); Zn = 65 g/mol)",
        "fr": "Un morceau de zinc est ajouté à un excès de solution de HCl et est entièrement consommé selon Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g). Le H2 formé est recueilli sur l'eau à 27 °C dans un récipient de 24,6 L, où la pression totale mesurée est de 1,03 atm. Combien de grammes de Zn ont réagi ? (Pression de vapeur de l'eau à 27 °C = 0,03 atm ; R = 0,082 L·atm/(mol·K) ; Zn = 65 g/mol)",
        "ru": "Кусочек цинка внесли в избыток раствора HCl, и он полностью прореагировал по уравнению Zn(тв) + 2HCl(р-р) → ZnCl2(р-р) + H2(г). Образовавшийся H2 собрали над водой при 27 °C в сосуд объёмом 24,6 л; общее давление в сосуде 1,03 атм. Сколько граммов Zn вступило в реакцию? (Давление водяного пара при 27 °C 0,03 атм; R = 0,082 л·атм/(моль·K); Zn = 65 г/моль)",
        "ar": "أُضيفت قطعة من فلز Zn إلى كمية زائدة من محلول HCl فاستُهلكت كليًا وفق التفاعل Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g). جُمع غاز H2 الناتج فوق الماء عند 27 °C في وعاء حجمه 24.6 L، فكان الضغط الكلي في الوعاء 1.03 atm. كم غرامًا من Zn تفاعل؟ (ضغط بخار الماء عند 27 °C = 0.03 atm؛ R = 0.082 L·atm/(mol·K)؛ Zn = 65 g/mol)",
        "zh": "将一定量的 Zn 放入足量盐酸中，按 Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g) 完全反应。生成的 H2 在 27 °C 下用排水法收集于 24.6 L 的容器中，测得容器内总压强为 1.03 atm。参加反应的 Zn 是多少克？(27 °C 时水的蒸气压为 0.03 atm；R = 0.082 L·atm/(mol·K)；Zn = 65 g/mol)",
        "ku": "Perçeyek metala Zn tê avêtin nav çareseriya HCl ya zêde û li gorî Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g) bi tevahî tê xerckirin. Gaza H2 ya çêbûyî di 27 °C de di firaxeke 24,6 L de li ser avê tê berhevkirin û zexta tevahî ya firaxê 1,03 atm tê pîvandin. Çend gram Zn reaksiyon kiriye? (Zexta buhara avê di 27 °C de 0,03 atm; R = 0,082 L·atm/(mol·K); Zn = 65 g/mol)"
      },
      "options": [
        {
          "tr": "32,5 g",
          "en": "32.5 g",
          "de": "32,5 g",
          "fr": "32,5 g",
          "ru": "32,5 г",
          "ar": "32.5 g",
          "zh": "32.5 g",
          "ku": "32,5 g"
        },
        {
          "tr": "63,1 g",
          "en": "63.1 g",
          "de": "63,1 g",
          "fr": "63,1 g",
          "ru": "63,1 г",
          "ar": "63.1 g",
          "zh": "63.1 g",
          "ku": "63,1 g"
        },
        {
          "tr": "65,0 g",
          "en": "65.0 g",
          "de": "65,0 g",
          "fr": "65,0 g",
          "ru": "65,0 г",
          "ar": "65.0 g",
          "zh": "65.0 g",
          "ku": "65,0 g"
        },
        {
          "tr": "67,0 g",
          "en": "67.0 g",
          "de": "67,0 g",
          "fr": "67,0 g",
          "ru": "67,0 г",
          "ar": "67.0 g",
          "zh": "67.0 g",
          "ku": "67,0 g"
        },
        {
          "tr": "130,0 g",
          "en": "130.0 g",
          "de": "130,0 g",
          "fr": "130,0 g",
          "ru": "130,0 г",
          "ar": "130.0 g",
          "zh": "130.0 g",
          "ku": "130,0 g"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Kuru H2 basıncı: P(H2) = 1,03 − 0,03 = 1,00 atm. n(H2) = PV/RT = (1,00 × 24,6)/(0,082 × 300) = 1,00 mol. Denkleme göre 1 mol Zn'den 1 mol H2 oluşur, m(Zn) = 1,00 × 65 = 65,0 g. Suyun buhar basıncını çıkarmayan öğrenci 1,03 mol ile 67,0 g; buhar basıncını iki kez çıkaran 0,97 mol ile 63,1 g; Zn : H2 oranını 2 : 1 ya da 1 : 2 alan ise 130,0 g veya 32,5 g bulur.",
        "en": "Dry H2 pressure: P(H2) = 1.03 − 0.03 = 1.00 atm. n(H2) = PV/RT = (1.00 × 24.6)/(0.082 × 300) = 1.00 mol. By the equation 1 mol Zn gives 1 mol H2, so m(Zn) = 1.00 × 65 = 65.0 g. A student who does not subtract the vapor pressure of water gets 1.03 mol and 67.0 g; one who subtracts it twice gets 0.97 mol and 63.1 g; one who uses a Zn : H2 ratio of 2 : 1 or 1 : 2 gets 130.0 g or 32.5 g.",
        "de": "Druck des trockenen H2: P(H2) = 1,03 − 0,03 = 1,00 atm. n(H2) = PV/RT = (1,00 × 24,6)/(0,082 × 300) = 1,00 mol. Laut Gleichung liefert 1 mol Zn 1 mol H2, also m(Zn) = 1,00 × 65 = 65,0 g. Wer den Dampfdruck nicht abzieht, erhält 1,03 mol und 67,0 g; wer ihn doppelt abzieht, 0,97 mol und 63,1 g; wer das Verhältnis Zn : H2 als 2 : 1 oder 1 : 2 nimmt, erhält 130,0 g oder 32,5 g.",
        "fr": "Pression du H2 sec : P(H2) = 1,03 − 0,03 = 1,00 atm. n(H2) = PV/RT = (1,00 × 24,6)/(0,082 × 300) = 1,00 mol. D'après l'équation, 1 mol de Zn donne 1 mol de H2, donc m(Zn) = 1,00 × 65 = 65,0 g. L'élève qui ne soustrait pas la pression de vapeur de l'eau obtient 1,03 mol et 67,0 g ; celui qui la soustrait deux fois, 0,97 mol et 63,1 g ; celui qui prend un rapport Zn : H2 de 2 : 1 ou 1 : 2 obtient 130,0 g ou 32,5 g.",
        "ru": "Давление сухого H2: P(H2) = 1,03 − 0,03 = 1,00 атм. n(H2) = PV/RT = (1,00 × 24,6)/(0,082 × 300) = 1,00 моль. По уравнению из 1 моль Zn образуется 1 моль H2, m(Zn) = 1,00 × 65 = 65,0 г. Ученик, не вычевший давление водяного пара, получит 1,03 моль и 67,0 г; вычевший его дважды — 0,97 моль и 63,1 г; взявший соотношение Zn : H2 как 2 : 1 или 1 : 2 — 130,0 г или 32,5 г.",
        "ar": "ضغط H2 الجاف: P(H2) = 1.03 − 0.03 = 1.00 atm. n(H2) = PV/RT = (1.00 × 24.6)/(0.082 × 300) = 1.00 mol. وفق المعادلة يعطي 1 mol من Zn مقدار 1 mol من H2، إذن m(Zn) = 1.00 × 65 = 65.0 g. الطالب الذي لا يطرح ضغط بخار الماء يحصل على 1.03 mol و67.0 g، ومن يطرحه مرتين يحصل على 0.97 mol و63.1 g، ومن يأخذ نسبة Zn : H2 على أنها 2 : 1 أو 1 : 2 يحصل على 130.0 g أو 32.5 g.",
        "zh": "干燥H2的压强：P(H2) = 1.03 − 0.03 = 1.00 atm。n(H2) = PV/RT = (1.00 × 24.6)/(0.082 × 300) = 1.00 mol。由方程式，1 mol Zn 生成 1 mol H2，m(Zn) = 1.00 × 65 = 65.0 g。没有减去水的蒸气压的学生得到 1.03 mol、67.0 g；减了两次的得到 0.97 mol、63.1 g；把 Zn : H2 当作 2 : 1 或 1 : 2 的得到 130.0 g 或 32.5 g。",
        "ku": "Zexta H2 ya hişk: P(H2) = 1,03 − 0,03 = 1,00 atm. n(H2) = PV/RT = (1,00 × 24,6)/(0,082 × 300) = 1,00 mol. Li gorî hevkêşeyê 1 mol Zn 1 mol H2 dide, m(Zn) = 1,00 × 65 = 65,0 g. Xwendekarê ku zexta buhara avê dernaxe 1,03 mol û 67,0 g dibîne; yê ku du caran dertîne 0,97 mol û 63,1 g; yê ku rêjeya Zn : H2 wekî 2 : 1 an 1 : 2 digire 130,0 g an 32,5 g dibîne."
      }
    },
    {
      "id": "u13-twin08",
      "stem": {
        "tr": "SO2 gazının difüzyon hızı kaç °C'de, 27 °C'deki O2 gazının difüzyon hızına eşit olur? (O2 = 32, SO2 = 64 g/mol)",
        "en": "At what temperature in °C is the diffusion rate of SO2 gas equal to the diffusion rate of O2 gas at 27 °C? (O2 = 32, SO2 = 64 g/mol)",
        "de": "Bei welcher Temperatur in °C ist die Diffusionsgeschwindigkeit von SO2 gleich der von O2 bei 27 °C? (O2 = 32, SO2 = 64 g/mol)",
        "fr": "À quelle température, en °C, la vitesse de diffusion du SO2 est-elle égale à celle du O2 à 27 °C ? (O2 = 32, SO2 = 64 g/mol)",
        "ru": "При какой температуре (в °C) скорость диффузии SO2 равна скорости диффузии O2 при 27 °C? (O2 = 32, SO2 = 64 г/моль)",
        "ar": "عند أي درجة حرارة بوحدة °C تتساوى سرعة انتشار غاز SO2 مع سرعة انتشار غاز O2 عند 27 °C؟ (O2 = 32، SO2 = 64 g/mol)",
        "zh": "SO2 气体在多少 °C 时的扩散速率等于 27 °C 时 O2 气体的扩散速率？(O2 = 32，SO2 = 64 g/mol)",
        "ku": "Leza belavbûna gaza SO2 di çend °C de bi leza belavbûna gaza O2 ya di 27 °C de wekhev dibe? (O2 = 32, SO2 = 64 g/mol)"
      },
      "options": [
        {
          "tr": "54 °C",
          "en": "54 °C",
          "de": "54 °C",
          "fr": "54 °C",
          "ru": "54 °C",
          "ar": "54 °C",
          "zh": "54 °C",
          "ku": "54 °C"
        },
        {
          "tr": "327 °C",
          "en": "327 °C",
          "de": "327 °C",
          "fr": "327 °C",
          "ru": "327 °C",
          "ar": "327 °C",
          "zh": "327 °C",
          "ku": "327 °C"
        },
        {
          "tr": "600 °C",
          "en": "600 °C",
          "de": "600 °C",
          "fr": "600 °C",
          "ru": "600 °C",
          "ar": "600 °C",
          "zh": "600 °C",
          "ku": "600 °C"
        },
        {
          "tr": "927 °C",
          "en": "927 °C",
          "de": "927 °C",
          "fr": "927 °C",
          "ru": "927 °C",
          "ar": "927 °C",
          "zh": "927 °C",
          "ku": "927 °C"
        },
        {
          "tr": "1200 °C",
          "en": "1200 °C",
          "de": "1200 °C",
          "fr": "1200 °C",
          "ru": "1200 °C",
          "ar": "1200 °C",
          "zh": "1200 °C",
          "ku": "1200 °C"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "v ∝ sqrt(T/M) olduğundan hızların eşit olması için T/M oranları eşit olmalıdır. O2 için T = 27 + 273 = 300 K. T(SO2)/64 = 300/32 → T(SO2) = 600 K = 600 − 273 = 327 °C. Sıcaklığı Kelvin'e çevirmeden 27 × 2 yapan öğrenci 54 °C, bulduğu Kelvin değerini °C diye yazan ise 600 °C bulur.",
        "en": "Since v ∝ sqrt(T/M), the rates are equal when the T/M ratios are equal. For O2, T = 27 + 273 = 300 K. T(SO2)/64 = 300/32 → T(SO2) = 600 K = 600 − 273 = 327 °C. A student who doubles 27 without converting to kelvin gets 54 °C; one who writes the kelvin value as °C gets 600 °C.",
        "de": "Da v ∝ sqrt(T/M), sind die Geschwindigkeiten gleich, wenn die Verhältnisse T/M gleich sind. Für O2 gilt T = 27 + 273 = 300 K. T(SO2)/64 = 300/32 → T(SO2) = 600 K = 600 − 273 = 327 °C. Wer 27 ohne Umrechnung in Kelvin verdoppelt, erhält 54 °C; wer den Kelvin-Wert als °C angibt, 600 °C.",
        "fr": "Comme v ∝ sqrt(T/M), les vitesses sont égales quand les rapports T/M sont égaux. Pour O2, T = 27 + 273 = 300 K. T(SO2)/64 = 300/32 → T(SO2) = 600 K = 600 − 273 = 327 °C. L'élève qui double 27 sans convertir en kelvins trouve 54 °C ; celui qui écrit la valeur en kelvins comme des °C trouve 600 °C.",
        "ru": "Так как v ∝ sqrt(T/M), скорости равны при равных отношениях T/M. Для O2 T = 27 + 273 = 300 K. T(SO2)/64 = 300/32 → T(SO2) = 600 K = 600 − 273 = 327 °C. Ученик, умноживший 27 на 2 без перевода в кельвины, получит 54 °C; записавший значение в кельвинах как градусы Цельсия — 600 °C.",
        "ar": "بما أن v ∝ sqrt(T/M) فإن السرعتين تتساويان عندما تتساوى النسبتان T/M. لـ O2: T = 27 + 273 = 300 K. T(SO2)/64 = 300/32 → T(SO2) = 600 K = 600 − 273 = 327 °C. الطالب الذي يضاعف 27 دون التحويل إلى الكلفن يحصل على 54 °C، ومن يكتب قيمة الكلفن على أنها °C يحصل على 600 °C.",
        "zh": "因为 v ∝ sqrt(T/M)，两者速率相等时 T/M 必须相等。O2 的 T = 27 + 273 = 300 K。T(SO2)/64 = 300/32 → T(SO2) = 600 K = 600 − 273 = 327 °C。不换算成开尔文直接把 27 乘以 2 的学生得到 54 °C；把开尔文数值当作 °C 的学生得到 600 °C。",
        "ku": "Ji ber ku v ∝ sqrt(T/M), lez wekhev dibin dema rêjeyên T/M wekhev bin. Ji bo O2 T = 27 + 273 = 300 K. T(SO2)/64 = 300/32 → T(SO2) = 600 K = 600 − 273 = 327 °C. Xwendekarê ku 27 bêyî guhertina kelvînê du qat dike 54 °C dibîne; yê ku nirxa kelvînê wekî °C dinivîse 600 °C dibîne."
      }
    },
    {
      "id": "u13-twin09",
      "stem": {
        "tr": "Ev tipi bir buzdolabında kullanılacak soğutucu akışkan seçilecektir. Normal kaynama noktası, kritik sıcaklığı ve diğer özellikleri verilen maddelerden hangisi bu amaç için en uygundur?",
        "en": "A refrigerant is to be chosen for a household refrigerator. Which of the substances, described by normal boiling point, critical temperature and other properties, is the most suitable for this purpose?",
        "de": "Für einen Haushaltskühlschrank soll ein Kältemittel ausgewählt werden. Welcher der Stoffe, beschrieben durch Normalsiedepunkt, kritische Temperatur und weitere Eigenschaften, ist dafür am besten geeignet?",
        "fr": "On doit choisir un fluide frigorigène pour un réfrigérateur domestique. Laquelle des substances, décrites par leur température d'ébullition normale, leur température critique et d'autres propriétés, convient le mieux ?",
        "ru": "Для бытового холодильника нужно выбрать хладагент. Какое из веществ, для которых указаны нормальная температура кипения, критическая температура и другие свойства, лучше всего подходит для этой цели?",
        "ar": "يُراد اختيار مائع تبريد لثلاجة منزلية. أيّ المواد الآتية، الموصوفة بدرجة غليانها العادية ودرجة حرارتها الحرجة وخصائص أخرى، هي الأنسب لهذا الغرض؟",
        "zh": "要为家用冰箱选择一种制冷剂。已知下列物质的正常沸点、临界温度及其他性质，其中最适合的是哪一种？",
        "ku": "Ji bo sarinceke malê divê akışkaneke sarker were hilbijartin. Ji madeyên ku bi xala kelandinê ya normal, germahiya krîtîk û taybetiyên din hatine dayîn, kîjan ji bo vê armancê herî guncaw e?"
      },
      "options": [
        {
          "tr": "Kaynama noktası 100 °C, kritik sıcaklığı 374 °C, zehirsiz, ozon tabakasına zararsız",
          "en": "Boiling point 100 °C, critical temperature 374 °C, non-toxic, harmless to the ozone layer",
          "de": "Siedepunkt 100 °C, kritische Temperatur 374 °C, ungiftig, unschädlich für die Ozonschicht",
          "fr": "Ébullition 100 °C, température critique 374 °C, non toxique, sans danger pour la couche d'ozone",
          "ru": "Т. кип. 100 °C, критическая температура 374 °C, нетоксичен, безвреден для озонового слоя",
          "ar": "درجة الغليان 100 °C، درجة الحرارة الحرجة 374 °C، غير سام، غير ضار بطبقة الأوزون",
          "zh": "沸点100 °C，临界温度374 °C，无毒，不破坏臭氧层",
          "ku": "Xala kelandinê 100 °C, germahiya krîtîk 374 °C, nejehrî, ji bo qata ozonê bêzirar"
        },
        {
          "tr": "Kaynama noktası −196 °C, kritik sıcaklığı −147 °C, zehirsiz, ozon tabakasına zararsız",
          "en": "Boiling point −196 °C, critical temperature −147 °C, non-toxic, harmless to the ozone layer",
          "de": "Siedepunkt −196 °C, kritische Temperatur −147 °C, ungiftig, unschädlich für die Ozonschicht",
          "fr": "Ébullition −196 °C, température critique −147 °C, non toxique, sans danger pour la couche d'ozone",
          "ru": "Т. кип. −196 °C, критическая температура −147 °C, нетоксичен, безвреден для озонового слоя",
          "ar": "درجة الغليان −196 °C، درجة الحرارة الحرجة −147 °C، غير سام، غير ضار بطبقة الأوزون",
          "zh": "沸点−196 °C，临界温度−147 °C，无毒，不破坏臭氧层",
          "ku": "Xala kelandinê −196 °C, germahiya krîtîk −147 °C, nejehrî, ji bo qata ozonê bêzirar"
        },
        {
          "tr": "Kaynama noktası −33 °C, kritik sıcaklığı 132 °C, zehirli, ozon tabakasına zararsız",
          "en": "Boiling point −33 °C, critical temperature 132 °C, toxic, harmless to the ozone layer",
          "de": "Siedepunkt −33 °C, kritische Temperatur 132 °C, giftig, unschädlich für die Ozonschicht",
          "fr": "Ébullition −33 °C, température critique 132 °C, toxique, sans danger pour la couche d'ozone",
          "ru": "Т. кип. −33 °C, критическая температура 132 °C, токсичен, безвреден для озонового слоя",
          "ar": "درجة الغليان −33 °C، درجة الحرارة الحرجة 132 °C، سام، غير ضار بطبقة الأوزون",
          "zh": "沸点−33 °C，临界温度132 °C，有毒，不破坏臭氧层",
          "ku": "Xala kelandinê −33 °C, germahiya krîtîk 132 °C, jehrî, ji bo qata ozonê bêzirar"
        },
        {
          "tr": "Kaynama noktası −26 °C, kritik sıcaklığı 101 °C, zehirsiz, ozon tabakasına zararsız",
          "en": "Boiling point −26 °C, critical temperature 101 °C, non-toxic, harmless to the ozone layer",
          "de": "Siedepunkt −26 °C, kritische Temperatur 101 °C, ungiftig, unschädlich für die Ozonschicht",
          "fr": "Ébullition −26 °C, température critique 101 °C, non toxique, sans danger pour la couche d'ozone",
          "ru": "Т. кип. −26 °C, критическая температура 101 °C, нетоксичен, безвреден для озонового слоя",
          "ar": "درجة الغليان −26 °C، درجة الحرارة الحرجة 101 °C، غير سام، غير ضار بطبقة الأوزون",
          "zh": "沸点−26 °C，临界温度101 °C，无毒，不破坏臭氧层",
          "ku": "Xala kelandinê −26 °C, germahiya krîtîk 101 °C, nejehrî, ji bo qata ozonê bêzirar"
        },
        {
          "tr": "Kaynama noktası −30 °C, kritik sıcaklığı 112 °C, zehirsiz, ozon tabakasına zararlı",
          "en": "Boiling point −30 °C, critical temperature 112 °C, non-toxic, harmful to the ozone layer",
          "de": "Siedepunkt −30 °C, kritische Temperatur 112 °C, ungiftig, schädlich für die Ozonschicht",
          "fr": "Ébullition −30 °C, température critique 112 °C, non toxique, nocif pour la couche d'ozone",
          "ru": "Т. кип. −30 °C, критическая температура 112 °C, нетоксичен, разрушает озоновый слой",
          "ar": "درجة الغليان −30 °C، درجة الحرارة الحرجة 112 °C، غير سام، ضار بطبقة الأوزون",
          "zh": "沸点−30 °C，临界温度112 °C，无毒，破坏臭氧层",
          "ku": "Xala kelandinê −30 °C, germahiya krîtîk 112 °C, nejehrî, ji bo qata ozonê zirardar"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Soğutucu akışkanın kaynama noktası düşük olmalıdır ki soğutulan bölmede ısı alarak buharlaşabilsin; kritik sıcaklığı oda sıcaklığından yüksek olmalıdır ki kompresörde yalnızca basınçla sıvılaştırılabilsin; ayrıca zehirsiz ve çevre dostu olmalıdır. Kaynama noktası 100 °C olan madde soğutma bölmesinde buharlaşamaz. Kritik sıcaklığı −147 °C olan madde oda sıcaklığında basınçla sıvılaştırılamaz. Kaynama noktası −33 °C olan madde fiziksel olarak uygun olsa da zehirli olduğu için evde kullanılamaz; −30 °C'de kaynayan madde ise ozon tabakasına zarar verir. Tüm koşulları sağlayan, kaynama noktası −26 °C ve kritik sıcaklığı 101 °C olan zehirsiz ve ozona zararsız maddedir.",
        "en": "A refrigerant needs a low boiling point so it can evaporate in the cooled compartment by absorbing heat, and a critical temperature above room temperature so the compressor can liquefy it by pressure alone; it must also be non-toxic and environmentally friendly. The substance boiling at 100 °C cannot evaporate in the cold compartment. The one with a critical temperature of −147 °C cannot be liquefied by pressure at room temperature. The one boiling at −33 °C is physically suitable but toxic, so it is unsuitable for a home; the one boiling at −30 °C damages the ozone layer. Only the non-toxic, ozone-safe substance with a boiling point of −26 °C and a critical temperature of 101 °C meets every requirement.",
        "de": "Ein Kältemittel braucht einen niedrigen Siedepunkt, damit es im Kühlraum unter Wärmeaufnahme verdampft, und eine kritische Temperatur über Raumtemperatur, damit der Kompressor es allein durch Druck verflüssigen kann; außerdem muss es ungiftig und umweltfreundlich sein. Der Stoff mit Siedepunkt 100 °C kann im Kühlraum nicht verdampfen. Der Stoff mit kritischer Temperatur −147 °C lässt sich bei Raumtemperatur nicht durch Druck verflüssigen. Der bei −33 °C siedende Stoff wäre physikalisch geeignet, ist aber giftig; der bei −30 °C siedende schädigt die Ozonschicht. Alle Bedingungen erfüllt nur der ungiftige, ozonunschädliche Stoff mit Siedepunkt −26 °C und kritischer Temperatur 101 °C.",
        "fr": "Un fluide frigorigène doit avoir une basse température d'ébullition pour s'évaporer dans le compartiment froid en absorbant de la chaleur, et une température critique supérieure à la température ambiante pour que le compresseur puisse le liquéfier par simple compression ; il doit aussi être non toxique et respectueux de l'environnement. La substance qui bout à 100 °C ne peut pas s'évaporer dans le compartiment froid. Celle dont la température critique est −147 °C ne peut pas être liquéfiée par compression à température ambiante. Celle qui bout à −33 °C conviendrait physiquement mais est toxique ; celle qui bout à −30 °C endommage la couche d'ozone. Seule la substance non toxique et sans danger pour l'ozone, bouillant à −26 °C et de température critique 101 °C, remplit toutes les conditions.",
        "ru": "Температура кипения хладагента должна быть низкой, чтобы он испарялся в охлаждаемой камере, поглощая теплоту, а критическая температура — выше комнатной, чтобы в компрессоре его можно было сжижать одним давлением; кроме того, он должен быть нетоксичным и безопасным для окружающей среды. Вещество с т. кип. 100 °C не испарится в холодильной камере. Вещество с критической температурой −147 °C нельзя сжижить давлением при комнатной температуре. Вещество с т. кип. −33 °C физически подходит, но токсично, поэтому дома его использовать нельзя; вещество с т. кип. −30 °C разрушает озоновый слой. Всем требованиям отвечает только нетоксичное, безопасное для озонового слоя вещество с т. кип. −26 °C и критической температурой 101 °C.",
        "ar": "يحتاج مائع التبريد إلى درجة غليان منخفضة ليتبخر في الحجرة المبرَّدة ممتصًا الحرارة، وإلى درجة حرارة حرجة أعلى من درجة حرارة الغرفة ليتمكن الضاغط من تسييله بالضغط وحده، ويجب أن يكون غير سام وصديقًا للبيئة. المادة التي تغلي عند 100 °C لا تتبخر في الحجرة المبرَّدة. والمادة ذات درجة الحرارة الحرجة −147 °C لا يمكن تسييلها بالضغط عند درجة حرارة الغرفة. والمادة التي تغلي عند −33 °C مناسبة فيزيائيًا لكنها سامة، أما التي تغلي عند −30 °C فتضر بطبقة الأوزون. وحدها المادة غير السامة وغير الضارة بالأوزون، ذات درجة الغليان −26 °C ودرجة الحرارة الحرجة 101 °C، تحقق الشروط كلها.",
        "zh": "制冷剂的沸点必须低，才能在冷藏室中吸热蒸发；临界温度必须高于室温，压缩机才能仅靠加压使其液化；此外还必须无毒、环保。沸点为100 °C的物质无法在冷藏室中蒸发。临界温度为−147 °C的物质在室温下无法加压液化。沸点−33 °C的物质物理性质合适但有毒，不适合家用；沸点−30 °C的物质会破坏臭氧层。只有沸点−26 °C、临界温度101 °C、无毒且不破坏臭氧层的物质满足全部要求。",
        "ku": "Akışkana sarker divê xala kelandinê nizm be da ku di beşa sarkirî de germê bigire û bibe buhar, û germahiya wê ya krîtîk ji germahiya odeyê bilindtir be da ku kompresor wê tenê bi zextê şil bike; herwiha divê nejehrî û dostê jîngehê be. Madeya ku di 100 °C de dikele di beşa sar de nabe buhar. Madeya ku germahiya wê ya krîtîk −147 °C ye di germahiya odeyê de bi zextê şil nabe. Madeya ku di −33 °C de dikele ji aliyê fîzîkî ve guncaw e lê jehrî ye; ya ku di −30 °C de dikele zirarê dide qata ozonê. Tenê madeya nejehrî û ji bo ozonê bêzirar, ku xala kelandinê −26 °C û germahiya krîtîk 101 °C ye, hemû şertan pêk tîne."
      }
    },
    {
      "id": "u13-twin10",
      "stem": {
        "tr": "Aynı sıcaklık ve basınçta bulunan He, CH4 ve NH3 gazlarının ideal gaz davranışına yakınlıkları aşağıdakilerin hangisinde doğru sıralanmıştır? (İdeale en yakın olan solda yazılmıştır.)",
        "en": "He, CH4 and NH3 gases are at the same temperature and pressure. In which option are they correctly ordered by closeness to ideal gas behavior? (The most nearly ideal is written on the left.)",
        "de": "He, CH4 und NH3 haben dieselbe Temperatur und denselben Druck. In welcher Antwort sind sie richtig nach der Nähe zum idealen Gasverhalten geordnet? (Das idealste steht links.)",
        "fr": "Les gaz He, CH4 et NH3 sont à la même température et à la même pression. Dans quelle proposition sont-ils correctement classés selon leur proximité du comportement parfait ? (Le plus proche du gaz parfait est écrit à gauche.)",
        "ru": "Газы He, CH4 и NH3 находятся при одинаковых температуре и давлении. В каком варианте они правильно расположены по близости их поведения к идеальному газу? (Газ, наиболее близкий к идеальному, записан слева.)",
        "ar": "رُتّبت الغازات He وCH4 وNH3، الموجودة عند درجة الحرارة والضغط نفسيهما، بحسب قربها من سلوك الغاز المثالي. في أيّ الخيارات الآتية جاء الترتيب صحيحًا؟ (الأقرب إلى المثالي مكتوب على اليسار.)",
        "zh": "He、CH4 和 NH3 三种气体处于相同的温度和压强下。按接近理想气体行为的程度排列，正确的是哪一项？（最接近理想气体的写在最左边。）",
        "ku": "Gazên He, CH4 û NH3 di heman germahî û zextê de ne. Li gorî nêzîkbûna wan a ji tevgera gaza îdeal, kîjan rêzkirin rast e? (Ya herî nêzî îdeal li milê çepê hatiye nivîsandin.)"
      },
      "options": [
        {
          "tr": "NH3 > CH4 > He",
          "en": "NH3 > CH4 > He",
          "de": "NH3 > CH4 > He",
          "fr": "NH3 > CH4 > He",
          "ru": "NH3 > CH4 > He",
          "ar": "NH3 > CH4 > He",
          "zh": "NH3 > CH4 > He",
          "ku": "NH3 > CH4 > He"
        },
        {
          "tr": "CH4 > NH3 > He",
          "en": "CH4 > NH3 > He",
          "de": "CH4 > NH3 > He",
          "fr": "CH4 > NH3 > He",
          "ru": "CH4 > NH3 > He",
          "ar": "CH4 > NH3 > He",
          "zh": "CH4 > NH3 > He",
          "ku": "CH4 > NH3 > He"
        },
        {
          "tr": "He > CH4 > NH3",
          "en": "He > CH4 > NH3",
          "de": "He > CH4 > NH3",
          "fr": "He > CH4 > NH3",
          "ru": "He > CH4 > NH3",
          "ar": "He > CH4 > NH3",
          "zh": "He > CH4 > NH3",
          "ku": "He > CH4 > NH3"
        },
        {
          "tr": "He > NH3 > CH4",
          "en": "He > NH3 > CH4",
          "de": "He > NH3 > CH4",
          "fr": "He > NH3 > CH4",
          "ru": "He > NH3 > CH4",
          "ar": "He > NH3 > CH4",
          "zh": "He > NH3 > CH4",
          "ku": "He > NH3 > CH4"
        },
        {
          "tr": "CH4 > He > NH3",
          "en": "CH4 > He > NH3",
          "de": "CH4 > He > NH3",
          "fr": "CH4 > He > NH3",
          "ru": "CH4 > He > NH3",
          "ar": "CH4 > He > NH3",
          "zh": "CH4 > He > NH3",
          "ku": "CH4 > He > NH3"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Aynı koşullarda ideallikten sapmayı belirleyen, tanecikler arası çekim kuvvetinin büyüklüğü ve tanecik hacmidir. He tek atomlu, küçük ve apolardır; aralarında yalnızca çok zayıf London kuvvetleri bulunur, en ideal davranan odur. CH4 de apolardır ama daha büyük ve çok elektronlu olduğundan London kuvvetleri He'ninkinden güçlüdür. NH3 polardır ve molekülleri arasında hidrojen bağı kurar; en güçlü çekim onda olduğundan en çok sapan gazdır. CH4 ile NH3'ün mol kütleleri (16 ve 17) neredeyse aynıdır; sıralamayı mol kütlesi değil, polarlık ve hidrojen bağı belirler.",
        "en": "Under the same conditions, deviation from ideality is decided by the strength of the attractions between particles and by particle size. He is monatomic, small and nonpolar, with only very weak London forces, so it behaves most ideally. CH4 is also nonpolar but larger with more electrons, so its London forces are stronger than those of He. NH3 is polar and forms hydrogen bonds between its molecules; it has the strongest attractions and deviates most. The molar masses of CH4 and NH3 (16 and 17) are almost the same, so polarity and hydrogen bonding, not molar mass, decide the order.",
        "de": "Unter gleichen Bedingungen bestimmen die Stärke der Anziehung zwischen den Teilchen und die Teilchengröße die Abweichung vom idealen Verhalten. He ist einatomig, klein und unpolar und hat nur sehr schwache London-Kräfte; es verhält sich am idealsten. CH4 ist ebenfalls unpolar, aber größer und elektronenreicher, daher sind seine London-Kräfte stärker als die von He. NH3 ist polar und bildet Wasserstoffbrücken; es hat die stärkste Anziehung und weicht am meisten ab. Die Molmassen von CH4 und NH3 (16 und 17) sind fast gleich; die Reihenfolge bestimmen Polarität und Wasserstoffbrücken, nicht die Molmasse.",
        "fr": "Dans les mêmes conditions, l'écart à l'idéalité dépend de la force des attractions entre particules et de la taille des particules. He est monoatomique, petit et apolaire, avec seulement de très faibles forces de London : c'est le plus proche du gaz parfait. CH4 est aussi apolaire mais plus gros et plus riche en électrons, ses forces de London sont donc plus fortes que celles de He. NH3 est polaire et forme des liaisons hydrogène ; ses attractions sont les plus fortes et il s'écarte le plus. Les masses molaires de CH4 et NH3 (16 et 17) sont presque égales : c'est la polarité et la liaison hydrogène, non la masse molaire, qui fixent l'ordre.",
        "ru": "При одинаковых условиях отклонение от идеальности определяется силой притяжения между частицами и их объёмом. He — одноатомный, маленький и неполярный, между его атомами действуют лишь очень слабые лондоновские (дисперсионные) силы, поэтому он ведёт себя наиболее близко к идеальному газу. CH4 тоже неполярен, но крупнее и содержит больше электронов, поэтому лондоновские силы у него сильнее, чем у He. NH3 полярен и образует водородные связи; притяжение между его молекулами самое сильное, и отклонение наибольшее. Молярные массы CH4 и NH3 (16 и 17) почти одинаковы, поэтому порядок определяют полярность и водородные связи, а не молярная масса.",
        "ar": "عند الظروف نفسها يحدّد الانحرافَ عن المثالية مقدارُ قوى التجاذب بين الجسيمات وحجمُها. He أحادي الذرة وصغير وغير قطبي، ولا توجد بين ذراته إلا قوى لندن الضعيفة جدًا، فهو الأقرب إلى السلوك المثالي. CH4 غير قطبي أيضًا لكنه أكبر وأغنى بالإلكترونات، فقوى لندن فيه أقوى منها في He. NH3 قطبي ويكوّن روابط هيدروجينية بين جزيئاته، فتجاذبه هو الأقوى وانحرافه هو الأكبر. الكتلتان الموليتان لـ CH4 وNH3 (16 و17) متقاربتان جدًا، لذا تحدد القطبية والروابط الهيدروجينية الترتيب لا الكتلة المولية.",
        "zh": "相同条件下，偏离理想行为的程度取决于粒子间引力的大小和粒子的体积。He是单原子、体积小、非极性的，原子间只有很弱的色散力（伦敦力），最接近理想气体。CH4也是非极性分子，但体积更大、电子更多，色散力比He强。NH3是极性分子，分子间能形成氢键，引力最强，偏离最大。CH4和NH3的摩尔质量(16和17)几乎相同，决定顺序的是极性和氢键，而不是摩尔质量。",
        "ku": "Di heman şertan de, dûrketina ji îdealbûnê bi mezinahiya hêzên kişandinê yên navbera perçeyan û qebareya perçeyan tê diyarkirin. He yek-atomî, biçûk û ne-polar e; di navbera atomên wê de tenê hêzên London ên pir qels hene, ji ber vê yekê herî îdeal ew e. CH4 jî ne-polar e lê mezintir e û elektronên wê zêdetir in, ji ber vê yekê hêzên wê yên London ji yên He xurtir in. NH3 polar e û di navbera molekulên xwe de girêdana hîdrojenê çêdike; kişandina herî xurt a wê ye û herî zêde dûr dikeve. Girseyên molar ên CH4 û NH3 (16 û 17) hema hema wekhev in; rêzê ne girseya molar, polarbûn û girêdana hîdrojenê diyar dikin."
      }
    },
    {
      "id": "u13-twin11",
      "stem": {
        "tr": "Aynı sıcaklık ve basınçta, biri He gazıyla diğeri havayla aynı hacimde şişirilen iki özdeş lastik balondan He ile doldurulanın daha kısa sürede söndüğü gözleniyor. Bu gözlemin en doğru açıklaması aşağıdakilerden hangisidir?",
        "en": "Two identical rubber balloons are inflated to the same volume at the same temperature and pressure, one with He and the other with air. The He balloon is observed to go flat sooner. Which of the following is the best explanation of this observation?",
        "de": "Zwei gleiche Gummiballons werden bei gleicher Temperatur und gleichem Druck auf dasselbe Volumen aufgeblasen, einer mit He, der andere mit Luft. Der He-Ballon erschlafft früher. Welche Erklärung ist die zutreffendste?",
        "fr": "Deux ballons de baudruche identiques sont gonflés au même volume, à même température et même pression, l'un avec de l'hélium, l'autre avec de l'air. On observe que le ballon à l'hélium se dégonfle plus vite. Quelle est la meilleure explication de cette observation ?",
        "ru": "Два одинаковых резиновых шарика надули до одного объёма при одинаковых температуре и давлении: один гелием, другой воздухом. Шарик с He сдувается быстрее. Какое объяснение этого наблюдения наиболее верное?",
        "ar": "نُفخ بالونان مطاطيان متماثلان إلى الحجم نفسه عند درجة الحرارة والضغط نفسيهما، أحدهما بغاز He والآخر بالهواء. لوحظ أن بالون He يفرغ في وقت أقصر. أيّ مما يلي هو التفسير الأصح لهذه الملاحظة؟",
        "zh": "在相同温度和压强下，把两个相同的橡胶气球充到相同体积，一个充He，另一个充空气。观察到充He的气球更快瘪掉。下列哪一项是对这一现象最正确的解释？",
        "ku": "Du balonên lastîkî yên wekhev di heman germahî û zextê de heta heman qebareyê têne pifkirin, yek bi He û ya din bi hewayê. Tê dîtin ku balona He zûtir vala dibe. Ravekirina herî rast a vê dîtinê kîjan e?"
      },
      "options": [
        {
          "tr": "He atomlarının ortalama kinetik enerjisi, hava moleküllerininkinden büyük olduğu için",
          "en": "Because the average kinetic energy of He atoms is greater than that of air molecules",
          "de": "Weil die mittlere kinetische Energie der He-Atome größer ist als die der Luftmoleküle",
          "fr": "Parce que l'énergie cinétique moyenne des atomes de He est supérieure à celle des molécules de l'air",
          "ru": "Средняя кинетическая энергия атомов He больше, чем у молекул воздуха",
          "ar": "لأن متوسط الطاقة الحركية لذرات He أكبر منه لجزيئات الهواء",
          "zh": "因为He原子的平均动能大于空气分子的平均动能",
          "ku": "Ji ber ku enerjiya kînetîk a navîn a atomên He ji ya molekulên hewayê mezintir e"
        },
        {
          "tr": "He atomları balonun lastiğiyle tepkimeye girerek gözenekleri büyüttüğü için",
          "en": "Because He atoms react with the rubber of the balloon and enlarge its pores",
          "de": "Weil He-Atome mit dem Gummi reagieren und dessen Poren vergrößern",
          "fr": "Parce que les atomes de He réagissent avec le caoutchouc et agrandissent ses pores",
          "ru": "Атомы He реагируют с резиной шарика и расширяют её поры",
          "ar": "لأن ذرات He تتفاعل مع مطاط البالون فتوسّع مسامه",
          "zh": "因为He原子与气球橡胶发生反应，使其孔隙变大",
          "ku": "Ji ber ku atomên He bi lastîka balonê re reaksiyon dikin û qulikan mezin dikin"
        },
        {
          "tr": "Balondaki He'nin basıncı, diğer balondaki havanın basıncından büyük olduğu için",
          "en": "Because the pressure of He in its balloon is greater than the pressure of air in the other balloon",
          "de": "Weil der He-Druck im Ballon größer ist als der Luftdruck im anderen Ballon",
          "fr": "Parce que la pression de He dans son ballon est supérieure à celle de l'air dans l'autre ballon",
          "ru": "Давление He в шарике больше давления воздуха в другом шарике",
          "ar": "لأن ضغط He في بالونه أكبر من ضغط الهواء في البالون الآخر",
          "zh": "因为气球中He的压强大于另一个气球中空气的压强",
          "ku": "Ji ber ku zexta He di balona wê de ji zexta hewayê di balona din de mezintir e"
        },
        {
          "tr": "He atomları arasındaki çekim kuvvetleri, hava molekülleri arasındakinden büyük olduğu için",
          "en": "Because the attractive forces between He atoms are greater than those between air molecules",
          "de": "Weil die Anziehungskräfte zwischen He-Atomen größer sind als zwischen Luftmolekülen",
          "fr": "Parce que les forces d'attraction entre atomes de He sont plus grandes qu'entre molécules de l'air",
          "ru": "Силы притяжения между атомами He больше, чем между молекулами воздуха",
          "ar": "لأن قوى التجاذب بين ذرات He أكبر منها بين جزيئات الهواء",
          "zh": "因为He原子之间的引力大于空气分子之间的引力",
          "ku": "Ji ber ku hêzên kişandinê yên navbera atomên He ji yên navbera molekulên hewayê mezintir in"
        },
        {
          "tr": "He'nin mol kütlesi küçük olduğundan atomları daha hızlı hareket edip lastikteki gözeneklerden daha hızlı efüzlendiği için",
          "en": "Because He has a small molar mass, its atoms move faster and effuse more quickly through the pores in the rubber",
          "de": "Weil He eine kleine Molmasse hat, bewegen sich seine Atome schneller und effundieren rascher durch die Poren des Gummis",
          "fr": "Parce que He a une faible masse molaire, ses atomes se déplacent plus vite et s'effusent plus rapidement par les pores du caoutchouc",
          "ru": "Молярная масса He мала, поэтому его атомы движутся быстрее и быстрее выходят (эффундируют) через поры резины",
          "ar": "لأن الكتلة المولية لـ He صغيرة فتتحرك ذراته أسرع وتتدفق عبر مسام المطاط بسرعة أكبر",
          "zh": "因为He的摩尔质量小，其原子运动更快，从橡胶的微孔中泻流得更快",
          "ku": "Ji ber ku girseya molar a He biçûk e, atomên wê zûtir diçin û ji qulikên lastîkê zûtir efûzyon dibin"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Aynı sıcaklıkta He atomları ile hava moleküllerinin ortalama kinetik enerjileri eşittir; bu yüzden kinetik enerji farkını öne süren açıklama yanlıştır. Eşit kinetik enerjide hız mol kütlesinin kareköküyle ters orantılıdır: He (4 g/mol), ortalama mol kütlesi yaklaşık 29 g/mol olan havadan yaklaşık sqrt(29/4) ≈ 2,7 kat hızlıdır ve lastiğin gözeneklerinden daha hızlı efüzlenir. Balonlar aynı koşullarda şişirildiği için basınçlar eşittir; He soy gaz olduğundan lastikle tepkimeye girmez ve atomları arasındaki çekim çok zayıftır.",
        "en": "At the same temperature He atoms and air molecules have equal average kinetic energies, so an explanation based on a kinetic energy difference is wrong. At equal kinetic energy speed is inversely proportional to the square root of molar mass: He (4 g/mol) is about sqrt(29/4) ≈ 2.7 times faster than air (average molar mass about 29 g/mol) and effuses through the rubber's pores more quickly. The balloons were filled under the same conditions, so the pressures are equal; He is a noble gas, does not react with rubber, and the attraction between its atoms is very weak.",
        "de": "Bei gleicher Temperatur haben He-Atome und Luftmoleküle gleiche mittlere kinetische Energie; eine Erklärung über einen Energieunterschied ist daher falsch. Bei gleicher kinetischer Energie ist die Geschwindigkeit umgekehrt proportional zur Wurzel der Molmasse: He (4 g/mol) ist etwa sqrt(29/4) ≈ 2,7-mal schneller als Luft (mittlere Molmasse etwa 29 g/mol) und effundiert schneller durch die Poren des Gummis. Die Ballons wurden unter gleichen Bedingungen gefüllt, die Drücke sind also gleich; He ist ein Edelgas, reagiert nicht mit Gummi, und die Anziehung zwischen seinen Atomen ist sehr schwach.",
        "fr": "À même température, les atomes de He et les molécules de l'air ont la même énergie cinétique moyenne : une explication fondée sur une différence d'énergie cinétique est donc fausse. À énergie cinétique égale, la vitesse est inversement proportionnelle à la racine carrée de la masse molaire : He (4 g/mol) est environ sqrt(29/4) ≈ 2,7 fois plus rapide que l'air (masse molaire moyenne d'environ 29 g/mol) et s'effuse plus vite par les pores du caoutchouc. Les ballons ont été gonflés dans les mêmes conditions, les pressions sont donc égales ; He est un gaz noble, il ne réagit pas avec le caoutchouc et l'attraction entre ses atomes est très faible.",
        "ru": "При одинаковой температуре средние кинетические энергии атомов He и молекул воздуха равны, поэтому объяснение через разницу кинетической энергии неверно. При равной кинетической энергии скорость обратно пропорциональна корню из молярной массы: He (4 г/моль) движется примерно в sqrt(29/4) ≈ 2,7 раза быстрее воздуха (средняя молярная масса около 29 г/моль) и быстрее выходит через поры резины. Шарики надували при одинаковых условиях, поэтому давления равны; He — благородный газ, с резиной не реагирует, а притяжение между его атомами очень слабое.",
        "ar": "عند درجة الحرارة نفسها يتساوى متوسط الطاقة الحركية لذرات He وجزيئات الهواء، لذا فالتفسير القائم على فرق الطاقة الحركية خاطئ. عند تساوي الطاقة الحركية تتناسب السرعة عكسيًا مع الجذر التربيعي للكتلة المولية: He (4 g/mol) أسرع بنحو sqrt(29/4) ≈ 2.7 مرة من الهواء (متوسط كتلته المولية نحو 29 g/mol)، فيتدفق عبر مسام المطاط أسرع. نُفخ البالونان في الظروف نفسها فالضغطان متساويان، وHe غاز نبيل لا يتفاعل مع المطاط والتجاذب بين ذراته ضعيف جدًا.",
        "zh": "相同温度下He原子与空气分子的平均动能相等，所以用动能差来解释是错误的。动能相等时速率与摩尔质量的平方根成反比：He(4 g/mol)的速率约为空气(平均摩尔质量约29 g/mol)的 sqrt(29/4) ≈ 2.7 倍，因此从橡胶微孔中泻流得更快。两个气球在相同条件下充气，压强相等；He是稀有气体，不与橡胶反应，原子间引力也很弱。",
        "ku": "Di heman germahiyê de enerjiya kînetîk a navîn a atomên He û ya molekulên hewayê wekhev e; ji ber vê yekê ravekirina li ser cudahiya enerjiya kînetîk şaş e. Dema enerjiya kînetîk wekhev be, lez bi koka çargoşe ya girseya molar re berevajî têkildar e: He (4 g/mol) nêzîkî sqrt(29/4) ≈ 2,7 qat ji hewayê (girseya molar a navîn nêzîkî 29 g/mol) zûtir e û ji qulikên lastîkê zûtir efûzyon dibe. Balon di heman şertan de hatine pifkirin, ji ber vê yekê zext wekhev in; He gazeke esil e, bi lastîkê re reaksiyon nake û kişandina navbera atomên wê pir qels e."
      }
    },
    {
      "id": "u13-twin12",
      "stem": {
        "tr": "Sabit sıcaklıkta, 2 L'lik kaptaki 3 atm basınçlı He gazı ile 3 L'lik kaptaki 2 atm basınçlı Ne gazı, aradaki musluk açılarak karıştırılıyor. Bağlantı borusunun hacmi ihmal edildiğine göre son durumda toplam basınç kaç atm olur?",
        "en": "At constant temperature, He gas at 3 atm in a 2 L container and Ne gas at 2 atm in a 3 L container are mixed by opening the valve between them. If the volume of the connecting tube is negligible, what is the final total pressure in atm?",
        "de": "Bei konstanter Temperatur werden He-Gas (3 atm, 2-L-Behälter) und Ne-Gas (2 atm, 3-L-Behälter) durch Öffnen des Verbindungshahns gemischt. Das Volumen des Verbindungsrohrs ist vernachlässigbar. Wie groß ist der Gesamtdruck am Ende in atm?",
        "fr": "À température constante, du He à 3 atm dans un récipient de 2 L et du Ne à 2 atm dans un récipient de 3 L sont mélangés en ouvrant le robinet qui les relie. Le volume du tube de liaison étant négligeable, quelle est la pression totale finale en atm ?",
        "ru": "При постоянной температуре газ He (3 атм, сосуд объёмом 2 л) и газ Ne (2 атм, сосуд объёмом 3 л) смешивают, открыв кран между сосудами. Объёмом соединительной трубки можно пренебречь. Чему равно конечное общее давление (атм)?",
        "ar": "عند درجة حرارة ثابتة، يُمزج غاز He بضغط 3 atm في وعاء حجمه 2 L مع غاز Ne بضغط 2 atm في وعاء حجمه 3 L بفتح الصمام بينهما. إذا كان حجم أنبوب الوصل مهملًا، فكم يبلغ الضغط الكلي النهائي بوحدة atm؟",
        "zh": "恒温下，打开连接两个容器的阀门，使2 L容器中3 atm的He与3 L容器中2 atm的Ne混合。连接管体积忽略不计，最终总压强是多少atm？",
        "ku": "Di germahiya sabît de, gaza He ya 3 atm di firaxeke 2 L de û gaza Ne ya 2 atm di firaxeke 3 L de bi vekirina musluka navbera wan tevlihev dibin. Heke qebareya boriya girêdanê neyê hesibandin, zexta tevahî ya dawî çend atm e?"
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
          "ku": "1,2 atm"
        },
        {
          "tr": "2,4 atm",
          "en": "2.4 atm",
          "de": "2,4 atm",
          "fr": "2,4 atm",
          "ru": "2,4 атм",
          "ar": "2.4 atm",
          "zh": "2.4 atm",
          "ku": "2,4 atm"
        },
        {
          "tr": "2,5 atm",
          "en": "2.5 atm",
          "de": "2,5 atm",
          "fr": "2,5 atm",
          "ru": "2,5 атм",
          "ar": "2.5 atm",
          "zh": "2.5 atm",
          "ku": "2,5 atm"
        },
        {
          "tr": "5,0 atm",
          "en": "5.0 atm",
          "de": "5,0 atm",
          "fr": "5,0 atm",
          "ru": "5,0 атм",
          "ar": "5.0 atm",
          "zh": "5.0 atm",
          "ku": "5,0 atm"
        },
        {
          "tr": "6,0 atm",
          "en": "6.0 atm",
          "de": "6,0 atm",
          "fr": "6,0 atm",
          "ru": "6,0 атм",
          "ar": "6.0 atm",
          "zh": "6.0 atm",
          "ku": "6,0 atm"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Musluk açılınca her gaz 2 + 3 = 5 L'lik hacmin tamamına yayılır ve sabit sıcaklıkta P1V1 = P2V2 uygulanır: P(He) = 3 × 2/5 = 1,2 atm, P(Ne) = 2 × 3/5 = 1,2 atm. Dalton yasasına göre Ptoplam = 1,2 + 1,2 = 2,4 atm. Basınçların aritmetik ortalamasını alan öğrenci 2,5 atm, basınçları doğrudan toplayan 5,0 atm, yalnızca bir gazın kısmi basıncını yazan ise 1,2 atm bulur.",
        "en": "When the valve opens, each gas spreads through the whole 2 + 3 = 5 L, and at constant temperature P1V1 = P2V2: P(He) = 3 × 2/5 = 1.2 atm, P(Ne) = 2 × 3/5 = 1.2 atm. By Dalton's law Ptotal = 1.2 + 1.2 = 2.4 atm. A student who averages the pressures gets 2.5 atm, one who simply adds them gets 5.0 atm, and one who gives only one gas's partial pressure gets 1.2 atm.",
        "de": "Nach dem Öffnen verteilt sich jedes Gas auf das gesamte Volumen 2 + 3 = 5 L; bei konstanter Temperatur gilt P1V1 = P2V2: P(He) = 3 × 2/5 = 1,2 atm, P(Ne) = 2 × 3/5 = 1,2 atm. Nach Dalton ist Pgesamt = 1,2 + 1,2 = 2,4 atm. Wer die Drücke mittelt, erhält 2,5 atm; wer sie einfach addiert, 5,0 atm; wer nur den Partialdruck eines Gases angibt, 1,2 atm.",
        "fr": "À l'ouverture du robinet, chaque gaz occupe tout le volume 2 + 3 = 5 L et, à température constante, P1V1 = P2V2 : P(He) = 3 × 2/5 = 1,2 atm, P(Ne) = 2 × 3/5 = 1,2 atm. D'après la loi de Dalton, Ptotale = 1,2 + 1,2 = 2,4 atm. L'élève qui fait la moyenne des pressions trouve 2,5 atm, celui qui les additionne directement 5,0 atm, et celui qui ne donne que la pression partielle d'un gaz 1,2 atm.",
        "ru": "После открытия крана каждый газ занимает весь объём 2 + 3 = 5 л, и при постоянной температуре P1V1 = P2V2: P(He) = 3 × 2/5 = 1,2 атм, P(Ne) = 2 × 3/5 = 1,2 атм. По закону Дальтона Pобщ = 1,2 + 1,2 = 2,4 атм. Ученик, усреднивший давления, получит 2,5 атм; просто сложивший их — 5,0 атм; указавший парциальное давление только одного газа — 1,2 атм.",
        "ar": "عند فتح الصمام ينتشر كل غاز في الحجم الكلي 2 + 3 = 5 L، وعند درجة حرارة ثابتة P1V1 = P2V2: P(He) = 3 × 2/5 = 1.2 atm وP(Ne) = 2 × 3/5 = 1.2 atm. وفق قانون دالتون Ptotal = 1.2 + 1.2 = 2.4 atm. الطالب الذي يأخذ متوسط الضغطين يحصل على 2.5 atm، ومن يجمعهما مباشرة يحصل على 5.0 atm، ومن يكتب الضغط الجزئي لغاز واحد فقط يحصل على 1.2 atm.",
        "zh": "打开阀门后，每种气体都扩散到整个 2 + 3 = 5 L 的体积中，恒温下 P1V1 = P2V2：P(He) = 3 × 2/5 = 1.2 atm，P(Ne) = 2 × 3/5 = 1.2 atm。由道尔顿分压定律 P总 = 1.2 + 1.2 = 2.4 atm。把两个压强取平均的学生得到 2.5 atm，直接相加的得到 5.0 atm，只写出一种气体分压的得到 1.2 atm。",
        "ku": "Dema muslik vedibe, her gaz li tevahiya qebareya 2 + 3 = 5 L belav dibe û di germahiya sabît de P1V1 = P2V2: P(He) = 3 × 2/5 = 1,2 atm, P(Ne) = 2 × 3/5 = 1,2 atm. Li gorî zagona Dalton Ptevahî = 1,2 + 1,2 = 2,4 atm. Xwendekarê ku navîniya zextan digire 2,5 atm, yê ku wan rasterast berhev dike 5,0 atm, yê ku tenê zexta qismî ya gazekê dinivîse 1,2 atm dibîne."
      }
    },
    {
      "id": "u13-twin13",
      "stem": {
        "tr": "Mol kütleleri ve mutlak sıcaklıkları verilen gazlar: I. H2 (2 g/mol), 200 K II. CH4 (16 g/mol), 400 K III. O2 (32 g/mol), 800 K. Bu gazların difüzyon hızları arasındaki ilişki aşağıdakilerin hangisinde doğru verilmiştir?",
        "en": "Gases with the given molar masses and absolute temperatures: I. H2 (2 g/mol), 200 K II. CH4 (16 g/mol), 400 K III. O2 (32 g/mol), 800 K. Which option correctly gives the relationship between their diffusion rates?",
        "de": "Gase mit den angegebenen Molmassen und absoluten Temperaturen: I. H2 (2 g/mol), 200 K II. CH4 (16 g/mol), 400 K III. O2 (32 g/mol), 800 K. Welche Antwort gibt die Beziehung ihrer Diffusionsgeschwindigkeiten richtig an?",
        "fr": "Gaz dont la masse molaire et la température absolue sont données : I. H2 (2 g/mol), 200 K II. CH4 (16 g/mol), 400 K III. O2 (32 g/mol), 800 K. Quelle proposition donne correctement la relation entre leurs vitesses de diffusion ?",
        "ru": "Даны газы с молярными массами и абсолютными температурами: I. H2 (2 г/моль), 200 K II. CH4 (16 г/моль), 400 K III. O2 (32 г/моль), 800 K. В каком варианте правильно указано соотношение их скоростей диффузии?",
        "ar": "فيما يلي الكتل المولية ودرجات الحرارة المطلقة لعدة غازات: I. H2 (2 g/mol)، 200 K II. CH4 (16 g/mol)، 400 K III. O2 (32 g/mol)، 800 K. أيّ الخيارات الآتية يعطي العلاقة الصحيحة بين سرعات انتشار هذه الغازات؟",
        "zh": "已知下列气体的摩尔质量和热力学温度：I. H2(2 g/mol)，200 K II. CH4(16 g/mol)，400 K III. O2(32 g/mol)，800 K。它们的扩散速率关系哪一项正确？",
        "ku": "Gazên ku girseya molar û germahiya mutleq a wan hatine dayîn: I. H2 (2 g/mol), 200 K II. CH4 (16 g/mol), 400 K III. O2 (32 g/mol), 800 K. Têkiliya navbera lezên belavbûna wan di kîjan bersivê de rast hatiye dayîn?"
      },
      "options": [
        {
          "tr": "I > II = III",
          "en": "I > II = III",
          "de": "I > II = III",
          "fr": "I > II = III",
          "ru": "I > II = III",
          "ar": "I > II = III",
          "zh": "I > II = III",
          "ku": "I > II = III"
        },
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
          "tr": "II = III > I",
          "en": "II = III > I",
          "de": "II = III > I",
          "fr": "II = III > I",
          "ru": "II = III > I",
          "ar": "II = III > I",
          "zh": "II = III > I",
          "ku": "II = III > I"
        },
        {
          "tr": "III > II > I",
          "en": "III > II > I",
          "de": "III > II > I",
          "fr": "III > II > I",
          "ru": "III > II > I",
          "ar": "III > II > I",
          "zh": "III > II > I",
          "ku": "III > II > I"
        },
        {
          "tr": "I = II = III",
          "en": "I = II = III",
          "de": "I = II = III",
          "fr": "I = II = III",
          "ru": "I = II = III",
          "ar": "I = II = III",
          "zh": "I = II = III",
          "ku": "I = II = III"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Difüzyon hızı v ∝ sqrt(T/M) ile orantılıdır. I: sqrt(200/2) = sqrt(100) = 10; II: sqrt(400/16) = sqrt(25) = 5; III: sqrt(800/32) = sqrt(25) = 5. Buna göre I > II = III'tür. Yalnızca mol kütlelerine bakıp sıcaklığı hesaba katmayan öğrenci I > II > III, yalnızca sıcaklığa bakan ise III > II > I sonucuna ulaşır.",
        "en": "The diffusion rate is proportional to sqrt(T/M). I: sqrt(200/2) = sqrt(100) = 10; II: sqrt(400/16) = sqrt(25) = 5; III: sqrt(800/32) = sqrt(25) = 5. So I > II = III. A student who looks only at the molar masses and ignores temperature concludes I > II > III; one who looks only at temperature concludes III > II > I.",
        "de": "Die Diffusionsgeschwindigkeit ist proportional zu sqrt(T/M). I: sqrt(200/2) = sqrt(100) = 10; II: sqrt(400/16) = sqrt(25) = 5; III: sqrt(800/32) = sqrt(25) = 5. Also I > II = III. Wer nur die Molmassen betrachtet und die Temperatur ignoriert, kommt auf I > II > III; wer nur die Temperatur betrachtet, auf III > II > I.",
        "fr": "La vitesse de diffusion est proportionnelle à sqrt(T/M). I : sqrt(200/2) = sqrt(100) = 10 ; II : sqrt(400/16) = sqrt(25) = 5 ; III : sqrt(800/32) = sqrt(25) = 5. Donc I > II = III. L'élève qui ne regarde que les masses molaires et ignore la température conclut I > II > III ; celui qui ne regarde que la température conclut III > II > I.",
        "ru": "Скорость диффузии пропорциональна sqrt(T/M). I: sqrt(200/2) = sqrt(100) = 10; II: sqrt(400/16) = sqrt(25) = 5; III: sqrt(800/32) = sqrt(25) = 5. Следовательно, I > II = III. Ученик, учитывающий только молярные массы, но не температуру, придёт к I > II > III, а учитывающий только температуру — к III > II > I.",
        "ar": "سرعة الانتشار تتناسب مع sqrt(T/M). I: sqrt(200/2) = sqrt(100) = 10؛ II: sqrt(400/16) = sqrt(25) = 5؛ III: sqrt(800/32) = sqrt(25) = 5. إذن I > II = III. الطالب الذي ينظر إلى الكتل المولية فقط ويهمل درجة الحرارة يستنتج I > II > III، ومن ينظر إلى درجة الحرارة فقط يستنتج III > II > I.",
        "zh": "扩散速率与 sqrt(T/M) 成正比。I：sqrt(200/2) = sqrt(100) = 10；II：sqrt(400/16) = sqrt(25) = 5；III：sqrt(800/32) = sqrt(25) = 5。所以 I > II = III。只看摩尔质量而忽略温度的学生会得出 I > II > III；只看温度的学生会得出 III > II > I。",
        "ku": "Leza belavbûnê bi sqrt(T/M) re têkildar e. I: sqrt(200/2) = sqrt(100) = 10; II: sqrt(400/16) = sqrt(25) = 5; III: sqrt(800/32) = sqrt(25) = 5. Ji ber vê yekê I > II = III. Xwendekarê ku tenê li girseyên molar dinêre û germahiyê nahesibîne digihîje I > II > III; yê ku tenê li germahiyê dinêre digihîje III > II > I."
      }
    },
    {
      "id": "u13-twin14",
      "stem": {
        "tr": "N2 gazı aşağıdaki basınç ve sıcaklık koşullarının hangisinde ideal gaz davranışından en çok sapar? (N2'nin kritik sıcaklığı 126 K'dir; verilen koşulların hepsinde N2 gaz hâlindedir.)",
        "en": "Under which of the following pressure and temperature conditions does N2 gas deviate most from ideal gas behavior? (The critical temperature of N2 is 126 K; N2 is a gas under all the given conditions.)",
        "de": "Unter welchen der folgenden Druck- und Temperaturbedingungen weicht N2 am stärksten vom idealen Gasverhalten ab? (Die kritische Temperatur von N2 beträgt 126 K; unter allen Bedingungen ist N2 gasförmig.)",
        "fr": "Dans laquelle des conditions de pression et de température suivantes le N2 s'écarte-t-il le plus du comportement du gaz parfait ? (La température critique de N2 est 126 K ; N2 est gazeux dans toutes les conditions données.)",
        "ru": "При каких из приведённых значений давления и температуры газ N2 сильнее всего отклоняется от поведения идеального газа? (Критическая температура N2 равна 126 K; во всех указанных условиях N2 находится в газообразном состоянии.)",
        "ar": "في أيّ من ظروف الضغط ودرجة الحرارة الآتية ينحرف غاز N2 أكثر ما يمكن عن سلوك الغاز المثالي؟ (درجة الحرارة الحرجة لـ N2 هي 126 K، وN2 غاز في جميع الظروف المعطاة.)",
        "zh": "N2在下列哪一组压强和温度条件下偏离理想气体行为最大？(N2的临界温度为126 K；在所给条件下N2均为气态。)",
        "ku": "Gaza N2 di kîjan ji van şertên zext û germahiyê de herî zêde ji tevgera gaza îdeal dûr dikeve? (Germahiya krîtîk a N2 126 K ye; di hemû şertên dayî de N2 gaz e.)"
      },
      "options": [
        {
          "tr": "0,5 atm; 500 K",
          "en": "0.5 atm; 500 K",
          "de": "0,5 atm; 500 K",
          "fr": "0,5 atm ; 500 K",
          "ru": "0,5 атм; 500 K",
          "ar": "0.5 atm؛ 500 K",
          "zh": "0.5 atm；500 K",
          "ku": "0,5 atm; 500 K"
        },
        {
          "tr": "1 atm; 150 K",
          "en": "1 atm; 150 K",
          "de": "1 atm; 150 K",
          "fr": "1 atm ; 150 K",
          "ru": "1 атм; 150 K",
          "ar": "1 atm؛ 150 K",
          "zh": "1 atm；150 K",
          "ku": "1 atm; 150 K"
        },
        {
          "tr": "10 atm; 300 K",
          "en": "10 atm; 300 K",
          "de": "10 atm; 300 K",
          "fr": "10 atm ; 300 K",
          "ru": "10 атм; 300 K",
          "ar": "10 atm؛ 300 K",
          "zh": "10 atm；300 K",
          "ku": "10 atm; 300 K"
        },
        {
          "tr": "50 atm; 500 K",
          "en": "50 atm; 500 K",
          "de": "50 atm; 500 K",
          "fr": "50 atm ; 500 K",
          "ru": "50 атм; 500 K",
          "ar": "50 atm؛ 500 K",
          "zh": "50 atm；500 K",
          "ku": "50 atm; 500 K"
        },
        {
          "tr": "50 atm; 150 K",
          "en": "50 atm; 150 K",
          "de": "50 atm; 150 K",
          "fr": "50 atm ; 150 K",
          "ru": "50 атм; 150 K",
          "ar": "50 atm؛ 150 K",
          "zh": "50 atm；150 K",
          "ku": "50 atm; 150 K"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Basınç arttıkça tanecikler birbirine yaklaşır, öz hacim ve çekim kuvvetleri önem kazanır; sıcaklık düştükçe tanecikler yavaşlar ve çekim kuvvetlerinin etkisi artar. Bu yüzden en yüksek basınç ile en düşük sıcaklığın bir arada olduğu 50 atm ve 150 K koşulu en büyük sapmayı verir. 50 atm ve 500 K'de basınç aynı olsa da yüksek sıcaklık çekimin etkisini azaltır; 1 atm ve 150 K'de sıcaklık düşük ama tanecikler birbirinden uzaktır. 0,5 atm ve 500 K ise ideale en yakın koşuldur.",
        "en": "As pressure increases the particles come closer, so their own volume and attractions matter more; as temperature falls the particles slow down and attractions have a larger effect. So 50 atm and 150 K, which combines the highest pressure with the lowest temperature, gives the largest deviation. At 50 atm and 500 K the pressure is the same but the high temperature weakens the effect of attractions; at 1 atm and 150 K the temperature is low but the particles are far apart. 0.5 atm and 500 K is the condition closest to ideal.",
        "de": "Mit steigendem Druck rücken die Teilchen zusammen, Eigenvolumen und Anziehung werden wichtiger; mit sinkender Temperatur werden die Teilchen langsamer und die Anziehung wirkt stärker. Daher ergibt 50 atm und 150 K – höchster Druck und tiefste Temperatur zusammen – die größte Abweichung. Bei 50 atm und 500 K ist der Druck gleich, aber die hohe Temperatur schwächt die Wirkung der Anziehung; bei 1 atm und 150 K ist die Temperatur niedrig, die Teilchen sind aber weit voneinander entfernt. 0,5 atm und 500 K liegt dem Ideal am nächsten.",
        "fr": "Quand la pression augmente, les particules se rapprochent et leur volume propre et leurs attractions comptent davantage ; quand la température baisse, elles ralentissent et les attractions ont plus d'effet. La condition 50 atm et 150 K, qui réunit la pression la plus élevée et la température la plus basse, donne donc le plus grand écart. À 50 atm et 500 K, la pression est la même mais la haute température affaiblit l'effet des attractions ; à 1 atm et 150 K, la température est basse mais les particules sont éloignées. 0,5 atm et 500 K est la condition la plus proche de l'idéal.",
        "ru": "С ростом давления частицы сближаются, и их собственный объём и притяжение становятся существеннее; с понижением температуры частицы замедляются, и влияние притяжения растёт. Поэтому условия 50 атм и 150 K, где сочетаются наибольшее давление и наименьшая температура, дают наибольшее отклонение. При 50 атм и 500 K давление то же, но высокая температура ослабляет влияние притяжения; при 1 атм и 150 K температура низкая, но частицы далеко друг от друга. Условия 0,5 атм и 500 K наиболее близки к идеальным.",
        "ar": "كلما زاد الضغط اقتربت الجسيمات بعضها من بعض فازدادت أهمية حجمها الذاتي والتجاذب بينها، وكلما انخفضت درجة الحرارة تباطأت الجسيمات وازداد أثر التجاذب. لذا يعطي الظرف 50 atm و150 K، الذي يجمع أعلى ضغط وأدنى درجة حرارة، أكبر انحراف. عند 50 atm و500 K الضغط نفسه لكن درجة الحرارة المرتفعة تُضعف أثر التجاذب، وعند 1 atm و150 K درجة الحرارة منخفضة لكن الجسيمات متباعدة. أما 0.5 atm و500 K فهو الأقرب إلى المثالي.",
        "zh": "压强增大时粒子彼此靠近，自身体积和引力的影响增大；温度降低时粒子变慢，引力的作用增强。因此同时具有最高压强和最低温度的50 atm、150 K偏离最大。50 atm、500 K时压强相同，但高温削弱了引力的影响；1 atm、150 K时温度低，但粒子相距很远。0.5 atm、500 K最接近理想状态。",
        "ku": "Dema zext zêde dibe perçe nêzî hev dibin, qebareya wan a xwe û kişandin girîngtir dibin; dema germahî dadikeve perçe hêdî dibin û bandora kişandinê zêde dibe. Ji ber vê yekê şertê 50 atm û 150 K, ku zexta herî bilind û germahiya herî nizm bi hev re ne, dûrketina herî mezin dide. Di 50 atm û 500 K de zext heman e lê germahiya bilind bandora kişandinê qels dike; di 1 atm û 150 K de germahî nizm e lê perçe ji hev dûr in. 0,5 atm û 500 K şertê herî nêzî îdeal e."
      }
    },
    {
      "id": "u13-twin15",
      "stem": {
        "tr": "Oda koşullarında yüksek basınçlı bir tüpteki gerçek bir gaz, dar bir vanadan düşük basınçlı ortama genleştirildiğinde soğumaktadır. Bu olayla ilgili; I. Genleşen gaz, tanecikler arası çekim kuvvetlerini yenmek için kendi kinetik enerjisinden harcar. II. Aynı soğuma ideal gazda da gözlenir, çünkü ideal gaz tanecikleri arasında da çekim vardır. III. Buzdolabı ve klimaların çalışmasında bu ilkeden yararlanılır. yargılarından hangileri doğrudur?",
        "en": "At room conditions, a real gas in a high-pressure cylinder cools when it is expanded through a narrow valve into a low-pressure region. Which of the following statements about this process are correct? I. The expanding gas uses part of its own kinetic energy to overcome the attractive forces between particles. II. The same cooling is observed for an ideal gas, because there is attraction between ideal gas particles as well. III. Refrigerators and air conditioners make use of this principle.",
        "de": "Bei Raumbedingungen kühlt ein reales Gas aus einer Hochdruckflasche ab, wenn es durch ein enges Ventil in einen Bereich niedrigen Drucks entspannt wird. Welche Aussagen dazu sind richtig? I. Das expandierende Gas verbraucht einen Teil seiner kinetischen Energie, um die Anziehungskräfte zwischen den Teilchen zu überwinden. II. Dieselbe Abkühlung tritt bei einem idealen Gas auf, weil auch zwischen idealen Gasteilchen Anziehung besteht. III. Kühlschränke und Klimaanlagen nutzen dieses Prinzip.",
        "fr": "Dans les conditions ambiantes, un gaz réel contenu dans une bouteille à haute pression se refroidit lorsqu'on le détend à travers une vanne étroite vers une zone de basse pression. Lesquelles des affirmations suivantes sont correctes ? I. Le gaz qui se détend dépense une partie de son énergie cinétique pour vaincre les forces d'attraction entre particules. II. Le même refroidissement s'observe pour un gaz parfait, car il existe aussi une attraction entre les particules d'un gaz parfait. III. Les réfrigérateurs et les climatiseurs exploitent ce principe.",
        "ru": "В комнатных условиях реальный газ из баллона высокого давления охлаждается при расширении через узкий вентиль в область низкого давления. Какие утверждения об этом процессе верны? I. Расширяющийся газ тратит часть своей кинетической энергии на преодоление сил притяжения между частицами. II. Такое же охлаждение наблюдается и у идеального газа, так как между частицами идеального газа тоже есть притяжение. III. Этот принцип используется в работе холодильников и кондиционеров.",
        "ar": "في ظروف الغرفة يبرد غاز حقيقي موجود في أسطوانة عالية الضغط عند تمدده عبر صمام ضيق إلى منطقة منخفضة الضغط. أيّ العبارات الآتية حول هذه العملية صحيحة؟ I. يستهلك الغاز المتمدد جزءًا من طاقته الحركية للتغلب على قوى التجاذب بين الجسيمات. II. يُلاحظ التبريد نفسه في الغاز المثالي لأن بين جسيمات الغاز المثالي تجاذبًا أيضًا. III. تستفيد الثلاجات والمكيفات من هذا المبدأ.",
        "zh": "在室温条件下，高压钢瓶中的真实气体经狭窄阀门膨胀进入低压区域时会降温。关于这一过程，有下列说法：I. 膨胀的气体消耗自身部分动能来克服粒子间的引力。II. 理想气体也会出现同样的降温，因为理想气体粒子之间也存在引力。III. 冰箱和空调的工作利用了这一原理。其中正确的是哪些？",
        "ku": "Di şertên odeyê de gazeke rastîn a di tûpeke zext-bilind de, dema ji valfeke teng ber bi herêma zexta nizm tê berfirehkirin, sar dibe. Kîjan ji van gotinan li ser vê bûyerê rast in? I. Gaza ku berfireh dibe ji bo derbaskirina hêzên kişandinê yên navbera perçeyan beşek ji enerjiya xwe ya kînetîk xerc dike. II. Heman sarbûn di gaza îdeal de jî tê dîtin, ji ber ku di navbera perçeyên gaza îdeal de jî kişandin heye. III. Sarinc û klîma ji vê prensîbê sûd werdigirin."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "I only",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "II only",
          "de": "Nur II",
          "fr": "II seulement",
          "ru": "Только II",
          "ar": "II فقط",
          "zh": "仅II",
          "ku": "Tenê II"
        },
        {
          "tr": "I ve II",
          "en": "I and II",
          "de": "I und II",
          "fr": "I et II",
          "ru": "I и II",
          "ar": "I و II",
          "zh": "I和II",
          "ku": "I û II"
        },
        {
          "tr": "I ve III",
          "en": "I and III",
          "de": "I und III",
          "fr": "I et III",
          "ru": "I и III",
          "ar": "I و III",
          "zh": "I和III",
          "ku": "I û III"
        },
        {
          "tr": "II ve III",
          "en": "II and III",
          "de": "II und III",
          "fr": "II et III",
          "ru": "II и III",
          "ar": "II و III",
          "zh": "II和III",
          "ku": "II û III"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "I doğrudur: genleşmede tanecikler arası uzaklık artar, çekimi yenmek için gereken enerji gazın kinetik enerjisinden karşılanır; tanecikler yavaşlar ve sıcaklık düşer. II yanlıştır: ideal gaz modelinde tanecikler arasında çekim yoktur, bu yüzden böyle bir soğuma ideal gazda beklenmez; Joule-Thomson soğuması gerçek gazlara özgüdür. III doğrudur: buzdolabı ve klimalarda sıkıştırılmış soğutucu akışkan bir kısma vanasından genleştirilerek soğutulur.",
        "en": "I is correct: during expansion the distance between particles increases and the energy needed to overcome the attraction comes from the gas's kinetic energy, so the particles slow down and the temperature falls. II is false: the ideal gas model has no attraction between particles, so no such cooling is expected for an ideal gas; Joule-Thomson cooling is a property of real gases. III is correct: in refrigerators and air conditioners the compressed refrigerant is cooled by expanding it through a throttling valve.",
        "de": "I ist richtig: Bei der Expansion vergrößert sich der Teilchenabstand; die Energie zur Überwindung der Anziehung stammt aus der kinetischen Energie des Gases, die Teilchen werden langsamer und die Temperatur sinkt. II ist falsch: Im Modell des idealen Gases gibt es keine Anziehung, daher ist diese Abkühlung beim idealen Gas nicht zu erwarten; die Joule-Thomson-Abkühlung ist eine Eigenschaft realer Gase. III ist richtig: In Kühlschränken und Klimaanlagen wird das verdichtete Kältemittel durch Entspannen über ein Drosselventil abgekühlt.",
        "fr": "I est vraie : lors de la détente, la distance entre particules augmente et l'énergie nécessaire pour vaincre l'attraction est prise sur l'énergie cinétique du gaz ; les particules ralentissent et la température baisse. II est fausse : le modèle du gaz parfait ne comporte pas d'attraction entre particules, ce refroidissement n'est donc pas attendu pour un gaz parfait ; le refroidissement Joule-Thomson est propre aux gaz réels. III est vraie : dans les réfrigérateurs et climatiseurs, le fluide frigorigène comprimé est refroidi par détente à travers un détendeur.",
        "ru": "I верно: при расширении расстояние между частицами увеличивается, и энергия на преодоление притяжения берётся из кинетической энергии газа; частицы замедляются, и температура падает. II неверно: в модели идеального газа притяжения между частицами нет, поэтому у идеального газа такого охлаждения не ожидается; охлаждение по Джоулю — Томсону свойственно только реальным газам. III верно: в холодильниках и кондиционерах сжатый хладагент охлаждается при расширении через дроссельный вентиль.",
        "ar": "I صحيحة: عند التمدد تزداد المسافة بين الجسيمات، وتُستمد الطاقة اللازمة للتغلب على التجاذب من الطاقة الحركية للغاز، فتتباطأ الجسيمات وتنخفض درجة الحرارة. II خاطئة: لا يوجد تجاذب بين الجسيمات في نموذج الغاز المثالي، لذا لا يُتوقع هذا التبريد في الغاز المثالي؛ فتبريد جول-طومسون خاصية للغازات الحقيقية. III صحيحة: في الثلاجات والمكيفات يُبرَّد سائل التبريد المضغوط بتمديده عبر صمام خانق.",
        "zh": "I正确：膨胀时粒子间距离增大，克服引力所需的能量来自气体自身的动能，粒子变慢，温度降低。II错误：理想气体模型中粒子间没有引力，因此理想气体不会出现这种降温；焦耳-汤姆孙降温是真实气体的特征。III正确：冰箱和空调中，被压缩的制冷剂经节流阀膨胀而降温。",
        "ku": "I rast e: di berfirehbûnê de dûrahiya navbera perçeyan zêde dibe û enerjiya ji bo derbaskirina kişandinê ji enerjiya kînetîk a gazê tê; perçe hêdî dibin û germahî dadikeve. II şaş e: di modela gaza îdeal de di navbera perçeyan de kişandin tune, ji ber vê yekê sarbûneke wisa di gaza îdeal de nayê hêvîkirin; sarbûna Joule-Thomson taybetiya gazên rastîn e. III rast e: di sarinc û klîmayan de akışkana sarker a pêçayî bi berfirehkirina ji valfeke tengkirinê tê sarkirin."
      }
    },
    {
      "id": "u13-twin16",
      "stem": {
        "tr": "Kinetik teoriye göre ideal gazlarla ilgili; I. Tanecikler sürekli, gelişigüzel ve doğrusal hareket eder; birbirleriyle ve kabın çeperleriyle esnek çarpışırlar. II. Taneciklerin kendi hacimleri, kabın hacmi yanında ihmal edilecek kadar küçüktür. III. Tanecikler arasındaki çekim kuvveti sıcaklık arttıkça artar. yargılarından hangileri doğrudur?",
        "en": "According to kinetic theory, which of the following statements about ideal gases are correct? I. The particles move continuously, randomly and in straight lines, and their collisions with each other and with the container walls are elastic. II. The particles' own volume is negligibly small compared with the volume of the container. III. The attractive force between the particles increases as temperature increases.",
        "de": "Welche Aussagen über ideale Gase sind nach der kinetischen Gastheorie richtig? I. Die Teilchen bewegen sich ständig, ungeordnet und geradlinig; ihre Stöße untereinander und mit der Gefäßwand sind elastisch. II. Das Eigenvolumen der Teilchen ist gegenüber dem Gefäßvolumen vernachlässigbar klein. III. Die Anziehungskraft zwischen den Teilchen nimmt mit steigender Temperatur zu.",
        "fr": "Selon la théorie cinétique, lesquelles des affirmations suivantes sur les gaz parfaits sont correctes ? I. Les particules se déplacent continuellement, de façon désordonnée et en ligne droite ; leurs chocs entre elles et contre les parois sont élastiques. II. Le volume propre des particules est négligeable devant le volume du récipient. III. La force d'attraction entre les particules augmente quand la température augmente.",
        "ru": "Какие утверждения об идеальных газах верны согласно молекулярно-кинетической теории? I. Частицы движутся непрерывно, хаотически и прямолинейно; их столкновения друг с другом и со стенками сосуда упругие. II. Собственный объём частиц пренебрежимо мал по сравнению с объёмом сосуда. III. Сила притяжения между частицами увеличивается с ростом температуры.",
        "ar": "وفق النظرية الحركية، أيّ العبارات الآتية حول الغازات المثالية صحيحة؟ I. تتحرك الجسيمات حركة مستمرة عشوائية في خطوط مستقيمة، وتصادماتها فيما بينها ومع جدران الوعاء مرنة. II. الحجم الذاتي للجسيمات صغير جدًا يمكن إهماله مقارنةً بحجم الوعاء. III. تزداد قوة التجاذب بين الجسيمات بارتفاع درجة الحرارة.",
        "zh": "根据分子动理论，关于理想气体有下列说法：I. 粒子做持续、无规则的直线运动，粒子之间以及粒子与器壁之间的碰撞是弹性碰撞。II. 粒子自身的体积与容器体积相比小到可以忽略。III. 粒子间的引力随温度升高而增大。其中正确的是哪些？",
        "ku": "Li gorî teoriya kînetîk, kîjan ji van gotinan li ser gazên îdeal rast in? I. Perçe bi berdewamî, bêserûber û bi xêza rast diçin; lêketinên wan bi hev re û bi dîwarên firaxê re elastîk in. II. Qebareya perçeyan a xwe li hember qebareya firaxê ewqas biçûk e ku dikare neyê hesibandin. III. Hêza kişandinê ya navbera perçeyan bi zêdebûna germahiyê zêde dibe."
      },
      "options": [
        {
          "tr": "Yalnız I",
          "en": "I only",
          "de": "Nur I",
          "fr": "I seulement",
          "ru": "Только I",
          "ar": "I فقط",
          "zh": "仅I",
          "ku": "Tenê I"
        },
        {
          "tr": "Yalnız II",
          "en": "II only",
          "de": "Nur II",
          "fr": "II seulement",
          "ru": "Только II",
          "ar": "II فقط",
          "zh": "仅II",
          "ku": "Tenê II"
        },
        {
          "tr": "I ve II",
          "en": "I and II",
          "de": "I und II",
          "fr": "I et II",
          "ru": "I и II",
          "ar": "I و II",
          "zh": "I和II",
          "ku": "I û II"
        },
        {
          "tr": "I ve III",
          "en": "I and III",
          "de": "I und III",
          "fr": "I et III",
          "ru": "I и III",
          "ar": "I و III",
          "zh": "I和III",
          "ku": "I û III"
        },
        {
          "tr": "II ve III",
          "en": "II and III",
          "de": "II und III",
          "fr": "II et III",
          "ru": "II и III",
          "ar": "II و III",
          "zh": "II和III",
          "ku": "II û III"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "I ve II kinetik teorinin temel varsayımlarıdır: tanecikler sürekli ve gelişigüzel doğrusal hareket eder, çarpışmalarda toplam kinetik enerji korunur ve tanecik hacmi kap hacmi yanında ihmal edilir. III yanlıştır: ideal gaz modelinde tanecikler arasında hiç çekim olmadığı kabul edilir; sıcaklık artışı çekim oluşturmaz, yalnızca taneciklerin ortalama kinetik enerjisini artırır.",
        "en": "I and II are basic assumptions of kinetic theory: particles move continuously and randomly in straight lines, total kinetic energy is conserved in collisions, and particle volume is negligible compared with the container volume. III is false: the ideal gas model assumes there is no attraction at all between particles; raising the temperature does not create attraction, it only increases the average kinetic energy of the particles.",
        "de": "I und II sind Grundannahmen der kinetischen Gastheorie: Die Teilchen bewegen sich ständig und ungeordnet geradlinig, bei Stößen bleibt die gesamte kinetische Energie erhalten, und das Teilchenvolumen ist gegenüber dem Gefäßvolumen vernachlässigbar. III ist falsch: Im Modell des idealen Gases gibt es überhaupt keine Anziehung zwischen den Teilchen; eine Temperaturerhöhung erzeugt keine Anziehung, sie erhöht nur die mittlere kinetische Energie der Teilchen.",
        "fr": "I et II sont des hypothèses fondamentales de la théorie cinétique : les particules se déplacent continuellement et au hasard en ligne droite, l'énergie cinétique totale se conserve lors des chocs et le volume des particules est négligeable devant celui du récipient. III est fausse : le modèle du gaz parfait suppose l'absence totale d'attraction entre particules ; une hausse de température ne crée pas d'attraction, elle augmente seulement l'énergie cinétique moyenne des particules.",
        "ru": "I и II — основные положения молекулярно-кинетической теории: частицы движутся непрерывно, хаотически и прямолинейно, при столкновениях суммарная кинетическая энергия сохраняется, а объём частиц пренебрежимо мал по сравнению с объёмом сосуда. III неверно: в модели идеального газа притяжение между частицами полностью отсутствует; повышение температуры не создаёт притяжения, а лишь увеличивает среднюю кинетическую энергию частиц.",
        "ar": "I وII من الفرضيات الأساسية للنظرية الحركية: تتحرك الجسيمات حركة مستمرة عشوائية في خطوط مستقيمة، وتُحفظ الطاقة الحركية الكلية في التصادمات، ويُهمل حجم الجسيمات مقارنةً بحجم الوعاء. III خاطئة: يفترض نموذج الغاز المثالي عدم وجود أي تجاذب بين الجسيمات؛ وارتفاع درجة الحرارة لا يُنشئ تجاذبًا بل يزيد متوسط الطاقة الحركية للجسيمات فقط.",
        "zh": "I和II是分子动理论的基本假设：粒子做持续、无规则的直线运动，碰撞中总动能守恒，粒子体积与容器体积相比可以忽略。III错误：理想气体模型假定粒子间完全没有引力；升高温度不会产生引力，只会增大粒子的平均动能。",
        "ku": "I û II texmînên bingehîn ên teoriya kînetîk in: perçe bi berdewamî û bêserûber bi xêza rast diçin, di lêketinan de enerjiya kînetîk a tevahî diparêze û qebareya perçeyan li hember qebareya firaxê nayê hesibandin. III şaş e: modela gaza îdeal dihesibîne ku di navbera perçeyan de qet kişandin tune; zêdebûna germahiyê kişandinê çênake, tenê enerjiya kînetîk a navîn a perçeyan zêde dike."
      }
    }
  ]
};

export default unit13;
