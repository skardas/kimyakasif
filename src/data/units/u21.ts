import { L } from './L';
import type { ChemistryUnitSeedData } from './types';

export const unit21: ChemistryUnitSeedData = {
  "id": "u21",
  "order": 21,
  "exam": "AYT",
  "grade": 12,
  "title": {
    "tr": "Kimya ve Elektrik: Redoks ve Galvanik Piller",
    "en": "Electrochemistry: Redox & Galvanic",
    "de": "Elektrochemie: Redox & Galvanische Zellen",
    "fr": "Électrochimie: Redox & Piles Galvaniques",
    "ru": "Электрохимия: ОВР и гальванические элементы",
    "ar": "الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية",
    "zh": "电化学：氧化还原与原电池",
    "ku": "Kîmya û Elektrîk: Redoks û Pîlên Galvanîk"
  },
  "subtitle": {
    "tr": "Yükseltgenme Basamağı, Daniell Pili ve Derişim Pilleri",
    "en": "Oxidation States, Daniell Cell & Concentration Cells",
    "de": "Oxidationszahlen, Daniell-Element und Konzentrationszellen",
    "fr": "Nombres d'oxydation, pile Daniell et piles de concentration",
    "ru": "Степени окисления, элемент Даниэля и концентрационные элементы",
    "ar": "أعداد التأكسد، خلية دانيال وخلايا التركيز",
    "zh": "氧化数、丹尼尔电池与浓差电池",
    "ku": "Hejmarên Oksîdasyonê, Pîla Daniell û Pîlên Tîrbûnê"
  },
  "facts": [
    {
      "id": "u21-f01",
      "fact": {
        "tr": "Redoks tepkimelerinde elektron veren madde yükseltgenir (indirgendir); elektron alan madde indirgenir (yükseltgendir).",
        "en": "In redox reactions, the substance that loses electrons is oxidized (it is the reducing agent); the substance that gains electrons is reduced (it is the oxidizing agent).",
        "de": "Bei Redoxreaktionen wird der Stoff, der Elektronen abgibt, oxidiert (er ist das Reduktionsmittel); der Stoff, der Elektronen aufnimmt, wird reduziert (er ist das Oxidationsmittel).",
        "fr": "Dans les réactions redox, l'espèce qui cède des électrons est oxydée (c'est le réducteur) ; l'espèce qui capte des électrons est réduite (c'est l'oxydant).",
        "ru": "В окислительно-восстановительных реакциях вещество, отдающее электроны, окисляется (это восстановитель); вещество, принимающее электроны, восстанавливается (это окислитель).",
        "ar": "في تفاعلات الأكسدة والاختزال، المادة التي تفقد الإلكترونات تتأكسد (وهي العامل المختزل)؛ والمادة التي تكتسب الإلكترونات تُختزل (وهي العامل المؤكسد).",
        "zh": "在氧化还原反应中，失去电子的物质被氧化（作还原剂）；得到电子的物质被还原（作氧化剂）。",
        "ku": "Di reaksiyonên redoksê de, madeya ku elektronan dide oksîd dibe (ew reduktant e); madeya ku elektronan distîne kêm dibe (ew oksîdant e)."
      },
      "trap": {
        "tr": "Elektron alan madde yükseltgenmiştir.",
        "en": "The substance that receives electrons is oxidized.",
        "de": "Die Substanz, die Elektronen aufnimmt, wird oxidiert.",
        "fr": "La substance qui reçoit les électrons est oxydée.",
        "ru": "Вещество, принявшее электроны, окислилось.",
        "ar": "تتأكسد المادة التي تستقبل الإلكترونات.",
        "zh": "得到电子的物质被氧化。",
        "ku": "Madeya ku elektronan distîne tê oksîdan."
      },
      "whyTrapIsFalse": {
        "tr": "Bu yargı \"yükseltgen\" ile \"yükseltgenen\" kavramlarını karıştırır. Elektron alan madde indirgenir ve yükseltgenme basamağı düşer; yükseltgenme ise elektron kaybıdır.",
        "en": "This statement confuses \"oxidizing agent\" with \"oxidized\". A substance that gains electrons is reduced and its oxidation state falls; oxidation is the loss of electrons.",
        "de": "Diese Aussage verwechselt \"Oxidationsmittel\" mit \"oxidiert\". Ein Stoff, der Elektronen aufnimmt, wird reduziert und seine Oxidationszahl sinkt; Oxidation ist Elektronenabgabe.",
        "fr": "Cette affirmation confond « oxydant » et « oxydé ». Une espèce qui capte des électrons est réduite et son nombre d'oxydation diminue ; l'oxydation est une perte d'électrons.",
        "ru": "Здесь смешаны понятия «окислитель» и «окисляющееся вещество». Вещество, принимающее электроны, восстанавливается, и его степень окисления понижается; окисление — это отдача электронов.",
        "ar": "تخلط هذه العبارة بين «العامل المؤكسد» و«المادة المتأكسدة». المادة التي تكتسب إلكترونات تُختزل وينخفض عدد تأكسدها؛ أما الأكسدة فهي فقد الإلكترونات.",
        "zh": "此说法混淆了“氧化剂”和“被氧化”。得到电子的物质被还原，氧化数降低；氧化是失去电子。",
        "ku": "Ev gotin \"oksîdant\" û \"oksîdbûyî\" tevlihev dike. Madeya ku elektronan distîne kêm dibe û hejmara wê ya oksîdasyonê dadikeve; oksîdasyon windakirina elektronan e."
      }
    },
    {
      "id": "u21-f02",
      "fact": {
        "tr": "Galvanik pilde anotta daima yükseltgenme, katotta daima indirgenme gerçekleşir (kısaca: Anot–Yükseltgenme, Katot–İndirgenme).",
        "en": "In a galvanic cell, OXIDATION always occurs at the ANODE and REDUCTION always occurs at the CATHODE (in short: Anode–Oxidation, Cathode–Reduction).",
        "de": "In einer galvanischen Zelle findet an der ANODE stets die OXIDATION und an der KATHODE stets die REDUKTION statt (kurz: Anode–Oxidation, Kathode–Reduktion).",
        "fr": "Dans une pile galvanique, l'OXYDATION a toujours lieu à l'ANODE et la RÉDUCTION toujours à la CATHODE (en bref : Anode–Oxydation, Cathode–Réduction).",
        "ru": "В гальваническом элементе на аноде всегда идёт окисление, а на катоде — восстановление (коротко: анод — окисление, катод — восстановление).",
        "ar": "في الخلية الجلفانية تحدث الأكسدة دائمًا عند الأنود ويحدث الاختزال دائمًا عند الكاثود (باختصار: أنود–أكسدة، كاثود–اختزال).",
        "zh": "在原电池中，负极总是发生氧化反应，正极总是发生还原反应（简记：负极—氧化，正极—还原）。",
        "ku": "Di pîla galvanîk de li ANODÊ her tim OKSÎDASYON, li KATODÊ her tim REDUKSIYON pêk tê (bi kurtî: Anod–Oksîdasyon, Katod–Reduksiyon)."
      },
      "trap": {
        "tr": "Anotta indirgenme gerçekleşir.",
        "en": "Reduction takes place at the anode.",
        "de": "An der Anode findet die Reduktion statt.",
        "fr": "La réduction a lieu à l'anode.",
        "ru": "Восстановление происходит на аноде.",
        "ar": "يحدث الاختزال عند الأنود.",
        "zh": "原电池中还原反应发生在负极。",
        "ku": "Reduksiyon li anodê pêk tê."
      },
      "whyTrapIsFalse": {
        "tr": "Anot, pildeki elektronların kaynağıdır; elektronlar anottaki atomların elektron vermesiyle, yani yükseltgenmeyle ortaya çıkar. İndirgenme elektron alımı olduğundan dış devreden gelen elektronlarla katotta gerçekleşir.",
        "en": "The anode is the source of the cell's electrons; they appear when atoms at the anode give up electrons, i.e. by oxidation. Reduction is electron gain, so it happens at the cathode with the electrons arriving through the external circuit.",
        "de": "Die Anode ist die Elektronenquelle der Zelle; die Elektronen entstehen, wenn Atome an der Anode Elektronen abgeben, also durch Oxidation. Reduktion ist Elektronenaufnahme und findet daher an der Kathode mit den über den äußeren Kreis ankommenden Elektronen statt.",
        "fr": "L'anode est la source des électrons de la pile ; ils apparaissent quand les atomes de l'anode cèdent des électrons, c'est-à-dire par oxydation. La réduction est un gain d'électrons : elle a lieu à la cathode avec les électrons arrivant par le circuit extérieur.",
        "ru": "Анод — источник электронов элемента: они появляются, когда атомы анода отдают электроны, то есть при окислении. Восстановление — это присоединение электронов, поэтому оно идёт на катоде за счёт электронов, пришедших по внешней цепи.",
        "ar": "الأنود هو مصدر إلكترونات الخلية، إذ تنشأ عندما تفقد ذرات الأنود إلكتروناتها أي بالأكسدة. أما الاختزال فهو اكتساب إلكترونات، لذا يحدث عند الكاثود بالإلكترونات القادمة عبر الدائرة الخارجية.",
        "zh": "负极是电池中电子的来源：负极上的原子失去电子（即发生氧化）才产生电子。还原是得到电子，因此在正极利用经外电路流来的电子发生。",
        "ku": "Anod çavkaniya elektronên pîlê ye; elektron dema atomên li anodê elektronan didin, ango bi oksîdasyonê, derdikevin holê. Reduksiyon wergirtina elektronan e, ji ber vê yekê li katodê bi elektronên ku ji çerxa derve tên pêk tê."
      }
    },
    {
      "id": "u21-f03",
      "fact": {
        "tr": "Tuz köprüsündeki anyonlar anoda, katyonlar katoda göç ederek yük denkliğini sağlar.",
        "en": "ANIONS in the salt bridge migrate to the ANODE and CATIONS to the CATHODE, maintaining charge balance.",
        "de": "ANIONEN in der Salzbrücke wandern zur ANODE und KATIONEN wandern zur KATHODE und sorgen für den Ladungsausgleich.",
        "fr": "Les ANIONS du pont salin migrent vers l'ANODE et les CATIONS vers la CATHODE, ce qui assure l'équilibre des charges.",
        "ru": "Анионы солевого мостика перемещаются к аноду, а катионы — к катоду; так сохраняется электронейтральность растворов.",
        "ar": "تهاجر الأنيونات في القنطرة الملحية نحو الأنود والكاتيونات نحو الكاثود فتحافظ على توازن الشحنات.",
        "zh": "盐桥中的阴离子向负极区迁移，阳离子向正极区迁移，从而保持溶液的电荷平衡。",
        "ku": "ANYONÊN di pira xwê de ber bi ANODÊ, KATYON jî ber bi KATODÊ ve koç dikin û hevsengiya barê diparêzin."
      },
      "trap": {
        "tr": "Tuz köprüsündeki anyonlar katoda gider.",
        "en": "Anions in the salt bridge go to the cathode.",
        "de": "Anionen in der Salzbrücke gelangen zur Kathode.",
        "fr": "Les anions du pont salin vont à la cathode.",
        "ru": "Анионы в солевом мостике идут к катоду.",
        "ar": "تذهب الأنيونات الموجودة في جسر الملح إلى الكاثود.",
        "zh": "盐桥中的阴离子向正极区迁移。",
        "ku": "Anyonên di pira xwê de diçin katodê."
      },
      "whyTrapIsFalse": {
        "tr": "Anot kabında yükseltgenmeyle katyon (ör. Zn2+) arttığı için pozitif yük birikir; bunu dengelemek üzere anyonlar anot kabına gider. Katot kabında katyonlar harcandığı için oraya katyonlar göç eder.",
        "en": "In the anode compartment oxidation produces cations (e.g. Zn2+), so positive charge builds up; anions move there to balance it. In the cathode compartment cations are used up, so cations migrate there.",
        "de": "Im Anodenraum entstehen durch Oxidation Kationen (z. B. Zn2+), positive Ladung sammelt sich an; zum Ausgleich wandern Anionen dorthin. Im Kathodenraum werden Kationen verbraucht, daher wandern Kationen dorthin.",
        "fr": "Dans le compartiment anodique, l'oxydation produit des cations (ex. Zn2+) et une charge positive s'accumule ; les anions y migrent pour la compenser. Dans le compartiment cathodique, les cations sont consommés, ce sont donc les cations qui y migrent.",
        "ru": "В анодном пространстве при окислении образуются катионы (например, Zn2+) и накапливается положительный заряд; для его компенсации туда идут анионы. В катодном пространстве катионы расходуются, поэтому туда мигрируют катионы.",
        "ar": "في وعاء الأنود تنتج الأكسدة كاتيونات (مثل Zn2+) فتتراكم شحنة موجبة، فتتجه الأنيونات إليه لمعادلتها. أما في وعاء الكاثود فتُستهلك الكاتيونات، لذا تهاجر الكاتيونات إليه.",
        "zh": "负极区发生氧化生成阳离子(如 Zn2+)，正电荷积累，阴离子向该区迁移以平衡电荷。正极区的阳离子被消耗，因此是阳离子向正极区迁移。",
        "ku": "Li aliyê anodê oksîdasyon katyonan (wek Zn2+) çêdike û bara erênî kom dibe; ji bo hevsengkirinê anyon diçin wir. Li aliyê katodê katyon têne xerckirin, loma katyon koçî wir dikin."
      }
    },
    {
      "id": "u21-f04",
      "fact": {
        "tr": "Standart pil potansiyeli: E°pil = E°yüks(anot) + E°ind(katot)'tur; E°pil > 0 ise tepkime istemlidir.",
        "en": "Standard cell potential: E°cell = E°ox(anode) + E°red(cathode); if E°cell > 0, the reaction is spontaneous.",
        "de": "Standardzellpotential: E°Zelle = E°Ox(Anode) + E°Red(Kathode); ist E°Zelle > 0, verläuft die Reaktion freiwillig (spontan).",
        "fr": "Potentiel standard de pile : E°pile = E°ox(anode) + E°réd(cathode) ; si E°pile > 0, la réaction est spontanée.",
        "ru": "Стандартный потенциал элемента: E°эл = E°ок(анод) + E°восст(катод); если E°эл > 0, реакция протекает самопроизвольно.",
        "ar": "جهد الخلية القياسي: E°خلية = E°تأكسد(الأنود) + E°اختزال(الكاثود)؛ إذا كان E°خلية > 0 فالتفاعل تلقائي.",
        "zh": "标准电池电势：E°电池 = E°氧化(负极) + E°还原(正极)；若 E°电池 > 0，则反应自发进行。",
        "ku": "Potansiyela standard a pîlê: E°pîl = E°oks(anod) + E°red(katod); heke E°pîl > 0 be, reaksiyon xweber e."
      },
      "trap": {
        "tr": "E°pil negatif olduğunda pil kendiliğinden çalışır ve elektrik üretir.",
        "en": "When E°cell is negative, the cell works by itself and produces electricity.",
        "de": "Wenn E°Zelle negativ ist, arbeitet die Zelle von selbst und erzeugt elektrischen Strom.",
        "fr": "Lorsque E°pile est négatif, la pile fonctionne d'elle-même et produit de l'électricité.",
        "ru": "Если E°эл отрицателен, элемент работает самопроизвольно и вырабатывает электрический ток.",
        "ar": "عندما يكون E°خلية سالبًا تعمل الخلية تلقائيًا وتنتج الكهرباء.",
        "zh": "E°电池 为负值时，电池能自发工作并产生电能。",
        "ku": "Dema E°pîl neyînî be, pîl bi xwe dixebite û elektrîkê çêdike."
      },
      "whyTrapIsFalse": {
        "tr": "Negatif E°pil, yazılan tepkimenin istemsiz olduğunu gösterir; bu yönde tepkime ancak dışarıdan elektrik verilerek (elektroliz) yürütülebilir. Kendiliğinden yürüyen, ters yöndeki tepkimedir.",
        "en": "A negative E°cell means the reaction as written is non-spontaneous; it can only be driven in that direction by supplying electricity from outside (electrolysis). The spontaneous reaction is the reverse one.",
        "de": "Ein negatives E°Zelle bedeutet, dass die Reaktion in der geschriebenen Richtung nicht freiwillig abläuft; sie lässt sich nur durch zugeführten Strom (Elektrolyse) erzwingen. Freiwillig läuft die Rückreaktion ab.",
        "fr": "Un E°pile négatif signifie que la réaction écrite n'est pas spontanée ; on ne peut la forcer dans ce sens qu'en fournissant de l'électricité (électrolyse). C'est la réaction inverse qui est spontanée.",
        "ru": "Отрицательный E°эл означает, что реакция в записанном направлении несамопроизвольна; провести её можно только подводя электрический ток извне (электролиз). Самопроизвольно идёт обратная реакция.",
        "ar": "يعني E°خلية السالب أن التفاعل كما كُتب غير تلقائي، ولا يمكن إجراؤه في هذا الاتجاه إلا بتزويده بالكهرباء من الخارج (التحليل الكهربائي). التفاعل التلقائي هو التفاعل العكسي.",
        "zh": "E°电池 为负表示所写反应非自发，只有从外部输入电能（电解）才能使其按此方向进行。自发进行的是逆反应。",
        "ku": "E°pîl a neyînî nîşan dide ku reaksiyona nivîsandî ne xweber e; bi vî alî tenê bi dayîna elektrîkê ji derve (elektrolîz) dikare bimeşe. Reaksiyona xweber a berevajî ye."
      }
    },
    {
      "id": "u21-f05",
      "fact": {
        "tr": "Standart Hidrojen Elektrodu (SHE): 25 °C'de, 1 atm basınçta H2 gazının 1 M H+ çözeltisine daldırılmış platin elektrot üzerinden geçirilmesiyle oluşur; potansiyeli 0,00 V kabul edilir.",
        "en": "Standard Hydrogen Electrode (SHE): at 25 °C, H2 gas at 1 atm is bubbled over a platinum electrode dipped in 1 M H+ solution; its potential is taken as 0.00 V.",
        "de": "Standard-Wasserstoffelektrode (SHE): Bei 25 °C wird H2-Gas mit 1 atm über eine Platinelektrode geleitet, die in eine 1 M H+-Lösung taucht; ihr Potential wird als 0,00 V festgelegt.",
        "fr": "Électrode standard à hydrogène (ESH) : à 25 °C, du gaz H2 sous 1 atm barbote sur une électrode de platine plongée dans une solution 1 M de H+ ; son potentiel est fixé à 0,00 V.",
        "ru": "Стандартный водородный электрод (СВЭ): при 25 °C газ H2 под давлением 1 атм пропускают над платиновым электродом, погружённым в 1 M раствор H+; его потенциал принят равным 0,00 В.",
        "ar": "قطب الهيدروجين القياسي (SHE): عند 25 °C يُمرَّر غاز H2 تحت ضغط 1 atm على قطب من البلاتين مغموس في محلول H+ تركيزه 1 M؛ ويُعتبر جهده 0.00 V.",
        "zh": "标准氢电极(SHE)：25 °C 时，将 1 atm 的 H2 通到浸在 1 M H+ 溶液中的铂电极上；其电势规定为 0.00 V。",
        "ku": "Elektroda Hîdrojenê ya Standard (SHE): li 25 °C gaza H2 ya bi zexta 1 atm di ser elektrodeke platînê re tê derbaskirin ku di çareseriya H+ ya 1 M de ye; potansiyela wê 0,00 V tê qebûlkirin."
      },
      "trap": {
        "tr": "Standart hidrojen elektrodunun gerilimi 1,00 V'tur.",
        "en": "The voltage of the standard hydrogen electrode is 1.00 V.",
        "de": "Die Spannung der Standard-Wasserstoffelektrode beträgt 1,00 V.",
        "fr": "La tension de l'électrode à hydrogène standard est de 1,00 V.",
        "ru": "Потенциал стандартного водородного электрода равен 1,00 В.",
        "ar": "جهد قطب الهيدروجين القياسي هو 1.00 V.",
        "zh": "标准氢电极的电势为 1.00 V。",
        "ku": "Voltaja elektroda hîdrojenê ya standard 1,00 V e."
      },
      "whyTrapIsFalse": {
        "tr": "Burada standart koşullardaki \"1 M\" ve \"1 atm\" değerleri potansiyelle karıştırılmıştır. SHE referans elektrottur; potansiyeli ölçülmez, uzlaşmayla 0,00 V kabul edilir ve diğer potansiyeller buna göre verilir.",
        "en": "Here the \"1 M\" and \"1 atm\" of standard conditions are confused with the potential. The SHE is the reference electrode; its potential is not measured but set by convention to 0.00 V, and all other potentials are given relative to it.",
        "de": "Hier werden die \"1 M\" und \"1 atm\" der Standardbedingungen mit dem Potential verwechselt. Die SHE ist die Bezugselektrode; ihr Potential wird nicht gemessen, sondern per Konvention auf 0,00 V gesetzt, alle anderen Potentiale beziehen sich darauf.",
        "fr": "On confond ici les « 1 M » et « 1 atm » des conditions standard avec le potentiel. L'ESH est l'électrode de référence : son potentiel n'est pas mesuré mais fixé par convention à 0,00 V, et tous les autres potentiels sont donnés par rapport à elle.",
        "ru": "Здесь «1 M» и «1 атм» стандартных условий спутаны с потенциалом. СВЭ — электрод сравнения: его потенциал не измеряют, а по соглашению принимают равным 0,00 В, и все остальные потенциалы отсчитывают от него.",
        "ar": "هنا خُلطت قيمتا «1 M» و«1 atm» للظروف القياسية بالجهد. قطب الهيدروجين القياسي هو القطب المرجعي؛ لا يُقاس جهده بل يُتفق على أنه 0.00 V وتُنسب إليه جميع الجهود الأخرى.",
        "zh": "这里把标准条件中的“1 M”“1 atm”与电势混淆了。标准氢电极是参比电极，其电势不是测出来的，而是约定为 0.00 V，其他电势都相对于它给出。",
        "ku": "Li vir \"1 M\" û \"1 atm\" yên şertên standard bi potansiyelê re tevlihev bûne. SHE elektroda referansê ye; potansiyela wê nayê pîvan, bi peymanê 0,00 V tê qebûlkirin û potansiyelên din li gorî wê têne dayîn."
      }
    },
    {
      "id": "u21-f06",
      "fact": {
        "tr": "Aktifliği büyük olan metal anottur (yükseltgenme potansiyeli büyük olan metal anot olur).",
        "en": "The metal with greater activity is the anode (the metal with greater oxidation potential becomes the anode).",
        "de": "Das Metall mit der größeren Aktivität ist die Anode (das Metall mit dem größeren Oxidationspotential wird zur Anode).",
        "fr": "Le métal ayant la plus grande activité est l'anode (le métal ayant le plus grand potentiel d'oxydation devient l'anode).",
        "ru": "Анодом служит более активный металл (металл с бо́льшим потенциалом окисления).",
        "ar": "الفلز الأكثر نشاطًا هو الأنود (الفلز ذو جهد التأكسد الأكبر يكون الأنود).",
        "zh": "活动性较强的金属作负极（氧化电势较大的金属成为负极）。",
        "ku": "Metala çalaktir anod e (metala ku potansiyela wê ya oksîdasyonê mezintir e dibe anod)."
      },
      "trap": {
        "tr": "İndirgenme potansiyeli büyük olan metal anot kutbudur.",
        "en": "The metal with the greater reduction potential is the anode.",
        "de": "Das Metall mit dem größeren Reduktionspotential ist die Anode.",
        "fr": "Le métal ayant le plus grand potentiel de réduction est l'anode.",
        "ru": "Анодом служит металл с бо́льшим потенциалом восстановления.",
        "ar": "الفلز ذو جهد الاختزال الأكبر هو الأنود.",
        "zh": "还原电势较大的金属作负极。",
        "ku": "Metala ku potansiyela wê ya reduksiyonê mezintir e anod e."
      },
      "whyTrapIsFalse": {
        "tr": "İndirgenme potansiyeli büyük olan metalin iyonu elektron almaya yatkındır, bu yüzden o elektrot katot olur. Anot, yükseltgenme potansiyeli büyük (indirgenme potansiyeli küçük), yani daha aktif olan metaldir.",
        "en": "The ion of the metal with the greater reduction potential has the stronger tendency to gain electrons, so that electrode becomes the cathode. The anode is the more active metal, with the greater oxidation (smaller reduction) potential.",
        "de": "Das Ion des Metalls mit dem größeren Reduktionspotential nimmt bevorzugt Elektronen auf, daher wird diese Elektrode zur Kathode. Die Anode ist das aktivere Metall mit dem größeren Oxidations- (kleineren Reduktions-)potential.",
        "fr": "L'ion du métal ayant le plus grand potentiel de réduction a la plus forte tendance à capter des électrons : cette électrode devient la cathode. L'anode est le métal le plus actif, au plus grand potentiel d'oxydation (plus petit potentiel de réduction).",
        "ru": "Ион металла с бо́льшим потенциалом восстановления сильнее стремится принять электроны, поэтому этот электрод становится катодом. Анод — более активный металл с бо́льшим потенциалом окисления (меньшим потенциалом восстановления).",
        "ar": "أيون الفلز ذي جهد الاختزال الأكبر أكثر ميلًا لاكتساب الإلكترونات، لذا يصبح ذلك القطب كاثودًا. أما الأنود فهو الفلز الأنشط ذو جهد التأكسد الأكبر (جهد الاختزال الأصغر).",
        "zh": "还原电势较大的金属，其离子更易得到电子，因此该电极成为正极。负极是活动性较强、氧化电势较大（还原电势较小）的金属。",
        "ku": "Îyona metala ku potansiyela wê ya reduksiyonê mezintir e bêtir meyla wergirtina elektronan dike, loma ew elektrod dibe katod. Anod metala çalaktir e ku potansiyela wê ya oksîdasyonê mezintir (ya reduksiyonê biçûktir) e."
      }
    },
    {
      "id": "u21-f07",
      "fact": {
        "tr": "Pil çalıştıkça anot elektrodun kütlesi genellikle aşınarak azalır; katot elektrodun üzerinde madde toplandığı için kütlesi genellikle artar.",
        "en": "As the cell operates, the mass of the anode electrode usually decreases as it is consumed; substance deposits on the cathode electrode and its mass increases.",
        "de": "Während die Zelle arbeitet, nimmt die Masse der Anode meist ab, da sie sich auflöst; an der Kathode scheidet sich Stoff ab und ihre Masse nimmt zu.",
        "fr": "Pendant le fonctionnement de la pile, la masse de l'anode diminue généralement car elle se dissout ; de la matière se dépose sur la cathode, dont la masse augmente.",
        "ru": "При работе элемента масса анода обычно уменьшается, так как он растворяется; на катоде осаждается вещество, и его масса увеличивается.",
        "ar": "أثناء عمل الخلية تنقص كتلة قطب الأنود عادةً لأنه يتآكل، وتترسب المادة على قطب الكاثود فتزداد كتلته.",
        "zh": "电池工作时，负极因溶解而质量通常减小；物质在正极上析出，正极质量增加。",
        "ku": "Dema pîl dixebite, girseya anodê bi gelemperî kêm dibe ji ber ku dihele; li ser katodê made kom dibe û girseya wê zêde dibe."
      },
      "trap": {
        "tr": "Pil çalıştıkça anot elektrodun kütlesi artar, katot elektrodun kütlesi azalır.",
        "en": "As the cell operates, the mass of the anode increases and the mass of the cathode decreases.",
        "de": "Während die Zelle arbeitet, nimmt die Masse der Anode zu und die Masse der Kathode ab.",
        "fr": "Pendant le fonctionnement de la pile, la masse de l'anode augmente et celle de la cathode diminue.",
        "ru": "По мере работы элемента масса анода увеличивается, а масса катода уменьшается.",
        "ar": "مع عمل الخلية تزداد كتلة الأنود وتقل كتلة الكاثود.",
        "zh": "电池工作时，负极质量增加，正极质量减少。",
        "ku": "Her ku pîl dixebite, girseya anodê zêde dibe û girseya katodê kêm dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Kütle değişimleri ters verilmiştir. Anottaki metal atomları iyon olarak çözeltiye geçtiği için anot aşınır; katotta iyonlar indirgenip metal olarak biriktiği için katodun kütlesi artar.",
        "en": "The mass changes are reversed. Metal atoms of the anode pass into solution as ions, so the anode wears away; at the cathode ions are reduced and deposit as metal, so the cathode gains mass.",
        "de": "Die Massenänderungen sind vertauscht. Metallatome der Anode gehen als Ionen in Lösung, die Anode löst sich auf; an der Kathode werden Ionen reduziert und scheiden sich als Metall ab, ihre Masse nimmt zu.",
        "fr": "Les variations de masse sont inversées. Les atomes de l'anode passent en solution sous forme d'ions, l'anode s'use ; à la cathode, les ions sont réduits et se déposent en métal, sa masse augmente.",
        "ru": "Изменения массы перепутаны. Атомы металла анода переходят в раствор в виде ионов, и анод растворяется; на катоде ионы восстанавливаются и осаждаются в виде металла, поэтому масса катода растёт.",
        "ar": "تغيرات الكتلة معكوسة هنا. تنتقل ذرات فلز الأنود إلى المحلول على هيئة أيونات فيتآكل الأنود؛ وعند الكاثود تُختزل الأيونات وتترسب فلزًا فتزداد كتلته.",
        "zh": "质量变化说反了。负极的金属原子以离子形式进入溶液，负极被消耗；正极上离子被还原并以金属形式析出，正极质量增加。",
        "ku": "Guherînên girseyê berevajî hatine dayîn. Atomên metalê yên anodê wek îyon derbasî çareseriyê dibin û anod dixwe; li katodê îyon kêm dibin û wek metal kom dibin, loma girseya katodê zêde dibe."
      }
    },
    {
      "id": "u21-f08",
      "fact": {
        "tr": "Anot yarı hücresine saf su eklenirse anot iyon derişimi azalır, denge ürünlere kayar ve pil potansiyeli artar.",
        "en": "If pure water is added to the anode half-cell, the concentration of the anode ion decreases, the equilibrium shifts toward the products and the cell potential increases.",
        "de": "Fügt man der Anodenhalbzelle reines Wasser hinzu, sinkt die Anodenionenkonzentration, das Gleichgewicht verschiebt sich zu den Produkten und das Zellpotential steigt.",
        "fr": "Si de l'eau pure est ajoutée à la demi-pile anodique, la concentration en ions de l'anode diminue, l'équilibre se déplace vers les produits et le potentiel de la pile augmente.",
        "ru": "Если в анодный полуэлемент добавить чистую воду, концентрация ионов в анодном пространстве уменьшится, равновесие сместится в сторону продуктов и потенциал элемента увеличится.",
        "ar": "إذا تمت إضافة الماء النقي إلى نصف خلية الأنود، ينخفض تركيز أيون الأنود، وينزاح الاتزان نحو النواتج ويزداد جهد الخلية.",
        "zh": "向负极半电池中加入纯水，负极区离子浓度降低，平衡向生成物方向移动，电池电势增大。",
        "ku": "Ger ava paqij li nîv şaneya anodê were zêdekirin, kombûna îyona anodê kêm dibe, hevseng diguhezîne hilberan û potansiyela pîlê zêde dibe."
      },
      "trap": {
        "tr": "Anot çözeltisine su eklendiğinde pil gerilimi düşer.",
        "en": "When water is added to the anode solution, the cell voltage decreases.",
        "de": "Wenn der Anodenlösung Wasser zugesetzt wird, sinkt die Zellspannung.",
        "fr": "Lorsque de l'eau est ajoutée à la solution anodique, la tension de la pile diminue.",
        "ru": "При добавлении воды в анодный раствор напряжение элемента снижается.",
        "ar": "عند إضافة الماء إلى محلول الأنود، ينخفض جهد الخلية.",
        "zh": "向负极区溶液中加水时，电池电压会降低。",
        "ku": "Dema ku av li çareseriya anodê tê zêdekirin, voltaja pîlê kêm dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Anot iyonu toplam tepkimede ürün tarafındadır; su eklenip derişimi azalınca denge ürünlere kayar ve gerilim düşmez, artar. Gerilimi düşüren işlem katot kabının seyreltilmesidir.",
        "en": "The anode ion is on the product side of the overall reaction; diluting it shifts the equilibrium toward products, so the voltage rises rather than falls. It is diluting the cathode compartment that lowers the voltage.",
        "de": "Das Anodenion steht in der Gesamtreaktion auf der Produktseite; Verdünnen verschiebt das Gleichgewicht zu den Produkten, die Spannung steigt statt zu sinken. Senkend wirkt das Verdünnen des Kathodenraums.",
        "fr": "L'ion de l'anode est du côté des produits dans la réaction globale ; le diluer déplace l'équilibre vers les produits, donc la tension augmente au lieu de baisser. C'est la dilution du compartiment cathodique qui fait baisser la tension.",
        "ru": "Ион анода в суммарной реакции находится среди продуктов; при разбавлении равновесие смещается к продуктам, и напряжение растёт, а не падает. Напряжение снижает разбавление катодного пространства.",
        "ar": "أيون الأنود في جهة النواتج في التفاعل الكلي؛ فإذا خُفّف انزاح الاتزان نحو النواتج فيرتفع الجهد ولا ينخفض. أما ما يخفض الجهد فهو تخفيف وعاء الكاثود.",
        "zh": "负极区的离子在总反应的生成物一侧；稀释它使平衡向生成物方向移动，电压升高而不是降低。使电压降低的是稀释正极区。",
        "ku": "Îyona anodê di reaksiyona giştî de li aliyê berheman e; dema tê sivikkirin hevsengî ber bi berheman ve diçe û voltaj ne dadikeve, zêde dibe. Kiryara ku voltajê dadixîne sivikkirina aliyê katodê ye."
      }
    },
    {
      "id": "u21-f09",
      "fact": {
        "tr": "Katot yarı hücresine saf su eklenirse katot iyon derişimi azalır, denge girenlere kayar ve pil potansiyeli azalır.",
        "en": "If pure water is added to the cathode half-cell, the concentration of the cathode ion decreases, the equilibrium shifts toward the reactants and the cell potential decreases.",
        "de": "Fügt man der Kathodenhalbzelle reines Wasser hinzu, sinkt die Kathodenionenkonzentration, das Gleichgewicht verschiebt sich zu den Edukten und das Zellpotential sinkt.",
        "fr": "Si de l'eau pure est ajoutée à la demi-pile cathodique, la concentration en ions cathodiques diminue, l'équilibre se déplace vers les réactifs et le potentiel de la pile diminue.",
        "ru": "Если в катодный полуэлемент добавить чистую воду, концентрация ионов в катодном пространстве уменьшится, равновесие сместится в сторону исходных веществ и потенциал элемента уменьшится.",
        "ar": "إذا تمت إضافة الماء النقي إلى نصف خلية الكاثود، ينخفض تركيز أيون الكاثود، وينزاح الاتزان نحو المتفاعلات وينخفض جهد الخلية.",
        "zh": "向正极半电池中加入纯水，正极区离子浓度降低，平衡向反应物方向移动，电池电势减小。",
        "ku": "Ger ava paqij li nîv şaneya katodê were zêdekirin, kombûna îyona katodê kêm dibe, hevseng ber bi reaktantan ve diçe û potansiyela pîlê kêm dibe."
      },
      "trap": {
        "tr": "Katot çözeltisine su eklendiğinde pil gerilimi yükselir.",
        "en": "When water is added to the cathode solution, the cell voltage increases.",
        "de": "Wenn der Kathodenlösung Wasser zugesetzt wird, erhöht sich die Zellspannung.",
        "fr": "Lorsque de l'eau est ajoutée à la solution cathodique, la tension de la pile augmente.",
        "ru": "При добавлении воды в катодный раствор напряжение элемента увеличивается.",
        "ar": "عند إضافة الماء إلى محلول الكاثود، يزداد جهد الخلية.",
        "zh": "向正极区溶液中加水时，电池电压升高。",
        "ku": "Dema ku av li çareseriya katodê tê zêdekirin, voltaja pîlê zêde dibe."
      },
      "whyTrapIsFalse": {
        "tr": "Katot iyonu toplam tepkimede girenler tarafındadır; seyreltilince denge girenlere kayar ve gerilim azalır. Su eklemenin gerilimi artırdığı durum anot kabının seyreltilmesidir.",
        "en": "The cathode ion is on the reactant side of the overall reaction; diluting it shifts the equilibrium toward reactants and the voltage falls. Adding water raises the voltage only when the anode compartment is diluted.",
        "de": "Das Kathodenion steht in der Gesamtreaktion auf der Eduktseite; Verdünnen verschiebt das Gleichgewicht zu den Edukten, die Spannung sinkt. Wasserzugabe erhöht die Spannung nur im Anodenraum.",
        "fr": "L'ion de la cathode est du côté des réactifs dans la réaction globale ; le diluer déplace l'équilibre vers les réactifs et la tension baisse. L'ajout d'eau n'augmente la tension que s'il dilue le compartiment anodique.",
        "ru": "Ион катода в суммарной реакции находится среди исходных веществ; при разбавлении равновесие смещается к ним, и напряжение падает. Добавление воды повышает напряжение только при разбавлении анодного пространства.",
        "ar": "أيون الكاثود في جهة المتفاعلات في التفاعل الكلي؛ فإذا خُفّف انزاح الاتزان نحو المتفاعلات وانخفض الجهد. لا ترفع إضافة الماء الجهد إلا عند تخفيف وعاء الأنود.",
        "zh": "正极区的离子在总反应的反应物一侧；稀释它使平衡向反应物方向移动，电压下降。只有稀释负极区时加水才会使电压升高。",
        "ku": "Îyona katodê di reaksiyona giştî de li aliyê têketiyan e; dema tê sivikkirin hevsengî ber bi têketiyan ve diçe û voltaj kêm dibe. Lêzêdekirina avê tenê dema aliyê anodê sivik dike voltajê zêde dike."
      }
    },
    {
      "id": "u21-f10",
      "fact": {
        "tr": "Pil çalıştıkça anot kabındaki iyon derişimi artar, katot kabındaki iyon derişimi azalır; bu nedenle pil gerilimi zamanla düşer ve tepkime dengeye ulaşınca sıfır olur.",
        "en": "As a cell operates, the ion concentration in the anode compartment increases and that in the cathode compartment decreases; therefore the cell voltage falls over time and becomes zero when the reaction reaches equilibrium.",
        "de": "Während eine Zelle arbeitet, steigt die Ionenkonzentration im Anodenraum und sinkt im Kathodenraum; deshalb fällt die Zellspannung mit der Zeit und wird null, wenn die Reaktion das Gleichgewicht erreicht.",
        "fr": "Pendant le fonctionnement d'une pile, la concentration ionique du compartiment anodique augmente et celle du compartiment cathodique diminue ; la tension baisse donc avec le temps et devient nulle lorsque la réaction atteint l'équilibre.",
        "ru": "По мере работы элемента концентрация ионов в анодном пространстве растёт, а в катодном уменьшается; поэтому напряжение со временем падает и становится равным нулю, когда реакция достигает равновесия.",
        "ar": "مع عمل الخلية يزداد تركيز الأيونات في وعاء الأنود ويقل في وعاء الكاثود؛ لذلك ينخفض جهد الخلية مع الزمن ويصبح صفرًا عندما يصل التفاعل إلى الاتزان.",
        "zh": "电池工作时，负极区离子浓度增大，正极区离子浓度减小；因此电池电压随时间下降，反应达到平衡时变为零。",
        "ku": "Her ku pîl dixebite, tîrbûna îyonan li aliyê anodê zêde dibe û li aliyê katodê kêm dibe; ji ber vê yekê voltaja pîlê bi demê re dadikeve û dema reaksiyon digihîje hevsengiyê dibe sifir."
      },
      "trap": {
        "tr": "Bir galvanik pilin gerilimi, pil bitene kadar başlangıçtaki değerinde sabit kalır.",
        "en": "The voltage of a galvanic cell stays constant at its initial value until the cell is exhausted.",
        "de": "Die Spannung einer galvanischen Zelle bleibt bis zu ihrer Erschöpfung konstant auf dem Anfangswert.",
        "fr": "La tension d'une pile galvanique reste constante à sa valeur initiale jusqu'à ce que la pile soit épuisée.",
        "ru": "Напряжение гальванического элемента остаётся постоянным на начальном уровне, пока элемент не разрядится.",
        "ar": "يبقى جهد الخلية الجلفانية ثابتًا عند قيمته الابتدائية حتى تنفد الخلية.",
        "zh": "原电池的电压在电池耗尽之前一直保持初始值不变。",
        "ku": "Voltaja pîleke galvanîk heta ku pîl biqede li ser nirxa xwe ya destpêkê sabît dimîne."
      },
      "whyTrapIsFalse": {
        "tr": "Pil gerilimi derişimlere bağlıdır ve çalışma sırasında derişimler değiştiği için sabit kalamaz. Ürün iyonu arttıkça, giren iyon azaldıkça gerilim azalır ve denge kurulunca sıfıra iner.",
        "en": "Cell voltage depends on concentrations, and since concentrations change during operation it cannot stay constant. As the product ion increases and the reactant ion decreases, the voltage falls and reaches zero at equilibrium.",
        "de": "Die Zellspannung hängt von den Konzentrationen ab, die sich während des Betriebs ändern; daher kann sie nicht konstant bleiben. Mit steigendem Produkt- und sinkendem Eduktion fällt sie und wird im Gleichgewicht null.",
        "fr": "La tension dépend des concentrations, qui changent pendant le fonctionnement ; elle ne peut donc pas rester constante. À mesure que l'ion produit augmente et que l'ion réactif diminue, elle baisse et devient nulle à l'équilibre.",
        "ru": "Напряжение элемента зависит от концентраций, а они при работе меняются, поэтому оно не может оставаться постоянным. По мере роста концентрации иона-продукта и уменьшения концентрации иона-реагента напряжение падает и в состоянии равновесия становится равным нулю.",
        "ar": "يعتمد جهد الخلية على التراكيز التي تتغير أثناء التشغيل، لذا لا يمكن أن يبقى ثابتًا. فكلما ازداد أيون الناتج وقلّ أيون المتفاعل انخفض الجهد حتى يصبح صفرًا عند الاتزان.",
        "zh": "电池电压取决于浓度，而工作过程中浓度不断变化，所以电压不可能保持不变。随着生成物离子增多、反应物离子减少，电压下降，达到平衡时降为零。",
        "ku": "Voltaja pîlê bi tîrbûnan ve girêdayî ye û ji ber ku tîrbûn di dema xebatê de diguherin nikare sabît bimîne. Her ku îyona berhemê zêde dibe û îyona têketiyê kêm dibe voltaj dadikeve û di hevsengiyê de dibe sifir."
      }
    },
    {
      "id": "u21-f11",
      "fact": {
        "tr": "Derişim pilleri: Aynı elektrot ve aynı çözeltilerin farklı derişimleriyle kurulur; derişimi küçük olan yarı hücre anottur.",
        "en": "Concentration cells: they are built from identical electrodes and solutions of the same ion at different concentrations; the half-cell with the lower concentration is the ANODE.",
        "de": "Konzentrationszellen: Sie bestehen aus gleichen Elektroden und Lösungen desselben Ions mit unterschiedlicher Konzentration; die Halbzelle mit der geringeren Konzentration ist die ANODE.",
        "fr": "Piles de concentration : elles sont constituées des mêmes électrodes et de solutions du même ion à des concentrations différentes ; la demi-pile la moins concentrée est l'ANODE.",
        "ru": "Концентрационный элемент состоит из одинаковых электродов, погружённых в растворы одного и того же иона разной концентрации; анодом служит полуэлемент с меньшей концентрацией.",
        "ar": "خلايا التركيز: تتكون من قطبين متماثلين ومحلولين للأيون نفسه بتركيزين مختلفين؛ ونصف الخلية ذو التركيز الأقل هو الأنود.",
        "zh": "浓差电池：由相同的电极和同种离子不同浓度的溶液构成；浓度较小的半电池为负极。",
        "ku": "Pîlên tîrbûnê: bi heman elektrodê û bi tîrbûnên cuda yên heman çareseriyê têne sazkirin; nîvhucreya ku tîrbûna wê kêmtir e ANOD e."
      },
      "trap": {
        "tr": "Derişim pillerinde derişimi büyük olan hücre anottur.",
        "en": "In concentration cells, the half-cell with the higher concentration is the anode.",
        "de": "Bei Konzentrationszellen ist die Halbzelle mit der höheren Konzentration die Anode.",
        "fr": "Dans les piles de concentration, la demi-pile la plus concentrée est l'anode.",
        "ru": "В концентрационных элементах анодом является полуэлемент с большей концентрацией.",
        "ar": "في خلايا التركيز يكون نصف الخلية ذو التركيز الأعلى هو الأنود.",
        "zh": "在浓差电池中，浓度较大的半电池是负极。",
        "ku": "Di pîlên tîrbûnê de hucreya ku tîrbûna wê mezintir e anod e."
      },
      "whyTrapIsFalse": {
        "tr": "Derişik çözeltideki iyonlar indirgenmeye daha yatkın olduğundan derişik taraf katottur. Seyreltik taraftaki elektrot yükseltgenerek kendi çözeltisinin derişimini artırır; yani anot seyreltik taraftır.",
        "en": "Ions in the concentrated solution are more readily reduced, so the concentrated side is the cathode. The electrode on the dilute side is oxidized and raises the concentration of its own solution, so the anode is the dilute side.",
        "de": "Ionen der konzentrierten Lösung werden leichter reduziert, daher ist die konzentrierte Seite die Kathode. Die Elektrode auf der verdünnten Seite wird oxidiert und erhöht die Konzentration ihrer Lösung – die Anode ist also die verdünnte Seite.",
        "fr": "Les ions de la solution concentrée se réduisent plus facilement : le côté concentré est la cathode. L'électrode du côté dilué s'oxyde et augmente la concentration de sa solution ; l'anode est donc le côté dilué.",
        "ru": "Ионы концентрированного раствора легче восстанавливаются, поэтому концентрированная сторона — катод. Электрод в разбавленном растворе окисляется и повышает концентрацию своего раствора, то есть анод — разбавленная сторона.",
        "ar": "أيونات المحلول المركز أكثر قابلية للاختزال، لذا يكون الجانب المركز هو الكاثود. أما القطب في الجانب المخفف فيتأكسد ويرفع تركيز محلوله، أي أن الأنود هو الجانب المخفف.",
        "zh": "浓溶液中的离子更容易被还原，因此浓的一侧是正极。稀溶液一侧的电极被氧化，使本侧溶液浓度升高，所以负极在稀的一侧。",
        "ku": "Îyonên di çareseriya tîr de hêsantir kêm dibin, loma aliyê tîr katod e. Elektroda li aliyê sivik oksîd dibe û tîrbûna çareseriya xwe zêde dike; ango anod aliyê sivik e."
      }
    },
    {
      "id": "u21-f12",
      "fact": {
        "tr": "Derişim pilinde derişimler eşitlendiğinde sistem dengeye ulaşır ve pil gerilimi Epil = 0 olur (pil biter).",
        "en": "In a concentration cell, when the concentrations become equal the system reaches equilibrium and the cell voltage becomes Ecell = 0 (the cell is exhausted).",
        "de": "Wenn sich in einer Konzentrationszelle die Konzentrationen angeglichen haben, erreicht das System das Gleichgewicht und die Zellspannung wird EZelle = 0 (die Zelle ist erschöpft).",
        "fr": "Dans une pile de concentration, lorsque les concentrations s'égalisent, le système atteint l'équilibre et la tension de la pile devient Epile = 0 (la pile est épuisée).",
        "ru": "Когда концентрации в концентрационном элементе выравниваются, система достигает равновесия и напряжение элемента становится Eэл = 0 (элемент разряжен).",
        "ar": "في خلية التركيز، عندما يتساوى التركيزان يصل النظام إلى الاتزان ويصبح جهد الخلية Eخلية = 0 (تتوقف الخلية).",
        "zh": "浓差电池中两侧浓度相等时，体系达到平衡，电池电压变为零(E电池 = 0，电池耗尽)。",
        "ku": "Di pîla tîrbûnê de dema tîrbûn wekhev dibin, sîstem digihîje hevsengiyê û voltaja pîlê dibe Epîl = 0 (pîl diqede)."
      },
      "trap": {
        "tr": "Derişim pilinde derişimler eşitlendiğinde pil gerilimi en büyük değerine ulaşır.",
        "en": "In a concentration cell, when the concentrations become equal the cell voltage reaches its maximum.",
        "de": "In einer Konzentrationszelle erreicht die Zellspannung bei gleichen Konzentrationen ihr Maximum.",
        "fr": "Dans une pile de concentration, lorsque les concentrations sont égales, la tension de la pile atteint son maximum.",
        "ru": "В концентрационном элементе при равенстве концентраций напряжение достигает максимума.",
        "ar": "في خلية التركيز، عندما يتساوى التركيزان يصل جهد الخلية إلى قيمته العظمى.",
        "zh": "浓差电池中两侧浓度相等时，电池电压达到最大值。",
        "ku": "Di pîla tîrbûnê de dema tîrbûn wekhev dibin, voltaja pîlê digihîje nirxa xwe ya herî mezin."
      },
      "whyTrapIsFalse": {
        "tr": "Derişim pilinin itici gücü yalnızca derişim farkıdır; fark kapandıkça gerilim düşer. Derişimler eşitlendiğinde itici güç kalmaz, gerilim maksimum değil sıfır olur.",
        "en": "The only driving force of a concentration cell is the concentration difference; as it closes, the voltage falls. When the concentrations become equal there is no driving force left, so the voltage is zero, not maximum.",
        "de": "Die einzige Triebkraft einer Konzentrationszelle ist der Konzentrationsunterschied; schwindet er, sinkt die Spannung. Bei gleichen Konzentrationen gibt es keine Triebkraft mehr – die Spannung ist null, nicht maximal.",
        "fr": "La seule force motrice d'une pile de concentration est la différence de concentration ; quand elle diminue, la tension baisse. À concentrations égales, il n'y a plus de force motrice : la tension est nulle, pas maximale.",
        "ru": "Единственная движущая сила концентрационного элемента — разность концентраций; по мере её уменьшения напряжение падает. При равных концентрациях движущей силы нет, и напряжение равно нулю, а не максимально.",
        "ar": "القوة الدافعة الوحيدة لخلية التركيز هي فرق التركيز، وكلما تقلّص انخفض الجهد. وعند تساوي التراكيز لا تبقى قوة دافعة فيصبح الجهد صفرًا لا قيمة عظمى.",
        "zh": "浓差电池唯一的驱动力是浓度差，浓度差缩小，电压随之下降。浓度相等时不再有驱动力，电压为零而不是最大。",
        "ku": "Hêza ajotinê ya pîla tîrbûnê tenê cudahiya tîrbûnê ye; her ku ew kêm dibe voltaj dadikeve. Dema tîrbûn wekhev dibin hêza ajotinê namîne û voltaj ne herî zêde, sifir e."
      }
    },
    {
      "id": "u21-f13",
      "fact": {
        "tr": "Pil tepkimeleri genellikle ekzotermiktir; ekzotermik bir pil tepkimesinde sıcaklık artırılırsa Le Chatelier ilkesine göre denge sola kayar ve pil gerilimi düşer.",
        "en": "Cell reactions are usually exothermic; for an exothermic cell reaction, raising the temperature shifts the equilibrium to the left (Le Chatelier's principle) and the cell voltage decreases.",
        "de": "Zellreaktionen sind meist exotherm; wird bei einer exothermen Zellreaktion die Temperatur erhöht, verschiebt sich das Gleichgewicht nach dem Prinzip von Le Chatelier nach links und die Zellspannung sinkt.",
        "fr": "Les réactions de pile sont généralement exothermiques ; pour une réaction de pile exothermique, une hausse de température déplace l'équilibre vers la gauche (principe de Le Chatelier) et la tension de la pile diminue.",
        "ru": "Реакции в гальванических элементах обычно экзотермичны; если повысить температуру, то по принципу Ле Шателье равновесие экзотермической реакции смещается влево и напряжение элемента уменьшается.",
        "ar": "تفاعلات الخلايا غالبًا طاردة للحرارة؛ وفي تفاعل خلية طارد للحرارة يؤدي رفع درجة الحرارة إلى إزاحة الاتزان نحو اليسار (مبدأ لوشاتلييه) فينخفض جهد الخلية.",
        "zh": "电池反应通常是放热反应；对放热的电池反应，升高温度时根据勒夏特列原理平衡向左移动，电池电压降低。",
        "ku": "Reaksiyonên pîlê bi gelemperî ekzotermîk in; di reaksiyoneke pîlê ya ekzotermîk de heke germahî zêde bibe, li gorî prensîba Le Chatelier hevsengî ber bi çepê ve diçe û voltaja pîlê kêm dibe."
      },
      "trap": {
        "tr": "Ekzotermik bir pil tepkimesinde sıcaklık artırılırsa pil gerilimi artar.",
        "en": "For an exothermic cell reaction, raising the temperature increases the cell voltage.",
        "de": "Bei einer exothermen Zellreaktion steigt die Zellspannung, wenn die Temperatur erhöht wird.",
        "fr": "Pour une réaction de pile exothermique, une hausse de température augmente la tension de la pile.",
        "ru": "Если реакция в элементе экзотермическая, повышение температуры увеличивает напряжение элемента.",
        "ar": "في تفاعل خلية طارد للحرارة، يؤدي رفع درجة الحرارة إلى زيادة جهد الخلية.",
        "zh": "对放热的电池反应，升高温度会使电池电压升高。",
        "ku": "Di reaksiyoneke pîlê ya ekzotermîk de, zêdekirina germahiyê voltaja pîlê zêde dike."
      },
      "whyTrapIsFalse": {
        "tr": "Ekzotermik tepkimede sıcaklık artışı dengeyi girenlere kaydırır; bu da pilin elektron akıtma eğilimini azaltır. Bu yüzden gerilim artmaz, düşer.",
        "en": "For an exothermic reaction, raising the temperature shifts the equilibrium toward reactants, which weakens the cell's tendency to push electrons. So the voltage falls, it does not rise.",
        "de": "Bei einer exothermen Reaktion verschiebt Temperaturerhöhung das Gleichgewicht zu den Edukten und schwächt so die Triebkraft der Zelle. Die Spannung sinkt daher, statt zu steigen.",
        "fr": "Pour une réaction exothermique, une hausse de température déplace l'équilibre vers les réactifs, ce qui affaiblit la tendance de la pile à faire circuler les électrons. La tension baisse donc au lieu d'augmenter.",
        "ru": "В экзотермической реакции повышение температуры смещает равновесие в сторону исходных веществ, и способность элемента давать ток ослабевает. Поэтому напряжение падает, а не растёт.",
        "ar": "في التفاعل الطارد للحرارة يزيح رفع درجة الحرارة الاتزان نحو المتفاعلات فيُضعف ميل الخلية إلى دفع الإلكترونات، لذا ينخفض الجهد ولا يرتفع.",
        "zh": "对放热反应，升高温度使平衡向反应物方向移动，削弱电池推动电子流动的倾向，所以电压下降而不是升高。",
        "ku": "Di reaksiyona ekzotermîk de bilindkirina germahiyê hevsengiyê ber bi têketiyan ve dibe û meyla pîlê ya herikandina elektronan qels dike. Ji ber vê yekê voltaj zêde nabe, dadikeve."
      }
    },
    {
      "id": "u21-f14",
      "fact": {
        "tr": "Pil denklemi bir katsayı ile çarpılırsa E°pil değeri değişmez (potansiyel şiddet özelliğidir).",
        "en": "If the cell equation is multiplied by a coefficient, the E°cell value does NOT change (potential is an intensive property).",
        "de": "Wird die Zellgleichung mit einem Faktor multipliziert, ändert sich E°Zelle NICHT (das Potential ist eine intensive Größe).",
        "fr": "Si l'équation de la pile est multipliée par un coefficient, la valeur de E°pile ne change PAS (le potentiel est une grandeur intensive).",
        "ru": "Если уравнение реакции элемента умножить на коэффициент, значение E°эл не изменится (потенциал — интенсивная величина).",
        "ar": "إذا ضُربت معادلة الخلية في معامل فإن قيمة E°خلية لا تتغير (الجهد خاصية مكثفة).",
        "zh": "电池反应方程式乘以某个系数时，E°电池 的值不变（电势是强度性质）。",
        "ku": "Heke hevkêşeya pîlê bi katsayiyekê were zêdekirin, nirxa E°pîl NAGUHERE (potansiyel taybetmendiyeke întensîf e)."
      },
      "trap": {
        "tr": "Tepkime 2 ile çarpılırsa E°pil de 2 ile çarpılır.",
        "en": "If the reaction is multiplied by 2, E°cell is also multiplied by 2.",
        "de": "Wenn die Reaktion mit 2 multipliziert wird, wird auch E°Zelle mit 2 multipliziert.",
        "fr": "Si la réaction est multipliée par 2, E°pile est également multiplié par 2.",
        "ru": "Если реакцию умножить на 2, E°эл также умножится на 2.",
        "ar": "إذا تم ضرب التفاعل بـ 2، يتم ضرب E°خلية أيضًا بـ 2.",
        "zh": "如果反应方程式乘以 2，则 E°电池 也乘以 2。",
        "ku": "Ger reaksîyon bi 2-yê were zêdekirin, E°pîl jî bi 2-yê tê zêdekirin."
      },
      "whyTrapIsFalse": {
        "tr": "Potansiyel, aktarılan elektron başına düşen itici gücü gösteren şiddet özelliğidir; madde miktarına bağlı değildir. Denklem 2 ile çarpılınca aktarılan elektron sayısı iki katına çıkar ama E°pil aynı kalır.",
        "en": "Potential is an intensive property expressing the driving force per electron transferred; it does not depend on the amount of substance. Multiplying the equation by 2 doubles the electrons transferred, but E°cell stays the same.",
        "de": "Das Potential ist eine intensive Größe, die die Triebkraft pro übertragenem Elektron angibt; es hängt nicht von der Stoffmenge ab. Wird die Gleichung mit 2 multipliziert, verdoppelt sich die Elektronenzahl, E°Zelle bleibt gleich.",
        "fr": "Le potentiel est une grandeur intensive qui exprime la force motrice par électron transféré ; il ne dépend pas de la quantité de matière. Multiplier l'équation par 2 double le nombre d'électrons, mais E°pile reste identique.",
        "ru": "Потенциал — интенсивное свойство, выражающее движущую силу в расчёте на один перенесённый электрон; он не зависит от количества вещества. При умножении уравнения на 2 число электронов удваивается, а E°эл не меняется.",
        "ar": "الجهد خاصية شدّية تعبّر عن القوة الدافعة لكل إلكترون منقول، ولا تعتمد على كمية المادة. فعند ضرب المعادلة في 2 يتضاعف عدد الإلكترونات المنقولة لكن E°خلية يبقى كما هو.",
        "zh": "电势是强度性质，表示每转移一个电子的驱动力，与物质的量无关。方程式乘以 2 时转移电子数加倍，但 E°电池 不变。",
        "ku": "Potansiyel taybetmendiyeke şiddetê ye ku hêza ajotinê ya ji bo her elektronekî veguhestî nîşan dide; bi mîqdara madeyê ve ne girêdayî ye. Dema hevkêşe bi 2 tê zêdekirin hejmara elektronan du qat dibe, lê E°pîl wek xwe dimîne."
      }
    },
    {
      "id": "u21-f15",
      "fact": {
        "tr": "Tuz köprüsü çekilirse devreden akım geçmez ve pil anında durur.",
        "en": "If the salt bridge is removed, no current flows through the circuit and the cell stops immediately.",
        "de": "Wird die Salzbrücke entfernt, fließt kein Strom mehr durch den Stromkreis und die Zelle kommt sofort zum Stillstand.",
        "fr": "Si l'on retire le pont salin, aucun courant ne circule dans le circuit et la pile s'arrête immédiatement.",
        "ru": "Если убрать солевой мостик, ток в цепи прекращается и элемент сразу перестаёт работать.",
        "ar": "إذا أزيلت القنطرة الملحية لا يمر تيار في الدائرة وتتوقف الخلية فورًا.",
        "zh": "如果取走盐桥，电路中没有电流通过，电池立即停止工作。",
        "ku": "Ger pira xwê were rakirin, di çerxê de herikîn çênabe û pîl yekser disekine."
      },
      "trap": {
        "tr": "Tuz köprüsü olmadan da galvanik piller sonsuza dek çalışır.",
        "en": "Even without a salt bridge, galvanic cells keep working forever.",
        "de": "Auch ohne Salzbrücke arbeiten galvanische Zellen ewig weiter.",
        "fr": "Même sans pont salin, les piles galvaniques fonctionnent indéfiniment.",
        "ru": "Даже без солевого мостика гальванические элементы работают вечно.",
        "ar": "حتى من دون قنطرة ملحية تعمل الخلايا الجلفانية إلى الأبد.",
        "zh": "即使没有盐桥，原电池也能永远工作。",
        "ku": "Bêyî pira xwê jî pîlên galvanîk her û her dixebitin."
      },
      "whyTrapIsFalse": {
        "tr": "Tuz köprüsü olmazsa anot kabında pozitif, katot kabında negatif yük birikir ve elektron akışı hemen durur. Köprü olsa bile tepkime dengeye ulaşınca pil biter; hiçbir pil sonsuza dek çalışmaz.",
        "en": "Without a salt bridge, positive charge builds up in the anode compartment and negative charge in the cathode compartment, and electron flow stops at once. Even with a bridge, the cell runs down when the reaction reaches equilibrium; no cell works forever.",
        "de": "Ohne Salzbrücke sammelt sich im Anodenraum positive und im Kathodenraum negative Ladung, und der Elektronenfluss stoppt sofort. Auch mit Brücke ist die Zelle erschöpft, sobald das Gleichgewicht erreicht ist; keine Zelle arbeitet ewig.",
        "fr": "Sans pont salin, une charge positive s'accumule côté anode et une charge négative côté cathode, et le flux d'électrons s'arrête aussitôt. Même avec un pont, la pile s'épuise quand la réaction atteint l'équilibre ; aucune pile ne fonctionne indéfiniment.",
        "ru": "Без солевого мостика в анодном пространстве накапливается положительный, а в катодном — отрицательный заряд, и поток электронов сразу прекращается. Даже с мостиком элемент разряжается, когда реакция достигает равновесия; ни один элемент не работает вечно.",
        "ar": "بدون القنطرة الملحية تتراكم شحنة موجبة في وعاء الأنود وسالبة في وعاء الكاثود فيتوقف سريان الإلكترونات فورًا. وحتى مع القنطرة تنفد الخلية عندما يصل التفاعل إلى الاتزان؛ فلا توجد خلية تعمل إلى الأبد.",
        "zh": "没有盐桥时，负极区积累正电荷、正极区积累负电荷，电子流动立即停止。即使有盐桥，反应达到平衡时电池也会耗尽；没有任何电池能永远工作。",
        "ku": "Bê pira xwê li aliyê anodê bara erênî û li aliyê katodê bara neyînî kom dibe û herikîna elektronan yekser disekine. Bi pirê jî dema reaksiyon digihîje hevsengiyê pîl diqede; tu pîl her û her naxebite."
      }
    },
    {
      "id": "u21-f16",
      "fact": {
        "tr": "Daniell pilinde Zn anot (Zn → Zn2+ + 2e-) ve Cu katottur (Cu2+ + 2e- → Cu); E°pil = 1,10 V'tur.",
        "en": "In the Daniell cell, Zn is the anode (Zn → Zn2+ + 2e-) and Cu is the cathode (Cu2+ + 2e- → Cu); E°cell = 1.10 V.",
        "de": "Im Daniell-Element ist Zn die Anode (Zn → Zn2+ + 2e-) und Cu die Kathode (Cu2+ + 2e- → Cu); E°Zelle = 1,10 V.",
        "fr": "Dans la pile Daniell, Zn est l'anode (Zn → Zn2+ + 2e-) et Cu est la cathode (Cu2+ + 2e- → Cu) ; E°pile = 1,10 V.",
        "ru": "В элементе Даниэля Zn — анод (Zn → Zn2+ + 2e-), а Cu — катод (Cu2+ + 2e- → Cu); E°эл = 1,10 В.",
        "ar": "في خلية دانيال يكون Zn هو الأنود (Zn → Zn2+ + 2e-) ويكون Cu هو الكاثود (Cu2+ + 2e- → Cu)؛ E°خلية = 1.10 V.",
        "zh": "在丹尼尔电池中，Zn 为负极(Zn → Zn2+ + 2e-)，Cu 为正极(Cu2+ + 2e- → Cu)；E°电池 = 1.10 V。",
        "ku": "Di pîla Daniell de Zn anod e (Zn → Zn2+ + 2e-) û Cu katod e (Cu2+ + 2e- → Cu); E°pîl = 1,10 V."
      },
      "trap": {
        "tr": "Daniell pilinde bakır elektrot anot olarak davranır.",
        "en": "In the Daniell cell, the copper electrode acts as the anode.",
        "de": "Im Daniell-Element fungiert die Kupferelektrode als Anode.",
        "fr": "Dans la pile Daniell, l'électrode de cuivre joue le rôle d'anode.",
        "ru": "В элементе Даниэля медный электрод служит анодом.",
        "ar": "في خلية دانيال يعمل قطب النحاس كأنود.",
        "zh": "在丹尼尔电池中，铜电极作负极。",
        "ku": "Di pîla Daniell de elektroda sifir wekî anod tevdigere."
      },
      "whyTrapIsFalse": {
        "tr": "Bakırın indirgenme potansiyeli (+0,34 V) çinkonunkinden (-0,76 V) büyüktür; bu yüzden Cu2+ iyonları indirgenir ve bakır katot olur. Daha aktif olan çinko yükseltgenerek anot görevi görür.",
        "en": "Copper's reduction potential (+0.34 V) is greater than zinc's (-0.76 V), so Cu2+ ions are reduced and copper is the cathode. The more active zinc is oxidized and acts as the anode.",
        "de": "Das Reduktionspotential von Kupfer (+0,34 V) ist größer als das von Zink (-0,76 V); daher werden Cu2+-Ionen reduziert und Kupfer ist die Kathode. Das aktivere Zink wird oxidiert und ist die Anode.",
        "fr": "Le potentiel de réduction du cuivre (+0,34 V) est supérieur à celui du zinc (-0,76 V) : les ions Cu2+ sont réduits et le cuivre est la cathode. Le zinc, plus actif, s'oxyde et joue le rôle d'anode.",
        "ru": "Потенциал восстановления меди (+0,34 В) больше, чем у цинка (-0,76 В), поэтому восстанавливаются ионы Cu2+ и медь является катодом. Более активный цинк окисляется и служит анодом.",
        "ar": "جهد اختزال النحاس (+0.34 V) أكبر من جهد اختزال الخارصين (-0.76 V)، لذا تُختزل أيونات Cu2+ ويكون النحاس هو الكاثود. أما الخارصين الأنشط فيتأكسد ويعمل أنودًا.",
        "zh": "铜的还原电势(+0.34 V)大于锌的(-0.76 V)，因此 Cu2+ 被还原，铜是正极。较活泼的锌被氧化，作负极。",
        "ku": "Potansiyela reduksiyonê ya sifir (+0,34 V) ji ya zinkê (-0,76 V) mezintir e; loma îyonên Cu2+ kêm dibin û sifir katod e. Zinka çalaktir oksîd dibe û wek anod kar dike."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u21-c01",
      "conceptA": {
        "tr": "Anot",
        "en": "Anode",
        "de": "Anode",
        "fr": "Anode",
        "ru": "Анод",
        "ar": "الأنود",
        "zh": "负极",
        "ku": "Anod"
      },
      "conceptB": {
        "tr": "Katot",
        "en": "Cathode",
        "de": "Kathode",
        "fr": "Cathode",
        "ru": "Катод",
        "ar": "الكاثود",
        "zh": "正极",
        "ku": "Katod"
      },
      "distinction": {
        "tr": "Anotta yükseltgenme olur ve elektrodun kütlesi azalır; katotta indirgenme olur ve elektrodun kütlesi artar.",
        "en": "Oxidation occurs at the anode and the electrode mass decreases; reduction occurs at the cathode and the electrode mass increases.",
        "de": "An der Anode findet die Oxidation statt und die Elektrodenmasse nimmt ab; an der Kathode findet die Reduktion statt und die Elektrodenmasse nimmt zu.",
        "fr": "L'oxydation se produit à l'anode et la masse de l'électrode diminue ; la réduction se produit à la cathode et la masse de l'électrode augmente.",
        "ru": "Анод — электрод, на котором идёт окисление, и его масса уменьшается; катод — электрод, на котором идёт восстановление, и его масса увеличивается.",
        "ar": "عند الأنود تحدث الأكسدة وتنقص كتلة القطب؛ وعند الكاثود يحدث الاختزال وتزداد كتلة القطب.",
        "zh": "原电池的负极发生氧化反应，电极质量通常减少；正极发生还原反应，电极质量通常增加。",
        "ku": "Li anodê oksîdasyon çêdibe û girseya elektrodê kêm dibe; li katodê reduksiyon çêdibe û girseya elektrodê zêde dibe."
      }
    },
    {
      "id": "u21-c02",
      "conceptA": {
        "tr": "Kimyasal Pil",
        "en": "Chemical Cell",
        "de": "Chemische Zelle",
        "fr": "Pile chimique",
        "ru": "Химический гальванический элемент",
        "ar": "الخلية الكيميائية",
        "zh": "化学电池",
        "ku": "Pîla Kîmyewî"
      },
      "conceptB": {
        "tr": "Derişim Pili",
        "en": "Concentration Cell",
        "de": "Konzentrationselement",
        "fr": "Pile de concentration",
        "ru": "Концентрационный элемент",
        "ar": "خلية التركيز",
        "zh": "浓差电池",
        "ku": "Pîla Tîrbûnê"
      },
      "distinction": {
        "tr": "Kimyasal pilde iki yarı hücre farklı elektrot ve çözeltilerden oluşur (ör. Zn/Zn2+ ve Cu/Cu2+); derişim pilinde iki yarı hücrede aynı elektrot ve aynı iyonun farklı derişimli çözeltileri bulunur.",
        "en": "In a chemical cell the two half-cells consist of different electrodes and solutions (e.g., Zn/Zn2+ and Cu/Cu2+); in a concentration cell both half-cells have the same electrode and solutions of the same ion at different concentrations.",
        "de": "Chemische Zelle: zwei Halbzellen mit verschiedenen Elektroden und Lösungen (z. B. Zn/Zn2+ und Cu/Cu2+); Konzentrationselement: beide Halbzellen enthalten die gleiche Elektrode und Lösungen desselben Ions mit unterschiedlicher Konzentration.",
        "fr": "Pile chimique : les deux demi-piles sont formées d'électrodes et de solutions différentes (p. ex. Zn/Zn2+ et Cu/Cu2+) ; pile de concentration : les deux demi-piles comportent la même électrode et des solutions du même ion à des concentrations différentes.",
        "ru": "Химический гальванический элемент состоит из двух полуэлементов с разными электродами и растворами (например, Zn/Zn2+ и Cu/Cu2+); в концентрационном элементе оба полуэлемента содержат одинаковые электроды и растворы одного и того же иона разной концентрации.",
        "ar": "في الخلية الكيميائية يتكون نصفا الخلية من قطبين ومحلولين مختلفين (مثل Zn/Zn2+ و Cu/Cu2+)؛ أما في خلية التركيز فيحتوي نصفا الخلية على القطب نفسه ومحلولين للأيون نفسه بتركيزين مختلفين.",
        "zh": "化学电池的两个半电池由不同的电极和溶液组成(如 Zn/Zn2+ 和 Cu/Cu2+)；浓差电池的两个半电池电极相同，溶液为同种离子但浓度不同。",
        "ku": "Di pîla kîmyewî de du nîvhucre ji elektrod û çareseriyên cuda pêk tên (mînak Zn/Zn2+ û Cu/Cu2+); di pîla tîrbûnê de her du nîvhucre xwedî heman elektrodê û çareseriyên heman îyonê yên bi tîrbûnên cuda ne."
      }
    },
    {
      "id": "u21-c03",
      "conceptA": {
        "tr": "Standart Hidrojen Elektrodu (SHE)",
        "en": "Standard Hydrogen Electrode (SHE)",
        "de": "Standard-Wasserstoffelektrode (SHE)",
        "fr": "Électrode standard à hydrogène (ESH)",
        "ru": "Стандартный водородный электрод (СВЭ)",
        "ar": "قطب الهيدروجين القياسي (SHE)",
        "zh": "标准氢电极(SHE)",
        "ku": "Elektroda Hîdrojenê ya Standard (SHE)"
      },
      "conceptB": {
        "tr": "Standart İndirgenme Potansiyeli (E°ind)",
        "en": "Standard Reduction Potential (E°red)",
        "de": "Standardreduktionspotential (E°Red)",
        "fr": "Potentiel standard de réduction (E°réd)",
        "ru": "Стандартный потенциал восстановления (E°восст)",
        "ar": "جهد الاختزال القياسي (E°اختزال)",
        "zh": "标准还原电势(E°还原)",
        "ku": "Potansiyela Reduksiyonê ya Standard (E°red)"
      },
      "distinction": {
        "tr": "SHE, potansiyeli 0,00 V kabul edilen referans elektrottur; standart indirgenme potansiyeli bir yarı hücrenin standart koşullarda (25 °C, 1 atm, 1 M) SHE'ye karşı ölçülen indirgenme eğilimidir.",
        "en": "The SHE is the reference electrode whose potential is defined as 0.00 V; the standard reduction potential is a half-cell's tendency to be reduced, measured against the SHE under standard conditions (25 °C, 1 atm, 1 M).",
        "de": "Die SHE ist die Bezugselektrode, deren Potential als 0,00 V festgelegt ist; das Standardreduktionspotential ist die gegen die SHE unter Standardbedingungen (25 °C, 1 atm, 1 M) gemessene Reduktionsneigung einer Halbzelle.",
        "fr": "L'ESH est l'électrode de référence dont le potentiel est fixé à 0,00 V ; le potentiel standard de réduction est la tendance d'une demi-pile à être réduite, mesurée par rapport à l'ESH dans les conditions standard (25 °C, 1 atm, 1 M).",
        "ru": "Стандартный водородный электрод (СВЭ) — электрод сравнения, потенциал которого условно принят равным 0,00 В; стандартный потенциал восстановления — склонность полуэлемента к восстановлению, измеренная относительно этого электрода сравнения при стандартных условиях (25 °C, 1 атм, 1 M).",
        "ar": "قطب الهيدروجين القياسي هو القطب المرجعي الذي يُعتبر جهده 0.00 V؛ أما جهد الاختزال القياسي فهو ميل نصف الخلية إلى الاختزال مقيسًا مقابل قطب الهيدروجين القياسي في الظروف القياسية (25 °C، 1 atm، 1 M).",
        "zh": "标准氢电极(SHE)是电势规定为 0.00 V 的参比电极；标准还原电势(E°还原)是半电池在标准条件(25 °C、1 atm、1 M)下以氢电极为基准测得的被还原倾向。",
        "ku": "SHE elektroda referansê ye ku potansiyela wê 0,00 V tê qebûlkirin; potansiyela reduksiyonê ya standard meyla nîvhucreyekê ya kêmbûnê ye ku di şertên standard de (25 °C, 1 atm, 1 M) li hember SHE tê pîvan."
      }
    },
    {
      "id": "u21-c04",
      "conceptA": {
        "tr": "Galvanik Hücre (Pil)",
        "en": "Galvanic Cell (Battery)",
        "de": "Galvanische Zelle (Batterie)",
        "fr": "Cellule galvanique (batterie)",
        "ru": "Гальванический элемент (источник тока)",
        "ar": "خلية كلفانية (بطارية)",
        "zh": "原电池",
        "ku": "Hucreya Galvanîk (Pîl)"
      },
      "conceptB": {
        "tr": "Elektrolitik Hücre",
        "en": "Electrolytic Cell",
        "de": "Elektrolytische Zelle",
        "fr": "Cellule électrolytique",
        "ru": "Электролизёр (электролитическая ячейка)",
        "ar": "خلية التحليل الكهربائي",
        "zh": "电解池",
        "ku": "Hucreya Elektrolîtîk"
      },
      "distinction": {
        "tr": "Galvanik hücre kimyasal enerjiyi istemli olarak elektrik enerjisine çevirir (Epil > 0); elektrolitik hücre elektrikle istemsiz bir tepkimeyi yürütür.",
        "en": "A galvanic cell converts chemical energy into electrical energy spontaneously (Ecell > 0); electrolysis uses electricity to drive a non-spontaneous reaction.",
        "de": "Eine galvanische Zelle wandelt chemische Energie freiwillig in elektrische Energie um (EZelle > 0); die Elektrolyse erzwingt mit elektrischem Strom eine nicht freiwillige Reaktion.",
        "fr": "Une pile galvanique convertit spontanément l'énergie chimique en énergie électrique (Epile > 0) ; l'électrolyse utilise l'électricité pour réaliser une réaction non spontanée.",
        "ru": "Гальванический элемент самопроизвольно превращает химическую энергию в электрическую (Eэл > 0); электролизёр за счёт электрического тока осуществляет несамопроизвольную реакцию.",
        "ar": "تحوّل الخلية الجلفانية الطاقة الكيميائية إلى طاقة كهربائية تلقائيًا (Eخلية > 0)؛ أما التحليل الكهربائي فيستخدم الكهرباء لإحداث تفاعل غير تلقائي.",
        "zh": "原电池将自发反应的化学能转化为电能(E电池 > 0)；电解池则利用电能驱动非自发反应。",
        "ku": "Pîla galvanîk enerjiya kîmyewî bi awayekî xweber vediguherîne enerjiya elektrîkê (Epîl > 0); elektrolîz bi elektrîkê reaksiyoneke ne-xweber pêk tîne."
      }
    },
    {
      "id": "u21-c05",
      "conceptA": {
        "tr": "Standart Pil Potansiyeli (E°pil)",
        "en": "Standard Cell Potential (E°cell)",
        "de": "Standardzellpotential (E°Zelle)",
        "fr": "Potentiel standard de pile (E°pile)",
        "ru": "Стандартный потенциал элемента (E°эл)",
        "ar": "جهد الخلية القياسي (E°خلية)",
        "zh": "标准电池电势(E°电池)",
        "ku": "Potansiyela Standard a Pîlê (E°pîl)"
      },
      "conceptB": {
        "tr": "Gerçek Pil Potansiyeli (Epil)",
        "en": "Actual Cell Potential (Ecell)",
        "de": "Tatsächliches Zellpotential (EZelle)",
        "fr": "Potentiel réel de pile (Epile)",
        "ru": "Реальный потенциал элемента (Eэл)",
        "ar": "جهد الخلية الفعلي (Eخلية)",
        "zh": "实际电池电势(E电池)",
        "ku": "Potansiyela Rastîn a Pîlê (Epîl)"
      },
      "distinction": {
        "tr": "E°pil, standart koşullardaki (25 °C, 1 atm, 1 M) pil potansiyelidir ve standart yarı hücre potansiyellerinden hesaplanır; Epil ise pilin o anki derişim ve sıcaklıktaki gerilimidir, derişimler değiştikçe değişir ve pil çalıştıkça azalır.",
        "en": "E°cell is the cell potential under standard conditions (25 °C, 1 atm, 1 M) and is calculated from standard half-cell potentials; Ecell is the voltage at the cell's actual concentrations and temperature, it changes as the concentrations change and decreases as the cell operates.",
        "de": "E°Zelle ist das Zellpotential unter Standardbedingungen (25 °C, 1 atm, 1 M) und wird aus den Standardpotentialen der Halbzellen berechnet; EZelle ist die Spannung bei den aktuellen Konzentrationen und der aktuellen Temperatur, sie ändert sich mit den Konzentrationen und sinkt während des Betriebs.",
        "fr": "E°pile est la tension de la pile dans les conditions de référence (25 °C, 1 atm, 1 M) et se calcule à partir des valeurs E° des demi-piles ; Epile est la tension aux concentrations et à la température réelles, elle varie avec les concentrations et diminue pendant le fonctionnement.",
        "ru": "E°эл — потенциал элемента при стандартных условиях (25 °C, 1 атм, 1 M), его рассчитывают по стандартным потенциалам полуэлементов; Eэл — напряжение элемента при фактических концентрациях и температуре: оно меняется вместе с концентрациями и уменьшается по мере работы элемента.",
        "ar": "E°خلية هو جهد الخلية في الظروف القياسية (25 °C، 1 atm، 1 M) ويُحسب من جهود أنصاف الخلايا القياسية؛ أما Eخلية فهو الجهد عند التراكيز ودرجة الحرارة الفعلية، ويتغير بتغير التراكيز وينخفض مع عمل الخلية.",
        "zh": "标准电池电势(E°电池)是标准条件(25 °C、1 atm、1 M)下的电池电势，由标准电极电势计算得到；实际电池电势(E电池)是电池在实际浓度和温度下的电压，随浓度变化而改变，并随电池工作而减小。",
        "ku": "E°pîl potansiyela pîlê ya di şertên standard de ye (25 °C, 1 atm, 1 M) û ji potansiyelên standard ên nîvhucreyan tê hesabkirin; Epîl voltaja pîlê ye di tîrbûn û germahiya wê ya heyî de, bi guherîna tîrbûnan re diguhere û her ku pîl dixebite kêm dibe."
      }
    },
    {
      "id": "u21-c06",
      "conceptA": {
        "tr": "Elektrot",
        "en": "Electrode",
        "de": "Elektrode",
        "fr": "Électrode",
        "ru": "Электрод",
        "ar": "القطب",
        "zh": "电极",
        "ku": "Elektrod"
      },
      "conceptB": {
        "tr": "Elektrolit",
        "en": "Electrolyte",
        "de": "Elektrolyt",
        "fr": "Électrolyte",
        "ru": "Электролит",
        "ar": "الإلكتروليت",
        "zh": "电解质",
        "ku": "Elektrolît"
      },
      "distinction": {
        "tr": "Elektrot, elektronların alınıp verildiği iletken katıdır (örn. metal çubuk); elektrolit, akımı iyonlar aracılığıyla ileten çözelti veya eriyiktir.",
        "en": "An electrode is the conducting solid at which electrons are gained or lost (e.g., a metal rod); an electrolyte is a solution or melt that conducts current by means of ions.",
        "de": "Eine Elektrode ist der leitende Festkörper, an dem Elektronen aufgenommen oder abgegeben werden (z. B. ein Metallstab); ein Elektrolyt ist eine Lösung oder Schmelze, die den Strom durch Ionen leitet.",
        "fr": "Une électrode est le solide conducteur où les électrons sont captés ou cédés (par ex. une tige métallique) ; un électrolyte est une solution ou un sel fondu qui conduit le courant grâce aux ions.",
        "ru": "Электрод — проводящее твёрдое тело, на котором принимаются или отдаются электроны (например, металлический стержень); электролит — раствор или расплав, проводящий ток за счёт ионов.",
        "ar": "القطب جسم صلب موصل تُكتسب عنده الإلكترونات أو تُفقد (مثل قضيب فلزي)؛ أما الإلكتروليت فهو محلول أو مصهور يوصل التيار بواسطة الأيونات.",
        "zh": "电极是得失电子的导电固体（如金属棒）；电解质是依靠离子导电的溶液或熔融物。",
        "ku": "Elektrod hişkeke guhêzbar e ku elektron li ser wê têne wergirtin an dayîn (mînak çîpeke metalî); elektrolît çareserî an helandineke ku herikînê bi riya îyonan diguhezîne ye."
      }
    },
    {
      "id": "u21-c07",
      "conceptA": {
        "tr": "Tuz Köprüsündeki Anyonlar",
        "en": "Anions in the Salt Bridge",
        "de": "Anionen in der Salzbrücke",
        "fr": "Anions dans le pont de sel",
        "ru": "Анионы в солевом мостике",
        "ar": "الأنيونات في جسر الملح",
        "zh": "盐桥中的阴离子",
        "ku": "Anyonên di Pira Xwê de"
      },
      "conceptB": {
        "tr": "Tuz Köprüsündeki Katyonlar",
        "en": "Cations in the Salt Bridge",
        "de": "Kationen in der Salzbrücke",
        "fr": "Cations dans le pont de sel",
        "ru": "Катионы в солевом мостике",
        "ar": "الكاتيونات في جسر الملح",
        "zh": "盐桥中的阳离子",
        "ku": "Katyonên di Pira Xwê de"
      },
      "distinction": {
        "tr": "Tuz köprüsündeki anyonlar, pozitif yükün arttığı anot kabına göç eder; tuz köprüsündeki katyonlar ise pozitif yükün azaldığı katot kabına göç eder.",
        "en": "Anions in the salt bridge migrate to the anode compartment, where positive charge builds up; cations in the salt bridge migrate to the cathode compartment, where positive charge is being used up.",
        "de": "Anionen in der Salzbrücke wandern in den Anodenraum, in dem sich positive Ladung ansammelt; Kationen in der Salzbrücke wandern in den Kathodenraum, in dem positive Ladung verbraucht wird.",
        "fr": "Anions dans le pont de sel : ils migrent vers le compartiment anodique, où la charge positive s'accumule ; cations dans le pont de sel : ils migrent vers le compartiment cathodique, où la charge positive diminue.",
        "ru": "Анионы в солевом мостике — частицы, которые перемещаются в анодное пространство, где накапливается положительный заряд; катионы в солевом мостике перемещаются в катодное пространство, где положительный заряд убывает.",
        "ar": "الأنيونات في جسر الملح تهاجر نحو وعاء الأنود حيث تتزايد الشحنة الموجبة؛ أما الكاتيونات في جسر الملح فتهاجر نحو وعاء الكاثود حيث تتناقص الشحنة الموجبة.",
        "zh": "盐桥中的阴离子迁移到正电荷不断增多的负极区；盐桥中的阳离子迁移到正电荷不断减少的正极区。",
        "ku": "Anyonên di pira xwê de koçî beşa anodê dikin, ku li wir barê erênî zêde dibe; katyonên di pira xwê de koçî beşa katodê dikin, ku li wir barê erênî kêm dibe."
      }
    },
    {
      "id": "u21-c08",
      "conceptA": {
        "tr": "Yükseltgen Madde",
        "en": "Oxidizing Agent",
        "de": "Oxidationsmittel",
        "fr": "Oxydant",
        "ru": "Окислитель",
        "ar": "العامل المؤكسد",
        "zh": "氧化剂",
        "ku": "Oksîdant"
      },
      "conceptB": {
        "tr": "İndirgen Madde",
        "en": "Reducing Agent",
        "de": "Reduktionsmittel",
        "fr": "Réducteur",
        "ru": "Восстановитель",
        "ar": "العامل المختزل",
        "zh": "还原剂",
        "ku": "Reduktant"
      },
      "distinction": {
        "tr": "Yükseltgen madde elektron alarak kendisi indirgenendir; indirgen madde elektron vererek kendisi yükseltgenendir.",
        "en": "An oxidizing agent gains electrons and is itself reduced; a reducing agent loses electrons and is itself oxidized.",
        "de": "Ein Oxidationsmittel nimmt Elektronen auf und wird dabei selbst reduziert; ein Reduktionsmittel gibt Elektronen ab und wird dabei selbst oxidiert.",
        "fr": "Un oxydant capte des électrons et est lui-même réduit ; un réducteur cède des électrons et est lui-même oxydé.",
        "ru": "Окислитель принимает электроны и при этом восстанавливается; восстановитель отдаёт электроны и при этом окисляется.",
        "ar": "العامل المؤكسد يكتسب الإلكترونات فيُختزل هو نفسه؛ والعامل المختزل يفقد الإلكترونات فيتأكسد هو نفسه.",
        "zh": "氧化剂得到电子，自身被还原；还原剂失去电子，自身被氧化。",
        "ku": "Oksîdant elektronan distîne û bi xwe kêm dibe; reduktant elektronan dide û bi xwe oksîd dibe."
      }
    }
  ],
  "sequences": [
    {
      "id": "u21-s01",
      "title": {
        "tr": "Pil Potansiyeli Hesaplama Adımları",
        "en": "Steps for Calculating Cell Potential",
        "de": "Schritte zur Berechnung des Zellpotentials",
        "fr": "Étapes du calcul du potentiel de pile",
        "ru": "Этапы расчёта потенциала элемента",
        "ar": "خطوات حساب جهد الخلية",
        "zh": "电池电势的计算步骤",
        "ku": "Gavên Hesabkirina Potansiyela Pîlê"
      },
      "steps": [
        {
          "tr": "Yükseltgenme potansiyellerini karşılaştırıp anodu belirle",
          "en": "Compare oxidation potentials and identify the anode",
          "de": "Vergleichen Sie Oxidationspotentiale und identifizieren Sie die Anode",
          "fr": "Comparer les potentiels d'oxydation et identifier l'anode",
          "ru": "Сравнить потенциалы окисления и определить анод",
          "ar": "قارن جهود التأكسد وحدد الأنود",
          "zh": "比较氧化电势，确定负极",
          "ku": "Potansiyelên oksîdasyonê bide ber hev û anodê diyar bike"
        },
        {
          "tr": "Katot indirgenme yarı tepkimesini yaz",
          "en": "Write the cathode reduction half reaction",
          "de": "Schreiben Sie die Halbreaktion der Kathodenreduktion auf",
          "fr": "Écrire la demi-réaction de réduction cathodique",
          "ru": "Записать полуреакцию восстановления на катоде",
          "ar": "اكتب نصف تفاعل اختزال الكاثود",
          "zh": "写出正极的还原半反应",
          "ku": "Nîv reaksiyona kêmkirina katodê binivîsin"
        },
        {
          "tr": "E°pil = E°yüks(anot) + E°ind(katot) ile standart gerilimi bul",
          "en": "Find the standard voltage with E°cell = E°ox(anode) + E°red(cathode)",
          "de": "Standardspannung mit E°Zelle = E°Ox(Anode) + E°Red(Kathode) berechnen",
          "fr": "Calculer la tension standard avec E°pile = E°ox(anode) + E°réd(cathode)",
          "ru": "Найти стандартное напряжение по формуле E°эл = E°ок(анод) + E°восст(катод)",
          "ar": "احسب الجهد القياسي من E°خلية = E°تأكسد(الأنود) + E°اختزال(الكاثود)",
          "zh": "用 E°电池 = E°氧化(负极) + E°还原(正极) 求标准电压",
          "ku": "Bi E°pîl = E°oks(anod) + E°red(katod) voltaja standard bibîne"
        },
        {
          "tr": "E°pil > 0 ise tepkimenin istemli olduğuna karar ver",
          "en": "If E°cell > 0, conclude that the reaction is spontaneous",
          "de": "Ist E°Zelle > 0, auf eine freiwillige (spontane) Reaktion schließen",
          "fr": "Si E°pile > 0, conclure que la réaction est spontanée",
          "ru": "Если E°эл > 0, сделать вывод, что реакция самопроизвольна",
          "ar": "إذا كان E°خلية > 0 فاستنتج أن التفاعل تلقائي",
          "zh": "若 E°电池 > 0，则判断反应为自发反应",
          "ku": "Heke E°pîl > 0 be, biryar bide ku reaksiyon xweber e"
        }
      ]
    },
    {
      "id": "u21-s02",
      "title": {
        "tr": "Derişim Pilinin Kurulması ve Çalışması",
        "en": "Setting Up and Operating a Concentration Cell",
        "de": "Aufbau und Funktionsweise eines Konzentrationselements",
        "fr": "Montage et fonctionnement d'une pile de concentration",
        "ru": "Устройство и работа концентрационного элемента",
        "ar": "تركيب خلية التركيز وطريقة عملها",
        "zh": "浓差电池的组装与工作过程",
        "ku": "Sazkirin û Xebata Pîla Tîrbûnê"
      },
      "steps": [
        {
          "tr": "Aynı metalden iki elektrot, aynı iyonun farklı derişimli iki çözeltisine daldırılır",
          "en": "Two electrodes of the same metal are dipped into two solutions of the same ion at different concentrations",
          "de": "Zwei Elektroden aus demselben Metall werden in zwei unterschiedlich konzentrierte Lösungen desselben Ions getaucht",
          "fr": "Deux électrodes du même métal sont plongées dans deux solutions du même ion de concentrations différentes",
          "ru": "Два электрода из одного металла погружают в два раствора одного и того же иона разной концентрации",
          "ar": "يُغمس قطبان من الفلز نفسه في محلولين للأيون نفسه بتركيزين مختلفين",
          "zh": "将两根相同金属的电极分别插入同种离子、不同浓度的两种溶液中",
          "ku": "Du elektrodên ji heman metalê di du çareseriyên heman îyonê yên bi tîrbûnên cuda de têne danîn"
        },
        {
          "tr": "Elektrotlar iletken telle, çözeltiler tuz köprüsüyle birbirine bağlanır",
          "en": "The electrodes are joined by a conducting wire and the solutions by a salt bridge",
          "de": "Die Elektroden werden mit einem leitenden Draht, die Lösungen mit einer Salzbrücke verbunden",
          "fr": "Les électrodes sont reliées par un fil conducteur et les solutions par un pont salin",
          "ru": "Электроды соединяют проводником, а растворы — солевым мостиком",
          "ar": "يوصل القطبان بسلك موصل ويوصل المحلولان بقنطرة ملحية",
          "zh": "用导线连接两电极，用盐桥连接两溶液",
          "ku": "Elektrod bi têleke guhêzbar, çareserî jî bi pira xwê bi hev ve têne girêdan"
        },
        {
          "tr": "Seyreltik çözeltideki elektrot anot olup yükseltgenir; derişik çözeltideki iyonlar katotta indirgenir",
          "en": "The electrode in the dilute solution is the anode and is oxidized; ions in the concentrated solution are reduced at the cathode",
          "de": "Die Elektrode in der verdünnten Lösung ist die Anode und wird oxidiert; die Ionen der konzentrierten Lösung werden an der Kathode reduziert",
          "fr": "L'électrode plongée dans la solution diluée est l'anode et s'oxyde ; les ions de la solution concentrée sont réduits à la cathode",
          "ru": "Электрод в разбавленном растворе служит анодом и окисляется; ионы концентрированного раствора восстанавливаются на катоде",
          "ar": "القطب المغموس في المحلول المخفف هو الأنود ويتأكسد؛ وتُختزل أيونات المحلول المركز عند الكاثود",
          "zh": "稀溶液中的电极为负极并被氧化；浓溶液中的离子在正极被还原",
          "ku": "Elektroda di çareseriya sist de anod e û oksîd dibe; îyonên çareseriya tîr li katodê kêm dibin"
        },
        {
          "tr": "Derişimler eşitlendiğinde Epil = 0 olur ve pil çalışmayı durdurur",
          "en": "When the concentrations become equal, Ecell = 0 and the cell stops working",
          "de": "Sind die Konzentrationen gleich, gilt EZelle = 0 und das Element hört auf zu arbeiten",
          "fr": "Lorsque les concentrations deviennent égales, Epile = 0 et la pile cesse de fonctionner",
          "ru": "Когда концентрации выравниваются, Eэл = 0 и элемент перестаёт работать",
          "ar": "عندما يتساوى التركيزان يصبح Eخلية = 0 وتتوقف الخلية عن العمل",
          "zh": "当两溶液浓度相等时，E电池 = 0，电池停止工作",
          "ku": "Dema tîrbûn wekhev dibin, Epîl = 0 dibe û pîl radiweste"
        }
      ]
    },
    {
      "id": "u21-s03",
      "title": {
        "tr": "Derişim Değişiminin Pil Gerilimine Etkisini Yorumlama",
        "en": "Interpreting the Effect of a Concentration Change on Cell Voltage",
        "de": "Wirkung einer Konzentrationsänderung auf die Zellspannung deuten",
        "fr": "Interpréter l'effet d'un changement de concentration sur la tension de la pile",
        "ru": "Оценка влияния изменения концентрации на напряжение элемента",
        "ar": "تفسير أثر تغيّر التركيز في جهد الخلية",
        "zh": "判断浓度变化对电池电压的影响",
        "ku": "Şirovekirina Bandora Guherîna Tîrbûnê li ser Voltaja Pîlê"
      },
      "steps": [
        {
          "tr": "Pilin toplam tepkimesi yazılır; anot iyonunun ürünlerde, katot iyonunun girenlerde olduğu belirlenir",
          "en": "Write the overall cell reaction; note that the anode ion is a product and the cathode ion is a reactant",
          "de": "Gesamtreaktion der Zelle aufschreiben; das Anodenion steht bei den Produkten, das Kathodenion bei den Edukten",
          "fr": "Écrire la réaction globale de la pile ; l'ion de l'anode est un produit et l'ion de la cathode un réactif",
          "ru": "Записать суммарную реакцию элемента и отметить, что ион анода — продукт, а ион катода — исходное вещество",
          "ar": "تُكتب معادلة التفاعل الكلي للخلية؛ ويُلاحظ أن أيون الأنود من النواتج وأيون الكاثود من المتفاعلات",
          "zh": "写出电池总反应；确定负极区离子是生成物，正极区离子是反应物",
          "ku": "Reaksiyona giştî ya pîlê tê nivîsîn; tê dîtin ku îyona anodê di berheman de û îyona katodê di têketiyan de ye"
        },
        {
          "tr": "Yapılan işlemin (su ekleme, tuz ekleme, çöktürme) hangi iyonun derişimini nasıl değiştirdiği belirlenir",
          "en": "Determine how the operation (adding water, adding a salt, precipitation) changes the concentration of which ion",
          "de": "Bestimmen, wie der Eingriff (Wasser zugeben, Salz zugeben, Fällung) die Konzentration welches Ions verändert",
          "fr": "Déterminer comment l'opération (ajout d'eau, ajout de sel, précipitation) modifie la concentration de quel ion",
          "ru": "Определить, концентрацию какого иона и как меняет данная операция (добавление воды, добавление соли, осаждение)",
          "ar": "يُحدَّد كيف يغيّر الإجراء (إضافة الماء أو ملح أو الترسيب) تركيز أي أيون",
          "zh": "判断所做操作（加水、加盐、沉淀）如何改变哪种离子的浓度",
          "ku": "Tê diyarkirin ku kiryar (lêzêdekirina avê, xwê an jî niştandin) tîrbûna kîjan îyonê çawa diguherîne"
        },
        {
          "tr": "Le Chatelier ilkesine göre toplam tepkimenin dengesinin hangi yöne kayacağı bulunur",
          "en": "Use Le Chatelier's principle to find the direction in which the overall equilibrium shifts",
          "de": "Mit dem Prinzip von Le Chatelier die Verschiebungsrichtung des Gesamtgleichgewichts bestimmen",
          "fr": "Avec le principe de Le Chatelier, trouver le sens de déplacement de l'équilibre global",
          "ru": "По принципу Ле Шателье найти направление смещения равновесия суммарной реакции",
          "ar": "يُحدَّد اتجاه انزياح الاتزان للتفاعل الكلي وفق مبدأ لوشاتلييه",
          "zh": "根据勒夏特列原理判断总反应平衡移动的方向",
          "ku": "Li gorî prensîba Le Chatelier aliyê ku hevsengiya reaksiyona giştî ber bi wê ve diçe tê dîtin"
        },
        {
          "tr": "Denge ürünlere kayıyorsa pil gerilimi artar, girenlere kayıyorsa azalır; elektrot boyutu gibi derişimi değiştirmeyen işlemler gerilimi değiştirmez",
          "en": "If the equilibrium shifts toward products the voltage increases, toward reactants it decreases; operations that do not change concentrations, such as electrode size, leave the voltage unchanged",
          "de": "Verschiebung zu den Produkten erhöht die Spannung, zu den Edukten senkt sie; Eingriffe ohne Konzentrationsänderung, etwa die Elektrodengröße, ändern die Spannung nicht",
          "fr": "Si l'équilibre se déplace vers les produits la tension augmente, vers les réactifs elle diminue ; les opérations qui ne changent pas les concentrations, comme la taille de l'électrode, ne la modifient pas",
          "ru": "Если равновесие смещается к продуктам, напряжение растёт, если к исходным веществам — падает; операции, не меняющие концентраций (например, изменение размера электрода), на напряжение не влияют",
          "ar": "إذا انزاح الاتزان نحو النواتج ازداد الجهد، وإذا انزاح نحو المتفاعلات قلّ؛ أما الإجراءات التي لا تغيّر التراكيز مثل حجم القطب فلا تغيّر الجهد",
          "zh": "平衡向生成物方向移动则电压增大，向反应物方向移动则电压减小；电极大小等不改变浓度的操作不改变电压",
          "ku": "Heke hevsengî ber bi berheman ve biçe voltaj zêde dibe, ber bi têketiyan ve biçe kêm dibe; kiryarên ku tîrbûnê naguherînin, wek mezinahiya elektrodê, voltajê naguherînin"
        }
      ]
    },
    {
      "id": "u21-s04",
      "title": {
        "tr": "Galvanik Hücrede Elektronların ve Yükün İzlediği Yol",
        "en": "The Path of Electrons and Charge in a Galvanic Cell",
        "de": "Der Weg von Elektronen und Ladung in einer galvanischen Zelle",
        "fr": "Le trajet des électrons et des charges dans une pile galvanique",
        "ru": "Путь электронов и заряда в гальваническом элементе",
        "ar": "مسار الإلكترونات والشحنة في الخلية الجلفانية",
        "zh": "原电池中电子和电荷的移动路径",
        "ku": "Rêya Elektron û Barê di Hucreya Galvanîk de"
      },
      "steps": [
        {
          "tr": "Elektronlar anotta, metal atomlarının yükseltgenmesiyle serbest kalır (Zn → Zn2+ + 2e-)",
          "en": "Electrons are released at the anode by oxidation of metal atoms (Zn → Zn2+ + 2e-)",
          "de": "Elektronen werden an der Anode durch Oxidation von Metallatomen frei (Zn → Zn2+ + 2e-)",
          "fr": "Les électrons sont libérés à l'anode par oxydation des atomes métalliques (Zn → Zn2+ + 2e-)",
          "ru": "Электроны освобождаются на аноде при окислении атомов металла (Zn → Zn2+ + 2e-)",
          "ar": "تتحرر الإلكترونات عند الأنود بتأكسد ذرات الفلز (Zn → Zn2+ + 2e-)",
          "zh": "电子在负极由金属原子氧化而释放(Zn → Zn2+ + 2e-)",
          "ku": "Elektron li anodê bi oksîdbûna atomên metalê azad dibin (Zn → Zn2+ + 2e-)"
        },
        {
          "tr": "Bu elektronlar dış devredeki iletken telden anottan katoda doğru akar",
          "en": "These electrons flow through the external wire from the anode to the cathode",
          "de": "Diese Elektronen fließen durch den äußeren Draht von der Anode zur Kathode",
          "fr": "Ces électrons circulent dans le fil extérieur de l'anode vers la cathode",
          "ru": "Эти электроны движутся по внешнему проводу от анода к катоду",
          "ar": "تسري هذه الإلكترونات في السلك الخارجي من الأنود إلى الكاثود",
          "zh": "这些电子经外电路导线从负极流向正极",
          "ku": "Ev elektron di têla derve re ji anodê ber bi katodê ve diherikin"
        },
        {
          "tr": "Katoda ulaşan elektronları çözeltideki katyonlar alır; katyonlar indirgenerek katot yüzeyinde toplanır (Cu2+ + 2e- → Cu)",
          "en": "Cations in solution take up the electrons arriving at the cathode; they are reduced and deposit on the cathode surface (Cu2+ + 2e- → Cu)",
          "de": "Kationen der Lösung nehmen die an der Kathode ankommenden Elektronen auf, werden reduziert und scheiden sich ab (Cu2+ + 2e- → Cu)",
          "fr": "Les cations de la solution captent les électrons arrivant à la cathode ; ils sont réduits et se déposent sur la cathode (Cu2+ + 2e- → Cu)",
          "ru": "Катионы раствора принимают пришедшие на катод электроны, восстанавливаются и осаждаются на нём (Cu2+ + 2e- → Cu)",
          "ar": "تكتسب الكاتيونات في المحلول الإلكترونات الواصلة إلى الكاثود فتُختزل وتترسب على سطحه (Cu2+ + 2e- → Cu)",
          "zh": "溶液中的阳离子得到到达正极的电子，被还原并沉积在正极表面(Cu2+ + 2e- → Cu)",
          "ku": "Katyonên di çareseriyê de elektronên ku digihîjin katodê distînin, kêm dibin û li ser rûyê katodê kom dibin (Cu2+ + 2e- → Cu)"
        },
        {
          "tr": "Bu sırada anot kabında artan, katot kabında azalan pozitif yük tuz köprüsü iyonlarının göçüyle dengelenir ve devre tamamlanır",
          "en": "Meanwhile the positive charge building up in the anode compartment and decreasing in the cathode compartment is balanced by ion migration in the salt bridge, closing the circuit",
          "de": "Dabei wird die im Anodenraum steigende und im Kathodenraum sinkende positive Ladung durch Ionenwanderung in der Salzbrücke ausgeglichen; der Stromkreis ist geschlossen",
          "fr": "Pendant ce temps, la charge positive qui augmente côté anode et diminue côté cathode est compensée par la migration des ions du pont salin, ce qui ferme le circuit",
          "ru": "При этом растущий в анодном и убывающий в катодном пространстве положительный заряд компенсируется миграцией ионов солевого мостика, и цепь замыкается",
          "ar": "وفي الأثناء تُعادَل الشحنة الموجبة المتزايدة في وعاء الأنود والمتناقصة في وعاء الكاثود بهجرة أيونات القنطرة الملحية فتكتمل الدائرة",
          "zh": "同时，负极区增加、正极区减少的正电荷通过盐桥中离子的迁移得到平衡，电路闭合",
          "ku": "Di vê navberê de bara erênî ya ku li aliyê anodê zêde dibe û li aliyê katodê kêm dibe bi koça îyonên pira xwê tê hevsengkirin û çerx temam dibe"
        }
      ]
    }
  ],
  "osymTwins": [
    {
      "id": "u21-twin01",
      "stem": {
        "tr": "Zn(k) | Zn2+(1 M) || Cu2+(1 M) | Cu(k) Daniell pili için E°(Zn2+/Zn) = -0,76 V ve E°(Cu2+/Cu) = +0,34 V olduğuna göre standart pil potansiyeli kaç volttur?",
        "en": "For the Daniell cell Zn(s) | Zn2+(1 M) || Cu2+(1 M) | Cu(s), given E°(Zn2+/Zn) = -0.76 V and E°(Cu2+/Cu) = +0.34 V, what is the standard cell potential in volts?",
        "de": "Für das Daniell-Element Zn(s) | Zn2+(1 M) || Cu2+(1 M) | Cu(s) gilt E°(Zn2+/Zn) = -0,76 V und E°(Cu2+/Cu) = +0,34 V. Wie groß ist das Standardzellpotential in Volt?",
        "fr": "Pour la pile Daniell Zn(s) | Zn2+(1 M) || Cu2+(1 M) | Cu(s), avec E°(Zn2+/Zn) = -0,76 V et E°(Cu2+/Cu) = +0,34 V, quel est le potentiel standard de la pile en volts ?",
        "ru": "Для элемента Даниэля Zn(тв) | Zn2+(1 M) || Cu2+(1 M) | Cu(тв) при E°(Zn2+/Zn) = -0,76 В и E°(Cu2+/Cu) = +0,34 В чему равен стандартный потенциал элемента (в вольтах)?",
        "ar": "لخلية دانيال Zn(s) | Zn2+(1 M) || Cu2+(1 M) | Cu(s)، إذا كان E°(Zn2+/Zn) = -0.76 V و E°(Cu2+/Cu) = +0.34 V، فكم فولتًا يبلغ جهد الخلية القياسي؟",
        "zh": "对于丹尼尔电池 Zn(s) | Zn2+(1 M) || Cu2+(1 M) | Cu(s)，已知 E°(Zn2+/Zn) = -0.76 V，E°(Cu2+/Cu) = +0.34 V，其标准电池电势为多少伏？",
        "ku": "Ji bo pîla Daniell Zn(k) | Zn2+(1 M) || Cu2+(1 M) | Cu(k), heke E°(Zn2+/Zn) = -0,76 V û E°(Cu2+/Cu) = +0,34 V be, potansiyela standard a pîlê çend volt e?"
      },
      "options": [
        {
          "tr": "1,10 V",
          "en": "1.10 V",
          "de": "1,10 V",
          "fr": "1,10 V",
          "ru": "1,10 В",
          "ar": "1.10 فولت",
          "zh": "1.10 V",
          "ku": "1,10 V"
        },
        {
          "tr": "0,42 V",
          "en": "0.42 V",
          "de": "0,42 V",
          "fr": "0,42 V",
          "ru": "0,42 В",
          "ar": "0.42 فولت",
          "zh": "0.42 V",
          "ku": "0,42 V"
        },
        {
          "tr": "-1,10 V",
          "en": "-1.10 V",
          "de": "-1,10 V",
          "fr": "-1,10 V",
          "ru": "-1,10 В",
          "ar": "-1.10 فولت",
          "zh": "-1.10 V",
          "ku": "-1,10 V"
        },
        {
          "tr": "0,76 V",
          "en": "0.76 V",
          "de": "0,76 V",
          "fr": "0,76 V",
          "ru": "0,76 В",
          "ar": "0.76 فولت",
          "zh": "0.76 V",
          "ku": "0,76 V"
        },
        {
          "tr": "-0,42 V",
          "en": "-0.42 V",
          "de": "-0,42 V",
          "fr": "-0,42 V",
          "ru": "-0,42 В",
          "ar": "-0.42 فولت",
          "zh": "-0.42 V",
          "ku": "-0,42 V"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Zn'nin indirgenme potansiyeli daha küçük olduğundan Zn anottur: E°yüks(Zn) = +0,76 V. Cu2+ katotta indirgenir: E°ind = +0,34 V. E°pil = 0,76 + 0,34 = 1,10 V. Çinkonun potansiyelinin işaretini çevirmeden toplamak (0,34 - 0,76) -0,42 V sonucunu verir; kendiliğinden çalışan bir pilde E°pil negatif olamaz.",
        "en": "Zn has the lower reduction potential, so Zn is the anode: E°ox(Zn) = +0.76 V. Cu2+ is reduced at the cathode: E°red = +0.34 V. E°cell = 0.76 + 0.34 = 1.10 V. Adding without reversing the sign of zinc's potential (0.34 - 0.76) gives -0.42 V; a cell that runs spontaneously cannot have a negative E°cell.",
        "de": "Zn hat das kleinere Reduktionspotential und ist daher die Anode: E°Ox(Zn) = +0,76 V. Cu2+ wird an der Kathode reduziert: E°Red = +0,34 V. E°Zelle = 0,76 + 0,34 = 1,10 V. Addiert man, ohne das Vorzeichen des Zinkpotentials umzukehren (0,34 - 0,76), erhält man -0,42 V; bei einer freiwillig arbeitenden Zelle kann E°Zelle nicht negativ sein.",
        "fr": "Zn a le plus petit potentiel de réduction, c'est donc l'anode : E°ox(Zn) = +0,76 V. Cu2+ est réduit à la cathode : E°réd = +0,34 V. E°pile = 0,76 + 0,34 = 1,10 V. Additionner sans inverser le signe du potentiel du zinc (0,34 - 0,76) donne -0,42 V ; or une pile qui fonctionne spontanément ne peut pas avoir un E°pile négatif.",
        "ru": "У Zn потенциал восстановления меньше, поэтому Zn — анод: E°ок(Zn) = +0,76 В. Cu2+ восстанавливается на катоде: E°восст = +0,34 В. E°эл = 0,76 + 0,34 = 1,10 В. Если сложить, не изменив знак потенциала цинка (0,34 - 0,76), получится -0,42 В; у самопроизвольно работающего элемента E°эл не может быть отрицательным.",
        "ar": "للخارصين Zn جهد الاختزال الأصغر، فهو الأنود: E°تأكسد(Zn) = +0.76 V. ويُختزل Cu2+ عند الكاثود: E°اختزال = +0.34 V. إذن E°خلية = 0.76 + 0.34 = 1.10 V. أما الجمع دون عكس إشارة جهد الخارصين (0.34 - 0.76) فيعطي -0.42 V؛ ولا يمكن أن يكون E°خلية سالبًا في خلية تعمل تلقائيًا.",
        "zh": "Zn 的还原电势较小，所以 Zn 是负极：E°氧化(Zn) = +0.76 V。Cu2+ 在正极被还原：E°还原 = +0.34 V。E°电池 = 0.76 + 0.34 = 1.10 V。若不改变锌电势的符号直接相加(0.34 - 0.76)，会得到 -0.42 V；自发工作的电池 E°电池 不可能为负。",
        "ku": "Potansiyela reduksiyonê ya Zn biçûktir e, loma Zn anod e: E°oks(Zn) = +0,76 V. Cu2+ li katodê kêm dibe: E°red = +0,34 V. E°pîl = 0,76 + 0,34 = 1,10 V. Heke nîşana potansiyela zinkê neyê guhertin û wisa were komkirin (0,34 - 0,76), -0,42 V derdikeve; di pîleke ku bi xweber dixebite de E°pîl nikare neyînî be."
      }
    },
    {
      "id": "u21-twin02",
      "stem": {
        "tr": "Çalışmakta olan bir galvanik pilde tuz köprüsündeki iyonların hareketi ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
        "en": "Which statement is true regarding the movement of ions across the salt bridge in a standard electrochemical cell?",
        "de": "Welche Aussage trifft auf die Bewegung von Ionen über die Salzbrücke in einer elektrochemischen Standardzelle zu?",
        "fr": "Quelle affirmation est vraie concernant le mouvement des ions à travers le pont salin dans une cellule électrochimique standard ?",
        "ru": "Какое утверждение о движении ионов солевого мостика в работающем гальваническом элементе верно?",
        "ar": "أي عبارة صحيحة فيما يتعلق بحركة الأيونات عبر الجسر الملحي في خلية كهروكيميائية قياسية؟",
        "zh": "关于标准原电池中盐桥内离子的迁移，下列说法正确的是哪一项？",
        "ku": "Di derbarê tevgera îyonan de li ser pira xwê ya di şaneyek elektrokîmyayî ya standard de kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Anyonlar anoda, katyonlar katoda göç eder",
          "en": "Anions migrate to the anode, cations migrate to the cathode",
          "de": "Anionen wandern zur Anode, Kationen zur Kathode",
          "fr": "Les anions migrent vers l'anode, les cations migrent vers la cathode",
          "ru": "Анионы перемещаются к аноду, катионы — к катоду",
          "ar": "تهاجر الأنيونات نحو الأنود والكاتيونات نحو الكاثود",
          "zh": "阴离子向负极区迁移，阳离子向正极区迁移",
          "ku": "Anyon koçî anodê dikin, katyon jî ber bi katodê ve diçin"
        },
        {
          "tr": "Katyonlar anoda, anyonlar katoda göç eder",
          "en": "Cations migrate to the anode, anions migrate to the cathode",
          "de": "Kationen wandern zur Anode, Anionen wandern zur Kathode",
          "fr": "Les cations migrent vers l'anode, les anions migrent vers la cathode",
          "ru": "Катионы перемещаются к аноду, анионы — к катоду",
          "ar": "تهاجر الكاتيونات نحو الأنود والأنيونات نحو الكاثود",
          "zh": "阳离子向负极区迁移，阴离子向正极区迁移",
          "ku": "Katyon ber bi anodê, anyon koçî katodê dikin"
        },
        {
          "tr": "Tüm iyonlar sadece katoda doğru hareket eder",
          "en": "All ions move only towards the cathode",
          "de": "Alle Ionen bewegen sich nur in Richtung der Kathode",
          "fr": "Tous les ions se déplacent uniquement vers la cathode",
          "ru": "Все ионы движутся только к катоду",
          "ar": "تتحرك جميع الأيونات نحو الكاثود فقط",
          "zh": "所有离子都只向正极区迁移",
          "ku": "Hemû îyon tenê ber bi katodê ve diçin"
        },
        {
          "tr": "Tuz köprüsündeki iyonlar hareket etmez",
          "en": "Ions in the salt bridge do not move",
          "de": "Ionen in der Salzbrücke bewegen sich nicht",
          "fr": "Les ions dans le pont de sel ne bougent pas",
          "ru": "Ионы солевого мостика не движутся",
          "ar": "الأيونات الموجودة في جسر الملح لا تتحرك",
          "zh": "盐桥中的离子不移动",
          "ku": "Di pira xwê de îyon nalivin"
        },
        {
          "tr": "Elektronlar tuz köprüsünden akar",
          "en": "Electrons flow across the salt bridge",
          "de": "Elektronen fließen über die Salzbrücke",
          "fr": "Les électrons traversent le pont de sel",
          "ru": "Электроны проходят через солевой мостик",
          "ar": "تتدفق الإلكترونات عبر جسر الملح",
          "zh": "电子流过盐桥",
          "ku": "Elektron li ser pira xwê diherikin"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Anot kabında yükseltgenmeyle katyon derişimi arttığından, fazla pozitif yükü dengelemek için tuz köprüsündeki anyonlar anot kabına göç eder; katot kabında katyonlar indirgenerek azaldığından tuz köprüsündeki katyonlar katot kabına göç eder. Elektronlar tuz köprüsünden değil, dış devredeki iletken telden anottan katoda akar.",
        "en": "Oxidation increases the cation concentration in the anode compartment, so anions from the salt bridge migrate there to balance the excess positive charge; in the cathode compartment cations are reduced and used up, so cations from the bridge migrate there. Electrons do not travel through the salt bridge; they flow from the anode to the cathode through the external wire.",
        "de": "Im Anodenraum nimmt durch die Oxidation die Kationenkonzentration zu, daher wandern Anionen aus der Salzbrücke dorthin und gleichen die überschüssige positive Ladung aus; im Kathodenraum werden Kationen durch Reduktion verbraucht, daher wandern Kationen aus der Brücke dorthin. Elektronen fließen nicht durch die Salzbrücke, sondern durch den äußeren Draht von der Anode zur Kathode.",
        "fr": "Dans le compartiment anodique, l'oxydation augmente la concentration en cations : les anions du pont salin y migrent pour compenser l'excès de charge positive ; dans le compartiment cathodique, les cations sont consommés par réduction : les cations du pont y migrent. Les électrons ne passent pas par le pont salin ; ils circulent de l'anode vers la cathode par le fil extérieur.",
        "ru": "В анодном пространстве при окислении концентрация катионов растёт, поэтому анионы солевого мостика перемещаются туда и компенсируют избыточный положительный заряд; в катодном пространстве катионы расходуются при восстановлении, поэтому туда перемещаются катионы мостика. Электроны не проходят через солевой мостик: они движутся от анода к катоду по внешнему проводнику.",
        "ar": "في وعاء الأنود يزداد تركيز الكاتيونات بسبب الأكسدة، فتهاجر أنيونات القنطرة الملحية إليه لمعادلة الشحنة الموجبة الزائدة؛ وفي وعاء الكاثود تُستهلك الكاتيونات بالاختزال، فتهاجر كاتيونات القنطرة إليه. أما الإلكترونات فلا تمر عبر القنطرة الملحية، بل تنتقل من الأنود إلى الكاثود عبر السلك الخارجي.",
        "zh": "负极区因氧化反应阳离子浓度增大，盐桥中的阴离子迁入以中和多余的正电荷；正极区的阳离子被还原而减少，盐桥中的阳离子迁入补充。电子不经过盐桥，而是通过外电路导线从负极流向正极。",
        "ku": "Li beşa anodê bi oksîdasyonê tîrbûna katyonan zêde dibe, loma anyonên pira xwê diçin wir da ku barê erênî yê zêde hevseng bikin; li beşa katodê katyon bi reduksiyonê kêm dibin, loma katyonên pirê diçin wir. Elektron di pira xwê re derbas nabin; ew bi têla derve ji anodê ber bi katodê diherikin."
      }
    },
    {
      "id": "u21-twin03",
      "stem": {
        "tr": "Potasyum dikromat (K2Cr2O7) bileşiğinde krom (Cr) atomunun yükseltgenme basamağı kaçtır?",
        "en": "What is the oxidation state of the chromium (Cr) atom in potassium dichromate (K2Cr2O7)?",
        "de": "Welche Oxidationszahl hat das Chromatom (Cr) in Kaliumdichromat (K2Cr2O7)?",
        "fr": "Quel est le nombre d'oxydation de l'atome de chrome (Cr) dans le dichromate de potassium (K2Cr2O7) ?",
        "ru": "Какова степень окисления атома хрома (Cr) в дихромате калия (K2Cr2O7)?",
        "ar": "ما عدد تأكسد ذرة الكروم (Cr) في مركب ثنائي كرومات البوتاسيوم (K2Cr2O7)؟",
        "zh": "重铬酸钾(K2Cr2O7)中铬(Cr)原子的氧化数是多少？",
        "ku": "Di pêkhateya potasyûm dîkromatê (K2Cr2O7) de hejmara oksîdasyonê ya atoma kromê (Cr) çend e?"
      },
      "options": [
        {
          "tr": "+2",
          "en": "+2",
          "de": "+2",
          "fr": "+2",
          "ru": "+2",
          "ar": "+2",
          "zh": "+2",
          "ku": "+2"
        },
        {
          "tr": "+3",
          "en": "+3",
          "de": "+3",
          "fr": "+3",
          "ru": "+3",
          "ar": "+3",
          "zh": "+3",
          "ku": "+3"
        },
        {
          "tr": "+6",
          "en": "+6",
          "de": "+6",
          "fr": "+6",
          "ru": "+6",
          "ar": "+6",
          "zh": "+6",
          "ku": "+6"
        },
        {
          "tr": "+7",
          "en": "+7",
          "de": "+7",
          "fr": "+7",
          "ru": "+7",
          "ar": "+7",
          "zh": "+7",
          "ku": "+7"
        },
        {
          "tr": "+12",
          "en": "+12",
          "de": "+12",
          "fr": "+12",
          "ru": "+12",
          "ar": "+12",
          "zh": "+12",
          "ku": "+12"
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Bileşikte K: +1, O: -2'dir. Cr'nin basamağı x olsun: 2(+1) + 2x + 7(-2) = 0 → 2x = 12 → x = +6. +12 iki Cr atomunun toplamıdır, tek atomun değeri değildir; +3, dikromatın indirgenince oluşturduğu Cr3+ iyonunun yüküdür; +7 ise KMnO4'teki Mn ile karıştırmaktan gelir.",
        "en": "In the compound K is +1 and O is -2. Let Cr be x: 2(+1) + 2x + 7(-2) = 0 → 2x = 12 → x = +6. +12 is the total for both Cr atoms, not one atom; +3 is the charge of Cr3+, which forms when dichromate is reduced; +7 comes from confusing it with Mn in KMnO4.",
        "de": "In der Verbindung ist K +1 und O -2. Cr sei x: 2(+1) + 2x + 7(-2) = 0 → 2x = 12 → x = +6. +12 ist die Summe für beide Cr-Atome, nicht für ein Atom; +3 ist die Ladung von Cr3+, das bei der Reduktion von Dichromat entsteht; +7 entsteht durch Verwechslung mit Mn in KMnO4.",
        "fr": "Dans le composé, K vaut +1 et O vaut -2. Soit x pour Cr : 2(+1) + 2x + 7(-2) = 0 → 2x = 12 → x = +6. +12 est le total des deux atomes de Cr, pas d'un seul ; +3 est la charge de Cr3+, formé quand le dichromate est réduit ; +7 vient d'une confusion avec Mn dans KMnO4.",
        "ru": "В соединении степень окисления K равна +1, O — -2. Обозначим степень окисления Cr через x: 2(+1) + 2x + 7(-2) = 0 → 2x = 12 → x = +6. +12 — сумма для двух атомов Cr, а не для одного; +3 — заряд иона Cr3+, который образуется при восстановлении дихромата; +7 — результат путаницы с Mn в KMnO4.",
        "ar": "في المركب يكون K = +1 و O = -2. ليكن عدد تأكسد Cr هو x: 2(+1) + 2x + 7(-2) = 0 → 2x = 12 → x = +6. القيمة +12 مجموع ذرتي Cr لا ذرة واحدة؛ و+3 شحنة أيون Cr3+ الناتج عند اختزال الدايكرومات؛ أما +7 فمصدرها الخلط مع Mn في KMnO4.",
        "zh": "化合物中 K 为 +1，O 为 -2。设 Cr 为 x：2(+1) + 2x + 7(-2) = 0 → 2x = 12 → x = +6。+12 是两个 Cr 原子的总和而非单个原子；+3 是重铬酸根被还原后生成的 Cr3+ 的电荷；+7 则是与 KMnO4 中的 Mn 混淆。",
        "ku": "Di pêkhateyê de K +1 û O -2 ye. Bila ya Cr x be: 2(+1) + 2x + 7(-2) = 0 → 2x = 12 → x = +6. +12 berhevoka her du atomên Cr e, ne ya atomekê; +3 bara îyona Cr3+ ye ku dema dîkromat kêm dibe çêdibe; +7 jî ji tevlihevkirina bi Mn ya di KMnO4 de tê."
      }
    },
    {
      "id": "u21-twin04",
      "stem": {
        "tr": "Asidik ortamda gerçekleşen\nMnO4- + Fe2+ + H+ → Mn2+ + Fe3+ + H2O\ntepkimesi en küçük tam sayılarla denkleştirildiğinde H+ iyonunun katsayısı kaç olur?",
        "en": "When the reaction in acidic solution\nMnO4- + Fe2+ + H+ → Mn2+ + Fe3+ + H2O\nis balanced with the smallest whole numbers, what is the coefficient of H+?",
        "de": "Wenn die im sauren Milieu ablaufende Reaktion\nMnO4- + Fe2+ + H+ → Mn2+ + Fe3+ + H2O\nmit den kleinsten ganzen Zahlen ausgeglichen wird, welchen Koeffizienten hat H+?",
        "fr": "Lorsque la réaction en milieu acide\nMnO4- + Fe2+ + H+ → Mn2+ + Fe3+ + H2O\nest équilibrée avec les plus petits nombres entiers, quel est le coefficient de H+ ?",
        "ru": "Реакцию, протекающую в кислой среде,\nMnO4- + Fe2+ + H+ → Mn2+ + Fe3+ + H2O\nуравняли наименьшими целыми коэффициентами. Чему равен коэффициент перед H+?",
        "ar": "عند موازنة التفاعل الذي يجري في وسط حمضي\nMnO4- + Fe2+ + H+ → Mn2+ + Fe3+ + H2O\nبأصغر أعداد صحيحة، ما معامل أيون H+؟",
        "zh": "将酸性溶液中的反应\nMnO4- + Fe2+ + H+ → Mn2+ + Fe3+ + H2O\n用最小整数配平后，H+ 的系数是多少？",
        "ku": "Dema reaksiyona di hawîrdora asîdî de\nMnO4- + Fe2+ + H+ → Mn2+ + Fe3+ + H2O\nbi hejmarên tam ên herî biçûk tê hevsengkirin, hevrêza H+ çend e?"
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
          "tr": "5",
          "en": "5",
          "de": "5",
          "fr": "5",
          "ru": "5",
          "ar": "5",
          "zh": "5",
          "ku": "5"
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
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Mn: +7 → +2 (5 e- alır), Fe: +2 → +3 (1 e- verir). Elektron eşitliği için 1 MnO4- : 5 Fe2+ alınır. MnO4-'teki 4 O atomu 4 H2O'ya gider; 4 H2O için 8 H+ gerekir: MnO4- + 5Fe2+ + 8H+ → Mn2+ + 5Fe3+ + 4H2O. Yük kontrolü: sol -1 + 10 + 8 = +17, sağ +2 + 15 = +17. 4 suyun, 5 ise Fe2+ iyonunun katsayısıdır.",
        "en": "Mn: +7 → +2 (gains 5 e-), Fe: +2 → +3 (loses 1 e-). To equalize electrons take 1 MnO4- : 5 Fe2+. The 4 O atoms of MnO4- end up in 4 H2O, which need 8 H+: MnO4- + 5Fe2+ + 8H+ → Mn2+ + 5Fe3+ + 4H2O. Charge check: left -1 + 10 + 8 = +17, right +2 + 15 = +17. 4 is the coefficient of water and 5 that of Fe2+.",
        "de": "Mn: +7 → +2 (nimmt 5 e- auf), Fe: +2 → +3 (gibt 1 e- ab). Für gleiche Elektronenzahl 1 MnO4- : 5 Fe2+. Die 4 O-Atome von MnO4- gehen in 4 H2O über, dafür sind 8 H+ nötig: MnO4- + 5Fe2+ + 8H+ → Mn2+ + 5Fe3+ + 4H2O. Ladungsprobe: links -1 + 10 + 8 = +17, rechts +2 + 15 = +17. 4 ist der Koeffizient von Wasser, 5 der von Fe2+.",
        "fr": "Mn : +7 → +2 (gagne 5 e-), Fe : +2 → +3 (perd 1 e-). Pour égaliser les électrons : 1 MnO4- pour 5 Fe2+. Les 4 O de MnO4- forment 4 H2O, qui demandent 8 H+ : MnO4- + 5Fe2+ + 8H+ → Mn2+ + 5Fe3+ + 4H2O. Vérification des charges : à gauche -1 + 10 + 8 = +17, à droite +2 + 15 = +17. 4 est le coefficient de l'eau et 5 celui de Fe2+.",
        "ru": "Mn: +7 → +2 (принимает 5 e-), Fe: +2 → +3 (отдаёт 1 e-). Для баланса электронов 1 MnO4- : 5 Fe2+. 4 атома O из MnO4- переходят в 4 H2O, для чего нужно 8 H+: MnO4- + 5Fe2+ + 8H+ → Mn2+ + 5Fe3+ + 4H2O. Проверка зарядов: слева -1 + 10 + 8 = +17, справа +2 + 15 = +17. 4 — коэффициент воды, 5 — коэффициент Fe2+.",
        "ar": "Mn: +7 → +2 (يكتسب 5 e-)، و Fe: +2 → +3 (يفقد 1 e-). لموازنة الإلكترونات نأخذ 1 MnO4- : 5 Fe2+. تذهب ذرات O الأربع في MnO4- إلى 4 H2O، وهذه تحتاج إلى 8 H+: MnO4- + 5Fe2+ + 8H+ → Mn2+ + 5Fe3+ + 4H2O. التحقق من الشحنة: اليسار -1 + 10 + 8 = +17، واليمين +2 + 15 = +17. العدد 4 معامل الماء و5 معامل Fe2+.",
        "zh": "Mn：+7 → +2(得 5 e-)，Fe：+2 → +3(失 1 e-)。电子守恒取 1 MnO4- : 5 Fe2+。MnO4- 中的 4 个 O 进入 4 H2O，需要 8 H+：MnO4- + 5Fe2+ + 8H+ → Mn2+ + 5Fe3+ + 4H2O。电荷检验：左边 -1 + 10 + 8 = +17，右边 +2 + 15 = +17。4 是水的系数，5 是 Fe2+ 的系数。",
        "ku": "Mn: +7 → +2 (5 e- distîne), Fe: +2 → +3 (1 e- dide). Ji bo wekheviya elektronan 1 MnO4- : 5 Fe2+ tê girtin. 4 atomên O yên MnO4- diçin 4 H2O, ji bo vê 8 H+ lazim e: MnO4- + 5Fe2+ + 8H+ → Mn2+ + 5Fe3+ + 4H2O. Kontrola barê: çep -1 + 10 + 8 = +17, rast +2 + 15 = +17. 4 hevrêza avê ye, 5 jî ya Fe2+ ye."
      }
    },
    {
      "id": "u21-twin05",
      "stem": {
        "tr": "Ni(k) | Ni2+(1 M) || Ag+(1 M) | Ag(k)\npilinde E°(Ni2+/Ni) = -0,25 V ve E°(Ag+/Ag) = +0,80 V olduğuna göre standart pil potansiyeli kaç volttur?",
        "en": "For the cell\nNi(s) | Ni2+(1 M) || Ag+(1 M) | Ag(s)\nwith E°(Ni2+/Ni) = -0.25 V and E°(Ag+/Ag) = +0.80 V, what is the standard cell potential in volts?",
        "de": "Für die Zelle\nNi(s) | Ni2+(1 M) || Ag+(1 M) | Ag(s)\nmit E°(Ni2+/Ni) = -0,25 V und E°(Ag+/Ag) = +0,80 V: Wie groß ist das Standardzellpotential in Volt?",
        "fr": "Pour la pile\nNi(s) | Ni2+(1 M) || Ag+(1 M) | Ag(s)\navec E°(Ni2+/Ni) = -0,25 V et E°(Ag+/Ag) = +0,80 V, quel est le potentiel standard de la pile en volts ?",
        "ru": "Для элемента\nNi(тв) | Ni2+(1 M) || Ag+(1 M) | Ag(тв)\nпри E°(Ni2+/Ni) = -0,25 В и E°(Ag+/Ag) = +0,80 В чему равен стандартный потенциал элемента в вольтах?",
        "ar": "في الخلية\nNi(ص) | Ni2+(1 M) || Ag+(1 M) | Ag(ص)\nإذا كان E°(Ni2+/Ni) = -0.25 V و E°(Ag+/Ag) = +0.80 V، فما جهد الخلية القياسي بالفولت؟",
        "zh": "对于电池\nNi(s) | Ni2+(1 M) || Ag+(1 M) | Ag(s)\n已知 E°(Ni2+/Ni) = -0.25 V，E°(Ag+/Ag) = +0.80 V，标准电池电势是多少伏？",
        "ku": "Di pîla\nNi(r) | Ni2+(1 M) || Ag+(1 M) | Ag(r)\nde E°(Ni2+/Ni) = -0,25 V û E°(Ag+/Ag) = +0,80 V be, potansiyela standard a pîlê çend volt e?"
      },
      "options": [
        {
          "tr": "0,55",
          "en": "0.55",
          "de": "0,55",
          "fr": "0,55",
          "ru": "0,55",
          "ar": "0.55",
          "zh": "0.55",
          "ku": "0,55"
        },
        {
          "tr": "1,05",
          "en": "1.05",
          "de": "1,05",
          "fr": "1,05",
          "ru": "1,05",
          "ar": "1.05",
          "zh": "1.05",
          "ku": "1,05"
        },
        {
          "tr": "1,35",
          "en": "1.35",
          "de": "1,35",
          "fr": "1,35",
          "ru": "1,35",
          "ar": "1.35",
          "zh": "1.35",
          "ku": "1,35"
        },
        {
          "tr": "1,85",
          "en": "1.85",
          "de": "1,85",
          "fr": "1,85",
          "ru": "1,85",
          "ar": "1.85",
          "zh": "1.85",
          "ku": "1,85"
        },
        {
          "tr": "2,10",
          "en": "2.10",
          "de": "2,10",
          "fr": "2,10",
          "ru": "2,10",
          "ar": "2.10",
          "zh": "2.10",
          "ku": "2,10"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "İndirgenme potansiyeli küçük olan Ni anottur: E°yüks(Ni) = +0,25 V. Ag+ katotta indirgenir: E°ind = +0,80 V. E°pil = 0,25 + 0,80 = 1,05 V. Ag+ yarı tepkimesi 2 ile çarpılsa da potansiyel 2 ile çarpılmaz; bu hatayla 1,85 veya 1,35 V bulunur. 0,55 V, Ni'nin potansiyelinin işaretini çevirmeden toplamaktan, 2,10 V ise pil potansiyelini 2 ile çarpmaktan gelir.",
        "en": "Ni, with the smaller reduction potential, is the anode: E°ox(Ni) = +0.25 V. Ag+ is reduced at the cathode: E°red = +0.80 V. E°cell = 0.25 + 0.80 = 1.05 V. Even if the Ag+ half-reaction is multiplied by 2, its potential is not; that mistake gives 1.85 or 1.35 V. 0.55 V comes from adding Ni's potential without reversing its sign, and 2.10 V from doubling the cell potential.",
        "de": "Ni mit dem kleineren Reduktionspotential ist die Anode: E°Ox(Ni) = +0,25 V. Ag+ wird an der Kathode reduziert: E°Red = +0,80 V. E°Zelle = 0,25 + 0,80 = 1,05 V. Auch wenn die Ag+-Halbreaktion mit 2 multipliziert wird, das Potential nicht; dieser Fehler ergibt 1,85 oder 1,35 V. 0,55 V entsteht, wenn das Vorzeichen von Ni nicht umgekehrt wird, 2,10 V durch Verdoppeln des Zellpotentials.",
        "fr": "Ni, au plus petit potentiel de réduction, est l'anode : E°ox(Ni) = +0,25 V. Ag+ est réduit à la cathode : E°réd = +0,80 V. E°pile = 0,25 + 0,80 = 1,05 V. Même si la demi-réaction de Ag+ est multipliée par 2, son potentiel ne l'est pas ; cette erreur donne 1,85 ou 1,35 V. 0,55 V vient de l'oubli d'inverser le signe du potentiel de Ni, et 2,10 V du doublement du potentiel de la pile.",
        "ru": "Ni с меньшим потенциалом восстановления — анод: E°ок(Ni) = +0,25 В. Ag+ восстанавливается на катоде: E°восст = +0,80 В. E°эл = 0,25 + 0,80 = 1,05 В. Даже если полуреакцию Ag+ умножить на 2, потенциал не умножается; эта ошибка даёт 1,85 или 1,35 В. 0,55 В получается без смены знака потенциала Ni, а 2,10 В — при удвоении потенциала элемента.",
        "ar": "النيكل ذو جهد الاختزال الأصغر هو الأنود: E°تأكسد(Ni) = +0.25 V. ويُختزل Ag+ عند الكاثود: E°اختزال = +0.80 V. إذن E°خلية = 0.25 + 0.80 = 1.05 V. وإن ضُربت نصف معادلة Ag+ في 2 فلا يُضرب جهدها؛ وهذا الخطأ يعطي 1.85 أو 1.35 V. أما 0.55 V فتنتج عن عدم عكس إشارة جهد Ni، و2.10 V عن مضاعفة جهد الخلية.",
        "zh": "还原电势较小的 Ni 是负极：E°氧化(Ni) = +0.25 V。Ag+ 在正极被还原：E°还原 = +0.80 V。E°电池 = 0.25 + 0.80 = 1.05 V。即使 Ag+ 半反应乘以 2，其电势也不乘 2；犯此错误会得到 1.85 或 1.35 V。0.55 V 来自没有把 Ni 的电势变号，2.10 V 来自把电池电势乘以 2。",
        "ku": "Ni ya ku potansiyela wê ya reduksiyonê biçûktir e anod e: E°oks(Ni) = +0,25 V. Ag+ li katodê kêm dibe: E°red = +0,80 V. E°pîl = 0,25 + 0,80 = 1,05 V. Heke nîvreaksiyona Ag+ bi 2 were zêdekirin jî potansiyel bi 2 nayê zêdekirin; bi vê xeletiyê 1,85 an 1,35 V tê dîtin. 0,55 V ji nevegerandina nîşana potansiyela Ni, 2,10 V jî ji du qatkirina potansiyela pîlê tê."
      }
    },
    {
      "id": "u21-twin06",
      "stem": {
        "tr": "Zn(k) | Zn2+(1 M) || Ag+(1 M) | Ag(k) pili kuruluyor. E°(Zn2+/Zn) = -0,76 V, E°(Ag+/Ag) = +0,80 V'tur.\nBu pil ile ilgili;\nI. Zn elektrot anottur.\nII. Elektronlar dış devrede Ag elektrottan Zn elektroda doğru akar.\nIII. Pil çalıştıkça Ag+ iyonlarının derişimi azalır.\nyargılarından hangileri doğrudur?",
        "en": "The cell Zn(s) | Zn2+(1 M) || Ag+(1 M) | Ag(s) is set up. E°(Zn2+/Zn) = -0.76 V, E°(Ag+/Ag) = +0.80 V.\nWhich of the following statements about this cell are correct?\nI. The Zn electrode is the anode.\nII. In the external circuit, electrons flow from the Ag electrode to the Zn electrode.\nIII. As the cell operates, the concentration of Ag+ ions decreases.",
        "de": "Die Zelle Zn(s) | Zn2+(1 M) || Ag+(1 M) | Ag(s) wird aufgebaut. E°(Zn2+/Zn) = -0,76 V, E°(Ag+/Ag) = +0,80 V.\nWelche der folgenden Aussagen über diese Zelle sind richtig?\nI. Die Zn-Elektrode ist die Anode.\nII. Im äußeren Stromkreis fließen die Elektronen von der Ag-Elektrode zur Zn-Elektrode.\nIII. Während die Zelle arbeitet, sinkt die Konzentration der Ag+-Ionen.",
        "fr": "On réalise la pile Zn(s) | Zn2+(1 M) || Ag+(1 M) | Ag(s). E°(Zn2+/Zn) = -0,76 V, E°(Ag+/Ag) = +0,80 V.\nParmi les affirmations suivantes sur cette pile, lesquelles sont correctes ?\nI. L'électrode de Zn est l'anode.\nII. Dans le circuit extérieur, les électrons vont de l'électrode d'Ag vers l'électrode de Zn.\nIII. Pendant le fonctionnement, la concentration des ions Ag+ diminue.",
        "ru": "Собран элемент Zn(тв) | Zn2+(1 M) || Ag+(1 M) | Ag(тв). E°(Zn2+/Zn) = -0,76 В, E°(Ag+/Ag) = +0,80 В.\nКакие из утверждений об этом элементе верны?\nI. Цинковый электрод — анод.\nII. Во внешней цепи электроны движутся от серебряного электрода к цинковому.\nIII. По мере работы элемента концентрация ионов Ag+ уменьшается.",
        "ar": "تُركَّب الخلية Zn(ص) | Zn2+(1 M) || Ag+(1 M) | Ag(ص)، حيث E°(Zn2+/Zn) = -0.76 V و E°(Ag+/Ag) = +0.80 V.\nأيّ العبارات الآتية عن هذه الخلية صحيحة؟\nI. قطب Zn هو الأنود.\nII. تسري الإلكترونات في الدائرة الخارجية من قطب Ag إلى قطب Zn.\nIII. مع عمل الخلية يقل تركيز أيونات Ag+.",
        "zh": "组装电池 Zn(s) | Zn2+(1 M) || Ag+(1 M) | Ag(s)。E°(Zn2+/Zn) = -0.76 V，E°(Ag+/Ag) = +0.80 V。\n关于该电池的下列说法中，哪些正确？\nI. Zn 电极是负极。\nII. 在外电路中，电子从 Ag 电极流向 Zn 电极。\nIII. 电池工作时，Ag+ 浓度减小。",
        "ku": "Pîla Zn(r) | Zn2+(1 M) || Ag+(1 M) | Ag(r) tê sazkirin. E°(Zn2+/Zn) = -0,76 V, E°(Ag+/Ag) = +0,80 V.\nDerbarê vê pîlê de kîjan ji van gotinan rast in?\nI. Elektroda Zn anod e.\nII. Di çerxa derve de elektron ji elektroda Ag ber bi elektroda Zn ve diherikin.\nIII. Her ku pîl dixebite tîrbûna îyonên Ag+ kêm dibe."
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
        "tr": "I doğru: indirgenme potansiyeli küçük olan Zn yükseltgenir, yani anottur. II yanlış: elektronlar dış devrede yükseltgenmenin olduğu anottan (Zn) katoda (Ag) akar; yön ters verilmiştir. III doğru: katotta Ag+ + e- → Ag tepkimesiyle Ag+ iyonları harcanır, derişimleri azalır. Doğru yargılar I ve III'tür.",
        "en": "I is correct: Zn, with the smaller reduction potential, is oxidized, so it is the anode. II is wrong: in the external circuit electrons flow from the anode (Zn), where oxidation occurs, to the cathode (Ag); the direction is reversed. III is correct: at the cathode Ag+ + e- → Ag consumes Ag+ ions, so their concentration falls. The correct statements are I and III.",
        "de": "I ist richtig: Zn mit dem kleineren Reduktionspotential wird oxidiert, ist also die Anode. II ist falsch: Im äußeren Kreis fließen die Elektronen von der Anode (Zn), wo die Oxidation stattfindet, zur Kathode (Ag); die Richtung ist vertauscht. III ist richtig: An der Kathode verbraucht Ag+ + e- → Ag die Ag+-Ionen, ihre Konzentration sinkt. Richtig sind I und III.",
        "fr": "I est correcte : Zn, au plus petit potentiel de réduction, s'oxyde ; c'est l'anode. II est fausse : dans le circuit extérieur, les électrons vont de l'anode (Zn), siège de l'oxydation, vers la cathode (Ag) ; le sens est inversé. III est correcte : à la cathode, Ag+ + e- → Ag consomme les ions Ag+, leur concentration diminue. Les affirmations correctes sont I et III.",
        "ru": "I верно: Zn с меньшим потенциалом восстановления окисляется, значит, это анод. II неверно: во внешней цепи электроны идут от анода (Zn), где происходит окисление, к катоду (Ag); направление перепутано. III верно: на катоде реакция Ag+ + e- → Ag расходует ионы Ag+, их концентрация уменьшается. Верны I и III.",
        "ar": "I صحيحة: يتأكسد Zn ذو جهد الاختزال الأصغر فهو الأنود. II خاطئة: تسري الإلكترونات في الدائرة الخارجية من الأنود (Zn) حيث تحدث الأكسدة إلى الكاثود (Ag)؛ فالاتجاه معكوس. III صحيحة: عند الكاثود يستهلك التفاعل Ag+ + e- → Ag أيونات Ag+ فيقل تركيزها. العبارتان الصحيحتان هما I و III.",
        "zh": "I 正确：还原电势较小的 Zn 被氧化，是负极。II 错误：外电路中电子从发生氧化的负极(Zn)流向正极(Ag)，方向说反了。III 正确：正极上 Ag+ + e- → Ag 消耗 Ag+，其浓度减小。正确的是 I 和 III。",
        "ku": "I rast e: Zn ya ku potansiyela wê ya reduksiyonê biçûktir e oksîd dibe, ango anod e. II şaş e: di çerxa derve de elektron ji anoda (Zn) ku oksîdasyon lê dibe ber bi katodê (Ag) ve diherikin; alî berevajî hatiye dayîn. III rast e: li katodê bi Ag+ + e- → Ag îyonên Ag+ têne xerckirin û tîrbûna wan kêm dibe. Gotinên rast I û III ne."
      }
    },
    {
      "id": "u21-twin07",
      "stem": {
        "tr": "X, Y ve Z metalleriyle yapılan deneylerde şu gözlemler kaydediliyor:\n• X metali Y2+ iyonları içeren çözeltiye daldırıldığında X yüzeyinde Y metali birikiyor.\n• Z metali X2+ iyonları içeren çözeltiye daldırıldığında hiçbir değişim olmuyor.\n• Z metali Y2+ iyonları içeren çözeltiye daldırıldığında Z yüzeyinde Y metali birikiyor.\nBuna göre X, Y ve Z metallerinin yükseltgenme potansiyelleri (aktiflikleri) arasındaki ilişki aşağıdakilerden hangisidir?",
        "en": "In experiments with metals X, Y and Z the following observations are recorded:\n• When metal X is dipped into a solution containing Y2+ ions, metal Y deposits on X.\n• When metal Z is dipped into a solution containing X2+ ions, nothing happens.\n• When metal Z is dipped into a solution containing Y2+ ions, metal Y deposits on Z.\nWhich of the following gives the relationship between the oxidation potentials (activities) of X, Y and Z?",
        "de": "Bei Versuchen mit den Metallen X, Y und Z werden folgende Beobachtungen gemacht:\n• Taucht man Metall X in eine Lösung mit Y2+-Ionen, scheidet sich Metall Y auf X ab.\n• Taucht man Metall Z in eine Lösung mit X2+-Ionen, geschieht nichts.\n• Taucht man Metall Z in eine Lösung mit Y2+-Ionen, scheidet sich Metall Y auf Z ab.\nWelche Beziehung besteht zwischen den Oxidationspotentialen (Aktivitäten) von X, Y und Z?",
        "fr": "Lors d'expériences avec les métaux X, Y et Z, on observe :\n• Quand le métal X est plongé dans une solution d'ions Y2+, du métal Y se dépose sur X.\n• Quand le métal Z est plongé dans une solution d'ions X2+, rien ne se passe.\n• Quand le métal Z est plongé dans une solution d'ions Y2+, du métal Y se dépose sur Z.\nQuelle est la relation entre les potentiels d'oxydation (activités) de X, Y et Z ?",
        "ru": "В опытах с металлами X, Y и Z получены следующие наблюдения:\n• При погружении металла X в раствор, содержащий ионы Y2+, на поверхности X осаждается металл Y.\n• При погружении металла Z в раствор, содержащий ионы X2+, никаких изменений не происходит.\n• При погружении металла Z в раствор, содержащий ионы Y2+, на поверхности Z осаждается металл Y.\nКакое соотношение между потенциалами окисления (активностью) металлов X, Y и Z верно?",
        "ar": "في تجارب على الفلزات X و Y و Z سُجّلت الملاحظات الآتية:\n• عند غمس الفلز X في محلول يحتوي على أيونات Y2+ يترسب الفلز Y على سطح X.\n• عند غمس الفلز Z في محلول يحتوي على أيونات X2+ لا يحدث أي تغيّر.\n• عند غمس الفلز Z في محلول يحتوي على أيونات Y2+ يترسب الفلز Y على سطح Z.\nما العلاقة بين جهود تأكسد (نشاط) الفلزات X و Y و Z؟",
        "zh": "用金属 X、Y、Z 做实验，记录如下：\n• 将 X 浸入含 Y2+ 的溶液中，X 表面析出金属 Y。\n• 将 Z 浸入含 X2+ 的溶液中，没有任何变化。\n• 将 Z 浸入含 Y2+ 的溶液中，Z 表面析出金属 Y。\nX、Y、Z 的氧化电势（活动性）大小关系是下列哪一项？",
        "ku": "Di ceribandinên bi metalên X, Y û Z de ev çavdêrî hatin tomarkirin:\n• Dema metala X di çareseriyeke bi îyonên Y2+ de tê rakirin, metala Y li ser X kom dibe.\n• Dema metala Z di çareseriyeke bi îyonên X2+ de tê rakirin, tu guherîn çênabe.\n• Dema metala Z di çareseriyeke bi îyonên Y2+ de tê rakirin, metala Y li ser Z kom dibe.\nLi gorî vê, têkiliya di navbera potansiyelên oksîdasyonê (çalakiya) X, Y û Z de kîjan e?"
      },
      "options": [
        {
          "tr": "X > Z > Y",
          "en": "X > Z > Y",
          "de": "X > Z > Y",
          "fr": "X > Z > Y",
          "ru": "X > Z > Y",
          "ar": "X > Z > Y",
          "zh": "X > Z > Y",
          "ku": "X > Z > Y"
        },
        {
          "tr": "X > Y > Z",
          "en": "X > Y > Z",
          "de": "X > Y > Z",
          "fr": "X > Y > Z",
          "ru": "X > Y > Z",
          "ar": "X > Y > Z",
          "zh": "X > Y > Z",
          "ku": "X > Y > Z"
        },
        {
          "tr": "Z > X > Y",
          "en": "Z > X > Y",
          "de": "Z > X > Y",
          "fr": "Z > X > Y",
          "ru": "Z > X > Y",
          "ar": "Z > X > Y",
          "zh": "Z > X > Y",
          "ku": "Z > X > Y"
        },
        {
          "tr": "Y > Z > X",
          "en": "Y > Z > X",
          "de": "Y > Z > X",
          "fr": "Y > Z > X",
          "ru": "Y > Z > X",
          "ar": "Y > Z > X",
          "zh": "Y > Z > X",
          "ku": "Y > Z > X"
        },
        {
          "tr": "Z > Y > X",
          "en": "Z > Y > X",
          "de": "Z > Y > X",
          "fr": "Z > Y > X",
          "ru": "Z > Y > X",
          "ar": "Z > Y > X",
          "zh": "Z > Y > X",
          "ku": "Z > Y > X"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Bir metal, kendisinden daha az aktif metalin iyonunu indirger. 1. deney: X, Y2+'yı indirger → X > Y. 2. deney: Z, X2+'yı indirgeyemez → X > Z. 3. deney: Z, Y2+'yı indirger → Z > Y. Birleştirince X > Z > Y bulunur. Z'yi X'ten aktif sanmak, ikinci deneyde \"tepkime olmaması\"nın Z'nin daha az aktif olduğunu gösterdiğini gözden kaçırmaktır.",
        "en": "A metal reduces the ions of a less active metal. Experiment 1: X reduces Y2+ → X > Y. Experiment 2: Z cannot reduce X2+ → X > Z. Experiment 3: Z reduces Y2+ → Z > Y. Combining gives X > Z > Y. Thinking Z is more active than X overlooks that \"no reaction\" in the second experiment means Z is the less active metal.",
        "de": "Ein Metall reduziert die Ionen eines weniger aktiven Metalls. Versuch 1: X reduziert Y2+ → X > Y. Versuch 2: Z kann X2+ nicht reduzieren → X > Z. Versuch 3: Z reduziert Y2+ → Z > Y. Zusammen ergibt sich X > Z > Y. Wer Z für aktiver als X hält, übersieht, dass \"keine Reaktion\" im zweiten Versuch Z als weniger aktiv ausweist.",
        "fr": "Un métal réduit les ions d'un métal moins actif. Expérience 1 : X réduit Y2+ → X > Y. Expérience 2 : Z ne réduit pas X2+ → X > Z. Expérience 3 : Z réduit Y2+ → Z > Y. On obtient X > Z > Y. Croire Z plus actif que X, c'est oublier que « aucune réaction » dans la deuxième expérience signifie que Z est moins actif.",
        "ru": "Металл восстанавливает ионы менее активного металла. Опыт 1: X восстанавливает Y2+ → X > Y. Опыт 2: Z не восстанавливает X2+ → X > Z. Опыт 3: Z восстанавливает Y2+ → Z > Y. Отсюда X > Z > Y. Считать Z активнее X — значит упустить, что «отсутствие реакции» во втором опыте указывает на меньшую активность Z.",
        "ar": "يختزل الفلز أيونات فلز أقل نشاطًا منه. التجربة 1: يختزل X أيونات Y2+ → X > Y. التجربة 2: لا يختزل Z أيونات X2+ → X > Z. التجربة 3: يختزل Z أيونات Y2+ → Z > Y. وبالجمع نحصل على X > Z > Y. أما اعتبار Z أنشط من X فيُغفل أن «عدم حدوث تفاعل» في التجربة الثانية يدل على أن Z أقل نشاطًا.",
        "zh": "金属能还原比它活动性弱的金属的离子。实验 1：X 还原 Y2+ → X > Y。实验 2：Z 不能还原 X2+ → X > Z。实验 3：Z 还原 Y2+ → Z > Y。综合得 X > Z > Y。认为 Z 比 X 活泼，是忽略了第二个实验“不反应”说明 Z 的活动性较弱。",
        "ku": "Metalek îyonên metaleke ji xwe kêmçalaktir kêm dike. Ceribandina 1: X Y2+ kêm dike → X > Y. Ceribandina 2: Z nikare X2+ kêm bike → X > Z. Ceribandina 3: Z Y2+ kêm dike → Z > Y. Bi hev re X > Z > Y derdikeve. Hesibandina Z ji X çalaktir, ji bîr kirina wê ye ku \"reaksiyon tune\" di ceribandina duyem de nîşan dide Z kêmçalaktir e."
      }
    },
    {
      "id": "u21-twin08",
      "stem": {
        "tr": "Standart indirgenme potansiyelleri:\nAl3+/Al: -1,66 V; Zn2+/Zn: -0,76 V; Fe2+/Fe: -0,44 V; Ni2+/Ni: -0,25 V; Cu2+/Cu: +0,34 V; Ag+/Ag: +0,80 V\nBuna göre 1 M CuSO4 çözeltisi, aşağıdaki metallerden hangisinden yapılmış bir kapta kabın aşınmasına yol açmadan saklanabilir?",
        "en": "Standard reduction potentials:\nAl3+/Al: -1.66 V; Zn2+/Zn: -0.76 V; Fe2+/Fe: -0.44 V; Ni2+/Ni: -0.25 V; Cu2+/Cu: +0.34 V; Ag+/Ag: +0.80 V\nIn a container made of which of the following metals can a 1 M CuSO4 solution be stored without corroding the container?",
        "de": "Standardreduktionspotentiale:\nAl3+/Al: -1,66 V; Zn2+/Zn: -0,76 V; Fe2+/Fe: -0,44 V; Ni2+/Ni: -0,25 V; Cu2+/Cu: +0,34 V; Ag+/Ag: +0,80 V\nIn einem Gefäß aus welchem der folgenden Metalle kann eine 1 M CuSO4-Lösung aufbewahrt werden, ohne dass das Gefäß angegriffen wird?",
        "fr": "Potentiels standard de réduction :\nAl3+/Al : -1,66 V ; Zn2+/Zn : -0,76 V ; Fe2+/Fe : -0,44 V ; Ni2+/Ni : -0,25 V ; Cu2+/Cu : +0,34 V ; Ag+/Ag : +0,80 V\nDans un récipient fait de quel métal peut-on conserver une solution 1 M de CuSO4 sans que le récipient soit attaqué ?",
        "ru": "Стандартные потенциалы восстановления:\nAl3+/Al: -1,66 В; Zn2+/Zn: -0,76 В; Fe2+/Fe: -0,44 В; Ni2+/Ni: -0,25 В; Cu2+/Cu: +0,34 В; Ag+/Ag: +0,80 В\nВ сосуде из какого металла можно хранить 1 M раствор CuSO4 так, чтобы сосуд не разрушался?",
        "ar": "جهود الاختزال القياسية:\nAl3+/Al: -1.66 V؛ Zn2+/Zn: -0.76 V؛ Fe2+/Fe: -0.44 V؛ Ni2+/Ni: -0.25 V؛ Cu2+/Cu: +0.34 V؛ Ag+/Ag: +0.80 V\nفي وعاء مصنوع من أيّ الفلزات الآتية يمكن حفظ محلول CuSO4 تركيزه 1 M دون أن يتآكل الوعاء؟",
        "zh": "标准还原电势：\nAl3+/Al：-1.66 V；Zn2+/Zn：-0.76 V；Fe2+/Fe：-0.44 V；Ni2+/Ni：-0.25 V；Cu2+/Cu：+0.34 V；Ag+/Ag：+0.80 V\n1 M CuSO4 溶液可以保存在由下列哪种金属制成的容器中而不腐蚀容器？",
        "ku": "Potansiyelên reduksiyonê yên standard:\nAl3+/Al: -1,66 V; Zn2+/Zn: -0,76 V; Fe2+/Fe: -0,44 V; Ni2+/Ni: -0,25 V; Cu2+/Cu: +0,34 V; Ag+/Ag: +0,80 V\nLi gorî vê, çareseriya CuSO4 ya 1 M dikare di firaxeke ji kîjan metalê çêkirî de bê hilanîn bêyî ku firax bixwe?"
      },
      "options": [
        {
          "tr": "Alüminyum",
          "en": "Aluminium",
          "de": "Aluminium",
          "fr": "Aluminium",
          "ru": "Алюминий",
          "ar": "الألومنيوم",
          "zh": "铝",
          "ku": "Aluminyûm"
        },
        {
          "tr": "Çinko",
          "en": "Zinc",
          "de": "Zink",
          "fr": "Zinc",
          "ru": "Цинк",
          "ar": "الخارصين",
          "zh": "锌",
          "ku": "Zink"
        },
        {
          "tr": "Demir",
          "en": "Iron",
          "de": "Eisen",
          "fr": "Fer",
          "ru": "Железо",
          "ar": "الحديد",
          "zh": "铁",
          "ku": "Hesin"
        },
        {
          "tr": "Nikel",
          "en": "Nickel",
          "de": "Nickel",
          "fr": "Nickel",
          "ru": "Никель",
          "ar": "النيكل",
          "zh": "镍",
          "ku": "Nîkel"
        },
        {
          "tr": "Gümüş",
          "en": "Silver",
          "de": "Silber",
          "fr": "Argent",
          "ru": "Серебро",
          "ar": "الفضة",
          "zh": "银",
          "ku": "Zîv"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Kap metali Cu2+ iyonlarını indirgeyebiliyorsa (M + Cu2+ → M2+ + Cu istemliyse) kap aşınır. İndirgenme potansiyeli +0,34 V'tan küçük olan Al, Zn, Fe ve Ni, Cu2+'yı indirger; bu metallerle E°pil > 0 olur. Gümüşün indirgenme potansiyeli (+0,80 V) bakırınkinden büyüktür; Ag + Cu2+ tepkimesinin E° değeri 0,34 - 0,80 = -0,46 V olduğundan istemsizdir ve kap aşınmaz. Nikel, potansiyeli bakıra en yakın olsa da yine de +0,34 V'tan küçük olduğu için Cu2+ ile tepkime verir.",
        "en": "If the container metal can reduce Cu2+ (if M + Cu2+ → M2+ + Cu is spontaneous), the container corrodes. Al, Zn, Fe and Ni, whose reduction potentials are below +0.34 V, reduce Cu2+; with them E°cell > 0. Silver's reduction potential (+0.80 V) is greater than copper's; for Ag + Cu2+ E° = 0.34 - 0.80 = -0.46 V, so it is non-spontaneous and the container is not attacked. Nickel, although closest to copper, still has a lower potential and reacts with Cu2+.",
        "de": "Kann das Gefäßmetall Cu2+ reduzieren (ist M + Cu2+ → M2+ + Cu freiwillig), wird das Gefäß angegriffen. Al, Zn, Fe und Ni mit Reduktionspotentialen unter +0,34 V reduzieren Cu2+; mit ihnen ist E°Zelle > 0. Das Reduktionspotential von Silber (+0,80 V) ist größer als das von Kupfer; für Ag + Cu2+ gilt E° = 0,34 - 0,80 = -0,46 V, die Reaktion ist nicht freiwillig, das Gefäß bleibt unversehrt. Nickel liegt Kupfer am nächsten, hat aber dennoch ein kleineres Potential und reagiert mit Cu2+.",
        "fr": "Si le métal du récipient peut réduire Cu2+ (si M + Cu2+ → M2+ + Cu est spontanée), le récipient est attaqué. Al, Zn, Fe et Ni, de potentiels de réduction inférieurs à +0,34 V, réduisent Cu2+ ; avec eux E°pile > 0. Le potentiel de réduction de l'argent (+0,80 V) est supérieur à celui du cuivre ; pour Ag + Cu2+, E° = 0,34 - 0,80 = -0,46 V : non spontanée, le récipient n'est pas attaqué. Le nickel, bien que le plus proche du cuivre, a encore un potentiel inférieur et réagit avec Cu2+.",
        "ru": "Если металл сосуда может восстанавливать Cu2+ (если реакция M + Cu2+ → M2+ + Cu самопроизвольна), сосуд разрушается. Al, Zn, Fe и Ni с потенциалами восстановления ниже +0,34 В восстанавливают Cu2+; с ними E°эл > 0. Потенциал восстановления серебра (+0,80 В) больше, чем у меди; для Ag + Cu2+ E° = 0,34 - 0,80 = -0,46 В, реакция несамопроизвольна, и сосуд не разрушается. Никель ближе всех к меди, но его потенциал всё же меньше, и он реагирует с Cu2+.",
        "ar": "إذا استطاع فلز الوعاء اختزال أيونات Cu2+ (أي إذا كان التفاعل M + Cu2+ → M2+ + Cu تلقائيًا) فإن الوعاء يتآكل. الفلزات Al و Zn و Fe و Ni ذات جهود الاختزال الأقل من +0.34 V تختزل Cu2+ ويكون معها E°خلية > 0. أما جهد اختزال الفضة (+0.80 V) فأكبر من جهد النحاس، فيكون E° للتفاعل Ag + Cu2+ = 0.34 - 0.80 = -0.46 V، أي غير تلقائي ولا يتآكل الوعاء. والنيكل رغم أنه الأقرب إلى النحاس فإن جهده أقل ويتفاعل مع Cu2+.",
        "zh": "如果容器金属能还原 Cu2+(即 M + Cu2+ → M2+ + Cu 自发)，容器就会被腐蚀。还原电势低于 +0.34 V 的 Al、Zn、Fe、Ni 都能还原 Cu2+，此时 E°电池 > 0。银的还原电势(+0.80 V)大于铜，Ag + Cu2+ 的 E° = 0.34 - 0.80 = -0.46 V，非自发，容器不被腐蚀。镍虽然电势最接近铜，但仍然更低，会与 Cu2+ 反应。",
        "ku": "Heke metala firaxê bikaribe îyonên Cu2+ kêm bike (heke M + Cu2+ → M2+ + Cu xweber be), firax dixwe. Al, Zn, Fe û Ni yên ku potansiyela wan a reduksiyonê ji +0,34 V biçûktir e Cu2+ kêm dikin; bi wan re E°pîl > 0 ye. Potansiyela reduksiyonê ya zîv (+0,80 V) ji ya sifir mezintir e; ji bo Ag + Cu2+ E° = 0,34 - 0,80 = -0,46 V e, ne xweber e û firax naxwe. Nîkel herçend herî nêzî sifir be jî potansiyela wê hîn biçûktir e û bi Cu2+ re reaksiyon dide."
      }
    },
    {
      "id": "u21-twin09",
      "stem": {
        "tr": "Cu(k) | Cu2+(0,01 M) || Cu2+(1 M) | Cu(k)\nşeklinde bir derişim pili kuruluyor.\nBu pil ile ilgili;\nI. 0,01 M Cu2+ çözeltisine daldırılmış elektrot anottur.\nII. İki yarı hücre aynı olduğundan E°pil = 0 olduğu hâlde pil başlangıçta gerilim üretir.\nIII. Pil çalıştıkça 1 M çözeltiye daldırılmış Cu elektrodun kütlesi azalır.\nyargılarından hangileri doğrudur?",
        "en": "A concentration cell is set up as\nCu(s) | Cu2+(0.01 M) || Cu2+(1 M) | Cu(s).\nWhich of the following statements about this cell are correct?\nI. The electrode dipped in the 0.01 M Cu2+ solution is the anode.\nII. Although E°cell = 0 because the two half-cells are the same, the cell initially produces a voltage.\nIII. As the cell operates, the mass of the Cu electrode in the 1 M solution decreases.",
        "de": "Eine Konzentrationszelle wird aufgebaut:\nCu(s) | Cu2+(0,01 M) || Cu2+(1 M) | Cu(s).\nWelche der folgenden Aussagen über diese Zelle sind richtig?\nI. Die Elektrode in der 0,01 M Cu2+-Lösung ist die Anode.\nII. Obwohl E°Zelle = 0 ist, weil beide Halbzellen gleich sind, liefert die Zelle anfangs eine Spannung.\nIII. Während die Zelle arbeitet, nimmt die Masse der Cu-Elektrode in der 1 M Lösung ab.",
        "fr": "On réalise la pile de concentration\nCu(s) | Cu2+(0,01 M) || Cu2+(1 M) | Cu(s).\nParmi les affirmations suivantes sur cette pile, lesquelles sont correctes ?\nI. L'électrode plongée dans la solution 0,01 M de Cu2+ est l'anode.\nII. Bien que E°pile = 0 puisque les deux demi-piles sont identiques, la pile fournit initialement une tension.\nIII. Pendant le fonctionnement, la masse de l'électrode de Cu plongée dans la solution 1 M diminue.",
        "ru": "Собран концентрационный элемент\nCu(тв) | Cu2+(0,01 M) || Cu2+(1 M) | Cu(тв).\nКакие из утверждений об этом элементе верны?\nI. Электрод, погружённый в 0,01 M раствор Cu2+, — анод.\nII. Хотя E°эл = 0, так как полуэлементы одинаковы, вначале элемент даёт напряжение.\nIII. По мере работы элемента масса медного электрода в 1 M растворе уменьшается.",
        "ar": "تُركَّب خلية تركيز على النحو\nCu(ص) | Cu2+(0.01 M) || Cu2+(1 M) | Cu(ص).\nأيّ العبارات الآتية عن هذه الخلية صحيحة؟\nI. القطب المغموس في محلول Cu2+ تركيزه 0.01 M هو الأنود.\nII. رغم أن E°خلية = 0 لتماثل نصفي الخلية، فإن الخلية تولّد جهدًا في البداية.\nIII. مع عمل الخلية تقل كتلة قطب Cu المغموس في المحلول 1 M.",
        "zh": "组装浓差电池\nCu(s) | Cu2+(0.01 M) || Cu2+(1 M) | Cu(s)\n关于该电池的下列说法中，哪些正确？\nI. 浸在 0.01 M Cu2+ 溶液中的电极是负极。\nII. 虽然两个半电池相同使 E°电池 = 0，但电池开始时能产生电压。\nIII. 电池工作时，浸在 1 M 溶液中的 Cu 电极质量减少。",
        "ku": "Pîleke tîrbûnê wiha tê sazkirin:\nCu(r) | Cu2+(0,01 M) || Cu2+(1 M) | Cu(r).\nDerbarê vê pîlê de kîjan ji van gotinan rast in?\nI. Elektroda ku di çareseriya Cu2+ ya 0,01 M de ye anod e.\nII. Herçend ji ber ku her du nîvhucre wek hev in E°pîl = 0 be jî, pîl di destpêkê de voltajê çêdike.\nIII. Her ku pîl dixebite girseya elektroda Cu ya di çareseriya 1 M de kêm dibe."
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
      "correctIndex": 2,
      "explanation": {
        "tr": "I doğru: derişim pilinde seyreltik taraftaki Cu yükseltgenerek (Cu → Cu2+ + 2e-) kendi çözeltisinin derişimini artırır; bu elektrot anottur. II doğru: E°pil standart (1 M) koşullar içindir ve aynı yarı hücreler için sıfırdır; gerçek gerilimi ise iki çözelti arasındaki derişim farkı oluşturur. III yanlış: 1 M çözeltideki elektrot katottur; Cu2+ + 2e- → Cu ile üzerinde bakır birikir, kütlesi artar. Doğru yargılar I ve II'dir.",
        "en": "I is correct: in a concentration cell the Cu on the dilute side is oxidized (Cu → Cu2+ + 2e-) and raises the concentration of its own solution; this electrode is the anode. II is correct: E°cell refers to standard (1 M) conditions and is zero for identical half-cells; the actual voltage comes from the concentration difference between the two solutions. III is wrong: the electrode in the 1 M solution is the cathode; Cu2+ + 2e- → Cu deposits copper on it and its mass increases. The correct statements are I and II.",
        "de": "I ist richtig: In der Konzentrationszelle wird das Cu auf der verdünnten Seite oxidiert (Cu → Cu2+ + 2e-) und erhöht die Konzentration seiner Lösung; diese Elektrode ist die Anode. II ist richtig: E°Zelle gilt für Standardbedingungen (1 M) und ist bei gleichen Halbzellen null; die tatsächliche Spannung entsteht durch den Konzentrationsunterschied. III ist falsch: Die Elektrode in der 1 M Lösung ist die Kathode; durch Cu2+ + 2e- → Cu scheidet sich Kupfer ab, ihre Masse nimmt zu. Richtig sind I und II.",
        "fr": "I est correcte : dans une pile de concentration, le Cu du côté dilué s'oxyde (Cu → Cu2+ + 2e-) et augmente la concentration de sa solution ; cette électrode est l'anode. II est correcte : E°pile concerne les conditions standard (1 M) et vaut zéro pour des demi-piles identiques ; la tension réelle provient de la différence de concentration. III est fausse : l'électrode de la solution 1 M est la cathode ; Cu2+ + 2e- → Cu y dépose du cuivre, sa masse augmente. Les affirmations correctes sont I et II.",
        "ru": "I верно: в концентрационном элементе медь в разбавленном растворе окисляется (Cu → Cu2+ + 2e-) и повышает концентрацию своего раствора; этот электрод — анод. II верно: E°эл относится к стандартным условиям (1 M) и для одинаковых полуэлементов равен нулю; реальное напряжение создаётся разностью концентраций. III неверно: электрод в 1 M растворе — катод; по реакции Cu2+ + 2e- → Cu на нём осаждается медь, и масса растёт. Верны I и II.",
        "ar": "I صحيحة: في خلية التركيز يتأكسد النحاس في الجانب المخفف (Cu → Cu2+ + 2e-) فيرفع تركيز محلوله؛ وهذا القطب هو الأنود. II صحيحة: يخص E°خلية الظروف القياسية (1 M) وهو صفر لنصفي خلية متماثلين؛ أما الجهد الفعلي فينشأ عن فرق التركيز بين المحلولين. III خاطئة: القطب في المحلول 1 M هو الكاثود، ويترسب عليه النحاس بالتفاعل Cu2+ + 2e- → Cu فتزداد كتلته. العبارتان الصحيحتان هما I و II.",
        "zh": "I 正确：浓差电池中稀溶液一侧的 Cu 被氧化(Cu → Cu2+ + 2e-)，使本侧溶液浓度增大，该电极是负极。II 正确：E°电池 对应标准(1 M)条件，两个相同半电池的 E°电池 为零；实际电压来自两溶液的浓度差。III 错误：1 M 溶液中的电极是正极，Cu2+ + 2e- → Cu 使铜在其上析出，质量增加。正确的是 I 和 II。",
        "ku": "I rast e: di pîla tîrbûnê de Cu ya li aliyê sivik oksîd dibe (Cu → Cu2+ + 2e-) û tîrbûna çareseriya xwe zêde dike; ev elektrod anod e. II rast e: E°pîl ji bo şertên standard (1 M) e û ji bo nîvhucreyên wek hev sifir e; voltaja rastîn ji cudahiya tîrbûna her du çareseriyan tê. III şaş e: elektroda di çareseriya 1 M de katod e; bi Cu2+ + 2e- → Cu sifir li ser kom dibe û girseya wê zêde dibe. Gotinên rast I û II ne."
      }
    },
    {
      "id": "u21-twin10",
      "stem": {
        "tr": "25 °C'de çalışan Zn(k) | Zn2+(1 M) || Cu2+(1 M) | Cu(k) pili için aşağıdaki işlemlerden hangisi pil gerilimini artırır?",
        "en": "For the cell Zn(s) | Zn2+(1 M) || Cu2+(1 M) | Cu(s) operating at 25 °C, which of the following operations increases the cell voltage?",
        "de": "Welcher der folgenden Eingriffe erhöht die Spannung der bei 25 °C arbeitenden Zelle Zn(s) | Zn2+(1 M) || Cu2+(1 M) | Cu(s)?",
        "fr": "Pour la pile Zn(s) | Zn2+(1 M) || Cu2+(1 M) | Cu(s) fonctionnant à 25 °C, laquelle des opérations suivantes augmente la tension ?",
        "ru": "Какая из следующих операций повышает напряжение элемента Zn(тв) | Zn2+(1 M) || Cu2+(1 M) | Cu(тв), работающего при 25 °C?",
        "ar": "بالنسبة إلى الخلية Zn(ص) | Zn2+(1 M) || Cu2+(1 M) | Cu(ص) العاملة عند 25 °C، أيّ الإجراءات الآتية يزيد جهد الخلية؟",
        "zh": "对于在 25 °C 下工作的电池 Zn(s) | Zn2+(1 M) || Cu2+(1 M) | Cu(s)，下列哪种操作能使电池电压增大？",
        "ku": "Ji bo pîla Zn(r) | Zn2+(1 M) || Cu2+(1 M) | Cu(r) ya ku li 25 °C dixebite, kîjan ji van kiryaran voltaja pîlê zêde dike?"
      },
      "options": [
        {
          "tr": "Katot kabına saf su eklemek",
          "en": "Adding pure water to the cathode compartment",
          "de": "Reines Wasser in den Kathodenraum geben",
          "fr": "Ajouter de l'eau pure dans le compartiment cathodique",
          "ru": "Добавить чистую воду в катодное пространство",
          "ar": "إضافة ماء نقي إلى وعاء الكاثود",
          "zh": "向正极区加入纯水",
          "ku": "Lêzêdekirina ava paqij li aliyê katodê"
        },
        {
          "tr": "Anot kabına, Zn2+ iyonlarını ZnS hâlinde çöktüren Na2S katısı eklemek",
          "en": "Adding solid Na2S, which precipitates Zn2+ ions as ZnS, to the anode compartment",
          "de": "Festes Na2S, das Zn2+-Ionen als ZnS ausfällt, in den Anodenraum geben",
          "fr": "Ajouter dans le compartiment anodique du Na2S solide, qui précipite les ions Zn2+ sous forme de ZnS",
          "ru": "Добавить в анодное пространство твёрдый Na2S, осаждающий ионы Zn2+ в виде ZnS",
          "ar": "إضافة Na2S الصلب الذي يرسّب أيونات Zn2+ على هيئة ZnS إلى وعاء الأنود",
          "zh": "向负极区加入能使 Zn2+ 以 ZnS 形式沉淀的固体 Na2S",
          "ku": "Lêzêdekirina Na2S ya hişk, ku îyonên Zn2+ wek ZnS dinişîne, li aliyê anodê"
        },
        {
          "tr": "Anot kabında Zn(NO3)2 katısı çözmek",
          "en": "Dissolving solid Zn(NO3)2 in the anode compartment",
          "de": "Festes Zn(NO3)2 im Anodenraum lösen",
          "fr": "Dissoudre du Zn(NO3)2 solide dans le compartiment anodique",
          "ru": "Растворить твёрдый Zn(NO3)2 в анодном пространстве",
          "ar": "إذابة Zn(NO3)2 الصلب في وعاء الأنود",
          "zh": "在负极区溶解固体 Zn(NO3)2",
          "ku": "Helandina Zn(NO3)2 ya hişk li aliyê anodê"
        },
        {
          "tr": "Cu elektrodun yüzey alanını iki katına çıkarmak",
          "en": "Doubling the surface area of the Cu electrode",
          "de": "Die Oberfläche der Cu-Elektrode verdoppeln",
          "fr": "Doubler la surface de l'électrode de Cu",
          "ru": "Увеличить вдвое площадь поверхности медного электрода",
          "ar": "مضاعفة مساحة سطح قطب Cu",
          "zh": "将 Cu 电极的表面积增大一倍",
          "ku": "Du qatkirina rûbera elektroda Cu"
        },
        {
          "tr": "Katot kabına, Cu2+ iyonlarını CuS hâlinde çöktüren Na2S katısı eklemek",
          "en": "Adding solid Na2S, which precipitates Cu2+ ions as CuS, to the cathode compartment",
          "de": "Festes Na2S, das Cu2+-Ionen als CuS ausfällt, in den Kathodenraum geben",
          "fr": "Ajouter dans le compartiment cathodique du Na2S solide, qui précipite les ions Cu2+ sous forme de CuS",
          "ru": "Добавить в катодное пространство твёрдый Na2S, осаждающий ионы Cu2+ в виде CuS",
          "ar": "إضافة Na2S الصلب الذي يرسّب أيونات Cu2+ على هيئة CuS إلى وعاء الكاثود",
          "zh": "向正极区加入能使 Cu2+ 以 CuS 形式沉淀的固体 Na2S",
          "ku": "Lêzêdekirina Na2S ya hişk, ku îyonên Cu2+ wek CuS dinişîne, li aliyê katodê"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Toplam tepkime Zn + Cu2+ → Zn2+ + Cu'dur. Anot kabında Zn2+ iyonları ZnS olarak çöktürülürse ürün derişimi azalır, denge ürünlere kayar ve gerilim artar. Zn(NO3)2 çözmek Zn2+ derişimini artırır; katoda su eklemek ya da Cu2+'yı CuS olarak çöktürmek giren derişimini azaltır; bu üç işlem dengeyi girenlere kaydırıp gerilimi düşürür. Elektrot yüzey alanı derişimi değiştirmez; potansiyel şiddet özelliği olduğundan gerilim değişmez.",
        "en": "The overall reaction is Zn + Cu2+ → Zn2+ + Cu. Precipitating Zn2+ as ZnS in the anode compartment lowers the product concentration, shifts the equilibrium toward products and raises the voltage. Dissolving Zn(NO3)2 raises [Zn2+]; adding water to the cathode or precipitating Cu2+ as CuS lowers the reactant concentration; these three shift the equilibrium toward reactants and lower the voltage. Electrode surface area does not change any concentration; potential is intensive, so the voltage is unchanged.",
        "de": "Die Gesamtreaktion ist Zn + Cu2+ → Zn2+ + Cu. Fällt man Zn2+ im Anodenraum als ZnS aus, sinkt die Produktkonzentration, das Gleichgewicht verschiebt sich zu den Produkten und die Spannung steigt. Zn(NO3)2 erhöht [Zn2+]; Wasser im Kathodenraum oder Fällung von Cu2+ als CuS senkt die Eduktkonzentration; diese drei Eingriffe verschieben das Gleichgewicht zu den Edukten und senken die Spannung. Die Elektrodenoberfläche ändert keine Konzentration; das Potential ist intensiv, die Spannung bleibt gleich.",
        "fr": "La réaction globale est Zn + Cu2+ → Zn2+ + Cu. Précipiter Zn2+ sous forme de ZnS côté anode diminue la concentration du produit, déplace l'équilibre vers les produits et augmente la tension. Dissoudre Zn(NO3)2 augmente [Zn2+] ; ajouter de l'eau côté cathode ou précipiter Cu2+ en CuS diminue la concentration du réactif ; ces trois opérations déplacent l'équilibre vers les réactifs et font baisser la tension. La surface de l'électrode ne change aucune concentration ; le potentiel étant intensif, la tension ne change pas.",
        "ru": "Суммарная реакция: Zn + Cu2+ → Zn2+ + Cu. Осаждение Zn2+ в виде ZnS в анодном пространстве уменьшает концентрацию продукта, равновесие смещается к продуктам, и напряжение растёт. Растворение Zn(NO3)2 повышает [Zn2+]; добавление воды к катоду или осаждение Cu2+ в виде CuS снижает концентрацию реагента; эти три операции смещают равновесие к исходным веществам и снижают напряжение. Площадь электрода не меняет концентраций; потенциал — интенсивная величина, напряжение не меняется.",
        "ar": "التفاعل الكلي هو Zn + Cu2+ → Zn2+ + Cu. ترسيب أيونات Zn2+ على هيئة ZnS في وعاء الأنود يخفض تركيز الناتج فينزاح الاتزان نحو النواتج ويرتفع الجهد. أما إذابة Zn(NO3)2 فترفع [Zn2+]، وإضافة الماء إلى الكاثود أو ترسيب Cu2+ على هيئة CuS يخفضان تركيز المتفاعل؛ وهذه الإجراءات الثلاثة تزيح الاتزان نحو المتفاعلات وتخفض الجهد. ومساحة سطح القطب لا تغيّر أي تركيز، والجهد خاصية شدّية فلا يتغير.",
        "zh": "总反应为 Zn + Cu2+ → Zn2+ + Cu。在负极区将 Zn2+ 以 ZnS 沉淀，生成物浓度降低，平衡向生成物方向移动，电压增大。溶解 Zn(NO3)2 使 [Zn2+] 增大；向正极区加水或将 Cu2+ 以 CuS 沉淀使反应物浓度降低；这三种操作都使平衡向反应物方向移动，电压减小。电极表面积不改变任何浓度；电势是强度性质，电压不变。",
        "ku": "Reaksiyona giştî Zn + Cu2+ → Zn2+ + Cu ye. Heke li aliyê anodê îyonên Zn2+ wek ZnS bên niştandin, tîrbûna berhemê kêm dibe, hevsengî ber bi berheman ve diçe û voltaj zêde dibe. Helandina Zn(NO3)2 [Zn2+] zêde dike; lêzêdekirina avê li katodê an niştandina Cu2+ wek CuS tîrbûna têketiyê kêm dike; ev her sê kiryar hevsengiyê ber bi têketiyan ve dibin û voltajê dadixînin. Rûbera elektrodê tu tîrbûnê naguherîne; potansiyel taybetmendiya şiddetê ye, voltaj naguhere."
      }
    },
    {
      "id": "u21-twin11",
      "stem": {
        "tr": "3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO + 4H2O\ntepkimesi ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
        "en": "Which of the following statements about the reaction\n3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO + 4H2O\nis correct?",
        "de": "Welche der folgenden Aussagen über die Reaktion\n3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO + 4H2O\nist richtig?",
        "fr": "Laquelle des affirmations suivantes sur la réaction\n3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO + 4H2O\nest correcte ?",
        "ru": "Какое из следующих утверждений о реакции\n3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO + 4H2O\nверно?",
        "ar": "أيّ العبارات الآتية صحيحة بشأن التفاعل\n3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO + 4H2O؟",
        "zh": "关于反应\n3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO + 4H2O\n下列说法正确的是哪一项？",
        "ku": "Derbarê reaksiyona\n3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO + 4H2O\nde kîjan ji van gotinan rast e?"
      },
      "options": [
        {
          "tr": "Cu, tepkimede yükseltgen olarak davranır.",
          "en": "Cu acts as the oxidizing agent in the reaction.",
          "de": "Cu wirkt in der Reaktion als Oxidationsmittel.",
          "fr": "Cu joue le rôle d'oxydant dans la réaction.",
          "ru": "Cu в реакции является окислителем.",
          "ar": "يعمل Cu في التفاعل عاملًا مؤكسدًا.",
          "zh": "Cu 在反应中作氧化剂。",
          "ku": "Cu di reaksiyonê de wek oksîdant tevdigere."
        },
        {
          "tr": "Azotun yükseltgenme basamağı +5'ten +4'e düşer.",
          "en": "The oxidation state of nitrogen falls from +5 to +4.",
          "de": "Die Oxidationszahl von Stickstoff sinkt von +5 auf +4.",
          "fr": "Le nombre d'oxydation de l'azote passe de +5 à +4.",
          "ru": "Степень окисления азота понижается с +5 до +4.",
          "ar": "ينخفض عدد تأكسد النيتروجين من +5 إلى +4.",
          "zh": "氮的氧化数从 +5 降到 +4。",
          "ku": "Hejmara oksîdasyonê ya azotê ji +5 dadikeve +4."
        },
        {
          "tr": "3 mol Cu tepkimeye girdiğinde toplam 3 mol elektron aktarılır.",
          "en": "When 3 mol of Cu react, a total of 3 mol of electrons is transferred.",
          "de": "Wenn 3 mol Cu reagieren, werden insgesamt 3 mol Elektronen übertragen.",
          "fr": "Quand 3 mol de Cu réagissent, 3 mol d'électrons au total sont transférées.",
          "ru": "При вступлении в реакцию 3 моль Cu переносится всего 3 моль электронов.",
          "ar": "عند تفاعل 3 mol من Cu ينتقل ما مجموعه 3 mol من الإلكترونات.",
          "zh": "3 mol Cu 反应时，共转移 3 mol 电子。",
          "ku": "Dema 3 mol Cu reaksiyon dide, bi tevahî 3 mol elektron tê veguhestin."
        },
        {
          "tr": "Kullanılan 8 mol HNO3'ün yalnızca 2 molü indirgenir; kalan 6 mol nitrat iyonu tuzun yapısına girer.",
          "en": "Of the 8 mol of HNO3 used, only 2 mol are reduced; the remaining 6 mol of nitrate ions end up in the salt.",
          "de": "Von den 8 mol HNO3 werden nur 2 mol reduziert; die übrigen 6 mol Nitrationen gehen in das Salz ein.",
          "fr": "Sur les 8 mol de HNO3 utilisées, seules 2 mol sont réduites ; les 6 mol d'ions nitrate restantes se retrouvent dans le sel.",
          "ru": "Из 8 моль HNO3 восстанавливаются только 2 моль; остальные 6 моль нитрат-ионов входят в состав соли.",
          "ar": "من بين 8 mol من HNO3 المستخدمة لا يُختزل سوى 2 mol؛ أما 6 mol المتبقية من أيونات النترات فتدخل في تركيب الملح.",
          "zh": "所用的 8 mol HNO3 中只有 2 mol 被还原；其余 6 mol 硝酸根进入盐中。",
          "ku": "Ji 8 mol HNO3 ya bikaranîn tenê 2 mol kêm dibe; 6 mol îyonên nîtratê yên mayî dikevin avahiya xwê."
        },
        {
          "tr": "H2O'daki oksijen atomları yükseltgenmiştir.",
          "en": "The oxygen atoms in H2O have been oxidized.",
          "de": "Die Sauerstoffatome in H2O wurden oxidiert.",
          "fr": "Les atomes d'oxygène de H2O ont été oxydés.",
          "ru": "Атомы кислорода в H2O окислены.",
          "ar": "تأكسدت ذرات الأكسجين في H2O.",
          "zh": "H2O 中的氧原子被氧化了。",
          "ku": "Atomên oksîjenê yên di H2O de oksîd bûne."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Cu: 0 → +2 (yükseltgenir, indirgendir); 3 Cu toplam 6 e- verir. NO'daki N: +5 → +2 (3 e- alır); 2 NO için 6 e- alınır, böylece elektron sayıları eşittir. 8 HNO3'teki 8 N atomunun yalnızca 2'si NO'ya dönüşür; 3Cu(NO3)2'deki 6 nitrat iyonunda N yine +5'tir, yani bu kısım indirgenmez. Azot +4'e değil +2'ye iner (+4, NO2 için geçerlidir); 3 mol Cu için aktarılan elektron 3 değil 6 moldür; O atomları her yerde -2 olduğundan yükseltgenmemiştir.",
        "en": "Cu: 0 → +2 (oxidized, so it is the reducing agent); 3 Cu give 6 e- in total. N in NO: +5 → +2 (gains 3 e-); 2 NO take 6 e-, so electrons balance. Of the 8 N atoms in 8 HNO3, only 2 become NO; in the 6 nitrate ions of 3Cu(NO3)2 nitrogen stays +5, so that part is not reduced. Nitrogen goes to +2, not +4 (+4 applies to NO2); 3 mol Cu transfer 6 mol electrons, not 3; O is -2 everywhere, so it is not oxidized.",
        "de": "Cu: 0 → +2 (wird oxidiert, ist also Reduktionsmittel); 3 Cu geben insgesamt 6 e- ab. N in NO: +5 → +2 (nimmt 3 e- auf); 2 NO nehmen 6 e- auf, die Elektronenbilanz stimmt. Von den 8 N-Atomen in 8 HNO3 werden nur 2 zu NO; in den 6 Nitrationen von 3Cu(NO3)2 bleibt N bei +5, dieser Teil wird nicht reduziert. Stickstoff geht auf +2, nicht auf +4 (+4 gilt für NO2); 3 mol Cu übertragen 6 mol Elektronen, nicht 3; O ist überall -2, wird also nicht oxidiert.",
        "fr": "Cu : 0 → +2 (oxydé, donc réducteur) ; 3 Cu cèdent 6 e- au total. N dans NO : +5 → +2 (gagne 3 e-) ; 2 NO captent 6 e-, les électrons s'équilibrent. Sur les 8 N de 8 HNO3, seuls 2 deviennent NO ; dans les 6 ions nitrate de 3Cu(NO3)2, N reste à +5, cette partie n'est pas réduite. L'azote passe à +2, pas à +4 (+4 correspond à NO2) ; 3 mol de Cu transfèrent 6 mol d'électrons, pas 3 ; O vaut -2 partout et n'est donc pas oxydé.",
        "ru": "Cu: 0 → +2 (окисляется, значит, восстановитель); 3 Cu отдают всего 6 e-. N в NO: +5 → +2 (принимает 3 e-); 2 NO принимают 6 e-, электронный баланс соблюдён. Из 8 атомов N в 8 HNO3 только 2 переходят в NO; в 6 нитрат-ионах 3Cu(NO3)2 азот остаётся +5, эта часть не восстанавливается. Азот переходит в +2, а не +4 (+4 — в NO2); 3 моль Cu переносят 6 моль электронов, а не 3; O везде -2, значит, не окисляется.",
        "ar": "Cu: 0 → +2 (يتأكسد فهو العامل المختزل)؛ وتفقد 3 ذرات Cu ما مجموعه 6 e-. النيتروجين في NO: +5 → +2 (يكتسب 3 e-)؛ وتكتسب 2 NO عدد 6 e- فتتوازن الإلكترونات. من بين ذرات N الثماني في 8 HNO3 تتحول ذرتان فقط إلى NO؛ أما أيونات النترات الست في 3Cu(NO3)2 فيبقى N فيها +5 ولا يُختزل. ينخفض النيتروجين إلى +2 لا إلى +4 (+4 تخص NO2)؛ و3 mol من Cu تنقل 6 mol من الإلكترونات لا 3؛ والأكسجين -2 في كل مكان فلم يتأكسد.",
        "zh": "Cu：0 → +2（被氧化，是还原剂）；3 个 Cu 共失去 6 e-。NO 中的 N：+5 → +2(得 3 e-)；2 个 NO 得 6 e-，电子守恒。8 HNO3 中的 8 个 N 原子只有 2 个变成 NO；3Cu(NO3)2 中 6 个硝酸根里的 N 仍为 +5，这部分未被还原。氮降到 +2 而不是 +4(+4 对应 NO2)；3 mol Cu 转移 6 mol 电子而不是 3 mol；O 处处为 -2，没有被氧化。",
        "ku": "Cu: 0 → +2 (oksîd dibe, ango reduktant e); 3 Cu bi tevahî 6 e- didin. N ya di NO de: +5 → +2 (3 e- distîne); 2 NO 6 e- distînin, elektron hevseng in. Ji 8 atomên N yên di 8 HNO3 de tenê 2 dibin NO; di 6 îyonên nîtratê yên 3Cu(NO3)2 de N +5 dimîne, ev beş kêm nabe. Azot dadikeve +2 ne +4 (+4 ji bo NO2 ye); 3 mol Cu 6 mol elektron vediguhezîne ne 3; O li her derê -2 ye, ji ber vê yekê oksîd nebûye."
      }
    },
    {
      "id": "u21-twin12",
      "stem": {
        "tr": "Zn(k) | Zn2+(1 M) || Ag+(1 M) | Ag(k) pili bir süre çalıştırıldığında Zn elektrodun kütlesi 6,5 g azalıyor.\nBu sürede Ag elektrodun kütlesi kaç gram artar? (Zn = 65, Ag = 108)",
        "en": "The cell Zn(s) | Zn2+(1 M) || Ag+(1 M) | Ag(s) is operated for some time and the mass of the Zn electrode decreases by 6.5 g.\nBy how many grams does the mass of the Ag electrode increase in this time? (Zn = 65, Ag = 108)",
        "de": "Die Zelle Zn(s) | Zn2+(1 M) || Ag+(1 M) | Ag(s) arbeitet eine Zeit lang; dabei nimmt die Masse der Zn-Elektrode um 6,5 g ab.\nUm wie viel Gramm nimmt die Masse der Ag-Elektrode in dieser Zeit zu? (Zn = 65, Ag = 108)",
        "fr": "La pile Zn(s) | Zn2+(1 M) || Ag+(1 M) | Ag(s) fonctionne un certain temps et la masse de l'électrode de Zn diminue de 6,5 g.\nDe combien de grammes la masse de l'électrode d'Ag augmente-t-elle pendant ce temps ? (Zn = 65, Ag = 108)",
        "ru": "Элемент Zn(тв) | Zn2+(1 M) || Ag+(1 M) | Ag(тв) проработал некоторое время, и масса цинкового электрода уменьшилась на 6,5 г.\nНа сколько граммов за это время увеличилась масса серебряного электрода? (Zn = 65, Ag = 108)",
        "ar": "شُغّلت الخلية Zn(ص) | Zn2+(1 M) || Ag+(1 M) | Ag(ص) مدةً فنقصت كتلة قطب Zn بمقدار 6.5 g.\nبكم غرامًا تزداد كتلة قطب Ag خلال هذه المدة؟ (Zn = 65، Ag = 108)",
        "zh": "电池 Zn(s) | Zn2+(1 M) || Ag+(1 M) | Ag(s) 工作一段时间后，Zn 电极质量减少 6.5 g。\n这段时间内 Ag 电极的质量增加多少克？(Zn = 65，Ag = 108)",
        "ku": "Pîla Zn(r) | Zn2+(1 M) || Ag+(1 M) | Ag(r) demekê dixebite û girseya elektroda Zn 6,5 g kêm dibe.\nDi vê demê de girseya elektroda Ag çend gram zêde dibe? (Zn = 65, Ag = 108)"
      },
      "options": [
        {
          "tr": "5,4",
          "en": "5.4",
          "de": "5,4",
          "fr": "5,4",
          "ru": "5,4",
          "ar": "5.4",
          "zh": "5.4",
          "ku": "5,4"
        },
        {
          "tr": "6,5",
          "en": "6.5",
          "de": "6,5",
          "fr": "6,5",
          "ru": "6,5",
          "ar": "6.5",
          "zh": "6.5",
          "ku": "6,5"
        },
        {
          "tr": "10,8",
          "en": "10.8",
          "de": "10,8",
          "fr": "10,8",
          "ru": "10,8",
          "ar": "10.8",
          "zh": "10.8",
          "ku": "10,8"
        },
        {
          "tr": "13,0",
          "en": "13.0",
          "de": "13,0",
          "fr": "13,0",
          "ru": "13,0",
          "ar": "13.0",
          "zh": "13.0",
          "ku": "13,0"
        },
        {
          "tr": "21,6",
          "en": "21.6",
          "de": "21,6",
          "fr": "21,6",
          "ru": "21,6",
          "ar": "21.6",
          "zh": "21.6",
          "ku": "21,6"
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Toplam tepkime: Zn + 2Ag+ → Zn2+ + 2Ag. Aşınan Zn: 6,5 / 65 = 0,1 mol; bu 0,2 mol elektron verir. 0,2 mol elektron 0,2 mol Ag+ iyonunu indirger: 0,2 · 108 = 21,6 g. 10,8 g, Zn ile Ag'yi 1:1 oranında almaktan (elektron sayısını eşitlememekten), 6,5 g ise kütlelerin eşit değişeceğini sanmaktan gelir.",
        "en": "Overall reaction: Zn + 2Ag+ → Zn2+ + 2Ag. Zn consumed: 6.5 / 65 = 0.1 mol, giving 0.2 mol of electrons. 0.2 mol of electrons reduce 0.2 mol of Ag+: 0.2 · 108 = 21.6 g. 10.8 g comes from taking Zn and Ag in a 1:1 ratio (not balancing electrons), and 6.5 g from assuming the masses change equally.",
        "de": "Gesamtreaktion: Zn + 2Ag+ → Zn2+ + 2Ag. Verbrauchtes Zn: 6,5 / 65 = 0,1 mol, das liefert 0,2 mol Elektronen. 0,2 mol Elektronen reduzieren 0,2 mol Ag+: 0,2 · 108 = 21,6 g. 10,8 g ergibt sich aus einem 1:1-Verhältnis von Zn und Ag (Elektronen nicht ausgeglichen), 6,5 g aus der Annahme gleicher Massenänderungen.",
        "fr": "Réaction globale : Zn + 2Ag+ → Zn2+ + 2Ag. Zn consommé : 6,5 / 65 = 0,1 mol, soit 0,2 mol d'électrons. 0,2 mol d'électrons réduisent 0,2 mol d'Ag+ : 0,2 · 108 = 21,6 g. 10,8 g provient d'un rapport 1:1 entre Zn et Ag (électrons non équilibrés), 6,5 g de l'idée que les masses varient autant.",
        "ru": "Суммарная реакция: Zn + 2Ag+ → Zn2+ + 2Ag. Израсходовано Zn: 6,5 / 65 = 0,1 моль, что даёт 0,2 моль электронов. 0,2 моль электронов восстанавливают 0,2 моль Ag+: 0,2 · 108 = 21,6 г. 10,8 г получается при соотношении Zn и Ag 1:1 (без баланса электронов), 6,5 г — если считать, что массы меняются одинаково.",
        "ar": "التفاعل الكلي: Zn + 2Ag+ → Zn2+ + 2Ag. الخارصين المستهلك: 6.5 / 65 = 0.1 mol، ويعطي 0.2 mol من الإلكترونات. تختزل 0.2 mol من الإلكترونات 0.2 mol من Ag+: 0.2 · 108 = 21.6 g. أما 10.8 g فتنتج عن أخذ Zn و Ag بنسبة 1:1 (دون موازنة الإلكترونات)، و6.5 g عن افتراض تساوي تغيّر الكتلتين.",
        "zh": "总反应：Zn + 2Ag+ → Zn2+ + 2Ag。消耗 Zn：6.5 / 65 = 0.1 mol，失去 0.2 mol 电子。0.2 mol 电子还原 0.2 mol Ag+：0.2 · 108 = 21.6 g。10.8 g 来自按 Zn 与 Ag 1:1 计算（未配平电子），6.5 g 来自误以为两极质量变化相等。",
        "ku": "Reaksiyona giştî: Zn + 2Ag+ → Zn2+ + 2Ag. Zn ya xwarî: 6,5 / 65 = 0,1 mol; ev 0,2 mol elektron dide. 0,2 mol elektron 0,2 mol Ag+ kêm dike: 0,2 · 108 = 21,6 g. 10,8 g ji girtina Zn û Ag bi rêjeya 1:1 (bêyî hevsengkirina elektronan), 6,5 g jî ji hesibandina ku girse bi qasî hev diguherin tê."
      }
    },
    {
      "id": "u21-twin13",
      "stem": {
        "tr": "Standart indirgenme potansiyelleri:\nF2/F-: +2,87 V; Cl2/Cl-: +1,36 V; Br2/Br-: +1,07 V; I2/I-: +0,54 V\nBuna göre standart koşullarda aşağıdaki tepkimelerden hangisi kendiliğinden (istemli) gerçekleşir?",
        "en": "Standard reduction potentials:\nF2/F-: +2.87 V; Cl2/Cl-: +1.36 V; Br2/Br-: +1.07 V; I2/I-: +0.54 V\nWhich of the following reactions is spontaneous under standard conditions?",
        "de": "Standardreduktionspotentiale:\nF2/F-: +2,87 V; Cl2/Cl-: +1,36 V; Br2/Br-: +1,07 V; I2/I-: +0,54 V\nWelche der folgenden Reaktionen läuft unter Standardbedingungen freiwillig ab?",
        "fr": "Potentiels standard de réduction :\nF2/F- : +2,87 V ; Cl2/Cl- : +1,36 V ; Br2/Br- : +1,07 V ; I2/I- : +0,54 V\nLaquelle des réactions suivantes est spontanée dans les conditions standard ?",
        "ru": "Стандартные потенциалы восстановления:\nF2/F-: +2,87 В; Cl2/Cl-: +1,36 В; Br2/Br-: +1,07 В; I2/I-: +0,54 В\nКакая из следующих реакций протекает самопроизвольно при стандартных условиях?",
        "ar": "جهود الاختزال القياسية:\nF2/F-: +2.87 V؛ Cl2/Cl-: +1.36 V؛ Br2/Br-: +1.07 V؛ I2/I-: +0.54 V\nأيّ التفاعلات الآتية يحدث تلقائيًا في الظروف القياسية؟",
        "zh": "标准还原电势：\nF2/F-：+2.87 V；Cl2/Cl-：+1.36 V；Br2/Br-：+1.07 V；I2/I-：+0.54 V\n标准条件下，下列哪个反应能自发进行？",
        "ku": "Potansiyelên reduksiyonê yên standard:\nF2/F-: +2,87 V; Cl2/Cl-: +1,36 V; Br2/Br-: +1,07 V; I2/I-: +0,54 V\nLi gorî vê, di şertên standard de kîjan ji van reaksiyonan xweber pêk tê?"
      },
      "options": [
        {
          "tr": "Cl2 + 2Br- → 2Cl- + Br2",
          "en": "Cl2 + 2Br- → 2Cl- + Br2",
          "de": "Cl2 + 2Br- → 2Cl- + Br2",
          "fr": "Cl2 + 2Br- → 2Cl- + Br2",
          "ru": "Cl2 + 2Br- → 2Cl- + Br2",
          "ar": "Cl2 + 2Br- → 2Cl- + Br2",
          "zh": "Cl2 + 2Br- → 2Cl- + Br2",
          "ku": "Cl2 + 2Br- → 2Cl- + Br2"
        },
        {
          "tr": "I2 + 2Cl- → 2I- + Cl2",
          "en": "I2 + 2Cl- → 2I- + Cl2",
          "de": "I2 + 2Cl- → 2I- + Cl2",
          "fr": "I2 + 2Cl- → 2I- + Cl2",
          "ru": "I2 + 2Cl- → 2I- + Cl2",
          "ar": "I2 + 2Cl- → 2I- + Cl2",
          "zh": "I2 + 2Cl- → 2I- + Cl2",
          "ku": "I2 + 2Cl- → 2I- + Cl2"
        },
        {
          "tr": "Br2 + 2F- → 2Br- + F2",
          "en": "Br2 + 2F- → 2Br- + F2",
          "de": "Br2 + 2F- → 2Br- + F2",
          "fr": "Br2 + 2F- → 2Br- + F2",
          "ru": "Br2 + 2F- → 2Br- + F2",
          "ar": "Br2 + 2F- → 2Br- + F2",
          "zh": "Br2 + 2F- → 2Br- + F2",
          "ku": "Br2 + 2F- → 2Br- + F2"
        },
        {
          "tr": "I2 + 2Br- → 2I- + Br2",
          "en": "I2 + 2Br- → 2I- + Br2",
          "de": "I2 + 2Br- → 2I- + Br2",
          "fr": "I2 + 2Br- → 2I- + Br2",
          "ru": "I2 + 2Br- → 2I- + Br2",
          "ar": "I2 + 2Br- → 2I- + Br2",
          "zh": "I2 + 2Br- → 2I- + Br2",
          "ku": "I2 + 2Br- → 2I- + Br2"
        },
        {
          "tr": "Br2 + 2Cl- → 2Br- + Cl2",
          "en": "Br2 + 2Cl- → 2Br- + Cl2",
          "de": "Br2 + 2Cl- → 2Br- + Cl2",
          "fr": "Br2 + 2Cl- → 2Br- + Cl2",
          "ru": "Br2 + 2Cl- → 2Br- + Cl2",
          "ar": "Br2 + 2Cl- → 2Br- + Cl2",
          "zh": "Br2 + 2Cl- → 2Br- + Cl2",
          "ku": "Br2 + 2Cl- → 2Br- + Cl2"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Bir halojen, indirgenme potansiyeli kendisinden küçük olan halojenürü yükseltger. Cl2 + 2Br- tepkimesinde E°pil = 1,36 - 1,07 = +0,29 V > 0 olduğundan tepkime istemlidir. Diğer tepkimelerde elektron alan halojenin potansiyeli, yükseltgenecek halojenürünkinden küçüktür: I2 + 2Cl- için 0,54 - 1,36 = -0,82 V, Br2 + 2F- için 1,07 - 2,87 = -1,80 V, I2 + 2Br- için 0,54 - 1,07 = -0,53 V, Br2 + 2Cl- için 1,07 - 1,36 = -0,29 V; hepsi istemsizdir.",
        "en": "A halogen oxidizes a halide whose reduction potential is lower than its own. For Cl2 + 2Br-, E°cell = 1.36 - 1.07 = +0.29 V > 0, so it is spontaneous. In the other reactions the halogen gaining electrons has a lower potential than the halide to be oxidized: I2 + 2Cl-: 0.54 - 1.36 = -0.82 V; Br2 + 2F-: 1.07 - 2.87 = -1.80 V; I2 + 2Br-: 0.54 - 1.07 = -0.53 V; Br2 + 2Cl-: 1.07 - 1.36 = -0.29 V; all non-spontaneous.",
        "de": "Ein Halogen oxidiert ein Halogenid, dessen Reduktionspotential kleiner ist als sein eigenes. Für Cl2 + 2Br- gilt E°Zelle = 1,36 - 1,07 = +0,29 V > 0, die Reaktion ist freiwillig. Bei den anderen hat das Elektronen aufnehmende Halogen ein kleineres Potential als das zu oxidierende Halogenid: I2 + 2Cl-: 0,54 - 1,36 = -0,82 V; Br2 + 2F-: 1,07 - 2,87 = -1,80 V; I2 + 2Br-: 0,54 - 1,07 = -0,53 V; Br2 + 2Cl-: 1,07 - 1,36 = -0,29 V; alle nicht freiwillig.",
        "fr": "Un halogène oxyde un halogénure dont le potentiel de réduction est inférieur au sien. Pour Cl2 + 2Br-, E°pile = 1,36 - 1,07 = +0,29 V > 0 : réaction spontanée. Dans les autres, l'halogène qui capte les électrons a un potentiel inférieur à celui de l'halogénure à oxyder : I2 + 2Cl- : 0,54 - 1,36 = -0,82 V ; Br2 + 2F- : 1,07 - 2,87 = -1,80 V ; I2 + 2Br- : 0,54 - 1,07 = -0,53 V ; Br2 + 2Cl- : 1,07 - 1,36 = -0,29 V ; toutes non spontanées.",
        "ru": "Галоген окисляет галогенид, у которого потенциал восстановления меньше, чем у него самого. Для Cl2 + 2Br- E°эл = 1,36 - 1,07 = +0,29 В > 0, реакция самопроизвольна. В остальных реакциях галоген, принимающий электроны, имеет меньший потенциал, чем окисляемый галогенид: I2 + 2Cl-: 0,54 - 1,36 = -0,82 В; Br2 + 2F-: 1,07 - 2,87 = -1,80 В; I2 + 2Br-: 0,54 - 1,07 = -0,53 В; Br2 + 2Cl-: 1,07 - 1,36 = -0,29 В; все несамопроизвольны.",
        "ar": "يؤكسد الهالوجين الهاليدَ الذي جهد اختزاله أقل من جهد اختزاله هو. في التفاعل Cl2 + 2Br- يكون E°خلية = 1.36 - 1.07 = +0.29 V > 0 فهو تلقائي. وفي التفاعلات الأخرى يكون جهد الهالوجين المكتسب للإلكترونات أقل من جهد الهاليد المراد أكسدته: I2 + 2Cl-: 0.54 - 1.36 = -0.82 V؛ Br2 + 2F-: 1.07 - 2.87 = -1.80 V؛ I2 + 2Br-: 0.54 - 1.07 = -0.53 V؛ Br2 + 2Cl-: 1.07 - 1.36 = -0.29 V؛ وكلها غير تلقائية.",
        "zh": "卤素单质能氧化还原电势比自身低的卤离子。Cl2 + 2Br- 的 E°电池 = 1.36 - 1.07 = +0.29 V > 0，自发进行。其他反应中得电子的卤素电势都低于被氧化的卤离子：I2 + 2Cl-：0.54 - 1.36 = -0.82 V；Br2 + 2F-：1.07 - 2.87 = -1.80 V；I2 + 2Br-：0.54 - 1.07 = -0.53 V；Br2 + 2Cl-：1.07 - 1.36 = -0.29 V；均非自发。",
        "ku": "Halojenek halojenîdeke ku potansiyela wê ya reduksiyonê ji ya wî biçûktir e oksîd dike. Ji bo Cl2 + 2Br- E°pîl = 1,36 - 1,07 = +0,29 V > 0 e, ji ber vê yekê xweber e. Di reaksiyonên din de potansiyela halojena ku elektronan distîne ji ya halojenîda ku dê oksîd bibe biçûktir e: I2 + 2Cl-: 0,54 - 1,36 = -0,82 V; Br2 + 2F-: 1,07 - 2,87 = -1,80 V; I2 + 2Br-: 0,54 - 1,07 = -0,53 V; Br2 + 2Cl-: 1,07 - 1,36 = -0,29 V; hemû ne xweber in."
      }
    },
    {
      "id": "u21-twin14",
      "stem": {
        "tr": "Fe(k) | Fe2+(1 M) || Pb2+(1 M) | Pb(k) pili kuruluyor. E°(Fe2+/Fe) = -0,44 V, E°(Pb2+/Pb) = -0,13 V'tur.\nBu pil ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        "en": "The cell Fe(s) | Fe2+(1 M) || Pb2+(1 M) | Pb(s) is set up. E°(Fe2+/Fe) = -0.44 V, E°(Pb2+/Pb) = -0.13 V.\nWhich of the following statements about this cell is false?",
        "de": "Die Zelle Fe(s) | Fe2+(1 M) || Pb2+(1 M) | Pb(s) wird aufgebaut. E°(Fe2+/Fe) = -0,44 V, E°(Pb2+/Pb) = -0,13 V.\nWelche der folgenden Aussagen über diese Zelle ist falsch?",
        "fr": "On réalise la pile Fe(s) | Fe2+(1 M) || Pb2+(1 M) | Pb(s). E°(Fe2+/Fe) = -0,44 V, E°(Pb2+/Pb) = -0,13 V.\nLaquelle des affirmations suivantes sur cette pile est fausse ?",
        "ru": "Собран элемент Fe(тв) | Fe2+(1 M) || Pb2+(1 M) | Pb(тв). E°(Fe2+/Fe) = -0,44 В, E°(Pb2+/Pb) = -0,13 В.\nКакое из утверждений об этом элементе неверно?",
        "ar": "تُركَّب الخلية Fe(ص) | Fe2+(1 M) || Pb2+(1 M) | Pb(ص)، حيث E°(Fe2+/Fe) = -0.44 V و E°(Pb2+/Pb) = -0.13 V.\nأيّ العبارات الآتية عن هذه الخلية خاطئة؟",
        "zh": "组装电池 Fe(s) | Fe2+(1 M) || Pb2+(1 M) | Pb(s)。E°(Fe2+/Fe) = -0.44 V，E°(Pb2+/Pb) = -0.13 V。\n关于该电池，下列说法错误的是哪一项？",
        "ku": "Pîla Fe(r) | Fe2+(1 M) || Pb2+(1 M) | Pb(r) tê sazkirin. E°(Fe2+/Fe) = -0,44 V, E°(Pb2+/Pb) = -0,13 V.\nDerbarê vê pîlê de kîjan ji van gotinan şaş e?"
      },
      "options": [
        {
          "tr": "Fe elektrot pilin negatif (-) kutbudur.",
          "en": "The Fe electrode is the negative (-) pole of the cell.",
          "de": "Die Fe-Elektrode ist der negative (-) Pol der Zelle.",
          "fr": "L'électrode de Fe est le pôle négatif (-) de la pile.",
          "ru": "Железный электрод — отрицательный (-) полюс элемента.",
          "ar": "قطب Fe هو القطب السالب (-) للخلية.",
          "zh": "Fe 电极是电池的负极（-）。",
          "ku": "Elektroda Fe pola neyînî (-) ya pîlê ye."
        },
        {
          "tr": "Standart pil potansiyeli 0,31 V'tur.",
          "en": "The standard cell potential is 0.31 V.",
          "de": "Das Standardzellpotential beträgt 0,31 V.",
          "fr": "Le potentiel standard de la pile est 0,31 V.",
          "ru": "Стандартный потенциал элемента равен 0,31 В.",
          "ar": "جهد الخلية القياسي 0.31 V.",
          "zh": "标准电池电势为 0.31 V。",
          "ku": "Potansiyela standard a pîlê 0,31 V e."
        },
        {
          "tr": "Tuz köprüsündeki katyonlar Fe2+ çözeltisinin bulunduğu kaba doğru göç eder.",
          "en": "Cations in the salt bridge migrate toward the compartment containing the Fe2+ solution.",
          "de": "Die Kationen der Salzbrücke wandern zum Gefäß mit der Fe2+-Lösung.",
          "fr": "Les cations du pont salin migrent vers le compartiment contenant la solution de Fe2+.",
          "ru": "Катионы солевого мостика мигрируют к сосуду с раствором Fe2+.",
          "ar": "تهاجر كاتيونات القنطرة الملحية نحو الوعاء الذي يحتوي على محلول Fe2+.",
          "zh": "盐桥中的阳离子向盛有 Fe2+ 溶液的容器迁移。",
          "ku": "Katyonên pira xwê ber bi firaxa ku çareseriya Fe2+ tê de ye koç dikin."
        },
        {
          "tr": "Pb elektrodun kütlesi zamanla artar.",
          "en": "The mass of the Pb electrode increases over time.",
          "de": "Die Masse der Pb-Elektrode nimmt mit der Zeit zu.",
          "fr": "La masse de l'électrode de Pb augmente avec le temps.",
          "ru": "Масса свинцового электрода со временем увеличивается.",
          "ar": "تزداد كتلة قطب Pb مع الزمن.",
          "zh": "Pb 电极的质量随时间增加。",
          "ku": "Girseya elektroda Pb bi demê re zêde dibe."
        },
        {
          "tr": "Pilde gerçekleşen net tepkime Fe + Pb2+ → Fe2+ + Pb şeklindedir.",
          "en": "The net reaction in the cell is Fe + Pb2+ → Fe2+ + Pb.",
          "de": "Die Nettoreaktion der Zelle lautet Fe + Pb2+ → Fe2+ + Pb.",
          "fr": "La réaction nette de la pile est Fe + Pb2+ → Fe2+ + Pb.",
          "ru": "Суммарная реакция в элементе: Fe + Pb2+ → Fe2+ + Pb.",
          "ar": "التفاعل الصافي في الخلية هو Fe + Pb2+ → Fe2+ + Pb.",
          "zh": "电池的净反应为 Fe + Pb2+ → Fe2+ + Pb。",
          "ku": "Reaksiyona net a pîlê Fe + Pb2+ → Fe2+ + Pb e."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Fe'nin indirgenme potansiyeli (-0,44 V) Pb'ninkinden (-0,13 V) küçük olduğundan Fe yükseltgenir: Fe anot, yani negatif kutup; Pb2+ indirgenir, Pb katottur. E°pil = 0,44 + (-0,13) = 0,31 V; net tepkime Fe + Pb2+ → Fe2+ + Pb'dir ve katotta Pb biriktiği için Pb elektrodun kütlesi artar. Yanlış olan ifade katyonlarla ilgilidir: Fe2+ kabı anot kabıdır, oraya pozitif yükü dengelemek için anyonlar gider; katyonlar Pb2+'nın harcandığı katot kabına göç eder.",
        "en": "Fe's reduction potential (-0.44 V) is lower than Pb's (-0.13 V), so Fe is oxidized: Fe is the anode, i.e. the negative pole; Pb2+ is reduced and Pb is the cathode. E°cell = 0.44 + (-0.13) = 0.31 V; the net reaction is Fe + Pb2+ → Fe2+ + Pb, and since Pb deposits at the cathode the Pb electrode gains mass. The false statement is the one about cations: the Fe2+ compartment is the anode compartment, where anions go to balance positive charge; cations migrate to the cathode compartment, where Pb2+ is consumed.",
        "de": "Das Reduktionspotential von Fe (-0,44 V) ist kleiner als das von Pb (-0,13 V), also wird Fe oxidiert: Fe ist die Anode, d. h. der Minuspol; Pb2+ wird reduziert, Pb ist die Kathode. E°Zelle = 0,44 + (-0,13) = 0,31 V; die Nettoreaktion ist Fe + Pb2+ → Fe2+ + Pb, und da sich Pb an der Kathode abscheidet, nimmt ihre Masse zu. Falsch ist die Aussage über die Kationen: Das Fe2+-Gefäß ist der Anodenraum, dorthin wandern zum Ladungsausgleich Anionen; Kationen wandern in den Kathodenraum, wo Pb2+ verbraucht wird.",
        "fr": "Le potentiel de réduction de Fe (-0,44 V) est inférieur à celui de Pb (-0,13 V) : Fe s'oxyde, c'est l'anode, donc le pôle négatif ; Pb2+ est réduit et Pb est la cathode. E°pile = 0,44 + (-0,13) = 0,31 V ; la réaction nette est Fe + Pb2+ → Fe2+ + Pb, et comme Pb se dépose à la cathode, la masse de l'électrode de Pb augmente. L'affirmation fausse est celle sur les cations : le compartiment de Fe2+ est le compartiment anodique, où vont les anions pour compenser la charge positive ; les cations migrent vers le compartiment cathodique, où Pb2+ est consommé.",
        "ru": "Потенциал восстановления Fe (-0,44 В) меньше, чем у Pb (-0,13 В), поэтому Fe окисляется: Fe — анод, то есть отрицательный полюс; Pb2+ восстанавливается, Pb — катод. E°эл = 0,44 + (-0,13) = 0,31 В; суммарная реакция Fe + Pb2+ → Fe2+ + Pb, и так как на катоде осаждается Pb, масса свинцового электрода растёт. Неверно утверждение о катионах: сосуд с Fe2+ — анодное пространство, туда для компенсации положительного заряда идут анионы; катионы мигрируют в катодное пространство, где расходуется Pb2+.",
        "ar": "جهد اختزال Fe (-0.44 V) أقل من جهد اختزال Pb (-0.13 V)، لذا يتأكسد Fe: فهو الأنود أي القطب السالب؛ ويُختزل Pb2+ ويكون Pb هو الكاثود. E°خلية = 0.44 + (-0.13) = 0.31 V، والتفاعل الصافي Fe + Pb2+ → Fe2+ + Pb، ولأن Pb يترسب عند الكاثود تزداد كتلة قطب Pb. العبارة الخاطئة هي المتعلقة بالكاتيونات: فوعاء Fe2+ هو وعاء الأنود وتتجه إليه الأنيونات لمعادلة الشحنة الموجبة، أما الكاتيونات فتهاجر إلى وعاء الكاثود حيث يُستهلك Pb2+.",
        "zh": "Fe 的还原电势(-0.44 V)低于 Pb(-0.13 V)，所以 Fe 被氧化，Fe 是负极；Pb2+ 被还原，Pb 是正极。E°电池 = 0.44 + (-0.13) = 0.31 V；净反应为 Fe + Pb2+ → Fe2+ + Pb，正极析出 Pb，Pb 电极质量增加。错误的是关于阳离子的说法：盛 Fe2+ 溶液的是负极区，为平衡正电荷向那里迁移的是阴离子；阳离子迁移到消耗 Pb2+ 的正极区。",
        "ku": "Potansiyela reduksiyonê ya Fe (-0,44 V) ji ya Pb (-0,13 V) biçûktir e, loma Fe oksîd dibe: Fe anod e, ango pola neyînî ye; Pb2+ kêm dibe û Pb katod e. E°pîl = 0,44 + (-0,13) = 0,31 V; reaksiyona net Fe + Pb2+ → Fe2+ + Pb e û ji ber ku Pb li katodê kom dibe girseya elektroda Pb zêde dibe. Gotina şaş ya derbarê katyonan de ye: firaxa Fe2+ aliyê anodê ye, ji bo hevsengkirina bara erênî anyon diçin wir; katyon koçî aliyê katodê dikin ku Pb2+ lê tê xerckirin."
      }
    },
    {
      "id": "u21-twin15",
      "stem": {
        "tr": "X(k) | X2+(1 M) || Cu2+(1 M) | Cu(k)\npilinde X elektrot anottur ve standart pil potansiyeli 1,24 V olarak ölçülüyor.\nE°(Cu2+/Cu) = +0,34 V olduğuna göre X2+/X yarı hücresinin standart indirgenme potansiyeli kaç volttur?",
        "en": "In the cell\nX(s) | X2+(1 M) || Cu2+(1 M) | Cu(s)\nthe X electrode is the anode and the standard cell potential is measured as 1.24 V.\nGiven E°(Cu2+/Cu) = +0.34 V, what is the standard reduction potential of the X2+/X half-cell in volts?",
        "de": "In der Zelle\nX(s) | X2+(1 M) || Cu2+(1 M) | Cu(s)\nist die X-Elektrode die Anode; das Standardzellpotential wird zu 1,24 V gemessen.\nMit E°(Cu2+/Cu) = +0,34 V: Wie groß ist das Standardreduktionspotential der Halbzelle X2+/X in Volt?",
        "fr": "Dans la pile\nX(s) | X2+(1 M) || Cu2+(1 M) | Cu(s)\nl'électrode X est l'anode et le potentiel standard mesuré est 1,24 V.\nSachant que E°(Cu2+/Cu) = +0,34 V, quel est le potentiel standard de réduction de la demi-pile X2+/X en volts ?",
        "ru": "В элементе\nX(тв) | X2+(1 M) || Cu2+(1 M) | Cu(тв)\nэлектрод X — анод, а стандартный потенциал элемента равен 1,24 В.\nПри E°(Cu2+/Cu) = +0,34 В чему равен стандартный потенциал восстановления полуэлемента X2+/X в вольтах?",
        "ar": "في الخلية\nX(ص) | X2+(1 M) || Cu2+(1 M) | Cu(ص)\nيكون القطب X هو الأنود، ويُقاس جهد الخلية القياسي فيكون 1.24 V.\nإذا كان E°(Cu2+/Cu) = +0.34 V، فما جهد الاختزال القياسي لنصف الخلية X2+/X بالفولت؟",
        "zh": "在电池\nX(s) | X2+(1 M) || Cu2+(1 M) | Cu(s)\n中，X 电极是负极，测得标准电池电势为 1.24 V。\n已知 E°(Cu2+/Cu) = +0.34 V，X2+/X 半电池的标准还原电势是多少伏？",
        "ku": "Di pîla\nX(r) | X2+(1 M) || Cu2+(1 M) | Cu(r)\nde elektroda X anod e û potansiyela standard a pîlê 1,24 V tê pîvan.\nHeke E°(Cu2+/Cu) = +0,34 V be, potansiyela reduksiyonê ya standard a nîvhucreya X2+/X çend volt e?"
      },
      "options": [
        {
          "tr": "-1,58",
          "en": "-1.58",
          "de": "-1,58",
          "fr": "-1,58",
          "ru": "-1,58",
          "ar": "-1.58",
          "zh": "-1.58",
          "ku": "-1,58"
        },
        {
          "tr": "-0,90",
          "en": "-0.90",
          "de": "-0,90",
          "fr": "-0,90",
          "ru": "-0,90",
          "ar": "-0.90",
          "zh": "-0.90",
          "ku": "-0,90"
        },
        {
          "tr": "+0,90",
          "en": "+0.90",
          "de": "+0,90",
          "fr": "+0,90",
          "ru": "+0,90",
          "ar": "+0.90",
          "zh": "+0.90",
          "ku": "+0,90"
        },
        {
          "tr": "+1,24",
          "en": "+1.24",
          "de": "+1,24",
          "fr": "+1,24",
          "ru": "+1,24",
          "ar": "+1.24",
          "zh": "+1.24",
          "ku": "+1,24"
        },
        {
          "tr": "+1,58",
          "en": "+1.58",
          "de": "+1,58",
          "fr": "+1,58",
          "ru": "+1,58",
          "ar": "+1.58",
          "zh": "+1.58",
          "ku": "+1,58"
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "E°pil = E°yüks(anot) + E°ind(katot) → 1,24 = E°yüks(X) + 0,34 → E°yüks(X) = +0,90 V. İndirgenme potansiyeli bunun ters işaretlisidir: E°(X2+/X) = -0,90 V. +0,90 V, yükseltgenme potansiyelini indirgenme potansiyeli sanmaktan; ±1,58 V ise bakırın potansiyelini çıkarmak yerine toplamaktan gelir. X anot olduğuna göre indirgenme potansiyeli bakırınkinden (+0,34 V) küçük olmalıdır; bu da sonucu doğrular.",
        "en": "E°cell = E°ox(anode) + E°red(cathode) → 1.24 = E°ox(X) + 0.34 → E°ox(X) = +0.90 V. The reduction potential has the opposite sign: E°(X2+/X) = -0.90 V. +0.90 V comes from taking the oxidation potential as the reduction potential, and ±1.58 V from adding copper's potential instead of subtracting it. Since X is the anode, its reduction potential must be lower than copper's (+0.34 V), which confirms the result.",
        "de": "E°Zelle = E°Ox(Anode) + E°Red(Kathode) → 1,24 = E°Ox(X) + 0,34 → E°Ox(X) = +0,90 V. Das Reduktionspotential hat das umgekehrte Vorzeichen: E°(X2+/X) = -0,90 V. +0,90 V entsteht, wenn man das Oxidationspotential für das Reduktionspotential hält, ±1,58 V, wenn man das Kupferpotential addiert statt subtrahiert. Da X die Anode ist, muss sein Reduktionspotential kleiner als das von Kupfer (+0,34 V) sein – das bestätigt das Ergebnis.",
        "fr": "E°pile = E°ox(anode) + E°réd(cathode) → 1,24 = E°ox(X) + 0,34 → E°ox(X) = +0,90 V. Le potentiel de réduction est de signe opposé : E°(X2+/X) = -0,90 V. +0,90 V vient de la confusion entre potentiel d'oxydation et de réduction, et ±1,58 V de l'addition du potentiel du cuivre au lieu de sa soustraction. Comme X est l'anode, son potentiel de réduction doit être inférieur à celui du cuivre (+0,34 V), ce qui confirme le résultat.",
        "ru": "E°эл = E°ок(анод) + E°восст(катод) → 1,24 = E°ок(X) + 0,34 → E°ок(X) = +0,90 В. Потенциал восстановления имеет противоположный знак: E°(X2+/X) = -0,90 В. +0,90 В получается, если принять потенциал окисления за потенциал восстановления, а ±1,58 В — если прибавить потенциал меди вместо вычитания. Поскольку X — анод, его потенциал восстановления должен быть меньше, чем у меди (+0,34 В), что подтверждает ответ.",
        "ar": "E°خلية = E°تأكسد(الأنود) + E°اختزال(الكاثود) → 1.24 = E°تأكسد(X) + 0.34 → E°تأكسد(X) = +0.90 V. وجهد الاختزال بالإشارة المعاكسة: E°(X2+/X) = -0.90 V. القيمة +0.90 V تنتج عن اعتبار جهد التأكسد جهدَ اختزال، و±1.58 V عن جمع جهد النحاس بدل طرحه. ولأن X هو الأنود فيجب أن يكون جهد اختزاله أقل من جهد النحاس (+0.34 V)، وهذا يؤكد النتيجة.",
        "zh": "E°电池 = E°氧化(负极) + E°还原(正极) → 1.24 = E°氧化(X) + 0.34 → E°氧化(X) = +0.90 V。还原电势符号相反：E°(X2+/X) = -0.90 V。+0.90 V 是把氧化电势当作还原电势，±1.58 V 是把铜的电势加上而不是减去。X 为负极，其还原电势必须低于铜(+0.34 V)，这也验证了结果。",
        "ku": "E°pîl = E°oks(anod) + E°red(katod) → 1,24 = E°oks(X) + 0,34 → E°oks(X) = +0,90 V. Potansiyela reduksiyonê bi nîşana berevajî ye: E°(X2+/X) = -0,90 V. +0,90 V ji hesibandina potansiyela oksîdasyonê wek ya reduksiyonê, ±1,58 V jî ji lêzêdekirina potansiyela sifir li şûna derxistinê tê. Ji ber ku X anod e, divê potansiyela wê ya reduksiyonê ji ya sifir (+0,34 V) biçûktir be; ev encamê piştrast dike."
      }
    },
    {
      "id": "u21-twin16",
      "stem": {
        "tr": "Zn(k) | Zn2+(1 M) || Cu2+(1 M) | Cu(k) pili kapalı devrede bir süre çalıştırılıyor.\nBu süre boyunca aşağıdaki niceliklerden hangisi artar?",
        "en": "The cell Zn(s) | Zn2+(1 M) || Cu2+(1 M) | Cu(s) is operated in a closed circuit for some time.\nWhich of the following quantities increases during this time?",
        "de": "Die Zelle Zn(s) | Zn2+(1 M) || Cu2+(1 M) | Cu(s) arbeitet eine Zeit lang im geschlossenen Stromkreis.\nWelche der folgenden Größen nimmt in dieser Zeit zu?",
        "fr": "La pile Zn(s) | Zn2+(1 M) || Cu2+(1 M) | Cu(s) fonctionne un certain temps en circuit fermé.\nLaquelle des grandeurs suivantes augmente pendant ce temps ?",
        "ru": "Элемент Zn(тв) | Zn2+(1 M) || Cu2+(1 M) | Cu(тв) работает некоторое время в замкнутой цепи.\nКакая из следующих величин за это время увеличивается?",
        "ar": "تعمل الخلية Zn(ص) | Zn2+(1 M) || Cu2+(1 M) | Cu(ص) مدةً في دائرة مغلقة.\nأيّ الكميات الآتية تزداد خلال هذه المدة؟",
        "zh": "电池 Zn(s) | Zn2+(1 M) || Cu2+(1 M) | Cu(s) 在闭合电路中工作一段时间。\n在此期间，下列哪个量增大？",
        "ku": "Pîla Zn(r) | Zn2+(1 M) || Cu2+(1 M) | Cu(r) di çerxa girtî de demekê dixebite.\nDi vê demê de kîjan ji van mîqdaran zêde dibe?"
      },
      "options": [
        {
          "tr": "Pilin ölçülen gerilimi",
          "en": "The measured voltage of the cell",
          "de": "Die gemessene Spannung der Zelle",
          "fr": "La tension mesurée de la pile",
          "ru": "Измеряемое напряжение элемента",
          "ar": "الجهد المقيس للخلية",
          "zh": "电池的实测电压",
          "ku": "Voltaja pîvayî ya pîlê"
        },
        {
          "tr": "Katot kabındaki Cu2+ derişimi",
          "en": "The Cu2+ concentration in the cathode compartment",
          "de": "Die Cu2+-Konzentration im Kathodenraum",
          "fr": "La concentration de Cu2+ dans le compartiment cathodique",
          "ru": "Концентрация Cu2+ в катодном пространстве",
          "ar": "تركيز Cu2+ في وعاء الكاثود",
          "zh": "正极区 Cu2+ 的浓度",
          "ku": "Tîrbûna Cu2+ li aliyê katodê"
        },
        {
          "tr": "Zn elektrodun kütlesi",
          "en": "The mass of the Zn electrode",
          "de": "Die Masse der Zn-Elektrode",
          "fr": "La masse de l'électrode de Zn",
          "ru": "Масса цинкового электрода",
          "ar": "كتلة قطب Zn",
          "zh": "Zn 电极的质量",
          "ku": "Girseya elektroda Zn"
        },
        {
          "tr": "Anot kabındaki Zn2+ derişimi",
          "en": "The Zn2+ concentration in the anode compartment",
          "de": "Die Zn2+-Konzentration im Anodenraum",
          "fr": "La concentration de Zn2+ dans le compartiment anodique",
          "ru": "Концентрация Zn2+ в анодном пространстве",
          "ar": "تركيز Zn2+ في وعاء الأنود",
          "zh": "负极区 Zn2+ 的浓度",
          "ku": "Tîrbûna Zn2+ li aliyê anodê"
        },
        {
          "tr": "Pilin standart pil potansiyeli (E°pil)",
          "en": "The standard cell potential (E°cell)",
          "de": "Das Standardzellpotential (E°Zelle)",
          "fr": "Le potentiel standard de la pile (E°pile)",
          "ru": "Стандартный потенциал элемента (E°эл)",
          "ar": "جهد الخلية القياسي (E°خلية)",
          "zh": "标准电池电势(E°电池)",
          "ku": "Potansiyela standard a pîlê (E°pîl)"
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Pil çalışırken anotta Zn → Zn2+ + 2e- olduğundan Zn elektrot aşınır ve anot kabındaki Zn2+ derişimi artar. Katotta Cu2+ + 2e- → Cu ile Cu2+ derişimi azalır. Ürün derişimi artıp giren derişimi azaldığı için ölçülen gerilim zamanla düşer. E°pil standart koşullara ait sabit bir değerdir; pilin çalışmasıyla değişmez.",
        "en": "During operation Zn → Zn2+ + 2e- occurs at the anode, so the Zn electrode wears away and the Zn2+ concentration in the anode compartment increases. At the cathode Cu2+ + 2e- → Cu lowers the Cu2+ concentration. As product concentration rises and reactant concentration falls, the measured voltage decreases over time. E°cell is a fixed value for standard conditions and does not change as the cell runs.",
        "de": "Während des Betriebs läuft an der Anode Zn → Zn2+ + 2e- ab; die Zn-Elektrode löst sich auf und die Zn2+-Konzentration im Anodenraum steigt. An der Kathode senkt Cu2+ + 2e- → Cu die Cu2+-Konzentration. Da die Produktkonzentration steigt und die Eduktkonzentration sinkt, fällt die gemessene Spannung mit der Zeit. E°Zelle ist ein fester Wert für Standardbedingungen und ändert sich im Betrieb nicht.",
        "fr": "Pendant le fonctionnement, Zn → Zn2+ + 2e- se produit à l'anode : l'électrode de Zn s'use et la concentration de Zn2+ côté anode augmente. À la cathode, Cu2+ + 2e- → Cu diminue la concentration de Cu2+. Comme la concentration du produit augmente et celle du réactif diminue, la tension mesurée baisse avec le temps. E°pile est une valeur fixe pour les conditions standard et ne change pas au cours du fonctionnement.",
        "ru": "При работе на аноде идёт Zn → Zn2+ + 2e-, поэтому цинковый электрод растворяется, а концентрация Zn2+ в анодном пространстве растёт. На катоде реакция Cu2+ + 2e- → Cu снижает концентрацию Cu2+. Так как концентрация продукта растёт, а реагента падает, измеряемое напряжение со временем уменьшается. E°эл — постоянная величина для стандартных условий и при работе не меняется.",
        "ar": "أثناء عمل الخلية يحدث عند الأنود Zn → Zn2+ + 2e-، فيتآكل قطب Zn ويزداد تركيز Zn2+ في وعاء الأنود. وعند الكاثود يخفض التفاعل Cu2+ + 2e- → Cu تركيز Cu2+. ولأن تركيز الناتج يزداد وتركيز المتفاعل يقل فإن الجهد المقيس ينخفض مع الزمن. أما E°خلية فقيمة ثابتة خاصة بالظروف القياسية ولا تتغير بعمل الخلية.",
        "zh": "工作时负极发生 Zn → Zn2+ + 2e-，Zn 电极被消耗，负极区 Zn2+ 浓度增大。正极上 Cu2+ + 2e- → Cu 使 Cu2+ 浓度减小。生成物浓度增大、反应物浓度减小，实测电压随时间下降。E°电池 是对应标准条件的定值，不随电池工作而改变。",
        "ku": "Dema pîl dixebite li anodê Zn → Zn2+ + 2e- pêk tê, loma elektroda Zn dixwe û tîrbûna Zn2+ li aliyê anodê zêde dibe. Li katodê bi Cu2+ + 2e- → Cu tîrbûna Cu2+ kêm dibe. Ji ber ku tîrbûna berhemê zêde dibe û ya têketiyê kêm dibe, voltaja pîvayî bi demê re dadikeve. E°pîl nirxeke sabît a şertên standard e û bi xebata pîlê naguhere."
      }
    }
  ]
};

export default unit21;
