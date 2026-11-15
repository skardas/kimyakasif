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
    "ku": "Leza Reaksiyonên Kîmyewî"
  },
  "subtitle": {
    "tr": "Çarpışma Teorisi, Hız Denklemi ve Katalizör",
    "en": "Collision Theory, Rate Law & Catalysts",
    "de": "Kollisionstheorie, Geschwindigkeitsgleichung und Katalysator",
    "fr": "Théorie des collisions, équation de taux et catalyseur",
    "ru": "Теория столкновений, уравнение скорости и катализатор",
    "ar": "نظرية الاصطدام ومعادلة المعدل والمحفز",
    "zh": "碰撞理论、速率方程和催化剂",
    "ku": "Teoriya Lihevketinê, Wekheviya Rêjeyê û Katalîzator"
  },
  "facts": [
    {
      "id": "u17-f01",
      "fact": {
        "tr": "Çarpışma teorisine göre etkin çarpışma için taneciklerin yeterli kinetik enerjiye (Ea) ve uygun geometrik yönelime sahip olması gerekir.",
        "en": "According to collision theory, for effective collision, the particles must have sufficient kinetic energy (Ea) and appropriate geometric orientation.",
        "de": "Gemäß der Kollisionstheorie müssen die Teilchen für eine effektive Kollision über eine ausreichende kinetische Energie (Ea) und eine geeignete geometrische Ausrichtung verfügen.",
        "fr": "Selon la théorie des collisions, pour qu’une collision soit efficace, les particules doivent avoir une énergie cinétique (Ea) suffisante et une orientation géométrique appropriée.",
        "ru": "Согласно теории столкновений, для эффективного столкновения частицы должны иметь достаточную кинетическую энергию (Ea) и соответствующую геометрическую ориентацию.",
        "ar": "وفقا لنظرية الاصطدام، من أجل حدوث تصادم فعال، يجب أن تمتلك الجسيمات طاقة حركية كافية (Ea) واتجاه هندسي مناسب.",
        "zh": "根据碰撞理论，为了有效碰撞，粒子必须具有足够的动能（Ea）和适当的几何取向。",
        "ku": "Li gorî teoriya lihevketinê, ji bo lêdana bi bandor, divê pirtik xwedî enerjiya kînetîk a têr (Ea) û arasteya geometrîkî ya guncaw bin."
      },
      "trap": {
        "tr": "Tanecikler her çarpıştığında mutlaka kimyasal tepkime gerçekleşir.",
        "en": "Every time particles collide, a chemical reaction takes place.",
        "de": "Jedes Mal, wenn Teilchen kollidieren, findet eine chemische Reaktion statt.",
        "fr": "Chaque fois que des particules entrent en collision, une réaction chimique se produit.",
        "ru": "Каждый раз, когда частицы сталкиваются, происходит химическая реакция.",
        "ar": "في كل مرة تتصادم فيها الجزيئات، يحدث تفاعل كيميائي.",
        "zh": "每次粒子碰撞时，都会发生化学反应。",
        "ku": "Her cara ku pirtik li hev dikevin, reaksiyonek kîmyayî pêk tê."
      }
    },
    {
      "id": "u17-f02",
      "fact": {
        "tr": "Tepkime hızı birim zamanda harcanan reaktif veya oluşan ürün miktarıdır (r = -Δ[R]/Δt = +Δ[Ü]/Δt).",
        "en": "Reaction rate is the amount of reactant consumed or product formed per unit time (r = -Δ[R]/Δt = +Δ[Ü]/Δt).",
        "de": "Die Reaktionsgeschwindigkeit ist die Menge an verbrauchtem Reaktanten oder gebildetem Produkt pro Zeiteinheit (r = -Δ[R]/Δt = +Δ[Ü]/Δt).",
        "fr": "La vitesse de réaction est la quantité de réactif consommée ou de produit formé par unité de temps (r = -Δ[R]/Δt = +Δ[Ü]/Δt).",
        "ru": "Скорость реакции — это количество израсходованного реагента или продукта, образовавшегося в единицу времени (r = -Δ[R]/Δt = +Δ[Ü]/Δt.",
        "ar": "معدل التفاعل هو كمية المادة المتفاعلة المستهلكة أو المنتج المتكون في وحدة الزمن (r = -Δ[R]/Δt = +Δ[Ü]/Δt).",
        "zh": "反应速率是每单位时间消耗的反应物或形成的产物的量(r = -Δ[R]/Δt = +Δ[Ü]/Δt)。",
        "ku": "Rêjeya reaksiyonê mîqdara reaktantê tê vexwarin an hilbera ku di yekîneya demê de hatî çêkirin e (r = -Δ[R]/Δt = +Δ[Ü]/Δt)."
      },
      "trap": {
        "tr": "Tepkime hızı reaktiflerin mol sayısı arttıkça zamanla artar.",
        "en": "The reaction rate increases over time as the number of moles of reactants increases.",
        "de": "Die Reaktionsgeschwindigkeit nimmt mit der Zeit zu, wenn die Anzahl der Mol der Reaktanten zunimmt.",
        "fr": "La vitesse de réaction augmente avec le temps à mesure que le nombre de moles de réactifs augmente.",
        "ru": "Скорость реакции увеличивается с течением времени по мере увеличения количества молей реагентов.",
        "ar": "يزداد معدل التفاعل بمرور الوقت مع زيادة عدد مولات المواد المتفاعلة.",
        "zh": "随着反应物摩尔数的增加，反应速率随着时间的推移而增加。",
        "ku": "Rêjeya reaksiyonê bi demê re her ku hejmara molên reaktant zêde dibe zêde dibe."
      }
    },
    {
      "id": "u17-f03",
      "fact": {
        "tr": "Hız denklemi sadece gaz ve suda çözünmüş (aq) maddelerin derişimlerine göre yazılır; saf katı ve sıvılar hız bağıntısında yer almaz.",
        "en": "The rate equation is written only according to the concentrations of substances dissolved in gas and water (aq); Pure solids and liquids are not included in the velocity relationship.",
        "de": "Die Geschwindigkeitsgleichung wird nur nach den Konzentrationen der in Gas und Wasser gelösten Stoffe (aq) geschrieben; Reine Feststoffe und Flüssigkeiten werden nicht in die Geschwindigkeitsbeziehung einbezogen.",
        "fr": "L'équation du taux s'écrit uniquement en fonction des concentrations de substances dissoutes dans le gaz et l'eau (aq) ; Les solides purs et les liquides ne sont pas inclus dans la relation de vitesse.",
        "ru": "Уравнение скорости записано только по концентрациям веществ, растворенных в газе и воде (водн.); Чистые твердые тела и жидкости не включаются в соотношение скоростей.",
        "ar": "معادلة المعدل تكتب فقط على أساس تراكيز المواد المذابة في الغاز والماء (aq)؛ لا يتم تضمين المواد الصلبة والسوائل النقية في علاقة السرعة.",
        "zh": "仅根据溶解在气体和水中的物质浓度（aq）写出速率方程；纯固体和液体不包括在速度关系中。",
        "ku": "Wekheviya rêjeyê tenê li gorî tansiyona maddeyên di gaz û avê de (aq); Tiştên safî û şilek di nav têkiliya lezê de ne."
      },
      "trap": {
        "tr": "Saf katıların derişimi hız denkleminde üs olarak yer alır.",
        "en": "The concentration of pure solids is included as an exponent in the rate equation.",
        "de": "Die Konzentration reiner Feststoffe geht als Exponent in die Geschwindigkeitsgleichung ein.",
        "fr": "La concentration de solides purs est incluse comme exposant dans l’équation de taux.",
        "ru": "Концентрация чистых твердых веществ включена в уравнение скорости как показатель степени.",
        "ar": "يتم تضمين تركيز المواد الصلبة النقية كأس في معادلة المعدل.",
        "zh": "纯固体的浓度作为指数包含在速率方程中。",
        "ku": "Di hevkêşana rêjeyê de giraniya maddeyên safî wekî nîşander tê girtin."
      }
    },
    {
      "id": "u17-f04",
      "fact": {
        "tr": "Mekanizmalı (basamaklı) tepkimelerde hız denklemi en yavaş basamağın girenlerine göre yazılır.",
        "en": "In reactions with a mechanism (step), the rate equation is written according to the reactants of the slowest step.",
        "de": "Bei Reaktionen mit einem Mechanismus (Schritt) wird die Geschwindigkeitsgleichung entsprechend den Reaktanten des langsamsten Schrittes geschrieben.",
        "fr": "Dans les réactions avec un mécanisme (étape), l'équation de vitesse s'écrit en fonction des réactifs de l'étape la plus lente.",
        "ru": "В реакциях с механизмом (ступенью) уравнение скорости записывается по реагентам самой медленной стадии.",
        "ar": "في التفاعلات ذات الآلية (الخطوة)، تتم كتابة معادلة المعدل وفقًا للمواد المتفاعلة ذات الخطوة الأبطأ.",
        "zh": "在具有机制（步骤）的反应中，速率方程是根据最慢步骤的反应物编写的。",
        "ku": "Di reaksiyonên bi mekanîzma (gavekê) de, hevkêşana rêjeyê li gorî reaktantên gavê herî hêdî tê nivîsandin."
      },
      "trap": {
        "tr": "Basamaklı tepkimelerde hız en hızlı basamağa göre belirlenir.",
        "en": "In stepwise reactions, the rate is determined by the fastest step.",
        "de": "Bei schrittweisen Reaktionen wird die Geschwindigkeit durch den schnellsten Schritt bestimmt.",
        "fr": "Dans les réactions par étapes, la vitesse est déterminée par l’étape la plus rapide.",
        "ru": "В ступенчатых реакциях скорость определяется самой быстрой стадией.",
        "ar": "في التفاعلات المتدرجة، يتم تحديد المعدل بواسطة الخطوة الأسرع.",
        "zh": "在逐步反应中，速率由最快的步骤决定。",
        "ku": "Di reaksiyonên gav bi gav de, rêje bi gavê herî bilez tê destnîşankirin."
      }
    },
    {
      "id": "u17-f05",
      "fact": {
        "tr": "Katalizör, tepkimenin aktifleşme enerjisini (Ea) düşüren TEK FAKTÖRDÜR; tepkime entalpisini (ΔH) asla değiştirmez.",
        "en": "The catalyst is the ONLY FACTOR that lowers the activation energy (Ea) of the reaction; It never changes the reaction enthalpy (ΔH).",
        "de": "Der Katalysator ist der EINZIGE FAKTOR, der die Aktivierungsenergie (Ea) der Reaktion senkt; Es ändert nie die Reaktionsenthalpie (ΔH).",
        "fr": "Le catalyseur est le SEUL FACTEUR qui diminue l'énergie d'activation (Ea) de la réaction ; Cela ne modifie jamais l'enthalpie de réaction (ΔH).",
        "ru": "Катализатор является ЕДИНСТВЕННЫМ ФАКТОРОМ, который снижает энергию активации (Ea) реакции; Он никогда не меняет энтальпию реакции (ΔH).",
        "ar": "المحفز هو العامل الوحيد الذي يخفض طاقة التنشيط (Ea) للتفاعل؛ لا يغير أبدًا المحتوى الحراري للتفاعل (ΔH).",
        "zh": "催化剂是降低反应活化能（Ea）的唯一因素；它永远不会改变反应焓 (ΔH)。",
        "ku": "Katalîzator TENÊ FAKTOR e ku enerjiya aktîvkirinê (Ea) ya reaksiyonê kêm dike; Ew qet entalpiya reaksiyonê (ΔH) naguhere."
      },
      "trap": {
        "tr": "Katalizör tepkime entalpisini (ΔH) düşürerek sistemi rahatlatır.",
        "en": "The catalyst relaxes the system by reducing the reaction enthalpy (ΔH).",
        "de": "Der Katalysator entspannt das System, indem er die Reaktionsenthalpie (ΔH) verringert.",
        "fr": "Le catalyseur détend le système en réduisant l'enthalpie de réaction (ΔH).",
        "ru": "Катализатор расслабляет систему за счет снижения энтальпии реакции (ΔH).",
        "ar": "يقوم المحفز بإرخاء النظام عن طريق تقليل المحتوى الحراري للتفاعل (ΔH).",
        "zh": "催化剂通过降低反应焓 (ΔH) 来松弛系统。",
        "ku": "Katalîzator bi kêmkirina entalpiya reaksiyonê (ΔH) pergalê rehet dike."
      },
      "osymTip": {
        "tr": "ÖSYM tuzağı: Katalizör Ea yı düşürür, ΔH ı DEĞİŞTİRMEZ!",
        "en": "ÖSYM trap: Catalyst reduces Ea, DOES NOT CHANGE ΔH!",
        "de": "ÖSYM-Falle: Katalysator reduziert Ea, VERÄNDERT ΔH NICHT!",
        "fr": "Piège ÖSYM : le catalyseur réduit Ea, NE CHANGE PAS ΔH !",
        "ru": "Ловушка ÖSYM: Катализатор снижает Ea, НЕ ИЗМЕНЯЕТ ΔH!",
        "ar": "مصيدة ÖSYM: المحفز يقلل Ea، ولا يغير ΔH!",
        "zh": "ÖSYM 陷阱：催化剂减少 Ea，但不改变 ΔH！",
        "ku": "Xefika ÖSYM: Katalîzator Ea kêm dike, ΔH GUHERE NAKE!"
      }
    },
    {
      "id": "u17-f06",
      "fact": {
        "tr": "Sıcaklık artışı hem endotermik hem ekzotermik tüm tepkimelerin hızını ve hız sabiti k yı artırır.",
        "en": "Increasing temperature increases the rate and rate constant k of all endothermic and exothermic reactions.",
        "de": "Mit zunehmender Temperatur erhöhen sich die Geschwindigkeit und die Geschwindigkeitskonstante k aller endothermen und exothermen Reaktionen.",
        "fr": "L'augmentation de la température augmente la vitesse et la constante de vitesse k de toutes les réactions endothermiques et exothermiques.",
        "ru": "Повышение температуры увеличивает скорость и константу скорости k всех эндотермических и экзотермических реакций.",
        "ar": "تؤدي زيادة درجة الحرارة إلى زيادة المعدل والمعدل الثابت k لجميع التفاعلات الماصة للحرارة والطاردة للحرارة.",
        "zh": "升高温度会增加所有吸热和放热反应的速率和速率常数 k。",
        "ku": "Zêdebûna germahiyê rêje û rêjeya sabit k ya hemû reaksiyonên endotermîk û exotermîk zêde dike."
      },
      "trap": {
        "tr": "Ekzotermik tepkimelerde sıcaklık arttıkça tepkime hızı yavaşlar.",
        "en": "In exothermic reactions, as the temperature increases, the reaction rate slows down.",
        "de": "Bei exothermen Reaktionen verlangsamt sich die Reaktionsgeschwindigkeit mit steigender Temperatur.",
        "fr": "Dans les réactions exothermiques, à mesure que la température augmente, la vitesse de réaction ralentit.",
        "ru": "В экзотермических реакциях с повышением температуры скорость реакции замедляется.",
        "ar": "في التفاعلات الطاردة للحرارة، مع زيادة درجة الحرارة، يتباطأ معدل التفاعل.",
        "zh": "在放热反应中，随着温度升高，反应速率减慢。",
        "ku": "Di reaksiyonên exotermîk de, her ku germahî zêde dibe, rêjeya reaksiyonê hêdî dibe."
      }
    },
    {
      "id": "u17-f07",
      "fact": {
        "tr": "Sıcaklık aktifleşme enerjisini (Ea) DEĞİŞTİRMEZ; sadece Ea yı aşan tanecik sayısını artırır.",
        "en": "Temperature does NOT change the activation energy (Ea); It only increases the number of particles exceeding Ea.",
        "de": "Die Temperatur verändert NICHT die Aktivierungsenergie (Ea); Es erhöht nur die Anzahl der Partikel, die Ea übersteigt.",
        "fr": "La température ne modifie PAS l'énergie d'activation (Ea) ; Cela ne fait qu'augmenter le nombre de particules dépassant Ea.",
        "ru": "Температура НЕ меняет энергию активации (Ea); Это лишь увеличивает число частиц, превышающих Ea.",
        "ar": "درجة الحرارة لا تغير طاقة التنشيط (Ea)؛ إنه يزيد فقط من عدد الجزيئات التي تتجاوز Ea.",
        "zh": "温度不会改变活化能（Ea）；它只会增加超过 Ea 的粒子数量。",
        "ku": "Germahiya enerjiya aktîfkirinê (Ea) NA diguhere; Ew tenê jimara perçeyên ku ji Ea-yê bêtir zêde dike."
      },
      "trap": {
        "tr": "Sıcaklık artışı aktifleşme enerjisini düşürerek tepkimeyi hızlandırır.",
        "en": "Increasing temperature accelerates the reaction by decreasing the activation energy.",
        "de": "Eine Erhöhung der Temperatur beschleunigt die Reaktion durch Verringerung der Aktivierungsenergie.",
        "fr": "L'augmentation de la température accélère la réaction en diminuant l'énergie d'activation.",
        "ru": "Повышение температуры ускоряет реакцию за счет уменьшения энергии активации.",
        "ar": "تؤدي زيادة درجة الحرارة إلى تسريع التفاعل عن طريق تقليل طاقة التنشيط.",
        "zh": "升高温度可通过降低活化能来加速反应。",
        "ku": "Zêdebûna germahiyê bi kêmkirina enerjiya aktîfkirinê re reaksiyonê leztir dike."
      }
    },
    {
      "id": "u17-f08",
      "fact": {
        "tr": "Temas yüzeyi arttıkça (katıyı toz haline getirmek) sadece heterojen tepkimelerin hızı ve k sabiti artar.",
        "en": "As the contact surface increases (turning the solid into powder), only the rate of heterogeneous reactions and the constant k increase.",
        "de": "Mit zunehmender Kontaktfläche (Umwandlung des Feststoffs in Pulver) nehmen nur die Geschwindigkeit heterogener Reaktionen und die Konstante k zu.",
        "fr": "À mesure que la surface de contact augmente (transformant le solide en poudre), seules la vitesse des réactions hétérogènes et la constante k augmentent.",
        "ru": "По мере увеличения поверхности контакта (превращения твердого тела в порошок) увеличиваются только скорость гетерогенных реакций и константа k.",
        "ar": "مع زيادة سطح التلامس (تحويل المادة الصلبة إلى مسحوق)، يزداد فقط معدل التفاعلات غير المتجانسة والثابت k.",
        "zh": "随着接触表面的增加（将固体变成粉末），只有非均相反应的速率和常数 k 增加。",
        "ku": "Her ku rûbera pêwendiyê zêde dibe (veguhertina hişk di tozê de), tenê rêjeya reaksiyonên heterojen û k domdar zêde dibin."
      },
      "trap": {
        "tr": "Temas yüzeyinin artması homojen gaz tepkimelerinin hızını artırır.",
        "en": "Increasing the contact surface increases the rate of homogeneous gas reactions.",
        "de": "Durch die Vergrößerung der Kontaktfläche erhöht sich die Geschwindigkeit homogener Gasreaktionen.",
        "fr": "L'augmentation de la surface de contact augmente la vitesse des réactions gazeuses homogènes.",
        "ru": "Увеличение поверхности контакта увеличивает скорость гомогенных газовых реакций.",
        "ar": "زيادة سطح التلامس يزيد من معدل تفاعلات الغازات المتجانسة.",
        "zh": "增加接触表面可提高均质气体反应的速率。",
        "ku": "Zêdekirina rûbera têkiliyê rêjeya reaksiyonên gaza homojen zêde dike."
      }
    },
    {
      "id": "u17-f09",
      "fact": {
        "tr": "Ara ürün, bir basamakta oluşup sonraki basamakta harcanan maddedir; net tepkime denkleminde yer almaz.",
        "en": "An intermediate product is a substance formed in one step and consumed in the next step; It is not included in the net reaction equation.",
        "de": "Ein Zwischenprodukt ist ein Stoff, der in einem Schritt gebildet und im nächsten Schritt verbraucht wird; Es ist nicht in der Nettoreaktionsgleichung enthalten.",
        "fr": "Un produit intermédiaire est une substance formée au cours d’une étape et consommée à l’étape suivante ; Il n'est pas inclus dans l'équation de réaction nette.",
        "ru": "Промежуточный продукт — вещество, образующееся на одном этапе и потребляемое на следующем этапе; Он не входит в общее уравнение реакции.",
        "ar": "المنتج الوسيط هو مادة تتكون في خطوة واحدة ويتم استهلاكها في الخطوة التالية؛ ولا يتم تضمينه في معادلة التفاعل الصافية.",
        "zh": "中间产品是在一个步骤中形成并在下一步中消耗的物质；它不包括在净反应方程中。",
        "ku": "Hilbera navber maddeyek e ku di gavekê de çê dibe û di gava din de tê vexwarin; Ew di hevkêşeya reaksiyonê ya net de tune ye."
      },
      "trap": {
        "tr": "Ara ürün tepkimenin başında eklenen katalizördür.",
        "en": "The intermediate product is the catalyst added at the beginning of the reaction.",
        "de": "Das Zwischenprodukt ist der zu Beginn der Reaktion zugesetzte Katalysator.",
        "fr": "Le produit intermédiaire est le catalyseur ajouté au début de la réaction.",
        "ru": "Промежуточным продуктом является катализатор, добавляемый в начале реакции.",
        "ar": "المنتج الوسيط هو المحفز المضاف في بداية التفاعل.",
        "zh": "中间产物是反应开始时添加的催化剂。",
        "ku": "Hilbera navîn ew katalîzator e ku di destpêka reaksiyonê de tê zêdekirin."
      }
    },
    {
      "id": "u17-f10",
      "fact": {
        "tr": "Katalizör, tepkimeye girdiği gibi değişmeden çıkan maddedir; net tepkime denkleminde yer almaz.",
        "en": "A catalyst is a substance that leaves unchanged as it reacts; It is not included in the net reaction equation.",
        "de": "Ein Katalysator ist eine Substanz, die bei ihrer Reaktion unverändert bleibt; Es ist nicht in der Nettoreaktionsgleichung enthalten.",
        "fr": "Un catalyseur est une substance qui reste inchangée lors de sa réaction ; Il n'est pas inclus dans l'équation de réaction nette.",
        "ru": "Катализатор — это вещество, которое в ходе реакции остается неизменным; Он не входит в общее уравнение реакции.",
        "ar": "المحفز هو مادة لا تتغير أثناء تفاعلها؛ ولا يتم تضمينه في معادلة التفاعل الصافية.",
        "zh": "催化剂是一种在反应时保持不变的物质；它不包括在净反应方程中。",
        "ku": "Katalîzator maddeyek e ku her ku bertek nîşan dide bêguhêr dimîne; Ew di hevkêşeya reaksiyonê ya net de tune ye."
      },
      "trap": {
        "tr": "Katalizör tepkime sonunda tükenerek yok olur.",
        "en": "The catalyst is consumed and destroyed at the end of the reaction.",
        "de": "Am Ende der Reaktion wird der Katalysator verbraucht und zerstört.",
        "fr": "Le catalyseur est consommé et détruit à la fin de la réaction.",
        "ru": "Катализатор расходуется и разрушается в конце реакции.",
        "ar": "يتم استهلاك المحفز وتدميره في نهاية التفاعل.",
        "zh": "催化剂在反应结束时被消耗和破坏。",
        "ku": "Katalîzator di dawiya reaksiyonê de tê vexwarin û hilweşandin."
      }
    },
    {
      "id": "u17-f11",
      "fact": {
        "tr": "Hız sabiti k nın birimi: (L/mol)^(n-1) * s^-1 dir (n: tepkimenin toplam derecesi).",
        "en": "The unit of the rate constant k is: (L/mol)^(n-1) * s^-1 (n: total rate of reaction).",
        "de": "Die Einheit der Geschwindigkeitskonstante k ist: (L/mol)^(n-1) * s^-1 (n: Gesamtreaktionsgeschwindigkeit).",
        "fr": "L'unité de la constante de vitesse k est : (L/mol)^(n-1) * s^-1 (n : vitesse totale de réaction).",
        "ru": "Единица измерения константы скорости k: (л/моль)^(n-1) * с^-1 (n: общая скорость реакции).",
        "ar": "وحدة المعدل الثابت k هي: (L/mol)^(n-1) * s^-1 (n: المعدل الإجمالي للتفاعل).",
        "zh": "速率常数k的单位为：(L/mol)^(n-1) * s^-1（n：反应总速率）。",
        "ku": "Yekeya leza sabit k ev e: (L/mol)^(n-1) * s^-1 (n: rêjeya tevhev a reaksiyonê)."
      },
      "trap": {
        "tr": "Hız sabiti k nın birimi tepkime derecesinden bağımsızdır.",
        "en": "The unit of the rate constant k is independent of the degree of reaction.",
        "de": "Die Einheit der Geschwindigkeitskonstante k ist unabhängig vom Reaktionsgrad.",
        "fr": "L'unité de la constante de vitesse k est indépendante du degré de réaction.",
        "ru": "Единица константы скорости k не зависит от степени реакции.",
        "ar": "وحدة المعدل الثابت k مستقلة عن درجة التفاعل.",
        "zh": "速率常数k的单位与反应程度无关。",
        "ku": "Yekeya leza sabit k ji dereceya reaksiyonê serbixwe ye."
      }
    },
    {
      "id": "u17-f12",
      "fact": {
        "tr": "Tepkime derecesi, deneysel hız bağıntısındaki derişimlerin üsleri toplamıdır.",
        "en": "The degree of reaction is the sum of the exponents of the concentrations in the experimental rate equation.",
        "de": "Der Reaktionsgrad ist die Summe der Exponenten der Konzentrationen in der experimentellen Geschwindigkeitsgleichung.",
        "fr": "Le degré de réaction est la somme des exposants des concentrations dans l'équation de vitesse expérimentale.",
        "ru": "Степень реакции представляет собой сумму показателей концентраций в экспериментальном уравнении скорости.",
        "ar": "درجة التفاعل هي مجموع أسس التركيزات في معادلة المعدل التجريبي.",
        "zh": "反应程度是实验速率方程中浓度指数的总和。",
        "ku": "Dereceya reaksîyonê kombûna nîşanderên hûrbûnên di hevkêşeya rêjeya ceribandinê de ye."
      },
      "trap": {
        "tr": "Tepkime derecesi net tepkimenin stokiyometrik katsayıları toplamına eşittir.",
        "en": "The degree of reaction is equal to the sum of the stoichiometric coefficients of the net reaction.",
        "de": "Der Reaktionsgrad ist gleich der Summe der stöchiometrischen Koeffizienten der Nettoreaktion.",
        "fr": "Le degré de réaction est égal à la somme des coefficients stoechiométriques de la réaction nette.",
        "ru": "Степень реакции равна сумме стехиометрических коэффициентов чистой реакции.",
        "ar": "درجة التفاعل تساوي مجموع المعاملات المتكافئة للتفاعل الصافي.",
        "zh": "反应程度等于净反应的化学计量系数之和。",
        "ku": "Dereceya reaksîyonê bi kombûna hevberên stokyometrîkî yên reaksiyona tevnê re ye."
      }
    },
    {
      "id": "u17-f13",
      "fact": {
        "tr": "Molekülerite, tek bir basamakta tepkimeye giren tanecik sayısını ifade eder (unimoleküler, bimoleküler, trimoleküler).",
        "en": "Molecularity refers to the number of particles that react in a single step (unimolecular, bimolecular, trimolecular).",
        "de": "Unter Molekularität versteht man die Anzahl der Teilchen, die in einem einzigen Schritt reagieren (unimolekular, bimolekular, trimolekular).",
        "fr": "La moléculaire fait référence au nombre de particules qui réagissent en une seule étape (unimoléculaire, bimoléculaire, trimoléculaire).",
        "ru": "Молекулярность относится к числу частиц, которые реагируют за одну стадию (мономолекулярная, бимолекулярная, тримолекулярная).",
        "ar": "تشير الجزيئية إلى عدد الجزيئات التي تتفاعل في خطوة واحدة (أحادية الجزيئية، ثنائية الجزيئية، ثلاثية الجزيئات).",
        "zh": "分子度是指一步反应的粒子数量（单分子、双分子、​​三分子）。",
        "ku": "Molecularity hejmara keriyên ku di yek gavê de bertek nîşan didin (yekmolekular, bimolekular, trimolekular) vedibêje."
      },
      "trap": {
        "tr": "Molekülerite sadece deneysel hız bağıntısından bulunur.",
        "en": "Molecularity is found only from the empirical rate relation.",
        "de": "Molekularität lässt sich nur aus der empirischen Geschwindigkeitsbeziehung ermitteln.",
        "fr": "La molécule n'est trouvée qu'à partir de la relation de taux empirique.",
        "ru": "Молекулярность находится только из эмпирического соотношения скоростей.",
        "ar": "تم العثور على الجزيئية فقط من علاقة المعدل التجريبي.",
        "zh": "分子性只能从经验速率关系中找到。",
        "ku": "Molecularity tenê ji têkiliya rêjeya ezmûnî tê dîtin."
      }
    },
    {
      "id": "u17-f14",
      "fact": {
        "tr": "Tersiyer kalsiyum karbonat tozunun asitte çözünmesi parça kireç taşına göre temas yüzeyi nedeniyle çok daha hızlıdır.",
        "en": "Tertiary calcium carbonate powder dissolves in acid much faster than lump limestone due to its contact surface.",
        "de": "Tertiäres Calciumcarbonat-Pulver löst sich aufgrund seiner Kontaktoberfläche viel schneller in Säure auf als Stückkalkstein.",
        "fr": "La poudre de carbonate de calcium tertiaire se dissout dans l'acide beaucoup plus rapidement que le calcaire en morceaux en raison de sa surface de contact.",
        "ru": "Порошок третичного карбоната кальция растворяется в кислоте гораздо быстрее, чем кусковый известняк, благодаря своей контактной поверхности.",
        "ar": "يذوب مسحوق كربونات الكالسيوم الثلاثي في ​​الحمض بشكل أسرع بكثير من الحجر الجيري المقطوع بسبب سطح ملامسته.",
        "zh": "由于其接触表面，叔碳酸钙粉末在酸中的溶解速度比块状石灰石快得多。",
        "ku": "Toza karbonat a kalsiyûmê ya sêyem ji ber rûbera pêwendiya wê di asîdê de ji kevirê kilsinî pir zûtir dihele."
      },
      "trap": {
        "tr": "Katıyı toz haline getirmek açığa çıkan gaz miktarını artırır.",
        "en": "Turning the solid into powder increases the amount of gas released.",
        "de": "Durch die Umwandlung des Feststoffs in Pulver erhöht sich die Menge an freigesetztem Gas.",
        "fr": "La transformation du solide en poudre augmente la quantité de gaz libérée.",
        "ru": "Превращение твердого вещества в порошок увеличивает количество выделяемого газа.",
        "ar": "يؤدي تحويل المادة الصلبة إلى مسحوق إلى زيادة كمية الغاز المنبعثة.",
        "zh": "将固体变成粉末会增加释放的气体量。",
        "ku": "Zivirîna zirav di tozê de mîqdara gaza ku tê berdan zêde dike."
      }
    },
    {
      "id": "u17-f15",
      "fact": {
        "tr": "Hız sabiti k yı değiştiren faktörler: Sıcaklık, Katalizör, Temas yüzeyi ve Maddenin cinsidir (TSKM).",
        "en": "Factors that change the rate constant k: Temperature, Catalyst, Contact surface and Type of Substance (TSKM).",
        "de": "Faktoren, die die Geschwindigkeitskonstante k verändern: Temperatur, Katalysator, Kontaktoberfläche und Stoffart (TSKM).",
        "fr": "Facteurs qui modifient la constante de vitesse k : température, catalyseur, surface de contact et type de substance (TSKM).",
        "ru": "Факторы, изменяющие константу скорости k: Температура, Катализатор, Поверхность контакта и Тип вещества (ТСКМ).",
        "ar": "العوامل التي تغير ثابت المعدل k: درجة الحرارة، المحفز، سطح التلامس ونوع المادة (TSKM).",
        "zh": "改变速率常数 k 的因素：温度、催化剂、接触表面和物质类型 (TSKM)。",
        "ku": "Faktorên ku domdariya rêje k diguherînin: Germahiya, Katalîzator, Rûyê Têkiliyê û Cureya Madeyê (TSKM)."
      },
      "trap": {
        "tr": "Reaktif derişimi arttıkça hız sabiti k büyür.",
        "en": "As the reagent concentration increases, the rate constant k increases.",
        "de": "Mit zunehmender Reagenzkonzentration erhöht sich die Geschwindigkeitskonstante k.",
        "fr": "À mesure que la concentration du réactif augmente, la constante de vitesse k augmente.",
        "ru": "С увеличением концентрации реагента константа скорости k увеличивается.",
        "ar": "ومع زيادة تركيز الكاشف، يزداد المعدل الثابت k.",
        "zh": "随着试剂浓度增加，速率常数 k 增加。",
        "ku": "Her ku kombûna reagentê zêde dibe, rêjeya domdar k zêde dibe."
      },
      "osymTip": {
        "tr": "Derişim hızı artırır, k sabitini DEĞİŞTİRMEZ!",
        "en": "Concentration increases the rate, it does NOT change the constant k!",
        "de": "Konzentration erhöht die Geschwindigkeit, sie verändert NICHT die Konstante k!",
        "fr": "La concentration augmente le taux, elle ne change PAS la constante k !",
        "ru": "Концентрация увеличивает скорость, но НЕ меняет константу k!",
        "ar": "التركيز يزيد المعدل، ولا يغير الثابت k!",
        "zh": "浓度会增加速率，但不会改变常数 k！",
        "ku": "Konsansasyon rêjeyê zêde dike, k-ya sabît NAguherîne!"
      }
    },
    {
      "id": "u17-f16",
      "fact": {
        "tr": "İyonlar arası zıt yüklü tepkimeler bağ kopması gerektirmediğinden oda koşullarında son derece hızlı gerçekleşir.",
        "en": "Since reactions between ions with opposite charges do not require bond breaking, they occur extremely quickly at room conditions.",
        "de": "Da Reaktionen zwischen Ionen mit entgegengesetzter Ladung keinen Bindungsbruch erfordern, laufen sie bei Raumbedingungen extrem schnell ab.",
        "fr": "Étant donné que les réactions entre ions de charges opposées ne nécessitent pas de rupture de liaison, elles se produisent extrêmement rapidement dans des conditions ambiantes.",
        "ru": "Поскольку реакции между ионами с противоположными зарядами не требуют разрыва связи, в комнатных условиях они протекают чрезвычайно быстро.",
        "ar": "وبما أن التفاعلات بين الأيونات ذات الشحنات المعاكسة لا تتطلب كسر الروابط، فإنها تحدث بسرعة كبيرة في ظروف الغرفة.",
        "zh": "由于带相反电荷的离子之间的反应不需要键断裂，因此它们在室温条件下发生得非常快。",
        "ku": "Ji ber ku reaksiyonên di navbera îyonên bi barên berevajî de ne hewceyî şikandina girêdanê ne, ew di şert û mercên odeyê de pir zû çêdibin."
      },
      "trap": {
        "tr": "Kovalent bağların kırıldığı organik tepkimeler anlık patlama şeklinde biter.",
        "en": "Organic reactions in which covalent bonds are broken end in an instantaneous explosion.",
        "de": "Organische Reaktionen, bei denen kovalente Bindungen aufgebrochen werden, enden in einer sofortigen Explosion.",
        "fr": "Les réactions organiques dans lesquelles les liaisons covalentes sont rompues se terminent par une explosion instantanée.",
        "ru": "Органические реакции, при которых ковалентные связи разрываются, заканчиваются мгновенным взрывом.",
        "ar": "التفاعلات العضوية التي يتم فيها كسر الروابط التساهمية تنتهي بانفجار لحظي.",
        "zh": "共价键断裂的有机反应会在瞬间爆炸中结束。",
        "ku": "Reaksiyonên organîk ên ku tê de girêdanên kovalentî diqelibin bi teqînek bilez bi dawî dibin."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u17-c01",
      "conceptA": {
        "tr": "Katalizör",
        "en": "catalyst",
        "de": "Katalysator",
        "fr": "catalyseur",
        "ru": "катализатор",
        "ar": "محفز",
        "zh": "催化剂",
        "ku": "katalîzator"
      },
      "conceptB": {
        "tr": "Sıcaklık",
        "en": "temperature",
        "de": "Temperatur",
        "fr": "température",
        "ru": "температура",
        "ar": "درجة الحرارة",
        "zh": "温度",
        "ku": "germahîya"
      },
      "distinction": {
        "tr": "Katalizör Ea yı düşürerek k yı artırır; sıcaklık Ea yı değiştirmeden aşan tanecik sayısını ve k yı artırır.",
        "en": "The catalyst increases k by decreasing Ea; Temperature increases the number of particles and k exceeding Ea without changing it.",
        "de": "Der Katalysator erhöht k durch Verringerung von Ea; Die Temperatur erhöht die Anzahl der Teilchen und k über Ea hinaus, ohne sie zu verändern.",
        "fr": "Le catalyseur augmente k en diminuant Ea ; La température augmente le nombre de particules et k dépasse Ea sans le modifier.",
        "ru": "Катализатор увеличивает k за счет уменьшения Ea; Температура увеличивает число частиц и k, превышающее Ea, не изменяя его.",
        "ar": "يزيد المحفز k عن طريق تقليل Ea؛ تزيد درجة الحرارة من عدد الجزيئات و k تتجاوز Ea دون تغييرها.",
        "zh": "催化剂通过降低Ea来增加k；温度会增加粒子数量，并且 k 会超过 Ea，而不会改变它。",
        "ku": "Katalîzator k bi kêmkirina Ea zêde dike; Germahî bêyî ku biguhere, hejmara pirtikan û k ji Ea zêdetir dike."
      }
    },
    {
      "id": "u17-c02",
      "conceptA": {
        "tr": "Ara Ürün",
        "en": "Intermediate Product",
        "de": "Zwischenprodukt",
        "fr": "Produit intermédiaire",
        "ru": "Промежуточный продукт",
        "ar": "المنتج الوسيط",
        "zh": "中间产品",
        "ku": "Hilbera Navîn"
      },
      "conceptB": {
        "tr": "Katalizör",
        "en": "catalyst",
        "de": "Katalysator",
        "fr": "catalyseur",
        "ru": "катализатор",
        "ar": "محفز",
        "zh": "催化剂",
        "ku": "katalîzator"
      },
      "distinction": {
        "tr": "Ara ürün önce oluşup sonra harcanır; katalizör önce girip sonra aynen çıkar.",
        "en": "The intermediate product is first formed and then consumed; The catalyst first enters and then comes out in the same way.",
        "de": "Das Zwischenprodukt wird zunächst gebildet und dann verbraucht; Der Katalysator tritt zuerst ein und kommt dann auf die gleiche Weise wieder heraus.",
        "fr": "Le produit intermédiaire est d’abord formé puis consommé ; Le catalyseur entre d’abord puis ressort de la même manière.",
        "ru": "Промежуточный продукт сначала образуется, а затем потребляется; Катализатор сначала входит, а затем выходит таким же образом.",
        "ar": "يتم أولاً تكوين المنتج الوسيط ومن ثم استهلاكه؛ يدخل المحفز أولاً ثم يخرج بنفس الطريقة.",
        "zh": "中间产品先形成，后消费；催化剂以同样的方式先进入，然后出来。",
        "ku": "Berhema navberê pêşî çêdibe û paşê tê vexwarin; Katalîzator ewil dikeve hundir û paşê jî bi heman awayî derdikeve."
      }
    },
    {
      "id": "u17-c03",
      "conceptA": {
        "tr": "Tepkime Hızı (r)",
        "en": "Reaction Rate (r)",
        "de": "Reaktionsgeschwindigkeit (r)",
        "fr": "Taux de réaction (r)",
        "ru": "Скорость реакции (r)",
        "ar": "معدل التفاعل (ص)",
        "zh": "反应速率 (r)",
        "ku": "Rêjeya Reaksiyonê (r)"
      },
      "conceptB": {
        "tr": "Hız Sabiti (k)",
        "en": "Rate Constant (k)",
        "de": "Ratenkonstante (k)",
        "fr": "Constante de taux (k)",
        "ru": "Константа скорости (k)",
        "ar": "معدل ثابت (ك)",
        "zh": "速率常数 (k)",
        "ku": "Rêjeya domdar (k)"
      },
      "distinction": {
        "tr": "Tepkime hızı derişimle değişir; hız sabiti k derişimden bağımsız olup sıcaklık, katalizör ve temas yüzeyiyle değişir.",
        "en": "The reaction rate varies with concentration; The rate constant k is independent of concentration and varies with temperature, catalyst and contact surface.",
        "de": "Die Reaktionsgeschwindigkeit variiert je nach Konzentration; Die Geschwindigkeitskonstante k ist konzentrationsunabhängig und variiert je nach Temperatur, Katalysator und Kontaktoberfläche.",
        "fr": "La vitesse de réaction varie avec la concentration ; La constante de vitesse k est indépendante de la concentration et varie en fonction de la température, du catalyseur et de la surface de contact.",
        "ru": "Скорость реакции зависит от концентрации; Константа скорости k не зависит от концентрации и меняется в зависимости от температуры, катализатора и контактной поверхности.",
        "ar": "يختلف معدل التفاعل مع التركيز. معدل ثابت k مستقل عن التركيز ويختلف باختلاف درجة الحرارة والمحفز وسطح التلامس.",
        "zh": "反应速率随浓度变化；速率常数 k 与浓度无关，并随温度、催化剂和接触表面而变化。",
        "ku": "Rêjeya reaksiyonê li gorî konsantreyê diguhere; Rêjeya sabît k ji konsantreyê serbixwe ye û li gor germahî, katalîzator û rûbera têkilîyê diguhere."
      }
    },
    {
      "id": "u17-c04",
      "conceptA": {
        "tr": "Ortalama Hız",
        "en": "Average Speed",
        "de": "Durchschnittsgeschwindigkeit",
        "fr": "Vitesse moyenne",
        "ru": "Средняя скорость",
        "ar": "متوسط السرعة",
        "zh": "平均速度",
        "ku": "Average Speed"
      },
      "conceptB": {
        "tr": "Anlık Hız",
        "en": "Instantaneous Speed",
        "de": "Momentane Geschwindigkeit",
        "fr": "Vitesse instantanée",
        "ru": "Мгновенная скорость",
        "ar": "السرعة اللحظية",
        "zh": "瞬时速度",
        "ku": "Leza Instantaneous"
      },
      "distinction": {
        "tr": "Ortalama hız belirli bir zaman aralığındaki derişim değişimdir; anlık hız derişim-zaman eğrisine çizilen teğetin eğimidir.",
        "en": "Average velocity is the change in concentration over a certain period of time; The instantaneous velocity is the slope of the tangent drawn to the concentration-time curve.",
        "de": "Die Durchschnittsgeschwindigkeit ist die Konzentrationsänderung über einen bestimmten Zeitraum; Die Momentangeschwindigkeit ist die Steigung der Tangente an die Konzentrations-Zeit-Kurve.",
        "fr": "La vitesse moyenne est le changement de concentration sur une certaine période de temps ; La vitesse instantanée est la pente de la tangente tracée à la courbe concentration-temps.",
        "ru": "Средняя скорость — это изменение концентрации за определенный период времени; Мгновенная скорость представляет собой наклон касательной, проведенной к кривой зависимости концентрации от времени.",
        "ar": "السرعة المتوسطة هي التغير في التركيز خلال فترة زمنية معينة. السرعة اللحظية هي ميل المماس المرسوم لمنحنى التركيز-الزمن.",
        "zh": "平均速度是一定时间内浓度的变化；瞬时速度是浓度-时间曲线所画的切线的斜率。",
        "ku": "Leza navîn guheztina konsantrasyonê di heyamek diyarkirî de ye; Leza tavilê şibaka tangentê ye ku ber bi qertafa komkirin-dem ve tê kişandin."
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
        "ar": "محفز متجانس",
        "zh": "均相催化剂",
        "ku": "Homogeneous Catalyst"
      },
      "conceptB": {
        "tr": "Heterojen Katalizör",
        "en": "Heterogeneous Catalyst",
        "de": "Heterogener Katalysator",
        "fr": "Catalyseur hétérogène",
        "ru": "Гетерогенный катализатор",
        "ar": "محفز غير متجانس",
        "zh": "多相催化剂",
        "ku": "Katalîzatorê Heterogeneous"
      },
      "distinction": {
        "tr": "Homojen katalizör reaktiflerle aynı fiziksel fazdadır; heterojen katalizör reaktiflerden farklı fiziksel fazdadır (ör. katı Pt).",
        "en": "The homogeneous catalyst is in the same physical phase as the reactants; The heterogeneous catalyst is in a different physical phase from the reactants (e.g. solid Pt).",
        "de": "Der homogene Katalysator befindet sich in derselben physikalischen Phase wie die Reaktanten; Der heterogene Katalysator befindet sich in einer anderen physikalischen Phase als die Reaktanten (z. B. festes Pt).",
        "fr": "Le catalyseur homogène est dans la même phase physique que les réactifs ; Le catalyseur hétérogène se trouve dans une phase physique différente de celle des réactifs (par exemple Pt solide).",
        "ru": "Гомогенный катализатор находится в той же физической фазе, что и реагенты; Гетерогенный катализатор находится в другой физической фазе, чем реагенты (например, твердая Pt).",
        "ar": "يكون المحفز المتجانس في نفس المرحلة الفيزيائية مثل المواد المتفاعلة؛ يكون المحفز غير المتجانس في مرحلة فيزيائية مختلفة عن المواد المتفاعلة (على سبيل المثال، Pt الصلب).",
        "zh": "均相催化剂与反应物处于同一物理相；非均相催化剂与反应物（例如固体 Pt）处于不同的物理相。",
        "ku": "Katalîzatora homojen wekî reaktantan di heman qonaxa fizîkî de ye; Katalîzatora heterojen di qonaxek fizîkî ya cihêreng de ji reaktantan e (mînak Pt hişk)."
      }
    },
    {
      "id": "u17-c06",
      "conceptA": {
        "tr": "Etkin Çarpışma",
        "en": "Active Collision",
        "de": "Aktive Kollision",
        "fr": "Collision active",
        "ru": "Активное столкновение",
        "ar": "الاصطدام النشط",
        "zh": "主动碰撞",
        "ku": "Active Collision"
      },
      "conceptB": {
        "tr": "Esnek Çarpışma",
        "en": "Flexible Collision",
        "de": "Flexible Kollision",
        "fr": "Collision flexible",
        "ru": "Гибкое столкновение",
        "ar": "الاصطدام المرن",
        "zh": "灵活碰撞",
        "ku": "Pevçûnek Flexible"
      },
      "distinction": {
        "tr": "Etkin çarpışma uygun geometride ve yeterli eşik enerjisiyle ürün veren çarpışmadır; esnek çarpışmada ürün oluşmaz.",
        "en": "An effective collision is one that produces a product with appropriate geometry and sufficient threshold energy; In an elastic collision, no product is formed.",
        "de": "Bei einer effektiven Kollision entsteht ein Produkt mit geeigneter Geometrie und ausreichender Schwellenenergie; Bei einem elastischen Stoß entsteht kein Produkt.",
        "fr": "Une collision efficace est celle qui produit un produit avec une géométrie appropriée et une énergie de seuil suffisante ; Lors d’une collision élastique, aucun produit ne se forme.",
        "ru": "Эффективное столкновение — это столкновение, в результате которого образуется продукт соответствующей геометрии и достаточной пороговой энергии; При упругом столкновении продукт не образуется.",
        "ar": "الاصطدام الفعال هو الذي ينتج منتجًا ذو هندسة مناسبة وطاقة عتبة كافية؛ في التصادم المرن لا يتشكل أي منتج.",
        "zh": "有效的碰撞是指产生具有适当几何形状和足够阈值能量的产物的碰撞；在弹性碰撞中，不会形成任何产物。",
        "ku": "Pevçûnek bi bandor ew e ku hilberek bi geometriya guncav û enerjiya behrê ya têr hildiberîne; Di pevçûnek elastîk de, hilberek çê nabe."
      }
    },
    {
      "id": "u17-c07",
      "conceptA": {
        "tr": "Tepkime Derecesi (Mertebesi)",
        "en": "Degree of Reactivity",
        "de": "Grad der Reaktivität",
        "fr": "Degré de réactivité",
        "ru": "Степень реактивности",
        "ar": "درجة التفاعل",
        "zh": "反应度",
        "ku": "Dereceya Reaksiyonê"
      },
      "conceptB": {
        "tr": "Molekülerite",
        "en": "molecularity",
        "de": "Molekularität",
        "fr": "moléculaire",
        "ru": "молекулярность",
        "ar": "الجزيئية",
        "zh": "分子性",
        "ku": "molecularity"
      },
      "distinction": {
        "tr": "Derece deneysel hız denklemindeki üslerin toplamıdır; molekülerite net tepkimeye giren tanecik sayısıdır.",
        "en": "Degree is the sum of the exponents in the experimental rate equation; Molecularity is the net number of reacting particles.",
        "de": "Der Grad ist die Summe der Exponenten in der experimentellen Geschwindigkeitsgleichung; Molekularität ist die Nettozahl der reagierenden Teilchen.",
        "fr": "Le degré est la somme des exposants de l'équation du taux expérimental ; La molécule est le nombre net de particules en réaction.",
        "ru": "Степень представляет собой сумму показателей в экспериментальном уравнении скорости; Молекулярность – это чистое число реагирующих частиц.",
        "ar": "الدرجة هي مجموع الأسس في معادلة المعدل التجريبي؛ الجزيئية هي العدد الصافي للجزيئات المتفاعلة.",
        "zh": "度数是实验速率方程中的指数之和；分子度是反应粒子的净数量。",
        "ku": "Derece ji hevkêşana rêjeya ceribandinê kombûna nîşanderan e; Molecularity jimareya net ya pirtikên reaksiyonê ye."
      }
    },
    {
      "id": "u17-c08",
      "conceptA": {
        "tr": "Katalizör",
        "en": "catalyst",
        "de": "Katalysator",
        "fr": "catalyseur",
        "ru": "катализатор",
        "ar": "محفز",
        "zh": "催化剂",
        "ku": "katalîzator"
      },
      "conceptB": {
        "tr": "Sıcaklık",
        "en": "temperature",
        "de": "Temperatur",
        "fr": "température",
        "ru": "температура",
        "ar": "درجة الحرارة",
        "zh": "温度",
        "ku": "germahîya"
      },
      "distinction": {
        "tr": "Katalizör Ea yı düşürerek k yı artırır; sıcaklık Ea yı değiştirmeden aşan tanecik sayısını ve k yı artırır.",
        "en": "The catalyst increases k by decreasing Ea; Temperature increases the number of particles and k exceeding Ea without changing it.",
        "de": "Der Katalysator erhöht k durch Verringerung von Ea; Die Temperatur erhöht die Anzahl der Teilchen und k über Ea hinaus, ohne sie zu verändern.",
        "fr": "Le catalyseur augmente k en diminuant Ea ; La température augmente le nombre de particules et k dépasse Ea sans le modifier.",
        "ru": "Катализатор увеличивает k за счет уменьшения Ea; Температура увеличивает число частиц и k, превышающее Ea, не изменяя его.",
        "ar": "يزيد المحفز k عن طريق تقليل Ea؛ تزيد درجة الحرارة من عدد الجزيئات و k تتجاوز Ea دون تغييرها.",
        "zh": "催化剂通过降低Ea来增加k；温度会增加粒子数量，并且 k 会超过 Ea，而不会改变它。",
        "ku": "Katalîzator k bi kêmkirina Ea zêde dike; Germahî bêyî ku biguhere, hejmara pirtikan û k ji Ea zêdetir dike."
      }
    }
  ],
  "sequences": [
    {
      "id": "u17-s01",
      "title": {
        "tr": "Deneysel Hız Bağıntısı Bulma",
        "en": "Finding an Experimental Speed Relationship",
        "de": "Finden einer experimentellen Geschwindigkeitsbeziehung",
        "fr": "Trouver une relation de vitesse expérimentale",
        "ru": "Нахождение экспериментальной зависимости скорости",
        "ar": "العثور على علاقة السرعة التجريبية",
        "zh": "寻找实验速度关系",
        "ku": "Dîtina Têkiliyek Leza Ezmûnî"
      },
      "steps": [
        {
          "tr": "Bir reaktifin sabit tutulduğu iki deneyi seç",
          "en": "Select two experiments in which one reagent is kept constant",
          "de": "Wählen Sie zwei Experimente aus, bei denen ein Reagenz konstant gehalten wird",
          "fr": "Sélectionnez deux expériences dans lesquelles un réactif est maintenu constant",
          "ru": "Выберите два эксперимента, в которых один реагент остается постоянным.",
          "ar": "اختر تجربتين يكون فيهما كاشف واحد ثابتًا",
          "zh": "选择两个实验，其中一种试剂保持恒定",
          "ku": "Du ceribandinên ku tê de yek reagent sabît tê girtin hilbijêrin"
        },
        {
          "tr": "Diğer reaktifin derişim katı ile hız katını oranla",
          "en": "Ratio the concentration times and rate times of the other reagent.",
          "de": "Setzen Sie die Konzentrationszeiten und Geschwindigkeitszeiten des anderen Reagenz ins Verhältnis.",
          "fr": "Rapportez les temps de concentration et les temps de débit de l’autre réactif.",
          "ru": "Соотнесите время концентрации и время скорости другого реагента.",
          "ar": "قم بحساب أوقات التركيز وأوقات معدل الكاشف الآخر.",
          "zh": "将其他试剂的浓缩倍数与速率倍数进行比值。",
          "ku": "Rêjeya demên komkirinê û demên rêjeya reagenta din."
        },
        {
          "tr": "Reaktifin üssünü belirle",
          "en": "Determine the exponent of the reagent",
          "de": "Bestimmen Sie den Exponenten des Reagenzes",
          "fr": "Déterminer l'exposant du réactif",
          "ru": "Определить показатель степени реагента",
          "ar": "تحديد الأس للكاشف",
          "zh": "确定试剂的指数",
          "ku": "Rêjeya reagentê diyar bike"
        },
        {
          "tr": "Tüm reaktifler için tekrarlayıp k sabitini ve birimini hesapla",
          "en": "Repeat for all reagents and calculate the constant k and its unit",
          "de": "Wiederholen Sie dies für alle Reagenzien und berechnen Sie die Konstante k und ihre Einheit",
          "fr": "Répétez pour tous les réactifs et calculez la constante k et son unité",
          "ru": "Повторите для всех реагентов и рассчитайте константу k и ее единицу измерения.",
          "ar": "كرر ذلك لجميع الكواشف واحسب الثابت k ووحدته",
          "zh": "对所有试剂重复并计算常数 k 及其单位",
          "ku": "Ji bo hemî reagentan dubare bikin û k-ya sabît û yekeya wê hesab bikin"
        }
      ]
    },
    {
      "id": "u17-s02",
      "title": {
        "tr": "Reaksiyon Hızına Sıcaklık ve Basınç Etkisi",
        "en": "Effect of Temperature and Pressure on Reaction Rate",
        "de": "Einfluss von Temperatur und Druck auf die Reaktionsgeschwindigkeit",
        "fr": "Effet de la température et de la pression sur la vitesse de réaction",
        "ru": "Влияние температуры и давления на скорость реакции",
        "ar": "تأثير درجة الحرارة والضغط على معدل التفاعل",
        "zh": "温度和压力对反应速率的影响",
        "ku": "Bandora germahî û zextê li ser rêjeya reaksiyonê"
      },
      "steps": [
        {
          "tr": "Sıcaklık artırıldığında taneciklerin ortalama kinetik enerjisi artar",
          "en": "When the temperature is increased, the average kinetic energy of the particles increases.",
          "de": "Wenn die Temperatur erhöht wird, erhöht sich die durchschnittliche kinetische Energie der Partikel.",
          "fr": "Lorsque la température augmente, l’énergie cinétique moyenne des particules augmente.",
          "ru": "При повышении температуры средняя кинетическая энергия частиц увеличивается.",
          "ar": "عند زيادة درجة الحرارة، يزداد متوسط الطاقة الحركية للجزيئات.",
          "zh": "当温度升高时，颗粒的平均动能增加。",
          "ku": "Dema ku germahî zêde dibe, enerjiya kînetîk a navîn ya pirtikan zêde dibe."
        },
        {
          "tr": "Eşik enerjisini aşan etkin çarpışma sayısı artar",
          "en": "The number of effective collisions exceeding the threshold energy increases",
          "de": "Die Zahl der effektiven Kollisionen, die die Schwellenenergie überschreiten, steigt",
          "fr": "Le nombre de collisions effectives dépassant l'énergie seuil augmente",
          "ru": "Увеличивается число эффективных столкновений, превышающих пороговую энергию.",
          "ar": "يزداد عدد الاصطدامات الفعالة التي تتجاوز عتبة الطاقة",
          "zh": "超过阈值能量的有效碰撞次数增加",
          "ku": "Hejmara pevçûnên bandor ên ku ji enerjiyê derbas dibe zêde dibe"
        },
        {
          "tr": "Hız sabiti k'nın değeri büyür ve tepkime hızlanır",
          "en": "The value of the rate constant k increases and the reaction accelerates.",
          "de": "Der Wert der Geschwindigkeitskonstante k steigt und die Reaktion beschleunigt sich.",
          "fr": "La valeur de la constante de vitesse k augmente et la réaction s'accélère.",
          "ru": "Значение константы скорости k увеличивается и реакция ускоряется.",
          "ar": "تزداد قيمة ثابت المعدل k ويتسارع التفاعل.",
          "zh": "速率常数k值增大，反应加速。",
          "ku": "Nirxa rêjeyê k zêde dibe û reaksîyon lez dibe."
        },
        {
          "tr": "Gaz tepkimesinde basınç artışı birim hacimdeki tanecik sayısını artırarak hızı artırır",
          "en": "In a gas reaction, increasing pressure increases the rate by increasing the number of particles in the unit volume.",
          "de": "Bei einer Gasreaktion erhöht ein zunehmender Druck die Geschwindigkeit, indem die Anzahl der Partikel im Einheitsvolumen erhöht wird.",
          "fr": "Dans une réaction gazeuse, l’augmentation de la pression augmente la vitesse en augmentant le nombre de particules dans l’unité de volume.",
          "ru": "В газовой реакции увеличение давления увеличивает скорость за счет увеличения количества частиц в единице объема.",
          "ar": "في تفاعل الغاز، تؤدي زيادة الضغط إلى زيادة المعدل عن طريق زيادة عدد الجزيئات في وحدة الحجم.",
          "zh": "在气体反应中，增加压力通过增加单位体积中的颗粒数量来提高速率。",
          "ku": "Di reaksiyona gazê de, zêdebûna zextê bi zêdebûna hejmara keriyên di qebareya yekîneyê de rêjeyê zêde dike."
        }
      ]
    },
    {
      "id": "u17-s03",
      "title": {
        "tr": "Mekanizmalı Tepkimede Basamak Analizi",
        "en": "Step Analysis in Mechanized Reaction",
        "de": "Schrittanalyse in der mechanisierten Reaktion",
        "fr": "Analyse des étapes dans une réaction mécanisée",
        "ru": "Ступенчатый анализ механизированной реакции",
        "ar": "تحليل الخطوة في التفاعل الميكانيكي",
        "zh": "机械化反应的步骤分析",
        "ku": "Di Reaksiyona Mekanîzekirî de Analîza Gav"
      },
      "steps": [
        {
          "tr": "Tepkimenin yavaş ve hızlı basamakları incelenir",
          "en": "The slow and fast steps of the reaction are examined",
          "de": "Es werden die langsamen und schnellen Schritte der Reaktion untersucht",
          "fr": "Les étapes lentes et rapides de la réaction sont examinées",
          "ru": "Рассмотрены медленная и быстрая стадии реакции.",
          "ar": "يتم فحص خطوات التفاعل البطيئة والسريعة",
          "zh": "检查反应的慢步骤和快步骤",
          "ku": "Pêngavên hêdî û bilez ên reaksiyonê têne lêkolîn kirin"
        },
        {
          "tr": "Hız bağıntısı yavaş basamağın girenlerine göre yazılır",
          "en": "The velocity relation is written according to the inputs of the slow step.",
          "de": "Die Geschwindigkeitsrelation wird entsprechend den Eingaben des langsamen Schritts geschrieben.",
          "fr": "La relation de vitesse s'écrit en fonction des entrées du pas lent.",
          "ru": "Зависимость скоростей записывается по входам медленного шага.",
          "ar": "تتم كتابة علاقة السرعة وفقا لمدخلات الخطوة البطيئة.",
          "zh": "速度关系是根据慢步的输入编写的。",
          "ku": "Têkiliya lezê li gorî ketina gavê hêdî tê nivîsandin."
        },
        {
          "tr": "Katalizör ve ara ürün molekülleri tespit edilir",
          "en": "Catalyst and intermediate product molecules are detected",
          "de": "Katalysator- und Zwischenproduktmoleküle werden erfasst",
          "fr": "Les molécules de catalyseur et de produit intermédiaire sont détectées",
          "ru": "Обнаружение молекул катализатора и промежуточного продукта",
          "ar": "تم الكشف عن جزيئات المنتج المحفز والوسيط",
          "zh": "检测催化剂和中间产物分子",
          "ku": "Molekulên katalîzator û hilberên navîn têne kifş kirin"
        },
        {
          "tr": "Basamaklar toplanarak net tepkime denklemi yazılır",
          "en": "The net reaction equation is written by adding the steps",
          "de": "Die Nettoreaktionsgleichung wird durch Addition der Schritte geschrieben",
          "fr": "L'équation de réaction nette s'écrit en ajoutant les étapes",
          "ru": "Чистое уравнение реакции записывается сложением ступеней",
          "ar": "تتم كتابة معادلة التفاعل الصافية عن طريق إضافة الخطوات",
          "zh": "通过添加以下步骤编写净反应方程",
          "ku": "Hevkêşana reaksiyona tevnvî bi lêzêdekirina gavan tê nivîsandin"
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
        "ar": "تأثير المحفز على التفاعل",
        "zh": "催化剂对反应的影响",
        "ku": "Bandora Katalîzatorê li ser Reaksiyonê"
      },
      "steps": [
        {
          "tr": "Katalizör tepkime mekanizmasını değiştirir",
          "en": "Catalyst changes the reaction mechanism",
          "de": "Der Katalysator verändert den Reaktionsmechanismus",
          "fr": "Le catalyseur modifie le mécanisme de réaction",
          "ru": "Катализатор меняет механизм реакции",
          "ar": "يغير المحفز آلية التفاعل",
          "zh": "催化剂改变反应机理",
          "ku": "Katalîzator mekanîzmaya reaksiyonê diguherîne"
        },
        {
          "tr": "Yeni bir yoldan daha düşük aktifleşme enerjisi (Ea) sağlar",
          "en": "Provides lower activation energy (Ea) in a new way",
          "de": "Bietet auf neue Weise eine geringere Aktivierungsenergie (Ea).",
          "fr": "Fournit une énergie d’activation (Ea) inférieure d’une nouvelle manière",
          "ru": "Обеспечивает более низкую энергию активации (Ea) новым способом.",
          "ar": "يوفر طاقة تنشيط أقل (Ea) بطريقة جديدة",
          "zh": "以新方式提供更低的活化能 (Ea)",
          "ku": "Enerjiya çalakkirina kêmtir (Ea) bi rengek nû peyda dike"
        },
        {
          "tr": "Eşik enerjisini aşan tanecik sayısı artar",
          "en": "The number of particles exceeding the threshold energy increases",
          "de": "Die Anzahl der Teilchen, die die Schwellenenergie überschreiten, nimmt zu",
          "fr": "Le nombre de particules dépassant l'énergie seuil augmente",
          "ru": "Число частиц, превышающих пороговую энергию, увеличивается",
          "ar": "يزداد عدد الجزيئات التي تتجاوز عتبة الطاقة",
          "zh": "超过阈值能量的粒子数量增加",
          "ku": "Hejmara keriyên ku ji enerjiyê derbas dibin zêde dibe"
        },
        {
          "tr": "Tepkime hızlanır ancak entalpi Delta H değişmez",
          "en": "The reaction accelerates but the enthalpy Delta H does not change",
          "de": "Die Reaktion beschleunigt sich, aber die Enthalpie Delta H ändert sich nicht",
          "fr": "La réaction s'accélère mais l'enthalpie Delta H ne change pas",
          "ru": "Реакция ускоряется, но энтальпия Delta H не меняется.",
          "ar": "يتسارع التفاعل لكن المحتوى الحراري Delta H لا يتغير",
          "zh": "反应加速但焓 Delta H 不变",
          "ku": "Reaksîyon lez dibe lê entalpî Delta H naguhere"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u17-twin01",
      "stem": {
        "tr": "Bir tepkimenin hız denklemi r = k * [A]^2 * [B] olduğuna göre hız sabiti k nın birimi aşağıdakilerden hangisidir?",
        "en": "Since the rate equation of a reaction is r = k * [A]^2 * [B], which of the following is the unit of the rate constant k?",
        "de": "Da die Geschwindigkeitsgleichung einer Reaktion r = k * [A]^2 * [B] lautet, welche der folgenden ist die Einheit der Geschwindigkeitskonstante k?",
        "fr": "Puisque l’équation de vitesse d’une réaction est r = k * [A]^2 * [B], laquelle des options suivantes est l’unité de la constante de vitesse k ?",
        "ru": "Поскольку уравнение скорости реакции имеет вид r = k * [A]^2 * [B], что из следующего является единицей константы скорости k?",
        "ar": "بما أن معادلة معدل التفاعل هي r = k * [A]^2 * [B]، أي مما يلي يمثل وحدة ثابت المعدل k؟",
        "zh": "由于反应的速率方程为 r = k * [A]^2 * [B]，下列哪项是速率常数 k 的单位？",
        "ku": "Ji ber ku hevkêşana leza reaksiyonê r = k * [A]^2 * [B] ye, kîjan ji yên jêrîn yekeya rêjeya sabit k e?"
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
        "tr": "Tepkime derecesi n = 2 + 1 = 3 tür. k birimi = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s).",
        "en": "The order of reaction is n = 2 + 1 = 3. unit k = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s).",
        "de": "Die Reihenfolge der Reaktion ist n = 2 + 1 = 3. Einheit k = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s).",
        "fr": "L'ordre de réaction est n = 2 + 1 = 3. unité k = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s).",
        "ru": "Порядок реакции: n = 2 + 1 = 3. единица k = (л/моль)^(n-1) * с^-1 = (л/моль)^2 * с^-1 = L^2 / (моль^2 * с).",
        "ar": "ترتيب التفاعل هو n = 2 + 1 = 3. الوحدة k = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s).",
        "zh": "反应级数为n = 2 + 1 = 3。单位k = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s)。",
        "ku": "Rêza reaksiyonê n = 2 + 1 = 3. yekîneya k = (L/mol)^(n-1) * s^-1 = (L/mol)^2 * s^-1 = L^2 / (mol^2 * s)."
      }
    },
    {
      "id": "u17-twin02",
      "stem": {
        "tr": "Kimyasal bir tepkimede uygun pozitif bir katalizör kullanıldığında aşağıdakilerden hangisi değişmez?",
        "en": "Which of the following does not change when a suitable positive catalyst is used in a chemical reaction?",
        "de": "Was ändert sich nicht, wenn ein geeigneter positiver Katalysator in einer chemischen Reaktion verwendet wird?",
        "fr": "Lequel des éléments suivants ne change pas lorsqu’un catalyseur positif approprié est utilisé dans une réaction chimique ?",
        "ru": "Что из перечисленного не меняется при использовании в химической реакции подходящего положительного катализатора?",
        "ar": "أي مما يلي لا يتغير عند استخدام محفز إيجابي مناسب في التفاعل الكيميائي؟",
        "zh": "当在化学反应中使用合适的正催化剂时，以下哪项不会改变？",
        "ku": "Dema ku di reaksiyonek kîmyayî de katalîzatorek erênî tê bikar anîn kîjan ji yên jêrîn nayê guhertin?"
      },
      "options": [
        {
          "tr": "Tepkime entalpisi (ΔH)",
          "en": "Reaction enthalpy (ΔH)",
          "de": "Reaktionsenthalpie (ΔH)",
          "fr": "Enthalpie de réaction (ΔH)",
          "ru": "Энтальпия реакции (ΔH)",
          "ar": "المحتوى الحراري للتفاعل (ΔH)",
          "zh": "反应焓 (ΔH)",
          "ku": "Entalpiya reaksiyonê (ΔH)"
        },
        {
          "tr": "İleri aktifleşme enerjisi (Eai)",
          "en": "Forward activation energy (Eai)",
          "de": "Vorwärtsaktivierungsenergie (Eai)",
          "fr": "Énergie d'activation vers l'avant (Eai)",
          "ru": "Энергия прямой активации (Eai)",
          "ar": "طاقة التنشيط الأمامية (Eai)",
          "zh": "正向活化能 (Eai)",
          "ku": "Enerjiya çalakkirina pêş (Eai)"
        },
        {
          "tr": "Tepkime hızı",
          "en": "reaction rate",
          "de": "Reaktionsgeschwindigkeit",
          "fr": "vitesse de réaction",
          "ru": "скорость реакции",
          "ar": "معدل التفاعل",
          "zh": "反应率",
          "ku": "rêjeya reaksiyonê"
        },
        {
          "tr": "Hız sabiti (k)",
          "en": "Rate constant (k)",
          "de": "Geschwindigkeitskonstante (k)",
          "fr": "Constante de taux (k)",
          "ru": "Константа скорости (к)",
          "ar": "معدل ثابت (ك)",
          "zh": "速率常数 (k)",
          "ku": "Rêjeya domdar (k)"
        },
        {
          "tr": "Aktifleşmiş kompleksin potansiyel enerjisi",
          "en": "Potential energy of activated complex",
          "de": "Potenzielle Energie des aktivierten Komplexes",
          "fr": "Énergie potentielle du complexe activé",
          "ru": "Потенциальная энергия активированного комплекса",
          "ar": "الطاقة الكامنة للمجمع المنشط",
          "zh": "活化复合物的势能",
          "ku": "Enerjiya potansiyela kompleksa aktîfkirî"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Katalizör aktifleşme enerjisini (Eai ve Eag) aynı miktarda düşürür; bu nedenle tepkime entalpisi (ΔH = Eai - Eag) asla değişmez.",
        "en": "The catalyst lowers the activation energy (Eai and Eag) by the same amount; therefore the reaction enthalpy (ΔH = Eai - Eag) never changes.",
        "de": "Der Katalysator senkt die Aktivierungsenergie (Eai und Eag) um den gleichen Betrag; daher ändert sich die Reaktionsenthalpie (ΔH = Eai – Eag) nie.",
        "fr": "Le catalyseur réduit l'énergie d'activation (Eai et Eag) du même montant ; donc l'enthalpie de réaction (ΔH = Eai - Eag) ne change jamais.",
        "ru": "Катализатор снижает энергию активации (Eai и Eag) на такую ​​же величину; поэтому энтальпия реакции (ΔH = Eai - Eag) никогда не меняется.",
        "ar": "يقوم المحفز بخفض طاقة التنشيط (Eai وEag) بنفس المقدار؛ وبالتالي فإن المحتوى الحراري للتفاعل (ΔH = Eai - Eag) لا يتغير أبدًا.",
        "zh": "催化剂使活化能（Eai和Eag）降低相同量；因此反应焓 (ΔH = Eai - Eag) 永远不会改变。",
        "ku": "Katalîzator enerjiya çalakkirinê (Eai û Eag) bi heman mîqdarê kêm dike; ji ber vê yekê entalpiya reaksiyonê (ΔH = Eai - Eag) qet naguhere."
      }
    },
    {
      "id": "u17-twin03",
      "stem": {
        "tr": "Kimya dersinde Kimyasal Tepkimelerde Hız ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Reaction Rates, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Reaktionsgeschwindigkeit: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Vitesse de Réaction, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Скорость химических реакций», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"سرعة التفاعلات الكيميائية\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“化学反应速率”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Leza Reaksiyonên Kîmyewî\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Ekzotermik tepkimelerde sıcaklık arttıkça tepkime hızı yavaşlar.",
          "en": "In exothermic reactions, as the temperature increases, the reaction rate slows down.",
          "de": "Bei exothermen Reaktionen verlangsamt sich die Reaktionsgeschwindigkeit mit steigender Temperatur.",
          "fr": "Dans les réactions exothermiques, à mesure que la température augmente, la vitesse de réaction ralentit.",
          "ru": "В экзотермических реакциях с повышением температуры скорость реакции замедляется.",
          "ar": "في التفاعلات الطاردة للحرارة، مع زيادة درجة الحرارة، يتباطأ معدل التفاعل.",
          "zh": "在放热反应中，随着温度升高，反应速率减慢。",
          "ku": "Di reaksiyonên exotermîk de, her ku germahî zêde dibe, rêjeya reaksiyonê hêdî dibe."
        },
        {
          "tr": "Ara ürün tepkimenin başında eklenen katalizördür.",
          "en": "The intermediate product is the catalyst added at the beginning of the reaction.",
          "de": "Das Zwischenprodukt ist der zu Beginn der Reaktion zugesetzte Katalysator.",
          "fr": "Le produit intermédiaire est le catalyseur ajouté au début de la réaction.",
          "ru": "Промежуточным продуктом является катализатор, добавляемый в начале реакции.",
          "ar": "المنتج الوسيط هو المحفز المضاف في بداية التفاعل.",
          "zh": "中间产物是反应开始时添加的催化剂。",
          "ku": "Hilbera navîn ew katalîzator e ku di destpêka reaksiyonê de tê zêdekirin."
        },
        {
          "tr": "Hız denklemi sadece gaz ve suda çözünmüş (aq) maddelerin derişimlerine göre yazılır; saf katı ve sıvılar hız bağıntısında yer almaz.",
          "en": "The rate equation is written only according to the concentrations of substances dissolved in gas and water (aq); Pure solids and liquids are not included in the velocity relationship.",
          "de": "Die Geschwindigkeitsgleichung wird nur nach den Konzentrationen der in Gas und Wasser gelösten Stoffe (aq) geschrieben; Reine Feststoffe und Flüssigkeiten werden nicht in die Geschwindigkeitsbeziehung einbezogen.",
          "fr": "L'équation du taux s'écrit uniquement en fonction des concentrations de substances dissoutes dans le gaz et l'eau (aq) ; Les solides purs et les liquides ne sont pas inclus dans la relation de vitesse.",
          "ru": "Уравнение скорости записано только по концентрациям веществ, растворенных в газе и воде (водн.); Чистые твердые тела и жидкости не включаются в соотношение скоростей.",
          "ar": "معادلة المعدل تكتب فقط على أساس تراكيز المواد المذابة في الغاز والماء (aq)؛ لا يتم تضمين المواد الصلبة والسوائل النقية في علاقة السرعة.",
          "zh": "仅根据溶解在气体和水中的物质浓度（aq）写出速率方程；纯固体和液体不包括在速度关系中。",
          "ku": "Wekheviya rêjeyê tenê li gorî tansiyona maddeyên di gaz û avê de (aq); Tiştên safî û şilek di nav têkiliya lezê de ne."
        },
        {
          "tr": "Tepkime derecesi net tepkimenin stokiyometrik katsayıları toplamına eşittir.",
          "en": "The degree of reaction is equal to the sum of the stoichiometric coefficients of the net reaction.",
          "de": "Der Reaktionsgrad ist gleich der Summe der stöchiometrischen Koeffizienten der Nettoreaktion.",
          "fr": "Le degré de réaction est égal à la somme des coefficients stoechiométriques de la réaction nette.",
          "ru": "Степень реакции равна сумме стехиометрических коэффициентов чистой реакции.",
          "ar": "درجة التفاعل تساوي مجموع المعاملات المتكافئة للتفاعل الصافي.",
          "zh": "反应程度等于净反应的化学计量系数之和。",
          "ku": "Dereceya reaksîyonê bi kombûna hevberên stokyometrîkî yên reaksiyona tevnê re ye."
        },
        {
          "tr": "Reaktif derişimi arttıkça hız sabiti k büyür.",
          "en": "As the reagent concentration increases, the rate constant k increases.",
          "de": "Mit zunehmender Reagenzkonzentration erhöht sich die Geschwindigkeitskonstante k.",
          "fr": "À mesure que la concentration du réactif augmente, la constante de vitesse k augmente.",
          "ru": "С увеличением концентрации реагента константа скорости k увеличивается.",
          "ar": "ومع زيادة تركيز الكاشف، يزداد المعدل الثابت k.",
          "zh": "随着试剂浓度增加，速率常数 k 增加。",
          "ku": "Her ku kombûna reagentê zêde dibe, rêjeya domdar k zêde dibe."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Hız denklemi sadece gaz ve suda çözünmüş (aq) maddelerin derişimlerine göre yazılır; saf katı ve sıvılar hız bağıntısında yer almaz.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The rate equation is written only according to the concentrations of substances dissolved in gas and water (aq); Pure solids and liquids are not included in the velocity relationship.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Geschwindigkeitsgleichung wird nur nach den Konzentrationen der in Gas und Wasser gelösten Stoffe (aq) geschrieben; Reine Feststoffe und Flüssigkeiten werden nicht in die Geschwindigkeitsbeziehung einbezogen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'équation du taux s'écrit uniquement en fonction des concentrations de substances dissoutes dans le gaz et l'eau (aq) ; Les solides purs et les liquides ne sont pas inclus dans la relation de vitesse.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Уравнение скорости записано только по концентрациям веществ, растворенных в газе и воде (водн.); Чистые твердые тела и жидкости не включаются в соотношение скоростей.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"معادلة المعدل تكتب فقط على أساس تراكيز المواد المذابة في الغاز والماء (aq)؛ لا يتم تضمين المواد الصلبة والسوائل النقية في علاقة السرعة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“仅根据溶解在气体和水中的物质浓度（aq）写出速率方程；纯固体和液体不包括在速度关系中。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Wekheviya rêjeyê tenê li gorî tansiyona maddeyên di gaz û avê de (aq); Tiştên safî û şilek di nav têkiliya lezê de ne.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u17-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimyasal Tepkimelerde Hız konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Reaction Rates?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Reaktionsgeschwindigkeit zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Vitesse de Réaction ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Скорость химических реакций»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"سرعة التفاعلات الكيميائية\"؟",
        "zh": "根据“化学反应速率”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Leza Reaksiyonên Kîmyewî\" de rast e?"
      },
      "options": [
        {
          "tr": "Sıcaklık artışı aktifleşme enerjisini düşürerek tepkimeyi hızlandırır.",
          "en": "Increasing temperature accelerates the reaction by decreasing the activation energy.",
          "de": "Eine Erhöhung der Temperatur beschleunigt die Reaktion durch Verringerung der Aktivierungsenergie.",
          "fr": "L'augmentation de la température accélère la réaction en diminuant l'énergie d'activation.",
          "ru": "Повышение температуры ускоряет реакцию за счет уменьшения энергии активации.",
          "ar": "تؤدي زيادة درجة الحرارة إلى تسريع التفاعل عن طريق تقليل طاقة التنشيط.",
          "zh": "升高温度可通过降低活化能来加速反应。",
          "ku": "Zêdebûna germahiyê bi kêmkirina enerjiya aktîfkirinê re reaksiyonê leztir dike."
        },
        {
          "tr": "Katalizör tepkime sonunda tükenerek yok olur.",
          "en": "The catalyst is consumed and destroyed at the end of the reaction.",
          "de": "Am Ende der Reaktion wird der Katalysator verbraucht und zerstört.",
          "fr": "Le catalyseur est consommé et détruit à la fin de la réaction.",
          "ru": "Катализатор расходуется и разрушается в конце реакции.",
          "ar": "يتم استهلاك المحفز وتدميره في نهاية التفاعل.",
          "zh": "催化剂在反应结束时被消耗和破坏。",
          "ku": "Katalîzator di dawiya reaksiyonê de tê vexwarin û hilweşandin."
        },
        {
          "tr": "Molekülerite sadece deneysel hız bağıntısından bulunur.",
          "en": "Molecularity is found only from the empirical rate relation.",
          "de": "Molekularität lässt sich nur aus der empirischen Geschwindigkeitsbeziehung ermitteln.",
          "fr": "La molécule n'est trouvée qu'à partir de la relation de taux empirique.",
          "ru": "Молекулярность находится только из эмпирического соотношения скоростей.",
          "ar": "تم العثور على الجزيئية فقط من علاقة المعدل التجريبي.",
          "zh": "分子性只能从经验速率关系中找到。",
          "ku": "Molecularity tenê ji têkiliya rêjeya ezmûnî tê dîtin."
        },
        {
          "tr": "Mekanizmalı (basamaklı) tepkimelerde hız denklemi en yavaş basamağın girenlerine göre yazılır.",
          "en": "In reactions with a mechanism (step), the rate equation is written according to the reactants of the slowest step.",
          "de": "Bei Reaktionen mit einem Mechanismus (Schritt) wird die Geschwindigkeitsgleichung entsprechend den Reaktanten des langsamsten Schrittes geschrieben.",
          "fr": "Dans les réactions avec un mécanisme (étape), l'équation de vitesse s'écrit en fonction des réactifs de l'étape la plus lente.",
          "ru": "В реакциях с механизмом (ступенью) уравнение скорости записывается по реагентам самой медленной стадии.",
          "ar": "في التفاعلات ذات الآلية (الخطوة)، تتم كتابة معادلة المعدل وفقًا للمواد المتفاعلة ذات الخطوة الأبطأ.",
          "zh": "在具有机制（步骤）的反应中，速率方程是根据最慢步骤的反应物编写的。",
          "ku": "Di reaksiyonên bi mekanîzma (gavekê) de, hevkêşana rêjeyê li gorî reaktantên gavê herî hêdî tê nivîsandin."
        },
        {
          "tr": "Kovalent bağların kırıldığı organik tepkimeler anlık patlama şeklinde biter.",
          "en": "Organic reactions in which covalent bonds are broken end in an instantaneous explosion.",
          "de": "Organische Reaktionen, bei denen kovalente Bindungen aufgebrochen werden, enden in einer sofortigen Explosion.",
          "fr": "Les réactions organiques dans lesquelles les liaisons covalentes sont rompues se terminent par une explosion instantanée.",
          "ru": "Органические реакции, при которых ковалентные связи разрываются, заканчиваются мгновенным взрывом.",
          "ar": "التفاعلات العضوية التي يتم فيها كسر الروابط التساهمية تنتهي بانفجار لحظي.",
          "zh": "共价键断裂的有机反应会在瞬间爆炸中结束。",
          "ku": "Reaksiyonên organîk ên ku tê de girêdanên kovalentî diqelibin bi teqînek bilez bi dawî dibin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Mekanizmalı (basamaklı) tepkimelerde hız denklemi en yavaş basamağın girenlerine göre yazılır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In reactions with a mechanism (step), the rate equation is written according to the reactants of the slowest step.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei Reaktionen mit einem Mechanismus (Schritt) wird die Geschwindigkeitsgleichung entsprechend den Reaktanten des langsamsten Schrittes geschrieben.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans les réactions avec un mécanisme (étape), l'équation de vitesse s'écrit en fonction des réactifs de l'étape la plus lente.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В реакциях с механизмом (ступенью) уравнение скорости записывается по реагентам самой медленной стадии.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في التفاعلات ذات الآلية (الخطوة)، تتم كتابة معادلة المعدل وفقًا للمواد المتفاعلة ذات الخطوة الأبطأ.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在具有机制（步骤）的反应中，速率方程是根据最慢步骤的反应物编写的。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di reaksiyonên bi mekanîzma (gavekê) de, hevkêşana rêjeyê li gorî reaktantên gavê herî hêdî tê nivîsandin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u17-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimyasal Tepkimelerde Hız sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Reaction Rates, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Reaktionsgeschwindigkeit: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Vitesse de Réaction, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Скорость химических реакций», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"سرعة التفاعلات الكيميائية\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“化学反应速率”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Leza Reaksiyonên Kîmyewî\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Temas yüzeyinin artması homojen gaz tepkimelerinin hızını artırır.",
          "en": "Increasing the contact surface increases the rate of homogeneous gas reactions.",
          "de": "Durch die Vergrößerung der Kontaktfläche erhöht sich die Geschwindigkeit homogener Gasreaktionen.",
          "fr": "L'augmentation de la surface de contact augmente la vitesse des réactions gazeuses homogènes.",
          "ru": "Увеличение поверхности контакта увеличивает скорость гомогенных газовых реакций.",
          "ar": "زيادة سطح التلامس يزيد من معدل تفاعلات الغازات المتجانسة.",
          "zh": "增加接触表面可提高均质气体反应的速率。",
          "ku": "Zêdekirina rûbera têkiliyê rêjeya reaksiyonên gaza homojen zêde dike."
        },
        {
          "tr": "Hız sabiti k nın birimi tepkime derecesinden bağımsızdır.",
          "en": "The unit of the rate constant k is independent of the degree of reaction.",
          "de": "Die Einheit der Geschwindigkeitskonstante k ist unabhängig vom Reaktionsgrad.",
          "fr": "L'unité de la constante de vitesse k est indépendante du degré de réaction.",
          "ru": "Единица константы скорости k не зависит от степени реакции.",
          "ar": "وحدة المعدل الثابت k مستقلة عن درجة التفاعل.",
          "zh": "速率常数k的单位与反应程度无关。",
          "ku": "Yekeya leza sabit k ji dereceya reaksiyonê serbixwe ye."
        },
        {
          "tr": "Katıyı toz haline getirmek açığa çıkan gaz miktarını artırır.",
          "en": "Turning the solid into powder increases the amount of gas released.",
          "de": "Durch die Umwandlung des Feststoffs in Pulver erhöht sich die Menge an freigesetztem Gas.",
          "fr": "La transformation du solide en poudre augmente la quantité de gaz libérée.",
          "ru": "Превращение твердого вещества в порошок увеличивает количество выделяемого газа.",
          "ar": "يؤدي تحويل المادة الصلبة إلى مسحوق إلى زيادة كمية الغاز المنبعثة.",
          "zh": "将固体变成粉末会增加释放的气体量。",
          "ku": "Zivirîna zirav di tozê de mîqdara gaza ku tê berdan zêde dike."
        },
        {
          "tr": "Tanecikler her çarpıştığında mutlaka kimyasal tepkime gerçekleşir.",
          "en": "Every time particles collide, a chemical reaction takes place.",
          "de": "Jedes Mal, wenn Teilchen kollidieren, findet eine chemische Reaktion statt.",
          "fr": "Chaque fois que des particules entrent en collision, une réaction chimique se produit.",
          "ru": "Каждый раз, когда частицы сталкиваются, происходит химическая реакция.",
          "ar": "في كل مرة تتصادم فيها الجزيئات، يحدث تفاعل كيميائي.",
          "zh": "每次粒子碰撞时，都会发生化学反应。",
          "ku": "Her cara ku pirtik li hev dikevin, reaksiyonek kîmyayî pêk tê."
        },
        {
          "tr": "Katalizör, tepkimenin aktifleşme enerjisini (Ea) düşüren TEK FAKTÖRDÜR; tepkime entalpisini (ΔH) asla değiştirmez.",
          "en": "The catalyst is the ONLY FACTOR that lowers the activation energy (Ea) of the reaction; It never changes the reaction enthalpy (ΔH).",
          "de": "Der Katalysator ist der EINZIGE FAKTOR, der die Aktivierungsenergie (Ea) der Reaktion senkt; Es ändert nie die Reaktionsenthalpie (ΔH).",
          "fr": "Le catalyseur est le SEUL FACTEUR qui diminue l'énergie d'activation (Ea) de la réaction ; Cela ne modifie jamais l'enthalpie de réaction (ΔH).",
          "ru": "Катализатор является ЕДИНСТВЕННЫМ ФАКТОРОМ, который снижает энергию активации (Ea) реакции; Он никогда не меняет энтальпию реакции (ΔH).",
          "ar": "المحفز هو العامل الوحيد الذي يخفض طاقة التنشيط (Ea) للتفاعل؛ لا يغير أبدًا المحتوى الحراري للتفاعل (ΔH).",
          "zh": "催化剂是降低反应活化能（Ea）的唯一因素；它永远不会改变反应焓 (ΔH)。",
          "ku": "Katalîzator TENÊ FAKTOR e ku enerjiya aktîvkirinê (Ea) ya reaksiyonê kêm dike; Ew qet entalpiya reaksiyonê (ΔH) naguhere."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Katalizör, tepkimenin aktifleşme enerjisini (Ea) düşüren TEK FAKTÖRDÜR; tepkime entalpisini (ΔH) asla değiştirmez.\" ifadesidir. ÖSYM tuzağı: Katalizör Ea yı düşürür, ΔH ı DEĞİŞTİRMEZ!",
        "en": "The correct statement is: \"The catalyst is the ONLY FACTOR that lowers the activation energy (Ea) of the reaction; It never changes the reaction enthalpy (ΔH).\". ÖSYM trap: Catalyst reduces Ea, DOES NOT CHANGE ΔH!",
        "de": "Die zutreffende Aussage lautet: \"Der Katalysator ist der EINZIGE FAKTOR, der die Aktivierungsenergie (Ea) der Reaktion senkt; Es ändert nie die Reaktionsenthalpie (ΔH).\". ÖSYM-Falle: Katalysator reduziert Ea, VERÄNDERT ΔH NICHT!",
        "fr": "L'affirmation exacte est: \"Le catalyseur est le SEUL FACTEUR qui diminue l'énergie d'activation (Ea) de la réaction ; Cela ne modifie jamais l'enthalpie de réaction (ΔH).\". Piège ÖSYM : le catalyseur réduit Ea, NE CHANGE PAS ΔH !",
        "ru": "Правильное утверждение: «Катализатор является ЕДИНСТВЕННЫМ ФАКТОРОМ, который снижает энергию активации (Ea) реакции; Он никогда не меняет энтальпию реакции (ΔH).». Ловушка ÖSYM: Катализатор снижает Ea, НЕ ИЗМЕНЯЕТ ΔH!",
        "ar": "العبارة الصحيحة هي: \"المحفز هو العامل الوحيد الذي يخفض طاقة التنشيط (Ea) للتفاعل؛ لا يغير أبدًا المحتوى الحراري للتفاعل (ΔH).\". مصيدة ÖSYM: المحفز يقلل Ea، ولا يغير ΔH!",
        "zh": "正确表述为：“催化剂是降低反应活化能（Ea）的唯一因素；它永远不会改变反应焓 (ΔH)。”。ÖSYM 陷阱：催化剂减少 Ea，但不改变 ΔH！",
        "ku": "Gotina rast ev e: \"Katalîzator TENÊ FAKTOR e ku enerjiya aktîvkirinê (Ea) ya reaksiyonê kêm dike; Ew qet entalpiya reaksiyonê (ΔH) naguhere.\". Xefika ÖSYM: Katalîzator Ea kêm dike, ΔH GUHERE NAKE!"
      }
    },
    {
      "id": "u17-twin06",
      "stem": {
        "tr": "Aşağıda Kimyasal Tepkimelerde Hız ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Reaction Rates, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Reaktionsgeschwindigkeit: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Vitesse de Réaction, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Скорость химических реакций», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"سرعة التفاعلات الكيميائية\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“化学反应速率”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Leza Reaksiyonên Kîmyewî\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Sıcaklık artışı hem endotermik hem ekzotermik tüm tepkimelerin hızını ve hız sabiti k yı artırır.",
          "en": "Increasing temperature increases the rate and rate constant k of all endothermic and exothermic reactions.",
          "de": "Mit zunehmender Temperatur erhöhen sich die Geschwindigkeit und die Geschwindigkeitskonstante k aller endothermen und exothermen Reaktionen.",
          "fr": "L'augmentation de la température augmente la vitesse et la constante de vitesse k de toutes les réactions endothermiques et exothermiques.",
          "ru": "Повышение температуры увеличивает скорость и константу скорости k всех эндотермических и экзотермических реакций.",
          "ar": "تؤدي زيادة درجة الحرارة إلى زيادة المعدل والمعدل الثابت k لجميع التفاعلات الماصة للحرارة والطاردة للحرارة.",
          "zh": "升高温度会增加所有吸热和放热反应的速率和速率常数 k。",
          "ku": "Zêdebûna germahiyê rêje û rêjeya sabit k ya hemû reaksiyonên endotermîk û exotermîk zêde dike."
        },
        {
          "tr": "Ara ürün tepkimenin başında eklenen katalizördür.",
          "en": "The intermediate product is the catalyst added at the beginning of the reaction.",
          "de": "Das Zwischenprodukt ist der zu Beginn der Reaktion zugesetzte Katalysator.",
          "fr": "Le produit intermédiaire est le catalyseur ajouté au début de la réaction.",
          "ru": "Промежуточным продуктом является катализатор, добавляемый в начале реакции.",
          "ar": "المنتج الوسيط هو المحفز المضاف في بداية التفاعل.",
          "zh": "中间产物是反应开始时添加的催化剂。",
          "ku": "Hilbera navîn ew katalîzator e ku di destpêka reaksiyonê de tê zêdekirin."
        },
        {
          "tr": "Tepkime derecesi net tepkimenin stokiyometrik katsayıları toplamına eşittir.",
          "en": "The degree of reaction is equal to the sum of the stoichiometric coefficients of the net reaction.",
          "de": "Der Reaktionsgrad ist gleich der Summe der stöchiometrischen Koeffizienten der Nettoreaktion.",
          "fr": "Le degré de réaction est égal à la somme des coefficients stoechiométriques de la réaction nette.",
          "ru": "Степень реакции равна сумме стехиометрических коэффициентов чистой реакции.",
          "ar": "درجة التفاعل تساوي مجموع المعاملات المتكافئة للتفاعل الصافي.",
          "zh": "反应程度等于净反应的化学计量系数之和。",
          "ku": "Dereceya reaksîyonê bi kombûna hevberên stokyometrîkî yên reaksiyona tevnê re ye."
        },
        {
          "tr": "Reaktif derişimi arttıkça hız sabiti k büyür.",
          "en": "As the reagent concentration increases, the rate constant k increases.",
          "de": "Mit zunehmender Reagenzkonzentration erhöht sich die Geschwindigkeitskonstante k.",
          "fr": "À mesure que la concentration du réactif augmente, la constante de vitesse k augmente.",
          "ru": "С увеличением концентрации реагента константа скорости k увеличивается.",
          "ar": "ومع زيادة تركيز الكاشف، يزداد المعدل الثابت k.",
          "zh": "随着试剂浓度增加，速率常数 k 增加。",
          "ku": "Her ku kombûna reagentê zêde dibe, rêjeya domdar k zêde dibe."
        },
        {
          "tr": "Tepkime hızı reaktiflerin mol sayısı arttıkça zamanla artar.",
          "en": "The reaction rate increases over time as the number of moles of reactants increases.",
          "de": "Die Reaktionsgeschwindigkeit nimmt mit der Zeit zu, wenn die Anzahl der Mol der Reaktanten zunimmt.",
          "fr": "La vitesse de réaction augmente avec le temps à mesure que le nombre de moles de réactifs augmente.",
          "ru": "Скорость реакции увеличивается с течением времени по мере увеличения количества молей реагентов.",
          "ar": "يزداد معدل التفاعل بمرور الوقت مع زيادة عدد مولات المواد المتفاعلة.",
          "zh": "随着反应物摩尔数的增加，反应速率随着时间的推移而增加。",
          "ku": "Rêjeya reaksiyonê bi demê re her ku hejmara molên reaktant zêde dibe zêde dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Sıcaklık artışı hem endotermik hem ekzotermik tüm tepkimelerin hızını ve hız sabiti k yı artırır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Increasing temperature increases the rate and rate constant k of all endothermic and exothermic reactions.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Mit zunehmender Temperatur erhöhen sich die Geschwindigkeit und die Geschwindigkeitskonstante k aller endothermen und exothermen Reaktionen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'augmentation de la température augmente la vitesse et la constante de vitesse k de toutes les réactions endothermiques et exothermiques.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Повышение температуры увеличивает скорость и константу скорости k всех эндотермических и экзотермических реакций.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تؤدي زيادة درجة الحرارة إلى زيادة المعدل والمعدل الثابت k لجميع التفاعلات الماصة للحرارة والطاردة للحرارة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“升高温度会增加所有吸热和放热反应的速率和速率常数 k。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Zêdebûna germahiyê rêje û rêjeya sabit k ya hemû reaksiyonên endotermîk û exotermîk zêde dike.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u17-twin07",
      "stem": {
        "tr": "Kimyasal Tepkimelerde Hız konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Reaction Rates, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Reaktionsgeschwindigkeit: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Vitesse de Réaction, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Скорость химических реакций», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"سرعة التفاعلات الكيميائية\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“化学反应速率”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Leza Reaksiyonên Kîmyewî\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Katalizör tepkime sonunda tükenerek yok olur.",
          "en": "The catalyst is consumed and destroyed at the end of the reaction.",
          "de": "Am Ende der Reaktion wird der Katalysator verbraucht und zerstört.",
          "fr": "Le catalyseur est consommé et détruit à la fin de la réaction.",
          "ru": "Катализатор расходуется и разрушается в конце реакции.",
          "ar": "يتم استهلاك المحفز وتدميره في نهاية التفاعل.",
          "zh": "催化剂在反应结束时被消耗和破坏。",
          "ku": "Katalîzator di dawiya reaksiyonê de tê vexwarin û hilweşandin."
        },
        {
          "tr": "Sıcaklık aktifleşme enerjisini (Ea) DEĞİŞTİRMEZ; sadece Ea yı aşan tanecik sayısını artırır.",
          "en": "Temperature does NOT change the activation energy (Ea); It only increases the number of particles exceeding Ea.",
          "de": "Die Temperatur verändert NICHT die Aktivierungsenergie (Ea); Es erhöht nur die Anzahl der Partikel, die Ea übersteigt.",
          "fr": "La température ne modifie PAS l'énergie d'activation (Ea) ; Cela ne fait qu'augmenter le nombre de particules dépassant Ea.",
          "ru": "Температура НЕ меняет энергию активации (Ea); Это лишь увеличивает число частиц, превышающих Ea.",
          "ar": "درجة الحرارة لا تغير طاقة التنشيط (Ea)؛ إنه يزيد فقط من عدد الجزيئات التي تتجاوز Ea.",
          "zh": "温度不会改变活化能（Ea）；它只会增加超过 Ea 的粒子数量。",
          "ku": "Germahiya enerjiya aktîfkirinê (Ea) NA diguhere; Ew tenê jimara perçeyên ku ji Ea-yê bêtir zêde dike."
        },
        {
          "tr": "Molekülerite sadece deneysel hız bağıntısından bulunur.",
          "en": "Molecularity is found only from the empirical rate relation.",
          "de": "Molekularität lässt sich nur aus der empirischen Geschwindigkeitsbeziehung ermitteln.",
          "fr": "La molécule n'est trouvée qu'à partir de la relation de taux empirique.",
          "ru": "Молекулярность находится только из эмпирического соотношения скоростей.",
          "ar": "تم العثور على الجزيئية فقط من علاقة المعدل التجريبي.",
          "zh": "分子性只能从经验速率关系中找到。",
          "ku": "Molecularity tenê ji têkiliya rêjeya ezmûnî tê dîtin."
        },
        {
          "tr": "Kovalent bağların kırıldığı organik tepkimeler anlık patlama şeklinde biter.",
          "en": "Organic reactions in which covalent bonds are broken end in an instantaneous explosion.",
          "de": "Organische Reaktionen, bei denen kovalente Bindungen aufgebrochen werden, enden in einer sofortigen Explosion.",
          "fr": "Les réactions organiques dans lesquelles les liaisons covalentes sont rompues se terminent par une explosion instantanée.",
          "ru": "Органические реакции, при которых ковалентные связи разрываются, заканчиваются мгновенным взрывом.",
          "ar": "التفاعلات العضوية التي يتم فيها كسر الروابط التساهمية تنتهي بانفجار لحظي.",
          "zh": "共价键断裂的有机反应会在瞬间爆炸中结束。",
          "ku": "Reaksiyonên organîk ên ku tê de girêdanên kovalentî diqelibin bi teqînek bilez bi dawî dibin."
        },
        {
          "tr": "Saf katıların derişimi hız denkleminde üs olarak yer alır.",
          "en": "The concentration of pure solids is included as an exponent in the rate equation.",
          "de": "Die Konzentration reiner Feststoffe geht als Exponent in die Geschwindigkeitsgleichung ein.",
          "fr": "La concentration de solides purs est incluse comme exposant dans l’équation de taux.",
          "ru": "Концентрация чистых твердых веществ включена в уравнение скорости как показатель степени.",
          "ar": "يتم تضمين تركيز المواد الصلبة النقية كأس في معادلة المعدل.",
          "zh": "纯固体的浓度作为指数包含在速率方程中。",
          "ku": "Di hevkêşana rêjeyê de giraniya maddeyên safî wekî nîşander tê girtin."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Sıcaklık aktifleşme enerjisini (Ea) DEĞİŞTİRMEZ; sadece Ea yı aşan tanecik sayısını artırır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Temperature does NOT change the activation energy (Ea); It only increases the number of particles exceeding Ea.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Temperatur verändert NICHT die Aktivierungsenergie (Ea); Es erhöht nur die Anzahl der Partikel, die Ea übersteigt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La température ne modifie PAS l'énergie d'activation (Ea) ; Cela ne fait qu'augmenter le nombre de particules dépassant Ea.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Температура НЕ меняет энергию активации (Ea); Это лишь увеличивает число частиц, превышающих Ea.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"درجة الحرارة لا تغير طاقة التنشيط (Ea)؛ إنه يزيد فقط من عدد الجزيئات التي تتجاوز Ea.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“温度不会改变活化能（Ea）；它只会增加超过 Ea 的粒子数量。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Germahiya enerjiya aktîfkirinê (Ea) NA diguhere; Ew tenê jimara perçeyên ku ji Ea-yê bêtir zêde dike.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u17-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimyasal Tepkimelerde Hız ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Reaction Rates, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Reaktionsgeschwindigkeit: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Vitesse de Réaction, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Скорость химических реакций», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"سرعة التفاعلات الكيميائية\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“化学反应速率”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Leza Reaksiyonên Kîmyewî\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Hız sabiti k nın birimi tepkime derecesinden bağımsızdır.",
          "en": "The unit of the rate constant k is independent of the degree of reaction.",
          "de": "Die Einheit der Geschwindigkeitskonstante k ist unabhängig vom Reaktionsgrad.",
          "fr": "L'unité de la constante de vitesse k est indépendante du degré de réaction.",
          "ru": "Единица константы скорости k не зависит от степени реакции.",
          "ar": "وحدة المعدل الثابت k مستقلة عن درجة التفاعل.",
          "zh": "速率常数k的单位与反应程度无关。",
          "ku": "Yekeya leza sabit k ji dereceya reaksiyonê serbixwe ye."
        },
        {
          "tr": "Katıyı toz haline getirmek açığa çıkan gaz miktarını artırır.",
          "en": "Turning the solid into powder increases the amount of gas released.",
          "de": "Durch die Umwandlung des Feststoffs in Pulver erhöht sich die Menge an freigesetztem Gas.",
          "fr": "La transformation du solide en poudre augmente la quantité de gaz libérée.",
          "ru": "Превращение твердого вещества в порошок увеличивает количество выделяемого газа.",
          "ar": "يؤدي تحويل المادة الصلبة إلى مسحوق إلى زيادة كمية الغاز المنبعثة.",
          "zh": "将固体变成粉末会增加释放的气体量。",
          "ku": "Zivirîna zirav di tozê de mîqdara gaza ku tê berdan zêde dike."
        },
        {
          "tr": "Temas yüzeyi arttıkça (katıyı toz haline getirmek) sadece heterojen tepkimelerin hızı ve k sabiti artar.",
          "en": "As the contact surface increases (turning the solid into powder), only the rate of heterogeneous reactions and the constant k increase.",
          "de": "Mit zunehmender Kontaktfläche (Umwandlung des Feststoffs in Pulver) nehmen nur die Geschwindigkeit heterogener Reaktionen und die Konstante k zu.",
          "fr": "À mesure que la surface de contact augmente (transformant le solide en poudre), seules la vitesse des réactions hétérogènes et la constante k augmentent.",
          "ru": "По мере увеличения поверхности контакта (превращения твердого тела в порошок) увеличиваются только скорость гетерогенных реакций и константа k.",
          "ar": "مع زيادة سطح التلامس (تحويل المادة الصلبة إلى مسحوق)، يزداد فقط معدل التفاعلات غير المتجانسة والثابت k.",
          "zh": "随着接触表面的增加（将固体变成粉末），只有非均相反应的速率和常数 k 增加。",
          "ku": "Her ku rûbera pêwendiyê zêde dibe (veguhertina hişk di tozê de), tenê rêjeya reaksiyonên heterojen û k domdar zêde dibin."
        },
        {
          "tr": "Tanecikler her çarpıştığında mutlaka kimyasal tepkime gerçekleşir.",
          "en": "Every time particles collide, a chemical reaction takes place.",
          "de": "Jedes Mal, wenn Teilchen kollidieren, findet eine chemische Reaktion statt.",
          "fr": "Chaque fois que des particules entrent en collision, une réaction chimique se produit.",
          "ru": "Каждый раз, когда частицы сталкиваются, происходит химическая реакция.",
          "ar": "في كل مرة تتصادم فيها الجزيئات، يحدث تفاعل كيميائي.",
          "zh": "每次粒子碰撞时，都会发生化学反应。",
          "ku": "Her cara ku pirtik li hev dikevin, reaksiyonek kîmyayî pêk tê."
        },
        {
          "tr": "Basamaklı tepkimelerde hız en hızlı basamağa göre belirlenir.",
          "en": "In stepwise reactions, the rate is determined by the fastest step.",
          "de": "Bei schrittweisen Reaktionen wird die Geschwindigkeit durch den schnellsten Schritt bestimmt.",
          "fr": "Dans les réactions par étapes, la vitesse est déterminée par l’étape la plus rapide.",
          "ru": "В ступенчатых реакциях скорость определяется самой быстрой стадией.",
          "ar": "في التفاعلات المتدرجة، يتم تحديد المعدل بواسطة الخطوة الأسرع.",
          "zh": "在逐步反应中，速率由最快的步骤决定。",
          "ku": "Di reaksiyonên gav bi gav de, rêje bi gavê herî bilez tê destnîşankirin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Temas yüzeyi arttıkça (katıyı toz haline getirmek) sadece heterojen tepkimelerin hızı ve k sabiti artar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"As the contact surface increases (turning the solid into powder), only the rate of heterogeneous reactions and the constant k increase.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Mit zunehmender Kontaktfläche (Umwandlung des Feststoffs in Pulver) nehmen nur die Geschwindigkeit heterogener Reaktionen und die Konstante k zu.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"À mesure que la surface de contact augmente (transformant le solide en poudre), seules la vitesse des réactions hétérogènes et la constante k augmentent.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «По мере увеличения поверхности контакта (превращения твердого тела в порошок) увеличиваются только скорость гетерогенных реакций и константа k.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"مع زيادة سطح التلامس (تحويل المادة الصلبة إلى مسحوق)، يزداد فقط معدل التفاعلات غير المتجانسة والثابت k.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“随着接触表面的增加（将固体变成粉末），只有非均相反应的速率和常数 k 增加。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Her ku rûbera pêwendiyê zêde dibe (veguhertina hişk di tozê de), tenê rêjeya reaksiyonên heterojen û k domdar zêde dibin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u17-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimyasal Tepkimelerde Hız konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Reaction Rates, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Reaktionsgeschwindigkeit die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Vitesse de Réaction, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Скорость химических реакций», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"سرعة التفاعلات الكيميائية\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“化学反应速率”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Leza Reaksiyonên Kîmyewî\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Tepkime derecesi net tepkimenin stokiyometrik katsayıları toplamına eşittir.",
          "en": "The degree of reaction is equal to the sum of the stoichiometric coefficients of the net reaction.",
          "de": "Der Reaktionsgrad ist gleich der Summe der stöchiometrischen Koeffizienten der Nettoreaktion.",
          "fr": "Le degré de réaction est égal à la somme des coefficients stoechiométriques de la réaction nette.",
          "ru": "Степень реакции равна сумме стехиометрических коэффициентов чистой реакции.",
          "ar": "درجة التفاعل تساوي مجموع المعاملات المتكافئة للتفاعل الصافي.",
          "zh": "反应程度等于净反应的化学计量系数之和。",
          "ku": "Dereceya reaksîyonê bi kombûna hevberên stokyometrîkî yên reaksiyona tevnê re ye."
        },
        {
          "tr": "Reaktif derişimi arttıkça hız sabiti k büyür.",
          "en": "As the reagent concentration increases, the rate constant k increases.",
          "de": "Mit zunehmender Reagenzkonzentration erhöht sich die Geschwindigkeitskonstante k.",
          "fr": "À mesure que la concentration du réactif augmente, la constante de vitesse k augmente.",
          "ru": "С увеличением концентрации реагента константа скорости k увеличивается.",
          "ar": "ومع زيادة تركيز الكاشف، يزداد المعدل الثابت k.",
          "zh": "随着试剂浓度增加，速率常数 k 增加。",
          "ku": "Her ku kombûna reagentê zêde dibe, rêjeya domdar k zêde dibe."
        },
        {
          "tr": "Tepkime hızı reaktiflerin mol sayısı arttıkça zamanla artar.",
          "en": "The reaction rate increases over time as the number of moles of reactants increases.",
          "de": "Die Reaktionsgeschwindigkeit nimmt mit der Zeit zu, wenn die Anzahl der Mol der Reaktanten zunimmt.",
          "fr": "La vitesse de réaction augmente avec le temps à mesure que le nombre de moles de réactifs augmente.",
          "ru": "Скорость реакции увеличивается с течением времени по мере увеличения количества молей реагентов.",
          "ar": "يزداد معدل التفاعل بمرور الوقت مع زيادة عدد مولات المواد المتفاعلة.",
          "zh": "随着反应物摩尔数的增加，反应速率随着时间的推移而增加。",
          "ku": "Rêjeya reaksiyonê bi demê re her ku hejmara molên reaktant zêde dibe zêde dibe."
        },
        {
          "tr": "Ara ürün, bir basamakta oluşup sonraki basamakta harcanan maddedir; net tepkime denkleminde yer almaz.",
          "en": "An intermediate product is a substance formed in one step and consumed in the next step; It is not included in the net reaction equation.",
          "de": "Ein Zwischenprodukt ist ein Stoff, der in einem Schritt gebildet und im nächsten Schritt verbraucht wird; Es ist nicht in der Nettoreaktionsgleichung enthalten.",
          "fr": "Un produit intermédiaire est une substance formée au cours d’une étape et consommée à l’étape suivante ; Il n'est pas inclus dans l'équation de réaction nette.",
          "ru": "Промежуточный продукт — вещество, образующееся на одном этапе и потребляемое на следующем этапе; Он не входит в общее уравнение реакции.",
          "ar": "المنتج الوسيط هو مادة تتكون في خطوة واحدة ويتم استهلاكها في الخطوة التالية؛ ولا يتم تضمينه في معادلة التفاعل الصافية.",
          "zh": "中间产品是在一个步骤中形成并在下一步中消耗的物质；它不包括在净反应方程中。",
          "ku": "Hilbera navber maddeyek e ku di gavekê de çê dibe û di gava din de tê vexwarin; Ew di hevkêşeya reaksiyonê ya net de tune ye."
        },
        {
          "tr": "Katalizör tepkime entalpisini (ΔH) düşürerek sistemi rahatlatır.",
          "en": "The catalyst relaxes the system by reducing the reaction enthalpy (ΔH).",
          "de": "Der Katalysator entspannt das System, indem er die Reaktionsenthalpie (ΔH) verringert.",
          "fr": "Le catalyseur détend le système en réduisant l'enthalpie de réaction (ΔH).",
          "ru": "Катализатор расслабляет систему за счет снижения энтальпии реакции (ΔH).",
          "ar": "يقوم المحفز بإرخاء النظام عن طريق تقليل المحتوى الحراري للتفاعل (ΔH).",
          "zh": "催化剂通过降低反应焓 (ΔH) 来松弛系统。",
          "ku": "Katalîzator bi kêmkirina entalpiya reaksiyonê (ΔH) pergalê rehet dike."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Ara ürün, bir basamakta oluşup sonraki basamakta harcanan maddedir; net tepkime denkleminde yer almaz.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"An intermediate product is a substance formed in one step and consumed in the next step; It is not included in the net reaction equation.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Ein Zwischenprodukt ist ein Stoff, der in einem Schritt gebildet und im nächsten Schritt verbraucht wird; Es ist nicht in der Nettoreaktionsgleichung enthalten.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Un produit intermédiaire est une substance formée au cours d’une étape et consommée à l’étape suivante ; Il n'est pas inclus dans l'équation de réaction nette.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Промежуточный продукт — вещество, образующееся на одном этапе и потребляемое на следующем этапе; Он не входит в общее уравнение реакции.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المنتج الوسيط هو مادة تتكون في خطوة واحدة ويتم استهلاكها في الخطوة التالية؛ ولا يتم تضمينه في معادلة التفاعل الصافية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“中间产品是在一个步骤中形成并在下一步中消耗的物质；它不包括在净反应方程中。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hilbera navber maddeyek e ku di gavekê de çê dibe û di gava din de tê vexwarin; Ew di hevkêşeya reaksiyonê ya net de tune ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u17-twin10",
      "stem": {
        "tr": "Kimya dersinde Kimyasal Tepkimelerde Hız ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Reaction Rates, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Reaktionsgeschwindigkeit: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Vitesse de Réaction, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Скорость химических реакций», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"سرعة التفاعلات الكيميائية\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“化学反应速率”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Leza Reaksiyonên Kîmyewî\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Molekülerite sadece deneysel hız bağıntısından bulunur.",
          "en": "Molecularity is found only from the empirical rate relation.",
          "de": "Molekularität lässt sich nur aus der empirischen Geschwindigkeitsbeziehung ermitteln.",
          "fr": "La molécule n'est trouvée qu'à partir de la relation de taux empirique.",
          "ru": "Молекулярность находится только из эмпирического соотношения скоростей.",
          "ar": "تم العثور على الجزيئية فقط من علاقة المعدل التجريبي.",
          "zh": "分子性只能从经验速率关系中找到。",
          "ku": "Molecularity tenê ji têkiliya rêjeya ezmûnî tê dîtin."
        },
        {
          "tr": "Kovalent bağların kırıldığı organik tepkimeler anlık patlama şeklinde biter.",
          "en": "Organic reactions in which covalent bonds are broken end in an instantaneous explosion.",
          "de": "Organische Reaktionen, bei denen kovalente Bindungen aufgebrochen werden, enden in einer sofortigen Explosion.",
          "fr": "Les réactions organiques dans lesquelles les liaisons covalentes sont rompues se terminent par une explosion instantanée.",
          "ru": "Органические реакции, при которых ковалентные связи разрываются, заканчиваются мгновенным взрывом.",
          "ar": "التفاعلات العضوية التي يتم فيها كسر الروابط التساهمية تنتهي بانفجار لحظي.",
          "zh": "共价键断裂的有机反应会在瞬间爆炸中结束。",
          "ku": "Reaksiyonên organîk ên ku tê de girêdanên kovalentî diqelibin bi teqînek bilez bi dawî dibin."
        },
        {
          "tr": "Saf katıların derişimi hız denkleminde üs olarak yer alır.",
          "en": "The concentration of pure solids is included as an exponent in the rate equation.",
          "de": "Die Konzentration reiner Feststoffe geht als Exponent in die Geschwindigkeitsgleichung ein.",
          "fr": "La concentration de solides purs est incluse comme exposant dans l’équation de taux.",
          "ru": "Концентрация чистых твердых веществ включена в уравнение скорости как показатель степени.",
          "ar": "يتم تضمين تركيز المواد الصلبة النقية كأس في معادلة المعدل.",
          "zh": "纯固体的浓度作为指数包含在速率方程中。",
          "ku": "Di hevkêşana rêjeyê de giraniya maddeyên safî wekî nîşander tê girtin."
        },
        {
          "tr": "Ekzotermik tepkimelerde sıcaklık arttıkça tepkime hızı yavaşlar.",
          "en": "In exothermic reactions, as the temperature increases, the reaction rate slows down.",
          "de": "Bei exothermen Reaktionen verlangsamt sich die Reaktionsgeschwindigkeit mit steigender Temperatur.",
          "fr": "Dans les réactions exothermiques, à mesure que la température augmente, la vitesse de réaction ralentit.",
          "ru": "В экзотермических реакциях с повышением температуры скорость реакции замедляется.",
          "ar": "في التفاعلات الطاردة للحرارة، مع زيادة درجة الحرارة، يتباطأ معدل التفاعل.",
          "zh": "在放热反应中，随着温度升高，反应速率减慢。",
          "ku": "Di reaksiyonên exotermîk de, her ku germahî zêde dibe, rêjeya reaksiyonê hêdî dibe."
        },
        {
          "tr": "Katalizör, tepkimeye girdiği gibi değişmeden çıkan maddedir; net tepkime denkleminde yer almaz.",
          "en": "A catalyst is a substance that leaves unchanged as it reacts; It is not included in the net reaction equation.",
          "de": "Ein Katalysator ist eine Substanz, die bei ihrer Reaktion unverändert bleibt; Es ist nicht in der Nettoreaktionsgleichung enthalten.",
          "fr": "Un catalyseur est une substance qui reste inchangée lors de sa réaction ; Il n'est pas inclus dans l'équation de réaction nette.",
          "ru": "Катализатор — это вещество, которое в ходе реакции остается неизменным; Он не входит в общее уравнение реакции.",
          "ar": "المحفز هو مادة لا تتغير أثناء تفاعلها؛ ولا يتم تضمينه في معادلة التفاعل الصافية.",
          "zh": "催化剂是一种在反应时保持不变的物质；它不包括在净反应方程中。",
          "ku": "Katalîzator maddeyek e ku her ku bertek nîşan dide bêguhêr dimîne; Ew di hevkêşeya reaksiyonê ya net de tune ye."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Katalizör, tepkimeye girdiği gibi değişmeden çıkan maddedir; net tepkime denkleminde yer almaz.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"A catalyst is a substance that leaves unchanged as it reacts; It is not included in the net reaction equation.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Ein Katalysator ist eine Substanz, die bei ihrer Reaktion unverändert bleibt; Es ist nicht in der Nettoreaktionsgleichung enthalten.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Un catalyseur est une substance qui reste inchangée lors de sa réaction ; Il n'est pas inclus dans l'équation de réaction nette.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Катализатор — это вещество, которое в ходе реакции остается неизменным; Он не входит в общее уравнение реакции.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المحفز هو مادة لا تتغير أثناء تفاعلها؛ ولا يتم تضمينه في معادلة التفاعل الصافية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“催化剂是一种在反应时保持不变的物质；它不包括在净反应方程中。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Katalîzator maddeyek e ku her ku bertek nîşan dide bêguhêr dimîne; Ew di hevkêşeya reaksiyonê ya net de tune ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u17-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimyasal Tepkimelerde Hız konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Reaction Rates?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Reaktionsgeschwindigkeit zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Vitesse de Réaction ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Скорость химических реакций»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"سرعة التفاعلات الكيميائية\"؟",
        "zh": "根据“化学反应速率”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Leza Reaksiyonên Kîmyewî\" de rast e?"
      },
      "options": [
        {
          "tr": "Hız sabiti k nın birimi: (L/mol)^(n-1) * s^-1 dir (n: tepkimenin toplam derecesi).",
          "en": "The unit of the rate constant k is: (L/mol)^(n-1) * s^-1 (n: total rate of reaction).",
          "de": "Die Einheit der Geschwindigkeitskonstante k ist: (L/mol)^(n-1) * s^-1 (n: Gesamtreaktionsgeschwindigkeit).",
          "fr": "L'unité de la constante de vitesse k est : (L/mol)^(n-1) * s^-1 (n : vitesse totale de réaction).",
          "ru": "Единица измерения константы скорости k: (л/моль)^(n-1) * с^-1 (n: общая скорость реакции).",
          "ar": "وحدة المعدل الثابت k هي: (L/mol)^(n-1) * s^-1 (n: المعدل الإجمالي للتفاعل).",
          "zh": "速率常数k的单位为：(L/mol)^(n-1) * s^-1（n：反应总速率）。",
          "ku": "Yekeya leza sabit k ev e: (L/mol)^(n-1) * s^-1 (n: rêjeya tevhev a reaksiyonê)."
        },
        {
          "tr": "Katıyı toz haline getirmek açığa çıkan gaz miktarını artırır.",
          "en": "Turning the solid into powder increases the amount of gas released.",
          "de": "Durch die Umwandlung des Feststoffs in Pulver erhöht sich die Menge an freigesetztem Gas.",
          "fr": "La transformation du solide en poudre augmente la quantité de gaz libérée.",
          "ru": "Превращение твердого вещества в порошок увеличивает количество выделяемого газа.",
          "ar": "يؤدي تحويل المادة الصلبة إلى مسحوق إلى زيادة كمية الغاز المنبعثة.",
          "zh": "将固体变成粉末会增加释放的气体量。",
          "ku": "Zivirîna zirav di tozê de mîqdara gaza ku tê berdan zêde dike."
        },
        {
          "tr": "Tanecikler her çarpıştığında mutlaka kimyasal tepkime gerçekleşir.",
          "en": "Every time particles collide, a chemical reaction takes place.",
          "de": "Jedes Mal, wenn Teilchen kollidieren, findet eine chemische Reaktion statt.",
          "fr": "Chaque fois que des particules entrent en collision, une réaction chimique se produit.",
          "ru": "Каждый раз, когда частицы сталкиваются, происходит химическая реакция.",
          "ar": "في كل مرة تتصادم فيها الجزيئات، يحدث تفاعل كيميائي.",
          "zh": "每次粒子碰撞时，都会发生化学反应。",
          "ku": "Her cara ku pirtik li hev dikevin, reaksiyonek kîmyayî pêk tê."
        },
        {
          "tr": "Basamaklı tepkimelerde hız en hızlı basamağa göre belirlenir.",
          "en": "In stepwise reactions, the rate is determined by the fastest step.",
          "de": "Bei schrittweisen Reaktionen wird die Geschwindigkeit durch den schnellsten Schritt bestimmt.",
          "fr": "Dans les réactions par étapes, la vitesse est déterminée par l’étape la plus rapide.",
          "ru": "В ступенчатых реакциях скорость определяется самой быстрой стадией.",
          "ar": "في التفاعلات المتدرجة، يتم تحديد المعدل بواسطة الخطوة الأسرع.",
          "zh": "在逐步反应中，速率由最快的步骤决定。",
          "ku": "Di reaksiyonên gav bi gav de, rêje bi gavê herî bilez tê destnîşankirin."
        },
        {
          "tr": "Sıcaklık artışı aktifleşme enerjisini düşürerek tepkimeyi hızlandırır.",
          "en": "Increasing temperature accelerates the reaction by decreasing the activation energy.",
          "de": "Eine Erhöhung der Temperatur beschleunigt die Reaktion durch Verringerung der Aktivierungsenergie.",
          "fr": "L'augmentation de la température accélère la réaction en diminuant l'énergie d'activation.",
          "ru": "Повышение температуры ускоряет реакцию за счет уменьшения энергии активации.",
          "ar": "تؤدي زيادة درجة الحرارة إلى تسريع التفاعل عن طريق تقليل طاقة التنشيط.",
          "zh": "升高温度可通过降低活化能来加速反应。",
          "ku": "Zêdebûna germahiyê bi kêmkirina enerjiya aktîfkirinê re reaksiyonê leztir dike."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Hız sabiti k nın birimi: (L/mol)^(n-1) * s^-1 dir (n: tepkimenin toplam derecesi).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The unit of the rate constant k is: (L/mol)^(n-1) * s^-1 (n: total rate of reaction).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Einheit der Geschwindigkeitskonstante k ist: (L/mol)^(n-1) * s^-1 (n: Gesamtreaktionsgeschwindigkeit).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'unité de la constante de vitesse k est : (L/mol)^(n-1) * s^-1 (n : vitesse totale de réaction).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Единица измерения константы скорости k: (л/моль)^(n-1) * с^-1 (n: общая скорость реакции).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"وحدة المعدل الثابت k هي: (L/mol)^(n-1) * s^-1 (n: المعدل الإجمالي للتفاعل).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“速率常数k的单位为：(L/mol)^(n-1) * s^-1（n：反应总速率）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Yekeya leza sabit k ev e: (L/mol)^(n-1) * s^-1 (n: rêjeya tevhev a reaksiyonê).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u17-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimyasal Tepkimelerde Hız sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Reaction Rates, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Reaktionsgeschwindigkeit: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Vitesse de Réaction, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Скорость химических реакций», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"سرعة التفاعلات الكيميائية\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“化学反应速率”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Leza Reaksiyonên Kîmyewî\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Reaktif derişimi arttıkça hız sabiti k büyür.",
          "en": "As the reagent concentration increases, the rate constant k increases.",
          "de": "Mit zunehmender Reagenzkonzentration erhöht sich die Geschwindigkeitskonstante k.",
          "fr": "À mesure que la concentration du réactif augmente, la constante de vitesse k augmente.",
          "ru": "С увеличением концентрации реагента константа скорости k увеличивается.",
          "ar": "ومع زيادة تركيز الكاشف، يزداد المعدل الثابت k.",
          "zh": "随着试剂浓度增加，速率常数 k 增加。",
          "ku": "Her ku kombûna reagentê zêde dibe, rêjeya domdar k zêde dibe."
        },
        {
          "tr": "Tepkime derecesi, deneysel hız bağıntısındaki derişimlerin üsleri toplamıdır.",
          "en": "The degree of reaction is the sum of the exponents of the concentrations in the experimental rate equation.",
          "de": "Der Reaktionsgrad ist die Summe der Exponenten der Konzentrationen in der experimentellen Geschwindigkeitsgleichung.",
          "fr": "Le degré de réaction est la somme des exposants des concentrations dans l'équation de vitesse expérimentale.",
          "ru": "Степень реакции представляет собой сумму показателей концентраций в экспериментальном уравнении скорости.",
          "ar": "درجة التفاعل هي مجموع أسس التركيزات في معادلة المعدل التجريبي.",
          "zh": "反应程度是实验速率方程中浓度指数的总和。",
          "ku": "Dereceya reaksîyonê kombûna nîşanderên hûrbûnên di hevkêşeya rêjeya ceribandinê de ye."
        },
        {
          "tr": "Tepkime hızı reaktiflerin mol sayısı arttıkça zamanla artar.",
          "en": "The reaction rate increases over time as the number of moles of reactants increases.",
          "de": "Die Reaktionsgeschwindigkeit nimmt mit der Zeit zu, wenn die Anzahl der Mol der Reaktanten zunimmt.",
          "fr": "La vitesse de réaction augmente avec le temps à mesure que le nombre de moles de réactifs augmente.",
          "ru": "Скорость реакции увеличивается с течением времени по мере увеличения количества молей реагентов.",
          "ar": "يزداد معدل التفاعل بمرور الوقت مع زيادة عدد مولات المواد المتفاعلة.",
          "zh": "随着反应物摩尔数的增加，反应速率随着时间的推移而增加。",
          "ku": "Rêjeya reaksiyonê bi demê re her ku hejmara molên reaktant zêde dibe zêde dibe."
        },
        {
          "tr": "Katalizör tepkime entalpisini (ΔH) düşürerek sistemi rahatlatır.",
          "en": "The catalyst relaxes the system by reducing the reaction enthalpy (ΔH).",
          "de": "Der Katalysator entspannt das System, indem er die Reaktionsenthalpie (ΔH) verringert.",
          "fr": "Le catalyseur détend le système en réduisant l'enthalpie de réaction (ΔH).",
          "ru": "Катализатор расслабляет систему за счет снижения энтальпии реакции (ΔH).",
          "ar": "يقوم المحفز بإرخاء النظام عن طريق تقليل المحتوى الحراري للتفاعل (ΔH).",
          "zh": "催化剂通过降低反应焓 (ΔH) 来松弛系统。",
          "ku": "Katalîzator bi kêmkirina entalpiya reaksiyonê (ΔH) pergalê rehet dike."
        },
        {
          "tr": "Temas yüzeyinin artması homojen gaz tepkimelerinin hızını artırır.",
          "en": "Increasing the contact surface increases the rate of homogeneous gas reactions.",
          "de": "Durch die Vergrößerung der Kontaktfläche erhöht sich die Geschwindigkeit homogener Gasreaktionen.",
          "fr": "L'augmentation de la surface de contact augmente la vitesse des réactions gazeuses homogènes.",
          "ru": "Увеличение поверхности контакта увеличивает скорость гомогенных газовых реакций.",
          "ar": "زيادة سطح التلامس يزيد من معدل تفاعلات الغازات المتجانسة.",
          "zh": "增加接触表面可提高均质气体反应的速率。",
          "ku": "Zêdekirina rûbera têkiliyê rêjeya reaksiyonên gaza homojen zêde dike."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Tepkime derecesi, deneysel hız bağıntısındaki derişimlerin üsleri toplamıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The degree of reaction is the sum of the exponents of the concentrations in the experimental rate equation.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der Reaktionsgrad ist die Summe der Exponenten der Konzentrationen in der experimentellen Geschwindigkeitsgleichung.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le degré de réaction est la somme des exposants des concentrations dans l'équation de vitesse expérimentale.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Степень реакции представляет собой сумму показателей концентраций в экспериментальном уравнении скорости.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"درجة التفاعل هي مجموع أسس التركيزات في معادلة المعدل التجريبي.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“反应程度是实验速率方程中浓度指数的总和。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Dereceya reaksîyonê kombûna nîşanderên hûrbûnên di hevkêşeya rêjeya ceribandinê de ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u17-twin13",
      "stem": {
        "tr": "Aşağıda Kimyasal Tepkimelerde Hız ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Reaction Rates, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Reaktionsgeschwindigkeit: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Vitesse de Réaction, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Скорость химических реакций», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"سرعة التفاعلات الكيميائية\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“化学反应速率”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Leza Reaksiyonên Kîmyewî\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Kovalent bağların kırıldığı organik tepkimeler anlık patlama şeklinde biter.",
          "en": "Organic reactions in which covalent bonds are broken end in an instantaneous explosion.",
          "de": "Organische Reaktionen, bei denen kovalente Bindungen aufgebrochen werden, enden in einer sofortigen Explosion.",
          "fr": "Les réactions organiques dans lesquelles les liaisons covalentes sont rompues se terminent par une explosion instantanée.",
          "ru": "Органические реакции, при которых ковалентные связи разрываются, заканчиваются мгновенным взрывом.",
          "ar": "التفاعلات العضوية التي يتم فيها كسر الروابط التساهمية تنتهي بانفجار لحظي.",
          "zh": "共价键断裂的有机反应会在瞬间爆炸中结束。",
          "ku": "Reaksiyonên organîk ên ku tê de girêdanên kovalentî diqelibin bi teqînek bilez bi dawî dibin."
        },
        {
          "tr": "Saf katıların derişimi hız denkleminde üs olarak yer alır.",
          "en": "The concentration of pure solids is included as an exponent in the rate equation.",
          "de": "Die Konzentration reiner Feststoffe geht als Exponent in die Geschwindigkeitsgleichung ein.",
          "fr": "La concentration de solides purs est incluse comme exposant dans l’équation de taux.",
          "ru": "Концентрация чистых твердых веществ включена в уравнение скорости как показатель степени.",
          "ar": "يتم تضمين تركيز المواد الصلبة النقية كأس في معادلة المعدل.",
          "zh": "纯固体的浓度作为指数包含在速率方程中。",
          "ku": "Di hevkêşana rêjeyê de giraniya maddeyên safî wekî nîşander tê girtin."
        },
        {
          "tr": "Molekülerite, tek bir basamakta tepkimeye giren tanecik sayısını ifade eder (unimoleküler, bimoleküler, trimoleküler).",
          "en": "Molecularity refers to the number of particles that react in a single step (unimolecular, bimolecular, trimolecular).",
          "de": "Unter Molekularität versteht man die Anzahl der Teilchen, die in einem einzigen Schritt reagieren (unimolekular, bimolekular, trimolekular).",
          "fr": "La moléculaire fait référence au nombre de particules qui réagissent en une seule étape (unimoléculaire, bimoléculaire, trimoléculaire).",
          "ru": "Молекулярность относится к числу частиц, которые реагируют за одну стадию (мономолекулярная, бимолекулярная, тримолекулярная).",
          "ar": "تشير الجزيئية إلى عدد الجزيئات التي تتفاعل في خطوة واحدة (أحادية الجزيئية، ثنائية الجزيئية، ثلاثية الجزيئات).",
          "zh": "分子度是指一步反应的粒子数量（单分子、双分子、​​三分子）。",
          "ku": "Molecularity hejmara keriyên ku di yek gavê de bertek nîşan didin (yekmolekular, bimolekular, trimolekular) vedibêje."
        },
        {
          "tr": "Ekzotermik tepkimelerde sıcaklık arttıkça tepkime hızı yavaşlar.",
          "en": "In exothermic reactions, as the temperature increases, the reaction rate slows down.",
          "de": "Bei exothermen Reaktionen verlangsamt sich die Reaktionsgeschwindigkeit mit steigender Temperatur.",
          "fr": "Dans les réactions exothermiques, à mesure que la température augmente, la vitesse de réaction ralentit.",
          "ru": "В экзотермических реакциях с повышением температуры скорость реакции замедляется.",
          "ar": "في التفاعلات الطاردة للحرارة، مع زيادة درجة الحرارة، يتباطأ معدل التفاعل.",
          "zh": "在放热反应中，随着温度升高，反应速率减慢。",
          "ku": "Di reaksiyonên exotermîk de, her ku germahî zêde dibe, rêjeya reaksiyonê hêdî dibe."
        },
        {
          "tr": "Ara ürün tepkimenin başında eklenen katalizördür.",
          "en": "The intermediate product is the catalyst added at the beginning of the reaction.",
          "de": "Das Zwischenprodukt ist der zu Beginn der Reaktion zugesetzte Katalysator.",
          "fr": "Le produit intermédiaire est le catalyseur ajouté au début de la réaction.",
          "ru": "Промежуточным продуктом является катализатор, добавляемый в начале реакции.",
          "ar": "المنتج الوسيط هو المحفز المضاف في بداية التفاعل.",
          "zh": "中间产物是反应开始时添加的催化剂。",
          "ku": "Hilbera navîn ew katalîzator e ku di destpêka reaksiyonê de tê zêdekirin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Molekülerite, tek bir basamakta tepkimeye giren tanecik sayısını ifade eder (unimoleküler, bimoleküler, trimoleküler).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Molecularity refers to the number of particles that react in a single step (unimolecular, bimolecular, trimolecular).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Unter Molekularität versteht man die Anzahl der Teilchen, die in einem einzigen Schritt reagieren (unimolekular, bimolekular, trimolekular).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La moléculaire fait référence au nombre de particules qui réagissent en une seule étape (unimoléculaire, bimoléculaire, trimoléculaire).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Молекулярность относится к числу частиц, которые реагируют за одну стадию (мономолекулярная, бимолекулярная, тримолекулярная).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تشير الجزيئية إلى عدد الجزيئات التي تتفاعل في خطوة واحدة (أحادية الجزيئية، ثنائية الجزيئية، ثلاثية الجزيئات).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“分子度是指一步反应的粒子数量（单分子、双分子、​​三分子）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Molecularity hejmara keriyên ku di yek gavê de bertek nîşan didin (yekmolekular, bimolekular, trimolekular) vedibêje.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u17-twin14",
      "stem": {
        "tr": "Kimyasal Tepkimelerde Hız konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Reaction Rates, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Reaktionsgeschwindigkeit: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Vitesse de Réaction, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Скорость химических реакций», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"سرعة التفاعلات الكيميائية\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“化学反应速率”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Leza Reaksiyonên Kîmyewî\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Tanecikler her çarpıştığında mutlaka kimyasal tepkime gerçekleşir.",
          "en": "Every time particles collide, a chemical reaction takes place.",
          "de": "Jedes Mal, wenn Teilchen kollidieren, findet eine chemische Reaktion statt.",
          "fr": "Chaque fois que des particules entrent en collision, une réaction chimique se produit.",
          "ru": "Каждый раз, когда частицы сталкиваются, происходит химическая реакция.",
          "ar": "في كل مرة تتصادم فيها الجزيئات، يحدث تفاعل كيميائي.",
          "zh": "每次粒子碰撞时，都会发生化学反应。",
          "ku": "Her cara ku pirtik li hev dikevin, reaksiyonek kîmyayî pêk tê."
        },
        {
          "tr": "Basamaklı tepkimelerde hız en hızlı basamağa göre belirlenir.",
          "en": "In stepwise reactions, the rate is determined by the fastest step.",
          "de": "Bei schrittweisen Reaktionen wird die Geschwindigkeit durch den schnellsten Schritt bestimmt.",
          "fr": "Dans les réactions par étapes, la vitesse est déterminée par l’étape la plus rapide.",
          "ru": "В ступенчатых реакциях скорость определяется самой быстрой стадией.",
          "ar": "في التفاعلات المتدرجة، يتم تحديد المعدل بواسطة الخطوة الأسرع.",
          "zh": "在逐步反应中，速率由最快的步骤决定。",
          "ku": "Di reaksiyonên gav bi gav de, rêje bi gavê herî bilez tê destnîşankirin."
        },
        {
          "tr": "Sıcaklık artışı aktifleşme enerjisini düşürerek tepkimeyi hızlandırır.",
          "en": "Increasing temperature accelerates the reaction by decreasing the activation energy.",
          "de": "Eine Erhöhung der Temperatur beschleunigt die Reaktion durch Verringerung der Aktivierungsenergie.",
          "fr": "L'augmentation de la température accélère la réaction en diminuant l'énergie d'activation.",
          "ru": "Повышение температуры ускоряет реакцию за счет уменьшения энергии активации.",
          "ar": "تؤدي زيادة درجة الحرارة إلى تسريع التفاعل عن طريق تقليل طاقة التنشيط.",
          "zh": "升高温度可通过降低活化能来加速反应。",
          "ku": "Zêdebûna germahiyê bi kêmkirina enerjiya aktîfkirinê re reaksiyonê leztir dike."
        },
        {
          "tr": "Tersiyer kalsiyum karbonat tozunun asitte çözünmesi parça kireç taşına göre temas yüzeyi nedeniyle çok daha hızlıdır.",
          "en": "Tertiary calcium carbonate powder dissolves in acid much faster than lump limestone due to its contact surface.",
          "de": "Tertiäres Calciumcarbonat-Pulver löst sich aufgrund seiner Kontaktoberfläche viel schneller in Säure auf als Stückkalkstein.",
          "fr": "La poudre de carbonate de calcium tertiaire se dissout dans l'acide beaucoup plus rapidement que le calcaire en morceaux en raison de sa surface de contact.",
          "ru": "Порошок третичного карбоната кальция растворяется в кислоте гораздо быстрее, чем кусковый известняк, благодаря своей контактной поверхности.",
          "ar": "يذوب مسحوق كربونات الكالسيوم الثلاثي في ​​الحمض بشكل أسرع بكثير من الحجر الجيري المقطوع بسبب سطح ملامسته.",
          "zh": "由于其接触表面，叔碳酸钙粉末在酸中的溶解速度比块状石灰石快得多。",
          "ku": "Toza karbonat a kalsiyûmê ya sêyem ji ber rûbera pêwendiya wê di asîdê de ji kevirê kilsinî pir zûtir dihele."
        },
        {
          "tr": "Katalizör tepkime sonunda tükenerek yok olur.",
          "en": "The catalyst is consumed and destroyed at the end of the reaction.",
          "de": "Am Ende der Reaktion wird der Katalysator verbraucht und zerstört.",
          "fr": "Le catalyseur est consommé et détruit à la fin de la réaction.",
          "ru": "Катализатор расходуется и разрушается в конце реакции.",
          "ar": "يتم استهلاك المحفز وتدميره في نهاية التفاعل.",
          "zh": "催化剂在反应结束时被消耗和破坏。",
          "ku": "Katalîzator di dawiya reaksiyonê de tê vexwarin û hilweşandin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Tersiyer kalsiyum karbonat tozunun asitte çözünmesi parça kireç taşına göre temas yüzeyi nedeniyle çok daha hızlıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Tertiary calcium carbonate powder dissolves in acid much faster than lump limestone due to its contact surface.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Tertiäres Calciumcarbonat-Pulver löst sich aufgrund seiner Kontaktoberfläche viel schneller in Säure auf als Stückkalkstein.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La poudre de carbonate de calcium tertiaire se dissout dans l'acide beaucoup plus rapidement que le calcaire en morceaux en raison de sa surface de contact.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Порошок третичного карбоната кальция растворяется в кислоте гораздо быстрее, чем кусковый известняк, благодаря своей контактной поверхности.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يذوب مسحوق كربونات الكالسيوم الثلاثي في ​​الحمض بشكل أسرع بكثير من الحجر الجيري المقطوع بسبب سطح ملامسته.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“由于其接触表面，叔碳酸钙粉末在酸中的溶解速度比块状石灰石快得多。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Toza karbonat a kalsiyûmê ya sêyem ji ber rûbera pêwendiya wê di asîdê de ji kevirê kilsinî pir zûtir dihele.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u17-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimyasal Tepkimelerde Hız ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Reaction Rates, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Reaktionsgeschwindigkeit: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Vitesse de Réaction, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Скорость химических реакций», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"سرعة التفاعلات الكيميائية\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“化学反应速率”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Leza Reaksiyonên Kîmyewî\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Tepkime hızı reaktiflerin mol sayısı arttıkça zamanla artar.",
          "en": "The reaction rate increases over time as the number of moles of reactants increases.",
          "de": "Die Reaktionsgeschwindigkeit nimmt mit der Zeit zu, wenn die Anzahl der Mol der Reaktanten zunimmt.",
          "fr": "La vitesse de réaction augmente avec le temps à mesure que le nombre de moles de réactifs augmente.",
          "ru": "Скорость реакции увеличивается с течением времени по мере увеличения количества молей реагентов.",
          "ar": "يزداد معدل التفاعل بمرور الوقت مع زيادة عدد مولات المواد المتفاعلة.",
          "zh": "随着反应物摩尔数的增加，反应速率随着时间的推移而增加。",
          "ku": "Rêjeya reaksiyonê bi demê re her ku hejmara molên reaktant zêde dibe zêde dibe."
        },
        {
          "tr": "Katalizör tepkime entalpisini (ΔH) düşürerek sistemi rahatlatır.",
          "en": "The catalyst relaxes the system by reducing the reaction enthalpy (ΔH).",
          "de": "Der Katalysator entspannt das System, indem er die Reaktionsenthalpie (ΔH) verringert.",
          "fr": "Le catalyseur détend le système en réduisant l'enthalpie de réaction (ΔH).",
          "ru": "Катализатор расслабляет систему за счет снижения энтальпии реакции (ΔH).",
          "ar": "يقوم المحفز بإرخاء النظام عن طريق تقليل المحتوى الحراري للتفاعل (ΔH).",
          "zh": "催化剂通过降低反应焓 (ΔH) 来松弛系统。",
          "ku": "Katalîzator bi kêmkirina entalpiya reaksiyonê (ΔH) pergalê rehet dike."
        },
        {
          "tr": "Temas yüzeyinin artması homojen gaz tepkimelerinin hızını artırır.",
          "en": "Increasing the contact surface increases the rate of homogeneous gas reactions.",
          "de": "Durch die Vergrößerung der Kontaktfläche erhöht sich die Geschwindigkeit homogener Gasreaktionen.",
          "fr": "L'augmentation de la surface de contact augmente la vitesse des réactions gazeuses homogènes.",
          "ru": "Увеличение поверхности контакта увеличивает скорость гомогенных газовых реакций.",
          "ar": "زيادة سطح التلامس يزيد من معدل تفاعلات الغازات المتجانسة.",
          "zh": "增加接触表面可提高均质气体反应的速率。",
          "ku": "Zêdekirina rûbera têkiliyê rêjeya reaksiyonên gaza homojen zêde dike."
        },
        {
          "tr": "Hız sabiti k nın birimi tepkime derecesinden bağımsızdır.",
          "en": "The unit of the rate constant k is independent of the degree of reaction.",
          "de": "Die Einheit der Geschwindigkeitskonstante k ist unabhängig vom Reaktionsgrad.",
          "fr": "L'unité de la constante de vitesse k est indépendante du degré de réaction.",
          "ru": "Единица константы скорости k не зависит от степени реакции.",
          "ar": "وحدة المعدل الثابت k مستقلة عن درجة التفاعل.",
          "zh": "速率常数k的单位与反应程度无关。",
          "ku": "Yekeya leza sabit k ji dereceya reaksiyonê serbixwe ye."
        },
        {
          "tr": "Hız sabiti k yı değiştiren faktörler: Sıcaklık, Katalizör, Temas yüzeyi ve Maddenin cinsidir (TSKM).",
          "en": "Factors that change the rate constant k: Temperature, Catalyst, Contact surface and Type of Substance (TSKM).",
          "de": "Faktoren, die die Geschwindigkeitskonstante k verändern: Temperatur, Katalysator, Kontaktoberfläche und Stoffart (TSKM).",
          "fr": "Facteurs qui modifient la constante de vitesse k : température, catalyseur, surface de contact et type de substance (TSKM).",
          "ru": "Факторы, изменяющие константу скорости k: Температура, Катализатор, Поверхность контакта и Тип вещества (ТСКМ).",
          "ar": "العوامل التي تغير ثابت المعدل k: درجة الحرارة، المحفز، سطح التلامس ونوع المادة (TSKM).",
          "zh": "改变速率常数 k 的因素：温度、催化剂、接触表面和物质类型 (TSKM)。",
          "ku": "Faktorên ku domdariya rêje k diguherînin: Germahiya, Katalîzator, Rûyê Têkiliyê û Cureya Madeyê (TSKM)."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Hız sabiti k yı değiştiren faktörler: Sıcaklık, Katalizör, Temas yüzeyi ve Maddenin cinsidir (TSKM).\" ifadesidir. Derişim hızı artırır, k sabitini DEĞİŞTİRMEZ!",
        "en": "The correct statement is: \"Factors that change the rate constant k: Temperature, Catalyst, Contact surface and Type of Substance (TSKM).\". Concentration increases the rate, it does NOT change the constant k!",
        "de": "Die zutreffende Aussage lautet: \"Faktoren, die die Geschwindigkeitskonstante k verändern: Temperatur, Katalysator, Kontaktoberfläche und Stoffart (TSKM).\". Konzentration erhöht die Geschwindigkeit, sie verändert NICHT die Konstante k!",
        "fr": "L'affirmation exacte est: \"Facteurs qui modifient la constante de vitesse k : température, catalyseur, surface de contact et type de substance (TSKM).\". La concentration augmente le taux, elle ne change PAS la constante k !",
        "ru": "Правильное утверждение: «Факторы, изменяющие константу скорости k: Температура, Катализатор, Поверхность контакта и Тип вещества (ТСКМ).». Концентрация увеличивает скорость, но НЕ меняет константу k!",
        "ar": "العبارة الصحيحة هي: \"العوامل التي تغير ثابت المعدل k: درجة الحرارة، المحفز، سطح التلامس ونوع المادة (TSKM).\". التركيز يزيد المعدل، ولا يغير الثابت k!",
        "zh": "正确表述为：“改变速率常数 k 的因素：温度、催化剂、接触表面和物质类型 (TSKM)。”。浓度会增加速率，但不会改变常数 k！",
        "ku": "Gotina rast ev e: \"Faktorên ku domdariya rêje k diguherînin: Germahiya, Katalîzator, Rûyê Têkiliyê û Cureya Madeyê (TSKM).\". Konsansasyon rêjeyê zêde dike, k-ya sabît NAguherîne!"
      }
    },
    {
      "id": "u17-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimyasal Tepkimelerde Hız konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Reaction Rates, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Reaktionsgeschwindigkeit die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Vitesse de Réaction, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Скорость химических реакций», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"سرعة التفاعلات الكيميائية\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“化学反应速率”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Leza Reaksiyonên Kîmyewî\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "İyonlar arası zıt yüklü tepkimeler bağ kopması gerektirmediğinden oda koşullarında son derece hızlı gerçekleşir.",
          "en": "Since reactions between ions with opposite charges do not require bond breaking, they occur extremely quickly at room conditions.",
          "de": "Da Reaktionen zwischen Ionen mit entgegengesetzter Ladung keinen Bindungsbruch erfordern, laufen sie bei Raumbedingungen extrem schnell ab.",
          "fr": "Étant donné que les réactions entre ions de charges opposées ne nécessitent pas de rupture de liaison, elles se produisent extrêmement rapidement dans des conditions ambiantes.",
          "ru": "Поскольку реакции между ионами с противоположными зарядами не требуют разрыва связи, в комнатных условиях они протекают чрезвычайно быстро.",
          "ar": "وبما أن التفاعلات بين الأيونات ذات الشحنات المعاكسة لا تتطلب كسر الروابط، فإنها تحدث بسرعة كبيرة في ظروف الغرفة.",
          "zh": "由于带相反电荷的离子之间的反应不需要键断裂，因此它们在室温条件下发生得非常快。",
          "ku": "Ji ber ku reaksiyonên di navbera îyonên bi barên berevajî de ne hewceyî şikandina girêdanê ne, ew di şert û mercên odeyê de pir zû çêdibin."
        },
        {
          "tr": "Saf katıların derişimi hız denkleminde üs olarak yer alır.",
          "en": "The concentration of pure solids is included as an exponent in the rate equation.",
          "de": "Die Konzentration reiner Feststoffe geht als Exponent in die Geschwindigkeitsgleichung ein.",
          "fr": "La concentration de solides purs est incluse comme exposant dans l’équation de taux.",
          "ru": "Концентрация чистых твердых веществ включена в уравнение скорости как показатель степени.",
          "ar": "يتم تضمين تركيز المواد الصلبة النقية كأس في معادلة المعدل.",
          "zh": "纯固体的浓度作为指数包含在速率方程中。",
          "ku": "Di hevkêşana rêjeyê de giraniya maddeyên safî wekî nîşander tê girtin."
        },
        {
          "tr": "Ekzotermik tepkimelerde sıcaklık arttıkça tepkime hızı yavaşlar.",
          "en": "In exothermic reactions, as the temperature increases, the reaction rate slows down.",
          "de": "Bei exothermen Reaktionen verlangsamt sich die Reaktionsgeschwindigkeit mit steigender Temperatur.",
          "fr": "Dans les réactions exothermiques, à mesure que la température augmente, la vitesse de réaction ralentit.",
          "ru": "В экзотермических реакциях с повышением температуры скорость реакции замедляется.",
          "ar": "في التفاعلات الطاردة للحرارة، مع زيادة درجة الحرارة، يتباطأ معدل التفاعل.",
          "zh": "在放热反应中，随着温度升高，反应速率减慢。",
          "ku": "Di reaksiyonên exotermîk de, her ku germahî zêde dibe, rêjeya reaksiyonê hêdî dibe."
        },
        {
          "tr": "Ara ürün tepkimenin başında eklenen katalizördür.",
          "en": "The intermediate product is the catalyst added at the beginning of the reaction.",
          "de": "Das Zwischenprodukt ist der zu Beginn der Reaktion zugesetzte Katalysator.",
          "fr": "Le produit intermédiaire est le catalyseur ajouté au début de la réaction.",
          "ru": "Промежуточным продуктом является катализатор, добавляемый в начале реакции.",
          "ar": "المنتج الوسيط هو المحفز المضاف في بداية التفاعل.",
          "zh": "中间产物是反应开始时添加的催化剂。",
          "ku": "Hilbera navîn ew katalîzator e ku di destpêka reaksiyonê de tê zêdekirin."
        },
        {
          "tr": "Tepkime derecesi net tepkimenin stokiyometrik katsayıları toplamına eşittir.",
          "en": "The degree of reaction is equal to the sum of the stoichiometric coefficients of the net reaction.",
          "de": "Der Reaktionsgrad ist gleich der Summe der stöchiometrischen Koeffizienten der Nettoreaktion.",
          "fr": "Le degré de réaction est égal à la somme des coefficients stoechiométriques de la réaction nette.",
          "ru": "Степень реакции равна сумме стехиометрических коэффициентов чистой реакции.",
          "ar": "درجة التفاعل تساوي مجموع المعاملات المتكافئة للتفاعل الصافي.",
          "zh": "反应程度等于净反应的化学计量系数之和。",
          "ku": "Dereceya reaksîyonê bi kombûna hevberên stokyometrîkî yên reaksiyona tevnê re ye."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"İyonlar arası zıt yüklü tepkimeler bağ kopması gerektirmediğinden oda koşullarında son derece hızlı gerçekleşir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Since reactions between ions with opposite charges do not require bond breaking, they occur extremely quickly at room conditions.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Da Reaktionen zwischen Ionen mit entgegengesetzter Ladung keinen Bindungsbruch erfordern, laufen sie bei Raumbedingungen extrem schnell ab.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Étant donné que les réactions entre ions de charges opposées ne nécessitent pas de rupture de liaison, elles se produisent extrêmement rapidement dans des conditions ambiantes.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Поскольку реакции между ионами с противоположными зарядами не требуют разрыва связи, в комнатных условиях они протекают чрезвычайно быстро.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"وبما أن التفاعلات بين الأيونات ذات الشحنات المعاكسة لا تتطلب كسر الروابط، فإنها تحدث بسرعة كبيرة في ظروف الغرفة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“由于带相反电荷的离子之间的反应不需要键断裂，因此它们在室温条件下发生得非常快。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ji ber ku reaksiyonên di navbera îyonên bi barên berevajî de ne hewceyî şikandina girêdanê ne, ew di şert û mercên odeyê de pir zû çêdibin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit17;
