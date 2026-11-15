import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit15: ChemistryUnitSeedData = {
  "id": "u15",
  "order": 15,
  "exam": "AYT",
  "grade": 11,
  "title": {
    "tr": "Koligatif Özellikler ve Çözünürlük",
    "en": "Colligative Properties & Solubility",
    "de": "Kolligative Eigenschaften & Löslichkeit",
    "fr": "Propriétés Colligatives & Solubilité",
    "ru": "Коллигативные свойства и растворимость",
    "ar": "الخواص التجميعية والذوبانية",
    "zh": "依数性与溶解度",
    "ku": "Taybetmendiyên Kolîgatîf û Çareserî"
  },
  "subtitle": {
    "tr": "Kaynama Noktası Yükselmesi, Donma Noktası ve Raoult",
    "en": "Boiling Elevation, Freezing Depression & Kk/Kd",
    "de": "Siedepunkterhöhung, Gefrierpunkt und Raoult",
    "fr": "Élévation du point d'ébullition, point de congélation et Raoult",
    "ru": "Повышение температуры кипения, температура замерзания и Рауль",
    "ar": "ارتفاع نقطة الغليان ونقطة التجمد وراولت",
    "zh": "沸点升高、凝固点和拉乌尔",
    "ku": "Bilindbûna xala kelandinê, xala cemidandinê û raoult"
  },
  "facts": [
    {
      "id": "u15-f01",
      "fact": {
        "tr": "Koligatif özellikler çözünen maddenin kimyasal cinsine değil, çözeltideki toplam tanecik derişimine bağlıdır.",
        "en": "Colligative properties depend on the total particle concentration in the solution, not on the chemical type of the solute.",
        "de": "Kolligative Eigenschaften hängen von der Gesamtpartikelkonzentration in der Lösung ab, nicht von der chemischen Art des gelösten Stoffes.",
        "fr": "Les propriétés colligatives dépendent de la concentration totale de particules dans la solution et non du type chimique du soluté.",
        "ru": "Коллигативные свойства зависят от общей концентрации частиц в растворе, а не от химического типа растворенного вещества.",
        "ar": "تعتمد الخواص التجميعية على إجمالي تركيز الجسيمات في المحلول، وليس على النوع الكيميائي للمذاب.",
        "zh": "依数性质取决于溶液中的总颗粒浓度，而不取决于溶质的化学类型。",
        "ku": "Taybetmendiyên kolektîf bi tevheviya parçikê ya çareseriyê ve girêdayî ye, ne bi celebê kîmyewî ya soletê."
      },
      "trap": {
        "tr": "Koligatif özellikler çözünen maddenin molekül geometrisine bağlıdır.",
        "en": "Colligative properties depend on the molecular geometry of the solute.",
        "de": "Kolligative Eigenschaften hängen von der Molekülgeometrie des gelösten Stoffes ab.",
        "fr": "Les propriétés colligatives dépendent de la géométrie moléculaire du soluté.",
        "ru": "Коллигативные свойства зависят от молекулярной геометрии растворенного вещества.",
        "ar": "تعتمد الخواص التجميعية على الهندسة الجزيئية للمذاب.",
        "zh": "依数性质取决于溶质的分子几何形状。",
        "ku": "Taybetmendiyên kolektîf bi geometriya molekulê ya solê ve girêdayî ye."
      }
    },
    {
      "id": "u15-f02",
      "fact": {
        "tr": "Kaynama noktası yükselmesi: ΔTk = Kk * m * i'dir (Kk: kaynama noktası sabiti, m: molalite, i: van t Hoff faktörü).",
        "en": "Boiling point elevation: ΔTk = Kk * m * i (Kk: boiling point constant, m: molality, i: van t Hoff factor).",
        "de": "Siedepunkterhöhung: ΔTk = Kk * m * i (Kk: Siedepunktkonstante, m: Molalität, i: van t Hoff-Faktor).",
        "fr": "Élévation du point d'ébullition : ΔTk = Kk * m * i (Kk : constante du point d'ébullition, m : molalité, i : facteur van t Hoff).",
        "ru": "Повышение температуры кипения: ΔTk = Kk * m * i (Kk: константа точки кипения, m: моляльность, i: фактор Ван-Т-Гоффа).",
        "ar": "ارتفاع نقطة الغليان: ΔTk = Kk * m * i (Kk: ثابت نقطة الغليان، m: المولالية، i: عامل فان تي هوف).",
        "zh": "沸点升高：ΔTk = Kk * m * i（Kk：沸点常数，m：质量摩尔浓度，i：van t Hoff 因子）。",
        "ku": "Bilindbûna nuqteya kelînê: ΔTk = Kk * m * i (Kk: sabita xala kelînê, m: molality, i: van t Faktora Hoff)."
      },
      "trap": {
        "tr": "Kaynama noktası yükselmesi çözünenin mol kütlesiyle doğru orantılıdır.",
        "en": "The boiling point elevation is directly proportional to the molar mass of the solute.",
        "de": "Die Siedepunkterhöhung ist direkt proportional zur Molmasse des gelösten Stoffes.",
        "fr": "L'élévation du point d'ébullition est directement proportionnelle à la masse molaire du soluté.",
        "ru": "Повышение температуры кипения прямо пропорционально молярной массе растворенного вещества.",
        "ar": "يتناسب ارتفاع نقطة الغليان بشكل مباشر مع الكتلة المولية للمذاب.",
        "zh": "沸点升高与溶质的摩尔质量成正比。",
        "ku": "Bilindbûna nuqteya kelandinê rasterast bi girseya molarê ya madeya çareserkirinê re têkildar e."
      }
    },
    {
      "id": "u15-f03",
      "fact": {
        "tr": "Donma noktası alçalması: ΔTd = Kd * m * i'dir (su için Kd = 1.86 °C*kg/mol).",
        "en": "Freezing point depression: ΔTd = Kd * m * i (Kd = 1.86 °C*kg/mol for water).",
        "de": "Gefrierpunktserniedrigung: ΔTd = Kd * m * i (Kd = 1,86 °C*kg/mol für Wasser).",
        "fr": "Abaissement du point de congélation : ΔTd = Kd * m * i (Kd = 1,86 °C*kg/mol pour l'eau).",
        "ru": "Понижение температуры замерзания: ΔTd = Kd * m * i (Kd = 1,86 °C*кг/моль для воды).",
        "ar": "انخفاض نقطة التجمد: ΔTd = Kd * m * i (Kd = 1.86 درجة مئوية*كجم/مول للمياه).",
        "zh": "凝固点降低：ΔTd = Kd * m * i（对于水，Kd = 1.86 °C*kg/mol）。",
        "ku": "Depresyona xala cemidandinê: ΔTd = Kd * m * i (Kd = 1,86 °C*kg/mol ji bo avê)."
      },
      "trap": {
        "tr": "Uçucu olmayan katı çözündüğünde suyun donma noktası yükselir.",
        "en": "When a non-volatile solid dissolves, the freezing point of water rises.",
        "de": "Wenn sich ein nichtflüchtiger Feststoff auflöst, steigt der Gefrierpunkt von Wasser.",
        "fr": "Lorsqu'un solide non volatil se dissout, le point de congélation de l'eau augmente.",
        "ru": "Когда нелетучее твердое вещество растворяется, температура замерзания воды повышается.",
        "ar": "عندما تذوب مادة صلبة غير متطايرة، ترتفع درجة تجمد الماء.",
        "zh": "当非挥发性固体溶解时，水的冰点升高。",
        "ku": "Dema ku tîrêjek nehilber dihele, xala cemidandinê ya avê bilind dibe."
      }
    },
    {
      "id": "u15-f04",
      "fact": {
        "tr": "van t Hoff faktörü (i): Moleküler maddelerde (şeker, alkol) i = 1'dir; iyonik tuzlarda iyon sayısıdır (NaCl için i = 2, CaCl2 için i = 3).",
        "en": "van t Hoff factor (i): In molecular substances (sugar, alcohol) i = 1; is the number of ions in ionic salts (i = 2 for NaCl, i = 3 for CaCl2).",
        "de": "Van-t-Hoff-Faktor (i): In molekularen Substanzen (Zucker, Alkohol) i = 1; ist die Anzahl der Ionen in ionischen Salzen (i = 2 für NaCl, i = 3 für CaCl2).",
        "fr": "Facteur de van t Hoff (i) : Dans les substances moléculaires (sucre, alcool) i = 1 ; est le nombre d'ions dans les sels ioniques (i = 2 pour NaCl, i = 3 pour CaCl2).",
        "ru": "Фактор Ван-т-Гоффа (i): В молекулярных веществах (сахар, спирт) i = 1; – число ионов в ионных солях (i = 2 для NaCl, i = 3 для CaCl2).",
        "ar": "عامل فان تي هوف (i): في المواد الجزيئية (السكر والكحول) i = 1؛ هو عدد الأيونات الموجودة في الأملاح الأيونية (i = 2 لـ NaCl، i = 3 لـ CaCl2).",
        "zh": "van t Hoff 因子 (i)：分子物质（糖、酒精）中 i = 1；是离子盐中的离子数（对于 NaCl，i = 2；对于 CaCl2，i = 3）。",
        "ku": "van t Faktora Hoff (i): Di madeyên molekular de (şekir, alkol) i = 1; hejmara îyonên di xwêyên îyonî de ye (ji bo NaCl i = 2, ji bo CaCl2 i = 3)."
      },
      "trap": {
        "tr": "Glikoz suda çözündüğünde i = 2 kabul edilir.",
        "en": "When glucose dissolves in water, i = 2 is assumed.",
        "de": "Wenn sich Glucose in Wasser löst, wird i = 2 angenommen.",
        "fr": "Lorsque le glucose se dissout dans l’eau, on suppose que i = 2.",
        "ru": "Когда глюкоза растворяется в воде, предполагается i = 2.",
        "ar": "عندما يذوب الجلوكوز في الماء، يفترض i = 2.",
        "zh": "当葡萄糖溶解在水中时，假设 i = 2。",
        "ku": "Dema ku glukoz di avê de dihele, i = 2 tê texmîn kirin."
      }
    },
    {
      "id": "u15-f05",
      "fact": {
        "tr": "Buhar basıncı alçalması (Raoult Yasası): Çözeltinin buhar basıncı Pçözelti = Pçözücü° * Xçözücü'dür.",
        "en": "Vapor pressure decrease (Raoult's Law): The vapor pressure of the solution is Psolution = Psolvent° * Xsolvent.",
        "de": "Dampfdruckabnahme (Raoultsches Gesetz): Der Dampfdruck der Lösung beträgt PLösung = PLösungsmittel° * XLösungsmittel.",
        "fr": "Diminution de la pression de vapeur (Loi de Raoult) : La pression de vapeur de la solution est Psolution = Psolvant° * Xsolvant.",
        "ru": "Уменьшение давления пара (Закон Рауля): Давление пара раствора равно Psolution = Psolvent° * Xsolvent.",
        "ar": "انخفاض ضغط البخار (قانون راؤول): ضغط بخار المحلول هو Psolution = Psolvent° * Xsolvent.",
        "zh": "蒸气压降低（拉乌尔定律）：溶液的蒸气压为 Psolution = Psolvent° * Xsolvent。",
        "ku": "Kêmbûna tansiyona vaporê (Qanûna Raoult): Zexta buharê ya çareseriyê Psolution = Psolvent° * Xsolvent e."
      },
      "trap": {
        "tr": "Uçucu olmayan katı eklendiğinde çözeltinin buhar basıncı artar.",
        "en": "When a non-volatile solid is added, the vapor pressure of the solution increases.",
        "de": "Bei Zugabe eines nichtflüchtigen Feststoffs erhöht sich der Dampfdruck der Lösung.",
        "fr": "Lorsqu'un solide non volatil est ajouté, la pression de vapeur de la solution augmente.",
        "ru": "При добавлении нелетучего твердого вещества давление паров раствора увеличивается.",
        "ar": "عند إضافة مادة صلبة غير متطايرة، يزداد ضغط بخار المحلول.",
        "zh": "当添加非挥发性固体时，溶液的蒸气压增加。",
        "ku": "Dema ku ziravek nehêle tê zêdekirin, zexta buharê ya çareseriyê zêde dibe."
      }
    },
    {
      "id": "u15-f06",
      "fact": {
        "tr": "Ozmotik basınç, yarı geçirgen zardan saf çözücünün derişik çözeltiye geçişini durdurmak için gereken basınçtır.",
        "en": "Osmotic pressure is the pressure required to stop the transition of pure solvent to concentrated solution through the semi-permeable membrane.",
        "de": "Der osmotische Druck ist der Druck, der erforderlich ist, um den Übergang des reinen Lösungsmittels in die konzentrierte Lösung durch die semipermeable Membran zu stoppen.",
        "fr": "La pression osmotique est la pression nécessaire pour arrêter la transition du solvant pur vers la solution concentrée à travers la membrane semi-perméable.",
        "ru": "Осмотическое давление — это давление, необходимое для прекращения перехода чистого растворителя в концентрированный раствор через полупроницаемую мембрану.",
        "ar": "الضغط الأسموزي هو الضغط المطلوب لوقف انتقال المذيب النقي إلى المحلول المركز من خلال الغشاء شبه المنفذ.",
        "zh": "渗透压是阻止纯溶剂通过半透膜转变为浓溶液所需的压力。",
        "ku": "Zexta osmotîk zexta pêdivî ye ku ji bo rawestandina veguheztina rûnê safî ber bi çareseriya konsantrekirî ve di nav perdeya nîv-permeable de ye."
      },
      "trap": {
        "tr": "Ozmozda çözünen katı tanecikler zardan kolayca geçer.",
        "en": "Solid particles dissolved in osmosis easily pass through the membrane.",
        "de": "Bei der Osmose gelöste Feststoffpartikel passieren die Membran problemlos.",
        "fr": "Les particules solides dissoutes par osmose traversent facilement la membrane.",
        "ru": "Твердые частицы, растворенные при осмосе, легко проходят через мембрану.",
        "ar": "تمر الجزيئات الصلبة الذائبة في التناضح بسهولة عبر الغشاء.",
        "zh": "渗透溶解的固体颗粒很容易穿过膜。",
        "ku": "Parçeyên hişk ên ku di osmosê de têne hilweşandin bi hêsanî di parzûnê re derbas dibin."
      }
    },
    {
      "id": "u15-f07",
      "fact": {
        "tr": "Kışın yollara tuz atılması suyun donma noktasını alçaltarak buzlanmayı önleme uygulamasıdır.",
        "en": "Sprinkling salt on the roads in winter is a practice to prevent icing by lowering the freezing point of water.",
        "de": "Das Streuen von Salz auf die Straßen im Winter ist eine Praxis, um Vereisung zu verhindern, indem der Gefrierpunkt des Wassers gesenkt wird.",
        "fr": "Saupoudrer du sel sur les routes en hiver est une pratique visant à prévenir le givrage en abaissant le point de congélation de l'eau.",
        "ru": "Посыпание дорог солью зимой – это практика предотвращения обледенения за счет снижения температуры замерзания воды.",
        "ar": "يعد رش الملح على الطرق في الشتاء ممارسة لمنع تكون الجليد عن طريق خفض درجة تجمد الماء.",
        "zh": "冬季在道路上撒盐是通过降低水的冰点来防止结冰的做法。",
        "ku": "Di zivistanê de rijandina xwê li ser rêyan ji bo pêşîlêgirtina qeşayê bi kêmkirina xala cemidandinê ya avê, pratîkek e."
      },
      "trap": {
        "tr": "Yollara tuz atılması tuzun kimyasal reaksiyonla ısı açığa çıkarması içindir.",
        "en": "Throwing salt on the roads causes the salt to release heat through a chemical reaction.",
        "de": "Das Streuen von Salz auf die Straße führt dazu, dass das Salz durch eine chemische Reaktion Wärme freisetzt.",
        "fr": "Jeter du sel sur les routes provoque la libération de chaleur par une réaction chimique.",
        "ru": "Рассыпание соли на дорогах приводит к тому, что соль выделяет тепло в результате химической реакции.",
        "ar": "يؤدي رمي الملح على الطرق إلى إطلاق الملح للحرارة من خلال تفاعل كيميائي.",
        "zh": "在路上撒盐会使盐通过化学反应释放热量。",
        "ku": "Avêtina xwê li ser rêyan dibe sedem ku xwê bi reaksiyonek kîmyayî germê berde."
      }
    },
    {
      "id": "u15-f08",
      "fact": {
        "tr": "Otomobil radyatörlerine antifriz (etilen glikol) konması hem donmayı önler hem de kaynama noktasını yükseltir.",
        "en": "Putting antifreeze (ethylene glycol) in automobile radiators prevents freezing and increases the boiling point.",
        "de": "Das Einbringen von Frostschutzmittel (Ethylenglykol) in Autokühler verhindert das Einfrieren und erhöht den Siedepunkt.",
        "fr": "Mettre de l'antigel (éthylène glycol) dans les radiateurs des automobiles empêche le gel et augmente le point d'ébullition.",
        "ru": "Заливка антифриза (этиленгликоля) в автомобильные радиаторы предотвращает замерзание и повышает температуру кипения.",
        "ar": "إن وضع مادة مضادة للتجمد (إيثيلين جلايكول) في مشعات السيارات يمنع التجمد ويزيد من درجة الغليان.",
        "zh": "在汽车散热器中加入防冻剂（乙二醇）可以防止结冰并提高沸点。",
        "ku": "Di radyatorên otomobîlan de danîna antîfrezê (etilen glycol) pêşî li cemiandinê digire û xala kelandinê zêde dike."
      },
      "trap": {
        "tr": "Antifriz suyun donma noktasını 0 °C'nin üzerine çıkarır.",
        "en": "Antifreeze raises the freezing point of water above 0 °C.",
        "de": "Frostschutzmittel erhöhen den Gefrierpunkt von Wasser über 0 °C.",
        "fr": "L'antigel élève le point de congélation de l'eau au-dessus de 0 °C.",
        "ru": "Антифриз повышает температуру замерзания воды выше 0 °C.",
        "ar": "يعمل مضاد التجمد على رفع درجة تجمد الماء إلى ما فوق 0 درجة مئوية.",
        "zh": "防冻剂可将水的冰点提高到 0 °C 以上。",
        "ku": "Antîfrîz xala cemidandinê ya avê ji 0 °C bilind dike."
      }
    },
    {
      "id": "u15-f09",
      "fact": {
        "tr": "Çözünürlük, 100 gram çözücüde belirli sıcaklık ve basınçta çözünebilen maksimum madde miktarıdır.",
        "en": "Solubility is the maximum amount of substance that can dissolve in 100 grams of solvent at a certain temperature and pressure.",
        "de": "Unter Löslichkeit versteht man die maximale Stoffmenge, die sich bei einer bestimmten Temperatur und einem bestimmten Druck in 100 Gramm Lösungsmittel lösen kann.",
        "fr": "La solubilité est la quantité maximale de substance pouvant se dissoudre dans 100 grammes de solvant à une certaine température et pression.",
        "ru": "Растворимость – это максимальное количество вещества, которое может раствориться в 100 граммах растворителя при определенной температуре и давлении.",
        "ar": "الذوبان هو الحد الأقصى لكمية المادة التي يمكن أن تذوب في 100 جرام من المذيب عند درجة حرارة وضغط معينين.",
        "zh": "溶解度是在一定温度和压力下，物质在100克溶剂中所能溶解的最大量。",
        "ku": "Çareserî ew maddeya herî zêde ye ku dikare di 100 gram halvekê de di germahî û zextek diyar de bihele."
      },
      "trap": {
        "tr": "Çözünürlük 1 litre çözeltide çözünen katı gramıdır.",
        "en": "Solubility is the gram of solid dissolved in 1 liter of solution.",
        "de": "Die Löslichkeit ist das Gramm Feststoff, gelöst in 1 Liter Lösung.",
        "fr": "La solubilité est le gramme de solide dissous dans 1 litre de solution.",
        "ru": "Растворимость – это грамм твердого вещества, растворенного в 1 л раствора.",
        "ar": "الذوبان هو جرام المادة الصلبة المذابة في 1 لتر من المحلول.",
        "zh": "溶解度是溶解在 1 升溶液中的固体克数。",
        "ku": "Çareserbûn gram e ku di 1 lîtreya haletê de tê helandin."
      }
    },
    {
      "id": "u15-f10",
      "fact": {
        "tr": "Katıların sudaki çözünürlüğü genellikle endotermiktir (sıcaklık arttıkça artar); gazların çözünürlüğü daima ekzotermiktir.",
        "en": "The solubility of solids in water is generally endothermic (increases with increasing temperature); The solubility of gases is always exothermic.",
        "de": "Die Löslichkeit von Feststoffen in Wasser ist im Allgemeinen endotherm (steigt mit steigender Temperatur); Die Löslichkeit von Gasen ist immer exotherm.",
        "fr": "La solubilité des solides dans l'eau est généralement endothermique (augmente avec l'augmentation de la température) ; La solubilité des gaz est toujours exothermique.",
        "ru": "Растворимость твердых веществ в воде обычно эндотермична (увеличивается с повышением температуры); Растворимость газов всегда экзотермична.",
        "ar": "تكون قابلية ذوبان المواد الصلبة في الماء عمومًا ماصة للحرارة (تزداد مع زيادة درجة الحرارة)؛ إن ذوبان الغازات دائمًا ما يكون طاردًا للحرارة.",
        "zh": "固体在水中的溶解度通常是吸热的（随着温度的升高而增加）；气体的溶解度总是放热的。",
        "ku": "Çareserbûna maddeyên hişk di avê de bi gelemperî endotermîk e (bi zêdebûna germahiyê re zêde dibe); Çareserbûna gazan her dem germ e."
      },
      "trap": {
        "tr": "Gazların sudaki çözünürlüğü sıcaklık arttıkça hızla artar.",
        "en": "The solubility of gases in water increases rapidly as temperature increases.",
        "de": "Die Löslichkeit von Gasen in Wasser nimmt mit steigender Temperatur schnell zu.",
        "fr": "La solubilité des gaz dans l’eau augmente rapidement à mesure que la température augmente.",
        "ru": "Растворимость газов в воде быстро возрастает с повышением температуры.",
        "ar": "تزداد قابلية ذوبان الغازات في الماء بسرعة مع زيادة درجة الحرارة.",
        "zh": "气体在水中的溶解度随着温度的升高而迅速增加。",
        "ku": "Her ku germahî zêde dibe di avê de helbûna gazan bi lez zêde dibe."
      }
    },
    {
      "id": "u15-f11",
      "fact": {
        "tr": "Gazların sudaki çözünürlüğü basınç arttıkça artar (Henry Yasası; gazlı içeceklerin soğuk ve kapalı tutulması).",
        "en": "The solubility of gases in water increases as pressure increases (Henry's Law; keeping carbonated drinks cold and covered).",
        "de": "Die Löslichkeit von Gasen in Wasser nimmt mit zunehmendem Druck zu (Henrys Gesetz; kohlensäurehaltige Getränke kalt und abgedeckt halten).",
        "fr": "La solubilité des gaz dans l'eau augmente à mesure que la pression augmente (loi de Henry : garder les boissons gazeuses froides et couvertes).",
        "ru": "Растворимость газов в воде увеличивается с увеличением давления (закон Генри; храните газированные напитки холодными и закрытыми).",
        "ar": "تزداد ذوبان الغازات في الماء مع زيادة الضغط (قانون هنري؛ حفظ المشروبات الغازية باردة ومغطاة).",
        "zh": "气体在水中的溶解度随着压力的增加而增加（亨利定律；保持碳酸饮料冷藏并盖上盖子）。",
        "ku": "Bi zêdebûna zextê re helbûna gazên di avê de zêde dibe (Qanûna Henry; vexwarinên karbonatkirî sar û nixumandî hiştin)."
      },
      "trap": {
        "tr": "Basınç arttıkça gazların çözünürlüğü azalır.",
        "en": "As pressure increases, the solubility of gases decreases.",
        "de": "Mit zunehmendem Druck nimmt die Löslichkeit von Gasen ab.",
        "fr": "À mesure que la pression augmente, la solubilité des gaz diminue.",
        "ru": "С увеличением давления растворимость газов снижается.",
        "ar": "مع زيادة الضغط، تنخفض ذوبان الغازات.",
        "zh": "随着压力增加，气体的溶解度降低。",
        "ku": "Her ku zext zêde dibe, helbûna gazan kêm dibe."
      }
    },
    {
      "id": "u15-f12",
      "fact": {
        "tr": "Katı ve sıvıların çözünürlüğüne basıncın etkisi ihmal edilecek kadar azdır.",
        "en": "The effect of pressure on the solubility of solids and liquids is negligible.",
        "de": "Der Einfluss des Drucks auf die Löslichkeit von Feststoffen und Flüssigkeiten ist vernachlässigbar.",
        "fr": "L'effet de la pression sur la solubilité des solides et des liquides est négligeable.",
        "ru": "Влияние давления на растворимость твердых тел и жидкостей незначительно.",
        "ar": "تأثير الضغط على ذوبان المواد الصلبة والسوائل لا يكاد يذكر.",
        "zh": "压力对固体和液体溶解度的影响可以忽略不计。",
        "ku": "Bandora zextê ya li ser helbûna maddeyên hişk û şilek kêm e."
      },
      "trap": {
        "tr": "Tuzun sudaki çözünürlüğü yüksek basınçta iki katına çıkar.",
        "en": "The solubility of salt in water doubles at high pressure.",
        "de": "Bei hohem Druck verdoppelt sich die Löslichkeit von Salz in Wasser.",
        "fr": "La solubilité du sel dans l’eau double à haute pression.",
        "ru": "Растворимость соли в воде удваивается при высоком давлении.",
        "ar": "تتضاعف ذوبان الملح في الماء عند الضغط العالي.",
        "zh": "在高压下盐在水中的溶解度加倍。",
        "ku": "Di tansiyona bilind de helbûna xwê ya di avê de duqat dibe."
      }
    },
    {
      "id": "u15-f13",
      "fact": {
        "tr": "Ortak iyon etkisi çözünürlüğü daima azaltır (Le Chatelier prensibi).",
        "en": "The common ion effect always reduces the solubility (Le Chatelier's principle).",
        "de": "Der gemeinsame Ioneneffekt verringert immer die Löslichkeit (Prinzip von Le Chatelier).",
        "fr": "L'effet des ions communs réduit toujours la solubilité (principe de Le Chatelier).",
        "ru": "Эффект общего иона всегда снижает растворимость (принцип Ле Шателье).",
        "ar": "إن تأثير الأيون المشترك يقلل دائمًا من قابلية الذوبان (مبدأ لو شاتيليه).",
        "zh": "共离子效应总是会降低溶解度（勒夏特列原理）。",
        "ku": "Bandora îyona hevpar her gav çareserbûnê kêm dike (prensîba Le Chatelier)."
      },
      "trap": {
        "tr": "Ortak iyon bulunan çözeltide tuz daha çok çözünür.",
        "en": "Salt is more soluble in a solution with common ions.",
        "de": "Salz ist in einer Lösung mit gewöhnlichen Ionen besser löslich.",
        "fr": "Le sel est plus soluble dans une solution contenant des ions communs.",
        "ru": "Соль лучше растворяется в растворе с общими ионами.",
        "ar": "يكون الملح أكثر قابلية للذوبان في المحلول الذي يحتوي على الأيونات الشائعة.",
        "zh": "盐在具有普通离子的溶液中更易溶解。",
        "ku": "Xwê di çareyek bi îyonên hevpar de zêdetir tê çareserkirin."
      }
    },
    {
      "id": "u15-f14",
      "fact": {
        "tr": "Çözeltideki toplam iyon derişimi ne kadar büyükse donma noktası o kadar düşük, kaynama noktası o kadar yüksektir.",
        "en": "The greater the total ion concentration in the solution, the lower the freezing point and the higher the boiling point.",
        "de": "Je höher die Gesamtionenkonzentration in der Lösung ist, desto niedriger ist der Gefrierpunkt und desto höher ist der Siedepunkt.",
        "fr": "Plus la concentration totale d’ions dans la solution est élevée, plus le point de congélation est bas et plus le point d’ébullition est élevé.",
        "ru": "Чем больше общая концентрация ионов в растворе, тем ниже температура замерзания и выше температура кипения.",
        "ar": "كلما زاد تركيز الأيونات الكلي في المحلول، انخفضت نقطة التجمد وارتفعت نقطة الغليان.",
        "zh": "溶液中总离子浓度越大，凝固点越低，沸点越高。",
        "ku": "Çi qas îyona giştî ya di çareseriyê de mezintir be, ew qas nuqteya cemidandinê kêmtir û xala kelandinê jî bilindtir dibe."
      },
      "trap": {
        "tr": "Eşit derişimli NaCl ve AlCl3 çözeltilerinin kaynama noktaları aynıdır.",
        "en": "Boiling points of equal concentrations of NaCl and AlCl3 solutions are the same.",
        "de": "Die Siedepunkte gleicher Konzentrationen von NaCl- und AlCl3-Lösungen sind gleich.",
        "fr": "Les points d'ébullition de concentrations égales de solutions NaCl et AlCl3 sont les mêmes.",
        "ru": "Температуры кипения растворов NaCl и AlCl3 равных концентраций одинаковы.",
        "ar": "نقاط غليان التركيزات المتساوية من محاليل NaCl وAlCl3 هي نفسها.",
        "zh": "等浓度的 NaCl 和 AlCl3 溶液的沸点相同。",
        "ku": "Xalên kelandinê yên pîvazên wekhev ên çareseriyên NaCl û AlCl3 yek in."
      }
    },
    {
      "id": "u15-f15",
      "fact": {
        "tr": "Doygunluk: Çözebileceği kadar çözünen içeren çözelti doygundur; aşırı doygun çözeltiler kararsızdır ve aşı kristaliyle çöker.",
        "en": "Saturation: A solution that contains as much solute as it can dissolve is saturated; Supersaturated solutions are unstable and precipitate with the seed crystal.",
        "de": "Sättigung: Eine Lösung, die so viel gelösten Stoff enthält, wie sie lösen kann, ist gesättigt; Übersättigte Lösungen sind instabil und fallen mit dem Impfkristall aus.",
        "fr": "Saturation : Une solution qui contient autant de soluté qu’elle peut se dissoudre est saturée ; Les solutions sursaturées sont instables et précipitent avec les germes cristallins.",
        "ru": "Насыщение: раствор, который содержит столько растворенного вещества, сколько он может растворить, является насыщенным; Пересыщенные растворы нестабильны и выпадают в осадок вместе с затравочными кристаллами.",
        "ar": "التشبع: المحلول الذي يحتوي على أكبر قدر ممكن من المذاب يكون مشبعًا؛ المحاليل المفرطة التشبع غير مستقرة وتترسب مع بلورة البذور.",
        "zh": "饱和：含有尽可能多的溶质的溶液是饱和的；过饱和溶液不稳定并与晶种一起沉淀。",
        "ku": "Têrbûn: Çareya ku tê de bi qasî ku dikare bihelîne, têrbûyî ye; Çareseriyên zêde têrbûyî bêîstîkrar in û bi krîstala tovê re diherikin."
      },
      "trap": {
        "tr": "Aşırı doygun çözelti sonsuza kadar kararlı kalan dengeli sistemdir.",
        "en": "A supersaturated solution is a balanced system that remains stable forever.",
        "de": "Eine übersättigte Lösung ist ein ausgeglichenes System, das für immer stabil bleibt.",
        "fr": "Une solution sursaturée est un système équilibré qui reste stable pour toujours.",
        "ru": "Пересыщенный раствор — это сбалансированная система, которая остается стабильной навсегда.",
        "ar": "المحلول المفرط التشبع هو نظام متوازن يظل مستقرًا إلى الأبد.",
        "zh": "过饱和溶液是一个永远保持稳定的平衡系统。",
        "ku": "Çareseriya pir têrbûyî pergalek hevseng e ku her û her aram dimîne."
      }
    },
    {
      "id": "u15-f16",
      "fact": {
        "tr": "Gazoz kapağı açıldığında basınç düştüğü için CO2 gazı kabarcıklar halinde çözeltiden ayrılır.",
        "en": "When the soda cap is opened, CO2 gas leaves the solution in the form of bubbles as the pressure drops.",
        "de": "Wenn der Soda-Verschluss geöffnet wird, verlässt CO2-Gas die Lösung in Form von Blasen, da der Druck sinkt.",
        "fr": "Lorsque le bouchon de soude est ouvert, le gaz CO2 quitte la solution sous forme de bulles à mesure que la pression chute.",
        "ru": "Когда крышка газировки открыта, газ CO2 выходит из раствора в виде пузырьков при падении давления.",
        "ar": "عند فتح غطاء الصودا، يترك غاز ثاني أكسيد الكربون المحلول على شكل فقاعات مع انخفاض الضغط.",
        "zh": "当汽水盖打开时，随着压力下降，CO2 气体以气泡的形式离开溶液。",
        "ku": "Dema ku kapika sodayê tê vekirin, gaza CO2 ji çareseriyê di şiklê bilbilan de derdikeve ku zext dakeve."
      },
      "trap": {
        "tr": "Kapak açıldığında CO2'nin çözünürlüğü artar.",
        "en": "When the lid is opened, the solubility of CO2 increases.",
        "de": "Beim Öffnen des Deckels erhöht sich die Löslichkeit von CO2.",
        "fr": "Lorsque le couvercle est ouvert, la solubilité du CO2 augmente.",
        "ru": "При открытии крышки растворимость CO2 увеличивается.",
        "ar": "عند فتح الغطاء، تزداد ذوبان ثاني أكسيد الكربون.",
        "zh": "当盖子打开时，CO2 的溶解度增加。",
        "ku": "Dema ku qapax tê vekirin, çareserbûna CO2 zêde dibe."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u15-c01",
      "conceptA": {
        "tr": "Kaynama Noktası Yükselmesi",
        "en": "Boiling Point Elevation",
        "de": "Siedepunkterhöhung",
        "fr": "Élévation du point d'ébullition",
        "ru": "Повышение температуры кипения",
        "ar": "ارتفاع نقطة الغليان",
        "zh": "沸点升高",
        "ku": "Bilindbûna xala kelandinê"
      },
      "conceptB": {
        "tr": "Donma Noktası Alçalması",
        "en": "Freezing Point Depression",
        "de": "Gefrierpunktserniedrigung",
        "fr": "Dépression du point de congélation",
        "ru": "Депрессия точки замерзания",
        "ar": "اكتئاب نقطة التجمد",
        "zh": "冰点降低",
        "ku": "Xala cemidandinê depresyonê"
      },
      "distinction": {
        "tr": "Çözünen tanecik derişimi arttıkça kaynama noktası yükselir, donma noktası alçalır.",
        "en": "As the solute particle concentration increases, the boiling point increases and the freezing point decreases.",
        "de": "Mit zunehmender Konzentration gelöster Teilchen steigt der Siedepunkt und der Gefrierpunkt sinkt.",
        "fr": "À mesure que la concentration de particules de soluté augmente, le point d’ébullition augmente et le point de congélation diminue.",
        "ru": "По мере увеличения концентрации растворенных частиц температура кипения увеличивается, а точка замерзания снижается.",
        "ar": "ومع زيادة تركيز الجسيمات المذابة، تزداد درجة الغليان وتقل نقطة التجمد.",
        "zh": "随着溶质颗粒浓度的增加，沸点升高，凝固点降低。",
        "ku": "Her ku tansiyona pariyên solare zêde dibe, xala kelandinê zêde dibe û xala cemidandinê kêm dibe."
      }
    },
    {
      "id": "u15-c02",
      "conceptA": {
        "tr": "Endotermik Çözünme",
        "en": "Endothermic Dissolution",
        "de": "Endotherme Auflösung",
        "fr": "Dissolution endothermique",
        "ru": "Эндотермическое растворение",
        "ar": "الذوبان الماص للحرارة",
        "zh": "吸热溶解",
        "ku": "Hilweşîna endotermîk"
      },
      "conceptB": {
        "tr": "Ekzotermik Çözünme",
        "en": "Exothermic Dissolution",
        "de": "Exotherme Auflösung",
        "fr": "Dissolution exothermique",
        "ru": "Экзотермическое растворение",
        "ar": "الذوبان الطارد للحرارة",
        "zh": "放热溶解",
        "ku": "Belavbûna Exotermîk"
      },
      "distinction": {
        "tr": "Endotermikte sıcaklık arttıkça çözünürlük artar; ekzotermikte sıcaklık arttıkça çözünürlük azalır.",
        "en": "In endothermics, solubility increases as temperature increases; In exothermic conditions, solubility decreases as temperature increases.",
        "de": "Bei der Endothermie nimmt die Löslichkeit mit steigender Temperatur zu; Unter exothermen Bedingungen nimmt die Löslichkeit mit steigender Temperatur ab.",
        "fr": "En endothermie, la solubilité augmente à mesure que la température augmente ; Dans des conditions exothermiques, la solubilité diminue à mesure que la température augmente.",
        "ru": "В эндотермических процессах растворимость увеличивается с повышением температуры; В экзотермических условиях растворимость снижается с повышением температуры.",
        "ar": "في المواد الماصة للحرارة، تزداد القابلية للذوبان مع زيادة درجة الحرارة؛ في الظروف الطاردة للحرارة، تنخفض القابلية للذوبان مع زيادة درجة الحرارة.",
        "zh": "在吸热反应中，溶解度随着温度的升高而增加；在放热条件下，溶解度随着温度升高而降低。",
        "ku": "Di endotermîkan de, her ku germahî zêde dibe çareserî zêde dibe; Di şert û mercên exotermîk de, her ku germahî zêde dibe, çareserî kêm dibe."
      }
    },
    {
      "id": "u15-c03",
      "conceptA": {
        "tr": "Kaynama Noktası Yükselmesi (Delta Tk)",
        "en": "Boiling Point Elevation (Delta Tk)",
        "de": "Siedepunkterhöhung (Delta Tk)",
        "fr": "Élévation du point d'ébullition (Delta Tk)",
        "ru": "Повышение температуры кипения (дельта Tk)",
        "ar": "ارتفاع نقطة الغليان (دلتا تك)",
        "zh": "沸点高度 (Delta Tk)",
        "ku": "Bilindbûna xala kelandinê (Delta Tk)"
      },
      "conceptB": {
        "tr": "Donma Noktası Alçalması (Delta Td)",
        "en": "Freezing Point Depression (Delta Td)",
        "de": "Gefrierpunktserniedrigung (Delta Td)",
        "fr": "Dépression du point de congélation (Delta Td)",
        "ru": "Понижение точки замерзания (Delta Td)",
        "ar": "انخفاض نقطة التجمد (Delta Td)",
        "zh": "冰点降低（Delta Td）",
        "ku": "Depresyona Xala cemidandinê (Delta Td)"
      },
      "distinction": {
        "tr": "Uçucu olmayan çözünen kaynama noktasını yükseltir (Tk artar); aynı çözünen donma noktasını alçaltır (Td düşer).",
        "en": "Non-volatile solute increases boiling point (Tk increases); the same solute lowers its freezing point (Td decreases).",
        "de": "Nichtflüchtiger gelöster Stoff erhöht den Siedepunkt (Tk steigt); Derselbe gelöste Stoff senkt seinen Gefrierpunkt (Td nimmt ab).",
        "fr": "Le soluté non volatil augmente le point d'ébullition (Tk augmente) ; le même soluté abaisse son point de congélation (Td diminue).",
        "ru": "Нелетучее растворенное вещество повышает температуру кипения (увеличивается Tk); то же самое растворенное вещество понижает температуру замерзания (Td уменьшается).",
        "ar": "المذاب غير المتطاير يزيد من درجة الغليان (يزيد Tk)؛ نفس المذاب يخفض نقطة التجمد (ينخفض ​​Td).",
        "zh": "不挥发性溶质增加沸点（Tk增加）；相同的溶质会降低其凝固点（Td 降低）。",
        "ku": "Çareseriya ne-volatile xala kelînê zêde dike (Tk zêde dibe); Heman sol xala cemidandinê dadixe (Td kêm dibe)."
      }
    },
    {
      "id": "u15-c04",
      "conceptA": {
        "tr": "Van t Hoff Faktörü (i)",
        "en": "Van t Hoff Factor (i)",
        "de": "Van-t-Hoff-Faktor (i)",
        "fr": "Facteur de Van t Hoff (i)",
        "ru": "Фактор Ван-т-Гоффа (i)",
        "ar": "عامل فان تي هوف (i)",
        "zh": "范特霍夫因子 (i)",
        "ku": "Faktora Van t Hoff (i)"
      },
      "conceptB": {
        "tr": "Molal Derişim (m)",
        "en": "Molal Concentration (m)",
        "de": "Molale Konzentration (m)",
        "fr": "Concentration molale (m)",
        "ru": "Моляльная концентрация (м)",
        "ar": "التركيز المولي (م)",
        "zh": "摩尔浓度 (m)",
        "ku": "Kombûna Molal (m)"
      },
      "distinction": {
        "tr": "Van t Hoff faktörü çözeltideki tanecik sayısıdır (glukoz=1, NaCl=2); molal derişim çözücü kütlesine oranlanan moldür.",
        "en": "Van t Hoff factor is the number of particles in the solution (glucose=1, NaCl=2); molal concentration is the moles divided by the mass of solvent.",
        "de": "Der Van-t-Hoff-Faktor ist die Anzahl der Partikel in der Lösung (Glukose=1, NaCl=2); Die Molkonzentration ist die Molzahl dividiert durch die Masse des Lösungsmittels.",
        "fr": "Le facteur Van t Hoff est le nombre de particules dans la solution (glucose=1, NaCl=2) ; la concentration molaire correspond au nombre de moles divisées par la masse de solvant.",
        "ru": "Фактор Ван-т-Гоффа – количество частиц в растворе (глюкоза=1, NaCl=2); молярная концентрация равна молям, разделенным на массу растворителя.",
        "ar": "عامل فان تي هوف هو عدد الجزيئات في المحلول (الجلوكوز = 1، كلوريد الصوديوم = 2)؛ التركيز المولي هو عدد الشامات مقسومًا على كتلة المذيب.",
        "zh": "Van t Hoff 因子是溶液中颗粒的数量（葡萄糖=1，NaCl=2）；摩尔浓度是摩尔数除以溶剂的质量。",
        "ku": "Faktora Van t Hoff hejmara keriyên di haletê de ye (glukoz=1, NaCl=2); kombûna molal ew mol e ku bi girseya helikê ve tê dabeş kirin."
      }
    },
    {
      "id": "u15-c05",
      "conceptA": {
        "tr": "Raoult Yasası",
        "en": "Raoult's Law",
        "de": "Raoults Gesetz",
        "fr": "La loi de Raoult",
        "ru": "Закон Рауля",
        "ar": "قانون راؤول",
        "zh": "拉乌尔定律",
        "ku": "Qanûna Raoult"
      },
      "conceptB": {
        "tr": "Henry Yasası",
        "en": "Henry's Law",
        "de": "Henrys Gesetz",
        "fr": "La loi de Henry",
        "ru": "Закон Генри",
        "ar": "قانون هنري",
        "zh": "亨利定律",
        "ku": "Qanûna Henry"
      },
      "distinction": {
        "tr": "Raoult yasası çözeltinin buhar basıncının çözücü mol kesriyle çarpımını; Henry yasası gazın sudaki çözünürlüğünün kısmi basınçla oranını açıklar.",
        "en": "Raoult's law is the product of the vapor pressure of the solution by the mole fraction of the solvent; Henry's law describes the ratio of the solubility of a gas in water to the partial pressure.",
        "de": "Das Gesetz von Raoult ist das Produkt aus dem Dampfdruck der Lösung und dem Molenbruch des Lösungsmittels. Das Henrysche Gesetz beschreibt das Verhältnis der Löslichkeit eines Gases in Wasser zum Partialdruck.",
        "fr": "La loi de Raoult est le produit de la pression de vapeur de la solution par la fraction molaire du solvant ; La loi de Henry décrit le rapport entre la solubilité d'un gaz dans l'eau et sa pression partielle.",
        "ru": "Закон Рауля представляет собой произведение давления паров раствора на мольную долю растворителя; Закон Генри описывает отношение растворимости газа в воде к парциальному давлению.",
        "ar": "قانون راؤول هو نتاج ضغط بخار المحلول بواسطة الكسر المولي للمذيب؛ يصف قانون هنري نسبة ذوبان الغاز في الماء إلى الضغط الجزئي.",
        "zh": "拉乌尔定律是溶液的蒸气压与溶剂的摩尔分数的乘积；亨利定律描述了气体在水中的溶解度与分压的比率。",
        "ku": "Zagona Raoult berhema tansiyona buharê ya çareyê ye ku ji aliyê pariya molê ya helikê ve; Zagona Henry rêjeya çareserbûna gazê ya di avê de bi zexta qismî re diyar dike."
      }
    },
    {
      "id": "u15-c06",
      "conceptA": {
        "tr": "Ozmotik Basınç",
        "en": "Osmotic Pressure",
        "de": "Osmotischer Druck",
        "fr": "Pression osmotique",
        "ru": "Осмотическое давление",
        "ar": "الضغط الأسموزي",
        "zh": "渗透压",
        "ku": "Zexta Osmotîk"
      },
      "conceptB": {
        "tr": "Ters Ozmoz",
        "en": "Reverse Osmosis",
        "de": "Umkehrosmose",
        "fr": "Osmose inverse",
        "ru": "Обратный осмос",
        "ar": "التناضح العكسي",
        "zh": "反渗透",
        "ku": "Reverse Osmosis"
      },
      "distinction": {
        "tr": "Ozmotik basınç suyun yarı geçirgen zardan derişik tarafa geçme isteğidir; ters ozmoz basınç uygulayarak tuzlu sudan saf su elde etmektir.",
        "en": "Osmotic pressure is the desire of water to move from the semi-permeable membrane to the concentrated side; Reverse osmosis is to obtain pure water from salt water by applying pressure.",
        "de": "Osmotischer Druck ist der Wunsch des Wassers, sich von der semipermeablen Membran zur konzentrierten Seite zu bewegen; Bei der Umkehrosmose wird aus Salzwasser durch Druckanwendung reines Wasser gewonnen.",
        "fr": "La pression osmotique est le désir de l'eau de passer de la membrane semi-perméable au côté concentré ; L'osmose inverse consiste à obtenir de l'eau pure à partir d'eau salée en appliquant une pression.",
        "ru": "Осмотическое давление — стремление воды перейти из полупроницаемой мембраны в концентрированную сторону; Обратный осмос предназначен для получения чистой воды из соленой воды под давлением.",
        "ar": "الضغط الاسموزي هو رغبة الماء في الانتقال من الغشاء شبه المنفذ إلى الجانب المركز؛ التناضح العكسي هو الحصول على الماء النقي من الماء المالح عن طريق الضغط.",
        "zh": "渗透压是水从半透膜移动到浓缩侧的愿望；反渗透是通过施加压力从盐水中获得纯净水。",
        "ku": "Zexta osmotîk xwesteka avê ye ku ji parzûna nîv-permeable ber bi aliyê konsantrekirî ve biçe; Osmoza berevajî ew e ku bi pêkanîna zextê ji ava şor ava paqij were bidestxistin."
      }
    },
    {
      "id": "u15-c07",
      "conceptA": {
        "tr": "Doymamış Çözelti",
        "en": "Unsaturated Solution",
        "de": "Ungesättigte Lösung",
        "fr": "Solution insaturée",
        "ru": "Ненасыщенный раствор",
        "ar": "محلول غير مشبع",
        "zh": "不饱和溶液",
        "ku": "Çareseriya bêtêr"
      },
      "conceptB": {
        "tr": "Aşırı Doymuş Çözelti",
        "en": "Supersaturated Solution",
        "de": "Übersättigte Lösung",
        "fr": "Solution sursaturée",
        "ru": "Перенасыщенный раствор",
        "ar": "محلول مفرط التشبع",
        "zh": "过饱和溶液",
        "ku": "Çareseriya Supersaturated"
      },
      "distinction": {
        "tr": "Doymamış çözelti daha fazla katı çözebilir; aşırı doymuş çözelti geçici olarak fazlasını tutan kararsız sistemdir.",
        "en": "The unsaturated solution can dissolve more solids; A supersaturated solution is an unstable system that temporarily retains excess.",
        "de": "Die ungesättigte Lösung kann mehr Feststoffe lösen; Eine übersättigte Lösung ist ein instabiles System, das vorübergehend Überschüsse zurückhält.",
        "fr": "La solution insaturée peut dissoudre plus de solides ; Une solution sursaturée est un système instable qui retient temporairement l'excès.",
        "ru": "Ненасыщенный раствор может растворять больше твердых веществ; Пересыщенный раствор – нестабильная система, временно сохраняющая избыток.",
        "ar": "يمكن للمحلول غير المشبع أن يذيب المزيد من المواد الصلبة؛ المحلول المفرط التشبع هو نظام غير مستقر يحتفظ بالفائض مؤقتًا.",
        "zh": "不饱和溶液可以溶解更多的固体；过饱和溶液是一种不稳定的系统，会暂时保留过量的溶液。",
        "ku": "Çareseriya ne têrbûyî dikare zêdetir maddeyên hişk bihelîne; Çareseriya pir têrbûyî pergalek bêhêz e ku bi demkî zêdebûnê diparêze."
      }
    },
    {
      "id": "u15-c08",
      "conceptA": {
        "tr": "Kaynama Noktası Yükselmesi",
        "en": "Boiling Point Elevation",
        "de": "Siedepunkterhöhung",
        "fr": "Élévation du point d'ébullition",
        "ru": "Повышение температуры кипения",
        "ar": "ارتفاع نقطة الغليان",
        "zh": "沸点升高",
        "ku": "Bilindbûna xala kelandinê"
      },
      "conceptB": {
        "tr": "Donma Noktası Alçalması",
        "en": "Freezing Point Depression",
        "de": "Gefrierpunktserniedrigung",
        "fr": "Dépression du point de congélation",
        "ru": "Депрессия точки замерзания",
        "ar": "اكتئاب نقطة التجمد",
        "zh": "冰点降低",
        "ku": "Xala cemidandinê depresyonê"
      },
      "distinction": {
        "tr": "Çözünen tanecik derişimi arttıkça kaynama noktası yükselir, donma noktası alçalır.",
        "en": "As the solute particle concentration increases, the boiling point increases and the freezing point decreases.",
        "de": "Mit zunehmender Konzentration gelöster Teilchen steigt der Siedepunkt und der Gefrierpunkt sinkt.",
        "fr": "À mesure que la concentration de particules de soluté augmente, le point d’ébullition augmente et le point de congélation diminue.",
        "ru": "По мере увеличения концентрации растворенных частиц температура кипения увеличивается, а точка замерзания снижается.",
        "ar": "ومع زيادة تركيز الجسيمات المذابة، تزداد درجة الغليان وتقل نقطة التجمد.",
        "zh": "随着溶质颗粒浓度的增加，沸点升高，凝固点降低。",
        "ku": "Her ku tansiyona pariyên solare zêde dibe, xala kelandinê zêde dibe û xala cemidandinê kêm dibe."
      }
    }
  ],
  "sequences": [
    {
      "id": "u15-s01",
      "title": {
        "tr": "Donma Noktası Alçalması Hesap Adımları",
        "en": "Freezing Point Depression Calculation Steps",
        "de": "Schritte zur Berechnung der Gefrierpunktserniedrigung",
        "fr": "Étapes de calcul de la dépression du point de congélation",
        "ru": "Этапы расчета депрессии точки замерзания",
        "ar": "خطوات حساب نقطة التجمد للاكتئاب",
        "zh": "冰点降低计算步骤",
        "ku": "Pêngavên Hesabkirina Depresyona Xala cemidandinê"
      },
      "steps": [
        {
          "tr": "Maddenin molünü hesapla",
          "en": "Calculate moles of substance",
          "de": "Berechnen Sie Stoffmole",
          "fr": "Calculer les taupes de substance",
          "ru": "Вычислить моли вещества",
          "ar": "حساب مولات المادة",
          "zh": "计算物质的摩尔数",
          "ku": "Molên madeyê hesab bikin"
        },
        {
          "tr": "Çözücünün kütlesini kg'a çevir",
          "en": "Convert the mass of the solvent into kg",
          "de": "Rechnen Sie die Masse des Lösungsmittels in kg um",
          "fr": "Convertir la masse du solvant en kg",
          "ru": "Перевести массу растворителя в кг.",
          "ar": "تحويل كتلة المذيب إلى كجم",
          "zh": "将溶剂的质量换算成kg",
          "ku": "Girseya rûnê bi kg biguherînin"
        },
        {
          "tr": "Molaliteyi bul (m = n / kg)",
          "en": "Find the molality (m = n / kg)",
          "de": "Finden Sie die Molalität (m = n / kg)",
          "fr": "Trouver la molalité (m = n/kg)",
          "ru": "Найдите моляльность (m = n/кг)",
          "ar": "أوجد المولالية (م = ن / كجم)",
          "zh": "求质量摩尔浓度 (m = n / kg)",
          "ku": "Moalîteyê bibînin (m = n / kg)"
        },
        {
          "tr": "ΔTd = Kd * m * i ile düşüşü hesaplayıp 0 °C'den çıkar",
          "en": "Calculate the drop with ΔTd = Kd * m * i and subtract from 0 °C",
          "de": "Berechnen Sie den Abfall mit ΔTd = Kd * m * i und subtrahieren Sie ihn von 0 °C",
          "fr": "Calculez la chute avec ΔTd = Kd * m * i et soustrayez de 0 °C",
          "ru": "Рассчитайте падение с помощью ΔTd = Kd * m * i и вычтите из 0 °C.",
          "ar": "احسب الانخفاض باستخدام ΔTd = Kd * m * i واطرح منه 0 درجة مئوية",
          "zh": "使用 ΔTd = Kd * m * i 计算下降并从 0 °C 中减去",
          "ku": "Dilopê bi ΔTd = Kd * m * i hesab bikin û ji 0 °C kêm bikin"
        }
      ]
    },
    {
      "id": "u15-s02",
      "title": {
        "tr": "Kaynama Noktası Yükselmesi (Ebülyoskopi)",
        "en": "Boiling Point Elevation (Ebulloscopy)",
        "de": "Siedepunkterhöhung (Ebulloskopie)",
        "fr": "Élévation du point d'ébullition (ébulloscopie)",
        "ru": "Повышение температуры кипения (эбуллоскопия)",
        "ar": "ارتفاع نقطة الغليان (تنظير الأصداء)",
        "zh": "沸点升高（Ebulloscopy）",
        "ku": "Bilindbûna xala kelînê (Ebuloscopy)"
      },
      "steps": [
        {
          "tr": "Çözünen maddenin mol sayısı hesaplanır",
          "en": "Calculate the number of moles of solute",
          "de": "Berechnen Sie die Molzahl des gelösten Stoffes",
          "fr": "Calculer le nombre de moles de soluté",
          "ru": "Вычислите количество молей растворенного вещества",
          "ar": "احسب عدد مولات المذاب",
          "zh": "计算溶质的摩尔数",
          "ku": "Hejmara molên maddeyê bihejmêre"
        },
        {
          "tr": "Çözücünün kilogram cinsinden kütlesi bulunur",
          "en": "Find the mass of the solvent in kilograms",
          "de": "Ermitteln Sie die Masse des Lösungsmittels in Kilogramm",
          "fr": "Trouver la masse du solvant en kilogrammes",
          "ru": "Найдите массу растворителя в килограммах.",
          "ar": "أوجد كتلة المذيب بالكيلو جرام",
          "zh": "求出溶剂的质量（以千克为单位）",
          "ku": "Girseya rûnê bi kîloyan bibînin"
        },
        {
          "tr": "Molalite m = n / kg eşitliğiyle belirlenir",
          "en": "Molality is determined by the equation m = n / kg",
          "de": "Die Molalität wird durch die Gleichung m = n / kg bestimmt",
          "fr": "La molalité est déterminée par l'équation m = n / kg",
          "ru": "Моляльность определяется уравнением m = n/kg",
          "ar": "يتم تحديد المولالية بالمعادلة م = ن / كجم",
          "zh": "质量摩尔浓度由方程式 m = n / kg 确定",
          "ku": "Molality ji hêla wekheviya m = n / kg ve tê destnîşankirin"
        },
        {
          "tr": "Delta Tk = Kk . m . i formülüyle kaynama artışı hesaplanır",
          "en": "Delta Tk = Kk . m. The boiling increase is calculated with the formula i",
          "de": "Delta Tk = Kk . M. Der Siedeanstieg wird mit der Formel i berechnet",
          "fr": "Delta Tk = Kk. m. L'augmentation de l'ébullition est calculée avec la formule i",
          "ru": "Дельта Тк = Кк. м. Повышение кипения рассчитывается по формуле i",
          "ar": "دلتا تك = ك. م. يتم حساب الزيادة في الغليان بالصيغة i",
          "zh": "Delta Tk = Kk 。米。沸腾增量的计算公式为 i",
          "ku": "Delta Tk = Kk. m. Zêdebûna kelandinê bi formula i tê hesibandin"
        }
      ]
    },
    {
      "id": "u15-s03",
      "title": {
        "tr": "Donma Noktası Alçalması (Kriyoskopi)",
        "en": "Freezing Point Depression (Cryoscopy)",
        "de": "Gefrierpunktserniedrigung (Kryoskopie)",
        "fr": "Dépression du point de congélation (cryoscopie)",
        "ru": "Понижение точки замерзания (криоскопия)",
        "ar": "اكتئاب نقطة التجمد (التنظير البردي)",
        "zh": "冰点降低（冷冻检查）",
        "ku": "Depresyona xala cemidandinê (Krîoskopî)"
      },
      "steps": [
        {
          "tr": "İyonik tuzun sudaki iyon sayısı i belirlenir",
          "en": "The number of ions of the ionic salt in water is determined",
          "de": "Es wird die Anzahl der Ionen des ionischen Salzes im Wasser bestimmt",
          "fr": "Le nombre d'ions du sel ionique dans l'eau est déterminé",
          "ru": "Определяют количество ионов ионной соли в воде.",
          "ar": "يتم تحديد عدد أيونات الملح الأيوني في الماء",
          "zh": "测定水中离子盐的离子数",
          "ku": "Hejmara îyonên xwêya îyonî di avê de tê diyarkirin"
        },
        {
          "tr": "Çözeltinin molal derişimi hesaplanır",
          "en": "The molal concentration of the solution is calculated",
          "de": "Die molare Konzentration der Lösung wird berechnet",
          "fr": "La concentration molaire de la solution est calculée",
          "ru": "Моляльная концентрация раствора рассчитывается",
          "ar": "يتم حساب التركيز المولي للمحلول",
          "zh": "计算溶液的摩尔浓度",
          "ku": "Pîvana molal ya çareseriyê tê hesab kirin"
        },
        {
          "tr": "Delta Td = Kd . m . i formülü uygulanır",
          "en": "Delta Td = Kd . m. Formula i is applied",
          "de": "Delta Td = Kd . M. Formel i wird angewendet",
          "fr": "Delta Td = Kd . m. La formule i est appliquée",
          "ru": "Дельта Td = Kd. м. Формула i применяется",
          "ar": "دلتا Td = دينار كويتي. م. يتم تطبيق الصيغة i",
          "zh": "ΔTd = Kd。米。应用公式 i",
          "ku": "Delta Td = Kd. m. Formula i tê sepandin"
        },
        {
          "tr": "0 °C'den çıkarılarak yeni donma sıcaklığı bulunur",
          "en": "New freezing temperature is found by subtracting from 0 °C",
          "de": "Die neue Gefriertemperatur wird durch Subtraktion von 0 °C ermittelt",
          "fr": "La nouvelle température de congélation est trouvée en soustrayant de 0 °C",
          "ru": "Новая температура замерзания находится путем вычитания из 0 °C.",
          "ar": "تم العثور على درجة حرارة التجمد الجديدة عن طريق الطرح من 0 درجة مئوية",
          "zh": "新的冷冻温度是从 0 °C 中减去",
          "ku": "Germahiya cemidandinê ya nû bi kêmkirina 0 °C tê dîtin"
        }
      ]
    },
    {
      "id": "u15-s04",
      "title": {
        "tr": "Çözünürlük Eğrisi Okuma",
        "en": "Reading Resolution Curve",
        "de": "Leseauflösungskurve",
        "fr": "Courbe de résolution de lecture",
        "ru": "Кривая разрешения чтения",
        "ar": "منحنى دقة القراءة",
        "zh": "读数分辨率曲线",
        "ku": "Xwendina Resolution Curve"
      },
      "steps": [
        {
          "tr": "Grafikten belirli sıcaklıktaki doymuşluk değeri okunur",
          "en": "The saturation value at a certain temperature is read from the graph.",
          "de": "Aus der Grafik wird der Sättigungswert bei einer bestimmten Temperatur abgelesen.",
          "fr": "La valeur de saturation à une certaine température est lue sur le graphique.",
          "ru": "Значение насыщения при определенной температуре считывается по графику.",
          "ar": "تتم قراءة قيمة التشبع عند درجة حرارة معينة من الرسم البياني.",
          "zh": "从图中读取特定温度下的饱和值。",
          "ku": "Nirxa têrbûnê di germahiyek diyar de ji grafikê tê xwendin."
        },
        {
          "tr": "100 gram sudaki maksimum çözünen madde belirlenir",
          "en": "The maximum solute in 100 grams of water is determined",
          "de": "Es wird der maximal gelöste Stoff in 100 Gramm Wasser bestimmt",
          "fr": "Le soluté maximum dans 100 grammes d'eau est déterminé",
          "ru": "Определяется максимальное содержание растворенного вещества в 100 граммах воды.",
          "ar": "يتم تحديد الحد الأقصى للمادة المذابة في 100 جرام من الماء",
          "zh": "100克水中最大溶质的测定",
          "ku": "Di 100 gram avê de rêjeya herî zêde tê diyarkirin"
        },
        {
          "tr": "Verilen su miktarıyla orantı kurularak kapasite bulunur",
          "en": "Capacity is found by proportioning the amount of water given.",
          "de": "Die Kapazität wird durch Verhältnis der gegebenen Wassermenge ermittelt.",
          "fr": "La capacité est déterminée en proportionnant la quantité d’eau donnée.",
          "ru": "Емкость определяется пропорционально количеству подаваемой воды.",
          "ar": "يتم العثور على السعة من خلال تناسب كمية المياه المقدمة.",
          "zh": "容量是通过按比例给出的水量来确定的。",
          "ku": "Kapasîteyê bi rêjekirina mîqdara ava ku tê dayîn tê dîtin."
        },
        {
          "tr": "Sıcaklık değiştiğinde çöken veya gereken katı hesaplanır",
          "en": "Calculate the solid that precipitates or is required when the temperature changes",
          "de": "Berechnen Sie den Feststoff, der bei Temperaturänderungen ausfällt bzw. benötigt wird",
          "fr": "Calculer le solide qui précipite ou est requis lorsque la température change",
          "ru": "Рассчитайте твердое вещество, которое выпадает в осадок или требуется при изменении температуры",
          "ar": "احسب المادة الصلبة التي تترسب أو تكون مطلوبة عند تغير درجة الحرارة",
          "zh": "计算温度变化时析出或需要的固体",
          "ku": "Dema ku germahî diguhere hişka ku diherike an hewce dike hesab bikin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u15-twin01",
      "stem": {
        "tr": "1 kg saf suda 1 mol NaCl çözünerek hazırlanan çözeltinin 1 atm'de donmaya başlama sıcaklığı kaç °C'dir? (Su için Kd = 1.86 °C*kg/mol)",
        "en": "What is the freezing temperature at 1 atm of the solution prepared by dissolving 1 mole of NaCl in 1 kg of pure water? (Kd for water = 1.86 °C*kg/mol)",
        "de": "Wie hoch ist die Gefriertemperatur bei 1 atm der Lösung, die durch Auflösen von 1 Mol NaCl in 1 kg reinem Wasser hergestellt wird? (Kd für Wasser = 1,86 °C*kg/mol)",
        "fr": "Quelle est la température de congélation à 1 atm de la solution préparée en dissolvant 1 mole de NaCl dans 1 kg d'eau pure ? (Kd pour l'eau = 1,86 °C*kg/mol)",
        "ru": "Какова температура замерзания при давлении 1 атм раствора, приготовленного растворением 1 моля NaCl в 1 кг чистой воды? (Kd для воды = 1,86 °C*кг/моль)",
        "ar": "ما هي درجة حرارة التجمد عند 1 atm من المحلول المحضر بإذابة 1 مول من NaCl في 1 كجم من الماء النقي؟ (Kd للماء = 1.86 درجة مئوية*كجم/مول)",
        "zh": "将 1 摩尔 NaCl 溶解在 1 kg 纯水中制备的溶液在 1 atm 下的冻结温度是多少？ （水的 Kd = 1.86 °C*kg/mol）",
        "ku": "Germahiya cemidandinê ya li 1 atm ê çareya ku bi helandina 1 mol NaCl di 1 kg ava paqij de tê amadekirin çend e? (Kd ji bo avê = 1,86 °C*kg/mol)"
      },
      "options": [
        {
          "tr": "-3.72 °C",
          "en": "-3.72 °C",
          "de": "-3,72 °C",
          "fr": "-3,72 °C",
          "ru": "-3,72 °С",
          "ar": "-3.72 درجة مئوية",
          "zh": "-3.72℃",
          "ku": "-3,72 °C"
        },
        {
          "tr": "-1.86 °C",
          "en": "-1.86 °C",
          "de": "-1,86 °C",
          "fr": "-1,86 °C",
          "ru": "-1,86 °С",
          "ar": "-1.86 درجة مئوية",
          "zh": "-1.86℃",
          "ku": "-1,86 °C"
        },
        {
          "tr": "0.00 °C",
          "en": "0.00 °C",
          "de": "0,00 °C",
          "fr": "0,00 °C",
          "ru": "0,00 °С",
          "ar": "0.00 درجة مئوية",
          "zh": "0.00℃",
          "ku": "0,00 °C"
        },
        {
          "tr": "-0.93 °C",
          "en": "-0.93 °C",
          "de": "-0,93 °C",
          "fr": "-0,93 °C",
          "ru": "-0,93 °С",
          "ar": "-0.93 درجة مئوية",
          "zh": "-0.93℃",
          "ku": "-0,93 °C"
        },
        {
          "tr": "-5.58 °C",
          "en": "-5.58 °C",
          "de": "-5,58 °C",
          "fr": "-5,58 °C",
          "ru": "-5,58 °С",
          "ar": "-5.58 درجة مئوية",
          "zh": "-5.58℃",
          "ku": "-5,58 °C"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "NaCl -> Na+ + Cl- (i = 2). m = 1 mol / 1 kg = 1 m. ΔTd = Kd * m * i = 1.86 * 1 * 2 = 3.72 °C. Donma noktası = 0 - 3.72 = -3.72 °C.",
        "en": "NaCl -> Na+ + Cl- (i = 2). m = 1 mol / 1 kg = 1 m. ΔTd = Kd * m * i = 1.86 * 1 * 2 = 3.72 °C. Freezing point = 0 - 3.72 = -3.72 °C.",
        "de": "NaCl -> Na+ + Cl- (i = 2). m = 1 mol / 1 kg = 1 m. ΔTd = Kd * m * i = 1,86 * 1 * 2 = 3,72 °C. Gefrierpunkt = 0 - 3,72 = -3,72 °C.",
        "fr": "NaCl -> Na+ + Cl- (i = 2). m = 1 mole / 1 kg = 1 m. ΔTd = Kd * m * i = 1,86 * 1 * 2 = 3,72 °C. Point de congélation = 0 - 3,72 = -3,72 °C.",
        "ru": "NaCl -> Na+ + Cl- (i = 2). м = 1 моль/1 кг = 1 м. ΔTd = Kd * m * i = 1,86 * 1 * 2 = 3,72 °С. Точка замерзания = 0–3,72 = -3,72 °C.",
        "ar": "كلوريد الصوديوم -> Na+ + Cl- (i = 2). م = 1 مول / 1 كجم = 1 م. ΔTd = Kd * m * i = 1.86 * 1 * 2 = 3.72 درجة مئوية. نقطة التجمد = 0 - 3.72 = -3.72 درجة مئوية.",
        "zh": "氯化钠 -> Na+ + Cl- (i = 2)。 m = 1 mol / 1 kg = 1 m。 ΔTd = Kd * m * i = 1.86 * 1 * 2 = 3.72 °C。凝固点 = 0 - 3.72 = -3.72 °C。",
        "ku": "NaCl -> Na+ + Cl- (i = 2). m = 1 mol / 1 kg = 1 m. ΔTd = Kd * m * i = 1,86 * 1 * 2 = 3,72 °C. Xala cemidandinê = 0 - 3,72 = -3,72 °C."
      }
    },
    {
      "id": "u15-twin02",
      "stem": {
        "tr": "Aşağıdaki 1'er molal sulu çözeltilerden hangisinin 1 atm dış basınçta kaynamaya başlama sıcaklığı en yüksektir?",
        "en": "Which of the following 1 molal aqueous solutions has the highest boiling temperature at 1 atm external pressure?",
        "de": "Welche der folgenden 1 molalen wässrigen Lösungen hat die höchste Siedetemperatur bei 1 atm Außendruck?",
        "fr": "Laquelle des solutions aqueuses 1 molales suivantes a la température d'ébullition la plus élevée à une pression externe de 1 atm ?",
        "ru": "Какой из следующих 1 моляльных водных растворов имеет самую высокую температуру кипения при внешнем давлении 1 атм?",
        "ar": "أي المحاليل المائية 1 مولال التالية له أعلى درجة حرارة غليان عند ضغط خارجي 1 atm؟",
        "zh": "以下哪种 1 摩尔水溶液在 1 atm 外压下具有最高的沸点温度？",
        "ku": "Kîjan ji 1 çareserîyên avî yên molal ên jêrîn di 1 atm zexta derve de xwedî germahiya herî kelandinê ye?"
      },
      "options": [
        {
          "tr": "AlCl3",
          "en": "AlCl3",
          "de": "AlCl3",
          "fr": "AlCl3",
          "ru": "AlCl3",
          "ar": "AlCl3",
          "zh": "AlCl3",
          "ku": "AlCl3"
        },
        {
          "tr": "CaCl2",
          "en": "CaCl2",
          "de": "CaCl2",
          "fr": "CaCl2",
          "ru": "CaCl2",
          "ar": "CaCl2",
          "zh": "CaCl2",
          "ku": "CaCl2"
        },
        {
          "tr": "NaCl",
          "en": "NaCl",
          "de": "NaCl",
          "fr": "NaCl",
          "ru": "NaCl",
          "ar": "NaCl",
          "zh": "NaCl",
          "ku": "NaCl"
        },
        {
          "tr": "Glikoz (C6H12O6)",
          "en": "Glucose (C6H12O6)",
          "de": "Glukose (C6H12O6)",
          "fr": "Glucose (C6H12O6)",
          "ru": "Глюкоза (C6H12O6)",
          "ar": "الجلوكوز (C6H12O6)",
          "zh": "葡萄糖 (C6H12O6)",
          "ku": "Glukoz (C6H12O6)"
        },
        {
          "tr": "KNO3",
          "en": "KNO3",
          "de": "KNO3",
          "fr": "KNO3",
          "ru": "KNO3",
          "ar": "KNO3",
          "zh": "KNO3",
          "ku": "KNO3"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "AlCl3 için i = 4 (1 Al3+ + 3 Cl-). Toplam tanecik derişimi en yüksek (4 m) olduğundan kaynama noktası yükselmesi en büyüktür.",
        "en": "For AlCl3 i = 4 (1 Al3+ + 3 Cl-). Since the total particle concentration is the highest (4 m), the boiling point increase is greatest.",
        "de": "Für AlCl3 i = 4 (1 Al3+ + 3 Cl-). Da die Gesamtpartikelkonzentration am höchsten ist (4 m), ist auch der Siedepunktanstieg am größten.",
        "fr": "Pour AlCl3, je = 4 (1 Al3+ + 3 Cl-). Puisque la concentration totale de particules est la plus élevée (4 m), l’augmentation du point d’ébullition est la plus importante.",
        "ru": "Для AlCl3 i = 4 (1 Al3+ + 3 Cl-). Поскольку общая концентрация частиц самая высокая (4 м), увеличение температуры кипения является наибольшим.",
        "ar": "بالنسبة لـ AlCl3 i = 4 (1 Al3+ + 3 Cl-). وبما أن إجمالي تركيز الجسيمات هو الأعلى (4 م)، فإن زيادة درجة الغليان تكون أكبر.",
        "zh": "对于 AlCl3，i = 4 (1 Al3+ + 3 Cl-)。由于总颗粒浓度最高（4 m），因此沸点升高最大。",
        "ku": "Ji bo AlCl3 i = 4 (1 Al3+ + 3 Cl-). Ji ber ku tevheviya parçê herî bilind e (4 m), zêdebûna xala kelandinê herî zêde ye."
      }
    },
    {
      "id": "u15-twin03",
      "stem": {
        "tr": "Kimya dersinde Koligatif Özellikler ve Çözünürlük ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Colligative Properties & Solubility, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Kolligative Eigenschaften & Löslichkeit: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Propriétés Colligatives & Solubilité, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Коллигативные свойства и растворимость», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الخواص التجميعية والذوبانية\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“依数性与溶解度”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Taybetmendiyên Kolîgatîf û Çareserî\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Ozmozda çözünen katı tanecikler zardan kolayca geçer.",
          "en": "Solid particles dissolved in osmosis easily pass through the membrane.",
          "de": "Bei der Osmose gelöste Feststoffpartikel passieren die Membran problemlos.",
          "fr": "Les particules solides dissoutes par osmose traversent facilement la membrane.",
          "ru": "Твердые частицы, растворенные при осмосе, легко проходят через мембрану.",
          "ar": "تمر الجزيئات الصلبة الذائبة في التناضح بسهولة عبر الغشاء.",
          "zh": "渗透溶解的固体颗粒很容易穿过膜。",
          "ku": "Parçeyên hişk ên ku di osmosê de têne hilweşandin bi hêsanî di parzûnê re derbas dibin."
        },
        {
          "tr": "Çözünürlük 1 litre çözeltide çözünen katı gramıdır.",
          "en": "Solubility is the gram of solid dissolved in 1 liter of solution.",
          "de": "Die Löslichkeit ist das Gramm Feststoff, gelöst in 1 Liter Lösung.",
          "fr": "La solubilité est le gramme de solide dissous dans 1 litre de solution.",
          "ru": "Растворимость – это грамм твердого вещества, растворенного в 1 л раствора.",
          "ar": "الذوبان هو جرام المادة الصلبة المذابة في 1 لتر من المحلول.",
          "zh": "溶解度是溶解在 1 升溶液中的固体克数。",
          "ku": "Çareserbûn gram e ku di 1 lîtreya haletê de tê helandin."
        },
        {
          "tr": "Donma noktası alçalması: ΔTd = Kd * m * i'dir (su için Kd = 1.86 °C*kg/mol).",
          "en": "Freezing point depression: ΔTd = Kd * m * i (Kd = 1.86 °C*kg/mol for water).",
          "de": "Gefrierpunktserniedrigung: ΔTd = Kd * m * i (Kd = 1,86 °C*kg/mol für Wasser).",
          "fr": "Abaissement du point de congélation : ΔTd = Kd * m * i (Kd = 1,86 °C*kg/mol pour l'eau).",
          "ru": "Понижение температуры замерзания: ΔTd = Kd * m * i (Kd = 1,86 °C*кг/моль для воды).",
          "ar": "انخفاض نقطة التجمد: ΔTd = Kd * m * i (Kd = 1.86 درجة مئوية*كجم/مول للمياه).",
          "zh": "凝固点降低：ΔTd = Kd * m * i（对于水，Kd = 1.86 °C*kg/mol）。",
          "ku": "Depresyona xala cemidandinê: ΔTd = Kd * m * i (Kd = 1,86 °C*kg/mol ji bo avê)."
        },
        {
          "tr": "Tuzun sudaki çözünürlüğü yüksek basınçta iki katına çıkar.",
          "en": "The solubility of salt in water doubles at high pressure.",
          "de": "Bei hohem Druck verdoppelt sich die Löslichkeit von Salz in Wasser.",
          "fr": "La solubilité du sel dans l’eau double à haute pression.",
          "ru": "Растворимость соли в воде удваивается при высоком давлении.",
          "ar": "تتضاعف ذوبان الملح في الماء عند الضغط العالي.",
          "zh": "在高压下盐在水中的溶解度加倍。",
          "ku": "Di tansiyona bilind de helbûna xwê ya di avê de duqat dibe."
        },
        {
          "tr": "Aşırı doygun çözelti sonsuza kadar kararlı kalan dengeli sistemdir.",
          "en": "A supersaturated solution is a balanced system that remains stable forever.",
          "de": "Eine übersättigte Lösung ist ein ausgeglichenes System, das für immer stabil bleibt.",
          "fr": "Une solution sursaturée est un système équilibré qui reste stable pour toujours.",
          "ru": "Пересыщенный раствор — это сбалансированная система, которая остается стабильной навсегда.",
          "ar": "المحلول المفرط التشبع هو نظام متوازن يظل مستقرًا إلى الأبد.",
          "zh": "过饱和溶液是一个永远保持稳定的平衡系统。",
          "ku": "Çareseriya pir têrbûyî pergalek hevseng e ku her û her aram dimîne."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Donma noktası alçalması: ΔTd = Kd * m * i'dir (su için Kd = 1.86 °C*kg/mol).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Freezing point depression: ΔTd = Kd * m * i (Kd = 1.86 °C*kg/mol for water).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Gefrierpunktserniedrigung: ΔTd = Kd * m * i (Kd = 1,86 °C*kg/mol für Wasser).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Abaissement du point de congélation : ΔTd = Kd * m * i (Kd = 1,86 °C*kg/mol pour l'eau).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Понижение температуры замерзания: ΔTd = Kd * m * i (Kd = 1,86 °C*кг/моль для воды).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"انخفاض نقطة التجمد: ΔTd = Kd * m * i (Kd = 1.86 درجة مئوية*كجم/مول للمياه).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“凝固点降低：ΔTd = Kd * m * i（对于水，Kd = 1.86 °C*kg/mol）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Depresyona xala cemidandinê: ΔTd = Kd * m * i (Kd = 1,86 °C*kg/mol ji bo avê).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u15-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Koligatif Özellikler ve Çözünürlük konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Colligative Properties & Solubility?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Kolligative Eigenschaften & Löslichkeit zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Propriétés Colligatives & Solubilité ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Коллигативные свойства и растворимость»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الخواص التجميعية والذوبانية\"؟",
        "zh": "根据“依数性与溶解度”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Taybetmendiyên Kolîgatîf û Çareserî\" de rast e?"
      },
      "options": [
        {
          "tr": "Yollara tuz atılması tuzun kimyasal reaksiyonla ısı açığa çıkarması içindir.",
          "en": "Throwing salt on the roads causes the salt to release heat through a chemical reaction.",
          "de": "Das Streuen von Salz auf die Straße führt dazu, dass das Salz durch eine chemische Reaktion Wärme freisetzt.",
          "fr": "Jeter du sel sur les routes provoque la libération de chaleur par une réaction chimique.",
          "ru": "Рассыпание соли на дорогах приводит к тому, что соль выделяет тепло в результате химической реакции.",
          "ar": "يؤدي رمي الملح على الطرق إلى إطلاق الملح للحرارة من خلال تفاعل كيميائي.",
          "zh": "在路上撒盐会使盐通过化学反应释放热量。",
          "ku": "Avêtina xwê li ser rêyan dibe sedem ku xwê bi reaksiyonek kîmyayî germê berde."
        },
        {
          "tr": "Gazların sudaki çözünürlüğü sıcaklık arttıkça hızla artar.",
          "en": "The solubility of gases in water increases rapidly as temperature increases.",
          "de": "Die Löslichkeit von Gasen in Wasser nimmt mit steigender Temperatur schnell zu.",
          "fr": "La solubilité des gaz dans l’eau augmente rapidement à mesure que la température augmente.",
          "ru": "Растворимость газов в воде быстро возрастает с повышением температуры.",
          "ar": "تزداد قابلية ذوبان الغازات في الماء بسرعة مع زيادة درجة الحرارة.",
          "zh": "气体在水中的溶解度随着温度的升高而迅速增加。",
          "ku": "Her ku germahî zêde dibe di avê de helbûna gazan bi lez zêde dibe."
        },
        {
          "tr": "Ortak iyon bulunan çözeltide tuz daha çok çözünür.",
          "en": "Salt is more soluble in a solution with common ions.",
          "de": "Salz ist in einer Lösung mit gewöhnlichen Ionen besser löslich.",
          "fr": "Le sel est plus soluble dans une solution contenant des ions communs.",
          "ru": "Соль лучше растворяется в растворе с общими ионами.",
          "ar": "يكون الملح أكثر قابلية للذوبان في المحلول الذي يحتوي على الأيونات الشائعة.",
          "zh": "盐在具有普通离子的溶液中更易溶解。",
          "ku": "Xwê di çareyek bi îyonên hevpar de zêdetir tê çareserkirin."
        },
        {
          "tr": "van t Hoff faktörü (i): Moleküler maddelerde (şeker, alkol) i = 1'dir; iyonik tuzlarda iyon sayısıdır (NaCl için i = 2, CaCl2 için i = 3).",
          "en": "van t Hoff factor (i): In molecular substances (sugar, alcohol) i = 1; is the number of ions in ionic salts (i = 2 for NaCl, i = 3 for CaCl2).",
          "de": "Van-t-Hoff-Faktor (i): In molekularen Substanzen (Zucker, Alkohol) i = 1; ist die Anzahl der Ionen in ionischen Salzen (i = 2 für NaCl, i = 3 für CaCl2).",
          "fr": "Facteur de van t Hoff (i) : Dans les substances moléculaires (sucre, alcool) i = 1 ; est le nombre d'ions dans les sels ioniques (i = 2 pour NaCl, i = 3 pour CaCl2).",
          "ru": "Фактор Ван-т-Гоффа (i): В молекулярных веществах (сахар, спирт) i = 1; – число ионов в ионных солях (i = 2 для NaCl, i = 3 для CaCl2).",
          "ar": "عامل فان تي هوف (i): في المواد الجزيئية (السكر والكحول) i = 1؛ هو عدد الأيونات الموجودة في الأملاح الأيونية (i = 2 لـ NaCl، i = 3 لـ CaCl2).",
          "zh": "van t Hoff 因子 (i)：分子物质（糖、酒精）中 i = 1；是离子盐中的离子数（对于 NaCl，i = 2；对于 CaCl2，i = 3）。",
          "ku": "van t Faktora Hoff (i): Di madeyên molekular de (şekir, alkol) i = 1; hejmara îyonên di xwêyên îyonî de ye (ji bo NaCl i = 2, ji bo CaCl2 i = 3)."
        },
        {
          "tr": "Kapak açıldığında CO2'nin çözünürlüğü artar.",
          "en": "When the lid is opened, the solubility of CO2 increases.",
          "de": "Beim Öffnen des Deckels erhöht sich die Löslichkeit von CO2.",
          "fr": "Lorsque le couvercle est ouvert, la solubilité du CO2 augmente.",
          "ru": "При открытии крышки растворимость CO2 увеличивается.",
          "ar": "عند فتح الغطاء، تزداد ذوبان ثاني أكسيد الكربون.",
          "zh": "当盖子打开时，CO2 的溶解度增加。",
          "ku": "Dema ku qapax tê vekirin, çareserbûna CO2 zêde dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"van t Hoff faktörü (i): Moleküler maddelerde (şeker, alkol) i = 1'dir; iyonik tuzlarda iyon sayısıdır (NaCl için i = 2, CaCl2 için i = 3).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"van t Hoff factor (i): In molecular substances (sugar, alcohol) i = 1; is the number of ions in ionic salts (i = 2 for NaCl, i = 3 for CaCl2).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Van-t-Hoff-Faktor (i): In molekularen Substanzen (Zucker, Alkohol) i = 1; ist die Anzahl der Ionen in ionischen Salzen (i = 2 für NaCl, i = 3 für CaCl2).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Facteur de van t Hoff (i) : Dans les substances moléculaires (sucre, alcool) i = 1 ; est le nombre d'ions dans les sels ioniques (i = 2 pour NaCl, i = 3 pour CaCl2).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Фактор Ван-т-Гоффа (i): В молекулярных веществах (сахар, спирт) i = 1; – число ионов в ионных солях (i = 2 для NaCl, i = 3 для CaCl2).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عامل فان تي هوف (i): في المواد الجزيئية (السكر والكحول) i = 1؛ هو عدد الأيونات الموجودة في الأملاح الأيونية (i = 2 لـ NaCl، i = 3 لـ CaCl2).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“van t Hoff 因子 (i)：分子物质（糖、酒精）中 i = 1；是离子盐中的离子数（对于 NaCl，i = 2；对于 CaCl2，i = 3）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"van t Faktora Hoff (i): Di madeyên molekular de (şekir, alkol) i = 1; hejmara îyonên di xwêyên îyonî de ye (ji bo NaCl i = 2, ji bo CaCl2 i = 3).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u15-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Koligatif Özellikler ve Çözünürlük sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Colligative Properties & Solubility, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Kolligative Eigenschaften & Löslichkeit: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Propriétés Colligatives & Solubilité, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Коллигативные свойства и растворимость», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الخواص التجميعية والذوبانية\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“依数性与溶解度”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Taybetmendiyên Kolîgatîf û Çareserî\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Antifriz suyun donma noktasını 0 °C'nin üzerine çıkarır.",
          "en": "Antifreeze raises the freezing point of water above 0 °C.",
          "de": "Frostschutzmittel erhöhen den Gefrierpunkt von Wasser über 0 °C.",
          "fr": "L'antigel élève le point de congélation de l'eau au-dessus de 0 °C.",
          "ru": "Антифриз повышает температуру замерзания воды выше 0 °C.",
          "ar": "يعمل مضاد التجمد على رفع درجة تجمد الماء إلى ما فوق 0 درجة مئوية.",
          "zh": "防冻剂可将水的冰点提高到 0 °C 以上。",
          "ku": "Antîfrîz xala cemidandinê ya avê ji 0 °C bilind dike."
        },
        {
          "tr": "Basınç arttıkça gazların çözünürlüğü azalır.",
          "en": "As pressure increases, the solubility of gases decreases.",
          "de": "Mit zunehmendem Druck nimmt die Löslichkeit von Gasen ab.",
          "fr": "À mesure que la pression augmente, la solubilité des gaz diminue.",
          "ru": "С увеличением давления растворимость газов снижается.",
          "ar": "مع زيادة الضغط، تنخفض ذوبان الغازات.",
          "zh": "随着压力增加，气体的溶解度降低。",
          "ku": "Her ku zext zêde dibe, helbûna gazan kêm dibe."
        },
        {
          "tr": "Eşit derişimli NaCl ve AlCl3 çözeltilerinin kaynama noktaları aynıdır.",
          "en": "Boiling points of equal concentrations of NaCl and AlCl3 solutions are the same.",
          "de": "Die Siedepunkte gleicher Konzentrationen von NaCl- und AlCl3-Lösungen sind gleich.",
          "fr": "Les points d'ébullition de concentrations égales de solutions NaCl et AlCl3 sont les mêmes.",
          "ru": "Температуры кипения растворов NaCl и AlCl3 равных концентраций одинаковы.",
          "ar": "نقاط غليان التركيزات المتساوية من محاليل NaCl وAlCl3 هي نفسها.",
          "zh": "等浓度的 NaCl 和 AlCl3 溶液的沸点相同。",
          "ku": "Xalên kelandinê yên pîvazên wekhev ên çareseriyên NaCl û AlCl3 yek in."
        },
        {
          "tr": "Koligatif özellikler çözünen maddenin molekül geometrisine bağlıdır.",
          "en": "Colligative properties depend on the molecular geometry of the solute.",
          "de": "Kolligative Eigenschaften hängen von der Molekülgeometrie des gelösten Stoffes ab.",
          "fr": "Les propriétés colligatives dépendent de la géométrie moléculaire du soluté.",
          "ru": "Коллигативные свойства зависят от молекулярной геометрии растворенного вещества.",
          "ar": "تعتمد الخواص التجميعية على الهندسة الجزيئية للمذاب.",
          "zh": "依数性质取决于溶质的分子几何形状。",
          "ku": "Taybetmendiyên kolektîf bi geometriya molekulê ya solê ve girêdayî ye."
        },
        {
          "tr": "Buhar basıncı alçalması (Raoult Yasası): Çözeltinin buhar basıncı Pçözelti = Pçözücü° * Xçözücü'dür.",
          "en": "Vapor pressure decrease (Raoult's Law): The vapor pressure of the solution is Psolution = Psolvent° * Xsolvent.",
          "de": "Dampfdruckabnahme (Raoultsches Gesetz): Der Dampfdruck der Lösung beträgt PLösung = PLösungsmittel° * XLösungsmittel.",
          "fr": "Diminution de la pression de vapeur (Loi de Raoult) : La pression de vapeur de la solution est Psolution = Psolvant° * Xsolvant.",
          "ru": "Уменьшение давления пара (Закон Рауля): Давление пара раствора равно Psolution = Psolvent° * Xsolvent.",
          "ar": "انخفاض ضغط البخار (قانون راؤول): ضغط بخار المحلول هو Psolution = Psolvent° * Xsolvent.",
          "zh": "蒸气压降低（拉乌尔定律）：溶液的蒸气压为 Psolution = Psolvent° * Xsolvent。",
          "ku": "Kêmbûna tansiyona vaporê (Qanûna Raoult): Zexta buharê ya çareseriyê Psolution = Psolvent° * Xsolvent e."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Buhar basıncı alçalması (Raoult Yasası): Çözeltinin buhar basıncı Pçözelti = Pçözücü° * Xçözücü'dür.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Vapor pressure decrease (Raoult's Law): The vapor pressure of the solution is Psolution = Psolvent° * Xsolvent.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Dampfdruckabnahme (Raoultsches Gesetz): Der Dampfdruck der Lösung beträgt PLösung = PLösungsmittel° * XLösungsmittel.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Diminution de la pression de vapeur (Loi de Raoult) : La pression de vapeur de la solution est Psolution = Psolvant° * Xsolvant.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Уменьшение давления пара (Закон Рауля): Давление пара раствора равно Psolution = Psolvent° * Xsolvent.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"انخفاض ضغط البخار (قانون راؤول): ضغط بخار المحلول هو Psolution = Psolvent° * Xsolvent.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“蒸气压降低（拉乌尔定律）：溶液的蒸气压为 Psolution = Psolvent° * Xsolvent。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Kêmbûna tansiyona vaporê (Qanûna Raoult): Zexta buharê ya çareseriyê Psolution = Psolvent° * Xsolvent e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u15-twin06",
      "stem": {
        "tr": "Aşağıda Koligatif Özellikler ve Çözünürlük ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Colligative Properties & Solubility, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Kolligative Eigenschaften & Löslichkeit: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Propriétés Colligatives & Solubilité, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Коллигативные свойства и растворимость», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الخواص التجميعية والذوبانية\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“依数性与溶解度”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Taybetmendiyên Kolîgatîf û Çareserî\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Ozmotik basınç, yarı geçirgen zardan saf çözücünün derişik çözeltiye geçişini durdurmak için gereken basınçtır.",
          "en": "Osmotic pressure is the pressure required to stop the transition of pure solvent to concentrated solution through the semi-permeable membrane.",
          "de": "Der osmotische Druck ist der Druck, der erforderlich ist, um den Übergang des reinen Lösungsmittels in die konzentrierte Lösung durch die semipermeable Membran zu stoppen.",
          "fr": "La pression osmotique est la pression nécessaire pour arrêter la transition du solvant pur vers la solution concentrée à travers la membrane semi-perméable.",
          "ru": "Осмотическое давление — это давление, необходимое для прекращения перехода чистого растворителя в концентрированный раствор через полупроницаемую мембрану.",
          "ar": "الضغط الأسموزي هو الضغط المطلوب لوقف انتقال المذيب النقي إلى المحلول المركز من خلال الغشاء شبه المنفذ.",
          "zh": "渗透压是阻止纯溶剂通过半透膜转变为浓溶液所需的压力。",
          "ku": "Zexta osmotîk zexta pêdivî ye ku ji bo rawestandina veguheztina rûnê safî ber bi çareseriya konsantrekirî ve di nav perdeya nîv-permeable de ye."
        },
        {
          "tr": "Çözünürlük 1 litre çözeltide çözünen katı gramıdır.",
          "en": "Solubility is the gram of solid dissolved in 1 liter of solution.",
          "de": "Die Löslichkeit ist das Gramm Feststoff, gelöst in 1 Liter Lösung.",
          "fr": "La solubilité est le gramme de solide dissous dans 1 litre de solution.",
          "ru": "Растворимость – это грамм твердого вещества, растворенного в 1 л раствора.",
          "ar": "الذوبان هو جرام المادة الصلبة المذابة في 1 لتر من المحلول.",
          "zh": "溶解度是溶解在 1 升溶液中的固体克数。",
          "ku": "Çareserbûn gram e ku di 1 lîtreya haletê de tê helandin."
        },
        {
          "tr": "Tuzun sudaki çözünürlüğü yüksek basınçta iki katına çıkar.",
          "en": "The solubility of salt in water doubles at high pressure.",
          "de": "Bei hohem Druck verdoppelt sich die Löslichkeit von Salz in Wasser.",
          "fr": "La solubilité du sel dans l’eau double à haute pression.",
          "ru": "Растворимость соли в воде удваивается при высоком давлении.",
          "ar": "تتضاعف ذوبان الملح في الماء عند الضغط العالي.",
          "zh": "在高压下盐在水中的溶解度加倍。",
          "ku": "Di tansiyona bilind de helbûna xwê ya di avê de duqat dibe."
        },
        {
          "tr": "Aşırı doygun çözelti sonsuza kadar kararlı kalan dengeli sistemdir.",
          "en": "A supersaturated solution is a balanced system that remains stable forever.",
          "de": "Eine übersättigte Lösung ist ein ausgeglichenes System, das für immer stabil bleibt.",
          "fr": "Une solution sursaturée est un système équilibré qui reste stable pour toujours.",
          "ru": "Пересыщенный раствор — это сбалансированная система, которая остается стабильной навсегда.",
          "ar": "المحلول المفرط التشبع هو نظام متوازن يظل مستقرًا إلى الأبد.",
          "zh": "过饱和溶液是一个永远保持稳定的平衡系统。",
          "ku": "Çareseriya pir têrbûyî pergalek hevseng e ku her û her aram dimîne."
        },
        {
          "tr": "Kaynama noktası yükselmesi çözünenin mol kütlesiyle doğru orantılıdır.",
          "en": "The boiling point elevation is directly proportional to the molar mass of the solute.",
          "de": "Die Siedepunkterhöhung ist direkt proportional zur Molmasse des gelösten Stoffes.",
          "fr": "L'élévation du point d'ébullition est directement proportionnelle à la masse molaire du soluté.",
          "ru": "Повышение температуры кипения прямо пропорционально молярной массе растворенного вещества.",
          "ar": "يتناسب ارتفاع نقطة الغليان بشكل مباشر مع الكتلة المولية للمذاب.",
          "zh": "沸点升高与溶质的摩尔质量成正比。",
          "ku": "Bilindbûna nuqteya kelandinê rasterast bi girseya molarê ya madeya çareserkirinê re têkildar e."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Ozmotik basınç, yarı geçirgen zardan saf çözücünün derişik çözeltiye geçişini durdurmak için gereken basınçtır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Osmotic pressure is the pressure required to stop the transition of pure solvent to concentrated solution through the semi-permeable membrane.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der osmotische Druck ist der Druck, der erforderlich ist, um den Übergang des reinen Lösungsmittels in die konzentrierte Lösung durch die semipermeable Membran zu stoppen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La pression osmotique est la pression nécessaire pour arrêter la transition du solvant pur vers la solution concentrée à travers la membrane semi-perméable.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Осмотическое давление — это давление, необходимое для прекращения перехода чистого растворителя в концентрированный раствор через полупроницаемую мембрану.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الضغط الأسموزي هو الضغط المطلوب لوقف انتقال المذيب النقي إلى المحلول المركز من خلال الغشاء شبه المنفذ.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“渗透压是阻止纯溶剂通过半透膜转变为浓溶液所需的压力。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Zexta osmotîk zexta pêdivî ye ku ji bo rawestandina veguheztina rûnê safî ber bi çareseriya konsantrekirî ve di nav perdeya nîv-permeable de ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u15-twin07",
      "stem": {
        "tr": "Koligatif Özellikler ve Çözünürlük konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Colligative Properties & Solubility, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Kolligative Eigenschaften & Löslichkeit: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Propriétés Colligatives & Solubilité, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Коллигативные свойства и растворимость», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الخواص التجميعية والذوبانية\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“依数性与溶解度”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Taybetmendiyên Kolîgatîf û Çareserî\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Gazların sudaki çözünürlüğü sıcaklık arttıkça hızla artar.",
          "en": "The solubility of gases in water increases rapidly as temperature increases.",
          "de": "Die Löslichkeit von Gasen in Wasser nimmt mit steigender Temperatur schnell zu.",
          "fr": "La solubilité des gaz dans l’eau augmente rapidement à mesure que la température augmente.",
          "ru": "Растворимость газов в воде быстро возрастает с повышением температуры.",
          "ar": "تزداد قابلية ذوبان الغازات في الماء بسرعة مع زيادة درجة الحرارة.",
          "zh": "气体在水中的溶解度随着温度的升高而迅速增加。",
          "ku": "Her ku germahî zêde dibe di avê de helbûna gazan bi lez zêde dibe."
        },
        {
          "tr": "Kışın yollara tuz atılması suyun donma noktasını alçaltarak buzlanmayı önleme uygulamasıdır.",
          "en": "Sprinkling salt on the roads in winter is a practice to prevent icing by lowering the freezing point of water.",
          "de": "Das Streuen von Salz auf die Straßen im Winter ist eine Praxis, um Vereisung zu verhindern, indem der Gefrierpunkt des Wassers gesenkt wird.",
          "fr": "Saupoudrer du sel sur les routes en hiver est une pratique visant à prévenir le givrage en abaissant le point de congélation de l'eau.",
          "ru": "Посыпание дорог солью зимой – это практика предотвращения обледенения за счет снижения температуры замерзания воды.",
          "ar": "يعد رش الملح على الطرق في الشتاء ممارسة لمنع تكون الجليد عن طريق خفض درجة تجمد الماء.",
          "zh": "冬季在道路上撒盐是通过降低水的冰点来防止结冰的做法。",
          "ku": "Di zivistanê de rijandina xwê li ser rêyan ji bo pêşîlêgirtina qeşayê bi kêmkirina xala cemidandinê ya avê, pratîkek e."
        },
        {
          "tr": "Ortak iyon bulunan çözeltide tuz daha çok çözünür.",
          "en": "Salt is more soluble in a solution with common ions.",
          "de": "Salz ist in einer Lösung mit gewöhnlichen Ionen besser löslich.",
          "fr": "Le sel est plus soluble dans une solution contenant des ions communs.",
          "ru": "Соль лучше растворяется в растворе с общими ионами.",
          "ar": "يكون الملح أكثر قابلية للذوبان في المحلول الذي يحتوي على الأيونات الشائعة.",
          "zh": "盐在具有普通离子的溶液中更易溶解。",
          "ku": "Xwê di çareyek bi îyonên hevpar de zêdetir tê çareserkirin."
        },
        {
          "tr": "Kapak açıldığında CO2'nin çözünürlüğü artar.",
          "en": "When the lid is opened, the solubility of CO2 increases.",
          "de": "Beim Öffnen des Deckels erhöht sich die Löslichkeit von CO2.",
          "fr": "Lorsque le couvercle est ouvert, la solubilité du CO2 augmente.",
          "ru": "При открытии крышки растворимость CO2 увеличивается.",
          "ar": "عند فتح الغطاء، تزداد ذوبان ثاني أكسيد الكربون.",
          "zh": "当盖子打开时，CO2 的溶解度增加。",
          "ku": "Dema ku qapax tê vekirin, çareserbûna CO2 zêde dibe."
        },
        {
          "tr": "Uçucu olmayan katı çözündüğünde suyun donma noktası yükselir.",
          "en": "When a non-volatile solid dissolves, the freezing point of water rises.",
          "de": "Wenn sich ein nichtflüchtiger Feststoff auflöst, steigt der Gefrierpunkt von Wasser.",
          "fr": "Lorsqu'un solide non volatil se dissout, le point de congélation de l'eau augmente.",
          "ru": "Когда нелетучее твердое вещество растворяется, температура замерзания воды повышается.",
          "ar": "عندما تذوب مادة صلبة غير متطايرة، ترتفع درجة تجمد الماء.",
          "zh": "当非挥发性固体溶解时，水的冰点升高。",
          "ku": "Dema ku tîrêjek nehilber dihele, xala cemidandinê ya avê bilind dibe."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Kışın yollara tuz atılması suyun donma noktasını alçaltarak buzlanmayı önleme uygulamasıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Sprinkling salt on the roads in winter is a practice to prevent icing by lowering the freezing point of water.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Das Streuen von Salz auf die Straßen im Winter ist eine Praxis, um Vereisung zu verhindern, indem der Gefrierpunkt des Wassers gesenkt wird.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Saupoudrer du sel sur les routes en hiver est une pratique visant à prévenir le givrage en abaissant le point de congélation de l'eau.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Посыпание дорог солью зимой – это практика предотвращения обледенения за счет снижения температуры замерзания воды.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يعد رش الملح على الطرق في الشتاء ممارسة لمنع تكون الجليد عن طريق خفض درجة تجمد الماء.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“冬季在道路上撒盐是通过降低水的冰点来防止结冰的做法。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di zivistanê de rijandina xwê li ser rêyan ji bo pêşîlêgirtina qeşayê bi kêmkirina xala cemidandinê ya avê, pratîkek e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u15-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Koligatif Özellikler ve Çözünürlük ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Colligative Properties & Solubility, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Kolligative Eigenschaften & Löslichkeit: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Propriétés Colligatives & Solubilité, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Коллигативные свойства и растворимость», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الخواص التجميعية والذوبانية\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“依数性与溶解度”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Taybetmendiyên Kolîgatîf û Çareserî\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Basınç arttıkça gazların çözünürlüğü azalır.",
          "en": "As pressure increases, the solubility of gases decreases.",
          "de": "Mit zunehmendem Druck nimmt die Löslichkeit von Gasen ab.",
          "fr": "À mesure que la pression augmente, la solubilité des gaz diminue.",
          "ru": "С увеличением давления растворимость газов снижается.",
          "ar": "مع زيادة الضغط، تنخفض ذوبان الغازات.",
          "zh": "随着压力增加，气体的溶解度降低。",
          "ku": "Her ku zext zêde dibe, helbûna gazan kêm dibe."
        },
        {
          "tr": "Eşit derişimli NaCl ve AlCl3 çözeltilerinin kaynama noktaları aynıdır.",
          "en": "Boiling points of equal concentrations of NaCl and AlCl3 solutions are the same.",
          "de": "Die Siedepunkte gleicher Konzentrationen von NaCl- und AlCl3-Lösungen sind gleich.",
          "fr": "Les points d'ébullition de concentrations égales de solutions NaCl et AlCl3 sont les mêmes.",
          "ru": "Температуры кипения растворов NaCl и AlCl3 равных концентраций одинаковы.",
          "ar": "نقاط غليان التركيزات المتساوية من محاليل NaCl وAlCl3 هي نفسها.",
          "zh": "等浓度的 NaCl 和 AlCl3 溶液的沸点相同。",
          "ku": "Xalên kelandinê yên pîvazên wekhev ên çareseriyên NaCl û AlCl3 yek in."
        },
        {
          "tr": "Otomobil radyatörlerine antifriz (etilen glikol) konması hem donmayı önler hem de kaynama noktasını yükseltir.",
          "en": "Putting antifreeze (ethylene glycol) in automobile radiators prevents freezing and increases the boiling point.",
          "de": "Das Einbringen von Frostschutzmittel (Ethylenglykol) in Autokühler verhindert das Einfrieren und erhöht den Siedepunkt.",
          "fr": "Mettre de l'antigel (éthylène glycol) dans les radiateurs des automobiles empêche le gel et augmente le point d'ébullition.",
          "ru": "Заливка антифриза (этиленгликоля) в автомобильные радиаторы предотвращает замерзание и повышает температуру кипения.",
          "ar": "إن وضع مادة مضادة للتجمد (إيثيلين جلايكول) في مشعات السيارات يمنع التجمد ويزيد من درجة الغليان.",
          "zh": "在汽车散热器中加入防冻剂（乙二醇）可以防止结冰并提高沸点。",
          "ku": "Di radyatorên otomobîlan de danîna antîfrezê (etilen glycol) pêşî li cemiandinê digire û xala kelandinê zêde dike."
        },
        {
          "tr": "Koligatif özellikler çözünen maddenin molekül geometrisine bağlıdır.",
          "en": "Colligative properties depend on the molecular geometry of the solute.",
          "de": "Kolligative Eigenschaften hängen von der Molekülgeometrie des gelösten Stoffes ab.",
          "fr": "Les propriétés colligatives dépendent de la géométrie moléculaire du soluté.",
          "ru": "Коллигативные свойства зависят от молекулярной геометрии растворенного вещества.",
          "ar": "تعتمد الخواص التجميعية على الهندسة الجزيئية للمذاب.",
          "zh": "依数性质取决于溶质的分子几何形状。",
          "ku": "Taybetmendiyên kolektîf bi geometriya molekulê ya solê ve girêdayî ye."
        },
        {
          "tr": "Glikoz suda çözündüğünde i = 2 kabul edilir.",
          "en": "When glucose dissolves in water, i = 2 is assumed.",
          "de": "Wenn sich Glucose in Wasser löst, wird i = 2 angenommen.",
          "fr": "Lorsque le glucose se dissout dans l’eau, on suppose que i = 2.",
          "ru": "Когда глюкоза растворяется в воде, предполагается i = 2.",
          "ar": "عندما يذوب الجلوكوز في الماء، يفترض i = 2.",
          "zh": "当葡萄糖溶解在水中时，假设 i = 2。",
          "ku": "Dema ku glukoz di avê de dihele, i = 2 tê texmîn kirin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Otomobil radyatörlerine antifriz (etilen glikol) konması hem donmayı önler hem de kaynama noktasını yükseltir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Putting antifreeze (ethylene glycol) in automobile radiators prevents freezing and increases the boiling point.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Das Einbringen von Frostschutzmittel (Ethylenglykol) in Autokühler verhindert das Einfrieren und erhöht den Siedepunkt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Mettre de l'antigel (éthylène glycol) dans les radiateurs des automobiles empêche le gel et augmente le point d'ébullition.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Заливка антифриза (этиленгликоля) в автомобильные радиаторы предотвращает замерзание и повышает температуру кипения.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إن وضع مادة مضادة للتجمد (إيثيلين جلايكول) في مشعات السيارات يمنع التجمد ويزيد من درجة الغليان.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在汽车散热器中加入防冻剂（乙二醇）可以防止结冰并提高沸点。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di radyatorên otomobîlan de danîna antîfrezê (etilen glycol) pêşî li cemiandinê digire û xala kelandinê zêde dike.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u15-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Koligatif Özellikler ve Çözünürlük konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Colligative Properties & Solubility, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Kolligative Eigenschaften & Löslichkeit die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Propriétés Colligatives & Solubilité, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Коллигативные свойства и растворимость», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الخواص التجميعية والذوبانية\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“依数性与溶解度”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Taybetmendiyên Kolîgatîf û Çareserî\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Tuzun sudaki çözünürlüğü yüksek basınçta iki katına çıkar.",
          "en": "The solubility of salt in water doubles at high pressure.",
          "de": "Bei hohem Druck verdoppelt sich die Löslichkeit von Salz in Wasser.",
          "fr": "La solubilité du sel dans l’eau double à haute pression.",
          "ru": "Растворимость соли в воде удваивается при высоком давлении.",
          "ar": "تتضاعف ذوبان الملح في الماء عند الضغط العالي.",
          "zh": "在高压下盐在水中的溶解度加倍。",
          "ku": "Di tansiyona bilind de helbûna xwê ya di avê de duqat dibe."
        },
        {
          "tr": "Aşırı doygun çözelti sonsuza kadar kararlı kalan dengeli sistemdir.",
          "en": "A supersaturated solution is a balanced system that remains stable forever.",
          "de": "Eine übersättigte Lösung ist ein ausgeglichenes System, das für immer stabil bleibt.",
          "fr": "Une solution sursaturée est un système équilibré qui reste stable pour toujours.",
          "ru": "Пересыщенный раствор — это сбалансированная система, которая остается стабильной навсегда.",
          "ar": "المحلول المفرط التشبع هو نظام متوازن يظل مستقرًا إلى الأبد.",
          "zh": "过饱和溶液是一个永远保持稳定的平衡系统。",
          "ku": "Çareseriya pir têrbûyî pergalek hevseng e ku her û her aram dimîne."
        },
        {
          "tr": "Kaynama noktası yükselmesi çözünenin mol kütlesiyle doğru orantılıdır.",
          "en": "The boiling point elevation is directly proportional to the molar mass of the solute.",
          "de": "Die Siedepunkterhöhung ist direkt proportional zur Molmasse des gelösten Stoffes.",
          "fr": "L'élévation du point d'ébullition est directement proportionnelle à la masse molaire du soluté.",
          "ru": "Повышение температуры кипения прямо пропорционально молярной массе растворенного вещества.",
          "ar": "يتناسب ارتفاع نقطة الغليان بشكل مباشر مع الكتلة المولية للمذاب.",
          "zh": "沸点升高与溶质的摩尔质量成正比。",
          "ku": "Bilindbûna nuqteya kelandinê rasterast bi girseya molarê ya madeya çareserkirinê re têkildar e."
        },
        {
          "tr": "Çözünürlük, 100 gram çözücüde belirli sıcaklık ve basınçta çözünebilen maksimum madde miktarıdır.",
          "en": "Solubility is the maximum amount of substance that can dissolve in 100 grams of solvent at a certain temperature and pressure.",
          "de": "Unter Löslichkeit versteht man die maximale Stoffmenge, die sich bei einer bestimmten Temperatur und einem bestimmten Druck in 100 Gramm Lösungsmittel lösen kann.",
          "fr": "La solubilité est la quantité maximale de substance pouvant se dissoudre dans 100 grammes de solvant à une certaine température et pression.",
          "ru": "Растворимость – это максимальное количество вещества, которое может раствориться в 100 граммах растворителя при определенной температуре и давлении.",
          "ar": "الذوبان هو الحد الأقصى لكمية المادة التي يمكن أن تذوب في 100 جرام من المذيب عند درجة حرارة وضغط معينين.",
          "zh": "溶解度是在一定温度和压力下，物质在100克溶剂中所能溶解的最大量。",
          "ku": "Çareserî ew maddeya herî zêde ye ku dikare di 100 gram halvekê de di germahî û zextek diyar de bihele."
        },
        {
          "tr": "Uçucu olmayan katı eklendiğinde çözeltinin buhar basıncı artar.",
          "en": "When a non-volatile solid is added, the vapor pressure of the solution increases.",
          "de": "Bei Zugabe eines nichtflüchtigen Feststoffs erhöht sich der Dampfdruck der Lösung.",
          "fr": "Lorsqu'un solide non volatil est ajouté, la pression de vapeur de la solution augmente.",
          "ru": "При добавлении нелетучего твердого вещества давление паров раствора увеличивается.",
          "ar": "عند إضافة مادة صلبة غير متطايرة، يزداد ضغط بخار المحلول.",
          "zh": "当添加非挥发性固体时，溶液的蒸气压增加。",
          "ku": "Dema ku ziravek nehêle tê zêdekirin, zexta buharê ya çareseriyê zêde dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Çözünürlük, 100 gram çözücüde belirli sıcaklık ve basınçta çözünebilen maksimum madde miktarıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Solubility is the maximum amount of substance that can dissolve in 100 grams of solvent at a certain temperature and pressure.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Unter Löslichkeit versteht man die maximale Stoffmenge, die sich bei einer bestimmten Temperatur und einem bestimmten Druck in 100 Gramm Lösungsmittel lösen kann.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La solubilité est la quantité maximale de substance pouvant se dissoudre dans 100 grammes de solvant à une certaine température et pression.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Растворимость – это максимальное количество вещества, которое может раствориться в 100 граммах растворителя при определенной температуре и давлении.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الذوبان هو الحد الأقصى لكمية المادة التي يمكن أن تذوب في 100 جرام من المذيب عند درجة حرارة وضغط معينين.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“溶解度是在一定温度和压力下，物质在100克溶剂中所能溶解的最大量。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Çareserî ew maddeya herî zêde ye ku dikare di 100 gram halvekê de di germahî û zextek diyar de bihele.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u15-twin10",
      "stem": {
        "tr": "Kimya dersinde Koligatif Özellikler ve Çözünürlük ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Colligative Properties & Solubility, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Kolligative Eigenschaften & Löslichkeit: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Propriétés Colligatives & Solubilité, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Коллигативные свойства и растворимость», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الخواص التجميعية والذوبانية\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“依数性与溶解度”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Taybetmendiyên Kolîgatîf û Çareserî\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Ortak iyon bulunan çözeltide tuz daha çok çözünür.",
          "en": "Salt is more soluble in a solution with common ions.",
          "de": "Salz ist in einer Lösung mit gewöhnlichen Ionen besser löslich.",
          "fr": "Le sel est plus soluble dans une solution contenant des ions communs.",
          "ru": "Соль лучше растворяется в растворе с общими ионами.",
          "ar": "يكون الملح أكثر قابلية للذوبان في المحلول الذي يحتوي على الأيونات الشائعة.",
          "zh": "盐在具有普通离子的溶液中更易溶解。",
          "ku": "Xwê di çareyek bi îyonên hevpar de zêdetir tê çareserkirin."
        },
        {
          "tr": "Kapak açıldığında CO2'nin çözünürlüğü artar.",
          "en": "When the lid is opened, the solubility of CO2 increases.",
          "de": "Beim Öffnen des Deckels erhöht sich die Löslichkeit von CO2.",
          "fr": "Lorsque le couvercle est ouvert, la solubilité du CO2 augmente.",
          "ru": "При открытии крышки растворимость CO2 увеличивается.",
          "ar": "عند فتح الغطاء، تزداد ذوبان ثاني أكسيد الكربون.",
          "zh": "当盖子打开时，CO2 的溶解度增加。",
          "ku": "Dema ku qapax tê vekirin, çareserbûna CO2 zêde dibe."
        },
        {
          "tr": "Uçucu olmayan katı çözündüğünde suyun donma noktası yükselir.",
          "en": "When a non-volatile solid dissolves, the freezing point of water rises.",
          "de": "Wenn sich ein nichtflüchtiger Feststoff auflöst, steigt der Gefrierpunkt von Wasser.",
          "fr": "Lorsqu'un solide non volatil se dissout, le point de congélation de l'eau augmente.",
          "ru": "Когда нелетучее твердое вещество растворяется, температура замерзания воды повышается.",
          "ar": "عندما تذوب مادة صلبة غير متطايرة، ترتفع درجة تجمد الماء.",
          "zh": "当非挥发性固体溶解时，水的冰点升高。",
          "ku": "Dema ku tîrêjek nehilber dihele, xala cemidandinê ya avê bilind dibe."
        },
        {
          "tr": "Ozmozda çözünen katı tanecikler zardan kolayca geçer.",
          "en": "Solid particles dissolved in osmosis easily pass through the membrane.",
          "de": "Bei der Osmose gelöste Feststoffpartikel passieren die Membran problemlos.",
          "fr": "Les particules solides dissoutes par osmose traversent facilement la membrane.",
          "ru": "Твердые частицы, растворенные при осмосе, легко проходят через мембрану.",
          "ar": "تمر الجزيئات الصلبة الذائبة في التناضح بسهولة عبر الغشاء.",
          "zh": "渗透溶解的固体颗粒很容易穿过膜。",
          "ku": "Parçeyên hişk ên ku di osmosê de têne hilweşandin bi hêsanî di parzûnê re derbas dibin."
        },
        {
          "tr": "Katıların sudaki çözünürlüğü genellikle endotermiktir (sıcaklık arttıkça artar); gazların çözünürlüğü daima ekzotermiktir.",
          "en": "The solubility of solids in water is generally endothermic (increases with increasing temperature); The solubility of gases is always exothermic.",
          "de": "Die Löslichkeit von Feststoffen in Wasser ist im Allgemeinen endotherm (steigt mit steigender Temperatur); Die Löslichkeit von Gasen ist immer exotherm.",
          "fr": "La solubilité des solides dans l'eau est généralement endothermique (augmente avec l'augmentation de la température) ; La solubilité des gaz est toujours exothermique.",
          "ru": "Растворимость твердых веществ в воде обычно эндотермична (увеличивается с повышением температуры); Растворимость газов всегда экзотермична.",
          "ar": "تكون قابلية ذوبان المواد الصلبة في الماء عمومًا ماصة للحرارة (تزداد مع زيادة درجة الحرارة)؛ إن ذوبان الغازات دائمًا ما يكون طاردًا للحرارة.",
          "zh": "固体在水中的溶解度通常是吸热的（随着温度的升高而增加）；气体的溶解度总是放热的。",
          "ku": "Çareserbûna maddeyên hişk di avê de bi gelemperî endotermîk e (bi zêdebûna germahiyê re zêde dibe); Çareserbûna gazan her dem germ e."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Katıların sudaki çözünürlüğü genellikle endotermiktir (sıcaklık arttıkça artar); gazların çözünürlüğü daima ekzotermiktir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The solubility of solids in water is generally endothermic (increases with increasing temperature); The solubility of gases is always exothermic.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Löslichkeit von Feststoffen in Wasser ist im Allgemeinen endotherm (steigt mit steigender Temperatur); Die Löslichkeit von Gasen ist immer exotherm.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La solubilité des solides dans l'eau est généralement endothermique (augmente avec l'augmentation de la température) ; La solubilité des gaz est toujours exothermique.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Растворимость твердых веществ в воде обычно эндотермична (увеличивается с повышением температуры); Растворимость газов всегда экзотермична.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تكون قابلية ذوبان المواد الصلبة في الماء عمومًا ماصة للحرارة (تزداد مع زيادة درجة الحرارة)؛ إن ذوبان الغازات دائمًا ما يكون طاردًا للحرارة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“固体在水中的溶解度通常是吸热的（随着温度的升高而增加）；气体的溶解度总是放热的。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Çareserbûna maddeyên hişk di avê de bi gelemperî endotermîk e (bi zêdebûna germahiyê re zêde dibe); Çareserbûna gazan her dem germ e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u15-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Koligatif Özellikler ve Çözünürlük konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Colligative Properties & Solubility?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Kolligative Eigenschaften & Löslichkeit zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Propriétés Colligatives & Solubilité ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Коллигативные свойства и растворимость»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الخواص التجميعية والذوبانية\"؟",
        "zh": "根据“依数性与溶解度”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Taybetmendiyên Kolîgatîf û Çareserî\" de rast e?"
      },
      "options": [
        {
          "tr": "Gazların sudaki çözünürlüğü basınç arttıkça artar (Henry Yasası; gazlı içeceklerin soğuk ve kapalı tutulması).",
          "en": "The solubility of gases in water increases as pressure increases (Henry's Law; keeping carbonated drinks cold and covered).",
          "de": "Die Löslichkeit von Gasen in Wasser nimmt mit zunehmendem Druck zu (Henrys Gesetz; kohlensäurehaltige Getränke kalt und abgedeckt halten).",
          "fr": "La solubilité des gaz dans l'eau augmente à mesure que la pression augmente (loi de Henry : garder les boissons gazeuses froides et couvertes).",
          "ru": "Растворимость газов в воде увеличивается с увеличением давления (закон Генри; храните газированные напитки холодными и закрытыми).",
          "ar": "تزداد ذوبان الغازات في الماء مع زيادة الضغط (قانون هنري؛ حفظ المشروبات الغازية باردة ومغطاة).",
          "zh": "气体在水中的溶解度随着压力的增加而增加（亨利定律；保持碳酸饮料冷藏并盖上盖子）。",
          "ku": "Bi zêdebûna zextê re helbûna gazên di avê de zêde dibe (Qanûna Henry; vexwarinên karbonatkirî sar û nixumandî hiştin)."
        },
        {
          "tr": "Eşit derişimli NaCl ve AlCl3 çözeltilerinin kaynama noktaları aynıdır.",
          "en": "Boiling points of equal concentrations of NaCl and AlCl3 solutions are the same.",
          "de": "Die Siedepunkte gleicher Konzentrationen von NaCl- und AlCl3-Lösungen sind gleich.",
          "fr": "Les points d'ébullition de concentrations égales de solutions NaCl et AlCl3 sont les mêmes.",
          "ru": "Температуры кипения растворов NaCl и AlCl3 равных концентраций одинаковы.",
          "ar": "نقاط غليان التركيزات المتساوية من محاليل NaCl وAlCl3 هي نفسها.",
          "zh": "等浓度的 NaCl 和 AlCl3 溶液的沸点相同。",
          "ku": "Xalên kelandinê yên pîvazên wekhev ên çareseriyên NaCl û AlCl3 yek in."
        },
        {
          "tr": "Koligatif özellikler çözünen maddenin molekül geometrisine bağlıdır.",
          "en": "Colligative properties depend on the molecular geometry of the solute.",
          "de": "Kolligative Eigenschaften hängen von der Molekülgeometrie des gelösten Stoffes ab.",
          "fr": "Les propriétés colligatives dépendent de la géométrie moléculaire du soluté.",
          "ru": "Коллигативные свойства зависят от молекулярной геометрии растворенного вещества.",
          "ar": "تعتمد الخواص التجميعية على الهندسة الجزيئية للمذاب.",
          "zh": "依数性质取决于溶质的分子几何形状。",
          "ku": "Taybetmendiyên kolektîf bi geometriya molekulê ya solê ve girêdayî ye."
        },
        {
          "tr": "Glikoz suda çözündüğünde i = 2 kabul edilir.",
          "en": "When glucose dissolves in water, i = 2 is assumed.",
          "de": "Wenn sich Glucose in Wasser löst, wird i = 2 angenommen.",
          "fr": "Lorsque le glucose se dissout dans l’eau, on suppose que i = 2.",
          "ru": "Когда глюкоза растворяется в воде, предполагается i = 2.",
          "ar": "عندما يذوب الجلوكوز في الماء، يفترض i = 2.",
          "zh": "当葡萄糖溶解在水中时，假设 i = 2。",
          "ku": "Dema ku glukoz di avê de dihele, i = 2 tê texmîn kirin."
        },
        {
          "tr": "Yollara tuz atılması tuzun kimyasal reaksiyonla ısı açığa çıkarması içindir.",
          "en": "Throwing salt on the roads causes the salt to release heat through a chemical reaction.",
          "de": "Das Streuen von Salz auf die Straße führt dazu, dass das Salz durch eine chemische Reaktion Wärme freisetzt.",
          "fr": "Jeter du sel sur les routes provoque la libération de chaleur par une réaction chimique.",
          "ru": "Рассыпание соли на дорогах приводит к тому, что соль выделяет тепло в результате химической реакции.",
          "ar": "يؤدي رمي الملح على الطرق إلى إطلاق الملح للحرارة من خلال تفاعل كيميائي.",
          "zh": "在路上撒盐会使盐通过化学反应释放热量。",
          "ku": "Avêtina xwê li ser rêyan dibe sedem ku xwê bi reaksiyonek kîmyayî germê berde."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Gazların sudaki çözünürlüğü basınç arttıkça artar (Henry Yasası; gazlı içeceklerin soğuk ve kapalı tutulması).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The solubility of gases in water increases as pressure increases (Henry's Law; keeping carbonated drinks cold and covered).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Löslichkeit von Gasen in Wasser nimmt mit zunehmendem Druck zu (Henrys Gesetz; kohlensäurehaltige Getränke kalt und abgedeckt halten).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La solubilité des gaz dans l'eau augmente à mesure que la pression augmente (loi de Henry : garder les boissons gazeuses froides et couvertes).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Растворимость газов в воде увеличивается с увеличением давления (закон Генри; храните газированные напитки холодными и закрытыми).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تزداد ذوبان الغازات في الماء مع زيادة الضغط (قانون هنري؛ حفظ المشروبات الغازية باردة ومغطاة).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“气体在水中的溶解度随着压力的增加而增加（亨利定律；保持碳酸饮料冷藏并盖上盖子）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Bi zêdebûna zextê re helbûna gazên di avê de zêde dibe (Qanûna Henry; vexwarinên karbonatkirî sar û nixumandî hiştin).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u15-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Koligatif Özellikler ve Çözünürlük sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Colligative Properties & Solubility, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Kolligative Eigenschaften & Löslichkeit: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Propriétés Colligatives & Solubilité, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Коллигативные свойства и растворимость», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الخواص التجميعية والذوبانية\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“依数性与溶解度”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Taybetmendiyên Kolîgatîf û Çareserî\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Aşırı doygun çözelti sonsuza kadar kararlı kalan dengeli sistemdir.",
          "en": "A supersaturated solution is a balanced system that remains stable forever.",
          "de": "Eine übersättigte Lösung ist ein ausgeglichenes System, das für immer stabil bleibt.",
          "fr": "Une solution sursaturée est un système équilibré qui reste stable pour toujours.",
          "ru": "Пересыщенный раствор — это сбалансированная система, которая остается стабильной навсегда.",
          "ar": "المحلول المفرط التشبع هو نظام متوازن يظل مستقرًا إلى الأبد.",
          "zh": "过饱和溶液是一个永远保持稳定的平衡系统。",
          "ku": "Çareseriya pir têrbûyî pergalek hevseng e ku her û her aram dimîne."
        },
        {
          "tr": "Katı ve sıvıların çözünürlüğüne basıncın etkisi ihmal edilecek kadar azdır.",
          "en": "The effect of pressure on the solubility of solids and liquids is negligible.",
          "de": "Der Einfluss des Drucks auf die Löslichkeit von Feststoffen und Flüssigkeiten ist vernachlässigbar.",
          "fr": "L'effet de la pression sur la solubilité des solides et des liquides est négligeable.",
          "ru": "Влияние давления на растворимость твердых тел и жидкостей незначительно.",
          "ar": "تأثير الضغط على ذوبان المواد الصلبة والسوائل لا يكاد يذكر.",
          "zh": "压力对固体和液体溶解度的影响可以忽略不计。",
          "ku": "Bandora zextê ya li ser helbûna maddeyên hişk û şilek kêm e."
        },
        {
          "tr": "Kaynama noktası yükselmesi çözünenin mol kütlesiyle doğru orantılıdır.",
          "en": "The boiling point elevation is directly proportional to the molar mass of the solute.",
          "de": "Die Siedepunkterhöhung ist direkt proportional zur Molmasse des gelösten Stoffes.",
          "fr": "L'élévation du point d'ébullition est directement proportionnelle à la masse molaire du soluté.",
          "ru": "Повышение температуры кипения прямо пропорционально молярной массе растворенного вещества.",
          "ar": "يتناسب ارتفاع نقطة الغليان بشكل مباشر مع الكتلة المولية للمذاب.",
          "zh": "沸点升高与溶质的摩尔质量成正比。",
          "ku": "Bilindbûna nuqteya kelandinê rasterast bi girseya molarê ya madeya çareserkirinê re têkildar e."
        },
        {
          "tr": "Uçucu olmayan katı eklendiğinde çözeltinin buhar basıncı artar.",
          "en": "When a non-volatile solid is added, the vapor pressure of the solution increases.",
          "de": "Bei Zugabe eines nichtflüchtigen Feststoffs erhöht sich der Dampfdruck der Lösung.",
          "fr": "Lorsqu'un solide non volatil est ajouté, la pression de vapeur de la solution augmente.",
          "ru": "При добавлении нелетучего твердого вещества давление паров раствора увеличивается.",
          "ar": "عند إضافة مادة صلبة غير متطايرة، يزداد ضغط بخار المحلول.",
          "zh": "当添加非挥发性固体时，溶液的蒸气压增加。",
          "ku": "Dema ku ziravek nehêle tê zêdekirin, zexta buharê ya çareseriyê zêde dibe."
        },
        {
          "tr": "Antifriz suyun donma noktasını 0 °C'nin üzerine çıkarır.",
          "en": "Antifreeze raises the freezing point of water above 0 °C.",
          "de": "Frostschutzmittel erhöhen den Gefrierpunkt von Wasser über 0 °C.",
          "fr": "L'antigel élève le point de congélation de l'eau au-dessus de 0 °C.",
          "ru": "Антифриз повышает температуру замерзания воды выше 0 °C.",
          "ar": "يعمل مضاد التجمد على رفع درجة تجمد الماء إلى ما فوق 0 درجة مئوية.",
          "zh": "防冻剂可将水的冰点提高到 0 °C 以上。",
          "ku": "Antîfrîz xala cemidandinê ya avê ji 0 °C bilind dike."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Katı ve sıvıların çözünürlüğüne basıncın etkisi ihmal edilecek kadar azdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The effect of pressure on the solubility of solids and liquids is negligible.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der Einfluss des Drucks auf die Löslichkeit von Feststoffen und Flüssigkeiten ist vernachlässigbar.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'effet de la pression sur la solubilité des solides et des liquides est négligeable.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Влияние давления на растворимость твердых тел и жидкостей незначительно.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تأثير الضغط على ذوبان المواد الصلبة والسوائل لا يكاد يذكر.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“压力对固体和液体溶解度的影响可以忽略不计。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Bandora zextê ya li ser helbûna maddeyên hişk û şilek kêm e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u15-twin13",
      "stem": {
        "tr": "Aşağıda Koligatif Özellikler ve Çözünürlük ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Colligative Properties & Solubility, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Kolligative Eigenschaften & Löslichkeit: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Propriétés Colligatives & Solubilité, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Коллигативные свойства и растворимость», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الخواص التجميعية والذوبانية\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“依数性与溶解度”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Taybetmendiyên Kolîgatîf û Çareserî\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Kapak açıldığında CO2'nin çözünürlüğü artar.",
          "en": "When the lid is opened, the solubility of CO2 increases.",
          "de": "Beim Öffnen des Deckels erhöht sich die Löslichkeit von CO2.",
          "fr": "Lorsque le couvercle est ouvert, la solubilité du CO2 augmente.",
          "ru": "При открытии крышки растворимость CO2 увеличивается.",
          "ar": "عند فتح الغطاء، تزداد ذوبان ثاني أكسيد الكربون.",
          "zh": "当盖子打开时，CO2 的溶解度增加。",
          "ku": "Dema ku qapax tê vekirin, çareserbûna CO2 zêde dibe."
        },
        {
          "tr": "Uçucu olmayan katı çözündüğünde suyun donma noktası yükselir.",
          "en": "When a non-volatile solid dissolves, the freezing point of water rises.",
          "de": "Wenn sich ein nichtflüchtiger Feststoff auflöst, steigt der Gefrierpunkt von Wasser.",
          "fr": "Lorsqu'un solide non volatil se dissout, le point de congélation de l'eau augmente.",
          "ru": "Когда нелетучее твердое вещество растворяется, температура замерзания воды повышается.",
          "ar": "عندما تذوب مادة صلبة غير متطايرة، ترتفع درجة تجمد الماء.",
          "zh": "当非挥发性固体溶解时，水的冰点升高。",
          "ku": "Dema ku tîrêjek nehilber dihele, xala cemidandinê ya avê bilind dibe."
        },
        {
          "tr": "Ortak iyon etkisi çözünürlüğü daima azaltır (Le Chatelier prensibi).",
          "en": "The common ion effect always reduces the solubility (Le Chatelier's principle).",
          "de": "Der gemeinsame Ioneneffekt verringert immer die Löslichkeit (Prinzip von Le Chatelier).",
          "fr": "L'effet des ions communs réduit toujours la solubilité (principe de Le Chatelier).",
          "ru": "Эффект общего иона всегда снижает растворимость (принцип Ле Шателье).",
          "ar": "إن تأثير الأيون المشترك يقلل دائمًا من قابلية الذوبان (مبدأ لو شاتيليه).",
          "zh": "共离子效应总是会降低溶解度（勒夏特列原理）。",
          "ku": "Bandora îyona hevpar her gav çareserbûnê kêm dike (prensîba Le Chatelier)."
        },
        {
          "tr": "Ozmozda çözünen katı tanecikler zardan kolayca geçer.",
          "en": "Solid particles dissolved in osmosis easily pass through the membrane.",
          "de": "Bei der Osmose gelöste Feststoffpartikel passieren die Membran problemlos.",
          "fr": "Les particules solides dissoutes par osmose traversent facilement la membrane.",
          "ru": "Твердые частицы, растворенные при осмосе, легко проходят через мембрану.",
          "ar": "تمر الجزيئات الصلبة الذائبة في التناضح بسهولة عبر الغشاء.",
          "zh": "渗透溶解的固体颗粒很容易穿过膜。",
          "ku": "Parçeyên hişk ên ku di osmosê de têne hilweşandin bi hêsanî di parzûnê re derbas dibin."
        },
        {
          "tr": "Çözünürlük 1 litre çözeltide çözünen katı gramıdır.",
          "en": "Solubility is the gram of solid dissolved in 1 liter of solution.",
          "de": "Die Löslichkeit ist das Gramm Feststoff, gelöst in 1 Liter Lösung.",
          "fr": "La solubilité est le gramme de solide dissous dans 1 litre de solution.",
          "ru": "Растворимость – это грамм твердого вещества, растворенного в 1 л раствора.",
          "ar": "الذوبان هو جرام المادة الصلبة المذابة في 1 لتر من المحلول.",
          "zh": "溶解度是溶解在 1 升溶液中的固体克数。",
          "ku": "Çareserbûn gram e ku di 1 lîtreya haletê de tê helandin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Ortak iyon etkisi çözünürlüğü daima azaltır (Le Chatelier prensibi).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The common ion effect always reduces the solubility (Le Chatelier's principle).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der gemeinsame Ioneneffekt verringert immer die Löslichkeit (Prinzip von Le Chatelier).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'effet des ions communs réduit toujours la solubilité (principe de Le Chatelier).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Эффект общего иона всегда снижает растворимость (принцип Ле Шателье).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إن تأثير الأيون المشترك يقلل دائمًا من قابلية الذوبان (مبدأ لو شاتيليه).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“共离子效应总是会降低溶解度（勒夏特列原理）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Bandora îyona hevpar her gav çareserbûnê kêm dike (prensîba Le Chatelier).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u15-twin14",
      "stem": {
        "tr": "Koligatif Özellikler ve Çözünürlük konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Colligative Properties & Solubility, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Kolligative Eigenschaften & Löslichkeit: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Propriétés Colligatives & Solubilité, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Коллигативные свойства и растворимость», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الخواص التجميعية والذوبانية\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“依数性与溶解度”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Taybetmendiyên Kolîgatîf û Çareserî\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Koligatif özellikler çözünen maddenin molekül geometrisine bağlıdır.",
          "en": "Colligative properties depend on the molecular geometry of the solute.",
          "de": "Kolligative Eigenschaften hängen von der Molekülgeometrie des gelösten Stoffes ab.",
          "fr": "Les propriétés colligatives dépendent de la géométrie moléculaire du soluté.",
          "ru": "Коллигативные свойства зависят от молекулярной геометрии растворенного вещества.",
          "ar": "تعتمد الخواص التجميعية على الهندسة الجزيئية للمذاب.",
          "zh": "依数性质取决于溶质的分子几何形状。",
          "ku": "Taybetmendiyên kolektîf bi geometriya molekulê ya solê ve girêdayî ye."
        },
        {
          "tr": "Glikoz suda çözündüğünde i = 2 kabul edilir.",
          "en": "When glucose dissolves in water, i = 2 is assumed.",
          "de": "Wenn sich Glucose in Wasser löst, wird i = 2 angenommen.",
          "fr": "Lorsque le glucose se dissout dans l’eau, on suppose que i = 2.",
          "ru": "Когда глюкоза растворяется в воде, предполагается i = 2.",
          "ar": "عندما يذوب الجلوكوز في الماء، يفترض i = 2.",
          "zh": "当葡萄糖溶解在水中时，假设 i = 2。",
          "ku": "Dema ku glukoz di avê de dihele, i = 2 tê texmîn kirin."
        },
        {
          "tr": "Yollara tuz atılması tuzun kimyasal reaksiyonla ısı açığa çıkarması içindir.",
          "en": "Throwing salt on the roads causes the salt to release heat through a chemical reaction.",
          "de": "Das Streuen von Salz auf die Straße führt dazu, dass das Salz durch eine chemische Reaktion Wärme freisetzt.",
          "fr": "Jeter du sel sur les routes provoque la libération de chaleur par une réaction chimique.",
          "ru": "Рассыпание соли на дорогах приводит к тому, что соль выделяет тепло в результате химической реакции.",
          "ar": "يؤدي رمي الملح على الطرق إلى إطلاق الملح للحرارة من خلال تفاعل كيميائي.",
          "zh": "在路上撒盐会使盐通过化学反应释放热量。",
          "ku": "Avêtina xwê li ser rêyan dibe sedem ku xwê bi reaksiyonek kîmyayî germê berde."
        },
        {
          "tr": "Çözeltideki toplam iyon derişimi ne kadar büyükse donma noktası o kadar düşük, kaynama noktası o kadar yüksektir.",
          "en": "The greater the total ion concentration in the solution, the lower the freezing point and the higher the boiling point.",
          "de": "Je höher die Gesamtionenkonzentration in der Lösung ist, desto niedriger ist der Gefrierpunkt und desto höher ist der Siedepunkt.",
          "fr": "Plus la concentration totale d’ions dans la solution est élevée, plus le point de congélation est bas et plus le point d’ébullition est élevé.",
          "ru": "Чем больше общая концентрация ионов в растворе, тем ниже температура замерзания и выше температура кипения.",
          "ar": "كلما زاد تركيز الأيونات الكلي في المحلول، انخفضت نقطة التجمد وارتفعت نقطة الغليان.",
          "zh": "溶液中总离子浓度越大，凝固点越低，沸点越高。",
          "ku": "Çi qas îyona giştî ya di çareseriyê de mezintir be, ew qas nuqteya cemidandinê kêmtir û xala kelandinê jî bilindtir dibe."
        },
        {
          "tr": "Gazların sudaki çözünürlüğü sıcaklık arttıkça hızla artar.",
          "en": "The solubility of gases in water increases rapidly as temperature increases.",
          "de": "Die Löslichkeit von Gasen in Wasser nimmt mit steigender Temperatur schnell zu.",
          "fr": "La solubilité des gaz dans l’eau augmente rapidement à mesure que la température augmente.",
          "ru": "Растворимость газов в воде быстро возрастает с повышением температуры.",
          "ar": "تزداد قابلية ذوبان الغازات في الماء بسرعة مع زيادة درجة الحرارة.",
          "zh": "气体在水中的溶解度随着温度的升高而迅速增加。",
          "ku": "Her ku germahî zêde dibe di avê de helbûna gazan bi lez zêde dibe."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Çözeltideki toplam iyon derişimi ne kadar büyükse donma noktası o kadar düşük, kaynama noktası o kadar yüksektir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The greater the total ion concentration in the solution, the lower the freezing point and the higher the boiling point.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Je höher die Gesamtionenkonzentration in der Lösung ist, desto niedriger ist der Gefrierpunkt und desto höher ist der Siedepunkt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Plus la concentration totale d’ions dans la solution est élevée, plus le point de congélation est bas et plus le point d’ébullition est élevé.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Чем больше общая концентрация ионов в растворе, тем ниже температура замерзания и выше температура кипения.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"كلما زاد تركيز الأيونات الكلي في المحلول، انخفضت نقطة التجمد وارتفعت نقطة الغليان.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“溶液中总离子浓度越大，凝固点越低，沸点越高。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Çi qas îyona giştî ya di çareseriyê de mezintir be, ew qas nuqteya cemidandinê kêmtir û xala kelandinê jî bilindtir dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u15-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Koligatif Özellikler ve Çözünürlük ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Colligative Properties & Solubility, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Kolligative Eigenschaften & Löslichkeit: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Propriétés Colligatives & Solubilité, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Коллигативные свойства и растворимость», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الخواص التجميعية والذوبانية\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“依数性与溶解度”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Taybetmendiyên Kolîgatîf û Çareserî\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Kaynama noktası yükselmesi çözünenin mol kütlesiyle doğru orantılıdır.",
          "en": "The boiling point elevation is directly proportional to the molar mass of the solute.",
          "de": "Die Siedepunkterhöhung ist direkt proportional zur Molmasse des gelösten Stoffes.",
          "fr": "L'élévation du point d'ébullition est directement proportionnelle à la masse molaire du soluté.",
          "ru": "Повышение температуры кипения прямо пропорционально молярной массе растворенного вещества.",
          "ar": "يتناسب ارتفاع نقطة الغليان بشكل مباشر مع الكتلة المولية للمذاب.",
          "zh": "沸点升高与溶质的摩尔质量成正比。",
          "ku": "Bilindbûna nuqteya kelandinê rasterast bi girseya molarê ya madeya çareserkirinê re têkildar e."
        },
        {
          "tr": "Uçucu olmayan katı eklendiğinde çözeltinin buhar basıncı artar.",
          "en": "When a non-volatile solid is added, the vapor pressure of the solution increases.",
          "de": "Bei Zugabe eines nichtflüchtigen Feststoffs erhöht sich der Dampfdruck der Lösung.",
          "fr": "Lorsqu'un solide non volatil est ajouté, la pression de vapeur de la solution augmente.",
          "ru": "При добавлении нелетучего твердого вещества давление паров раствора увеличивается.",
          "ar": "عند إضافة مادة صلبة غير متطايرة، يزداد ضغط بخار المحلول.",
          "zh": "当添加非挥发性固体时，溶液的蒸气压增加。",
          "ku": "Dema ku ziravek nehêle tê zêdekirin, zexta buharê ya çareseriyê zêde dibe."
        },
        {
          "tr": "Antifriz suyun donma noktasını 0 °C'nin üzerine çıkarır.",
          "en": "Antifreeze raises the freezing point of water above 0 °C.",
          "de": "Frostschutzmittel erhöhen den Gefrierpunkt von Wasser über 0 °C.",
          "fr": "L'antigel élève le point de congélation de l'eau au-dessus de 0 °C.",
          "ru": "Антифриз повышает температуру замерзания воды выше 0 °C.",
          "ar": "يعمل مضاد التجمد على رفع درجة تجمد الماء إلى ما فوق 0 درجة مئوية.",
          "zh": "防冻剂可将水的冰点提高到 0 °C 以上。",
          "ku": "Antîfrîz xala cemidandinê ya avê ji 0 °C bilind dike."
        },
        {
          "tr": "Basınç arttıkça gazların çözünürlüğü azalır.",
          "en": "As pressure increases, the solubility of gases decreases.",
          "de": "Mit zunehmendem Druck nimmt die Löslichkeit von Gasen ab.",
          "fr": "À mesure que la pression augmente, la solubilité des gaz diminue.",
          "ru": "С увеличением давления растворимость газов снижается.",
          "ar": "مع زيادة الضغط، تنخفض ذوبان الغازات.",
          "zh": "随着压力增加，气体的溶解度降低。",
          "ku": "Her ku zext zêde dibe, helbûna gazan kêm dibe."
        },
        {
          "tr": "Doygunluk: Çözebileceği kadar çözünen içeren çözelti doygundur; aşırı doygun çözeltiler kararsızdır ve aşı kristaliyle çöker.",
          "en": "Saturation: A solution that contains as much solute as it can dissolve is saturated; Supersaturated solutions are unstable and precipitate with the seed crystal.",
          "de": "Sättigung: Eine Lösung, die so viel gelösten Stoff enthält, wie sie lösen kann, ist gesättigt; Übersättigte Lösungen sind instabil und fallen mit dem Impfkristall aus.",
          "fr": "Saturation : Une solution qui contient autant de soluté qu’elle peut se dissoudre est saturée ; Les solutions sursaturées sont instables et précipitent avec les germes cristallins.",
          "ru": "Насыщение: раствор, который содержит столько растворенного вещества, сколько он может растворить, является насыщенным; Пересыщенные растворы нестабильны и выпадают в осадок вместе с затравочными кристаллами.",
          "ar": "التشبع: المحلول الذي يحتوي على أكبر قدر ممكن من المذاب يكون مشبعًا؛ المحاليل المفرطة التشبع غير مستقرة وتترسب مع بلورة البذور.",
          "zh": "饱和：含有尽可能多的溶质的溶液是饱和的；过饱和溶液不稳定并与晶种一起沉淀。",
          "ku": "Têrbûn: Çareya ku tê de bi qasî ku dikare bihelîne, têrbûyî ye; Çareseriyên zêde têrbûyî bêîstîkrar in û bi krîstala tovê re diherikin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Doygunluk: Çözebileceği kadar çözünen içeren çözelti doygundur; aşırı doygun çözeltiler kararsızdır ve aşı kristaliyle çöker.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Saturation: A solution that contains as much solute as it can dissolve is saturated; Supersaturated solutions are unstable and precipitate with the seed crystal.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Sättigung: Eine Lösung, die so viel gelösten Stoff enthält, wie sie lösen kann, ist gesättigt; Übersättigte Lösungen sind instabil und fallen mit dem Impfkristall aus.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Saturation : Une solution qui contient autant de soluté qu’elle peut se dissoudre est saturée ; Les solutions sursaturées sont instables et précipitent avec les germes cristallins.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Насыщение: раствор, который содержит столько растворенного вещества, сколько он может растворить, является насыщенным; Пересыщенные растворы нестабильны и выпадают в осадок вместе с затравочными кристаллами.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"التشبع: المحلول الذي يحتوي على أكبر قدر ممكن من المذاب يكون مشبعًا؛ المحاليل المفرطة التشبع غير مستقرة وتترسب مع بلورة البذور.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“饱和：含有尽可能多的溶质的溶液是饱和的；过饱和溶液不稳定并与晶种一起沉淀。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Têrbûn: Çareya ku tê de bi qasî ku dikare bihelîne, têrbûyî ye; Çareseriyên zêde têrbûyî bêîstîkrar in û bi krîstala tovê re diherikin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u15-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Koligatif Özellikler ve Çözünürlük konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Colligative Properties & Solubility, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Kolligative Eigenschaften & Löslichkeit die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Propriétés Colligatives & Solubilité, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Коллигативные свойства и растворимость», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الخواص التجميعية والذوبانية\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“依数性与溶解度”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Taybetmendiyên Kolîgatîf û Çareserî\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Gazoz kapağı açıldığında basınç düştüğü için CO2 gazı kabarcıklar halinde çözeltiden ayrılır.",
          "en": "When the soda cap is opened, CO2 gas leaves the solution in the form of bubbles as the pressure drops.",
          "de": "Wenn der Soda-Verschluss geöffnet wird, verlässt CO2-Gas die Lösung in Form von Blasen, da der Druck sinkt.",
          "fr": "Lorsque le bouchon de soude est ouvert, le gaz CO2 quitte la solution sous forme de bulles à mesure que la pression chute.",
          "ru": "Когда крышка газировки открыта, газ CO2 выходит из раствора в виде пузырьков при падении давления.",
          "ar": "عند فتح غطاء الصودا، يترك غاز ثاني أكسيد الكربون المحلول على شكل فقاعات مع انخفاض الضغط.",
          "zh": "当汽水盖打开时，随着压力下降，CO2 气体以气泡的形式离开溶液。",
          "ku": "Dema ku kapika sodayê tê vekirin, gaza CO2 ji çareseriyê di şiklê bilbilan de derdikeve ku zext dakeve."
        },
        {
          "tr": "Uçucu olmayan katı çözündüğünde suyun donma noktası yükselir.",
          "en": "When a non-volatile solid dissolves, the freezing point of water rises.",
          "de": "Wenn sich ein nichtflüchtiger Feststoff auflöst, steigt der Gefrierpunkt von Wasser.",
          "fr": "Lorsqu'un solide non volatil se dissout, le point de congélation de l'eau augmente.",
          "ru": "Когда нелетучее твердое вещество растворяется, температура замерзания воды повышается.",
          "ar": "عندما تذوب مادة صلبة غير متطايرة، ترتفع درجة تجمد الماء.",
          "zh": "当非挥发性固体溶解时，水的冰点升高。",
          "ku": "Dema ku tîrêjek nehilber dihele, xala cemidandinê ya avê bilind dibe."
        },
        {
          "tr": "Ozmozda çözünen katı tanecikler zardan kolayca geçer.",
          "en": "Solid particles dissolved in osmosis easily pass through the membrane.",
          "de": "Bei der Osmose gelöste Feststoffpartikel passieren die Membran problemlos.",
          "fr": "Les particules solides dissoutes par osmose traversent facilement la membrane.",
          "ru": "Твердые частицы, растворенные при осмосе, легко проходят через мембрану.",
          "ar": "تمر الجزيئات الصلبة الذائبة في التناضح بسهولة عبر الغشاء.",
          "zh": "渗透溶解的固体颗粒很容易穿过膜。",
          "ku": "Parçeyên hişk ên ku di osmosê de têne hilweşandin bi hêsanî di parzûnê re derbas dibin."
        },
        {
          "tr": "Çözünürlük 1 litre çözeltide çözünen katı gramıdır.",
          "en": "Solubility is the gram of solid dissolved in 1 liter of solution.",
          "de": "Die Löslichkeit ist das Gramm Feststoff, gelöst in 1 Liter Lösung.",
          "fr": "La solubilité est le gramme de solide dissous dans 1 litre de solution.",
          "ru": "Растворимость – это грамм твердого вещества, растворенного в 1 л раствора.",
          "ar": "الذوبان هو جرام المادة الصلبة المذابة في 1 لتر من المحلول.",
          "zh": "溶解度是溶解在 1 升溶液中的固体克数。",
          "ku": "Çareserbûn gram e ku di 1 lîtreya haletê de tê helandin."
        },
        {
          "tr": "Tuzun sudaki çözünürlüğü yüksek basınçta iki katına çıkar.",
          "en": "The solubility of salt in water doubles at high pressure.",
          "de": "Bei hohem Druck verdoppelt sich die Löslichkeit von Salz in Wasser.",
          "fr": "La solubilité du sel dans l’eau double à haute pression.",
          "ru": "Растворимость соли в воде удваивается при высоком давлении.",
          "ar": "تتضاعف ذوبان الملح في الماء عند الضغط العالي.",
          "zh": "在高压下盐在水中的溶解度加倍。",
          "ku": "Di tansiyona bilind de helbûna xwê ya di avê de duqat dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Gazoz kapağı açıldığında basınç düştüğü için CO2 gazı kabarcıklar halinde çözeltiden ayrılır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"When the soda cap is opened, CO2 gas leaves the solution in the form of bubbles as the pressure drops.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn der Soda-Verschluss geöffnet wird, verlässt CO2-Gas die Lösung in Form von Blasen, da der Druck sinkt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Lorsque le bouchon de soude est ouvert, le gaz CO2 quitte la solution sous forme de bulles à mesure que la pression chute.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Когда крышка газировки открыта, газ CO2 выходит из раствора в виде пузырьков при падении давления.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عند فتح غطاء الصودا، يترك غاز ثاني أكسيد الكربون المحلول على شكل فقاعات مع انخفاض الضغط.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“当汽水盖打开时，随着压力下降，CO2 气体以气泡的形式离开溶液。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Dema ku kapika sodayê tê vekirin, gaza CO2 ji çareseriyê di şiklê bilbilan de derdikeve ku zext dakeve.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit15;
