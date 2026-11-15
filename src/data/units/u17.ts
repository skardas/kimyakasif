import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit17: ChemistryUnitSeedData = {
  "id": "u17",
  "order": 17,
  "exam": "AYT",
  "grade": 11,
  "title": {
    "tr": "Kimyasal Tepkimelerde Hız",
    "en": "Reaction Rates",
    "de": "Reaktionsgeschwindigkeit",
    "fr": "Vitesse de Réaction",
    "ru": "Скорость химических реакций",
    "ar": "سرعة التفاعلات الكيميائية",
    "zh": "化学反应速率",
    "ku": "Lez di Reaksiyonên Kîmyewî de"
  },
  "subtitle": {
    "tr": "Çarpışma Teorisi, Hız Denklemi ve Katalizör",
    "en": "Collision Theory, Rate Law & Catalysts",
    "de": "Kollisionstheorie, Geschwindigkeitsgleichung und Katalysator",
    "fr": "Théorie des collisions, loi de vitesse et catalyseur",
    "ru": "Теория столкновений, кинетическое уравнение и катализ",
    "ar": "نظرية التصادم وقانون السرعة والحفاز",
    "zh": "碰撞理论、速率方程和催化剂",
    "ku": "Teoriya Lihevketinê, Hevkêşeya Lezê û Katalîzor"
  },
  "facts": [
    {
      "id": "u17-f01",
      "fact": {
        "tr": "Çarpışma teorisine göre etkin çarpışma için taneciklerin yeterli kinetik enerjiye (Ea) ve uygun geometrik yönelime sahip olması gerekir.",
        "en": "According to collision theory, for effective collision, the particles must have sufficient kinetic energy (Ea) and appropriate geometric orientation.",
        "de": "Gemäß der Kollisionstheorie müssen die Teilchen für eine effektive Kollision über eine ausreichende kinetische Energie (Ea) und eine geeignete geometrische Ausrichtung verfügen.",
        "fr": "Selon la théorie des collisions, pour qu’une collision soit efficace, les particules doivent avoir une énergie cinétique (Ea) suffisante et une orientation géométrique appropriée.",
        "ru": "Согласно теории столкновений, столкновение эффективно, если частицы обладают достаточной кинетической энергией (не ниже Ea) и благоприятной пространственной ориентацией.",
        "ar": "وفقًا لنظرية التصادم، يجب أن تمتلك الجسيمات طاقة حركية كافية (Ea) واتجاهًا هندسيًا مناسبًا لكي يحدث تصادم فعال.",
        "zh": "根据碰撞理论，要发生有效碰撞，粒子必须具有足够的动能(Ea)和合适的碰撞取向。",
        "ku": "Li gorî teoriya lihevketinê, ji bo lihevketineke bibandor divê perçe xwedî enerjiya kînetîk a têr (Ea) û arasteya geometrîk a guncav bin."
      },
      "trap": {
        "tr": "Tanecikler her çarpıştığında mutlaka kimyasal tepkime gerçekleşir.",
        "en": "Every time particles collide, a chemical reaction takes place.",
        "de": "Jedes Mal, wenn Teilchen kollidieren, findet eine chemische Reaktion statt.",
        "fr": "Chaque fois que des particules entrent en collision, une réaction chimique se produit.",
        "ru": "Любое столкновение частиц обязательно приводит к химической реакции.",
        "ar": "كلما تصادمت الجسيمات حدث تفاعل كيميائي حتمًا.",
        "zh": "粒子每次碰撞都一定会发生化学反应。",
        "ku": "Her cara ku perçe li hev dikevin, bê guman reaksiyoneke kîmyewî pêk tê."
      },
      "whyTrapIsFalse": {
        "tr": "Çarpışmaların yalnızca küçük bir kısmı etkindir: eşik enerjisine (Ea) ulaşamayan ya da uygun yönelimde olmayan tanecikler çarpışıp ürün oluşturmadan birbirinden ayrılır.",
        "en": "Only a small fraction of collisions are effective: particles that do not reach the threshold energy (Ea) or are not suitably oriented simply bounce apart without forming products.",
        "de": "Nur ein kleiner Teil der Stöße ist wirksam: Teilchen, die die Schwellenenergie (Ea) nicht erreichen oder ungünstig ausgerichtet sind, prallen ohne Produktbildung wieder auseinander.",
        "fr": "Seule une petite partie des collisions est efficace : les particules qui n'atteignent pas l'énergie seuil (Ea) ou qui sont mal orientées se séparent sans former de produits.",
        "ru": "Эффективна лишь малая доля столкновений: частицы, не достигшие пороговой энергии (Ea) или неудачно ориентированные, разлетаются, не образуя продуктов.",
        "ar": "جزء صغير فقط من التصادمات فعّال: فالجسيمات التي لا تبلغ طاقة العتبة (Ea) أو لا يكون اتجاهها مناسبًا ترتد عن بعضها دون أن تكوّن نواتج.",
        "zh": "只有一小部分碰撞是有效碰撞：能量未达到阈能(Ea)或取向不合适的粒子碰撞后直接弹开，不生成产物。",
        "ku": "Tenê beşeke piçûk a lihevketinan bibandor e: perçeyên ku nagihîjin enerjiya sînor (Ea) an arasteya wan ne guncav e, li hev dikevin û bêyî ku hilber çêkin ji hev vediqetin."
      }
    },
    {
      "id": "u17-f02",
      "fact": {
        "tr": "Tepkime hızı, birim zamanda harcanan girenin ya da oluşan ürünün derişimindeki değişimdir (r = -Δ[giren]/Δt = +Δ[ürün]/Δt); sabit sıcaklıkta girenler harcandıkça hız genellikle zamanla azalır.",
        "en": "Reaction rate is the change in the concentration of a reactant consumed or a product formed per unit time (r = -Δ[reactant]/Δt = +Δ[product]/Δt); at constant temperature the rate generally decreases with time as the reactants are used up.",
        "de": "Die Reaktionsgeschwindigkeit ist die Änderung der Konzentration eines verbrauchten Edukts oder eines gebildeten Produkts pro Zeiteinheit (r = -Δ[Edukt]/Δt = +Δ[Produkt]/Δt); bei konstanter Temperatur nimmt sie im Allgemeinen mit der Zeit ab, weil die Edukte verbraucht werden.",
        "fr": "La vitesse de réaction est la variation de la concentration d'un réactif consommé ou d'un produit formé par unité de temps (r = -Δ[réactif]/Δt = +Δ[produit]/Δt) ; à température constante, elle diminue généralement au cours du temps à mesure que les réactifs sont consommés.",
        "ru": "Скорость реакции — изменение концентрации расходуемого реагента или образующегося продукта в единицу времени (r = -Δ[реагент]/Δt = +Δ[продукт]/Δt); при постоянной температуре она, как правило, уменьшается со временем по мере расходования реагентов.",
        "ar": "سرعة التفاعل هي التغيّر في تركيز المادة المتفاعلة المستهلكة أو الناتج المتكوّن في وحدة الزمن (r = -Δ[متفاعل]/Δt = +Δ[ناتج]/Δt)؛ وعند ثبوت درجة الحرارة تقلّ السرعة عادةً مع الزمن كلما استُهلكت المتفاعلات.",
        "zh": "反应速率是单位时间内反应物浓度的减少或生成物浓度的增加(r = -Δ[反应物]/Δt = +Δ[生成物]/Δt)；在恒温下，随着反应物被消耗，速率通常随时间减小。",
        "ku": "Leza reaksiyonê guherîna tîrbûna reaktanta ku tê xerckirin an hilbera ku çêdibe di yekîneya demê de ye (r = -Δ[reaktant]/Δt = +Δ[hilber]/Δt); di germahiya sabît de, her ku reaktant tên xerckirin, lez bi gelemperî bi demê re kêm dibe."
      },
      "trap": {
        "tr": "Sabit sıcaklıkta tepkime ilerledikçe tepkime hızı zamanla artar.",
        "en": "At constant temperature, the reaction rate increases with time as the reaction proceeds.",
        "de": "Bei konstanter Temperatur nimmt die Reaktionsgeschwindigkeit im Verlauf der Reaktion mit der Zeit zu.",
        "fr": "À température constante, la vitesse de réaction augmente avec le temps au fur et à mesure de la réaction.",
        "ru": "При постоянной температуре скорость реакции со временем, по мере её протекания, возрастает.",
        "ar": "عند ثبات درجة الحرارة تزداد سرعة التفاعل مع الزمن كلما تقدّم التفاعل.",
        "zh": "恒温下，随着反应的进行，反应速率随时间增大。",
        "ku": "Di germahiya sabît de, her ku reaksiyon pêş ve diçe, leza reaksiyonê bi demê re zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Sabit sıcaklıkta tepkime ilerledikçe reaktifler harcanır ve derişimleri azalır; birim hacimdeki çarpışma sayısı düştüğü için hız zamanla artmaz, azalır.",
        "en": "At constant temperature, reactants are used up as the reaction proceeds and their concentrations fall; with fewer collisions per unit volume the rate decreases over time instead of increasing.",
        "de": "Bei konstanter Temperatur werden die Edukte im Reaktionsverlauf verbraucht und ihre Konzentrationen sinken; da es weniger Stöße pro Volumeneinheit gibt, nimmt die Geschwindigkeit mit der Zeit ab statt zu.",
        "fr": "À température constante, les réactifs sont consommés au cours de la réaction et leurs concentrations diminuent ; avec moins de collisions par unité de volume, la vitesse diminue au lieu d'augmenter.",
        "ru": "При постоянной температуре реагенты расходуются, их концентрации падают; число столкновений в единице объёма уменьшается, поэтому скорость со временем снижается, а не растёт.",
        "ar": "عند ثبات درجة الحرارة تُستهلك المتفاعلات مع تقدّم التفاعل فتقل تراكيزها؛ ولأن عدد التصادمات في وحدة الحجم يقل فإن السرعة تتناقص مع الزمن ولا تزداد.",
        "zh": "恒温下，随着反应进行，反应物被消耗，浓度降低；单位体积内的碰撞次数减少，所以反应速率随时间减小而不是增大。",
        "ku": "Di germahiya sabît de, her ku reaksiyon pêş ve diçe reaktant tên xerckirin û tîrbûna wan kêm dibe; ji ber ku hejmara lihevketinan di yekîneya qebareyê de kêm dibe, lez bi demê re zêde nabe, kêm dibe."
      }
    },
    {
      "id": "u17-f03",
      "fact": {
        "tr": "Hız denklemi sadece gaz ve suda çözünmüş (aq) maddelerin derişimlerine göre yazılır; saf katı ve sıvılar hız bağıntısında yer almaz.",
        "en": "The rate equation is written only in terms of the concentrations of gases and of substances dissolved in water (aq); pure solids and liquids are not included in the rate expression.",
        "de": "Die Geschwindigkeitsgleichung wird nur mit den Konzentrationen von Gasen und in Wasser gelösten Stoffen (aq) aufgestellt; reine Feststoffe und Flüssigkeiten erscheinen nicht im Geschwindigkeitsgesetz.",
        "fr": "L'équation de vitesse s'écrit uniquement avec les concentrations des gaz et des substances dissoutes dans l'eau (aq) ; les solides et liquides purs n'apparaissent pas dans la loi de vitesse.",
        "ru": "Кинетическое уравнение записывают только через концентрации газов и растворённых в воде веществ (р-р); чистые твёрдые вещества и жидкости в него не входят.",
        "ar": "لا يُكتب قانون السرعة إلا بدلالة تراكيز الغازات والمواد المذابة في الماء (aq)؛ ولا تدخل المواد الصلبة والسوائل النقية فيه.",
        "zh": "速率方程只用气体和水溶液中溶质(aq)的浓度来书写；纯固体和纯液体不出现在速率表达式中。",
        "ku": "Hevkêşeya lezê tenê li gorî tîrbûna gazan û madeyên di avê de helbûyî (aq) tê nivîsandin; madeyên hişk û şile yên paqij di hevkêşeya lezê de cih nagirin."
      },
      "trap": {
        "tr": "Saf katıların derişimi de hız bağıntısında yer alır.",
        "en": "The concentrations of pure solids also appear in the rate law.",
        "de": "Auch die Konzentrationen reiner Feststoffe gehen in das Geschwindigkeitsgesetz ein.",
        "fr": "Les concentrations des solides purs figurent aussi dans la loi de vitesse.",
        "ru": "Концентрации чистых твёрдых веществ тоже входят в кинетическое уравнение.",
        "ar": "تدخل تراكيز المواد الصلبة النقية أيضًا في قانون السرعة.",
        "zh": "纯固体的浓度也要写入速率方程。",
        "ku": "Tîrbûna madeyên hişk ên paqij jî di hevkêşeya lezê de cih digire."
      },
      "whyTrapIsFalse": {
        "tr": "Saf katı ve sıvıların derişimi (yoğunluk / mol kütlesi) sabittir ve tepkime boyunca değişmez; bu yüzden hız bağıntısına yazılmaz. Katının hıza etkisi miktarıyla değil temas yüzeyiyle olur.",
        "en": "The concentration of a pure solid or liquid (density / molar mass) is constant and does not change during the reaction, so it is not written in the rate law. A solid affects the rate through its surface area, not its amount.",
        "de": "Die Konzentration reiner Feststoffe und Flüssigkeiten (Dichte / molare Masse) ist konstant und ändert sich während der Reaktion nicht; daher erscheint sie nicht im Geschwindigkeitsgesetz. Ein Feststoff wirkt über seine Oberfläche, nicht über seine Menge.",
        "fr": "La concentration d'un solide ou d'un liquide pur (masse volumique / masse molaire) est constante et ne varie pas pendant la réaction ; elle n'apparaît donc pas dans la loi de vitesse. Un solide agit par sa surface de contact, non par sa quantité.",
        "ru": "Концентрация чистого твёрдого вещества или жидкости (плотность / молярная масса) постоянна и в ходе реакции не меняется, поэтому её не записывают в кинетическое уравнение. Твёрдое вещество влияет на скорость площадью поверхности, а не количеством.",
        "ar": "تركيز المادة الصلبة أو السائلة النقية (الكثافة / الكتلة المولية) ثابت ولا يتغير أثناء التفاعل، لذلك لا يُكتب في قانون السرعة. وتؤثر المادة الصلبة في السرعة بمساحة سطحها لا بكميتها.",
        "zh": "纯固体和纯液体的浓度(密度/摩尔质量)是常数，在反应中不变，因此不写入速率方程。固体对速率的影响取决于其表面积而不是其用量。",
        "ku": "Tîrbûna madeyên hişk û şile yên paqij (çirî / girseya molî) sabît e û di dema reaksiyonê de naguhere; ji ber vê yekê di hevkêşeya lezê de nayê nivîsandin. Bandora madeya hişk li ser lezê ne bi mîqdara wê, bi rûbera wê ya têkiliyê ye."
      }
    },
    {
      "id": "u17-f04",
      "fact": {
        "tr": "Çok basamaklı (mekanizmalı) tepkimelerde hız bağıntısı en yavaş basamağın girenlerine göre yazılır.",
        "en": "In multistep reactions (reactions with a mechanism), the rate law is written from the reactants of the slowest step.",
        "de": "Bei mehrstufigen Reaktionen (Reaktionen mit Mechanismus) wird das Geschwindigkeitsgesetz aus den Edukten des langsamsten Schritts aufgestellt.",
        "fr": "Dans les réactions en plusieurs étapes (à mécanisme), la loi de vitesse s'écrit à partir des réactifs de l'étape la plus lente.",
        "ru": "В многостадийных реакциях кинетическое уравнение записывают по реагентам самой медленной (лимитирующей) стадии.",
        "ar": "في التفاعلات متعددة الخطوات (ذات الآلية) يُكتب قانون السرعة بدلالة متفاعلات الخطوة الأبطأ.",
        "zh": "对于多步反应（有反应机理的反应），速率方程按最慢一步的反应物书写。",
        "ku": "Di reaksiyonên pirgavî (bi mekanîzma) de hevkêşeya lezê li gorî reaktantên gava herî hêdî tê nivîsandin."
      },
      "trap": {
        "tr": "Basamaklı tepkimelerde hız en hızlı basamağa göre belirlenir.",
        "en": "In stepwise reactions, the rate is determined by the fastest step.",
        "de": "Bei schrittweisen Reaktionen wird die Geschwindigkeit durch den schnellsten Schritt bestimmt.",
        "fr": "Dans les réactions par étapes, la vitesse est déterminée par l’étape la plus rapide.",
        "ru": "В многостадийных реакциях скорость определяется самой быстрой стадией.",
        "ar": "في التفاعلات متعددة الخطوات تحدد الخطوةُ الأسرع سرعةَ التفاعل.",
        "zh": "对于分步进行的反应，反应速率由最快的一步决定。",
        "ku": "Di reaksiyonên pirgavî de lez li gorî gava herî bilez tê diyarkirin."
      },
      "whyTrapIsFalse": {
        "tr": "Ardışık basamaklarda ürün, darboğaz olan en yavaş basamağın hızından daha hızlı oluşamaz; hızlı basamaklar yavaş basamağın ürününü beklemek zorundadır.",
        "en": "In consecutive steps the product cannot form faster than the slowest step, which acts as a bottleneck; the fast steps must wait for the product of the slow step.",
        "de": "Bei aufeinanderfolgenden Schritten kann das Produkt nicht schneller entstehen als im langsamsten Schritt, der wie ein Engpass wirkt; die schnellen Schritte müssen auf dessen Produkt warten.",
        "fr": "Dans des étapes successives, le produit ne peut pas se former plus vite que l'étape la plus lente, qui agit comme un goulot d'étranglement ; les étapes rapides doivent attendre son produit.",
        "ru": "При последовательных стадиях продукт не может образовываться быстрее, чем идёт самая медленная стадия — «узкое место» процесса; быстрые стадии вынуждены ждать её продуктов.",
        "ar": "في الخطوات المتتالية لا يمكن أن يتكون الناتج أسرع من الخطوة الأبطأ التي تمثل عنق الزجاجة؛ فالخطوات السريعة تضطر إلى انتظار ناتج الخطوة البطيئة.",
        "zh": "在连续的各步中，最终产物的生成速率不可能超过最慢的一步，它是“瓶颈”；快步骤必须等待慢步骤的产物。",
        "ku": "Di gavên li pey hev de hilber nikare ji leza gava herî hêdî zûtir çêbibe; ew gav wekî qirika şûşeyê ye û gavên bilez neçar in li benda hilbera wê bimînin."
      }
    },
    {
      "id": "u17-f05",
      "fact": {
        "tr": "Sıcaklık, derişim ve temas yüzeyinden farklı olarak katalizör, tepkimeye aktifleşme enerjisi (Ea) daha düşük yeni bir yol (mekanizma) sağlar; tepkime entalpisini (ΔH) değiştirmez.",
        "en": "Unlike temperature, concentration and surface area, a catalyst provides the reaction with a new pathway (mechanism) of lower activation energy (Ea); it does not change the reaction enthalpy (ΔH).",
        "de": "Anders als Temperatur, Konzentration und Oberfläche bietet ein Katalysator der Reaktion einen neuen Weg (Mechanismus) mit niedrigerer Aktivierungsenergie (Ea); die Reaktionsenthalpie (ΔH) ändert er nicht.",
        "fr": "Contrairement à la température, à la concentration et à la surface de contact, un catalyseur offre à la réaction un nouveau chemin (mécanisme) d'énergie d'activation (Ea) plus faible ; il ne modifie pas l'enthalpie de réaction (ΔH).",
        "ru": "В отличие от температуры, концентрации и площади поверхности, катализатор открывает реакции новый путь (механизм) с более низкой энергией активации (Ea); энтальпию реакции (ΔH) он не меняет.",
        "ar": "على خلاف درجة الحرارة والتركيز ومساحة السطح، يوفّر الحفاز للتفاعل مسارًا (آلية) جديدًا بطاقة تنشيط (Ea) أقل؛ ولا يغيّر المحتوى الحراري للتفاعل (ΔH).",
        "zh": "与温度、浓度和接触面积不同，催化剂为反应提供一条活化能(Ea)更低的新途径（机理）；它不改变反应焓变(ΔH)。",
        "ku": "Berevajî germahî, tîrbûn û rûbera têkiliyê, katalîzor ji reaksiyonê re rêyeke nû (mekanîzmayeke nû) bi enerjiya aktîvasyonê (Ea) ya kêmtir peyda dike; entalpiya reaksiyonê (ΔH) naguherîne."
      },
      "trap": {
        "tr": "Katalizör tepkime entalpisini (ΔH) düşürerek tepkimeyi hızlandırır.",
        "en": "A catalyst speeds up a reaction by lowering the reaction enthalpy (ΔH).",
        "de": "Ein Katalysator beschleunigt eine Reaktion, indem er die Reaktionsenthalpie (ΔH) senkt.",
        "fr": "Un catalyseur accélère une réaction en abaissant l'enthalpie de réaction (ΔH).",
        "ru": "Катализатор ускоряет реакцию, понижая энтальпию реакции (ΔH).",
        "ar": "يسرّع الحفاز التفاعل عن طريق خفض المحتوى الحراري للتفاعل (ΔH).",
        "zh": "催化剂通过降低反应焓变(ΔH)来加快反应。",
        "ku": "Katalîzor bi kêmkirina entalpiya reaksiyonê (ΔH) reaksiyonê bileztir dike."
      },
      "whyTrapIsFalse": {
        "tr": "ΔH yalnızca girenlerin ve ürünlerin potansiyel enerjisine bağlıdır ve katalizör bunları değiştirmez; katalizör ileri ve geri aktifleşme enerjilerini aynı miktarda düşürerek hızlandırır.",
        "en": "ΔH depends only on the potential energies of reactants and products, which a catalyst does not change; the catalyst speeds up the reaction by lowering the forward and reverse activation energies by the same amount.",
        "de": "ΔH hängt nur von den potenziellen Energien der Edukte und Produkte ab, die ein Katalysator nicht verändert; er beschleunigt, indem er Hin- und Rück-Aktivierungsenergie um denselben Betrag senkt.",
        "fr": "ΔH ne dépend que des énergies potentielles des réactifs et des produits, que le catalyseur ne modifie pas ; il accélère la réaction en abaissant d'autant les énergies d'activation directe et inverse.",
        "ru": "ΔH зависит только от потенциальных энергий реагентов и продуктов, которые катализатор не меняет; он ускоряет реакцию, снижая энергии активации прямой и обратной реакций на одну и ту же величину.",
        "ar": "تعتمد ΔH فقط على الطاقة الكامنة للمتفاعلات والنواتج، والحفاز لا يغيّرها؛ بل يسرّع التفاعل بخفض طاقتي تنشيط التفاعلين الأمامي والعكسي بالمقدار نفسه.",
        "zh": "ΔH只取决于反应物和生成物的势能，催化剂不改变它们；催化剂通过使正、逆反应活化能降低相同的数值来加快反应。",
        "ku": "ΔH tenê bi enerjiya potansiyel a reaktant û hilberan ve girêdayî ye û katalîzor wan naguherîne; katalîzor bi kêmkirina enerjiyên aktîvasyonê yên pêşve û paşve bi heman mîqdarê reaksiyonê bileztir dike."
      },
      "osymTip": {
        "tr": "ÖSYM tuzağı: Katalizör Ea'yı düşürür, ΔH'ı değiştirmez!",
        "en": "ÖSYM trap: Catalyst reduces Ea, DOES NOT CHANGE ΔH!",
        "de": "ÖSYM-Falle: Katalysator reduziert Ea, VERÄNDERT ΔH NICHT!",
        "fr": "Piège ÖSYM : le catalyseur réduit Ea, NE CHANGE PAS ΔH !",
        "ru": "Ловушка на экзамене: катализатор снижает Ea, но НЕ меняет ΔH!",
        "ar": "فخ شائع في الامتحان: الحفاز يقلل Ea، ولا يغير ΔH!",
        "zh": "考试陷阱：催化剂降低 Ea，但不改变 ΔH！",
        "ku": "Xefika ÖSYM-ê: Katalîzor Ea kêm dike, ΔH naguherîne!"
      }
    },
    {
      "id": "u17-f06",
      "fact": {
        "tr": "Sıcaklık artışı hem endotermik hem ekzotermik tüm tepkimelerin hızını ve hız sabiti k'yı artırır.",
        "en": "Increasing temperature increases the rate and rate constant k of all endothermic and exothermic reactions.",
        "de": "Mit zunehmender Temperatur erhöhen sich die Geschwindigkeit und die Geschwindigkeitskonstante k aller endothermen und exothermen Reaktionen.",
        "fr": "L'augmentation de la température augmente la vitesse et la constante de vitesse k de toutes les réactions endothermiques et exothermiques.",
        "ru": "Повышение температуры увеличивает скорость и константу скорости k любых реакций — как эндотермических, так и экзотермических.",
        "ar": "يؤدي رفع درجة الحرارة إلى زيادة سرعة جميع التفاعلات، الماصة والطاردة للحرارة، وزيادة ثابت السرعة k.",
        "zh": "升高温度会使所有反应（无论吸热还是放热）的速率和速率常数 k 增大。",
        "ku": "Zêdebûna germahiyê leza hemû reaksiyonan, çi endotermîk çi ekzotermîk, û sabîta lezê k zêde dike."
      },
      "trap": {
        "tr": "Ekzotermik tepkimelerde sıcaklık arttıkça tepkime hızı yavaşlar.",
        "en": "In exothermic reactions, as the temperature increases, the reaction rate slows down.",
        "de": "Bei exothermen Reaktionen verlangsamt sich die Reaktionsgeschwindigkeit mit steigender Temperatur.",
        "fr": "Dans les réactions exothermiques, à mesure que la température augmente, la vitesse de réaction ralentit.",
        "ru": "В экзотермических реакциях при повышении температуры скорость реакции уменьшается.",
        "ar": "في التفاعلات الطاردة للحرارة تقل سرعة التفاعل كلما ارتفعت درجة الحرارة.",
        "zh": "对于放热反应，温度升高时反应速率减慢。",
        "ku": "Di reaksiyonên ekzotermîk de, her ku germahî zêde dibe leza reaksiyonê hêdî dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Bu, Le Chatelier ilkesiyle karıştırılan bir yanılgıdır: ısıtma ekzotermik tepkimenin dengesini girenler yönüne kaydırır, ama hem ileri hem geri tepkimenin hızı ve k değeri artar.",
        "en": "This confuses kinetics with Le Chatelier's principle: heating shifts the equilibrium of an exothermic reaction toward reactants, but the rates and rate constants of both the forward and reverse reactions increase.",
        "de": "Hier wird Kinetik mit dem Prinzip von Le Chatelier verwechselt: Erwärmen verschiebt das Gleichgewicht einer exothermen Reaktion zu den Edukten, doch Geschwindigkeit und k von Hin- und Rückreaktion steigen beide.",
        "fr": "On confond ici cinétique et principe de Le Chatelier : chauffer déplace l'équilibre d'une réaction exothermique vers les réactifs, mais les vitesses et les constantes k des réactions directe et inverse augmentent toutes deux.",
        "ru": "Здесь кинетику путают с принципом Ле Шателье: нагревание смещает равновесие экзотермической реакции в сторону реагентов, но скорости и константы скорости k и прямой, и обратной реакций растут.",
        "ar": "هذا خلط بين الحركية ومبدأ لوشاتلييه: التسخين يزيح اتزان التفاعل الطارد للحرارة نحو المتفاعلات، لكن سرعة التفاعلين الأمامي والعكسي وثابتيهما k تزداد كلها.",
        "zh": "这是把动力学与勒夏特列原理混淆了：升温使放热反应的平衡向反应物方向移动，但正、逆反应的速率和速率常数 k 都增大。",
        "ku": "Ev şaşiyek e ku ji tevlihevkirina bi prensîba Le Chatelier re tê: germkirin hevsengiya reaksiyona ekzotermîk ber bi aliyê reaktantan ve dikişîne, lê hem leza reaksiyona pêşve û paşve hem jî nirxa k zêde dibin."
      }
    },
    {
      "id": "u17-f07",
      "fact": {
        "tr": "Sıcaklık artışı aktifleşme enerjisini (Ea) değiştirmez; Ea'yı aşacak kinetik enerjiye sahip tanecik sayısını artırarak tepkimeyi hızlandırır.",
        "en": "Raising the temperature does NOT change the activation energy (Ea); it speeds up the reaction by increasing the number of particles with enough kinetic energy to exceed Ea.",
        "de": "Eine Temperaturerhöhung verändert die Aktivierungsenergie (Ea) NICHT; sie beschleunigt die Reaktion, indem mehr Teilchen genug kinetische Energie haben, um Ea zu überschreiten.",
        "fr": "Une hausse de température ne modifie PAS l'énergie d'activation (Ea) ; elle accélère la réaction en augmentant le nombre de particules dont l'énergie cinétique dépasse Ea.",
        "ru": "Повышение температуры НЕ меняет энергию активации (Ea); оно ускоряет реакцию, увеличивая число частиц с кинетической энергией, достаточной для преодоления Ea.",
        "ar": "رفع درجة الحرارة لا يغيّر طاقة التنشيط (Ea)؛ بل يسرّع التفاعل بزيادة عدد الجسيمات التي تملك طاقة حركية كافية لتجاوز Ea.",
        "zh": "升高温度不改变活化能(Ea)；它通过增加动能足以超过 Ea 的粒子数来加快反应。",
        "ku": "Zêdebûna germahiyê enerjiya aktîvasyonê (Ea) naguherîne; bi zêdekirina hejmara perçeyên ku xwedî enerjiya kînetîk a têr in ji bo derbaskirina Ea, reaksiyonê bileztir dike."
      },
      "trap": {
        "tr": "Sıcaklık artışı aktifleşme enerjisini düşürerek tepkimeyi hızlandırır.",
        "en": "Increasing temperature accelerates the reaction by decreasing the activation energy.",
        "de": "Eine Erhöhung der Temperatur beschleunigt die Reaktion durch Verringerung der Aktivierungsenergie.",
        "fr": "L'augmentation de la température accélère la réaction en diminuant l'énergie d'activation.",
        "ru": "Повышение температуры ускоряет реакцию за счёт снижения энергии активации.",
        "ar": "يؤدي رفع درجة الحرارة إلى تسريع التفاعل بخفض طاقة التنشيط.",
        "zh": "升高温度是通过降低活化能来加快反应的。",
        "ku": "Zêdebûna germahiyê bi kêmkirina enerjiya aktîvasyonê reaksiyonê bileztir dike."
      },
      "whyTrapIsFalse": {
        "tr": "Aktifleşme enerjisi tepkimenin izlediği yola (mekanizmaya) bağlıdır, sıcaklıkla değişmez; ısıtma taneciklerin kinetik enerjisini artırır ve Ea'yı aşan tanecik sayısını çoğaltır.",
        "en": "Activation energy depends on the pathway (mechanism), not on temperature; heating raises the particles' kinetic energy so that more of them exceed Ea.",
        "de": "Die Aktivierungsenergie hängt vom Reaktionsweg (Mechanismus) ab, nicht von der Temperatur; Erwärmen erhöht die kinetische Energie, sodass mehr Teilchen Ea überschreiten.",
        "fr": "L'énergie d'activation dépend du chemin réactionnel (mécanisme), pas de la température ; chauffer augmente l'énergie cinétique des particules, si bien que davantage d'entre elles dépassent Ea.",
        "ru": "Энергия активации определяется путём реакции (механизмом), а не температурой; нагревание повышает кинетическую энергию частиц, и больше из них преодолевает Ea.",
        "ar": "تعتمد طاقة التنشيط على مسار التفاعل (آليته) لا على درجة الحرارة؛ فالتسخين يرفع الطاقة الحركية للجسيمات فيزداد عدد ما يتجاوز منها Ea.",
        "zh": "活化能取决于反应途径（机理），与温度无关；升温提高粒子的动能，使更多粒子的能量超过Ea。",
        "ku": "Enerjiya aktîvasyonê bi rêya ku reaksiyon dişopîne (mekanîzmayê) ve girêdayî ye û bi germahiyê naguhere; germkirin enerjiya kînetîk a perçeyan zêde dike û hejmara perçeyên ku Ea derbas dikin zêde dike."
      }
    },
    {
      "id": "u17-f08",
      "fact": {
        "tr": "Temas yüzeyi arttıkça (katıyı toz hâline getirmek) sadece heterojen tepkimelerin hızı ve k sabiti artar.",
        "en": "As the contact surface increases (turning the solid into powder), only the rate of heterogeneous reactions and the constant k increase.",
        "de": "Mit zunehmender Kontaktfläche (Umwandlung des Feststoffs in Pulver) nehmen nur die Geschwindigkeit heterogener Reaktionen und die Konstante k zu.",
        "fr": "À mesure que la surface de contact augmente (transformant le solide en poudre), seules la vitesse des réactions hétérogènes et la constante k augmentent.",
        "ru": "При увеличении площади поверхности контакта (измельчении твёрдого вещества в порошок) возрастают скорость и константа k только гетерогенных реакций.",
        "ar": "بزيادة مساحة سطح التلامس (تحويل المادة الصلبة إلى مسحوق) تزداد سرعة التفاعلات غير المتجانسة وثابت سرعتها k فقط.",
        "zh": "增大接触面积（将固体研成粉末）只会使非均相反应的速率和速率常数 k 增大。",
        "ku": "Her ku rûbera têkiliyê zêde dibe (bi hûrkirina madeya hişk heta ku bibe toz), tenê leza reaksiyonên heterojen û sabîta wan a k zêde dibe."
      },
      "trap": {
        "tr": "Temas yüzeyinin artması homojen gaz tepkimelerinin hızını artırır.",
        "en": "Increasing the contact surface increases the rate of homogeneous gas reactions.",
        "de": "Durch die Vergrößerung der Kontaktfläche erhöht sich die Geschwindigkeit homogener Gasreaktionen.",
        "fr": "L'augmentation de la surface de contact augmente la vitesse des réactions gazeuses homogènes.",
        "ru": "Увеличение площади поверхности контакта повышает скорость гомогенных газовых реакций.",
        "ar": "زيادة مساحة سطح التلامس تزيد سرعة تفاعلات الغازات المتجانسة.",
        "zh": "增大接触面积能加快均相气体反应的速率。",
        "ku": "Zêdebûna rûbera têkiliyê leza reaksiyonên gazî yên homojen zêde dike."
      },
      "whyTrapIsFalse": {
        "tr": "Homojen gaz karışımında tanecikler tüm hacme zaten dağılmıştır, fazlar arasında bir sınır yüzeyi yoktur; temas yüzeyi yalnızca farklı fazların buluştuğu heterojen tepkimelerde etkilidir.",
        "en": "In a homogeneous gas mixture the particles are already spread through the whole volume and there is no phase boundary; surface area matters only in heterogeneous reactions where different phases meet.",
        "de": "In einem homogenen Gasgemisch sind die Teilchen bereits im ganzen Volumen verteilt, es gibt keine Phasengrenze; die Kontaktfläche zählt nur bei heterogenen Reaktionen, wo verschiedene Phasen aufeinandertreffen.",
        "fr": "Dans un mélange gazeux homogène, les particules occupent déjà tout le volume et il n'y a pas d'interface ; la surface de contact n'intervient que dans les réactions hétérogènes, où des phases différentes se rencontrent.",
        "ru": "В гомогенной газовой смеси частицы уже распределены по всему объёму и границы фаз нет; площадь поверхности важна только в гетерогенных реакциях, где встречаются разные фазы.",
        "ar": "في خليط غازي متجانس تكون الجسيمات منتشرة أصلًا في الحجم كله ولا يوجد سطح فاصل بين أطوار؛ فمساحة سطح التلامس تؤثر فقط في التفاعلات غير المتجانسة حيث تلتقي أطوار مختلفة.",
        "zh": "在均相气体混合物中，粒子本来就分布在整个体积内，不存在相界面；接触面积只在不同相相遇的非均相反应中起作用。",
        "ku": "Di tevliheviya gazî ya homojen de perçe jixwe li hemû qebareyê belav bûne û di navbera fazan de rûyekî sînor tune; rûbera têkiliyê tenê di reaksiyonên heterojen de, ku fazên cuda li hev dicivin, bandor dike."
      }
    },
    {
      "id": "u17-f09",
      "fact": {
        "tr": "Ara ürün, bir basamakta oluşup sonraki basamakta harcanan maddedir; net tepkime denkleminde yer almaz.",
        "en": "An intermediate is a species formed in one step and consumed in a later step; it does not appear in the net equation.",
        "de": "Ein Zwischenprodukt ist ein Stoff, der in einem Schritt gebildet und in einem späteren Schritt verbraucht wird; es erscheint nicht in der Nettogleichung.",
        "fr": "Un intermédiaire réactionnel est une espèce formée dans une étape et consommée dans une étape ultérieure ; il n'apparaît pas dans l'équation bilan.",
        "ru": "Промежуточное вещество образуется на одной стадии и расходуется на следующей; в суммарном уравнении реакции его нет.",
        "ar": "المركب الوسيط مادة تتكوّن في خطوة وتُستهلك في خطوة لاحقة؛ ولا يظهر في معادلة التفاعل الصافية.",
        "zh": "中间产物是在某一步生成、在后一步被消耗的物质；它不出现在总反应方程式中。",
        "ku": "Hilbera navber madeyek e ku di gavekê de çêdibe û di gava pişt re de tê xerckirin; di hevkêşeya reaksiyonê ya net de cih nagire."
      },
      "trap": {
        "tr": "Ara ürün tepkimenin başında eklenen katalizördür.",
        "en": "The intermediate is the catalyst added at the beginning of the reaction.",
        "de": "Das Zwischenprodukt ist der zu Beginn der Reaktion zugesetzte Katalysator.",
        "fr": "L'intermédiaire réactionnel est le catalyseur ajouté au début de la réaction.",
        "ru": "Промежуточное вещество — это катализатор, который вводят в начале реакции.",
        "ar": "المركب الوسيط هو الحفاز المضاف في بداية التفاعل.",
        "zh": "中间产物就是反应开始时加入的催化剂。",
        "ku": "Hilbera navber ew katalîzor e ku di destpêka reaksiyonê de tê lêzêdekirin."
      },
      "whyTrapIsFalse": {
        "tr": "Katalizör tepkimenin başında eklenir ve sonunda aynen geri kazanılır; ara ürün ise bir basamakta oluşup sonraki basamakta harcanır. İkisi de net denklemde görünmez ama oluşma sıraları terstir.",
        "en": "A catalyst is added at the start and recovered unchanged at the end, whereas an intermediate is formed in one step and consumed in a later one. Neither appears in the net equation, but their order of appearance is opposite.",
        "de": "Ein Katalysator wird zu Beginn zugesetzt und am Ende unverändert zurückgewonnen, ein Zwischenprodukt dagegen in einem Schritt gebildet und in einem späteren verbraucht. Beide fehlen in der Nettogleichung, treten aber in umgekehrter Reihenfolge auf.",
        "fr": "Le catalyseur est ajouté au départ et récupéré inchangé à la fin, alors qu'un intermédiaire se forme dans une étape et est consommé dans une étape ultérieure. Aucun n'apparaît dans l'équation bilan, mais leur ordre d'apparition est inverse.",
        "ru": "Катализатор вводят в начале и в конце получают обратно неизменным, а промежуточное вещество образуется на одной стадии и расходуется на следующей. Оба отсутствуют в суммарном уравнении, но порядок их появления противоположен.",
        "ar": "يُضاف الحفاز في بداية التفاعل ويُسترد دون تغيّر في نهايته، أما المركب الوسيط فيتكوّن في خطوة ويُستهلك في خطوة لاحقة. كلاهما لا يظهر في المعادلة الصافية لكن ترتيب ظهورهما معكوس.",
        "zh": "催化剂在开始时加入、在结束时原样再生；中间产物则在某一步生成、在后一步被消耗。二者都不出现在总反应方程式中，但出现顺序正好相反。",
        "ku": "Katalîzor di destpêka reaksiyonê de tê lêzêdekirin û di dawiyê de wekî xwe dîsa tê bidestxistin; hilbera navber jî di gavekê de çêdibe û di gava pişt re de tê xerckirin. Her du jî di hevkêşeya net de xuya nakin, lê rêza çêbûn û xerckirina wan berevajî ye."
      }
    },
    {
      "id": "u17-f10",
      "fact": {
        "tr": "Katalizör tepkimede net olarak harcanmaz; tepkime sonunda kimyasal olarak değişmeden ve aynı miktarda geri kazanılır, net tepkime denkleminde yer almaz.",
        "en": "A catalyst is not consumed overall; it is recovered chemically unchanged and in the same amount at the end, and it does not appear in the net equation.",
        "de": "Ein Katalysator wird insgesamt nicht verbraucht; er wird am Ende chemisch unverändert und in gleicher Menge zurückgewonnen und erscheint nicht in der Nettogleichung.",
        "fr": "Un catalyseur n'est pas consommé globalement ; il est récupéré chimiquement inchangé et en même quantité à la fin, et n'apparaît pas dans l'équation bilan.",
        "ru": "Катализатор в итоге не расходуется: по окончании реакции его получают химически неизменным и в том же количестве, поэтому в суммарном уравнении его нет.",
        "ar": "لا يُستهلك الحفاز في المحصلة؛ إذ يُسترد في نهاية التفاعل دون تغيّر كيميائي وبالكمية نفسها، ولا يظهر في المعادلة الصافية.",
        "zh": "催化剂在反应中没有净消耗；反应结束时，它的质量和化学性质都不变，不出现在总反应方程式中。",
        "ku": "Katalîzor di reaksiyonê de bi awayekî net nayê xerckirin; di dawiya reaksiyonê de bêyî guherîna kîmyewî û bi heman mîqdarê dîsa tê bidestxistin û di hevkêşeya reaksiyonê ya net de cih nagire."
      },
      "trap": {
        "tr": "Katalizör tepkime sonunda tükenerek yok olur.",
        "en": "The catalyst is consumed and destroyed at the end of the reaction.",
        "de": "Am Ende der Reaktion wird der Katalysator verbraucht und zerstört.",
        "fr": "Le catalyseur est consommé et détruit à la fin de la réaction.",
        "ru": "К концу реакции катализатор полностью расходуется и исчезает.",
        "ar": "يُستهلك الحفاز ويفنى في نهاية التفاعل.",
        "zh": "催化剂在反应结束时被消耗殆尽。",
        "ku": "Katalîzor di dawiya reaksiyonê de diqede û ji holê radibe."
      },
      "whyTrapIsFalse": {
        "tr": "Katalizör bir basamakta harcansa bile sonraki basamakta yeniden oluşur; tepkime sonunda kütlesi ve kimyasal yapısı değişmez, bu yüzden az miktarı tekrar tekrar iş görür.",
        "en": "Even if a catalyst is used up in one step, it is regenerated in a later step; at the end its mass and chemical identity are unchanged, which is why a small amount can act again and again.",
        "de": "Selbst wenn ein Katalysator in einem Schritt verbraucht wird, entsteht er in einem späteren Schritt neu; am Ende sind Masse und chemische Identität unverändert, daher wirkt schon eine kleine Menge immer wieder.",
        "fr": "Même s'il est consommé dans une étape, le catalyseur est régénéré dans une étape suivante ; à la fin, sa masse et sa nature chimique sont inchangées, c'est pourquoi une petite quantité agit encore et encore.",
        "ru": "Даже если катализатор расходуется на одной стадии, на следующей он образуется снова; в конце реакции его масса и химический состав не меняются, поэтому небольшое его количество работает многократно.",
        "ar": "حتى لو استُهلك الحفاز في خطوة فإنه يتجدّد في خطوة لاحقة؛ وفي النهاية تبقى كتلته وطبيعته الكيميائية دون تغيير، ولذلك تعمل كمية صغيرة منه مرات عديدة.",
        "zh": "即使催化剂在某一步被消耗，它也会在后一步重新生成；反应结束时其质量和化学性质不变，所以少量催化剂可以反复起作用。",
        "ku": "Heke katalîzor di gavekê de were xerckirin jî, di gava pişt re de dîsa çêdibe; di dawiya reaksiyonê de girse û avahiya wê ya kîmyewî naguhere, ji ber vê yekê mîqdareke kêm dîsa û dîsa kar dike."
      }
    },
    {
      "id": "u17-f11",
      "fact": {
        "tr": "Hız sabiti k'nın birimi: (L/mol)^(n-1) * s^-1'dir (n: tepkimenin toplam derecesi).",
        "en": "The unit of the rate constant k is: (L/mol)^(n-1) * s^-1 (n: overall order of the reaction).",
        "de": "Die Einheit der Geschwindigkeitskonstante k ist: (L/mol)^(n-1) * s^-1 (n: Gesamtordnung der Reaktion).",
        "fr": "L'unité de la constante de vitesse k est : (L/mol)^(n-1) * s^-1 (n : ordre global de la réaction).",
        "ru": "Единица константы скорости k: (л/моль)^(n-1) * с^-1, где n — общий порядок реакции.",
        "ar": "وحدة ثابت السرعة k هي: (L/mol)^(n-1) * s^-1 (n: الرتبة الكلية للتفاعل).",
        "zh": "速率常数 k 的单位为 (L/mol)^(n-1) * s^-1，其中 n 为反应的总级数。",
        "ku": "Yekîneya sabîta lezê k ev e: (L/mol)^(n-1) * s^-1 (n: pileya giştî ya reaksiyonê)."
      },
      "trap": {
        "tr": "Hız sabiti k'nın birimi tepkime derecesinden bağımsızdır.",
        "en": "The unit of the rate constant k is independent of the order of the reaction.",
        "de": "Die Einheit der Geschwindigkeitskonstante k ist unabhängig von der Reaktionsordnung.",
        "fr": "L'unité de la constante de vitesse k est indépendante de l'ordre de la réaction.",
        "ru": "Единица константы скорости k не зависит от порядка реакции.",
        "ar": "وحدة ثابت السرعة k مستقلة عن رتبة التفاعل.",
        "zh": "速率常数 k 的单位与反应级数无关。",
        "ku": "Yekîneya sabîta lezê k bi pileya reaksiyonê ve ne girêdayî ye."
      },
      "whyTrapIsFalse": {
        "tr": "Tepkime hızının birimi her zaman mol/(L·s)'dir; bu birimi sağlamak için k'nın birimi derişimlerin toplam üssüne göre değişmek zorundadır (1. derecede s^-1, 2. derecede L/(mol·s)).",
        "en": "The rate is always in mol/(L·s); to give this unit, the unit of k must change with the total exponent of the concentrations (s^-1 for first order, L/(mol·s) for second order).",
        "de": "Die Geschwindigkeit hat immer die Einheit mol/(L·s); damit das stimmt, muss sich die Einheit von k mit der Summe der Exponenten ändern (1. Ordnung s^-1, 2. Ordnung L/(mol·s)).",
        "fr": "La vitesse s'exprime toujours en mol/(L·s) ; pour obtenir cette unité, l'unité de k doit changer avec la somme des exposants (s^-1 à l'ordre 1, L/(mol·s) à l'ordre 2).",
        "ru": "Скорость реакции всегда выражается в моль/(л·с); чтобы получить эту единицу, единица k должна меняться в зависимости от суммы показателей степеней при концентрациях (с^-1 для первого порядка, л/(моль·с) для второго).",
        "ar": "وحدة السرعة دائمًا mol/(L·s)؛ ولكي نحصل على هذه الوحدة يجب أن تتغيّر وحدة k بحسب مجموع الأسس (s^-1 للرتبة الأولى، L/(mol·s) للرتبة الثانية).",
        "zh": "速率的单位总是 mol/(L·s)；为了得到这一单位，k 的单位必须随浓度指数之和而变化(一级为 s^-1，二级为 L/(mol·s))。",
        "ku": "Yekîneya leza reaksiyonê her tim mol/(L·s) e; ji bo ku ev yekîne derkeve, divê yekîneya k li gorî koma hêzên tîrbûnan biguhere (di pileya 1. de s^-1, di pileya 2. de L/(mol·s))."
      }
    },
    {
      "id": "u17-f12",
      "fact": {
        "tr": "Tepkime derecesi, deneysel hız bağıntısındaki derişimlerin üsleri toplamıdır.",
        "en": "The order of a reaction is the sum of the exponents of the concentrations in the experimental rate law.",
        "de": "Die Reaktionsordnung ist die Summe der Exponenten der Konzentrationen im experimentellen Geschwindigkeitsgesetz.",
        "fr": "L'ordre de réaction est la somme des exposants des concentrations dans la loi de vitesse expérimentale.",
        "ru": "Порядок реакции равен сумме показателей степеней при концентрациях в экспериментальном кинетическом уравнении.",
        "ar": "رتبة التفاعل هي مجموع أسس التراكيز في قانون السرعة التجريبي.",
        "zh": "反应级数是实验速率方程中各浓度指数之和。",
        "ku": "Pileya reaksiyonê koma hêzên tîrbûnan e di hevkêşeya lezê ya ceribandinî de."
      },
      "trap": {
        "tr": "Tepkime derecesi net tepkimenin stokiyometrik katsayıları toplamına eşittir.",
        "en": "The order of a reaction is equal to the sum of the stoichiometric coefficients of the net reaction.",
        "de": "Die Reaktionsordnung ist gleich der Summe der stöchiometrischen Koeffizienten der Nettoreaktion.",
        "fr": "L'ordre de réaction est égal à la somme des coefficients stœchiométriques de la réaction nette.",
        "ru": "Порядок реакции равен сумме стехиометрических коэффициентов суммарной реакции.",
        "ar": "رتبة التفاعل تساوي مجموع المعاملات المتكافئة للتفاعل الصافي.",
        "zh": "反应级数等于总反应方程式中各化学计量数之和。",
        "ku": "Pileya reaksiyonê wekhevî koma hevberên stokiyometrîk ên reaksiyona net e."
      },
      "whyTrapIsFalse": {
        "tr": "Katsayılar ancak tek basamaklı (temel) tepkimelerde üslere eşittir; çok basamaklı tepkimelerde derece deneyle ya da yavaş basamaktan bulunur, net denklemin katsayılarından okunamaz.",
        "en": "Coefficients equal the exponents only for single-step (elementary) reactions; for multistep reactions the order is found by experiment or from the slow step and cannot be read from the net equation.",
        "de": "Nur bei einstufigen (Elementar-)Reaktionen sind die Koeffizienten gleich den Exponenten; bei mehrstufigen Reaktionen wird die Ordnung experimentell oder aus dem langsamen Schritt ermittelt, nicht aus der Nettogleichung.",
        "fr": "Les coefficients ne sont égaux aux exposants que pour une réaction élémentaire (en une étape) ; pour une réaction en plusieurs étapes, l'ordre se détermine expérimentalement ou à partir de l'étape lente, pas à partir de l'équation bilan.",
        "ru": "Коэффициенты совпадают с показателями степеней только у одностадийных (элементарных) реакций; для многостадийных порядок находят из опыта или по медленной стадии, а не по коэффициентам суммарного уравнения.",
        "ar": "لا تساوي المعاملاتُ الأسسَ إلا في التفاعلات الأولية (ذات الخطوة الواحدة)؛ أما في التفاعلات متعددة الخطوات فتُحدَّد الرتبة تجريبيًا أو من الخطوة البطيئة، لا من معاملات المعادلة الصافية.",
        "zh": "只有在一步完成的基元反应中系数才等于指数；多步反应的级数要通过实验或由慢步骤确定，不能从总反应方程式的系数读出。",
        "ku": "Hevber tenê di reaksiyonên yekgavî (bingehîn) de wekhevî hêzan in; di reaksiyonên pirgavî de pile bi ceribandinê an ji gava hêdî tê dîtin, ji hevberên hevkêşeya net nayê xwendin."
      }
    },
    {
      "id": "u17-f13",
      "fact": {
        "tr": "Molekülerite, tek bir basamakta tepkimeye giren tanecik sayısını ifade eder (unimoleküler, bimoleküler, trimoleküler).",
        "en": "Molecularity refers to the number of particles that react in a single step (unimolecular, bimolecular, trimolecular).",
        "de": "Unter Molekularität versteht man die Anzahl der Teilchen, die in einem einzigen Schritt reagieren (unimolekular, bimolekular, trimolekular).",
        "fr": "La molécularité désigne le nombre de particules qui réagissent dans une seule étape (unimoléculaire, bimoléculaire, trimoléculaire).",
        "ru": "Молекулярность — число частиц, участвующих в одной элементарной стадии (мономолекулярные, бимолекулярные, тримолекулярные реакции).",
        "ar": "الجزيئية هي عدد الجسيمات المتفاعلة في خطوة أولية واحدة (أحادية الجزيئية، ثنائية الجزيئية، ثلاثية الجزيئية).",
        "zh": "反应分子数是指一个基元反应中参与反应的粒子数（单分子、双分子、三分子）。",
        "ku": "Molekularîte hejmara perçeyên ku di yek gavê de dikevin reaksiyonê nîşan dide (yekmolekulî, dumolekulî, sêmolekulî)."
      },
      "trap": {
        "tr": "Molekülerite sadece deneysel hız bağıntısından bulunur.",
        "en": "Molecularity can be found only from the experimental rate law.",
        "de": "Molekularität lässt sich nur aus der empirischen Geschwindigkeitsbeziehung ermitteln.",
        "fr": "La molécularité ne se détermine qu'à partir de la loi de vitesse expérimentale.",
        "ru": "Молекулярность определяют только по экспериментальному кинетическому уравнению.",
        "ar": "لا تُحدَّد الجزيئية إلا من قانون السرعة التجريبي.",
        "zh": "反应分子数只能由实验速率方程求得。",
        "ku": "Molekularîte tenê ji hevkêşeya lezê ya ceribandinî tê dîtin."
      },
      "whyTrapIsFalse": {
        "tr": "Molekülerite deneyle değil, mekanizmadaki temel bir basamağa bakılarak belirlenir; deneysel hız bağıntısından bulunan büyüklük tepkime derecesidir.",
        "en": "Molecularity is determined by looking at an elementary step of the mechanism, not by experiment; the quantity obtained from the experimental rate law is the reaction order.",
        "de": "Die Molekularität wird an einem Elementarschritt des Mechanismus abgelesen, nicht experimentell bestimmt; aus dem experimentellen Geschwindigkeitsgesetz erhält man die Reaktionsordnung.",
        "fr": "La molécularité se lit sur une étape élémentaire du mécanisme, elle ne se mesure pas ; la grandeur tirée de la loi de vitesse expérimentale est l'ordre de réaction.",
        "ru": "Молекулярность определяют по элементарной стадии механизма, а не из опыта; из экспериментального кинетического уравнения находят порядок реакции.",
        "ar": "تُحدَّد الجزيئية بالنظر إلى خطوة أولية في الآلية لا بالتجربة؛ أما الكمية التي تُستخرج من قانون السرعة التجريبي فهي رتبة التفاعل.",
        "zh": "反应分子数是根据反应机理中的某一基元反应确定的，而不是由实验测得；由实验速率方程得到的是反应级数。",
        "ku": "Molekularîte ne bi ceribandinê, bi nihêrîna gaveke bingehîn a mekanîzmayê tê diyarkirin; mezinahiya ku ji hevkêşeya lezê ya ceribandinî tê dîtin pileya reaksiyonê ye."
      }
    },
    {
      "id": "u17-f14",
      "fact": {
        "tr": "Toz hâlindeki kalsiyum karbonatın (CaCO3) asitle tepkimesi, temas yüzeyi daha büyük olduğundan aynı kütledeki parça kireç taşınınkinden daha hızlıdır; oluşan toplam CO2 miktarı ise değişmez.",
        "en": "Powdered calcium carbonate (CaCO3) reacts with acid faster than the same mass of lump limestone because its contact surface is larger; the total amount of CO2 formed, however, is the same.",
        "de": "Pulverförmiges Calciumcarbonat (CaCO3) reagiert mit Säure schneller als die gleiche Masse stückiger Kalkstein, weil seine Kontaktfläche größer ist; die insgesamt gebildete CO2-Menge bleibt jedoch gleich.",
        "fr": "Le carbonate de calcium (CaCO3) en poudre réagit avec l'acide plus vite que la même masse de calcaire en morceaux, car sa surface de contact est plus grande ; la quantité totale de CO2 formée reste toutefois la même.",
        "ru": "Порошкообразный карбонат кальция (CaCO3) реагирует с кислотой быстрее, чем такая же масса кускового известняка, так как площадь его поверхности больше; общее количество образующегося CO2 при этом не меняется.",
        "ar": "يتفاعل مسحوق كربونات الكالسيوم (CaCO3) مع الحمض أسرع من الكتلة نفسها من قطع الحجر الجيري لأن سطح تلامسه أكبر؛ أما الكمية الكلية من CO2 المتكوّنة فلا تتغير.",
        "zh": "粉末状碳酸钙(CaCO3)接触面积更大，与酸反应比相同质量的块状石灰石更快；但生成的 CO2 总量不变。",
        "ku": "Reaksiyona karbonata kalsiyûmê (CaCO3) ya toz bi asîdê re, ji ber ku rûbera wê ya têkiliyê mezintir e, ji ya heman girseya kevirê kilsê yê yekperçe bileztir e; lê mîqdara giştî ya CO2 ya ku çêdibe naguhere."
      },
      "trap": {
        "tr": "Katıyı toz hâline getirmek açığa çıkan gaz miktarını artırır.",
        "en": "Turning the solid into powder increases the amount of gas released.",
        "de": "Durch die Umwandlung des Feststoffs in Pulver erhöht sich die Menge an freigesetztem Gas.",
        "fr": "La transformation du solide en poudre augmente la quantité de gaz libérée.",
        "ru": "Измельчение твёрдого вещества в порошок увеличивает количество выделяющегося газа.",
        "ar": "يؤدي تحويل المادة الصلبة إلى مسحوق إلى زيادة كمية الغاز المنطلق.",
        "zh": "将固体研成粉末会增加放出的气体量。",
        "ku": "Toz kirina madeya hişk mîqdara gaza ku derdikeve zêde dike."
      },
      "whyTrapIsFalse": {
        "tr": "Toz hâline getirmek yalnızca tepkimenin ne kadar hızlı yürüdüğünü değiştirir; oluşan gaz miktarı tepkimeye giren madde miktarına (stokiyometriye) bağlıdır, aynı kütlede CaCO3 aynı miktarda CO2 verir.",
        "en": "Powdering changes only how fast the reaction goes; the amount of gas depends on the amount of reactant (stoichiometry), so the same mass of CaCO3 gives the same amount of CO2.",
        "de": "Das Pulverisieren ändert nur, wie schnell die Reaktion abläuft; die Gasmenge hängt von der Eduktmenge (Stöchiometrie) ab, gleiche Masse CaCO3 liefert gleich viel CO2.",
        "fr": "La mise en poudre ne change que la rapidité de la réaction ; la quantité de gaz dépend de la quantité de réactif (stœchiométrie) : une même masse de CaCO3 donne la même quantité de CO2.",
        "ru": "Измельчение меняет лишь скорость реакции; количество газа определяется количеством реагента (стехиометрией): одна и та же масса CaCO3 даёт одно и то же количество CO2.",
        "ar": "الطحن إلى مسحوق يغيّر سرعة التفاعل فقط؛ أما كمية الغاز فتعتمد على كمية المادة المتفاعلة (الحسابات الكيميائية)، فالكتلة نفسها من CaCO3 تعطي الكمية نفسها من CO2.",
        "zh": "研成粉末只改变反应进行的快慢；生成气体的量取决于反应物的量（化学计量），相同质量的CaCO3生成相同量的CO2。",
        "ku": "Toz kirin tenê diguherîne ka reaksiyon çiqas bilez pêş ve diçe; mîqdara gaza ku çêdibe bi mîqdara madeya ku dikeve reaksiyonê (stokiyometrî) ve girêdayî ye, û heman girseya CaCO3 heman mîqdara CO2 dide."
      }
    },
    {
      "id": "u17-f15",
      "fact": {
        "tr": "Hız sabiti k'yı değiştiren faktörler: Sıcaklık, Katalizör, Temas yüzeyi ve Maddenin cinsidir (TSKM).",
        "en": "Factors that change the rate constant k: Temperature, Catalyst, Contact surface and Type of Substance (TSKM).",
        "de": "Faktoren, die die Geschwindigkeitskonstante k verändern: Temperatur, Katalysator, Kontaktoberfläche und Stoffart (TSKM).",
        "fr": "Facteurs qui modifient la constante de vitesse k : température, catalyseur, surface de contact et type de substance (TSKM).",
        "ru": "Константу скорости k изменяют температура, катализатор, площадь поверхности контакта и природа реагирующих веществ.",
        "ar": "العوامل التي تغيّر ثابت السرعة k: درجة الحرارة، والحفاز، ومساحة سطح التلامس، ونوع المادة.",
        "zh": "改变速率常数 k 的因素有：温度、催化剂、接触面积和物质本身的性质。",
        "ku": "Faktorên ku sabîta lezê k diguherînin ev in: germahî, katalîzor, rûbera têkiliyê û cureyê madeyê."
      },
      "trap": {
        "tr": "Reaktif derişimi arttıkça hız sabiti k büyür.",
        "en": "As the concentration of a reactant increases, the rate constant k increases.",
        "de": "Mit steigender Eduktkonzentration wird die Geschwindigkeitskonstante k größer.",
        "fr": "À mesure que la concentration du réactif augmente, la constante de vitesse k augmente.",
        "ru": "С увеличением концентрации реагента константа скорости k увеличивается.",
        "ar": "كلما زاد تركيز المادة المتفاعلة ازداد ثابت السرعة k.",
        "zh": "反应物浓度增大，速率常数 k 也随之增大。",
        "ku": "Her ku tîrbûna reaktantê zêde dibe, sabîta lezê k mezin dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Derişim artışı birim hacimdeki tanecik ve çarpışma sayısını artırarak hızı artırır; k ise derişimden bağımsız bir orantı sabitidir ve yalnızca sıcaklık, katalizör, temas yüzeyi ve maddenin cinsiyle değişir.",
        "en": "Raising the concentration increases the rate by increasing the number of particles and collisions per unit volume; k is a proportionality constant independent of concentration that changes only with temperature, catalyst, surface area and the nature of the substance.",
        "de": "Eine höhere Konzentration erhöht die Geschwindigkeit, weil mehr Teilchen und Stöße pro Volumen vorliegen; k ist eine konzentrationsunabhängige Proportionalitätskonstante, die sich nur mit Temperatur, Katalysator, Oberfläche und Stoffart ändert.",
        "fr": "Augmenter la concentration accroît la vitesse en augmentant le nombre de particules et de collisions par unité de volume ; k est une constante de proportionnalité indépendante de la concentration, qui ne varie qu'avec la température, le catalyseur, la surface de contact et la nature de la substance.",
        "ru": "Рост концентрации увеличивает скорость за счёт большего числа частиц и столкновений в единице объёма; k — коэффициент пропорциональности, не зависящий от концентрации: он меняется только при изменении температуры, введении катализатора, изменении площади поверхности и природы вещества.",
        "ar": "زيادة التركيز تزيد السرعة لأنها تزيد عدد الجسيمات والتصادمات في وحدة الحجم؛ أما k فثابت تناسب لا يعتمد على التركيز، ويتغيّر فقط بدرجة الحرارة والحفاز ومساحة السطح ونوع المادة.",
        "zh": "增大浓度使单位体积内的粒子数和碰撞次数增加，从而加快速率；k是与浓度无关的比例常数，只随温度、催化剂、接触面积和物质本性而变化。",
        "ku": "Zêdebûna tîrbûnê bi zêdekirina hejmara perçe û lihevketinan di yekîneya qebareyê de lezê zêde dike; k jî sabîteke rêjeyî ye ku bi tîrbûnê ve ne girêdayî ye û tenê bi germahî, katalîzor, rûbera têkiliyê û cureyê madeyê diguhere."
      },
      "osymTip": {
        "tr": "Derişim hızı artırır, k sabitini değiştirmez!",
        "en": "Concentration increases the rate, it does NOT change the constant k!",
        "de": "Konzentration erhöht die Geschwindigkeit, sie verändert NICHT die Konstante k!",
        "fr": "La concentration augmente la vitesse, elle ne change PAS la constante k !",
        "ru": "Концентрация увеличивает скорость, но НЕ меняет константу k!",
        "ar": "التركيز يزيد السرعة، ولا يغيّر الثابت k!",
        "zh": "浓度改变的是速率，不改变速率常数 k！",
        "ku": "Tîrbûn lezê zêde dike, lê sabîta k naguherîne!"
      }
    },
    {
      "id": "u17-f16",
      "fact": {
        "tr": "Zıt yüklü iyonlar arasındaki tepkimeler bağ kopması gerektirmediğinden oda koşullarında çok hızlı gerçekleşir; çok sayıda kovalent bağın koptuğu tepkimeler ise genellikle yavaştır.",
        "en": "Reactions between oppositely charged ions require no bond breaking, so they are very fast at room conditions; reactions in which many covalent bonds must break are generally slow.",
        "de": "Reaktionen zwischen entgegengesetzt geladenen Ionen erfordern keinen Bindungsbruch und laufen daher bei Raumbedingungen sehr schnell ab; Reaktionen, bei denen viele kovalente Bindungen gebrochen werden müssen, sind dagegen meist langsam.",
        "fr": "Les réactions entre ions de charges opposées ne nécessitent aucune rupture de liaison et sont donc très rapides dans les conditions ambiantes ; les réactions où de nombreuses liaisons covalentes doivent être rompues sont en général lentes.",
        "ru": "Реакции между противоположно заряженными ионами не требуют разрыва связей и поэтому при комнатных условиях протекают очень быстро; реакции, в которых должно разорваться много ковалентных связей, обычно идут медленно.",
        "ar": "التفاعلات بين الأيونات المختلفة الشحنة لا تتطلب كسر روابط، ولذلك تحدث بسرعة كبيرة في ظروف الغرفة؛ أما التفاعلات التي يجب أن تُكسر فيها روابط تساهمية كثيرة فتكون بطيئة عادةً.",
        "zh": "带相反电荷的离子之间的反应不需要断键，因此在室温条件下进行得非常快；而需要断裂大量共价键的反应通常较慢。",
        "ku": "Reaksiyonên di navbera îyonên bi barên dijber de, ji ber ku şikandina girêdanê naxwazin, di şertên odeyê de pir bilez pêk tên; reaksiyonên ku tê de gelek girêdanên kovalent dişkên bi gelemperî hêdî ne."
      },
      "trap": {
        "tr": "Oda koşullarında, çok sayıda kovalent bağın kırıldığı organik tepkimeler zıt yüklü iyonlar arasındaki tepkimelerden daha hızlıdır.",
        "en": "At room conditions, organic reactions in which many covalent bonds are broken are faster than reactions between oppositely charged ions.",
        "de": "Bei Raumbedingungen laufen organische Reaktionen, bei denen viele kovalente Bindungen gebrochen werden, schneller ab als Reaktionen zwischen entgegengesetzt geladenen Ionen.",
        "fr": "Dans les conditions ambiantes, les réactions organiques où de nombreuses liaisons covalentes sont rompues sont plus rapides que les réactions entre ions de charges opposées.",
        "ru": "При комнатных условиях органические реакции, в которых разрывается много ковалентных связей, идут быстрее, чем реакции между противоположно заряженными ионами.",
        "ar": "في ظروف الغرفة تكون التفاعلات العضوية التي تُكسر فيها روابط تساهمية كثيرة أسرع من التفاعلات بين الأيونات المختلفة الشحنة.",
        "zh": "在室温条件下，需要断裂大量共价键的有机反应比带相反电荷的离子之间的反应更快。",
        "ku": "Di şertên odeyê de, reaksiyonên organîk ên ku tê de gelek girêdanên kovalent dişkên ji reaksiyonên di navbera îyonên bi barên dijber de bileztir in."
      },
      "whyTrapIsFalse": {
        "tr": "Kovalent bağların kırılması enerji gerektirdiğinden çok sayıda bağ kıran organik tepkimeler genellikle yavaştır; anlık gerçekleşenler, bağ kırılması gerekmeyen zıt yüklü iyonlar arasındaki tepkimelerdir.",
        "en": "Breaking covalent bonds requires energy, so organic reactions that break many bonds are generally slow; the reactions that are practically instantaneous are those between oppositely charged ions, which need no bond breaking.",
        "de": "Das Aufbrechen kovalenter Bindungen erfordert Energie, daher sind organische Reaktionen, bei denen viele Bindungen gebrochen werden, meist langsam; praktisch sofort laufen Reaktionen zwischen entgegengesetzt geladenen Ionen ab, die keinen Bindungsbruch brauchen.",
        "fr": "Rompre des liaisons covalentes demande de l'énergie, donc les réactions organiques qui rompent de nombreuses liaisons sont généralement lentes ; les réactions quasi instantanées sont celles entre ions de charges opposées, sans rupture de liaison.",
        "ru": "Разрыв ковалентных связей требует энергии, поэтому органические реакции с разрывом многих связей обычно медленные; практически мгновенно идут реакции между противоположно заряженными ионами, где разрыв связей не нужен.",
        "ar": "كسر الروابط التساهمية يحتاج إلى طاقة، لذلك تكون التفاعلات العضوية التي تكسر روابط كثيرة بطيئة عادةً؛ أما التفاعلات شبه اللحظية فهي التي تحدث بين أيونات مختلفة الشحنة ولا تتطلب كسر روابط.",
        "zh": "断裂共价键需要能量，因此需要断裂许多键的有机反应一般较慢；几乎瞬间完成的是不需要断键的带相反电荷离子之间的反应。",
        "ku": "Ji ber ku şikandina girêdanên kovalent enerjiyê dixwaze, reaksiyonên organîk ên ku gelek girêdanan dişkînin bi gelemperî hêdî ne; yên ku di cih de pêk tên reaksiyonên di navbera îyonên bi barên dijber de ne, ku şikandina girêdanê naxwazin."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u17-c01",
      "conceptA": {
        "tr": "Katalizör",
        "en": "Catalyst",
        "de": "Katalysator",
        "fr": "Catalyseur",
        "ru": "Катализатор",
        "ar": "الحفاز",
        "zh": "催化剂",
        "ku": "Katalîzor"
      },
      "conceptB": {
        "tr": "Sıcaklık",
        "en": "Temperature",
        "de": "Temperatur",
        "fr": "Température",
        "ru": "Температура",
        "ar": "درجة الحرارة",
        "zh": "温度",
        "ku": "Germahî"
      },
      "distinction": {
        "tr": "Katalizör Ea'yı düşürerek k'yı artırır; sıcaklık Ea'yı değiştirmeden aşan tanecik sayısını ve k'yı artırır.",
        "en": "A catalyst increases k by lowering Ea; temperature increases k and the number of particles exceeding Ea without changing Ea.",
        "de": "Ein Katalysator erhöht k, indem er Ea senkt; die Temperatur erhöht k und die Anzahl der Teilchen, die Ea überschreiten, ohne Ea zu verändern.",
        "fr": "Un catalyseur augmente k en abaissant Ea ; la température augmente k et le nombre de particules dépassant Ea sans modifier Ea.",
        "ru": "Катализатор увеличивает k, снижая Ea; температура увеличивает k за счёт роста числа частиц, преодолевающих Ea, а саму Ea не меняет.",
        "ar": "الحفاز يزيد k بخفض Ea؛ أما عند رفع درجة الحرارة فيزداد k وعدد الجسيمات التي تتجاوز Ea دون أن تتغير Ea.",
        "zh": "催化剂通过降低 Ea 使 k 增大；而温度不改变 Ea，是通过增加能量超过 Ea 的粒子数使 k 增大。",
        "ku": "Katalîzor bi kêmkirina Ea k zêde dike; germahî bêyî ku Ea biguherîne, hejmara perçeyên ku Ea derbas dikin û k zêde dike."
      }
    },
    {
      "id": "u17-c02",
      "conceptA": {
        "tr": "Ara Ürün",
        "en": "Intermediate",
        "de": "Zwischenprodukt",
        "fr": "Intermédiaire réactionnel",
        "ru": "Промежуточное вещество",
        "ar": "المركب الوسيط",
        "zh": "中间产物",
        "ku": "Hilbera Navber"
      },
      "conceptB": {
        "tr": "Katalizör",
        "en": "Catalyst",
        "de": "Katalysator",
        "fr": "Catalyseur",
        "ru": "Катализатор",
        "ar": "الحفاز",
        "zh": "催化剂",
        "ku": "Katalîzor"
      },
      "distinction": {
        "tr": "Ara ürün önce oluşup sonra harcanır; katalizör önce harcanıp sonra aynen geri oluşur.",
        "en": "An intermediate is formed first and consumed later; a catalyst is consumed first and regenerated unchanged later.",
        "de": "Ein Zwischenprodukt wird zuerst gebildet und später verbraucht; ein Katalysator wird zuerst verbraucht und später unverändert zurückgebildet.",
        "fr": "Un intermédiaire réactionnel est d'abord formé puis consommé ; un catalyseur est d'abord consommé puis régénéré inchangé.",
        "ru": "Промежуточное вещество сначала образуется, а затем расходуется; катализатор сначала расходуется, а затем образуется снова в неизменном виде.",
        "ar": "المركب الوسيط يتكوّن أولًا ثم يُستهلك؛ أما الحفاز فيُستهلك أولًا ثم يتجدّد دون تغيّر.",
        "zh": "中间产物先生成、后被消耗；而催化剂先被消耗、后原样再生。",
        "ku": "Hilbera navber pêşî çêdibe û paşê tê xerckirin; katalîzor pêşî tê xerckirin û paşê wekî xwe dîsa çêdibe."
      }
    },
    {
      "id": "u17-c03",
      "conceptA": {
        "tr": "Tepkime Hızı (r)",
        "en": "Reaction Rate (r)",
        "de": "Reaktionsgeschwindigkeit (r)",
        "fr": "Vitesse de réaction (r)",
        "ru": "Скорость реакции (r)",
        "ar": "سرعة التفاعل (r)",
        "zh": "化学反应速率(r)",
        "ku": "Leza Reaksiyonê (r)"
      },
      "conceptB": {
        "tr": "Hız Sabiti (k)",
        "en": "Rate Constant (k)",
        "de": "Geschwindigkeitskonstante (k)",
        "fr": "Constante de vitesse (k)",
        "ru": "Константа скорости (k)",
        "ar": "ثابت السرعة (k)",
        "zh": "速率常数k",
        "ku": "Sabîta Lezê (k)"
      },
      "distinction": {
        "tr": "Tepkime hızı derişimle değişir; hız sabiti k derişimden bağımsız olup sıcaklık, katalizör ve temas yüzeyiyle değişir.",
        "en": "The reaction rate varies with concentration; k, by contrast, is independent of concentration and varies with temperature, catalyst and contact surface.",
        "de": "Die Reaktionsgeschwindigkeit variiert je nach Konzentration; die Geschwindigkeitskonstante k ist konzentrationsunabhängig und variiert je nach Temperatur, Katalysator und Kontaktoberfläche.",
        "fr": "La vitesse de réaction varie avec la concentration ; la constante k, elle, est indépendante de la concentration et varie avec la température, le catalyseur et la surface de contact.",
        "ru": "Скорость реакции (r) зависит от концентрации; константа скорости (k) от концентрации не зависит и меняется с температурой, при введении катализатора и при изменении площади поверхности.",
        "ar": "سرعة التفاعل كمية تتغيّر بتغيّر التركيز؛ أما ثابت السرعة k فلا يعتمد على التركيز ويتغيّر بدرجة الحرارة والحفاز ومساحة سطح التلامس.",
        "zh": "化学反应速率(r)随浓度变化；而速率常数k与浓度无关，随温度、催化剂和接触面积而变化。",
        "ku": "Leza reaksiyonê bi guherîna tîrbûnê diguhere; sabîta lezê k bi tîrbûnê ve ne girêdayî ye û bi germahî, katalîzor û rûbera têkiliyê diguhere."
      }
    },
    {
      "id": "u17-c04",
      "conceptA": {
        "tr": "Ortalama Hız",
        "en": "Average Rate",
        "de": "Durchschnittsgeschwindigkeit",
        "fr": "Vitesse moyenne",
        "ru": "Средняя скорость",
        "ar": "السرعة المتوسطة",
        "zh": "平均速率",
        "ku": "Leza Navîn"
      },
      "conceptB": {
        "tr": "Anlık Hız",
        "en": "Instantaneous Rate",
        "de": "Momentangeschwindigkeit",
        "fr": "Vitesse instantanée",
        "ru": "Мгновенная скорость",
        "ar": "السرعة اللحظية",
        "zh": "瞬时速率",
        "ku": "Leza Tavilê"
      },
      "distinction": {
        "tr": "Ortalama hız, belirli bir zaman aralığındaki derişim değişiminin geçen süreye oranıdır; anlık hız ise derişim-zaman eğrisine o anda çizilen teğetin eğiminden bulunur.",
        "en": "The average rate is the change in concentration over a given time interval divided by that interval; the instantaneous rate is found from the slope of the tangent drawn to the concentration–time curve at that instant.",
        "de": "Die Durchschnittsgeschwindigkeit ist die Konzentrationsänderung in einem bestimmten Zeitintervall geteilt durch dieses Intervall; die Momentangeschwindigkeit ergibt sich aus der Steigung der Tangente, die in diesem Zeitpunkt an die Konzentrations-Zeit-Kurve gelegt wird.",
        "fr": "La vitesse moyenne est la variation de concentration pendant un intervalle de temps donné divisée par cet intervalle ; la vitesse instantanée se déduit de la pente de la tangente tracée à cet instant à la courbe concentration-temps.",
        "ru": "Средняя скорость — отношение изменения концентрации за определённый промежуток времени к длительности этого промежутка; мгновенная скорость определяется по наклону касательной, проведённой к кривой «концентрация — время» в данный момент.",
        "ar": "السرعة المتوسطة: التغير في التركيز خلال فترة زمنية معينة مقسومًا على طول تلك الفترة؛ والسرعة اللحظية: ميل المماس المرسوم لمنحنى التركيز-الزمن عند تلك اللحظة.",
        "zh": "平均速率是一段时间间隔内浓度的变化除以该时间间隔；瞬时速率则由该时刻浓度-时间曲线切线的斜率求得。",
        "ku": "Leza navîn rêjeya guherîna tîrbûnê ya di navberaneke demê ya diyar de li ser dema derbasbûyî ye; leza tavilê ji xwarbûna tanjanta ku di wê kêliyê de li kevana tîrbûn–dem tê xêzkirin tê dîtin."
      }
    },
    {
      "id": "u17-c05",
      "conceptA": {
        "tr": "Homojen Katalizör",
        "en": "Homogeneous Catalyst",
        "de": "Homogener Katalysator",
        "fr": "Catalyseur homogène",
        "ru": "Гомогенный катализатор",
        "ar": "الحفاز المتجانس",
        "zh": "均相催化剂",
        "ku": "Katalîzora Homojen"
      },
      "conceptB": {
        "tr": "Heterojen Katalizör",
        "en": "Heterogeneous Catalyst",
        "de": "Heterogener Katalysator",
        "fr": "Catalyseur hétérogène",
        "ru": "Гетерогенный катализатор",
        "ar": "الحفاز غير المتجانس",
        "zh": "非均相催化剂",
        "ku": "Katalîzora Heterojen"
      },
      "distinction": {
        "tr": "Homojen katalizör reaktiflerle aynı fiziksel fazdadır; heterojen katalizör reaktiflerden farklı fiziksel fazdadır (ör. katı Pt).",
        "en": "The homogeneous catalyst is in the same physical phase as the reactants; the heterogeneous catalyst is in a different physical phase from the reactants (e.g. solid Pt).",
        "de": "Der homogene Katalysator befindet sich in derselben physikalischen Phase wie die Reaktanten; der heterogene Katalysator befindet sich in einer anderen physikalischen Phase als die Reaktanten (z. B. festes Pt).",
        "fr": "Le catalyseur homogène est dans la même phase physique que les réactifs ; le catalyseur hétérogène se trouve dans une phase physique différente de celle des réactifs (par exemple Pt solide).",
        "ru": "Гомогенный катализатор находится в той же фазе, что и реагенты; гетерогенный катализатор находится в фазе, отличной от фазы реагентов (например, твёрдая Pt).",
        "ar": "الحفاز المتجانس في الطور الفيزيائي نفسه الذي توجد فيه المواد المتفاعلة؛ أما الحفاز غير المتجانس ففي طور فيزيائي مختلف عن طور المواد المتفاعلة (مثل Pt الصلب).",
        "zh": "均相催化剂与反应物处于同一相；而非均相催化剂与反应物处于不同的相(例如固体 Pt)。",
        "ku": "Katalîzora homojen bi reaktantan re di heman fazê fîzîkî de ye; katalîzora heterojen ji reaktantan di fazeke fîzîkî ya cuda de ye (mînak Pt ya hişk)."
      }
    },
    {
      "id": "u17-c06",
      "conceptA": {
        "tr": "Etkin Çarpışma",
        "en": "Effective Collision",
        "de": "Wirksamer Stoß",
        "fr": "Collision efficace",
        "ru": "Эффективное столкновение",
        "ar": "التصادم الفعال",
        "zh": "有效碰撞",
        "ku": "Lihevketina Bibandor"
      },
      "conceptB": {
        "tr": "Etkin Olmayan Çarpışma",
        "en": "Ineffective Collision",
        "de": "Unwirksamer Stoß",
        "fr": "Collision inefficace",
        "ru": "Неэффективное столкновение",
        "ar": "التصادم غير الفعال",
        "zh": "无效碰撞",
        "ku": "Lihevketina Bêbandor"
      },
      "distinction": {
        "tr": "Etkin çarpışma uygun geometride ve yeterli eşik enerjisiyle ürün veren çarpışmadır; etkin olmayan çarpışmada ürün oluşmaz.",
        "en": "An effective collision is one with suitable orientation and sufficient threshold energy that produces products; in an ineffective collision no product forms.",
        "de": "Ein wirksamer Stoß erfolgt mit geeigneter Orientierung und ausreichender Schwellenenergie und liefert Produkte; bei einem unwirksamen Stoß entsteht kein Produkt.",
        "fr": "Une collision efficace se produit avec une orientation appropriée et une énergie seuil suffisante et forme des produits ; une collision inefficace ne forme aucun produit.",
        "ru": "Эффективное столкновение — столкновение при благоприятной ориентации и достаточной пороговой энергии, приводящее к образованию продуктов; неэффективное столкновение продуктов не даёт.",
        "ar": "التصادم الفعال تصادم يحدث باتجاه هندسي مناسب وبطاقة عتبة كافية فتنتج عنه نواتج؛ أما التصادم غير الفعال فلا يتكوّن فيه ناتج.",
        "zh": "有效碰撞是取向合适、能量达到阈能并能发生反应的碰撞；而无效碰撞不能发生反应。",
        "ku": "Lihevketina bibandor ew lihevketin e ku bi arasteya guncav û enerjiya sînor a têr hilber dide; di lihevketina bêbandor de hilber çênabe."
      }
    },
    {
      "id": "u17-c07",
      "conceptA": {
        "tr": "Tepkime Derecesi (Mertebesi)",
        "en": "Reaction Order",
        "de": "Reaktionsordnung",
        "fr": "Ordre de réaction",
        "ru": "Порядок реакции",
        "ar": "رتبة التفاعل",
        "zh": "反应级数",
        "ku": "Pileya Reaksiyonê"
      },
      "conceptB": {
        "tr": "Molekülerite",
        "en": "Molecularity",
        "de": "Molekularität",
        "fr": "Molécularité",
        "ru": "Молекулярность",
        "ar": "الجزيئية",
        "zh": "反应分子数",
        "ku": "Molekularîte"
      },
      "distinction": {
        "tr": "Tepkime derecesi, deneysel hız bağıntısındaki üslerin toplamıdır; molekülerite ise tek bir (temel) basamakta çarpışan tanecik sayısıdır.",
        "en": "Reaction order is the sum of the exponents in the experimental rate law; molecularity is the number of particles colliding in a single (elementary) step.",
        "de": "Die Reaktionsordnung ist die Summe der Exponenten im experimentellen Geschwindigkeitsgesetz; die Molekularität ist die Anzahl der in einem einzelnen (Elementar-)Schritt zusammenstoßenden Teilchen.",
        "fr": "L'ordre de réaction est la somme des exposants de la loi de vitesse expérimentale ; la molécularité est le nombre de particules qui entrent en collision dans une seule étape (élémentaire).",
        "ru": "Порядок реакции — сумма показателей степеней в экспериментальном кинетическом уравнении; молекулярность — число частиц, сталкивающихся в одной (элементарной) стадии.",
        "ar": "رتبة التفاعل: مجموع الأسس في قانون السرعة التجريبي؛ والجزيئية: عدد الجسيمات المتصادمة في خطوة (أولية) واحدة.",
        "zh": "反应级数是实验速率方程中各浓度指数之和；而反应分子数是一个基元反应中相互碰撞的粒子数。",
        "ku": "Pileya reaksiyonê koma hêzên di hevkêşeya lezê ya ceribandinî de ye; molekularîte jî hejmara perçeyên ku di yek gava (bingehîn) de li hev dikevin e."
      }
    },
    {
      "id": "u17-c08",
      "conceptA": {
        "tr": "Homojen Tepkime",
        "en": "Homogeneous Reaction",
        "de": "Homogene Reaktion",
        "fr": "Réaction homogène",
        "ru": "Гомогенная реакция",
        "ar": "التفاعل المتجانس",
        "zh": "均相反应",
        "ku": "Reaksiyona Homojen"
      },
      "conceptB": {
        "tr": "Heterojen Tepkime",
        "en": "Heterogeneous Reaction",
        "de": "Heterogene Reaktion",
        "fr": "Réaction hétérogène",
        "ru": "Гетерогенная реакция",
        "ar": "التفاعل غير المتجانس",
        "zh": "非均相反应",
        "ku": "Reaksiyona Heterojen"
      },
      "distinction": {
        "tr": "Homojen tepkimede tüm maddeler aynı fazdadır ve temas yüzeyi hızı etkilemez; heterojen tepkimede farklı fazlar bulunur ve temas yüzeyi arttıkça hız artar.",
        "en": "In a homogeneous reaction all substances are in the same phase and contact surface does not affect the rate; in a heterogeneous reaction different phases are present and the rate increases as the contact surface increases.",
        "de": "Bei einer homogenen Reaktion liegen alle Stoffe in derselben Phase vor und die Kontaktfläche beeinflusst die Geschwindigkeit nicht; bei einer heterogenen Reaktion liegen verschiedene Phasen vor und die Geschwindigkeit steigt mit der Kontaktfläche.",
        "fr": "Dans une réaction homogène, toutes les substances sont dans la même phase et la surface de contact n'influence pas la vitesse ; dans une réaction hétérogène, plusieurs phases coexistent et la vitesse augmente avec la surface de contact.",
        "ru": "В гомогенной реакции все вещества находятся в одной фазе, и поверхность контакта не влияет на скорость; в гетерогенной реакции присутствуют разные фазы, и скорость растёт с увеличением поверхности контакта.",
        "ar": "في التفاعل المتجانس تكون جميع المواد في الطور نفسه ولا يؤثر سطح التلامس في السرعة؛ أما في التفاعل غير المتجانس فتوجد أطوار مختلفة وتزداد السرعة بزيادة سطح التلامس.",
        "zh": "均相反应中所有物质处于同一相，接触面积不影响速率；而非均相反应中存在不同的相，接触面积越大速率越快。",
        "ku": "Di reaksiyona homojen de hemû made di heman fazê de ne û rûbera têkiliyê bandorê li lezê nake; di reaksiyona heterojen de fazên cuda hene û her ku rûbera têkiliyê zêde dibe lez zêde dibe."
      }
    }
  ],
  "sequences": [
    {
      "id": "u17-s01",
      "title": {
        "tr": "Deneysel Hız Bağıntısını Bulma",
        "en": "Determining the Experimental Rate Law",
        "de": "Ermittlung des experimentellen Geschwindigkeitsgesetzes",
        "fr": "Détermination de la loi de vitesse expérimentale",
        "ru": "Нахождение экспериментального кинетического уравнения",
        "ar": "إيجاد قانون السرعة التجريبي",
        "zh": "由实验数据确定速率方程",
        "ku": "Dîtina Hevkêşeya Lezê ya Ceribandinî"
      },
      "steps": [
        {
          "tr": "Bir reaktifin sabit tutulduğu iki deneyi seç",
          "en": "Choose two experiments in which one reactant's concentration is kept constant",
          "de": "Zwei Versuche wählen, in denen die Konzentration eines Edukts konstant bleibt",
          "fr": "Sélectionnez deux expériences dans lesquelles un réactif est maintenu constant",
          "ru": "Выберите два опыта, в которых концентрация одного реагента одинакова",
          "ar": "اختر تجربتين يبقى فيهما تركيز إحدى المواد المتفاعلة ثابتًا",
          "zh": "选择某一反应物浓度保持不变的两次实验",
          "ku": "Du ceribandinên ku tê de tîrbûna reaktantekê sabît maye hilbijêre"
        },
        {
          "tr": "Diğer reaktifin derişim katı ile hız katını oranla",
          "en": "Compare the factor by which the other reactant's concentration changes with the factor by which the rate changes",
          "de": "Vergleiche den Faktor, um den sich die Konzentration des anderen Reaktanten ändert, mit dem Faktor, um den sich die Geschwindigkeit ändert",
          "fr": "Comparez le facteur de variation de la concentration de l'autre réactif au facteur de variation de la vitesse",
          "ru": "Сопоставьте, во сколько раз изменились концентрация другого реагента и скорость",
          "ar": "قارن عدد مرات تغيّر تركيز المادة المتفاعلة الأخرى بعدد مرات تغيّر السرعة",
          "zh": "比较另一反应物浓度变化的倍数与速率变化的倍数",
          "ku": "Rêjeya zêdebûna tîrbûna reaktanta din bi rêjeya zêdebûna lezê re bide ber hev"
        },
        {
          "tr": "Reaktifin üssünü belirle",
          "en": "Determine that reactant's exponent (order)",
          "de": "Den Exponenten (die Ordnung) dieses Edukts bestimmen",
          "fr": "Déterminer l'exposant du réactif",
          "ru": "Определите порядок по этому реагенту (показатель степени)",
          "ar": "حدّد أسّ (رتبة) تلك المادة المتفاعلة",
          "zh": "确定该反应物的指数（级数）",
          "ku": "Hêza (pileya) wê reaktantê diyar bike"
        },
        {
          "tr": "Tüm reaktifler için tekrarlayıp k sabitini ve birimini hesapla",
          "en": "Repeat for every reactant, then calculate k and its unit",
          "de": "Für alle Edukte wiederholen, dann k und seine Einheit berechnen",
          "fr": "Répétez pour tous les réactifs et calculez la constante k et son unité",
          "ru": "Повторите для всех реагентов и рассчитайте константу k и её единицу",
          "ar": "كرّر ذلك لكل المواد المتفاعلة ثم احسب k ووحدته",
          "zh": "对每种反应物重复上述步骤，然后计算 k 及其单位",
          "ku": "Ji bo hemû reaktantan dubare bike, paşê sabîta k û yekîneya wê hesab bike"
        }
      ]
    },
    {
      "id": "u17-s02",
      "title": {
        "tr": "Sıcaklık Artışının Tepkime Hızına Etkisi",
        "en": "Effect of Increasing Temperature on Reaction Rate",
        "de": "Einfluss einer Temperaturerhöhung auf die Reaktionsgeschwindigkeit",
        "fr": "Effet d'une hausse de température sur la vitesse de réaction",
        "ru": "Влияние повышения температуры на скорость реакции",
        "ar": "تأثير رفع درجة الحرارة في سرعة التفاعل",
        "zh": "升高温度对反应速率的影响",
        "ku": "Bandora Zêdebûna Germahiyê li ser Leza Reaksiyonê"
      },
      "steps": [
        {
          "tr": "Sıcaklık artırıldığında taneciklerin ortalama kinetik enerjisi artar",
          "en": "When the temperature is increased, the average kinetic energy of the particles increases.",
          "de": "Wenn die Temperatur erhöht wird, erhöht sich die durchschnittliche kinetische Energie der Partikel.",
          "fr": "Lorsque la température augmente, l’énergie cinétique moyenne des particules augmente.",
          "ru": "При повышении температуры средняя кинетическая энергия частиц растёт",
          "ar": "عند رفع درجة الحرارة يزداد متوسط الطاقة الحركية للجسيمات",
          "zh": "温度升高，粒子的平均动能增大",
          "ku": "Dema germahî zêde dibe, enerjiya kînetîk a navîn a perçeyan zêde dibe"
        },
        {
          "tr": "Ea değişmediği hâlde Ea'yı aşan enerjiye sahip tanecik sayısı artar",
          "en": "Although Ea does not change, the number of particles with energy above Ea increases",
          "de": "Obwohl Ea unverändert bleibt, nimmt die Anzahl der Teilchen mit einer Energie oberhalb von Ea zu",
          "fr": "Bien que Ea ne change pas, le nombre de particules dont l'énergie dépasse Ea augmente",
          "ru": "Ea не меняется, но число частиц с энергией выше Ea возрастает",
          "ar": "مع أن Ea لا تتغير، يزداد عدد الجسيمات التي تمتلك طاقة تتجاوز Ea",
          "zh": "Ea 不变，但能量超过 Ea 的粒子数增加",
          "ku": "Her çend Ea naguhere jî, hejmara perçeyên ku enerjiya wan ji Ea zêdetir e zêde dibe"
        },
        {
          "tr": "Daha hızlı ve daha enerjili tanecikler sayesinde birim zamandaki etkin çarpışma sayısı artar",
          "en": "With faster, more energetic particles, the number of effective collisions per unit time increases",
          "de": "Durch die schnelleren, energiereicheren Teilchen nimmt die Anzahl wirksamer Stöße pro Zeiteinheit zu",
          "fr": "Grâce à des particules plus rapides et plus énergétiques, le nombre de collisions efficaces par unité de temps augmente",
          "ru": "Частицы движутся быстрее и обладают большей энергией, поэтому число эффективных столкновений в единицу времени растёт",
          "ar": "بفضل الجسيمات الأسرع والأعلى طاقة يزداد عدد التصادمات الفعالة في وحدة الزمن",
          "zh": "粒子运动更快、能量更高，单位时间内的有效碰撞次数增加",
          "ku": "Bi saya perçeyên bileztir û bi enerjiyeke zêdetir, hejmara lihevketinên bibandor di yekîneya demê de zêde dibe"
        },
        {
          "tr": "Mekanizma ve Ea aynı kalırken hız sabiti k büyür ve tepkime hızlanır",
          "en": "While the mechanism and Ea stay the same, the rate constant k increases and the reaction speeds up",
          "de": "Bei unverändertem Mechanismus und unverändertem Ea steigt die Geschwindigkeitskonstante k und die Reaktion wird schneller",
          "fr": "Le mécanisme et Ea restant inchangés, la constante de vitesse k augmente et la réaction s'accélère",
          "ru": "При неизменных механизме и Ea константа скорости k увеличивается, и реакция ускоряется",
          "ar": "مع بقاء الآلية وEa دون تغيير، تزداد قيمة ثابت السرعة k ويتسارع التفاعل",
          "zh": "机理和 Ea 保持不变，速率常数 k 增大，反应加快",
          "ku": "Dema mekanîzma û Ea wekî xwe dimînin, sabîta lezê k mezin dibe û reaksiyon bileztir dibe"
        }
      ]
    },
    {
      "id": "u17-s03",
      "title": {
        "tr": "Mekanizmalı Tepkimede Basamak Analizi",
        "en": "Step Analysis of a Multistep Reaction",
        "de": "Schrittanalyse einer mehrstufigen Reaktion",
        "fr": "Analyse des étapes d'une réaction en plusieurs étapes",
        "ru": "Анализ стадий многостадийной реакции",
        "ar": "تحليل خطوات تفاعل متعدد الخطوات",
        "zh": "多步反应的步骤分析",
        "ku": "Analîza Gavan di Reaksiyona bi Mekanîzma de"
      },
      "steps": [
        {
          "tr": "Mekanizmadaki basamaklar taraf tarafa toplanır",
          "en": "The steps of the mechanism are added together",
          "de": "Die Schritte des Mechanismus werden addiert",
          "fr": "Les étapes du mécanisme sont additionnées membre à membre",
          "ru": "Стадии механизма складывают почленно",
          "ar": "تُجمع خطوات الآلية طرفًا بطرف",
          "zh": "将机理中的各步骤相加",
          "ku": "Gavên mekanîzmayê alî bi alî tên berhevkirin"
        },
        {
          "tr": "Sadeleşen ara ürün ve katalizör belirlenir, net tepkime denklemi yazılır",
          "en": "The intermediate and catalyst that cancel out are identified and the net reaction equation is written",
          "de": "Die sich herauskürzenden Zwischenprodukte und Katalysatoren werden bestimmt und die Nettoreaktionsgleichung wird aufgestellt",
          "fr": "On identifie l'intermédiaire et le catalyseur qui se simplifient, puis on écrit l'équation-bilan",
          "ru": "Определяют сокращающиеся промежуточные вещества и катализатор и записывают суммарное уравнение реакции",
          "ar": "يُحدَّد المركب الوسيط والحفاز اللذان يُختصران، ثم تُكتب معادلة التفاعل الصافية",
          "zh": "找出被消去的中间产物和催化剂，写出总反应方程式",
          "ku": "Hilbera navber û katalîzora ku ji her du aliyan diçin tên diyarkirin û hevkêşeya reaksiyona net tê nivîsandin"
        },
        {
          "tr": "Net denklem yazıldıktan sonra, hızı belirleyen en yavaş basamak seçilir",
          "en": "Once the net equation is written, the slowest (rate-determining) step is picked out",
          "de": "Nachdem die Nettogleichung aufgestellt ist, wird der langsamste (geschwindigkeitsbestimmende) Schritt herausgesucht",
          "fr": "Une fois l'équation-bilan écrite, on repère l'étape la plus lente (cinétiquement déterminante)",
          "ru": "После записи суммарного уравнения выбирают самую медленную (лимитирующую) стадию",
          "ar": "بعد كتابة المعادلة الصافية تُحدَّد الخطوة الأبطأ (المحدِّدة للسرعة)",
          "zh": "写出总方程式之后，找出最慢的（决速）步骤",
          "ku": "Piştî nivîsandina hevkêşeya net, gava herî hêdî ya ku lezê diyar dike tê hilbijartin"
        },
        {
          "tr": "Hız bağıntısı, seçilen yavaş basamağın girenlerine göre yazılır",
          "en": "The rate law is written from the reactants of that slow step",
          "de": "Das Geschwindigkeitsgesetz wird aus den Reaktanten dieses langsamen Schritts aufgestellt",
          "fr": "La loi de vitesse s'écrit à partir des réactifs de cette étape lente",
          "ru": "Кинетическое уравнение записывают по реагентам этой медленной стадии",
          "ar": "يُكتب قانون السرعة بدلالة متفاعلات تلك الخطوة البطيئة",
          "zh": "根据该慢步骤的反应物写出速率方程",
          "ku": "Hevkêşeya lezê li gorî reaktantên wê gava hêdî ya hilbijartî tê nivîsandin"
        }
      ]
    },
    {
      "id": "u17-s04",
      "title": {
        "tr": "Katalizörün Tepkimeye Etkisi",
        "en": "Effect of Catalyst on Reaction",
        "de": "Wirkung des Katalysators auf die Reaktion",
        "fr": "Effet du catalyseur sur la réaction",
        "ru": "Влияние катализатора на реакцию",
        "ar": "تأثير الحفاز في التفاعل",
        "zh": "催化剂对反应的影响",
        "ku": "Bandora Katalîzorê li ser Reaksiyonê"
      },
      "steps": [
        {
          "tr": "Katalizör tepkimeye farklı bir mekanizma (yeni bir yol) sağlar",
          "en": "The catalyst provides the reaction with a different mechanism (a new pathway)",
          "de": "Der Katalysator eröffnet der Reaktion einen anderen Mechanismus (einen neuen Weg)",
          "fr": "Le catalyseur offre à la réaction un mécanisme différent (un nouveau chemin)",
          "ru": "Катализатор открывает для реакции другой механизм (новый путь)",
          "ar": "يوفّر الحفاز للتفاعل آلية مختلفة (مسارًا جديدًا)",
          "zh": "催化剂为反应提供不同的机理（新途径）",
          "ku": "Katalîzor ji reaksiyonê re mekanîzmayeke cuda (rêyeke nû) peyda dike"
        },
        {
          "tr": "Yeni yolda aktifleşme enerjisi (Ea) daha düşüktür",
          "en": "On the new pathway the activation energy (Ea) is lower",
          "de": "Auf dem neuen Weg ist die Aktivierungsenergie (Ea) niedriger",
          "fr": "Sur ce nouveau chemin, l'énergie d'activation (Ea) est plus faible",
          "ru": "На новом пути энергия активации (Ea) ниже",
          "ar": "في المسار الجديد تكون طاقة التنشيط (Ea) أقل",
          "zh": "新途径的活化能(Ea)更低",
          "ku": "Di rêya nû de enerjiya aktîvasyonê (Ea) kêmtir e"
        },
        {
          "tr": "Taneciklerin enerjisi değişmediği hâlde, düşen Ea'yı aşan tanecik sayısı artar",
          "en": "Although the particles' energies are unchanged, more particles exceed the lowered Ea",
          "de": "Obwohl die Energie der Teilchen unverändert bleibt, überschreiten mehr Teilchen das gesenkte Ea",
          "fr": "Bien que l'énergie des particules ne change pas, davantage de particules dépassent la Ea abaissée",
          "ru": "Энергия частиц не меняется, но число частиц с энергией выше сниженной Ea возрастает",
          "ar": "مع أن طاقة الجسيمات لا تتغير، يزداد عدد الجسيمات التي تتجاوز Ea المنخفضة",
          "zh": "粒子能量不变，但能量超过降低后的 Ea 的粒子数增加",
          "ku": "Her çend enerjiya perçeyan naguhere jî, hejmara perçeyên ku Ea ya kêmbûyî derbas dikin zêde dibe"
        },
        {
          "tr": "İleri ve geri tepkime aynı oranda hızlanır; entalpi değişimi (ΔH) değişmez",
          "en": "The forward and reverse reactions speed up by the same factor; the enthalpy change (ΔH) stays the same",
          "de": "Hin- und Rückreaktion werden im gleichen Maß schneller; die Enthalpieänderung (ΔH) bleibt gleich",
          "fr": "Les réactions directe et inverse s'accélèrent dans la même proportion ; la variation d'enthalpie (ΔH) reste la même",
          "ru": "Прямая и обратная реакции ускоряются в одинаковой степени; тепловой эффект (ΔH) остаётся прежним",
          "ar": "يتسارع التفاعلان الأمامي والعكسي بالنسبة نفسها؛ ولا تتغير قيمة التغير في المحتوى الحراري (ΔH)",
          "zh": "正、逆反应以相同倍数加快；焓变(ΔH)不变",
          "ku": "Reaksiyonên pêşve û paşve bi heman rêjeyê bileztir dibin; guherîna entalpiyê (ΔH) naguhere"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u17-twin01",
      "stem": {
        "tr": "Bir tepkimenin hız denklemi r = k * [A]^2 * [B] olduğuna göre hız sabiti k'nın birimi aşağıdakilerden hangisidir?",
        "en": "Since the rate equation of a reaction is r = k * [A]^2 * [B], which of the following is the unit of the rate constant k?",
        "de": "Da die Geschwindigkeitsgleichung einer Reaktion r = k * [A]^2 * [B] lautet, welche der folgenden ist die Einheit der Geschwindigkeitskonstante k?",
        "fr": "Puisque l’équation de vitesse d’une réaction est r = k * [A]^2 * [B], laquelle des options suivantes est l’unité de la constante de vitesse k ?",
        "ru": "Кинетическое уравнение реакции имеет вид r = k * [A]^2 * [B]. Какова единица константы скорости k?",
        "ar": "إذا كان قانون سرعة تفاعل ما r = k * [A]^2 * [B]، فأيّ مما يأتي وحدة ثابت السرعة k؟",
        "zh": "某反应的速率方程为 r = k * [A]^2 * [B]，速率常数 k 的单位是下列哪一项？",
        "ku": "Hevkêşeya lezê ya reaksiyonekê r = k * [A]^2 * [B] e. Li gorî vê, yekîneya sabîta lezê k kîjan e?"
      },
      "options": [
        {
          "tr": "L^2 / (mol^2 * s)",
          "en": "L^2 / (mol^2 * s)",
          "de": "L^2 / (mol^2 * s)",
          "fr": "L^2 / (mol^2 * s)",
          "ru": "L^2 / (mol^2 * s)",
          "ar": "L^2 / (mol^2 * s)",
          "zh": "L^2 / (mol^2 * s)",
          "ku": "L^2 / (mol^2 * s)"
        },
        {
          "tr": "L / (mol * s)",
          "en": "L / (mol * s)",
          "de": "L / (mol * s)",
          "fr": "L / (mol * s)",
          "ru": "L / (mol * s)",
          "ar": "L / (mol * s)",
          "zh": "L / (mol * s)",
          "ku": "L / (mol * s)"
        },
        {
          "tr": "mol / (L * s)",
          "en": "mol / (L * s)",
          "de": "mol / (L * s)",
          "fr": "mol / (L * s)",
          "ru": "mol / (L * s)",
          "ar": "mol / (L * s)",
          "zh": "mol / (L * s)",
          "ku": "mol / (L * s)"
        },
        {
          "tr": "L^3 / (mol^3 * s)",
          "en": "L^3 / (mol^3 * s)",
          "de": "L^3 / (mol^3 * s)",
          "fr": "L^3 / (mol^3 * s)",
          "ru": "L^3 / (mol^3 * s)",
          "ar": "L^3 / (mol^3 * s)",
          "zh": "L^3 / (mol^3 * s)",
          "ku": "L^3 / (mol^3 * s)"
        },
        {
          "tr": "s^-1",
          "en": "s^-1",
          "de": "s^-1",
          "fr": "s^-1",
          "ru": "s^-1",
          "ar": "s^-1",
          "zh": "s^-1",
          "ku": "s^-1"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Tepkime derecesi n = 2 + 1 = 3'tür. k birimi = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s).",
        "en": "The order of reaction is n = 2 + 1 = 3. Unit of k = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s).",
        "de": "Die Reaktionsordnung ist n = 2 + 1 = 3. Einheit von k = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s).",
        "fr": "L'ordre de réaction est n = 2 + 1 = 3. Unité de k = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s).",
        "ru": "Порядок реакции: n = 2 + 1 = 3. Единица k = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s).",
        "ar": "رتبة التفاعل هي n = 2 + 1 = 3. وحدة k = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s).",
        "zh": "反应级数 n = 2 + 1 = 3。k 的单位 = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s)。",
        "ku": "Pileya reaksiyonê n = 2 + 1 = 3 e. Yekîneya k = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s)."
      }
    },
    {
      "id": "u17-twin02",
      "stem": {
        "tr": "Kimyasal bir tepkimede uygun pozitif bir katalizör kullanıldığında aşağıdakilerden hangisi değişmez?",
        "en": "Which of the following does not change when a suitable positive catalyst is used in a chemical reaction?",
        "de": "Was ändert sich nicht, wenn ein geeigneter positiver Katalysator in einer chemischen Reaktion verwendet wird?",
        "fr": "Lequel des éléments suivants ne change pas lorsqu’un catalyseur positif approprié est utilisé dans une réaction chimique ?",
        "ru": "Какая из величин не изменяется при использовании в химической реакции подходящего положительного катализатора?",
        "ar": "أيّ مما يأتي لا يتغير عند استخدام حفاز موجب مناسب في تفاعل كيميائي؟",
        "zh": "在化学反应中使用合适的正催化剂时，下列哪一项不会改变？",
        "ku": "Dema di reaksiyoneke kîmyewî de katalîzoreke erênî ya guncav tê bikaranîn, kîjan ji van naguhere?"
      },
      "options": [
        {
          "tr": "Tepkime entalpisi (ΔH)",
          "en": "Reaction enthalpy (ΔH)",
          "de": "Reaktionsenthalpie (ΔH)",
          "fr": "Enthalpie de réaction (ΔH)",
          "ru": "Энтальпия реакции (ΔH)",
          "ar": "المحتوى الحراري للتفاعل (ΔH)",
          "zh": "反应焓变(ΔH)",
          "ku": "Entalpiya reaksiyonê (ΔH)"
        },
        {
          "tr": "İleri aktifleşme enerjisi (Eai)",
          "en": "Forward activation energy (Eai)",
          "de": "Vorwärtsaktivierungsenergie (Eai)",
          "fr": "Énergie d'activation directe (Eai)",
          "ru": "Энергия активации прямой реакции Ea(пр)",
          "ar": "طاقة التنشيط الأمامية (Eai)",
          "zh": "正反应活化能(Eai)",
          "ku": "Enerjiya aktîvasyonê ya pêşve (Eai)"
        },
        {
          "tr": "Tepkime hızı",
          "en": "Reaction rate",
          "de": "Reaktionsgeschwindigkeit",
          "fr": "Vitesse de réaction",
          "ru": "Скорость реакции",
          "ar": "سرعة التفاعل",
          "zh": "反应速率",
          "ku": "Leza reaksiyonê"
        },
        {
          "tr": "Hız sabiti (k)",
          "en": "Rate constant (k)",
          "de": "Geschwindigkeitskonstante (k)",
          "fr": "Constante de vitesse (k)",
          "ru": "Константа скорости (k)",
          "ar": "ثابت السرعة (k)",
          "zh": "速率常数(k)",
          "ku": "Sabîta lezê (k)"
        },
        {
          "tr": "Aktifleşmiş kompleksin potansiyel enerjisi",
          "en": "Potential energy of activated complex",
          "de": "Potenzielle Energie des aktivierten Komplexes",
          "fr": "Énergie potentielle du complexe activé",
          "ru": "Потенциальная энергия активированного комплекса",
          "ar": "الطاقة الكامنة للمعقد المنشط",
          "zh": "活化络合物的势能",
          "ku": "Enerjiya potansiyel a kompleksa aktîvkirî"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Katalizör, aktifleşmiş kompleksin potansiyel enerjisini düşürerek ileri ve geri aktifleşme enerjilerini (Eai ve Eag) aynı miktarda azaltır; bu yüzden hız sabiti ve tepkime hızı artar. Girenlerin ve ürünlerin potansiyel enerjisi değişmediğinden tepkime entalpisi (ΔH = Eai - Eag) aynı kalır.",
        "en": "A catalyst lowers the potential energy of the activated complex and so reduces the forward and reverse activation energies (Eai and Eag) by the same amount; the rate constant and the rate therefore increase. Because the potential energies of the reactants and products are unchanged, the reaction enthalpy (ΔH = Eai - Eag) stays the same.",
        "de": "Ein Katalysator senkt die potenzielle Energie des aktivierten Komplexes und verringert damit die Aktivierungsenergien der Hin- und Rückreaktion (Eai und Eag) um denselben Betrag; Geschwindigkeitskonstante und Reaktionsgeschwindigkeit nehmen daher zu. Da die potenziellen Energien der Edukte und Produkte unverändert bleiben, bleibt die Reaktionsenthalpie (ΔH = Eai - Eag) gleich.",
        "fr": "Un catalyseur abaisse l'énergie potentielle du complexe activé et réduit ainsi du même montant les énergies d'activation directe et inverse (Eai et Eag) ; la constante de vitesse et la vitesse augmentent donc. Comme les énergies potentielles des réactifs et des produits ne changent pas, l'enthalpie de réaction (ΔH = Eai - Eag) reste la même.",
        "ru": "Катализатор понижает потенциальную энергию активированного комплекса и тем самым уменьшает энергии активации прямой и обратной реакций (Ea(пр) и Ea(обр)) на одну и ту же величину; поэтому константа скорости и скорость реакции возрастают. Потенциальные энергии реагентов и продуктов не меняются, поэтому энтальпия реакции (ΔH = Ea(пр) - Ea(обр)) остаётся прежней.",
        "ar": "يخفض الحفاز الطاقة الكامنة للمعقد المنشط فيقلّل طاقتي التنشيط الأمامية والعكسية (Eai وEag) بالمقدار نفسه؛ ولذلك يزداد ثابت السرعة وسرعة التفاعل. ولأن الطاقة الكامنة للمتفاعلات والنواتج لا تتغير، يبقى المحتوى الحراري للتفاعل (ΔH = Eai - Eag) كما هو.",
        "zh": "催化剂降低活化络合物的势能，使正、逆反应的活化能(Eai 和 Eag)降低相同的数值，因此速率常数和反应速率增大。反应物和生成物的势能不变，所以反应焓变(ΔH = Eai - Eag)保持不变。",
        "ku": "Katalîzor enerjiya potansiyel a kompleksa aktîvkirî kêm dike û bi vî awayî enerjiyên aktîvasyonê yên pêşve û paşve (Eai û Eag) bi heman mîqdarê kêm dike; ji ber vê yekê sabîta lezê û leza reaksiyonê zêde dibin. Ji ber ku enerjiya potansiyel a reaktant û hilberan naguhere, entalpiya reaksiyonê (ΔH = Eai - Eag) wekî xwe dimîne."
      }
    },
    {
      "id": "u17-twin03",
      "stem": {
        "tr": "2A(g) + B(g) → C(g) tepkimesi için sabit sıcaklıkta yapılan deneylerin sonuçları şöyledir: 1. deney: [A] = 0,1 M, [B] = 0,1 M, hız = 2×10^-4 mol/(L·s); 2. deney: [A] = 0,2 M, [B] = 0,1 M, hız = 8×10^-4 mol/(L·s); 3. deney: [A] = 0,2 M, [B] = 0,2 M, hız = 8×10^-4 mol/(L·s). Buna göre tepkimenin hız bağıntısı aşağıdakilerden hangisidir?",
        "en": "For the reaction 2A(g) + B(g) → C(g), experiments at constant temperature gave: Experiment 1: [A] = 0.1 M, [B] = 0.1 M, rate = 2×10^-4 mol/(L·s); Experiment 2: [A] = 0.2 M, [B] = 0.1 M, rate = 8×10^-4 mol/(L·s); Experiment 3: [A] = 0.2 M, [B] = 0.2 M, rate = 8×10^-4 mol/(L·s). What is the rate law of the reaction?",
        "de": "Für die Reaktion 2A(g) + B(g) → C(g) ergaben Versuche bei konstanter Temperatur: Versuch 1: [A] = 0,1 M, [B] = 0,1 M, Geschwindigkeit = 2×10^-4 mol/(L·s); Versuch 2: [A] = 0,2 M, [B] = 0,1 M, Geschwindigkeit = 8×10^-4 mol/(L·s); Versuch 3: [A] = 0,2 M, [B] = 0,2 M, Geschwindigkeit = 8×10^-4 mol/(L·s). Wie lautet das Geschwindigkeitsgesetz?",
        "fr": "Pour la réaction 2A(g) + B(g) → C(g), des expériences à température constante ont donné : expérience 1 : [A] = 0,1 M, [B] = 0,1 M, vitesse = 2×10^-4 mol/(L·s) ; expérience 2 : [A] = 0,2 M, [B] = 0,1 M, vitesse = 8×10^-4 mol/(L·s) ; expérience 3 : [A] = 0,2 M, [B] = 0,2 M, vitesse = 8×10^-4 mol/(L·s). Quelle est la loi de vitesse de la réaction ?",
        "ru": "Для реакции 2A(г) + B(г) → C(г) при постоянной температуре получены данные: опыт 1: [A] = 0,1 M, [B] = 0,1 M, скорость = 2×10^-4 моль/(л·с); опыт 2: [A] = 0,2 M, [B] = 0,1 M, скорость = 8×10^-4 моль/(л·с); опыт 3: [A] = 0,2 M, [B] = 0,2 M, скорость = 8×10^-4 моль/(л·с). Какое кинетическое уравнение соответствует этой реакции?",
        "ar": "للتفاعل 2A(g) + B(g) → C(g) أعطت تجارب عند درجة حرارة ثابتة النتائج التالية: التجربة 1: [A] = 0.1 M و[B] = 0.1 M والسرعة = 2×10^-4 mol/(L·s)؛ التجربة 2: [A] = 0.2 M و[B] = 0.1 M والسرعة = 8×10^-4 mol/(L·s)؛ التجربة 3: [A] = 0.2 M و[B] = 0.2 M والسرعة = 8×10^-4 mol/(L·s). ما قانون سرعة التفاعل؟",
        "zh": "对于反应 2A(g) + B(g) → C(g)，恒温下的实验结果为：实验1：[A] = 0.1 M，[B] = 0.1 M，速率 = 2×10^-4 mol/(L·s)；实验2：[A] = 0.2 M，[B] = 0.1 M，速率 = 8×10^-4 mol/(L·s)；实验3：[A] = 0.2 M，[B] = 0.2 M，速率 = 8×10^-4 mol/(L·s)。该反应的速率方程是哪一项？",
        "ku": "Ji bo reaksiyona 2A(g) + B(g) → C(g), encamên ceribandinên di germahiya sabît de hatine kirin ev in: ceribandina 1.: [A] = 0,1 M, [B] = 0,1 M, lez = 2×10^-4 mol/(L·s); ceribandina 2.: [A] = 0,2 M, [B] = 0,1 M, lez = 8×10^-4 mol/(L·s); ceribandina 3.: [A] = 0,2 M, [B] = 0,2 M, lez = 8×10^-4 mol/(L·s). Li gorî vê, hevkêşeya lezê ya reaksiyonê kîjan e?"
      },
      "options": [
        {
          "tr": "r = k[A]^2",
          "en": "r = k[A]^2",
          "de": "r = k[A]^2",
          "fr": "r = k[A]^2",
          "ru": "r = k[A]^2",
          "ar": "r = k[A]^2",
          "zh": "r = k[A]^2",
          "ku": "r = k[A]^2"
        },
        {
          "tr": "r = k[A]^2[B]",
          "en": "r = k[A]^2[B]",
          "de": "r = k[A]^2[B]",
          "fr": "r = k[A]^2[B]",
          "ru": "r = k[A]^2[B]",
          "ar": "r = k[A]^2[B]",
          "zh": "r = k[A]^2[B]",
          "ku": "r = k[A]^2[B]"
        },
        {
          "tr": "r = k[A][B]",
          "en": "r = k[A][B]",
          "de": "r = k[A][B]",
          "fr": "r = k[A][B]",
          "ru": "r = k[A][B]",
          "ar": "r = k[A][B]",
          "zh": "r = k[A][B]",
          "ku": "r = k[A][B]"
        },
        {
          "tr": "r = k[A]",
          "en": "r = k[A]",
          "de": "r = k[A]",
          "fr": "r = k[A]",
          "ru": "r = k[A]",
          "ar": "r = k[A]",
          "zh": "r = k[A]",
          "ku": "r = k[A]"
        },
        {
          "tr": "r = k[B]",
          "en": "r = k[B]",
          "de": "r = k[B]",
          "fr": "r = k[B]",
          "ru": "r = k[B]",
          "ar": "r = k[B]",
          "zh": "r = k[B]",
          "ku": "r = k[B]"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "1. ve 2. deneyde [B] sabit, [A] 2 katına çıkınca hız 2×10^-4'ten 8×10^-4'e, yani 4 katına çıkmış: 2^x = 4 → A'ya göre 2. derece. 2. ve 3. deneyde [A] sabit, [B] 2 katına çıkınca hız değişmemiş: B'ye göre 0. derece. r = k[A]^2. Net denklemdeki katsayılardan r = k[A]^2[B] yazmak tipik hatadır; derece deney verisinden bulunur.",
        "en": "In experiments 1 and 2 [B] is constant; doubling [A] raises the rate from 2×10^-4 to 8×10^-4, i.e. 4 times: 2^x = 4 → second order in A. In experiments 2 and 3 [A] is constant; doubling [B] leaves the rate unchanged: zero order in B. r = k[A]^2. Writing r = k[A]^2[B] from the coefficients of the net equation is the typical mistake; orders come from the data.",
        "de": "In Versuch 1 und 2 ist [B] konstant; Verdopplung von [A] erhöht die Geschwindigkeit von 2×10^-4 auf 8×10^-4, also auf das 4-Fache: 2^x = 4 → 2. Ordnung bezüglich A. In Versuch 2 und 3 ist [A] konstant; Verdopplung von [B] ändert die Geschwindigkeit nicht: 0. Ordnung bezüglich B. r = k[A]^2. r = k[A]^2[B] aus den Koeffizienten der Nettogleichung abzulesen ist der typische Fehler; Ordnungen stammen aus den Messdaten.",
        "fr": "Dans les expériences 1 et 2, [B] est constante ; doubler [A] fait passer la vitesse de 2×10^-4 à 8×10^-4, soit 4 fois : 2^x = 4 → ordre 2 par rapport à A. Dans les expériences 2 et 3, [A] est constante ; doubler [B] ne change pas la vitesse : ordre 0 par rapport à B. r = k[A]^2. Écrire r = k[A]^2[B] d'après les coefficients de l'équation bilan est l'erreur typique ; les ordres viennent des données.",
        "ru": "В опытах 1 и 2 [B] постоянна; при удвоении [A] скорость растёт с 2×10^-4 до 8×10^-4, т. е. в 4 раза: 2^x = 4 → второй порядок по A. В опытах 2 и 3 [A] постоянна; удвоение [B] скорость не меняет: нулевой порядок по B. r = k[A]^2. Записать r = k[A]^2[B] по коэффициентам суммарного уравнения — типичная ошибка: порядки находят из опытных данных.",
        "ar": "في التجربتين 1 و2 يبقى [B] ثابتًا؛ ومضاعفة [A] ترفع السرعة من 2×10^-4 إلى 8×10^-4 أي 4 مرات: 2^x = 4 → الرتبة الثانية بالنسبة إلى A. في التجربتين 2 و3 يبقى [A] ثابتًا؛ ومضاعفة [B] لا تغيّر السرعة: الرتبة صفر بالنسبة إلى B. r = k[A]^2. كتابة r = k[A]^2[B] من معاملات المعادلة الصافية خطأ شائع؛ فالرتب تُستخرج من البيانات التجريبية.",
        "zh": "实验1和2中[B]不变，[A]加倍时速率由2×10^-4增至8×10^-4，即4倍：2^x = 4 → 对A为二级。实验2和3中[A]不变，[B]加倍时速率不变：对B为零级。r = k[A]^2。按总反应方程式的系数写成r = k[A]^2[B]是典型错误；级数必须由实验数据确定。",
        "ku": "Di ceribandina 1. û 2. de [B] sabît e; dema [A] du qat dibe, lez ji 2×10^-4 dibe 8×10^-4, ango 4 qat: 2^x = 4 → li gorî A pileya 2. e. Di ceribandina 2. û 3. de [A] sabît e; dema [B] du qat dibe lez naguhere: li gorî B pileya 0. e. r = k[A]^2. Nivîsandina r = k[A]^2[B] li gorî hevberên hevkêşeya net şaşiyeke tîpîk e; pile ji daneyên ceribandinê tê dîtin."
      }
    },
    {
      "id": "u17-twin04",
      "stem": {
        "tr": "Tek basamakta (temel tepkime olarak) gerçekleşen X(g) + 2Y(g) → Z(g) tepkimesinde belirli bir sıcaklıkta [X] = 0,2 M ve [Y] = 0,1 M iken tepkime hızı 4×10^-4 mol/(L·s) olarak ölçülüyor. Buna göre bu sıcaklıkta hız sabiti k aşağıdakilerden hangisidir?",
        "en": "For the reaction X(g) + 2Y(g) → Z(g), which occurs in a single (elementary) step, the rate at a certain temperature is 4×10^-4 mol/(L·s) when [X] = 0.2 M and [Y] = 0.1 M. What is the rate constant k at this temperature?",
        "de": "Für die in einem einzigen Schritt (als Elementarreaktion) ablaufende Reaktion X(g) + 2Y(g) → Z(g) beträgt die Geschwindigkeit bei einer bestimmten Temperatur 4×10^-4 mol/(L·s), wenn [X] = 0,2 M und [Y] = 0,1 M sind. Wie groß ist die Geschwindigkeitskonstante k bei dieser Temperatur?",
        "fr": "Pour la réaction X(g) + 2Y(g) → Z(g), qui se fait en une seule étape (réaction élémentaire), la vitesse mesurée à une certaine température vaut 4×10^-4 mol/(L·s) lorsque [X] = 0,2 M et [Y] = 0,1 M. Quelle est la constante de vitesse k à cette température ?",
        "ru": "Реакция X(г) + 2Y(г) → Z(г) протекает в одну стадию (элементарная реакция). При некоторой температуре, когда [X] = 0,2 M и [Y] = 0,1 M, скорость равна 4×10^-4 моль/(л·с). Чему равна константа скорости k при этой температуре?",
        "ar": "التفاعل X(g) + 2Y(g) → Z(g) يحدث في خطوة واحدة (تفاعل أولي). عند درجة حرارة معيّنة، وعندما [X] = 0.2 M و[Y] = 0.1 M، كانت السرعة 4×10^-4 mol/(L·s). ما قيمة ثابت السرعة k عند هذه الدرجة؟",
        "zh": "反应 X(g) + 2Y(g) → Z(g) 一步完成（基元反应）。在某温度下，当[X] = 0.2 M、[Y] = 0.1 M时，测得速率为4×10^-4 mol/(L·s)。该温度下速率常数k为多少？",
        "ku": "Reaksiyona X(g) + 2Y(g) → Z(g) di yek gavê de (wekî reaksiyoneke bingehîn) pêk tê. Di germahiyeke diyar de, dema [X] = 0,2 M û [Y] = 0,1 M e, leza reaksiyonê 4×10^-4 mol/(L·s) tê pîvandin. Li gorî vê, di vê germahiyê de sabîta lezê k kîjan e?"
      },
      "options": [
        {
          "tr": "0,02 L/(mol·s)",
          "en": "0.02 L/(mol·s)",
          "de": "0,02 L/(mol·s)",
          "fr": "0,02 L/(mol·s)",
          "ru": "0,02 L/(mol·s)",
          "ar": "0.02 L/(mol·s)",
          "zh": "0.02 L/(mol·s)",
          "ku": "0,02 L/(mol·s)"
        },
        {
          "tr": "0,05 L^2/(mol^2·s)",
          "en": "0.05 L^2/(mol^2·s)",
          "de": "0,05 L^2/(mol^2·s)",
          "fr": "0,05 L^2/(mol^2·s)",
          "ru": "0,05 L^2/(mol^2·s)",
          "ar": "0.05 L^2/(mol^2·s)",
          "zh": "0.05 L^2/(mol^2·s)",
          "ku": "0,05 L^2/(mol^2·s)"
        },
        {
          "tr": "0,2 L/(mol·s)",
          "en": "0.2 L/(mol·s)",
          "de": "0,2 L/(mol·s)",
          "fr": "0,2 L/(mol·s)",
          "ru": "0,2 L/(mol·s)",
          "ar": "0.2 L/(mol·s)",
          "zh": "0.2 L/(mol·s)",
          "ku": "0,2 L/(mol·s)"
        },
        {
          "tr": "0,2 L^2/(mol^2·s)",
          "en": "0.2 L^2/(mol^2·s)",
          "de": "0,2 L^2/(mol^2·s)",
          "fr": "0,2 L^2/(mol^2·s)",
          "ru": "0,2 L^2/(mol^2·s)",
          "ar": "0.2 L^2/(mol^2·s)",
          "zh": "0.2 L^2/(mol^2·s)",
          "ku": "0,2 L^2/(mol^2·s)"
        },
        {
          "tr": "5 L^2/(mol^2·s)",
          "en": "5 L^2/(mol^2·s)",
          "de": "5 L^2/(mol^2·s)",
          "fr": "5 L^2/(mol^2·s)",
          "ru": "5 L^2/(mol^2·s)",
          "ar": "5 L^2/(mol^2·s)",
          "zh": "5 L^2/(mol^2·s)",
          "ku": "5 L^2/(mol^2·s)"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Temel tepkimede üsler katsayılara eşittir: r = k[X][Y]^2. 4×10^-4 = k · 0,2 · (0,1)^2 = k · 2×10^-3 → k = 0,2. Toplam derece 3 olduğundan birim (L/mol)^2·s^-1 = L^2/(mol^2·s). [Y]'nin karesi alınmazsa 0,02, katsayı derişimin içine yazılıp (0,2)^2 kullanılırsa 0,05, oran ters kurulursa 5 bulunur; 0,2 L/(mol·s) ise doğru sayıya yanlış (2. derece) birim yazmaktır.",
        "en": "For an elementary reaction the exponents equal the coefficients: r = k[X][Y]^2. 4×10^-4 = k · 0.2 · (0.1)^2 = k · 2×10^-3 → k = 0.2. The overall order is 3, so the unit is (L/mol)^2·s^-1 = L^2/(mol^2·s). Forgetting to square [Y] gives 0.02; putting the coefficient inside the concentration, (0.2)^2, gives 0.05; inverting the ratio gives 5; 0.2 L/(mol·s) is the right number with a second-order unit.",
        "de": "Bei einer Elementarreaktion sind die Exponenten gleich den Koeffizienten: r = k[X][Y]^2. 4×10^-4 = k · 0,2 · (0,1)^2 = k · 2×10^-3 → k = 0,2. Die Gesamtordnung ist 3, also Einheit (L/mol)^2·s^-1 = L^2/(mol^2·s). Ohne Quadrieren von [Y] erhält man 0,02; setzt man den Koeffizienten in die Konzentration, (0,2)^2, erhält man 0,05; der umgekehrte Quotient ergibt 5; 0,2 L/(mol·s) ist die richtige Zahl mit der Einheit 2. Ordnung.",
        "fr": "Pour une réaction élémentaire, les exposants sont égaux aux coefficients : r = k[X][Y]^2. 4×10^-4 = k · 0,2 · (0,1)^2 = k · 2×10^-3 → k = 0,2. L'ordre global vaut 3, d'où l'unité (L/mol)^2·s^-1 = L^2/(mol^2·s). Oublier d'élever [Y] au carré donne 0,02 ; mettre le coefficient dans la concentration, (0,2)^2, donne 0,05 ; inverser le rapport donne 5 ; 0,2 L/(mol·s) est le bon nombre avec une unité d'ordre 2.",
        "ru": "Для элементарной реакции показатели степеней равны коэффициентам: r = k[X][Y]^2. 4×10^-4 = k · 0,2 · (0,1)^2 = k · 2×10^-3 → k = 0,2. Общий порядок равен 3, поэтому единица (L/mol)^2·s^-1 = L^2/(mol^2·s). Если не возвести [Y] в квадрат, получится 0,02; если внести коэффициент в концентрацию и взять (0,2)^2 — 0,05; если перевернуть отношение — 5; 0,2 L/(mol·s) — верное число, но с единицей второго порядка.",
        "ar": "في التفاعل الأولي تساوي الأسسُ المعاملات: r = k[X][Y]^2. 4×10^-4 = k · 0.2 · (0.1)^2 = k · 2×10^-3 → k = 0.2. الرتبة الكلية 3، لذا الوحدة (L/mol)^2·s^-1 = L^2/(mol^2·s). إهمال تربيع [Y] يعطي 0.02، وإدخال المعامل في التركيز (0.2)^2 يعطي 0.05، وقلب النسبة يعطي 5، أما 0.2 L/(mol·s) فهو العدد الصحيح بوحدة الرتبة الثانية.",
        "zh": "基元反应的指数等于系数：r = k[X][Y]^2。4×10^-4 = k · 0.2 · (0.1)^2 = k · 2×10^-3 → k = 0.2。总级数为3，单位为(L/mol)^2·s^-1 = L^2/(mol^2·s)。忘记把[Y]平方得0.02；把系数代入浓度用(0.2)^2得0.05；比值倒置得5；0.2 L/(mol·s)是数值正确但单位按二级写错。",
        "ku": "Di reaksiyona bingehîn de hêz wekhevî hevberan in: r = k[X][Y]^2. 4×10^-4 = k · 0,2 · (0,1)^2 = k · 2×10^-3 → k = 0,2. Ji ber ku pileya giştî 3 e, yekîne (L/mol)^2·s^-1 = L^2/(mol^2·s) e. Heke [Y] neyê duhêzkirin 0,02, heke hevber bikeve nav tîrbûnê û (0,2)^2 were bikaranîn 0,05, heke rêje berevajî were danîn 5 tê dîtin; 0,2 L/(mol·s) jî nivîsandina yekîneyeke şaş (ya pileya 2.) li ser hejmara rast e."
      }
    },
    {
      "id": "u17-twin05",
      "stem": {
        "tr": "NO2(g) + CO(g) → NO(g) + CO2(g) tepkimesinin mekanizması şöyledir: 1. basamak: NO2(g) + NO2(g) → NO3(g) + NO(g) (yavaş); 2. basamak: NO3(g) + CO(g) → NO2(g) + CO2(g) (hızlı). Buna göre, I. Tepkimenin hız bağıntısı r = k[NO2]^2'dir. II. NO3 ara üründür. III. Sabit sıcaklıkta CO derişimi artırılırsa tepkime hızı artar. yargılarından hangileri doğrudur?",
        "en": "The mechanism of the reaction NO2(g) + CO(g) → NO(g) + CO2(g) is: Step 1: NO2(g) + NO2(g) → NO3(g) + NO(g) (slow); Step 2: NO3(g) + CO(g) → NO2(g) + CO2(g) (fast). Accordingly, which of the following statements are correct? I. The rate law is r = k[NO2]^2. II. NO3 is an intermediate. III. At constant temperature, increasing the CO concentration increases the reaction rate.",
        "de": "Der Mechanismus der Reaktion NO2(g) + CO(g) → NO(g) + CO2(g) lautet: Schritt 1: NO2(g) + NO2(g) → NO3(g) + NO(g) (langsam); Schritt 2: NO3(g) + CO(g) → NO2(g) + CO2(g) (schnell). Welche Aussagen sind richtig? I. Das Geschwindigkeitsgesetz lautet r = k[NO2]^2. II. NO3 ist ein Zwischenprodukt. III. Bei konstanter Temperatur erhöht eine größere CO-Konzentration die Reaktionsgeschwindigkeit.",
        "fr": "Le mécanisme de la réaction NO2(g) + CO(g) → NO(g) + CO2(g) est : étape 1 : NO2(g) + NO2(g) → NO3(g) + NO(g) (lente) ; étape 2 : NO3(g) + CO(g) → NO2(g) + CO2(g) (rapide). Lesquelles des affirmations suivantes sont correctes ? I. La loi de vitesse est r = k[NO2]^2. II. NO3 est un intermédiaire réactionnel. III. À température constante, augmenter la concentration de CO augmente la vitesse de réaction.",
        "ru": "Механизм реакции NO2(г) + CO(г) → NO(г) + CO2(г): стадия 1: NO2(г) + NO2(г) → NO3(г) + NO(г) (медленная); стадия 2: NO3(г) + CO(г) → NO2(г) + CO2(г) (быстрая). Какие из утверждений верны? I. Уравнение скорости: r = k[NO2]^2. II. NO3 — промежуточное вещество. III. При постоянной температуре увеличение концентрации CO увеличивает скорость реакции.",
        "ar": "آلية التفاعل NO2(g) + CO(g) → NO(g) + CO2(g) هي: الخطوة 1: NO2(g) + NO2(g) → NO3(g) + NO(g) (بطيئة)؛ الخطوة 2: NO3(g) + CO(g) → NO2(g) + CO2(g) (سريعة). أيّ العبارات التالية صحيحة؟ I. قانون السرعة هو r = k[NO2]^2. II. NO3 مركب وسيط. III. عند ثبات درجة الحرارة تؤدي زيادة تركيز CO إلى زيادة سرعة التفاعل.",
        "zh": "反应 NO2(g) + CO(g) → NO(g) + CO2(g) 的机理为：第1步：NO2(g) + NO2(g) → NO3(g) + NO(g)（慢）；第2步：NO3(g) + CO(g) → NO2(g) + CO2(g)（快）。有下列说法：I. 速率方程为 r = k[NO2]^2。II. NO3 是中间产物。III. 恒温下增大 CO 浓度，反应速率增大。其中正确的是哪些？",
        "ku": "Mekanîzmaya reaksiyona NO2(g) + CO(g) → NO(g) + CO2(g) ev e: gava 1.: NO2(g) + NO2(g) → NO3(g) + NO(g) (hêdî); gava 2.: NO3(g) + CO(g) → NO2(g) + CO2(g) (bilez). Li gorî vê, kîjan ji van gotinan rast in? I. Hevkêşeya lezê ya reaksiyonê r = k[NO2]^2 e. II. NO3 hilbera navber e. III. Di germahiya sabît de heke tîrbûna CO were zêdekirin, leza reaksiyonê zêde dibe."
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
        "tr": "I doğru: hız, yavaş basamağın girenlerine göre yazılır; yavaş basamakta iki NO2 çarpıştığı için r = k[NO2]^2. II doğru: NO3 1. basamakta oluşup 2. basamakta harcanır ve net denklemde yoktur. III yanlış: CO yalnızca hızlı basamakta yer alır, hız bağıntısında bulunmadığı için derişimi hızı değiştirmez.",
        "en": "I is correct: the rate law is written from the reactants of the slow step; two NO2 molecules collide there, so r = k[NO2]^2. II is correct: NO3 forms in step 1, is consumed in step 2 and is absent from the net equation. III is wrong: CO appears only in the fast step and is not in the rate law, so its concentration does not change the rate.",
        "de": "I ist richtig: Das Geschwindigkeitsgesetz folgt aus den Edukten des langsamen Schritts; dort stoßen zwei NO2 zusammen, also r = k[NO2]^2. II ist richtig: NO3 entsteht in Schritt 1, wird in Schritt 2 verbraucht und fehlt in der Nettogleichung. III ist falsch: CO kommt nur im schnellen Schritt vor und steht nicht im Geschwindigkeitsgesetz, seine Konzentration ändert die Geschwindigkeit nicht.",
        "fr": "I est correcte : la loi de vitesse s'écrit avec les réactifs de l'étape lente, où deux NO2 se heurtent, donc r = k[NO2]^2. II est correcte : NO3 se forme à l'étape 1, est consommé à l'étape 2 et n'apparaît pas dans l'équation bilan. III est fausse : CO n'intervient que dans l'étape rapide et ne figure pas dans la loi de vitesse ; sa concentration ne modifie pas la vitesse.",
        "ru": "I верно: уравнение скорости записывают по реагентам медленной стадии, где сталкиваются две молекулы NO2, поэтому r = k[NO2]^2. II верно: NO3 образуется на стадии 1, расходуется на стадии 2 и отсутствует в суммарном уравнении. III неверно: CO участвует только в быстрой стадии и не входит в уравнение скорости, поэтому его концентрация на скорость не влияет.",
        "ar": "I صحيحة: يُكتب قانون السرعة بدلالة متفاعلات الخطوة البطيئة، وفيها يتصادم جزيئان من NO2، لذا r = k[NO2]^2. II صحيحة: يتكوّن NO3 في الخطوة 1 ويُستهلك في الخطوة 2 ولا يظهر في المعادلة الصافية. III خاطئة: يظهر CO في الخطوة السريعة فقط ولا يدخل في قانون السرعة، فلا يغيّر تركيزه السرعة.",
        "zh": "I正确：速率方程按慢步骤的反应物书写，慢步骤中两个NO2碰撞，所以 r = k[NO2]^2。II正确：NO3在第1步生成、第2步消耗，不出现在总方程式中。III错误：CO只出现在快步骤中，不在速率方程里，其浓度不影响速率。",
        "ku": "I rast e: hevkêşeya lezê li gorî reaktantên gava hêdî tê nivîsandin; ji ber ku di gava hêdî de du NO2 li hev dikevin, r = k[NO2]^2 e. II rast e: NO3 di gava 1. de çêdibe, di gava 2. de tê xerckirin û di hevkêşeya net de tune. III şaş e: CO tenê di gava bilez de heye; ji ber ku di hevkêşeya lezê de nîne, tîrbûna wê lezê naguherîne."
      }
    },
    {
      "id": "u17-twin06",
      "stem": {
        "tr": "Bir tepkimenin potansiyel enerji–tepkime koordinatı grafiğinde girenlerin potansiyel enerjisi 40 kJ, aktifleşmiş kompleksin potansiyel enerjisi 120 kJ ve ürünlerin potansiyel enerjisi 10 kJ'dir. Buna göre geri tepkimenin aktifleşme enerjisi (Eag) ve ileri tepkimenin entalpi değişimi (ΔH) aşağıdakilerden hangisidir?",
        "en": "On the potential energy–reaction coordinate diagram of a reaction, the potential energy of the reactants is 40 kJ, that of the activated complex is 120 kJ and that of the products is 10 kJ. What are the activation energy of the reverse reaction (Ea,reverse) and the enthalpy change (ΔH) of the forward reaction?",
        "de": "Im Diagramm potenzielle Energie–Reaktionskoordinate einer Reaktion beträgt die potenzielle Energie der Edukte 40 kJ, die des aktivierten Komplexes 120 kJ und die der Produkte 10 kJ. Wie groß sind die Aktivierungsenergie der Rückreaktion (Ea,rück) und die Enthalpieänderung (ΔH) der Hinreaktion?",
        "fr": "Sur le diagramme énergie potentielle–coordonnée de réaction d'une réaction, l'énergie potentielle des réactifs vaut 40 kJ, celle du complexe activé 120 kJ et celle des produits 10 kJ. Quelles sont l'énergie d'activation de la réaction inverse (Ea,inv) et la variation d'enthalpie (ΔH) de la réaction directe ?",
        "ru": "На диаграмме «потенциальная энергия — координата реакции» потенциальная энергия реагентов равна 40 кДж, активированного комплекса — 120 кДж, продуктов — 10 кДж. Чему равны энергия активации обратной реакции Ea(обр) и изменение энтальпии (ΔH) прямой реакции?",
        "ar": "في مخطط الطاقة الكامنة–مسار التفاعل لتفاعل ما، تبلغ الطاقة الكامنة للمتفاعلات 40 kJ، وللمعقد المنشَّط 120 kJ، وللنواتج 10 kJ. ما طاقة تنشيط التفاعل العكسي (Eag) والتغير في المحتوى الحراري (ΔH) للتفاعل الأمامي؟",
        "zh": "某反应的势能–反应进程图中，反应物的势能为 40 kJ，活化络合物的势能为 120 kJ，生成物的势能为 10 kJ。逆反应的活化能(Ea,逆)和正反应的焓变(ΔH)分别是多少？",
        "ku": "Di grafîka enerjiya potansiyel–koordînata reaksiyonê ya reaksiyonekê de, enerjiya potansiyel a reaktantan 40 kJ, ya kompleksa aktîvkirî 120 kJ û ya hilberan 10 kJ e. Li gorî vê, enerjiya aktîvasyonê ya reaksiyona paşve (Ea,paş) û guherîna entalpiyê (ΔH) ya reaksiyona pêşve kîjan in?"
      },
      "options": [
        {
          "tr": "Eag = 80 kJ; ΔH = -30 kJ",
          "en": "Ea,reverse = 80 kJ; ΔH = -30 kJ",
          "de": "Ea,rück = 80 kJ; ΔH = -30 kJ",
          "fr": "Ea,inv = 80 kJ ; ΔH = -30 kJ",
          "ru": "Ea(обр) = 80 кДж; ΔH = -30 кДж",
          "ar": "Eag = 80 kJ؛ ΔH = -30 kJ",
          "zh": "Ea,逆 = 80 kJ；ΔH = -30 kJ",
          "ku": "Ea,paş = 80 kJ; ΔH = -30 kJ"
        },
        {
          "tr": "Eag = 110 kJ; ΔH = -30 kJ",
          "en": "Ea,reverse = 110 kJ; ΔH = -30 kJ",
          "de": "Ea,rück = 110 kJ; ΔH = -30 kJ",
          "fr": "Ea,inv = 110 kJ ; ΔH = -30 kJ",
          "ru": "Ea(обр) = 110 кДж; ΔH = -30 кДж",
          "ar": "Eag = 110 kJ؛ ΔH = -30 kJ",
          "zh": "Ea,逆 = 110 kJ；ΔH = -30 kJ",
          "ku": "Ea,paş = 110 kJ; ΔH = -30 kJ"
        },
        {
          "tr": "Eag = 110 kJ; ΔH = +30 kJ",
          "en": "Ea,reverse = 110 kJ; ΔH = +30 kJ",
          "de": "Ea,rück = 110 kJ; ΔH = +30 kJ",
          "fr": "Ea,inv = 110 kJ ; ΔH = +30 kJ",
          "ru": "Ea(обр) = 110 кДж; ΔH = +30 кДж",
          "ar": "Eag = 110 kJ؛ ΔH = +30 kJ",
          "zh": "Ea,逆 = 110 kJ；ΔH = +30 kJ",
          "ku": "Ea,paş = 110 kJ; ΔH = +30 kJ"
        },
        {
          "tr": "Eag = 120 kJ; ΔH = -30 kJ",
          "en": "Ea,reverse = 120 kJ; ΔH = -30 kJ",
          "de": "Ea,rück = 120 kJ; ΔH = -30 kJ",
          "fr": "Ea,inv = 120 kJ ; ΔH = -30 kJ",
          "ru": "Ea(обр) = 120 кДж; ΔH = -30 кДж",
          "ar": "Eag = 120 kJ؛ ΔH = -30 kJ",
          "zh": "Ea,逆 = 120 kJ；ΔH = -30 kJ",
          "ku": "Ea,paş = 120 kJ; ΔH = -30 kJ"
        },
        {
          "tr": "Eag = 130 kJ; ΔH = +30 kJ",
          "en": "Ea,reverse = 130 kJ; ΔH = +30 kJ",
          "de": "Ea,rück = 130 kJ; ΔH = +30 kJ",
          "fr": "Ea,inv = 130 kJ ; ΔH = +30 kJ",
          "ru": "Ea(обр) = 130 кДж; ΔH = +30 кДж",
          "ar": "Eag = 130 kJ؛ ΔH = +30 kJ",
          "zh": "Ea,逆 = 130 kJ；ΔH = +30 kJ",
          "ku": "Ea,paş = 130 kJ; ΔH = +30 kJ"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Eai = 120 - 40 = 80 kJ; Eag = 120 - 10 = 110 kJ. ΔH = PE(ürünler) - PE(girenler) = 10 - 40 = -30 kJ (ekzotermik); kontrol: ΔH = Eai - Eag = 80 - 110 = -30 kJ. 80 kJ ileri tepkimenin aktifleşme enerjisidir; 120 kJ kompleksin kendi enerjisidir, aktifleşme enerjisi değildir; ΔH'ı +30 almak işaret hatasıdır.",
        "en": "Ea,forward = 120 - 40 = 80 kJ; Ea,reverse = 120 - 10 = 110 kJ. ΔH = PE(products) - PE(reactants) = 10 - 40 = -30 kJ (exothermic); check: ΔH = Ea,forward - Ea,reverse = 80 - 110 = -30 kJ. 80 kJ is the forward activation energy; 120 kJ is the energy of the complex itself, not an activation energy; taking ΔH as +30 is a sign error.",
        "de": "Ea,hin = 120 - 40 = 80 kJ; Ea,rück = 120 - 10 = 110 kJ. ΔH = PE(Produkte) - PE(Edukte) = 10 - 40 = -30 kJ (exotherm); Probe: ΔH = Ea,hin - Ea,rück = 80 - 110 = -30 kJ. 80 kJ ist die Aktivierungsenergie der Hinreaktion; 120 kJ ist die Energie des Komplexes selbst, keine Aktivierungsenergie; ΔH = +30 ist ein Vorzeichenfehler.",
        "fr": "Ea,dir = 120 - 40 = 80 kJ ; Ea,inv = 120 - 10 = 110 kJ. ΔH = EP(produits) - EP(réactifs) = 10 - 40 = -30 kJ (exothermique) ; vérification : ΔH = Ea,dir - Ea,inv = 80 - 110 = -30 kJ. 80 kJ est l'énergie d'activation directe ; 120 kJ est l'énergie du complexe lui-même, pas une énergie d'activation ; prendre ΔH = +30 est une erreur de signe.",
        "ru": "Ea(пр) = 120 - 40 = 80 кДж; Ea(обр) = 120 - 10 = 110 кДж. ΔH = Eп(продуктов) - Eп(реагентов) = 10 - 40 = -30 кДж (реакция экзотермическая); проверка: ΔH = Ea(пр) - Ea(обр) = 80 - 110 = -30 кДж. 80 кДж — энергия активации прямой реакции; 120 кДж — энергия самого комплекса, а не энергия активации; ΔH = +30 кДж — ошибка в знаке.",
        "ar": "Eai = 120 - 40 = 80 kJ؛ Eag = 120 - 10 = 110 kJ. ΔH = طاقة النواتج - طاقة المتفاعلات = 10 - 40 = -30 kJ (طارد للحرارة)؛ وللتحقق: ΔH = Eai - Eag = 80 - 110 = -30 kJ. القيمة 80 kJ هي طاقة تنشيط التفاعل الأمامي، و120 kJ طاقة المعقد نفسه لا طاقة تنشيط، واعتبار ΔH = +30 خطأ في الإشارة.",
        "zh": "Ea,正 = 120 - 40 = 80 kJ；Ea,逆 = 120 - 10 = 110 kJ。ΔH = 生成物势能 - 反应物势能 = 10 - 40 = -30 kJ（放热）；验证：ΔH = Ea,正 - Ea,逆 = 80 - 110 = -30 kJ。80 kJ是正反应活化能；120 kJ是活化络合物本身的能量，不是活化能；把ΔH取为+30是符号错误。",
        "ku": "Ea,pêş = 120 - 40 = 80 kJ; Ea,paş = 120 - 10 = 110 kJ. ΔH = EP(hilber) - EP(reaktant) = 10 - 40 = -30 kJ (ekzotermîk); kontrol: ΔH = Ea,pêş - Ea,paş = 80 - 110 = -30 kJ. 80 kJ enerjiya aktîvasyonê ya reaksiyona pêşve ye; 120 kJ enerjiya kompleksê bi xwe ye, ne enerjiya aktîvasyonê ye; girtina ΔH wekî +30 şaşiya nîşanê ye."
      }
    },
    {
      "id": "u17-twin07",
      "stem": {
        "tr": "2 litrelik sabit hacimli bir kapta gerçekleşen 2N2O5(g) → 4NO2(g) + O2(g) tepkimesinde N2O5'in mol sayısı 40 saniyede 0,8 molden 0,4 mole düşüyor. Buna göre bu zaman aralığında NO2'nin ortalama oluşma hızı kaç mol/(L·s)'dir?",
        "en": "In the reaction 2N2O5(g) → 4NO2(g) + O2(g) taking place in a 2-litre rigid container, the amount of N2O5 falls from 0.8 mol to 0.4 mol in 40 seconds. What is the average rate of formation of NO2 in this interval, in mol/(L·s)?",
        "de": "Bei der Reaktion 2N2O5(g) → 4NO2(g) + O2(g) in einem starren 2-Liter-Gefäß sinkt die Stoffmenge von N2O5 in 40 Sekunden von 0,8 mol auf 0,4 mol. Wie groß ist die mittlere Bildungsgeschwindigkeit von NO2 in diesem Zeitraum in mol/(L·s)?",
        "fr": "Dans la réaction 2N2O5(g) → 4NO2(g) + O2(g) se déroulant dans un récipient rigide de 2 litres, la quantité de N2O5 passe de 0,8 mol à 0,4 mol en 40 secondes. Quelle est la vitesse moyenne de formation de NO2 sur cet intervalle, en mol/(L·s) ?",
        "ru": "В реакции 2N2O5(г) → 4NO2(г) + O2(г), протекающей в сосуде постоянного объёма 2 л, количество N2O5 за 40 секунд уменьшается с 0,8 моль до 0,4 моль. Какова средняя скорость образования NO2 за этот промежуток времени, моль/(л·с)?",
        "ar": "في التفاعل 2N2O5(g) → 4NO2(g) + O2(g) الذي يجري في وعاء ثابت الحجم سعته 2 L، تنخفض كمية N2O5 من 0.8 mol إلى 0.4 mol خلال 40 ثانية. ما متوسط سرعة تكوّن NO2 في هذه الفترة بوحدة mol/(L·s)؟",
        "zh": "在容积为 2 L 的恒容容器中进行反应 2N2O5(g) → 4NO2(g) + O2(g)，40 s 内 N2O5 的物质的量由 0.8 mol 降至 0.4 mol。这段时间内 NO2 的平均生成速率是多少 mol/(L·s)？",
        "ku": "Di firaxeke 2 lîtreyî ya bi qebareya sabît de reaksiyona 2N2O5(g) → 4NO2(g) + O2(g) pêk tê û hejmara molên N2O5 di 40 saniyeyan de ji 0,8 molî dadikeve 0,4 molî. Li gorî vê, di vê navberana demê de leza navîn a çêbûna NO2 çend mol/(L·s) e?"
      },
      "options": [
        {
          "tr": "2,5×10^-3",
          "en": "2.5×10^-3",
          "de": "2,5×10^-3",
          "fr": "2,5×10^-3",
          "ru": "2,5×10^-3",
          "ar": "2.5×10^-3",
          "zh": "2.5×10^-3",
          "ku": "2,5×10^-3"
        },
        {
          "tr": "5,0×10^-3",
          "en": "5.0×10^-3",
          "de": "5,0×10^-3",
          "fr": "5,0×10^-3",
          "ru": "5,0×10^-3",
          "ar": "5.0×10^-3",
          "zh": "5.0×10^-3",
          "ku": "5,0×10^-3"
        },
        {
          "tr": "1,0×10^-2",
          "en": "1.0×10^-2",
          "de": "1,0×10^-2",
          "fr": "1,0×10^-2",
          "ru": "1,0×10^-2",
          "ar": "1.0×10^-2",
          "zh": "1.0×10^-2",
          "ku": "1,0×10^-2"
        },
        {
          "tr": "2,0×10^-2",
          "en": "2.0×10^-2",
          "de": "2,0×10^-2",
          "fr": "2,0×10^-2",
          "ru": "2,0×10^-2",
          "ar": "2.0×10^-2",
          "zh": "2.0×10^-2",
          "ku": "2,0×10^-2"
        },
        {
          "tr": "4,0×10^-2",
          "en": "4.0×10^-2",
          "de": "4,0×10^-2",
          "fr": "4,0×10^-2",
          "ru": "4,0×10^-2",
          "ar": "4.0×10^-2",
          "zh": "4.0×10^-2",
          "ku": "4,0×10^-2"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Δn(N2O5) = 0,4 mol → Δ[N2O5] = 0,4/2 = 0,2 M. N2O5'in harcanma hızı = 0,2/40 = 5,0×10^-3 mol/(L·s). Katsayı oranı NO2/N2O5 = 4/2 = 2 olduğundan NO2'nin oluşma hızı = 2 × 5,0×10^-3 = 1,0×10^-2 mol/(L·s). 5,0×10^-3 N2O5'in hızıdır, 2,5×10^-3 O2'nin hızıdır; hacme bölmeyi unutmak 2,0×10^-2, hacmi unutup katsayı 4 ile doğrudan çarpmak 4,0×10^-2 verir.",
        "en": "Δn(N2O5) = 0.4 mol → Δ[N2O5] = 0.4/2 = 0.2 M. Rate of consumption of N2O5 = 0.2/40 = 5.0×10^-3 mol/(L·s). The coefficient ratio NO2/N2O5 = 4/2 = 2, so the rate of formation of NO2 = 2 × 5.0×10^-3 = 1.0×10^-2 mol/(L·s). 5.0×10^-3 is the rate for N2O5 and 2.5×10^-3 the rate for O2; forgetting to divide by the volume gives 2.0×10^-2, and forgetting the volume while multiplying directly by the coefficient 4 gives 4.0×10^-2.",
        "de": "Δn(N2O5) = 0,4 mol → Δ[N2O5] = 0,4/2 = 0,2 M. Verbrauchsgeschwindigkeit von N2O5 = 0,2/40 = 5,0×10^-3 mol/(L·s). Das Koeffizientenverhältnis NO2/N2O5 = 4/2 = 2, also Bildungsgeschwindigkeit von NO2 = 2 × 5,0×10^-3 = 1,0×10^-2 mol/(L·s). 5,0×10^-3 gilt für N2O5, 2,5×10^-3 für O2; ohne Division durch das Volumen erhält man 2,0×10^-2, ohne Volumen und mit direkter Multiplikation mit dem Koeffizienten 4 erhält man 4,0×10^-2.",
        "fr": "Δn(N2O5) = 0,4 mol → Δ[N2O5] = 0,4/2 = 0,2 M. Vitesse de disparition de N2O5 = 0,2/40 = 5,0×10^-3 mol/(L·s). Le rapport des coefficients NO2/N2O5 = 4/2 = 2, donc vitesse de formation de NO2 = 2 × 5,0×10^-3 = 1,0×10^-2 mol/(L·s). 5,0×10^-3 est la vitesse de N2O5 et 2,5×10^-3 celle de O2 ; oublier de diviser par le volume donne 2,0×10^-2, et oublier le volume tout en multipliant directement par le coefficient 4 donne 4,0×10^-2.",
        "ru": "Δn(N2O5) = 0,4 моль → Δ[N2O5] = 0,4/2 = 0,2 M. Скорость расходования N2O5 = 0,2/40 = 5,0×10^-3 моль/(л·с). Отношение коэффициентов NO2/N2O5 = 4/2 = 2, поэтому скорость образования NO2 = 2 × 5,0×10^-3 = 1,0×10^-2 моль/(л·с). 5,0×10^-3 — скорость по N2O5, 2,5×10^-3 — по O2; если забыть разделить на объём, получится 2,0×10^-2, а если не учесть объём и сразу умножить на коэффициент 4 — 4,0×10^-2.",
        "ar": "Δn(N2O5) = 0.4 mol → Δ[N2O5] = 0.4/2 = 0.2 M. سرعة استهلاك N2O5 = 0.2/40 = 5.0×10^-3 mol/(L·s). نسبة المعاملات NO2/N2O5 = 4/2 = 2، إذن سرعة تكوّن NO2 = 2 × 5.0×10^-3 = 1.0×10^-2 mol/(L·s). القيمة 5.0×10^-3 هي سرعة N2O5 و2.5×10^-3 سرعة O2؛ ونسيان القسمة على الحجم يعطي 2.0×10^-2، ونسيان الحجم مع الضرب المباشر في المعامل 4 يعطي 4.0×10^-2.",
        "zh": "Δn(N2O5) = 0.4 mol → Δ[N2O5] = 0.4/2 = 0.2 M。N2O5的消耗速率 = 0.2/40 = 5.0×10^-3 mol/(L·s)。系数比NO2/N2O5 = 4/2 = 2，所以NO2的生成速率 = 2 × 5.0×10^-3 = 1.0×10^-2 mol/(L·s)。5.0×10^-3是N2O5的速率，2.5×10^-3是O2的速率；忘记除以体积得2.0×10^-2，忘记体积且直接乘以系数4得4.0×10^-2。",
        "ku": "Δn(N2O5) = 0,4 mol → Δ[N2O5] = 0,4/2 = 0,2 M. Leza xerckirina N2O5 = 0,2/40 = 5,0×10^-3 mol/(L·s). Ji ber ku rêjeya hevberan NO2/N2O5 = 4/2 = 2 e, leza çêbûna NO2 = 2 × 5,0×10^-3 = 1,0×10^-2 mol/(L·s). 5,0×10^-3 leza N2O5 ye, 2,5×10^-3 leza O2 ye; jibîrkirina dabeşkirina li ser qebareyê 2,0×10^-2, jibîrkirina qebareyê û rasterast pirkirina bi hevberê 4 jî 4,0×10^-2 dide."
      }
    },
    {
      "id": "u17-twin08",
      "stem": {
        "tr": "Gaz fazında gerçekleşen ve hız bağıntısı r = k[X]^2[Y] olan bir tepkimenin bulunduğu kabın hacmi, sıcaklık sabit tutularak yarıya indiriliyor. Buna göre tepkimenin başlangıç hızı kaç katına çıkar?",
        "en": "For a gas-phase reaction with the rate law r = k[X]^2[Y], the volume of the container is halved at constant temperature. By what factor does the initial rate increase?",
        "de": "Bei einer Gasphasenreaktion mit dem Geschwindigkeitsgesetz r = k[X]^2[Y] wird das Gefäßvolumen bei konstanter Temperatur halbiert. Um welchen Faktor steigt die Anfangsgeschwindigkeit?",
        "fr": "Pour une réaction en phase gazeuse de loi de vitesse r = k[X]^2[Y], on divise par deux le volume du récipient à température constante. Par quel facteur la vitesse initiale est-elle multipliée ?",
        "ru": "Для газофазной реакции с уравнением скорости r = k[X]^2[Y] объём сосуда при постоянной температуре уменьшают вдвое. Во сколько раз возрастёт начальная скорость?",
        "ar": "لتفاعل في الطور الغازي قانون سرعته r = k[X]^2[Y]، يُخفَّض حجم الوعاء إلى النصف مع ثبات درجة الحرارة. فكم ضعفًا تصبح السرعة الابتدائية للتفاعل؟",
        "zh": "对于速率方程为 r = k[X]^2[Y] 的气相反应，在恒温下将容器体积减半。初始速率变为原来的多少倍？",
        "ku": "Qebareya firaxa reaksiyoneke di fazê gaz de ku hevkêşeya wê ya lezê r = k[X]^2[Y] e, di germahiya sabît de nîv tê kirin. Li gorî vê, leza destpêkê ya reaksiyonê çend qat dibe?"
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
          "tr": "16",
          "en": "16",
          "de": "16",
          "fr": "16",
          "ru": "16",
          "ar": "16",
          "zh": "16",
          "ku": "16"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Hacim yarıya inince mol sayıları değişmez, tüm gaz derişimleri 2 katına çıkar. Yeni hız = k(2[X])^2(2[Y]) = 4 · 2 · k[X]^2[Y] = 8r. Sadece X'in etkisini almak 4, sadece Y'ninkini almak 2 sonucunu verir; k sıcaklık sabit olduğu için değişmez.",
        "en": "Halving the volume leaves the amounts unchanged, so every gas concentration doubles. New rate = k(2[X])^2(2[Y]) = 4 · 2 · k[X]^2[Y] = 8r. Taking only the effect of X gives 4, only that of Y gives 2; k does not change because the temperature is constant.",
        "de": "Beim Halbieren des Volumens bleiben die Stoffmengen gleich, alle Gaskonzentrationen verdoppeln sich. Neue Geschwindigkeit = k(2[X])^2(2[Y]) = 4 · 2 · k[X]^2[Y] = 8r. Nur den Effekt von X zu berücksichtigen ergibt 4, nur den von Y ergibt 2; k bleibt bei konstanter Temperatur gleich.",
        "fr": "En divisant le volume par deux, les quantités de matière ne changent pas et toutes les concentrations gazeuses doublent. Nouvelle vitesse = k(2[X])^2(2[Y]) = 4 · 2 · k[X]^2[Y] = 8r. Ne prendre que l'effet de X donne 4, que celui de Y donne 2 ; k ne change pas car la température est constante.",
        "ru": "При уменьшении объёма вдвое количества веществ не меняются, а все концентрации газов удваиваются. Новая скорость = k(2[X])^2(2[Y]) = 4 · 2 · k[X]^2[Y] = 8r. Если учесть только X, получится 4, только Y — 2; k не меняется, так как температура постоянна.",
        "ar": "عند خفض الحجم إلى النصف لا يتغيّر عدد المولات فتتضاعف تراكيز جميع الغازات. السرعة الجديدة = k(2[X])^2(2[Y]) = 4 · 2 · k[X]^2[Y] = 8r. أخذ أثر X وحده يعطي 4 وأثر Y وحده يعطي 2؛ ولا يتغيّر k لأن درجة الحرارة ثابتة.",
        "zh": "体积减半时各物质的物质的量不变，所有气体浓度都变为2倍。新速率 = k(2[X])^2(2[Y]) = 4 · 2 · k[X]^2[Y] = 8r。只考虑X的影响得4，只考虑Y的影响得2；温度不变，k不变。",
        "ku": "Dema qebare nîv dibe hejmara molan naguhere, lê tîrbûna hemû gazan du qat dibe. Leza nû = k(2[X])^2(2[Y]) = 4 · 2 · k[X]^2[Y] = 8r. Girtina bandora X bi tenê 4, girtina bandora Y bi tenê 2 dide; ji ber ku germahî sabît e, k naguhere."
      }
    },
    {
      "id": "u17-twin09",
      "stem": {
        "tr": "Tek basamakta gerçekleşen X(g) + Y(g) → Z(g) tepkimesi için; I. X'in derişimini artırmak, II. Uygun bir pozitif katalizör eklemek, III. Sıcaklığı artırmak işlemlerinden hangileri hız sabiti k'nın değerini büyütür?",
        "en": "For the single-step reaction X(g) + Y(g) → Z(g), which of the following increase the value of the rate constant k? I. Increasing the concentration of X II. Adding a suitable positive catalyst III. Raising the temperature",
        "de": "Welche der folgenden Maßnahmen vergrößern bei der einstufigen Reaktion X(g) + Y(g) → Z(g) den Wert der Geschwindigkeitskonstante k? I. Die Konzentration von X erhöhen II. Einen geeigneten positiven Katalysator zugeben III. Die Temperatur erhöhen",
        "fr": "Pour la réaction en une étape X(g) + Y(g) → Z(g), lesquelles des opérations suivantes augmentent la valeur de la constante de vitesse k ? I. Augmenter la concentration de X II. Ajouter un catalyseur positif approprié III. Élever la température",
        "ru": "Для одностадийной реакции X(г) + Y(г) → Z(г) какие из действий увеличивают значение константы скорости k? I. Увеличение концентрации X. II. Добавление подходящего положительного катализатора. III. Повышение температуры.",
        "ar": "للتفاعل X(g) + Y(g) → Z(g) الذي يحدث في خطوة واحدة، أيّ الإجراءات التالية تزيد قيمة ثابت السرعة k؟ I. زيادة تركيز X II. إضافة حفاز موجب مناسب III. رفع درجة الحرارة",
        "zh": "对于一步完成的反应 X(g) + Y(g) → Z(g)，下列哪些操作会使速率常数k增大？I. 增大X的浓度 II. 加入合适的正催化剂 III. 升高温度",
        "ku": "Ji bo reaksiyona X(g) + Y(g) → Z(g) ya ku di yek gavê de pêk tê, kîjan ji van karan nirxa sabîta lezê k mezin dikin? I. Zêdekirina tîrbûna X II. Lêzêdekirina katalîzoreke erênî ya guncav III. Bilindkirina germahiyê"
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
      "correctIndex": 3,
      "explanation": {
        "tr": "I: Derişim artışı hızı artırır ama k derişimden bağımsızdır, değişmez. II: Katalizör Ea'sı daha düşük bir yol sağladığından k büyür. III: Sıcaklık artınca Ea'yı aşan tanecik kesri artar ve k büyür. Derişim–hız ilişkisini k ile karıştırıp I'i de seçmek tipik hatadır.",
        "en": "I: Raising the concentration increases the rate, but k is independent of concentration and does not change. II: A catalyst provides a pathway with lower Ea, so k increases. III: At higher temperature a larger fraction of particles exceeds Ea and k increases. Confusing the concentration–rate relation with k and also choosing I is the typical error.",
        "de": "I: Eine höhere Konzentration erhöht die Geschwindigkeit, k ist aber konzentrationsunabhängig und bleibt gleich. II: Ein Katalysator bietet einen Weg mit niedrigerem Ea, k steigt. III: Bei höherer Temperatur überschreitet ein größerer Teil der Teilchen Ea, k steigt. Den Zusammenhang Konzentration–Geschwindigkeit mit k zu verwechseln und auch I zu wählen ist der typische Fehler.",
        "fr": "I : augmenter la concentration accroît la vitesse, mais k est indépendante de la concentration et ne change pas. II : un catalyseur offre un chemin de Ea plus faible, donc k augmente. III : à température plus élevée, une plus grande fraction des particules dépasse Ea et k augmente. Confondre la relation concentration–vitesse avec k et choisir aussi I est l'erreur typique.",
        "ru": "I: рост концентрации увеличивает скорость, но k от концентрации не зависит и не меняется. II: катализатор открывает путь с меньшей Ea, поэтому k растёт. III: при нагревании большая доля частиц преодолевает Ea, и k растёт. Типичная ошибка — спутать зависимость скорости от концентрации с k и выбрать также I.",
        "ar": "I: زيادة التركيز تزيد السرعة لكن k لا يعتمد على التركيز فلا يتغيّر. II: يوفّر الحفاز مسارًا بطاقة تنشيط أقل فيزداد k. III: برفع درجة الحرارة يزداد جزء الجسيمات التي تتجاوز Ea فيزداد k. الخلط بين علاقة التركيز بالسرعة وبين k واختيار I أيضًا خطأ شائع.",
        "zh": "I：增大浓度使速率增大，但k与浓度无关，不变。II：催化剂提供活化能更低的途径，k增大。III：升温使能量超过Ea的粒子比例增大，k增大。把浓度对速率的影响与k混淆而把I也选上是典型错误。",
        "ku": "I: Zêdebûna tîrbûnê lezê zêde dike, lê k bi tîrbûnê ve ne girêdayî ye û naguhere. II: Katalîzor rêyeke bi Ea ya kêmtir peyda dike, loma k mezin dibe. III: Bi bilindbûna germahiyê para perçeyên ku Ea derbas dikin zêde dibe û k mezin dibe. Tevlihevkirina têkiliya tîrbûn–lez bi k re û hilbijartina I jî şaşiyeke tîpîk e."
      }
    },
    {
      "id": "u17-twin10",
      "stem": {
        "tr": "Aynı sıcaklıkta ve eşit derişimlerde gerçekleşen I. Ag+(aq) + Cl-(aq) → AgCl(k), II. 2NO(g) + O2(g) → 2NO2(g), III. C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(g) tepkimelerinin hızlarının büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir? (Hızın, kırılması gereken bağ sayısına ve tanecik türüne bağlı olduğunu düşününüz.)",
        "en": "For the reactions I. Ag+(aq) + Cl-(aq) → AgCl(s), II. 2NO(g) + O2(g) → 2NO2(g), III. C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(g), taking place at the same temperature and equal concentrations, what is the order of the rates from fastest to slowest? (Consider that the rate depends on the number of bonds that must be broken and on the type of particles.)",
        "de": "Wie lautet für die bei gleicher Temperatur und gleichen Konzentrationen ablaufenden Reaktionen I. Ag+(aq) + Cl-(aq) → AgCl(s), II. 2NO(g) + O2(g) → 2NO2(g), III. C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(g) die Reihenfolge der Geschwindigkeiten von der schnellsten zur langsamsten? (Die Geschwindigkeit hängt von der Zahl der zu brechenden Bindungen und von der Teilchenart ab.)",
        "fr": "Pour les réactions I. Ag+(aq) + Cl-(aq) → AgCl(s), II. 2NO(g) + O2(g) → 2NO2(g), III. C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(g), réalisées à la même température et à concentrations égales, quel est l'ordre des vitesses de la plus grande à la plus petite ? (On considère que la vitesse dépend du nombre de liaisons à rompre et de la nature des particules.)",
        "ru": "Даны реакции, протекающие при одинаковой температуре и равных концентрациях: I. Ag+(р-р) + Cl-(р-р) → AgCl(тв); II. 2NO(г) + O2(г) → 2NO2(г); III. C3H8(г) + 5O2(г) → 3CO2(г) + 4H2O(г). Расположите их в порядке уменьшения скорости. (Учтите, что скорость зависит от числа разрываемых связей и от вида частиц.)",
        "ar": "للتفاعلات I. Ag+(aq) + Cl-(aq) → AgCl(s)، II. 2NO(g) + O2(g) → 2NO2(g)، III. C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(g) التي تجري عند درجة الحرارة نفسها وتراكيز متساوية، ما ترتيب سرعاتها من الأكبر إلى الأصغر؟ (اعتبر أن السرعة تعتمد على عدد الروابط التي يجب كسرها وعلى نوع الجسيمات.)",
        "zh": "在相同温度和相同浓度下进行的反应 I. Ag+(aq) + Cl-(aq) → AgCl(s)，II. 2NO(g) + O2(g) → 2NO2(g)，III. C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(g)，其速率由大到小的顺序是哪一项？（考虑速率与需要断裂的化学键数目及粒子种类有关。）",
        "ku": "Reaksiyonên I. Ag+(aq) + Cl-(aq) → AgCl(s), II. 2NO(g) + O2(g) → 2NO2(g), III. C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(g) di heman germahiyê û bi tîrbûnên wekhev pêk tên. Rêzkirina lezên wan ji mezin ber bi piçûk kîjan e? (Bifikire ku lez bi hejmara girêdanên ku divê bişkên û bi cureyê perçeyan ve girêdayî ye.)"
      },
      "options": [
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
          "tr": "II > I > III",
          "en": "II > I > III",
          "de": "II > I > III",
          "fr": "II > I > III",
          "ru": "II > I > III",
          "ar": "II > I > III",
          "zh": "II > I > III",
          "ku": "II > I > III"
        },
        {
          "tr": "I > III > II",
          "en": "I > III > II",
          "de": "I > III > II",
          "fr": "I > III > II",
          "ru": "I > III > II",
          "ar": "I > III > II",
          "zh": "I > III > II",
          "ku": "I > III > II"
        },
        {
          "tr": "II > III > I",
          "en": "II > III > I",
          "de": "II > III > I",
          "fr": "II > III > I",
          "ru": "II > III > I",
          "ar": "II > III > I",
          "zh": "II > III > I",
          "ku": "II > III > I"
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
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "I'de zıt yüklü iyonlar birleşir, bağ kırılması gerekmez; oda koşullarında anında gerçekleşir, en hızlıdır. II'de az sayıda tanecik çarpışır ve az sayıda bağ kırılır; I'den yavaş, III'ten hızlıdır. III'te C3H8 ve 5O2'de çok sayıda kovalent bağ kırılmalı ve çok sayıda tanecik uygun yönelimle çarpışmalıdır; en yavaştır. Sıra: I > II > III. Yanma çok ekzotermik olduğu için hızlı sanılır; oysa ΔH hız hakkında bilgi vermez.",
        "en": "In I oppositely charged ions combine with no bond breaking; it is instantaneous at room conditions and the fastest. In II few particles collide and few bonds break; it is slower than I but faster than III. In III many covalent bonds in C3H8 and 5O2 must break and many particles must collide with the right orientation, so it is the slowest. Order: I > II > III. Combustion is often thought to be fast because it is strongly exothermic, but ΔH says nothing about rate.",
        "de": "In I verbinden sich entgegengesetzt geladene Ionen ohne Bindungsbruch; das läuft bei Raumbedingungen sofort ab und ist am schnellsten. In II stoßen nur wenige Teilchen zusammen und nur wenige Bindungen brechen; langsamer als I, aber schneller als III. In III müssen viele kovalente Bindungen in C3H8 und 5O2 brechen und viele Teilchen richtig orientiert zusammenstoßen; am langsamsten. Reihenfolge: I > II > III. Verbrennungen hält man wegen ihrer starken Exothermie oft für schnell, doch ΔH sagt nichts über die Geschwindigkeit.",
        "fr": "En I, des ions de charges opposées s'associent sans rupture de liaison ; c'est instantané dans les conditions ambiantes et le plus rapide. En II, peu de particules se heurtent et peu de liaisons sont rompues ; plus lente que I mais plus rapide que III. En III, de nombreuses liaisons covalentes de C3H8 et 5O2 doivent être rompues et de nombreuses particules doivent se heurter avec la bonne orientation : c'est la plus lente. Ordre : I > II > III. On croit souvent une combustion rapide car très exothermique, mais ΔH ne renseigne pas sur la vitesse.",
        "ru": "В реакции I соединяются противоположно заряженные ионы, разрывать связи не нужно; при комнатных условиях она протекает мгновенно и идёт быстрее всех. В реакции II сталкивается немного частиц и разрывается немного связей; она медленнее I, но быстрее III. В реакции III должно разорваться много ковалентных связей в C3H8 и 5O2 и с нужной ориентацией должно столкнуться много частиц — она самая медленная. Порядок: I > II > III. Горение часто считают быстрым из-за сильной экзотермичности, но ΔH ничего не говорит о скорости.",
        "ar": "في I تتحد أيونات مختلفة الشحنة دون كسر روابط، فيحدث التفاعل فورًا في ظروف الغرفة وهو الأسرع. في II يتصادم عدد قليل من الجسيمات ويُكسر عدد قليل من الروابط؛ فهو أبطأ من I وأسرع من III. في III يجب كسر روابط تساهمية كثيرة في C3H8 و5O2 وتصادم جسيمات كثيرة باتجاه مناسب، فهو الأبطأ. الترتيب: I > II > III. يُظن الاحتراق سريعًا لأنه شديد الطرد للحرارة، لكن ΔH لا تدل على شيء بخصوص السرعة.",
        "zh": "I中带相反电荷的离子直接结合，不需断键，室温下瞬间完成，最快。II中参与碰撞的粒子少、需断裂的键也少，比I慢但比III快。III中C3H8和5O2里大量共价键必须断裂，且需要很多粒子以合适取向碰撞，最慢。顺序：I > II > III。燃烧因强烈放热常被误认为很快，但ΔH不能说明速率。",
        "ku": "Di I de îyonên bi barên dijber bêyî şikandina girêdanê digihîjin hev; di şertên odeyê de di cih de pêk tê û ya herî bilez e. Di II de hindik perçe li hev dikevin û hindik girêdan dişkên; ji I hêdîtir, ji III bileztir e. Di III de divê gelek girêdanên kovalent ên C3H8 û 5O2 bişkên û gelek perçe bi arasteya guncav li hev bikevin; ya herî hêdî ye. Rêz: I > II > III. Ji ber ku şewitîn pir ekzotermîk e, bilez tê texmînkirin; lê ΔH li ser lezê tu agahiyê nade."
      }
    },
    {
      "id": "u17-twin11",
      "stem": {
        "tr": "İki basamakta gerçekleşen bir tepkimenin potansiyel enerji grafiğinde iki tepe noktası bulunmaktadır. Grafiğe göre 1. basamağın aktifleşme enerjisi 90 kJ, 2. basamağın aktifleşme enerjisi 30 kJ'dir. Buna göre, I. Tepkime sırasında iki farklı aktifleşmiş kompleks oluşur. II. Tepkimenin hızını 2. basamak belirler. III. Ara ürünün potansiyel enerjisi iki tepe noktası arasındaki çukurla gösterilir. yargılarından hangileri doğrudur?",
        "en": "The potential energy diagram of a two-step reaction has two peaks. According to the diagram, the activation energy of step 1 is 90 kJ and that of step 2 is 30 kJ. Accordingly, which of the following statements are correct? I. Two different activated complexes form during the reaction. II. Step 2 determines the rate of the reaction. III. The potential energy of the intermediate is shown by the valley between the two peaks.",
        "de": "Das Energiediagramm einer zweistufigen Reaktion zeigt zwei Maxima. Laut Diagramm beträgt die Aktivierungsenergie von Schritt 1 90 kJ und die von Schritt 2 30 kJ. Welche Aussagen sind richtig? I. Während der Reaktion entstehen zwei verschiedene aktivierte Komplexe. II. Schritt 2 bestimmt die Reaktionsgeschwindigkeit. III. Die potenzielle Energie des Zwischenprodukts entspricht dem Tal zwischen den beiden Maxima.",
        "fr": "Le diagramme d'énergie potentielle d'une réaction en deux étapes présente deux sommets. D'après le diagramme, l'énergie d'activation de l'étape 1 vaut 90 kJ et celle de l'étape 2 vaut 30 kJ. Lesquelles des affirmations suivantes sont correctes ? I. Deux complexes activés différents se forment au cours de la réaction. II. L'étape 2 détermine la vitesse de la réaction. III. L'énergie potentielle de l'intermédiaire correspond au creux situé entre les deux sommets.",
        "ru": "На диаграмме потенциальной энергии двухстадийной реакции два максимума. Энергия активации стадии 1 равна 90 кДж, стадии 2 — 30 кДж. Какие из утверждений верны? I. В ходе реакции образуются два разных активированных комплекса. II. Скорость реакции определяет стадия 2. III. Потенциальной энергии промежуточного вещества соответствует впадина между двумя максимумами.",
        "ar": "يُظهر مخطط الطاقة الكامنة لتفاعل يحدث في خطوتين قمتين. وفق المخطط تبلغ طاقة تنشيط الخطوة 1 قيمة 90 kJ وطاقة تنشيط الخطوة 2 قيمة 30 kJ. أيّ العبارات التالية صحيحة؟ I. يتكوّن أثناء التفاعل معقدان منشَّطان مختلفان. II. الخطوة 2 هي التي تحدد سرعة التفاعل. III. تُمثَّل الطاقة الكامنة للمركب الوسيط بالقاع الواقع بين القمتين.",
        "zh": "某两步反应的势能图上有两个峰。由图可知，第1步的活化能为 90 kJ，第2步的活化能为 30 kJ。有下列说法：I. 反应过程中形成两种不同的活化络合物。II. 反应速率由第2步决定。III. 中间产物的势能由两个峰之间的谷表示。其中正确的是哪些？",
        "ku": "Di grafîka enerjiya potansiyel a reaksiyoneke ku di du gavan de pêk tê de du lûtke hene. Li gorî grafîkê, enerjiya aktîvasyonê ya gava 1. 90 kJ û ya gava 2. 30 kJ e. Li gorî vê, kîjan ji van gotinan rast in? I. Di dema reaksiyonê de du kompleksên aktîvkirî yên cuda çêdibin. II. Leza reaksiyonê gava 2. diyar dike. III. Enerjiya potansiyel a hilbera navber bi çala di navbera her du lûtkeyan de tê nîşandan."
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
        "tr": "I doğru: her tepe bir basamağın aktifleşmiş kompleksidir; iki tepe, iki kompleks demektir. II yanlış: aktifleşme enerjisi büyük olan (90 kJ) 1. basamak yavaştır ve hızı o belirler. III doğru: ara ürün 1. basamakta oluşup 2. basamakta harcanır; iki tepe arasındaki çukurda yer alır. Ara ürünü en yüksek enerjili tür sanmak yaygın bir yanılgıdır; en yüksek noktalar aktifleşmiş komplekslerdir.",
        "en": "I is correct: each peak is the activated complex of one step; two peaks mean two complexes. II is wrong: step 1, with the larger activation energy (90 kJ), is the slow step and determines the rate. III is correct: the intermediate forms in step 1 and is consumed in step 2; it sits in the valley between the peaks. Thinking the intermediate is the highest-energy species is a common misconception; the highest points are the activated complexes.",
        "de": "I ist richtig: Jedes Maximum ist der aktivierte Komplex eines Schritts; zwei Maxima bedeuten zwei Komplexe. II ist falsch: Schritt 1 mit der größeren Aktivierungsenergie (90 kJ) ist langsam und bestimmt die Geschwindigkeit. III ist richtig: Das Zwischenprodukt entsteht in Schritt 1 und wird in Schritt 2 verbraucht; es liegt im Tal zwischen den Maxima. Das Zwischenprodukt für die energiereichste Spezies zu halten ist ein verbreiteter Irrtum; die höchsten Punkte sind die aktivierten Komplexe.",
        "fr": "I est correcte : chaque sommet est le complexe activé d'une étape ; deux sommets, deux complexes. II est fausse : l'étape 1, dont l'énergie d'activation est la plus grande (90 kJ), est lente et détermine la vitesse. III est correcte : l'intermédiaire se forme à l'étape 1 et est consommé à l'étape 2 ; il se situe dans le creux entre les sommets. Croire que l'intermédiaire est l'espèce la plus énergétique est une idée fausse courante ; les points les plus hauts sont les complexes activés.",
        "ru": "I верно: каждый максимум — активированный комплекс одной стадии; два максимума — два комплекса. II неверно: стадия 1 с большей энергией активации (90 кДж) медленная, и скорость определяет именно она. III верно: промежуточное вещество образуется на стадии 1 и расходуется на стадии 2; ему соответствует впадина между максимумами. Считать промежуточное вещество частицей с наибольшей энергией — частая ошибка: высшие точки — это активированные комплексы.",
        "ar": "I صحيحة: كل قمة هي المعقد المنشَّط لخطوة؛ قمتان تعنيان معقدين. II خاطئة: الخطوة 1 ذات طاقة التنشيط الأكبر (90 kJ) هي البطيئة وهي التي تحدد السرعة. III صحيحة: يتكوّن المركب الوسيط في الخطوة 1 ويُستهلك في الخطوة 2، ويقع في القاع بين القمتين. الاعتقاد بأن المركب الوسيط هو الأعلى طاقة خطأ شائع؛ فأعلى النقاط هي المعقدات المنشَّطة.",
        "zh": "I正确：每个峰是某一步的活化络合物，两个峰即两种络合物。II错误：活化能较大(90 kJ)的第1步是慢步骤，决定反应速率。III正确：中间产物在第1步生成、第2步消耗，位于两峰之间的谷中。认为中间产物是能量最高的物种是常见误解；最高点是活化络合物。",
        "ku": "I rast e: her lûtke kompleksa aktîvkirî ya gavekê ye; du lûtke tê wateya du kompleksan. II şaş e: gava 1. ya ku enerjiya wê ya aktîvasyonê mezintir e (90 kJ) hêdî ye û lezê ew diyar dike. III rast e: hilbera navber di gava 1. de çêdibe û di gava 2. de tê xerckirin; di çala navbera her du lûtkeyan de cih digire. Hesibandina hilbera navber wekî cureyê bi enerjiya herî bilind şaşiyeke berbelav e; xalên herî bilind kompleksên aktîvkirî ne."
      }
    },
    {
      "id": "u17-twin12",
      "stem": {
        "tr": "İleri aktifleşme enerjisi (Eai) 60 kJ ve entalpi değişimi ΔH = +20 kJ olan bir tepkimeye uygun bir katalizör eklendiğinde ileri aktifleşme enerjisi 35 kJ'ye düşüyor. Buna göre katalizörlü ortamda geri tepkimenin aktifleşme enerjisi (Eag) kaç kJ'dir?",
        "en": "A reaction has a forward activation energy of 60 kJ and ΔH = +20 kJ. When a suitable catalyst is added, the forward activation energy falls to 35 kJ. What is the activation energy of the reverse reaction in the presence of the catalyst, in kJ?",
        "de": "Eine Reaktion hat eine Aktivierungsenergie der Hinreaktion von 60 kJ und ΔH = +20 kJ. Nach Zugabe eines geeigneten Katalysators sinkt die Aktivierungsenergie der Hinreaktion auf 35 kJ. Wie groß ist die Aktivierungsenergie der Rückreaktion mit Katalysator in kJ?",
        "fr": "Une réaction a une énergie d'activation directe de 60 kJ et ΔH = +20 kJ. Après ajout d'un catalyseur approprié, l'énergie d'activation directe tombe à 35 kJ. Quelle est, en kJ, l'énergie d'activation de la réaction inverse en présence du catalyseur ?",
        "ru": "Энергия активации прямой реакции равна 60 кДж, ΔH = +20 кДж. После добавления подходящего катализатора энергия активации прямой реакции снижается до 35 кДж. Чему равна энергия активации обратной реакции в присутствии катализатора, кДж?",
        "ar": "تفاعل طاقة تنشيطه الأمامية 60 kJ وΔH = +20 kJ. عند إضافة حفاز مناسب تنخفض طاقة التنشيط الأمامية إلى 35 kJ. ما طاقة تنشيط التفاعل العكسي بوجود الحفاز بوحدة kJ؟",
        "zh": "某反应正反应活化能为60 kJ，ΔH = +20 kJ。加入合适的催化剂后，正反应活化能降至35 kJ。有催化剂时逆反应的活化能是多少kJ？",
        "ku": "Enerjiya aktîvasyonê ya pêşve ya reaksiyonekê 60 kJ û ΔH = +20 kJ e. Dema katalîzoreke guncav tê lêzêdekirin, enerjiya aktîvasyonê ya pêşve dadikeve 35 kJ. Li gorî vê, bi hebûna katalîzorê enerjiya aktîvasyonê ya reaksiyona paşve çend kJ e?"
      },
      "options": [
        {
          "tr": "15",
          "en": "15",
          "de": "15",
          "fr": "15",
          "ru": "15",
          "ar": "15",
          "zh": "15",
          "ku": "15"
        },
        {
          "tr": "25",
          "en": "25",
          "de": "25",
          "fr": "25",
          "ru": "25",
          "ar": "25",
          "zh": "25",
          "ku": "25"
        },
        {
          "tr": "35",
          "en": "35",
          "de": "35",
          "fr": "35",
          "ru": "35",
          "ar": "35",
          "zh": "35",
          "ku": "35"
        },
        {
          "tr": "40",
          "en": "40",
          "de": "40",
          "fr": "40",
          "ru": "40",
          "ar": "40",
          "zh": "40",
          "ku": "40"
        },
        {
          "tr": "55",
          "en": "55",
          "de": "55",
          "fr": "55",
          "ru": "55",
          "ar": "55",
          "zh": "55",
          "ku": "55"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Katalizörsüz: Eag = Eai - ΔH = 60 - 20 = 40 kJ. Katalizör ΔH'ı değiştirmez ve ileri ile geri aktifleşme enerjilerini aynı miktarda (60 - 35 = 25 kJ) düşürür: Eag = 40 - 25 = 15 kJ ya da doğrudan 35 - 20 = 15 kJ. 40 kJ katalizörün geri tepkimeyi etkilemediğini sanmaktır, 55 kJ ise ΔH'ı yanlış işaretle (35 + 20) eklemektir.",
        "en": "Without catalyst: Ea,reverse = Ea,forward - ΔH = 60 - 20 = 40 kJ. A catalyst does not change ΔH and lowers both activation energies by the same amount (60 - 35 = 25 kJ): Ea,reverse = 40 - 25 = 15 kJ, or directly 35 - 20 = 15 kJ. 40 kJ assumes the catalyst does not affect the reverse reaction; 55 kJ adds ΔH with the wrong sign (35 + 20).",
        "de": "Ohne Katalysator: Ea,rück = Ea,hin - ΔH = 60 - 20 = 40 kJ. Ein Katalysator ändert ΔH nicht und senkt beide Aktivierungsenergien um denselben Betrag (60 - 35 = 25 kJ): Ea,rück = 40 - 25 = 15 kJ, oder direkt 35 - 20 = 15 kJ. 40 kJ setzt voraus, dass der Katalysator die Rückreaktion nicht beeinflusst; 55 kJ addiert ΔH mit falschem Vorzeichen (35 + 20).",
        "fr": "Sans catalyseur : Ea,inv = Ea,dir - ΔH = 60 - 20 = 40 kJ. Un catalyseur ne change pas ΔH et abaisse les deux énergies d'activation de la même quantité (60 - 35 = 25 kJ) : Ea,inv = 40 - 25 = 15 kJ, ou directement 35 - 20 = 15 kJ. 40 kJ suppose que le catalyseur n'agit pas sur la réaction inverse ; 55 kJ ajoute ΔH avec le mauvais signe (35 + 20).",
        "ru": "Без катализатора: Ea(обр) = Ea(пр) - ΔH = 60 - 20 = 40 кДж. Катализатор не меняет ΔH и снижает обе энергии активации на одну величину (60 - 35 = 25 кДж): Ea(обр) = 40 - 25 = 15 кДж, или сразу 35 - 20 = 15 кДж. 40 кДж — предположение, что катализатор не влияет на обратную реакцию; 55 кДж — сложение ΔH с неверным знаком (35 + 20).",
        "ar": "بدون حفاز: Eag = Eai - ΔH = 60 - 20 = 40 kJ. الحفاز لا يغيّر ΔH ويخفض طاقتي التنشيط بالمقدار نفسه (60 - 35 = 25 kJ): Eag = 40 - 25 = 15 kJ، أو مباشرة 35 - 20 = 15 kJ. القيمة 40 kJ تفترض أن الحفاز لا يؤثر في التفاعل العكسي، و55 kJ تجمع ΔH بإشارة خاطئة (35 + 20).",
        "zh": "无催化剂时：Ea,逆 = Ea,正 - ΔH = 60 - 20 = 40 kJ。催化剂不改变ΔH，使正、逆活化能降低相同的量(60 - 35 = 25 kJ)：Ea,逆 = 40 - 25 = 15 kJ，或直接 35 - 20 = 15 kJ。40 kJ是误以为催化剂不影响逆反应；55 kJ是把ΔH按错误符号相加(35 + 20)。",
        "ku": "Bê katalîzor: Ea,paş = Ea,pêş - ΔH = 60 - 20 = 40 kJ. Katalîzor ΔH naguherîne û her du enerjiyên aktîvasyonê bi heman mîqdarê (60 - 35 = 25 kJ) kêm dike: Ea,paş = 40 - 25 = 15 kJ, an jî rasterast 35 - 20 = 15 kJ. 40 kJ ji texmîna ku katalîzor bandorê li reaksiyona paşve nake tê; 55 kJ jî lêzêdekirina ΔH bi nîşana şaş e (35 + 20)."
      }
    },
    {
      "id": "u17-twin13",
      "stem": {
        "tr": "Bir gazın T1 ve T2 sıcaklıklarındaki (T1 < T2) kinetik enerji dağılım eğrileri aynı grafikte çizilmiş ve tepkimenin eşik enerjisi (Ea) grafikte işaretlenmiştir. Buna göre, I. T2 eğrisinin tepe noktası daha yüksek kinetik enerji değerine kaymış ve eğri daha basık hâle gelmiştir. II. Eşik enerjisini aşan tanecik sayısı T2 sıcaklığında daha fazladır. III. T2 sıcaklığında eşik enerjisinin değeri daha küçüktür. yargılarından hangileri doğrudur?",
        "en": "The kinetic energy distribution curves of a gas at temperatures T1 and T2 (T1 < T2) are drawn on the same graph, and the threshold energy (Ea) of the reaction is marked. Accordingly, which of the following statements are correct? I. The peak of the T2 curve has shifted to a higher kinetic energy and the curve has become flatter. II. More particles exceed the threshold energy at T2. III. The threshold energy is smaller at T2.",
        "de": "Die kinetischen Energieverteilungskurven eines Gases bei T1 und T2 (T1 < T2) sind im selben Diagramm gezeichnet, die Schwellenenergie (Ea) der Reaktion ist markiert. Welche Aussagen sind richtig? I. Das Maximum der T2-Kurve ist zu höherer kinetischer Energie verschoben und die Kurve ist flacher. II. Bei T2 überschreiten mehr Teilchen die Schwellenenergie. III. Bei T2 ist die Schwellenenergie kleiner.",
        "fr": "Les courbes de distribution de l'énergie cinétique d'un gaz aux températures T1 et T2 (T1 < T2) sont tracées sur le même graphique, et l'énergie seuil (Ea) de la réaction y est indiquée. Lesquelles des affirmations suivantes sont correctes ? I. Le sommet de la courbe T2 s'est déplacé vers une énergie cinétique plus élevée et la courbe s'est aplatie. II. Davantage de particules dépassent l'énergie seuil à T2. III. L'énergie seuil est plus petite à T2.",
        "ru": "На одном графике построены кривые распределения частиц газа по кинетической энергии при температурах T1 и T2 (T1 < T2) и отмечена пороговая энергия (Ea) реакции. Какие из утверждений верны? I. Максимум кривой T2 смещён в сторону большей кинетической энергии, а сама кривая стала более пологой. II. При T2 пороговую энергию превышает больше частиц. III. При T2 пороговая энергия меньше.",
        "ar": "رُسمت منحنيات توزيع الطاقة الحركية لغاز عند درجتي الحرارة T1 وT2 (T1 < T2) على الرسم نفسه، وعُيّنت عليه طاقة العتبة (Ea) للتفاعل. أيّ العبارات التالية صحيحة؟ I. انزاحت قمة منحنى T2 نحو طاقة حركية أعلى وأصبح المنحنى أكثر انبساطًا. II. يكون عدد الجسيمات التي تتجاوز طاقة العتبة أكبر عند T2. III. تكون قيمة طاقة العتبة أصغر عند T2.",
        "zh": "在同一图中画出某气体在温度 T1 和 T2(T1 < T2)下的动能分布曲线，并标出反应的阈能(Ea)。有下列说法：I. T2 曲线的峰移向更高的动能，曲线变得更平坦。II. T2 时能量超过阈能的粒子更多。III. T2 时阈能的数值更小。其中正确的是哪些？",
        "ku": "Kevanên belavbûna enerjiya kînetîk a gazekê di germahiyên T1 û T2 de (T1 < T2) li ser heman grafîkê hatine xêzkirin û enerjiya sînor (Ea) ya reaksiyonê li ser grafîkê hatiye nîşankirin. Li gorî vê, kîjan ji van gotinan rast in? I. Lûtkeya kevana T2 ber bi nirxeke bilindtir a enerjiya kînetîk ve çûye û kevan pehntir bûye. II. Di germahiya T2 de hejmara perçeyên ku enerjiya sînor derbas dikin zêdetir e. III. Di germahiya T2 de nirxa enerjiya sînor piçûktir e."
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
      "correctIndex": 1,
      "explanation": {
        "tr": "I doğru: sıcaklık artınca ortalama kinetik enerji artar; eğrinin tepesi sağa kayar ve tanecik sayısı aynı kaldığından (eğri altındaki alan sabit) eğri basıklaşır. II doğru: Ea çizgisinin sağında kalan alan T2'de daha büyüktür, yani eşiği aşan tanecik sayısı artar. III yanlış: eşik enerjisi mekanizmaya bağlıdır, sıcaklıkla değişmez; grafikte iki eğri için aynı Ea çizgisi kullanılır.",
        "en": "I is correct: a higher temperature raises the average kinetic energy, so the peak moves right and, since the number of particles (area under the curve) is unchanged, the curve flattens. II is correct: the area to the right of the Ea line is larger at T2, so more particles exceed the threshold. III is wrong: the threshold energy depends on the mechanism, not on temperature; the same Ea line serves both curves.",
        "de": "I ist richtig: Höhere Temperatur erhöht die mittlere kinetische Energie, das Maximum wandert nach rechts, und da die Teilchenzahl (Fläche unter der Kurve) gleich bleibt, wird die Kurve flacher. II ist richtig: Die Fläche rechts der Ea-Linie ist bei T2 größer, also überschreiten mehr Teilchen die Schwelle. III ist falsch: Die Schwellenenergie hängt vom Mechanismus ab, nicht von der Temperatur; für beide Kurven gilt dieselbe Ea-Linie.",
        "fr": "I est correcte : une température plus élevée augmente l'énergie cinétique moyenne ; le sommet se déplace vers la droite et, le nombre de particules (aire sous la courbe) restant le même, la courbe s'aplatit. II est correcte : l'aire à droite de la ligne Ea est plus grande à T2, donc davantage de particules dépassent le seuil. III est fausse : l'énergie seuil dépend du mécanisme, pas de la température ; la même ligne Ea vaut pour les deux courbes.",
        "ru": "I верно: при нагревании средняя кинетическая энергия растёт, максимум смещается вправо, а так как число частиц (площадь под кривой) не меняется, кривая становится более пологой. II верно: площадь справа от линии Ea при T2 больше, т. е. порог преодолевает больше частиц. III неверно: пороговая энергия определяется механизмом, а не температурой; для обеих кривых линия Ea одна и та же.",
        "ar": "I صحيحة: رفع درجة الحرارة يزيد متوسط الطاقة الحركية فتنزاح القمة إلى اليمين، ولأن عدد الجسيمات (المساحة تحت المنحنى) ثابت يصبح المنحنى أكثر انبساطًا. II صحيحة: المساحة يمين خط Ea أكبر عند T2، أي إن عدد الجسيمات التي تتجاوز العتبة أكبر. III خاطئة: طاقة العتبة تعتمد على الآلية لا على درجة الحرارة، والخط Ea نفسه يصلح للمنحنيين.",
        "zh": "I正确：升温使平均动能增大，峰向右移；由于粒子总数（曲线下面积）不变，曲线变平坦。II正确：T2时Ea线右侧的面积更大，即超过阈能的粒子更多。III错误：阈能取决于反应机理，与温度无关；两条曲线使用同一条Ea线。",
        "ku": "I rast e: bi bilindbûna germahiyê enerjiya kînetîk a navîn zêde dibe; lûtkeya kevanê ber bi rastê ve diçe û ji ber ku hejmara perçeyan naguhere (rûbera bin kevanê sabît e), kevan pehntir dibe. II rast e: rûbera li rastê xeta Ea di T2 de mezintir e, ango hejmara perçeyên ku sînor derbas dikin zêde dibe. III şaş e: enerjiya sînor bi mekanîzmayê ve girêdayî ye, bi germahiyê naguhere; li ser grafîkê ji bo her du kevanan heman xeta Ea tê bikaranîn."
      }
    },
    {
      "id": "u17-twin14",
      "stem": {
        "tr": "Sabit hacimli kapalı bir kapta ve sabit sıcaklıkta gerçekleşen aşağıdaki tepkimelerden hangisinin hızı, kaptaki toplam gaz basıncının zamanla değişimi ölçülerek izlenemez?",
        "en": "Which of the following reactions, carried out in a closed rigid container at constant temperature, cannot be followed by measuring the change of the total gas pressure in the container with time?",
        "de": "Die Geschwindigkeit welcher der folgenden Reaktionen, die in einem geschlossenen starren Gefäß bei konstanter Temperatur ablaufen, kann nicht über die zeitliche Änderung des Gesamtgasdrucks verfolgt werden?",
        "fr": "Laquelle des réactions suivantes, réalisées dans un récipient rigide fermé à température constante, ne peut pas être suivie en mesurant la variation de la pression totale du gaz au cours du temps ?",
        "ru": "Скорость какой из следующих реакций, протекающих в закрытом сосуде постоянного объёма при постоянной температуре, нельзя проследить по изменению общего давления газа со временем?",
        "ar": "أيّ التفاعلات الآتية، التي تجري في وعاء مغلق ثابت الحجم عند درجة حرارة ثابتة، لا يمكن تتبّع سرعته بقياس تغيّر الضغط الكلي للغاز مع الزمن؟",
        "zh": "在恒温的密闭刚性容器中进行下列反应，哪一个反应的速率不能通过测量容器内气体总压随时间的变化来跟踪？",
        "ku": "Leza kîjan ji van reaksiyonên ku di firaxeke girtî ya bi qebareya sabît û di germahiya sabît de pêk tên, bi pîvandina guherîna zexta giştî ya gazê bi demê re nayê şopandin?"
      },
      "options": [
        {
          "tr": "2NO(g) + O2(g) → 2NO2(g)",
          "en": "2NO(g) + O2(g) → 2NO2(g)",
          "de": "2NO(g) + O2(g) → 2NO2(g)",
          "fr": "2NO(g) + O2(g) → 2NO2(g)",
          "ru": "2NO(г) + O2(г) → 2NO2(г)",
          "ar": "2NO(g) + O2(g) → 2NO2(g)",
          "zh": "2NO(g) + O2(g) → 2NO2(g)",
          "ku": "2NO(g) + O2(g) → 2NO2(g)"
        },
        {
          "tr": "N2(g) + 3H2(g) → 2NH3(g)",
          "en": "N2(g) + 3H2(g) → 2NH3(g)",
          "de": "N2(g) + 3H2(g) → 2NH3(g)",
          "fr": "N2(g) + 3H2(g) → 2NH3(g)",
          "ru": "N2(г) + 3H2(г) → 2NH3(г)",
          "ar": "N2(g) + 3H2(g) → 2NH3(g)",
          "zh": "N2(g) + 3H2(g) → 2NH3(g)",
          "ku": "N2(g) + 3H2(g) → 2NH3(g)"
        },
        {
          "tr": "CaCO3(k) → CaO(k) + CO2(g)",
          "en": "CaCO3(s) → CaO(s) + CO2(g)",
          "de": "CaCO3(s) → CaO(s) + CO2(g)",
          "fr": "CaCO3(s) → CaO(s) + CO2(g)",
          "ru": "CaCO3(тв) → CaO(тв) + CO2(г)",
          "ar": "CaCO3(s) → CaO(s) + CO2(g)",
          "zh": "CaCO3(s) → CaO(s) + CO2(g)",
          "ku": "CaCO3(s) → CaO(s) + CO2(g)"
        },
        {
          "tr": "2N2O5(g) → 4NO2(g) + O2(g)",
          "en": "2N2O5(g) → 4NO2(g) + O2(g)",
          "de": "2N2O5(g) → 4NO2(g) + O2(g)",
          "fr": "2N2O5(g) → 4NO2(g) + O2(g)",
          "ru": "2N2O5(г) → 4NO2(г) + O2(г)",
          "ar": "2N2O5(g) → 4NO2(g) + O2(g)",
          "zh": "2N2O5(g) → 4NO2(g) + O2(g)",
          "ku": "2N2O5(g) → 4NO2(g) + O2(g)"
        },
        {
          "tr": "H2(g) + I2(g) → 2HI(g)",
          "en": "H2(g) + I2(g) → 2HI(g)",
          "de": "H2(g) + I2(g) → 2HI(g)",
          "fr": "H2(g) + I2(g) → 2HI(g)",
          "ru": "H2(г) + I2(г) → 2HI(г)",
          "ar": "H2(g) + I2(g) → 2HI(g)",
          "zh": "H2(g) + I2(g) → 2HI(g)",
          "ku": "H2(g) + I2(g) → 2HI(g)"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Sabit hacim ve sıcaklıkta basınç gaz mol sayısıyla orantılıdır; basınçla izlemek için gaz mol sayısı değişmelidir. H2 + I2 → 2HI'de 2 mol gazdan 2 mol gaz oluşur, basınç sabit kalır; bu tepkime basınçla değil, örneğin I2'nin mor renginin azalmasıyla izlenir. 2NO + O2'de 3 → 2, N2 + 3H2'de 4 → 2, 2N2O5'te 2 → 5 mol gaz olur; CaCO3'ün ayrışmasında ise gaz CO2 oluştukça basınç artar.",
        "en": "At constant volume and temperature the pressure is proportional to the number of moles of gas; to follow a reaction by pressure, the moles of gas must change. In H2 + I2 → 2HI, 2 mol of gas give 2 mol of gas and the pressure stays constant; this reaction is followed instead, for example, by the fading violet colour of I2. In 2NO + O2 gas goes 3 → 2, in N2 + 3H2 4 → 2, in 2N2O5 2 → 5 mol; in the decomposition of CaCO3 the pressure rises as gaseous CO2 forms.",
        "de": "Bei konstantem Volumen und konstanter Temperatur ist der Druck proportional zur Gasstoffmenge; zur Verfolgung über den Druck muss sich die Gasstoffmenge ändern. Bei H2 + I2 → 2HI entstehen aus 2 mol Gas 2 mol Gas, der Druck bleibt konstant; diese Reaktion verfolgt man z. B. über das Verblassen der violetten I2-Farbe. Bei 2NO + O2 gilt 3 → 2, bei N2 + 3H2 4 → 2, bei 2N2O5 2 → 5 mol Gas; bei der Zersetzung von CaCO3 steigt der Druck, weil gasförmiges CO2 entsteht.",
        "fr": "À volume et température constants, la pression est proportionnelle à la quantité de gaz ; pour suivre une réaction par la pression, la quantité de gaz doit varier. Dans H2 + I2 → 2HI, 2 mol de gaz donnent 2 mol de gaz et la pression reste constante ; on suit plutôt cette réaction, par exemple, par la disparition de la couleur violette de I2. Dans 2NO + O2 on passe de 3 à 2, dans N2 + 3H2 de 4 à 2, dans 2N2O5 de 2 à 5 mol de gaz ; lors de la décomposition de CaCO3, la pression augmente à mesure que CO2 gazeux se forme.",
        "ru": "При постоянных объёме и температуре давление пропорционально количеству газа; чтобы следить за реакцией по давлению, количество газа должно меняться. В реакции H2 + I2 → 2HI из 2 моль газа образуется 2 моль газа, и давление не меняется; эту реакцию отслеживают, например, по ослаблению фиолетовой окраски I2. В реакции 2NO + O2 количество газа меняется 3 → 2, в N2 + 3H2 — 4 → 2, в 2N2O5 — 2 → 5 моль; при разложении CaCO3 давление растёт по мере образования газообразного CO2.",
        "ar": "عند ثبات الحجم ودرجة الحرارة يتناسب الضغط مع عدد مولات الغاز؛ ولتتبّع التفاعل بالضغط يجب أن يتغيّر عدد مولات الغاز. في H2 + I2 → 2HI ينتج 2 mol غاز من 2 mol غاز فيبقى الضغط ثابتًا؛ لذا يُتتبّع هذا التفاعل مثلًا بخفوت اللون البنفسجي لـ I2. في 2NO + O2 يتغيّر الغاز من 3 إلى 2، وفي N2 + 3H2 من 4 إلى 2، وفي 2N2O5 من 2 إلى 5 mol؛ وفي تفكك CaCO3 يزداد الضغط بتكوّن غاز CO2.",
        "zh": "恒容恒温下，压强与气体物质的量成正比；要用压强跟踪反应，气体的物质的量必须改变。H2 + I2 → 2HI中2 mol气体生成2 mol气体，压强不变；这个反应可以改用例如I2紫色变浅来跟踪。2NO + O2中气体由3变为2，N2 + 3H2中由4变为2，2N2O5中由2变为5 mol；CaCO3分解时随着气体CO2生成，压强增大。",
        "ku": "Di qebare û germahiya sabît de zext bi hejmara molên gazê re rêjeyî ye; ji bo şopandina bi zextê divê hejmara molên gazê biguhere. Di H2 + I2 → 2HI de ji 2 mol gazê 2 mol gaz çêdibe û zext sabît dimîne; ev reaksiyon ne bi zextê, lê bo nimûne bi kêmbûna rengê mor ê I2 tê şopandin. Di 2NO + O2 de mola gazê 3 → 2, di N2 + 3H2 de 4 → 2, di 2N2O5 de 2 → 5 dibe; di perçebûna CaCO3 de jî her ku gaza CO2 çêdibe zext zêde dibe."
      }
    },
    {
      "id": "u17-twin15",
      "stem": {
        "tr": "Zn(k) + 2HCl(aq) → ZnCl2(aq) + H2(g) tepkimesi sabit sıcaklıkta toz çinko ile gerçekleştiriliyor. I. Toz çinko yerine aynı kütlede tek parça (granül) çinko kullanmak, II. Aynı hacimde daha derişik HCl çözeltisi kullanmak, III. Aynı sıcaklıktaki saf suyla HCl çözeltisini seyreltmek işlemlerinden hangileri tepkimenin başlangıç hızını artırır?",
        "en": "The reaction Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g) is carried out with powdered zinc at constant temperature. Which of the following increase the initial rate of the reaction? I. Using the same mass of zinc as a single lump (granule) instead of powder II. Using the same volume of a more concentrated HCl solution III. Diluting the HCl solution with pure water at the same temperature",
        "de": "Die Reaktion Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g) wird bei konstanter Temperatur mit Zinkpulver durchgeführt. Welche Maßnahmen erhöhen die Anfangsgeschwindigkeit? I. Statt Pulver die gleiche Masse Zink als ein Stück (Granalie) verwenden II. Das gleiche Volumen einer konzentrierteren HCl-Lösung verwenden III. Die HCl-Lösung mit reinem Wasser gleicher Temperatur verdünnen",
        "fr": "La réaction Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g) est réalisée avec du zinc en poudre à température constante. Lesquelles des opérations suivantes augmentent la vitesse initiale ? I. Utiliser la même masse de zinc en un seul morceau (granule) au lieu de poudre II. Utiliser le même volume d'une solution de HCl plus concentrée III. Diluer la solution de HCl avec de l'eau pure à la même température",
        "ru": "Реакцию Zn(тв) + 2HCl(р-р) → ZnCl2(р-р) + H2(г) проводят с порошком цинка при постоянной температуре. Какие из действий увеличивают начальную скорость реакции? I. Использование той же массы цинка одним куском (гранулой) вместо порошка. II. Использование того же объёма более концентрированного раствора HCl. III. Разбавление раствора HCl чистой водой той же температуры.",
        "ar": "يُجرى التفاعل Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g) باستخدام مسحوق الخارصين عند درجة حرارة ثابتة. أيّ الإجراءات التالية تزيد السرعة الابتدائية للتفاعل؟ I. استخدام الكتلة نفسها من الخارصين قطعةً واحدة (حبيبة) بدل المسحوق II. استخدام الحجم نفسه من محلول HCl أكثر تركيزًا III. تخفيف محلول HCl بماء نقي عند درجة الحرارة نفسها",
        "zh": "在恒温下用锌粉进行反应 Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g)。下列哪些操作能使反应的初始速率增大？I. 用同样质量的块状（颗粒）锌代替锌粉 II. 用同体积、浓度更大的HCl溶液 III. 用相同温度的纯水稀释HCl溶液",
        "ku": "Reaksiyona Zn(s) + 2HCl(aq) → ZnCl2(aq) + H2(g) di germahiya sabît de bi toza zinkê tê kirin. Kîjan ji van karan leza destpêkê ya reaksiyonê zêde dikin? I. Li şûna toza zinkê bikaranîna heman girseya zinkê ya yekperçe (granul) II. Bikaranîna heman qebareya çareseriya HCl ya tîrtir III. Sistkirina çareseriya HCl bi ava paqij a di heman germahiyê de"
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
        "tr": "I: Tek parça çinkonun temas yüzeyi tozdan küçüktür; heterojen tepkimede yüzey azalınca hız azalır. II: H+ derişimi artar, birim zamanda yüzeye çarpan H+ sayısı artar; hız artar. III: Seyreltme H+ derişimini düşürür, hız azalır. Su eklemeyi 'çözünmeyi kolaylaştırır' diye hızı artırıyor sanmak tipik hatadır.",
        "en": "I: A single lump of zinc has a smaller surface area than powder; in a heterogeneous reaction a smaller surface means a lower rate. II: The H+ concentration increases, so more H+ ions hit the surface per unit time; the rate increases. III: Dilution lowers the H+ concentration and the rate decreases. Thinking that adding water speeds things up because it 'helps dissolving' is the typical error.",
        "de": "I: Ein Zinkstück hat eine kleinere Oberfläche als Pulver; bei einer heterogenen Reaktion senkt eine kleinere Oberfläche die Geschwindigkeit. II: Die H+-Konzentration steigt, pro Zeiteinheit treffen mehr H+ auf die Oberfläche; die Geschwindigkeit steigt. III: Verdünnen senkt die H+-Konzentration, die Geschwindigkeit sinkt. Zu glauben, Wasserzugabe beschleunige, weil sie das Lösen erleichtere, ist der typische Fehler.",
        "fr": "I : un morceau de zinc a une surface de contact plus petite que la poudre ; dans une réaction hétérogène, une surface plus petite diminue la vitesse. II : la concentration en H+ augmente, davantage d'ions H+ frappent la surface par unité de temps ; la vitesse augmente. III : la dilution abaisse la concentration en H+ et la vitesse diminue. Croire qu'ajouter de l'eau accélère parce qu'elle « facilite la dissolution » est l'erreur typique.",
        "ru": "I: у куска цинка площадь поверхности меньше, чем у порошка; в гетерогенной реакции при уменьшении поверхности скорость снижается. II: концентрация H+ растёт, в единицу времени о поверхность ударяется больше ионов H+, и скорость растёт. III: разбавление снижает концентрацию H+, скорость уменьшается. Типичная ошибка — считать, что вода ускоряет реакцию, «облегчая растворение».",
        "ar": "I: مساحة سطح القطعة الواحدة من الخارصين أصغر من المسحوق؛ وفي التفاعل غير المتجانس يؤدي صغر السطح إلى نقص السرعة. II: يزداد تركيز H+ فيزداد عدد أيونات H+ التي تصطدم بالسطح في وحدة الزمن؛ فتزداد السرعة. III: التخفيف يخفض تركيز H+ فتقل السرعة. الاعتقاد بأن إضافة الماء تسرّع التفاعل لأنها «تسهّل الذوبان» خطأ شائع.",
        "zh": "I：块状锌的接触面积比锌粉小；非均相反应中表面积减小，速率减小。II：H+ 浓度增大，单位时间内撞击锌表面的 H+ 增多，速率增大。III：稀释使 H+ 浓度降低，速率减小。认为加水“有利于溶解”从而加快反应是典型错误。",
        "ku": "I: Rûbera têkiliyê ya zinka yekperçe ji ya tozê piçûktir e; di reaksiyona heterojen de bi kêmbûna rûberê lez kêm dibe. II: Tîrbûna H+ zêde dibe û hejmara H+ ên ku di yekîneya demê de li rûberê dikevin zêde dibe; lez zêde dibe. III: Sistkirin tîrbûna H+ kêm dike, lez kêm dibe. Fikra ku lêzêdekirina avê 'helbûnê hêsan dike' û loma lezê zêde dike şaşiyeke tîpîk e."
      }
    },
    {
      "id": "u17-twin16",
      "stem": {
        "tr": "2NO(g) + 2H2(g) → N2(g) + 2H2O(g) tepkimesinin deneysel hız bağıntısı r = k[NO]^2[H2] olarak bulunmuştur. Buna göre, I. Tepkime, denklemde yazıldığı gibi tek basamakta gerçekleşmez. II. Tepkimenin toplam derecesi 3'tür. III. Sabit sıcaklıkta NO derişimi yarıya indirilirse (H2 derişimi sabit) tepkime hızı 1/4'üne düşer. yargılarından hangileri doğrudur?",
        "en": "The experimental rate law of the reaction 2NO(g) + 2H2(g) → N2(g) + 2H2O(g) is r = k[NO]^2[H2]. Accordingly, which of the following statements are correct? I. The reaction does not occur in a single step as written. II. The overall order of the reaction is 3. III. At constant temperature, if the NO concentration is halved (H2 concentration constant), the rate falls to 1/4.",
        "de": "Das experimentelle Geschwindigkeitsgesetz der Reaktion 2NO(g) + 2H2(g) → N2(g) + 2H2O(g) lautet r = k[NO]^2[H2]. Welche Aussagen sind richtig? I. Die Reaktion verläuft nicht, wie geschrieben, in einem einzigen Schritt. II. Die Gesamtordnung der Reaktion ist 3. III. Wird bei konstanter Temperatur die NO-Konzentration halbiert (H2-Konzentration konstant), sinkt die Geschwindigkeit auf 1/4.",
        "fr": "La loi de vitesse expérimentale de la réaction 2NO(g) + 2H2(g) → N2(g) + 2H2O(g) est r = k[NO]^2[H2]. Lesquelles des affirmations suivantes sont correctes ? I. La réaction ne se fait pas en une seule étape telle qu'elle est écrite. II. L'ordre global de la réaction est 3. III. À température constante, si la concentration de NO est divisée par deux (concentration de H2 constante), la vitesse tombe au 1/4.",
        "ru": "Экспериментально установлено кинетическое уравнение реакции 2NO(г) + 2H2(г) → N2(г) + 2H2O(г): r = k[NO]^2[H2]. Какие из утверждений верны? I. Реакция не протекает в одну стадию так, как она записана. II. Общий порядок реакции равен 3. III. Если при постоянной температуре уменьшить концентрацию NO вдвое (концентрация H2 постоянна), скорость уменьшится в 4 раза.",
        "ar": "قانون السرعة التجريبي للتفاعل 2NO(g) + 2H2(g) → N2(g) + 2H2O(g) هو r = k[NO]^2[H2]. أيّ العبارات التالية صحيحة؟ I. لا يحدث التفاعل في خطوة واحدة كما هو مكتوب. II. الرتبة الكلية للتفاعل 3. III. عند ثبات درجة الحرارة، إذا خُفّض تركيز NO إلى النصف (مع ثبات تركيز H2) تنخفض السرعة إلى 1/4.",
        "zh": "反应 2NO(g) + 2H2(g) → N2(g) + 2H2O(g) 的实验速率方程为 r = k[NO]^2[H2]。有下列说法：I. 该反应不是按所写方程式一步完成的。II. 反应的总级数为3。III. 恒温下若 NO 浓度减半(H2 浓度不变)，反应速率降为原来的1/4。其中正确的是哪些？",
        "ku": "Hevkêşeya lezê ya ceribandinî ya reaksiyona 2NO(g) + 2H2(g) → N2(g) + 2H2O(g) wekî r = k[NO]^2[H2] hatiye dîtin. Li gorî vê, kîjan ji van gotinan rast in? I. Reaksiyon wekî ku di hevkêşeyê de hatiye nivîsandin di yek gavê de pêk nayê. II. Pileya giştî ya reaksiyonê 3 e. III. Di germahiya sabît de heke tîrbûna NO nîv bibe (tîrbûna H2 sabît), leza reaksiyonê dadikeve 1/4-a xwe."
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
        "tr": "I doğru: tepkime yazıldığı gibi tek basamakta olsaydı hız bağıntısı r = k[NO]^2[H2]^2 olurdu; deneysel bağıntı farklı olduğundan tepkime mekanizmalıdır (ayrıca dört taneciğin aynı anda çarpışması pek olası değildir). II doğru: 2 + 1 = 3. III doğru: r ∝ [NO]^2 olduğundan (1/2)^2 = 1/4. Toplam dereceyi katsayılardan 4 bulmak tipik hatadır.",
        "en": "I is correct: if the reaction occurred in one step as written, the rate law would be r = k[NO]^2[H2]^2; since the experimental law differs, the reaction has a mechanism (and a simultaneous collision of four particles is very unlikely). II is correct: 2 + 1 = 3. III is correct: r ∝ [NO]^2, so (1/2)^2 = 1/4. Getting an overall order of 4 from the coefficients is the typical error.",
        "de": "I ist richtig: Liefe die Reaktion wie geschrieben in einem Schritt ab, wäre das Gesetz r = k[NO]^2[H2]^2; da das experimentelle Gesetz abweicht, hat die Reaktion einen Mechanismus (außerdem ist ein gleichzeitiger Stoß von vier Teilchen sehr unwahrscheinlich). II ist richtig: 2 + 1 = 3. III ist richtig: r ∝ [NO]^2, also (1/2)^2 = 1/4. Die Gesamtordnung 4 aus den Koeffizienten abzuleiten ist der typische Fehler.",
        "fr": "I est correcte : si la réaction se faisait en une étape telle qu'écrite, la loi serait r = k[NO]^2[H2]^2 ; la loi expérimentale étant différente, la réaction suit un mécanisme (et un choc simultané de quatre particules est très improbable). II est correcte : 2 + 1 = 3. III est correcte : r ∝ [NO]^2, donc (1/2)^2 = 1/4. Trouver un ordre global de 4 à partir des coefficients est l'erreur typique.",
        "ru": "I верно: если бы реакция шла в одну стадию так, как записана, кинетическое уравнение имело бы вид r = k[NO]^2[H2]^2; экспериментальное уравнение другое, значит, реакция идёт через несколько стадий (к тому же одновременное столкновение четырёх частиц маловероятно). II верно: 2 + 1 = 3. III верно: r ∝ [NO]^2, поэтому (1/2)^2 = 1/4. Найти общий порядок 4 по коэффициентам — типичная ошибка.",
        "ar": "I صحيحة: لو حدث التفاعل في خطوة واحدة كما هو مكتوب لكان قانون السرعة r = k[NO]^2[H2]^2؛ وبما أن القانون التجريبي مختلف فللتفاعل آلية (كما أن تصادم أربعة جسيمات في آن واحد بعيد الاحتمال). II صحيحة: 2 + 1 = 3. III صحيحة: r ∝ [NO]^2 لذا (1/2)^2 = 1/4. استنتاج رتبة كلية 4 من المعاملات خطأ شائع.",
        "zh": "I正确：若反应按所写方程式一步完成，速率方程应为 r = k[NO]^2[H2]^2；实验速率方程与此不同，说明反应分步进行（而且四个粒子同时碰撞几乎不可能）。II正确：2 + 1 = 3。III正确：r ∝ [NO]^2，所以(1/2)^2 = 1/4。由系数得出总级数为4是典型错误。",
        "ku": "I rast e: heke reaksiyon wekî ku hatiye nivîsandin di yek gavê de pêk bihata, hevkêşeya lezê dê r = k[NO]^2[H2]^2 bûya; ji ber ku hevkêşeya ceribandinî cuda ye, reaksiyon bi mekanîzma ye (herwiha lihevketina çar perçeyan di heman kêliyê de ne pir muhtemel e). II rast e: 2 + 1 = 3. III rast e: ji ber ku r ∝ [NO]^2 e, (1/2)^2 = 1/4. Dîtina pileya giştî wekî 4 ji hevberan şaşiyeke tîpîk e."
      }
    }
  ]
};

export default unit17;
