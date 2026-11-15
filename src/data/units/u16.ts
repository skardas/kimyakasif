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
    "ku": "Enerjî di Reaksiyonên Kîmyewî de"
  },
  "subtitle": {
    "tr": "Entalpi, Hess Yasası ve Bağ Enerjileri",
    "en": "ΔH, Hess Law & Bond Enthalpies",
    "de": "Enthalpie, Hesssches Gesetz und Bindungsenergien",
    "fr": "Enthalpie, loi de Hess et énergies de liaison",
    "ru": "Энтальпия, закон Гесса и энергии связи",
    "ar": "المحتوى الحراري، قانون هس وطاقة الروابط",
    "zh": "焓、盖斯定律与键能",
    "ku": "Entalpî, Zagona Hess û Enerjiyên Girêdanê"
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
        "ar": "تغير المحتوى الحراري (ΔH): هو كمية الحرارة الممتصة أو المنطلقة في تفاعل يحدث عند ضغط ثابت (ΔH = Hالنواتج - Hالمتفاعلات).",
        "zh": "焓变(ΔH)：在恒压下进行的反应中吸收或放出的热量(ΔH = H生成物 - H反应物)。",
        "ku": "Guherîna entalpiyê (ΔH): mîqdara germê ye ku di reaksiyoneke di bin zexta sabît de tê girtin an tê dayîn (ΔH = Hhilber - Hreaktant)."
      },
      "trap": {
        "tr": "Entalpi doğrudan ölçülebilen bir büyüklüktür, farkı ölçülemez.",
        "en": "Enthalpy is a quantity that can be measured directly, its difference cannot be measured.",
        "de": "Enthalpie ist eine Größe, die direkt gemessen werden kann, ihre Differenz kann nicht gemessen werden.",
        "fr": "L'enthalpie est une grandeur qui peut être mesurée directement, sa différence ne peut pas être mesurée.",
        "ru": "Энтальпию можно измерить непосредственно, а её изменение измерить нельзя.",
        "ar": "المحتوى الحراري كمية يمكن قياسها مباشرة، أما التغير فيه فلا يمكن قياسه.",
        "zh": "焓可以直接测量，而焓的变化量无法测量。",
        "ku": "Entalpî mezinahiyek e ku rasterast tê pîvandin, lê guherîna wê nayê pîvandin."
      },
      "whyTrapIsFalse": {
        "tr": "Durum tam tersidir: bir maddenin mutlak entalpisi ölçülemez; kalorimetreyle ölçülen ve hesaplanan büyüklük entalpi değişimidir (ΔH).",
        "en": "It is the other way round: the absolute enthalpy of a substance cannot be measured; what is measured with a calorimeter and calculated is the enthalpy change (ΔH).",
        "de": "Es ist genau umgekehrt: Die absolute Enthalpie eines Stoffes ist nicht messbar; mit dem Kalorimeter gemessen und berechnet wird die Enthalpieänderung (ΔH).",
        "fr": "C'est l'inverse : l'enthalpie absolue d'une substance ne peut pas être mesurée ; ce que l'on mesure au calorimètre et que l'on calcule, c'est la variation d'enthalpie (ΔH).",
        "ru": "Всё наоборот: абсолютную энтальпию вещества измерить нельзя; с помощью калориметра измеряют и рассчитывают изменение энтальпии (ΔH).",
        "ar": "الأمر على العكس تمامًا: لا يمكن قياس المحتوى الحراري المطلق لمادة؛ ما يُقاس بالمسعر ويُحسب هو التغير في المحتوى الحراري (ΔH).",
        "zh": "恰恰相反：物质的绝对焓无法测量；用量热计测量和计算的是焓变(ΔH)。",
        "ku": "Rewş berevajî ye: entalpiya mutleq a madeyekê nayê pîvandin; mezinahiya ku bi kalorîmetreyê tê pîvandin û tê hesibandin guherîna entalpiyê (ΔH) ye."
      }
    },
    {
      "id": "u16-f02",
      "fact": {
        "tr": "Ekzotermik tepkimelerde ΔH < 0'dır; ısı ürünler tarafına yazılır ve sistem çevreye ısı verir.",
        "en": "In exothermic reactions ΔH < 0; heat is written on the products side and the system releases heat to the surroundings.",
        "de": "Bei exothermen Reaktionen ist ΔH < 0; die Wärme wird auf der Produktseite notiert und das System gibt Wärme an die Umgebung ab.",
        "fr": "Dans les réactions exothermiques, ΔH < 0 ; la chaleur s'écrit du côté des produits et le système cède de la chaleur au milieu extérieur.",
        "ru": "В экзотермических реакциях ΔH < 0; теплоту записывают в правой части уравнения (со стороны продуктов), и система отдаёт теплоту окружающей среде.",
        "ar": "في التفاعلات الطاردة للحرارة ΔH < 0؛ تُكتب الحرارة في جهة النواتج ويطلق النظام حرارة إلى الوسط المحيط.",
        "zh": "放热反应中 ΔH < 0；热量写在生成物一侧，体系向环境放出热量。",
        "ku": "Di reaksiyonên ekzotermîk de ΔH < 0 e; germ li aliyê hilberan tê nivîsandin û sîstem germê dide derdorê."
      },
      "trap": {
        "tr": "Ekzotermik tepkimelerde ürünlerin entalpisi girenlerinkinden daha büyüktür.",
        "en": "In exothermic reactions, the enthalpy of the products is greater than that of the reactants.",
        "de": "Bei exothermen Reaktionen ist die Enthalpie der Produkte größer als die der Reaktanten.",
        "fr": "Dans les réactions exothermiques, l'enthalpie des produits est supérieure à celle des réactifs.",
        "ru": "В экзотермических реакциях энтальпия продуктов превышает энтальпию реагентов.",
        "ar": "في التفاعلات الطاردة للحرارة، يكون المحتوى الحراري للنواتج أكبر من المحتوى الحراري للمواد المتفاعلة.",
        "zh": "放热反应中，生成物的焓大于反应物的焓。",
        "ku": "Di reaksiyonên ekzotermîk de entalpiya hilberan ji ya reaktantan mezintir e."
      },
      "whyTrapIsFalse": {
        "tr": "Ekzotermik tepkimede sistem ısı vererek enerji kaybeder; bu yüzden ürünlerin entalpisi girenlerinkinden küçüktür ve ΔH = Hürünler − Hgirenler negatif çıkar.",
        "en": "In an exothermic reaction the system loses energy by giving off heat; therefore the products have lower enthalpy than the reactants and ΔH = Hproducts − Hreactants comes out negative.",
        "de": "Bei einer exothermen Reaktion verliert das System durch Wärmeabgabe Energie; daher ist die Enthalpie der Produkte kleiner als die der Edukte und ΔH = HProdukte − HEdukte ist negativ.",
        "fr": "Dans une réaction exothermique, le système perd de l'énergie en cédant de la chaleur ; l'enthalpie des produits est donc inférieure à celle des réactifs et ΔH = Hproduits − Hréactifs est négatif.",
        "ru": "В экзотермической реакции система теряет энергию, отдавая теплоту; поэтому энтальпия продуктов меньше энтальпии реагентов, и ΔH = Hпродуктов − Hреагентов отрицательна.",
        "ar": "في التفاعل الطارد للحرارة يفقد النظام طاقة بإطلاقه الحرارة؛ لذلك يكون المحتوى الحراري للنواتج أقل من المتفاعلات وتكون ΔH = Hالنواتج − Hالمتفاعلات سالبة.",
        "zh": "放热反应中体系放出热量而失去能量，因此生成物的焓低于反应物，ΔH = H生成物 − H反应物 为负值。",
        "ku": "Di reaksiyona ekzotermîk de sîstem bi dayîna germê enerjiyê winda dike; ji ber vê yekê entalpiya hilberan ji ya reaktantan kêmtir e û ΔH = Hhilber − Hreaktant negatîf derdikeve."
      }
    },
    {
      "id": "u16-f03",
      "fact": {
        "tr": "Endotermik tepkimelerde ΔH > 0'dır; ısı girenler tarafına yazılır ve sistem çevreden ısı alır.",
        "en": "In endothermic reactions ΔH > 0; heat is written on the reactants side and the system absorbs heat from the surroundings.",
        "de": "Bei endothermen Reaktionen ist ΔH > 0; die Wärme wird auf der Eduktseite notiert und das System nimmt Wärme aus der Umgebung auf.",
        "fr": "Dans les réactions endothermiques, ΔH > 0 ; la chaleur s'écrit du côté des réactifs et le système absorbe de la chaleur du milieu extérieur.",
        "ru": "В эндотермических реакциях ΔH > 0; теплоту записывают в левой части уравнения (со стороны реагентов), и система поглощает теплоту из окружающей среды.",
        "ar": "في التفاعلات الماصة للحرارة ΔH > 0؛ تُكتب الحرارة في جهة المتفاعلات ويمتص النظام حرارة من الوسط المحيط.",
        "zh": "吸热反应中 ΔH > 0；热量写在反应物一侧，体系从环境吸收热量。",
        "ku": "Di reaksiyonên endotermîk de ΔH > 0 e; germ li aliyê reaktantan tê nivîsandin û sîstem germê ji derdorê digire."
      },
      "trap": {
        "tr": "Endotermik tepkimelerde sistem çevreye ısı verdiği için ortamın sıcaklığı yükselir.",
        "en": "In endothermic reactions the system gives off heat to the surroundings, so the temperature of the surroundings rises.",
        "de": "Bei endothermen Reaktionen gibt das System Wärme an die Umgebung ab, daher steigt die Temperatur der Umgebung.",
        "fr": "Dans les réactions endothermiques, le système cède de la chaleur au milieu extérieur, donc la température du milieu augmente.",
        "ru": "В эндотермических реакциях система отдаёт теплоту окружающей среде, поэтому температура среды повышается.",
        "ar": "في التفاعلات الماصة للحرارة يُطلق النظام حرارة إلى الوسط المحيط، لذلك ترتفع درجة حرارة الوسط.",
        "zh": "吸热反应中体系向环境放出热量，因此环境温度升高。",
        "ku": "Di reaksiyonên endotermîk de, ji ber ku sîstem germê dide derdorê, germahiya derdorê bilind dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Isı veren ve ortamı ısıtan tepkime ekzotermiktir; endotermik tepkimede sistem ısıyı ortamdan aldığı için ortamın sıcaklığı düşer.",
        "en": "A reaction that gives off heat and warms the surroundings is exothermic; in an endothermic reaction the system takes heat from the surroundings, so their temperature falls.",
        "de": "Eine Reaktion, die Wärme abgibt und die Umgebung erwärmt, ist exotherm; bei einer endothermen Reaktion entzieht das System der Umgebung Wärme, deren Temperatur sinkt also.",
        "fr": "Une réaction qui cède de la chaleur et réchauffe le milieu est exothermique ; dans une réaction endothermique, le système prend de la chaleur au milieu, dont la température baisse.",
        "ru": "Реакция, которая отдаёт теплоту и нагревает окружающую среду, экзотермическая; в эндотермической реакции система забирает теплоту у окружающей среды, и температура среды понижается.",
        "ar": "التفاعل الذي يُطلق الحرارة ويُدفئ الوسط هو تفاعل طارد للحرارة؛ أما في التفاعل الماص للحرارة فيأخذ النظام الحرارة من الوسط فتنخفض درجة حرارة الوسط.",
        "zh": "放出热量并使环境变热的是放热反应；吸热反应中体系从环境吸收热量，环境温度降低。",
        "ku": "Reaksiyona ku germê dide û derdorê germ dike ekzotermîk e; di reaksiyona endotermîk de sîstem germê ji derdorê digire, loma germahiya derdorê dadikeve."
      }
    },
    {
      "id": "u16-f04",
      "fact": {
        "tr": "Standart oluşum entalpisi (ΔHf°): 25 °C ve 1 atm'de 1 mol bileşiğin, elementlerinin en kararlı hâllerinden oluşması sırasındaki entalpi değişimidir.",
        "en": "Standard enthalpy of formation (ΔHf°): the enthalpy change when 1 mol of a compound forms from its elements in their most stable forms at 25 °C and 1 atm.",
        "de": "Standardbildungsenthalpie (ΔHf°): die Enthalpieänderung bei der Bildung von 1 mol einer Verbindung aus ihren Elementen in deren stabilster Form bei 25 °C und 1 atm.",
        "fr": "Enthalpie standard de formation (ΔHf°) : variation d'enthalpie lors de la formation de 1 mol d'un composé à partir de ses éléments pris dans leur état le plus stable à 25 °C et 1 atm.",
        "ru": "Стандартная энтальпия образования (ΔHf°) — изменение энтальпии при образовании 1 моль соединения из простых веществ в их наиболее устойчивом состоянии при 25 °C и 1 атм.",
        "ar": "المحتوى الحراري القياسي للتكوين (ΔHf°): هو التغير في المحتوى الحراري عند تكوّن 1 mol من المركب من عناصره في أكثر حالاتها استقرارًا عند 25 °C و1 atm.",
        "zh": "标准生成焓(ΔHf°)：在 25 °C 和 1 atm 下，由最稳定状态的单质生成 1 mol 化合物时的焓变。",
        "ku": "Entalpiya çêbûnê ya standard (ΔHf°): guherîna entalpiyê ye dema ku 1 mol pêkhate li 25 °C û 1 atm ji rewşên herî stabîl ên elementên xwe çêdibe."
      },
      "trap": {
        "tr": "Elementlerin tüm allotroplarının standart oluşum entalpisi sıfır kabul edilir.",
        "en": "The standard enthalpy of formation of all allotropes of elements is assumed to be zero.",
        "de": "Die Standardbildungsenthalpie aller Allotrope der Elemente wird als null angenommen.",
        "fr": "L'enthalpie standard de formation de toutes les formes allotropiques des éléments est considérée comme nulle.",
        "ru": "Стандартная энтальпия образования всех аллотропных модификаций элементов принимается равной нулю.",
        "ar": "يُعدّ المحتوى الحراري القياسي للتكوين لجميع متآصلات العناصر صفرًا.",
        "zh": "元素的所有同素异形体的标准生成焓都规定为零。",
        "ku": "Entalpiya çêbûnê ya standard a hemû allotropên elementan sifir tê qebûlkirin."
      },
      "whyTrapIsFalse": {
        "tr": "Sıfır kabulü yalnızca elementin standart koşullardaki en kararlı hâli için geçerlidir; O3 veya elmas gibi daha az kararlı allotropların oluşum entalpisi sıfırdan farklıdır.",
        "en": "The zero convention applies only to the most stable form of the element under standard conditions; less stable allotropes such as O3 or diamond have non-zero enthalpies of formation.",
        "de": "Die Null-Festlegung gilt nur für die unter Standardbedingungen stabilste Form des Elements; weniger stabile Allotrope wie O3 oder Diamant haben eine von null verschiedene Bildungsenthalpie.",
        "fr": "La convention du zéro ne vaut que pour la forme la plus stable de l'élément dans les conditions standard ; des allotropes moins stables comme O3 ou le diamant ont une enthalpie de formation non nulle.",
        "ru": "Нулевое значение принимают только для наиболее устойчивой при стандартных условиях формы элемента; у менее устойчивых аллотропных модификаций, например O3 или алмаза, энтальпия образования не равна нулю.",
        "ar": "اعتبار القيمة صفرًا يخص فقط الشكل الأكثر استقرارًا للعنصر في الظروف القياسية؛ أما المتآصلات الأقل استقرارًا مثل O3 أو الماس فلها محتوى حراري للتكوين لا يساوي صفرًا.",
        "zh": "规定为零只适用于元素在标准状态下最稳定的形态；O3、金刚石等较不稳定的同素异形体的生成焓不为零。",
        "ku": "Qebûla sifirê tenê ji bo rewşa herî stabîl a elementê di şertên standard de derbasdar e; entalpiya çêbûnê ya allotropên kêmtir stabîl ên wekî O3 an elmasê ne sifir e."
      }
    },
    {
      "id": "u16-f05",
      "fact": {
        "tr": "Elementlerin standart hâllerinin (25 °C ve 1 atm'de genellikle en kararlı hâlleri) standart oluşum entalpisi sıfırdır (O2(g)=0, C(grafit)=0; O3(g)≠0, C(elmas)≠0).",
        "en": "The standard formation enthalpy of an element in its standard state (usually its most stable form at 25 °C and 1 atm) is zero (O2(g)=0, C(graphite)=0; O3(g)≠0, C(diamond)≠0).",
        "de": "Die Standardbildungsenthalpie eines Elements in seinem Standardzustand (meist seiner stabilsten Form bei 25 °C und 1 atm) beträgt null (O2(g)=0, C(Graphit)=0; O3(g)≠0, C(Diamant)≠0).",
        "fr": "L'enthalpie standard de formation d'un élément dans son état standard (en général sa forme la plus stable à 25 °C et 1 atm) est nulle (O2(g)=0, C(graphite)=0 ; O3(g)≠0, C(diamant)≠0).",
        "ru": "Стандартная энтальпия образования простого вещества в стандартном состоянии (как правило, в наиболее устойчивой при 25 °C и 1 атм форме) равна нулю (O2(г)=0, C(графит)=0; O3(г)≠0, C(алмаз)≠0).",
        "ar": "المحتوى الحراري القياسي لتكوين العنصر في حالته القياسية (وهي غالبًا أكثر صوره استقرارًا عند 25 °C و1 atm) يساوي صفرًا (O2(g) = 0، C(جرافيت) = 0؛ أما O3(g) ≠ 0 وC(ماس) ≠ 0).",
        "zh": "元素处于标准态（通常是 25 °C、1 atm 下最稳定的单质形态）时，其标准生成焓为零(O2(g) = 0，C(石墨) = 0；O3(g) ≠ 0，C(金刚石) ≠ 0)。",
        "ku": "Entalpiya çêbûnê ya standard a elementekê di rewşa wê ya standard de (bi gelemperî forma wê ya herî stabîl li 25 °C û 1 atm) sifir e (O2(g)=0, C(grafît)=0; O3(g)≠0, C(elmas)≠0)."
      },
      "trap": {
        "tr": "Elmasın standart oluşum entalpisi sıfırdır.",
        "en": "The standard enthalpy of formation of diamond is zero.",
        "de": "Die Standardbildungsenthalpie von Diamant ist Null.",
        "fr": "L'enthalpie standard de formation du diamant est nulle.",
        "ru": "Стандартная энтальпия образования алмаза равна нулю.",
        "ar": "المحتوى الحراري القياسي لتكوين الماس يساوي صفرًا.",
        "zh": "金刚石的标准生成焓为零。",
        "ku": "Entalpiya çêbûnê ya standard a elmasê sifir e."
      },
      "whyTrapIsFalse": {
        "tr": "Karbonun 25 °C ve 1 atm'deki en kararlı allotropu grafittir; elmas grafitten oluşurken entalpi değiştiği için ΔHf°(elmas) sıfır değildir (yaklaşık +1,9 kJ/mol).",
        "en": "The most stable allotrope of carbon at 25 °C and 1 atm is graphite; since forming diamond from graphite involves an enthalpy change, ΔHf°(diamond) is not zero (about +1.9 kJ/mol).",
        "de": "Das stabilste Allotrop des Kohlenstoffs bei 25 °C und 1 atm ist Graphit; da die Bildung von Diamant aus Graphit mit einer Enthalpieänderung verbunden ist, ist ΔHf°(Diamant) nicht null (etwa +1,9 kJ/mol).",
        "fr": "L'allotrope le plus stable du carbone à 25 °C et 1 atm est le graphite ; comme la formation du diamant à partir du graphite s'accompagne d'une variation d'enthalpie, ΔHf°(diamant) n'est pas nul (environ +1,9 kJ/mol).",
        "ru": "Наиболее устойчивая аллотропная модификация углерода при 25 °C и 1 атм — графит; так как образование алмаза из графита сопровождается изменением энтальпии, ΔHf°(алмаз) не равна нулю (около +1,9 кДж/моль).",
        "ar": "أكثر متآصلات الكربون استقرارًا عند 25 °C و1 atm هو الجرافيت؛ وبما أن تكوّن الماس من الجرافيت يصاحبه تغير في المحتوى الحراري فإن ΔHf°(الماس) ليست صفرًا (نحو +1.9 kJ/mol).",
        "zh": "25 °C、1 atm 下碳最稳定的同素异形体是石墨；由石墨生成金刚石伴随焓变，所以 ΔHf°(金刚石) 不为零(约 +1.9 kJ/mol)。",
        "ku": "Li 25 °C û 1 atm allotropa herî stabîl a karbonê grafît e; ji ber ku dema elmas ji grafîtê çêdibe entalpî diguhere, ΔHf°(elmas) ne sifir e (nêzîkî +1,9 kJ/mol)."
      }
    },
    {
      "id": "u16-f06",
      "fact": {
        "tr": "Hess Yasası: Bir tepkime birden fazla basamağın toplamı şeklinde yazılabiliyorsa tepkime entalpisi basamakların entalpileri toplamına eşittir.",
        "en": "Hess's Law: If a reaction can be written as the sum of more than one step, the reaction enthalpy is equal to the sum of the enthalpies of the steps.",
        "de": "Hesssches Gesetz: Wenn eine Reaktion als Summe von mehr als einem Schritt beschrieben werden kann, ist die Reaktionsenthalpie gleich der Summe der Enthalpien der Schritte.",
        "fr": "Loi de Hess : Si une réaction peut être écrite comme la somme de plusieurs étapes, l'enthalpie de la réaction est égale à la somme des enthalpies des étapes.",
        "ru": "Закон Гесса: если реакцию можно представить как сумму нескольких стадий, то её энтальпия равна сумме энтальпий этих стадий.",
        "ar": "قانون هس: إذا أمكن كتابة التفاعل على صورة مجموع خطوتين أو أكثر، فإن التغير في المحتوى الحراري للتفاعل يساوي مجموع التغيرات في المحتوى الحراري لهذه الخطوات.",
        "zh": "盖斯定律：如果一个反应可以表示为几个步骤的反应之和，则该反应的焓变等于各步反应焓变之和。",
        "ku": "Zagona Hess: Heke reaksiyonek wekî koma çend gavan were nivîsandin, entalpiya reaksiyonê wekhevî koma entalpiyên gavan e."
      },
      "trap": {
        "tr": "Tepkime ters çevrilirse ΔH'nin işareti değişmez.",
        "en": "If the reaction is reversed, the sign of ΔH does not change.",
        "de": "Bei umgekehrter Reaktion ändert sich das Vorzeichen von ΔH nicht.",
        "fr": "Si la réaction est inversée, le signe de ΔH ne change pas.",
        "ru": "Если записать реакцию в обратном направлении, знак ΔH не изменится.",
        "ar": "إذا عُكس التفاعل فإن إشارة ΔH لا تتغير.",
        "zh": "将反应逆向书写时，ΔH 的符号不变。",
        "ku": "Dema reaksiyon berevajî tê nivîsandin, nîşana ΔH naguhere."
      },
      "whyTrapIsFalse": {
        "tr": "İleri yönde açığa çıkan ısı geri yönde aynı miktarda alınır; bu yüzden tepkime ters çevrilince ΔH'nin büyüklüğü aynı kalır ama işareti değişir.",
        "en": "The heat released in the forward direction is absorbed in the same amount in the reverse direction; so when a reaction is reversed the magnitude of ΔH stays the same but its sign changes.",
        "de": "Die in Hinrichtung freigesetzte Wärme wird in Rückrichtung in gleicher Menge aufgenommen; beim Umkehren einer Reaktion bleibt der Betrag von ΔH gleich, aber das Vorzeichen ändert sich.",
        "fr": "La chaleur libérée dans le sens direct est absorbée en même quantité dans le sens inverse ; quand on inverse une réaction, la valeur absolue de ΔH reste la même mais son signe change.",
        "ru": "Теплота, которая выделяется в прямом направлении, в том же количестве поглощается в обратном; поэтому при записи реакции в обратном направлении абсолютная величина ΔH сохраняется, а знак меняется.",
        "ar": "الحرارة المنطلقة في الاتجاه الأمامي تُمتص بالمقدار نفسه في الاتجاه العكسي؛ لذلك عند عكس التفاعل يبقى مقدار ΔH كما هو لكن إشارتها تتغير.",
        "zh": "正向放出的热量在逆向时会等量吸收；因此将反应逆向书写时，ΔH 的数值不变，但符号改变。",
        "ku": "Germa ku di aliyê pêşve de derdikeve, di aliyê paşve de bi heman mîqdarê tê girtin; ji ber vê yekê dema reaksiyon berevajî dibe, mezinahiya ΔH wekî xwe dimîne lê nîşana wê diguhere."
      }
    },
    {
      "id": "u16-f07",
      "fact": {
        "tr": "Tepkime ters çevrilirse ΔH'nin işareti değişir; bir katsayıyla çarpılırsa ΔH de aynı katsayıyla çarpılır.",
        "en": "If the reaction is reversed, the sign of ΔH changes; If it is multiplied by a coefficient, ΔH is also multiplied by the same coefficient.",
        "de": "Bei umgekehrter Reaktion ändert sich das Vorzeichen von ΔH; Wenn es mit einem Koeffizienten multipliziert wird, wird ΔH auch mit demselben Koeffizienten multipliziert.",
        "fr": "Si la réaction est inversée, le signe de ΔH change ; S'il est multiplié par un coefficient, ΔH est également multiplié par le même coefficient.",
        "ru": "Если записать реакцию в обратном направлении, знак ΔH меняется; если умножить уравнение на коэффициент, ΔH умножается на тот же коэффициент.",
        "ar": "إذا عُكس التفاعل تتغير إشارة ΔH؛ وإذا ضُرب في معامل تُضرب ΔH في المعامل نفسه.",
        "zh": "将反应逆向书写时，ΔH 变号；将反应式乘以某一系数时，ΔH 也乘以同一系数。",
        "ku": "Dema reaksiyon berevajî tê nivîsandin nîşana ΔH diguhere; heke reaksiyon bi hevberekê were pirkirin, ΔH jî bi heman hevberê tê pirkirin."
      },
      "trap": {
        "tr": "Tepkime 2 ile çarpıldığında ΔH değeri aynı kalır.",
        "en": "When the reaction is multiplied by 2, the ΔH value remains the same.",
        "de": "Wenn die Reaktion mit 2 multipliziert wird, bleibt der ΔH-Wert gleich.",
        "fr": "Lorsque la réaction est multipliée par 2, la valeur ΔH reste la même.",
        "ru": "При умножении уравнения реакции на 2 значение ΔH не меняется.",
        "ar": "عند ضرب التفاعل في 2 تبقى قيمة ΔH كما هي.",
        "zh": "将反应式乘以 2 时，ΔH 的值不变。",
        "ku": "Dema reaksiyon bi 2 tê pirkirin, nirxa ΔH wekî xwe dimîne."
      },
      "whyTrapIsFalse": {
        "tr": "ΔH madde miktarına bağlı (ekstensif) bir büyüklüktür; katsayılar 2 katına çıkınca tepkimeye giren madde miktarı ve alınan/verilen ısı da 2 katına çıkar.",
        "en": "ΔH depends on the amount of substance (it is extensive); when the coefficients are doubled, the amount reacting and the heat absorbed or released also double.",
        "de": "ΔH hängt von der Stoffmenge ab (extensive Größe); werden die Koeffizienten verdoppelt, verdoppeln sich auch die umgesetzte Stoffmenge und die aufgenommene bzw. abgegebene Wärme.",
        "fr": "ΔH dépend de la quantité de matière (grandeur extensive) ; si les coefficients sont doublés, la quantité qui réagit et la chaleur échangée doublent aussi.",
        "ru": "ΔH зависит от количества вещества (это экстенсивная величина); при удвоении коэффициентов удваиваются и количество прореагировавшего вещества, и поглощённая или выделившаяся теплота.",
        "ar": "ΔH كمية شاملة تعتمد على كمية المادة؛ فعند مضاعفة المعاملات تتضاعف كمية المادة المتفاعلة وتتضاعف معها الحرارة الممتصة أو المنطلقة.",
        "zh": "ΔH 与物质的量有关（广度量）；化学计量数加倍时，参加反应的物质的量以及吸收或放出的热量也加倍。",
        "ku": "ΔH mezinahiyeke girêdayî mîqdara madeyê ye (ekstensîf); dema hevber du qat dibin, mîqdara madeya ku dikeve reaksiyonê û germa ku tê girtin an tê dayîn jî du qat dibe."
      }
    },
    {
      "id": "u16-f08",
      "fact": {
        "tr": "Bağ enerjileri üzerinden entalpi: ΔH ≈ Σ(Kırılan Bağ Enerjileri) − Σ(Oluşan Bağ Enerjileri); ortalama bağ enerjileri kullanıldığı için sonuç yaklaşıktır.",
        "en": "Enthalpy from bond energies: ΔH ≈ Σ(energies of bonds broken) − Σ(energies of bonds formed); the result is approximate because average bond energies are used.",
        "de": "Enthalpie aus Bindungsenergien: ΔH ≈ Σ(Energien der gespaltenen Bindungen) − Σ(Energien der gebildeten Bindungen); das Ergebnis ist ein Näherungswert, da mittlere Bindungsenergien verwendet werden.",
        "fr": "Enthalpie à partir des énergies de liaison : ΔH ≈ Σ(énergies des liaisons rompues) − Σ(énergies des liaisons formées) ; le résultat est approché car on utilise des énergies de liaison moyennes.",
        "ru": "Энтальпия по энергиям связей: ΔH ≈ Σ(энергии разрываемых связей) − Σ(энергии образующихся связей); результат приближённый, так как используются средние энергии связей.",
        "ar": "المحتوى الحراري من طاقات الروابط: ΔH ≈ Σ(طاقات الروابط المكسورة) − Σ(طاقات الروابط المتكونة)؛ والنتيجة تقريبية لأنه تُستخدم متوسطات طاقات الروابط.",
        "zh": "由键能求焓变：ΔH ≈ Σ(断裂键的键能) − Σ(形成键的键能)；由于使用的是平均键能，结果为近似值。",
        "ku": "Entalpî ji enerjiyên girêdanê: ΔH ≈ Σ(enerjiyên girêdanên şikestî) − Σ(enerjiyên girêdanên çêbûyî); ji ber ku enerjiyên girêdanê yên navînî tên bikaranîn, encam texmînî ye."
      },
      "trap": {
        "tr": "Bağ enerjisi hesabında oluşan bağlardan kırılan bağlar çıkarılır.",
        "en": "In the bond energy calculation, broken bonds are subtracted from formed bonds.",
        "de": "Bei der Berechnung der Bindungsenergie werden gebrochene Bindungen von gebildeten Bindungen abgezogen.",
        "fr": "Dans le calcul de l’énergie des liaisons, les liaisons rompues sont soustraites des liaisons formées.",
        "ru": "При расчёте ΔH по энергиям связей энергию разрываемых связей вычитают из энергии образующихся связей.",
        "ar": "في حساب ΔH من طاقات الروابط تُطرح طاقات الروابط المكسورة من طاقات الروابط المتكونة.",
        "zh": "用键能计算时，用形成的键的键能减去断裂的键的键能。",
        "ku": "Di hesabê enerjiya girêdanê de girêdanên şikestî ji girêdanên çêbûyî tên derxistin."
      },
      "whyTrapIsFalse": {
        "tr": "Bağ kırmak enerji gerektirdiği için kırılan bağlar pozitif katkı yapar; doğru sıra kırılan − oluşan'dır, ters çıkarma yapılırsa ΔH'nin işareti yanlış bulunur.",
        "en": "Breaking bonds requires energy, so broken bonds contribute positively; the correct order is broken − formed, and subtracting the other way gives ΔH with the wrong sign.",
        "de": "Das Spalten von Bindungen erfordert Energie, daher tragen gespaltene Bindungen positiv bei; richtig ist gespalten − gebildet, umgekehrt erhält man ΔH mit falschem Vorzeichen.",
        "fr": "Rompre des liaisons demande de l'énergie, donc les liaisons rompues comptent positivement ; l'ordre correct est rompues − formées, et la soustraction inverse donne ΔH avec le mauvais signe.",
        "ru": "Разрыв связей требует затраты энергии, поэтому разрываемые связи дают положительный вклад; правильный порядок — «разрываемые минус образующиеся», а при обратном вычитании знак ΔH получится неверным.",
        "ar": "كسر الروابط يحتاج إلى طاقة، لذا تساهم الروابط المكسورة بقيمة موجبة؛ الترتيب الصحيح هو المكسورة − المتكونة، والطرح بالعكس يعطي ΔH بإشارة خاطئة.",
        "zh": "断键需要吸收能量，因此断裂的键贡献为正；正确顺序是断裂 − 形成，反过来相减会得到符号错误的 ΔH。",
        "ku": "Şikandina girêdanan enerjiyê dixwaze, loma girêdanên şikestî beşdariyeke erênî dikin; rêza rast şikestî − çêbûyî ye, heke derxistin berevajî were kirin nîşana ΔH şaş tê dîtin."
      }
    },
    {
      "id": "u16-f09",
      "fact": {
        "tr": "Kimyasal bağ oluşumu daima ekzotermiktir (ΔH < 0); bağ kırılması daima endotermiktir (ΔH > 0).",
        "en": "Chemical bond formation is always exothermic (ΔH < 0); bond breaking is always endothermic (ΔH > 0).",
        "de": "Die Bildung chemischer Bindungen ist immer exotherm (ΔH < 0); Der Bindungsbruch ist immer endotherm (ΔH > 0).",
        "fr": "La formation de liaisons chimiques est toujours exothermique (ΔH < 0) ; la rupture de liaison est toujours endothermique (ΔH > 0).",
        "ru": "Образование химической связи всегда экзотермично (ΔH < 0); разрыв связи всегда эндотермичен (ΔH > 0).",
        "ar": "تكوين الرابطة الكيميائية طارد للحرارة دائمًا (ΔH < 0)، وكسر الرابطة ماص للحرارة دائمًا (ΔH > 0).",
        "zh": "化学键的形成总是放热的(ΔH < 0)；化学键的断裂总是吸热的(ΔH > 0)。",
        "ku": "Çêbûna girêdana kîmyewî her tim ekzotermîk e (ΔH < 0); şikestina girêdanê her tim endotermîk e (ΔH > 0)."
      },
      "trap": {
        "tr": "Kovalent bağ kırılırken çevreye yüksek ısı yayılır.",
        "en": "As the covalent bond is broken, high heat is released into the environment.",
        "de": "Beim Aufbrechen der kovalenten Bindung wird große Wärme an die Umgebung abgegeben.",
        "fr": "Lorsque la liaison covalente est rompue, une chaleur élevée est libérée dans l’environnement.",
        "ru": "При разрыве ковалентной связи в окружающую среду выделяется много теплоты.",
        "ar": "عند كسر الرابطة التساهمية تنطلق حرارة كبيرة إلى الوسط المحيط.",
        "zh": "共价键断裂时向环境放出大量热量。",
        "ku": "Dema girêdana kovalent dişkê, germeke zêde li derdorê belav dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Bağı kırmak için atomlar arasındaki çekimi yenmek gerekir ve bu dışarıdan enerji almayı gerektirir; çevreye ısı yayılması bağ oluşurken gerçekleşir.",
        "en": "Breaking a bond means overcoming the attraction between the atoms, which requires energy from outside; heat is released to the surroundings when bonds form.",
        "de": "Um eine Bindung zu spalten, muss die Anziehung zwischen den Atomen überwunden werden, was Energiezufuhr erfordert; Wärme wird an die Umgebung abgegeben, wenn Bindungen entstehen.",
        "fr": "Rompre une liaison, c'est vaincre l'attraction entre les atomes, ce qui exige un apport d'énergie ; la chaleur est libérée vers le milieu lorsque des liaisons se forment.",
        "ru": "Чтобы разорвать связь, нужно преодолеть притяжение между атомами, а для этого требуется подвод энергии; теплота выделяется в среду при образовании связей.",
        "ar": "كسر الرابطة يعني التغلب على التجاذب بين الذرات، وهذا يتطلب طاقة من الخارج؛ أما انطلاق الحرارة إلى الوسط فيحدث عند تكوّن الروابط.",
        "zh": "断键需要克服原子间的吸引，必须从外界吸收能量；向环境放出热量发生在成键时。",
        "ku": "Ji bo şikandina girêdanê divê kişandina navbera atoman were derbaskirin û ji bo vê divê ji derve enerjî were girtin; belavbûna germê li derdorê dema çêbûna girêdanê pêk tê."
      }
    },
    {
      "id": "u16-f10",
      "fact": {
        "tr": "Aktifleşmiş kompleks, tepkimenin zirve noktasındaki yüksek enerjili ve kararsız atomlar topluluğudur.",
        "en": "The activated complex is a collection of high-energy and unstable atoms at the peak of the reaction.",
        "de": "Der aktivierte Komplex ist eine Ansammlung hochenergetischer und instabiler Atome am Höhepunkt der Reaktion.",
        "fr": "Le complexe activé est un ensemble d’atomes instables et à haute énergie au sommet de la réaction.",
        "ru": "Активированный комплекс — неустойчивая группировка атомов с высокой энергией, соответствующая вершине энергетического профиля реакции.",
        "ar": "المعقد المنشط مجموعة من الذرات عالية الطاقة وغير مستقرة توجد عند قمة مسار التفاعل.",
        "zh": "活化络合物是反应过程中处于能量最高点、能量高且不稳定的原子集合体。",
        "ku": "Kompleksa aktîvkirî komeke atoman a nestabîl û bi enerjiya bilind e ku li lûtkeya reaksiyonê ye."
      },
      "trap": {
        "tr": "Aktifleşmiş kompleks izole edilip şişede saklanabilen kararlı bir maddedir.",
        "en": "The activated complex is a stable substance that can be isolated and stored in a vial.",
        "de": "Der aktivierte Komplex ist eine stabile Substanz, die isoliert und in einem Fläschchen aufbewahrt werden kann.",
        "fr": "Le complexe activé est une substance stable qui peut être isolée et stockée dans un flacon.",
        "ru": "Активированный комплекс — устойчивое вещество, которое можно выделить и хранить в склянке.",
        "ar": "المعقد المنشّط مادة مستقرة يمكن عزلها وحفظها في قارورة.",
        "zh": "活化络合物是一种稳定的物质，可以分离出来并装在瓶中保存。",
        "ku": "Kompleksa aktîvkirî madeyeke stabîl e ku dikare were veqetandin û di şûşeyê de were hilanîn."
      },
      "whyTrapIsFalse": {
        "tr": "Aktifleşmiş kompleks, enerji grafiğinin tepesinde çok kısa süre var olan bir geçiş yapısıdır; hemen ürünlere ya da tekrar girenlere dönüştüğü için yalıtılamaz.",
        "en": "The activated complex is a transition structure that exists only for an instant at the top of the energy diagram; it immediately turns into products or back into reactants, so it cannot be isolated.",
        "de": "Der aktivierte Komplex ist eine Übergangsstruktur, die nur einen Augenblick am Gipfel des Energiediagramms existiert; er zerfällt sofort zu Produkten oder zurück zu Edukten und ist daher nicht isolierbar.",
        "fr": "Le complexe activé est une structure de transition qui n'existe qu'un instant au sommet du diagramme d'énergie ; il se transforme aussitôt en produits ou redonne les réactifs, donc il ne peut pas être isolé.",
        "ru": "Активированный комплекс — переходная структура, которая существует очень короткое время на вершине энергетической диаграммы; он сразу превращается в продукты или снова в реагенты, поэтому выделить его нельзя.",
        "ar": "المعقد المنشط بنية انتقالية توجد للحظة قصيرة جدًا عند قمة مخطط الطاقة؛ فهو يتحول فورًا إلى نواتج أو يعود إلى متفاعلات، لذلك لا يمكن عزله.",
        "zh": "活化络合物是只在能量图顶点瞬间存在的过渡结构；它会立即转变为生成物或变回反应物，因此无法分离出来。",
        "ku": "Kompleksa aktîvkirî avahiyeke derbasbûnê ye ku tenê demeke pir kurt li serê grafîka enerjiyê heye; ji ber ku yekser vediguhere hilberan an dîsa reaktantan, nayê veqetandin."
      }
    },
    {
      "id": "u16-f11",
      "fact": {
        "tr": "İleri aktifleşme enerjisi (Eai) ve geri aktifleşme enerjisi (Eag) daima pozitif değerlerdir.",
        "en": "Forward activation energy (Eai) and reverse activation energy (Eag) are always positive values.",
        "de": "Vorwärtsaktivierungsenergie (Eai) und Rückwärtsaktivierungsenergie (Eag) sind immer positive Werte.",
        "fr": "L'énergie d'activation directe (Eai) et l'énergie d'activation inverse (Eag) sont toujours des valeurs positives.",
        "ru": "Энергия активации прямой реакции Ea(пр) и энергия активации обратной реакции Ea(обр) всегда положительны.",
        "ar": "طاقة التنشيط الأمامية (Eai) وطاقة التنشيط العكسية (Eag) قيمتان موجبتان دائمًا.",
        "zh": "正反应活化能(Eai)和逆反应活化能(Eag)总是正值。",
        "ku": "Enerjiya aktîvasyonê ya pêşve (Eai) û enerjiya aktîvasyonê ya paşve (Eag) her tim nirxên erênî ne."
      },
      "trap": {
        "tr": "Ekzotermik tepkimelerde Eai negatif değer alır.",
        "en": "In exothermic reactions, Eai takes a negative value.",
        "de": "Bei exothermen Reaktionen nimmt Eai einen negativen Wert an.",
        "fr": "Dans les réactions exothermiques, Eai prend une valeur négative.",
        "ru": "В экзотермических реакциях Ea(пр) отрицательна.",
        "ar": "في التفاعلات الطاردة للحرارة تكون قيمة Eai سالبة.",
        "zh": "放热反应的 Eai 为负值。",
        "ku": "Di reaksiyonên ekzotermîk de Eai nirxeke negatîf digire."
      },
      "whyTrapIsFalse": {
        "tr": "Aktifleşme enerjisi aşılması gereken bir enerji engelidir ve her tepkimede pozitiftir; ekzotermik olmak yalnızca ΔH'nin negatif, yani Eai'nin Eag'den küçük olması demektir.",
        "en": "Activation energy is an energy barrier that must be overcome and is positive for every reaction; being exothermic only means ΔH is negative, i.e. Eai is smaller than Eag.",
        "de": "Die Aktivierungsenergie ist eine zu überwindende Energiebarriere und bei jeder Reaktion positiv; exotherm bedeutet nur, dass ΔH negativ ist, also Eai kleiner als Eag.",
        "fr": "L'énergie d'activation est une barrière énergétique à franchir, positive pour toute réaction ; être exothermique signifie seulement que ΔH est négatif, c'est-à-dire Eai inférieure à Eag.",
        "ru": "Энергия активации — энергетический барьер, который нужно преодолеть, и в любой реакции она положительна; экзотермичность означает лишь, что ΔH отрицательна, то есть Ea(пр) меньше Ea(обр).",
        "ar": "طاقة التنشيط حاجز طاقي يجب تجاوزه وهي موجبة في كل تفاعل؛ وكون التفاعل طاردًا للحرارة يعني فقط أن ΔH سالبة، أي أن Eai أصغر من Eag.",
        "zh": "活化能是必须越过的能垒，对任何反应都是正值；放热只意味着 ΔH 为负，即 Eai 小于 Eag。",
        "ku": "Enerjiya aktîvasyonê astengeke enerjiyê ye ku divê were derbaskirin û di her reaksiyonê de erênî ye; ekzotermîkbûn tenê tê wê wateyê ku ΔH negatîf e, ango Eai ji Eag piçûktir e."
      }
    },
    {
      "id": "u16-f12",
      "fact": {
        "tr": "Tepkime entalpisi aktifleşme enerjilerinden de bulunabilir: ΔH = Eai - Eag'dir.",
        "en": "The reaction enthalpy can also be found from the activation energies: ΔH = Eai - Eag.",
        "de": "Die Reaktionsenthalpie lässt sich auch aus den Aktivierungsenergien ermitteln: ΔH = Eai – Eag.",
        "fr": "L'enthalpie de réaction peut également être trouvée à partir des énergies d'activation : ΔH = Eai - Eag.",
        "ru": "Энтальпию реакции можно найти и по энергиям активации: ΔH = Ea(пр) - Ea(обр).",
        "ar": "يمكن أيضًا إيجاد المحتوى الحراري للتفاعل من طاقتي التنشيط: ΔH = Eai - Eag.",
        "zh": "反应焓变也可由活化能求出：ΔH = Eai - Eag。",
        "ku": "Entalpiya reaksiyonê ji enerjiyên aktîvasyonê jî tê dîtin: ΔH = Eai - Eag."
      },
      "trap": {
        "tr": "ΔH = Eag - Eai'dir.",
        "en": "ΔH = Eag - Eai.",
        "de": "ΔH = Eag – Eai.",
        "fr": "ΔH = Eag - Eai.",
        "ru": "ΔH = Eag - Eai.",
        "ar": "ΔH = Eag - Eai.",
        "zh": "ΔH = Eag - Eai。",
        "ku": "ΔH = Eag - Eai."
      },
      "whyTrapIsFalse": {
        "tr": "ΔH ürün ile giren enerjilerinin farkıdır: Eai − Eag = (EAK − Egirenler) − (EAK − Eürünler) = Eürünler − Egirenler; sıra ters alınırsa ΔH'nin işareti bozulur.",
        "en": "ΔH is the energy difference between products and reactants: Eai − Eag = (Ecomplex − Ereactants) − (Ecomplex − Eproducts) = Eproducts − Ereactants; reversing the order flips the sign of ΔH.",
        "de": "ΔH ist die Energiedifferenz zwischen Produkten und Edukten: Eai − Eag = (EKomplex − EEdukte) − (EKomplex − EProdukte) = EProdukte − EEdukte; die umgekehrte Reihenfolge kehrt das Vorzeichen von ΔH um.",
        "fr": "ΔH est la différence d'énergie entre produits et réactifs : Eai − Eag = (Ecomplexe − Eréactifs) − (Ecomplexe − Eproduits) = Eproduits − Eréactifs ; inverser l'ordre inverse le signe de ΔH.",
        "ru": "ΔH — разность энергий продуктов и реагентов: Ea(пр) − Ea(обр) = (Eкомплекса − Eреагентов) − (Eкомплекса − Eпродуктов) = Eпродуктов − Eреагентов; при обратном порядке знак ΔH меняется на противоположный.",
        "ar": "ΔH هي فرق الطاقة بين النواتج والمتفاعلات: Eai − Eag = (Eالمعقد − Eالمتفاعلات) − (Eالمعقد − Eالنواتج) = Eالنواتج − Eالمتفاعلات؛ وعكس الترتيب يقلب إشارة ΔH.",
        "zh": "ΔH 是生成物与反应物的能量差：Eai − Eag = (E络合物 − E反应物) − (E络合物 − E生成物) = E生成物 − E反应物；顺序颠倒会使 ΔH 的符号相反。",
        "ku": "ΔH cudahiya enerjiya hilberan û reaktantan e: Eai − Eag = (Ekompleks − Ereaktant) − (Ekompleks − Ehilber) = Ehilber − Ereaktant; heke rêz berevajî were girtin, nîşana ΔH xera dibe."
      }
    },
    {
      "id": "u16-f13",
      "fact": {
        "tr": "Donma, yoğuşma, kırağılaşma ve genel olarak gazların suda çözünmesi ekzotermiktir.",
        "en": "Freezing, condensation, deposition (gas → solid) and, in general, the dissolution of gases in water are exothermic.",
        "de": "Gefrieren, Kondensation, Resublimation (Gas → Feststoff) und im Allgemeinen das Lösen von Gasen in Wasser sind exotherm.",
        "fr": "La solidification, la liquéfaction, la condensation solide (gaz → solide) et, en général, la dissolution des gaz dans l'eau sont exothermiques.",
        "ru": "Замерзание, конденсация, десублимация (газ → твёрдое) и, как правило, растворение газов в воде экзотермичны.",
        "ar": "التجمد والتكاثف والترسب (تحول الغاز إلى صلب مباشرة) وذوبان الغازات في الماء بوجه عام عمليات طاردة للحرارة.",
        "zh": "凝固、液化、凝华（气 → 固）以及一般情况下气体溶于水都是放热过程。",
        "ku": "Cemidîn, şilebûn, desublîmebûn û bi giştî helbûna gazan di avê de ekzotermîk in."
      },
      "trap": {
        "tr": "Kırağılaşma olayında madde çevreden ısı alır.",
        "en": "During deposition (gas → solid), the substance absorbs heat from the surroundings.",
        "de": "Bei der Resublimation nimmt der Stoff Wärme aus der Umgebung auf.",
        "fr": "Lors de la condensation solide (gaz → solide), la substance absorbe de la chaleur du milieu extérieur.",
        "ru": "При десублимации вещество поглощает теплоту из окружающей среды.",
        "ar": "أثناء الترسب (تحول الغاز إلى صلب مباشرة) تمتص المادة حرارة من الوسط المحيط.",
        "zh": "凝华过程中物质从环境吸收热量。",
        "ku": "Di desublîmebûnê de made germê ji derdorê digire."
      },
      "whyTrapIsFalse": {
        "tr": "Kırağılaşmada gaz doğrudan katıya geçer ve tanecikler arası çekimler oluşurken enerji açığa çıkar; ısı alan olay bunun tersi olan süblimleşmedir.",
        "en": "In deposition a gas turns directly into a solid and energy is released as interparticle attractions form; the process that absorbs heat is the reverse one, sublimation.",
        "de": "Bei der Resublimation geht ein Gas direkt in einen Feststoff über, und beim Ausbilden der Anziehungskräfte zwischen den Teilchen wird Energie frei; Wärme aufnehmend ist der Umkehrvorgang, die Sublimation.",
        "fr": "Lors de la condensation solide, le gaz passe directement à l'état solide et de l'énergie est libérée quand les attractions entre particules s'établissent ; le processus qui absorbe de la chaleur est l'inverse, la sublimation.",
        "ru": "При десублимации газ сразу переходит в твёрдое состояние, и при возникновении притяжения между частицами выделяется энергия; теплоту поглощает обратный процесс — сублимация.",
        "ar": "في الترسب يتحول الغاز مباشرة إلى صلب وتنطلق طاقة عند تكوّن قوى التجاذب بين الجسيمات؛ أما العملية الماصة للحرارة فهي العملية العكسية، أي التسامي.",
        "zh": "凝华时气体直接变成固体，粒子间形成吸引作用时放出能量；吸热的是其逆过程升华。",
        "ku": "Di desublîmebûnê de gaz rasterast dibe hişk û dema kişandinên navbera perçeyan çêdibin enerjî derdikeve; bûyera ku germê digire berevajiya wê ye, ango sublîmebûn."
      }
    },
    {
      "id": "u16-f14",
      "fact": {
        "tr": "Erime, buharlaşma, süblimleşme ve gaz haldeki atomdan elektron koparma (iyonlaşma) endotermiktir.",
        "en": "Melting, evaporation, sublimation and removal of electrons from gaseous atoms (ionization) are endothermic.",
        "de": "Schmelzen, Verdampfen, Sublimation und Entzug von Elektronen aus gasförmigen Atomen (Ionisation) sind endotherm.",
        "fr": "La fusion, l'évaporation, la sublimation et l'élimination des électrons des atomes gazeux (ionisation) sont endothermiques.",
        "ru": "Плавление, испарение, сублимация и отрыв электрона от атома в газовой фазе (ионизация) — эндотермические процессы.",
        "ar": "الانصهار والتبخر والتسامي ونزع الإلكترون من الذرة في الحالة الغازية (التأين) عمليات ماصة للحرارة.",
        "zh": "熔化、汽化、升华以及使气态原子失去电子（电离）都是吸热过程。",
        "ku": "Helîn, buharbûn, sublîmebûn û jêkirina elektronê ji atoma di rewşa gaz de (îyonîzasyon) endotermîk in."
      },
      "trap": {
        "tr": "Gaz hâlindeki bir atomdan elektron koparılması (iyonlaşma) ekzotermik bir olaydır.",
        "en": "Removing an electron from a gaseous atom (ionization) is an exothermic process.",
        "de": "Das Entfernen eines Elektrons aus einem gasförmigen Atom (Ionisierung) ist ein exothermer Vorgang.",
        "fr": "L'arrachement d'un électron à un atome gazeux (ionisation) est un processus exothermique.",
        "ru": "Отрыв электрона от атома в газовой фазе (ионизация) — экзотермический процесс.",
        "ar": "نزع إلكترون من ذرة في الحالة الغازية (التأين) عملية طاردة للحرارة.",
        "zh": "使气态原子失去电子（电离）是放热过程。",
        "ku": "Jêkirina elektronekê ji atomeke di rewşa gaz de (îyonîzasyon) bûyereke ekzotermîk e."
      },
      "whyTrapIsFalse": {
        "tr": "Elektronu çekirdeğin çekiminden koparmak için dışarıdan enerji verilmelidir; bu yüzden iyonlaşma enerjisi pozitif bir değerdir ve olay endotermiktir.",
        "en": "Energy must be supplied to pull an electron away from the attraction of the nucleus; therefore ionization energy is a positive value and the process is endothermic.",
        "de": "Um ein Elektron der Anziehung des Kerns zu entreißen, muss Energie zugeführt werden; daher ist die Ionisierungsenergie positiv und der Vorgang endotherm.",
        "fr": "Il faut fournir de l'énergie pour arracher un électron à l'attraction du noyau ; l'énergie d'ionisation est donc positive et le processus endothermique.",
        "ru": "Чтобы оторвать электрон, преодолев притяжение ядра, нужно затратить энергию; поэтому энергия ионизации положительна, а процесс эндотермический.",
        "ar": "يلزم تزويد الذرة بطاقة من الخارج لانتزاع الإلكترون من جذب النواة؛ لذلك تكون طاقة التأين قيمة موجبة وتكون العملية ماصة للحرارة.",
        "zh": "要使电子摆脱原子核的吸引必须提供能量，因此电离能为正值，该过程是吸热的。",
        "ku": "Ji bo ku elektron ji kişandina navokê were qetandin divê ji derve enerjî were dayîn; ji ber vê yekê enerjiya îyonîzasyonê nirxeke erênî ye û bûyer endotermîk e."
      }
    },
    {
      "id": "u16-f15",
      "fact": {
        "tr": "Tepkimedeki girenlerin ya da ürünlerin fiziksel hâli değişirse tepkime entalpisi (ΔH) de değişir.",
        "en": "If the physical state of a reactant or a product changes, the reaction enthalpy (ΔH) also changes.",
        "de": "Ändert sich der Aggregatzustand eines Edukts oder eines Produkts, so ändert sich auch die Reaktionsenthalpie (ΔH).",
        "fr": "Si l'état physique d'un réactif ou d'un produit change, l'enthalpie de réaction (ΔH) change aussi.",
        "ru": "Если меняется агрегатное состояние реагентов или продуктов, меняется и энтальпия реакции (ΔH).",
        "ar": "إذا تغيرت الحالة الفيزيائية لإحدى المواد المتفاعلة أو الناتجة، يتغير أيضًا المحتوى الحراري للتفاعل (ΔH).",
        "zh": "反应物或生成物的物态发生变化时，反应焓变(ΔH)也随之改变。",
        "ku": "Heke rewşa fîzîkî ya reaktantan an hilberan biguhere, entalpiya reaksiyonê (ΔH) jî diguhere."
      },
      "trap": {
        "tr": "Suyun gaz veya sıvı halde oluşması tepkime entalpisini etkilemez.",
        "en": "The formation of water in gas or liquid state does not affect the reaction enthalpy.",
        "de": "Die Bildung von Wasser im gasförmigen oder flüssigen Zustand hat keinen Einfluss auf die Reaktionsenthalpie.",
        "fr": "La formation d’eau à l’état gazeux ou liquide n’affecte pas l’enthalpie de réaction.",
        "ru": "Образуется ли вода в газообразном или в жидком состоянии, на энтальпию реакции не влияет.",
        "ar": "لا يؤثر كون الماء الناتج غازًا أو سائلًا في المحتوى الحراري للتفاعل.",
        "zh": "生成气态水还是液态水，对反应焓变没有影响。",
        "ku": "Çêbûna avê di rewşa gaz an şile de bandorê li entalpiya reaksiyonê nake."
      },
      "whyTrapIsFalse": {
        "tr": "Gaz hâlindeki suyun entalpisi sıvı sudan büyüktür (fark buharlaşma ısısıdır); bu yüzden H2O(s) oluşan tepkimede H2O(g) oluşanınkinden daha fazla ısı açığa çıkar.",
        "en": "Gaseous water has a higher enthalpy than liquid water (the difference is the heat of vaporization); so a reaction forming H2O(l) releases more heat than one forming H2O(g).",
        "de": "Gasförmiges Wasser hat eine höhere Enthalpie als flüssiges (die Differenz ist die Verdampfungswärme); daher setzt eine Reaktion, die H2O(l) bildet, mehr Wärme frei als eine, die H2O(g) bildet.",
        "fr": "L'eau gazeuse a une enthalpie plus élevée que l'eau liquide (la différence est la chaleur de vaporisation) ; une réaction qui forme H2O(l) libère donc plus de chaleur qu'une réaction qui forme H2O(g).",
        "ru": "Энтальпия газообразной воды больше, чем жидкой (разница — теплота испарения); поэтому реакция с образованием H2O(ж) выделяет больше теплоты, чем с образованием H2O(г).",
        "ar": "المحتوى الحراري للماء الغازي أكبر من الماء السائل (الفرق هو حرارة التبخر)؛ لذلك يُطلق التفاعل الذي يكوّن H2O(l) حرارة أكثر من التفاعل الذي يكوّن H2O(g).",
        "zh": "气态水的焓高于液态水（差值为汽化热），所以生成 H2O(l) 的反应比生成 H2O(g) 的反应放出更多热量。",
        "ku": "Entalpiya ava di rewşa gaz de ji ya ava şile mezintir e (cudahî germa buharbûnê ye); ji ber vê yekê di reaksiyona ku H2O(l) çêdike de ji ya ku H2O(g) çêdike bêtir germ derdikeve."
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
        "ar": "في التفاعلات الطاردة للحرارة تكون الطاقة الكامنة (المحتوى الحراري) للنواتج أقل منها للمتفاعلات، لذا تكون النواتج أكثر استقرارًا من المتفاعلات.",
        "zh": "放热反应中生成物的势能（焓）低于反应物，因此生成物比反应物更稳定。",
        "ku": "Di reaksiyonên ekzotermîk de enerjiya potansiyel (entalpiya) hilberan ji ya reaktantan kêmtir e, loma hilber ji reaktantan stabîltir in."
      },
      "trap": {
        "tr": "Endotermik tepkimelerde ürünler girenlerden daha kararlıdır.",
        "en": "In endothermic reactions the products are more stable than the reactants.",
        "de": "Bei endothermen Reaktionen sind die Produkte stabiler als die Edukte.",
        "fr": "Dans les réactions endothermiques, les produits sont plus stables que les réactifs.",
        "ru": "В эндотермических реакциях продукты устойчивее реагентов.",
        "ar": "في التفاعلات الماصة للحرارة تكون النواتج أكثر استقرارًا من المتفاعلات.",
        "zh": "吸热反应中生成物比反应物更稳定。",
        "ku": "Di reaksiyonên endotermîk de hilber ji reaktantan stabîltir in."
      },
      "whyTrapIsFalse": {
        "tr": "Endotermik tepkimede ürünlerin potansiyel enerjisi girenlerinkinden yüksektir; enerjisi yüksek olan tür daha kararsız kabul edildiğinden bu tepkimelerde girenler daha kararlıdır.",
        "en": "In an endothermic reaction the products have higher potential energy than the reactants; since the higher-energy species is considered less stable, the reactants are the more stable ones here.",
        "de": "Bei einer endothermen Reaktion haben die Produkte eine höhere potentielle Energie als die Edukte; da die energiereichere Spezies als weniger stabil gilt, sind hier die Edukte stabiler.",
        "fr": "Dans une réaction endothermique, les produits ont une énergie potentielle plus élevée que les réactifs ; l'espèce la plus énergétique étant considérée comme la moins stable, ce sont ici les réactifs qui sont les plus stables.",
        "ru": "В эндотермической реакции потенциальная энергия продуктов выше, чем у реагентов; частицы с большей энергией считаются менее устойчивыми, поэтому в таких реакциях устойчивее реагенты.",
        "ar": "في التفاعل الماص للحرارة تكون الطاقة الكامنة للنواتج أعلى من المتفاعلات؛ وبما أن المادة ذات الطاقة الأعلى تُعد أقل استقرارًا فإن المتفاعلات هنا هي الأكثر استقرارًا.",
        "zh": "吸热反应中生成物的势能高于反应物；能量越高的物质越不稳定，所以这类反应中反应物更稳定。",
        "ku": "Di reaksiyona endotermîk de enerjiya potansiyel a hilberan ji ya reaktantan bilindtir e; ji ber ku cureya bi enerjiya bilindtir kêmtir stabîl tê qebûlkirin, di van reaksiyonan de reaktant stabîltir in."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u16-c01",
      "conceptA": {
        "tr": "Ekzotermik Tepkime (ΔH < 0)",
        "en": "Exothermic Reaction (ΔH < 0)",
        "de": "Exotherme Reaktion (ΔH < 0)",
        "fr": "Réaction exothermique (ΔH < 0)",
        "ru": "Экзотермическая реакция (ΔH < 0)",
        "ar": "التفاعل الطارد للحرارة (ΔH < 0)",
        "zh": "放热反应(ΔH < 0)",
        "ku": "Reaksiyona Ekzotermîk (ΔH < 0)"
      },
      "conceptB": {
        "tr": "Endotermik Tepkime (ΔH > 0)",
        "en": "Endothermic Reaction (ΔH > 0)",
        "de": "Endotherme Reaktion (ΔH > 0)",
        "fr": "Réaction endothermique (ΔH > 0)",
        "ru": "Эндотермическая реакция (ΔH > 0)",
        "ar": "التفاعل الماص للحرارة (ΔH > 0)",
        "zh": "吸热反应(ΔH > 0)",
        "ku": "Reaksiyona Endotermîk (ΔH > 0)"
      },
      "distinction": {
        "tr": "Ekzotermik tepkimede sistem ortama ısı verir ve ortamın sıcaklığı artar; endotermik tepkimede ise sistem ortamdan ısı alır ve ortamın sıcaklığı düşer.",
        "en": "In an exothermic reaction the system gives off heat and the temperature of the surroundings rises; in an endothermic reaction the system absorbs heat and the temperature of the surroundings falls.",
        "de": "Exotherme Reaktion: Das System gibt Wärme ab, und die Temperatur der Umgebung steigt; endotherme Reaktion: Das System nimmt Wärme auf, und die Temperatur der Umgebung sinkt.",
        "fr": "Réaction exothermique : le système cède de la chaleur et la température du milieu extérieur augmente ; réaction endothermique : le système absorbe de la chaleur et la température du milieu extérieur diminue.",
        "ru": "Экзотермическая реакция (ΔH < 0) идёт с выделением теплоты в окружающую среду, и температура среды повышается; эндотермическая реакция (ΔH > 0) идёт с поглощением теплоты из окружающей среды, и температура среды понижается.",
        "ar": "في التفاعل الطارد للحرارة يُطلق النظام حرارة فترتفع درجة حرارة الوسط المحيط؛ وفي التفاعل الماص للحرارة يمتص النظام حرارة فتنخفض درجة حرارة الوسط.",
        "zh": "放热反应(ΔH < 0)中体系向环境放出热量，环境温度升高；而吸热反应(ΔH > 0)中体系从环境吸收热量，环境温度降低。",
        "ku": "Di reaksiyona ekzotermîk de sîstem germê dide derdorê û germahiya derdorê bilind dibe; di reaksiyona endotermîk de sîstem germê ji derdorê digire û germahiya derdorê dadikeve."
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
        "ku": "Entalpiya Çêbûnê"
      },
      "conceptB": {
        "tr": "Bağ Enerjisi",
        "en": "Bond Energy",
        "de": "Bindungsenergie",
        "fr": "Énergie de liaison",
        "ru": "Энергия связи",
        "ar": "طاقة الرابطة",
        "zh": "键能",
        "ku": "Enerjiya Girêdanê"
      },
      "distinction": {
        "tr": "Oluşum entalpisi 1 mol bileşiğin elementlerinden oluşmasındaki entalpi değişimidir; bağ enerjisi gaz hâlindeki maddede 1 mol bağı kırmak için gereken enerjidir.",
        "en": "Enthalpy of formation is the enthalpy change when 1 mol of a compound forms from its elements; bond energy is the energy needed to break 1 mol of a bond in the gas phase.",
        "de": "Bildungsenthalpie: Enthalpieänderung bei der Bildung von 1 mol einer Verbindung aus ihren Elementen; Bindungsenergie: Energie, die nötig ist, um 1 mol einer Bindung in der Gasphase zu spalten.",
        "fr": "Enthalpie de formation : variation d'enthalpie lors de la formation de 1 mol d'un composé à partir de ses éléments ; énergie de liaison : énergie nécessaire pour rompre 1 mol d'une liaison en phase gazeuse.",
        "ru": "Энтальпия образования — изменение энтальпии при образовании 1 моль соединения из простых веществ; энергия связи — энергия, необходимая для разрыва 1 моль связей в веществе, находящемся в газообразном состоянии.",
        "ar": "المحتوى الحراري للتكوين هو التغير في المحتوى الحراري عند تكوّن 1 mol من المركب من عناصره؛ وطاقة الرابطة هي الطاقة اللازمة لكسر 1 mol من رابطة ما في الحالة الغازية.",
        "zh": "生成焓是由单质生成 1 mol 化合物时的焓变；键能是在气态下断开 1 mol 某种化学键所需的能量。",
        "ku": "Entalpiya çêbûnê guherîna entalpiyê ye dema ku 1 mol pêkhate ji elementên xwe çêdibe; enerjiya girêdanê ew enerjî ye ku ji bo şikandina 1 mol girêdanê di madeya di rewşa gaz de pêwîst e."
      }
    },
    {
      "id": "u16-c03",
      "conceptA": {
        "tr": "Standart Oluşum Entalpisi (ΔHf°)",
        "en": "Standard Enthalpy of Formation (ΔHf°)",
        "de": "Standardbildungsenthalpie (ΔHf°)",
        "fr": "Enthalpie standard de formation (ΔHf°)",
        "ru": "Стандартная энтальпия образования (ΔHf°)",
        "ar": "المحتوى الحراري القياسي للتكوين (ΔHf°)",
        "zh": "标准生成焓(ΔHf°)",
        "ku": "Entalpiya Çêbûnê ya Standard (ΔHf°)"
      },
      "conceptB": {
        "tr": "Tepkime Entalpisi (ΔH°)",
        "en": "Reaction Enthalpy (ΔH°)",
        "de": "Reaktionsenthalpie (ΔH°)",
        "fr": "Enthalpie de réaction (ΔH°)",
        "ru": "Энтальпия реакции (ΔH°)",
        "ar": "المحتوى الحراري للتفاعل (ΔH°)",
        "zh": "反应热(ΔH°)",
        "ku": "Entalpiya Reaksiyonê (ΔH°)"
      },
      "distinction": {
        "tr": "Standart oluşum entalpisi, 1 mol bileşiğin standart koşullarda elementlerinin en kararlı hâllerinden oluşmasındaki entalpi değişimidir; tepkime entalpisi ise ürünlerin toplam entalpisi ile girenlerin toplam entalpisi arasındaki farktır.",
        "en": "Standard enthalpy of formation is the enthalpy change when 1 mol of a compound forms from its elements in their most stable forms under standard conditions; reaction enthalpy is the difference between the total enthalpy of the products and that of the reactants.",
        "de": "Standardbildungsenthalpie: Enthalpieänderung bei der Bildung von 1 mol einer Verbindung aus ihren Elementen in deren stabilster Form unter Standardbedingungen; Reaktionsenthalpie: Differenz zwischen der Gesamtenthalpie der Produkte und der der Edukte.",
        "fr": "Enthalpie standard de formation : variation d'enthalpie lors de la formation de 1 mol d'un composé à partir de ses éléments pris dans leur état le plus stable, dans les conditions standard ; enthalpie de réaction : différence entre l'enthalpie totale des produits et celle des réactifs.",
        "ru": "Стандартная энтальпия образования (ΔHf°) — изменение энтальпии при образовании 1 моль соединения из простых веществ в их наиболее устойчивом состоянии при стандартных условиях; энтальпия реакции (ΔH°) — разность суммарной энтальпии продуктов и суммарной энтальпии реагентов.",
        "ar": "المحتوى الحراري القياسي للتكوين هو التغير في المحتوى الحراري عند تكوّن 1 mol من المركب من عناصره في أكثر حالاتها استقرارًا في الظروف القياسية؛ أما المحتوى الحراري للتفاعل فهو الفرق بين مجموع المحتوى الحراري للنواتج ومجموع المحتوى الحراري للمتفاعلات.",
        "zh": "标准生成焓(ΔHf°)是在标准状态下由最稳定状态的单质生成 1 mol 化合物时的焓变；而反应热(ΔH°)是生成物总焓与反应物总焓之差。",
        "ku": "Entalpiya çêbûnê ya standard guherîna entalpiyê ye dema ku 1 mol pêkhate di şertên standard de ji rewşên herî stabîl ên elementên xwe çêdibe; entalpiya reaksiyonê cudahiya navbera entalpiya giştî ya hilberan û entalpiya giştî ya reaktantan e."
      }
    },
    {
      "id": "u16-c04",
      "conceptA": {
        "tr": "İleri Aktifleşme Enerjisi (Eai)",
        "en": "Forward Activation Energy (Eai)",
        "de": "Aktivierungsenergie der Hinreaktion (Eai)",
        "fr": "Énergie d'activation directe (Eai)",
        "ru": "Энергия активации прямой реакции Ea(пр)",
        "ar": "طاقة تنشيط التفاعل الأمامي (Eai)",
        "zh": "正反应活化能(Eai)",
        "ku": "Enerjiya Aktîvasyonê ya Pêşve (Eai)"
      },
      "conceptB": {
        "tr": "Geri Aktifleşme Enerjisi (Eag)",
        "en": "Reverse Activation Energy (Eag)",
        "de": "Aktivierungsenergie der Rückreaktion (Eag)",
        "fr": "Énergie d'activation inverse (Eag)",
        "ru": "Энергия активации обратной реакции Ea(обр)",
        "ar": "طاقة تنشيط التفاعل العكسي (Eag)",
        "zh": "逆反应活化能(Eag)",
        "ku": "Enerjiya Aktîvasyonê ya Paşve (Eag)"
      },
      "distinction": {
        "tr": "İleri aktifleşme enerjisi, girenlerin aktifleşmiş komplekse ulaşmak için aşması gereken enerji engelidir; geri aktifleşme enerjisi ise ürünlerin aktifleşmiş komplekse ulaşması için gereken enerjidir. Tepkime entalpisi, ilkinden ikincisi çıkarılarak bulunur.",
        "en": "Forward activation energy is the energy barrier the reactants must overcome to reach the activated complex; reverse activation energy is the energy the products need to reach the activated complex. The reaction enthalpy is the former minus the latter.",
        "de": "Aktivierungsenergie der Hinreaktion: Energiebarriere, die die Edukte bis zum aktivierten Komplex überwinden müssen; für die Rückreaktion ist die entsprechende Größe die Energie, die die Produkte bis zum aktivierten Komplex benötigen. Die Reaktionsenthalpie ist die erste minus die zweite Größe.",
        "fr": "Énergie d'activation directe : barrière d'énergie que les réactifs doivent franchir pour atteindre le complexe activé ; énergie d'activation inverse : énergie nécessaire aux produits pour atteindre le complexe activé. L'enthalpie de réaction est la première moins la seconde.",
        "ru": "Энергия активации прямой реакции Ea(пр) — энергетический барьер, который должны преодолеть реагенты, чтобы образовать активированный комплекс; энергия активации обратной реакции Ea(обр) — энергия, необходимая продуктам, чтобы образовать активированный комплекс. Энтальпия реакции равна разности первой и второй величин.",
        "ar": "طاقة تنشيط التفاعل الأمامي: حاجز الطاقة الذي يجب أن تتجاوزه المتفاعلات للوصول إلى المعقد المنشط؛ طاقة تنشيط التفاعل العكسي: الطاقة التي تحتاجها النواتج للوصول إلى المعقد المنشط. والمحتوى الحراري للتفاعل يساوي الأولى مطروحًا منها الثانية.",
        "zh": "正反应活化能(Eai)是反应物到达活化络合物必须越过的能垒；而逆反应活化能(Eag)是生成物到达活化络合物所需越过的能垒。反应焓变等于前者减去后者。",
        "ku": "Enerjiya aktîvasyonê ya pêşve ew astenga enerjiyê ye ku divê reaktant derbas bikin da ku bigihîjin kompleksa aktîvkirî; enerjiya aktîvasyonê ya paşve ew enerjî ye ku hilber jê re hewce ne da ku bigihîjin kompleksa aktîvkirî. Entalpiya reaksiyonê bi derxistina ya duyem ji ya yekem tê dîtin."
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
        "ku": "Derdor"
      },
      "distinction": {
        "tr": "Sistem, üzerinde inceleme yapılan madde ya da tepkime karışımıdır; ortam (çevre) ise bunun dışında kalan ve onunla ısı ya da iş şeklinde enerji alışverişi yapabilen her şeydir.",
        "en": "The system is the substance or reaction mixture being studied; the surroundings are everything outside the system that exchanges energy with it as heat or work.",
        "de": "System: der untersuchte Stoff bzw. das Reaktionsgemisch; Umgebung: alles außerhalb davon, das mit ihm Energie in Form von Wärme oder Arbeit austauscht.",
        "fr": "Système : la substance ou le mélange réactionnel étudié ; milieu extérieur : tout ce qui se trouve en dehors et échange de l'énergie avec lui sous forme de chaleur ou de travail.",
        "ru": "Система — изучаемое вещество или реакционная смесь; окружающая среда — всё, что находится вне системы и может обмениваться с ней энергией в виде теплоты или работы.",
        "ar": "النظام هو المادة أو خليط التفاعل قيد الدراسة؛ أما الوسط المحيط فهو كل ما يقع خارج النظام ويتبادل معه الطاقة على شكل حرارة أو شغل.",
        "zh": "体系是所研究的物质或反应混合物；而环境是体系以外、能以热或功的形式与体系交换能量的一切部分。",
        "ku": "Sîstem ew made an tevliheviya reaksiyonê ye ku li ser tê lêkolîn; derdor jî her tiştê li derveyî wê ye ku dikare bi wê re bi rêya germ an kar enerjiyê biguherîne."
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
        "ku": "Şikestina Girêdanê"
      },
      "conceptB": {
        "tr": "Bağ Oluşumu",
        "en": "Bond Formation",
        "de": "Bindungsbildung",
        "fr": "Formation de liaison",
        "ru": "Образование связи",
        "ar": "تكوين الرابطة",
        "zh": "化学键形成",
        "ku": "Çêbûna Girêdanê"
      },
      "distinction": {
        "tr": "Bağ kırılması, atomlar arasındaki çekimi yenmek için enerji gerektirdiğinden daima endotermiktir; bağ oluşumu ise atomlar arasında çekim kurulurken enerji açığa çıktığından daima ekzotermiktir.",
        "en": "Bond breaking always requires energy to overcome the attraction between atoms, so it is always endothermic; bond formation, by contrast, releases energy as the attraction between atoms is established, so it is always exothermic.",
        "de": "Bindungsbruch erfordert stets Energie, um die Anziehung zwischen den Atomen zu überwinden, und ist daher immer endotherm; Bindungsbildung setzt dagegen Energie frei, wenn sich die Anziehung zwischen den Atomen ausbildet, und ist daher immer exotherm.",
        "fr": "La rupture de liaison exige toujours de l'énergie pour vaincre l'attraction entre les atomes : elle est donc toujours endothermique ; la formation de liaison, elle, libère de l'énergie lorsque l'attraction entre les atomes s'établit : elle est donc toujours exothermique.",
        "ru": "Разрыв связи всегда требует энергии для преодоления притяжения между атомами, поэтому он всегда эндотермичен; образование связи, напротив, сопровождается выделением энергии при возникновении притяжения между атомами, поэтому оно всегда экзотермично.",
        "ar": "كسر الرابطة يتطلب دائمًا طاقة للتغلب على التجاذب بين الذرات، ولذلك يكون دائمًا ماصًّا للحرارة؛ أما تكوين الرابطة فتنطلق فيه طاقة عند نشوء التجاذب بين الذرات، ولذلك يكون دائمًا طاردًا للحرارة.",
        "zh": "化学键断裂需要吸收能量来克服原子间的吸引，因此总是吸热的；而化学键形成时原子间建立起吸引、放出能量，因此总是放热的。",
        "ku": "Şikestina girêdanê ji bo derbaskirina kişandina navbera atoman her tim enerjiyê dixwaze, ji ber vê her tim endotermîk e; çêbûna girêdanê jî dema ku kişandina navbera atoman pêk tê enerjiyê derdixe, ji ber vê her tim ekzotermîk e."
      }
    },
    {
      "id": "u16-c07",
      "conceptA": {
        "tr": "Hess Yasası",
        "en": "Hess's Law",
        "de": "Satz von Hess",
        "fr": "La loi de Hess",
        "ru": "Закон Гесса",
        "ar": "قانون هس",
        "zh": "盖斯定律",
        "ku": "Zagona Hess"
      },
      "conceptB": {
        "tr": "Termodinamik 1. Yasa",
        "en": "1st Law of Thermodynamics",
        "de": "1. Hauptsatz der Thermodynamik",
        "fr": "1ère loi de la thermodynamique",
        "ru": "Первый закон термодинамики",
        "ar": "القانون الأول للديناميكا الحرارية",
        "zh": "热力学第一定律",
        "ku": "Zagona Yekem a Termodînamîkê"
      },
      "distinction": {
        "tr": "Hess yasası, tepkime entalpisinin izlenen yoldan bağımsız olduğunu belirtir; termodinamiğin 1. yasası ise enerjinin yoktan var edilemeyeceğini ve vardan yok edilemeyeceğini ifade eder.",
        "en": "Hess's law states that the reaction enthalpy is independent of the path followed; the first law of thermodynamics, by contrast, states that energy can be neither created nor destroyed.",
        "de": "Der Satz von Hess besagt, dass die Reaktionsenthalpie unabhängig vom eingeschlagenen Weg ist; der 1. Hauptsatz der Thermodynamik besagt dagegen, dass Energie weder erzeugt noch vernichtet werden kann.",
        "fr": "La loi de Hess énonce que l'enthalpie de réaction ne dépend pas du chemin suivi ; la première loi de la thermodynamique énonce, elle, que l'énergie ne peut être ni créée ni détruite.",
        "ru": "Закон Гесса утверждает, что энтальпия реакции не зависит от пути её протекания; первый закон термодинамики, напротив, утверждает, что энергия не возникает из ничего и не исчезает бесследно.",
        "ar": "ينص قانون هس على أن المحتوى الحراري للتفاعل مستقل عن المسار المتبع؛ أما القانون الأول للديناميكا الحرارية فينص على أن الطاقة لا تُستحدث ولا تفنى.",
        "zh": "盖斯定律指出，反应焓变与反应途径无关；而热力学第一定律指出，能量既不能凭空产生，也不能凭空消失。",
        "ku": "Zagona Hess dibêje ku entalpiya reaksiyonê bi riya ku tê şopandin ve ne girêdayî ye; zagona yekem a termodînamîkê jî dibêje ku enerjî ji tunebûnê nayê afirandin û nayê tunekirin."
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
        "ar": "المعقد المنشط",
        "zh": "活化络合物",
        "ku": "Kompleksa Aktîvkirî"
      },
      "conceptB": {
        "tr": "Kararlı Ürün",
        "en": "Stable Product",
        "de": "Stabiles Produkt",
        "fr": "Produit stable",
        "ru": "Устойчивый продукт",
        "ar": "الناتج المستقر",
        "zh": "稳定的生成物",
        "ku": "Hilbera Stabîl"
      },
      "distinction": {
        "tr": "Aktifleşmiş kompleks, potansiyel enerji grafiğinin tepe noktasındaki anlık, kararsız ve yalıtılamayan yapıdır; kararlı ürün ise grafiğin çukurunda bulunan, yalıtılabilen maddedir.",
        "en": "The activated complex is the momentary, unstable structure at the peak of the potential energy diagram and cannot be isolated; a stable product, by contrast, lies in an energy valley of the diagram and can be isolated.",
        "de": "Der aktivierte Komplex ist die kurzlebige, instabile und nicht isolierbare Struktur am Gipfel des Energiediagramms; ein stabiles Produkt liegt dagegen in einer Energiesenke des Diagramms und ist isolierbar.",
        "fr": "Le complexe activé est la structure instantanée, instable et non isolable située au sommet du diagramme d'énergie potentielle ; un produit stable, lui, se trouve dans un creux du diagramme et peut être isolé.",
        "ru": "Активированный комплекс — мгновенно существующая неустойчивая структура на вершине диаграммы потенциальной энергии, которую нельзя выделить; устойчивый продукт же находится в энергетической впадине диаграммы и может быть выделен.",
        "ar": "المعقد المنشط بنية لحظية غير مستقرة لا يمكن عزلها توجد عند قمة مخطط الطاقة الكامنة؛ أما الناتج المستقر فيوجد في قاع المخطط ويمكن عزله.",
        "zh": "活化络合物是势能图顶点处瞬间存在、不稳定且无法分离的结构；而稳定的生成物位于势能图的低谷处，可以分离出来。",
        "ku": "Kompleksa aktîvkirî avahiyeke demkî, nestabîl û neveqetandinbar e ku li lûtkeya grafîka enerjiya potansiyel e; hilbera stabîl jî di çala grafîkê de ye û dikare were veqetandin."
      }
    }
  ],
  "sequences": [
    {
      "id": "u16-s01",
      "title": {
        "tr": "Hess yasasının uygulanması",
        "en": "Applying Hess's law",
        "de": "Anwendung des Satzes von Hess",
        "fr": "Application de la loi de Hess",
        "ru": "Применение закона Гесса",
        "ar": "تطبيق قانون هس",
        "zh": "盖斯定律的应用",
        "ku": "Sepandina zagona Hess"
      },
      "steps": [
        {
          "tr": "Hedef tepkime yazılır ve verilen ara tepkimelerle karşılaştırılır",
          "en": "The target reaction is written and compared with the given intermediate reactions",
          "de": "Die Zielreaktion wird aufgeschrieben und mit den gegebenen Teilreaktionen verglichen",
          "fr": "On écrit la réaction cible et on la compare aux réactions intermédiaires données",
          "ru": "Записывают целевую реакцию и сравнивают её с данными промежуточными реакциями",
          "ar": "يُكتب التفاعل الهدف ويُقارن بالتفاعلات الوسيطة المعطاة",
          "zh": "写出目标反应，并与所给的各步反应进行比较",
          "ku": "Reaksiyona armanc tê nivîsandin û bi reaksiyonên navber ên hatine dayîn re tê berhevdan"
        },
        {
          "tr": "Ara tepkimeler, hedefteki giren ve ürünlere uyacak biçimde ters çevrilir veya uygun katsayıyla çarpılır",
          "en": "The intermediate reactions are reversed or multiplied by suitable coefficients so that they match the reactants and products of the target",
          "de": "Die Teilreaktionen werden umgekehrt oder mit passenden Koeffizienten multipliziert, sodass sie zu den Edukten und Produkten der Zielreaktion passen",
          "fr": "On inverse les réactions intermédiaires ou on les multiplie par des coefficients adaptés pour qu'elles correspondent aux réactifs et aux produits de la réaction cible",
          "ru": "Промежуточные реакции записывают в обратном направлении или умножают на подходящие коэффициенты так, чтобы они соответствовали реагентам и продуктам целевой реакции",
          "ar": "تُعكس التفاعلات الوسيطة أو تُضرب في معاملات مناسبة لتوافق متفاعلات ونواتج التفاعل الهدف",
          "zh": "根据目标反应的反应物和生成物，将各步反应逆写或乘以适当的系数",
          "ku": "Reaksiyonên navber li gorî reaktant û hilberên reaksiyona armanc berevajî tên nivîsandin an bi hevbereke guncav tên pirkirin"
        },
        {
          "tr": "Ters çevrilen tepkimelerin ΔH işareti değiştirilir, katsayıyla çarpılanların ΔH değeri aynı katsayıyla çarpılır",
          "en": "The sign of ΔH is changed for each reversed reaction, and ΔH is multiplied by the same coefficient for each multiplied reaction",
          "de": "Bei umgekehrten Reaktionen wird das Vorzeichen von ΔH geändert, bei multiplizierten Reaktionen wird ΔH mit demselben Koeffizienten multipliziert",
          "fr": "On change le signe de ΔH des réactions inversées et on multiplie ΔH par le même coefficient pour les réactions multipliées",
          "ru": "У реакций, записанных в обратном направлении, меняют знак ΔH, а у умноженных на коэффициент ΔH умножают на тот же коэффициент",
          "ar": "تُغيَّر إشارة ΔH للتفاعلات المعكوسة، وتُضرب ΔH في المعامل نفسه للتفاعلات المضروبة",
          "zh": "逆写的反应 ΔH 变号，乘以系数的反应 ΔH 乘以相同的系数",
          "ku": "Nîşana ΔH ya reaksiyonên berevajîkirî tê guhertin; nirxa ΔH ya reaksiyonên bi hevberekê pirkirî jî bi heman hevberê tê pirkirin"
        },
        {
          "tr": "Düzenlenen tepkimeler ve ΔH değerleri taraf tarafa toplanarak hedef tepkimenin ΔH'si bulunur",
          "en": "The adjusted reactions and their ΔH values are added to obtain ΔH of the target reaction",
          "de": "Die angepassten Reaktionen und ihre ΔH-Werte werden addiert, um ΔH der Zielreaktion zu erhalten",
          "fr": "On additionne les réactions ainsi modifiées et leurs ΔH pour obtenir le ΔH de la réaction cible",
          "ru": "Преобразованные уравнения и их значения ΔH почленно складывают и получают ΔH целевой реакции",
          "ar": "تُجمع التفاعلات المعدَّلة وقيم ΔH الخاصة بها للحصول على ΔH للتفاعل الهدف",
          "zh": "将调整后的各步反应及其 ΔH 相加，得到目标反应的 ΔH",
          "ku": "Reaksiyonên sererastkirî û nirxên wan ên ΔH alî bi alî tên berhevkirin û ΔH ya reaksiyona armanc tê dîtin"
        }
      ]
    },
    {
      "id": "u16-s02",
      "title": {
        "tr": "Bağ Enerjilerinden ΔH Bulma",
        "en": "Finding ΔH from Bond Energies",
        "de": "ΔH aus Bindungsenergien ermitteln",
        "fr": "Calcul de ΔH à partir des énergies de liaison",
        "ru": "Нахождение ΔH по энергиям связей",
        "ar": "إيجاد ΔH من طاقات الروابط",
        "zh": "由键能求 ΔH",
        "ku": "Dîtina ΔH ji Enerjiyên Girêdanê"
      },
      "steps": [
        {
          "tr": "Girenlerin ve ürünlerin açık yapı formülleri yazılarak bağ türleri ve sayıları belirlenir",
          "en": "The structural formulas of the reactants and products are drawn to identify the types and numbers of bonds",
          "de": "Die Strukturformeln der Edukte und Produkte werden gezeichnet, um Art und Anzahl der Bindungen zu bestimmen",
          "fr": "On écrit les formules développées des réactifs et des produits pour déterminer la nature et le nombre des liaisons",
          "ru": "Записывают развёрнутые структурные формулы реагентов и продуктов и определяют виды и число связей",
          "ar": "تُكتب الصيغ البنائية للمتفاعلات والنواتج لتحديد أنواع الروابط وأعدادها",
          "zh": "写出反应物和生成物的结构式，确定化学键的种类和数目",
          "ku": "Formulên avahiyê yên vekirî yên reaktant û hilberan tên nivîsandin û cure û hejmara girêdanan tê diyarkirin"
        },
        {
          "tr": "Girenlerde kırılan bağların enerjileri ile ürünlerde oluşan bağların enerjileri ayrı ayrı toplanır",
          "en": "The energies of the bonds broken in the reactants and of the bonds formed in the products are summed separately",
          "de": "Die Energien der in den Edukten gespaltenen und der in den Produkten gebildeten Bindungen werden getrennt addiert",
          "fr": "On additionne séparément les énergies des liaisons rompues dans les réactifs et celles des liaisons formées dans les produits",
          "ru": "Отдельно суммируют энергии связей, разрываемых в реагентах, и связей, образующихся в продуктах",
          "ar": "تُجمع على حدة طاقات الروابط المكسورة في المتفاعلات وطاقات الروابط المتكونة في النواتج",
          "zh": "分别求出反应物中断裂的化学键和生成物中形成的化学键的键能总和",
          "ku": "Enerjiyên girêdanên ku di reaktantan de dişkên û yên ku di hilberan de çêdibin ji hev cuda tên berhevkirin"
        },
        {
          "tr": "Kırılan bağların toplam enerjisinden oluşan bağların toplam enerjisi çıkarılarak ΔH bulunur",
          "en": "ΔH is found by subtracting the total energy of the bonds formed from the total energy of the bonds broken",
          "de": "ΔH ergibt sich, indem die Gesamtenergie der gebildeten Bindungen von der Gesamtenergie der gebrochenen Bindungen abgezogen wird",
          "fr": "On obtient ΔH en soustrayant l'énergie totale des liaisons formées de l'énergie totale des liaisons rompues",
          "ru": "ΔH находят, вычитая суммарную энергию образующихся связей из суммарной энергии разрываемых связей",
          "ar": "تُحسب ΔH بطرح مجموع طاقات الروابط المتكونة من مجموع طاقات الروابط المكسورة",
          "zh": "用断裂化学键的总键能减去形成化学键的总键能，得到 ΔH",
          "ku": "Enerjiya giştî ya girêdanên çêbûyî ji enerjiya giştî ya girêdanên şikestî tê derxistin û ΔH tê dîtin"
        },
        {
          "tr": "ΔH'nin işaretine bakılarak tepkimenin ekzotermik mi endotermik mi olduğuna karar verilir",
          "en": "The sign of ΔH is used to decide whether the reaction is exothermic or endothermic",
          "de": "Anhand des Vorzeichens von ΔH wird entschieden, ob die Reaktion exotherm oder endotherm ist",
          "fr": "Le signe de ΔH permet de décider si la réaction est exothermique ou endothermique",
          "ru": "По знаку ΔH определяют, экзотермическая это реакция или эндотермическая",
          "ar": "يُحدَّد من إشارة ΔH ما إذا كان التفاعل طاردًا للحرارة أم ماصًّا لها",
          "zh": "根据 ΔH 的正负判断反应是放热反应还是吸热反应",
          "ku": "Li gorî nîşana ΔH tê biryardan ka reaksiyon ekzotermîk e an endotermîk e"
        }
      ]
    },
    {
      "id": "u16-s03",
      "title": {
        "tr": "Oluşum Entalpilerinden ΔH Bulma",
        "en": "Finding ΔH from Formation Enthalpies",
        "de": "ΔH aus Bildungsenthalpien ermitteln",
        "fr": "Calcul de ΔH à partir des enthalpies de formation",
        "ru": "Нахождение ΔH по энтальпиям образования",
        "ar": "إيجاد ΔH من المحتوى الحراري للتكوين",
        "zh": "由生成焓求 ΔH",
        "ku": "Dîtina ΔH ji Entalpiyên Çêbûnê"
      },
      "steps": [
        {
          "tr": "Tepkimedeki her maddenin standart oluşum entalpisi (ΔHf°) belirlenir; en kararlı hâlindeki elementler için sıfır alınır",
          "en": "The standard enthalpy of formation (ΔHf°) of each substance in the reaction is identified; zero is used for elements in their most stable form",
          "de": "Für jeden Stoff der Reaktion wird die Standardbildungsenthalpie (ΔHf°) ermittelt; für Elemente in ihrer stabilsten Form wird null eingesetzt",
          "fr": "On relève l'enthalpie standard de formation (ΔHf°) de chaque substance de la réaction ; on prend zéro pour les éléments dans leur état le plus stable",
          "ru": "Для каждого вещества реакции определяют стандартную энтальпию образования (ΔHf°); для простых веществ в наиболее устойчивом состоянии берут ноль",
          "ar": "يُحدَّد المحتوى الحراري القياسي للتكوين (ΔHf°) لكل مادة في التفاعل؛ ويؤخذ صفرًا للعناصر في أكثر حالاتها استقرارًا",
          "zh": "确定反应中每种物质的标准生成焓(ΔHf°)；最稳定状态的单质取零",
          "ku": "Entalpiya çêbûnê ya standard (ΔHf°) ya her madeya di reaksiyonê de tê diyarkirin; ji bo elementên di rewşa xwe ya herî stabîl de sifir tê girtin"
        },
        {
          "tr": "Her ΔHf° değeri, ilgili maddenin denklemdeki katsayısıyla çarpılır",
          "en": "Each ΔHf° value is multiplied by the coefficient of that substance in the equation",
          "de": "Jeder ΔHf°-Wert wird mit dem Koeffizienten des betreffenden Stoffes in der Gleichung multipliziert",
          "fr": "On multiplie chaque ΔHf° par le coefficient de la substance correspondante dans l'équation",
          "ru": "Каждое значение ΔHf° умножают на коэффициент соответствующего вещества в уравнении",
          "ar": "تُضرب كل قيمة ΔHf° في معامل المادة المقابلة في المعادلة",
          "zh": "把每个 ΔHf° 乘以该物质在方程式中的系数",
          "ku": "Her nirxa ΔHf° bi hevberê madeya têkildar a di hevkêşeyê de tê pirkirin"
        },
        {
          "tr": "Ürünlere ait çarpımlar kendi aralarında, girenlere ait çarpımlar kendi aralarında toplanır",
          "en": "The resulting values are added up separately for the products and for the reactants",
          "de": "Die so erhaltenen Werte werden für die Produkte und für die Edukte getrennt addiert",
          "fr": "On additionne séparément les valeurs obtenues pour les produits et pour les réactifs",
          "ru": "Полученные значения складывают отдельно для продуктов и отдельно для реагентов",
          "ar": "تُجمع القيم الناتجة للنواتج على حدة وللمتفاعلات على حدة",
          "zh": "把所得数值按生成物和反应物分别相加",
          "ku": "Encamên pirkirinê yên hilberan bi hev re û yên reaktantan bi hev re tên berhevkirin"
        },
        {
          "tr": "Ürünlerin toplamından girenlerin toplamı çıkarılarak ΔH bulunur",
          "en": "ΔH is found by subtracting the total for the reactants from the total for the products",
          "de": "ΔH ergibt sich, indem die Summe der Edukte von der Summe der Produkte abgezogen wird",
          "fr": "On obtient ΔH en soustrayant le total des réactifs du total des produits",
          "ru": "ΔH находят, вычитая сумму для реагентов из суммы для продуктов",
          "ar": "تُحسب ΔH بطرح مجموع المتفاعلات من مجموع النواتج",
          "zh": "用生成物的总和减去反应物的总和，得到 ΔH",
          "ku": "Koma reaktantan ji koma hilberan tê derxistin û ΔH tê dîtin"
        }
      ]
    },
    {
      "id": "u16-s04",
      "title": {
        "tr": "Tek basamaklı bir tepkimenin ilerleyişi",
        "en": "Progress of a single-step reaction",
        "de": "Ablauf einer einstufigen Reaktion",
        "fr": "Déroulement d'une réaction en une étape",
        "ru": "Протекание одностадийной реакции",
        "ar": "سير تفاعل أحادي الخطوة",
        "zh": "一步反应的进程",
        "ku": "Pêşveçûna reaksiyoneke yek-gavî"
      },
      "steps": [
        {
          "tr": "Girenlerin tanecikleri yeterli enerjiyle ve uygun yönelimle çarpışır",
          "en": "Reactant particles collide with sufficient energy and proper orientation",
          "de": "Die Eduktteilchen stoßen mit ausreichender Energie und geeigneter Orientierung zusammen",
          "fr": "Les particules de réactifs se heurtent avec une énergie suffisante et une orientation favorable",
          "ru": "Частицы реагентов сталкиваются с достаточной энергией и при подходящей ориентации",
          "ar": "تتصادم جسيمات المتفاعلات بطاقة كافية وباتجاه مناسب",
          "zh": "反应物粒子以足够的能量和合适的取向发生碰撞",
          "ku": "Perçeyên reaktantan bi enerjiya têra xwe û bi arasteya guncav li hev dikevin"
        },
        {
          "tr": "Potansiyel enerji yükselerek tepe noktasında aktifleşmiş kompleks oluşur",
          "en": "The potential energy rises and the activated complex forms at the peak",
          "de": "Die potentielle Energie steigt, und am Gipfel bildet sich der aktivierte Komplex",
          "fr": "L'énergie potentielle augmente et le complexe activé se forme au sommet",
          "ru": "Потенциальная энергия растёт, и на вершине образуется активированный комплекс",
          "ar": "ترتفع الطاقة الكامنة ويتكوّن المعقد المنشط عند القمة",
          "zh": "势能升高，在峰顶形成活化络合物",
          "ku": "Enerjiya potansiyel bilind dibe û li lûtkeyê kompleksa aktîvkirî çêdibe"
        },
        {
          "tr": "Aktifleşmiş kompleks dağılır; yeni bağlar tamamlanırken potansiyel enerji düşer",
          "en": "The activated complex breaks apart; the potential energy falls as the new bonds are completed",
          "de": "Der aktivierte Komplex zerfällt; während sich die neuen Bindungen vollständig ausbilden, sinkt die potentielle Energie",
          "fr": "Le complexe activé se dissocie ; l'énergie potentielle diminue à mesure que les nouvelles liaisons s'achèvent",
          "ru": "Активированный комплекс распадается; по мере завершения образования новых связей потенциальная энергия снижается",
          "ar": "يتفكك المعقد المنشط، وتنخفض الطاقة الكامنة مع اكتمال تكوّن الروابط الجديدة",
          "zh": "活化络合物分解，新键逐渐形成，势能下降",
          "ku": "Kompleksa aktîvkirî ji hev dikeve; dema girêdanên nû temam dibin enerjiya potansiyel dadikeve"
        },
        {
          "tr": "Ürünler oluşur; ürünlerin potansiyel enerjisi girenlerinkinden düşükse aradaki fark ısı olarak açığa çıkar",
          "en": "The products form; if their potential energy is lower than that of the reactants, the difference is released as heat",
          "de": "Die Produkte entstehen; ist ihre potentielle Energie niedriger als die der Edukte, wird die Differenz als Wärme frei",
          "fr": "Les produits se forment ; si leur énergie potentielle est inférieure à celle des réactifs, la différence est libérée sous forme de chaleur",
          "ru": "Образуются продукты; если их потенциальная энергия ниже, чем у реагентов, разность выделяется в виде теплоты",
          "ar": "تتكوّن النواتج؛ وإذا كانت طاقتها الكامنة أقل من طاقة المتفاعلات ينطلق الفرق على شكل حرارة",
          "zh": "生成物形成；若生成物的势能低于反应物，差值以热的形式放出",
          "ku": "Hilber çêdibin; heke enerjiya potansiyel a wan ji ya reaktantan nizmtir be, cudahî wek germ derdikeve"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u16-twin01",
      "stem": {
        "tr": "Tabloda bazı bağların ortalama bağ enerjileri verilmiştir. H2(g) + Cl2(g) → 2HCl(g) tepkimesinde 1 mol HCl(g) oluşurken gerçekleşen ısı alışverişi aşağıdakilerden hangisidir?",
        "en": "The table gives the average bond energies of some bonds. Which of the following describes the heat exchanged when 1 mol of HCl(g) forms in the reaction H2(g) + Cl2(g) → 2HCl(g)?",
        "de": "Die Tabelle gibt die mittleren Bindungsenergien einiger Bindungen an. Welcher Wärmeaustausch findet statt, wenn bei der Reaktion H2(g) + Cl2(g) → 2HCl(g) 1 mol HCl(g) entsteht?",
        "fr": "Le tableau donne les énergies moyennes de quelques liaisons. Quel échange de chaleur accompagne la formation de 1 mol de HCl(g) dans la réaction H2(g) + Cl2(g) → 2HCl(g) ?",
        "ru": "В таблице приведены средние энергии некоторых связей. Какой тепловой эффект сопровождает образование 1 моль HCl(г) в реакции H2(г) + Cl2(г) → 2HCl(г)?",
        "ar": "يبيّن الجدول متوسطات طاقات بعض الروابط. ما التبادل الحراري المصاحب لتكوّن 1 mol من HCl(g) في التفاعل H2(g) + Cl2(g) → 2HCl(g)؟",
        "zh": "表中给出了一些化学键的平均键能。在反应 H2(g) + Cl2(g) → 2HCl(g) 中生成 1 mol HCl(g) 时的热量变化是下列哪一项？",
        "ku": "Di tabloyê de enerjiyên girêdanê yên navînî yên hin girêdanan hatine dayîn. Di reaksiyona H2(g) + Cl2(g) → 2HCl(g) de dema 1 mol HCl(g) çêdibe, guherandina germê ya ku pêk tê kîjan e?"
      },
      "options": [
        {
          "tr": "91,5 kJ ısı açığa çıkar",
          "en": "91.5 kJ of heat is released",
          "de": "Es werden 91,5 kJ Wärme frei",
          "fr": "91,5 kJ de chaleur sont libérés",
          "ru": "Выделяется 91,5 кДж теплоты",
          "ar": "تنطلق 91.5 kJ من الحرارة",
          "zh": "放出 91.5 kJ 热量",
          "ku": "91,5 kJ germ derdikeve"
        },
        {
          "tr": "183 kJ ısı açığa çıkar",
          "en": "183 kJ of heat is released",
          "de": "Es werden 183 kJ Wärme frei",
          "fr": "183 kJ de chaleur sont libérés",
          "ru": "Выделяется 183 кДж теплоты",
          "ar": "تنطلق 183 kJ من الحرارة",
          "zh": "放出 183 kJ 热量",
          "ku": "183 kJ germ derdikeve"
        },
        {
          "tr": "91,5 kJ ısı alınır",
          "en": "91.5 kJ of heat is absorbed",
          "de": "Es werden 91,5 kJ Wärme aufgenommen",
          "fr": "91,5 kJ de chaleur sont absorbés",
          "ru": "Поглощается 91,5 кДж теплоты",
          "ar": "تُمتص 91.5 kJ من الحرارة",
          "zh": "吸收 91.5 kJ 热量",
          "ku": "91,5 kJ germ tê girtin"
        },
        {
          "tr": "248 kJ ısı alınır",
          "en": "248 kJ of heat is absorbed",
          "de": "Es werden 248 kJ Wärme aufgenommen",
          "fr": "248 kJ de chaleur sont absorbés",
          "ru": "Поглощается 248 кДж теплоты",
          "ar": "تُمتص 248 kJ من الحرارة",
          "zh": "吸收 248 kJ 热量",
          "ku": "248 kJ germ tê girtin"
        },
        {
          "tr": "183 kJ ısı alınır",
          "en": "183 kJ of heat is absorbed",
          "de": "Es werden 183 kJ Wärme aufgenommen",
          "fr": "183 kJ de chaleur sont absorbés",
          "ru": "Поглощается 183 кДж теплоты",
          "ar": "تُمتص 183 kJ من الحرارة",
          "zh": "吸收 183 kJ 热量",
          "ku": "183 kJ germ tê girtin"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Tablodan tepkimede yer alan bağlar seçilir (Br–Br bu tepkimede yoktur). Kırılan bağlar: 1 H–H + 1 Cl–Cl = 436 + 243 = 679 kJ. Oluşan bağlar: 2 H–Cl = 2 × 431 = 862 kJ. ΔH = Σ(kırılan) − Σ(oluşan) = 679 − 862 = −183 kJ; bu değer 2 mol HCl oluşumuna aittir. 1 mol HCl için ΔH = −183/2 = −91,5 kJ, yani 91,5 kJ ısı açığa çıkar. 183 kJ, 2 mol'e ait değeri 1 mol'e bölmemekten; 248 kJ alınır sonucu, oluşan H–Cl bağlarını 2 yerine 1 saymaktan (679 − 431) gelir. Çıkarma sırasını ters alan öğrenci ise ısının alındığını sanır.",
        "en": "Choose the bonds that take part in the reaction from the table (Br–Br is not involved). Bonds broken: 1 H–H + 1 Cl–Cl = 436 + 243 = 679 kJ. Bonds formed: 2 H–Cl = 2 × 431 = 862 kJ. ΔH = Σ(broken) − Σ(formed) = 679 − 862 = −183 kJ; this value refers to the formation of 2 mol of HCl. For 1 mol of HCl, ΔH = −183/2 = −91.5 kJ, i.e. 91.5 kJ of heat is released. 183 kJ comes from not dividing the 2 mol value by two; '248 kJ absorbed' comes from counting one H–Cl bond formed instead of two (679 − 431). Reversing the order of subtraction makes the heat appear to be absorbed.",
        "de": "Aus der Tabelle werden die an der Reaktion beteiligten Bindungen gewählt (Br–Br kommt nicht vor). Gespaltene Bindungen: 1 H–H + 1 Cl–Cl = 436 + 243 = 679 kJ. Gebildete Bindungen: 2 H–Cl = 2 · 431 = 862 kJ. ΔH = Σ(gespalten) − Σ(gebildet) = 679 − 862 = −183 kJ; dieser Wert gilt für die Bildung von 2 mol HCl. Für 1 mol HCl ist ΔH = −183/2 = −91,5 kJ, es werden also 91,5 kJ Wärme frei. 183 kJ entsteht, wenn man den Wert für 2 mol nicht halbiert; „248 kJ aufgenommen“, wenn man nur eine statt zwei gebildeter H–Cl-Bindungen zählt (679 − 431). Wer die Subtraktion umkehrt, meint, die Wärme werde aufgenommen.",
        "fr": "On choisit dans le tableau les liaisons intervenant dans la réaction (Br–Br n'intervient pas). Liaisons rompues : 1 H–H + 1 Cl–Cl = 436 + 243 = 679 kJ. Liaisons formées : 2 H–Cl = 2 × 431 = 862 kJ. ΔH = Σ(rompues) − Σ(formées) = 679 − 862 = −183 kJ ; cette valeur correspond à la formation de 2 mol de HCl. Pour 1 mol de HCl, ΔH = −183/2 = −91,5 kJ : 91,5 kJ de chaleur sont libérés. 183 kJ vient de l'oubli de la division par deux ; « 248 kJ absorbés » vient du comptage d'une seule liaison H–Cl formée au lieu de deux (679 − 431). Inverser l'ordre de la soustraction fait croire que la chaleur est absorbée.",
        "ru": "Из таблицы выбирают связи, участвующие в реакции (Br–Br в ней не участвует). Разрываемые связи: 1 H–H + 1 Cl–Cl = 436 + 243 = 679 кДж. Образующиеся связи: 2 H–Cl = 2 · 431 = 862 кДж. ΔH = Σ(разрываемых) − Σ(образующихся) = 679 − 862 = −183 кДж; это значение относится к образованию 2 моль HCl. Для 1 моль HCl ΔH = −183/2 = −91,5 кДж, т. е. выделяется 91,5 кДж теплоты. 183 кДж получается, если не разделить значение для 2 моль на два; «поглощается 248 кДж» — если учесть одну образующуюся связь H–Cl вместо двух (679 − 431). Если поменять порядок вычитания, покажется, что теплота поглощается.",
        "ar": "تُختار من الجدول الروابط المشاركة في التفاعل (الرابطة Br–Br لا تشارك). الروابط المكسورة: 1 H–H + 1 Cl–Cl = 436 + 243 = 679 kJ. الروابط المتكوّنة: 2 H–Cl = 2 × 431 = 862 kJ. ΔH = Σ(المكسورة) − Σ(المتكوّنة) = 679 − 862 = −183 kJ، وهذه القيمة لتكوّن 2 mol من HCl. لـ 1 mol من HCl يكون ΔH = −183/2 = −91.5 kJ، أي تنطلق 91.5 kJ من الحرارة. القيمة 183 kJ تنتج عن عدم قسمة قيمة 2 mol على اثنين، و«تُمتص 248 kJ» تنتج عن حساب رابطة H–Cl واحدة متكوّنة بدل اثنتين (679 − 431). ومن يعكس ترتيب الطرح يظن أن الحرارة تُمتص.",
        "zh": "从表中选出参与反应的化学键（Br–Br 不参与反应）。断裂的键：1 H–H + 1 Cl–Cl = 436 + 243 = 679 kJ。形成的键：2 H–Cl = 2 × 431 = 862 kJ。ΔH = Σ(断裂) − Σ(形成) = 679 − 862 = −183 kJ，这是生成 2 mol HCl 的数值。生成 1 mol HCl 时 ΔH = −183/2 = −91.5 kJ，即放出 91.5 kJ 热量。183 kJ 是没有把 2 mol 的数值除以 2；\"吸收 248 kJ\" 是把形成的 H–Cl 键算成 1 个而不是 2 个 (679 − 431)。若把减法顺序颠倒，就会误以为吸收热量。",
        "ku": "Ji tabloyê girêdanên ku di reaksiyonê de cih digirin tên hilbijartin (Br–Br di vê reaksiyonê de tune). Girêdanên dişkên: 1 H–H + 1 Cl–Cl = 436 + 243 = 679 kJ. Girêdanên çêdibin: 2 H–Cl = 2 × 431 = 862 kJ. ΔH = Σ(şikestî) − Σ(çêbûyî) = 679 − 862 = −183 kJ; ev nirx ji bo çêbûna 2 mol HCl e. Ji bo 1 mol HCl ΔH = −183/2 = −91,5 kJ e, yanî 91,5 kJ germ derdikeve. 183 kJ ji parnekirina nirxa 2 mol li duyan, encama '248 kJ tê girtin' jî ji hesabkirina yek girêdana H–Cl li şûna duyan (679 − 431) tê. Kesê ku rêza derxistinê berevajî dike, digire ku germ tê girtin."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Bağ",
            "en": "Bond",
            "de": "Bindung",
            "fr": "Liaison",
            "ru": "Связь",
            "ar": "الرابطة",
            "zh": "化学键",
            "ku": "Girêdan"
          },
          {
            "tr": "Ortalama bağ enerjisi (kJ/mol)",
            "en": "Average bond energy (kJ/mol)",
            "de": "Mittlere Bindungsenergie (kJ/mol)",
            "fr": "Énergie de liaison moyenne (kJ/mol)",
            "ru": "Средняя энергия связи (кДж/моль)",
            "ar": "متوسط طاقة الرابطة (kJ/mol)",
            "zh": "平均键能 (kJ/mol)",
            "ku": "Enerjiya girêdanê ya navînî (kJ/mol)"
          }
        ],
        "rows": [
          [
            "H–H",
            "436"
          ],
          [
            "Cl–Cl",
            "243"
          ],
          [
            "H–Cl",
            "431"
          ],
          [
            "Br–Br",
            "193"
          ]
        ]
      }
    },
    {
      "id": "u16-twin02",
      "stem": {
        "tr": "Şekildeki entalpi diyagramında karbon ve oksijen içeren bazı sistemlerin 25 °C ve 1 atm'deki entalpi düzeyleri verilmiştir. CO(g) + 1/2 O2(g) → CO2(g) tepkimesinin ΔH değeri kaç kJ'dir?",
        "en": "The enthalpy diagram shows the enthalpy levels of some systems containing carbon and oxygen at 25 °C and 1 atm. What is ΔH, in kJ, for the reaction CO(g) + 1/2 O2(g) → CO2(g)?",
        "de": "Das Enthalpiediagramm zeigt die Enthalpieniveaus einiger kohlenstoff- und sauerstoffhaltiger Systeme bei 25 °C und 1 atm. Wie groß ist ΔH in kJ für die Reaktion CO(g) + 1/2 O2(g) → CO2(g)?",
        "fr": "Le diagramme d'enthalpie montre les niveaux d'enthalpie de quelques systèmes contenant du carbone et de l'oxygène à 25 °C et 1 atm. Quelle est la valeur de ΔH, en kJ, pour la réaction CO(g) + 1/2 O2(g) → CO2(g) ?",
        "ru": "На энтальпийной диаграмме показаны уровни энтальпии некоторых систем, содержащих углерод и кислород, при 25 °C и 1 атм. Чему равно ΔH (кДж) реакции CO(г) + 1/2 O2(г) → CO2(г)?",
        "ar": "يبيّن مخطط المحتوى الحراري مستويات المحتوى الحراري لبعض الأنظمة المحتوية على الكربون والأكسجين عند 25 °C و1 atm. كم تبلغ قيمة ΔH بوحدة kJ للتفاعل CO(g) + 1/2 O2(g) → CO2(g)؟",
        "zh": "焓图给出了 25 °C、1 atm 下一些含碳和氧的体系的焓值。反应 CO(g) + 1/2 O2(g) → CO2(g) 的 ΔH 是多少 kJ？",
        "ku": "Di diyagrama entalpiyê ya şiklê de asta entalpiyê ya hin sîstemên ku karbon û oksîjen dihewînin di 25 °C û 1 atm de hatiye dayîn. Nirxa ΔH ya reaksiyona CO(g) + 1/2 O2(g) → CO2(g) çend kJ e?"
      },
      "options": [
        {
          "tr": "−504",
          "en": "−504",
          "de": "−504",
          "fr": "−504",
          "ru": "−504",
          "ar": "−504",
          "zh": "−504",
          "ku": "−504"
        },
        {
          "tr": "−393,5",
          "en": "−393.5",
          "de": "−393,5",
          "fr": "−393,5",
          "ru": "−393,5",
          "ar": "−393.5",
          "zh": "−393.5",
          "ku": "−393,5"
        },
        {
          "tr": "−283",
          "en": "−283",
          "de": "−283",
          "fr": "−283",
          "ru": "−283",
          "ar": "−283",
          "zh": "−283",
          "ku": "−283"
        },
        {
          "tr": "−110,5",
          "en": "−110.5",
          "de": "−110,5",
          "fr": "−110,5",
          "ru": "−110,5",
          "ar": "−110.5",
          "zh": "−110.5",
          "ku": "−110,5"
        },
        {
          "tr": "+283",
          "en": "+283",
          "de": "+283",
          "fr": "+283",
          "ru": "+283",
          "ar": "+283",
          "zh": "+283",
          "ku": "+283"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Diyagramdan, C(grafit) + O2(g) düzeyi 0 alınarak, CO(g) + 1/2 O2(g) düzeyi −110,5 kJ ve CO2(g) düzeyi −393,5 kJ okunur. ΔH = H(ürünler) − H(girenler) = −393,5 − (−110,5) = −283 kJ. Hess yasasına göre aynı sonuç, C(grafit) + O2(g) → CO2(g) (−393,5 kJ) tepkimesinden C(grafit) + 1/2 O2(g) → CO(g) (−110,5 kJ) tepkimesi çıkarılarak da bulunur. İki değeri toplayan −504, yalnızca CO2 düzeyini okuyan −393,5, yalnızca CO düzeyini okuyan −110,5, çıkarma sırasını ters alan ise +283 bulur.",
        "en": "Taking the C(graphite) + O2(g) level as 0, the diagram gives −110.5 kJ for CO(g) + 1/2 O2(g) and −393.5 kJ for CO2(g). ΔH = H(products) − H(reactants) = −393.5 − (−110.5) = −283 kJ. By Hess's law the same result follows from subtracting C(graphite) + 1/2 O2(g) → CO(g) (−110.5 kJ) from C(graphite) + O2(g) → CO2(g) (−393.5 kJ). Adding the two values gives −504, reading only the CO2 level gives −393.5, reading only the CO level gives −110.5, and reversing the subtraction gives +283.",
        "de": "Mit dem Niveau C(Graphit) + O2(g) als 0 liest man ab: CO(g) + 1/2 O2(g) liegt bei −110,5 kJ und CO2(g) bei −393,5 kJ. ΔH = H(Produkte) − H(Edukte) = −393,5 − (−110,5) = −283 kJ. Nach dem Satz von Hess ergibt sich dasselbe, wenn man C(Graphit) + 1/2 O2(g) → CO(g) (−110,5 kJ) von C(Graphit) + O2(g) → CO2(g) (−393,5 kJ) abzieht. Wer beide Werte addiert, erhält −504; wer nur das CO2-Niveau abliest, −393,5; wer nur das CO-Niveau abliest, −110,5; wer die Subtraktion umkehrt, +283.",
        "fr": "En prenant le niveau C(graphite) + O2(g) égal à 0, on lit −110,5 kJ pour CO(g) + 1/2 O2(g) et −393,5 kJ pour CO2(g). ΔH = H(produits) − H(réactifs) = −393,5 − (−110,5) = −283 kJ. D'après la loi de Hess, on obtient le même résultat en retranchant C(graphite) + 1/2 O2(g) → CO(g) (−110,5 kJ) de C(graphite) + O2(g) → CO2(g) (−393,5 kJ). Additionner les deux valeurs donne −504, lire seulement le niveau de CO2 donne −393,5, lire seulement celui de CO donne −110,5, et inverser la soustraction donne +283.",
        "ru": "Если принять уровень C(графит) + O2(г) за 0, по диаграмме уровень CO(г) + 1/2 O2(г) равен −110,5 кДж, а уровень CO2(г) — −393,5 кДж. ΔH = H(продуктов) − H(реагентов) = −393,5 − (−110,5) = −283 кДж. По закону Гесса тот же результат получается, если из C(графит) + O2(г) → CO2(г) (−393,5 кДж) вычесть C(графит) + 1/2 O2(г) → CO(г) (−110,5 кДж). Сложение двух значений даёт −504, чтение только уровня CO2 — −393,5, только уровня CO — −110,5, а обратный порядок вычитания — +283.",
        "ar": "بأخذ مستوى C(جرافيت) + O2(g) مساويًا للصفر، يُقرأ من المخطط أن مستوى CO(g) + 1/2 O2(g) هو −110.5 kJ ومستوى CO2(g) هو −393.5 kJ. ΔH = H(النواتج) − H(المتفاعلات) = −393.5 − (−110.5) = −283 kJ. وبحسب قانون هس نحصل على النتيجة نفسها بطرح التفاعل C(جرافيت) + 1/2 O2(g) → CO(g) (−110.5 kJ) من التفاعل C(جرافيت) + O2(g) → CO2(g) (−393.5 kJ). من يجمع القيمتين يحصل على −504، ومن يقرأ مستوى CO2 وحده يحصل على −393.5، ومن يقرأ مستوى CO وحده يحصل على −110.5، ومن يعكس ترتيب الطرح يحصل على +283.",
        "zh": "以 C(石墨) + O2(g) 的焓为 0，由图读出 CO(g) + 1/2 O2(g) 为 −110.5 kJ，CO2(g) 为 −393.5 kJ。ΔH = H(生成物) − H(反应物) = −393.5 − (−110.5) = −283 kJ。由盖斯定律，用 C(石墨) + O2(g) → CO2(g) (−393.5 kJ) 减去 C(石墨) + 1/2 O2(g) → CO(g) (−110.5 kJ) 也得到同样结果。把两个数值相加得 −504；只读 CO2 的焓值得 −393.5；只读 CO 的焓值得 −110.5；减法顺序颠倒得 +283。",
        "ku": "Bi hesibandina asta C(grafît) + O2(g) wek 0, ji diyagramê asta CO(g) + 1/2 O2(g) −110,5 kJ û asta CO2(g) −393,5 kJ tê xwendin. ΔH = H(hilber) − H(reaktant) = −393,5 − (−110,5) = −283 kJ. Li gorî zagona Hess heman encam bi derxistina reaksiyona C(grafît) + 1/2 O2(g) → CO(g) (−110,5 kJ) ji reaksiyona C(grafît) + O2(g) → CO2(g) (−393,5 kJ) jî tê dîtin. Kesê ku her du nirxan berhev dike −504, kesê ku tenê asta CO2 dixwîne −393,5, kesê ku tenê asta CO dixwîne −110,5, kesê ku rêza derxistinê berevajî dike jî +283 dibîne."
      },
      "figure": {
        "kind": "svg",
        "width": 360,
        "height": 230,
        "markup": "<path d='M50,218 V22' class='qf-line'/><path d='M50,12 L45,23 H55 Z' class='qf-dot'/><text x='60' y='18'>H (kJ)</text><path d='M46,40 H54 M46,86 H54 M46,205 H54' class='qf-line'/><path d='M54,40 H110 M54,86 H110 M54,205 H110' class='qf-dash'/><path d='M110,40 H300 M110,86 H300 M110,205 H300' class='qf-stroke-accent'/><text x='42' y='44' text-anchor='end'>0</text><text x='42' y='90' text-anchor='end'>{{v1}}</text><text x='42' y='209' text-anchor='end'>{{v2}}</text><text x='205' y='33' text-anchor='middle' class='qf-strong'>{{l0}}</text><text x='205' y='79' text-anchor='middle' class='qf-strong'>{{l1}}</text><text x='205' y='198' text-anchor='middle' class='qf-strong'>{{l2}}</text>",
        "labels": {
          "v1": {
            "tr": "−110,5",
            "en": "−110.5",
            "de": "−110,5",
            "fr": "−110,5",
            "ru": "−110,5",
            "ar": "−110.5",
            "zh": "−110.5",
            "ku": "−110,5"
          },
          "v2": {
            "tr": "−393,5",
            "en": "−393.5",
            "de": "−393,5",
            "fr": "−393,5",
            "ru": "−393,5",
            "ar": "−393.5",
            "zh": "−393.5",
            "ku": "−393,5"
          },
          "l0": {
            "tr": "C(grafit) + O₂(g)",
            "en": "C(graphite) + O₂(g)",
            "de": "C(Graphit) + O₂(g)",
            "fr": "C(graphite) + O₂(g)",
            "ru": "C(графит) + O₂(г)",
            "ar": "C(جرافيت) + O₂(g)",
            "zh": "C(石墨) + O₂(g)",
            "ku": "C(grafît) + O₂(g)"
          },
          "l1": {
            "tr": "CO(g) + ½O₂(g)",
            "en": "CO(g) + ½O₂(g)",
            "de": "CO(g) + ½O₂(g)",
            "fr": "CO(g) + ½O₂(g)",
            "ru": "CO(г) + ½O₂(г)",
            "ar": "CO(g) + ½O₂(g)",
            "zh": "CO(g) + ½O₂(g)",
            "ku": "CO(g) + ½O₂(g)"
          },
          "l2": {
            "tr": "CO₂(g)",
            "en": "CO₂(g)",
            "de": "CO₂(g)",
            "fr": "CO₂(g)",
            "ru": "CO₂(г)",
            "ar": "CO₂(g)",
            "zh": "CO₂(g)",
            "ku": "CO₂(g)"
          }
        }
      }
    },
    {
      "id": "u16-twin03",
      "stem": {
        "tr": "C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(s) tepkimesine göre propanın molar yanma entalpisi kaç kJ'dir? (ΔHf°: C3H8(g) = −104 kJ/mol, CO2(g) = −394 kJ/mol, H2O(s) = −286 kJ/mol)",
        "en": "According to the reaction C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(l), what is the molar enthalpy of combustion of propane in kJ? (ΔHf°: C3H8(g) = −104 kJ/mol, CO2(g) = −394 kJ/mol, H2O(l) = −286 kJ/mol)",
        "de": "Wie groß ist nach der Reaktion C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(l) die molare Verbrennungsenthalpie von Propan in kJ? (ΔHf°: C3H8(g) = −104 kJ/mol, CO2(g) = −394 kJ/mol, H2O(l) = −286 kJ/mol)",
        "fr": "D'après la réaction C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(l), quelle est l'enthalpie molaire de combustion du propane en kJ ? (ΔHf° : C3H8(g) = −104 kJ/mol, CO2(g) = −394 kJ/mol, H2O(l) = −286 kJ/mol)",
        "ru": "Чему равна молярная энтальпия сгорания пропана (кДж) по реакции C3H8(г) + 5O2(г) → 3CO2(г) + 4H2O(ж)? (ΔHf°: C3H8(г) = −104 кДж/моль, CO2(г) = −394 кДж/моль, H2O(ж) = −286 кДж/моль)",
        "ar": "وفقًا للتفاعل C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(l)، كم يبلغ المحتوى الحراري المولي لاحتراق البروبان بوحدة kJ؟ (ΔHf°: C3H8(g) = −104 kJ/mol، CO2(g) = −394 kJ/mol، H2O(l) = −286 kJ/mol)",
        "zh": "根据反应 C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(l)，丙烷的摩尔燃烧焓是多少 kJ？(ΔHf°：C3H8(g) = −104 kJ/mol，CO2(g) = −394 kJ/mol，H2O(l) = −286 kJ/mol)",
        "ku": "Li gorî reaksiyona C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(l), entalpiya şewitînê ya molî ya propanê çend kJ ye? (ΔHf°: C3H8(g) = −104 kJ/mol, CO2(g) = −394 kJ/mol, H2O(l) = −286 kJ/mol)"
      },
      "options": [
        {
          "tr": "−2430",
          "en": "−2430",
          "de": "−2430",
          "fr": "−2430",
          "ru": "−2430",
          "ar": "−2430",
          "zh": "−2430",
          "ku": "−2430"
        },
        {
          "tr": "−2222",
          "en": "−2222",
          "de": "−2222",
          "fr": "−2222",
          "ru": "−2222",
          "ar": "−2222",
          "zh": "−2222",
          "ku": "−2222"
        },
        {
          "tr": "−1364",
          "en": "−1364",
          "de": "−1364",
          "fr": "−1364",
          "ru": "−1364",
          "ar": "−1364",
          "zh": "−1364",
          "ku": "−1364"
        },
        {
          "tr": "−576",
          "en": "−576",
          "de": "−576",
          "fr": "−576",
          "ru": "−576",
          "ar": "−576",
          "zh": "−576",
          "ku": "−576"
        },
        {
          "tr": "+2222",
          "en": "+2222",
          "de": "+2222",
          "fr": "+2222",
          "ru": "+2222",
          "ar": "+2222",
          "zh": "+2222",
          "ku": "+2222"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "ΔH = ΣΔHf(ürünler) − ΣΔHf(girenler). Ürünler: 3(−394) + 4(−286) = −1182 − 1144 = −2326 kJ. Girenler: −104 + 5·0 = −104 kJ (O2 element olduğundan ΔHf° = 0). ΔH = −2326 − (−104) = −2222 kJ. Katsayıları unutan −576, yalnız H2O'nun katsayısını unutan −1364, propanın ΔHf değerini çıkaracağı yerde ekleyen −2430 kJ bulur; girenlerden ürünleri çıkarmak ise işareti ters çevirir (+2222).",
        "en": "ΔH = ΣΔHf(products) − ΣΔHf(reactants). Products: 3(−394) + 4(−286) = −1182 − 1144 = −2326 kJ. Reactants: −104 + 5·0 = −104 kJ (O2 is an element, ΔHf° = 0). ΔH = −2326 − (−104) = −2222 kJ. Forgetting the coefficients gives −576, forgetting only the H2O coefficient gives −1364, adding the ΔHf of propane instead of subtracting it gives −2430 kJ; subtracting products from reactants flips the sign (+2222).",
        "de": "ΔH = ΣΔHf(Produkte) − ΣΔHf(Edukte). Produkte: 3(−394) + 4(−286) = −1182 − 1144 = −2326 kJ. Edukte: −104 + 5·0 = −104 kJ (O2 ist ein Element, ΔHf° = 0). ΔH = −2326 − (−104) = −2222 kJ. Wer die Koeffizienten vergisst, erhält −576, wer nur den Koeffizienten von H2O vergisst, −1364, wer das ΔHf von Propan addiert statt subtrahiert, −2430 kJ; Produkte von Edukten abzuziehen kehrt das Vorzeichen um (+2222).",
        "fr": "ΔH = ΣΔHf(produits) − ΣΔHf(réactifs). Produits : 3(−394) + 4(−286) = −1182 − 1144 = −2326 kJ. Réactifs : −104 + 5·0 = −104 kJ (O2 est un corps simple, ΔHf° = 0). ΔH = −2326 − (−104) = −2222 kJ. Oublier les coefficients donne −576, oublier seulement celui de H2O donne −1364, ajouter le ΔHf du propane au lieu de le soustraire donne −2430 kJ ; soustraire les produits des réactifs inverse le signe (+2222).",
        "ru": "ΔH = ΣΔHf(продуктов) − ΣΔHf(реагентов). Продукты: 3(−394) + 4(−286) = −1182 − 1144 = −2326 кДж. Реагенты: −104 + 5·0 = −104 кДж (O2 — простое вещество, ΔHf° = 0). ΔH = −2326 − (−104) = −2222 кДж. Если забыть коэффициенты, получится −576; если забыть только коэффициент H2O — −1364; если прибавить ΔHf пропана вместо того, чтобы вычесть, — −2430 кДж; вычитание продуктов из реагентов меняет знак (+2222).",
        "ar": "ΔH = ΣΔHf(النواتج) − ΣΔHf(المتفاعلات). النواتج: 3(−394) + 4(−286) = −1182 − 1144 = −2326 kJ. المتفاعلات: −104 + 5·0 = −104 kJ (O2 عنصر، ΔHf° = 0). ΔH = −2326 − (−104) = −2222 kJ. من ينسى المعاملات يحصل على −576، ومن ينسى معامل H2O فقط يحصل على −1364، ومن يجمع ΔHf للبروبان بدل طرحها يحصل على −2430 kJ؛ وطرح النواتج من المتفاعلات يقلب الإشارة (+2222).",
        "zh": "ΔH = ΣΔHf(生成物) − ΣΔHf(反应物)。生成物：3(−394) + 4(−286) = −1182 − 1144 = −2326 kJ。反应物：−104 + 5·0 = −104 kJ(O2 是单质，ΔHf° = 0)。ΔH = −2326 − (−104) = −2222 kJ。忘记化学计量数得 −576，只忘记 H2O 的系数得 −1364，把丙烷的 ΔHf 加上而不是减去得 −2430 kJ；用反应物减生成物则符号相反(+2222)。",
        "ku": "ΔH = ΣΔHf(hilber) − ΣΔHf(reaktant). Hilber: 3(−394) + 4(−286) = −1182 − 1144 = −2326 kJ. Reaktant: −104 + 5·0 = −104 kJ (O2 element e, loma ΔHf° = 0). ΔH = −2326 − (−104) = −2222 kJ. Kesê ku hevberan ji bîr dike −576, kesê ku tenê hevberê H2O ji bîr dike −1364, kesê ku li şûna derxistinê nirxa ΔHf ya propanê lê zêde dike −2430 kJ dibîne; derxistina hilberan ji reaktantan jî nîşanê berevajî dike (+2222)."
      }
    },
    {
      "id": "u16-twin04",
      "stem": {
        "tr": "N2O4(g) + 57 kJ → 2NO2(g) tepkimesiyle ilgili aşağıdaki ifadelerden hangisi doğrudur?",
        "en": "Which of the following statements about the reaction N2O4(g) + 57 kJ → 2NO2(g) is correct?",
        "de": "Welche der folgenden Aussagen über die Reaktion N2O4(g) + 57 kJ → 2NO2(g) ist richtig?",
        "fr": "Laquelle des affirmations suivantes concernant la réaction N2O4(g) + 57 kJ → 2NO2(g) est correcte ?",
        "ru": "Какое из следующих утверждений о реакции N2O4(г) + 57 кДж → 2NO2(г) верно?",
        "ar": "أي العبارات الآتية صحيحة بشأن التفاعل N2O4(g) + 57 kJ → 2NO2(g)؟",
        "zh": "关于反应 N2O4(g) + 57 kJ → 2NO2(g)，下列说法正确的是哪一项？",
        "ku": "Derbarê reaksiyona N2O4(g) + 57 kJ → 2NO2(g) de kîjan ji van gotinan rast e?"
      },
      "options": [
        {
          "tr": "2NO2(g) → N2O4(g) tepkimesinde 57 kJ ısı açığa çıkar.",
          "en": "In the reaction 2NO2(g) → N2O4(g), 57 kJ of heat is released.",
          "de": "Bei der Reaktion 2NO2(g) → N2O4(g) werden 57 kJ Wärme frei.",
          "fr": "Dans la réaction 2NO2(g) → N2O4(g), 57 kJ de chaleur sont libérés.",
          "ru": "В реакции 2NO2(г) → N2O4(г) выделяется 57 кДж теплоты.",
          "ar": "في التفاعل 2NO2(g) → N2O4(g) تنطلق 57 kJ من الحرارة.",
          "zh": "反应 2NO2(g) → N2O4(g) 放出 57 kJ 热量。",
          "ku": "Di reaksiyona 2NO2(g) → N2O4(g) de 57 kJ germ derdikeve."
        },
        {
          "tr": "Tepkimenin ΔH değeri −57 kJ'dir.",
          "en": "The ΔH of the reaction is −57 kJ.",
          "de": "Das ΔH der Reaktion beträgt −57 kJ.",
          "fr": "Le ΔH de la réaction vaut −57 kJ.",
          "ru": "ΔH реакции равна −57 кДж.",
          "ar": "قيمة ΔH للتفاعل تساوي −57 kJ.",
          "zh": "该反应的 ΔH 为 −57 kJ。",
          "ku": "Nirxa ΔH ya reaksiyonê −57 kJ e."
        },
        {
          "tr": "1 mol NO2(g) oluşurken 57 kJ ısı alınır.",
          "en": "57 kJ of heat is absorbed when 1 mol of NO2(g) forms.",
          "de": "Bei der Bildung von 1 mol NO2(g) werden 57 kJ Wärme aufgenommen.",
          "fr": "57 kJ de chaleur sont absorbés lors de la formation d'1 mol de NO2(g).",
          "ru": "При образовании 1 моль NO2(г) поглощается 57 кДж теплоты.",
          "ar": "تُمتص 57 kJ من الحرارة عند تكوّن 1 mol من NO2(g).",
          "zh": "生成 1 mol NO2(g) 时吸收 57 kJ 热量。",
          "ku": "Dema 1 mol NO2(g) çêdibe, 57 kJ germ tê girtin."
        },
        {
          "tr": "2 mol NO2(g)'nin toplam entalpisi 1 mol N2O4(g)'ünkinden düşüktür.",
          "en": "The total enthalpy of 2 mol of NO2(g) is lower than that of 1 mol of N2O4(g).",
          "de": "Die Gesamtenthalpie von 2 mol NO2(g) ist kleiner als die von 1 mol N2O4(g).",
          "fr": "L'enthalpie totale de 2 mol de NO2(g) est inférieure à celle d'1 mol de N2O4(g).",
          "ru": "Суммарная энтальпия 2 моль NO2(г) меньше, чем у 1 моль N2O4(г).",
          "ar": "المحتوى الحراري الكلي لـ 2 mol من NO2(g) أقل من المحتوى الحراري لـ 1 mol من N2O4(g).",
          "zh": "2 mol NO2(g) 的总焓低于 1 mol N2O4(g) 的焓。",
          "ku": "Entalpiya giştî ya 2 mol NO2(g) ji ya 1 mol N2O4(g) kêmtir e."
        },
        {
          "tr": "Tepkime gerçekleşirken ortamın sıcaklığı artar.",
          "en": "The temperature of the surroundings rises while the reaction takes place.",
          "de": "Während der Reaktion steigt die Temperatur der Umgebung.",
          "fr": "La température du milieu augmente pendant la réaction.",
          "ru": "Во время реакции температура окружающей среды повышается.",
          "ar": "ترتفع درجة حرارة الوسط المحيط أثناء حدوث التفاعل.",
          "zh": "反应进行时环境温度升高。",
          "ku": "Dema reaksiyon pêk tê, germahiya derdorê bilind dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Isı girenler tarafında yazıldığından tepkime endotermiktir ve ΔH = +57 kJ'dir; ΔH'yi −57 kJ almak ısının yazıldığı tarafı ters yorumlamaktır. Endotermik tepkimede ürünlerin entalpisi girenlerinkinden yüksektir ve ortam soğur. 57 kJ, 2 mol NO2 oluşumuna aittir; 1 mol NO2 için 28,5 kJ ısı alınır. Tepkime ters çevrilince ΔH = −57 kJ olur, yani 2NO2(g) → N2O4(g) tepkimesinde 57 kJ ısı açığa çıkar.",
        "en": "Heat is written on the reactant side, so the reaction is endothermic and ΔH = +57 kJ; taking ΔH as −57 kJ misreads the side on which heat is written. In an endothermic reaction the products have higher enthalpy than the reactants and the surroundings cool down. The 57 kJ belongs to the formation of 2 mol NO2; for 1 mol NO2, 28.5 kJ is absorbed. Reversing the reaction gives ΔH = −57 kJ, so 2NO2(g) → N2O4(g) releases 57 kJ of heat.",
        "de": "Die Wärme steht auf der Eduktseite, also ist die Reaktion endotherm und ΔH = +57 kJ; ΔH = −57 kJ anzunehmen heißt, die Seite der Wärme falsch zu deuten. Bei einer endothermen Reaktion ist die Enthalpie der Produkte höher als die der Edukte, und die Umgebung kühlt ab. Die 57 kJ gehören zur Bildung von 2 mol NO2; für 1 mol NO2 werden 28,5 kJ aufgenommen. Beim Umkehren wird ΔH = −57 kJ, also setzt 2NO2(g) → N2O4(g) 57 kJ Wärme frei.",
        "fr": "La chaleur est écrite du côté des réactifs : la réaction est endothermique et ΔH = +57 kJ ; prendre ΔH = −57 kJ revient à mal lire le côté où figure la chaleur. Dans une réaction endothermique, l'enthalpie des produits est supérieure à celle des réactifs et le milieu se refroidit. Les 57 kJ correspondent à la formation de 2 mol de NO2 ; pour 1 mol de NO2, 28,5 kJ sont absorbés. En inversant la réaction, ΔH = −57 kJ : la réaction 2NO2(g) → N2O4(g) libère 57 kJ.",
        "ru": "Теплота записана в левой части (со стороны реагентов), значит, реакция эндотермическая и ΔH = +57 кДж; ответ ΔH = −57 кДж — результат неверного прочтения того, с какой стороны записана теплота. В эндотермической реакции энтальпия продуктов выше, чем у реагентов, и окружающая среда охлаждается. 57 кДж относятся к образованию 2 моль NO2; на 1 моль NO2 поглощается 28,5 кДж. Для обратной реакции ΔH = −57 кДж, то есть в реакции 2NO2(г) → N2O4(г) выделяется 57 кДж теплоты.",
        "ar": "كُتبت الحرارة في جهة المتفاعلات، فالتفاعل ماص للحرارة وΔH = +57 kJ؛ واعتبار ΔH = −57 kJ خطأ في قراءة جهة كتابة الحرارة. في التفاعل الماص يكون المحتوى الحراري للنواتج أعلى من المتفاعلات ويبرد الوسط. الـ 57 kJ تخص تكوّن 2 mol من NO2؛ أما 1 mol من NO2 فيمتص 28.5 kJ. وعند عكس التفاعل تصبح ΔH = −57 kJ، أي أن التفاعل 2NO2(g) → N2O4(g) يُطلق 57 kJ من الحرارة.",
        "zh": "热量写在反应物一侧，反应吸热，ΔH = +57 kJ；把 ΔH 当成 −57 kJ 是看错了热量所在的一侧。吸热反应中生成物的焓高于反应物，环境变冷。57 kJ 对应生成 2 mol NO2，生成 1 mol NO2 只吸收 28.5 kJ。将反应逆转得 ΔH = −57 kJ，即 2NO2(g) → N2O4(g) 放出 57 kJ 热量。",
        "ku": "Ji ber ku germ li aliyê reaktantan hatiye nivîsandin, reaksiyon endotermîk e û ΔH = +57 kJ e; girtina ΔH wekî −57 kJ şaşxwendina aliyê germê ye. Di reaksiyona endotermîk de entalpiya hilberan ji ya reaktantan bilindtir e û derdor sar dibe. 57 kJ ya çêbûna 2 mol NO2 ye; ji bo 1 mol NO2 28,5 kJ germ tê girtin. Dema reaksiyon berevajî tê nivîsandin ΔH = −57 kJ dibe, ango di reaksiyona 2NO2(g) → N2O4(g) de 57 kJ germ derdikeve."
      }
    },
    {
      "id": "u16-twin05",
      "stem": {
        "tr": "Tepkime 1: N2(g) + O2(g) → 2NO(g)  ΔH = +180 kJ; Tepkime 2: 2NO(g) + O2(g) → 2NO2(g)  ΔH = −114 kJ. Bu bilgilere göre 1/2 N2(g) + O2(g) → NO2(g) tepkimesinin ΔH değeri kaç kJ'dir?",
        "en": "Reaction 1: N2(g) + O2(g) → 2NO(g)  ΔH = +180 kJ; Reaction 2: 2NO(g) + O2(g) → 2NO2(g)  ΔH = −114 kJ. Based on this, what is ΔH (in kJ) of the reaction 1/2 N2(g) + O2(g) → NO2(g)?",
        "de": "Reaktion 1: N2(g) + O2(g) → 2NO(g)  ΔH = +180 kJ; Reaktion 2: 2NO(g) + O2(g) → 2NO2(g)  ΔH = −114 kJ. Wie groß ist demnach ΔH (in kJ) der Reaktion 1/2 N2(g) + O2(g) → NO2(g)?",
        "fr": "Réaction 1 : N2(g) + O2(g) → 2NO(g)  ΔH = +180 kJ ; Réaction 2 : 2NO(g) + O2(g) → 2NO2(g)  ΔH = −114 kJ. D'après ces données, quel est le ΔH (en kJ) de la réaction 1/2 N2(g) + O2(g) → NO2(g) ?",
        "ru": "Реакция 1: N2(г) + O2(г) → 2NO(г)  ΔH = +180 кДж. Реакция 2: 2NO(г) + O2(г) → 2NO2(г)  ΔH = −114 кДж. Чему равна ΔH (кДж) реакции 1/2 N2(г) + O2(г) → NO2(г)?",
        "ar": "التفاعل 1: N2(g) + O2(g) → 2NO(g)  ΔH = +180 kJ؛ التفاعل 2: 2NO(g) + O2(g) → 2NO2(g)  ΔH = −114 kJ. بناءً على ذلك، كم تبلغ ΔH (بوحدة kJ) للتفاعل 1/2 N2(g) + O2(g) → NO2(g)؟",
        "zh": "反应 1：N2(g) + O2(g) → 2NO(g)  ΔH = +180 kJ；反应 2：2NO(g) + O2(g) → 2NO2(g)  ΔH = −114 kJ。据此，反应 1/2 N2(g) + O2(g) → NO2(g) 的 ΔH 是多少 kJ？",
        "ku": "Reaksiyona 1: N2(g) + O2(g) → 2NO(g)  ΔH = +180 kJ; Reaksiyona 2: 2NO(g) + O2(g) → 2NO2(g)  ΔH = −114 kJ. Li gorî van agahiyan, nirxa ΔH ya reaksiyona 1/2 N2(g) + O2(g) → NO2(g) çend kJ ye?"
      },
      "options": [
        {
          "tr": "−66",
          "en": "−66",
          "de": "−66",
          "fr": "−66",
          "ru": "−66",
          "ar": "−66",
          "zh": "−66",
          "ku": "−66"
        },
        {
          "tr": "−33",
          "en": "−33",
          "de": "−33",
          "fr": "−33",
          "ru": "−33",
          "ar": "−33",
          "zh": "−33",
          "ku": "−33"
        },
        {
          "tr": "+33",
          "en": "+33",
          "de": "+33",
          "fr": "+33",
          "ru": "+33",
          "ar": "+33",
          "zh": "+33",
          "ku": "+33"
        },
        {
          "tr": "+66",
          "en": "+66",
          "de": "+66",
          "fr": "+66",
          "ru": "+66",
          "ar": "+66",
          "zh": "+66",
          "ku": "+66"
        },
        {
          "tr": "+294",
          "en": "+294",
          "de": "+294",
          "fr": "+294",
          "ru": "+294",
          "ar": "+294",
          "zh": "+294",
          "ku": "+294"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "İki tepkime olduğu gibi toplanırsa ara ürün 2NO sadeleşir: N2(g) + 2O2(g) → 2NO2(g), ΔH = +180 + (−114) = +66 kJ. Hedef tepkimede 1 mol NO2 olduğundan bu toplam tepkime 1/2 ile çarpılır: ΔH = +66/2 = +33 kJ. Yarıya bölmeyi unutan +66 kJ, ikinci tepkimenin ΔH'sini işaretsiz alıp toplayan +294 kJ bulur.",
        "en": "Adding the two reactions as written cancels the intermediate 2NO: N2(g) + 2O2(g) → 2NO2(g), ΔH = +180 + (−114) = +66 kJ. The target reaction has 1 mol NO2, so this sum is multiplied by 1/2: ΔH = +66/2 = +33 kJ. Forgetting to halve gives +66 kJ; adding the second ΔH without its sign gives +294 kJ.",
        "de": "Addiert man beide Reaktionen unverändert, kürzt sich das Zwischenprodukt 2NO: N2(g) + 2O2(g) → 2NO2(g), ΔH = +180 + (−114) = +66 kJ. Die Zielreaktion enthält 1 mol NO2, daher wird mit 1/2 multipliziert: ΔH = +66/2 = +33 kJ. Wer das Halbieren vergisst, erhält +66 kJ; wer das zweite ΔH ohne Vorzeichen addiert, +294 kJ.",
        "fr": "En additionnant les deux réactions telles quelles, l'intermédiaire 2NO s'élimine : N2(g) + 2O2(g) → 2NO2(g), ΔH = +180 + (−114) = +66 kJ. La réaction visée comporte 1 mol de NO2, on multiplie donc par 1/2 : ΔH = +66/2 = +33 kJ. Oublier de diviser par 2 donne +66 kJ ; additionner le second ΔH sans son signe donne +294 kJ.",
        "ru": "Если сложить обе реакции как есть, промежуточный продукт 2NO сокращается: N2(г) + 2O2(г) → 2NO2(г), ΔH = +180 + (−114) = +66 кДж. В целевой реакции образуется 1 моль NO2, поэтому суммарное уравнение умножают на 1/2: ΔH = +66/2 = +33 кДж. Если забыть разделить на 2, получится +66 кДж; если сложить ΔH второй реакции без учёта знака — +294 кДж.",
        "ar": "بجمع التفاعلين كما هما يُختصر الناتج الوسيط 2NO: N2(g) + 2O2(g) → 2NO2(g)، ΔH = +180 + (−114) = +66 kJ. في التفاعل الهدف 1 mol من NO2، لذا يُضرب المجموع في 1/2: ΔH = +66/2 = +33 kJ. من ينسى القسمة على 2 يحصل على +66 kJ، ومن يجمع ΔH الثانية دون إشارتها يحصل على +294 kJ.",
        "zh": "两个反应直接相加，中间产物 2NO 消去：N2(g) + 2O2(g) → 2NO2(g)，ΔH = +180 + (−114) = +66 kJ。目标反应中 NO2 为 1 mol，故乘以 1/2：ΔH = +66/2 = +33 kJ。忘记除以 2 得 +66 kJ；把第二个 ΔH 去掉负号相加得 +294 kJ。",
        "ku": "Heke her du reaksiyon wekî xwe werin berhevkirin, hilbera navber 2NO ji her du aliyan diçe: N2(g) + 2O2(g) → 2NO2(g), ΔH = +180 + (−114) = +66 kJ. Ji ber ku di reaksiyona armanc de 1 mol NO2 heye, ev reaksiyona giştî bi 1/2 tê pirkirin: ΔH = +66/2 = +33 kJ. Kesê ku dabeşkirina li ser 2 ji bîr dike +66 kJ, kesê ku ΔH ya reaksiyona duyem bê nîşan lê zêde dike +294 kJ dibîne."
      }
    },
    {
      "id": "u16-twin06",
      "stem": {
        "tr": "Günlük hayatta karşılaşılan aşağıdaki olaylardan hangileri ekzotermiktir? I. Dolaptaki naftalinin zamanla süblimleşerek küçülmesi II. Su buharının soğuk pencere camında yoğuşması III. Ocakta doğal gazın (CH4) yanması",
        "en": "Which of the following everyday processes are exothermic? I. Naphthalene in a wardrobe shrinking over time by sublimation II. Water vapour condensing on a cold window pane III. Natural gas (CH4) burning on a stove",
        "de": "Welche der folgenden Alltagsvorgänge sind exotherm? I. Naphthalin im Schrank wird durch Sublimation mit der Zeit kleiner II. Wasserdampf kondensiert an einer kalten Fensterscheibe III. Erdgas (CH4) verbrennt am Herd",
        "fr": "Parmi les phénomènes quotidiens suivants, lesquels sont exothermiques ? I. Le naphtalène d'une armoire qui rapetisse avec le temps par sublimation II. La vapeur d'eau qui se condense sur une vitre froide III. La combustion du gaz naturel (CH4) sur une cuisinière",
        "ru": "Какие из следующих процессов, встречающихся в быту, экзотермические? I. Нафталин в шкафу со временем уменьшается в результате сублимации II. Водяной пар конденсируется на холодном оконном стекле III. Природный газ (CH4) сгорает на плите",
        "ar": "أي من العمليات اليومية الآتية طاردة للحرارة؟ I. تناقص حجم النفتالين في الخزانة مع الزمن بالتسامي II. تكاثف بخار الماء على زجاج نافذة بارد III. احتراق الغاز الطبيعي (CH4) في الموقد",
        "zh": "下列日常现象中，哪些是放热的？I. 衣柜里的萘因升华而逐渐变小 II. 水蒸气在冰冷的窗玻璃上液化 III. 天然气(CH4)在灶上燃烧",
        "ku": "Kîjan ji van bûyerên jiyana rojane ekzotermîk in? I. Naftalîna di dolabê de bi demê re bi sublîmebûnê piçûk dibe II. Buhara avê li ser cama pencereya sar şile dibe III. Gaza xwezayî (CH4) li ser ocaxê dişewite"
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
      "correctIndex": 4,
      "explanation": {
        "tr": "I. Süblimleşmede katı tanecikleri arasındaki çekimler yenilir; olay ortamdan ısı alır, endotermiktir. II. Yoğuşmada gaz tanecikleri birbirine yaklaşır ve aralarında çekim oluşur, ısı açığa çıkar; ekzotermiktir. III. Yanma tepkimeleri ısı ve ışık verir; ekzotermiktir. Ekzotermik olanlar II ve III'tür.",
        "en": "I. In sublimation the attractions between the particles of the solid are overcome; the process takes heat from the surroundings and is endothermic. II. In condensation gas particles come together and attractions form, releasing heat; it is exothermic. III. Combustion reactions give off heat and light; exothermic. The exothermic ones are II and III.",
        "de": "I. Bei der Sublimation werden die Anziehungskräfte zwischen den Teilchen des Feststoffs überwunden; der Vorgang nimmt Wärme auf und ist endotherm. II. Bei der Kondensation nähern sich Gasteilchen, Anziehungskräfte bilden sich und Wärme wird frei; exotherm. III. Verbrennungen geben Wärme und Licht ab; exotherm. Exotherm sind II und III.",
        "fr": "I. Lors de la sublimation, les attractions entre particules du solide sont vaincues ; le phénomène prend de la chaleur au milieu, il est endothermique. II. Lors de la condensation, les particules de gaz se rapprochent et des attractions s'établissent, ce qui libère de la chaleur ; exothermique. III. Les combustions dégagent chaleur et lumière ; exothermique. Les phénomènes exothermiques sont II et III.",
        "ru": "I. При сублимации преодолевается притяжение между частицами твёрдого вещества; процесс идёт с поглощением теплоты из окружающей среды, он эндотермический. II. При конденсации частицы газа сближаются, между ними возникает притяжение и выделяется теплота; процесс экзотермический. III. Горение сопровождается выделением теплоты и света; процесс экзотермический. Экзотермические процессы — II и III.",
        "ar": "I. في التسامي يُتغلب على قوى التجاذب بين جسيمات الصلب؛ فتأخذ العملية حرارة من الوسط وهي ماصة للحرارة. II. في التكاثف تقترب جسيمات الغاز وتتكوّن بينها قوى تجاذب فتنطلق حرارة؛ طاردة للحرارة. III. تفاعلات الاحتراق تُطلق حرارة وضوءًا؛ طاردة للحرارة. العمليات الطاردة هي II وIII.",
        "zh": "I. 升华时要克服固体粒子间的吸引，从环境吸热，是吸热过程。II. 液化时气体粒子相互靠近、形成吸引作用并放热，是放热过程。III. 燃烧放出热和光，是放热反应。放热的是 II 和 III。",
        "ku": "I. Di sublîmebûnê de kişandinên navbera perçeyên hişk tên derbaskirin; bûyer germê ji derdorê digire û endotermîk e. II. Di şilebûnê de perçeyên gazê nêzîkî hev dibin û di navbera wan de kişandin çêdibe, germ derdikeve; ekzotermîk e. III. Reaksiyonên şewitînê germ û ronahiyê didin; ekzotermîk in. Yên ekzotermîk II û III in."
      }
    },
    {
      "id": "u16-twin07",
      "stem": {
        "tr": "Şekilde tek basamakta gerçekleşen X(g) → Y(g) tepkimesinin potansiyel enerji–tepkime koordinatı grafiği verilmiştir. Bu tepkimeyle ilgili; I. İleri tepkimenin aktifleşme enerjisi 150 kJ'dir. II. Geri tepkimenin aktifleşme enerjisi 60 kJ'dir. III. Y(g) → X(g) tepkimesinde 50 kJ ısı açığa çıkar. yargılarından hangileri doğrudur?",
        "en": "The graph shows potential energy versus reaction coordinate for the single-step reaction X(g) → Y(g). Which of the following statements about this reaction are correct? I. The activation energy of the forward reaction is 150 kJ. II. The activation energy of the reverse reaction is 60 kJ. III. 50 kJ of heat is released in the reaction Y(g) → X(g).",
        "de": "Das Diagramm zeigt die potentielle Energie in Abhängigkeit von der Reaktionskoordinate für die einstufige Reaktion X(g) → Y(g). Welche Aussagen über diese Reaktion sind richtig? I. Die Aktivierungsenergie der Hinreaktion beträgt 150 kJ. II. Die Aktivierungsenergie der Rückreaktion beträgt 60 kJ. III. Bei der Reaktion Y(g) → X(g) werden 50 kJ Wärme frei.",
        "fr": "Le graphique représente l'énergie potentielle en fonction de la coordonnée de réaction pour la réaction en une étape X(g) → Y(g). Lesquelles des affirmations suivantes sur cette réaction sont correctes ? I. L'énergie d'activation de la réaction directe vaut 150 kJ. II. L'énergie d'activation de la réaction inverse vaut 60 kJ. III. La réaction Y(g) → X(g) libère 50 kJ de chaleur.",
        "ru": "На графике показана зависимость потенциальной энергии от координаты реакции для одностадийной реакции X(г) → Y(г). Какие утверждения об этой реакции верны? I. Энергия активации прямой реакции равна 150 кДж. II. Энергия активации обратной реакции равна 60 кДж. III. В реакции Y(г) → X(г) выделяется 50 кДж теплоты.",
        "ar": "يبيّن الرسم البياني في الشكل الطاقة الكامنة مقابل إحداثي التفاعل للتفاعل أحادي الخطوة X(g) → Y(g). أيّ العبارات الآتية عن هذا التفاعل صحيحة؟ I. طاقة تنشيط التفاعل الأمامي 150 kJ. II. طاقة تنشيط التفاعل العكسي 60 kJ. III. تنطلق 50 kJ من الحرارة في التفاعل Y(g) → X(g).",
        "zh": "图示为一步完成的反应 X(g) → Y(g) 的势能–反应进程图。关于该反应有下列说法：I. 正反应的活化能为 150 kJ。II. 逆反应的活化能为 60 kJ。III. 反应 Y(g) → X(g) 放出 50 kJ 热量。其中正确的是哪些？",
        "ku": "Di şiklê de grafîka enerjiya potansiyel–koordînata reaksiyonê ya reaksiyona X(g) → Y(g) ya ku di yek gavê de pêk tê hatiye dayîn. Derbarê vê reaksiyonê de; I. Enerjiya aktîvasyonê ya reaksiyona pêşve 150 kJ e. II. Enerjiya aktîvasyonê ya reaksiyona paşve 60 kJ e. III. Di reaksiyona Y(g) → X(g) de 50 kJ germ derdikeve. Kîjan ji van gotinan rast in?"
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
          "tr": "Yalnız II",
          "en": "II only",
          "de": "Nur II",
          "fr": "II seulement",
          "ru": "Только II",
          "ar": "II فقط",
          "zh": "仅II",
          "ku": "Tenê II"
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
      "correctIndex": 4,
      "explanation": {
        "tr": "Grafikten girenlerin (X) potansiyel enerjisi 40 kJ, aktifleşmiş kompleksinki 150 kJ, ürünlerin (Y) potansiyel enerjisi 90 kJ olarak okunur. I yanlıştır: Eai = 150 − 40 = 110 kJ'dir; 150 kJ aktifleşmiş kompleksin potansiyel enerjisidir, aktifleşme enerjisi değildir. II doğrudur: Eag = 150 − 90 = 60 kJ. III doğrudur: X → Y için ΔH = 90 − 40 = +50 kJ olduğundan ters tepkime Y → X için ΔH = −50 kJ'dir, yani 50 kJ ısı açığa çıkar. Doğru yargılar II ve III'tür.",
        "en": "From the graph, the potential energy of the reactant (X) is 40 kJ, that of the activated complex is 150 kJ and that of the product (Y) is 90 kJ. I is wrong: Ea(forward) = 150 − 40 = 110 kJ; 150 kJ is the potential energy of the activated complex, not the activation energy. II is correct: Ea(reverse) = 150 − 90 = 60 kJ. III is correct: for X → Y, ΔH = 90 − 40 = +50 kJ, so for the reverse reaction Y → X, ΔH = −50 kJ, i.e. 50 kJ of heat is released. The correct statements are II and III.",
        "de": "Aus dem Diagramm: potentielle Energie des Edukts (X) 40 kJ, des aktivierten Komplexes 150 kJ, des Produkts (Y) 90 kJ. I ist falsch: Ea(hin) = 150 − 40 = 110 kJ; 150 kJ ist die potentielle Energie des aktivierten Komplexes, nicht die Aktivierungsenergie. II ist richtig: Ea(rück) = 150 − 90 = 60 kJ. III ist richtig: Für X → Y gilt ΔH = 90 − 40 = +50 kJ, für die Rückreaktion Y → X also ΔH = −50 kJ, d. h. es werden 50 kJ Wärme frei. Richtig sind II und III.",
        "fr": "Sur le graphique, l'énergie potentielle du réactif (X) vaut 40 kJ, celle du complexe activé 150 kJ et celle du produit (Y) 90 kJ. I est fausse : Ea(directe) = 150 − 40 = 110 kJ ; 150 kJ est l'énergie potentielle du complexe activé, pas l'énergie d'activation. II est correcte : Ea(inverse) = 150 − 90 = 60 kJ. III est correcte : pour X → Y, ΔH = 90 − 40 = +50 kJ, donc pour la réaction inverse Y → X, ΔH = −50 kJ : 50 kJ de chaleur sont libérés. Les affirmations correctes sont II et III.",
        "ru": "По графику потенциальная энергия реагента (X) равна 40 кДж, активированного комплекса — 150 кДж, продукта (Y) — 90 кДж. I неверно: Ea(прям) = 150 − 40 = 110 кДж; 150 кДж — это потенциальная энергия активированного комплекса, а не энергия активации. II верно: Ea(обр) = 150 − 90 = 60 кДж. III верно: для X → Y ΔH = 90 − 40 = +50 кДж, значит, для обратной реакции Y → X ΔH = −50 кДж, т. е. выделяется 50 кДж теплоты. Верны II и III.",
        "ar": "يُقرأ من الرسم أن الطاقة الكامنة للمتفاعل (X) هي 40 kJ، وللمعقد المنشط 150 kJ، وللناتج (Y) 90 kJ. العبارة I خاطئة: طاقة التنشيط الأمامية = 150 − 40 = 110 kJ، و150 kJ هي الطاقة الكامنة للمعقد المنشط لا طاقة التنشيط. العبارة II صحيحة: طاقة التنشيط العكسية = 150 − 90 = 60 kJ. العبارة III صحيحة: للتفاعل X → Y يكون ΔH = 90 − 40 = +50 kJ، فللتفاعل العكسي Y → X يكون ΔH = −50 kJ، أي تنطلق 50 kJ من الحرارة. العبارتان الصحيحتان هما II و III.",
        "zh": "由图读出反应物 (X) 的势能为 40 kJ，活化络合物为 150 kJ，生成物 (Y) 为 90 kJ。I 错误：正反应活化能 = 150 − 40 = 110 kJ，150 kJ 是活化络合物的势能，不是活化能。II 正确：逆反应活化能 = 150 − 90 = 60 kJ。III 正确：X → Y 的 ΔH = 90 − 40 = +50 kJ，所以逆反应 Y → X 的 ΔH = −50 kJ，即放出 50 kJ 热量。正确的是 II 和 III。",
        "ku": "Ji grafîkê enerjiya potansiyel a reaktantê (X) 40 kJ, ya kompleksa aktîvkirî 150 kJ, ya hilberê (Y) jî 90 kJ tê xwendin. I şaş e: Eai = 150 − 40 = 110 kJ; 150 kJ enerjiya potansiyel a kompleksa aktîvkirî ye, ne enerjiya aktîvasyonê ye. II rast e: Eag = 150 − 90 = 60 kJ. III rast e: ji bo X → Y ΔH = 90 − 40 = +50 kJ e, ji ber vê ji bo reaksiyona berevajî Y → X ΔH = −50 kJ e, yanî 50 kJ germ derdikeve. Gotinên rast II û III ne."
      },
      "figure": {
        "kind": "graph",
        "xLabel": {
          "tr": "Tepkime koordinatı",
          "en": "Reaction coordinate",
          "de": "Reaktionskoordinate",
          "fr": "Coordonnée de réaction",
          "ru": "Координата реакции",
          "ar": "إحداثي التفاعل",
          "zh": "反应进程",
          "ku": "Koordînata reaksiyonê"
        },
        "yLabel": {
          "tr": "Potansiyel enerji (kJ)",
          "en": "Potential energy (kJ)",
          "de": "Potentielle Energie (kJ)",
          "fr": "Énergie potentielle (kJ)",
          "ru": "Потенциальная энергия (кДж)",
          "ar": "الطاقة الكامنة (kJ)",
          "zh": "势能 (kJ)",
          "ku": "Enerjiya potansiyel (kJ)"
        },
        "xMax": 10,
        "yMax": 170,
        "yTicks": [
          40,
          90,
          150
        ],
        "series": [
          {
            "points": [
              [
                0,
                40
              ],
              [
                2,
                40
              ],
              [
                3,
                52
              ],
              [
                4,
                100
              ],
              [
                5,
                150
              ],
              [
                6,
                128
              ],
              [
                7,
                98
              ],
              [
                8,
                90
              ],
              [
                10,
                90
              ]
            ]
          }
        ],
        "markers": [
          {
            "x": 1,
            "y": 40,
            "label": "X(g)"
          },
          {
            "x": 9,
            "y": 90,
            "label": "Y(g)"
          },
          {
            "x": 5,
            "y": 150,
            "label": "",
            "guides": true
          }
        ]
      }
    },
    {
      "id": "u16-twin08",
      "stem": {
        "tr": "Aynı koşullarda gerçekleşen H2(g) + 1/2 O2(g) → H2O(g)  ΔH1; H2(g) + 1/2 O2(g) → H2O(s)  ΔH2; H2(g) + 1/2 O2(g) → H2O(k)  ΔH3 tepkimelerinin ΔH değerlerinin (işaretleriyle birlikte) büyükten küçüğe doğru sıralanışı aşağıdakilerden hangisidir?",
        "en": "For the reactions H2(g) + 1/2 O2(g) → H2O(g)  ΔH1; H2(g) + 1/2 O2(g) → H2O(l)  ΔH2; H2(g) + 1/2 O2(g) → H2O(s)  ΔH3, carried out under the same conditions, which is the order of the ΔH values (with their signs) from largest to smallest?",
        "de": "Für die unter gleichen Bedingungen ablaufenden Reaktionen H2(g) + 1/2 O2(g) → H2O(g)  ΔH1; H2(g) + 1/2 O2(g) → H2O(l)  ΔH2; H2(g) + 1/2 O2(g) → H2O(s)  ΔH3: Welche Reihenfolge der ΔH-Werte (mit Vorzeichen) vom größten zum kleinsten ist richtig?",
        "fr": "Pour les réactions H2(g) + 1/2 O2(g) → H2O(g)  ΔH1 ; H2(g) + 1/2 O2(g) → H2O(l)  ΔH2 ; H2(g) + 1/2 O2(g) → H2O(s)  ΔH3, réalisées dans les mêmes conditions, quel est l'ordre des valeurs de ΔH (avec leur signe) de la plus grande à la plus petite ?",
        "ru": "Реакции H2(г) + 1/2 O2(г) → H2O(г)  ΔH1; H2(г) + 1/2 O2(г) → H2O(ж)  ΔH2; H2(г) + 1/2 O2(г) → H2O(тв)  ΔH3 протекают в одинаковых условиях. В каком варианте значения ΔH (с учётом знака) расположены в порядке убывания?",
        "ar": "للتفاعلات H2(g) + 1/2 O2(g) → H2O(g)  ΔH1؛ H2(g) + 1/2 O2(g) → H2O(l)  ΔH2؛ H2(g) + 1/2 O2(g) → H2O(s)  ΔH3 التي تجري في الظروف نفسها، ما ترتيب قيم ΔH (مع إشاراتها) من الأكبر إلى الأصغر؟",
        "zh": "在相同条件下进行的反应 H2(g) + 1/2 O2(g) → H2O(g)  ΔH1；H2(g) + 1/2 O2(g) → H2O(l)  ΔH2；H2(g) + 1/2 O2(g) → H2O(s)  ΔH3，其 ΔH 值（连同符号）由大到小的顺序是哪一项？",
        "ku": "Reaksiyonên H2(g) + 1/2 O2(g) → H2O(g)  ΔH1; H2(g) + 1/2 O2(g) → H2O(l)  ΔH2; H2(g) + 1/2 O2(g) → H2O(s)  ΔH3 di heman şertan de pêk tên. Rêzkirina nirxên ΔH yên van reaksiyonan (bi nîşanên wan re) ji mezin ber bi piçûk kîjan e?"
      },
      "options": [
        {
          "tr": "ΔH3 > ΔH2 > ΔH1",
          "en": "ΔH3 > ΔH2 > ΔH1",
          "de": "ΔH3 > ΔH2 > ΔH1",
          "fr": "ΔH3 > ΔH2 > ΔH1",
          "ru": "ΔH3 > ΔH2 > ΔH1",
          "ar": "ΔH3 > ΔH2 > ΔH1",
          "zh": "ΔH3 > ΔH2 > ΔH1",
          "ku": "ΔH3 > ΔH2 > ΔH1"
        },
        {
          "tr": "ΔH1 = ΔH2 = ΔH3",
          "en": "ΔH1 = ΔH2 = ΔH3",
          "de": "ΔH1 = ΔH2 = ΔH3",
          "fr": "ΔH1 = ΔH2 = ΔH3",
          "ru": "ΔH1 = ΔH2 = ΔH3",
          "ar": "ΔH1 = ΔH2 = ΔH3",
          "zh": "ΔH1 = ΔH2 = ΔH3",
          "ku": "ΔH1 = ΔH2 = ΔH3"
        },
        {
          "tr": "ΔH2 > ΔH1 > ΔH3",
          "en": "ΔH2 > ΔH1 > ΔH3",
          "de": "ΔH2 > ΔH1 > ΔH3",
          "fr": "ΔH2 > ΔH1 > ΔH3",
          "ru": "ΔH2 > ΔH1 > ΔH3",
          "ar": "ΔH2 > ΔH1 > ΔH3",
          "zh": "ΔH2 > ΔH1 > ΔH3",
          "ku": "ΔH2 > ΔH1 > ΔH3"
        },
        {
          "tr": "ΔH1 > ΔH2 > ΔH3",
          "en": "ΔH1 > ΔH2 > ΔH3",
          "de": "ΔH1 > ΔH2 > ΔH3",
          "fr": "ΔH1 > ΔH2 > ΔH3",
          "ru": "ΔH1 > ΔH2 > ΔH3",
          "ar": "ΔH1 > ΔH2 > ΔH3",
          "zh": "ΔH1 > ΔH2 > ΔH3",
          "ku": "ΔH1 > ΔH2 > ΔH3"
        },
        {
          "tr": "ΔH3 > ΔH1 > ΔH2",
          "en": "ΔH3 > ΔH1 > ΔH2",
          "de": "ΔH3 > ΔH1 > ΔH2",
          "fr": "ΔH3 > ΔH1 > ΔH2",
          "ru": "ΔH3 > ΔH1 > ΔH2",
          "ar": "ΔH3 > ΔH1 > ΔH2",
          "zh": "ΔH3 > ΔH1 > ΔH2",
          "ku": "ΔH3 > ΔH1 > ΔH2"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Girenler aynıdır; fark yalnızca ürün olan suyun fiziksel hâlidir. Yoğuşma ve donma ekzotermik olduğundan entalpi gaz > sıvı > katı sırasıyla azalır. Üç tepkime de ekzotermiktir ve ürünün entalpisi düştükçe açığa çıkan ısı artar, ΔH daha negatif olur: ΔH3 en negatif, ΔH1 en az negatiftir. İşaretleriyle sıralama ΔH1 > ΔH2 > ΔH3'tür. Açığa çıkan ısı miktarına göre sıralayıp tersini seçmek ya da fiziksel hâlin ΔH'yi etkilemediğini düşünmek tipik hatadır.",
        "en": "The reactants are the same; the only difference is the physical state of the water formed. Since condensation and freezing are exothermic, enthalpy decreases in the order gas > liquid > solid. All three reactions are exothermic, and the lower the enthalpy of the product, the more heat is released and the more negative ΔH becomes: ΔH3 is the most negative, ΔH1 the least negative. With signs, the order is ΔH1 > ΔH2 > ΔH3. Ranking by the amount of heat released (the reverse order) or assuming the physical state does not affect ΔH are typical mistakes.",
        "de": "Die Edukte sind gleich; der Unterschied liegt nur im Aggregatzustand des gebildeten Wassers. Da Kondensation und Gefrieren exotherm sind, nimmt die Enthalpie in der Reihenfolge gasförmig > flüssig > fest ab. Alle drei Reaktionen sind exotherm; je niedriger die Enthalpie des Produkts, desto mehr Wärme wird frei und desto negativer ist ΔH: ΔH3 ist am negativsten, ΔH1 am wenigsten negativ. Mit Vorzeichen gilt ΔH1 > ΔH2 > ΔH3. Typische Fehler: nach der freigesetzten Wärmemenge ordnen (umgekehrte Reihenfolge) oder annehmen, der Aggregatzustand beeinflusse ΔH nicht.",
        "fr": "Les réactifs sont les mêmes ; seule diffère l'état physique de l'eau formée. Comme la liquéfaction et la solidification sont exothermiques, l'enthalpie diminue dans l'ordre gaz > liquide > solide. Les trois réactions sont exothermiques et plus l'enthalpie du produit est basse, plus la chaleur libérée est grande et plus ΔH est négatif : ΔH3 est le plus négatif, ΔH1 le moins négatif. Avec les signes, l'ordre est ΔH1 > ΔH2 > ΔH3. Classer selon la chaleur libérée (ordre inverse) ou croire que l'état physique n'influe pas sur ΔH sont des erreurs typiques.",
        "ru": "Реагенты одинаковы; различается только агрегатное состояние образующейся воды. Конденсация и замерзание экзотермичны, поэтому энтальпия уменьшается в ряду газ > жидкость > твёрдое вещество. Все три реакции экзотермические, и чем ниже энтальпия продукта, тем больше выделяется теплоты и тем более отрицательна ΔH: ΔH3 наиболее отрицательна, ΔH1 наименее отрицательна. С учётом знака: ΔH1 > ΔH2 > ΔH3. Типичные ошибки — расположить значения по количеству выделившейся теплоты и выбрать обратный порядок или считать, что агрегатное состояние не влияет на ΔH.",
        "ar": "المتفاعلات واحدة؛ والفرق فقط في الحالة الفيزيائية للماء الناتج. وبما أن التكاثف والتجمد طاردان للحرارة فإن المحتوى الحراري يقل بالترتيب غاز > سائل > صلب. التفاعلات الثلاثة طاردة للحرارة، وكلما قل المحتوى الحراري للناتج زادت الحرارة المنطلقة وأصبحت ΔH أكثر سالبية: ΔH3 الأكثر سالبية وΔH1 الأقل سالبية. مع الإشارات يكون الترتيب ΔH1 > ΔH2 > ΔH3. ومن الأخطاء الشائعة الترتيب حسب كمية الحرارة المنطلقة (الترتيب المعكوس) أو الظن أن الحالة الفيزيائية لا تؤثر في ΔH.",
        "zh": "反应物相同，区别只在于生成的水的物态。由于液化和凝固都放热，焓按气态 > 液态 > 固态的顺序减小。三个反应都放热，生成物的焓越低，放出的热量越多，ΔH 越负：ΔH3 最负，ΔH1 最不负。连同符号排列为 ΔH1 > ΔH2 > ΔH3。按放热多少排序（得到相反顺序）或认为物态不影响 ΔH 都是常见错误。",
        "ku": "Reaktant heman in; cudahî tenê rewşa fîzîkî ya ava ku wekî hilber çêdibe ye. Ji ber ku şilebûn û cemidîn ekzotermîk in, entalpî bi rêza gaz > şile > hişk kêm dibe. Her sê reaksiyon ekzotermîk in; çiqas entalpiya hilberê kêm bibe, ewqas germa ku derdikeve zêde dibe û ΔH negatîftir dibe: ΔH3 herî negatîf e, ΔH1 herî kêm negatîf e. Bi nîşanan rêzkirin ΔH1 > ΔH2 > ΔH3 e. Rêzkirina li gorî mîqdara germa derketî û hilbijartina rêza berevajî, an jî fikra ku rewşa fîzîkî bandorê li ΔH nake, şaşiyên tîpîk in."
      }
    },
    {
      "id": "u16-twin09",
      "stem": {
        "tr": "2H2(g) + O2(g) → 2H2O(s)  ΔH = −572 kJ. Kapalı bir kapta 4 g H2 ile 16 g O2 tam verimle tepkimeye giriyor. En fazla kaç kJ ısı açığa çıkar? (H = 1, O = 16)",
        "en": "2H2(g) + O2(g) → 2H2O(l)  ΔH = −572 kJ. In a closed container 4 g of H2 and 16 g of O2 react with complete yield. How many kJ of heat are released at most? (H = 1, O = 16)",
        "de": "2H2(g) + O2(g) → 2H2O(l)  ΔH = −572 kJ. In einem geschlossenen Gefäß reagieren 4 g H2 und 16 g O2 vollständig. Wie viel kJ Wärme werden höchstens frei? (H = 1, O = 16)",
        "fr": "2H2(g) + O2(g) → 2H2O(l)  ΔH = −572 kJ. Dans un récipient fermé, 4 g de H2 et 16 g de O2 réagissent avec un rendement total. Combien de kJ de chaleur sont libérés au maximum ? (H = 1, O = 16)",
        "ru": "2H2(г) + O2(г) → 2H2O(ж)  ΔH = −572 кДж. В закрытом сосуде 4 г H2 и 16 г O2 реагируют с выходом 100 %. Какое наибольшее количество теплоты (кДж) может выделиться? (H = 1, O = 16)",
        "ar": "2H2(g) + O2(g) → 2H2O(l)  ΔH = −572 kJ. في وعاء مغلق يتفاعل 4 g من H2 مع 16 g من O2 بمردود كامل. كم kJ من الحرارة تنطلق على الأكثر؟ (H = 1، O = 16)",
        "zh": "2H2(g) + O2(g) → 2H2O(l)  ΔH = −572 kJ。在密闭容器中 4 g H2 与 16 g O2 完全反应。最多放出多少 kJ 热量？(H = 1，O = 16)",
        "ku": "2H2(g) + O2(g) → 2H2O(l)  ΔH = −572 kJ. Di firaxeke girtî de 4 g H2 û 16 g O2 bi berhema tam dikevin reaksiyonê. Herî zêde çend kJ germ derdikeve? (H = 1, O = 16)"
      },
      "options": [
        {
          "tr": "71,5",
          "en": "71.5",
          "de": "71,5",
          "fr": "71,5",
          "ru": "71,5",
          "ar": "71.5",
          "zh": "71.5",
          "ku": "71,5"
        },
        {
          "tr": "143",
          "en": "143",
          "de": "143",
          "fr": "143",
          "ru": "143",
          "ar": "143",
          "zh": "143",
          "ku": "143"
        },
        {
          "tr": "286",
          "en": "286",
          "de": "286",
          "fr": "286",
          "ru": "286",
          "ar": "286",
          "zh": "286",
          "ku": "286"
        },
        {
          "tr": "572",
          "en": "572",
          "de": "572",
          "fr": "572",
          "ru": "572",
          "ar": "572",
          "zh": "572",
          "ku": "572"
        },
        {
          "tr": "1144",
          "en": "1144",
          "de": "1144",
          "fr": "1144",
          "ru": "1144",
          "ar": "1144",
          "zh": "1144",
          "ku": "1144"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "n(H2) = 4/2 = 2 mol, n(O2) = 16/32 = 0,5 mol. Denkleme göre 0,5 mol O2 ile 1 mol H2 tepkimeye girer; O2 sınırlayıcı bileşendir ve 1 mol H2 artar. 1 mol O2 harcandığında 572 kJ ısı açığa çıktığına göre 0,5 mol O2 için 0,5 × 572 = 286 kJ ısı açığa çıkar. H2'yi sınırlayıcı sanan 572 kJ, 2 mol H2'nin her molü için 572 kJ alan 1144 kJ bulur.",
        "en": "n(H2) = 4/2 = 2 mol, n(O2) = 16/32 = 0.5 mol. By the equation, 0.5 mol O2 reacts with 1 mol H2; O2 is the limiting reactant and 1 mol H2 is left over. Since 572 kJ is released per 1 mol O2 consumed, 0.5 mol O2 releases 0.5 × 572 = 286 kJ. Taking H2 as limiting gives 572 kJ; counting 572 kJ for each of the 2 mol H2 gives 1144 kJ.",
        "de": "n(H2) = 4/2 = 2 mol, n(O2) = 16/32 = 0,5 mol. Laut Gleichung reagieren 0,5 mol O2 mit 1 mol H2; O2 ist der limitierende Reaktant, 1 mol H2 bleibt übrig. Da pro verbrauchtem mol O2 572 kJ frei werden, setzen 0,5 mol O2 0,5 × 572 = 286 kJ frei. Wer H2 für limitierend hält, erhält 572 kJ; wer für jedes der 2 mol H2 572 kJ rechnet, 1144 kJ.",
        "fr": "n(H2) = 4/2 = 2 mol, n(O2) = 16/32 = 0,5 mol. D'après l'équation, 0,5 mol de O2 réagit avec 1 mol de H2 ; O2 est le réactif limitant et il reste 1 mol de H2. Comme 572 kJ sont libérés par mole de O2 consommée, 0,5 mol de O2 libère 0,5 × 572 = 286 kJ. Prendre H2 comme limitant donne 572 kJ ; compter 572 kJ pour chacune des 2 mol de H2 donne 1144 kJ.",
        "ru": "n(H2) = 4/2 = 2 моль, n(O2) = 16/32 = 0,5 моль. По уравнению 0,5 моль O2 реагирует с 1 моль H2; O2 — лимитирующий реагент, 1 моль H2 остаётся в избытке. На 1 моль израсходованного O2 выделяется 572 кДж, значит на 0,5 моль O2 — 0,5 × 572 = 286 кДж. Если считать лимитирующим H2, получится 572 кДж; если брать по 572 кДж на каждый из 2 моль H2 — 1144 кДж.",
        "ar": "n(H2) = 4/2 = 2 mol، n(O2) = 16/32 = 0.5 mol. وفق المعادلة يتفاعل 0.5 mol من O2 مع 1 mol من H2؛ فـ O2 هو المادة المحددة للتفاعل ويتبقى 1 mol من H2. وبما أن 572 kJ تنطلق لكل 1 mol من O2 مستهلك، فإن 0.5 mol من O2 تُطلق 0.5 × 572 = 286 kJ. من يعتبر H2 المادة المحددة للتفاعل يحصل على 572 kJ، ومن يحسب 572 kJ لكل مول من 2 mol من H2 يحصل على 1144 kJ.",
        "zh": "n(H2) = 4/2 = 2 mol，n(O2) = 16/32 = 0.5 mol。按方程式 0.5 mol O2 与 1 mol H2 反应；O2 是限量反应物，H2 剩余 1 mol。每消耗 1 mol O2 放出 572 kJ，故 0.5 mol O2 放出 0.5 × 572 = 286 kJ。误把 H2 当作限量反应物得 572 kJ；按 2 mol H2 每摩尔放出 572 kJ 计算得 1144 kJ。",
        "ku": "n(H2) = 4/2 = 2 mol, n(O2) = 16/32 = 0,5 mol. Li gorî hevkêşeyê 0,5 mol O2 bi 1 mol H2 re dikeve reaksiyonê; O2 reaktanta sînordar e û 1 mol H2 zêde dimîne. Ji ber ku dema 1 mol O2 tê xerckirin 572 kJ germ derdikeve, ji bo 0,5 mol O2 0,5 × 572 = 286 kJ germ derdikeve. Kesê ku H2 wekî reaktanta sînordar dihesibîne 572 kJ, kesê ku ji bo her molek ji 2 mol H2 572 kJ digire 1144 kJ dibîne."
      }
    },
    {
      "id": "u16-twin10",
      "stem": {
        "tr": "2H2(g) + O2(g) → 2H2O(g)  ΔH = −484 kJ. Bağ enerjileri H–H = 436 kJ/mol ve O=O = 498 kJ/mol olduğuna göre O–H bağının ortalama bağ enerjisi kaç kJ/mol'dür?",
        "en": "2H2(g) + O2(g) → 2H2O(g)  ΔH = −484 kJ. Given the bond energies H–H = 436 kJ/mol and O=O = 498 kJ/mol, what is the average bond energy of the O–H bond in kJ/mol?",
        "de": "2H2(g) + O2(g) → 2H2O(g)  ΔH = −484 kJ. Mit den Bindungsenergien H–H = 436 kJ/mol und O=O = 498 kJ/mol: Wie groß ist die mittlere Bindungsenergie der O–H-Bindung in kJ/mol?",
        "fr": "2H2(g) + O2(g) → 2H2O(g)  ΔH = −484 kJ. Sachant que les énergies de liaison sont H–H = 436 kJ/mol et O=O = 498 kJ/mol, quelle est l'énergie moyenne de la liaison O–H en kJ/mol ?",
        "ru": "2H2(г) + O2(г) → 2H2O(г)  ΔH = −484 кДж. Энергии связей: H–H — 436 кДж/моль, O=O — 498 кДж/моль. Чему равна средняя энергия связи O–H (кДж/моль)?",
        "ar": "2H2(g) + O2(g) → 2H2O(g)  ΔH = −484 kJ. إذا كانت طاقتا الرابطتين H–H = 436 kJ/mol وO=O = 498 kJ/mol، فكم يبلغ متوسط طاقة الرابطة O–H بوحدة kJ/mol؟",
        "zh": "2H2(g) + O2(g) → 2H2O(g)  ΔH = −484 kJ。已知键能 H–H = 436 kJ/mol，O=O = 498 kJ/mol，则 O–H 键的平均键能是多少 kJ/mol？",
        "ku": "2H2(g) + O2(g) → 2H2O(g)  ΔH = −484 kJ. Heke enerjiyên girêdanê H–H = 436 kJ/mol û O=O = 498 kJ/mol bin, enerjiya girêdanê ya navînî ya girêdana O–H çend kJ/mol e?"
      },
      "options": [
        {
          "tr": "221,5",
          "en": "221.5",
          "de": "221,5",
          "fr": "221,5",
          "ru": "221,5",
          "ar": "221.5",
          "zh": "221.5",
          "ku": "221,5"
        },
        {
          "tr": "354,5",
          "en": "354.5",
          "de": "354,5",
          "fr": "354,5",
          "ru": "354,5",
          "ar": "354.5",
          "zh": "354.5",
          "ku": "354,5"
        },
        {
          "tr": "463,5",
          "en": "463.5",
          "de": "463,5",
          "fr": "463,5",
          "ru": "463,5",
          "ar": "463.5",
          "zh": "463.5",
          "ku": "463,5"
        },
        {
          "tr": "927",
          "en": "927",
          "de": "927",
          "fr": "927",
          "ru": "927",
          "ar": "927",
          "zh": "927",
          "ku": "927"
        },
        {
          "tr": "1854",
          "en": "1854",
          "de": "1854",
          "fr": "1854",
          "ru": "1854",
          "ar": "1854",
          "zh": "1854",
          "ku": "1854"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "ΔH = Σ(kırılan) − Σ(oluşan). Kırılan bağlar: 2 H–H + 1 O=O = 2(436) + 498 = 1370 kJ. Oluşan bağlar: 2 H2O molekülünde 4 O–H bağı = 4x. −484 = 1370 − 4x → 4x = 1854 → x = 463,5 kJ/mol. Her su molekülünde iki O–H bağı olduğunu unutup 2x yazan 927, ΔH'yi pozitif alıp 4x = 1370 − 484 yazan 221,5 kJ/mol bulur.",
        "en": "ΔH = Σ(broken) − Σ(formed). Bonds broken: 2 H–H + 1 O=O = 2(436) + 498 = 1370 kJ. Bonds formed: 2 H2O molecules contain 4 O–H bonds = 4x. −484 = 1370 − 4x → 4x = 1854 → x = 463.5 kJ/mol. Forgetting that each water molecule has two O–H bonds (writing 2x) gives 927; taking ΔH as positive (4x = 1370 − 484) gives 221.5 kJ/mol.",
        "de": "ΔH = Σ(gespalten) − Σ(gebildet). Gespaltene Bindungen: 2 H–H + 1 O=O = 2(436) + 498 = 1370 kJ. Gebildete Bindungen: 2 H2O-Moleküle enthalten 4 O–H-Bindungen = 4x. −484 = 1370 − 4x → 4x = 1854 → x = 463,5 kJ/mol. Wer vergisst, dass jedes Wassermolekül zwei O–H-Bindungen hat (2x), erhält 927; wer ΔH positiv einsetzt (4x = 1370 − 484), 221,5 kJ/mol.",
        "fr": "ΔH = Σ(rompues) − Σ(formées). Liaisons rompues : 2 H–H + 1 O=O = 2(436) + 498 = 1370 kJ. Liaisons formées : 2 molécules de H2O contiennent 4 liaisons O–H = 4x. −484 = 1370 − 4x → 4x = 1854 → x = 463,5 kJ/mol. Oublier que chaque molécule d'eau possède deux liaisons O–H (écrire 2x) donne 927 ; prendre ΔH positif (4x = 1370 − 484) donne 221,5 kJ/mol.",
        "ru": "ΔH = Σ(разрываемых) − Σ(образующихся). Разрываются: 2 H–H + 1 O=O = 2(436) + 498 = 1370 кДж. Образуются: в 2 молекулах H2O 4 связи O–H = 4x. −484 = 1370 − 4x → 4x = 1854 → x = 463,5 кДж/моль. Если забыть, что в каждой молекуле воды две связи O–H, и написать 2x, получится 927; если взять ΔH положительной (4x = 1370 − 484) — 221,5 кДж/моль.",
        "ar": "ΔH = Σ(المكسورة) − Σ(المتكونة). الروابط المكسورة: 2 H–H + 1 O=O = 2(436) + 498 = 1370 kJ. الروابط المتكونة: في جزيئين من H2O توجد 4 روابط O–H = 4x. −484 = 1370 − 4x → 4x = 1854 → x = 463.5 kJ/mol. من ينسى أن في كل جزيء ماء رابطتين O–H ويكتب 2x يحصل على 927، ومن يأخذ ΔH موجبة (4x = 1370 − 484) يحصل على 221.5 kJ/mol.",
        "zh": "ΔH = Σ(断裂) − Σ(形成)。断裂的键：2 H–H + 1 O=O = 2(436) + 498 = 1370 kJ。形成的键：2 个 H2O 分子含 4 个 O–H 键 = 4x。−484 = 1370 − 4x → 4x = 1854 → x = 463.5 kJ/mol。忘记每个水分子有两个 O–H 键(写成 2x)得 927；把 ΔH 当作正值(4x = 1370 − 484)得 221.5 kJ/mol。",
        "ku": "ΔH = Σ(şikestî) − Σ(çêbûyî). Girêdanên şikestî: 2 H–H + 1 O=O = 2(436) + 498 = 1370 kJ. Girêdanên çêbûyî: di 2 molekulên H2O de 4 girêdanên O–H = 4x. −484 = 1370 − 4x → 4x = 1854 → x = 463,5 kJ/mol. Kesê ku ji bîr dike ku di her molekula avê de du girêdanên O–H hene û 2x dinivîse 927, kesê ku ΔH erênî digire û 4x = 1370 − 484 dinivîse 221,5 kJ/mol dibîne."
      }
    },
    {
      "id": "u16-twin11",
      "stem": {
        "tr": "Spor yaralanmalarında kullanılan anlık soğuk paketlerde, paket bükülünce içindeki katı NH4NO3 su ile karışıp çözünür ve paket birkaç dakika içinde belirgin şekilde soğur. Bu olayla ilgili aşağıdakilerden hangisi doğrudur?",
        "en": "In instant cold packs used for sports injuries, bending the pack lets the solid NH4NO3 inside mix with water and dissolve, and the pack becomes noticeably cold within a few minutes. Which of the following about this process is correct?",
        "de": "In Sofort-Kühlkompressen für Sportverletzungen löst sich beim Knicken der Packung das feste NH4NO3 im Wasser, und die Packung wird innerhalb weniger Minuten deutlich kalt. Welche Aussage über diesen Vorgang ist richtig?",
        "fr": "Dans les poches de froid instantané utilisées pour les blessures sportives, quand on plie la poche, le NH4NO3 solide se mélange à l'eau et se dissout, et la poche devient nettement froide en quelques minutes. Laquelle des affirmations suivantes sur ce phénomène est correcte ?",
        "ru": "В охлаждающих пакетах мгновенного действия, которые применяют при спортивных травмах, при сгибании пакета твёрдый NH4NO3 смешивается с водой и растворяется, и через несколько минут пакет заметно охлаждается. Какое утверждение об этом процессе верно?",
        "ar": "في أكياس التبريد الفوري المستخدمة لإصابات الرياضة، عند ثني الكيس يختلط NH4NO3 الصلب بالماء ويذوب، فيبرد الكيس بوضوح خلال دقائق. أي مما يأتي صحيح بشأن هذه العملية؟",
        "zh": "运动损伤用的速冷冰袋，弯折后袋内固体 NH4NO3 与水混合并溶解，几分钟内冰袋明显变冷。关于这一过程，下列说法正确的是哪一项？",
        "ku": "Di pakêtên sar ên tavilê de ku ji bo birînên werzişê tên bikaranîn, dema pakêt tê badan NH4NO3 ya hişk a tê de bi avê re tevlihev dibe û dihele, û pakêt di çend deqeyan de bi awayekî diyar sar dibe. Derbarê vê bûyerê de kîjan ji van rast e?"
      },
      "options": [
        {
          "tr": "Çözünme endotermiktir; gereken ısı paketin temas ettiği ortamdan (örneğin ciltten) alınır.",
          "en": "The dissolution is endothermic; the heat it needs is taken from whatever the pack touches (for example the skin).",
          "de": "Das Lösen ist endotherm; die benötigte Wärme wird der Umgebung entzogen, die die Packung berührt (z. B. der Haut).",
          "fr": "La dissolution est endothermique ; la chaleur nécessaire est prise au milieu en contact avec la poche (par exemple la peau).",
          "ru": "Растворение эндотермическое; необходимая теплота забирается из среды, с которой соприкасается пакет (например, у кожи).",
          "ar": "الذوبان ماص للحرارة؛ والحرارة اللازمة تؤخذ من الوسط الملامس للكيس (كالجلد مثلًا).",
          "zh": "溶解是吸热过程，所需热量取自与冰袋接触的环境（例如皮肤）。",
          "ku": "Helbûn endotermîk e; germa pêwîst ji derdora ku pakêt pê ve dikeve (mînak ji çerm) tê girtin."
        },
        {
          "tr": "Çözünme ekzotermiktir; açığa çıkan ısı paketin dışına yayıldığı için paket soğur.",
          "en": "The dissolution is exothermic; the pack cools because the released heat spreads out of it.",
          "de": "Das Lösen ist exotherm; die Packung kühlt ab, weil die freigesetzte Wärme nach außen abgegeben wird.",
          "fr": "La dissolution est exothermique ; la poche se refroidit parce que la chaleur libérée s'en échappe.",
          "ru": "Растворение экзотермическое; пакет охлаждается, потому что выделившаяся теплота уходит наружу.",
          "ar": "الذوبان طارد للحرارة؛ ويبرد الكيس لأن الحرارة المنطلقة تنتشر إلى خارجه.",
          "zh": "溶解是放热过程，放出的热量散发到袋外，所以冰袋变冷。",
          "ku": "Helbûn ekzotermîk e; ji ber ku germa derdikeve li derveyî pakêtê belav dibe, pakêt sar dibe."
        },
        {
          "tr": "Bu çözünme olayının ΔH değeri sıfırdan küçüktür.",
          "en": "The ΔH of this dissolution is less than zero.",
          "de": "Das ΔH dieses Lösevorgangs ist kleiner als null.",
          "fr": "Le ΔH de cette dissolution est inférieur à zéro.",
          "ru": "ΔH этого процесса растворения меньше нуля.",
          "ar": "قيمة ΔH لعملية الذوبان هذه أقل من الصفر.",
          "zh": "该溶解过程的 ΔH 小于零。",
          "ku": "Nirxa ΔH ya vê bûyera helbûnê ji sifirê piçûktir e."
        },
        {
          "tr": "Oluşan çözeltinin toplam entalpisi, NH4NO3 ve suyun başlangıçtaki toplam entalpisinden düşüktür.",
          "en": "The total enthalpy of the resulting solution is lower than the initial total enthalpy of NH4NO3 and water.",
          "de": "Die Gesamtenthalpie der entstandenen Lösung ist kleiner als die anfängliche Gesamtenthalpie von NH4NO3 und Wasser.",
          "fr": "L'enthalpie totale de la solution obtenue est inférieure à l'enthalpie totale initiale de NH4NO3 et de l'eau.",
          "ru": "Суммарная энтальпия полученного раствора меньше исходной суммарной энтальпии NH4NO3 и воды.",
          "ar": "المحتوى الحراري الكلي للمحلول الناتج أقل من المحتوى الحراري الكلي الابتدائي لـ NH4NO3 والماء.",
          "zh": "所得溶液的总焓低于 NH4NO3 和水起始时的总焓。",
          "ku": "Entalpiya giştî ya çareseriya çêbûyî ji entalpiya giştî ya destpêkê ya NH4NO3 û avê kêmtir e."
        },
        {
          "tr": "Soğuma paketteki suyun buharlaşmasından kaynaklanır; çözünmede enerji alışverişi olmaz.",
          "en": "The cooling is due to evaporation of the water in the pack; no energy is exchanged in the dissolution.",
          "de": "Die Abkühlung beruht auf der Verdunstung des Wassers in der Packung; beim Lösen findet kein Energieaustausch statt.",
          "fr": "Le refroidissement est dû à l'évaporation de l'eau de la poche ; la dissolution ne s'accompagne d'aucun échange d'énergie.",
          "ru": "Охлаждение вызвано испарением воды в пакете; при растворении обмена энергией нет.",
          "ar": "التبريد ناتج عن تبخر الماء داخل الكيس؛ ولا يحدث تبادل للطاقة أثناء الذوبان.",
          "zh": "变冷是袋内的水蒸发造成的，溶解过程中没有能量交换。",
          "ku": "Sarbûn ji buharbûna ava di pakêtê de tê; di helbûnê de guhertina enerjiyê çênabe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Paketin soğuması, sistemin (NH4NO3 + su) çözünme için gereken ısıyı çevresinden aldığını gösterir; olay endotermiktir ve ΔH > 0'dır. Bu yüzden ürünün (çözeltinin) entalpisi girenlerinkinden yüksektir. Isı açığa çıksaydı paket soğumaz, ısınırdı (anlık sıcak paketlerde olduğu gibi). Kapalı pakette soğumanın kaynağı buharlaşma değil, çözünme olayının kendisidir.",
        "en": "The pack getting cold shows that the system (NH4NO3 + water) takes the heat needed for dissolving from its surroundings; the process is endothermic and ΔH > 0. Hence the enthalpy of the product (the solution) is higher than that of the reactants. If heat were released the pack would warm up, as in instant hot packs, not cool down. In the sealed pack the cooling comes from the dissolution itself, not from evaporation.",
        "de": "Dass die Packung kalt wird, zeigt, dass das System (NH4NO3 + Wasser) die zum Lösen nötige Wärme der Umgebung entzieht; der Vorgang ist endotherm, ΔH > 0. Daher ist die Enthalpie des Produkts (der Lösung) höher als die der Ausgangsstoffe. Würde Wärme frei, würde die Packung warm statt kalt (wie bei Sofort-Wärmekissen). In der geschlossenen Packung stammt die Abkühlung vom Lösevorgang selbst, nicht von Verdunstung.",
        "fr": "Le refroidissement de la poche montre que le système (NH4NO3 + eau) prend au milieu la chaleur nécessaire à la dissolution ; le phénomène est endothermique et ΔH > 0. L'enthalpie du produit (la solution) est donc supérieure à celle des réactifs. Si de la chaleur était libérée, la poche se réchaufferait, comme les poches de chaleur instantanée. Dans la poche fermée, le froid provient de la dissolution elle-même et non d'une évaporation.",
        "ru": "Охлаждение пакета показывает, что система (NH4NO3 + вода) забирает необходимую для растворения теплоту из окружающей среды; процесс эндотермический, ΔH > 0. Поэтому энтальпия продукта (раствора) выше, чем у исходных веществ. Если бы теплота выделялась, пакет не охлаждался бы, а нагревался (как грелки мгновенного действия). В закрытом пакете охлаждение вызывает само растворение, а не испарение.",
        "ar": "برودة الكيس تدل على أن النظام (NH4NO3 + الماء) يأخذ الحرارة اللازمة للذوبان من الوسط المحيط؛ فالعملية ماصة للحرارة وΔH > 0. لذلك يكون المحتوى الحراري للناتج (المحلول) أعلى من المتفاعلات. ولو انطلقت حرارة لسخن الكيس بدل أن يبرد، كما في أكياس التدفئة الفورية. وفي الكيس المغلق يكون مصدر التبريد عملية الذوبان نفسها لا التبخر.",
        "zh": "冰袋变冷说明体系(NH4NO3 + 水)从环境中吸收溶解所需的热量；该过程吸热，ΔH > 0。因此生成物（溶液）的焓高于反应物。若放出热量，冰袋会变热（如速热暖袋），而不是变冷。在密封袋中，变冷来自溶解本身，而不是蒸发。",
        "ku": "Sarbûna pakêtê nîşan dide ku sîstem (NH4NO3 + av) germa ku ji bo helbûnê pêwîst e ji derdora xwe digire; bûyer endotermîk e û ΔH > 0 e. Ji ber vê yekê entalpiya hilberê (çareseriyê) ji ya reaktantan bilindtir e. Heke germ derketa, pakêt sar nedibû, germ dibû (wekî di pakêtên germ ên tavilê de). Di pakêta girtî de çavkaniya sarbûnê ne buharbûn e, lê bûyera helbûnê bi xwe ye."
      }
    },
    {
      "id": "u16-twin12",
      "stem": {
        "tr": "Bazı bağların ortalama bağ enerjileri H–F: 567 kJ/mol, H–Cl: 431 kJ/mol, H–Br: 366 kJ/mol'dür. Bu bağlarla ilgili; I. Bu üç bağ arasında en sağlam bağ H–F bağıdır. II. 1 mol HBr(g)'yi gaz hâlindeki H ve Br atomlarına ayırmak için 366 kJ enerji gerekir. III. H(g) + Cl(g) → HCl(g) olayı endotermiktir. yargılarından hangileri doğrudur?",
        "en": "The average bond energies of some bonds are H–F: 567 kJ/mol, H–Cl: 431 kJ/mol, H–Br: 366 kJ/mol. Which of the statements I. Of these three bonds, the strongest is the H–F bond. II. 366 kJ of energy is needed to separate 1 mol of HBr(g) into gaseous H and Br atoms. III. The process H(g) + Cl(g) → HCl(g) is endothermic. are correct?",
        "de": "Die mittleren Bindungsenergien einiger Bindungen sind H–F: 567 kJ/mol, H–Cl: 431 kJ/mol, H–Br: 366 kJ/mol. Welche der Aussagen I. Von diesen drei Bindungen ist die H–F-Bindung die stärkste. II. Um 1 mol HBr(g) in gasförmige H- und Br-Atome zu zerlegen, sind 366 kJ nötig. III. Der Vorgang H(g) + Cl(g) → HCl(g) ist endotherm. sind richtig?",
        "fr": "Les énergies moyennes de quelques liaisons sont H–F : 567 kJ/mol, H–Cl : 431 kJ/mol, H–Br : 366 kJ/mol. Parmi les affirmations I. Des trois liaisons, la plus solide est la liaison H–F. II. Il faut 366 kJ pour séparer 1 mol de HBr(g) en atomes H et Br gazeux. III. Le processus H(g) + Cl(g) → HCl(g) est endothermique. lesquelles sont correctes ?",
        "ru": "Средние энергии некоторых связей: H–F — 567 кДж/моль, H–Cl — 431 кДж/моль, H–Br — 366 кДж/моль. Какие из утверждений верны? I. Из этих трёх связей самая прочная — H–F. II. Чтобы разложить 1 моль HBr(г) на атомы H и Br в газовой фазе, нужно 366 кДж. III. Процесс H(г) + Cl(г) → HCl(г) эндотермический.",
        "ar": "متوسطات طاقات بعض الروابط: H–F: 567 kJ/mol، H–Cl: 431 kJ/mol، H–Br: 366 kJ/mol. أيّ العبارات الآتية صحيحة؟ I. أقوى هذه الروابط الثلاث هي الرابطة H–F. II. يلزم 366 kJ لفصل 1 mol من HBr(g) إلى ذرات H وBr غازية. III. العملية H(g) + Cl(g) → HCl(g) ماصة للحرارة.",
        "zh": "一些化学键的平均键能为 H–F 567 kJ/mol、H–Cl 431 kJ/mol、H–Br 366 kJ/mol。有下列说法：I. 三种键中最牢固的是 H–F 键。II. 将 1 mol HBr(g) 分解为气态 H 原子和 Br 原子需要 366 kJ 能量。III. 过程 H(g) + Cl(g) → HCl(g) 是吸热的。其中正确的是哪些？",
        "ku": "Enerjiyên girêdanê yên navînî yên hin girêdanan ev in: H–F: 567 kJ/mol, H–Cl: 431 kJ/mol, H–Br: 366 kJ/mol. Kîjan ji van gotinan rast in? I. Di nav van sê girêdanan de girêdana herî xurt H–F ye. II. Ji bo ku 1 mol HBr(g) bibe atomên H û Br ên di rewşa gaz de, 366 kJ enerjî pêwîst e. III. Bûyera H(g) + Cl(g) → HCl(g) endotermîk e."
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
        "tr": "Bağ enerjisi büyüdükçe bağı kırmak zorlaşır; en büyük değer H–F'ye ait olduğundan en sağlam bağ odur, I doğrudur. Bağ enerjisi, gaz hâlindeki 1 mol bağı kırıp atomlara ayırmak için gereken enerjidir; II doğrudur. III'te bağ kırılmıyor, oluşuyor; bağ oluşumu ısı veren bir olaydır ve 431 kJ açığa çıkar, yani olay ekzotermiktir; III yanlıştır.",
        "en": "The larger the bond energy, the harder the bond is to break; H–F has the largest value, so it is the strongest bond: I is true. Bond energy is the energy needed to break 1 mol of a bond in the gas phase into atoms: II is true. In III a bond is formed, not broken; bond formation releases heat (431 kJ), so the process is exothermic: III is false.",
        "de": "Je größer die Bindungsenergie, desto schwerer lässt sich die Bindung spalten; H–F hat den größten Wert und ist daher am stärksten: I ist richtig. Die Bindungsenergie ist die Energie, die nötig ist, um 1 mol einer Bindung in der Gasphase in Atome zu spalten: II ist richtig. In III wird eine Bindung gebildet, nicht gespalten; Bindungsbildung setzt Wärme frei (431 kJ), der Vorgang ist exotherm: III ist falsch.",
        "fr": "Plus l'énergie de liaison est grande, plus la liaison est difficile à rompre ; H–F a la plus grande valeur, c'est donc la plus solide : I est vraie. L'énergie de liaison est l'énergie nécessaire pour rompre 1 mol d'une liaison en phase gazeuse en atomes : II est vraie. En III une liaison se forme au lieu de se rompre ; la formation d'une liaison libère de la chaleur (431 kJ), le processus est exothermique : III est fausse.",
        "ru": "Чем больше энергия связи, тем труднее её разорвать; наибольшее значение у H–F, значит, это самая прочная связь — I верно. Энергия связи — энергия, необходимая для разрыва 1 моль связей в газовой фазе с образованием атомов, — II верно. В III связь не разрывается, а образуется; образование связи сопровождается выделением теплоты (431 кДж), процесс экзотермический — III неверно.",
        "ar": "كلما زادت طاقة الرابطة صعب كسرها؛ وأكبر قيمة للرابطة H–F فهي الأقوى، فالعبارة I صحيحة. طاقة الرابطة هي الطاقة اللازمة لكسر 1 mol من الرابطة في الحالة الغازية إلى ذرات، فالعبارة II صحيحة. في III تتكوّن رابطة ولا تنكسر؛ وتكوّن الرابطة يُطلق حرارة (431 kJ) فالعملية طاردة للحرارة، والعبارة III خاطئة.",
        "zh": "键能越大，键越难断裂；H–F 的键能最大，是最牢固的键，I 正确。键能是在气态下把 1 mol 化学键断开成原子所需的能量，II 正确。III 中是成键而不是断键，成键放出热量(431 kJ)，该过程放热，III 错误。",
        "ku": "Çiqas enerjiya girêdanê mezin bibe, şikandina girêdanê ewqas dijwar dibe; ji ber ku nirxa herî mezin ya H–F ye, girêdana herî xurt ew e: I rast e. Enerjiya girêdanê ew enerjî ye ku ji bo şikandina 1 mol girêdanê di rewşa gaz de û veqetandina wê bo atoman pêwîst e: II rast e. Di III de girêdan naşikê, çêdibe; çêbûna girêdanê bûyereke germdayî ye û 431 kJ derdikeve, ango bûyer ekzotermîk e: III şaş e."
      }
    },
    {
      "id": "u16-twin13",
      "stem": {
        "tr": "Aşağıdaki tepkimelerden hangisinin 25 °C ve 1 atm'deki entalpi değişimi, ürünün standart molar oluşum entalpisine eşittir?",
        "en": "For which of the following reactions is the enthalpy change at 25 °C and 1 atm equal to the standard molar enthalpy of formation of the product?",
        "de": "Bei welcher der folgenden Reaktionen ist die Enthalpieänderung bei 25 °C und 1 atm gleich der molaren Standardbildungsenthalpie des Produkts?",
        "fr": "Pour laquelle des réactions suivantes la variation d'enthalpie à 25 °C et 1 atm est-elle égale à l'enthalpie molaire standard de formation du produit ?",
        "ru": "Для какой из следующих реакций изменение энтальпии при 25 °C и 1 атм равно стандартной молярной энтальпии образования продукта?",
        "ar": "أي التفاعلات الآتية يساوي التغير في محتواه الحراري عند 25 °C و1 atm المحتوى الحراري المولي القياسي لتكوين الناتج؟",
        "zh": "下列哪个反应在 25 °C、1 atm 下的焓变等于生成物的标准摩尔生成焓？",
        "ku": "Li 25 °C û 1 atm, guherîna entalpiyê ya kîjan ji van reaksiyonan wekhevî entalpiya çêbûnê ya molî ya standard a hilberê ye?"
      },
      "options": [
        {
          "tr": "2H2(g) + O2(g) → 2H2O(s)",
          "en": "2H2(g) + O2(g) → 2H2O(l)",
          "de": "2H2(g) + O2(g) → 2H2O(l)",
          "fr": "2H2(g) + O2(g) → 2H2O(l)",
          "ru": "2H2(g) + O2(g) → 2H2O(l)",
          "ar": "2H2(g) + O2(g) → 2H2O(l)",
          "zh": "2H2(g) + O2(g) → 2H2O(l)",
          "ku": "2H2(g) + O2(g) → 2H2O(l)"
        },
        {
          "tr": "C(elmas) + O2(g) → CO2(g)",
          "en": "C(diamond) + O2(g) → CO2(g)",
          "de": "C(Diamant) + O2(g) → CO2(g)",
          "fr": "C(diamant) + O2(g) → CO2(g)",
          "ru": "C(алмаз) + O2(г) → CO2(г)",
          "ar": "C(الماس) + O2(g) → CO2(g)",
          "zh": "C(金刚石) + O2(g) → CO2(g)",
          "ku": "C(elmas) + O2(g) → CO2(g)"
        },
        {
          "tr": "CO(g) + 1/2 O2(g) → CO2(g)",
          "en": "CO(g) + 1/2 O2(g) → CO2(g)",
          "de": "CO(g) + 1/2 O2(g) → CO2(g)",
          "fr": "CO(g) + 1/2 O2(g) → CO2(g)",
          "ru": "CO(g) + 1/2 O2(g) → CO2(g)",
          "ar": "CO(g) + 1/2 O2(g) → CO2(g)",
          "zh": "CO(g) + 1/2 O2(g) → CO2(g)",
          "ku": "CO(g) + 1/2 O2(g) → CO2(g)"
        },
        {
          "tr": "Na(g) + 1/2 Cl2(g) → NaCl(k)",
          "en": "Na(g) + 1/2 Cl2(g) → NaCl(s)",
          "de": "Na(g) + 1/2 Cl2(g) → NaCl(s)",
          "fr": "Na(g) + 1/2 Cl2(g) → NaCl(s)",
          "ru": "Na(g) + 1/2 Cl2(g) → NaCl(s)",
          "ar": "Na(g) + 1/2 Cl2(g) → NaCl(s)",
          "zh": "Na(g) + 1/2 Cl2(g) → NaCl(s)",
          "ku": "Na(g) + 1/2 Cl2(g) → NaCl(s)"
        },
        {
          "tr": "C(grafit) + 2H2(g) → CH4(g)",
          "en": "C(graphite) + 2H2(g) → CH4(g)",
          "de": "C(Graphit) + 2H2(g) → CH4(g)",
          "fr": "C(graphite) + 2H2(g) → CH4(g)",
          "ru": "C(графит) + 2H2(г) → CH4(г)",
          "ar": "C(جرافيت) + 2H2(g) → CH4(g)",
          "zh": "C(石墨) + 2H2(g) → CH4(g)",
          "ku": "C(grafît) + 2H2(g) → CH4(g)"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Standart oluşum tepkimesinde 1 mol bileşik, elementlerin 25 °C ve 1 atm'deki en kararlı hâllerinden oluşmalıdır. C(grafit) ve H2(g) en kararlı hâllerdir ve 1 mol CH4 oluşur; bu tepkimenin ΔH'si ΔHf°(CH4)'tür. 2 mol H2O oluşan tepkimenin ΔH'si oluşum entalpisinin 2 katıdır; elmas karbonun en kararlı allotropu değildir; CO bir bileşiktir, element değildir; sodyum 25 °C'de katıdır, Na(g) en kararlı hâl değildir.",
        "en": "In a standard formation reaction 1 mol of compound must form from the elements in their most stable states at 25 °C and 1 atm. C(graphite) and H2(g) are the most stable states and 1 mol CH4 forms, so this ΔH is ΔHf°(CH4). The reaction forming 2 mol H2O has twice the enthalpy of formation; diamond is not carbon's most stable allotrope; CO is a compound, not an element; sodium is solid at 25 °C, so Na(g) is not its most stable state.",
        "de": "Bei einer Standardbildungsreaktion muss 1 mol Verbindung aus den Elementen in ihrem stabilsten Zustand bei 25 °C und 1 atm entstehen. C(Graphit) und H2(g) sind die stabilsten Zustände, und es entsteht 1 mol CH4; dieses ΔH ist ΔHf°(CH4). Die Reaktion mit 2 mol H2O hat die doppelte Bildungsenthalpie; Diamant ist nicht das stabilste Allotrop des Kohlenstoffs; CO ist eine Verbindung, kein Element; Natrium ist bei 25 °C fest, Na(g) ist nicht sein stabilster Zustand.",
        "fr": "Dans une réaction standard de formation, 1 mol de composé doit se former à partir des corps simples dans leur état le plus stable à 25 °C et 1 atm. C(graphite) et H2(g) sont les états les plus stables et il se forme 1 mol de CH4 : ce ΔH est ΔHf°(CH4). La réaction formant 2 mol de H2O correspond au double de l'enthalpie de formation ; le diamant n'est pas l'allotrope le plus stable du carbone ; CO est un composé, pas un corps simple ; le sodium est solide à 25 °C, Na(g) n'est pas son état le plus stable.",
        "ru": "В стандартной реакции образования 1 моль соединения должен получаться из простых веществ в их наиболее устойчивом при 25 °C и 1 атм состоянии. C(графит) и H2(г) — наиболее устойчивые состояния, и образуется 1 моль CH4, поэтому ΔH этой реакции равна ΔHf°(CH4). ΔH реакции с образованием 2 моль H2O вдвое больше энтальпии образования; алмаз — не самая устойчивая аллотропная модификация углерода; CO — сложное вещество, а не простое; натрий при 25 °C твёрдый, поэтому Na(г) — не его устойчивое состояние.",
        "ar": "في تفاعل التكوين القياسي يجب أن يتكوّن 1 mol من المركب من العناصر في أكثر حالاتها استقرارًا عند 25 °C و1 atm. الجرافيت وH2(g) هما الحالتان الأكثر استقرارًا ويتكوّن 1 mol من CH4، فتكون ΔH لهذا التفاعل هي ΔHf°(CH4). التفاعل الذي يكوّن 2 mol من H2O قيمته ضعف المحتوى الحراري للتكوين؛ والماس ليس أكثر متآصلات الكربون استقرارًا؛ وCO مركب لا عنصر؛ والصوديوم صلب عند 25 °C فـ Na(g) ليست حالته الأكثر استقرارًا.",
        "zh": "标准生成反应要求由处于 25 °C、1 atm 下最稳定状态的单质生成 1 mol 化合物。石墨和 H2(g) 都是最稳定状态，且生成 1 mol CH4，所以该 ΔH 就是 ΔHf°(CH4)。生成 2 mol H2O 的反应焓变是生成焓的 2 倍；金刚石不是碳最稳定的同素异形体；CO 是化合物而非单质；钠在 25 °C 为固态，Na(g) 不是其最稳定状态。",
        "ku": "Di reaksiyona çêbûnê ya standard de divê 1 mol pêkhate ji rewşên herî stabîl ên elementan li 25 °C û 1 atm çêbibe. C(grafît) û H2(g) rewşên herî stabîl in û 1 mol CH4 çêdibe; ΔH ya vê reaksiyonê ΔHf°(CH4) e. ΔH ya reaksiyona ku 2 mol H2O çêdike du qatê entalpiya çêbûnê ye; elmas allotropa herî stabîl a karbonê nîne; CO pêkhate ye, ne element e; sodyûm li 25 °C hişk e, Na(g) ne rewşa wê ya herî stabîl e."
      }
    },
    {
      "id": "u16-twin14",
      "stem": {
        "tr": "Bir deney tüpünde iki çözelti karıştırıldığında tepkime gerçekleşiyor ve tüpü tutan öğrenci tüpün belirgin şekilde ısındığını hissediyor. Bu tepkime için, I. ΔH < 0'dır. II. Kırılan bağların toplam enerjisi oluşan bağların toplam enerjisinden büyüktür. III. İleri tepkimenin aktifleşme enerjisi geri tepkimeninkinden küçüktür. yargılarından hangileri doğrudur?",
        "en": "When two solutions are mixed in a test tube a reaction takes place, and the student holding the tube feels it become noticeably warm. For this reaction, which of the statements I. ΔH < 0. II. The total energy of the bonds broken is greater than that of the bonds formed. III. The activation energy of the forward reaction is smaller than that of the reverse reaction. are correct?",
        "de": "Beim Mischen zweier Lösungen in einem Reagenzglas läuft eine Reaktion ab, und die Schülerin, die das Glas hält, spürt, dass es deutlich warm wird. Welche der Aussagen I. ΔH < 0. II. Die Gesamtenergie der gespaltenen Bindungen ist größer als die der gebildeten Bindungen. III. Die Aktivierungsenergie der Hinreaktion ist kleiner als die der Rückreaktion. sind für diese Reaktion richtig?",
        "fr": "Lorsqu'on mélange deux solutions dans un tube à essai, une réaction a lieu et l'élève qui tient le tube le sent nettement se réchauffer. Pour cette réaction, parmi les affirmations I. ΔH < 0. II. L'énergie totale des liaisons rompues est supérieure à celle des liaisons formées. III. L'énergie d'activation de la réaction directe est inférieure à celle de la réaction inverse. lesquelles sont correctes ?",
        "ru": "При смешивании двух растворов в пробирке протекает реакция, и ученик, держащий пробирку, чувствует, что она заметно нагрелась. Какие из утверждений об этой реакции верны? I. ΔH < 0. II. Суммарная энергия разрываемых связей больше суммарной энергии образующихся связей. III. Энергия активации прямой реакции меньше, чем обратной.",
        "ar": "عند مزج محلولين في أنبوب اختبار يحدث تفاعل، ويشعر الطالب الذي يمسك الأنبوب بأنه سخن بوضوح. بالنسبة لهذا التفاعل، أيّ العبارات الآتية صحيحة؟ I. ΔH < 0. II. الطاقة الكلية للروابط المكسورة أكبر من الطاقة الكلية للروابط المتكونة. III. طاقة تنشيط التفاعل الأمامي أصغر من طاقة تنشيط التفاعل العكسي.",
        "zh": "在试管中混合两种溶液时发生反应，握着试管的学生感到试管明显变热。对于该反应，有下列说法：I. ΔH < 0。II. 断裂的键的总能量大于形成的键的总能量。III. 正反应的活化能小于逆反应的活化能。其中正确的是哪些？",
        "ku": "Dema di lûleya ceribandinê de du çareserî tên tevlihevkirin reaksiyonek pêk tê, û xwendekarê ku lûleyê digire hîs dike ku lûle bi awayekî diyar germ dibe. Ji bo vê reaksiyonê kîjan ji van gotinan rast in? I. ΔH < 0 e. II. Enerjiya giştî ya girêdanên şikestî ji enerjiya giştî ya girêdanên çêbûyî mezintir e. III. Enerjiya aktîvasyonê ya reaksiyona pêşve ji ya reaksiyona paşve piçûktir e."
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
      "correctIndex": 3,
      "explanation": {
        "tr": "Tüpün ısınması tepkimenin ortama ısı verdiğini, yani ekzotermik olduğunu gösterir: ΔH < 0, I doğrudur. ΔH = Σ(kırılan) − Σ(oluşan) negatif olduğuna göre oluşan bağların toplam enerjisi kırılanlarınkinden büyüktür; II yanlıştır. ΔH = Eai − Eag < 0 olduğundan Eai < Eag'dir; III doğrudur.",
        "en": "The tube warming up shows the reaction gives off heat, i.e. it is exothermic: ΔH < 0, so I is true. Since ΔH = Σ(broken) − Σ(formed) is negative, the bonds formed have more total energy than those broken: II is false. Since ΔH = Eai − Eag < 0, Eai < Eag: III is true.",
        "de": "Dass das Glas warm wird, zeigt, dass die Reaktion Wärme abgibt, also exotherm ist: ΔH < 0, I ist richtig. Da ΔH = Σ(gespalten) − Σ(gebildet) negativ ist, ist die Gesamtenergie der gebildeten Bindungen größer als die der gespaltenen: II ist falsch. Da ΔH = Eai − Eag < 0, gilt Eai < Eag: III ist richtig.",
        "fr": "Le réchauffement du tube montre que la réaction cède de la chaleur, donc qu'elle est exothermique : ΔH < 0, I est vraie. Comme ΔH = Σ(rompues) − Σ(formées) est négatif, l'énergie totale des liaisons formées est supérieure à celle des liaisons rompues : II est fausse. Comme ΔH = Eai − Eag < 0, Eai < Eag : III est vraie.",
        "ru": "Нагревание пробирки показывает, что реакция отдаёт теплоту окружающей среде, то есть она экзотермическая: ΔH < 0, I верно. Так как ΔH = Σ(разрываемых) − Σ(образующихся) отрицательна, суммарная энергия образующихся связей больше, чем разрываемых, — II неверно. Так как ΔH = Ea(пр) − Ea(обр) < 0, то Ea(пр) < Ea(обр) — III верно.",
        "ar": "سخونة الأنبوب تدل على أن التفاعل يُطلق حرارة، أي أنه طارد للحرارة: ΔH < 0، فالعبارة I صحيحة. وبما أن ΔH = Σ(المكسورة) − Σ(المتكونة) سالبة، فإن الطاقة الكلية للروابط المتكونة أكبر من المكسورة، فالعبارة II خاطئة. وبما أن ΔH = Eai − Eag < 0 فإن Eai < Eag، والعبارة III صحيحة.",
        "zh": "试管变热说明反应向环境放热，即为放热反应：ΔH < 0，I 正确。由于 ΔH = Σ(断裂) − Σ(形成) 为负，形成的键的总能量大于断裂的键，II 错误。由于 ΔH = Eai − Eag < 0，所以 Eai < Eag，III 正确。",
        "ku": "Germbûna lûleyê nîşan dide ku reaksiyon germê dide derdorê, ango ekzotermîk e: ΔH < 0, I rast e. Ji ber ku ΔH = Σ(şikestî) − Σ(çêbûyî) negatîf e, enerjiya giştî ya girêdanên çêbûyî ji ya girêdanên şikestî mezintir e: II şaş e. Ji ber ku ΔH = Eai − Eag < 0 e, Eai < Eag ye: III rast e."
      }
    },
    {
      "id": "u16-twin15",
      "stem": {
        "tr": "C2H5OH(s) + 3O2(g) → 2CO2(g) + 3H2O(s)  ΔH = −1367 kJ. Tabloda bazı maddelerin standart oluşum entalpileri verilmiştir. C2H5OH(s)'nin standart oluşum entalpisi kaç kJ/mol'dür?",
        "en": "C2H5OH(l) + 3O2(g) → 2CO2(g) + 3H2O(l)  ΔH = −1367 kJ. The table gives the standard enthalpies of formation of some substances. What is the standard enthalpy of formation of C2H5OH(l) in kJ/mol?",
        "de": "C2H5OH(l) + 3O2(g) → 2CO2(g) + 3H2O(l)  ΔH = −1367 kJ. Die Tabelle gibt die Standardbildungsenthalpien einiger Stoffe an. Wie groß ist die Standardbildungsenthalpie von C2H5OH(l) in kJ/mol?",
        "fr": "C2H5OH(l) + 3O2(g) → 2CO2(g) + 3H2O(l)  ΔH = −1367 kJ. Le tableau donne les enthalpies standard de formation de quelques substances. Quelle est l'enthalpie standard de formation de C2H5OH(l) en kJ/mol ?",
        "ru": "C2H5OH(ж) + 3O2(г) → 2CO2(г) + 3H2O(ж)  ΔH = −1367 кДж. В таблице приведены стандартные энтальпии образования некоторых веществ. Чему равна стандартная энтальпия образования C2H5OH(ж) в кДж/моль?",
        "ar": "C2H5OH(l) + 3O2(g) → 2CO2(g) + 3H2O(l)  ΔH = −1367 kJ. يبيّن الجدول المحتوى الحراري القياسي لتكوين بعض المواد. كم يبلغ المحتوى الحراري القياسي لتكوين C2H5OH(l) بوحدة kJ/mol؟",
        "zh": "C2H5OH(l) + 3O2(g) → 2CO2(g) + 3H2O(l)  ΔH = −1367 kJ。表中给出了一些物质的标准生成焓。C2H5OH(l) 的标准生成焓是多少 kJ/mol？",
        "ku": "C2H5OH(l) + 3O2(g) → 2CO2(g) + 3H2O(l)  ΔH = −1367 kJ. Di tabloyê de entalpiyên çêbûnê yên standard ên hin madeyan hatine dayîn. Entalpiya çêbûnê ya standard a C2H5OH(l) çend kJ/mol e?"
      },
      "options": [
        {
          "tr": "−3013",
          "en": "−3013",
          "de": "−3013",
          "fr": "−3013",
          "ru": "−3013",
          "ar": "−3013",
          "zh": "−3013",
          "ku": "−3013"
        },
        {
          "tr": "−279",
          "en": "−279",
          "de": "−279",
          "fr": "−279",
          "ru": "−279",
          "ar": "−279",
          "zh": "−279",
          "ku": "−279"
        },
        {
          "tr": "−147",
          "en": "−147",
          "de": "−147",
          "fr": "−147",
          "ru": "−147",
          "ar": "−147",
          "zh": "−147",
          "ku": "−147"
        },
        {
          "tr": "+279",
          "en": "+279",
          "de": "+279",
          "fr": "+279",
          "ru": "+279",
          "ar": "+279",
          "zh": "+279",
          "ku": "+279"
        },
        {
          "tr": "+687",
          "en": "+687",
          "de": "+687",
          "fr": "+687",
          "ru": "+687",
          "ar": "+687",
          "zh": "+687",
          "ku": "+687"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Tablodan denklemdeki fiziksel hâllere uygun değerler seçilir: su sıvı hâlde oluştuğundan H2O(s) için −286 kJ/mol kullanılır; H2O(g) değeri bu tepkimeye ait değildir. ΔH = ΣΔHf(ürünler) − ΣΔHf(girenler). Ürünler: 2(−394) + 3(−286) = −788 − 858 = −1646 kJ. O2 element olduğundan ΔHf° = 0'dır. −1367 = −1646 − ΔHf(C2H5OH) → ΔHf(C2H5OH) = −1646 + 1367 = −279 kJ/mol. Eşitliği yanlış düzenleyip −1646 − 1367 işlemini yapan −3013, katsayıları unutan (−394 − 286 = −680) +687 kJ/mol bulur. Su için H2O(g) değerini (−242) kullanan öğrenci −147 kJ/mol bulur.",
        "en": "From the table, the values matching the physical states in the equation are chosen: water forms as a liquid, so −286 kJ/mol for H2O(l) is used; the H2O(g) value does not belong to this reaction. ΔH = ΣΔHf(products) − ΣΔHf(reactants). Products: 2(−394) + 3(−286) = −788 − 858 = −1646 kJ. O2 is an element, so ΔHf° = 0. −1367 = −1646 − ΔHf(C2H5OH) → ΔHf(C2H5OH) = −1646 + 1367 = −279 kJ/mol. Rearranging wrongly as −1646 − 1367 gives −3013; forgetting the coefficients (−394 − 286 = −680) gives +687 kJ/mol. Using the H2O(g) value (−242) for water gives −147 kJ/mol.",
        "de": "Aus der Tabelle werden die zu den Aggregatzuständen der Gleichung passenden Werte gewählt: Wasser entsteht flüssig, daher wird −286 kJ/mol für H2O(l) verwendet; der Wert für H2O(g) gehört nicht zu dieser Reaktion. ΔH = ΣΔHf(Produkte) − ΣΔHf(Edukte). Produkte: 2(−394) + 3(−286) = −788 − 858 = −1646 kJ. O2 ist ein Element, ΔHf° = 0. −1367 = −1646 − ΔHf(C2H5OH) → ΔHf(C2H5OH) = −1646 + 1367 = −279 kJ/mol. Wer falsch umstellt (−1646 − 1367), erhält −3013; wer die Koeffizienten vergisst (−394 − 286 = −680), +687 kJ/mol. Wer für Wasser den Wert von H2O(g) (−242) einsetzt, erhält −147 kJ/mol.",
        "fr": "Dans le tableau, on choisit les valeurs correspondant aux états physiques de l'équation : l'eau se forme à l'état liquide, on utilise donc −286 kJ/mol pour H2O(l) ; la valeur de H2O(g) ne concerne pas cette réaction. ΔH = ΣΔHf(produits) − ΣΔHf(réactifs). Produits : 2(−394) + 3(−286) = −788 − 858 = −1646 kJ. O2 est un corps simple, ΔHf° = 0. −1367 = −1646 − ΔHf(C2H5OH) → ΔHf(C2H5OH) = −1646 + 1367 = −279 kJ/mol. Mal réarranger l'égalité (−1646 − 1367) donne −3013 ; oublier les coefficients (−394 − 286 = −680) donne +687 kJ/mol. Utiliser la valeur de H2O(g) (−242) pour l'eau donne −147 kJ/mol.",
        "ru": "Из таблицы выбирают значения, соответствующие агрегатным состояниям в уравнении: вода образуется жидкой, поэтому берут −286 кДж/моль для H2O(ж); значение для H2O(г) к этой реакции не относится. ΔH = ΣΔHf(продуктов) − ΣΔHf(реагентов). Продукты: 2(−394) + 3(−286) = −788 − 858 = −1646 кДж. O2 — простое вещество, ΔHf° = 0. −1367 = −1646 − ΔHf(C2H5OH) → ΔHf(C2H5OH) = −1646 + 1367 = −279 кДж/моль. Ученик, неверно преобразовавший равенство (−1646 − 1367), получит −3013; забывший коэффициенты (−394 − 286 = −680) — +687 кДж/моль. Если взять для воды значение H2O(г) (−242), получится −147 кДж/моль.",
        "ar": "تُختار من الجدول القيم المطابقة للحالات الفيزيائية في المعادلة: يتكوّن الماء سائلًا، لذا تُستخدم القيمة −286 kJ/mol لـ H2O(l)، أما قيمة H2O(g) فلا تخص هذا التفاعل. ΔH = ΣΔHf(النواتج) − ΣΔHf(المتفاعلات). النواتج: 2(−394) + 3(−286) = −788 − 858 = −1646 kJ. O2 عنصر فـ ΔHf° = 0. −1367 = −1646 − ΔHf(C2H5OH) → ΔHf(C2H5OH) = −1646 + 1367 = −279 kJ/mol. من يرتب المعادلة خطأً (−1646 − 1367) يحصل على −3013، ومن ينسى المعاملات (−394 − 286 = −680) يحصل على +687 kJ/mol. ومن يستخدم قيمة H2O(g) (−242) للماء يحصل على −147 kJ/mol.",
        "zh": "从表中选取与方程式中物质状态相符的数据：生成的水是液态，应取 H2O(l) 的 −286 kJ/mol；H2O(g) 的数据不适用于该反应。ΔH = ΣΔHf(生成物) − ΣΔHf(反应物)。生成物：2(−394) + 3(−286) = −788 − 858 = −1646 kJ。O2 是单质，ΔHf° = 0。−1367 = −1646 − ΔHf(C2H5OH) → ΔHf(C2H5OH) = −1646 + 1367 = −279 kJ/mol。错误变形为 −1646 − 1367 得 −3013；忘记化学计量数(−394 − 286 = −680)得 +687 kJ/mol。若对水误用 H2O(g) 的数据 (−242)，则得 −147 kJ/mol。",
        "ku": "Ji tabloyê nirxên ku li gorî rewşên fîzîkî yên di hevkêşeyê de ne tên hilbijartin: av bi rewşa şile çêdibe, ji ber vê ji bo H2O(l) −286 kJ/mol tê bikaranîn; nirxa H2O(g) ne ya vê reaksiyonê ye. ΔH = ΣΔHf(hilber) − ΣΔHf(reaktant). Hilber: 2(−394) + 3(−286) = −788 − 858 = −1646 kJ. O2 element e, loma ΔHf° = 0 e. −1367 = −1646 − ΔHf(C2H5OH) → ΔHf(C2H5OH) = −1646 + 1367 = −279 kJ/mol. Kesê ku wekheviyê şaş saz dike û −1646 − 1367 hesab dike −3013, kesê ku hevberan ji bîr dike (−394 − 286 = −680) +687 kJ/mol dibîne. Kesê ku ji bo avê nirxa H2O(g) (−242) bi kar tîne −147 kJ/mol dibîne."
      },
      "figure": {
        "kind": "table",
        "header": [
          {
            "tr": "Madde",
            "en": "Substance",
            "de": "Stoff",
            "fr": "Substance",
            "ru": "Вещество",
            "ar": "المادة",
            "zh": "物质",
            "ku": "Made"
          },
          {
            "tr": "ΔHf° (kJ/mol)",
            "en": "ΔHf° (kJ/mol)",
            "de": "ΔHf° (kJ/mol)",
            "fr": "ΔHf° (kJ/mol)",
            "ru": "ΔHf° (кДж/моль)",
            "ar": "ΔHf° (kJ/mol)",
            "zh": "ΔHf° (kJ/mol)",
            "ku": "ΔHf° (kJ/mol)"
          }
        ],
        "rows": [
          [
            {
              "tr": "CO2(g)",
              "en": "CO2(g)",
              "de": "CO2(g)",
              "fr": "CO2(g)",
              "ru": "CO2(г)",
              "ar": "CO2(g)",
              "zh": "CO2(g)",
              "ku": "CO2(g)"
            },
            "−394"
          ],
          [
            {
              "tr": "H2O(s)",
              "en": "H2O(l)",
              "de": "H2O(l)",
              "fr": "H2O(l)",
              "ru": "H2O(ж)",
              "ar": "H2O(l)",
              "zh": "H2O(l)",
              "ku": "H2O(l)"
            },
            "−286"
          ],
          [
            {
              "tr": "H2O(g)",
              "en": "H2O(g)",
              "de": "H2O(g)",
              "fr": "H2O(g)",
              "ru": "H2O(г)",
              "ar": "H2O(g)",
              "zh": "H2O(g)",
              "ku": "H2O(g)"
            },
            "−242"
          ],
          [
            {
              "tr": "O2(g)",
              "en": "O2(g)",
              "de": "O2(g)",
              "fr": "O2(g)",
              "ru": "O2(г)",
              "ar": "O2(g)",
              "zh": "O2(g)",
              "ku": "O2(g)"
            },
            "0"
          ]
        ]
      }
    },
    {
      "id": "u16-twin16",
      "stem": {
        "tr": "C(grafit) + O2(g) → CO2(g)  ΔH1 = −393,5 kJ; C(elmas) + O2(g) → CO2(g)  ΔH2 = −395,4 kJ. Bu bilgilere göre, I. 25 °C ve 1 atm'de grafit elmastan daha kararlıdır. II. Grafitin elmasa dönüşmesi endotermiktir. III. Elmasın standart oluşum entalpisi +1,9 kJ/mol'dür. yargılarından hangileri doğrudur?",
        "en": "C(graphite) + O2(g) → CO2(g)  ΔH1 = −393.5 kJ; C(diamond) + O2(g) → CO2(g)  ΔH2 = −395.4 kJ. Based on this, which of the statements I. At 25 °C and 1 atm graphite is more stable than diamond. II. The conversion of graphite into diamond is endothermic. III. The standard enthalpy of formation of diamond is +1.9 kJ/mol. are correct?",
        "de": "C(Graphit) + O2(g) → CO2(g)  ΔH1 = −393,5 kJ; C(Diamant) + O2(g) → CO2(g)  ΔH2 = −395,4 kJ. Welche der Aussagen I. Bei 25 °C und 1 atm ist Graphit stabiler als Diamant. II. Die Umwandlung von Graphit in Diamant ist endotherm. III. Die Standardbildungsenthalpie von Diamant beträgt +1,9 kJ/mol. sind demnach richtig?",
        "fr": "C(graphite) + O2(g) → CO2(g)  ΔH1 = −393,5 kJ ; C(diamant) + O2(g) → CO2(g)  ΔH2 = −395,4 kJ. D'après ces données, parmi les affirmations I. À 25 °C et 1 atm, le graphite est plus stable que le diamant. II. La transformation du graphite en diamant est endothermique. III. L'enthalpie standard de formation du diamant vaut +1,9 kJ/mol. lesquelles sont correctes ?",
        "ru": "C(графит) + O2(г) → CO2(г)  ΔH1 = −393,5 кДж; C(алмаз) + O2(г) → CO2(г)  ΔH2 = −395,4 кДж. Какие из утверждений верны? I. При 25 °C и 1 атм графит устойчивее алмаза. II. Превращение графита в алмаз эндотермическое. III. Стандартная энтальпия образования алмаза равна +1,9 кДж/моль.",
        "ar": "C(جرافيت) + O2(g) → CO2(g)  ΔH1 = −393.5 kJ؛ C(الماس) + O2(g) → CO2(g)  ΔH2 = −395.4 kJ. بناءً على ذلك، أيّ العبارات الآتية صحيحة؟ I. عند 25 °C و1 atm يكون الجرافيت أكثر استقرارًا من الماس. II. تحوّل الجرافيت إلى ماس ماص للحرارة. III. المحتوى الحراري القياسي لتكوين الماس يساوي +1.9 kJ/mol.",
        "zh": "C(石墨) + O2(g) → CO2(g)  ΔH1 = −393.5 kJ；C(金刚石) + O2(g) → CO2(g)  ΔH2 = −395.4 kJ。据此有下列说法：I. 25 °C、1 atm 下石墨比金刚石稳定。II. 石墨转化为金刚石是吸热的。III. 金刚石的标准生成焓为 +1.9 kJ/mol。其中正确的是哪些？",
        "ku": "C(grafît) + O2(g) → CO2(g)  ΔH1 = −393,5 kJ; C(elmas) + O2(g) → CO2(g)  ΔH2 = −395,4 kJ. Li gorî van agahiyan, kîjan ji van gotinan rast in? I. Li 25 °C û 1 atm grafît ji elmasê stabîltir e. II. Veguherîna grafîtê bo elmasê endotermîk e. III. Entalpiya çêbûnê ya standard a elmasê +1,9 kJ/mol e."
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
        "tr": "Birinci tepkime aynen yazılıp ikincisi ters çevrilerek toplanırsa C(grafit) → C(elmas), ΔH = −393,5 + 395,4 = +1,9 kJ bulunur. ΔH > 0 olduğundan dönüşüm endotermiktir; II doğrudur. Elmasın enerjisi grafitinkinden yüksektir; enerjisi düşük olan grafit daha kararlıdır, I doğrudur. Grafit karbonun standart hâli olduğundan C(grafit) → C(elmas) tepkimesi elmasın oluşum tepkimesidir; ΔHf°(elmas) = +1,9 kJ/mol, III de doğrudur.",
        "en": "Writing the first reaction as is and adding the reverse of the second gives C(graphite) → C(diamond), ΔH = −393.5 + 395.4 = +1.9 kJ. Since ΔH > 0 the conversion is endothermic: II is true. Diamond has higher energy than graphite, so the lower-energy graphite is more stable: I is true. Graphite is the standard state of carbon, so C(graphite) → C(diamond) is the formation reaction of diamond; ΔHf°(diamond) = +1.9 kJ/mol, so III is also true.",
        "de": "Schreibt man die erste Reaktion unverändert und addiert die Umkehrung der zweiten, erhält man C(Graphit) → C(Diamant), ΔH = −393,5 + 395,4 = +1,9 kJ. Da ΔH > 0, ist die Umwandlung endotherm: II ist richtig. Diamant ist energiereicher als Graphit, der energieärmere Graphit ist also stabiler: I ist richtig. Graphit ist der Standardzustand des Kohlenstoffs, daher ist C(Graphit) → C(Diamant) die Bildungsreaktion von Diamant; ΔHf°(Diamant) = +1,9 kJ/mol, auch III ist richtig.",
        "fr": "En gardant la première réaction et en ajoutant l'inverse de la seconde, on obtient C(graphite) → C(diamant), ΔH = −393,5 + 395,4 = +1,9 kJ. ΔH > 0 : la transformation est endothermique, II est vraie. Le diamant a une énergie plus élevée que le graphite ; le graphite, moins énergétique, est plus stable : I est vraie. Le graphite étant l'état standard du carbone, C(graphite) → C(diamant) est la réaction de formation du diamant ; ΔHf°(diamant) = +1,9 kJ/mol, III est vraie aussi.",
        "ru": "Если первую реакцию оставить без изменений, а вторую записать в обратном направлении и сложить их, получим C(графит) → C(алмаз), ΔH = −393,5 + 395,4 = +1,9 кДж. Так как ΔH > 0, превращение эндотермическое — II верно. Энергия алмаза выше, чем у графита; графит с меньшей энергией устойчивее — I верно. Графит — стандартное состояние углерода, поэтому C(графит) → C(алмаз) — реакция образования алмаза; ΔHf°(алмаз) = +1,9 кДж/моль, III тоже верно.",
        "ar": "بكتابة التفاعل الأول كما هو وجمعه مع عكس التفاعل الثاني نحصل على C(جرافيت) → C(الماس)، ΔH = −393.5 + 395.4 = +1.9 kJ. وبما أن ΔH > 0 فالتحول ماص للحرارة، فالعبارة II صحيحة. طاقة الماس أعلى من طاقة الجرافيت، فالجرافيت الأقل طاقة أكثر استقرارًا، والعبارة I صحيحة. والجرافيت هو الحالة القياسية للكربون، لذا فالتفاعل C(جرافيت) → C(الماس) هو تفاعل تكوين الماس؛ ΔHf°(الماس) = +1.9 kJ/mol، فالعبارة III صحيحة أيضًا.",
        "zh": "保留第一个反应、将第二个反应逆转后相加，得 C(石墨) → C(金刚石)，ΔH = −393.5 + 395.4 = +1.9 kJ。ΔH > 0，转化吸热，II 正确。金刚石的能量高于石墨，能量较低的石墨更稳定，I 正确。石墨是碳的标准状态，所以 C(石墨) → C(金刚石) 就是金刚石的生成反应；ΔHf°(金刚石) = +1.9 kJ/mol，III 也正确。",
        "ku": "Heke reaksiyona yekem wekî xwe were nivîsandin, ya duyem berevajî were nivîsandin û her du werin berhevkirin, C(grafît) → C(elmas), ΔH = −393,5 + 395,4 = +1,9 kJ tê dîtin. Ji ber ku ΔH > 0 e, veguherîn endotermîk e: II rast e. Enerjiya elmasê ji ya grafîtê bilindtir e; grafîta bi enerjiya kêmtir stabîltir e: I rast e. Ji ber ku grafît rewşa standard a karbonê ye, reaksiyona C(grafît) → C(elmas) reaksiyona çêbûna elmasê ye; ΔHf°(elmas) = +1,9 kJ/mol, III jî rast e."
      }
    }
  ]
};

export default unit16;
