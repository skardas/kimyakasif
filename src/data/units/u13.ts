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
        "tr": "Sıcaklık 4 katına çıkarsa difüzyon hızı 4 katına çıkar.",
        "en": "If the temperature increases by 4 times, the diffusion rate increases by 4 times.",
        "de": "Bei einer Temperaturerhöhung um das Vierfache erhöht sich die Diffusionsgeschwindigkeit um das Vierfache.",
        "fr": "Si la température augmente de 4 fois, le taux de diffusion augmente de 4 fois.",
        "ru": "Если температура увеличится в 4 раза, скорость диффузии увеличится в 4 раза.",
        "ar": "إذا زادت درجة الحرارة بمقدار 4 مرات، يزيد معدل الانتشار بمقدار 4 مرات.",
        "zh": "如果温度增加4倍，扩散速率增加4倍。",
        "ku": "Ger germahî 4 qat zêde bibe, rêjeya belavbûnê 4 qat zêde dibe."
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
        "tr": "Dalton Kısmi Basınçlar Yasası: Karışımdaki bir gazın kısmi basıncı Pi = Xi * Ptoplam dır (Xi = ni / ntoplam).",
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
        "ru": "Средняя кинетическая энергия газов (Ек = 3/2 кТл) зависит ТОЛЬКО от абсолютной температуры; не зависит от типа газа.",
        "ar": "متوسط ​​الطاقة الحركية للغازات (Ek = 3/2 كيلو طن) يعتمد فقط على درجة الحرارة المطلقة؛ لا يعتمد على نوع الغاز .",
        "zh": "气体的平均动能 (Ek = 3/2 kT) 仅取决于绝对温度；与气体类型无关。",
        "ku": "Enerjiya kînetîk a navîn a gazan (Ek = 3/2 kT) TENÊ bi germahiya mutleq ve girêdayî ye; ji cureyê gazê serbixwe ye."
      },
      "trap": {
        "tr": "Aynı sıcaklıktaki CO2 gazının kinetik enerjisi H2 gazınınkinden büyüktür.",
        "en": "The kinetic energy of CO2 gas at the same temperature is greater than that of H2 gas.",
        "de": "Die kinetische Energie von CO2-Gas ist bei gleicher Temperatur größer als die von H2-Gas.",
        "fr": "L’énergie cinétique du gaz CO2 à la même température est supérieure à celle du gaz H2.",
        "ru": "Кинетическая энергия газа CO2 при той же температуре больше, чем у газа H2.",
        "ar": "الطاقة الحركية لغاز ثاني أكسيد الكربون عند نفس درجة الحرارة أكبر من طاقة غاز الهيدروجين.",
        "zh": "相同温度下CO2气体的动能大于H2气体的动能。",
        "ku": "Enerjiya kinetîk a gaza CO2 di heman germahiyê de ji ya gaza H2 mezintir e."
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
        "en": "High temperature, low pressure and small molar mass (weak gravity) bring gases closer to ideality.",
        "de": "Hohe Temperaturen, niedriger Druck und kleine Molmassen (schwache Schwerkraft) bringen Gase näher an den Idealzustand.",
        "fr": "Une température élevée, une basse pression et une petite masse molaire (faible gravité) rapprochent les gaz de l'idéalité.",
        "ru": "Высокая температура, низкое давление и малая молярная масса (слабая гравитация) приближают газы к идеальности.",
        "ar": "درجة الحرارة المرتفعة والضغط المنخفض والكتلة المولية الصغيرة (الجاذبية الضعيفة) تجعل الغازات أقرب إلى المثالية.",
        "zh": "高温、低压和小摩尔质量（弱重力）使气体更接近理想状态。",
        "ku": "Germahiya bilind, tansiyona nizm û girseya molarê ya piçûk (gravîta qels) gazan nêzî îdealîteyê dike."
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
        "en": "There is a force of attraction between real gas molecules and their specific volumes are not zero.",
        "de": "Zwischen realen Gasmolekülen besteht eine Anziehungskraft und ihr spezifisches Volumen ist nicht Null.",
        "fr": "Il existe une force d’attraction entre les molécules de gaz réelles et leurs volumes spécifiques ne sont pas nuls.",
        "ru": "Между реальными молекулами газа существует сила притяжения, и их удельные объемы не равны нулю.",
        "ar": "توجد قوة تجاذب بين جزيئات الغاز الحقيقية وحجمها النوعي ليس صفرًا.",
        "zh": "真实气体分子之间存在吸引力，其比体积不为零。",
        "ku": "Di navbera molekulên gazê yên resen de hêzek kêşanê heye û cildên wan ên taybetî ne sifir in."
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
        "tr": "Buhar, kritik sıcaklık ile kaynama noktası arasındaki sıkıştırılarak sıvılaşabilen akışkandır.",
        "en": "Vapor is a fluid that can be liquefied by compression between the critical temperature and the boiling point.",
        "de": "Dampf ist eine Flüssigkeit, die durch Kompression zwischen der kritischen Temperatur und dem Siedepunkt verflüssigt werden kann.",
        "fr": "La vapeur est un fluide qui peut être liquéfié par compression entre la température critique et le point d'ébullition.",
        "ru": "Пар — это жидкость, которую можно сжижать путем сжатия между критической температурой и температурой кипения.",
        "ar": "البخار هو سائل يمكن تسييله عن طريق الضغط بين درجة الحرارة الحرجة ونقطة الغليان.",
        "zh": "蒸气是在临界温度和沸点之间通过压缩可以液化的流体。",
        "ku": "Vapor şilekek e ku dikare bi pêçandina di navbera germahiya krîtîk û xala kelandinê de şil bibe."
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
        "tr": "Suyun buhar basıncı kabın hacmi değiştirildiğinde sıcaklık sabit kaldığı sürece DEĞİŞMEZ.",
        "en": "The vapor pressure of water DOES NOT change when the volume of the container is changed as long as the temperature remains constant.",
        "de": "Der Dampfdruck von Wasser ändert sich NICHT, wenn das Volumen des Behälters verändert wird, solange die Temperatur konstant bleibt.",
        "fr": "La pression de vapeur de l’eau NE change PAS lorsque le volume du récipient change tant que la température reste constante.",
        "ru": "Давление пара воды НЕ меняется при изменении объема сосуда, пока температура остается постоянной.",
        "ar": "لا يتغير ضغط بخار الماء بتغير حجم الوعاء طالما ظلت درجة الحرارة ثابتة.",
        "zh": "只要温度保持恒定，当容器体积改变时，水的蒸气压就不会改变。",
        "ku": "Dema ku qebareya konteynerê tê guherandin heta ku germahî sabît bimîne, tansiyona buharê ya avê NAguhere."
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
        "tr": "CH4 (MA=16) gazı SO2 (MA=64) gazından sqrt(64/16) = 2 kat daha hızlı difüzlenir.",
        "en": "CH4 (MA=16) gas diffuses sqrt(64/16) = 2 times faster than SO2 (MA=64) gas.",
        "de": "CH4-Gas (MA=16) diffundiert sqrt(64/16) = 2-mal schneller als SO2-Gas (MA=64).",
        "fr": "Le gaz CH4 (MA=16) diffuse sqrt(64/16) = 2 fois plus rapide que le gaz SO2 (MA=64).",
        "ru": "Газ CH4 (MA=16) распространяется sqrt(64/16) = в 2 раза быстрее, чем газ SO2 (MA=64).",
        "ar": "ينتشر غاز CH4 (MA=16) sqrt(64/16) = مرتين أسرع من غاز SO2 (MA=64).",
        "zh": "CH4 (MA=16) 气体的扩散 sqrt(64/16) = 比 SO2 (MA=64) 气体快 2 倍。",
        "ku": "Gaza CH4 (MA=16) sqrt(64/16) = 2 qat ji gaza SO2 (MA=64) zûtir belav dike."
      },
      "trap": {
        "tr": "CH4 gazı SO2 den 4 kat daha hızlı hareket eder.",
        "en": "CH4 gas moves 4 times faster than SO2.",
        "de": "CH4-Gas bewegt sich viermal schneller als SO2.",
        "fr": "Le gaz CH4 se déplace 4 fois plus vite que le SO2.",
        "ru": "Газ CH4 движется в 4 раза быстрее, чем SO2.",
        "ar": "يتحرك غاز CH4 أسرع بأربع مرات من ثاني أكسيد الكبريت.",
        "zh": "CH4 气体的移动速度比 SO2 快 4 倍。",
        "ku": "Gaza CH4 ji SO2 4 caran zûtir dimeşe."
      }
    },
    {
      "id": "u13-f14",
      "fact": {
        "tr": "Effüzyon, gaz moleküllerinin küçük bir delikten vakumlu boşluğa kaçması olayıdır.",
        "en": "Effusion is the phenomenon of gas molecules escaping into a vacuum space through a small hole.",
        "de": "Unter Effusion versteht man das Phänomen, dass Gasmoleküle durch ein kleines Loch in einen Vakuumraum entweichen.",
        "fr": "L'épanchement est le phénomène par lequel des molécules de gaz s'échappent dans un espace vide par un petit trou.",
        "ru": "Эффузия – это явление, когда молекулы газа выходят в вакуумное пространство через небольшое отверстие.",
        "ar": "الانصباب هو ظاهرة هروب جزيئات الغاز إلى فراغ من خلال ثقب صغير.",
        "zh": "逸出是气体分子通过小孔逃逸到真空空间的现象。",
        "ku": "Effuzyon diyardeya molekulên gazê ye ku di qulikek piçûk de diherikin cîhek valahiyê."
      },
      "trap": {
        "tr": "Effüzyon iki gazın birbiri içinde karışmasıdır.",
        "en": "Effusion is the mixing of two gases with each other.",
        "de": "Unter Effusion versteht man die Vermischung zweier Gase miteinander.",
        "fr": "L'épanchement est le mélange de deux gaz entre eux.",
        "ru": "Эффузия – это смешение двух газов друг с другом.",
        "ar": "الانصباب هو اختلاط غازين مع بعضهما البعض.",
        "zh": "逸出是两种气体相互混合。",
        "ku": "Efusion tevlîhevkirina du gazan bi hev re ye."
      }
    },
    {
      "id": "u13-f15",
      "fact": {
        "tr": "Sıkıştırılabilirlik faktörü Z = PV / nRT dir; ideal gazda Z = 1 dir.",
        "en": "The compressibility factor is Z = PV / nRT; In an ideal gas, Z = 1.",
        "de": "Der Kompressibilitätsfaktor beträgt Z = PV / nRT; In einem idealen Gas ist Z = 1.",
        "fr": "Le facteur de compressibilité est Z = PV/nRT ; Dans un gaz parfait, Z = 1.",
        "ru": "Коэффициент сжимаемости Z = PV/nRT; В идеальном газе Z = 1.",
        "ar": "عامل الانضغاط هو Z = PV / nRT؛ في الغاز المثالي Z = 1",
        "zh": "压缩系数为Z=PV/nRT；在理想气体中，Z = 1。",
        "ku": "Faktora tevlihevbûnê Z = PV / nRT ye; Di gazek îdeal de, Z = 1."
      },
      "trap": {
        "tr": "Gerçek gazların hepsinde Z değeri daima 1 e eşittir.",
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
        "en": "The specific volume of gas particles reaches a non-negligible size under high pressure.",
        "de": "Unter hohem Druck erreicht das spezifische Volumen der Gaspartikel eine nicht vernachlässigbare Größe.",
        "fr": "Le volume spécifique des particules de gaz atteint une taille non négligeable sous haute pression.",
        "ru": "Удельный объем частиц газа достигает немаловажных размеров под высоким давлением.",
        "ar": "يصل الحجم النوعي لجزيئات الغاز إلى حجم غير مهم تحت الضغط العالي.",
        "zh": "气体颗粒的比体积在高压下达到不可忽略的尺寸。",
        "ku": "Hêjmara taybetî ya pariyên gazê di bin tansiyona bilind de digihîje mezinahiyek ne-hesab."
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
        "en": "In an ideal gas, the particle volume is assumed to be zero and there is no gravity; In real gas, there is specific volume and gravitational force.",
        "de": "In einem idealen Gas wird angenommen, dass das Partikelvolumen Null ist und es keine Schwerkraft gibt; In echtem Gas gibt es ein spezifisches Volumen und eine spezifische Gravitationskraft.",
        "fr": "Dans un gaz parfait, le volume des particules est supposé nul et il n’y a pas de gravité ; Dans le gaz réel, il existe un volume spécifique et une force gravitationnelle.",
        "ru": "В идеальном газе объем частицы предполагается равным нулю и гравитация отсутствует; В реальном газе есть удельный объем и гравитационная сила.",
        "ar": "في الغاز المثالي، يفترض أن يكون حجم الجسيم صفرًا ولا توجد جاذبية؛ في الغاز الحقيقي، هناك حجم محدد وقوة جاذبية.",
        "zh": "在理想气体中，假设粒子体积为零并且没有重力；在真实气体中，存在比体积和重力。",
        "ku": "Di gazek îdeal de, qebareya parçikê wekî sifir tê hesibandin û gravîtî tune; Di gaza rastîn de, hêjmarek taybetî û hêza gravîtasyonê heye."
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
        "tr": "Gerçek Gaz",
        "en": "Real Gas",
        "de": "Echtes Gas",
        "fr": "Gaz réel",
        "ru": "Реальный газ",
        "ar": "الغاز الحقيقي",
        "zh": "真实气体",
        "ku": "Gaza Rastî"
      },
      "conceptB": {
        "tr": "İdeal Gaz",
        "en": "Ideal Gas",
        "de": "Ideales Gas",
        "fr": "Gaz parfait",
        "ru": "Идеальный газ",
        "ar": "الغاز المثالي",
        "zh": "理想气体",
        "ku": "Gaza Îdeal"
      },
      "distinction": {
        "tr": "İdeal gazda tanecik hacmi ve çekim kuvveti sıfırdır; gerçek gazlarda moleküller arası çekim basıncı idealden daha düşük yapar.",
        "en": "In an ideal gas, particle volume and gravitational force are zero; In real gases, intermolecular attraction makes the pressure lower than ideal.",
        "de": "In einem idealen Gas sind Partikelvolumen und Gravitationskraft Null; In realen Gasen führt die intermolekulare Anziehung dazu, dass der Druck unter dem Idealwert liegt.",
        "fr": "Dans un gaz parfait, le volume des particules et la force gravitationnelle sont nuls ; Dans les gaz réels, l’attraction intermoléculaire rend la pression inférieure à la pression idéale.",
        "ru": "В идеальном газе объем частицы и сила гравитации равны нулю; В реальных газах межмолекулярное притяжение делает давление ниже идеального.",
        "ar": "في الغاز المثالي، يكون حجم الجسيمات وقوة الجاذبية صفرًا؛ في الغازات الحقيقية، يؤدي التجاذب بين الجزيئات إلى انخفاض الضغط عن المستوى المثالي.",
        "zh": "在理想气体中，粒子体积和重力为零；在实际气体中，分子间吸引力使压力低于理想压力。",
        "ku": "Di gazek îdeal de, qebareya parçik û hêza gravîtasyonê sifir e; Di gazên rastîn de, kişandina navmolekularî zextê ji îdeal kêmtir dike."
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
        "tr": "İdeal gazda Z = 1 dir; gerçek gazlarda Z 1 den sapar ve kritik basınçta sıvı-buhar faz sınırı kaybolur.",
        "en": "In an ideal gas, Z = 1; In real gases, Z deviates from 1 and the liquid-vapor phase boundary disappears at the critical pressure.",
        "de": "In einem idealen Gas ist Z = 1; In realen Gasen weicht Z von 1 ab und die Flüssigkeits-Dampf-Phasengrenze verschwindet beim kritischen Druck.",
        "fr": "Dans un gaz parfait, Z = 1 ; Dans les gaz réels, Z s'écarte de 1 et la limite de phase liquide-vapeur disparaît à la pression critique.",
        "ru": "В идеальном газе Z = 1; В реальных газах Z отклоняется от 1 и граница фаз жидкость-пар исчезает при критическом давлении.",
        "ar": "في الغاز المثالي، Z = 1؛ في الغازات الحقيقية، ينحرف Z عن 1 ويختفي حد طور البخار السائل عند الضغط الحرج.",
        "zh": "在理想气体中，Z = 1；在实际气体中，Z 偏离 1，并且液-汽相界在临界压力下消失。",
        "ku": "Di gazek îdeal de, Z = 1; Di gazên rastîn de, Z ji 1-ê vediqete û sînorê qonaxa şil-buharê di zexta krîtîk de winda dibe."
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
          "tr": "Hafif olan NH3 gazı daha hızlı yayılarak HCl ye yakın halka oluşturur",
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
          "tr": "Moleküller arası çekimi yenmek için öz ısı enerjisi harcanır",
          "en": "Specific heat energy is consumed to overcome intermolecular attraction.",
          "de": "Um die intermolekulare Anziehung zu überwinden, wird spezifische Wärmeenergie verbraucht.",
          "fr": "L'énergie thermique spécifique est consommée pour vaincre l'attraction intermoléculaire.",
          "ru": "Удельная тепловая энергия расходуется на преодоление межмолекулярного притяжения.",
          "ar": "يتم استهلاك طاقة حرارية محددة للتغلب على التجاذب بين الجزيئات.",
          "zh": "消耗比热能来克服分子间吸引力。",
          "ku": "Enerjiya germê ya taybetî tê xerc kirin da ku balkişandina navmolekularî têk bibe."
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
          "tr": "66.7 cm",
          "en": "66.7cm",
          "de": "66,7 cm",
          "fr": "66,7 cm",
          "ru": "66,7 см",
          "ar": "66.7 سم",
          "zh": "66.7厘米",
          "ku": "66,7 cm"
        },
        {
          "tr": "50.0 cm",
          "en": "50.0cm",
          "de": "50,0 cm",
          "fr": "50,0 cm",
          "ru": "50,0 см",
          "ar": "50.0 سم",
          "zh": "50.0厘米",
          "ku": "50.0 cm"
        },
        {
          "tr": "80.0 cm",
          "en": "80.0cm",
          "de": "80,0 cm",
          "fr": "80,0 cm",
          "ru": "80,0 см",
          "ar": "80.0 سم",
          "zh": "80.0厘米",
          "ku": "80.0cm"
        },
        {
          "tr": "33.3 cm",
          "en": "33.3cm",
          "de": "33,3 cm",
          "fr": "33,3 cm",
          "ru": "33,3 см",
          "ar": "33.3 سم",
          "zh": "33.3厘米",
          "ku": "33,3 cm"
        },
        {
          "tr": "25.0 cm",
          "en": "25.0cm",
          "de": "25,0 cm",
          "fr": "25,0 cm",
          "ru": "25,0 см",
          "ar": "25.0 سم",
          "zh": "25.0厘米",
          "ku": "25.0cm"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. CH4 2x yol alırken SO2 x yol alır. 3x = 100 cm -> x = 33.3 cm. CH4 ucundan 2x = 66.7 cm uzakta karşılaşırlar.",
        "en": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. While CH4 travels 2x, SO2 travels x. 3x = 100 cm -> x = 33.3 cm. They meet at a distance of 2x = 66.7 cm from the CH4 tip.",
        "de": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. Während CH4 2x wandert, wandert SO2 x. 3x = 100 cm -> x = 33,3 cm. Sie treffen sich im Abstand von 2x = 66,7 cm von der CH4-Spitze.",
        "fr": "v(CH4)/v(SO2) = carré(64/16) = 2/1. Alors que CH4 voyage 2x, SO2 voyage x. 3x = 100 cm -> x = 33,3 cm. Ils se rejoignent à une distance de 2x = 66,7 cm de la pointe CH4.",
        "ru": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. В то время как CH4 проходит 2x, SO2 проходит x. 3х = 100 см -> х = 33,3 см. Они встречаются на расстоянии 2х = 66,7 см от вершины СН4.",
        "ar": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1. في حين أن CH4 يسافر 2x، فإن SO2 يسافر x. 3س = 100 سم -> س = 33.3 سم. يلتقيان على مسافة 2x = 66.7 سم من طرف CH4.",
        "zh": "v(CH4)/v(SO2) = sqrt(64/16) = 2/1。当 CH4 传播 2 次时，SO2 传播 x 次。 3x = 100 厘米 -> x = 33.3 厘米。它们在距离 CH4 尖端 2x = 66.7 cm 处相遇。",
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
          "de": "Der Druck verdoppelt sich, der Dampfdruck des Wassers ändert sich nicht",
          "fr": "La pression double, la pression de vapeur de l'eau ne change pas",
          "ru": "Давление увеличивается в два раза, давление пара воды не меняется.",
          "ar": "يتضاعف الضغط، ولا يتغير ضغط بخار الماء",
          "zh": "压力加倍，水的蒸气压不变",
          "ku": "Zexta wî du qat dibe, tansiyona buharê ya avê naguhere"
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
          "de": "Der Druck ändert sich nicht, der Wasserdampfdruck steigt",
          "fr": "La pression ne change pas, la pression de la vapeur d'eau augmente",
          "ru": "Давление не меняется, давление водяного пара увеличивается",
          "ar": "لا يتغير الضغط، ويزداد ضغط بخار الماء",
          "zh": "He压力不变，水蒸气压增加",
          "ku": "Zexta wî naguhere, tansiyona buhara avê zêde dibe"
        },
        {
          "tr": "He basıncı 4 katına çıkar, su buhar basıncı azalır",
          "en": "He pressure increases 4 times, water vapor pressure decreases",
          "de": "Der Druck erhöht sich um das Vierfache, der Wasserdampfdruck nimmt ab",
          "fr": "La pression augmente 4 fois, la pression de la vapeur d'eau diminue",
          "ru": "Давление увеличивается в 4 раза, давление водяного пара уменьшается",
          "ar": "يزداد الضغط 4 مرات، وينخفض ضغط بخار الماء",
          "zh": "He压力增加4倍，水蒸气压力降低",
          "ku": "Zexta wî 4 qat zêde dibe, tansiyona buxara avê kêm dibe"
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
        "tr": "Bir kimya öğretmeninin laboratuvarda Gazlar: Kinetik Teori ve Gerçek Gazlar konusunu işlerken Graham Difüzyon Yasası üzerine sorduğu sorunun doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During a laboratory inquiry on Gases: Kinetic Theory & Real Gases, which statement regarding Graham's Law of Diffusion represents the correct answer?",
        "de": "Welche Aussage zu Grahams Diffusionsgesetz stellt im Kontext von Kinetische Gastheorie die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l étude expérimentale de Théorie Cinétique des Gaz, quelle proposition sur Loi de diffusion de Graham constitue la réponse exacte?",
        "ru": "В ходе лабораторного изучения темы «Кинетическая теория газов», какой ответ относительно «Закон диффузии Грэма» является правильным?",
        "ar": "أثناء دراسة موضوع \"النظرية الحركية للغازات\" مخبرياً، أي إجابة بخصوص \"قانون غراهام للانتشار\" تمثل الإجابة الصحيحة؟",
        "zh": "在“气体动理论”实验探究与教学分析中，针对“格雷厄姆扩散定律”所提问题的正确答案是？",
        "ku": "Di lêkolîna ezmûnî ya li ser \"Teoriya Kînetîk a Gazan\" de, kîjan bersiv derbarê \"Qanûna Belavbûnê ya Graham\" de rast e?"
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
          "tr": "Dalton Kısmi Basınçlar Yasası: Karışımdaki bir gazın kısmi basıncı Pi = Xi * Ptoplam dır (Xi = ni / ntoplam).",
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
          "tr": "Gerçek gazların hepsinde Z değeri daima 1 e eşittir.",
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
        "tr": "Doğru cevap \"Dalton Kısmi Basınçlar Yasası: Karışımdaki bir gazın kısmi basıncı Pi = Xi * Ptoplam dır (Xi = ni / ntoplam).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
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
        "tr": "Kimya dersinde Gazlar: Kinetik Teori ve Gerçek Gazlar ünitesi incelenirken Gerçek Gaz ile ilgili ileri sürülen aşağıdaki yargılardan hangisi bilimsel gerçektir?",
        "en": "When analyzing the unit Gases: Kinetic Theory & Real Gases, which of the following propositions concerning Real Gas is a verified scientific fact?",
        "de": "Bei der Untersuchung von Kinetische Gastheorie: Welche Behauptung bezüglich Echtes Gas entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l unité Théorie Cinétique des Gaz, laquelle des affirmations suivantes concernant Gaz réel est un fait scientifique avéré?",
        "ru": "При рассмотрении темы «Кинетическая теория газов», какое из следующих суждений о «Реальный газ» выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"النظرية الحركية للغازات\"، أي من الأحكام التالية المتعلقة بـ \"الغاز الحقيقي\" تعتبر حقيقة علمية؟",
        "zh": "在系统辨析“气体动理论”核心规律时，下列关于“真实气体”的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Teoriya Kînetîk a Gazan\" tê kirin, kîjan daraza li ser \"Gaza Rastî\" rastiyeke zanistî ye?"
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
          "tr": "CH4 gazı SO2 den 4 kat daha hızlı hareket eder.",
          "en": "CH4 gas moves 4 times faster than SO2.",
          "de": "CH4-Gas bewegt sich viermal schneller als SO2.",
          "fr": "Le gaz CH4 se déplace 4 fois plus vite que le SO2.",
          "ru": "Газ CH4 движется в 4 раза быстрее, чем SO2.",
          "ar": "يتحرك غاز CH4 أسرع بأربع مرات من ثاني أكسيد الكبريت.",
          "zh": "CH4 气体的移动速度比 SO2 快 4 倍。",
          "ku": "Gaza CH4 ji SO2 4 caran zûtir dimeşe."
        },
        {
          "tr": "Gazların ortalama kinetik enerjisi (Ek = 3/2 kT) YALNIZCA mutlak sıcaklığa bağlıdır; gazın türünden bağımsızdır.",
          "en": "The average kinetic energy of gases (Ek = 3/2 kT) depends ONLY on absolute temperature; is independent of the type of gas.",
          "de": "Die durchschnittliche kinetische Energie von Gasen (Ek = 3/2 kT) hängt NUR von der absoluten Temperatur ab; ist unabhängig von der Gasart.",
          "fr": "L'énergie cinétique moyenne des gaz (Ek = 3/2 kT) dépend UNIQUEMENT de la température absolue ; est indépendant du type de gaz.",
          "ru": "Средняя кинетическая энергия газов (Ек = 3/2 кТл) зависит ТОЛЬКО от абсолютной температуры; не зависит от типа газа.",
          "ar": "متوسط ​​الطاقة الحركية للغازات (Ek = 3/2 كيلو طن) يعتمد فقط على درجة الحرارة المطلقة؛ لا يعتمد على نوع الغاز .",
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
        "ru": "Правильное утверждение: «Средняя кинетическая энергия газов (Ек = 3/2 кТл) зависит ТОЛЬКО от абсолютной температуры; не зависит от типа газа.». Средняя кинетическая энергия всех газов при одинаковой температуре одинакова!",
        "ar": "العبارة الصحيحة هي: \"متوسط ​​الطاقة الحركية للغازات (Ek = 3/2 كيلو طن) يعتمد فقط على درجة الحرارة المطلقة؛ لا يعتمد على نوع الغاز .\". متوسط ​​الطاقة الحركية لجميع الغازات عند نفس درجة الحرارة متساوي!",
        "zh": "正确表述为：“气体的平均动能 (Ek = 3/2 kT) 仅取决于绝对温度；与气体类型无关。”。相同温度下所有气体的平均动能相等！",
        "ku": "Gotina rast ev e: \"Enerjiya kînetîk a navîn a gazan (Ek = 3/2 kT) TENÊ bi germahiya mutleq ve girêdayî ye; ji cureyê gazê serbixwe ye.\". Enerjiya kînetîk a navînî ya hemî gazên di heman germahiyê de wekhev e!"
      }
    },
    {
      "id": "u13-twin05",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Gazlar: Kinetik Teori ve Gerçek Gazlar konusundaki temel kimyasal kurallar çerçevesinde Joule-Thomson Olayı kavramını en doğru açıklayan ifadedir?",
        "en": "Which of the following most accurately describes Joule-Thomson Effect within the fundamental principles of Gases: Kinetic Theory & Real Gases?",
        "de": "Welche Aussage beschreibt das Konzept Joule-Thomson-Effekt im Rahmen von Kinetische Gastheorie am präzisesten?",
        "fr": "Laquelle des propositions suivantes décrit le plus fidèlement Effet Joule-Thomson selon les lois de Théorie Cinétique des Gaz?",
        "ru": "Какое из утверждений наиболее точно описывает понятие «Эффект Джоуля-Томсона» в рамках темы «Кинетическая теория газов»?",
        "ar": "أي مما يلي يعبر بأعلى درجات الدقة عن مفهوم \"تأثير جول طومسون\" ضمن قواعد \"النظرية الحركية للغازات\"؟",
        "zh": "根据“气体动理论”的基本化学原理，下列哪项阐述能最准确地界定“焦耳-汤姆逊效应”这一核心概念？",
        "ku": "Kîjan ji van vebijarkan têgeha \"Bandora Joule-Thomson\" di çarçoveya prensîbên \"Teoriya Kînetîk a Gazan\" de herî rast rave dike?"
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
          "tr": "Effüzyon iki gazın birbiri içinde karışmasıdır.",
          "en": "Effusion is the mixing of two gases with each other.",
          "de": "Unter Effusion versteht man die Vermischung zweier Gase miteinander.",
          "fr": "L'épanchement est le mélange de deux gaz entre eux.",
          "ru": "Эффузия – это смешение двух газов друг с другом.",
          "ar": "الانصباب هو اختلاط غازين مع بعضهما البعض.",
          "zh": "逸出是两种气体相互混合。",
          "ku": "Efusion tevlîhevkirina du gazan bi hev re ye."
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
          "en": "High temperature, low pressure and small molar mass (weak gravity) bring gases closer to ideality.",
          "de": "Hohe Temperaturen, niedriger Druck und kleine Molmassen (schwache Schwerkraft) bringen Gase näher an den Idealzustand.",
          "fr": "Une température élevée, une basse pression et une petite masse molaire (faible gravité) rapprochent les gaz de l'idéalité.",
          "ru": "Высокая температура, низкое давление и малая молярная масса (слабая гравитация) приближают газы к идеальности.",
          "ar": "درجة الحرارة المرتفعة والضغط المنخفض والكتلة المولية الصغيرة (الجاذبية الضعيفة) تجعل الغازات أقرب إلى المثالية.",
          "zh": "高温、低压和小摩尔质量（弱重力）使气体更接近理想状态。",
          "ku": "Germahiya bilind, tansiyona nizm û girseya molarê ya piçûk (gravîta qels) gazan nêzî îdealîteyê dike."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Yüksek sıcaklık, düşük basınç ve küçük mol kütlesi (zayıf çekim) gazları idealliğe yaklaştırır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"High temperature, low pressure and small molar mass (weak gravity) bring gases closer to ideality.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Hohe Temperaturen, niedriger Druck und kleine Molmassen (schwache Schwerkraft) bringen Gase näher an den Idealzustand.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Une température élevée, une basse pression et une petite masse molaire (faible gravité) rapprochent les gaz de l'idéalité.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Высокая температура, низкое давление и малая молярная масса (слабая гравитация) приближают газы к идеальности.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"درجة الحرارة المرتفعة والضغط المنخفض والكتلة المولية الصغيرة (الجاذبية الضعيفة) تجعل الغازات أقرب إلى المثالية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“高温、低压和小摩尔质量（弱重力）使气体更接近理想状态。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Germahiya bilind, tansiyona nizm û girseya molarê ya piçûk (gravîta qels) gazan nêzî îdealîteyê dike.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin06",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Gazlar: Kinetik Teori ve Gerçek Gazlar sorularında karşılaşılan Doygun Su Buharı Basıncı konusunda doğru olan yargı hangisidir?",
        "en": "In standard university entrance exams covering Gases: Kinetic Theory & Real Gases, which assertion regarding Saturated Water Vapor Pressure is correct?",
        "de": "Welche Feststellung bezüglich Gesättigter Wasserdampfdruck ist nach den chemischen Gesetzmäßigkeiten von Kinetische Gastheorie richtig?",
        "fr": "Dans les épreuves universitaires portant sur Théorie Cinétique des Gaz, quelle affirmation concernant Pression de vapeur d'eau saturée est correcte?",
        "ru": "В экзаменационных заданиях по теме «Кинетическая теория газов», какое положение относительно «Давление насыщенного водяного пара» является верным?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"النظرية الحركية للغازات\"، أي حكم متعلق بـ \"ضغط بخار الماء المشبع\" يعتبر صحيحاً؟",
        "zh": "在高考“气体动理论”经典考题中，下列有关“饱和水蒸气压”的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Teoriya Kînetîk a Gazan\" de, kîjan daraza li ser \"Zexta Vaporê ya Têrkirî\" rast e?"
      },
      "options": [
        {
          "tr": "Gerçek gaz molekülleri arasında çekim kuvveti vardır ve öz hacimleri sıfır değildir.",
          "en": "There is a force of attraction between real gas molecules and their specific volumes are not zero.",
          "de": "Zwischen realen Gasmolekülen besteht eine Anziehungskraft und ihr spezifisches Volumen ist nicht Null.",
          "fr": "Il existe une force d’attraction entre les molécules de gaz réelles et leurs volumes spécifiques ne sont pas nuls.",
          "ru": "Между реальными молекулами газа существует сила притяжения, и их удельные объемы не равны нулю.",
          "ar": "توجد قوة تجاذب بين جزيئات الغاز الحقيقية وحجمها النوعي ليس صفرًا.",
          "zh": "真实气体分子之间存在吸引力，其比体积不为零。",
          "ku": "Di navbera molekulên gazê yên resen de hêzek kêşanê heye û cildên wan ên taybetî ne sifir in."
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
          "tr": "Gerçek gazların hepsinde Z değeri daima 1 e eşittir.",
          "en": "In all real gases, the Z value is always equal to 1.",
          "de": "In allen realen Gasen ist der Z-Wert immer gleich 1.",
          "fr": "Dans tous les gaz réels, la valeur Z est toujours égale à 1.",
          "ru": "Во всех реальных газах значение Z всегда равно 1.",
          "ar": "في جميع الغازات الحقيقية، تكون قيمة Z دائمًا تساوي 1.",
          "zh": "在所有实际气体中，Z 值始终等于 1。",
          "ku": "Di hemî gazên rastîn de, nirxa Z her gav bi 1 re ye."
        },
        {
          "tr": "Sıcaklık 4 katına çıkarsa difüzyon hızı 4 katına çıkar.",
          "en": "If the temperature increases by 4 times, the diffusion rate increases by 4 times.",
          "de": "Bei einer Temperaturerhöhung um das Vierfache erhöht sich die Diffusionsgeschwindigkeit um das Vierfache.",
          "fr": "Si la température augmente de 4 fois, le taux de diffusion augmente de 4 fois.",
          "ru": "Если температура увеличится в 4 раза, скорость диффузии увеличится в 4 раза.",
          "ar": "إذا زادت درجة الحرارة بمقدار 4 مرات، يزيد معدل الانتشار بمقدار 4 مرات.",
          "zh": "如果温度增加4倍，扩散速率增加4倍。",
          "ku": "Ger germahî 4 qat zêde bibe, rêjeya belavbûnê 4 qat zêde dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Gerçek gaz molekülleri arasında çekim kuvveti vardır ve öz hacimleri sıfır değildir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"There is a force of attraction between real gas molecules and their specific volumes are not zero.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Zwischen realen Gasmolekülen besteht eine Anziehungskraft und ihr spezifisches Volumen ist nicht Null.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Il existe une force d’attraction entre les molécules de gaz réelles et leurs volumes spécifiques ne sont pas nuls.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Между реальными молекулами газа существует сила притяжения, и их удельные объемы не равны нулю.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"توجد قوة تجاذب بين جزيئات الغاز الحقيقية وحجمها النوعي ليس صفرًا.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“真实气体分子之间存在吸引力，其比体积不为零。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di navbera molekulên gazê yên resen de hêzek kêşanê heye û cildên wan ên taybetî ne sifir in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin07",
      "stem": {
        "tr": "Aşağıda Gazlar: Kinetik Teori ve Gerçek Gazlar ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre Kinetik Enerji ile ilgili hangisi doğrudur?",
        "en": "Based on the fundamental principles of Gases: Kinetic Theory & Real Gases, which statement about Kinetic Energy is scientifically accurate?",
        "de": "Auf der Grundlage der Einheit Kinetische Gastheorie: Welche Aussage über Kinetische Energie ist zutreffend?",
        "fr": "Sur la base des notions fondamentales de Théorie Cinétique des Gaz, quelle affirmation relative à Énergie cinétique est exacte?",
        "ru": "На основе фундаментальных положений темы «Кинетическая теория газов», какое суждение о «Кинетическая энергия» верно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"النظرية الحركية للغازات\"، أي عبارة حول \"الطاقة الحركية\" صحيحة؟",
        "zh": "基于“气体动理论”的基础化学知识体系，下列关于“动能”的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Teoriya Kînetîk a Gazan\", kîjan gotin derbarê \"Enerjiya Kînetîk\" de rast e?"
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
          "tr": "CH4 gazı SO2 den 4 kat daha hızlı hareket eder.",
          "en": "CH4 gas moves 4 times faster than SO2.",
          "de": "CH4-Gas bewegt sich viermal schneller als SO2.",
          "fr": "Le gaz CH4 se déplace 4 fois plus vite que le SO2.",
          "ru": "Газ CH4 движется в 4 раза быстрее, чем SO2.",
          "ar": "يتحرك غاز CH4 أسرع بأربع مرات من ثاني أكسيد الكبريت.",
          "zh": "CH4 气体的移动速度比 SO2 快 4 倍。",
          "ku": "Gaza CH4 ji SO2 4 caran zûtir dimeşe."
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
        "tr": "Gazlar: Kinetik Teori ve Gerçek Gazlar konusu kapsamında İdeallikten Sapma Faktörü (Z = PV/nRT) ile ilgili yapılan çalışmalarda aşağıdaki bulgulardan hangisi bilimsel olarak doğrulanmıştır?",
        "en": "In the context of Gases: Kinetic Theory & Real Gases, which of the following findings regarding Deviation from ideality factor (Z = PV/nRT) is scientifically verified?",
        "de": "Im Rahmen der Einheit Kinetische Gastheorie: Welcher der folgenden Befunde zu Abweichung vom Idealitätsfaktor (Z = PV/nRT) ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l unité Théorie Cinétique des Gaz, laquelle des constatations suivantes concernant Écart par rapport au facteur d'idéalité (Z = PV/nRT) est scientifiquement vérifiée?",
        "ru": "В контексте темы «Кинетическая теория газов», какой из следующих выводов относительно «Отклонение от коэффициента идеальности (Z = PV/nRT)» научно подтверждён?",
        "ar": "في سياق موضوع \"النظرية الحركية للغازات\"، أي من النتائج التالية المتعلقة بـ \"الانحراف عن عامل المثالية (Z = PV/nRT)\" مثبتة علمياً؟",
        "zh": "在“气体动理论”主题范畴内，下列关于“与理想因子的偏差 (Z = PV/nRT)”的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Teoriya Kînetîk a Gazan\" de, kîjan ji van encamên li ser \"Dûrketina ji faktora îdealîteyê (Z = PV/nRT)\" ji aliyê zanistî ve hatiye piştrastkirin?"
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
          "tr": "Effüzyon iki gazın birbiri içinde karışmasıdır.",
          "en": "Effusion is the mixing of two gases with each other.",
          "de": "Unter Effusion versteht man die Vermischung zweier Gase miteinander.",
          "fr": "L'épanchement est le mélange de deux gaz entre eux.",
          "ru": "Эффузия – это смешение двух газов друг с другом.",
          "ar": "الانصباب هو اختلاط غازين مع بعضهما البعض.",
          "zh": "逸出是两种气体相互混合。",
          "ku": "Efusion tevlîhevkirina du gazan bi hev re ye."
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
          "tr": "Aynı sıcaklıktaki CO2 gazının kinetik enerjisi H2 gazınınkinden büyüktür.",
          "en": "The kinetic energy of CO2 gas at the same temperature is greater than that of H2 gas.",
          "de": "Die kinetische Energie von CO2-Gas ist bei gleicher Temperatur größer als die von H2-Gas.",
          "fr": "L’énergie cinétique du gaz CO2 à la même température est supérieure à celle du gaz H2.",
          "ru": "Кинетическая энергия газа CO2 при той же температуре больше, чем у газа H2.",
          "ar": "الطاقة الحركية لغاز ثاني أكسيد الكربون عند نفس درجة الحرارة أكبر من طاقة غاز الهيدروجين.",
          "zh": "相同温度下CO2气体的动能大于H2气体的动能。",
          "ku": "Enerjiya kinetîk a gaza CO2 di heman germahiyê de ji ya gaza H2 mezintir e."
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
        "tr": "ÖSYM sınav standartlarında Gazlar: Kinetik Teori ve Gerçek Gazlar ünitesinde ele alınan İdeal Gaz hakkında verilen ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Gases: Kinetic Theory & Real Gases, which statement about Ideal Gas is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Kinetische Gastheorie: Welche Aussage über Ideales Gas ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d examen de Théorie Cinétique des Gaz, quelle affirmation relative à Gaz parfait est rigoureusement exacte?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Кинетическая теория газов», какое утверждение о «Идеальный газ» абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"النظرية الحركية للغازات\"، أي عبارة حول \"الغاز المثالي\" صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“气体动理论”单元中关于“理想气体”的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Teoriya Kînetîk a Gazan\", kîjan gotin li ser \"Gaza Îdeal\" bê guman rast e?"
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
          "tr": "Gerçek gazların hepsinde Z değeri daima 1 e eşittir.",
          "en": "In all real gases, the Z value is always equal to 1.",
          "de": "In allen realen Gasen ist der Z-Wert immer gleich 1.",
          "fr": "Dans tous les gaz réels, la valeur Z est toujours égale à 1.",
          "ru": "Во всех реальных газах значение Z всегда равно 1.",
          "ar": "في جميع الغازات الحقيقية، تكون قيمة Z دائمًا تساوي 1.",
          "zh": "在所有实际气体中，Z 值始终等于 1。",
          "ku": "Di hemî gazên rastîn de, nirxa Z her gav bi 1 re ye."
        },
        {
          "tr": "Sıcaklık 4 katına çıkarsa difüzyon hızı 4 katına çıkar.",
          "en": "If the temperature increases by 4 times, the diffusion rate increases by 4 times.",
          "de": "Bei einer Temperaturerhöhung um das Vierfache erhöht sich die Diffusionsgeschwindigkeit um das Vierfache.",
          "fr": "Si la température augmente de 4 fois, le taux de diffusion augmente de 4 fois.",
          "ru": "Если температура увеличится в 4 раза, скорость диффузии увеличится в 4 раза.",
          "ar": "إذا زادت درجة الحرارة بمقدار 4 مرات، يزيد معدل الانتشار بمقدار 4 مرات.",
          "zh": "如果温度增加4倍，扩散速率增加4倍。",
          "ku": "Ger germahî 4 qat zêde bibe, rêjeya belavbûnê 4 qat zêde dibe."
        },
        {
          "tr": "Buhar, kritik sıcaklık ile kaynama noktası arasındaki sıkıştırılarak sıvılaşabilen akışkandır.",
          "en": "Vapor is a fluid that can be liquefied by compression between the critical temperature and the boiling point.",
          "de": "Dampf ist eine Flüssigkeit, die durch Kompression zwischen der kritischen Temperatur und dem Siedepunkt verflüssigt werden kann.",
          "fr": "La vapeur est un fluide qui peut être liquéfié par compression entre la température critique et le point d'ébullition.",
          "ru": "Пар — это жидкость, которую можно сжижать путем сжатия между критической температурой и температурой кипения.",
          "ar": "البخار هو سائل يمكن تسييله عن طريق الضغط بين درجة الحرارة الحرجة ونقطة الغليان.",
          "zh": "蒸气是在临界温度和沸点之间通过压缩可以液化的流体。",
          "ku": "Vapor şilekek e ku dikare bi pêçandina di navbera germahiya krîtîk û xala kelandinê de şil bibe."
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
        "tr": "Doğru cevap \"Buhar, kritik sıcaklık ile kaynama noktası arasındaki sıkıştırılarak sıvılaşabilen akışkandır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Vapor is a fluid that can be liquefied by compression between the critical temperature and the boiling point.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Dampf ist eine Flüssigkeit, die durch Kompression zwischen der kritischen Temperatur und dem Siedepunkt verflüssigt werden kann.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La vapeur est un fluide qui peut être liquéfié par compression entre la température critique et le point d'ébullition.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Пар — это жидкость, которую можно сжижать путем сжатия между критической температурой и температурой кипения.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"البخار هو سائل يمكن تسييله عن طريق الضغط بين درجة الحرارة الحرجة ونقطة الغليان.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“蒸气是在临界温度和沸点之间通过压缩可以液化的流体。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Vapor şilekek e ku dikare bi pêçandina di navbera germahiya krîtîk û xala kelandinê de şil bibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin10",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Gazlar: Kinetik Teori ve Gerçek Gazlar konusunu işlerken Gaz üzerine sorduğu sorunun doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During a laboratory inquiry on Gases: Kinetic Theory & Real Gases, which statement regarding gas represents the correct answer?",
        "de": "Welche Aussage zu Gas stellt im Kontext von Kinetische Gastheorie die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l étude expérimentale de Théorie Cinétique des Gaz, quelle proposition sur gaz constitue la réponse exacte?",
        "ru": "В ходе лабораторного изучения темы «Кинетическая теория газов», какой ответ относительно «газ» является правильным?",
        "ar": "أثناء دراسة موضوع \"النظرية الحركية للغازات\" مخبرياً، أي إجابة بخصوص \"غاز\" تمثل الإجابة الصحيحة؟",
        "zh": "在“气体动理论”实验探究与教学分析中，针对“气体”所提问题的正确答案是？",
        "ku": "Di lêkolîna ezmûnî ya li ser \"Teoriya Kînetîk a Gazan\" de, kîjan bersiv derbarê \"gaz\" de rast e?"
      },
      "options": [
        {
          "tr": "CH4 gazı SO2 den 4 kat daha hızlı hareket eder.",
          "en": "CH4 gas moves 4 times faster than SO2.",
          "de": "CH4-Gas bewegt sich viermal schneller als SO2.",
          "fr": "Le gaz CH4 se déplace 4 fois plus vite que le SO2.",
          "ru": "Газ CH4 движется в 4 раза быстрее, чем SO2.",
          "ar": "يتحرك غاز CH4 أسرع بأربع مرات من ثاني أكسيد الكبريت.",
          "zh": "CH4 气体的移动速度比 SO2 快 4 倍。",
          "ku": "Gaza CH4 ji SO2 4 caran zûtir dimeşe."
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
        "tr": "Kimya dersinde Gazlar: Kinetik Teori ve Gerçek Gazlar ünitesi incelenirken Graham Difüzyon Yasası ile ilgili ileri sürülen aşağıdaki yargılardan hangisi bilimsel gerçektir?",
        "en": "When analyzing the unit Gases: Kinetic Theory & Real Gases, which of the following propositions concerning Graham's Law of Diffusion is a verified scientific fact?",
        "de": "Bei der Untersuchung von Kinetische Gastheorie: Welche Behauptung bezüglich Grahams Diffusionsgesetz entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l unité Théorie Cinétique des Gaz, laquelle des affirmations suivantes concernant Loi de diffusion de Graham est un fait scientifique avéré?",
        "ru": "При рассмотрении темы «Кинетическая теория газов», какое из следующих суждений о «Закон диффузии Грэма» выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"النظرية الحركية للغازات\"، أي من الأحكام التالية المتعلقة بـ \"قانون غراهام للانتشار\" تعتبر حقيقة علمية؟",
        "zh": "在系统辨析“气体动理论”核心规律时，下列关于“格雷厄姆扩散定律”的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Teoriya Kînetîk a Gazan\" tê kirin, kîjan daraza li ser \"Qanûna Belavbûnê ya Graham\" rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Suyun buhar basıncı kabın hacmi değiştirildiğinde sıcaklık sabit kaldığı sürece DEĞİŞMEZ.",
          "en": "The vapor pressure of water DOES NOT change when the volume of the container is changed as long as the temperature remains constant.",
          "de": "Der Dampfdruck von Wasser ändert sich NICHT, wenn das Volumen des Behälters verändert wird, solange die Temperatur konstant bleibt.",
          "fr": "La pression de vapeur de l’eau NE change PAS lorsque le volume du récipient change tant que la température reste constante.",
          "ru": "Давление пара воды НЕ меняется при изменении объема сосуда, пока температура остается постоянной.",
          "ar": "لا يتغير ضغط بخار الماء بتغير حجم الوعاء طالما ظلت درجة الحرارة ثابتة.",
          "zh": "只要温度保持恒定，当容器体积改变时，水的蒸气压就不会改变。",
          "ku": "Dema ku qebareya konteynerê tê guherandin heta ku germahî sabît bimîne, tansiyona buharê ya avê NAguhere."
        },
        {
          "tr": "Effüzyon iki gazın birbiri içinde karışmasıdır.",
          "en": "Effusion is the mixing of two gases with each other.",
          "de": "Unter Effusion versteht man die Vermischung zweier Gase miteinander.",
          "fr": "L'épanchement est le mélange de deux gaz entre eux.",
          "ru": "Эффузия – это смешение двух газов друг с другом.",
          "ar": "الانصباب هو اختلاط غازين مع بعضهما البعض.",
          "zh": "逸出是两种气体相互混合。",
          "ku": "Efusion tevlîhevkirina du gazan bi hev re ye."
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
          "tr": "Aynı sıcaklıktaki CO2 gazının kinetik enerjisi H2 gazınınkinden büyüktür.",
          "en": "The kinetic energy of CO2 gas at the same temperature is greater than that of H2 gas.",
          "de": "Die kinetische Energie von CO2-Gas ist bei gleicher Temperatur größer als die von H2-Gas.",
          "fr": "L’énergie cinétique du gaz CO2 à la même température est supérieure à celle du gaz H2.",
          "ru": "Кинетическая энергия газа CO2 при той же температуре больше, чем у газа H2.",
          "ar": "الطاقة الحركية لغاز ثاني أكسيد الكربون عند نفس درجة الحرارة أكبر من طاقة غاز الهيدروجين.",
          "zh": "相同温度下CO2气体的动能大于H2气体的动能。",
          "ku": "Enerjiya kinetîk a gaza CO2 di heman germahiyê de ji ya gaza H2 mezintir e."
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
        "tr": "Doğru cevap \"Suyun buhar basıncı kabın hacmi değiştirildiğinde sıcaklık sabit kaldığı sürece DEĞİŞMEZ.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The vapor pressure of water DOES NOT change when the volume of the container is changed as long as the temperature remains constant.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der Dampfdruck von Wasser ändert sich NICHT, wenn das Volumen des Behälters verändert wird, solange die Temperatur konstant bleibt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La pression de vapeur de l’eau NE change PAS lorsque le volume du récipient change tant que la température reste constante.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Давление пара воды НЕ меняется при изменении объема сосуда, пока температура остается постоянной.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"لا يتغير ضغط بخار الماء بتغير حجم الوعاء طالما ظلت درجة الحرارة ثابتة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“只要温度保持恒定，当容器体积改变时，水的蒸气压就不会改变。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Dema ku qebareya konteynerê tê guherandin heta ku germahî sabît bimîne, tansiyona buharê ya avê NAguhere.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin12",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Gazlar: Kinetik Teori ve Gerçek Gazlar konusundaki temel kimyasal kurallar çerçevesinde Gerçek Gaz kavramını en doğru açıklayan ifadedir?",
        "en": "Which of the following most accurately describes Real Gas within the fundamental principles of Gases: Kinetic Theory & Real Gases?",
        "de": "Welche Aussage beschreibt das Konzept Echtes Gas im Rahmen von Kinetische Gastheorie am präzisesten?",
        "fr": "Laquelle des propositions suivantes décrit le plus fidèlement Gaz réel selon les lois de Théorie Cinétique des Gaz?",
        "ru": "Какое из утверждений наиболее точно описывает понятие «Реальный газ» в рамках темы «Кинетическая теория газов»?",
        "ar": "أي مما يلي يعبر بأعلى درجات الدقة عن مفهوم \"الغاز الحقيقي\" ضمن قواعد \"النظرية الحركية للغازات\"؟",
        "zh": "根据“气体动理论”的基本化学原理，下列哪项阐述能最准确地界定“真实气体”这一核心概念？",
        "ku": "Kîjan ji van vebijarkan têgeha \"Gaza Rastî\" di çarçoveya prensîbên \"Teoriya Kînetîk a Gazan\" de herî rast rave dike?"
      },
      "options": [
        {
          "tr": "Gerçek gazların hepsinde Z değeri daima 1 e eşittir.",
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
          "tr": "Sıcaklık 4 katına çıkarsa difüzyon hızı 4 katına çıkar.",
          "en": "If the temperature increases by 4 times, the diffusion rate increases by 4 times.",
          "de": "Bei einer Temperaturerhöhung um das Vierfache erhöht sich die Diffusionsgeschwindigkeit um das Vierfache.",
          "fr": "Si la température augmente de 4 fois, le taux de diffusion augmente de 4 fois.",
          "ru": "Если температура увеличится в 4 раза, скорость диффузии увеличится в 4 раза.",
          "ar": "إذا زادت درجة الحرارة بمقدار 4 مرات، يزيد معدل الانتشار بمقدار 4 مرات.",
          "zh": "如果温度增加4倍，扩散速率增加4倍。",
          "ku": "Ger germahî 4 qat zêde bibe, rêjeya belavbûnê 4 qat zêde dibe."
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
        "tr": "Üniversiteye giriş sınavı Gazlar: Kinetik Teori ve Gerçek Gazlar sorularında karşılaşılan Joule-Thomson Olayı konusunda doğru olan yargı hangisidir?",
        "en": "In standard university entrance exams covering Gases: Kinetic Theory & Real Gases, which assertion regarding Joule-Thomson Effect is correct?",
        "de": "Welche Feststellung bezüglich Joule-Thomson-Effekt ist nach den chemischen Gesetzmäßigkeiten von Kinetische Gastheorie richtig?",
        "fr": "Dans les épreuves universitaires portant sur Théorie Cinétique des Gaz, quelle affirmation concernant Effet Joule-Thomson est correcte?",
        "ru": "В экзаменационных заданиях по теме «Кинетическая теория газов», какое положение относительно «Эффект Джоуля-Томсона» является верным?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"النظرية الحركية للغازات\"، أي حكم متعلق بـ \"تأثير جول طومسون\" يعتبر صحيحاً؟",
        "zh": "在高考“气体动理论”经典考题中，下列有关“焦耳-汤姆逊效应”的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Teoriya Kînetîk a Gazan\" de, kîjan daraza li ser \"Bandora Joule-Thomson\" rast e?"
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
          "tr": "CH4 (MA=16) gazı SO2 (MA=64) gazından sqrt(64/16) = 2 kat daha hızlı difüzlenir.",
          "en": "CH4 (MA=16) gas diffuses sqrt(64/16) = 2 times faster than SO2 (MA=64) gas.",
          "de": "CH4-Gas (MA=16) diffundiert sqrt(64/16) = 2-mal schneller als SO2-Gas (MA=64).",
          "fr": "Le gaz CH4 (MA=16) diffuse sqrt(64/16) = 2 fois plus rapide que le gaz SO2 (MA=64).",
          "ru": "Газ CH4 (MA=16) распространяется sqrt(64/16) = в 2 раза быстрее, чем газ SO2 (MA=64).",
          "ar": "ينتشر غاز CH4 (MA=16) sqrt(64/16) = مرتين أسرع من غاز SO2 (MA=64).",
          "zh": "CH4 (MA=16) 气体的扩散 sqrt(64/16) = 比 SO2 (MA=64) 气体快 2 倍。",
          "ku": "Gaza CH4 (MA=16) sqrt(64/16) = 2 qat ji gaza SO2 (MA=64) zûtir belav dike."
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
        "tr": "Doğru cevap \"CH4 (MA=16) gazı SO2 (MA=64) gazından sqrt(64/16) = 2 kat daha hızlı difüzlenir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"CH4 (MA=16) gas diffuses sqrt(64/16) = 2 times faster than SO2 (MA=64) gas.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"CH4-Gas (MA=16) diffundiert sqrt(64/16) = 2-mal schneller als SO2-Gas (MA=64).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le gaz CH4 (MA=16) diffuse sqrt(64/16) = 2 fois plus rapide que le gaz SO2 (MA=64).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Газ CH4 (MA=16) распространяется sqrt(64/16) = в 2 раза быстрее, чем газ SO2 (MA=64).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"ينتشر غاز CH4 (MA=16) sqrt(64/16) = مرتين أسرع من غاز SO2 (MA=64).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“CH4 (MA=16) 气体的扩散 sqrt(64/16) = 比 SO2 (MA=64) 气体快 2 倍。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Gaza CH4 (MA=16) sqrt(64/16) = 2 qat ji gaza SO2 (MA=64) zûtir belav dike.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin14",
      "stem": {
        "tr": "Aşağıda Gazlar: Kinetik Teori ve Gerçek Gazlar ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre Doygun Su Buharı Basıncı ile ilgili hangisi doğrudur?",
        "en": "Based on the fundamental principles of Gases: Kinetic Theory & Real Gases, which statement about Saturated Water Vapor Pressure is scientifically accurate?",
        "de": "Auf der Grundlage der Einheit Kinetische Gastheorie: Welche Aussage über Gesättigter Wasserdampfdruck ist zutreffend?",
        "fr": "Sur la base des notions fondamentales de Théorie Cinétique des Gaz, quelle affirmation relative à Pression de vapeur d'eau saturée est exacte?",
        "ru": "На основе фундаментальных положений темы «Кинетическая теория газов», какое суждение о «Давление насыщенного водяного пара» верно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"النظرية الحركية للغازات\"، أي عبارة حول \"ضغط بخار الماء المشبع\" صحيحة؟",
        "zh": "基于“气体动理论”的基础化学知识体系，下列关于“饱和水蒸气压”的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Teoriya Kînetîk a Gazan\", kîjan gotin derbarê \"Zexta Vaporê ya Têrkirî\" de rast e?"
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
          "tr": "Aynı sıcaklıktaki CO2 gazının kinetik enerjisi H2 gazınınkinden büyüktür.",
          "en": "The kinetic energy of CO2 gas at the same temperature is greater than that of H2 gas.",
          "de": "Die kinetische Energie von CO2-Gas ist bei gleicher Temperatur größer als die von H2-Gas.",
          "fr": "L’énergie cinétique du gaz CO2 à la même température est supérieure à celle du gaz H2.",
          "ru": "Кинетическая энергия газа CO2 при той же температуре больше, чем у газа H2.",
          "ar": "الطاقة الحركية لغاز ثاني أكسيد الكربون عند نفس درجة الحرارة أكبر من طاقة غاز الهيدروجين.",
          "zh": "相同温度下CO2气体的动能大于H2气体的动能。",
          "ku": "Enerjiya kinetîk a gaza CO2 di heman germahiyê de ji ya gaza H2 mezintir e."
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
          "tr": "Effüzyon, gaz moleküllerinin küçük bir delikten vakumlu boşluğa kaçması olayıdır.",
          "en": "Effusion is the phenomenon of gas molecules escaping into a vacuum space through a small hole.",
          "de": "Unter Effusion versteht man das Phänomen, dass Gasmoleküle durch ein kleines Loch in einen Vakuumraum entweichen.",
          "fr": "L'épanchement est le phénomène par lequel des molécules de gaz s'échappent dans un espace vide par un petit trou.",
          "ru": "Эффузия – это явление, когда молекулы газа выходят в вакуумное пространство через небольшое отверстие.",
          "ar": "الانصباب هو ظاهرة هروب جزيئات الغاز إلى فراغ من خلال ثقب صغير.",
          "zh": "逸出是气体分子通过小孔逃逸到真空空间的现象。",
          "ku": "Effuzyon diyardeya molekulên gazê ye ku di qulikek piçûk de diherikin cîhek valahiyê."
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
        "tr": "Doğru cevap \"Effüzyon, gaz moleküllerinin küçük bir delikten vakumlu boşluğa kaçması olayıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Effusion is the phenomenon of gas molecules escaping into a vacuum space through a small hole.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Unter Effusion versteht man das Phänomen, dass Gasmoleküle durch ein kleines Loch in einen Vakuumraum entweichen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'épanchement est le phénomène par lequel des molécules de gaz s'échappent dans un espace vide par un petit trou.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Эффузия – это явление, когда молекулы газа выходят в вакуумное пространство через небольшое отверстие.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الانصباب هو ظاهرة هروب جزيئات الغاز إلى فراغ من خلال ثقب صغير.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“逸出是气体分子通过小孔逃逸到真空空间的现象。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Effuzyon diyardeya molekulên gazê ye ku di qulikek piçûk de diherikin cîhek valahiyê.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u13-twin15",
      "stem": {
        "tr": "Gazlar: Kinetik Teori ve Gerçek Gazlar konusu kapsamında Kinetik Enerji ile ilgili yapılan çalışmalarda aşağıdaki bulgulardan hangisi bilimsel olarak doğrulanmıştır?",
        "en": "In the context of Gases: Kinetic Theory & Real Gases, which of the following findings regarding Kinetic Energy is scientifically verified?",
        "de": "Im Rahmen der Einheit Kinetische Gastheorie: Welcher der folgenden Befunde zu Kinetische Energie ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l unité Théorie Cinétique des Gaz, laquelle des constatations suivantes concernant Énergie cinétique est scientifiquement vérifiée?",
        "ru": "В контексте темы «Кинетическая теория газов», какой из следующих выводов относительно «Кинетическая энергия» научно подтверждён?",
        "ar": "في سياق موضوع \"النظرية الحركية للغازات\"، أي من النتائج التالية المتعلقة بـ \"الطاقة الحركية\" مثبتة علمياً؟",
        "zh": "在“气体动理论”主题范畴内，下列关于“动能”的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Teoriya Kînetîk a Gazan\" de, kîjan ji van encamên li ser \"Enerjiya Kînetîk\" ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Sıcaklık 4 katına çıkarsa difüzyon hızı 4 katına çıkar.",
          "en": "If the temperature increases by 4 times, the diffusion rate increases by 4 times.",
          "de": "Bei einer Temperaturerhöhung um das Vierfache erhöht sich die Diffusionsgeschwindigkeit um das Vierfache.",
          "fr": "Si la température augmente de 4 fois, le taux de diffusion augmente de 4 fois.",
          "ru": "Если температура увеличится в 4 раза, скорость диффузии увеличится в 4 раза.",
          "ar": "إذا زادت درجة الحرارة بمقدار 4 مرات، يزيد معدل الانتشار بمقدار 4 مرات.",
          "zh": "如果温度增加4倍，扩散速率增加4倍。",
          "ku": "Ger germahî 4 qat zêde bibe, rêjeya belavbûnê 4 qat zêde dibe."
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
          "tr": "Sıkıştırılabilirlik faktörü Z = PV / nRT dir; ideal gazda Z = 1 dir.",
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
        "tr": "Doğru cevap \"Sıkıştırılabilirlik faktörü Z = PV / nRT dir; ideal gazda Z = 1 dir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
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
        "tr": "ÖSYM sınav standartlarında Gazlar: Kinetik Teori ve Gerçek Gazlar ünitesinde ele alınan İdeallikten Sapma Faktörü (Z = PV/nRT) hakkında verilen ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Gases: Kinetic Theory & Real Gases, which statement about Deviation from ideality factor (Z = PV/nRT) is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Kinetische Gastheorie: Welche Aussage über Abweichung vom Idealitätsfaktor (Z = PV/nRT) ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d examen de Théorie Cinétique des Gaz, quelle affirmation relative à Écart par rapport au facteur d'idéalité (Z = PV/nRT) est rigoureusement exacte?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Кинетическая теория газов», какое утверждение о «Отклонение от коэффициента идеальности (Z = PV/nRT)» абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"النظرية الحركية للغازات\"، أي عبارة حول \"الانحراف عن عامل المثالية (Z = PV/nRT)\" صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“气体动理论”单元中关于“与理想因子的偏差 (Z = PV/nRT)”的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Teoriya Kînetîk a Gazan\", kîjan gotin li ser \"Dûrketina ji faktora îdealîteyê (Z = PV/nRT)\" bê guman rast e?"
      },
      "options": [
        {
          "tr": "Gaz taneciklerinin öz hacmi yüksek basınç altında ihmal edilemez büyüklüğe ulaşır.",
          "en": "The specific volume of gas particles reaches a non-negligible size under high pressure.",
          "de": "Unter hohem Druck erreicht das spezifische Volumen der Gaspartikel eine nicht vernachlässigbare Größe.",
          "fr": "Le volume spécifique des particules de gaz atteint une taille non négligeable sous haute pression.",
          "ru": "Удельный объем частиц газа достигает немаловажных размеров под высоким давлением.",
          "ar": "يصل الحجم النوعي لجزيئات الغاز إلى حجم غير مهم تحت الضغط العالي.",
          "zh": "气体颗粒的比体积在高压下达到不可忽略的尺寸。",
          "ku": "Hêjmara taybetî ya pariyên gazê di bin tansiyona bilind de digihîje mezinahiyek ne-hesab."
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
        "en": "The correct statement is: \"The specific volume of gas particles reaches a non-negligible size under high pressure.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Unter hohem Druck erreicht das spezifische Volumen der Gaspartikel eine nicht vernachlässigbare Größe.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le volume spécifique des particules de gaz atteint une taille non négligeable sous haute pression.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Удельный объем частиц газа достигает немаловажных размеров под высоким давлением.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يصل الحجم النوعي لجزيئات الغاز إلى حجم غير مهم تحت الضغط العالي.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“气体颗粒的比体积在高压下达到不可忽略的尺寸。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hêjmara taybetî ya pariyên gazê di bin tansiyona bilind de digihîje mezinahiyek ne-hesab.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit13;
