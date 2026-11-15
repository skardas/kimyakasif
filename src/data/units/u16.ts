import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit16: ChemistryUnitSeedData = {
  "id": "u16",
  "order": 16,
  "exam": "AYT",
  "grade": 11,
  "title": {
    "tr": "Kimyasal Tepkimelerde Enerji",
    "en": "Energy in Chemical Reactions",
    "de": "Energie bei Reaktionen",
    "fr": "Énergie des Réactions",
    "ru": "Энергия в химических реакциях",
    "ar": "الطاقة في التفاعلات الكيميائية",
    "zh": "化学反应中的能量",
    "ku": "Enerjî Di Reaksiyonên Kîmyewî de"
  },
  "subtitle": {
    "tr": "Entalpi, Hess Yasası ve Bağ Enerjileri",
    "en": "ΔH, Hess Law & Bond Enthalpies",
    "de": "Enthalpie, Hesssches Gesetz und Bindungsenergien",
    "fr": "Enthalpie, loi de Hess et énergies de liaison",
    "ru": "Энтальпия, закон Гесса и энергии связи",
    "ar": "المحتوى الحراري، قانون هيس وطاقة السندات",
    "zh": "焓、赫斯定律和键能",
    "ku": "Enthalpy, Qanûna Hess û Enerjiyên Bond"
  },
  "facts": [
    {
      "id": "u16-f01",
      "fact": {
        "tr": "Entalpi değişimi (ΔH): Sabit basınç altında gerçekleşen tepkimede alınıp verilen ısı miktarıdır (ΔH = Hürünler - Hgirenler).",
        "en": "Enthalpy change (ΔH): the heat absorbed or released in a reaction taking place at constant pressure (ΔH = Hproducts - Hreactants).",
        "de": "Enthalpieänderung (ΔH): die bei einer Reaktion unter konstantem Druck aufgenommene oder abgegebene Wärme (ΔH = HProdukte - HEdukte).",
        "fr": "Variation d'enthalpie (ΔH) : chaleur absorbée ou dégagée lors d'une réaction à pression constante (ΔH = Hproduits - Hréactifs).",
        "ru": "Изменение энтальпии (ΔH) — теплота, поглощаемая или выделяемая в реакции при постоянном давлении (ΔH = Hпродуктов - Hреагентов).",
        "ar": "تغير الإنثالبي (ΔH): هو كمية الحرارة الممتصة أو المنطلقة في تفاعل يحدث عند ضغط ثابت (ΔH = Hالنواتج - Hالمتفاعلات).",
        "zh": "焓变（ΔH）：在恒压下进行的反应中吸收或放出的热量（ΔH = H生成物 - H反应物）。",
        "ku": "Guherîna entalpiyê (ΔH): germa ku di reaksiyoneke di bin zexta sabît de tê girtin an berdan (ΔH = Hberhem - Hreaktant)."
      },
      "trap": {
        "tr": "Entalpi doğrudan ölçülebilen bir büyüklüktür, farkı ölçülemez.",
        "en": "Enthalpy is a quantity that can be measured directly, its difference cannot be measured.",
        "de": "Enthalpie ist eine Größe, die direkt gemessen werden kann, ihre Differenz kann nicht gemessen werden.",
        "fr": "L'enthalpie est une grandeur qui peut être mesurée directement, sa différence ne peut pas être mesurée.",
        "ru": "Энтальпия – это величина, которую можно измерить непосредственно, ее разницу измерить невозможно.",
        "ar": "الإنثالبي كمية يمكن قياسها مباشرة، ولا يمكن قياس فرقها.",
        "zh": "焓是可以直接测量的量，其差值无法测量。",
        "ku": "Entalpî mîqdarek e ku rasterast dikare were pîvandin, cûdahiya wê nayê pîvandin."
      }
    },
    {
      "id": "u16-f02",
      "fact": {
        "tr": "Ekzotermik tepkimelerde ΔH < 0 dır; ısı ürünler tarafına yazılır ve sistem çevreye ısı verir.",
        "en": "In exothermic reactions ΔH < 0; heat is written on the products side and the system releases heat to the surroundings.",
        "de": "Bei exothermen Reaktionen ist ΔH < 0; die Wärme wird auf der Produktseite notiert und das System gibt Wärme an die Umgebung ab.",
        "fr": "Dans les réactions exothermiques, ΔH < 0 ; la chaleur s'écrit du côté des produits et le système cède de la chaleur au milieu extérieur.",
        "ru": "В экзотермических реакциях ΔH < 0; теплоту записывают со стороны продуктов, и система отдаёт тепло окружающей среде.",
        "ar": "في التفاعلات الطاردة للحرارة ΔH < 0؛ تُكتب الحرارة في جهة النواتج ويطلق النظام حرارة إلى الوسط المحيط.",
        "zh": "放热反应中 ΔH < 0；热量写在生成物一侧，体系向环境放出热量。",
        "ku": "Di reaksiyonên ekzotermîk de ΔH < 0 e; germ li aliyê berheman tê nivîsandin û sîstem germê dide hawîrdorê."
      },
      "trap": {
        "tr": "Ekzotermik tepkimelerde ürünlerin entalpisi girenlerinkinden daha büyüktür.",
        "en": "In exothermic reactions, the enthalpy of the products is greater than that of the reactants.",
        "de": "Bei exothermen Reaktionen ist die Enthalpie der Produkte größer als die der Reaktanten.",
        "fr": "Dans les réactions exothermiques, l'enthalpie des produits est supérieure à celle des réactifs.",
        "ru": "В экзотермических реакциях энтальпия продуктов превышает энтальпию реагентов.",
        "ar": "في التفاعلات الطاردة للحرارة، يكون المحتوى الحراري للنواتج أكبر من المحتوى الحراري للمواد المتفاعلة.",
        "zh": "在放热反应中，产物的热函大于反应物的热函。",
        "ku": "Di reaksiyonên exotermîk de, entalpiya hilberan ji ya reaktantan mezintir e."
      }
    },
    {
      "id": "u16-f03",
      "fact": {
        "tr": "Endotermik tepkimelerde ΔH > 0 dır; ısı girenler tarafına yazılır ve sistem çevreden ısı alır.",
        "en": "In endothermic reactions ΔH > 0; heat is written on the reactants side and the system absorbs heat from the surroundings.",
        "de": "Bei endothermen Reaktionen ist ΔH > 0; die Wärme wird auf der Eduktseite notiert und das System nimmt Wärme aus der Umgebung auf.",
        "fr": "Dans les réactions endothermiques, ΔH > 0 ; la chaleur s'écrit du côté des réactifs et le système absorbe de la chaleur du milieu extérieur.",
        "ru": "В эндотермических реакциях ΔH > 0; теплоту записывают со стороны реагентов, и система поглощает тепло из окружающей среды.",
        "ar": "في التفاعلات الماصة للحرارة ΔH > 0؛ تُكتب الحرارة في جهة المتفاعلات ويمتص النظام حرارة من الوسط المحيط.",
        "zh": "吸热反应中 ΔH > 0；热量写在反应物一侧，体系从环境吸收热量。",
        "ku": "Di reaksiyonên endotermîk de ΔH > 0 e; germ li aliyê reaktantan tê nivîsandin û sîstem germê ji hawîrdorê distîne."
      },
      "trap": {
        "tr": "Endotermik tepkimeler başladıktan sonra kendiliğinden devam eder.",
        "en": "Endothermic reactions continue spontaneously once they start.",
        "de": "Endotherme Reaktionen laufen spontan weiter, sobald sie beginnen.",
        "fr": "Les réactions endothermiques se poursuivent spontanément une fois qu'elles ont commencé.",
        "ru": "Эндотермические реакции продолжаются самопроизвольно после начала.",
        "ar": "تستمر التفاعلات الماصة للحرارة تلقائيًا بمجرد أن تبدأ.",
        "zh": "吸热反应一旦开始就会自发地持续下去。",
        "ku": "Reaksiyonên endotermîk piştî ku dest pê bikin bi xweber berdewam dikin."
      }
    },
    {
      "id": "u16-f04",
      "fact": {
        "tr": "Standart oluşum entalpisi (ΔHf°): 25 °C ve 1 atm de 1 mol bileşiğin kararlı elementlerinden oluşması sırasındaki entalpi değişimidir.",
        "en": "Standard enthalpy of formation (ΔHf°): It is the enthalpy change during the formation of 1 mole of a compound from its stable elements at 25 °C and 1 atm.",
        "de": "Standardbildungsenthalpie (ΔHf°): Dies ist die Enthalpieänderung während der Bildung von 1 Mol einer Verbindung aus ihren stabilen Elementen bei 25 °C und 1 atm.",
        "fr": "Enthalpie standard de formation (ΔHf°) : C'est le changement d'enthalpie lors de la formation de 1 mole d'un composé à partir de ses éléments stables à 25 °C et 1 atm.",
        "ru": "Стандартная энтальпия образования (ΔHf°): это изменение энтальпии при образовании 1 моля соединения из его стабильных элементов при 25 °C и 1 атм.",
        "ar": "المحتوى الحراري القياسي للتكوين (ΔHf°): هو تغير المحتوى الحراري أثناء تكوين 1 مول من المركب من عناصره المستقرة عند درجة حرارة 25 درجة مئوية و1 ضغط جوي.",
        "zh": "标准生成焓（ΔHf°）：它是在25℃和1个大气压下从其稳定元素生成1摩尔化合物过程中的焓变。",
        "ku": "Entalpiya avabûnê ya standard (ΔHf°): Ew guherîna entalpiyê ye di dema çêbûna 1 molek pêkhateyek ji hêmanên wê yên domdar di 25 °C û 1 atm de."
      },
      "trap": {
        "tr": "Elementlerin tüm allotroplarının standart oluşum entalpisi sıfır kabul edilir.",
        "en": "The standard enthalpy of formation of all allotropes of elements is assumed to be zero.",
        "de": "Die Standardbildungsenthalpie aller Allotrope der Elemente wird mit Null angenommen.",
        "fr": "L'enthalpie standard de formation de tous les allotropes d'éléments est supposée être nulle.",
        "ru": "Стандартная энтальпия образования всех аллотропов элементов принимается равной нулю.",
        "ar": "من المفترض أن يكون المحتوى الحراري القياسي لتكوين جميع المتآصلات للعناصر صفرًا.",
        "zh": "假设元素的所有同素异形体的标准形成焓为零。",
        "ku": "Entalpiya standard a pêkhatina hemî allotropên hêmanan wekî sifir tê hesibandin."
      }
    },
    {
      "id": "u16-f05",
      "fact": {
        "tr": "Elementlerin oda koşullarındaki en kararlı hallerinin standart oluşum entalpisi sıfırdır (O2(g)=0, C(grafit)=0; O3(g)≠0, C(elmas)≠0).",
        "en": "The standard formation enthalpy of the most stable states of the elements at room conditions is zero (O2(g)=0, C(graphite)=0; O3(g)≠0, C(diamond)≠0).",
        "de": "Die Standardbildungsenthalpie der stabilsten Zustände der Elemente bei Raumbedingungen beträgt Null (O2(g)=0, C(Graphit)=0; O3(g)≠0, C(Diamant)≠0).",
        "fr": "L'enthalpie standard de formation des états les plus stables des éléments dans les conditions ambiantes est nulle (O2(g)=0, C(graphite)=0 ; O3(g)≠0, C(diamant)≠0).",
        "ru": "Стандартная энтальпия образования наиболее стабильных состояний элементов в комнатных условиях равна нулю (O2(g)=0, C(графит)=0; O3(g)≠0, C(алмаз)≠0).",
        "ar": "المحتوى الحراري للتكوين القياسي للحالات الأكثر استقرارًا للعناصر في ظروف الغرفة هو صفر (O2(g)=0, C(graphite)=0; O3(g)≠0, C(diamond)≠0).",
        "zh": "室温条件下元素最稳定状态的标准生成焓为零（O2（g）= 0，C（石墨）= 0；O3（g）≠ 0，C（金刚石）≠ 0）。",
        "ku": "Entalpiya pêkhatina standard a rewşên herî bi îstîqrar ên hêmanan di şert û mercên odeyê de sifir e (O2(g)=0, C(grafît)=0; O3(g)≠0, C(almas)≠0)."
      },
      "trap": {
        "tr": "Elmasın standart oluşum entalpisi sıfırdır.",
        "en": "The standard enthalpy of formation of diamond is zero.",
        "de": "Die Standardbildungsenthalpie von Diamant ist Null.",
        "fr": "L'enthalpie standard de formation du diamant est nulle.",
        "ru": "Стандартная энтальпия образования алмаза равна нулю.",
        "ar": "المحتوى الحراري القياسي لتكوين الماس هو صفر.",
        "zh": "金刚石的标准生成焓为零。",
        "ku": "Entalpiya standard a pêkhatina almasê sifir e."
      }
    },
    {
      "id": "u16-f06",
      "fact": {
        "tr": "Hess Yasası: Bir tepkime birden fazla basamağın toplamı şeklinde yazılabiliyorsa tepkime entalpisi basamakların entalpileri toplamına eşittir.",
        "en": "Hess's Law: If a reaction can be written as the sum of more than one step, the reaction enthalpy is equal to the sum of the enthalpies of the steps.",
        "de": "Hesssches Gesetz: Wenn eine Reaktion als Summe von mehr als einem Schritt beschrieben werden kann, ist die Reaktionsenthalpie gleich der Summe der Enthalpien der Schritte.",
        "fr": "Loi de Hess : Si une réaction peut être écrite comme la somme de plusieurs étapes, l'enthalpie de la réaction est égale à la somme des enthalpies des étapes.",
        "ru": "Закон Гесса: Если реакцию можно записать как сумму более чем одной стадии, то энтальпия реакции равна сумме энтальпий стадий.",
        "ar": "قانون هيس: إذا أمكن كتابة التفاعل على صورة مجموع أكثر من خطوة واحدة، فإن أنتالبية التفاعل تساوي مجموع أنتالبيات الخطوات.",
        "zh": "赫斯定律：如果一个反应可以写成多个步骤的总和，则反应焓等于步骤的焓总和。",
        "ku": "Zagona Hesen: Eger reaksiyonek bi kombûna ji yek gavan zêdetir were nivîsandin, entalpiya reaksiyonê bi kombûna entalpiyên gavan re ye."
      },
      "trap": {
        "tr": "Tepkime ters çevrilirse ΔH ın işareti değişmez.",
        "en": "If the reaction is reversed, the sign of ΔH does not change.",
        "de": "Bei umgekehrter Reaktion ändert sich das Vorzeichen von ΔH nicht.",
        "fr": "Si la réaction est inversée, le signe de ΔH ne change pas.",
        "ru": "При обратном ходе реакции знак ΔH не меняется.",
        "ar": "إذا تم عكس التفاعل فإن إشارة ΔH لا تتغير.",
        "zh": "如果反应逆转，则 ΔH 的符号不会改变。",
        "ku": "Ger reaksîyon berevajî be, nîşana ΔH naguhere."
      }
    },
    {
      "id": "u16-f07",
      "fact": {
        "tr": "Tepkime ters çevrilirse ΔH ın işareti değişir; bir katsayıyla çarpılırsa ΔH da aynı katsayıyla çarpılır.",
        "en": "If the reaction is reversed, the sign of ΔH changes; If it is multiplied by a coefficient, ΔH is also multiplied by the same coefficient.",
        "de": "Bei umgekehrter Reaktion ändert sich das Vorzeichen von ΔH; Wenn es mit einem Koeffizienten multipliziert wird, wird ΔH auch mit demselben Koeffizienten multipliziert.",
        "fr": "Si la réaction est inversée, le signe de ΔH change ; S'il est multiplié par un coefficient, ΔH est également multiplié par le même coefficient.",
        "ru": "Если реакция обращена, знак ΔH меняется; Если его умножить на коэффициент, ΔH также умножится на тот же коэффициент.",
        "ar": "إذا تم عكس التفاعل، تتغير إشارة ΔH؛ إذا تم ضربها بمعامل، يتم ضرب ΔH أيضًا بنفس المعامل.",
        "zh": "如果反应逆转，则ΔH的符号改变；如果乘以系数，则ΔH也乘以相同的系数。",
        "ku": "Ger reaksîyon berevajî be, nîşana ΔH diguhere; Heger bi hevberekê were pirkirin, ΔH jî bi heman qasê tê zêdekirin."
      },
      "trap": {
        "tr": "Tepkime 2 ile çarpıldığında ΔH değeri aynı kalır.",
        "en": "When the reaction is multiplied by 2, the ΔH value remains the same.",
        "de": "Wenn die Reaktion mit 2 multipliziert wird, bleibt der ΔH-Wert gleich.",
        "fr": "Lorsque la réaction est multipliée par 2, la valeur ΔH reste la même.",
        "ru": "Когда реакцию умножают на 2, значение ΔH остается прежним.",
        "ar": "عندما يتم ضرب التفاعل بـ 2، تظل قيمة ΔH كما هي.",
        "zh": "当反应乘以2时，ΔH值保持不变。",
        "ku": "Dema ku reaksiyonê bi 2-ê zêde dibe, nirxa ΔH wekî xwe dimîne."
      }
    },
    {
      "id": "u16-f08",
      "fact": {
        "tr": "Bağ enerjileri üzerinden entalpi: ΔH = Σ(Kırılan Bağ Enerjileri) - Σ(Oluşan Bağ Enerjileri) formülüyle bulunur.",
        "en": "Enthalpy based on bond energies: It is found by the formula ΔH = Σ(Broken Bond Energies) - Σ(Formed Bond Energies).",
        "de": "Enthalpie basierend auf Bindungsenergien: Sie wird durch die Formel ΔH = Σ(Energien gebrochener Bindungen) – Σ(Energien gebildeter Bindungen) ermittelt.",
        "fr": "Enthalpie basée sur les énergies de liaison : elle se trouve par la formule ΔH = Σ (énergies de liaison brisées) - Σ (énergies de liaison formées).",
        "ru": "Энтальпия, основанная на энергии связи: находится по формуле ΔH = Σ (энергия разрыва связи) - Σ (энергия образовавшейся связи).",
        "ar": "المحتوى الحراري المعتمد على طاقات الروابط: يتم العثور عليه بالصيغة ΔH = Σ(طاقات الروابط المكسورة) - Σ(طاقات الروابط المتكونة).",
        "zh": "基于键能的焓：通过公式 ΔH = Σ（断裂键能）- Σ（形成键能）求得。",
        "ku": "Entalpî li ser bingeha enerjiyên girêdanê: Bi formula ΔH = Σ(Enerjiyên Têkiliya Şikestî) - Σ(Enerjiyên Bondê yên Çêkirî) tê dîtin."
      },
      "trap": {
        "tr": "Bağ enerjisi hesabında oluşan bağlardan kırılan bağlar çıkarılır.",
        "en": "In the bond energy calculation, broken bonds are subtracted from formed bonds.",
        "de": "Bei der Berechnung der Bindungsenergie werden gebrochene Bindungen von gebildeten Bindungen abgezogen.",
        "fr": "Dans le calcul de l’énergie des liaisons, les liaisons rompues sont soustraites des liaisons formées.",
        "ru": "При расчете энергии связи разорванные связи вычитаются из образовавшихся.",
        "ar": "في حساب طاقة الرابطة، يتم طرح الروابط المكسورة من الروابط المشكلة.",
        "zh": "在键能计算中，从形成的键中减去断裂的键。",
        "ku": "Di hesabkirina enerjiya girêdanê de, bendên şikestî ji bendên çêkirî têne derxistin."
      }
    },
    {
      "id": "u16-f09",
      "fact": {
        "tr": "Kimyasal bağ oluşumu daima ekzotermiktir (ΔH < 0); bağ kırılması daima endotermiktir (ΔH > 0).",
        "en": "Chemical bond formation is always exothermic (ΔH < 0); bond breaking is always endothermic (ΔH > 0).",
        "de": "Die Bildung chemischer Bindungen ist immer exotherm (ΔH < 0); Der Bindungsbruch ist immer endotherm (ΔH > 0).",
        "fr": "La formation de liaisons chimiques est toujours exothermique (ΔH < 0) ; la rupture de liaison est toujours endothermique (ΔH > 0).",
        "ru": "Образование химической связи всегда экзотермично (ΔH <0); разрыв связи всегда эндотермический (ΔH > 0).",
        "ar": "يكون تكوين الرابطة الكيميائية دائمًا طاردًا للحرارة (ΔH < 0)؛ يكون كسر الروابط دائمًا ماصًا للحرارة (ΔH > 0).",
        "zh": "化学键的形成总是放热的（ΔH < 0）；键断裂总是吸热的 (ΔH > 0)。",
        "ku": "Çêbûna girêdana kîmyewî her dem germ e (ΔH < 0); şikandina girêdanê her tim endotermîk e (ΔH > 0)."
      },
      "trap": {
        "tr": "Kovalent bağ kırılırken çevreye yüksek ısı yayılır.",
        "en": "As the covalent bond is broken, high heat is released into the environment.",
        "de": "Beim Aufbrechen der kovalenten Bindung wird große Wärme an die Umgebung abgegeben.",
        "fr": "Lorsque la liaison covalente est rompue, une chaleur élevée est libérée dans l’environnement.",
        "ru": "Поскольку ковалентная связь разрывается, в окружающую среду выделяется большое количество тепла.",
        "ar": "عند كسر الرابطة التساهمية، يتم إطلاق حرارة عالية في البيئة.",
        "zh": "当共价键断裂时，高热量被释放到环境中。",
        "ku": "Ji ber ku girêdana kovalentê tê şikestin, germa zêde ber bi hawîrdorê ve tê berdan."
      }
    },
    {
      "id": "u16-f10",
      "fact": {
        "tr": "Aktifleşmiş kompleks, tepkimenin zirve noktasındaki yüksek enerjili ve kararsız atomlar topluluğudur.",
        "en": "The activated complex is a collection of high-energy and unstable atoms at the peak of the reaction.",
        "de": "Der aktivierte Komplex ist eine Ansammlung hochenergetischer und instabiler Atome am Höhepunkt der Reaktion.",
        "fr": "Le complexe activé est un ensemble d’atomes instables et à haute énergie au sommet de la réaction.",
        "ru": "Активированный комплекс представляет собой совокупность высокоэнергетических и нестабильных атомов на пике реакции.",
        "ar": "المجمع المنشط عبارة عن مجموعة من الذرات عالية الطاقة وغير المستقرة في ذروة التفاعل.",
        "zh": "活化的络合物是反应峰值时高能且不稳定的原子的集合。",
        "ku": "Kompleksa aktîfkirî berhevokek ji atomên bi enerjiya bilind û ne aram di lûtkeya reaksiyonê de ye."
      },
      "trap": {
        "tr": "Aktifleşmiş kompleks izole edilip şişede saklanabilen kararlı bir maddedir.",
        "en": "The activated complex is a stable substance that can be isolated and stored in a vial.",
        "de": "Der aktivierte Komplex ist eine stabile Substanz, die isoliert und in einem Fläschchen aufbewahrt werden kann.",
        "fr": "Le complexe activé est une substance stable qui peut être isolée et stockée dans un flacon.",
        "ru": "Активированный комплекс представляет собой стабильное вещество, которое можно выделить и хранить во флаконе.",
        "ar": "المركب المنشط عبارة عن مادة مستقرة يمكن عزلها وتخزينها في قارورة.",
        "zh": "活化的复合物是一种稳定的物质，可以分离并储存在小瓶中。",
        "ku": "Kompleksa aktîfkirî maddeyek stabîl e ku dikare were veqetandin û di şûşeyek de were hilanîn."
      }
    },
    {
      "id": "u16-f11",
      "fact": {
        "tr": "İleri aktifleşme enerjisi (Eai) ve geri aktifleşme enerjisi (Eag) daima pozitif değerlerdir.",
        "en": "Forward activation energy (Eai) and reverse activation energy (Eag) are always positive values.",
        "de": "Vorwärtsaktivierungsenergie (Eai) und Rückwärtsaktivierungsenergie (Eag) sind immer positive Werte.",
        "fr": "L'énergie d'activation directe (Eai) et l'énergie d'activation inverse (Eag) sont toujours des valeurs positives.",
        "ru": "Энергия прямой активации (Eai) и энергия обратной активации (Eag) всегда имеют положительные значения.",
        "ar": "تعتبر طاقة التنشيط الأمامية (Eai) وطاقة التنشيط العكسية (Eag) قيمًا موجبة دائمًا.",
        "zh": "正向活化能 (Eai) 和反向活化能 (Eag) 始终为正值。",
        "ku": "Enerjiya çalakkirina pêş (Eai) û enerjiya çalakkirina berevajî (Eag) her gav nirxên erênî ne."
      },
      "trap": {
        "tr": "Ekzotermik tepkimelerde Eai negatif değer alır.",
        "en": "In exothermic reactions, Eai takes a negative value.",
        "de": "Bei exothermen Reaktionen nimmt Eai einen negativen Wert an.",
        "fr": "Dans les réactions exothermiques, Eai prend une valeur négative.",
        "ru": "В экзотермических реакциях Eai принимает отрицательное значение.",
        "ar": "في التفاعلات الطاردة للحرارة، يأخذ Eai قيمة سلبية.",
        "zh": "在放热反应中，Eai 取负值。",
        "ku": "Di reaksiyonên exotermîk de, Eai nirxek neyînî digire."
      }
    },
    {
      "id": "u16-f12",
      "fact": {
        "tr": "Tepkime entalpisi aktifleşme enerjilerinden de bulunabilir: ΔH = Eai - Eag dir.",
        "en": "The reaction enthalpy can also be found from the activation energies: ΔH = Eai - Eag.",
        "de": "Die Reaktionsenthalpie lässt sich auch aus den Aktivierungsenergien ermitteln: ΔH = Eai – Eag.",
        "fr": "L'enthalpie de réaction peut également être trouvée à partir des énergies d'activation : ΔH = Eai - Eag.",
        "ru": "Энтальпию реакции можно найти и по энергиям активации: ΔH = Eai - Eag.",
        "ar": "يمكن أيضًا العثور على المحتوى الحراري للتفاعل من طاقات التنشيط: ΔH = Eai - Eag.",
        "zh": "反应焓也可以从活化能求出：ΔH = Eai - Eag。",
        "ku": "Entalpiya reaksiyonê jî ji enerjiyên aktîfkirinê tê dîtin: ΔH = Eai - Eag."
      },
      "trap": {
        "tr": "ΔH = Eag - Eai dir.",
        "en": "ΔH = Eag - Eai.",
        "de": "ΔH = Eag – Eai.",
        "fr": "ΔH = Eag - Eai.",
        "ru": "ΔH = Eag - Eai.",
        "ar": "ΔH = إيج - إيا.",
        "zh": "ΔH = Eag - Eai。",
        "ku": "ΔH = Eag - Eai."
      }
    },
    {
      "id": "u16-f13",
      "fact": {
        "tr": "Gazların suda çözünmesi, donma, yoğuşma ve kırağılaşma ekzotermiktir.",
        "en": "The dissolution of gases in water, freezing, condensation and deposition (gas → solid) are exothermic.",
        "de": "Das Lösen von Gasen in Wasser, das Gefrieren, die Kondensation und die Resublimation sind exotherm.",
        "fr": "La dissolution des gaz dans l'eau, la solidification, la liquéfaction (condensation) et la condensation solide (gaz → solide) sont exothermiques.",
        "ru": "Растворение газов в воде, замерзание, конденсация и десублимация экзотермичны.",
        "ar": "ذوبان الغازات في الماء والتجمد والتكاثف والترسيب (تحول الغاز إلى صلب) عمليات طاردة للحرارة.",
        "zh": "气体溶于水、凝固、液化和凝华都是放热过程。",
        "ku": "Helbûna gazan di avê de, cemidîn, şilbûn (kondensasyon) û depozîsyon (gaz → hişk) ekzotermîk in."
      },
      "trap": {
        "tr": "Kırağılaşma olayında madde çevreden ısı alır.",
        "en": "During deposition (gas → solid), the substance absorbs heat from the surroundings.",
        "de": "Bei der Resublimation nimmt der Stoff Wärme aus der Umgebung auf.",
        "fr": "Lors de la condensation solide (gaz → solide), la substance absorbe de la chaleur du milieu extérieur.",
        "ru": "При десублимации вещество поглощает тепло из окружающей среды.",
        "ar": "أثناء الترسيب (تحول الغاز إلى صلب) تمتص المادة حرارة من الوسط المحيط.",
        "zh": "凝华过程中物质从环境吸收热量。",
        "ku": "Di dema depozîsyonê de (gaz → hişk) madde germê ji hawîrdorê distîne."
      }
    },
    {
      "id": "u16-f14",
      "fact": {
        "tr": "Erime, buharlaşma, süblimleşme ve gaz haldeki atomdan elektron koparma (iyonlaşma) endotermiktir.",
        "en": "Melting, evaporation, sublimation and removal of electrons from gaseous atoms (ionization) are endothermic.",
        "de": "Schmelzen, Verdampfen, Sublimation und Entzug von Elektronen aus gasförmigen Atomen (Ionisation) sind endotherm.",
        "fr": "La fusion, l'évaporation, la sublimation et l'élimination des électrons des atomes gazeux (ionisation) sont endothermiques.",
        "ru": "Плавление, испарение, сублимация и отрыв электронов от атомов газа (ионизация) являются эндотермическими.",
        "ar": "إن الانصهار والتبخر والتسامي وإزالة الإلكترونات من الذرات الغازية (التأين) هي مواد ماصة للحرارة.",
        "zh": "熔化、蒸发、升华和从气态原子中除去电子（电离）都是吸热的。",
        "ku": "Hêlbûn, helandin, binavkirin û rakirina elektronan ji atomên gazê (iyonîzasyon) endotermîk in."
      },
      "trap": {
        "tr": "İyonlaşma enerjisi ekzotermik bir süreçtir.",
        "en": "Ionization energy is an exothermic process.",
        "de": "Ionisierungsenergie ist ein exothermer Prozess.",
        "fr": "L'énergie d'ionisation est un processus exothermique.",
        "ru": "Энергия ионизации представляет собой экзотермический процесс.",
        "ar": "طاقة التأين هي عملية طاردة للحرارة.",
        "zh": "电离能是一个放热过程。",
        "ku": "Enerjiya ionîzasyonê pêvajoyek exotermîk e."
      }
    },
    {
      "id": "u16-f15",
      "fact": {
        "tr": "Tepkimeye giren maddelerin fiziksel hali değişirse tepkime entalpisi (ΔH) değişir.",
        "en": "If the physical state of the reactants changes, the reaction enthalpy (ΔH) changes.",
        "de": "Ändert sich der Aggregatzustand der Reaktanten, ändert sich auch die Reaktionsenthalpie (ΔH).",
        "fr": "Si l'état physique des réactifs change, l'enthalpie de réaction (ΔH) change.",
        "ru": "При изменении физического состояния реагентов изменяется энтальпия реакции (ΔH).",
        "ar": "إذا تغيرت الحالة الفيزيائية للمواد المتفاعلة، يتغير المحتوى الحراري للتفاعل (ΔH).",
        "zh": "如果反应物的物理状态发生变化，反应焓 (ΔH) 就会发生变化。",
        "ku": "Ger rewşa fizîkî ya reaktantan biguhere, entalpiya reaksiyonê (ΔH) diguhere."
      },
      "trap": {
        "tr": "Suyun gaz veya sıvı halde oluşması tepkime entalpisini etkilemez.",
        "en": "The formation of water in gas or liquid state does not affect the reaction enthalpy.",
        "de": "Die Bildung von Wasser im gasförmigen oder flüssigen Zustand hat keinen Einfluss auf die Reaktionsenthalpie.",
        "fr": "La formation d’eau à l’état gazeux ou liquide n’affecte pas l’enthalpie de réaction.",
        "ru": "Образование воды в газообразном или жидком состоянии не влияет на энтальпию реакции.",
        "ar": "لا يؤثر تكوين الماء في الحالة الغازية أو السائلة على المحتوى الحراري للتفاعل.",
        "zh": "气态或液态水的形成不影响反应焓。",
        "ku": "Çêbûna avê di rewşa gazê an şilek de bandorê li entalpiya reaksiyonê nake."
      }
    },
    {
      "id": "u16-f16",
      "fact": {
        "tr": "Ekzotermik tepkimelerde ürünlerin potansiyel enerjisi (entalpisi) girenlerinkinden düşük olduğundan ürünler girenlerden daha kararlıdır.",
        "en": "In exothermic reactions the products have lower potential energy (enthalpy) than the reactants, so the products are more stable than the reactants.",
        "de": "Bei exothermen Reaktionen haben die Produkte eine geringere potentielle Energie (Enthalpie) als die Edukte und sind daher stabiler als diese.",
        "fr": "Dans les réactions exothermiques, les produits ont une énergie potentielle (enthalpie) plus faible que les réactifs ; ils sont donc plus stables que les réactifs.",
        "ru": "В экзотермических реакциях потенциальная энергия (энтальпия) продуктов ниже, чем у реагентов, поэтому продукты устойчивее реагентов.",
        "ar": "في التفاعلات الطاردة للحرارة تكون الطاقة الكامنة (الإنثالبي) للنواتج أقل منها للمتفاعلات، لذا تكون النواتج أكثر استقرارًا من المتفاعلات.",
        "zh": "放热反应中生成物的势能（焓）低于反应物，因此生成物比反应物更稳定。",
        "ku": "Di reaksiyonên ekzotermîk de enerjiya potansiyel (entalpî) ya berheman ji ya reaktantan kêmtir e, ji ber vê berhem ji reaktantan stabîltir in."
      },
      "trap": {
        "tr": "Endotermik tepkimelerde ürünler girenlerden daha kararlıdır.",
        "en": "In endothermic reactions the products are more stable than the reactants.",
        "de": "Bei endothermen Reaktionen sind die Produkte stabiler als die Edukte.",
        "fr": "Dans les réactions endothermiques, les produits sont plus stables que les réactifs.",
        "ru": "В эндотермических реакциях продукты устойчивее реагентов.",
        "ar": "في التفاعلات الماصة للحرارة تكون النواتج أكثر استقرارًا من المتفاعلات.",
        "zh": "吸热反应中生成物比反应物更稳定。",
        "ku": "Di reaksiyonên endotermîk de berhem ji reaktantan stabîltir in."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u16-c01",
      "conceptA": {
        "tr": "Ekzotermik (ΔH < 0)",
        "en": "Exothermic (ΔH < 0)",
        "de": "Exotherm (ΔH < 0)",
        "fr": "Exothermique (ΔH < 0)",
        "ru": "Экзотермический (ΔH < 0)",
        "ar": "طاردة للحرارة (ΔH <0)",
        "zh": "放热（ΔH < 0）",
        "ku": "Exotermîk (ΔH < 0)"
      },
      "conceptB": {
        "tr": "Endotermik (ΔH > 0)",
        "en": "Endothermic (ΔH > 0)",
        "de": "Endotherm (ΔH > 0)",
        "fr": "Endothermique (ΔH > 0)",
        "ru": "Эндотермический (ΔH > 0)",
        "ar": "ماص للحرارة (ΔH > 0)",
        "zh": "吸热（ΔH > 0）",
        "ku": "Endotermîk (ΔH > 0)"
      },
      "distinction": {
        "tr": "Ekzotermik çevreye ısı verir sıcaklık artar; endotermik çevreden ısı alır sıcaklık düşer.",
        "en": "Exothermic gives heat to the environment, the temperature increases; endothermic takes heat from the environment and the temperature decreases.",
        "de": "Exotherm gibt Wärme an die Umgebung ab, die Temperatur steigt; Endotherm entzieht der Umgebung Wärme und die Temperatur sinkt.",
        "fr": "L'exothermique donne de la chaleur à l'environnement, la température augmente ; L'endothermie prend la chaleur de l'environnement et la température diminue.",
        "ru": "Экзотермический отдает тепло в окружающую среду, температура повышается; эндотермический забирает тепло из окружающей среды и температура снижается.",
        "ar": "الطاردة للحرارة تعطي الحرارة للبيئة، وترتفع درجة الحرارة؛ ماص للحرارة يأخذ الحرارة من البيئة وتنخفض درجة الحرارة.",
        "zh": "放热向环境释放热量，温度升高；吸热从环境中吸收热量，温度降低。",
        "ku": "Exotermîk germê dide hawîrdorê, germahî zêde dibe; endotermîk germê ji hawîrdorê digire û germahî kêm dibe."
      }
    },
    {
      "id": "u16-c02",
      "conceptA": {
        "tr": "Oluşum Entalpisi",
        "en": "Enthalpy of Formation",
        "de": "Bildungsenthalpie",
        "fr": "Enthalpie de formation",
        "ru": "Энтальпия образования",
        "ar": "المحتوى الحراري للتكوين",
        "zh": "生成焓",
        "ku": "Enthalpiya Çêbûnê"
      },
      "conceptB": {
        "tr": "Bağ Enerjisi",
        "en": "Bond Energy",
        "de": "Bindungsenergie",
        "fr": "Énergie de liaison",
        "ru": "Энергия связи",
        "ar": "طاقة الرابطة",
        "zh": "键能",
        "ku": "Enerjiya girêdanê"
      },
      "distinction": {
        "tr": "Oluşum entalpisi elementlerden sentez ısısıdır; bağ enerjisi gaz fazında 1 mol bağı kırma enerjisidir.",
        "en": "Enthalpy of formation is the heat of synthesis from elements; Bond energy is the energy of breaking 1 mole of bonds in the gas phase.",
        "de": "Die Bildungsenthalpie ist die Wärme bei der Bildung aus den Elementen; die Bindungsenergie ist die Energie, die zum Aufbrechen von 1 mol Bindungen in der Gasphase nötig ist.",
        "fr": "L'enthalpie de formation est la chaleur de synthèse des éléments ; L’énergie de liaison est l’énergie de rupture d’1 mole de liaisons en phase gazeuse.",
        "ru": "Энтальпия образования — это теплота синтеза элементов; Энергия связи — это энергия разрыва 1 моля связей в газовой фазе.",
        "ar": "المحتوى الحراري للتكوين هو حرارة التوليف من العناصر. طاقة الرابطة هي طاقة كسر 1 مول من الروابط في الطور الغازي.",
        "zh": "形成焓是元素的合成热；键能是在气相中破坏1摩尔键的能量。",
        "ku": "Entalpiya pêkhatinê germahiya senteza ji hêmanan e; Enerjiya girêdanê enerjiya şikandina 1 mol girêdan di qonaxa gazê de ye."
      }
    },
    {
      "id": "u16-c03",
      "conceptA": {
        "tr": "Standart Oluşum Entalpisi (Delta Hf°)",
        "en": "Standard Enthalpy of Formation (Delta Hf°)",
        "de": "Standardbildungsenthalpie (Delta Hf°)",
        "fr": "Enthalpie Standard de Formation (Delta Hf°)",
        "ru": "Стандартная энтальпия образования (Delta Hf°)",
        "ar": "المحتوى الحراري القياسي للتكوين (Delta Hf°)",
        "zh": "标准生成焓 (Delta Hf°)",
        "ku": "Entalpiya Standard a Çêbûnê (Delta Hf°)"
      },
      "conceptB": {
        "tr": "Tepkime Entalpisi (Delta H°)",
        "en": "Reaction Enthalpy (Delta H°)",
        "de": "Reaktionsenthalpie (Delta H°)",
        "fr": "Enthalpie de réaction (Delta H°)",
        "ru": "Энтальпия реакции (Дельта H°)",
        "ar": "المحتوى الحراري للتفاعل (دلتا H°)",
        "zh": "反应焓 (Delta H°)",
        "ku": "Entalpiya Reaksiyonê (Delta H°)"
      },
      "distinction": {
        "tr": "Standart oluşum entalpisi 1 mol bileşiğin standart koşullarda kararlı elementlerinden oluşmasındaki entalpi değişimidir; tepkime entalpisi ise ürünlerin toplam entalpisi ile girenlerin toplam entalpisi arasındaki farktır.",
        "en": "Standard enthalpy of formation is the enthalpy change when 1 mol of a compound forms from its stable elements under standard conditions; reaction enthalpy is the difference between the total enthalpy of the products and that of the reactants.",
        "de": "Die Standardbildungsenthalpie ist die Enthalpieänderung bei der Bildung von 1 mol einer Verbindung aus ihren stabilen Elementen unter Standardbedingungen; die Reaktionsenthalpie ist die Differenz zwischen der Gesamtenthalpie der Produkte und der der Edukte.",
        "fr": "L'enthalpie standard de formation est la variation d'enthalpie lors de la formation de 1 mol d'un composé à partir de ses éléments stables dans les conditions standard ; l'enthalpie de réaction est la différence entre l'enthalpie totale des produits et celle des réactifs.",
        "ru": "Стандартная энтальпия образования — изменение энтальпии при образовании 1 моль соединения из устойчивых простых веществ в стандартных условиях; энтальпия реакции — разность суммарных энтальпий продуктов и реагентов.",
        "ar": "إنثالبي التكوين القياسي هو تغير الإنثالبي عند تكوين 1 مول من المركب من عناصره المستقرة في الظروف القياسية؛ أما إنثالبي التفاعل فهو الفرق بين مجموع إنثالبي النواتج ومجموع إنثالبي المتفاعلات.",
        "zh": "标准生成焓是在标准状况下由稳定单质生成 1 mol 化合物时的焓变；反应焓是生成物总焓与反应物总焓之差。",
        "ku": "Entalpiya standard a pêkhatinê guherîna entalpiyê ye dema ku 1 mol pêkhate di şert û mercên standard de ji hêmanên xwe yên stabîl çêdibe; entalpiya reaksiyonê cudahiya navbera entalpiya giştî ya berheman û ya reaktantan e."
      }
    },
    {
      "id": "u16-c04",
      "conceptA": {
        "tr": "İleri Aktifleşme Enerjisi (Eai)",
        "en": "Forward Activation Energy (Eai)",
        "de": "Vorwärtsaktivierungsenergie (Eai)",
        "fr": "Énergie d'activation avant (Eai)",
        "ru": "Энергия прямой активации (Eai)",
        "ar": "طاقة التنشيط الأمامية (Eai)",
        "zh": "正向活化能 (Eai)",
        "ku": "Enerjiya Çalakkirina Pêşî (Eai)"
      },
      "conceptB": {
        "tr": "Geri Aktifleşme Enerjisi (Eag)",
        "en": "Reverse Activation Energy (Eag)",
        "de": "Aktivierungsenergie der Rückreaktion (Eag)",
        "fr": "Énergie d'activation inverse (Eag)",
        "ru": "Энергия активации обратной реакции (Eag)",
        "ar": "طاقة تنشيط التفاعل العكسي (Eag)",
        "zh": "逆反应活化能 (Eag)",
        "ku": "Enerjiya aktîvasyonê ya reaksiyona berevajî (Eag)"
      },
      "distinction": {
        "tr": "Eai girenlerin aktifleşmiş komplekse ulaşma bariyeridir; Eag ürünlerin geri dönme bariyeridir; Delta H = Eai - Eag'dir.",
        "en": "Eai is the barrier for entrants to reach the activated complex; Eag is the return barrier of products; Delta H = Eai - Eag.",
        "de": "Eai ist die Barriere für Teilnehmer, den aktivierten Komplex zu erreichen. Eag ist die Rücklaufsperre von Produkten; Delta H = Eai - Eag.",
        "fr": "Eai est la barrière permettant aux entrants d'atteindre le complexe activé ; Eag est la barrière de retour des produits ; Delta H = Eai - Eag.",
        "ru": "Eai — барьер для участников на пути к активированному комплексу; Eag – барьер возврата продукции; Дельта H = Eai - Eag.",
        "ar": "Eai هو العائق أمام المشاركين للوصول إلى المجمع المنشط؛ النسر هو حاجز عودة المنتجات؛ دلتا H = إيي - إيج.",
        "zh": "Eai是进入者到达激活复合体的屏障； Eag是产品的退货壁垒； Delta H = Eai - Eag。",
        "ku": "Eai ji bo kesên ku bigihîjin kompleksa aktîfkirî asteng e; Eag astengiya vegera hilberan e; Delta H = Eai - Eag."
      }
    },
    {
      "id": "u16-c05",
      "conceptA": {
        "tr": "Sistem",
        "en": "System",
        "de": "System",
        "fr": "Système",
        "ru": "Система",
        "ar": "النظام",
        "zh": "体系",
        "ku": "Sîstem"
      },
      "conceptB": {
        "tr": "Ortam (Çevre)",
        "en": "Surroundings",
        "de": "Umgebung",
        "fr": "Milieu extérieur",
        "ru": "Окружающая среда",
        "ar": "الوسط المحيط",
        "zh": "环境",
        "ku": "Hawîrdor"
      },
      "distinction": {
        "tr": "Sistem, incelenen madde ya da tepkime karışımıdır; ortam (çevre) ise sistemin dışında kalan ve sistemle ısı ya da iş şeklinde enerji alışverişi yapan her şeydir.",
        "en": "The system is the substance or reaction mixture being studied; the surroundings are everything outside the system that exchanges energy with it as heat or work.",
        "de": "Das System ist der untersuchte Stoff bzw. das Reaktionsgemisch; die Umgebung ist alles außerhalb des Systems, das mit ihm Energie in Form von Wärme oder Arbeit austauscht.",
        "fr": "Le système est la substance ou le mélange réactionnel étudié ; le milieu extérieur est tout ce qui se trouve hors du système et échange de l'énergie avec lui sous forme de chaleur ou de travail.",
        "ru": "Система — изучаемое вещество или реакционная смесь; окружающая среда — всё, что находится вне системы и обменивается с ней энергией в виде теплоты или работы.",
        "ar": "النظام هو المادة أو خليط التفاعل قيد الدراسة؛ أما الوسط المحيط فهو كل ما يقع خارج النظام ويتبادل معه الطاقة على شكل حرارة أو شغل.",
        "zh": "体系是所研究的物质或反应混合物；环境是体系以外、以热或功的形式与体系交换能量的一切部分。",
        "ku": "Sîstem madde an tevliheviya reaksiyonê ye ku tê lêkolîn; hawîrdor her tişt e ku li derveyî sîstemê ye û bi wê re bi awayê germ an kar enerjiyê diguhere."
      }
    },
    {
      "id": "u16-c06",
      "conceptA": {
        "tr": "Bağ Kırılması",
        "en": "Bond Breaking",
        "de": "Bindungsbruch",
        "fr": "Rupture de liaison",
        "ru": "Разрыв связи",
        "ar": "كسر الرابطة",
        "zh": "化学键断裂",
        "ku": "Şikandina girêdanê"
      },
      "conceptB": {
        "tr": "Bağ Oluşumu",
        "en": "Bond Formation",
        "de": "Bindungsbildung",
        "fr": "Formation de liaison",
        "ru": "Образование связи",
        "ar": "تكوين الرابطة",
        "zh": "化学键形成",
        "ku": "Çêbûna girêdanê"
      },
      "distinction": {
        "tr": "Kimyasal bağ kırılması daima endotermiktir (ısı alır); kimyasal bağ oluşumu daima ekzotermiktir (ısı verir).",
        "en": "Chemical bond breaking is always endothermic (takes heat); Chemical bond formation is always exothermic (gives off heat).",
        "de": "Das Aufbrechen chemischer Bindungen ist immer endotherm (nimmt Wärme auf); Die Bildung chemischer Bindungen ist immer exotherm (gibt Wärme ab).",
        "fr": "La rupture des liaisons chimiques est toujours endothermique (prend de la chaleur) ; La formation de liaisons chimiques est toujours exothermique (dégage de chaleur).",
        "ru": "Разрыв химической связи всегда эндотермический (требуется тепло); Образование химической связи всегда экзотермично (отдает тепло).",
        "ar": "إن كسر الروابط الكيميائية يكون دائمًا ماصًا للحرارة (يمتص الحرارة)؛ يكون تكوين الروابط الكيميائية دائمًا طاردًا للحرارة (يطلق الحرارة).",
        "zh": "化学键断裂总是吸热的（吸收热量）；化学键的形成总是放热的（放出热量）。",
        "ku": "Şikandina girêdana kîmyewî her tim endotermîk e (germê digire); Çêbûna girêdana kîmyewî her dem exotermîk e (germê dide)."
      }
    },
    {
      "id": "u16-c07",
      "conceptA": {
        "tr": "Hess Yasası",
        "en": "Hess's Law",
        "de": "Hess'sches Gesetz",
        "fr": "La loi de Hess",
        "ru": "Закон Гесса",
        "ar": "قانون هيس",
        "zh": "赫斯定律",
        "ku": "Qanûna Hesen"
      },
      "conceptB": {
        "tr": "Termodinamik 1. Yasa",
        "en": "1st Law of Thermodynamics",
        "de": "1. Hauptsatz der Thermodynamik",
        "fr": "1ère loi de la thermodynamique",
        "ru": "1-й закон термодинамики",
        "ar": "القانون الأول للديناميكا الحرارية",
        "zh": "热力学第一定律",
        "ku": "Qanûna 1. ya Termodinamîk"
      },
      "distinction": {
        "tr": "Hess yasası tepkime entalpisinin izlenen yoldan bağımsız olduğunu belirtir; 1. yasa enerjinin yoktan var, vardan yok edilemeyeceğini ifade eder.",
        "en": "Hess's law states that the reaction enthalpy is independent of the path followed; The 1st law states that energy cannot be created or destroyed.",
        "de": "Das Hesssche Gesetz besagt, dass die Reaktionsenthalpie unabhängig vom eingeschlagenen Weg ist; Das 1. Gesetz besagt, dass Energie weder erzeugt noch zerstört werden kann.",
        "fr": "La loi de Hess stipule que l'enthalpie de réaction est indépendante du chemin suivi ; La 1ère loi stipule que l’énergie ne peut être ni créée ni détruite.",
        "ru": "Закон Гесса гласит, что энтальпия реакции не зависит от пройденного пути; Первый закон гласит, что энергия не может быть создана или уничтожена.",
        "ar": "ينص قانون هيس على أن المحتوى الحراري للتفاعل مستقل عن المسار المتبع؛ ينص القانون الأول على أن الطاقة لا تفنى ولا تفنى.",
        "zh": "赫斯定律指出反应焓与所遵循的路径无关；第一定律规定能量不能被创造或毁灭。",
        "ku": "Qanûna Hess dibêje ku entalpiya reaksiyonê ji riya ku tê şopandin serbixwe ye; Qanûna 1emîn dibêje ku enerjî nayê afirandin an tunekirin."
      }
    },
    {
      "id": "u16-c08",
      "conceptA": {
        "tr": "Aktifleşmiş Kompleks",
        "en": "Activated Complex",
        "de": "Aktivierter Komplex",
        "fr": "Complexe activé",
        "ru": "Активированный комплекс",
        "ar": "مجمع المنشط",
        "zh": "活性复合物",
        "ku": "Kompleksa aktîfkirî"
      },
      "conceptB": {
        "tr": "Kararlı Ürün",
        "en": "Stable Product",
        "de": "Stabiles Produkt",
        "fr": "Produit stable",
        "ru": "Стабильный продукт",
        "ar": "منتج مستقر",
        "zh": "稳定产物",
        "ku": "Berhema stabîl"
      },
      "distinction": {
        "tr": "Aktifleşmiş kompleks en yüksek enerjili tepe noktasındaki anlık kararsız yapıdır; ürün minimum enerjili kararlı moleküldür.",
        "en": "The activated complex is the momentarily unstable structure at the highest energy peak; The product is a stable molecule with minimum energy.",
        "de": "Der aktivierte Komplex ist die momentan instabile Struktur am höchsten Energiepeak; Das Produkt ist ein stabiles Molekül mit minimaler Energie.",
        "fr": "Le complexe activé est la structure momentanément instable au pic énergétique le plus élevé ; Le produit est une molécule stable avec un minimum d’énergie.",
        "ru": "Активированный комплекс представляет собой кратковременно нестабильную структуру с самым высоким энергетическим пиком; Продукт представляет собой стабильную молекулу с минимальной энергией.",
        "ar": "المركب المنشط هو البنية غير المستقرة مؤقتًا عند أعلى قمة طاقة؛ المنتج عبارة عن جزيء مستقر بأقل قدر من الطاقة.",
        "zh": "激活的复合物是在最高能量峰值时暂时不稳定的结构；该产品是具有最小能量的稳定分子。",
        "ku": "Kompleksa aktîfkirî di lûtkeya herî bilind a enerjiyê de avahiyek demkî ne aram e; Hilber molekulek stabîl û bi enerjiya herî kêm e."
      }
    }
  ],
  "sequences": [
    {
      "id": "u16-s01",
      "title": {
        "tr": "Hess Yasası Uygulama Adımları",
        "en": "Hess Law Application Steps",
        "de": "Schritte zur Hess Law-Anwendung",
        "fr": "Étapes d’application de la loi Hess",
        "ru": "Этапы применения закона Гесса",
        "ar": "خطوات تطبيق قانون هيس",
        "zh": "赫斯定律应用步骤",
        "ku": "Pêngavên Serlêdana Hiqûqa Hesen"
      },
      "steps": [
        {
          "tr": "Hedef tepkimeyi belirle",
          "en": "Determine target reaction",
          "de": "Zielreaktion ermitteln",
          "fr": "Déterminer la réaction cible",
          "ru": "Определить целевую реакцию",
          "ar": "تحديد رد الفعل المستهدف",
          "zh": "确定目标反应",
          "ku": "Reaksiyona armancê diyar bikin"
        },
        {
          "tr": "Ara basamakları hedefteki reaktif ve ürünlere göre ters çevir veya katla",
          "en": "Reverse or fold intermediate steps according to target reagents and products",
          "de": "Zwischenschritte je nach Zielreagenzien und -produkten umkehren oder falten",
          "fr": "Inverser ou plier les étapes intermédiaires en fonction des réactifs et produits cibles",
          "ru": "Поменяйте местами или сложите промежуточные этапы в соответствии с целевыми реагентами и продуктами.",
          "ar": "قم بعكس أو طي الخطوات المتوسطة وفقًا للكواشف والمنتجات المستهدفة",
          "zh": "根据目标试剂和产品反转或折叠中间步骤",
          "ku": "Li gorî reagent û hilberan gavên navîn berevajî bikin an biqelişînin"
        },
        {
          "tr": "ΔH değerlerini kurallara göre güncelle",
          "en": "Update ΔH values according to rules",
          "de": "Aktualisieren Sie die ΔH-Werte gemäß den Regeln",
          "fr": "Mettre à jour les valeurs ΔH selon les règles",
          "ru": "Обновить значения ΔH в соответствии с правилами",
          "ar": "قم بتحديث قيم ΔH وفقًا للقواعد",
          "zh": "根据规则更新ΔH值",
          "ku": "Nirxên ΔH li gorî qaîdeyan nûve bikin"
        },
        {
          "tr": "Basamakları toplayıp net ΔH ı hesapla",
          "en": "Add the steps and calculate net ΔH",
          "de": "Addieren Sie die Schritte und berechnen Sie Netto-ΔH",
          "fr": "Ajoutez les étapes et calculez le ΔH net",
          "ru": "Сложите шаги и рассчитайте чистое ΔH.",
          "ar": "أضف الخطوات واحسب صافي ΔH",
          "zh": "添加步骤并计算净 ΔH",
          "ku": "Gavên zêde bikin û net ΔH hesab bikin"
        }
      ]
    },
    {
      "id": "u16-s02",
      "title": {
        "tr": "Hess Yasası ile Entalpi Hesabı",
        "en": "Enthalpy Calculation with Hess' Law",
        "de": "Enthalpieberechnung mit dem Hessschen Gesetz",
        "fr": "Calcul d'enthalpie avec la loi de Hess",
        "ru": "Расчет энтальпии по закону Гесса",
        "ar": "حساب المحتوى الحراري مع قانون هيس",
        "zh": "用赫斯定律计算焓",
        "ku": "Hesabkirina Entalpî bi Qanûna Hessê"
      },
      "steps": [
        {
          "tr": "Hedef tepkime denklemi yazılır",
          "en": "The target reaction equation is written",
          "de": "Die Zielreaktionsgleichung wird geschrieben",
          "fr": "L'équation de réaction cible s'écrit",
          "ru": "Целевое уравнение реакции записывается",
          "ar": "تتم كتابة معادلة التفاعل الهدف",
          "zh": "写出目标反应方程",
          "ku": "Wekheviya reaksiyona armancê tê nivîsandin"
        },
        {
          "tr": "Verilen ara basamak tepkimeleri incelenir",
          "en": "The given intermediate step reactions are examined.",
          "de": "Die angegebenen Zwischenschrittreaktionen werden untersucht.",
          "fr": "Les réactions des étapes intermédiaires données sont examinées.",
          "ru": "Рассмотрены данные промежуточные реакции.",
          "ar": "ويتم فحص ردود الفعل خطوة وسيطة معينة.",
          "zh": "检查给定的中间步骤反应。",
          "ku": "Reaksiyonên gavê yên navîn têne lêkolîn kirin."
        },
        {
          "tr": "Gerekli tepkimeler ters çevrilir ve Delta H işareti değişir",
          "en": "Required reactions are reversed and the Delta H sign changes",
          "de": "Erforderliche Reaktionen werden umgekehrt und das Delta-H-Vorzeichen ändert sich",
          "fr": "Les réactions requises sont inversées et le signe Delta H change",
          "ru": "Необходимые реакции меняются местами и меняется знак Delta H.",
          "ar": "يتم عكس التفاعلات المطلوبة وتتغير علامة Delta H",
          "zh": "所需的反应被逆转并且 Delta H 符号发生变化",
          "ku": "Reaksiyonên pêwîst têne berevajî kirin û nîşana Delta H diguhere"
        },
        {
          "tr": "Katsayılarla çarpılıp toplanarak hedef tepkimenin Delta H değeri bulunur",
          "en": "Delta H value of the target reaction is found by multiplying and adding the coefficients",
          "de": "Der Delta-H-Wert der Zielreaktion wird durch Multiplikation und Addition der Koeffizienten ermittelt",
          "fr": "La valeur Delta H de la réaction cible est trouvée en multipliant et en additionnant les coefficients",
          "ru": "Значение Delta H целевой реакции находится путем умножения и сложения коэффициентов",
          "ar": "تم العثور على قيمة Delta H للتفاعل المستهدف عن طريق ضرب المعاملات وإضافتها",
          "zh": "通过系数相乘和相加得出目标反应的 Delta H 值",
          "ku": "Nirxa Delta H ya reaksiyona armancê bi zêdekirin û zêdekirina hevberan tê dîtin"
        }
      ]
    },
    {
      "id": "u16-s03",
      "title": {
        "tr": "Oluşum Entalpilerinden Delta H Bulma",
        "en": "Finding Delta H from Formation Enthalpies",
        "de": "Delta H aus Formationsenthalpien ermitteln",
        "fr": "Trouver le Delta H à partir des enthalpies de formation",
        "ru": "Нахождение дельты H по энтальпии образования",
        "ar": "العثور على دلتا H من التكوين الحراري",
        "zh": "从生成焓求 Delta H",
        "ku": "Dîtina Delta H ji Formation Enthalpies"
      },
      "steps": [
        {
          "tr": "Tepkimeye giren ve çıkan maddeler listelenir",
          "en": "Substances that enter and exit the reaction are listed.",
          "de": "Stoffe, die in die Reaktion eintreten und aus ihr austreten, werden aufgelistet.",
          "fr": "Les substances qui entrent et sortent de la réaction sont répertoriées.",
          "ru": "Перечислены вещества, вступающие в реакцию и выходящие из нее.",
          "ar": "يتم سرد المواد التي تدخل وتخرج من التفاعل.",
          "zh": "列出了进入和退出反应的物质。",
          "ku": "Madeyên ku di reaksiyonê de dikevin û derdikevin têne navnîş kirin."
        },
        {
          "tr": "Ürünlerin standart oluşum entalpileri katsayılarıyla çarpılıp toplanır",
          "en": "The standard enthalpies of formation of the products are multiplied by their coefficients and added",
          "de": "Die Standardbildungsenthalpien der Produkte werden mit ihren Koeffizienten multipliziert und addiert",
          "fr": "Les enthalpies standard de formation des produits sont multipliées par leurs coefficients puis additionnées",
          "ru": "Стандартные энтальпии образования продуктов умножают на коэффициенты и складывают",
          "ar": "تُضرب إنثالبيات التكوين القياسية للنواتج في معاملاتها ثم تُجمع",
          "zh": "生成物的标准生成焓乘以各自系数后相加",
          "ku": "Entalpiyên standard ên pêkhatinê yên berheman bi rêjeyên xwe tên lêkdan û berhevkirin"
        },
        {
          "tr": "Girenlerin standart oluşum entalpileri katsayılarıyla çarpılıp toplanır",
          "en": "The standard enthalpies of formation of the reactants are multiplied by their coefficients and added",
          "de": "Die Standardbildungsenthalpien der Edukte werden mit ihren Koeffizienten multipliziert und addiert",
          "fr": "Les enthalpies standard de formation des réactifs sont multipliées par leurs coefficients puis additionnées",
          "ru": "Стандартные энтальпии образования реагентов умножают на коэффициенты и складывают",
          "ar": "تُضرب إنثالبيات التكوين القياسية للمتفاعلات في معاملاتها ثم تُجمع",
          "zh": "反应物的标准生成焓乘以各自系数后相加",
          "ku": "Entalpiyên standard ên pêkhatinê yên reaktantan bi rêjeyên xwe tên lêkdan û berhevkirin"
        },
        {
          "tr": "Delta H = Toplam H(ürünler) - Toplam H(girenler) formülü uygulanır",
          "en": "The formula ΔH = ΣH(products) - ΣH(reactants) is applied",
          "de": "Die Formel ΔH = ΣH(Produkte) - ΣH(Edukte) wird angewendet",
          "fr": "On applique la formule ΔH = ΣH(produits) - ΣH(réactifs)",
          "ru": "Применяют формулу ΔH = ΣH(продуктов) - ΣH(реагентов)",
          "ar": "تُطبَّق العلاقة ΔH = ΣH(النواتج) - ΣH(المتفاعلات)",
          "zh": "应用公式 ΔH = ΣH(生成物) - ΣH(反应物)",
          "ku": "Formula ΔH = ΣH(berhem) - ΣH(reaktant) tê sepandin"
        }
      ]
    },
    {
      "id": "u16-s04",
      "title": {
        "tr": "Potansiyel Enerji Grafiği Analizi",
        "en": "Potential Energy Graph Analysis",
        "de": "Analyse des potenziellen Energiediagramms",
        "fr": "Analyse du graphique d’énergie potentielle",
        "ru": "Анализ графика потенциальной энергии",
        "ar": "تحليل الرسم البياني للطاقة المحتملة",
        "zh": "势能图分析",
        "ku": "Analysis Graph Energy Potansiyel"
      },
      "steps": [
        {
          "tr": "Girenlerin potansiyel enerjisi grafikten okunur",
          "en": "The potential energy of the reactants is read from the graph",
          "de": "Die potentielle Energie der Reaktanten wird aus dem Diagramm abgelesen",
          "fr": "L'énergie potentielle des réactifs est lue sur le graphique",
          "ru": "Потенциальную энергию реагентов можно прочитать по графику",
          "ar": "تتم قراءة الطاقة الكامنة للمواد المتفاعلة من الرسم البياني",
          "zh": "从图中读取反应物的势能",
          "ku": "Enerjiya potansiyela reaktantan ji grafikê tê xwendin"
        },
        {
          "tr": "Tepe noktasındaki aktifleşmiş kompleks enerjisi belirlenir",
          "en": "The activated complex energy at the peak is determined",
          "de": "Die aktivierte komplexe Energie am Peak wird bestimmt",
          "fr": "L'énergie complexe activée au pic est déterminée",
          "ru": "Определяется энергия активированного комплекса на пике",
          "ar": "يتم تحديد الطاقة المعقدة المنشطة في الذروة",
          "zh": "确定峰值处的活化复合能量",
          "ku": "Enerjiya tevlihev a çalak di lûtkeyê de tê destnîşankirin"
        },
        {
          "tr": "Eai = Eaktifleşmiş - Egirenler ile ileri aktifleşme enerjisi bulunur",
          "en": "The forward activation energy is found from Eai = E(activated complex) - E(reactants)",
          "de": "Die Aktivierungsenergie der Hinreaktion ergibt sich aus Eai = E(aktivierter Komplex) - E(Edukte)",
          "fr": "L'énergie d'activation directe est obtenue par Eai = E(complexe activé) - E(réactifs)",
          "ru": "Энергию активации прямой реакции находят по формуле Eai = E(активированного комплекса) - E(реагентов)",
          "ar": "تُحسب طاقة تنشيط التفاعل الأمامي من العلاقة Eai = E(المعقد المنشط) - E(المتفاعلات)",
          "zh": "由 Eai = E(活化络合物) - E(反应物) 求出正反应活化能",
          "ku": "Enerjiya aktîvasyonê ya pêşve bi Eai = E(kompleksa aktîfkirî) - E(reaktant) tê dîtin"
        },
        {
          "tr": "Delta H = Eai - Eag eşitliğiyle tepkime ısısı doğrulanır",
          "en": "The heat of reaction is verified by the equation Delta H = Eai - Eag",
          "de": "Die Reaktionswärme wird durch die Gleichung Delta H = Eai – Eag verifiziert",
          "fr": "La chaleur de réaction est vérifiée par l'équation Delta H = Eai - Eag",
          "ru": "Теплота реакции подтверждается уравнением Delta H = Eai - Eag",
          "ar": "يتم التحقق من حرارة التفاعل بالمعادلة Delta H = Eai - Eag",
          "zh": "反应热由方程 Delta H = Eai - Eag 验证",
          "ku": "Germahiya reaksiyonê bi hevkêşana Delta H = Eai - Eag ve tê verast kirin"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u16-twin01",
      "stem": {
        "tr": "Bir kimyasal tepkimenin ileri aktifleşme enerjisi Eai = 85 kJ ve geri aktifleşme enerjisi Eag = 130 kJ olduğuna göre tepkime entalpisi (ΔH) kaç kJ dir?",
        "en": "If the forward activation energy of a chemical reaction is Eai = 85 kJ and the reverse activation energy Eag = 130 kJ, what is the reaction enthalpy (ΔH) in kJ?",
        "de": "Wenn die Vorwärtsaktivierungsenergie einer chemischen Reaktion Eai = 85 kJ und die Rückwärtsaktivierungsenergie Eag = 130 kJ beträgt, wie groß ist dann die Reaktionsenthalpie (ΔH) in kJ?",
        "fr": "Si l'énergie d'activation directe d'une réaction chimique est Eai = 85 kJ et l'énergie d'activation inverse Eag = 130 kJ, quelle est l'enthalpie de réaction (ΔH) en kJ ?",
        "ru": "Какова энтальпия реакции (ΔH) в кДж, если прямая энергия активации химической реакции Eai = 85 кДж, а обратная энергия активации Eag = 130 кДж?",
        "ar": "إذا كانت طاقة التنشيط الأمامية للتفاعل الكيميائي هي Eai = 85 kJ وطاقة التنشيط العكسية Eag = 130 kJ، فما هو المحتوى الحراري للتفاعل (ΔH) بـ kJ؟",
        "zh": "如果化学反应的正向活化能为 Eai = 85 kJ，反向活化能 Eag = 130 kJ，则反应焓 (ΔH)（单位为 kJ）是多少？",
        "ku": "Ger enerjiya aktîvkirina pêş a reaksiyona kîmyayî Eai = 85 kJ û enerjiya aktîvkirina berevajî Eag = 130 kJ be, entalpîya reaksiyonê (ΔH) di kJ de çi ye?"
      },
      "options": [
        {
          "tr": "-45 kJ",
          "en": "-45 kJ",
          "de": "-45 kJ",
          "fr": "-45 kJ",
          "ru": "-45 кДж",
          "ar": "-45 كيلوجول",
          "zh": "-45 kJ",
          "ku": "-45 kJ"
        },
        {
          "tr": "+45 kJ",
          "en": "+45 kJ",
          "de": "+45 kJ",
          "fr": "+45 kJ",
          "ru": "+45 кДж",
          "ar": "+45 كيلوجول",
          "zh": "+45 kJ",
          "ku": "+45 kJ"
        },
        {
          "tr": "+215 kJ",
          "en": "+215 kJ",
          "de": "+215 kJ",
          "fr": "+215 kJ",
          "ru": "+215 кДж",
          "ar": "+215 كيلوجول",
          "zh": "+215 kJ",
          "ku": "+215 kJ"
        },
        {
          "tr": "-215 kJ",
          "en": "-215 kJ",
          "de": "-215 kJ",
          "fr": "-215 kJ",
          "ru": "-215 кДж",
          "ar": "-215 كيلوجول",
          "zh": "-215 kJ",
          "ku": "-215 kJ"
        },
        {
          "tr": "+85 kJ",
          "en": "+85 kJ",
          "de": "+85 kJ",
          "fr": "+85 kJ",
          "ru": "+85 кДж",
          "ar": "+85 كيلوجول",
          "zh": "+85 kJ",
          "ku": "+85 kJ"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "ΔH = Eai - Eag = 85 - 130 = -45 kJ dir (ekzotermik tepkime).",
        "en": "ΔH = Eai - Eag = 85 - 130 = -45 kJ (exothermic reaction).",
        "de": "ΔH = Eai – Eag = 85 – 130 = –45 kJ (exotherme Reaktion).",
        "fr": "ΔH = Eai - Eag = 85 - 130 = -45 kJ (réaction exothermique).",
        "ru": "ΔH = Eai - Eag = 85 - 130 = -45 кДж (экзотермическая реакция).",
        "ar": "ΔH = Eai - Eag = 85 - 130 = -45 كيلوجول (تفاعل طارد للحرارة).",
        "zh": "ΔH = Eai - Eag = 85 - 130 = -45 kJ（放热反应）。",
        "ku": "ΔH = Eai - Eag = 85 - 130 = -45 kJ (reaksiyona exotermîk)."
      }
    },
    {
      "id": "u16-twin02",
      "stem": {
        "tr": "Aşağıdaki maddelerden hangisinin 25 °C ve 1 atm deki standart molar oluşum entalpisi sıfır kabul edilir?",
        "en": "Which of the following substances has a standard molar enthalpy of formation of zero at 25 °C and 1 atm?",
        "de": "Welcher der folgenden Stoffe hat eine standardmäßige molare Bildungsenthalpie von Null bei 25 °C und 1 atm?",
        "fr": "Laquelle des substances suivantes a une enthalpie molaire standard de formation de zéro à 25 °C et 1 atm ?",
        "ru": "У какого из следующих веществ стандартная молярная энтальпия образования равна нулю при 25 °С и давлении 1 атм?",
        "ar": "أي من المواد التالية يكون المحتوى الحراري المولي القياسي لها صفرًا عند درجة حرارة 25 درجة مئوية و1 atm؟",
        "zh": "以下哪种物质在 25 °C 和 1 atm 下的标准摩尔生成焓为零？",
        "ku": "Kîjan ji maddeyên jêrîn di 25 °C û 1 atm de entalpiya molarê ya standard sifir e?"
      },
      "options": [
        {
          "tr": "O2(g)",
          "en": "O2(g)",
          "de": "O2(g)",
          "fr": "O2(g)",
          "ru": "O2(g)",
          "ar": "O2(g)",
          "zh": "O2(g)",
          "ku": "O2(g)"
        },
        {
          "tr": "O3(g)",
          "en": "O3(g)",
          "de": "O3(g)",
          "fr": "O3(g)",
          "ru": "O3(g)",
          "ar": "O3(g)",
          "zh": "O3(g)",
          "ku": "O3(g)"
        },
        {
          "tr": "H2O(s)",
          "en": "H2O(l)",
          "de": "H2O(l)",
          "fr": "H2O(l)",
          "ru": "H2O(l)",
          "ar": "H2O(l)",
          "zh": "H2O(l)",
          "ku": "H2O(l)"
        },
        {
          "tr": "CO2(g)",
          "en": "CO2(g)",
          "de": "CO2(g)",
          "fr": "CO2(g)",
          "ru": "CO2(g)",
          "ar": "CO2(g)",
          "zh": "CO2(g)",
          "ku": "CO2(g)"
        },
        {
          "tr": "C(elmas)",
          "en": "C(diamond)",
          "de": "C (Diamant)",
          "fr": "C(diamant)",
          "ru": "C(алмаз)",
          "ar": "C(الماس)",
          "zh": "C(金刚石)",
          "ku": "C (almas)"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Elementlerin oda koşullarındaki en kararlı allotrop ve fiziksel hallerinin standart oluşum entalpisi sıfırdır: O2(g) = 0 dır.",
        "en": "The standard enthalpy of formation of the most stable allotrope and physical states of the elements at room conditions is zero: O2(g) = 0.",
        "de": "Die Standardbildungsenthalpie der stabilsten allotropen und physikalischen Zustände der Elemente bei Raumbedingungen ist Null: O2(g) = 0.",
        "fr": "L'enthalpie standard de formation de l'allotrope et des états physiques les plus stables des éléments dans les conditions ambiantes est nulle : O2(g) = 0.",
        "ru": "Стандартная энтальпия образования наиболее стабильных аллотропных и физических состояний элементов в комнатных условиях равна нулю: O2(g) = 0.",
        "ar": "المحتوى الحراري القياسي لتكوين المتآصلة الأكثر استقرارًا والحالات الفيزيائية للعناصر في ظروف الغرفة هو صفر: O2(g) = 0.",
        "zh": "在室温条件下，最稳定的同素异形体和元素物理状态的标准形成焓为零：O2(g) = 0。",
        "ku": "Entalpiya standard a pêkhatina allotrope û rewşa fîzîkî ya herî stabîl a hêmanan di şert û mercên odeyê de sifir e: O2(g) = 0."
      }
    },
    {
      "id": "u16-twin03",
      "stem": {
        "tr": "Kimya dersinde Kimyasal Tepkimelerde Enerji ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Energy in Chemical Reactions, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Energie bei Reaktionen: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Énergie des Réactions, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Энергия в химических реакциях», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الطاقة في التفاعلات الكيميائية\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“化学反应中的能量”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Enerjî Di Reaksiyonên Kîmyewî de\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Tepkime ters çevrilirse ΔH ın işareti değişmez.",
          "en": "If the reaction is reversed, the sign of ΔH does not change.",
          "de": "Bei umgekehrter Reaktion ändert sich das Vorzeichen von ΔH nicht.",
          "fr": "Si la réaction est inversée, le signe de ΔH ne change pas.",
          "ru": "При обратном ходе реакции знак ΔH не меняется.",
          "ar": "إذا تم عكس التفاعل فإن إشارة ΔH لا تتغير.",
          "zh": "如果反应逆转，则 ΔH 的符号不会改变。",
          "ku": "Ger reaksîyon berevajî be, nîşana ΔH naguhere."
        },
        {
          "tr": "Kovalent bağ kırılırken çevreye yüksek ısı yayılır.",
          "en": "As the covalent bond is broken, high heat is released into the environment.",
          "de": "Beim Aufbrechen der kovalenten Bindung wird große Wärme an die Umgebung abgegeben.",
          "fr": "Lorsque la liaison covalente est rompue, une chaleur élevée est libérée dans l’environnement.",
          "ru": "Поскольку ковалентная связь разрывается, в окружающую среду выделяется большое количество тепла.",
          "ar": "عند كسر الرابطة التساهمية، يتم إطلاق حرارة عالية في البيئة.",
          "zh": "当共价键断裂时，高热量被释放到环境中。",
          "ku": "Ji ber ku girêdana kovalentê tê şikestin, germa zêde ber bi hawîrdorê ve tê berdan."
        },
        {
          "tr": "Endotermik tepkimelerde ΔH > 0 dır; ısı girenler tarafına yazılır ve sistem çevreden ısı alır.",
          "en": "In endothermic reactions ΔH > 0; heat is written on the reactants side and the system absorbs heat from the surroundings.",
          "de": "Bei endothermen Reaktionen ist ΔH > 0; die Wärme wird auf der Eduktseite notiert und das System nimmt Wärme aus der Umgebung auf.",
          "fr": "Dans les réactions endothermiques, ΔH > 0 ; la chaleur s'écrit du côté des réactifs et le système absorbe de la chaleur du milieu extérieur.",
          "ru": "В эндотермических реакциях ΔH > 0; теплоту записывают со стороны реагентов, и система поглощает тепло из окружающей среды.",
          "ar": "في التفاعلات الماصة للحرارة ΔH > 0؛ تُكتب الحرارة في جهة المتفاعلات ويمتص النظام حرارة من الوسط المحيط.",
          "zh": "吸热反应中 ΔH > 0；热量写在反应物一侧，体系从环境吸收热量。",
          "ku": "Di reaksiyonên endotermîk de ΔH > 0 e; germ li aliyê reaktantan tê nivîsandin û sîstem germê ji hawîrdorê distîne."
        },
        {
          "tr": "ΔH = Eag - Eai dir.",
          "en": "ΔH = Eag - Eai.",
          "de": "ΔH = Eag – Eai.",
          "fr": "ΔH = Eag - Eai.",
          "ru": "ΔH = Eag - Eai.",
          "ar": "ΔH = إيج - إيا.",
          "zh": "ΔH = Eag - Eai。",
          "ku": "ΔH = Eag - Eai."
        },
        {
          "tr": "Suyun gaz veya sıvı halde oluşması tepkime entalpisini etkilemez.",
          "en": "The formation of water in gas or liquid state does not affect the reaction enthalpy.",
          "de": "Die Bildung von Wasser im gasförmigen oder flüssigen Zustand hat keinen Einfluss auf die Reaktionsenthalpie.",
          "fr": "La formation d’eau à l’état gazeux ou liquide n’affecte pas l’enthalpie de réaction.",
          "ru": "Образование воды в газообразном или жидком состоянии не влияет на энтальпию реакции.",
          "ar": "لا يؤثر تكوين الماء في الحالة الغازية أو السائلة على المحتوى الحراري للتفاعل.",
          "zh": "气态或液态水的形成不影响反应焓。",
          "ku": "Çêbûna avê di rewşa gazê an şilek de bandorê li entalpiya reaksiyonê nake."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Endotermik tepkimelerde ΔH > 0 dır; ısı girenler tarafına yazılır ve sistem çevreden ısı alır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In endothermic reactions ΔH > 0; heat is written on the reactants side and the system absorbs heat from the surroundings.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei endothermen Reaktionen ist ΔH > 0; die Wärme wird auf der Eduktseite notiert und das System nimmt Wärme aus der Umgebung auf.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans les réactions endothermiques, ΔH > 0 ; la chaleur s'écrit du côté des réactifs et le système absorbe de la chaleur du milieu extérieur.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В эндотермических реакциях ΔH > 0; теплоту записывают со стороны реагентов, и система поглощает тепло из окружающей среды.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في التفاعلات الماصة للحرارة ΔH > 0؛ تُكتب الحرارة في جهة المتفاعلات ويمتص النظام حرارة من الوسط المحيط.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“吸热反应中 ΔH > 0；热量写在反应物一侧，体系从环境吸收热量。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di reaksiyonên endotermîk de ΔH > 0 e; germ li aliyê reaktantan tê nivîsandin û sîstem germê ji hawîrdorê distîne.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u16-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimyasal Tepkimelerde Enerji konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Energy in Chemical Reactions?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Energie bei Reaktionen zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Énergie des Réactions ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Энергия в химических реакциях»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الطاقة في التفاعلات الكيميائية\"؟",
        "zh": "根据“化学反应中的能量”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Enerjî Di Reaksiyonên Kîmyewî de\" de rast e?"
      },
      "options": [
        {
          "tr": "Tepkime 2 ile çarpıldığında ΔH değeri aynı kalır.",
          "en": "When the reaction is multiplied by 2, the ΔH value remains the same.",
          "de": "Wenn die Reaktion mit 2 multipliziert wird, bleibt der ΔH-Wert gleich.",
          "fr": "Lorsque la réaction est multipliée par 2, la valeur ΔH reste la même.",
          "ru": "Когда реакцию умножают на 2, значение ΔH остается прежним.",
          "ar": "عندما يتم ضرب التفاعل بـ 2، تظل قيمة ΔH كما هي.",
          "zh": "当反应乘以2时，ΔH值保持不变。",
          "ku": "Dema ku reaksiyonê bi 2-ê zêde dibe, nirxa ΔH wekî xwe dimîne."
        },
        {
          "tr": "Aktifleşmiş kompleks izole edilip şişede saklanabilen kararlı bir maddedir.",
          "en": "The activated complex is a stable substance that can be isolated and stored in a vial.",
          "de": "Der aktivierte Komplex ist eine stabile Substanz, die isoliert und in einem Fläschchen aufbewahrt werden kann.",
          "fr": "Le complexe activé est une substance stable qui peut être isolée et stockée dans un flacon.",
          "ru": "Активированный комплекс представляет собой стабильное вещество, которое можно выделить и хранить во флаконе.",
          "ar": "المركب المنشط عبارة عن مادة مستقرة يمكن عزلها وتخزينها في قارورة.",
          "zh": "活化的复合物是一种稳定的物质，可以分离并储存在小瓶中。",
          "ku": "Kompleksa aktîfkirî maddeyek stabîl e ku dikare were veqetandin û di şûşeyek de were hilanîn."
        },
        {
          "tr": "Kırağılaşma olayında madde çevreden ısı alır.",
          "en": "During deposition (gas → solid), the substance absorbs heat from the surroundings.",
          "de": "Bei der Resublimation nimmt der Stoff Wärme aus der Umgebung auf.",
          "fr": "Lors de la condensation solide (gaz → solide), la substance absorbe de la chaleur du milieu extérieur.",
          "ru": "При десублимации вещество поглощает тепло из окружающей среды.",
          "ar": "أثناء الترسيب (تحول الغاز إلى صلب) تمتص المادة حرارة من الوسط المحيط.",
          "zh": "凝华过程中物质从环境吸收热量。",
          "ku": "Di dema depozîsyonê de (gaz → hişk) madde germê ji hawîrdorê distîne."
        },
        {
          "tr": "Standart oluşum entalpisi (ΔHf°): 25 °C ve 1 atm de 1 mol bileşiğin kararlı elementlerinden oluşması sırasındaki entalpi değişimidir.",
          "en": "Standard enthalpy of formation (ΔHf°): It is the enthalpy change during the formation of 1 mole of a compound from its stable elements at 25 °C and 1 atm.",
          "de": "Standardbildungsenthalpie (ΔHf°): Dies ist die Enthalpieänderung während der Bildung von 1 Mol einer Verbindung aus ihren stabilen Elementen bei 25 °C und 1 atm.",
          "fr": "Enthalpie standard de formation (ΔHf°) : C'est le changement d'enthalpie lors de la formation de 1 mole d'un composé à partir de ses éléments stables à 25 °C et 1 atm.",
          "ru": "Стандартная энтальпия образования (ΔHf°): это изменение энтальпии при образовании 1 моля соединения из его стабильных элементов при 25 °C и 1 атм.",
          "ar": "المحتوى الحراري القياسي للتكوين (ΔHf°): هو تغير المحتوى الحراري أثناء تكوين 1 مول من المركب من عناصره المستقرة عند درجة حرارة 25 درجة مئوية و1 ضغط جوي.",
          "zh": "标准生成焓（ΔHf°）：它是在25℃和1个大气压下从其稳定元素生成1摩尔化合物过程中的焓变。",
          "ku": "Entalpiya avabûnê ya standard (ΔHf°): Ew guherîna entalpiyê ye di dema çêbûna 1 molek pêkhateyek ji hêmanên wê yên domdar di 25 °C û 1 atm de."
        },
        {
          "tr": "Endotermik tepkimelerde ürünler girenlerden daha kararlıdır.",
          "en": "In endothermic reactions the products are more stable than the reactants.",
          "de": "Bei endothermen Reaktionen sind die Produkte stabiler als die Edukte.",
          "fr": "Dans les réactions endothermiques, les produits sont plus stables que les réactifs.",
          "ru": "В эндотермических реакциях продукты устойчивее реагентов.",
          "ar": "في التفاعلات الماصة للحرارة تكون النواتج أكثر استقرارًا من المتفاعلات.",
          "zh": "吸热反应中生成物比反应物更稳定。",
          "ku": "Di reaksiyonên endotermîk de berhem ji reaktantan stabîltir in."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Standart oluşum entalpisi (ΔHf°): 25 °C ve 1 atm de 1 mol bileşiğin kararlı elementlerinden oluşması sırasındaki entalpi değişimidir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Standard enthalpy of formation (ΔHf°): It is the enthalpy change during the formation of 1 mole of a compound from its stable elements at 25 °C and 1 atm.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Standardbildungsenthalpie (ΔHf°): Dies ist die Enthalpieänderung während der Bildung von 1 Mol einer Verbindung aus ihren stabilen Elementen bei 25 °C und 1 atm.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Enthalpie standard de formation (ΔHf°) : C'est le changement d'enthalpie lors de la formation de 1 mole d'un composé à partir de ses éléments stables à 25 °C et 1 atm.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Стандартная энтальпия образования (ΔHf°): это изменение энтальпии при образовании 1 моля соединения из его стабильных элементов при 25 °C и 1 атм.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المحتوى الحراري القياسي للتكوين (ΔHf°): هو تغير المحتوى الحراري أثناء تكوين 1 مول من المركب من عناصره المستقرة عند درجة حرارة 25 درجة مئوية و1 ضغط جوي.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“标准生成焓（ΔHf°）：它是在25℃和1个大气压下从其稳定元素生成1摩尔化合物过程中的焓变。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Entalpiya avabûnê ya standard (ΔHf°): Ew guherîna entalpiyê ye di dema çêbûna 1 molek pêkhateyek ji hêmanên wê yên domdar di 25 °C û 1 atm de.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u16-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimyasal Tepkimelerde Enerji sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Energy in Chemical Reactions, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Energie bei Reaktionen: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Énergie des Réactions, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Энергия в химических реакциях», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الطاقة في التفاعلات الكيميائية\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“化学反应中的能量”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Enerjî Di Reaksiyonên Kîmyewî de\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Bağ enerjisi hesabında oluşan bağlardan kırılan bağlar çıkarılır.",
          "en": "In the bond energy calculation, broken bonds are subtracted from formed bonds.",
          "de": "Bei der Berechnung der Bindungsenergie werden gebrochene Bindungen von gebildeten Bindungen abgezogen.",
          "fr": "Dans le calcul de l’énergie des liaisons, les liaisons rompues sont soustraites des liaisons formées.",
          "ru": "При расчете энергии связи разорванные связи вычитаются из образовавшихся.",
          "ar": "في حساب طاقة الرابطة، يتم طرح الروابط المكسورة من الروابط المشكلة.",
          "zh": "在键能计算中，从形成的键中减去断裂的键。",
          "ku": "Di hesabkirina enerjiya girêdanê de, bendên şikestî ji bendên çêkirî têne derxistin."
        },
        {
          "tr": "Ekzotermik tepkimelerde Eai negatif değer alır.",
          "en": "In exothermic reactions, Eai takes a negative value.",
          "de": "Bei exothermen Reaktionen nimmt Eai einen negativen Wert an.",
          "fr": "Dans les réactions exothermiques, Eai prend une valeur négative.",
          "ru": "В экзотермических реакциях Eai принимает отрицательное значение.",
          "ar": "في التفاعلات الطاردة للحرارة، يأخذ Eai قيمة سلبية.",
          "zh": "在放热反应中，Eai 取负值。",
          "ku": "Di reaksiyonên exotermîk de, Eai nirxek neyînî digire."
        },
        {
          "tr": "İyonlaşma enerjisi ekzotermik bir süreçtir.",
          "en": "Ionization energy is an exothermic process.",
          "de": "Ionisierungsenergie ist ein exothermer Prozess.",
          "fr": "L'énergie d'ionisation est un processus exothermique.",
          "ru": "Энергия ионизации представляет собой экзотермический процесс.",
          "ar": "طاقة التأين هي عملية طاردة للحرارة.",
          "zh": "电离能是一个放热过程。",
          "ku": "Enerjiya ionîzasyonê pêvajoyek exotermîk e."
        },
        {
          "tr": "Entalpi doğrudan ölçülebilen bir büyüklüktür, farkı ölçülemez.",
          "en": "Enthalpy is a quantity that can be measured directly, its difference cannot be measured.",
          "de": "Enthalpie ist eine Größe, die direkt gemessen werden kann, ihre Differenz kann nicht gemessen werden.",
          "fr": "L'enthalpie est une grandeur qui peut être mesurée directement, sa différence ne peut pas être mesurée.",
          "ru": "Энтальпия – это величина, которую можно измерить непосредственно, ее разницу измерить невозможно.",
          "ar": "الإنثالبي كمية يمكن قياسها مباشرة، ولا يمكن قياس فرقها.",
          "zh": "焓是可以直接测量的量，其差值无法测量。",
          "ku": "Entalpî mîqdarek e ku rasterast dikare were pîvandin, cûdahiya wê nayê pîvandin."
        },
        {
          "tr": "Elementlerin oda koşullarındaki en kararlı hallerinin standart oluşum entalpisi sıfırdır (O2(g)=0, C(grafit)=0; O3(g)≠0, C(elmas)≠0).",
          "en": "The standard formation enthalpy of the most stable states of the elements at room conditions is zero (O2(g)=0, C(graphite)=0; O3(g)≠0, C(diamond)≠0).",
          "de": "Die Standardbildungsenthalpie der stabilsten Zustände der Elemente bei Raumbedingungen beträgt Null (O2(g)=0, C(Graphit)=0; O3(g)≠0, C(Diamant)≠0).",
          "fr": "L'enthalpie standard de formation des états les plus stables des éléments dans les conditions ambiantes est nulle (O2(g)=0, C(graphite)=0 ; O3(g)≠0, C(diamant)≠0).",
          "ru": "Стандартная энтальпия образования наиболее стабильных состояний элементов в комнатных условиях равна нулю (O2(g)=0, C(графит)=0; O3(g)≠0, C(алмаз)≠0).",
          "ar": "المحتوى الحراري للتكوين القياسي للحالات الأكثر استقرارًا للعناصر في ظروف الغرفة هو صفر (O2(g)=0, C(graphite)=0; O3(g)≠0, C(diamond)≠0).",
          "zh": "室温条件下元素最稳定状态的标准生成焓为零（O2（g）= 0，C（石墨）= 0；O3（g）≠ 0，C（金刚石）≠ 0）。",
          "ku": "Entalpiya pêkhatina standard a rewşên herî bi îstîqrar ên hêmanan di şert û mercên odeyê de sifir e (O2(g)=0, C(grafît)=0; O3(g)≠0, C(almas)≠0)."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Elementlerin oda koşullarındaki en kararlı hallerinin standart oluşum entalpisi sıfırdır (O2(g)=0, C(grafit)=0; O3(g)≠0, C(elmas)≠0).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The standard formation enthalpy of the most stable states of the elements at room conditions is zero (O2(g)=0, C(graphite)=0; O3(g)≠0, C(diamond)≠0).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Standardbildungsenthalpie der stabilsten Zustände der Elemente bei Raumbedingungen beträgt Null (O2(g)=0, C(Graphit)=0; O3(g)≠0, C(Diamant)≠0).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'enthalpie standard de formation des états les plus stables des éléments dans les conditions ambiantes est nulle (O2(g)=0, C(graphite)=0 ; O3(g)≠0, C(diamant)≠0).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Стандартная энтальпия образования наиболее стабильных состояний элементов в комнатных условиях равна нулю (O2(g)=0, C(графит)=0; O3(g)≠0, C(алмаз)≠0).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المحتوى الحراري للتكوين القياسي للحالات الأكثر استقرارًا للعناصر في ظروف الغرفة هو صفر (O2(g)=0, C(graphite)=0; O3(g)≠0, C(diamond)≠0).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“室温条件下元素最稳定状态的标准生成焓为零（O2（g）= 0，C（石墨）= 0；O3（g）≠ 0，C（金刚石）≠ 0）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Entalpiya pêkhatina standard a rewşên herî bi îstîqrar ên hêmanan di şert û mercên odeyê de sifir e (O2(g)=0, C(grafît)=0; O3(g)≠0, C(almas)≠0).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u16-twin06",
      "stem": {
        "tr": "Aşağıda Kimyasal Tepkimelerde Enerji ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Energy in Chemical Reactions, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Energie bei Reaktionen: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Énergie des Réactions, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Энергия в химических реакциях», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الطاقة في التفاعلات الكيميائية\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“化学反应中的能量”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Enerjî Di Reaksiyonên Kîmyewî de\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Hess Yasası: Bir tepkime birden fazla basamağın toplamı şeklinde yazılabiliyorsa tepkime entalpisi basamakların entalpileri toplamına eşittir.",
          "en": "Hess's Law: If a reaction can be written as the sum of more than one step, the reaction enthalpy is equal to the sum of the enthalpies of the steps.",
          "de": "Hesssches Gesetz: Wenn eine Reaktion als Summe von mehr als einem Schritt beschrieben werden kann, ist die Reaktionsenthalpie gleich der Summe der Enthalpien der Schritte.",
          "fr": "Loi de Hess : Si une réaction peut être écrite comme la somme de plusieurs étapes, l'enthalpie de la réaction est égale à la somme des enthalpies des étapes.",
          "ru": "Закон Гесса: Если реакцию можно записать как сумму более чем одной стадии, то энтальпия реакции равна сумме энтальпий стадий.",
          "ar": "قانون هيس: إذا أمكن كتابة التفاعل على صورة مجموع أكثر من خطوة واحدة، فإن أنتالبية التفاعل تساوي مجموع أنتالبيات الخطوات.",
          "zh": "赫斯定律：如果一个反应可以写成多个步骤的总和，则反应焓等于步骤的焓总和。",
          "ku": "Zagona Hesen: Eger reaksiyonek bi kombûna ji yek gavan zêdetir were nivîsandin, entalpiya reaksiyonê bi kombûna entalpiyên gavan re ye."
        },
        {
          "tr": "Kovalent bağ kırılırken çevreye yüksek ısı yayılır.",
          "en": "As the covalent bond is broken, high heat is released into the environment.",
          "de": "Beim Aufbrechen der kovalenten Bindung wird große Wärme an die Umgebung abgegeben.",
          "fr": "Lorsque la liaison covalente est rompue, une chaleur élevée est libérée dans l’environnement.",
          "ru": "Поскольку ковалентная связь разрывается, в окружающую среду выделяется большое количество тепла.",
          "ar": "عند كسر الرابطة التساهمية، يتم إطلاق حرارة عالية في البيئة.",
          "zh": "当共价键断裂时，高热量被释放到环境中。",
          "ku": "Ji ber ku girêdana kovalentê tê şikestin, germa zêde ber bi hawîrdorê ve tê berdan."
        },
        {
          "tr": "ΔH = Eag - Eai dir.",
          "en": "ΔH = Eag - Eai.",
          "de": "ΔH = Eag – Eai.",
          "fr": "ΔH = Eag - Eai.",
          "ru": "ΔH = Eag - Eai.",
          "ar": "ΔH = إيج - إيا.",
          "zh": "ΔH = Eag - Eai。",
          "ku": "ΔH = Eag - Eai."
        },
        {
          "tr": "Suyun gaz veya sıvı halde oluşması tepkime entalpisini etkilemez.",
          "en": "The formation of water in gas or liquid state does not affect the reaction enthalpy.",
          "de": "Die Bildung von Wasser im gasförmigen oder flüssigen Zustand hat keinen Einfluss auf die Reaktionsenthalpie.",
          "fr": "La formation d’eau à l’état gazeux ou liquide n’affecte pas l’enthalpie de réaction.",
          "ru": "Образование воды в газообразном или жидком состоянии не влияет на энтальпию реакции.",
          "ar": "لا يؤثر تكوين الماء في الحالة الغازية أو السائلة على المحتوى الحراري للتفاعل.",
          "zh": "气态或液态水的形成不影响反应焓。",
          "ku": "Çêbûna avê di rewşa gazê an şilek de bandorê li entalpiya reaksiyonê nake."
        },
        {
          "tr": "Ekzotermik tepkimelerde ürünlerin entalpisi girenlerinkinden daha büyüktür.",
          "en": "In exothermic reactions, the enthalpy of the products is greater than that of the reactants.",
          "de": "Bei exothermen Reaktionen ist die Enthalpie der Produkte größer als die der Reaktanten.",
          "fr": "Dans les réactions exothermiques, l'enthalpie des produits est supérieure à celle des réactifs.",
          "ru": "В экзотермических реакциях энтальпия продуктов превышает энтальпию реагентов.",
          "ar": "في التفاعلات الطاردة للحرارة، يكون المحتوى الحراري للنواتج أكبر من المحتوى الحراري للمواد المتفاعلة.",
          "zh": "在放热反应中，产物的热函大于反应物的热函。",
          "ku": "Di reaksiyonên exotermîk de, entalpiya hilberan ji ya reaktantan mezintir e."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Hess Yasası: Bir tepkime birden fazla basamağın toplamı şeklinde yazılabiliyorsa tepkime entalpisi basamakların entalpileri toplamına eşittir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Hess's Law: If a reaction can be written as the sum of more than one step, the reaction enthalpy is equal to the sum of the enthalpies of the steps.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Hesssches Gesetz: Wenn eine Reaktion als Summe von mehr als einem Schritt beschrieben werden kann, ist die Reaktionsenthalpie gleich der Summe der Enthalpien der Schritte.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Loi de Hess : Si une réaction peut être écrite comme la somme de plusieurs étapes, l'enthalpie de la réaction est égale à la somme des enthalpies des étapes.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Закон Гесса: Если реакцию можно записать как сумму более чем одной стадии, то энтальпия реакции равна сумме энтальпий стадий.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قانون هيس: إذا أمكن كتابة التفاعل على صورة مجموع أكثر من خطوة واحدة، فإن أنتالبية التفاعل تساوي مجموع أنتالبيات الخطوات.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“赫斯定律：如果一个反应可以写成多个步骤的总和，则反应焓等于步骤的焓总和。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Zagona Hesen: Eger reaksiyonek bi kombûna ji yek gavan zêdetir were nivîsandin, entalpiya reaksiyonê bi kombûna entalpiyên gavan re ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u16-twin07",
      "stem": {
        "tr": "Kimyasal Tepkimelerde Enerji konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Energy in Chemical Reactions, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Energie bei Reaktionen: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Énergie des Réactions, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Энергия в химических реакциях», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الطاقة في التفاعلات الكيميائية\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“化学反应中的能量”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Enerjî Di Reaksiyonên Kîmyewî de\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Aktifleşmiş kompleks izole edilip şişede saklanabilen kararlı bir maddedir.",
          "en": "The activated complex is a stable substance that can be isolated and stored in a vial.",
          "de": "Der aktivierte Komplex ist eine stabile Substanz, die isoliert und in einem Fläschchen aufbewahrt werden kann.",
          "fr": "Le complexe activé est une substance stable qui peut être isolée et stockée dans un flacon.",
          "ru": "Активированный комплекс представляет собой стабильное вещество, которое можно выделить и хранить во флаконе.",
          "ar": "المركب المنشط عبارة عن مادة مستقرة يمكن عزلها وتخزينها في قارورة.",
          "zh": "活化的复合物是一种稳定的物质，可以分离并储存在小瓶中。",
          "ku": "Kompleksa aktîfkirî maddeyek stabîl e ku dikare were veqetandin û di şûşeyek de were hilanîn."
        },
        {
          "tr": "Tepkime ters çevrilirse ΔH ın işareti değişir; bir katsayıyla çarpılırsa ΔH da aynı katsayıyla çarpılır.",
          "en": "If the reaction is reversed, the sign of ΔH changes; If it is multiplied by a coefficient, ΔH is also multiplied by the same coefficient.",
          "de": "Bei umgekehrter Reaktion ändert sich das Vorzeichen von ΔH; Wenn es mit einem Koeffizienten multipliziert wird, wird ΔH auch mit demselben Koeffizienten multipliziert.",
          "fr": "Si la réaction est inversée, le signe de ΔH change ; S'il est multiplié par un coefficient, ΔH est également multiplié par le même coefficient.",
          "ru": "Если реакция обращена, знак ΔH меняется; Если его умножить на коэффициент, ΔH также умножится на тот же коэффициент.",
          "ar": "إذا تم عكس التفاعل، تتغير إشارة ΔH؛ إذا تم ضربها بمعامل، يتم ضرب ΔH أيضًا بنفس المعامل.",
          "zh": "如果反应逆转，则ΔH的符号改变；如果乘以系数，则ΔH也乘以相同的系数。",
          "ku": "Ger reaksîyon berevajî be, nîşana ΔH diguhere; Heger bi hevberekê were pirkirin, ΔH jî bi heman qasê tê zêdekirin."
        },
        {
          "tr": "Kırağılaşma olayında madde çevreden ısı alır.",
          "en": "During deposition (gas → solid), the substance absorbs heat from the surroundings.",
          "de": "Bei der Resublimation nimmt der Stoff Wärme aus der Umgebung auf.",
          "fr": "Lors de la condensation solide (gaz → solide), la substance absorbe de la chaleur du milieu extérieur.",
          "ru": "При десублимации вещество поглощает тепло из окружающей среды.",
          "ar": "أثناء الترسيب (تحول الغاز إلى صلب) تمتص المادة حرارة من الوسط المحيط.",
          "zh": "凝华过程中物质从环境吸收热量。",
          "ku": "Di dema depozîsyonê de (gaz → hişk) madde germê ji hawîrdorê distîne."
        },
        {
          "tr": "Endotermik tepkimelerde ürünler girenlerden daha kararlıdır.",
          "en": "In endothermic reactions the products are more stable than the reactants.",
          "de": "Bei endothermen Reaktionen sind die Produkte stabiler als die Edukte.",
          "fr": "Dans les réactions endothermiques, les produits sont plus stables que les réactifs.",
          "ru": "В эндотермических реакциях продукты устойчивее реагентов.",
          "ar": "في التفاعلات الماصة للحرارة تكون النواتج أكثر استقرارًا من المتفاعلات.",
          "zh": "吸热反应中生成物比反应物更稳定。",
          "ku": "Di reaksiyonên endotermîk de berhem ji reaktantan stabîltir in."
        },
        {
          "tr": "Endotermik tepkimeler başladıktan sonra kendiliğinden devam eder.",
          "en": "Endothermic reactions continue spontaneously once they start.",
          "de": "Endotherme Reaktionen laufen spontan weiter, sobald sie beginnen.",
          "fr": "Les réactions endothermiques se poursuivent spontanément une fois qu'elles ont commencé.",
          "ru": "Эндотермические реакции продолжаются самопроизвольно после начала.",
          "ar": "تستمر التفاعلات الماصة للحرارة تلقائيًا بمجرد أن تبدأ.",
          "zh": "吸热反应一旦开始就会自发地持续下去。",
          "ku": "Reaksiyonên endotermîk piştî ku dest pê bikin bi xweber berdewam dikin."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Tepkime ters çevrilirse ΔH ın işareti değişir; bir katsayıyla çarpılırsa ΔH da aynı katsayıyla çarpılır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the reaction is reversed, the sign of ΔH changes; If it is multiplied by a coefficient, ΔH is also multiplied by the same coefficient.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei umgekehrter Reaktion ändert sich das Vorzeichen von ΔH; Wenn es mit einem Koeffizienten multipliziert wird, wird ΔH auch mit demselben Koeffizienten multipliziert.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si la réaction est inversée, le signe de ΔH change ; S'il est multiplié par un coefficient, ΔH est également multiplié par le même coefficient.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если реакция обращена, знак ΔH меняется; Если его умножить на коэффициент, ΔH также умножится на тот же коэффициент.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا تم عكس التفاعل، تتغير إشارة ΔH؛ إذا تم ضربها بمعامل، يتم ضرب ΔH أيضًا بنفس المعامل.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果反应逆转，则ΔH的符号改变；如果乘以系数，则ΔH也乘以相同的系数。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger reaksîyon berevajî be, nîşana ΔH diguhere; Heger bi hevberekê were pirkirin, ΔH jî bi heman qasê tê zêdekirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u16-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimyasal Tepkimelerde Enerji ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Energy in Chemical Reactions, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Energie bei Reaktionen: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Énergie des Réactions, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Энергия в химических реакциях», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الطاقة في التفاعلات الكيميائية\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“化学反应中的能量”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Enerjî Di Reaksiyonên Kîmyewî de\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Ekzotermik tepkimelerde Eai negatif değer alır.",
          "en": "In exothermic reactions, Eai takes a negative value.",
          "de": "Bei exothermen Reaktionen nimmt Eai einen negativen Wert an.",
          "fr": "Dans les réactions exothermiques, Eai prend une valeur négative.",
          "ru": "В экзотермических реакциях Eai принимает отрицательное значение.",
          "ar": "في التفاعلات الطاردة للحرارة، يأخذ Eai قيمة سلبية.",
          "zh": "在放热反应中，Eai 取负值。",
          "ku": "Di reaksiyonên exotermîk de, Eai nirxek neyînî digire."
        },
        {
          "tr": "İyonlaşma enerjisi ekzotermik bir süreçtir.",
          "en": "Ionization energy is an exothermic process.",
          "de": "Ionisierungsenergie ist ein exothermer Prozess.",
          "fr": "L'énergie d'ionisation est un processus exothermique.",
          "ru": "Энергия ионизации представляет собой экзотермический процесс.",
          "ar": "طاقة التأين هي عملية طاردة للحرارة.",
          "zh": "电离能是一个放热过程。",
          "ku": "Enerjiya ionîzasyonê pêvajoyek exotermîk e."
        },
        {
          "tr": "Bağ enerjileri üzerinden entalpi: ΔH = Σ(Kırılan Bağ Enerjileri) - Σ(Oluşan Bağ Enerjileri) formülüyle bulunur.",
          "en": "Enthalpy based on bond energies: It is found by the formula ΔH = Σ(Broken Bond Energies) - Σ(Formed Bond Energies).",
          "de": "Enthalpie basierend auf Bindungsenergien: Sie wird durch die Formel ΔH = Σ(Energien gebrochener Bindungen) – Σ(Energien gebildeter Bindungen) ermittelt.",
          "fr": "Enthalpie basée sur les énergies de liaison : elle se trouve par la formule ΔH = Σ (énergies de liaison brisées) - Σ (énergies de liaison formées).",
          "ru": "Энтальпия, основанная на энергии связи: находится по формуле ΔH = Σ (энергия разрыва связи) - Σ (энергия образовавшейся связи).",
          "ar": "المحتوى الحراري المعتمد على طاقات الروابط: يتم العثور عليه بالصيغة ΔH = Σ(طاقات الروابط المكسورة) - Σ(طاقات الروابط المتكونة).",
          "zh": "基于键能的焓：通过公式 ΔH = Σ（断裂键能）- Σ（形成键能）求得。",
          "ku": "Entalpî li ser bingeha enerjiyên girêdanê: Bi formula ΔH = Σ(Enerjiyên Têkiliya Şikestî) - Σ(Enerjiyên Bondê yên Çêkirî) tê dîtin."
        },
        {
          "tr": "Entalpi doğrudan ölçülebilen bir büyüklüktür, farkı ölçülemez.",
          "en": "Enthalpy is a quantity that can be measured directly, its difference cannot be measured.",
          "de": "Enthalpie ist eine Größe, die direkt gemessen werden kann, ihre Differenz kann nicht gemessen werden.",
          "fr": "L'enthalpie est une grandeur qui peut être mesurée directement, sa différence ne peut pas être mesurée.",
          "ru": "Энтальпия – это величина, которую можно измерить непосредственно, ее разницу измерить невозможно.",
          "ar": "الإنثالبي كمية يمكن قياسها مباشرة، ولا يمكن قياس فرقها.",
          "zh": "焓是可以直接测量的量，其差值无法测量。",
          "ku": "Entalpî mîqdarek e ku rasterast dikare were pîvandin, cûdahiya wê nayê pîvandin."
        },
        {
          "tr": "Elementlerin tüm allotroplarının standart oluşum entalpisi sıfır kabul edilir.",
          "en": "The standard enthalpy of formation of all allotropes of elements is assumed to be zero.",
          "de": "Die Standardbildungsenthalpie aller Allotrope der Elemente wird mit Null angenommen.",
          "fr": "L'enthalpie standard de formation de tous les allotropes d'éléments est supposée être nulle.",
          "ru": "Стандартная энтальпия образования всех аллотропов элементов принимается равной нулю.",
          "ar": "من المفترض أن يكون المحتوى الحراري القياسي لتكوين جميع المتآصلات للعناصر صفرًا.",
          "zh": "假设元素的所有同素异形体的标准形成焓为零。",
          "ku": "Entalpiya standard a pêkhatina hemî allotropên hêmanan wekî sifir tê hesibandin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Bağ enerjileri üzerinden entalpi: ΔH = Σ(Kırılan Bağ Enerjileri) - Σ(Oluşan Bağ Enerjileri) formülüyle bulunur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Enthalpy based on bond energies: It is found by the formula ΔH = Σ(Broken Bond Energies) - Σ(Formed Bond Energies).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Enthalpie basierend auf Bindungsenergien: Sie wird durch die Formel ΔH = Σ(Energien gebrochener Bindungen) – Σ(Energien gebildeter Bindungen) ermittelt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Enthalpie basée sur les énergies de liaison : elle se trouve par la formule ΔH = Σ (énergies de liaison brisées) - Σ (énergies de liaison formées).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Энтальпия, основанная на энергии связи: находится по формуле ΔH = Σ (энергия разрыва связи) - Σ (энергия образовавшейся связи).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المحتوى الحراري المعتمد على طاقات الروابط: يتم العثور عليه بالصيغة ΔH = Σ(طاقات الروابط المكسورة) - Σ(طاقات الروابط المتكونة).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“基于键能的焓：通过公式 ΔH = Σ（断裂键能）- Σ（形成键能）求得。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Entalpî li ser bingeha enerjiyên girêdanê: Bi formula ΔH = Σ(Enerjiyên Têkiliya Şikestî) - Σ(Enerjiyên Bondê yên Çêkirî) tê dîtin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u16-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimyasal Tepkimelerde Enerji konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Energy in Chemical Reactions, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Energie bei Reaktionen die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Énergie des Réactions, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Энергия в химических реакциях», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الطاقة في التفاعلات الكيميائية\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“化学反应中的能量”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Enerjî Di Reaksiyonên Kîmyewî de\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "ΔH = Eag - Eai dir.",
          "en": "ΔH = Eag - Eai.",
          "de": "ΔH = Eag – Eai.",
          "fr": "ΔH = Eag - Eai.",
          "ru": "ΔH = Eag - Eai.",
          "ar": "ΔH = إيج - إيا.",
          "zh": "ΔH = Eag - Eai。",
          "ku": "ΔH = Eag - Eai."
        },
        {
          "tr": "Suyun gaz veya sıvı halde oluşması tepkime entalpisini etkilemez.",
          "en": "The formation of water in gas or liquid state does not affect the reaction enthalpy.",
          "de": "Die Bildung von Wasser im gasförmigen oder flüssigen Zustand hat keinen Einfluss auf die Reaktionsenthalpie.",
          "fr": "La formation d’eau à l’état gazeux ou liquide n’affecte pas l’enthalpie de réaction.",
          "ru": "Образование воды в газообразном или жидком состоянии не влияет на энтальпию реакции.",
          "ar": "لا يؤثر تكوين الماء في الحالة الغازية أو السائلة على المحتوى الحراري للتفاعل.",
          "zh": "气态或液态水的形成不影响反应焓。",
          "ku": "Çêbûna avê di rewşa gazê an şilek de bandorê li entalpiya reaksiyonê nake."
        },
        {
          "tr": "Ekzotermik tepkimelerde ürünlerin entalpisi girenlerinkinden daha büyüktür.",
          "en": "In exothermic reactions, the enthalpy of the products is greater than that of the reactants.",
          "de": "Bei exothermen Reaktionen ist die Enthalpie der Produkte größer als die der Reaktanten.",
          "fr": "Dans les réactions exothermiques, l'enthalpie des produits est supérieure à celle des réactifs.",
          "ru": "В экзотермических реакциях энтальпия продуктов превышает энтальпию реагентов.",
          "ar": "في التفاعلات الطاردة للحرارة، يكون المحتوى الحراري للنواتج أكبر من المحتوى الحراري للمواد المتفاعلة.",
          "zh": "在放热反应中，产物的热函大于反应物的热函。",
          "ku": "Di reaksiyonên exotermîk de, entalpiya hilberan ji ya reaktantan mezintir e."
        },
        {
          "tr": "Kimyasal bağ oluşumu daima ekzotermiktir (ΔH < 0); bağ kırılması daima endotermiktir (ΔH > 0).",
          "en": "Chemical bond formation is always exothermic (ΔH < 0); bond breaking is always endothermic (ΔH > 0).",
          "de": "Die Bildung chemischer Bindungen ist immer exotherm (ΔH < 0); Der Bindungsbruch ist immer endotherm (ΔH > 0).",
          "fr": "La formation de liaisons chimiques est toujours exothermique (ΔH < 0) ; la rupture de liaison est toujours endothermique (ΔH > 0).",
          "ru": "Образование химической связи всегда экзотермично (ΔH <0); разрыв связи всегда эндотермический (ΔH > 0).",
          "ar": "يكون تكوين الرابطة الكيميائية دائمًا طاردًا للحرارة (ΔH < 0)؛ يكون كسر الروابط دائمًا ماصًا للحرارة (ΔH > 0).",
          "zh": "化学键的形成总是放热的（ΔH < 0）；键断裂总是吸热的 (ΔH > 0)。",
          "ku": "Çêbûna girêdana kîmyewî her dem germ e (ΔH < 0); şikandina girêdanê her tim endotermîk e (ΔH > 0)."
        },
        {
          "tr": "Elmasın standart oluşum entalpisi sıfırdır.",
          "en": "The standard enthalpy of formation of diamond is zero.",
          "de": "Die Standardbildungsenthalpie von Diamant ist Null.",
          "fr": "L'enthalpie standard de formation du diamant est nulle.",
          "ru": "Стандартная энтальпия образования алмаза равна нулю.",
          "ar": "المحتوى الحراري القياسي لتكوين الماس هو صفر.",
          "zh": "金刚石的标准生成焓为零。",
          "ku": "Entalpiya standard a pêkhatina almasê sifir e."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Kimyasal bağ oluşumu daima ekzotermiktir (ΔH < 0); bağ kırılması daima endotermiktir (ΔH > 0).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Chemical bond formation is always exothermic (ΔH < 0); bond breaking is always endothermic (ΔH > 0).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Bildung chemischer Bindungen ist immer exotherm (ΔH < 0); Der Bindungsbruch ist immer endotherm (ΔH > 0).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La formation de liaisons chimiques est toujours exothermique (ΔH < 0) ; la rupture de liaison est toujours endothermique (ΔH > 0).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Образование химической связи всегда экзотермично (ΔH <0); разрыв связи всегда эндотермический (ΔH > 0).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يكون تكوين الرابطة الكيميائية دائمًا طاردًا للحرارة (ΔH < 0)؛ يكون كسر الروابط دائمًا ماصًا للحرارة (ΔH > 0).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“化学键的形成总是放热的（ΔH < 0）；键断裂总是吸热的 (ΔH > 0)。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Çêbûna girêdana kîmyewî her dem germ e (ΔH < 0); şikandina girêdanê her tim endotermîk e (ΔH > 0).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u16-twin10",
      "stem": {
        "tr": "Kimya dersinde Kimyasal Tepkimelerde Enerji ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Energy in Chemical Reactions, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Energie bei Reaktionen: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Énergie des Réactions, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Энергия в химических реакциях», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الطاقة في التفاعلات الكيميائية\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“化学反应中的能量”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Enerjî Di Reaksiyonên Kîmyewî de\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Kırağılaşma olayında madde çevreden ısı alır.",
          "en": "During deposition (gas → solid), the substance absorbs heat from the surroundings.",
          "de": "Bei der Resublimation nimmt der Stoff Wärme aus der Umgebung auf.",
          "fr": "Lors de la condensation solide (gaz → solide), la substance absorbe de la chaleur du milieu extérieur.",
          "ru": "При десублимации вещество поглощает тепло из окружающей среды.",
          "ar": "أثناء الترسيب (تحول الغاز إلى صلب) تمتص المادة حرارة من الوسط المحيط.",
          "zh": "凝华过程中物质从环境吸收热量。",
          "ku": "Di dema depozîsyonê de (gaz → hişk) madde germê ji hawîrdorê distîne."
        },
        {
          "tr": "Endotermik tepkimelerde ürünler girenlerden daha kararlıdır.",
          "en": "In endothermic reactions the products are more stable than the reactants.",
          "de": "Bei endothermen Reaktionen sind die Produkte stabiler als die Edukte.",
          "fr": "Dans les réactions endothermiques, les produits sont plus stables que les réactifs.",
          "ru": "В эндотермических реакциях продукты устойчивее реагентов.",
          "ar": "في التفاعلات الماصة للحرارة تكون النواتج أكثر استقرارًا من المتفاعلات.",
          "zh": "吸热反应中生成物比反应物更稳定。",
          "ku": "Di reaksiyonên endotermîk de berhem ji reaktantan stabîltir in."
        },
        {
          "tr": "Endotermik tepkimeler başladıktan sonra kendiliğinden devam eder.",
          "en": "Endothermic reactions continue spontaneously once they start.",
          "de": "Endotherme Reaktionen laufen spontan weiter, sobald sie beginnen.",
          "fr": "Les réactions endothermiques se poursuivent spontanément une fois qu'elles ont commencé.",
          "ru": "Эндотермические реакции продолжаются самопроизвольно после начала.",
          "ar": "تستمر التفاعلات الماصة للحرارة تلقائيًا بمجرد أن تبدأ.",
          "zh": "吸热反应一旦开始就会自发地持续下去。",
          "ku": "Reaksiyonên endotermîk piştî ku dest pê bikin bi xweber berdewam dikin."
        },
        {
          "tr": "Tepkime ters çevrilirse ΔH ın işareti değişmez.",
          "en": "If the reaction is reversed, the sign of ΔH does not change.",
          "de": "Bei umgekehrter Reaktion ändert sich das Vorzeichen von ΔH nicht.",
          "fr": "Si la réaction est inversée, le signe de ΔH ne change pas.",
          "ru": "При обратном ходе реакции знак ΔH не меняется.",
          "ar": "إذا تم عكس التفاعل فإن إشارة ΔH لا تتغير.",
          "zh": "如果反应逆转，则 ΔH 的符号不会改变。",
          "ku": "Ger reaksîyon berevajî be, nîşana ΔH naguhere."
        },
        {
          "tr": "Aktifleşmiş kompleks, tepkimenin zirve noktasındaki yüksek enerjili ve kararsız atomlar topluluğudur.",
          "en": "The activated complex is a collection of high-energy and unstable atoms at the peak of the reaction.",
          "de": "Der aktivierte Komplex ist eine Ansammlung hochenergetischer und instabiler Atome am Höhepunkt der Reaktion.",
          "fr": "Le complexe activé est un ensemble d’atomes instables et à haute énergie au sommet de la réaction.",
          "ru": "Активированный комплекс представляет собой совокупность высокоэнергетических и нестабильных атомов на пике реакции.",
          "ar": "المجمع المنشط عبارة عن مجموعة من الذرات عالية الطاقة وغير المستقرة في ذروة التفاعل.",
          "zh": "活化的络合物是反应峰值时高能且不稳定的原子的集合。",
          "ku": "Kompleksa aktîfkirî berhevokek ji atomên bi enerjiya bilind û ne aram di lûtkeya reaksiyonê de ye."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Aktifleşmiş kompleks, tepkimenin zirve noktasındaki yüksek enerjili ve kararsız atomlar topluluğudur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The activated complex is a collection of high-energy and unstable atoms at the peak of the reaction.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Der aktivierte Komplex ist eine Ansammlung hochenergetischer und instabiler Atome am Höhepunkt der Reaktion.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le complexe activé est un ensemble d’atomes instables et à haute énergie au sommet de la réaction.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Активированный комплекс представляет собой совокупность высокоэнергетических и нестабильных атомов на пике реакции.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المجمع المنشط عبارة عن مجموعة من الذرات عالية الطاقة وغير المستقرة في ذروة التفاعل.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“活化的络合物是反应峰值时高能且不稳定的原子的集合。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Kompleksa aktîfkirî berhevokek ji atomên bi enerjiya bilind û ne aram di lûtkeya reaksiyonê de ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u16-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimyasal Tepkimelerde Enerji konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Energy in Chemical Reactions?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Energie bei Reaktionen zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Énergie des Réactions ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Энергия в химических реакциях»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الطاقة في التفاعلات الكيميائية\"؟",
        "zh": "根据“化学反应中的能量”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Enerjî Di Reaksiyonên Kîmyewî de\" de rast e?"
      },
      "options": [
        {
          "tr": "İleri aktifleşme enerjisi (Eai) ve geri aktifleşme enerjisi (Eag) daima pozitif değerlerdir.",
          "en": "Forward activation energy (Eai) and reverse activation energy (Eag) are always positive values.",
          "de": "Vorwärtsaktivierungsenergie (Eai) und Rückwärtsaktivierungsenergie (Eag) sind immer positive Werte.",
          "fr": "L'énergie d'activation directe (Eai) et l'énergie d'activation inverse (Eag) sont toujours des valeurs positives.",
          "ru": "Энергия прямой активации (Eai) и энергия обратной активации (Eag) всегда имеют положительные значения.",
          "ar": "تعتبر طاقة التنشيط الأمامية (Eai) وطاقة التنشيط العكسية (Eag) قيمًا موجبة دائمًا.",
          "zh": "正向活化能 (Eai) 和反向活化能 (Eag) 始终为正值。",
          "ku": "Enerjiya çalakkirina pêş (Eai) û enerjiya çalakkirina berevajî (Eag) her gav nirxên erênî ne."
        },
        {
          "tr": "İyonlaşma enerjisi ekzotermik bir süreçtir.",
          "en": "Ionization energy is an exothermic process.",
          "de": "Ionisierungsenergie ist ein exothermer Prozess.",
          "fr": "L'énergie d'ionisation est un processus exothermique.",
          "ru": "Энергия ионизации представляет собой экзотермический процесс.",
          "ar": "طاقة التأين هي عملية طاردة للحرارة.",
          "zh": "电离能是一个放热过程。",
          "ku": "Enerjiya ionîzasyonê pêvajoyek exotermîk e."
        },
        {
          "tr": "Entalpi doğrudan ölçülebilen bir büyüklüktür, farkı ölçülemez.",
          "en": "Enthalpy is a quantity that can be measured directly, its difference cannot be measured.",
          "de": "Enthalpie ist eine Größe, die direkt gemessen werden kann, ihre Differenz kann nicht gemessen werden.",
          "fr": "L'enthalpie est une grandeur qui peut être mesurée directement, sa différence ne peut pas être mesurée.",
          "ru": "Энтальпия – это величина, которую можно измерить непосредственно, ее разницу измерить невозможно.",
          "ar": "الإنثالبي كمية يمكن قياسها مباشرة، ولا يمكن قياس فرقها.",
          "zh": "焓是可以直接测量的量，其差值无法测量。",
          "ku": "Entalpî mîqdarek e ku rasterast dikare were pîvandin, cûdahiya wê nayê pîvandin."
        },
        {
          "tr": "Elementlerin tüm allotroplarının standart oluşum entalpisi sıfır kabul edilir.",
          "en": "The standard enthalpy of formation of all allotropes of elements is assumed to be zero.",
          "de": "Die Standardbildungsenthalpie aller Allotrope der Elemente wird mit Null angenommen.",
          "fr": "L'enthalpie standard de formation de tous les allotropes d'éléments est supposée être nulle.",
          "ru": "Стандартная энтальпия образования всех аллотропов элементов принимается равной нулю.",
          "ar": "من المفترض أن يكون المحتوى الحراري القياسي لتكوين جميع المتآصلات للعناصر صفرًا.",
          "zh": "假设元素的所有同素异形体的标准形成焓为零。",
          "ku": "Entalpiya standard a pêkhatina hemî allotropên hêmanan wekî sifir tê hesibandin."
        },
        {
          "tr": "Tepkime 2 ile çarpıldığında ΔH değeri aynı kalır.",
          "en": "When the reaction is multiplied by 2, the ΔH value remains the same.",
          "de": "Wenn die Reaktion mit 2 multipliziert wird, bleibt der ΔH-Wert gleich.",
          "fr": "Lorsque la réaction est multipliée par 2, la valeur ΔH reste la même.",
          "ru": "Когда реакцию умножают на 2, значение ΔH остается прежним.",
          "ar": "عندما يتم ضرب التفاعل بـ 2، تظل قيمة ΔH كما هي.",
          "zh": "当反应乘以2时，ΔH值保持不变。",
          "ku": "Dema ku reaksiyonê bi 2-ê zêde dibe, nirxa ΔH wekî xwe dimîne."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"İleri aktifleşme enerjisi (Eai) ve geri aktifleşme enerjisi (Eag) daima pozitif değerlerdir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Forward activation energy (Eai) and reverse activation energy (Eag) are always positive values.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Vorwärtsaktivierungsenergie (Eai) und Rückwärtsaktivierungsenergie (Eag) sind immer positive Werte.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'énergie d'activation directe (Eai) et l'énergie d'activation inverse (Eag) sont toujours des valeurs positives.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Энергия прямой активации (Eai) и энергия обратной активации (Eag) всегда имеют положительные значения.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تعتبر طاقة التنشيط الأمامية (Eai) وطاقة التنشيط العكسية (Eag) قيمًا موجبة دائمًا.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“正向活化能 (Eai) 和反向活化能 (Eag) 始终为正值。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Enerjiya çalakkirina pêş (Eai) û enerjiya çalakkirina berevajî (Eag) her gav nirxên erênî ne.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u16-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimyasal Tepkimelerde Enerji sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Energy in Chemical Reactions, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Energie bei Reaktionen: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Énergie des Réactions, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Энергия в химических реакциях», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الطاقة في التفاعلات الكيميائية\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“化学反应中的能量”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Enerjî Di Reaksiyonên Kîmyewî de\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Suyun gaz veya sıvı halde oluşması tepkime entalpisini etkilemez.",
          "en": "The formation of water in gas or liquid state does not affect the reaction enthalpy.",
          "de": "Die Bildung von Wasser im gasförmigen oder flüssigen Zustand hat keinen Einfluss auf die Reaktionsenthalpie.",
          "fr": "La formation d’eau à l’état gazeux ou liquide n’affecte pas l’enthalpie de réaction.",
          "ru": "Образование воды в газообразном или жидком состоянии не влияет на энтальпию реакции.",
          "ar": "لا يؤثر تكوين الماء في الحالة الغازية أو السائلة على المحتوى الحراري للتفاعل.",
          "zh": "气态或液态水的形成不影响反应焓。",
          "ku": "Çêbûna avê di rewşa gazê an şilek de bandorê li entalpiya reaksiyonê nake."
        },
        {
          "tr": "Tepkime entalpisi aktifleşme enerjilerinden de bulunabilir: ΔH = Eai - Eag dir.",
          "en": "The reaction enthalpy can also be found from the activation energies: ΔH = Eai - Eag.",
          "de": "Die Reaktionsenthalpie lässt sich auch aus den Aktivierungsenergien ermitteln: ΔH = Eai – Eag.",
          "fr": "L'enthalpie de réaction peut également être trouvée à partir des énergies d'activation : ΔH = Eai - Eag.",
          "ru": "Энтальпию реакции можно найти и по энергиям активации: ΔH = Eai - Eag.",
          "ar": "يمكن أيضًا العثور على المحتوى الحراري للتفاعل من طاقات التنشيط: ΔH = Eai - Eag.",
          "zh": "反应焓也可以从活化能求出：ΔH = Eai - Eag。",
          "ku": "Entalpiya reaksiyonê jî ji enerjiyên aktîfkirinê tê dîtin: ΔH = Eai - Eag."
        },
        {
          "tr": "Ekzotermik tepkimelerde ürünlerin entalpisi girenlerinkinden daha büyüktür.",
          "en": "In exothermic reactions, the enthalpy of the products is greater than that of the reactants.",
          "de": "Bei exothermen Reaktionen ist die Enthalpie der Produkte größer als die der Reaktanten.",
          "fr": "Dans les réactions exothermiques, l'enthalpie des produits est supérieure à celle des réactifs.",
          "ru": "В экзотермических реакциях энтальпия продуктов превышает энтальпию реагентов.",
          "ar": "في التفاعلات الطاردة للحرارة، يكون المحتوى الحراري للنواتج أكبر من المحتوى الحراري للمواد المتفاعلة.",
          "zh": "在放热反应中，产物的热函大于反应物的热函。",
          "ku": "Di reaksiyonên exotermîk de, entalpiya hilberan ji ya reaktantan mezintir e."
        },
        {
          "tr": "Elmasın standart oluşum entalpisi sıfırdır.",
          "en": "The standard enthalpy of formation of diamond is zero.",
          "de": "Die Standardbildungsenthalpie von Diamant ist Null.",
          "fr": "L'enthalpie standard de formation du diamant est nulle.",
          "ru": "Стандартная энтальпия образования алмаза равна нулю.",
          "ar": "المحتوى الحراري القياسي لتكوين الماس هو صفر.",
          "zh": "金刚石的标准生成焓为零。",
          "ku": "Entalpiya standard a pêkhatina almasê sifir e."
        },
        {
          "tr": "Bağ enerjisi hesabında oluşan bağlardan kırılan bağlar çıkarılır.",
          "en": "In the bond energy calculation, broken bonds are subtracted from formed bonds.",
          "de": "Bei der Berechnung der Bindungsenergie werden gebrochene Bindungen von gebildeten Bindungen abgezogen.",
          "fr": "Dans le calcul de l’énergie des liaisons, les liaisons rompues sont soustraites des liaisons formées.",
          "ru": "При расчете энергии связи разорванные связи вычитаются из образовавшихся.",
          "ar": "في حساب طاقة الرابطة، يتم طرح الروابط المكسورة من الروابط المشكلة.",
          "zh": "在键能计算中，从形成的键中减去断裂的键。",
          "ku": "Di hesabkirina enerjiya girêdanê de, bendên şikestî ji bendên çêkirî têne derxistin."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Tepkime entalpisi aktifleşme enerjilerinden de bulunabilir: ΔH = Eai - Eag dir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The reaction enthalpy can also be found from the activation energies: ΔH = Eai - Eag.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Die Reaktionsenthalpie lässt sich auch aus den Aktivierungsenergien ermitteln: ΔH = Eai – Eag.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"L'enthalpie de réaction peut également être trouvée à partir des énergies d'activation : ΔH = Eai - Eag.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Энтальпию реакции можно найти и по энергиям активации: ΔH = Eai - Eag.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"يمكن أيضًا العثور على المحتوى الحراري للتفاعل من طاقات التنشيط: ΔH = Eai - Eag.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“反应焓也可以从活化能求出：ΔH = Eai - Eag。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Entalpiya reaksiyonê jî ji enerjiyên aktîfkirinê tê dîtin: ΔH = Eai - Eag.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u16-twin13",
      "stem": {
        "tr": "Aşağıda Kimyasal Tepkimelerde Enerji ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Energy in Chemical Reactions, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Energie bei Reaktionen: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Énergie des Réactions, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Энергия в химических реакциях», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الطاقة في التفاعلات الكيميائية\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“化学反应中的能量”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Enerjî Di Reaksiyonên Kîmyewî de\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Endotermik tepkimelerde ürünler girenlerden daha kararlıdır.",
          "en": "In endothermic reactions the products are more stable than the reactants.",
          "de": "Bei endothermen Reaktionen sind die Produkte stabiler als die Edukte.",
          "fr": "Dans les réactions endothermiques, les produits sont plus stables que les réactifs.",
          "ru": "В эндотермических реакциях продукты устойчивее реагентов.",
          "ar": "في التفاعلات الماصة للحرارة تكون النواتج أكثر استقرارًا من المتفاعلات.",
          "zh": "吸热反应中生成物比反应物更稳定。",
          "ku": "Di reaksiyonên endotermîk de berhem ji reaktantan stabîltir in."
        },
        {
          "tr": "Endotermik tepkimeler başladıktan sonra kendiliğinden devam eder.",
          "en": "Endothermic reactions continue spontaneously once they start.",
          "de": "Endotherme Reaktionen laufen spontan weiter, sobald sie beginnen.",
          "fr": "Les réactions endothermiques se poursuivent spontanément une fois qu'elles ont commencé.",
          "ru": "Эндотермические реакции продолжаются самопроизвольно после начала.",
          "ar": "تستمر التفاعلات الماصة للحرارة تلقائيًا بمجرد أن تبدأ.",
          "zh": "吸热反应一旦开始就会自发地持续下去。",
          "ku": "Reaksiyonên endotermîk piştî ku dest pê bikin bi xweber berdewam dikin."
        },
        {
          "tr": "Gazların suda çözünmesi, donma, yoğuşma ve kırağılaşma ekzotermiktir.",
          "en": "The dissolution of gases in water, freezing, condensation and deposition (gas → solid) are exothermic.",
          "de": "Das Lösen von Gasen in Wasser, das Gefrieren, die Kondensation und die Resublimation sind exotherm.",
          "fr": "La dissolution des gaz dans l'eau, la solidification, la liquéfaction (condensation) et la condensation solide (gaz → solide) sont exothermiques.",
          "ru": "Растворение газов в воде, замерзание, конденсация и десублимация экзотермичны.",
          "ar": "ذوبان الغازات في الماء والتجمد والتكاثف والترسيب (تحول الغاز إلى صلب) عمليات طاردة للحرارة.",
          "zh": "气体溶于水、凝固、液化和凝华都是放热过程。",
          "ku": "Helbûna gazan di avê de, cemidîn, şilbûn (kondensasyon) û depozîsyon (gaz → hişk) ekzotermîk in."
        },
        {
          "tr": "Tepkime ters çevrilirse ΔH ın işareti değişmez.",
          "en": "If the reaction is reversed, the sign of ΔH does not change.",
          "de": "Bei umgekehrter Reaktion ändert sich das Vorzeichen von ΔH nicht.",
          "fr": "Si la réaction est inversée, le signe de ΔH ne change pas.",
          "ru": "При обратном ходе реакции знак ΔH не меняется.",
          "ar": "إذا تم عكس التفاعل فإن إشارة ΔH لا تتغير.",
          "zh": "如果反应逆转，则 ΔH 的符号不会改变。",
          "ku": "Ger reaksîyon berevajî be, nîşana ΔH naguhere."
        },
        {
          "tr": "Kovalent bağ kırılırken çevreye yüksek ısı yayılır.",
          "en": "As the covalent bond is broken, high heat is released into the environment.",
          "de": "Beim Aufbrechen der kovalenten Bindung wird große Wärme an die Umgebung abgegeben.",
          "fr": "Lorsque la liaison covalente est rompue, une chaleur élevée est libérée dans l’environnement.",
          "ru": "Поскольку ковалентная связь разрывается, в окружающую среду выделяется большое количество тепла.",
          "ar": "عند كسر الرابطة التساهمية، يتم إطلاق حرارة عالية في البيئة.",
          "zh": "当共价键断裂时，高热量被释放到环境中。",
          "ku": "Ji ber ku girêdana kovalentê tê şikestin, germa zêde ber bi hawîrdorê ve tê berdan."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Gazların suda çözünmesi, donma, yoğuşma ve kırağılaşma ekzotermiktir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The dissolution of gases in water, freezing, condensation and deposition (gas → solid) are exothermic.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Das Lösen von Gasen in Wasser, das Gefrieren, die Kondensation und die Resublimation sind exotherm.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La dissolution des gaz dans l'eau, la solidification, la liquéfaction (condensation) et la condensation solide (gaz → solide) sont exothermiques.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Растворение газов в воде, замерзание, конденсация и десублимация экзотермичны.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"ذوبان الغازات في الماء والتجمد والتكاثف والترسيب (تحول الغاز إلى صلب) عمليات طاردة للحرارة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“气体溶于水、凝固、液化和凝华都是放热过程。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Helbûna gazan di avê de, cemidîn, şilbûn (kondensasyon) û depozîsyon (gaz → hişk) ekzotermîk in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u16-twin14",
      "stem": {
        "tr": "Kimyasal Tepkimelerde Enerji konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Energy in Chemical Reactions, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Energie bei Reaktionen: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Énergie des Réactions, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Энергия в химических реакциях», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الطاقة في التفاعلات الكيميائية\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“化学反应中的能量”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Enerjî Di Reaksiyonên Kîmyewî de\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Entalpi doğrudan ölçülebilen bir büyüklüktür, farkı ölçülemez.",
          "en": "Enthalpy is a quantity that can be measured directly, its difference cannot be measured.",
          "de": "Enthalpie ist eine Größe, die direkt gemessen werden kann, ihre Differenz kann nicht gemessen werden.",
          "fr": "L'enthalpie est une grandeur qui peut être mesurée directement, sa différence ne peut pas être mesurée.",
          "ru": "Энтальпия – это величина, которую можно измерить непосредственно, ее разницу измерить невозможно.",
          "ar": "الإنثالبي كمية يمكن قياسها مباشرة، ولا يمكن قياس فرقها.",
          "zh": "焓是可以直接测量的量，其差值无法测量。",
          "ku": "Entalpî mîqdarek e ku rasterast dikare were pîvandin, cûdahiya wê nayê pîvandin."
        },
        {
          "tr": "Elementlerin tüm allotroplarının standart oluşum entalpisi sıfır kabul edilir.",
          "en": "The standard enthalpy of formation of all allotropes of elements is assumed to be zero.",
          "de": "Die Standardbildungsenthalpie aller Allotrope der Elemente wird mit Null angenommen.",
          "fr": "L'enthalpie standard de formation de tous les allotropes d'éléments est supposée être nulle.",
          "ru": "Стандартная энтальпия образования всех аллотропов элементов принимается равной нулю.",
          "ar": "من المفترض أن يكون المحتوى الحراري القياسي لتكوين جميع المتآصلات للعناصر صفرًا.",
          "zh": "假设元素的所有同素异形体的标准形成焓为零。",
          "ku": "Entalpiya standard a pêkhatina hemî allotropên hêmanan wekî sifir tê hesibandin."
        },
        {
          "tr": "Tepkime 2 ile çarpıldığında ΔH değeri aynı kalır.",
          "en": "When the reaction is multiplied by 2, the ΔH value remains the same.",
          "de": "Wenn die Reaktion mit 2 multipliziert wird, bleibt der ΔH-Wert gleich.",
          "fr": "Lorsque la réaction est multipliée par 2, la valeur ΔH reste la même.",
          "ru": "Когда реакцию умножают на 2, значение ΔH остается прежним.",
          "ar": "عندما يتم ضرب التفاعل بـ 2، تظل قيمة ΔH كما هي.",
          "zh": "当反应乘以2时，ΔH值保持不变。",
          "ku": "Dema ku reaksiyonê bi 2-ê zêde dibe, nirxa ΔH wekî xwe dimîne."
        },
        {
          "tr": "Erime, buharlaşma, süblimleşme ve gaz haldeki atomdan elektron koparma (iyonlaşma) endotermiktir.",
          "en": "Melting, evaporation, sublimation and removal of electrons from gaseous atoms (ionization) are endothermic.",
          "de": "Schmelzen, Verdampfen, Sublimation und Entzug von Elektronen aus gasförmigen Atomen (Ionisation) sind endotherm.",
          "fr": "La fusion, l'évaporation, la sublimation et l'élimination des électrons des atomes gazeux (ionisation) sont endothermiques.",
          "ru": "Плавление, испарение, сублимация и отрыв электронов от атомов газа (ионизация) являются эндотермическими.",
          "ar": "إن الانصهار والتبخر والتسامي وإزالة الإلكترونات من الذرات الغازية (التأين) هي مواد ماصة للحرارة.",
          "zh": "熔化、蒸发、升华和从气态原子中除去电子（电离）都是吸热的。",
          "ku": "Hêlbûn, helandin, binavkirin û rakirina elektronan ji atomên gazê (iyonîzasyon) endotermîk in."
        },
        {
          "tr": "Aktifleşmiş kompleks izole edilip şişede saklanabilen kararlı bir maddedir.",
          "en": "The activated complex is a stable substance that can be isolated and stored in a vial.",
          "de": "Der aktivierte Komplex ist eine stabile Substanz, die isoliert und in einem Fläschchen aufbewahrt werden kann.",
          "fr": "Le complexe activé est une substance stable qui peut être isolée et stockée dans un flacon.",
          "ru": "Активированный комплекс представляет собой стабильное вещество, которое можно выделить и хранить во флаконе.",
          "ar": "المركب المنشط عبارة عن مادة مستقرة يمكن عزلها وتخزينها في قارورة.",
          "zh": "活化的复合物是一种稳定的物质，可以分离并储存在小瓶中。",
          "ku": "Kompleksa aktîfkirî maddeyek stabîl e ku dikare were veqetandin û di şûşeyek de were hilanîn."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Erime, buharlaşma, süblimleşme ve gaz haldeki atomdan elektron koparma (iyonlaşma) endotermiktir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Melting, evaporation, sublimation and removal of electrons from gaseous atoms (ionization) are endothermic.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Schmelzen, Verdampfen, Sublimation und Entzug von Elektronen aus gasförmigen Atomen (Ionisation) sind endotherm.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"La fusion, l'évaporation, la sublimation et l'élimination des électrons des atomes gazeux (ionisation) sont endothermiques.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Плавление, испарение, сублимация и отрыв электронов от атомов газа (ионизация) являются эндотермическими.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إن الانصهار والتبخر والتسامي وإزالة الإلكترونات من الذرات الغازية (التأين) هي مواد ماصة للحرارة.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“熔化、蒸发、升华和从气态原子中除去电子（电离）都是吸热的。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Hêlbûn, helandin, binavkirin û rakirina elektronan ji atomên gazê (iyonîzasyon) endotermîk in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u16-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimyasal Tepkimelerde Enerji ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Energy in Chemical Reactions, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Energie bei Reaktionen: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Énergie des Réactions, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Энергия в химических реакциях», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الطاقة في التفاعلات الكيميائية\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“化学反应中的能量”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Enerjî Di Reaksiyonên Kîmyewî de\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Ekzotermik tepkimelerde ürünlerin entalpisi girenlerinkinden daha büyüktür.",
          "en": "In exothermic reactions, the enthalpy of the products is greater than that of the reactants.",
          "de": "Bei exothermen Reaktionen ist die Enthalpie der Produkte größer als die der Reaktanten.",
          "fr": "Dans les réactions exothermiques, l'enthalpie des produits est supérieure à celle des réactifs.",
          "ru": "В экзотермических реакциях энтальпия продуктов превышает энтальпию реагентов.",
          "ar": "في التفاعلات الطاردة للحرارة، يكون المحتوى الحراري للنواتج أكبر من المحتوى الحراري للمواد المتفاعلة.",
          "zh": "在放热反应中，产物的热函大于反应物的热函。",
          "ku": "Di reaksiyonên exotermîk de, entalpiya hilberan ji ya reaktantan mezintir e."
        },
        {
          "tr": "Elmasın standart oluşum entalpisi sıfırdır.",
          "en": "The standard enthalpy of formation of diamond is zero.",
          "de": "Die Standardbildungsenthalpie von Diamant ist Null.",
          "fr": "L'enthalpie standard de formation du diamant est nulle.",
          "ru": "Стандартная энтальпия образования алмаза равна нулю.",
          "ar": "المحتوى الحراري القياسي لتكوين الماس هو صفر.",
          "zh": "金刚石的标准生成焓为零。",
          "ku": "Entalpiya standard a pêkhatina almasê sifir e."
        },
        {
          "tr": "Bağ enerjisi hesabında oluşan bağlardan kırılan bağlar çıkarılır.",
          "en": "In the bond energy calculation, broken bonds are subtracted from formed bonds.",
          "de": "Bei der Berechnung der Bindungsenergie werden gebrochene Bindungen von gebildeten Bindungen abgezogen.",
          "fr": "Dans le calcul de l’énergie des liaisons, les liaisons rompues sont soustraites des liaisons formées.",
          "ru": "При расчете энергии связи разорванные связи вычитаются из образовавшихся.",
          "ar": "في حساب طاقة الرابطة، يتم طرح الروابط المكسورة من الروابط المشكلة.",
          "zh": "在键能计算中，从形成的键中减去断裂的键。",
          "ku": "Di hesabkirina enerjiya girêdanê de, bendên şikestî ji bendên çêkirî têne derxistin."
        },
        {
          "tr": "Ekzotermik tepkimelerde Eai negatif değer alır.",
          "en": "In exothermic reactions, Eai takes a negative value.",
          "de": "Bei exothermen Reaktionen nimmt Eai einen negativen Wert an.",
          "fr": "Dans les réactions exothermiques, Eai prend une valeur négative.",
          "ru": "В экзотермических реакциях Eai принимает отрицательное значение.",
          "ar": "في التفاعلات الطاردة للحرارة، يأخذ Eai قيمة سلبية.",
          "zh": "在放热反应中，Eai 取负值。",
          "ku": "Di reaksiyonên exotermîk de, Eai nirxek neyînî digire."
        },
        {
          "tr": "Tepkimeye giren maddelerin fiziksel hali değişirse tepkime entalpisi (ΔH) değişir.",
          "en": "If the physical state of the reactants changes, the reaction enthalpy (ΔH) changes.",
          "de": "Ändert sich der Aggregatzustand der Reaktanten, ändert sich auch die Reaktionsenthalpie (ΔH).",
          "fr": "Si l'état physique des réactifs change, l'enthalpie de réaction (ΔH) change.",
          "ru": "При изменении физического состояния реагентов изменяется энтальпия реакции (ΔH).",
          "ar": "إذا تغيرت الحالة الفيزيائية للمواد المتفاعلة، يتغير المحتوى الحراري للتفاعل (ΔH).",
          "zh": "如果反应物的物理状态发生变化，反应焓 (ΔH) 就会发生变化。",
          "ku": "Ger rewşa fizîkî ya reaktantan biguhere, entalpiya reaksiyonê (ΔH) diguhere."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Tepkimeye giren maddelerin fiziksel hali değişirse tepkime entalpisi (ΔH) değişir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the physical state of the reactants changes, the reaction enthalpy (ΔH) changes.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Ändert sich der Aggregatzustand der Reaktanten, ändert sich auch die Reaktionsenthalpie (ΔH).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si l'état physique des réactifs change, l'enthalpie de réaction (ΔH) change.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При изменении физического состояния реагентов изменяется энтальпия реакции (ΔH).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا تغيرت الحالة الفيزيائية للمواد المتفاعلة، يتغير المحتوى الحراري للتفاعل (ΔH).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果反应物的物理状态发生变化，反应焓 (ΔH) 就会发生变化。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger rewşa fizîkî ya reaktantan biguhere, entalpiya reaksiyonê (ΔH) diguhere.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u16-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimyasal Tepkimelerde Enerji konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Energy in Chemical Reactions, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Energie bei Reaktionen die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Énergie des Réactions, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Энергия в химических реакциях», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الطاقة في التفاعلات الكيميائية\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“化学反应中的能量”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Enerjî Di Reaksiyonên Kîmyewî de\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Ekzotermik tepkimelerde ürünlerin potansiyel enerjisi (entalpisi) girenlerinkinden düşük olduğundan ürünler girenlerden daha kararlıdır.",
          "en": "In exothermic reactions the products have lower potential energy (enthalpy) than the reactants, so the products are more stable than the reactants.",
          "de": "Bei exothermen Reaktionen haben die Produkte eine geringere potentielle Energie (Enthalpie) als die Edukte und sind daher stabiler als diese.",
          "fr": "Dans les réactions exothermiques, les produits ont une énergie potentielle (enthalpie) plus faible que les réactifs ; ils sont donc plus stables que les réactifs.",
          "ru": "В экзотермических реакциях потенциальная энергия (энтальпия) продуктов ниже, чем у реагентов, поэтому продукты устойчивее реагентов.",
          "ar": "في التفاعلات الطاردة للحرارة تكون الطاقة الكامنة (الإنثالبي) للنواتج أقل منها للمتفاعلات، لذا تكون النواتج أكثر استقرارًا من المتفاعلات.",
          "zh": "放热反应中生成物的势能（焓）低于反应物，因此生成物比反应物更稳定。",
          "ku": "Di reaksiyonên ekzotermîk de enerjiya potansiyel (entalpî) ya berheman ji ya reaktantan kêmtir e, ji ber vê berhem ji reaktantan stabîltir in."
        },
        {
          "tr": "Endotermik tepkimeler başladıktan sonra kendiliğinden devam eder.",
          "en": "Endothermic reactions continue spontaneously once they start.",
          "de": "Endotherme Reaktionen laufen spontan weiter, sobald sie beginnen.",
          "fr": "Les réactions endothermiques se poursuivent spontanément une fois qu'elles ont commencé.",
          "ru": "Эндотермические реакции продолжаются самопроизвольно после начала.",
          "ar": "تستمر التفاعلات الماصة للحرارة تلقائيًا بمجرد أن تبدأ.",
          "zh": "吸热反应一旦开始就会自发地持续下去。",
          "ku": "Reaksiyonên endotermîk piştî ku dest pê bikin bi xweber berdewam dikin."
        },
        {
          "tr": "Tepkime ters çevrilirse ΔH ın işareti değişmez.",
          "en": "If the reaction is reversed, the sign of ΔH does not change.",
          "de": "Bei umgekehrter Reaktion ändert sich das Vorzeichen von ΔH nicht.",
          "fr": "Si la réaction est inversée, le signe de ΔH ne change pas.",
          "ru": "При обратном ходе реакции знак ΔH не меняется.",
          "ar": "إذا تم عكس التفاعل فإن إشارة ΔH لا تتغير.",
          "zh": "如果反应逆转，则 ΔH 的符号不会改变。",
          "ku": "Ger reaksîyon berevajî be, nîşana ΔH naguhere."
        },
        {
          "tr": "Kovalent bağ kırılırken çevreye yüksek ısı yayılır.",
          "en": "As the covalent bond is broken, high heat is released into the environment.",
          "de": "Beim Aufbrechen der kovalenten Bindung wird große Wärme an die Umgebung abgegeben.",
          "fr": "Lorsque la liaison covalente est rompue, une chaleur élevée est libérée dans l’environnement.",
          "ru": "Поскольку ковалентная связь разрывается, в окружающую среду выделяется большое количество тепла.",
          "ar": "عند كسر الرابطة التساهمية، يتم إطلاق حرارة عالية في البيئة.",
          "zh": "当共价键断裂时，高热量被释放到环境中。",
          "ku": "Ji ber ku girêdana kovalentê tê şikestin, germa zêde ber bi hawîrdorê ve tê berdan."
        },
        {
          "tr": "ΔH = Eag - Eai dir.",
          "en": "ΔH = Eag - Eai.",
          "de": "ΔH = Eag – Eai.",
          "fr": "ΔH = Eag - Eai.",
          "ru": "ΔH = Eag - Eai.",
          "ar": "ΔH = إيج - إيا.",
          "zh": "ΔH = Eag - Eai。",
          "ku": "ΔH = Eag - Eai."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Ekzotermik tepkimelerde ürünlerin potansiyel enerjisi (entalpisi) girenlerinkinden düşük olduğundan ürünler girenlerden daha kararlıdır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In exothermic reactions the products have lower potential energy (enthalpy) than the reactants, so the products are more stable than the reactants.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Bei exothermen Reaktionen haben die Produkte eine geringere potentielle Energie (Enthalpie) als die Edukte und sind daher stabiler als diese.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans les réactions exothermiques, les produits ont une énergie potentielle (enthalpie) plus faible que les réactifs ; ils sont donc plus stables que les réactifs.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В экзотермических реакциях потенциальная энергия (энтальпия) продуктов ниже, чем у реагентов, поэтому продукты устойчивее реагентов.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في التفاعلات الطاردة للحرارة تكون الطاقة الكامنة (الإنثالبي) للنواتج أقل منها للمتفاعلات، لذا تكون النواتج أكثر استقرارًا من المتفاعلات.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“放热反应中生成物的势能（焓）低于反应物，因此生成物比反应物更稳定。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di reaksiyonên ekzotermîk de enerjiya potansiyel (entalpî) ya berheman ji ya reaktantan kêmtir e, ji ber vê berhem ji reaktantan stabîltir in.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit16;
