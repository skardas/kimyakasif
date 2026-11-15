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
    "tr": "Yükseltgenme Basamağı, Daniell Pili ve Nernst Eşitliği",
    "en": "Oxidation States, Daniell Cell & Nernst Equation",
    "de": "Oxidationszahlen, Daniell-Element und Nernst-Gleichung",
    "fr": "Nombres d'oxydation, pile Daniell et équation de Nernst",
    "ru": "Степени окисления, элемент Даниэля и уравнение Нернста",
    "ar": "أعداد التأكسد، خلية دانيال ومعادلة نيرنست",
    "zh": "氧化数、丹尼尔电池与能斯特方程",
    "ku": "Hejmarên Oksîdasyonê, Pîla Daniell û Hevkêşeya Nernst"
  },
  "facts": [
    {
      "id": "u21-f01",
      "fact": {
        "tr": "Redoks tepkimelerinde elektron veren madde yükseltgenir (indirgendir); elektron alan madde indirgenir (yükseltgendir).",
        "en": "In redox reactions, the substance that loses electrons is oxidized (it is the reducing agent); the substance that gains electrons is reduced (it is the oxidizing agent).",
        "de": "Bei Redoxreaktionen wird der Stoff, der Elektronen abgibt, oxidiert (er ist das Reduktionsmittel); der Stoff, der Elektronen aufnimmt, wird reduziert (er ist das Oxidationsmittel).",
        "fr": "Dans les réactions redox, l'espèce qui cède des électrons est oxydée (c'est le réducteur) ; l'espèce qui capte des électrons est réduite (c'est l'oxydant).",
        "ru": "В окислительно-восстановительных реакциях вещество, отдающее электроны, окисляется (является восстановителем); вещество, принимающее электроны, восстанавливается (является окислителем).",
        "ar": "في تفاعلات الأكسدة والاختزال، المادة التي تفقد الإلكترونات تتأكسد (وهي العامل المختزل)؛ والمادة التي تكتسب الإلكترونات تُختزل (وهي العامل المؤكسد).",
        "zh": "在氧化还原反应中，失去电子的物质被氧化（是还原剂）；得到电子的物质被还原（是氧化剂）。",
        "ku": "Di reaksiyonên redoksê de, madeya ku elektronan dide oksîd dibe (ew reduktant e); madeya ku elektronan distîne kêm dibe (ew oksîdant e)."
      },
      "trap": {
        "tr": "Elektron alan madde yükseltgenmiştir.",
        "en": "The substance that receives electrons is oxidized.",
        "de": "Die Substanz, die Elektronen aufnimmt, wird oxidiert.",
        "fr": "La substance qui reçoit les électrons est oxydée.",
        "ru": "Вещество, получившее электроны, окисляется.",
        "ar": "تتأكسد المادة التي تستقبل الإلكترونات.",
        "zh": "接受电子的物质被氧化。",
        "ku": "Madeya ku elektronan distîne tê oksîdan."
      }
    },
    {
      "id": "u21-f02",
      "fact": {
        "tr": "Galvanik pilde ANOTTA daima YÜKSELTGENME, KATOTTA daima İNDİRGENME gerçekleşir (kısaca: Anot–Yükseltgenme, Katot–İndirgenme).",
        "en": "In a galvanic cell, OXIDATION always occurs at the ANODE and REDUCTION always occurs at the CATHODE (in short: Anode–Oxidation, Cathode–Reduction).",
        "de": "In einer galvanischen Zelle findet an der ANODE stets die OXIDATION und an der KATHODE stets die REDUKTION statt (kurz: Anode–Oxidation, Kathode–Reduktion).",
        "fr": "Dans une pile galvanique, l'OXYDATION a toujours lieu à l'ANODE et la RÉDUCTION toujours à la CATHODE (en bref : Anode–Oxydation, Cathode–Réduction).",
        "ru": "В гальваническом элементе на АНОДЕ всегда происходит ОКИСЛЕНИЕ, а на КАТОДЕ всегда ВОССТАНОВЛЕНИЕ (кратко: анод – окисление, катод – восстановление).",
        "ar": "في الخلية الجلفانية تحدث الأكسدة دائمًا عند الأنود ويحدث الاختزال دائمًا عند الكاثود (باختصار: أنود–أكسدة، كاثود–اختزال).",
        "zh": "在原电池中，阳极（负极）总是发生氧化反应，阴极（正极）总是发生还原反应（简记：阳极—氧化，阴极—还原）。",
        "ku": "Di pîla galvanîk de li ANODÊ her tim OKSÎDASYON, li KATODÊ her tim REDUKSIYON pêk tê (bi kurtî: Anod–Oksîdasyon, Katod–Reduksiyon)."
      },
      "trap": {
        "tr": "Anotta indirgenme gerçekleşir.",
        "en": "Reduction takes place at the anode.",
        "de": "An der Anode findet die Reduktion statt.",
        "fr": "La réduction a lieu à l'anode.",
        "ru": "Восстановление происходит на аноде.",
        "ar": "يحدث الاختزال عند الأنود.",
        "zh": "还原发生在阳极。",
        "ku": "Reduksiyon li anodê pêk tê."
      }
    },
    {
      "id": "u21-f03",
      "fact": {
        "tr": "Tuz köprüsündeki ANYONLAR ANODA, KATYONLAR KATODA göç ederek yük denkliğini sağlar.",
        "en": "ANIONS in the salt bridge migrate to the ANODE and CATIONS to the CATHODE, maintaining charge balance.",
        "de": "ANIONEN in der Salzbrücke wandern zur ANODE und KATIONEN wandern zur KATHODE und sorgen für den Ladungsausgleich.",
        "fr": "Les ANIONS du pont salin migrent vers l'ANODE et les CATIONS vers la CATHODE, ce qui assure l'équilibre des charges.",
        "ru": "АНИОНЫ в солевом мостике мигрируют к АНОДУ, а КАТИОНЫ мигрируют к КАТОДУ и обеспечивают баланс заряда.",
        "ar": "تهاجر الأنيونات في القنطرة الملحية نحو الأنود والكاتيونات نحو الكاثود فتحافظ على توازن الشحنات.",
        "zh": "盐桥中的阴离子迁移到阳极，阳离子迁移到阴极并确保电荷平衡。",
        "ku": "ANYONÊN di pira xwê de ber bi ANODÊ, KATYON jî ber bi KATODÊ ve koç dikin û hevsengiya barê diparêzin."
      },
      "trap": {
        "tr": "Tuz köprüsündeki anyonlar katoda gider.",
        "en": "Anions in the salt bridge go to the cathode.",
        "de": "Anionen in der Salzbrücke gelangen zur Kathode.",
        "fr": "Les anions du pont salin vont à la cathode.",
        "ru": "Анионы в солевом мостике идут к катоду.",
        "ar": "تذهب الأنيونات الموجودة في جسر الملح إلى الكاثود.",
        "zh": "盐桥中的阴离子到达阴极。",
        "ku": "Anyonên di pira xwê de diçin katodê."
      }
    },
    {
      "id": "u21-f04",
      "fact": {
        "tr": "Standart pil potansiyeli: E°pil = E°yüks(anot) + E°ind(katot) tur; E°pil > 0 ise tepkime istemlidir.",
        "en": "Standard cell potential: E°cell = E°ox(anode) + E°red(cathode); if E°cell > 0, the reaction is spontaneous.",
        "de": "Standardzellpotential: E°Zelle = E°Ox(Anode) + E°Red(Kathode); ist E°Zelle > 0, verläuft die Reaktion freiwillig (spontan).",
        "fr": "Potentiel standard de pile : E°pile = E°ox(anode) + E°réd(cathode) ; si E°pile > 0, la réaction est spontanée.",
        "ru": "Стандартный потенциал элемента: E°эл = E°ок(анод) + E°восст(катод); если E°эл > 0, реакция протекает самопроизвольно.",
        "ar": "جهد الخلية القياسي: E°خلية = E°تأكسد(الأنود) + E°اختزال(الكاثود)؛ إذا كان E°خلية > 0 فالتفاعل تلقائي.",
        "zh": "标准电池电势：E°电池 = E°氧化(阳极) + E°还原(阴极)；若 E°电池 > 0，则反应自发进行。",
        "ku": "Potansiyela standard a pîlê: E°pîl = E°oks(anod) + E°red(katod); heke E°pîl > 0 be, reaksiyon xweber e."
      },
      "trap": {
        "tr": "E°pil negatif olduğunda pil kendiliğinden çalışır ve elektrik üretir.",
        "en": "When E°cell is negative, the cell works by itself and produces electricity.",
        "de": "Wenn E°Zelle negativ ist, arbeitet die Zelle von selbst und erzeugt elektrischen Strom.",
        "fr": "Lorsque E°pile est négatif, la pile fonctionne d'elle-même et produit de l'électricité.",
        "ru": "Когда E°эл отрицателен, элемент работает самопроизвольно и вырабатывает электричество.",
        "ar": "عندما يكون E°خلية سالبًا تعمل الخلية تلقائيًا وتنتج الكهرباء.",
        "zh": "当 E°电池 为负值时，电池能自发工作并产生电能。",
        "ku": "Dema E°pîl neyînî be, pîl bi xwe dixebite û elektrîkê çêdike."
      }
    },
    {
      "id": "u21-f05",
      "fact": {
        "tr": "Standart Hidrojen Elektrodu (SHE): 25 °C, 1 atm H2 gazı ve 1 M H+ çözeltisi içerir; potansiyeli 0,00 V kabul edilir.",
        "en": "Standard Hydrogen Electrode (SHE): 25 °C, contains 1 atm H2 gas and 1 M H+ solution; potential is accepted as 0.00 V.",
        "de": "Standard-Wasserstoffelektrode (SHE): 25 °C, enthält 1 atm H2-Gas und 1 M H+-Lösung; Das Potential wird mit 0,00 V angenommen.",
        "fr": "Électrode à hydrogène standard (SHE) : 25 °C, contient 1 atm de gaz H2 et 1 M de solution H+ ; le potentiel est accepté comme 0,00 V.",
        "ru": "Стандартный водородный электрод (SHE): 25 °C, содержит 1 атм газа H2 и 1 M раствор H+; потенциал принимается равным 0,00 В.",
        "ar": "قطب الهيدروجين القياسي (SHE): عند 25 °C يحتوي على غاز H2 تحت ضغط 1 atm ومحلول H+ تركيزه 1 M؛ ويُعتبر جهده 0.00 V.",
        "zh": "标准氢电极（SHE）：25℃，含有1atm H2气体和1M H+溶液；电位接受为 0.00 V。",
        "ku": "Elektroda Hîdrojenê ya Standard (SHE): li 25 °C gaza H2 ya 1 atm û çareseriya H+ ya 1 M dihewîne; potansiyela wê 0,00 V tê qebûlkirin."
      },
      "trap": {
        "tr": "Standart hidrojen elektrodunun gerilimi 1,00 V tur.",
        "en": "The voltage of the standard hydrogen electrode is 1.00 V.",
        "de": "Die Spannung der Standard-Wasserstoffelektrode beträgt 1,00 V.",
        "fr": "La tension de l'électrode à hydrogène standard est de 1,00 V.",
        "ru": "Напряжение стандартного водородного электрода составляет 1,00 В.",
        "ar": "جهد قطب الهيدروجين القياسي هو 1.00 V.",
        "zh": "标准氢电极的电压为1.00V。",
        "ku": "Voltaja elektroda hîdrojenê ya standard 1,00 V e."
      }
    },
    {
      "id": "u21-f06",
      "fact": {
        "tr": "Aktifliği büyük olan metal anottur (yükseltgenme potansiyeli büyük olan metal anot olur).",
        "en": "The metal with greater activity is the anode (the metal with greater oxidation potential becomes the anode).",
        "de": "Das Metall mit der größeren Aktivität ist die Anode (das Metall mit dem größeren Oxidationspotential wird zur Anode).",
        "fr": "Le métal ayant la plus grande activité est l'anode (le métal ayant le plus grand potentiel d'oxydation devient l'anode).",
        "ru": "Металл с большей активностью является анодом (анодом становится металл с большим окислительным потенциалом).",
        "ar": "الفلز الأكثر نشاطًا هو الأنود (الفلز ذو جهد التأكسد الأكبر يكون الأنود).",
        "zh": "活性较大的金属是阳极（氧化电位较大的金属成为阳极）。",
        "ku": "Metala çalaktir anod e (metala ku potansiyela wê ya oksîdasyonê mezintir e dibe anod)."
      },
      "trap": {
        "tr": "İndirgenme potansiyeli büyük olan metal anot kutbudur.",
        "en": "The metal with the greater reduction potential is the anode.",
        "de": "Das Metall mit dem größeren Reduktionspotential ist die Anode.",
        "fr": "Le métal ayant le plus grand potentiel de réduction est l'anode.",
        "ru": "Металл с большим потенциалом восстановления является анодом.",
        "ar": "الفلز ذو جهد الاختزال الأكبر هو الأنود.",
        "zh": "还原电势较大的金属是阳极。",
        "ku": "Metala ku potansiyela wê ya reduksiyonê mezintir e anod e."
      }
    },
    {
      "id": "u21-f07",
      "fact": {
        "tr": "Pil çalıştıkça anot elektrot kütlesi genellikle aşınarak azalır; katot elektrot üzerinde madde toplanır kütlesi artar.",
        "en": "As the cell operates, the mass of the anode electrode usually decreases as it is consumed; substance deposits on the cathode electrode and its mass increases.",
        "de": "Während die Zelle arbeitet, nimmt die Masse der Anode meist ab, da sie sich auflöst; an der Kathode scheidet sich Stoff ab und ihre Masse nimmt zu.",
        "fr": "Pendant le fonctionnement de la pile, la masse de l'anode diminue généralement car elle se dissout ; de la matière se dépose sur la cathode, dont la masse augmente.",
        "ru": "При работе элемента масса анода обычно уменьшается, так как он растворяется; на катоде осаждается вещество, и его масса увеличивается.",
        "ar": "أثناء عمل الخلية تنقص كتلة قطب الأنود عادةً لأنه يتآكل، وتترسب المادة على قطب الكاثود فتزداد كتلته.",
        "zh": "电池工作时，阳极因溶解而质量通常减小；物质在阴极上沉积，阴极质量增加。",
        "ku": "Dema pîl dixebite, girseya anodê bi gelemperî kêm dibe ji ber ku dihele; li ser katodê made kom dibe û girseya wê zêde dibe."
      },
      "trap": {
        "tr": "Pil çalıştıkça anot elektrotun kütlesi katlanır.",
        "en": "As the cell operates, the mass of the anode electrode increases.",
        "de": "Während die Zelle arbeitet, nimmt die Masse der Anode zu.",
        "fr": "Pendant le fonctionnement de la pile, la masse de l'anode augmente.",
        "ru": "При работе элемента масса анода увеличивается.",
        "ar": "أثناء عمل الخلية تزداد كتلة قطب الأنود.",
        "zh": "电池工作时，阳极质量增加。",
        "ku": "Dema pîl dixebite, girseya anodê zêde dibe."
      }
    },
    {
      "id": "u21-f08",
      "fact": {
        "tr": "Anot yarı hücresine saf su eklenirse anot iyon derişimi azalır, denge ürünlere kayar ve pil potansiyeli artar.",
        "en": "If pure water is added to the anode half cell, the anode ion concentration decreases, the balance shifts to products and the battery potential increases.",
        "de": "Fügt man der Anodenhalbzelle reines Wasser hinzu, sinkt die Anodenionenkonzentration, das Gleichgewicht verschiebt sich zu Produkten und das Batteriepotential steigt.",
        "fr": "Si de l'eau pure est ajoutée à la demi-cellule de l'anode, la concentration en ions de l'anode diminue, l'équilibre se déplace vers les produits et le potentiel de la batterie augmente.",
        "ru": "Если в анодную полуячейку добавить чистую воду, концентрация анодных ионов уменьшится, баланс сместится в сторону продуктов и потенциал батареи увеличится.",
        "ar": "إذا تمت إضافة الماء النقي إلى نصف خلية الأنود، ينخفض ​​تركيز أيون الأنود، ويتحول التوازن إلى المنتجات وتزداد إمكانات البطارية.",
        "zh": "如果将纯水添加到阳极半电池中，则阳极离子浓度降低，平衡转向产物并且电池电势增加。",
        "ku": "Ger ava paqij li nîv şaneya anodê were zêdekirin, kombûna îyona anodê kêm dibe, hevseng diguhezîne hilberan û potansiyela pîlê zêde dibe."
      },
      "trap": {
        "tr": "Anot çözeltisine su eklendiğinde pil gerilimi düşer.",
        "en": "When water is added to the anode solution, the battery voltage decreases.",
        "de": "Wenn der Anodenlösung Wasser zugesetzt wird, sinkt die Batteriespannung.",
        "fr": "Lorsque de l'eau est ajoutée à la solution anodique, la tension de la batterie diminue.",
        "ru": "При добавлении воды в анодный раствор напряжение батареи снижается.",
        "ar": "عند إضافة الماء إلى محلول الأنود، ينخفض ​​جهد البطارية.",
        "zh": "当阳极溶液中添加水时，电池电压会降低。",
        "ku": "Dema ku av li çareseriya anodê tê zêdekirin, voltaja pîlê kêm dibe."
      }
    },
    {
      "id": "u21-f09",
      "fact": {
        "tr": "Katot yarı hücresine saf su eklenirse katot iyon derişimi azalır, denge girenlere kayar ve pil potansiyeli azalır.",
        "en": "If pure water is added to the cathode half cell, the cathode ion concentration decreases, the balance shifts to the reactants and the battery potential decreases.",
        "de": "Fügt man der Kathodenhalbzelle reines Wasser hinzu, sinkt die Kathodenionenkonzentration, das Gleichgewicht verschiebt sich zu den Reaktanten und das Batteriepotential sinkt.",
        "fr": "Si de l'eau pure est ajoutée à la demi-cellule cathodique, la concentration en ions cathodiques diminue, l'équilibre se déplace vers les réactifs et le potentiel de la batterie diminue.",
        "ru": "Если в катодную полуячейку добавить чистую воду, концентрация катодных ионов уменьшится, баланс сместится в сторону реагентов и потенциал батареи уменьшится.",
        "ar": "إذا تمت إضافة الماء النقي إلى نصف خلية الكاثود، ينخفض ​​تركيز أيون الكاثود، وينتقل التوازن إلى المواد المتفاعلة، وتنخفض إمكانات البطارية.",
        "zh": "如果向阴极半电池添加纯水，则阴极离子浓度降低，平衡转向反应物，电池电势降低。",
        "ku": "Ger ava paqij li nîv şaneya katodê were zêdekirin, kombûna îyona katodê kêm dibe, hevseng ber bi reaktantan ve diçe û potansiyela pîlê kêm dibe."
      },
      "trap": {
        "tr": "Katot çözeltisine su eklendiğinde pil gerilimi yükselir.",
        "en": "When water is added to the cathode solution, the battery voltage increases.",
        "de": "Wenn der Kathodenlösung Wasser zugesetzt wird, erhöht sich die Batteriespannung.",
        "fr": "Lorsque de l'eau est ajoutée à la solution cathodique, la tension de la batterie augmente.",
        "ru": "При добавлении воды в катодный раствор напряжение батареи увеличивается.",
        "ar": "عند إضافة الماء إلى محلول الكاثود، يزداد جهد البطارية.",
        "zh": "当阴极溶液中添加水时，电池电压增加。",
        "ku": "Dema ku av li çareseriya katodê tê zêdekirin, voltaja pîlê zêde dibe."
      }
    },
    {
      "id": "u21-f10",
      "fact": {
        "tr": "Nernst Eşitliği: Epil = E°pil - (0,0592 / n) * log Q dur (n: aktarılan elektron mol sayısı, Q: anot/katot derişim oranı).",
        "en": "Nernst Equation: Epil = E°pil - (0.0592 / n) * log Q (n: number of electron moles transferred, Q: anode/cathode concentration ratio).",
        "de": "Nernst-Gleichung: Epil = E°pil - (0,0592 / n) * log Q (n: Anzahl der übertragenen Elektronenmole, Q: Konzentrationsverhältnis Anode/Kathode).",
        "fr": "Equation de Nernst : Epil = E°pil - (0,0592 / n) * log Q (n : nombre de moles électroniques transférées, Q : rapport de concentration anode/cathode).",
        "ru": "Уравнение Нернста: Epil = E°pil - (0,0592/n) * log Q (n: количество перенесенных молей электронов, Q: соотношение концентраций анода/катода).",
        "ar": "معادلة نرنست: Epil = E°pil - (0.0592 / n) * log Q (n: عدد مولات الإلكترون المنقولة، Q: نسبة تركيز الأنود/الكاثود).",
        "zh": "能斯特方程：Epil = E°pil - (0.0592 / n) * log Q（n：转移的电子摩尔数，Q：阳极/阴极浓度比）。",
        "ku": "Wekheviya Nernst: Epil = E°pil - (0,0592 / n) * log Q (n: hejmara molên elektronê yên ku hatine veguheztin, Q: rêjeya berhevdana anod/katod)."
      },
      "trap": {
        "tr": "Nernst eşitliğinde pil potansiyeli derişimden etkilenmez.",
        "en": "In the Nernst equation, battery potential is not affected by concentration.",
        "de": "In der Nernst-Gleichung wird das Batteriepotential nicht durch die Konzentration beeinflusst.",
        "fr": "Dans l’équation de Nernst, le potentiel de la batterie n’est pas affecté par la concentration.",
        "ru": "В уравнении Нернста концентрация не влияет на потенциал батареи.",
        "ar": "في معادلة نيرنست، لا يتأثر جهد البطارية بالتركيز.",
        "zh": "在能斯特方程中，电池电位不受浓度影响。",
        "ku": "Di hevkêşana Nernst de, potansiyela bataryayê ji hêla konsantrebûnê ve nayê bandor kirin."
      }
    },
    {
      "id": "u21-f11",
      "fact": {
        "tr": "Derişim pilleri: Aynı elektrot ve aynı çözeltilerin farklı derişimleriyle kurulur; derişimi küçük olan yarı hücre ANOTTUR.",
        "en": "Concentration batteries: They are established with the same electrode and different concentrations of the same solutions; The half-cell with small concentration is ANODE.",
        "de": "Konzentrationsbatterien: Sie werden mit derselben Elektrode und unterschiedlichen Konzentrationen derselben Lösungen hergestellt; Die Halbzelle mit geringer Konzentration ist ANODE.",
        "fr": "Batteries à concentration : Elles sont établies avec la même électrode et des concentrations différentes des mêmes solutions ; La demi-cellule à faible concentration est ANODE.",
        "ru": "Концентрационные батареи: устанавливаются с одним и тем же электродом и разными концентрациями одних и тех же растворов; Полуэлемент с небольшой концентрацией – АНОД.",
        "ar": "بطاريات التركيز: يتم إنشاؤها بنفس القطب وتركيزات مختلفة لنفس المحاليل؛ نصف الخلية ذات التركيز الصغير هو الأنود.",
        "zh": "浓差电池：用相同的电极和不同浓度的相同溶液建立的；浓度小的半电池为阳极。",
        "ku": "Pîlên tîrbûnê: bi heman elektrodê û bi tîrbûnên cuda yên heman çareseriyê têne sazkirin; nîvhucreya ku tîrbûna wê kêmtir e ANOD e."
      },
      "trap": {
        "tr": "Derişim pillerinde derişimi büyük olan hücre anottur.",
        "en": "In concentration batteries, the cell with the highest concentration is the anode.",
        "de": "Bei Konzentrationsbatterien ist die Zelle mit der höchsten Konzentration die Anode.",
        "fr": "Dans les batteries à concentration, la cellule la plus concentrée est l’anode.",
        "ru": "В концентрационных батареях анодом является элемент с наибольшей концентрацией.",
        "ar": "في بطاريات التركيز، الخلية ذات التركيز الأعلى هي الأنود.",
        "zh": "在浓差电池中，浓度最高的电池是阳极。",
        "ku": "Di pîlên tîrbûnê de hucreya ku tîrbûna wê mezintir e anod e."
      }
    },
    {
      "id": "u21-f12",
      "fact": {
        "tr": "Derişim pilinde derişimler eşitlendiğinde sistem dengeye ulaşır ve pil gerilimi Epil = 0 olur (pil biter).",
        "en": "When the concentrations in the concentration battery are equalized, the system reaches equilibrium and the battery voltage becomes Epil = 0 (the battery runs out).",
        "de": "Wenn die Konzentrationen in der Konzentrationsbatterie ausgeglichen sind, erreicht das System ein Gleichgewicht und die Batteriespannung wird Epil = 0 (die Batterie ist leer).",
        "fr": "Lorsque les concentrations dans la batterie de concentration sont égalisées, le système atteint l'équilibre et la tension de la batterie devient Epil = 0 (la batterie s'épuise).",
        "ru": "Когда концентрации в концентрационной батарее выравниваются, система достигает равновесия и напряжение батареи становится Epil = 0 (батарея разряжается).",
        "ar": "عندما تتساوى التركيزات في بطارية التركيز، يصل النظام إلى التوازن ويصبح جهد البطارية Epil = 0 (نفاد البطارية).",
        "zh": "当浓差电池中的浓度均衡时，系统达到平衡，电池电压变为Epil = 0（电池耗尽）。",
        "ku": "Di pîla tîrbûnê de dema tîrbûn wekhev dibin, sîstem digihîje hevsengiyê û voltaja pîlê dibe Epîl = 0 (pîl diqede)."
      },
      "trap": {
        "tr": "Derişimler eşitlendiğinde pil gerilimi maksimuma ulaşır.",
        "en": "When the concentrations are equal, the battery voltage reaches its maximum.",
        "de": "Bei gleichen Konzentrationen erreicht die Batteriespannung ihr Maximum.",
        "fr": "Lorsque les concentrations sont égales, la tension de la batterie atteint son maximum.",
        "ru": "При равенстве концентраций напряжение батареи достигает максимума.",
        "ar": "عندما تكون التركيزات متساوية، يصل جهد البطارية إلى الحد الأقصى.",
        "zh": "当浓度相等时，电池电压达到最大值。",
        "ku": "Dema ku konsantre wekhev bin, voltaja pîlê digihîje herî zêde."
      }
    },
    {
      "id": "u21-f13",
      "fact": {
        "tr": "Pil tepkimeleri genellikle ekzotermiktir; ekzotermik bir pil tepkimesinde sıcaklık artırılırsa Le Chatelier ilkesine göre denge sola kayar ve pil gerilimi düşer.",
        "en": "Cell reactions are usually exothermic; for an exothermic cell reaction, raising the temperature shifts the equilibrium to the left (Le Chatelier's principle) and the cell voltage decreases.",
        "de": "Zellreaktionen sind meist exotherm; wird bei einer exothermen Zellreaktion die Temperatur erhöht, verschiebt sich das Gleichgewicht nach dem Prinzip von Le Chatelier nach links und die Zellspannung sinkt.",
        "fr": "Les réactions de pile sont généralement exothermiques ; pour une réaction de pile exothermique, une hausse de température déplace l'équilibre vers la gauche (principe de Le Chatelier) et la tension de la pile diminue.",
        "ru": "Реакции в гальванических элементах обычно экзотермичны; при повышении температуры для экзотермической реакции равновесие по принципу Ле Шателье смещается влево и напряжение элемента уменьшается.",
        "ar": "تفاعلات الخلايا غالبًا طاردة للحرارة؛ وفي تفاعل خلية طارد للحرارة يؤدي رفع درجة الحرارة إلى إزاحة الاتزان نحو اليسار (مبدأ لوشاتلييه) فينخفض جهد الخلية.",
        "zh": "电池反应通常是放热反应；对放热的电池反应，升高温度时根据勒夏特列原理平衡向左移动，电池电压降低。",
        "ku": "Reaksiyonên pîlê bi gelemperî ekzotermîk in; di reaksiyoneke pîlê ya ekzotermîk de heke germahî zêde bibe, li gorî prensîba Le Chatelier hevsengî ber bi çepê ve diçe û voltaja pîlê kêm dibe."
      },
      "trap": {
        "tr": "Ekzotermik bir pil tepkimesinde sıcaklık artırılırsa pil gerilimi artar.",
        "en": "For an exothermic cell reaction, raising the temperature increases the cell voltage.",
        "de": "Bei einer exothermen Zellreaktion steigt die Zellspannung, wenn die Temperatur erhöht wird.",
        "fr": "Pour une réaction de pile exothermique, une hausse de température augmente la tension de la pile.",
        "ru": "Для экзотермической реакции в элементе повышение температуры увеличивает напряжение элемента.",
        "ar": "في تفاعل خلية طارد للحرارة، يؤدي رفع درجة الحرارة إلى زيادة جهد الخلية.",
        "zh": "对放热的电池反应，升高温度会使电池电压升高。",
        "ku": "Di reaksiyoneke pîlê ya ekzotermîk de, zêdekirina germahiyê voltaja pîlê zêde dike."
      }
    },
    {
      "id": "u21-f14",
      "fact": {
        "tr": "Pil denklemi bir katsayı ile çarpılırsa E°pil değeri DEĞİŞMEZ (potansiyel şiddet özelliğidir).",
        "en": "If the cell equation is multiplied by a coefficient, the E°cell value does NOT change (potential is an intensive property).",
        "de": "Wird die Zellgleichung mit einem Faktor multipliziert, ändert sich E°Zelle NICHT (das Potential ist eine intensive Größe).",
        "fr": "Si l'équation de la pile est multipliée par un coefficient, la valeur de E°pile ne change PAS (le potentiel est une grandeur intensive).",
        "ru": "Если уравнение реакции элемента умножить на коэффициент, значение E°эл НЕ изменяется (потенциал — интенсивная величина).",
        "ar": "إذا ضُربت معادلة الخلية في معامل فإن قيمة E°خلية لا تتغير (الجهد خاصية مكثفة).",
        "zh": "电池反应方程式乘以某个系数时，E°电池 的值不变（电势是强度性质）。",
        "ku": "Heke hevkêşeya pîlê bi katsayiyekê were zêdekirin, nirxa E°pîl NAGUHERE (potansiyel taybetmendiyeke întensîf e)."
      },
      "trap": {
        "tr": "Tepkime 2 ile çarpılırsa E°pil de 2 ile çarpılır.",
        "en": "If the reaction is multiplied by 2, E°pil is also multiplied by 2.",
        "de": "Wenn die Reaktion mit 2 multipliziert wird, wird auch E°pil mit 2 multipliziert.",
        "fr": "Si la réaction est multipliée par 2, E°pil est également multiplié par 2.",
        "ru": "Если реакцию умножить на 2, E°pil также умножится на 2.",
        "ar": "إذا تم ضرب التفاعل بـ 2، يتم ضرب E°pil أيضًا بـ 2.",
        "zh": "如果反应乘以 2，则 E°pil 也乘以 2。",
        "ku": "Ger reaksîyon bi 2-yê were zêdekirin, E°pil jî bi 2-yê tê zêdekirin."
      }
    },
    {
      "id": "u21-f15",
      "fact": {
        "tr": "Tuz köprüsü çekilirse devreden akım geçmez ve pil anında durur.",
        "en": "If the salt bridge is pulled, no current flows through the circuit and the battery stops immediately.",
        "de": "Wird die Salzbrücke gezogen, fließt kein Strom durch den Stromkreis und die Batterie stoppt sofort.",
        "fr": "Si le pont de sel est tiré, aucun courant ne circule dans le circuit et la batterie s'arrête immédiatement.",
        "ru": "Если соляной мостик выдернут, ток через цепь не течет, и батарея немедленно отключается.",
        "ar": "إذا تم سحب الجسر الملحي، فلن يتدفق تيار عبر الدائرة وتتوقف البطارية على الفور.",
        "zh": "如果盐桥被拉动，电路中就没有电流流过，电池会立即停止工作。",
        "ku": "Ger pira xwê were kişandin, di nav şebekeyê de çu naherike û pîlê yekser disekine."
      },
      "trap": {
        "tr": "Tuz köprüsü olmadan da galvanik piller sonsuza dek çalışır.",
        "en": "Even without a salt bridge, galvanic batteries work forever.",
        "de": "Auch ohne Salzbrücke funktionieren galvanische Batterien ewig.",
        "fr": "Même sans pont salin, les batteries galvaniques fonctionnent éternellement.",
        "ru": "Даже без солевого мостика гальванические батареи работают вечно.",
        "ar": "حتى بدون جسر الملح، تعمل البطاريات الكلفانية إلى الأبد.",
        "zh": "即使没有盐桥，原电池也能永远工作。",
        "ku": "Tewra bêyî pira xwê, bataryayên galvanîk her û her dixebitin."
      }
    },
    {
      "id": "u21-f16",
      "fact": {
        "tr": "Daniell pilinde Zn anot (Zn → Zn2+ + 2e-) ve Cu katottur (Cu2+ + 2e- → Cu); E°pil = 1,10 V tur.",
        "en": "In the Daniell battery, Zn is the anode (Zn → Zn2+ + 2e-) and Cu is the cathode (Cu2+ + 2e- → Cu); E°battery = 1.10 V.",
        "de": "In der Daniell-Batterie ist Zn die Anode (Zn → Zn2+ + 2e-) und Cu die Kathode (Cu2+ + 2e- → Cu); E°Batterie = 1,10 V.",
        "fr": "Dans la batterie Daniell, Zn est l'anode (Zn → Zn2+ + 2e-) et Cu est la cathode (Cu2+ + 2e- → Cu) ; E°batterie = 1,10 V.",
        "ru": "В батарее Даниэля Zn является анодом (Zn → Zn2+ + 2e-), а Cu — катодом (Cu2+ + 2e- → Cu); E°батареи = 1,10 В.",
        "ar": "في خلية دانيال يكون Zn هو الأنود (Zn → Zn2+ + 2e-) ويكون Cu هو الكاثود (Cu2+ + 2e- → Cu)؛ E°خلية = 1.10 V.",
        "zh": "在丹尼尔电池中，Zn为阳极（Zn → Zn2+ + 2e-），Cu为阴极（Cu2+ + 2e- → Cu）； E°电池 = 1.10 V。",
        "ku": "Di pîlê Daniell de, Zn anode ye (Zn → Zn2+ + 2e-) û Cu katod e (Cu2+ + 2e- → Cu); E°baterî = 1,10 V."
      },
      "trap": {
        "tr": "Daniell pilinde bakır elektrot anot olarak davranır.",
        "en": "In the Daniell battery, the copper electrode acts as the anode.",
        "de": "Bei der Daniell-Batterie fungiert die Kupferelektrode als Anode.",
        "fr": "Dans la batterie Daniell, l’électrode de cuivre fait office d’anode.",
        "ru": "В батарее Дэниела медный электрод действует как анод.",
        "ar": "في بطارية دانييل، يعمل القطب النحاسي بمثابة الأنود.",
        "zh": "在丹尼尔电池中，铜电极充当阳极。",
        "ku": "Di pîlê Daniell de, elektroda sifir wekî anode tevdigere."
      }
    }
  ],
  "comparisons": [
    {
      "id": "u21-c01",
      "conceptA": {
        "tr": "Anot",
        "en": "anode",
        "de": "Anode",
        "fr": "anode",
        "ru": "анод",
        "ar": "الأنود",
        "zh": "阳极",
        "ku": "anode"
      },
      "conceptB": {
        "tr": "Katot",
        "en": "cathode",
        "de": "Kathode",
        "fr": "cathode",
        "ru": "катод",
        "ar": "الكاثود",
        "zh": "阴极",
        "ku": "katode"
      },
      "distinction": {
        "tr": "Anotta yükseltgenme olur elektrot kütlesi azalır; katotta indirgenme olur elektrot kütlesi artar.",
        "en": "Oxidation occurs at the anode and the electrode mass decreases; Reduction occurs at the cathode and the electrode mass increases.",
        "de": "An der Anode kommt es zu Oxidation und die Elektrodenmasse nimmt ab; An der Kathode findet eine Reduktion statt und die Elektrodenmasse nimmt zu.",
        "fr": "L'oxydation se produit au niveau de l'anode et la masse de l'électrode diminue ; La réduction se produit au niveau de la cathode et la masse de l'électrode augmente.",
        "ru": "На аноде происходит окисление и масса электрода уменьшается; Восстановление происходит на катоде и масса электрода увеличивается.",
        "ar": "عند الأنود تحدث الأكسدة وتنقص كتلة القطب؛ وعند الكاثود يحدث الاختزال وتزداد كتلة القطب.",
        "zh": "阳极发生氧化，电极质量减少；阴极发生还原反应，电极质量增加。",
        "ku": "Oksîdasyon li anodê çêdibe û girseya elektrodê kêm dibe; Li katodê kêmbûn çêdibe û girseya elektrodê zêde dibe."
      }
    },
    {
      "id": "u21-c02",
      "conceptA": {
        "tr": "Kimyasal Pil",
        "en": "Chemical Battery",
        "de": "Chemische Batterie",
        "fr": "Batterie chimique",
        "ru": "Химическая батарея",
        "ar": "البطارية الكيميائية",
        "zh": "化学电池",
        "ku": "Pîl Kîmyewî"
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
        "tr": "Kimyasal pilde farklı metaller vardır; derişim pilinde aynı metalin farklı derişimleri vardır.",
        "en": "There are different metals in the chemical battery; In a concentration battery, there are different concentrations of the same metal.",
        "de": "In der chemischen Batterie gibt es verschiedene Metalle; In einer Konzentrationsbatterie liegen unterschiedliche Konzentrationen desselben Metalls vor.",
        "fr": "Il existe différents métaux dans la batterie chimique ; Dans une batterie à concentration, il existe différentes concentrations du même métal.",
        "ru": "В химической батарее присутствуют разные металлы; В концентрационной батарее присутствуют разные концентрации одного и того же металла.",
        "ar": "هناك معادن مختلفة في البطارية الكيميائية؛ في بطارية التركيز، هناك تركيزات مختلفة من نفس المعدن.",
        "zh": "化学电池中有不同的金属；在浓差电池中，同一种金属有不同的浓度。",
        "ku": "Di pîlê kîmyewî de metalên cuda hene; Di bataryayek konsantasyonê de, hûrgelên cûda yên heman metalê hene."
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
        "zh": "标准氢电极（SHE）",
        "ku": "Elektroda Hîdrojenê ya Standard (SHE)"
      },
      "conceptB": {
        "tr": "Standart İndirgenme Potansiyeli (E°ind)",
        "en": "Standard Reduction Potential (E°red)",
        "de": "Standardreduktionspotential (E°Red)",
        "fr": "Potentiel standard de réduction (E°réd)",
        "ru": "Стандартный потенциал восстановления (E°восст)",
        "ar": "جهد الاختزال القياسي (E°اختزال)",
        "zh": "标准还原电势（E°还原）",
        "ku": "Potansiyela Reduksiyonê ya Standard (E°red)"
      },
      "distinction": {
        "tr": "SHE, potansiyeli 0,00 V kabul edilen referans elektrottur; standart indirgenme potansiyeli bir yarı hücrenin 25 °C ve 1 M koşullarında SHE'ye karşı ölçülen indirgenme eğilimidir.",
        "en": "The SHE is the reference electrode whose potential is defined as 0.00 V; the standard reduction potential is a half-cell's tendency to be reduced, measured against the SHE at 25 °C and 1 M.",
        "de": "Die SHE ist die Bezugselektrode, deren Potential als 0,00 V festgelegt ist; das Standardreduktionspotential ist die gegen die SHE bei 25 °C und 1 M gemessene Reduktionsneigung einer Halbzelle.",
        "fr": "L'ESH est l'électrode de référence dont le potentiel est fixé à 0,00 V ; le potentiel standard de réduction est la tendance d'une demi-pile à être réduite, mesurée par rapport à l'ESH à 25 °C et 1 M.",
        "ru": "СВЭ — электрод сравнения, потенциал которого принят равным 0,00 В; стандартный потенциал восстановления — склонность полуэлемента к восстановлению, измеренная относительно СВЭ при 25 °C и 1 M.",
        "ar": "قطب الهيدروجين القياسي هو القطب المرجعي الذي يُعتبر جهده 0.00 V؛ أما جهد الاختزال القياسي فهو ميل نصف الخلية إلى الاختزال مقيسًا مقابل قطب الهيدروجين القياسي عند 25 °C و 1 M.",
        "zh": "标准氢电极是电势规定为 0.00 V 的参比电极；标准还原电势是半电池在 25 °C、1 M 条件下相对于标准氢电极测得的被还原倾向。",
        "ku": "SHE elektroda referansê ye ku potansiyela wê 0,00 V tê qebûlkirin; potansiyela reduksiyonê ya standard meyla nîvhucreyekê ya kêmbûnê ye ku li 25 °C û 1 M li hember SHE tê pîvan."
      }
    },
    {
      "id": "u21-c04",
      "conceptA": {
        "tr": "Galvanik Hücre (Pil)",
        "en": "Galvanic Cell (Battery)",
        "de": "Galvanische Zelle (Batterie)",
        "fr": "Cellule galvanique (batterie)",
        "ru": "Гальванический элемент (батарея)",
        "ar": "خلية كلفانية (بطارية)",
        "zh": "原电池（电池）",
        "ku": "Hucreya Galvanîk (Pîl)"
      },
      "conceptB": {
        "tr": "Elektrolitik Hücre",
        "en": "Electrolytic Cell",
        "de": "Elektrolytische Zelle",
        "fr": "Cellule électrolytique",
        "ru": "Электролитическая ячейка",
        "ar": "خلية التحليل الكهربائي",
        "zh": "电解池",
        "ku": "Hucreya Elektrolîtîk"
      },
      "distinction": {
        "tr": "Galvanik hücre kimyasal enerjiyi istemli olarak elektrik enerjisine çevirir (Epil > 0); elektrolitik hücre elektrikle istemsiz bir tepkimeyi yürütür.",
        "en": "A galvanic cell converts chemical energy into electrical energy spontaneously (Ecell > 0); electrolysis uses electricity to drive a non-spontaneous reaction.",
        "de": "Eine galvanische Zelle wandelt chemische Energie freiwillig in elektrische Energie um (EZelle > 0); die Elektrolyse erzwingt mit elektrischem Strom eine nicht freiwillige Reaktion.",
        "fr": "Une pile galvanique convertit spontanément l'énergie chimique en énergie électrique (Epile > 0) ; l'électrolyse utilise l'électricité pour réaliser une réaction non spontanée.",
        "ru": "Гальванический элемент самопроизвольно превращает химическую энергию в электрическую (Eэл > 0); электролиз с помощью электрического тока осуществляет несамопроизвольную реакцию.",
        "ar": "تحوّل الخلية الجلفانية الطاقة الكيميائية إلى طاقة كهربائية تلقائيًا (Eخلية > 0)؛ أما التحليل الكهربائي فيستخدم الكهرباء لإحداث تفاعل غير تلقائي.",
        "zh": "原电池自发地将化学能转化为电能（E电池 > 0）；电解则利用电能驱动非自发反应。",
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
        "zh": "标准电池电势（E°电池）",
        "ku": "Potansiyela Standard a Pîlê (E°pîl)"
      },
      "conceptB": {
        "tr": "Gerçek Pil Potansiyeli (Epil)",
        "en": "Actual Cell Potential (Ecell)",
        "de": "Tatsächliches Zellpotential (EZelle)",
        "fr": "Potentiel réel de pile (Epile)",
        "ru": "Реальный потенциал элемента (Eэл)",
        "ar": "جهد الخلية الفعلي (Eخلية)",
        "zh": "实际电池电势（E电池）",
        "ku": "Potansiyela Rastîn a Pîlê (Epîl)"
      },
      "distinction": {
        "tr": "E°pil 1 M standart derişimlerdeki potansiyeldir; Epil Nernst denklemiyle farklı derişimlerde hesaplanan potansiyeldir.",
        "en": "E°cell is the potential at standard 1 M concentrations; Ecell is the potential at other concentrations, calculated with the Nernst equation.",
        "de": "E°Zelle ist das Potential bei Standardkonzentrationen von 1 M; EZelle ist das mit der Nernst-Gleichung berechnete Potential bei anderen Konzentrationen.",
        "fr": "E°pile est le potentiel aux concentrations standard de 1 M ; Epile est le potentiel calculé à d'autres concentrations avec l'équation de Nernst.",
        "ru": "E°эл — потенциал при стандартных концентрациях 1 М; Eэл — потенциал при других концентрациях, рассчитанный по уравнению Нернста.",
        "ar": "E°خلية هو الجهد عند التراكيز القياسية 1 M؛ أما Eخلية فهو الجهد عند تراكيز أخرى ويُحسب بمعادلة نيرنست.",
        "zh": "E°电池 是 1 M 标准浓度下的电势；E电池 是用能斯特方程计算的其他浓度下的电势。",
        "ku": "E°pîl potansiyela di tîrbûnên standard ên 1 M de ye; Epîl potansiyela di tîrbûnên din de ye ku bi hevkêşeya Nernst tê hesabkirin."
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
        "ru": "Анионы в соляном мостике",
        "ar": "الأنيونات في جسر الملح",
        "zh": "盐桥中的负离子",
        "ku": "Anyon li Pira Xwê"
      },
      "conceptB": {
        "tr": "Tuz Köprüsündeki Katyonlar",
        "en": "Cations in the Salt Bridge",
        "de": "Kationen in der Salzbrücke",
        "fr": "Cations dans le pont de sel",
        "ru": "Катионы в соляном мостике",
        "ar": "الكاتيونات في جسر الملح",
        "zh": "盐桥中的阳离子",
        "ku": "Katyon di Pira Xwê de"
      },
      "distinction": {
        "tr": "Tuz köprüsündeki anyonlar pozitif yükü nötrlemek için anota göç eder; katyonlar katot hücresine göç eder.",
        "en": "Anions in the salt bridge migrate to the anode to neutralize the positive charge; cations migrate to the cathode cell.",
        "de": "Anionen in der Salzbrücke wandern zur Anode, um die positive Ladung zu neutralisieren; Kationen wandern zur Kathodenzelle.",
        "fr": "Les anions du pont salin migrent vers l'anode pour neutraliser la charge positive ; les cations migrent vers la cellule cathodique.",
        "ru": "Анионы в солевом мостике мигрируют к аноду, чтобы нейтрализовать положительный заряд; катионы мигрируют к катодной ячейке.",
        "ar": "تهاجر الأنيونات في القنطرة الملحية نحو الأنود لمعادلة الشحنة الموجبة الزائدة؛ وتهاجر الكاتيونات نحو خلية الكاثود.",
        "zh": "盐桥中的阴离子迁移到阳极，中和正电荷；阳离子迁移到阴极电池。",
        "ku": "Anyonên di pira xwê de ji bo bêbandorkirina barê erênî ber bi anodê ve diçin; kation koçî şaneya katodê dikin."
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
        "ru": "Окислитель принимает электроны и сам восстанавливается; восстановитель отдаёт электроны и сам окисляется.",
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
          "tr": "Yükseltgenme potansiyellerini karşılaştırıp anotu belirle",
          "en": "Compare oxidation potentials and identify the anode",
          "de": "Vergleichen Sie Oxidationspotentiale und identifizieren Sie die Anode",
          "fr": "Comparer les potentiels d'oxydation et identifier l'anode",
          "ru": "Сравните окислительные потенциалы и определите анод.",
          "ar": "قارن جهود التأكسد وحدد الأنود",
          "zh": "比较氧化电位并识别阳极",
          "ku": "Potansiyelên oksîdasyonê bide ber hev û anodê diyar bike"
        },
        {
          "tr": "Katot indirgenme yarı tepkimesini yaz",
          "en": "Write the cathode reduction half reaction",
          "de": "Schreiben Sie die Halbreaktion der Kathodenreduktion auf",
          "fr": "Écrire la demi-réaction de réduction cathodique",
          "ru": "Напишите полуреакцию катодного восстановления.",
          "ar": "اكتب نصف تفاعل اختزال الكاثود",
          "zh": "写出阴极还原半反应",
          "ku": "Nîv reaksiyona kêmkirina katodê binivîsin"
        },
        {
          "tr": "E°pil = E°anot + E°katot ile standart gerilimi bul",
          "en": "Find the standard voltage with E°cell = E°anode + E°cathode",
          "de": "Standardspannung mit E°Zelle = E°Anode + E°Kathode berechnen",
          "fr": "Calculer la tension standard avec E°pile = E°anode + E°cathode",
          "ru": "Найти стандартное напряжение по формуле E°эл = E°анод + E°катод",
          "ar": "احسب الجهد القياسي من E°خلية = E°الأنود + E°الكاثود",
          "zh": "用 E°电池 = E°阳极 + E°阴极 求标准电压",
          "ku": "Bi E°pîl = E°anod + E°katod voltaja standard bibîne"
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
          "ru": "Электрод в разбавленном растворе является анодом и окисляется; ионы концентрированного раствора восстанавливаются на катоде",
          "ar": "القطب المغموس في المحلول المخفف هو الأنود ويتأكسد؛ وتُختزل أيونات المحلول المركز عند الكاثود",
          "zh": "稀溶液中的电极为阳极并被氧化；浓溶液中的离子在阴极被还原",
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
        "tr": "Nernst Denklemi ile Derişim Düzeltmesi",
        "en": "Concentration Correction with the Nernst Equation",
        "de": "Konzentrationskorrektur mit der Nernst-Gleichung",
        "fr": "Correction de concentration avec l'équation de Nernst",
        "ru": "Поправка на концентрацию с помощью уравнения Нернста",
        "ar": "تصحيح التركيز بمعادلة نيرنست",
        "zh": "用能斯特方程进行浓度校正",
        "ku": "Bi Hevkêşana Nernstê Rastkirina Tevrabûnê"
      },
      "steps": [
        {
          "tr": "Yarı hücrelerdeki iyon derişimleri belirlenir",
          "en": "Ion concentrations in half cells are determined",
          "de": "Es werden Ionenkonzentrationen in Halbzellen bestimmt",
          "fr": "Les concentrations d'ions dans les demi-cellules sont déterminées",
          "ru": "Определены концентрации ионов в полуклетках.",
          "ar": "يتم تحديد تركيزات الأيونات في نصف الخلايا",
          "zh": "确定半电池中的离子浓度",
          "ku": "Giraniya îyonê di nîv şaneyan de têne destnîşankirin"
        },
        {
          "tr": "Tepkime kesri Q = [Anot iyonu] / [Katot iyonu] yazılır",
          "en": "Write the reaction quotient Q = [anode ion] / [cathode ion]",
          "de": "Der Reaktionsquotient wird als Q = [Anodenion] / [Kathodenion] aufgestellt",
          "fr": "On écrit le quotient de réaction Q = [ion de l'anode] / [ion de la cathode]",
          "ru": "Записывают коэффициент реакции Q = [ион анода] / [ион катода]",
          "ar": "يُكتب حاصل التفاعل Q = [أيون الأنود] / [أيون الكاثود]",
          "zh": "写出反应商 Q = [阳极离子] / [阴极离子]",
          "ku": "Kêşeya reaksiyonê Q = [îyona anodê] / [îyona katodê] tê nivîsîn"
        },
        {
          "tr": "Nernst formülü: Epil = E°pil - (0,0592 / n) . log Q kurulur",
          "en": "Set up the Nernst equation: Ecell = E°cell - (0.0592 / n) . log Q",
          "de": "Die Nernst-Gleichung wird aufgestellt: EZelle = E°Zelle - (0,0592 / n) . log Q",
          "fr": "On pose l'équation de Nernst : Epile = E°pile - (0,0592 / n) . log Q",
          "ru": "Составляют уравнение Нернста: Eэл = E°эл - (0,0592 / n) . lg Q",
          "ar": "تُكتب معادلة نيرنست: Eخلية = E°خلية - (0.0592 / n) . log Q",
          "zh": "列出能斯特方程：E电池 = E°电池 - (0.0592 / n) · lg Q",
          "ku": "Hevkêşeya Nernst tê danîn: Epîl = E°pîl - (0,0592 / n) . log Q"
        },
        {
          "tr": "Logaritmik terim hesaplanarak gerçek pil potansiyeli bulunur",
          "en": "The actual battery potential is found by calculating the logarithmic term",
          "de": "Das tatsächliche Batteriepotential wird durch Berechnung des logarithmischen Termes ermittelt",
          "fr": "Le potentiel réel de la batterie est déterminé en calculant le terme logarithmique",
          "ru": "Фактический потенциал батареи находится путем вычисления логарифмического члена",
          "ar": "يتم العثور على إمكانات البطارية الفعلية عن طريق حساب المصطلح اللوغاريتمي",
          "zh": "通过计算对数项得出实际电池电位",
          "ku": "Potansiyela bataryayê ya rastîn bi hesabkirina terma logarîtmîkî tê dîtin"
        }
      ]
    },
    {
      "id": "u21-s04",
      "title": {
        "tr": "Galvanik Hücre Çalışma Döngüsü",
        "en": "Galvanic Cell Working Cycle",
        "de": "Arbeitszyklus der galvanischen Zelle",
        "fr": "Cycle de travail des cellules galvaniques",
        "ru": "Рабочий цикл гальванического элемента",
        "ar": "دورة عمل الخلية الجلفانية",
        "zh": "原电池工作周期",
        "ku": "Çêleka Xebatê ya Hucreya Galvanîk"
      },
      "steps": [
        {
          "tr": "Anot elektrot yükseltgenerek aşınır ve çözeltiye katyon geçer",
          "en": "The anode electrode is oxidized and corroded, and cations pass into the solution.",
          "de": "Die Anodenelektrode wird oxidiert und korrodiert und Kationen gelangen in die Lösung.",
          "fr": "L'électrode anodique est oxydée et corrodée et les cations passent dans la solution.",
          "ru": "Анодный электрод окисляется и корродирует, катионы переходят в раствор.",
          "ar": "يتأكسد قطب الأنود ويتآكل، وتمر الكاتيونات إلى المحلول.",
          "zh": "阳极电极被氧化和腐蚀，阳离子进入溶液。",
          "ku": "Elektroda anodê oksîde û koroz dibe, û kation di nav çareseriyê de derbas dibin."
        },
        {
          "tr": "Açığa çıkan elektronlar dış devreden katota doğru akar",
          "en": "The released electrons flow from the external circuit to the cathode",
          "de": "Die freigesetzten Elektronen fließen vom äußeren Stromkreis zur Kathode",
          "fr": "Les électrons libérés circulent du circuit externe vers la cathode",
          "ru": "Освободившиеся электроны перетекают из внешней цепи к катоду.",
          "ar": "تتدفق الإلكترونات المحررة من الدائرة الخارجية إلى الكاثود",
          "zh": "释放的电子从外电路流向阴极",
          "ku": "Elektronên berdayî ji çerxa derve diherikin katodê"
        },
        {
          "tr": "Katot yüzeyinde çözeltideki katyonlar indirgenerek toplanır",
          "en": "Cations in solution are collected on the cathode surface by reducing",
          "de": "Durch Reduktion werden gelöste Kationen auf der Kathodenoberfläche gesammelt",
          "fr": "Les cations en solution sont collectés à la surface de la cathode en réduisant",
          "ru": "Катионы в растворе собираются на поверхности катода за счет восстановления",
          "ar": "يتم جمع الكاتيونات الموجودة في المحلول على سطح الكاثود عن طريق الاختزال",
          "zh": "通过还原，溶液中的阳离子被收集在阴极表面上",
          "ku": "Katyonên di çareseriyê de bi kêmkirinê li ser rûyê katodê têne berhev kirin"
        },
        {
          "tr": "Tuz köprüsündeki anyonlar anota, katyonlar katota göç eder",
          "en": "Anions in the salt bridge migrate to the anode, cations migrate to the cathode",
          "de": "Anionen in der Salzbrücke wandern zur Anode, Kationen zur Kathode",
          "fr": "Les anions du pont salin migrent vers l'anode, les cations migrent vers la cathode",
          "ru": "Анионы в солевом мостике мигрируют к аноду, катионы мигрируют к катоду.",
          "ar": "تهاجر الأنيونات في القنطرة الملحية نحو الأنود والكاتيونات نحو الكاثود",
          "zh": "盐桥中的阴离子迁移到阳极，阳离子迁移到阴极",
          "ku": "Anyonên di pira xwê de koçî anodê dikin, kation jî ber bi katodê ve diçin"
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
          "en": "1.10V",
          "de": "1,10 V",
          "fr": "1,10 V",
          "ru": "1,10 В",
          "ar": "1.10 فولت",
          "zh": "1.10V",
          "ku": "1.10V"
        },
        {
          "tr": "0,42 V",
          "en": "0.42V",
          "de": "0,42 V",
          "fr": "0,42 V",
          "ru": "0,42 В",
          "ar": "0.42 فولت",
          "zh": "0.42V",
          "ku": "0.42V"
        },
        {
          "tr": "-1,10 V",
          "en": "-1.10V",
          "de": "-1,10 V",
          "fr": "-1,10V",
          "ru": "-1,10 В",
          "ar": "-1.10 فولت",
          "zh": "-1.10V",
          "ku": "-1.10V"
        },
        {
          "tr": "0,76 V",
          "en": "0.76V",
          "de": "0,76 V",
          "fr": "0,76 V",
          "ru": "0,76 В",
          "ar": "0.76 فولت",
          "zh": "0.76V",
          "ku": "0.76V"
        },
        {
          "tr": "-0,42 V",
          "en": "-0.42V",
          "de": "-0,42 V",
          "fr": "-0,42V",
          "ru": "-0,42 В",
          "ar": "-0.42 فولت",
          "zh": "-0.42V",
          "ku": "-0.42V"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Zn yükseltgenme potansiyeli = +0,76 V (anot). Cu indirgenme potansiyeli = +0,34 V (katot). E°pil = 0,76 + 0,34 = 1,10 V.",
        "en": "Zn oxidation potential = +0.76 V (anode). Cu reduction potential = +0.34 V (cathode). E°battery = 0.76 + 0.34 = 1.10 V.",
        "de": "Zn-Oxidationspotential = +0,76 V (Anode). Cu-Reduktionspotential = +0,34 V (Kathode). E°Batterie = 0,76 + 0,34 = 1,10 V.",
        "fr": "Potentiel d'oxydation du Zn = +0,76 V (anode). Potentiel de réduction du Cu = +0,34 V (cathode). E°batterie = 0,76 + 0,34 = 1,10 V.",
        "ru": "Потенциал окисления Zn = +0,76 В (анод). Потенциал восстановления Cu = +0,34 В (катод). E°батареи = 0,76 + 0,34 = 1,10 В.",
        "ar": "جهد تأكسد Zn = +0.76 V (الأنود). جهد اختزال Cu = +0.34 V (الكاثود). E°خلية = 0.76 + 0.34 = 1.10 V.",
        "zh": "Zn 氧化电位 = +0.76 V（阳极）。 Cu 还原电位 = +0.34 V（阴极）。 E°电池 = 0.76 + 0.34 = 1.10 V。",
        "ku": "Potansiyela oksîdasyona Zn = +0,76 V (anod). Potansiyela kêmkirina Cu = +0,34 V (katod). E°baterî = 0,76 + 0,34 = 1,10 V."
      }
    },
    {
      "id": "u21-twin02",
      "stem": {
        "tr": "Standart bir elektrokimyasal pilde tuz köprüsündeki iyonların hareketi ile ilgili hangisi doğrudur?",
        "en": "Which statement is true regarding the movement of ions across the salt bridge in a standard electrochemical cell?",
        "de": "Welche Aussage trifft auf die Bewegung von Ionen über die Salzbrücke in einer elektrochemischen Standardzelle zu?",
        "fr": "Quelle affirmation est vraie concernant le mouvement des ions à travers le pont salin dans une cellule électrochimique standard ?",
        "ru": "Какое утверждение верно относительно движения ионов через солевой мостик в стандартной электрохимической ячейке?",
        "ar": "أي عبارة صحيحة فيما يتعلق بحركة الأيونات عبر الجسر الملحي في خلية كهروكيميائية قياسية؟",
        "zh": "关于标准电化学电池中离子穿过盐桥的运动，哪种说法是正确的？",
        "ku": "Di derbarê tevgera îyonan de li ser pira xwê ya di şaneyek elektrokîmyayî ya standard de kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Anyonlar anoda, katyonlar katoda göç eder",
          "en": "Anions migrate to the anode, cations migrate to the cathode",
          "de": "Anionen wandern zur Anode, Kationen zur Kathode",
          "fr": "Les anions migrent vers l'anode, les cations migrent vers la cathode",
          "ru": "Анионы мигрируют к аноду, катионы мигрируют к катоду.",
          "ar": "تهاجر الأنيونات نحو الأنود والكاتيونات نحو الكاثود",
          "zh": "阴离子迁移到阳极，阳离子迁移到阴极",
          "ku": "Anyon koçî anodê dikin, katyon jî ber bi katodê ve diçin"
        },
        {
          "tr": "Katyonlar anoda, anyonlar katoda göç eder",
          "en": "Cations migrate to the anode, anions migrate to the cathode",
          "de": "Kationen wandern zur Anode, Anionen wandern zur Kathode",
          "fr": "Les cations migrent vers l'anode, les anions migrent vers la cathode",
          "ru": "Катионы мигрируют к аноду, анионы мигрируют к катоду.",
          "ar": "تهاجر الكاتيونات نحو الأنود والأنيونات نحو الكاثود",
          "zh": "阳离子迁移到阳极，阴离子迁移到阴极",
          "ku": "Katyon ber bi anodê, anyon koçî katodê dikin"
        },
        {
          "tr": "Tüm iyonlar sadece katoda doğru hareket eder",
          "en": "All ions move only towards the cathode",
          "de": "Alle Ionen bewegen sich nur in Richtung der Kathode",
          "fr": "Tous les ions se déplacent uniquement vers la cathode",
          "ru": "Все ионы движутся только к катоду",
          "ar": "تتحرك جميع الأيونات نحو الكاثود فقط",
          "zh": "所有离子仅向阴极移动",
          "ku": "Hemû îyon tenê ber bi katodê ve diçin"
        },
        {
          "tr": "Tuz köprüsündeki iyonlar hareket etmez",
          "en": "Ions in the salt bridge do not move",
          "de": "Ionen in der Salzbrücke bewegen sich nicht",
          "fr": "Les ions dans le pont de sel ne bougent pas",
          "ru": "Ионы в солевом мостике не движутся.",
          "ar": "الأيونات الموجودة في جسر الملح لا تتحرك",
          "zh": "盐桥中的离子不移动",
          "ku": "Di pira xwê de îyon nalivin"
        },
        {
          "tr": "Elektronlar tuz köprüsünden akar",
          "en": "Electrons flow across the salt bridge",
          "de": "Elektronen fließen über die Salzbrücke",
          "fr": "Les électrons traversent le pont de sel",
          "ru": "Электроны текут через солевой мостик",
          "ar": "تتدفق الإلكترونات عبر جسر الملح",
          "zh": "电子流过盐桥",
          "ku": "Elektron li ser pira xwê diherikin"
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Tuz köprüsünde yük denkliği için anyonlar anoda, katyonlar katoda göç eder. Elektronlar ise dış devreden anottan katoda akar.",
        "en": "In the salt bridge, anions migrate to the anode and cations migrate to the cathode for charge balance. Electrons flow from the anode to the cathode through the external circuit.",
        "de": "In der Salzbrücke wandern Anionen zum Ladungsausgleich zur Anode und Kationen zur Kathode. Elektronen fließen durch den externen Stromkreis von der Anode zur Kathode.",
        "fr": "Dans le pont salin, les anions migrent vers l'anode et les cations migrent vers la cathode pour équilibrer les charges. Les électrons circulent de l'anode à la cathode via le circuit externe.",
        "ru": "В солевом мостике анионы мигрируют к аноду, а катионы - к катоду для баланса заряда. Электроны перетекают от анода к катоду по внешней цепи.",
        "ar": "في القنطرة الملحية تهاجر الأنيونات نحو الأنود والكاتيونات نحو الكاثود لحفظ توازن الشحنات، بينما تنتقل الإلكترونات عبر الدائرة الخارجية من الأنود إلى الكاثود.",
        "zh": "在盐桥中，阴离子迁移到阳极，阳离子迁移到阴极以实现电荷平衡。电子通过外电路从阳极流向阴极。",
        "ku": "Di pira xwê de, anyon ber bi anodê ve û kation jî ji bo balansa barkirinê ber bi katodê ve diçin. Elektron ji anodê diherikin katodê bi çerxa derve."
      }
    },
    {
      "id": "u21-twin03",
      "stem": {
        "tr": "Kimya dersinde Kimya ve Elektrik: Redoks ve Galvanik Piller ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Electrochemistry: Redox & Galvanic, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Elektrochemie: Redox & Galvanische Zellen: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Électrochimie: Redox & Piles Galvaniques, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Электрохимия: ОВР и гальванические элементы», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“电化学：氧化还原与原电池”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "İndirgenme potansiyeli büyük olan metal anot kutbudur.",
          "en": "The metal with the greater reduction potential is the anode.",
          "de": "Das Metall mit dem größeren Reduktionspotential ist die Anode.",
          "fr": "Le métal ayant le plus grand potentiel de réduction est l'anode.",
          "ru": "Металл с большим потенциалом восстановления является анодом.",
          "ar": "الفلز ذو جهد الاختزال الأكبر هو الأنود.",
          "zh": "还原电势较大的金属是阳极。",
          "ku": "Metala ku potansiyela wê ya reduksiyonê mezintir e anod e."
        },
        {
          "tr": "Katot çözeltisine su eklendiğinde pil gerilimi yükselir.",
          "en": "When water is added to the cathode solution, the battery voltage increases.",
          "de": "Wenn der Kathodenlösung Wasser zugesetzt wird, erhöht sich die Batteriespannung.",
          "fr": "Lorsque de l'eau est ajoutée à la solution cathodique, la tension de la batterie augmente.",
          "ru": "При добавлении воды в катодный раствор напряжение батареи увеличивается.",
          "ar": "عند إضافة الماء إلى محلول الكاثود، يزداد جهد البطارية.",
          "zh": "当阴极溶液中添加水时，电池电压增加。",
          "ku": "Dema ku av li çareseriya katodê tê zêdekirin, voltaja pîlê zêde dibe."
        },
        {
          "tr": "Tuz köprüsündeki ANYONLAR ANODA, KATYONLAR KATODA göç ederek yük denkliğini sağlar.",
          "en": "ANIONS in the salt bridge migrate to the ANODE and CATIONS to the CATHODE, maintaining charge balance.",
          "de": "ANIONEN in der Salzbrücke wandern zur ANODE und KATIONEN wandern zur KATHODE und sorgen für den Ladungsausgleich.",
          "fr": "Les ANIONS du pont salin migrent vers l'ANODE et les CATIONS vers la CATHODE, ce qui assure l'équilibre des charges.",
          "ru": "АНИОНЫ в солевом мостике мигрируют к АНОДУ, а КАТИОНЫ мигрируют к КАТОДУ и обеспечивают баланс заряда.",
          "ar": "تهاجر الأنيونات في القنطرة الملحية نحو الأنود والكاتيونات نحو الكاثود فتحافظ على توازن الشحنات.",
          "zh": "盐桥中的阴离子迁移到阳极，阳离子迁移到阴极并确保电荷平衡。",
          "ku": "ANYONÊN di pira xwê de ber bi ANODÊ, KATYON jî ber bi KATODÊ ve koç dikin û hevsengiya barê diparêzin."
        },
        {
          "tr": "Derişimler eşitlendiğinde pil gerilimi maksimuma ulaşır.",
          "en": "When the concentrations are equal, the battery voltage reaches its maximum.",
          "de": "Bei gleichen Konzentrationen erreicht die Batteriespannung ihr Maximum.",
          "fr": "Lorsque les concentrations sont égales, la tension de la batterie atteint son maximum.",
          "ru": "При равенстве концентраций напряжение батареи достигает максимума.",
          "ar": "عندما تكون التركيزات متساوية، يصل جهد البطارية إلى الحد الأقصى.",
          "zh": "当浓度相等时，电池电压达到最大值。",
          "ku": "Dema ku konsantre wekhev bin, voltaja pîlê digihîje herî zêde."
        },
        {
          "tr": "Tuz köprüsü olmadan da galvanik piller sonsuza dek çalışır.",
          "en": "Even without a salt bridge, galvanic batteries work forever.",
          "de": "Auch ohne Salzbrücke funktionieren galvanische Batterien ewig.",
          "fr": "Même sans pont salin, les batteries galvaniques fonctionnent éternellement.",
          "ru": "Даже без солевого мостика гальванические батареи работают вечно.",
          "ar": "حتى بدون جسر الملح، تعمل البطاريات الكلفانية إلى الأبد.",
          "zh": "即使没有盐桥，原电池也能永远工作。",
          "ku": "Tewra bêyî pira xwê, bataryayên galvanîk her û her dixebitin."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Tuz köprüsündeki ANYONLAR ANODA, KATYONLAR KATODA göç ederek yük denkliğini sağlar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"ANIONS in the salt bridge migrate to the ANODE and CATIONS to the CATHODE, maintaining charge balance.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"ANIONEN in der Salzbrücke wandern zur ANODE und KATIONEN wandern zur KATHODE und sorgen für den Ladungsausgleich.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les ANIONS du pont salin migrent vers l'ANODE et les CATIONS vers la CATHODE, ce qui assure l'équilibre des charges.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «АНИОНЫ в солевом мостике мигрируют к АНОДУ, а КАТИОНЫ мигрируют к КАТОДУ и обеспечивают баланс заряда.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تهاجر الأنيونات في القنطرة الملحية نحو الأنود والكاتيونات نحو الكاثود فتحافظ على توازن الشحنات.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“盐桥中的阴离子迁移到阳极，阳离子迁移到阴极并确保电荷平衡。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"ANYONÊN di pira xwê de ber bi ANODÊ, KATYON jî ber bi KATODÊ ve koç dikin û hevsengiya barê diparêzin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin04",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimya ve Elektrik: Redoks ve Galvanik Piller konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Electrochemistry: Redox & Galvanic?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Elektrochemie: Redox & Galvanische Zellen zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Électrochimie: Redox & Piles Galvaniques ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Электрохимия: ОВР и гальванические элементы»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"؟",
        "zh": "根据“电化学：氧化还原与原电池”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de rast e?"
      },
      "options": [
        {
          "tr": "Pil çalıştıkça anot elektrotun kütlesi katlanır.",
          "en": "As the cell operates, the mass of the anode electrode increases.",
          "de": "Während die Zelle arbeitet, nimmt die Masse der Anode zu.",
          "fr": "Pendant le fonctionnement de la pile, la masse de l'anode augmente.",
          "ru": "При работе элемента масса анода увеличивается.",
          "ar": "أثناء عمل الخلية تزداد كتلة قطب الأنود.",
          "zh": "电池工作时，阳极质量增加。",
          "ku": "Dema pîl dixebite, girseya anodê zêde dibe."
        },
        {
          "tr": "Nernst eşitliğinde pil potansiyeli derişimden etkilenmez.",
          "en": "In the Nernst equation, battery potential is not affected by concentration.",
          "de": "In der Nernst-Gleichung wird das Batteriepotential nicht durch die Konzentration beeinflusst.",
          "fr": "Dans l’équation de Nernst, le potentiel de la batterie n’est pas affecté par la concentration.",
          "ru": "В уравнении Нернста концентрация не влияет на потенциал батареи.",
          "ar": "في معادلة نيرنست، لا يتأثر جهد البطارية بالتركيز.",
          "zh": "在能斯特方程中，电池电位不受浓度影响。",
          "ku": "Di hevkêşana Nernst de, potansiyela bataryayê ji hêla konsantrebûnê ve nayê bandor kirin."
        },
        {
          "tr": "Ekzotermik bir pil tepkimesinde sıcaklık artırılırsa pil gerilimi artar.",
          "en": "For an exothermic cell reaction, raising the temperature increases the cell voltage.",
          "de": "Bei einer exothermen Zellreaktion steigt die Zellspannung, wenn die Temperatur erhöht wird.",
          "fr": "Pour une réaction de pile exothermique, une hausse de température augmente la tension de la pile.",
          "ru": "Для экзотермической реакции в элементе повышение температуры увеличивает напряжение элемента.",
          "ar": "في تفاعل خلية طارد للحرارة، يؤدي رفع درجة الحرارة إلى زيادة جهد الخلية.",
          "zh": "对放热的电池反应，升高温度会使电池电压升高。",
          "ku": "Di reaksiyoneke pîlê ya ekzotermîk de, zêdekirina germahiyê voltaja pîlê zêde dike."
        },
        {
          "tr": "Standart pil potansiyeli: E°pil = E°yüks(anot) + E°ind(katot) tur; E°pil > 0 ise tepkime istemlidir.",
          "en": "Standard cell potential: E°cell = E°ox(anode) + E°red(cathode); if E°cell > 0, the reaction is spontaneous.",
          "de": "Standardzellpotential: E°Zelle = E°Ox(Anode) + E°Red(Kathode); ist E°Zelle > 0, verläuft die Reaktion freiwillig (spontan).",
          "fr": "Potentiel standard de pile : E°pile = E°ox(anode) + E°réd(cathode) ; si E°pile > 0, la réaction est spontanée.",
          "ru": "Стандартный потенциал элемента: E°эл = E°ок(анод) + E°восст(катод); если E°эл > 0, реакция протекает самопроизвольно.",
          "ar": "جهد الخلية القياسي: E°خلية = E°تأكسد(الأنود) + E°اختزال(الكاثود)؛ إذا كان E°خلية > 0 فالتفاعل تلقائي.",
          "zh": "标准电池电势：E°电池 = E°氧化(阳极) + E°还原(阴极)；若 E°电池 > 0，则反应自发进行。",
          "ku": "Potansiyela standard a pîlê: E°pîl = E°oks(anod) + E°red(katod); heke E°pîl > 0 be, reaksiyon xweber e."
        },
        {
          "tr": "Daniell pilinde bakır elektrot anot olarak davranır.",
          "en": "In the Daniell battery, the copper electrode acts as the anode.",
          "de": "Bei der Daniell-Batterie fungiert die Kupferelektrode als Anode.",
          "fr": "Dans la batterie Daniell, l’électrode de cuivre fait office d’anode.",
          "ru": "В батарее Дэниела медный электрод действует как анод.",
          "ar": "في بطارية دانييل، يعمل القطب النحاسي بمثابة الأنود.",
          "zh": "在丹尼尔电池中，铜电极充当阳极。",
          "ku": "Di pîlê Daniell de, elektroda sifir wekî anode tevdigere."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Standart pil potansiyeli: E°pil = E°yüks(anot) + E°ind(katot) tur; E°pil > 0 ise tepkime istemlidir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Standard cell potential: E°cell = E°ox(anode) + E°red(cathode); if E°cell > 0, the reaction is spontaneous.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Standardzellpotential: E°Zelle = E°Ox(Anode) + E°Red(Kathode); ist E°Zelle > 0, verläuft die Reaktion freiwillig (spontan).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Potentiel standard de pile : E°pile = E°ox(anode) + E°réd(cathode) ; si E°pile > 0, la réaction est spontanée.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Стандартный потенциал элемента: E°эл = E°ок(анод) + E°восст(катод); если E°эл > 0, реакция протекает самопроизвольно.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"جهد الخلية القياسي: E°خلية = E°تأكسد(الأنود) + E°اختزال(الكاثود)؛ إذا كان E°خلية > 0 فالتفاعل تلقائي.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“标准电池电势：E°电池 = E°氧化(阳极) + E°还原(阴极)；若 E°电池 > 0，则反应自发进行。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Potansiyela standard a pîlê: E°pîl = E°oks(anod) + E°red(katod); heke E°pîl > 0 be, reaksiyon xweber e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin05",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimya ve Elektrik: Redoks ve Galvanik Piller sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Electrochemistry: Redox & Galvanic, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Elektrochemie: Redox & Galvanische Zellen: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Électrochimie: Redox & Piles Galvaniques, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Электрохимия: ОВР и гальванические элементы», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“电化学：氧化还原与原电池”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Anot çözeltisine su eklendiğinde pil gerilimi düşer.",
          "en": "When water is added to the anode solution, the battery voltage decreases.",
          "de": "Wenn der Anodenlösung Wasser zugesetzt wird, sinkt die Batteriespannung.",
          "fr": "Lorsque de l'eau est ajoutée à la solution anodique, la tension de la batterie diminue.",
          "ru": "При добавлении воды в анодный раствор напряжение батареи снижается.",
          "ar": "عند إضافة الماء إلى محلول الأنود، ينخفض ​​جهد البطارية.",
          "zh": "当阳极溶液中添加水时，电池电压会降低。",
          "ku": "Dema ku av li çareseriya anodê tê zêdekirin, voltaja pîlê kêm dibe."
        },
        {
          "tr": "Derişim pillerinde derişimi büyük olan hücre anottur.",
          "en": "In concentration batteries, the cell with the highest concentration is the anode.",
          "de": "Bei Konzentrationsbatterien ist die Zelle mit der höchsten Konzentration die Anode.",
          "fr": "Dans les batteries à concentration, la cellule la plus concentrée est l’anode.",
          "ru": "В концентрационных батареях анодом является элемент с наибольшей концентрацией.",
          "ar": "في بطاريات التركيز، الخلية ذات التركيز الأعلى هي الأنود.",
          "zh": "在浓差电池中，浓度最高的电池是阳极。",
          "ku": "Di pîlên tîrbûnê de hucreya ku tîrbûna wê mezintir e anod e."
        },
        {
          "tr": "Tepkime 2 ile çarpılırsa E°pil de 2 ile çarpılır.",
          "en": "If the reaction is multiplied by 2, E°pil is also multiplied by 2.",
          "de": "Wenn die Reaktion mit 2 multipliziert wird, wird auch E°pil mit 2 multipliziert.",
          "fr": "Si la réaction est multipliée par 2, E°pil est également multiplié par 2.",
          "ru": "Если реакцию умножить на 2, E°pil также умножится на 2.",
          "ar": "إذا تم ضرب التفاعل بـ 2، يتم ضرب E°pil أيضًا بـ 2.",
          "zh": "如果反应乘以 2，则 E°pil 也乘以 2。",
          "ku": "Ger reaksîyon bi 2-yê were zêdekirin, E°pil jî bi 2-yê tê zêdekirin."
        },
        {
          "tr": "Elektron alan madde yükseltgenmiştir.",
          "en": "The substance that receives electrons is oxidized.",
          "de": "Die Substanz, die Elektronen aufnimmt, wird oxidiert.",
          "fr": "La substance qui reçoit les électrons est oxydée.",
          "ru": "Вещество, получившее электроны, окисляется.",
          "ar": "تتأكسد المادة التي تستقبل الإلكترونات.",
          "zh": "接受电子的物质被氧化。",
          "ku": "Madeya ku elektronan distîne tê oksîdan."
        },
        {
          "tr": "Standart Hidrojen Elektrodu (SHE): 25 °C, 1 atm H2 gazı ve 1 M H+ çözeltisi içerir; potansiyeli 0,00 V kabul edilir.",
          "en": "Standard Hydrogen Electrode (SHE): 25 °C, contains 1 atm H2 gas and 1 M H+ solution; potential is accepted as 0.00 V.",
          "de": "Standard-Wasserstoffelektrode (SHE): 25 °C, enthält 1 atm H2-Gas und 1 M H+-Lösung; Das Potential wird mit 0,00 V angenommen.",
          "fr": "Électrode à hydrogène standard (SHE) : 25 °C, contient 1 atm de gaz H2 et 1 M de solution H+ ; le potentiel est accepté comme 0,00 V.",
          "ru": "Стандартный водородный электрод (SHE): 25 °C, содержит 1 атм газа H2 и 1 M раствор H+; потенциал принимается равным 0,00 В.",
          "ar": "قطب الهيدروجين القياسي (SHE): عند 25 °C يحتوي على غاز H2 تحت ضغط 1 atm ومحلول H+ تركيزه 1 M؛ ويُعتبر جهده 0.00 V.",
          "zh": "标准氢电极（SHE）：25℃，含有1atm H2气体和1M H+溶液；电位接受为 0.00 V。",
          "ku": "Elektroda Hîdrojenê ya Standard (SHE): li 25 °C gaza H2 ya 1 atm û çareseriya H+ ya 1 M dihewîne; potansiyela wê 0,00 V tê qebûlkirin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Standart Hidrojen Elektrodu (SHE): 25 °C, 1 atm H2 gazı ve 1 M H+ çözeltisi içerir; potansiyeli 0,00 V kabul edilir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Standard Hydrogen Electrode (SHE): 25 °C, contains 1 atm H2 gas and 1 M H+ solution; potential is accepted as 0.00 V.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Standard-Wasserstoffelektrode (SHE): 25 °C, enthält 1 atm H2-Gas und 1 M H+-Lösung; Das Potential wird mit 0,00 V angenommen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Électrode à hydrogène standard (SHE) : 25 °C, contient 1 atm de gaz H2 et 1 M de solution H+ ; le potentiel est accepté comme 0,00 V.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Стандартный водородный электрод (SHE): 25 °C, содержит 1 атм газа H2 и 1 M раствор H+; потенциал принимается равным 0,00 В.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قطب الهيدروجين القياسي (SHE): عند 25 °C يحتوي على غاز H2 تحت ضغط 1 atm ومحلول H+ تركيزه 1 M؛ ويُعتبر جهده 0.00 V.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“标准氢电极（SHE）：25℃，含有1atm H2气体和1M H+溶液；电位接受为 0.00 V。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Elektroda Hîdrojenê ya Standard (SHE): li 25 °C gaza H2 ya 1 atm û çareseriya H+ ya 1 M dihewîne; potansiyela wê 0,00 V tê qebûlkirin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin06",
      "stem": {
        "tr": "Aşağıda Kimya ve Elektrik: Redoks ve Galvanik Piller ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Electrochemistry: Redox & Galvanic, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Elektrochemie: Redox & Galvanische Zellen: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Électrochimie: Redox & Piles Galvaniques, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Электрохимия: ОВР и гальванические элементы», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“电化学：氧化还原与原电池”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Aktifliği büyük olan metal anottur (yükseltgenme potansiyeli büyük olan metal anot olur).",
          "en": "The metal with greater activity is the anode (the metal with greater oxidation potential becomes the anode).",
          "de": "Das Metall mit der größeren Aktivität ist die Anode (das Metall mit dem größeren Oxidationspotential wird zur Anode).",
          "fr": "Le métal ayant la plus grande activité est l'anode (le métal ayant le plus grand potentiel d'oxydation devient l'anode).",
          "ru": "Металл с большей активностью является анодом (анодом становится металл с большим окислительным потенциалом).",
          "ar": "الفلز الأكثر نشاطًا هو الأنود (الفلز ذو جهد التأكسد الأكبر يكون الأنود).",
          "zh": "活性较大的金属是阳极（氧化电位较大的金属成为阳极）。",
          "ku": "Metala çalaktir anod e (metala ku potansiyela wê ya oksîdasyonê mezintir e dibe anod)."
        },
        {
          "tr": "Katot çözeltisine su eklendiğinde pil gerilimi yükselir.",
          "en": "When water is added to the cathode solution, the battery voltage increases.",
          "de": "Wenn der Kathodenlösung Wasser zugesetzt wird, erhöht sich die Batteriespannung.",
          "fr": "Lorsque de l'eau est ajoutée à la solution cathodique, la tension de la batterie augmente.",
          "ru": "При добавлении воды в катодный раствор напряжение батареи увеличивается.",
          "ar": "عند إضافة الماء إلى محلول الكاثود، يزداد جهد البطارية.",
          "zh": "当阴极溶液中添加水时，电池电压增加。",
          "ku": "Dema ku av li çareseriya katodê tê zêdekirin, voltaja pîlê zêde dibe."
        },
        {
          "tr": "Derişimler eşitlendiğinde pil gerilimi maksimuma ulaşır.",
          "en": "When the concentrations are equal, the battery voltage reaches its maximum.",
          "de": "Bei gleichen Konzentrationen erreicht die Batteriespannung ihr Maximum.",
          "fr": "Lorsque les concentrations sont égales, la tension de la batterie atteint son maximum.",
          "ru": "При равенстве концентраций напряжение батареи достигает максимума.",
          "ar": "عندما تكون التركيزات متساوية، يصل جهد البطارية إلى الحد الأقصى.",
          "zh": "当浓度相等时，电池电压达到最大值。",
          "ku": "Dema ku konsantre wekhev bin, voltaja pîlê digihîje herî zêde."
        },
        {
          "tr": "Tuz köprüsü olmadan da galvanik piller sonsuza dek çalışır.",
          "en": "Even without a salt bridge, galvanic batteries work forever.",
          "de": "Auch ohne Salzbrücke funktionieren galvanische Batterien ewig.",
          "fr": "Même sans pont salin, les batteries galvaniques fonctionnent éternellement.",
          "ru": "Даже без солевого мостика гальванические батареи работают вечно.",
          "ar": "حتى بدون جسر الملح، تعمل البطاريات الكلفانية إلى الأبد.",
          "zh": "即使没有盐桥，原电池也能永远工作。",
          "ku": "Tewra bêyî pira xwê, bataryayên galvanîk her û her dixebitin."
        },
        {
          "tr": "Anotta indirgenme gerçekleşir.",
          "en": "Reduction takes place at the anode.",
          "de": "An der Anode findet die Reduktion statt.",
          "fr": "La réduction a lieu à l'anode.",
          "ru": "Восстановление происходит на аноде.",
          "ar": "يحدث الاختزال عند الأنود.",
          "zh": "还原发生在阳极。",
          "ku": "Reduksiyon li anodê pêk tê."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Aktifliği büyük olan metal anottur (yükseltgenme potansiyeli büyük olan metal anot olur).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The metal with greater activity is the anode (the metal with greater oxidation potential becomes the anode).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Das Metall mit der größeren Aktivität ist die Anode (das Metall mit dem größeren Oxidationspotential wird zur Anode).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le métal ayant la plus grande activité est l'anode (le métal ayant le plus grand potentiel d'oxydation devient l'anode).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Металл с большей активностью является анодом (анодом становится металл с большим окислительным потенциалом).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"الفلز الأكثر نشاطًا هو الأنود (الفلز ذو جهد التأكسد الأكبر يكون الأنود).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“活性较大的金属是阳极（氧化电位较大的金属成为阳极）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Metala çalaktir anod e (metala ku potansiyela wê ya oksîdasyonê mezintir e dibe anod).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin07",
      "stem": {
        "tr": "Kimya ve Elektrik: Redoks ve Galvanik Piller konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Electrochemistry: Redox & Galvanic, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Elektrochemie: Redox & Galvanische Zellen: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Électrochimie: Redox & Piles Galvaniques, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Электрохимия: ОВР и гальванические элементы», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“电化学：氧化还原与原电池”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Nernst eşitliğinde pil potansiyeli derişimden etkilenmez.",
          "en": "In the Nernst equation, battery potential is not affected by concentration.",
          "de": "In der Nernst-Gleichung wird das Batteriepotential nicht durch die Konzentration beeinflusst.",
          "fr": "Dans l’équation de Nernst, le potentiel de la batterie n’est pas affecté par la concentration.",
          "ru": "В уравнении Нернста концентрация не влияет на потенциал батареи.",
          "ar": "في معادلة نيرنست، لا يتأثر جهد البطارية بالتركيز.",
          "zh": "在能斯特方程中，电池电位不受浓度影响。",
          "ku": "Di hevkêşana Nernst de, potansiyela bataryayê ji hêla konsantrebûnê ve nayê bandor kirin."
        },
        {
          "tr": "Pil çalıştıkça anot elektrot kütlesi genellikle aşınarak azalır; katot elektrot üzerinde madde toplanır kütlesi artar.",
          "en": "As the cell operates, the mass of the anode electrode usually decreases as it is consumed; substance deposits on the cathode electrode and its mass increases.",
          "de": "Während die Zelle arbeitet, nimmt die Masse der Anode meist ab, da sie sich auflöst; an der Kathode scheidet sich Stoff ab und ihre Masse nimmt zu.",
          "fr": "Pendant le fonctionnement de la pile, la masse de l'anode diminue généralement car elle se dissout ; de la matière se dépose sur la cathode, dont la masse augmente.",
          "ru": "При работе элемента масса анода обычно уменьшается, так как он растворяется; на катоде осаждается вещество, и его масса увеличивается.",
          "ar": "أثناء عمل الخلية تنقص كتلة قطب الأنود عادةً لأنه يتآكل، وتترسب المادة على قطب الكاثود فتزداد كتلته.",
          "zh": "电池工作时，阳极因溶解而质量通常减小；物质在阴极上沉积，阴极质量增加。",
          "ku": "Dema pîl dixebite, girseya anodê bi gelemperî kêm dibe ji ber ku dihele; li ser katodê made kom dibe û girseya wê zêde dibe."
        },
        {
          "tr": "Ekzotermik bir pil tepkimesinde sıcaklık artırılırsa pil gerilimi artar.",
          "en": "For an exothermic cell reaction, raising the temperature increases the cell voltage.",
          "de": "Bei einer exothermen Zellreaktion steigt die Zellspannung, wenn die Temperatur erhöht wird.",
          "fr": "Pour une réaction de pile exothermique, une hausse de température augmente la tension de la pile.",
          "ru": "Для экзотермической реакции в элементе повышение температуры увеличивает напряжение элемента.",
          "ar": "في تفاعل خلية طارد للحرارة، يؤدي رفع درجة الحرارة إلى زيادة جهد الخلية.",
          "zh": "对放热的电池反应，升高温度会使电池电压升高。",
          "ku": "Di reaksiyoneke pîlê ya ekzotermîk de, zêdekirina germahiyê voltaja pîlê zêde dike."
        },
        {
          "tr": "Daniell pilinde bakır elektrot anot olarak davranır.",
          "en": "In the Daniell battery, the copper electrode acts as the anode.",
          "de": "Bei der Daniell-Batterie fungiert die Kupferelektrode als Anode.",
          "fr": "Dans la batterie Daniell, l’électrode de cuivre fait office d’anode.",
          "ru": "В батарее Дэниела медный электрод действует как анод.",
          "ar": "في بطارية دانييل، يعمل القطب النحاسي بمثابة الأنود.",
          "zh": "在丹尼尔电池中，铜电极充当阳极。",
          "ku": "Di pîlê Daniell de, elektroda sifir wekî anode tevdigere."
        },
        {
          "tr": "Tuz köprüsündeki anyonlar katoda gider.",
          "en": "Anions in the salt bridge go to the cathode.",
          "de": "Anionen in der Salzbrücke gelangen zur Kathode.",
          "fr": "Les anions du pont salin vont à la cathode.",
          "ru": "Анионы в солевом мостике идут к катоду.",
          "ar": "تذهب الأنيونات الموجودة في جسر الملح إلى الكاثود.",
          "zh": "盐桥中的阴离子到达阴极。",
          "ku": "Anyonên di pira xwê de diçin katodê."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Pil çalıştıkça anot elektrot kütlesi genellikle aşınarak azalır; katot elektrot üzerinde madde toplanır kütlesi artar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"As the cell operates, the mass of the anode electrode usually decreases as it is consumed; substance deposits on the cathode electrode and its mass increases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Während die Zelle arbeitet, nimmt die Masse der Anode meist ab, da sie sich auflöst; an der Kathode scheidet sich Stoff ab und ihre Masse nimmt zu.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Pendant le fonctionnement de la pile, la masse de l'anode diminue généralement car elle se dissout ; de la matière se dépose sur la cathode, dont la masse augmente.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «При работе элемента масса анода обычно уменьшается, так как он растворяется; на катоде осаждается вещество, и его масса увеличивается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"أثناء عمل الخلية تنقص كتلة قطب الأنود عادةً لأنه يتآكل، وتترسب المادة على قطب الكاثود فتزداد كتلته.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“电池工作时，阳极因溶解而质量通常减小；物质在阴极上沉积，阴极质量增加。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Dema pîl dixebite, girseya anodê bi gelemperî kêm dibe ji ber ku dihele; li ser katodê made kom dibe û girseya wê zêde dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin08",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimya ve Elektrik: Redoks ve Galvanik Piller ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Electrochemistry: Redox & Galvanic, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Elektrochemie: Redox & Galvanische Zellen: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Électrochimie: Redox & Piles Galvaniques, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Электрохимия: ОВР и гальванические элементы», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“电化学：氧化还原与原电池”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Derişim pillerinde derişimi büyük olan hücre anottur.",
          "en": "In concentration batteries, the cell with the highest concentration is the anode.",
          "de": "Bei Konzentrationsbatterien ist die Zelle mit der höchsten Konzentration die Anode.",
          "fr": "Dans les batteries à concentration, la cellule la plus concentrée est l’anode.",
          "ru": "В концентрационных батареях анодом является элемент с наибольшей концентрацией.",
          "ar": "في بطاريات التركيز، الخلية ذات التركيز الأعلى هي الأنود.",
          "zh": "在浓差电池中，浓度最高的电池是阳极。",
          "ku": "Di pîlên tîrbûnê de hucreya ku tîrbûna wê mezintir e anod e."
        },
        {
          "tr": "Tepkime 2 ile çarpılırsa E°pil de 2 ile çarpılır.",
          "en": "If the reaction is multiplied by 2, E°pil is also multiplied by 2.",
          "de": "Wenn die Reaktion mit 2 multipliziert wird, wird auch E°pil mit 2 multipliziert.",
          "fr": "Si la réaction est multipliée par 2, E°pil est également multiplié par 2.",
          "ru": "Если реакцию умножить на 2, E°pil также умножится на 2.",
          "ar": "إذا تم ضرب التفاعل بـ 2، يتم ضرب E°pil أيضًا بـ 2.",
          "zh": "如果反应乘以 2，则 E°pil 也乘以 2。",
          "ku": "Ger reaksîyon bi 2-yê were zêdekirin, E°pil jî bi 2-yê tê zêdekirin."
        },
        {
          "tr": "Anot yarı hücresine saf su eklenirse anot iyon derişimi azalır, denge ürünlere kayar ve pil potansiyeli artar.",
          "en": "If pure water is added to the anode half cell, the anode ion concentration decreases, the balance shifts to products and the battery potential increases.",
          "de": "Fügt man der Anodenhalbzelle reines Wasser hinzu, sinkt die Anodenionenkonzentration, das Gleichgewicht verschiebt sich zu Produkten und das Batteriepotential steigt.",
          "fr": "Si de l'eau pure est ajoutée à la demi-cellule de l'anode, la concentration en ions de l'anode diminue, l'équilibre se déplace vers les produits et le potentiel de la batterie augmente.",
          "ru": "Если в анодную полуячейку добавить чистую воду, концентрация анодных ионов уменьшится, баланс сместится в сторону продуктов и потенциал батареи увеличится.",
          "ar": "إذا تمت إضافة الماء النقي إلى نصف خلية الأنود، ينخفض ​​تركيز أيون الأنود، ويتحول التوازن إلى المنتجات وتزداد إمكانات البطارية.",
          "zh": "如果将纯水添加到阳极半电池中，则阳极离子浓度降低，平衡转向产物并且电池电势增加。",
          "ku": "Ger ava paqij li nîv şaneya anodê were zêdekirin, kombûna îyona anodê kêm dibe, hevseng diguhezîne hilberan û potansiyela pîlê zêde dibe."
        },
        {
          "tr": "Elektron alan madde yükseltgenmiştir.",
          "en": "The substance that receives electrons is oxidized.",
          "de": "Die Substanz, die Elektronen aufnimmt, wird oxidiert.",
          "fr": "La substance qui reçoit les électrons est oxydée.",
          "ru": "Вещество, получившее электроны, окисляется.",
          "ar": "تتأكسد المادة التي تستقبل الإلكترونات.",
          "zh": "接受电子的物质被氧化。",
          "ku": "Madeya ku elektronan distîne tê oksîdan."
        },
        {
          "tr": "E°pil negatif olduğunda pil kendiliğinden çalışır ve elektrik üretir.",
          "en": "When E°cell is negative, the cell works by itself and produces electricity.",
          "de": "Wenn E°Zelle negativ ist, arbeitet die Zelle von selbst und erzeugt elektrischen Strom.",
          "fr": "Lorsque E°pile est négatif, la pile fonctionne d'elle-même et produit de l'électricité.",
          "ru": "Когда E°эл отрицателен, элемент работает самопроизвольно и вырабатывает электричество.",
          "ar": "عندما يكون E°خلية سالبًا تعمل الخلية تلقائيًا وتنتج الكهرباء.",
          "zh": "当 E°电池 为负值时，电池能自发工作并产生电能。",
          "ku": "Dema E°pîl neyînî be, pîl bi xwe dixebite û elektrîkê çêdike."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Anot yarı hücresine saf su eklenirse anot iyon derişimi azalır, denge ürünlere kayar ve pil potansiyeli artar.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If pure water is added to the anode half cell, the anode ion concentration decreases, the balance shifts to products and the battery potential increases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Fügt man der Anodenhalbzelle reines Wasser hinzu, sinkt die Anodenionenkonzentration, das Gleichgewicht verschiebt sich zu Produkten und das Batteriepotential steigt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si de l'eau pure est ajoutée à la demi-cellule de l'anode, la concentration en ions de l'anode diminue, l'équilibre se déplace vers les produits et le potentiel de la batterie augmente.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если в анодную полуячейку добавить чистую воду, концентрация анодных ионов уменьшится, баланс сместится в сторону продуктов и потенциал батареи увеличится.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا تمت إضافة الماء النقي إلى نصف خلية الأنود، ينخفض ​​تركيز أيون الأنود، ويتحول التوازن إلى المنتجات وتزداد إمكانات البطارية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果将纯水添加到阳极半电池中，则阳极离子浓度降低，平衡转向产物并且电池电势增加。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger ava paqij li nîv şaneya anodê were zêdekirin, kombûna îyona anodê kêm dibe, hevseng diguhezîne hilberan û potansiyela pîlê zêde dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin09",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimya ve Elektrik: Redoks ve Galvanik Piller konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Electrochemistry: Redox & Galvanic, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Elektrochemie: Redox & Galvanische Zellen die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Électrochimie: Redox & Piles Galvaniques, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Электрохимия: ОВР и гальванические элементы», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“电化学：氧化还原与原电池”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Derişimler eşitlendiğinde pil gerilimi maksimuma ulaşır.",
          "en": "When the concentrations are equal, the battery voltage reaches its maximum.",
          "de": "Bei gleichen Konzentrationen erreicht die Batteriespannung ihr Maximum.",
          "fr": "Lorsque les concentrations sont égales, la tension de la batterie atteint son maximum.",
          "ru": "При равенстве концентраций напряжение батареи достигает максимума.",
          "ar": "عندما تكون التركيزات متساوية، يصل جهد البطارية إلى الحد الأقصى.",
          "zh": "当浓度相等时，电池电压达到最大值。",
          "ku": "Dema ku konsantre wekhev bin, voltaja pîlê digihîje herî zêde."
        },
        {
          "tr": "Tuz köprüsü olmadan da galvanik piller sonsuza dek çalışır.",
          "en": "Even without a salt bridge, galvanic batteries work forever.",
          "de": "Auch ohne Salzbrücke funktionieren galvanische Batterien ewig.",
          "fr": "Même sans pont salin, les batteries galvaniques fonctionnent éternellement.",
          "ru": "Даже без солевого мостика гальванические батареи работают вечно.",
          "ar": "حتى بدون جسر الملح، تعمل البطاريات الكلفانية إلى الأبد.",
          "zh": "即使没有盐桥，原电池也能永远工作。",
          "ku": "Tewra bêyî pira xwê, bataryayên galvanîk her û her dixebitin."
        },
        {
          "tr": "Anotta indirgenme gerçekleşir.",
          "en": "Reduction takes place at the anode.",
          "de": "An der Anode findet die Reduktion statt.",
          "fr": "La réduction a lieu à l'anode.",
          "ru": "Восстановление происходит на аноде.",
          "ar": "يحدث الاختزال عند الأنود.",
          "zh": "还原发生在阳极。",
          "ku": "Reduksiyon li anodê pêk tê."
        },
        {
          "tr": "Katot yarı hücresine saf su eklenirse katot iyon derişimi azalır, denge girenlere kayar ve pil potansiyeli azalır.",
          "en": "If pure water is added to the cathode half cell, the cathode ion concentration decreases, the balance shifts to the reactants and the battery potential decreases.",
          "de": "Fügt man der Kathodenhalbzelle reines Wasser hinzu, sinkt die Kathodenionenkonzentration, das Gleichgewicht verschiebt sich zu den Reaktanten und das Batteriepotential sinkt.",
          "fr": "Si de l'eau pure est ajoutée à la demi-cellule cathodique, la concentration en ions cathodiques diminue, l'équilibre se déplace vers les réactifs et le potentiel de la batterie diminue.",
          "ru": "Если в катодную полуячейку добавить чистую воду, концентрация катодных ионов уменьшится, баланс сместится в сторону реагентов и потенциал батареи уменьшится.",
          "ar": "إذا تمت إضافة الماء النقي إلى نصف خلية الكاثود، ينخفض ​​تركيز أيون الكاثود، وينتقل التوازن إلى المواد المتفاعلة، وتنخفض إمكانات البطارية.",
          "zh": "如果向阴极半电池添加纯水，则阴极离子浓度降低，平衡转向反应物，电池电势降低。",
          "ku": "Ger ava paqij li nîv şaneya katodê were zêdekirin, kombûna îyona katodê kêm dibe, hevseng ber bi reaktantan ve diçe û potansiyela pîlê kêm dibe."
        },
        {
          "tr": "Standart hidrojen elektrodunun gerilimi 1,00 V tur.",
          "en": "The voltage of the standard hydrogen electrode is 1.00 V.",
          "de": "Die Spannung der Standard-Wasserstoffelektrode beträgt 1,00 V.",
          "fr": "La tension de l'électrode à hydrogène standard est de 1,00 V.",
          "ru": "Напряжение стандартного водородного электрода составляет 1,00 В.",
          "ar": "جهد قطب الهيدروجين القياسي هو 1.00 V.",
          "zh": "标准氢电极的电压为1.00V。",
          "ku": "Voltaja elektroda hîdrojenê ya standard 1,00 V e."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Katot yarı hücresine saf su eklenirse katot iyon derişimi azalır, denge girenlere kayar ve pil potansiyeli azalır.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If pure water is added to the cathode half cell, the cathode ion concentration decreases, the balance shifts to the reactants and the battery potential decreases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Fügt man der Kathodenhalbzelle reines Wasser hinzu, sinkt die Kathodenionenkonzentration, das Gleichgewicht verschiebt sich zu den Reaktanten und das Batteriepotential sinkt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si de l'eau pure est ajoutée à la demi-cellule cathodique, la concentration en ions cathodiques diminue, l'équilibre se déplace vers les réactifs et le potentiel de la batterie diminue.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если в катодную полуячейку добавить чистую воду, концентрация катодных ионов уменьшится, баланс сместится в сторону реагентов и потенциал батареи уменьшится.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا تمت إضافة الماء النقي إلى نصف خلية الكاثود، ينخفض ​​تركيز أيون الكاثود، وينتقل التوازن إلى المواد المتفاعلة، وتنخفض إمكانات البطارية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果向阴极半电池添加纯水，则阴极离子浓度降低，平衡转向反应物，电池电势降低。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger ava paqij li nîv şaneya katodê were zêdekirin, kombûna îyona katodê kêm dibe, hevseng ber bi reaktantan ve diçe û potansiyela pîlê kêm dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin10",
      "stem": {
        "tr": "Kimya dersinde Kimya ve Elektrik: Redoks ve Galvanik Piller ünitesi incelenirken ileri sürülen aşağıdaki yargılardan hangisi bilimsel bir gerçektir?",
        "en": "When analyzing the unit Electrochemistry: Redox & Galvanic, which of the following propositions is a verified scientific fact?",
        "de": "Bei der Untersuchung von Elektrochemie: Redox & Galvanische Zellen: Welche Behauptung entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l'unité Électrochimie: Redox & Piles Galvaniques, laquelle des affirmations suivantes est un fait scientifique avéré ?",
        "ru": "При рассмотрении темы «Электрохимия: ОВР и гальванические элементы», какое из следующих суждений выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي من الأحكام التالية تعتبر حقيقة علمية مثبتة؟",
        "zh": "在系统辨析“电化学：氧化还原与原电池”核心规律时，下列关于该主题的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" tê kirin, kîjan daraz rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Ekzotermik bir pil tepkimesinde sıcaklık artırılırsa pil gerilimi artar.",
          "en": "For an exothermic cell reaction, raising the temperature increases the cell voltage.",
          "de": "Bei einer exothermen Zellreaktion steigt die Zellspannung, wenn die Temperatur erhöht wird.",
          "fr": "Pour une réaction de pile exothermique, une hausse de température augmente la tension de la pile.",
          "ru": "Для экзотермической реакции в элементе повышение температуры увеличивает напряжение элемента.",
          "ar": "في تفاعل خلية طارد للحرارة، يؤدي رفع درجة الحرارة إلى زيادة جهد الخلية.",
          "zh": "对放热的电池反应，升高温度会使电池电压升高。",
          "ku": "Di reaksiyoneke pîlê ya ekzotermîk de, zêdekirina germahiyê voltaja pîlê zêde dike."
        },
        {
          "tr": "Daniell pilinde bakır elektrot anot olarak davranır.",
          "en": "In the Daniell battery, the copper electrode acts as the anode.",
          "de": "Bei der Daniell-Batterie fungiert die Kupferelektrode als Anode.",
          "fr": "Dans la batterie Daniell, l’électrode de cuivre fait office d’anode.",
          "ru": "В батарее Дэниела медный электрод действует как анод.",
          "ar": "في بطارية دانييل، يعمل القطب النحاسي بمثابة الأنود.",
          "zh": "在丹尼尔电池中，铜电极充当阳极。",
          "ku": "Di pîlê Daniell de, elektroda sifir wekî anode tevdigere."
        },
        {
          "tr": "Tuz köprüsündeki anyonlar katoda gider.",
          "en": "Anions in the salt bridge go to the cathode.",
          "de": "Anionen in der Salzbrücke gelangen zur Kathode.",
          "fr": "Les anions du pont salin vont à la cathode.",
          "ru": "Анионы в солевом мостике идут к катоду.",
          "ar": "تذهب الأنيونات الموجودة في جسر الملح إلى الكاثود.",
          "zh": "盐桥中的阴离子到达阴极。",
          "ku": "Anyonên di pira xwê de diçin katodê."
        },
        {
          "tr": "İndirgenme potansiyeli büyük olan metal anot kutbudur.",
          "en": "The metal with the greater reduction potential is the anode.",
          "de": "Das Metall mit dem größeren Reduktionspotential ist die Anode.",
          "fr": "Le métal ayant le plus grand potentiel de réduction est l'anode.",
          "ru": "Металл с большим потенциалом восстановления является анодом.",
          "ar": "الفلز ذو جهد الاختزال الأكبر هو الأنود.",
          "zh": "还原电势较大的金属是阳极。",
          "ku": "Metala ku potansiyela wê ya reduksiyonê mezintir e anod e."
        },
        {
          "tr": "Nernst Eşitliği: Epil = E°pil - (0,0592 / n) * log Q dur (n: aktarılan elektron mol sayısı, Q: anot/katot derişim oranı).",
          "en": "Nernst Equation: Epil = E°pil - (0.0592 / n) * log Q (n: number of electron moles transferred, Q: anode/cathode concentration ratio).",
          "de": "Nernst-Gleichung: Epil = E°pil - (0,0592 / n) * log Q (n: Anzahl der übertragenen Elektronenmole, Q: Konzentrationsverhältnis Anode/Kathode).",
          "fr": "Equation de Nernst : Epil = E°pil - (0,0592 / n) * log Q (n : nombre de moles électroniques transférées, Q : rapport de concentration anode/cathode).",
          "ru": "Уравнение Нернста: Epil = E°pil - (0,0592/n) * log Q (n: количество перенесенных молей электронов, Q: соотношение концентраций анода/катода).",
          "ar": "معادلة نرنست: Epil = E°pil - (0.0592 / n) * log Q (n: عدد مولات الإلكترون المنقولة، Q: نسبة تركيز الأنود/الكاثود).",
          "zh": "能斯特方程：Epil = E°pil - (0.0592 / n) * log Q（n：转移的电子摩尔数，Q：阳极/阴极浓度比）。",
          "ku": "Wekheviya Nernst: Epil = E°pil - (0,0592 / n) * log Q (n: hejmara molên elektronê yên ku hatine veguheztin, Q: rêjeya berhevdana anod/katod)."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Nernst Eşitliği: Epil = E°pil - (0,0592 / n) * log Q dur (n: aktarılan elektron mol sayısı, Q: anot/katot derişim oranı).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Nernst Equation: Epil = E°pil - (0.0592 / n) * log Q (n: number of electron moles transferred, Q: anode/cathode concentration ratio).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Nernst-Gleichung: Epil = E°pil - (0,0592 / n) * log Q (n: Anzahl der übertragenen Elektronenmole, Q: Konzentrationsverhältnis Anode/Kathode).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Equation de Nernst : Epil = E°pil - (0,0592 / n) * log Q (n : nombre de moles électroniques transférées, Q : rapport de concentration anode/cathode).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Уравнение Нернста: Epil = E°pil - (0,0592/n) * log Q (n: количество перенесенных молей электронов, Q: соотношение концентраций анода/катода).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"معادلة نرنست: Epil = E°pil - (0.0592 / n) * log Q (n: عدد مولات الإلكترون المنقولة، Q: نسبة تركيز الأنود/الكاثود).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“能斯特方程：Epil = E°pil - (0.0592 / n) * log Q（n：转移的电子摩尔数，Q：阳极/阴极浓度比）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Wekheviya Nernst: Epil = E°pil - (0,0592 / n) * log Q (n: hejmara molên elektronê yên ku hatine veguheztin, Q: rêjeya berhevdana anod/katod).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin11",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimya ve Elektrik: Redoks ve Galvanik Piller konusundaki temel kimyasal kurallar çerçevesinde doğru olan ifadedir?",
        "en": "Which of the following statements is accurate within the fundamental principles of Electrochemistry: Redox & Galvanic?",
        "de": "Welche Aussage ist im Rahmen der chemischen Gesetzmäßigkeiten von Elektrochemie: Redox & Galvanische Zellen zutreffend?",
        "fr": "Laquelle des propositions suivantes est scientifiquement exacte selon les lois de Électrochimie: Redox & Piles Galvaniques ?",
        "ru": "Какое из утверждений является верным в рамках фундаментальных законов темы «Электрохимия: ОВР и гальванические элементы»?",
        "ar": "أي مما يلي يعتبر حكماً صحيحاً ضمن القواعد الكيميائية الأساسية لوحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"؟",
        "zh": "根据“电化学：氧化还原与原电池”的基本化学原理，下列哪项阐述完全符合客观事实？",
        "ku": "Kîjan ji van vebijarkan di çarçoveya prensîbên beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de rast e?"
      },
      "options": [
        {
          "tr": "Derişim pilleri: Aynı elektrot ve aynı çözeltilerin farklı derişimleriyle kurulur; derişimi küçük olan yarı hücre ANOTTUR.",
          "en": "Concentration batteries: They are established with the same electrode and different concentrations of the same solutions; The half-cell with small concentration is ANODE.",
          "de": "Konzentrationsbatterien: Sie werden mit derselben Elektrode und unterschiedlichen Konzentrationen derselben Lösungen hergestellt; Die Halbzelle mit geringer Konzentration ist ANODE.",
          "fr": "Batteries à concentration : Elles sont établies avec la même électrode et des concentrations différentes des mêmes solutions ; La demi-cellule à faible concentration est ANODE.",
          "ru": "Концентрационные батареи: устанавливаются с одним и тем же электродом и разными концентрациями одних и тех же растворов; Полуэлемент с небольшой концентрацией – АНОД.",
          "ar": "بطاريات التركيز: يتم إنشاؤها بنفس القطب وتركيزات مختلفة لنفس المحاليل؛ نصف الخلية ذات التركيز الصغير هو الأنود.",
          "zh": "浓差电池：用相同的电极和不同浓度的相同溶液建立的；浓度小的半电池为阳极。",
          "ku": "Pîlên tîrbûnê: bi heman elektrodê û bi tîrbûnên cuda yên heman çareseriyê têne sazkirin; nîvhucreya ku tîrbûna wê kêmtir e ANOD e."
        },
        {
          "tr": "Tepkime 2 ile çarpılırsa E°pil de 2 ile çarpılır.",
          "en": "If the reaction is multiplied by 2, E°pil is also multiplied by 2.",
          "de": "Wenn die Reaktion mit 2 multipliziert wird, wird auch E°pil mit 2 multipliziert.",
          "fr": "Si la réaction est multipliée par 2, E°pil est également multiplié par 2.",
          "ru": "Если реакцию умножить на 2, E°pil также умножится на 2.",
          "ar": "إذا تم ضرب التفاعل بـ 2، يتم ضرب E°pil أيضًا بـ 2.",
          "zh": "如果反应乘以 2，则 E°pil 也乘以 2。",
          "ku": "Ger reaksîyon bi 2-yê were zêdekirin, E°pil jî bi 2-yê tê zêdekirin."
        },
        {
          "tr": "Elektron alan madde yükseltgenmiştir.",
          "en": "The substance that receives electrons is oxidized.",
          "de": "Die Substanz, die Elektronen aufnimmt, wird oxidiert.",
          "fr": "La substance qui reçoit les électrons est oxydée.",
          "ru": "Вещество, получившее электроны, окисляется.",
          "ar": "تتأكسد المادة التي تستقبل الإلكترونات.",
          "zh": "接受电子的物质被氧化。",
          "ku": "Madeya ku elektronan distîne tê oksîdan."
        },
        {
          "tr": "E°pil negatif olduğunda pil kendiliğinden çalışır ve elektrik üretir.",
          "en": "When E°cell is negative, the cell works by itself and produces electricity.",
          "de": "Wenn E°Zelle negativ ist, arbeitet die Zelle von selbst und erzeugt elektrischen Strom.",
          "fr": "Lorsque E°pile est négatif, la pile fonctionne d'elle-même et produit de l'électricité.",
          "ru": "Когда E°эл отрицателен, элемент работает самопроизвольно и вырабатывает электричество.",
          "ar": "عندما يكون E°خلية سالبًا تعمل الخلية تلقائيًا وتنتج الكهرباء.",
          "zh": "当 E°电池 为负值时，电池能自发工作并产生电能。",
          "ku": "Dema E°pîl neyînî be, pîl bi xwe dixebite û elektrîkê çêdike."
        },
        {
          "tr": "Pil çalıştıkça anot elektrotun kütlesi katlanır.",
          "en": "As the cell operates, the mass of the anode electrode increases.",
          "de": "Während die Zelle arbeitet, nimmt die Masse der Anode zu.",
          "fr": "Pendant le fonctionnement de la pile, la masse de l'anode augmente.",
          "ru": "При работе элемента масса анода увеличивается.",
          "ar": "أثناء عمل الخلية تزداد كتلة قطب الأنود.",
          "zh": "电池工作时，阳极质量增加。",
          "ku": "Dema pîl dixebite, girseya anodê zêde dibe."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Derişim pilleri: Aynı elektrot ve aynı çözeltilerin farklı derişimleriyle kurulur; derişimi küçük olan yarı hücre ANOTTUR.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Concentration batteries: They are established with the same electrode and different concentrations of the same solutions; The half-cell with small concentration is ANODE.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Konzentrationsbatterien: Sie werden mit derselben Elektrode und unterschiedlichen Konzentrationen derselben Lösungen hergestellt; Die Halbzelle mit geringer Konzentration ist ANODE.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Batteries à concentration : Elles sont établies avec la même électrode et des concentrations différentes des mêmes solutions ; La demi-cellule à faible concentration est ANODE.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Концентрационные батареи: устанавливаются с одним и тем же электродом и разными концентрациями одних и тех же растворов; Полуэлемент с небольшой концентрацией – АНОД.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"بطاريات التركيز: يتم إنشاؤها بنفس القطب وتركيزات مختلفة لنفس المحاليل؛ نصف الخلية ذات التركيز الصغير هو الأنود.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“浓差电池：用相同的电极和不同浓度的相同溶液建立的；浓度小的半电池为阳极。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Pîlên tîrbûnê: bi heman elektrodê û bi tîrbûnên cuda yên heman çareseriyê têne sazkirin; nîvhucreya ku tîrbûna wê kêmtir e ANOD e.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin12",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimya ve Elektrik: Redoks ve Galvanik Piller sorularında karşılaşılan konulardan hangisi doğru bir yargıdır?",
        "en": "In standard university entrance exams covering Electrochemistry: Redox & Galvanic, which assertion is scientifically correct?",
        "de": "In Hochschulaufnahmeprüfungen zur Einheit Elektrochemie: Redox & Galvanische Zellen: Welche Feststellung ist richtig?",
        "fr": "Dans les épreuves universitaires portant sur Électrochimie: Redox & Piles Galvaniques, quelle affirmation est correcte ?",
        "ru": "В экзаменационных заданиях по теме «Электрохимия: ОВР и гальванические элементы», какое положение является научным фактом?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي حكم يعتبر صحيحاً؟",
        "zh": "在高考“电化学：氧化还原与原电池”经典考题中，下列有关化学规律的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de, kîjan daraz rast e?"
      },
      "options": [
        {
          "tr": "Tuz köprüsü olmadan da galvanik piller sonsuza dek çalışır.",
          "en": "Even without a salt bridge, galvanic batteries work forever.",
          "de": "Auch ohne Salzbrücke funktionieren galvanische Batterien ewig.",
          "fr": "Même sans pont salin, les batteries galvaniques fonctionnent éternellement.",
          "ru": "Даже без солевого мостика гальванические батареи работают вечно.",
          "ar": "حتى بدون جسر الملح، تعمل البطاريات الكلفانية إلى الأبد.",
          "zh": "即使没有盐桥，原电池也能永远工作。",
          "ku": "Tewra bêyî pira xwê, bataryayên galvanîk her û her dixebitin."
        },
        {
          "tr": "Derişim pilinde derişimler eşitlendiğinde sistem dengeye ulaşır ve pil gerilimi Epil = 0 olur (pil biter).",
          "en": "When the concentrations in the concentration battery are equalized, the system reaches equilibrium and the battery voltage becomes Epil = 0 (the battery runs out).",
          "de": "Wenn die Konzentrationen in der Konzentrationsbatterie ausgeglichen sind, erreicht das System ein Gleichgewicht und die Batteriespannung wird Epil = 0 (die Batterie ist leer).",
          "fr": "Lorsque les concentrations dans la batterie de concentration sont égalisées, le système atteint l'équilibre et la tension de la batterie devient Epil = 0 (la batterie s'épuise).",
          "ru": "Когда концентрации в концентрационной батарее выравниваются, система достигает равновесия и напряжение батареи становится Epil = 0 (батарея разряжается).",
          "ar": "عندما تتساوى التركيزات في بطارية التركيز، يصل النظام إلى التوازن ويصبح جهد البطارية Epil = 0 (نفاد البطارية).",
          "zh": "当浓差电池中的浓度均衡时，系统达到平衡，电池电压变为Epil = 0（电池耗尽）。",
          "ku": "Di pîla tîrbûnê de dema tîrbûn wekhev dibin, sîstem digihîje hevsengiyê û voltaja pîlê dibe Epîl = 0 (pîl diqede)."
        },
        {
          "tr": "Anotta indirgenme gerçekleşir.",
          "en": "Reduction takes place at the anode.",
          "de": "An der Anode findet die Reduktion statt.",
          "fr": "La réduction a lieu à l'anode.",
          "ru": "Восстановление происходит на аноде.",
          "ar": "يحدث الاختزال عند الأنود.",
          "zh": "还原发生在阳极。",
          "ku": "Reduksiyon li anodê pêk tê."
        },
        {
          "tr": "Standart hidrojen elektrodunun gerilimi 1,00 V tur.",
          "en": "The voltage of the standard hydrogen electrode is 1.00 V.",
          "de": "Die Spannung der Standard-Wasserstoffelektrode beträgt 1,00 V.",
          "fr": "La tension de l'électrode à hydrogène standard est de 1,00 V.",
          "ru": "Напряжение стандартного водородного электрода составляет 1,00 В.",
          "ar": "جهد قطب الهيدروجين القياسي هو 1.00 V.",
          "zh": "标准氢电极的电压为1.00V。",
          "ku": "Voltaja elektroda hîdrojenê ya standard 1,00 V e."
        },
        {
          "tr": "Anot çözeltisine su eklendiğinde pil gerilimi düşer.",
          "en": "When water is added to the anode solution, the battery voltage decreases.",
          "de": "Wenn der Anodenlösung Wasser zugesetzt wird, sinkt die Batteriespannung.",
          "fr": "Lorsque de l'eau est ajoutée à la solution anodique, la tension de la batterie diminue.",
          "ru": "При добавлении воды в анодный раствор напряжение батареи снижается.",
          "ar": "عند إضافة الماء إلى محلول الأنود، ينخفض ​​جهد البطارية.",
          "zh": "当阳极溶液中添加水时，电池电压会降低。",
          "ku": "Dema ku av li çareseriya anodê tê zêdekirin, voltaja pîlê kêm dibe."
        }
      ],
      "correctIndex": 1,
      "explanation": {
        "tr": "Doğru cevap \"Derişim pilinde derişimler eşitlendiğinde sistem dengeye ulaşır ve pil gerilimi Epil = 0 olur (pil biter).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"When the concentrations in the concentration battery are equalized, the system reaches equilibrium and the battery voltage becomes Epil = 0 (the battery runs out).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn die Konzentrationen in der Konzentrationsbatterie ausgeglichen sind, erreicht das System ein Gleichgewicht und die Batteriespannung wird Epil = 0 (die Batterie ist leer).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Lorsque les concentrations dans la batterie de concentration sont égalisées, le système atteint l'équilibre et la tension de la batterie devient Epil = 0 (la batterie s'épuise).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Когда концентрации в концентрационной батарее выравниваются, система достигает равновесия и напряжение батареи становится Epil = 0 (батарея разряжается).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"عندما تتساوى التركيزات في بطارية التركيز، يصل النظام إلى التوازن ويصبح جهد البطارية Epil = 0 (نفاد البطارية).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“当浓差电池中的浓度均衡时，系统达到平衡，电池电压变为Epil = 0（电池耗尽）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di pîla tîrbûnê de dema tîrbûn wekhev dibin, sîstem digihîje hevsengiyê û voltaja pîlê dibe Epîl = 0 (pîl diqede).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin13",
      "stem": {
        "tr": "Aşağıda Kimya ve Elektrik: Redoks ve Galvanik Piller ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre verilen yargılardan hangisi doğrudur?",
        "en": "Based on the fundamental principles of Electrochemistry: Redox & Galvanic, which statement is scientifically verified?",
        "de": "Auf der Grundlage der Einheit Elektrochemie: Redox & Galvanische Zellen: Welche der folgenden Aussagen ist wissenschaftlich exakt?",
        "fr": "Sur la base des notions fondamentales de Électrochimie: Redox & Piles Galvaniques, quelle affirmation est exacte ?",
        "ru": "На основе фундаментальных положений темы «Электрохимия: ОВР и гальванические элементы», какое суждение истинно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي عبارة علمية صحيحة؟",
        "zh": "基于“电化学：氧化还原与原电池”的基础化学知识体系，下列关于该单元的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\", kîjan gotin rast e?"
      },
      "options": [
        {
          "tr": "Daniell pilinde bakır elektrot anot olarak davranır.",
          "en": "In the Daniell battery, the copper electrode acts as the anode.",
          "de": "Bei der Daniell-Batterie fungiert die Kupferelektrode als Anode.",
          "fr": "Dans la batterie Daniell, l’électrode de cuivre fait office d’anode.",
          "ru": "В батарее Дэниела медный электрод действует как анод.",
          "ar": "في بطارية دانييل، يعمل القطب النحاسي بمثابة الأنود.",
          "zh": "在丹尼尔电池中，铜电极充当阳极。",
          "ku": "Di pîlê Daniell de, elektroda sifir wekî anode tevdigere."
        },
        {
          "tr": "Tuz köprüsündeki anyonlar katoda gider.",
          "en": "Anions in the salt bridge go to the cathode.",
          "de": "Anionen in der Salzbrücke gelangen zur Kathode.",
          "fr": "Les anions du pont salin vont à la cathode.",
          "ru": "Анионы в солевом мостике идут к катоду.",
          "ar": "تذهب الأنيونات الموجودة في جسر الملح إلى الكاثود.",
          "zh": "盐桥中的阴离子到达阴极。",
          "ku": "Anyonên di pira xwê de diçin katodê."
        },
        {
          "tr": "Pil tepkimeleri genellikle ekzotermiktir; ekzotermik bir pil tepkimesinde sıcaklık artırılırsa Le Chatelier ilkesine göre denge sola kayar ve pil gerilimi düşer.",
          "en": "Cell reactions are usually exothermic; for an exothermic cell reaction, raising the temperature shifts the equilibrium to the left (Le Chatelier's principle) and the cell voltage decreases.",
          "de": "Zellreaktionen sind meist exotherm; wird bei einer exothermen Zellreaktion die Temperatur erhöht, verschiebt sich das Gleichgewicht nach dem Prinzip von Le Chatelier nach links und die Zellspannung sinkt.",
          "fr": "Les réactions de pile sont généralement exothermiques ; pour une réaction de pile exothermique, une hausse de température déplace l'équilibre vers la gauche (principe de Le Chatelier) et la tension de la pile diminue.",
          "ru": "Реакции в гальванических элементах обычно экзотермичны; при повышении температуры для экзотермической реакции равновесие по принципу Ле Шателье смещается влево и напряжение элемента уменьшается.",
          "ar": "تفاعلات الخلايا غالبًا طاردة للحرارة؛ وفي تفاعل خلية طارد للحرارة يؤدي رفع درجة الحرارة إلى إزاحة الاتزان نحو اليسار (مبدأ لوشاتلييه) فينخفض جهد الخلية.",
          "zh": "电池反应通常是放热反应；对放热的电池反应，升高温度时根据勒夏特列原理平衡向左移动，电池电压降低。",
          "ku": "Reaksiyonên pîlê bi gelemperî ekzotermîk in; di reaksiyoneke pîlê ya ekzotermîk de heke germahî zêde bibe, li gorî prensîba Le Chatelier hevsengî ber bi çepê ve diçe û voltaja pîlê kêm dibe."
        },
        {
          "tr": "İndirgenme potansiyeli büyük olan metal anot kutbudur.",
          "en": "The metal with the greater reduction potential is the anode.",
          "de": "Das Metall mit dem größeren Reduktionspotential ist die Anode.",
          "fr": "Le métal ayant le plus grand potentiel de réduction est l'anode.",
          "ru": "Металл с большим потенциалом восстановления является анодом.",
          "ar": "الفلز ذو جهد الاختزال الأكبر هو الأنود.",
          "zh": "还原电势较大的金属是阳极。",
          "ku": "Metala ku potansiyela wê ya reduksiyonê mezintir e anod e."
        },
        {
          "tr": "Katot çözeltisine su eklendiğinde pil gerilimi yükselir.",
          "en": "When water is added to the cathode solution, the battery voltage increases.",
          "de": "Wenn der Kathodenlösung Wasser zugesetzt wird, erhöht sich die Batteriespannung.",
          "fr": "Lorsque de l'eau est ajoutée à la solution cathodique, la tension de la batterie augmente.",
          "ru": "При добавлении воды в катодный раствор напряжение батареи увеличивается.",
          "ar": "عند إضافة الماء إلى محلول الكاثود، يزداد جهد البطارية.",
          "zh": "当阴极溶液中添加水时，电池电压增加。",
          "ku": "Dema ku av li çareseriya katodê tê zêdekirin, voltaja pîlê zêde dibe."
        }
      ],
      "correctIndex": 2,
      "explanation": {
        "tr": "Doğru cevap \"Pil tepkimeleri genellikle ekzotermiktir; ekzotermik bir pil tepkimesinde sıcaklık artırılırsa Le Chatelier ilkesine göre denge sola kayar ve pil gerilimi düşer.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Cell reactions are usually exothermic; for an exothermic cell reaction, raising the temperature shifts the equilibrium to the left (Le Chatelier's principle) and the cell voltage decreases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Zellreaktionen sind meist exotherm; wird bei einer exothermen Zellreaktion die Temperatur erhöht, verschiebt sich das Gleichgewicht nach dem Prinzip von Le Chatelier nach links und die Zellspannung sinkt.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les réactions de pile sont généralement exothermiques ; pour une réaction de pile exothermique, une hausse de température déplace l'équilibre vers la gauche (principe de Le Chatelier) et la tension de la pile diminue.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Реакции в гальванических элементах обычно экзотермичны; при повышении температуры для экзотермической реакции равновесие по принципу Ле Шателье смещается влево и напряжение элемента уменьшается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تفاعلات الخلايا غالبًا طاردة للحرارة؛ وفي تفاعل خلية طارد للحرارة يؤدي رفع درجة الحرارة إلى إزاحة الاتزان نحو اليسار (مبدأ لوشاتلييه) فينخفض جهد الخلية.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“电池反应通常是放热反应；对放热的电池反应，升高温度时根据勒夏特列原理平衡向左移动，电池电压降低。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Reaksiyonên pîlê bi gelemperî ekzotermîk in; di reaksiyoneke pîlê ya ekzotermîk de heke germahî zêde bibe, li gorî prensîba Le Chatelier hevsengî ber bi çepê ve diçe û voltaja pîlê kêm dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin14",
      "stem": {
        "tr": "Kimya ve Elektrik: Redoks ve Galvanik Piller konusu kapsamında yapılan bilimsel çalışmalarda aşağıdaki bulgulardan hangisi doğrulanmıştır?",
        "en": "In the context of Electrochemistry: Redox & Galvanic, which of the following findings is an established scientific fact?",
        "de": "Im Rahmen der Einheit Elektrochemie: Redox & Galvanische Zellen: Welcher der folgenden Befunde ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l'unité Électrochimie: Redox & Piles Galvaniques, laquelle des constatations suivantes est scientifiquement vérifiée ?",
        "ru": "В контексте темы «Электрохимия: ОВР и гальванические элементы», какой из следующих выводов научно подтверждён?",
        "ar": "في سياق وحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي من النتائج التالية مثبتة علمياً؟",
        "zh": "在“电化学：氧化还原与原电池”主题范畴内，下列关于该学科知识的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de, kîjan ji van encaman ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Elektron alan madde yükseltgenmiştir.",
          "en": "The substance that receives electrons is oxidized.",
          "de": "Die Substanz, die Elektronen aufnimmt, wird oxidiert.",
          "fr": "La substance qui reçoit les électrons est oxydée.",
          "ru": "Вещество, получившее электроны, окисляется.",
          "ar": "تتأكسد المادة التي تستقبل الإلكترونات.",
          "zh": "接受电子的物质被氧化。",
          "ku": "Madeya ku elektronan distîne tê oksîdan."
        },
        {
          "tr": "E°pil negatif olduğunda pil kendiliğinden çalışır ve elektrik üretir.",
          "en": "When E°cell is negative, the cell works by itself and produces electricity.",
          "de": "Wenn E°Zelle negativ ist, arbeitet die Zelle von selbst und erzeugt elektrischen Strom.",
          "fr": "Lorsque E°pile est négatif, la pile fonctionne d'elle-même et produit de l'électricité.",
          "ru": "Когда E°эл отрицателен, элемент работает самопроизвольно и вырабатывает электричество.",
          "ar": "عندما يكون E°خلية سالبًا تعمل الخلية تلقائيًا وتنتج الكهرباء.",
          "zh": "当 E°电池 为负值时，电池能自发工作并产生电能。",
          "ku": "Dema E°pîl neyînî be, pîl bi xwe dixebite û elektrîkê çêdike."
        },
        {
          "tr": "Pil çalıştıkça anot elektrotun kütlesi katlanır.",
          "en": "As the cell operates, the mass of the anode electrode increases.",
          "de": "Während die Zelle arbeitet, nimmt die Masse der Anode zu.",
          "fr": "Pendant le fonctionnement de la pile, la masse de l'anode augmente.",
          "ru": "При работе элемента масса анода увеличивается.",
          "ar": "أثناء عمل الخلية تزداد كتلة قطب الأنود.",
          "zh": "电池工作时，阳极质量增加。",
          "ku": "Dema pîl dixebite, girseya anodê zêde dibe."
        },
        {
          "tr": "Pil denklemi bir katsayı ile çarpılırsa E°pil değeri DEĞİŞMEZ (potansiyel şiddet özelliğidir).",
          "en": "If the cell equation is multiplied by a coefficient, the E°cell value does NOT change (potential is an intensive property).",
          "de": "Wird die Zellgleichung mit einem Faktor multipliziert, ändert sich E°Zelle NICHT (das Potential ist eine intensive Größe).",
          "fr": "Si l'équation de la pile est multipliée par un coefficient, la valeur de E°pile ne change PAS (le potentiel est une grandeur intensive).",
          "ru": "Если уравнение реакции элемента умножить на коэффициент, значение E°эл НЕ изменяется (потенциал — интенсивная величина).",
          "ar": "إذا ضُربت معادلة الخلية في معامل فإن قيمة E°خلية لا تتغير (الجهد خاصية مكثفة).",
          "zh": "电池反应方程式乘以某个系数时，E°电池 的值不变（电势是强度性质）。",
          "ku": "Heke hevkêşeya pîlê bi katsayiyekê were zêdekirin, nirxa E°pîl NAGUHERE (potansiyel taybetmendiyeke întensîf e)."
        },
        {
          "tr": "Nernst eşitliğinde pil potansiyeli derişimden etkilenmez.",
          "en": "In the Nernst equation, battery potential is not affected by concentration.",
          "de": "In der Nernst-Gleichung wird das Batteriepotential nicht durch die Konzentration beeinflusst.",
          "fr": "Dans l’équation de Nernst, le potentiel de la batterie n’est pas affecté par la concentration.",
          "ru": "В уравнении Нернста концентрация не влияет на потенциал батареи.",
          "ar": "في معادلة نيرنست، لا يتأثر جهد البطارية بالتركيز.",
          "zh": "在能斯特方程中，电池电位不受浓度影响。",
          "ku": "Di hevkêşana Nernst de, potansiyela bataryayê ji hêla konsantrebûnê ve nayê bandor kirin."
        }
      ],
      "correctIndex": 3,
      "explanation": {
        "tr": "Doğru cevap \"Pil denklemi bir katsayı ile çarpılırsa E°pil değeri DEĞİŞMEZ (potansiyel şiddet özelliğidir).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the cell equation is multiplied by a coefficient, the E°cell value does NOT change (potential is an intensive property).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wird die Zellgleichung mit einem Faktor multipliziert, ändert sich E°Zelle NICHT (das Potential ist eine intensive Größe).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si l'équation de la pile est multipliée par un coefficient, la valeur de E°pile ne change PAS (le potentiel est une grandeur intensive).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если уравнение реакции элемента умножить на коэффициент, значение E°эл НЕ изменяется (потенциал — интенсивная величина).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا ضُربت معادلة الخلية في معامل فإن قيمة E°خلية لا تتغير (الجهد خاصية مكثفة).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“电池反应方程式乘以某个系数时，E°电池 的值不变（电势是强度性质）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Heke hevkêşeya pîlê bi katsayiyekê were zêdekirin, nirxa E°pîl NAGUHERE (potansiyel taybetmendiyeke întensîf e).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin15",
      "stem": {
        "tr": "ÖSYM sınav standartlarında Kimya ve Elektrik: Redoks ve Galvanik Piller ünitesi ile ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Electrochemistry: Redox & Galvanic, which of the following statements is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Elektrochemie: Redox & Galvanische Zellen: Welche der folgenden Aussagen ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d'examen de l'unité Électrochimie: Redox & Piles Galvaniques, quelle affirmation est rigoureusement exacte ?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Электрохимия: ОВР и гальванические элементы», какое утверждение абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي عبارة من العبارات التالية صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“电化学：氧化还原与原电池”单元中关于化学核心规律的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\", kîjan gotin li ser vê beşê bê guman rast e?"
      },
      "options": [
        {
          "tr": "Anotta indirgenme gerçekleşir.",
          "en": "Reduction takes place at the anode.",
          "de": "An der Anode findet die Reduktion statt.",
          "fr": "La réduction a lieu à l'anode.",
          "ru": "Восстановление происходит на аноде.",
          "ar": "يحدث الاختزال عند الأنود.",
          "zh": "还原发生在阳极。",
          "ku": "Reduksiyon li anodê pêk tê."
        },
        {
          "tr": "Standart hidrojen elektrodunun gerilimi 1,00 V tur.",
          "en": "The voltage of the standard hydrogen electrode is 1.00 V.",
          "de": "Die Spannung der Standard-Wasserstoffelektrode beträgt 1,00 V.",
          "fr": "La tension de l'électrode à hydrogène standard est de 1,00 V.",
          "ru": "Напряжение стандартного водородного электрода составляет 1,00 В.",
          "ar": "جهد قطب الهيدروجين القياسي هو 1.00 V.",
          "zh": "标准氢电极的电压为1.00V。",
          "ku": "Voltaja elektroda hîdrojenê ya standard 1,00 V e."
        },
        {
          "tr": "Anot çözeltisine su eklendiğinde pil gerilimi düşer.",
          "en": "When water is added to the anode solution, the battery voltage decreases.",
          "de": "Wenn der Anodenlösung Wasser zugesetzt wird, sinkt die Batteriespannung.",
          "fr": "Lorsque de l'eau est ajoutée à la solution anodique, la tension de la batterie diminue.",
          "ru": "При добавлении воды в анодный раствор напряжение батареи снижается.",
          "ar": "عند إضافة الماء إلى محلول الأنود، ينخفض ​​جهد البطارية.",
          "zh": "当阳极溶液中添加水时，电池电压会降低。",
          "ku": "Dema ku av li çareseriya anodê tê zêdekirin, voltaja pîlê kêm dibe."
        },
        {
          "tr": "Derişim pillerinde derişimi büyük olan hücre anottur.",
          "en": "In concentration batteries, the cell with the highest concentration is the anode.",
          "de": "Bei Konzentrationsbatterien ist die Zelle mit der höchsten Konzentration die Anode.",
          "fr": "Dans les batteries à concentration, la cellule la plus concentrée est l’anode.",
          "ru": "В концентрационных батареях анодом является элемент с наибольшей концентрацией.",
          "ar": "في بطاريات التركيز، الخلية ذات التركيز الأعلى هي الأنود.",
          "zh": "在浓差电池中，浓度最高的电池是阳极。",
          "ku": "Di pîlên tîrbûnê de hucreya ku tîrbûna wê mezintir e anod e."
        },
        {
          "tr": "Tuz köprüsü çekilirse devreden akım geçmez ve pil anında durur.",
          "en": "If the salt bridge is pulled, no current flows through the circuit and the battery stops immediately.",
          "de": "Wird die Salzbrücke gezogen, fließt kein Strom durch den Stromkreis und die Batterie stoppt sofort.",
          "fr": "Si le pont de sel est tiré, aucun courant ne circule dans le circuit et la batterie s'arrête immédiatement.",
          "ru": "Если соляной мостик выдернут, ток через цепь не течет, и батарея немедленно отключается.",
          "ar": "إذا تم سحب الجسر الملحي، فلن يتدفق تيار عبر الدائرة وتتوقف البطارية على الفور.",
          "zh": "如果盐桥被拉动，电路中就没有电流流过，电池会立即停止工作。",
          "ku": "Ger pira xwê were kişandin, di nav şebekeyê de çu naherike û pîlê yekser disekine."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Tuz köprüsü çekilirse devreden akım geçmez ve pil anında durur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"If the salt bridge is pulled, no current flows through the circuit and the battery stops immediately.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wird die Salzbrücke gezogen, fließt kein Strom durch den Stromkreis und die Batterie stoppt sofort.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si le pont de sel est tiré, aucun courant ne circule dans le circuit et la batterie s'arrête immédiatement.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если соляной мостик выдернут, ток через цепь не течет, и батарея немедленно отключается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا تم سحب الجسر الملحي، فلن يتدفق تيار عبر الدائرة وتتوقف البطارية على الفور.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果盐桥被拉动，电路中就没有电流流过，电池会立即停止工作。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger pira xwê were kişandin, di nav şebekeyê de çu naherike û pîlê yekser disekine.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin16",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimya ve Elektrik: Redoks ve Galvanik Piller konusunu işlerken sorduğu sorunun bilimsel olarak doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During an inquiry on Electrochemistry: Redox & Galvanic, which statement represents the scientifically correct answer?",
        "de": "Welche Aussage stellt im Kontext von Elektrochemie: Redox & Galvanische Zellen die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l'étude de l'unité Électrochimie: Redox & Piles Galvaniques, quelle proposition constitue la réponse scientifiquement exacte ?",
        "ru": "В ходе изучения темы «Электрохимия: ОВР и гальванические элементы», какой ответ является научно правильным?",
        "ar": "أثناء دراسة موضوع \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي إجابة علمية تمثل الإجابة الصحيحة؟",
        "zh": "在“电化学：氧化还原与原电池”教学探究中，针对相关化学知识所提问题的正确答案是？",
        "ku": "Di lêkolîna li ser beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de, kîjan bersiv ji aliyê zanistî ve rast e?"
      },
      "options": [
        {
          "tr": "Daniell pilinde Zn anot (Zn → Zn2+ + 2e-) ve Cu katottur (Cu2+ + 2e- → Cu); E°pil = 1,10 V tur.",
          "en": "In the Daniell battery, Zn is the anode (Zn → Zn2+ + 2e-) and Cu is the cathode (Cu2+ + 2e- → Cu); E°battery = 1.10 V.",
          "de": "In der Daniell-Batterie ist Zn die Anode (Zn → Zn2+ + 2e-) und Cu die Kathode (Cu2+ + 2e- → Cu); E°Batterie = 1,10 V.",
          "fr": "Dans la batterie Daniell, Zn est l'anode (Zn → Zn2+ + 2e-) et Cu est la cathode (Cu2+ + 2e- → Cu) ; E°batterie = 1,10 V.",
          "ru": "В батарее Даниэля Zn является анодом (Zn → Zn2+ + 2e-), а Cu — катодом (Cu2+ + 2e- → Cu); E°батареи = 1,10 В.",
          "ar": "في خلية دانيال يكون Zn هو الأنود (Zn → Zn2+ + 2e-) ويكون Cu هو الكاثود (Cu2+ + 2e- → Cu)؛ E°خلية = 1.10 V.",
          "zh": "在丹尼尔电池中，Zn为阳极（Zn → Zn2+ + 2e-），Cu为阴极（Cu2+ + 2e- → Cu）； E°电池 = 1.10 V。",
          "ku": "Di pîlê Daniell de, Zn anode ye (Zn → Zn2+ + 2e-) û Cu katod e (Cu2+ + 2e- → Cu); E°baterî = 1,10 V."
        },
        {
          "tr": "Tuz köprüsündeki anyonlar katoda gider.",
          "en": "Anions in the salt bridge go to the cathode.",
          "de": "Anionen in der Salzbrücke gelangen zur Kathode.",
          "fr": "Les anions du pont salin vont à la cathode.",
          "ru": "Анионы в солевом мостике идут к катоду.",
          "ar": "تذهب الأنيونات الموجودة في جسر الملح إلى الكاثود.",
          "zh": "盐桥中的阴离子到达阴极。",
          "ku": "Anyonên di pira xwê de diçin katodê."
        },
        {
          "tr": "İndirgenme potansiyeli büyük olan metal anot kutbudur.",
          "en": "The metal with the greater reduction potential is the anode.",
          "de": "Das Metall mit dem größeren Reduktionspotential ist die Anode.",
          "fr": "Le métal ayant le plus grand potentiel de réduction est l'anode.",
          "ru": "Металл с большим потенциалом восстановления является анодом.",
          "ar": "الفلز ذو جهد الاختزال الأكبر هو الأنود.",
          "zh": "还原电势较大的金属是阳极。",
          "ku": "Metala ku potansiyela wê ya reduksiyonê mezintir e anod e."
        },
        {
          "tr": "Katot çözeltisine su eklendiğinde pil gerilimi yükselir.",
          "en": "When water is added to the cathode solution, the battery voltage increases.",
          "de": "Wenn der Kathodenlösung Wasser zugesetzt wird, erhöht sich die Batteriespannung.",
          "fr": "Lorsque de l'eau est ajoutée à la solution cathodique, la tension de la batterie augmente.",
          "ru": "При добавлении воды в катодный раствор напряжение батареи увеличивается.",
          "ar": "عند إضافة الماء إلى محلول الكاثود، يزداد جهد البطارية.",
          "zh": "当阴极溶液中添加水时，电池电压增加。",
          "ku": "Dema ku av li çareseriya katodê tê zêdekirin, voltaja pîlê zêde dibe."
        },
        {
          "tr": "Derişimler eşitlendiğinde pil gerilimi maksimuma ulaşır.",
          "en": "When the concentrations are equal, the battery voltage reaches its maximum.",
          "de": "Bei gleichen Konzentrationen erreicht die Batteriespannung ihr Maximum.",
          "fr": "Lorsque les concentrations sont égales, la tension de la batterie atteint son maximum.",
          "ru": "При равенстве концентраций напряжение батареи достигает максимума.",
          "ar": "عندما تكون التركيزات متساوية، يصل جهد البطارية إلى الحد الأقصى.",
          "zh": "当浓度相等时，电池电压达到最大值。",
          "ku": "Dema ku konsantre wekhev bin, voltaja pîlê digihîje herî zêde."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Daniell pilinde Zn anot (Zn → Zn2+ + 2e-) ve Cu katottur (Cu2+ + 2e- → Cu); E°pil = 1,10 V tur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In the Daniell battery, Zn is the anode (Zn → Zn2+ + 2e-) and Cu is the cathode (Cu2+ + 2e- → Cu); E°battery = 1.10 V.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"In der Daniell-Batterie ist Zn die Anode (Zn → Zn2+ + 2e-) und Cu die Kathode (Cu2+ + 2e- → Cu); E°Batterie = 1,10 V.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans la batterie Daniell, Zn est l'anode (Zn → Zn2+ + 2e-) et Cu est la cathode (Cu2+ + 2e- → Cu) ; E°batterie = 1,10 V.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В батарее Даниэля Zn является анодом (Zn → Zn2+ + 2e-), а Cu — катодом (Cu2+ + 2e- → Cu); E°батареи = 1,10 В.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في خلية دانيال يكون Zn هو الأنود (Zn → Zn2+ + 2e-) ويكون Cu هو الكاثود (Cu2+ + 2e- → Cu)؛ E°خلية = 1.10 V.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在丹尼尔电池中，Zn为阳极（Zn → Zn2+ + 2e-），Cu为阴极（Cu2+ + 2e- → Cu）； E°电池 = 1.10 V。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di pîlê Daniell de, Zn anode ye (Zn → Zn2+ + 2e-) û Cu katod e (Cu2+ + 2e- → Cu); E°baterî = 1,10 V.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit21;
