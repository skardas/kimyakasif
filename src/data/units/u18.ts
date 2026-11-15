import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit18: ChemistryUnitSeedData = {
  "id": "u18",
  "order": 18,
  "exam": "AYT",
  "grade": 11,
  "title": {
    "tr": "Kimyasal Denge",
    "en": "Chemical Equilibrium",
    "de": "Chemisches Gleichgewicht",
    "fr": "Équilibre Chimique",
    "ru": "Химическое равновесие",
    "ar": "الاتزان الكيميائي",
    "zh": "化学平衡",
    "ku": "Hevsengiya Kîmyewî"
  },
  "subtitle": {
    "tr": "Le Chatelier İlkesi, Kc ve Kp Bağıntıları",
    "en": "Kc, Kp, Le Chatelier Principle & Shifts",
    "de": "Le Chatelier-Prinzip, Kc- und Kp-Beziehungen",
    "fr": "Principe de Le Chatelier, relations Kc et Kp",
    "ru": "Принцип Ле Шателье, отношения Kc и Kp",
    "ar": "مبدأ لو شاتيليه، علاقات Kc وKp",
    "zh": "Le Chatelier 原理、Kc 和 Kp 关系",
    "ku": "Prensîba Le Chatelier, Têkiliyên Kc û Kp"
  },
  "facts": [
    {
      "id": "u18-f01",
      "fact": {
        "tr": "Kimyasal denge dinamiktir; ileri tepkime hızı geri tepkime hızına eşit olduğunda kurulur (ri = rg).",
        "en": "Chemical equilibrium is dynamic; It is established when the forward reaction rate is equal to the reverse reaction rate (ri = rg).",
        "de": "Das chemische Gleichgewicht ist dynamisch; Sie liegt vor, wenn die Vorwärtsreaktionsgeschwindigkeit gleich der Rückreaktionsgeschwindigkeit ist (ri = rg).",
        "fr": "L'équilibre chimique est dynamique ; Il est établi lorsque la vitesse de réaction directe est égale à la vitesse de réaction inverse (ri = rg).",
        "ru": "Химическое равновесие динамично; Он устанавливается, когда скорость прямой реакции равна скорости обратной реакции (ri = rg).",
        "ar": "التوازن الكيميائي ديناميكي. يتم تأسيسه عندما يكون معدل التفاعل الأمامي مساوياً لمعدل التفاعل العكسي (ri = rg).",
        "zh": "化学平衡是动态的；当正向反应速率等于逆向反应速率（ri = rg）时成立。",
        "ku": "Hevsengiya kîmyewî dînamîk e; dema ku leza reaksiyona pêşve bi leza reaksiyona paşve re wekhev be, tê sazkirin (ri = rg)."
      },
      "trap": {
        "tr": "Denge kurulduğunda tüm kimyasal tepkimeler ve tanecik hareketleri tamamen durur.",
        "en": "When equilibrium is established, all chemical reactions and particle movements stop completely.",
        "de": "Wenn das Gleichgewicht hergestellt ist, kommen alle chemischen Reaktionen und Partikelbewegungen vollständig zum Stillstand.",
        "fr": "Lorsque l’équilibre est établi, toutes les réactions chimiques et mouvements de particules s’arrêtent complètement.",
        "ru": "Когда устанавливается равновесие, все химические реакции и движения частиц полностью прекращаются.",
        "ar": "عند حدوث التوازن، تتوقف جميع التفاعلات الكيميائية وحركات الجسيمات تمامًا.",
        "zh": "当建立平衡时，所有化学反应和粒子运动完全停止。",
        "ku": "Dema ku hevsengî çêbibe, hemî reaksiyonên kîmyewî û tevgerên parçikan bi tevahî disekinin."
      }
    },
    {
      "id": "u18-f02",
      "fact": {
        "tr": "Denge anında reaktif ve ürün derişimleri sabittir; ancak derişimlerin birbirine eşit olması gerekmez.",
        "en": "At equilibrium, reactant and product concentrations are constant; However, the concentrations do not have to be equal.",
        "de": "Im Gleichgewicht sind die Reaktanten- und Produktkonzentrationen konstant; Allerdings müssen die Konzentrationen nicht gleich sein.",
        "fr": "À l'équilibre, les concentrations de réactifs et de produits sont constantes ; Cependant, les concentrations ne doivent pas nécessairement être égales.",
        "ru": "В равновесии концентрации реагентов и продуктов постоянны; Однако концентрации не обязательно должны быть равными.",
        "ar": "في حالة التوازن، تكون تركيزات المواد المتفاعلة والنواتج ثابتة؛ ومع ذلك، لا يجب أن تكون التركيزات متساوية.",
        "zh": "平衡时，反应物和产物浓度恒定；然而，浓度不必相等。",
        "ku": "Di hevsengiyê de, giraniya reaktant û hilberê domdar in; Lêbelê, ne hewce ye ku berhevok wekhev bin."
      },
      "trap": {
        "tr": "Dengeye ulaşan bir sistemde girenlerin ve ürünlerin derişimleri daima eşittir.",
        "en": "In a system that reaches equilibrium, the concentrations of reactants and products are always equal.",
        "de": "In einem System, das ein Gleichgewicht erreicht, sind die Konzentrationen von Reaktanten und Produkten immer gleich.",
        "fr": "Dans un système qui atteint l’équilibre, les concentrations de réactifs et de produits sont toujours égales.",
        "ru": "В системе, достигшей равновесия, концентрации реагирующих веществ и продуктов всегда равны.",
        "ar": "في النظام الذي يصل إلى التوازن، تكون تركيزات المواد المتفاعلة والمنتجات متساوية دائمًا.",
        "zh": "在达到平衡的系统中，反应物和产物的浓度始终相等。",
        "ku": "Di pergalek ku digihîje hevsengiyê de, giraniya reaktant û hilberan her dem wekhev in."
      }
    },
    {
      "id": "u18-f03",
      "fact": {
        "tr": "Denge sabiti Kc sadece sıcaklıkla değişir; derişim, basınç, hacim veya katalizör Kc yi DEĞİŞTİRMEZ.",
        "en": "The equilibrium constant Kc varies only with temperature; concentration, pressure, volume or catalyst does NOT change Kc.",
        "de": "Die Gleichgewichtskonstante Kc variiert nur mit der Temperatur; Konzentration, Druck, Volumen oder Katalysator verändern Kc NICHT.",
        "fr": "La constante d'équilibre Kc ne varie qu'avec la température ; la concentration, la pression, le volume ou le catalyseur ne change PAS Kc.",
        "ru": "Константа равновесия Кс меняется только с температурой; концентрация, давление, объем или катализатор НЕ изменяют Kc.",
        "ar": "يتغير ثابت التوازن Kc فقط مع درجة الحرارة؛ التركيز أو الضغط أو الحجم أو المحفز لا يغير Kc.",
        "zh": "平衡常数Kc仅随温度变化；浓度、压力、体积或催化剂不会改变 Kc。",
        "ku": "Berdewamiya hevsengiyê Kc tenê bi germahiyê diguhere; konsantasyon, zext, cild an katalîzator Kc naguhere."
      },
      "trap": {
        "tr": "Katalizör eklendiğinde sistemin denge sabiti Kc büyür.",
        "en": "When a catalyst is added, the equilibrium constant Kc of the system increases.",
        "de": "Wenn ein Katalysator hinzugefügt wird, erhöht sich die Gleichgewichtskonstante Kc des Systems.",
        "fr": "Lorsqu'un catalyseur est ajouté, la constante d'équilibre Kc du système augmente.",
        "ru": "При добавлении катализатора константа равновесия Kc системы увеличивается.",
        "ar": "عند إضافة محفز، يزداد ثابت التوازن Kc للنظام.",
        "zh": "当添加催化剂时，体系的平衡常数Kc增加。",
        "ku": "Dema ku katalîzator tê zêdekirin, sabîta hevsengiyê Kc ya pergalê mezin dibe."
      },
      "osymTip": {
        "tr": "ÖSYM kuralı: Kc yi değiştiren TEK faktör sıcaklıktır!",
        "en": "ÖSYM rule: The ONLY factor that changes Kc is temperature!",
        "de": "ÖSYM-Regel: Der EINZIGE Faktor, der Kc verändert, ist die Temperatur!",
        "fr": "Règle ÖSYM : le SEUL facteur qui modifie Kc est la température !",
        "ru": "Правило ÖSYM: ЕДИНСТВЕННЫЙ фактор, который меняет Kc, — это температура!",
        "ar": "قاعدة ÖSYM: العامل الوحيد الذي يغيّر Kc هو درجة الحرارة!",
        "zh": "ÖSYM 规则：改变 Kc 的唯一因素是温度！",
        "ku": "Qanûna ÖSYM: TENÊ faktora ku Kc diguherîne germahî ye!"
      }
    },
    {
      "id": "u18-f04",
      "fact": {
        "tr": "Kp ile Kc arasındaki bağıntı: Kp = Kc * (R*T)^Δn dir (Δn: gaz fazındaki ürün katsayıları toplamı - giren katsayıları toplamı).",
        "en": "The relationship between Kp and Kc is: Kp = Kc * (R*T)^Δn (Δn: sum of product coefficients in the gas phase - sum of reactant coefficients).",
        "de": "Die Beziehung zwischen Kp und Kc ist: Kp = Kc * (R*T)^Δn (Δn: Summe der Produktkoeffizienten in der Gasphase – Summe der Reaktantenkoeffizienten).",
        "fr": "La relation entre Kp et Kc est : Kp = Kc * (R*T)^Δn (Δn : somme des coefficients des produits en phase gazeuse - somme des coefficients des réactifs).",
        "ru": "Связь между Kp и Kc следующая: Kp = Kc * (R*T)^Δn (Δn: сумма коэффициентов продуктов в газовой фазе - сумма коэффициентов реагентов).",
        "ar": "العلاقة بين Kp وKc هي: Kp = Kc * (R*T)^Δn (Δn: مجموع معاملات الناتج في الطور الغازي - مجموع معاملات المواد المتفاعلة).",
        "zh": "Kp与Kc的关系为：Kp = Kc * (R*T)^Δn（Δn：气态产物系数之和 - 气态反应物系数之和）。",
        "ku": "Têkiliya di navbera Kp û Kc de ev e: Kp = Kc * (R*T)^Δn (Δn: berhevoka hevberên hilberan ên di qonaxa gazê de - berhevoka hevberên reaktant)."
      },
      "trap": {
        "tr": "Δn hesaplanırken katı ve sıvı fazdaki maddelerin katsayıları da dahil edilir.",
        "en": "When calculating Δn, the coefficients of substances in the solid and liquid phases are also included.",
        "de": "Bei der Berechnung von Δn werden auch die Koeffizienten der Stoffe in der festen und flüssigen Phase einbezogen.",
        "fr": "Lors du calcul de Δn, les coefficients des substances en phases solide et liquide sont également inclus.",
        "ru": "При расчете Δn учитываются также коэффициенты веществ в твердой и жидкой фазах.",
        "ar": "عند حساب Δn، يتم أيضًا تضمين معاملات المواد في المرحلتين الصلبة والسائلة.",
        "zh": "计算Δn时，还包括固相和液相物质的系数。",
        "ku": "Dema ku Δn tê hesabkirin, rêjeya maddeyên di qonaxên hişk û şil de jî tê de hene."
      }
    },
    {
      "id": "u18-f05",
      "fact": {
        "tr": "Eğer gaz fazında Δn = 0 ise (ürün gaz molü = giren gaz molü), Kp = Kc dir.",
        "en": "If Δn = 0 in the gas phase (mole of product gas = mole of entering gas), Kp = Kc.",
        "de": "Wenn Δn = 0 in der Gasphase (Mol Produktgas = Mol eintretendes Gas), ist Kp = Kc.",
        "fr": "Si Δn = 0 dans la phase gazeuse (mole de gaz produit = mole de gaz entrant), Kp = Kc.",
        "ru": "Если Δn = 0 в газовой фазе (моль полученного газа = моль поступающего газа), Kp = Kc.",
        "ar": "إذا كانت Δn = 0 في الطور الغازي (مول الغاز الناتج = مول الغاز الداخل)، Kp = Kc.",
        "zh": "如果气相中Δn=0（产物气体的摩尔数=进入气体的摩尔数），则Kp=​​Kc。",
        "ku": "Ger Δn = 0 di qonaxa gazê de (molê gaza berhemê = molê gazê dikeve), Kp = Kc."
      },
      "trap": {
        "tr": "Δn = 0 olduğunda Kp sıfıra eşit olur.",
        "en": "When Δn = 0, Kp equals zero.",
        "de": "Wenn Δn = 0, ist Kp gleich Null.",
        "fr": "Lorsque Δn = 0, Kp est égal à zéro.",
        "ru": "Когда Δn = 0, Kp равен нулю.",
        "ar": "عندما Δn = 0، Kp يساوي صفر.",
        "zh": "当 Δn = 0 时，Kp 为零。",
        "ku": "Dema Δn = 0, Kp dibe sifir."
      }
    },
    {
      "id": "u18-f06",
      "fact": {
        "tr": "Le Chatelier İlkesi: Dengedeki bir sisteme dışarıdan bir etki yapıldığında sistem bu etkiyi azaltacak yöne kayar.",
        "en": "Le Chatelier's Principle: When an external effect is applied to a system in equilibrium, the system shifts in the direction that will reduce this effect.",
        "de": "Das Prinzip von Le Chatelier: Wenn ein externer Effekt auf ein System im Gleichgewicht ausgeübt wird, verschiebt sich das System in die Richtung, die diesen Effekt verringert.",
        "fr": "Principe de Le Chatelier : Lorsqu'un effet externe est appliqué à un système en équilibre, le système se déplace dans la direction qui réduira cet effet.",
        "ru": "Принцип Ле Шателье: когда к системе, находящейся в равновесии, применяется внешний эффект, система смещается в направлении, которое уменьшит этот эффект.",
        "ar": "مبدأ لوشاتيليه: عند تطبيق تأثير خارجي على نظام في حالة توازن، فإن النظام يتحرك في الاتجاه الذي يقلل من هذا التأثير.",
        "zh": "勒夏特列原理：当外部效应施加到平衡状态的系统时，系统会向减少该效应的方向移动。",
        "ku": "Prensîba Le Chatelier: Dema ku bandorek derveyî li ser pergalek di nav hevsengiyê de were sepandin, pergal ber bi wê rêyê ve diçe ku dê vê bandorê kêm bike."
      },
      "trap": {
        "tr": "Dengedeki sisteme madde eklenirse sistem o maddenin derişimini daha da artıracak yöne kayar.",
        "en": "If a substance is added to the system in equilibrium, the system will shift in a direction that will further increase the concentration of that substance.",
        "de": "Wenn dem System im Gleichgewicht ein Stoff hinzugefügt wird, verschiebt sich das System in eine Richtung, die die Konzentration dieses Stoffes weiter erhöht.",
        "fr": "Si une substance est ajoutée au système en équilibre, le système se déplacera dans une direction qui augmentera encore la concentration de cette substance.",
        "ru": "Если вещество добавляется в систему в равновесии, система сместится в направлении, которое еще больше увеличит концентрацию этого вещества.",
        "ar": "إذا تمت إضافة مادة إلى النظام في حالة توازن، فإن النظام سوف يتحول في اتجاه يؤدي إلى زيادة تركيز تلك المادة.",
        "zh": "如果将一种物质添加到处于平衡状态的系统中，系统将向进一步增加该物质浓度的方向移动。",
        "ku": "Ger maddeyek di nav hevsengiyê de li pergalê were zêdekirin, dê pergal ber bi aliyekê ve biçe ku dê hêjmara wê maddeyê zêdetir bike."
      }
    },
    {
      "id": "u18-f07",
      "fact": {
        "tr": "Endotermik tepkimelerde (ΔH > 0) sıcaklık artırılırsa denge ürünler lehine kayar ve Kc artar.",
        "en": "In endothermic reactions (ΔH > 0), if the temperature is increased, the equilibrium shifts in favor of the products and Kc increases.",
        "de": "Bei endothermen Reaktionen (ΔH > 0) verschiebt sich das Gleichgewicht zugunsten der Produkte und Kc steigt, wenn die Temperatur erhöht wird.",
        "fr": "Dans les réactions endothermiques (ΔH > 0), si la température augmente, l'équilibre se déplace en faveur des produits et Kc augmente.",
        "ru": "В эндотермических реакциях (ΔH > 0) при повышении температуры равновесие смещается в пользу продуктов и увеличивается Kc.",
        "ar": "في التفاعلات الماصة للحرارة (ΔH > 0)، إذا زادت درجة الحرارة، يتحول التوازن لصالح المنتجات وتزداد Kc.",
        "zh": "在吸热反应 (ΔH > 0) 中，如果温度升高，平衡会向有利于产物的方向移动，并且 Kc 增加。",
        "ku": "Di reaksiyonên endotermîk de (ΔH > 0), ger germahî zêde bibe, hevsengî di berjewendiya hilberan de diguhere û Kc zêde dibe."
      },
      "trap": {
        "tr": "Endotermik tepkimede sıcaklık artışı denge sabitini küçültür.",
        "en": "In an endothermic reaction, increasing temperature decreases the equilibrium constant.",
        "de": "Bei einer endothermen Reaktion verringert sich bei steigender Temperatur die Gleichgewichtskonstante.",
        "fr": "Dans une réaction endothermique, l’augmentation de la température diminue la constante d’équilibre.",
        "ru": "В эндотермической реакции повышение температуры уменьшает константу равновесия.",
        "ar": "في التفاعل الماص للحرارة، تؤدي زيادة درجة الحرارة إلى تقليل ثابت التوازن.",
        "zh": "在吸热反应中，升高温度会降低平衡常数。",
        "ku": "Di reaksiyonek endotermîk de, zêdebûna germahiyê domdariya hevsengiyê kêm dike."
      }
    },
    {
      "id": "u18-f08",
      "fact": {
        "tr": "Ekzotermik tepkimelerde (ΔH < 0) sıcaklık artırılırsa denge girenler lehine kayar ve Kc azalır.",
        "en": "In exothermic reactions (ΔH < 0), if the temperature is increased, the equilibrium shifts in favor of the reactants and Kc decreases.",
        "de": "Bei exothermen Reaktionen (ΔH < 0) verschiebt sich das Gleichgewicht zugunsten der Reaktanten und Kc sinkt, wenn die Temperatur erhöht wird.",
        "fr": "Dans les réactions exothermiques (ΔH < 0), si la température augmente, l'équilibre se déplace en faveur des réactifs et Kc diminue.",
        "ru": "В экзотермических реакциях (ΔH < 0) при повышении температуры равновесие смещается в пользу реагентов и Kc уменьшается.",
        "ar": "في التفاعلات الطاردة للحرارة (ΔH < 0)، إذا زادت درجة الحرارة، يتحول التوازن لصالح المواد المتفاعلة وتنخفض Kc.",
        "zh": "在放热反应 (ΔH < 0) 中，如果温度升高，平衡就会向有利于反应物的方向移动，并且 Kc 会降低。",
        "ku": "Di reaksiyonên exotermîk de (ΔH < 0), ger germahî zêde bibe, hevsengî di berjewendiya reaktantan de diguhere û Kc kêm dibe."
      },
      "trap": {
        "tr": "Ekzotermik tepkimede sıcaklık arttıkça daha çok ürün oluşur.",
        "en": "In an exothermic reaction, as the temperature increases, more products are formed.",
        "de": "Bei einer exothermen Reaktion entstehen mit steigender Temperatur mehr Produkte.",
        "fr": "Dans une réaction exothermique, à mesure que la température augmente, davantage de produits se forment.",
        "ru": "В экзотермической реакции с повышением температуры образуется больше продуктов.",
        "ar": "في التفاعل الطارد للحرارة، مع زيادة درجة الحرارة، يتم تشكيل المزيد من المنتجات.",
        "zh": "在放热反应中，随着温度升高，会形成更多产物。",
        "ku": "Di reaksiyonek exotermîk de, her ku germahî zêde dibe, bêtir hilber têne çêkirin."
      }
    },
    {
      "id": "u18-f09",
      "fact": {
        "tr": "Katalizör ileri ve geri tepkime hızını eşit oranda artırır; dengeyi bozmaz, sadece dengeye ulaşma süresini kısaltır.",
        "en": "The catalyst increases the forward and reverse reaction rates equally; It does not disrupt the balance, it just shortens the time to reach equilibrium.",
        "de": "Der Katalysator erhöht die Vorwärts- und Rückwärtsreaktionsgeschwindigkeit gleichermaßen; Es stört das Gleichgewicht nicht, es verkürzt lediglich die Zeit bis zum Erreichen des Gleichgewichts.",
        "fr": "Le catalyseur augmente les vitesses de réaction directe et inverse de manière égale ; Cela ne perturbe pas l’équilibre, cela raccourcit simplement le temps nécessaire pour atteindre l’équilibre.",
        "ru": "Катализатор в равной степени увеличивает скорость прямой и обратной реакции; Это не нарушает баланс, а лишь сокращает время достижения равновесия.",
        "ar": "يزيد المحفز من معدلات التفاعل الأمامي والخلفي بالتساوي؛ فهو لا يخل بالتوازن، بل يختصر الوقت اللازم للوصول إلى التوازن.",
        "zh": "催化剂同等地提高正向和逆向反应速率；它不会破坏平衡，只是缩短达到平衡的时间。",
        "ku": "Katalîzator rêjeyên reaksiyonên pêş û berevajî wekhev zêde dike; Ew hevsengiyê xera nake, tenê dema gihîştina hevsengiyê kurt dike."
      },
      "trap": {
        "tr": "Katalizör ürün verimini artırmak için kullanılır.",
        "en": "Catalyst is used to increase product yield.",
        "de": "Zur Steigerung der Produktausbeute wird ein Katalysator eingesetzt.",
        "fr": "Le catalyseur est utilisé pour augmenter le rendement du produit.",
        "ru": "Катализатор используется для увеличения выхода продукта.",
        "ar": "يستخدم المحفز لزيادة إنتاجية المنتج.",
        "zh": "催化剂用于提高产品产量。",
        "ku": "Katalîzator ji bo zêdekirina hilberîna hilberê tê bikar anîn."
      }
    },
    {
      "id": "u18-f10",
      "fact": {
        "tr": "Hacim küçültülürse (basınç artırılırsa) sistem gaz mol sayısının az olduğu tarafa kayar.",
        "en": "If the volume is reduced (pressure is increased), the system shifts to the side where the number of gas moles is lower.",
        "de": "Wird das Volumen verringert (Druck erhöht), verschiebt sich das System auf die Seite, wo die Anzahl der Gasmole geringer ist.",
        "fr": "Si le volume diminue (la pression augmente), le système se déplace vers le côté où le nombre de moles de gaz est plus faible.",
        "ru": "При уменьшении объема (повышении давления) система смещается в сторону, где число молей газа меньше.",
        "ar": "إذا انخفض الحجم (زاد الضغط)، ينتقل النظام إلى الجانب الذي يكون فيه عدد مولات الغاز أقل.",
        "zh": "如果体积减少（压力增加），系统就会向气体摩尔数较低的一侧移动。",
        "ku": "Ger deng kêm bibe (zext zêde bibe), pergal vediguhere aliyê ku hejmara molên gazê kêm e."
      },
      "trap": {
        "tr": "Hacim küçültüldüğünde sistem gaz mol sayısının çok olduğu yöne kayar.",
        "en": "When the volume is reduced, the system shifts to the direction where the number of gas moles is higher.",
        "de": "Wenn das Volumen verringert wird, verschiebt sich das System in die Richtung, in der die Anzahl der Gasmole höher ist.",
        "fr": "Lorsque le volume diminue, le système se déplace vers la direction où le nombre de moles de gaz est plus élevé.",
        "ru": "При уменьшении объема система смещается в ту сторону, где количество молей газа больше.",
        "ar": "عندما ينخفض ​​الحجم، ينتقل النظام إلى الاتجاه الذي يكون فيه عدد مولات الغاز أعلى.",
        "zh": "当体积减小时，系统向气体摩尔数较高的方向移动。",
        "ku": "Dema ku deng kêm dibe, pergal ber bi arasteya ku hejmara molên gazê lê zêde ye diguhere."
      }
    },
    {
      "id": "u18-f11",
      "fact": {
        "tr": "Denge kesri Qc = Kc ise sistem dengededir; Qc < Kc ise ürünlere kayar; Qc > Kc ise girenlere kayar.",
        "en": "If the reaction quotient Qc = Kc, the system is at equilibrium; if Qc < Kc, it shifts toward the products; if Qc > Kc, it shifts toward the reactants.",
        "de": "Ist der Reaktionsquotient Qc = Kc, befindet sich das System im Gleichgewicht; ist Qc < Kc, verschiebt es sich zu den Produkten; ist Qc > Kc, verschiebt es sich zu den Edukten.",
        "fr": "Si le quotient de réaction Qc = Kc, le système est à l'équilibre ; si Qc < Kc, il évolue vers les produits ; si Qc > Kc, il évolue vers les réactifs.",
        "ru": "Если коэффициент реакции Qc = Kc, система находится в равновесии; если Qc < Kc, она смещается в сторону продуктов; если Qc > Kc — в сторону реагентов.",
        "ar": "إذا كان حاصل التفاعل Qc = Kc فالنظام في حالة اتزان؛ وإذا كان Qc < Kc يتجه نحو النواتج؛ وإذا كان Qc > Kc يتجه نحو المتفاعلات.",
        "zh": "若反应商Qc = Kc，体系处于平衡；若Qc < Kc，平衡向产物方向移动；若Qc > Kc，向反应物方向移动。",
        "ku": "Ger kesra hevsengiyê Qc = Kc be, pergal di hevsengiyê de ye; ger Qc < Kc be, ber bi hilberan ve diçe; ger Qc > Kc be, ber bi reaktantan ve diçe."
      },
      "trap": {
        "tr": "Qc > Kc olduğunda sistem dengededir.",
        "en": "When Qc > Kc, the system is in equilibrium.",
        "de": "Wenn Qc > Kc, befindet sich das System im Gleichgewicht.",
        "fr": "Lorsque Qc > Kc, le système est en équilibre.",
        "ru": "Когда Qc > Kc, система находится в равновесии.",
        "ar": "عندما تكون Qc > Kc، يكون النظام في حالة توازن.",
        "zh": "当Qc>Kc时，系统处于平衡状态。",
        "ku": "Dema ku Qc > Kc, sîstem di hevsengiyê de ye."
      }
    },
    {
      "id": "u18-f12",
      "fact": {
        "tr": "Denge bağıntısına yalnızca gazlar ve suda çözünmüş (aq) maddeler yazılır; saf katı ve sıvılar yazılmaz.",
        "en": "Only gases and substances dissolved in water (aq) are written in the equilibrium expression; pure solids and liquids are not written.",
        "de": "In den Gleichgewichtsausdruck werden nur Gase und in Wasser gelöste Stoffe (aq) aufgenommen; reine Feststoffe und Flüssigkeiten werden nicht geschrieben.",
        "fr": "Seuls les gaz et les substances dissoutes dans l'eau (aq) figurent dans l'expression d'équilibre ; les solides et liquides purs n'y sont pas écrits.",
        "ru": "В выражение константы равновесия записываются только газы и вещества, растворённые в воде (водн.); чистые твёрдые вещества и жидкости не записываются.",
        "ar": "لا يُكتب في تعبير الاتزان إلا الغازات والمواد المذابة في الماء (aq)؛ أما المواد الصلبة والسوائل النقية فلا تُكتب.",
        "zh": "平衡表达式中只写气体和溶于水的物质（aq）；纯固体和纯液体不写入。",
        "ku": "Di têkiliya hevsengiyê de tenê gaz û maddeyên di avê de helandî (aq) tên nivîsandin; hişk û şilên saf nayên nivîsandin."
      },
      "trap": {
        "tr": "Saf katıların derişimleri denge kesrinde paydada yer alır.",
        "en": "The concentrations of pure solids appear in the denominator of the equilibrium expression.",
        "de": "Die Konzentrationen reiner Feststoffe stehen im Nenner des Gleichgewichtsausdrucks.",
        "fr": "Les concentrations des solides purs figurent au dénominateur de l'expression d'équilibre.",
        "ru": "Концентрации чистых твёрдых веществ входят в знаменатель выражения константы равновесия.",
        "ar": "تظهر تراكيز المواد الصلبة النقية في مقام تعبير الاتزان.",
        "zh": "纯固体的浓度出现在平衡表达式的分母中。",
        "ku": "Tîrbûna hişkên saf di kesra hevsengiyê de li jêrê (di parvekerê de) cih digire."
      }
    },
    {
      "id": "u18-f13",
      "fact": {
        "tr": "Tepkime ters çevrilirse yeni denge sabiti Kc_yeni = 1 / Kc olur.",
        "en": "If the reaction is reversed, the new equilibrium constant is Kc_new = 1 / Kc.",
        "de": "Wird die Reaktion umgekehrt geschrieben, ist die neue Gleichgewichtskonstante Kc_new = 1 / Kc.",
        "fr": "Si la réaction est inversée, la nouvelle constante d'équilibre est Kc_new = 1 / Kc.",
        "ru": "Если реакцию записать в обратном направлении, новая константа равновесия Kc_new = 1/Kc.",
        "ar": "إذا تم عكس التفاعل، فإن ثابت التوازن الجديد هو Kc_new = 1 / Kc.",
        "zh": "如果反应逆转，则新的平衡常数为 Kc_new = 1 / Kc。",
        "ku": "Ger reaksiyon berevajî were nivîsandin, sabîta hevsengiyê ya nû Kc_new = 1 / Kc ye."
      },
      "trap": {
        "tr": "Tepkime ters çevrildiğinde Kc nin işareti eksi olur.",
        "en": "When the reaction is reversed, the sign of Kc becomes negative.",
        "de": "Wenn die Reaktion umgekehrt wird, wird das Vorzeichen von Kc negativ.",
        "fr": "Lorsque la réaction s’inverse, le signe de Kc devient négatif.",
        "ru": "При обратном ходе реакции знак Кс становится отрицательным.",
        "ar": "وعندما يتم عكس التفاعل تصبح إشارة Kc سالبة.",
        "zh": "当反应逆转时，Kc 的符号变为负值。",
        "ku": "Dema ku reaksiyonê berevajî dibe, nîşana Kc neyînî dibe."
      }
    },
    {
      "id": "u18-f14",
      "fact": {
        "tr": "Tepkime n katsayısıyla çarpılırsa yeni denge sabiti Kc_yeni = (Kc)^n olur.",
        "en": "If the reaction is multiplied by the coefficient n, the new equilibrium constant becomes Kc_new = (Kc)^n.",
        "de": "Wenn die Reaktion mit dem Koeffizienten n multipliziert wird, wird die neue Gleichgewichtskonstante zu Kc_new = (Kc)^n.",
        "fr": "Si la réaction est multipliée par le coefficient n, la nouvelle constante d'équilibre devient Kc_new = (Kc)^n.",
        "ru": "Если реакция умножается на коэффициент n, новая константа равновесия становится Kc_new = (Kc)^n.",
        "ar": "إذا تم ضرب التفاعل في المعامل n، يصبح ثابت التوازن الجديد Kc_new = (Kc)^n.",
        "zh": "如果反应乘以系数n，则新的平衡常数变为Kc_new = (Kc)^n。",
        "ku": "Ger reaksiyon bi hejmara n were carkirin, sabîta hevsengiyê ya nû dibe Kc_new = (Kc)^n."
      },
      "trap": {
        "tr": "Tepkime 2 ile çarpılırsa Kc de 2 ile çarpılır.",
        "en": "If the reaction is multiplied by 2, Kc is also multiplied by 2.",
        "de": "Wenn die Reaktion mit 2 multipliziert wird, wird auch Kc mit 2 multipliziert.",
        "fr": "Si la réaction est multipliée par 2, Kc est également multiplié par 2.",
        "ru": "Если реакцию умножить на 2, Kc также умножится на 2.",
        "ar": "إذا تم ضرب التفاعل بـ 2، يتم ضرب Kc أيضًا بـ 2.",
        "zh": "如果反应乘以 2，则 Kc 也乘以 2。",
        "ku": "Ger reaksiyon bi 2 were carkirin, Kc jî bi 2 tê carkirin."
      }
    },
    {
      "id": "u18-f15",
      "fact": {
        "tr": "Tepkimeler toplanırsa denge sabitleri birbiriyle çarpılır (Kc_net = Kc1 * Kc2).",
        "en": "If the reactions are summed, the equilibrium constants are multiplied together (Kc_net = Kc1 * Kc2).",
        "de": "Wenn die Reaktionen summiert werden, werden die Gleichgewichtskonstanten miteinander multipliziert (Kc_net = Kc1 * Kc2).",
        "fr": "Si les réactions sont additionnées, les constantes d'équilibre sont multipliées entre elles (Kc_net = Kc1 * Kc2).",
        "ru": "Если реакции суммируются, константы равновесия перемножаются (Kc_net = Kc1 * Kc2).",
        "ar": "إذا تم جمع التفاعلات، يتم ضرب ثوابت التوازن معًا (Kc_net = Kc1 * Kc2).",
        "zh": "如果将反应相加，则平衡常数相乘 (Kc_net = Kc1 * Kc2)。",
        "ku": "Ger reaksiyon bên berhevkirin, sabîtên hevsengiyê bi hev re tên carkirin (Kc_net = Kc1 * Kc2)."
      },
      "trap": {
        "tr": "Tepkimeler toplandığında denge sabitleri de birbiriyle toplanır.",
        "en": "When reactions are added together, the equilibrium constants are also added together.",
        "de": "Bei der Addition von Reaktionen addieren sich auch die Gleichgewichtskonstanten.",
        "fr": "Lorsque les réactions sont additionnées, les constantes d’équilibre sont également additionnées.",
        "ru": "При сложении реакций константы равновесия также складываются.",
        "ar": "عند إضافة التفاعلات معًا، يتم أيضًا إضافة ثوابت التوازن معًا.",
        "zh": "当反应加在一起时，平衡常数也加在一起。",
        "ku": "Dema ku reaksîyon li hev tên zêdekirin, sabitên hevsengiyê jî li hev tên zêdekirin."
      }
    },
    {
      "id": "u18-f16",
      "fact": {
        "tr": "Minimum enerji eğilimi ısının olduğu tarafa, maksimum düzensizlik eğilimi gaz mol sayısının çok olduğu tarafa doğrudur.",
        "en": "The minimum energy tendency is towards the side where there is heat, the maximum disorder tendency is towards the side where the number of moles of gas is high.",
        "de": "Die minimale Energietendenz geht zu der Seite, wo Wärme vorhanden ist, die maximale Unordnungstendenz geht zu der Seite, wo die Anzahl der Gasmole hoch ist.",
        "fr": "La tendance minimale de l'énergie est vers le côté où il y a de la chaleur, la tendance maximale du désordre est vers le côté où le nombre de moles de gaz est élevé.",
        "ru": "Минимальная тенденция энергии наблюдается в сторону тепла, максимальная тенденция беспорядка — в сторону, где количество молей газа велико.",
        "ar": "الحد الأدنى لميل الطاقة يكون نحو الجانب الذي توجد فيه الحرارة، والحد الأقصى لميل الاضطراب يكون نحو الجانب الذي يكون فيه عدد مولات الغاز مرتفعًا.",
        "zh": "最低能量趋势指向写有热量的一侧，最大无序趋势指向气体摩尔数较多的一侧。",
        "ku": "Meyla enerjiya herî kêm ber bi aliyê ku germ lê hatiye nivîsandin e; meyla bêrêziya herî zêde ber bi aliyê ku hejmara molên gazê lê zêde ye."
      },
      "trap": {
        "tr": "Denge daima sadece minimum enerji yönünde kurulur.",
        "en": "Equilibrium is always established only in the direction of minimum energy.",
        "de": "Das Gleichgewicht stellt sich immer nur in Richtung minimaler Energie ein.",
        "fr": "L'équilibre ne s'établit toujours que dans le sens de l'énergie minimale.",
        "ru": "Равновесие всегда устанавливается только в направлении минимума энергии.",
        "ar": "يتم إنشاء التوازن دائمًا فقط في اتجاه الحد الأدنى من الطاقة.",
        "zh": "平衡总是仅在最小能量的方向上建立。",
        "ku": "Hevsengî her dem tenê di riya enerjiya hindiktirîn de tê saz kirin."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u18-c01",
      "conceptA": {
        "tr": "Kc",
        "en": "Kc",
        "de": "Kc",
        "fr": "Kc",
        "ru": "Kc",
        "ar": "Kc",
        "zh": "Kc",
        "ku": "Kc"
      },
      "conceptB": {
        "tr": "Kp",
        "en": "Kp",
        "de": "Kp",
        "fr": "Kp",
        "ru": "Kp",
        "ar": "Kp",
        "zh": "Kp",
        "ku": "Kp"
      },
      "distinction": {
        "tr": "Kc derişimler cinsinden denge sabiti, Kp kısmi basınçlar cinsinden denge sabitidir; Kp = Kc(RT)^Δn dir.",
        "en": "Kc is the equilibrium constant in terms of concentrations, Kp is the equilibrium constant in terms of partial pressures; Kp = Kc(RT)^Δn.",
        "de": "Kc ist die Gleichgewichtskonstante in Bezug auf Konzentrationen, Kp ist die Gleichgewichtskonstante in Bezug auf Partialdrücke; Kp = Kc(RT)^Δn.",
        "fr": "Kc est la constante d'équilibre en termes de concentrations, Kp est la constante d'équilibre en termes de pressions partielles ; Kp = Kc(RT)^Δn.",
        "ru": "Кс – константа равновесия по концентрациям, Кр – константа равновесия по парциальным давлениям; Кр = Кс(RT)^Δn.",
        "ar": "Kc هو ثابت التوازن من حيث التركيزات، Kp هو ثابت التوازن من حيث الضغوط الجزئية؛ Kp = Kc(RT)^Δn.",
        "zh": "Kc 是浓度平衡常数，Kp 是分压平衡常数； Kp = Kc(RT)^Δn。",
        "ku": "Kc di warê kêşeyan de sabita hevsengiyê ye, Kp di warê zextên qismî de domdariya hevsengiyê ye; Kp = Kc(RT)^Δn."
      }
    },
    {
      "id": "u18-c02",
      "conceptA": {
        "tr": "Dengeye Sıcaklığın Etkisi",
        "en": "Effect of Temperature on Equilibrium",
        "de": "Einfluss der Temperatur auf das Gleichgewicht",
        "fr": "Effet de la température sur l'équilibre",
        "ru": "Влияние температуры на равновесие",
        "ar": "تأثير درجة الحرارة على التوازن",
        "zh": "温度对平衡的影响",
        "ku": "Bandora Germahiyê li ser Hevsengiyê"
      },
      "conceptB": {
        "tr": "Dengeye Basıncın Etkisi",
        "en": "Effect of Pressure on Equilibrium",
        "de": "Einfluss des Drucks auf das Gleichgewicht",
        "fr": "Effet de la pression sur l'équilibre",
        "ru": "Влияние давления на равновесие",
        "ar": "تأثير الضغط على التوازن",
        "zh": "压力对平衡的影响",
        "ku": "Bandora Zextê li ser Hevsengiyê"
      },
      "distinction": {
        "tr": "Dengeye sıcaklığın etkisi denge sabiti Kc'nin sayısal değerini değiştirir; dengeye basıncın etkisi ise gaz mol sayısına göre denge yönünü kaydırır ancak Kc'nin değerini değiştirmez.",
        "en": "The effect of temperature on equilibrium changes the numerical value of the equilibrium constant Kc; the effect of pressure on equilibrium shifts the equilibrium direction according to gas moles but does not change the value of Kc.",
        "de": "Der Einfluss der Temperatur auf das Gleichgewicht verändert den numerischen Wert der Gleichgewichtskonstante Kc; der Einfluss des Drucks verschiebt die Gleichgewichtslage entsprechend den Gasmolen, verändert jedoch nicht den Wert von Kc.",
        "fr": "L'effet de la température sur l'équilibre modifie la valeur numérique de la constante d'équilibre Kc ; l'effet de la pression déplace l'équilibre selon le nombre de moles de gaz mais ne modifie pas la valeur de Kc.",
        "ru": "Влияние температуры на равновесие изменяет численное значение константы равновесия Kc; влияние давления смещает положение равновесия в зависимости от числа молей газа, но не изменяет значение Kc.",
        "ar": "تأثير درجة الحرارة على التوازن يغير القيمة العددية لثابت التوازن Kc؛ بينما تأثير الضغط يزيح اتجاه التوازن وفقاً لعدد مولات الغاز ولكنه لا يغير قيمة Kc.",
        "zh": "温度对平衡的影响会改变平衡常数 Kc 的数值；而压力对平衡的影响根据气体摩尔数移动平衡方向，但不会改变 Kc 的数值。",
        "ku": "Bandora germahiyê ya li ser hevsengiyê nirxa hejmarî ya sabita hevsengiyê Kc diguherîne; bandora zextê li gorî hejmara molên gazê arasteya hevsengiyê diguherîne lê nirxa Kc naguherîne."
      }
    },
    {
      "id": "u18-c03",
      "conceptA": {
        "tr": "Derişimler Cinsinden Denge (Kc)",
        "en": "Equilibrium in Terms of Concentrations (Kc)",
        "de": "Gleichgewicht in Bezug auf Konzentrationen (Kc)",
        "fr": "Équilibre en termes de concentrations (Kc)",
        "ru": "Равновесие по концентрациям (Kc)",
        "ar": "التوازن من حيث التركيزات (Kc)",
        "zh": "浓度平衡 (Kc)",
        "ku": "Hevsengiya di warê konsantrebûnê de (Kc)"
      },
      "conceptB": {
        "tr": "Kısmi Basınçlar Cinsinden Denge (Kp)",
        "en": "Equilibrium in terms of partial pressures (Kp)",
        "de": "Gleichgewicht in Bezug auf Partialdrücke (Kp)",
        "fr": "Equilibre en termes de pressions partielles (Kp)",
        "ru": "Равновесие по парциальным давлениям (Kp)",
        "ar": "التوازن من حيث الضغوط الجزئية (Kp)",
        "zh": "分压平衡 (Kp)",
        "ku": "Hevsengiya di warê zextên qismî de (Kp)"
      },
      "distinction": {
        "tr": "Kc molar derişimlerle gaz ve sulu çözeltileri içerir; Kp yalnızca gaz fazını içerir ve Kp = Kc(RT)^Δn ile bulunur.",
        "en": "Kc uses molar concentrations of gases and aqueous species; Kp includes only the gas phase and is found from Kp = Kc(RT)^Δn.",
        "de": "Kc verwendet molare Konzentrationen von Gasen und gelösten (aq) Stoffen; Kp umfasst nur die Gasphase und ergibt sich aus Kp = Kc(RT)^Δn.",
        "fr": "Kc utilise les concentrations molaires des gaz et des espèces aqueuses ; Kp ne concerne que la phase gazeuse et s'obtient par Kp = Kc(RT)^Δn.",
        "ru": "Kc выражается через молярные концентрации газов и растворённых веществ; Kp относится только к газовой фазе и находится по формуле Kp = Kc(RT)^Δn.",
        "ar": "يستخدم Kc التراكيز المولية للغازات والمواد المائية؛ أما Kp فيشمل الطور الغازي فقط ويُحسب من Kp = Kc(RT)^Δn.",
        "zh": "Kc使用气体和水溶液物质的物质的量浓度；Kp只涉及气相，由Kp = Kc(RT)^Δn求得。",
        "ku": "Kc bi tîrbûnên molar ên gaz û maddeyên avî tê nivîsandin; Kp tenê qonaxa gazê dihewîne û bi Kp = Kc(RT)^Δn tê dîtin."
      }
    },
    {
      "id": "u18-c04",
      "conceptA": {
        "tr": "Denge Kesri (Qc)",
        "en": "Reaction Quotient (Qc)",
        "de": "Reaktionsquotient (Qc)",
        "fr": "Quotient de réaction (Qc)",
        "ru": "Коэффициент реакции (Qc)",
        "ar": "حاصل التفاعل (Qc)",
        "zh": "反应商 (Qc)",
        "ku": "Kesra Hevsengiyê (Qc)"
      },
      "conceptB": {
        "tr": "Denge Sabiti (Kc)",
        "en": "Equilibrium Constant (Kc)",
        "de": "Gleichgewichtskonstante (Kc)",
        "fr": "Constante d'équilibre (Kc)",
        "ru": "Константа равновесия (Кс)",
        "ar": "ثابت التوازن (Kc)",
        "zh": "平衡常数 (Kc)",
        "ku": "Berdewamiya Hevsengiyê (Kc)"
      },
      "distinction": {
        "tr": "Qc herhangi bir andaki derişimler oranıdır; Qc = Kc olduğunda sistem dengededir, Qc < Kc ise sistem ürünlere kayar.",
        "en": "Qc is the ratio of concentrations at any given moment; When Qc = Kc the system is in equilibrium, if Qc < Kc the system shifts to products.",
        "de": "Qc ist das Verhältnis der Konzentrationen zu einem bestimmten Zeitpunkt; Wenn Qc = Kc, befindet sich das System im Gleichgewicht, wenn Qc < Kc, verschiebt sich das System zu Produkten.",
        "fr": "Qc est le rapport des concentrations à un instant quelconque ; si Qc = Kc le système est à l'équilibre, si Qc < Kc il évolue vers les produits.",
        "ru": "Qc — отношение концентраций в любой данный момент; При Qc = Kc система находится в равновесии, если Qc < Kc, система переходит к продуктам.",
        "ar": "حاصل التفاعل (Qc) هو نسبة التراكيز في أي لحظة معينة؛ عندما تكون Qc = Kc يكون النظام في حالة توازن، وإذا كانت Qc < Kc يتجه التوازن نحو النواتج.",
        "zh": "Qc是任意时刻的浓度比；当Qc = Kc时体系处于平衡，若Qc < Kc则平衡向产物方向移动。",
        "ku": "Qc rêjeya konsantreyan di her kêliyê de ye; Dema Qc = Kc pergal di hevsengiyê de be, ger Qc < Kc pergal ber bi hilberan ve diçe."
      }
    },
    {
      "id": "u18-c05",
      "conceptA": {
        "tr": "Homojen Denge",
        "en": "Homogeneous Equilibrium",
        "de": "Homogenes Gleichgewicht",
        "fr": "Equilibre homogène",
        "ru": "Гомогенное равновесие",
        "ar": "توازن متجانس",
        "zh": "均相平衡",
        "ku": "Hevsengiya Homojen"
      },
      "conceptB": {
        "tr": "Heterojen Denge",
        "en": "Heterogeneous Equilibrium",
        "de": "Heterogenes Gleichgewicht",
        "fr": "Équilibre hétérogène",
        "ru": "Гетерогенное равновесие",
        "ar": "التوازن غير المتجانس",
        "zh": "非均相平衡",
        "ku": "Hevsengiya Heterojen"
      },
      "distinction": {
        "tr": "Homojen dengede tüm reaktif ve ürünler aynı fiziksel fazdadır; heterojen dengede katı, sıvı veya gaz farklı fazlar bulunur.",
        "en": "In homogeneous equilibrium, all reactants and products are in the same physical phase; In heterogeneous equilibrium, there are different phases, solid, liquid or gas.",
        "de": "Im homogenen Gleichgewicht befinden sich alle Reaktanten und Produkte in derselben physikalischen Phase; Im heterogenen Gleichgewicht gibt es verschiedene Phasen, fest, flüssig oder gasförmig.",
        "fr": "En équilibre homogène, tous les réactifs et produits sont dans la même phase physique ; En équilibre hétérogène, il existe différentes phases, solide, liquide ou gazeuse.",
        "ru": "В гомогенном равновесии все реагенты и продукты находятся в одной физической фазе; В гетерогенном равновесии существуют разные фазы: твердая, жидкая или газообразная.",
        "ar": "في حالة التوازن المتجانس، تكون جميع المواد المتفاعلة والمنتجات في نفس المرحلة الفيزيائية؛ في التوازن غير المتجانس، هناك أطوار مختلفة، صلبة أو سائلة أو غازية.",
        "zh": "在均相平衡中，所有反应物和产物处于相同的物理相；在非均质平衡中，存在不同的相，固体、液体或气体。",
        "ku": "Di hevsengiya homojen de, hemî reaktant û hilber di heman qonaxa fizîkî de ne; Di hevsengiya heterojen de, qonaxên cuda hene, hişk, şil an gaz."
      }
    },
    {
      "id": "u18-c06",
      "conceptA": {
        "tr": "Sıcaklığın Kc'ye Etkisi",
        "en": "Effect of Temperature on Kc",
        "de": "Einfluss der Temperatur auf Kc",
        "fr": "Effet de la température sur Kc",
        "ru": "Влияние температуры на Kc",
        "ar": "تأثير درجة الحرارة على Kc",
        "zh": "温度对 Kc 的影响",
        "ku": "Bandora Germahiya li ser Kc"
      },
      "conceptB": {
        "tr": "Katalizörün Dengeye Etkisi",
        "en": "Effect of Catalyst on Equilibrium",
        "de": "Wirkung des Katalysators auf das Gleichgewicht",
        "fr": "Effet du catalyseur sur l'équilibre",
        "ru": "Влияние катализатора на равновесие",
        "ar": "تأثير المحفز على التوازن",
        "zh": "催化剂对平衡的影响",
        "ku": "Bandora Katalîzatorê li ser Hevsengiyê"
      },
      "distinction": {
        "tr": "Denge sabitinin (Kc) sayısal değerini değiştiren tek etken sıcaklıktır; katalizör ise Kc yi değiştirmez, yalnızca dengeye ulaşma süresini kısaltır.",
        "en": "Temperature is the only factor that changes the numerical value of the equilibrium constant (Kc); a catalyst does not change Kc, it only shortens the time needed to reach equilibrium.",
        "de": "Die Temperatur ist der einzige Faktor, der den Zahlenwert der Gleichgewichtskonstante (Kc) ändert; ein Katalysator ändert Kc nicht, er verkürzt nur die Zeit bis zum Gleichgewicht.",
        "fr": "La température est le seul facteur qui modifie la valeur numérique de la constante d'équilibre (Kc) ; un catalyseur ne modifie pas Kc, il réduit seulement le temps nécessaire pour atteindre l'équilibre.",
        "ru": "Температура — единственный фактор, изменяющий численное значение константы равновесия (Kc); катализатор не изменяет Kc, он лишь сокращает время достижения равновесия.",
        "ar": "درجة الحرارة هي العامل الوحيد الذي يغيّر القيمة العددية لثابت الاتزان (Kc)؛ أما المحفز فلا يغيّر Kc بل يقلّل فقط زمن الوصول إلى الاتزان.",
        "zh": "温度是改变平衡常数（Kc）数值的唯一因素；催化剂不改变Kc，只缩短达到平衡所需的时间。",
        "ku": "Germahî tenê faktor e ku nirxa hejmarî ya sabîta hevsengiyê (Kc) diguherîne; katalîzator Kc naguherîne, tenê dema gihîştina hevsengiyê kurt dike."
      }
    },
    {
      "id": "u18-c07",
      "conceptA": {
        "tr": "Hacim Küçülmesi Etkisi",
        "en": "Volume Shrinkage Effect",
        "de": "Volumenschrumpfungseffekt",
        "fr": "Effet de réduction du volume",
        "ru": "Эффект уменьшения объема",
        "ar": "تأثير انكماش الحجم",
        "zh": "体积收缩效应",
        "ku": "Bandora Kêmbûna Qebareyê"
      },
      "conceptB": {
        "tr": "Soy Gaz Ekleme Etkisi",
        "en": "Effect of Adding Noble Gas",
        "de": "Auswirkung der Zugabe von Edelgas",
        "fr": "Effet de l'ajout de gaz noble",
        "ru": "Эффект от добавления благородного газа",
        "ar": "تأثير إضافة الغاز النبيل",
        "zh": "添加稀有气体的效果",
        "ku": "Bandora Zêdekirina Gaza Asîl"
      },
      "distinction": {
        "tr": "Pistonla hacim küçültülünce sistem gaz molü az olan tarafa kayar; sabit hacimde soy gaz eklenmesi kısmi basınçları ve dengeyi değiştirmez.",
        "en": "When the volume is reduced with a piston, the system shifts to the side with fewer moles of gas; adding a noble gas at constant volume does not change the partial pressures or the equilibrium.",
        "de": "Wird das Volumen mit einem Kolben verringert, verschiebt sich das System zur Seite mit weniger Gasmolen; die Zugabe eines Edelgases bei konstantem Volumen ändert weder die Partialdrücke noch das Gleichgewicht.",
        "fr": "Lorsque le volume est réduit à l'aide d'un piston, le système se déplace vers le côté comportant le moins de moles de gaz ; l'ajout d'un gaz noble à volume constant ne modifie ni les pressions partielles ni l'équilibre.",
        "ru": "При уменьшении объёма поршнем система смещается в сторону меньшего числа молей газа; добавление благородного газа при постоянном объёме не изменяет парциальные давления и равновесие.",
        "ar": "عند تقليل الحجم بالمكبس يتجه النظام نحو الجانب الأقل في عدد مولات الغاز؛ أما إضافة غاز نبيل عند حجم ثابت فلا تغيّر الضغوط الجزئية ولا الاتزان.",
        "zh": "用活塞减小体积时，体系向气体摩尔数较少的一侧移动；在恒容条件下加入稀有气体不改变各分压，也不使平衡移动。",
        "ku": "Dema ku qebare bi pistonê tê kêmkirin, pergal ber bi aliyê ku molên gazê kêmtir in ve diçe; zêdekirina gaza asîl di qebareya sabît de zextên qismî û hevsengiyê naguherîne."
      }
    },
    {
      "id": "u18-c08",
      "conceptA": {
        "tr": "Dinamik Denge",
        "en": "Dynamic Equilibrium",
        "de": "Dynamisches Gleichgewicht",
        "fr": "Equilibre dynamique",
        "ru": "Динамическое равновесие",
        "ar": "التوازن الديناميكي",
        "zh": "动态平衡",
        "ku": "Hevsengiya Dînamîk"
      },
      "conceptB": {
        "tr": "Statik Denge",
        "en": "Static Equilibrium",
        "de": "Statisches Gleichgewicht",
        "fr": "Équilibre statique",
        "ru": "Статическое равновесие",
        "ar": "التوازن الساكن",
        "zh": "静态平衡",
        "ku": "Hevsengiya Statîk"
      },
      "distinction": {
        "tr": "Kimyasal denge dinamiktir, ileri ve geri tepkime eşit hızda sürekli devam eder; statik dengede ise olay tamamen durmuştur.",
        "en": "Chemical equilibrium is dynamic; forward and reverse reactions continue at equal speed; In static equilibrium, the event has completely stopped.",
        "de": "Das chemische Gleichgewicht ist dynamisch; Vorwärts- und Rückwärtsreaktion laufen mit gleicher Geschwindigkeit ab; Im statischen Gleichgewicht ist das Ereignis vollständig zum Stillstand gekommen.",
        "fr": "L'équilibre chimique est dynamique ; les réactions avant et arrière se poursuivent à la même vitesse ; En équilibre statique, l’événement s’est complètement arrêté.",
        "ru": "Химическое равновесие динамично; прямая и обратная реакции продолжаются с одинаковой скоростью; В статическом равновесии событие полностью прекратилось.",
        "ar": "التوازن الكيميائي ديناميكي. وتستمر التفاعلات الأمامية والخلفية بنفس السرعة؛ في حالة التوازن الساكن، يتوقف الحدث تمامًا.",
        "zh": "化学平衡是动态的；正向和反向反应以相同的速度继续进行；在静态平衡中，事件完全停止。",
        "ku": "Hevsengiya kîmyewî dînamîk e; reaksiyonên pêş û paş ve bi leza wekhev berdewam dikin; Di hevsengiya statîk de, bûyer bi tevahî rawestiyaye."
      }
    }
  ],
  "sequences": [
    {
      "id": "u18-s01",
      "title": {
        "tr": "Le Chatelier Etkisi Analiz Adımları",
        "en": "Le Chatelier Effect Analysis Steps",
        "de": "Schritte zur Le Chatelier-Effektanalyse",
        "fr": "Étapes d’analyse de l’effet Le Chatelier",
        "ru": "Этапы анализа эффекта Ле Шателье",
        "ar": "خطوات تحليل تأثير لو شاتيليه",
        "zh": "勒夏特列效应分析步骤",
        "ku": "Le Chatelier Pêngavên Analîza Bandora"
      },
      "steps": [
        {
          "tr": "Yapılan dış etkiyi belirle (sıcaklık, derişim, hacim)",
          "en": "Determine the external impact made (temperature, concentration, volume)",
          "de": "Bestimmen Sie die äußere Einwirkung (Temperatur, Konzentration, Volumen)",
          "fr": "Déterminer l'impact externe effectué (température, concentration, volume)",
          "ru": "Определить произведенное внешнее воздействие (температура, концентрация, объем)",
          "ar": "تحديد التأثير الخارجي المحدث (درجة الحرارة، التركيز، الحجم)",
          "zh": "确定所造成的外部影响（温度、浓度、体积）",
          "ku": "Bandora derve diyar bike (germahî, tîrbûn, qebare)"
        },
        {
          "tr": "Sistemin etkiyi azaltıcı yönünü bul",
          "en": "Find the direction in which the system counteracts the change",
          "de": "Bestimme die Richtung, in der das System der Störung entgegenwirkt",
          "fr": "Trouver le sens dans lequel le système s'oppose à la perturbation",
          "ru": "Найдите направление, в котором система ослабляет воздействие",
          "ar": "حدّد الاتجاه الذي يقلّل فيه النظام أثر التغيير",
          "zh": "找出体系削弱该影响的方向",
          "ku": "Aliyê ku pergal bandorê kêm dike bibîne"
        },
        {
          "tr": "Tepkimenin kaydığı yönü belirle (ürünler veya girenler)",
          "en": "Determine the direction in which the reaction shifts (products or reactants)",
          "de": "Bestimmen Sie die Richtung, in die sich die Reaktion verschiebt (Produkte oder Reaktanten).",
          "fr": "Déterminer la direction dans laquelle la réaction se déplace (produits ou réactifs)",
          "ru": "Определить направление, в котором смещается реакция (продукты или реагенты)",
          "ar": "تحديد الاتجاه الذي يتحول فيه التفاعل (المنتجات أو المواد المتفاعلة)",
          "zh": "确定反应移动的方向（产物或反应物）",
          "ku": "Arastiya ku reaksiyonê tê de diguhere (hilber an reaktant) diyar bikin"
        },
        {
          "tr": "Kc nin değişip değişmediğini kontrol et (sadece T ile)",
          "en": "Check if Kc has changed (only with T)",
          "de": "Prüfen, ob sich Kc geändert hat (nur bei T)",
          "fr": "Vérifier si Kc a changé (uniquement avec T)",
          "ru": "Проверьте, изменился ли Кс (только с Т)",
          "ar": "تحقق مما إذا كان Kc قد تغير (فقط مع T)",
          "zh": "检查 Kc 是否已更改（仅适用于 T）",
          "ku": "Kontrol bikin ka Kc hatiye guhertin (tenê bi T)"
        }
      ]
    },
    {
      "id": "u18-s02",
      "title": {
        "tr": "Denge Sabiti (Kc) Hesabı",
        "en": "Equilibrium Constant (Kc) Calculation",
        "de": "Berechnung der Gleichgewichtskonstante (Kc).",
        "fr": "Calcul de la constante d'équilibre (Kc)",
        "ru": "Расчет константы равновесия (Kc)",
        "ar": "حساب ثابت التوازن (Kc).",
        "zh": "平衡常数 (Kc) 计算",
        "ku": "Hesabkirina Berdewamiya Hevsengiyê (Kc)."
      },
      "steps": [
        {
          "tr": "Başlangıç mol sayıları ve kap hacmi yazılır",
          "en": "Initial mole numbers and container volume are written.",
          "de": "Anfängliche Molzahlen und Behältervolumen werden angegeben.",
          "fr": "Les nombres de moles initiaux et le volume du récipient sont écrits",
          "ru": "Записываются начальные числа молей и объем контейнера.",
          "ar": "تُكتب أعداد المولات الابتدائية وحجم الوعاء",
          "zh": "写下初始摩尔数和容器体积。",
          "ku": "Hejmarên molan ên destpêkê û qebareya firaxê tên nivîsandin"
        },
        {
          "tr": "Tepkime katsayılarına göre değişim satırı doldurulur",
          "en": "The change row is filled in according to the reaction coefficients",
          "de": "Die Änderungszeile wird gemäß den Reaktionskoeffizienten ausgefüllt",
          "fr": "La ligne de variation est remplie selon les coefficients de la réaction",
          "ru": "Строка изменения заполняется в соответствии с коэффициентами реакции",
          "ar": "يُملأ سطر التغيّر وفق معاملات التفاعل",
          "zh": "根据反应系数填写变化量一行",
          "ku": "Rêza guherînê li gorî hevberên reaksiyonê tê dagirtin"
        },
        {
          "tr": "Denge anındaki mol sayıları hacme bölünerek derişimler bulunur",
          "en": "Concentrations are found by dividing the number of moles at equilibrium by the volume.",
          "de": "Konzentrationen werden ermittelt, indem die Anzahl der Mol im Gleichgewicht durch das Volumen dividiert wird.",
          "fr": "Les concentrations sont obtenues en divisant le nombre de moles à l'équilibre par le volume.",
          "ru": "Концентрации находятся путем деления количества молей, находящихся в равновесии, на объем.",
          "ar": "تُحسب التراكيز بقسمة أعداد المولات عند الاتزان على الحجم",
          "zh": "浓度是通过平衡时的摩尔数除以体积得出的。",
          "ku": "Tîrbûn bi parvekirina hejmarên molan ên di hevsengiyê de li ser qebareyê tên dîtin"
        },
        {
          "tr": "Kc = [Ürünler] / [Girenler] bağıntısında yerine konur",
          "en": "They are substituted into Kc = [Products] / [Reactants]",
          "de": "Sie werden in Kc = [Produkte] / [Edukte] eingesetzt",
          "fr": "On les remplace dans Kc = [Produits] / [Réactifs]",
          "ru": "Их подставляют в выражение Kc = [Продукты] / [Реагенты]",
          "ar": "تُعوَّض في العلاقة Kc = [النواتج] / [المتفاعلات]",
          "zh": "代入Kc = [产物] / [反应物]",
          "ku": "Di têkiliya Kc = [Hilber] / [Reaktant] de tên bicihkirin"
        }
      ]
    },
    {
      "id": "u18-s03",
      "title": {
        "tr": "Le Chatelier Sıcaklık Etkisi",
        "en": "Le Chatelier Temperature Effect",
        "de": "Le Chatelier Temperatureffekt",
        "fr": "Effet de la température selon Le Chatelier",
        "ru": "Температурный эффект Ле Шателье",
        "ar": "تأثير درجة الحرارة لو شاتيليه",
        "zh": "勒夏特列原理：温度的影响",
        "ku": "Bandora germahiya Le Chatelier"
      },
      "steps": [
        {
          "tr": "Tepkimenin endotermik veya ekzotermik olduğu belirlenir",
          "en": "Determine whether the reaction is endothermic or exothermic",
          "de": "Bestimmen Sie, ob die Reaktion endotherm oder exotherm ist",
          "fr": "Déterminer si la réaction est endothermique ou exothermique",
          "ru": "Определите, является ли реакция эндотермической или экзотермической.",
          "ar": "تحديد ما إذا كان التفاعل ماصًا للحرارة أم طاردًا للحرارة",
          "zh": "确定反应是吸热反应还是放热反应",
          "ku": "Diyar bikin ka reaksîyon endotermîk e an exotermîk e"
        },
        {
          "tr": "Isı, ekzotermik tepkimede ürünler, endotermik tepkimede girenler tarafına yazılır",
          "en": "Heat is written on the product side for an exothermic reaction and on the reactant side for an endothermic reaction",
          "de": "Wärme wird bei einer exothermen Reaktion auf der Produktseite, bei einer endothermen Reaktion auf der Eduktseite geschrieben",
          "fr": "La chaleur est écrite du côté des produits pour une réaction exothermique et du côté des réactifs pour une réaction endothermique",
          "ru": "Теплоту записывают в сторону продуктов для экзотермической реакции и в сторону реагентов для эндотермической",
          "ar": "تُكتب الحرارة في جهة النواتج في التفاعل الطارد للحرارة، وفي جهة المتفاعلات في التفاعل الماص للحرارة",
          "zh": "放热反应把热量写在产物一侧，吸热反应把热量写在反应物一侧",
          "ku": "Germ di reaksiyona ekzotermîk de li aliyê hilberan, di ya endotermîk de li aliyê reaktantan tê nivîsandin"
        },
        {
          "tr": "Sıcaklık artırıldığında denge, ısının harcandığı (endotermik) yöne kayar",
          "en": "When the temperature is raised, the equilibrium shifts in the direction that consumes heat (the endothermic direction)",
          "de": "Bei Temperaturerhöhung verschiebt sich das Gleichgewicht in die wärmeverbrauchende (endotherme) Richtung",
          "fr": "Quand la température augmente, l'équilibre se déplace dans le sens qui consomme de la chaleur (sens endothermique)",
          "ru": "При повышении температуры равновесие смещается в сторону поглощения теплоты (эндотермическое направление)",
          "ar": "عند رفع درجة الحرارة يتجه الاتزان في الاتجاه الذي يستهلك الحرارة (الاتجاه الماص للحرارة)",
          "zh": "升高温度时，平衡向吸收热量的方向（吸热方向）移动",
          "ku": "Dema ku germahî tê bilindkirin, hevsengî ber bi aliyê ku germ lê tê xerckirin (endotermîk) ve diçe"
        },
        {
          "tr": "Denge ürünlere kaydıysa Kc artar, girenlere kaydıysa Kc azalır",
          "en": "If the equilibrium shifts toward the products Kc increases; if it shifts toward the reactants Kc decreases",
          "de": "Verschiebt sich das Gleichgewicht zu den Produkten, steigt Kc; verschiebt es sich zu den Edukten, sinkt Kc",
          "fr": "Si l'équilibre se déplace vers les produits, Kc augmente ; s'il se déplace vers les réactifs, Kc diminue",
          "ru": "Если равновесие сместилось к продуктам, Kc увеличивается; если к реагентам — Kc уменьшается",
          "ar": "إذا اتجه الاتزان نحو النواتج تزداد Kc، وإذا اتجه نحو المتفاعلات تقل Kc",
          "zh": "若平衡向产物方向移动，Kc增大；若向反应物方向移动，Kc减小",
          "ku": "Ger hevsengî ber bi hilberan ve çûbe Kc zêde dibe; ger ber bi reaktantan ve çûbe Kc kêm dibe"
        }
      ]
    },
    {
      "id": "u18-s04",
      "title": {
        "tr": "Hacim Değişimi ve Basınç Etkisi",
        "en": "Volume Change and Pressure Effect",
        "de": "Volumenänderung und Druckeffekt",
        "fr": "Changement de volume et effet de pression",
        "ru": "Изменение объема и эффект давления",
        "ar": "تغيير الحجم وتأثير الضغط",
        "zh": "体积变化和压力影响",
        "ku": "Guhertina Volume û Bandora Zextê"
      },
      "steps": [
        {
          "tr": "Sabit sıcaklıkta kabın hacmi küçültülür",
          "en": "At constant temperature, the volume of the container is reduced",
          "de": "Bei konstanter Temperatur verringert sich das Volumen des Behälters",
          "fr": "A température constante, le volume du récipient est réduit",
          "ru": "При постоянной температуре объем контейнера уменьшается.",
          "ar": "عند درجة حرارة ثابتة، يقل حجم الحاوية",
          "zh": "在一定温度下，容器的体积减小",
          "ku": "Di germahiya domdar de, qebareya konteynerê kêm dibe"
        },
        {
          "tr": "Tüm gazların kısmi basınçları ve derişimleri aniden artar",
          "en": "Partial pressures and concentrations of all gases increase suddenly",
          "de": "Partialdrücke und Konzentrationen aller Gase steigen schlagartig an",
          "fr": "Les pressions partielles et les concentrations de tous les gaz augmentent soudainement",
          "ru": "Парциальные давления и концентрации всех газов внезапно возрастают.",
          "ar": "تزداد الضغوط الجزئية والتركيزات لجميع الغازات فجأة",
          "zh": "所有气体的分压和浓度突然增加",
          "ku": "Zextên qismî û giraniya hemû gazan ji nişka ve zêde dibin"
        },
        {
          "tr": "Sistem gaz mol sayısının az olduğu tarafa kayar",
          "en": "The system shifts to the side with fewer moles of gas.",
          "de": "Das System verschiebt sich auf die Seite mit weniger Gasmolen.",
          "fr": "Le système se déplace du côté avec moins de moles de gaz.",
          "ru": "Система смещается в сторону с меньшим количеством молей газа.",
          "ar": "ينتقل النظام إلى الجانب الذي يحتوي على عدد أقل من مولات الغاز.",
          "zh": "系统转移到气体摩尔数较少的一侧。",
          "ku": "Pergal diguhezîne aliyê ku kêmtir molên gazê hene."
        },
        {
          "tr": "Yeni dengede gazların derişimleri ilk dengedekinden daha yüksektir",
          "en": "At the new equilibrium, gas concentrations are higher than at the first equilibrium",
          "de": "Im neuen Gleichgewicht sind die Gaskonzentrationen höher als im ersten Gleichgewicht",
          "fr": "Au nouvel équilibre, les concentrations des gaz sont plus élevées qu’au premier équilibre",
          "ru": "В новом равновесии концентрации газов выше, чем в первом равновесии",
          "ar": "في الاتزان الجديد تكون تراكيز الغازات أعلى منها في الاتزان الأول",
          "zh": "在新平衡中，各气体的浓度高于原平衡时",
          "ku": "Di hevsengiya nû de tîrbûna gazan ji ya hevsengiya pêşîn bilindtir e"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u18-twin01",
      "stem": {
        "tr": "N2(g) + 3 H2(g) ⇌ 2 NH3(g)  ΔH = -92 kJ tepkimesi dengedeyken sıcaklık artırılırsa aşağıdakilerden hangisi gerçekleşir?",
        "en": "N2(g) + 3 H2(g) ⇌ 2 NH3(g) ΔH = -92 kJ If the temperature is increased while the reaction is at equilibrium, which of the following will occur?",
        "de": "N2(g) + 3 H2(g) ⇌ 2 NH3(g) ΔH = -92 kJ Wenn die Temperatur erhöht wird, während sich die Reaktion im Gleichgewicht befindet, was passiert dann?",
        "fr": "N2(g) + 3 H2(g) ⇌ 2 NH3(g) ΔH = -92 kJ Si la température augmente alors que la réaction est à l'équilibre, lequel des événements suivants se produira ?",
        "ru": "N2(г) + 3 H2(г) ⇌ 2 NH3(г) ΔH = -92 кДж Если температуру повысить, пока реакция находится в равновесии, что из следующего произойдет?",
        "ar": "N2(g) + 3 H2(g) ⇌ 2 NH3(g) ΔH = -92 kJ إذا زادت درجة الحرارة أثناء التفاعل في حالة الاتزان، أي مما يلي سيحدث؟",
        "zh": "N2(g) + 3 H2(g) ⇌ 2 NH3(g) ΔH = -92 kJ 如果在反应平衡时升高温度，会发生以下哪种情况？",
        "ku": "N2(g) + 3 H2(g) ⇌ 2 NH3(g) ΔH = -92 kJ Ger dema ku reaksiyonê di hevsengiyê de ye germahî zêde bibe, kîjan ji van pêk tê?"
      },
      "options": [
        {
          "tr": "Denge sabiti (Kc) küçülür",
          "en": "The equilibrium constant (Kc) becomes smaller",
          "de": "Die Gleichgewichtskonstante (Kc) wird kleiner",
          "fr": "La constante d'équilibre (Kc) devient plus petite",
          "ru": "Константа равновесия (Kc) становится меньше",
          "ar": "يصبح ثابت التوازن (Kc) أصغر",
          "zh": "平衡常数（Kc）变小",
          "ku": "Berdewama hevsengiyê (Kc) piçûktir dibe"
        },
        {
          "tr": "NH3 gazı derişimi artar",
          "en": "NH3 gas concentration increases",
          "de": "Die NH3-Gaskonzentration steigt",
          "fr": "La concentration de gaz NH3 augmente",
          "ru": "Концентрация газа NH3 увеличивается",
          "ar": "يزداد تركيز غاز NH3",
          "zh": "NH3气体浓度增加",
          "ku": "Giraniya gaza NH3 zêde dibe"
        },
        {
          "tr": "Denge ürünler yönüne kayar",
          "en": "Equilibrium shifts towards products",
          "de": "Das Gleichgewicht verschiebt sich in Richtung Produkte",
          "fr": "L’équilibre se déplace vers les produits",
          "ru": "Равновесие смещается в сторону продуктов",
          "ar": "يتحول التوازن نحو المنتجات",
          "zh": "均衡转向产品",
          "ku": "Hevsengî ber bi hilberan ve diçe"
        },
        {
          "tr": "Toplam gaz mol sayısı azalır",
          "en": "The total number of moles of gas decreases",
          "de": "Die Gesamtzahl der Gasmole nimmt ab",
          "fr": "Le nombre total de moles de gaz diminue",
          "ru": "Общее количество молей газа уменьшается",
          "ar": "يقل العدد الإجمالي لمولات الغاز",
          "zh": "气体总摩尔数减少",
          "ku": "Bi tevahî hejmara molên gazê kêm dibe"
        },
        {
          "tr": "İleri tepkime hızı azalır",
          "en": "The forward reaction rate decreases",
          "de": "Die Vorwärtsreaktionsgeschwindigkeit nimmt ab",
          "fr": "Le taux de réaction directe diminue",
          "ru": "Скорость прямой реакции снижается",
          "ar": "ينخفض معدل التفاعل الأمامي",
          "zh": "正向反应速率降低",
          "ku": "Rêjeya berteka pêşde kêm dibe"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Tepkime ekzotermiktir. Sıcaklık artarsa sistem girenler yönüne kayar ve Kc denge sabiti küçülür.",
        "en": "The reaction is exothermic. If the temperature increases, the system shifts towards the reactants and the Kc equilibrium constant becomes smaller.",
        "de": "Die Reaktion ist exotherm. Steigt die Temperatur, verschiebt sich das System in Richtung der Reaktanten und die Kc-Gleichgewichtskonstante wird kleiner.",
        "fr": "La réaction est exothermique. Si la température augmente, le système se déplace vers les réactifs et la constante d'équilibre Kc devient plus petite.",
        "ru": "Реакция экзотермическая. При повышении температуры система смещается в сторону реагентов и константа равновесия Кс становится меньше.",
        "ar": "رد الفعل طارد للحرارة. إذا زادت درجة الحرارة، ينتقل النظام نحو المواد المتفاعلة ويصبح ثابت التوازن Kc أصغر.",
        "zh": "该反应是放热的。如果温度升高，系统向反应物方向移动，Kc 平衡常数变小。",
        "ku": "Reaksîyon exotermîk e. Ger germahî zêde bibe, pergal ber bi reaktantan ve diguhere û domahiya hevsengiya Kc piçûktir dibe."
      }
    },
    {
      "id": "u18-twin02",
      "stem": {
        "tr": "C(k) + CO2(g) ⇌ 2 CO(g) tepkimesi için Kp ile Kc arasındaki bağıntı aşağıdakilerden hangisidir?",
        "en": "Which of the following is the relationship between Kp and Kc for the reaction C(s) + CO2(g) ⇌ 2 CO(g)?",
        "de": "Welche der folgenden Beziehungen besteht zwischen Kp und Kc für die Reaktion C(s) + CO2(g) ⇌ 2 CO(g)?",
        "fr": "Quelle est la relation entre Kp et Kc pour la réaction C(s) + CO2(g) ⇌ 2 CO(g) ?",
        "ru": "Что из перечисленного является взаимосвязью между Kp и Kc для реакции C(s) + CO2(g) ⇌ 2 CO(g)?",
        "ar": "أي مما يلي يمثل العلاقة بين Kp وKc للتفاعل C(s) + CO2(g) ⇌ 2 CO(g)؟",
        "zh": "对于 C(s) + CO2(g) ⇌ 2 CO(g) 反应，Kp 和 Kc 之间存在以下哪项关系？",
        "ku": "Têkiliya Kp û Kc ji bo reaksiyona C(s) + CO2(g) ⇌ 2 CO(g) ji kîjan ji van jêrîn e?"
      },
      "options": [
        {
          "tr": "Kp = Kc * (RT)",
          "en": "Kp = Kc * (RT)",
          "de": "Kp = Kc * (RT)",
          "fr": "Kp = Kc * (RT)",
          "ru": "Kp = Kc * (RT)",
          "ar": "Kp = Kc * (RT)",
          "zh": "Kp = Kc * (RT)",
          "ku": "Kp = Kc * (RT)"
        },
        {
          "tr": "Kp = Kc",
          "en": "Kp = Kc",
          "de": "Kp = Kc",
          "fr": "Kp = Kc",
          "ru": "Kp = Kc",
          "ar": "Kp = Kc",
          "zh": "Kp = Kc",
          "ku": "Kp = Kc"
        },
        {
          "tr": "Kp = Kc * (RT)^2",
          "en": "Kp = Kc * (RT)^2",
          "de": "Kp = Kc * (RT)^2",
          "fr": "Kp = Kc * (RT)^2",
          "ru": "Kp = Kc * (RT)^2",
          "ar": "Kp = Kc * (RT)^2",
          "zh": "Kp = Kc * (RT)^2",
          "ku": "Kp = Kc * (RT)^2"
        },
        {
          "tr": "Kc = Kp * (RT)",
          "en": "Kc = Kp * (RT)",
          "de": "Kc = Kp * (RT)",
          "fr": "Kc = Kp * (RT)",
          "ru": "Kc = Kp * (RT)",
          "ar": "Kc = Kp * (RT)",
          "zh": "Kc = Kp * (RT)",
          "ku": "Kc = Kp * (RT)"
        },
        {
          "tr": "Kp = Kc / (RT)",
          "en": "Kp = Kc / (RT)",
          "de": "Kp = Kc / (RT)",
          "fr": "Kp = Kc / (RT)",
          "ru": "Kp = Kc / (RT)",
          "ar": "Kp = Kc / (RT)",
          "zh": "Kp = Kc / (RT)",
          "ku": "Kp = Kc / (RT)"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Δn = n_ürün(gaz) - n_giren(gaz) = 2 - 1 = 1 dir (C katıdır, hesaba katılmaz). Kp = Kc * (RT)^Δn = Kc * (RT)^1 = Kc * (RT).",
        "en": "Δn = n_product(gas) - n_enter(gas) = 2 - 1 = 1 (C is a solid, not taken). Kp = Kc * (RT)^Δn = Kc * (RT)^1 = Kc * (RT).",
        "de": "Δn = n_product(gas) – n_enter(gas) = 2 – 1 = 1 (C ist ein Feststoff, nicht genommen). Kp = Kc * (RT)^Δn = Kc * (RT)^1 = Kc * (RT).",
        "fr": "Δn = n_product(gas) - n_enter(gas) = 2 - 1 = 1 (C est un solide, non pris). Kp = Kc * (RT)^Δn = Kc * (RT)^1 = Kc * (RT).",
        "ru": "Δn = n_product(gas) - n_enter(gas) = 2 - 1 = 1 (C - твердое вещество, не взято). Кр = Кс * (RT)^Δn = Кс * (RT)^1 = Кс * (RT).",
        "ar": "Δn = n_product(gas) - n_enter(gas) = 2 - 1 = 1 (C مادة صلبة، غير مأخوذة). Kp = Kc * (RT)^Δn = Kc * (RT)^1 = Kc * (RT).",
        "zh": "Δn = n_product(gas) - n_enter(gas) = 2 - 1 = 1（C为固体，未取）。 Kp = Kc * (RT)^Δn = Kc * (RT)^1 = Kc * (RT)。",
        "ku": "Δn = n_hilber (gaz) - n_enter (gaz) = 2 - 1 = 1 (C hişk e, nayê girtin). Kp = Kc * (RT)^Δn = Kc * (RT)^1 = Kc * (RT)."
      }
    },
    {
      "id": "u18-twin03",
      "stem": {
        "tr": "Kimya dersinde Kimyasal Denge ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Chemical Equilibrium, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Chemisches Gleichgewicht: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Équilibre Chimique, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Химическое равновесие», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الاتزان الكيميائي\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“化学平衡”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Hevsengiya Kîmyewî\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Dengedeki sisteme madde eklenirse sistem o maddenin derişimini daha da artıracak yöne kayar.",
          "en": "If a substance is added to the system in equilibrium, the system will shift in a direction that will further increase the concentration of that substance.",
          "de": "Wenn dem System im Gleichgewicht ein Stoff hinzugefügt wird, verschiebt sich das System in eine Richtung, die die Konzentration dieses Stoffes weiter erhöht.",
          "fr": "Si une substance est ajoutée au système en équilibre, le système se déplacera dans une direction qui augmentera encore la concentration de cette substance.",
          "ru": "Если вещество добавляется в систему в равновесии, система сместится в направлении, которое еще больше увеличит концентрацию этого вещества.",
          "ar": "إذا تمت إضافة مادة إلى النظام في حالة توازن، فإن النظام سوف يتحول في اتجاه يؤدي إلى زيادة تركيز تلك المادة.",
          "zh": "如果将一种物质添加到处于平衡状态的系统中，系统将向进一步增加该物质浓度的方向移动。",
          "ku": "Ger maddeyek di nav hevsengiyê de li pergalê were zêdekirin, dê pergal ber bi aliyekê ve biçe ku dê hêjmara wê maddeyê zêdetir bike."
        },
        {
          "tr": "Katalizör ürün verimini artırmak için kullanılır.",
          "en": "Catalyst is used to increase product yield.",
          "de": "Zur Steigerung der Produktausbeute wird ein Katalysator eingesetzt.",
          "fr": "Le catalyseur est utilisé pour augmenter le rendement du produit.",
          "ru": "Катализатор используется для увеличения выхода продукта.",
          "ar": "يستخدم المحفز لزيادة إنتاجية المنتج.",
          "zh": "催化剂用于提高产品产量。",
          "ku": "Katalîzator ji bo zêdekirina hilberîna hilberê tê bikar anîn."
        },
        {
          "tr": "Denge sabiti Kc sadece sıcaklıkla değişir; derişim, basınç, hacim veya katalizör Kc yi DEĞİŞTİRMEZ.",
          "en": "The equilibrium constant Kc varies only with temperature; concentration, pressure, volume or catalyst does NOT change Kc.",
          "de": "Die Gleichgewichtskonstante Kc variiert nur mit der Temperatur; Konzentration, Druck, Volumen oder Katalysator verändern Kc NICHT.",
          "fr": "La constante d'équilibre Kc ne varie qu'avec la température ; la concentration, la pression, le volume ou le catalyseur ne change PAS Kc.",
          "ru": "Константа равновесия Кс меняется только с температурой; концентрация, давление, объем или катализатор НЕ изменяют Kc.",
          "ar": "يتغير ثابت التوازن Kc فقط مع درجة الحرارة؛ التركيز أو الضغط أو الحجم أو المحفز لا يغير Kc.",
          "zh": "平衡常数Kc仅随温度变化；浓度、压力、体积或催化剂不会改变 Kc。",
          "ku": "Berdewamiya hevsengiyê Kc tenê bi germahiyê diguhere; konsantasyon, zext, cild an katalîzator Kc naguhere."
        },
        {
          "tr": "Saf katıların derişimleri denge kesrinde paydada yer alır.",
          "en": "The concentrations of pure solids appear in the denominator of the equilibrium expression.",
          "de": "Die Konzentrationen reiner Feststoffe stehen im Nenner des Gleichgewichtsausdrucks.",
          "fr": "Les concentrations des solides purs figurent au dénominateur de l'expression d'équilibre.",
          "ru": "Концентрации чистых твёрдых веществ входят в знаменатель выражения константы равновесия.",
          "ar": "تظهر تراكيز المواد الصلبة النقية في مقام تعبير الاتزان.",
          "zh": "纯固体的浓度出现在平衡表达式的分母中。",
          "ku": "Tîrbûna hişkên saf di kesra hevsengiyê de li jêrê (di parvekerê de) cih digire."
        },
        {
          "tr": "Tepkimeler toplandığında denge sabitleri de birbiriyle toplanır.",
          "en": "When reactions are added together, the equilibrium constants are also added together.",
          "de": "Bei der Addition von Reaktionen addieren sich auch die Gleichgewichtskonstanten.",
          "fr": "Lorsque les réactions sont additionnées, les constantes d’équilibre sont également additionnées.",
          "ru": "При сложении реакций константы равновесия также складываются.",
          "ar": "عند إضافة التفاعلات معًا، يتم أيضًا إضافة ثوابت التوازن معًا.",
          "zh": "当反应加在一起时，平衡常数也加在一起。",
          "ku": "Dema ku reaksîyon li hev tên zêdekirin, sabitên hevsengiyê jî li hev tên zêdekirin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Denge sabiti Kc sadece sıcaklıkla değişir; derişim, basınç, hacim veya katalizör Kc yi DEĞİŞTİRMEZ.\" ifadesidir. ÖSYM kuralı: Kc yi değiştiren TEK faktör sıcaklıktır!",
        "en": "The correct statement is: \"The equilibrium constant Kc varies only with temperature; concentration, pressure, volume or catalyst does NOT change Kc.\". ÖSYM rule: The ONLY factor that changes Kc is temperature!",
        "de": "Die zutreffende Aussage lautet: \"Die Gleichgewichtskonstante Kc variiert nur mit der Temperatur; Konzentration, Druck, Volumen oder Katalysator verändern Kc NICHT.\". ÖSYM-Regel: Der EINZIGE Faktor, der Kc verändert, ist die Temperatur!",
        "fr": "L'affirmation exacte est: \"La constante d'équilibre Kc ne varie qu'avec la température ; la concentration, la pression, le volume ou le catalyseur ne change PAS Kc.\". Règle ÖSYM : le SEUL facteur qui modifie Kc est la température !",
        "ru": "Правильное утверждение: «Константа равновесия Кс меняется только с температурой; концентрация, давление, объем или катализатор НЕ изменяют Kc.». Правило ÖSYM: ЕДИНСТВЕННЫЙ фактор, который меняет Kc, — это температура!",
        "ar": "العبارة الصحيحة هي: \"يتغير ثابت التوازن Kc فقط مع درجة الحرارة؛ التركيز أو الضغط أو الحجم أو المحفز لا يغير Kc.\". قاعدة ÖSYM: العامل الوحيد الذي يغيّر Kc هو درجة الحرارة!",
        "zh": "正确表述为：“平衡常数Kc仅随温度变化；浓度、压力、体积或催化剂不会改变 Kc。”。ÖSYM 规则：改变 Kc 的唯一因素是温度！",
        "ku": "Gotina rast ev e: \"Berdewamiya hevsengiyê Kc tenê bi germahiyê diguhere; konsantasyon, zext, cild an katalîzator Kc naguhere.\". Qanûna ÖSYM: TENÊ faktora ku Kc diguherîne germahî ye!"
      }
    },
    {
      "id": "u18-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimyasal Denge konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Chemical Equilibrium?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Chemisches Gleichgewicht zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Équilibre Chimique ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Химическое равновесие»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الاتزان الكيميائي\"؟",
        "zh": "根据“化学平衡”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Hevsengiya Kîmyewî\" de rast e?"
      },
      "options": [
        {
          "tr": "Endotermik tepkimede sıcaklık artışı denge sabitini küçültür.",
          "en": "In an endothermic reaction, increasing temperature decreases the equilibrium constant.",
          "de": "Bei einer endothermen Reaktion verringert sich bei steigender Temperatur die Gleichgewichtskonstante.",
          "fr": "Dans une réaction endothermique, l’augmentation de la température diminue la constante d’équilibre.",
          "ru": "В эндотермической реакции повышение температуры уменьшает константу равновесия.",
          "ar": "في التفاعل الماص للحرارة، تؤدي زيادة درجة الحرارة إلى تقليل ثابت التوازن.",
          "zh": "在吸热反应中，升高温度会降低平衡常数。",
          "ku": "Di reaksiyonek endotermîk de, zêdebûna germahiyê domdariya hevsengiyê kêm dike."
        },
        {
          "tr": "Hacim küçültüldüğünde sistem gaz mol sayısının çok olduğu yöne kayar.",
          "en": "When the volume is reduced, the system shifts to the direction where the number of gas moles is higher.",
          "de": "Wenn das Volumen verringert wird, verschiebt sich das System in die Richtung, in der die Anzahl der Gasmole höher ist.",
          "fr": "Lorsque le volume diminue, le système se déplace vers la direction où le nombre de moles de gaz est plus élevé.",
          "ru": "При уменьшении объема система смещается в ту сторону, где количество молей газа больше.",
          "ar": "عندما ينخفض ​​الحجم، ينتقل النظام إلى الاتجاه الذي يكون فيه عدد مولات الغاز أعلى.",
          "zh": "当体积减小时，系统向气体摩尔数较高的方向移动。",
          "ku": "Dema ku deng kêm dibe, pergal ber bi arasteya ku hejmara molên gazê lê zêde ye diguhere."
        },
        {
          "tr": "Tepkime ters çevrildiğinde Kc nin işareti eksi olur.",
          "en": "When the reaction is reversed, the sign of Kc becomes negative.",
          "de": "Wenn die Reaktion umgekehrt wird, wird das Vorzeichen von Kc negativ.",
          "fr": "Lorsque la réaction s’inverse, le signe de Kc devient négatif.",
          "ru": "При обратном ходе реакции знак Кс становится отрицательным.",
          "ar": "وعندما يتم عكس التفاعل تصبح إشارة Kc سالبة.",
          "zh": "当反应逆转时，Kc 的符号变为负值。",
          "ku": "Dema ku reaksiyonê berevajî dibe, nîşana Kc neyînî dibe."
        },
        {
          "tr": "Kp ile Kc arasındaki bağıntı: Kp = Kc * (R*T)^Δn dir (Δn: gaz fazındaki ürün katsayıları toplamı - giren katsayıları toplamı).",
          "en": "The relationship between Kp and Kc is: Kp = Kc * (R*T)^Δn (Δn: sum of product coefficients in the gas phase - sum of reactant coefficients).",
          "de": "Die Beziehung zwischen Kp und Kc ist: Kp = Kc * (R*T)^Δn (Δn: Summe der Produktkoeffizienten in der Gasphase – Summe der Reaktantenkoeffizienten).",
          "fr": "La relation entre Kp et Kc est : Kp = Kc * (R*T)^Δn (Δn : somme des coefficients des produits en phase gazeuse - somme des coefficients des réactifs).",
          "ru": "Связь между Kp и Kc следующая: Kp = Kc * (R*T)^Δn (Δn: сумма коэффициентов продуктов в газовой фазе - сумма коэффициентов реагентов).",
          "ar": "العلاقة بين Kp وKc هي: Kp = Kc * (R*T)^Δn (Δn: مجموع معاملات الناتج في الطور الغازي - مجموع معاملات المواد المتفاعلة).",
          "zh": "Kp与Kc的关系为：Kp = Kc * (R*T)^Δn（Δn：气态产物系数之和 - 气态反应物系数之和）。",
          "ku": "Têkiliya di navbera Kp û Kc de ev e: Kp = Kc * (R*T)^Δn (Δn: berhevoka hevberên hilberan ên di qonaxa gazê de - berhevoka hevberên reaktant)."
        },
        {
          "tr": "Denge daima sadece minimum enerji yönünde kurulur.",
          "en": "Equilibrium is always established only in the direction of minimum energy.",
          "de": "Das Gleichgewicht stellt sich immer nur in Richtung minimaler Energie ein.",
          "fr": "L'équilibre ne s'établit toujours que dans le sens de l'énergie minimale.",
          "ru": "Равновесие всегда устанавливается только в направлении минимума энергии.",
          "ar": "يتم إنشاء التوازن دائمًا فقط في اتجاه الحد الأدنى من الطاقة.",
          "zh": "平衡总是仅在最小能量的方向上建立。",
          "ku": "Hevsengî her dem tenê di riya enerjiya hindiktirîn de tê saz kirin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Kp ile Kc arasındaki bağıntı: Kp = Kc * (R*T)^Δn dir (Δn: gaz fazındaki ürün katsayıları toplamı - giren katsayıları toplamı).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The relationship between Kp and Kc is: Kp = Kc * (R*T)^Δn (Δn: sum of product coefficients in the gas phase - sum of reactant coefficients).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Beziehung zwischen Kp und Kc ist: Kp = Kc * (R*T)^Δn (Δn: Summe der Produktkoeffizienten in der Gasphase – Summe der Reaktantenkoeffizienten).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La relation entre Kp et Kc est : Kp = Kc * (R*T)^Δn (Δn : somme des coefficients des produits en phase gazeuse - somme des coefficients des réactifs).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Связь между Kp и Kc следующая: Kp = Kc * (R*T)^Δn (Δn: сумма коэффициентов продуктов в газовой фазе - сумма коэффициентов реагентов).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"العلاقة بين Kp وKc هي: Kp = Kc * (R*T)^Δn (Δn: مجموع معاملات الناتج في الطور الغازي - مجموع معاملات المواد المتفاعلة).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“Kp与Kc的关系为：Kp = Kc * (R*T)^Δn（Δn：气态产物系数之和 - 气态反应物系数之和）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Têkiliya di navbera Kp û Kc de ev e: Kp = Kc * (R*T)^Δn (Δn: berhevoka hevberên hilberan ên di qonaxa gazê de - berhevoka hevberên reaktant).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u18-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimyasal Denge sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Chemical Equilibrium, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Chemisches Gleichgewicht: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Équilibre Chimique, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Химическое равновесие», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الاتزان الكيميائي\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“化学平衡”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Hevsengiya Kîmyewî\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Ekzotermik tepkimede sıcaklık arttıkça daha çok ürün oluşur.",
          "en": "In an exothermic reaction, as the temperature increases, more products are formed.",
          "de": "Bei einer exothermen Reaktion entstehen mit steigender Temperatur mehr Produkte.",
          "fr": "Dans une réaction exothermique, à mesure que la température augmente, davantage de produits se forment.",
          "ru": "В экзотермической реакции с повышением температуры образуется больше продуктов.",
          "ar": "في التفاعل الطارد للحرارة، مع زيادة درجة الحرارة، يتم تشكيل المزيد من المنتجات.",
          "zh": "在放热反应中，随着温度升高，会形成更多产物。",
          "ku": "Di reaksiyonek exotermîk de, her ku germahî zêde dibe, bêtir hilber têne çêkirin."
        },
        {
          "tr": "Qc > Kc olduğunda sistem dengededir.",
          "en": "When Qc > Kc, the system is in equilibrium.",
          "de": "Wenn Qc > Kc, befindet sich das System im Gleichgewicht.",
          "fr": "Lorsque Qc > Kc, le système est en équilibre.",
          "ru": "Когда Qc > Kc, система находится в равновесии.",
          "ar": "عندما تكون Qc > Kc، يكون النظام في حالة توازن.",
          "zh": "当Qc>Kc时，系统处于平衡状态。",
          "ku": "Dema ku Qc > Kc, sîstem di hevsengiyê de ye."
        },
        {
          "tr": "Tepkime 2 ile çarpılırsa Kc de 2 ile çarpılır.",
          "en": "If the reaction is multiplied by 2, Kc is also multiplied by 2.",
          "de": "Wenn die Reaktion mit 2 multipliziert wird, wird auch Kc mit 2 multipliziert.",
          "fr": "Si la réaction est multipliée par 2, Kc est également multiplié par 2.",
          "ru": "Если реакцию умножить на 2, Kc также умножится на 2.",
          "ar": "إذا تم ضرب التفاعل بـ 2، يتم ضرب Kc أيضًا بـ 2.",
          "zh": "如果反应乘以 2，则 Kc 也乘以 2。",
          "ku": "Ger reaksiyon bi 2 were carkirin, Kc jî bi 2 tê carkirin."
        },
        {
          "tr": "Denge kurulduğunda tüm kimyasal tepkimeler ve tanecik hareketleri tamamen durur.",
          "en": "When equilibrium is established, all chemical reactions and particle movements stop completely.",
          "de": "Wenn das Gleichgewicht hergestellt ist, kommen alle chemischen Reaktionen und Partikelbewegungen vollständig zum Stillstand.",
          "fr": "Lorsque l’équilibre est établi, toutes les réactions chimiques et mouvements de particules s’arrêtent complètement.",
          "ru": "Когда устанавливается равновесие, все химические реакции и движения частиц полностью прекращаются.",
          "ar": "عند حدوث التوازن، تتوقف جميع التفاعلات الكيميائية وحركات الجسيمات تمامًا.",
          "zh": "当建立平衡时，所有化学反应和粒子运动完全停止。",
          "ku": "Dema ku hevsengî çêbibe, hemî reaksiyonên kîmyewî û tevgerên parçikan bi tevahî disekinin."
        },
        {
          "tr": "Eğer gaz fazında Δn = 0 ise (ürün gaz molü = giren gaz molü), Kp = Kc dir.",
          "en": "If Δn = 0 in the gas phase (mole of product gas = mole of entering gas), Kp = Kc.",
          "de": "Wenn Δn = 0 in der Gasphase (Mol Produktgas = Mol eintretendes Gas), ist Kp = Kc.",
          "fr": "Si Δn = 0 dans la phase gazeuse (mole de gaz produit = mole de gaz entrant), Kp = Kc.",
          "ru": "Если Δn = 0 в газовой фазе (моль полученного газа = моль поступающего газа), Kp = Kc.",
          "ar": "إذا كانت Δn = 0 في الطور الغازي (مول الغاز الناتج = مول الغاز الداخل)، Kp = Kc.",
          "zh": "如果气相中Δn=0（产物气体的摩尔数=进入气体的摩尔数），则Kp=​​Kc。",
          "ku": "Ger Δn = 0 di qonaxa gazê de (molê gaza berhemê = molê gazê dikeve), Kp = Kc."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Eğer gaz fazında Δn = 0 ise (ürün gaz molü = giren gaz molü), Kp = Kc dir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If Δn = 0 in the gas phase (mole of product gas = mole of entering gas), Kp = Kc.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn Δn = 0 in der Gasphase (Mol Produktgas = Mol eintretendes Gas), ist Kp = Kc.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si Δn = 0 dans la phase gazeuse (mole de gaz produit = mole de gaz entrant), Kp = Kc.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если Δn = 0 в газовой фазе (моль полученного газа = моль поступающего газа), Kp = Kc.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا كانت Δn = 0 في الطور الغازي (مول الغاز الناتج = مول الغاز الداخل)، Kp = Kc.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果气相中Δn=0（产物气体的摩尔数=进入气体的摩尔数），则Kp=​​Kc。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger Δn = 0 di qonaxa gazê de (molê gaza berhemê = molê gazê dikeve), Kp = Kc.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u18-twin06",
      "stem": {
        "tr": "Aşağıda Kimyasal Denge ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Chemical Equilibrium, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Chemisches Gleichgewicht: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Équilibre Chimique, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Химическое равновесие», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الاتزان الكيميائي\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“化学平衡”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Hevsengiya Kîmyewî\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Le Chatelier İlkesi: Dengedeki bir sisteme dışarıdan bir etki yapıldığında sistem bu etkiyi azaltacak yöne kayar.",
          "en": "Le Chatelier's Principle: When an external effect is applied to a system in equilibrium, the system shifts in the direction that will reduce this effect.",
          "de": "Das Prinzip von Le Chatelier: Wenn ein externer Effekt auf ein System im Gleichgewicht ausgeübt wird, verschiebt sich das System in die Richtung, die diesen Effekt verringert.",
          "fr": "Principe de Le Chatelier : Lorsqu'un effet externe est appliqué à un système en équilibre, le système se déplace dans la direction qui réduira cet effet.",
          "ru": "Принцип Ле Шателье: когда к системе, находящейся в равновесии, применяется внешний эффект, система смещается в направлении, которое уменьшит этот эффект.",
          "ar": "مبدأ لوشاتيليه: عند تطبيق تأثير خارجي على نظام في حالة توازن، فإن النظام يتحرك في الاتجاه الذي يقلل من هذا التأثير.",
          "zh": "勒夏特列原理：当外部效应施加到平衡状态的系统时，系统会向减少该效应的方向移动。",
          "ku": "Prensîba Le Chatelier: Dema ku bandorek derveyî li ser pergalek di nav hevsengiyê de were sepandin, pergal ber bi wê rêyê ve diçe ku dê vê bandorê kêm bike."
        },
        {
          "tr": "Katalizör ürün verimini artırmak için kullanılır.",
          "en": "Catalyst is used to increase product yield.",
          "de": "Zur Steigerung der Produktausbeute wird ein Katalysator eingesetzt.",
          "fr": "Le catalyseur est utilisé pour augmenter le rendement du produit.",
          "ru": "Катализатор используется для увеличения выхода продукта.",
          "ar": "يستخدم المحفز لزيادة إنتاجية المنتج.",
          "zh": "催化剂用于提高产品产量。",
          "ku": "Katalîzator ji bo zêdekirina hilberîna hilberê tê bikar anîn."
        },
        {
          "tr": "Saf katıların derişimleri denge kesrinde paydada yer alır.",
          "en": "The concentrations of pure solids appear in the denominator of the equilibrium expression.",
          "de": "Die Konzentrationen reiner Feststoffe stehen im Nenner des Gleichgewichtsausdrucks.",
          "fr": "Les concentrations des solides purs figurent au dénominateur de l'expression d'équilibre.",
          "ru": "Концентрации чистых твёрдых веществ входят в знаменатель выражения константы равновесия.",
          "ar": "تظهر تراكيز المواد الصلبة النقية في مقام تعبير الاتزان.",
          "zh": "纯固体的浓度出现在平衡表达式的分母中。",
          "ku": "Tîrbûna hişkên saf di kesra hevsengiyê de li jêrê (di parvekerê de) cih digire."
        },
        {
          "tr": "Tepkimeler toplandığında denge sabitleri de birbiriyle toplanır.",
          "en": "When reactions are added together, the equilibrium constants are also added together.",
          "de": "Bei der Addition von Reaktionen addieren sich auch die Gleichgewichtskonstanten.",
          "fr": "Lorsque les réactions sont additionnées, les constantes d’équilibre sont également additionnées.",
          "ru": "При сложении реакций константы равновесия также складываются.",
          "ar": "عند إضافة التفاعلات معًا، يتم أيضًا إضافة ثوابت التوازن معًا.",
          "zh": "当反应加在一起时，平衡常数也加在一起。",
          "ku": "Dema ku reaksîyon li hev tên zêdekirin, sabitên hevsengiyê jî li hev tên zêdekirin."
        },
        {
          "tr": "Dengeye ulaşan bir sistemde girenlerin ve ürünlerin derişimleri daima eşittir.",
          "en": "In a system that reaches equilibrium, the concentrations of reactants and products are always equal.",
          "de": "In einem System, das ein Gleichgewicht erreicht, sind die Konzentrationen von Reaktanten und Produkten immer gleich.",
          "fr": "Dans un système qui atteint l’équilibre, les concentrations de réactifs et de produits sont toujours égales.",
          "ru": "В системе, достигшей равновесия, концентрации реагирующих веществ и продуктов всегда равны.",
          "ar": "في النظام الذي يصل إلى التوازن، تكون تركيزات المواد المتفاعلة والمنتجات متساوية دائمًا.",
          "zh": "在达到平衡的系统中，反应物和产物的浓度始终相等。",
          "ku": "Di pergalek ku digihîje hevsengiyê de, giraniya reaktant û hilberan her dem wekhev in."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Le Chatelier İlkesi: Dengedeki bir sisteme dışarıdan bir etki yapıldığında sistem bu etkiyi azaltacak yöne kayar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Le Chatelier's Principle: When an external effect is applied to a system in equilibrium, the system shifts in the direction that will reduce this effect.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Das Prinzip von Le Chatelier: Wenn ein externer Effekt auf ein System im Gleichgewicht ausgeübt wird, verschiebt sich das System in die Richtung, die diesen Effekt verringert.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Principe de Le Chatelier : Lorsqu'un effet externe est appliqué à un système en équilibre, le système se déplace dans la direction qui réduira cet effet.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Принцип Ле Шателье: когда к системе, находящейся в равновесии, применяется внешний эффект, система смещается в направлении, которое уменьшит этот эффект.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"مبدأ لوشاتيليه: عند تطبيق تأثير خارجي على نظام في حالة توازن، فإن النظام يتحرك في الاتجاه الذي يقلل من هذا التأثير.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“勒夏特列原理：当外部效应施加到平衡状态的系统时，系统会向减少该效应的方向移动。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Prensîba Le Chatelier: Dema ku bandorek derveyî li ser pergalek di nav hevsengiyê de were sepandin, pergal ber bi wê rêyê ve diçe ku dê vê bandorê kêm bike.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u18-twin07",
      "stem": {
        "tr": "Kimyasal Denge konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Chemical Equilibrium, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Chemisches Gleichgewicht: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Équilibre Chimique, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Химическое равновесие», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الاتزان الكيميائي\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“化学平衡”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Hevsengiya Kîmyewî\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Hacim küçültüldüğünde sistem gaz mol sayısının çok olduğu yöne kayar.",
          "en": "When the volume is reduced, the system shifts to the direction where the number of gas moles is higher.",
          "de": "Wenn das Volumen verringert wird, verschiebt sich das System in die Richtung, in der die Anzahl der Gasmole höher ist.",
          "fr": "Lorsque le volume diminue, le système se déplace vers la direction où le nombre de moles de gaz est plus élevé.",
          "ru": "При уменьшении объема система смещается в ту сторону, где количество молей газа больше.",
          "ar": "عندما ينخفض ​​الحجم، ينتقل النظام إلى الاتجاه الذي يكون فيه عدد مولات الغاز أعلى.",
          "zh": "当体积减小时，系统向气体摩尔数较高的方向移动。",
          "ku": "Dema ku deng kêm dibe, pergal ber bi arasteya ku hejmara molên gazê lê zêde ye diguhere."
        },
        {
          "tr": "Endotermik tepkimelerde (ΔH > 0) sıcaklık artırılırsa denge ürünler lehine kayar ve Kc artar.",
          "en": "In endothermic reactions (ΔH > 0), if the temperature is increased, the equilibrium shifts in favor of the products and Kc increases.",
          "de": "Bei endothermen Reaktionen (ΔH > 0) verschiebt sich das Gleichgewicht zugunsten der Produkte und Kc steigt, wenn die Temperatur erhöht wird.",
          "fr": "Dans les réactions endothermiques (ΔH > 0), si la température augmente, l'équilibre se déplace en faveur des produits et Kc augmente.",
          "ru": "В эндотермических реакциях (ΔH > 0) при повышении температуры равновесие смещается в пользу продуктов и увеличивается Kc.",
          "ar": "في التفاعلات الماصة للحرارة (ΔH > 0)، إذا زادت درجة الحرارة، يتحول التوازن لصالح المنتجات وتزداد Kc.",
          "zh": "在吸热反应 (ΔH > 0) 中，如果温度升高，平衡会向有利于产物的方向移动，并且 Kc 增加。",
          "ku": "Di reaksiyonên endotermîk de (ΔH > 0), ger germahî zêde bibe, hevsengî di berjewendiya hilberan de diguhere û Kc zêde dibe."
        },
        {
          "tr": "Tepkime ters çevrildiğinde Kc nin işareti eksi olur.",
          "en": "When the reaction is reversed, the sign of Kc becomes negative.",
          "de": "Wenn die Reaktion umgekehrt wird, wird das Vorzeichen von Kc negativ.",
          "fr": "Lorsque la réaction s’inverse, le signe de Kc devient négatif.",
          "ru": "При обратном ходе реакции знак Кс становится отрицательным.",
          "ar": "وعندما يتم عكس التفاعل تصبح إشارة Kc سالبة.",
          "zh": "当反应逆转时，Kc 的符号变为负值。",
          "ku": "Dema ku reaksiyonê berevajî dibe, nîşana Kc neyînî dibe."
        },
        {
          "tr": "Denge daima sadece minimum enerji yönünde kurulur.",
          "en": "Equilibrium is always established only in the direction of minimum energy.",
          "de": "Das Gleichgewicht stellt sich immer nur in Richtung minimaler Energie ein.",
          "fr": "L'équilibre ne s'établit toujours que dans le sens de l'énergie minimale.",
          "ru": "Равновесие всегда устанавливается только в направлении минимума энергии.",
          "ar": "يتم إنشاء التوازن دائمًا فقط في اتجاه الحد الأدنى من الطاقة.",
          "zh": "平衡总是仅在最小能量的方向上建立。",
          "ku": "Hevsengî her dem tenê di riya enerjiya hindiktirîn de tê saz kirin."
        },
        {
          "tr": "Katalizör eklendiğinde sistemin denge sabiti Kc büyür.",
          "en": "When a catalyst is added, the equilibrium constant Kc of the system increases.",
          "de": "Wenn ein Katalysator hinzugefügt wird, erhöht sich die Gleichgewichtskonstante Kc des Systems.",
          "fr": "Lorsqu'un catalyseur est ajouté, la constante d'équilibre Kc du système augmente.",
          "ru": "При добавлении катализатора константа равновесия Kc системы увеличивается.",
          "ar": "عند إضافة محفز، يزداد ثابت التوازن Kc للنظام.",
          "zh": "当添加催化剂时，体系的平衡常数Kc增加。",
          "ku": "Dema ku katalîzator tê zêdekirin, sabîta hevsengiyê Kc ya pergalê mezin dibe."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Endotermik tepkimelerde (ΔH > 0) sıcaklık artırılırsa denge ürünler lehine kayar ve Kc artar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In endothermic reactions (ΔH > 0), if the temperature is increased, the equilibrium shifts in favor of the products and Kc increases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei endothermen Reaktionen (ΔH > 0) verschiebt sich das Gleichgewicht zugunsten der Produkte und Kc steigt, wenn die Temperatur erhöht wird.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans les réactions endothermiques (ΔH > 0), si la température augmente, l'équilibre se déplace en faveur des produits et Kc augmente.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В эндотермических реакциях (ΔH > 0) при повышении температуры равновесие смещается в пользу продуктов и увеличивается Kc.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في التفاعلات الماصة للحرارة (ΔH > 0)، إذا زادت درجة الحرارة، يتحول التوازن لصالح المنتجات وتزداد Kc.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在吸热反应 (ΔH > 0) 中，如果温度升高，平衡会向有利于产物的方向移动，并且 Kc 增加。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di reaksiyonên endotermîk de (ΔH > 0), ger germahî zêde bibe, hevsengî di berjewendiya hilberan de diguhere û Kc zêde dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u18-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimyasal Denge ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Chemical Equilibrium, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Chemisches Gleichgewicht: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Équilibre Chimique, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Химическое равновесие», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الاتزان الكيميائي\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“化学平衡”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Hevsengiya Kîmyewî\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Qc > Kc olduğunda sistem dengededir.",
          "en": "When Qc > Kc, the system is in equilibrium.",
          "de": "Wenn Qc > Kc, befindet sich das System im Gleichgewicht.",
          "fr": "Lorsque Qc > Kc, le système est en équilibre.",
          "ru": "Когда Qc > Kc, система находится в равновесии.",
          "ar": "عندما تكون Qc > Kc، يكون النظام في حالة توازن.",
          "zh": "当Qc>Kc时，系统处于平衡状态。",
          "ku": "Dema ku Qc > Kc, sîstem di hevsengiyê de ye."
        },
        {
          "tr": "Tepkime 2 ile çarpılırsa Kc de 2 ile çarpılır.",
          "en": "If the reaction is multiplied by 2, Kc is also multiplied by 2.",
          "de": "Wenn die Reaktion mit 2 multipliziert wird, wird auch Kc mit 2 multipliziert.",
          "fr": "Si la réaction est multipliée par 2, Kc est également multiplié par 2.",
          "ru": "Если реакцию умножить на 2, Kc также умножится на 2.",
          "ar": "إذا تم ضرب التفاعل بـ 2، يتم ضرب Kc أيضًا بـ 2.",
          "zh": "如果反应乘以 2，则 Kc 也乘以 2。",
          "ku": "Ger reaksiyon bi 2 were carkirin, Kc jî bi 2 tê carkirin."
        },
        {
          "tr": "Ekzotermik tepkimelerde (ΔH < 0) sıcaklık artırılırsa denge girenler lehine kayar ve Kc azalır.",
          "en": "In exothermic reactions (ΔH < 0), if the temperature is increased, the equilibrium shifts in favor of the reactants and Kc decreases.",
          "de": "Bei exothermen Reaktionen (ΔH < 0) verschiebt sich das Gleichgewicht zugunsten der Reaktanten und Kc sinkt, wenn die Temperatur erhöht wird.",
          "fr": "Dans les réactions exothermiques (ΔH < 0), si la température augmente, l'équilibre se déplace en faveur des réactifs et Kc diminue.",
          "ru": "В экзотермических реакциях (ΔH < 0) при повышении температуры равновесие смещается в пользу реагентов и Kc уменьшается.",
          "ar": "في التفاعلات الطاردة للحرارة (ΔH < 0)، إذا زادت درجة الحرارة، يتحول التوازن لصالح المواد المتفاعلة وتنخفض Kc.",
          "zh": "在放热反应 (ΔH < 0) 中，如果温度升高，平衡就会向有利于反应物的方向移动，并且 Kc 会降低。",
          "ku": "Di reaksiyonên exotermîk de (ΔH < 0), ger germahî zêde bibe, hevsengî di berjewendiya reaktantan de diguhere û Kc kêm dibe."
        },
        {
          "tr": "Denge kurulduğunda tüm kimyasal tepkimeler ve tanecik hareketleri tamamen durur.",
          "en": "When equilibrium is established, all chemical reactions and particle movements stop completely.",
          "de": "Wenn das Gleichgewicht hergestellt ist, kommen alle chemischen Reaktionen und Partikelbewegungen vollständig zum Stillstand.",
          "fr": "Lorsque l’équilibre est établi, toutes les réactions chimiques et mouvements de particules s’arrêtent complètement.",
          "ru": "Когда устанавливается равновесие, все химические реакции и движения частиц полностью прекращаются.",
          "ar": "عند حدوث التوازن، تتوقف جميع التفاعلات الكيميائية وحركات الجسيمات تمامًا.",
          "zh": "当建立平衡时，所有化学反应和粒子运动完全停止。",
          "ku": "Dema ku hevsengî çêbibe, hemî reaksiyonên kîmyewî û tevgerên parçikan bi tevahî disekinin."
        },
        {
          "tr": "Δn hesaplanırken katı ve sıvı fazdaki maddelerin katsayıları da dahil edilir.",
          "en": "When calculating Δn, the coefficients of substances in the solid and liquid phases are also included.",
          "de": "Bei der Berechnung von Δn werden auch die Koeffizienten der Stoffe in der festen und flüssigen Phase einbezogen.",
          "fr": "Lors du calcul de Δn, les coefficients des substances en phases solide et liquide sont également inclus.",
          "ru": "При расчете Δn учитываются также коэффициенты веществ в твердой и жидкой фазах.",
          "ar": "عند حساب Δn، يتم أيضًا تضمين معاملات المواد في المرحلتين الصلبة والسائلة.",
          "zh": "计算Δn时，还包括固相和液相物质的系数。",
          "ku": "Dema ku Δn tê hesabkirin, rêjeya maddeyên di qonaxên hişk û şil de jî tê de hene."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Ekzotermik tepkimelerde (ΔH < 0) sıcaklık artırılırsa denge girenler lehine kayar ve Kc azalır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In exothermic reactions (ΔH < 0), if the temperature is increased, the equilibrium shifts in favor of the reactants and Kc decreases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei exothermen Reaktionen (ΔH < 0) verschiebt sich das Gleichgewicht zugunsten der Reaktanten und Kc sinkt, wenn die Temperatur erhöht wird.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans les réactions exothermiques (ΔH < 0), si la température augmente, l'équilibre se déplace en faveur des réactifs et Kc diminue.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В экзотермических реакциях (ΔH < 0) при повышении температуры равновесие смещается в пользу реагентов и Kc уменьшается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في التفاعلات الطاردة للحرارة (ΔH < 0)، إذا زادت درجة الحرارة، يتحول التوازن لصالح المواد المتفاعلة وتنخفض Kc.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在放热反应 (ΔH < 0) 中，如果温度升高，平衡就会向有利于反应物的方向移动，并且 Kc 会降低。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di reaksiyonên exotermîk de (ΔH < 0), ger germahî zêde bibe, hevsengî di berjewendiya reaktantan de diguhere û Kc kêm dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u18-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimyasal Denge konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Chemical Equilibrium, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Chemisches Gleichgewicht die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Équilibre Chimique, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Химическое равновесие», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الاتزان الكيميائي\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“化学平衡”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Hevsengiya Kîmyewî\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Saf katıların derişimleri denge kesrinde paydada yer alır.",
          "en": "The concentrations of pure solids appear in the denominator of the equilibrium expression.",
          "de": "Die Konzentrationen reiner Feststoffe stehen im Nenner des Gleichgewichtsausdrucks.",
          "fr": "Les concentrations des solides purs figurent au dénominateur de l'expression d'équilibre.",
          "ru": "Концентрации чистых твёрдых веществ входят в знаменатель выражения константы равновесия.",
          "ar": "تظهر تراكيز المواد الصلبة النقية في مقام تعبير الاتزان.",
          "zh": "纯固体的浓度出现在平衡表达式的分母中。",
          "ku": "Tîrbûna hişkên saf di kesra hevsengiyê de li jêrê (di parvekerê de) cih digire."
        },
        {
          "tr": "Tepkimeler toplandığında denge sabitleri de birbiriyle toplanır.",
          "en": "When reactions are added together, the equilibrium constants are also added together.",
          "de": "Bei der Addition von Reaktionen addieren sich auch die Gleichgewichtskonstanten.",
          "fr": "Lorsque les réactions sont additionnées, les constantes d’équilibre sont également additionnées.",
          "ru": "При сложении реакций константы равновесия также складываются.",
          "ar": "عند إضافة التفاعلات معًا، يتم أيضًا إضافة ثوابت التوازن معًا.",
          "zh": "当反应加在一起时，平衡常数也加在一起。",
          "ku": "Dema ku reaksîyon li hev tên zêdekirin, sabitên hevsengiyê jî li hev tên zêdekirin."
        },
        {
          "tr": "Dengeye ulaşan bir sistemde girenlerin ve ürünlerin derişimleri daima eşittir.",
          "en": "In a system that reaches equilibrium, the concentrations of reactants and products are always equal.",
          "de": "In einem System, das ein Gleichgewicht erreicht, sind die Konzentrationen von Reaktanten und Produkten immer gleich.",
          "fr": "Dans un système qui atteint l’équilibre, les concentrations de réactifs et de produits sont toujours égales.",
          "ru": "В системе, достигшей равновесия, концентрации реагирующих веществ и продуктов всегда равны.",
          "ar": "في النظام الذي يصل إلى التوازن، تكون تركيزات المواد المتفاعلة والمنتجات متساوية دائمًا.",
          "zh": "在达到平衡的系统中，反应物和产物的浓度始终相等。",
          "ku": "Di pergalek ku digihîje hevsengiyê de, giraniya reaktant û hilberan her dem wekhev in."
        },
        {
          "tr": "Katalizör ileri ve geri tepkime hızını eşit oranda artırır; dengeyi bozmaz, sadece dengeye ulaşma süresini kısaltır.",
          "en": "The catalyst increases the forward and reverse reaction rates equally; It does not disrupt the balance, it just shortens the time to reach equilibrium.",
          "de": "Der Katalysator erhöht die Vorwärts- und Rückwärtsreaktionsgeschwindigkeit gleichermaßen; Es stört das Gleichgewicht nicht, es verkürzt lediglich die Zeit bis zum Erreichen des Gleichgewichts.",
          "fr": "Le catalyseur augmente les vitesses de réaction directe et inverse de manière égale ; Cela ne perturbe pas l’équilibre, cela raccourcit simplement le temps nécessaire pour atteindre l’équilibre.",
          "ru": "Катализатор в равной степени увеличивает скорость прямой и обратной реакции; Это не нарушает баланс, а лишь сокращает время достижения равновесия.",
          "ar": "يزيد المحفز من معدلات التفاعل الأمامي والخلفي بالتساوي؛ فهو لا يخل بالتوازن، بل يختصر الوقت اللازم للوصول إلى التوازن.",
          "zh": "催化剂同等地提高正向和逆向反应速率；它不会破坏平衡，只是缩短达到平衡的时间。",
          "ku": "Katalîzator rêjeyên reaksiyonên pêş û berevajî wekhev zêde dike; Ew hevsengiyê xera nake, tenê dema gihîştina hevsengiyê kurt dike."
        },
        {
          "tr": "Δn = 0 olduğunda Kp sıfıra eşit olur.",
          "en": "When Δn = 0, Kp equals zero.",
          "de": "Wenn Δn = 0, ist Kp gleich Null.",
          "fr": "Lorsque Δn = 0, Kp est égal à zéro.",
          "ru": "Когда Δn = 0, Kp равен нулю.",
          "ar": "عندما Δn = 0، Kp يساوي صفر.",
          "zh": "当 Δn = 0 时，Kp 为零。",
          "ku": "Dema Δn = 0, Kp dibe sifir."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Katalizör ileri ve geri tepkime hızını eşit oranda artırır; dengeyi bozmaz, sadece dengeye ulaşma süresini kısaltır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The catalyst increases the forward and reverse reaction rates equally; It does not disrupt the balance, it just shortens the time to reach equilibrium.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der Katalysator erhöht die Vorwärts- und Rückwärtsreaktionsgeschwindigkeit gleichermaßen; Es stört das Gleichgewicht nicht, es verkürzt lediglich die Zeit bis zum Erreichen des Gleichgewichts.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le catalyseur augmente les vitesses de réaction directe et inverse de manière égale ; Cela ne perturbe pas l’équilibre, cela raccourcit simplement le temps nécessaire pour atteindre l’équilibre.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Катализатор в равной степени увеличивает скорость прямой и обратной реакции; Это не нарушает баланс, а лишь сокращает время достижения равновесия.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يزيد المحفز من معدلات التفاعل الأمامي والخلفي بالتساوي؛ فهو لا يخل بالتوازن، بل يختصر الوقت اللازم للوصول إلى التوازن.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“催化剂同等地提高正向和逆向反应速率；它不会破坏平衡，只是缩短达到平衡的时间。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Katalîzator rêjeyên reaksiyonên pêş û berevajî wekhev zêde dike; Ew hevsengiyê xera nake, tenê dema gihîştina hevsengiyê kurt dike.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u18-twin10",
      "stem": {
        "tr": "Kimya dersinde Kimyasal Denge ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Chemical Equilibrium, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Chemisches Gleichgewicht: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Équilibre Chimique, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Химическое равновесие», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الاتزان الكيميائي\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“化学平衡”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Hevsengiya Kîmyewî\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Tepkime ters çevrildiğinde Kc nin işareti eksi olur.",
          "en": "When the reaction is reversed, the sign of Kc becomes negative.",
          "de": "Wenn die Reaktion umgekehrt wird, wird das Vorzeichen von Kc negativ.",
          "fr": "Lorsque la réaction s’inverse, le signe de Kc devient négatif.",
          "ru": "При обратном ходе реакции знак Кс становится отрицательным.",
          "ar": "وعندما يتم عكس التفاعل تصبح إشارة Kc سالبة.",
          "zh": "当反应逆转时，Kc 的符号变为负值。",
          "ku": "Dema ku reaksiyonê berevajî dibe, nîşana Kc neyînî dibe."
        },
        {
          "tr": "Denge daima sadece minimum enerji yönünde kurulur.",
          "en": "Equilibrium is always established only in the direction of minimum energy.",
          "de": "Das Gleichgewicht stellt sich immer nur in Richtung minimaler Energie ein.",
          "fr": "L'équilibre ne s'établit toujours que dans le sens de l'énergie minimale.",
          "ru": "Равновесие всегда устанавливается только в направлении минимума энергии.",
          "ar": "يتم إنشاء التوازن دائمًا فقط في اتجاه الحد الأدنى من الطاقة.",
          "zh": "平衡总是仅在最小能量的方向上建立。",
          "ku": "Hevsengî her dem tenê di riya enerjiya hindiktirîn de tê saz kirin."
        },
        {
          "tr": "Katalizör eklendiğinde sistemin denge sabiti Kc büyür.",
          "en": "When a catalyst is added, the equilibrium constant Kc of the system increases.",
          "de": "Wenn ein Katalysator hinzugefügt wird, erhöht sich die Gleichgewichtskonstante Kc des Systems.",
          "fr": "Lorsqu'un catalyseur est ajouté, la constante d'équilibre Kc du système augmente.",
          "ru": "При добавлении катализатора константа равновесия Kc системы увеличивается.",
          "ar": "عند إضافة محفز، يزداد ثابت التوازن Kc للنظام.",
          "zh": "当添加催化剂时，体系的平衡常数Kc增加。",
          "ku": "Dema ku katalîzator tê zêdekirin, sabîta hevsengiyê Kc ya pergalê mezin dibe."
        },
        {
          "tr": "Dengedeki sisteme madde eklenirse sistem o maddenin derişimini daha da artıracak yöne kayar.",
          "en": "If a substance is added to the system in equilibrium, the system will shift in a direction that will further increase the concentration of that substance.",
          "de": "Wenn dem System im Gleichgewicht ein Stoff hinzugefügt wird, verschiebt sich das System in eine Richtung, die die Konzentration dieses Stoffes weiter erhöht.",
          "fr": "Si une substance est ajoutée au système en équilibre, le système se déplacera dans une direction qui augmentera encore la concentration de cette substance.",
          "ru": "Если вещество добавляется в систему в равновесии, система сместится в направлении, которое еще больше увеличит концентрацию этого вещества.",
          "ar": "إذا تمت إضافة مادة إلى النظام في حالة توازن، فإن النظام سوف يتحول في اتجاه يؤدي إلى زيادة تركيز تلك المادة.",
          "zh": "如果将一种物质添加到处于平衡状态的系统中，系统将向进一步增加该物质浓度的方向移动。",
          "ku": "Ger maddeyek di nav hevsengiyê de li pergalê were zêdekirin, dê pergal ber bi aliyekê ve biçe ku dê hêjmara wê maddeyê zêdetir bike."
        },
        {
          "tr": "Hacim küçültülürse (basınç artırılırsa) sistem gaz mol sayısının az olduğu tarafa kayar.",
          "en": "If the volume is reduced (pressure is increased), the system shifts to the side where the number of gas moles is lower.",
          "de": "Wird das Volumen verringert (Druck erhöht), verschiebt sich das System auf die Seite, wo die Anzahl der Gasmole geringer ist.",
          "fr": "Si le volume diminue (la pression augmente), le système se déplace vers le côté où le nombre de moles de gaz est plus faible.",
          "ru": "При уменьшении объема (повышении давления) система смещается в сторону, где число молей газа меньше.",
          "ar": "إذا انخفض الحجم (زاد الضغط)، ينتقل النظام إلى الجانب الذي يكون فيه عدد مولات الغاز أقل.",
          "zh": "如果体积减少（压力增加），系统就会向气体摩尔数较低的一侧移动。",
          "ku": "Ger deng kêm bibe (zext zêde bibe), pergal vediguhere aliyê ku hejmara molên gazê kêm e."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Hacim küçültülürse (basınç artırılırsa) sistem gaz mol sayısının az olduğu tarafa kayar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the volume is reduced (pressure is increased), the system shifts to the side where the number of gas moles is lower.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wird das Volumen verringert (Druck erhöht), verschiebt sich das System auf die Seite, wo die Anzahl der Gasmole geringer ist.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si le volume diminue (la pression augmente), le système se déplace vers le côté où le nombre de moles de gaz est plus faible.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При уменьшении объема (повышении давления) система смещается в сторону, где число молей газа меньше.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا انخفض الحجم (زاد الضغط)، ينتقل النظام إلى الجانب الذي يكون فيه عدد مولات الغاز أقل.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果体积减少（压力增加），系统就会向气体摩尔数较低的一侧移动。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger deng kêm bibe (zext zêde bibe), pergal vediguhere aliyê ku hejmara molên gazê kêm e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u18-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimyasal Denge konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Chemical Equilibrium?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Chemisches Gleichgewicht zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Équilibre Chimique ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Химическое равновесие»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الاتزان الكيميائي\"؟",
        "zh": "根据“化学平衡”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Hevsengiya Kîmyewî\" de rast e?"
      },
      "options": [
        {
          "tr": "Denge kesri Qc = Kc ise sistem dengededir; Qc < Kc ise ürünlere kayar; Qc > Kc ise girenlere kayar.",
          "en": "If the reaction quotient Qc = Kc, the system is at equilibrium; if Qc < Kc, it shifts toward the products; if Qc > Kc, it shifts toward the reactants.",
          "de": "Ist der Reaktionsquotient Qc = Kc, befindet sich das System im Gleichgewicht; ist Qc < Kc, verschiebt es sich zu den Produkten; ist Qc > Kc, verschiebt es sich zu den Edukten.",
          "fr": "Si le quotient de réaction Qc = Kc, le système est à l'équilibre ; si Qc < Kc, il évolue vers les produits ; si Qc > Kc, il évolue vers les réactifs.",
          "ru": "Если коэффициент реакции Qc = Kc, система находится в равновесии; если Qc < Kc, она смещается в сторону продуктов; если Qc > Kc — в сторону реагентов.",
          "ar": "إذا كان حاصل التفاعل Qc = Kc فالنظام في حالة اتزان؛ وإذا كان Qc < Kc يتجه نحو النواتج؛ وإذا كان Qc > Kc يتجه نحو المتفاعلات.",
          "zh": "若反应商Qc = Kc，体系处于平衡；若Qc < Kc，平衡向产物方向移动；若Qc > Kc，向反应物方向移动。",
          "ku": "Ger kesra hevsengiyê Qc = Kc be, pergal di hevsengiyê de ye; ger Qc < Kc be, ber bi hilberan ve diçe; ger Qc > Kc be, ber bi reaktantan ve diçe."
        },
        {
          "tr": "Tepkime 2 ile çarpılırsa Kc de 2 ile çarpılır.",
          "en": "If the reaction is multiplied by 2, Kc is also multiplied by 2.",
          "de": "Wenn die Reaktion mit 2 multipliziert wird, wird auch Kc mit 2 multipliziert.",
          "fr": "Si la réaction est multipliée par 2, Kc est également multiplié par 2.",
          "ru": "Если реакцию умножить на 2, Kc также умножится на 2.",
          "ar": "إذا تم ضرب التفاعل بـ 2، يتم ضرب Kc أيضًا بـ 2.",
          "zh": "如果反应乘以 2，则 Kc 也乘以 2。",
          "ku": "Ger reaksiyon bi 2 were carkirin, Kc jî bi 2 tê carkirin."
        },
        {
          "tr": "Denge kurulduğunda tüm kimyasal tepkimeler ve tanecik hareketleri tamamen durur.",
          "en": "When equilibrium is established, all chemical reactions and particle movements stop completely.",
          "de": "Wenn das Gleichgewicht hergestellt ist, kommen alle chemischen Reaktionen und Partikelbewegungen vollständig zum Stillstand.",
          "fr": "Lorsque l’équilibre est établi, toutes les réactions chimiques et mouvements de particules s’arrêtent complètement.",
          "ru": "Когда устанавливается равновесие, все химические реакции и движения частиц полностью прекращаются.",
          "ar": "عند حدوث التوازن، تتوقف جميع التفاعلات الكيميائية وحركات الجسيمات تمامًا.",
          "zh": "当建立平衡时，所有化学反应和粒子运动完全停止。",
          "ku": "Dema ku hevsengî çêbibe, hemî reaksiyonên kîmyewî û tevgerên parçikan bi tevahî disekinin."
        },
        {
          "tr": "Δn hesaplanırken katı ve sıvı fazdaki maddelerin katsayıları da dahil edilir.",
          "en": "When calculating Δn, the coefficients of substances in the solid and liquid phases are also included.",
          "de": "Bei der Berechnung von Δn werden auch die Koeffizienten der Stoffe in der festen und flüssigen Phase einbezogen.",
          "fr": "Lors du calcul de Δn, les coefficients des substances en phases solide et liquide sont également inclus.",
          "ru": "При расчете Δn учитываются также коэффициенты веществ в твердой и жидкой фазах.",
          "ar": "عند حساب Δn، يتم أيضًا تضمين معاملات المواد في المرحلتين الصلبة والسائلة.",
          "zh": "计算Δn时，还包括固相和液相物质的系数。",
          "ku": "Dema ku Δn tê hesabkirin, rêjeya maddeyên di qonaxên hişk û şil de jî tê de hene."
        },
        {
          "tr": "Endotermik tepkimede sıcaklık artışı denge sabitini küçültür.",
          "en": "In an endothermic reaction, increasing temperature decreases the equilibrium constant.",
          "de": "Bei einer endothermen Reaktion verringert sich bei steigender Temperatur die Gleichgewichtskonstante.",
          "fr": "Dans une réaction endothermique, l’augmentation de la température diminue la constante d’équilibre.",
          "ru": "В эндотермической реакции повышение температуры уменьшает константу равновесия.",
          "ar": "في التفاعل الماص للحرارة، تؤدي زيادة درجة الحرارة إلى تقليل ثابت التوازن.",
          "zh": "在吸热反应中，升高温度会降低平衡常数。",
          "ku": "Di reaksiyonek endotermîk de, zêdebûna germahiyê domdariya hevsengiyê kêm dike."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Denge kesri Qc = Kc ise sistem dengededir; Qc < Kc ise ürünlere kayar; Qc > Kc ise girenlere kayar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the reaction quotient Qc = Kc, the system is at equilibrium; if Qc < Kc, it shifts toward the products; if Qc > Kc, it shifts toward the reactants.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Ist der Reaktionsquotient Qc = Kc, befindet sich das System im Gleichgewicht; ist Qc < Kc, verschiebt es sich zu den Produkten; ist Qc > Kc, verschiebt es sich zu den Edukten.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si le quotient de réaction Qc = Kc, le système est à l'équilibre ; si Qc < Kc, il évolue vers les produits ; si Qc > Kc, il évolue vers les réactifs.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если коэффициент реакции Qc = Kc, система находится в равновесии; если Qc < Kc, она смещается в сторону продуктов; если Qc > Kc — в сторону реагентов.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا كان حاصل التفاعل Qc = Kc فالنظام في حالة اتزان؛ وإذا كان Qc < Kc يتجه نحو النواتج؛ وإذا كان Qc > Kc يتجه نحو المتفاعلات.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“若反应商Qc = Kc，体系处于平衡；若Qc < Kc，平衡向产物方向移动；若Qc > Kc，向反应物方向移动。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger kesra hevsengiyê Qc = Kc be, pergal di hevsengiyê de ye; ger Qc < Kc be, ber bi hilberan ve diçe; ger Qc > Kc be, ber bi reaktantan ve diçe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u18-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimyasal Denge sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Chemical Equilibrium, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Chemisches Gleichgewicht: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Équilibre Chimique, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Химическое равновесие», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الاتزان الكيميائي\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“化学平衡”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Hevsengiya Kîmyewî\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Tepkimeler toplandığında denge sabitleri de birbiriyle toplanır.",
          "en": "When reactions are added together, the equilibrium constants are also added together.",
          "de": "Bei der Addition von Reaktionen addieren sich auch die Gleichgewichtskonstanten.",
          "fr": "Lorsque les réactions sont additionnées, les constantes d’équilibre sont également additionnées.",
          "ru": "При сложении реакций константы равновесия также складываются.",
          "ar": "عند إضافة التفاعلات معًا، يتم أيضًا إضافة ثوابت التوازن معًا.",
          "zh": "当反应加在一起时，平衡常数也加在一起。",
          "ku": "Dema ku reaksîyon li hev tên zêdekirin, sabitên hevsengiyê jî li hev tên zêdekirin."
        },
        {
          "tr": "Denge bağıntısına yalnızca gazlar ve suda çözünmüş (aq) maddeler yazılır; saf katı ve sıvılar yazılmaz.",
          "en": "Only gases and substances dissolved in water (aq) are written in the equilibrium expression; pure solids and liquids are not written.",
          "de": "In den Gleichgewichtsausdruck werden nur Gase und in Wasser gelöste Stoffe (aq) aufgenommen; reine Feststoffe und Flüssigkeiten werden nicht geschrieben.",
          "fr": "Seuls les gaz et les substances dissoutes dans l'eau (aq) figurent dans l'expression d'équilibre ; les solides et liquides purs n'y sont pas écrits.",
          "ru": "В выражение константы равновесия записываются только газы и вещества, растворённые в воде (водн.); чистые твёрдые вещества и жидкости не записываются.",
          "ar": "لا يُكتب في تعبير الاتزان إلا الغازات والمواد المذابة في الماء (aq)؛ أما المواد الصلبة والسوائل النقية فلا تُكتب.",
          "zh": "平衡表达式中只写气体和溶于水的物质（aq）；纯固体和纯液体不写入。",
          "ku": "Di têkiliya hevsengiyê de tenê gaz û maddeyên di avê de helandî (aq) tên nivîsandin; hişk û şilên saf nayên nivîsandin."
        },
        {
          "tr": "Dengeye ulaşan bir sistemde girenlerin ve ürünlerin derişimleri daima eşittir.",
          "en": "In a system that reaches equilibrium, the concentrations of reactants and products are always equal.",
          "de": "In einem System, das ein Gleichgewicht erreicht, sind die Konzentrationen von Reaktanten und Produkten immer gleich.",
          "fr": "Dans un système qui atteint l’équilibre, les concentrations de réactifs et de produits sont toujours égales.",
          "ru": "В системе, достигшей равновесия, концентрации реагирующих веществ и продуктов всегда равны.",
          "ar": "في النظام الذي يصل إلى التوازن، تكون تركيزات المواد المتفاعلة والمنتجات متساوية دائمًا.",
          "zh": "在达到平衡的系统中，反应物和产物的浓度始终相等。",
          "ku": "Di pergalek ku digihîje hevsengiyê de, giraniya reaktant û hilberan her dem wekhev in."
        },
        {
          "tr": "Δn = 0 olduğunda Kp sıfıra eşit olur.",
          "en": "When Δn = 0, Kp equals zero.",
          "de": "Wenn Δn = 0, ist Kp gleich Null.",
          "fr": "Lorsque Δn = 0, Kp est égal à zéro.",
          "ru": "Когда Δn = 0, Kp равен нулю.",
          "ar": "عندما Δn = 0، Kp يساوي صفر.",
          "zh": "当 Δn = 0 时，Kp 为零。",
          "ku": "Dema Δn = 0, Kp dibe sifir."
        },
        {
          "tr": "Ekzotermik tepkimede sıcaklık arttıkça daha çok ürün oluşur.",
          "en": "In an exothermic reaction, as the temperature increases, more products are formed.",
          "de": "Bei einer exothermen Reaktion entstehen mit steigender Temperatur mehr Produkte.",
          "fr": "Dans une réaction exothermique, à mesure que la température augmente, davantage de produits se forment.",
          "ru": "В экзотермической реакции с повышением температуры образуется больше продуктов.",
          "ar": "في التفاعل الطارد للحرارة، مع زيادة درجة الحرارة، يتم تشكيل المزيد من المنتجات.",
          "zh": "在放热反应中，随着温度升高，会形成更多产物。",
          "ku": "Di reaksiyonek exotermîk de, her ku germahî zêde dibe, bêtir hilber têne çêkirin."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Denge bağıntısına yalnızca gazlar ve suda çözünmüş (aq) maddeler yazılır; saf katı ve sıvılar yazılmaz.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Only gases and substances dissolved in water (aq) are written in the equilibrium expression; pure solids and liquids are not written.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"In den Gleichgewichtsausdruck werden nur Gase und in Wasser gelöste Stoffe (aq) aufgenommen; reine Feststoffe und Flüssigkeiten werden nicht geschrieben.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Seuls les gaz et les substances dissoutes dans l'eau (aq) figurent dans l'expression d'équilibre ; les solides et liquides purs n'y sont pas écrits.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В выражение константы равновесия записываются только газы и вещества, растворённые в воде (водн.); чистые твёрдые вещества и жидкости не записываются.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"لا يُكتب في تعبير الاتزان إلا الغازات والمواد المذابة في الماء (aq)؛ أما المواد الصلبة والسوائل النقية فلا تُكتب.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“平衡表达式中只写气体和溶于水的物质（aq）；纯固体和纯液体不写入。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di têkiliya hevsengiyê de tenê gaz û maddeyên di avê de helandî (aq) tên nivîsandin; hişk û şilên saf nayên nivîsandin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u18-twin13",
      "stem": {
        "tr": "Aşağıda Kimyasal Denge ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Chemical Equilibrium, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Chemisches Gleichgewicht: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Équilibre Chimique, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Химическое равновесие», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الاتزان الكيميائي\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“化学平衡”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Hevsengiya Kîmyewî\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Denge daima sadece minimum enerji yönünde kurulur.",
          "en": "Equilibrium is always established only in the direction of minimum energy.",
          "de": "Das Gleichgewicht stellt sich immer nur in Richtung minimaler Energie ein.",
          "fr": "L'équilibre ne s'établit toujours que dans le sens de l'énergie minimale.",
          "ru": "Равновесие всегда устанавливается только в направлении минимума энергии.",
          "ar": "يتم إنشاء التوازن دائمًا فقط في اتجاه الحد الأدنى من الطاقة.",
          "zh": "平衡总是仅在最小能量的方向上建立。",
          "ku": "Hevsengî her dem tenê di riya enerjiya hindiktirîn de tê saz kirin."
        },
        {
          "tr": "Katalizör eklendiğinde sistemin denge sabiti Kc büyür.",
          "en": "When a catalyst is added, the equilibrium constant Kc of the system increases.",
          "de": "Wenn ein Katalysator hinzugefügt wird, erhöht sich die Gleichgewichtskonstante Kc des Systems.",
          "fr": "Lorsqu'un catalyseur est ajouté, la constante d'équilibre Kc du système augmente.",
          "ru": "При добавлении катализатора константа равновесия Kc системы увеличивается.",
          "ar": "عند إضافة محفز، يزداد ثابت التوازن Kc للنظام.",
          "zh": "当添加催化剂时，体系的平衡常数Kc增加。",
          "ku": "Dema ku katalîzator tê zêdekirin, sabîta hevsengiyê Kc ya pergalê mezin dibe."
        },
        {
          "tr": "Tepkime ters çevrilirse yeni denge sabiti Kc_yeni = 1 / Kc olur.",
          "en": "If the reaction is reversed, the new equilibrium constant is Kc_new = 1 / Kc.",
          "de": "Wird die Reaktion umgekehrt geschrieben, ist die neue Gleichgewichtskonstante Kc_new = 1 / Kc.",
          "fr": "Si la réaction est inversée, la nouvelle constante d'équilibre est Kc_new = 1 / Kc.",
          "ru": "Если реакцию записать в обратном направлении, новая константа равновесия Kc_new = 1/Kc.",
          "ar": "إذا تم عكس التفاعل، فإن ثابت التوازن الجديد هو Kc_new = 1 / Kc.",
          "zh": "如果反应逆转，则新的平衡常数为 Kc_new = 1 / Kc。",
          "ku": "Ger reaksiyon berevajî were nivîsandin, sabîta hevsengiyê ya nû Kc_new = 1 / Kc ye."
        },
        {
          "tr": "Dengedeki sisteme madde eklenirse sistem o maddenin derişimini daha da artıracak yöne kayar.",
          "en": "If a substance is added to the system in equilibrium, the system will shift in a direction that will further increase the concentration of that substance.",
          "de": "Wenn dem System im Gleichgewicht ein Stoff hinzugefügt wird, verschiebt sich das System in eine Richtung, die die Konzentration dieses Stoffes weiter erhöht.",
          "fr": "Si une substance est ajoutée au système en équilibre, le système se déplacera dans une direction qui augmentera encore la concentration de cette substance.",
          "ru": "Если вещество добавляется в систему в равновесии, система сместится в направлении, которое еще больше увеличит концентрацию этого вещества.",
          "ar": "إذا تمت إضافة مادة إلى النظام في حالة توازن، فإن النظام سوف يتحول في اتجاه يؤدي إلى زيادة تركيز تلك المادة.",
          "zh": "如果将一种物质添加到处于平衡状态的系统中，系统将向进一步增加该物质浓度的方向移动。",
          "ku": "Ger maddeyek di nav hevsengiyê de li pergalê were zêdekirin, dê pergal ber bi aliyekê ve biçe ku dê hêjmara wê maddeyê zêdetir bike."
        },
        {
          "tr": "Katalizör ürün verimini artırmak için kullanılır.",
          "en": "Catalyst is used to increase product yield.",
          "de": "Zur Steigerung der Produktausbeute wird ein Katalysator eingesetzt.",
          "fr": "Le catalyseur est utilisé pour augmenter le rendement du produit.",
          "ru": "Катализатор используется для увеличения выхода продукта.",
          "ar": "يستخدم المحفز لزيادة إنتاجية المنتج.",
          "zh": "催化剂用于提高产品产量。",
          "ku": "Katalîzator ji bo zêdekirina hilberîna hilberê tê bikar anîn."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Tepkime ters çevrilirse yeni denge sabiti Kc_yeni = 1 / Kc olur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the reaction is reversed, the new equilibrium constant is Kc_new = 1 / Kc.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wird die Reaktion umgekehrt geschrieben, ist die neue Gleichgewichtskonstante Kc_new = 1 / Kc.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si la réaction est inversée, la nouvelle constante d'équilibre est Kc_new = 1 / Kc.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если реакцию записать в обратном направлении, новая константа равновесия Kc_new = 1/Kc.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا تم عكس التفاعل، فإن ثابت التوازن الجديد هو Kc_new = 1 / Kc.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果反应逆转，则新的平衡常数为 Kc_new = 1 / Kc。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger reaksiyon berevajî were nivîsandin, sabîta hevsengiyê ya nû Kc_new = 1 / Kc ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u18-twin14",
      "stem": {
        "tr": "Kimyasal Denge konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Chemical Equilibrium, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Chemisches Gleichgewicht: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Équilibre Chimique, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Химическое равновесие», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الاتزان الكيميائي\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“化学平衡”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Hevsengiya Kîmyewî\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Denge kurulduğunda tüm kimyasal tepkimeler ve tanecik hareketleri tamamen durur.",
          "en": "When equilibrium is established, all chemical reactions and particle movements stop completely.",
          "de": "Wenn das Gleichgewicht hergestellt ist, kommen alle chemischen Reaktionen und Partikelbewegungen vollständig zum Stillstand.",
          "fr": "Lorsque l’équilibre est établi, toutes les réactions chimiques et mouvements de particules s’arrêtent complètement.",
          "ru": "Когда устанавливается равновесие, все химические реакции и движения частиц полностью прекращаются.",
          "ar": "عند حدوث التوازن، تتوقف جميع التفاعلات الكيميائية وحركات الجسيمات تمامًا.",
          "zh": "当建立平衡时，所有化学反应和粒子运动完全停止。",
          "ku": "Dema ku hevsengî çêbibe, hemî reaksiyonên kîmyewî û tevgerên parçikan bi tevahî disekinin."
        },
        {
          "tr": "Δn hesaplanırken katı ve sıvı fazdaki maddelerin katsayıları da dahil edilir.",
          "en": "When calculating Δn, the coefficients of substances in the solid and liquid phases are also included.",
          "de": "Bei der Berechnung von Δn werden auch die Koeffizienten der Stoffe in der festen und flüssigen Phase einbezogen.",
          "fr": "Lors du calcul de Δn, les coefficients des substances en phases solide et liquide sont également inclus.",
          "ru": "При расчете Δn учитываются также коэффициенты веществ в твердой и жидкой фазах.",
          "ar": "عند حساب Δn، يتم أيضًا تضمين معاملات المواد في المرحلتين الصلبة والسائلة.",
          "zh": "计算Δn时，还包括固相和液相物质的系数。",
          "ku": "Dema ku Δn tê hesabkirin, rêjeya maddeyên di qonaxên hişk û şil de jî tê de hene."
        },
        {
          "tr": "Endotermik tepkimede sıcaklık artışı denge sabitini küçültür.",
          "en": "In an endothermic reaction, increasing temperature decreases the equilibrium constant.",
          "de": "Bei einer endothermen Reaktion verringert sich bei steigender Temperatur die Gleichgewichtskonstante.",
          "fr": "Dans une réaction endothermique, l’augmentation de la température diminue la constante d’équilibre.",
          "ru": "В эндотермической реакции повышение температуры уменьшает константу равновесия.",
          "ar": "في التفاعل الماص للحرارة، تؤدي زيادة درجة الحرارة إلى تقليل ثابت التوازن.",
          "zh": "在吸热反应中，升高温度会降低平衡常数。",
          "ku": "Di reaksiyonek endotermîk de, zêdebûna germahiyê domdariya hevsengiyê kêm dike."
        },
        {
          "tr": "Tepkime n katsayısıyla çarpılırsa yeni denge sabiti Kc_yeni = (Kc)^n olur.",
          "en": "If the reaction is multiplied by the coefficient n, the new equilibrium constant becomes Kc_new = (Kc)^n.",
          "de": "Wenn die Reaktion mit dem Koeffizienten n multipliziert wird, wird die neue Gleichgewichtskonstante zu Kc_new = (Kc)^n.",
          "fr": "Si la réaction est multipliée par le coefficient n, la nouvelle constante d'équilibre devient Kc_new = (Kc)^n.",
          "ru": "Если реакция умножается на коэффициент n, новая константа равновесия становится Kc_new = (Kc)^n.",
          "ar": "إذا تم ضرب التفاعل في المعامل n، يصبح ثابت التوازن الجديد Kc_new = (Kc)^n.",
          "zh": "如果反应乘以系数n，则新的平衡常数变为Kc_new = (Kc)^n。",
          "ku": "Ger reaksiyon bi hejmara n were carkirin, sabîta hevsengiyê ya nû dibe Kc_new = (Kc)^n."
        },
        {
          "tr": "Hacim küçültüldüğünde sistem gaz mol sayısının çok olduğu yöne kayar.",
          "en": "When the volume is reduced, the system shifts to the direction where the number of gas moles is higher.",
          "de": "Wenn das Volumen verringert wird, verschiebt sich das System in die Richtung, in der die Anzahl der Gasmole höher ist.",
          "fr": "Lorsque le volume diminue, le système se déplace vers la direction où le nombre de moles de gaz est plus élevé.",
          "ru": "При уменьшении объема система смещается в ту сторону, где количество молей газа больше.",
          "ar": "عندما ينخفض ​​الحجم، ينتقل النظام إلى الاتجاه الذي يكون فيه عدد مولات الغاز أعلى.",
          "zh": "当体积减小时，系统向气体摩尔数较高的方向移动。",
          "ku": "Dema ku deng kêm dibe, pergal ber bi arasteya ku hejmara molên gazê lê zêde ye diguhere."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Tepkime n katsayısıyla çarpılırsa yeni denge sabiti Kc_yeni = (Kc)^n olur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the reaction is multiplied by the coefficient n, the new equilibrium constant becomes Kc_new = (Kc)^n.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn die Reaktion mit dem Koeffizienten n multipliziert wird, wird die neue Gleichgewichtskonstante zu Kc_new = (Kc)^n.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si la réaction est multipliée par le coefficient n, la nouvelle constante d'équilibre devient Kc_new = (Kc)^n.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если реакция умножается на коэффициент n, новая константа равновесия становится Kc_new = (Kc)^n.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا تم ضرب التفاعل في المعامل n، يصبح ثابت التوازن الجديد Kc_new = (Kc)^n.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果反应乘以系数n，则新的平衡常数变为Kc_new = (Kc)^n。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger reaksiyon bi hejmara n were carkirin, sabîta hevsengiyê ya nû dibe Kc_new = (Kc)^n.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u18-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimyasal Denge ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Chemical Equilibrium, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Chemisches Gleichgewicht: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Équilibre Chimique, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Химическое равновесие», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الاتزان الكيميائي\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“化学平衡”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Hevsengiya Kîmyewî\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Dengeye ulaşan bir sistemde girenlerin ve ürünlerin derişimleri daima eşittir.",
          "en": "In a system that reaches equilibrium, the concentrations of reactants and products are always equal.",
          "de": "In einem System, das ein Gleichgewicht erreicht, sind die Konzentrationen von Reaktanten und Produkten immer gleich.",
          "fr": "Dans un système qui atteint l’équilibre, les concentrations de réactifs et de produits sont toujours égales.",
          "ru": "В системе, достигшей равновесия, концентрации реагирующих веществ и продуктов всегда равны.",
          "ar": "في النظام الذي يصل إلى التوازن، تكون تركيزات المواد المتفاعلة والمنتجات متساوية دائمًا.",
          "zh": "在达到平衡的系统中，反应物和产物的浓度始终相等。",
          "ku": "Di pergalek ku digihîje hevsengiyê de, giraniya reaktant û hilberan her dem wekhev in."
        },
        {
          "tr": "Δn = 0 olduğunda Kp sıfıra eşit olur.",
          "en": "When Δn = 0, Kp equals zero.",
          "de": "Wenn Δn = 0, ist Kp gleich Null.",
          "fr": "Lorsque Δn = 0, Kp est égal à zéro.",
          "ru": "Когда Δn = 0, Kp равен нулю.",
          "ar": "عندما Δn = 0، Kp يساوي صفر.",
          "zh": "当 Δn = 0 时，Kp 为零。",
          "ku": "Dema Δn = 0, Kp dibe sifir."
        },
        {
          "tr": "Ekzotermik tepkimede sıcaklık arttıkça daha çok ürün oluşur.",
          "en": "In an exothermic reaction, as the temperature increases, more products are formed.",
          "de": "Bei einer exothermen Reaktion entstehen mit steigender Temperatur mehr Produkte.",
          "fr": "Dans une réaction exothermique, à mesure que la température augmente, davantage de produits se forment.",
          "ru": "В экзотермической реакции с повышением температуры образуется больше продуктов.",
          "ar": "في التفاعل الطارد للحرارة، مع زيادة درجة الحرارة، يتم تشكيل المزيد من المنتجات.",
          "zh": "在放热反应中，随着温度升高，会形成更多产物。",
          "ku": "Di reaksiyonek exotermîk de, her ku germahî zêde dibe, bêtir hilber têne çêkirin."
        },
        {
          "tr": "Qc > Kc olduğunda sistem dengededir.",
          "en": "When Qc > Kc, the system is in equilibrium.",
          "de": "Wenn Qc > Kc, befindet sich das System im Gleichgewicht.",
          "fr": "Lorsque Qc > Kc, le système est en équilibre.",
          "ru": "Когда Qc > Kc, система находится в равновесии.",
          "ar": "عندما تكون Qc > Kc، يكون النظام في حالة توازن.",
          "zh": "当Qc>Kc时，系统处于平衡状态。",
          "ku": "Dema ku Qc > Kc, sîstem di hevsengiyê de ye."
        },
        {
          "tr": "Tepkimeler toplanırsa denge sabitleri birbiriyle çarpılır (Kc_net = Kc1 * Kc2).",
          "en": "If the reactions are summed, the equilibrium constants are multiplied together (Kc_net = Kc1 * Kc2).",
          "de": "Wenn die Reaktionen summiert werden, werden die Gleichgewichtskonstanten miteinander multipliziert (Kc_net = Kc1 * Kc2).",
          "fr": "Si les réactions sont additionnées, les constantes d'équilibre sont multipliées entre elles (Kc_net = Kc1 * Kc2).",
          "ru": "Если реакции суммируются, константы равновесия перемножаются (Kc_net = Kc1 * Kc2).",
          "ar": "إذا تم جمع التفاعلات، يتم ضرب ثوابت التوازن معًا (Kc_net = Kc1 * Kc2).",
          "zh": "如果将反应相加，则平衡常数相乘 (Kc_net = Kc1 * Kc2)。",
          "ku": "Ger reaksiyon bên berhevkirin, sabîtên hevsengiyê bi hev re tên carkirin (Kc_net = Kc1 * Kc2)."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Tepkimeler toplanırsa denge sabitleri birbiriyle çarpılır (Kc_net = Kc1 * Kc2).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the reactions are summed, the equilibrium constants are multiplied together (Kc_net = Kc1 * Kc2).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn die Reaktionen summiert werden, werden die Gleichgewichtskonstanten miteinander multipliziert (Kc_net = Kc1 * Kc2).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si les réactions sont additionnées, les constantes d'équilibre sont multipliées entre elles (Kc_net = Kc1 * Kc2).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если реакции суммируются, константы равновесия перемножаются (Kc_net = Kc1 * Kc2).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا تم جمع التفاعلات، يتم ضرب ثوابت التوازن معًا (Kc_net = Kc1 * Kc2).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果将反应相加，则平衡常数相乘 (Kc_net = Kc1 * Kc2)。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger reaksiyon bên berhevkirin, sabîtên hevsengiyê bi hev re tên carkirin (Kc_net = Kc1 * Kc2).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u18-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimyasal Denge konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Chemical Equilibrium, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Chemisches Gleichgewicht die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Équilibre Chimique, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Химическое равновесие», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الاتزان الكيميائي\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“化学平衡”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Hevsengiya Kîmyewî\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Minimum enerji eğilimi ısının olduğu tarafa, maksimum düzensizlik eğilimi gaz mol sayısının çok olduğu tarafa doğrudur.",
          "en": "The minimum energy tendency is towards the side where there is heat, the maximum disorder tendency is towards the side where the number of moles of gas is high.",
          "de": "Die minimale Energietendenz geht zu der Seite, wo Wärme vorhanden ist, die maximale Unordnungstendenz geht zu der Seite, wo die Anzahl der Gasmole hoch ist.",
          "fr": "La tendance minimale de l'énergie est vers le côté où il y a de la chaleur, la tendance maximale du désordre est vers le côté où le nombre de moles de gaz est élevé.",
          "ru": "Минимальная тенденция энергии наблюдается в сторону тепла, максимальная тенденция беспорядка — в сторону, где количество молей газа велико.",
          "ar": "الحد الأدنى لميل الطاقة يكون نحو الجانب الذي توجد فيه الحرارة، والحد الأقصى لميل الاضطراب يكون نحو الجانب الذي يكون فيه عدد مولات الغاز مرتفعًا.",
          "zh": "最低能量趋势指向写有热量的一侧，最大无序趋势指向气体摩尔数较多的一侧。",
          "ku": "Meyla enerjiya herî kêm ber bi aliyê ku germ lê hatiye nivîsandin e; meyla bêrêziya herî zêde ber bi aliyê ku hejmara molên gazê lê zêde ye."
        },
        {
          "tr": "Katalizör eklendiğinde sistemin denge sabiti Kc büyür.",
          "en": "When a catalyst is added, the equilibrium constant Kc of the system increases.",
          "de": "Wenn ein Katalysator hinzugefügt wird, erhöht sich die Gleichgewichtskonstante Kc des Systems.",
          "fr": "Lorsqu'un catalyseur est ajouté, la constante d'équilibre Kc du système augmente.",
          "ru": "При добавлении катализатора константа равновесия Kc системы увеличивается.",
          "ar": "عند إضافة محفز، يزداد ثابت التوازن Kc للنظام.",
          "zh": "当添加催化剂时，体系的平衡常数Kc增加。",
          "ku": "Dema ku katalîzator tê zêdekirin, sabîta hevsengiyê Kc ya pergalê mezin dibe."
        },
        {
          "tr": "Dengedeki sisteme madde eklenirse sistem o maddenin derişimini daha da artıracak yöne kayar.",
          "en": "If a substance is added to the system in equilibrium, the system will shift in a direction that will further increase the concentration of that substance.",
          "de": "Wenn dem System im Gleichgewicht ein Stoff hinzugefügt wird, verschiebt sich das System in eine Richtung, die die Konzentration dieses Stoffes weiter erhöht.",
          "fr": "Si une substance est ajoutée au système en équilibre, le système se déplacera dans une direction qui augmentera encore la concentration de cette substance.",
          "ru": "Если вещество добавляется в систему в равновесии, система сместится в направлении, которое еще больше увеличит концентрацию этого вещества.",
          "ar": "إذا تمت إضافة مادة إلى النظام في حالة توازن، فإن النظام سوف يتحول في اتجاه يؤدي إلى زيادة تركيز تلك المادة.",
          "zh": "如果将一种物质添加到处于平衡状态的系统中，系统将向进一步增加该物质浓度的方向移动。",
          "ku": "Ger maddeyek di nav hevsengiyê de li pergalê were zêdekirin, dê pergal ber bi aliyekê ve biçe ku dê hêjmara wê maddeyê zêdetir bike."
        },
        {
          "tr": "Katalizör ürün verimini artırmak için kullanılır.",
          "en": "Catalyst is used to increase product yield.",
          "de": "Zur Steigerung der Produktausbeute wird ein Katalysator eingesetzt.",
          "fr": "Le catalyseur est utilisé pour augmenter le rendement du produit.",
          "ru": "Катализатор используется для увеличения выхода продукта.",
          "ar": "يستخدم المحفز لزيادة إنتاجية المنتج.",
          "zh": "催化剂用于提高产品产量。",
          "ku": "Katalîzator ji bo zêdekirina hilberîna hilberê tê bikar anîn."
        },
        {
          "tr": "Saf katıların derişimleri denge kesrinde paydada yer alır.",
          "en": "The concentrations of pure solids appear in the denominator of the equilibrium expression.",
          "de": "Die Konzentrationen reiner Feststoffe stehen im Nenner des Gleichgewichtsausdrucks.",
          "fr": "Les concentrations des solides purs figurent au dénominateur de l'expression d'équilibre.",
          "ru": "Концентрации чистых твёрдых веществ входят в знаменатель выражения константы равновесия.",
          "ar": "تظهر تراكيز المواد الصلبة النقية في مقام تعبير الاتزان.",
          "zh": "纯固体的浓度出现在平衡表达式的分母中。",
          "ku": "Tîrbûna hişkên saf di kesra hevsengiyê de li jêrê (di parvekerê de) cih digire."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Minimum enerji eğilimi ısının olduğu tarafa, maksimum düzensizlik eğilimi gaz mol sayısının çok olduğu tarafa doğrudur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The minimum energy tendency is towards the side where there is heat, the maximum disorder tendency is towards the side where the number of moles of gas is high.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die minimale Energietendenz geht zu der Seite, wo Wärme vorhanden ist, die maximale Unordnungstendenz geht zu der Seite, wo die Anzahl der Gasmole hoch ist.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La tendance minimale de l'énergie est vers le côté où il y a de la chaleur, la tendance maximale du désordre est vers le côté où le nombre de moles de gaz est élevé.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Минимальная тенденция энергии наблюдается в сторону тепла, максимальная тенденция беспорядка — в сторону, где количество молей газа велико.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الحد الأدنى لميل الطاقة يكون نحو الجانب الذي توجد فيه الحرارة، والحد الأقصى لميل الاضطراب يكون نحو الجانب الذي يكون فيه عدد مولات الغاز مرتفعًا.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“最低能量趋势指向写有热量的一侧，最大无序趋势指向气体摩尔数较多的一侧。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Meyla enerjiya herî kêm ber bi aliyê ku germ lê hatiye nivîsandin e; meyla bêrêziya herî zêde ber bi aliyê ku hejmara molên gazê lê zêde ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit18;
