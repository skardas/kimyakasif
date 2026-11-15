import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit20: ChemistryUnitSeedData = {
  "id": "u20",
  "order": 20,
  "exam": "AYT",
  "grade": 11,
  "title": {
    "tr": "Çözünürlük Dengesi (Kçç)",
    "en": "Solubility Product (Ksp)",
    "de": "Löslichkeitsprodukt",
    "fr": "Produit de Solubilité",
    "ru": "Произведение растворимости",
    "ar": "حاصل الإذابة",
    "zh": "溶度积",
    "ku": "Hevsengiya Helbûnê (Ksp)"
  },
  "subtitle": {
    "tr": "Çökelme Koşulu, Kçç Bağıntıları ve Ortak İyon",
    "en": "Precipitation Condition, Ksp Relations and Common Ion",
    "de": "Fällungsbedingung, Ksp-Beziehungen und gemeinsames Ion",
    "fr": "Condition de précipitation, relations de Ksp et ion commun",
    "ru": "Условие выпадения осадка, расчёты с Ksp и влияние одноимённого иона",
    "ar": "شرط الترسيب وعلاقات Ksp والأيون المشترك",
    "zh": "沉淀条件、Ksp 关系与同离子效应",
    "ku": "Merca Niştinê, Têkiliyên Ksp û Îyona Hevpar"
  },
  "facts": [
    {
      "id": "u20-f01",
      "fact": {
        "tr": "Çözünürlük çarpımı sabiti (Kçç), az çözünen bir tuzun doymuş sulu çözeltisinde iyon derişimlerinin, tepkime katsayıları üs olarak alınarak çarpılmasıyla elde edilen denge sabitidir.",
        "en": "The solubility product constant (Ksp) is the equilibrium constant obtained in a saturated aqueous solution of a sparingly soluble salt by multiplying the ion concentrations, each raised to the power of its coefficient.",
        "de": "Das Löslichkeitsprodukt (Ksp) ist die Gleichgewichtskonstante, die man in der gesättigten wässrigen Lösung eines schwerlöslichen Salzes erhält, indem man die Ionenkonzentrationen, jeweils mit ihrem Koeffizienten potenziert, multipliziert.",
        "fr": "Le produit de solubilité (Ksp) est la constante d'équilibre obtenue, dans la solution aqueuse saturée d'un sel peu soluble, en multipliant les concentrations des ions, chacune élevée à la puissance de son coefficient.",
        "ru": "Произведение растворимости (Ksp) — константа равновесия, равная произведению концентраций ионов в насыщенном водном растворе малорастворимой соли, взятых в степенях, равных их коэффициентам.",
        "ar": "ثابت حاصل الذوبان (Ksp) هو ثابت الاتزان الذي نحصل عليه في المحلول المائي المشبع لملح قليل الذوبان بضرب تراكيز الأيونات، كلٌّ مرفوعًا إلى أُسّ يساوي معامله.",
        "zh": "溶度积(Ksp)是难溶盐饱和溶液中各离子浓度以其化学计量数为指数的幂的乘积，它是一个平衡常数。",
        "ku": "Sabiteya hevdana helbûnê (Ksp), di çareseriya avî ya têr a xwêyeke kêm-helbar de, sabiteya hevsengiyê ye ku bi lêkdana tîrbûnên îyonan, her yek bi qasî rêjeya xwe wekî hêz, tê bidestxistin."
      },
      "trap": {
        "tr": "Kçç çok çözünen tuzların derişimini ifade eder.",
        "en": "Ksp refers to the concentration of highly soluble salts.",
        "de": "Ksp bezieht sich auf die Konzentration hochlöslicher Salze.",
        "fr": "Ksp fait référence à la concentration de sels hautement solubles.",
        "ru": "Ksp выражает концентрацию хорошо растворимых солей.",
        "ar": "يشير Ksp إلى تركيز الأملاح شديدة الذوبان.",
        "zh": "Ksp 表示易溶盐的浓度。",
        "ku": "Ksp behsa kombûna xwêyên pir heliyaye dike."
      },
      "whyTrapIsFalse": {
        "tr": "Kçç bir derişim değil, bir denge sabitidir ve yalnızca az çözünen tuzların doymuş çözeltileri için kullanılır; NaCl gibi çok çözünen tuzlar için Kçç hesabı yapılmaz.",
        "en": "Ksp is not a concentration but an equilibrium constant, and it is used only for saturated solutions of sparingly soluble salts; it is not applied to highly soluble salts such as NaCl.",
        "de": "Ksp ist keine Konzentration, sondern eine Gleichgewichtskonstante, und wird nur für gesättigte Lösungen schwerlöslicher Salze verwendet; für gut lösliche Salze wie NaCl rechnet man nicht mit Ksp.",
        "fr": "Ksp n'est pas une concentration mais une constante d'équilibre, utilisée uniquement pour les solutions saturées de sels peu solubles ; on ne l'applique pas aux sels très solubles comme NaCl.",
        "ru": "Ksp — не концентрация, а константа равновесия, и её применяют только к насыщенным растворам малорастворимых солей; для хорошо растворимых солей, например NaCl, Ksp не рассчитывают.",
        "ar": "Ksp ليس تركيزًا بل ثابت اتزان، ويُستخدم فقط للمحاليل المشبعة للأملاح قليلة الذوبان؛ ولا يُطبَّق على الأملاح كثيرة الذوبان مثل NaCl.",
        "zh": "Ksp不是浓度，而是平衡常数，只用于难溶盐的饱和溶液；对NaCl这类易溶盐不使用Ksp。",
        "ku": "Ksp ne tîrbûnek e, sabiteyeke hevsengiyê ye û tenê ji bo çareseriyên têr ên xwêyên kêm-helbar tê bikaranîn; ji bo xwêyên pir-helbar ên wekî NaCl Ksp nayê bikaranîn."
      }
    },
    {
      "id": "u20-f02",
      "fact": {
        "tr": "Belirli bir tuzun Kçç değeri yalnızca sıcaklıkla değişir; ortak iyon eklemek, dipteki katı miktarını değiştirmek veya su eklemek Kçç'yi değiştirmez.",
        "en": "The Ksp of a given salt changes ONLY with temperature; adding a common ion, the amount of undissolved solid or adding water does NOT change Ksp.",
        "de": "Der Ksp-Wert eines bestimmten Salzes ändert sich NUR mit der Temperatur; die Zugabe eines gleichen (gemeinsamen) Ions, die Menge des Bodenkörpers oder Wasserzugabe verändern Ksp NICHT.",
        "fr": "Le Ksp d'un sel donné ne change QU'AVEC la température ; l'ajout d'un ion commun, la quantité de solide non dissous ou l'ajout d'eau NE modifient PAS Ksp.",
        "ru": "Ksp данной соли зависит ТОЛЬКО от температуры; добавление одноимённого иона, изменение количества осадка на дне или добавление воды Ksp НЕ изменяют.",
        "ar": "تتغير قيمة Ksp لملح معيّن مع درجة الحرارة فقط؛ أما إضافة أيون مشترك أو كمية الصلب غير الذائب أو إضافة الماء فلا تغيّر Ksp.",
        "zh": "某一盐的Ksp只随温度变化；加入同离子、未溶固体的多少或加水都不会改变Ksp。",
        "ku": "Nirxa Ksp ya xwêyeke diyarkirî TENÊ bi germahiyê diguhere; zêdekirina îyona hevpar, mîqdara hişka li binî an zêdekirina avê Ksp NAGUHERÎNE."
      },
      "trap": {
        "tr": "Ortak iyon eklendiğinde Kçç değeri küçülür.",
        "en": "When the common ion is added, the Ksp value becomes smaller.",
        "de": "Wenn das gemeinsame Ion hinzugefügt wird, wird der Ksp-Wert kleiner.",
        "fr": "Lorsque l'ion commun est ajouté, la valeur Ksp devient plus petite.",
        "ru": "При добавлении одноимённого иона значение Ksp уменьшается.",
        "ar": "عند إضافة الأيون المشترك، تصبح قيمة Ksp أصغر.",
        "zh": "加入同离子时，Ksp 变小。",
        "ku": "Dema ku îona hevpar tê zêdekirin, nirxa Ksp piçûktir dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Ortak iyon dengeyi sola kaydırarak tuzun çözünürlüğünü (s) azaltır; denge sabiti olan Kçç ise sıcaklık sabit kaldıkça aynı kalır. Burada çözünürlük ile Kçç karıştırılmaktadır.",
        "en": "A common ion shifts the equilibrium to the left and lowers the solubility (s) of the salt; Ksp, being an equilibrium constant, stays the same as long as the temperature is constant. The trap confuses solubility with Ksp.",
        "de": "Ein gemeinsames Ion verschiebt das Gleichgewicht nach links und senkt die Löslichkeit (s) des Salzes; Ksp als Gleichgewichtskonstante bleibt bei konstanter Temperatur gleich. Hier werden Löslichkeit und Ksp verwechselt.",
        "fr": "Un ion commun déplace l'équilibre vers la gauche et diminue la solubilité (s) du sel ; Ksp, constante d'équilibre, reste inchangé tant que la température est constante. Le piège confond solubilité et Ksp.",
        "ru": "Одноимённый ион смещает равновесие влево и уменьшает растворимость (s) соли; Ksp же как константа равновесия при постоянной температуре не меняется. Здесь растворимость путают с Ksp.",
        "ar": "الأيون المشترك يزيح الاتزان نحو اليسار ويقلل ذوبانية الملح (s)؛ أما Ksp فهو ثابت اتزان يبقى كما هو ما دامت درجة الحرارة ثابتة. الخطأ هنا هو الخلط بين الذوبانية و Ksp.",
        "zh": "同离子使平衡左移，降低的是盐的溶解度(s)；Ksp作为平衡常数，只要温度不变就保持不变。这里把溶解度和Ksp混为一谈。",
        "ku": "Îyona hevpar hevsengiyê ber bi çepê ve dikişîne û helbûna (s) xwê kêm dike; Ksp wekî sabiteya hevsengiyê, heta ku germahî neguhere, wekî xwe dimîne. Li vir helbûn û Ksp tên tevlihevkirin."
      },
      "osymTip": {
        "tr": "ÖSYM kuralı: Kçç'yi yalnızca sıcaklık değiştirir!",
        "en": "ÖSYM rule: Only temperature changes Ksp!",
        "de": "ÖSYM-Regel: Nur die Temperatur ändert Ksp!",
        "fr": "Règle ÖSYM : seule la température modifie Ksp !",
        "ru": "Запомните: Ksp изменяет только температура!",
        "ar": "قاعدة ÖSYM: درجة الحرارة وحدها تغيّر Ksp!",
        "zh": "只有温度能改变 Ksp！",
        "ku": "Qanûna ÖSYM: Tenê germahî Ksp diguherîne!"
      }
    },
    {
      "id": "u20-f03",
      "fact": {
        "tr": "1:1 tuzlarda (AgCl) çözünürlük s ise Kçç = s^2'dir (s = sqrt(Kçç)).",
        "en": "For 1:1 salts (AgCl), if the solubility is s, then Ksp = s^2 (s = sqrt(Ksp)).",
        "de": "Für 1:1-Salze (AgCl) gilt bei der Löslichkeit s: Ksp = s^2 (s = sqrt(Ksp)).",
        "fr": "Pour les sels 1:1 (AgCl), si la solubilité est s, alors Ksp = s^2 (s = sqrt(Ksp)).",
        "ru": "Для солей типа 1:1 (AgCl) при растворимости s Ksp = s^2 (s = sqrt(Ksp)).",
        "ar": "في أملاح 1:1 (AgCl) إذا كانت الذوبانية s فإن Ksp = s^2 (s = sqrt(Ksp)).",
        "zh": "对于 1:1 型盐(如 AgCl)，若溶解度为 s，则 Ksp = s^2(s = sqrt(Ksp))。",
        "ku": "Di xwêyên 1:1 (AgCl) de, ger helbûn s be, Ksp = s^2 e (s = sqrt(Ksp))."
      },
      "trap": {
        "tr": "AgCl için Kçç = 4s^3'tür.",
        "en": "For AgCl, Ksp = 4s^3.",
        "de": "Für AgCl ist Ksp = 4s^3.",
        "fr": "Pour AgCl, Ksp = 4s^3.",
        "ru": "Для AgCl Ksp = 4s^3.",
        "ar": "بالنسبة لـ AgCl، Ksp = 4s^3.",
        "zh": "对于 AgCl，Ksp = 4s^3。",
        "ku": "Ji bo AgCl, Ksp = 4s^3."
      },
      "whyTrapIsFalse": {
        "tr": "4s^3 bağıntısı XY2 (1:2) tipi tuzlara aittir; AgCl çözündüğünde 1 Ag+ ve 1 Cl- verir, bu yüzden Kçç = s·s = s^2 olur.",
        "en": "The relation 4s^3 belongs to XY2 (1:2) salts; AgCl gives one Ag+ and one Cl- on dissolving, so Ksp = s·s = s^2.",
        "de": "Die Beziehung 4s^3 gilt für XY2-Salze (1:2); AgCl liefert beim Lösen ein Ag+ und ein Cl-, daher Ksp = s·s = s^2.",
        "fr": "La relation 4s^3 concerne les sels XY2 (1:2) ; AgCl libère un Ag+ et un Cl- en se dissolvant, donc Ksp = s·s = s^2.",
        "ru": "Соотношение 4s^3 относится к солям типа XY2 (1:2); AgCl при растворении даёт один ион Ag+ и один ион Cl-, поэтому Ksp = s·s = s^2.",
        "ar": "العلاقة 4s^3 خاصة بأملاح XY2 (1:2)؛ أما AgCl فيعطي عند ذوبانه أيون Ag+ واحدًا وأيون Cl- واحدًا، لذا Ksp = s·s = s^2.",
        "zh": "4s^3只适用于XY2(1:2)型盐；AgCl溶解时生成一个Ag+ 和一个Cl-，所以Ksp = s·s = s^2。",
        "ku": "Têkiliya 4s^3 ya xwêyên cureyê XY2 (1:2) ye; AgCl dema dihele yek Ag+ û yek Cl- dide, ji ber vê Ksp = s·s = s^2 e."
      }
    },
    {
      "id": "u20-f04",
      "fact": {
        "tr": "1:2 tuzlarda (PbCl2, CaF2) çözünürlük s ise Kçç = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3'tür.",
        "en": "For 1:2 salts (PbCl2, CaF2), if the solubility is s, then Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
        "de": "Für 1:2-Salze (PbCl2, CaF2) gilt bei der Löslichkeit s: Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
        "fr": "Pour les sels 1:2 (PbCl2, CaF2), si la solubilité est s, alors Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
        "ru": "Для солей типа 1:2 (PbCl2, CaF2) при растворимости s Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
        "ar": "في أملاح 1:2 (PbCl2، CaF2) إذا كانت الذوبانية s فإن Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3.",
        "zh": "对于 1:2 型盐(如 PbCl2、CaF2)，若溶解度为 s，则 Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3。",
        "ku": "Di xwêyên 1:2 (PbCl2, CaF2) de, ger helbûn s be, Ksp = [Pb2+][Cl-]^2 = s * (2s)^2 = 4s^3 e."
      },
      "trap": {
        "tr": "PbCl2 için Kçç = 2s^2'dir.",
        "en": "For PbCl2, Ksp = 2s^2.",
        "de": "Für PbCl2 ist Ksp = 2s^2.",
        "fr": "Pour PbCl2, Ksp = 2s^2.",
        "ru": "Для PbCl2 Ksp = 2s^2.",
        "ar": "بالنسبة لـ PbCl2، Ksp = 2s^2.",
        "zh": "对于 PbCl2，Ksp = 2s^2。",
        "ku": "Ji bo PbCl2, Ksp = 2s^2."
      },
      "whyTrapIsFalse": {
        "tr": "2s^2, Kçç'yi s·2s diye yazıp Cl- derişiminin karesini almayı unutmaktan doğar; Cl- derişimi 2s'dir ve katsayı üs olarak alınır: s·(2s)^2 = 4s^3.",
        "en": "2s^2 comes from writing Ksp as s·2s and forgetting to square the Cl- concentration; [Cl-] is 2s and the coefficient becomes an exponent: s·(2s)^2 = 4s^3.",
        "de": "2s^2 entsteht, wenn man Ksp als s·2s schreibt und vergisst, die Cl--Konzentration zu quadrieren; [Cl-] ist 2s und der Koeffizient wird zum Exponenten: s·(2s)^2 = 4s^3.",
        "fr": "2s^2 vient de l'écriture Ksp = s·2s en oubliant d'élever [Cl-] au carré ; [Cl-] vaut 2s et le coefficient devient exposant : s·(2s)^2 = 4s^3.",
        "ru": "Значение 2s^2 получается, если записать Ksp как s·2s и забыть возвести концентрацию Cl- в квадрат; [Cl-] = 2s, а коэффициент становится показателем степени: s·(2s)^2 = 4s^3.",
        "ar": "تنتج 2s^2 من كتابة Ksp على صورة s·2s ونسيان تربيع تركيز Cl-؛ فتركيز Cl- يساوي 2s والمعامل يصبح أُسًّا: s·(2s)^2 = 4s^3.",
        "zh": "2s^2是把Ksp写成s·2s、忘记对Cl- 浓度取平方造成的；[Cl-] = 2s，系数要作为幂：s·(2s)^2 = 4s^3。",
        "ku": "2s^2 ji nivîsandina Ksp wekî s·2s û jibîrkirina çargoşekirina tîrbûna Cl- tê; [Cl-] 2s e û rêjeya wê dibe hêz: s·(2s)^2 = 4s^3."
      }
    },
    {
      "id": "u20-f05",
      "fact": {
        "tr": "1:3 tuzlarda (Al(OH)3, Fe(OH)3) çözünürlük s ise Kçç = s * (3s)^3 = 27s^4'tür.",
        "en": "For 1:3 salts (Al(OH)3, Fe(OH)3), if the solubility is s, then Ksp = s * (3s)^3 = 27s^4.",
        "de": "Für 1:3-Salze (Al(OH)3, Fe(OH)3) gilt bei der Löslichkeit s: Ksp = s * (3s)^3 = 27s^4.",
        "fr": "Pour les sels 1:3 (Al(OH)3, Fe(OH)3), si la solubilité est s, alors Ksp = s * (3s)^3 = 27s^4.",
        "ru": "Для солей типа 1:3 (Al(OH)3, Fe(OH)3) при растворимости s Ksp = s * (3s)^3 = 27s^4.",
        "ar": "في أملاح 1:3 (Al(OH)3، Fe(OH)3) إذا كانت الذوبانية s فإن Ksp = s * (3s)^3 = 27s^4.",
        "zh": "对于 1:3 型盐(如 Al(OH)3、Fe(OH)3)，若溶解度为 s，则 Ksp = s * (3s)^3 = 27s^4。",
        "ku": "Di xwêyên 1:3 (Al(OH)3, Fe(OH)3) de, ger helbûn s be, Ksp = s * (3s)^3 = 27s^4 e."
      },
      "trap": {
        "tr": "Al(OH)3 için Kçç = 3s^3'tür.",
        "en": "For Al(OH)3, Ksp = 3s^3.",
        "de": "Für Al(OH)3 ist Ksp = 3s^3.",
        "fr": "Pour Al(OH)3, Ksp = 3s^3.",
        "ru": "Для Al(OH)3 Ksp = 3s^3.",
        "ar": "بالنسبة لـ Al(OH)3، Ksp = 3s^3.",
        "zh": "对于 Al(OH)3，Ksp = 3s^3。",
        "ku": "Ji bo Al(OH)3, Ksp = 3s^3."
      },
      "whyTrapIsFalse": {
        "tr": "OH- derişimi 3s'dir ve Kçç ifadesinde küpü alınır; katsayıyı yalnızca çarpan gibi kullanmak 3s^3 gibi hatalı sonuç verir. Doğrusu s·(3s)^3 = 27s^4'tür.",
        "en": "[OH-] is 3s and it must be cubed in the Ksp expression; using the coefficient only as a multiplier gives a wrong result such as 3s^3. The correct form is s·(3s)^3 = 27s^4.",
        "de": "[OH-] ist 3s und muss im Ksp-Ausdruck hoch drei genommen werden; den Koeffizienten nur als Faktor zu verwenden, ergibt ein falsches Ergebnis wie 3s^3. Richtig ist s·(3s)^3 = 27s^4.",
        "fr": "[OH-] vaut 3s et doit être élevé au cube dans l'expression de Ksp ; utiliser le coefficient comme simple facteur donne un résultat faux comme 3s^3. La bonne forme est s·(3s)^3 = 27s^4.",
        "ru": "[OH-] = 3s, и в выражении Ksp эту величину нужно возвести в куб; если использовать коэффициент лишь как множитель, получится неверное 3s^3. Правильно: s·(3s)^3 = 27s^4.",
        "ar": "تركيز OH- يساوي 3s ويجب رفعه إلى القوة الثالثة في تعبير Ksp؛ واستعمال المعامل كمضروب فقط يعطي نتيجة خاطئة مثل 3s^3. والصحيح s·(3s)^3 = 27s^4.",
        "zh": "[OH-] = 3s，在Ksp表达式中要取三次方；只把系数当乘数会得到3s^3这样的错误结果。正确的是s·(3s)^3 = 27s^4。",
        "ku": "[OH-] 3s e û di îfadeya Ksp de divê bi hêza sêyan were girtin; bikaranîna rêjeyê tenê wekî lêker encameke çewt wekî 3s^3 dide. Ya rast s·(3s)^3 = 27s^4 e."
      }
    },
    {
      "id": "u20-f06",
      "fact": {
        "tr": "Ortak iyon etkisi: Çözeltide ortak iyon bulunması Le Chatelier gereği dengeyi girenlere kaydırır ve çözünürlüğü azaltır.",
        "en": "Common ion effect: The presence of common ions in the solution shifts the equilibrium to the reactants and reduces the solubility, as per Le Chatelier.",
        "de": "Gemeinsamer Ioneneffekt: Das Vorhandensein gemeinsamer Ionen in der Lösung verschiebt das Gleichgewicht zu den Reaktanten und verringert die Löslichkeit, so Le Chatelier.",
        "fr": "Effet des ions communs : La présence d'ions communs dans la solution déplace l'équilibre vers les réactifs et réduit la solubilité, selon Le Chatelier.",
        "ru": "Влияние одноимённого иона: по принципу Ле Шателье присутствие в растворе одноимённого иона смещает равновесие в сторону твёрдой соли и уменьшает растворимость.",
        "ar": "تأثير الأيونات المشتركة: يؤدي وجود الأيونات المشتركة في المحلول إلى تحويل التوازن إلى المواد المتفاعلة وتقليل قابلية الذوبان، وفقًا لـ Le Chatelier.",
        "zh": "同离子效应：根据勒夏特列原理，溶液中存在同离子时，平衡向反应物方向移动，溶解度降低。",
        "ku": "Bandora îyona hevpar: Li gorî Le Chatelier, hebûna îyonên hevpar di çareseriyê de hevsengiyê ber bi reaktantan ve diguhezîne û çareserbûnê kêm dike."
      },
      "trap": {
        "tr": "Ortak iyon tuzun çözünürlüğünü artırır.",
        "en": "The common ion increases the solubility of the salt.",
        "de": "Das gemeinsame Ion erhöht die Löslichkeit des Salzes.",
        "fr": "L'ion commun augmente la solubilité du sel.",
        "ru": "Одноимённый ион увеличивает растворимость соли.",
        "ar": "الأيون المشترك يزيد من ذوبان الملح.",
        "zh": "同离子使盐的溶解度增大。",
        "ku": "Iyona hevpar helbûna xwê zêde dike."
      },
      "whyTrapIsFalse": {
        "tr": "Ortak iyon, ürün tarafındaki bir iyonun derişimini artırır; Le Chatelier ilkesine göre denge bu artışı azaltacak yöne, yani katıya doğru kayar ve çözünürlük azalır.",
        "en": "A common ion raises the concentration of an ion on the product side; by Le Chatelier's principle the equilibrium shifts to counteract this, i.e. toward the solid, so solubility decreases.",
        "de": "Ein gemeinsames Ion erhöht die Konzentration eines Ions auf der Produktseite; nach Le Chatelier verschiebt sich das Gleichgewicht so, dass diese Erhöhung abgebaut wird, also zum Feststoff hin, und die Löslichkeit sinkt.",
        "fr": "Un ion commun augmente la concentration d'un ion du côté des produits ; selon Le Chatelier, l'équilibre se déplace pour contrer cette hausse, donc vers le solide, et la solubilité diminue.",
        "ru": "Одноимённый ион повышает концентрацию одного из ионов в правой части уравнения; по принципу Ле Шателье равновесие смещается в сторону ослабления этого воздействия, т. е. к твёрдой соли, и растворимость уменьшается.",
        "ar": "الأيون المشترك يزيد تركيز أحد أيونات النواتج؛ ووفق مبدأ لوشاتلييه ينزاح الاتزان في الاتجاه الذي يقلل هذه الزيادة، أي نحو الصلب، فتقل الذوبانية.",
        "zh": "同离子增大了生成物一侧某离子的浓度；根据勒夏特列原理，平衡向减弱这种变化的方向即固体一侧移动，溶解度减小。",
        "ku": "Îyona hevpar tîrbûna îyonekê li aliyê berheman zêde dike; li gorî prensîba Le Chatelier hevsengî ber bi aliyê ku vê zêdebûnê kêm dike, ango ber bi hişkê ve, diçe û helbûn kêm dibe."
      }
    },
    {
      "id": "u20-f07",
      "fact": {
        "tr": "İyon çarpımı (Qi): Qi > Kçç ise çözelti aşırı doygundur ve çökelme gerçekleşir.",
        "en": "Ion product Qi: if Qi > Ksp, the solution is supersaturated and precipitation occurs.",
        "de": "Ionenprodukt Qi: Wenn Qi > Ksp, ist die Lösung übersättigt und es kommt zur Fällung.",
        "fr": "Produit ionique Qi : si Qi > Ksp, la solution est sursaturée et un précipité se forme.",
        "ru": "Ионное произведение Qi: если Qi > Ksp, раствор пересыщен и выпадает осадок.",
        "ar": "الحاصل الأيوني Qi: إذا كان Qi > Ksp يكون المحلول فوق مشبع ويحدث ترسيب.",
        "zh": "离子积 Qi：若 Qi > Ksp，溶液过饱和，产生沉淀。",
        "ku": "Hevdana îyonan Qi: ger Qi > Ksp be, çareserî ji têrbûnê zêdetir e û nişte çêdibe."
      },
      "trap": {
        "tr": "Qi < Kçç olduğunda çökelme meydana gelir.",
        "en": "When Qi < Ksp, precipitation occurs.",
        "de": "Wenn Qi < Ksp, kommt es zu Niederschlag.",
        "fr": "Lorsque Qi < Ksp, un précipité se forme.",
        "ru": "При Qi < Ksp выпадает осадок.",
        "ar": "عندما يكون Qi < Ksp يحدث ترسيب.",
        "zh": "当 Qi < Ksp 时，发生沉淀。",
        "ku": "Dema Qi < Ksp be, nişte çêdibe."
      },
      "whyTrapIsFalse": {
        "tr": "Qi < Kçç ise iyon derişimleri doygunluk için gereken değerin altındadır; çözelti doymamıştır, çökelme olmaz, hatta eklenen katı çözünebilir.",
        "en": "If Qi < Ksp, the ion concentrations are below the saturation value; the solution is unsaturated, nothing precipitates, and added solid can even dissolve.",
        "de": "Bei Qi < Ksp liegen die Ionenkonzentrationen unter dem Sättigungswert; die Lösung ist ungesättigt, es fällt nichts aus, zugesetzter Feststoff kann sich sogar lösen.",
        "fr": "Si Qi < Ksp, les concentrations ioniques sont inférieures à la valeur de saturation ; la solution est insaturée, rien ne précipite et le solide ajouté peut même se dissoudre.",
        "ru": "При Qi < Ksp концентрации ионов ниже, чем нужно для насыщения; раствор ненасыщенный, осадок не выпадает, а добавленная твёрдая соль может даже раствориться.",
        "ar": "إذا كان Qi < Ksp فإن تراكيز الأيونات أقل من قيمة التشبع؛ فالمحلول غير مشبع ولا يحدث ترسيب، بل قد يذوب الصلب المضاف.",
        "zh": "Qi < Ksp时离子浓度低于饱和所需值；溶液不饱和，不会生成沉淀，加入的固体甚至还能溶解。",
        "ku": "Ger Qi < Ksp be, tîrbûnên îyonan di bin nirxa têrbûnê de ne; çareserî ne têr e, nişte çênabe, heta hişka ku tê zêdekirin dikare bihele."
      }
    },
    {
      "id": "u20-f08",
      "fact": {
        "tr": "Qi = Kçç ise çözelti tam doygundur ve çökelme olmaz; Qi < Kçç ise çözelti doymamıştır.",
        "en": "If Qi = Ksp, the solution is fully saturated and there is no precipitation; If Qi < Ksp, the solution is unsaturated.",
        "de": "Wenn Qi = Ksp, ist die Lösung vollständig gesättigt und es kommt zu keinem Niederschlag; Wenn Qi < Ksp, ist die Lösung ungesättigt.",
        "fr": "Si Qi = Ksp, la solution est totalement saturée et il n’y a pas de précipitation ; Si Qi < Ksp, la solution est insaturée.",
        "ru": "Если Qi = Ksp, раствор насыщен и осадок не выпадает; если Qi < Ksp, раствор ненасыщенный.",
        "ar": "إذا كان Qi = Ksp يكون المحلول مشبعًا تمامًا ولا يحدث ترسيب؛ وإذا كان Qi < Ksp فالمحلول غير مشبع.",
        "zh": "若 Qi = Ksp，溶液恰好饱和，无沉淀生成；若 Qi < Ksp，溶液不饱和。",
        "ku": "Ger Qi = Ksp be, çareserî tam têr e û nişte çênabe; ger Qi < Ksp be, çareserî ne têr e."
      },
      "trap": {
        "tr": "Qi = Kçç olduğunda çözelti doymamıştır ve tuz çöker.",
        "en": "When Qi = Ksp, the solution is unsaturated and the salt precipitates.",
        "de": "Bei Qi = Ksp ist die Lösung ungesättigt und das Salz fällt aus.",
        "fr": "Lorsque Qi = Ksp, la solution est insaturée et le sel précipite.",
        "ru": "При Qi = Ksp раствор ненасыщенный, и соль выпадает в осадок.",
        "ar": "عندما يكون Qi = Ksp، يكون المحلول غير مشبع ويترسب الملح.",
        "zh": "Qi = Ksp 时，溶液不饱和，盐会沉淀。",
        "ku": "Dema Qi = Ksp be, çareserî ne têr e û xwê dinişe."
      },
      "whyTrapIsFalse": {
        "tr": "Qi = Kçç denge koşuludur: çözelti tam doygundur ve çözünme ile çökelme hızları eşittir. Bu durumda çözelti ne doymamıştır ne de net bir çökelme gözlenir.",
        "en": "Qi = Ksp is the equilibrium condition: the solution is exactly saturated and the rates of dissolution and precipitation are equal. The solution is neither unsaturated nor does net precipitation occur.",
        "de": "Qi = Ksp ist die Gleichgewichtsbedingung: Die Lösung ist genau gesättigt, Lösungs- und Fällungsgeschwindigkeit sind gleich. Sie ist weder ungesättigt, noch kommt es zu einer Nettofällung.",
        "fr": "Qi = Ksp est la condition d'équilibre : la solution est juste saturée et les vitesses de dissolution et de précipitation sont égales. Elle n'est ni insaturée ni le siège d'une précipitation nette.",
        "ru": "Qi = Ksp — условие равновесия: раствор в точности насыщен, скорости растворения и осаждения равны. Раствор в этом случае насыщенный, а не ненасыщенный, и дополнительный осадок не выпадает.",
        "ar": "Qi = Ksp هو شرط الاتزان: المحلول مشبع تمامًا وسرعتا الذوبان والترسيب متساويتان، فلا هو غير مشبع ولا يحدث ترسيب صافٍ.",
        "zh": "Qi = Ksp是平衡条件：溶液恰好饱和，溶解速率与沉淀速率相等；既不是不饱和溶液，也没有净沉淀生成。",
        "ku": "Qi = Ksp merca hevsengiyê ye: çareserî tam têr e û leza helînê û leza niştinê wekhev in. Çareserî ne ne-têr e û niştineke net jî çênabe."
      }
    },
    {
      "id": "u20-f09",
      "fact": {
        "tr": "AgCl katısının saf sudaki çözünürlüğü, 0,1 M NaCl çözeltisindeki çözünürlüğünden çok daha büyüktür.",
        "en": "The solubility of AgCl solid in pure water is MUCH LARGER than its solubility in 0.1 M NaCl solution.",
        "de": "Die Löslichkeit von AgCl-Feststoff in reinem Wasser ist VIEL GRÖSSER als seine Löslichkeit in 0,1 M NaCl-Lösung.",
        "fr": "La solubilité du solide AgCl dans l’eau pure est BEAUCOUP PLUS GRANDE que sa solubilité dans une solution de NaCl 0,1 M.",
        "ru": "Растворимость AgCl в чистой воде НАМНОГО больше, чем в 0,1 M растворе NaCl.",
        "ar": "إن قابلية ذوبان AgCl الصلب في الماء النقي أكبر بكثير من ذوبانه في محلول كلوريد الصوديوم 0.1 مولار.",
        "zh": "AgCl固体在纯水中的溶解度比其在0.1 M NaCl溶液中的溶解度大得多。",
        "ku": "Helbûna AgCl ya hişk di ava saf de ji helbûna wê di çareseriya 0,1 M NaCl de PIR MEZINTIR e."
      },
      "trap": {
        "tr": "AgCl tuzu NaCl çözeltisinde saf sudakinden daha çok çözünür.",
        "en": "AgCl dissolves more in NaCl solution than in pure water.",
        "de": "AgCl löst sich in NaCl-Lösung besser als in reinem Wasser.",
        "fr": "AgCl se dissout davantage dans une solution de NaCl que dans l'eau pure.",
        "ru": "AgCl растворяется в растворе NaCl лучше, чем в чистой воде.",
        "ar": "يذوب AgCl في محلول NaCl أكثر من ذوبانه في الماء النقي.",
        "zh": "AgCl在NaCl溶液中比在纯水中溶解得更多。",
        "ku": "AgCl di çareseriya NaCl de ji ava saf bêtir dihele."
      },
      "whyTrapIsFalse": {
        "tr": "NaCl'den gelen Cl- iyonu AgCl için ortak iyondur ve çözünme dengesini sola iter; 0,1 M NaCl'de AgCl'nin çözünürlüğü saf sudakinin binlerce kat altına düşer.",
        "en": "The Cl- ion from NaCl is a common ion for AgCl and pushes the dissolution equilibrium to the left; in 0.1 M NaCl the solubility of AgCl drops to thousands of times below its value in pure water.",
        "de": "Das Cl--Ion aus NaCl ist für AgCl ein gemeinsames Ion und drängt das Lösungsgleichgewicht nach links; in 0,1 M NaCl sinkt die Löslichkeit von AgCl auf ein Tausendstel und weniger des Wertes in reinem Wasser.",
        "fr": "L'ion Cl- apporté par NaCl est un ion commun pour AgCl et déplace l'équilibre de dissolution vers la gauche ; dans NaCl 0,1 M, la solubilité de AgCl devient des milliers de fois plus faible que dans l'eau pure.",
        "ru": "Ион Cl- из NaCl является для AgCl одноимённым ионом и смещает равновесие растворения влево; в 0,1 M растворе NaCl растворимость AgCl в тысячи раз меньше, чем в чистой воде.",
        "ar": "أيون Cl- القادم من NaCl أيون مشترك بالنسبة لـ AgCl ويدفع اتزان الذوبان نحو اليسار؛ ففي محلول NaCl تركيزه 0.1 M تصبح ذوبانية AgCl أقل بآلاف المرات منها في الماء النقي.",
        "zh": "NaCl提供的Cl- 是AgCl的同离子，使溶解平衡左移；在0.1 M NaCl中，AgCl的溶解度比在纯水中小几千倍。",
        "ku": "Îyona Cl- ya ji NaCl ji bo AgCl îyona hevpar e û hevsengiya helînê ber bi çepê ve dehf dide; di NaCl ya 0,1 M de helbûna AgCl bi hezaran caran ji ya di ava saf de kêmtir dibe."
      }
    },
    {
      "id": "u20-f10",
      "fact": {
        "tr": "Endotermik çözünen bir tuzda sıcaklık artırılırsa Kçç artar ve çözünürlük artar.",
        "en": "For a salt that dissolves endothermically, raising the temperature increases Ksp and increases the solubility.",
        "de": "Bei einem endotherm löslichen Salz steigen bei Temperaturerhöhung Ksp und Löslichkeit.",
        "fr": "Pour un sel dont la dissolution est endothermique, une hausse de température augmente Ksp et la solubilité.",
        "ru": "Если растворение соли эндотермично, то при повышении температуры Ksp и растворимость увеличиваются.",
        "ar": "في الملح الذي يذوب ذوبانًا ماصًّا للحرارة، يؤدي رفع درجة الحرارة إلى زيادة Ksp وزيادة الذوبانية.",
        "zh": "对于吸热溶解的盐，升高温度Ksp增大，溶解度也增大。",
        "ku": "Di xwêyeke ku bi awayê endotermîk dihele de, ger germahî zêde bibe, Ksp zêde dibe û helbûn jî zêde dibe."
      },
      "trap": {
        "tr": "Endotermik tuzda ısıtma yapılırsa Kçç küçülür.",
        "en": "If heating is done in endothermic salt, Ksp shrinks.",
        "de": "Wenn in endothermem Salz erhitzt wird, schrumpft Ksp.",
        "fr": "Si le chauffage est effectué dans du sel endothermique, Ksp rétrécit.",
        "ru": "Если растворение соли эндотермично, при нагревании Ksp уменьшается.",
        "ar": "إذا تم التسخين في ملح ماص للحرارة، فإن Ksp ينكمش.",
        "zh": "对吸热溶解的盐加热时，Ksp 会减小。",
        "ku": "Ger germkirin di xwêya endotermîk de were kirin, Ksp piçûk dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Endotermik çözünmede ısı, girenler tarafında bir madde gibi davranır; ısıtılınca denge iyonlar yönüne kayar, bu nedenle Kçç küçülmez, büyür.",
        "en": "In endothermic dissolution heat acts like a reactant; on heating the equilibrium shifts toward the ions, so Ksp does not decrease but increases.",
        "de": "Beim endothermen Lösen verhält sich Wärme wie ein Edukt; beim Erwärmen verschiebt sich das Gleichgewicht zu den Ionen, daher wird Ksp nicht kleiner, sondern größer.",
        "fr": "Dans une dissolution endothermique, la chaleur se comporte comme un réactif ; en chauffant, l'équilibre se déplace vers les ions, donc Ksp ne diminue pas, il augmente.",
        "ru": "При эндотермическом растворении теплоту можно рассматривать как реагент; при нагревании равновесие смещается в сторону ионов, поэтому Ksp не уменьшается, а растёт.",
        "ar": "في الذوبان الماص للحرارة تتصرف الحرارة كأحد المتفاعلات؛ فعند التسخين ينزاح الاتزان نحو الأيونات، ولذلك لا يقل Ksp بل يزداد.",
        "zh": "吸热溶解中热量相当于反应物；加热时平衡向离子方向移动，所以Ksp不是减小而是增大。",
        "ku": "Di helîna endotermîk de germ wekî reaktantekê tevdigere; dema tê germkirin hevsengî ber bi îyonan ve diçe, ji ber vê Ksp piçûk nabe, mezin dibe."
      }
    },
    {
      "id": "u20-f11",
      "fact": {
        "tr": "Ekzotermik çözünen bir tuzda sıcaklık artırılırsa Kçç azalır ve çözünürlük azalır.",
        "en": "For a salt that dissolves exothermically, raising the temperature decreases Ksp and decreases the solubility.",
        "de": "Bei einem exotherm löslichen Salz sinken bei Temperaturerhöhung Ksp und Löslichkeit.",
        "fr": "Pour un sel dont la dissolution est exothermique, une hausse de température diminue Ksp et la solubilité.",
        "ru": "Если растворение соли экзотермично, то при повышении температуры Ksp и растворимость уменьшаются.",
        "ar": "في الملح الذي يذوب ذوبانًا طاردًا للحرارة، يؤدي رفع درجة الحرارة إلى نقصان Ksp ونقصان الذوبانية.",
        "zh": "对于放热溶解的盐，升高温度Ksp减小，溶解度也减小。",
        "ku": "Di xwêyeke ku bi awayê ekzotermîk dihele de, ger germahî zêde bibe, Ksp kêm dibe û helbûn jî kêm dibe."
      },
      "trap": {
        "tr": "Ekzotermik tuzlarda sıcaklık arttıkça daha çok madde çözünür.",
        "en": "In exothermic salts, as the temperature increases, more substances dissolve.",
        "de": "In exothermen Salzen lösen sich mit zunehmender Temperatur mehr Stoffe auf.",
        "fr": "Dans les sels exothermiques, à mesure que la température augmente, davantage de substances se dissolvent.",
        "ru": "Если растворение соли экзотермично, при нагревании растворяется больше вещества.",
        "ar": "في الأملاح الطاردة للحرارة، مع ارتفاع درجة الحرارة، يذوب المزيد من المواد.",
        "zh": "对放热溶解的盐，温度升高时溶解得更多。",
        "ku": "Di xwêyên exotermîk de, her ku germahî zêde dibe, maddeyên zêde dihelin."
      },
      "whyTrapIsFalse": {
        "tr": "Her tuzun çözünürlüğü sıcaklıkla artmaz; ekzotermik çözünmede ısı ürünler tarafındadır, ısıtma dengeyi sola kaydırır ve hem Kçç hem çözünürlük azalır.",
        "en": "Not every salt becomes more soluble on heating; in exothermic dissolution heat is on the product side, so heating shifts the equilibrium to the left and both Ksp and solubility decrease.",
        "de": "Nicht jedes Salz löst sich beim Erwärmen besser; beim exothermen Lösen steht die Wärme auf der Produktseite, Erwärmen verschiebt das Gleichgewicht nach links, und Ksp sowie Löslichkeit sinken.",
        "fr": "Tous les sels ne deviennent pas plus solubles à chaud ; dans une dissolution exothermique, la chaleur est du côté des produits, chauffer déplace l'équilibre vers la gauche et Ksp comme la solubilité diminuent.",
        "ru": "Растворимость растёт при нагревании не у всех солей; при экзотермическом растворении теплота записывается в правой части, нагревание смещает равновесие влево, и уменьшаются и Ksp, и растворимость.",
        "ar": "ليس كل ملح تزداد ذوبانيته بالتسخين؛ ففي الذوبان الطارد للحرارة تكون الحرارة في جانب النواتج، فيزيح التسخين الاتزان نحو اليسار ويقل كلٌّ من Ksp والذوبانية.",
        "zh": "并非所有盐的溶解度都随温度升高而增大；放热溶解中热量在生成物一侧，加热使平衡左移，Ksp和溶解度都减小。",
        "ku": "Helbûna her xwêyê bi germahiyê re zêde nabe; di helîna ekzotermîk de germ li aliyê berheman e, germkirin hevsengiyê ber bi çepê ve dibe û hem Ksp hem helbûn kêm dibin."
      }
    },
    {
      "id": "u20-f12",
      "fact": {
        "tr": "Dipte katısı bulunan doymuş çözeltiye aynı sıcaklıkta su eklenirse dipteki katının bir kısmı çözünür; dipte katı kaldığı sürece iyon derişimleri ve Kçç değişmez.",
        "en": "If water is added at the same temperature to a saturated solution with solid at the bottom, part of the solid dissolves; as long as some solid remains, the ion concentrations and Ksp do not change.",
        "de": "Wird einer gesättigten Lösung mit Bodenkörper bei gleicher Temperatur Wasser zugesetzt, löst sich ein Teil des Bodenkörpers; solange Bodenkörper vorhanden bleibt, ändern sich die Ionenkonzentrationen und Ksp nicht.",
        "fr": "Si l'on ajoute de l'eau à même température à une solution saturée contenant un dépôt solide, une partie du solide se dissout ; tant qu'il reste du solide, les concentrations des ions et Ksp ne changent pas.",
        "ru": "Если к насыщенному раствору с осадком на дне добавить воду при той же температуре, часть осадка растворится; пока осадок остаётся, концентрации ионов и Ksp не изменяются.",
        "ar": "إذا أُضيف الماء عند درجة الحرارة نفسها إلى محلول مشبع في قاعه مادة صلبة، يذوب جزء من الصلب؛ وما دام بعض الصلب باقيًا فلا تتغير تراكيز الأيونات ولا Ksp.",
        "zh": "在同一温度下向底部有固体的饱和溶液中加水，部分固体溶解；只要仍有固体剩余，离子浓度和Ksp都不变。",
        "ku": "Ger di heman germahiyê de av li çareseriya têr a ku li binê wê hişk heye were zêdekirin, beşek ji hişkê dihele; heta ku hişk bimîne, tîrbûna îyonan û Ksp naguherin."
      },
      "trap": {
        "tr": "Dipte katısı olan çözeltiye su eklenirse çözelti derişimi hızla artar.",
        "en": "If water is added to a solution with solids at the bottom, the solution concentration increases rapidly.",
        "de": "Wenn einer Lösung mit Feststoffen am Boden Wasser zugesetzt wird, steigt die Konzentration der Lösung schnell an.",
        "fr": "Si de l’eau est ajoutée à une solution contenant des solides au fond, la concentration de la solution augmente rapidement.",
        "ru": "Если к раствору с осадком на дне добавить воду, концентрация раствора резко возрастёт.",
        "ar": "إذا أضيف الماء إلى محلول به مواد صلبة في القاع، فإن تركيز المحلول يزداد بسرعة.",
        "zh": "向底部有固体的溶液中加水，溶液浓度会迅速增大。",
        "ku": "Ger av li çareseriya ku li binê wê hişk heye were zêdekirin, tîrbûna çareseriyê bi lez zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Su eklemek çözeltiyi seyreltir, derişimi artırmaz; dipte katı bulunduğu sürece katının bir kısmı çözünerek çözeltiyi yeniden doygun hâle getirir ve iyon derişimleri eski değerine döner.",
        "en": "Adding water dilutes the solution, it does not concentrate it; as long as solid remains, part of it dissolves and makes the solution saturated again, so the ion concentrations return to their previous values.",
        "de": "Wasserzugabe verdünnt die Lösung und konzentriert sie nicht; solange Bodenkörper vorhanden ist, löst sich ein Teil davon, die Lösung wird wieder gesättigt und die Ionenkonzentrationen erreichen ihre alten Werte.",
        "fr": "Ajouter de l'eau dilue la solution, cela ne la concentre pas ; tant qu'il reste du solide, une partie se dissout, la solution redevient saturée et les concentrations ioniques reprennent leurs valeurs initiales.",
        "ru": "Добавление воды разбавляет раствор, а не концентрирует его; пока на дне есть осадок, часть его растворяется, раствор снова становится насыщенным, и концентрации ионов возвращаются к прежним значениям.",
        "ar": "إضافة الماء تخفف المحلول ولا تزيد تركيزه؛ وما دام الصلب موجودًا في القاع يذوب جزء منه فيعود المحلول مشبعًا وتعود تراكيز الأيونات إلى قيمها السابقة.",
        "zh": "加水是稀释，不会使浓度增大；只要底部还有固体，部分固体就会溶解使溶液重新饱和，离子浓度恢复原值。",
        "ku": "Zêdekirina avê çareseriyê sist dike, tîrbûnê zêde nake; heta ku hişk li binî hebe, beşek jê dihele û çareserî dîsa têr dibe, tîrbûnên îyonan vedigerin nirxên xwe yên berê."
      }
    },
    {
      "id": "u20-f13",
      "fact": {
        "tr": "Seçimli çöktürme: Aynı tipteki (ör. AgCl ve AgBr gibi XY) tuzların iyonlarını eşit derişimde içeren çözeltiye çöktürücü eklendiğinde Kçç'si küçük olan (daha az çözünen) önce çöker.",
        "en": "Selective precipitation: when a precipitating agent is added to a solution containing equal concentrations of the ions of salts of the same type (e.g. XY salts such as AgCl and AgBr), the one with the smaller Ksp (less soluble) precipitates first.",
        "de": "Selektive Fällung: Wird einer Lösung, die die Ionen gleichartiger Salze (z. B. XY-Salze wie AgCl und AgBr) in gleicher Konzentration enthält, ein Fällungsmittel zugesetzt, fällt das Salz mit dem kleineren Ksp (schwerer löslich) zuerst aus.",
        "fr": "Précipitation sélective : lorsqu'on ajoute un agent précipitant à une solution contenant, à concentrations égales, les ions de sels du même type (ex. sels XY comme AgCl et AgBr), celui dont le Ksp est le plus petit (le moins soluble) précipite en premier.",
        "ru": "Дробное осаждение: при добавлении осадителя к раствору, содержащему в равных концентрациях ионы солей одного типа (например, солей XY — AgCl и AgBr), первой осаждается соль с меньшим Ksp (менее растворимая).",
        "ar": "الترسيب الانتقائي: عند إضافة عامل مرسِّب إلى محلول يحتوي بتراكيز متساوية على أيونات أملاح من النوع نفسه (مثل أملاح XY كـ AgCl و AgBr)، يترسب أولًا الملح ذو Ksp الأصغر (الأقل ذوبانًا).",
        "zh": "选择性沉淀：向含有等浓度的同类型盐离子(如 AgCl 和 AgBr 这类 XY 型盐)的溶液中加入沉淀剂时，Ksp 较小（溶解度较小）的盐先沉淀。",
        "ku": "Niştina hilbijartî: dema ku madeyeke nişteker li çareseriyeke ku îyonên xwêyên ji heman tîpê (mînak xwêyên XY wekî AgCl û AgBr) bi tîrbûna wekhev dihewîne tê zêdekirin, ya ku Ksp wê piçûktir e (kêmtir dihele) pêşî dinişe."
      },
      "trap": {
        "tr": "Aynı tipteki tuzlardan Kçç'si büyük olan tuz çözeltiden ilk önce çöker.",
        "en": "Among salts of the same type, the salt with the larger Ksp precipitates from the solution first.",
        "de": "Von gleichartigen Salzen fällt das Salz mit dem größeren Ksp zuerst aus der Lösung aus.",
        "fr": "Parmi des sels du même type, celui dont le Ksp est le plus grand précipite en premier.",
        "ru": "Из солей одного типа первой из раствора осаждается соль с большим Ksp.",
        "ar": "من بين الأملاح من النوع نفسه، يترسب أولًا الملح ذو Ksp الأكبر.",
        "zh": "在同类型的盐中，Ksp较大的盐先从溶液中沉淀出来。",
        "ku": "Di nav xwêyên ji heman tîpê de, xwêya ku Ksp wê mezintir e pêşî ji çareseriyê dinişe."
      },
      "whyTrapIsFalse": {
        "tr": "Kçç'si büyük olan tuz daha çok çözünür ve çökmesi için daha yüksek çöktürücü iyon derişimi gerekir; aynı tip tuzlarda çöktürücü eklendikçe önce Kçç'si küçük olanın iyon çarpımı Kçç'yi aşar.",
        "en": "The salt with the larger Ksp is more soluble and needs a higher concentration of precipitating ion; among salts of the same type, the ion product of the one with the smaller Ksp exceeds its Ksp first.",
        "de": "Das Salz mit dem größeren Ksp ist besser löslich und benötigt eine höhere Konzentration des Fällungsions; bei gleichartigen Salzen überschreitet das Ionenprodukt des Salzes mit dem kleineren Ksp zuerst seinen Ksp.",
        "fr": "Le sel de plus grand Ksp est plus soluble et exige une concentration plus élevée d'ion précipitant ; pour des sels du même type, c'est le produit ionique du sel de plus petit Ksp qui dépasse son Ksp en premier.",
        "ru": "Соль с большим Ksp растворима лучше, и для её осаждения нужна более высокая концентрация иона-осадителя; у солей одного типа при добавлении осадителя ионное произведение раньше превышает Ksp у той соли, у которой Ksp меньше.",
        "ar": "الملح ذو Ksp الأكبر أكثر ذوبانًا ويحتاج إلى تركيز أعلى من الأيون المرسِّب؛ وفي الأملاح من النوع نفسه يتجاوز الحاصل الأيوني للملح ذي Ksp الأصغر قيمةَ Ksp الخاصة به أولًا.",
        "zh": "Ksp较大的盐更易溶，需要更高浓度的沉淀离子才会沉淀；同类型盐中，Ksp较小者的离子积最先超过其Ksp。",
        "ku": "Xwêya ku Ksp wê mezintir e bêtir dihele û ji bo niştinê tîrbûneke bilindtir a îyona nişteker hewce dike; di xwêyên heman curey de, hevdana îyonan a xwêya bi Ksp ya piçûktir pêşî ji Ksp ya xwe derbas dibe."
      }
    },
    {
      "id": "u20-f14",
      "fact": {
        "tr": "Mağaralardaki sarkıt ve dikitler ile Pamukkale travertenleri, CaCO3'ün çözünme-çökelme dengesiyle oluşur.",
        "en": "Stalactites and stalagmites in caves and the travertines of Pamukkale form through the dissolution-precipitation equilibrium of CaCO3.",
        "de": "Stalaktiten und Stalagmiten in Höhlen sowie die Travertinterrassen von Pamukkale entstehen durch das Lösungs-Fällungs-Gleichgewicht von CaCO3.",
        "fr": "Les stalactites et stalagmites des grottes ainsi que les travertins de Pamukkale se forment grâce à l’équilibre de dissolution-précipitation de CaCO3.",
        "ru": "Сталактиты и сталагмиты в пещерах, а также травертины Памуккале образуются за счёт равновесия «растворение — осаждение» CaCO3.",
        "ar": "تتكوّن الهوابط والصواعد في الكهوف وترافرتينات باموكالي من خلال اتزان الذوبان-الترسيب لـ CaCO3.",
        "zh": "洞穴中的钟乳石、石笋以及棉花堡的石灰华，都是由CaCO3的溶解-沉淀平衡形成的。",
        "ku": "Stalaktît û stalagmîtên di şikeftan de û travertenên Pamukkaleyê bi hevsengiya helîn-niştinê ya CaCO3 çêdibin."
      },
      "trap": {
        "tr": "Sarkıt ve dikitler fiziksel buharlaşma sonucu kum birikimidir.",
        "en": "Stalactites and stalagmites are accumulations of sand as a result of physical evaporation.",
        "de": "Stalaktiten und Stalagmiten sind Sandansammlungen, die durch physikalische Verdunstung entstanden sind.",
        "fr": "Les stalactites et les stalagmites sont des accumulations de sable résultant de l'évaporation physique.",
        "ru": "Сталактиты и сталагмиты — скопления песка, образовавшиеся в результате физического испарения.",
        "ar": "الهوابط والصواعد هي تراكمات من الرمال نتيجة التبخر المادي.",
        "zh": "钟乳石和石笋是物理蒸发形成的沙粒堆积物。",
        "ku": "Stalaktît û stalagmît kombûna qûmê ne ku di encama evaporkirina fizîkî de ye."
      },
      "whyTrapIsFalse": {
        "tr": "Sarkıt ve dikitler kum değil CaCO3 birikimidir; Ca2+ ve HCO3- içeren sudan CO2 gazı ayrılınca denge CaCO3 yönüne kayar ve madde kimyasal olarak çöker.",
        "en": "Stalactites and stalagmites are deposits of CaCO3, not sand; when CO2 gas escapes from water containing Ca2+ and HCO3-, the equilibrium shifts toward CaCO3 and it precipitates chemically.",
        "de": "Stalaktiten und Stalagmiten sind Ablagerungen von CaCO3, nicht von Sand; entweicht CO2 aus Wasser mit Ca2+ und HCO3-, verschiebt sich das Gleichgewicht zu CaCO3, das chemisch ausfällt.",
        "fr": "Les stalactites et stalagmites sont des dépôts de CaCO3, pas de sable ; quand le CO2 s'échappe d'une eau contenant Ca2+ et HCO3-, l'équilibre se déplace vers CaCO3, qui précipite chimiquement.",
        "ru": "Сталактиты и сталагмиты — отложения CaCO3, а не песка; когда из воды, содержащей Ca2+ и HCO3-, выделяется CO2, равновесие смещается в сторону CaCO3, и он выпадает в осадок в результате химической реакции.",
        "ar": "الهوابط والصواعد ترسبات من CaCO3 وليست رملًا؛ فعندما يتصاعد غاز CO2 من ماء يحتوي على Ca2+ و HCO3- ينزاح الاتزان نحو CaCO3 فيترسب كيميائيًا.",
        "zh": "钟乳石和石笋是CaCO3沉积，而不是沙子；含Ca2+ 和HCO3- 的水逸出CO2时，平衡向生成CaCO3方向移动，发生化学沉淀。",
        "ku": "Stalaktît û stalagmît ne qûm in, kombûna CaCO3 ne; dema gaza CO2 ji ava ku Ca2+ û HCO3- dihewîne derdikeve, hevsengî ber bi CaCO3 ve diçe û ew bi awayê kîmyewî dinişe."
      }
    },
    {
      "id": "u20-f15",
      "fact": {
        "tr": "Az çözünen bazların (ör. Mg(OH)2) asidik ortamda çözünürlüğü artar çünkü H+ iyonları OH- iyonlarını nötralleştirerek dengeyi sağa kaydırır.",
        "en": "The solubility of sparingly soluble bases (e.g. Mg(OH)2) increases in an acidic medium because H+ ions neutralize OH- ions, shifting the equilibrium to the right.",
        "de": "Die Löslichkeit schwerlöslicher Basen (z. B. Mg(OH)2) nimmt in saurem Milieu zu, weil H+-Ionen die OH--Ionen neutralisieren und das Gleichgewicht nach rechts verschieben.",
        "fr": "La solubilité des bases peu solubles (ex. Mg(OH)2) augmente en milieu acide car les ions H+ neutralisent les ions OH-, ce qui déplace l’équilibre vers la droite.",
        "ru": "Растворимость малорастворимых оснований (например, Mg(OH)2) в кислой среде увеличивается, так как ионы H+ нейтрализуют ионы OH- и смещают равновесие вправо.",
        "ar": "تزداد ذوبانية القواعد قليلة الذوبان (مثل Mg(OH)2) في الوسط الحمضي لأن أيونات H+ تعادل أيونات OH- فينزاح الاتزان نحو اليمين.",
        "zh": "难溶碱(如Mg(OH)2)在酸性介质中的溶解度增大，因为H+ 中和OH-，使平衡向右移动。",
        "ku": "Helbûna bazên kêm-helbar (mînak Mg(OH)2) di navgîna asîdî de zêde dibe, ji ber ku îyonên H+ îyonên OH- bêbandor dikin û hevsengiyê ber bi rastê ve dibin."
      },
      "trap": {
        "tr": "Mg(OH)2 asidik ortamda daha az çözünür.",
        "en": "Mg(OH)2 is less soluble in an acidic medium.",
        "de": "Mg(OH)2 ist in saurem Milieu schwerer löslich.",
        "fr": "Mg(OH)2 est moins soluble en milieu acide.",
        "ru": "Mg(OH)2 в кислой среде растворяется хуже.",
        "ar": "يكون Mg(OH)2 أقل ذوبانًا في الوسط الحمضي.",
        "zh": "Mg(OH)2在酸性介质中溶解度更小。",
        "ku": "Mg(OH)2 di hawîrdora asîdî de kêmtir dihele."
      },
      "whyTrapIsFalse": {
        "tr": "Asitten gelen H+ iyonları dengedeki OH- iyonlarıyla birleşip su oluşturur ve OH- ortamdan uzaklaşır; Le Chatelier gereği denge sağa kayar, Mg(OH)2 daha çok çözünür.",
        "en": "H+ ions from the acid combine with OH- ions of the equilibrium to form water, removing OH-; by Le Chatelier the equilibrium shifts to the right and more Mg(OH)2 dissolves.",
        "de": "H+-Ionen aus der Säure verbinden sich mit den OH--Ionen des Gleichgewichts zu Wasser und entziehen OH-; nach Le Chatelier verschiebt sich das Gleichgewicht nach rechts und mehr Mg(OH)2 löst sich.",
        "fr": "Les ions H+ de l'acide se combinent aux ions OH- de l'équilibre pour former de l'eau et retirent OH- ; selon Le Chatelier, l'équilibre se déplace vers la droite et davantage de Mg(OH)2 se dissout.",
        "ru": "Ионы H+ кислоты связывают ионы OH- с образованием воды и выводят их из равновесия; по принципу Ле Шателье равновесие смещается вправо, и Mg(OH)2 растворяется лучше.",
        "ar": "تتحد أيونات H+ القادمة من الحمض مع أيونات OH- في الاتزان مكوّنة ماء فتزيل OH-؛ ووفق مبدأ لوشاتلييه ينزاح الاتزان نحو اليمين ويذوب مزيد من Mg(OH)2.",
        "zh": "酸中的H+ 与平衡体系中的OH- 结合成水，使OH- 减少；根据勒夏特列原理平衡右移，Mg(OH)2溶解得更多。",
        "ku": "Îyonên H+ yên ji asîdê bi îyonên OH- yên hevsengiyê re dibin av û OH- kêm dibe; li gorî Le Chatelier hevsengî ber bi rastê ve diçe û Mg(OH)2 bêtir dihele."
      }
    },
    {
      "id": "u20-f16",
      "fact": {
        "tr": "Farklı tipteki tuzların (ör. XY ve XY2) çözünürlükleri Kçç değerlerine bakılarak doğrudan karşılaştırılamaz; önce her biri için molar çözünürlük (s) hesaplanmalıdır.",
        "en": "The solubilities of salts of different types (e.g. XY and XY2) cannot be compared directly from their Ksp values; the molar solubility (s) of each must be calculated first.",
        "de": "Die Löslichkeiten verschiedenartiger Salze (z. B. XY und XY2) lassen sich nicht direkt über ihre Ksp-Werte vergleichen; zuerst muss für jedes die molare Löslichkeit (s) berechnet werden.",
        "fr": "Les solubilités de sels de types différents (ex. XY et XY2) ne peuvent pas être comparées directement à partir de leurs Ksp ; il faut d'abord calculer la solubilité molaire (s) de chacun.",
        "ru": "Растворимости солей разного типа (например, XY и XY2) нельзя сравнивать непосредственно по значениям Ksp; сначала нужно вычислить молярную растворимость (s) каждой соли.",
        "ar": "لا يمكن مقارنة ذوبانية أملاح من أنواع مختلفة (مثل XY و XY2) مباشرة من قيم Ksp؛ بل يجب أولًا حساب الذوبانية المولارية (s) لكلٍّ منها.",
        "zh": "不同类型的盐(如XY和XY2)不能直接用Ksp比较溶解度，必须先分别算出各自的摩尔溶解度(s)。",
        "ku": "Helbûna xwêyên ji cureyên cuda (mînak XY û XY2) rasterast bi nirxên Ksp nayên berhevdan; divê pêşî ji bo her yekê helbûna molar (s) were hesabkirin."
      },
      "trap": {
        "tr": "Kçç değeri küçük olan tuzun molar çözünürlüğü, tuzun tipi ne olursa olsun daha küçüktür.",
        "en": "The salt with the smaller Ksp always has the smaller molar solubility, whatever the type of the salt.",
        "de": "Das Salz mit dem kleineren Ksp hat immer die kleinere molare Löslichkeit, unabhängig vom Salztyp.",
        "fr": "Le sel de plus petit Ksp a toujours la plus petite solubilité molaire, quel que soit le type du sel.",
        "ru": "Соль с меньшим Ksp всегда имеет меньшую молярную растворимость, независимо от типа соли.",
        "ar": "الملح ذو Ksp الأصغر تكون ذوبانيته المولارية أصغر دائمًا مهما كان نوع الملح.",
        "zh": "无论盐属于何种类型，Ksp较小的盐的摩尔溶解度总是较小。",
        "ku": "Xwêya ku Ksp wê piçûktir e, çi cure be jî, helbûna wê ya molar her tim piçûktir e."
      },
      "whyTrapIsFalse": {
        "tr": "Kçç ile s arasındaki bağıntı tuzun tipine göre değişir (s^2, 4s^3, 27s^4); örneğin Kçç = 1,0x10^-12 olan XY tuzunun s'si 1,0x10^-6 M iken, Kçç'si daha küçük (4,0x10^-15) olan XY2 tuzunun s'si 1,0x10^-5 M'dir.",
        "en": "The relation between Ksp and s depends on the salt type (s^2, 4s^3, 27s^4); e.g. an XY salt with Ksp = 1.0x10^-12 has s = 1.0x10^-6 M, whereas an XY2 salt with a smaller Ksp (4.0x10^-15) has s = 1.0x10^-5 M.",
        "de": "Die Beziehung zwischen Ksp und s hängt vom Salztyp ab (s^2, 4s^3, 27s^4); z. B. hat ein XY-Salz mit Ksp = 1,0x10^-12 s = 1,0x10^-6 M, ein XY2-Salz mit kleinerem Ksp (4,0x10^-15) dagegen s = 1,0x10^-5 M.",
        "fr": "La relation entre Ksp et s dépend du type de sel (s^2, 4s^3, 27s^4) ; par exemple, un sel XY de Ksp = 1,0x10^-12 a s = 1,0x10^-6 M, alors qu'un sel XY2 de Ksp plus petit (4,0x10^-15) a s = 1,0x10^-5 M.",
        "ru": "Связь между Ksp и s зависит от типа соли (s^2, 4s^3, 27s^4); например, у соли XY с Ksp = 1,0x10^-12 s = 1,0x10^-6 M, а у соли XY2 с меньшим Ksp (4,0x10^-15) s = 1,0x10^-5 M.",
        "ar": "تختلف العلاقة بين Ksp و s باختلاف نوع الملح (s^2، 4s^3، 27s^4)؛ فمثلًا ملح XY قيمة Ksp له 1.0x10^-12 تكون ذوبانيته s = 1.0x10^-6 M، بينما ملح XY2 ذو Ksp أصغر (4.0x10^-15) تكون ذوبانيته s = 1.0x10^-5 M.",
        "zh": "Ksp与s的关系随盐的类型而变(s^2、4s^3、27s^4)；例如Ksp = 1.0x10^-12的XY型盐s = 1.0x10^-6 M，而Ksp更小(4.0x10^-15)的XY2型盐s = 1.0x10^-5 M。",
        "ku": "Têkiliya navbera Ksp û s li gorî cureyê xwê diguhere (s^2, 4s^3, 27s^4); mînak, xwêya XY ya bi Ksp = 1,0x10^-12 s = 1,0x10^-6 M e, lê xwêya XY2 ya bi Ksp ya piçûktir (4,0x10^-15) s = 1,0x10^-5 M e."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u20-c01",
      "conceptA": {
        "tr": "Qi < Kçç",
        "en": "Qi < Ksp",
        "de": "Qi < Ksp",
        "fr": "Qi < Ksp",
        "ru": "Qi < Ksp",
        "ar": "Qi < Ksp",
        "zh": "Qi < Ksp",
        "ku": "Qi < Ksp"
      },
      "conceptB": {
        "tr": "Qi > Kçç",
        "en": "Qi > Ksp",
        "de": "Qi > Ksp",
        "fr": "Qi > Ksp",
        "ru": "Qi > Ksp",
        "ar": "Qi > Ksp",
        "zh": "Qi > Ksp",
        "ku": "Qi > Ksp"
      },
      "distinction": {
        "tr": "Qi < Kçç ise çözelti doymamıştır, çökelme olmaz ve ortama eklenen katı çözünebilir; iyon çarpımı çözünürlük çarpımından büyükse çözelti aşırı doygundur ve ikisi eşitlenene kadar çökelme olur.",
        "en": "If Qi < Ksp, the solution is unsaturated, nothing precipitates and added solid can dissolve; if the ion product is larger than the solubility product, the solution is supersaturated and precipitation continues until the two are equal.",
        "de": "Gilt Qi < Ksp, ist die Lösung ungesättigt, es fällt nichts aus und zugesetzter Feststoff kann sich lösen; ist das Ionenprodukt größer als das Löslichkeitsprodukt, ist die Lösung übersättigt und es fällt so lange Feststoff aus, bis beide gleich sind.",
        "fr": "Si Qi < Ksp, la solution est insaturée, rien ne précipite et un solide ajouté peut se dissoudre ; si le produit ionique est supérieur au produit de solubilité, la solution est sursaturée et la précipitation se poursuit jusqu'à ce que les deux soient égaux.",
        "ru": "Qi < Ksp означает, что раствор ненасыщенный, осадок не выпадает, а добавленное твёрдое вещество может раствориться; если ионное произведение больше произведения растворимости, раствор пересыщен, и осадок выпадает, пока эти величины не сравняются.",
        "ar": "إذا كان Qi < Ksp فالمحلول غير مشبع ولا يحدث ترسيب ويمكن للصلب المضاف أن يذوب؛ وإذا كان الحاصل الأيوني أكبر من حاصل الإذابة فالمحلول فوق مشبع ويستمر الترسيب حتى يتساويا.",
        "zh": "Qi < Ksp 表示溶液不饱和，不生成沉淀，加入的固体还能继续溶解；若离子积大于溶度积，溶液过饱和，会析出沉淀，直到两者相等。",
        "ku": "Ger Qi < Ksp be, çareserî ne têr e, nişte çênabe û hişka tê zêdekirin dikare bihele; ger hevdana îyonan ji hevdana helbûnê mezintir be, çareserî ji têrbûnê zêdetir e û heta ku her du wekhev bibin nişte çêdibe."
      }
    },
    {
      "id": "u20-c02",
      "conceptA": {
        "tr": "Saf Sudaki Çözünürlük",
        "en": "Solubility in Pure Water",
        "de": "Löslichkeit in reinem Wasser",
        "fr": "Solubilité dans l'eau pure",
        "ru": "Растворимость в чистой воде",
        "ar": "الذوبانية في الماء النقي",
        "zh": "在纯水中的溶解度",
        "ku": "Helbûn di ava saf de"
      },
      "conceptB": {
        "tr": "Ortak İyon İçeren Çözeltideki Çözünürlük",
        "en": "Solubility in a Solution Containing a Common Ion",
        "de": "Löslichkeit in einer Lösung mit gleichionigem Zusatz",
        "fr": "Solubilité dans une solution contenant un ion commun",
        "ru": "Растворимость в растворе, содержащем одноимённый ион",
        "ar": "الذوبانية في محلول يحتوي على أيون مشترك",
        "zh": "在含同离子溶液中的溶解度",
        "ku": "Helbûn di çareseriya bi îyona hevpar de"
      },
      "distinction": {
        "tr": "Saf sudaki çözünürlük, tuzun kendi iyonlarından başka iyon içermeyen ortamdaki çözünürlüğüdür (XY tipi tuzda s = √Kçç); ortak iyon içeren çözeltide ise denge sola kaydığından çözünürlük bundan çok daha küçüktür (XY tipi tuzda s ≈ Kçç/c; c: ortak iyon derişimi).",
        "en": "Solubility in pure water is the solubility of the salt in a medium containing no ions other than its own (for an XY salt, s = √Ksp); in a solution containing a common ion the equilibrium lies further to the left, so the solubility is much smaller (for an XY salt, s ≈ Ksp/c, where c is the common-ion concentration).",
        "de": "Löslichkeit in reinem Wasser: Löslichkeit des Salzes in einem Medium, das außer seinen eigenen Ionen keine weiteren Ionen enthält (für ein XY-Salz s = √Ksp); in einer Lösung mit einem gemeinsamen Ion liegt das Gleichgewicht weiter links, daher ist die Löslichkeit dort viel kleiner (für ein XY-Salz s ≈ Ksp/c; c: Konzentration des gemeinsamen Ions).",
        "fr": "Solubilité dans l'eau pure : solubilité du sel dans un milieu ne contenant pas d'autres ions que les siens (pour un sel XY, s = √Ksp) ; dans une solution contenant un ion commun, l'équilibre est déplacé vers la gauche et la solubilité est bien plus faible (pour un sel XY, s ≈ Ksp/c ; c : concentration de l'ion commun).",
        "ru": "Растворимость в чистой воде — растворимость соли в среде, не содержащей других ионов, кроме её собственных (для соли XY s = √Ksp); растворимость в растворе, содержащем одноимённый ион, намного меньше, так как равновесие смещено влево (для соли XY s ≈ Ksp/c, где c — концентрация одноимённого иона).",
        "ar": "الذوبانية في الماء النقي هي ذوبانية الملح في وسط لا يحتوي على أيونات غير أيوناته (لملح XY يكون s = √Ksp)؛ أما في محلول يحتوي على أيون مشترك فيُزاح الاتزان نحو اليسار وتكون الذوبانية أقل بكثير (لملح XY يكون s ≈ Ksp/c، حيث c تركيز الأيون المشترك).",
        "zh": "在纯水中的溶解度是盐在除自身离子外不含其他离子的体系中的溶解度(XY 型盐 s = √Ksp)；在含同离子溶液中的溶解度则因平衡左移而小得多(XY 型盐 s ≈ Ksp/c，c 为同离子浓度)。",
        "ku": "Helbûn di ava saf de helbûna xwêyê ye di hawîrdoreke ku ji bilî îyonên wê bi xwe tu îyonên din tê de nînin (ji bo xwêya XY s = √Ksp); di çareseriya bi îyona hevpar de hevsengî ber bi çepê ve diçe, ji ber vê helbûn gelek kêmtir e (ji bo xwêya XY s ≈ Ksp/c; c: tîrbûna îyona hevpar)."
      }
    },
    {
      "id": "u20-c03",
      "conceptA": {
        "tr": "Çözünürlük Çarpımı (Kçç)",
        "en": "Solubility Product (Ksp)",
        "de": "Löslichkeitsprodukt (Ksp)",
        "fr": "Produit de solubilité (Ksp)",
        "ru": "Произведение растворимости (Ksp)",
        "ar": "حاصل الإذابة (Ksp)",
        "zh": "溶度积(Ksp)",
        "ku": "Hevdana Helbûnê (Ksp)"
      },
      "conceptB": {
        "tr": "Molar Çözünürlük (s)",
        "en": "Molar Solubility (s)",
        "de": "Molare Löslichkeit (s)",
        "fr": "Solubilité molaire (s)",
        "ru": "Молярная растворимость (s)",
        "ar": "الذوبانية المولية (s)",
        "zh": "摩尔溶解度(s)",
        "ku": "Helbûna Molar (s)"
      },
      "distinction": {
        "tr": "Kçç, belirli bir tuz için yalnızca sıcaklıkla değişen bir denge sabitidir; s ise doymuş çözeltinin 1 litresinde çözünen tuzun mol sayısıdır ve sıcaklığın yanında ortak iyon, pH gibi ortam koşullarına da bağlıdır (ör. c mol/L ortak iyon içeren çözeltide XY tuzu için s ≈ Kçç/c).",
        "en": "Ksp is an equilibrium constant that, for a given salt, changes only with temperature; s is the number of moles of salt dissolved in 1 litre of saturated solution and, besides temperature, also depends on conditions such as a common ion or pH (e.g. for an XY salt in a solution containing c mol/L of common ion, s ≈ Ksp/c).",
        "de": "Ksp ist eine Gleichgewichtskonstante, die sich für ein bestimmtes Salz nur mit der Temperatur ändert; s ist die Stoffmenge an Salz, die in 1 Liter gesättigter Lösung gelöst ist, und hängt außer von der Temperatur auch von Bedingungen wie einem gemeinsamen Ion oder dem pH ab (z. B. für ein XY-Salz in einer Lösung mit c mol/L gemeinsamem Ion: s ≈ Ksp/c).",
        "fr": "Ksp est une constante d'équilibre qui, pour un sel donné, ne varie qu'avec la température ; s est le nombre de moles de sel dissoutes dans 1 litre de solution saturée et dépend, outre la température, de conditions comme un ion commun ou le pH (ex. pour un sel XY dans une solution contenant c mol/L d'ion commun, s ≈ Ksp/c).",
        "ru": "Произведение растворимости (Ksp) — константа равновесия, которая для данной соли зависит только от температуры; молярная растворимость (s) — количество соли (моль), растворённой в 1 л насыщенного раствора; она зависит не только от температуры, но и от условий среды, например от присутствия одноимённого иона или от pH (так, для соли XY в растворе, содержащем c моль/л одноимённого иона, s примерно равна отношению произведения растворимости к c).",
        "ar": "Ksp ثابت اتزان لا يتغير لملح معيّن إلا مع درجة الحرارة؛ أما s فهي عدد مولات الملح الذائبة في لتر واحد من المحلول المشبع، وتعتمد إضافة إلى درجة الحرارة على ظروف مثل وجود أيون مشترك أو قيمة pH (فمثلًا لملح XY في محلول يحتوي c mol/L من الأيون المشترك يكون s ≈ Ksp/c).",
        "zh": "溶度积(Ksp)是平衡常数，对某一盐只随温度变化；摩尔溶解度(s)是 1 L 饱和溶液中溶解的盐的物质的量，除温度外还受同离子、pH 等条件影响(例如 XY 型盐在含 c mol/L 同离子的溶液中 s ≈ Ksp/c)。",
        "ku": "Ksp sabiteyeke hevsengiyê ye ku ji bo xwêyeke diyarkirî tenê bi germahiyê diguhere; s hejmara molên xwê ye ku di 1 lître çareseriya têr de heliyaye û ji bilî germahiyê bi mercên wekî îyona hevpar û pH jî ve girêdayî ye (mînak ji bo xwêya XY di çareseriyeke bi c mol/L îyona hevpar de s ≈ Ksp/c)."
      }
    },
    {
      "id": "u20-c04",
      "conceptA": {
        "tr": "İyon Çarpımı (Qi)",
        "en": "Ion Product (Qi)",
        "de": "Ionenprodukt (Qi)",
        "fr": "Produit ionique (Qi)",
        "ru": "Ионное произведение (Qi)",
        "ar": "الحاصل الأيوني (Qi)",
        "zh": "离子积(Qi)",
        "ku": "Hevdana Îyonan (Qi)"
      },
      "conceptB": {
        "tr": "Çözünürlük Çarpımı (Kçç)",
        "en": "Solubility Product (Ksp)",
        "de": "Löslichkeitsprodukt (Ksp)",
        "fr": "Produit de solubilité (Ksp)",
        "ru": "Произведение растворимости (Ksp)",
        "ar": "حاصل الإذابة (Ksp)",
        "zh": "溶度积(Ksp)",
        "ku": "Hevdana Helbûnê (Ksp)"
      },
      "distinction": {
        "tr": "Qi herhangi bir anda (denge kurulmuş olsun ya da olmasın) mevcut iyon derişimlerinden hesaplanır ve değeri değişkendir; Kçç ise yalnızca doymuş çözeltideki denge derişimleriyle tanımlanır ve sabit sıcaklıkta tek bir değere sahiptir.",
        "en": "Qi is calculated from the ion concentrations present at any moment (whether or not equilibrium has been reached) and its value varies; Ksp is defined only by the equilibrium concentrations in a saturated solution and has a single value at a given temperature.",
        "de": "Qi wird aus den zu einem beliebigen Zeitpunkt vorliegenden Ionenkonzentrationen berechnet (ob Gleichgewicht herrscht oder nicht) und ist veränderlich; Ksp ist nur über die Gleichgewichtskonzentrationen einer gesättigten Lösung definiert und hat bei gegebener Temperatur einen einzigen Wert.",
        "fr": "Qi se calcule à partir des concentrations ioniques présentes à un instant quelconque (équilibre atteint ou non) et sa valeur varie ; Ksp n'est défini que par les concentrations d'équilibre d'une solution saturée et n'a qu'une seule valeur à une température donnée.",
        "ru": "Ионное произведение (Qi) вычисляют по концентрациям ионов в любой момент (независимо от того, установилось ли равновесие), и его значение может меняться; Ksp определяется только равновесными концентрациями в насыщенном растворе и при данной температуре имеет единственное значение.",
        "ar": "يُحسب Qi من تراكيز الأيونات الموجودة في أي لحظة (سواء تحقق الاتزان أم لا) وقيمته متغيرة؛ أما Ksp فيُعرَّف فقط بتراكيز الاتزان في المحلول المشبع وله قيمة واحدة عند درجة حرارة معيّنة.",
        "zh": "离子积(Qi)由任意时刻（无论是否达到平衡）的离子浓度计算，其值可变；溶度积(Ksp)只由饱和溶液中的平衡浓度定义，在一定温度下为定值。",
        "ku": "Qi ji tîrbûnên îyonan ên di her kêliyê de (hevsengî çêbûbe an na) tê hesabkirin û nirxa wê diguhere; Ksp tenê bi tîrbûnên hevsengiyê yên di çareseriya têr de tê pênasekirin û di germahiyeke diyarkirî de yek nirx heye."
      }
    },
    {
      "id": "u20-c05",
      "conceptA": {
        "tr": "Ortak İyon Eklenmesi",
        "en": "Adding a Common Ion",
        "de": "Zugabe eines gemeinsamen Ions",
        "fr": "Ajout d'un ion commun",
        "ru": "Добавление одноимённого иона",
        "ar": "إضافة أيون مشترك",
        "zh": "加入同离子",
        "ku": "Zêdekirina Îyona Hevpar"
      },
      "conceptB": {
        "tr": "Aynı Sıcaklıkta Su Eklenmesi (dipte katı varken)",
        "en": "Adding Water at the Same Temperature (solid still present)",
        "de": "Wasserzugabe bei gleicher Temperatur (Bodenkörper vorhanden)",
        "fr": "Ajout d'eau à la même température (solide encore présent)",
        "ru": "Добавление воды при той же температуре (осадок остаётся)",
        "ar": "إضافة الماء عند درجة الحرارة نفسها (مع بقاء الصلب)",
        "zh": "同温下加水（底部仍有固体）",
        "ku": "Zêdekirina Avê di Heman Germahiyê de (hişk hîn li binî ye)"
      },
      "distinction": {
        "tr": "Ortak iyon eklenmesi dengeyi sola kaydırır; çözünürlük azalır ve bir miktar katı çöker. Dipte katısı olan doymuş çözeltiye su eklenince ise katının bir kısmı daha çözünür, ancak çözünürlük ve iyon derişimleri değişmez. Her iki durumda da Kçç sabittir.",
        "en": "Adding a common ion shifts the equilibrium to the left; solubility decreases and some solid precipitates. Adding water to a saturated solution with solid present makes more of the solid dissolve, but the solubility and the ion concentrations do not change. In both cases Ksp stays constant.",
        "de": "Zugabe eines gemeinsamen Ions: verschiebt das Gleichgewicht nach links; die Löslichkeit sinkt und etwas Feststoff fällt aus. Gibt man zu einer gesättigten Lösung mit Bodenkörper Wasser, löst sich mehr Feststoff, Löslichkeit und Ionenkonzentrationen bleiben aber gleich. In beiden Fällen bleibt Ksp konstant.",
        "fr": "Ajout d'un ion commun : déplace l'équilibre vers la gauche ; la solubilité diminue et un peu de solide précipite. L'ajout d'eau à une solution saturée contenant du solide fait se dissoudre davantage de solide, mais la solubilité et les concentrations ioniques ne changent pas. Dans les deux cas, Ksp reste constant.",
        "ru": "Добавление одноимённого иона смещает равновесие влево: растворимость уменьшается, и часть соли выпадает в осадок; добавление воды при той же температуре (осадок остаётся) приводит к растворению ещё части осадка, но растворимость и концентрации ионов не меняются. В обоих случаях Ksp остаётся постоянным.",
        "ar": "إضافة أيون مشترك تزيح الاتزان نحو اليسار، فتقل الذوبانية ويترسب جزء من الصلب. أما إضافة الماء إلى محلول مشبع في قاعه صلب فتؤدي إلى ذوبان مزيد من الصلب، لكن الذوبانية وتراكيز الأيونات لا تتغير. وفي الحالتين يبقى Ksp ثابتًا.",
        "zh": "加入同离子使平衡左移，溶解度减小，并析出部分固体；同温下加水（底部仍有固体）则使更多固体溶解，但溶解度和离子浓度不变。两种情况下 Ksp 都不变。",
        "ku": "Zêdekirina îyona hevpar hevsengiyê ber bi çepê ve dibe; helbûn kêm dibe û hinek hişk dinişe. Dema av li çareseriya têr a ku hişk li binî heye tê zêdekirin, beşeke din a hişkê dihele, lê helbûn û tîrbûnên îyonan naguherin. Di her du rewşan de jî Ksp sabît dimîne."
      }
    },
    {
      "id": "u20-c06",
      "conceptA": {
        "tr": "Doygun Çözelti Dengesi",
        "en": "Saturated Solution Equilibrium",
        "de": "Sättigungsgleichgewicht",
        "fr": "Équilibre des solutions saturées",
        "ru": "Равновесие в насыщенном растворе",
        "ar": "اتزان المحلول المشبع",
        "zh": "沉淀溶解平衡",
        "ku": "Hevsengiya Çareseriya Têrbûyî"
      },
      "conceptB": {
        "tr": "Aşırı Doygun Çözelti",
        "en": "Supersaturated Solution",
        "de": "Übersättigte Lösung",
        "fr": "Solution sursaturée",
        "ru": "Пересыщенный раствор",
        "ar": "محلول فوق مشبع",
        "zh": "过饱和溶液",
        "ku": "Çareseriya Ji Têrbûnê Zêdetir"
      },
      "distinction": {
        "tr": "Doygun çözelti dengesinde çözünme ve çökelme hızları eşittir, Qi = Kçç'dir ve dipteki katı ile iyonlar dinamik dengededir; aşırı doygun çözeltide ise Qi > Kçç olup sistem kararsızdır, küçük bir kristal eklenmesi veya sarsma fazlalığın çökmesine yol açar.",
        "en": "At saturated solution equilibrium the rates of dissolution and precipitation are equal, Qi = Ksp, and the solid and its ions exchange continuously (a dynamic state); in a supersaturated solution Qi > Ksp and the system is unstable, so adding a seed crystal or shaking makes the excess precipitate.",
        "de": "Sättigungsgleichgewicht: Lösungs- und Fällungsgeschwindigkeit sind gleich, Qi = Ksp, und Bodenkörper und Ionen tauschen sich ständig aus (dynamischer Zustand); in einer übersättigten Lösung ist Qi > Ksp und das System instabil, ein Impfkristall oder Schütteln lässt den Überschuss ausfallen.",
        "fr": "Équilibre des solutions saturées : les vitesses de dissolution et de précipitation sont égales, Qi = Ksp, et le solide et les ions s'échangent en permanence (état dynamique) ; dans une solution sursaturée, Qi > Ksp et le système est instable : un germe cristallin ou une agitation fait précipiter l'excès.",
        "ru": "Равновесие в насыщенном растворе означает, что скорости растворения и осаждения равны, Qi = Ksp, а осадок и ионы в растворе находятся в динамическом равновесии; в пересыщенном растворе Qi > Ksp, система неустойчива, и внесение затравочного кристалла или встряхивание вызывает выпадение избытка соли.",
        "ar": "في اتزان المحلول المشبع تتساوى سرعتا الذوبان والترسيب، ويكون Qi = Ksp، ويتبادل الصلب والأيونات باستمرار (حالة ديناميكية)؛ أما في المحلول فوق المشبع فيكون Qi > Ksp والنظام غير مستقر، فإضافة بلورة صغيرة أو الرج يؤدي إلى ترسب الفائض.",
        "zh": "沉淀溶解平衡是溶解速率与沉淀速率相等的状态：Qi = Ksp，固体与溶液中的离子不断交换（动态平衡）；过饱和溶液中 Qi > Ksp，体系不稳定，加入晶种或振荡会使过量溶质析出。",
        "ku": "Di hevsengiya çareseriya têrbûyî de leza helînê û leza niştinê wekhev in, Qi = Ksp e û hişk û îyon bi berdewamî bi hev re diguherin (rewşeke dînamîk); di çareseriya ji têrbûnê zêdetir de Qi > Ksp e û pergal ne aram e, zêdekirina krîstaleke biçûk an hejandin dibe sedema niştina zêdeyiyê."
      }
    },
    {
      "id": "u20-c07",
      "conceptA": {
        "tr": "pH'nın Çözünürlüğe Etkisi",
        "en": "Effect of pH on Solubility",
        "de": "Einfluss des pH-Werts auf die Löslichkeit",
        "fr": "Effet du pH sur la solubilité",
        "ru": "Влияние pH на растворимость",
        "ar": "تأثير الرقم الهيدروجيني على الذوبان",
        "zh": "pH 对溶解度的影响",
        "ku": "Bandora pH li ser Helbûnê"
      },
      "conceptB": {
        "tr": "Sıcaklığın Çözünürlüğe Etkisi",
        "en": "Effect of Temperature on Solubility",
        "de": "Einfluss der Temperatur auf die Löslichkeit",
        "fr": "Effet de la température sur la solubilité",
        "ru": "Влияние температуры на растворимость",
        "ar": "تأثير درجة الحرارة على الذوبان",
        "zh": "温度对溶解度的影响",
        "ku": "Bandora Germahiyê li ser Helbûnê"
      },
      "distinction": {
        "tr": "Anyonu bazik olan (OH-, CO3 2- gibi) az çözünen tuzların çözünürlüğü asit eklendikçe artar ama Kçç değişmez; sıcaklık ise Kçç'nin kendisini değiştirir: çözünmesi endotermik olan tuzlarda sıcaklık artışı Kçç'yi ve çözünürlüğü artırır.",
        "en": "Sparingly soluble salts with a basic anion (such as OH-, CO3 2-) dissolve more as acid is added, but Ksp does not change; temperature changes Ksp itself: for salts that dissolve endothermically, a rise in temperature increases both Ksp and the amount that dissolves.",
        "de": "Die Löslichkeit schwerlöslicher Salze mit basischem Anion (wie OH-, CO3 2-) steigt bei Säurezugabe, Ksp bleibt aber gleich; die Temperatur verändert Ksp selbst: Bei endotherm löslichen Salzen erhöht eine Temperaturerhöhung Ksp und Löslichkeit.",
        "fr": "Les sels peu solubles à anion basique (comme OH-, CO3 2-) se dissolvent davantage quand on ajoute un acide, mais Ksp ne change pas ; la température modifie Ksp lui-même : pour les sels à dissolution endothermique, une hausse de température augmente Ksp et la quantité dissoute.",
        "ru": "Влияние pH на растворимость проявляется у малорастворимых солей с основным анионом (OH-, CO3 2-): их растворимость растёт при добавлении кислоты, но Ksp не меняется; влияние температуры на растворимость связано с изменением самого Ksp: для солей с эндотермическим растворением нагревание увеличивает и Ksp, и растворимость.",
        "ar": "تزداد ذوبانية الأملاح قليلة الذوبان ذات الأنيون القاعدي (مثل OH- و CO3 2-) بإضافة الحمض لكن Ksp لا يتغير؛ أما درجة الحرارة فتغيّر Ksp نفسه: ففي الأملاح ذات الذوبان الماص للحرارة يزيد رفع درجة الحرارة كلًّا من Ksp والذوبانية.",
        "zh": "pH 对溶解度的影响：含碱性阴离子(如 OH-、CO3 2-)的难溶盐加酸后溶解度增大，但 Ksp 不变；温度对溶解度的影响则是改变 Ksp 本身：吸热溶解的盐升温时 Ksp 和溶解度都增大。",
        "ku": "Helbûna xwêyên kêm-helbar ên ku anyona wan bazî ye (wekî OH-, CO3 2-) bi zêdekirina asîdê zêde dibe, lê Ksp naguhere; germahî bi xwe Ksp diguherîne: di xwêyên ku bi awayê endotermîk dihelin de zêdebûna germahiyê hem Ksp hem helbûnê zêde dike."
      }
    },
    {
      "id": "u20-c08",
      "conceptA": {
        "tr": "XY Tipi Tuz",
        "en": "XY Type Salt",
        "de": "Salz vom Typ XY",
        "fr": "Sel de type XY",
        "ru": "Соль типа XY",
        "ar": "ملح من النوع XY",
        "zh": "XY型盐",
        "ku": "Xwêya Tîpa XY"
      },
      "conceptB": {
        "tr": "XY2 Tipi Tuz",
        "en": "XY2 Type Salt",
        "de": "Salz vom Typ XY2",
        "fr": "Sel de type XY2",
        "ru": "Соль типа XY2",
        "ar": "ملح من النوع XY2",
        "zh": "XY2型盐",
        "ku": "Xwêya Tîpa XY2"
      },
      "distinction": {
        "tr": "XY tipi tuzda Kçç = s^2, XY2 tipi tuzda ise Kçç = 4s^3 bağıntısı geçerlidir (s: tuzun saf sudaki molar çözünürlüğü).",
        "en": "For an XY type salt Ksp = s^2, whereas for an XY2 type salt Ksp = 4s^3 (s: molar solubility of the salt in pure water).",
        "de": "Salz vom Typ XY: Ksp = s^2; für ein Salz vom Typ XY2 gilt dagegen Ksp = 4s^3 (s: molare Löslichkeit des Salzes in reinem Wasser).",
        "fr": "Sel de type XY : Ksp = s^2 ; pour un sel de type XY2, en revanche, Ksp = 4s^3 (s : solubilité molaire du sel dans l'eau pure).",
        "ru": "Соль типа XY подчиняется соотношению Ksp = s^2, а соль типа XY2 — соотношению Ksp = 4s^3 (s — молярная растворимость соли в чистой воде).",
        "ar": "ملح من النوع XY: Ksp = s^2؛ أما ملح من النوع XY2 فتكون فيه Ksp = 4s^3 (s: الذوبانية المولارية للملح في الماء النقي).",
        "zh": "XY型盐的Ksp = s^2，而XY2型盐的Ksp = 4s^3(s为盐在纯水中的摩尔溶解度)。",
        "ku": "Ji bo xwêya tîpa XY Ksp = s^2 e, lê ji bo xwêya tîpa XY2 Ksp = 4s^3 e (s: helbûna molar a xwêyê di ava saf de)."
      }
    }
  ],
  "sequences": [
    {
      "id": "u20-s01",
      "title": {
        "tr": "Çökelme Olup Olmayacağını Belirleme",
        "en": "Determining Whether Precipitation Will Occur",
        "de": "Bestimmen, ob Niederschlag auftreten wird",
        "fr": "Déterminer si un précipité se formera",
        "ru": "Определение, выпадет ли осадок",
        "ar": "تحديد ما إذا كان سيحدث ترسيب",
        "zh": "判断是否会产生沉淀",
        "ku": "Diyarkirina ka nişte dê çêbibe an na"
      },
      "steps": [
        {
          "tr": "Karışım sonrası toplam hacme göre iyon derişimleri hesaplanır",
          "en": "The ion concentrations after mixing are calculated using the total volume",
          "de": "Die Ionenkonzentrationen nach dem Mischen werden über das Gesamtvolumen berechnet",
          "fr": "On calcule les concentrations des ions après mélange à partir du volume total",
          "ru": "Вычисляют концентрации ионов после смешивания с учётом общего объёма",
          "ar": "تُحسب تراكيز الأيونات بعد الخلط اعتمادًا على الحجم الكلي",
          "zh": "按混合后的总体积计算各离子浓度",
          "ku": "Piştî tevlihevkirinê, li gorî qebareya giştî tîrbûnên îyonan tên hesabkirin"
        },
        {
          "tr": "İyon çarpımı bağıntısı yazılır: Qi = [A+]^a * [B-]^b",
          "en": "The ion product expression is written: Qi = [A+]^a * [B-]^b",
          "de": "Der Ausdruck für das Ionenprodukt wird aufgestellt: Qi = [A+]^a * [B-]^b",
          "fr": "On écrit l'expression du produit ionique : Qi = [A+]^a * [B-]^b",
          "ru": "Записывают выражение ионного произведения: Qi = [A+]^a * [B-]^b",
          "ar": "يُكتب تعبير الحاصل الأيوني: Qi = [A+]^a * [B-]^b",
          "zh": "写出离子积表达式：Qi = [A+]^a * [B-]^b",
          "ku": "Îfadeya hevdana îyonan tê nivîsandin: Qi = [A+]^a * [B-]^b"
        },
        {
          "tr": "Qi değeri hesaplanır",
          "en": "The value of Qi is calculated",
          "de": "Der Wert von Qi wird berechnet",
          "fr": "On calcule la valeur de Qi",
          "ru": "Вычисляют значение Qi",
          "ar": "تُحسب قيمة Qi",
          "zh": "计算Qi的值",
          "ku": "Nirxa Qi tê hesabkirin"
        },
        {
          "tr": "Qi, Kçç ile karşılaştırılır (Qi > Kçç ise çökelme olur)",
          "en": "Qi is compared with Ksp (if Qi > Ksp, a precipitate forms)",
          "de": "Qi wird mit Ksp verglichen (bei Qi > Ksp fällt ein Niederschlag aus)",
          "fr": "On compare Qi à Ksp (si Qi > Ksp, un précipité se forme)",
          "ru": "Сравнивают Qi с Ksp (если Qi > Ksp, выпадает осадок)",
          "ar": "يُقارَن Qi بـ Ksp (إذا كان Qi > Ksp يتكوّن راسب)",
          "zh": "将Qi与Ksp比较(Qi > Ksp则生成沉淀)",
          "ku": "Qi bi Ksp re tê berhevdan (ger Qi > Ksp be nişte çêdibe)"
        }
      ]
    },
    {
      "id": "u20-s02",
      "title": {
        "tr": "Saf Suda Kçç'den Çözünürlük Hesabı",
        "en": "Calculating Solubility in Pure Water from Ksp",
        "de": "Berechnung der Löslichkeit in reinem Wasser aus Ksp",
        "fr": "Calcul de la solubilité dans l'eau pure à partir de Ksp",
        "ru": "Расчёт растворимости в чистой воде по Ksp",
        "ar": "حساب الذوبانية في الماء النقي من Ksp",
        "zh": "由Ksp计算纯水中的溶解度",
        "ku": "Hesabkirina Helbûna di Ava Saf de ji Ksp"
      },
      "steps": [
        {
          "tr": "Az çözünen tuzun çözünme denklemi yazılır",
          "en": "The dissolution equation of the sparingly soluble salt is written",
          "de": "Die Lösungsgleichung des schwerlöslichen Salzes wird aufgestellt",
          "fr": "On écrit l'équation de dissolution du sel peu soluble",
          "ru": "Записывают уравнение растворения малорастворимой соли",
          "ar": "تُكتب معادلة ذوبان الملح قليل الذوبان",
          "zh": "写出难溶盐的溶解方程式",
          "ku": "Hevkêşana helîna xwêya kêm-helbar tê nivîsandin"
        },
        {
          "tr": "Katyon ve anyon derişimleri s cinsinden ifade edilir",
          "en": "The cation and anion concentrations are expressed in terms of s",
          "de": "Kationen- und Anionenkonzentration werden durch s ausgedrückt",
          "fr": "On exprime les concentrations du cation et de l'anion en fonction de s",
          "ru": "Концентрации катиона и аниона выражают через s",
          "ar": "يُعبَّر عن تركيزَي الكاتيون والأنيون بدلالة s",
          "zh": "用s表示阳离子和阴离子的浓度",
          "ku": "Tîrbûnên katyon û anyonê bi s tên diyarkirin"
        },
        {
          "tr": "Kçç bağıntısı s cinsinden yazılır (ör. s^2, 4s^3)",
          "en": "The Ksp expression is written in terms of s (e.g. s^2, 4s^3)",
          "de": "Der Ksp-Ausdruck wird durch s ausgedrückt (z. B. s^2, 4s^3)",
          "fr": "On écrit l'expression de Ksp en fonction de s (ex. s^2, 4s^3)",
          "ru": "Выражение Ksp записывают через s (например, s^2, 4s^3)",
          "ar": "يُكتب تعبير Ksp بدلالة s (مثل s^2، 4s^3)",
          "zh": "用s写出Ksp表达式(如s^2、4s^3)",
          "ku": "Îfadeya Ksp bi s tê nivîsandin (mînak s^2, 4s^3)"
        },
        {
          "tr": "Karekök veya küpkök alınarak molar çözünürlük s bulunur",
          "en": "The molar solubility s is found by taking the square root or cube root",
          "de": "Durch Ziehen der Quadrat- oder Kubikwurzel erhält man die molare Löslichkeit s",
          "fr": "On obtient la solubilité molaire s en prenant la racine carrée ou cubique",
          "ru": "Извлекая квадратный или кубический корень, находят молярную растворимость s",
          "ar": "تُوجد الذوبانية المولارية s بأخذ الجذر التربيعي أو التكعيبي",
          "zh": "开平方或开立方求出摩尔溶解度s",
          "ku": "Bi girtina koka çargoşe an koka kûb helbûna molar s tê dîtin"
        }
      ]
    },
    {
      "id": "u20-s03",
      "title": {
        "tr": "Ortak İyonlu Ortamda Çözünürlük Hesabı",
        "en": "Calculating Solubility in the Presence of a Common Ion",
        "de": "Berechnung der Löslichkeit in Gegenwart eines gemeinsamen Ions",
        "fr": "Calcul de la solubilité en présence d'un ion commun",
        "ru": "Расчёт растворимости в присутствии одноимённого иона",
        "ar": "حساب الذوبانية بوجود أيون مشترك",
        "zh": "同离子存在时溶解度的计算",
        "ku": "Hesabkirina Helbûnê bi Hebûna Îyona Hevpar"
      },
      "steps": [
        {
          "tr": "Az çözünen tuz ile çözeltideki tuzun ortak iyonu belirlenir; az çözünen tuzun çözünme denklemi ve Kçç bağıntısı yazılır",
          "en": "The ion common to the sparingly soluble salt and the dissolved salt is identified; the dissolution equation and the Ksp expression of the sparingly soluble salt are written",
          "de": "Das dem schwerlöslichen Salz und dem gelösten Salz gemeinsame Ion wird bestimmt; Lösungsgleichung und Ksp-Ausdruck des schwerlöslichen Salzes werden aufgestellt",
          "fr": "On identifie l'ion commun au sel peu soluble et au sel dissous ; on écrit l'équation de dissolution et l'expression de Ksp du sel peu soluble",
          "ru": "Определяют ион, одноимённый для малорастворимой соли и соли в растворе; записывают уравнение растворения и выражение Ksp малорастворимой соли",
          "ar": "يُحدَّد الأيون المشترك بين الملح قليل الذوبان والملح الذائب في المحلول؛ ثم تُكتب معادلة ذوبان الملح قليل الذوبان وتعبير Ksp له",
          "zh": "确定难溶盐与溶液中已溶解的盐共有的离子；写出难溶盐的溶解方程式和Ksp表达式",
          "ku": "Îyona hevpar a xwêya kêm-helbar û xwêya di çareseriyê de heliyayî tê diyarkirin; hevkêşana helînê û îfadeya Ksp ya xwêya kêm-helbar tên nivîsandin"
        },
        {
          "tr": "Tamamen çözünen tuzdan gelen bu ortak iyonun derişimi (c) bulunur",
          "en": "The concentration (c) of this common ion supplied by the fully dissolving salt is found",
          "de": "Die Konzentration (c) dieses gemeinsamen Ions aus dem vollständig gelösten Salz wird bestimmt",
          "fr": "On détermine la concentration (c) de cet ion commun apporté par le sel totalement dissous",
          "ru": "Находят концентрацию (c) этого иона, поступающего из полностью растворимой соли",
          "ar": "يُحدَّد تركيز (c) هذا الأيون المشترك القادم من الملح تام الذوبان",
          "zh": "求出完全溶解的盐提供的该同离子的浓度(c)",
          "ku": "Tîrbûna (c) vê îyona hevpar a ji xwêya ku bi temamî dihele tê dîtin"
        },
        {
          "tr": "Denge derişimleri s cinsinden yazılır; ortak iyon derişimine eklenen s ihmal edilir (c + s ≈ c)",
          "en": "Equilibrium concentrations are written in terms of s; the s added to the common-ion concentration is neglected (c + s ≈ c)",
          "de": "Die Gleichgewichtskonzentrationen werden durch s ausgedrückt; das zur Konzentration des gemeinsamen Ions hinzukommende s wird vernachlässigt (c + s ≈ c)",
          "fr": "On écrit les concentrations d'équilibre en fonction de s ; le s qui s'ajoute à la concentration de l'ion commun est négligé (c + s ≈ c)",
          "ru": "Равновесные концентрации выражают через s; добавкой s к концентрации одноимённого иона пренебрегают (c + s ≈ c)",
          "ar": "تُكتب تراكيز الاتزان بدلالة s، ويُهمَل s المضاف إلى تركيز الأيون المشترك (c + s ≈ c)",
          "zh": "用s表示平衡浓度，忽略同离子浓度上增加的s(c + s ≈ c)",
          "ku": "Tîrbûnên hevsengiyê bi s tên nivîsandin; s ya li ser tîrbûna îyona hevpar zêde dibe tê paşguhkirin (c + s ≈ c)"
        },
        {
          "tr": "Kçç bağıntısından s çözülür ve saf sudaki çözünürlükle karşılaştırılarak azalma gösterilir",
          "en": "s is solved from the Ksp expression and compared with the solubility in pure water to show the decrease",
          "de": "s wird aus dem Ksp-Ausdruck berechnet und zum Nachweis der Abnahme mit der Löslichkeit in reinem Wasser verglichen",
          "fr": "On tire s de l'expression de Ksp et on le compare à la solubilité dans l'eau pure pour montrer la diminution",
          "ru": "Из выражения Ksp находят s и сравнивают с растворимостью в чистой воде, показывая её уменьшение",
          "ar": "تُحسب s من تعبير Ksp وتُقارَن بالذوبانية في الماء النقي لإظهار النقصان",
          "zh": "由Ksp表达式解出s，并与纯水中的溶解度比较，说明其减小",
          "ku": "s ji îfadeya Ksp tê dîtin û bi helbûna di ava saf de tê berhevdan da ku kêmbûn were nîşandan"
        }
      ]
    },
    {
      "id": "u20-s04",
      "title": {
        "tr": "Seçimli Çöktürmede Çökme Sırasını Belirleme",
        "en": "Determining the Order of Precipitation in Selective Precipitation",
        "de": "Bestimmung der Fällungsreihenfolge bei der selektiven Fällung",
        "fr": "Déterminer l'ordre de précipitation lors d'une précipitation sélective",
        "ru": "Определение порядка осаждения при дробном осаждении",
        "ar": "تحديد ترتيب الترسيب في الترسيب الانتقائي",
        "zh": "确定选择性沉淀中的沉淀顺序",
        "ku": "Diyarkirina Rêza Niştinê di Niştina Hilbijartî de"
      },
      "steps": [
        {
          "tr": "Çöktürücü iyonla oluşabilecek her tuzun çözünme denklemi ve Kçç bağıntısı yazılır",
          "en": "The dissolution equation and Ksp expression of each salt that the precipitating ion can form are written",
          "de": "Für jedes Salz, das mit dem Fällungsion entstehen kann, werden Lösungsgleichung und Ksp-Ausdruck aufgestellt",
          "fr": "On écrit l'équation de dissolution et l'expression de Ksp de chaque sel que l'ion précipitant peut former",
          "ru": "Записывают уравнения растворения и выражения Ksp всех солей, которые может образовать ион-осадитель",
          "ar": "تُكتب معادلة الذوبان وتعبير Ksp لكل ملح يمكن أن يكوّنه الأيون المرسِّب",
          "zh": "写出沉淀离子可能形成的每种盐的溶解方程式和Ksp表达式",
          "ku": "Ji bo her xwêya ku îyona nişteker dikare çêbike, hevkêşana helînê û îfadeya Ksp tên nivîsandin"
        },
        {
          "tr": "Her tuz için Qi = Kçç koşulundan, çökmenin başlaması için gereken çöktürücü iyon derişimi hesaplanır",
          "en": "For each salt, the concentration of precipitating ion needed for precipitation to begin is calculated from the condition Qi = Ksp",
          "de": "Für jedes Salz wird aus der Bedingung Qi = Ksp die zum Fällungsbeginn nötige Konzentration des Fällungsions berechnet",
          "fr": "Pour chaque sel, on calcule à partir de la condition Qi = Ksp la concentration d'ion précipitant nécessaire au début de la précipitation",
          "ru": "Для каждой соли из условия Qi = Ksp вычисляют концентрацию иона-осадителя, необходимую для начала осаждения",
          "ar": "لكل ملح يُحسب من الشرط Qi = Ksp تركيز الأيون المرسِّب اللازم لبدء الترسيب",
          "zh": "对每种盐，由Qi = Ksp求出开始沉淀所需的沉淀离子浓度",
          "ku": "Ji bo her xwêyê, ji merca Qi = Ksp tîrbûna îyona nişteker a ku ji bo destpêka niştinê pêwîst e tê hesabkirin"
        },
        {
          "tr": "Hesaplanan çöktürücü iyon derişimleri küçükten büyüğe sıralanır",
          "en": "The calculated concentrations of precipitating ion are arranged from smallest to largest",
          "de": "Die berechneten Konzentrationen des Fällungsions werden der Größe nach aufsteigend geordnet",
          "fr": "On classe les concentrations d'ion précipitant calculées de la plus petite à la plus grande",
          "ru": "Рассчитанные концентрации иона-осадителя располагают по возрастанию",
          "ar": "تُرتَّب تراكيز الأيون المرسِّب المحسوبة من الأصغر إلى الأكبر",
          "zh": "将算得的沉淀离子浓度从小到大排列",
          "ku": "Tîrbûnên îyona nişteker ên hatine hesabkirin ji piçûk ber bi mezin ve tên rêzkirin"
        },
        {
          "tr": "En küçük çöktürücü iyon derişimi gerektiren tuz ilk önce çöker, diğerleri bu sırayla izler",
          "en": "The salt requiring the smallest concentration of precipitating ion precipitates first, and the others follow in that order",
          "de": "Das Salz, das die kleinste Konzentration des Fällungsions benötigt, fällt zuerst aus, die übrigen folgen in dieser Reihenfolge",
          "fr": "Le sel qui exige la plus petite concentration d'ion précipitant précipite en premier, les autres suivent dans cet ordre",
          "ru": "Первой осаждается соль, которой нужна наименьшая концентрация иона-осадителя, остальные — в этом порядке",
          "ar": "يترسب أولًا الملح الذي يحتاج إلى أصغر تركيز من الأيون المرسِّب، وتتبعه الأملاح الأخرى بهذا الترتيب",
          "zh": "所需沉淀离子浓度最小的盐最先沉淀，其余按此顺序依次沉淀",
          "ku": "Xwêya ku kêmtirîn tîrbûna îyona nişteker hewce dike pêşî dinişe, yên din bi vê rêzê dişopînin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u20-twin01",
      "stem": {
        "tr": "Belirli bir sıcaklıkta AgCl katısının çözünürlük çarpımı Kçç = 1,0x10^-10'dur. Buna göre AgCl'nin saf sudaki çözünürlüğü kaç mol/L'dir?",
        "en": "The solubility product of AgCl solid at a certain temperature is Ksp = 1.0x10^-10. Accordingly, what is the solubility of AgCl in pure water?",
        "de": "Das Löslichkeitsprodukt des festen AgCl bei einer bestimmten Temperatur beträgt Ksp = 1,0x10^-10. Wie hoch ist dementsprechend die Löslichkeit von AgCl in reinem Wasser?",
        "fr": "Le produit de solubilité du solide AgCl à une certaine température est Ksp = 1,0x10^-10. Par conséquent, quelle est la solubilité de AgCl dans l’eau pure ?",
        "ru": "Произведение растворимости AgCl при определённой температуре Ksp = 1,0x10^-10. Чему равна растворимость AgCl в чистой воде, моль/л?",
        "ar": "منتج ذوبان AgCl الصلب عند درجة حرارة معينة هو Ksp = 1.0x10^-10. وبناء على ذلك، ما هي قابلية ذوبان AgCl في الماء النقي؟",
        "zh": "一定温度下，AgCl 固体的溶度积 Ksp = 1.0x10^-10。该温度下 AgCl 在纯水中的溶解度是多少？",
        "ku": "Li germahiyeke diyar hevdana helbûnê ya hişka AgCl Ksp = 1,0x10^-10 e. Li gorî vê, helbûna AgCl di ava saf de çend mol/L ye?"
      },
      "options": [
        {
          "tr": "1,0x10^-5 M",
          "en": "1.0x10^-5 M",
          "de": "1,0x10^-5 M",
          "fr": "1,0x10^-5 M",
          "ru": "1,0x10^-5 M",
          "ar": "1.0x10^-5 م",
          "zh": "1.0x10^-5 M",
          "ku": "1,0x10^-5 M"
        },
        {
          "tr": "1,0x10^-10 M",
          "en": "1.0x10^-10 M",
          "de": "1,0x10^-10 M",
          "fr": "1,0x10^-10 M",
          "ru": "1,0x10^-10 M",
          "ar": "1.0x10^-10 م",
          "zh": "1.0x10^-10 M",
          "ku": "1,0x10^-10 M"
        },
        {
          "tr": "2,0x10^-5 M",
          "en": "2.0x10^-5 M",
          "de": "2,0x10^-5 M",
          "fr": "2,0x10^-5 M",
          "ru": "2,0x10^-5 M",
          "ar": "2.0x10^-5 م",
          "zh": "2.0x10^-5 M",
          "ku": "2,0x10^-5 M"
        },
        {
          "tr": "1,0x10^-20 M",
          "en": "1.0x10^-20 M",
          "de": "1,0x10^-20 M",
          "fr": "1,0x10^-20 M",
          "ru": "1,0x10^-20 M",
          "ar": "1.0x10^-20 م",
          "zh": "1.0x10^-20 M",
          "ku": "1,0x10^-20 M"
        },
        {
          "tr": "5,0x10^-6 M",
          "en": "5.0x10^-6 M",
          "de": "5,0x10^-6 M",
          "fr": "5,0x10^-6 M",
          "ru": "5,0x10^-6 M",
          "ar": "5.0x10^-6 م",
          "zh": "5.0x10^-6 M",
          "ku": "5,0x10^-6 M"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "AgCl ⇌ Ag+ + Cl- dengesinde çözünen her 1 mol AgCl, 1 mol Ag+ ve 1 mol Cl- verir; çözünürlük s ise [Ag+] = [Cl-] = s olur. Kçç = [Ag+][Cl-] = s^2 = 1,0x10^-10 → s = √(1,0x10^-10) = 1,0x10^-5 mol/L. Kçç'nin kendisini çözünürlük saymak 1,0x10^-10, karekök yerine kare almak 1,0x10^-20 sonucunu verir.",
        "en": "In AgCl ⇌ Ag+ + Cl-, each 1 mol of AgCl that dissolves gives 1 mol Ag+ and 1 mol Cl-; if the solubility is s, [Ag+] = [Cl-] = s. Ksp = [Ag+][Cl-] = s^2 = 1.0x10^-10 → s = √(1.0x10^-10) = 1.0x10^-5 mol/L. Taking Ksp itself as the solubility gives 1.0x10^-10; squaring instead of taking the square root gives 1.0x10^-20.",
        "de": "Im Gleichgewicht AgCl ⇌ Ag+ + Cl- liefert jedes gelöste 1 mol AgCl 1 mol Ag+ und 1 mol Cl-; ist die Löslichkeit s, gilt [Ag+] = [Cl-] = s. Ksp = [Ag+][Cl-] = s^2 = 1,0x10^-10 → s = √(1,0x10^-10) = 1,0x10^-5 mol/L. Setzt man Ksp selbst als Löslichkeit an, erhält man 1,0x10^-10; quadriert man, statt die Wurzel zu ziehen, erhält man 1,0x10^-20.",
        "fr": "Dans l'équilibre AgCl ⇌ Ag+ + Cl-, chaque 1 mol de AgCl dissous donne 1 mol de Ag+ et 1 mol de Cl- ; si la solubilité est s, [Ag+] = [Cl-] = s. Ksp = [Ag+][Cl-] = s^2 = 1,0x10^-10 → s = √(1,0x10^-10) = 1,0x10^-5 mol/L. Prendre Ksp lui-même pour la solubilité donne 1,0x10^-10 ; élever au carré au lieu de prendre la racine carrée donne 1,0x10^-20.",
        "ru": "В равновесии AgCl ⇌ Ag+ + Cl- каждый растворившийся 1 моль AgCl даёт 1 моль Ag+ и 1 моль Cl-; если растворимость равна s, то [Ag+] = [Cl-] = s. Ksp = [Ag+][Cl-] = s^2 = 1,0x10^-10 → s = √(1,0x10^-10) = 1,0x10^-5 моль/л. Если принять за растворимость само значение Ksp, получится 1,0x10^-10; если возвести в квадрат вместо извлечения корня — 1,0x10^-20.",
        "ar": "في الاتزان AgCl ⇌ Ag+ + Cl- يعطي كل 1 mol من AgCl الذائب 1 mol من Ag+ و 1 mol من Cl-؛ فإذا كانت الذوبانية s كان [Ag+] = [Cl-] = s. Ksp = [Ag+][Cl-] = s^2 = 1.0x10^-10 → s = √(1.0x10^-10) = 1.0x10^-5 mol/L. اعتبار Ksp نفسه هو الذوبانية يعطي 1.0x10^-10، والتربيع بدل أخذ الجذر التربيعي يعطي 1.0x10^-20.",
        "zh": "在平衡 AgCl ⇌ Ag+ + Cl- 中，每溶解1 mol AgCl生成1 mol Ag+ 和1 mol Cl-；设溶解度为s，则 [Ag+] = [Cl-] = s。Ksp = [Ag+][Cl-] = s^2 = 1.0x10^-10 → s = √(1.0x10^-10) = 1.0x10^-5 mol/L。把Ksp本身当作溶解度得1.0x10^-10；该开平方却平方得1.0x10^-20。",
        "ku": "Di hevsengiya AgCl ⇌ Ag+ + Cl- de her 1 mol AgCl ya ku dihele 1 mol Ag+ û 1 mol Cl- dide; heke helbûn s be, [Ag+] = [Cl-] = s e. Ksp = [Ag+][Cl-] = s^2 = 1,0x10^-10 → s = √(1,0x10^-10) = 1,0x10^-5 mol/L. Heke Ksp bi xwe wekî helbûn were girtin 1,0x10^-10, heke li şûna kokê çargoşe were girtin 1,0x10^-20 derdikeve."
      }
    },
    {
      "id": "u20-twin02",
      "stem": {
        "tr": "Belirli bir sıcaklıkta Kçç'si 4,0x10^-12 olan XY2 tuzunun saf sudaki molar çözünürlüğü kaçtır?",
        "en": "What is the molar solubility of salt XY2, whose Ksp is 4.0x10^-12, in pure water at a certain temperature?",
        "de": "Wie hoch ist die molare Löslichkeit des Salzes XY2, dessen Ksp 4,0x10^-12 beträgt, in reinem Wasser bei einer bestimmten Temperatur?",
        "fr": "Quelle est la solubilité molaire du sel XY2, dont le Ksp est de 4,0x10^-12, dans l'eau pure à une certaine température ?",
        "ru": "При определённой температуре Ksp соли XY2 равно 4,0x10^-12. Чему равна молярная растворимость этой соли в чистой воде?",
        "ar": "ما هي قابلية الذوبان المولي للملح XY2، الذي تبلغ قيمة Ksp فيه 4.0x10^-12، في الماء النقي عند درجة حرارة معينة؟",
        "zh": "一定温度下，盐 XY2 的 Ksp 为 4.0x10^-12，它在纯水中的摩尔溶解度是多少？",
        "ku": "Li germahiyeke diyar, helbûna molar a xwêya XY2 ya ku Ksp wê 4,0x10^-12 e, di ava saf de çend e?"
      },
      "options": [
        {
          "tr": "1,0x10^-4 M",
          "en": "1.0x10^-4 M",
          "de": "1,0x10^-4 M",
          "fr": "1,0x10^-4 M",
          "ru": "1,0x10^-4 M",
          "ar": "1.0x10^-4 م",
          "zh": "1.0x10^-4 M",
          "ku": "1,0x10^-4 M"
        },
        {
          "tr": "2,0x10^-6 M",
          "en": "2.0x10^-6 M",
          "de": "2,0x10^-6 M",
          "fr": "2,0x10^-6 M",
          "ru": "2,0x10^-6 M",
          "ar": "2.0x10^-6 م",
          "zh": "2.0x10^-6 M",
          "ku": "2,0x10^-6 M"
        },
        {
          "tr": "1,0x10^-6 M",
          "en": "1.0x10^-6 M",
          "de": "1,0x10^-6 M",
          "fr": "1,0x10^-6 M",
          "ru": "1,0x10^-6 M",
          "ar": "1.0x10^-6 م",
          "zh": "1.0x10^-6 M",
          "ku": "1,0x10^-6 M"
        },
        {
          "tr": "4,0x10^-4 M",
          "en": "4.0x10^-4 M",
          "de": "4,0x10^-4 M",
          "fr": "4,0x10^-4 M",
          "ru": "4,0x10^-4 M",
          "ar": "4.0x10^-4 م",
          "zh": "4.0x10^-4 M",
          "ku": "4,0x10^-4 M"
        },
        {
          "tr": "2,0x10^-4 M",
          "en": "2.0x10^-4 M",
          "de": "2,0x10^-4 M",
          "fr": "2,0x10^-4 M",
          "ru": "2,0x10^-4 M",
          "ar": "2.0x10^-4 م",
          "zh": "2.0x10^-4 M",
          "ku": "2,0x10^-4 M"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "XY2 ⇌ X2+ + 2Y- dengesinde çözünürlük s ise [X2+] = s ve [Y-] = 2s olur. Kçç = [X2+][Y-]^2 = s · (2s)^2 = 4s^3 = 4,0x10^-12 → s^3 = 1,0x10^-12 → s = 1,0x10^-4 mol/L. Tuz XY tipi sanılıp s = √Kçç alınırsa 2,0x10^-6 M bulunur; 2,0x10^-4 M ise çözünürlük değil, [Y-] = 2s değeridir.",
        "en": "In XY2 ⇌ X2+ + 2Y-, if the solubility is s then [X2+] = s and [Y-] = 2s. Ksp = [X2+][Y-]^2 = s · (2s)^2 = 4s^3 = 4.0x10^-12 → s^3 = 1.0x10^-12 → s = 1.0x10^-4 mol/L. Treating the salt as XY type and taking s = √Ksp gives 2.0x10^-6 M; 2.0x10^-4 M is not the solubility but the value of [Y-] = 2s.",
        "de": "Im Gleichgewicht XY2 ⇌ X2+ + 2Y- gilt bei der Löslichkeit s: [X2+] = s und [Y-] = 2s. Ksp = [X2+][Y-]^2 = s · (2s)^2 = 4s^3 = 4,0x10^-12 → s^3 = 1,0x10^-12 → s = 1,0x10^-4 mol/L. Hält man das Salz für den Typ XY und setzt s = √Ksp, erhält man 2,0x10^-6 M; 2,0x10^-4 M ist nicht die Löslichkeit, sondern der Wert von [Y-] = 2s.",
        "fr": "Dans l'équilibre XY2 ⇌ X2+ + 2Y-, si la solubilité est s, alors [X2+] = s et [Y-] = 2s. Ksp = [X2+][Y-]^2 = s · (2s)^2 = 4s^3 = 4,0x10^-12 → s^3 = 1,0x10^-12 → s = 1,0x10^-4 mol/L. Considérer le sel comme de type XY et prendre s = √Ksp donne 2,0x10^-6 M ; 2,0x10^-4 M n'est pas la solubilité mais la valeur de [Y-] = 2s.",
        "ru": "В равновесии XY2 ⇌ X2+ + 2Y- при растворимости s имеем [X2+] = s и [Y-] = 2s. Ksp = [X2+][Y-]^2 = s · (2s)^2 = 4s^3 = 4,0x10^-12 → s^3 = 1,0x10^-12 → s = 1,0x10^-4 моль/л. Если принять соль за соль типа XY и взять s = √Ksp, получится 2,0x10^-6 M; 2,0x10^-4 M — это не растворимость, а значение [Y-] = 2s.",
        "ar": "في الاتزان XY2 ⇌ X2+ + 2Y- إذا كانت الذوبانية s فإن [X2+] = s و [Y-] = 2s. Ksp = [X2+][Y-]^2 = s · (2s)^2 = 4s^3 = 4.0x10^-12 → s^3 = 1.0x10^-12 → s = 1.0x10^-4 mol/L. اعتبار الملح من النوع XY وأخذ s = √Ksp يعطي 2.0x10^-6 M؛ أما 2.0x10^-4 M فليست الذوبانية بل قيمة [Y-] = 2s.",
        "zh": "在平衡 XY2 ⇌ X2+ + 2Y- 中，设溶解度为s，则 [X2+] = s，[Y-] = 2s。Ksp = [X2+][Y-]^2 = s · (2s)^2 = 4s^3 = 4.0x10^-12 → s^3 = 1.0x10^-12 → s = 1.0x10^-4 mol/L。若把该盐当作XY型而取 s = √Ksp，得2.0x10^-6 M；2.0x10^-4 M不是溶解度，而是 [Y-] = 2s 的数值。",
        "ku": "Di hevsengiya XY2 ⇌ X2+ + 2Y- de heke helbûn s be, [X2+] = s û [Y-] = 2s e. Ksp = [X2+][Y-]^2 = s · (2s)^2 = 4s^3 = 4,0x10^-12 → s^3 = 1,0x10^-12 → s = 1,0x10^-4 mol/L. Heke xwê wekî tîpa XY were hesibandin û s = √Ksp were girtin 2,0x10^-6 M derdikeve; 2,0x10^-4 M ne helbûn e, nirxa [Y-] = 2s e."
      }
    },
    {
      "id": "u20-twin03",
      "stem": {
        "tr": "25 °C'de az çözünen M(OH)3 bileşiğinin saf sudaki molar çözünürlüğü 1,0x10^-5 mol/L'dir. Buna göre M(OH)3'ün bu sıcaklıktaki çözünürlük çarpımı (Kçç) kaçtır?",
        "en": "At 25 °C the molar solubility of the sparingly soluble compound M(OH)3 in pure water is 1.0x10^-5 mol/L. What is the solubility product (Ksp) of M(OH)3 at this temperature?",
        "de": "Bei 25 °C beträgt die molare Löslichkeit der schwerlöslichen Verbindung M(OH)3 in reinem Wasser 1,0x10^-5 mol/L. Wie groß ist das Löslichkeitsprodukt (Ksp) von M(OH)3 bei dieser Temperatur?",
        "fr": "À 25 °C, la solubilité molaire du composé peu soluble M(OH)3 dans l'eau pure est de 1,0x10^-5 mol/L. Quel est le produit de solubilité (Ksp) de M(OH)3 à cette température ?",
        "ru": "При 25 °C молярная растворимость малорастворимого соединения M(OH)3 в чистой воде равна 1,0x10^-5 моль/л. Чему равно произведение растворимости (Ksp) M(OH)3 при этой температуре?",
        "ar": "عند 25 °C تبلغ الذوبانية المولارية للمركب قليل الذوبان M(OH)3 في الماء النقي 1.0x10^-5 mol/L. ما قيمة حاصل الذوبان (Ksp) للمركب M(OH)3 عند هذه الدرجة؟",
        "zh": "25 °C时，难溶化合物M(OH)3在纯水中的摩尔溶解度为1.0x10^-5 mol/L。该温度下M(OH)3的溶度积(Ksp)是多少？",
        "ku": "Li 25 °C helbûna molar a pêkhateya kêm-helbar M(OH)3 di ava saf de 1,0x10^-5 mol/L e. Li gorî vê, hevdana helbûnê (Ksp) ya M(OH)3 di vê germahiyê de çend e?"
      },
      "options": [
        {
          "tr": "1,0x10^-20",
          "en": "1.0x10^-20",
          "de": "1,0x10^-20",
          "fr": "1,0x10^-20",
          "ru": "1,0x10^-20",
          "ar": "1.0x10^-20",
          "zh": "1.0x10^-20",
          "ku": "1,0x10^-20"
        },
        {
          "tr": "3,0x10^-20",
          "en": "3.0x10^-20",
          "de": "3,0x10^-20",
          "fr": "3,0x10^-20",
          "ru": "3,0x10^-20",
          "ar": "3.0x10^-20",
          "zh": "3.0x10^-20",
          "ku": "3,0x10^-20"
        },
        {
          "tr": "2,7x10^-19",
          "en": "2.7x10^-19",
          "de": "2,7x10^-19",
          "fr": "2,7x10^-19",
          "ru": "2,7x10^-19",
          "ar": "2.7x10^-19",
          "zh": "2.7x10^-19",
          "ku": "2,7x10^-19"
        },
        {
          "tr": "2,7x10^-14",
          "en": "2.7x10^-14",
          "de": "2,7x10^-14",
          "fr": "2,7x10^-14",
          "ru": "2,7x10^-14",
          "ar": "2.7x10^-14",
          "zh": "2.7x10^-14",
          "ku": "2,7x10^-14"
        },
        {
          "tr": "3,0x10^-10",
          "en": "3.0x10^-10",
          "de": "3,0x10^-10",
          "fr": "3,0x10^-10",
          "ru": "3,0x10^-10",
          "ar": "3.0x10^-10",
          "zh": "3.0x10^-10",
          "ku": "3,0x10^-10"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "M(OH)3(k) ⇌ M3+(suda) + 3OH-(suda). s = 1,0x10^-5 M ise [M3+] = s ve [OH-] = 3s = 3,0x10^-5 M olur. Kçç = [M3+][OH-]^3 = s·(3s)^3 = 27s^4 = 27·10^-20 = 2,7x10^-19. 3s^4 sonucu üssün yalnızca s'ye uygulanıp 3'e uygulanmamasından, 2,7x10^-14 sonucu [M3+] çarpanının unutulmasından, 3,0x10^-10 ise [OH-]'nin küpünün alınmamasından doğar.",
        "en": "M(OH)3(s) ⇌ M3+(aq) + 3OH-(aq). With s = 1.0x10^-5 M, [M3+] = s and [OH-] = 3s = 3.0x10^-5 M. Ksp = [M3+][OH-]^3 = s·(3s)^3 = 27s^4 = 27·10^-20 = 2.7x10^-19. The value 3s^4 comes from applying the exponent to s but not to 3, 2.7x10^-14 from forgetting the [M3+] factor, and 3.0x10^-10 from not cubing [OH-].",
        "de": "M(OH)3(s) ⇌ M3+(aq) + 3OH-(aq). Mit s = 1,0x10^-5 M ist [M3+] = s und [OH-] = 3s = 3,0x10^-5 M. Ksp = [M3+][OH-]^3 = s·(3s)^3 = 27s^4 = 27·10^-20 = 2,7x10^-19. Der Wert 3s^4 entsteht, wenn der Exponent nur auf s, nicht auf 3 angewendet wird, 2,7x10^-14, wenn der Faktor [M3+] vergessen wird, und 3,0x10^-10, wenn [OH-] nicht hoch drei genommen wird.",
        "fr": "M(OH)3(s) ⇌ M3+(aq) + 3OH-(aq). Avec s = 1,0x10^-5 M, [M3+] = s et [OH-] = 3s = 3,0x10^-5 M. Ksp = [M3+][OH-]^3 = s·(3s)^3 = 27s^4 = 27·10^-20 = 2,7x10^-19. La valeur 3s^4 vient de l'exposant appliqué à s mais pas à 3, 2,7x10^-14 de l'oubli du facteur [M3+], et 3,0x10^-10 de l'oubli du cube de [OH-].",
        "ru": "M(OH)3(тв) ⇌ M3+(р-р) + 3OH-(р-р). При s = 1,0x10^-5 M [M3+] = s, [OH-] = 3s = 3,0x10^-5 M. Ksp = [M3+][OH-]^3 = s·(3s)^3 = 27s^4 = 27·10^-20 = 2,7x10^-19. Значение 3s^4 получается, если степень применить только к s, а не к 3; 2,7x10^-14 — если забыть множитель [M3+]; 3,0x10^-10 — если не возвести [OH-] в куб.",
        "ar": "M(OH)3(s) ⇌ M3+(aq) + 3OH-(aq). إذا كانت s = 1.0x10^-5 M فإن [M3+] = s و [OH-] = 3s = 3.0x10^-5 M. Ksp = [M3+][OH-]^3 = s·(3s)^3 = 27s^4 = 27·10^-20 = 2.7x10^-19. تنتج القيمة 3s^4 من تطبيق الأس على s دون العدد 3، و 2.7x10^-14 من نسيان العامل [M3+]، و 3.0x10^-10 من عدم تكعيب [OH-].",
        "zh": "M(OH)3(s) ⇌ M3+(aq) + 3OH-(aq)。s = 1.0x10^-5 M时，[M3+] = s，[OH-] = 3s = 3.0x10^-5 M。Ksp = [M3+][OH-]^3 = s·(3s)^3 = 27s^4 = 27·10^-20 = 2.7x10^-19。3s^4是只对s而未对3取幂造成的，2.7x10^-14是漏掉[M3+]因子造成的，3.0x10^-10是没有对[OH-]取立方造成的。",
        "ku": "M(OH)3(h) ⇌ M3+(av) + 3OH-(av). Bi s = 1,0x10^-5 M, [M3+] = s û [OH-] = 3s = 3,0x10^-5 M. Ksp = [M3+][OH-]^3 = s·(3s)^3 = 27s^4 = 27·10^-20 = 2,7x10^-19. Nirxa 3s^4 ji sepandina hêzê tenê li ser s (ne li ser 3) tê, 2,7x10^-14 ji jibîrkirina lêkera [M3+], 3,0x10^-10 jî ji negirtina kûba [OH-]."
      }
    },
    {
      "id": "u20-twin04",
      "stem": {
        "tr": "25 °C'de M(OH)2 katısının çözünürlük çarpımı Kçç = 4,0x10^-12'dir. Buna göre bu sıcaklıkta M(OH)2'nin saf sudaki doymuş çözeltisinin pH değeri kaçtır? (log 2 = 0,3; Ksu = 1,0x10^-14)",
        "en": "At 25 °C the solubility product of solid M(OH)2 is Ksp = 4.0x10^-12. What is the pH of a saturated solution of M(OH)2 in pure water at this temperature? (log 2 = 0.3; Kw = 1.0x10^-14)",
        "de": "Bei 25 °C beträgt das Löslichkeitsprodukt von festem M(OH)2 Ksp = 4,0x10^-12. Welchen pH-Wert hat die gesättigte Lösung von M(OH)2 in reinem Wasser bei dieser Temperatur? (log 2 = 0,3; Kw = 1,0x10^-14)",
        "fr": "À 25 °C, le produit de solubilité du solide M(OH)2 est Ksp = 4,0x10^-12. Quel est le pH de la solution saturée de M(OH)2 dans l'eau pure à cette température ? (log 2 = 0,3 ; Ke = 1,0x10^-14)",
        "ru": "При 25 °C произведение растворимости твёрдого M(OH)2 Ksp = 4,0x10^-12. Чему равен pH насыщенного раствора M(OH)2 в чистой воде при этой температуре? (log 2 = 0,3; Kw = 1,0x10^-14)",
        "ar": "عند 25 °C يبلغ حاصل الذوبان للصلب M(OH)2 القيمة Ksp = 4.0x10^-12. ما قيمة pH للمحلول المشبع من M(OH)2 في الماء النقي عند هذه الدرجة؟ (log 2 = 0.3؛ Kw = 1.0x10^-14)",
        "zh": "25 °C时，固体M(OH)2的溶度积Ksp = 4.0x10^-12。该温度下M(OH)2在纯水中的饱和溶液的pH是多少？(log 2 = 0.3；Kw = 1.0x10^-14)",
        "ku": "Li 25 °C hevdana helbûnê ya hişka M(OH)2 Ksp = 4,0x10^-12 e. Li gorî vê, pH ya çareseriya têr a M(OH)2 di ava saf de di vê germahiyê de çend e? (log 2 = 0,3; Ksu = 1,0x10^-14)"
      },
      "options": [
        {
          "tr": "3,7",
          "en": "3.7",
          "de": "3,7",
          "fr": "3,7",
          "ru": "3,7",
          "ar": "3.7",
          "zh": "3.7",
          "ku": "3,7"
        },
        {
          "tr": "9,7",
          "en": "9.7",
          "de": "9,7",
          "fr": "9,7",
          "ru": "9,7",
          "ar": "9.7",
          "zh": "9.7",
          "ku": "9,7"
        },
        {
          "tr": "10,0",
          "en": "10.0",
          "de": "10,0",
          "fr": "10,0",
          "ru": "10,0",
          "ar": "10.0",
          "zh": "10.0",
          "ku": "10,0"
        },
        {
          "tr": "10,3",
          "en": "10.3",
          "de": "10,3",
          "fr": "10,3",
          "ru": "10,3",
          "ar": "10.3",
          "zh": "10.3",
          "ku": "10,3"
        },
        {
          "tr": "10,6",
          "en": "10.6",
          "de": "10,6",
          "fr": "10,6",
          "ru": "10,6",
          "ar": "10.6",
          "zh": "10.6",
          "ku": "10,6"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Kçç = s·(2s)^2 = 4s^3 = 4,0x10^-12 → s^3 = 1,0x10^-12 → s = 1,0x10^-4 M. [OH-] = 2s = 2,0x10^-4 M; pOH = 4 - log 2 = 3,7; pH = 14 - 3,7 = 10,3. 3,7 pOH değerinin pH sanılmasıyla, 10,0 ise [OH-] = s alınıp 2 katsayısının unutulmasıyla bulunur; 9,7 log 2'nin işaret hatasıyla eklenmesinden gelir.",
        "en": "Ksp = s·(2s)^2 = 4s^3 = 4.0x10^-12 → s^3 = 1.0x10^-12 → s = 1.0x10^-4 M. [OH-] = 2s = 2.0x10^-4 M; pOH = 4 - log 2 = 3.7; pH = 14 - 3.7 = 10.3. 3.7 is obtained by mistaking pOH for pH, 10.0 by taking [OH-] = s and forgetting the factor 2; 9.7 comes from adding log 2 with the wrong sign.",
        "de": "Ksp = s·(2s)^2 = 4s^3 = 4,0x10^-12 → s^3 = 1,0x10^-12 → s = 1,0x10^-4 M. [OH-] = 2s = 2,0x10^-4 M; pOH = 4 - log 2 = 3,7; pH = 14 - 3,7 = 10,3. 3,7 erhält man, wenn man pOH für pH hält, 10,0, wenn man [OH-] = s setzt und den Faktor 2 vergisst; 9,7 entsteht durch einen Vorzeichenfehler bei log 2.",
        "fr": "Ksp = s·(2s)^2 = 4s^3 = 4,0x10^-12 → s^3 = 1,0x10^-12 → s = 1,0x10^-4 M. [OH-] = 2s = 2,0x10^-4 M ; pOH = 4 - log 2 = 3,7 ; pH = 14 - 3,7 = 10,3. On obtient 3,7 en confondant pOH et pH, 10,0 en prenant [OH-] = s et en oubliant le facteur 2 ; 9,7 vient d'une erreur de signe sur log 2.",
        "ru": "Ksp = s·(2s)^2 = 4s^3 = 4,0x10^-12 → s^3 = 1,0x10^-12 → s = 1,0x10^-4 M. [OH-] = 2s = 2,0x10^-4 M; pOH = 4 - log 2 = 3,7; pH = 14 - 3,7 = 10,3. Значение 3,7 получается, если принять pOH за pH; 10,0 — если взять [OH-] = s и забыть множитель 2; 9,7 — при ошибке в знаке перед log 2.",
        "ar": "Ksp = s·(2s)^2 = 4s^3 = 4.0x10^-12 → s^3 = 1.0x10^-12 → s = 1.0x10^-4 M. [OH-] = 2s = 2.0x10^-4 M؛ pOH = 4 - log 2 = 3.7؛ pH = 14 - 3.7 = 10.3. تنتج القيمة 3.7 من اعتبار pOH هو pH، و 10.0 من أخذ [OH-] = s ونسيان المعامل 2؛ أما 9.7 فتنتج من خطأ في إشارة log 2.",
        "zh": "Ksp = s·(2s)^2 = 4s^3 = 4.0x10^-12 → s^3 = 1.0x10^-12 → s = 1.0x10^-4 M。[OH-] = 2s = 2.0x10^-4 M；pOH = 4 - log 2 = 3.7；pH = 14 - 3.7 = 10.3。把pOH当成pH得3.7；取[OH-] = s、漏掉系数2得10.0；log 2符号弄错得9.7。",
        "ku": "Ksp = s·(2s)^2 = 4s^3 = 4,0x10^-12 → s^3 = 1,0x10^-12 → s = 1,0x10^-4 M. [OH-] = 2s = 2,0x10^-4 M; pOH = 4 - log 2 = 3,7; pH = 14 - 3,7 = 10,3. 3,7 ji hesibandina pOH wekî pH tê, 10,0 ji girtina [OH-] = s û jibîrkirina rêjeya 2; 9,7 jî ji xeletiya nîşana log 2."
      }
    },
    {
      "id": "u20-twin05",
      "stem": {
        "tr": "25 °C'de CaF2'nin çözünürlük çarpımı Kçç = 4,0x10^-11'dir. Buna göre CaF2'nin aynı sıcaklıkta 0,10 M NaF çözeltisindeki molar çözünürlüğü kaç mol/L'dir? (NaF'nin tamamen iyonlaştığını kabul ediniz.)",
        "en": "At 25 °C the solubility product of CaF2 is Ksp = 4.0x10^-11. What is the molar solubility of CaF2 in 0.10 M NaF solution at the same temperature, in mol/L? (Assume NaF is fully dissociated.)",
        "de": "Bei 25 °C beträgt das Löslichkeitsprodukt von CaF2 Ksp = 4,0x10^-11. Wie groß ist die molare Löslichkeit von CaF2 bei derselben Temperatur in 0,10 M NaF-Lösung in mol/L? (NaF sei vollständig dissoziiert.)",
        "fr": "À 25 °C, le produit de solubilité de CaF2 est Ksp = 4,0x10^-11. Quelle est, en mol/L, la solubilité molaire de CaF2 dans une solution de NaF 0,10 M à la même température ? (On admet que NaF est totalement dissocié.)",
        "ru": "При 25 °C произведение растворимости CaF2 Ksp = 4,0x10^-11. Чему равна молярная растворимость CaF2 (моль/л) при той же температуре в 0,10 M растворе NaF? (Считать, что NaF диссоциирует полностью.)",
        "ar": "عند 25 °C يبلغ حاصل الذوبان لـ CaF2 القيمة Ksp = 4.0x10^-11. ما الذوبانية المولارية لـ CaF2 بوحدة mol/L في محلول NaF تركيزه 0.10 M عند الدرجة نفسها؟ (اعتبر أن NaF متفكك كليًّا.)",
        "zh": "25 °C时CaF2的溶度积Ksp = 4.0x10^-11。同温下CaF2在0.10 M NaF溶液中的摩尔溶解度是多少mol/L？(设NaF完全电离。)",
        "ku": "Li 25 °C hevdana helbûnê ya CaF2 Ksp = 4,0x10^-11 e. Li gorî vê, helbûna molar a CaF2 di heman germahiyê de di çareseriya NaF ya 0,10 M de çend mol/L ye? (Bihesibînin ku NaF bi temamî îyonîze dibe.)"
      },
      "options": [
        {
          "tr": "4,0x10^-12",
          "en": "4.0x10^-12",
          "de": "4,0x10^-12",
          "fr": "4,0x10^-12",
          "ru": "4,0x10^-12",
          "ar": "4.0x10^-12",
          "zh": "4.0x10^-12",
          "ku": "4,0x10^-12"
        },
        {
          "tr": "4,0x10^-10",
          "en": "4.0x10^-10",
          "de": "4,0x10^-10",
          "fr": "4,0x10^-10",
          "ru": "4,0x10^-10",
          "ar": "4.0x10^-10",
          "zh": "4.0x10^-10",
          "ku": "4,0x10^-10"
        },
        {
          "tr": "1,0x10^-9",
          "en": "1.0x10^-9",
          "de": "1,0x10^-9",
          "fr": "1,0x10^-9",
          "ru": "1,0x10^-9",
          "ar": "1.0x10^-9",
          "zh": "1.0x10^-9",
          "ku": "1,0x10^-9"
        },
        {
          "tr": "4,0x10^-9",
          "en": "4.0x10^-9",
          "de": "4,0x10^-9",
          "fr": "4,0x10^-9",
          "ru": "4,0x10^-9",
          "ar": "4.0x10^-9",
          "zh": "4.0x10^-9",
          "ku": "4,0x10^-9"
        },
        {
          "tr": "2,2x10^-4",
          "en": "2.2x10^-4",
          "de": "2,2x10^-4",
          "fr": "2,2x10^-4",
          "ru": "2,2x10^-4",
          "ar": "2.2x10^-4",
          "zh": "2.2x10^-4",
          "ku": "2,2x10^-4"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "CaF2(k) ⇌ Ca2+ + 2F-. NaF'den [F-] = 0,10 M gelir; CaF2'den gelen 2s bunun yanında ihmal edilir ([F-] ≈ 0,10 M). Kçç = [Ca2+][F-]^2 → s·(0,10)^2 = 4,0x10^-11 → s = 4,0x10^-9 mol/L. 4,0x10^-10 [F-]'nin karesini almayı unutmaktan, 1,0x10^-9 [F-]'yi yanlışlıkla 2·0,10 = 0,20 M almaktan, 4,0x10^-12 Kçç'yi derişime bölmek yerine çarpmaktan gelir; yaklaşık 2,2x10^-4 ise ortak iyonu dikkate almadan saf sudaki çözünürlüktür.",
        "en": "CaF2(s) ⇌ Ca2+ + 2F-. NaF supplies [F-] = 0.10 M; the 2s from CaF2 is negligible beside it ([F-] ≈ 0.10 M). Ksp = [Ca2+][F-]^2 → s·(0.10)^2 = 4.0x10^-11 → s = 4.0x10^-9 mol/L. 4.0x10^-10 results from forgetting to square [F-], 1.0x10^-9 from wrongly taking [F-] = 2·0.10 = 0.20 M, 4.0x10^-12 from multiplying Ksp by the concentration instead of dividing; about 2.2x10^-4 is the solubility in pure water, ignoring the common ion.",
        "de": "CaF2(s) ⇌ Ca2+ + 2F-. NaF liefert [F-] = 0,10 M; die 2s aus CaF2 sind daneben vernachlässigbar ([F-] ≈ 0,10 M). Ksp = [Ca2+][F-]^2 → s·(0,10)^2 = 4,0x10^-11 → s = 4,0x10^-9 mol/L. 4,0x10^-10 entsteht, wenn man vergisst, [F-] zu quadrieren, 1,0x10^-9, wenn man fälschlich [F-] = 2·0,10 = 0,20 M setzt, 4,0x10^-12, wenn man Ksp mit der Konzentration multipliziert statt dividiert; etwa 2,2x10^-4 ist die Löslichkeit in reinem Wasser ohne gemeinsames Ion.",
        "fr": "CaF2(s) ⇌ Ca2+ + 2F-. NaF apporte [F-] = 0,10 M ; les 2s venant de CaF2 sont négligeables ([F-] ≈ 0,10 M). Ksp = [Ca2+][F-]^2 → s·(0,10)^2 = 4,0x10^-11 → s = 4,0x10^-9 mol/L. 4,0x10^-10 vient de l'oubli du carré de [F-], 1,0x10^-9 du choix erroné [F-] = 2·0,10 = 0,20 M, 4,0x10^-12 d'une multiplication de Ksp par la concentration au lieu d'une division ; environ 2,2x10^-4 est la solubilité dans l'eau pure, sans ion commun.",
        "ru": "CaF2(тв) ⇌ Ca2+ + 2F-. NaF даёт [F-] = 0,10 M; вкладом 2s от CaF2 по сравнению с этим можно пренебречь ([F-] ≈ 0,10 M). Ksp = [Ca2+][F-]^2 → s·(0,10)^2 = 4,0x10^-11 → s = 4,0x10^-9 моль/л. 4,0x10^-10 получается, если забыть возвести [F-] в квадрат; 1,0x10^-9 — если ошибочно взять [F-] = 2·0,10 = 0,20 M; 4,0x10^-12 — если умножить Ksp на концентрацию вместо деления; около 2,2x10^-4 — это растворимость в чистой воде без учёта одноимённого иона.",
        "ar": "CaF2(s) ⇌ Ca2+ + 2F-. يعطي NaF تركيز [F-] = 0.10 M، ويُهمَل 2s القادم من CaF2 بجانبه ([F-] ≈ 0.10 M). Ksp = [Ca2+][F-]^2 → s·(0.10)^2 = 4.0x10^-11 → s = 4.0x10^-9 mol/L. تنتج 4.0x10^-10 من نسيان تربيع [F-]، و 1.0x10^-9 من أخذ [F-] = 2·0.10 = 0.20 M خطأً، و 4.0x10^-12 من ضرب Ksp في التركيز بدل القسمة؛ أما نحو 2.2x10^-4 فهي الذوبانية في الماء النقي دون مراعاة الأيون المشترك.",
        "zh": "CaF2(s) ⇌ Ca2+ + 2F-。NaF提供[F-] = 0.10 M，CaF2提供的2s与之相比可忽略([F-] ≈ 0.10 M)。Ksp = [Ca2+][F-]^2 → s·(0.10)^2 = 4.0x10^-11 → s = 4.0x10^-9 mol/L。忘记对[F-]取平方得4.0x10^-10；误取[F-] = 2·0.10 = 0.20 M得1.0x10^-9；把Ksp乘以浓度而不是除以浓度得4.0x10^-12；约2.2x10^-4是不考虑同离子时在纯水中的溶解度。",
        "ku": "CaF2(h) ⇌ Ca2+ + 2F-. NaF [F-] = 0,10 M dide; 2s ya ji CaF2 li hember vê tê paşguhkirin ([F-] ≈ 0,10 M). Ksp = [Ca2+][F-]^2 → s·(0,10)^2 = 4,0x10^-11 → s = 4,0x10^-9 mol/L. 4,0x10^-10 ji jibîrkirina çargoşekirina [F-], 1,0x10^-9 ji girtina şaş a [F-] = 2·0,10 = 0,20 M, 4,0x10^-12 ji lêkdana Ksp bi tîrbûnê li şûna dabeşkirinê tê; nêzîkî 2,2x10^-4 jî helbûna di ava saf de ye bêyî îyona hevpar."
      }
    },
    {
      "id": "u20-twin06",
      "stem": {
        "tr": "25 °C'de AgCl için Kçç = 1,0x10^-10'dur. Aynı sıcaklıkta aşağıdaki çözelti çiftleri eşit hacimlerde karıştırılıyor:\nI. 2,0x10^-4 M AgNO3 ve 2,0x10^-4 M NaCl\nII. 4,0x10^-5 M AgNO3 ve 2,0x10^-5 M NaCl\nIII. 4,0x10^-3 M AgNO3 ve 1,0x10^-7 M NaCl\nBuna göre hangi karışımlarda AgCl çökelmesi gözlenir?",
        "en": "At 25 °C, Ksp for AgCl is 1.0x10^-10. At the same temperature the following pairs of solutions are mixed in equal volumes:\nI. 2.0x10^-4 M AgNO3 and 2.0x10^-4 M NaCl\nII. 4.0x10^-5 M AgNO3 and 2.0x10^-5 M NaCl\nIII. 4.0x10^-3 M AgNO3 and 1.0x10^-7 M NaCl\nIn which mixtures is precipitation of AgCl observed?",
        "de": "Bei 25 °C ist Ksp für AgCl 1,0x10^-10. Bei derselben Temperatur werden folgende Lösungspaare zu gleichen Volumina gemischt:\nI. 2,0x10^-4 M AgNO3 und 2,0x10^-4 M NaCl\nII. 4,0x10^-5 M AgNO3 und 2,0x10^-5 M NaCl\nIII. 4,0x10^-3 M AgNO3 und 1,0x10^-7 M NaCl\nIn welchen Mischungen fällt AgCl aus?",
        "fr": "À 25 °C, Ksp de AgCl vaut 1,0x10^-10. À la même température, on mélange à volumes égaux les paires de solutions suivantes :\nI. AgNO3 2,0x10^-4 M et NaCl 2,0x10^-4 M\nII. AgNO3 4,0x10^-5 M et NaCl 2,0x10^-5 M\nIII. AgNO3 4,0x10^-3 M et NaCl 1,0x10^-7 M\nDans quels mélanges observe-t-on la précipitation de AgCl ?",
        "ru": "При 25 °C Ksp AgCl = 1,0x10^-10. При той же температуре смешивают равные объёмы следующих пар растворов:\nI. 2,0x10^-4 M AgNO3 и 2,0x10^-4 M NaCl\nII. 4,0x10^-5 M AgNO3 и 2,0x10^-5 M NaCl\nIII. 4,0x10^-3 M AgNO3 и 1,0x10^-7 M NaCl\nВ каких смесях выпадет осадок AgCl?",
        "ar": "عند 25 °C تكون قيمة Ksp لـ AgCl هي 1.0x10^-10. وعند الدرجة نفسها تُخلط أزواج المحاليل الآتية بحجوم متساوية:\nI. محلول AgNO3 تركيزه 2.0x10^-4 M ومحلول NaCl تركيزه 2.0x10^-4 M\nII. محلول AgNO3 تركيزه 4.0x10^-5 M ومحلول NaCl تركيزه 2.0x10^-5 M\nIII. محلول AgNO3 تركيزه 4.0x10^-3 M ومحلول NaCl تركيزه 1.0x10^-7 M\nفي أي الخلائط يُلاحَظ ترسب AgCl؟",
        "zh": "25 °C时AgCl的Ksp = 1.0x10^-10。同温下将下列各对溶液等体积混合：\nI. 2.0x10^-4 M AgNO3与2.0x10^-4 M NaCl\nII. 4.0x10^-5 M AgNO3与2.0x10^-5 M NaCl\nIII. 4.0x10^-3 M AgNO3与1.0x10^-7 M NaCl\n哪些混合液中会观察到AgCl沉淀？",
        "ku": "Li 25 °C ji bo AgCl Ksp = 1,0x10^-10 e. Di heman germahiyê de cotên çareseriyên jêrîn bi qebareyên wekhev tên tevlihevkirin:\nI. 2,0x10^-4 M AgNO3 û 2,0x10^-4 M NaCl\nII. 4,0x10^-5 M AgNO3 û 2,0x10^-5 M NaCl\nIII. 4,0x10^-3 M AgNO3 û 1,0x10^-7 M NaCl\nLi gorî vê, di kîjan tevliheviyan de niştina AgCl tê dîtin?"
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
      "correctIndex": 2,
      "explanation": {
        "tr": "Eşit hacimde karıştırınca her derişim yarıya iner. I: [Ag+] = [Cl-] = 1,0x10^-4 M, Qi = 1,0x10^-8 > Kçç → çökelme olur. II: [Ag+] = 2,0x10^-5 M, [Cl-] = 1,0x10^-5 M, Qi = 2,0x10^-10 > Kçç → çökelme olur. III: [Ag+] = 2,0x10^-3 M, [Cl-] = 5,0x10^-8 M, Qi = 1,0x10^-10 = Kçç → çözelti tam doygundur, çökelme olmaz. Seyrelme hesaba katılmazsa III için Qi = 4,0x10^-10 bulunur ve yanlışlıkla çöker sanılır; doğru cevap I ve II'dir.",
        "en": "Mixing equal volumes halves each concentration. I: [Ag+] = [Cl-] = 1.0x10^-4 M, Qi = 1.0x10^-8 > Ksp → precipitate forms. II: [Ag+] = 2.0x10^-5 M, [Cl-] = 1.0x10^-5 M, Qi = 2.0x10^-10 > Ksp → precipitate forms. III: [Ag+] = 2.0x10^-3 M, [Cl-] = 5.0x10^-8 M, Qi = 1.0x10^-10 = Ksp → the solution is just saturated, no precipitate. If dilution is ignored, III gives Qi = 4.0x10^-10 and is wrongly thought to precipitate; the correct answer is I and II.",
        "de": "Beim Mischen gleicher Volumina halbiert sich jede Konzentration. I: [Ag+] = [Cl-] = 1,0x10^-4 M, Qi = 1,0x10^-8 > Ksp → Fällung. II: [Ag+] = 2,0x10^-5 M, [Cl-] = 1,0x10^-5 M, Qi = 2,0x10^-10 > Ksp → Fällung. III: [Ag+] = 2,0x10^-3 M, [Cl-] = 5,0x10^-8 M, Qi = 1,0x10^-10 = Ksp → die Lösung ist genau gesättigt, keine Fällung. Ohne Berücksichtigung der Verdünnung ergibt III Qi = 4,0x10^-10 und man glaubt fälschlich an eine Fällung; richtig sind I und II.",
        "fr": "Le mélange à volumes égaux divise chaque concentration par deux. I : [Ag+] = [Cl-] = 1,0x10^-4 M, Qi = 1,0x10^-8 > Ksp → précipitation. II : [Ag+] = 2,0x10^-5 M, [Cl-] = 1,0x10^-5 M, Qi = 2,0x10^-10 > Ksp → précipitation. III : [Ag+] = 2,0x10^-3 M, [Cl-] = 5,0x10^-8 M, Qi = 1,0x10^-10 = Ksp → la solution est juste saturée, pas de précipité. Si l'on oublie la dilution, III donne Qi = 4,0x10^-10 et l'on croit à tort qu'il précipite ; la bonne réponse est I et II.",
        "ru": "При смешивании равных объёмов каждая концентрация уменьшается вдвое. I: [Ag+] = [Cl-] = 1,0x10^-4 M, Qi = 1,0x10^-8 > Ksp → осадок выпадает. II: [Ag+] = 2,0x10^-5 M, [Cl-] = 1,0x10^-5 M, Qi = 2,0x10^-10 > Ksp → осадок выпадает. III: [Ag+] = 2,0x10^-3 M, [Cl-] = 5,0x10^-8 M, Qi = 1,0x10^-10 = Ksp → раствор в точности насыщен, осадок не выпадает. Если не учесть разбавление, для III получится Qi = 4,0x10^-10 и ошибочный вывод о выпадении осадка; правильный ответ — I и II.",
        "ar": "عند خلط حجوم متساوية ينخفض كل تركيز إلى النصف. I: [Ag+] = [Cl-] = 1.0x10^-4 M و Qi = 1.0x10^-8 > Ksp ← يحدث ترسيب. II: [Ag+] = 2.0x10^-5 M و [Cl-] = 1.0x10^-5 M و Qi = 2.0x10^-10 > Ksp ← يحدث ترسيب. III: [Ag+] = 2.0x10^-3 M و [Cl-] = 5.0x10^-8 M و Qi = 1.0x10^-10 = Ksp ← المحلول مشبع تمامًا ولا يحدث ترسيب. وإذا أُهمل التخفيف نحصل في III على Qi = 4.0x10^-10 فيُظَن خطأً أنه يترسب؛ والإجابة الصحيحة I و II.",
        "zh": "等体积混合后各浓度减半。I：[Ag+] = [Cl-] = 1.0x10^-4 M，Qi = 1.0x10^-8 > Ksp → 有沉淀。II：[Ag+] = 2.0x10^-5 M，[Cl-] = 1.0x10^-5 M，Qi = 2.0x10^-10 > Ksp → 有沉淀。III：[Ag+] = 2.0x10^-3 M，[Cl-] = 5.0x10^-8 M，Qi = 1.0x10^-10 = Ksp → 溶液恰好饱和，无沉淀。若忽略稀释，III得Qi = 4.0x10^-10，会误判为有沉淀；正确答案是I和II。",
        "ku": "Bi tevlihevkirina qebareyên wekhev her tîrbûn dibe nîv. I: [Ag+] = [Cl-] = 1,0x10^-4 M, Qi = 1,0x10^-8 > Ksp → nişte çêdibe. II: [Ag+] = 2,0x10^-5 M, [Cl-] = 1,0x10^-5 M, Qi = 2,0x10^-10 > Ksp → nişte çêdibe. III: [Ag+] = 2,0x10^-3 M, [Cl-] = 5,0x10^-8 M, Qi = 1,0x10^-10 = Ksp → çareserî tam têr e, nişte çênabe. Ger sistbûn neyê hesabkirin, ji bo III Qi = 4,0x10^-10 tê dîtin û bi şaşî tê fikirîn ku dinişe; bersiva rast I û II ye."
      }
    },
    {
      "id": "u20-twin07",
      "stem": {
        "tr": "25 °C'de Cl- ve CrO4 2- iyonlarının her birini 0,010 M derişimde içeren bir çözeltiye, hacim değişimi ihmal edilecek şekilde damla damla AgNO3 çözeltisi ekleniyor.\n(AgCl için Kçç = 1,0x10^-10; Ag2CrO4 için Kçç = 1,0x10^-12)\nBuna göre ilk çöken tuz ve bu tuzun çökmeye başladığı andaki [Ag+] aşağıdakilerden hangisinde doğru verilmiştir?",
        "en": "At 25 °C, AgNO3 solution is added dropwise (volume change negligible) to a solution containing Cl- and CrO4 2- ions, each at 0.010 M.\n(Ksp of AgCl = 1.0x10^-10; Ksp of Ag2CrO4 = 1.0x10^-12)\nWhich option correctly gives the salt that precipitates first and the [Ag+] at which it begins to precipitate?",
        "de": "Bei 25 °C wird zu einer Lösung, die Cl-- und CrO4 2--Ionen jeweils in 0,010 M Konzentration enthält, tropfenweise AgNO3-Lösung gegeben (Volumenänderung vernachlässigbar).\n(Ksp von AgCl = 1,0x10^-10; Ksp von Ag2CrO4 = 1,0x10^-12)\nIn welcher Antwort sind das zuerst ausfallende Salz und die [Ag+] bei Beginn seiner Fällung richtig angegeben?",
        "fr": "À 25 °C, on ajoute goutte à goutte une solution de AgNO3 (variation de volume négligeable) à une solution contenant les ions Cl- et CrO4 2-, chacun à 0,010 M.\n(Ksp de AgCl = 1,0x10^-10 ; Ksp de Ag2CrO4 = 1,0x10^-12)\nQuelle proposition donne correctement le sel qui précipite en premier et la [Ag+] au début de sa précipitation ?",
        "ru": "При 25 °C к раствору, содержащему ионы Cl- и CrO4 2- (каждый по 0,010 M), по каплям добавляют раствор AgNO3 (изменением объёма пренебречь).\n(Ksp AgCl = 1,0x10^-10; Ksp Ag2CrO4 = 1,0x10^-12)\nВ каком варианте правильно указаны соль, осаждающаяся первой, и [Ag+] в момент начала её осаждения?",
        "ar": "عند 25 °C يُضاف محلول AgNO3 قطرة قطرة (مع إهمال تغيّر الحجم) إلى محلول يحتوي على أيونات Cl- و CrO4 2- بتركيز 0.010 M لكلٍّ منهما.\n(Ksp لـ AgCl = 1.0x10^-10؛ Ksp لـ Ag2CrO4 = 1.0x10^-12)\nفي أي خيار يُذكر بشكل صحيح الملح الذي يترسب أولًا وقيمة [Ag+] عند بدء ترسبه؟",
        "zh": "25 °C时，向含Cl- 和CrO4 2- 各0.010 M的溶液中逐滴加入AgNO3溶液（忽略体积变化）。\n(AgCl的Ksp = 1.0x10^-10；Ag2CrO4的Ksp = 1.0x10^-12)\n下列哪一项正确给出了最先沉淀的盐及其开始沉淀时的[Ag+]？",
        "ku": "Li 25 °C, çareseriya AgNO3 dilop bi dilop (guhertina qebareyê tê paşguhkirin) li çareseriyeke ku îyonên Cl- û CrO4 2- her yek bi tîrbûna 0,010 M dihewîne tê zêdekirin.\n(Ksp ya AgCl = 1,0x10^-10; Ksp ya Ag2CrO4 = 1,0x10^-12)\nLi gorî vê, xwêya ku pêşî dinişe û [Ag+] di kêliya destpêka niştina wê de di kîjan bijardeyê de rast hatiye dayîn?"
      },
      "options": [
        {
          "tr": "AgCl; 1,0x10^-8 M",
          "en": "AgCl; 1.0x10^-8 M",
          "de": "AgCl; 1,0x10^-8 M",
          "fr": "AgCl ; 1,0x10^-8 M",
          "ru": "AgCl; 1,0x10^-8 M",
          "ar": "AgCl؛ 1.0x10^-8 M",
          "zh": "AgCl；1.0x10^-8 M",
          "ku": "AgCl; 1,0x10^-8 M"
        },
        {
          "tr": "AgCl; 1,0x10^-5 M",
          "en": "AgCl; 1.0x10^-5 M",
          "de": "AgCl; 1,0x10^-5 M",
          "fr": "AgCl ; 1,0x10^-5 M",
          "ru": "AgCl; 1,0x10^-5 M",
          "ar": "AgCl؛ 1.0x10^-5 M",
          "zh": "AgCl；1.0x10^-5 M",
          "ku": "AgCl; 1,0x10^-5 M"
        },
        {
          "tr": "Ag2CrO4; 1,0x10^-10 M",
          "en": "Ag2CrO4; 1.0x10^-10 M",
          "de": "Ag2CrO4; 1,0x10^-10 M",
          "fr": "Ag2CrO4 ; 1,0x10^-10 M",
          "ru": "Ag2CrO4; 1,0x10^-10 M",
          "ar": "Ag2CrO4؛ 1.0x10^-10 M",
          "zh": "Ag2CrO4；1.0x10^-10 M",
          "ku": "Ag2CrO4; 1,0x10^-10 M"
        },
        {
          "tr": "Ag2CrO4; 1,0x10^-6 M",
          "en": "Ag2CrO4; 1.0x10^-6 M",
          "de": "Ag2CrO4; 1,0x10^-6 M",
          "fr": "Ag2CrO4 ; 1,0x10^-6 M",
          "ru": "Ag2CrO4; 1,0x10^-6 M",
          "ar": "Ag2CrO4؛ 1.0x10^-6 M",
          "zh": "Ag2CrO4；1.0x10^-6 M",
          "ku": "Ag2CrO4; 1,0x10^-6 M"
        },
        {
          "tr": "Ag2CrO4; 1,0x10^-5 M",
          "en": "Ag2CrO4; 1.0x10^-5 M",
          "de": "Ag2CrO4; 1,0x10^-5 M",
          "fr": "Ag2CrO4 ; 1,0x10^-5 M",
          "ru": "Ag2CrO4; 1,0x10^-5 M",
          "ar": "Ag2CrO4؛ 1.0x10^-5 M",
          "zh": "Ag2CrO4；1.0x10^-5 M",
          "ku": "Ag2CrO4; 1,0x10^-5 M"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Her tuz için çökmenin başladığı [Ag+], Qi = Kçç koşulundan bulunur. AgCl: [Ag+] = Kçç/[Cl-] = 1,0x10^-10/0,010 = 1,0x10^-8 M. Ag2CrO4: [Ag+]^2 = Kçç/[CrO4 2-] = 1,0x10^-12/0,010 = 1,0x10^-10 → [Ag+] = 1,0x10^-5 M. Daha küçük [Ag+] gerektiren AgCl önce çöker. Tuzlar farklı tipte olduğu için 'Kçç'si küçük olan Ag2CrO4 önce çöker' düşüncesi yanlıştır; 1,0x10^-10 değeri karekök alınmadan bulunan sonuçtur.",
        "en": "For each salt the [Ag+] at which precipitation begins follows from Qi = Ksp. AgCl: [Ag+] = Ksp/[Cl-] = 1.0x10^-10/0.010 = 1.0x10^-8 M. Ag2CrO4: [Ag+]^2 = Ksp/[CrO4 2-] = 1.0x10^-12/0.010 = 1.0x10^-10 → [Ag+] = 1.0x10^-5 M. AgCl, which needs the smaller [Ag+], precipitates first. Because the salts are of different types, the idea that Ag2CrO4 precipitates first since its Ksp is smaller is wrong; 1.0x10^-10 is the result obtained without taking the square root.",
        "de": "Für jedes Salz folgt die [Ag+] bei Fällungsbeginn aus Qi = Ksp. AgCl: [Ag+] = Ksp/[Cl-] = 1,0x10^-10/0,010 = 1,0x10^-8 M. Ag2CrO4: [Ag+]^2 = Ksp/[CrO4 2-] = 1,0x10^-12/0,010 = 1,0x10^-10 → [Ag+] = 1,0x10^-5 M. AgCl, das die kleinere [Ag+] benötigt, fällt zuerst aus. Da die Salze verschiedenen Typs sind, ist die Annahme, Ag2CrO4 falle wegen seines kleineren Ksp zuerst aus, falsch; 1,0x10^-10 ist das Ergebnis ohne Wurzelziehen.",
        "fr": "Pour chaque sel, la [Ag+] de début de précipitation découle de Qi = Ksp. AgCl : [Ag+] = Ksp/[Cl-] = 1,0x10^-10/0,010 = 1,0x10^-8 M. Ag2CrO4 : [Ag+]^2 = Ksp/[CrO4 2-] = 1,0x10^-12/0,010 = 1,0x10^-10 → [Ag+] = 1,0x10^-5 M. AgCl, qui exige la plus petite [Ag+], précipite en premier. Les sels étant de types différents, l'idée que Ag2CrO4 précipite d'abord parce que son Ksp est plus petit est fausse ; 1,0x10^-10 est le résultat obtenu sans extraire la racine carrée.",
        "ru": "Для каждой соли [Ag+], при которой начинается осаждение, находят из условия Qi = Ksp. AgCl: [Ag+] = Ksp/[Cl-] = 1,0x10^-10/0,010 = 1,0x10^-8 M. Ag2CrO4: [Ag+]^2 = Ksp/[CrO4 2-] = 1,0x10^-12/0,010 = 1,0x10^-10 → [Ag+] = 1,0x10^-5 M. Первым осаждается AgCl, которому нужна меньшая [Ag+]. Соли относятся к разным типам, поэтому мнение «Ag2CrO4 осаждается первым, так как его Ksp меньше» ошибочно; 1,0x10^-10 — результат без извлечения квадратного корня.",
        "ar": "تُحسب [Ag+] اللازمة لبدء الترسيب لكل ملح من الشرط Qi = Ksp. AgCl: [Ag+] = Ksp/[Cl-] = 1.0x10^-10/0.010 = 1.0x10^-8 M. Ag2CrO4: [Ag+]^2 = Ksp/[CrO4 2-] = 1.0x10^-12/0.010 = 1.0x10^-10 ← [Ag+] = 1.0x10^-5 M. يترسب AgCl أولًا لأنه يحتاج إلى [Ag+] أصغر. وبما أن الملحين من نوعين مختلفين فإن القول بأن Ag2CrO4 يترسب أولًا لأن Ksp له أصغر خاطئ؛ والقيمة 1.0x10^-10 ناتجة عن عدم أخذ الجذر التربيعي.",
        "zh": "由Qi = Ksp求各盐开始沉淀时的[Ag+]。AgCl：[Ag+] = Ksp/[Cl-] = 1.0x10^-10/0.010 = 1.0x10^-8 M。Ag2CrO4：[Ag+]^2 = Ksp/[CrO4 2-] = 1.0x10^-12/0.010 = 1.0x10^-10 → [Ag+] = 1.0x10^-5 M。所需[Ag+]较小的AgCl先沉淀。两种盐类型不同，“Ag2CrO4的Ksp较小所以先沉淀”的想法是错误的；1.0x10^-10是没有开平方得到的结果。",
        "ku": "Ji bo her xwêyê [Ag+] ya destpêka niştinê ji merca Qi = Ksp tê dîtin. AgCl: [Ag+] = Ksp/[Cl-] = 1,0x10^-10/0,010 = 1,0x10^-8 M. Ag2CrO4: [Ag+]^2 = Ksp/[CrO4 2-] = 1,0x10^-12/0,010 = 1,0x10^-10 → [Ag+] = 1,0x10^-5 M. AgCl ku [Ag+] ya piçûktir hewce dike pêşî dinişe. Ji ber ku xwê ji cureyên cuda ne, fikra 'Ag2CrO4 pêşî dinişe ji ber ku Ksp wê piçûktir e' şaş e; 1,0x10^-10 encama bêyî girtina koka çargoşe ye."
      }
    },
    {
      "id": "u20-twin08",
      "stem": {
        "tr": "25 °C'de dibinde katısı bulunan doymuş PbCl2 çözeltisinde\nPbCl2(k) ⇌ Pb2+(suda) + 2Cl-(suda)\ndengesi vardır. Aynı sıcaklıkta yapılan değişikliklerle ilgili;\nI. Dipteki katı PbCl2 kütlesi artırılırsa PbCl2'nin çözünürlüğü artar.\nII. Çözeltiye bir miktar katı Pb(NO3)2 eklenirse PbCl2'nin çözünürlüğü azalır.\nIII. Pb(NO3)2 eklendikten sonra yeni denge kurulduğunda [Cl-] ilk dengedekinden büyük olur.\nyargılarından hangileri doğrudur?",
        "en": "At 25 °C a saturated PbCl2 solution with solid at the bottom contains the equilibrium\nPbCl2(s) ⇌ Pb2+(aq) + 2Cl-(aq)\nRegarding changes made at the same temperature:\nI. If the mass of solid PbCl2 at the bottom is increased, the solubility of PbCl2 increases.\nII. If some solid Pb(NO3)2 is added to the solution, the solubility of PbCl2 decreases.\nIII. After adding Pb(NO3)2, when the new equilibrium is established, [Cl-] is greater than at the first equilibrium.\nWhich of the statements are correct?",
        "de": "Bei 25 °C liegt in einer gesättigten PbCl2-Lösung mit Bodenkörper das Gleichgewicht\nPbCl2(s) ⇌ Pb2+(aq) + 2Cl-(aq)\nvor. Zu Änderungen bei gleicher Temperatur:\nI. Wird die Masse des festen PbCl2 am Boden erhöht, steigt die Löslichkeit von PbCl2.\nII. Wird der Lösung etwas festes Pb(NO3)2 zugesetzt, sinkt die Löslichkeit von PbCl2.\nIII. Nach Zugabe von Pb(NO3)2 ist [Cl-] im neuen Gleichgewicht größer als im ersten Gleichgewicht.\nWelche Aussagen sind richtig?",
        "fr": "À 25 °C, une solution saturée de PbCl2 avec du solide au fond contient l'équilibre\nPbCl2(s) ⇌ Pb2+(aq) + 2Cl-(aq)\nÀ propos de modifications faites à la même température :\nI. Si l'on augmente la masse de PbCl2 solide au fond, la solubilité de PbCl2 augmente.\nII. Si l'on ajoute un peu de Pb(NO3)2 solide, la solubilité de PbCl2 diminue.\nIII. Après l'ajout de Pb(NO3)2, au nouvel équilibre, [Cl-] est plus grande qu'au premier équilibre.\nQuelles affirmations sont correctes ?",
        "ru": "При 25 °C в насыщенном растворе PbCl2 с осадком на дне установилось равновесие\nPbCl2(тв) ⇌ Pb2+(р-р) + 2Cl-(р-р)\nДаны утверждения об изменениях при той же температуре:\nI. Если увеличить массу твёрдого PbCl2 на дне, растворимость PbCl2 увеличится.\nII. Если добавить в раствор немного твёрдого Pb(NO3)2, растворимость PbCl2 уменьшится.\nIII. После добавления Pb(NO3)2 в новом равновесии [Cl-] будет больше, чем в первоначальном.\nКакие из утверждений верны?",
        "ar": "عند 25 °C يوجد في محلول PbCl2 المشبع وفي قاعه صلب الاتزان\nPbCl2(s) ⇌ Pb2+(aq) + 2Cl-(aq)\nبخصوص التغييرات التي تُجرى عند الدرجة نفسها:\nI. إذا زيدت كتلة PbCl2 الصلب في القاع تزداد ذوبانية PbCl2.\nII. إذا أُضيف إلى المحلول قليل من Pb(NO3)2 الصلب تقل ذوبانية PbCl2.\nIII. بعد إضافة Pb(NO3)2 وعند تحقق الاتزان الجديد يكون [Cl-] أكبر منه في الاتزان الأول.\nأيّ العبارات صحيحة؟",
        "zh": "25 °C时，底部有固体的PbCl2饱和溶液中存在平衡\nPbCl2(s) ⇌ Pb2+(aq) + 2Cl-(aq)\n关于同温下进行的改变：\nI. 增加底部固体PbCl2的质量，PbCl2的溶解度增大。\nII. 向溶液中加入少量固体Pb(NO3)2，PbCl2的溶解度减小。\nIII. 加入Pb(NO3)2后建立新平衡时，[Cl-]比原平衡时大。\n哪些说法正确？",
        "ku": "Li 25 °C di çareseriya têr a PbCl2 de ku hişk li binî ye, hevsengiya\nPbCl2(h) ⇌ Pb2+(av) + 2Cl-(av)\nheye. Derbarê guhertinên di heman germahiyê de:\nI. Ger girseya hişka PbCl2 ya li binî zêde bibe, helbûna PbCl2 zêde dibe.\nII. Ger hinek Pb(NO3)2 ya hişk li çareseriyê were zêdekirin, helbûna PbCl2 kêm dibe.\nIII. Piştî zêdekirina Pb(NO3)2, dema hevsengiya nû çêdibe, [Cl-] ji ya hevsengiya yekem mezintir e.\nKîjan ji van gotinan rast in?"
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
        "tr": "I yanlıştır: saf katının derişimi sabittir ve denge bağıntısına girmez; dipteki katı miktarı ne çözünürlüğü ne de iyon derişimlerini değiştirir. II doğrudur: Pb(NO3)2'den gelen Pb2+ ortak iyondur, denge sola kayar ve PbCl2'nin çözünürlüğü azalır. III yanlıştır: denge sola kayarken Cl- iyonları Pb2+ ile birleşip katı oluşturur, bu nedenle yeni dengede [Cl-] azalır; Kçç sabit kaldığından [Pb2+] artınca [Cl-] küçülmek zorundadır.",
        "en": "I is false: the concentration of a pure solid is constant and does not enter the equilibrium expression; the amount of solid at the bottom changes neither the solubility nor the ion concentrations. II is true: Pb2+ from Pb(NO3)2 is a common ion, the equilibrium shifts to the left and the solubility of PbCl2 decreases. III is false: as the equilibrium shifts left, Cl- ions combine with Pb2+ to form solid, so [Cl-] decreases at the new equilibrium; since Ksp stays constant, [Cl-] must fall when [Pb2+] rises.",
        "de": "I ist falsch: Die Konzentration eines reinen Feststoffs ist konstant und geht nicht in den Gleichgewichtsausdruck ein; die Menge des Bodenkörpers ändert weder die Löslichkeit noch die Ionenkonzentrationen. II ist richtig: Pb2+ aus Pb(NO3)2 ist ein gemeinsames Ion, das Gleichgewicht verschiebt sich nach links und die Löslichkeit von PbCl2 sinkt. III ist falsch: Bei der Verschiebung nach links verbinden sich Cl--Ionen mit Pb2+ zu Feststoff, daher ist [Cl-] im neuen Gleichgewicht kleiner; da Ksp konstant bleibt, muss [Cl-] sinken, wenn [Pb2+] steigt.",
        "fr": "I est fausse : la concentration d'un solide pur est constante et n'intervient pas dans l'expression d'équilibre ; la quantité de solide au fond ne modifie ni la solubilité ni les concentrations ioniques. II est vraie : Pb2+ apporté par Pb(NO3)2 est un ion commun, l'équilibre se déplace vers la gauche et la solubilité de PbCl2 diminue. III est fausse : lors du déplacement vers la gauche, les ions Cl- se combinent à Pb2+ pour former du solide, donc [Cl-] diminue au nouvel équilibre ; Ksp restant constant, [Cl-] doit baisser quand [Pb2+] augmente.",
        "ru": "I неверно: концентрация чистого твёрдого вещества постоянна и в выражение константы не входит; количество осадка на дне не меняет ни растворимость, ни концентрации ионов. II верно: Pb2+ из Pb(NO3)2 — одноимённый ион, равновесие смещается влево, растворимость PbCl2 уменьшается. III неверно: при смещении равновесия влево ионы Cl- связываются с Pb2+ в осадок, поэтому в новом равновесии [Cl-] меньше; так как Ksp постоянно, при росте [Pb2+] концентрация Cl- должна уменьшиться.",
        "ar": "العبارة I خاطئة: تركيز الصلب النقي ثابت ولا يدخل في تعبير الاتزان، وكمية الصلب في القاع لا تغيّر الذوبانية ولا تراكيز الأيونات. العبارة II صحيحة: أيون Pb2+ القادم من Pb(NO3)2 أيون مشترك، فينزاح الاتزان نحو اليسار وتقل ذوبانية PbCl2. العبارة III خاطئة: عند انزياح الاتزان نحو اليسار تتحد أيونات Cl- مع Pb2+ مكوّنة صلبًا، فيقل [Cl-] في الاتزان الجديد؛ وبما أن Ksp ثابت فلا بد أن يقل [Cl-] عندما يزداد [Pb2+].",
        "zh": "I错误：纯固体的浓度为常数，不出现在平衡表达式中；底部固体的多少既不改变溶解度，也不改变离子浓度。II正确：Pb(NO3)2提供的Pb2+ 是同离子，平衡左移，PbCl2溶解度减小。III错误：平衡左移时Cl- 与Pb2+ 结合生成固体，新平衡时[Cl-]减小；Ksp不变，[Pb2+]增大时[Cl-]必然减小。",
        "ku": "I şaş e: tîrbûna hişkeke saf sabît e û nakeve îfadeya hevsengiyê; mîqdara hişka li binî ne helbûnê ne jî tîrbûnên îyonan diguherîne. II rast e: Pb2+ ya ji Pb(NO3)2 îyona hevpar e, hevsengî ber bi çepê ve diçe û helbûna PbCl2 kêm dibe. III şaş e: dema hevsengî ber bi çepê ve diçe, îyonên Cl- bi Pb2+ re dibin hişk, ji ber vê di hevsengiya nû de [Cl-] kêm dibe; ji ber ku Ksp sabît dimîne, dema [Pb2+] zêde dibe divê [Cl-] kêm bibe."
      }
    },
    {
      "id": "u20-twin09",
      "stem": {
        "tr": "XY tipi az çözünen bir tuzun çözünürlük çarpımı 20 °C'de 1,0x10^-10, 40 °C'de ise 4,0x10^-10 olarak ölçülmüştür. Buna göre;\nI. XY tuzunun suda çözünmesi endotermiktir.\nII. 40 °C'deki molar çözünürlük, 20 °C'dekinin 4 katıdır.\nIII. 40 °C'de hazırlanan doymuş XY çözeltisi 20 °C'ye soğutulursa XY katısı çöker.\nyargılarından hangileri doğrudur?",
        "en": "The solubility product of a sparingly soluble XY-type salt is measured as 1.0x10^-10 at 20 °C and 4.0x10^-10 at 40 °C. Accordingly:\nI. The dissolution of XY in water is endothermic.\nII. The molar solubility at 40 °C is 4 times that at 20 °C.\nIII. If a saturated XY solution prepared at 40 °C is cooled to 20 °C, solid XY precipitates.\nWhich of the statements are correct?",
        "de": "Das Löslichkeitsprodukt eines schwerlöslichen Salzes vom Typ XY wird bei 20 °C zu 1,0x10^-10 und bei 40 °C zu 4,0x10^-10 bestimmt. Demnach:\nI. Das Lösen von XY in Wasser ist endotherm.\nII. Die molare Löslichkeit bei 40 °C ist 4-mal so groß wie bei 20 °C.\nIII. Wird eine bei 40 °C gesättigte XY-Lösung auf 20 °C abgekühlt, fällt festes XY aus.\nWelche Aussagen sind richtig?",
        "fr": "Le produit de solubilité d'un sel peu soluble de type XY vaut 1,0x10^-10 à 20 °C et 4,0x10^-10 à 40 °C. Par conséquent :\nI. La dissolution de XY dans l'eau est endothermique.\nII. La solubilité molaire à 40 °C est 4 fois celle à 20 °C.\nIII. Si une solution saturée de XY préparée à 40 °C est refroidie à 20 °C, du XY solide précipite.\nQuelles affirmations sont correctes ?",
        "ru": "Произведение растворимости малорастворимой соли типа XY равно 1,0x10^-10 при 20 °C и 4,0x10^-10 при 40 °C. Даны утверждения:\nI. Растворение XY в воде — эндотермический процесс.\nII. Молярная растворимость при 40 °C в 4 раза больше, чем при 20 °C.\nIII. Если насыщенный при 40 °C раствор XY охладить до 20 °C, выпадет осадок XY.\nКакие из утверждений верны?",
        "ar": "قيست قيمة حاصل الذوبان لملح قليل الذوبان من النوع XY فكانت 1.0x10^-10 عند 20 °C و 4.0x10^-10 عند 40 °C. وبناءً على ذلك:\nI. ذوبان XY في الماء ماص للحرارة.\nII. الذوبانية المولارية عند 40 °C تساوي 4 أمثالها عند 20 °C.\nIII. إذا بُرِّد محلول XY مشبع مُحضَّر عند 40 °C إلى 20 °C يترسب XY صلب.\nأيّ العبارات صحيحة؟",
        "zh": "某XY型难溶盐的溶度积在20 °C时为1.0x10^-10，在40 °C时为4.0x10^-10。据此：\nI. XY在水中的溶解是吸热的。\nII. 40 °C时的摩尔溶解度是20 °C时的4倍。\nIII. 将40 °C时配制的XY饱和溶液冷却到20 °C，会析出XY固体。\n哪些说法正确？",
        "ku": "Hevdana helbûnê ya xwêyeke kêm-helbar a cureyê XY li 20 °C 1,0x10^-10 û li 40 °C 4,0x10^-10 hatiye pîvan. Li gorî vê:\nI. Helîna XY di avê de endotermîk e.\nII. Helbûna molar li 40 °C 4 qatê ya li 20 °C ye.\nIII. Ger çareseriya têr a XY ya li 40 °C hatî amadekirin heta 20 °C were sarkirin, hişka XY dinişe.\nKîjan ji van gotinan rast in?"
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
        "tr": "I doğrudur: sıcaklık artınca Kçç büyüdüğüne göre denge ısıtmayla iyonlar yönüne kaymaktadır, yani çözünme endotermiktir. II yanlıştır: XY tipinde s = √Kçç'dir; s(20 °C) = 1,0x10^-5 M, s(40 °C) = 2,0x10^-5 M olduğundan çözünürlük 4 değil 2 katına çıkar (Kçç'deki 4 katlık artış s'ye doğrudan aktarılmaz). III doğrudur: 40 °C'deki doymuş çözeltide Qi = 4,0x10^-10'dur; 20 °C'de bu değer Kçç'den (1,0x10^-10) büyük olduğundan fazla tuz çöker.",
        "en": "I is true: since Ksp increases with temperature, heating shifts the equilibrium toward the ions, i.e. dissolution is endothermic. II is false: for an XY salt s = √Ksp; s(20 °C) = 1.0x10^-5 M and s(40 °C) = 2.0x10^-5 M, so the solubility doubles rather than quadrupling (the fourfold increase in Ksp is not carried over directly to s). III is true: in the solution saturated at 40 °C, Qi = 4.0x10^-10; at 20 °C this exceeds Ksp (1.0x10^-10), so the excess salt precipitates.",
        "de": "I ist richtig: Da Ksp mit der Temperatur steigt, verschiebt Erwärmen das Gleichgewicht zu den Ionen, das Lösen ist also endotherm. II ist falsch: Für ein XY-Salz gilt s = √Ksp; s(20 °C) = 1,0x10^-5 M, s(40 °C) = 2,0x10^-5 M, die Löslichkeit verdoppelt sich also nur (die Vervierfachung von Ksp überträgt sich nicht direkt auf s). III ist richtig: In der bei 40 °C gesättigten Lösung ist Qi = 4,0x10^-10; bei 20 °C ist das größer als Ksp (1,0x10^-10), daher fällt das überschüssige Salz aus.",
        "fr": "I est vraie : Ksp augmentant avec la température, le chauffage déplace l'équilibre vers les ions, la dissolution est donc endothermique. II est fausse : pour un sel XY, s = √Ksp ; s(20 °C) = 1,0x10^-5 M et s(40 °C) = 2,0x10^-5 M, la solubilité double au lieu de quadrupler (le quadruplement de Ksp ne se reporte pas directement sur s). III est vraie : dans la solution saturée à 40 °C, Qi = 4,0x10^-10 ; à 20 °C cette valeur dépasse Ksp (1,0x10^-10), donc l'excès de sel précipite.",
        "ru": "I верно: раз Ksp растёт с температурой, нагревание смещает равновесие в сторону ионов, т. е. растворение эндотермично. II неверно: для соли XY s = √Ksp; s(20 °C) = 1,0x10^-5 M, s(40 °C) = 2,0x10^-5 M, т. е. растворимость увеличивается в 2, а не в 4 раза (четырёхкратный рост Ksp не переносится на s напрямую). III верно: в растворе, насыщенном при 40 °C, Qi = 4,0x10^-10; при 20 °C это больше Ksp (1,0x10^-10), поэтому избыток соли выпадает в осадок.",
        "ar": "العبارة I صحيحة: بما أن Ksp يزداد بارتفاع درجة الحرارة فإن التسخين يزيح الاتزان نحو الأيونات، أي أن الذوبان ماص للحرارة. العبارة II خاطئة: في ملح XY تكون s = √Ksp؛ s(20 °C) = 1.0x10^-5 M و s(40 °C) = 2.0x10^-5 M، فالذوبانية تتضاعف مرتين لا أربع مرات (الزيادة الرباعية في Ksp لا تنتقل مباشرة إلى s). العبارة III صحيحة: في المحلول المشبع عند 40 °C يكون Qi = 4.0x10^-10، وهذه القيمة عند 20 °C أكبر من Ksp (1.0x10^-10) فيترسب الملح الزائد.",
        "zh": "I正确：Ksp随温度升高而增大，说明升温使平衡向离子方向移动，即溶解吸热。II错误：XY型盐s = √Ksp；s(20 °C) = 1.0x10^-5 M，s(40 °C) = 2.0x10^-5 M，溶解度只增大到2倍而不是4倍(Ksp增大4倍不会直接转移到s上)。III正确：40 °C饱和溶液中Qi = 4.0x10^-10，在20 °C时大于Ksp(1.0x10^-10)，多余的盐析出。",
        "ku": "I rast e: ji ber ku Ksp bi zêdebûna germahiyê mezin dibe, germkirin hevsengiyê ber bi îyonan ve dibe, ango helîn endotermîk e. II şaş e: ji bo xwêya XY s = √Ksp e; s(20 °C) = 1,0x10^-5 M û s(40 °C) = 2,0x10^-5 M, ji ber vê helbûn ne 4 qat lê 2 qat dibe (zêdebûna 4 qatî ya Ksp rasterast derbasî s nabe). III rast e: di çareseriya têr a li 40 °C de Qi = 4,0x10^-10 e; li 20 °C ev ji Ksp (1,0x10^-10) mezintir e, ji ber vê xwêya zêde dinişe."
      }
    },
    {
      "id": "u20-twin10",
      "stem": {
        "tr": "25 °C'de çözünürlük çarpımları verilen az çözünen üç tuz şunlardır:\nI. MA: Kçç = 1,0x10^-10\nII. MA2: Kçç = 4,0x10^-12\nIII. NB: Kçç = 4,0x10^-10\nBu tuzların saf sudaki molar çözünürlüklerinin karşılaştırılması aşağıdakilerden hangisinde doğru verilmiştir?",
        "en": "Three sparingly soluble salts with the following solubility products at 25 °C are given:\nI. MA: Ksp = 1.0x10^-10\nII. MA2: Ksp = 4.0x10^-12\nIII. NB: Ksp = 4.0x10^-10\nWhich option correctly compares the molar solubilities of these salts in pure water?",
        "de": "Gegeben sind drei schwerlösliche Salze mit folgenden Löslichkeitsprodukten bei 25 °C:\nI. MA: Ksp = 1,0x10^-10\nII. MA2: Ksp = 4,0x10^-12\nIII. NB: Ksp = 4,0x10^-10\nIn welcher Antwort ist der Vergleich der molaren Löslichkeiten dieser Salze in reinem Wasser richtig angegeben?",
        "fr": "On donne trois sels peu solubles dont les produits de solubilité à 25 °C sont :\nI. MA : Ksp = 1,0x10^-10\nII. MA2 : Ksp = 4,0x10^-12\nIII. NB : Ksp = 4,0x10^-10\nQuelle proposition compare correctement les solubilités molaires de ces sels dans l'eau pure ?",
        "ru": "Даны три малорастворимые соли и их произведения растворимости при 25 °C:\nI. MA: Ksp = 1,0x10^-10\nII. MA2: Ksp = 4,0x10^-12\nIII. NB: Ksp = 4,0x10^-10\nВ каком варианте правильно сравнены молярные растворимости этих солей в чистой воде?",
        "ar": "فيما يلي ثلاثة أملاح قليلة الذوبان وقيم حاصل الذوبان لها عند 25 °C:\nI. MA: Ksp = 1.0x10^-10\nII. MA2: Ksp = 4.0x10^-12\nIII. NB: Ksp = 4.0x10^-10\nفي أي خيار تكون مقارنة الذوبانيات المولارية لهذه الأملاح في الماء النقي صحيحة؟",
        "zh": "25 °C时三种难溶盐的溶度积如下：\nI. MA：Ksp = 1.0x10^-10\nII. MA2：Ksp = 4.0x10^-12\nIII. NB：Ksp = 4.0x10^-10\n下列哪一项正确比较了这些盐在纯水中的摩尔溶解度？",
        "ku": "Sê xwêyên kêm-helbar û hevdana helbûna wan li 25 °C ev in:\nI. MA: Ksp = 1,0x10^-10\nII. MA2: Ksp = 4,0x10^-12\nIII. NB: Ksp = 4,0x10^-10\nBerhevdana helbûnên molar ên van xwêyan di ava saf de di kîjan bijardeyê de rast hatiye dayîn?"
      },
      "options": [
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
          "tr": "II < III < I",
          "en": "II < III < I",
          "de": "II < III < I",
          "fr": "II < III < I",
          "ru": "II < III < I",
          "ar": "II < III < I",
          "zh": "II < III < I",
          "ku": "II < III < I"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Tuz tipleri farklı olduğu için önce s hesaplanır. I (MA, 1:1): s = √(1,0x10^-10) = 1,0x10^-5 M. II (MA2, 1:2): 4s^3 = 4,0x10^-12 → s = 1,0x10^-4 M. III (NB, 1:1): s = √(4,0x10^-10) = 2,0x10^-5 M. Sıralama I < III < II'dir. Yalnızca Kçç değerleri sıralanırsa II < I < III bulunur; bu, Kçç'si en küçük olan MA2'nin aslında en çok çözünen tuz olduğunu gözden kaçıran tipik hatadır.",
        "en": "Because the salt types differ, s must be calculated first. I (MA, 1:1): s = √(1.0x10^-10) = 1.0x10^-5 M. II (MA2, 1:2): 4s^3 = 4.0x10^-12 → s = 1.0x10^-4 M. III (NB, 1:1): s = √(4.0x10^-10) = 2.0x10^-5 M. The order is I < III < II. Ranking the Ksp values alone gives II < I < III, the typical error of overlooking that MA2, with the smallest Ksp, is actually the most soluble salt.",
        "de": "Da die Salztypen verschieden sind, muss zuerst s berechnet werden. I (MA, 1:1): s = √(1,0x10^-10) = 1,0x10^-5 M. II (MA2, 1:2): 4s^3 = 4,0x10^-12 → s = 1,0x10^-4 M. III (NB, 1:1): s = √(4,0x10^-10) = 2,0x10^-5 M. Die Reihenfolge ist I < III < II. Ordnet man nur die Ksp-Werte, erhält man II < I < III – der typische Fehler, zu übersehen, dass MA2 mit dem kleinsten Ksp tatsächlich am besten löslich ist.",
        "fr": "Les types de sels étant différents, on calcule d'abord s. I (MA, 1:1) : s = √(1,0x10^-10) = 1,0x10^-5 M. II (MA2, 1:2) : 4s^3 = 4,0x10^-12 → s = 1,0x10^-4 M. III (NB, 1:1) : s = √(4,0x10^-10) = 2,0x10^-5 M. L'ordre est I < III < II. Classer seulement les Ksp donne II < I < III, l'erreur typique qui ignore que MA2, de plus petit Ksp, est en réalité le sel le plus soluble.",
        "ru": "Типы солей различны, поэтому сначала вычисляют s. I (MA, 1:1): s = √(1,0x10^-10) = 1,0x10^-5 M. II (MA2, 1:2): 4s^3 = 4,0x10^-12 → s = 1,0x10^-4 M. III (NB, 1:1): s = √(4,0x10^-10) = 2,0x10^-5 M. Порядок: I < III < II. Если упорядочить только значения Ksp, получится II < I < III — типичная ошибка: упускают, что MA2 с наименьшим Ksp на самом деле растворима лучше всех.",
        "ar": "بما أن أنواع الأملاح مختلفة يجب حساب s أولًا. I (MA، 1:1): s = √(1.0x10^-10) = 1.0x10^-5 M. II (MA2، 1:2): 4s^3 = 4.0x10^-12 ← s = 1.0x10^-4 M. III (NB، 1:1): s = √(4.0x10^-10) = 2.0x10^-5 M. الترتيب هو I < III < II. أما ترتيب قيم Ksp وحدها فيعطي II < I < III، وهو الخطأ الشائع الذي يغفل أن MA2 ذا Ksp الأصغر هو في الحقيقة الأكثر ذوبانًا.",
        "zh": "盐的类型不同，必须先计算s。I(MA，1:1)：s = √(1.0x10^-10) = 1.0x10^-5 M。II(MA2，1:2)：4s^3 = 4.0x10^-12 → s = 1.0x10^-4 M。III(NB，1:1)：s = √(4.0x10^-10) = 2.0x10^-5 M。顺序为I < III < II。只按Ksp排序会得到II < I < III，这是忽视了Ksp最小的MA2实际上溶解度最大的典型错误。",
        "ku": "Ji ber ku cureyên xwêyan cuda ne, divê pêşî s were hesabkirin. I (MA, 1:1): s = √(1,0x10^-10) = 1,0x10^-5 M. II (MA2, 1:2): 4s^3 = 4,0x10^-12 → s = 1,0x10^-4 M. III (NB, 1:1): s = √(4,0x10^-10) = 2,0x10^-5 M. Rêz I < III < II ye. Ger tenê nirxên Ksp werin rêzkirin II < I < III tê dîtin; ev xeletiya asayî ye ku nabîne MA2 ya bi Ksp ya herî piçûk bi rastî ya herî zêde dihele ye."
      }
    },
    {
      "id": "u20-twin11",
      "stem": {
        "tr": "25 °C'de az çözünen MX2 tuzunun (mol kütlesi 100 g/mol) 500 mL doymuş sulu çözeltisinde 5,0x10^-3 g MX2 çözünmüş olarak bulunmaktadır. Buna göre MX2'nin 25 °C'deki çözünürlük çarpımı (Kçç) kaçtır?",
        "en": "At 25 °C, 500 mL of a saturated aqueous solution of the sparingly soluble salt MX2 (molar mass 100 g/mol) contains 5.0x10^-3 g of dissolved MX2. What is the solubility product (Ksp) of MX2 at 25 °C?",
        "de": "Bei 25 °C enthalten 500 mL einer gesättigten wässrigen Lösung des schwerlöslichen Salzes MX2 (molare Masse 100 g/mol) 5,0x10^-3 g gelöstes MX2. Wie groß ist das Löslichkeitsprodukt (Ksp) von MX2 bei 25 °C?",
        "fr": "À 25 °C, 500 mL d'une solution aqueuse saturée du sel peu soluble MX2 (masse molaire 100 g/mol) contiennent 5,0x10^-3 g de MX2 dissous. Quel est le produit de solubilité (Ksp) de MX2 à 25 °C ?",
        "ru": "При 25 °C в 500 мл насыщенного водного раствора малорастворимой соли MX2 (молярная масса 100 г/моль) растворено 5,0x10^-3 г MX2. Чему равно произведение растворимости (Ksp) MX2 при 25 °C?",
        "ar": "عند 25 °C يحتوي 500 mL من المحلول المائي المشبع للملح قليل الذوبان MX2 (الكتلة المولية 100 g/mol) على 5.0x10^-3 g من MX2 الذائب. ما قيمة حاصل الذوبان (Ksp) لـ MX2 عند 25 °C؟",
        "zh": "25 °C时，难溶盐MX2(摩尔质量100 g/mol)的500 mL饱和水溶液中溶有5.0x10^-3 g MX2。25 °C时MX2的溶度积(Ksp)是多少？",
        "ku": "Li 25 °C, di 500 mL çareseriya avî ya têr a xwêya kêm-helbar MX2 (girseya molar 100 g/mol) de 5,0x10^-3 g MX2 heliyayî heye. Li gorî vê, hevdana helbûnê (Ksp) ya MX2 li 25 °C çend e?"
      },
      "options": [
        {
          "tr": "1,0x10^-12",
          "en": "1.0x10^-12",
          "de": "1,0x10^-12",
          "fr": "1,0x10^-12",
          "ru": "1,0x10^-12",
          "ar": "1.0x10^-12",
          "zh": "1.0x10^-12",
          "ku": "1,0x10^-12"
        },
        {
          "tr": "4,0x10^-12",
          "en": "4.0x10^-12",
          "de": "4,0x10^-12",
          "fr": "4,0x10^-12",
          "ru": "4,0x10^-12",
          "ar": "4.0x10^-12",
          "zh": "4.0x10^-12",
          "ku": "4,0x10^-12"
        },
        {
          "tr": "1,0x10^-8",
          "en": "1.0x10^-8",
          "de": "1,0x10^-8",
          "fr": "1,0x10^-8",
          "ru": "1,0x10^-8",
          "ar": "1.0x10^-8",
          "zh": "1.0x10^-8",
          "ku": "1,0x10^-8"
        },
        {
          "tr": "2,0x10^-8",
          "en": "2.0x10^-8",
          "de": "2,0x10^-8",
          "fr": "2,0x10^-8",
          "ru": "2,0x10^-8",
          "ar": "2.0x10^-8",
          "zh": "2.0x10^-8",
          "ku": "2,0x10^-8"
        },
        {
          "tr": "4,0x10^-8",
          "en": "4.0x10^-8",
          "de": "4,0x10^-8",
          "fr": "4,0x10^-8",
          "ru": "4,0x10^-8",
          "ar": "4.0x10^-8",
          "zh": "4.0x10^-8",
          "ku": "4,0x10^-8"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "n = 5,0x10^-3 g / 100 g/mol = 5,0x10^-5 mol; s = 5,0x10^-5 mol / 0,500 L = 1,0x10^-4 mol/L. MX2(k) ⇌ M2+ + 2X- → [M2+] = s, [X-] = 2s. Kçç = s·(2s)^2 = 4s^3 = 4·(1,0x10^-4)^3 = 4,0x10^-12. 1,0x10^-12 değeri 4 katsayısının (yani [X-] = 2s'nin) unutulmasıyla, 1,0x10^-8 ve 2,0x10^-8 değerleri tuz 1:1 tipi sanılarak ya da üs unutularak, 4,0x10^-8 ise yalnızca [X-]^2 = (2s)^2 hesaplanarak bulunur.",
        "en": "n = 5.0x10^-3 g / 100 g/mol = 5.0x10^-5 mol; s = 5.0x10^-5 mol / 0.500 L = 1.0x10^-4 mol/L. MX2(s) ⇌ M2+ + 2X- → [M2+] = s, [X-] = 2s. Ksp = s·(2s)^2 = 4s^3 = 4·(1.0x10^-4)^3 = 4.0x10^-12. 1.0x10^-12 results from forgetting the factor 4 (i.e. [X-] = 2s), 1.0x10^-8 and 2.0x10^-8 from treating the salt as 1:1 or dropping the exponent, and 4.0x10^-8 from calculating only [X-]^2 = (2s)^2.",
        "de": "n = 5,0x10^-3 g / 100 g/mol = 5,0x10^-5 mol; s = 5,0x10^-5 mol / 0,500 L = 1,0x10^-4 mol/L. MX2(s) ⇌ M2+ + 2X- → [M2+] = s, [X-] = 2s. Ksp = s·(2s)^2 = 4s^3 = 4·(1,0x10^-4)^3 = 4,0x10^-12. 1,0x10^-12 entsteht, wenn der Faktor 4 (also [X-] = 2s) vergessen wird, 1,0x10^-8 und 2,0x10^-8, wenn man das Salz als 1:1 behandelt oder den Exponenten weglässt, und 4,0x10^-8, wenn man nur [X-]^2 = (2s)^2 berechnet.",
        "fr": "n = 5,0x10^-3 g / 100 g/mol = 5,0x10^-5 mol ; s = 5,0x10^-5 mol / 0,500 L = 1,0x10^-4 mol/L. MX2(s) ⇌ M2+ + 2X- → [M2+] = s, [X-] = 2s. Ksp = s·(2s)^2 = 4s^3 = 4·(1,0x10^-4)^3 = 4,0x10^-12. 1,0x10^-12 vient de l'oubli du facteur 4 (c.-à-d. [X-] = 2s), 1,0x10^-8 et 2,0x10^-8 du traitement du sel comme 1:1 ou de l'oubli de l'exposant, et 4,0x10^-8 du seul calcul de [X-]^2 = (2s)^2.",
        "ru": "n = 5,0x10^-3 г / 100 г/моль = 5,0x10^-5 моль; s = 5,0x10^-5 моль / 0,500 л = 1,0x10^-4 моль/л. MX2(тв) ⇌ M2+ + 2X- → [M2+] = s, [X-] = 2s. Ksp = s·(2s)^2 = 4s^3 = 4·(1,0x10^-4)^3 = 4,0x10^-12. 1,0x10^-12 получается, если забыть множитель 4 (то есть [X-] = 2s), 1,0x10^-8 и 2,0x10^-8 — если считать соль типа 1:1 или опустить степень, 4,0x10^-8 — если вычислить только [X-]^2 = (2s)^2.",
        "ar": "n = 5.0x10^-3 g / 100 g/mol = 5.0x10^-5 mol؛ s = 5.0x10^-5 mol / 0.500 L = 1.0x10^-4 mol/L. MX2(s) ⇌ M2+ + 2X- ← [M2+] = s و [X-] = 2s. Ksp = s·(2s)^2 = 4s^3 = 4·(1.0x10^-4)^3 = 4.0x10^-12. تنتج القيمة 1.0x10^-12 من نسيان المعامل 4 (أي [X-] = 2s)، والقيمتان 1.0x10^-8 و 2.0x10^-8 من معاملة الملح كأنه 1:1 أو إسقاط الأس، و 4.0x10^-8 من حساب [X-]^2 = (2s)^2 فقط.",
        "zh": "n = 5.0x10^-3 g / 100 g/mol = 5.0x10^-5 mol；s = 5.0x10^-5 mol / 0.500 L = 1.0x10^-4 mol/L。MX2(s) ⇌ M2+ + 2X- → [M2+] = s，[X-] = 2s。Ksp = s·(2s)^2 = 4s^3 = 4·(1.0x10^-4)^3 = 4.0x10^-12。漏掉系数4(即[X-] = 2s)得1.0x10^-12；把盐当作1:1型或漏掉指数得1.0x10^-8和2.0x10^-8；只算[X-]^2 = (2s)^2得4.0x10^-8。",
        "ku": "n = 5,0x10^-3 g / 100 g/mol = 5,0x10^-5 mol; s = 5,0x10^-5 mol / 0,500 L = 1,0x10^-4 mol/L. MX2(h) ⇌ M2+ + 2X- → [M2+] = s, [X-] = 2s. Ksp = s·(2s)^2 = 4s^3 = 4·(1,0x10^-4)^3 = 4,0x10^-12. 1,0x10^-12 ji jibîrkirina rêjeya 4 (ango [X-] = 2s), 1,0x10^-8 û 2,0x10^-8 ji hesibandina xwê wekî 1:1 an jibîrkirina hêzê, 4,0x10^-8 jî ji hesabkirina tenê [X-]^2 = (2s)^2 tê."
      }
    },
    {
      "id": "u20-twin12",
      "stem": {
        "tr": "Kireçtaşı bölgelerinde CaCO3(k) + CO2(g) + H2O(s) ⇌ Ca2+(suda) + 2HCO3-(suda) dengesi önemli rol oynar. Buna göre;\nI. Yeraltı suyunda çözünmüş CO2 miktarı arttıkça CaCO3'ün çözünürlüğü artar.\nII. Mağara tavanından damlayan sudan CO2 gazının ayrılması CaCO3'ün çökmesine ve sarkıtların oluşmasına yol açar.\nIII. Diş minesinin asidik yiyecek ve içeceklerle aşınması, az çözünen bazik bir tuzun çözünürlüğünün asitli ortamda artmasına örnektir.\nyargılarından hangileri doğrudur?",
        "en": "In limestone regions the equilibrium CaCO3(s) + CO2(g) + H2O(l) ⇌ Ca2+(aq) + 2HCO3-(aq) plays an important role. Accordingly:\nI. As the amount of dissolved CO2 in groundwater increases, the solubility of CaCO3 increases.\nII. The escape of CO2 gas from water dripping from a cave ceiling causes CaCO3 to precipitate and stalactites to form.\nIII. The erosion of tooth enamel by acidic foods and drinks is an example of the solubility of a sparingly soluble basic salt increasing in an acidic medium.\nWhich of the statements are correct?",
        "de": "In Kalksteingebieten spielt das Gleichgewicht CaCO3(s) + CO2(g) + H2O(l) ⇌ Ca2+(aq) + 2HCO3-(aq) eine wichtige Rolle. Demnach:\nI. Je mehr CO2 im Grundwasser gelöst ist, desto größer ist die Löslichkeit von CaCO3.\nII. Das Entweichen von CO2 aus Wasser, das von einer Höhlendecke tropft, führt zur Fällung von CaCO3 und zur Bildung von Stalaktiten.\nIII. Die Schädigung des Zahnschmelzes durch saure Speisen und Getränke ist ein Beispiel dafür, dass die Löslichkeit eines schwerlöslichen basischen Salzes in saurem Milieu steigt.\nWelche Aussagen sind richtig?",
        "fr": "Dans les régions calcaires, l'équilibre CaCO3(s) + CO2(g) + H2O(l) ⇌ Ca2+(aq) + 2HCO3-(aq) joue un rôle important. Par conséquent :\nI. Plus la quantité de CO2 dissous dans l'eau souterraine augmente, plus la solubilité de CaCO3 augmente.\nII. Le départ du CO2 gazeux de l'eau qui goutte du plafond d'une grotte provoque la précipitation de CaCO3 et la formation de stalactites.\nIII. L'érosion de l'émail dentaire par les aliments et boissons acides est un exemple d'augmentation, en milieu acide, de la solubilité d'un sel basique peu soluble.\nQuelles affirmations sont correctes ?",
        "ru": "В известняковых районах важную роль играет равновесие CaCO3(тв) + CO2(г) + H2O(ж) ⇌ Ca2+(р-р) + 2HCO3-(р-р). Даны утверждения:\nI. С увеличением количества растворённого в подземной воде CO2 растворимость CaCO3 возрастает.\nII. Выделение газа CO2 из воды, капающей с потолка пещеры, вызывает осаждение CaCO3 и образование сталактитов.\nIII. Разрушение зубной эмали кислыми продуктами и напитками — пример увеличения растворимости малорастворимой основной соли в кислой среде.\nКакие из утверждений верны?",
        "ar": "في المناطق الكلسية يؤدي الاتزان CaCO3(s) + CO2(g) + H2O(l) ⇌ Ca2+(aq) + 2HCO3-(aq) دورًا مهمًّا. وبناءً على ذلك:\nI. كلما زادت كمية CO2 الذائبة في المياه الجوفية زادت ذوبانية CaCO3.\nII. يؤدي تصاعد غاز CO2 من الماء المتساقط من سقف الكهف إلى ترسب CaCO3 وتكوّن الهوابط.\nIII. تآكل مينا الأسنان بفعل الأطعمة والمشروبات الحمضية مثال على ازدياد ذوبانية ملح قاعدي قليل الذوبان في الوسط الحمضي.\nأيّ العبارات صحيحة؟",
        "zh": "石灰岩地区中平衡CaCO3(s) + CO2(g) + H2O(l) ⇌ Ca2+(aq) + 2HCO3-(aq)起着重要作用。据此：\nI. 地下水中溶解的CO2越多，CaCO3的溶解度越大。\nII. 从洞顶滴下的水中逸出CO2气体，使CaCO3沉淀并形成钟乳石。\nIII. 酸性食物和饮料侵蚀牙釉质，是难溶碱性盐在酸性介质中溶解度增大的例子。\n哪些说法正确？",
        "ku": "Li herêmên kevirê kilsê hevsengiya CaCO3(h) + CO2(g) + H2O(ş) ⇌ Ca2+(av) + 2HCO3-(av) roleke girîng dilîze. Li gorî vê:\nI. Her ku mîqdara CO2 ya di ava binerdê de heliyayî zêde dibe, helbûna CaCO3 zêde dibe.\nII. Derketina gaza CO2 ji ava ku ji banê şikeftê dilop dike dibe sedema niştina CaCO3 û çêbûna stalaktîtan.\nIII. Xirabûna mîna diranan bi xwarin û vexwarinên asîdî mînaka zêdebûna helbûna xwêyeke bazî ya kêm-helbar di hawîrdora asîdî de ye.\nKîjan ji van gotinan rast in?"
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
        "tr": "I doğrudur: CO2 dengede giren taraftadır; derişimi artınca denge sağa kayar ve daha çok CaCO3 çözünür. II doğrudur: damla mağara havasıyla temas edince CO2 kaybeder, denge sola kayar ve CaCO3 çökerek sarkıtı oluşturur. III doğrudur: diş minesi bazik anyonlar (PO4 3-, OH-) içeren az çözünen bir tuzdur; asitteki H+ bu anyonları tüketir, denge çözünme yönüne kayar ve mine aşınır. Üç yargı da doğrudur.",
        "en": "I is true: CO2 is on the reactant side; when its concentration rises the equilibrium shifts right and more CaCO3 dissolves. II is true: the drop loses CO2 on contact with cave air, the equilibrium shifts left and CaCO3 precipitates to form the stalactite. III is true: tooth enamel is a sparingly soluble salt containing basic anions (PO4 3-, OH-); H+ from acid consumes these anions, the equilibrium shifts toward dissolution and the enamel erodes. All three statements are correct.",
        "de": "I ist richtig: CO2 steht auf der Eduktseite; steigt seine Konzentration, verschiebt sich das Gleichgewicht nach rechts und mehr CaCO3 löst sich. II ist richtig: Der Tropfen verliert an der Höhlenluft CO2, das Gleichgewicht verschiebt sich nach links und CaCO3 fällt aus und bildet den Stalaktiten. III ist richtig: Zahnschmelz ist ein schwerlösliches Salz mit basischen Anionen (PO4 3-, OH-); H+ aus Säure verbraucht diese Anionen, das Gleichgewicht verschiebt sich zur Auflösung und der Schmelz wird abgetragen. Alle drei Aussagen sind richtig.",
        "fr": "I est vraie : CO2 est du côté des réactifs ; si sa concentration augmente, l'équilibre se déplace vers la droite et davantage de CaCO3 se dissout. II est vraie : la goutte perd du CO2 au contact de l'air de la grotte, l'équilibre se déplace vers la gauche et CaCO3 précipite en formant la stalactite. III est vraie : l'émail dentaire est un sel peu soluble contenant des anions basiques (PO4 3-, OH-) ; les H+ de l'acide consomment ces anions, l'équilibre se déplace vers la dissolution et l'émail s'érode. Les trois affirmations sont correctes.",
        "ru": "I верно: CO2 находится в левой части уравнения; при росте его концентрации равновесие смещается вправо, и растворяется больше CaCO3. II верно: капля при контакте с воздухом пещеры теряет CO2, равновесие смещается влево, и CaCO3 выпадает в осадок, образуя сталактит. III верно: зубная эмаль — малорастворимая соль с основными анионами (PO4 3-, OH-); ионы H+ кислоты связывают эти анионы, равновесие смещается в сторону растворения, и эмаль разрушается. Все три утверждения верны.",
        "ar": "العبارة I صحيحة: CO2 في جانب المتفاعلات، فعند زيادة تركيزه ينزاح الاتزان نحو اليمين ويذوب مزيد من CaCO3. العبارة II صحيحة: تفقد القطرة CO2 عند ملامستها هواء الكهف فينزاح الاتزان نحو اليسار ويترسب CaCO3 مكوّنًا الهابطة. العبارة III صحيحة: مينا الأسنان ملح قليل الذوبان يحتوي على أنيونات قاعدية (PO4 3- و OH-)، وأيونات H+ من الحمض تستهلك هذه الأنيونات فينزاح الاتزان نحو الذوبان ويتآكل المينا. العبارات الثلاث صحيحة.",
        "zh": "I正确：CO2在反应物一侧，其浓度增大时平衡右移，更多CaCO3溶解。II正确：水滴接触洞内空气时失去CO2，平衡左移，CaCO3沉淀形成钟乳石。III正确：牙釉质是含碱性阴离子(PO4 3-、OH-)的难溶盐；酸中的H+ 消耗这些阴离子，平衡向溶解方向移动，牙釉质被侵蚀。三种说法都正确。",
        "ku": "I rast e: CO2 li aliyê reaktantan e; dema tîrbûna wê zêde dibe hevsengî ber bi rastê ve diçe û bêtir CaCO3 dihele. II rast e: dilop bi hewaya şikeftê re CO2 winda dike, hevsengî ber bi çepê ve diçe û CaCO3 dinişe û stalaktît çêdibe. III rast e: mîna diranan xwêyeke kêm-helbar e ku anyonên bazî (PO4 3-, OH-) dihewîne; H+ ya asîdê van anyonan dixwe, hevsengî ber bi helînê ve diçe û mîna dixure. Her sê gotin rast in."
      }
    },
    {
      "id": "u20-twin13",
      "stem": {
        "tr": "25 °C'de dibinde katısı bulunan doymuş AgCl çözeltisine aynı sıcaklıkta bir miktar saf su ekleniyor. Yeni denge kurulduğunda dipte hâlâ katı AgCl bulunduğuna göre, aşağıdaki niceliklerden hangisi ilk duruma göre artmıştır?",
        "en": "At 25 °C some pure water is added, at the same temperature, to a saturated AgCl solution with solid at the bottom. Given that solid AgCl is still present when the new equilibrium is established, which of the following quantities has increased compared with the initial state?",
        "de": "Bei 25 °C wird zu einer gesättigten AgCl-Lösung mit Bodenkörper bei gleicher Temperatur etwas reines Wasser gegeben. Da sich nach Einstellung des neuen Gleichgewichts noch festes AgCl am Boden befindet: Welche der folgenden Größen hat gegenüber dem Anfangszustand zugenommen?",
        "fr": "À 25 °C, on ajoute, à la même température, un peu d'eau pure à une solution saturée de AgCl contenant du solide au fond. Sachant qu'il reste encore du AgCl solide une fois le nouvel équilibre établi, laquelle des grandeurs suivantes a augmenté par rapport à l'état initial ?",
        "ru": "При 25 °C к насыщенному раствору AgCl с осадком на дне при той же температуре добавляют немного чистой воды. После установления нового равновесия на дне всё ещё остаётся твёрдый AgCl. Какая из следующих величин увеличилась по сравнению с исходным состоянием?",
        "ar": "عند 25 °C تُضاف كمية من الماء النقي عند الدرجة نفسها إلى محلول AgCl مشبع في قاعه صلب. إذا علمت أن AgCl الصلب ما زال موجودًا في القاع بعد تحقق الاتزان الجديد، فأي الكميات الآتية ازدادت مقارنة بالحالة الأولى؟",
        "zh": "25 °C时，向底部有固体的AgCl饱和溶液中加入少量同温纯水。建立新平衡后底部仍有固体AgCl，下列哪个量比初始状态增大了？",
        "ku": "Li 25 °C, di heman germahiyê de hinek ava saf li çareseriya têr a AgCl ya ku hişk li binî ye tê zêdekirin. Ji ber ku piştî çêbûna hevsengiya nû hîn hişka AgCl li binî heye, kîjan ji mîqdarên jêrîn li gorî rewşa destpêkê zêde bûye?"
      },
      "options": [
        {
          "tr": "Çözünmüş hâldeki AgCl'nin toplam mol sayısı",
          "en": "The total number of moles of AgCl in dissolved form",
          "de": "Die Gesamtstoffmenge an gelöstem AgCl",
          "fr": "Le nombre total de moles de AgCl dissous",
          "ru": "Общее число молей растворённого AgCl",
          "ar": "العدد الكلي لمولات AgCl الذائبة",
          "zh": "已溶解的 AgCl 的总物质的量",
          "ku": "Hejmara giştî ya molên AgCl ya heliyayî"
        },
        {
          "tr": "Çözeltideki [Ag+] derişimi",
          "en": "The [Ag+] concentration in the solution",
          "de": "Die Konzentration [Ag+] in der Lösung",
          "fr": "La concentration [Ag+] dans la solution",
          "ru": "Концентрация ионов Ag+ в растворе",
          "ar": "تركيز [Ag+] في المحلول",
          "zh": "溶液中的[Ag+]",
          "ku": "Tîrbûna [Ag+] di çareseriyê de"
        },
        {
          "tr": "AgCl'nin molar çözünürlüğü",
          "en": "The molar solubility of AgCl",
          "de": "Die molare Löslichkeit von AgCl",
          "fr": "La solubilité molaire de AgCl",
          "ru": "Молярная растворимость AgCl",
          "ar": "الذوبانية المولارية لـ AgCl",
          "zh": "AgCl的摩尔溶解度",
          "ku": "Helbûna molar a AgCl"
        },
        {
          "tr": "AgCl'nin Kçç değeri",
          "en": "The Ksp value of AgCl",
          "de": "Der Ksp-Wert von AgCl",
          "fr": "La valeur de Ksp de AgCl",
          "ru": "Значение Ksp для AgCl",
          "ar": "قيمة Ksp لـ AgCl",
          "zh": "AgCl的Ksp值",
          "ku": "Nirxa Ksp ya AgCl"
        },
        {
          "tr": "Dipteki katı AgCl'nin kütlesi",
          "en": "The mass of solid AgCl at the bottom",
          "de": "Die Masse des festen AgCl am Boden",
          "fr": "La masse de AgCl solide au fond",
          "ru": "Масса твёрдого AgCl на дне",
          "ar": "كتلة AgCl الصلب في القاع",
          "zh": "底部固体AgCl的质量",
          "ku": "Girseya hişka AgCl ya li binî"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Su eklenince çözelti önce seyrelir ve Qi < Kçç olur; denge sağa kayar, dipteki katının bir kısmı çözünür. Dipte katı kaldığı için çözelti yeniden doygun olur: [Ag+], [Cl-] ve molar çözünürlük ilk değerlerine döner; sıcaklık değişmediğinden Kçç de aynıdır. Hacim büyüdüğü hâlde derişim aynı kaldığına göre çözünmüş AgCl'nin toplam mol sayısı artmıştır; bu ek çözünme nedeniyle dipteki katının kütlesi azalır.",
        "en": "On adding water the solution is first diluted and Qi < Ksp; the equilibrium shifts right and part of the solid dissolves. Since solid remains, the solution becomes saturated again: [Ag+], [Cl-] and the molar solubility return to their initial values, and Ksp is unchanged because the temperature is unchanged. As the volume is larger while the concentration is the same, the total number of moles of dissolved AgCl has increased; because of this extra dissolution the mass of solid at the bottom decreases.",
        "de": "Nach Wasserzugabe wird die Lösung zunächst verdünnt und Qi < Ksp; das Gleichgewicht verschiebt sich nach rechts und ein Teil des Bodenkörpers löst sich. Da Feststoff übrig bleibt, wird die Lösung wieder gesättigt: [Ag+], [Cl-] und die molare Löslichkeit erreichen wieder ihre Anfangswerte, und Ksp ist unverändert, da die Temperatur gleich bleibt. Da das Volumen größer, die Konzentration aber gleich ist, hat die Gesamtstoffmenge an gelöstem AgCl zugenommen; wegen dieser zusätzlichen Lösung nimmt die Masse des Bodenkörpers ab.",
        "fr": "Après l'ajout d'eau, la solution est d'abord diluée et Qi < Ksp ; l'équilibre se déplace vers la droite et une partie du solide se dissout. Comme il reste du solide, la solution redevient saturée : [Ag+], [Cl-] et la solubilité molaire reprennent leurs valeurs initiales, et Ksp est inchangé puisque la température ne change pas. Le volume étant plus grand pour une même concentration, le nombre total de moles de AgCl dissous a augmenté ; à cause de cette dissolution supplémentaire, la masse de solide au fond diminue.",
        "ru": "После добавления воды раствор сначала разбавляется и Qi < Ksp; равновесие смещается вправо, и часть осадка растворяется. Поскольку осадок остаётся, раствор снова становится насыщенным: [Ag+], [Cl-] и молярная растворимость возвращаются к исходным значениям, а Ksp не меняется, так как температура постоянна. Объём увеличился при той же концентрации, значит, общее число молей растворённого AgCl возросло; из-за этого дополнительного растворения масса осадка на дне уменьшается.",
        "ar": "عند إضافة الماء يتخفف المحلول أولًا ويصبح Qi < Ksp؛ فينزاح الاتزان نحو اليمين ويذوب جزء من الصلب. وبما أن الصلب ما زال موجودًا يعود المحلول مشبعًا: فتعود [Ag+] و [Cl-] والذوبانية المولارية إلى قيمها الأولى، ويبقى Ksp كما هو لأن درجة الحرارة لم تتغير. وبما أن الحجم ازداد والتركيز بقي ثابتًا فإن العدد الكلي لمولات AgCl الذائبة قد ازداد؛ وبسبب هذا الذوبان الإضافي تقل كتلة الصلب في القاع.",
        "zh": "加水后溶液先被稀释，Qi < Ksp；平衡右移，部分固体溶解。由于仍有固体，溶液重新达到饱和：[Ag+]、[Cl-]和摩尔溶解度恢复原值；温度不变，Ksp也不变。体积增大而浓度不变，所以溶解的AgCl总物质的量增大；由于这部分额外溶解，底部固体质量减小。",
        "ku": "Dema av tê zêdekirin, çareserî pêşî sist dibe û Qi < Ksp dibe; hevsengî ber bi rastê ve diçe û beşek ji hişkê dihele. Ji ber ku hişk dimîne, çareserî dîsa têr dibe: [Ag+], [Cl-] û helbûna molar vedigerin nirxên xwe yên destpêkê; ji ber ku germahî naguhere Ksp jî wekî xwe ye. Ji ber ku qebare mezin bûye lê tîrbûn heman e, hejmara giştî ya molên AgCl ya heliyayî zêde bûye; ji ber vê helîna zêde girseya hişka li binî kêm dibe."
      }
    },
    {
      "id": "u20-twin14",
      "stem": {
        "tr": "25 °C'de AgCl için Kçç = 1,0x10^-10'dur. AgCl katısının aynı sıcaklıkta\nI. 0,010 M MgCl2 çözeltisindeki,\nII. 0,010 M NaCl çözeltisindeki,\nIII. saf sudaki\nmolar çözünürlüklerinin karşılaştırılması aşağıdakilerden hangisinde doğru verilmiştir?",
        "en": "At 25 °C, Ksp for AgCl is 1.0x10^-10. Which option correctly compares the molar solubilities of solid AgCl at the same temperature in\nI. 0.010 M MgCl2 solution,\nII. 0.010 M NaCl solution,\nIII. pure water?",
        "de": "Bei 25 °C ist Ksp für AgCl 1,0x10^-10. In welcher Antwort ist der Vergleich der molaren Löslichkeiten von festem AgCl bei gleicher Temperatur in\nI. 0,010 M MgCl2-Lösung,\nII. 0,010 M NaCl-Lösung,\nIII. reinem Wasser\nrichtig angegeben?",
        "fr": "À 25 °C, Ksp de AgCl vaut 1,0x10^-10. Quelle proposition compare correctement les solubilités molaires de AgCl solide, à la même température,\nI. dans une solution de MgCl2 0,010 M,\nII. dans une solution de NaCl 0,010 M,\nIII. dans l'eau pure ?",
        "ru": "При 25 °C Ksp AgCl = 1,0x10^-10. В каком варианте правильно сравнены молярные растворимости твёрдого AgCl при той же температуре\nI. в 0,010 M растворе MgCl2,\nII. в 0,010 M растворе NaCl,\nIII. в чистой воде?",
        "ar": "عند 25 °C تكون قيمة Ksp لـ AgCl هي 1.0x10^-10. في أي خيار تكون مقارنة الذوبانيات المولارية لـ AgCl الصلب عند الدرجة نفسها صحيحة:\nI. في محلول MgCl2 تركيزه 0.010 M،\nII. في محلول NaCl تركيزه 0.010 M،\nIII. في الماء النقي؟",
        "zh": "25 °C时AgCl的Ksp = 1.0x10^-10。下列哪一项正确比较了同温下固体AgCl\nI. 在0.010 M MgCl2溶液中，\nII. 在0.010 M NaCl溶液中，\nIII. 在纯水中\n的摩尔溶解度？",
        "ku": "Li 25 °C ji bo AgCl Ksp = 1,0x10^-10 e. Berhevdana helbûnên molar ên hişka AgCl di heman germahiyê de\nI. di çareseriya MgCl2 ya 0,010 M de,\nII. di çareseriya NaCl ya 0,010 M de,\nIII. di ava saf de\ndi kîjan bijardeyê de rast hatiye dayîn?"
      },
      "options": [
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
          "tr": "III < II < I",
          "en": "III < II < I",
          "de": "III < II < I",
          "fr": "III < II < I",
          "ru": "III < II < I",
          "ar": "III < II < I",
          "zh": "III < II < I",
          "ku": "III < II < I"
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
          "tr": "I < II < III",
          "en": "I < II < III",
          "de": "I < II < III",
          "fr": "I < II < III",
          "ru": "I < II < III",
          "ar": "I < II < III",
          "zh": "I < II < III",
          "ku": "I < II < III"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "I: MgCl2 → Mg2+ + 2Cl-, [Cl-] = 0,020 M; s = Kçç/[Cl-] = 1,0x10^-10/0,020 = 5,0x10^-9 M. II: [Cl-] = 0,010 M; s = 1,0x10^-10/0,010 = 1,0x10^-8 M. III: s = √(1,0x10^-10) = 1,0x10^-5 M. Sıralama I < II < III'tür. Çözeltilerin molaritesi eşit diye 'I = II' demek, MgCl2'nin formül başına iki Cl- verdiğini gözden kaçırmaktır; ortak iyon derişimi büyüdükçe çözünürlük küçülür.",
        "en": "I: MgCl2 → Mg2+ + 2Cl-, [Cl-] = 0.020 M; s = Ksp/[Cl-] = 1.0x10^-10/0.020 = 5.0x10^-9 M. II: [Cl-] = 0.010 M; s = 1.0x10^-10/0.010 = 1.0x10^-8 M. III: s = √(1.0x10^-10) = 1.0x10^-5 M. The order is I < II < III. Saying 'I = II' because the molarities are equal overlooks that MgCl2 gives two Cl- per formula unit; the larger the common-ion concentration, the smaller the solubility.",
        "de": "I: MgCl2 → Mg2+ + 2Cl-, [Cl-] = 0,020 M; s = Ksp/[Cl-] = 1,0x10^-10/0,020 = 5,0x10^-9 M. II: [Cl-] = 0,010 M; s = 1,0x10^-10/0,010 = 1,0x10^-8 M. III: s = √(1,0x10^-10) = 1,0x10^-5 M. Die Reihenfolge ist I < II < III. 'I = II' wegen gleicher Molarität zu sagen, übersieht, dass MgCl2 pro Formeleinheit zwei Cl- liefert; je größer die Konzentration des gemeinsamen Ions, desto kleiner die Löslichkeit.",
        "fr": "I : MgCl2 → Mg2+ + 2Cl-, [Cl-] = 0,020 M ; s = Ksp/[Cl-] = 1,0x10^-10/0,020 = 5,0x10^-9 M. II : [Cl-] = 0,010 M ; s = 1,0x10^-10/0,010 = 1,0x10^-8 M. III : s = √(1,0x10^-10) = 1,0x10^-5 M. L'ordre est I < II < III. Dire « I = II » parce que les molarités sont égales revient à oublier que MgCl2 libère deux Cl- par unité formulaire ; plus la concentration de l'ion commun est grande, plus la solubilité est faible.",
        "ru": "I: MgCl2 → Mg2+ + 2Cl-, [Cl-] = 0,020 M; s = Ksp/[Cl-] = 1,0x10^-10/0,020 = 5,0x10^-9 M. II: [Cl-] = 0,010 M; s = 1,0x10^-10/0,010 = 1,0x10^-8 M. III: s = √(1,0x10^-10) = 1,0x10^-5 M. Порядок: I < II < III. Утверждать «I = II» из-за одинаковой молярной концентрации — значит упустить, что MgCl2 даёт два иона Cl- на формульную единицу; чем больше концентрация одноимённого иона, тем меньше растворимость.",
        "ar": "I: MgCl2 → Mg2+ + 2Cl- و [Cl-] = 0.020 M؛ s = Ksp/[Cl-] = 1.0x10^-10/0.020 = 5.0x10^-9 M. II: [Cl-] = 0.010 M؛ s = 1.0x10^-10/0.010 = 1.0x10^-8 M. III: s = √(1.0x10^-10) = 1.0x10^-5 M. الترتيب هو I < II < III. والقول إن 'I = II' لأن المولارية متساوية يغفل أن MgCl2 يعطي أيونين من Cl- لكل وحدة صيغة؛ فكلما زاد تركيز الأيون المشترك قلت الذوبانية.",
        "zh": "I：MgCl2 → Mg2+ + 2Cl-，[Cl-] = 0.020 M；s = Ksp/[Cl-] = 1.0x10^-10/0.020 = 5.0x10^-9 M。II：[Cl-] = 0.010 M；s = 1.0x10^-10/0.010 = 1.0x10^-8 M。III：s = √(1.0x10^-10) = 1.0x10^-5 M。顺序为I < II < III。因物质的量浓度相同就认为“I = II”，是忽视了每个MgCl2提供两个Cl-；同离子浓度越大，溶解度越小。",
        "ku": "I: MgCl2 → Mg2+ + 2Cl-, [Cl-] = 0,020 M; s = Ksp/[Cl-] = 1,0x10^-10/0,020 = 5,0x10^-9 M. II: [Cl-] = 0,010 M; s = 1,0x10^-10/0,010 = 1,0x10^-8 M. III: s = √(1,0x10^-10) = 1,0x10^-5 M. Rêz I < II < III ye. Gotina 'I = II' ji ber ku molarîte wekhev in, nedîtina wê yekê ye ku MgCl2 ji bo her yekeya formulê du Cl- dide; her ku tîrbûna îyona hevpar mezin dibe, helbûn piçûk dibe."
      }
    },
    {
      "id": "u20-twin15",
      "stem": {
        "tr": "Aşağıdaki az çözünen tuzlardan hangisinin sudaki çözünürlüğü, aynı sıcaklıkta ortama HNO3 eklenerek pH düşürüldüğünde belirgin şekilde artar?",
        "en": "For which of the following sparingly soluble salts does the solubility in water increase markedly when the pH is lowered by adding HNO3 at the same temperature?",
        "de": "Bei welchem der folgenden schwerlöslichen Salze steigt die Löslichkeit in Wasser deutlich, wenn der pH-Wert bei gleicher Temperatur durch Zugabe von HNO3 gesenkt wird?",
        "fr": "Pour lequel des sels peu solubles suivants la solubilité dans l'eau augmente-t-elle nettement lorsqu'on abaisse le pH par ajout de HNO3 à la même température ?",
        "ru": "У какой из следующих малорастворимых солей растворимость в воде заметно увеличивается, если при той же температуре понизить pH добавлением HNO3?",
        "ar": "أيّ الأملاح قليلة الذوبان الآتية تزداد ذوبانيته في الماء بشكل ملحوظ عند خفض pH بإضافة HNO3 عند درجة الحرارة نفسها؟",
        "zh": "同温下加入HNO3降低pH时，下列哪种难溶盐在水中的溶解度会明显增大？",
        "ku": "Kîjan ji xwêyên kêm-helbar ên jêrîn, dema ku di heman germahiyê de bi zêdekirina HNO3 pH tê kêmkirin, helbûna wê di avê de bi awayekî eşkere zêde dibe?"
      },
      "options": [
        {
          "tr": "AgCl",
          "en": "AgCl",
          "de": "AgCl",
          "fr": "AgCl",
          "ru": "AgCl",
          "ar": "AgCl",
          "zh": "AgCl",
          "ku": "AgCl"
        },
        {
          "tr": "CaCO3",
          "en": "CaCO3",
          "de": "CaCO3",
          "fr": "CaCO3",
          "ru": "CaCO3",
          "ar": "CaCO3",
          "zh": "CaCO3",
          "ku": "CaCO3"
        },
        {
          "tr": "AgBr",
          "en": "AgBr",
          "de": "AgBr",
          "fr": "AgBr",
          "ru": "AgBr",
          "ar": "AgBr",
          "zh": "AgBr",
          "ku": "AgBr"
        },
        {
          "tr": "PbCl2",
          "en": "PbCl2",
          "de": "PbCl2",
          "fr": "PbCl2",
          "ru": "PbCl2",
          "ar": "PbCl2",
          "zh": "PbCl2",
          "ku": "PbCl2"
        },
        {
          "tr": "AgI",
          "en": "AgI",
          "de": "AgI",
          "fr": "AgI",
          "ru": "AgI",
          "ar": "AgI",
          "zh": "AgI",
          "ku": "AgI"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "CaCO3(k) ⇌ Ca2+ + CO3 2- dengesinde CO3 2- bazik bir anyondur; HNO3'ten gelen H+ ile CO3 2- + 2H+ → H2O + CO2 tepkimesini verir. CO3 2- ortamdan uzaklaştıkça denge sağa kayar ve CaCO3'ün çözünürlüğü artar. AgCl, AgBr, AgI ve PbCl2'nin anyonları (Cl-, Br-, I-) kuvvetli asitlerin anyonlarıdır, H+ ile tepkimeye girmez; bu tuzların çözünürlüğü pH'tan belirgin şekilde etkilenmez.",
        "en": "In the equilibrium CaCO3(s) ⇌ Ca2+ + CO3 2-, CO3 2- is a basic anion; with H+ from HNO3 it reacts: CO3 2- + 2H+ → H2O + CO2. As CO3 2- is removed, the equilibrium shifts right and the solubility of CaCO3 increases. The anions of AgCl, AgBr, AgI and PbCl2 (Cl-, Br-, I-) are anions of strong acids and do not react with H+, so the solubility of these salts is not noticeably affected by pH.",
        "de": "Im Gleichgewicht CaCO3(s) ⇌ Ca2+ + CO3 2- ist CO3 2- ein basisches Anion; mit H+ aus HNO3 reagiert es: CO3 2- + 2H+ → H2O + CO2. Wird CO3 2- entfernt, verschiebt sich das Gleichgewicht nach rechts und die Löslichkeit von CaCO3 steigt. Die Anionen von AgCl, AgBr, AgI und PbCl2 (Cl-, Br-, I-) sind Anionen starker Säuren und reagieren nicht mit H+; die Löslichkeit dieser Salze hängt daher kaum vom pH ab.",
        "fr": "Dans l'équilibre CaCO3(s) ⇌ Ca2+ + CO3 2-, CO3 2- est un anion basique ; avec les H+ de HNO3, il réagit : CO3 2- + 2H+ → H2O + CO2. CO3 2- étant éliminé, l'équilibre se déplace vers la droite et la solubilité de CaCO3 augmente. Les anions de AgCl, AgBr, AgI et PbCl2 (Cl-, Br-, I-) sont des anions d'acides forts et ne réagissent pas avec H+ ; la solubilité de ces sels n'est pas sensiblement affectée par le pH.",
        "ru": "В равновесии CaCO3(тв) ⇌ Ca2+ + CO3 2- ион CO3 2- — анион с основными свойствами; с ионами H+ из HNO3 он реагирует: CO3 2- + 2H+ → H2O + CO2. По мере удаления CO3 2- равновесие смещается вправо, и растворимость CaCO3 растёт. Анионы AgCl, AgBr, AgI и PbCl2 (Cl-, Br-, I-) — анионы сильных кислот и с H+ не реагируют, поэтому растворимость этих солей от pH заметно не зависит.",
        "ar": "في الاتزان CaCO3(s) ⇌ Ca2+ + CO3 2- يكون CO3 2- أنيونًا قاعديًّا يتفاعل مع H+ القادم من HNO3: CO3 2- + 2H+ → H2O + CO2. ومع إزالة CO3 2- ينزاح الاتزان نحو اليمين وتزداد ذوبانية CaCO3. أما أنيونات AgCl و AgBr و AgI و PbCl2 (Cl- و Br- و I-) فهي أنيونات أحماض قوية لا تتفاعل مع H+، لذا لا تتأثر ذوبانية هذه الأملاح بـ pH بشكل ملحوظ.",
        "zh": "在平衡CaCO3(s) ⇌ Ca2+ + CO3 2- 中，CO3 2- 是碱性阴离子，与HNO3提供的H+ 反应：CO3 2- + 2H+ → H2O + CO2。CO3 2- 被消耗，平衡右移，CaCO3溶解度增大。AgCl、AgBr、AgI和PbCl2的阴离子(Cl-、Br-、I-)是强酸的阴离子，不与H+ 反应，因此这些盐的溶解度基本不受pH影响。",
        "ku": "Di hevsengiya CaCO3(h) ⇌ Ca2+ + CO3 2- de CO3 2- anyoneke bazî ye; bi H+ ya ji HNO3 re bertek dide: CO3 2- + 2H+ → H2O + CO2. Her ku CO3 2- kêm dibe, hevsengî ber bi rastê ve diçe û helbûna CaCO3 zêde dibe. Anyonên AgCl, AgBr, AgI û PbCl2 (Cl-, Br-, I-) anyonên asîdên xurt in û bi H+ re bertek nadin; ji ber vê helbûna van xwêyan bi awayekî eşkere bi pH ve girêdayî nîne."
      }
    },
    {
      "id": "u20-twin16",
      "stem": {
        "tr": "25 °C'de Mg2+ derişimi 0,010 M olan bir çözeltinin pH'ı, hacim değişimi ihmal edilecek şekilde katı NaOH eklenerek yavaş yavaş artırılıyor. Mg(OH)2 için Kçç = 1,0x10^-11 olduğuna göre Mg(OH)2 çökmeye başladığı anda çözeltinin pH değeri kaçtır? (Ksu = 1,0x10^-14)",
        "en": "At 25 °C the pH of a solution in which [Mg2+] = 0.010 M is raised slowly by adding solid NaOH (volume change negligible). Given Ksp of Mg(OH)2 = 1.0x10^-11, what is the pH of the solution at the moment Mg(OH)2 begins to precipitate? (Kw = 1.0x10^-14)",
        "de": "Bei 25 °C wird der pH-Wert einer Lösung mit [Mg2+] = 0,010 M durch Zugabe von festem NaOH langsam erhöht (Volumenänderung vernachlässigbar). Mit Ksp von Mg(OH)2 = 1,0x10^-11: Welchen pH-Wert hat die Lösung in dem Moment, in dem Mg(OH)2 auszufallen beginnt? (Kw = 1,0x10^-14)",
        "fr": "À 25 °C, on augmente lentement le pH d'une solution où [Mg2+] = 0,010 M en ajoutant du NaOH solide (variation de volume négligeable). Sachant que Ksp de Mg(OH)2 = 1,0x10^-11, quel est le pH de la solution au moment où Mg(OH)2 commence à précipiter ? (Ke = 1,0x10^-14)",
        "ru": "При 25 °C pH раствора с [Mg2+] = 0,010 M медленно повышают, добавляя твёрдый NaOH (изменением объёма пренебречь). Ksp Mg(OH)2 = 1,0x10^-11. Чему равен pH раствора в момент начала выпадения осадка Mg(OH)2? (Kw = 1,0x10^-14)",
        "ar": "عند 25 °C يُرفَع pH محلول تركيز Mg2+ فيه 0.010 M ببطء بإضافة NaOH صلب (مع إهمال تغيّر الحجم). إذا كانت Ksp لـ Mg(OH)2 تساوي 1.0x10^-11، فما قيمة pH للمحلول لحظة بدء ترسب Mg(OH)2؟ (Kw = 1.0x10^-14)",
        "zh": "25 °C时，向[Mg2+] = 0.010 M的溶液中加入固体NaOH（忽略体积变化），使pH缓慢升高。已知Mg(OH)2的Ksp = 1.0x10^-11，Mg(OH)2开始沉淀时溶液的pH是多少？(Kw = 1.0x10^-14)",
        "ku": "Li 25 °C, pH ya çareseriyeke ku tîrbûna Mg2+ tê de 0,010 M e, bi zêdekirina NaOH ya hişk (guhertina qebareyê tê paşguhkirin) hêdî hêdî tê bilindkirin. Ji ber ku ji bo Mg(OH)2 Ksp = 1,0x10^-11 e, di kêliya ku Mg(OH)2 dest bi niştinê dike de pH ya çareseriyê çend e? (Ksu = 1,0x10^-14)"
      },
      "options": [
        {
          "tr": "4,5",
          "en": "4.5",
          "de": "4,5",
          "fr": "4,5",
          "ru": "4,5",
          "ar": "4.5",
          "zh": "4.5",
          "ku": "4,5"
        },
        {
          "tr": "5,0",
          "en": "5.0",
          "de": "5,0",
          "fr": "5,0",
          "ru": "5,0",
          "ar": "5.0",
          "zh": "5.0",
          "ku": "5,0"
        },
        {
          "tr": "7,5",
          "en": "7.5",
          "de": "7,5",
          "fr": "7,5",
          "ru": "7,5",
          "ar": "7.5",
          "zh": "7.5",
          "ku": "7,5"
        },
        {
          "tr": "9,0",
          "en": "9.0",
          "de": "9,0",
          "fr": "9,0",
          "ru": "9,0",
          "ar": "9.0",
          "zh": "9.0",
          "ku": "9,0"
        },
        {
          "tr": "9,5",
          "en": "9.5",
          "de": "9,5",
          "fr": "9,5",
          "ru": "9,5",
          "ar": "9.5",
          "zh": "9.5",
          "ku": "9,5"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Çökme Qi = Kçç olduğu anda başlar: [Mg2+][OH-]^2 = 1,0x10^-11 → [OH-]^2 = 1,0x10^-11/0,010 = 1,0x10^-9 → [OH-] = 10^-4,5 M. pOH = 4,5 ve pH = 14 - 4,5 = 9,5. 4,5 pOH'nin pH sanılmasıyla; 5,0 ve 9,0 karekök alınmadan [OH-] = 1,0x10^-9 kabul edilmesiyle; 7,5 ise Kçç'nin [Mg2+]'ye bölünmesi yerine onunla çarpılmasıyla bulunur.",
        "en": "Precipitation begins when Qi = Ksp: [Mg2+][OH-]^2 = 1.0x10^-11 → [OH-]^2 = 1.0x10^-11/0.010 = 1.0x10^-9 → [OH-] = 10^-4.5 M. pOH = 4.5 and pH = 14 - 4.5 = 9.5. 4.5 comes from mistaking pOH for pH; 5.0 and 9.0 from taking [OH-] = 1.0x10^-9 without the square root; 7.5 from multiplying Ksp by [Mg2+] instead of dividing.",
        "de": "Die Fällung beginnt, wenn Qi = Ksp: [Mg2+][OH-]^2 = 1,0x10^-11 → [OH-]^2 = 1,0x10^-11/0,010 = 1,0x10^-9 → [OH-] = 10^-4,5 M. pOH = 4,5 und pH = 14 - 4,5 = 9,5. 4,5 entsteht, wenn man pOH für pH hält; 5,0 und 9,0, wenn man ohne Wurzelziehen [OH-] = 1,0x10^-9 setzt; 7,5, wenn man Ksp mit [Mg2+] multipliziert statt dividiert.",
        "fr": "La précipitation commence quand Qi = Ksp : [Mg2+][OH-]^2 = 1,0x10^-11 → [OH-]^2 = 1,0x10^-11/0,010 = 1,0x10^-9 → [OH-] = 10^-4,5 M. pOH = 4,5 et pH = 14 - 4,5 = 9,5. 4,5 vient de la confusion entre pOH et pH ; 5,0 et 9,0 du choix [OH-] = 1,0x10^-9 sans extraire la racine ; 7,5 d'une multiplication de Ksp par [Mg2+] au lieu d'une division.",
        "ru": "Осаждение начинается при Qi = Ksp: [Mg2+][OH-]^2 = 1,0x10^-11 → [OH-]^2 = 1,0x10^-11/0,010 = 1,0x10^-9 → [OH-] = 10^-4,5 M. pOH = 4,5, pH = 14 - 4,5 = 9,5. 4,5 получается, если принять pOH за pH; 5,0 и 9,0 — если без извлечения корня взять [OH-] = 1,0x10^-9; 7,5 — если умножить Ksp на [Mg2+] вместо деления.",
        "ar": "يبدأ الترسيب عندما يكون Qi = Ksp: [Mg2+][OH-]^2 = 1.0x10^-11 ← [OH-]^2 = 1.0x10^-11/0.010 = 1.0x10^-9 ← [OH-] = 10^-4.5 M. pOH = 4.5 و pH = 14 - 4.5 = 9.5. تنتج 4.5 من اعتبار pOH هو pH؛ و 5.0 و 9.0 من أخذ [OH-] = 1.0x10^-9 دون جذر تربيعي؛ و 7.5 من ضرب Ksp في [Mg2+] بدل القسمة عليه.",
        "zh": "Qi = Ksp时开始沉淀：[Mg2+][OH-]^2 = 1.0x10^-11 → [OH-]^2 = 1.0x10^-11/0.010 = 1.0x10^-9 → [OH-] = 10^-4.5 M。pOH = 4.5，pH = 14 - 4.5 = 9.5。把pOH当成pH得4.5；不开平方取[OH-] = 1.0x10^-9得5.0和9.0；把Ksp乘以[Mg2+]而不是除以它得7.5。",
        "ku": "Niştin dema Qi = Ksp dest pê dike: [Mg2+][OH-]^2 = 1,0x10^-11 → [OH-]^2 = 1,0x10^-11/0,010 = 1,0x10^-9 → [OH-] = 10^-4,5 M. pOH = 4,5 û pH = 14 - 4,5 = 9,5. 4,5 ji hesibandina pOH wekî pH; 5,0 û 9,0 ji girtina [OH-] = 1,0x10^-9 bêyî koka çargoşe; 7,5 jî ji lêkdana Ksp bi [Mg2+] li şûna dabeşkirinê tê."
      }
    }
  ]
};

export default unit20;
