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
    "ru": "Принцип Ле Шателье, константы Kc и Kp и связь между ними",
    "ar": "مبدأ لوشاتلييه وعلاقتا Kc وKp",
    "zh": "勒夏特列原理、Kc 与 Kp 的关系",
    "ku": "Prensîba Le Chatelier, Hevkêşeyên Kc û Kp"
  },
  "facts": [
    {
      "id": "u18-f01",
      "fact": {
        "tr": "Kimyasal denge dinamiktir; ileri tepkime hızı geri tepkime hızına eşit olduğunda kurulur (ri = rg).",
        "en": "Chemical equilibrium is dynamic; it is established when the forward reaction rate is equal to the reverse reaction rate (ri = rg).",
        "de": "Das chemische Gleichgewicht ist dynamisch; es stellt sich ein, wenn die Geschwindigkeit der Hinreaktion gleich der Geschwindigkeit der Rückreaktion ist (ri = rg).",
        "fr": "L'équilibre chimique est dynamique ; il est établi lorsque la vitesse de réaction directe est égale à la vitesse de réaction inverse (ri = rg).",
        "ru": "Химическое равновесие динамическое: оно устанавливается, когда скорость прямой реакции становится равной скорости обратной (rпр = rобр).",
        "ar": "الاتزان الكيميائي ديناميكي؛ ويتحقق عندما تتساوى سرعة التفاعل الأمامي وسرعة التفاعل العكسي (ri = rg).",
        "zh": "化学平衡是动态平衡；当正反应速率等于逆反应速率(ri = rg)时达到平衡。",
        "ku": "Hevsengiya kîmyewî dînamîk e; dema leza reaksiyona pêşve wekhevî leza reaksiyona paşve dibe, saz dibe (ri = rg)."
      },
      "trap": {
        "tr": "Denge kurulduğunda tüm kimyasal tepkimeler ve tanecik hareketleri tamamen durur.",
        "en": "When equilibrium is established, all chemical reactions and particle movements stop completely.",
        "de": "Wenn das Gleichgewicht hergestellt ist, kommen alle chemischen Reaktionen und Partikelbewegungen vollständig zum Stillstand.",
        "fr": "Lorsque l’équilibre est établi, toutes les réactions chimiques et mouvements de particules s’arrêtent complètement.",
        "ru": "При установлении равновесия все химические реакции и движение частиц полностью прекращаются.",
        "ar": "عند بلوغ الاتزان تتوقف جميع التفاعلات الكيميائية وحركة الجسيمات تمامًا.",
        "zh": "达到平衡时，所有化学反应和粒子运动都完全停止。",
        "ku": "Dema hevsengî saz dibe, hemû reaksiyonên kîmyewî û tevgerên perçeyan bi tevahî radiwestin."
      },
      "whyTrapIsFalse": {
        "tr": "Denge statik değil dinamiktir: ileri ve geri tepkimeler eşit hızla sürer. Derişimler değişmediği için tepkime yalnızca durmuş gibi görünür.",
        "en": "Equilibrium is dynamic, not static: the forward and reverse reactions continue at equal rates. The reaction only seems to have stopped because the concentrations no longer change.",
        "de": "Das Gleichgewicht ist dynamisch, nicht statisch: Hin- und Rückreaktion laufen mit gleicher Geschwindigkeit weiter. Die Reaktion scheint nur stillzustehen, weil sich die Konzentrationen nicht mehr ändern.",
        "fr": "L’équilibre est dynamique et non statique : les réactions directe et inverse se poursuivent à la même vitesse. La réaction semble seulement arrêtée parce que les concentrations ne varient plus.",
        "ru": "Равновесие динамическое, а не статическое: прямая и обратная реакции продолжаются с равными скоростями. Реакция лишь кажется остановившейся, потому что концентрации больше не меняются.",
        "ar": "الاتزان ديناميكي وليس ساكنًا: يستمر التفاعلان الأمامي والعكسي بالسرعة نفسها. يبدو التفاعل متوقفًا فقط لأن التراكيز لم تعد تتغير.",
        "zh": "平衡是动态的而不是静止的：正、逆反应以相等的速率继续进行。只是因为浓度不再变化，反应看起来像停止了。",
        "ku": "Hevsengî ne statîk, dînamîk e: reaksiyonên pêşve û paşve bi lezeke wekhev berdewam dikin. Ji ber ku tîrbûn naguherin, reaksiyon tenê wekî ku rawestiyabe xuya dike."
      }
    },
    {
      "id": "u18-f02",
      "fact": {
        "tr": "Denge anında reaktif ve ürün derişimleri sabittir; ancak derişimlerin birbirine eşit olması gerekmez.",
        "en": "At equilibrium, reactant and product concentrations are constant; However, the concentrations do not have to be equal.",
        "de": "Im Gleichgewicht sind die Reaktanten- und Produktkonzentrationen konstant; Allerdings müssen die Konzentrationen nicht gleich sein.",
        "fr": "À l'équilibre, les concentrations de réactifs et de produits sont constantes ; Cependant, les concentrations ne doivent pas nécessairement être égales.",
        "ru": "В состоянии равновесия концентрации реагентов и продуктов постоянны, но они не обязательно равны между собой.",
        "ar": "عند الاتزان تكون تراكيز المواد المتفاعلة والنواتج ثابتة، لكن ليس بالضرورة أن تكون متساوية.",
        "zh": "平衡时，反应物和生成物的浓度保持不变，但各浓度不一定相等。",
        "ku": "Di hevsengiyê de tîrbûnên reaktant û hilberan sabît in; lê ne mecbûr e ku ev tîrbûn wekhevî hev bin."
      },
      "trap": {
        "tr": "Dengeye ulaşan bir sistemde girenlerin ve ürünlerin derişimleri daima eşittir.",
        "en": "In a system that reaches equilibrium, the concentrations of reactants and products are always equal.",
        "de": "In einem System, das ein Gleichgewicht erreicht, sind die Konzentrationen von Reaktanten und Produkten immer gleich.",
        "fr": "Dans un système qui atteint l’équilibre, les concentrations de réactifs et de produits sont toujours égales.",
        "ru": "В системе, достигшей равновесия, концентрации реагентов и продуктов всегда равны.",
        "ar": "في النظام الذي بلغ حالة الاتزان تكون تراكيز المواد المتفاعلة والنواتج متساوية دائمًا.",
        "zh": "在达到平衡的体系中，反应物和生成物的浓度总是相等。",
        "ku": "Di sîstemeke ku gihîştiye hevsengiyê de tîrbûnên reaktant û hilberan her tim wekhev in."
      },
      "whyTrapIsFalse": {
        "tr": "Dengede sabit olan derişimlerdir, eşit olmaları gerekmez. Derişimlerin oranını Kc belirler ve Kc 1'den çok farklı olabilir.",
        "en": "At equilibrium the concentrations are constant, not necessarily equal. Their ratio is fixed by Kc, which can be far from 1.",
        "de": "Im Gleichgewicht sind die Konzentrationen konstant, nicht notwendigerweise gleich. Ihr Verhältnis wird durch Kc festgelegt, das weit von 1 entfernt sein kann.",
        "fr": "À l’équilibre, les concentrations sont constantes, pas forcément égales. Leur rapport est fixé par Kc, qui peut être très différent de 1.",
        "ru": "В равновесии концентрации постоянны, но не обязательно равны. Их соотношение определяется константой Kc, которая может сильно отличаться от 1.",
        "ar": "عند الاتزان تكون التراكيز ثابتة وليست بالضرورة متساوية. تحدد Kc النسبة بينها، وقد تختلف Kc كثيرًا عن 1.",
        "zh": "平衡时各浓度保持不变，但不一定相等。它们之间的比值由 Kc 决定，而 Kc 可能远离 1。",
        "ku": "Di hevsengiyê de tîrbûn sabît in, ne mecbûr e wekhev bin. Rêjeya tîrbûnan bi Kc tê diyarkirin û Kc dikare ji 1-ê pir cuda be."
      }
    },
    {
      "id": "u18-f03",
      "fact": {
        "tr": "Belirli bir tepkime denklemi için denge sabiti Kc yalnızca sıcaklıkla değişir; derişim, basınç, hacim veya katalizör Kc'yi değiştirmez.",
        "en": "For a given reaction equation, the equilibrium constant Kc changes only with temperature; concentration, pressure, volume or a catalyst do NOT change Kc.",
        "de": "Für eine gegebene Reaktionsgleichung ändert sich die Gleichgewichtskonstante Kc nur mit der Temperatur; Konzentration, Druck, Volumen oder Katalysator ändern Kc NICHT.",
        "fr": "Pour une équation de réaction donnée, la constante d’équilibre Kc ne varie qu’avec la température ; la concentration, la pression, le volume ou un catalyseur ne modifient PAS Kc.",
        "ru": "Для данного уравнения реакции константа равновесия Kc зависит только от температуры; концентрация, давление, объём и катализатор на Kc НЕ влияют.",
        "ar": "لمعادلة تفاعل معينة يتغير ثابت الاتزان Kc بتغير درجة الحرارة فقط؛ التركيز والضغط والحجم والعامل الحفاز لا تغيّر Kc.",
        "zh": "对于给定的反应方程式，平衡常数 Kc 只随温度变化；浓度、压强、体积或催化剂都不改变 Kc。",
        "ku": "Ji bo hevkêşeyeke reaksiyonê ya diyar, sabîta hevsengiyê Kc tenê bi germahiyê diguhere; tîrbûn, zext, qebare an katalîzor Kc naguherînin."
      },
      "trap": {
        "tr": "Katalizör eklendiğinde sistemin denge sabiti Kc büyür.",
        "en": "When a catalyst is added, the equilibrium constant Kc of the system increases.",
        "de": "Wenn ein Katalysator hinzugefügt wird, erhöht sich die Gleichgewichtskonstante Kc des Systems.",
        "fr": "Lorsqu'un catalyseur est ajouté, la constante d'équilibre Kc du système augmente.",
        "ru": "При добавлении катализатора константа равновесия Kc увеличивается.",
        "ar": "عند إضافة عامل حفاز يزداد ثابت الاتزان Kc للنظام.",
        "zh": "加入催化剂后，体系的平衡常数 Kc 增大。",
        "ku": "Dema katalîzor tê lêzêdekirin, sabîta hevsengiyê Kc ya sîstemê mezin dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Katalizör ileri ve geri tepkimeyi aynı oranda hızlandırır; bu yüzden denge konumu ve Kc değişmez, yalnızca dengeye daha çabuk ulaşılır.",
        "en": "A catalyst speeds up the forward and reverse reactions by the same factor, so the equilibrium position and Kc stay the same; equilibrium is only reached sooner.",
        "de": "Ein Katalysator beschleunigt Hin- und Rückreaktion um denselben Faktor; daher bleiben Gleichgewichtslage und Kc gleich, das Gleichgewicht wird nur schneller erreicht.",
        "fr": "Un catalyseur accélère les réactions directe et inverse dans le même rapport ; la position d’équilibre et Kc restent donc inchangées, l’équilibre est seulement atteint plus vite.",
        "ru": "Катализатор ускоряет прямую и обратную реакции в одинаковое число раз, поэтому положение равновесия и Kc не меняются; равновесие лишь достигается быстрее.",
        "ar": "يسرّع العامل الحفاز التفاعلين الأمامي والعكسي بالنسبة نفسها، لذلك لا يتغير موضع الاتزان ولا Kc؛ وإنما يُبلغ الاتزان في زمن أقصر فقط.",
        "zh": "催化剂使正、逆反应速率增大相同的倍数，因此平衡位置和 Kc 都不变，只是更快达到平衡。",
        "ku": "Katalîzor reaksiyonên pêşve û paşve bi heman rêjeyê bileztir dike; ji ber vê yekê cihê hevsengiyê û Kc naguherin, tenê sîstem zûtir digihîje hevsengiyê."
      },
      "osymTip": {
        "tr": "ÖSYM kuralı: Aynı tepkime denklemi için Kc'yi değiştiren TEK faktör sıcaklıktır!",
        "en": "Exam rule: for the same reaction equation, temperature is the ONLY factor that changes Kc!",
        "de": "Prüfungsregel: Für dieselbe Reaktionsgleichung ist die Temperatur der EINZIGE Faktor, der Kc ändert!",
        "fr": "Règle d’examen : pour une même équation de réaction, la température est le SEUL facteur qui modifie Kc !",
        "ru": "Запомните: для одного и того же уравнения реакции Kc изменяет ТОЛЬКО температура!",
        "ar": "قاعدة مهمة في الامتحان: لمعادلة التفاعل نفسها، درجة الحرارة هي العامل الوحيد الذي يغيّر Kc!",
        "zh": "考试要点：对同一反应方程式，唯一能改变 Kc 的因素是温度！",
        "ku": "Qaîdeya azmûnê: ji bo heman hevkêşeya reaksiyonê, tenê faktora ku Kc diguherîne germahî ye!"
      }
    },
    {
      "id": "u18-f04",
      "fact": {
        "tr": "Kp ile Kc arasındaki bağıntı: Kp = Kc * (R*T)^Δn'dir (Δn: gaz fazındaki ürün katsayıları toplamı - giren katsayıları toplamı).",
        "en": "The relationship between Kp and Kc is: Kp = Kc * (R*T)^Δn (Δn: sum of product coefficients in the gas phase - sum of reactant coefficients).",
        "de": "Die Beziehung zwischen Kp und Kc ist: Kp = Kc * (R*T)^Δn (Δn: Summe der Produktkoeffizienten in der Gasphase – Summe der Reaktantenkoeffizienten).",
        "fr": "La relation entre Kp et Kc est : Kp = Kc * (R*T)^Δn (Δn : somme des coefficients des produits en phase gazeuse - somme des coefficients des réactifs).",
        "ru": "Kp и Kc связаны соотношением Kp = Kc * (R*T)^Δn, где Δn — сумма коэффициентов газообразных продуктов минус сумма коэффициентов газообразных реагентов.",
        "ar": "العلاقة بين Kp وKc هي: Kp = Kc * (R*T)^Δn (Δn: مجموع معاملات النواتج الغازية - مجموع معاملات المتفاعلات الغازية).",
        "zh": "Kp 与 Kc 的关系为：Kp = Kc * (R*T)^Δn，其中 Δn = 气态生成物化学计量数之和 - 气态反应物化学计量数之和。",
        "ku": "Têkiliya di navbera Kp û Kc de ev e: Kp = Kc * (R*T)^Δn (Δn: koma hevberên hilberên di fazê gaz de - koma hevberên reaktantên di fazê gaz de)."
      },
      "trap": {
        "tr": "Δn hesaplanırken katı ve sıvı fazdaki maddelerin katsayıları da dahil edilir.",
        "en": "When calculating Δn, the coefficients of substances in the solid and liquid phases are also included.",
        "de": "Bei der Berechnung von Δn werden auch die Koeffizienten der Stoffe in der festen und flüssigen Phase einbezogen.",
        "fr": "Lors du calcul de Δn, les coefficients des substances en phases solide et liquide sont également inclus.",
        "ru": "При расчёте Δn учитывают также коэффициенты твёрдых и жидких веществ.",
        "ar": "عند حساب Δn، تُحتسب أيضًا معاملات المواد في الطورين الصلب والسائل.",
        "zh": "计算 Δn 时，也要计入固态和液态物质的化学计量数。",
        "ku": "Dema Δn tê hesibandin, hevberên madeyên di fazê hişk û şile de jî tên hesibandin."
      },
      "whyTrapIsFalse": {
        "tr": "Kp yalnızca gazların kısmi basınçlarıyla yazılır. Saf katı ve sıvıların derişimi sabit kabul edildiği için Δn'ye yalnızca gazların katsayıları girer.",
        "en": "Kp is written only with the partial pressures of gases. Since the concentrations of pure solids and liquids are taken as constant, only gas coefficients enter Δn.",
        "de": "Kp wird nur mit den Partialdrücken der Gase aufgestellt. Da die Konzentrationen reiner Feststoffe und Flüssigkeiten als konstant gelten, gehen nur die Koeffizienten der Gase in Δn ein.",
        "fr": "Kp ne s’écrit qu’avec les pressions partielles des gaz. Les concentrations des solides et liquides purs étant considérées comme constantes, seuls les coefficients des gaz entrent dans Δn.",
        "ru": "Kp выражают только через парциальные давления газов. Концентрации чистых твёрдых веществ и жидкостей считаются постоянными, поэтому в Δn входят только коэффициенты газов.",
        "ar": "تُكتب Kp بالضغوط الجزئية للغازات فقط. وبما أن تراكيز المواد الصلبة والسائلة النقية تعد ثابتة، تدخل معاملات الغازات وحدها في Δn.",
        "zh": "Kp 只用气体的分压表示。纯固体和纯液体的浓度视为常数，所以只有气体的化学计量数计入 Δn。",
        "ku": "Kp tenê bi zextên parçeyî yên gazan tê nivîsandin. Ji ber ku tîrbûna madeyên hişk û şile yên paqij sabît tê qebûlkirin, tenê hevberên gazan dikevin nav Δn."
      }
    },
    {
      "id": "u18-f05",
      "fact": {
        "tr": "Eğer gaz fazında Δn = 0 ise (ürün gaz molü = giren gaz molü), Kp = Kc'dir.",
        "en": "If Δn = 0 in the gas phase (moles of gaseous products = moles of gaseous reactants), Kp = Kc.",
        "de": "Wenn Δn = 0 in der Gasphase (Mole gasförmiger Produkte = Mole gasförmiger Edukte), ist Kp = Kc.",
        "fr": "Si Δn = 0 dans la phase gazeuse (moles de produits gazeux = moles de réactifs gazeux), Kp = Kc.",
        "ru": "Если для газов Δn = 0 (число молей газообразных продуктов равно числу молей газообразных реагентов), то Kp = Kc.",
        "ar": "إذا كان Δn = 0 في الطور الغازي (مولات النواتج الغازية = مولات المتفاعلات الغازية) فإن Kp = Kc.",
        "zh": "若气态物质的 Δn = 0（气态生成物与气态反应物的化学计量数之和相等），则 Kp = Kc。",
        "ku": "Heke di fazê gaz de Δn = 0 be (molên gazî yên hilberan = molên gazî yên reaktantan), Kp = Kc e."
      },
      "trap": {
        "tr": "Δn = 0 olduğunda Kp sıfıra eşit olur.",
        "en": "When Δn = 0, Kp equals zero.",
        "de": "Wenn Δn = 0, ist Kp gleich Null.",
        "fr": "Lorsque Δn = 0, Kp est égal à zéro.",
        "ru": "При Δn = 0 константа Kp равна нулю.",
        "ar": "عندما يكون Δn = 0 تساوي Kp صفرًا.",
        "zh": "当 Δn = 0 时，Kp 为零。",
        "ku": "Dema Δn = 0 be, Kp dibe sifir."
      },
      "whyTrapIsFalse": {
        "tr": "Δn = 0 iken (RT)^0 = 1 olur, yani Kp = Kc'dir. Bir sayının sıfırıncı kuvveti 0 değil 1'dir.",
        "en": "When Δn = 0, (RT)^0 = 1, so Kp = Kc. Any number to the power zero equals 1, not 0.",
        "de": "Bei Δn = 0 ist (RT)^0 = 1, also Kp = Kc. Jede Zahl hoch null ergibt 1, nicht 0.",
        "fr": "Pour Δn = 0, (RT)^0 = 1, donc Kp = Kc. Tout nombre à la puissance zéro vaut 1, et non 0.",
        "ru": "При Δn = 0 (RT)^0 = 1, т. е. Kp = Kc. Любое число в нулевой степени равно 1, а не 0.",
        "ar": "عندما Δn = 0 يكون (RT)^0 = 1، أي Kp = Kc. أي عدد مرفوع للقوة صفر يساوي 1 وليس 0.",
        "zh": "Δn = 0 时 (RT)^0 = 1，即 Kp = Kc。任何数的零次方都等于 1，而不是 0。",
        "ku": "Dema Δn = 0 be, (RT)^0 = 1 e, ango Kp = Kc e. Hêza sifir a her hejmarekê ne 0, 1 e."
      }
    },
    {
      "id": "u18-f06",
      "fact": {
        "tr": "Le Chatelier İlkesi: Dengedeki bir sisteme dışarıdan bir etki yapıldığında sistem bu etkiyi azaltacak yöne kayar.",
        "en": "Le Chatelier's Principle: When an external effect is applied to a system in equilibrium, the system shifts in the direction that will reduce this effect.",
        "de": "Das Prinzip von Le Chatelier: Wenn ein externer Effekt auf ein System im Gleichgewicht ausgeübt wird, verschiebt sich das System in die Richtung, die diesen Effekt verringert.",
        "fr": "Principe de Le Chatelier : Lorsqu'un effet externe est appliqué à un système en équilibre, le système se déplace dans la direction qui réduira cet effet.",
        "ru": "Принцип Ле Шателье: если на систему, находящуюся в равновесии, оказать внешнее воздействие, равновесие смещается в сторону, ослабляющую это воздействие.",
        "ar": "مبدأ لوشاتلييه: إذا أثّر عامل خارجي في نظام في حالة اتزان، ينزاح النظام في الاتجاه الذي يقلل أثر هذا العامل.",
        "zh": "勒夏特列原理：改变影响平衡的一个条件，平衡就向能够减弱这种改变的方向移动。",
        "ku": "Prensîba Le Chatelier: Dema bandoreke derveyî li sîstemeke di hevsengiyê de tê kirin, sîstem ber bi wî aliyî ve diçe ku vê bandorê kêm bike."
      },
      "trap": {
        "tr": "Dengedeki sisteme madde eklenirse sistem o maddenin derişimini daha da artıracak yöne kayar.",
        "en": "If a substance is added to the system in equilibrium, the system will shift in a direction that will further increase the concentration of that substance.",
        "de": "Wenn dem System im Gleichgewicht ein Stoff hinzugefügt wird, verschiebt sich das System in eine Richtung, die die Konzentration dieses Stoffes weiter erhöht.",
        "fr": "Si une substance est ajoutée au système en équilibre, le système se déplacera dans une direction qui augmentera encore la concentration de cette substance.",
        "ru": "Если в равновесную систему добавить вещество, равновесие сместится в ту сторону, где концентрация этого вещества возрастёт ещё больше.",
        "ar": "إذا أُضيفت مادة إلى نظام في حالة اتزان، ينزاح النظام في الاتجاه الذي يزيد تركيز تلك المادة أكثر.",
        "zh": "向平衡体系中加入某种物质，平衡会向使该物质浓度进一步增大的方向移动。",
        "ku": "Heke made li sîstemeke di hevsengiyê de were lêzêdekirin, sîstem ber bi wî aliyî ve diçe ku tîrbûna wê madeyê hîn zêdetir dike."
      },
      "whyTrapIsFalse": {
        "tr": "Le Chatelier'e göre sistem etkiyi azaltır: eklenen maddenin derişimini düşürmek için o maddeyi harcayan yöne kayar.",
        "en": "According to Le Chatelier the system counteracts the change: it shifts in the direction that consumes the added substance to lower its concentration.",
        "de": "Nach Le Chatelier wirkt das System der Störung entgegen: Es verschiebt sich in die Richtung, die den zugesetzten Stoff verbraucht und so dessen Konzentration senkt.",
        "fr": "Selon Le Chatelier, le système s’oppose à la perturbation : il se déplace dans le sens qui consomme la substance ajoutée afin d’en diminuer la concentration.",
        "ru": "По принципу Ле Шателье система ослабляет воздействие: равновесие смещается в сторону расходования добавленного вещества, чтобы уменьшить его концентрацию.",
        "ar": "وفق مبدأ لوشاتلييه يعاكس النظام المؤثر: ينزاح في الاتجاه الذي يستهلك المادة المضافة ليخفض تركيزها.",
        "zh": "根据勒夏特列原理，体系会削弱外界影响：平衡向消耗所加物质的方向移动，以降低其浓度。",
        "ku": "Li gorî Le Chatelier sîstem bandorê kêm dike: ji bo kêmkirina tîrbûna madeya lêzêdekirî, ber bi wî aliyî ve diçe ku wê madeyê xerc dike."
      }
    },
    {
      "id": "u18-f07",
      "fact": {
        "tr": "Endotermik tepkimelerde (ΔH > 0) sıcaklık artırılırsa denge ürünler lehine kayar ve Kc artar.",
        "en": "In endothermic reactions (ΔH > 0), if the temperature is increased, the equilibrium shifts in favor of the products and Kc increases.",
        "de": "Bei endothermen Reaktionen (ΔH > 0) verschiebt sich das Gleichgewicht zugunsten der Produkte und Kc steigt, wenn die Temperatur erhöht wird.",
        "fr": "Dans les réactions endothermiques (ΔH > 0), si la température augmente, l'équilibre se déplace en faveur des produits et Kc augmente.",
        "ru": "В эндотермических реакциях (ΔH > 0) при повышении температуры равновесие смещается в сторону продуктов, и Kc увеличивается.",
        "ar": "في التفاعلات الماصة للحرارة (ΔH > 0) يؤدي رفع درجة الحرارة إلى انزياح الاتزان لصالح النواتج وزيادة Kc.",
        "zh": "对于吸热反应(ΔH > 0)，升高温度，平衡向生成物方向移动，Kc 增大。",
        "ku": "Di reaksiyonên endotermîk de (ΔH > 0), heke germahî were bilindkirin, hevsengî ber bi aliyê hilberan ve diçe û Kc zêde dibe."
      },
      "trap": {
        "tr": "Endotermik tepkimede sıcaklık artışı denge sabitini küçültür.",
        "en": "In an endothermic reaction, increasing temperature decreases the equilibrium constant.",
        "de": "Bei einer endothermen Reaktion verringert sich bei steigender Temperatur die Gleichgewichtskonstante.",
        "fr": "Dans une réaction endothermique, l’augmentation de la température diminue la constante d’équilibre.",
        "ru": "В эндотермической реакции повышение температуры уменьшает константу равновесия.",
        "ar": "في التفاعل الماص للحرارة، تؤدي زيادة درجة الحرارة إلى تقليل ثابت الاتزان.",
        "zh": "对于吸热反应，升高温度会使平衡常数减小。",
        "ku": "Di reaksiyona endotermîk de bilindbûna germahiyê sabîta hevsengiyê piçûk dike."
      },
      "whyTrapIsFalse": {
        "tr": "Endotermik tepkimede ısı girenler tarafında düşünülür; sıcaklık artınca denge ürünlere kayar, ürün derişimleri artar ve Kc büyür.",
        "en": "In an endothermic reaction heat acts like a reactant; raising the temperature shifts the equilibrium to the products, product concentrations rise and Kc increases.",
        "de": "Bei einer endothermen Reaktion wirkt Wärme wie ein Edukt; eine Temperaturerhöhung verschiebt das Gleichgewicht zu den Produkten, deren Konzentrationen steigen und Kc wird größer.",
        "fr": "Dans une réaction endothermique, la chaleur joue le rôle d’un réactif ; une hausse de température déplace l’équilibre vers les produits, leurs concentrations augmentent et Kc croît.",
        "ru": "В эндотермической реакции теплоту записывают в левой части, как реагент; при нагревании равновесие смещается к продуктам, их концентрации растут, и Kc увеличивается.",
        "ar": "في التفاعل الماص للحرارة تُعامل الحرارة كمادة متفاعلة؛ برفع درجة الحرارة ينزاح الاتزان نحو النواتج فتزداد تراكيزها وتكبر Kc.",
        "zh": "吸热反应中热量相当于反应物；升高温度，平衡向生成物方向移动，生成物浓度增大，Kc 变大。",
        "ku": "Di reaksiyona endotermîk de germ li aliyê reaktantan tê hesibandin; dema germahî bilind dibe hevsengî ber bi hilberan ve diçe, tîrbûna hilberan zêde dibe û Kc mezin dibe."
      }
    },
    {
      "id": "u18-f08",
      "fact": {
        "tr": "Ekzotermik tepkimelerde (ΔH < 0) sıcaklık artırılırsa denge girenler lehine kayar ve Kc azalır.",
        "en": "In exothermic reactions (ΔH < 0), if the temperature is increased, the equilibrium shifts in favor of the reactants and Kc decreases.",
        "de": "Bei exothermen Reaktionen (ΔH < 0) verschiebt sich das Gleichgewicht zugunsten der Reaktanten und Kc sinkt, wenn die Temperatur erhöht wird.",
        "fr": "Dans les réactions exothermiques (ΔH < 0), si la température augmente, l'équilibre se déplace en faveur des réactifs et Kc diminue.",
        "ru": "В экзотермических реакциях (ΔH < 0) при повышении температуры равновесие смещается в сторону реагентов, и Kc уменьшается.",
        "ar": "في التفاعلات الطاردة للحرارة (ΔH < 0) يؤدي رفع درجة الحرارة إلى انزياح الاتزان لصالح المواد المتفاعلة ونقصان Kc.",
        "zh": "对于放热反应(ΔH < 0)，升高温度，平衡向反应物方向移动，Kc 减小。",
        "ku": "Di reaksiyonên ekzotermîk de (ΔH < 0), heke germahî were bilindkirin, hevsengî ber bi aliyê reaktantan ve diçe û Kc kêm dibe."
      },
      "trap": {
        "tr": "Ekzotermik bir denge tepkimesinde sıcaklık artırılırsa denge ürünler yönüne kayar.",
        "en": "In an exothermic equilibrium reaction, raising the temperature shifts the equilibrium toward the products.",
        "de": "Bei einer exothermen Gleichgewichtsreaktion verschiebt eine Temperaturerhöhung das Gleichgewicht zu den Produkten.",
        "fr": "Dans une réaction d'équilibre exothermique, une élévation de température déplace l'équilibre vers les produits.",
        "ru": "В экзотермической обратимой реакции повышение температуры смещает равновесие в сторону продуктов.",
        "ar": "في تفاعل اتزان طارد للحرارة، يؤدي رفع درجة الحرارة إلى إزاحة الاتزان نحو النواتج.",
        "zh": "在放热的平衡反应中，升高温度使平衡向生成物方向移动。",
        "ku": "Di reaksiyoneke hevsengiyê ya ekzotermîk de, heke germahî were bilindkirin, hevsengî ber bi aliyê hilberan ve diçe."
      },
      "whyTrapIsFalse": {
        "tr": "Ekzotermik tepkimede ısı ürün tarafındadır; sıcaklık artışı dengeyi girenlere kaydırır, bu yüzden ürün miktarı ve Kc azalır.",
        "en": "In an exothermic reaction heat is on the product side; raising the temperature shifts the equilibrium to the reactants, so the amount of product and Kc decrease.",
        "de": "Bei einer exothermen Reaktion steht die Wärme auf der Produktseite; eine Temperaturerhöhung verschiebt das Gleichgewicht zu den Edukten, daher nehmen Produktmenge und Kc ab.",
        "fr": "Dans une réaction exothermique, la chaleur est du côté des produits ; une hausse de température déplace l’équilibre vers les réactifs, donc la quantité de produit et Kc diminuent.",
        "ru": "В экзотермической реакции теплота записывается в правой части, среди продуктов; нагревание смещает равновесие к реагентам, поэтому количество продукта и Kc уменьшаются.",
        "ar": "في التفاعل الطارد للحرارة تكون الحرارة في جهة النواتج؛ رفع درجة الحرارة يزيح الاتزان نحو المتفاعلات، فتقل كمية الناتج وتصغر Kc.",
        "zh": "放热反应中热量在生成物一侧；升高温度使平衡向反应物方向移动，所以生成物的量和 Kc 都减小。",
        "ku": "Di reaksiyona ekzotermîk de germ li aliyê hilberan e; bilindbûna germahiyê hevsengiyê ber bi reaktantan ve dibe, ji ber vê yekê mîqdara hilberan û Kc kêm dibin."
      }
    },
    {
      "id": "u18-f09",
      "fact": {
        "tr": "Katalizör ileri ve geri tepkime hızını eşit oranda artırır; dengeyi bozmaz, sadece dengeye ulaşma süresini kısaltır.",
        "en": "A catalyst increases the forward and reverse reaction rates by the same factor; it does not disturb the equilibrium, it only shortens the time needed to reach it.",
        "de": "Ein Katalysator erhöht die Geschwindigkeit von Hin- und Rückreaktion um denselben Faktor; er stört das Gleichgewicht nicht, sondern verkürzt nur die Zeit bis zu seiner Einstellung.",
        "fr": "Un catalyseur augmente les vitesses des réactions directe et inverse dans le même rapport ; il ne perturbe pas l’équilibre, il raccourcit seulement le temps pour l’atteindre.",
        "ru": "Катализатор увеличивает скорости прямой и обратной реакций в одинаковое число раз; он не нарушает равновесие, а лишь сокращает время его достижения.",
        "ar": "يزيد العامل الحفاز سرعتي التفاعلين الأمامي والعكسي بالنسبة نفسها؛ لا يخل بالاتزان، بل يقصّر فقط زمن الوصول إليه.",
        "zh": "催化剂使正、逆反应速率增大相同的倍数；它不破坏平衡，只缩短达到平衡所需的时间。",
        "ku": "Katalîzor leza reaksiyonên pêşve û paşve bi heman rêjeyê zêde dike; hevsengiyê xera nake, tenê dema gihîştina hevsengiyê kurt dike."
      },
      "trap": {
        "tr": "Katalizör, dengede oluşan ürün miktarını (denge verimini) artırır.",
        "en": "A catalyst increases the amount of product present at equilibrium (the equilibrium yield).",
        "de": "Ein Katalysator erhöht die im Gleichgewicht vorliegende Produktmenge (die Gleichgewichtsausbeute).",
        "fr": "Un catalyseur augmente la quantité de produit présente à l’équilibre (le rendement à l’équilibre).",
        "ru": "Катализатор увеличивает количество продукта в состоянии равновесия (равновесный выход).",
        "ar": "يزيد العامل الحفاز كمية الناتج الموجودة عند الاتزان (مردود الاتزان).",
        "zh": "催化剂能增加平衡时生成物的量（提高平衡产率）。",
        "ku": "Katalîzor mîqdara hilbera ku di hevsengiyê de çêdibe (berhema hevsengiyê) zêde dike."
      },
      "whyTrapIsFalse": {
        "tr": "Katalizör denge konumunu değiştirmez. Ürüne daha kısa sürede ulaşılmasını sağlar, ancak dengede oluşan ürün miktarı (denge verimi) aynı kalır.",
        "en": "A catalyst does not change the equilibrium position. It lets the product form in a shorter time, but the amount of product at equilibrium (the equilibrium yield) stays the same.",
        "de": "Ein Katalysator verändert die Gleichgewichtslage nicht. Das Produkt entsteht schneller, aber die Produktmenge im Gleichgewicht (die Gleichgewichtsausbeute) bleibt gleich.",
        "fr": "Un catalyseur ne modifie pas la position d’équilibre. Le produit se forme plus vite, mais la quantité de produit à l’équilibre (le rendement à l’équilibre) reste la même.",
        "ru": "Катализатор не изменяет положение равновесия. Продукт образуется быстрее, но его количество в равновесии (равновесный выход) остаётся прежним.",
        "ar": "لا يغيّر العامل الحفاز موضع الاتزان. فهو يجعل الناتج يتكوّن في وقت أقصر، لكن كمية الناتج عند الاتزان (مردود الاتزان) تبقى كما هي.",
        "zh": "催化剂不改变平衡位置。它使生成物更快生成，但平衡时生成物的量（平衡产率）保持不变。",
        "ku": "Katalîzor cihê hevsengiyê naguherîne. Ew dike ku hilber di demeke kurttir de bê bidestxistin, lê mîqdara hilbera ku di hevsengiyê de çêdibe (berhema hevsengiyê) wekî xwe dimîne."
      }
    },
    {
      "id": "u18-f10",
      "fact": {
        "tr": "Gaz mol sayıları farklı olan bir dengede hacim küçültülürse (basınç artırılırsa) sistem gaz mol sayısının az olduğu tarafa kayar.",
        "en": "In an equilibrium whose two sides have different numbers of gas moles, decreasing the volume (increasing the pressure) shifts the system toward the side with fewer gas moles.",
        "de": "In einem Gleichgewicht mit unterschiedlicher Anzahl von Gasmolen auf beiden Seiten verschiebt eine Volumenverkleinerung (Druckerhöhung) das System zur Seite mit weniger Gasmolen.",
        "fr": "Dans un équilibre dont les deux membres ont des nombres de moles de gaz différents, une diminution du volume (hausse de pression) déplace le système vers le côté qui compte le moins de moles de gaz.",
        "ru": "Если число молей газов в левой и правой частях уравнения различно, то при уменьшении объёма (повышении давления) равновесие смещается в сторону меньшего числа молей газа.",
        "ar": "في اتزان يختلف فيه عدد مولات الغاز بين الطرفين، يؤدي تصغير الحجم (زيادة الضغط) إلى انزياح النظام نحو الجهة الأقل في مولات الغاز.",
        "zh": "对于两边气体分子数不同的平衡，减小体积（增大压强）时，平衡向气体分子数较少的一侧移动。",
        "ku": "Di hevsengiyeke ku hejmara molên gazê li her du aliyan cuda ye, heke qebare were kêmkirin (zext were zêdekirin), sîstem ber bi aliyê ku hejmara molên gazê kêmtir e ve diçe."
      },
      "trap": {
        "tr": "Hacim küçültüldüğünde sistem gaz mol sayısının çok olduğu yöne kayar.",
        "en": "When the volume is reduced, the system shifts to the direction where the number of gas moles is higher.",
        "de": "Wenn das Volumen verringert wird, verschiebt sich das System in die Richtung, in der die Anzahl der Gasmole höher ist.",
        "fr": "Lorsque le volume diminue, le système se déplace vers la direction où le nombre de moles de gaz est plus élevé.",
        "ru": "При уменьшении объёма равновесие смещается в сторону большего числа молей газа.",
        "ar": "عند تصغير الحجم ينزاح النظام نحو الجهة التي يكون فيها عدد مولات الغاز أكبر.",
        "zh": "减小体积时，平衡向气体分子数多的方向移动。",
        "ku": "Dema qebare tê kêmkirin, sîstem ber bi aliyê ku hejmara molên gazê zêdetir e ve diçe."
      },
      "whyTrapIsFalse": {
        "tr": "Hacim küçülünce toplam basınç artar; sistem bu artışı azaltmak için toplam gaz mol sayısını düşüren, yani gaz molü az olan tarafa kayar.",
        "en": "When the volume decreases the total pressure rises; to reduce this rise the system shifts toward the side that lowers the total number of gas moles, i.e. the side with fewer gas moles.",
        "de": "Bei Volumenverkleinerung steigt der Gesamtdruck; um diesen Anstieg zu verringern, verschiebt sich das System zu der Seite, die die Gesamtzahl der Gasmole senkt, also zur Seite mit weniger Gasmolen.",
        "fr": "Quand le volume diminue, la pression totale augmente ; pour réduire cette hausse, le système se déplace vers le côté qui diminue le nombre total de moles de gaz, c’est-à-dire celui qui en compte le moins.",
        "ru": "При уменьшении объёма общее давление растёт; чтобы ослабить этот рост, равновесие смещается в сторону уменьшения общего числа молей газа, т. е. туда, где молей газа меньше.",
        "ar": "عند تصغير الحجم يزداد الضغط الكلي؛ وليقلل النظام هذه الزيادة ينزاح نحو الجهة التي تخفض العدد الكلي لمولات الغاز، أي الجهة الأقل في مولات الغاز.",
        "zh": "体积减小时总压增大；为削弱这一增大，体系向使气体总物质的量减少的方向，即气体分子数较少的一侧移动。",
        "ku": "Dema qebare kêm dibe zexta giştî zêde dibe; ji bo kêmkirina vê zêdebûnê sîstem ber bi aliyê ku hejmara giştî ya molên gazê kêm dike, ango ber bi aliyê ku molên gazê kêmtir in, ve diçe."
      }
    },
    {
      "id": "u18-f11",
      "fact": {
        "tr": "Denge kesri Qc = Kc ise sistem dengededir; Qc < Kc ise ürünlere kayar; Qc > Kc ise girenlere kayar.",
        "en": "If the reaction quotient Qc = Kc, the system is at equilibrium; if Qc < Kc, it shifts toward the products; if Qc > Kc, it shifts toward the reactants.",
        "de": "Ist der Reaktionsquotient Qc = Kc, befindet sich das System im Gleichgewicht; ist Qc < Kc, verschiebt es sich zu den Produkten; ist Qc > Kc, verschiebt es sich zu den Edukten.",
        "fr": "Si le quotient de réaction Qc = Kc, le système est à l'équilibre ; si Qc < Kc, il évolue vers les produits ; si Qc > Kc, il évolue vers les réactifs.",
        "ru": "Если коэффициент реакции Qc равен Kc, система находится в равновесии; если Qc < Kc, реакция идёт в сторону продуктов; если Qc > Kc — в сторону реагентов.",
        "ar": "إذا كان حاصل التفاعل Qc = Kc فالنظام في حالة اتزان؛ وإذا كان Qc < Kc يتجه نحو النواتج؛ وإذا كان Qc > Kc يتجه نحو المتفاعلات.",
        "zh": "若浓度商 Qc = Kc，体系处于平衡状态；若 Qc < Kc，反应向正反应方向进行；若 Qc > Kc，反应向逆反应方向进行。",
        "ku": "Heke kerta hevsengiyê Qc = Kc be, sîstem di hevsengiyê de ye; heke Qc < Kc be, ber bi hilberan ve diçe; heke Qc > Kc be, ber bi reaktantan ve diçe."
      },
      "trap": {
        "tr": "Qc > Kc olduğunda sistem dengededir.",
        "en": "When Qc > Kc, the system is in equilibrium.",
        "de": "Wenn Qc > Kc, befindet sich das System im Gleichgewicht.",
        "fr": "Lorsque Qc > Kc, le système est en équilibre.",
        "ru": "Если Qc > Kc, система находится в равновесии.",
        "ar": "عندما يكون Qc > Kc يكون النظام في حالة اتزان.",
        "zh": "当 Qc > Kc 时，体系处于平衡状态。",
        "ku": "Dema Qc > Kc be, sîstem di hevsengiyê de ye."
      },
      "whyTrapIsFalse": {
        "tr": "Qc > Kc ise ürün derişimleri denge değerlerinden fazladır; sistem dengede değildir ve Qc = Kc olana kadar girenler yönüne ilerler.",
        "en": "If Qc > Kc, the product concentrations exceed their equilibrium values; the system is not at equilibrium and proceeds toward the reactants until Qc = Kc.",
        "de": "Ist Qc > Kc, liegen die Produktkonzentrationen über ihren Gleichgewichtswerten; das System ist nicht im Gleichgewicht und reagiert in Richtung der Edukte, bis Qc = Kc gilt.",
        "fr": "Si Qc > Kc, les concentrations des produits dépassent leurs valeurs d’équilibre ; le système n’est pas à l’équilibre et évolue vers les réactifs jusqu’à ce que Qc = Kc.",
        "ru": "Если Qc > Kc, концентрации продуктов выше равновесных; система не находится в равновесии, и реакция идёт в сторону реагентов, пока не станет Qc = Kc.",
        "ar": "إذا كان Qc > Kc فإن تراكيز النواتج أكبر من قيمها عند الاتزان؛ النظام ليس في حالة اتزان ويتقدم نحو المتفاعلات حتى يصبح Qc = Kc.",
        "zh": "若 Qc > Kc，生成物浓度高于平衡值；体系未达平衡，反应向逆反应方向进行，直到 Qc = Kc。",
        "ku": "Heke Qc > Kc be, tîrbûnên hilberan ji nirxên hevsengiyê zêdetir in; sîstem ne di hevsengiyê de ye û heta ku Qc = Kc bibe ber bi aliyê reaktantan ve diçe."
      }
    },
    {
      "id": "u18-f12",
      "fact": {
        "tr": "Denge bağıntısına yalnızca gazlar ve suda çözünmüş (aq) maddeler yazılır; saf katı ve sıvılar yazılmaz.",
        "en": "Only gases and substances dissolved in water (aq) are written in the equilibrium expression; pure solids and liquids are not written.",
        "de": "In den Gleichgewichtsausdruck werden nur Gase und in Wasser gelöste Stoffe (aq) aufgenommen; reine Feststoffe und Flüssigkeiten werden nicht geschrieben.",
        "fr": "Seuls les gaz et les substances dissoutes dans l'eau (aq) figurent dans l'expression d'équilibre ; les solides et liquides purs n'y sont pas écrits.",
        "ru": "В выражение константы равновесия входят только газы и растворённые в воде вещества (р-р); чистые твёрдые вещества и жидкости в него не записывают.",
        "ar": "لا يُكتب في تعبير الاتزان إلا الغازات والمواد المذابة في الماء (aq)؛ أما المواد الصلبة والسوائل النقية فلا تُكتب.",
        "zh": "平衡常数表达式中只写入气体和水溶液中溶质(aq)的浓度；纯固体和纯液体不写入。",
        "ku": "Di hevkêşeya hevsengiyê de tenê gaz û madeyên di avê de helbûyî (aq) tên nivîsandin; madeyên hişk û şile yên paqij nayên nivîsandin."
      },
      "trap": {
        "tr": "Saf katıların derişimleri denge kesrinde paydada yer alır.",
        "en": "The concentrations of pure solids appear in the denominator of the equilibrium expression.",
        "de": "Die Konzentrationen reiner Feststoffe stehen im Nenner des Gleichgewichtsausdrucks.",
        "fr": "Les concentrations des solides purs figurent au dénominateur de l'expression d'équilibre.",
        "ru": "Концентрации чистых твёрдых веществ записывают в знаменатель выражения константы равновесия.",
        "ar": "تظهر تراكيز المواد الصلبة النقية في مقام تعبير الاتزان.",
        "zh": "纯固体的浓度写在浓度商表达式的分母中。",
        "ku": "Tîrbûnên madeyên hişk ên paqij di kerta hevsengiyê de li beşa jêrîn cih digirin."
      },
      "whyTrapIsFalse": {
        "tr": "Saf katı ve sıvıların derişimi miktarlarından bağımsız ve sabittir; bu yüzden denge ifadesinin ne pay ne de payda kısmına yazılır, sabit değerleri Kc'nin içinde kalır.",
        "en": "The concentration of a pure solid or liquid is constant and independent of its amount; so it is written neither in the numerator nor in the denominator of the expression — its constant value is absorbed into Kc.",
        "de": "Die Konzentration eines reinen Feststoffs oder einer reinen Flüssigkeit ist konstant und mengenunabhängig; sie steht daher weder im Zähler noch im Nenner, ihr konstanter Wert steckt in Kc.",
        "fr": "La concentration d’un solide ou d’un liquide pur est constante et indépendante de sa quantité ; elle n’apparaît donc ni au numérateur ni au dénominateur, sa valeur constante est incluse dans Kc.",
        "ru": "Концентрация чистого твёрдого вещества или жидкости постоянна и не зависит от его количества; поэтому её не записывают ни в числитель, ни в знаменатель — это постоянное значение уже входит в Kc.",
        "ar": "تركيز المادة الصلبة أو السائلة النقية ثابت ولا يعتمد على كميتها؛ لذلك لا يُكتب في البسط ولا في المقام، وتُدمج قيمته الثابتة في Kc.",
        "zh": "纯固体和纯液体的浓度是常数，与其用量无关，因此既不写在分子中也不写在分母中，其常数值已并入 Kc。",
        "ku": "Tîrbûna madeyên hişk û şile yên paqij bi mîqdara wan ve ne girêdayî ye û sabît e; ji ber vê yekê ne li beşa jorîn ne jî li beşa jêrîn a hevkêşeya hevsengiyê tê nivîsandin, nirxa wê ya sabît di nav Kc de dimîne."
      }
    },
    {
      "id": "u18-f13",
      "fact": {
        "tr": "Tepkime ters çevrilirse yeni denge sabiti Kc_yeni = 1 / Kc olur.",
        "en": "If the reaction is reversed, the new equilibrium constant is Kc_new = 1 / Kc.",
        "de": "Wird die Reaktion umgekehrt geschrieben, ist die neue Gleichgewichtskonstante Kc_new = 1 / Kc.",
        "fr": "Si la réaction est inversée, la nouvelle constante d'équilibre est Kc_new = 1 / Kc.",
        "ru": "Если записать реакцию в обратном направлении, новая константа равновесия равна 1/Kc.",
        "ar": "إذا عُكس التفاعل يصبح ثابت الاتزان الجديد Kc_new = 1 / Kc.",
        "zh": "若将反应逆向书写，新的平衡常数为原平衡常数的倒数，即 1 / Kc。",
        "ku": "Heke reaksiyon berevajî were nivîsandin, sabîta hevsengiyê ya nû Kc_nû = 1 / Kc dibe."
      },
      "trap": {
        "tr": "Tepkime ters çevrildiğinde Kc'nin işareti eksi olur.",
        "en": "When the reaction is reversed, the sign of Kc becomes negative.",
        "de": "Wenn die Reaktion umgekehrt wird, wird das Vorzeichen von Kc negativ.",
        "fr": "Lorsque la réaction s’inverse, le signe de Kc devient négatif.",
        "ru": "Если записать реакцию в обратном направлении, константа Kc становится отрицательной.",
        "ar": "عند عكس التفاعل تصبح إشارة Kc سالبة.",
        "zh": "将反应逆向书写时，Kc 变为负值。",
        "ku": "Dema reaksiyon berevajî tê nivîsandin, nîşana Kc dibe kêmasî (neyînî)."
      },
      "whyTrapIsFalse": {
        "tr": "Tepkime ters çevrilince denge ifadesinde pay ile payda yer değiştirir, bu yüzden Kc'nin tersi (1/Kc) alınır. Denge sabiti her zaman pozitiftir, eksi işaret almaz.",
        "en": "Reversing a reaction swaps the numerator and denominator of the expression, so the reciprocal 1/Kc is taken. An equilibrium constant is always positive; it never becomes negative.",
        "de": "Beim Umkehren der Reaktion tauschen Zähler und Nenner die Plätze, deshalb nimmt man den Kehrwert 1/Kc. Eine Gleichgewichtskonstante ist immer positiv und wird nie negativ.",
        "fr": "Inverser la réaction échange le numérateur et le dénominateur, on prend donc l’inverse 1/Kc. Une constante d’équilibre est toujours positive ; elle ne devient jamais négative.",
        "ru": "При записи реакции в обратном направлении числитель и знаменатель меняются местами, поэтому берут обратную величину 1/Kc. Константа равновесия всегда положительна и не бывает отрицательной.",
        "ar": "عند عكس التفاعل يتبادل البسط والمقام موقعيهما، لذلك يؤخذ المقلوب 1/Kc. ثابت الاتزان موجب دائمًا ولا يصبح سالبًا.",
        "zh": "反应逆写时平衡表达式的分子与分母互换，所以取倒数 1/Kc。平衡常数总是正值，不会变成负数。",
        "ku": "Dema reaksiyon berevajî tê nivîsandin, di hevkêşeya hevsengiyê de beşa jorîn û beşa jêrîn cihê xwe diguherin, ji ber vê yekê berevajiya Kc (1/Kc) tê girtin. Sabîta hevsengiyê her tim erênî ye, nîşana kêmasiyê nagire."
      }
    },
    {
      "id": "u18-f14",
      "fact": {
        "tr": "Tepkime n katsayısıyla çarpılırsa yeni denge sabiti Kc_yeni = (Kc)^n olur.",
        "en": "If the reaction is multiplied by the coefficient n, the new equilibrium constant becomes Kc_new = (Kc)^n.",
        "de": "Wenn die Reaktion mit dem Koeffizienten n multipliziert wird, wird die neue Gleichgewichtskonstante zu Kc_new = (Kc)^n.",
        "fr": "Si la réaction est multipliée par le coefficient n, la nouvelle constante d'équilibre devient Kc_new = (Kc)^n.",
        "ru": "Если все коэффициенты уравнения умножить на n, новая константа равновесия равна (Kc)^n.",
        "ar": "إذا ضُرب التفاعل في المعامل n يصبح ثابت الاتزان الجديد Kc_new = (Kc)^n.",
        "zh": "若将反应式的化学计量数都乘以 n，新的平衡常数为 (Kc)^n。",
        "ku": "Heke reaksiyon bi hevberê n were pirkirin, sabîta hevsengiyê ya nû Kc_nû = (Kc)^n dibe."
      },
      "trap": {
        "tr": "Tepkime 2 ile çarpılırsa Kc de 2 ile çarpılır.",
        "en": "If the reaction is multiplied by 2, Kc is also multiplied by 2.",
        "de": "Wenn die Reaktion mit 2 multipliziert wird, wird auch Kc mit 2 multipliziert.",
        "fr": "Si la réaction est multipliée par 2, Kc est également multiplié par 2.",
        "ru": "Если коэффициенты уравнения умножить на 2, Kc тоже умножится на 2.",
        "ar": "إذا ضُرب التفاعل في 2 تُضرب Kc أيضًا في 2.",
        "zh": "若将反应式乘以 2，Kc 也乘以 2。",
        "ku": "Heke reaksiyon bi 2 were pirkirin, Kc jî bi 2 tê pirkirin."
      },
      "whyTrapIsFalse": {
        "tr": "Katsayılar denge ifadesinde üs olarak yer alır; katsayıları 2 katına çıkarmak her derişimin karesini almak demektir. Bu yüzden Kc 2 ile çarpılmaz, karesi alınır.",
        "en": "Coefficients appear as exponents in the equilibrium expression; doubling them squares every concentration term. So Kc is not multiplied by 2 — it is squared.",
        "de": "Koeffizienten erscheinen als Exponenten im Gleichgewichtsausdruck; ihre Verdopplung quadriert jeden Konzentrationsterm. Daher wird Kc nicht mit 2 multipliziert, sondern quadriert.",
        "fr": "Les coefficients apparaissent comme exposants dans l’expression d’équilibre ; les doubler élève chaque concentration au carré. Kc n’est donc pas multipliée par 2, elle est élevée au carré.",
        "ru": "Коэффициенты входят в выражение константы как показатели степени; их удвоение означает возведение каждой концентрации в квадрат. Поэтому Kc не умножается на 2, а возводится в квадрат.",
        "ar": "تظهر المعاملات كأسس في تعبير الاتزان؛ ومضاعفتها تعني تربيع كل حد تركيز. لذلك لا تُضرب Kc في 2 بل تُربَّع.",
        "zh": "化学计量数在平衡表达式中作为指数出现；计量数加倍就是把每个浓度项平方，所以 Kc 不是乘以 2，而是平方。",
        "ku": "Hevber di hevkêşeya hevsengiyê de wekî hêz cih digirin; du qat kirina hevberan tê wateya duhêzkirina her tîrbûnê. Ji ber vê yekê Kc bi 2 nayê pirkirin, duhêza wê tê girtin."
      }
    },
    {
      "id": "u18-f15",
      "fact": {
        "tr": "Tepkimeler toplanırsa denge sabitleri birbiriyle çarpılır (Kc_net = Kc1 * Kc2).",
        "en": "If the reactions are summed, the equilibrium constants are multiplied together (Kc_net = Kc1 * Kc2).",
        "de": "Wenn die Reaktionen summiert werden, werden die Gleichgewichtskonstanten miteinander multipliziert (Kc_net = Kc1 * Kc2).",
        "fr": "Si les réactions sont additionnées, les constantes d'équilibre sont multipliées entre elles (Kc_net = Kc1 * Kc2).",
        "ru": "При сложении уравнений реакций их константы равновесия перемножаются (Kc = Kc1 * Kc2).",
        "ar": "عند جمع التفاعلات تُضرب ثوابت اتزانها بعضها في بعض (Kc_net = Kc1 * Kc2).",
        "zh": "若将几个反应相加，总反应的平衡常数等于各反应平衡常数之积(Kc总 = Kc1 * Kc2)。",
        "ku": "Heke reaksiyon werin berhevkirin, sabîtên hevsengiyê bi hev re tên pirkirin (Kc_net = Kc1 * Kc2)."
      },
      "trap": {
        "tr": "Tepkimeler toplandığında denge sabitleri de birbiriyle toplanır.",
        "en": "When reactions are added together, the equilibrium constants are also added together.",
        "de": "Bei der Addition von Reaktionen addieren sich auch die Gleichgewichtskonstanten.",
        "fr": "Lorsque les réactions sont additionnées, les constantes d’équilibre sont également additionnées.",
        "ru": "При сложении уравнений реакций их константы равновесия тоже складываются.",
        "ar": "عند جمع التفاعلات تُجمع ثوابت اتزانها أيضًا.",
        "zh": "将反应相加时，平衡常数也相加。",
        "ku": "Dema reaksiyon tên berhevkirin, sabîtên hevsengiyê jî bi hev re tên berhevkirin."
      },
      "whyTrapIsFalse": {
        "tr": "Tepkimeler toplanınca net denge ifadesi, tek tek denge ifadelerinin çarpımına eşit olur. Bu yüzden denge sabitleri toplanmaz, çarpılır.",
        "en": "When reactions are added, the overall equilibrium expression equals the product of the individual expressions. Therefore the constants are multiplied, not added.",
        "de": "Werden Reaktionen addiert, ist der Gesamtausdruck gleich dem Produkt der Einzelausdrücke. Deshalb werden die Konstanten multipliziert, nicht addiert.",
        "fr": "Quand on additionne des réactions, l’expression d’équilibre globale est égale au produit des expressions individuelles. Les constantes se multiplient donc, elles ne s’additionnent pas.",
        "ru": "При сложении уравнений выражение константы суммарной реакции равно произведению выражений констант отдельных реакций. Поэтому константы не складываются, а перемножаются.",
        "ar": "عند جمع التفاعلات يكون تعبير الاتزان الكلي مساويًا لحاصل ضرب التعابير المنفردة. لذلك تُضرب الثوابت ولا تُجمع.",
        "zh": "反应相加时，总反应的平衡表达式等于各分步表达式的乘积，因此平衡常数相乘而不是相加。",
        "ku": "Dema reaksiyon tên berhevkirin, hevkêşeya hevsengiyê ya net wekhevî hasila hevkêşeyên hevsengiyê yên yek bi yek e. Ji ber vê yekê sabîtên hevsengiyê nayên berhevkirin, tên pirkirin."
      }
    },
    {
      "id": "u18-f16",
      "fact": {
        "tr": "Minimum enerji eğilimi ısının olduğu tarafa, maksimum düzensizlik eğilimi gaz mol sayısının çok olduğu tarafa doğrudur.",
        "en": "The minimum energy tendency is towards the side where there is heat, the maximum disorder tendency is towards the side where the number of moles of gas is high.",
        "de": "Die minimale Energietendenz geht zu der Seite, wo Wärme vorhanden ist, die maximale Unordnungstendenz geht zu der Seite, wo die Anzahl der Gasmole hoch ist.",
        "fr": "La tendance minimale de l'énergie est vers le côté où il y a de la chaleur, la tendance maximale du désordre est vers le côté où le nombre de moles de gaz est élevé.",
        "ru": "Стремление к минимуму энергии направлено в ту сторону, где записана теплота, а стремление к максимуму неупорядоченности — в сторону большего числа молей газа.",
        "ar": "الميل إلى أدنى طاقة يكون نحو الجهة التي تُكتب فيها الحرارة، والميل إلى أقصى عشوائية يكون نحو الجهة التي يكون فيها عدد مولات الغاز أكبر.",
        "zh": "趋向最低能量的倾向指向热量所在的一侧，趋向最大混乱度的倾向指向气体物质的量较多的一侧。",
        "ku": "Meyla enerjiya kêmtirîn ber bi aliyê ku germ lê ye ve ye; meyla bêrêziya herî zêde ber bi aliyê ku hejmara molên gazê lê zêdetir e ve ye."
      },
      "trap": {
        "tr": "Denge tepkimelerinde minimum enerji eğilimi ile maksimum düzensizlik eğilimi aynı yönü destekler.",
        "en": "In equilibrium reactions the tendency toward minimum energy and the tendency toward maximum disorder favour the same direction.",
        "de": "Bei Gleichgewichtsreaktionen begünstigen das Streben nach minimaler Energie und das Streben nach maximaler Unordnung dieselbe Richtung.",
        "fr": "Dans les réactions d'équilibre, la tendance à l'énergie minimale et la tendance au désordre maximal favorisent le même sens.",
        "ru": "В равновесных реакциях стремление к минимуму энергии и стремление к максимуму неупорядоченности благоприятствуют одному и тому же направлению.",
        "ar": "في تفاعلات الاتزان يكون الميل نحو أقل طاقة والميل نحو أقصى عشوائية في الاتجاه نفسه.",
        "zh": "在平衡反应中，趋向最低能量与趋向最大混乱度这两种倾向指向同一方向。",
        "ku": "Di reaksiyonên hevsengiyê de meyla enerjiya kêmtirîn û meyla bêrêziya herî zêde piştgiriya heman aliyî dikin."
      },
      "whyTrapIsFalse": {
        "tr": "Gözlenebilir bir denge karışımı, minimum enerji ve maksimum düzensizlik eğilimleri zıt yönlerde olduğunda bu iki eğilimin dengelenmesiyle oluşur. İki eğilim de ürünler yönündeyse denge sabiti çok büyüktür ve olay pratikte tamamen ürünler yönünde ilerler.",
        "en": "An observable equilibrium mixture forms when the tendencies toward minimum energy and maximum disorder point in opposite directions and balance each other. If both favour the products, the equilibrium constant is very large and the process goes practically to completion.",
        "de": "Ein beobachtbares Gleichgewichtsgemisch entsteht, wenn das Streben nach minimaler Energie und nach maximaler Unordnung entgegengesetzt wirken und sich ausgleichen. Begünstigen beide die Produkte, ist die Gleichgewichtskonstante sehr groß und der Vorgang läuft praktisch vollständig ab.",
        "fr": "Un mélange à l'équilibre observable s'établit lorsque les tendances à l'énergie minimale et au désordre maximal sont opposées et se compensent. Si les deux favorisent les produits, la constante d'équilibre est très grande et la transformation est pratiquement totale.",
        "ru": "Наблюдаемая равновесная смесь образуется, когда стремление к минимуму энергии и стремление к максимуму неупорядоченности направлены противоположно и уравновешивают друг друга. Если оба благоприятствуют продуктам, константа равновесия очень велика и процесс практически идёт до конца.",
        "ar": "يتكون خليط اتزان ملحوظ عندما يكون الميل نحو أقل طاقة والميل نحو أقصى عشوائية في اتجاهين متعاكسين ويتوازنان. أما إذا كان كلاهما في صالح النواتج فإن ثابت الاتزان يكون كبيرًا جدًّا ويكتمل التفاعل عمليًّا.",
        "zh": "只有当趋向最低能量与趋向最大混乱度两种倾向方向相反、相互抵消时，才会形成可观察到的平衡混合物；若两者都有利于生成物，平衡常数极大，过程实际上进行到底。",
        "ku": "Tevliheviyeke hevsengiyê ya ku tê dîtin dema ku meyla enerjiya kêmtirîn û meyla bêrêziya herî zêde li aliyên dijber in û hev hevseng dikin çêdibe. Heke her du jî alîgirê hilberan bin, sabîta hevsengiyê pir mezin e û bûyer bi pratîkî heta dawiyê diçe."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u18-c01",
      "conceptA": {
        "tr": "Kp",
        "en": "Kp",
        "de": "Kp",
        "fr": "Kp",
        "ru": "Kp",
        "ar": "Kp",
        "zh": "Kp",
        "ku": "Kp"
      },
      "conceptB": {
        "tr": "Kc",
        "en": "Kc",
        "de": "Kc",
        "fr": "Kc",
        "ru": "Kc",
        "ar": "Kc",
        "zh": "Kc",
        "ku": "Kc"
      },
      "distinction": {
        "tr": "Kp, gazların dengedeki kısmi basınçlarıyla yazılan denge sabitidir; Kc ise molar derişimlerle yazılır. Kc, (RT)^Δn ile çarpılırsa Kp bulunur.",
        "en": "Kp is the equilibrium constant written with the equilibrium partial pressures of the gases, whereas Kc is written with molar concentrations. Multiplying Kc by (RT)^Δn gives Kp.",
        "de": "Kp ist die Gleichgewichtskonstante, die mit den Gleichgewichts-Partialdrücken der Gase formuliert wird, während Kc mit den Stoffmengenkonzentrationen formuliert wird. Multipliziert man Kc mit (RT)^Δn, erhält man Kp.",
        "fr": "Kp est la constante d'équilibre écrite avec les pressions partielles des gaz à l'équilibre, tandis que Kc s'écrit avec les concentrations molaires. En multipliant Kc par (RT)^Δn, on obtient Kp.",
        "ru": "Kp — константа равновесия, выраженная через равновесные парциальные давления газов; Kc выражается через молярные концентрации. Умножив Kc на (RT)^Δn, получают Kp.",
        "ar": "Kp هو ثابت الاتزان المكتوب بدلالة الضغوط الجزئية للغازات عند الاتزان، أما Kc فيُكتب بدلالة التراكيز المولارية. وبضرب Kc في (RT)^Δn نحصل على Kp.",
        "zh": "Kp是用各气体的平衡分压表示的平衡常数；而Kc用物质的量浓度表示。Kc乘以(RT)^Δn即得Kp。",
        "ku": "Kp ew sabîta hevsengiyê ye ku bi zextên parçeyî yên gazan ên di hevsengiyê de tê nivîsandin; Kc jî bi tîrbûnên molar tê nivîsandin. Heke Kc bi (RT)^Δn were pirkirin, Kp tê dîtin."
      }
    },
    {
      "id": "u18-c02",
      "conceptA": {
        "tr": "Sıcaklık Değişimi",
        "en": "Temperature Change",
        "de": "Temperaturänderung",
        "fr": "Variation de température",
        "ru": "Изменение температуры",
        "ar": "تغيّر درجة الحرارة",
        "zh": "温度变化",
        "ku": "Guherîna Germahiyê"
      },
      "conceptB": {
        "tr": "Basınç Değişimi",
        "en": "Pressure Change",
        "de": "Druckänderung",
        "fr": "Variation de pression",
        "ru": "Изменение давления",
        "ar": "تغيّر الضغط",
        "zh": "压强变化",
        "ku": "Guherîna Zextê"
      },
      "distinction": {
        "tr": "Sıcaklık değişimi hem dengeyi kaydırır hem de Kc'nin değerini değiştirir; basınç değişimi ise dengeyi gaz mol sayısına göre kaydırabilir, ancak Kc'yi değiştirmez.",
        "en": "A temperature change both shifts the equilibrium and changes the value of Kc; a pressure change may shift the equilibrium according to the numbers of gas moles, but it does not change Kc.",
        "de": "Eine Temperaturänderung verschiebt das Gleichgewicht und verändert zugleich den Wert von Kc; eine Druckänderung kann das Gleichgewicht je nach Gasmolzahlen verschieben, verändert Kc aber nicht.",
        "fr": "Une variation de température déplace l'équilibre et modifie aussi la valeur de Kc ; une variation de pression peut déplacer l'équilibre selon les nombres de moles de gaz, mais ne modifie pas Kc.",
        "ru": "Изменение температуры смещает равновесие и меняет значение Kc; изменение давления может сместить равновесие (в зависимости от числа молей газов), но Kc не меняет.",
        "ar": "تغيّر درجة الحرارة يزيح الاتزان ويغيّر قيمة Kc أيضًا؛ أما تغيّر الضغط فقد يزيح الاتزان تبعًا لعدد مولات الغازات لكنه لا يغيّر Kc.",
        "zh": "温度变化既使平衡移动，又改变 Kc 的数值；而压强变化可能根据气体物质的量使平衡移动，但不改变 Kc。",
        "ku": "Guherîna germahiyê hem hevsengiyê dikişîne hem jî nirxa Kc diguherîne; guherîna zextê dikare li gorî hejmara molên gazê hevsengiyê bikişîne, lê Kc naguherîne."
      }
    },
    {
      "id": "u18-c03",
      "conceptA": {
        "tr": "Tepkime Hızı",
        "en": "Reaction Rate",
        "de": "Reaktionsgeschwindigkeit",
        "fr": "Vitesse de réaction",
        "ru": "Скорость реакции",
        "ar": "سرعة التفاعل",
        "zh": "反应速率",
        "ku": "Leza Reaksiyonê"
      },
      "conceptB": {
        "tr": "Denge Sabitinin Büyüklüğü (Kc)",
        "en": "Magnitude of the Equilibrium Constant (Kc)",
        "de": "Größe der Gleichgewichtskonstante (Kc)",
        "fr": "Valeur de la constante d’équilibre (Kc)",
        "ru": "Величина константы равновесия (Kc)",
        "ar": "مقدار ثابت الاتزان (Kc)",
        "zh": "平衡常数(Kc)的大小",
        "ku": "Mezinahiya Sabîta Hevsengiyê (Kc)"
      },
      "distinction": {
        "tr": "Tepkime hızı aktifleşme enerjisine, sıcaklığa ve katalizöre bağlıdır ve dengeye ne kadar sürede ulaşılacağını belirler; Kc'nin büyüklüğü ise yalnızca dengede ürünlerin mi girenlerin mi baskın olduğunu gösterir.",
        "en": "The reaction rate depends on activation energy, temperature and catalyst and determines how quickly equilibrium is reached; the magnitude of Kc only shows whether products or reactants dominate at equilibrium.",
        "de": "Die Reaktionsgeschwindigkeit hängt von Aktivierungsenergie, Temperatur und Katalysator ab und bestimmt, wie schnell das Gleichgewicht erreicht wird; die Größe von Kc zeigt dagegen nur, ob im Gleichgewicht die Produkte oder die Edukte überwiegen.",
        "fr": "La vitesse de réaction dépend de l'énergie d'activation, de la température et du catalyseur et détermine en combien de temps l'équilibre est atteint ; la valeur de Kc indique seulement si les produits ou les réactifs prédominent à l'équilibre.",
        "ru": "Скорость реакции зависит от энергии активации, температуры и катализатора и определяет, как быстро достигается равновесие; величина константы равновесия (Kc) показывает лишь, что преобладает в равновесии — продукты или реагенты.",
        "ar": "سرعة التفاعل مقدار يعتمد على طاقة التنشيط ودرجة الحرارة والعامل الحفاز، ويحدّد زمن الوصول إلى الاتزان؛ أما مقدار ثابت الاتزان (Kc) فيدل فقط على ما إذا كانت النواتج أم المتفاعلات هي السائدة عند الاتزان.",
        "zh": "反应速率取决于活化能、温度和催化剂，决定多快达到平衡；而平衡常数(Kc)的大小只说明平衡时是生成物还是反应物占优势。",
        "ku": "Leza reaksiyonê bi enerjiya aktîvasyonê, germahî û katalîzorê ve girêdayî ye û diyar dike ka sîstem di çiqas demê de digihîje hevsengiyê; mezinahiya sabîta hevsengiyê (Kc) tenê nîşan dide ka di hevsengiyê de hilber an reaktant serdest in."
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
        "zh": "浓度商(Qc)",
        "ku": "Kerta Hevsengiyê (Qc)"
      },
      "conceptB": {
        "tr": "Denge Sabiti (Kc)",
        "en": "Equilibrium Constant (Kc)",
        "de": "Gleichgewichtskonstante (Kc)",
        "fr": "Constante d'équilibre (Kc)",
        "ru": "Константа равновесия (Kc)",
        "ar": "ثابت الاتزان (Kc)",
        "zh": "平衡常数(Kc)",
        "ku": "Sabîta Hevsengiyê (Kc)"
      },
      "distinction": {
        "tr": "Qc, herhangi bir andaki derişimlerle denge bağıntısından hesaplanır; Kc'ye eşitse sistem dengededir, Kc'den küçükse tepkime ürünler yönüne, büyükse girenler yönüne ilerler.",
        "en": "Qc is calculated from the equilibrium expression using the concentrations at any moment; if it equals Kc the system is at equilibrium, if it is smaller than Kc the reaction proceeds toward the products, and if larger, toward the reactants.",
        "de": "Qc wird mit den Konzentrationen zu einem beliebigen Zeitpunkt aus dem Gleichgewichtsausdruck berechnet; ist es gleich Kc, befindet sich das System im Gleichgewicht, ist es kleiner als Kc, läuft die Reaktion in Richtung der Produkte, ist es größer, in Richtung der Edukte.",
        "fr": "Qc se calcule à partir de l'expression de la constante d'équilibre avec les concentrations à un instant quelconque ; s'il est égal à Kc le système est à l'équilibre, s'il est inférieur à Kc la réaction évolue vers les produits, et s'il est supérieur, vers les réactifs.",
        "ru": "Коэффициент реакции (Qc) вычисляют по выражению константы равновесия, подставляя концентрации в произвольный момент времени; если эта величина равна Kc, система находится в равновесии, если меньше Kc — реакция идёт в сторону продуктов, если больше — в сторону реагентов.",
        "ar": "حاصل التفاعل (Qc) يُحسب من تعبير الاتزان باستخدام التراكيز في أي لحظة؛ فإذا ساوى ثابت الاتزان (Kc) كان النظام في حالة اتزان، وإذا كان أصغر منه سار التفاعل نحو النواتج، وإذا كان أكبر منه سار نحو المتفاعلات.",
        "zh": "浓度商(Qc)是把任意时刻的各浓度代入表达式算出的值；而平衡常数(Kc)是反应达到限度时各浓度代入表达式算出的值。前者等于后者时反应已达限度，小于后者时反应向正反应方向进行，大于后者时向逆反应方向进行。",
        "ku": "Kerta hevsengiyê bi tîrbûnên her kêliyekê ji hevkêşeya hevsengiyê tê hesibandin; heke wekhevî Kc be sîstem di hevsengiyê de ye, heke ji Kc piçûktir be reaksiyon ber bi hilberan ve, heke mezintir be ber bi reaktantan ve diçe."
      }
    },
    {
      "id": "u18-c05",
      "conceptA": {
        "tr": "Homojen Denge",
        "en": "Homogeneous Equilibrium",
        "de": "Homogenes Gleichgewicht",
        "fr": "Équilibre homogène",
        "ru": "Гомогенное равновесие",
        "ar": "الاتزان المتجانس",
        "zh": "均相平衡",
        "ku": "Hevsengiya Homojen"
      },
      "conceptB": {
        "tr": "Heterojen Denge",
        "en": "Heterogeneous Equilibrium",
        "de": "Heterogenes Gleichgewicht",
        "fr": "Équilibre hétérogène",
        "ru": "Гетерогенное равновесие",
        "ar": "الاتزان غير المتجانس",
        "zh": "非均相平衡",
        "ku": "Hevsengiya Heterojen"
      },
      "distinction": {
        "tr": "Homojen dengede tüm girenler ve ürünler aynı fazdadır; heterojen dengede ise maddeler en az iki farklı fazda bulunur (ör. katı ve gaz).",
        "en": "In a homogeneous equilibrium all reactants and products are in the same phase; in a heterogeneous equilibrium the substances are in at least two different phases (e.g. solid and gas).",
        "de": "Homogenes Gleichgewicht: Alle Edukte und Produkte liegen in derselben Phase vor; heterogenes Gleichgewicht: Die Stoffe liegen in mindestens zwei verschiedenen Phasen vor (z. B. fest und gasförmig).",
        "fr": "Équilibre homogène : tous les réactifs et produits sont dans la même phase ; équilibre hétérogène : les substances se trouvent dans au moins deux phases différentes (p. ex. solide et gaz).",
        "ru": "Гомогенное равновесие — равновесие, в котором все реагенты и продукты находятся в одной фазе; гетерогенное равновесие — равновесие с участием веществ как минимум двух разных фаз (например, твёрдой и газовой).",
        "ar": "في الاتزان المتجانس تكون جميع المتفاعلات والنواتج في الطور نفسه؛ أما في الاتزان غير المتجانس فتوجد المواد في طورين مختلفين على الأقل (مثل الصلب والغاز).",
        "zh": "均相平衡中所有反应物和生成物处于同一相；非均相平衡中各物质至少处于两个不同的相（如固相和气相）。",
        "ku": "Di hevsengiya homojen de hemû reaktant û hilber di heman fazê de ne; di hevsengiya heterojen de made herî kêm di du fazên cuda de ne (mînak hişk û gaz)."
      }
    },
    {
      "id": "u18-c06",
      "conceptA": {
        "tr": "Katalizör Eklenmesi",
        "en": "Adding a Catalyst",
        "de": "Zugabe eines Katalysators",
        "fr": "Ajout d’un catalyseur",
        "ru": "Добавление катализатора",
        "ar": "إضافة عامل حفاز",
        "zh": "加入催化剂",
        "ku": "Lêzêdekirina Katalîzorê"
      },
      "conceptB": {
        "tr": "Girenlerden Birinin Eklenmesi",
        "en": "Adding One of the Reactants",
        "de": "Zugabe eines Edukts",
        "fr": "Ajout d’un des réactifs",
        "ru": "Добавление одного из реагентов",
        "ar": "إضافة إحدى المواد المتفاعلة",
        "zh": "加入一种反应物",
        "ku": "Lêzêdekirina Reaktantekê"
      },
      "distinction": {
        "tr": "Katalizör eklenmesi dengeyi kaydırmaz ve madde miktarlarını değiştirmez, yalnızca dengeye ulaşma süresini kısaltır; girenlerden birinin eklenmesi ise Qc'yi Kc'den küçük yapar ve dengeyi ürünler yönüne kaydırır. Sıcaklık sabitse ikisinde de Kc değişmez.",
        "en": "Adding a catalyst does not shift the equilibrium or change the amounts of substances; it only shortens the time needed to reach equilibrium. Adding one of the reactants makes Qc smaller than Kc and shifts the equilibrium toward the products. At constant temperature Kc stays the same in both cases.",
        "de": "Die Zugabe eines Katalysators verschiebt das Gleichgewicht nicht und ändert die Stoffmengen nicht, sie verkürzt nur die Einstellzeit; die Zugabe eines Edukts macht Qc kleiner als Kc und verschiebt das Gleichgewicht zu den Produkten. Bei konstanter Temperatur bleibt Kc in beiden Fällen gleich.",
        "fr": "L’ajout d’un catalyseur ne déplace pas l’équilibre et ne modifie pas les quantités de matière, il raccourcit seulement le temps nécessaire pour l’atteindre ; l’ajout d’un des réactifs rend Qc inférieur à Kc et déplace l’équilibre vers les produits. À température constante, Kc reste la même dans les deux cas.",
        "ru": "Добавление катализатора не смещает равновесие и не меняет количества веществ, а лишь сокращает время его достижения; добавление одного из реагентов делает Qc меньше Kc и смещает равновесие к продуктам. При постоянной температуре Kc в обоих случаях не меняется.",
        "ar": "في حالة إضافة عامل حفاز لا ينزاح الاتزان ولا تتغير كميات المواد، بل يقصر زمن الوصول إليه فقط؛ أما في حالة إضافة إحدى المواد المتفاعلة فيصبح Qc أصغر من Kc وينزاح الاتزان نحو النواتج. وعند ثبات درجة الحرارة لا تتغير Kc في الحالتين.",
        "zh": "加入催化剂不使平衡移动，也不改变各物质的量，只缩短达到平衡的时间；而加入一种反应物使 Qc 小于 Kc，平衡向生成物方向移动。温度不变时，两种情况下 Kc 都不变。",
        "ku": "Lêzêdekirina katalîzorê hevsengiyê nakişîne û mîqdara madeyan naguherîne, tenê dema gihîştina hevsengiyê kurt dike; lêzêdekirina reaktantekê Qc ji Kc piçûktir dike û hevsengiyê ber bi hilberan ve dikişîne. Heke germahî sabît be, di her duyan de jî Kc naguhere."
      }
    },
    {
      "id": "u18-c07",
      "conceptA": {
        "tr": "Hacmin Küçültülmesi",
        "en": "Decreasing the Volume",
        "de": "Volumenverkleinerung",
        "fr": "Diminution du volume",
        "ru": "Уменьшение объёма",
        "ar": "تصغير الحجم",
        "zh": "减小体积",
        "ku": "Kêmkirina Qebareyê"
      },
      "conceptB": {
        "tr": "Sabit Hacimde Soy Gaz Eklenmesi",
        "en": "Adding a Noble Gas at Constant Volume",
        "de": "Edelgaszugabe bei konstantem Volumen",
        "fr": "Ajout d’un gaz noble à volume constant",
        "ru": "Добавление благородного газа при постоянном объёме",
        "ar": "إضافة غاز نبيل عند ثبوت الحجم",
        "zh": "恒容下加入稀有气体",
        "ku": "Lêzêdekirina Gaza Esîl di Qebareya Sabît de"
      },
      "distinction": {
        "tr": "Hacmin küçültülmesi tüm gazların derişimini artırır ve dengeyi gaz mol sayısı az olan tarafa kaydırır; sabit hacimde soy gaz eklenmesi ise tepkimedeki gazların kısmi basınçlarını ve dengeyi değiştirmez.",
        "en": "Decreasing the volume raises the concentrations of all the gases and shifts the equilibrium toward the side with fewer moles of gas; adding a noble gas at constant volume changes neither the partial pressures of the reacting gases nor the equilibrium.",
        "de": "Eine Volumenverkleinerung erhöht die Konzentrationen aller Gase und verschiebt das Gleichgewicht zur Seite mit weniger Gasmolen; die Zugabe eines Edelgases bei konstantem Volumen ändert weder die Partialdrücke der reagierenden Gase noch das Gleichgewicht.",
        "fr": "La diminution du volume augmente les concentrations de tous les gaz et déplace l'équilibre vers le côté comportant le moins de moles de gaz ; l'ajout d'un gaz noble à volume constant ne modifie ni les pressions partielles des gaz réagissants ni l'équilibre.",
        "ru": "Уменьшение объёма повышает концентрации всех газов и смещает равновесие в сторону меньшего числа молей газа; добавление благородного газа при постоянном объёме не изменяет ни парциальные давления реагирующих газов, ни равновесие.",
        "ar": "تصغير الحجم يزيد تراكيز جميع الغازات ويزيح الاتزان نحو الجانب الأقل في عدد مولات الغاز؛ أما عند إضافة غاز نبيل عند ثبوت الحجم فلا تتغير الضغوط الجزئية للغازات المتفاعلة ولا الاتزان.",
        "zh": "减小体积使所有气体的浓度增大，平衡向气体物质的量较少的一侧移动；而恒容下加入稀有气体不改变参加反应的气体的分压，也不使平衡移动。",
        "ku": "Kêmkirina qebareyê tîrbûna hemû gazan zêde dike û hevsengiyê ber bi aliyê ku hejmara molên gazê kêmtir e ve dikişîne; lêzêdekirina gaza esîl di qebareya sabît de zextên parçeyî yên gazên reaksiyonê û hevsengiyê naguherîne."
      }
    },
    {
      "id": "u18-c08",
      "conceptA": {
        "tr": "Dinamik Denge",
        "en": "Dynamic Equilibrium",
        "de": "Dynamisches Gleichgewicht",
        "fr": "Équilibre dynamique",
        "ru": "Динамическое равновесие",
        "ar": "الاتزان الديناميكي",
        "zh": "动态平衡",
        "ku": "Hevsengiya Dînamîk"
      },
      "conceptB": {
        "tr": "Statik Denge",
        "en": "Static Equilibrium",
        "de": "Statisches Gleichgewicht",
        "fr": "Équilibre statique",
        "ru": "Статическое равновесие",
        "ar": "الاتزان الساكن",
        "zh": "静态平衡",
        "ku": "Hevsengiya Statîk"
      },
      "distinction": {
        "tr": "Dinamik dengede ileri ve geri tepkimeler eşit hızla sürer, bu yüzden derişimler sabit kalır (kimyasal denge böyledir); statik dengede ise olay tamamen durmuştur.",
        "en": "In a dynamic equilibrium the forward and reverse reactions continue at equal rates, so the concentrations stay constant (chemical equilibrium is of this kind); in a static equilibrium the process has stopped completely.",
        "de": "Dynamisches Gleichgewicht: Hin- und Rückreaktion laufen mit gleicher Geschwindigkeit weiter, daher bleiben die Konzentrationen konstant (so ist das chemische Gleichgewicht); statisches Gleichgewicht: Der Vorgang ist vollständig zum Stillstand gekommen.",
        "fr": "Équilibre dynamique : les réactions directe et inverse se poursuivent à la même vitesse, de sorte que les concentrations restent constantes (c'est le cas de l'équilibre chimique) ; équilibre statique : le phénomène s'est complètement arrêté.",
        "ru": "Динамическое равновесие — состояние, в котором прямая и обратная реакции идут с одинаковой скоростью, поэтому концентрации остаются постоянными (именно таково химическое равновесие); статическое равновесие — состояние, в котором процесс полностью прекратился.",
        "ar": "في الاتزان الديناميكي يستمر التفاعلان الأمامي والعكسي بالسرعة نفسها فتبقى التراكيز ثابتة (وهكذا هو الاتزان الكيميائي)؛ أما في الاتزان الساكن فتكون العملية قد توقفت تمامًا.",
        "zh": "动态平衡中正、逆反应以相同速率持续进行，因此浓度保持不变（化学平衡属于这种）；而静态平衡中过程完全停止。",
        "ku": "Di hevsengiya dînamîk de reaksiyonên pêşve û paşve bi lezeke wekhev berdewam dikin, ji ber vê yekê tîrbûn sabît dimînin (hevsengiya kîmyewî wisa ye); di hevsengiya statîk de bûyer bi tevahî rawestiyaye."
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
        "ru": "Анализ смещения равновесия по принципу Ле Шателье",
        "ar": "تحليل تأثير مبدأ لوشاتلييه",
        "zh": "用勒夏特列原理分析平衡移动的步骤",
        "ku": "Gavên Analîza Bandora Le Chatelier"
      },
      "steps": [
        {
          "tr": "Yapılan dış etkiyi belirle (sıcaklık, derişim, hacim)",
          "en": "Determine the external impact made (temperature, concentration, volume)",
          "de": "Bestimmen Sie die äußere Einwirkung (Temperatur, Konzentration, Volumen)",
          "fr": "Déterminer l'impact externe effectué (température, concentration, volume)",
          "ru": "Определите внешнее воздействие (температура, концентрация, объём)",
          "ar": "حدّد المؤثر الخارجي (درجة الحرارة، التركيز، الحجم)",
          "zh": "确定所施加的外界影响（温度、浓度、体积）",
          "ku": "Bandora derveyî ya hatiye kirin diyar bike (germahî, tîrbûn, qebare)"
        },
        {
          "tr": "Sistemin bu etkiyi azaltmak için ne yapması gerektiğini bul (ör. eklenen maddeyi harcamak)",
          "en": "Work out what the system must do to reduce that change (e.g. consume the added substance)",
          "de": "Überlege, was das System tun muss, um diese Störung abzuschwächen (z. B. den zugegebenen Stoff verbrauchen)",
          "fr": "Trouver ce que le système doit faire pour atténuer cette perturbation (p. ex. consommer l'espèce ajoutée)",
          "ru": "Выясните, что должна сделать система, чтобы ослабить это воздействие (например, израсходовать добавленное вещество)",
          "ar": "حدّد ما يجب أن يفعله النظام لتقليل أثر هذا التغيير (مثل استهلاك المادة المضافة)",
          "zh": "找出体系为削弱该影响必须做什么（如消耗加入的物质）",
          "ku": "Bibîne ka sîstem ji bo kêmkirina vê bandorê divê çi bike (mînak xerckirina madeya lêzêdekirî)"
        },
        {
          "tr": "Sistemin kayacağı yönü belirle (ürünler veya girenler)",
          "en": "Determine the direction in which the system shifts (products or reactants)",
          "de": "Bestimme die Richtung, in die sich das System verschiebt (Produkte oder Edukte)",
          "fr": "Déterminer le sens dans lequel le système se déplace (produits ou réactifs)",
          "ru": "Определите направление, в котором смещается система (к продуктам или к реагентам)",
          "ar": "حدّد الاتجاه الذي ينزاح إليه النظام (النواتج أو المتفاعلات)",
          "zh": "确定体系移动的方向（生成物或反应物）",
          "ku": "Aliyê ku sîstem ber bi wî ve diçe diyar bike (hilber an reaktant)"
        },
        {
          "tr": "Son olarak Kc'nin değişip değişmediğini kontrol et (yalnızca sıcaklık değişirse değişir)",
          "en": "Finally, check whether Kc has changed (it changes only if the temperature changes)",
          "de": "Prüfe zum Schluss, ob sich Kc geändert hat (nur bei einer Temperaturänderung)",
          "fr": "Enfin, vérifier si Kc a changé (elle ne change que si la température change)",
          "ru": "В конце проверьте, изменилась ли Kc (она меняется только при изменении температуры)",
          "ar": "أخيرًا تحقّق مما إذا كانت Kc قد تغيّرت (لا تتغيّر إلا بتغيّر درجة الحرارة)",
          "zh": "最后检查Kc是否改变（只有温度改变时才改变）",
          "ku": "Di dawiyê de kontrol bike ka Kc guheriye an na (tenê heke germahî biguhere diguhere)"
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
        "ru": "Расчёт константы равновесия (Kc)",
        "ar": "حساب ثابت الاتزان (Kc)",
        "zh": "平衡常数(Kc)的计算",
        "ku": "Hesabkirina Sabîta Hevsengiyê (Kc)"
      },
      "steps": [
        {
          "tr": "Başlangıç mol sayıları ve kap hacmi yazılır",
          "en": "Initial mole numbers and container volume are written.",
          "de": "Anfängliche Molzahlen und Behältervolumen werden angegeben.",
          "fr": "Les nombres de moles initiaux et le volume du récipient sont écrits",
          "ru": "Записывают начальные количества веществ (моль) и объём сосуда",
          "ar": "تُكتب أعداد المولات الابتدائية وحجم الوعاء",
          "zh": "写出起始物质的量和容器体积",
          "ku": "Hejmarên molan ên destpêkê û qebareya firaxê tên nivîsandin"
        },
        {
          "tr": "Tepkime katsayılarına göre değişim satırı doldurulur",
          "en": "The change row is filled in according to the reaction coefficients",
          "de": "Die Änderungszeile wird gemäß den Reaktionskoeffizienten ausgefüllt",
          "fr": "La ligne de variation est remplie selon les coefficients de la réaction",
          "ru": "Заполняют строку изменений в соответствии с коэффициентами реакции",
          "ar": "يُملأ سطر التغيّر وفق معاملات التفاعل",
          "zh": "根据化学计量数填写变化量一行",
          "ku": "Rêza guherînê li gorî hevberên reaksiyonê tê dagirtin"
        },
        {
          "tr": "Denge anındaki mol sayıları hacme bölünerek derişimler bulunur",
          "en": "Concentrations are found by dividing the number of moles at equilibrium by the volume.",
          "de": "Konzentrationen werden ermittelt, indem die Anzahl der Mol im Gleichgewicht durch das Volumen dividiert wird.",
          "fr": "Les concentrations sont obtenues en divisant le nombre de moles à l'équilibre par le volume.",
          "ru": "Делят равновесные количества веществ на объём и находят концентрации",
          "ar": "تُحسب التراكيز بقسمة أعداد المولات عند الاتزان على الحجم",
          "zh": "用平衡时的物质的量除以体积，求出各物质的浓度",
          "ku": "Hejmarên molan ên di hevsengiyê de li ser qebareyê tên dabeşkirin û tîrbûn tên dîtin"
        },
        {
          "tr": "Kc = [Ürünler] / [Girenler] bağıntısında yerine konur",
          "en": "They are substituted into Kc = [Products] / [Reactants]",
          "de": "Sie werden in Kc = [Produkte] / [Edukte] eingesetzt",
          "fr": "On les remplace dans Kc = [Produits] / [Réactifs]",
          "ru": "Подставляют их в выражение Kc = [Продукты] / [Реагенты]",
          "ar": "تُعوَّض في العلاقة Kc = [النواتج] / [المتفاعلات]",
          "zh": "代入 Kc = [生成物] / [反应物]",
          "ku": "Tîrbûn di hevkêşeya Kc = [Hilber] / [Reaktant] de tên bicihkirin"
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
        "ru": "Влияние температуры на равновесие (принцип Ле Шателье)",
        "ar": "تأثير درجة الحرارة وفق مبدأ لوشاتلييه",
        "zh": "勒夏特列原理：温度的影响",
        "ku": "Bandora Germahiyê li gorî Le Chatelier"
      },
      "steps": [
        {
          "tr": "Tepkimenin endotermik veya ekzotermik olduğu belirlenir",
          "en": "Determine whether the reaction is endothermic or exothermic",
          "de": "Bestimmen Sie, ob die Reaktion endotherm oder exotherm ist",
          "fr": "Déterminer si la réaction est endothermique ou exothermique",
          "ru": "Определяют, является ли реакция эндотермической или экзотермической",
          "ar": "يُحدَّد ما إذا كان التفاعل ماصًا للحرارة أم طاردًا لها",
          "zh": "确定反应是吸热反应还是放热反应",
          "ku": "Tê diyarkirin ka reaksiyon endotermîk e an ekzotermîk e"
        },
        {
          "tr": "Isı, ekzotermik tepkimede ürünler, endotermik tepkimede girenler tarafına yazılır",
          "en": "Heat is written on the product side for an exothermic reaction and on the reactant side for an endothermic reaction",
          "de": "Wärme wird bei einer exothermen Reaktion auf der Produktseite, bei einer endothermen Reaktion auf der Eduktseite geschrieben",
          "fr": "La chaleur est écrite du côté des produits pour une réaction exothermique et du côté des réactifs pour une réaction endothermique",
          "ru": "Теплоту записывают в правой части (среди продуктов) для экзотермической реакции и в левой части (среди реагентов) — для эндотермической",
          "ar": "تُكتب الحرارة في جهة النواتج في التفاعل الطارد للحرارة، وفي جهة المتفاعلات في التفاعل الماص للحرارة",
          "zh": "放热反应把热量写在生成物一侧，吸热反应把热量写在反应物一侧",
          "ku": "Germ di reaksiyona ekzotermîk de li aliyê hilberan, di ya endotermîk de li aliyê reaktantan tê nivîsandin"
        },
        {
          "tr": "Sıcaklık artırıldığında denge, ısının harcandığı (endotermik) yöne kayar",
          "en": "When the temperature is raised, the equilibrium shifts in the direction that consumes heat (the endothermic direction)",
          "de": "Bei Temperaturerhöhung verschiebt sich das Gleichgewicht in die wärmeverbrauchende (endotherme) Richtung",
          "fr": "Quand la température augmente, l'équilibre se déplace dans le sens qui consomme de la chaleur (sens endothermique)",
          "ru": "При повышении температуры равновесие смещается в сторону поглощения теплоты (в эндотермическом направлении)",
          "ar": "عند رفع درجة الحرارة ينزاح الاتزان في الاتجاه الذي يستهلك الحرارة (الاتجاه الماص للحرارة)",
          "zh": "升高温度时，平衡向吸收热量的方向（吸热方向）移动",
          "ku": "Dema germahî tê bilindkirin, hevsengî ber bi aliyê ku germ lê tê xerckirin (aliyê endotermîk) ve diçe"
        },
        {
          "tr": "Denge ürünlere kaydıysa Kc artar, girenlere kaydıysa Kc azalır",
          "en": "If the equilibrium shifts toward the products Kc increases; if it shifts toward the reactants Kc decreases",
          "de": "Verschiebt sich das Gleichgewicht zu den Produkten, steigt Kc; verschiebt es sich zu den Edukten, sinkt Kc",
          "fr": "Si l'équilibre se déplace vers les produits, Kc augmente ; s'il se déplace vers les réactifs, Kc diminue",
          "ru": "Если равновесие сместилось к продуктам, Kc увеличивается; если к реагентам — Kc уменьшается",
          "ar": "إذا انزاح الاتزان نحو النواتج تزداد Kc، وإذا انزاح نحو المتفاعلات تقل Kc",
          "zh": "若平衡向生成物方向移动，Kc增大；若向反应物方向移动，Kc减小",
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
        "ru": "Изменение объёма и влияние давления",
        "ar": "تغيّر الحجم وتأثير الضغط",
        "zh": "体积变化与压强的影响",
        "ku": "Guherîna Qebareyê û Bandora Zextê"
      },
      "steps": [
        {
          "tr": "Sabit sıcaklıkta kabın hacmi küçültülür",
          "en": "At constant temperature, the volume of the container is reduced",
          "de": "Bei konstanter Temperatur verringert sich das Volumen des Behälters",
          "fr": "A température constante, le volume du récipient est réduit",
          "ru": "При постоянной температуре уменьшают объём сосуда",
          "ar": "يُصغَّر حجم الوعاء عند درجة حرارة ثابتة",
          "zh": "恒温下减小容器的体积",
          "ku": "Di germahiya sabît de qebareya firaxê tê kêmkirin"
        },
        {
          "tr": "Tüm gazların kısmi basınçları ve derişimleri aniden artar",
          "en": "Partial pressures and concentrations of all gases increase suddenly",
          "de": "Partialdrücke und Konzentrationen aller Gase steigen schlagartig an",
          "fr": "Les pressions partielles et les concentrations de tous les gaz augmentent soudainement",
          "ru": "Парциальные давления и концентрации всех газов скачком возрастают",
          "ar": "تزداد الضغوط الجزئية والتراكيز لجميع الغازات فجأة",
          "zh": "所有气体的分压和浓度突然增大",
          "ku": "Zextên parçeyî û tîrbûnên hemû gazan ji nişka ve zêde dibin"
        },
        {
          "tr": "Sistem gaz mol sayısının az olduğu tarafa kayar",
          "en": "The system shifts to the side with fewer moles of gas.",
          "de": "Das System verschiebt sich auf die Seite mit weniger Gasmolen.",
          "fr": "Le système se déplace du côté avec moins de moles de gaz.",
          "ru": "Равновесие смещается в сторону меньшего числа молей газа",
          "ar": "ينزاح النظام نحو الجهة التي يكون فيها عدد مولات الغاز أقل",
          "zh": "平衡向气体分子数较少的一侧移动",
          "ku": "Sîstem ber bi aliyê ku hejmara molên gazê kêmtir e ve diçe"
        },
        {
          "tr": "Yeni dengede toplam gaz basıncı ilk dengedekinden yüksektir, ancak hacmin küçültüldüğü andaki basınçtan düşüktür",
          "en": "At the new equilibrium the total gas pressure is higher than at the first equilibrium but lower than the pressure right after the volume was reduced",
          "de": "Im neuen Gleichgewicht ist der Gesamtgasdruck höher als im ersten Gleichgewicht, aber niedriger als unmittelbar nach der Volumenverkleinerung",
          "fr": "Au nouvel équilibre, la pression totale des gaz est plus élevée qu’au premier équilibre, mais plus faible que juste après la diminution du volume",
          "ru": "В новом равновесии общее давление газов выше, чем в первом, но ниже, чем сразу после уменьшения объёма",
          "ar": "في الاتزان الجديد يكون الضغط الكلي للغازات أعلى منه في الاتزان الأول، لكنه أقل من الضغط لحظة تصغير الحجم",
          "zh": "新平衡时气体总压高于原平衡，但低于体积刚减小时的压强",
          "ku": "Di hevsengiya nû de zexta giştî ya gazan ji ya hevsengiya yekem bilindtir e, lê ji zexta di kêliya kêmkirina qebareyê de nizimtir e"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u18-twin01",
      "stem": {
        "tr": "N2(g) + 3 H2(g) ⇌ 2 NH3(g)  ΔH = -92 kJ tepkimesi dengedeyken sıcaklık artırılırsa aşağıdakilerden hangisi gerçekleşir?",
        "en": "The reaction N2(g) + 3 H2(g) ⇌ 2 NH3(g), ΔH = -92 kJ, is at equilibrium. Which of the following occurs if the temperature is increased?",
        "de": "Die Reaktion N2(g) + 3 H2(g) ⇌ 2 NH3(g), ΔH = -92 kJ, befindet sich im Gleichgewicht. Was geschieht, wenn die Temperatur erhöht wird?",
        "fr": "La réaction N2(g) + 3 H2(g) ⇌ 2 NH3(g), ΔH = -92 kJ, est à l'équilibre. Que se produit-il si l'on augmente la température ?",
        "ru": "Реакция N2(г) + 3 H2(г) ⇌ 2 NH3(г), ΔH = -92 кДж, находится в равновесии. Что произойдёт при повышении температуры?",
        "ar": "التفاعل N2(g) + 3 H2(g) ⇌ 2 NH3(g)، ΔH = -92 kJ في حالة اتزان. أي مما يلي يحدث إذا رُفعت درجة الحرارة؟",
        "zh": "反应 N2(g) + 3 H2(g) ⇌ 2 NH3(g)，ΔH = -92 kJ 处于平衡状态。若升高温度，会发生下列哪种情况？",
        "ku": "Reaksiyona N2(g) + 3 H2(g) ⇌ 2 NH3(g)  ΔH = -92 kJ di hevsengiyê de ye. Heke germahî were bilindkirin, kîjan ji van pêk tê?"
      },
      "options": [
        {
          "tr": "Denge sabiti (Kc) küçülür",
          "en": "The equilibrium constant (Kc) becomes smaller",
          "de": "Die Gleichgewichtskonstante (Kc) wird kleiner",
          "fr": "La constante d'équilibre (Kc) devient plus petite",
          "ru": "Константа равновесия (Kc) уменьшится",
          "ar": "يصغر ثابت الاتزان (Kc)",
          "zh": "平衡常数(Kc)变小",
          "ku": "Sabîta hevsengiyê (Kc) piçûk dibe"
        },
        {
          "tr": "NH3 gazı derişimi artar",
          "en": "NH3 gas concentration increases",
          "de": "Die NH3-Gaskonzentration steigt",
          "fr": "La concentration de gaz NH3 augmente",
          "ru": "Концентрация NH3 увеличится",
          "ar": "يزداد تركيز غاز NH3",
          "zh": "NH3 的浓度增大",
          "ku": "Tîrbûna gaza NH3 zêde dibe"
        },
        {
          "tr": "Denge ürünler yönüne kayar",
          "en": "Equilibrium shifts towards products",
          "de": "Das Gleichgewicht verschiebt sich in Richtung Produkte",
          "fr": "L’équilibre se déplace vers les produits",
          "ru": "Равновесие сместится в сторону продуктов",
          "ar": "ينزاح الاتزان نحو النواتج",
          "zh": "平衡向正反应方向移动",
          "ku": "Hevsengî ber bi aliyê hilberan ve diçe"
        },
        {
          "tr": "Toplam gaz mol sayısı azalır",
          "en": "The total number of moles of gas decreases",
          "de": "Die Gesamtzahl der Gasmole nimmt ab",
          "fr": "Le nombre total de moles de gaz diminue",
          "ru": "Общее число молей газов уменьшится",
          "ar": "يقل العدد الإجمالي لمولات الغاز",
          "zh": "气体的总物质的量减小",
          "ku": "Hejmara giştî ya molên gazê kêm dibe"
        },
        {
          "tr": "İleri tepkime hızı azalır",
          "en": "The forward reaction rate decreases",
          "de": "Die Geschwindigkeit der Hinreaktion nimmt ab",
          "fr": "La vitesse de la réaction directe diminue",
          "ru": "Скорость прямой реакции уменьшится",
          "ar": "تقل سرعة التفاعل الأمامي",
          "zh": "正反应速率减小",
          "ku": "Leza reaksiyona pêşve kêm dibe"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Tepkime ekzotermiktir (ΔH < 0); sıcaklık artırılınca denge, ısının harcandığı girenler yönüne kayar. Bu yüzden NH3 derişimi azalır, toplam gaz mol sayısı artar ve Kc küçülür. Sıcaklık artışı ileri tepkimeyi de hızlandırır; yalnızca geri tepkime daha çok hızlanır.",
        "en": "The reaction is exothermic (ΔH < 0); when the temperature is raised the equilibrium shifts toward the reactants, the direction that absorbs heat. The NH3 concentration therefore decreases, the total number of gas moles increases and Kc becomes smaller. Heating also speeds up the forward reaction; the reverse reaction is simply accelerated more.",
        "de": "Die Reaktion ist exotherm (ΔH < 0); bei Temperaturerhöhung verschiebt sich das Gleichgewicht in Richtung der Edukte, also in die Wärme verbrauchende Richtung. Daher sinkt die NH3-Konzentration, die Gesamtzahl der Gasmole steigt und Kc wird kleiner. Die Erwärmung beschleunigt auch die Hinreaktion; die Rückreaktion wird lediglich stärker beschleunigt.",
        "fr": "La réaction est exothermique (ΔH < 0) ; quand la température augmente, l'équilibre se déplace vers les réactifs, dans le sens qui absorbe la chaleur. La concentration de NH3 diminue donc, le nombre total de moles de gaz augmente et Kc devient plus petite. Le chauffage accélère aussi la réaction directe ; la réaction inverse est simplement davantage accélérée.",
        "ru": "Реакция экзотермическая (ΔH < 0); при повышении температуры равновесие смещается в сторону реагентов, т. е. в направлении поглощения теплоты. Поэтому концентрация NH3 уменьшается, общее число молей газов растёт, а Kc становится меньше. Нагревание ускоряет и прямую реакцию, просто обратная ускоряется сильнее.",
        "ar": "التفاعل طارد للحرارة (ΔH < 0)؛ وعند رفع درجة الحرارة ينزاح الاتزان نحو المتفاعلات، أي في الاتجاه الماص للحرارة. لذلك يقل تركيز NH3 ويزداد العدد الكلي لمولات الغاز ويصغر Kc. والتسخين يسرّع التفاعل الأمامي أيضًا؛ لكن التفاعل العكسي يتسارع بدرجة أكبر.",
        "zh": "该反应放热(ΔH < 0)；升高温度时平衡向吸热的反应物方向移动。因此NH3浓度减小，气体总物质的量增大，Kc变小。升温也使正反应加快，只是逆反应加快得更多。",
        "ku": "Reaksiyon ekzotermîk e (ΔH < 0); dema germahî tê bilindkirin, hevsengî ber bi aliyê reaktantan ve diçe ku germ lê tê xerckirin. Ji ber vê yekê tîrbûna NH3 kêm dibe, hejmara giştî ya molên gazê zêde dibe û Kc piçûk dibe. Bilindbûna germahiyê reaksiyona pêşve jî bileztir dike; tenê reaksiyona paşve bêtir bilez dibe."
      }
    },
    {
      "id": "u18-twin02",
      "stem": {
        "tr": "Şekildeki grafik, sabit hacimli kapalı bir kapta sabit sıcaklıkta gerçekleşen X(g) ⇌ 2Y(g) tepkimesinde X ve Y derişimlerinin zamanla değişimini göstermektedir. Bu sıcaklıkta tepkimenin derişimler cinsinden denge sabiti (Kc) kaçtır?",
        "en": "The graph shows how the concentrations of X and Y change with time for the reaction X(g) ⇌ 2Y(g) in a closed rigid container at constant temperature. What is the equilibrium constant in terms of concentrations (Kc) at this temperature?",
        "de": "Das Diagramm zeigt die zeitliche Änderung der Konzentrationen von X und Y für die Reaktion X(g) ⇌ 2Y(g) in einem geschlossenen Gefäß mit konstantem Volumen bei konstanter Temperatur. Wie groß ist die Gleichgewichtskonstante Kc bei dieser Temperatur?",
        "fr": "Le graphique montre l'évolution des concentrations de X et de Y au cours du temps pour la réaction X(g) ⇌ 2Y(g) dans un récipient fermé de volume constant à température constante. Quelle est la constante d'équilibre en concentrations (Kc) à cette température ?",
        "ru": "На графике показано изменение концентраций X и Y во времени для реакции X(г) ⇌ 2Y(г) в закрытом сосуде постоянного объёма при постоянной температуре. Чему равна концентрационная константа равновесия Kc при этой температуре?",
        "ar": "يبيّن الرسم البياني تغيّر تركيزي X وY مع الزمن للتفاعل X(g) ⇌ 2Y(g) في وعاء مغلق ثابت الحجم عند درجة حرارة ثابتة. ما ثابت الاتزان بدلالة التراكيز (Kc) عند هذه الدرجة؟",
        "zh": "图中曲线表示在恒温下密闭恒容容器中反应 X(g) ⇌ 2Y(g) 里 X 和 Y 的浓度随时间的变化。该温度下以浓度表示的平衡常数 Kc 是多少？",
        "ku": "Grafîk ji bo reaksiyona X(g) ⇌ 2Y(g) di firaxeke girtî ya bi qebareya sabît û germahiya sabît de guherîna tîrbûnên X û Y li gorî demê nîşan dide. Di vê germahiyê de sabîta hevsengiyê ya bi tîrbûnan (Kc) çend e?"
      },
      "options": [
        {
          "tr": "6,4",
          "en": "6.4",
          "de": "6,4",
          "fr": "6,4",
          "ru": "6,4",
          "ar": "6.4",
          "zh": "6.4",
          "ku": "6,4"
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
          "tr": "1,6",
          "en": "1.6",
          "de": "1,6",
          "fr": "1,6",
          "ru": "1,6",
          "ar": "1.6",
          "zh": "1.6",
          "ku": "1,6"
        },
        {
          "tr": "1,28",
          "en": "1.28",
          "de": "1,28",
          "fr": "1,28",
          "ru": "1,28",
          "ar": "1.28",
          "zh": "1.28",
          "ku": "1,28"
        },
        {
          "tr": "0,125",
          "en": "0.125",
          "de": "0,125",
          "fr": "0,125",
          "ru": "0,125",
          "ar": "0.125",
          "zh": "0.125",
          "ku": "0,125"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Grafikte derişimler 30. saniyeden sonra sabit kalmıştır; denge derişimleri [X] = 0,1 M ve [Y] = 0,8 M'dir (X 0,4 M azalırken Y 0,8 M artmıştır, bu 1 : 2 oranı denkleme uyar). Kc = [Y]^2 / [X] = (0,8)^2 / 0,1 = 0,64 / 0,1 = 6,4. Üs alınmazsa 0,8 / 0,1 = 8; [Y] yerine X'teki azalma (0,4) alınırsa 0,16 / 0,1 = 1,6; başlangıç derişimi [X] = 0,5 kullanılırsa 0,64 / 0,5 = 1,28; oran ters ve üssüz kurulursa 0,1 / 0,8 = 0,125 bulunur.",
        "en": "The concentrations stop changing after 30 s; at equilibrium [X] = 0.1 M and [Y] = 0.8 M (X fell by 0.4 M while Y rose by 0.8 M, matching the 1 : 2 ratio). Kc = [Y]^2 / [X] = (0.8)^2 / 0.1 = 0.64 / 0.1 = 6.4. Forgetting the exponent gives 0.8 / 0.1 = 8; using the decrease of X (0.4) instead of [Y] gives 0.16 / 0.1 = 1.6; using the initial [X] = 0.5 gives 0.64 / 0.5 = 1.28; inverting the ratio without the exponent gives 0.1 / 0.8 = 0.125.",
        "de": "Nach 30 s ändern sich die Konzentrationen nicht mehr; im Gleichgewicht ist [X] = 0,1 M und [Y] = 0,8 M (X nahm um 0,4 M ab, Y um 0,8 M zu – passend zum Verhältnis 1 : 2). Kc = [Y]^2 / [X] = (0,8)^2 / 0,1 = 0,64 / 0,1 = 6,4. Ohne Exponent erhält man 0,8 / 0,1 = 8; mit der Abnahme von X (0,4) statt [Y] 0,16 / 0,1 = 1,6; mit der Anfangskonzentration [X] = 0,5 erhält man 0,64 / 0,5 = 1,28; der umgekehrte Quotient ohne Exponent ergibt 0,1 / 0,8 = 0,125.",
        "fr": "Les concentrations ne varient plus après 30 s ; à l'équilibre [X] = 0,1 M et [Y] = 0,8 M (X a diminué de 0,4 M et Y augmenté de 0,8 M, conformément au rapport 1 : 2). Kc = [Y]^2 / [X] = (0,8)^2 / 0,1 = 0,64 / 0,1 = 6,4. Oublier l'exposant donne 0,8 / 0,1 = 8 ; prendre la diminution de X (0,4) au lieu de [Y] donne 0,16 / 0,1 = 1,6 ; utiliser la concentration initiale [X] = 0,5 donne 0,64 / 0,5 = 1,28 ; inverser le rapport sans exposant donne 0,1 / 0,8 = 0,125.",
        "ru": "После 30 с концентрации перестают меняться; в равновесии [X] = 0,1 M, [Y] = 0,8 M (X убыл на 0,4 M, а Y прибавился на 0,8 M — соотношение 1 : 2 соответствует уравнению). Kc = [Y]^2 / [X] = (0,8)^2 / 0,1 = 0,64 / 0,1 = 6,4. Без показателя степени получается 0,8 / 0,1 = 8; если вместо [Y] взять убыль X (0,4) — 0,16 / 0,1 = 1,6; с начальной концентрацией [X] = 0,5 — 0,64 / 0,5 = 1,28; перевёрнутое отношение без степени даёт 0,1 / 0,8 = 0,125.",
        "ar": "تتوقف التراكيز عن التغير بعد 30 s؛ وعند الاتزان [X] = 0.1 M و[Y] = 0.8 M (نقص X بمقدار 0.4 M وزاد Y بمقدار 0.8 M، وهذا يطابق النسبة 1 : 2). Kc = [Y]^2 / [X] = (0.8)^2 / 0.1 = 0.64 / 0.1 = 6.4. إهمال الأس يعطي 0.8 / 0.1 = 8، واستعمال نقص X (0.4) بدل [Y] يعطي 0.16 / 0.1 = 1.6، واستعمال التركيز الابتدائي [X] = 0.5 يعطي 0.64 / 0.5 = 1.28، وقلب النسبة دون أس يعطي 0.1 / 0.8 = 0.125.",
        "zh": "30 s 后浓度不再变化；平衡时 [X] = 0.1 M，[Y] = 0.8 M（X 减少 0.4 M，Y 增加 0.8 M，符合 1 : 2 的关系）。Kc = [Y]^2 / [X] = (0.8)^2 / 0.1 = 0.64 / 0.1 = 6.4。忘记指数得 0.8 / 0.1 = 8；用 X 的减少量 (0.4) 代替 [Y] 得 0.16 / 0.1 = 1.6；用起始浓度 [X] = 0.5 得 0.64 / 0.5 = 1.28；比值倒置且不取指数得 0.1 / 0.8 = 0.125。",
        "ku": "Piştî 30 s tîrbûn êdî naguherin; di hevsengiyê de [X] = 0,1 M û [Y] = 0,8 M e (X 0,4 M kêm bûye, Y 0,8 M zêde bûye; ev rêjeya 1 : 2 li hevkêşeyê tê). Kc = [Y]^2 / [X] = (0,8)^2 / 0,1 = 0,64 / 0,1 = 6,4. Bêyî hêzê 0,8 / 0,1 = 8; li şûna [Y] kêmbûna X (0,4) bê girtin 0,16 / 0,1 = 1,6; tîrbûna destpêkê [X] = 0,5 bê bikaranîn 0,64 / 0,5 = 1,28; rêje berevajî û bêyî hêz bê danîn 0,1 / 0,8 = 0,125 tê dîtin."
      },
      "figure": {
        "kind": "graph",
        "xLabel": {
          "tr": "Zaman (s)",
          "en": "Time (s)",
          "de": "Zeit (s)",
          "fr": "Temps (s)",
          "ru": "Время (с)",
          "ar": "الزمن (s)",
          "zh": "时间 (s)",
          "ku": "Dem (s)"
        },
        "yLabel": {
          "tr": "Derişim (mol/L)",
          "en": "Concentration (mol/L)",
          "de": "Konzentration (mol/L)",
          "fr": "Concentration (mol/L)",
          "ru": "Концентрация (моль/л)",
          "ar": "التركيز (mol/L)",
          "zh": "浓度 (mol/L)",
          "ku": "Tîrbûn (mol/L)"
        },
        "xMax": 50,
        "yMax": 0.9,
        "xTicks": [
          10,
          20,
          30,
          40
        ],
        "yTicks": [
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
          0.6,
          0.7,
          0.8
        ],
        "series": [
          {
            "points": [
              [
                0,
                0.5
              ],
              [
                5,
                0.36
              ],
              [
                10,
                0.26
              ],
              [
                15,
                0.19
              ],
              [
                20,
                0.14
              ],
              [
                25,
                0.115
              ],
              [
                30,
                0.1
              ],
              [
                50,
                0.1
              ]
            ],
            "label": "X"
          },
          {
            "points": [
              [
                0,
                0.0
              ],
              [
                5,
                0.28
              ],
              [
                10,
                0.48
              ],
              [
                15,
                0.62
              ],
              [
                20,
                0.72
              ],
              [
                25,
                0.77
              ],
              [
                30,
                0.8
              ],
              [
                50,
                0.8
              ]
            ],
            "label": "Y",
            "tone": 1
          }
        ]
      }
    },
    {
      "id": "u18-twin03",
      "stem": {
        "tr": "Sabit hacimli 2 litrelik kapalı bir kapta 1 mol H2 gazı ile 1 mol I2 gazı belirli bir sıcaklıkta H2(g) + I2(g) ⇌ 2HI(g) denklemine göre tepkimeye giriyor. Dengeye ulaşıldığında kapta 1,2 mol HI bulunduğuna göre, bu sıcaklıkta tepkimenin derişimler cinsinden denge sabiti (Kc) kaçtır?",
        "en": "In a closed 2-litre rigid container, 1 mol of H2 gas and 1 mol of I2 gas react at a certain temperature according to H2(g) + I2(g) ⇌ 2HI(g). At equilibrium the container holds 1.2 mol of HI. What is the equilibrium constant in terms of concentrations (Kc) at this temperature?",
        "de": "In einem geschlossenen, starren 2-Liter-Gefäß reagieren bei einer bestimmten Temperatur 1 mol H2-Gas und 1 mol I2-Gas gemäß H2(g) + I2(g) ⇌ 2HI(g). Im Gleichgewicht enthält das Gefäß 1,2 mol HI. Wie groß ist die Gleichgewichtskonstante bezüglich der Konzentrationen (Kc) bei dieser Temperatur?",
        "fr": "Dans un récipient fermé et rigide de 2 litres, 1 mol de H2 gazeux et 1 mol de I2 gazeux réagissent à une certaine température selon H2(g) + I2(g) ⇌ 2HI(g). À l’équilibre, le récipient contient 1,2 mol de HI. Quelle est la constante d’équilibre en concentrations (Kc) à cette température ?",
        "ru": "В закрытом сосуде постоянного объёма 2 л 1 моль H2 и 1 моль I2 (газы) реагируют при определённой температуре по уравнению H2(г) + I2(г) ⇌ 2HI(г). В состоянии равновесия в сосуде находится 1,2 моль HI. Чему равна константа равновесия Kc (через концентрации) при этой температуре?",
        "ar": "في وعاء مغلق ثابت الحجم سعته 2 L، يتفاعل 1 mol من غاز H2 مع 1 mol من غاز I2 عند درجة حرارة معينة وفق H2(g) + I2(g) ⇌ 2HI(g). عند الاتزان يحتوي الوعاء على 1.2 mol من HI. ما قيمة ثابت الاتزان بدلالة التراكيز (Kc) عند هذه الدرجة؟",
        "zh": "在容积为 2 L 的密闭刚性容器中，1 mol H2 气体与 1 mol I2 气体在一定温度下按 H2(g) + I2(g) ⇌ 2HI(g) 反应。达到平衡时容器中有 1.2 mol HI。该温度下以浓度表示的平衡常数 Kc 是多少？",
        "ku": "Di firaxeke girtî ya 2 lîtreyî ya bi qebareya sabît de, 1 mol gaza H2 û 1 mol gaza I2 di germahiyeke diyar de li gorî hevkêşeya H2(g) + I2(g) ⇌ 2HI(g) dikevin reaksiyonê. Dema sîstem digihîje hevsengiyê, di firaxê de 1,2 mol HI heye. Di vê germahiyê de sabîta hevsengiyê ya bi tîrbûnan (Kc) çend e?"
      },
      "options": [
        {
          "tr": "2,25",
          "en": "2.25",
          "de": "2,25",
          "fr": "2,25",
          "ru": "2,25",
          "ar": "2.25",
          "zh": "2.25",
          "ku": "2,25"
        },
        {
          "tr": "9",
          "en": "9",
          "de": "9",
          "fr": "9",
          "ru": "9",
          "ar": "9",
          "zh": "9",
          "ku": "9"
        },
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
          "tr": "30",
          "en": "30",
          "de": "30",
          "fr": "30",
          "ru": "30",
          "ar": "30",
          "zh": "30",
          "ku": "30"
        },
        {
          "tr": "36",
          "en": "36",
          "de": "36",
          "fr": "36",
          "ru": "36",
          "ar": "36",
          "zh": "36",
          "ku": "36"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "2 mol HI oluşurken 1 mol H2 ve 1 mol I2 harcanır; 1,2 mol HI için 0,6 mol H2 ve 0,6 mol I2 harcanmıştır. Dengede H2 = I2 = 0,4 mol. Derişimler: [H2] = [I2] = 0,4/2 = 0,2 M, [HI] = 1,2/2 = 0,6 M. Kc = [HI]^2 / ([H2][I2]) = 0,36 / 0,04 = 9. HI'nin katsayısı üs olarak alınmazsa 0,6/0,04 = 15, üs yerine çarpan olarak kullanılırsa 30 gibi hatalı sonuçlar bulunur.",
        "en": "Forming 2 mol HI uses 1 mol H2 and 1 mol I2, so 1.2 mol HI used 0.6 mol H2 and 0.6 mol I2. At equilibrium H2 = I2 = 0.4 mol. Concentrations: [H2] = [I2] = 0.4/2 = 0.2 M, [HI] = 1.2/2 = 0.6 M. Kc = [HI]^2 / ([H2][I2]) = 0.36 / 0.04 = 9. Ignoring the exponent of HI gives 0.6/0.04 = 15, and using the coefficient as a multiplier gives 30 — both are errors.",
        "de": "Für 2 mol HI werden 1 mol H2 und 1 mol I2 verbraucht; für 1,2 mol HI also 0,6 mol H2 und 0,6 mol I2. Im Gleichgewicht: H2 = I2 = 0,4 mol. Konzentrationen: [H2] = [I2] = 0,4/2 = 0,2 M, [HI] = 1,2/2 = 0,6 M. Kc = [HI]^2 / ([H2][I2]) = 0,36 / 0,04 = 9. Ohne den Exponenten von HI erhält man 0,6/0,04 = 15, mit dem Koeffizienten als Faktor 30 – beides falsch.",
        "fr": "Pour former 2 mol de HI, il faut 1 mol de H2 et 1 mol de I2 ; pour 1,2 mol de HI, 0,6 mol de H2 et 0,6 mol de I2 ont réagi. À l’équilibre : H2 = I2 = 0,4 mol. Concentrations : [H2] = [I2] = 0,4/2 = 0,2 M, [HI] = 1,2/2 = 0,6 M. Kc = [HI]^2 / ([H2][I2]) = 0,36 / 0,04 = 9. Sans l’exposant de HI on obtient 0,6/0,04 = 15, et en multipliant par le coefficient on obtient 30 : deux erreurs.",
        "ru": "На образование 2 моль HI расходуется 1 моль H2 и 1 моль I2; значит, на 1,2 моль HI израсходовано 0,6 моль H2 и 0,6 моль I2. В равновесии n(H2) = n(I2) = 0,4 моль. Концентрации: [H2] = [I2] = 0,4/2 = 0,2 M, [HI] = 1,2/2 = 0,6 M. Kc = [HI]^2 / ([H2][I2]) = 0,36 / 0,04 = 9. Если не возвести [HI] в квадрат, получится 0,6/0,04 = 15, а если умножить на коэффициент вместо возведения в степень — 30; оба результата ошибочны.",
        "ar": "لتكوين 2 mol من HI يُستهلك 1 mol من H2 و1 mol من I2؛ إذن لتكوين 1.2 mol من HI استُهلك 0.6 mol من H2 و0.6 mol من I2. عند الاتزان: H2 = I2 = 0.4 mol. التراكيز: [H2] = [I2] = 0.4/2 = 0.2 M، و[HI] = 1.2/2 = 0.6 M. Kc = [HI]^2 / ([H2][I2]) = 0.36 / 0.04 = 9. إهمال أس HI يعطي 0.6/0.04 = 15، واستخدام المعامل كمضاعف يعطي 30، وكلاهما خطأ.",
        "zh": "生成 2 mol HI 消耗 1 mol H2 和 1 mol I2，所以生成 1.2 mol HI 消耗了 0.6 mol H2 和 0.6 mol I2。平衡时 H2 = I2 = 0.4 mol。浓度：[H2] = [I2] = 0.4/2 = 0.2 M，[HI] = 1.2/2 = 0.6 M。Kc = [HI]^2 / ([H2][I2]) = 0.36 / 0.04 = 9。忽略 HI 的指数会得到 0.6/0.04 = 15，把计量数当作乘数会得到 30，都是错误的。",
        "ku": "Dema 2 mol HI çêdibe, 1 mol H2 û 1 mol I2 tên xerckirin; ji bo 1,2 mol HI, 0,6 mol H2 û 0,6 mol I2 hatine xerckirin. Di hevsengiyê de H2 = I2 = 0,4 mol. Tîrbûn: [H2] = [I2] = 0,4/2 = 0,2 M, [HI] = 1,2/2 = 0,6 M. Kc = [HI]^2 / ([H2][I2]) = 0,36 / 0,04 = 9. Heke hevberê HI wekî hêz neyê girtin 0,6/0,04 = 15, heke li şûna hêzê wekî pirker were bikaranîn 30 tê dîtin; ev encam şaş in."
      }
    },
    {
      "id": "u18-twin04",
      "stem": {
        "tr": "Belirli bir sıcaklıkta 2SO3(g) ⇌ 2SO2(g) + O2(g) tepkimesinin derişimler cinsinden denge sabiti Kc = 0,1'dir. Aynı sıcaklıkta sabit hacimli 2 litrelik bir kaba 2 mol SO3, 2 mol SO2 ve 1 mol O2 gazları konuluyor. Bu sistemle ilgili aşağıdakilerden hangisi doğrudur?",
        "en": "At a certain temperature the equilibrium constant in terms of concentrations for 2SO3(g) ⇌ 2SO2(g) + O2(g) is Kc = 0.1. At the same temperature, 2 mol SO3, 2 mol SO2 and 1 mol O2 gases are placed in a rigid 2-litre container. Which of the following is correct about this system?",
        "de": "Bei einer bestimmten Temperatur beträgt die Gleichgewichtskonstante bezüglich der Konzentrationen für 2SO3(g) ⇌ 2SO2(g) + O2(g) Kc = 0,1. Bei derselben Temperatur werden 2 mol SO3, 2 mol SO2 und 1 mol O2 in ein starres 2-Liter-Gefäß gegeben. Welche der folgenden Aussagen über dieses System ist richtig?",
        "fr": "À une certaine température, la constante d’équilibre en concentrations de 2SO3(g) ⇌ 2SO2(g) + O2(g) vaut Kc = 0,1. À la même température, on introduit 2 mol de SO3, 2 mol de SO2 et 1 mol de O2 gazeux dans un récipient rigide de 2 litres. Laquelle des affirmations suivantes sur ce système est correcte ?",
        "ru": "При определённой температуре константа равновесия (через концентрации) реакции 2SO3(г) ⇌ 2SO2(г) + O2(г) равна Kc = 0,1. При той же температуре в сосуд постоянного объёма 2 л помещают 2 моль SO3, 2 моль SO2 и 1 моль O2. Какое из утверждений об этой системе верно?",
        "ar": "عند درجة حرارة معينة يكون ثابت الاتزان بدلالة التراكيز للتفاعل 2SO3(g) ⇌ 2SO2(g) + O2(g) هو Kc = 0.1. عند الدرجة نفسها وُضع 2 mol من SO3 و2 mol من SO2 و1 mol من O2 في وعاء ثابت الحجم سعته 2 L. أي العبارات التالية صحيحة بشأن هذا النظام؟",
        "zh": "某温度下反应 2SO3(g) ⇌ 2SO2(g) + O2(g) 以浓度表示的平衡常数 Kc = 0.1。在同一温度下，向 2 L 刚性容器中加入 2 mol SO3、2 mol SO2 和 1 mol O2。下列关于该体系的说法哪一项正确？",
        "ku": "Di germahiyeke diyar de sabîta hevsengiyê ya bi tîrbûnan a reaksiyona 2SO3(g) ⇌ 2SO2(g) + O2(g) Kc = 0,1 e. Di heman germahiyê de 2 mol SO3, 2 mol SO2 û 1 mol O2 dikevin firaxeke 2 lîtreyî ya bi qebareya sabît. Derbarê vê sîstemê de kîjan ji van rast e?"
      },
      "options": [
        {
          "tr": "Qc = 0,1 olup sistem dengededir.",
          "en": "Qc = 0.1, so the system is at equilibrium.",
          "de": "Qc = 0,1; das System ist im Gleichgewicht.",
          "fr": "Qc = 0,1 ; le système est à l’équilibre.",
          "ru": "Qc = 0,1; система находится в равновесии.",
          "ar": "Qc = 0.1، والنظام في حالة اتزان.",
          "zh": "Qc = 0.1，体系处于平衡状态。",
          "ku": "Qc = 0,1 e û sîstem di hevsengiyê de ye."
        },
        {
          "tr": "Qc = 2 olup tepkime ürünler yönüne ilerler.",
          "en": "Qc = 2, so the reaction proceeds toward the products.",
          "de": "Qc = 2; die Reaktion verläuft in Richtung der Produkte.",
          "fr": "Qc = 2 ; la réaction évolue vers les produits.",
          "ru": "Qc = 2; реакция идёт в сторону продуктов.",
          "ar": "Qc = 2، ويتقدم التفاعل نحو النواتج.",
          "zh": "Qc = 2，反应向正反应方向进行。",
          "ku": "Qc = 2 e û reaksiyon ber bi aliyê hilberan ve diçe."
        },
        {
          "tr": "Qc = 0,5 olup tepkime ürünler yönüne ilerler.",
          "en": "Qc = 0.5, so the reaction proceeds toward the products.",
          "de": "Qc = 0,5; die Reaktion verläuft in Richtung der Produkte.",
          "fr": "Qc = 0,5 ; la réaction évolue vers les produits.",
          "ru": "Qc = 0,5; реакция идёт в сторону продуктов.",
          "ar": "Qc = 0.5، ويتقدم التفاعل نحو النواتج.",
          "zh": "Qc = 0.5，反应向正反应方向进行。",
          "ku": "Qc = 0,5 e û reaksiyon ber bi aliyê hilberan ve diçe."
        },
        {
          "tr": "Qc = 0,5 olup dengeye ulaşılırken Kc değeri büyür.",
          "en": "Qc = 0.5, and Kc increases as equilibrium is approached.",
          "de": "Qc = 0,5; auf dem Weg zum Gleichgewicht wird Kc größer.",
          "fr": "Qc = 0,5 ; Kc augmente pendant que l’équilibre s’établit.",
          "ru": "Qc = 0,5; по мере установления равновесия Kc увеличивается.",
          "ar": "Qc = 0.5، وتزداد قيمة Kc أثناء الوصول إلى الاتزان.",
          "zh": "Qc = 0.5，趋向平衡的过程中 Kc 增大。",
          "ku": "Qc = 0,5 e û heta gihîştina hevsengiyê nirxa Kc mezin dibe."
        },
        {
          "tr": "Qc = 0,5 olup dengeye ulaşılırken SO3 derişimi artar.",
          "en": "Qc = 0.5, and the SO3 concentration increases as equilibrium is approached.",
          "de": "Qc = 0,5; auf dem Weg zum Gleichgewicht steigt die SO3-Konzentration.",
          "fr": "Qc = 0,5 ; la concentration de SO3 augmente pendant que l’équilibre s’établit.",
          "ru": "Qc = 0,5; по мере установления равновесия концентрация SO3 растёт.",
          "ar": "Qc = 0.5، ويزداد تركيز SO3 أثناء الوصول إلى الاتزان.",
          "zh": "Qc = 0.5，趋向平衡的过程中 SO3 浓度增大。",
          "ku": "Qc = 0,5 e û heta gihîştina hevsengiyê tîrbûna SO3 zêde dibe."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Derişimler: [SO3] = 2/2 = 1 M, [SO2] = 2/2 = 1 M, [O2] = 1/2 = 0,5 M. Qc = [SO2]^2[O2] / [SO3]^2 = (1 · 0,5) / 1 = 0,5. Qc (0,5) > Kc (0,1) olduğundan ürün derişimleri fazladır; tepkime girenler (geri) yönüne ilerler, SO2 ve O2 harcanır, SO3 derişimi artar. Kc yalnızca sıcaklığa bağlıdır, dengeye ulaşılırken değişmez. Qc ters yazılırsa 2 bulunur ve yön yanlış belirlenir.",
        "en": "Concentrations: [SO3] = 2/2 = 1 M, [SO2] = 2/2 = 1 M, [O2] = 1/2 = 0.5 M. Qc = [SO2]^2[O2] / [SO3]^2 = (1 · 0.5) / 1 = 0.5. Since Qc (0.5) > Kc (0.1), there are too many products; the reaction proceeds in the reverse direction, SO2 and O2 are consumed and the SO3 concentration increases. Kc depends only on temperature and does not change while equilibrium is approached. Writing Qc upside down gives 2 and leads to the wrong direction.",
        "de": "Konzentrationen: [SO3] = 2/2 = 1 M, [SO2] = 2/2 = 1 M, [O2] = 1/2 = 0,5 M. Qc = [SO2]^2[O2] / [SO3]^2 = (1 · 0,5) / 1 = 0,5. Da Qc (0,5) > Kc (0,1), liegen zu viele Produkte vor; die Reaktion läuft rückwärts, SO2 und O2 werden verbraucht und die SO3-Konzentration steigt. Kc hängt nur von der Temperatur ab und ändert sich dabei nicht. Ein umgekehrt aufgestellter Qc ergibt 2 und führt zur falschen Richtung.",
        "fr": "Concentrations : [SO3] = 2/2 = 1 M, [SO2] = 2/2 = 1 M, [O2] = 1/2 = 0,5 M. Qc = [SO2]^2[O2] / [SO3]^2 = (1 · 0,5) / 1 = 0,5. Comme Qc (0,5) > Kc (0,1), il y a trop de produits ; la réaction évolue dans le sens inverse, SO2 et O2 sont consommés et la concentration de SO3 augmente. Kc ne dépend que de la température et ne varie pas pendant ce temps. Un Qc écrit à l’envers donne 2 et conduit au mauvais sens.",
        "ru": "Концентрации: [SO3] = 2/2 = 1 M, [SO2] = 2/2 = 1 M, [O2] = 1/2 = 0,5 M. Qc = [SO2]^2[O2] / [SO3]^2 = (1 · 0,5) / 1 = 0,5. Так как Qc (0,5) > Kc (0,1), продуктов больше, чем в равновесии; реакция идёт в обратном направлении (к реагентам), SO2 и O2 расходуются, концентрация SO3 растёт. Kc зависит только от температуры и при установлении равновесия не меняется. Перевёрнутое выражение Qc даёт 2 и неверное направление.",
        "ar": "التراكيز: [SO3] = 2/2 = 1 M، [SO2] = 2/2 = 1 M، [O2] = 1/2 = 0.5 M. Qc = [SO2]^2[O2] / [SO3]^2 = (1 · 0.5) / 1 = 0.5. بما أن Qc (0.5) > Kc (0.1) فتراكيز النواتج أكبر من قيمها عند الاتزان؛ يسير التفاعل في الاتجاه العكسي (نحو المتفاعلات)، فيُستهلك SO2 وO2 ويزداد تركيز SO3. تعتمد Kc على درجة الحرارة فقط ولا تتغير أثناء الوصول إلى الاتزان. كتابة Qc مقلوبًا تعطي 2 وتؤدي إلى اتجاه خاطئ.",
        "zh": "浓度：[SO3] = 2/2 = 1 M，[SO2] = 2/2 = 1 M，[O2] = 1/2 = 0.5 M。Qc = [SO2]^2[O2] / [SO3]^2 = (1 · 0.5) / 1 = 0.5。由于 Qc (0.5) > Kc (0.1)，生成物过多，反应向逆反应方向进行，SO2 和 O2 被消耗，SO3 浓度增大。Kc 只与温度有关，在此过程中不变。若把 Qc 写反会得到 2，从而判断错方向。",
        "ku": "Tîrbûn: [SO3] = 2/2 = 1 M, [SO2] = 2/2 = 1 M, [O2] = 1/2 = 0,5 M. Qc = [SO2]^2[O2] / [SO3]^2 = (1 · 0,5) / 1 = 0,5. Ji ber ku Qc (0,5) > Kc (0,1) e, tîrbûnên hilberan zêde ne; reaksiyon ber bi aliyê reaktantan (paşve) ve diçe, SO2 û O2 tên xerckirin û tîrbûna SO3 zêde dibe. Kc tenê bi germahiyê ve girêdayî ye û heta gihîştina hevsengiyê naguhere. Heke Qc berevajî were nivîsandin 2 tê dîtin û alî şaş tê diyarkirin."
      }
    },
    {
      "id": "u18-twin05",
      "stem": {
        "tr": "Sabit hacimli 1 litrelik bir kaba 1'er mol CO ve H2O gazları konularak belirli bir sıcaklıkta CO(g) + H2O(g) ⇌ CO2(g) + H2(g) dengesi kuruluyor. Bu sıcaklıkta Kc = 9 olduğuna göre dengede CO2 gazının derişimi kaç mol/L'dir?",
        "en": "1 mol each of CO and H2O gases are placed in a rigid 1-litre container, and at a certain temperature the equilibrium CO(g) + H2O(g) ⇌ CO2(g) + H2(g) is established. Given Kc = 9 at this temperature, what is the equilibrium concentration of CO2 in mol/L?",
        "de": "Je 1 mol CO- und H2O-Gas werden in ein starres 1-Liter-Gefäß gegeben; bei einer bestimmten Temperatur stellt sich das Gleichgewicht CO(g) + H2O(g) ⇌ CO2(g) + H2(g) ein. Bei Kc = 9: Wie groß ist die Gleichgewichtskonzentration von CO2 in mol/L?",
        "fr": "On introduit 1 mol de CO et 1 mol de H2O gazeux dans un récipient rigide de 1 litre ; à une certaine température s’établit l’équilibre CO(g) + H2O(g) ⇌ CO2(g) + H2(g). Sachant que Kc = 9 à cette température, quelle est la concentration de CO2 à l’équilibre en mol/L ?",
        "ru": "В сосуд постоянного объёма 1 л поместили по 1 моль газообразных CO и H2O; при определённой температуре установилось равновесие CO(г) + H2O(г) ⇌ CO2(г) + H2(г). При этой температуре Kc = 9. Чему равна равновесная концентрация CO2, моль/л?",
        "ar": "وُضع 1 mol من كل من غازي CO وH2O في وعاء ثابت الحجم سعته 1 L، وعند درجة حرارة معينة تكوّن الاتزان CO(g) + H2O(g) ⇌ CO2(g) + H2(g). إذا كانت Kc = 9 عند هذه الدرجة، فما تركيز CO2 عند الاتزان بوحدة mol/L؟",
        "zh": "向 1 L 刚性容器中各加入 1 mol CO 和 H2O 气体，在一定温度下建立平衡 CO(g) + H2O(g) ⇌ CO2(g) + H2(g)。该温度下 Kc = 9，平衡时 CO2 的浓度是多少 mol/L？",
        "ku": "Di germahiyeke diyar de, ji her yekê ji gazên CO û H2O 1 mol dikevin firaxeke 1 lîtreyî ya bi qebareya sabît û hevsengiya CO(g) + H2O(g) ⇌ CO2(g) + H2(g) saz dibe. Heke di vê germahiyê de Kc = 9 be, di hevsengiyê de tîrbûna gaza CO2 çend mol/L e?"
      },
      "options": [
        {
          "tr": "0,25",
          "en": "0.25",
          "de": "0,25",
          "fr": "0,25",
          "ru": "0,25",
          "ar": "0.25",
          "zh": "0.25",
          "ku": "0,25"
        },
        {
          "tr": "0,56",
          "en": "0.56",
          "de": "0,56",
          "fr": "0,56",
          "ru": "0,56",
          "ar": "0.56",
          "zh": "0.56",
          "ku": "0,56"
        },
        {
          "tr": "0,75",
          "en": "0.75",
          "de": "0,75",
          "fr": "0,75",
          "ru": "0,75",
          "ar": "0.75",
          "zh": "0.75",
          "ku": "0,75"
        },
        {
          "tr": "0,90",
          "en": "0.90",
          "de": "0,90",
          "fr": "0,90",
          "ru": "0,90",
          "ar": "0.90",
          "zh": "0.90",
          "ku": "0,90"
        },
        {
          "tr": "3,00",
          "en": "3.00",
          "de": "3,00",
          "fr": "3,00",
          "ru": "3,00",
          "ar": "3.00",
          "zh": "3.00",
          "ku": "3,00"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Dengede [CO2] = [H2] = x ve [CO] = [H2O] = 1 - x olur. Kc = x^2 / (1 - x)^2 = 9; iki tarafın karekökü alınırsa x / (1 - x) = 3 → x = 3 - 3x → 4x = 3 → x = 0,75 M. Karekök alınmadan x / (1 - x) = 9 yazılırsa 0,90 bulunur; 0,25 ise dengede kalan CO'nun derişimidir.",
        "en": "At equilibrium [CO2] = [H2] = x and [CO] = [H2O] = 1 - x. Kc = x^2 / (1 - x)^2 = 9; taking the square root of both sides gives x / (1 - x) = 3 → x = 3 - 3x → 4x = 3 → x = 0.75 M. Writing x / (1 - x) = 9 without the square root gives 0.90; 0.25 is the concentration of CO left at equilibrium.",
        "de": "Im Gleichgewicht gilt [CO2] = [H2] = x und [CO] = [H2O] = 1 - x. Kc = x^2 / (1 - x)^2 = 9; Wurzelziehen auf beiden Seiten ergibt x / (1 - x) = 3 → x = 3 - 3x → 4x = 3 → x = 0,75 M. Ohne Wurzel (x / (1 - x) = 9) erhält man 0,90; 0,25 ist die im Gleichgewicht verbleibende CO-Konzentration.",
        "fr": "À l’équilibre [CO2] = [H2] = x et [CO] = [H2O] = 1 - x. Kc = x^2 / (1 - x)^2 = 9 ; en prenant la racine carrée des deux membres : x / (1 - x) = 3 → x = 3 - 3x → 4x = 3 → x = 0,75 M. Sans racine carrée (x / (1 - x) = 9), on trouve 0,90 ; 0,25 est la concentration de CO restante à l’équilibre.",
        "ru": "В равновесии [CO2] = [H2] = x и [CO] = [H2O] = 1 - x. Kc = x^2 / (1 - x)^2 = 9; извлекая квадратный корень из обеих частей, получаем x / (1 - x) = 3 → x = 3 - 3x → 4x = 3 → x = 0,75 M. Без извлечения корня (x / (1 - x) = 9) получается 0,90; 0,25 — это концентрация оставшегося CO.",
        "ar": "عند الاتزان [CO2] = [H2] = x و[CO] = [H2O] = 1 - x. Kc = x^2 / (1 - x)^2 = 9؛ وبأخذ الجذر التربيعي للطرفين: x / (1 - x) = 3 → x = 3 - 3x → 4x = 3 → x = 0.75 M. بدون الجذر (x / (1 - x) = 9) نحصل على 0.90؛ أما 0.25 فهو تركيز CO المتبقي عند الاتزان.",
        "zh": "平衡时 [CO2] = [H2] = x，[CO] = [H2O] = 1 - x。Kc = x^2 / (1 - x)^2 = 9；两边开平方得 x / (1 - x) = 3 → x = 3 - 3x → 4x = 3 → x = 0.75 M。若不开方写成 x / (1 - x) = 9 会得到 0.90；0.25 是平衡时剩余 CO 的浓度。",
        "ku": "Di hevsengiyê de [CO2] = [H2] = x û [CO] = [H2O] = 1 - x e. Kc = x^2 / (1 - x)^2 = 9; heke koka duyem a her du aliyan were girtin x / (1 - x) = 3 → x = 3 - 3x → 4x = 3 → x = 0,75 M. Heke bêyî girtina kokê x / (1 - x) = 9 were nivîsandin 0,90 tê dîtin; 0,25 jî tîrbûna CO ya ku di hevsengiyê de dimîne ye."
      }
    },
    {
      "id": "u18-twin06",
      "stem": {
        "tr": "PCl5(g) ⇌ PCl3(g) + Cl2(g) tepkimesinin 227 °C'deki derişimler cinsinden denge sabiti Kc = 0,05'tir. Aynı sıcaklıkta kısmi basınçlar cinsinden denge sabiti Kp kaçtır? (R = 0,082 L·atm/(mol·K))",
        "en": "The equilibrium constant in terms of concentrations for PCl5(g) ⇌ PCl3(g) + Cl2(g) at 227 °C is Kc = 0.05. What is the equilibrium constant in terms of partial pressures, Kp, at the same temperature? (R = 0.082 L·atm/(mol·K))",
        "de": "Die Gleichgewichtskonstante bezüglich der Konzentrationen für PCl5(g) ⇌ PCl3(g) + Cl2(g) beträgt bei 227 °C Kc = 0,05. Wie groß ist die Gleichgewichtskonstante bezüglich der Partialdrücke, Kp, bei derselben Temperatur? (R = 0,082 L·atm/(mol·K))",
        "fr": "La constante d’équilibre en concentrations de PCl5(g) ⇌ PCl3(g) + Cl2(g) à 227 °C vaut Kc = 0,05. Quelle est la constante d’équilibre en pressions partielles, Kp, à la même température ? (R = 0,082 L·atm/(mol·K))",
        "ru": "Константа равновесия (через концентрации) реакции PCl5(г) ⇌ PCl3(г) + Cl2(г) при 227 °C равна Kc = 0,05. Чему равна константа равновесия Kp (через парциальные давления) при той же температуре? (R = 0,082 л·атм/(моль·K))",
        "ar": "ثابت الاتزان بدلالة التراكيز للتفاعل PCl5(g) ⇌ PCl3(g) + Cl2(g) عند 227 °C هو Kc = 0.05. ما قيمة ثابت الاتزان بدلالة الضغوط الجزئية Kp عند الدرجة نفسها؟ (R = 0.082 L·atm/(mol·K))",
        "zh": "反应 PCl5(g) ⇌ PCl3(g) + Cl2(g) 在 227 °C 时以浓度表示的平衡常数 Kc = 0.05。同温度下以分压表示的平衡常数 Kp 是多少？(R = 0.082 L·atm/(mol·K))",
        "ku": "Sabîta hevsengiyê ya bi tîrbûnan a reaksiyona PCl5(g) ⇌ PCl3(g) + Cl2(g) li 227 °C Kc = 0,05 e. Di heman germahiyê de sabîta hevsengiyê ya bi zextên parçeyî (Kp) çend e? (R = 0,082 L·atm/(mol·K))"
      },
      "options": [
        {
          "tr": "1,22·10^-3",
          "en": "1.22·10^-3",
          "de": "1,22·10^-3",
          "fr": "1,22·10^-3",
          "ru": "1,22·10^-3",
          "ar": "1.22·10^-3",
          "zh": "1.22·10^-3",
          "ku": "1,22·10^-3"
        },
        {
          "tr": "0,05",
          "en": "0.05",
          "de": "0,05",
          "fr": "0,05",
          "ru": "0,05",
          "ar": "0.05",
          "zh": "0.05",
          "ku": "0,05"
        },
        {
          "tr": "0,93",
          "en": "0.93",
          "de": "0,93",
          "fr": "0,93",
          "ru": "0,93",
          "ar": "0.93",
          "zh": "0.93",
          "ku": "0,93"
        },
        {
          "tr": "2,05",
          "en": "2.05",
          "de": "2,05",
          "fr": "2,05",
          "ru": "2,05",
          "ar": "2.05",
          "zh": "2.05",
          "ku": "2,05"
        },
        {
          "tr": "84,05",
          "en": "84.05",
          "de": "84,05",
          "fr": "84,05",
          "ru": "84,05",
          "ar": "84.05",
          "zh": "84.05",
          "ku": "84,05"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Δn = (1 + 1) - 1 = 1. T = 227 + 273 = 500 K, RT = 0,082 · 500 = 41. Kp = Kc · (RT)^Δn = 0,05 · 41 = 2,05. Sıcaklık Kelvin'e çevrilmeden 227 alınırsa 0,93; Kc, RT'ye bölünürse 1,22·10^-3; Δn = 2 sanılırsa 84,05 bulunur.",
        "en": "Δn = (1 + 1) - 1 = 1. T = 227 + 273 = 500 K, RT = 0.082 · 500 = 41. Kp = Kc · (RT)^Δn = 0.05 · 41 = 2.05. Using 227 without converting to kelvin gives 0.93; dividing Kc by RT gives 1.22·10^-3; taking Δn = 2 gives 84.05.",
        "de": "Δn = (1 + 1) - 1 = 1. T = 227 + 273 = 500 K, RT = 0,082 · 500 = 41. Kp = Kc · (RT)^Δn = 0,05 · 41 = 2,05. Wird 227 ohne Umrechnung in Kelvin eingesetzt, erhält man 0,93; teilt man Kc durch RT, 1,22·10^-3; mit Δn = 2 erhält man 84,05.",
        "fr": "Δn = (1 + 1) - 1 = 1. T = 227 + 273 = 500 K, RT = 0,082 · 500 = 41. Kp = Kc · (RT)^Δn = 0,05 · 41 = 2,05. En utilisant 227 sans conversion en kelvins on obtient 0,93 ; en divisant Kc par RT, 1,22·10^-3 ; avec Δn = 2, 84,05.",
        "ru": "Δn = (1 + 1) - 1 = 1. T = 227 + 273 = 500 K, RT = 0,082 · 500 = 41. Kp = Kc · (RT)^Δn = 0,05 · 41 = 2,05. Если подставить 227 без перевода в кельвины, получится 0,93; если разделить Kc на RT — 1,22·10^-3; если принять Δn = 2 — 84,05.",
        "ar": "Δn = (1 + 1) - 1 = 1. T = 227 + 273 = 500 K، RT = 0.082 · 500 = 41. Kp = Kc · (RT)^Δn = 0.05 · 41 = 2.05. استخدام 227 دون التحويل إلى الكلفن يعطي 0.93؛ وقسمة Kc على RT تعطي 1.22·10^-3؛ واعتبار Δn = 2 يعطي 84.05.",
        "zh": "Δn = (1 + 1) - 1 = 1。T = 227 + 273 = 500 K，RT = 0.082 · 500 = 41。Kp = Kc · (RT)^Δn = 0.05 · 41 = 2.05。不换算成开尔文直接用 227 会得到 0.93；用 Kc 除以 RT 会得到 1.22·10^-3；误取 Δn = 2 会得到 84.05。",
        "ku": "Δn = (1 + 1) - 1 = 1. T = 227 + 273 = 500 K, RT = 0,082 · 500 = 41. Kp = Kc · (RT)^Δn = 0,05 · 41 = 2,05. Heke germahî neyê veguhertin bo Kelvin û 227 were girtin 0,93; heke Kc li ser RT were dabeşkirin 1,22·10^-3; heke Δn = 2 were hesibandin 84,05 tê dîtin."
      }
    },
    {
      "id": "u18-twin07",
      "stem": {
        "tr": "Aynı sıcaklıkta X2(g) + Y2(g) ⇌ 2XY(g) tepkimesinin denge sabiti Kc1 = 4·10^-2, 2XY(g) + Y2(g) ⇌ 2XY2(g) tepkimesinin denge sabiti Kc2 = 2,5·10^-1'dir. Aynı sıcaklıkta XY2(g) ⇌ 1/2 X2(g) + Y2(g) tepkimesinin denge sabiti kaçtır?",
        "en": "At the same temperature, the equilibrium constant of X2(g) + Y2(g) ⇌ 2XY(g) is Kc1 = 4·10^-2 and that of 2XY(g) + Y2(g) ⇌ 2XY2(g) is Kc2 = 2.5·10^-1. What is the equilibrium constant of XY2(g) ⇌ 1/2 X2(g) + Y2(g) at the same temperature?",
        "de": "Bei derselben Temperatur beträgt die Gleichgewichtskonstante von X2(g) + Y2(g) ⇌ 2XY(g) Kc1 = 4·10^-2 und die von 2XY(g) + Y2(g) ⇌ 2XY2(g) Kc2 = 2,5·10^-1. Wie groß ist die Gleichgewichtskonstante von XY2(g) ⇌ 1/2 X2(g) + Y2(g) bei derselben Temperatur?",
        "fr": "À la même température, la constante d’équilibre de X2(g) + Y2(g) ⇌ 2XY(g) vaut Kc1 = 4·10^-2 et celle de 2XY(g) + Y2(g) ⇌ 2XY2(g) vaut Kc2 = 2,5·10^-1. Quelle est la constante d’équilibre de XY2(g) ⇌ 1/2 X2(g) + Y2(g) à la même température ?",
        "ru": "При одной и той же температуре константа равновесия реакции X2(г) + Y2(г) ⇌ 2XY(г) равна Kc1 = 4·10^-2, а реакции 2XY(г) + Y2(г) ⇌ 2XY2(г) — Kc2 = 2,5·10^-1. Чему равна константа равновесия реакции XY2(г) ⇌ 1/2 X2(г) + Y2(г) при той же температуре?",
        "ar": "عند درجة الحرارة نفسها، ثابت اتزان التفاعل X2(g) + Y2(g) ⇌ 2XY(g) هو Kc1 = 4·10^-2، وثابت اتزان التفاعل 2XY(g) + Y2(g) ⇌ 2XY2(g) هو Kc2 = 2.5·10^-1. ما ثابت اتزان التفاعل XY2(g) ⇌ 1/2 X2(g) + Y2(g) عند الدرجة نفسها؟",
        "zh": "同一温度下，反应 X2(g) + Y2(g) ⇌ 2XY(g) 的平衡常数 Kc1 = 4·10^-2，反应 2XY(g) + Y2(g) ⇌ 2XY2(g) 的平衡常数 Kc2 = 2.5·10^-1。同温度下反应 XY2(g) ⇌ 1/2 X2(g) + Y2(g) 的平衡常数是多少？",
        "ku": "Di heman germahiyê de sabîta hevsengiyê ya reaksiyona X2(g) + Y2(g) ⇌ 2XY(g) Kc1 = 4·10^-2 û ya reaksiyona 2XY(g) + Y2(g) ⇌ 2XY2(g) Kc2 = 2,5·10^-1 e. Di heman germahiyê de sabîta hevsengiyê ya reaksiyona XY2(g) ⇌ 1/2 X2(g) + Y2(g) çend e?"
      },
      "options": [
        {
          "tr": "10^-2",
          "en": "10^-2",
          "de": "10^-2",
          "fr": "10^-2",
          "ru": "10^-2",
          "ar": "10^-2",
          "zh": "10^-2",
          "ku": "10^-2"
        },
        {
          "tr": "10^-1",
          "en": "10^-1",
          "de": "10^-1",
          "fr": "10^-1",
          "ru": "10^-1",
          "ar": "10^-1",
          "zh": "10^-1",
          "ku": "10^-1"
        },
        {
          "tr": "10",
          "en": "10",
          "de": "10",
          "fr": "10",
          "ru": "10",
          "ar": "10",
          "zh": "10",
          "ku": "10"
        },
        {
          "tr": "100",
          "en": "100",
          "de": "100",
          "fr": "100",
          "ru": "100",
          "ar": "100",
          "zh": "100",
          "ku": "100"
        },
        {
          "tr": "200",
          "en": "200",
          "de": "200",
          "fr": "200",
          "ru": "200",
          "ar": "200",
          "zh": "200",
          "ku": "200"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "İki tepkime toplanırsa X2(g) + 2Y2(g) ⇌ 2XY2(g) elde edilir ve K = Kc1 · Kc2 = 4·10^-2 · 2,5·10^-1 = 10^-2 olur. İstenen tepkime bu tepkimenin ters çevrilip 1/2 ile çarpılmış hâlidir: ters çevirince K = 1/10^-2 = 100, 1/2 ile çarpınca K = 100^(1/2) = 10. Yalnızca ters çevirip 1/2 katsayısını unutan 100, ters çevirmeyi unutup yalnızca karekök alan 10^-1 bulur.",
        "en": "Adding the two reactions gives X2(g) + 2Y2(g) ⇌ 2XY2(g) with K = Kc1 · Kc2 = 4·10^-2 · 2.5·10^-1 = 10^-2. The required reaction is this one reversed and multiplied by 1/2: reversing gives K = 1/10^-2 = 100, multiplying by 1/2 gives K = 100^(1/2) = 10. Reversing but forgetting the factor 1/2 gives 100; taking only the square root without reversing gives 10^-1.",
        "de": "Die Addition beider Reaktionen ergibt X2(g) + 2Y2(g) ⇌ 2XY2(g) mit K = Kc1 · Kc2 = 4·10^-2 · 2,5·10^-1 = 10^-2. Die gesuchte Reaktion ist diese, umgekehrt und mit 1/2 multipliziert: Umkehren ergibt K = 1/10^-2 = 100, Multiplikation mit 1/2 ergibt K = 100^(1/2) = 10. Wer nur umkehrt und den Faktor 1/2 vergisst, erhält 100; wer nur die Wurzel zieht, ohne umzukehren, erhält 10^-1.",
        "fr": "L’addition des deux réactions donne X2(g) + 2Y2(g) ⇌ 2XY2(g) avec K = Kc1 · Kc2 = 4·10^-2 · 2,5·10^-1 = 10^-2. La réaction demandée est celle-ci inversée puis multipliée par 1/2 : l’inversion donne K = 1/10^-2 = 100, la multiplication par 1/2 donne K = 100^(1/2) = 10. Inverser en oubliant le facteur 1/2 donne 100 ; prendre seulement la racine sans inverser donne 10^-1.",
        "ru": "Сложение двух реакций даёт X2(г) + 2Y2(г) ⇌ 2XY2(г) с K = Kc1 · Kc2 = 4·10^-2 · 2,5·10^-1 = 10^-2. Искомая реакция — это та же реакция, записанная в обратном направлении и умноженная на 1/2: обращение даёт K = 1/10^-2 = 100, умножение на 1/2 даёт K = 100^(1/2) = 10. Если обратить реакцию, но забыть множитель 1/2, получится 100; если только извлечь корень, не обращая реакцию, — 10^-1.",
        "ar": "بجمع التفاعلين نحصل على X2(g) + 2Y2(g) ⇌ 2XY2(g) و K = Kc1 · Kc2 = 4·10^-2 · 2.5·10^-1 = 10^-2. التفاعل المطلوب هو هذا التفاعل معكوسًا ومضروبًا في 1/2: العكس يعطي K = 1/10^-2 = 100، والضرب في 1/2 يعطي K = 100^(1/2) = 10. من يعكس وينسى المعامل 1/2 يحصل على 100، ومن يأخذ الجذر فقط دون عكس يحصل على 10^-1.",
        "zh": "两式相加得 X2(g) + 2Y2(g) ⇌ 2XY2(g)，K = Kc1 · Kc2 = 4·10^-2 · 2.5·10^-1 = 10^-2。所求反应是该反应逆写后再乘以 1/2：逆写得 K = 1/10^-2 = 100，乘以 1/2 得 K = 100^(1/2) = 10。只逆写而忘记 1/2 会得到 100；只开方而不逆写会得到 10^-1。",
        "ku": "Heke her du reaksiyon werin berhevkirin, X2(g) + 2Y2(g) ⇌ 2XY2(g) tê bidestxistin û K = Kc1 · Kc2 = 4·10^-2 · 2,5·10^-1 = 10^-2 e. Reaksiyona tê xwestin rewşa berevajîkirî û bi 1/2 pirkirî ya vê reaksiyonê ye: piştî berevajîkirinê K = 1/10^-2 = 100, piştî pirkirina bi 1/2 K = 100^(1/2) = 10. Kesê ku tenê berevajî dike û hevberê 1/2 ji bîr dike 100, kesê ku berevajîkirinê ji bîr dike û tenê koka duyem digire 10^-1 dibîne."
      }
    },
    {
      "id": "u18-twin08",
      "stem": {
        "tr": "2SO2(g) + O2(g) ⇌ 2SO3(g)  ΔH < 0 tepkimesi kapalı bir kapta dengededir. Bu dengeye ayrı ayrı uygulanan I. sabit sıcaklık ve hacimde kaba O2 gazı eklemek, II. sabit hacimde sıcaklığı artırmak, III. sabit sıcaklıkta kabın hacmini küçültmek işlemlerinden hangileri SO3 gazının mol sayısını artırır?",
        "en": "The reaction 2SO2(g) + O2(g) ⇌ 2SO3(g)  ΔH < 0 is at equilibrium in a closed container. Which of the following changes, each applied separately — I. adding O2 gas at constant temperature and volume, II. raising the temperature at constant volume, III. reducing the container volume at constant temperature — increase the number of moles of SO3?",
        "de": "Die Reaktion 2SO2(g) + O2(g) ⇌ 2SO3(g)  ΔH < 0 befindet sich in einem geschlossenen Gefäß im Gleichgewicht. Welche der folgenden, jeweils einzeln durchgeführten Maßnahmen – I. Zugabe von O2 bei konstanter Temperatur und konstantem Volumen, II. Temperaturerhöhung bei konstantem Volumen, III. Verkleinerung des Gefäßvolumens bei konstanter Temperatur – erhöhen die Stoffmenge von SO3?",
        "fr": "La réaction 2SO2(g) + O2(g) ⇌ 2SO3(g)  ΔH < 0 est à l’équilibre dans un récipient fermé. Parmi les opérations suivantes, appliquées séparément — I. ajouter du O2 à température et volume constants, II. augmenter la température à volume constant, III. diminuer le volume du récipient à température constante — lesquelles augmentent le nombre de moles de SO3 ?",
        "ru": "Реакция 2SO2(г) + O2(г) ⇌ 2SO3(г), ΔH < 0, находится в равновесии в закрытом сосуде. Какие из воздействий, применённых по отдельности, увеличивают количество (моль) SO3? I. Добавление O2 при постоянных температуре и объёме. II. Повышение температуры при постоянном объёме. III. Уменьшение объёма сосуда при постоянной температуре.",
        "ar": "التفاعل 2SO2(g) + O2(g) ⇌ 2SO3(g)  ΔH < 0 في حالة اتزان داخل وعاء مغلق. أيّ العمليات الآتية، إذا طُبّقت كلٌّ منها على حدة، تزيد عدد مولات غاز SO3؟ I. إضافة غاز O2 عند ثبات درجة الحرارة والحجم II. رفع درجة الحرارة عند ثبات الحجم III. تصغير حجم الوعاء عند ثبات درجة الحرارة",
        "zh": "反应 2SO2(g) + O2(g) ⇌ 2SO3(g)  ΔH < 0 在密闭容器中处于平衡。分别进行下列操作：I. 恒温恒容下加入 O2 气体，II. 恒容下升高温度，III. 恒温下减小容器体积。其中哪些能使 SO3 的物质的量增加？",
        "ku": "Reaksiyona 2SO2(g) + O2(g) ⇌ 2SO3(g)  ΔH < 0 di firaxeke girtî de di hevsengiyê de ye. Ji van karên ku yek bi yek li vê hevsengiyê tên kirin, I. di germahî û qebareya sabît de lêzêdekirina gaza O2 li firaxê, II. di qebareya sabît de bilindkirina germahiyê, III. di germahiya sabît de kêmkirina qebareya firaxê, kîjan hejmara molên gaza SO3 zêde dikin?"
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
        "tr": "I: Eklenen O2'yi harcamak için denge ürünler yönüne kayar, SO3 artar. II: Tepkime ekzotermik olduğundan sıcaklık artışı dengeyi girenler yönüne kaydırır, SO3 azalır. III: Hacim küçülünce denge gaz mol sayısı az olan tarafa (3 mol gazdan 2 mol gaza, ürünler) kayar, SO3 artar. Bu yüzden I ve III doğrudur; sıcaklığın da SO3'ü artıracağını düşünmek ekzotermik tepkimede yapılan tipik hatadır.",
        "en": "I: To consume the added O2 the equilibrium shifts toward the products, so SO3 increases. II: The reaction is exothermic, so raising the temperature shifts the equilibrium toward the reactants and SO3 decreases. III: When the volume decreases the equilibrium shifts to the side with fewer gas moles (3 mol of gas → 2 mol, the products), so SO3 increases. Therefore I and III are correct; thinking that heating also increases SO3 is the typical mistake for an exothermic reaction.",
        "de": "I: Um das zugesetzte O2 zu verbrauchen, verschiebt sich das Gleichgewicht zu den Produkten; SO3 nimmt zu. II: Die Reaktion ist exotherm, daher verschiebt eine Temperaturerhöhung das Gleichgewicht zu den Edukten; SO3 nimmt ab. III: Bei Volumenverkleinerung verschiebt sich das Gleichgewicht zur Seite mit weniger Gasmolen (3 mol Gas → 2 mol, Produkte); SO3 nimmt zu. Daher sind I und III richtig; zu glauben, dass auch Erwärmen SO3 erhöht, ist der typische Fehler bei exothermen Reaktionen.",
        "fr": "I : Pour consommer le O2 ajouté, l’équilibre se déplace vers les produits ; SO3 augmente. II : La réaction est exothermique, donc une hausse de température déplace l’équilibre vers les réactifs ; SO3 diminue. III : Quand le volume diminue, l’équilibre se déplace vers le côté qui compte le moins de moles de gaz (3 mol de gaz → 2 mol, les produits) ; SO3 augmente. I et III sont donc corrects ; croire que le chauffage augmente aussi SO3 est l’erreur typique pour une réaction exothermique.",
        "ru": "I: чтобы израсходовать добавленный O2, равновесие смещается к продуктам; SO3 становится больше. II: реакция экзотермическая, поэтому нагревание смещает равновесие к реагентам; SO3 становится меньше. III: при уменьшении объёма равновесие смещается в сторону меньшего числа молей газа (3 моль газа → 2 моль, продукты); SO3 становится больше. Следовательно, верны I и III; считать, что нагревание тоже увеличивает количество SO3, — типичная ошибка для экзотермической реакции.",
        "ar": "I: لاستهلاك O2 المضاف ينزاح الاتزان نحو النواتج فيزداد SO3. II: التفاعل طارد للحرارة، لذا يزيح رفع درجة الحرارة الاتزان نحو المتفاعلات فيقل SO3. III: عند تصغير الحجم ينزاح الاتزان نحو الجهة الأقل في مولات الغاز (من 3 mol غاز إلى 2 mol، أي النواتج) فيزداد SO3. إذن I وIII صحيحتان؛ والاعتقاد بأن التسخين يزيد SO3 أيضًا خطأ شائع في التفاعل الطارد للحرارة.",
        "zh": "I：为消耗加入的 O2，平衡向正反应方向移动，SO3 增加。II：该反应放热，升高温度使平衡向逆反应方向移动，SO3 减少。III：体积减小时平衡向气体分子数少的一侧(3 mol 气体 → 2 mol，生成物)移动，SO3 增加。所以 I 和 III 正确；认为升温也能增加 SO3 是放热反应中的典型错误。",
        "ku": "I: Ji bo xerckirina O2 ya lêzêdekirî hevsengî ber bi hilberan ve diçe, SO3 zêde dibe. II: Ji ber ku reaksiyon ekzotermîk e, bilindbûna germahiyê hevsengiyê ber bi reaktantan ve dikişîne, SO3 kêm dibe. III: Dema qebare kêm dibe, hevsengî ber bi aliyê ku hejmara molên gazê kêmtir e (ji 3 mol gazê bo 2 mol gazê, aliyê hilberan) ve diçe, SO3 zêde dibe. Ji ber vê yekê I û III rast in; fikra ku bilindbûna germahiyê jî SO3 zêde dike di reaksiyona ekzotermîk de şaşiyeke tîpîk e."
      }
    },
    {
      "id": "u18-twin09",
      "stem": {
        "tr": "CaCO3(k) ⇌ CaO(k) + CO2(g) tepkimesi kapalı bir kapta belirli bir sıcaklıkta dengededir. Bu denge ile ilgili I. Derişimler cinsinden denge sabiti Kc = [CO2] şeklindedir. II. Kp = Kc · RT bağıntısı geçerlidir. III. Sabit sıcaklıkta kaba bir miktar CaCO3(k) eklenirse CO2 gazının kısmi basıncı artar. yargılarından hangileri doğrudur?",
        "en": "The reaction CaCO3(s) ⇌ CaO(s) + CO2(g) is at equilibrium in a closed container at a certain temperature. Which of the following statements about this equilibrium are correct? I. The equilibrium constant in terms of concentrations is Kc = [CO2]. II. The relation Kp = Kc · RT holds. III. If some CaCO3(s) is added at constant temperature, the partial pressure of CO2 increases.",
        "de": "Die Reaktion CaCO3(s) ⇌ CaO(s) + CO2(g) befindet sich bei einer bestimmten Temperatur in einem geschlossenen Gefäß im Gleichgewicht. Welche der folgenden Aussagen über dieses Gleichgewicht sind richtig? I. Die Gleichgewichtskonstante bezüglich der Konzentrationen lautet Kc = [CO2]. II. Es gilt Kp = Kc · RT. III. Wird bei konstanter Temperatur etwas CaCO3(s) zugegeben, steigt der Partialdruck von CO2.",
        "fr": "La réaction CaCO3(s) ⇌ CaO(s) + CO2(g) est à l’équilibre dans un récipient fermé à une certaine température. Parmi les affirmations suivantes sur cet équilibre, lesquelles sont correctes ? I. La constante d’équilibre en concentrations s’écrit Kc = [CO2]. II. La relation Kp = Kc · RT est valable. III. Si l’on ajoute un peu de CaCO3(s) à température constante, la pression partielle de CO2 augmente.",
        "ru": "Реакция CaCO3(тв) ⇌ CaO(тв) + CO2(г) находится в равновесии в закрытом сосуде при определённой температуре. Какие из утверждений об этом равновесии верны? I. Константа равновесия через концентрации имеет вид Kc = [CO2]. II. Выполняется соотношение Kp = Kc · RT. III. Если при постоянной температуре добавить в сосуд немного CaCO3(тв), парциальное давление CO2 увеличится.",
        "ar": "التفاعل CaCO3(s) ⇌ CaO(s) + CO2(g) في حالة اتزان داخل وعاء مغلق عند درجة حرارة معينة. أي العبارات التالية حول هذا الاتزان صحيحة؟ I. ثابت الاتزان بدلالة التراكيز هو Kc = [CO2]. II. العلاقة Kp = Kc · RT صحيحة. III. إذا أضيفت كمية من CaCO3(s) عند ثبات درجة الحرارة يزداد الضغط الجزئي لغاز CO2.",
        "zh": "反应 CaCO3(s) ⇌ CaO(s) + CO2(g) 在一定温度下于密闭容器中处于平衡。关于该平衡有下列说法：I. 以浓度表示的平衡常数为 Kc = [CO2]。II. Kp = Kc · RT 成立。III. 恒温下加入少量 CaCO3(s)，CO2 的分压增大。其中正确的是哪些？",
        "ku": "Reaksiyona CaCO3(s) ⇌ CaO(s) + CO2(g) di germahiyeke diyar de di firaxeke girtî de di hevsengiyê de ye. Derbarê vê hevsengiyê de, kîjan ji van gotinan rast in? I. Sabîta hevsengiyê ya bi tîrbûnan Kc = [CO2] e. II. Têkiliya Kp = Kc · RT derbasdar e. III. Heke di germahiya sabît de hinek CaCO3(s) li firaxê were zêdekirin, zexta parçeyî ya gaza CO2 zêde dibe."
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
        "tr": "I doğrudur: Saf katılar denge ifadesine yazılmaz, bu yüzden Kc = [CO2]. II doğrudur: Gaz fazında Δn = 1 - 0 = 1 olduğundan Kp = Kc · (RT)^1. III yanlıştır: Saf katının derişimi sabittir; CaCO3(k) eklemek dengeyi kaydırmaz, sıcaklık sabit kaldıkça CO2'nin kısmi basıncı Kp değerine eşit kalır.",
        "en": "I is correct: pure solids are not written in the equilibrium expression, so Kc = [CO2]. II is correct: in the gas phase Δn = 1 - 0 = 1, so Kp = Kc · (RT)^1. III is wrong: the concentration of a pure solid is constant; adding CaCO3(s) does not shift the equilibrium, and as long as the temperature is constant the partial pressure of CO2 stays equal to Kp.",
        "de": "I ist richtig: Reine Feststoffe erscheinen nicht im Gleichgewichtsausdruck, also Kc = [CO2]. II ist richtig: In der Gasphase ist Δn = 1 - 0 = 1, also Kp = Kc · (RT)^1. III ist falsch: Die Konzentration eines reinen Feststoffs ist konstant; die Zugabe von CaCO3(s) verschiebt das Gleichgewicht nicht, und bei konstanter Temperatur bleibt der CO2-Partialdruck gleich Kp.",
        "fr": "I est correcte : les solides purs n’apparaissent pas dans l’expression d’équilibre, donc Kc = [CO2]. II est correcte : en phase gazeuse Δn = 1 - 0 = 1, donc Kp = Kc · (RT)^1. III est fausse : la concentration d’un solide pur est constante ; ajouter du CaCO3(s) ne déplace pas l’équilibre et, tant que la température est constante, la pression partielle de CO2 reste égale à Kp.",
        "ru": "I верно: чистые твёрдые вещества не входят в выражение константы, поэтому Kc = [CO2]. II верно: для газов Δn = 1 - 0 = 1, поэтому Kp = Kc · (RT)^1. III неверно: концентрация чистого твёрдого вещества постоянна; добавление CaCO3(тв) не смещает равновесие, и при постоянной температуре парциальное давление CO2 остаётся равным Kp.",
        "ar": "I صحيحة: لا تُكتب المواد الصلبة النقية في تعبير الاتزان، لذلك Kc = [CO2]. II صحيحة: في الطور الغازي Δn = 1 - 0 = 1، لذلك Kp = Kc · (RT)^1. III خاطئة: تركيز المادة الصلبة النقية ثابت؛ إضافة CaCO3(s) لا تزيح الاتزان، وما دامت درجة الحرارة ثابتة يبقى الضغط الجزئي لـ CO2 مساويًا لـ Kp.",
        "zh": "I 正确：纯固体不写入平衡表达式，所以 Kc = [CO2]。II 正确：气相中 Δn = 1 - 0 = 1，所以 Kp = Kc · (RT)^1。III 错误：纯固体的浓度是常数，加入 CaCO3(s) 不会使平衡移动；只要温度不变，CO2 的分压就始终等于 Kp。",
        "ku": "I rast e: madeyên hişk ên paqij di hevkêşeya hevsengiyê de nayên nivîsandin, ji ber vê yekê Kc = [CO2] e. II rast e: ji ber ku di fazê gaz de Δn = 1 - 0 = 1 e, Kp = Kc · (RT)^1. III şaş e: tîrbûna madeya hişk a paqij sabît e; lêzêdekirina CaCO3(s) hevsengiyê nakişîne û heta ku germahî sabît be zexta parçeyî ya CO2 wekhevî nirxa Kp dimîne."
      }
    },
    {
      "id": "u18-twin10",
      "stem": {
        "tr": "Tabloda gaz fazında gerçekleşen bir tepkimenin derişimler cinsinden denge sabitinin (Kc) farklı sıcaklıklardaki değerleri verilmiştir. Bu tepkimeyle ilgili I. Tepkime ekzotermiktir. II. Sıcaklık artırıldığında ileri tepkimenin hızı azalır. III. İleri tepkimenin aktifleşme enerjisi geri tepkimeninkinden büyüktür. yargılarından hangileri doğrudur?",
        "en": "The table gives the equilibrium constant in terms of concentrations (Kc) of a gas-phase reaction at different temperatures. I. The reaction is exothermic. II. Raising the temperature decreases the rate of the forward reaction. III. The activation energy of the forward reaction is larger than that of the reverse reaction. Which of these statements about the reaction are correct?",
        "de": "Die Tabelle gibt die Gleichgewichtskonstante Kc einer Gasphasenreaktion bei verschiedenen Temperaturen an. I. Die Reaktion ist exotherm. II. Eine Temperaturerhöhung verringert die Geschwindigkeit der Hinreaktion. III. Die Aktivierungsenergie der Hinreaktion ist größer als die der Rückreaktion. Welche Aussagen über diese Reaktion sind richtig?",
        "fr": "Le tableau donne la constante d'équilibre en concentrations (Kc) d'une réaction en phase gazeuse à différentes températures. I. La réaction est exothermique. II. Une hausse de température diminue la vitesse de la réaction directe. III. L'énergie d'activation de la réaction directe est supérieure à celle de la réaction inverse. Lesquelles de ces affirmations sur la réaction sont exactes ?",
        "ru": "В таблице приведены значения концентрационной константы равновесия Kc газофазной реакции при разных температурах. I. Реакция экзотермическая. II. При повышении температуры скорость прямой реакции уменьшается. III. Энергия активации прямой реакции больше, чем обратной. Какие утверждения об этой реакции верны?",
        "ar": "يعطي الجدول قيم ثابت الاتزان بدلالة التراكيز (Kc) لتفاعل في الطور الغازي عند درجات حرارة مختلفة. I. التفاعل طارد للحرارة. II. رفع درجة الحرارة يقلل سرعة التفاعل الأمامي. III. طاقة تنشيط التفاعل الأمامي أكبر من طاقة تنشيط التفاعل العكسي. أيّ هذه العبارات عن التفاعل صحيحة؟",
        "zh": "表中给出了某气相反应在不同温度下以浓度表示的平衡常数 Kc。I. 该反应是放热反应。II. 升高温度时正反应速率减小。III. 正反应的活化能大于逆反应的活化能。关于该反应的上述说法中哪些正确？",
        "ku": "Tablo nirxên sabîta hevsengiyê ya bi tîrbûnan (Kc) a reaksiyoneke di fazê gaz de li germahiyên cuda dide. I. Reaksiyon ekzotermîk e. II. Dema germahî tê bilindkirin leza reaksiyona pêşve kêm dibe. III. Enerjiya aktîvasyonê ya reaksiyona pêşve ji ya reaksiyona paşve mezintir e. Derbarê vê reaksiyonê de kîjan ji van gotinan rast in?"
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
      "correctIndex": 0,
      "explanation": {
        "tr": "I doğrudur: Sıcaklık artınca Kc küçüldüğüne göre denge girenler yönüne kaymaktadır; bu ekzotermik tepkimenin özelliğidir. II yanlıştır: Sıcaklık artışı ileri ve geri tepkimelerin ikisini de hızlandırır; geri tepkime daha çok hızlandığı için denge girenlere kayar. III yanlıştır: Ekzotermik tepkimede ΔH = Ea(ileri) - Ea(geri) < 0 olduğundan geri tepkimenin aktifleşme enerjisi daha büyüktür.",
        "en": "I is correct: Kc decreases as the temperature rises, so the equilibrium shifts toward the reactants — a feature of an exothermic reaction. II is wrong: raising the temperature speeds up both the forward and the reverse reaction; the reverse reaction speeds up more, so the equilibrium shifts to the reactants. III is wrong: for an exothermic reaction ΔH = Ea(forward) - Ea(reverse) < 0, so the reverse activation energy is the larger one.",
        "de": "I ist richtig: Kc nimmt mit steigender Temperatur ab, das Gleichgewicht verschiebt sich also zu den Edukten – typisch für eine exotherme Reaktion. II ist falsch: Eine Temperaturerhöhung beschleunigt Hin- und Rückreaktion; die Rückreaktion wird stärker beschleunigt, daher verschiebt sich das Gleichgewicht zu den Edukten. III ist falsch: Bei einer exothermen Reaktion ist ΔH = Ea(hin) - Ea(rück) < 0, also ist die Aktivierungsenergie der Rückreaktion größer.",
        "fr": "I est correcte : Kc diminue quand la température augmente, l’équilibre se déplace donc vers les réactifs — caractéristique d’une réaction exothermique. II est fausse : une hausse de température accélère les deux réactions, directe et inverse ; la réaction inverse est davantage accélérée, d’où le déplacement vers les réactifs. III est fausse : pour une réaction exothermique ΔH = Ea(directe) - Ea(inverse) < 0, donc l’énergie d’activation inverse est la plus grande.",
        "ru": "I верно: с ростом температуры Kc уменьшается, значит, равновесие смещается к реагентам — признак экзотермической реакции. II неверно: нагревание ускоряет и прямую, и обратную реакции; обратная ускоряется сильнее, поэтому равновесие смещается к реагентам. III неверно: для экзотермической реакции ΔH = Ea(пр) - Ea(обр) < 0, поэтому энергия активации обратной реакции больше.",
        "ar": "I صحيحة: تقل Kc مع ارتفاع درجة الحرارة، أي أن الاتزان ينزاح نحو المتفاعلات، وهذه سمة التفاعل الطارد للحرارة. II خاطئة: رفع درجة الحرارة يسرّع التفاعلين الأمامي والعكسي معًا؛ لكن العكسي يتسارع أكثر فينزاح الاتزان نحو المتفاعلات. III خاطئة: في التفاعل الطارد للحرارة ΔH = Ea(الأمامي) - Ea(العكسي) < 0، لذا طاقة تنشيط التفاعل العكسي هي الأكبر.",
        "zh": "I 正确：温度升高 Kc 减小，说明平衡向逆反应方向移动，这是放热反应的特征。II 错误：升高温度使正、逆反应速率都增大，只是逆反应增大得更多，所以平衡逆向移动。III 错误：放热反应 ΔH = Ea(正) - Ea(逆) < 0，所以逆反应的活化能更大。",
        "ku": "I rast e: ji ber ku bi bilindbûna germahiyê Kc piçûk dibe, hevsengî ber bi reaktantan ve diçe; ev taybetmendiya reaksiyona ekzotermîk e. II şaş e: bilindbûna germahiyê hem reaksiyona pêşve hem jî ya paşve bileztir dike; ji ber ku reaksiyona paşve bêtir bilez dibe, hevsengî ber bi reaktantan ve diçe. III şaş e: di reaksiyona ekzotermîk de ΔH = Ea(pêşve) - Ea(paşve) < 0 e, ji ber vê yekê enerjiya aktîvasyonê ya reaksiyona paşve mezintir e."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Sıcaklık (K)",
            "en": "Temperature (K)",
            "de": "Temperatur (K)",
            "fr": "Température (K)",
            "ru": "Температура (K)",
            "ar": "درجة الحرارة (K)",
            "zh": "温度 (K)",
            "ku": "Germahî (K)"
          },
          "Kc"
        ],
        "rows": [
          [
            "300",
            "50"
          ],
          [
            "400",
            "10"
          ],
          [
            "500",
            "2"
          ]
        ]
      }
    },
    {
      "id": "u18-twin11",
      "stem": {
        "tr": "Şekildeki grafik, sabit hacimli bir kapta sabit sıcaklıkta dengede bulunan X(g) + Y(g) ⇌ Z(g) sistemine t1 anında bir etki yapılmasından sonra derişimlerin zamanla değişimini göstermektedir. I. t1 anında kaba Z gazı eklenmiştir. II. t1–t2 aralığında geri tepkimenin hızı ileri tepkimenin hızından büyüktür. III. t2'den sonraki yeni dengede Kc değeri ilk dengedekinden büyüktür. yargılarından hangileri doğrudur?",
        "en": "The graph shows how the concentrations change with time after the system X(g) + Y(g) ⇌ Z(g), at equilibrium in a rigid container at constant temperature, is disturbed at time t1. I. Gas Z was added to the container at t1. II. Between t1 and t2 the rate of the reverse reaction is greater than that of the forward reaction. III. In the new equilibrium after t2, Kc is larger than in the first equilibrium. Which of these statements are correct?",
        "de": "Das Diagramm zeigt die zeitliche Änderung der Konzentrationen, nachdem das System X(g) + Y(g) ⇌ Z(g), das sich in einem Gefäß mit konstantem Volumen bei konstanter Temperatur im Gleichgewicht befindet, zum Zeitpunkt t1 gestört wurde. I. Zum Zeitpunkt t1 wurde Gas Z zugegeben. II. Zwischen t1 und t2 ist die Rückreaktion schneller als die Hinreaktion. III. Im neuen Gleichgewicht nach t2 ist Kc größer als im ersten Gleichgewicht. Welche Aussagen sind richtig?",
        "fr": "Le graphique montre l'évolution des concentrations après que le système X(g) + Y(g) ⇌ Z(g), à l'équilibre dans un récipient de volume constant à température constante, a été perturbé à l'instant t1. I. Du gaz Z a été ajouté au récipient à t1. II. Entre t1 et t2, la vitesse de la réaction inverse est supérieure à celle de la réaction directe. III. Dans le nouvel équilibre après t2, Kc est plus grand que dans le premier équilibre. Lesquelles de ces affirmations sont exactes ?",
        "ru": "На графике показано изменение концентраций во времени после того, как на систему X(г) + Y(г) ⇌ Z(г), находившуюся в равновесии в сосуде постоянного объёма при постоянной температуре, в момент t1 было оказано воздействие. I. В момент t1 в сосуд добавили газ Z. II. В промежутке t1–t2 скорость обратной реакции больше скорости прямой. III. В новом равновесии после t2 значение Kc больше, чем в первом. Какие утверждения верны?",
        "ar": "يبيّن الرسم البياني تغيّر التراكيز مع الزمن بعد التأثير عند اللحظة t1 في النظام X(g) + Y(g) ⇌ Z(g) المتزن في وعاء ثابت الحجم عند درجة حرارة ثابتة. I. أُضيف غاز Z إلى الوعاء عند t1. II. في الفترة t1–t2 تكون سرعة التفاعل العكسي أكبر من سرعة التفاعل الأمامي. III. في الاتزان الجديد بعد t2 تكون قيمة Kc أكبر منها في الاتزان الأول. أيّ هذه العبارات صحيحة؟",
        "zh": "图中曲线表示：在恒温恒容容器中处于平衡的体系 X(g) + Y(g) ⇌ Z(g) 在 t1 时刻受到某种改变后，各物质浓度随时间的变化。I. t1 时向容器中加入了 Z 气体。II. t1–t2 期间逆反应速率大于正反应速率。III. t2 之后的新平衡中 Kc 比原平衡大。以上说法中哪些正确？",
        "ku": "Grafîk guherîna tîrbûnan li gorî demê nîşan dide, piştî ku li sîstema X(g) + Y(g) ⇌ Z(g) ya di firaxeke bi qebareya sabît û germahiya sabît de di hevsengiyê de, di dema t1 de bandorek hatiye kirin. I. Di dema t1 de gaza Z li firaxê hatiye zêdekirin. II. Di navbera t1–t2 de leza reaksiyona paşve ji leza reaksiyona pêşve mezintir e. III. Di hevsengiya nû ya piştî t2 de nirxa Kc ji ya hevsengiya yekem mezintir e. Kîjan ji van gotinan rast in?"
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
        "tr": "I doğru: t1 anında yalnızca Z'nin derişimi dikey olarak sıçramış, X ve Y ise ancak sonradan değişmeye başlamıştır; bu, kaba Z eklendiğini gösterir. Hacim değişseydi üç gazın derişimi aynı anda sıçrardı; sıcaklık değişseydi hiçbir derişimde ani sıçrama olmazdı. II doğru: t1–t2 arasında Z azalırken X ve Y artmaktadır, yani tepkime net olarak geri yönde ilerler; bu, geri tepkimenin ileri tepkimeden hızlı olduğu anlamına gelir. III yanlış: sıcaklık sabit olduğundan Kc değişmez; eklenen Z'nin bir kısmı harcanır ama yeni dengede de [Z] / ([X][Y]) aynı değeri alır.",
        "en": "I is correct: at t1 only [Z] jumps vertically, while X and Y start to change only afterwards; this shows that Z was added. A volume change would make all three concentrations jump at once, and a temperature change would cause no sudden jump at all. II is correct: between t1 and t2, Z decreases while X and Y increase, so the reaction proceeds net in the reverse direction, meaning the reverse reaction is faster than the forward one. III is incorrect: the temperature is constant, so Kc does not change; part of the added Z is used up, but [Z] / ([X][Y]) returns to the same value.",
        "de": "I ist richtig: Bei t1 springt nur [Z] senkrecht nach oben, X und Y ändern sich erst danach; also wurde Z zugegeben. Eine Volumenänderung ließe alle drei Konzentrationen gleichzeitig springen, eine Temperaturänderung erzeugt keinen plötzlichen Sprung. II ist richtig: Zwischen t1 und t2 nimmt Z ab, X und Y nehmen zu; die Reaktion läuft netto rückwärts, die Rückreaktion ist also schneller als die Hinreaktion. III ist falsch: Die Temperatur ist konstant, daher ändert sich Kc nicht; ein Teil des zugegebenen Z wird verbraucht, [Z] / ([X][Y]) nimmt aber wieder denselben Wert an.",
        "fr": "I est exacte : à t1, seule [Z] fait un saut vertical, X et Y ne varient qu'ensuite ; on a donc ajouté Z. Un changement de volume ferait sauter les trois concentrations en même temps, et un changement de température ne provoquerait aucun saut brusque. II est exacte : entre t1 et t2, Z diminue tandis que X et Y augmentent ; la réaction évolue globalement dans le sens inverse, la réaction inverse est donc plus rapide que la directe. III est fausse : la température étant constante, Kc ne change pas ; une partie du Z ajouté est consommée, mais [Z] / ([X][Y]) reprend la même valeur.",
        "ru": "I верно: в момент t1 скачком возрастает только [Z], а X и Y начинают меняться лишь потом; значит, был добавлен Z. При изменении объёма скачком изменились бы все три концентрации, а при изменении температуры резкого скачка не было бы вовсе. II верно: в промежутке t1–t2 Z убывает, а X и Y растут, т. е. реакция в целом идёт в обратном направлении — обратная реакция быстрее прямой. III неверно: температура постоянна, поэтому Kc не меняется; часть добавленного Z расходуется, но отношение [Z] / ([X][Y]) возвращается к прежнему значению.",
        "ar": "I صحيحة: عند t1 يقفز تركيز Z وحده قفزة رأسية، ولا يبدأ X وY بالتغير إلا بعد ذلك؛ وهذا يدل على إضافة Z. لو تغيّر الحجم لقفزت تراكيز الغازات الثلاثة معًا، ولو تغيّرت درجة الحرارة لما حدثت قفزة مفاجئة. II صحيحة: بين t1 وt2 يتناقص Z ويتزايد X وY، أي أن التفاعل يسير صافيًا في الاتجاه العكسي، فالتفاعل العكسي أسرع من الأمامي. III خاطئة: درجة الحرارة ثابتة فلا يتغير Kc؛ يُستهلك جزء من Z المضاف لكن [Z] / ([X][Y]) يعود إلى القيمة نفسها.",
        "zh": "I 正确：t1 时只有 [Z] 垂直跃升，X 和 Y 随后才开始变化，说明加入了 Z。若改变体积，三种气体的浓度会同时跃变；若改变温度，则不会出现突然的跃变。II 正确：t1–t2 期间 Z 减少而 X、Y 增加，反应净向逆方向进行，即逆反应速率大于正反应速率。III 错误：温度不变，Kc 不变；加入的 Z 部分被消耗，[Z] / ([X][Y]) 又回到原来的数值。",
        "ku": "I rast e: di dema t1 de tenê [Z] bi awayekî vertîkal bazdaye, X û Y paşê dest bi guherînê dikin; ev nîşan dide ku Z hatiye zêdekirin. Heke qebare biguheriya, tîrbûna her sê gazan dê bi hev re baz bidaya; heke germahî biguheriya, ti bazdaneke ji nişka ve çênedibû. II rast e: di navbera t1–t2 de Z kêm dibe û X û Y zêde dibin, yanî reaksiyon bi giştî ber bi paşve diçe; ev tê wateya ku reaksiyona paşve ji ya pêşve zûtir e. III şaş e: germahî sabît e, ji ber vê yekê Kc naguhere; beşek ji Z-ya zêdekirî tê xerckirin, lê [Z] / ([X][Y]) dîsa heman nirxê digire."
      },
      "figure": {
        "kind": "graph",
        "xLabel": {
          "tr": "Zaman",
          "en": "Time",
          "de": "Zeit",
          "fr": "Temps",
          "ru": "Время",
          "ar": "الزمن",
          "zh": "时间",
          "ku": "Dem"
        },
        "yLabel": {
          "tr": "Derişim",
          "en": "Concentration",
          "de": "Konzentration",
          "fr": "Concentration",
          "ru": "Концентрация",
          "ar": "التركيز",
          "zh": "浓度",
          "ku": "Tîrbûn"
        },
        "xMax": 35,
        "yMax": 1.2,
        "xTicks": [
          {
            "v": 10,
            "label": "t₁"
          },
          {
            "v": 25,
            "label": "t₂"
          }
        ],
        "series": [
          {
            "points": [
              [
                0,
                0.4
              ],
              [
                10,
                0.4
              ],
              [
                13,
                0.45
              ],
              [
                16,
                0.475
              ],
              [
                20,
                0.492
              ],
              [
                25,
                0.5
              ],
              [
                35,
                0.5
              ]
            ],
            "label": "X"
          },
          {
            "points": [
              [
                0,
                0.2
              ],
              [
                10,
                0.2
              ],
              [
                13,
                0.25
              ],
              [
                16,
                0.275
              ],
              [
                20,
                0.292
              ],
              [
                25,
                0.3
              ],
              [
                35,
                0.3
              ]
            ],
            "label": "Y",
            "tone": 1
          },
          {
            "points": [
              [
                0,
                0.5
              ],
              [
                10,
                0.5
              ],
              [
                10,
                1.04
              ],
              [
                13,
                0.99
              ],
              [
                16,
                0.965
              ],
              [
                20,
                0.948
              ],
              [
                25,
                0.94
              ],
              [
                35,
                0.94
              ]
            ],
            "label": "Z",
            "tone": 2
          }
        ]
      }
    },
    {
      "id": "u18-twin12",
      "stem": {
        "tr": "Sabit hacimli kapalı bir kaba yalnızca N2O4 gazı konuluyor. Sabit sıcaklıkta N2O4(g) ⇌ 2NO2(g) dengesi kurulurken kaptaki toplam basıncın zamanla değişimi şekildeki grafikte verilmiştir. Bu sıcaklıkta kısmi basınçlar cinsinden denge sabiti Kp kaçtır?",
        "en": "Only N2O4 gas is placed in a closed rigid container. The graph shows how the total pressure in the container changes with time while the equilibrium N2O4(g) ⇌ 2NO2(g) is established at constant temperature. What is the equilibrium constant in terms of partial pressures, Kp, at this temperature?",
        "de": "In ein geschlossenes Gefäß mit konstantem Volumen wird nur N2O4-Gas gegeben. Das Diagramm zeigt die zeitliche Änderung des Gesamtdrucks, während sich bei konstanter Temperatur das Gleichgewicht N2O4(g) ⇌ 2NO2(g) einstellt. Wie groß ist die Gleichgewichtskonstante Kp bei dieser Temperatur?",
        "fr": "On introduit uniquement du N2O4 gazeux dans un récipient fermé de volume constant. Le graphique montre l'évolution de la pression totale au cours du temps pendant que l'équilibre N2O4(g) ⇌ 2NO2(g) s'établit à température constante. Quelle est la constante d'équilibre en pressions partielles Kp à cette température ?",
        "ru": "В закрытый сосуд постоянного объёма помещают только газ N2O4. На графике показано изменение общего давления в сосуде во времени при установлении равновесия N2O4(г) ⇌ 2NO2(г) при постоянной температуре. Чему равна константа равновесия Kp в парциальных давлениях при этой температуре?",
        "ar": "يوضع غاز N2O4 وحده في وعاء مغلق ثابت الحجم. يبيّن الرسم البياني تغيّر الضغط الكلي في الوعاء مع الزمن في أثناء قيام الاتزان N2O4(g) ⇌ 2NO2(g) عند درجة حرارة ثابتة. ما ثابت الاتزان بدلالة الضغوط الجزئية Kp عند هذه الدرجة؟",
        "zh": "向密闭恒容容器中只充入 N2O4 气体。恒温下建立平衡 N2O4(g) ⇌ 2NO2(g) 的过程中，容器内总压强随时间的变化如图所示。该温度下以分压表示的平衡常数 Kp 是多少？",
        "ku": "Tenê gaza N2O4 dikeve firaxeke girtî ya bi qebareya sabît. Dema ku di germahiya sabît de hevsengiya N2O4(g) ⇌ 2NO2(g) saz dibe, guherîna zexta giştî ya firaxê li gorî demê di grafîkê de hatiye dayîn. Di vê germahiyê de sabîta hevsengiyê ya bi zextên parçeyî Kp çend e?"
      },
      "options": [
        {
          "tr": "0,078",
          "en": "0.078",
          "de": "0,078",
          "fr": "0,078",
          "ru": "0,078",
          "ar": "0.078",
          "zh": "0.078",
          "ku": "0,078"
        },
        {
          "tr": "3,2",
          "en": "3.2",
          "de": "3,2",
          "fr": "3,2",
          "ru": "3,2",
          "ar": "3.2",
          "zh": "3.2",
          "ku": "3,2"
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
          "tr": "12,8",
          "en": "12.8",
          "de": "12,8",
          "fr": "12,8",
          "ru": "12,8",
          "ar": "12.8",
          "zh": "12.8",
          "ku": "12,8"
        },
        {
          "tr": "16,2",
          "en": "16.2",
          "de": "16,2",
          "fr": "16,2",
          "ru": "16,2",
          "ar": "16.2",
          "zh": "16.2",
          "ku": "16,2"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "N2O4'ün basıncı x atm azalırsa NO2'nin basıncı 2x atm artar. Toplam basınç: (1 - x) + 2x = 1 + x = 1,8 → x = 0,8. Dengede P(N2O4) = 0,2 atm, P(NO2) = 1,6 atm. Kp = P(NO2)^2 / P(N2O4) = 2,56 / 0,2 = 12,8. Üs unutulursa 1,6/0,2 = 8; NO2 basıncı 2x yerine x alınırsa 0,8^2/0,2 = 3,2 bulunur.",
        "en": "If the N2O4 pressure falls by x atm, the NO2 pressure rises by 2x atm. Total pressure: (1 - x) + 2x = 1 + x = 1.8 → x = 0.8. At equilibrium P(N2O4) = 0.2 atm and P(NO2) = 1.6 atm. Kp = P(NO2)^2 / P(N2O4) = 2.56 / 0.2 = 12.8. Forgetting the exponent gives 1.6/0.2 = 8; taking the NO2 pressure as x instead of 2x gives 0.8^2/0.2 = 3.2.",
        "de": "Sinkt der N2O4-Druck um x atm, steigt der NO2-Druck um 2x atm. Gesamtdruck: (1 - x) + 2x = 1 + x = 1,8 → x = 0,8. Im Gleichgewicht: P(N2O4) = 0,2 atm, P(NO2) = 1,6 atm. Kp = P(NO2)^2 / P(N2O4) = 2,56 / 0,2 = 12,8. Ohne Exponent erhält man 1,6/0,2 = 8; setzt man den NO2-Druck als x statt 2x an, erhält man 0,8^2/0,2 = 3,2.",
        "fr": "Si la pression de N2O4 diminue de x atm, celle de NO2 augmente de 2x atm. Pression totale : (1 - x) + 2x = 1 + x = 1,8 → x = 0,8. À l’équilibre P(N2O4) = 0,2 atm et P(NO2) = 1,6 atm. Kp = P(NO2)^2 / P(N2O4) = 2,56 / 0,2 = 12,8. Sans l’exposant on obtient 1,6/0,2 = 8 ; en prenant x au lieu de 2x pour NO2, on obtient 0,8^2/0,2 = 3,2.",
        "ru": "Если давление N2O4 уменьшается на x атм, давление NO2 увеличивается на 2x атм. Общее давление: (1 - x) + 2x = 1 + x = 1,8 → x = 0,8. В равновесии P(N2O4) = 0,2 атм, P(NO2) = 1,6 атм. Kp = P(NO2)^2 / P(N2O4) = 2,56 / 0,2 = 12,8. Если забыть показатель степени, получится 1,6/0,2 = 8; если взять давление NO2 равным x вместо 2x — 0,8^2/0,2 = 3,2.",
        "ar": "إذا نقص ضغط N2O4 بمقدار x atm يزداد ضغط NO2 بمقدار 2x atm. الضغط الكلي: (1 - x) + 2x = 1 + x = 1.8 → x = 0.8. عند الاتزان P(N2O4) = 0.2 atm وP(NO2) = 1.6 atm. Kp = P(NO2)^2 / P(N2O4) = 2.56 / 0.2 = 12.8. إهمال الأس يعطي 1.6/0.2 = 8؛ واعتبار ضغط NO2 مساويًا x بدل 2x يعطي 0.8^2/0.2 = 3.2.",
        "zh": "若 N2O4 的分压减小 x atm，则 NO2 的分压增大 2x atm。总压：(1 - x) + 2x = 1 + x = 1.8 → x = 0.8。平衡时 P(N2O4) = 0.2 atm，P(NO2) = 1.6 atm。Kp = P(NO2)^2 / P(N2O4) = 2.56 / 0.2 = 12.8。忘记指数得 1.6/0.2 = 8；把 NO2 的分压当作 x 而不是 2x 得 0.8^2/0.2 = 3.2。",
        "ku": "Heke zexta N2O4 x atm kêm bibe, zexta NO2 2x atm zêde dibe. Zexta giştî: (1 - x) + 2x = 1 + x = 1,8 → x = 0,8. Di hevsengiyê de P(N2O4) = 0,2 atm, P(NO2) = 1,6 atm. Kp = P(NO2)^2 / P(N2O4) = 2,56 / 0,2 = 12,8. Heke hêz were jibîrkirin 1,6/0,2 = 8; heke zexta NO2 li şûna 2x wekî x were girtin 0,8^2/0,2 = 3,2 tê dîtin."
      },
      "figure": {
        "kind": "graph",
        "xLabel": {
          "tr": "Zaman (s)",
          "en": "Time (s)",
          "de": "Zeit (s)",
          "fr": "Temps (s)",
          "ru": "Время (с)",
          "ar": "الزمن (s)",
          "zh": "时间 (s)",
          "ku": "Dem (s)"
        },
        "yLabel": {
          "tr": "Toplam basınç (atm)",
          "en": "Total pressure (atm)",
          "de": "Gesamtdruck (atm)",
          "fr": "Pression totale (atm)",
          "ru": "Общее давление (атм)",
          "ar": "الضغط الكلي (atm)",
          "zh": "总压强 (atm)",
          "ku": "Zexta giştî (atm)"
        },
        "xMax": 40,
        "yMax": 2.2,
        "xTicks": [
          10,
          20,
          30,
          40
        ],
        "yTicks": [
          0.5,
          1,
          1.5,
          1.8
        ],
        "series": [
          {
            "points": [
              [
                0,
                1
              ],
              [
                5,
                1.38
              ],
              [
                10,
                1.6
              ],
              [
                15,
                1.72
              ],
              [
                20,
                1.78
              ],
              [
                25,
                1.8
              ],
              [
                40,
                1.8
              ]
            ]
          }
        ]
      }
    },
    {
      "id": "u18-twin13",
      "stem": {
        "tr": "3Fe(k) + 4H2O(g) ⇌ Fe3O4(k) + 4H2(g) tepkimesinin derişimler cinsinden denge sabiti (Kc) ifadesi aşağıdakilerden hangisidir?",
        "en": "Which of the following is the expression for the equilibrium constant in terms of concentrations (Kc) of the reaction 3Fe(s) + 4H2O(g) ⇌ Fe3O4(s) + 4H2(g)?",
        "de": "Welcher der folgenden Ausdrücke ist die Gleichgewichtskonstante bezüglich der Konzentrationen (Kc) der Reaktion 3Fe(s) + 4H2O(g) ⇌ Fe3O4(s) + 4H2(g)?",
        "fr": "Laquelle des expressions suivantes est la constante d’équilibre en concentrations (Kc) de la réaction 3Fe(s) + 4H2O(g) ⇌ Fe3O4(s) + 4H2(g) ?",
        "ru": "Какое выражение соответствует константе равновесия Kc (через концентрации) для реакции 3Fe(тв) + 4H2O(г) ⇌ Fe3O4(тв) + 4H2(г)?",
        "ar": "أي مما يلي هو تعبير ثابت الاتزان بدلالة التراكيز (Kc) للتفاعل 3Fe(s) + 4H2O(g) ⇌ Fe3O4(s) + 4H2(g)؟",
        "zh": "反应 3Fe(s) + 4H2O(g) ⇌ Fe3O4(s) + 4H2(g) 以浓度表示的平衡常数 (Kc) 表达式是下列哪一项？",
        "ku": "Hevkêşeya sabîta hevsengiyê ya bi tîrbûnan (Kc) ji bo reaksiyona 3Fe(s) + 4H2O(g) ⇌ Fe3O4(s) + 4H2(g) kîjan e?"
      },
      "options": [
        {
          "tr": "[Fe3O4][H2]^4 / ([Fe]^3[H2O]^4)",
          "en": "[Fe3O4][H2]^4 / ([Fe]^3[H2O]^4)",
          "de": "[Fe3O4][H2]^4 / ([Fe]^3[H2O]^4)",
          "fr": "[Fe3O4][H2]^4 / ([Fe]^3[H2O]^4)",
          "ru": "[Fe3O4][H2]^4 / ([Fe]^3[H2O]^4)",
          "ar": "[Fe3O4][H2]^4 / ([Fe]^3[H2O]^4)",
          "zh": "[Fe3O4][H2]^4 / ([Fe]^3[H2O]^4)",
          "ku": "[Fe3O4][H2]^4 / ([Fe]^3[H2O]^4)"
        },
        {
          "tr": "[H2O]^4 / [H2]^4",
          "en": "[H2O]^4 / [H2]^4",
          "de": "[H2O]^4 / [H2]^4",
          "fr": "[H2O]^4 / [H2]^4",
          "ru": "[H2O]^4 / [H2]^4",
          "ar": "[H2O]^4 / [H2]^4",
          "zh": "[H2O]^4 / [H2]^4",
          "ku": "[H2O]^4 / [H2]^4"
        },
        {
          "tr": "[H2]^4",
          "en": "[H2]^4",
          "de": "[H2]^4",
          "fr": "[H2]^4",
          "ru": "[H2]^4",
          "ar": "[H2]^4",
          "zh": "[H2]^4",
          "ku": "[H2]^4"
        },
        {
          "tr": "[H2] / [H2O]",
          "en": "[H2] / [H2O]",
          "de": "[H2] / [H2O]",
          "fr": "[H2] / [H2O]",
          "ru": "[H2] / [H2O]",
          "ar": "[H2] / [H2O]",
          "zh": "[H2] / [H2O]",
          "ku": "[H2] / [H2O]"
        },
        {
          "tr": "[H2]^4 / [H2O]^4",
          "en": "[H2]^4 / [H2O]^4",
          "de": "[H2]^4 / [H2O]^4",
          "fr": "[H2]^4 / [H2O]^4",
          "ru": "[H2]^4 / [H2O]^4",
          "ar": "[H2]^4 / [H2O]^4",
          "zh": "[H2]^4 / [H2O]^4",
          "ku": "[H2]^4 / [H2O]^4"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Fe ve Fe3O4 saf katı olduğundan derişimleri sabittir ve denge ifadesine yazılmaz. Gazların derişimleri, katsayıları üs olarak alınarak yazılır; ürünler pay, girenler payda kısmına gelir: Kc = [H2]^4 / [H2O]^4. Katıları da içeren ifade heterojen denge kuralına aykırıdır; [H2O]^4 / [H2]^4 ters tepkimenin sabitidir; katsayıları üs yapmayan [H2] / [H2O] ise farklı bir sayısal değer verir.",
        "en": "Fe and Fe3O4 are pure solids, so their concentrations are constant and are not written in the expression. Gas concentrations are raised to their coefficients, products in the numerator and reactants in the denominator: Kc = [H2]^4 / [H2O]^4. The expression containing the solids breaks the rule for heterogeneous equilibria; [H2O]^4 / [H2]^4 is the constant of the reverse reaction; [H2] / [H2O], which ignores the exponents, gives a different numerical value.",
        "de": "Fe und Fe3O4 sind reine Feststoffe; ihre Konzentrationen sind konstant und erscheinen nicht im Ausdruck. Die Gaskonzentrationen werden mit ihren Koeffizienten potenziert, Produkte im Zähler, Edukte im Nenner: Kc = [H2]^4 / [H2O]^4. Der Ausdruck mit den Feststoffen verstößt gegen die Regel für heterogene Gleichgewichte; [H2O]^4 / [H2]^4 ist die Konstante der Rückreaktion; [H2] / [H2O] ohne Exponenten liefert einen anderen Zahlenwert.",
        "fr": "Fe et Fe3O4 sont des solides purs : leurs concentrations sont constantes et n’apparaissent pas dans l’expression. Les concentrations des gaz sont élevées à la puissance de leurs coefficients, produits au numérateur et réactifs au dénominateur : Kc = [H2]^4 / [H2O]^4. L’expression contenant les solides viole la règle des équilibres hétérogènes ; [H2O]^4 / [H2]^4 est la constante de la réaction inverse ; [H2] / [H2O], sans exposants, donne une autre valeur numérique.",
        "ru": "Fe и Fe3O4 — чистые твёрдые вещества, их концентрации постоянны и в выражение константы не входят. Концентрации газов возводят в степени, равные коэффициентам; продукты записывают в числитель, реагенты — в знаменатель: Kc = [H2]^4 / [H2O]^4. Выражение с твёрдыми веществами нарушает правило для гетерогенных равновесий; [H2O]^4 / [H2]^4 — константа обратной реакции; [H2] / [H2O] без показателей степени даёт другое численное значение.",
        "ar": "Fe وFe3O4 مادتان صلبتان نقيتان، فتركيزهما ثابت ولا يُكتبان في التعبير. تُرفع تراكيز الغازات لأسس تساوي معاملاتها، النواتج في البسط والمتفاعلات في المقام: Kc = [H2]^4 / [H2O]^4. التعبير الذي يحتوي المواد الصلبة يخالف قاعدة الاتزان غير المتجانس؛ و[H2O]^4 / [H2]^4 هو ثابت التفاعل العكسي؛ أما [H2] / [H2O] الذي يهمل الأسس فيعطي قيمة عددية مختلفة.",
        "zh": "Fe 和 Fe3O4 是纯固体，浓度为常数，不写入表达式。气体浓度以化学计量数为指数，生成物在分子、反应物在分母：Kc = [H2]^4 / [H2O]^4。包含固体的表达式违反了多相平衡的规则；[H2O]^4 / [H2]^4 是逆反应的平衡常数；忽略指数的 [H2] / [H2O] 数值不同。",
        "ku": "Ji ber ku Fe û Fe3O4 madeyên hişk ên paqij in, tîrbûna wan sabît e û di hevkêşeya hevsengiyê de nayên nivîsandin. Tîrbûnên gazan bi hevberên xwe yên wekî hêz tên nivîsandin; hilber li beşa jorîn, reaktant li beşa jêrîn: Kc = [H2]^4 / [H2O]^4. Hevkêşeya ku madeyên hişk jî dihewîne li dijî qaîdeya hevsengiya heterojen e; [H2O]^4 / [H2]^4 sabîta reaksiyona berevajî ye; [H2] / [H2O], ku hevberan nake hêz, nirxeke din a hejmarî dide."
      }
    },
    {
      "id": "u18-twin14",
      "stem": {
        "tr": "Aşağıdaki olayların hangisinde hem minimum enerji hem de maksimum düzensizlik eğilimi ürünler yönündedir?",
        "en": "In which of the following processes do both the tendency toward minimum energy and the tendency toward maximum disorder favour the products?",
        "de": "Bei welchem der folgenden Vorgänge begünstigen sowohl das Streben nach minimaler Energie als auch das Streben nach maximaler Unordnung die Produkte?",
        "fr": "Dans laquelle des transformations suivantes la tendance à l’énergie minimale et la tendance au désordre maximal favorisent-elles toutes deux les produits ?",
        "ru": "В каком из следующих процессов и стремление к минимуму энергии, и стремление к максимуму неупорядоченности направлены в сторону продуктов?",
        "ar": "في أي من العمليات التالية يكون كل من الميل نحو أقل طاقة والميل نحو أقصى عشوائية في اتجاه النواتج؟",
        "zh": "下列哪一过程中，趋向最低能量和趋向最大混乱度这两种倾向都有利于生成物？",
        "ku": "Di kîjan ji van bûyeran de hem meyla enerjiya kêmtirîn hem jî meyla bêrêziya herî zêde ber bi aliyê hilberan ve ye?"
      },
      "options": [
        {
          "tr": "N2(g) + 3H2(g) → 2NH3(g)  ΔH < 0",
          "en": "N2(g) + 3H2(g) → 2NH3(g)  ΔH < 0",
          "de": "N2(g) + 3H2(g) → 2NH3(g)  ΔH < 0",
          "fr": "N2(g) + 3H2(g) → 2NH3(g)  ΔH < 0",
          "ru": "N2(г) + 3H2(г) → 2NH3(г)  ΔH < 0",
          "ar": "N2(g) + 3H2(g) → 2NH3(g)  ΔH < 0",
          "zh": "N2(g) + 3H2(g) → 2NH3(g)  ΔH < 0",
          "ku": "N2(g) + 3H2(g) → 2NH3(g)  ΔH < 0"
        },
        {
          "tr": "2KClO3(k) → 2KCl(k) + 3O2(g)  ΔH < 0",
          "en": "2KClO3(s) → 2KCl(s) + 3O2(g)  ΔH < 0",
          "de": "2KClO3(s) → 2KCl(s) + 3O2(g)  ΔH < 0",
          "fr": "2KClO3(s) → 2KCl(s) + 3O2(g)  ΔH < 0",
          "ru": "2KClO3(тв) → 2KCl(тв) + 3O2(г)  ΔH < 0",
          "ar": "2KClO3(s) → 2KCl(s) + 3O2(g)  ΔH < 0",
          "zh": "2KClO3(s) → 2KCl(s) + 3O2(g)  ΔH < 0",
          "ku": "2KClO3(s) → 2KCl(s) + 3O2(g)  ΔH < 0"
        },
        {
          "tr": "CaCO3(k) → CaO(k) + CO2(g)  ΔH > 0",
          "en": "CaCO3(s) → CaO(s) + CO2(g)  ΔH > 0",
          "de": "CaCO3(s) → CaO(s) + CO2(g)  ΔH > 0",
          "fr": "CaCO3(s) → CaO(s) + CO2(g)  ΔH > 0",
          "ru": "CaCO3(тв) → CaO(тв) + CO2(г)  ΔH > 0",
          "ar": "CaCO3(s) → CaO(s) + CO2(g)  ΔH > 0",
          "zh": "CaCO3(s) → CaO(s) + CO2(g)  ΔH > 0",
          "ku": "CaCO3(s) → CaO(s) + CO2(g)  ΔH > 0"
        },
        {
          "tr": "H2O(s) → H2O(g)  ΔH > 0",
          "en": "H2O(l) → H2O(g)  ΔH > 0",
          "de": "H2O(l) → H2O(g)  ΔH > 0",
          "fr": "H2O(l) → H2O(g)  ΔH > 0",
          "ru": "H2O(ж.) → H2O(г)  ΔH > 0",
          "ar": "H2O(l) → H2O(g)  ΔH > 0",
          "zh": "H2O(l) → H2O(g)  ΔH > 0",
          "ku": "H2O(l) → H2O(g)  ΔH > 0"
        },
        {
          "tr": "2NO2(g) → N2O4(g)  ΔH < 0",
          "en": "2NO2(g) → N2O4(g)  ΔH < 0",
          "de": "2NO2(g) → N2O4(g)  ΔH < 0",
          "fr": "2NO2(g) → N2O4(g)  ΔH < 0",
          "ru": "2NO2(г) → N2O4(г)  ΔH < 0",
          "ar": "2NO2(g) → N2O4(g)  ΔH < 0",
          "zh": "2NO2(g) → N2O4(g)  ΔH < 0",
          "ku": "2NO2(g) → N2O4(g)  ΔH < 0"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Minimum enerji eğilimi ekzotermik olaylarda ürünler, endotermik olaylarda girenler yönündedir. Maksimum düzensizlik eğilimi gaz mol sayısının arttığı (katı/sıvıdan gaza geçilen) yöndedir. KClO3'ün bozunmasında ΔH < 0 olduğundan enerji eğilimi, katıdan 3 mol gaz oluştuğu için de düzensizlik eğilimi ürünler yönündedir; iki eğilim aynı yönde olduğundan olay tamamlanır. NH3 ve N2O4 oluşumunda enerji ürünler, düzensizlik girenler yönündedir; CaCO3'ün bozunmasında ve suyun buharlaşmasında ise düzensizlik ürünler, enerji girenler yönündedir.",
        "en": "The minimum-energy tendency favours the products in exothermic processes and the reactants in endothermic ones. The maximum-disorder tendency favours the side where the number of gas moles increases (solid/liquid → gas). In the decomposition of KClO3, ΔH < 0, so the energy tendency favours the products, and 3 mol of gas form from a solid, so disorder also favours the products; since both point the same way the process goes to completion. In forming NH3 and N2O4, energy favours the products but disorder favours the reactants; in the decomposition of CaCO3 and the evaporation of water, disorder favours the products but energy favours the reactants.",
        "de": "Das Streben nach minimaler Energie begünstigt bei exothermen Vorgängen die Produkte, bei endothermen die Edukte. Das Streben nach maximaler Unordnung begünstigt die Seite mit mehr Gasmolen (fest/flüssig → gasförmig). Bei der Zersetzung von KClO3 ist ΔH < 0, die Energie begünstigt also die Produkte, und aus einem Feststoff entstehen 3 mol Gas, also begünstigt auch die Unordnung die Produkte; da beide in dieselbe Richtung wirken, läuft der Vorgang vollständig ab. Bei der Bildung von NH3 und N2O4 begünstigt die Energie die Produkte, die Unordnung aber die Edukte; bei der Zersetzung von CaCO3 und beim Verdampfen von Wasser begünstigt die Unordnung die Produkte, die Energie aber die Edukte.",
        "fr": "La tendance à l’énergie minimale favorise les produits dans les transformations exothermiques et les réactifs dans les endothermiques. La tendance au désordre maximal favorise le côté où le nombre de moles de gaz augmente (solide/liquide → gaz). Dans la décomposition de KClO3, ΔH < 0, donc l’énergie favorise les produits, et 3 mol de gaz se forment à partir d’un solide, donc le désordre favorise aussi les produits ; les deux tendances allant dans le même sens, la transformation est totale. Pour la formation de NH3 et de N2O4, l’énergie favorise les produits mais le désordre les réactifs ; pour la décomposition de CaCO3 et la vaporisation de l’eau, le désordre favorise les produits mais l’énergie les réactifs.",
        "ru": "Стремление к минимуму энергии в экзотермических процессах направлено к продуктам, в эндотермических — к реагентам. Стремление к максимуму неупорядоченности направлено в сторону увеличения числа молей газа (переход твёрдое/жидкое → газ). При разложении KClO3 ΔH < 0, значит, энергия благоприятствует продуктам; из твёрдого вещества образуется 3 моль газа, значит, и неупорядоченность благоприятствует продуктам; оба стремления совпадают, поэтому процесс идёт до конца. При образовании NH3 и N2O4 энергия благоприятствует продуктам, а неупорядоченность — реагентам; при разложении CaCO3 и испарении воды неупорядоченность благоприятствует продуктам, а энергия — реагентам.",
        "ar": "الميل نحو أقل طاقة يكون نحو النواتج في العمليات الطاردة للحرارة ونحو المتفاعلات في الماصة لها. والميل نحو أقصى عشوائية يكون نحو الجهة التي يزداد فيها عدد مولات الغاز (من صلب/سائل إلى غاز). في تفكك KClO3 يكون ΔH < 0 فالطاقة تفضّل النواتج، ويتكوّن 3 mol من الغاز من مادة صلبة فالعشوائية تفضّل النواتج أيضًا؛ ولأن الميلين في الاتجاه نفسه يكتمل التفاعل. في تكوين NH3 وN2O4 تفضّل الطاقة النواتج بينما تفضّل العشوائية المتفاعلات؛ وفي تفكك CaCO3 وتبخر الماء تفضّل العشوائية النواتج بينما تفضّل الطاقة المتفاعلات.",
        "zh": "放热过程中最低能量倾向有利于生成物，吸热过程中则有利于反应物。最大混乱度倾向有利于气体物质的量增加(固/液 → 气)的一侧。KClO3 分解 ΔH < 0，能量倾向有利于生成物；由固体生成 3 mol 气体，混乱度倾向也有利于生成物；两者方向相同，过程进行到底。生成 NH3 和 N2O4 时能量有利于生成物而混乱度有利于反应物；CaCO3 分解和水的汽化时混乱度有利于生成物而能量有利于反应物。",
        "ku": "Meyla enerjiya kêmtirîn di bûyerên ekzotermîk de ber bi hilberan, di bûyerên endotermîk de ber bi reaktantan ve ye. Meyla bêrêziya herî zêde ber bi aliyê ku hejmara molên gazê zêde dibe (ji hişk/şile bo gazê) ve ye. Di perçebûna KClO3 de, ji ber ku ΔH < 0 e meyla enerjiyê, û ji ber ku ji madeya hişk 3 mol gaz çêdibe meyla bêrêziyê jî ber bi hilberan ve ye; ji ber ku her du meyl li heman aliyî ne, bûyer temam dibe. Di çêbûna NH3 û N2O4 de enerjî ber bi hilberan, bêrêzî ber bi reaktantan ve ye; di perçebûna CaCO3 û buharbûna avê de jî bêrêzî ber bi hilberan, enerjî ber bi reaktantan ve ye."
      }
    },
    {
      "id": "u18-twin15",
      "stem": {
        "tr": "PCl5(g) ⇌ PCl3(g) + Cl2(g) tepkimesi belirli bir sıcaklıkta dengededir. Sıcaklık sabit tutularak yapılan değişikliklerle ilgili I. Sabit hacimli kaba He gazı eklenirse denge konumu değişmez. II. Serbest hareketli pistonlu kaba sabit basınçta He gazı eklenirse denge ürünler yönüne kayar. III. Kabın hacmi yarıya indirilirse yeni dengede PCl5'in mol sayısı ilk dengedekinden fazla olur. yargılarından hangileri doğrudur?",
        "en": "The reaction PCl5(g) ⇌ PCl3(g) + Cl2(g) is at equilibrium at a certain temperature. Which of the following statements about changes made at constant temperature are correct? I. If He gas is added to a rigid container, the equilibrium position does not change. II. If He gas is added at constant pressure to a container with a freely moving piston, the equilibrium shifts toward the products. III. If the container volume is halved, the number of moles of PCl5 at the new equilibrium is greater than at the first equilibrium.",
        "de": "Die Reaktion PCl5(g) ⇌ PCl3(g) + Cl2(g) befindet sich bei einer bestimmten Temperatur im Gleichgewicht. Welche der folgenden Aussagen über Änderungen bei konstanter Temperatur sind richtig? I. Wird einem starren Gefäß He-Gas zugesetzt, ändert sich die Gleichgewichtslage nicht. II. Wird einem Gefäß mit frei beweglichem Kolben bei konstantem Druck He-Gas zugesetzt, verschiebt sich das Gleichgewicht zu den Produkten. III. Wird das Gefäßvolumen halbiert, ist die Stoffmenge von PCl5 im neuen Gleichgewicht größer als im ersten.",
        "fr": "La réaction PCl5(g) ⇌ PCl3(g) + Cl2(g) est à l’équilibre à une certaine température. Parmi les affirmations suivantes sur des modifications faites à température constante, lesquelles sont correctes ? I. Si l’on ajoute de l’hélium dans un récipient rigide, la position d’équilibre ne change pas. II. Si l’on ajoute de l’hélium à pression constante dans un récipient muni d’un piston mobile, l’équilibre se déplace vers les produits. III. Si le volume du récipient est réduit de moitié, le nombre de moles de PCl5 au nouvel équilibre est supérieur à celui du premier équilibre.",
        "ru": "Реакция PCl5(г) ⇌ PCl3(г) + Cl2(г) находится в равновесии при определённой температуре. Какие из утверждений об изменениях при постоянной температуре верны? I. Если в сосуд постоянного объёма добавить газ He, положение равновесия не изменится. II. Если в сосуд с подвижным поршнем при постоянном давлении добавить газ He, равновесие сместится к продуктам. III. Если объём сосуда уменьшить вдвое, количество PCl5 (моль) в новом равновесии будет больше, чем в первоначальном.",
        "ar": "التفاعل PCl5(g) ⇌ PCl3(g) + Cl2(g) في حالة اتزان عند درجة حرارة معينة. أي العبارات التالية حول تغييرات تجري عند ثبات درجة الحرارة صحيحة؟ I. إذا أضيف غاز He إلى وعاء ثابت الحجم لا يتغير موضع الاتزان. II. إذا أضيف غاز He عند ضغط ثابت إلى وعاء بمكبس حر الحركة ينزاح الاتزان نحو النواتج. III. إذا خُفّض حجم الوعاء إلى النصف يكون عدد مولات PCl5 في الاتزان الجديد أكبر منه في الاتزان الأول.",
        "zh": "反应 PCl5(g) ⇌ PCl3(g) + Cl2(g) 在一定温度下处于平衡。关于恒温下进行的变化，有下列说法：I. 向刚性容器中加入 He 气体，平衡位置不变。II. 在恒压下向带有自由活塞的容器中加入 He 气体，平衡向正反应方向移动。III. 将容器体积减半，新平衡时 PCl5 的物质的量大于原平衡。其中正确的是哪些？",
        "ku": "Reaksiyona PCl5(g) ⇌ PCl3(g) + Cl2(g) di germahiyeke diyar de di hevsengiyê de ye. Derbarê guherînên ku di germahiya sabît de tên kirin, kîjan ji van gotinan rast in? I. Heke gaza He li firaxeke bi qebareya sabît were zêdekirin, cihê hevsengiyê naguhere. II. Heke di zexta sabît de gaza He li firaxeke bi pistoneke azad were zêdekirin, hevsengî ber bi hilberan ve diçe. III. Heke qebareya firaxê nîv bibe, di hevsengiya nû de hejmara molên PCl5 ji ya hevsengiya yekem zêdetir dibe."
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
        "tr": "I doğrudur: Sabit hacimde He eklenince toplam basınç artar, ancak tepkimedeki gazların derişimleri ve kısmi basınçları değişmez; Qc = Kc kalır. II doğrudur: Sabit basınçta He eklenince hacim büyür, tepkimedeki gazların kısmi basınçları düşer; sistem gaz mol sayısı çok olan tarafa (1 mol gazdan 2 mol gaza, ürünler) kayar. III doğrudur: Hacim küçülünce denge gaz molü az olan PCl5 tarafına kayar, PCl5'in mol sayısı artar.",
        "en": "I is correct: adding He at constant volume raises the total pressure, but the concentrations and partial pressures of the reacting gases do not change, so Qc = Kc remains. II is correct: adding He at constant pressure increases the volume and lowers the partial pressures of the reacting gases; the system shifts toward the side with more gas moles (1 mol of gas → 2 mol, the products). III is correct: when the volume decreases the equilibrium shifts toward PCl5, the side with fewer gas moles, so the number of moles of PCl5 increases.",
        "de": "I ist richtig: Bei konstantem Volumen erhöht He den Gesamtdruck, aber Konzentrationen und Partialdrücke der reagierenden Gase bleiben gleich; Qc = Kc bleibt bestehen. II ist richtig: Bei konstantem Druck vergrößert He das Volumen, die Partialdrücke der reagierenden Gase sinken; das System verschiebt sich zur Seite mit mehr Gasmolen (1 mol Gas → 2 mol, Produkte). III ist richtig: Bei Volumenverkleinerung verschiebt sich das Gleichgewicht zu PCl5, der Seite mit weniger Gasmolen; die Stoffmenge von PCl5 nimmt zu.",
        "fr": "I est correcte : à volume constant, l’hélium augmente la pression totale, mais les concentrations et les pressions partielles des gaz réactionnels restent les mêmes ; Qc = Kc. II est correcte : à pression constante, l’hélium augmente le volume et abaisse les pressions partielles des gaz réactionnels ; le système se déplace vers le côté qui compte le plus de moles de gaz (1 mol de gaz → 2 mol, les produits). III est correcte : quand le volume diminue, l’équilibre se déplace vers PCl5, côté le plus pauvre en moles de gaz, et le nombre de moles de PCl5 augmente.",
        "ru": "I верно: при постоянном объёме добавление He повышает общее давление, но концентрации и парциальные давления реагирующих газов не меняются; Qc остаётся равным Kc. II верно: при постоянном давлении добавление He увеличивает объём, парциальные давления реагирующих газов падают; равновесие смещается в сторону большего числа молей газа (1 моль газа → 2 моль, продукты). III верно: при уменьшении объёма равновесие смещается к PCl5 — в сторону меньшего числа молей газа, и количество PCl5 растёт.",
        "ar": "I صحيحة: عند ثبات الحجم يرفع He الضغط الكلي، لكن تراكيز الغازات المتفاعلة وضغوطها الجزئية لا تتغير؛ فيبقى Qc = Kc. II صحيحة: عند ثبات الضغط يزيد He الحجم فتنخفض الضغوط الجزئية للغازات المتفاعلة؛ فينزاح النظام نحو الجهة الأكثر مولات غاز (من 1 mol غاز إلى 2 mol، أي النواتج). III صحيحة: عند تصغير الحجم ينزاح الاتزان نحو PCl5، الجهة الأقل مولات غاز، فيزداد عدد مولات PCl5.",
        "zh": "I 正确：恒容加入 He，总压增大，但参与反应的气体浓度和分压不变，Qc = Kc 仍成立。II 正确：恒压加入 He，体积增大，参与反应的气体分压降低，体系向气体分子数多的一侧(1 mol 气体 → 2 mol，生成物)移动。III 正确：体积减小时平衡向气体分子数少的 PCl5 一侧移动，PCl5 的物质的量增加。",
        "ku": "I rast e: di qebareya sabît de dema He tê zêdekirin zexta giştî zêde dibe, lê tîrbûn û zextên parçeyî yên gazên reaksiyonê naguherin; Qc = Kc dimîne. II rast e: di zexta sabît de dema He tê zêdekirin qebare mezin dibe û zextên parçeyî yên gazên reaksiyonê kêm dibin; sîstem ber bi aliyê ku hejmara molên gazê zêdetir e (ji 1 mol gazê bo 2 mol gazê, aliyê hilberan) ve diçe. III rast e: dema qebare kêm dibe, hevsengî ber bi aliyê PCl5 ku molên gazê lê kêmtir in ve diçe û hejmara molên PCl5 zêde dibe."
      }
    },
    {
      "id": "u18-twin16",
      "stem": {
        "tr": "H2(g) + I2(g) ⇌ 2HI(g) tepkimesi kapalı bir kapta dengededir. Sabit sıcaklıkta kaba, iyot atomları radyoaktif olarak işaretlenmiş çok az miktarda I2 gazı ekleniyor. Bir süre sonra radyoaktif iyot atomları hangi moleküllerde bulunur?",
        "en": "The reaction H2(g) + I2(g) ⇌ 2HI(g) is at equilibrium in a closed container. At constant temperature a very small amount of I2 gas whose iodine atoms are radioactively labelled is added. After some time, in which molecules are the radioactive iodine atoms found?",
        "de": "Die Reaktion H2(g) + I2(g) ⇌ 2HI(g) befindet sich in einem geschlossenen Gefäß im Gleichgewicht. Bei konstanter Temperatur wird eine sehr kleine Menge I2-Gas zugegeben, dessen Iodatome radioaktiv markiert sind. In welchen Molekülen findet man die radioaktiven Iodatome nach einiger Zeit?",
        "fr": "La réaction H2(g) + I2(g) ⇌ 2HI(g) est à l’équilibre dans un récipient fermé. À température constante, on ajoute une très petite quantité de I2 gazeux dont les atomes d’iode sont marqués radioactivement. Au bout d’un certain temps, dans quelles molécules trouve-t-on les atomes d’iode radioactifs ?",
        "ru": "Реакция H2(г) + I2(г) ⇌ 2HI(г) находится в равновесии в закрытом сосуде. При постоянной температуре в сосуд добавляют очень небольшое количество газообразного I2, атомы йода в котором помечены радиоактивной меткой. В каких молекулах через некоторое время будут обнаружены радиоактивные атомы йода?",
        "ar": "التفاعل H2(g) + I2(g) ⇌ 2HI(g) في حالة اتزان داخل وعاء مغلق. عند ثبات درجة الحرارة أضيفت كمية صغيرة جدًا من غاز I2 ذرات اليود فيه موسومة إشعاعيًا. بعد مدة، في أي الجزيئات توجد ذرات اليود المشعة؟",
        "zh": "反应 H2(g) + I2(g) ⇌ 2HI(g) 在密闭容器中处于平衡。恒温下加入极少量碘原子被放射性标记的 I2 气体。一段时间后，放射性碘原子存在于哪些分子中？",
        "ku": "Reaksiyona H2(g) + I2(g) ⇌ 2HI(g) di firaxeke girtî de di hevsengiyê de ye. Di germahiya sabît de mîqdareke pir hindik ji gaza I2 ya ku atomên wê yên îyodê bi radyoaktîfî hatine nîşankirin li firaxê tê zêdekirin. Piştî demekê atomên îyodê yên radyoaktîf di kîjan molekulan de ne?"
      },
      "options": [
        {
          "tr": "Yalnız I2 moleküllerinde, çünkü dengede tepkimeler durmuştur",
          "en": "Only in I2 molecules, because the reactions have stopped at equilibrium",
          "de": "Nur in I2-Molekülen, weil die Reaktionen im Gleichgewicht zum Stillstand gekommen sind",
          "fr": "Uniquement dans les molécules de I2, car les réactions sont arrêtées à l’équilibre",
          "ru": "Только в молекулах I2, так как в равновесии реакции прекратились",
          "ar": "في جزيئات I2 فقط، لأن التفاعلات متوقفة عند الاتزان",
          "zh": "只在 I2 分子中，因为平衡时反应已经停止",
          "ku": "Tenê di molekulên I2 de, ji ber ku di hevsengiyê de reaksiyon rawestiyane"
        },
        {
          "tr": "Hem I2 hem de HI moleküllerinde",
          "en": "In both I2 and HI molecules",
          "de": "Sowohl in I2- als auch in HI-Molekülen",
          "fr": "À la fois dans les molécules de I2 et de HI",
          "ru": "И в молекулах I2, и в молекулах HI",
          "ar": "في جزيئات I2 وHI معًا",
          "zh": "同时存在于 I2 和 HI 分子中",
          "ku": "Hem di molekulên I2 de hem jî di yên HI de"
        },
        {
          "tr": "Yalnız HI moleküllerinde, çünkü eklenen I2'nin tamamı tepkimeye girer",
          "en": "Only in HI molecules, because all of the added I2 reacts",
          "de": "Nur in HI-Molekülen, weil das gesamte zugesetzte I2 reagiert",
          "fr": "Uniquement dans les molécules de HI, car tout le I2 ajouté réagit",
          "ru": "Только в молекулах HI, так как весь добавленный I2 вступает в реакцию",
          "ar": "في جزيئات HI فقط، لأن كل I2 المضاف يتفاعل",
          "zh": "只在 HI 分子中，因为加入的 I2 全部反应",
          "ku": "Tenê di molekulên HI de, ji ber ku hemû I2 ya lêzêdekirî dikeve reaksiyonê"
        },
        {
          "tr": "Yalnız I2 moleküllerinde; HI'ye ancak sıcaklık artırılırsa geçer",
          "en": "Only in I2 molecules; it passes into HI only if the temperature is raised",
          "de": "Nur in I2-Molekülen; in HI gelangt es nur bei Temperaturerhöhung",
          "fr": "Uniquement dans les molécules de I2 ; il ne passe dans HI que si l’on chauffe",
          "ru": "Только в молекулах I2; в HI метка переходит лишь при повышении температуры",
          "ar": "في جزيئات I2 فقط؛ ولا ينتقل إلى HI إلا إذا رُفعت درجة الحرارة",
          "zh": "只在 I2 分子中；只有升高温度才会进入 HI",
          "ku": "Tenê di molekulên I2 de; tenê heke germahî were bilindkirin derbasî HI dibe"
        },
        {
          "tr": "H2, I2 ve HI moleküllerinin üçünde de",
          "en": "In all three: H2, I2 and HI molecules",
          "de": "In allen drei: H2-, I2- und HI-Molekülen",
          "fr": "Dans les trois : molécules de H2, I2 et HI",
          "ru": "Во всех трёх: в молекулах H2, I2 и HI",
          "ar": "في الجزيئات الثلاثة: H2 وI2 وHI",
          "zh": "在 H2、I2 和 HI 三种分子中都有",
          "ku": "Di her sê molekulan de: H2, I2 û HI"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Denge dinamiktir; ileri ve geri tepkimeler eşit hızla sürekli devam eder. İşaretli I2 bir yandan H2 ile tepkimeye girip işaretli HI oluşturur, oluşan HI'nin bir kısmı da geri tepkimeyle yeniden I2'ye dönüşür; bu yüzden işaretli atomlar hem I2 hem HI'de bulunur. Tepkimelerin durduğunu düşünmek dengenin statik sanılmasından kaynaklanan hatadır. H2 molekülü iyot içermediğinden işaretli atom H2'de bulunamaz; tepkime tamamlanmadığı için eklenen I2'nin hepsi de harcanmaz.",
        "en": "Equilibrium is dynamic; the forward and reverse reactions continue at equal rates. The labelled I2 reacts with H2 to form labelled HI, and part of that HI turns back into I2 through the reverse reaction, so labelled atoms end up in both I2 and HI. Thinking the reactions have stopped comes from wrongly picturing equilibrium as static. An H2 molecule contains no iodine, so labelled atoms cannot be in H2; and because the reaction does not go to completion, not all of the added I2 is used up.",
        "de": "Das Gleichgewicht ist dynamisch; Hin- und Rückreaktion laufen mit gleicher Geschwindigkeit ständig weiter. Markiertes I2 reagiert mit H2 zu markiertem HI, und ein Teil dieses HI zerfällt über die Rückreaktion wieder zu I2; daher findet man markierte Atome sowohl in I2 als auch in HI. Die Vorstellung, die Reaktionen stünden still, beruht auf einem falschen, statischen Gleichgewichtsbild. H2 enthält kein Iod, also können dort keine markierten Atome sein; da die Reaktion nicht vollständig abläuft, wird auch nicht das gesamte zugesetzte I2 verbraucht.",
        "fr": "L’équilibre est dynamique ; les réactions directe et inverse se poursuivent en permanence à la même vitesse. Le I2 marqué réagit avec H2 pour former du HI marqué, et une partie de ce HI redonne du I2 par la réaction inverse ; on trouve donc des atomes marqués à la fois dans I2 et dans HI. Penser que les réactions sont arrêtées revient à voir l’équilibre comme statique, ce qui est faux. La molécule H2 ne contient pas d’iode, elle ne peut donc pas porter d’atomes marqués ; et comme la réaction n’est pas totale, tout le I2 ajouté n’est pas consommé.",
        "ru": "Равновесие динамическое: прямая и обратная реакции непрерывно идут с равными скоростями. Меченый I2 реагирует с H2, образуя меченый HI, а часть этого HI по обратной реакции снова превращается в I2; поэтому меченые атомы оказываются и в I2, и в HI. Мнение, что реакции прекратились, возникает из ошибочного представления о равновесии как статическом. Молекула H2 не содержит йода, поэтому меченых атомов в ней быть не может; а так как реакция не идёт до конца, добавленный I2 расходуется не полностью.",
        "ar": "الاتزان ديناميكي؛ يستمر التفاعلان الأمامي والعكسي بالسرعة نفسها باستمرار. يتفاعل I2 الموسوم مع H2 فيتكوّن HI موسوم، ويتحول جزء من هذا HI مرة أخرى إلى I2 بالتفاعل العكسي؛ لذلك توجد الذرات الموسومة في I2 وHI معًا. الاعتقاد بأن التفاعلات توقفت ناتج عن تصور خاطئ للاتزان على أنه ساكن. جزيء H2 لا يحتوي على يود، فلا يمكن أن توجد فيه ذرات موسومة؛ ولأن التفاعل لا يكتمل فلا يُستهلك كل I2 المضاف.",
        "zh": "平衡是动态的，正、逆反应始终以相等速率进行。被标记的 I2 与 H2 反应生成被标记的 HI，其中一部分 HI 又通过逆反应变回 I2，因此 I2 和 HI 中都有标记原子。认为反应已停止是把平衡误认为静态平衡。H2 分子中不含碘，所以不可能有标记原子；由于反应不能进行到底，加入的 I2 也不会全部消耗。",
        "ku": "Hevsengî dînamîk e; reaksiyonên pêşve û paşve bi lezeke wekhev bê navber berdewam dikin. I2 ya nîşankirî ji aliyekî ve bi H2 re dikeve reaksiyonê û HI ya nîşankirî çêdike, beşek ji HI ya çêbûyî jî bi reaksiyona paşve dîsa vediguhere I2; ji ber vê yekê atomên nîşankirî hem di I2 de hem jî di HI de hene. Fikra ku reaksiyon rawestiyane şaşiyek e ku ji hesibandina hevsengiyê wekî statîk tê. Ji ber ku molekula H2 îyodê nahewîne, atoma nîşankirî nikare di H2 de be; û ji ber ku reaksiyon temam nabe, hemû I2 ya lêzêdekirî jî nayê xerckirin."
      }
    }
  ]
};

export default unit18;
