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
    "ar": "الخواص التجميعية والذائبية",
    "zh": "依数性与溶解度",
    "ku": "Taybetmendiyên Kolîgatîf û Helbûnî"
  },
  "subtitle": {
    "tr": "Kaynama Noktası Yükselmesi, Donma Noktası ve Raoult",
    "en": "Boiling Elevation, Freezing Depression & Kk/Kd",
    "de": "Siedepunkterhöhung, Gefrierpunkt und Raoult",
    "fr": "Élévation du point d'ébullition, point de congélation et Raoult",
    "ru": "Повышение температуры кипения, понижение температуры замерзания и закон Рауля",
    "ar": "الارتفاع في درجة الغليان والانخفاض في درجة التجمد وقانون راؤول",
    "zh": "沸点升高、凝固点降低与拉乌尔定律",
    "ku": "Bilindbûna Xala Kelînê, Xala Cemidînê û Raoult"
  },
  "facts": [
    {
      "id": "u15-f01",
      "fact": {
        "tr": "Koligatif özellikler çözünen maddenin kimyasal cinsine değil, çözeltideki toplam tanecik derişimine bağlıdır.",
        "en": "Colligative properties depend on the total particle concentration in the solution, not on the chemical type of the solute.",
        "de": "Kolligative Eigenschaften hängen von der Gesamtpartikelkonzentration in der Lösung ab, nicht von der chemischen Art des gelösten Stoffes.",
        "fr": "Les propriétés colligatives dépendent de la concentration totale de particules dans la solution et non du type chimique du soluté.",
        "ru": "Коллигативные свойства зависят не от химической природы растворённого вещества, а от общей концентрации частиц в растворе.",
        "ar": "تعتمد الخواص التجميعية على التركيز الكلي للجسيمات في المحلول، لا على النوع الكيميائي للمذاب.",
        "zh": "依数性取决于溶液中溶质粒子的总浓度，而与溶质的化学种类无关。",
        "ku": "Taybetmendiyên kolîgatîf ne bi cureyê kîmyewî yê madeya helbûyî, lê bi tîrbûna giştî ya perçeyan a di çareseriyê de ve girêdayî ne."
      },
      "trap": {
        "tr": "Koligatif özellikler çözünen maddenin molekül geometrisine bağlıdır.",
        "en": "Colligative properties depend on the molecular geometry of the solute.",
        "de": "Kolligative Eigenschaften hängen von der Molekülgeometrie des gelösten Stoffes ab.",
        "fr": "Les propriétés colligatives dépendent de la géométrie moléculaire du soluté.",
        "ru": "Коллигативные свойства зависят от геометрии молекул растворённого вещества.",
        "ar": "تعتمد الخواص التجميعية على الشكل الهندسي لجزيء المذاب.",
        "zh": "依数性取决于溶质分子的几何构型。",
        "ku": "Taybetmendiyên kolîgatîf bi geometriya molekulê ya madeya helbûyî ve girêdayî ne."
      },
      "whyTrapIsFalse": {
        "tr": "Koligatif özellikler çözünenin şekline ya da kimliğine değil, çözeltide kaç tanecik oluşturduğuna bakar; aynı tanecik derişiminde farklı geometrili maddeler aynı etkiyi yapar.",
        "en": "Colligative properties depend not on the shape or identity of the solute but on how many particles it forms in solution; substances of different geometry give the same effect at the same particle concentration.",
        "de": "Kolligative Eigenschaften hängen nicht von der Form oder Art des gelösten Stoffes ab, sondern davon, wie viele Teilchen er in der Lösung bildet; bei gleicher Teilchenkonzentration wirken Stoffe unterschiedlicher Geometrie gleich.",
        "fr": "Les propriétés colligatives ne dépendent pas de la forme ni de la nature du soluté, mais du nombre de particules qu'il forme en solution ; à même concentration en particules, des substances de géométries différentes ont le même effet.",
        "ru": "Коллигативные свойства зависят не от формы или природы растворённого вещества, а от числа частиц, которые оно образует в растворе; при одинаковой концентрации частиц вещества разной геометрии дают одинаковый эффект.",
        "ar": "لا تعتمد الخواص التجميعية على شكل المذاب أو نوعه، بل على عدد الجسيمات التي يكوّنها في المحلول؛ فالمواد المختلفة الشكل تعطي التأثير نفسه عند تساوي تركيز الجسيمات.",
        "zh": "依数性与溶质的形状或种类无关，只取决于它在溶液中形成的粒子数；粒子浓度相同时，几何形状不同的物质产生相同的效应。",
        "ku": "Taybetmendiyên kolîgatîf ne bi şekil an nasnameya madeya helbûyî, lê bi hejmara perçeyên ku ew di çareseriyê de çêdike ve girêdayî ne; di heman tîrbûna perçeyan de madeyên bi geometriya cuda heman bandorê dikin."
      }
    },
    {
      "id": "u15-f02",
      "fact": {
        "tr": "Kaynama noktası yükselmesi: ΔTk = Kk * m * i'dir (Kk: kaynama noktası sabiti, m: molalite, i: van 't Hoff faktörü).",
        "en": "Boiling point elevation: ΔTb = Kb * m * i (Kb: boiling point elevation constant, m: molality, i: van 't Hoff factor).",
        "de": "Siedepunkterhöhung: ΔTs = Ks * m * i (Ks: ebullioskopische Konstante, m: Molalität, i: Van-'t-Hoff-Faktor).",
        "fr": "Élévation du point d'ébullition : ΔTéb = Kéb * m * i (Kéb : constante ébullioscopique, m : molalité, i : facteur de van 't Hoff).",
        "ru": "Повышение температуры кипения: ΔTкип = Kэб * m * i (Kэб — эбулиоскопическая константа, m — моляльность, i — изотонический коэффициент Вант-Гоффа).",
        "ar": "الارتفاع في درجة الغليان: ΔTb = Kb * m * i (Kb: ثابت الارتفاع في درجة الغليان، m: المولالية، i: عامل فانت هوف).",
        "zh": "沸点升高：ΔTb = Kb * m * i(Kb：沸点升高常数，m：质量摩尔浓度，i：范特霍夫因子)。",
        "ku": "Bilindbûna xala kelînê: ΔTk = Kk * m * i ye (Kk: sabîta xala kelînê, m: molalîte, i: faktora van 't Hoff)."
      },
      "trap": {
        "tr": "Kaynama noktası yükselmesi çözünenin mol kütlesiyle doğru orantılıdır.",
        "en": "The boiling point elevation is directly proportional to the molar mass of the solute.",
        "de": "Die Siedepunkterhöhung ist direkt proportional zur Molmasse des gelösten Stoffes.",
        "fr": "L'élévation du point d'ébullition est directement proportionnelle à la masse molaire du soluté.",
        "ru": "Повышение температуры кипения прямо пропорционально молярной массе растворённого вещества.",
        "ar": "يتناسب الارتفاع في درجة الغليان طرديًا مع الكتلة المولية للمذاب.",
        "zh": "沸点升高与溶质的摩尔质量成正比。",
        "ku": "Bilindbûna xala kelînê bi girseya molî ya madeya helbûyî re rasterast rêjeyî ye."
      },
      "whyTrapIsFalse": {
        "tr": "ΔTk molaliteye (mol/kg) ve i'ye bağlıdır, mol kütlesine değil; aynı kütlede çözünen için mol kütlesi büyüdükçe mol sayısı azalır ve yükselme küçülür.",
        "en": "ΔTb depends on molality (mol/kg) and i, not on molar mass; for the same mass of solute, a larger molar mass means fewer moles and a smaller elevation.",
        "de": "ΔTs hängt von der Molalität (mol/kg) und i ab, nicht von der Molmasse; bei gleicher Masse an gelöstem Stoff bedeutet eine größere Molmasse weniger Mol und eine kleinere Erhöhung.",
        "fr": "ΔTéb dépend de la molalité (mol/kg) et de i, pas de la masse molaire ; pour une même masse de soluté, une masse molaire plus grande donne moins de moles et une élévation plus faible.",
        "ru": "ΔTкип зависит от моляльности (моль/кг) и i, а не от молярной массы; при одинаковой массе растворённого вещества большая молярная масса означает меньшее число молей и меньшее повышение.",
        "ar": "يعتمد ΔTb على المولالية (mol/kg) وعلى i وليس على الكتلة المولية؛ فعند ثبات كتلة المذاب تعني الكتلة المولية الأكبر عددًا أقل من المولات وارتفاعًا أصغر.",
        "zh": "沸点升高值取决于质量摩尔浓度(mol/kg)和 i，而不是摩尔质量；溶质质量相同时，摩尔质量越大，物质的量越少，升高值越小。",
        "ku": "ΔTk bi molalîteyê (mol/kg) û bi i ve girêdayî ye, ne bi girseya molî; ji bo heman girseya madeya helbûyî, her ku girseya molî mezin dibe hejmara molan kêm dibe û bilindbûn piçûktir dibe."
      }
    },
    {
      "id": "u15-f03",
      "fact": {
        "tr": "Donma noktası alçalması: ΔTd = Kd * m * i'dir (su için Kd = 1,86 °C*kg/mol).",
        "en": "Freezing point depression: ΔTf = Kf * m * i (Kf = 1.86 °C*kg/mol for water).",
        "de": "Gefrierpunktserniedrigung: ΔTg = Kg * m * i (für Wasser Kg = 1,86 °C*kg/mol).",
        "fr": "Abaissement du point de congélation : ΔTcong = Kcong * m * i (Kcong = 1,86 °C*kg/mol pour l'eau).",
        "ru": "Понижение температуры замерзания: ΔTзам = Kкр * m * i (для воды Kкр = 1,86 °C*кг/моль).",
        "ar": "الانخفاض في درجة التجمد: ΔTf = Kf * m * i (للماء Kf = 1.86 °C*kg/mol).",
        "zh": "凝固点降低：ΔTf = Kf * m * i(水的 Kf = 1.86 °C*kg/mol)。",
        "ku": "Daketina xala cemidînê: ΔTd = Kd * m * i ye (ji bo avê Kd = 1,86 °C*kg/mol)."
      },
      "trap": {
        "tr": "Uçucu olmayan katı çözündüğünde suyun donma noktası yükselir.",
        "en": "When a non-volatile solid dissolves, the freezing point of water rises.",
        "de": "Wenn sich ein nichtflüchtiger Feststoff auflöst, steigt der Gefrierpunkt von Wasser.",
        "fr": "Lorsqu'un solide non volatil se dissout, le point de congélation de l'eau augmente.",
        "ru": "При растворении нелетучего твёрдого вещества температура замерзания воды повышается.",
        "ar": "عندما تذوب مادة صلبة غير متطايرة، ترتفع درجة تجمد الماء.",
        "zh": "非挥发性固体溶于水后，水的凝固点升高。",
        "ku": "Dema madeyeke hişk a nefirok dihele, xala cemidînê ya avê bilind dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Çözünen tanecikler su moleküllerinin düzenli buz kristali kurmasını zorlaştırır; bu yüzden donma için daha düşük sıcaklık gerekir, donma noktası yükselmez, alçalır.",
        "en": "Solute particles hinder water molecules from building the ordered ice lattice, so a lower temperature is needed for freezing; the freezing point is lowered, not raised.",
        "de": "Gelöste Teilchen erschweren den Wassermolekülen den Aufbau des geordneten Eisgitters, daher ist zum Gefrieren eine tiefere Temperatur nötig; der Gefrierpunkt sinkt, statt zu steigen.",
        "fr": "Les particules de soluté empêchent les molécules d'eau de construire le réseau ordonné de la glace ; il faut donc une température plus basse pour geler : le point de congélation s'abaisse au lieu de monter.",
        "ru": "Частицы растворённого вещества мешают молекулам воды строить упорядоченную решётку льда, поэтому для замерзания нужна более низкая температура: температура замерзания понижается, а не повышается.",
        "ar": "تعيق جسيمات المذاب جزيئات الماء عن بناء الشبكة البلورية المنتظمة للجليد، فيلزم للتجمد درجة حرارة أدنى؛ لذا تنخفض درجة التجمد ولا ترتفع.",
        "zh": "溶质粒子阻碍水分子形成有序的冰晶格，因此需要更低的温度才能凝固；凝固点是降低而不是升高。",
        "ku": "Perçeyên helbûyî ji molekulên avê re zehmet dikin ku tora rêkûpêk a krîstala cemedê ava bikin; ji ber vê yekê ji bo cemidînê germahiyeke nizmtir pêwîst e. Xala cemidînê bilind nabe, dadikeve."
      }
    },
    {
      "id": "u15-f04",
      "fact": {
        "tr": "van 't Hoff faktörü (i): Moleküler maddelerde (şeker, alkol) i = 1'dir; tamamen iyonlaştığı kabul edilen iyonik tuzlarda 1 formül biriminden oluşan iyon sayısıdır (NaCl için i = 2, CaCl2 için i = 3).",
        "en": "van 't Hoff factor (i): For molecular substances (sugar, alcohol) i = 1; for ionic salts assumed to dissociate completely, it is the number of ions formed per formula unit (i = 2 for NaCl, i = 3 for CaCl2).",
        "de": "Van-'t-Hoff-Faktor (i): Bei molekularen Stoffen (Zucker, Alkohol) ist i = 1; bei Ionensalzen, die als vollständig dissoziiert angenommen werden, ist i die Zahl der Ionen pro Formeleinheit (i = 2 für NaCl, i = 3 für CaCl2).",
        "fr": "Facteur de van 't Hoff (i) : pour les substances moléculaires (sucre, alcool) i = 1 ; pour les sels ioniques supposés totalement dissociés, c'est le nombre d'ions formés par unité formulaire (i = 2 pour NaCl, i = 3 pour CaCl2).",
        "ru": "Изотонический коэффициент Вант-Гоффа (i): для молекулярных веществ (сахар, спирт) i = 1; для ионных солей, которые считают полностью диссоциированными, i равен числу ионов, образуемых одной формульной единицей (i = 2 для NaCl, i = 3 для CaCl2).",
        "ar": "عامل فانت هوف (i): في المواد الجزيئية (السكر، الكحول) i = 1؛ وفي الأملاح الأيونية التي يُفترض تفككها الكامل هو عدد الأيونات الناتجة من وحدة صيغة واحدة (i = 2 لـ NaCl، و i = 3 لـ CaCl2).",
        "zh": "范特霍夫因子(i)：分子型物质（糖、乙醇）的 i = 1；对于假定完全电离的离子化合物（盐），i 为每个化学式单位电离出的离子数(NaCl 的 i = 2，CaCl2 的 i = 3)。",
        "ku": "Faktora van 't Hoff (i): Di madeyên molekulî de (şekir, alkol) i = 1 e; di xwêyên îyonîk de ku tê qebûlkirin bi tevahî îyonîze dibin, ew hejmara îyonên ku ji yekeyeke formulê çêdibin e (ji bo NaCl i = 2, ji bo CaCl2 i = 3)."
      },
      "trap": {
        "tr": "Glikoz suda çözündüğünde i = 2 kabul edilir.",
        "en": "When glucose dissolves in water, i = 2 is assumed.",
        "de": "Wenn sich Glucose in Wasser löst, wird i = 2 angenommen.",
        "fr": "Lorsque le glucose se dissout dans l’eau, on suppose que i = 2.",
        "ru": "Для раствора глюкозы в воде принимают i = 2.",
        "ar": "عندما يذوب الجلوكوز في الماء يُؤخذ i = 2.",
        "zh": "葡萄糖溶于水时，i 取 2。",
        "ku": "Dema glîkoz di avê de dihele, i = 2 tê qebûlkirin."
      },
      "whyTrapIsFalse": {
        "tr": "Glikoz moleküler bir maddedir ve suda iyonlarına ayrışmaz; her glikoz molekülü tek tanecik olarak kalır, bu yüzden i = 1'dir.",
        "en": "Glucose is a molecular substance and does not dissociate into ions in water; each glucose molecule stays as one particle, so i = 1.",
        "de": "Glucose ist ein molekularer Stoff und zerfällt in Wasser nicht in Ionen; jedes Glucosemolekül bleibt ein Teilchen, daher ist i = 1.",
        "fr": "Le glucose est une substance moléculaire qui ne se dissocie pas en ions dans l'eau ; chaque molécule reste une seule particule, donc i = 1.",
        "ru": "Глюкоза — молекулярное вещество и в воде не распадается на ионы; каждая молекула остаётся одной частицей, поэтому i = 1.",
        "ar": "الجلوكوز مادة جزيئية لا تتفكك إلى أيونات في الماء؛ فيبقى كل جزيء جلوكوز جسيمًا واحدًا، لذا i = 1.",
        "zh": "葡萄糖是分子型物质，在水中不电离；每个葡萄糖分子仍是一个粒子，所以 i = 1。",
        "ku": "Glîkoz madeyeke molekulî ye û di avê de li îyonan venaqete; her molekula glîkozê wek yek perçe dimîne, ji ber vê yekê i = 1 e."
      }
    },
    {
      "id": "u15-f05",
      "fact": {
        "tr": "Buhar basıncı alçalması (Raoult Yasası): Uçucu olmayan bir çözünen içeren çözeltinin buhar basıncı Pçözelti = Pçözücü° * Xçözücü'dür; bu yüzden aynı sıcaklıkta saf çözücününkinden düşüktür.",
        "en": "Vapor pressure lowering (Raoult's Law): For a solution containing a non-volatile solute, Psolution = Psolvent° * Xsolvent; therefore it is lower than that of the pure solvent at the same temperature.",
        "de": "Dampfdruckerniedrigung (Raoultsches Gesetz): Für eine Lösung mit einem nichtflüchtigen gelösten Stoff gilt PLösung = PLösungsmittel° * XLösungsmittel; daher ist er bei gleicher Temperatur kleiner als der des reinen Lösungsmittels.",
        "fr": "Abaissement de la pression de vapeur (loi de Raoult) : pour une solution contenant un soluté non volatil, Psolution = Psolvant° * Xsolvant ; elle est donc plus faible que celle du solvant pur à la même température.",
        "ru": "Понижение давления пара (закон Рауля): давление пара раствора нелетучего вещества Pраствора = P°растворителя * Xрастворителя, поэтому оно ниже давления пара чистого растворителя при той же температуре.",
        "ar": "انخفاض ضغط البخار (قانون راؤول): في محلول يحتوي على مذاب غير متطاير يكون Psolution = Psolvent° * Xsolvent؛ لذلك يكون أقل من ضغط بخار المذيب النقي عند درجة الحرارة نفسها.",
        "zh": "蒸气压下降（拉乌尔定律）：含非挥发性溶质的溶液，其蒸气压 P溶液 = P°溶剂 * X溶剂；因此在同一温度下低于纯溶剂的蒸气压。",
        "ku": "Daketina zexta buharê (Zagona Raoult): Zexta buharê ya çareseriyeke ku madeyeke helbûyî ya nefirok tê de heye Pçareserî = P°helker * Xhelker e; ji ber vê yekê di heman germahiyê de ji ya helkera paqij nizmtir e."
      },
      "trap": {
        "tr": "Uçucu olmayan katı eklendiğinde çözeltinin buhar basıncı artar.",
        "en": "When a non-volatile solid is added, the vapor pressure of the solution increases.",
        "de": "Bei Zugabe eines nichtflüchtigen Feststoffs erhöht sich der Dampfdruck der Lösung.",
        "fr": "Lorsqu'un solide non volatil est ajouté, la pression de vapeur de la solution augmente.",
        "ru": "При добавлении нелетучего твёрдого вещества давление пара раствора увеличивается.",
        "ar": "عند إضافة مادة صلبة غير متطايرة، يزداد ضغط بخار المحلول.",
        "zh": "加入非挥发性固体后，溶液的蒸气压增大。",
        "ku": "Dema madeyeke hişk a nefirok tê zêdekirin, zexta buharê ya çareseriyê zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Uçucu olmayan çözünen buharlaşmaya katılmaz, yalnızca çözücünün mol kesrini düşürür; buharlaşan çözücü molekülü azaldığı için buhar basıncı artmaz, azalır.",
        "en": "A non-volatile solute does not evaporate; it only lowers the mole fraction of the solvent, so fewer solvent molecules escape and the vapor pressure decreases rather than increases.",
        "de": "Ein nichtflüchtiger gelöster Stoff verdampft nicht, er senkt nur den Stoffmengenanteil des Lösungsmittels; es entweichen weniger Lösungsmittelmoleküle, der Dampfdruck sinkt also, statt zu steigen.",
        "fr": "Un soluté non volatil ne s'évapore pas ; il abaisse seulement la fraction molaire du solvant, donc moins de molécules de solvant s'échappent et la pression de vapeur diminue au lieu d'augmenter.",
        "ru": "Нелетучее вещество не испаряется, оно лишь уменьшает мольную долю растворителя; испаряется меньше молекул растворителя, поэтому давление пара не растёт, а уменьшается.",
        "ar": "المذاب غير المتطاير لا يتبخر، بل يخفض الكسر المولي للمذيب فقط؛ فيقل عدد جزيئات المذيب المتبخرة وينخفض ضغط البخار بدلًا من أن يرتفع.",
        "zh": "非挥发性溶质本身不蒸发，只降低溶剂的物质的量分数；逸出的溶剂分子减少，所以蒸气压降低而不是升高。",
        "ku": "Madeya helbûyî ya nefirok nabe buhar, tenê kerta molî ya helker kêm dike; ji ber ku molekulên helker ên dibin buhar kêm dibin, zexta buharê zêde nabe, kêm dibe."
      }
    },
    {
      "id": "u15-f06",
      "fact": {
        "tr": "Ozmotik basınç, yarı geçirgen zardan saf çözücünün derişik çözeltiye geçişini durdurmak için gereken basınçtır.",
        "en": "Osmotic pressure is the pressure required to stop the transition of pure solvent to concentrated solution through the semi-permeable membrane.",
        "de": "Der osmotische Druck ist der Druck, der erforderlich ist, um den Übergang des reinen Lösungsmittels in die konzentrierte Lösung durch die semipermeable Membran zu stoppen.",
        "fr": "La pression osmotique est la pression nécessaire pour arrêter la transition du solvant pur vers la solution concentrée à travers la membrane semi-perméable.",
        "ru": "Осмотическое давление — давление, которое нужно приложить, чтобы остановить переход чистого растворителя через полупроницаемую мембрану в концентрированный раствор.",
        "ar": "الضغط الأسموزي هو الضغط اللازم لوقف انتقال المذيب النقي إلى المحلول المركز عبر الغشاء شبه المنفذ.",
        "zh": "渗透压是阻止纯溶剂透过半透膜进入浓溶液所需施加的压强。",
        "ku": "Zexta osmotîk ew zext e ku ji bo rawestandina derbasbûna helkera paqij di perdeya nîvderbasbar re ber bi çareseriya tîr pêwîst e."
      },
      "trap": {
        "tr": "Ozmozda çözünen katı tanecikler zardan kolayca geçer.",
        "en": "Solid particles dissolved in osmosis easily pass through the membrane.",
        "de": "Bei der Osmose gelöste Feststoffpartikel passieren die Membran problemlos.",
        "fr": "Les particules solides dissoutes par osmose traversent facilement la membrane.",
        "ru": "При осмосе частицы растворённого твёрдого вещества легко проходят через мембрану.",
        "ar": "في التناضح تعبر جسيمات المذاب الصلب الغشاءَ بسهولة.",
        "zh": "渗透时，溶解的固体溶质粒子很容易透过半透膜。",
        "ku": "Di osmozê de perçeyên hişk ên helbûyî bi hêsanî di perdeyê re derbas dibin."
      },
      "whyTrapIsFalse": {
        "tr": "Yarı geçirgen zar yalnızca küçük çözücü moleküllerinin geçmesine izin verir; çözünen tanecikler zardan geçemez, ozmozda hareket eden çözücüdür.",
        "en": "A semipermeable membrane lets only the small solvent molecules through; solute particles cannot cross it, so in osmosis it is the solvent that moves.",
        "de": "Eine semipermeable Membran lässt nur die kleinen Lösungsmittelmoleküle durch; gelöste Teilchen können sie nicht passieren, bei der Osmose wandert also das Lösungsmittel.",
        "fr": "Une membrane semi-perméable ne laisse passer que les petites molécules de solvant ; les particules de soluté ne la traversent pas : dans l'osmose, c'est le solvant qui se déplace.",
        "ru": "Полупроницаемая мембрана пропускает только небольшие молекулы растворителя; частицы растворённого вещества через неё не проходят, при осмосе перемещается растворитель.",
        "ar": "الغشاء شبه المنفذ يسمح بمرور جزيئات المذيب الصغيرة فقط؛ أما جسيمات المذاب فلا تعبره، ففي التناضح يتحرك المذيب.",
        "zh": "半透膜只允许小的溶剂分子通过；溶质粒子不能透过，渗透中移动的是溶剂。",
        "ku": "Perdeya nîvderbasbar tenê dihêle molekulên piçûk ên helker derbas bibin; perçeyên helbûyî jê derbas nabin, di osmozê de ya ku diçe helker e."
      }
    },
    {
      "id": "u15-f07",
      "fact": {
        "tr": "Kışın yollara tuz atılması suyun donma noktasını alçaltarak buzlanmayı önleme uygulamasıdır.",
        "en": "Sprinkling salt on the roads in winter is a practice to prevent icing by lowering the freezing point of water.",
        "de": "Das Streuen von Salz auf die Straßen im Winter ist eine Praxis, um Vereisung zu verhindern, indem der Gefrierpunkt des Wassers gesenkt wird.",
        "fr": "Saupoudrer du sel sur les routes en hiver est une pratique visant à prévenir le givrage en abaissant le point de congélation de l'eau.",
        "ru": "Зимой дороги посыпают солью: соль понижает температуру замерзания воды и предотвращает образование гололёда.",
        "ar": "رشّ الملح على الطرق شتاءً تطبيق يمنع تكوّن الجليد بخفض درجة تجمد الماء.",
        "zh": "冬季在路面撒盐，是通过降低水的凝固点来防止结冰。",
        "ku": "Di zivistanê de reşandina xwê li ser rêyan, bi daxistina xala cemidînê ya avê, rê li ber qeşagirtinê digire."
      },
      "trap": {
        "tr": "Yollara tuz atılması tuzun kimyasal reaksiyonla ısı açığa çıkarması içindir.",
        "en": "Throwing salt on the roads causes the salt to release heat through a chemical reaction.",
        "de": "Das Streuen von Salz auf die Straße führt dazu, dass das Salz durch eine chemische Reaktion Wärme freisetzt.",
        "fr": "Jeter du sel sur les routes provoque la libération de chaleur par une réaction chimique.",
        "ru": "Дороги посыпают солью потому, что соль выделяет теплоту в результате химической реакции.",
        "ar": "يُرَشّ الملح على الطرق لأنه يطلق حرارة بتفاعل كيميائي.",
        "zh": "在路面撒盐，是为了让盐通过化学反应放出热量。",
        "ku": "Xwê li ser rêyan tê reşandin da ku bi reaksiyoneke kîmyewî germ berde."
      },
      "whyTrapIsFalse": {
        "tr": "Tuz buzla ısı veren bir tepkimeye girmez; suda çözünerek tanecik derişimini artırır ve donma noktasını düşürür, yani etki koligatiftir.",
        "en": "Salt does not undergo a heat-releasing reaction with ice; it dissolves, increases the particle concentration and lowers the freezing point, so the effect is colligative.",
        "de": "Salz geht mit Eis keine wärmeliefernde Reaktion ein; es löst sich, erhöht die Teilchenkonzentration und senkt den Gefrierpunkt – der Effekt ist kolligativ.",
        "fr": "Le sel ne subit pas de réaction exothermique avec la glace ; il se dissout, augmente la concentration en particules et abaisse le point de congélation : l'effet est colligatif.",
        "ru": "Соль не вступает со льдом в реакцию с выделением теплоты; она растворяется в воде, повышает концентрацию частиц и понижает температуру замерзания, то есть эффект коллигативный.",
        "ar": "لا يتفاعل الملح مع الجليد تفاعلًا يطلق حرارة؛ بل يذوب فيزيد تركيز الجسيمات ويخفض درجة التجمد، أي أن التأثير تجميعي.",
        "zh": "盐并不与冰发生放热反应；它溶解后增大粒子浓度、降低凝固点，这是依数性效应。",
        "ku": "Xwê bi qeşayê re nakeve reaksiyoneke ku germ berdide; di avê de dihele, tîrbûna perçeyan zêde dike û xala cemidînê dadixe, yanî bandor kolîgatîf e."
      }
    },
    {
      "id": "u15-f08",
      "fact": {
        "tr": "Otomobil radyatörlerine antifriz (etilen glikol) konması hem donmayı önler hem de kaynama noktasını yükseltir.",
        "en": "Putting antifreeze (ethylene glycol) in automobile radiators prevents freezing and increases the boiling point.",
        "de": "Das Einbringen von Frostschutzmittel (Ethylenglykol) in Autokühler verhindert das Einfrieren und erhöht den Siedepunkt.",
        "fr": "Mettre de l'antigel (éthylène glycol) dans les radiateurs des automobiles empêche le gel et augmente le point d'ébullition.",
        "ru": "Антифриз (этиленгликоль), который заливают в радиаторы автомобилей, и предотвращает замерзание, и повышает температуру кипения.",
        "ar": "إضافة مانع التجمد (الإيثيلين غليكول) إلى مشعات السيارات تمنع التجمد وترفع درجة الغليان أيضًا.",
        "zh": "在汽车散热器中加入防冻剂（乙二醇），既能防止结冰，又能提高沸点。",
        "ku": "Danîna antîfrîzê (etîlen glîkol) di radyatorên otomobîlan de hem rê li ber cemidînê digire hem jî xala kelînê bilind dike."
      },
      "trap": {
        "tr": "Antifriz suyun donma noktasını 0 °C'nin üzerine çıkarır.",
        "en": "Antifreeze raises the freezing point of water above 0 °C.",
        "de": "Frostschutzmittel erhöhen den Gefrierpunkt von Wasser über 0 °C.",
        "fr": "L'antigel élève le point de congélation de l'eau au-dessus de 0 °C.",
        "ru": "Антифриз повышает температуру замерзания воды выше 0 °C.",
        "ar": "يرفع مانع التجمد درجة تجمد الماء إلى ما فوق 0 °C.",
        "zh": "防冻剂可使水的凝固点升高到 0 °C 以上。",
        "ku": "Antîfrîz xala cemidînê ya avê derdixe ser 0 °C."
      },
      "whyTrapIsFalse": {
        "tr": "Antifriz suya eklenen bir çözünendir; çözünen eklemek donma noktasını yükseltmez, 0 °C'nin altına indirir ve suyun soğukta donmasını geciktirir.",
        "en": "Antifreeze is a solute added to water; adding a solute does not raise the freezing point but lowers it below 0 °C, so the water freezes only at a lower temperature.",
        "de": "Frostschutzmittel ist ein im Wasser gelöster Stoff; ein gelöster Stoff hebt den Gefrierpunkt nicht an, sondern senkt ihn unter 0 °C, sodass das Wasser erst bei tieferer Temperatur gefriert.",
        "fr": "L'antigel est un soluté ajouté à l'eau ; ajouter un soluté n'élève pas le point de congélation mais l'abaisse sous 0 °C, si bien que l'eau ne gèle qu'à plus basse température.",
        "ru": "Антифриз — вещество, растворённое в воде; добавление растворённого вещества не повышает температуру замерзания, а понижает её ниже 0 °C, поэтому на холоде вода замерзает позже.",
        "ar": "مانع التجمد مذاب يضاف إلى الماء؛ وإضافة مذاب لا ترفع درجة التجمد بل تخفضها إلى ما دون 0 °C، فلا يتجمد الماء إلا عند درجة حرارة أقل.",
        "zh": "防冻剂是加入水中的溶质；加入溶质不会使凝固点升高，而是使其降到 0 °C 以下，所以水要在更低温度下才结冰。",
        "ku": "Antîfrîz madeyeke helbûyî ye ku li avê tê zêdekirin; zêdekirina madeya helbûyî xala cemidînê bilind nake, wê dadixe bin 0 °C û cemidîna avê di sermayê de dereng dixe."
      }
    },
    {
      "id": "u15-f09",
      "fact": {
        "tr": "Çözünürlük, belirli sıcaklık ve basınçta belirli miktardaki çözücüde çözünebilen en fazla madde miktarıdır; katılar için genellikle 100 g sudaki gram cinsinden verilir.",
        "en": "Solubility is the maximum amount of a substance that can dissolve in a given amount of solvent at a given temperature and pressure; for solids it is usually expressed in grams per 100 g of water.",
        "de": "Löslichkeit ist die größte Menge eines Stoffes, die sich bei gegebener Temperatur und gegebenem Druck in einer bestimmten Menge Lösungsmittel lösen kann; bei Feststoffen wird sie meist in Gramm pro 100 g Wasser angegeben.",
        "fr": "La solubilité est la quantité maximale d'une substance pouvant se dissoudre dans une quantité donnée de solvant à une température et une pression données ; pour les solides, on l'exprime généralement en grammes pour 100 g d'eau.",
        "ru": "Растворимость — наибольшее количество вещества, которое может раствориться в определённом количестве растворителя при данных температуре и давлении; для твёрдых веществ её обычно выражают в граммах на 100 г воды.",
        "ar": "الذائبية هي أكبر كمية من المادة يمكن أن تذوب في كمية معينة من المذيب عند درجة حرارة وضغط معينين؛ وتُعطى للمواد الصلبة عادةً بالغرامات لكل 100 g من الماء.",
        "zh": "溶解度是在一定温度和压强下，一定量溶剂中最多能溶解的溶质的量；固体的溶解度通常以每 100 g 水中所能溶解的克数表示。",
        "ku": "Helbûnî mîqdara herî zêde ya madeyekê ye ku di germahî û zexteke diyar de di mîqdareke diyar a helker de dikare bihele; ji bo madeyên hişk bi giştî bi gramên di 100 g avê de tê dayîn."
      },
      "trap": {
        "tr": "Çözünürlük, doymamış bir çözeltide çözünmüş olarak bulunan madde miktarıdır.",
        "en": "Solubility is the amount of substance dissolved in an unsaturated solution.",
        "de": "Löslichkeit ist die Stoffmenge, die in einer ungesättigten Lösung gelöst vorliegt.",
        "fr": "La solubilité est la quantité de substance dissoute dans une solution insaturée.",
        "ru": "Растворимость — количество вещества, растворённого в ненасыщенном растворе.",
        "ar": "الذائبية هي كمية المادة المذابة في محلول غير مشبع.",
        "zh": "溶解度是指不饱和溶液中已溶解的溶质的量。",
        "ku": "Helbûnî mîqdara madeyê ye ku di çareseriyeke netêr de helbûyî ye."
      },
      "whyTrapIsFalse": {
        "tr": "Doymamış çözeltide çözünmüş miktar çözünürlükten azdır ve keyfi olarak değişebilir; çözünürlük ise doygun çözeltideki, yani çözünebilecek en fazla miktardır.",
        "en": "The amount dissolved in an unsaturated solution is below the solubility and can be any value; solubility is the amount in a saturated solution, i.e. the maximum that can dissolve.",
        "de": "Die in einer ungesättigten Lösung gelöste Menge liegt unter der Löslichkeit und kann beliebig sein; Löslichkeit ist die Menge in einer gesättigten Lösung, also das Maximum.",
        "fr": "La quantité dissoute dans une solution insaturée est inférieure à la solubilité et peut prendre n'importe quelle valeur ; la solubilité correspond à la solution saturée, c'est-à-dire au maximum dissous.",
        "ru": "Количество вещества в ненасыщенном растворе меньше растворимости и может быть произвольным; растворимость — содержание вещества в насыщенном растворе, то есть наибольшее количество, которое может раствориться.",
        "ar": "الكمية المذابة في المحلول غير المشبع أقل من الذائبية ويمكن أن تكون أي قيمة؛ أما الذائبية فهي الكمية في المحلول المشبع، أي أقصى ما يمكن أن يذوب.",
        "zh": "不饱和溶液中溶解的量小于溶解度，可以是任意值；溶解度指的是饱和溶液中的量，即最多能溶解的量。",
        "ku": "Mîqdara helbûyî di çareseriya netêr de ji helbûniyê kêmtir e û dikare her nirxî bigire; helbûnî mîqdara di çareseriya têr de ye, yanî mîqdara herî zêde ya ku dikare bihele."
      }
    },
    {
      "id": "u15-f10",
      "fact": {
        "tr": "Katıların sudaki çözünmesi genellikle endotermiktir (çözünürlük sıcaklıkla artar); gazların sudaki çözünmesi ise ekzotermiktir (çözünürlük sıcaklıkla azalır).",
        "en": "The dissolution of solids in water is usually endothermic (solubility increases with temperature); the dissolution of gases in water is exothermic (solubility decreases with temperature).",
        "de": "Das Lösen von Feststoffen in Wasser ist meist endotherm (die Löslichkeit steigt mit der Temperatur); das Lösen von Gasen in Wasser ist exotherm (die Löslichkeit sinkt mit der Temperatur).",
        "fr": "La dissolution des solides dans l'eau est généralement endothermique (la solubilité augmente avec la température) ; la dissolution des gaz dans l'eau est exothermique (la solubilité diminue avec la température).",
        "ru": "Растворение твёрдых веществ в воде обычно эндотермично (растворимость растёт с температурой); растворение газов в воде экзотермично (с ростом температуры растворимость уменьшается).",
        "ar": "ذوبان المواد الصلبة في الماء ماصّ للحرارة غالبًا (تزداد الذائبية بارتفاع درجة الحرارة)؛ أما ذوبان الغازات في الماء فطارد للحرارة (تقل الذائبية بارتفاع درجة الحرارة).",
        "zh": "固体在水中的溶解通常是吸热的（溶解度随温度升高而增大）；气体在水中的溶解是放热的（溶解度随温度升高而减小）。",
        "ku": "Helbûna madeyên hişk di avê de bi giştî endotermîk e (helbûnî bi germahiyê re zêde dibe); helbûna gazan di avê de ekzotermîk e (helbûnî bi germahiyê re kêm dibe)."
      },
      "trap": {
        "tr": "Gazların sudaki çözünürlüğü sıcaklık arttıkça hızla artar.",
        "en": "The solubility of gases in water increases rapidly as temperature increases.",
        "de": "Die Löslichkeit von Gasen in Wasser nimmt mit steigender Temperatur schnell zu.",
        "fr": "La solubilité des gaz dans l’eau augmente rapidement à mesure que la température augmente.",
        "ru": "Растворимость газов в воде быстро возрастает с повышением температуры.",
        "ar": "تزداد ذائبية الغازات في الماء بسرعة بارتفاع درجة الحرارة.",
        "zh": "气体在水中的溶解度随温度升高而迅速增大。",
        "ku": "Her ku germahî zêde dibe, helbûniya gazan di avê de bi lez zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Gazların suda çözünmesi ekzotermiktir; sıcaklık arttıkça gaz moleküllerinin kinetik enerjisi artar, sıvıdan kaçarlar ve çözünürlük azalır.",
        "en": "Dissolving a gas in water is exothermic; as temperature rises the gas molecules gain kinetic energy, escape from the liquid and the solubility decreases.",
        "de": "Das Lösen eines Gases in Wasser ist exotherm; mit steigender Temperatur gewinnen die Gasmoleküle kinetische Energie, entweichen aus der Flüssigkeit und die Löslichkeit sinkt.",
        "fr": "La dissolution d'un gaz dans l'eau est exothermique ; quand la température monte, les molécules de gaz gagnent de l'énergie cinétique, s'échappent du liquide et la solubilité diminue.",
        "ru": "Растворение газов в воде экзотермично; при нагревании кинетическая энергия молекул газа растёт, они покидают жидкость, и растворимость уменьшается.",
        "ar": "ذوبان الغاز في الماء طارد للحرارة؛ فبارتفاع درجة الحرارة تزداد الطاقة الحركية لجزيئات الغاز فتهرب من السائل وتقل الذائبية.",
        "zh": "气体溶于水是放热过程；温度升高时气体分子动能增大，从液体中逸出，溶解度减小。",
        "ku": "Helbûna gazan di avê de ekzotermîk e; her ku germahî bilind dibe enerjiya kînetîk a molekulên gazê zêde dibe, ew ji şileyê direvin û helbûnî kêm dibe."
      }
    },
    {
      "id": "u15-f11",
      "fact": {
        "tr": "Gazların sudaki çözünürlüğü, gazın kısmi basıncı arttıkça artar (Henry Yasası); gazlı içecekler bu nedenle yüksek CO2 basıncı altında şişelenir.",
        "en": "The solubility of a gas in water increases as the partial pressure of the gas increases (Henry's Law); this is why carbonated drinks are bottled under high CO2 pressure.",
        "de": "Die Löslichkeit eines Gases in Wasser nimmt mit steigendem Partialdruck des Gases zu (Henry-Gesetz); deshalb werden kohlensäurehaltige Getränke unter hohem CO2-Druck abgefüllt.",
        "fr": "La solubilité d'un gaz dans l'eau augmente lorsque la pression partielle du gaz augmente (loi de Henry) ; c'est pourquoi les boissons gazeuses sont mises en bouteille sous une forte pression de CO2.",
        "ru": "Растворимость газа в воде возрастает с увеличением парциального давления газа (закон Генри); поэтому газированные напитки разливают под высоким давлением CO2.",
        "ar": "تزداد ذائبية الغاز في الماء بزيادة الضغط الجزئي للغاز (قانون هنري)؛ ولهذا تُعبَّأ المشروبات الغازية تحت ضغط مرتفع من CO2.",
        "zh": "气体在水中的溶解度随该气体分压的增大而增大（亨利定律）；因此碳酸饮料是在较高的 CO2 压强下灌装的。",
        "ku": "Helbûniya gazekê di avê de bi zêdebûna zexta qismî ya gazê re zêde dibe (Zagona Henry); loma vexwarinên gazdar di bin zexta bilind a CO2 de tên şûşekirin."
      },
      "trap": {
        "tr": "Basınç arttıkça gazların çözünürlüğü azalır.",
        "en": "As pressure increases, the solubility of gases decreases.",
        "de": "Mit zunehmendem Druck nimmt die Löslichkeit von Gasen ab.",
        "fr": "À mesure que la pression augmente, la solubilité des gaz diminue.",
        "ru": "С увеличением давления растворимость газов снижается.",
        "ar": "تقل ذائبية الغازات بزيادة الضغط.",
        "zh": "压强增大时，气体的溶解度减小。",
        "ku": "Her ku zext zêde dibe, helbûniya gazan kêm dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Henry yasasına göre gazın kısmi basıncı arttıkça sıvı yüzeyine çarpıp çözünen gaz molekülü sayısı artar; çözünürlük basınçla doğru orantılı olarak artar.",
        "en": "According to Henry's law, a higher partial pressure means more gas molecules strike the liquid surface and dissolve; solubility increases in proportion to pressure.",
        "de": "Nach dem Henry-Gesetz treffen bei höherem Partialdruck mehr Gasmoleküle auf die Flüssigkeitsoberfläche und lösen sich; die Löslichkeit steigt proportional zum Druck.",
        "fr": "Selon la loi de Henry, une pression partielle plus élevée fait que davantage de molécules de gaz frappent la surface du liquide et s'y dissolvent : la solubilité augmente proportionnellement à la pression.",
        "ru": "По закону Генри с ростом парциального давления газа больше его молекул ударяется о поверхность жидкости и растворяется; растворимость растёт прямо пропорционально давлению.",
        "ar": "وفق قانون هنري، يؤدي ارتفاع الضغط الجزئي إلى اصطدام عدد أكبر من جزيئات الغاز بسطح السائل وذوبانها؛ فتزداد الذائبية بالتناسب مع الضغط.",
        "zh": "根据亨利定律，分压越大，撞击液面并溶解的气体分子越多；溶解度随压强成正比增大。",
        "ku": "Li gorî zagona Henry, her ku zexta qismî ya gazê zêde dibe, hejmara molekulên gazê yên ku li rûyê şileyê dikevin û dihelin zêde dibe; helbûnî bi zextê re rasterast rêjeyî zêde dibe."
      }
    },
    {
      "id": "u15-f12",
      "fact": {
        "tr": "Katı ve sıvıların çözünürlüğüne basıncın etkisi ihmal edilecek kadar azdır.",
        "en": "The effect of pressure on the solubility of solids and liquids is negligible.",
        "de": "Der Einfluss des Drucks auf die Löslichkeit von Feststoffen und Flüssigkeiten ist vernachlässigbar.",
        "fr": "L'effet de la pression sur la solubilité des solides et des liquides est négligeable.",
        "ru": "Давление практически не влияет на растворимость твёрдых веществ и жидкостей.",
        "ar": "تأثير الضغط في ذائبية المواد الصلبة والسائلة ضئيل يمكن إهماله.",
        "zh": "压强对固体和液体溶解度的影响很小，可以忽略不计。",
        "ku": "Bandora zextê li ser helbûniya madeyên hişk û şile ewqas kêm e ku nayê hesibandin."
      },
      "trap": {
        "tr": "Tuzun sudaki çözünürlüğü yüksek basınçta iki katına çıkar.",
        "en": "The solubility of salt in water doubles at high pressure.",
        "de": "Bei hohem Druck verdoppelt sich die Löslichkeit von Salz in Wasser.",
        "fr": "La solubilité du sel dans l’eau double à haute pression.",
        "ru": "При высоком давлении растворимость соли в воде увеличивается вдвое.",
        "ar": "تتضاعف ذائبية الملح في الماء عند الضغط المرتفع.",
        "zh": "在高压下，盐在水中的溶解度变为原来的2倍。",
        "ku": "Helbûniya xwêyê di avê de di zexta bilind de du qat dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Katı ve sıvılar pratikte sıkıştırılamaz; basınç değişimi tuzun çözünürlüğünü hissedilir ölçüde değiştirmez, basıncın belirgin etkisi gazlara özgüdür.",
        "en": "Solids and liquids are practically incompressible; changing the pressure does not noticeably change the solubility of a salt — a marked pressure effect is specific to gases.",
        "de": "Feststoffe und Flüssigkeiten sind praktisch inkompressibel; eine Druckänderung verändert die Löslichkeit eines Salzes nicht merklich – ein deutlicher Druckeffekt ist typisch für Gase.",
        "fr": "Les solides et les liquides sont pratiquement incompressibles ; une variation de pression ne change pas sensiblement la solubilité d'un sel : un effet net de la pression est propre aux gaz.",
        "ru": "Твёрдые вещества и жидкости практически несжимаемы; изменение давления заметно не меняет растворимость соли — выраженное влияние давления характерно для газов.",
        "ar": "المواد الصلبة والسائلة غير قابلة للانضغاط عمليًا؛ فتغيير الضغط لا يغير ذائبية الملح تغييرًا ملحوظًا، والتأثير الواضح للضغط خاص بالغازات.",
        "zh": "固体和液体几乎不可压缩；改变压强不会明显改变盐的溶解度，压强的显著影响是气体特有的。",
        "ku": "Madeyên hişk û şile di pratîkê de nayên tepisandin; guhertina zextê helbûniya xwêyê bi awayekî berbiçav naguherîne. Bandora berbiçav a zextê taybetmendiya gazan e."
      }
    },
    {
      "id": "u15-f13",
      "fact": {
        "tr": "Ortak iyon içeren bir çözeltide az çözünen bir tuzun çözünürlüğü saf sudakinden daha azdır (Le Chatelier ilkesi).",
        "en": "A slightly soluble salt is less soluble in a solution containing a common ion than in pure water (Le Chatelier's principle).",
        "de": "Ein schwer lösliches Salz ist in einer Lösung mit einem gleichen Ion weniger löslich als in reinem Wasser (Prinzip von Le Chatelier).",
        "fr": "Un sel peu soluble est moins soluble dans une solution contenant un ion commun que dans l'eau pure (principe de Le Chatelier).",
        "ru": "Малорастворимая соль растворяется в растворе, содержащем одноимённый ион, хуже, чем в чистой воде (принцип Ле Шателье).",
        "ar": "تكون ذائبية الملح الشحيح الذوبان في محلول يحتوي على أيون مشترك أقل منها في الماء النقي (مبدأ لوشاتلييه).",
        "zh": "难溶盐在含有同离子的溶液中的溶解度比在纯水中小（勒夏特列原理）。",
        "ku": "Di çareseriyeke ku îyoneke hevpar tê de heye, helbûniya xwêyeke kêmhelbar ji ya di ava paqij de kêmtir e (prensîba Le Chatelier)."
      },
      "trap": {
        "tr": "Ortak iyon bulunan çözeltide tuz daha çok çözünür.",
        "en": "A salt dissolves more in a solution containing a common ion.",
        "de": "In einer Lösung mit einem gleichen Ion löst sich ein Salz besser.",
        "fr": "Un sel est plus soluble dans une solution contenant un ion commun.",
        "ru": "В растворе, содержащем одноимённый ион, соль растворяется лучше.",
        "ar": "يذوب الملح بدرجة أكبر في محلول يحتوي على أيون مشترك.",
        "zh": "盐在含有同离子的溶液中溶解得更多。",
        "ku": "Di çareseriyeke ku îyoneke hevpar tê de heye, xwê bêtir dihele."
      },
      "whyTrapIsFalse": {
        "tr": "Ortamda zaten bulunan ortak iyon, çözünme dengesini Le Chatelier ilkesine göre katı tuz yönüne kaydırır; bu yüzden tuz saf sudakinden daha az çözünür.",
        "en": "A common ion already present shifts the dissolution equilibrium toward the solid salt (Le Chatelier's principle), so the salt dissolves less than in pure water.",
        "de": "Ein bereits vorhandenes gleichioniges Ion verschiebt das Lösungsgleichgewicht nach Le Chatelier zum festen Salz hin, daher löst sich das Salz weniger als in reinem Wasser.",
        "fr": "Un ion commun déjà présent déplace l'équilibre de dissolution vers le sel solide (principe de Le Chatelier) ; le sel se dissout donc moins que dans l'eau pure.",
        "ru": "Уже присутствующий одноимённый ион смещает равновесие растворения в сторону твёрдой соли (принцип Ле Шателье), поэтому соль растворяется меньше, чем в чистой воде.",
        "ar": "يُزيح الأيون المشترك الموجود مسبقًا اتزان الذوبان نحو الملح الصلب (مبدأ لوشاتلييه)، لذا يذوب الملح أقل مما يذوب في الماء النقي.",
        "zh": "已存在的同离子使溶解平衡向固体盐方向移动（勒夏特列原理），因此盐的溶解量比在纯水中少。",
        "ku": "Îyona hevpar a ku jixwe di derdorê de heye, li gorî prensîba Le Chatelier hevsengiya helbûnê ber bi xwêya hişk ve dikişîne; ji ber vê yekê xwê ji ava paqij kêmtir dihele."
      }
    },
    {
      "id": "u15-f14",
      "fact": {
        "tr": "Çözeltideki toplam çözünen tanecik derişimi ne kadar büyükse donma noktası o kadar düşük, kaynama noktası o kadar yüksektir.",
        "en": "The greater the total concentration of dissolved particles in a solution, the lower its freezing point and the higher its boiling point.",
        "de": "Je größer die Gesamtkonzentration gelöster Teilchen in der Lösung ist, desto niedriger ist der Gefrierpunkt und desto höher der Siedepunkt.",
        "fr": "Plus la concentration totale en particules dissoutes est élevée, plus le point de congélation est bas et plus le point d'ébullition est élevé.",
        "ru": "Чем больше общая концентрация растворённых частиц в растворе, тем ниже температура замерзания и выше температура кипения.",
        "ar": "كلما زاد التركيز الكلي للجسيمات المذابة في المحلول، انخفضت درجة التجمد وارتفعت درجة الغليان.",
        "zh": "溶液中溶质粒子的总浓度越大，凝固点越低，沸点越高。",
        "ku": "Tîrbûna giştî ya perçeyên helbûyî di çareseriyê de çiqas mezin be, xala cemidînê ewqas nizm û xala kelînê ewqas bilind e."
      },
      "trap": {
        "tr": "Eşit derişimli NaCl ve AlCl3 çözeltilerinin kaynama noktaları aynıdır.",
        "en": "Boiling points of equal concentrations of NaCl and AlCl3 solutions are the same.",
        "de": "Die Siedepunkte gleicher Konzentrationen von NaCl- und AlCl3-Lösungen sind gleich.",
        "fr": "Les points d'ébullition de concentrations égales de solutions NaCl et AlCl3 sont les mêmes.",
        "ru": "Температуры кипения растворов NaCl и AlCl3 равных концентраций одинаковы.",
        "ar": "محلولا NaCl وAlCl3 المتساويان في التركيز لهما درجة الغليان نفسها.",
        "zh": "等浓度的 NaCl 和 AlCl3 溶液的沸点相同。",
        "ku": "Xalên kelînê yên çareseriyên NaCl û AlCl3 yên bi tîrbûna wekhev yek in."
      },
      "whyTrapIsFalse": {
        "tr": "Kaynama noktası yükselmesi molar derişime değil tanecik derişimine bağlıdır; eşit derişimde AlCl3 4, NaCl 2 tanecik verdiğinden AlCl3 çözeltisi daha yüksek sıcaklıkta kaynar.",
        "en": "Boiling point elevation depends on particle concentration, not on formula concentration; at equal concentration AlCl3 gives 4 particles and NaCl 2, so the AlCl3 solution boils at a higher temperature.",
        "de": "Die Siedepunkterhöhung hängt von der Teilchenkonzentration ab; bei gleicher Konzentration liefert AlCl3 4 und NaCl 2 Teilchen, daher siedet die AlCl3-Lösung bei höherer Temperatur.",
        "fr": "L'élévation du point d'ébullition dépend de la concentration en particules ; à concentration égale, AlCl3 donne 4 particules et NaCl 2, donc la solution d'AlCl3 bout à plus haute température.",
        "ru": "Повышение температуры кипения зависит не от молярной концентрации, а от концентрации частиц; при одинаковой концентрации AlCl3 даёт 4 частицы, а NaCl — 2, поэтому раствор AlCl3 кипит при более высокой температуре.",
        "ar": "يعتمد الارتفاع في درجة الغليان على تركيز الجسيمات لا على التركيز المولاري؛ فعند تساوي التركيز يعطي AlCl3 أربعة جسيمات وNaCl جسيمين، لذا يغلي محلول AlCl3 عند درجة حرارة أعلى.",
        "zh": "沸点升高取决于粒子浓度，而不是物质的量浓度；浓度相同时 AlCl3 电离出 4 个粒子而 NaCl 只有 2 个，所以 AlCl3 溶液的沸点更高。",
        "ku": "Bilindbûna xala kelînê ne bi tîrbûna molar a pêkhateyê, lê bi tîrbûna perçeyan ve girêdayî ye; di tîrbûna wekhev de AlCl3 4 perçe, NaCl 2 perçe dide, ji ber vê yekê çareseriya AlCl3 di germahiyeke bilindtir de dikele."
      }
    },
    {
      "id": "u15-f15",
      "fact": {
        "tr": "Belirli bir sıcaklıkta çözebileceği en fazla çözüneni içeren çözelti doygundur; çözünürlükten daha fazla çözünen içeren aşırı doymuş çözelti ise kararsızdır ve aşı kristali eklenince fazla çözünen kristallenir.",
        "en": "A solution that contains the maximum amount of solute it can dissolve at a given temperature is saturated; a supersaturated solution, which contains more solute than the solubility, is unstable, and the excess solute crystallizes when a seed crystal is added.",
        "de": "Eine Lösung, die bei einer bestimmten Temperatur die größtmögliche Menge an gelöstem Stoff enthält, ist gesättigt; eine übersättigte Lösung, die mehr gelösten Stoff enthält, als der Löslichkeit entspricht, ist instabil, und bei Zugabe eines Impfkristalls kristallisiert der Überschuss aus.",
        "fr": "Une solution qui contient, à une température donnée, la quantité maximale de soluté qu'elle peut dissoudre est saturée ; une solution sursaturée, qui contient plus de soluté que la solubilité, est instable, et l'excès de soluté cristallise dès qu'on ajoute un germe cristallin.",
        "ru": "Раствор, содержащий при данной температуре наибольшее возможное количество растворённого вещества, называют насыщенным; пересыщенный раствор содержит растворённого вещества больше, чем позволяет растворимость, он неустойчив, и при внесении кристалла-затравки избыток вещества кристаллизуется.",
        "ar": "المحلول الذي يحتوي عند درجة حرارة معينة على أكبر كمية يمكنه إذابتها من المذاب هو محلول مشبع؛ أما المحلول فوق المشبع، الذي يحتوي على مذاب أكثر من الذائبية، فغير مستقر، وعند إضافة بلورة بادئة يتبلور المذاب الزائد.",
        "zh": "在一定温度下含有所能溶解的最大量溶质的溶液是饱和溶液；所含溶质超过溶解度的过饱和溶液不稳定，加入晶种后多余的溶质会结晶析出。",
        "ku": "Çareseriya ku di germahiyeke diyar de mîqdara herî zêde ya madeya helbûyî ku dikare bihelîne dihewîne têr e; çareseriya zêdetêr, ku ji helbûniyê bêtir madeya helbûyî dihewîne, nearam e û dema krîstaleke tov lê tê zêdekirin, madeya zêde krîstal dibe."
      },
      "trap": {
        "tr": "Aşırı doymuş çözelti, süresiz olarak kararlı kalan bir denge sistemidir.",
        "en": "A supersaturated solution is a balanced system that remains stable forever.",
        "de": "Eine übersättigte Lösung ist ein ausgeglichenes System, das für immer stabil bleibt.",
        "fr": "Une solution sursaturée est un système équilibré qui reste stable pour toujours.",
        "ru": "Пересыщенный раствор — равновесная система, которая неограниченно долго остаётся устойчивой.",
        "ar": "المحلول فوق المشبع نظام في حالة اتزان يبقى مستقرًا إلى ما لا نهاية.",
        "zh": "过饱和溶液是一个能无限期保持稳定的平衡体系。",
        "ku": "Çareseriya zêdetêr sîstemeke hevsengiyê ye ku bê dawî aram dimîne."
      },
      "whyTrapIsFalse": {
        "tr": "Aşırı doymuş çözelti çözünürlüğün üzerinde çözünen taşır, dengede değildir; küçük bir sarsıntı ya da aşı kristali fazla çözünenin hemen kristallenmesine yol açar.",
        "en": "A supersaturated solution holds more solute than its solubility and is not at equilibrium; a slight shock or a seed crystal makes the excess solute crystallize at once.",
        "de": "Eine übersättigte Lösung enthält mehr gelösten Stoff als ihrer Löslichkeit entspricht und ist nicht im Gleichgewicht; eine leichte Erschütterung oder ein Impfkristall lässt den Überschuss sofort auskristallisieren.",
        "fr": "Une solution sursaturée contient plus de soluté que sa solubilité et n'est pas à l'équilibre ; un léger choc ou un germe cristallin fait cristalliser aussitôt l'excès de soluté.",
        "ru": "Пересыщенный раствор содержит растворённого вещества больше, чем позволяет растворимость, и не находится в равновесии; лёгкое встряхивание или кристалл-затравка вызывают немедленную кристаллизацию избытка.",
        "ar": "المحلول فوق المشبع يحمل مذابًا أكثر من ذائبيته ولا يكون في حالة اتزان؛ فهزة خفيفة أو بلورة بادئة تجعل الفائض يتبلور فورًا.",
        "zh": "过饱和溶液所含溶质超过其溶解度，并不处于平衡状态；轻微震动或加入晶种都会使多余的溶质立即结晶析出。",
        "ku": "Çareseriya zêdetêr ji helbûniya xwe bêtir madeya helbûyî hildigire û ne di hevsengiyê de ye; lerzeke piçûk an krîstaleke tov dibe sedem ku madeya zêde yekser krîstal bibe."
      }
    },
    {
      "id": "u15-f16",
      "fact": {
        "tr": "Gazoz kapağı açıldığında basınç düştüğü için CO2 gazı kabarcıklar halinde çözeltiden ayrılır.",
        "en": "When the soda cap is opened, CO2 gas leaves the solution in the form of bubbles as the pressure drops.",
        "de": "Wenn der Soda-Verschluss geöffnet wird, verlässt CO2-Gas die Lösung in Form von Blasen, da der Druck sinkt.",
        "fr": "Lorsqu'on ouvre une bouteille de soda, la pression diminue et le CO2 quitte la solution sous forme de bulles.",
        "ru": "При открывании бутылки с газированным напитком давление падает, и CO2 выделяется из раствора в виде пузырьков.",
        "ar": "عند فتح غطاء زجاجة المشروب الغازي ينخفض الضغط فيخرج غاز CO2 من المحلول على شكل فقاعات.",
        "zh": "打开汽水瓶盖时，压强降低，CO2 气体以气泡形式从溶液中逸出。",
        "ku": "Dema qapaxa gazozê tê vekirin, ji ber ku zext dadikeve, gaza CO2 wek bilbil ji çareseriyê vediqete."
      },
      "trap": {
        "tr": "Gazoz şişesinin kapağı açıldığında CO2'nin içecekteki çözünürlüğü artar.",
        "en": "When a bottle of soda is opened, the solubility of CO2 in the drink increases.",
        "de": "Beim Öffnen einer Limonadenflasche nimmt die Löslichkeit von CO2 im Getränk zu.",
        "fr": "Lorsqu'on ouvre une bouteille de soda, la solubilité du CO2 dans la boisson augmente.",
        "ru": "При открывании бутылки с газированным напитком растворимость CO2 в напитке увеличивается.",
        "ar": "عند فتح زجاجة المشروب الغازي تزداد ذائبية CO2 في المشروب.",
        "zh": "打开汽水瓶盖时，CO2 在饮料中的溶解度增大。",
        "ku": "Dema qapaxa şûşeya gazozê tê vekirin, helbûniya CO2 di vexwarinê de zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Kapak açılınca şişedeki CO2'nin kısmi basıncı düşer; Henry yasasına göre çözünürlük artmaz, azalır ve fazla gaz kabarcık hâlinde ayrılır.",
        "en": "When the cap is opened, the partial pressure of CO2 above the drink drops; by Henry's law the solubility decreases rather than increases, and the excess gas escapes as bubbles.",
        "de": "Beim Öffnen sinkt der CO2-Partialdruck über dem Getränk; nach dem Henry-Gesetz nimmt die Löslichkeit ab statt zu, und das überschüssige Gas entweicht in Bläschen.",
        "fr": "À l'ouverture, la pression partielle du CO2 au-dessus de la boisson chute ; selon la loi de Henry, la solubilité diminue au lieu d'augmenter et l'excès de gaz s'échappe en bulles.",
        "ru": "При открывании парциальное давление CO2 над напитком падает; по закону Генри растворимость уменьшается, а не растёт, и избыток газа выделяется пузырьками.",
        "ar": "عند فتح الغطاء ينخفض الضغط الجزئي لـ CO2 فوق المشروب؛ ووفق قانون هنري تقل الذائبية ولا تزداد، فيخرج الغاز الزائد على شكل فقاعات.",
        "zh": "打开瓶盖后饮料上方 CO2 的分压降低；根据亨利定律，溶解度减小而不是增大，多余的气体以气泡形式逸出。",
        "ku": "Dema qapax vedibe, zexta qismî ya CO2 di şûşeyê de dadikeve; li gorî zagona Henry helbûnî zêde nabe, kêm dibe û gaza zêde wek bilbil vediqete."
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
        "ar": "الارتفاع في درجة الغليان",
        "zh": "沸点升高",
        "ku": "Bilindbûna Xala Kelînê"
      },
      "conceptB": {
        "tr": "Donma Noktası Alçalması",
        "en": "Freezing Point Depression",
        "de": "Gefrierpunktserniedrigung",
        "fr": "Abaissement du point de congélation",
        "ru": "Понижение температуры замерзания",
        "ar": "الانخفاض في درجة التجمد",
        "zh": "凝固点降低",
        "ku": "Daketina Xala Cemidînê"
      },
      "distinction": {
        "tr": "Kaynama noktası yükselmesi, çözeltinin kaynamaya başlama sıcaklığının saf çözücüden ne kadar yüksek olduğudur (ΔTk = Kk * m * i, su için Kk = 0,52); donma noktası alçalması ise donmaya başlama sıcaklığının ne kadar düşük olduğudur (ΔTd = Kd * m * i, su için Kd = 1,86). Aynı sulu çözeltide Kd > Kk olduğundan donma noktası alçalması daha büyüktür.",
        "en": "Boiling point elevation is how much higher the solution's boiling temperature is than the pure solvent's (ΔTb = Kb * m * i, Kb = 0.52 for water); freezing point depression is how much lower its freezing temperature is (ΔTf = Kf * m * i, Kf = 1.86 for water). In the same aqueous solution Kf > Kb, so the freezing point depression is larger.",
        "de": "Siedepunkterhöhung: gibt an, um wie viel die Siedetemperatur der Lösung über der des reinen Lösungsmittels liegt (ΔTs = Ks * m * i, für Wasser Ks = 0,52); Gefrierpunktserniedrigung: gibt an, um wie viel die Gefriertemperatur tiefer liegt (ΔTg = Kg * m * i, für Wasser Kg = 1,86). In derselben wässrigen Lösung ist Kg > Ks, daher ist die Gefrierpunktserniedrigung größer.",
        "fr": "Élévation du point d'ébullition : indique de combien la température d'ébullition de la solution dépasse celle du solvant pur (ΔTéb = Kéb * m * i, Kéb = 0,52 pour l'eau) ; abaissement du point de congélation : indique de combien sa température de congélation est plus basse (ΔTcong = Kcong * m * i, Kcong = 1,86 pour l'eau). Dans une même solution aqueuse Kcong > Kéb, donc l'abaissement cryoscopique est plus grand.",
        "ru": "Повышение температуры кипения показывает, насколько температура кипения раствора выше, чем у чистого растворителя (ΔTкип = Kэб * m * i, для воды Kэб = 0,52); понижение температуры замерзания показывает, насколько температура начала замерзания раствора ниже (ΔTзам = Kкр * m * i, для воды Kкр = 1,86). Для одного и того же водного раствора Kкр > Kэб, поэтому понижение температуры замерзания больше.",
        "ar": "الارتفاع في درجة الغليان هو مقدار زيادة درجة غليان المحلول على درجة غليان المذيب النقي (ΔTb = Kb * m * i، وللماء Kb = 0.52)؛ أما الانخفاض في درجة التجمد فهو مقدار نقصان درجة تجمد المحلول عن درجة تجمد المذيب النقي (ΔTf = Kf * m * i، وللماء Kf = 1.86). وفي المحلول المائي نفسه Kf > Kb، لذا يكون الانخفاض في درجة التجمد أكبر.",
        "zh": "沸点升高指溶液的沸点比纯溶剂高出多少(ΔTb = Kb * m * i，水的 Kb = 0.52)；凝固点降低指溶液的凝固点比纯溶剂低多少(ΔTf = Kf * m * i，水的 Kf = 1.86)。同一水溶液中 Kf > Kb，所以凝固点降低值更大。",
        "ku": "Bilindbûna xala kelînê ew e ku germahiya destpêka kelîna çareseriyê çiqas ji ya helkera paqij bilindtir e (ΔTk = Kk * m * i, ji bo avê Kk = 0,52); daketina xala cemidînê ew e ku germahiya destpêka cemidînê çiqas nizmtir e (ΔTd = Kd * m * i, ji bo avê Kd = 1,86). Di heman çareseriya avî de Kd > Kk e, ji ber vê yekê daketina xala cemidînê mezintir e."
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
        "ku": "Helbûna Endotermîk"
      },
      "conceptB": {
        "tr": "Ekzotermik Çözünme",
        "en": "Exothermic Dissolution",
        "de": "Exotherme Auflösung",
        "fr": "Dissolution exothermique",
        "ru": "Экзотермическое растворение",
        "ar": "الذوبان الطارد للحرارة",
        "zh": "放热溶解",
        "ku": "Helbûna Ekzotermîk"
      },
      "distinction": {
        "tr": "Endotermik çözünmede ısı alınır ve sıcaklık arttıkça çözünürlük artar; ekzotermik çözünmede ise ısı açığa çıkar ve sıcaklık arttıkça çözünürlük azalır.",
        "en": "In endothermic dissolution heat is absorbed and solubility increases as temperature rises; in exothermic dissolution heat is released and solubility decreases as temperature rises.",
        "de": "Endotherme Auflösung: Es wird Wärme aufgenommen, und die Löslichkeit nimmt mit steigender Temperatur zu; exotherme Auflösung: Es wird Wärme abgegeben, und die Löslichkeit nimmt mit steigender Temperatur ab.",
        "fr": "Dissolution endothermique : de la chaleur est absorbée et la solubilité augmente avec la température ; dissolution exothermique : de la chaleur est libérée et la solubilité diminue lorsque la température augmente.",
        "ru": "Эндотермическое растворение идёт с поглощением теплоты, и растворимость растёт с повышением температуры; экзотермическое растворение идёт с выделением теплоты, и растворимость уменьшается с повышением температуры.",
        "ar": "الذوبان الماص للحرارة يمتص حرارة وتزداد فيه الذائبية بارتفاع درجة الحرارة؛ أما الذوبان الطارد للحرارة فيُطلق حرارة وتقل فيه الذائبية بارتفاع درجة الحرارة.",
        "zh": "吸热溶解会吸收热量，溶解度随温度升高而增大；放热溶解会放出热量，溶解度随温度升高而减小。",
        "ku": "Di helbûna endotermîk de germ tê kişandin û her ku germahî bilind dibe helbûnî zêde dibe; di helbûna ekzotermîk de germ derdikeve û her ku germahî bilind dibe helbûnî kêm dibe."
      }
    },
    {
      "id": "u15-c03",
      "conceptA": {
        "tr": "Ozmoz",
        "en": "Osmosis",
        "de": "Osmose",
        "fr": "Osmose",
        "ru": "Осмос",
        "ar": "الأسموزية (التناضح)",
        "zh": "渗透",
        "ku": "Osmoz"
      },
      "conceptB": {
        "tr": "Buhar Basıncı Alçalması",
        "en": "Vapor Pressure Lowering",
        "de": "Dampfdruckerniedrigung",
        "fr": "Abaissement de la pression de vapeur",
        "ru": "Понижение давления пара",
        "ar": "انخفاض ضغط البخار",
        "zh": "蒸气压下降",
        "ku": "Daketina Zexta Buharê"
      },
      "distinction": {
        "tr": "Ozmozda çözücü molekülleri yarı geçirgen zardan seyreltik çözeltiden derişik çözeltiye geçer; buhar basıncı alçalmasında ise uçucu olmayan çözünen, çözeltinin buhar basıncını aynı sıcaklıktaki saf çözücününkinden düşük yapar.",
        "en": "In osmosis, solvent molecules pass through a semipermeable membrane from the dilute solution into the concentrated solution; in vapor pressure lowering, a non-volatile solute makes the vapor pressure of the solution lower than that of the pure solvent at the same temperature.",
        "de": "Osmose: Lösungsmittelmoleküle wandern durch eine semipermeable Membran von der verdünnten in die konzentrierte Lösung; Dampfdruckerniedrigung: Ein nichtflüchtiger gelöster Stoff bewirkt, dass der Dampfdruck der Lösung niedriger ist als der des reinen Lösungsmittels bei gleicher Temperatur.",
        "fr": "Osmose : les molécules de solvant traversent une membrane semi-perméable de la solution diluée vers la solution concentrée ; abaissement de la pression de vapeur : un soluté non volatil rend la pression de vapeur de la solution inférieure à celle du solvant pur à la même température.",
        "ru": "Осмос — переход молекул растворителя через полупроницаемую мембрану из разбавленного раствора в концентрированный; понижение давления пара — явление, при котором нелетучее растворённое вещество делает давление пара раствора ниже, чем у чистого растворителя при той же температуре.",
        "ar": "في الأسموزية تنتقل جزيئات المذيب عبر غشاء شبه منفذ من المحلول المخفف إلى المحلول المركز؛ أما في انخفاض ضغط البخار فيجعل المذاب غير المتطاير ضغط بخار المحلول أقل من ضغط بخار المذيب النقي عند درجة الحرارة نفسها.",
        "zh": "渗透是指溶剂分子透过半透膜从稀溶液进入浓溶液；蒸气压下降是指不挥发性溶质使溶液的蒸气压低于同温度下纯溶剂的蒸气压。",
        "ku": "Di osmozê de molekulên helker di perdeya nîvderbasbar re ji çareseriya sist ber bi çareseriya tîr derbas dibin; di daketina zexta buharê de madeya helbûyî ya nefirok zexta buharê ya çareseriyê ji ya helkera paqij a di heman germahiyê de nizmtir dike."
      }
    },
    {
      "id": "u15-c04",
      "conceptA": {
        "tr": "Van 't Hoff Faktörü",
        "en": "Van 't Hoff Factor",
        "de": "Van-'t-Hoff-Faktor",
        "fr": "Facteur de van 't Hoff",
        "ru": "Коэффициент Вант-Гоффа",
        "ar": "عامل فانت هوف",
        "zh": "范特霍夫因子",
        "ku": "Faktora van 't Hoff"
      },
      "conceptB": {
        "tr": "Molal Derişim (m)",
        "en": "Molal Concentration (m)",
        "de": "Molale Konzentration (m)",
        "fr": "Concentration molale (m)",
        "ru": "Моляльная концентрация (m)",
        "ar": "التركيز المولالي (m)",
        "zh": "质量摩尔浓度(m)",
        "ku": "Tîrbûna Molal (m)"
      },
      "distinction": {
        "tr": "Van 't Hoff faktörü, 1 mol çözünenin çözündüğünde oluşturduğu tanecik mol sayısıdır (glikoz = 1, NaCl = 2); molal derişim ise 1 kg çözücüde çözünen maddenin mol sayısıdır.",
        "en": "The van 't Hoff factor is the number of moles of particles formed when 1 mol of solute dissolves (glucose = 1, NaCl = 2); molal concentration is the number of moles of solute per 1 kg of solvent.",
        "de": "Van-'t-Hoff-Faktor: Stoffmenge an Teilchen, die beim Lösen von 1 mol gelöstem Stoff entsteht (Glucose = 1, NaCl = 2); molale Konzentration: Stoffmenge des gelösten Stoffes pro 1 kg Lösungsmittel.",
        "fr": "Facteur de van 't Hoff : nombre de moles de particules formées quand 1 mol de soluté se dissout (glucose = 1, NaCl = 2) ; concentration molale : nombre de moles de soluté pour 1 kg de solvant.",
        "ru": "Коэффициент Вант-Гоффа — число молей частиц, образующихся при растворении 1 моль вещества (глюкоза = 1, NaCl = 2); моляльная концентрация (m) — число молей растворённого вещества в 1 кг растворителя.",
        "ar": "عامل فانت هوف هو عدد مولات الجسيمات الناتجة عند ذوبان 1 mol من المذاب (الجلوكوز = 1، NaCl = 2)؛ أما التركيز المولالي فهو عدد مولات المذاب في 1 kg من المذيب.",
        "zh": "范特霍夫因子是 1 mol 溶质溶解后形成的粒子的物质的量(葡萄糖 = 1，NaCl = 2)；而质量摩尔浓度(m)是每 1 kg 溶剂中所含溶质的物质的量。",
        "ku": "Faktora van 't Hoff hejmara molên perçeyan e ku dema 1 mol madeya helbûyî dihele çêdibin (glîkoz = 1, NaCl = 2); tîrbûna molal (m) hejmara molên madeya helbûyî ye di 1 kg helker de."
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
        "ku": "Zagona Raoult"
      },
      "conceptB": {
        "tr": "Henry Yasası",
        "en": "Henry's Law",
        "de": "Henrys Gesetz",
        "fr": "La loi de Henry",
        "ru": "Закон Генри",
        "ar": "قانون هنري",
        "zh": "亨利定律",
        "ku": "Zagona Henry"
      },
      "distinction": {
        "tr": "Raoult yasası, uçucu olmayan çözünen içeren bir çözeltinin buhar basıncının saf çözücünün buhar basıncı ile çözücünün mol kesrinin çarpımına eşit olduğunu; Henry yasası ise bir gazın sıvıdaki çözünürlüğünün o gazın kısmi basıncıyla doğru orantılı olduğunu açıklar.",
        "en": "Raoult's law states that the vapor pressure of a solution containing a non-volatile solute equals the vapor pressure of the pure solvent times the mole fraction of the solvent; Henry's law states that the solubility of a gas in a liquid is directly proportional to its partial pressure.",
        "de": "Raoults Gesetz besagt, dass der Dampfdruck einer Lösung mit nichtflüchtigem gelöstem Stoff gleich dem Dampfdruck des reinen Lösungsmittels mal dessen Stoffmengenanteil ist; Henrys Gesetz besagt, dass die Löslichkeit eines Gases in einer Flüssigkeit proportional zu seinem Partialdruck ist.",
        "fr": "La loi de Raoult indique que la pression de vapeur d'une solution contenant un soluté non volatil est égale à la pression de vapeur du solvant pur multipliée par la fraction molaire du solvant ; la loi de Henry indique que la solubilité d'un gaz dans un liquide est proportionnelle à sa pression partielle.",
        "ru": "Закон Рауля утверждает, что давление пара раствора нелетучего вещества равно давлению пара чистого растворителя, умноженному на мольную долю растворителя; закон Генри утверждает, что растворимость газа в жидкости прямо пропорциональна его парциальному давлению.",
        "ar": "ينص قانون راؤول على أن ضغط بخار محلول يحتوي على مذاب غير متطاير يساوي ضغط بخار المذيب النقي مضروبًا في الكسر المولي للمذيب؛ وينص قانون هنري على أن ذائبية الغاز في السائل تتناسب طرديًا مع ضغطه الجزئي.",
        "zh": "拉乌尔定律指出，含非挥发性溶质的溶液的蒸气压等于纯溶剂的蒸气压乘以溶剂的物质的量分数；而亨利定律指出，气体在液体中的溶解度与该气体的分压成正比。",
        "ku": "Zagona Raoult dibêje ku zexta buharê ya çareseriyeke ku madeyeke helbûyî ya nefirok tê de heye, bi hasila zexta buharê ya helkera paqij û kerta molî ya helker re wekhev e; zagona Henry dibêje ku helbûniya gazekê di şileyê de bi zexta wê ya qismî re rasterast rêjeyî ye."
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
        "ku": "Osmoza Berevajî"
      },
      "distinction": {
        "tr": "Ozmotik basınç, çözücünün yarı geçirgen zardan derişik çözeltiye geçişini (ozmozu) durdurmak için uygulanması gereken basınçtır; ters ozmoz ise ozmotik basınçtan büyük basınç uygulanarak tuzlu sudan saf su elde edilmesidir.",
        "en": "Osmotic pressure is the pressure that must be applied to stop the passage of solvent through a semipermeable membrane into the concentrated solution (osmosis); reverse osmosis obtains pure water from salt water by applying a pressure greater than the osmotic pressure.",
        "de": "Osmotischer Druck: der Druck, der aufgebracht werden muss, um den Übertritt des Lösungsmittels durch eine semipermeable Membran in die konzentrierte Lösung (Osmose) zu stoppen; Umkehrosmose: Mit einem Druck, der größer als dieser Druck ist, wird aus Salzwasser reines Wasser gewonnen.",
        "fr": "Pression osmotique : pression qu'il faut appliquer pour arrêter le passage du solvant à travers une membrane semi-perméable vers la solution concentrée (osmose) ; osmose inverse : obtention d'eau pure à partir d'eau salée en appliquant une pression supérieure à cette pression.",
        "ru": "Осмотическое давление — давление, которое нужно приложить, чтобы остановить переход растворителя через полупроницаемую мембрану в концентрированный раствор (осмос); обратный осмос — получение чистой воды из солёной при давлении, превышающем осмотическое.",
        "ar": "الضغط الأسموزي هو الضغط اللازم تطبيقه لإيقاف انتقال المذيب عبر غشاء شبه منفذ إلى المحلول المركز (التناضح)؛ أما التناضح العكسي فهو الحصول على ماء نقي من الماء المالح بتطبيق ضغط أكبر من ذلك الضغط.",
        "zh": "渗透压是为阻止溶剂透过半透膜进入浓溶液（渗透）而必须施加的压强；反渗透是施加大于渗透压的压强，从盐水中获得纯水。",
        "ku": "Zexta osmotîk ew zext e ku divê were sepandin da ku derbasbûna helker di perdeya nîvderbasbar re ber bi çareseriya tîr (osmoz) raweste; osmoza berevajî bidestxistina ava paqij e ji ava şor bi sepandina zexteke ji zexta osmotîk mezintir."
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
        "ar": "المحلول غير المشبع",
        "zh": "不饱和溶液",
        "ku": "Çareseriya Netêr"
      },
      "conceptB": {
        "tr": "Aşırı Doymuş Çözelti",
        "en": "Supersaturated Solution",
        "de": "Übersättigte Lösung",
        "fr": "Solution sursaturée",
        "ru": "Пересыщенный раствор",
        "ar": "المحلول فوق المشبع",
        "zh": "过饱和溶液",
        "ku": "Çareseriya Zêdetêr"
      },
      "distinction": {
        "tr": "Doymamış çözelti, aynı sıcaklıktaki çözünürlükten daha az çözünen içerir ve bir miktar daha çözünen çözebilir; aşırı doymuş çözelti ise çözünürlükten daha fazla çözünen içeren kararsız bir çözeltidir.",
        "en": "An unsaturated solution contains less solute than the solubility at that temperature and can dissolve more; a supersaturated solution contains more solute than the solubility and is unstable.",
        "de": "Ungesättigte Lösung: enthält weniger gelösten Stoff, als der Löslichkeit bei dieser Temperatur entspricht, und kann noch weiteren Stoff lösen; übersättigte Lösung: enthält mehr gelösten Stoff, als der Löslichkeit entspricht, und ist instabil.",
        "fr": "Solution insaturée : elle contient moins de soluté que la solubilité à cette température et peut encore en dissoudre ; solution sursaturée : elle contient plus de soluté que la solubilité et elle est instable.",
        "ru": "Ненасыщенный раствор содержит меньше растворённого вещества, чем позволяет растворимость при данной температуре, и может растворить ещё; пересыщенный раствор содержит больше растворённого вещества, чем позволяет растворимость, и неустойчив.",
        "ar": "المحلول غير المشبع يحتوي على كمية من المذاب أقل من الذائبية عند درجة الحرارة نفسها ويمكنه إذابة المزيد؛ أما المحلول فوق المشبع فيحتوي على كمية من المذاب أكثر من الذائبية، وهو غير مستقر.",
        "zh": "不饱和溶液所含溶质少于该温度下的溶解度，还能继续溶解溶质；过饱和溶液所含溶质多于溶解度，是不稳定的溶液。",
        "ku": "Çareseriya netêr ji helbûniya di wê germahiyê de kêmtir madeya helbûyî dihewîne û hîn dikare hinekî din bihelîne; çareseriya zêdetêr çareseriyeke nearam e ku ji helbûniyê bêtir madeya helbûyî dihewîne."
      }
    },
    {
      "id": "u15-c08",
      "conceptA": {
        "tr": "NaCl Çözeltisi (i = 2)",
        "en": "NaCl Solution (i = 2)",
        "de": "NaCl-Lösung (i = 2)",
        "fr": "Solution de NaCl (i = 2)",
        "ru": "Раствор NaCl (i = 2)",
        "ar": "محلول NaCl (i = 2)",
        "zh": "NaCl 溶液(i = 2)",
        "ku": "Çareseriya NaCl (i = 2)"
      },
      "conceptB": {
        "tr": "Glikoz Çözeltisi (i = 1)",
        "en": "Glucose Solution (i = 1)",
        "de": "Glucoselösung (i = 1)",
        "fr": "Solution de glucose (i = 1)",
        "ru": "Раствор глюкозы (i = 1)",
        "ar": "محلول الجلوكوز (i = 1)",
        "zh": "葡萄糖溶液(i = 1)",
        "ku": "Çareseriya Glîkozê (i = 1)"
      },
      "distinction": {
        "tr": "NaCl çözeltisi, eşit molalitedeki glikoz çözeltisinin iki katı tanecik içerdiğinden donma noktası alçalması ve kaynama noktası yükselmesi yaklaşık iki kat büyüktür; glikoz çözeltisi ise glikoz iyonlaşmadığından molalitesi kadar tanecik içerir.",
        "en": "A NaCl solution contains twice as many particles as a glucose solution of equal molality, so its freezing point depression and boiling point elevation are about twice as large; a glucose solution, by contrast, contains only as many particles as its molality, because glucose does not ionize.",
        "de": "Eine NaCl-Lösung enthält doppelt so viele Teilchen wie eine Glucoselösung gleicher Molalität, daher sind ihre Gefrierpunktserniedrigung und Siedepunkterhöhung etwa doppelt so groß; eine Glucoselösung enthält dagegen nur so viele Teilchen, wie ihre Molalität angibt, weil Glucose nicht ionisiert.",
        "fr": "Une solution de NaCl contient deux fois plus de particules qu'une solution de glucose de même molalité, si bien que son abaissement du point de congélation et son élévation du point d'ébullition sont environ deux fois plus grands ; une solution de glucose, elle, ne contient que le nombre de particules indiqué par sa molalité, car le glucose ne s'ionise pas.",
        "ru": "Раствор NaCl содержит вдвое больше частиц, чем раствор глюкозы той же моляльности, поэтому понижение температуры замерзания и повышение температуры кипения у него примерно вдвое больше; раствор глюкозы же содержит столько частиц, сколько соответствует его моляльности, поскольку глюкоза не ионизируется.",
        "ar": "يحتوي محلول NaCl على ضعف عدد الجسيمات الموجودة في محلول جلوكوز له المولالية نفسها، لذلك يكون الانخفاض في درجة تجمده والارتفاع في درجة غليانه نحو الضعف؛ أما محلول الجلوكوز فلا يحتوي إلا على عدد من الجسيمات يساوي مولاليته، لأن الجلوكوز لا يتأيّن.",
        "zh": "NaCl 溶液所含粒子数是相同质量摩尔浓度葡萄糖溶液的两倍，因此其凝固点降低值和沸点升高值约为后者的两倍；而葡萄糖不电离，葡萄糖溶液所含粒子数只与其质量摩尔浓度相当。",
        "ku": "Çareseriya NaCl du qat ji çareseriya glîkozê ya bi heman molalîteyê bêtir perçe dihewîne, ji ber vê yekê daketina xala cemidînê û bilindbûna xala kelînê ya wê nêzîkî du qat mezintir in; çareseriya glîkozê jî, ji ber ku glîkoz îyonîze nabe, tenê bi qasî molalîteya xwe perçe dihewîne."
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
        "fr": "Étapes du calcul de l'abaissement du point de congélation",
        "ru": "Этапы расчёта понижения температуры замерзания",
        "ar": "حساب الانخفاض في درجة التجمد",
        "zh": "凝固点降低的计算步骤",
        "ku": "Gavên Hesabê Daketina Xala Cemidînê"
      },
      "steps": [
        {
          "tr": "Çözünenin kütlesi mol kütlesine bölünerek mol sayısı (n) bulunur",
          "en": "The mass of the solute is divided by its molar mass to find the number of moles (n)",
          "de": "Die Masse des gelösten Stoffes wird durch seine molare Masse geteilt, um die Stoffmenge (n) zu erhalten",
          "fr": "On divise la masse du soluté par sa masse molaire pour obtenir la quantité de matière (n)",
          "ru": "Массу растворённого вещества делят на его молярную массу и находят число молей (n)",
          "ar": "تُقسم كتلة المذاب على كتلته المولية لإيجاد عدد المولات (n)",
          "zh": "用溶质的质量除以其摩尔质量，求出物质的量 (n)",
          "ku": "Girseya madeya helbûyî li ser girseya wê ya molî tê dabeşkirin û hejmara molan (n) tê dîtin"
        },
        {
          "tr": "Mol sayısı, çözücünün kilogram cinsinden kütlesine bölünerek molalite (m) bulunur",
          "en": "The number of moles is divided by the mass of the solvent in kilograms to find the molality (m)",
          "de": "Die Stoffmenge wird durch die Masse des Lösungsmittels in Kilogramm geteilt, um die Molalität (m) zu erhalten",
          "fr": "On divise la quantité de matière par la masse du solvant en kilogrammes pour obtenir la molalité (m)",
          "ru": "Число молей делят на массу растворителя в килограммах и находят моляльность (m)",
          "ar": "يُقسم عدد المولات على كتلة المذيب بالكيلوغرام لإيجاد المولالية (m)",
          "zh": "用物质的量除以溶剂的质量(以 kg 计)，求出质量摩尔浓度 (m)",
          "ku": "Hejmara molan li ser girseya helker a bi kîlogram tê dabeşkirin û molalîte (m) tê dîtin"
        },
        {
          "tr": "ΔTd = Kd * m * i eşitliğiyle donma noktası alçalması hesaplanır",
          "en": "The freezing point depression is calculated from ΔTf = Kf * m * i",
          "de": "Die Gefrierpunktserniedrigung wird mit ΔTg = Kg * m * i berechnet",
          "fr": "On calcule l'abaissement du point de congélation avec ΔTcong = Kcong * m * i",
          "ru": "По формуле ΔTзам = Kкр * m * i рассчитывают понижение температуры замерзания",
          "ar": "يُحسب الانخفاض في درجة التجمد من العلاقة ΔTf = Kf * m * i",
          "zh": "用 ΔTf = Kf * m * i 计算凝固点降低值",
          "ku": "Bi hevkêşeya ΔTd = Kd * m * i daketina xala cemidînê tê hesibandin"
        },
        {
          "tr": "Bulunan ΔTd, saf çözücünün donma noktasından çıkarılarak çözeltinin donmaya başlama sıcaklığı bulunur",
          "en": "The ΔTf obtained is subtracted from the freezing point of the pure solvent to find the temperature at which the solution starts to freeze",
          "de": "Das erhaltene ΔTg wird vom Gefrierpunkt des reinen Lösungsmittels abgezogen, um die Temperatur des Gefrierbeginns der Lösung zu erhalten",
          "fr": "On soustrait le ΔTcong obtenu du point de congélation du solvant pur pour trouver la température de début de congélation de la solution",
          "ru": "Полученное ΔTзам вычитают из температуры замерзания чистого растворителя и находят температуру, при которой раствор начинает замерзать",
          "ar": "يُطرح ΔTf الناتج من درجة تجمد المذيب النقي لإيجاد درجة الحرارة التي يبدأ عندها المحلول بالتجمد",
          "zh": "用纯溶剂的凝固点减去所得的 ΔTf，求出溶液开始凝固的温度",
          "ku": "ΔTd ya hatî dîtin ji xala cemidînê ya helkera paqij tê derxistin û germahiya ku çareserî dest bi cemidînê dike tê dîtin"
        }
      ]
    },
    {
      "id": "u15-s02",
      "title": {
        "tr": "Doymamış Tuzlu Suyun Isıtılması ve Kaynaması",
        "en": "Heating and Boiling of an Unsaturated Salt Solution",
        "de": "Erhitzen und Sieden einer ungesättigten Salzlösung",
        "fr": "Chauffage et ébullition d'une solution salée insaturée",
        "ru": "Нагревание и кипение ненасыщенного раствора соли",
        "ar": "تسخين محلول ملحي غير مشبع وغليانه",
        "zh": "不饱和食盐水的加热与沸腾",
        "ku": "Germkirin û Kelîna Ava Xwê ya Netêr"
      },
      "steps": [
        {
          "tr": "Çözelti ısıtıldıkça sıcaklığı ve buhar basıncı artar",
          "en": "As the solution is heated, its temperature and vapor pressure rise",
          "de": "Beim Erhitzen steigen Temperatur und Dampfdruck der Lösung",
          "fr": "Lorsque la solution est chauffée, sa température et sa pression de vapeur augmentent",
          "ru": "При нагревании температура раствора и давление его пара возрастают",
          "ar": "عند تسخين المحلول ترتفع درجة حرارته ويزداد ضغط بخاره",
          "zh": "加热时溶液的温度和蒸气压升高",
          "ku": "Her ku çareserî tê germkirin, germahî û zexta buharê ya wê zêde dibin"
        },
        {
          "tr": "Buhar basıncı dış basınca eşitlenince çözelti, saf suyun kaynama noktasından yüksek bir sıcaklıkta kaynamaya başlar",
          "en": "When the vapor pressure equals the external pressure, the solution starts to boil at a temperature above the boiling point of pure water",
          "de": "Wenn der Dampfdruck den Außendruck erreicht, beginnt die Lösung bei einer Temperatur oberhalb des Siedepunkts von reinem Wasser zu sieden",
          "fr": "Quand la pression de vapeur atteint la pression extérieure, la solution commence à bouillir à une température supérieure au point d'ébullition de l'eau pure",
          "ru": "Когда давление пара сравнивается с внешним давлением, раствор начинает кипеть при температуре выше температуры кипения чистой воды",
          "ar": "عندما يتساوى ضغط بخاره مع الضغط الخارجي يبدأ المحلول بالغليان عند درجة حرارة أعلى من درجة غليان الماء النقي",
          "zh": "蒸气压等于外压时，溶液在高于纯水沸点的温度下开始沸腾",
          "ku": "Dema zexta buharê digihîje zexta derve, çareserî di germahiyeke ji xala kelînê ya ava paqij bilindtir de dest bi kelînê dike"
        },
        {
          "tr": "Kaynama sürerken su buharlaşır, çözelti derişir ve sıcaklık yükselmeye devam eder",
          "en": "As boiling continues, water evaporates, the solution becomes more concentrated and the temperature keeps rising",
          "de": "Während des Siedens verdampft Wasser, die Lösung wird konzentrierter und die Temperatur steigt weiter",
          "fr": "Pendant l'ébullition, l'eau s'évapore, la solution se concentre et la température continue d'augmenter",
          "ru": "В ходе кипения вода испаряется, раствор становится более концентрированным, и температура продолжает расти",
          "ar": "مع استمرار الغليان يتبخر الماء فيزداد تركيز المحلول وتستمر درجة الحرارة في الارتفاع",
          "zh": "沸腾过程中水不断蒸发，溶液变浓，温度继续升高",
          "ku": "Dema kelîn didome av dibe buhar, çareserî tîrtir dibe û germahî her bilind dibe"
        },
        {
          "tr": "Çözelti doygun hâle gelince sıcaklık sabit kalır ve tuz kristallenmeye başlar",
          "en": "Once the solution becomes saturated, the temperature stays constant and salt begins to crystallize",
          "de": "Sobald die Lösung gesättigt ist, bleibt die Temperatur konstant und Salz beginnt auszukristallisieren",
          "fr": "Une fois la solution saturée, la température reste constante et le sel commence à cristalliser",
          "ru": "Когда раствор становится насыщенным, температура перестаёт меняться и соль начинает кристаллизоваться",
          "ar": "عندما يصبح المحلول مشبعًا تثبت درجة الحرارة ويبدأ الملح بالتبلور",
          "zh": "溶液达到饱和后温度保持不变，食盐开始结晶析出",
          "ku": "Dema çareserî têr dibe germahî sabît dimîne û xwê dest bi krîstalbûnê dike"
        }
      ]
    },
    {
      "id": "u15-s03",
      "title": {
        "tr": "Aşırı doymuş çözelti hazırlama",
        "en": "Preparing a supersaturated solution",
        "de": "Herstellung einer übersättigten Lösung",
        "fr": "Préparation d'une solution sursaturée",
        "ru": "Приготовление пересыщенного раствора",
        "ar": "تحضير محلول فوق مشبع",
        "zh": "过饱和溶液的制备",
        "ku": "Amadekirina çareseriya zêdetêr"
      },
      "steps": [
        {
          "tr": "Çözünürlüğü sıcaklıkla artan bir katının yüksek sıcaklıkta, dibinde katısı bulunan doygun çözeltisi hazırlanır",
          "en": "At a high temperature, a saturated solution of a solid whose solubility increases with temperature is prepared, with undissolved solid at the bottom",
          "de": "Bei hoher Temperatur wird von einem Feststoff, dessen Löslichkeit mit der Temperatur zunimmt, eine gesättigte Lösung mit Bodenkörper hergestellt",
          "fr": "À haute température, on prépare une solution saturée d'un solide dont la solubilité augmente avec la température, avec du solide non dissous au fond",
          "ru": "При высокой температуре готовят насыщенный раствор твёрдого вещества, растворимость которого растёт с температурой, с осадком на дне",
          "ar": "يُحضَّر عند درجة حرارة مرتفعة محلول مشبع لمادة صلبة تزداد ذائبيتها بارتفاع درجة الحرارة، ويبقى في قاعه راسب صلب",
          "zh": "在较高温度下，配制溶解度随温度升高而增大的某固体的饱和溶液，底部留有未溶固体",
          "ku": "Di germahiya bilind de çareseriyeke têr a madeyeke hişk a ku helbûniya wê bi germahiyê re zêde dibe tê amadekirin, bi madeya hişk li binê wê"
        },
        {
          "tr": "Sıcak çözelti süzülerek çözünmeden kalan katı ayrılır",
          "en": "The hot solution is filtered to remove the undissolved solid",
          "de": "Die heiße Lösung wird filtriert, um den ungelösten Feststoff abzutrennen",
          "fr": "On filtre la solution chaude pour éliminer le solide non dissous",
          "ru": "Горячий раствор фильтруют, отделяя нерастворившееся твёрдое вещество",
          "ar": "يُرشَّح المحلول الساخن لفصل المادة الصلبة التي لم تذب",
          "zh": "趁热过滤，除去未溶解的固体",
          "ku": "Çareseriya germ tê parzûnkirin û madeya hişk a nehelbûyî tê veqetandin"
        },
        {
          "tr": "Süzüntü, sarsılmadan yavaşça oda sıcaklığına soğutulur",
          "en": "The filtrate is cooled slowly to room temperature without being disturbed",
          "de": "Das Filtrat wird erschütterungsfrei langsam auf Raumtemperatur abgekühlt",
          "fr": "On laisse le filtrat refroidir lentement jusqu'à la température ambiante, sans l'agiter",
          "ru": "Фильтрат медленно, без встряхивания, охлаждают до комнатной температуры",
          "ar": "يُبرَّد الراشح ببطء إلى درجة حرارة الغرفة دون رجّه",
          "zh": "让滤液在不受扰动的情况下缓慢冷却到室温",
          "ku": "Şileya parzûnkirî bêyî hejandin hêdî hêdî heta germahiya odeyê tê sarkirin"
        },
        {
          "tr": "Soğuk çözeltiye aşı kristali atılır ve çözünürlüğü aşan miktar hızla kristallenir",
          "en": "A seed crystal is added to the cold solution and the amount in excess of the solubility crystallizes rapidly",
          "de": "Der kalten Lösung wird ein Impfkristall zugesetzt, und die über die Löslichkeit hinausgehende Menge kristallisiert rasch aus",
          "fr": "On ajoute un germe cristallin à la solution froide et la quantité dépassant la solubilité cristallise rapidement",
          "ru": "В холодный раствор вносят кристалл-затравку, и избыток вещества сверх растворимости быстро кристаллизуется",
          "ar": "تُضاف بلورة بادئة إلى المحلول البارد فتتبلور بسرعة الكمية الزائدة على الذائبية",
          "zh": "向冷却后的溶液中加入晶种，超过溶解度的那部分溶质迅速结晶析出",
          "ku": "Krîstaleke tov tê avêtin nav çareseriya sar û mîqdara ku ji helbûniyê zêdetir e zû krîstal dibe"
        }
      ]
    },
    {
      "id": "u15-s04",
      "title": {
        "tr": "Soğutmada kristallenen kütlenin çözünürlük eğrisinden hesaplanması",
        "en": "Calculating the mass that crystallizes on cooling from a solubility curve",
        "de": "Berechnung der beim Abkühlen auskristallisierenden Masse aus einer Löslichkeitskurve",
        "fr": "Calcul, à partir d'une courbe de solubilité, de la masse qui cristallise au refroidissement",
        "ru": "Расчёт массы вещества, кристаллизующегося при охлаждении, по кривой растворимости",
        "ar": "حساب الكتلة المتبلورة عند التبريد من منحنى الذائبية",
        "zh": "根据溶解度曲线计算冷却时析出晶体的质量",
        "ku": "Hesabkirina girseya ku di sarbûnê de krîstal dibe ji kêşeya helbûniyê"
      },
      "steps": [
        {
          "tr": "Grafikten başlangıç sıcaklığındaki çözünürlük (g/100 g su) okunur",
          "en": "The solubility at the initial temperature (g/100 g water) is read from the graph",
          "de": "Aus dem Diagramm wird die Löslichkeit bei der Anfangstemperatur (g/100 g Wasser) abgelesen",
          "fr": "On lit sur le graphique la solubilité à la température initiale (g/100 g d'eau)",
          "ru": "По графику определяют растворимость при начальной температуре (г/100 г воды)",
          "ar": "تُقرأ من الرسم البياني الذائبية عند درجة الحرارة الابتدائية (g/100 g ماء)",
          "zh": "从曲线上读出起始温度下的溶解度（g/100 g 水）",
          "ku": "Ji grafîkê helbûniya di germahiya destpêkê de (g/100 g av) tê xwendin"
        },
        {
          "tr": "Bu değerle orantı kurularak doygun çözeltideki su ve çözünen kütleleri bulunur",
          "en": "Using this value in a proportion, the masses of water and solute in the saturated solution are found",
          "de": "Mit diesem Wert werden über eine Verhältnisgleichung die Massen von Wasser und gelöstem Stoff in der gesättigten Lösung bestimmt",
          "fr": "Avec cette valeur, on établit une proportion pour trouver les masses d'eau et de soluté dans la solution saturée",
          "ru": "С помощью этой величины по пропорции находят массы воды и растворённого вещества в насыщенном растворе",
          "ar": "باستخدام هذه القيمة في تناسب تُحسب كتلتا الماء والمذاب في المحلول المشبع",
          "zh": "利用该数值列比例，求出饱和溶液中水和溶质的质量",
          "ku": "Bi vê nirxê rêjeyek tê danîn û girseyên av û madeya helbûyî yên di çareseriya têr de tên dîtin"
        },
        {
          "tr": "Son sıcaklıktaki çözünürlük okunarak aynı su kütlesinde çözünebilecek en fazla çözünen kütlesi hesaplanır",
          "en": "The solubility at the final temperature is read and the maximum mass of solute that the same mass of water can hold is calculated",
          "de": "Die Löslichkeit bei der Endtemperatur wird abgelesen und die größte Masse an gelöstem Stoff berechnet, die dieselbe Wassermasse aufnehmen kann",
          "fr": "On lit la solubilité à la température finale et on calcule la masse maximale de soluté que la même masse d'eau peut dissoudre",
          "ru": "Определяют растворимость при конечной температуре и рассчитывают наибольшую массу вещества, которая может раствориться в той же массе воды",
          "ar": "تُقرأ الذائبية عند درجة الحرارة النهائية وتُحسب أكبر كتلة من المذاب يمكن أن تذوب في كتلة الماء نفسها",
          "zh": "读出终了温度下的溶解度，计算同样质量的水最多能溶解的溶质质量",
          "ku": "Helbûniya di germahiya dawî de tê xwendin û girseya herî zêde ya madeya helbûyî ku di heman girseya avê de dikare bihele tê hesabkirin"
        },
        {
          "tr": "Başlangıçtaki çözünen kütlesinden bu değer çıkarılarak kristallenen katı kütlesi bulunur",
          "en": "Subtracting this value from the initial mass of solute gives the mass of solid that crystallizes",
          "de": "Zieht man diesen Wert von der anfänglichen Masse des gelösten Stoffes ab, erhält man die Masse des auskristallisierenden Feststoffs",
          "fr": "En retranchant cette valeur de la masse initiale de soluté, on obtient la masse de solide qui cristallise",
          "ru": "Вычитая эту величину из начальной массы растворённого вещества, находят массу выкристаллизовавшегося вещества",
          "ar": "بطرح هذه القيمة من كتلة المذاب الابتدائية تُحسب كتلة المادة الصلبة المتبلورة",
          "zh": "用起始溶质质量减去该数值，即得析出晶体的质量",
          "ku": "Ev nirx ji girseya destpêkê ya madeya helbûyî tê derxistin û girseya madeya hişk a ku krîstal dibe tê dîtin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u15-twin01",
      "stem": {
        "tr": "Tabloda üç sulu çözeltideki çözünen ve su miktarları verilmiştir. Bu çözeltilerin 1 atm'de donmaya başlama sıcaklıklarının küçükten büyüğe sıralanışı hangisidir? (İyonik bileşiklerin suda tamamen iyonlaştığı kabul edilecektir.)",
        "en": "The table gives the amounts of solute and water in three aqueous solutions. Which shows the temperatures at which these solutions begin to freeze at 1 atm in increasing order? (Assume ionic compounds ionize completely in water.)",
        "de": "Die Tabelle gibt die Mengen an gelöstem Stoff und Wasser in drei wässrigen Lösungen an. Welche Reihenfolge gibt die Temperaturen, bei denen diese Lösungen bei 1 atm zu gefrieren beginnen, von klein nach groß an? (Ionische Verbindungen sollen in Wasser vollständig ionisiert sein.)",
        "fr": "Le tableau indique les quantités de soluté et d'eau de trois solutions aqueuses. Quel est l'ordre croissant des températures auxquelles ces solutions commencent à geler sous 1 atm ? (On admet que les composés ioniques s'ionisent totalement dans l'eau.)",
        "ru": "В таблице приведены количества растворённого вещества и воды в трёх водных растворах. В каком варианте температуры начала замерзания этих растворов при 1 атм расположены в порядке возрастания? (Ионные соединения считать полностью ионизированными в воде.)",
        "ar": "يبيّن الجدول كميات المذاب والماء في ثلاثة محاليل مائية. ما ترتيب درجات الحرارة التي تبدأ عندها هذه المحاليل بالتجمد عند 1 atm من الأصغر إلى الأكبر؟ (يُفترض أن المركبات الأيونية تتأين في الماء تأينًا تامًا.)",
        "zh": "表中给出了三种水溶液中溶质和水的量。这些溶液在 1 atm 下开始凝固的温度由低到高的顺序是哪一项？（离子化合物在水中完全电离。）",
        "ku": "Di tabloyê de mîqdarên madeya helbûyî û avê yên sê çareseriyên avî hatine dayîn. Rêzkirina germahiyên ku van çareseriyan di 1 atm de dest bi cemidînê dikin ji piçûk ber bi mezin kîjan e? (Tê qebûlkirin ku pêkhateyên îyonîk di avê de bi tevahî îyonîze dibin.)"
      },
      "options": [
        {
          "tr": "I < III < II",
          "en": "I < III < II",
          "de": "I < III < II",
          "fr": "I < III < II",
          "ru": "I < III < II",
          "ar": "I < III < II",
          "zh": "I < III < II",
          "ku": "I < III < II"
        },
        {
          "tr": "III < I < II",
          "en": "III < I < II",
          "de": "III < I < II",
          "fr": "III < I < II",
          "ru": "III < I < II",
          "ar": "III < I < II",
          "zh": "III < I < II",
          "ku": "III < I < II"
        },
        {
          "tr": "II < I < III",
          "en": "II < I < III",
          "de": "II < I < III",
          "fr": "II < I < III",
          "ru": "II < I < III",
          "ar": "II < I < III",
          "zh": "II < I < III",
          "ku": "II < I < III"
        },
        {
          "tr": "II < III < I",
          "en": "II < III < I",
          "de": "II < III < I",
          "fr": "II < III < I",
          "ru": "II < III < I",
          "ar": "II < III < I",
          "zh": "II < III < I",
          "ku": "II < III < I"
        },
        {
          "tr": "I = III < II",
          "en": "I = III < II",
          "de": "I = III < II",
          "fr": "I = III < II",
          "ru": "I = III < II",
          "ar": "I = III < II",
          "zh": "I = III < II",
          "ku": "I = III < II"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Donma noktası alçalması tanecik molalitesiyle (m · i) orantılıdır; tanecik molalitesi büyük olan çözelti daha düşük sıcaklıkta donmaya başlar. I: m = 0,2 / 0,1 = 2 m, i = 2 → 4 m tanecik. II: m = 0,1 / 0,2 = 0,5 m, i = 3 → 1,5 m. III: m = 0,6 / 0,2 = 3 m, i = 1 → 3 m. Tanecik derişimi I > III > II olduğundan donmaya başlama sıcaklıkları I < III < II'dir (Kd = 1,86 °C·kg/mol ile sırasıyla −7,44 °C, −5,58 °C ve −2,79 °C). i'yi hesaba katmayıp yalnızca molaliteye bakan III < I < II, su kütlelerini hesaba katmayıp yalnızca i değerlerine bakan II < I < III sıralamasına ulaşır; II < III < I ise doğru sıralamanın tersidir.",
        "en": "Freezing point depression is proportional to the particle molality (m · i); the solution with the larger particle molality starts to freeze at the lower temperature. I: m = 0.2 / 0.1 = 2 m, i = 2 → 4 m particles. II: m = 0.1 / 0.2 = 0.5 m, i = 3 → 1.5 m. III: m = 0.6 / 0.2 = 3 m, i = 1 → 3 m. Since the particle concentration is I > III > II, the freezing temperatures are I < III < II (with Kd = 1.86 °C·kg/mol: −7.44 °C, −5.58 °C and −2.79 °C). Ignoring i and comparing only molalities gives III < I < II; ignoring the water masses and comparing only i values gives II < I < III; II < III < I is the reverse of the correct order.",
        "de": "Die Gefrierpunktserniedrigung ist der Teilchenmolalität (m · i) proportional; die Lösung mit der größeren Teilchenmolalität beginnt bei der niedrigeren Temperatur zu gefrieren. I: m = 0,2 / 0,1 = 2 m, i = 2 → 4 m Teilchen. II: m = 0,1 / 0,2 = 0,5 m, i = 3 → 1,5 m. III: m = 0,6 / 0,2 = 3 m, i = 1 → 3 m. Da die Teilchenkonzentration I > III > II ist, gilt für die Gefriertemperaturen I < III < II (mit Kd = 1,86 °C·kg/mol: −7,44 °C, −5,58 °C und −2,79 °C). Wer i nicht berücksichtigt und nur die Molalitäten vergleicht, erhält III < I < II; wer die Wassermassen außer Acht lässt und nur die i-Werte vergleicht, II < I < III; II < III < I ist die Umkehrung der richtigen Reihenfolge.",
        "fr": "L'abaissement du point de congélation est proportionnel à la molalité en particules (m · i) ; la solution dont la molalité en particules est la plus grande commence à geler à la température la plus basse. I : m = 0,2 / 0,1 = 2 m, i = 2 → 4 m de particules. II : m = 0,1 / 0,2 = 0,5 m, i = 3 → 1,5 m. III : m = 0,6 / 0,2 = 3 m, i = 1 → 3 m. La concentration en particules étant I > III > II, les températures de début de congélation sont I < III < II (avec Kd = 1,86 °C·kg/mol : −7,44 °C, −5,58 °C et −2,79 °C). Ignorer i et ne comparer que les molalités donne III < I < II ; ignorer les masses d'eau et ne comparer que les valeurs de i donne II < I < III ; II < III < I est l'inverse de l'ordre correct.",
        "ru": "Понижение температуры замерзания пропорционально моляльности частиц (m · i); раствор с большей моляльностью частиц начинает замерзать при более низкой температуре. I: m = 0,2 / 0,1 = 2 m, i = 2 → 4 m частиц. II: m = 0,1 / 0,2 = 0,5 m, i = 3 → 1,5 m. III: m = 0,6 / 0,2 = 3 m, i = 1 → 3 m. Так как концентрация частиц I > III > II, температуры начала замерзания I < III < II (при Kd = 1,86 °C·кг/моль: −7,44 °C, −5,58 °C и −2,79 °C). Если не учитывать i и сравнивать только моляльности, получится III < I < II; если не учитывать массы воды и сравнивать только i — II < I < III; II < III < I — обратный правильному порядок.",
        "ar": "يتناسب الانخفاض في درجة التجمد مع مولالية الجسيمات (m · i)؛ والمحلول ذو مولالية الجسيمات الأكبر يبدأ بالتجمد عند درجة حرارة أدنى. I: m = 0.2 / 0.1 = 2 m وi = 2 → 4 m جسيمات. II: m = 0.1 / 0.2 = 0.5 m وi = 3 → 1.5 m. III: m = 0.6 / 0.2 = 3 m وi = 1 → 3 m. بما أن تركيز الجسيمات I > III > II فإن درجات بدء التجمد هي I < III < II (باستخدام Kf = 1.86 °C·kg/mol: −7.44 °C و−5.58 °C و−2.79 °C). من يهمل i ويقارن المولاليات وحدها يحصل على III < I < II، ومن يهمل كتل الماء ويقارن قيم i وحدها يحصل على II < I < III، أما II < III < I فهو عكس الترتيب الصحيح.",
        "zh": "凝固点降低值与粒子的质量摩尔浓度 (m · i) 成正比；粒子质量摩尔浓度越大，开始凝固的温度越低。I：m = 0.2 / 0.1 = 2 m，i = 2 → 粒子 4 m。II：m = 0.1 / 0.2 = 0.5 m，i = 3 → 1.5 m。III：m = 0.6 / 0.2 = 3 m，i = 1 → 3 m。粒子浓度 I > III > II，所以开始凝固的温度为 I < III < II（取 Kd = 1.86 °C·kg/mol，依次为 −7.44 °C、−5.58 °C、−2.79 °C）。不考虑 i、只比较质量摩尔浓度会得到 III < I < II；不考虑水的质量、只比较 i 会得到 II < I < III；II < III < I 则与正确顺序相反。",
        "ku": "Daketina xala cemidînê bi molalîteya perçeyan (m · i) re rêjeyî ye; çareseriya ku molalîteya wê ya perçeyan mezintir e di germahiya nizmtir de dest bi cemidînê dike. I: m = 0,2 / 0,1 = 2 m, i = 2 → 4 m perçe. II: m = 0,1 / 0,2 = 0,5 m, i = 3 → 1,5 m. III: m = 0,6 / 0,2 = 3 m, i = 1 → 3 m. Ji ber ku tîrbûna perçeyan I > III > II ye, germahiyên destpêka cemidînê I < III < II ne (bi Kd = 1,86 °C·kg/mol bi rêzê −7,44 °C, −5,58 °C û −2,79 °C). Kesê ku i nahesibîne û tenê molalîteyan berhev dike III < I < II, kesê ku girseyên avê nahesibîne û tenê nirxên i berhev dike II < I < III dibîne; II < III < I jî berevajiya rêzkirina rast e."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Çözelti",
            "en": "Solution",
            "de": "Lösung",
            "fr": "Solution",
            "ru": "Раствор",
            "ar": "المحلول",
            "zh": "溶液",
            "ku": "Çareserî"
          },
          {
            "tr": "Çözünen",
            "en": "Solute",
            "de": "Gelöster Stoff",
            "fr": "Soluté",
            "ru": "Растворённое вещество",
            "ar": "المذاب",
            "zh": "溶质",
            "ku": "Madeya helbûyî"
          },
          {
            "tr": "Çözünen (mol)",
            "en": "Solute (mol)",
            "de": "Gelöster Stoff (mol)",
            "fr": "Soluté (mol)",
            "ru": "Растворённое вещество (моль)",
            "ar": "المذاب (mol)",
            "zh": "溶质 (mol)",
            "ku": "Madeya helbûyî (mol)"
          },
          {
            "tr": "Su (g)",
            "en": "Water (g)",
            "de": "Wasser (g)",
            "fr": "Eau (g)",
            "ru": "Вода (г)",
            "ar": "الماء (g)",
            "zh": "水 (g)",
            "ku": "Av (g)"
          }
        ],
        "rows": [
          [
            "I",
            "NaCl",
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
            "100"
          ],
          [
            "II",
            "CaCl2",
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
            "200"
          ],
          [
            "III",
            "C6H12O6",
            {
              "tr": "0,6",
              "en": "0.6",
              "de": "0,6",
              "fr": "0,6",
              "ru": "0,6",
              "ar": "0.6",
              "zh": "0.6",
              "ku": "0,6"
            },
            "200"
          ]
        ]
      }
    },
    {
      "id": "u15-twin02",
      "stem": {
        "tr": "Aşağıdaki 1'er molal sulu çözeltilerden hangisinin 1 atm dış basınçta kaynamaya başlama sıcaklığı en yüksektir?",
        "en": "Which of the following 1 molal aqueous solutions has the highest boiling temperature at 1 atm external pressure?",
        "de": "Welche der folgenden 1 molalen wässrigen Lösungen hat die höchste Siedetemperatur bei 1 atm Außendruck?",
        "fr": "Laquelle des solutions aqueuses 1 molales suivantes a la température d'ébullition la plus élevée à une pression externe de 1 atm ?",
        "ru": "Какой из следующих водных растворов с моляльностью 1 моль/кг начинает кипеть при самой высокой температуре при внешнем давлении 1 атм?",
        "ar": "أيّ المحاليل المائية الآتية، وتركيز كلٍّ منها 1 m، يبدأ بالغليان عند أعلى درجة حرارة تحت ضغط خارجي 1 atm؟",
        "zh": "下列质量摩尔浓度均为 1 mol/kg 的水溶液中，哪一种在 1 atm 外压下开始沸腾的温度最高？",
        "ku": "Ji van çareseriyên avî yên 1 molal, kîjan di zexta derve ya 1 atm de di germahiya herî bilind de dest bi kelînê dike?"
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
          "zh": "葡萄糖(C6H12O6)",
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
        "ru": "Для AlCl3 i = 4 (1 Al3+ + 3 Cl-). Общая концентрация частиц у этого раствора наибольшая (4 моль/кг), поэтому и повышение температуры кипения наибольшее.",
        "ar": "لـ AlCl3 يكون i = 4 (1 Al3+ + 3 Cl-). وبما أن التركيز الكلي للجسيمات هو الأعلى (4 m)، فإن الارتفاع في درجة الغليان هو الأكبر.",
        "zh": "对于 AlCl3，i = 4(1 Al3+ + 3 Cl-)。总粒子浓度最高(4 mol/kg)，因此沸点升高最大。",
        "ku": "Ji bo AlCl3 i = 4 (1 Al3+ + 3 Cl-). Ji ber ku tîrbûna giştî ya perçeyan herî bilind e (4 m), bilindbûna xala kelînê herî mezin e."
      }
    },
    {
      "id": "u15-twin03",
      "stem": {
        "tr": "18 g glikoz (C6H12O6) 200 g saf suda çözülerek hazırlanan çözeltinin 1 atm dış basınçta kaynamaya başlama sıcaklığı kaç °C'dir? (C6H12O6 = 180 g/mol; su için Kk = 0,52 °C*kg/mol)",
        "en": "A solution is prepared by dissolving 18 g of glucose (C6H12O6) in 200 g of pure water. At what temperature, in °C, does it start to boil at an external pressure of 1 atm? (C6H12O6 = 180 g/mol; Kb for water = 0.52 °C*kg/mol)",
        "de": "Eine Lösung wird hergestellt, indem 18 g Glucose (C6H12O6) in 200 g reinem Wasser gelöst werden. Bei welcher Temperatur in °C beginnt sie bei einem äußeren Druck von 1 atm zu sieden? (C6H12O6 = 180 g/mol; Ks für Wasser = 0,52 °C*kg/mol)",
        "fr": "On prépare une solution en dissolvant 18 g de glucose (C6H12O6) dans 200 g d'eau pure. À quelle température, en °C, commence-t-elle à bouillir sous une pression extérieure de 1 atm ? (C6H12O6 = 180 g/mol ; Kéb de l'eau = 0,52 °C*kg/mol)",
        "ru": "Раствор приготовлен растворением 18 г глюкозы (C6H12O6) в 200 г чистой воды. При какой температуре (°C) он начинает кипеть при внешнем давлении 1 атм? (C6H12O6 = 180 г/моль; Kэб воды = 0,52 °C*кг/моль)",
        "ar": "حُضّر محلول بإذابة 18 g من الجلوكوز (C6H12O6) في 200 g من الماء النقي. عند أي درجة حرارة (°C) يبدأ بالغليان تحت ضغط خارجي 1 atm؟ (C6H12O6 = 180 g/mol؛ Kb للماء = 0.52 °C*kg/mol)",
        "zh": "将 18 g 葡萄糖(C6H12O6)溶于 200 g 纯水中配成溶液。在 1 atm 外压下，该溶液开始沸腾的温度是多少 °C？(C6H12O6 = 180 g/mol；水的 Kb = 0.52 °C*kg/mol)",
        "ku": "Çareseriyek bi helandina 18 g glîkozê (C6H12O6) di 200 g ava paqij de tê amadekirin. Ev çareserî di zexta derve ya 1 atm de di çend °C de dest bi kelînê dike? (C6H12O6 = 180 g/mol; ji bo avê Kk = 0,52 °C*kg/mol)"
      },
      "options": [
        {
          "tr": "100,052 °C",
          "en": "100.052 °C",
          "de": "100,052 °C",
          "fr": "100,052 °C",
          "ru": "100,052 °C",
          "ar": "100.052 °C",
          "zh": "100.052 °C",
          "ku": "100,052 °C"
        },
        {
          "tr": "100,13 °C",
          "en": "100.13 °C",
          "de": "100,13 °C",
          "fr": "100,13 °C",
          "ru": "100,13 °C",
          "ar": "100.13 °C",
          "zh": "100.13 °C",
          "ku": "100,13 °C"
        },
        {
          "tr": "100,26 °C",
          "en": "100.26 °C",
          "de": "100,26 °C",
          "fr": "100,26 °C",
          "ru": "100,26 °C",
          "ar": "100.26 °C",
          "zh": "100.26 °C",
          "ku": "100,26 °C"
        },
        {
          "tr": "100,52 °C",
          "en": "100.52 °C",
          "de": "100,52 °C",
          "fr": "100,52 °C",
          "ru": "100,52 °C",
          "ar": "100.52 °C",
          "zh": "100.52 °C",
          "ku": "100,52 °C"
        },
        {
          "tr": "100,93 °C",
          "en": "100.93 °C",
          "de": "100,93 °C",
          "fr": "100,93 °C",
          "ru": "100,93 °C",
          "ar": "100.93 °C",
          "zh": "100.93 °C",
          "ku": "100,93 °C"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "n = 18 / 180 = 0,1 mol. Çözücü 200 g = 0,2 kg olduğundan m = 0,1 / 0,2 = 0,5 m. Glikoz moleküler olduğundan i = 1. ΔTk = Kk * m * i = 0,52 * 0,5 * 1 = 0,26 °C; kaynama sıcaklığı 100 + 0,26 = 100,26 °C. Suyu kg'a çevirmeden 1 kg gibi almak 100,052 °C'yi, glikozu iyonlaşıyor sayıp i = 2 almak 100,52 °C'yi, Kk yerine Kd kullanmak 100,93 °C'yi verir.",
        "en": "n = 18 / 180 = 0.1 mol. The solvent is 200 g = 0.2 kg, so m = 0.1 / 0.2 = 0.5 m. Glucose is molecular, so i = 1. ΔTb = Kb * m * i = 0.52 * 0.5 * 1 = 0.26 °C; boiling temperature = 100 + 0.26 = 100.26 °C. Taking the water as 1 kg without converting gives 100.052 °C, treating glucose as ionizing (i = 2) gives 100.52 °C, and using Kf instead of Kb gives 100.93 °C.",
        "de": "n = 18 / 180 = 0,1 mol. Das Lösungsmittel wiegt 200 g = 0,2 kg, also m = 0,1 / 0,2 = 0,5 m. Glucose ist molekular, daher i = 1. ΔTs = Ks * m * i = 0,52 * 0,5 * 1 = 0,26 °C; Siedetemperatur = 100 + 0,26 = 100,26 °C. Das Wasser ohne Umrechnung als 1 kg zu nehmen ergibt 100,052 °C, Glucose als dissoziierend (i = 2) zu behandeln ergibt 100,52 °C, Kg statt Ks zu verwenden ergibt 100,93 °C.",
        "fr": "n = 18 / 180 = 0,1 mol. Le solvant pèse 200 g = 0,2 kg, donc m = 0,1 / 0,2 = 0,5 m. Le glucose est moléculaire, donc i = 1. ΔTéb = Kéb * m * i = 0,52 * 0,5 * 1 = 0,26 °C ; température d'ébullition = 100 + 0,26 = 100,26 °C. Prendre l'eau comme 1 kg sans conversion donne 100,052 °C, considérer le glucose comme ionisé (i = 2) donne 100,52 °C, et utiliser Kcong au lieu de Kéb donne 100,93 °C.",
        "ru": "n = 18 / 180 = 0,1 моль. Масса растворителя 200 г = 0,2 кг, поэтому m = 0,1 / 0,2 = 0,5 моль/кг. Глюкоза — молекулярное вещество, i = 1. ΔTкип = Kэб * m * i = 0,52 * 0,5 * 1 = 0,26 °C; температура кипения = 100 + 0,26 = 100,26 °C. Если не перевести массу воды в килограммы и взять её за 1 кг, получится 100,052 °C; если считать глюкозу диссоциирующей (i = 2) — 100,52 °C; если взять Kкр вместо Kэб — 100,93 °C.",
        "ar": "n = 18 / 180 = 0.1 mol. المذيب 200 g = 0.2 kg، إذن m = 0.1 / 0.2 = 0.5 m. الجلوكوز مادة جزيئية، لذا i = 1. ΔTb = Kb * m * i = 0.52 * 0.5 * 1 = 0.26 °C؛ درجة الغليان = 100 + 0.26 = 100.26 °C. أخذ الماء على أنه 1 kg دون تحويل يعطي 100.052 °C، واعتبار الجلوكوز متأينًا (i = 2) يعطي 100.52 °C، واستخدام Kf بدل Kb يعطي 100.93 °C.",
        "zh": "n = 18 / 180 = 0.1 mol。溶剂 200 g = 0.2 kg，所以 m = 0.1 / 0.2 = 0.5 mol/kg。葡萄糖是分子型物质，i = 1。ΔTb = Kb * m * i = 0.52 * 0.5 * 1 = 0.26 °C；沸点 = 100 + 0.26 = 100.26 °C。若不把水的质量换算成 kg 而按 1 kg 计算，得 100.052 °C；若把葡萄糖当作电离(i = 2)，得 100.52 °C；若误用 Kf 代替 Kb，得 100.93 °C。",
        "ku": "n = 18 / 180 = 0,1 mol. Helker 200 g = 0,2 kg e, ji ber vê yekê m = 0,1 / 0,2 = 0,5 m. Glîkoz molekulî ye, loma i = 1. ΔTk = Kk * m * i = 0,52 * 0,5 * 1 = 0,26 °C; germahiya kelînê 100 + 0,26 = 100,26 °C. Girtina avê wek 1 kg bêyî veguhertinê 100,052 °C, hesibandina glîkozê wek îyonîzebûyî (i = 2) 100,52 °C, bikaranîna Kd li şûna Kk jî 100,93 °C dide."
      }
    },
    {
      "id": "u15-twin04",
      "stem": {
        "tr": "Saf suda bir miktar NaCl çözülerek hazırlanan çözelti, aynı dış basınçta saf suyla karşılaştırılıyor. Çözelti için aşağıdaki yargılardan hangileri doğrudur? I. Kaynamaya başlama sıcaklığı daha yüksektir. II. Kaynama süresince sıcaklığı sabit kalır. III. Aynı sıcaklıktaki buhar basıncı daha düşüktür.",
        "en": "A solution prepared by dissolving some NaCl in pure water is compared with pure water at the same external pressure. Which of the following statements about the solution are correct? I. It starts to boil at a higher temperature. II. Its temperature stays constant while it boils. III. Its vapor pressure at the same temperature is lower.",
        "de": "Eine Lösung aus etwas NaCl in reinem Wasser wird bei gleichem äußeren Druck mit reinem Wasser verglichen. Welche der folgenden Aussagen über die Lösung sind richtig? I. Sie beginnt bei höherer Temperatur zu sieden. II. Ihre Temperatur bleibt während des Siedens konstant. III. Ihr Dampfdruck ist bei gleicher Temperatur niedriger.",
        "fr": "Une solution obtenue en dissolvant un peu de NaCl dans de l'eau pure est comparée à l'eau pure sous la même pression extérieure. Lesquelles des affirmations suivantes sur la solution sont correctes ? I. Elle commence à bouillir à une température plus élevée. II. Sa température reste constante pendant l'ébullition. III. Sa pression de vapeur à la même température est plus faible.",
        "ru": "Раствор, приготовленный растворением некоторого количества NaCl в чистой воде, сравнивают с чистой водой при одинаковом внешнем давлении. Какие из утверждений о растворе верны? I. Он начинает кипеть при более высокой температуре. II. Во время кипения его температура остаётся постоянной. III. Давление его пара при той же температуре ниже.",
        "ar": "يُقارن محلول حُضّر بإذابة كمية من NaCl في الماء النقي بالماء النقي عند الضغط الخارجي نفسه. أي العبارات الآتية عن المحلول صحيحة؟ I. يبدأ بالغليان عند درجة حرارة أعلى. II. تبقى درجة حرارته ثابتة أثناء الغليان. III. ضغط بخاره عند درجة الحرارة نفسها أقل.",
        "zh": "将一定量 NaCl 溶于纯水配成溶液，在相同外压下与纯水比较。关于该溶液，有下列说法：I. 开始沸腾的温度更高。II. 沸腾过程中温度保持不变。III. 同一温度下其蒸气压更低。其中正确的是哪些？",
        "ku": "Çareseriyeke ku bi helandina hinek NaCl di ava paqij de hatiye amadekirin, di heman zexta derve de bi ava paqij re tê berhevdan. Kîjan ji van gotinan ji bo çareseriyê rast in? I. Di germahiyeke bilindtir de dest bi kelînê dike. II. Di dema kelînê de germahiya wê sabît dimîne. III. Di heman germahiyê de zexta wê ya buharê nizmtir e."
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
      "correctIndex": 3,
      "explanation": {
        "tr": "I doğrudur: çözünen tanecikler kaynama noktasını yükseltir. II yanlıştır: kaynadıkça su buharlaşır, çözelti derişikleşir ve kaynama sıcaklığı giderek yükselir; sabit sıcaklıkta kaynamak saf maddelere özgüdür. III doğrudur: çözünen, çözücünün mol kesrini azalttığından aynı sıcaklıkta buhar basıncı saf sudakinden düşüktür.",
        "en": "I is correct: dissolved particles raise the boiling point. II is wrong: as it boils, water evaporates, the solution becomes more concentrated and its boiling temperature keeps rising; boiling at constant temperature is characteristic of pure substances. III is correct: the solute lowers the mole fraction of the solvent, so the vapor pressure is lower than that of pure water at the same temperature.",
        "de": "I ist richtig: gelöste Teilchen erhöhen den Siedepunkt. II ist falsch: beim Sieden verdampft Wasser, die Lösung wird konzentrierter und die Siedetemperatur steigt laufend; Sieden bei konstanter Temperatur ist typisch für Reinstoffe. III ist richtig: der gelöste Stoff senkt den Stoffmengenanteil des Lösungsmittels, daher ist der Dampfdruck bei gleicher Temperatur niedriger als bei reinem Wasser.",
        "fr": "I est correcte : les particules dissoutes élèvent le point d'ébullition. II est fausse : pendant l'ébullition l'eau s'évapore, la solution se concentre et sa température d'ébullition augmente progressivement ; bouillir à température constante est propre aux corps purs. III est correcte : le soluté abaisse la fraction molaire du solvant, donc la pression de vapeur est plus faible que celle de l'eau pure à la même température.",
        "ru": "I верно: растворённые частицы повышают температуру кипения. II неверно: при кипении вода испаряется, раствор становится концентрированнее, и температура кипения постепенно растёт; кипение при постоянной температуре характерно для чистых веществ. III верно: растворённое вещество уменьшает мольную долю растворителя, поэтому давление пара ниже, чем у чистой воды при той же температуре.",
        "ar": "I صحيحة: جسيمات المذاب ترفع درجة الغليان. II خاطئة: أثناء الغليان يتبخر الماء فيزداد تركيز المحلول وترتفع درجة غليانه تدريجيًا؛ والغليان عند درجة حرارة ثابتة صفة للمواد النقية. III صحيحة: المذاب يخفض الكسر المولي للمذيب، فيكون ضغط البخار أقل من ضغط بخار الماء النقي عند درجة الحرارة نفسها.",
        "zh": "I 正确：溶质粒子使沸点升高。II 错误：沸腾时水不断蒸发，溶液变浓，沸腾温度逐渐升高；在恒定温度下沸腾是纯物质的特征。III 正确：溶质降低了溶剂的物质的量分数，所以同温下蒸气压低于纯水。",
        "ku": "I rast e: perçeyên helbûyî xala kelînê bilind dikin. II şaş e: dema dikele av dibe buhar, çareserî tîrtir dibe û germahiya kelînê hêdî hêdî bilind dibe; kelîna di germahiya sabît de taybetmendiya madeyên paqij e. III rast e: madeya helbûyî kerta molî ya helker kêm dike, ji ber vê yekê di heman germahiyê de zexta buharê ji ya ava paqij nizmtir e."
      }
    },
    {
      "id": "u15-twin05",
      "stem": {
        "tr": "Aynı dış basınçta bulunan I. 0,2 molal C6H12O6, II. 0,1 molal NaCl, III. 0,1 molal CaCl2 sulu çözeltilerinin kaynamaya başlama sıcaklıklarının karşılaştırılması aşağıdakilerden hangisinde doğru verilmiştir? (Tuzların tamamen iyonlaştığı kabul edilecektir.)",
        "en": "Which of the following correctly compares the temperatures at which the aqueous solutions I. 0.2 molal C6H12O6, II. 0.1 molal NaCl and III. 0.1 molal CaCl2 start to boil at the same external pressure? (Assume the salts dissociate completely.)",
        "de": "Welche Angabe vergleicht die Siedebeginntemperaturen der wässrigen Lösungen I. 0,2 molal C6H12O6, II. 0,1 molal NaCl und III. 0,1 molal CaCl2 bei gleichem äußeren Druck richtig? (Vollständige Dissoziation der Salze wird angenommen.)",
        "fr": "Laquelle des propositions suivantes compare correctement les températures de début d'ébullition des solutions aqueuses I. C6H12O6 0,2 molal, II. NaCl 0,1 molal et III. CaCl2 0,1 molal sous la même pression extérieure ? (On suppose les sels totalement dissociés.)",
        "ru": "В каком варианте правильно сравнены температуры начала кипения водных растворов I. 0,2 моль/кг C6H12O6, II. 0,1 моль/кг NaCl, III. 0,1 моль/кг CaCl2 при одинаковом внешнем давлении? (Соли считать полностью диссоциированными.)",
        "ar": "أيّ مما يلي يقارن مقارنةً صحيحة بين درجات بدء الغليان للمحاليل المائية I. C6H12O6 بتركيز 0.2 m، II. NaCl بتركيز 0.1 m، III. CaCl2 بتركيز 0.1 m عند الضغط الخارجي نفسه؟ (يُفترض تفكك الأملاح تفككًا كاملًا.)",
        "zh": "在相同外压下，水溶液 I. 0.2 mol/kg C6H12O6、II. 0.1 mol/kg NaCl、III. 0.1 mol/kg CaCl2 开始沸腾的温度比较正确的是哪一项？（假定盐完全电离。）",
        "ku": "Di heman zexta derve de, berhevdana germahiyên destpêka kelînê yên çareseriyên avî I. C6H12O6 ya 0,2 molal, II. NaCl ya 0,1 molal, III. CaCl2 ya 0,1 molal di kîjan vebijarkê de rast hatiye dayîn? (Tê qebûlkirin ku xwê bi tevahî îyonîze dibin.)"
      },
      "options": [
        {
          "tr": "I < II < III",
          "en": "I < II < III",
          "de": "I < II < III",
          "fr": "I < II < III",
          "ru": "I < II < III",
          "ar": "I < II < III",
          "zh": "I < II < III",
          "ku": "I < II < III"
        },
        {
          "tr": "I = II < III",
          "en": "I = II < III",
          "de": "I = II < III",
          "fr": "I = II < III",
          "ru": "I = II < III",
          "ar": "I = II < III",
          "zh": "I = II < III",
          "ku": "I = II < III"
        },
        {
          "tr": "III < I = II",
          "en": "III < I = II",
          "de": "III < I = II",
          "fr": "III < I = II",
          "ru": "III < I = II",
          "ar": "III < I = II",
          "zh": "III < I = II",
          "ku": "III < I = II"
        },
        {
          "tr": "II < I < III",
          "en": "II < I < III",
          "de": "II < I < III",
          "fr": "II < I < III",
          "ru": "II < I < III",
          "ar": "II < I < III",
          "zh": "II < I < III",
          "ku": "II < I < III"
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
      "correctIndex": 1,
      "explanation": {
        "tr": "Tanecik molalitesi = m * i: I için 0,2 * 1 = 0,2; II için 0,1 * 2 = 0,2; III için 0,1 * 3 = 0,3. Kaynama noktası yükselmesi tanecik derişimiyle orantılı olduğundan sıralama I = II < III olur. Yalnızca molaliteye bakılırsa glikoz çözeltisi en yüksek sanılır; i hesaba katılmazsa iki tuz çözeltisi eşit sanılır.",
        "en": "Particle molality = m * i: I: 0.2 * 1 = 0.2; II: 0.1 * 2 = 0.2; III: 0.1 * 3 = 0.3. Since boiling point elevation is proportional to particle concentration, the order is I = II < III. Looking only at molality makes the glucose solution seem highest; ignoring i makes the two salt solutions seem equal.",
        "de": "Teilchenmolalität = m * i: I: 0,2 * 1 = 0,2; II: 0,1 * 2 = 0,2; III: 0,1 * 3 = 0,3. Da die Siedepunkterhöhung proportional zur Teilchenkonzentration ist, gilt I = II < III. Wer nur die Molalität betrachtet, hält die Glucoselösung für die höchste; wer i vergisst, hält die beiden Salzlösungen für gleich.",
        "fr": "Molalité en particules = m * i : I : 0,2 * 1 = 0,2 ; II : 0,1 * 2 = 0,2 ; III : 0,1 * 3 = 0,3. L'élévation ébullioscopique étant proportionnelle à la concentration en particules, l'ordre est I = II < III. En ne regardant que la molalité, on croit la solution de glucose la plus élevée ; en oubliant i, on croit les deux solutions salines égales.",
        "ru": "Моляльность частиц = m * i: I: 0,2 * 1 = 0,2; II: 0,1 * 2 = 0,2; III: 0,1 * 3 = 0,3. Повышение температуры кипения пропорционально концентрации частиц, поэтому I = II < III. Если смотреть только на моляльность, самой высокой покажется температура кипения раствора глюкозы; если не учесть i, растворы двух солей покажутся одинаковыми.",
        "ar": "مولالية الجسيمات = m * i: I: 0.2 * 1 = 0.2؛ II: 0.1 * 2 = 0.2؛ III: 0.1 * 3 = 0.3. وبما أن الارتفاع في درجة الغليان يتناسب مع تركيز الجسيمات، يكون الترتيب I = II < III. النظر إلى المولالية وحدها يوهم بأن محلول الجلوكوز هو الأعلى، وإهمال i يوهم بتساوي محلولي الملحين.",
        "zh": "粒子质量摩尔浓度 = m * i：I：0.2 * 1 = 0.2；II：0.1 * 2 = 0.2；III：0.1 * 3 = 0.3。沸点升高与粒子浓度成正比，所以顺序为 I = II < III。只看质量摩尔浓度会误以为葡萄糖溶液最高；忽略 i 会误以为两种盐溶液相等。",
        "ku": "Molalîteya perçeyan = m * i: I: 0,2 * 1 = 0,2; II: 0,1 * 2 = 0,2; III: 0,1 * 3 = 0,3. Ji ber ku bilindbûna xala kelînê bi tîrbûna perçeyan re rêjeyî ye, rêz I = II < III e. Ger tenê li molalîteyê were nêrîn, çareseriya glîkozê ya herî bilind tê hesibandin; ger i neyê hesibandin, her du çareseriyên xwêyê wekhev tên hesibandin."
      }
    },
    {
      "id": "u15-twin06",
      "stem": {
        "tr": "0,2 mol X maddesi 500 g suda tamamen çözülüyor. Oluşan çözeltinin 1 atm'de donmaya başlama sıcaklığı -2,232 °C olarak ölçülüyor. X aşağıdakilerden hangisi olabilir? (Su için Kd = 1,86 °C*kg/mol; iyonik bileşiklerin tamamen iyonlaştığı kabul edilecektir.)",
        "en": "0.2 mol of substance X dissolves completely in 500 g of water. The resulting solution starts to freeze at -2.232 °C at 1 atm. Which of the following could X be? (Kf for water = 1.86 °C*kg/mol; assume ionic compounds dissociate completely.)",
        "de": "0,2 mol des Stoffes X lösen sich vollständig in 500 g Wasser. Die entstandene Lösung beginnt bei 1 atm bei -2,232 °C zu gefrieren. Welcher der folgenden Stoffe könnte X sein? (Kg für Wasser = 1,86 °C*kg/mol; vollständige Dissoziation ionischer Verbindungen wird angenommen.)",
        "fr": "0,2 mol d'une substance X se dissolvent complètement dans 500 g d'eau. La solution obtenue commence à geler à -2,232 °C sous 1 atm. Laquelle des substances suivantes peut être X ? (Kcong de l'eau = 1,86 °C*kg/mol ; on suppose les composés ioniques totalement dissociés.)",
        "ru": "0,2 моль вещества X полностью растворили в 500 г воды. Полученный раствор начинает замерзать при -2,232 °C (1 атм). Каким из перечисленных веществ может быть X? (Для воды Kкр = 1,86 °C*кг/моль; ионные соединения считать полностью диссоциированными.)",
        "ar": "أُذيب 0.2 mol من المادة X إذابة تامة في 500 g من الماء. يبدأ المحلول الناتج بالتجمد عند -2.232 °C تحت 1 atm. أيّ مما يلي يمكن أن يكون X؟ (Kf للماء = 1.86 °C*kg/mol؛ يُفترض تفكك المركبات الأيونية تفككًا كاملًا.)",
        "zh": "0.2 mol 物质 X 完全溶于 500 g 水中。所得溶液在 1 atm 下于 -2.232 °C 开始凝固。X 可能是下列哪种物质？(水的 Kf = 1.86 °C*kg/mol；假定离子化合物完全电离。)",
        "ku": "0,2 mol ji madeya X bi tevahî di 500 g avê de dihele. Çareseriya çêbûyî di 1 atm de di -2,232 °C de dest bi cemidînê dike. X dikare kîjan ji van be? (Ji bo avê Kd = 1,86 °C*kg/mol; tê qebûlkirin ku pêkhateyên îyonîk bi tevahî îyonîze dibin.)"
      },
      "options": [
        {
          "tr": "C6H12O6",
          "en": "C6H12O6",
          "de": "C6H12O6",
          "fr": "C6H12O6",
          "ru": "C6H12O6",
          "ar": "C6H12O6",
          "zh": "C6H12O6",
          "ku": "C6H12O6"
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
          "tr": "K3PO4",
          "en": "K3PO4",
          "de": "K3PO4",
          "fr": "K3PO4",
          "ru": "K3PO4",
          "ar": "K3PO4",
          "zh": "K3PO4",
          "ku": "K3PO4"
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
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "m = 0,2 / 0,5 = 0,4 m. ΔTd = 0 - (-2,232) = 2,232 °C. i = ΔTd / (Kd * m) = 2,232 / (1,86 * 0,4) = 3. Bir formül biriminden 3 iyon veren madde CaCl2'dir (Ca2+ + 2 Cl-). Glikozda i = 1, NaCl'de i = 2, AlCl3 ve K3PO4'te ise i = 4'tür.",
        "en": "m = 0.2 / 0.5 = 0.4 m. ΔTf = 0 - (-2.232) = 2.232 °C. i = ΔTf / (Kf * m) = 2.232 / (1.86 * 0.4) = 3. The substance giving 3 ions per formula unit is CaCl2 (Ca2+ + 2 Cl-). For glucose i = 1, for NaCl i = 2, and for AlCl3 and K3PO4 i = 4.",
        "de": "m = 0,2 / 0,5 = 0,4 m. ΔTg = 0 - (-2,232) = 2,232 °C. i = ΔTg / (Kg * m) = 2,232 / (1,86 * 0,4) = 3. Der Stoff, der pro Formeleinheit 3 Ionen bildet, ist CaCl2 (Ca2+ + 2 Cl-). Für Glucose ist i = 1, für NaCl i = 2, für AlCl3 und K3PO4 i = 4.",
        "fr": "m = 0,2 / 0,5 = 0,4 m. ΔTcong = 0 - (-2,232) = 2,232 °C. i = ΔTcong / (Kcong * m) = 2,232 / (1,86 * 0,4) = 3. La substance qui donne 3 ions par unité formulaire est CaCl2 (Ca2+ + 2 Cl-). Pour le glucose i = 1, pour NaCl i = 2, pour AlCl3 et K3PO4 i = 4.",
        "ru": "m = 0,2 / 0,5 = 0,4 моль/кг. ΔTзам = 0 - (-2,232) = 2,232 °C. i = ΔTзам / (Kкр * m) = 2,232 / (1,86 * 0,4) = 3. Три иона на одну формульную единицу даёт CaCl2 (Ca2+ + 2 Cl-). Для глюкозы i = 1, для NaCl i = 2, для AlCl3 и K3PO4 i = 4.",
        "ar": "m = 0.2 / 0.5 = 0.4 m. ΔTf = 0 - (-2.232) = 2.232 °C. i = ΔTf / (Kf * m) = 2.232 / (1.86 * 0.4) = 3. المادة التي تعطي 3 أيونات لكل وحدة صيغة هي CaCl2 (Ca2+ + 2 Cl-). للجلوكوز i = 1، ولـ NaCl i = 2، ولكل من AlCl3 و K3PO4 i = 4.",
        "zh": "m = 0.2 / 0.5 = 0.4 mol/kg。ΔTf = 0 - (-2.232) = 2.232 °C。i = ΔTf / (Kf * m) = 2.232 / (1.86 * 0.4) = 3。每个化学式单位电离出 3 个离子的是 CaCl2(Ca2+ + 2 Cl-)。葡萄糖 i = 1，NaCl i = 2，AlCl3 和 K3PO4 的 i = 4。",
        "ku": "m = 0,2 / 0,5 = 0,4 m. ΔTd = 0 - (-2,232) = 2,232 °C. i = ΔTd / (Kd * m) = 2,232 / (1,86 * 0,4) = 3. Madeya ku ji yek yekeya formulê 3 îyon dide CaCl2 ye (Ca2+ + 2 Cl-). Ji bo glukozê i = 1, ji bo NaCl i = 2, ji bo AlCl3 û K3PO4 i = 4 e."
      }
    },
    {
      "id": "u15-twin07",
      "stem": {
        "tr": "Şekilde X tuzunun sudaki çözünürlüğünün sıcaklıkla değişimi verilmiştir. 60 °C'de hazırlanan 360 g doygun X çözeltisi 20 °C'ye soğutulduğunda kaç gram X katısı kristallenir? (Suyun buharlaşmadığı kabul edilecektir.)",
        "en": "The graph shows how the solubility of salt X in water changes with temperature. When 360 g of saturated X solution prepared at 60 °C is cooled to 20 °C, how many grams of solid X crystallize? (Assume no water evaporates.)",
        "de": "Das Diagramm zeigt die Löslichkeit des Salzes X in Wasser in Abhängigkeit von der Temperatur. Wie viel Gramm festes X kristallisieren aus, wenn 360 g einer bei 60 °C gesättigten X-Lösung auf 20 °C abgekühlt werden? (Es verdunstet kein Wasser.)",
        "fr": "Le graphique montre la variation de la solubilité du sel X dans l'eau en fonction de la température. Lorsqu'on refroidit à 20 °C 360 g d'une solution de X saturée à 60 °C, combien de grammes de X solide cristallisent ? (On admet qu'aucune eau ne s'évapore.)",
        "ru": "На графике показана зависимость растворимости соли X в воде от температуры. Сколько граммов твёрдого X выкристаллизуется, если 360 г насыщенного при 60 °C раствора X охладить до 20 °C? (Вода не испаряется.)",
        "ar": "يبيّن الرسم البياني في الشكل تغيّر ذائبية الملح X في الماء مع درجة الحرارة. عند تبريد 360 g من محلول X مشبع محضَّر عند 60 °C إلى 20 °C، كم غرامًا من X الصلب يتبلور؟ (يُفترض أن الماء لا يتبخر.)",
        "zh": "图示为盐 X 在水中的溶解度随温度的变化。将 60 °C 时配制的 360 g X 的饱和溶液冷却到 20 °C，析出固体 X 多少克？（水不蒸发。）",
        "ku": "Di şiklê de guherîna helbûniya xwêya X di avê de li gorî germahiyê hatiye dayîn. Dema ku 360 g çareseriya têr a X ya di 60 °C de hatiye amadekirin heta 20 °C tê sarkirin, çend gram X ya hişk krîstal dibe? (Tê qebûlkirin ku av nabe buhar.)"
      },
      "options": [
        {
          "tr": "30 g",
          "en": "30 g",
          "de": "30 g",
          "fr": "30 g",
          "ru": "30 г",
          "ar": "30 g",
          "zh": "30 g",
          "ku": "30 g"
        },
        {
          "tr": "50 g",
          "en": "50 g",
          "de": "50 g",
          "fr": "50 g",
          "ru": "50 г",
          "ar": "50 g",
          "zh": "50 g",
          "ku": "50 g"
        },
        {
          "tr": "60 g",
          "en": "60 g",
          "de": "60 g",
          "fr": "60 g",
          "ru": "60 г",
          "ar": "60 g",
          "zh": "60 g",
          "ku": "60 g"
        },
        {
          "tr": "100 g",
          "en": "100 g",
          "de": "100 g",
          "fr": "100 g",
          "ru": "100 г",
          "ar": "100 g",
          "zh": "100 g",
          "ku": "100 g"
        },
        {
          "tr": "160 g",
          "en": "160 g",
          "de": "160 g",
          "fr": "160 g",
          "ru": "160 г",
          "ar": "160 g",
          "zh": "160 g",
          "ku": "160 g"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Grafikten X'in çözünürlüğü 20 °C'de 30 g, 60 °C'de 80 g/100 g su olarak okunur. 60 °C'de 100 g su + 80 g X = 180 g doygun çözelti. 360 g çözelti bunun 2 katıdır: 200 g su ve 160 g X içerir. 20 °C'de 200 g su en fazla 2 * 30 = 60 g X çözebilir. Kristallenen X = 160 - 60 = 100 g. Yalnızca çözünürlük farkını (80 - 30 = 50 g) almak, çözeltide 100 g değil 200 g su bulunduğunu atlamaktır; 60 g ise çökeni değil çözeltide kalanı verir.",
        "en": "From the graph, the solubility of X is 30 g at 20 °C and 80 g at 60 °C per 100 g of water. At 60 °C, 100 g water + 80 g X = 180 g saturated solution. 360 g of solution is twice this: it contains 200 g water and 160 g X. At 20 °C, 200 g water can dissolve at most 2 * 30 = 60 g X. X crystallized = 160 - 60 = 100 g. Taking only the solubility difference (80 - 30 = 50 g) ignores that the solution contains 200 g of water, not 100 g; 60 g is the amount that stays dissolved, not the amount that precipitates.",
        "de": "Aus dem Diagramm: Die Löslichkeit von X beträgt bei 20 °C 30 g und bei 60 °C 80 g pro 100 g Wasser. Bei 60 °C: 100 g Wasser + 80 g X = 180 g gesättigte Lösung. 360 g Lösung sind das Doppelte: 200 g Wasser und 160 g X. Bei 20 °C lösen 200 g Wasser höchstens 2 * 30 = 60 g X. Auskristallisiertes X = 160 - 60 = 100 g. Nur die Löslichkeitsdifferenz (80 - 30 = 50 g) zu nehmen übersieht, dass die Lösung 200 g und nicht 100 g Wasser enthält; 60 g ist die gelöst bleibende Menge, nicht die ausfallende.",
        "fr": "D'après le graphique, la solubilité de X est de 30 g à 20 °C et de 80 g à 60 °C pour 100 g d'eau. À 60 °C : 100 g d'eau + 80 g de X = 180 g de solution saturée. 360 g de solution en sont le double : 200 g d'eau et 160 g de X. À 20 °C, 200 g d'eau dissolvent au maximum 2 * 30 = 60 g de X. X cristallisé = 160 - 60 = 100 g. Prendre seulement la différence de solubilité (80 - 30 = 50 g) oublie que la solution contient 200 g d'eau et non 100 g ; 60 g est la quantité restée dissoute, pas celle qui précipite.",
        "ru": "По графику растворимость X равна 30 г при 20 °C и 80 г при 60 °C на 100 г воды. При 60 °C: 100 г воды + 80 г X = 180 г насыщенного раствора. 360 г раствора — вдвое больше: в нём 200 г воды и 160 г X. При 20 °C 200 г воды растворяют не более 2 * 30 = 60 г X. Выкристаллизуется 160 - 60 = 100 г X. Если взять только разность растворимостей (80 - 30 = 50 г), упускается, что в растворе 200 г воды, а не 100 г; 60 г — это масса X, оставшегося в растворе, а не выпавшего.",
        "ar": "يُقرأ من الرسم أن ذائبية X هي 30 g عند 20 °C و80 g عند 60 °C لكل 100 g ماء. عند 60 °C: 100 g ماء + 80 g من X = 180 g محلول مشبع. و360 g من المحلول ضعف ذلك: 200 g ماء و160 g من X. عند 20 °C يذيب 200 g من الماء على الأكثر 2 * 30 = 60 g من X. الكمية المتبلورة = 160 - 60 = 100 g. أخذ فرق الذائبية فقط (80 - 30 = 50 g) يهمل أن المحلول يحتوي 200 g من الماء لا 100 g؛ و60 g هي الكمية الباقية ذائبة لا المترسبة.",
        "zh": "由图可知，X 的溶解度在 20 °C 时为 30 g，在 60 °C 时为 80 g（每 100 g 水）。60 °C 时：100 g 水 + 80 g X = 180 g 饱和溶液。360 g 溶液是它的 2 倍：含 200 g 水和 160 g X。20 °C 时 200 g 水最多溶解 2 * 30 = 60 g X。析出 X = 160 - 60 = 100 g。只取溶解度之差(80 - 30 = 50 g)忽略了溶液中有 200 g 水而不是 100 g；60 g 是仍溶解的量，而不是析出的量。",
        "ku": "Ji grafîkê tê xwendin ku helbûniya X di 20 °C de 30 g, di 60 °C de 80 g/100 g av e. Li 60 °C: 100 g av + 80 g X = 180 g çareseriya têr. 360 g çareserî du qatê vê ye: 200 g av û 160 g X tê de hene. Li 20 °C 200 g av herî zêde 2 * 30 = 60 g X dihelîne. X ya krîstalbûyî = 160 - 60 = 100 g. Girtina tenê cudahiya helbûniyê (80 - 30 = 50 g) wê yekê ji bîr dike ku di çareseriyê de ne 100 g, lê 200 g av heye; 60 g jî ne mîqdara ku dinişe, lê ya ku di çareseriyê de dimîne ye."
      },
      "figure": {
        "kind": "graph",
        "xLabel": {
          "tr": "Sıcaklık (°C)",
          "en": "Temperature (°C)",
          "de": "Temperatur (°C)",
          "fr": "Température (°C)",
          "ru": "Температура (°C)",
          "ar": "درجة الحرارة (°C)",
          "zh": "温度 (°C)",
          "ku": "Germahî (°C)"
        },
        "yLabel": {
          "tr": "Çözünürlük (g/100 g su)",
          "en": "Solubility (g/100 g water)",
          "de": "Löslichkeit (g/100 g Wasser)",
          "fr": "Solubilité (g/100 g d'eau)",
          "ru": "Растворимость (г/100 г воды)",
          "ar": "الذائبية (g/100 g ماء)",
          "zh": "溶解度 (g/100 g 水)",
          "ku": "Helbûnî (g/100 g av)"
        },
        "xMax": 90,
        "yMax": 120,
        "xTicks": [
          20,
          40,
          60,
          80
        ],
        "yTicks": [
          30,
          80
        ],
        "series": [
          {
            "points": [
              [
                0,
                12
              ],
              [
                10,
                20
              ],
              [
                20,
                30
              ],
              [
                30,
                40.5
              ],
              [
                40,
                52
              ],
              [
                50,
                65.5
              ],
              [
                60,
                80
              ],
              [
                70,
                95.5
              ],
              [
                80,
                112
              ]
            ],
            "label": "X"
          }
        ],
        "markers": [
          {
            "x": 20,
            "y": 30,
            "label": "",
            "guides": true
          },
          {
            "x": 60,
            "y": 80,
            "label": "",
            "guides": true
          }
        ]
      }
    },
    {
      "id": "u15-twin08",
      "stem": {
        "tr": "Bir termik santralin soğutma suyu ısınmış olarak bir göle verilmektedir. Bir süre sonra göldeki balıkların su yüzeyine yakın yüzdüğü ve bir kısmının öldüğü gözleniyor. Bu durumun temel nedeni aşağıdakilerden hangisidir?",
        "en": "The cooling water of a thermal power plant is discharged warm into a lake. After a while, the fish in the lake are seen swimming near the surface and some of them die. Which of the following is the main reason?",
        "de": "Das Kühlwasser eines Wärmekraftwerks wird erwärmt in einen See geleitet. Nach einiger Zeit schwimmen die Fische nahe der Oberfläche, und einige sterben. Was ist der Hauptgrund dafür?",
        "fr": "L'eau de refroidissement d'une centrale thermique est rejetée tiède dans un lac. Au bout d'un certain temps, on observe que les poissons nagent près de la surface et que certains meurent. Quelle est la cause principale ?",
        "ru": "Нагретую охлаждающую воду тепловой электростанции сбрасывают в озеро. Через некоторое время замечают, что рыбы плавают у самой поверхности, а часть из них погибает. Какова основная причина этого явления?",
        "ar": "تُصرَّف مياه التبريد لمحطة حرارية وهي دافئة إلى بحيرة. وبعد مدة يُلاحظ أن الأسماك تسبح قرب سطح الماء وأن بعضها يموت. ما السبب الرئيسي لذلك؟",
        "zh": "某火力发电厂的冷却水升温后排入湖中。一段时间后发现湖中的鱼浮在水面附近游动，部分死亡。其主要原因是下列哪一项？",
        "ku": "Ava sarkirinê ya santraleke termîk, germbûyî, tê berdan nav golekê. Piştî demekê tê dîtin ku masiyên golê nêzîkî rûyê avê avjenî dikin û hinek ji wan dimirin. Sedema bingehîn a vê rewşê kîjan e?"
      },
      "options": [
        {
          "tr": "Sıcaklık arttıkça O2'nin sudaki çözünürlüğü azalır ve suda çözünmüş O2 miktarı düşer.",
          "en": "As temperature rises, the solubility of O2 in water decreases and the amount of dissolved O2 drops.",
          "de": "Mit steigender Temperatur nimmt die Löslichkeit von O2 in Wasser ab, und die Menge an gelöstem O2 sinkt.",
          "fr": "Quand la température augmente, la solubilité de O2 dans l'eau diminue et la quantité de O2 dissous baisse.",
          "ru": "С ростом температуры растворимость O2 в воде уменьшается, и содержание растворённого O2 падает.",
          "ar": "بارتفاع درجة الحرارة تقل ذائبية O2 في الماء وتنخفض كمية O2 الذائب.",
          "zh": "温度升高时 O2 在水中的溶解度减小，水中溶解的 O2 减少。",
          "ku": "Her ku germahî bilind dibe, helbûniya O2 di avê de kêm dibe û mîqdara O2 ya helbûyî dadikeve."
        },
        {
          "tr": "O2'nin suda çözünmesi endotermik olduğundan ılık suda O2 kabarcıklar hâlinde ayrılır.",
          "en": "Since dissolving O2 in water is endothermic, O2 separates as bubbles in warm water.",
          "de": "Da das Lösen von O2 in Wasser endotherm ist, entweicht O2 in warmem Wasser in Bläschen.",
          "fr": "La dissolution de O2 dans l'eau étant endothermique, O2 se dégage en bulles dans l'eau tiède.",
          "ru": "Растворение O2 в воде эндотермично, поэтому в тёплой воде O2 выделяется пузырьками.",
          "ar": "لأن ذوبان O2 في الماء ماص للحرارة، ينفصل O2 على شكل فقاعات في الماء الدافئ.",
          "zh": "由于 O2 溶于水是吸热过程，O2 在温水中以气泡形式逸出。",
          "ku": "Ji ber ku helbûna O2 di avê de endotermîk e, O2 di ava germ de wek bilbil vediqete."
        },
        {
          "tr": "Sıcak suda O2'nin kısmi basıncı arttığından çözünürlüğü de artar.",
          "en": "In warm water the partial pressure of O2 increases, so its solubility also increases.",
          "de": "In warmem Wasser steigt der Partialdruck von O2, daher steigt auch seine Löslichkeit.",
          "fr": "Dans l'eau chaude la pression partielle de O2 augmente, donc sa solubilité augmente aussi.",
          "ru": "В тёплой воде парциальное давление O2 растёт, поэтому растёт и его растворимость.",
          "ar": "في الماء الدافئ يزداد الضغط الجزئي لـ O2 فتزداد ذائبيته أيضًا.",
          "zh": "温水中 O2 的分压增大，所以其溶解度也增大。",
          "ku": "Di ava germ de zexta qismî ya O2 zêde dibe, ji ber vê yekê helbûniya wê jî zêde dibe."
        },
        {
          "tr": "Isınan suyun buhar basıncı düştüğü için O2 sudan uzaklaşır.",
          "en": "Because the vapor pressure of the warmed water decreases, O2 leaves the water.",
          "de": "Weil der Dampfdruck des erwärmten Wassers sinkt, entweicht O2 aus dem Wasser.",
          "fr": "Comme la pression de vapeur de l'eau réchauffée diminue, O2 quitte l'eau.",
          "ru": "Давление пара нагретой воды снижается, поэтому O2 уходит из воды.",
          "ar": "لأن ضغط بخار الماء المسخَّن ينخفض، يغادر O2 الماء.",
          "zh": "因为升温后水的蒸气压降低，O2 离开水体。",
          "ku": "Ji ber ku zexta buharê ya ava germbûyî dadikeve, O2 ji avê dûr dikeve."
        },
        {
          "tr": "Isınan suyun donma noktası yükseldiği için balıkların hareketi yavaşlar.",
          "en": "Because the freezing point of the warmed water rises, the fish move more slowly.",
          "de": "Weil der Gefrierpunkt des erwärmten Wassers steigt, bewegen sich die Fische langsamer.",
          "fr": "Comme le point de congélation de l'eau réchauffée s'élève, les poissons bougent plus lentement.",
          "ru": "Температура замерзания нагретой воды повышается, поэтому рыбы двигаются медленнее.",
          "ar": "لأن درجة تجمد الماء المسخَّن ترتفع، تتباطأ حركة الأسماك.",
          "zh": "因为升温后水的凝固点升高，鱼的活动变慢。",
          "ku": "Ji ber ku xala cemidînê ya ava germbûyî bilind dibe, tevgera masiyan hêdî dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Gazların suda çözünmesi ekzotermiktir; sıcaklık yükselince O2'nin çözünürlüğü azalır, suda çözünmüş O2 miktarı düşer ve balıklar oksijen yetersizliği yaşar (ısıl kirlilik). O2'nin çözünmesini endotermik saymak yanlıştır; öyle olsaydı ısınma çözünürlüğü artırırdı. Isınan suyun buhar basıncı düşmez, artar; suyun donma noktası da sıcaklıkla değişmez.",
        "en": "Dissolving gases in water is exothermic; when the temperature rises, the solubility of O2 decreases, the dissolved O2 content falls and the fish suffer from oxygen shortage (thermal pollution). Calling the dissolution of O2 endothermic is wrong — if it were, warming would increase solubility. The vapor pressure of warmed water rises, not falls, and the freezing point of water does not depend on its temperature.",
        "de": "Das Lösen von Gasen in Wasser ist exotherm; steigt die Temperatur, sinkt die Löslichkeit von O2, der Gehalt an gelöstem O2 fällt und die Fische leiden unter Sauerstoffmangel (thermische Verschmutzung). Das Lösen von O2 als endotherm zu bezeichnen ist falsch – sonst würde Erwärmung die Löslichkeit erhöhen. Der Dampfdruck von erwärmtem Wasser steigt, statt zu sinken, und der Gefrierpunkt hängt nicht von der Wassertemperatur ab.",
        "fr": "La dissolution des gaz dans l'eau est exothermique ; quand la température monte, la solubilité de O2 diminue, la teneur en O2 dissous baisse et les poissons manquent d'oxygène (pollution thermique). Dire que la dissolution de O2 est endothermique est faux : sinon, le réchauffement augmenterait la solubilité. La pression de vapeur de l'eau réchauffée augmente au lieu de baisser, et le point de congélation ne dépend pas de la température de l'eau.",
        "ru": "Растворение газов в воде экзотермично; при повышении температуры растворимость O2 уменьшается, содержание растворённого O2 падает и рыбам не хватает кислорода (тепловое загрязнение). Считать растворение O2 эндотермичным неверно — тогда нагрев увеличивал бы растворимость. Давление пара нагретой воды растёт, а не падает, а температура замерзания воды не зависит от её текущей температуры.",
        "ar": "ذوبان الغازات في الماء طارد للحرارة؛ فعند ارتفاع درجة الحرارة تقل ذائبية O2 وتنخفض كمية O2 الذائب فتعاني الأسماك نقص الأكسجين (التلوث الحراري). اعتبار ذوبان O2 ماصًا للحرارة خطأ، فلو كان كذلك لزادت الذائبية بالتسخين. ضغط بخار الماء المسخَّن يرتفع ولا ينخفض، ودرجة تجمد الماء لا تتغير بتغير درجة حرارته.",
        "zh": "气体溶于水是放热过程；温度升高，O2 的溶解度减小，水中溶解氧减少，鱼类缺氧（热污染）。把 O2 的溶解说成吸热是错误的——若是吸热，升温反而会增大溶解度。升温后水的蒸气压是升高而不是降低，水的凝固点也不随水温改变。",
        "ku": "Helbûna gazan di avê de ekzotermîk e; dema germahî bilind dibe helbûniya O2 kêm dibe, mîqdara O2 ya helbûyî dadikeve û masî rastî kêmasiya oksîjenê tên (qirêjiya germî). Hesibandina helbûna O2 wek endotermîk şaş e; heke wisa bûya, germbûnê dê helbûnî zêde bikira. Zexta buharê ya ava germbûyî danakeve, zêde dibe; xala cemidînê ya avê jî bi germahiya wê re naguhere."
      }
    },
    {
      "id": "u15-twin09",
      "stem": {
        "tr": "Moleküler yapılı ve uçucu olmayan bir maddenin 3,6 gramı 100 g suda çözülüyor. Çözeltinin 1 atm'de donmaya başlama sıcaklığı -0,372 °C olarak ölçüldüğüne göre maddenin mol kütlesi kaç g/mol'dür? (Su için Kd = 1,86 °C*kg/mol)",
        "en": "3.6 g of a molecular, non-volatile substance is dissolved in 100 g of water. The solution starts to freeze at -0.372 °C at 1 atm. What is the molar mass of the substance in g/mol? (Kf for water = 1.86 °C*kg/mol)",
        "de": "3,6 g eines molekularen, nichtflüchtigen Stoffes werden in 100 g Wasser gelöst. Die Lösung beginnt bei 1 atm bei -0,372 °C zu gefrieren. Wie groß ist die Molmasse des Stoffes in g/mol? (Kg für Wasser = 1,86 °C*kg/mol)",
        "fr": "On dissout 3,6 g d'une substance moléculaire non volatile dans 100 g d'eau. La solution commence à geler à -0,372 °C sous 1 atm. Quelle est la masse molaire de la substance en g/mol ? (Kcong de l'eau = 1,86 °C*kg/mol)",
        "ru": "3,6 г молекулярного нелетучего вещества растворили в 100 г воды. Раствор начинает замерзать при -0,372 °C (1 атм). Чему равна молярная масса вещества (г/моль)? (Для воды Kкр = 1,86 °C*кг/моль)",
        "ar": "أُذيب 3.6 g من مادة جزيئية غير متطايرة في 100 g من الماء. يبدأ المحلول بالتجمد عند -0.372 °C تحت 1 atm. ما الكتلة المولية للمادة بوحدة g/mol؟ (Kf للماء = 1.86 °C*kg/mol)",
        "zh": "将 3.6 g 某分子型非挥发性物质溶于 100 g 水中，溶液在 1 atm 下于 -0.372 °C 开始凝固。该物质的摩尔质量是多少 g/mol？(水的 Kf = 1.86 °C*kg/mol)",
        "ku": "3,6 g ji madeyeke molekulî û nefirok di 100 g avê de tê helandin. Ji ber ku çareserî di 1 atm de di -0,372 °C de dest bi cemidînê dike, girseya molî ya madeyê çend g/mol e? (Ji bo avê Kd = 1,86 °C*kg/mol)"
      },
      "options": [
        {
          "tr": "18",
          "en": "18",
          "de": "18",
          "fr": "18",
          "ru": "18",
          "ar": "18",
          "zh": "18",
          "ku": "18"
        },
        {
          "tr": "90",
          "en": "90",
          "de": "90",
          "fr": "90",
          "ru": "90",
          "ar": "90",
          "zh": "90",
          "ku": "90"
        },
        {
          "tr": "180",
          "en": "180",
          "de": "180",
          "fr": "180",
          "ru": "180",
          "ar": "180",
          "zh": "180",
          "ku": "180"
        },
        {
          "tr": "360",
          "en": "360",
          "de": "360",
          "fr": "360",
          "ru": "360",
          "ar": "360",
          "zh": "360",
          "ku": "360"
        },
        {
          "tr": "1800",
          "en": "1800",
          "de": "1800",
          "fr": "1800",
          "ru": "1800",
          "ar": "1800",
          "zh": "1800",
          "ku": "1800"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "ΔTd = 0,372 °C; moleküler madde için i = 1. m = ΔTd / Kd = 0,372 / 1,86 = 0,2 mol/kg. 100 g = 0,1 kg suda n = 0,2 * 0,1 = 0,02 mol. M = 3,6 / 0,02 = 180 g/mol. Su kütlesini kg'a çevirmeden n = 0,2 mol almak 18 g/mol'ü, maddeyi iyonlaşıyor sayıp i = 2 almak 360 g/mol'ü, 100 g'ı 0,01 kg sanmak 1800 g/mol'ü verir.",
        "en": "ΔTf = 0.372 °C; for a molecular substance i = 1. m = ΔTf / Kf = 0.372 / 1.86 = 0.2 mol/kg. In 100 g = 0.1 kg of water, n = 0.2 * 0.1 = 0.02 mol. M = 3.6 / 0.02 = 180 g/mol. Not converting the water mass to kg (n = 0.2 mol) gives 18 g/mol, treating the substance as ionizing (i = 2) gives 360 g/mol, and taking 100 g as 0.01 kg gives 1800 g/mol.",
        "de": "ΔTg = 0,372 °C; für einen molekularen Stoff ist i = 1. m = ΔTg / Kg = 0,372 / 1,86 = 0,2 mol/kg. In 100 g = 0,1 kg Wasser: n = 0,2 * 0,1 = 0,02 mol. M = 3,6 / 0,02 = 180 g/mol. Ohne Umrechnung in kg (n = 0,2 mol) erhält man 18 g/mol, mit i = 2 (Stoff als dissoziierend betrachtet) 360 g/mol, und wer 100 g als 0,01 kg nimmt, 1800 g/mol.",
        "fr": "ΔTcong = 0,372 °C ; pour une substance moléculaire i = 1. m = ΔTcong / Kcong = 0,372 / 1,86 = 0,2 mol/kg. Dans 100 g = 0,1 kg d'eau, n = 0,2 * 0,1 = 0,02 mol. M = 3,6 / 0,02 = 180 g/mol. Sans conversion en kg (n = 0,2 mol), on obtient 18 g/mol ; en considérant la substance comme ionisée (i = 2), 360 g/mol ; en prenant 100 g pour 0,01 kg, 1800 g/mol.",
        "ru": "ΔTзам = 0,372 °C; для молекулярного вещества i = 1. m = ΔTзам / Kкр = 0,372 / 1,86 = 0,2 моль/кг. В 100 г = 0,1 кг воды n = 0,2 * 0,1 = 0,02 моль. M = 3,6 / 0,02 = 180 г/моль. Если не перевести массу воды в килограммы (n = 0,2 моль), получится 18 г/моль; если считать вещество диссоциирующим (i = 2) — 360 г/моль; если принять 100 г за 0,01 кг — 1800 г/моль.",
        "ar": "ΔTf = 0.372 °C؛ وللمادة الجزيئية i = 1. m = ΔTf / Kf = 0.372 / 1.86 = 0.2 mol/kg. في 100 g = 0.1 kg من الماء: n = 0.2 * 0.1 = 0.02 mol. M = 3.6 / 0.02 = 180 g/mol. عدم تحويل كتلة الماء إلى kg (n = 0.2 mol) يعطي 18 g/mol، واعتبار المادة متأينة (i = 2) يعطي 360 g/mol، واعتبار 100 g تساوي 0.01 kg يعطي 1800 g/mol.",
        "zh": "ΔTf = 0.372 °C；分子型物质 i = 1。m = ΔTf / Kf = 0.372 / 1.86 = 0.2 mol/kg。100 g = 0.1 kg 水中 n = 0.2 * 0.1 = 0.02 mol。M = 3.6 / 0.02 = 180 g/mol。不把水的质量换算成 kg(n = 0.2 mol)得 18 g/mol；把该物质当作电离(i = 2)得 360 g/mol；把 100 g 当成 0.01 kg 得 1800 g/mol。",
        "ku": "ΔTd = 0,372 °C; ji bo madeya molekulî i = 1. m = ΔTd / Kd = 0,372 / 1,86 = 0,2 mol/kg. Di 100 g = 0,1 kg avê de n = 0,2 * 0,1 = 0,02 mol. M = 3,6 / 0,02 = 180 g/mol. Neveguhertina girseya avê bo kg (n = 0,2 mol) 18 g/mol, hesibandina madeyê wek îyonîzebûyî (i = 2) 360 g/mol, hesibandina 100 g wek 0,01 kg jî 1800 g/mol dide."
      }
    },
    {
      "id": "u15-twin10",
      "stem": {
        "tr": "Şekilde X ve Y katılarının sudaki çözünürlüklerinin sıcaklıkla değişimi verilmiştir. Dibinde katı bulunmayan doygun X ve Y çözeltileriyle ilgili; I. 20 °C'deki doygun X çözeltisi 40 °C'ye ısıtılırsa doymamış hâle geçer. II. 40 °C'de 200 g su ile hazırlanan doygun Y çözeltisi 20 °C'ye soğutulursa 20 g Y katısı ayrılır. III. 40 °C'de 100 g su ile hazırlanan doygun Y çözeltisi 60 °C'ye ısıtılırsa 10 g Y katısı ayrılır. yargılarından hangileri doğrudur? (Suyun buharlaşmadığı kabul edilecektir.)",
        "en": "The graph shows how the solubilities of solids X and Y in water change with temperature. Which of the following statements about saturated X and Y solutions with no solid at the bottom are correct? I. If a saturated X solution at 20 °C is heated to 40 °C, it becomes unsaturated. II. If a saturated Y solution prepared with 200 g of water at 40 °C is cooled to 20 °C, 20 g of solid Y separates out. III. If a saturated Y solution prepared with 100 g of water at 40 °C is heated to 60 °C, 10 g of solid Y separates out. (Assume no water evaporates.)",
        "de": "Das Diagramm zeigt die Löslichkeit der Feststoffe X und Y in Wasser in Abhängigkeit von der Temperatur. Welche Aussagen über gesättigte X- und Y-Lösungen ohne Bodenkörper sind richtig? I. Wird eine bei 20 °C gesättigte X-Lösung auf 40 °C erwärmt, wird sie ungesättigt. II. Wird eine bei 40 °C mit 200 g Wasser hergestellte gesättigte Y-Lösung auf 20 °C abgekühlt, scheiden sich 20 g festes Y ab. III. Wird eine bei 40 °C mit 100 g Wasser hergestellte gesättigte Y-Lösung auf 60 °C erwärmt, scheiden sich 10 g festes Y ab. (Es verdunstet kein Wasser.)",
        "fr": "Le graphique montre la variation des solubilités des solides X et Y dans l'eau en fonction de la température. Lesquelles des affirmations suivantes sur des solutions saturées de X et de Y sans solide au fond sont correctes ? I. Si l'on chauffe à 40 °C une solution de X saturée à 20 °C, elle devient insaturée. II. Si l'on refroidit à 20 °C une solution de Y saturée préparée à 40 °C avec 200 g d'eau, 20 g de Y solide se déposent. III. Si l'on chauffe à 60 °C une solution de Y saturée préparée à 40 °C avec 100 g d'eau, 10 g de Y solide se déposent. (On admet qu'aucune eau ne s'évapore.)",
        "ru": "На графике показана зависимость растворимости твёрдых веществ X и Y в воде от температуры. Какие утверждения о насыщенных растворах X и Y без осадка на дне верны? I. Если насыщенный при 20 °C раствор X нагреть до 40 °C, он станет ненасыщенным. II. Если насыщенный при 40 °C раствор Y, приготовленный на 200 г воды, охладить до 20 °C, выделится 20 г твёрдого Y. III. Если насыщенный при 40 °C раствор Y, приготовленный на 100 г воды, нагреть до 60 °C, выделится 10 г твёрдого Y. (Вода не испаряется.)",
        "ar": "يبيّن الرسم البياني في الشكل تغيّر ذائبية المادتين الصلبتين X وY في الماء مع درجة الحرارة. أيّ العبارات الآتية عن محلولَي X وY المشبعين اللذين لا يوجد في قاعهما مادة صلبة صحيحة؟ I. إذا سُخِّن محلول X المشبع عند 20 °C إلى 40 °C يصبح غير مشبع. II. إذا بُرِّد محلول Y المشبع المحضَّر عند 40 °C بـ 200 g من الماء إلى 20 °C ينفصل 20 g من Y الصلب. III. إذا سُخِّن محلول Y المشبع المحضَّر عند 40 °C بـ 100 g من الماء إلى 60 °C ينفصل 10 g من Y الصلب. (يُفترض أن الماء لا يتبخر.)",
        "zh": "图示为固体 X 和 Y 在水中的溶解度随温度的变化。关于底部没有固体的 X、Y 饱和溶液，有下列说法：I. 将 20 °C 时 X 的饱和溶液加热到 40 °C，溶液变为不饱和。II. 将 40 °C 时用 200 g 水配制的 Y 的饱和溶液冷却到 20 °C，析出 20 g 固体 Y。III. 将 40 °C 时用 100 g 水配制的 Y 的饱和溶液加热到 60 °C，析出 10 g 固体 Y。其中正确的是哪些？（水不蒸发。）",
        "ku": "Di şiklê de guherîna helbûniya madeyên hişk X û Y di avê de li gorî germahiyê hatiye dayîn. Derbarê çareseriyên têr ên X û Y yên ku li binê wan madeya hişk tune; I. Ger çareseriya têr a X ya di 20 °C de heta 40 °C were germkirin, netêr dibe. II. Ger çareseriya têr a Y ya di 40 °C de bi 200 g avê hatiye amadekirin heta 20 °C were sarkirin, 20 g Y ya hişk vediqete. III. Ger çareseriya têr a Y ya di 40 °C de bi 100 g avê hatiye amadekirin heta 60 °C were germkirin, 10 g Y ya hişk vediqete. Kîjan ji van gotinan rast in? (Tê qebûlkirin ku av nabe buhar.)"
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
          "tr": "Yalnız III",
          "en": "III only",
          "de": "Nur III",
          "fr": "III seulement",
          "ru": "Только III",
          "ar": "III فقط",
          "zh": "仅III",
          "ku": "Tenê III"
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
      "correctIndex": 2,
      "explanation": {
        "tr": "I doğrudur: grafiğe göre X'in çözünürlüğü 20 °C'de 20 g, 40 °C'de 40 g/100 g sudur; ısıtılan çözeltideki çözünen miktarı yeni çözünürlüğün altında kaldığından çözelti doymamış olur. II yanlıştır: Y'nin çözünürlüğü soğudukça artar (40 °C'de 30 g, 20 °C'de 40 g/100 g su); soğutulan doygun Y çözeltisi doymamış hâle geçer, katı ayrılmaz. 20 g sonucu, 10 g'lık çözünürlük farkını 200 g su için ikiyle çarpıp değişimin yönünü ters yorumlamaktan gelir. III doğrudur: 40 °C'de 100 g suda 30 g Y çözünmüştür; 60 °C'de çözünürlük 20 g olduğundan 30 − 20 = 10 g Y katısı ayrılır. Doğru yargılar I ve III'tür.",
        "en": "I is correct: from the graph, the solubility of X is 20 g at 20 °C and 40 g at 40 °C per 100 g of water; the dissolved amount in the heated solution is now below the new solubility, so the solution becomes unsaturated. II is wrong: the solubility of Y increases on cooling (30 g at 40 °C, 40 g at 20 °C per 100 g of water); a cooled saturated Y solution becomes unsaturated and no solid separates. The value 20 g comes from doubling the 10 g solubility difference for 200 g of water while reading the direction of change backwards. III is correct: at 40 °C, 30 g of Y is dissolved in 100 g of water; at 60 °C the solubility is 20 g, so 30 − 20 = 10 g of solid Y separates out. The correct statements are I and III.",
        "de": "I ist richtig: Laut Diagramm beträgt die Löslichkeit von X bei 20 °C 20 g und bei 40 °C 40 g pro 100 g Wasser; die gelöste Menge liegt nach dem Erwärmen unter der neuen Löslichkeit, die Lösung wird ungesättigt. II ist falsch: Die Löslichkeit von Y nimmt beim Abkühlen zu (bei 40 °C 30 g, bei 20 °C 40 g pro 100 g Wasser); eine abgekühlte gesättigte Y-Lösung wird ungesättigt, es scheidet sich nichts ab. Der Wert 20 g entsteht, wenn man den Löslichkeitsunterschied von 10 g für 200 g Wasser verdoppelt und dabei die Richtung der Änderung umkehrt. III ist richtig: Bei 40 °C sind 30 g Y in 100 g Wasser gelöst; bei 60 °C beträgt die Löslichkeit 20 g, also scheiden sich 30 − 20 = 10 g festes Y ab. Richtig sind I und III.",
        "fr": "I est correcte : d'après le graphique, la solubilité de X est de 20 g à 20 °C et de 40 g à 40 °C pour 100 g d'eau ; après chauffage, la quantité dissoute est inférieure à la nouvelle solubilité et la solution devient insaturée. II est fausse : la solubilité de Y augmente quand on refroidit (30 g à 40 °C, 40 g à 20 °C pour 100 g d'eau) ; une solution de Y saturée que l'on refroidit devient insaturée et rien ne se dépose. La valeur 20 g vient du doublement de l'écart de 10 g pour 200 g d'eau, avec une lecture inversée du sens de variation. III est correcte : à 40 °C, 30 g de Y sont dissous dans 100 g d'eau ; à 60 °C la solubilité est de 20 g, donc 30 − 20 = 10 g de Y solide se déposent. Les affirmations correctes sont I et III.",
        "ru": "I верно: по графику растворимость X при 20 °C равна 20 г, при 40 °C — 40 г на 100 г воды; после нагревания растворённое количество оказывается ниже новой растворимости, раствор становится ненасыщенным. II неверно: растворимость Y при охлаждении растёт (при 40 °C 30 г, при 20 °C 40 г на 100 г воды); охлаждённый насыщенный раствор Y становится ненасыщенным, осадок не выделяется. Значение 20 г получается, если удвоить разницу растворимостей 10 г для 200 г воды и перепутать направление изменения. III верно: при 40 °C в 100 г воды растворено 30 г Y; при 60 °C растворимость 20 г, поэтому выделяется 30 − 20 = 10 г твёрдого Y. Верны I и III.",
        "ar": "العبارة I صحيحة: يبيّن الرسم أن ذائبية X هي 20 g عند 20 °C و40 g عند 40 °C لكل 100 g ماء؛ فبعد التسخين تصبح الكمية المذابة أقل من الذائبية الجديدة ويصبح المحلول غير مشبع. العبارة II خاطئة: ذائبية Y تزداد بالتبريد (30 g عند 40 °C و40 g عند 20 °C لكل 100 g ماء)؛ فمحلول Y المشبع يصبح عند تبريده غير مشبع ولا ينفصل منه شيء. وقيمة 20 g تأتي من مضاعفة فرق الذائبية البالغ 10 g لـ 200 g ماء مع عكس اتجاه التغير. العبارة III صحيحة: عند 40 °C يذوب 30 g من Y في 100 g ماء، وعند 60 °C تكون الذائبية 20 g، فينفصل 30 − 20 = 10 g من Y الصلب. العبارتان الصحيحتان هما I و III.",
        "zh": "I 正确：由图可知，X 的溶解度在 20 °C 时为 20 g，在 40 °C 时为 40 g（每 100 g 水）；加热后溶解的量低于新的溶解度，溶液变为不饱和。II 错误：Y 的溶解度随温度降低而增大（40 °C 时 30 g，20 °C 时 40 g，每 100 g 水）；Y 的饱和溶液冷却后变为不饱和，没有固体析出。20 g 这一结果来自把 10 g 的溶解度差按 200 g 水加倍，同时把变化方向弄反。III 正确：40 °C 时 100 g 水中溶有 30 g Y；60 °C 时溶解度为 20 g，故析出 30 − 20 = 10 g 固体 Y。正确的是 I 和 III。",
        "ku": "I rast e: li gorî grafîkê helbûniya X di 20 °C de 20 g, di 40 °C de 40 g/100 g av e; piştî germkirinê mîqdara helandî di bin helbûniya nû de dimîne û çareserî netêr dibe. II şaş e: helbûniya Y bi sarbûnê zêde dibe (di 40 °C de 30 g, di 20 °C de 40 g/100 g av); çareseriya têr a Y ya sarkirî netêr dibe û madeya hişk venaqete. Encama 20 g ji ducarkirina cudahiya helbûniyê ya 10 g ji bo 200 g avê û berevajî xwendina rêya guherînê tê. III rast e: di 40 °C de 30 g Y di 100 g avê de helandî ye; di 60 °C de helbûnî 20 g e, ji ber vê 30 − 20 = 10 g Y ya hişk vediqete. Gotinên rast I û III ne."
      },
      "figure": {
        "kind": "graph",
        "xLabel": {
          "tr": "Sıcaklık (°C)",
          "en": "Temperature (°C)",
          "de": "Temperatur (°C)",
          "fr": "Température (°C)",
          "ru": "Температура (°C)",
          "ar": "درجة الحرارة (°C)",
          "zh": "温度 (°C)",
          "ku": "Germahî (°C)"
        },
        "yLabel": {
          "tr": "Çözünürlük (g/100 g su)",
          "en": "Solubility (g/100 g water)",
          "de": "Löslichkeit (g/100 g Wasser)",
          "fr": "Solubilité (g/100 g d'eau)",
          "ru": "Растворимость (г/100 г воды)",
          "ar": "الذائبية (g/100 g ماء)",
          "zh": "溶解度 (g/100 g 水)",
          "ku": "Helbûnî (g/100 g av)"
        },
        "xMax": 70,
        "yMax": 80,
        "xTicks": [
          20,
          40,
          60
        ],
        "yTicks": [
          10,
          20,
          30,
          40,
          50,
          60,
          70
        ],
        "series": [
          {
            "points": [
              [
                0,
                10
              ],
              [
                10,
                14
              ],
              [
                20,
                20
              ],
              [
                30,
                29
              ],
              [
                40,
                40
              ],
              [
                50,
                54
              ],
              [
                60,
                70
              ]
            ],
            "label": "X",
            "tone": 0
          },
          {
            "points": [
              [
                0,
                50
              ],
              [
                20,
                40
              ],
              [
                40,
                30
              ],
              [
                60,
                20
              ]
            ],
            "label": "Y",
            "tone": 1
          }
        ]
      }
    },
    {
      "id": "u15-twin11",
      "stem": {
        "tr": "Bir öğrenci 80 °C'de hazırladığı doygun sodyum asetat çözeltisini, hiç katı ayrılmadan ve kabı sarsmadan yavaşça 20 °C'ye soğutuyor. Çözeltiye küçük bir sodyum asetat kristali attığında çözünenin fazlası hızla kristalleniyor. Kristal atılmadan önceki 20 °C'deki çözelti için aşağıdakilerden hangisi doğrudur? (Sodyum asetatın sudaki çözünürlüğü sıcaklıkla artar.)",
        "en": "A student slowly cools a sodium acetate solution saturated at 80 °C down to 20 °C without shaking it and without any solid separating. When a small sodium acetate crystal is dropped in, the excess solute crystallizes rapidly. Which of the following is true for the solution at 20 °C before the crystal was added? (The solubility of sodium acetate in water increases with temperature.)",
        "de": "Ein Schüler kühlt eine bei 80 °C gesättigte Natriumacetatlösung langsam und ohne Erschütterung auf 20 °C ab, ohne dass sich Feststoff abscheidet. Als er einen kleinen Natriumacetatkristall hineingibt, kristallisiert der überschüssige gelöste Stoff schnell aus. Was gilt für die Lösung bei 20 °C vor Zugabe des Kristalls? (Die Löslichkeit von Natriumacetat in Wasser nimmt mit der Temperatur zu.)",
        "fr": "Un élève refroidit lentement jusqu'à 20 °C, sans l'agiter et sans qu'aucun solide ne se dépose, une solution d'acétate de sodium saturée à 80 °C. Lorsqu'il y ajoute un petit cristal d'acétate de sodium, l'excès de soluté cristallise rapidement. Laquelle des propositions suivantes est vraie pour la solution à 20 °C avant l'ajout du cristal ? (La solubilité de l'acétate de sodium dans l'eau augmente avec la température.)",
        "ru": "Ученик медленно, не встряхивая, охлаждает насыщенный при 80 °C раствор ацетата натрия до 20 °C, причём осадок не выпадает. Когда он бросает в раствор маленький кристалл ацетата натрия, избыток растворённого вещества быстро кристаллизуется. Что верно для раствора при 20 °C до добавления кристалла? (Растворимость ацетата натрия в воде растёт с температурой.)",
        "ar": "يبرّد طالب ببطء ومن دون رجّ محلول أسيتات الصوديوم المشبع عند 80 °C حتى 20 °C دون أن ينفصل أي صلب. وعندما يلقي فيه بلورة صغيرة من أسيتات الصوديوم يتبلور المذاب الزائد بسرعة. أيّ مما يلي صحيح عن المحلول عند 20 °C قبل إضافة البلورة؟ (تزداد ذائبية أسيتات الصوديوم في الماء بارتفاع درجة الحرارة.)",
        "zh": "一名学生把 80 °C 时饱和的醋酸钠溶液在不震动、无固体析出的情况下缓慢冷却到 20 °C。向其中投入一小粒醋酸钠晶体后，多余的溶质迅速结晶析出。关于投入晶体前 20 °C 的溶液，下列哪项正确？（醋酸钠在水中的溶解度随温度升高而增大。）",
        "ku": "Xwendekarek çareseriya sodyum asetatê ya ku li 80 °C têr e, bêyî ku tu madeya hişk veqete û bêyî hejandina firaxê, hêdî hêdî heta 20 °C sar dike. Dema krîstaleke piçûk a sodyum asetatê davêje nav çareseriyê, madeya helbûyî ya zêde zû krîstal dibe. Ji bo çareseriya li 20 °C, berî avêtina krîstalê, kîjan ji van rast e? (Helbûniya sodyum asetatê di avê de bi germahiyê re zêde dibe.)"
      },
      "options": [
        {
          "tr": "Doymamıştır; bir miktar daha sodyum asetat çözebilir.",
          "en": "It is unsaturated; it can dissolve some more sodium acetate.",
          "de": "Sie ist ungesättigt; sie kann noch etwas Natriumacetat lösen.",
          "fr": "Elle est insaturée ; elle peut encore dissoudre un peu d'acétate de sodium.",
          "ru": "Он ненасыщенный: в нём может раствориться ещё некоторое количество ацетата натрия.",
          "ar": "غير مشبع؛ يمكنه إذابة كمية أخرى من أسيتات الصوديوم.",
          "zh": "是不饱和溶液，还能再溶解一些醋酸钠。",
          "ku": "Netêr e; hîn dikare hinek sodyum asetatê din bihelîne."
        },
        {
          "tr": "Doygundur; çözünme ve kristallenme hızları eşittir.",
          "en": "It is saturated; the rates of dissolution and crystallization are equal.",
          "de": "Sie ist gesättigt; Lösungs- und Kristallisationsgeschwindigkeit sind gleich.",
          "fr": "Elle est saturée ; les vitesses de dissolution et de cristallisation sont égales.",
          "ru": "Он насыщенный: скорости растворения и кристаллизации равны.",
          "ar": "مشبع؛ سرعتا الذوبان والتبلور متساويتان.",
          "zh": "是饱和溶液，溶解速率与结晶速率相等。",
          "ku": "Têr e; leza helbûnê û leza krîstalbûnê wekhev in."
        },
        {
          "tr": "Seyreltiktir; çözünen kütlesi 20 °C'deki çözünürlükten azdır.",
          "en": "It is dilute; the mass of solute is less than the solubility at 20 °C.",
          "de": "Sie ist verdünnt; die Masse an gelöstem Stoff ist kleiner als die Löslichkeit bei 20 °C.",
          "fr": "Elle est diluée ; la masse de soluté est inférieure à la solubilité à 20 °C.",
          "ru": "Он разбавленный: масса растворённого вещества меньше растворимости при 20 °C.",
          "ar": "مخفف؛ كتلة المذاب أقل من الذائبية عند 20 °C.",
          "zh": "是稀溶液，溶质质量小于 20 °C 时的溶解度。",
          "ku": "Sist e; girseya madeya helbûyî ji helbûniya li 20 °C kêmtir e."
        },
        {
          "tr": "Aşırı doymuştur; kararsızdır ve 20 °C'deki çözünürlükten daha fazla çözünen içerir.",
          "en": "It is supersaturated; it is unstable and contains more solute than the solubility at 20 °C.",
          "de": "Sie ist übersättigt; sie ist instabil und enthält mehr gelösten Stoff, als der Löslichkeit bei 20 °C entspricht.",
          "fr": "Elle est sursaturée ; elle est instable et contient plus de soluté que la solubilité à 20 °C.",
          "ru": "Он пересыщенный: он неустойчив и содержит больше растворённого вещества, чем позволяет растворимость при 20 °C.",
          "ar": "فوق مشبع؛ غير مستقر ويحتوي مذابًا أكثر من الذائبية عند 20 °C.",
          "zh": "是过饱和溶液，不稳定，所含溶质多于 20 °C 时的溶解度。",
          "ku": "Zêdetêr e; nearam e û ji helbûniya li 20 °C bêtir madeya helbûyî dihewîne."
        },
        {
          "tr": "Soğutma sırasında sodyum asetatın çözünürlüğü artmış, fazla çözünen bu yüzden tutulmuştur.",
          "en": "During cooling the solubility of sodium acetate increased, which is why the excess solute was held in solution.",
          "de": "Beim Abkühlen ist die Löslichkeit von Natriumacetat gestiegen, deshalb blieb der Überschuss gelöst.",
          "fr": "Pendant le refroidissement, la solubilité de l'acétate de sodium a augmenté, c'est pourquoi l'excès de soluté est resté dissous.",
          "ru": "При охлаждении растворимость ацетата натрия увеличилась, поэтому избыток вещества остался в растворе.",
          "ar": "أثناء التبريد ازدادت ذائبية أسيتات الصوديوم، ولهذا بقي المذاب الزائد ذائبًا.",
          "zh": "冷却过程中醋酸钠的溶解度增大，所以多余的溶质仍留在溶液中。",
          "ku": "Di dema sarkirinê de helbûniya sodyum asetatê zêde bûye, loma madeya helbûyî ya zêde di çareseriyê de maye."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "80 °C'de doygun olan çözelti, katı ayrılmadan 20 °C'ye inince 20 °C'deki çözünürlükten daha fazla çözünen taşır, yani aşırı doymuştur. Bu durum kararsızdır; aşı kristali eklenince fazlalık hemen kristallenir. Çözelti doygun olsaydı atılan kristal yalnızca dibe çöker, ani kristallenme görülmezdi. Çözünürlük sıcaklıkla arttığından soğutmada artmamış, azalmıştır.",
        "en": "The solution saturated at 80 °C, cooled to 20 °C without any solid separating, holds more solute than the solubility at 20 °C, i.e. it is supersaturated. This state is unstable; adding a seed crystal makes the excess crystallize at once. If the solution were merely saturated, the added crystal would just sink and no sudden crystallization would occur. Since solubility increases with temperature, it decreased, not increased, on cooling.",
        "de": "Die bei 80 °C gesättigte Lösung enthält nach dem Abkühlen auf 20 °C ohne Abscheidung mehr gelösten Stoff, als der Löslichkeit bei 20 °C entspricht – sie ist übersättigt. Dieser Zustand ist instabil; ein Impfkristall lässt den Überschuss sofort auskristallisieren. Wäre die Lösung nur gesättigt, würde der Kristall bloß absinken, ohne plötzliche Kristallisation. Da die Löslichkeit mit der Temperatur steigt, ist sie beim Abkühlen gesunken, nicht gestiegen.",
        "fr": "La solution saturée à 80 °C, refroidie à 20 °C sans dépôt, contient plus de soluté que la solubilité à 20 °C : elle est sursaturée. Cet état est instable ; un germe cristallin fait cristalliser l'excès aussitôt. Si la solution était simplement saturée, le cristal ajouté tomberait au fond sans cristallisation brutale. La solubilité augmentant avec la température, elle a diminué, et non augmenté, au refroidissement.",
        "ru": "Насыщенный при 80 °C раствор, охлаждённый до 20 °C без выпадения осадка, содержит больше растворённого вещества, чем позволяет растворимость при 20 °C, то есть он пересыщенный. Такое состояние неустойчиво: кристалл-затравка вызывает немедленную кристаллизацию избытка. Будь раствор просто насыщенным, внесённый кристалл лишь опустился бы на дно и бурной кристаллизации не было бы. Растворимость растёт с температурой, поэтому при охлаждении она не увеличилась, а уменьшилась.",
        "ar": "المحلول المشبع عند 80 °C إذا بُرّد إلى 20 °C دون انفصال أي صلب يحمل مذابًا أكثر من الذائبية عند 20 °C، أي أنه فوق مشبع. هذه الحالة غير مستقرة، فإضافة بلورة بادئة تجعل الفائض يتبلور فورًا. لو كان المحلول مشبعًا فقط لاستقرت البلورة في القاع دون تبلور مفاجئ. وبما أن الذائبية تزداد بارتفاع درجة الحرارة، فقد قلّت عند التبريد ولم تزد.",
        "zh": "80 °C 时饱和的溶液在无固体析出的情况下冷却到 20 °C，所含溶质多于 20 °C 时的溶解度，即为过饱和溶液。这种状态不稳定，加入晶种后多余溶质立即结晶。若溶液只是饱和，投入的晶体只会沉到底部，不会突然大量结晶。溶解度随温度升高而增大，所以冷却时溶解度是减小而不是增大。",
        "ku": "Çareseriya ku li 80 °C têr e, dema bêyî veqetîna madeya hişk heta 20 °C sar dibe, ji helbûniya li 20 °C bêtir madeya helbûyî hildigire, yanî zêdetêr e. Ev rewş nearam e; dema krîstaleke tov tê zêdekirin, madeya zêde yekser krîstal dibe. Heke çareserî tenê têr bûya, krîstala avêtî dê tenê binî bibûya û krîstalbûna ji nişka ve nedihat dîtin. Ji ber ku helbûnî bi germahiyê re zêde dibe, di sarkirinê de zêde nebûye, kêm bûye."
      }
    },
    {
      "id": "u15-twin12",
      "stem": {
        "tr": "Şekildeki U borusunun K ve L kolları yalnızca su moleküllerinin geçebildiği yarı geçirgen bir zarla ayrılmıştır; başlangıçta iki koldaki sıvı seviyeleri eşittir. Sabit sıcaklıkta yeterince beklendiğinde; I. Su molekülleri net olarak K kolundan L koluna geçer. II. L kolundaki sıvı seviyesi yükselir. III. Na+ ve Cl- iyonları zardan K koluna geçerek iki koldaki tanecik derişimlerini eşitler. yargılarından hangileri doğrudur?",
        "en": "Arms K and L of the U-tube shown are separated by a semipermeable membrane that only water molecules can pass; initially the liquid levels in both arms are equal. After waiting long enough at constant temperature, which of the following statements are correct? I. There is a net flow of water molecules from arm K to arm L. II. The liquid level in arm L rises. III. Na+ and Cl- ions pass through the membrane into arm K and equalize the particle concentrations in the two arms.",
        "de": "Die Schenkel K und L des abgebildeten U-Rohrs sind durch eine semipermeable Membran getrennt, die nur Wassermoleküle durchlässt; anfangs sind die Flüssigkeitsstände in beiden Schenkeln gleich. Welche Aussagen sind richtig, nachdem man bei konstanter Temperatur lange genug gewartet hat? I. Wassermoleküle gelangen netto vom Schenkel K in den Schenkel L. II. Der Flüssigkeitsstand im Schenkel L steigt. III. Na+- und Cl--Ionen gelangen durch die Membran in den Schenkel K und gleichen die Teilchenkonzentrationen in beiden Schenkeln aus.",
        "fr": "Les branches K et L du tube en U représenté sont séparées par une membrane semi-perméable que seules les molécules d'eau peuvent traverser ; au départ, les niveaux de liquide sont égaux dans les deux branches. Après une attente suffisante à température constante, lesquelles des affirmations suivantes sont correctes ? I. Il y a un passage net de molécules d'eau de la branche K vers la branche L. II. Le niveau de liquide monte dans la branche L. III. Les ions Na+ et Cl- traversent la membrane vers la branche K et égalisent les concentrations en particules des deux branches.",
        "ru": "Колена K и L изображённой U-образной трубки разделены полупроницаемой мембраной, пропускающей только молекулы воды; вначале уровни жидкости в обоих коленах одинаковы. Какие утверждения верны после достаточно долгого ожидания при постоянной температуре? I. Молекулы воды в итоге переходят из колена K в колено L. II. Уровень жидкости в колене L поднимается. III. Ионы Na+ и Cl- проходят через мембрану в колено K и выравнивают концентрации частиц в обоих коленах.",
        "ar": "يفصل غشاء شبه منفذ لا يسمح إلا بمرور جزيئات الماء بين الذراعين K وL للأنبوب على شكل U المبيَّن في الشكل، ومستويا السائل في الذراعين متساويان في البداية. بعد الانتظار مدة كافية عند درجة حرارة ثابتة، أيّ العبارات الآتية صحيحة؟ I. تنتقل جزيئات الماء انتقالًا صافيًا من الذراع K إلى الذراع L. II. يرتفع مستوى السائل في الذراع L. III. تعبر أيونات Na+ وCl- الغشاء إلى الذراع K فتساوي تراكيز الجسيمات في الذراعين.",
        "zh": "图中 U 形管的 K、L 两臂被只允许水分子通过的半透膜隔开，开始时两臂液面相平。恒温下放置足够长时间后，有下列说法：I. 水分子净地由 K 臂进入 L 臂。II. L 臂液面升高。III. Na+ 和 Cl- 透过半透膜进入 K 臂，使两臂的粒子浓度相等。其中正确的是哪些？",
        "ku": "Milên K û L yên lûleya U ya di şiklê de bi perdeyeke nîv-derbasbar ku tenê molekulên avê jê derbas dibin ji hev hatine veqetandin; di destpêkê de asta şileyê di her du milan de wekhev e. Piştî ku di germahiya sabît de têra xwe tê sekinandin; I. Molekulên avê bi awayekî net ji mila K derbasî mila L dibin. II. Asta şileyê di mila L de bilind dibe. III. Îyonên Na+ û Cl- di perdeyê re derbasî mila K dibin û tîrbûnên perçeyan ên di her du milan de wekhev dikin. Kîjan ji van gotinan rast in?"
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
          "tr": "Yalnız III",
          "en": "III only",
          "de": "Nur III",
          "fr": "III seulement",
          "ru": "Только III",
          "ar": "III فقط",
          "zh": "仅III",
          "ku": "Tenê III"
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
        "tr": "Şekle göre K kolunda 0,1 M glikoz (i = 1, tanecik derişimi 0,1 M), L kolunda 0,1 M NaCl (i = 2, tanecik derişimi 0,2 M) vardır. Ozmozda çözücü, tanecik derişimi düşük taraftan yüksek tarafa net olarak geçer: su K kolundan L koluna geçer, I doğrudur. L koluna su geçtiği için bu koldaki sıvı seviyesi yükselir, II doğrudur. Yarı geçirgen zar çözünen taneciklerini geçirmez; Na+ ve Cl- iyonları K koluna geçemez, III yanlıştır. Doğru yargılar I ve II'dir. Molar derişimler eşit olduğu için hiç net akış olmayacağını düşünmek, NaCl'nin suda iki tanecik verdiğini gözden kaçırmaktır.",
        "en": "From the figure, arm K holds 0.1 M glucose (i = 1, particle concentration 0.1 M) and arm L holds 0.1 M NaCl (i = 2, particle concentration 0.2 M). In osmosis the solvent flows net from the side of lower particle concentration to the side of higher particle concentration: water moves from arm K to arm L, so I is correct. Because water enters arm L, its liquid level rises, so II is correct. The semipermeable membrane does not let solute particles through; Na+ and Cl- cannot move into arm K, so III is wrong. The correct statements are I and II. Expecting no net flow because the molar concentrations are equal overlooks that NaCl gives two particles in water.",
        "de": "Laut Abbildung enthält der Schenkel K 0,1 M Glucose (i = 1, Teilchenkonzentration 0,1 M) und der Schenkel L 0,1 M NaCl (i = 2, Teilchenkonzentration 0,2 M). Bei der Osmose wandert das Lösungsmittel netto von der Seite mit niedrigerer zur Seite mit höherer Teilchenkonzentration: Wasser gelangt von K nach L, I ist richtig. Da Wasser in den Schenkel L strömt, steigt dort der Flüssigkeitsstand, II ist richtig. Die semipermeable Membran lässt keine gelösten Teilchen durch; Na+ und Cl- können nicht nach K gelangen, III ist falsch. Richtig sind I und II. Wer wegen gleicher Stoffmengenkonzentrationen keinen Nettofluss erwartet, übersieht, dass NaCl in Wasser zwei Teilchen bildet.",
        "fr": "D'après la figure, la branche K contient du glucose à 0,1 M (i = 1, concentration en particules 0,1 M) et la branche L du NaCl à 0,1 M (i = 2, concentration en particules 0,2 M). En osmose, le solvant passe globalement du côté le moins concentré en particules vers le côté le plus concentré : l'eau va de K vers L, I est correcte. Comme l'eau entre dans la branche L, le niveau y monte, II est correcte. La membrane semi-perméable ne laisse pas passer les particules de soluté ; Na+ et Cl- ne peuvent pas aller dans K, III est fausse. Les affirmations correctes sont I et II. Ne prévoir aucun flux net parce que les concentrations molaires sont égales, c'est oublier que NaCl donne deux particules dans l'eau.",
        "ru": "По рисунку в колене K находится 0,1 M глюкоза (i = 1, концентрация частиц 0,1 M), в колене L — 0,1 M NaCl (i = 2, концентрация частиц 0,2 M). При осмосе растворитель в итоге переходит со стороны с меньшей концентрацией частиц в сторону с большей: вода переходит из K в L, I верно. Поскольку вода поступает в колено L, уровень жидкости в нём поднимается, II верно. Полупроницаемая мембрана не пропускает частицы растворённого вещества; Na+ и Cl- не могут перейти в K, III неверно. Верны I и II. Ожидать отсутствия потока из-за равных молярных концентраций — значит упустить, что NaCl даёт в воде две частицы.",
        "ar": "بحسب الشكل يحتوي الذراع K على جلوكوز تركيزه 0.1 M (i = 1، تركيز الجسيمات 0.1 M)، ويحتوي الذراع L على NaCl تركيزه 0.1 M (i = 2، تركيز الجسيمات 0.2 M). في الخاصية الأسموزية ينتقل المذيب انتقالًا صافيًا من الجهة الأقل تركيزًا بالجسيمات إلى الجهة الأعلى: ينتقل الماء من K إلى L، فالعبارة I صحيحة. ولأن الماء يدخل الذراع L يرتفع مستوى السائل فيه، فالعبارة II صحيحة. الغشاء شبه المنفذ لا يسمح بمرور جسيمات المذاب، فلا تنتقل أيونات Na+ وCl- إلى K، والعبارة III خاطئة. العبارتان الصحيحتان هما I و II. وتوقُّع عدم حدوث انتقال صافٍ لتساوي التراكيز المولارية إغفالٌ لكون NaCl يعطي جسيمين في الماء.",
        "zh": "由图可知，K 臂中是 0.1 M 葡萄糖（i = 1，粒子浓度 0.1 M），L 臂中是 0.1 M NaCl（i = 2，粒子浓度 0.2 M）。渗透时溶剂净地由粒子浓度低的一侧进入粒子浓度高的一侧：水由 K 臂进入 L 臂，I 正确。水进入 L 臂，L 臂液面升高，II 正确。半透膜不允许溶质粒子通过，Na+ 和 Cl- 不能进入 K 臂，III 错误。正确的是 I 和 II。认为物质的量浓度相等就不会有净渗透，是忽略了 NaCl 在水中电离出两个粒子。",
        "ku": "Li gorî şiklê di mila K de glîkoza 0,1 M (i = 1, tîrbûna perçeyan 0,1 M), di mila L de NaCl a 0,1 M (i = 2, tîrbûna perçeyan 0,2 M) heye. Di osmozê de helker bi awayekî net ji aliyê ku tîrbûna perçeyan lê nizm e ber bi aliyê bilind ve diçe: av ji mila K derbasî mila L dibe, I rast e. Ji ber ku av dikeve mila L, asta şileyê di vê milê de bilind dibe, II rast e. Perdeya nîv-derbasbar perçeyên madeya helbûyî derbas nake; îyonên Na+ û Cl- nikarin derbasî mila K bibin, III şaş e. Gotinên rast I û II ne. Hêviya ku ji ber wekheviya tîrbûnên molar tu herikîna net çênabe, ji bîrkirina vê yekê ye ku NaCl di avê de du perçeyan dide."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 228,
        "markup": "<path d='M80,80 H130 V170 H230 V80 H280 V200 H80 Z' class='qf-water'/><path d='M80,30 V200 H280 V30 M130,30 V170 H230 V30' class='qf-line'/><line x1='180' y1='166' x2='180' y2='204' class='qf-dash'/><text x='105' y='22' text-anchor='middle' class='qf-big'>K</text><text x='255' y='22' text-anchor='middle' class='qf-big'>L</text><text x='40' y='104' text-anchor='middle'>{{c}}</text><text x='40' y='122' text-anchor='middle'>C₆H₁₂O₆</text><text x='320' y='104' text-anchor='middle'>{{c}}</text><text x='320' y='122' text-anchor='middle'>NaCl</text><text x='180' y='220' text-anchor='middle' class='qf-small'>{{mem}}</text>",
        "labels": {
          "c": {
            "tr": "0,1 M",
            "en": "0.1 M",
            "de": "0,1 M",
            "fr": "0,1 M",
            "ru": "0,1 M",
            "ar": "0.1 M",
            "zh": "0.1 M",
            "ku": "0,1 M"
          },
          "mem": {
            "tr": "yarı geçirgen zar",
            "en": "semipermeable membrane",
            "de": "semipermeable Membran",
            "fr": "membrane semi-perméable",
            "ru": "полупроницаемая мембрана",
            "ar": "غشاء شبه منفذ",
            "zh": "半透膜",
            "ku": "perdeya nîv-derbasbar"
          }
        }
      }
    },
    {
      "id": "u15-twin13",
      "stem": {
        "tr": "25 °C'de X katısının sudaki çözünürlüğü 40 g/100 g su'dur. Aynı sıcaklıkta 150 g suya 70 g X eklenip karıştırılıyor. Kapta çözünmeden kalan katının tamamen çözünmesi için sıcaklık değiştirilmeden en az kaç gram su eklenmelidir?",
        "en": "At 25 °C the solubility of solid X in water is 40 g/100 g water. At the same temperature, 70 g of X is added to 150 g of water and stirred. What is the minimum mass of water, in grams, that must be added at the same temperature so that the undissolved solid dissolves completely?",
        "de": "Bei 25 °C beträgt die Löslichkeit des Feststoffs X in Wasser 40 g/100 g Wasser. Bei derselben Temperatur werden 70 g X zu 150 g Wasser gegeben und gerührt. Wie viel Gramm Wasser müssen bei gleicher Temperatur mindestens zugegeben werden, damit sich der ungelöste Feststoff vollständig löst?",
        "fr": "À 25 °C, la solubilité du solide X dans l'eau est de 40 g/100 g d'eau. À la même température, on ajoute 70 g de X à 150 g d'eau et on agite. Quelle masse minimale d'eau, en grammes, faut-il ajouter à la même température pour que le solide non dissous se dissolve entièrement ?",
        "ru": "При 25 °C растворимость твёрдого вещества X в воде равна 40 г на 100 г воды. При той же температуре к 150 г воды добавили 70 г X и перемешали. Какую наименьшую массу воды (г) нужно добавить, не меняя температуры, чтобы оставшееся на дне вещество полностью растворилось?",
        "ar": "عند 25 °C تبلغ ذائبية الصلب X في الماء 40 g/100 g ماء. وعند درجة الحرارة نفسها أُضيف 70 g من X إلى 150 g من الماء مع التحريك. ما أقل كتلة من الماء بالغرام يجب إضافتها عند درجة الحرارة نفسها ليذوب الصلب المتبقي ذوبانًا تامًا؟",
        "zh": "25 °C 时固体 X 在水中的溶解度为 40 g/100 g 水。在同一温度下，向 150 g 水中加入 70 g X 并搅拌。要使未溶解的固体完全溶解，在温度不变时至少还需加入多少克水？",
        "ku": "Li 25 °C helbûniya madeya hişk X di avê de 40 g/100 g av e. Di heman germahiyê de 70 g X li 150 g avê tê zêdekirin û tê tevlihevkirin. Ji bo ku madeya hişk a nehelbûyî ya di firaxê de bi tevahî bihele, bêyî guhertina germahiyê herî kêm çend gram av divê were zêdekirin?"
      },
      "options": [
        {
          "tr": "10 g",
          "en": "10 g",
          "de": "10 g",
          "fr": "10 g",
          "ru": "10 г",
          "ar": "10 g",
          "zh": "10 g",
          "ku": "10 g"
        },
        {
          "tr": "25 g",
          "en": "25 g",
          "de": "25 g",
          "fr": "25 g",
          "ru": "25 г",
          "ar": "25 g",
          "zh": "25 g",
          "ku": "25 g"
        },
        {
          "tr": "30 g",
          "en": "30 g",
          "de": "30 g",
          "fr": "30 g",
          "ru": "30 г",
          "ar": "30 g",
          "zh": "30 g",
          "ku": "30 g"
        },
        {
          "tr": "75 g",
          "en": "75 g",
          "de": "75 g",
          "fr": "75 g",
          "ru": "75 г",
          "ar": "75 g",
          "zh": "75 g",
          "ku": "75 g"
        },
        {
          "tr": "175 g",
          "en": "175 g",
          "de": "175 g",
          "fr": "175 g",
          "ru": "175 г",
          "ar": "175 g",
          "zh": "175 g",
          "ku": "175 g"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "150 g su en fazla 150 * 40 / 100 = 60 g X çözer; 70 - 60 = 10 g X dipte kalır. 100 g su 40 g X çözdüğüne göre 10 g X için 10 * 100 / 40 = 25 g su gerekir. 175 g, 70 g X'in tamamı için gereken toplam su kütlesidir; eklenecek miktar bundan mevcut 150 g çıkarılarak bulunur. 10 g ise su değil, dipte kalan katı kütlesidir.",
        "en": "150 g of water dissolves at most 150 * 40 / 100 = 60 g of X; 70 - 60 = 10 g of X remains at the bottom. Since 100 g of water dissolves 40 g of X, 10 g of X needs 10 * 100 / 40 = 25 g of water. 175 g is the total water needed for all 70 g of X; the amount to add is found by subtracting the 150 g already present. 10 g is the mass of undissolved solid, not of water.",
        "de": "150 g Wasser lösen höchstens 150 * 40 / 100 = 60 g X; 70 - 60 = 10 g X bleiben am Boden. Da 100 g Wasser 40 g X lösen, brauchen 10 g X 10 * 100 / 40 = 25 g Wasser. 175 g ist die gesamte für 70 g X nötige Wassermenge; die zuzugebende Menge erhält man durch Abzug der vorhandenen 150 g. 10 g ist die Masse des ungelösten Feststoffs, nicht des Wassers.",
        "fr": "150 g d'eau dissolvent au maximum 150 * 40 / 100 = 60 g de X ; 70 - 60 = 10 g de X restent au fond. Comme 100 g d'eau dissolvent 40 g de X, 10 g de X demandent 10 * 100 / 40 = 25 g d'eau. 175 g est la masse totale d'eau nécessaire pour les 70 g de X ; la quantité à ajouter s'obtient en retranchant les 150 g déjà présents. 10 g est la masse du solide non dissous, pas celle de l'eau.",
        "ru": "150 г воды растворяют не более 150 * 40 / 100 = 60 г X; 70 - 60 = 10 г X остаются на дне. Так как 100 г воды растворяют 40 г X, для 10 г X нужно 10 * 100 / 40 = 25 г воды. 175 г — это вся масса воды, нужная для растворения 70 г X; добавляемое количество находят, вычитая из неё уже имеющиеся 150 г. 10 г — масса нерастворившегося вещества, а не воды.",
        "ar": "يذيب 150 g من الماء على الأكثر 150 * 40 / 100 = 60 g من X؛ فيبقى 70 - 60 = 10 g من X في القاع. وبما أن 100 g من الماء تذيب 40 g من X، فإن 10 g من X تحتاج 10 * 100 / 40 = 25 g من الماء. أما 175 g فهي كتلة الماء الكلية اللازمة لإذابة 70 g من X، والكمية المضافة تُحسب بطرح 150 g الموجودة. و 10 g هي كتلة الصلب غير الذائب وليست كتلة ماء.",
        "zh": "150 g 水最多溶解 150 * 40 / 100 = 60 g X；剩下 70 - 60 = 10 g X 未溶解。100 g 水溶解 40 g X，所以 10 g X 需要 10 * 100 / 40 = 25 g 水。175 g 是溶解全部 70 g X 所需的总水量，需加入的水量要减去已有的 150 g。10 g 是未溶解固体的质量，不是水的质量。",
        "ku": "150 g av herî zêde 150 * 40 / 100 = 60 g X dihelîne; 70 - 60 = 10 g X li binî dimîne. Ji ber ku 100 g av 40 g X dihelîne, ji bo 10 g X 10 * 100 / 40 = 25 g av pêwîst e. 175 g girseya giştî ya avê ye ku ji bo hemû 70 g X pêwîst e; mîqdara ku divê were zêdekirin bi derxistina 150 g ya heyî jê tê dîtin. 10 g jî ne girseya avê, lê ya madeya hişk a ku li binî dimîne ye."
      }
    },
    {
      "id": "u15-twin14",
      "stem": {
        "tr": "Aşağıdaki olaylardan hangileri ozmoz ile ilgilidir? I. Kuru üzümün bir süre suda bekletildiğinde şişmesi II. Hastaya damar yoluyla saf su yerine kanla aynı ozmotik basınca sahip %0,9'luk NaCl çözeltisi (serum) verilmesi III. Deniz suyuna ozmotik basıncından büyük basınç uygulanarak içme suyu elde edilmesi",
        "en": "Which of the following phenomena are related to osmosis? I. Raisins swelling when left in water for a while II. Giving a patient an intravenous 0.9% NaCl solution (saline) with the same osmotic pressure as blood instead of pure water III. Obtaining drinking water by applying to seawater a pressure greater than its osmotic pressure",
        "de": "Welche der folgenden Vorgänge hängen mit Osmose zusammen? I. Rosinen quellen auf, wenn sie eine Weile in Wasser liegen. II. Einem Patienten wird statt reinem Wasser eine 0,9%ige NaCl-Lösung (Kochsalzlösung) mit demselben osmotischen Druck wie Blut intravenös gegeben. III. Aus Meerwasser wird Trinkwasser gewonnen, indem ein Druck angelegt wird, der größer als sein osmotischer Druck ist.",
        "fr": "Lesquels des phénomènes suivants sont liés à l'osmose ? I. Des raisins secs gonflent lorsqu'on les laisse quelque temps dans l'eau. II. On injecte à un patient, au lieu d'eau pure, une solution de NaCl à 0,9 % (sérum physiologique) ayant la même pression osmotique que le sang. III. On obtient de l'eau potable en appliquant à l'eau de mer une pression supérieure à sa pression osmotique.",
        "ru": "Какие из перечисленных явлений связаны с осмосом? I. Изюм набухает, если некоторое время подержать его в воде. II. Пациенту внутривенно вводят не чистую воду, а 0,9%-й раствор NaCl (физраствор) с тем же осмотическим давлением, что и у крови. III. Питьевую воду получают, прикладывая к морской воде давление, превышающее её осмотическое давление.",
        "ar": "أيّ الظواهر الآتية مرتبطة بالتناضح؟ I. انتفاخ الزبيب عند تركه في الماء مدة من الزمن II. إعطاء المريض وريديًا محلول NaCl بتركيز 0.9% (محلول ملحي) له الضغط التناضحي نفسه للدم بدلًا من الماء النقي III. الحصول على ماء الشرب بتطبيق ضغط على ماء البحر أكبر من ضغطه التناضحي",
        "zh": "下列现象中，哪些与渗透有关？I. 葡萄干在水中浸泡一段时间后膨胀 II. 给病人静脉输注与血液渗透压相同的 0.9% NaCl 溶液（生理盐水），而不是纯水 III. 对海水施加大于其渗透压的压强来获得饮用水",
        "ku": "Kîjan ji van bûyeran bi osmozê re têkildar in? I. Werimîna mêwîjê dema demekê di avê de dimîne II. Li şûna ava paqij, dayîna çareseriya NaCl ya %0,9 (serum) ku zexta wê ya osmotîk wek ya xwînê ye, bi rêya damarê ji nexweş re III. Bidestxistina ava vexwarinê bi sepandina zexteke ji zexta osmotîk mezintir li ser ava deryayê"
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
        "tr": "I: Üzüm hücrelerinin içi daha derişiktir; su yarı geçirgen zardan hücrelere geçer ve üzüm şişer. II: Saf su verilseydi su ozmozla kan hücrelerine geçip onları şişirerek patlatabilirdi; kanla aynı ozmotik basınçlı serum bu akışı önler. III: Ozmotik basınçtan büyük basınç uygulanınca su tuzlu taraftan saf tarafa geçer; bu ters ozmozdur ve ozmoz ilkesine dayanır. Üç olay da ozmozla ilgilidir; yollara tuz serpmek gibi örnekler ise donma noktası alçalmasıyla açıklanır.",
        "en": "I: The inside of the raisin cells is more concentrated; water passes through the semipermeable membrane into the cells and the raisin swells. II: If pure water were given, water would enter the blood cells by osmosis and could make them swell and burst; saline with the same osmotic pressure as blood prevents this flow. III: When a pressure greater than the osmotic pressure is applied, water passes from the salty side to the pure side; this is reverse osmosis and is based on the principle of osmosis. All three are related to osmosis; examples such as salting roads are explained by freezing point depression instead.",
        "de": "I: Das Zellinnere der Rosinen ist konzentrierter; Wasser tritt durch die semipermeable Membran in die Zellen ein und die Rosine quillt. II: Bei reinem Wasser würde Wasser osmotisch in die Blutzellen eindringen und sie zum Platzen bringen können; eine Lösung mit dem osmotischen Druck des Blutes verhindert diesen Fluss. III: Bei einem Druck über dem osmotischen Druck wandert Wasser von der salzigen zur reinen Seite; das ist Umkehrosmose und beruht auf dem Osmoseprinzip. Alle drei hängen mit Osmose zusammen; Beispiele wie Streusalz erklären sich dagegen durch Gefrierpunktserniedrigung.",
        "fr": "I : L'intérieur des cellules du raisin est plus concentré ; l'eau traverse la membrane semi-perméable vers les cellules et le raisin gonfle. II : Avec de l'eau pure, l'eau entrerait par osmose dans les globules et pourrait les faire éclater ; un sérum de même pression osmotique que le sang empêche ce flux. III : En appliquant une pression supérieure à la pression osmotique, l'eau passe du côté salé vers le côté pur ; c'est l'osmose inverse, fondée sur le principe de l'osmose. Les trois sont liés à l'osmose ; des exemples comme le salage des routes s'expliquent, eux, par l'abaissement du point de congélation.",
        "ru": "I: внутри клеток изюма раствор концентрированнее; вода проходит через полупроницаемую мембрану в клетки, и изюм набухает. II: при введении чистой воды вода путём осмоса проникала бы в клетки крови и могла бы, раздувая, разорвать их; физиологический раствор с тем же осмотическим давлением, что и у крови, предотвращает этот поток. III: при давлении выше осмотического вода переходит из солёной части в пресную; это обратный осмос, основанный на явлении осмоса. Все три явления связаны с осмосом; а такие примеры, как посыпание дорог солью, объясняются понижением температуры замерзания.",
        "ar": "I: داخل خلايا الزبيب أكثر تركيزًا؛ فيعبر الماء الغشاء شبه المنفذ إلى الخلايا وينتفخ الزبيب. II: لو أُعطي ماء نقي لدخل الماء خلايا الدم بالتناضح وقد يفجرها؛ والمحلول الملحي ذو الضغط التناضحي المساوي للدم يمنع هذا الانتقال. III: عند تطبيق ضغط أكبر من الضغط التناضحي ينتقل الماء من الجهة المالحة إلى الجهة النقية؛ وهذا هو التناضح العكسي القائم على مبدأ التناضح. الظواهر الثلاث مرتبطة بالتناضح، أما أمثلة مثل رش الملح على الطرق فتُفسَّر بالانخفاض في درجة التجمد.",
        "zh": "I：葡萄干细胞内溶液更浓，水透过半透膜进入细胞，葡萄干膨胀。II：若输注纯水，水会通过渗透进入血细胞，可能使其胀破；与血液渗透压相同的生理盐水可防止这种渗透流动。III：施加大于渗透压的压强时，水从盐水一侧进入纯水一侧，这就是反渗透，以渗透原理为基础。三者都与渗透有关；而路面撒盐之类的例子则用凝固点降低来解释。",
        "ku": "I: Hundirê şaneyên mêwîjê tîrtir e; av di perdeya nîvderbasbar re derbasî şaneyan dibe û mêwîj diwerime. II: Heke ava paqij bihata dayîn, av bi osmozê dê derbasî şaneyên xwînê bibûya û dikaribû wan bi werimandinê biteqîne; seruma ku zexta wê ya osmotîk wek ya xwînê ye rê li ber vê herikînê digire. III: Dema zexteke ji zexta osmotîk mezintir tê sepandin, av ji aliyê şor derbasî aliyê paqij dibe; ev osmoza berevajî ye û li ser prensîba osmozê ava bûye. Her sê bûyer jî bi osmozê re têkildar in; mînakên wek reşandina xwê li ser rêyan bi daketina xala cemidînê tên ravekirin."
      }
    },
    {
      "id": "u15-twin15",
      "stem": {
        "tr": "Bir otomobil radyatörü için 500 g suya 124 g etilen glikol (C2H6O2) eklenerek antifriz çözeltisi hazırlanıyor. Bu çözeltinin 1 atm'de donmaya başlama sıcaklığı kaç °C'dir? (C2H6O2 = 62 g/mol; su için Kd = 1,86 °C*kg/mol, Kk = 0,52 °C*kg/mol)",
        "en": "An antifreeze solution for a car radiator is prepared by adding 124 g of ethylene glycol (C2H6O2) to 500 g of water. At what temperature, in °C, does this solution start to freeze at 1 atm? (C2H6O2 = 62 g/mol; for water Kf = 1.86 °C*kg/mol, Kb = 0.52 °C*kg/mol)",
        "de": "Für einen Autokühler wird eine Frostschutzlösung hergestellt, indem 124 g Ethylenglykol (C2H6O2) zu 500 g Wasser gegeben werden. Bei welcher Temperatur in °C beginnt diese Lösung bei 1 atm zu gefrieren? (C2H6O2 = 62 g/mol; für Wasser Kg = 1,86 °C*kg/mol, Ks = 0,52 °C*kg/mol)",
        "fr": "Pour un radiateur de voiture, on prépare un antigel en ajoutant 124 g d'éthylène glycol (C2H6O2) à 500 g d'eau. À quelle température, en °C, cette solution commence-t-elle à geler sous 1 atm ? (C2H6O2 = 62 g/mol ; pour l'eau Kcong = 1,86 °C*kg/mol, Kéb = 0,52 °C*kg/mol)",
        "ru": "Для автомобильного радиатора готовят антифриз, добавляя 124 г этиленгликоля (C2H6O2) к 500 г воды. При какой температуре (°C) этот раствор начинает замерзать при 1 атм? (C2H6O2 = 62 г/моль; для воды Kкр = 1,86 °C*кг/моль, Kэб = 0,52 °C*кг/моль)",
        "ar": "يُحضَّر محلول مانع للتجمد لمشعّ سيارة بإضافة 124 g من الإيثيلين غليكول (C2H6O2) إلى 500 g من الماء. عند أي درجة حرارة (°C) يبدأ هذا المحلول بالتجمد تحت 1 atm؟ (C2H6O2 = 62 g/mol؛ للماء Kf = 1.86 °C*kg/mol و Kb = 0.52 °C*kg/mol)",
        "zh": "为汽车散热器配制防冻液：向 500 g 水中加入 124 g 乙二醇(C2H6O2)。该溶液在 1 atm 下开始凝固的温度是多少 °C？(C2H6O2 = 62 g/mol；水的 Kf = 1.86 °C*kg/mol，Kb = 0.52 °C*kg/mol)",
        "ku": "Ji bo radyatora otomobîlê, bi zêdekirina 124 g etîlen glîkol (C2H6O2) li 500 g avê çareseriyeke antîfrîzê tê amadekirin. Ev çareserî di 1 atm de di çend °C de dest bi cemidînê dike? (C2H6O2 = 62 g/mol; ji bo avê Kd = 1,86 °C*kg/mol, Kk = 0,52 °C*kg/mol)"
      },
      "options": [
        {
          "tr": "-14,88 °C",
          "en": "-14.88 °C",
          "de": "-14,88 °C",
          "fr": "-14,88 °C",
          "ru": "-14,88 °C",
          "ar": "-14.88 °C",
          "zh": "-14.88 °C",
          "ku": "-14,88 °C"
        },
        {
          "tr": "-7,44 °C",
          "en": "-7.44 °C",
          "de": "-7,44 °C",
          "fr": "-7,44 °C",
          "ru": "-7,44 °C",
          "ar": "-7.44 °C",
          "zh": "-7.44 °C",
          "ku": "-7,44 °C"
        },
        {
          "tr": "-3,72 °C",
          "en": "-3.72 °C",
          "de": "-3,72 °C",
          "fr": "-3,72 °C",
          "ru": "-3,72 °C",
          "ar": "-3.72 °C",
          "zh": "-3.72 °C",
          "ku": "-3,72 °C"
        },
        {
          "tr": "-2,08 °C",
          "en": "-2.08 °C",
          "de": "-2,08 °C",
          "fr": "-2,08 °C",
          "ru": "-2,08 °C",
          "ar": "-2.08 °C",
          "zh": "-2.08 °C",
          "ku": "-2,08 °C"
        },
        {
          "tr": "-1,86 °C",
          "en": "-1.86 °C",
          "de": "-1,86 °C",
          "fr": "-1,86 °C",
          "ru": "-1,86 °C",
          "ar": "-1.86 °C",
          "zh": "-1.86 °C",
          "ku": "-1,86 °C"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "n = 124 / 62 = 2 mol. m = 2 / 0,5 = 4 m. Etilen glikol moleküler olduğundan i = 1. ΔTd = Kd * m * i = 1,86 * 4 * 1 = 7,44 °C; donma noktası 0 - 7,44 = -7,44 °C. Suyu 1 kg almak -3,72 °C'yi, etilen glikolü iyonlaşıyor sayıp i = 2 almak -14,88 °C'yi, Kd yerine Kk kullanmak -2,08 °C'yi verir.",
        "en": "n = 124 / 62 = 2 mol. m = 2 / 0.5 = 4 m. Ethylene glycol is molecular, so i = 1. ΔTf = Kf * m * i = 1.86 * 4 * 1 = 7.44 °C; freezing point = 0 - 7.44 = -7.44 °C. Taking the water as 1 kg gives -3.72 °C, treating ethylene glycol as ionizing (i = 2) gives -14.88 °C, and using Kb instead of Kf gives -2.08 °C.",
        "de": "n = 124 / 62 = 2 mol. m = 2 / 0,5 = 4 m. Ethylenglykol ist molekular, daher i = 1. ΔTg = Kg * m * i = 1,86 * 4 * 1 = 7,44 °C; Gefrierpunkt = 0 - 7,44 = -7,44 °C. Das Wasser als 1 kg zu nehmen ergibt -3,72 °C, Ethylenglykol als dissoziierend (i = 2) zu behandeln ergibt -14,88 °C, Ks statt Kg zu verwenden ergibt -2,08 °C.",
        "fr": "n = 124 / 62 = 2 mol. m = 2 / 0,5 = 4 m. L'éthylène glycol est moléculaire, donc i = 1. ΔTcong = Kcong * m * i = 1,86 * 4 * 1 = 7,44 °C ; point de congélation = 0 - 7,44 = -7,44 °C. Prendre l'eau comme 1 kg donne -3,72 °C, considérer l'éthylène glycol comme ionisé (i = 2) donne -14,88 °C, et utiliser Kéb au lieu de Kcong donne -2,08 °C.",
        "ru": "n = 124 / 62 = 2 моль. m = 2 / 0,5 = 4 моль/кг. Этиленгликоль — молекулярное вещество, i = 1. ΔTзам = Kкр * m * i = 1,86 * 4 * 1 = 7,44 °C; температура замерзания = 0 - 7,44 = -7,44 °C. Если взять массу воды за 1 кг, получится -3,72 °C; если считать этиленгликоль диссоциирующим (i = 2) — -14,88 °C; если взять Kэб вместо Kкр — -2,08 °C.",
        "ar": "n = 124 / 62 = 2 mol. m = 2 / 0.5 = 4 m. الإيثيلين غليكول مادة جزيئية، لذا i = 1. ΔTf = Kf * m * i = 1.86 * 4 * 1 = 7.44 °C؛ درجة التجمد = 0 - 7.44 = -7.44 °C. أخذ الماء على أنه 1 kg يعطي -3.72 °C، واعتبار الإيثيلين غليكول متأينًا (i = 2) يعطي -14.88 °C، واستخدام Kb بدل Kf يعطي -2.08 °C.",
        "zh": "n = 124 / 62 = 2 mol。m = 2 / 0.5 = 4 mol/kg。乙二醇是分子型物质，i = 1。ΔTf = Kf * m * i = 1.86 * 4 * 1 = 7.44 °C；凝固点 = 0 - 7.44 = -7.44 °C。把水按 1 kg 计算得 -3.72 °C；把乙二醇当作电离(i = 2)得 -14.88 °C；误用 Kb 代替 Kf 得 -2.08 °C。",
        "ku": "n = 124 / 62 = 2 mol. m = 2 / 0,5 = 4 m. Etîlen glîkol molekulî ye, loma i = 1. ΔTd = Kd * m * i = 1,86 * 4 * 1 = 7,44 °C; xala cemidînê 0 - 7,44 = -7,44 °C. Girtina avê wek 1 kg -3,72 °C, hesibandina etîlen glîkolê wek îyonîzebûyî (i = 2) -14,88 °C, bikaranîna Kk li şûna Kd jî -2,08 °C dide."
      }
    },
    {
      "id": "u15-twin16",
      "stem": {
        "tr": "25 °C'de kapalı bir kapta, uçucu olmayan şekerin sulu çözeltisi kendi buharıyla dengededir. Bu sistemle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        "en": "In a closed container at 25 °C, an aqueous solution of non-volatile sugar is in equilibrium with its vapor. Which of the following statements about this system is false?",
        "de": "In einem geschlossenen Gefäß steht bei 25 °C eine wässrige Lösung von nichtflüchtigem Zucker mit ihrem Dampf im Gleichgewicht. Welche der folgenden Aussagen über dieses System ist falsch?",
        "fr": "Dans un récipient fermé à 25 °C, une solution aqueuse de sucre non volatil est en équilibre avec sa vapeur. Laquelle des affirmations suivantes sur ce système est fausse ?",
        "ru": "В закрытом сосуде при 25 °C водный раствор нелетучего сахара находится в равновесии со своим паром. Какое из утверждений об этой системе неверно?",
        "ar": "في وعاء مغلق عند 25 °C يكون محلول مائي لسكر غير متطاير في حالة اتزان مع بخاره. أيّ العبارات الآتية عن هذا النظام خاطئة؟",
        "zh": "25 °C 时，在一个密闭容器中，非挥发性糖的水溶液与其蒸气处于平衡状态。关于该体系，下列说法中哪一项是错误的？",
        "ku": "Li 25 °C di firaxeke girtî de çareseriya avî ya şekirê nefirok bi buhara xwe re di hevsengiyê de ye. Kîjan ji van gotinan li ser vê sîstemê şaş e?"
      },
      "options": [
        {
          "tr": "Çözeltinin buhar basıncı aynı sıcaklıktaki saf suyunkinden düşüktür.",
          "en": "The vapor pressure of the solution is lower than that of pure water at the same temperature.",
          "de": "Der Dampfdruck der Lösung ist niedriger als der von reinem Wasser bei gleicher Temperatur.",
          "fr": "La pression de vapeur de la solution est plus faible que celle de l'eau pure à la même température.",
          "ru": "Давление пара раствора ниже, чем у чистой воды при той же температуре.",
          "ar": "ضغط بخار المحلول أقل من ضغط بخار الماء النقي عند درجة الحرارة نفسها.",
          "zh": "该溶液的蒸气压低于同温下纯水的蒸气压。",
          "ku": "Zexta buharê ya çareseriyê ji ya ava paqij a di heman germahiyê de nizmtir e."
        },
        {
          "tr": "Çözeltiye aynı sıcaklıkta saf su eklenirse buhar basıncı artar.",
          "en": "If pure water is added to the solution at the same temperature, its vapor pressure increases.",
          "de": "Gibt man bei gleicher Temperatur reines Wasser zur Lösung, steigt ihr Dampfdruck.",
          "fr": "Si l'on ajoute de l'eau pure à la solution à la même température, sa pression de vapeur augmente.",
          "ru": "Если добавить к раствору чистую воду при той же температуре, давление пара увеличится.",
          "ar": "إذا أُضيف ماء نقي إلى المحلول عند درجة الحرارة نفسها يزداد ضغط بخاره.",
          "zh": "在同温下向溶液中加入纯水，其蒸气压增大。",
          "ku": "Ger di heman germahiyê de ava paqij li çareseriyê were zêdekirin, zexta wê ya buharê zêde dibe."
        },
        {
          "tr": "Sıcaklık artırılırsa çözeltinin buhar basıncı artar.",
          "en": "If the temperature is raised, the vapor pressure of the solution increases.",
          "de": "Wird die Temperatur erhöht, steigt der Dampfdruck der Lösung.",
          "fr": "Si l'on augmente la température, la pression de vapeur de la solution augmente.",
          "ru": "При повышении температуры давление пара раствора увеличивается.",
          "ar": "إذا رُفعت درجة الحرارة يزداد ضغط بخار المحلول.",
          "zh": "升高温度，溶液的蒸气压增大。",
          "ku": "Ger germahî were bilindkirin, zexta buharê ya çareseriyê zêde dibe."
        },
        {
          "tr": "Çözeltide bir miktar daha şeker çözülürse buhar basıncı azalır.",
          "en": "If some more sugar is dissolved in the solution, its vapor pressure decreases.",
          "de": "Löst man noch etwas Zucker in der Lösung, sinkt ihr Dampfdruck.",
          "fr": "Si l'on dissout encore un peu de sucre dans la solution, sa pression de vapeur diminue.",
          "ru": "Если растворить в растворе ещё немного сахара, давление пара уменьшится.",
          "ar": "إذا أُذيبت كمية أخرى من السكر في المحلول يقل ضغط بخاره.",
          "zh": "在溶液中再溶解一些糖，其蒸气压减小。",
          "ku": "Ger hinek şekirê din di çareseriyê de were helandin, zexta buharê kêm dibe."
        },
        {
          "tr": "Kaba aynı sıcaklıkta, aynı derişimde bir miktar daha şeker çözeltisi eklenirse buhar basıncı artar.",
          "en": "If some more sugar solution of the same concentration is added to the container at the same temperature, the vapor pressure increases.",
          "de": "Gibt man bei gleicher Temperatur noch etwas Zuckerlösung derselben Konzentration in das Gefäß, steigt der Dampfdruck.",
          "fr": "Si l'on ajoute dans le récipient, à la même température, un peu plus de solution sucrée de même concentration, la pression de vapeur augmente.",
          "ru": "Если добавить в сосуд при той же температуре ещё немного раствора сахара той же концентрации, давление пара увеличится.",
          "ar": "إذا أُضيفت إلى الوعاء عند درجة الحرارة نفسها كمية أخرى من محلول السكر بالتركيز نفسه يزداد ضغط البخار.",
          "zh": "在同温下向容器中再加入一些相同浓度的糖溶液，蒸气压增大。",
          "ku": "Ger di heman germahiyê de hinek çareseriya şekir a bi heman tîrbûnê li firaxê were zêdekirin, zexta buharê zêde dibe."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Çözeltinin buhar basıncı sıcaklığa ve çözücünün mol kesrine bağlıdır, sıvının miktarına bağlı değildir. Aynı derişimli çözelti eklemek bileşimi değiştirmediğinden buhar basıncı değişmez; yanlış ifade budur. Şeker çözündüğü için Xsu < 1'dir ve buhar basıncı saf sudan düşüktür; su eklemek Xsu'yu artırarak buhar basıncını yükseltir, şeker eklemek Xsu'yu azaltarak düşürür; sıcaklık artışı buharlaşmayı artırarak buhar basıncını yükseltir.",
        "en": "The vapor pressure of the solution depends on temperature and on the mole fraction of the solvent, not on the amount of liquid. Adding solution of the same concentration does not change the composition, so the vapor pressure does not change; this is the false statement. Because sugar is dissolved, Xwater < 1 and the vapor pressure is lower than that of pure water; adding water raises Xwater and the vapor pressure, adding sugar lowers both; raising the temperature increases evaporation and the vapor pressure.",
        "de": "Der Dampfdruck der Lösung hängt von der Temperatur und vom Stoffmengenanteil des Lösungsmittels ab, nicht von der Flüssigkeitsmenge. Zugabe von Lösung gleicher Konzentration ändert die Zusammensetzung nicht, daher bleibt der Dampfdruck gleich; das ist die falsche Aussage. Da Zucker gelöst ist, gilt XWasser < 1 und der Dampfdruck liegt unter dem von reinem Wasser; Wasserzugabe erhöht XWasser und den Dampfdruck, Zuckerzugabe senkt beides; Temperaturerhöhung verstärkt das Verdampfen und erhöht den Dampfdruck.",
        "fr": "La pression de vapeur de la solution dépend de la température et de la fraction molaire du solvant, pas de la quantité de liquide. Ajouter une solution de même concentration ne change pas la composition, donc la pression de vapeur ne change pas : c'est l'affirmation fausse. Le sucre étant dissous, Xeau < 1 et la pression de vapeur est inférieure à celle de l'eau pure ; ajouter de l'eau augmente Xeau et la pression de vapeur, ajouter du sucre les diminue ; élever la température augmente l'évaporation et la pression de vapeur.",
        "ru": "Давление пара раствора зависит от температуры и мольной доли растворителя, а не от количества жидкости. Добавление раствора той же концентрации не меняет состав, поэтому давление пара не изменяется; это и есть неверное утверждение. Так как сахар растворён, Xводы < 1 и давление пара ниже, чем у чистой воды; добавление воды увеличивает Xводы и давление пара, добавление сахара уменьшает их; повышение температуры усиливает испарение и увеличивает давление пара.",
        "ar": "يعتمد ضغط بخار المحلول على درجة الحرارة وعلى الكسر المولي للمذيب، لا على كمية السائل. إضافة محلول بالتركيز نفسه لا تغير التركيب، فلا يتغير ضغط البخار؛ وهذه هي العبارة الخاطئة. ولأن السكر مذاب يكون Xwater < 1 ويكون ضغط البخار أقل من ضغط بخار الماء النقي؛ إضافة الماء ترفع Xwater وضغط البخار، وإضافة السكر تخفضهما؛ ورفع درجة الحرارة يزيد التبخر فيرتفع ضغط البخار.",
        "zh": "溶液的蒸气压取决于温度和溶剂的物质的量分数，与液体的多少无关。加入相同浓度的溶液不改变组成，所以蒸气压不变；这就是错误的说法。由于溶有糖，X水 < 1，蒸气压低于纯水；加水使 X水 增大、蒸气压升高，加糖则使二者减小；升高温度使蒸发加剧，蒸气压升高。",
        "ku": "Zexta buharê ya çareseriyê bi germahiyê û bi kerta molî ya helker ve girêdayî ye, ne bi mîqdara şileyê. Zêdekirina çareseriya bi heman tîrbûnê pêkhatina çareseriyê naguherîne, ji ber vê yekê zexta buharê naguhere; gotina şaş ev e. Ji ber ku şekir helbûyî ye, Xav < 1 e û zexta buharê ji ya ava paqij nizmtir e; zêdekirina avê Xav zêde dike û zexta buharê bilind dike, zêdekirina şekir Xav kêm dike û zexta buharê dadixe; bilindkirina germahiyê buharbûnê zêde dike û zexta buharê bilind dike."
      }
    }
  ]
};

export default unit15;
