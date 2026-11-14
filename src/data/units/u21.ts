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
    "de": "Oxidationsschritt, Daniell-Zelle und Nernst-Gleichung",
    "fr": "Étape d'oxydation, cellule de Daniell et équation de Nernst",
    "ru": "Стадия окисления, ячейка Даниэля и уравнение Нернста",
    "ar": "خطوة الأكسدة، خلية دانييل ومعادلة نيرنست",
    "zh": "氧化步骤、丹尼尔盒和能斯特方程",
    "ku": "Pêngava Oksîdasyonê, Hucreya Daniell û Wekheviya Nernst"
  },
  "facts": [
    {
      "id": "u21-f01",
      "fact": {
        "tr": "Redoks tepkimelerinde elektron veren madde yükseltgenir (indirgendir); elektron alan madde indirgenir (yükseltgendir).",
        "en": "In redox reactions, the substance donating electrons is oxidized (reduced); The substance that accepts electrons is reduced (oxidizing).",
        "de": "Bei Redoxreaktionen wird der elektronenspendende Stoff oxidiert (reduziert); Der Stoff, der Elektronen aufnimmt, wird reduziert (oxidierend).",
        "fr": "Dans les réactions redox, la substance donneuse d'électrons est oxydée (réduite) ; La substance qui accepte les électrons est réduite (oxydante).",
        "ru": "В окислительно-восстановительных реакциях вещество, отдающее электроны, окисляется (восстанавливается); Вещество, принимающее электроны, восстанавливается (окисляется).",
        "ar": "في تفاعلات الأكسدة والاختزال، تتأكسد (تخفض) المادة المانحة للإلكترونات؛ يتم اختزال المادة التي تقبل الإلكترونات (المؤكسدة).",
        "zh": "在氧化还原反应中，提供电子的物质被氧化（还原）；接受电子的物质被还原（氧化）。",
        "ku": "Di reaksiyonên redoksê de, maddeya ku elektron dide oksîdan (kêm kirin); Madeya ku elektronan qebûl dike kêm dibe (oksîdan)."
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
        "tr": "Galvanik pilde ANOTTA daima YÜKSELTGENME, KATOTTA daima İNDİRGENME gerçekleşir (KİMYA: Katotta İndirgenme, Mayot/Anotta Yükseltgenme).",
        "en": "In a galvanic battery, OXIDATION always occurs at the ANODE, and REDUCTION always occurs at the CATHODE (CHEMISTRY: Reduction at the Cathode, Oxidation at the Mayode/Anode).",
        "de": "In einer galvanischen Batterie findet die OXIDATION immer an der ANODE und die REDUKTION immer an der KATHODE statt (CHEMIE: Reduktion an der Kathode, Oxidation an der Mayode/Anode).",
        "fr": "Dans une batterie galvanique, l'OXYDATION se produit toujours à l'ANODE, et la RÉDUCTION se produit toujours à la CATHODE (CHIMIE : Réduction à la Cathode, Oxydation à la Mayode/Anode).",
        "ru": "В гальванической батарее ОКИСЛЕНИЕ всегда происходит на АНОДЕ, а ВОССТАНОВЛЕНИЕ всегда происходит на КАТОДЕ (ХИМИЯ: восстановление на катоде, окисление на майоде/аноде).",
        "ar": "في البطارية الغلفانية، تحدث الأكسدة دائمًا عند الأنود، ويحدث التخفيض دائمًا عند الكاثود (الكيمياء: الاختزال عند الكاثود، والأكسدة عند المايود/الأنود).",
        "zh": "在原电池中，氧化总是发生在阳极，还原总是发生在阴极（化学：阴极还原，梅奥德/阳极氧化）。",
        "ku": "Di pîlê galvanîk de, OXÎDasyon her tim li ANODÊ, û KÊMKIRINA her tim li KATODÊ pêk tê (KÎMÎ: Kêmkirin li Katodê, Oksîdasyon li Mayode/Anodê)."
      },
      "trap": {
        "tr": "Anotta indirgenme gerçekleşir.",
        "en": "Reduction takes place at the anode.",
        "de": "An der Anode findet die Reduktion statt.",
        "fr": "La réduction a lieu à l'anode.",
        "ru": "Восстановление происходит на аноде.",
        "ar": "يحدث التخفيض عند الأنود.",
        "zh": "还原发生在阳极。",
        "ku": "Kêmkirin li anode pêk tê."
      }
    },
    {
      "id": "u21-f03",
      "fact": {
        "tr": "Tuz köprüsündeki ANYONLAR ANODA, KATYONLAR KATODA göç ederek yük denkliğini sağlar.",
        "en": "ANIONS in the salt bridge migrate to the ANODE and CATIONS migrate to the CATHOD and ensure charge balance.",
        "de": "ANIONEN in der Salzbrücke wandern zur ANODE und KATIONEN wandern zur KATHODE und sorgen für den Ladungsausgleich.",
        "fr": "Les ANIONS dans le pont salin migrent vers l'ANODE et les CATIONS migrent vers la CATHOD et assurent l'équilibre des charges.",
        "ru": "АНИОНЫ в солевом мостике мигрируют к АНОДУ, а КАТИОНЫ мигрируют к КАТОДУ и обеспечивают баланс заряда.",
        "ar": "تهاجر الأنيونات الموجودة في جسر الملح إلى الأنود وتهاجر الكاتيونات إلى الكاثود وتضمن توازن الشحن.",
        "zh": "盐桥中的阴离子迁移到阳极，阳离子迁移到阴极并确保电荷平衡。",
        "ku": "ANIONÊN di pira xwê de ber bi ANODEyê û CATIONS koçî CATHODê dikin û hevsengiya barkirinê misoger dikin."
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
        "en": "Standard battery potential: E°battery = E°high(anode) + E°ind(cathode); If E°pil > 0, the reaction is voluntary.",
        "de": "Standardbatteriepotential: E°Batterie = E°hoch(Anode) + E°ind(Kathode); Wenn E°pil > 0 ist, ist die Reaktion freiwillig.",
        "fr": "Potentiel de batterie standard : E°batterie = E°haut (anode) + E°ind (cathode) ; Si E°pil > 0, la réaction est volontaire.",
        "ru": "Стандартный потенциал батареи: E°battery = E°high(анод) + E°ind(катод); Если E°pil > 0, реакция является произвольной.",
        "ar": "إمكانات البطارية القياسية: E°battery = E°high(anode) + E°ind(catode); إذا كان E°pil > 0، فإن التفاعل يكون إراديًا.",
        "zh": "标准电池电位：E°电池=E°high（阳极）+E°ind（阴极）；如果 E°pil > 0，则反应是自愿的。",
        "ku": "Potansiyela bataryayê ya standard: E°baterî = E°bilind(anode) + E°ind(katod); Ger E°pil > 0, reaksîyon bi dilxwazî ​​ye."
      },
      "trap": {
        "tr": "E°pil negatif olduğunda pil kendiliğinden çalışır ve elektrik üretir.",
        "en": "When E°battery is negative, the battery works on its own and produces electricity.",
        "de": "Wenn die E°-Batterie negativ ist, arbeitet die Batterie selbstständig und produziert Strom.",
        "fr": "Lorsque E°batterie est négatif, la batterie fonctionne toute seule et produit de l'électricité.",
        "ru": "Когда E°battery имеет отрицательное значение, батарея работает сама по себе и производит электричество.",
        "ar": "عندما تكون البطارية E سالبة، تعمل البطارية من تلقاء نفسها وتنتج الكهرباء.",
        "zh": "当E°电池为负极时，电池自行工作并产生电力。",
        "ku": "Dema ku batarya E° neyînî be, pîlê bi serê xwe dixebite û elektrîkê çêdike."
      }
    },
    {
      "id": "u21-f05",
      "fact": {
        "tr": "Standart Hidrojen Elektrodu (SHE): 25 °C, 1 atm H2 gazı ve 1 M H+ çözeltisi içerir; potansiyeli 0.00 V kabul edilir.",
        "en": "Standard Hydrogen Electrode (SHE): 25 °C, contains 1 atm H2 gas and 1 M H+ solution; potential is accepted as 0.00 V.",
        "de": "Standard-Wasserstoffelektrode (SHE): 25 °C, enthält 1 atm H2-Gas und 1 M H+-Lösung; Das Potential wird mit 0,00 V angenommen.",
        "fr": "Électrode à hydrogène standard (SHE) : 25 °C, contient 1 atm de gaz H2 et 1 M de solution H+ ; le potentiel est accepté comme 0,00 V.",
        "ru": "Стандартный водородный электрод (SHE): 25 °C, содержит 1 атм газа H2 и 1 M раствор H+; потенциал принимается равным 0,00 В.",
        "ar": "قطب الهيدروجين القياسي (SHE): 25 درجة مئوية، يحتوي على 1 atm H2 غاز ومحلول 1 MH+؛ يتم قبول الإمكانات على أنها 0.00 فولت.",
        "zh": "标准氢电极（SHE）：25℃，含有1atm H2气体和1M H+溶液；电位接受为 0.00 V。",
        "ku": "Elektroda Hîdrojen a Standard (SHE): 25 °C, 1 atm gaza H2 û çareseriya 1 M H+ heye; potansiyel wekî 0.00 V tê pejirandin."
      },
      "trap": {
        "tr": "Standart hidrojen elektrodunun gerilimi 1.00 V tur.",
        "en": "The voltage of the standard hydrogen electrode is 1.00 V.",
        "de": "Die Spannung der Standard-Wasserstoffelektrode beträgt 1,00 V.",
        "fr": "La tension de l'électrode à hydrogène standard est de 1,00 V.",
        "ru": "Напряжение стандартного водородного электрода составляет 1,00 В.",
        "ar": "جهد قطب الهيدروجين القياسي هو 1.00 V.",
        "zh": "标准氢电极的电压为1.00V。",
        "ku": "Voltaja elektroda hîdrojenê ya standard 1.00 V e."
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
        "ar": "المعدن ذو النشاط الأكبر هو الأنود (المعدن الذي يتمتع بقدرة أكسدة أكبر يصبح الأنود).",
        "zh": "活性较大的金属是阳极（氧化电位较大的金属成为阳极）。",
        "ku": "Metala bi çalakiyek mezintir anod e (metalê ku potansiyela oksîdasyonê mezintir dibe anod)."
      },
      "trap": {
        "tr": "İndirgenme potansiyeli büyük olan metal anot kutbudur.",
        "en": "It is the metal anode pole with high reduction potential.",
        "de": "Es ist der Metallanodenpol mit hohem Reduktionspotential.",
        "fr": "C'est le pôle anode métallique à haut potentiel de réduction.",
        "ru": "Это металлический анод с высоким восстановительным потенциалом.",
        "ar": "إنه قطب الأنود المعدني ذو إمكانية التخفيض العالية.",
        "zh": "它是具有高还原电位的金属阳极极。",
        "ku": "Ew pola anodê ya metal e ku bi potansiyela kêmkirina bilind e."
      }
    },
    {
      "id": "u21-f07",
      "fact": {
        "tr": "Pil çalıştıkça anot elektrot kütlesi genellikle aşınarak azalır; katot elektrot üzerinde madde toplanır kütlesi artar.",
        "en": "As the battery operates, the anode electrode mass generally decreases through wear; As matter accumulates on the cathode electrode, its mass increases.",
        "de": "Während die Batterie in Betrieb ist, nimmt die Masse der Anodenelektrode im Allgemeinen durch Verschleiß ab; Wenn sich Materie an der Kathodenelektrode ansammelt, nimmt deren Masse zu.",
        "fr": "Au fur et à mesure que la batterie fonctionne, la masse de l'électrode anodique diminue généralement à cause de l'usure ; À mesure que la matière s’accumule sur l’électrode cathodique, sa masse augmente.",
        "ru": "Во время работы батареи масса анодного электрода обычно уменьшается из-за износа; По мере накопления вещества на катодном электроде его масса увеличивается.",
        "ar": "أثناء تشغيل البطارية، تنخفض كتلة القطب الكهربائي بشكل عام من خلال التآكل؛ ومع تراكم المادة على القطب السالب، تزداد كتلتها.",
        "zh": "当电池工作时，阳极电极质量通常会因磨损而减少；随着物质在阴极上积聚，其质量会增加。",
        "ku": "Gava ku pîlê kar dike, girseya elektrodê anodê bi gelemperî bi cilê kêm dibe; Her ku madde li ser elektroda katodê kom dibe, girseya wê zêde dibe."
      },
      "trap": {
        "tr": "Pil çalıştıkça anot elektrotun kütlesi katlanır.",
        "en": "As the battery operates, the mass of the anode electrode increases.",
        "de": "Während die Batterie in Betrieb ist, nimmt die Masse der Anodenelektrode zu.",
        "fr": "Au fur et à mesure que la batterie fonctionne, la masse de l'électrode anodique augmente.",
        "ru": "По мере работы аккумулятора масса анодного электрода увеличивается.",
        "ar": "ومع تشغيل البطارية، تزداد كتلة القطب الموجب.",
        "zh": "随着电池的工作，阳极电极的质量增加。",
        "ku": "Her ku pîlê kar dike, girseya elektrodê anode zêde dibe."
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
        "tr": "Nernst Eşitliği: Epil = E°pil - (0.0592 / n) * log Q dur (n: aktarılan elektron mol sayısı, Q: anot/katot derişim oranı).",
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
        "ku": "Batteries Concentration: Ew bi heman elektrodê û kêşeyên cûda yên heman çareseriyê têne saz kirin; Nîv-şaneya bi konsantreya piçûk ANODE ye."
      },
      "trap": {
        "tr": "Derişim pillerinde derişimi büyük olan hücre anottur.",
        "en": "In concentration batteries, the cell with the highest concentration is the anode.",
        "de": "Bei Konzentrationsbatterien ist die Zelle mit der höchsten Konzentration die Anode.",
        "fr": "Dans les batteries à concentration, la cellule la plus concentrée est l’anode.",
        "ru": "В концентрационных батареях анодом является элемент с наибольшей концентрацией.",
        "ar": "في بطاريات التركيز، الخلية ذات التركيز الأعلى هي الأنود.",
        "zh": "在浓差电池中，浓度最高的电池是阳极。",
        "ku": "Di bataryayên konsantrekirinê de, şaneya ku herî zêde giranî lê heye anode ye."
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
        "ku": "Dema ku tansiyonên di pîlê komandî de wekhev dibin, pergal digihîje hevsengiyê û voltaja pîlê dibe Epil = 0 (baterî diqede)."
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
        "tr": "Pil tepkimeleri ekzotermik denge tepkimeleridir; sıcaklık artırılırsa Le Chatelier gereği denge sola kayar ve pil gerilimi düşer.",
        "en": "Battery reactions are exothermic equilibrium reactions; If the temperature is increased, the equilibrium shifts to the left and the battery voltage decreases, according to Le Chatelier.",
        "de": "Batteriereaktionen sind exotherme Gleichgewichtsreaktionen; Steigt die Temperatur, verschiebt sich das Gleichgewicht nach links und die Batteriespannung sinkt, so Le Chatelier.",
        "fr": "Les réactions de batterie sont des réactions d'équilibre exothermiques ; Si la température augmente, l'équilibre se déplace vers la gauche et la tension de la batterie diminue, selon Le Chatelier.",
        "ru": "Реакции батареи представляют собой экзотермические равновесные реакции; По словам Ле Шателье, если температура повышается, равновесие смещается влево и напряжение батареи снижается.",
        "ar": "تفاعلات البطارية هي تفاعلات توازن طاردة للحرارة؛ إذا ارتفعت درجة الحرارة، ينتقل التوازن إلى اليسار وينخفض ​​جهد البطارية، وفقًا لما ذكره لو شاتيليه.",
        "zh": "电池反应为放热平衡反应； Le Chatelier 表示，如果温度升高，平衡就会向左移动，电池电压就会降低。",
        "ku": "Reaksiyonên bataryayê reaksiyonên hevsengiya exotermîk in; Ger germahî zêde bibe, hevsengî ber bi çepê ve diçe û voltaja pîlê kêm dibe, li gorî Le Chatelier."
      },
      "trap": {
        "tr": "Pil ısıtıldığında gerilimi artar ve daha çok akım üretir.",
        "en": "When the battery is heated, its voltage increases and it produces more current.",
        "de": "Wenn sich die Batterie erwärmt, erhöht sich ihre Spannung und sie erzeugt mehr Strom.",
        "fr": "Lorsque la batterie chauffe, sa tension augmente et elle produit plus de courant.",
        "ru": "Когда аккумулятор нагревается, его напряжение увеличивается и он производит больший ток.",
        "ar": "عندما يتم تسخين البطارية، يزداد جهدها وينتج تيارًا أكبر.",
        "zh": "当电池受热时，其电压会增加并产生更多电流。",
        "ku": "Dema ku pîlê tê germ kirin, voltaja wê zêde dibe û herik zêde çêdike."
      }
    },
    {
      "id": "u21-f14",
      "fact": {
        "tr": "Pil denklemi bir katsayı ile çarpılırsa E°pil değeri DEĞİŞMEZ (potansiyel şiddet özelliğidir).",
        "en": "If the battery equation is multiplied by a coefficient, the E°battery value WILL NOT change (it is the potential intensity characteristic).",
        "de": "Wenn die Batteriegleichung mit einem Koeffizienten multipliziert wird, ändert sich der E°-Batteriewert NICHT (es ist die potenzielle Intensitätseigenschaft).",
        "fr": "Si l'équation de la batterie est multipliée par un coefficient, la valeur E°batterie NE changera PAS (c'est la caractéristique d'intensité potentielle).",
        "ru": "Если уравнение батареи умножить на коэффициент, значение E° батареи НЕ изменится (это характеристика потенциальной интенсивности).",
        "ar": "إذا تم ضرب معادلة البطارية بمعامل، فلن تتغير قيمة البطارية E (وهي خاصية الكثافة المحتملة).",
        "zh": "如果电池方程乘以一个系数，E°电池值不会改变（它是电位强度特性）。",
        "ku": "Ger hevkêşana bataryayê bi hevberek were zêdekirin, nirxa bataryayê E° DÊ NE guherî (ew taybetmendiya tundiya potansiyel e)."
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
        "tr": "Daniell pilinde Zn anot (Zn -> Zn2+ + 2e-) ve Cu katottur (Cu2+ + 2e- -> Cu); E°pil = 1.10 V tur.",
        "en": "In the Daniell battery, Zn is the anode (Zn -> Zn2+ + 2e-) and Cu is the cathode (Cu2+ + 2e- -> Cu); E°battery = 1.10 V.",
        "de": "In der Daniell-Batterie ist Zn die Anode (Zn -> Zn2+ + 2e-) und Cu die Kathode (Cu2+ + 2e- -> Cu); E°Batterie = 1,10 V.",
        "fr": "Dans la batterie Daniell, Zn est l'anode (Zn -> Zn2+ + 2e-) et Cu est la cathode (Cu2+ + 2e- -> Cu) ; E°batterie = 1,10 V.",
        "ru": "В батарее Даниэля Zn является анодом (Zn -> Zn2+ + 2e-), а Cu — катодом (Cu2+ + 2e- -> Cu); E°батареи = 1,10 В.",
        "ar": "في بطارية دانييل، Zn هو الأنود (Zn -> Zn2+ + 2e-) والنحاس هو الكاثود (Cu2+ + 2e- -> Cu)؛ البطارية الإلكترونية = 1.10 فولت.",
        "zh": "在丹尼尔电池中，Zn为阳极（Zn -> Zn2+ + 2e-），Cu为阴极（Cu2+ + 2e- -> Cu）； E°电池 = 1.10 V。",
        "ku": "Di pîlê Daniell de, Zn anode ye (Zn -> Zn2+ + 2e-) û Cu katod e (Cu2+ + 2e- -> Cu); E°baterî = 1,10 V."
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
        "ar": "تحدث الأكسدة عند الأنود وتنخفض كتلة القطب. يحدث التخفيض عند الكاثود وتزداد كتلة القطب.",
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
        "en": "Concentration Battery",
        "de": "Konzentrationsbatterie",
        "fr": "Batterie de concentration",
        "ru": "Концентрационная батарея",
        "ar": "بطارية التركيز",
        "zh": "浓缩电池",
        "ku": "Battery Concentration"
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
        "tr": "Anot Yarı Hücresi",
        "en": "Anode Half Cell",
        "de": "Anodenhalbzelle",
        "fr": "Demi-cellule d'anode",
        "ru": "Анодная полуячейка",
        "ar": "الأنود نصف الخلية",
        "zh": "阳极半电池",
        "ku": "Anode Half Cell"
      },
      "conceptB": {
        "tr": "Katot Yarı Hücresi",
        "en": "Cathode Half Cell",
        "de": "Kathodenhalbzelle",
        "fr": "Demi-cellule cathodique",
        "ru": "Катодная полуячейка",
        "ar": "نصف خلية الكاثود",
        "zh": "阴极半电池",
        "ku": "Katod Half Cell"
      },
      "distinction": {
        "tr": "Anotta yükseltgenme olur, elektrot aşınır, elektronlar dış devreye verilir; katotta indirgenme olur ve kütle artar.",
        "en": "Oxidation occurs at the anode, the electrode wears out, electrons are given to the external circuit; Reduction occurs at the cathode and the mass increases.",
        "de": "An der Anode kommt es zu Oxidation, die Elektrode nutzt sich ab, Elektronen werden an den externen Stromkreis abgegeben; An der Kathode findet eine Reduktion statt und die Masse nimmt zu.",
        "fr": "L'oxydation se produit à l'anode, l'électrode s'use, des électrons sont cédés au circuit extérieur ; La réduction se produit à la cathode et la masse augmente.",
        "ru": "На аноде происходит окисление, электрод изнашивается, электроны отдаются во внешнюю цепь; Восстановление происходит на катоде и масса увеличивается.",
        "ar": "تحدث الأكسدة عند الأنود، ويتآكل القطب، وتنتقل الإلكترونات إلى الدائرة الخارجية؛ يحدث التخفيض عند الكاثود وتزداد الكتلة.",
        "zh": "阳极发生氧化，电极磨损，电子供给外电路；阴极发生还原，质量增加。",
        "ku": "Oksîdasyon li anodê çêdibe, elektrod dişewite, elektron li çerxa derve têne dayîn; Kêmkirin li katodê çêdibe û girse zêde dibe."
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
        "tr": "Galvanik pil kimyasal enerjiyi istemli olarak elektrik enerjisine çevirir (Epil > 0); elektroliz elektrikle istemsiz tepkimeyi yürütür.",
        "en": "The galvanic cell voluntarily converts chemical energy into electrical energy (Epil > 0); Electrolysis drives an involuntary reaction with electricity.",
        "de": "Die galvanische Zelle wandelt chemische Energie freiwillig in elektrische Energie um (Epil > 0); Die Elektrolyse löst eine unwillkürliche Reaktion mit Elektrizität aus.",
        "fr": "La cellule galvanique convertit volontairement l'énergie chimique en énergie électrique (Epil > 0) ; L'électrolyse provoque une réaction involontaire avec l'électricité.",
        "ru": "Гальванический элемент добровольно преобразует химическую энергию в электрическую (Epil > 0); Электролиз вызывает непроизвольную реакцию с электричеством.",
        "ar": "تقوم الخلية الجلفانية بتحويل الطاقة الكيميائية طوعًا إلى طاقة كهربائية (Epil > 0)؛ يؤدي التحليل الكهربائي إلى تفاعل لا إرادي مع الكهرباء.",
        "zh": "原电池主动将化学能转化为电能（Epil > 0）；电解会与电发生非自愿反应。",
        "ku": "Xaneya galvanîk bi dilxwazî enerjiya kîmyewî vediguherîne enerjiya elektrîkê (Epil > 0); Elektrolîz bi elektrîkê re reaksiyonek bê dildar dimeşîne."
      }
    },
    {
      "id": "u21-c05",
      "conceptA": {
        "tr": "Standart Pil Potansiyeli (E°pil)",
        "en": "Standard Battery Potential (E°battery)",
        "de": "Standardbatteriepotential (E°Batterie)",
        "fr": "Potentiel de batterie standard (batterie E°)",
        "ru": "Стандартный потенциал батареи (батарея E°)",
        "ar": "إمكانات البطارية القياسية (البطارية E°)",
        "zh": "标准电池电位（E°电池）",
        "ku": "Potansiyela Pîlê Standard (E°batê)"
      },
      "conceptB": {
        "tr": "Gerçek Pil Potansiyeli (Epil)",
        "en": "Actual Battery Potential (Epil)",
        "de": "Tatsächliches Batteriepotential (Epil)",
        "fr": "Potentiel réel de la batterie (Epil)",
        "ru": "Фактический потенциал батареи (Epil)",
        "ar": "إمكانات البطارية الفعلية (Epil)",
        "zh": "实际电池潜力 (Epil)",
        "ku": "Potansiyela Pîlê ya Rastî (Epil)"
      },
      "distinction": {
        "tr": "E°pil 1 M standart derişimlerdeki potansiyeldir; Epil Nernst denklemiyle farklı derişimlerde hesaplanan potansiyeldir.",
        "en": "E°pil is the potential at 1 M standard concentrations; Epil is the potential calculated at different concentrations with the Nernst equation.",
        "de": "E°pil ist das Potenzial bei 1 M Standardkonzentrationen; Epil ist das Potenzial, das bei verschiedenen Konzentrationen mit der Nernst-Gleichung berechnet wird.",
        "fr": "E°pil est le potentiel à des concentrations standards de 1 M ; Epil est le potentiel calculé à différentes concentrations avec l'équation de Nernst.",
        "ru": "E°pil — потенциал при 1 М стандартных концентрациях; Epil — это потенциал, рассчитанный при различных концентрациях по уравнению Нернста.",
        "ar": "E°pil هو الإمكانية عند التركيزات القياسية 1 M؛ Epil هو الجهد المحسوب بتركيزات مختلفة باستخدام معادلة Nernst.",
        "zh": "E°pil 是 1 M 标准浓度下的电位； Epil 是用 Nernst 方程计算出不同浓度下的电势。",
        "ku": "E°pil potansiyela 1 M tansiyonên standard e; Epil potansiyela ku bi hevsengiya Nernst re di hûrguliyên cûda de tê hesibandin e."
      }
    },
    {
      "id": "u21-c06",
      "conceptA": {
        "tr": "Derişim Pili",
        "en": "Concentration Battery",
        "de": "Konzentrationsbatterie",
        "fr": "Batterie de concentration",
        "ru": "Концентрационная батарея",
        "ar": "بطارية التركيز",
        "zh": "浓缩电池",
        "ku": "Battery Concentration"
      },
      "conceptB": {
        "tr": "Kimyasal Pil",
        "en": "Chemical Battery",
        "de": "Chemische Batterie",
        "fr": "Batterie chimique",
        "ru": "Химическая батарея",
        "ar": "البطارية الكيميائية",
        "zh": "化学电池",
        "ku": "Pîl Kîmyewî"
      },
      "distinction": {
        "tr": "Derişim pilinde elektrotlar aynı metaldir, potansiyel sadece derişim farkından doğar; kimyasal pilde elektrot metalleri farklıdır.",
        "en": "In the concentration cell, the electrodes are the same metal, the potential arises only from the concentration difference; In a chemical battery, the electrode metals are different.",
        "de": "In der Konzentrationszelle bestehen die Elektroden aus demselben Metall, das Potential entsteht nur aus der Konzentrationsdifferenz; In einer chemischen Batterie sind die Elektrodenmetalle unterschiedlich.",
        "fr": "Dans la cellule de concentration, les électrodes sont du même métal, le potentiel naît uniquement de la différence de concentration ; Dans une batterie chimique, les métaux des électrodes sont différents.",
        "ru": "В концентрационной ячейке электроды — один и тот же металл, потенциал возникает только за счет разницы концентраций; В химической батарее электродные металлы разные.",
        "ar": "في خلية التركيز، تكون الأقطاب الكهربائية من نفس المعدن، ولا تنشأ الإمكانات إلا من اختلاف التركيز؛ في البطارية الكيميائية، تختلف معادن القطب.",
        "zh": "在浓差池中，电极是相同的金属，电势仅由浓度差产生；在化学电池中，电极金属是不同的。",
        "ku": "Di hucreya konsantasyonê de, elektrod heman metal in, potansiyel tenê ji cûdahiya konsantreyê derdikeve; Di pîlê kîmyewî de, metalên elektrodê cuda ne."
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
        "ar": "تهاجر الأنيونات الموجودة في جسر الملح إلى القطب الموجب لتحييد الشحنة الموجبة؛ تهاجر الكاتيونات إلى خلية الكاثود.",
        "zh": "盐桥中的阴离子迁移到阳极，中和正电荷；阳离子迁移到阴极电池。",
        "ku": "Anyonên di pira xwê de ji bo bêbandorkirina barê erênî ber bi anodê ve diçin; kation koçî şaneya katodê dikin."
      }
    },
    {
      "id": "u21-c08",
      "conceptA": {
        "tr": "Yükseltgen Madde",
        "en": "Oxidizing Substance",
        "de": "Oxidierende Substanz",
        "fr": "Substance comburante",
        "ru": "Окисляющее вещество",
        "ar": "مادة مؤكسدة",
        "zh": "氧化性物质",
        "ku": "Madeya oksîdan"
      },
      "conceptB": {
        "tr": "İndirgen Madde",
        "en": "Reducing Matter",
        "de": "Materie reduzieren",
        "fr": "Réduire la matière",
        "ru": "Уменьшение материи",
        "ar": "تقليل المادة",
        "zh": "减少物质",
        "ku": "Kêmkirina Madeyê"
      },
      "distinction": {
        "tr": "Yükseltgen madde elektron alarak kendisi indirgenendir; indirgen madde elektron vererek kendisi yükseltgenendir.",
        "en": "An oxidizing substance is one that is itself reduced by gaining electrons; A reducing substance is itself oxidized by donating electrons.",
        "de": "Eine oxidierende Substanz ist eine Substanz, die selbst durch Aufnahme von Elektronen reduziert wird; Eine reduzierende Substanz wird selbst durch Abgabe von Elektronen oxidiert.",
        "fr": "Une substance oxydante est une substance qui est elle-même réduite en gagnant des électrons ; Une substance réductrice est elle-même oxydée en donnant des électrons.",
        "ru": "Окисляющее вещество — это вещество, которое само восстанавливается за счет присоединения электронов; Восстановительное вещество само окисляется путем отдачи электронов.",
        "ar": "المادة المؤكسدة هي المادة التي يتم اختزالها باكتساب الإلكترونات؛ تتأكسد المادة المختزلة نفسها عن طريق التبرع بالإلكترونات.",
        "zh": "氧化物质是一种通过获得电子而自身被还原的物质。还原物质本身通过提供电子而被氧化。",
        "ku": "Maddeyek oksîdker ew e ku bixwe bi bidestxistina elektronan kêm dibe; Madeyek kêmker bixwe bi dayîna elektronan oksîde dibe."
      }
    }
  ],
  "sequences": [
    {
      "id": "u21-s01",
      "title": {
        "tr": "Pil Potansiyeli Hesaplama Adımları",
        "en": "Battery Potential Calculation Steps",
        "de": "Schritte zur Berechnung des Batteriepotentials",
        "fr": "Étapes de calcul du potentiel de la batterie",
        "ru": "Этапы расчета потенциала батареи",
        "ar": "خطوات حساب البطارية المحتملة",
        "zh": "电池潜力计算步骤",
        "ku": "Gavên Hesabkirina Potansiyela Pîlê"
      },
      "steps": [
        {
          "tr": "Yükseltgenme potansiyellerini karşılaştırıp anotu belirle",
          "en": "Compare oxidation potentials and identify the anode",
          "de": "Vergleichen Sie Oxidationspotentiale und identifizieren Sie die Anode",
          "fr": "Comparer les potentiels d'oxydation et identifier l'anode",
          "ru": "Сравните окислительные потенциалы и определите анод.",
          "ar": "قارن جهود الأكسدة وتعرف على القطب الموجب",
          "zh": "比较氧化电位并识别阳极",
          "ku": "Potansiyelên oksîdasyonê bidin ber hev û anode nas bikin"
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
          "en": "Find the standard voltage with E°battery = E°anode + E°cathode",
          "de": "Finden Sie die Standardspannung mit E°Batterie = E°Anode + E°Kathode",
          "fr": "Trouver la tension standard avec E°batterie = E°anode + E°cathode",
          "ru": "Найдите стандартное напряжение, используя E°battery = E°анода + E°катода.",
          "ar": "أوجد الجهد القياسي باستخدام البطارية E° = E°الأنود + E°الكاثود",
          "zh": "找到标准电压 E°电池 = E°阳极 + E°阴极",
          "ku": "Bi E°batterya = E°anode + E°katod voltaja standard bibînin"
        },
        {
          "tr": "Derişimler 1 M den farklıysa Nernst formülünü uygula",
          "en": "If concentrations are different than 1 M, apply Nernst formula",
          "de": "Wenn die Konzentrationen von 1 M abweichen, wenden Sie die Nernst-Formel an",
          "fr": "Si les concentrations sont différentes de 1 M, appliquer la formule de Nernst",
          "ru": "Если концентрации отличаются от 1 М, применяют формулу Нернста.",
          "ar": "إذا كانت التركيزات مختلفة عن 1 م، قم بتطبيق صيغة نيرنست",
          "zh": "如果浓度不同于 1 M，则应用能斯特公式",
          "ku": "Ger konsantre ji 1 M cuda be, formula Nernst bikar bînin"
        }
      ]
    },
    {
      "id": "u21-s02",
      "title": {
        "tr": "Standart Pil Potansiyeli Hesabı",
        "en": "Standard Battery Potential Calculation",
        "de": "Standard-Batteriepotentialberechnung",
        "fr": "Calcul du potentiel de batterie standard",
        "ru": "Стандартный расчет потенциала батареи",
        "ar": "حساب البطارية المحتملة القياسية",
        "zh": "标准电池潜力计算",
        "ku": "Hesabkirina Potansiyela Battery Standard"
      },
      "steps": [
        {
          "tr": "Yarı hücrelerdeki yükseltgenme potansiyelleri karşılaştırılır",
          "en": "Oxidation potentials in half-cells are compared",
          "de": "Oxidationspotentiale in Halbzellen werden verglichen",
          "fr": "Les potentiels d'oxydation dans les demi-cellules sont comparés",
          "ru": "Сравнение потенциалов окисления в полуклетках.",
          "ar": "تتم مقارنة إمكانات الأكسدة في نصف الخلايا",
          "zh": "比较半电池的氧化电位",
          "ku": "Potansiyelên oksîdasyonê yên di nîv-hucreyan de têne berhev kirin"
        },
        {
          "tr": "Potansiyeli büyük olan metal anot olarak seçilir",
          "en": "The metal with the highest potential is selected as the anode.",
          "de": "Als Anode wird das Metall mit dem höchsten Potential gewählt.",
          "fr": "Le métal ayant le potentiel le plus élevé est sélectionné comme anode.",
          "ru": "В качестве анода выбирают металл с наибольшим потенциалом.",
          "ar": "يتم اختيار المعدن ذو الإمكانات الأعلى ليكون الأنود.",
          "zh": "选择电势最高的金属作为阳极。",
          "ku": "Metala bi potansiyela herî bilind wekî anode tê hilbijartin."
        },
        {
          "tr": "Diğer yarı hücrede katot indirgenmesi yazılır",
          "en": "In the other half cell, cathode reduction is written",
          "de": "In der anderen Halbzelle findet die Kathodenreduktion statt",
          "fr": "Dans l’autre moitié de cellule, la réduction cathodique est écrite",
          "ru": "В другой полуэлементе записано катодное восстановление",
          "ar": "في النصف الآخر من الخلية، يتم كتابة اختزال الكاثود",
          "zh": "在另一半电池中，阴极还原被写为",
          "ku": "Di nîvê şaneya din de kêmkirina katodê tê nivîsandin"
        },
        {
          "tr": "E°pil = E°yükseltgenme + E°indirgenme formülüyle standart pil potansiyeli bulunur",
          "en": "Standard battery potential is found with the formula E°battery = E°oxidation + E°reduction",
          "de": "Das Standardbatteriepotential wird mit der Formel E°Batterie = E°Oxidation + E°Reduktion ermittelt",
          "fr": "Le potentiel de batterie standard se trouve avec la formule E°batterie = E°oxydation + E°réduction",
          "ru": "Стандартный потенциал батареи находится по формуле E°battery = E°окисления + E°восстановления.",
          "ar": "تم العثور على إمكانات البطارية القياسية بالصيغة E°battery = E°أكسدة + E°reduction",
          "zh": "标准电池电势可通过以下公式得出：E°电池 = E°氧化 + E°还原",
          "ku": "Potansiyela bataryayê ya standard bi formula E°batê = E°oksîdasyon + E° kêmkirin tê dîtin"
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
          "en": "The reaction fraction is written as Q = [Anode ion] / [Cathode ion]",
          "de": "Der Reaktionsanteil wird geschrieben als Q = [Anodenion] / [Kathodenion]",
          "fr": "La fraction de réaction s'écrit Q = [Ion anode] / [Ion cathode]",
          "ru": "Доля реакции записывается как Q = [Анодный ион] / [Катодный ион]",
          "ar": "تتم كتابة جزء التفاعل كـ Q = [أيون الأنود] / [أيون الكاثود]",
          "zh": "反应分数写为 Q = [阳极离子] / [阴极离子]",
          "ku": "Parçeya reaksiyonê wekî Q = [Îyona anodê] / [Îyona katodê] tê nivîsandin"
        },
        {
          "tr": "Nernst formülü: Epil = E°pil - (0.0592 / n) . log Q kurulur",
          "en": "Nernst formula: Epil = E°pil - (0.0592 / n) . log Q is set",
          "de": "Nernst-Formel: Epil = E°pil - (0,0592 / n) . log Q ist gesetzt",
          "fr": "Formule de Nernst : Epil = E°pil - (0,0592 / n) . le journal Q est défini",
          "ru": "Формула Нернста: Эпил = Е°пил - (0,0592/n). журнал Q установлен",
          "ar": "صيغة نيرنست : Epil = E°pil - (0.0592 / n) . تم تعيين السجل Q",
          "zh": "能斯特公式：Epil = E°pil - (0.0592 / n) 。日志 Q 已设置",
          "ku": "Formula Nernst: Epil = E°pil - (0.0592 / n) . log Q tê danîn"
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
          "ar": "تهاجر الأنيونات الموجودة في جسر الملح إلى القطب الموجب، وتهاجر الكاتيونات إلى الكاثود",
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
        "tr": "Zn(k) | Zn2+(1 M) || Cu2+(1 M) | Cu(k) Daniell pili için E°(Zn2+/Zn) = -0.76 V ve E°(Cu2+/Cu) = +0.34 V olduğuna göre standart pil potansiyeli kaç volttur?",
        "en": "Zn(k) | Zn2+(1 M) || Cu2+(1M) | For the Cu(k) Daniell battery, if E°(Zn2+/Zn) = -0.76 V and E°(Cu2+/Cu) = +0.34 V, how many volts is the standard battery potential?",
        "de": "Zn(k) | Zn2+(1 M) || Cu2+(1M) | Für die Cu(k)-Daniell-Batterie: Wenn E°(Zn2+/Zn) = -0,76 V und E°(Cu2+/Cu) = +0,34 V, wie viel Volt beträgt dann das Standardbatteriepotential?",
        "fr": "Zn(k) | Zn2+(1 M) || Cu2+(1M) | Pour la batterie Cu(k) Daniell, si E°(Zn2+/Zn) = -0,76 V et E°(Cu2+/Cu) = +0,34 V, de combien de volts est le potentiel standard de la batterie ?",
        "ru": "Zn(к) | Zn2+(1 М) || Cu2+(1M) | Для батареи Cu(k) Дэниела, если E°(Zn2+/Zn) = -0,76 В и E°(Cu2+/Cu) = +0,34 В, сколько вольт составляет стандартный потенциал батареи?",
        "ar": "الزنك (ك) | Zn2+(1 م) || Cu2+(1M) | بالنسبة لبطارية Cu(k) Daniell، إذا كانت E°(Zn2+/Zn) = -0.76 V وE°(Cu2+/Cu) = +0.34 V، فما هو عدد فولت الجهد القياسي للبطارية؟",
        "zh": "锌(k) | Zn2+(1 M) || Cu2+(1M) |对于 Cu(k) Daniell 电池，如果 E°(Zn2+/Zn) = -0.76 V 且 E°(Cu2+/Cu) = +0.34 V，则标准电池电位是多少伏？",
        "ku": "Zn(k) | Zn2+(1 M) || Cu2+(1M) | Ji bo pîlê Cu(k) Daniell, heke E°(Zn2+/Zn) = -0,76 V û E°(Cu2+/Cu) = +0,34 V, potansiyela pîlê standard çend volt e?"
      },
      "options": [
        {
          "tr": "1.10 V",
          "en": "1.10V",
          "de": "1,10 V",
          "fr": "1,10 V",
          "ru": "1,10 В",
          "ar": "1.10 فولت",
          "zh": "1.10V",
          "ku": "1.10V"
        },
        {
          "tr": "0.42 V",
          "en": "0.42V",
          "de": "0,42 V",
          "fr": "0,42 V",
          "ru": "0,42 В",
          "ar": "0.42 فولت",
          "zh": "0.42V",
          "ku": "0.42V"
        },
        {
          "tr": "-1.10 V",
          "en": "-1.10V",
          "de": "-1,10 V",
          "fr": "-1,10V",
          "ru": "-1,10 В",
          "ar": "-1.10 فولت",
          "zh": "-1.10V",
          "ku": "-1.10V"
        },
        {
          "tr": "0.76 V",
          "en": "0.76V",
          "de": "0,76 V",
          "fr": "0,76 V",
          "ru": "0,76 В",
          "ar": "0.76 فولت",
          "zh": "0.76V",
          "ku": "0.76V"
        },
        {
          "tr": "-0.42 V",
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
        "tr": "Zn yükseltgenme potansiyeli = +0.76 V (anot). Cu indirgenme potansiyeli = +0.34 V (katot). E°pil = 0.76 + 0.34 = 1.10 V.",
        "en": "Zn oxidation potential = +0.76 V (anode). Cu reduction potential = +0.34 V (cathode). E°battery = 0.76 + 0.34 = 1.10 V.",
        "de": "Zn-Oxidationspotential = +0,76 V (Anode). Cu-Reduktionspotential = +0,34 V (Kathode). E°Batterie = 0,76 + 0,34 = 1,10 V.",
        "fr": "Potentiel d'oxydation du Zn = +0,76 V (anode). Potentiel de réduction du Cu = +0,34 V (cathode). E°batterie = 0,76 + 0,34 = 1,10 V.",
        "ru": "Потенциал окисления Zn = +0,76 В (анод). Потенциал восстановления Cu = +0,34 В (катод). E°батареи = 0,76 + 0,34 = 1,10 В.",
        "ar": "إمكانات أكسدة الزنك = +0.76 فولت (الأنود). إمكانية تخفيض النحاس = +0.34 فولت (الكاثود). البطارية الإلكترونية = 0.76 + 0.34 = 1.10 فولت.",
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
          "ar": "تهاجر الأنيونات إلى القطب الموجب، وتهاجر الكاتيونات إلى الكاثود",
          "zh": "阴离子迁移到阳极，阳离子迁移到阴极",
          "ku": "Anyon koçî anodê dikin, katyon jî ber bi katodê ve diçin"
        },
        {
          "tr": "Katyonlar anoda, anyonlar katoda göç eder",
          "en": "Cations migrate to the anode, anions migrate to the cathode",
          "de": "Kationen wandern zur Anode, Anionen wandern zur Kathode",
          "fr": "Les cations migrent vers l'anode, les anions migrent vers la cathode",
          "ru": "Катионы мигрируют к аноду, анионы мигрируют к катоду.",
          "ar": "تهاجر الكاتيونات إلى القطب الموجب، والأنيونات إلى الكاثود",
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
        "ar": "في جسر الملح، تهاجر الأنيونات إلى القطب الموجب وتهاجر الكاتيونات إلى الكاثود لتوازن الشحنة. تتدفق الإلكترونات من الأنود إلى الكاثود عبر الدائرة الخارجية.",
        "zh": "在盐桥中，阴离子迁移到阳极，阳离子迁移到阴极以实现电荷平衡。电子通过外电路从阳极流向阴极。",
        "ku": "Di pira xwê de, anyon ber bi anodê ve û kation jî ji bo balansa barkirinê ber bi katodê ve diçin. Elektron ji anodê diherikin katodê bi çerxa derve."
      }
    },
    {
      "id": "u21-twin03",
      "stem": {
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimya ve Elektrik: Redoks ve Galvanik Piller konusunu işlerken Anot Yarı Hücresi üzerine sorduğu sorunun doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During a laboratory inquiry on Electrochemistry: Redox & Galvanic, which statement regarding Anode Half Cell represents the correct answer?",
        "de": "Welche Aussage zu Anodenhalbzelle stellt im Kontext von Elektrochemie: Redox & Galvanische Zellen die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l étude expérimentale de Électrochimie: Redox & Piles Galvaniques, quelle proposition sur Demi-cellule d'anode constitue la réponse exacte?",
        "ru": "В ходе лабораторного изучения темы «Электрохимия: ОВР и гальванические элементы», какой ответ относительно «Анодная полуячейка» является правильным?",
        "ar": "أثناء دراسة موضوع \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\" مخبرياً، أي إجابة بخصوص \"الأنود نصف الخلية\" تمثل الإجابة الصحيحة؟",
        "zh": "在“电化学：氧化还原与原电池”实验探究与教学分析中，针对“阳极半电池”所提问题的正确答案是？",
        "ku": "Di lêkolîna ezmûnî ya li ser \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de, kîjan bersiv derbarê \"Anode Half Cell\" de rast e?"
      },
      "options": [
        {
          "tr": "İndirgenme potansiyeli büyük olan metal anot kutbudur.",
          "en": "It is the metal anode pole with high reduction potential.",
          "de": "Es ist der Metallanodenpol mit hohem Reduktionspotential.",
          "fr": "C'est le pôle anode métallique à haut potentiel de réduction.",
          "ru": "Это металлический анод с высоким восстановительным потенциалом.",
          "ar": "إنه قطب الأنود المعدني ذو إمكانية التخفيض العالية.",
          "zh": "它是具有高还原电位的金属阳极极。",
          "ku": "Ew pola anodê ya metal e ku bi potansiyela kêmkirina bilind e."
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
          "en": "ANIONS in the salt bridge migrate to the ANODE and CATIONS migrate to the CATHOD and ensure charge balance.",
          "de": "ANIONEN in der Salzbrücke wandern zur ANODE und KATIONEN wandern zur KATHODE und sorgen für den Ladungsausgleich.",
          "fr": "Les ANIONS dans le pont salin migrent vers l'ANODE et les CATIONS migrent vers la CATHOD et assurent l'équilibre des charges.",
          "ru": "АНИОНЫ в солевом мостике мигрируют к АНОДУ, а КАТИОНЫ мигрируют к КАТОДУ и обеспечивают баланс заряда.",
          "ar": "تهاجر الأنيونات الموجودة في جسر الملح إلى الأنود وتهاجر الكاتيونات إلى الكاثود وتضمن توازن الشحن.",
          "zh": "盐桥中的阴离子迁移到阳极，阳离子迁移到阴极并确保电荷平衡。",
          "ku": "ANIONÊN di pira xwê de ber bi ANODEyê û CATIONS koçî CATHODê dikin û hevsengiya barkirinê misoger dikin."
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
        "en": "The correct statement is: \"ANIONS in the salt bridge migrate to the ANODE and CATIONS migrate to the CATHOD and ensure charge balance.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"ANIONEN in der Salzbrücke wandern zur ANODE und KATIONEN wandern zur KATHODE und sorgen für den Ladungsausgleich.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les ANIONS dans le pont salin migrent vers l'ANODE et les CATIONS migrent vers la CATHOD et assurent l'équilibre des charges.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «АНИОНЫ в солевом мостике мигрируют к АНОДУ, а КАТИОНЫ мигрируют к КАТОДУ и обеспечивают баланс заряда.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تهاجر الأنيونات الموجودة في جسر الملح إلى الأنود وتهاجر الكاتيونات إلى الكاثود وتضمن توازن الشحن.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“盐桥中的阴离子迁移到阳极，阳离子迁移到阴极并确保电荷平衡。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"ANIONÊN di pira xwê de ber bi ANODEyê û CATIONS koçî CATHODê dikin û hevsengiya barkirinê misoger dikin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin04",
      "stem": {
        "tr": "Kimya dersinde Kimya ve Elektrik: Redoks ve Galvanik Piller ünitesi incelenirken Galvanik Hücre (Pil) ile ilgili ileri sürülen aşağıdaki yargılardan hangisi bilimsel gerçektir?",
        "en": "When analyzing the unit Electrochemistry: Redox & Galvanic, which of the following propositions concerning Galvanic Cell (Battery) is a verified scientific fact?",
        "de": "Bei der Untersuchung von Elektrochemie: Redox & Galvanische Zellen: Welche Behauptung bezüglich Galvanische Zelle (Batterie) entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l unité Électrochimie: Redox & Piles Galvaniques, laquelle des affirmations suivantes concernant Cellule galvanique (batterie) est un fait scientifique avéré?",
        "ru": "При рассмотрении темы «Электрохимия: ОВР и гальванические элементы», какое из следующих суждений о «Гальванический элемент (батарея)» выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي من الأحكام التالية المتعلقة بـ \"خلية كلفانية (بطارية)\" تعتبر حقيقة علمية؟",
        "zh": "在系统辨析“电化学：氧化还原与原电池”核心规律时，下列关于“原电池（电池）”的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" tê kirin, kîjan daraza li ser \"Hucreya Galvanîk (Pîl)\" rastiyeke zanistî ye?"
      },
      "options": [
        {
          "tr": "Pil çalıştıkça anot elektrotun kütlesi katlanır.",
          "en": "As the battery operates, the mass of the anode electrode increases.",
          "de": "Während die Batterie in Betrieb ist, nimmt die Masse der Anodenelektrode zu.",
          "fr": "Au fur et à mesure que la batterie fonctionne, la masse de l'électrode anodique augmente.",
          "ru": "По мере работы аккумулятора масса анодного электрода увеличивается.",
          "ar": "ومع تشغيل البطارية، تزداد كتلة القطب الموجب.",
          "zh": "随着电池的工作，阳极电极的质量增加。",
          "ku": "Her ku pîlê kar dike, girseya elektrodê anode zêde dibe."
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
          "tr": "Pil ısıtıldığında gerilimi artar ve daha çok akım üretir.",
          "en": "When the battery is heated, its voltage increases and it produces more current.",
          "de": "Wenn sich die Batterie erwärmt, erhöht sich ihre Spannung und sie erzeugt mehr Strom.",
          "fr": "Lorsque la batterie chauffe, sa tension augmente et elle produit plus de courant.",
          "ru": "Когда аккумулятор нагревается, его напряжение увеличивается и он производит больший ток.",
          "ar": "عندما يتم تسخين البطارية، يزداد جهدها وينتج تيارًا أكبر.",
          "zh": "当电池受热时，其电压会增加并产生更多电流。",
          "ku": "Dema ku pîlê tê germ kirin, voltaja wê zêde dibe û herik zêde çêdike."
        },
        {
          "tr": "Standart pil potansiyeli: E°pil = E°yüks(anot) + E°ind(katot) tur; E°pil > 0 ise tepkime istemlidir.",
          "en": "Standard battery potential: E°battery = E°high(anode) + E°ind(cathode); If E°pil > 0, the reaction is voluntary.",
          "de": "Standardbatteriepotential: E°Batterie = E°hoch(Anode) + E°ind(Kathode); Wenn E°pil > 0 ist, ist die Reaktion freiwillig.",
          "fr": "Potentiel de batterie standard : E°batterie = E°haut (anode) + E°ind (cathode) ; Si E°pil > 0, la réaction est volontaire.",
          "ru": "Стандартный потенциал батареи: E°battery = E°high(анод) + E°ind(катод); Если E°pil > 0, реакция является произвольной.",
          "ar": "إمكانات البطارية القياسية: E°battery = E°high(anode) + E°ind(catode); إذا كان E°pil > 0، فإن التفاعل يكون إراديًا.",
          "zh": "标准电池电位：E°电池=E°high（阳极）+E°ind（阴极）；如果 E°pil > 0，则反应是自愿的。",
          "ku": "Potansiyela bataryayê ya standard: E°baterî = E°bilind(anode) + E°ind(katod); Ger E°pil > 0, reaksîyon bi dilxwazî ​​ye."
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
        "en": "The correct statement is: \"Standard battery potential: E°battery = E°high(anode) + E°ind(cathode); If E°pil > 0, the reaction is voluntary.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Standardbatteriepotential: E°Batterie = E°hoch(Anode) + E°ind(Kathode); Wenn E°pil > 0 ist, ist die Reaktion freiwillig.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Potentiel de batterie standard : E°batterie = E°haut (anode) + E°ind (cathode) ; Si E°pil > 0, la réaction est volontaire.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Стандартный потенциал батареи: E°battery = E°high(анод) + E°ind(катод); Если E°pil > 0, реакция является произвольной.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إمكانات البطارية القياسية: E°battery = E°high(anode) + E°ind(catode); إذا كان E°pil > 0، فإن التفاعل يكون إراديًا.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“标准电池电位：E°电池=E°high（阳极）+E°ind（阴极）；如果 E°pil > 0，则反应是自愿的。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Potansiyela bataryayê ya standard: E°baterî = E°bilind(anode) + E°ind(katod); Ger E°pil > 0, reaksîyon bi dilxwazî ​​ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin05",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimya ve Elektrik: Redoks ve Galvanik Piller konusundaki temel kimyasal kurallar çerçevesinde Standart Pil Potansiyeli (E°pil) kavramını en doğru açıklayan ifadedir?",
        "en": "Which of the following most accurately describes Standard Battery Potential (E°battery) within the fundamental principles of Electrochemistry: Redox & Galvanic?",
        "de": "Welche Aussage beschreibt das Konzept Standardbatteriepotential (E°Batterie) im Rahmen von Elektrochemie: Redox & Galvanische Zellen am präzisesten?",
        "fr": "Laquelle des propositions suivantes décrit le plus fidèlement Potentiel de batterie standard (batterie E°) selon les lois de Électrochimie: Redox & Piles Galvaniques?",
        "ru": "Какое из утверждений наиболее точно описывает понятие «Стандартный потенциал батареи (батарея E°)» в рамках темы «Электрохимия: ОВР и гальванические элементы»?",
        "ar": "أي مما يلي يعبر بأعلى درجات الدقة عن مفهوم \"إمكانات البطارية القياسية (البطارية E°)\" ضمن قواعد \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"؟",
        "zh": "根据“电化学：氧化还原与原电池”的基本化学原理，下列哪项阐述能最准确地界定“标准电池电位（E°电池）”这一核心概念？",
        "ku": "Kîjan ji van vebijarkan têgeha \"Potansiyela Pîlê Standard (E°batê)\" di çarçoveya prensîbên \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de herî rast rave dike?"
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
          "ku": "Di bataryayên konsantrekirinê de, şaneya ku herî zêde giranî lê heye anode ye."
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
          "tr": "Standart Hidrojen Elektrodu (SHE): 25 °C, 1 atm H2 gazı ve 1 M H+ çözeltisi içerir; potansiyeli 0.00 V kabul edilir.",
          "en": "Standard Hydrogen Electrode (SHE): 25 °C, contains 1 atm H2 gas and 1 M H+ solution; potential is accepted as 0.00 V.",
          "de": "Standard-Wasserstoffelektrode (SHE): 25 °C, enthält 1 atm H2-Gas und 1 M H+-Lösung; Das Potential wird mit 0,00 V angenommen.",
          "fr": "Électrode à hydrogène standard (SHE) : 25 °C, contient 1 atm de gaz H2 et 1 M de solution H+ ; le potentiel est accepté comme 0,00 V.",
          "ru": "Стандартный водородный электрод (SHE): 25 °C, содержит 1 атм газа H2 и 1 M раствор H+; потенциал принимается равным 0,00 В.",
          "ar": "قطب الهيدروجين القياسي (SHE): 25 درجة مئوية، يحتوي على 1 atm H2 غاز ومحلول 1 MH+؛ يتم قبول الإمكانات على أنها 0.00 فولت.",
          "zh": "标准氢电极（SHE）：25℃，含有1atm H2气体和1M H+溶液；电位接受为 0.00 V。",
          "ku": "Elektroda Hîdrojen a Standard (SHE): 25 °C, 1 atm gaza H2 û çareseriya 1 M H+ heye; potansiyel wekî 0.00 V tê pejirandin."
        }
      ],
      "correctIndex": 4,
      "explanation": {
        "tr": "Doğru cevap \"Standart Hidrojen Elektrodu (SHE): 25 °C, 1 atm H2 gazı ve 1 M H+ çözeltisi içerir; potansiyeli 0.00 V kabul edilir.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Standard Hydrogen Electrode (SHE): 25 °C, contains 1 atm H2 gas and 1 M H+ solution; potential is accepted as 0.00 V.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Standard-Wasserstoffelektrode (SHE): 25 °C, enthält 1 atm H2-Gas und 1 M H+-Lösung; Das Potential wird mit 0,00 V angenommen.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Électrode à hydrogène standard (SHE) : 25 °C, contient 1 atm de gaz H2 et 1 M de solution H+ ; le potentiel est accepté comme 0,00 V.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Стандартный водородный электрод (SHE): 25 °C, содержит 1 атм газа H2 и 1 M раствор H+; потенциал принимается равным 0,00 В.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"قطب الهيدروجين القياسي (SHE): 25 درجة مئوية، يحتوي على 1 atm H2 غاز ومحلول 1 MH+؛ يتم قبول الإمكانات على أنها 0.00 فولت.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“标准氢电极（SHE）：25℃，含有1atm H2气体和1M H+溶液；电位接受为 0.00 V。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Elektroda Hîdrojen a Standard (SHE): 25 °C, 1 atm gaza H2 û çareseriya 1 M H+ heye; potansiyel wekî 0.00 V tê pejirandin.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin06",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimya ve Elektrik: Redoks ve Galvanik Piller sorularında karşılaşılan Derişim Pili konusunda doğru olan yargı hangisidir?",
        "en": "In standard university entrance exams covering Electrochemistry: Redox & Galvanic, which assertion regarding Concentration Battery is correct?",
        "de": "Welche Feststellung bezüglich Konzentrationsbatterie ist nach den chemischen Gesetzmäßigkeiten von Elektrochemie: Redox & Galvanische Zellen richtig?",
        "fr": "Dans les épreuves universitaires portant sur Électrochimie: Redox & Piles Galvaniques, quelle affirmation concernant Batterie de concentration est correcte?",
        "ru": "В экзаменационных заданиях по теме «Электрохимия: ОВР и гальванические элементы», какое положение относительно «Концентрационная батарея» является верным?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي حكم متعلق بـ \"بطارية التركيز\" يعتبر صحيحاً؟",
        "zh": "在高考“电化学：氧化还原与原电池”经典考题中，下列有关“浓缩电池”的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de, kîjan daraza li ser \"Battery Concentration\" rast e?"
      },
      "options": [
        {
          "tr": "Aktifliği büyük olan metal anottur (yükseltgenme potansiyeli büyük olan metal anot olur).",
          "en": "The metal with greater activity is the anode (the metal with greater oxidation potential becomes the anode).",
          "de": "Das Metall mit der größeren Aktivität ist die Anode (das Metall mit dem größeren Oxidationspotential wird zur Anode).",
          "fr": "Le métal ayant la plus grande activité est l'anode (le métal ayant le plus grand potentiel d'oxydation devient l'anode).",
          "ru": "Металл с большей активностью является анодом (анодом становится металл с большим окислительным потенциалом).",
          "ar": "المعدن ذو النشاط الأكبر هو الأنود (المعدن الذي يتمتع بقدرة أكسدة أكبر يصبح الأنود).",
          "zh": "活性较大的金属是阳极（氧化电位较大的金属成为阳极）。",
          "ku": "Metala bi çalakiyek mezintir anod e (metalê ku potansiyela oksîdasyonê mezintir dibe anod)."
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
          "ar": "يحدث التخفيض عند الأنود.",
          "zh": "还原发生在阳极。",
          "ku": "Kêmkirin li anode pêk tê."
        }
      ],
      "correctIndex": 0,
      "explanation": {
        "tr": "Doğru cevap \"Aktifliği büyük olan metal anottur (yükseltgenme potansiyeli büyük olan metal anot olur).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"The metal with greater activity is the anode (the metal with greater oxidation potential becomes the anode).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Das Metall mit der größeren Aktivität ist die Anode (das Metall mit dem größeren Oxidationspotential wird zur Anode).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Le métal ayant la plus grande activité est l'anode (le métal ayant le plus grand potentiel d'oxydation devient l'anode).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Металл с большей активностью является анодом (анодом становится металл с большим окислительным потенциалом).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"المعدن ذو النشاط الأكبر هو الأنود (المعدن الذي يتمتع بقدرة أكسدة أكبر يصبح الأنود).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“活性较大的金属是阳极（氧化电位较大的金属成为阳极）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Metala bi çalakiyek mezintir anod e (metalê ku potansiyela oksîdasyonê mezintir dibe anod).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin07",
      "stem": {
        "tr": "Aşağıda Kimya ve Elektrik: Redoks ve Galvanik Piller ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre Tuz Köprüsündeki Anyonlar ile ilgili hangisi doğrudur?",
        "en": "Based on the fundamental principles of Electrochemistry: Redox & Galvanic, which statement about Anions in the Salt Bridge is scientifically accurate?",
        "de": "Auf der Grundlage der Einheit Elektrochemie: Redox & Galvanische Zellen: Welche Aussage über Anionen in der Salzbrücke ist zutreffend?",
        "fr": "Sur la base des notions fondamentales de Électrochimie: Redox & Piles Galvaniques, quelle affirmation relative à Anions dans le pont de sel est exacte?",
        "ru": "На основе фундаментальных положений темы «Электрохимия: ОВР и гальванические элементы», какое суждение о «Анионы в соляном мостике» верно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي عبارة حول \"الأنيونات في جسر الملح\" صحيحة؟",
        "zh": "基于“电化学：氧化还原与原电池”的基础化学知识体系，下列关于“盐桥中的负离子”的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\", kîjan gotin derbarê \"Anyon li Pira Xwê\" de rast e?"
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
          "en": "As the battery operates, the anode electrode mass generally decreases through wear; As matter accumulates on the cathode electrode, its mass increases.",
          "de": "Während die Batterie in Betrieb ist, nimmt die Masse der Anodenelektrode im Allgemeinen durch Verschleiß ab; Wenn sich Materie an der Kathodenelektrode ansammelt, nimmt deren Masse zu.",
          "fr": "Au fur et à mesure que la batterie fonctionne, la masse de l'électrode anodique diminue généralement à cause de l'usure ; À mesure que la matière s’accumule sur l’électrode cathodique, sa masse augmente.",
          "ru": "Во время работы батареи масса анодного электрода обычно уменьшается из-за износа; По мере накопления вещества на катодном электроде его масса увеличивается.",
          "ar": "أثناء تشغيل البطارية، تنخفض كتلة القطب الكهربائي بشكل عام من خلال التآكل؛ ومع تراكم المادة على القطب السالب، تزداد كتلتها.",
          "zh": "当电池工作时，阳极电极质量通常会因磨损而减少；随着物质在阴极上积聚，其质量会增加。",
          "ku": "Gava ku pîlê kar dike, girseya elektrodê anodê bi gelemperî bi cilê kêm dibe; Her ku madde li ser elektroda katodê kom dibe, girseya wê zêde dibe."
        },
        {
          "tr": "Pil ısıtıldığında gerilimi artar ve daha çok akım üretir.",
          "en": "When the battery is heated, its voltage increases and it produces more current.",
          "de": "Wenn sich die Batterie erwärmt, erhöht sich ihre Spannung und sie erzeugt mehr Strom.",
          "fr": "Lorsque la batterie chauffe, sa tension augmente et elle produit plus de courant.",
          "ru": "Когда аккумулятор нагревается, его напряжение увеличивается и он производит больший ток.",
          "ar": "عندما يتم تسخين البطارية، يزداد جهدها وينتج تيارًا أكبر.",
          "zh": "当电池受热时，其电压会增加并产生更多电流。",
          "ku": "Dema ku pîlê tê germ kirin, voltaja wê zêde dibe û herik zêde çêdike."
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
        "en": "The correct statement is: \"As the battery operates, the anode electrode mass generally decreases through wear; As matter accumulates on the cathode electrode, its mass increases.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Während die Batterie in Betrieb ist, nimmt die Masse der Anodenelektrode im Allgemeinen durch Verschleiß ab; Wenn sich Materie an der Kathodenelektrode ansammelt, nimmt deren Masse zu.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Au fur et à mesure que la batterie fonctionne, la masse de l'électrode anodique diminue généralement à cause de l'usure ; À mesure que la matière s’accumule sur l’électrode cathodique, sa masse augmente.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Во время работы батареи масса анодного электрода обычно уменьшается из-за износа; По мере накопления вещества на катодном электроде его масса увеличивается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"أثناء تشغيل البطارية، تنخفض كتلة القطب الكهربائي بشكل عام من خلال التآكل؛ ومع تراكم المادة على القطب السالب، تزداد كتلتها.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“当电池工作时，阳极电极质量通常会因磨损而减少；随着物质在阴极上积聚，其质量会增加。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Gava ku pîlê kar dike, girseya elektrodê anodê bi gelemperî bi cilê kêm dibe; Her ku madde li ser elektroda katodê kom dibe, girseya wê zêde dibe.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin08",
      "stem": {
        "tr": "Kimya ve Elektrik: Redoks ve Galvanik Piller konusu kapsamında Yükseltgen Madde ile ilgili yapılan çalışmalarda aşağıdaki bulgulardan hangisi bilimsel olarak doğrulanmıştır?",
        "en": "In the context of Electrochemistry: Redox & Galvanic, which of the following findings regarding Oxidizing Substance is scientifically verified?",
        "de": "Im Rahmen der Einheit Elektrochemie: Redox & Galvanische Zellen: Welcher der folgenden Befunde zu Oxidierende Substanz ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l unité Électrochimie: Redox & Piles Galvaniques, laquelle des constatations suivantes concernant Substance comburante est scientifiquement vérifiée?",
        "ru": "В контексте темы «Электрохимия: ОВР и гальванические элементы», какой из следующих выводов относительно «Окисляющее вещество» научно подтверждён?",
        "ar": "في سياق موضوع \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي من النتائج التالية المتعلقة بـ \"مادة مؤكسدة\" مثبتة علمياً؟",
        "zh": "在“电化学：氧化还原与原电池”主题范畴内，下列关于“氧化性物质”的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de, kîjan ji van encamên li ser \"Madeya oksîdan\" ji aliyê zanistî ve hatiye piştrastkirin?"
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
          "ku": "Di bataryayên konsantrekirinê de, şaneya ku herî zêde giranî lê heye anode ye."
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
          "en": "When E°battery is negative, the battery works on its own and produces electricity.",
          "de": "Wenn die E°-Batterie negativ ist, arbeitet die Batterie selbstständig und produziert Strom.",
          "fr": "Lorsque E°batterie est négatif, la batterie fonctionne toute seule et produit de l'électricité.",
          "ru": "Когда E°battery имеет отрицательное значение, батарея работает сама по себе и производит электричество.",
          "ar": "عندما تكون البطارية E سالبة، تعمل البطارية من تلقاء نفسها وتنتج الكهرباء.",
          "zh": "当E°电池为负极时，电池自行工作并产生电力。",
          "ku": "Dema ku batarya E° neyînî be, pîlê bi serê xwe dixebite û elektrîkê çêdike."
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
        "tr": "ÖSYM sınav standartlarında Kimya ve Elektrik: Redoks ve Galvanik Piller ünitesinde ele alınan Anot hakkında verilen ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Electrochemistry: Redox & Galvanic, which statement about anode is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Elektrochemie: Redox & Galvanische Zellen: Welche Aussage über Anode ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d examen de Électrochimie: Redox & Piles Galvaniques, quelle affirmation relative à anode est rigoureusement exacte?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Электрохимия: ОВР и гальванические элементы», какое утверждение о «анод» абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي عبارة حول \"الأنود\" صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“电化学：氧化还原与原电池”单元中关于“阳极”的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\", kîjan gotin li ser \"anode\" bê guman rast e?"
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
          "ar": "يحدث التخفيض عند الأنود.",
          "zh": "还原发生在阳极。",
          "ku": "Kêmkirin li anode pêk tê."
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
          "tr": "Standart hidrojen elektrodunun gerilimi 1.00 V tur.",
          "en": "The voltage of the standard hydrogen electrode is 1.00 V.",
          "de": "Die Spannung der Standard-Wasserstoffelektrode beträgt 1,00 V.",
          "fr": "La tension de l'électrode à hydrogène standard est de 1,00 V.",
          "ru": "Напряжение стандартного водородного электрода составляет 1,00 В.",
          "ar": "جهد قطب الهيدروجين القياسي هو 1.00 V.",
          "zh": "标准氢电极的电压为1.00V。",
          "ku": "Voltaja elektroda hîdrojenê ya standard 1.00 V e."
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
        "tr": "Bir kimya öğretmeninin laboratuvarda Kimya ve Elektrik: Redoks ve Galvanik Piller konusunu işlerken Kimyasal Pil üzerine sorduğu sorunun doğru cevabı aşağıdakilerden hangisidir?",
        "en": "During a laboratory inquiry on Electrochemistry: Redox & Galvanic, which statement regarding Chemical Battery represents the correct answer?",
        "de": "Welche Aussage zu Chemische Batterie stellt im Kontext von Elektrochemie: Redox & Galvanische Zellen die wissenschaftlich korrekte Antwort dar?",
        "fr": "Lors de l étude expérimentale de Électrochimie: Redox & Piles Galvaniques, quelle proposition sur Batterie chimique constitue la réponse exacte?",
        "ru": "В ходе лабораторного изучения темы «Электрохимия: ОВР и гальванические элементы», какой ответ относительно «Химическая батарея» является правильным?",
        "ar": "أثناء دراسة موضوع \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\" مخبرياً، أي إجابة بخصوص \"البطارية الكيميائية\" تمثل الإجابة الصحيحة؟",
        "zh": "在“电化学：氧化还原与原电池”实验探究与教学分析中，针对“化学电池”所提问题的正确答案是？",
        "ku": "Di lêkolîna ezmûnî ya li ser \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de, kîjan bersiv derbarê \"Pîl Kîmyewî\" de rast e?"
      },
      "options": [
        {
          "tr": "Pil ısıtıldığında gerilimi artar ve daha çok akım üretir.",
          "en": "When the battery is heated, its voltage increases and it produces more current.",
          "de": "Wenn sich die Batterie erwärmt, erhöht sich ihre Spannung und sie erzeugt mehr Strom.",
          "fr": "Lorsque la batterie chauffe, sa tension augmente et elle produit plus de courant.",
          "ru": "Когда аккумулятор нагревается, его напряжение увеличивается и он производит больший ток.",
          "ar": "عندما يتم تسخين البطارية، يزداد جهدها وينتج تيارًا أكبر.",
          "zh": "当电池受热时，其电压会增加并产生更多电流。",
          "ku": "Dema ku pîlê tê germ kirin, voltaja wê zêde dibe û herik zêde çêdike."
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
          "en": "It is the metal anode pole with high reduction potential.",
          "de": "Es ist der Metallanodenpol mit hohem Reduktionspotential.",
          "fr": "C'est le pôle anode métallique à haut potentiel de réduction.",
          "ru": "Это металлический анод с высоким восстановительным потенциалом.",
          "ar": "إنه قطب الأنود المعدني ذو إمكانية التخفيض العالية.",
          "zh": "它是具有高还原电位的金属阳极极。",
          "ku": "Ew pola anodê ya metal e ku bi potansiyela kêmkirina bilind e."
        },
        {
          "tr": "Nernst Eşitliği: Epil = E°pil - (0.0592 / n) * log Q dur (n: aktarılan elektron mol sayısı, Q: anot/katot derişim oranı).",
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
        "tr": "Doğru cevap \"Nernst Eşitliği: Epil = E°pil - (0.0592 / n) * log Q dur (n: aktarılan elektron mol sayısı, Q: anot/katot derişim oranı).\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
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
        "tr": "Kimya dersinde Kimya ve Elektrik: Redoks ve Galvanik Piller ünitesi incelenirken Anot Yarı Hücresi ile ilgili ileri sürülen aşağıdaki yargılardan hangisi bilimsel gerçektir?",
        "en": "When analyzing the unit Electrochemistry: Redox & Galvanic, which of the following propositions concerning Anode Half Cell is a verified scientific fact?",
        "de": "Bei der Untersuchung von Elektrochemie: Redox & Galvanische Zellen: Welche Behauptung bezüglich Anodenhalbzelle entspricht einer wissenschaftlichen Tatsache?",
        "fr": "En analysant l unité Électrochimie: Redox & Piles Galvaniques, laquelle des affirmations suivantes concernant Demi-cellule d'anode est un fait scientifique avéré?",
        "ru": "При рассмотрении темы «Электрохимия: ОВР и гальванические элементы», какое из следующих суждений о «Анодная полуячейка» выражает доказанный научный факт?",
        "ar": "عند دراسة وحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي من الأحكام التالية المتعلقة بـ \"الأنود نصف الخلية\" تعتبر حقيقة علمية؟",
        "zh": "在系统辨析“电化学：氧化还原与原电池”核心规律时，下列关于“阳极半电池”的命题哪项属于客观科学事实？",
        "ku": "Dema nirxandina beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" tê kirin, kîjan daraza li ser \"Anode Half Cell\" rastiyeke zanistî ye?"
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
          "ku": "Batteries Concentration: Ew bi heman elektrodê û kêşeyên cûda yên heman çareseriyê têne saz kirin; Nîv-şaneya bi konsantreya piçûk ANODE ye."
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
          "en": "When E°battery is negative, the battery works on its own and produces electricity.",
          "de": "Wenn die E°-Batterie negativ ist, arbeitet die Batterie selbstständig und produziert Strom.",
          "fr": "Lorsque E°batterie est négatif, la batterie fonctionne toute seule et produit de l'électricité.",
          "ru": "Когда E°battery имеет отрицательное значение, батарея работает сама по себе и производит электричество.",
          "ar": "عندما تكون البطارية E سالبة، تعمل البطارية من تلقاء نفسها وتنتج الكهرباء.",
          "zh": "当E°电池为负极时，电池自行工作并产生电力。",
          "ku": "Dema ku batarya E° neyînî be, pîlê bi serê xwe dixebite û elektrîkê çêdike."
        },
        {
          "tr": "Pil çalıştıkça anot elektrotun kütlesi katlanır.",
          "en": "As the battery operates, the mass of the anode electrode increases.",
          "de": "Während die Batterie in Betrieb ist, nimmt die Masse der Anodenelektrode zu.",
          "fr": "Au fur et à mesure que la batterie fonctionne, la masse de l'électrode anodique augmente.",
          "ru": "По мере работы аккумулятора масса анодного электрода увеличивается.",
          "ar": "ومع تشغيل البطارية، تزداد كتلة القطب الموجب.",
          "zh": "随着电池的工作，阳极电极的质量增加。",
          "ku": "Her ku pîlê kar dike, girseya elektrodê anode zêde dibe."
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
        "ku": "Gotina rast ev e: \"Batteries Concentration: Ew bi heman elektrodê û kêşeyên cûda yên heman çareseriyê têne saz kirin; Nîv-şaneya bi konsantreya piçûk ANODE ye.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin12",
      "stem": {
        "tr": "Aşağıdakilerden hangisi Kimya ve Elektrik: Redoks ve Galvanik Piller konusundaki temel kimyasal kurallar çerçevesinde Galvanik Hücre (Pil) kavramını en doğru açıklayan ifadedir?",
        "en": "Which of the following most accurately describes Galvanic Cell (Battery) within the fundamental principles of Electrochemistry: Redox & Galvanic?",
        "de": "Welche Aussage beschreibt das Konzept Galvanische Zelle (Batterie) im Rahmen von Elektrochemie: Redox & Galvanische Zellen am präzisesten?",
        "fr": "Laquelle des propositions suivantes décrit le plus fidèlement Cellule galvanique (batterie) selon les lois de Électrochimie: Redox & Piles Galvaniques?",
        "ru": "Какое из утверждений наиболее точно описывает понятие «Гальванический элемент (батарея)» в рамках темы «Электрохимия: ОВР и гальванические элементы»?",
        "ar": "أي مما يلي يعبر بأعلى درجات الدقة عن مفهوم \"خلية كلفانية (بطارية)\" ضمن قواعد \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"؟",
        "zh": "根据“电化学：氧化还原与原电池”的基本化学原理，下列哪项阐述能最准确地界定“原电池（电池）”这一核心概念？",
        "ku": "Kîjan ji van vebijarkan têgeha \"Hucreya Galvanîk (Pîl)\" di çarçoveya prensîbên \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de herî rast rave dike?"
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
          "ku": "Dema ku tansiyonên di pîlê komandî de wekhev dibin, pergal digihîje hevsengiyê û voltaja pîlê dibe Epil = 0 (baterî diqede)."
        },
        {
          "tr": "Anotta indirgenme gerçekleşir.",
          "en": "Reduction takes place at the anode.",
          "de": "An der Anode findet die Reduktion statt.",
          "fr": "La réduction a lieu à l'anode.",
          "ru": "Восстановление происходит на аноде.",
          "ar": "يحدث التخفيض عند الأنود.",
          "zh": "还原发生在阳极。",
          "ku": "Kêmkirin li anode pêk tê."
        },
        {
          "tr": "Standart hidrojen elektrodunun gerilimi 1.00 V tur.",
          "en": "The voltage of the standard hydrogen electrode is 1.00 V.",
          "de": "Die Spannung der Standard-Wasserstoffelektrode beträgt 1,00 V.",
          "fr": "La tension de l'électrode à hydrogène standard est de 1,00 V.",
          "ru": "Напряжение стандартного водородного электрода составляет 1,00 В.",
          "ar": "جهد قطب الهيدروجين القياسي هو 1.00 V.",
          "zh": "标准氢电极的电压为1.00V。",
          "ku": "Voltaja elektroda hîdrojenê ya standard 1.00 V e."
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
        "ku": "Gotina rast ev e: \"Dema ku tansiyonên di pîlê komandî de wekhev dibin, pergal digihîje hevsengiyê û voltaja pîlê dibe Epil = 0 (baterî diqede).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin13",
      "stem": {
        "tr": "Üniversiteye giriş sınavı Kimya ve Elektrik: Redoks ve Galvanik Piller sorularında karşılaşılan Standart Pil Potansiyeli (E°pil) konusunda doğru olan yargı hangisidir?",
        "en": "In standard university entrance exams covering Electrochemistry: Redox & Galvanic, which assertion regarding Standard Battery Potential (E°battery) is correct?",
        "de": "Welche Feststellung bezüglich Standardbatteriepotential (E°Batterie) ist nach den chemischen Gesetzmäßigkeiten von Elektrochemie: Redox & Galvanische Zellen richtig?",
        "fr": "Dans les épreuves universitaires portant sur Électrochimie: Redox & Piles Galvaniques, quelle affirmation concernant Potentiel de batterie standard (batterie E°) est correcte?",
        "ru": "В экзаменационных заданиях по теме «Электрохимия: ОВР и гальванические элементы», какое положение относительно «Стандартный потенциал батареи (батарея E°)» является верным?",
        "ar": "في أسئلة امتحانات القبول الجامعي لوحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي حكم متعلق بـ \"إمكانات البطارية القياسية (البطارية E°)\" يعتبر صحيحاً؟",
        "zh": "在高考“电化学：氧化还原与原电池”经典考题中，下列有关“标准电池电位（E°电池）”的论断哪一个是正确的？",
        "ku": "Di pirsên ezmûna zanîngehê yên li ser \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de, kîjan daraza li ser \"Potansiyela Pîlê Standard (E°batê)\" rast e?"
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
          "tr": "Pil tepkimeleri ekzotermik denge tepkimeleridir; sıcaklık artırılırsa Le Chatelier gereği denge sola kayar ve pil gerilimi düşer.",
          "en": "Battery reactions are exothermic equilibrium reactions; If the temperature is increased, the equilibrium shifts to the left and the battery voltage decreases, according to Le Chatelier.",
          "de": "Batteriereaktionen sind exotherme Gleichgewichtsreaktionen; Steigt die Temperatur, verschiebt sich das Gleichgewicht nach links und die Batteriespannung sinkt, so Le Chatelier.",
          "fr": "Les réactions de batterie sont des réactions d'équilibre exothermiques ; Si la température augmente, l'équilibre se déplace vers la gauche et la tension de la batterie diminue, selon Le Chatelier.",
          "ru": "Реакции батареи представляют собой экзотермические равновесные реакции; По словам Ле Шателье, если температура повышается, равновесие смещается влево и напряжение батареи снижается.",
          "ar": "تفاعلات البطارية هي تفاعلات توازن طاردة للحرارة؛ إذا ارتفعت درجة الحرارة، ينتقل التوازن إلى اليسار وينخفض ​​جهد البطارية، وفقًا لما ذكره لو شاتيليه.",
          "zh": "电池反应为放热平衡反应； Le Chatelier 表示，如果温度升高，平衡就会向左移动，电池电压就会降低。",
          "ku": "Reaksiyonên bataryayê reaksiyonên hevsengiya exotermîk in; Ger germahî zêde bibe, hevsengî ber bi çepê ve diçe û voltaja pîlê kêm dibe, li gorî Le Chatelier."
        },
        {
          "tr": "İndirgenme potansiyeli büyük olan metal anot kutbudur.",
          "en": "It is the metal anode pole with high reduction potential.",
          "de": "Es ist der Metallanodenpol mit hohem Reduktionspotential.",
          "fr": "C'est le pôle anode métallique à haut potentiel de réduction.",
          "ru": "Это металлический анод с высоким восстановительным потенциалом.",
          "ar": "إنه قطب الأنود المعدني ذو إمكانية التخفيض العالية.",
          "zh": "它是具有高还原电位的金属阳极极。",
          "ku": "Ew pola anodê ya metal e ku bi potansiyela kêmkirina bilind e."
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
        "tr": "Doğru cevap \"Pil tepkimeleri ekzotermik denge tepkimeleridir; sıcaklık artırılırsa Le Chatelier gereği denge sola kayar ve pil gerilimi düşer.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"Battery reactions are exothermic equilibrium reactions; If the temperature is increased, the equilibrium shifts to the left and the battery voltage decreases, according to Le Chatelier.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Batteriereaktionen sind exotherme Gleichgewichtsreaktionen; Steigt die Temperatur, verschiebt sich das Gleichgewicht nach links und die Batteriespannung sinkt, so Le Chatelier.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Les réactions de batterie sont des réactions d'équilibre exothermiques ; Si la température augmente, l'équilibre se déplace vers la gauche et la tension de la batterie diminue, selon Le Chatelier.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Реакции батареи представляют собой экзотермические равновесные реакции; По словам Ле Шателье, если температура повышается, равновесие смещается влево и напряжение батареи снижается.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"تفاعلات البطارية هي تفاعلات توازن طاردة للحرارة؛ إذا ارتفعت درجة الحرارة، ينتقل التوازن إلى اليسار وينخفض ​​جهد البطارية، وفقًا لما ذكره لو شاتيليه.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“电池反应为放热平衡反应； Le Chatelier 表示，如果温度升高，平衡就会向左移动，电池电压就会降低。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Reaksiyonên bataryayê reaksiyonên hevsengiya exotermîk in; Ger germahî zêde bibe, hevsengî ber bi çepê ve diçe û voltaja pîlê kêm dibe, li gorî Le Chatelier.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin14",
      "stem": {
        "tr": "Aşağıda Kimya ve Elektrik: Redoks ve Galvanik Piller ünitesi ile ilgili temel bilgiler verilmiştir. Buna göre Derişim Pili ile ilgili hangisi doğrudur?",
        "en": "Based on the fundamental principles of Electrochemistry: Redox & Galvanic, which statement about Concentration Battery is scientifically accurate?",
        "de": "Auf der Grundlage der Einheit Elektrochemie: Redox & Galvanische Zellen: Welche Aussage über Konzentrationsbatterie ist zutreffend?",
        "fr": "Sur la base des notions fondamentales de Électrochimie: Redox & Piles Galvaniques, quelle affirmation relative à Batterie de concentration est exacte?",
        "ru": "На основе фундаментальных положений темы «Электрохимия: ОВР и гальванические элементы», какое суждение о «Концентрационная батарея» верно?",
        "ar": "بناءً على المبادئ الكيميائية لوحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي عبارة حول \"بطارية التركيز\" صحيحة؟",
        "zh": "基于“电化学：氧化还原与原电池”的基础化学知识体系，下列关于“浓缩电池”的判断完全正确的是？",
        "ku": "Li gorî zanyariyên bingehîn ên beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\", kîjan gotin derbarê \"Battery Concentration\" de rast e?"
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
          "en": "When E°battery is negative, the battery works on its own and produces electricity.",
          "de": "Wenn die E°-Batterie negativ ist, arbeitet die Batterie selbstständig und produziert Strom.",
          "fr": "Lorsque E°batterie est négatif, la batterie fonctionne toute seule et produit de l'électricité.",
          "ru": "Когда E°battery имеет отрицательное значение, батарея работает сама по себе и производит электричество.",
          "ar": "عندما تكون البطارية E سالبة، تعمل البطارية من تلقاء نفسها وتنتج الكهرباء.",
          "zh": "当E°电池为负极时，电池自行工作并产生电力。",
          "ku": "Dema ku batarya E° neyînî be, pîlê bi serê xwe dixebite û elektrîkê çêdike."
        },
        {
          "tr": "Pil çalıştıkça anot elektrotun kütlesi katlanır.",
          "en": "As the battery operates, the mass of the anode electrode increases.",
          "de": "Während die Batterie in Betrieb ist, nimmt die Masse der Anodenelektrode zu.",
          "fr": "Au fur et à mesure que la batterie fonctionne, la masse de l'électrode anodique augmente.",
          "ru": "По мере работы аккумулятора масса анодного электрода увеличивается.",
          "ar": "ومع تشغيل البطارية، تزداد كتلة القطب الموجب.",
          "zh": "随着电池的工作，阳极电极的质量增加。",
          "ku": "Her ku pîlê kar dike, girseya elektrodê anode zêde dibe."
        },
        {
          "tr": "Pil denklemi bir katsayı ile çarpılırsa E°pil değeri DEĞİŞMEZ (potansiyel şiddet özelliğidir).",
          "en": "If the battery equation is multiplied by a coefficient, the E°battery value WILL NOT change (it is the potential intensity characteristic).",
          "de": "Wenn die Batteriegleichung mit einem Koeffizienten multipliziert wird, ändert sich der E°-Batteriewert NICHT (es ist die potenzielle Intensitätseigenschaft).",
          "fr": "Si l'équation de la batterie est multipliée par un coefficient, la valeur E°batterie NE changera PAS (c'est la caractéristique d'intensité potentielle).",
          "ru": "Если уравнение батареи умножить на коэффициент, значение E° батареи НЕ изменится (это характеристика потенциальной интенсивности).",
          "ar": "إذا تم ضرب معادلة البطارية بمعامل، فلن تتغير قيمة البطارية E (وهي خاصية الكثافة المحتملة).",
          "zh": "如果电池方程乘以一个系数，E°电池值不会改变（它是电位强度特性）。",
          "ku": "Ger hevkêşana bataryayê bi hevberek were zêdekirin, nirxa bataryayê E° DÊ NE guherî (ew taybetmendiya tundiya potansiyel e)."
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
        "en": "The correct statement is: \"If the battery equation is multiplied by a coefficient, the E°battery value WILL NOT change (it is the potential intensity characteristic).\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"Wenn die Batteriegleichung mit einem Koeffizienten multipliziert wird, ändert sich der E°-Batteriewert NICHT (es ist die potenzielle Intensitätseigenschaft).\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Si l'équation de la batterie est multipliée par un coefficient, la valeur E°batterie NE changera PAS (c'est la caractéristique d'intensité potentielle).\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «Если уравнение батареи умножить на коэффициент, значение E° батареи НЕ изменится (это характеристика потенциальной интенсивности).». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"إذا تم ضرب معادلة البطارية بمعامل، فلن تتغير قيمة البطارية E (وهي خاصية الكثافة المحتملة).\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“如果电池方程乘以一个系数，E°电池值不会改变（它是电位强度特性）。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Ger hevkêşana bataryayê bi hevberek were zêdekirin, nirxa bataryayê E° DÊ NE guherî (ew taybetmendiya tundiya potansiyel e).\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    },
    {
      "id": "u21-twin15",
      "stem": {
        "tr": "Kimya ve Elektrik: Redoks ve Galvanik Piller konusu kapsamında Tuz Köprüsündeki Anyonlar ile ilgili yapılan çalışmalarda aşağıdaki bulgulardan hangisi bilimsel olarak doğrulanmıştır?",
        "en": "In the context of Electrochemistry: Redox & Galvanic, which of the following findings regarding Anions in the Salt Bridge is scientifically verified?",
        "de": "Im Rahmen der Einheit Elektrochemie: Redox & Galvanische Zellen: Welcher der folgenden Befunde zu Anionen in der Salzbrücke ist wissenschaftlich bestätigt?",
        "fr": "Dans le cadre de l unité Électrochimie: Redox & Piles Galvaniques, laquelle des constatations suivantes concernant Anions dans le pont de sel est scientifiquement vérifiée?",
        "ru": "В контексте темы «Электрохимия: ОВР и гальванические элементы», какой из следующих выводов относительно «Анионы в соляном мостике» научно подтверждён?",
        "ar": "في سياق موضوع \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي من النتائج التالية المتعلقة بـ \"الأنيونات في جسر الملح\" مثبتة علمياً؟",
        "zh": "在“电化学：氧化还原与原电池”主题范畴内，下列关于“盐桥中的负离子”的研究结论中哪一项已获得科学证实？",
        "ku": "Di çarçoveya mijara \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\" de, kîjan ji van encamên li ser \"Anyon li Pira Xwê\" ji aliyê zanistî ve hatiye piştrastkirin?"
      },
      "options": [
        {
          "tr": "Anotta indirgenme gerçekleşir.",
          "en": "Reduction takes place at the anode.",
          "de": "An der Anode findet die Reduktion statt.",
          "fr": "La réduction a lieu à l'anode.",
          "ru": "Восстановление происходит на аноде.",
          "ar": "يحدث التخفيض عند الأنود.",
          "zh": "还原发生在阳极。",
          "ku": "Kêmkirin li anode pêk tê."
        },
        {
          "tr": "Standart hidrojen elektrodunun gerilimi 1.00 V tur.",
          "en": "The voltage of the standard hydrogen electrode is 1.00 V.",
          "de": "Die Spannung der Standard-Wasserstoffelektrode beträgt 1,00 V.",
          "fr": "La tension de l'électrode à hydrogène standard est de 1,00 V.",
          "ru": "Напряжение стандартного водородного электрода составляет 1,00 В.",
          "ar": "جهد قطب الهيدروجين القياسي هو 1.00 V.",
          "zh": "标准氢电极的电压为1.00V。",
          "ku": "Voltaja elektroda hîdrojenê ya standard 1.00 V e."
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
          "ku": "Di bataryayên konsantrekirinê de, şaneya ku herî zêde giranî lê heye anode ye."
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
        "tr": "ÖSYM sınav standartlarında Kimya ve Elektrik: Redoks ve Galvanik Piller ünitesinde ele alınan Yükseltgen Madde hakkında verilen ifadelerden hangisi kesinlikle doğrudur?",
        "en": "According to exam standards in the unit Electrochemistry: Redox & Galvanic, which statement about Oxidizing Substance is strictly correct?",
        "de": "Nach Prüfungsstandards der Einheit Elektrochemie: Redox & Galvanische Zellen: Welche Aussage über Oxidierende Substanz ist uneingeschränkt zutreffend?",
        "fr": "Selon les normes d examen de Électrochimie: Redox & Piles Galvaniques, quelle affirmation relative à Substance comburante est rigoureusement exacte?",
        "ru": "В соответствии с экзаменационными стандартами раздела «Электрохимия: ОВР и гальванические элементы», какое утверждение о «Окисляющее вещество» абсолютно верно?",
        "ar": "وفقاً للمعايير الامتحانية لوحدة \"الكيمياء الكهربية: الأكسدة والاختزال والخلايا الجلفانية\"، أي عبارة حول \"مادة مؤكسدة\" صحيحة تماماً؟",
        "zh": "依照高考考纲标准，在“电化学：氧化还原与原电池”单元中关于“氧化性物质”的表述哪一项完全正确？",
        "ku": "Li gorî pîvanên ezmûnê yên beşa \"Kîmya û Elektrîk: Redoks û Pîlên Galvanîk\", kîjan gotin li ser \"Madeya oksîdan\" bê guman rast e?"
      },
      "options": [
        {
          "tr": "Daniell pilinde Zn anot (Zn -> Zn2+ + 2e-) ve Cu katottur (Cu2+ + 2e- -> Cu); E°pil = 1.10 V tur.",
          "en": "In the Daniell battery, Zn is the anode (Zn -> Zn2+ + 2e-) and Cu is the cathode (Cu2+ + 2e- -> Cu); E°battery = 1.10 V.",
          "de": "In der Daniell-Batterie ist Zn die Anode (Zn -> Zn2+ + 2e-) und Cu die Kathode (Cu2+ + 2e- -> Cu); E°Batterie = 1,10 V.",
          "fr": "Dans la batterie Daniell, Zn est l'anode (Zn -> Zn2+ + 2e-) et Cu est la cathode (Cu2+ + 2e- -> Cu) ; E°batterie = 1,10 V.",
          "ru": "В батарее Даниэля Zn является анодом (Zn -> Zn2+ + 2e-), а Cu — катодом (Cu2+ + 2e- -> Cu); E°батареи = 1,10 В.",
          "ar": "في بطارية دانييل، Zn هو الأنود (Zn -> Zn2+ + 2e-) والنحاس هو الكاثود (Cu2+ + 2e- -> Cu)؛ البطارية الإلكترونية = 1.10 فولت.",
          "zh": "在丹尼尔电池中，Zn为阳极（Zn -> Zn2+ + 2e-），Cu为阴极（Cu2+ + 2e- -> Cu）； E°电池 = 1.10 V。",
          "ku": "Di pîlê Daniell de, Zn anode ye (Zn -> Zn2+ + 2e-) û Cu katod e (Cu2+ + 2e- -> Cu); E°baterî = 1,10 V."
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
          "en": "It is the metal anode pole with high reduction potential.",
          "de": "Es ist der Metallanodenpol mit hohem Reduktionspotential.",
          "fr": "C'est le pôle anode métallique à haut potentiel de réduction.",
          "ru": "Это металлический анод с высоким восстановительным потенциалом.",
          "ar": "إنه قطب الأنود المعدني ذو إمكانية التخفيض العالية.",
          "zh": "它是具有高还原电位的金属阳极极。",
          "ku": "Ew pola anodê ya metal e ku bi potansiyela kêmkirina bilind e."
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
        "tr": "Doğru cevap \"Daniell pilinde Zn anot (Zn -> Zn2+ + 2e-) ve Cu katottur (Cu2+ + 2e- -> Cu); E°pil = 1.10 V tur.\" ifadesidir. Bu kural ÖSYM Kimya sınavlarında temel bir kazanım olarak doğrudan sorgulanmaktadır.",
        "en": "The correct statement is: \"In the Daniell battery, Zn is the anode (Zn -> Zn2+ + 2e-) and Cu is the cathode (Cu2+ + 2e- -> Cu); E°battery = 1.10 V.\". Verified fundamental chemical concept in the official curriculum.",
        "de": "Die zutreffende Aussage lautet: \"In der Daniell-Batterie ist Zn die Anode (Zn -> Zn2+ + 2e-) und Cu die Kathode (Cu2+ + 2e- -> Cu); E°Batterie = 1,10 V.\". Gesichertes chemisches Grundprinzip.",
        "fr": "L'affirmation exacte est: \"Dans la batterie Daniell, Zn est l'anode (Zn -> Zn2+ + 2e-) et Cu est la cathode (Cu2+ + 2e- -> Cu) ; E°batterie = 1,10 V.\". Notion fondamentale du programme officiel de chimie.",
        "ru": "Правильное утверждение: «В батарее Даниэля Zn является анодом (Zn -> Zn2+ + 2e-), а Cu — катодом (Cu2+ + 2e- -> Cu); E°батареи = 1,10 В.». Фундаментальный химический факт официальной программы.",
        "ar": "العبارة الصحيحة هي: \"في بطارية دانييل، Zn هو الأنود (Zn -> Zn2+ + 2e-) والنحاس هو الكاثود (Cu2+ + 2e- -> Cu)؛ البطارية الإلكترونية = 1.10 فولت.\". مفهوم كيميائي أساسي معتمد في المنهاج.",
        "zh": "正确表述为：“在丹尼尔电池中，Zn为阳极（Zn -> Zn2+ + 2e-），Cu为阴极（Cu2+ + 2e- -> Cu）； E°电池 = 1.10 V。”。属于化学学科必考的核心客观真理。",
        "ku": "Gotina rast ev e: \"Di pîlê Daniell de, Zn anode ye (Zn -> Zn2+ + 2e-) û Cu katod e (Cu2+ + 2e- -> Cu); E°baterî = 1,10 V.\". Têgeheke kîmyewî ya bingehîn a fermî ye."
      }
    }
  ]
};

export default unit21;
