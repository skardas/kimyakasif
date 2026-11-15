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
    "ru": "Кинетическая теория газов",
    "ar": "النظرية الحركية للغازات",
    "zh": "气体动理论",
    "ku": "Teoriya Kînetîk a Gazan"
  },
  "subtitle": {
    "tr": "Graham Difüzyon, Kısmi Basınç ve Joule-Thomson",
    "en": "Diffusion, Partial Pressure & Non-Ideal",
    "de": "Graham-Diffusion, Partialdruck und Joule-Thomson",
    "fr": "Diffusion Graham, pression partielle et Joule-Thomson",
    "ru": "Диффузия Грэма, парциальное давление и Джоуль-Томсон.",
    "ar": "انتشار غراهام، الضغط الجزئي وجول طومسون",
    "zh": "格雷厄姆扩散、分压和焦耳-汤姆逊",
    "ku": "Graham Diffusion, Zexta Parçeyî û Joule-Thomson"
  },
  "facts": [
    {
      "id": "u13-f01",
      "fact": {
        "tr": "Graham Difüzyon Yasası: Gazların difüzyon hızı mol kütlesinin kareköküyle ters orantılıdır (v1/v2 = sqrt(M2/M1)).",
        "en": "Graham's Law of Diffusion: The diffusion rate of gases is inversely proportional to the square root of the molar mass (v1/v2 = sqrt(M2/M1)).",
        "de": "Grahams Diffusionsgesetz: Die Diffusionsrate von Gasen ist umgekehrt proportional zur Quadratwurzel der Molmasse (v1/v2 = sqrt(M2/M1)).",
        "fr": "Loi de diffusion de Graham : Le taux de diffusion des gaz est inversement proportionnel à la racine carrée de la masse molaire (v1/v2 = sqrt(M2/M1)).",
        "ru": "Закон диффузии Грэма: Скорость диффузии газов обратно пропорциональна квадратному корню из молярной массы (v1/v2 = sqrt(M2/M1)).",
        "ar": "قانون غراهام للانتشار: معدل انتشار الغازات يتناسب عكسيا مع الجذر التربيعي للكتلة المولية (v1/v2 = sqrt(M2/M1)).",
        "zh": "格雷厄姆扩散定律：气体的扩散速率与摩尔质量的平方根成反比（v1/v2 = sqrt(M2/M1)）。",
        "ku": "Zagona Belavbûnê ya Graham: Rêjeya belavbûna gazan berovajî berevajî rehê çargoşeya girseya molarê ye (v1/v2 = sqrt(M2/M1))."
      },
      "trap": {
        "tr": "Mol kütlesi büyük olan gazlar daha hızlı difüzlenir.",
        "en": "Gases with larger molar masses diffuse faster.",
        "de": "Gase mit größeren Molmassen diffundieren schneller.",
        "fr": "Les gaz ayant des masses molaires plus grandes diffusent plus rapidement.",
        "ru": "Газы с большей молярной массой диффундируют быстрее.",
        "ar": "الغازات ذات الكتل المولية الأكبر تنتشر بشكل أسرع.",
        "zh": "摩尔质量越大的气体扩散得越快。",
        "ku": "Gazên bi girseyên molî yên mezintir zûtir belav dibin."
      }
    },
    {
      "id": "u13-f02",
      "fact": {
        "tr": "Gazların difüzyon hızı mutlak sıcaklığın kareköküyle doğru orantılıdır (v1/v2 = sqrt((T1*M2)/(T2*M1))).",
        "en": "The diffusion rate of gases is directly proportional to the square root of the absolute temperature (v1/v2 = sqrt((T1*M2)/(T2*M1))).",
        "de": "Die Diffusionsgeschwindigkeit von Gasen ist direkt proportional zur Quadratwurzel der absoluten Temperatur (v1/v2 = sqrt((T1*M2)/(T2*M1))).",
        "fr": "Le taux de diffusion des gaz est directement proportionnel à la racine carrée de la température absolue (v1/v2 = sqrt((T1*M2)/(T2*M1))).",
        "ru": "Скорость диффузии газов прямо пропорциональна корню квадратному из абсолютной температуры (v1/v2 = sqrt((T1*M2)/(T2*M1))).",
        "ar": "يتناسب معدل انتشار الغازات بشكل مباشر مع الجذر التربيعي لدرجة الحرارة المطلقة (v1/v2 = sqrt((T1*M2)/(T2*M1))).",
        "zh": "气体的扩散速率与绝对温度的平方根成正比（v1/v2 = sqrt((T1*M2)/(T2*M1))）。",
        "ku": "Rêjeya belavbûna gazan rasterast bi koka çargoşe ya germahiya mutleq re têkildar e (v1/v2 = sqrt((T1*M2)/(T2*M1)))."
      },
      "trap": {
        "tr": "Bir gazın mutlak sıcaklığı 4 katına çıkarılırsa difüzyon hızı da 4 katına çıkar.",
        "en": "If the absolute temperature of a gas is quadrupled, its diffusion rate also quadruples.",
        "de": "Wird die absolute Temperatur eines Gases vervierfacht, vervierfacht sich auch seine Diffusionsgeschwindigkeit.",
        "fr": "Si la température absolue d'un gaz est multipliée par 4, sa vitesse de diffusion est aussi multipliée par 4.",
        "ru": "Если абсолютную температуру газа увеличить в 4 раза, скорость его диффузии тоже увеличится в 4 раза.",
        "ar": "إذا زادت درجة الحرارة المطلقة لغاز 4 مرات، يزداد معدل انتشاره أيضًا 4 مرات.",
        "zh": "若气体的绝对温度增大到原来的4倍，其扩散速率也增大到原来的4倍。",
        "ku": "Ger germahiya mutleq a gazekê 4 qat bibe, leza belavbûna wê jî 4 qat dibe."
      },
      "osymTip": {
        "tr": "Karekök ilişkisi vardır; hız 2 katına çıkar!",
        "en": "There is a square root relationship; speed doubles!",
        "de": "Es besteht eine Quadratwurzelbeziehung; Geschwindigkeit verdoppelt sich!",
        "fr": "Il existe une relation racine carrée ; la vitesse double !",
        "ru": "Существует отношение квадратного корня; скорость увеличивается в два раза!",
        "ar": "توجد علاقة جذر تربيعي؛ السرعة مضاعفة!",
        "zh": "存在平方根关系；速度翻倍！",
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
        "ru": "Закон парциальных давлений Дальтона: Парциальное давление газа в смеси равно Pi = Xi * Ptotal (Xi = ni/ntotal).",
        "ar": "قانون دالتون للضغوط الجزئية: الضغط الجزئي للغاز في الخليط هو Pi = Xi * Ptotal (Xi = ni / ntotal).",
        "zh": "道尔顿分压定律：混合物中气体的分压为 Pi = Xi * Ptotal (Xi = ni / ntotal)。",
        "ku": "Zagona Zextên Parçeyî ya Dalton: Pîvana qismî ya gazê di têkelê de Pi = Xi * Ptotal e (Xi = ni / ntotal)."
      },
      "trap": {
        "tr": "Kısmi basınç mol kesrinden bağımsızdır.",
        "en": "The partial pressure is independent of the mole fraction.",
        "de": "Der Partialdruck ist unabhängig vom Stoffmengenanteil.",
        "fr": "La pression partielle est indépendante de la fraction molaire.",
        "ru": "Парциальное давление не зависит от мольной доли.",
        "ar": "الضغط الجزئي مستقل عن جزء الخلد.",
        "zh": "分压与摩尔分数无关。",
        "ku": "Zexta qismî ji beşa molê serbixwe ye."
      }
    },
    {
      "id": "u13-f04",
      "fact": {
        "tr": "Gazların ortalama kinetik enerjisi (Ek = 3/2 kT) YALNIZCA mutlak sıcaklığa bağlıdır; gazın türünden bağımsızdır.",
        "en": "The average kinetic energy of gases (Ek = 3/2 kT) depends ONLY on absolute temperature; is independent of the type of gas.",
        "de": "Die durchschnittliche kinetische Energie von Gasen (Ek = 3/2 kT) hängt NUR von der absoluten Temperatur ab; ist unabhängig von der Gasart.",
        "fr": "L'énergie cinétique moyenne des gaz (Ek = 3/2 kT) dépend UNIQUEMENT de la température absolue ; est indépendant du type de gaz.",
        "ru": "Средняя кинетическая энергия газов (Ek = 3/2 kT) зависит ТОЛЬКО от абсолютной температуры; она не зависит от природы газа.",
        "ar": "متوسط الطاقة الحركية للغازات (Ek = 3/2 kT) يعتمد فقط على درجة الحرارة المطلقة؛ ولا يعتمد على نوع الغاز.",
        "zh": "气体的平均动能 (Ek = 3/2 kT) 仅取决于绝对温度；与气体类型无关。",
        "ku": "Enerjiya kînetîk a navîn a gazan (Ek = 3/2 kT) TENÊ bi germahiya mutleq ve girêdayî ye; ji cureyê gazê serbixwe ye."
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
      "osymTip": {
        "tr": "Aynı sıcaklıktaki tüm gazların ortalama kinetik enerjisi eşittir!",
        "en": "The average kinetic energy of all gases at the same temperature is equal!",
        "de": "Die durchschnittliche kinetische Energie aller Gase bei gleicher Temperatur ist gleich!",
        "fr": "L'énergie cinétique moyenne de tous les gaz à la même température est égale !",
        "ru": "Средняя кинетическая энергия всех газов при одинаковой температуре одинакова!",
        "ar": "متوسط ​​الطاقة الحركية لجميع الغازات عند نفس درجة الحرارة متساوي!",
        "zh": "相同温度下所有气体的平均动能相等！",
        "ku": "Enerjiya kînetîk a navînî ya hemî gazên di heman germahiyê de wekhev e!"
      }
    },
    {
      "id": "u13-f05",
      "fact": {
        "tr": "Yüksek sıcaklık, düşük basınç ve küçük mol kütlesi (zayıf çekim) gazları idealliğe yaklaştırır.",
        "en": "High temperature, low pressure and small molar mass (weak intermolecular attraction) bring gases closer to ideal behavior.",
        "de": "Hohe Temperatur, niedriger Druck und kleine Molmasse (schwache zwischenmolekulare Anziehung) bringen Gase dem idealen Verhalten näher.",
        "fr": "Une température élevée, une basse pression et une petite masse molaire (faible attraction intermoléculaire) rapprochent les gaz du comportement idéal.",
        "ru": "Высокая температура, низкое давление и малая молярная масса (слабое межмолекулярное притяжение) приближают поведение газов к идеальному.",
        "ar": "درجة الحرارة المرتفعة والضغط المنخفض والكتلة المولية الصغيرة (تجاذب ضعيف بين الجزيئات) تقرّب الغازات من السلوك المثالي.",
        "zh": "高温、低压和较小的摩尔质量（分子间引力弱）使气体更接近理想气体行为。",
        "ku": "Germahiya bilind, zexta nizm û girseya molar a biçûk (kişandina navmolekulî ya qels) gazan nêzîkî tevgera îdeal dikin."
      },
      "trap": {
        "tr": "Yüksek basınç ve düşük sıcaklıkta gazlar ideale en yakındır.",
        "en": "Gases at high pressure and low temperature are closest to ideal.",
        "de": "Gase mit hohem Druck und niedriger Temperatur kommen dem Ideal am nächsten.",
        "fr": "Les gaz à haute pression et basse température sont les plus proches de l’idéal.",
        "ru": "Наиболее близки к идеальным газы при высоком давлении и низкой температуре.",
        "ar": "الغازات ذات الضغط العالي ودرجة الحرارة المنخفضة هي الأقرب إلى المثالية.",
        "zh": "高压和低温下的气体最接近理想状态。",
        "ku": "Gazên di tansiyona bilind û germahiya nizm de herî nêzîk îdeal in."
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
      }
    },
    {
      "id": "u13-f07",
      "fact": {
        "tr": "Joule-Thomson Olayı: Genleşen gazın kendi iç enerjisini harcayarak soğuması olayıdır (buzdolabı ve klimalar).",
        "en": "Joule-Thomson Effect: It is the cooling of the expanding gas by consuming its own internal energy (refrigerators and air conditioners).",
        "de": "Joule-Thomson-Effekt: Dabei handelt es sich um die Abkühlung des expandierenden Gases durch den Verbrauch seiner eigenen inneren Energie (Kühlschränke und Klimaanlagen).",
        "fr": "Effet Joule-Thomson : C'est le refroidissement du gaz en expansion en consommant sa propre énergie interne (réfrigérateurs et climatiseurs).",
        "ru": "Эффект Джоуля-Томсона: охлаждение расширяющегося газа за счет потребления его собственной внутренней энергии (холодильники и кондиционеры).",
        "ar": "تأثير جول طومسون: هو تبريد الغاز المتمدد عن طريق استهلاك الطاقة الداخلية الخاصة به (الثلاجات والمكيفات).",
        "zh": "焦耳-汤姆逊效应：膨胀气体通过消耗其自身内部能量（冰箱和空调）来冷却。",
        "ku": "Bandora Joule-Thomson: Ew sarbûna gaza berbelavkirî ye ku bi vexwarina enerjiya xweya hundurîn (sax û klîma) ve ye."
      },
      "trap": {
        "tr": "Joule-Thomson genleşmesinde gaz hızla ısınır.",
        "en": "In Joule-Thomson expansion, the gas heats up rapidly.",
        "de": "Bei der Joule-Thomson-Expansion erwärmt sich das Gas schnell.",
        "fr": "Lors de la détente Joule-Thomson, le gaz s'échauffe rapidement.",
        "ru": "При расширении Джоуля-Томсона газ быстро нагревается.",
        "ar": "في تمدد جول طومسون، يسخن الغاز بسرعة.",
        "zh": "在焦耳-汤姆逊膨胀中，气体迅速升温。",
        "ku": "Di berfirehbûna Joule-Thomson de, gaz bi lez germ dibe."
      }
    },
    {
      "id": "u13-f08",
      "fact": {
        "tr": "Kritik sıcaklık: Bir gazın basınç uygulanarak sıvılaştırılabileceği en yüksek sıcaklıktır; üzerindeki sıcaklıkta gaz sıvılaştırılamaz.",
        "en": "Critical temperature: The highest temperature at which a gas can be liquefied by applying pressure; At temperatures above this, gas cannot be liquefied.",
        "de": "Kritische Temperatur: Die höchste Temperatur, bei der ein Gas durch Druckanwendung verflüssigt werden kann; Bei Temperaturen darüber kann Gas nicht verflüssigt werden.",
        "fr": "Température critique : température la plus élevée à laquelle un gaz peut être liquéfié en appliquant une pression ; À des températures supérieures, le gaz ne peut pas être liquéfié.",
        "ru": "Критическая температура: самая высокая температура, при которой газ можно сжижать под давлением; При температурах выше этой газ не может быть сжижен.",
        "ar": "درجة الحرارة الحرجة: أعلى درجة حرارة يمكن عندها تسييل الغاز بالضغط. عند درجات حرارة أعلى من ذلك، لا يمكن تسييل الغاز.",
        "zh": "临界温度：气体通过施加压力可以液化的最高温度；在高于此温度时，气体不能液化。",
        "ku": "Germahiya krîtîk: Germahiya herî bilind a ku tê de gazek bi pêkanîna zextê dikare şil bibe; Di germahiyên ji vê zêdetir de, gaz nikare şil bibe."
      },
      "trap": {
        "tr": "Kritik sıcaklığın üzerindeki akışkanlar sadece basınçla kolayca sıvılaşır.",
        "en": "Fluids above the critical temperature liquefy easily with pressure alone.",
        "de": "Flüssigkeiten oberhalb der kritischen Temperatur verflüssigen sich allein durch Druck leicht.",
        "fr": "Les fluides au-dessus de la température critique se liquéfient facilement avec la seule pression.",
        "ru": "Жидкости, температура которых превышает критическую, легко сжижаются только под действием давления.",
        "ar": "تسيل السوائل فوق درجة الحرارة الحرجة بسهولة بالضغط وحده.",
        "zh": "仅用压力，高于临界温度的流体就很容易液化。",
        "ku": "Şîvên li ser germahiya krîtîk tenê bi zextê bi hêsanî şil dibin."
      }
    },
    {
      "id": "u13-f09",
      "fact": {
        "tr": "Buhar, bir maddenin kritik sıcaklığının altındaki gaz hâlidir; sabit sıcaklıkta basınç artırılarak sıvılaştırılabilir.",
        "en": "Vapor is the gaseous state of a substance below its critical temperature; it can be liquefied by increasing the pressure at constant temperature.",
        "de": "Dampf ist der gasförmige Zustand eines Stoffes unterhalb seiner kritischen Temperatur; er kann bei konstanter Temperatur durch Druckerhöhung verflüssigt werden.",
        "fr": "La vapeur est l'état gazeux d'une substance en dessous de sa température critique ; elle peut être liquéfiée en augmentant la pression à température constante.",
        "ru": "Пар — это газообразное состояние вещества ниже его критической температуры; его можно сжижить, повышая давление при постоянной температуре.",
        "ar": "البخار هو الحالة الغازية للمادة عند درجة حرارة أقل من درجة حرارتها الحرجة؛ ويمكن تسييله بزيادة الضغط عند درجة حرارة ثابتة.",
        "zh": "蒸气是物质在其临界温度以下的气态；在温度不变时增大压强即可使其液化。",
        "ku": "Buhar rewşa gazî ya maddeyekê ye di bin germahiya wê ya krîtîk de; di germahiya sabît de bi zêdekirina zextê dikare were şilkirin."
      },
      "trap": {
        "tr": "Buhar ve gaz kavramları bilimsel olarak birebir aynıdır.",
        "en": "The concepts of steam and gas are scientifically exactly the same.",
        "de": "Die Konzepte von Dampf und Gas sind wissenschaftlich genau gleich.",
        "fr": "Les concepts de vapeur et de gaz sont scientifiquement exactement les mêmes.",
        "ru": "Понятия пара и газа с научной точки зрения совершенно одинаковы.",
        "ar": "إن مفهومي البخار والغاز متطابقان تمامًا من الناحية العلمية.",
        "zh": "蒸汽和气体的概念在科学上是完全相同的。",
        "ku": "Têgehên buhar û gazê bi zanistî tam yek in."
      }
    },
    {
      "id": "u13-f10",
      "fact": {
        "tr": "Su üstünde toplanan gazlarda toplam basınç Ptop = Pgaz + Psu_buharı formülüyle hesaplanır.",
        "en": "The total pressure in gases collected above water is calculated by the formula Ptop = Pgas + Pwater_vapour.",
        "de": "Der Gesamtdruck in über Wasser gesammelten Gasen wird nach der Formel Ptop = Pgas + PWasserdampf berechnet.",
        "fr": "La pression totale des gaz collectés au-dessus de l'eau est calculée par la formule Ptop = Pgas + Pwater_vapour.",
        "ru": "Общее давление газов, собранных над водой, рассчитывается по формуле Ptop = Pgas + Pwater_vapour.",
        "ar": "يتم حساب الضغط الكلي في الغازات المتجمعة فوق الماء بالصيغة Ptop = Pgas + Pwater_vapour.",
        "zh": "水面上方收集的气体总压力通过公式 Ptop = Pgas + Pwater_vapour 计算。",
        "ku": "Tevahiya zexta gazên ku li jorê avê têne berhev kirin bi formula Ptop = Pgas + Pwater_vapour tê hesibandin."
      },
      "trap": {
        "tr": "Su üstünde toplanan gazın basıncından suyun buhar basıncı çıkarılmaz.",
        "en": "The vapor pressure of the water cannot be subtracted from the pressure of the gas collected above the water.",
        "de": "Der Dampfdruck des Wassers kann nicht vom Druck des über dem Wasser gesammelten Gases abgezogen werden.",
        "fr": "La pression de vapeur de l’eau ne peut pas être soustraite de la pression du gaz collecté au-dessus de l’eau.",
        "ru": "Давление пара воды нельзя вычесть из давления газа, собранного над водой.",
        "ar": "لا يمكن طرح ضغط بخار الماء من ضغط الغاز المتجمع فوق الماء.",
        "zh": "水的蒸气压不能从水面上方收集的气体的压力中减去。",
        "ku": "Zexta buhara avê ji tansiyona gaza ku li jora avê hatiye berhevkirin nayê kêmkirin."
      }
    },
    {
      "id": "u13-f11",
      "fact": {
        "tr": "Kapta sıvı su bulunduğu sürece sabit sıcaklıkta kabın hacmi değiştirilse de suyun buhar basıncı DEĞİŞMEZ.",
        "en": "As long as liquid water remains in the container, the vapor pressure of water DOES NOT change when the volume is changed at constant temperature.",
        "de": "Solange flüssiges Wasser im Behälter vorhanden ist, ändert sich der Dampfdruck des Wassers bei konstanter Temperatur NICHT, auch wenn das Volumen verändert wird.",
        "fr": "Tant qu'il reste de l'eau liquide dans le récipient, la pression de vapeur de l'eau NE change PAS lorsque le volume varie à température constante.",
        "ru": "Пока в сосуде остаётся жидкая вода, давление её пара при постоянной температуре НЕ меняется при изменении объёма.",
        "ar": "ما دام الماء السائل موجودًا في الوعاء، فإن ضغط بخار الماء لا يتغير عند تغيير الحجم مع ثبات درجة الحرارة.",
        "zh": "只要容器中仍有液态水，在温度不变时改变容器体积，水的蒸气压不会改变。",
        "ku": "Heta ku di firaxê de ava şil hebe, di germahiya sabît de qebare were guhertin jî zexta buhara avê NAGUHERE."
      },
      "trap": {
        "tr": "Piston yukarı çekilip hacim artırıldığında suyun buhar basıncı yarıya iner.",
        "en": "When the piston is pulled up and the volume is increased, the vapor pressure of the water is halved.",
        "de": "Wenn der Kolben nach oben gezogen wird und das Volumen vergrößert wird, halbiert sich der Dampfdruck des Wassers.",
        "fr": "Lorsque le piston est tiré vers le haut et que le volume augmente, la pression de vapeur de l'eau est réduite de moitié.",
        "ru": "Когда поршень поднимается вверх и объем увеличивается, давление пара воды уменьшается вдвое.",
        "ar": "عندما يتم سحب المكبس للأعلى وزيادة الحجم، ينخفض ​​ضغط بخار الماء إلى النصف.",
        "zh": "当活塞向上拉并且体积增大时，水的蒸气压减半。",
        "ku": "Dema ku piston bi jor ve tê kişandin û hêjmar zêde dibe, zexta buharê ya avê nîvî dibe."
      }
    },
    {
      "id": "u13-f12",
      "fact": {
        "tr": "Soğutucu akışkanlar: Kritik sıcaklığı yüksek, kaynama noktası düşük, zehirsiz ve çevre dostu olmalıdır.",
        "en": "Refrigerants: Must have a high critical temperature, low boiling point, non-toxic and environmentally friendly.",
        "de": "Kältemittel: Muss eine hohe kritische Temperatur, einen niedrigen Siedepunkt, ungiftig und umweltfreundlich sein.",
        "fr": "Réfrigérants : doivent avoir une température critique élevée, un point d’ébullition bas, non toxiques et respectueux de l’environnement.",
        "ru": "Хладагенты: Должны иметь высокую критическую температуру, низкую температуру кипения, нетоксичные и экологически чистые.",
        "ar": "المبردات: يجب أن تتمتع بدرجة حرارة حرجة عالية ونقطة غليان منخفضة وغير سامة وصديقة للبيئة.",
        "zh": "制冷剂：必须具有高临界温度、低沸点、无毒且环保。",
        "ku": "Refrigerants: Pêdivî ye ku germahiyek krîtîk a bilind, xala kelandinê kêm, ne-jehrîn û hawîrdorparêz be."
      },
      "trap": {
        "tr": "Soğutucu akışkanın kaynama noktası oda sıcaklığından çok yüksek olmalıdır.",
        "en": "The boiling point of the refrigerant must be much higher than room temperature.",
        "de": "Der Siedepunkt des Kältemittels muss deutlich über der Raumtemperatur liegen.",
        "fr": "Le point d'ébullition du réfrigérant doit être bien supérieur à la température ambiante.",
        "ru": "Температура кипения хладагента должна быть намного выше комнатной температуры.",
        "ar": "يجب أن تكون نقطة غليان سائل التبريد أعلى بكثير من درجة حرارة الغرفة.",
        "zh": "制冷剂的沸点必须远高于室温。",
        "ku": "Divê xala kelandinê ya sarincokê ji germahiya odeyê pir bilindtir be."
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
        "ar": "عند درجة الحرارة نفسها، ينتشر غاز CH4 (MA=16) أسرع بـ sqrt(64/16) = 2 مرة من غاز SO2 (MA=64).",
        "zh": "相同温度下，CH4（MA=16）气体的扩散速率是SO2（MA=64）气体的 sqrt(64/16) = 2 倍。",
        "ku": "Di heman germahiyê de gaza CH4 (MA=16) sqrt(64/16) = 2 qat ji gaza SO2 (MA=64) zûtir belav dibe."
      },
      "trap": {
        "tr": "Aynı sıcaklıkta CH4 gazı SO2 gazından 4 kat daha hızlı difüzlenir.",
        "en": "At the same temperature, CH4 gas diffuses 4 times faster than SO2 gas.",
        "de": "Bei gleicher Temperatur diffundiert CH4-Gas 4-mal schneller als SO2-Gas.",
        "fr": "À la même température, le gaz CH4 diffuse 4 fois plus vite que le gaz SO2.",
        "ru": "При одинаковой температуре газ CH4 диффундирует в 4 раза быстрее, чем газ SO2.",
        "ar": "عند درجة الحرارة نفسها، ينتشر غاز CH4 أسرع بـ 4 مرات من غاز SO2.",
        "zh": "相同温度下，CH4气体的扩散速率是SO2气体的4倍。",
        "ku": "Di heman germahiyê de gaza CH4 4 qat ji gaza SO2 zûtir belav dibe."
      }
    },
    {
      "id": "u13-f14",
      "fact": {
        "tr": "Efüzyon, gaz moleküllerinin küçük bir delikten vakumlu boşluğa kaçması olayıdır.",
        "en": "Effusion is the phenomenon of gas molecules escaping into a vacuum space through a small hole.",
        "de": "Unter Effusion versteht man das Phänomen, dass Gasmoleküle durch ein kleines Loch in einen Vakuumraum entweichen.",
        "fr": "L'effusion est le phénomène par lequel des molécules de gaz s'échappent vers le vide par un petit orifice.",
        "ru": "Эффузия – это явление, когда молекулы газа выходят в вакуумное пространство через небольшое отверстие.",
        "ar": "الانصباب هو ظاهرة هروب جزيئات الغاز إلى فراغ من خلال ثقب صغير.",
        "zh": "泻流是气体分子通过小孔逸入真空空间的现象。",
        "ku": "Efûzyon diyardeya reva molekulên gazê ji qulikeke biçûk ber bi valahiyê (vakûmê) ye."
      },
      "trap": {
        "tr": "Efüzyon iki gazın birbiri içinde karışmasıdır.",
        "en": "Effusion is the mixing of two gases with each other.",
        "de": "Unter Effusion versteht man die Vermischung zweier Gase miteinander.",
        "fr": "L'effusion est le mélange de deux gaz l'un dans l'autre.",
        "ru": "Эффузия – это смешение двух газов друг с другом.",
        "ar": "الانصباب هو اختلاط غازين مع بعضهما البعض.",
        "zh": "泻流是两种气体相互混合的过程。",
        "ku": "Efûzyon tevlihevbûna du gazan di nav hev de ye."
      }
    },
    {
      "id": "u13-f15",
      "fact": {
        "tr": "Sıkıştırılabilirlik faktörü Z = PV / nRT'dir; ideal gazda Z = 1'dir.",
        "en": "The compressibility factor is Z = PV / nRT; In an ideal gas, Z = 1.",
        "de": "Der Kompressibilitätsfaktor beträgt Z = PV / nRT; In einem idealen Gas ist Z = 1.",
        "fr": "Le facteur de compressibilité est Z = PV/nRT ; Dans un gaz parfait, Z = 1.",
        "ru": "Коэффициент сжимаемости Z = PV/nRT; В идеальном газе Z = 1.",
        "ar": "عامل الانضغاط هو Z = PV / nRT؛ في الغاز المثالي Z = 1",
        "zh": "压缩系数为Z=PV/nRT；在理想气体中，Z = 1。",
        "ku": "Faktora tevlihevbûnê Z = PV / nRT ye; Di gazek îdeal de, Z = 1."
      },
      "trap": {
        "tr": "Gerçek gazların hepsinde Z değeri daima 1'e eşittir.",
        "en": "In all real gases, the Z value is always equal to 1.",
        "de": "In allen realen Gasen ist der Z-Wert immer gleich 1.",
        "fr": "Dans tous les gaz réels, la valeur Z est toujours égale à 1.",
        "ru": "Во всех реальных газах значение Z всегда равно 1.",
        "ar": "في جميع الغازات الحقيقية، تكون قيمة Z دائمًا تساوي 1.",
        "zh": "在所有实际气体中，Z 值始终等于 1。",
        "ku": "Di hemî gazên rastîn de, nirxa Z her gav bi 1 re ye."
      }
    },
    {
      "id": "u13-f16",
      "fact": {
        "tr": "Gaz taneciklerinin öz hacmi yüksek basınç altında ihmal edilemez büyüklüğe ulaşır.",
        "en": "Under high pressure, the own volume of gas particles becomes non-negligible.",
        "de": "Unter hohem Druck wird das Eigenvolumen der Gasteilchen nicht mehr vernachlässigbar.",
        "fr": "Sous haute pression, le volume propre des particules de gaz n'est plus négligeable.",
        "ru": "При высоком давлении собственным объёмом частиц газа уже нельзя пренебречь.",
        "ar": "تحت الضغط المرتفع يصبح الحجم الذاتي لجسيمات الغاز غير قابل للإهمال.",
        "zh": "在高压下，气体粒子自身的体积变得不可忽略。",
        "ku": "Di bin zexta bilind de qebareya xwe ya perçeyên gazê êdî nayê paşguhkirin."
      },
      "trap": {
        "tr": "Yüksek basınç altında gaz taneciklerinin hacmi tamamen yok olur.",
        "en": "Under high pressure, the volume of gas particles disappears completely.",
        "de": "Unter hohem Druck verschwindet das Volumen der Gaspartikel vollständig.",
        "fr": "Sous haute pression, le volume des particules de gaz disparaît complètement.",
        "ru": "Под высоким давлением объем частиц газа полностью исчезает.",
        "ar": "تحت الضغط العالي، يختفي حجم جزيئات الغاز تمامًا.",
        "zh": "在高压下，气体粒子的体积完全消失。",
        "ku": "Di bin zexta bilind de, qebareya pariyên gazê bi tevahî winda dibe."
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
        "ru": "В идеальном газе объём частиц принимается равным нулю и притяжения нет; в реальном газе есть собственный объём частиц и силы притяжения.",
        "ar": "في الغاز المثالي يُفترض أن حجم الجسيمات صفر ولا يوجد تجاذب؛ أما في الغاز الحقيقي فللجسيمات حجم ذاتي وتوجد قوى تجاذب.",
        "zh": "理想气体中假定粒子体积为零且粒子间无引力；真实气体中粒子有自身体积并存在引力。",
        "ku": "Di gaza îdeal de qebareya perçeyan sifir û kişandin tune tê qebûlkirin; di gaza rastîn de qebareya xwe û hêza kişandinê heye."
      }
    },
    {
      "id": "u13-c02",
      "conceptA": {
        "tr": "Gaz",
        "en": "gas",
        "de": "Gas",
        "fr": "gaz",
        "ru": "газ",
        "ar": "غاز",
        "zh": "气体",
        "ku": "gaz"
      },
      "conceptB": {
        "tr": "Buhar",
        "en": "steam",
        "de": "Dampf",
        "fr": "vapeur",
        "ru": "пар",
        "ar": "بخار",
        "zh": "蒸汽",
        "ku": "steam"
      },
      "distinction": {
        "tr": "Buhar kritik sıcaklığın altında olup basınçla sıvılaşabilir; gaz kritik sıcaklığın üstünde olup basınçla sıvılaşamaz.",
        "en": "Vapor is below the critical temperature and can liquefy under pressure; The gas is above the critical temperature and cannot liquefy under pressure.",
        "de": "Dampf liegt unterhalb der kritischen Temperatur und kann sich unter Druck verflüssigen; Das Gas liegt oberhalb der kritischen Temperatur und kann sich unter Druck nicht verflüssigen.",
        "fr": "La vapeur est inférieure à la température critique et peut se liquéfier sous pression ; Le gaz est au-dessus de la température critique et ne peut pas se liquéfier sous pression.",
        "ru": "Температура пара ниже критической и может сжижаться под давлением; Температура газа выше критической и не может сжижаться под давлением.",
        "ar": "يكون البخار أقل من درجة الحرارة الحرجة ويمكن أن يسيل تحت الضغط؛ يكون الغاز أعلى من درجة الحرارة الحرجة ولا يمكن أن يسيل تحت الضغط.",
        "zh": "蒸气低于临界温度，在压力下能液化；该气体高于临界温度并且在压力下不能液化。",
        "ku": "Vapor li jêr germahiya krîtîk e û dikare di bin zextê de şil bibe; Gaz li ser germahiya krîtîk e û di bin zextê de nikare şil bibe."
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
        "ar": "قانون غراهام للانتشار",
        "zh": "格雷厄姆扩散定律",
        "ku": "Qanûna Belavbûnê ya Graham"
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
        "tr": "Graham yasası yayılma hızının mol kütlesinin kareköküyle ters orantısını; Dalton kısmi basıncın mol kesriyle doğru orantısını belirtir.",
        "en": "Graham's law states that the rate of diffusion is inversely proportional to the square root of the molar mass; Dalton states that the partial pressure is directly proportional to the mole fraction.",
        "de": "Das Grahamsche Gesetz besagt, dass die Diffusionsgeschwindigkeit umgekehrt proportional zur Quadratwurzel der Molmasse ist; Dalton gibt an, dass der Partialdruck direkt proportional zum Stoffmengenanteil ist.",
        "fr": "La loi de Graham stipule que le taux de diffusion est inversement proportionnel à la racine carrée de la masse molaire ; Dalton affirme que la pression partielle est directement proportionnelle à la fraction molaire.",
        "ru": "Закон Грэма гласит, что скорость диффузии обратно пропорциональна квадратному корню из молярной массы; Дальтон утверждает, что парциальное давление прямо пропорционально мольной доле.",
        "ar": "ينص قانون جراهام على أن معدل الانتشار يتناسب عكسيا مع الجذر التربيعي للكتلة المولية. يذكر دالتون أن الضغط الجزئي يتناسب طرديًا مع الكسر المولي.",
        "zh": "格雷厄姆定律指出，扩散速率与摩尔质量的平方根成反比；道尔顿指出分压与摩尔分数成正比。",
        "ku": "Zagona Graham dibêje ku rêjeya belavbûnê berevajî berevajî rehê çargoşeya girseya molarê ye; Dalton diyar dike ku zexta parçeyî rasterast bi beşa molê re têkildar e."
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
        "ar": "الانصباب",
        "zh": "泻流",
        "ku": "Efûzyon"
      },
      "distinction": {
        "tr": "Difüzyon, gaz taneciklerinin başka bir gaz ortamında yayılarak karışmasıdır; efüzyon ise gaz taneciklerinin küçük bir delikten boşluğa (vakuma) kaçmasıdır.",
        "en": "Diffusion is the spreading and mixing of gas particles through another gas; effusion is the escape of gas particles through a small hole into a vacuum.",
        "de": "Diffusion ist das Ausbreiten und Vermischen von Gasteilchen in einem anderen Gas; Effusion ist das Entweichen von Gasteilchen durch eine kleine Öffnung ins Vakuum.",
        "fr": "La diffusion est la propagation et le mélange des particules d'un gaz dans un autre gaz ; l'effusion est la fuite de particules de gaz par un petit orifice vers le vide.",
        "ru": "Диффузия — распространение и смешивание частиц газа в среде другого газа; эффузия — вытекание частиц газа через маленькое отверстие в вакуум.",
        "ar": "الانتشار هو تفرّق جسيمات الغاز واختلاطها داخل غاز آخر؛ أما الانصباب فهو خروج جسيمات الغاز عبر ثقب صغير إلى فراغ.",
        "zh": "扩散是气体粒子在另一种气体中散开并混合；泻流是气体粒子通过小孔逸入真空。",
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
        "ru": "Эффект Джоуля-Томсона",
        "ar": "تأثير جول طومسون",
        "zh": "焦耳-汤姆逊效应",
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
        "tr": "Joule-Thomson aniden genleşen gerçek gazın soğumasıdır; kritik sıcaklık üstünde gaz hiçbir basınç altında sıvılaştırılamaz.",
        "en": "Joule-Thomson is the cooling of real gas that suddenly expands; Above the critical temperature, gas cannot be liquefied under any pressure.",
        "de": "Joule-Thomson ist die Abkühlung von realem Gas, das sich plötzlich ausdehnt; Oberhalb der kritischen Temperatur kann Gas unter keinem Druck verflüssigt werden.",
        "fr": "Joule-Thomson est le refroidissement d'un gaz réel qui se dilate soudainement ; Au-dessus de la température critique, le gaz ne peut être liquéfié sous aucune pression.",
        "ru": "Джоуль-Томсон — это охлаждение реального газа, который внезапно расширяется; Выше критической температуры газ не может сжижаться ни при каком давлении.",
        "ar": "جول طومسون هو تبريد الغاز الحقيقي الذي يتمدد فجأة؛ فوق درجة الحرارة الحرجة، لا يمكن تسييل الغاز تحت أي ضغط.",
        "zh": "焦耳-汤姆逊是突然膨胀的真实气体的冷却；高于临界温度，气体在任何压力下都不能液化。",
        "ku": "Joule-Thomson sarbûna gaza rastîn e ku ji nişka ve berfireh dibe; Li ser germahiya krîtîk, gaz nikare di bin ti zextê de şil bibe."
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
        "ku": "Zexta Vaporê ya Têrkirî"
      },
      "conceptB": {
        "tr": "Kuru Gaz Basıncı",
        "en": "Dry Gas Pressure",
        "de": "Trockener Gasdruck",
        "fr": "Pression du gaz sec",
        "ru": "Давление сухого газа",
        "ar": "ضغط الغاز الجاف",
        "zh": "干气压力",
        "ku": "Zexta Gaza Hişk"
      },
      "distinction": {
        "tr": "Su buharı basıncı sadece sıcaklığa bağlıdır ve hacimle değişmez; kuru gaz basıncı kap hacmi değiştikçe Boyle yasasına uyar.",
        "en": "Water vapor pressure depends only on temperature and does not change with volume; Dry gas pressure obeys Boyle's law as the container volume changes.",
        "de": "Der Wasserdampfdruck hängt nur von der Temperatur ab und ändert sich nicht mit dem Volumen; Der Trockengasdruck folgt dem Boyle-Gesetz, wenn sich das Behältervolumen ändert.",
        "fr": "La pression de la vapeur d'eau dépend uniquement de la température et ne change pas avec le volume ; La pression du gaz sec obéit à la loi de Boyle à mesure que le volume du conteneur change.",
        "ru": "Давление водяного пара зависит только от температуры и не меняется с объемом; Давление сухого газа подчиняется закону Бойля при изменении объема контейнера.",
        "ar": "يعتمد ضغط بخار الماء فقط على درجة الحرارة ولا يتغير مع الحجم؛ يخضع ضغط الغاز الجاف لقانون بويل مع تغير حجم الحاوية.",
        "zh": "水蒸气压仅取决于温度，不随体积变化；随着容器体积的变化，干燥气体压力遵循波义耳定律。",
        "ku": "Zexta buhara avê tenê bi germahiyê ve girêdayî ye û bi qebareyê nayê guhertin; Dema ku qebareya konteynerê diguhere, zexta gaza hişk li gorî qanûna Boyle ye."
      }
    },
    {
      "id": "u13-c07",
      "conceptA": {
        "tr": "Kinetik Enerji",
        "en": "Kinetic Energy",
        "de": "Kinetische Energie",
        "fr": "Énergie cinétique",
        "ru": "Кинетическая энергия",
        "ar": "الطاقة الحركية",
        "zh": "动能",
        "ku": "Enerjiya Kînetîk"
      },
      "conceptB": {
        "tr": "Yayılma Hızı",
        "en": "Spreading Speed",
        "de": "Ausbreitungsgeschwindigkeit",
        "fr": "Vitesse de propagation",
        "ru": "Скорость распространения",
        "ar": "سرعة الانتشار",
        "zh": "传播速度",
        "ku": "Belavbûna Leza"
      },
      "distinction": {
        "tr": "Ortalama kinetik enerji yalnızca mutlak sıcaklığa bağlıdır; yayılma hızı ise hem sıcaklığa hem de mol kütlesine bağlıdır.",
        "en": "Average kinetic energy depends only on absolute temperature; The rate of diffusion depends on both temperature and molar mass.",
        "de": "Die durchschnittliche kinetische Energie hängt nur von der absoluten Temperatur ab; Die Diffusionsgeschwindigkeit hängt sowohl von der Temperatur als auch von der Molmasse ab.",
        "fr": "L'énergie cinétique moyenne dépend uniquement de la température absolue ; Le taux de diffusion dépend à la fois de la température et de la masse molaire.",
        "ru": "Средняя кинетическая энергия зависит только от абсолютной температуры; Скорость диффузии зависит как от температуры, так и от молярной массы.",
        "ar": "يعتمد متوسط الطاقة الحركية فقط على درجة الحرارة المطلقة؛ يعتمد معدل الانتشار على كل من درجة الحرارة والكتلة المولية.",
        "zh": "平均动能仅取决于绝对温度；扩散速率取决于温度和摩尔质量。",
        "ku": "Enerjiya kinetîk a navîn tenê bi germahiya mutleq ve girêdayî ye; Rêjeya belavbûnê hem bi germahî û hem jî bi girseya molarê ve girêdayî ye."
      }
    },
    {
      "id": "u13-c08",
      "conceptA": {
        "tr": "İdeallikten Sapma Faktörü (Z = PV/nRT)",
        "en": "Deviation from ideality factor (Z = PV/nRT)",
        "de": "Abweichung vom Idealitätsfaktor (Z = PV/nRT)",
        "fr": "Écart par rapport au facteur d'idéalité (Z = PV/nRT)",
        "ru": "Отклонение от коэффициента идеальности (Z = PV/nRT)",
        "ar": "الانحراف عن عامل المثالية (Z = PV/nRT)",
        "zh": "与理想因子的偏差 (Z = PV/nRT)",
        "ku": "Dûrketina ji faktora îdealîteyê (Z = PV/nRT)"
      },
      "conceptB": {
        "tr": "Kritik Basınç",
        "en": "Critical Pressure",
        "de": "Kritischer Druck",
        "fr": "Pression critique",
        "ru": "Критическое давление",
        "ar": "الضغط الحرج",
        "zh": "临界压力",
        "ku": "Zexta Krîtîk"
      },
      "distinction": {
        "tr": "İdeal gazda Z = 1'dir, gerçek gazlarda Z 1'den sapar; kritik basınç ise bir gazı kritik sıcaklığında sıvılaştırmak için gereken en düşük basınçtır.",
        "en": "For an ideal gas Z = 1, while for real gases Z deviates from 1; critical pressure is the minimum pressure needed to liquefy a gas at its critical temperature.",
        "de": "Für ein ideales Gas ist Z = 1, bei realen Gasen weicht Z von 1 ab; der kritische Druck ist der Mindestdruck, der zur Verflüssigung eines Gases bei seiner kritischen Temperatur nötig ist.",
        "fr": "Pour un gaz parfait Z = 1, pour les gaz réels Z s'écarte de 1 ; la pression critique est la pression minimale nécessaire pour liquéfier un gaz à sa température critique.",
        "ru": "Для идеального газа Z = 1, у реальных газов Z отклоняется от 1; критическое давление — минимальное давление, необходимое для сжижения газа при его критической температуре.",
        "ar": "في الغاز المثالي Z = 1، وفي الغازات الحقيقية ينحرف Z عن 1؛ أما الضغط الحرج فهو أقل ضغط لازم لتسييل الغاز عند درجة حرارته الحرجة.",
        "zh": "理想气体 Z = 1，真实气体的 Z 偏离 1；临界压强是在临界温度下使气体液化所需的最低压强。",
        "ku": "Di gaza îdeal de Z = 1 e, di gazên rastîn de Z ji 1 dûr dikeve; zexta krîtîk zexta herî kêm e ku ji bo şilkirina gazê di germahiya wê ya krîtîk de pêwîst e."
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
        "ru": "Этапы сравнения диффузии Грэма",
        "ar": "خطوات مقارنة نشر غراهام",
        "zh": "格雷厄姆扩散比较步骤",
        "ku": "Pêngavên Berhevdana Belavbûna Graham"
      },
      "steps": [
        {
          "tr": "Her iki gazın mol kütlelerini belirle",
          "en": "Determine the molar masses of both gases",
          "de": "Bestimmen Sie die Molmassen beider Gase",
          "fr": "Déterminer les masses molaires des deux gaz",
          "ru": "Определите молярные массы обоих газов.",
          "ar": "تحديد الكتل المولية لكلا الغازين",
          "zh": "确定两种气体的摩尔质量",
          "ku": "Girseyên molê yên herdu gazan diyar bikin"
        },
        {
          "tr": "Mutlak sıcaklıkları Kelvin e çevir",
          "en": "Convert absolute temperatures to Kelvin",
          "de": "Konvertieren Sie absolute Temperaturen in Kelvin",
          "fr": "Convertir les températures absolues en Kelvin",
          "ru": "Перевести абсолютные температуры в Кельвины",
          "ar": "تحويل درجات الحرارة المطلقة إلى كلفن",
          "zh": "将绝对温度转换为开尔文温度",
          "ku": "Germahiya bêkêmasî bi Kelvin veguherînin"
        },
        {
          "tr": "Hız formülünü yaz: v1/v2 = sqrt((T1*M2)/(T2*M1))",
          "en": "Write the velocity formula: v1/v2 = sqrt((T1*M2)/(T2*M1))",
          "de": "Schreiben Sie die Geschwindigkeitsformel: v1/v2 = sqrt((T1*M2)/(T2*M1))",
          "fr": "Écrivez la formule de vitesse : v1/v2 = sqrt((T1*M2)/(T2*M1))",
          "ru": "Запишите формулу скорости: v1/v2 = sqrt((T1*M2)/(T2*M1))",
          "ar": "اكتب معادلة السرعة: v1/v2 = sqrt((T1*M2)/(T2*M1))",
          "zh": "写出速度公式：v1/v2 = sqrt((T1*M2)/(T2*M1))",
          "ku": "Formula lezê binivîsin: v1/v2 = sqrt((T1*M2)/(T2*M1))"
        },
        {
          "tr": "Yol veya süre orantısını hesapla (t2/t1 = v1/v2)",
          "en": "Calculate distance or time ratio (t2/t1 = v1/v2)",
          "de": "Entfernung oder Zeitverhältnis berechnen (t2/t1 = v1/v2)",
          "fr": "Calculer la distance ou le rapport temps (t2/t1 = v1/v2)",
          "ru": "Рассчитайте расстояние или соотношение времени (t2/t1 = v1/v2)",
          "ar": "حساب المسافة أو نسبة الوقت (t2/t1 = v1/v2)",
          "zh": "计算距离或时间比率 (t2/t1 = v1/v2)",
          "ku": "Rêjeya dûr an demê hesab bike (t2/t1 = v1/v2)"
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
        "ru": "Диффузионный эксперимент Грэма",
        "ar": "تجربة غراهام للانتشار",
        "zh": "格雷厄姆扩散实验",
        "ku": "Ezmûna Belavbûna Graham"
      },
      "steps": [
        {
          "tr": "Cam borunun iki ucuna pamuk yerleştirilir",
          "en": "Cotton is placed at both ends of the glass tube.",
          "de": "An beiden Enden des Glasrohrs wird Baumwolle platziert.",
          "fr": "Du coton est placé aux deux extrémités du tube de verre.",
          "ru": "Вата помещается на оба конца стеклянной трубки.",
          "ar": "يتم وضع القطن على طرفي الأنبوب الزجاجي.",
          "zh": "玻璃管的两端放置棉花。",
          "ku": "Pembû li her du serê lûleya camê tê danîn."
        },
        {
          "tr": "Bir uca HCl, diğer uca NH3 damlatılır",
          "en": "HCl is dropped on one end and NH3 is dropped on the other end.",
          "de": "An einem Ende wird HCl und am anderen Ende NH3 zugetropft.",
          "fr": "Le HCl tombe à une extrémité et le NH3 à l’autre extrémité.",
          "ru": "HCl подается с одного конца, а NH3 – с другого.",
          "ar": "يتم إسقاط حمض الهيدروكلوريك (HCl) على أحد الطرفين، وإسقاط NH3 على الطرف الآخر.",
          "zh": "HCl 滴在一端，NH3 滴在另一端。",
          "ku": "HCl li ser aliyekê û NH3 li aliyê din tê avêtin."
        },
        {
          "tr": "Gazlar boru içinde birbirine doğru yayılır",
          "en": "Gases spread towards each other in the pipe",
          "de": "Gase breiten sich im Rohr aufeinander zu",
          "fr": "Les gaz se propagent les uns vers les autres dans le tuyau",
          "ru": "Газы распространяются навстречу друг другу в трубе",
          "ar": "تنتشر الغازات تجاه بعضها البعض في الأنبوب",
          "zh": "气体在管道中相互扩散",
          "ku": "Gazên di boriyê de ber bi hev belav dibin"
        },
        {
          "tr": "Hafif olan NH3 gazı daha hızlı yayılarak HCl'ye yakın halka oluşturur",
          "en": "The lighter NH3 gas spreads faster and forms a ring close to HCl.",
          "de": "Das leichtere NH3-Gas breitet sich schneller aus und bildet einen Ring in der Nähe von HCl.",
          "fr": "Le gaz NH3, plus léger, se propage plus rapidement et forme un anneau proche du HCl.",
          "ru": "Более легкий газ NH3 распространяется быстрее и образует кольцо, близкое к HCl.",
          "ar": "ينتشر غاز NH3 الأخف بشكل أسرع ويشكل حلقة قريبة من حمض الهيدروكلوريك.",
          "zh": "较轻的 NH3 气体扩散得更快，并形成接近 HCl 的环。",
          "ku": "Gaza sivik NH3 zûtir belav dibe û zengilek nêzîkî HCl çêdike."
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
        "ru": "Сбор газа на воде",
        "ar": "تجميع الغاز على الماء",
        "zh": "水上气体收集",
        "ku": "Komkirina Gazê li ser Avê"
      },
      "steps": [
        {
          "tr": "Ters çevrilmiş dereceli silindire su doldurulur",
          "en": "Water is filled into the inverted graduated cylinder",
          "de": "In den umgedrehten Messzylinder wird Wasser eingefüllt",
          "fr": "L'eau est versée dans le cylindre gradué inversé",
          "ru": "Вода заливается в перевернутый мерный цилиндр.",
          "ar": "يتم تعبئة الماء في الاسطوانة المتدرجة المقلوبة",
          "zh": "将水倒入倒置量筒中",
          "ku": "Av tê dagirtin silindirê deqkirî yê berevajîkirî"
        },
        {
          "tr": "Tepkimede oluşan gaz su üstünde biriktirilir",
          "en": "The gas formed in the reaction is deposited on water.",
          "de": "Das bei der Reaktion entstehende Gas lagert sich auf Wasser ab.",
          "fr": "Le gaz formé lors de la réaction se dépose sur l’eau.",
          "ru": "Образующийся в результате реакции газ осаждается на воде.",
          "ar": "يترسب الغاز المتكون في التفاعل على الماء.",
          "zh": "反应中形成的气体沉积在水上。",
          "ku": "Gaza ku di reaksiyonê de çêdibe li ser avê tê razandin."
        },
        {
          "tr": "Kaptaki toplam basınç Ptoplam ölçülür",
          "en": "The total pressure Ptotal in the vessel is measured",
          "de": "Der Gesamtdruck Ptotal im Behälter wird gemessen",
          "fr": "La pression totale Ptotal dans le récipient est mesurée",
          "ru": "Измеряется полное давление Ptotal в сосуде.",
          "ar": "يتم قياس الضغط الكلي Pالمجموع في الوعاء",
          "zh": "测量容器中的总压力 Ptotal",
          "ku": "Tevahiya zexta Ptotal a di keştiyê de tê pîvandin"
        },
        {
          "tr": "Suyun o sıcaklıktaki buhar basıncı çıkarılarak kuru gaz basıncı bulunur",
          "en": "Dry gas pressure is found by subtracting the vapor pressure of water at that temperature.",
          "de": "Der Trockengasdruck wird durch Subtrahieren des Dampfdrucks von Wasser bei dieser Temperatur ermittelt.",
          "fr": "La pression du gaz sec est obtenue en soustrayant la pression de vapeur de l'eau à cette température.",
          "ru": "Давление сухого газа находится путем вычитания давления пара воды при этой температуре.",
          "ar": "يتم العثور على ضغط الغاز الجاف عن طريق طرح ضغط بخار الماء عند درجة الحرارة تلك.",
          "zh": "干燥气体压力是通过减去该温度下水的蒸气压得出的。",
          "ku": "Zexta gaza hişk bi kêmkirina tansiyona buhara avê ya di wê germahiyê de tê dîtin."
        }
      ]
    },
    {
      "id": "u13-s04",
      "title": {
        "tr": "Joule-Thomson Soğuma Aşamaları",
        "en": "Joule-Thomson Cooling Stages",
        "de": "Joule-Thomson-Kühlstufen",
        "fr": "Étages de refroidissement Joule-Thomson",
        "ru": "Стадии охлаждения Джоуля-Томсона",
        "ar": "مراحل تبريد جول طومسون",
        "zh": "Joule-Thomson 冷却台",
        "ku": "Qonaxên Cooling Joule-Thomson"
      },
      "steps": [
        {
          "tr": "Gerçek gaz yüksek basınç altında sıkıştırılır",
          "en": "Real gas is compressed under high pressure",
          "de": "Echtes Gas wird unter hohem Druck komprimiert",
          "fr": "Le vrai gaz est comprimé sous haute pression",
          "ru": "Реальный газ сжимается под высоким давлением.",
          "ar": "يتم ضغط الغاز الحقيقي تحت ضغط مرتفع",
          "zh": "真实气体在高压下被压缩",
          "ku": "Gaza rastîn di bin tansiyona bilind de tê pêçan"
        },
        {
          "tr": "Gaz küçük bir delikten aniden düşük basınca genleştirilir",
          "en": "Gas is suddenly expanded to low pressure through a small hole",
          "de": "Durch ein kleines Loch wird Gas schlagartig auf niedrigen Druck entspannt",
          "fr": "Le gaz est soudainement détendu à basse pression à travers un petit trou",
          "ru": "Газ внезапно расширяется до низкого давления через небольшое отверстие.",
          "ar": "يتمدد الغاز فجأة إلى ضغط منخفض من خلال ثقب صغير",
          "zh": "气体通过小孔突然膨胀至低压",
          "ku": "Gaz ji nişkê ve di nav qulikek piçûk de berbi zexta nizm ve tê berfireh kirin"
        },
        {
          "tr": "Moleküller arası çekimi yenmek için gaz kendi kinetik enerjisini harcar",
          "en": "The gas uses up its own kinetic energy to overcome intermolecular attraction",
          "de": "Das Gas verbraucht eigene kinetische Energie, um die zwischenmolekulare Anziehung zu überwinden",
          "fr": "Le gaz consomme sa propre énergie cinétique pour vaincre l'attraction intermoléculaire",
          "ru": "Газ расходует собственную кинетическую энергию на преодоление межмолекулярного притяжения",
          "ar": "يستهلك الغاز جزءًا من طاقته الحركية للتغلب على التجاذب بين الجزيئات",
          "zh": "气体消耗自身动能以克服分子间引力",
          "ku": "Gaz ji bo derbaskirina kişandina navmolekulî enerjiya xwe ya kînetîk xerc dike"
        },
        {
          "tr": "Gazın sıcaklığı aniden düşerek soğur",
          "en": "The temperature of the gas drops suddenly and cools",
          "de": "Die Temperatur des Gases sinkt plötzlich und kühlt ab",
          "fr": "La température du gaz chute brusquement et se refroidit",
          "ru": "Температура газа внезапно падает и охлаждается.",
          "ar": "تنخفض درجة حرارة الغاز فجأة ويبرد",
          "zh": "气体温度突然下降并冷却",
          "ku": "Germahiya gazê ji nişka ve dadikeve û sar dibe"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u13-twin01",
      "stem": {
        "tr": "Aynı sıcaklıkta 100 cm lik cam borunun iki ucundan aynı anda bırakılan CH4 (MA=16) ve SO2 (MA=64) gazları CH4 ucundan kaç cm uzakta karşılaşır?",
        "en": "At how many cm away from the CH4 end will CH4 (MA=16) and SO2 (MA=64) gases released simultaneously from both ends of a 100 cm glass tube at the same temperature meet?",
        "de": "In wie vielen cm Entfernung vom CH4-Ende treffen CH4- (MA=16) und SO2-Gase (MA=64), die gleichzeitig von beiden Enden einer 100-cm-Glasröhre bei gleicher Temperatur freigesetzt werden, aufeinander?",
        "fr": "À quelle distance de l'extrémité CH4 les gaz CH4 (MA=16) et SO2 (MA=64) libérés simultanément par les deux extrémités d'un tube de verre de 100 cm à la même température se rencontreront-ils ?",
        "ru": "На каком расстоянии см от конца CH4 встретятся газы CH4 (MA=16) и SO2 (MA=64), выходящие одновременно из обоих концов стеклянной трубки длиной 100 см при одинаковой температуре?",
        "ar": "عند كم سم من نهاية CH4 سوف تلتقي غازات CH4 (MA=16) وSO2 (MA=64) المنبعثة في وقت واحد من طرفي أنبوب زجاجي قطره 100 سم عند نفس درجة الحرارة؟",
        "zh": "在距离CH4端多少厘米处，相同温度下从100cm玻璃管两端同时释放的CH4(MA=16)和SO2(MA=64)气体会相遇吗？",
        "ku": "Dê gazên CH4 (MA=16) û SO2 (MA=64) di heman germahiyê de ji her du serê lûleke camê ya 100 cm bi hev re werin berdan, li çend cm dûrî dawiya CH4-ê dê bigihîjin hev?"
      },
      "options": [
        {
          "tr": "66,7 cm",
          "en": "66.7 cm",
          "de": "66,7 cm",
          "fr": "66,7 cm",
          "ru": "66,7 см",
          "ar": "66.7 سم",
          "zh": "66.7厘米",
          "ku": "66,7 cm"
        },
        {
          "tr": "50,0 cm",
          "en": "50.0 cm",
          "de": "50,0 cm",
          "fr": "50,0 cm",
          "ru": "50,0 см",
          "ar": "50.0 سم",
          "zh": "50.0厘米",
          "ku": "50,0 cm"
        },
        {
          "tr": "80,0 cm",
          "en": "80.0 cm",
          "de": "80,0 cm",
          "fr": "80,0 cm",
          "ru": "80,0 см",
          "ar": "80.0 سم",
          "zh": "80.0厘米",
          "ku": "80,0 cm"
        },
        {
          "tr": "33,3 cm",
          "en": "33.3 cm",
          "de": "33,3 cm",
          "fr": "33,3 cm",
          "ru": "33,3 см",
          "ar": "33.3 سم",
          "zh": "33.3厘米",
          "ku": "33,3 cm"
        },
        {
          "tr": "25,0 cm",
          "en": "25.0 cm",
          "de": "25,0 cm",
          "fr": "25,0 cm",
          "ru": "25,0 см",
          "ar": "25.0 سم",
          "zh": "25.0厘米",
          "ku": "25,0 cm"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. CH4 2x yol alırken SO2 x yol alır. 3x = 100 cm -> x = 33,3 cm. CH4 ucundan 2x = 66,7 cm uzakta karşılaşırlar.",
        "en": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. While CH4 travels 2x, SO2 travels x. 3x = 100 cm -> x = 33.3 cm. They meet at a distance of 2x = 66.7 cm from the CH4 tip.",
        "de": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. Während CH4 2x wandert, wandert SO2 x. 3x = 100 cm -> x = 33,3 cm. Sie treffen sich im Abstand von 2x = 66,7 cm von der CH4-Spitze.",
        "fr": "v(CH4)/v(SO2) = carré(64/16) = 2/1. Alors que CH4 voyage 2x, SO2 voyage x. 3x = 100 cm -> x = 33,3 cm. Ils se rejoignent à une distance de 2x = 66,7 cm de la pointe CH4.",
        "ru": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. В то время как CH4 проходит 2x, SO2 проходит x. 3х = 100 см -> х = 33,3 см. Они встречаются на расстоянии 2х = 66,7 см от вершины СН4.",
        "ar": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. في حين أن CH4 يسافر 2x، فإن SO2 يسافر x. 3س = 100 سم -> س = 33.3 سم. يلتقيان على مسافة 2x = 66.7 سم من طرف CH4.",
        "zh": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1。相同时间内 CH4 走 2x，SO2 走 x。3x = 100 cm -> x = 33.3 cm。两者在距 CH4 端 2x = 66.7 cm 处相遇。",
        "ku": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. Dema ku CH4 2x digere, SO2 x digere. 3x = 100 cm -> x = 33,3 cm. Ew li dûrahiya 2x = 66,7 cm ji tîpa CH4 têne hev."
      }
    },
    {
      "id": "u13-twin02",
      "stem": {
        "tr": "Sabit sıcaklıkta su üstünde toplanan He gazı bulunan pistonlu kapta hacim yarıya indirilirse He gazının kısmi basıncı ve suyun buhar basıncı nasıl değişir?",
        "en": "If the volume is halved in a piston container containing He gas collected on water at a constant temperature, how do the partial pressure of He gas and the vapor pressure of water change?",
        "de": "Wie ändern sich der Partialdruck des He-Gases und der Dampfdruck des Wassers, wenn das Volumen in einem Kolbenbehälter, der He-Gas enthält, das auf Wasser bei konstanter Temperatur gesammelt ist, halbiert wird?",
        "fr": "Si le volume est réduit de moitié dans un récipient à piston contenant du gaz He collecté sur de l'eau à température constante, comment la pression partielle du gaz He et la pression de vapeur de l'eau changent-elles ?",
        "ru": "Если объем поршневого контейнера, содержащего газ He, собранный в воде при постоянной температуре, уменьшить вдвое, как изменятся парциальное давление газа He и давление паров воды?",
        "ar": "إذا انخفض الحجم إلى النصف في حاوية مكبس تحتوي على غاز He المتجمع على الماء عند درجة حرارة ثابتة، فكيف يتغير الضغط الجزئي لغاز He وضغط بخار الماء؟",
        "zh": "如果在恒温下将氦气收集在水上的活塞容器中体积减半，氦气的分压和水的蒸气压将如何变化？",
        "ku": "Ger hecma di konteynireke pistonê ya ku gaza He tê de li ser avê di germahiyeke domdar de hatiye komkirin nîvî bibe, zexta qismî ya gaza He û tansiyona buhara avê çawa diguherin?"
      },
      "options": [
        {
          "tr": "He basıncı 2 katına çıkar, suyun buhar basıncı değişmez",
          "en": "He pressure doubles, vapor pressure of water does not change",
          "de": "Der He-Druck verdoppelt sich, der Dampfdruck des Wassers ändert sich nicht",
          "fr": "La pression de He double, la pression de vapeur de l'eau ne change pas",
          "ru": "Давление He увеличивается в два раза, давление пара воды не меняется",
          "ar": "يتضاعف ضغط He، ولا يتغير ضغط بخار الماء",
          "zh": "He的压强加倍，水的蒸气压不变",
          "ku": "Zexta He du qat dibe, zexta buhara avê naguhere"
        },
        {
          "tr": "Her ikisi de 2 katına çıkar",
          "en": "Both are doubled",
          "de": "Beide werden verdoppelt",
          "fr": "Les deux sont doublés",
          "ru": "Оба удвоены",
          "ar": "كلاهما مضاعف",
          "zh": "两者都翻倍了",
          "ku": "Her du jî duqat in"
        },
        {
          "tr": "Her ikisi de değişmez",
          "en": "Both are immutable",
          "de": "Beide sind unveränderlich",
          "fr": "Les deux sont immuables",
          "ru": "Оба неизменяемы",
          "ar": "كلاهما غير قابل للتغيير",
          "zh": "两者都是不可变的",
          "ku": "Her du jî neguherbar in"
        },
        {
          "tr": "He basıncı değişmez, su buhar basıncı artar",
          "en": "He pressure does not change, water vapor pressure increases",
          "de": "Der He-Druck ändert sich nicht, der Wasserdampfdruck steigt",
          "fr": "La pression de He ne change pas, la pression de vapeur de l'eau augmente",
          "ru": "Давление He не меняется, давление водяного пара увеличивается",
          "ar": "لا يتغير ضغط He، ويزداد ضغط بخار الماء",
          "zh": "He压力不变，水蒸气压增加",
          "ku": "Zexta He naguhere, zexta buhara avê zêde dibe"
        },
        {
          "tr": "He basıncı 4 katına çıkar, su buhar basıncı azalır",
          "en": "He pressure increases 4 times, water vapor pressure decreases",
          "de": "Der He-Druck vervierfacht sich, der Wasserdampfdruck nimmt ab",
          "fr": "La pression de He est multipliée par 4, la pression de vapeur de l'eau diminue",
          "ru": "Давление He увеличивается в 4 раза, давление водяного пара уменьшается",
          "ar": "يزداد ضغط He أربع مرات، وينخفض ضغط بخار الماء",
          "zh": "He压力增加4倍，水蒸气压力降低",
          "ku": "Zexta He 4 qat dibe, zexta buhara avê kêm dibe"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "He gazının hacmi yarıya inince kısmi basıncı 2 katına çıkar. Suyun denge buhar basıncı ise sıcaklık değişmediği için sabit kalır.",
        "en": "When the volume of He gas is halved, its partial pressure doubles. The equilibrium vapor pressure of water remains constant because the temperature does not change.",
        "de": "Wenn das Volumen des He-Gases halbiert wird, verdoppelt sich sein Partialdruck. Der Gleichgewichtsdampfdruck von Wasser bleibt konstant, da sich die Temperatur nicht ändert.",
        "fr": "Lorsque le volume de gaz He est réduit de moitié, sa pression partielle double. La pression de vapeur d’équilibre de l’eau reste constante car la température ne change pas.",
        "ru": "Когда объем газа He уменьшается вдвое, его парциальное давление увеличивается вдвое. Равновесное давление пара воды остается постоянным, поскольку температура не меняется.",
        "ar": "عندما ينخفض ​​حجم غاز He إلى النصف، يتضاعف ضغطه الجزئي. يظل ضغط بخار الماء المتوازن ثابتًا لأن درجة الحرارة لا تتغير.",
        "zh": "当氦气的体积减半时，其分压加倍。由于温度不变，水的平衡蒸气压保持恒定。",
        "ku": "Dema qebareya gaza Heyê nîvî bibe, zexta wê ya qismî du qat dibe. Ji ber ku germahî naguhere, tansiyona hevsengiya buharê ya avê sabît dimîne."
      }
    },
    {
      "id": "u13-twin03",
      "stem": {
        "tr": "Kimya dersinde Gazlar: Kinetik Teori ve Gerçek Gazlar ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Gases: Kinetic Theory & Real Gases, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Kinetische Gastheorie: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Théorie Cinétique des Gaz, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Кинетическая теория газов», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"النظرية الحركية للغازات\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“气体动理论”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Teoriya Kînetîk a Gazan\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "İdeal gazların molekülleri arasında güçlü elektrostatik çekim vardır.",
          "en": "There is a strong electrostatic attraction between the molecules of ideal gases.",
          "de": "Zwischen den Molekülen idealer Gase besteht eine starke elektrostatische Anziehung.",
          "fr": "Il existe une forte attraction électrostatique entre les molécules des gaz parfaits.",
          "ru": "Между молекулами идеальных газов существует сильное электростатическое притяжение.",
          "ar": "هناك تجاذب إلكتروستاتيكي قوي بين جزيئات الغازات المثالية.",
          "zh": "理想气体分子之间存在很强的静电引力。",
          "ku": "Di navbera molekulên gazên îdeal de kêşeyeke elektrostatîk a xurt heye."
        },
        {
          "tr": "Buhar ve gaz kavramları bilimsel olarak birebir aynıdır.",
          "en": "The concepts of steam and gas are scientifically exactly the same.",
          "de": "Die Konzepte von Dampf und Gas sind wissenschaftlich genau gleich.",
          "fr": "Les concepts de vapeur et de gaz sont scientifiquement exactement les mêmes.",
          "ru": "Понятия пара и газа с научной точки зрения совершенно одинаковы.",
          "ar": "إن مفهومي البخار والغاز متطابقان تمامًا من الناحية العلمية.",
          "zh": "蒸汽和气体的概念在科学上是完全相同的。",
          "ku": "Têgehên buhar û gazê bi zanistî tam yek in."
        },
        {
          "tr": "Dalton Kısmi Basınçlar Yasası: Karışımdaki bir gazın kısmi basıncı Pi = Xi * Ptoplam'dır (Xi = ni / ntoplam).",
          "en": "Dalton's Law of Partial Pressures: The partial pressure of a gas in a mixture is Pi = Xi * Ptotal (Xi = ni / ntotal).",
          "de": "Daltons Partialdruckgesetz: Der Partialdruck eines Gases in einer Mischung ist Pi = Xi * Ptotal (Xi = ni / ntotal).",
          "fr": "Loi de Dalton sur les pressions partielles : La pression partielle d'un gaz dans un mélange est Pi = Xi * Ptotal (Xi = ni / ntotal).",
          "ru": "Закон парциальных давлений Дальтона: Парциальное давление газа в смеси равно Pi = Xi * Ptotal (Xi = ni/ntotal).",
          "ar": "قانون دالتون للضغوط الجزئية: الضغط الجزئي للغاز في الخليط هو Pi = Xi * Ptotal (Xi = ni / ntotal).",
          "zh": "道尔顿分压定律：混合物中气体的分压为 Pi = Xi * Ptotal (Xi = ni / ntotal)。",
          "ku": "Zagona Zextên Parçeyî ya Dalton: Pîvana qismî ya gazê di têkelê de Pi = Xi * Ptotal e (Xi = ni / ntotal)."
        },
        {
          "tr": "Soğutucu akışkanın kaynama noktası oda sıcaklığından çok yüksek olmalıdır.",
          "en": "The boiling point of the refrigerant must be much higher than room temperature.",
          "de": "Der Siedepunkt des Kältemittels muss deutlich über der Raumtemperatur liegen.",
          "fr": "Le point d'ébullition du réfrigérant doit être bien supérieur à la température ambiante.",
          "ru": "Температура кипения хладагента должна быть намного выше комнатной температуры.",
          "ar": "يجب أن تكون نقطة غليان سائل التبريد أعلى بكثير من درجة حرارة الغرفة.",
          "zh": "制冷剂的沸点必须远高于室温。",
          "ku": "Divê xala kelandinê ya sarincokê ji germahiya odeyê pir bilindtir be."
        },
        {
          "tr": "Gerçek gazların hepsinde Z değeri daima 1'e eşittir.",
          "en": "In all real gases, the Z value is always equal to 1.",
          "de": "In allen realen Gasen ist der Z-Wert immer gleich 1.",
          "fr": "Dans tous les gaz réels, la valeur Z est toujours égale à 1.",
          "ru": "Во всех реальных газах значение Z всегда равно 1.",
          "ar": "في جميع الغازات الحقيقية، تكون قيمة Z دائمًا تساوي 1.",
          "zh": "在所有实际气体中，Z 值始终等于 1。",
          "ku": "Di hemî gazên rastîn de, nirxa Z her gav bi 1 re ye."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Dalton Kısmi Basınçlar Yasası: Karışımdaki bir gazın kısmi basıncı Pi = Xi * Ptoplam'dır (Xi = ni / ntoplam).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Dalton's Law of Partial Pressures: The partial pressure of a gas in a mixture is Pi = Xi * Ptotal (Xi = ni / ntotal).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Daltons Partialdruckgesetz: Der Partialdruck eines Gases in einer Mischung ist Pi = Xi * Ptotal (Xi = ni / ntotal).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Loi de Dalton sur les pressions partielles : La pression partielle d'un gaz dans un mélange est Pi = Xi * Ptotal (Xi = ni / ntotal).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Закон парциальных давлений Дальтона: Парциальное давление газа в смеси равно Pi = Xi * Ptotal (Xi = ni/ntotal).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قانون دالتون للضغوط الجزئية: الضغط الجزئي للغاز في الخليط هو Pi = Xi * Ptotal (Xi = ni / ntotal).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“道尔顿分压定律：混合物中气体的分压为 Pi = Xi * Ptotal (Xi = ni / ntotal)。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Zagona Zextên Parçeyî ya Dalton: Pîvana qismî ya gazê di têkelê de Pi = Xi * Ptotal e (Xi = ni / ntotal).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Gazlar: Kinetik Teori ve Gerçek Gazlar konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Gases: Kinetic Theory & Real Gases?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Kinetische Gastheorie zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Théorie Cinétique des Gaz ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Кинетическая теория газов»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"النظرية الحركية للغازات\"؟",
        "zh": "根据“气体动理论”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Teoriya Kînetîk a Gazan\" de rast e?"
      },
      "options": [
        {
          "tr": "Joule-Thomson genleşmesinde gaz hızla ısınır.",
          "en": "In Joule-Thomson expansion, the gas heats up rapidly.",
          "de": "Bei der Joule-Thomson-Expansion erwärmt sich das Gas schnell.",
          "fr": "Lors de la détente Joule-Thomson, le gaz s'échauffe rapidement.",
          "ru": "При расширении Джоуля-Томсона газ быстро нагревается.",
          "ar": "في تمدد جول طومسون، يسخن الغاز بسرعة.",
          "zh": "在焦耳-汤姆逊膨胀中，气体迅速升温。",
          "ku": "Di berfirehbûna Joule-Thomson de, gaz bi lez germ dibe."
        },
        {
          "tr": "Su üstünde toplanan gazın basıncından suyun buhar basıncı çıkarılmaz.",
          "en": "The vapor pressure of the water cannot be subtracted from the pressure of the gas collected above the water.",
          "de": "Der Dampfdruck des Wassers kann nicht vom Druck des über dem Wasser gesammelten Gases abgezogen werden.",
          "fr": "La pression de vapeur de l’eau ne peut pas être soustraite de la pression du gaz collecté au-dessus de l’eau.",
          "ru": "Давление пара воды нельзя вычесть из давления газа, собранного над водой.",
          "ar": "لا يمكن طرح ضغط بخار الماء من ضغط الغاز المتجمع فوق الماء.",
          "zh": "水的蒸气压不能从水面上方收集的气体的压力中减去。",
          "ku": "Zexta buhara avê ji tansiyona gaza ku li jora avê hatiye berhevkirin nayê kêmkirin."
        },
        {
          "tr": "Aynı sıcaklıkta CH4 gazı SO2 gazından 4 kat daha hızlı difüzlenir.",
          "en": "At the same temperature, CH4 gas diffuses 4 times faster than SO2 gas.",
          "de": "Bei gleicher Temperatur diffundiert CH4-Gas 4-mal schneller als SO2-Gas.",
          "fr": "À la même température, le gaz CH4 diffuse 4 fois plus vite que le gaz SO2.",
          "ru": "При одинаковой температуре газ CH4 диффундирует в 4 раза быстрее, чем газ SO2.",
          "ar": "عند درجة الحرارة نفسها، ينتشر غاز CH4 أسرع بـ 4 مرات من غاز SO2.",
          "zh": "相同温度下，CH4气体的扩散速率是SO2气体的4倍。",
          "ku": "Di heman germahiyê de gaza CH4 4 qat ji gaza SO2 zûtir belav dibe."
        },
        {
          "tr": "Gazların ortalama kinetik enerjisi (Ek = 3/2 kT) YALNIZCA mutlak sıcaklığa bağlıdır; gazın türünden bağımsızdır.",
          "en": "The average kinetic energy of gases (Ek = 3/2 kT) depends ONLY on absolute temperature; is independent of the type of gas.",
          "de": "Die durchschnittliche kinetische Energie von Gasen (Ek = 3/2 kT) hängt NUR von der absoluten Temperatur ab; ist unabhängig von der Gasart.",
          "fr": "L'énergie cinétique moyenne des gaz (Ek = 3/2 kT) dépend UNIQUEMENT de la température absolue ; est indépendant du type de gaz.",
          "ru": "Средняя кинетическая энергия газов (Ek = 3/2 kT) зависит ТОЛЬКО от абсолютной температуры; она не зависит от природы газа.",
          "ar": "متوسط الطاقة الحركية للغازات (Ek = 3/2 kT) يعتمد فقط على درجة الحرارة المطلقة؛ ولا يعتمد على نوع الغاز.",
          "zh": "气体的平均动能 (Ek = 3/2 kT) 仅取决于绝对温度；与气体类型无关。",
          "ku": "Enerjiya kînetîk a navîn a gazan (Ek = 3/2 kT) TENÊ bi germahiya mutleq ve girêdayî ye; ji cureyê gazê serbixwe ye."
        },
        {
          "tr": "Yüksek basınç altında gaz taneciklerinin hacmi tamamen yok olur.",
          "en": "Under high pressure, the volume of gas particles disappears completely.",
          "de": "Unter hohem Druck verschwindet das Volumen der Gaspartikel vollständig.",
          "fr": "Sous haute pression, le volume des particules de gaz disparaît complètement.",
          "ru": "Под высоким давлением объем частиц газа полностью исчезает.",
          "ar": "تحت الضغط العالي، يختفي حجم جزيئات الغاز تمامًا.",
          "zh": "在高压下，气体粒子的体积完全消失。",
          "ku": "Di bin zexta bilind de, qebareya pariyên gazê bi tevahî winda dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Gazların ortalama kinetik enerjisi (Ek = 3/2 kT) YALNIZCA mutlak sıcaklığa bağlıdır; gazın türünden bağımsızdır.\" ifadesidir. Aynı sıcaklıktaki tüm gazların ortalama kinetik enerjisi eşittir!",
        "en": "The correct statement is: \"The average kinetic energy of gases (Ek = 3/2 kT) depends ONLY on absolute temperature; is independent of the type of gas.\". The average kinetic energy of all gases at the same temperature is equal!",
        "de": "Die zutreffende Aussage lautet: \"Die durchschnittliche kinetische Energie von Gasen (Ek = 3/2 kT) hängt NUR von der absoluten Temperatur ab; ist unabhängig von der Gasart.\". Die durchschnittliche kinetische Energie aller Gase bei gleicher Temperatur ist gleich!",
        "fr": "L'affirmation exacte est: \"L'énergie cinétique moyenne des gaz (Ek = 3/2 kT) dépend UNIQUEMENT de la température absolue ; est indépendant du type de gaz.\". L'énergie cinétique moyenne de tous les gaz à la même température est égale !",
        "ru": "Правильное утверждение: «Средняя кинетическая энергия газов (Ek = 3/2 kT) зависит ТОЛЬКО от абсолютной температуры; она не зависит от природы газа.». Средняя кинетическая энергия всех газов при одинаковой температуре одинакова!",
        "ar": "العبارة الصحيحة هي: \"متوسط الطاقة الحركية للغازات (Ek = 3/2 kT) يعتمد فقط على درجة الحرارة المطلقة؛ ولا يعتمد على نوع الغاز.\". متوسط ​​الطاقة الحركية لجميع الغازات عند نفس درجة الحرارة متساوي!",
        "zh": "正确表述为：“气体的平均动能 (Ek = 3/2 kT) 仅取决于绝对温度；与气体类型无关。”。相同温度下所有气体的平均动能相等！",
        "ku": "Gotina rast ev e: \"Enerjiya kînetîk a navîn a gazan (Ek = 3/2 kT) TENÊ bi germahiya mutleq ve girêdayî ye; ji cureyê gazê serbixwe ye.\". Enerjiya kînetîk a navînî ya hemî gazên di heman germahiyê de wekhev e!"
      }
    },
    {
      "id": "u13-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Gazlar: Kinetik Teori ve Gerçek Gazlar sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Gases: Kinetic Theory & Real Gases, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Kinetische Gastheorie: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Théorie Cinétique des Gaz, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Кинетическая теория газов», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"النظرية الحركية للغازات\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“气体动理论”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Teoriya Kînetîk a Gazan\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Kritik sıcaklığın üzerindeki akışkanlar sadece basınçla kolayca sıvılaşır.",
          "en": "Fluids above the critical temperature liquefy easily with pressure alone.",
          "de": "Flüssigkeiten oberhalb der kritischen Temperatur verflüssigen sich allein durch Druck leicht.",
          "fr": "Les fluides au-dessus de la température critique se liquéfient facilement avec la seule pression.",
          "ru": "Жидкости, температура которых превышает критическую, легко сжижаются только под действием давления.",
          "ar": "تسيل السوائل فوق درجة الحرارة الحرجة بسهولة بالضغط وحده.",
          "zh": "仅用压力，高于临界温度的流体就很容易液化。",
          "ku": "Şîvên li ser germahiya krîtîk tenê bi zextê bi hêsanî şil dibin."
        },
        {
          "tr": "Piston yukarı çekilip hacim artırıldığında suyun buhar basıncı yarıya iner.",
          "en": "When the piston is pulled up and the volume is increased, the vapor pressure of the water is halved.",
          "de": "Wenn der Kolben nach oben gezogen wird und das Volumen vergrößert wird, halbiert sich der Dampfdruck des Wassers.",
          "fr": "Lorsque le piston est tiré vers le haut et que le volume augmente, la pression de vapeur de l'eau est réduite de moitié.",
          "ru": "Когда поршень поднимается вверх и объем увеличивается, давление пара воды уменьшается вдвое.",
          "ar": "عندما يتم سحب المكبس للأعلى وزيادة الحجم، ينخفض ​​ضغط بخار الماء إلى النصف.",
          "zh": "当活塞向上拉并且体积增大时，水的蒸气压减半。",
          "ku": "Dema ku piston bi jor ve tê kişandin û hêjmar zêde dibe, zexta buharê ya avê nîvî dibe."
        },
        {
          "tr": "Efüzyon iki gazın birbiri içinde karışmasıdır.",
          "en": "Effusion is the mixing of two gases with each other.",
          "de": "Unter Effusion versteht man die Vermischung zweier Gase miteinander.",
          "fr": "L'effusion est le mélange de deux gaz l'un dans l'autre.",
          "ru": "Эффузия – это смешение двух газов друг с другом.",
          "ar": "الانصباب هو اختلاط غازين مع بعضهما البعض.",
          "zh": "泻流是两种气体相互混合的过程。",
          "ku": "Efûzyon tevlihevbûna du gazan di nav hev de ye."
        },
        {
          "tr": "Mol kütlesi büyük olan gazlar daha hızlı difüzlenir.",
          "en": "Gases with larger molar masses diffuse faster.",
          "de": "Gase mit größeren Molmassen diffundieren schneller.",
          "fr": "Les gaz ayant des masses molaires plus grandes diffusent plus rapidement.",
          "ru": "Газы с большей молярной массой диффундируют быстрее.",
          "ar": "الغازات ذات الكتل المولية الأكبر تنتشر بشكل أسرع.",
          "zh": "摩尔质量越大的气体扩散得越快。",
          "ku": "Gazên bi girseyên molî yên mezintir zûtir belav dibin."
        },
        {
          "tr": "Yüksek sıcaklık, düşük basınç ve küçük mol kütlesi (zayıf çekim) gazları idealliğe yaklaştırır.",
          "en": "High temperature, low pressure and small molar mass (weak intermolecular attraction) bring gases closer to ideal behavior.",
          "de": "Hohe Temperatur, niedriger Druck und kleine Molmasse (schwache zwischenmolekulare Anziehung) bringen Gase dem idealen Verhalten näher.",
          "fr": "Une température élevée, une basse pression et une petite masse molaire (faible attraction intermoléculaire) rapprochent les gaz du comportement idéal.",
          "ru": "Высокая температура, низкое давление и малая молярная масса (слабое межмолекулярное притяжение) приближают поведение газов к идеальному.",
          "ar": "درجة الحرارة المرتفعة والضغط المنخفض والكتلة المولية الصغيرة (تجاذب ضعيف بين الجزيئات) تقرّب الغازات من السلوك المثالي.",
          "zh": "高温、低压和较小的摩尔质量（分子间引力弱）使气体更接近理想气体行为。",
          "ku": "Germahiya bilind, zexta nizm û girseya molar a biçûk (kişandina navmolekulî ya qels) gazan nêzîkî tevgera îdeal dikin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Yüksek sıcaklık, düşük basınç ve küçük mol kütlesi (zayıf çekim) gazları idealliğe yaklaştırır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"High temperature, low pressure and small molar mass (weak intermolecular attraction) bring gases closer to ideal behavior.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Hohe Temperatur, niedriger Druck und kleine Molmasse (schwache zwischenmolekulare Anziehung) bringen Gase dem idealen Verhalten näher.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Une température élevée, une basse pression et une petite masse molaire (faible attraction intermoléculaire) rapprochent les gaz du comportement idéal.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Высокая температура, низкое давление и малая молярная масса (слабое межмолекулярное притяжение) приближают поведение газов к идеальному.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"درجة الحرارة المرتفعة والضغط المنخفض والكتلة المولية الصغيرة (تجاذب ضعيف بين الجزيئات) تقرّب الغازات من السلوك المثالي.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“高温、低压和较小的摩尔质量（分子间引力弱）使气体更接近理想气体行为。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Germahiya bilind, zexta nizm û girseya molar a biçûk (kişandina navmolekulî ya qels) gazan nêzîkî tevgera îdeal dikin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin06",
      "stem": {
        "tr": "Aşağıda Gazlar: Kinetik Teori ve Gerçek Gazlar ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Gases: Kinetic Theory & Real Gases, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Kinetische Gastheorie: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Théorie Cinétique des Gaz, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Кинетическая теория газов», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"النظرية الحركية للغازات\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“气体动理论”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Teoriya Kînetîk a Gazan\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Gerçek gaz molekülleri arasında çekim kuvveti vardır ve öz hacimleri sıfır değildir.",
          "en": "Real gas molecules attract each other, and their own volumes are not zero.",
          "de": "Zwischen den Molekülen realer Gase wirken Anziehungskräfte, und ihr Eigenvolumen ist nicht null.",
          "fr": "Les molécules d'un gaz réel s'attirent mutuellement et leur volume propre n'est pas nul.",
          "ru": "Между молекулами реального газа действуют силы притяжения, и их собственный объём не равен нулю.",
          "ar": "توجد قوى تجاذب بين جزيئات الغاز الحقيقي، وحجمها الذاتي لا يساوي صفرًا.",
          "zh": "真实气体分子之间存在引力，且分子自身体积不为零。",
          "ku": "Di navbera molekulên gaza rastîn de hêza kişandinê heye û qebareya wan a xwe ne sifir e."
        },
        {
          "tr": "Buhar ve gaz kavramları bilimsel olarak birebir aynıdır.",
          "en": "The concepts of steam and gas are scientifically exactly the same.",
          "de": "Die Konzepte von Dampf und Gas sind wissenschaftlich genau gleich.",
          "fr": "Les concepts de vapeur et de gaz sont scientifiquement exactement les mêmes.",
          "ru": "Понятия пара и газа с научной точки зрения совершенно одинаковы.",
          "ar": "إن مفهومي البخار والغاز متطابقان تمامًا من الناحية العلمية.",
          "zh": "蒸汽和气体的概念在科学上是完全相同的。",
          "ku": "Têgehên buhar û gazê bi zanistî tam yek in."
        },
        {
          "tr": "Soğutucu akışkanın kaynama noktası oda sıcaklığından çok yüksek olmalıdır.",
          "en": "The boiling point of the refrigerant must be much higher than room temperature.",
          "de": "Der Siedepunkt des Kältemittels muss deutlich über der Raumtemperatur liegen.",
          "fr": "Le point d'ébullition du réfrigérant doit être bien supérieur à la température ambiante.",
          "ru": "Температура кипения хладагента должна быть намного выше комнатной температуры.",
          "ar": "يجب أن تكون نقطة غليان سائل التبريد أعلى بكثير من درجة حرارة الغرفة.",
          "zh": "制冷剂的沸点必须远高于室温。",
          "ku": "Divê xala kelandinê ya sarincokê ji germahiya odeyê pir bilindtir be."
        },
        {
          "tr": "Gerçek gazların hepsinde Z değeri daima 1'e eşittir.",
          "en": "In all real gases, the Z value is always equal to 1.",
          "de": "In allen realen Gasen ist der Z-Wert immer gleich 1.",
          "fr": "Dans tous les gaz réels, la valeur Z est toujours égale à 1.",
          "ru": "Во всех реальных газах значение Z всегда равно 1.",
          "ar": "في جميع الغازات الحقيقية، تكون قيمة Z دائمًا تساوي 1.",
          "zh": "在所有实际气体中，Z 值始终等于 1。",
          "ku": "Di hemî gazên rastîn de, nirxa Z her gav bi 1 re ye."
        },
        {
          "tr": "Bir gazın mutlak sıcaklığı 4 katına çıkarılırsa difüzyon hızı da 4 katına çıkar.",
          "en": "If the absolute temperature of a gas is quadrupled, its diffusion rate also quadruples.",
          "de": "Wird die absolute Temperatur eines Gases vervierfacht, vervierfacht sich auch seine Diffusionsgeschwindigkeit.",
          "fr": "Si la température absolue d'un gaz est multipliée par 4, sa vitesse de diffusion est aussi multipliée par 4.",
          "ru": "Если абсолютную температуру газа увеличить в 4 раза, скорость его диффузии тоже увеличится в 4 раза.",
          "ar": "إذا زادت درجة الحرارة المطلقة لغاز 4 مرات، يزداد معدل انتشاره أيضًا 4 مرات.",
          "zh": "若气体的绝对温度增大到原来的4倍，其扩散速率也增大到原来的4倍。",
          "ku": "Ger germahiya mutleq a gazekê 4 qat bibe, leza belavbûna wê jî 4 qat dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Gerçek gaz molekülleri arasında çekim kuvveti vardır ve öz hacimleri sıfır değildir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Real gas molecules attract each other, and their own volumes are not zero.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Zwischen den Molekülen realer Gase wirken Anziehungskräfte, und ihr Eigenvolumen ist nicht null.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les molécules d'un gaz réel s'attirent mutuellement et leur volume propre n'est pas nul.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Между молекулами реального газа действуют силы притяжения, и их собственный объём не равен нулю.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"توجد قوى تجاذب بين جزيئات الغاز الحقيقي، وحجمها الذاتي لا يساوي صفرًا.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“真实气体分子之间存在引力，且分子自身体积不为零。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di navbera molekulên gaza rastîn de hêza kişandinê heye û qebareya wan a xwe ne sifir e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin07",
      "stem": {
        "tr": "Gazlar: Kinetik Teori ve Gerçek Gazlar konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Gases: Kinetic Theory & Real Gases, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Kinetische Gastheorie: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Théorie Cinétique des Gaz, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Кинетическая теория газов», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"النظرية الحركية للغازات\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“气体动理论”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Teoriya Kînetîk a Gazan\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Su üstünde toplanan gazın basıncından suyun buhar basıncı çıkarılmaz.",
          "en": "The vapor pressure of the water cannot be subtracted from the pressure of the gas collected above the water.",
          "de": "Der Dampfdruck des Wassers kann nicht vom Druck des über dem Wasser gesammelten Gases abgezogen werden.",
          "fr": "La pression de vapeur de l’eau ne peut pas être soustraite de la pression du gaz collecté au-dessus de l’eau.",
          "ru": "Давление пара воды нельзя вычесть из давления газа, собранного над водой.",
          "ar": "لا يمكن طرح ضغط بخار الماء من ضغط الغاز المتجمع فوق الماء.",
          "zh": "水的蒸气压不能从水面上方收集的气体的压力中减去。",
          "ku": "Zexta buhara avê ji tansiyona gaza ku li jora avê hatiye berhevkirin nayê kêmkirin."
        },
        {
          "tr": "Joule-Thomson Olayı: Genleşen gazın kendi iç enerjisini harcayarak soğuması olayıdır (buzdolabı ve klimalar).",
          "en": "Joule-Thomson Effect: It is the cooling of the expanding gas by consuming its own internal energy (refrigerators and air conditioners).",
          "de": "Joule-Thomson-Effekt: Dabei handelt es sich um die Abkühlung des expandierenden Gases durch den Verbrauch seiner eigenen inneren Energie (Kühlschränke und Klimaanlagen).",
          "fr": "Effet Joule-Thomson : C'est le refroidissement du gaz en expansion en consommant sa propre énergie interne (réfrigérateurs et climatiseurs).",
          "ru": "Эффект Джоуля-Томсона: охлаждение расширяющегося газа за счет потребления его собственной внутренней энергии (холодильники и кондиционеры).",
          "ar": "تأثير جول طومسون: هو تبريد الغاز المتمدد عن طريق استهلاك الطاقة الداخلية الخاصة به (الثلاجات والمكيفات).",
          "zh": "焦耳-汤姆逊效应：膨胀气体通过消耗其自身内部能量（冰箱和空调）来冷却。",
          "ku": "Bandora Joule-Thomson: Ew sarbûna gaza berbelavkirî ye ku bi vexwarina enerjiya xweya hundurîn (sax û klîma) ve ye."
        },
        {
          "tr": "Aynı sıcaklıkta CH4 gazı SO2 gazından 4 kat daha hızlı difüzlenir.",
          "en": "At the same temperature, CH4 gas diffuses 4 times faster than SO2 gas.",
          "de": "Bei gleicher Temperatur diffundiert CH4-Gas 4-mal schneller als SO2-Gas.",
          "fr": "À la même température, le gaz CH4 diffuse 4 fois plus vite que le gaz SO2.",
          "ru": "При одинаковой температуре газ CH4 диффундирует в 4 раза быстрее, чем газ SO2.",
          "ar": "عند درجة الحرارة نفسها، ينتشر غاز CH4 أسرع بـ 4 مرات من غاز SO2.",
          "zh": "相同温度下，CH4气体的扩散速率是SO2气体的4倍。",
          "ku": "Di heman germahiyê de gaza CH4 4 qat ji gaza SO2 zûtir belav dibe."
        },
        {
          "tr": "Yüksek basınç altında gaz taneciklerinin hacmi tamamen yok olur.",
          "en": "Under high pressure, the volume of gas particles disappears completely.",
          "de": "Unter hohem Druck verschwindet das Volumen der Gaspartikel vollständig.",
          "fr": "Sous haute pression, le volume des particules de gaz disparaît complètement.",
          "ru": "Под высоким давлением объем частиц газа полностью исчезает.",
          "ar": "تحت الضغط العالي، يختفي حجم جزيئات الغاز تمامًا.",
          "zh": "在高压下，气体粒子的体积完全消失。",
          "ku": "Di bin zexta bilind de, qebareya pariyên gazê bi tevahî winda dibe."
        },
        {
          "tr": "Kısmi basınç mol kesrinden bağımsızdır.",
          "en": "The partial pressure is independent of the mole fraction.",
          "de": "Der Partialdruck ist unabhängig vom Stoffmengenanteil.",
          "fr": "La pression partielle est indépendante de la fraction molaire.",
          "ru": "Парциальное давление не зависит от мольной доли.",
          "ar": "الضغط الجزئي مستقل عن جزء الخلد.",
          "zh": "分压与摩尔分数无关。",
          "ku": "Zexta qismî ji beşa molê serbixwe ye."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Joule-Thomson Olayı: Genleşen gazın kendi iç enerjisini harcayarak soğuması olayıdır (buzdolabı ve klimalar).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Joule-Thomson Effect: It is the cooling of the expanding gas by consuming its own internal energy (refrigerators and air conditioners).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Joule-Thomson-Effekt: Dabei handelt es sich um die Abkühlung des expandierenden Gases durch den Verbrauch seiner eigenen inneren Energie (Kühlschränke und Klimaanlagen).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Effet Joule-Thomson : C'est le refroidissement du gaz en expansion en consommant sa propre énergie interne (réfrigérateurs et climatiseurs).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Эффект Джоуля-Томсона: охлаждение расширяющегося газа за счет потребления его собственной внутренней энергии (холодильники и кондиционеры).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تأثير جول طومسون: هو تبريد الغاز المتمدد عن طريق استهلاك الطاقة الداخلية الخاصة به (الثلاجات والمكيفات).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“焦耳-汤姆逊效应：膨胀气体通过消耗其自身内部能量（冰箱和空调）来冷却。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Bandora Joule-Thomson: Ew sarbûna gaza berbelavkirî ye ku bi vexwarina enerjiya xweya hundurîn (sax û klîma) ve ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Gazlar: Kinetik Teori ve Gerçek Gazlar ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Gases: Kinetic Theory & Real Gases, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Kinetische Gastheorie: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Théorie Cinétique des Gaz, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Кинетическая теория газов», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"النظرية الحركية للغازات\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“气体动理论”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Teoriya Kînetîk a Gazan\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Piston yukarı çekilip hacim artırıldığında suyun buhar basıncı yarıya iner.",
          "en": "When the piston is pulled up and the volume is increased, the vapor pressure of the water is halved.",
          "de": "Wenn der Kolben nach oben gezogen wird und das Volumen vergrößert wird, halbiert sich der Dampfdruck des Wassers.",
          "fr": "Lorsque le piston est tiré vers le haut et que le volume augmente, la pression de vapeur de l'eau est réduite de moitié.",
          "ru": "Когда поршень поднимается вверх и объем увеличивается, давление пара воды уменьшается вдвое.",
          "ar": "عندما يتم سحب المكبس للأعلى وزيادة الحجم، ينخفض ​​ضغط بخار الماء إلى النصف.",
          "zh": "当活塞向上拉并且体积增大时，水的蒸气压减半。",
          "ku": "Dema ku piston bi jor ve tê kişandin û hêjmar zêde dibe, zexta buharê ya avê nîvî dibe."
        },
        {
          "tr": "Efüzyon iki gazın birbiri içinde karışmasıdır.",
          "en": "Effusion is the mixing of two gases with each other.",
          "de": "Unter Effusion versteht man die Vermischung zweier Gase miteinander.",
          "fr": "L'effusion est le mélange de deux gaz l'un dans l'autre.",
          "ru": "Эффузия – это смешение двух газов друг с другом.",
          "ar": "الانصباب هو اختلاط غازين مع بعضهما البعض.",
          "zh": "泻流是两种气体相互混合的过程。",
          "ku": "Efûzyon tevlihevbûna du gazan di nav hev de ye."
        },
        {
          "tr": "Kritik sıcaklık: Bir gazın basınç uygulanarak sıvılaştırılabileceği en yüksek sıcaklıktır; üzerindeki sıcaklıkta gaz sıvılaştırılamaz.",
          "en": "Critical temperature: The highest temperature at which a gas can be liquefied by applying pressure; At temperatures above this, gas cannot be liquefied.",
          "de": "Kritische Temperatur: Die höchste Temperatur, bei der ein Gas durch Druckanwendung verflüssigt werden kann; Bei Temperaturen darüber kann Gas nicht verflüssigt werden.",
          "fr": "Température critique : température la plus élevée à laquelle un gaz peut être liquéfié en appliquant une pression ; À des températures supérieures, le gaz ne peut pas être liquéfié.",
          "ru": "Критическая температура: самая высокая температура, при которой газ можно сжижать под давлением; При температурах выше этой газ не может быть сжижен.",
          "ar": "درجة الحرارة الحرجة: أعلى درجة حرارة يمكن عندها تسييل الغاز بالضغط. عند درجات حرارة أعلى من ذلك، لا يمكن تسييل الغاز.",
          "zh": "临界温度：气体通过施加压力可以液化的最高温度；在高于此温度时，气体不能液化。",
          "ku": "Germahiya krîtîk: Germahiya herî bilind a ku tê de gazek bi pêkanîna zextê dikare şil bibe; Di germahiyên ji vê zêdetir de, gaz nikare şil bibe."
        },
        {
          "tr": "Mol kütlesi büyük olan gazlar daha hızlı difüzlenir.",
          "en": "Gases with larger molar masses diffuse faster.",
          "de": "Gase mit größeren Molmassen diffundieren schneller.",
          "fr": "Les gaz ayant des masses molaires plus grandes diffusent plus rapidement.",
          "ru": "Газы с большей молярной массой диффундируют быстрее.",
          "ar": "الغازات ذات الكتل المولية الأكبر تنتشر بشكل أسرع.",
          "zh": "摩尔质量越大的气体扩散得越快。",
          "ku": "Gazên bi girseyên molî yên mezintir zûtir belav dibin."
        },
        {
          "tr": "Aynı sıcaklıktaki CO2 moleküllerinin ortalama kinetik enerjisi H2 moleküllerininkinden büyüktür.",
          "en": "At the same temperature, the average kinetic energy of CO2 molecules is greater than that of H2 molecules.",
          "de": "Bei gleicher Temperatur ist die mittlere kinetische Energie von CO2-Molekülen größer als die von H2-Molekülen.",
          "fr": "À la même température, l'énergie cinétique moyenne des molécules de CO2 est supérieure à celle des molécules de H2.",
          "ru": "При одинаковой температуре средняя кинетическая энергия молекул CO2 больше, чем у молекул H2.",
          "ar": "عند درجة الحرارة نفسها، يكون متوسط الطاقة الحركية لجزيئات CO2 أكبر من متوسط الطاقة الحركية لجزيئات H2.",
          "zh": "相同温度下，CO2分子的平均动能大于H2分子的平均动能。",
          "ku": "Di heman germahiyê de, enerjiya kînetîk a navîn a molekulên CO2 ji ya molekulên H2 mezintir e."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Kritik sıcaklık: Bir gazın basınç uygulanarak sıvılaştırılabileceği en yüksek sıcaklıktır; üzerindeki sıcaklıkta gaz sıvılaştırılamaz.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Critical temperature: The highest temperature at which a gas can be liquefied by applying pressure; At temperatures above this, gas cannot be liquefied.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Kritische Temperatur: Die höchste Temperatur, bei der ein Gas durch Druckanwendung verflüssigt werden kann; Bei Temperaturen darüber kann Gas nicht verflüssigt werden.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Température critique : température la plus élevée à laquelle un gaz peut être liquéfié en appliquant une pression ; À des températures supérieures, le gaz ne peut pas être liquéfié.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Критическая температура: самая высокая температура, при которой газ можно сжижать под давлением; При температурах выше этой газ не может быть сжижен.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"درجة الحرارة الحرجة: أعلى درجة حرارة يمكن عندها تسييل الغاز بالضغط. عند درجات حرارة أعلى من ذلك، لا يمكن تسييل الغاز.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“临界温度：气体通过施加压力可以液化的最高温度；在高于此温度时，气体不能液化。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Germahiya krîtîk: Germahiya herî bilind a ku tê de gazek bi pêkanîna zextê dikare şil bibe; Di germahiyên ji vê zêdetir de, gaz nikare şil bibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Gazlar: Kinetik Teori ve Gerçek Gazlar konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Gases: Kinetic Theory & Real Gases, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Kinetische Gastheorie die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Théorie Cinétique des Gaz, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Кинетическая теория газов», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"النظرية الحركية للغازات\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“气体动理论”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Teoriya Kînetîk a Gazan\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Soğutucu akışkanın kaynama noktası oda sıcaklığından çok yüksek olmalıdır.",
          "en": "The boiling point of the refrigerant must be much higher than room temperature.",
          "de": "Der Siedepunkt des Kältemittels muss deutlich über der Raumtemperatur liegen.",
          "fr": "Le point d'ébullition du réfrigérant doit être bien supérieur à la température ambiante.",
          "ru": "Температура кипения хладагента должна быть намного выше комнатной температуры.",
          "ar": "يجب أن تكون نقطة غليان سائل التبريد أعلى بكثير من درجة حرارة الغرفة.",
          "zh": "制冷剂的沸点必须远高于室温。",
          "ku": "Divê xala kelandinê ya sarincokê ji germahiya odeyê pir bilindtir be."
        },
        {
          "tr": "Gerçek gazların hepsinde Z değeri daima 1'e eşittir.",
          "en": "In all real gases, the Z value is always equal to 1.",
          "de": "In allen realen Gasen ist der Z-Wert immer gleich 1.",
          "fr": "Dans tous les gaz réels, la valeur Z est toujours égale à 1.",
          "ru": "Во всех реальных газах значение Z всегда равно 1.",
          "ar": "في جميع الغازات الحقيقية، تكون قيمة Z دائمًا تساوي 1.",
          "zh": "在所有实际气体中，Z 值始终等于 1。",
          "ku": "Di hemî gazên rastîn de, nirxa Z her gav bi 1 re ye."
        },
        {
          "tr": "Bir gazın mutlak sıcaklığı 4 katına çıkarılırsa difüzyon hızı da 4 katına çıkar.",
          "en": "If the absolute temperature of a gas is quadrupled, its diffusion rate also quadruples.",
          "de": "Wird die absolute Temperatur eines Gases vervierfacht, vervierfacht sich auch seine Diffusionsgeschwindigkeit.",
          "fr": "Si la température absolue d'un gaz est multipliée par 4, sa vitesse de diffusion est aussi multipliée par 4.",
          "ru": "Если абсолютную температуру газа увеличить в 4 раза, скорость его диффузии тоже увеличится в 4 раза.",
          "ar": "إذا زادت درجة الحرارة المطلقة لغاز 4 مرات، يزداد معدل انتشاره أيضًا 4 مرات.",
          "zh": "若气体的绝对温度增大到原来的4倍，其扩散速率也增大到原来的4倍。",
          "ku": "Ger germahiya mutleq a gazekê 4 qat bibe, leza belavbûna wê jî 4 qat dibe."
        },
        {
          "tr": "Buhar, bir maddenin kritik sıcaklığının altındaki gaz hâlidir; sabit sıcaklıkta basınç artırılarak sıvılaştırılabilir.",
          "en": "Vapor is the gaseous state of a substance below its critical temperature; it can be liquefied by increasing the pressure at constant temperature.",
          "de": "Dampf ist der gasförmige Zustand eines Stoffes unterhalb seiner kritischen Temperatur; er kann bei konstanter Temperatur durch Druckerhöhung verflüssigt werden.",
          "fr": "La vapeur est l'état gazeux d'une substance en dessous de sa température critique ; elle peut être liquéfiée en augmentant la pression à température constante.",
          "ru": "Пар — это газообразное состояние вещества ниже его критической температуры; его можно сжижить, повышая давление при постоянной температуре.",
          "ar": "البخار هو الحالة الغازية للمادة عند درجة حرارة أقل من درجة حرارتها الحرجة؛ ويمكن تسييله بزيادة الضغط عند درجة حرارة ثابتة.",
          "zh": "蒸气是物质在其临界温度以下的气态；在温度不变时增大压强即可使其液化。",
          "ku": "Buhar rewşa gazî ya maddeyekê ye di bin germahiya wê ya krîtîk de; di germahiya sabît de bi zêdekirina zextê dikare were şilkirin."
        },
        {
          "tr": "Yüksek basınç ve düşük sıcaklıkta gazlar ideale en yakındır.",
          "en": "Gases at high pressure and low temperature are closest to ideal.",
          "de": "Gase mit hohem Druck und niedriger Temperatur kommen dem Ideal am nächsten.",
          "fr": "Les gaz à haute pression et basse température sont les plus proches de l’idéal.",
          "ru": "Наиболее близки к идеальным газы при высоком давлении и низкой температуре.",
          "ar": "الغازات ذات الضغط العالي ودرجة الحرارة المنخفضة هي الأقرب إلى المثالية.",
          "zh": "高压和低温下的气体最接近理想状态。",
          "ku": "Gazên di tansiyona bilind û germahiya nizm de herî nêzîk îdeal in."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Buhar, bir maddenin kritik sıcaklığının altındaki gaz hâlidir; sabit sıcaklıkta basınç artırılarak sıvılaştırılabilir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Vapor is the gaseous state of a substance below its critical temperature; it can be liquefied by increasing the pressure at constant temperature.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Dampf ist der gasförmige Zustand eines Stoffes unterhalb seiner kritischen Temperatur; er kann bei konstanter Temperatur durch Druckerhöhung verflüssigt werden.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La vapeur est l'état gazeux d'une substance en dessous de sa température critique ; elle peut être liquéfiée en augmentant la pression à température constante.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Пар — это газообразное состояние вещества ниже его критической температуры; его можно сжижить, повышая давление при постоянной температуре.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"البخار هو الحالة الغازية للمادة عند درجة حرارة أقل من درجة حرارتها الحرجة؛ ويمكن تسييله بزيادة الضغط عند درجة حرارة ثابتة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“蒸气是物质在其临界温度以下的气态；在温度不变时增大压强即可使其液化。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Buhar rewşa gazî ya maddeyekê ye di bin germahiya wê ya krîtîk de; di germahiya sabît de bi zêdekirina zextê dikare were şilkirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin10",
      "stem": {
        "tr": "Kimya dersinde Gazlar: Kinetik Teori ve Gerçek Gazlar ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Gases: Kinetic Theory & Real Gases, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Kinetische Gastheorie: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Théorie Cinétique des Gaz, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Кинетическая теория газов», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"النظرية الحركية للغازات\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“气体动理论”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Teoriya Kînetîk a Gazan\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Aynı sıcaklıkta CH4 gazı SO2 gazından 4 kat daha hızlı difüzlenir.",
          "en": "At the same temperature, CH4 gas diffuses 4 times faster than SO2 gas.",
          "de": "Bei gleicher Temperatur diffundiert CH4-Gas 4-mal schneller als SO2-Gas.",
          "fr": "À la même température, le gaz CH4 diffuse 4 fois plus vite que le gaz SO2.",
          "ru": "При одинаковой температуре газ CH4 диффундирует в 4 раза быстрее, чем газ SO2.",
          "ar": "عند درجة الحرارة نفسها، ينتشر غاز CH4 أسرع بـ 4 مرات من غاز SO2.",
          "zh": "相同温度下，CH4气体的扩散速率是SO2气体的4倍。",
          "ku": "Di heman germahiyê de gaza CH4 4 qat ji gaza SO2 zûtir belav dibe."
        },
        {
          "tr": "Yüksek basınç altında gaz taneciklerinin hacmi tamamen yok olur.",
          "en": "Under high pressure, the volume of gas particles disappears completely.",
          "de": "Unter hohem Druck verschwindet das Volumen der Gaspartikel vollständig.",
          "fr": "Sous haute pression, le volume des particules de gaz disparaît complètement.",
          "ru": "Под высоким давлением объем частиц газа полностью исчезает.",
          "ar": "تحت الضغط العالي، يختفي حجم جزيئات الغاز تمامًا.",
          "zh": "在高压下，气体粒子的体积完全消失。",
          "ku": "Di bin zexta bilind de, qebareya pariyên gazê bi tevahî winda dibe."
        },
        {
          "tr": "Kısmi basınç mol kesrinden bağımsızdır.",
          "en": "The partial pressure is independent of the mole fraction.",
          "de": "Der Partialdruck ist unabhängig vom Stoffmengenanteil.",
          "fr": "La pression partielle est indépendante de la fraction molaire.",
          "ru": "Парциальное давление не зависит от мольной доли.",
          "ar": "الضغط الجزئي مستقل عن جزء الخلد.",
          "zh": "分压与摩尔分数无关。",
          "ku": "Zexta qismî ji beşa molê serbixwe ye."
        },
        {
          "tr": "İdeal gazların molekülleri arasında güçlü elektrostatik çekim vardır.",
          "en": "There is a strong electrostatic attraction between the molecules of ideal gases.",
          "de": "Zwischen den Molekülen idealer Gase besteht eine starke elektrostatische Anziehung.",
          "fr": "Il existe une forte attraction électrostatique entre les molécules des gaz parfaits.",
          "ru": "Между молекулами идеальных газов существует сильное электростатическое притяжение.",
          "ar": "هناك تجاذب إلكتروستاتيكي قوي بين جزيئات الغازات المثالية.",
          "zh": "理想气体分子之间存在很强的静电引力。",
          "ku": "Di navbera molekulên gazên îdeal de kêşeyeke elektrostatîk a xurt heye."
        },
        {
          "tr": "Su üstünde toplanan gazlarda toplam basınç Ptop = Pgaz + Psu_buharı formülüyle hesaplanır.",
          "en": "The total pressure in gases collected above water is calculated by the formula Ptop = Pgas + Pwater_vapour.",
          "de": "Der Gesamtdruck in über Wasser gesammelten Gasen wird nach der Formel Ptop = Pgas + PWasserdampf berechnet.",
          "fr": "La pression totale des gaz collectés au-dessus de l'eau est calculée par la formule Ptop = Pgas + Pwater_vapour.",
          "ru": "Общее давление газов, собранных над водой, рассчитывается по формуле Ptop = Pgas + Pwater_vapour.",
          "ar": "يتم حساب الضغط الكلي في الغازات المتجمعة فوق الماء بالصيغة Ptop = Pgas + Pwater_vapour.",
          "zh": "水面上方收集的气体总压力通过公式 Ptop = Pgas + Pwater_vapour 计算。",
          "ku": "Tevahiya zexta gazên ku li jorê avê têne berhev kirin bi formula Ptop = Pgas + Pwater_vapour tê hesibandin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Su üstünde toplanan gazlarda toplam basınç Ptop = Pgaz + Psu_buharı formülüyle hesaplanır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The total pressure in gases collected above water is calculated by the formula Ptop = Pgas + Pwater_vapour.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der Gesamtdruck in über Wasser gesammelten Gasen wird nach der Formel Ptop = Pgas + PWasserdampf berechnet.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La pression totale des gaz collectés au-dessus de l'eau est calculée par la formule Ptop = Pgas + Pwater_vapour.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Общее давление газов, собранных над водой, рассчитывается по формуле Ptop = Pgas + Pwater_vapour.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يتم حساب الضغط الكلي في الغازات المتجمعة فوق الماء بالصيغة Ptop = Pgas + Pwater_vapour.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“水面上方收集的气体总压力通过公式 Ptop = Pgas + Pwater_vapour 计算。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Tevahiya zexta gazên ku li jorê avê têne berhev kirin bi formula Ptop = Pgas + Pwater_vapour tê hesibandin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Gazlar: Kinetik Teori ve Gerçek Gazlar konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Gases: Kinetic Theory & Real Gases?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Kinetische Gastheorie zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Théorie Cinétique des Gaz ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Кинетическая теория газов»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"النظرية الحركية للغازات\"؟",
        "zh": "根据“气体动理论”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Teoriya Kînetîk a Gazan\" de rast e?"
      },
      "options": [
        {
          "tr": "Kapta sıvı su bulunduğu sürece sabit sıcaklıkta kabın hacmi değiştirilse de suyun buhar basıncı DEĞİŞMEZ.",
          "en": "As long as liquid water remains in the container, the vapor pressure of water DOES NOT change when the volume is changed at constant temperature.",
          "de": "Solange flüssiges Wasser im Behälter vorhanden ist, ändert sich der Dampfdruck des Wassers bei konstanter Temperatur NICHT, auch wenn das Volumen verändert wird.",
          "fr": "Tant qu'il reste de l'eau liquide dans le récipient, la pression de vapeur de l'eau NE change PAS lorsque le volume varie à température constante.",
          "ru": "Пока в сосуде остаётся жидкая вода, давление её пара при постоянной температуре НЕ меняется при изменении объёма.",
          "ar": "ما دام الماء السائل موجودًا في الوعاء، فإن ضغط بخار الماء لا يتغير عند تغيير الحجم مع ثبات درجة الحرارة.",
          "zh": "只要容器中仍有液态水，在温度不变时改变容器体积，水的蒸气压不会改变。",
          "ku": "Heta ku di firaxê de ava şil hebe, di germahiya sabît de qebare were guhertin jî zexta buhara avê NAGUHERE."
        },
        {
          "tr": "Efüzyon iki gazın birbiri içinde karışmasıdır.",
          "en": "Effusion is the mixing of two gases with each other.",
          "de": "Unter Effusion versteht man die Vermischung zweier Gase miteinander.",
          "fr": "L'effusion est le mélange de deux gaz l'un dans l'autre.",
          "ru": "Эффузия – это смешение двух газов друг с другом.",
          "ar": "الانصباب هو اختلاط غازين مع بعضهما البعض.",
          "zh": "泻流是两种气体相互混合的过程。",
          "ku": "Efûzyon tevlihevbûna du gazan di nav hev de ye."
        },
        {
          "tr": "Mol kütlesi büyük olan gazlar daha hızlı difüzlenir.",
          "en": "Gases with larger molar masses diffuse faster.",
          "de": "Gase mit größeren Molmassen diffundieren schneller.",
          "fr": "Les gaz ayant des masses molaires plus grandes diffusent plus rapidement.",
          "ru": "Газы с большей молярной массой диффундируют быстрее.",
          "ar": "الغازات ذات الكتل المولية الأكبر تنتشر بشكل أسرع.",
          "zh": "摩尔质量越大的气体扩散得越快。",
          "ku": "Gazên bi girseyên molî yên mezintir zûtir belav dibin."
        },
        {
          "tr": "Aynı sıcaklıktaki CO2 moleküllerinin ortalama kinetik enerjisi H2 moleküllerininkinden büyüktür.",
          "en": "At the same temperature, the average kinetic energy of CO2 molecules is greater than that of H2 molecules.",
          "de": "Bei gleicher Temperatur ist die mittlere kinetische Energie von CO2-Molekülen größer als die von H2-Molekülen.",
          "fr": "À la même température, l'énergie cinétique moyenne des molécules de CO2 est supérieure à celle des molécules de H2.",
          "ru": "При одинаковой температуре средняя кинетическая энергия молекул CO2 больше, чем у молекул H2.",
          "ar": "عند درجة الحرارة نفسها، يكون متوسط الطاقة الحركية لجزيئات CO2 أكبر من متوسط الطاقة الحركية لجزيئات H2.",
          "zh": "相同温度下，CO2分子的平均动能大于H2分子的平均动能。",
          "ku": "Di heman germahiyê de, enerjiya kînetîk a navîn a molekulên CO2 ji ya molekulên H2 mezintir e."
        },
        {
          "tr": "Joule-Thomson genleşmesinde gaz hızla ısınır.",
          "en": "In Joule-Thomson expansion, the gas heats up rapidly.",
          "de": "Bei der Joule-Thomson-Expansion erwärmt sich das Gas schnell.",
          "fr": "Lors de la détente Joule-Thomson, le gaz s'échauffe rapidement.",
          "ru": "При расширении Джоуля-Томсона газ быстро нагревается.",
          "ar": "في تمدد جول طومسون، يسخن الغاز بسرعة.",
          "zh": "在焦耳-汤姆逊膨胀中，气体迅速升温。",
          "ku": "Di berfirehbûna Joule-Thomson de, gaz bi lez germ dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Kapta sıvı su bulunduğu sürece sabit sıcaklıkta kabın hacmi değiştirilse de suyun buhar basıncı DEĞİŞMEZ.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"As long as liquid water remains in the container, the vapor pressure of water DOES NOT change when the volume is changed at constant temperature.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Solange flüssiges Wasser im Behälter vorhanden ist, ändert sich der Dampfdruck des Wassers bei konstanter Temperatur NICHT, auch wenn das Volumen verändert wird.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Tant qu'il reste de l'eau liquide dans le récipient, la pression de vapeur de l'eau NE change PAS lorsque le volume varie à température constante.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Пока в сосуде остаётся жидкая вода, давление её пара при постоянной температуре НЕ меняется при изменении объёма.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"ما دام الماء السائل موجودًا في الوعاء، فإن ضغط بخار الماء لا يتغير عند تغيير الحجم مع ثبات درجة الحرارة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“只要容器中仍有液态水，在温度不变时改变容器体积，水的蒸气压不会改变。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Heta ku di firaxê de ava şil hebe, di germahiya sabît de qebare were guhertin jî zexta buhara avê NAGUHERE.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Gazlar: Kinetik Teori ve Gerçek Gazlar sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Gases: Kinetic Theory & Real Gases, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Kinetische Gastheorie: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Théorie Cinétique des Gaz, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Кинетическая теория газов», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"النظرية الحركية للغازات\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“气体动理论”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Teoriya Kînetîk a Gazan\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Gerçek gazların hepsinde Z değeri daima 1'e eşittir.",
          "en": "In all real gases, the Z value is always equal to 1.",
          "de": "In allen realen Gasen ist der Z-Wert immer gleich 1.",
          "fr": "Dans tous les gaz réels, la valeur Z est toujours égale à 1.",
          "ru": "Во всех реальных газах значение Z всегда равно 1.",
          "ar": "في جميع الغازات الحقيقية، تكون قيمة Z دائمًا تساوي 1.",
          "zh": "在所有实际气体中，Z 值始终等于 1。",
          "ku": "Di hemî gazên rastîn de, nirxa Z her gav bi 1 re ye."
        },
        {
          "tr": "Soğutucu akışkanlar: Kritik sıcaklığı yüksek, kaynama noktası düşük, zehirsiz ve çevre dostu olmalıdır.",
          "en": "Refrigerants: Must have a high critical temperature, low boiling point, non-toxic and environmentally friendly.",
          "de": "Kältemittel: Muss eine hohe kritische Temperatur, einen niedrigen Siedepunkt, ungiftig und umweltfreundlich sein.",
          "fr": "Réfrigérants : doivent avoir une température critique élevée, un point d’ébullition bas, non toxiques et respectueux de l’environnement.",
          "ru": "Хладагенты: Должны иметь высокую критическую температуру, низкую температуру кипения, нетоксичные и экологически чистые.",
          "ar": "المبردات: يجب أن تتمتع بدرجة حرارة حرجة عالية ونقطة غليان منخفضة وغير سامة وصديقة للبيئة.",
          "zh": "制冷剂：必须具有高临界温度、低沸点、无毒且环保。",
          "ku": "Refrigerants: Pêdivî ye ku germahiyek krîtîk a bilind, xala kelandinê kêm, ne-jehrîn û hawîrdorparêz be."
        },
        {
          "tr": "Bir gazın mutlak sıcaklığı 4 katına çıkarılırsa difüzyon hızı da 4 katına çıkar.",
          "en": "If the absolute temperature of a gas is quadrupled, its diffusion rate also quadruples.",
          "de": "Wird die absolute Temperatur eines Gases vervierfacht, vervierfacht sich auch seine Diffusionsgeschwindigkeit.",
          "fr": "Si la température absolue d'un gaz est multipliée par 4, sa vitesse de diffusion est aussi multipliée par 4.",
          "ru": "Если абсолютную температуру газа увеличить в 4 раза, скорость его диффузии тоже увеличится в 4 раза.",
          "ar": "إذا زادت درجة الحرارة المطلقة لغاز 4 مرات، يزداد معدل انتشاره أيضًا 4 مرات.",
          "zh": "若气体的绝对温度增大到原来的4倍，其扩散速率也增大到原来的4倍。",
          "ku": "Ger germahiya mutleq a gazekê 4 qat bibe, leza belavbûna wê jî 4 qat dibe."
        },
        {
          "tr": "Yüksek basınç ve düşük sıcaklıkta gazlar ideale en yakındır.",
          "en": "Gases at high pressure and low temperature are closest to ideal.",
          "de": "Gase mit hohem Druck und niedriger Temperatur kommen dem Ideal am nächsten.",
          "fr": "Les gaz à haute pression et basse température sont les plus proches de l’idéal.",
          "ru": "Наиболее близки к идеальным газы при высоком давлении и низкой температуре.",
          "ar": "الغازات ذات الضغط العالي ودرجة الحرارة المنخفضة هي الأقرب إلى المثالية.",
          "zh": "高压和低温下的气体最接近理想状态。",
          "ku": "Gazên di tansiyona bilind û germahiya nizm de herî nêzîk îdeal in."
        },
        {
          "tr": "Kritik sıcaklığın üzerindeki akışkanlar sadece basınçla kolayca sıvılaşır.",
          "en": "Fluids above the critical temperature liquefy easily with pressure alone.",
          "de": "Flüssigkeiten oberhalb der kritischen Temperatur verflüssigen sich allein durch Druck leicht.",
          "fr": "Les fluides au-dessus de la température critique se liquéfient facilement avec la seule pression.",
          "ru": "Жидкости, температура которых превышает критическую, легко сжижаются только под действием давления.",
          "ar": "تسيل السوائل فوق درجة الحرارة الحرجة بسهولة بالضغط وحده.",
          "zh": "仅用压力，高于临界温度的流体就很容易液化。",
          "ku": "Şîvên li ser germahiya krîtîk tenê bi zextê bi hêsanî şil dibin."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Soğutucu akışkanlar: Kritik sıcaklığı yüksek, kaynama noktası düşük, zehirsiz ve çevre dostu olmalıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Refrigerants: Must have a high critical temperature, low boiling point, non-toxic and environmentally friendly.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Kältemittel: Muss eine hohe kritische Temperatur, einen niedrigen Siedepunkt, ungiftig und umweltfreundlich sein.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Réfrigérants : doivent avoir une température critique élevée, un point d’ébullition bas, non toxiques et respectueux de l’environnement.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Хладагенты: Должны иметь высокую критическую температуру, низкую температуру кипения, нетоксичные и экологически чистые.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المبردات: يجب أن تتمتع بدرجة حرارة حرجة عالية ونقطة غليان منخفضة وغير سامة وصديقة للبيئة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“制冷剂：必须具有高临界温度、低沸点、无毒且环保。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Refrigerants: Pêdivî ye ku germahiyek krîtîk a bilind, xala kelandinê kêm, ne-jehrîn û hawîrdorparêz be.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin13",
      "stem": {
        "tr": "Aşağıda Gazlar: Kinetik Teori ve Gerçek Gazlar ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Gases: Kinetic Theory & Real Gases, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Kinetische Gastheorie: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Théorie Cinétique des Gaz, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Кинетическая теория газов», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"النظرية الحركية للغازات\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“气体动理论”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Teoriya Kînetîk a Gazan\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Yüksek basınç altında gaz taneciklerinin hacmi tamamen yok olur.",
          "en": "Under high pressure, the volume of gas particles disappears completely.",
          "de": "Unter hohem Druck verschwindet das Volumen der Gaspartikel vollständig.",
          "fr": "Sous haute pression, le volume des particules de gaz disparaît complètement.",
          "ru": "Под высоким давлением объем частиц газа полностью исчезает.",
          "ar": "تحت الضغط العالي، يختفي حجم جزيئات الغاز تمامًا.",
          "zh": "在高压下，气体粒子的体积完全消失。",
          "ku": "Di bin zexta bilind de, qebareya pariyên gazê bi tevahî winda dibe."
        },
        {
          "tr": "Kısmi basınç mol kesrinden bağımsızdır.",
          "en": "The partial pressure is independent of the mole fraction.",
          "de": "Der Partialdruck ist unabhängig vom Stoffmengenanteil.",
          "fr": "La pression partielle est indépendante de la fraction molaire.",
          "ru": "Парциальное давление не зависит от мольной доли.",
          "ar": "الضغط الجزئي مستقل عن جزء الخلد.",
          "zh": "分压与摩尔分数无关。",
          "ku": "Zexta qismî ji beşa molê serbixwe ye."
        },
        {
          "tr": "Aynı sıcaklıkta CH4 (MA=16) gazı, SO2 (MA=64) gazından sqrt(64/16) = 2 kat daha hızlı difüzlenir.",
          "en": "At the same temperature, CH4 (MA=16) gas diffuses sqrt(64/16) = 2 times faster than SO2 (MA=64) gas.",
          "de": "Bei gleicher Temperatur diffundiert CH4-Gas (MA=16) sqrt(64/16) = 2-mal schneller als SO2-Gas (MA=64).",
          "fr": "À la même température, le gaz CH4 (MA=16) diffuse sqrt(64/16) = 2 fois plus vite que le gaz SO2 (MA=64).",
          "ru": "При одинаковой температуре газ CH4 (MA=16) диффундирует в sqrt(64/16) = 2 раза быстрее, чем газ SO2 (MA=64).",
          "ar": "عند درجة الحرارة نفسها، ينتشر غاز CH4 (MA=16) أسرع بـ sqrt(64/16) = 2 مرة من غاز SO2 (MA=64).",
          "zh": "相同温度下，CH4（MA=16）气体的扩散速率是SO2（MA=64）气体的 sqrt(64/16) = 2 倍。",
          "ku": "Di heman germahiyê de gaza CH4 (MA=16) sqrt(64/16) = 2 qat ji gaza SO2 (MA=64) zûtir belav dibe."
        },
        {
          "tr": "İdeal gazların molekülleri arasında güçlü elektrostatik çekim vardır.",
          "en": "There is a strong electrostatic attraction between the molecules of ideal gases.",
          "de": "Zwischen den Molekülen idealer Gase besteht eine starke elektrostatische Anziehung.",
          "fr": "Il existe une forte attraction électrostatique entre les molécules des gaz parfaits.",
          "ru": "Между молекулами идеальных газов существует сильное электростатическое притяжение.",
          "ar": "هناك تجاذب إلكتروستاتيكي قوي بين جزيئات الغازات المثالية.",
          "zh": "理想气体分子之间存在很强的静电引力。",
          "ku": "Di navbera molekulên gazên îdeal de kêşeyeke elektrostatîk a xurt heye."
        },
        {
          "tr": "Buhar ve gaz kavramları bilimsel olarak birebir aynıdır.",
          "en": "The concepts of steam and gas are scientifically exactly the same.",
          "de": "Die Konzepte von Dampf und Gas sind wissenschaftlich genau gleich.",
          "fr": "Les concepts de vapeur et de gaz sont scientifiquement exactement les mêmes.",
          "ru": "Понятия пара и газа с научной точки зрения совершенно одинаковы.",
          "ar": "إن مفهومي البخار والغاز متطابقان تمامًا من الناحية العلمية.",
          "zh": "蒸汽和气体的概念在科学上是完全相同的。",
          "ku": "Têgehên buhar û gazê bi zanistî tam yek in."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Aynı sıcaklıkta CH4 (MA=16) gazı, SO2 (MA=64) gazından sqrt(64/16) = 2 kat daha hızlı difüzlenir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"At the same temperature, CH4 (MA=16) gas diffuses sqrt(64/16) = 2 times faster than SO2 (MA=64) gas.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei gleicher Temperatur diffundiert CH4-Gas (MA=16) sqrt(64/16) = 2-mal schneller als SO2-Gas (MA=64).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"À la même température, le gaz CH4 (MA=16) diffuse sqrt(64/16) = 2 fois plus vite que le gaz SO2 (MA=64).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При одинаковой температуре газ CH4 (MA=16) диффундирует в sqrt(64/16) = 2 раза быстрее, чем газ SO2 (MA=64).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عند درجة الحرارة نفسها، ينتشر غاز CH4 (MA=16) أسرع بـ sqrt(64/16) = 2 مرة من غاز SO2 (MA=64).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“相同温度下，CH4（MA=16）气体的扩散速率是SO2（MA=64）气体的 sqrt(64/16) = 2 倍。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di heman germahiyê de gaza CH4 (MA=16) sqrt(64/16) = 2 qat ji gaza SO2 (MA=64) zûtir belav dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin14",
      "stem": {
        "tr": "Gazlar: Kinetik Teori ve Gerçek Gazlar konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Gases: Kinetic Theory & Real Gases, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Kinetische Gastheorie: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Théorie Cinétique des Gaz, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Кинетическая теория газов», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"النظرية الحركية للغازات\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“气体动理论”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Teoriya Kînetîk a Gazan\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Mol kütlesi büyük olan gazlar daha hızlı difüzlenir.",
          "en": "Gases with larger molar masses diffuse faster.",
          "de": "Gase mit größeren Molmassen diffundieren schneller.",
          "fr": "Les gaz ayant des masses molaires plus grandes diffusent plus rapidement.",
          "ru": "Газы с большей молярной массой диффундируют быстрее.",
          "ar": "الغازات ذات الكتل المولية الأكبر تنتشر بشكل أسرع.",
          "zh": "摩尔质量越大的气体扩散得越快。",
          "ku": "Gazên bi girseyên molî yên mezintir zûtir belav dibin."
        },
        {
          "tr": "Aynı sıcaklıktaki CO2 moleküllerinin ortalama kinetik enerjisi H2 moleküllerininkinden büyüktür.",
          "en": "At the same temperature, the average kinetic energy of CO2 molecules is greater than that of H2 molecules.",
          "de": "Bei gleicher Temperatur ist die mittlere kinetische Energie von CO2-Molekülen größer als die von H2-Molekülen.",
          "fr": "À la même température, l'énergie cinétique moyenne des molécules de CO2 est supérieure à celle des molécules de H2.",
          "ru": "При одинаковой температуре средняя кинетическая энергия молекул CO2 больше, чем у молекул H2.",
          "ar": "عند درجة الحرارة نفسها، يكون متوسط الطاقة الحركية لجزيئات CO2 أكبر من متوسط الطاقة الحركية لجزيئات H2.",
          "zh": "相同温度下，CO2分子的平均动能大于H2分子的平均动能。",
          "ku": "Di heman germahiyê de, enerjiya kînetîk a navîn a molekulên CO2 ji ya molekulên H2 mezintir e."
        },
        {
          "tr": "Joule-Thomson genleşmesinde gaz hızla ısınır.",
          "en": "In Joule-Thomson expansion, the gas heats up rapidly.",
          "de": "Bei der Joule-Thomson-Expansion erwärmt sich das Gas schnell.",
          "fr": "Lors de la détente Joule-Thomson, le gaz s'échauffe rapidement.",
          "ru": "При расширении Джоуля-Томсона газ быстро нагревается.",
          "ar": "في تمدد جول طومسون، يسخن الغاز بسرعة.",
          "zh": "在焦耳-汤姆逊膨胀中，气体迅速升温。",
          "ku": "Di berfirehbûna Joule-Thomson de, gaz bi lez germ dibe."
        },
        {
          "tr": "Efüzyon, gaz moleküllerinin küçük bir delikten vakumlu boşluğa kaçması olayıdır.",
          "en": "Effusion is the phenomenon of gas molecules escaping into a vacuum space through a small hole.",
          "de": "Unter Effusion versteht man das Phänomen, dass Gasmoleküle durch ein kleines Loch in einen Vakuumraum entweichen.",
          "fr": "L'effusion est le phénomène par lequel des molécules de gaz s'échappent vers le vide par un petit orifice.",
          "ru": "Эффузия – это явление, когда молекулы газа выходят в вакуумное пространство через небольшое отверстие.",
          "ar": "الانصباب هو ظاهرة هروب جزيئات الغاز إلى فراغ من خلال ثقب صغير.",
          "zh": "泻流是气体分子通过小孔逸入真空空间的现象。",
          "ku": "Efûzyon diyardeya reva molekulên gazê ji qulikeke biçûk ber bi valahiyê (vakûmê) ye."
        },
        {
          "tr": "Su üstünde toplanan gazın basıncından suyun buhar basıncı çıkarılmaz.",
          "en": "The vapor pressure of the water cannot be subtracted from the pressure of the gas collected above the water.",
          "de": "Der Dampfdruck des Wassers kann nicht vom Druck des über dem Wasser gesammelten Gases abgezogen werden.",
          "fr": "La pression de vapeur de l’eau ne peut pas être soustraite de la pression du gaz collecté au-dessus de l’eau.",
          "ru": "Давление пара воды нельзя вычесть из давления газа, собранного над водой.",
          "ar": "لا يمكن طرح ضغط بخار الماء من ضغط الغاز المتجمع فوق الماء.",
          "zh": "水的蒸气压不能从水面上方收集的气体的压力中减去。",
          "ku": "Zexta buhara avê ji tansiyona gaza ku li jora avê hatiye berhevkirin nayê kêmkirin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Efüzyon, gaz moleküllerinin küçük bir delikten vakumlu boşluğa kaçması olayıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Effusion is the phenomenon of gas molecules escaping into a vacuum space through a small hole.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Unter Effusion versteht man das Phänomen, dass Gasmoleküle durch ein kleines Loch in einen Vakuumraum entweichen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'effusion est le phénomène par lequel des molécules de gaz s'échappent vers le vide par un petit orifice.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Эффузия – это явление, когда молекулы газа выходят в вакуумное пространство через небольшое отверстие.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الانصباب هو ظاهرة هروب جزيئات الغاز إلى فراغ من خلال ثقب صغير.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“泻流是气体分子通过小孔逸入真空空间的现象。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Efûzyon diyardeya reva molekulên gazê ji qulikeke biçûk ber bi valahiyê (vakûmê) ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Gazlar: Kinetik Teori ve Gerçek Gazlar ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Gases: Kinetic Theory & Real Gases, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Kinetische Gastheorie: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Théorie Cinétique des Gaz, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Кинетическая теория газов», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"النظرية الحركية للغازات\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“气体动理论”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Teoriya Kînetîk a Gazan\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Bir gazın mutlak sıcaklığı 4 katına çıkarılırsa difüzyon hızı da 4 katına çıkar.",
          "en": "If the absolute temperature of a gas is quadrupled, its diffusion rate also quadruples.",
          "de": "Wird die absolute Temperatur eines Gases vervierfacht, vervierfacht sich auch seine Diffusionsgeschwindigkeit.",
          "fr": "Si la température absolue d'un gaz est multipliée par 4, sa vitesse de diffusion est aussi multipliée par 4.",
          "ru": "Если абсолютную температуру газа увеличить в 4 раза, скорость его диффузии тоже увеличится в 4 раза.",
          "ar": "إذا زادت درجة الحرارة المطلقة لغاز 4 مرات، يزداد معدل انتشاره أيضًا 4 مرات.",
          "zh": "若气体的绝对温度增大到原来的4倍，其扩散速率也增大到原来的4倍。",
          "ku": "Ger germahiya mutleq a gazekê 4 qat bibe, leza belavbûna wê jî 4 qat dibe."
        },
        {
          "tr": "Yüksek basınç ve düşük sıcaklıkta gazlar ideale en yakındır.",
          "en": "Gases at high pressure and low temperature are closest to ideal.",
          "de": "Gase mit hohem Druck und niedriger Temperatur kommen dem Ideal am nächsten.",
          "fr": "Les gaz à haute pression et basse température sont les plus proches de l’idéal.",
          "ru": "Наиболее близки к идеальным газы при высоком давлении и низкой температуре.",
          "ar": "الغازات ذات الضغط العالي ودرجة الحرارة المنخفضة هي الأقرب إلى المثالية.",
          "zh": "高压和低温下的气体最接近理想状态。",
          "ku": "Gazên di tansiyona bilind û germahiya nizm de herî nêzîk îdeal in."
        },
        {
          "tr": "Kritik sıcaklığın üzerindeki akışkanlar sadece basınçla kolayca sıvılaşır.",
          "en": "Fluids above the critical temperature liquefy easily with pressure alone.",
          "de": "Flüssigkeiten oberhalb der kritischen Temperatur verflüssigen sich allein durch Druck leicht.",
          "fr": "Les fluides au-dessus de la température critique se liquéfient facilement avec la seule pression.",
          "ru": "Жидкости, температура которых превышает критическую, легко сжижаются только под действием давления.",
          "ar": "تسيل السوائل فوق درجة الحرارة الحرجة بسهولة بالضغط وحده.",
          "zh": "仅用压力，高于临界温度的流体就很容易液化。",
          "ku": "Şîvên li ser germahiya krîtîk tenê bi zextê bi hêsanî şil dibin."
        },
        {
          "tr": "Piston yukarı çekilip hacim artırıldığında suyun buhar basıncı yarıya iner.",
          "en": "When the piston is pulled up and the volume is increased, the vapor pressure of the water is halved.",
          "de": "Wenn der Kolben nach oben gezogen wird und das Volumen vergrößert wird, halbiert sich der Dampfdruck des Wassers.",
          "fr": "Lorsque le piston est tiré vers le haut et que le volume augmente, la pression de vapeur de l'eau est réduite de moitié.",
          "ru": "Когда поршень поднимается вверх и объем увеличивается, давление пара воды уменьшается вдвое.",
          "ar": "عندما يتم سحب المكبس للأعلى وزيادة الحجم، ينخفض ​​ضغط بخار الماء إلى النصف.",
          "zh": "当活塞向上拉并且体积增大时，水的蒸气压减半。",
          "ku": "Dema ku piston bi jor ve tê kişandin û hêjmar zêde dibe, zexta buharê ya avê nîvî dibe."
        },
        {
          "tr": "Sıkıştırılabilirlik faktörü Z = PV / nRT'dir; ideal gazda Z = 1'dir.",
          "en": "The compressibility factor is Z = PV / nRT; In an ideal gas, Z = 1.",
          "de": "Der Kompressibilitätsfaktor beträgt Z = PV / nRT; In einem idealen Gas ist Z = 1.",
          "fr": "Le facteur de compressibilité est Z = PV/nRT ; Dans un gaz parfait, Z = 1.",
          "ru": "Коэффициент сжимаемости Z = PV/nRT; В идеальном газе Z = 1.",
          "ar": "عامل الانضغاط هو Z = PV / nRT؛ في الغاز المثالي Z = 1",
          "zh": "压缩系数为Z=PV/nRT；在理想气体中，Z = 1。",
          "ku": "Faktora tevlihevbûnê Z = PV / nRT ye; Di gazek îdeal de, Z = 1."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Sıkıştırılabilirlik faktörü Z = PV / nRT'dir; ideal gazda Z = 1'dir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The compressibility factor is Z = PV / nRT; In an ideal gas, Z = 1.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der Kompressibilitätsfaktor beträgt Z = PV / nRT; In einem idealen Gas ist Z = 1.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le facteur de compressibilité est Z = PV/nRT ; Dans un gaz parfait, Z = 1.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Коэффициент сжимаемости Z = PV/nRT; В идеальном газе Z = 1.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عامل الانضغاط هو Z = PV / nRT؛ في الغاز المثالي Z = 1\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“压缩系数为Z=PV/nRT；在理想气体中，Z = 1。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Faktora tevlihevbûnê Z = PV / nRT ye; Di gazek îdeal de, Z = 1.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Gazlar: Kinetik Teori ve Gerçek Gazlar konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Gases: Kinetic Theory & Real Gases, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Kinetische Gastheorie die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Théorie Cinétique des Gaz, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Кинетическая теория газов», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"النظرية الحركية للغازات\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“气体动理论”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Teoriya Kînetîk a Gazan\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Gaz taneciklerinin öz hacmi yüksek basınç altında ihmal edilemez büyüklüğe ulaşır.",
          "en": "Under high pressure, the own volume of gas particles becomes non-negligible.",
          "de": "Unter hohem Druck wird das Eigenvolumen der Gasteilchen nicht mehr vernachlässigbar.",
          "fr": "Sous haute pression, le volume propre des particules de gaz n'est plus négligeable.",
          "ru": "При высоком давлении собственным объёмом частиц газа уже нельзя пренебречь.",
          "ar": "تحت الضغط المرتفع يصبح الحجم الذاتي لجسيمات الغاز غير قابل للإهمال.",
          "zh": "在高压下，气体粒子自身的体积变得不可忽略。",
          "ku": "Di bin zexta bilind de qebareya xwe ya perçeyên gazê êdî nayê paşguhkirin."
        },
        {
          "tr": "Kısmi basınç mol kesrinden bağımsızdır.",
          "en": "The partial pressure is independent of the mole fraction.",
          "de": "Der Partialdruck ist unabhängig vom Stoffmengenanteil.",
          "fr": "La pression partielle est indépendante de la fraction molaire.",
          "ru": "Парциальное давление не зависит от мольной доли.",
          "ar": "الضغط الجزئي مستقل عن جزء الخلد.",
          "zh": "分压与摩尔分数无关。",
          "ku": "Zexta qismî ji beşa molê serbixwe ye."
        },
        {
          "tr": "İdeal gazların molekülleri arasında güçlü elektrostatik çekim vardır.",
          "en": "There is a strong electrostatic attraction between the molecules of ideal gases.",
          "de": "Zwischen den Molekülen idealer Gase besteht eine starke elektrostatische Anziehung.",
          "fr": "Il existe une forte attraction électrostatique entre les molécules des gaz parfaits.",
          "ru": "Между молекулами идеальных газов существует сильное электростатическое притяжение.",
          "ar": "هناك تجاذب إلكتروستاتيكي قوي بين جزيئات الغازات المثالية.",
          "zh": "理想气体分子之间存在很强的静电引力。",
          "ku": "Di navbera molekulên gazên îdeal de kêşeyeke elektrostatîk a xurt heye."
        },
        {
          "tr": "Buhar ve gaz kavramları bilimsel olarak birebir aynıdır.",
          "en": "The concepts of steam and gas are scientifically exactly the same.",
          "de": "Die Konzepte von Dampf und Gas sind wissenschaftlich genau gleich.",
          "fr": "Les concepts de vapeur et de gaz sont scientifiquement exactement les mêmes.",
          "ru": "Понятия пара и газа с научной точки зрения совершенно одинаковы.",
          "ar": "إن مفهومي البخار والغاز متطابقان تمامًا من الناحية العلمية.",
          "zh": "蒸汽和气体的概念在科学上是完全相同的。",
          "ku": "Têgehên buhar û gazê bi zanistî tam yek in."
        },
        {
          "tr": "Soğutucu akışkanın kaynama noktası oda sıcaklığından çok yüksek olmalıdır.",
          "en": "The boiling point of the refrigerant must be much higher than room temperature.",
          "de": "Der Siedepunkt des Kältemittels muss deutlich über der Raumtemperatur liegen.",
          "fr": "Le point d'ébullition du réfrigérant doit être bien supérieur à la température ambiante.",
          "ru": "Температура кипения хладагента должна быть намного выше комнатной температуры.",
          "ar": "يجب أن تكون نقطة غليان سائل التبريد أعلى بكثير من درجة حرارة الغرفة.",
          "zh": "制冷剂的沸点必须远高于室温。",
          "ku": "Divê xala kelandinê ya sarincokê ji germahiya odeyê pir bilindtir be."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Gaz taneciklerinin öz hacmi yüksek basınç altında ihmal edilemez büyüklüğe ulaşır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Under high pressure, the own volume of gas particles becomes non-negligible.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Unter hohem Druck wird das Eigenvolumen der Gasteilchen nicht mehr vernachlässigbar.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Sous haute pression, le volume propre des particules de gaz n'est plus négligeable.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При высоком давлении собственным объёмом частиц газа уже нельзя пренебречь.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تحت الضغط المرتفع يصبح الحجم الذاتي لجسيمات الغاز غير قابل للإهمال.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在高压下，气体粒子自身的体积变得不可忽略。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di bin zexta bilind de qebareya xwe ya perçeyên gazê êdî nayê paşguhkirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit13;
